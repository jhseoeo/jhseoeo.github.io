---
title: '엔티티, 밸류 오브젝트, 애그리거트'
date: 2023-07-13
excerpt: Entities, Value Objects, and Aggregates
categories:
  - 'Golang'
  - 'Backend'
  - 'Architecture'
  - 'Domain Driven Design'
coverImage: '/post_img/Backend/Architecture/DDD/cover.png'
coverWidth: 16
coverHeight: 9
indexed: true
exposed: true
---

<script>
	import CodeBlockWrapper from '$lib/components/CodeBlockWrapper.svelte';
</script>

## 엔티티

Domain Driven Design에서, **엔티티**는 ID로 정의된다. 그들의 속성이 변하더라도, 식별자는 변하지 않는다.
엔티티가 처음과 비교하여 많이 달라져서 구분이 불가능하더라도, 식별자가 같다면 같은 엔티티이다.

예를 들며 살펴보자.
이베이에서는 유저로 회원가입을 할 수 있다. 만약 무언가를 판매하고자 한다면, 판매자가 된다.
또한 항목에 입찰을 할 수도 있다. 이러한 서비스의 도메인 모델은 다음 사진과 같다.

![Alt text](/post_img/Backend/Architecture/DDD/3/1.png)

시스템에서는 다음과 같은 동작이 일어날 수 있다.

- 유저가 주소를 변경한다.
- 유저가 이메일 주소를 변경한다.
- 경매 종료 시각이 변경된다.

이러한 동작은 엔티티의 식별자를 변경하지 않는다. 동일한 ID를 참조하지만, 그들의 속성은 변경될 수 있다.

이와 같은 경매 시스템의 엔티티를 구현하면 다음과 같다.

```go
package chapter3

import "time"

type Money = int

type Auction struct {
	ID            int
	startingPrice Money
	sellerID      int
	createdAt     time.Time
	auctionStart  time.Time
	auctionEnd    time.Time
}
```

위 예제에서, `int` 타입의 `ID`는 엔티티의 식별자를 나타낸다.
엔티티 ID는 반드시 시스템에서 생성되어야 하는 것은 아니며, 엔티티 속성의 일부를 나타낼 수도 있다.
이를테면 대부분의 국가에서, 사람들을 구분하기 위해 주민등록번호를 사용한다.

<br>

### 좋은 식별자 생성하기

엔티티에 대한 고유하고 적절한 생성자를 생성하는 것은 의외로 어렵다.
이전 예제에서의 ID는 `int` 타입이었다. 대부분의 간단한 시스템에서는 이렇게 사용해도 무방하지만, 규모가 큰 시스템에서는 문제가 생기게 된다.

예를 들어 다음과 같은 코드가 있다고 해보자.

```go
fmt.Println(math.MaxInt)
```

이를 실행하면 다음과 같은 결과를 얻게 된다.

```text
9223372036854775807
```

하지만 이러한 코드를 작성하면, 다음과 같은 문제가 발생한다.

```go
fmt.Println(math.MaxInt + 1)
```

```text
cannot use math.MaxInt + 1 (untyped int constant 9223372036854775808) as int value in argument to fmt.Println (overflows)
```

정수를 모두 다 써렸다! 만약 이처럼 정수를 식별자로 사용했다면, 시스템을 다시 설계해야 하는 문제가 발생했을 것이다.
따라서 엔티티의 식별자를 정할 때는 미래에 발생할 수 있는 문제를 고려하여야 한다.
일반적으로 가장 많이 고려되는 방식은 **UUID(Universally Unique Identifier)**를 사용하는 것이다.
UUID는 128비트 레이블로, 실질적으로 중복될 가능성이 없다.

UUID는 Go의 표준 라이브러리는 아니지만, 구글에서 제공하는 라이브러리가 있다.
다음과 같은 예제처럼 UUID를 사용할 수 있다.

```go
package chapter3

import "github.com/google/uuid"

type SomeEntity struct {
	id uuid.UUID
}

func NewSomeEntity() *SomeEntity {
	return &SomeEntity{
		id: uuid.New(),
	}
}
```

PostgreSQL과 같은 데이터베이스의 경우, 자체적인 UUID 타입을 사용할 수도 있다

### 엔티티를 정의할 때 주의해야 할 점

엔티티는 식별자에 중점을 두기 때문에, 데이터베이스 설계 구조가 도메인 모델 구조를 결정하게 되는 현상이 일어날 수 있다.
이러한 현상은 **Anemic Domain Model**이라고도 하는 현상으로 이어질 수도 있다.

