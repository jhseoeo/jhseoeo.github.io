---
title: '팩토리, 레포지토리, 서비스'
date: 2023-07-16
excerpt: Factories, Repositories, and Services
categories:
  - 'Golang'
  - 'Backend'
  - 'Architecture'
  - 'Domain Driven Design'
coverImage: '/post_img/Backend/Architecture/DDD/cover.png'
coverWidth: 16
coverHeight: 9
indexed: false
exposed: true
---

<script>
	import CodeBlockWrapper from '$lib/components/CodeBlockWrapper.svelte';
	import Image from '$lib/components/Image.svelte';
</script>

## 팩토리 패턴

---

팩토리 패턴은 주로 객체지향 프로그래밍에서 찾아볼 수 있으며, 다른 오브젝트를 생성하는 주된 책임을 가지고 있는 개체로 정의된다.
객체의 기본 속성을 설정하는 데 유용하며, 일반적으로 객체의 생성 외에 다른 목적을 가지면 안된다.

Go는 객체지향 언어가 아님에도 팩토리 패턴은 꽤 유용하다.
아래 예제는 팩토리 패턴의 간단한 예제이다.

<CodeBlockWrapper>

```go
package chapter4

import (
	"errors"
	"fmt"
	"log"
)

type Car interface {
	BeepBeep()
}

type BMW struct {
	heatedSeatSubscriptionEnabled bool
}

func (B BMW) BeepBeep() {
	// TODO: implement me
	panic("implement me")
}

type Tesla struct {
	autopilotEnabled bool
}

func (T Tesla) BeepBeep() {
	// TODO: implement me
	panic("implement me")
}

func BuildCar(carType string) (Car, error) {
	switch carType {
	case "bmw":
		return BMW{heatedSeatSubscriptionEnabled: true}, nil
	case "tesla":
		return Tesla{autopilotEnabled: true}, nil
	default:
		return nil, errors.New("unknown car type")
	}
}

func main() {
	myCar, err := BuildCar("tesla")
	if err != nil {
		log.Fatal(err)
	}
	// TODO: do something with myCar
	fmt.Printf("%v is my car\n", myCar)
}
```

</CodeBlockWrapper>

위 예제에서는 `Car` 인터페이스를 충족하는 `BMW`와 `Tesla` 구조체를 정의하였고, `Car` 오브젝트의 필드값을 초기화하여 반환하는 팩토리 함수 `BuildCar`를 정의하였다.
또한, 자동차의 타입이 유효하지 않을 경우 에러를 반환한다.

팩토리 패턴은 복잡한 구조체의 생성을 표준화하는 좋은 방법이며, 애플리케이션이 복잡해질 수록 유용하다.
또한 팩토리를 통해 Encapsulation을 달성할 수 있고, 객체 생성시 비즈니스 불변성을 적용하여 도메인 모델을 단순화할 수 있다.

가령 미용실 예약 시스템을 구현한다고 가정해보자.
누군가 업무 시간이 지나고 예약하려 하는 경우, 다음과 같이 팩토리 함수를 통해 예외를 발생시킬 수 있다.

<CodeBlockWrapper>

```go
package chapter4

import (
"errors"
"github.com/google/uuid"
"time"
)

type Booking struct {
id uuid.UUID
userId uuid.UUID
from time.Time
to time.Time
hairDresserId uuid.UUID
}

func CreateBooking(from time.Time, to time.Time, userId uuid.UUID, hairDresserId uuid.UUID) (\*Booking, error) {
closingTime, \_ := time.Parse(time.Kitchen, "17:00pm")

    if from.After(closingTime) {
    	return nil, errors.New("no appointments after closing time")
    } else {
    	return &Booking{
    		hairDresserId: hairDresserId,
    		id:            uuid.New(),
    		userId:        userId,
    		from:          from,
    		to:            to,
    	}, nil
    }

}

```

</CodeBlockWrapper>

위 예제는 엔티티를 생성하는 팩토리 함수를 보여주며, 엔티티의 식별자는 팩토리에서 생성된다.

