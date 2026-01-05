---
title: 동시성 문제 해결하기
date: 2023-10-03
excerpt: 동시성 문제가 해결하기 그렇게 어렵다던데
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

프로그램이 커지면 버그가 생기기 마련이고, 버그를 발견하면 무작정 디버깅부터 시작하는 것이 능사가 아니다.
특히 동시성 프로그램에서는 디버거가 도움이 되지 않는 경우가 많다.
이번 장에서는 동시성 프로그램에서 발생할 수 있는 버그를 어떻게 해결할 수 있는지 알아보자.

<br><br>

## Stack Trace

---

운이 좋다면 panic에 빠진 프로그램이 여러 진단 정보를 출력할 것이다.
이 경우 소스코드의 어느 부분에서 문제가 발생했는지 알 수 있을 것이다.
데드락에 걸리기 쉬운 dining philosopher 문제를 통해 살펴보자.

<CodeBlockWrapper>

```go
func philosopher(left, right *sync.Mutex) {
	for {
		left.Lock()
		right.Lock()
		// eat
		right.Unlock()
		left.Unlock()
	}
}

func main() {
	forks := [2]sync.Mutex{}
	go philosopher(&forks[0], &forks[1])
	go philosopher(&forks[1], &forks[0])
	select {}
}
```

</CodeBlockWrapper>

위 코드를 실행하면 얼마 지나지 않아 프로그램이 데드락에 걸린다.
이후 panic이 발생하고, 아래와 같은 스택 트레이스가 출력된다.

<CodeBlockWrapper>

```text
fatal error: all goroutines are asleep - deadlock!

goroutine 1 [select (no cases)]:
main.main()
        /home/junhyuk/Programming/Golang/CIGO/chapter10/tracing-deadlock.go:19 +0xa5

goroutine 5 [sync.Mutex.Lock]:
sync.runtime_SemacquireMutex(0x0?, 0x0?, 0x0?)
        /usr/local/go/src/runtime/sema.go:77 +0x26
sync.(*Mutex).lockSlow(0xc00001a0b8)
        /usr/local/go/src/sync/mutex.go:171 +0x165
sync.(*Mutex).Lock(...)
        /usr/local/go/src/sync/mutex.go:90
main.philosopher(0xc00001a0b0, 0xc00001a0b8)
        /home/junhyuk/Programming/Golang/CIGO/chapter10/tracing-deadlock.go:8 +0x6e
created by main.main
        /home/junhyuk/Programming/Golang/CIGO/chapter10/tracing-deadlock.go:17 +0x65

goroutine 6 [sync.Mutex.Lock]:
sync.runtime_SemacquireMutex(0x0?, 0x0?, 0x0?)
        /usr/local/go/src/runtime/sema.go:77 +0x26
sync.(*Mutex).lockSlow(0xc00001a0b0)
        /usr/local/go/src/sync/mutex.go:171 +0x165
sync.(*Mutex).Lock(...)
        /usr/local/go/src/sync/mutex.go:90
main.philosopher(0xc00001a0b8, 0xc00001a0b0)
        /home/junhyuk/Programming/Golang/CIGO/chapter10/tracing-deadlock.go:8 +0x6e
created by main.main
        /home/junhyuk/Programming/Golang/CIGO/chapter10/tracing-deadlock.go:18 +0x9b
exit status 2
```

</CodeBlockWrapper>

스택 트레이스에서는 메인 고루틴의 `select`문, 그리고 각 철학자 고루틴의 `Lock` 메서드에서 데드락이 발생했음을 알 수 있다.
스택 트레이스에서 `runtime_SemacquireMutex`라는 함수가 보이는데, 이는 Golang의 내부 함수로 레지스터상의 값을 읽어오기 때문에 런타임 디버거가 제대로 해석하지 못한다.

이를 비롯하여 `sync.(*Mutex).lockSlow(0xc00001a0b8)`, `sync.(*Mutex).Lock(...)` 등의 함수들도 Golang의 내부 라이브러리 함수이다.
이때 `0xc00001a0b8`는 Lock을 호출한 Mutex의 주소를 나타낸다. 해당 주소를 가진 Mutex는 이미 Lock이 걸려있었음을 알 수 있다.

스택 트레이스에서 명시된 `tracing-deadlock.go:8`는 _tracing-deadlock.go_ 파일의 8번째 줄에서 데드락 발생 원인이 있다는 것을 알려준다.
또한 해당 고루틴이 _tracing-deadlock.go_ 파일의 17번째 줄에서 생성되었음을 알 수 있다.

