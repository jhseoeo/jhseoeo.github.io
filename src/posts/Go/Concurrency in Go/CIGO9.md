---
title: 아토믹 메모리 오퍼레이션
date: 2023-10-01
excerpt: 아토믹 메모리 오퍼레이션에 대해 알아보자
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

## Memory Guarantees

---

Go에서 mutex등을 사용했을 때 병목 현상이 일어나는 경우, 이를 atomic 연산으로 대체하여 일부 해결할 수 있다.

Go의 메모리 모델은 word size보다 작은 변수의 write 연산에 대해 원자성을 보장하지만, 해당 연산의 효과를 다른 고루틴에서 볼 수 있는지에 대한 보장은 하지 않는다.
이전에도 언급했듯 컴파일러와 CPU는 코드의 실행순서를 최적화하거나 메모리 연산을 재배치할 수 있기 때문이다.

하지만 다른 고루틴에서 해당 변수의 값을 읽을 때, 해당 고루틴이 write한 값을 읽을 수도 있고, 이전에 write한 값을 읽을 수도 있지만, 무작위한 값을 읽지 않도록 보장해준다.
한편, word size보다 큰 변수의 write 연산에 대해서는 원자성을 보장하지 않는다. 이로 인해 예상치 못한 결과가 발생할 수 있다.

다음 예제를 보자.

```go
func main() {
	var str string
	var done bool
	go func() {
		str = "Done!"
		done = true
	}()
	for !done {
	}
	fmt.Println(str)
}
```

위 코드에는 memory race가 존재한다.
이를 실행하면 *Done!*이 출력되는 것을 기대하지만, 빈 문자열이 출력되거나, 어쩌면 프로그램이 중단될 수도 있다(`done`에 대한 memory write가 메인 고루틴에서 관측되지 않기 때문).

이를 해결하기 위해 Go는 `sync/atomic` 패키지를 제공한다.

```go
func main() {
	var done atomic.Bool
	var a int
	go func() {
		a = 5
		done.Store(true)
	}()
	if done.Load() {
    fmt.Println(a)
	}
}
```

메모리는 atomic 연산에 대한 원자성을 보장한다.
만약 atomic write의 결과가 atomic read에 의해 관측되면, 해당 write 연산은 read 연산 이후에 일어난(atomic write happened before atomic read) 것으로 간주된다.
위 코드는 5를 출력하거나, 아무것도 출력하지 않는다. 하지만 0을 출력하는 경우는 없다.

주의할 점은 memory race와 data race는 다르다는 것이다.
위 프로그램의 경우 `atomic` 패키지를 사용하여 memory race는 해결했지만, 여전히 data race를 가지고 있다.
이러한 점 때문에 `atomic` 패키지를 사용할 때는 주의해야 한다.

<br><br>

## Compare and Swap

---

조건을 검사하고 결과에 따라 동작하는 코드는 race condition을 만들 수 있다.
예를 들면 다음의 코드는 atomic을 사용함에도 mutual exclusion을 보장하지 않는다.

```go
var locked sync.Bool
func wrongCriticalSectionExample() {
  if !locked.Load() {
    locked.Store(true)
    defer locked.Store(false)
    // do something
  }
}
```

이 함수는 `locked`가 `false`일 때만 critical section에 들어가고, critical section을 빠져나올 때 `locked`를 `false`로 바꾼다.
하지만 두 고루틴이 동시에 `locked.Load()`를 호출하고, 두 고루틴이 `false`를 읽은 후에 `true`를 쓰면, 두 고루틴 모두 critical section에 들어가게 된다.

따라서 비교 및 저장 작업을 하나의 atomic 연산으로 수행해야 하며, 이를 compare-and-swap(CAS)이라고 한다.
예제를 통해 사용 방법을 살펴보자.

```go
func criticalSection() {
  if locked.CompareAndSwap(false, true) {
    defer locked.Store(false)
    // do something
  }
}
```

위 예제에서 `locked`가 `false`일 때만 critical section에 들어가고, `locked`의 값을 `true`로 바꾼다. 그리고 critical section을 빠져나올 때 `locked`를 `false`로 바꾼다.
또한 `locked`가 `true`일 때는 critical section에 들어가지 않는다.

CAS를 통해 Mutex의 TryLock을 대체할 수 있다.

<br><br>

## Atomic의 실제 사용

---

atomic operation이 사용된 몇 가지 예제를 살펴보자.

### 카운터

```go
func main() {
	var count int64
	for i := 0; i < 10000; i++ {
		go func() {
			atomic.AddInt64(&count, 1)
		}()
	}
	for {
		v := atomic.LoadInt64(&count)
		fmt.Println(v)
		if v == 10000 {
			break
		}
	}
}
```

위 코드에서 write 연산에 대한 memory race가 존재하지 않기 때문에 `count`의 값은 반드시 10000이 된다.
따라서 실행 결과는 (race condition은 존재하기 때문에) 매번 달라지지만, 가장 마지막에는 반드시 10000이 출력되고 프로그램이 종료될 것이다.

