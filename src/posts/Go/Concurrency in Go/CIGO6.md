---
title: 동시성 프로그램의 에러 핸들링
date: 2023-09-11
excerpt: 동시성 프로그래밍에서 발생하는 에러 및 panic은 어떻게 핸들링해야 할지 알아보자
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

## 에러 핸들링

Go는 try-catch 기반의 에러 처리가 아닌 에러 여부 및 정보를 명시적으로 리턴하는 방식으로 에러를 처리한다.
이러한 방식이 과연 좋은지에 대해서는 의견이 분분하지만, 적어도 동시성 프로그래밍에서는 이러한 방식이 더 적합하다고 한다.
채널을 통해 다른 고루틴으로 에러 인스턴스를 전달하기 더 용이하기 때문이다.

일반적인 함수에서 허용되지 않은 상황이 발생했을 때 에러를 리턴한다.
하지만 고루틴은 에러를 반환할 수 없다. 따라서 에러를 처리할 수 있는 다른 방법을 찾아야 한다.
가령 여러 고루틴이 서로 다른 작업을 수행하고 있는데 한 고루틴에서 에러가 발생했다면, 다른 고루틴을 종료시키거나 결과를 폐기해야 한다.
또는 여러 고루틴이 실패하여 여러 에러 값을 처리해야 할 때도 있다.
하지만 에러 처리의 대원칙은 <Highlight>에러를 무시해서는 안 된다</Highlight>는 것이다.

<br>

예제를 통해 살펴보자. 아래 패턴은 여러 작업을 동시에 수행하는 중 에러를 처리하려 할 때 유용한 패턴이다.
또한 Worker Pool 패턴에서도 유용하게 사용된다.

<CodeBlockWrapper>

```go
type Result1 struct {
    Result ResultType1
    Error err
}

type Result2 struct {
    Result ResultType2
    Error err
}

...

result1Ch := make(chan Result1)
go func() {
    result, err := handleRequest1()
    result1Ch <- Result1{Result: result, Error: err}
}()

result2Ch := make(chan Result2)
go func() {
    result, err := handleRequest2()
    result2Ch <- Result2{Result: result, Error: err}
}()

result1 := <-result1Ch
result2 := <-result2Ch

if result1.Error != nil {
    // handle error
}
if result2.Error != nil {
    // handle error
}
```

</CodeBlockWrapper>

이 예제에서는 결과 채널에서 받은 결과에 에러가 있는지 확인한다.

이 때 한 결과에 에러가 있더라도 바로 함수를 종료하지 않고, 모든 채널에서 결과를 읽어와야 한다.
그렇지 않으면 고루틴 누수가 발생할 수 있다. 이를테면 다음과 같은 상황이다.

<CodeBlockWrapper>

```go
result1 := <-result1Ch
if result1.Error != nil {
    // handle error
    return result1.Error
}
result2 := <-result2Ch // 이 채널에서 값을 읽지 않으므로 고루틴 누수 발생
```

</CodeBlockWrapper>

<br>

모든 고루틴이 끝나기까지 기다린 후 에러를 반환하는 경우가 있을 수 있지만, 한 고루틴이 실패하면 다른 고루틴도 종료시켜야 하는 경우도 있다.
이 경우 `context.Context`를 사용하는 방법도 있지만 이는 나중에 다루고, 여기서는 `canceled` 채널을 사용하여 고루틴을 종료하는 방법을 알아보자.

채널을 닫으면 해당 채널을 읽고 있는 모든 고루틴에 일회성 브로드캐스팅이 가능하다.
따라서 특정 고루틴에서 에러가 발생하면 `canceled` 채널을 닫아 다른 고루틴에 에러가 발생했음을 알릴 수 있다.
주기적으로 canceled 채널을 읽는 다른 고루틴은 에러가 발생했음을 알게 되고, 종료할 수 있다.

다만 이 방법은 잠재적인 문제가 있는데, 바로 오류가 2회 이상 발생하여 이미 닫힌 `canceled` 채널을 다시 닫는 경우이다.
이 경우 panic이 발생하므로, 취소 채널을 닫는 대신 취소 채널을 단 한번만 닫을 수 있게끔 별도의 고루틴을 두어야 한다.

<CodeBlockWrapper>

```go
	resultCh1 := make(chan Result1)
	resultCh2 := make(chan Result2)
	canceled := make(chan struct{})
	cancelCh := make(chan struct{})
	defer close(cancelCh)

	go func() {
		once := sync.Once{}
		for range cancelCh {
			once.Do(func() {
				close(canceled)
			})
		}
	}()

	go func() {
		result, err := compute(100)
		if err != nil {
			cancelCh <- struct{}{}
			resultCh1 <- Result1{Error: err}
			return
		}

		select {
		case <-canceled:
			close(resultCh1)
			return
		default:
		}
	}()

    go func() {
        // same as above
    }()

    result1, ok1 := <-resultCh1
    result2, ok2 := <-resultCh2

    if !ok1 || !ok2 {
		fmt.Println("canceled")
	}

	fmt.Println(result1.Result, result1.Error)
	fmt.Println(result2.Result, result2.Error)
```