Anemic Model은 도메인의 동작이 거의 없거나 없는 모델을 의미한다. 이런 경우, DDD의 이점을 얻을 수 없다.
엔티티는 Anemic Model이 될 수 있는 유력한 후보이다.
만약 그들이 애초부터 잘 식별된다면, Anemic Model을 진단하고 해결하기 쉽다.
모델이 대부분 공개 getter 및 setter 함수로 구성되어 있거나, 비즈니스 로직이 거의 없거나, 혹은 비즈니스 로직을 구현하기 위해 다양한 클라이언트에 의존하는 경우, Anemic Model이라고 볼 수 있다.

아래 코드는 우리의 경매 시스템에 대한 Anemic Entity의 예제이다. 코드가 좀 길어져서 따로 뺐다.

<CodeBlockWrapper>

```go
package chapter3

import "time"

type AnemicAuction struct {
	id            int
	startingPrice Money
	sellerID      int
	createdAt     time.Time
	auctionStart  time.Time
	auctionEnd    time.Time
}

func (a *AnemicAuction) GetID() int {
	return a.id
}

func (a *AnemicAuction) StartingPrice() Money {
	return a.startingPrice
}

func (a *AnemicAuction) SetStartingPrice(startingPrice Money) {
	a.startingPrice = startingPrice
}

func (a *AnemicAuction) GetSellerID() int {
	return a.sellerID
}

func (a *AnemicAuction) SetSellerID(sellerID int) {
	a.sellerID = sellerID
}

func (a *AnemicAuction) GetCreatedAt() time.Time {
	return a.createdAt
}

func (a *AnemicAuction) SetCreatedAt(createdAt time.Time) {
	a.createdAt = createdAt
}

func (a *AnemicAuction) GetAuctionStart() time.Time {
	return a.auctionStart
}

func (a *AnemicAuction) SetAuctionStart(auctionStart time.Time) {
	a.auctionStart = auctionStart
}

func (a *AnemicAuction) GetAuctionEnd() time.Time {
	return a.auctionEnd
}

func (a *AnemicAuction) SetAuctionEnd(auctionEnd time.Time) {
	a.auctionEnd = auctionEnd
}
```

</CodeBlockWrapper>

이런 코드가 잘못되었다고 할 수 있는 것은 아니며, 이런 느낌의 코드를 여기저기서 많이 볼 수 있다.
하지만 이런 코드는 Domain Driven Design의 모든 이점을 얻을 수 없다.
`AnemicAuction`를 사용하는 다른 구성은 잠재적으로 일부 속성이 무엇인지 가정하고 있다.
또한, 도메인 전문가가 의도하지 않은 대로 비즈니스 로직을 구현될 수 있다.

따라서, 다음과 같이 리팩토링되어야 한다.

<CodeBlockWrapper>

```go
package chapter3

import (
	"errors"
	"github.com/google/uuid"
	"time"
)

type AuctionRefactored struct {
	id            uuid.UUID
	startingPrice Money
	sellerID      uuid.UUID
	createdAt     time.Time
	auctionStart  time.Time
	auctionEnd    time.Time
}

func (a *AuctionRefactored) GetAuctionElapsedDuration() time.Duration {
	return a.auctionStart.Sub(a.auctionEnd)
}

func (a *AuctionRefactored) GetAuctionEndTimeInUTC() time.Time {
	return a.auctionEnd
}

func (a *AuctionRefactored) SetAuctionEnd(auctionEnd time.Time) error {
	err := a.validateTimeZone(auctionEnd)
	if err != nil {
		return err
	}
	a.auctionEnd = auctionEnd
	return nil
}

func (a *AuctionRefactored) GetAuctionStartTimeInUTC() time.Time {
	return a.auctionStart
}

func (a *AuctionRefactored) SetAuctionStartTimeInUTC(auctionStart time.Time) error {
	err := a.validateTimeZone(auctionStart)
	if err != nil {
		return err
	}
	a.auctionStart = auctionStart
	return nil
}

func (a *AuctionRefactored) GetId() uuid.UUID {
	return a.id
}

func (a *AuctionRefactored) validateTimeZone(t time.Time) error {
	tz, _ := t.Zone()
	if tz != time.UTC.String() {
		return errors.New("time zone must be UTC")
	} else {
		return nil
	}
}
```

</CodeBlockWrapper>

간단한 예제임에도 엔티티가 비즈니스 로직을 가지고 있는 경우의 이점을 확인할 수 있다.
특히, 시간대의 일관성을 위해 UTC로 강제하는 로직이 에러 처리를 통해 잘 드러나 있다.
또한 경매 경과 시간에 대한 일관적인 정의를 위해 `GetAuctionElapsedDuration` 함수를 사용하고 있다.

