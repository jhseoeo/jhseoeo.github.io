\*\*\*\*---
title: Go의 동시성 지원
date: 2023-08-25
excerpt: Go에서 동시성을 지원하는 방법들
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
    import Image from '$lib/components/Image.svelte';
</script>

내용의 상당 부분이 <https://jhseoeo.github.io/posts/post/Go/Golang%20Basics/GO10>의 내용과 중복되므로, 해당 포스트를 먼저 읽고 오시는 것을 추천드립니다.

해당 포스트에서 다루지 않은 내용만 중점적으로 다루려 합니다.

<br><br>

## Goroutine

---

### Goroutine이 빠른 이유

- Go 런타임은 실행될 때 기본적으로 플랫폼의 프로세서(코어) 수만큼의 쓰레드를 생성함

  - 이 쓰레드 풀 위에서 Goroutine이 실행됨
  - 만약 그 이하의 쓰레드를 생성하면 CPU utilization이 떨어짐
  - 만약 그 이상의 쓰레드를 생성하면 Time Sharing때문에 Context Switching 오버헤드가 발생
  - 만일 고루틴이 Channel, Mutex 등에 의해 block되면 해당 고루틴을 실행시키는 쓰레드는 다른 고루틴을 실행시킴
  - 만일 고루틴이 동기 I/O에 의해 block되면 해당 고루틴을 실행시키는 쓰레드 자체가 block되므로, 새로운 쓰레드를 생성하거나 기존의 쓰레드를 재사용하여 다른 고루틴을 실행시킴

- Go Scheduler는 user space에 있기 때문에 OS Thread를 사용하는 것보다 오버헤드가 적음

  - 따라서 쓰레드 생성 및 관리에 대한 오버헤드가 적음

- Goroutine은 OS Thread보다 훨씬 적은 메모리를 사용함

  - Goroutine의 Stack 크기는 2KB 정도인 반면, OS Thread의 Stack 크기는 MB 단위임

### Goroutine의 특징

- OS Thread는 스케줄링 우선순위가 존재하지만, Goroutine은 존재하지 않음(Starvation이 발생하는 고루틴을 우선 선택하는 스케줄링 알고리즘이 있긴 하지만, 이를 지향하지는 않음)

- Go 프로그램을 실행시키면 main 고루틴과 가비지 컬렉터 고루틴이 생성됨

  - main 고루틴은 `main` 패키지의 `main` 함수에서 생성됨
  - main 함수가 종료되면 모든 고루틴이 종료되고 프로그램이 종료됨

- Goroutine을 일시정지 혹은 종료시키는 magic function은 없음
  - 고루틴이 중단되어야 함을 정의하는 message 또는 flag를 사용하는 것이 일반적
  - `panic`은 고루틴을 종료시킬 수 있음. panic이 발생한 해당 고루틴이 종료됨

### Closure

- 어떤 익명 함수가 그 함수 내부 컨텍스트에 있는 변수를 참조하면, 그 익명 함수를 클로저(Closure)라고 함
  - 클로저가 참조하는 로컬 변수는 stack에서 heap으로 옮겨짐(escape to heap)
    - stack에 저장되면 함수가 종료되면서 로컬 변수가 사라지기 때문

<br><br>

## Channel

---

### Channel의 length와 capacity

- Channel은 내부적으로 FIFO 큐로 구현되어 있음
- Channel의 capacity는 채널 버퍼의 크기를 의미함
- Channel의 length는 현재 큐에 들어있는 element의 개수를 의미함

  - 아래와 같은 코드는 좋지 않음

  ```go
  if len(ch) > 0 {
    x := <-ch
  }
  ```

  - 이 코드는 ch에 element가 들어있는지 확인한 후, 들어있다면 element를 읽어옴
  - 이 때 length를 가져오는 것은 데이터를 읽어오는 것과는 달리 mutual exclusive하지 않음
  - 따라서 데이터를 읽어오려고 할 때 채널의 값을 다른 고루틴이 이미 읽어버리는 race condition이 발생할 수도 있음