엔티티 팩토리에 대헤 조금 더 살펴보자.

<br>

### 엔티티 팩토리

앞선 포스트에서 설명하였듯 엔티티에는 식별자가 있고, 인스턴스화하기 위한 최소한의 요구사항이 존재한다.
따라서 팩토리를 만들 때 이러한 요구사항을 충족시켜야 하며, 다른 속성을 설정하려는 경우 이를 위한 다른 함수를 제공할 수 있다.

엔티티 팩토리 함수를 만들 때는 팩토리 함수가 식별자를 생성할지, 아니면 파라미터로 받을지 결정해야 한다.
둘 다 가능하지만, 되도록이면 식별자를 팩토리 함수에서 생성하는 것이 더 좋은 방법이다.

<br><br>

## 레포지토리 패턴

---

레포지토리 패턴은 데이터 저장소에 접근하기 위해 필요한 코드의 일부이다.
데이터 저장소는 파일 시스템, 메모리, 스프레드시트, S3 등이 있을 수 있으나, 대부분의 프로젝트에서는 데이터베이스에 해당한다.

레포지토리 계층을 사용함으로써 데이터에 액세스하는 코드를 중앙화하여 관리할 수 있고, 특정 데이터베이스에 코드가 종속되지 않도록 할 수 있다.
예를 들면 한 클라우드에서 다른 클라우드로 마이그레이션하는 경우 데이터베이스 설정이 약간 달라질 수 있다. 이를테면 한 MySQL에서 NoSQL로 이동하는 경우이다.
이 경우 시스템의 일부분만, 즉 레포지토리 계층만 다시 설계하면 된다.

일부 개발자는 다른 채널(CQRS: Command Query Responsibility Segregation 등)을 통해 데이터베이스에 쿼리를 보내는 것을 선호한다.
이는 쿼리가 데이터베이스의 상태를 변경하면 안되기 때문에 작동하지만, 이제 막 시작하는 경우라면 데이터베이스와의 모든 상호작용이 레포지토리 계층에서 일어나게 하는 것이 좋다.

레포지토리 계층에서 테이블 하나당 한 개의 구조체를 만드는 경우가 많은데, 그보단 애그리거트당 하나의 구조체를 만드는 것이 더 좋다. 다음 그림을 보자.

### 그림

위 그림에서 데이터베이스 테이블과 레포지토리 계층의 명확한 차이를 볼 수 있다. 주목할 부분은 레포지토리 계층에서 한 개 이상의 테이블을 사용할 수 있다는 것이다.
또한, 도메인 레이어는 레포지토리 레이어와 디커플링되어 있다.
DDD를 사용한다면 위와 같은 시스템을 구축하는 것이 좋다.

<br>

이전 장의 예약 시스템 예제에서 계속하여, 미용실 예약 정보를 데이터베이스에 저장하려 한다. 먼저 레포지토리 계층에 해당하는 인터페이스를 정의한다.

```go
package chapter4

import "context"

type BookingRepository interface {
	SaveBooking(ctx context.Context, booking Booking) error
	DeleteBooking(ctx context.Context, booking Booking) error
}
```

이 인터페이스는 `Booking` 팩토리 및 서비스 계층과 같은 계층에 정의되었는데, 그 이유는 다음 장에서 설명한다.

PostgreSQL 데이터베이스를 위한 간단한 레포지토리 레이어를 구현해보자.

<CodeBlockWrapper>

