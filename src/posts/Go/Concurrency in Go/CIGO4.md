---
title: Go에서 풀어보는 유명한 동시성 문제들
date: 2023-09-04
excerpt: C에서나 하던걸 Go로 해보자
categories:
- 'Golang'
- 'Concurrency in Go'
  coverImage: '/post_img/Go/Concurrency in Go/cover.png'
  coverWidth: 16
  coverHeight: 9
  indexed: false
  exposed: true

---

<script>
  import Highlight from '$lib/components/Highlight.svelte';
  import CodeBlockWrapper from '$lib/components/CodeBlockWrapper.svelte';
  import Image from '$lib/components/Image.svelte';
</script>

## Producer-Consumer Problem

---

이전 포스트에서 Producer-Consumer Problem을 Condition Variable을 이용해서 구현해봤다.
이번엔 Channel을 이용해서 Producer-Consumer Problem을 구현해볼 것이다. 이러면 Shared Memory 방식에서 Message Passing 방식으로 바뀌게 된다.

Producer-Consumer Problem의 핵심은 Producer와 Consumer의 균형을 잘 맞추는 것이다. 또한 Producer와 Consumer가 통신하기 위한 버퍼(채널)의 크기도 중요하다.

<br>

일단 기본적인 형태의 Producer 및 Consumer에서 시작하여, 최종적으로 가장 좋은 형태의 Producer 및 Consumer를 만들어볼 것이다.

<CodeBlockWrapper>

```go
func producer(index int, done <-chan struct{}, output chan<- int) {
	for {
		value := rand.Int()
		time.Sleep(time.Millisecond * time.Duration(rand.Intn(1000)))
		select {
		case output <- value:
		case <-done:
			return
		}
		fmt.Println("producer", index, "produced", value)
	}
}
```

</CodeBlockWrapper>

위 코드는 Producer의 기본적인 형태로, 임의의 값을 생성하여 output 채널에 보내는 코드이다. 또한 done 채널을 통해 종료 신호를 받으면 종료되도록 구현되어있다.

<br>

다음으로, Consumer의 기본적인 형태를 구현해보자.

```go
func consumer(index int, input <-chan int) {
	for value := range input {
		fmt.Println("consumer", index, "consumed", value)
	}
}
```

Consumer는 단순히 채널에서 값을 받아와서 출력한다.

<br>

이제 이 Producer와 Consumer를 연결해보자.

<CodeBlockWrapper>

```go
func main() {
	doneCh := make(chan struct{})
	dataCh := make(chan int, 0)
	for i := 0; i < 10; i++ {
		go producer(i, doneCh, dataCh)
	}
	for i := 0; i < 10; i++ {
		go consumer(i, dataCh)
	}
	select {}
}
```

</CodeBlockWrapper>

위 코드는 데이터 채널과 종료 채널을 만들고, Producer와 Consumer를 각각 10개씩 만들어서 실행시킨다.
이전에 작성하였던 Condition Variable을 이용한 Producer-Consumer Problem과 비교해보면, 채널이 여러 동기화 문제를 추상화하여 해결해주기 때문에 프로그램이 훨씬 간결해진 것을 볼 수 있다.

<br>

이제 여기에 Graceful Shutdown을 구현해보려 한다.
`main` 함수에서 `select{}`로 무한 대기하고 있는데, 이를 `done` 채널을 닫는 것으로 변경하면 된다.

<CodeBlockWrapper>

```go
func main() {
	doneCh := make(chan struct{})
	dataCh := make(chan int, 0)
	for i := 0; i < 10; i++ {
		go producer(i, doneCh, dataCh)
	}
	for i := 0; i < 10; i++ {
		go consumer(i, dataCh)
	}
	time.Sleep(time.Second * 10)
	close(doneCh)
}
```

</CodeBlockWrapper>