### Channel의 close

- 원래 채널은 1:1 통신만 가능함.
  - 채널에서 데이터를 읽는 고루틴이 여러 개이고 데이터를 쓰는 고루틴이 하나라면, 쓰기 고루틴이 데이터를 쓸 때 무작위로 읽기 고루틴 중 하나에게 데이터를 전송함
- 하지만 채널을 `close`하면 해당 채널을 receive하는 모든 고루틴이 이를 감지할 수 있음
  - 일종의 일회성 Broadcast인 셈
- 닫힌 채널로부터 데이터를 읽어오면 해당 타입의 zero value를 읽어옴
  - comma ok idiom을 사용하면 닫힌 채널인지 확인할 수 있음
- 닫힌 채널에 데이터를 쓰려고 하면 panic이 발생함

### 메모리 공유

- 채널을 통해 전송한 데이터가 `int`, `float` 등의 primitive type이라면, 해당 데이터는 복사되어 전송됨
- 채널을 통해 전송한 데이터가 `slice`, `map` 등의 reference type이라면, 해당 데이터의 포인터 주소가 전송됨
  - 이 때 이 데이터의 ownership은 전송된 고루틴에게 넘어가지 않고 메모리는 공유됨.
    - 결과적으로 shared memory를 사용하는 것과 같은 상태가 됨
    - 이 상태는 data race임.
  - 보통 채널을 통해 reference type의 데이터를 전송하고 나면 그 데이터를 사용하지 않는 것이 좋음.
    - deep copy를 통해 복사본을 만들어 사용하거나, Mutex를 사용할 수도 있음

### Non-blocking Channel

- 원래 채널은 blocking 성질을 가지고 있음
  - 채널에 데이터를 쓰려고 하면 채널에 데이터가 들어올 때까지 기다림
  - 채널에서 데이터를 읽으려고 하면 채널에 데이터가 들어올 때까지 기다림
- `select`문에 `default` 케이스가 있으면 non-blocking 채널이 됨.

  - 이 때 주의할 점은 채널에 대한 send, receive 연산의 우선순위가 가장 높지는 않다는 것임
  - 예를 들면 아래 코드의 출력 결과는 `2`임.

  ```go
  func main() {
    var i int
    f := func() {
      i++
      return i
    }
    ch1 := make(chan int)
    ch2 := make(chan int)

    select {
    case ch1 <- f():
    case ch2 <- f():
    default:
    }
    fmt.Println(i)
  }
  ```

  - `default` 케이스로 넘어가기 이전 `ch1`, `ch2` 케이스에서 채널 blocking 여부를 확인하는데, 그 이전에 `f()`가 한 번씩 호출되기 때문
  - 함수를 stateless하게 짜는 버릇을 들이자.

- `select`문의 `case` 옆에 채널 연산자가 여러 개 붙어버리면 의도한 대로 동작 안할 수도 있음

  ```go
  ch1 := make(chan int)
  ch2 := make(chan int)

  go func() {
    ch2 <- 1
  }()
  go func() {
    fmt.Println(<-ch1)
  }()

  select {
  case ch1<- <-ch2:
    time.Sleep(time.Second)
  default:
  }
  ```

  - 위 코드는 `ch1`에 `ch2`의 값을 전송하고, `ch1`에서 값을 읽어와서 출력함
  - 이 때 `<-ch2`가 먼저 실행되는데, `ch2`에 값이 없을 때 읽어오려 하면 채널이 blocking됨
  - 하지만 `default` 케이스로 넘어가지 않음. `ch1<-`가 blocking될 때 `default`로 넘어가고, `<-ch2`는 그냥 blocking됨
  - 그러니까 이렇게 짜지 말자;;

<br><br>

## Mutex

---

