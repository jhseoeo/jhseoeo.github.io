---
title: Timer와 Ticker
date: 2023-09-14
excerpt: Go에서 일정 시간이 지난 이후 또는 주기적으로 특정 작업을 수행하려면 어떻게 해야 할지 알아보자.
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

## Timer

Go에서 일정 시간이 지난 이후 특정 작업을 수행하려면 `time.Timer`를 사용하면 된다.
`time.Timer`는 지정된 시간만큼 대기한 후 채널에 값을 전송한다.
이 때 채널에 전송되는 값은 메시지가 전송된 시간이며, 수신된 시간이 아님을 염두에 두어야 한다.

타이머는 주로 작업의 타임아웃을 설정할 때 사용한다. 타임아웃 자체는 `context.Context`를 사용하여 구현하는 것이 좋지만, 타이머를 사용하는 방법도 알아두면 좋다.

<CodeBlockWrapper>

```go
func main() {
	timer := time.NewTimer(10 * time.Millisecond)
	timeout := make(chan struct{})

	go func() {
		<-timer.C
		close(timeout)
		fmt.Println("Timer expired")
	}()

	x := 0
	done := false
	for !done {
		select {
		case <-timeout:
			done = true
		default:
		}

		time.Sleep(1 * time.Millisecond)
		x++
	}
	fmt.Println("x =", x)
}
```

</CodeBlockWrapper>

`time.NewTimer` 대신 `time.After`를 사용할 수도 있다. 사용법은 거의 동일하므로 예제는 생략해도 될 듯 하다.
또한 이와 같은 예제는 `time.AfterFunc`을 사용하여 더 간단하게 작성할 수 있다.

```go
func main() {
timeout := make(chan struct{})

    time.AfterFunc(10*time.Millisecond, func() {
    	close(timeout)
    	fmt.Println("Timer expired")
    })

}
```

<br>

어떤 작업이 타임아웃을 초과하기 이전에 정상적으로 완료되었다면 타이머를 중지해야 한다.
타이머를 중지하려면 `Stop` 메서드를 호출하면 된다.
타이머가 정상적으로 중지되었다면 `Stop` 메서드는 `true`를 반환하고, 이미 중지되었다면 `false`를 반환한다.

타이머를 재설정하려면 `Reset` 메서드를 호출하면 된다.

- `AfterFunc`로 생성된 타이머의 경우 아직 호출되지 않았다면 호출될 시간을 재설정하며, 이미 호출되었다면 한 번 더 호출될 시간이 설정된다. 전자의 경우 `true`가, 후자의 경우 `false`가 반환된다.
- `NewTimer`로 생성된 타이머의 경우, `Reset` 메서드를 사용할 때 동시에 해당 타이머 채널으로부터 값을 수신하고 있는 고루틴이 있어선 안된다. 아래 예제가 `Reset` 메서드를 사용할 때의 올바른 사용법이다.

  ```go
  select {
  	case <-timer.C:
  		// timeout
  	case d := <-resetTimer:
  		if !timer.Stop() {
  			<-timer.C
  		}
  		timer.Reset(d)
  }
  ```

<br><br>

## Tickers

---

`time.Ticker`는 지정된 시간 간격으로 특정 작업을 수행하려고 할 때 사용한다.
`time.Ticker` 또한 마찬가지로 `time.NewTicker`를 사용하여 생성하며, 명시적으로 중지하기 전까지 주기적으로 채널에 값을 전송한다.
다음의 예제는 3초간 주기적으로 프로그램의 경과 시간을 출력하는 예제이다.

<CodeBlockWrapper>

```go
func main() {
	start := time.Now()
	ticker := time.NewTicker(100 * time.Millisecond)
	defer ticker.Stop()
	done := time.After(3 * time.Second)

	for {
		select {
		case <-ticker.C:
			fmt.Println("tick:", time.Since(start).Milliseconds())
		case <-done:
			return
		}
	}
}
```

</CodeBlockWrapper>

Ticker의 간격보다 작업 시간이 길어져서 Ticker가 보내는 신호를 놓치는 경우가 생길 수 있다.
만약 Ticker 채널에서 다음 값이 발생하기 전에 값을 읽었다면 단순이 약간 늦게 읽었을 뿐이라 큰 차이가 없다.
반면 Ticker 채널에서 값을 읽지 못해 다음 값이 이미 발생하는 경우가 있을 수 있다. 이 경우 Ticker 채널에서 값을 읽으면 쌓여있는 값을 와다닥 다 읽는 게 아니라, 놓친 값들은 모두 버려지고 최신 값 하나만 읽게 된다.

Ticker를 모두 사용했다면 반드시 `Stop()` 메서드를 호출하여 중지해야 한다. Timer와 달리 Ticker는 자동으로 중지되지 않기 때문에 가비지 컬렉터가 수거해가지 못한다.
`defer ticker.Stop()`를 통해 Ticker를 중지하는 것을 잊지 않도록 하자.

### Heartbeats

Long-running 작업을 수행하는 경우, 작업이 정상적으로 수행되고 있는지 주기적으로 모니터링해야 할 필요가 있다.
이 경우 Long-running 함수가 모니터 함수에 Heartbeat를 보내어 작업이 정상적으로 수행되고 있는지 알려줄 수 있다.
모니터 함수는 일정 시간동안 Heartbeat를 받지 못하면 Long-running 함수가 정상적으로 수행되지 않고 있다고 판단할 수 있다.

<CodeBlockWrapper>

```go
func monitor(heartbeat <-chan struct{}, done chan struct{}, tick <-chan time.Time) {
	var lastHeartbeat time.Time
	var numTicks int

	for {
		select {
		case <-tick:
			numTicks++
			if numTicks >= 2 {
				fmt.Printf("No progress since %s, exiting\n", lastHeartbeat)
				close(done)
				return
			}

		case <-heartbeat:
			lastHeartbeat = time.Now()
			numTicks = 0
		}
	}
}

func longRunningFunction(heartbeat chan<- struct{}, done chan struct{}) {
	for i := 0; i < 10; i++ {
		select {
		case <-done:
			return
		case heartbeat <- struct{}{}:
		}
		fmt.Printf("Job %d\n", i)
		time.Sleep(500 * time.Millisecond)
	}
	close(done)
}

func main() {
	heartbeat := make(chan struct{})
	defer close(heartbeat)
	done := make(chan struct{})
	tick := time.NewTicker(1 * time.Second)
	defer tick.Stop()

	go monitor(heartbeat, done, tick.C)
	go longRunningFunction(heartbeat, done)

	<-done
	fmt.Println("Long running function finished")
}
```

</CodeBlockWrapper>

위 코드에서 `monitor` 함수는 2회 연속으로 Tick에서 신호를 받는 동안 `longRunningFunction`으로부터 Heartbeat를 받지 못하면 문제가 생긴 것으로 판단하고 `longRunningFunction`을 종료한다.
이 예제에서 `heartbeat` 채널은 단순히 `struct{}` 타입이지만 다양한 메타데이터를 포함할 수 있다.

<br><br>

## References

---

<center>

[
<Image alt="Effective Concurrency in Go" src="https://learning.oreilly.com/covers/urn:orm:book:9781804619070/400w/"/>
](https://learning.oreilly.com/library/view/effective-concurrency-in/9781804619070/)<br>
[Burak Serdar, 『Effective Concurrency in Go』, Packt Publishing](https://learning.oreilly.com/library/view/effective-concurrency-in/9781804619070/)

</center>
