---
title: '모놀리식 애플리케이션에 DDD 적용하기'
date: 2023-07-20
excerpt: Applying DDD to a Monolithic Application
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

이전 포스트까지는 주로 DDD의 이론적인 부분에 대해 다루었다면, 이번 포스트부터는 실제 애플리케이션에 DDD를 적용하는 방법에 대해 다룰 것이다.

<br><br>

## 모놀리식 애플리케이션이란?

---

모놀리식 애플리케이션(Monolithic Application)은 시스템의 모든 컴포넌츠가 하나의 단위로 묶여있는 애플리케이션을 말한다.
가령 UI, 도메인, 인프라스트럭처 서비스가 동일한 배포 단위에 합쳐져 있다면, 그 애플리케이션은 모놀리식 애플리케이션이라 할 수 있다.

모놀리식 애플리케이션은 몇 가지 이유에서 인기가 높다.

- 모든 코드와 우려 사항이 한 곳에 존재하므로 개발이 쉽다. 분산 시스템에서 RPC를 사용할 때 고려해야 하는 사항이 없다.
- 배포할 항목이 하나이기 때문에 배포가 간단하다.
- 서비스 간 통신이 인메모리에서 이루어지기 때문에 성능이 좋다.

하지만, 모놀리식 애플리케이션의 복잡도가 증가하면서, 다음과 같은 단점들이 드러나기 시작했다.

- 애플리케이션의 스타트업 시간이 길어진다.
- 애플리케이션의 확장(스케일링)이 어렵다. 위의 스타트업 시간이 길어진다는 점과 더해져, 애플리케이션의 인스턴스를 늘리는 것이 어렵다. 따라서 수직적 확장은 가능하지만, 수평적 확장에는 실질적 어려움이 있다.
- 지속적 배포(Continious Deployment, CD)가 느려진다. 애플리케이션의 일부분만 수정하더라도 전체 애플리케이션을 모두 배포해야 하며, 이는 애플리케이션이 복잡해질수록 더욱 느려진다.
- 특정 기술 스택에 귀속된다. 더 적합한 기술 스택이 나오거나 다른 기술 스택의 전문가이더라도 사용하던 기술 스택을 사용해야 한다. 만약 새로운 언어로 애플리케이션을 작성하고 싶다면, 애플리케이션 전체를 다시 작성해야 한다.
- 변경 사항을 적용하기가 어렵고 모듈성이 떨어진다. 이는 DDD를 적용함으로써 해결할 수 있다.

본 포스트에서는 DDD를 통해 간단한 모놀리식 애플리케이션을 작성해볼 것이다.

<br><br>

## 애플리케이션의 요구사항

가상의 회사인 *CoffeeCo*는 국제 커피 체인점이다. *CoffeeCo*에 대한 비즈니스 도메인은 다음과 같다.

이 회사는 작년에만 50개의 매장을 새로 내는 등 급속한 성장을 이루었다.
각 매장은 커피 및 커피 관련 액세서리와 매장별 음료를 판매한다.
매장은 개별적인 가격을 가지고 있지만, 국가적인 마케팅 캠페인이 종종 운영되기도 하며, 이는 품목의 가격에 영향을 미친다.

CoffeeCo는 음료를 10회 구매할 때마다 1회의 무료 음료를 제공하는 *CoffeeBux*라는 로열티 프로그램을 시작하였다.
모든 매장에서 음료를 구매하거나 교환할 수 있다.

CoffeeCo는 온라인 매장을 출시하는 것을 고려하고 있으며, 구매자가 매월 무제한 커피를 받을 수 있는 월간 구독과 다른 음료에 대한 할인을 고려하고 있다.

<br>

시스템을 개발할 때 다음과 같은 유비쿼터스 언어와 정의를 따라야 한다.

- **Coffee Lovers**: CoffeeCo의 고객
- **CoffeeBux**: CoffeeCo의 멤버십 프로그램으로, Coffee Lovers가 음료 또는 악세서리를 구매할 때마다 CoffeeBux 포인트가 1점씩 쌓임.
- **Tiny, medium, and massive**: 음료의 크기를 오름차순으로 나타냄. 일부 음료는 사이즈가 하나로 고정되어 있음.

도메인 모델링 과정에서, 다음과 같은 도메인 객체를 식별할 수 있다.

- Store
- Products
- Membership(원문에서는 Loyalty)
- Subscription

또한, 시스템의 MVP(Minimum Viable Product)는 다음과 같은 기능을 갖추어야 한다.