- Mutex는 <Highlight>Mutual Exclusion</Highlight>의 약자로, critical section에 대한 여러 고루틴의 동시 접근을 막기 위해 사용됨.
- 기본적으로 선언과 동시에 사용할 수 있으며, `lock` 및 `unlock` 메소드를 지원함
- Mutex 자체는 shared object여야 함. 단, Mutex가 복사되어선 안됨.
  - Mutex가 복사되면 복사된 Mutex들이 각자의 lock을 가지게 되므로, 동시 접근을 막을 수 없음

### RWMutex

- 데이터의 Reader는 여러 명이어도 상관 없지만, Writer는 한 명 뿐이어야 함
- RWMutex.RLock() 메소드를 통해 Reader가 lock을 획득하고, RWMutex.RUnlock() 메소드를 통해 lock을 해제함
  - RWMutex.RLock()을 호출하는 여러 Reader 고루틴은 동시에 Critical Section에 접근할 수 있음
- RWMutex.Lock() 메소드를 통해 Writer가 lock을 획득하고, RWMutex.Unlock() 메소드를 통해 lock을 해제함
  - RWMutex.Lock()을 호출하는 Writer 고루틴은 Critical Section에 접근할 수 있음
  - 이 때 RWMutex.RLock()을 호출하는 Reader 고루틴은 Critical Section에 접근할 수 없음

<br><br>

## WaitGroup

---

- WaitGroup은 지정된 개수의 고루틴이 모두 종료될 때까지 기다리는 기능을 제공함
- 주로 여러 서비스를 호출하여 그 결과를 모아서 처리해야 할 때 유용하게 사용할 수 있음
- WaitGroup과 Channel을 동시에 사용하는 경우 올바른 순서로 사용해야 함
  - 만약 채널에서 데이터를 읽어오기 전에 `Wg.Wait()`를 호출하면, Deadlock이 발생할 수 있음
  - `Wg.Wait()` 이후 채널을 닫는 로직 또는 채널로부터 데이터를 읽어오는 로직을 별도의 고루틴으로 분리하는 것이 좋은 방법이 될 수 있음

<br><br>

## Conditional Variable

---

- Conditional Variable은 조건이 발생할 때까지 여러 고루틴이 기다리고, 조건이 발생하면 다른 고루틴에 이를 알리는 기능을 제공함
- Go에서 Conditional Variable은 대부분 Channel로 대체될 수 있음
- 하지만 Shared Memory 시스템에서 Producer-Consumer 문제 등, 여러 문제를 해결할 때 유용할 수 있음

> **Producer-Consumer 문제**
>
> - Producer-Consumer 문제는 데이터를 생산하는 Producer와, 데이터를 소비하는 Consumer에 대한 문제임
> - 1개 이상의 Producer와 Consumer가 존재할 수 있음
> - 일반적으로 Producer가 데이터를 쓰고 Consumer가 데이터를 읽어오는 대기열(Queue)를 사용함
>   - Go에서는 이 대기열을 Channel로 구현할 수 있지만, Shared Memory 시스템에서는 Conditional Variable을 사용함

- 세개의 주요 오퍼레이션이 존재함

  - `Wait()`: 조건이 발생할 때까지 기다림
  - `Signal()`: 조건이 발생했음을 알림
  - `Broadcast()`: 조건이 발생했음을 알림. `Signal()`과 달리 모든 고루틴에게 알림

- Conditional Variable은 Mutex와 함께 사용됨
  - Conditional Variable은 Critical Section 안에서만 수정할 수 있음

<br><br>

## References

---

<center>

[
<Image alt="Effective Concurrency in Go" src="https://learning.oreilly.com/covers/urn:orm:book:9781804619070/400w/"/>
](https://learning.oreilly.com/library/view/effective-concurrency-in/9781804619070/)<br>
[Burak Serdar, 『Effective Concurrency in Go』, Packt Publishing](https://learning.oreilly.com/library/view/effective-concurrency-in/9781804619070/)

</center>