<br>

### Heartbeat 및 Progress Indicator

고루틴의 Heartbeat 및 진행 상황을 표시하는 데에도 atomic을 사용할 수 있다.
이 때 shared variable 및 mutex를 사용하지 않기 때문에 추가적인 동기화 없이 여러 고루틴에서 사용할 수 있다는 장점이 있다.

```go
type ProgressMeter struct {
	progress  int64
	timestamp int64
}

func (pm *ProgressMeter) Progress() {
	atomic.AddInt64(&pm.progress, 1)
	atomic.StoreInt64(&pm.timestamp, time.Now().UnixNano())
}

func (pm *ProgressMeter) Get() (int64, int64) {
	return atomic.LoadInt64(&pm.progress), atomic.LoadInt64(&pm.timestamp)
}
```

위 예제의 `ProgressMeter`는 `Progress()` 메서드를 통해 진행 상황을 업데이트하고, `Get()` 메서드를 통해 진행 상황을 가져온다.
이 때 메서드 안의 atomic 연산의 원자성이 보장되는 것이지, 메서드 자체의 원자성은 보장되지 않기 때문에 올바르게 구현하려면 뮤텍스 등을 사용하는 것이 좋다.

<br>

해당 `ProgressMeter`를 사용하는 예제는 다음과 같다.

```go
func longGoroutine(ctx context.Context, pm *ProgressMeter) {
	for {
		select {
		case <-ctx.Done():
			fmt.Println("Context cancelled")
			return
		default:
		}
		time.Sleep(time.Duration(rand.Intn(120)) * time.Millisecond)
		pm.Progress()
	}
}
```

위 고루틴은 0~120ms 사이의 랜덤한 시간 동안 대기한 후 `Progress()`를 호출하여 진행 상황을 업데이트한다.

<CodeBlockWrapper>

```go
func observer(ctx context.Context, cancel func(), progress *ProgressMeter) {
	tick := time.NewTicker(100 * time.Millisecond)
	defer tick.Stop()
	var lastProgress int64
	for {
		select {
		case <-ctx.Done():
			return
		case <-tick.C:
			p, _ := progress.Get()
			if p == lastProgress {
				fmt.Println("No progress in the last 100ms")
				cancel()
				return
			} else {
				lastProgress = p
				fmt.Println("Progress:", p)
			}
		}
	}
}
```

</CodeBlockWrapper>

`observer` 고루틴은 100밀리초마다 `ProgressMeter`의 진행 상황을 가져와서 이전 진행 상황과 비교한다.
만약 진행 상황이 업데이트되지 않았다면, `cancel()`을 호출하여 `longGoroutine`을 종료시킨다.

```go
func main() {
	var progress ProgressMeter
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	wg := sync.WaitGroup{}
	wg.Add(1)
	go func() {
		defer wg.Done()
		longGoroutine(ctx, &progress)
	}()
	go observer(ctx, cancel, &progress)
	wg.Wait()
}
```

위 코드를 실행하면 `longGoroutine`이 진행 상황을 업데이트하고, `observer`가 진행 상황을 확인한다.
만약 `longGoroutine`이 100밀리초마다 진행 상황을 업데이트하지 않으면 `observer`가 `longGoroutine`을 종료시킨다.

<br>

### 취소

채널을 통해 취소시키는 건 이미 알고 있지만, atomic을 사용하여 취소시키는 방법도 있다.

```go
func CancelSupport() (cancel func(), isCancelled func() bool) {
	v := atomic.Bool{}
	cancel = func() {
		v.Store(true)
	}
	isCancelled = func() bool {
		return v.Load()
	}
	return
}
```

위 코드는 `cancel` 함수를 호출하면 `isCancelled` 함수가 `true`를 반환하도록 한다. 이를 통해 다음과 같이 취소 여부를 확인할 수 있다.
Go가 아닌 다른 언어에서는 이런 식으로 취소 여부를 확인하는 경우가 많은데, Go에서는 채널을 통해 취소하는 것이 더 좋은 방법인 것 같다.

```go
func main() {
	cancel, isCancelled := CancelSupport()
	wg := sync.WaitGroup{}
	wg.Add(1)
	go func() {
		defer wg.Done()
		for {
			time.Sleep(100 * time.Millisecond)
			if isCancelled() {
				fmt.Println("Cancelled")
				return
			}
		}
	}()
	time.AfterFunc(2*time.Second, cancel)
	wg.Wait()
}
```

<br><br>

## References

---

<center>

[
<Image alt="Effective Concurrency in Go" src="https://learning.oreilly.com/covers/urn:orm:book:9781804619070/400w/"/>
](https://learning.oreilly.com/library/view/effective-concurrency-in/9781804619070/)<br>
[Burak Serdar, 『Effective Concurrency in Go』, Packt Publishing](https://learning.oreilly.com/library/view/effective-concurrency-in/9781804619070/)

</center>