- CoffeeBux를 이용해서 음료 또는 악세서리를 구매할 수 있어야 한다.
- 신용카드 및 체크카드를 이용해서 음료 또는 악세서리를 구매할 수 있어야 한다.
- 현금을 이용해서 음료 또는 악세서리를 구매할 수 있어야 한다.
- 구매시마다 CoffeeBux 포인트가 쌓인다.
- 매장별 할인 캠페인
- 현재는 음료는 한 사이즈만 존재

비즈니스 도메인에 대한 사항을 모두 파악했으므로, 이제 DDD를 통해 애플리케이션을 작성해보자.

<br><br>

## 프로젝트 시작

---

먼저, 다음과 같은 패키지 구조를 갖는 프로젝트를 생성한다.

```bash
$ tree
.
├── go.mod
└── internal
```

Golang에서 `internal` 폴더는 특수한 의미를 가지며, 다른 프로젝트에서 임포트할 수 없다.
따라서 공개 API에 노출되지 않아야 하는 도메인 코드를 작성하기에 적합하며, 모든 도메인 코드는 `internal` 폴더에 작성할 것이다.

### 도메인 모델 작성

가장 먼저 작성해야 할 것은 **Coffee Lover** 모델이다. Coffee Lover는 가장 확실한 **엔티티**이며, 다른 도메인 객체와의 상호작용에서 중심적인 역할을 수행하기 때문이다.

`internal` 폴더에 `coffeelover.go`파일을 생성하여, Coffee Lover 모델을 작성한다.

```go
package coffeeco

import "github.com/google/uuid"

type CoffeeLover struct {
	ID           uuid.UUID
	FirstName    string
	LastName     string
	EmailAddress string
}
```

`CoffeeLover` 구조체에 `FirstName`이나 `EmailAddress`와 같은 필드가 일부 추가되었는데, 이는 Coffee Lover에 대해 저장할 필요가 있는 추가적인 정보이다. 가령 도메인 전문가나 관계자와의 주기적인 회의를 통해 이러한 정보를 파악할 수 있다.

<br>

이번에는 매장 도메인을 작성해볼 것이다. `internal` 폴더 안에 `store` 폴더를 만들고, 그 아래 `store.go` 파일을 생성한다. `store/store.go` 파일에는 다음과 같은 코드를 작성한다.

```go
package store

import "github.com/google/uuid"

type Store struct {
	ID       uuid.UUID
	Location string
}
```

이와 같이 매장은 ID를 가지는 엔티티가 된다.

<br>

각 매장에서는 커피, 커피에 관련된 악세사리, 매장별 음료를 팔고, 따라서 우리는 상품을 정의해야 한다.

여기까지는 비교적 간단한 모델링이었지만, 상품을 정의하는 것은 꽤 까다롭다. 상품은 엔티티일까, 아니면 밸류 오브젝트일까?
결론만 말하자면 상품은 밸류 오브젝트로 두는 것이 좋다. 왜냐하면,

- 각 상품은 불변성을 가진다고 볼 수 있으며
- 상품은 도매인 개념을 측정, 설명, 수량화하며,
- 값만으로 동일한 타입의 다른 객체와 구분할 수 있으며,
- 엔티티인지 밸류 오브젝트인지 애매한 것들은 일단 밸류 오브젝트로 처리하고 나중에 엔티티로 변경하는 것이 더 안전한 선택이기 때문이다.

`internal` 폴더 안에 `product.go` 파일을 생성하고, 다음과 같이 작성한다.

```go
package coffeeco

type Money = int

type Product struct {
	ItemName  string
	BasePrice Money
}
```

<br>

이제 매장 도메인으로 다시 돌아가서, 매장에서 판매하는 상품을 정의해야 한다.
`store/store.go` 파일을 다음과 같이 수정한다.

```go
package store

import (
	"github.com/google/uuid"
	coffeeco "github.com/jhseoeo/Golang-DDD/chapter5/internal"
)

type Store struct {
	ID             uuid.UUID
	Location       string
	ProductForSale coffeeco.Product
}
```

<br>

사용자가 상품을 구매할 때 카드를 사용하는지 혹은 현금을 사용하는지, 카드를 사용했다면 어떤 카드인지에 대한 정보를 표현할 수 있어야 한다.

`payment` 도메인을 정의할 것이다. `internal` 폴더 안에 `payment` 폴더를 만들고, 그 아래 `means.go` 파일을 생성한다. `payment/means.go` 파일에는 다음과 같은 코드를 작성한다.