두 번째 철학자 고루틴에서는 `0xc00001a0b0`에 대한 Lock을 걸고 있다. 이 때 `0xc00001a0b0`은 첫 번째 철학자 고루틴이 이미 Lock을 걸었던 Mutex의 주소이다.

이처럼 스택 트레이스는 데드락이 발생한 곳을 찾는 데 도움이 된다. 또 다른 예시를 살펴보자.

<CodeBlockWrapper>

```go
func main() {
	wg := sync.WaitGroup{}
	wg.Add(2)
	ll := list.New()
	go func() {
		defer wg.Done()
		for i := 0; i < 100000; i++ {
			ll.PushBack(rand.Int())
		}
	}()

	go func() {
		defer wg.Done()
		for i := 0; i < 100000; i++ {
			ll.Remove(ll.Front())
		}
	}()
	wg.Wait()
}
```

</CodeBlockWrapper>

이 프로그램은 공유 list에 값을 넣는 고루틴과, 값을 빼는 고루틴으로 구성되어 있다. 이 프로그램을 실행하면 매우 높은 확률로 panic이 발생하며, 아래와 같은 스택 트레이스가 출력된다.

```text
panic: runtime error: invalid memory address or nil pointer dereference
[signal SIGSEGV: segmentation violation code=0x1 addr=0x10 pc=0x45d4a0]

goroutine 6 [running]:
container/list.(*List).Remove(...)
        /usr/local/go/src/container/list/list.go:135
main.main.func2()
        /home/junhyuk/Programming/Golang/CIGO/chapter10/tracing-list.go:23 +0x80
created by main.main
        /home/junhyuk/Programming/Golang/CIGO/chapter10/tracing-list.go:20 +0x125
exit status 2
```

SIGSEGV는 segmentation fault이 발생한 경우를 나타내는 SIGNAL이며, 이는 유효하지 않은 메모리 주소에 접근했음을 의미한다.
스택 트레이스를 보면 `0x10`에 접근할 때 SIGSEGV가 발생했음을 알 수 있고, `0x10`은 nil 포인터이다.
또한 스택 트레이스를 따라가다 보면 _tracing-list.go_ 파일의 23번째 라인에서 호출한 `Remove` 메서드에서 nil 포인터에 접근했음을 알 수 있다.

위 코드의 문제점은 어렵지 않게 찾을 수 있다. 공유 list에 값을 넣는 고루틴과 값을 빼는 고루틴이 동시에 접근하기 때문에 생기는 race condition으로 인한 문제이다.
nil 체크를 하는 것이 아니라, 뮤텍스를 사용하여 list 연산을 critical section으로 만들면 문제가 해결된다.

지금의 예제는 비교적 간단한 코드이기 때문에 문제를 진단하기 쉽지만, 실제 프로그램에서는 훨씬 복잡한 코드가 많다.
또한 대부분의 동시성 문제 해결은 golang의 내부 동작과 자료구조에 대한 심층적 이해를 요구하는 경우가 많다.
그러니 열심히 공부해야겠다ㅠ

<br><br>

## 실패 감지 및 복구

---

아무리 테스트를 잘 해도 프로그램은 실패하기 마련이다.
시스템이 예기치 않게 동작하는지 확인하기 위해 모든 환경적 요소를 테스트하는 것은 어렵기 때문이다.
거기에 동시성이 추가된 프로그램은 테스트하기 더 어려울 것이다.

가령 메모리 누수 및 고루틴 누수가 발생하는 경우 프로그램이 out of memory로 인해 종료될 것이다.
Go 표준 라이브러리에는 이를 돕는 패키지가 있다.
`runtime/pprof` 패키지는 CPU 및 힙 프로파일링을 통해 누수를 찾을 수 있도록 도와주며, `net/http/pprof` 패키지는 HTTP 서버를 통해 프로그램이 동작하면서 메모리를 어떻게 사용하는지 확인할 수 있도록 도와준다.

또한 어떤 종류의 오동작은 버그가 아니라 다른 시스템에 대한 의존성으로 인해 발생할 수도 있다.
특히 네트워크 통신 기반의 프로그램이 이에 해당한다.
그 외에도 중단된 서비스나 외부 라이브러리를 호출하는 경우가 있을 수 있다.