```go
package chapter4

import (
	"context"
	"fmt"
	"github.com/jackc/pgx/v4"
)

type BookingRepository interface {
	SaveBooking(ctx context.Context, booking Booking) error
	DeleteBooking(ctx context.Context, booking Booking) error
}

type PostgresRepository struct {
	connPool *pgx.Conn
}

func NewPostgresRepository(ctx context.Context, dbConnString string) (*PostgresRepository, error) {
	conn, err := pgx.Connect(ctx, dbConnString)
	if err != nil {
		return nil, fmt.Errorf("failed to connect to database: %w", err)
	}
	defer conn.Close(ctx)
	return &PostgresRepository{connPool: conn}, nil
}

func (p PostgresRepository) SaveBooking(ctx context.Context, booking Booking) error {
	_, err := p.connPool.Exec(
		ctx,
		"INSERT INTO bookings (id, from, to, hair_dresser_id) VALUES ($1, $2, $3, $4)",
		booking.id.String(),
		booking.from.String(),
		booking.to.String(),
		booking.hairDresserId.String(),
	)

	if err != nil {
		return fmt.Errorf("failed to save booking: %w", err)
	}
	return nil
}

func (p PostgresRepository) DeleteBooking(ctx context.Context, booking Booking) error {
	_, err := p.connPool.Exec(
		ctx,
		"DELETE FROM bookings WHERE id = $1",
		booking.id,
	)

	if err != nil {
		return fmt.Errorf("failed to delete booking: %w", err)
	}
	return nil
}
```

</CodeBlockWrapper>

코드에서 볼 수 있듯, 데이터베이스와 상호작용하는 것은 꽤 간단하며, 도메인 로직이 들어가지 않는다.
도메인 로직은 애플리케이션 서비스 계층에 들어가며, 애플리케이션 서비스 계층은 다음 장에서 다룬다.

<br><br>

## 서비스 계층

---

DDD에서 코드를 조직화하기 위해 몇 가지 종류의 서비스를 사용한다.
각각 애플리케이션 서비스, 도메인 서비스, 인프라스트럭처 서비스이다.

<br>

### 도메인 서비스

도메인 서비스는 도메인 내에서 특정 작업을 수행하는 stateless한 연산이다.
엔티티 혹은 밸류 오브젝트로 모델링하는 좋은 방법을 찾을 수 없는 프로세스가 있을 때가 있는데, 이 경우 도메인 서비스를 사용하면 좋다

도메인 서비스의 규칙을 정의하기는 좀 애매한 감이 있지만, 주의해야 할 점이 있다.

- 작성되는 코드는 한 도메인 내에서 중요한 비즈니스 로직을 수행해야 한다.
- 한 도메인 객체를 다른 도메인 객체로 변환한다.
- 값을 계산하기 위해 두 개 이상의 도메인 객체의 속성을 사용한다.

서비스는 DDD의 다른 모든 요소들과 마찬가지로 제한된 컨텍스트 안에서 유비쿼터스 언어를 통해 표현되어야 한다.

서비스가 유용하게 쓰일 수 있는 예제를 살펴보자. 엔티티 내에 이런 코드가 있다고 가정해보자.

<CodeBlockWrapper>

```go
package chapter4

import "github.com/google/uuid"

type Product struct {
	Id             uuid.UUID
	InStock        bool
	InSomeonesCart bool
}

func (p Product) CanBeBought() bool {
	return p.InStock && !p.InSomeonesCart
}

type ShoppingCart struct {
	Id          uuid.UUID
	Products    []Product
	IsFull      bool
	MaxCartSize int
}

func (s *ShoppingCart) AddToCard(p Product) bool {
	if s.IsFull {
		return false
	}
	if p.CanBeBought() {
		s.Products = append(s.Products, p)
		return true
	}
	if s.MaxCartSize == len(s.Products) {
		s.IsFull = true
	}
	return true
}
```

</CodeBlockWrapper>

괜찮아 보이는 코드지만 문제가 있다.
`ShoppingCart`의 구현에서 다른 엔티티를 참조하고 있고, 실제로 `ShoppingCart`에 속하지 않는 비즈니스 로직이 포함되어 있다.
이런 문제를 해결하기 위해 도메인 서비스를 사용할 수 있다.

<CodeBlockWrapper>

```go
package chapter4

import "errors"

type CheckOutService struct {
	shoppingCart *ShoppingCart
}

func NewCheckOutService(shoppingCart *ShoppingCart) *CheckOutService {
	return &CheckOutService{shoppingCart: shoppingCart}
}

func (c *CheckOutService) AddProductToCart(p *Product) error {
	if c.shoppingCart.IsFull {
		return errors.New("cannot add product to full cart")
	}
	if p.CanBeBought() {
		c.shoppingCart.Products = append(c.shoppingCart.Products, *p)
		return nil
	}
	if c.shoppingCart.MaxCartSize == len(c.shoppingCart.Products) {
		c.shoppingCart.IsFull = true
	}

	return nil
}
```

