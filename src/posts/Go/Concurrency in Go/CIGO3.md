---
title: Go의 메모리 모델
date: 2023-08-31
excerpt: Go의 메모리 모델
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

어떤 언어든 그 언어를 딥하게 파고 제대로 이해하기 위해서는 그 언어의 메모리 모델을 이해하는 것이 중요하다고 생각한다.
그만큼 Go를 열심히 공부하는 입장으로서 Go의 메모리 모델을 이해하는 것은 필수적이다.

단일 프로세서의 성능 향상에 한계가 오면서 멀티 코어 프로세서가 등장하게 되었고, 대부분의 성능 향상은 멀티 코어 프로세서에서 동작하는 것이 대전제가 되었다.
한편 현대 컴파일러 또한 극한의 최적화를 위해 코드를 재배치하는 일이 비일비재하다.
이는 sequantial program에서는 문제가 되지 않지만, concurrent program에서는 문제가 될 수 있다.

이러한 문제를 해결하기 위해서 <Highlight>메모리 모델</Highlight>이 정의된다.
메모리 모델은 컴파일러 빌더가 보장해야 하고, 프로그래머가 기대할 수 있는 것들을 정의한다.
즉, 메모리 모델은 하드웨어에 대한 컴파일러 빌더의 동작이 정의된 것이라고 볼 수 있다.

여러 고루틴에서 동시에 엑세스되는 데이터를 수정하는 프로그램은 이러한 액세스를 직렬화해야 함을 언급하며 Go의 메모리 모델 문서가 시작되는데, 이는 쉬운 일이 아니다.
동시성 프로그램의 모든 가능성을 고려하는 것은 불가능하기 때문이다.
대신 메모리 모델에 대한 인사이트를 가지고 있다면 동시성 프로그램의 문제를 해결하는 데 도움이 될 수 있다.

물론 메모리 모델과 너무 가깝게 작성된 코드를 짜는 것은 좋지 않지만, 알고 하지 않는 것과 모르고 하지 않는 것은 차이가 있다.
Go의 메모리 모델에 대해 본격적으로 알아보자.

<br><br>

## 메모리 연산 순서 모델

---

### **Sequenced-Before Relationship**

- 만약 `A is sequenced before B`라면, `A`가 `B`보다 먼저 실행되었음을 의미함
- 하지만 Sequenced-Before Relationship은 동시성을 고려하지 않음
- 메모리 read 연산이 변수에 쓰여진 마지막 값을 읽는 한, 컴파일러에 의해 instruction reordering이 발생할 수 있음

### **Synchronized-Before Relationship**

- 일반적인 메모리 연산 외에도 동기화 메모리 작업(Synchronizing Memory Operation)이 존재함

  - Syncrhonizing Read Operation: Mutex lock, Channel receive, atomic read, atomic compare-and-swap
  - Synchrornizing Write Operation: Mutex unlock, Channel send, Channel close, atomic write, atomic compare-and-swap

- 만약 `A is synchronized before B`라면, 동기화 연산 `A`가 동기화 연산 `B`보다 먼저 실행되었음을 의미함

- Sequenced-Before Relationship이 단일 고루틴에서의 일반적인 메모리 연산 순서를 정의한다면, Synchronized-Before Relationship은 여러 고루틴에서의 메모리 연산 순서를 정의할 수 있음

### **Happened-Before Relationship**

- Sequenced-Before Relationship와 Synchronized-Before Relationship의 조합
- `W`가 메모리 쓰기 작업이고 `R`이 메모리 읽기 작업일 때, 만약 `W synchronized before R`이면, `W happened before R`임
- `X`가 메모리 쓰기 작업이고 `Y`이 메모리 읽기 작업일 때, 만약 `X sequenced before W`이고 `Y is sequenced after R`이면, `X happened before Y`임

만약 read 및 write 연산간 happened-before relationship을 정의할 수 없다면, 이들은 동시에 일어남.

<br><br>

## Golang의 동기화 모델

앞선 Happened-Before Relationship을 통해 Go의 동기화 모델을 확인할 수 있음.

### 패키지 초기화

- 패키지 A가 다른 패키지 B를 임포트한다면, 패키지 B의 `init()` 함수가 패키지 A의 `init()` 함수보다 먼저 실행됨

### 고루틴