가장 실질적인 방법은 프로그램이 최대한 graceful하게 종료하고, 빠르게 재시작할 수 있도록 해야 한다.
클라우드 컴퓨팅 및 컨테이너 오케스트레이션을 통해 실패 감지 및 복구를 자동화할 수 있다.

<br>

### 실패 감지

오래 걸리지만 취소할 수 없는 함수 `SlowFunc`가 있다고 가정하자.
`SlowFunc`가 완료되기를 무한정 기다릴 수 없기 때문에 몇가지 방법을 생각해볼 수 있다.

먼저 타임아웃을 설정할 수 있다. 주어진 시간동안 `SlowFunc`가 완료되지 않으면 타임아웃 에러를 반환한다.
하지만 `SlowFunc`를 취소할 수는 없기 때문에, 타임아웃 에러를 반환하더라도 `SlowFunc`는 별도의 고루틴에서 계속 실행된다.

`SlowFunc`가 많은 리소스를 사용한다면 동시에 호출되는 `SlowFunc`의 수를 제한할 수 있다.
만약 동시에 실행되는 `SlowFunc`의 수가 제한을 초과하면 즉시 에러를 반환한다.
그 외에도 최대 동시 호출된 함수 중 타임아웃을 초과하지 않고 응답 반환에 성공하는 함수가 없다면 경고를 출력한다.

위와 같은 요구사항을 기반으로 제네릭한 모니터링 타입을 작성한다.

<CodeBlockWrapper>

```go
type Monitor[Req, Res any] struct {
	CallTimeout  time.Duration
	AlertTimeout time.Duration
	Alert        chan struct{}
	SlowFunc     func(Req) (Res, error)
	Done         chan struct{}
	active       chan struct{}
	full         chan struct{}
	heartBeat    chan struct{}
}
```

</CodeBlockWrapper>

해당 타입은 호출 타임아웃, 경고 타임아웃, 경고 채널, `SlowFunc` 함수, 활성화 채널, 동시 호출 수 제한 채널, 하트비트 채널을 필드로 가진다.

이후 `Monitor`의 필드인 `SlowFunc`를 호출하는 `Call` 메서드를 작성한다.

<CodeBlockWrapper>

```go
func (mon Monitor[Req, Res]) Call(ctx context.Context, req Req) (Res, error) {
	var res Res
	var err error

	select {
	case mon.active <- struct{}{}:
	default:
		select {
		case mon.active <- struct{}{}:
		case mon.full <- struct{}{}:
			return res, ErrBusy
		default:
			return res, ErrBusy
		}
	}

	complete := make(chan struct{})
	go func() {
		defer func() {
			<-mon.active
			select {
			case mon.heartBeat <- struct{}{}:
			default:
			}
			close(complete)
		}()
		res, err = mon.SlowFunc(req)
	}()

	select {
	case <-time.After(mon.CallTimeout):
		return res, ErrTimeout
	case <-complete:
		return res, err
	}
}
```

</CodeBlockWrapper>

`Call()` 메서드는 `SlowFunc`를 호출하고, 결과에 따라 타임아웃 에러, Busy 에러, 정상적인 결과 중 하나를 반환한다.

`Call()`이 호출되면 `mon.active`에 값을 전송하며, 이는 최대 동시 호출 수보다 현재 동시 호출 수가 적은 경우에만 가능하다.
만약 `mon.active`에 값을 전송할 수 없다면, `mon.full`에 값을 전송한다. 이 경우 최대 동시 호출 수를 초과했음을 의미하며, `ErrBusy`를 반환한다.
또한 `mon.full`에 값을 전송할 수 없다면, 이 경우는 경고 타이머가 초기화되지 않았음을 의미하며, 동일하게 `ErrBusy`를 반환한다.

이후 별도의 고루틴에서 `SlowFunc`를 호출한다.
`SlowFunc`가 호출된 이후 `mon.active`에서 값을 받아와서 다른 고루틴에서 `SlowFunc`를 호출할 수 있도록 하며, 타이머를 초기화하기 위해 `mon.heartBeat`에 값을 전송한다.
타이머가 활성화되지 않아도 `mon.heartBeat`에 값을 전송할 수 있도록 하기 위해 비차단 전송을 사용하였다.

마지막으로 `SlowFunc`의 호출 결과를 받아온다.
이 때 `mon.CallTimeout` 시간이 지나면 `ErrTimeout`을 반환하며, `SlowFunc`의 반환값을 성공적으로 받아오면 해당 값을 반환한다.