```go
package payment

type Means string

const (
	MEANS_CARD      = "card"
	MEANS_CASH      = "cash"
	MEANS_COFFEEBUX = "coffeebux"
)

type CardDetails struct {
	cardToken string
}
```

지불 수단을 나타내기 위한 타입인 `Means`는 string에 대한 alias이다.
또한 카드에 대한 정보를 나타내는 `CardDetails` 타입을 정의하였다. 실제 카드 결제가 동작하는 방식과는 다소 거리가 있으나, 본 예제에서는 `cardToken`을 사용하여 결제를 처리한다고 가정한다.

또한 현금 및 CoffeeBux 결제에 관련된 상수를 정의하였는데, 이는 결제 수단을 나타내는 `Means` 타입의 값으로 사용된다.

<br>

다음으로는 상품의 구매에 관련된 도메인을 작성해야 한다.
coffee lover가 상품을 구매할 때 필요한 정보에 대해 잘 이해하고 있는지, 그리고 알아야 할 추가적인 도메인 정보는 없는지에 대해 도메인 전문가와 대화해야 할 타이밍이 아마 이쯤이 될 것이다.

`internal` 폴더 안에 `purchase` 폴더를 만들고, 그 아래 `purchase.go` 파일을 생성한다. `purchase/purchase.go` 파일에는 다음과 같은 코드를 작성한다.

```go
package purchase

import (
	"github.com/google/uuid"
	coffeeco "github.com/jhseoeo/Golang-DDD/chapter5/internal"
	"github.com/jhseoeo/Golang-DDD/chapter5/internal/payment"
	"github.com/jhseoeo/Golang-DDD/chapter5/internal/store"
	"time"
)

type Purchase struct {
	id                 uuid.UUID
	Store              store.Store
	ProductsToPurchase []coffeeco.Product
	total              coffeeco.Money
	PaymentMeans       payment.Means
	timeOfPurchase     time.Time
	cardToken          *string
}
```

`Purchase`는 ID를 가지는 엔티티여야 한다. 만약 사용자가 구매를 취소하고 싶을 때, ID를 통해 구매를 취소할 수 있어야 하기 때문이다.

<br>

이제 멤버십에 관한 도메인을 정의할 차례이다. `internal` 폴더 안에 `membership` 폴더를 만들고, 그 아래 `coffeebux.go` 파일을 생성한다. `membership/coffeebux.go` 파일에는 다음과 같은 코드를 작성한다.

```go
package membership

import (
	"github.com/google/uuid"
	coffeeco "github.com/jhseoeo/Golang-DDD/chapter5/internal"
	"github.com/jhseoeo/Golang-DDD/chapter5/internal/store"
)

type CoffeeBux struct {
	ID                                    uuid.UUID
	store                                 store.Store
	coffeeLover                           coffeeco.CoffeeLover
	FreeDrinksAvailable                   int
	RemainingDrinkPurchasesUntilFreeDrink int
}
```

<br>

여기까지, 모든 도메인 모델이 정의되었다. 지금까지의 작업이 반영된 패키지 구조는 다음과 같다.

```bash
.
├── go.mod
├── go.sum
└── internal
    ├── coffeelover.go
    ├── membership
    │   └── coffeebux.go
    ├── payment
    │   └── means.go
    ├── product.go
    ├── purchase
    │   └── purchase.go
    └── store
        └── store.go
```

<br><br>

### 도메인 서비스 작성

이제 도메인 서비스를 작성할 차례이다. `Purchase`가 서비스 로직이 작성되기에 가장 적절하다고 볼 수 있는데, 이유는 다음과 같다.

- 도매인 내의 중요한 비즈니스 로직이 수행될 것이며,
- 일부 값을 계산해야 하며,
- 레포지토리 레이어에 접근해야 하기 때문이다.

프로그램을 방어적으로 작성하려면 서비스를 얇게 유지하는 것이 좋고, 따라서 로직 코드를 최대한 도메인 객체에까지 내리는게 좋다. `purchase/purchase.go`를 열어, 다음과 같이 각 상품의 가격을 합하여 총 가격을 계산하고, 구매건에 대한 ID를 생성하는 메소드를 추가한다.

<CodeBlockWrapper>

```go
func (p *Purchase) validateAndEnrich() error {
	if len(p.ProductsToPurchase) == 0 {
		return errors.New("puchase must have at least one product")
	}

    p.total = 0
    for _, v := range p.ProductsToPurchase {
    	p.total += v.BasePrice
    }

    if p.total == 0 {
    	return errors.New("total price must be greater than 0")
    }

    p.id = uuid.New()
    p.timeOfPurchase = time.Now()
    return nil

}
```