</CodeBlockWrapper>

두 엔티티에 모두 접근할 수 있는 도메인 로직이 도메인 서비스에 작성되었다.
이를 통해, `CheckOutService`에서 더 많은 엔티티를 참조하고자 할 때 더 유용해질 것이다.
단일 도메인 서비스에 이러한 로직이 있기 때문에, 다른 클라이언트에서 우리의 동작을 구현하려는 경우 이 서비스를 사용할 수 있으며, 비즈니스 불변성이 유지된다.

도메인 서비스는 stateless하게 도메인 로직을 구성해야 하는 경우에 유용하다.
하지만 stateful한 로직을 구성해야 하는 경우에는 애플리케이션 서비스를 사용해야 한다.

<br>

### 애플리케이션 서비스

애플리케이션 서비스는 다른 서비스 및 레포지토리를 구성하는 데 사용되며, 여러 모달 사이에서 트랜잭션을 관리한다.
다만 도메인 로직은 애플리케이션 서비스가 아니라 도메인 서비스에 작성되어야 한다.

어플리케이션 서비스는 보통 그렇게 길지 않다. 일반적으로 트랜잭션 등 조정을 위해 사용되며, 다른 로직은 어플리케이션 레이어 밑으로 내려가야 한다. 또한 보한 문제를 해결하기도 한다.

예약 예제를 통해 애플리케이션 서비스를 살펴보자.

<CodeBlockWrapper>

```go
package chapter4

import (
	"context"
	"errors"
	"fmt"
	"github.com/jhseoeo/Golang-DDD/chapter2"
)

type accountKey = int

const accountCtxKey = accountKey(1)

type BookingDomainService interface {
	CreateBooking(ctx context.Context, booking Booking) error
}

type BookingAppService struct {
	bookingRepo          BookingRepository
	bookingDomainService BookingDomainService
}

func NewBookingAppService(bookingRepo BookingRepository, bookingDomainService BookingDomainService) *BookingAppService {
	return &BookingAppService{
		bookingRepo:          bookingRepo,
		bookingDomainService: bookingDomainService,
	}
}

func (b *BookingAppService) CreateBooking(ctx context.Context, booking Booking) error {
	u, ok := ctx.Value(accountCtxKey).(*chapter2.Customer)
	if !ok {
		return errors.New("invalid customer")
	}
	if u.UserID() != booking.userId.String() {
		return errors.New("cannot create booking for other users")
	}

	err := b.bookingDomainService.CreateBooking(ctx, booking)
	if err != nil {
		return fmt.Errorf("could not create booking: %w", err)
	}
	err = b.bookingRepo.SaveBooking(ctx, booking)
	if err != nil {
		return fmt.Errorf("could not save bookign: %w", err)
	}

	return nil
}
```

</CodeBlockWrapper>

위 코드에서는 기본적인 인증을 수행하고, 도메인 레이어와 레포지토리 레이어로 애플리케이션 서비스를 구성한다.
이런 예제의 경우에서라면 애플리케이션 서비스가 여러 도메인에 걸쳐 있지 않기 때문에 영속성을 도메인 서비스에서 건드리는 것도 괜찮다.
이 코드가 실행되면 새로운 예약이 생성되고 저장된다.

UI는 여러 도메인 서비스를 통해 구성될 필요가 있는데, 이런 측면에서 애플리케이션 서비스가 잘 어울린다.

<br>

대부분의 최신 웹 앱은 결제, 이메인 전송, 유저 행동 추적 등의 역할을 수행한다.
이러한 기능들은 도메인에 포함되지는 않지만 여전히 애플리케이션에 포함되어야 한다.
이러한 경우 인프라스트럭처 레이어를 사용하여, 애플리케이션 서비스나 도메인 서비스에 추가할 수 있다.