이렇게 하면 10초 후에 `done` 채널이 닫히면서 모든 Producer 고루틴에 종료 신호를 보낼 것이다. 하지만 이대로 두면 단순히 종료 신호만 보낸 것일 뿐, Producer 고루틴이 종료되기 전에 `main` 함수가 종료되어 버린다.
따라서 모든 Producer 고루틴이 실제로 종료가 되기까지 기다리려면 `sync.WaitGroup`을 이용해야 한다.

<CodeBlockWrapper>

```go
func producer(index int, wg *sync.WaitGroup, done <-chan struct{}, output chan<- int) {
	defer wg.Done()
	...
}

...

func main() {
	doneCh := make(chan struct{})
	dataCh := make(chan int, 0)
	producers := sync.WaitGroup{}
	for i := 0; i < 10; i++ {
		producers.Add(1)
		go producer(i, &producers, doneCh, dataCh)
	}
	for i := 0; i < 10; i++ {
		go consumer(i, dataCh)
	}
	time.Sleep(time.Second * 10)
	close(doneCh)
  producers.Wait()
}
```

</CodeBlockWrapper>

이제 모든 Producer 고루틴이 종료되기까지 기다렸으니, Consumer 고루틴도 종료시켜야 한다.
이 때 `done` 채널을 사용하면 데이터 채널에 남아있는 데이터를 모두 소비하지 못하고 종료될 수 있다. 따라서 데이터 채널을 닫음으로써 Consumer 고루틴이 종료되도록 할 것이다.

Producer 고루틴이 모두 종료되었다는 신호를 받고 나면 데이터 채널을 닫아 Consumer 고루틴이 종료되도록 할 것이다.
또한 Producer와 마찬가지로 Consumer 고루틴도 `sync.WaitGroup`을 이용하여 종료를 기다릴 것이다.

<CodeBlockWrapper>

```go
...

func consumer(index int, wg *sync.WaitGroup, input <-chan int) {
	defer wg.Done()
	for value := range input {
		fmt.Println("consumer", index, "consumed", value)
	}
}

func main() {
	doneCh := make(chan struct{})
	dataCh := make(chan int, 0)
	producers := sync.WaitGroup{}
	consumers := sync.WaitGroup{}
	for i := 0; i < 10; i++ {
		producers.Add(1)
		go producer(i, &producers, doneCh, dataCh)
	}
	for i := 0; i < 10; i++ {
		consumers.Add(1)
		go consumer(i, &consumers, dataCh)
	}
	time.Sleep(time.Second * 10)
	close(doneCh)
	producers.Wait()
	close(dataCh)
	consumers.Wait()
}
```

</CodeBlockWrapper>

수정이 완료된 모습이다. 다시 언급되지만, Condition Variable을 이용한 Producer-Consumer Problem과 비교해보면 채널을 이용한 방식이 훨씬 간결하다는 것을 알 수 있다.

이러한 코드를 바탕으로 채널의 용량을 수정하거나 Producer 및 Consumer의 개수를 수정하면서 파인 튜닝을 할 수 있지만 이러한 최적화 과정은 철저하게 동작을 검증한 후 이루어져야 한다.

<br><br>

## Dining Philosophers Problem

---