</CodeBlockWrapper>

이어서, `purchase/purchase.go`에 서비스를 계속 작성한다.

<CodeBlockWrapper>

```go
type CardChargeService interface {
	ChargeCard(ctx context.Context, amount coffeeco.Money, cardToken string) error
}

type Service struct {
	cardService  CardChargeService
	purchaseRepo Repository
}

func (s Service) CompletePurchase(ctx context.Context, purchase *Purchase) error {
	err := purchase.validateAndEnrich()
	if err != nil {
		return err
	}

	switch purchase.PaymentMeans {
	case payment.MEANS_CARD:
		err := s.cardService.ChargeCard(ctx, purchase.total, *purchase.cardToken)
		if err != nil {
			return errors.New("card charge is failed")
		}

	case payment.MEANS_CASH:
		// do nothing

	default:
		return errors.New("unknown payment means")
	}

	err = s.purchaseRepo.Store(ctx, *purchase)
	if err != nil {
		return errors.New("failed to store purchase")
	}

	return nil
}
```

</CodeBlockWrapper>

이 서비스는 `Purchase` 객체에 필요한 값을 추가하기 위해 `validateAndEnrich` 메소드를 호출한다. 이후, 결제 수단에 따라 결제를 처리하고, 결제가 성공적으로 이루어지면 `Purchase` 객체를 저장한다.

<br>

`purchase.validateAndEnrich()`를 호출하고 나서 결제 수단에 따라 처리해야 할 몇 가지 로직이 있다.
카드 결제의 경우 `CardService`를 통해 카드 결제를 처리하므로, `CardService` 인터페이스를 정의할 것이다.
이렇게 인터페이스로 정의하면 개발자 혹은 개발팀이 나뉘어져 있을 때, 정해진 인터페이스를 통해 서로간의 의존성을 줄이면서도 개발 속도를 높이며 원활한 협업이 가능해진다.

다음으로, 레포지토리 인터페이스를 정의할 것이다. `purchase` 디렉토리에 `repository.go` 파일을 생성하고, 다음과 같이 작성한다.

```go
package purchase

import "context"

type Repository interface {
	Store(ctx context.Context, purchase Purchase) error
}
```

이렇게 인터페이스를 정의하여 사용하는 것은 좋은 방법이다. 레포지토리의 구현체가 어떤 데이터베이스에 의존하든, 인터페이스만 충족시키면 되기 때문이다.

지금까지의 작업이 반영된 패키지 구조는 다음과 같다. 프로젝트의 대략적인 윤곽이 잡히고 있다!

```bash
.
├── go.mod
├── go.sum
└── internal
    ├── coffeelover.go
    ├── membership
    │   └── coffeebux.go
    ├── payment
    │   └── means.go
    ├── product.go
    ├── purchase
    │   ├── purchase.go
    │   └── repository.go
    └── store
        └── store.go
```

<br><br>

### 레포지토리 작성

MongoDB를 사용하여 레포지토리 계층을 구현할 것이다. 먼저, MongoDB Golang Driver를 설치한다.

```bash
go get go.mongodb.org/mongo-driver/mongo
```

그리고 `Purchase` 모델을 저장하기 위한 레포지토리를 작성할 것이므로, `purchase/repository.go` 파일에 다음과 같이 이어서 작성한다.

<CodeBlockWrapper>

```go
type MongoRepository struct {
	purchases *mongo.Collection
}

func NewMongoRepo(ctx context.Context, connectionString string) (*MongoRepository, error) {
	client, err := mongo.Connect(ctx, options.Client().ApplyURI(connectionString))
	if err != nil {
		return nil, fmt.Errorf("failed to create a mongo client: %w", err)
	}

	purchases := client.Database("coffeeco").Collection("purchases")

	return &MongoRepository{
		purchases: purchases,
	}, nil
}
```

</CodeBlockWrapper>

다음으로 이전에 선언한 `Repository` 인터페이스를 충족시키기 위해 `Store` 메소드를 작성한다.

```go
func (mr *MongoRepository) Store(ctx context.Context, purchase Purchase) error {
	mongoP := toMongoPurchase(purchase)
	_, err := mr.purchases.InsertOne(ctx, mongoP)
	if err != nil {
		return fmt.Errorf("failed to persist purchase: %w", err)
	}

	return nil
}
```