그렇다면 데이터베이스에 동일한 모델을 사용할 수는 없을까?
시스템이 복잡해짐에 따라 경매에 대한 추가적인 메타데이터를 저장해야 할 수도 있다.
이를테면 경매를 본 사용자의 수, 광고를 클릭해서 들어온 사용자의 수, 사용자의 경매 기록 등이다.
이러한 모든 정보는 유용하지만, 도메인 모델에 속하지는 않는다.

<br>

### ORM을 사용할 때 주의할 점

ORM(Object Relational Mapping)은 데이터베이스 영속성을 관리하기 위해 사용되는 방식으로, DDD의 개념은 아니지만 널리 사용되고 있다.
Golang에서는 GORM이라는 ORM 라이브러리가 가장 유명하다.
ORM을 사용함으로써 발생하는 문제점이 있긴 하지만, ORM을 처리하면 쿼리 생성 및 처리에 대한 제어 권한을 위임하게 된다.

ORM을 DDD와 함께 사용하려면 ORM이 DDD 컨텍스트에서 엔티티를 작성하는 것을 제어할 수 없게 해야 한다. 그렇지 않으면 Anemic Model이 될 수 있다.
또한 엔티티와 ORM의 결합도를 낮추기 위해, ORM 계층과 엔티티 계층 사이에 이전 포스트에서 다루었던 어댑터 계층을 추가하는 것이 좋다.

<br><br>

## 밸류 오브젝트

밸류 오브젝트는 엔티티와 다르게 식별자가 없고, 풍부한 도메인 모델을 만들기 위해 엔티티, 애그리거트와 함께 사용된다.
일반적으로 도메인에 대한 것을 측정, 정량화, 설명하는 데 사용된다.

밸류 오브젝트를 이해하는데 도움이 되는 Golang 코드를 작성해보고자 한다.
먼저, `Point`라는 구조체와 생성 함수를 정의한다.

<CodeBlockWrapper>

```go
package chapter3

type Point struct {
	x intpackage chapter3

type Point struct {
	x int
	y int
}

func NewPoint(x int, y int) *Point {
	return &Point{x, y}
}

```

</CodeBlockWrapper>

그리고 같은 좌표를 가진 두 점이 같은지 확인하는 테스트도 함께 작성한다.

<CodeBlockWrapper>

```go
package chapter3_test

import (
	"github.com/jhseoeo/Golang-DDD/chapter3"
	"testing"
)

func Test_Point(t *testing.T) {
	a := chapter3.NewPoint(1, 2)
	b := chapter3.NewPoint(1, 2)

	if a != b {
		t.Fatal("a and b were not equal")
	}
}
```

</CodeBlockWrapper>

직관적으로 두 점은 동일하다는 사실을 알 수 있지만, 이 테스트는 실패한다.

```bash
$ go test
--- FAIL: Test_Point (0.00s)
    value_object_test.go:13: a and b were not equal
FAIL
exit status 1
FAIL    github.com/jhseoeo/Golang-DDD/chapter3  0.001s
```

이 테스트는 왜 실패할까?
Go에서 `&` 기호를 사용하는 경우, A와 B가 저장되는 메모리 주소를 가리키는 포인터가 생성된다.
따라서 `a`와 `b`는 서로 다른 메모리 주소를 가리키고 있기 때문에 동일하지 않다고 판단한다.

그렇다면 포인터 생성 함수를 이렇게 변경해보자

```go
func NewPoint(x int, y int) Point {
	return Point{x, y}
}
```

이제 테스트를 실행하면 통과하는 것을 알 수 있다. 이제 포인터의 메모리 주소값이 아닌 구조체의 값을 비교하기 때문이다.
이러한 경우 이들은 밸류 오브젝트라고 볼 수 있다. 동일한 값을 가지는 경우 동일하다고 판단된다.

`Point` 구조체에서 `x`와 `y`는 소문자로 시작하는데, 이는 `Point`가 패키지 외부에서 사용되지 않게 하기 위함이다.
밸류 오브젝트에서도 또한 마찬가지로, 필드값이 변경되지 않도록 하는 것이 좋다.

밸류 오브젝트는 대체 가능성이 있다. 우리가 게임을 작성하고, 플레이어의 현재 위치를 나타내기 위해 `Point`를 사용한다고 가정해보자.
다음과 같이 플레이어가 이동하는 코드를 작성할 수 있다.

<CodeBlockWrapper>