가령 이메일 인프라스트럭처 서비스는 다음과 같이 구현될 수 있다.

<CodeBlockWrapper>

```go
package chapter4

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"net/http"
)

type EmailSender interface {
	SendEmail(ctx context.Context, to string, title string, body string) error
}

const emailUrl = "https://maindrillapp.com/api/1.0/messages/send\""

type MailChimp struct {
	apiKey     string
	from       string
	httpClient http.Client
}

type MailChimpReqBody struct {
	Key     string `json:"key"`
	Message struct {
		FromEmail string `json:"from_email"`
		Subject   string `json:"subject"`
		Text      string `json:"text"`
		To        []struct {
			Email string `json:"email"`
			Type  string `json:"type"`
		} `json:"to"`
	} `json:"message"`
}

func NewMailChimp(apiKey string, from string, httpClient http.Client) *MailChimp {
	return &MailChimp{
		apiKey:     apiKey,
		from:       from,
		httpClient: httpClient,
	}
}
func (m MailChimp) SendEmail(ctx context.Context, to string, title string, body string) error {
	mailBody := MailChimpReqBody{
		Key: m.apiKey,
		Message: struct {
			FromEmail string `json:"from_email"`
			Subject   string `json:"subject"`
			Text      string `json:"text"`
			To        []struct {
				Email string `json:"email"`
				Type  string `json:"type"`
			} `json:"to"`
		}{
			FromEmail: m.from,
			Subject:   title,
			Text:      body,
			To: []struct {
				Email string `json:"email"`
				Type  string `json:"type"`
			}{{Email: to, Type: "to"}},
		},
	}

	payload, err := json.Marshal(mailBody)
	if err != nil {
		return fmt.Errorf("failed to marshall body: %w", err)
	}
	req, err := http.NewRequest(http.MethodPost, emailUrl, bytes.NewReader(payload))
	if err != nil {
		return fmt.Errorf("failed to create request: %w", err)
	}
	_, err = m.httpClient.Do(req)
	if err != nil {
		return fmt.Errorf("failed to send email: %w", err)
	}
	return nil
}
```

</CodeBlockWrapper>

이와 같이 인프라스트럭처 레이어를 구성하면, 애플리케이션 서비스에서 다음과 같이 사용할 수 있다.

<CodeBlockWrapper>

```go
type BookingAppService struct {
	bookingRepo          BookingRepository
	bookingDomainService BookingDomainService
	emailService         EmailSender
}

...


func (b *BookingAppService) CreateBooking(ctx context.Context, booking Booking) error {
	u, ok := ctx.Value(accountCtxKey).(*chapter2.Customer)
	if !ok {
		return errors.New("invalid customer")
	}
	if u.UserID() != booking.userId.String() {
		return errors.New("cannot create booking for other users")
	}

	err := b.bookingDomainService.CreateBooking(ctx, booking)
	if err != nil {
		return fmt.Errorf("could not create booking: %w", err)
	}
	err = b.bookingRepo.SaveBooking(ctx, booking)
	if err != nil {
		return fmt.Errorf("could not save bookign: %w", err)
	}
	err = b.emailService.SendEmail(ctx, ...)
	if err != nil {
		...
	}

	return nil
}
```

</CodeBlockWrapper>

이제 애플리케이션 서비스의 `CreateBooking` 함수가 호출되면 예약을 생성하고, 데이터베이스에 저장하는 것 뿐만 아니라 이메일을 유저에게 보낼 것이다.

<br><br>

## References

---

<center>

[
<Image alt="Domain-Driven Design with Golang Cover" src="https://learning.oreilly.com/covers/urn:orm:book:9781804613450/400w/"/>
](https://learning.oreilly.com/library/view/domain-driven-design-with/9781804613450/) <br>
[Matthew Boyle, Domain-Driven Design with Golang』, O'Reilly Media, Inc.](https://learning.oreilly.com/library/view/domain-driven-design-with/9781804613450/)

</center>