여기에서 `toMongoPurchase` 함수는 `Purchase` 객체를 `MongoPurchase` 객체로 변환하는 어댑터 함수이며,
`MongoPurchase`는 `Purchase` 객체를 저장하기 위해 MongoDB에 저장되는 도큐먼트의 구조체 타입이다.

계속해서 `purchase/repository.go`에 `mongoPurchase`와 `toMongoPurchase`를 구현한다.

<CodeBlockWrapper>

```go
type mongoPurchase struct {
	id                 uuid.UUID          `bson:"ID"`
	store              store.Store        `bson:"Store"`
	productsToPurchase []coffeeco.Product `bson:"product_purchased"`
	total              int64              `bson:"purchase_total"`
	paymentMeans       payment.Means      `bson:"payment_means"`
	timeOfPurchase     time.Time          `bson:"created_at"`
	cardToken          *string            `bson:"card_token"`
}

func toMongoPurchase(p Purchase) mongoPurchase {
	return mongoPurchase{
		id:                 p.id,
		store:              p.Store,
		productsToPurchase: p.ProductsToPurchase,
		total:              int64(p.total),
		paymentMeans:       p.PaymentMeans,
		timeOfPurchase:     p.timeOfPurchase,
		cardToken:          p.cardToken,
	}
}
```

</CodeBlockWrapper>

이와 같이 MongoDB에 대한 의존성과 Purchase 애그리거트를 디커플링할 수 있다. 다른 도메인 모델도 마찬가지로 데이터베이스 모델과 디커플링해야 한다.

지금까지의 작업이 반영된 패키지 구조는 다음과 같다.

```bash
.
├── go.mod
├── go.sum
└── internal
    ├── coffeelover.go
    ├── membership
    │   └── coffeebux.go
    ├── payment
    │   └── means.go
    ├── product.go
    ├── purchase
    │   ├── purchase.go
    │   └── repository.go
    └── store
        └── store.go
```

<br><br>

### 인프라스트럭처 서비스 작성

결제 서비스를 위해 *Stripe*라는 것을 써볼 것이다.
Mongo 레포지토리처럼 Stripe에 대한 의존성을 디커플링하기 위해 인터페이스를 정의할 것이다.

먼저, 다음 명령어로 Stripe Golang SDK를 설치한다.

```bash
go get github.com/stripe/stripe-go/v73
```

이거 뭔데 73버전까지 있는거지..?

아무튼 `payment` 폴더에 `stripe.go` 파일을 생성하고, 다음과 같이 작성한다.

```go
package payment

import (
	"errors"
	"github.com/stripe/stripe-go/v73/client"
)

type StripeService struct {
	stripeClient *client.API
}

func NewStripeService(apiKey string) (*StripeService, error) {
	if apiKey == "" {
		return nil, errors.New("API key cannot be nil")
	}

	sc := &client.API{}
	sc.Init(apiKey, nil)
	return &StripeService{stripeClient: sc}, nil
}
```

그리고 `CardChargeService` 인터페이스를 충족시키기 위해 `ChargeCard` 메소드를 작성한다.

<CodeBlockWrapper>

```go
func (s StripeService) ChargeCard(ctx context.Context, amount coffeeco.Money, cardToken string) error {
	params := &stripe.ChargeParams{
		Amount:   stripe.Int64(int64(amount)),
		Currency: stripe.String(string(stripe.CurrencyKRW)),
		Source:   &stripe.PaymentSourceSourceParams{Token: stripe.String(cardToken)},
	}

	_, err := charge.New(params)
	if err != nil {
		return fmt.Errorf("failed to create a charge: %w", err)
	}

	return nil
}
```

</CodeBlockWrapper>

이와 같이 외부 리소스인 Stripe를 사용하는 코드를 인프라스트럭처 레이어에 작성하였다.

<br><br>

## 기능 추가 구현하기

---

DDD의 장점 중 하나는 모듈성 덕분에 새로운 기능을 추가하기가 쉽다는 것이다. 아직 비즈니스 요구사항을 모두 충족시킨 것은 아니기 떄문에, 남은 요구사항을 충족시키기 위해 기능을 추가해보자.

### 멤버십 프로그램 구현

요구사항 중 10회 구매시 1회 무료 음료를 제공하는 멤버십 프로그램이 있다. 이를 구현하기 위해 `membership/coffeebux.go` 파일에 다음과 같은 메소드를 추가한다.

```go
func (c *CoffeeBux) AddStamp() {
	if c.RemainingDrinkPurchasesUntilFreeDrink == 1 {
		c.RemainingDrinkPurchasesUntilFreeDrink = 10
		c.FreeDrinksAvailable += 1
	} else {
		c.RemainingDrinkPurchasesUntilFreeDrink--
	}
}
```