```go
package chapter3

type Point struct {
	x int
	y int
}

func NewPoint(x int, y int) Point {
	return Point{x, y}
}

const (
	directionUnkonwn = iota
	directionNorth
	directionSouth
	directionEast
	directionWest
)

func TrackPlayer() {
	currLocation := NewPoint(0, 0)
	currLocation = move(currLocation, directionNorth)
}

func move(currLocation Point, direction int) Point {
	switch direction {
	case directionNorth:
		return NewPoint(currLocation.x, currLocation.y+1)
	case directionSouth:
		return NewPoint(currLocation.x, currLocation.y-1)
	case directionEast:
		return NewPoint(currLocation.x+1, currLocation.y)
	case directionWest:
		return NewPoint(currLocation.x-1, currLocation.y)
	default:
		// :D
	}

	return currLocation
}
```

</CodeBlockWrapper>

여기서 `Point`는 플레이어의 위치를 나타낸다.
밸류 오브젝트의 교체 가능성을 이용하여, 플레이어가 움직일 때마다 플레이어의 위치를 나타내는 지점을 완전히 새로운 값으로 업데이트할 수 있다.
또한 `move` 함수는 side effect가 존재하지 않는 함수임을 알 수 있다.

불변성과 side effect가 없는 함수를 작성하였기 때문에, 값을 추론하고 유닛 테스트를 작성하기가 쉬워진다.
따라서, 장기적인 시스템의 유지보수성을 높일 수 있다.

<br>

### 언제 엔티티를 사용하고, 언제 밸류 오브젝트를 사용해야 할까?

도메인을 모델링할 때, 가능한 한 밸류 오브젝트를 사용하는 것이 좋다.
밸류 오브젝트는 제대로 구현되었을 때, 가장 안전한 구조체이기 때문이다.
의도하지 않은 방식으로 인스턴스를 잘못 수정하는 사용자들을 걱정할 필요가 없어진다.

또한 객체의 값에만 관심이 있다면 밸류 오브젝트를 사용해야 한다.
밸류 오브젝트가 적절한 경우이려면, 다음과 같은 조건을 모두 충족시켜야 한다.

- 객체를 불변적으로 취급해야 할 때
- 도메인 개념을 나타내거나, 측정하거나, 정량화해야 할 때
- 값으로 동일한 타입의 다른 객체와 비교할 수 있을 때

모든 조건이 충족된다면 밸류 오브젝트가 적절한 선택이 될 것이다.

마치 모든 것이 밸류 오브젝트가 되어야 한다고 말하는 것처럼 보일 수 있지만, 실제로 그게 나쁜 아이디어는 아니다.
부적합한게 아니라면 최대한 많은 것들을 밸류 오브젝트로 만드는 것이 좋다.
부적합하다고 판단이 들면 그 때 엔티티로 변경한다

<br><br>

### 애그리거트

애그리거트는 Domain Driven Design에서 가장 어려운 개념 중 하나로, 잘못 구현되는 경우가 많다.
코드를 조직화하는데 도움이 된다면 좋지만, 잘못 구현되면 개발 속도를 늦추고 일관성을 해치는 요소가 될 수 있다.

애그리거트는 일부 동작에 대해 한 그룹으로 묶을 수 있는 도메인의 집합이다.
예를 들면, 각각의 직원들에 대한 도메인 오브젝트가 있지만 이들을 팀으로 묶는다면 부서 구성과 같은 상황에서 유용할 것이다.
또한, 다양한 통화나 카드, 가상화폐를 묶어 지갑으로 관리할 수도 있으며, 이 경우 지갑이 애그리거트가 된다.

애그리거트는 array, map, slice 등 데이터 컬렉션 타입과 헷갈리기도 하는데, 이들은 동일한 개념이 아니다.
애그리거트는 컬렉션을 사용할 수도 있지만, 애그리거트는 DDD 개념이기 때문에 일반적으로 여러 컬렉션, 필드, 함수, 메서드 등을 포함한다.

애그리거트의 주된 역할은 포함된 도매인 개체끼리의 트랜잭션 경계를 정의하는 것이다.
개체에 대한 CRUD는 애그리거트 전체에 걸쳐 일어나거나, 또는 전혀 일어나지 않아야 한다.
이를테면 새로운 직원이 팀에 입사하면, 직속 관리자 구조를 업데이트해야 할 수 있다.
그리고 사용자가 지갑에 새로운 카드를 추가하면, 해당 카드의 잔액이 지갑의 전체 잔액에 반영되어야 한다.

애그리거트는 다음과 같이 구현할 수 있다.

<CodeBlockWrapper>