Dining Philosophers Problem은 [이 포스트](https://jhseoeo.github.io/posts/post/Computer%20Science/OS/Concurrency)에서도 다룬 적 있는 내용으로, 뮤텍스의 필요성과 Critical Section, Deadlock, 및 Starvation에 대해 학습할 수 있는 유명한 동시성 문제이다.

자세한 내용은 이전 포스트에서 다루었으니 생략하고, 이번엔 이 문제를 Go로 구현해보려 한다.

<br>

각각의 철학자 고루틴 및 `main` 함수는 다음과 같이 구현된다.

<CodeBlockWrapper>

```go
func philosopher(index int, firstFork, secondFork *sync.Mutex) {
	for {
		fmt.Printf("philosopher %d is thinking\n", index)
		time.Sleep(time.Millisecond * time.Duration(rand.Intn(1000)))

		firstFork.Lock()
		secondFork.Lock()

		fmt.Printf("philosopher %d is eating\n", index)
		time.Sleep(time.Millisecond * time.Duration(rand.Intn(1000)))

		secondFork.Unlock()
		firstFork.Unlock()
	}
}
```

</CodeBlockWrapper>

철학자는 일정 시간동안 생각하다가 양 쪽의 포크(뮤텍스)가 사용 가능하다면 포크를 집어들고 먹는다.
이 때 한 쪽 포크를 집어들었는데 다른쪽 포크가 사용 가능하지 않다면 포크를 내려놓지 않고 계속 기다리기 때문에 Deadlock이 발생하기 쉽다.

이전 포스트에서 Deadlock이 발생하기 위한 조건인 Coffman 조건을 다시 한 번 떠올려보자.

> Mutual Exclusion: 한 쓰레드가 Critical Section에 들어가면, 다른 쓰레드는 해당 Critical Section에 들어갈 수 없음.
> Hold and Wait: 쓰레드는 어떤 자원을 점유한 상태에서, 다른 쓰레드가 점유한 자원을 기다림.
> No Preemption: 쓰레드는 점유한 자원을 다른 쓰레드가 강제로 빼앗을 수 없음.
> Circular Wait: 쓰레드 간에 자원을 순환적으로 기다림.

위 코드에서는 네 가지 조건을 모두 만족하고 있기 때문에 Deadlock이 발생할 수 있다. 가령 모든 철학자가 왼쪽 포크를 집어들고 오른쪽 포크를 기다리는 상황이 발생하면 Deadlock이 발생할 것이다.

<br>

Deadlock이 발생하지 않게 할 수 있을까?
Circular Waiting이 발생하지 않게끔, 다섯 명중 한 철학자의 포크를 반대로 집어들게 하면 될 것이다. 이를테면 다음과 같다.

```go
func main() {
	forks := [5]sync.Mutex{}

	//go philosopher(0, &forks[0], &forks[1])
	go philosopher(0, &forks[1], &forks[0])
	go philosopher(1, &forks[1], &forks[2])
	go philosopher(2, &forks[2], &forks[3])
	go philosopher(3, &forks[3], &forks[4])
	go philosopher(4, &forks[4], &forks[0])
	select {}
}
```

이렇게 하면 Circular Waiting이 발생하지 않게 되어 Deadlock이 발생하지 않는다. 다만 언뜻 보기에 Starvation이 일어날 것 같아 보여서 좀 더 테스트를 해보았다.

<CodeBlockWrapper>

```go
package main

import (
	"fmt"
	"math/rand"
	"sync"
	"time"
)

var cnt [5]int

func philosopher(index int, firstFork, secondFork *sync.Mutex) {
	for {
		//fmt.Printf("philosopher %d is thinking\n", index)
		time.Sleep(time.Millisecond * time.Duration(rand.Intn(10)))

		firstFork.Lock()
		secondFork.Lock()

		//fmt.Printf("philosopher %d is eating\n", index)
		cnt[index] = cnt[index] + 1
		time.Sleep(time.Millisecond * time.Duration(rand.Intn(10)))

		secondFork.Unlock()
		firstFork.Unlock()
	}
}

func main() {
	forks := [5]sync.Mutex{}

	go philosopher(0, &forks[0], &forks[1])
	//go philosopher(0, &forks[1], &forks[0])
	go philosopher(1, &forks[1], &forks[2])
	go philosopher(2, &forks[2], &forks[3])
	go philosopher(3, &forks[3], &forks[4])
	go philosopher(4, &forks[4], &forks[0])

	select {
	case <-time.After(time.Second * 10):
	}

	for i := 0; i < 5; i++ {
		fmt.Printf("philosopher %d ate %d times\n", i, cnt[i])
	}
}
```

각 철학자가 음식을 먹은 회수를 10초간 누적하여 출력하는 코드이다. 표본이 많이 쌓여야 하니 대기 시간을 약 100배 정도 줄여서 테스트를 진행하였다.
먼저 Deadlock이 발생할 가능성이 있는 버전의 코드를 실행시켜보았다.

</CodeBlockWrapper>

```text
$ go run dining-philosopher.go
philosopher 0 ate 533 times
philosopher 1 ate 529 times
philosopher 2 ate 534 times
philosopher 3 ate 516 times
philosopher 4 ate 532 times
```

워크로드 자체는 잘 분배되어 있는 것 같다.
데드락이 발생하지는 않았는데, 아마 모든 철학자 고루틴이 오른쪽 포크만 집어드는 상황이 발생하려면 아다리가 엄청 잘 맞아야 해서 그런 것 같다.

다음으로, Starvation이 발생할 가능성이 있는 버전의 코드를 실행시켜보았다.
`go philosopher(0, &forks[0], &forks[1])` 이 부분을 주석처리하고, `//go philosopher(0, &forks[1], &forks[0])` 이 부분을 주석 해제하면 된다.

```text
$ go run dining-philosopher.go
philosopher 0 ate 622 times
philosopher 1 ate 586 times
philosopher 2 ate 678 times
philosopher 3 ate 712 times
philosopher 4 ate 779 times
```

예상했던 대로 Starvation까진 아니지만, 워크로드 분배가 균등하지 않은 것을 볼 수 있다.
철학자 1은 비교적 적은 횟수를, 철학자 4는 비교적 많은 횟수를 먹었다.
아마 철학자 0과 1이 같은 포크를 사용하기 때문에, 얘네 둘끼리 경쟁하는 경우가 많아져서 그런 것으로 보인다.

근데 똑같이 10초 돌렸는데 전체적인 처리량 자체는 더 높아졌다. 이건 뭐지 싶은데... 더 분석해봐야겠다.

<br>

또 다른 방법으로는 최신 버전의 Go에 포함되어 있는 `TryLock` 메서드를 이용하는 것이다.
`TryLock`은 잠그려는 뮤텍스가 잠겨있으면 바로 실패하고, 잠기지 않았으면 잠근다.
꽤 유용해보이지만 실제로는 그렇게 쓰이는 경우가 많지 않다고 하며, Deadlock Prevention을 위해 사용하는 경우가 대부분이라고 한다.

<CodeBlockWrapper>

```go
func philosopher(index int, leftFork, rightFork *sync.Mutex) {
	for {
		fmt.Printf("philosopher %d is thinking\n", index)
		time.Sleep(time.Millisecond * time.Duration(rand.Intn(10)))

		leftFork.Lock()
		if rightFork.TryLock() {
			fmt.Printf("philosopher %d is eating\n", index)
			cnt[index] = cnt[index] + 1
			time.Sleep(time.Millisecond * time.Duration(rand.Intn(10)))
			rightFork.Unlock()
		}
		leftFork.Unlock()
	}
}
```

</CodeBlockWrapper>

이렇게 하면 각 고루틴이 한 쪽 포크를 집고 다른 쪽 포크를 집으려 할 때, 다른 쪽 포크가 이미 잠겨있으면 바로 집은 포크를 내려놓고 다시 생각할 것이다.

성능은 어떨까? 아까와 같이 10초간 누적하여 출력해보았다.

```text
$ go run dining-philosopher.go
philosopher 0 ate 591 times
philosopher 1 ate 661 times
philosopher 2 ate 602 times
philosopher 3 ate 631 times
philosopher 4 ate 628 times
```

오 좀 더 좋아졌다. 워크로드 분배도 균등하고, 처리량도 높아졌다. 물론 다른 변수 통제는 안해서 정확한 수치는 아니다.

그런데 함정이 있다. busy waiting이 발생한다는 것이다.
`TryLock`은 뮤텍스가 잠겨있으면 바로 실패하고, 잠기지 않았으면 잠근다. 따라서 뮤텍스가 잠겨있는 상태에서 `TryLock`을 호출하면 바로 실패하고, 다시 잠금을 시도하게 된다.
이를 반복하면서 busy waiting이 발생하는 것이다.

그러다 보니 철학자 고루틴이 오른쪽 포크를 오래동안 집지 못하거나, goroutine queue에 들어왔다 나갔다를 반복하여 Starvation이 발생할 수 있다.

<br>

그렇다면 `TryLock`을 안쓰고 Deadlock이 발생하지 않게 할 수는 없을까?
가장 Golang답게 생각해볼 수 있는 방법은 바로 채널을 이용하는 것이다.

<CodeBlockWrapper>

```go
package main

import (
	"fmt"
	"math/rand"
	"time"
)

var cnt_ [5]int

func philosopher_channel(index int, leftFork, rightFork chan bool) {
	for {
		//fmt.Printf("Philosopher %d is thinking.\n", index)
		time.Sleep(time.Millisecond * time.Duration(rand.Intn(10)))
		select {
		case <-leftFork:
			select {
			case <-rightFork:
				//fmt.Printf("Philosopher %d is eating.\n", index)
				cnt_[index] = cnt_[index] + 1
				time.Sleep(time.Millisecond * time.Duration(rand.Intn(10)))
				rightFork <- true
			default:
			}
			leftFork <- true
		}
	}
}

func main() {
	var forks [5]chan bool
	for i := range forks {
		forks[i] = make(chan bool, 1)
		forks[i] <- true
	}

	go philosopher_channel(0, forks[0], forks[1])
	go philosopher_channel(1, forks[1], forks[2])
	go philosopher_channel(2, forks[2], forks[3])
	go philosopher_channel(3, forks[3], forks[4])
	go philosopher_channel(4, forks[4], forks[0])

	select {
	case <-time.After(time.Second * 10):
	}

	for i := 0; i < 5; i++ {
		fmt.Printf("philosopher %d ate %d times\n", i, cnt_[i])
	}
}
```

</CodeBlockWrapper>

위 예제에서 각 포크는 버퍼 크기가 1인 채널로 구현된다.
포크를 집는 것은 채널에서 데이터를 읽는 것이고, 포크를 내려놓는 것은 채널에 데이터를 쓰는 것이다. 먼저 왼쪽 포크를 집고, 오른쪽 포크를 집으려고 시도한다.
만약 오른쪽 포크를 집었다면 음식을 먹은 후 오른쪽 포크를 내려놓고, 왼쪽 포크를 내려놓는다.
오른쪽 포크가 이미 사용중이라면 `default` 케이스로 넘어가 왼쪽 포크를 내려놓고 생각을 계속한다.

이 구현은 실질적으로 `TryLock`을 사용하는 구현과 거의 동일하다. 하지만 busy waiting 및 starvation이 발생하지 않는다는 장점이 있다. 실제로 그러한지 10초간 누적하여 출력해보았다.

```text
$ go run dining-philosopher-channel.go
philosopher 0 ate 638 times
philosopher 1 ate 649 times
philosopher 2 ate 635 times
philosopher 3 ate 622 times
philosopher 4 ate 631 times
```

처리량이 더더욱 균등하고, 전체적인 처리량도 더 높아졌다. 물론 다른 변수 통제는 안해서 정확한 수치는 아니다.

<br><br>

## Rate Limiting

---

서비스 품질을 일정하게 유지하기 위해서는 리소스에 대한 요청을 제한해야 한다.
Token Bucket 알고리즘을 이용하여 Rate Limiting을 구현해보려 한다.

Token Bucket 알고리즘은 토큰 버킷에 토큰을 일정량씩 채워넣고, 요청이 들어오면 토큰을 하나씩 꺼내서 처리하는 방식이다.
가령 버킷에 빈 공간이 있다먼 500밀리초마다 토큰을 채워넣는 Producer 프로세스가 있다. 만약 빈 공간이 없다면 500밀리초 후 다시 시도한다.
또한 무작위 간격으로 토큰을 꺼내가는 Consumer 프로세스가 있다. 만약 토큰이 없다면 토큰이 생길 때까지 대기한다.

Bucket의 크기 및 Producer의 주기에 따라 Rate Limiting의 정도를 조절할 수 있다.
Bucket의 크기가 크면 Bursty한 요청을 처리하는 데 유리하고, Producer의 주기가 짧으면 빠르게 요청을 처리할 수 있다.

<br>

코드를 작성해보자.

```go
type RateLimiter interface {
	Wait()
}
```

이와 같이 `RateLimiter` 인터페이스를 정의한다.

HTTP 요청을 Rate Limiting하기 위해서는 `http.Handler` 인터페이스를 구현해야 한다.

```go
func handle(w http.ResponseWriter, r *http.Request) {
	limiter.Wait()
	// do something
}
```

이렇게 하면 `handle` 함수가 요청을 처리하기 전에 `limiter`가 Rate Limiting을 적용할 것이다.

이 `RateLimiter` 인터페이스를 구현하는 구조체를 만들고자 할 때, Buffered 채널을 이용하면 쉽게 구현할 수 있다.
`Wait`의 경우 채널에서 데이터를 읽는 것으로 구현한다. 만약 채널이 비어 있다면 데이터가 채워질 때까지 대기하게 된다.
그리고 주기적으로 채널에 데이터를 쓰는 역할은 `time.Ticker`를 이용하여 구현할 것이다.

```go
type ChannelRate struct {
	bucket chan struct{}
	ticker *time.Ticker
	done   chan struct{}
}
```

이후 다음과 같이 생성자 함수를 작성한다.

<CodeBlockWrapper>

```go
func NewChannelRate(rate float64, limit int) *ChannelRate {
	r := &ChannelRate{
		bucket: make(chan struct{}, limit),
		ticker: time.NewTicker(time.Second / time.Duration(rate)),
		done:   make(chan struct{}),
	}

	for i := 0; i < limit; i++ {
		r.bucket <- struct{}{}
	}

	go func() {
		for {
			select {
			case <-r.done:
				return
			case <-r.ticker.C:
				select {
				case r.bucket <- struct{}{}:
				default:
				}
			}
		}
	}()

	return r
}
```

</CodeBlockWrapper>

`NewChannelRate` 함수는 `ChannelRate` 구조체를 생성하고, `bucket` 채널을 `limit` 크기로 초기화한다.
그리고 `limit` 크기만큼 `bucket` 채널에 데이터를 채워넣는다.

그리고 `time.Ticker`를 이용하여 `rate`에 따라 주기적으로 `bucket` 채널에 데이터를 채워넣는 고루틴을 생성한다.
이 때 `bucket` 채널이 가득 차있다면 데이터를 채워넣지 않게끔 `default` 케이스가 존재하는 것을 확인할 수 있다.

이 고루틴에 사용된 `ChannelRate` 인스턴스는 클로저이기 때문에 `NewChannelRate` 함수가 종료되더라도 GC되지 않고 고루틴 안에서 계속 살아있게 된다.

여기까지 구현하고 나면 `RateLimiter` 인터페이스를 구현하기 위한 `Wait()` 메서드는 매우 간단하게 구현된다.

```go
func (r *ChannelRate) Wait() {
	<-r.bucket
}
```

Graceful Shutdown을 위한 `Close()` 메서드도 구현한다.

```go
func (r *ChannelRate) Close() {
	close(r.done)
	r.ticker.Stop()
}
```

하지만 이 `RateLimiter`에는 몇 가지 문제점이 있다. 리미터 인스턴스 하나당 두 개의 고루틴(Producer, Ticker)이 필요하다.
만약 인스턴스가 많아진다면 리소스를 꽤나 많이 잡아먹을 것이다.

<br>

Rate Limiting을 추가적인 고루틴 생성 없이 구현해보려 한다.
중요한 점은 버킷에서 토큰이 꺼내려 할 때 Rate Limiting이 일어난다는 것이다.
그러니 일정 시간마다 버킷을 채우는 게 아니라 토큰을 꺼내려 할 때만 비어 있는 버킷을 채우는 방식으로 구현할 수 있다.

이 방식은 별도의 고루틴을 생성하는 대신 산술적으로 토큰의 생성 주기를 계산한다.
다음의 소스코드를 참고하자.

```go
type LimiterEnhanced struct {
	mu         sync.Mutex
	rate       int
	bucketSize int
	nTokens    int
	lastToken  time.Time
}
```

`rate`와 `bucketSize`는 대충 알테니 생략하고, `nTokens`은 버킷에 남아있는 토큰의 개수를, `lastToken`은 마지막으로 토큰을 꺼낸 시간을 나타낸다.
이제 채널을 사용하지 않기 때문에 Mutex를 이용하여 요청을 블로킹할 것이다.

초기화 함수는 간단해진다.

```go
func NewLimiterEnhanced(rate int, bucketSize int) *LimiterEnhanced {
	return &LimiterEnhanced{
		rate:       rate,
		bucketSize: bucketSize,
		nTokens:    bucketSize,
		lastToken:  time.Now(),
	}
}
```

다음으로, `Wait()` 메서드를 구현한다.
이 메서드 안에서 버킷 안에 토큰이 있는지 확인하고, 토큰 생성 주기 및 경과 시간을 판단하여 토큰을 생성하는 등 주요한 로직이 모두 구현된다.

<CodeBlockWrapper>

```go
func (l *LimiterEnhanced) Wait() {
	l.mu.Lock()
	defer l.mu.Unlock()

	if l.nTokens > 0 {
		l.nTokens--
		return
	}

	timeElapsed := time.Since(l.lastToken)
	period := time.Duration(int(time.Second) / l.rate)
	nTokens := int(timeElapsed / period)
	l.nTokens = nTokens
	l.lastToken = l.lastToken.Add(time.Duration(nTokens) * period)
	if l.nTokens > l.bucketSize {
		l.nTokens = l.bucketSize
	}
	if l.nTokens > 0 {
		l.nTokens--
		return
	}

	next := l.lastToken.Add(period)
	wait := next.Sub(time.Now())
	if wait > 0 {
		time.Sleep(wait)
	}
	l.lastToken = next
}
```

</CodeBlockWrapper>

먼저 버킷 안에 토큰이 있는지 확인한다. 만약 토큰이 있다면 토큰을 꺼내고 함수를 종료한다.
토큰이 없다면 경과 시간을 계산하여 토큰을 생성한다. 생성될 토큰의 수가 버킷의 크기를 넘어가면 버킷의 크기로 조정한다. 이후 마지막으로 업데이트된 토큰 생성 시간을 저장한다.
단, 이 때 저장된 토큰의 수가 아니라 실제 생성된 토큰의 수를 저장한다.

이 시점에서 버킷 안에 토큰이 있는지 확인한다. 만약 토큰이 있다면 토큰을 꺼내고 함수를 종료한다.
토큰이 없다면 다음 토큰이 생성될 시간을 계산하여 대기한다. 대기 시간이 0보다 크다면 대기하고, 0이라면 바로 토큰을 꺼내고 함수를 종료한다.

이 Rate Limiter는 별도 고루틴 없이 구현되었기 때문에 리소스 효율성이 높다.
`golang.org/x/time/rate` 패키지도 이와 비슷한 방식으로 구현되어 있다.
프로덕션 개발의 경우 컨텍스트 등 보다 다양한 요소를 고려해야 하기 때문에 이러한 패키지를 사용하는 것이 좋다.

<br><br>

## References

---

<center>

[
<Image alt="Effective Concurrency in Go" src="https://learning.oreilly.com/covers/urn:orm:book:9781804619070/400w/"/>
](https://learning.oreilly.com/library/view/effective-concurrency-in/9781804619070/)<br>
[Burak Serdar, 『Effective Concurrency in Go』, Packt Publishing](https://learning.oreilly.com/library/view/effective-concurrency-in/9781804619070/)

</center>