`AddStamp` 무료 음료를 제공하는 로직을 구현한 메소드이다. 이제 `purchase/purchase.go` 파일의 `CompletePurchase` 메소드에서 _coffeebux_ 스탬프를 쌓는 로직을 추가한다.

<CodeBlockWrapper>

```go
func (s Service) CompletePurchase(ctx context.Context, purchase *Purchase, coffeeBuxCard *membership.CoffeeBux) error {
	err := purchase.validateAndEnrich()
	if err != nil {
		return err
	}

	switch purchase.PaymentMeans {
	case payment.MEANS_CARD:
		err := s.cardService.ChargeCard(ctx, purchase.total, *purchase.cardToken)
		if err != nil {
			return errors.New("card charge is failed")
		}

	case payment.MEANS_CASH:
		// do nothing

	default:
		return errors.New("unknown payment means")
	}

	err = s.purchaseRepo.Store(ctx, *purchase)
	if err != nil {
		return errors.New("failed to store purchase")
	}

	if coffeeBuxCard != nil {
		coffeeBuxCard.AddStamp()
	}

	return nil
}
```

</CodeBlockWrapper>

`CompletePurchase`의 파라미터로 `coffeeBuxCard`를 추가하였는데, 고객이 멤버십을 가지고 있지 않을 수 있기 때문에 `nil` 여부를 검사해야 한다. 검사 이후에는 단지 `AddStamp` 메소드를 호출함으로써, 아주 쉽게 멤버십 프로그램을 구현할 수 있다.

<br>

이제 결제 수단으로 CoffeeBux를 사용할 수 있도록 구현해야 하는데, 이는 결제 도메인과 멤버십 도메인에 모두 속하기 때문에 어디에 구현해야 할지 고민이 될 수 있다. 이를 구현하는 데는 여러 가지 방법이 있을 수 있으며, 정답은 없다. 이번 예제에서는 결제 도메인에 구현할 것이다. `purchase/purchase.go` 파일을 열어 다음과 같이 `Pay` 메소드를 추가한다.

<CodeBlockWrapper>

```go
func (c *CoffeeBux) Pay(ctx context.Context, purchases []purchase.Purchase) error {
	lp := len(purchases)
	if lp == 0 {
		return errors.New("nothing to buy")
	}

	if c.FreeDrinksAvailable < lp {
		return fmt.Errorf("not enough free drinks available, %d requestsed, %d available", lp, c.FreeDrinksAvailable)
	}

	c.FreeDrinksAvailable -= lp
	return nil
}
```

</CodeBlockWrapper>

이와 같이 사용할 수 있는 무료 음료의 수를 확인하고, 충분한 음료가 있다면 무료 음료의 수를 차감한다.

<br>

남은 것은 구매 서비스의 `CompletePurchase` 메소드에서 결제 수단으로 CoffeeBux를 사용할 수 있도록 구현하는 것이다. `purchase/purchase.go` 파일을 열어 다음과 같이 `CompletePurchase` 메소드를 수정한다.

<CodeBlockWrapper>

```go
func (s Service) CompletePurchase(ctx context.Context, purchase *Purchase, coffeeBuxCard *membership.CoffeeBux) error {
	err := purchase.validateAndEnrich()
	if err != nil {
		return err
	}

	switch purchase.PaymentMeans {
	case payment.MEANS_CARD:
		err := s.cardService.ChargeCard(ctx, purchase.total, *purchase.cardToken)
		if err != nil {
			return errors.New("card charge is failed")
		}

	case payment.MEANS_CASH:
	// do nothing

	case payment.MEANS_COFFEEBUX:
		err := coffeeBuxCard.Pay(ctx, purchase.ProductsToPurchase)
		if err != nil {
			return fmt.Errorf("failed to charge membership card: %w", err)
		}

	default:
		return errors.New("unknown payment means")
	}

	err = s.purchaseRepo.Store(ctx, *purchase)
	if err != nil {
		return errors.New("failed to store purchase")
	}

	if coffeeBuxCard != nil {
		coffeeBuxCard.AddStamp()
	}

	return nil
}
```

</CodeBlockWrapper>

이와 같이 결제 수단으로 CoffeeBux를 사용할 수 있도록 구현하였다.
이 때 CoffeeBux를 사용하여도 `AddStamp` 메소드를 호출하여 멤버십 포인트가 쌓이도록 구현하였는데, 이러한 비즈니스 불변성은 도메인 전문가와의 대화를 통해 확인할 수 있다.