</CodeBlockWrapper>

1번 고루틴이 실패하면 2번 고루틴도 종료될것이며, 그 반대도 마찬가지이다.

<br>

취소 채널 대신 오류 채널을 사용하는 방법도 있다.

<CodeBlockWrapper>

```go
	errCh := make(chan error)
	defer close(errCh)
	canceled := make(chan struct{})

	errs := make([]error, 0)
	go func() {
		once := sync.Once{}
		for err := range errCh {
			errs = append(errs, err)
			once.Do(func() {
				close(canceled)
			})
		}
	}()

	resultCh1 := make(chan Result1)
	resultCh2 := make(chan Result2)

	go func() {
		defer close(resultCh1)
		result, err := compute(100)
		if err != nil {
			errCh <- err
			return
		}

		select {
		case <-canceled:
			return
		default:
		}
		resultCh1 <- Result1{Result: result}
	}()

	go func() {
		// same as above
	}()

	result1, ok1 := <-resultCh1
	result2, ok2 := <-resultCh2

	if !ok1 || !ok2 {
		fmt.Println("canceled")
	}

	fmt.Println(result1, result2)
```

</CodeBlockWrapper>

<br>

또 다른 방법은 각 고루틴의 스코프에서 전용 에러 변수를 사용하는 것이다.
이 방법은 `sync.WaitGroup`을 사용하며, 한 고루틴이 실패하더라도 다른 고루틴을 종료시킬 수 없다.
따라서 고루틴들이 굳이 취소할 필요가 없는 연산을 수행하는 경우 유용하다.

이 패턴으로 구현하고자 하는 경우 `Wait()` 메서드를 호출한 이후 에러를 확인해야 한다.
이는 메모리 모델에 따라 happened-before 관계를 만듦으로써 data race를 방지하기 위함이다.

<CodeBlockWrapper>

```go
    wg := sync.WaitGroup{}
	wg.Add(2)

	var err1, err2 error
	resultCh1 := make(chan ResultType, 1)
	resultCh2 := make(chan ResultType, 1)

	go func() {
		defer wg.Done()
		defer close(resultCh1)
		result, err := compute(100)
		if err != nil {
			err1 = err
			return
		}
		resultCh1 <- result
	}()
	go func() {
		defer wg.Done()
		defer close(resultCh2)
		result, err := compute(100)
		if err != nil {
			err2 = err
			return
		}
		resultCh2 <- result
	}()

	wg.Wait()
	if err1 != nil {
		fmt.Println("1:", err1)
	}
	if err2 != nil {
		fmt.Println("2:", err2)
	}

	result1, ok1 := <-resultCh1
	result2, ok2 := <-resultCh2

	if !ok1 || !ok2 {
		fmt.Println("channel closed")
	}

	fmt.Println(result1, result2)
```

</CodeBlockWrapper>

<br>

### 파이프라인

파이프라인은 일반적으로 많은 입력을 받아서 처리하므로, 입력 하나가 실패한다고 해서 파이프라인 전체를 종료시키는 것은 바람직하지 않다.
따라서 오류를 기록해두거나 로깅하고 계속 처리를 진행하는 것이 좋다.
이 때 로그를 보고 오류에 대한 인사이트를 확실히 얻을 수 있게끔, 오류 발생에 대한 다양한 정보와 컨텍스트를 기록해야 한다.

다음과 같은 원칙을 따르면 파이프라인에서 오류를 처리하는 것이 더 쉬워진다.

- 파이프라인의 각 단계에서는 에러 기록 함수를 호출한다. 이 함수는 파이프라인의 여러 단계에서 호출될 수 있으므로, 동시 호출을 처리할 수 있어야 한다.
- 파이프라인에서 오류가 발생하면, 파일명, 입력, 실패 이유, 해당 단계 등 관련된 정보를 분리된 오류 채널로 전송한다. 해당 채널을 읽는 고루틴은 이 정보를 데이터베이스나 로그에 기록한다.
- 오류를 다음 단계로 전달하여, 각 단계에서 입력에 오류가 있었는지 확인하고 이를 파이프라인이 끝날 때까지 전달해야 한다.

### 서버

일반적으로 서버는 HTTP 또는 gRPC 등의 요청을 받아서 처리하며, 보통 각 요청은 별도의 고루틴에서 처리된다.
따라서 사용자에 대한 응답을 작성하기 위한 에러를 전파하는 것은 요청 처리 스택에 달려있다.
에러 코드나 추가적인 진단 정보를 포함시키기 위해 커스텀 에러 타입을 정의하는 것도 좋은 방법이다.