- 프로그램이 고루틴을 생성할 때, `go` 문은 고루틴 실행 이전에 동기화됨 (`go` statement is synchronized before the start of goroutine's execution)

  - 다음의 예시 코드는 항상 `Before goroutine`을 출력함

  ```go
  a := "Before goroutine"
  go func(){ fmt.Println(a) }()
  select{}
  ```

  - 하지만 고루팀이 종료될 때 명시적인 방식으로 통신을 하지 않는 이상, 고루틴의 종료 시점은 동기화되지 않음

### 채널

- unbuffered channel을 통해 전송되는 send 및 close 연산은 채널의 receive 연산과 동기화됨 (send or close is synchronized before the receive)
- buffered channel을 통해 전송되는 send 및 close 연산은 채널의 receive 연산과 동기화됨(receive is synchronized before the send or close)

  - syncrhonized before이면 happened before임

- 다음의 예시 코드는 항상 `1`을 출력함

  ```go
    var x int
    ch := make(chan int)
    go func() {
      ch <- 0
      fmt.Println(x)
    }()
    x = 1
    <-ch
    select{}
  ```

  - `x = 1` is sequenced before `<-ch`
  - `<-ch` is synchronized before `ch <- 0`
  - `ch <- 0` is sequenced before `fmt.Println(x)`
  - 따라서, `x = 1` is happened before `fmt.Println(x)`

### 뮤텍스

- 두 고루틴 A와 B가 있을 때 A가 먼저 획득한 뮤텍스를 unlock하면 B가 뮤텍스를 lock할 수 있음.

  - 이 때 unlock은 lock보다 먼저 동기화됨 (unlock is synchronized before the lock)
  - 다음의 예시 코드는 항상 `1`을 출력함

  ```go
  func main() {
    var m sync.Mutex
    var a int
    done := make(chan struct{})
    m.Lock()

    go func() {
        m.Lock()
        fmt.Println(a)
        m.Unlock()
        close(done)
    }()

    go func() {
        a = 1
        m.Unlock()
    }

    <-done

  }
  ```

### Atomic 연산

- `sync/atomic` 패키지는 저수준의 원자적 메모리 읽기/쓰기 연산을 제공함
- 만약 atomic write의 결과가 atomic read에서 확인된다면, atomic write는 atomic read보다 먼저 동기화됨 (atomic write is synchronized before the atomic read)
- 다음의 코드는 항상 1을 출력함

  ```go
    func main() {
        var i int
        var v atomic.Value
        done := make(chan struct{})
        go func() {
            i = 1
            v.Store(1)
        }()

        go func() {
            for {
                if val, _ := v.Load().(int); val == 1 {
                    fmt.Println(i)
                    close(done)
                    return
                }
            }
        }()

        <-done
    }
  ```

### Map, Once, WaitGroup

- `sync.Map`은 별도로 뮤텍스 로직을 구현하지 않아도 안전하게 사용할 수 있는 thread-safe map 타입임

  - 데이터가 한번 write되지만 여러 번 read되는 경우나 여러 고루틴이 각각의 키로 접근하는 경우, 일반 `map`에 뮤텍스를 사용하여 구현하는 것보다 `sync.Map`을 사용하는 것이 더 좋은 성능을 보임
  - 하지만 `sync.Map`은 `map`과 달리 타입 안정성을 보장하지 않음
  - 간단하게 캐시같은거 구현할 때 사용하면 좋다고 함
  - `sync.Map`에서 어떤 read 연산이 write 연산의 결과를 확인한다면, write 연산은 read 연산보다 먼저 발생함 (write is happened before the read)

- `sync.Once`는 여러 고루틴에서 무언가를 초기화하고자 할 때 유용함

  - `sync.Once.Do()`를 호출하여 함수를 넘기면 초기화가 실행됨
  - 여러 고루틴에서 `sync.Once.Do()`를 호출하더라도, 초기화 함수는 한 번만 실행되고, 다른 고루틴에서는 초기화 함수가 실행되지 않고 block되었다가 초기화 함수가 실행된 후에 unblock됨
  - 한 고루틴에서 `sync.Once.Do()`를 호출하면 다른 고루틴에서 `sync.Once.Do()`가 끝나기 이전에 그 초기화 함수가 종료됨 (the completion of initialization function is happened before the return from `sync.Once.Do()`)

- `sync.WaitGroup`의 모든 `Done()` 메소드 호출은 `Wait()` 메소드의 반환 이전에 동기화됨 (the completion of `Done()` is happened before the return from `Wait()`)

<br><br>

## References

---

<center>

[
<Image alt="Effective Concurrency in Go" src="https://learning.oreilly.com/covers/urn:orm:book:9781804619070/400w/"/>
](https://learning.oreilly.com/library/view/effective-concurrency-in/9781804619070/)<br>
[Burak Serdar, 『Effective Concurrency in Go』, Packt Publishing](https://learning.oreilly.com/library/view/effective-concurrency-in/9781804619070/)

</center>