```go
package chapter3

import (
	"errors"
	"github.com/google/uuid"
)

type WalletItem interface {
	GetBalance() (Money, error)
}

type Wallet struct {
	id          uuid.UUID
	ownerId     uuid.UUID
	walletItems []WalletItem
}

func (w Wallet) GetWalletBalance() (*Money, error) {
	var result Money
	for _, v := range w.walletItems {
		itemBal, err := v.GetBalance()
		if err != nil {
			return nil, errors.New("failed to get balance")
		}
		result += itemBal
	}
	return &result, nil
}
```

</CodeBlockWrapper>

위 코드에서 `Wallet` 구조체의 `id`는 애그리거트 루트이며, 지갑의 식별자이다.
`ownerId`는 지갑을 소유하는 엔티티의 식별자이다. 소유자에 대한 모든 정보를 포함할 필요는 없으며, 필요할 때 가져올 수 있게끔 소유자의 식별자만 있으면 된다.
`walletItems`는 `WalletItem`의 집합이며, `WalletItem`은 다른 곳에서 정의한 엔티티이므로 여기서는 인터페이스로 정의한다.

<br>

### 애그리거트 찾기

Domain Driven Design에서 가장 어려운 작업 중 하나는 어떤 타임을 언제 쓸 지 결정하는 것이다.
도메인 모델을 애그리거트로 클러스터링 하려면, 먼저 제한된 컨텍스트의 불변성을 이해해야 한다.
불변성은 도메인에서 반드시 참이어야 하는 규칙이다.
이를테면 시스템에서 주문을 생성하려면 상품의 재고가 충분해야 한다.
이는 비즈니스적인 불변성이며, 재고가 없는 경우 고객에게 약속할 수 없다.

애그리거트에서는 eventually consistency가 아닌 transactional consistency가 필요하다.
애그리거트에 대한 변경 사항은 즉각적이고 atomic해야 한다.
따라서 애그리거트를 *transactional consistency boundary*라고 봐도 무방하다.
도메인 내에서 변경 사항이 생길 때마다, 이상적으로는 트랜잭션당 단 하나의 애그리거트만 수정해야 한다.

<br>

### 애그리거트 디자인

일반적으로 애그리거트는 작을수록 좋다.
애그리거트가 작을수록 시스템의 유연성이 높아지고, 성능이 향상되며, 트랜잭션의 성공률이 높아진다.

여러 명의 사용자가 동시에 동일한 주문을 하려 하는 상황을 떠올려보자.
먼저, _주문_ 애그리거트를 다음과 같이 정의할 수 있다.

```go
type item struct {
	name string
}

type Order struct {
	items          []item
	taxAmount      Money
	discount       Money
	paymentCard    uuid.UUID
	customerId     uuid.UUID
	marketingOptIn bool
}
```

이 `Order` 구조체는 보기엔 괜찮아 보이고, 일반적인 주문 흐름과 유사해 보인다.
하지만, 이 애그리거트에 `marketingOptIn` 필드를 추가하는 것은 부적절하다.
제한된 컨텍스트 관점에서 이 애그리거트에 `marketingOptIn`은 주문 객체와 관련이 없고,
사용자가 주문 시작과 완료 사이에 마케팅을 거부하면 주문이 완료되지 않길 원하기 때문이다.
따라서 `marketingOptIn` 필드를 제거하는 것이 바람직하다.

물론 UI에서 마케팅 선택 확인란 자체를 제거하라는 게 아니라, 단지 애그리거트와 트랜잭션 흐름에서 디커플링되어야 한다는 것이다.

<br>

### 한 개 이상의 제한된 컨텍스트에 걸친 애그리거트

비즈니스 규모에서 제한된 컨텍스트가 변경되거나, 하위 시스템에 대한 알림이 필요한 상황이 있을 수 있다.
여러 제한된 컨텍스트에 걸치는 경우에는 eventual consistency를 목표로 해야 한다.
즉, 다른 시스템이 우리가 보낸 이벤트를 적절히 잘 받아서 처리할 것이라고 기대할 뿐, 제한된 컨텍스트 안에서 하는 것처럼 atomic하게 처리하는 것을 기대하면 안된다.
이를 통해 더 강력한 복원력과 확장 가능성을 가진 분리된 시스템으로 발전할 수 있다(마이크로서비스!).

<br><br>

## References

---

<center>

[![Domain-Driven Design with Golang Cover](https://learning.oreilly.com/covers/urn:orm:book:9781804613450/400w/)](https://learning.oreilly.com/library/view/domain-driven-design-with/9781804613450/) <br>
[Matthew Boyle, Domain-Driven Design with Golang』, O'Reilly Media, Inc.](https://learning.oreilly.com/library/view/domain-driven-design-with/9781804613450/)

</center>