<br><br>

### 매장별 할인 캠페인 구현

매장별 할인 정보를 저장하기 위해서는 레포지토리 계층이 필요하다. `store` 폴더에 `repository.go` 파일을 생성하고, 다음과 같이 작성한다.

<CodeBlockWrapper>

```go
package store

import (
	"context"
	"errors"
	"fmt"
	"github.com/google/uuid"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var ErrNoDiscount = errors.New("no discount for store")

type Repository interface {
	GetStoreDiscount(ctx context.Context, storeId uuid.UUID) (int, error)
}

type MongoRepository struct {
	storeDiscounts *mongo.Collection
}

func NewMongoRepo(ctx context.Context, connectionString string) (*MongoRepository, error) {
	client, err := mongo.Connect(ctx, options.Client().ApplyURI(connectionString))
	if err != nil {
		return nil, fmt.Errorf("failed to create a mongo client: %w", err)
	}

	discounts := client.Database("coffeeco").Collection("store_discounts")
	return &MongoRepository{
		storeDiscounts: discounts,
	}, nil
}

func (m MongoRepository) GetStoreDiscount(ctx context.Context, storeId uuid.UUID) (float32, error) {
	var discountRate float32
	err := m.storeDiscounts.FindOne(ctx, bson.D{{"store_id", storeId.String()}}).Decode(&discountRate)
	if err != nil {
		if errors.Is(err, mongo.ErrNoDocuments) {
			return 0, ErrNoDiscount
		} else {
			return 0, fmt.Errorf("failed to get store discount: %w", err)
		}
	}

	return discountRate, nil
}
```

</CodeBlockWrapper>

이 코드는 이전의 레포지토리 레이어와 비슷하다. 다만 현재 각각의 레포지토리 레이어에서 Mongo 연결 풀을 중복으로 생성하고 있는데, 이를 다른 패키지로 분리하여 공유하는 것이 향후 개선사항이 될 수 있다.

`GetStoreDiscount` 메소드를 사용할 때 에러 체크를 하는 것을 알 수있는데, 만약 `ErrNoDocuments` 에러가 발생하면 할인이 적용되지 않은 것이므로 `ErrNoDiscount` 에러를 반환하며, 이는 실제 에러라기보다는 할인이 적용되지 않았음을 명시적으로 알리는 것이다.

<br>

이렇게 구현된 매장별 할인을 구매 서비스에 추가할 것이다. `purchase/purchase.go` 파일을 열어 `StoreService` 인터페이스를 정의하고, 이를 구매 서비스 구조체에 추가한다.

```go
type StoreService interface {
	GetStoreSpecificDiscount(ctx context.Context, storeId uuid.UUID) (float32, error)
}

type Service struct {
	cardService  CardChargeService
	purchaseRepo Repository
	storeService StoreService
}
```

이후 `CompletePurchase` 메소드에서 매장별 할인을 적용하는 로직을 추가한다.

<CodeBlockWrapper>

```go
func (s Service) CompletePurchase(ctx context.Context, storeId uuid.UUID, purchase *Purchase, coffeeBuxCard *membership.CoffeeBux) error {
	err := purchase.validateAndEnrich()
	if err != nil {
		return err
	}

	discount, err := s.storeService.GetStoreSpecificDiscount(ctx, storeId)
	if err != nil && !errors.Is(err, store.ErrNoDiscount) {
		return fmt.Errorf("failed to get discount: %w", err)
	}

	purchasePrice := purchase.total
	if discount > 0 {
		purchasePrice *= coffeeco.Money(100 - discount)
	}

	switch purchase.PaymentMeans {
	case payment.MEANS_CARD:
		err := s.cardService.ChargeCard(ctx, purchase.total, *purchase.cardToken)
		if err != nil {
			return errors.New("card charge is failed")
		}

	case payment.MEANS_CASH:
	// do nothing

	case payment.MEANS_COFFEEBUX:
		err := coffeeBuxCard.Pay(ctx, purchase.ProductsToPurchase)
		if err != nil {
			return fmt.Errorf("failed to charge membership card: %w", err)
		}

	default:
		return errors.New("unknown payment means")
	}

	err = s.purchaseRepo.Store(ctx, *purchase)
	if err != nil {
		return errors.New("failed to store purchase")
	}

	if coffeeBuxCard != nil {
		coffeeBuxCard.AddStamp()
	}

	return nil
}
```

</CodeBlockWrapper>