<br>

다음으로 모니터링 고루틴을 작성해보자.
`NewMonitor`함수는 `Monitor` 타입의 인스턴스를 생성하며, 모니터링 고루틴을 실행한다.

<CodeBlockWrapper>

```go
func NewMonitor[Req, Res any](callTimeout time.Duration, alertTimeout time.Duration, maxActive int, slowFunc func(Req) (Res, error)) Monitor[Req, Res] {
	mon := Monitor[Req, Res]{
		CallTimeout:  callTimeout,
		AlertTimeout: alertTimeout,
		SlowFunc:     slowFunc,
		Alert:        make(chan struct{}, 1),
		Done:         make(chan struct{}),
		active:       make(chan struct{}, maxActive),
		full:         make(chan struct{}),
		heartBeat:    make(chan struct{}),
	}

	go func() {
		var timer *time.Timer
		for {
			if timer == nil {
				select {
				case <-mon.full:
					timer = time.NewTimer(mon.AlertTimeout)
				case <-mon.Done:
					return
				}
			} else {
				select {
				case <-timer.C:
					mon.Alert <- struct{}{}
				case <-mon.heartBeat:
					if !timer.Stop() {
						<-timer.C
					}
				case <-mon.Done:
					return
				}
				timer = nil
			}
		}
	}()

	return mon
}
```

</CodeBlockWrapper>

모니터 고루틴은 `timer`가 nil일 때, nil이 아닐 때로 구분된다.

`timer`가 nil일 때는 돌아가고 있는 고루틴의 수가 `maxActive`보다 작은 경우이므로 경고 타이머가 필요하지 않다.
이 경우에는 `mon.full` 채널에서 값을 받아올 때까지 대기하며, 값을 받아오면 경고 타이머를 초기화한다.

`timer`가 nil이 아닐 때는 경고 타이머가 활성화된 경우이다.
각각 `mon.heartBeat`, `timer.C`, `mon.Done` 채널에서 값을 받아올 때까지 대기하며, `mon.heartBeat` 채널에서 값을 받아오면 경고 타이머를 초기화한다.
만약 `timer.C`에서 먼저 값을 받아오면 경고를 보낸다.

<br>

이렇게 작성한 `Monitor` 타입을 사용하여 `SlowFunc`를 호출하는 코드를 작성해보자.

<CodeBlockWrapper>

```go
func main() {
	mon := NewMonitor(50*time.Millisecond, 100*time.Second, 10, SlowFunc)
	go func() {
		select {
		case <-mon.Alert:
			pprof.Lookup("goroutine").WriteTo(os.Stderr, 1)
		case <-mon.Done:
			return
		}
	}()

	for i := 0; i < 5; i++ {
		go func() {
			for {
				_, err := mon.Call(context.Background(), &Request{})
				if err != nil {
					fmt.Println(len(mon.active), err)
				}
			}
		}()
	}
	select {}
}
```

</CodeBlockWrapper>

사실 이 상황에서는 실패를 감지하더라도 마땅히 할 수 있는 것이 많지 않다.
기껏해야 이메일이나 슬랙으로 알림을 보내는 정도일 것이다.

<br>

### 재시작

고루틴이 일정 시간 응답이 없는 경우, 그냥 고루틴을 다시 시작하는 것이 좋은 방법일 때도 있다.

<CodeBlockWrapper>

```go
func restart(done chan struct{}, f func(done, heartBeat chan struct{}), timeout time.Duration) {
	for {
		funcDone := make(chan struct{})
		heartBeat := make(chan struct{})
		go func() {
			f(funcDone, heartBeat)
		}()

		timer := time.NewTimer(timeout)
		retry := false

		for !retry {
			select {
			case <-done:
				close(funcDone)
				return
			case <-heartBeat:
				if !timer.Stop() {
					<-timer.C
				}
				timer.Reset(timeout)
			case <-timer.C:
				fmt.Println("function timed out, restarting")
				close(funcDone)
				retry = true
			}
		}
	}
}
```

</CodeBlockWrapper>

장기 실행되는 함수는 실패하거나 다른 여러 이유로 하트비트를 보내지 못할 수 있다. 100밀리초마다 `heartBeat` 채널로부터 값을 읽지 못하면, `f` 함수를 실행한다.

<br><br>

## 디버깅

---