<CodeBlockWrapper>

```go
type Error struct {
    Code int
    HttpStatus int
    DiagMsg string
}

type HTTPError interface {
    HTTPStatus() int
    HTTPMessage() string
}

func (e *Error) HTTPStatus() int {
    return e.HttpStatus
}

func (e *Error) HTTPMessage() string {
    return fmt.Sprintf("%d: %s", e.Code, e.DiagMsg)
}

func WriteError(w http.ResponseWriter, err error) {
    e, ok := err.(HTTPError)
    if ok {
        http.Error(w, e.HTTPStatus(), e.HTTPMessage())
    } else {
        http.Error(w, http.StatusInternalServerError, err.Error())
    }
}

```

</CodeBlockWrapper>

<br><br>

## Panic

---

패닉은 일반적인 오류와 달리 프로그램 자체를 더 이상 실행할 수 없는 상황을 의미하며, 즉시 프로그램을 종료시킨다.
따라서 패닉이 발생하는 경우 최대한 많은 진단 정보와 컨텍스트를 개발자에게 전달해야 한다.

동시성 프로그램에서 패닉이 발생하면 해당 고루틴을 실행한 함수까지 거슬러 올라가며 모든 중첩 함수 호출이 종료된다.
이 때 모든 defer 함수가 실행되는데, 이를 통해 panic 상태를 회복하거나 가비지 컬렉터에 수집되지 않은 리소스를 정리할 수 있다.
함수 체인에서 패닉이 처리되지 않으면 프로그램은 종료되므로, 패닉은 반드시 적절히 처리되어야 한다고 할 수 있다.

일반적으로 서버 프로그램에서는 별도의 고루틴이 요청을 처리한다.
대부분의 프레임워크에서는 패닉이 발생하면 프로그램 전체를 중지시키는 게 아니라 오류 스택을 출력하고 해당 요청만 실패시킨다.
이 때 프레임워크를 사용하지 않는다면 패닉을 직접 처리해야 한다.

<CodeBlockWrapper>

```go
type Handler func(http.ResponseWriter, *http.Request)

func (h Handler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	h(w, r)
}

func PanicHandler(next Handler) Handler {
	return func(w http.ResponseWriter, r *http.Request) {
		defer func() {
			err := recover()
			if err != nil {
				fmt.Println(err)
			}
		}()
		next(w, r)
	}
}

func main() {
	handler := func(w http.ResponseWriter, r *http.Request) {
		panic("Panic!")
	}

	http.Handle("/path", PanicHandler(handler))
	http.ListenAndServe(":8080", nil)
}

```

</CodeBlockWrapper>

또는 패닉을 발생시킬 수 있는 고루틴이 있고, 그 패닉이 프로그램 전체를 종료시키지 않아야 한다면 패닉을 처리해야 한다.

```go
go func(errCh chan<- error, resultCh chan<- result) {
    defer func() {
        err := recover()
        if err != nil {
            errCh <- err
            close(resultCh)
        }
    }()

    // do something
}(errCh, resultCh)
```

<br>

파이프라인에서 패닉을 처리하는 것은 보다 방어적이어야 한다.
에러 처리와 마찬가지로 파이프라인은 장시간 실행되는 프로그램이므로, 패닉이 발생하더라도 프로그램을 무작정 종료시키는 것은 좋은 생각이 아니다.
일반적으로 파이프라인 처리가 완료되면 모든 패닉과 에러에 대한 로그를 갖고 있어야 한다.
따라서 패닉 복구가 제대로 이루어졌는지 확실하게 알 수 있어야 한다.

다음의 예제는 패닉이 발생하더라도 계속 처리를 진행하는 방법을 보여준다.

<CodeBlockWrapper>

```go
func pipelineStage[IN any, OUT WithError](input <-chan IN, output chan<- WithError, errCh chan<-error, process(IN) OUT) {
    defer close(output)
    for data := range output {
        result, err := func() (res OUT, err error) {
            defer func() {
                err = recover()
                if err != nil {
                    return
                }
            }()
            return process(data), nil
        }()

        if err != nil {
            errCh <- err
            continue
        }
        output <- result
    }
}
```

</CodeBlockWrapper>

<br><br>

## References

---

<center>

[
<Image alt="Effective Concurrency in Go" src="https://learning.oreilly.com/covers/urn:orm:book:9781804619070/400w/"/>
](https://learning.oreilly.com/library/view/effective-concurrency-in/9781804619070/)<br>
[Burak Serdar, 『Effective Concurrency in Go』, Packt Publishing](https://learning.oreilly.com/library/view/effective-concurrency-in/9781804619070/)

</center>