이렇게 이것저것 추가하고 나니 가독성도 떨어지고 도메인이 복잡해졌다. 리팩토링이 필요해 보인다.

<CodeBlockWrapper>

```go
func (s Service) CompletePurchase(ctx context.Context, storeId uuid.UUID, purchase *Purchase, coffeeBuxCard *membership.CoffeeBux) error {
	err := purchase.validateAndEnrich()
	if err != nil {
		return err
	}

	err = s.calculateStoreSpecificDiscount(ctx, storeId, purchase)
	if err != nil {
		return err
	}

	switch purchase.PaymentMeans {
	case payment.MEANS_CARD:
		err := s.cardService.ChargeCard(ctx, purchase.total, *purchase.cardToken)
		if err != nil {
			return errors.New("card charge is failed")
		}

	case payment.MEANS_CASH:
	// do nothing

	case payment.MEANS_COFFEEBUX:
		err := coffeeBuxCard.Pay(ctx, purchase.ProductsToPurchase)
		if err != nil {
			return fmt.Errorf("failed to charge membership card: %w", err)
		}

	default:
		return errors.New("unknown payment type")
	}

	err = s.purchaseRepo.Store(ctx, *purchase)
	if err != nil {
		return errors.New("failed to store purchase")
	}

	if coffeeBuxCard != nil {
		coffeeBuxCard.AddStamp()
	}

	return nil
}

func (s *Service) calculateStoreSpecificDiscount(ctx context.Context, storeId uuid.UUID, purchase *Purchase) error {
	discount, err := s.storeService.GetStoreSpecificDiscount(ctx, storeId)
	if err != nil && !errors.Is(err, store.ErrNoDiscount) {
		return fmt.Errorf("failed to get discount: %w", err)
	}

	purchasePrice := purchase.total
	if discount > 0 {
		purchase.total = purchasePrice * coffeeco.Money(100-discount)
	}

	return nil
}
```

</CodeBlockWrapper>

이와 같이 `calculateStoreSpecificDiscount`함수로 따로 분리하였고, 훨씬 더 보기 깔끔해진 만큼 도메인 전문가와 이야기하기 더 쉬울 것이다.

<br>

마지막으로 `store/store.go`를 열어 `StoreService`를 충족시키는 `Service` 구조체를 작성한다.

```go
type Service struct {
	repo Repository
}

func (s Service) GetStoreSpecificDiscount(ctx context.Context, storeId uuid.UUID) (float32, error) {
	dis, err := s.repo.GetStoreDiscount(ctx, storeId)
	if err != nil {
		return 0, err
	}
	return float32(dis), nil
}
```

<br>

이로써 Domain Driven Design 기반의 전체 서비스가 완성되었다. 지금까지의 작업이 반영된 패키지 구조는 다음과 같다.

```bash
.
├── go.mod
├── go.sum
└── internal
    ├── coffeelover.go
    ├── membership
    │   └── coffeebux.go
    ├── payment
    │   ├── means.go
    │   └── stripe.go
    ├── product.go
    ├── purchase
    │   ├── purchase.go
    │   └── repository.go
    └── store
        ├── repository.go
        └── store.go
```

<br><br>

## 마치며

---

이렇게 모놀리식 아키텍처에 DDD를 적용해보았다.
현재로서는 서비스만 구현되어 있지만 REST API 등 인터페이스가 정의된다면 어떻게 구현해야 할지 고민해보는 것도 좋을 것 같다.
또한 유닛 테스트 또는 통합 테스트를 작성해보는 것도 좋을 것 같다.

DDD가 적용되지 않은 기존 코드에서, 이 포스트에서와 같이 레포지토리 패턴을 사용하고 도메인 객체를 사용하도록 리팩토링하는 것은 꽤 노력이 요구되는 일일 수 있다.
하지만 인프라스트럭처 레이어를 적용하는 것은 꽤 권장되는 방법이다.
비즈니스 로직과 인프라스트럭처를 분리함으로써, 비즈니스 로직을 테스트하기가 훨씬 쉬워지기 때문이다.

<br><br>

## References

---

<center>

[
<Image alt="Domain-Driven Design with Golang Cover" src="https://learning.oreilly.com/covers/urn:orm:book:9781804613450/400w/"/>
](https://learning.oreilly.com/library/view/domain-driven-design-with/9781804613450/) <br>
[Matthew Boyle, Domain-Driven Design with Golang』, O'Reilly Media, Inc.](https://learning.oreilly.com/library/view/domain-driven-design-with/9781804613450/)

</center>