동시성 프로그램은 거의 양자역학이다. 디버깅할 땐 잘 됐다가 프로덕션에서 에러가 발생하는 경우가 많다.
물론 에러가 났을 때 스택 트레이스로 진단 정보를 확인할 수 있는 경우도 많지만, 그것조차 없어 디버깅하기 곤란한 경우도 있다.

동시성 프로그램에서 문제가 언제 발생할지는 모르지만, 해당 문제가 발생한다는 사실 자체는 알고 있다.
따라서 해당 지점에서 모든 진단 정보를 출력하는 것이 좋다.

다음은 앞선 `Monitor` 예제의 `main` 함수이다.

<CodeBlockWrapper>

```go
func main() {
	mon := NewMonitor(50*time.Millisecond, 100*time.Second, 10, SlowFunc)
	go func() {
		select {
		case <-mon.Alert:
			pprof.Lookup("goroutine").WriteTo(os.Stderr, 1)
		case <-mon.Done:
			return
		}
	}()

	for i := 0; i < 5; i++ {
		go func() {
			for {
				_, err := mon.Call(context.Background(), &Request{})
				if err != nil {
					fmt.Println(len(mon.active), err)
				}
			}
		}()
	}
	select {}
}
```

</CodeBlockWrapper>

다음 라인이 스택 트레이스를 출력하는 부분이다.

```go
case <-mon.Alert:
			pprof.Lookup("goroutine").WriteTo(os.Stderr, 1)
```

이렇게 하면 활성 고루틴의 스택 트레이스 및 진단 정보를 출력할 수 있다.

<br>

데드락을 진단하는 것도 쉽지 않다.
모든 고루틴이 데드락에 걸리면 패닉이 발생하고, 스택 트레이스를 출력할 수 있지만, 고루틴이 하나라도 살아있는 상황에서 다른 고루틴이 데드락에 걸리면 패닉이 발생하지 않는다.
이 경우 데드락에 빠진 고루틴은 누수를 일으킨다.

누수가 의심된다면 몇가지 방법을 시도해볼 수 있다.

```go
func timeoutStackTrace(timeout time.Duration) (done func()) {
  completed := make(chan struct{})
  done = func() { close(completed) }
  go func() {
    select {
    case <-time.After(timeout):
      pprof.Lookup("goroutine").WriteTo(os.Stderr, 1)
    case <-completed:
      return
    }
  }()
  return
}
```

`timeoutStackTrace` 함수는 `done` 함수의 호출 또는 timeout 만료 이전까지 기다리며, timeout이 만료되면 스택 트레이스를 출력한다.
따라서 타임아웃이 발생하면 그 원인을 찾을 수 있다.

다음과 같이 사용할 수 있다.

```go
func (svc MyService) handler(w http.ResponseWriter, r *http.Request) {
  defer timeoutStackTrace(5 * time.Second)()
  // ...
}
```

이렇듯 데드락에 걸리거나 응답이 없는 고루틴이 있는 것 같다면, 해당 문제를 감지한 이후 스택 트레이스를 출력하는 방법은 꽤 유용할 것이다.

<br>

race condition을 처리하는 건 더 어렵다.
좋은 방법 중 하나는 race condition이 발생하는 것으로 의심되는 부분을 찾아서 복제하고 유닛 테스트를 돌리는 것이다.
Go의 race detector(`-race` 플래그)를 사용하면 된다.
race detector는 memory race를 관측하면 이를 보고한다.

하지만 race detector는 race가 발생할 때만 감지할 수 있기 때문에, detector가 돌아갈 때 race가 발생하지 않았다고 해도 race가 발생하지 않는다고 속단할 수 없다.

race condition은 대부분 자료구조를 오염시키는 형태로 발생한다. 이를 해결하기 위해서는 자사 및 외부 라이브러리의 기나긴 코드 리딩 시간을 거쳐가게 될 것이다.
중간중간에 `fmt.Println`이나 `panic`을 집어넣어서 어떤 상태인지 확인하는 것도 좋은 습관이다.

<br><br>

## References

---

<center>

[
<Image alt="Effective Concurrency in Go" src="https://learning.oreilly.com/covers/urn:orm:book:9781804619070/400w/"/>
](https://learning.oreilly.com/library/view/effective-concurrency-in/9781804619070/)<br>
[Burak Serdar, 『Effective Concurrency in Go』, Packt Publishing](https://learning.oreilly.com/library/view/effective-concurrency-in/9781804619070/)

</center>
