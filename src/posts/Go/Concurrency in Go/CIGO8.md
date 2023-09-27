---
title: 동시성 프로그래밍과 요청 처리
date: 2023-09-16
excerpt: 동시성 프로그래밍과 서버 프로그래밍을 잘 버무려보자.
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
</script>

## Context를 통한 취소 및 타임아웃

---

취소의 종류는 여러가지가 있을 수 있다.

- 사용자가 요청을 취소하는 경우
- 타임아웃이 발생하는 경우
- 계산의 일부분이 실패하여 전체 결과가 무의미한 경우

따라서 이러한 취소를 처리하기 위해 취소 채널을 사용할 수 있다. 이는 [이전 포스트](https://jhseoeo.github.io/posts/post/Go/Concurrency%20in%20Go/CIGO6)에서 다루었다.
하지만 채널을 닫는 것은 꽤 주의해야 하는 일인데, 이미 닫은 채널을 닫는 것은 panic을 일으키기 때문이다.

요청은 대개 복잡한 함수 체인을 통해 처리되며, 동시성 시스템에서는 복잡도가 더 증가한다.
따라서 개별 요청에 대한 로그는 서로 다른 여러 고루틴들을 추적할 수 있게끔 해야 한다.
이를 위해 요청에 대한 unique identifier를 사용하는 것이 일반적인 방법이다.

`context.Context`는 요청의 취소와 구분, 이 두가지 요구사항을 모두 충족시킬 수 있다.
또한 context의 `Done` 채널을 통해 취소를 처리할 수 있고, context는 제네릭한 key/value 쌍을 저장할 수 있으므로 요청 및 요청자의 정보를 저장할 수 있다.

context는 thread-local storage라기보다는 요청을 처리하는 고루틴간의 데이터 공유를 위한 저장소이다. 함수의 첫번째 파라미터로 context를 전달하는 것도 이러한 이유 때문이다.
요청에 관련된 정보를 전달하는 것이지, 고루틴에 관련된 정보를 전달하는 것이 아니다.

<br>

context는 `context.Background()`를 통해 생성한다. 이는 빈 context를 생성한다.
이 단계에서는 아무것도 저장하지 않으며, 취소 기능도 없다.

context에 기능을 추가하는 방식은 Decorator 패턴에 기반한다.
이를테면 `context.WithCancel()`은 취소 기능을 추가한 context를 생성한다.

```go
ctx0 := context.Background()
ctx1, cancel := context.WithCancel(ctx0)
```

`ctx1`을 파라미터로 받는 함수 및 고루틴은 `ctx1.Done()` 채널을 확인하여 취소 여부를 확인할 수 있으며, `cancel()` 함수를 호출하면 `ctx1.Done()` 채널이 닫힌다.
`cancel()`은 여러번 호출하더라도 최초 호출시에만 취소된다.

위 예제에서 `ctx0`이 취소되면 `ctx1`도 취소된다. 이는 `ctx1`이 `ctx0`의 자식 context이기 때문이다.
반면 `ctx1`이 취소되어도 `ctx0`은 취소되지 않는다는 점을 유의해야 한다.

취소 기능은 다음과 같이 사용할 수 있다.

<CodeBlockWrapper>

```go
func someFunc(ctx context.Context) error {
    ctx1, cancel1 := context.WithCancel(ctx)
    defer cancel1()
    wg := sync.WaitGroup{}
    wg.Add(1)

    go func() {
        defer wg.Done()
        process2(ctx1)
    }()

    err := process1(ctx1);
    if err != nil {
        cancel1()
        return err
    }

    wg.Wait()
    return nil
}
```

</CodeBlockWrapper>

위 예제에서는 `process1`와 `process2` 함수를 호출하며, `process1`에서 에러가 발생하면 `process2`를 취소한다.
이를 위해 취소 가능한 context를 생성한다. 이때 `defer cancel1()`는 메모리 누수를 방지하기 위해 반드시 호출해야 한다.

<br>

timeout과 deadline 기능도 비슷하다. 이들은 시간이 지나면 알아서 취소 함수를 호출한다.
timeout과 deadline의 차이는 timeout은 상대적인 시간(`time.Duration`)을 사용하고, deadline은 절대적인 시간(`time.Time`)을 사용한다는 점이다.

```go
ctx := context.Background()
ctx1, cancel1 := context.WithTimeout(ctx, 5 * time.Second)
defer cancel1()
ctx2, cancel2 := context.WithDeadline(ctx, time.Now().Add(5 * time.Second))
defer cancel2()
```

<br>

context는 key/value 쌍을 저장하는 기능도 제공한다. 이를 통해 요청에 대한 정보를 저장할 수 있다.
하지만 이를 제네릭 map과 동일시해서는 안된다.

context는 기본적으로 Decorator 패턴에 기반하여 구현되므로, context에 값을 추가할 때마다 값이 저장된 새로운 context를 생성한다.
context에서 값을 찾을 때는 현재 context에서부터 부모 context로 거슬러 올라가며 값을 찾는다.
부모 context에 특정 key가 이미 존재한다고 해도 자식 context에서 같은 key로 값을 저장하면 부모 context의 값이 덮어쓰여진다.

또한 context 자체가 linear한 구조이므로 값을 찾는 과정이 좀 무겁다는 단점이 있다.
만약 context에 값을 많이 저장하려 한다면, 이를 구조체로 묶는 등 자료구조에 저장한 채로 context에 추가하는 것이 좋다.

간단한 프로그램의 경우 context에 문자열 키값을 저장해도 문제 없을 것이다.
하지만 여러 패키지가 사용하는 context라면 자식 context가 부모 context의 키값을 덮어쓰고 하면서 예상치 못한 동작을 일으킬 수 있고, 이는 디버깅하기조차 어려울 것이다.
context의 key는 일반적으로 Go의 타입 시스템을 이용하여 Type-safe하게 만들어야 한다.

```go
type requestIDKeyType int
var requestIDKey requestIDKeyType

func WithRequestID(ctx context.Context) context.Context {
    return context.WithValue(ctx, requestIDKey, uuid.New())
}

func GetRequestID(ctx context.Context) uuid.UUID {
    id, _ := ctx.Value(requestIDKey).(uuid.UUID)
    return id
}

func main() {
	ctx := context.Background()
	ctx1 := WithRequestID(ctx)
	ctx2 := WithRequestID(ctx)

	fmt.Println(GetRequestID(ctx))
	fmt.Println(GetRequestID(ctx1))
	fmt.Println(GetRequestID(ctx2))
}

```

위 예제에서 requestIDKey는 `requestIDKeyType` 타입으로 0으로 초기화되지만, 다른 패키지에서 값이 0인 key를 사용하더라도 타입이 다르기 때문에 충돌이 발생하지 않는다.

`ctx.Value()`는 주어진 키가 존재하지 않는 경우 해당 타입의 zero value를 반환한다는 점도 기억해두면 좋다. 따라서 위 프로그램의 출력 결과에서 첫 번째 줄은 `uuid.UUID`의 zero value인 `00000000-0000-0000-0000-000000000000`이 출력될 것이다.

<br>

context에는 request-specific한 정보를 저장하는 것이 기본적인 원칙이다.
가령 모든 요청에 적용되는 데이터베이스 연결 정보는 context에 저장하는 것이 적합하지 않다.
반면 사용자의 자격 증명 정보에 따라 연결되는 데이터베이스 저장소가 달라지는 경우, 데이터베이스 연결 정보를 context에 저장하는 것이 적합할 수 있다.

context는 여러 고루틴에서 동시에 접근할 수 있으므로 race condition에 주의해야 한다.
가령 다음과 같은 context는 동시성 문제를 일으킬 수 있다.

```go
newCtx := context.WithValue(ctx, mapKey, map[string]interface{"key": "value"})
```

여러 고루틴에서 newCtx 안 map의 값을 추가/제거하려 할 것이다. 이는 메모리 변조 및 race condition을 일으킬 수 있다.
이러한 문제는 다음과 같이 해결할 수 있다.

```go
type StructWithMap struct {
    sync.Mutex
    Map map[string]interface{}
}

...

newCtx := context.WithValue(ctx, mapKey, &StructWithMap{Map: map[string]interface{"key": "value"}})
```

뮤텍스와 map을 구조체로 묶어서 context에 저장하면, 고루틴에서 map에 접근할 때 뮤텍스를 사용해야 한다.
이 때 뮤텍스는 복사되어선 안되기 때문에 포인터로 지정해주어야 한다.

<br><br>

## 백엔드 서비스

---

이 챕터에서는 간단한 HTTP 및 웹소켓 서버를 구현해볼 것이다.
HTTP와 웹소켓 모두 TCP 기반의 프로토콜이므로, 간단한 TCP 서버를 먼저 작성해보려 한다.
TCP 서버는 요청을 동시에 처리하며 Graceful Shutdown을 지원한다.
이를 위해서는 Listener, 요청 핸들러, WaitGroup이 필요하다.

```go
type TCPServer struct {
	Listener    net.Listener
	HandlerFunc func(context.Context, net.Conn)
	wg          sync.WaitGroup
}
```

이 서버는 연결을 기다리는 `Listen()` 메소드를 제공한다.
만약 `Listen()` 메소드가 종료되면 모든 활성화된 핸들러를 중단시키기 위해 컨텍스트를 취소 가능한 context로 만들어야 하며, 새로운 연결이 생성될 때마다 새 고루틴을 생성하여 `HandlerFunc`을 호출한다.

<CodeBlockWrapper>

```go
func (srv *TCPServer) Listen() error {
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	for {
		conn, err := srv.Listener.Accept()
		if err != nil {
			if errors.Is(err, net.ErrClosed) {
				return nil
			}
			fmt.Println(err)
		}

		srv.wg.Add(1)
		go func() {
			defer srv.wg.Done()
			srv.HandlerFunc(ctx, conn)
		}()
	}
}
```

</CodeBlockWrapper>

`Listen()` 메소드는 `srv.Listener.Accept()`가 실패하기 전까지 무한히 반복한다.
`Listen()` 메소드를 멈추려면 다른 고루틴에서 Listener를 닫아야 한다.
아래 예제는 Listener를 닫는 예제이다.

```go
func (srv *TCPServer) StopListener() error {
	return srv.Listener.Close()
}
```

Listener를 닫으면 `srv.Listener.Accept()`가 실패하므로 `Listen()` 메소드가 종료될 것이며, context의 취소 함수가 호출되어 모든 핸들러가 종료될 것이다.
이 떄 모든 핸들러가 종료될 때까지 기다리는 메소드가 필요하다.

<CodeBlockWrapper>

```go
func (srv *TCPServer) WaitForConnections(timeout time.Duration) bool {
	toCh := time.After(timeout)
	doneCh := make(chan struct{})
	go func() {
		srv.wg.Wait()
		close(doneCh)
	}()

	select {
	case <-toCh:
		return false
	case <-doneCh:
		return true
	}
}
```

</CodeBlockWrapper>

모든 핸들러 함수가 종료될 때까지 기다리기 위해 `sync.WaitGroup`을 사용하며, 타임아웃을 설정하기 위해 `time.After()`를 사용한다.

<br>

컨테이너화된 백엔드 서비스는 종료 시그널을 받아 Graceful Shutdown을 수행할 수 있어야 한다.
아래의 예시는 Graceful Shutdown을 위해 시그널을 받아서 처리하는 예제이다.

<CodeBlockWrapper>

```go
func NewTCPServer(handler func(ctx context.Context, conn net.Conn)) *TCPServer {
	var err error
	srv := &TCPServer{}
	srv.Listener, err = net.Listen("tcp", "")
	if err != nil {
		panic(err)
	}
	srv.HandlerFunc = handler

	return srv
}

func main() {
	srv := NewTCPServer(func(ctx context.Context, conn net.Conn) {
		defer conn.Close()
		io.Copy(conn, conn)
	})
	sigCh := make(chan os.Signal, 1)
	signal.Notify(sigCh, syscall.SIGTERM, syscall.SIGINT)
	go func() {
		<-sigCh
		fmt.Println("Shutting down...")
		err := srv.StopListener()
		if err != nil {
			fmt.Println(err)
		}
		srv.WaitForConnections(5 * time.Second)
	}()

	srv.Listen()
}
```

</CodeBlockWrapper>

<br>

다음으로 HTTP 서버를 구현해보려 한다.
본인은 Fiber에 익숙하므로 책 내용을 따라가지 않고 Fiber를 사용하여 동일한 기능을 구현해보려 한다.
Fiber는 Node.js의 Express와 비슷한 API를 가지고 있어 Request Multiplexing이 간단하고 직관적이라는 장점이 있다.

Fiber를 비롯한 거의 모든 HTTP 프레임워크가 가지고 있는 공통점이 있다.

- 요청 핸들러는 동시에 호출된다
- 요청에 대한 응답이 순서대로 전달되지 않을 수 있다.
- 호출자를 믿지 말고, Validation 및 Authentication을 통해 요청을 검증해야 한다.

```go
package main

import "github.com/gofiber/fiber/v2"

type DashboardService struct {
	DashboardGetHandler fiber.Handler
	DashboardPostHandler fiber.Handler
}

func NewDashboardService() *DashboardService {
	return &DashboardService{
		DashboardGetHandler: func(c *fiber.Ctx) error {
			return c.SendString("Dashboard")
		},
        DashboardPostHandler: func(c *fiber.Ctx) error {
			return c.SendString("Dashboard")
		},
	}
}

func main() {
	app := fiber.New()
	svc := NewDashboardService()
	app.Get("/dashboard", svc.DashboardGetHandler)
	app.Post("/dashboard", svc.DashboardPostHandler)
	app.Listen("localhost:10001")
}
```

Express를 사용해봤다면 위 코드에서 특별히 어려운 부분은 없을 것이다.
하지만 `svc.DashboardHandler`는 동시에 호출될 수 있기 때문에, 만약 이 핸들러에서 shared object를 수정하고자 하는 경우 mutex를 사용해야 한다.

<br>

표준 HTTP 라이브러리에서는 미들웨어를 사용하여 인증, 검증, 로깅, 컨텍스트 등을 처리한다.
Fiber에서의 미들웨어 처리는 Express처럼 `App.Use()`를 사용하는 방법도 있지만 Handler Chain을 만들어 사용하는 방법도 있다.

<CodeBlockWrapper>

```go
func Limit(maxSize int, next fiber.Handler) fiber.Handler {
	return func(c *fiber.Ctx) error {
		if c.Request().Header.ContentLength() > maxSize {
			return c.SendStatus(fiber.StatusRequestEntityTooLarge)
		}

		return next(c)
	}
}

func Auth(next fiber.Handler) fiber.Handler {
	return func(c *fiber.Ctx) error {
		authKey := c.Request().Header.Peek("Authorization")
		if authKey == nil {
			return c.SendStatus(fiber.StatusUnauthorized)
		}
		//err := authorize(authKey)
		//if err != nil {
		//	return c.SendStatus(fiber.StatusUnauthorized)
		//}

		return next(c)
	}
}

func main() {
	app := fiber.New()
	svc := NewDashboardService()

	app.Get("/dashboard", Limit(1024, Auth(svc.DashboardGetHandler)))
	app.Post("/dashboard", Limit(1024, Auth(svc.DashboardPostHandler)))
	app.Listen("localhost:10001")
}
```

</CodeBlockWrapper>

이로써 `svc.DashboardHandler`를 호출하는 요청은 1kb 이하의, 인증된 GET 요청임을 보장할 수 있다.

<br>

### 결과 분산 및 병합

이 가상의 서버가 통계 데이터를 수집하기 위해 다른 두 개의 서버에 요청을 보낸다고 가정해보자.
첫 번째 서버는 현재 유저에 대한 정보를, 두 번째 서버는 여러 사용자를 포함할 수 있는 계정에 대한 정보를 제공한다.
예제에서는 간략화를 위해 많이 압축된 형태이지만 실제로는 다른 마이크로서비스에 REST, gRPC 등을 통해 요청을 보내는 형태일 것이다.

```go
type DashboardService struct {
    Users    UserSvc
    Accounts AccountSvc
}

type DashboardData struct {
    UserData         UserStats
    AccountData      AccountStats
    LastTransactions []Transaction
}
```

실제로 핸들러는 여러 고루틴에 작업을 분배하고 결과를 수집하는 방식으로 구현된다.

<CodeBlockWrapper>

```go
func (svc *DashboardService) GetDashboardData(ctx context.Context, userID string) DashboardData {
	result := DashboardData{}
	wg := sync.WaitGroup{}

	wg.Add(1)
	go func() {
		defer wg.Done()
		var err error
		result.UserData, err = svc.Users.GetStats(ctx, userID)
		if err != nil {
			log.Println(err)
		}
	}()

	acctCh := make(chan AccountStats)
	go func() {
		defer close(acctCh)
		newCtx, cancel := context.WithTimeout(ctx, 100*time.Millisecond)
		defer cancel()
		resultCh := svc.Account.GetStats(newCtx, userID)
		select {
		case data := <-resultCh:
			acctCh <- data
		case <-newCtx.Done():
		}
	}()

	transactionWg := sync.WaitGroup{}
	transactionWg.Add(1)
	transactionCh := make(chan Transaction)
	go func() {
		defer transactionWg.Done()
		for t := range svc.Users.GetTransactions(ctx, userID) {
			transactionCh <- t
		}
	}()
	go func() {
		transactionWg.Wait()
		close(transactionCh)
	}()

	wg.Add(1)
	go func() {
		defer wg.Done()
		for record := range transactionCh {
			result.LastTransactions = append(result.LastTransactions, record)
		}
	}()

	wg.Wait()
	result.AccountData = <-acctCh
	return result
}
```

</CodeBlockWrapper>

함수가 길고 여러 고루틴을 사용하므로 코드가 복잡해 보일 수 있다.
이 함수는 먼저 고루틴을 생성하여 `Users.GetStats()`를 호출하며, `userID`에 따른 사용자 통계를 가져온다.
이 때 `result.UserData`를 직접 수정하는데, 다른 고루틴이 `result.UserData`를 건드리지 않기 때문에 안전하다.

다음으로는 고루틴을 생성하여 `Accounts.GetStats()`를 호출하며, 100밀리초의 타임아웃을 설정한다. `Accounts.GetStats()`가 수행된 결과는 `acctCh` 채널에 전달된다.

그리고 트랜잭션 정보를 가져오기 위해 두 개의 고루틴을 생성한다.
하나는 `Users.GetTransactions()`를 호출하여 `transactionCh` 채널에 결과를 전달하고, 다른 하나는 `transactionCh` 채널에서 결과를 가져와 `result.LastTransactions`에 저장한다.
이 때 모든 트랜잭션 정보를 가져올 때까지 기다려야 하므로 별도의 고루틴에서 `transactionWg.Wait()`를 호출하여 기다린 후 `transactionCh` 채널을 닫는다.

마지막으로 모든 wait group이 종료될 때까지 기다린 후, `acctCh` 채널에서 결과를 가져와 `result.AccountData`에 저장한다.

이와 같은 작업에서는 두 가지 유형이 나타난다.
하나는 동시성 문제가 발생하지 않음을 확실시하여 신중히 공유 메모리를 사용하는 경우이고, 다른 하나는 채널을 사용하는 경우이다.
채널을 사용하는 경우라면 채널의 close 및 고루틴의 terminate를 적절히 고려해야 한다.

<br>

### 세마포어(Semaphore)

다소 무거운 리소스를 사용하는 경우, 동시 호출되는 함수의 수를 제한해야 할 수도 있다.
이 경우 세마포어가 사용된다.
세마포어에는 리소스의 수를 나타내는 카운터가 있으며, 이 카운터는 고루틴이 리소스를 사용할 때마다 감소하고, 리소스를 반환할 때마다 증가한다.
만약 카운터가 0이라면 리소스를 사용할 수 없으므로 고루틴은 대기 상태로 전환된다.
이러한 관점에서 뮤텍스는 카운터가 1인 세마포어라고 볼 수 있다.

다른 언어에는 별도의 세마포어가 존재하지만, Go는 Buffered Channel을 쓰면 세마포어를 구현할 수 있다.

```go
semaphore := make(chan struct{}, 10)
```

카운터의 증가/감소는 채널에 값을 전송/수신하는 것으로 구현할 수 있다.

```go
semaphore <- struct{}{} // acquire
<-semaphore // release
```

세마포어는 리소스의 수를 제한하는 것 외에도, 고루틴의 수를 제한하는 용도로도 사용할 수 있다.
세마포어를 활용하여 동시 호출되는 고루틴의 수를 제한하는 미들웨어 함수의 예제는 다음과 같다.

```go
func ConcurrencyLimiter(sem chan struct{}, next fiber.Handler) fiber.Handler {
	return func(c *fiber.Ctx) error {
		sem <- struct{}{}
		defer func() { <-sem }()

		return next(c)
	}
}

func main() {
	app := fiber.New()
	svc := NewDashboardService()

	semaphore := make(chan struct{}, 10)
	app.Get("/dashboard", ConcurrencyLimiter(semaphore, Limit(1024, Auth(svc.DashboardGetHandler))))
	app.Post("/dashboard", ConcurrencyLimiter(semaphore, Limit(1024, Auth(svc.DashboardPostHandler))))
	app.Listen("localhost:10001")
}
```

<br><br>

## 데이터 스트리밍

---

데이터의 크기가 너무 크거나, 주기적으로 데이터를 전송해야 하는 경우, 데이터를 스트리밍할 필요가 있다.
스트리밍이란 지속적으로 생성되는 데이터를 처리하는 것을 의미하며, 대용량 파일 뿐만 아니라 데이터베이스 레코드 및 센서 데이터 등이 이에 해당한다.
일반적으로 스트리밍에서는 데이터를 수집하여 다음 레이어에 전달하는 **generator** 함수가 필요하다.

데이터베이스에 저장된 시계열 데이터를 스트리밍하는 예제를 작성해보려 한다.
예제 프로그램은 데이터베이스에 특정 데이터 집합을 쿼리하고, 평균값을 실시간으로 계산하고, 평균값이 특정 임계값을 넘어가면 인스턴스를 종료하는 프로그램이다.

먼저 generator를 만들어볼 것이다.
아래의 `Store` 타입은 데이터베이스 정보를 저장하며, `Store` 인스턴스는 애플리케이션 스타트업 타임에 초기화된다.
또한 `Entry` 타입은 특정 시간에 측정된 센서 데이터를 나타낸다.

```go
type Store struct {
	DB *sql.DB
}

type Entry struct {
	At    time.Time
	Value float64
	Error error
}
```

스트리밍 도중 발생하는 에러를 처리하는 것은 꽤 중요한 문제이다.
에러는 스트리밍 전/중간/후에 발생할 수 있으며, 에러가 두 개 이상 발생할 수도 있다.
일반적으로 다운스트림의 처리 로직이 에러를 처리할 수 있도록 에러 내용을 전달하는 것이 좋고, `Entry` 구조체에 `Error` 필드가 존재하는 것이 그 이유이다.

다음은 generator 메소드의 예제이다.
`Store`의 메소드로 구현되어 있기 때문에 데이터베이스에 접근 권한을 가진다.
컨텍스트와 요청 정보를 파라미터로 받고 `Entry` 채널 및 에러 정보를 반환한다.

<CodeBlockWrapper>

```go
func (svc Store) Stream(ctx context.Context, req Request) (<-chan Entry, error) {
	rows, err := svc.DB.Query(`SELECT at, value FROM measurements`)
	if err != nil {
		return nil, err
	}

	ret := make(chan Entry)
	go func() {
		defer close(ret)
		defer rows.Close()
		for {
			var at int64
			var entry Entry
			select {
			case <-ctx.Done():
				return
			default:
			}

			if !rows.Next() {
				break
			}
			err := rows.Scan(&at, &entry.Value)
			if err != nil {
				ret <- Entry{Error: err}
				continue
			}
			entry.At = time.UnixMilli(at)
			ret <- entry
		}
		err := rows.Err()
		if err != nil {
			ret <- Entry{Error: err}
		}
	}()

	return ret, nil
}
```

</CodeBlockWrapper>

이 메소드는 데이터베이스에 쿼리를 날리고, 받은 결과에서 검색된 결과를 채널을 통해 하나씩 전달한다.
이 과정에서 오류가 발생하면 `Entry` 구조체에 `Error` 필드를 채워서 전달한다.
또한 컨텍스트를 통한 취소도 지원하는 것을 볼 수 있다.

고루틴이 생성될 때 채널 등을 closure로 가지고 가기 때문에 고루틴을 확실히 종료시켜주는 것이 중요하다.
기본적으로 쿼리 결과의 끝에 도달하거나, 컨텍스트가 취소되면 고루틴이 종료된다.

<br>

스트리밍 처리에서도 데이터 파이프라인처럼 한 스트림의 결과를 다른 스트림의 입력으로 사용할 수 있다.
다음의 예제는 스트림에서 일정 값 이상의 데이터를 필터링하는 예제이다.

<CodeBlockWrapper>

```go
func MinFilter(min float64, in <-chan Entry) <-chan Entry {
	outCh := make(chan Entry)
	go func() {
		defer close(outCh)
		for entry := range in {
			if entry.Error != nil || entry.Value >= min {
				outCh <- entry
			}
		}
	}()

	return outCh
}
```

</CodeBlockWrapper>

위 예제는 오류 발생시 해당 데이터를 버리는데, 이보다는 에러를 별도로 처리하는 것이 좋다.
더움 예제는 에러를 별도 채널에 전달하는 예제이다.

<CodeBlockWrapper>

```go
func ErrFilter(in <-chan Entry) (<-chan Entry, <-chan error) {
	outCh := make(chan Entry)
	errCh := make(chan error)
	go func() {
		defer close(outCh)
		defer close(errCh)
		for entry := range in {
			if entry.Error != nil {
				errCh <- entry.Error
			} else {
				outCh <- entry
			}
		}
	}()
	return outCh, errCh
}
```

</CodeBlockWrapper>

<br>

스트림에 대한 필터링이 끝나고, 다음은 평균값을 계산해야 한다.
moving average가 임계값을 넘어가면 해당 `Entry`를 선택할 것이다.
이를 위해 moving average를 포함하는 새로운 구조체를 선언한다.

```go
type AboveThresholdEntry struct {
	Entry
	Avg float64
}
```

다음으로 스트림에서 `windowSize`만큼의 마지막 데이터의 moving average를 계산하는 함수를 작성한다.
Circular 및 FIFO 버퍼 역할로 사용하기 위해 buffered channel을 사용한다.

<CodeBlockWrapper>

```go
func MovingAvg(threshold float64, windowSize int, in <-chan Entry) <-chan AboveThresholdEntry {
	window := make(chan float64, windowSize)
	out := make(chan AboveThresholdEntry)
	go func() {
		defer close(out)
		var runningTotal float64
		for input := range in {
			if len(window) == windowSize {
				avg := runningTotal / float64(windowSize)
				if avg >= threshold {
					out <- AboveThresholdEntry{
						Entry: input,
						Avg:   avg,
					}
				}
				runningTotal -= <-window
			}
			window <- input
			runningTotal += input.Value
		}
	}()
	return out
}
```

</CodeBlockWrapper>

지금까지 작성한 것들을 모두 합쳐, 스트리밍을 수행하는 코드를 작성해보자.

<CodeBlockWrapper>

```go
    ctx, cancel := context.WithCancel(context.Background())
	defer cancel()
	entries, err := st.Stream(ctx, store.Request{})
	if err != nil {
		panic(err)
	}

	filteredEntries := filters.MinFilter(0.001, entries)
	entryCh, errCh := filters.ErrFilter(filteredEntries)
	resultCh := filters.MovingAvg(0.5, 5, entryCh)
	var streamErr error
	go func() {
		for err := range errCh {
			if streamErr == nil {
				streamErr = err
				cancel()
			}
		}
	}()

	for entry := range resultCh {
		fmt.Printf("entry: %v\n", entry)
	}
	if streamErr != nil {
		fmt.Println(streamErr)
	}
```

</CodeBlockWrapper>

다만 여기서 주의해야 할 점이 몇 가지 있다.
에러 채널에서 값을 읽는 별도의 고루틴이 있는데, 처음으로 에러가 발생하면 `cancel()`을 호출하여 연쇄적으로 채널을 닫아 모든 고루틴을 종료시킨다. 즉 스트리밍 프로세스 전체가 종료된다.
얼핏 보기엔 `streamErr`가 잠재적으로 data race를 일으킬 것 같지만, `resultCh`가 닫히기 이전에 `errCh`가 닫히는 것이 보장되기 때문에 문제가 발생하지 않는다.

현재 결과 수집 및 에러 수집이 메인 고루틴에서 수행되고 있다.
만약 에러 수집을 별도의 고루틴에서 수행한다면, 에러 수집이 완료될 때까지 기다리기 위해 메인 고루틴에서 `sync.WaitGroup`을 사용해야 한다.

Go의 동시성 요소들만을 사용하여 모든 형태의 스트리밍(가령 MSA상에서의 HTTP, WebSocket, gRPC 등)을 구현할 수 있는 것은 아니다.
이들은 원격 노드끼리의 네트워크 상의 통신을 위한 것이기 때문이다.
하지만 이 경우 기본 동시성 요소에 간단한 어댑터를 추가하여 구현할 수 있다.

이를 위해서는 데이터를 어떻게 시리얼라이즈 및 디시리얼라이즈할 것인지 결정해야 한다.
이상적인 방법중 하나는 gRPC를 사용하는 것이지만 예제에서는 간단한 방법인 JSON을 사용해보려 한다.

마샬링되는 대상은 `Entry` 구조체인데, `Error` 필드는 JSON으로 마샬링할 수 없기 때문에 문자열 등으로 변환한다.
통신을 위한 별도의 구조체를 선언한다.

```go
type Message struct {
	At    time.Time `json:"at"`
	Value float64   `json:"value"`
	Error string    `json:"error,omitempty"`
}
```

이 `Message` 구조체는 `Entry`의 Serializable 버전이라고 볼 수 있다.
우리는 `Entry` 채널에서 값을 읽어 JSON으로 마샬링한 후 write하는 제네릭 어댑터를 작성할 것이다.

<CodeBlockWrapper>

```go
func EncodeFromChan[T any](input <-chan T, encode func(T) ([]byte, error), out io.Writer) <-chan error {
	ret := make(chan error, 1)
	go func() {
		defer close(ret)
		for entry := range input {
			data, err := encode(entry)
			if err != nil {
				ret <- err
				return
			}
			if _, err := out.Write(data); err != nil {
				if !errors.Is(err, io.EOF) {
					ret <- err
				}
				return
			}
		}
	}()
	return ret
}
```

</CodeBlockWrapper>

이 함수는 동기적으로 실행되며, `input` 채널에서 값을 읽어 `encode` 함수를 통해 마샬링한 후 `out`에 write한다.
이 때 에러가 발생하면 이를 채널에 전달하고, `input` 채널이 닫히면 함수를 종료한다. 또한 이 채널은 완료를 알리는 역할도 한다.

<br>

지금까지의 내용을 HTTP 핸들러에 적용해보자.

<CodeBlockWrapper>

```go
app.Get("/db", func(c *fiber.Ctx) error {
		data, err := st.Stream(c.Context(), store.Request{})
		if err != nil {
			fmt.Println(err)
			return c.SendStatus(500)
		}

		errCh := EncodeFromChan(data, func(entry store.Entry) ([]byte, error) {
			msg := store.Message{
				At:    entry.At,
				Value: entry.Value,
			}
			if entry.Error != nil {
				msg.Error = entry.Error.Error()
			}
			return json.Marshal(msg)
		}, c.Write)

		err = <-errCh
		if err != nil {
			fmt.Println("Encode error", err)
			return c.SendStatus(500)
		}
		return c.SendStatus(200)
	})
```

</CodeBlockWrapper>

이 핸들러는 몇 가지 문제점이 있다.
만약 API를 호출하는 클라이언트가 중간에 연결을 끊으면 컨텍스트가 취소되어 스트리밍이 중단될 것이다.

그리고 `Store`에서 발생한 에러가 아닌 encoder에서 발생한 에러는 HTTP 에러로 전달되지 않는다.
만약 중간에 encoder에서 에러가 발생하더라도 클라이언트는 200 OK를 받게 될 것이다.
좋은 방법은 중간에 프로세싱을 멈추고 에러를 로깅하는 것이다.

<br>

encoder를 만들었다면 decoder도 만들어볼 차례이다.
다음 함수는 메시지를 읽어 디코드하고 채널에 전달하는 제네릭 어댑터이다.

<CodeBlockWrapper>

```go
func DecodeToChan[T any](decode func(*T) error) (<-chan T, <-chan error) {
	ret := make(chan T)
	errCh := make(chan error, 1)
	go func() {
		defer close(ret)
		defer close(errCh)
		var entry T
		for {
			if err := decode(&entry); err != nil {
				if !errors.Is(err, io.EOF) {
					errCh <- err
				}
				return
			}
			ret <- entry
		}
	}()
	return ret, errCh
}
```

</CodeBlockWrapper>

이 decoder를 사용하여 앞서 작성하였던 API를 호출하는 클라이언트를 작성해보자.

<CodeBlockWrapper>

```go
resp, err := http.Get("http://localhost:3000/db")
if err != nil {
    panic(err)
}
defer resp.Body.Close()
decoder := json.NewDecoder(resp.Body)
entries, rcvErr := DecodeToChan(func(entry *store.Entry) error {
    var msg store.Message
    if err := decoder.Decode(&msg); err != nil {
        return err
    }
    entry.At = msg.At
    entry.Value = msg.Value
    if msg.Error != "" {
        entry.Error = fmt.Errorf(msg.Error)
    }

    return nil
})
```

</CodeBlockWrapper>

실행해보면 잘 동작하는 것을 확인할 수 있다.

좀 아쉬운 점이 있다면 HTTP는 스트리밍 데이터가 모두 모일 때까지 기다려야 한다는 점이다.
그렇다면 웹소켓을 사용하면 어떨까? 다음장 ㄱㄱ

<br><br>

## 다수 스트림 처리

---

여러 스트림에서 동시에 들어오고 나가는 데이터를 조정해야 하는 경우가 많다.
대표적인 예는 웹소켓 채팅방 서버이다.
표준 HTTP가 요청/응답으로 이루어져 있는 것에 반해, 웹소켓은 양방향 통신을 지원한다.

이번에는 여러 클라이언트의 웹소켓 연결을 관리하는 서버를 구현해보려 한다.
한 클라이언트가 메시지를 보내면 다른 모든 클라이언트에게 메시지를 전달하는 간단한 채팅 서버이다.

먼저 다음과 같은 메시지 구조체를 정의한다.

```go
type Message struct {
	Timestamp time.Time
	Message   string
	From      string
}
```

이후 클라이언트를 작성한다. 각 클라이언트는 웹소켓 서버에 접속하여 채팅한다.

<CodeBlockWrapper>

```go
func LaunchClient() {
	cli, err := websocket.Dial("ws://localhost:8080/chat", "http://localhost:8080")
	if err != nil {
		panic(err)
	}
	defer cli.Close()

	decoder := json.NewDecoder(cli)
	rcvCh, rcvErrCh := coder.DecodeToChan(func(msg *Message) error {
		return decoder.Decode(&msg)
	})
	sendCh := make(chan Message)
	sendErrCh := coder.EncodeFromChan(sendCh, func(msg Message) ([]byte, error) {
		return json.Marshal(msg)
	}, cli.Write)

	done := make(chan struct{})
	go func() {
		scanner := bufio.NewScanner(os.Stdin)
		for scanner.Scan() {
			text := scanner.Text()
			select {
			case <-done:
				return
			default:
			}
			sendCh <- Message{
				Message: text,
			}
		}
	}()

	for {
		select {
		case msg, ok := <-rcvCh:
			if !ok {
				close(done)
				return
			}
			fmt.Println(msg.From, msg.Timestamp.Format("15:04:05"), msg.Message)
		case <-rcvErrCh:
			return
		case <-sendErrCh:
			return
		}
	}
}
```

</CodeBlockWrapper>

클라이언트는 터미널로부터 텍스트를 입력받아 웹소켓 서버에 전달한다.
동시에 웹소켓 서버로부터 메시지를 수신하고, 이를 터미널에 출력하기 위해 이를 별도의 고루틴에서 처리한다.

<br>

서버는 한 클라이언트로부터 받은 메시지를 다른 모든 클라이언트에 뿌려야 하기 때문에 좀 더 복잡하다.
게다가 연결된 클라이언트를 계속 추적하고 악의적인 클라이언트를 걸러내야 한다.

이를 위해서는 각 클라이언트에 대응되는 고루틴이 접근할 수 있는 뮤텍스 기반의 공유 데이터 구조체가 필요하다.
대신 활성 연결을 추적하는 컨트롤러 고루틴을 사용해볼 것이다.
각각 연결이 생성되었음을 알리는 `connectCh` 채널, 연결이 종료되었음을 알리는 `disconnectCh` 채널, 그리고 메시지를 전달하는 `dispatchCh` 채널을 사용한다.

<CodeBlockWrapper>

```go
dispatch := make(chan message.Message)
connectCh := make(chan chan message.Message)
disconnectCh := make(chan chan message.Message)
go func() {
    clients := make(map[chan message.Message]struct{})
    for {
        select {
        case c := <-connectCh:
            clients[c] = struct{}{}
        case c := <-disconnectCh:
            delete(clients, c)
        case msg := <-dispatch:
            for c := range clients {
                select {
                case c <- msg:
                default:
                    close(c)
                }
            }
        }
    }
}()
```

</CodeBlockWrapper>

다음으로 웹소켓 핸들러를 작성한다.

<CodeBlockWrapper>

```go
app := fiber.New()
app.Get("/ws", websocket.New(func(c *websocket.Conn) {
    client := c.RemoteAddr().String()
    inputCh := make(chan message.Message, 10)
    connectCh <- inputCh
    defer func() {
        disconnectCh <- inputCh
    }()

    decoder := json.NewDecoder(c.NetConn())
    data, decodeErrCh := coder.DecodeToChan(func(msg *message.Message) error {
        err := decoder.Decode(msg)
        msg.From = client
        return err
    })
    encodeErrCh := coder.EncodeFromChan(inputCh, func(msg message.Message) ([]byte, error) {
        return json.Marshal(msg)
    }, c.NetConn().Write)

    for {
        select {
        case msg, ok := <-data:
            if !ok {
                return
            } else {
                dispatch <- msg
            }
        case <-decodeErrCh:
            return
        case <-encodeErrCh:
            return
        }
    }
}))

fmt.Println("Server is running at :8080")
err := app.Listen(":8080")
if err != nil {
    panic(err)
}
```

</CodeBlockWrapper>

Fiber에도 웹소켓 핸들러가 있어서 이를 사용했다.

새로운 연결이 생성되면 `inputCh` 채널이 생성되고, 이를 `connectCh` 채널에 전달한다.
`inputCh`은 버퍼의 크기를 10으로 설정했는데, 이는 웹소켓 연결을 끊지 않고 값을 읽지 않는 경우 해당 연결을 중단시키기 위함이다.
`data` 채널이 닫히면 해당 클라이언트에 대한 핸들러 고루틴이 종료될 것이다.

눈여겨봐야 할 부분은 공유 메모리 아키텍처 대신 메시지 패싱 아키텍처로 구현한 것이다.
캐시를 사용하는 경우에는 공유 메모리 아키텍처가 더 적합하지만, 이 경우와 같이 여러 고루틴간의 동기화가 필요한 경우에는 메시지 패싱 아키텍처가 더 적합하다.

<br><br>

## References

---

<center>

[![Effective Concurrency in Go](https://learning.oreilly.com/covers/urn:orm:book:9781804619070/400w/)](https://learning.oreilly.com/library/view/effective-concurrency-in/9781804619070/) <br>
[Jon Bodner, 『Learning Go』, O'Reilly Media, Inc.](https://learning.oreilly.com/library/view/effective-concurrency-in/9781804619070/)

</center>
