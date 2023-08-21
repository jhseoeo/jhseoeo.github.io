---
title: 'DDD와 함께 TDD, BDD 사용하기'
date: 2023-08-11
excerpt: 'TDD, BDD, and DDD'
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
</script>

지금까지 DDD의 핵심적인 개념에 대해 알아보았다.
하지만 DDD 외에도 TDD, BDD 등 DDD와 함께 사용할 수 있는 여러 개발 방법론이 존재한다.
본 포스트에서는 이에 대해 알아보고, DDD와 함께 사용할 수 있는 방법에 대해 알아보려 한다.

<br><br>

## TDD

---

TDD(Test Driven Development)는 소프트웨어를 개발하기 이전에 비즈니스 요구사항을 충족시키는 테스트를 먼저 작성하는 개발 방법론이다.
코드를 작성할 때 테스트케이스를 지속적으로 업데이트해야 하고, 테스트케이스를 통과하는 코드를 작성해야 한다.

가령 TDD를 사용하여 애플리케이션에 새로운 기능을 추가하는 작업을 수행한다고 할 때, 다음과 같은 절차를 따른다.

1. 코드를 작성하기 전에 테스트케이스를 작성한다.
   *"API 유저인 내가 홈 화면에서 `/balance` 엔드포인트로 요청을 날려서 모든 계정의 잔고를 확인할 수 있어야 한다"*처럼 유저 스토리를 기반으로 테스트케이스를 작성할 수 있다.
   또는 *"Given API 사용자, When `/balance` 호출, Then 모든 통장의 잔고를 확인할 수 있음"*과 같이 Given-When-Then(GWT) 패턴으로 작성할 수도 있다.

   이 단계에서는 단 한 줄의 코드도 작성하지 않으며, 비즈니스 요구사항에 초점을 맞추어야 한다.

2. 테스트를 실행한다. 코드를 작성하지 않았기 때문에, 테스트는 당연히 실패할 것이다.
   이 단계는 테스트케이스와 테스트 프레임워크가 잘 설정되었는지 확인하는 단계이다.

3. 테스트를 통과하는 최소한의 코드를 작성한다.
   이 단계에서 작성되는 코드는 특별히 예쁘고 깔끔할 필요 없다! 그저 테스트를 통과하기만 하면 된다.
   비즈니스 불변성을 위반하지 않는 선에서 테스트를 통과하기 위한 모든 방법을 동원한다.

4. 테스트를 재실행한다. 새 테스트뿐 아니라, 기존의 테스트도 모두 통과해야 한다.
   즉, 새로운 코드가 기존의 코드를 망가뜨리지 않았는지 확인한다.

5. 코드를 리팩토링한다. 3단계에서 작성한 예쁘지 않은 코드를 예쁘게 리팩토링해주면 된다.
   틈틈이 테스트를 실행하면서 코드가 잘 동작하는지 확인한다.

이러한 절차를 반복하는 것이 TDD의 핵심이다.
TDD는 새로운 기능을 추가할 때 뿐만 아니라, 기존의 코드를 수정할 때에도 사용할 수 있다. 즉, 레거시 코드를 개선하거나 디버깅할 때에도 유용하다.

<br>

다음과 같은 Given-When-Then 테스트케이스가 있다고 가정해보자.

제목: _고객이 쿠키를 구매하면, 이메일 영수증을 받는다._

그렇다면 다음과 같은 합격 기준을 정의할 수 있다.

- 사용자가 쿠키를 구매할 때 쿠키 재고가 충분하다면 결제가 완료된 이후 잠시 뒤 이메일 영수증을 받는다.
- 사용자가 쿠키를 구매할 때 쿠키 재고가 충분하지 않다면 계산원에게 쿠키 재고가 부족하다는 알림을 보낸다.
- 사용자가 쿠키를 구매할 때 쿠키 재고가 충분하지만 카드 결제가 실패한다면 계산원에게 카드 결제가 실패했다는 알림을 보낸다.
- 결제가 완료되었지만 이메일 전송에 실패한 경우, 계산원에게 이메일 전송이 실패했다는 알림을 보낸다.

이제 TDD 절차에 따라 기능을 구현해볼 것이다.

<br><br>

### 테스트 추가

`cookies.go` 파일 및 `cookies_test.go` 파일을 생성한다.

```text
.
├── cookies.go
├── cookies_test.go
└── go.mod
```

go는 테스트 파일의 이름이 `_test.go`로 끝나는 파일을 테스트 파일로 인식한다. 또한 빌드 시 테스트 파일은 무시된다. golang에서의 테스트에 관련한 자세한 내용은 [여기](https://jhseoeo.github.io/posts/post/Go/Golang%20Basics/GO13)를 참고하자.

TDD 절차에 따라, 테스트를 먼저 작성해 보자! `cookies_test.go` 파일에 다음과 같이 테스트케이스를 작성한다.

```go
package chapter8_test

import "testing"

func Test_CookiePurchases(t *testing.T) {
	t.Run(`Given a user tries to purchase a cookie and we have them in stock,
    when they tap their card, they get charged and then receive an email receipt a few moments later.`,
		func(t *testing.T) {
			t.FailNow()
		})
}
```

위 코드에서 확인할 수 있듯 테스트케이스의 이름에 합격 기준이 명시되었다.
바로 이 부분에서 TDD와 DDD가 잘 어울린다는 것을 알 수 있다. TDD의 합격 기준 자체가 도메인 전문가로부터 나온 셈이며, 이 내용이 테스트케이스에 명시됨으로써 도메인 전문가와 개발자 사이의 의사소통이 원활해진다.

Go에서는 테스트가 비어 있으면 통과한 것으로 간주하기 때문에, `t.FailNow()`를 추가하여 테스트가 실패하도록 만들었다.
이와 같이, 원칙적으로 아직 작성하지 않은 테스트는 실패해야 한다.

그럼 테스트를 실행해보자!

```bash
$ go test ./...
--- FAIL: Test_CookiePurchases (0.00s)
    --- FAIL: Test_CookiePurchases/Given_a_user_tries_to_purchase_a_cookie_and_we_have_them_in_stock,_____when_they_tap_their_card,_they_get_charged_and_then_receive_an_email_receipt_a_few_moments_later. (0.00s)
FAIL
exit status 1
FAIL    github.com/jhseoeo/Golang-DDD/chapter8  0.001s
```

테스트가 성공적으로 실패했다..! 다음 단계로 넘어가보자.

<br><br>

### 코드 작성

지금까지 테스트만을 작성했고, 코드는 한 줄도 작성하지 않았다.
이제 할 일은 `cookies.go` 파일에 테스트를 통과할 수 있는 최소한의 코드를 작성하는 것이다.
거듭 언급하지만, 이 단계에서 코드를 특별히 예쁘게 작성할 필요는 없다.

<CodeBlockWrapper>

```go
package chapter8

import (
	"context"
	"errors"
	"fmt"
)

type EmailSender interface {
	SendEmailReceipt(ctx context.Context, email string) error
}

type CardCharger interface {
	ChargeCard(ctx context.Context, cardToken string, amountInCent int) error
}

type CookieStockChecker interface {
	AmountInStock(ctx context.Context) int
}

type CookieService struct {
	emailSender        EmailSender
	cardCharger        CardCharger
	cookieStockChecker CookieStockChecker
}

func NewCookieService(e EmailSender, c CardCharger, a CookieStockChecker) *CookieService {
	return &CookieService{
		emailSender:        e,
		cardCharger:        c,
		cookieStockChecker: a,
	}
}

func (c *CookieService) PurchaseCookies(ctx context.Context, amountOfCookies int) error {
	// TODO: 쿠키 가격 결정하는 로직 추가
	const priceOfCookie = 5

	cookiesInStock := c.cookieStockChecker.AmountInStock(ctx)
	if cookiesInStock < amountOfCookies {
		return errors.New("not enough cookies in stock")
	}

	cost := priceOfCookie * amountOfCookies

	err := c.cardCharger.ChargeCard(ctx, "some-token", cost)
	if err != nil {
		return fmt.Errorf("failed to charge card: %w", err)
	}

	err = c.emailSender.SendEmailReceipt(ctx, "some-email")
	if err != nil {
		return fmt.Errorf("failed to send email receipt: %w", err)
	}

	return nil
}
```

</CodeBlockWrapper>

<br><br>

### 테스트 실행

`PurchaseCookies` 메서드는 몇 가지 인터페이스를 통해 의존성을 주입받는다.
이러한 경우 인터페이스를 Mocking하여 테스트를 쉽게 작성할 수 있다.
이를테면 이메일 전송시 오류가 발생하는 상황을 테스트하기 위해, `EmailSender` 인터페이스에 대한 Mock을 만들어 `SendEmailReceipt` 메서드가 오류를 반환하도록 만들 수 있다.

Golang 개발팀에서는 Mocking을 위해 [gomock](https://github.com/golang/mock) 프레임워크를 제공한다.
이 프레임워크를 이용하여 mock을 만들어보자.

먼저, `gomock`을 설치한다.

```bash
go install github.com/golang/mock/mockgen@v1.6.0
```

이후 프로젝트 루트 디렉토리에 `gen.go` 파일을 생성하고, 다음과 같이 작성한다.

```go
package chapter8
import _ "github.com/golang/mock/mockgen/model"
//go:generate mockgen -package mocks -destination chapter8/mocks/cookies.go github.com/jhseoeo/Golang-DDD/chapter8 CookieStockChecker,CardCharger,EmailSender
```

이제 `go generate ./...` 명령어를 실행하면, `mocks` 디렉토리에 Mock이 생성된 것을 확인할 수 있다.

```text
.
├── chapter8
│   └── mocks
│       └── cookies.go
├── cookies.go
├── cookies_test.go
├── gen.go
├── go.mod
└── go.sum
```

마지막으로, 생성된 mock을 활용하여, `cookies_test.go` 파일을 다음과 같이 수정한다.

<CodeBlockWrapper>

```go
func Test_CookiePurchases(t *testing.T) {
	t.Run(`Given a user tries to purchase a cookie and we have them in stock,
    when they tap their card, they get charged and then receive an email receipt a few moments later.`,
		func(t *testing.T) {
			ctrl := gomock.NewController(t)
			e := mocks.NewMockEmailSender(ctrl)
			c := mocks.NewMockCardCharger(ctrl)
			s := mocks.NewMockCookieStockChecker(ctrl)
			ctx := context.Background()

			const cookiesToBuy = 5
			const totalExpectedCost = 25

			cs, err := chapter8.NewCookieService(e, c, s)
			if err != nil {
				t.Fatalf("unexpected error: %v", err)
			}

			gomock.InOrder(
				s.EXPECT().AmountInStock(ctx).Times(1).Return(cookiesToBuy),
				c.EXPECT().ChargeCard(ctx, "some-token", totalExpectedCost).Times(1).Return(nil),
				e.EXPECT().SendEmailReceipt(ctx, "some-email").Times(1).Return(nil),
			)

			err = cs.PurchaseCookies(ctx, cookiesToBuy)
			if err != nil {
				t.Fatalf("unexpected error: %v", err)
			}
		})
}
```

</CodeBlockWrapper>

위 테스트 코드에서는 `gomock`을 통해 생성된 Mock을 사용하여 각 interface를 충족시키는 mock을 만들고, `NewCookieService` 메서드를 통해 `CookieService`를 생성한다.
또한 `gomock`의 기능을 이용하여, mock이 지정된 파라미터를 받았을 때 어떤 동작을 수행해야 하는지를 지정한다.
이후 `PurchaseCookies` 메서드를 호출하고, 동작이 예상대로 수행되는지 확인할 수 있다..

`go test` 명령어를 통해 이 테스트를 실행하면 통과할 것이다. 테스트 설명에 명시된 기준을 충족시킨다.
하지만 코드에 몇 가지 TODO 태그가 남아있는 것을 확인할 수 있다.
도메인 전문가와의 질의를 진행한 후 이 부분을 수정해보자.

Q. 쿠키의 가격은 어떻게 결정되나요?  
A. 나중에 변경될 수 있지만 당장은 50센트로 고정되어 있습니다.

Q. 쿠키 재고보다 더 많은 쿠키를 구매하려고 하면 어떻게 해야 할까요?
A. 일단 남아있는 재고만큼만 구매할 수 있도록 합니다.

Q. 사용자의 카드 토큰은 어떻게 얻나요?
A. 카드 결제하면 뿅 나와요

Q. 사용자의 이메일 주소는 어떻게 얻나요?
A. 이것도 결제하면 뿅 나와요

서비스가 어떻게 동작해야 할지 더 잘 이해할 수 있게 되었다.
다만 TDD니까, 코드를 수정하기에 앞서 테스트를 먼저 작성해야 한다.
테스트를 작성하기 위해 `cookies_test.go` 파일에 다음과 같은 테스트 stub을 추가한다.

<CodeBlockWrapper>

```go
	t.Run(`Given a user tries to purchase a cookie and we don't have any in stock, we return an error to the cashier
      so they can apologize to the customer.`,
		func(t *testing.T) {
			t.FailNow()
		})

	t.Run(`Given a user tries to purchase a cookie, we have them in stock, but their card gets declined, we return
   an error to the cashier so that we can ban the customer from the store.`,
		func(t *testing.T) {
			t.FailNow()
		})

	t.Run(`Given a user purchases a cookie and we have them in stock, their card is charged successfully but we
   fail to send an email, we return a message to the cashier so they know can notify the customer that they will not
   get an e-mail, but the transaction is still considered done.`,
		func(t *testing.T) {
			t.FailNow()
		})

	t.Run(`Given someone wants to purchase more cookies than we have in stock we only charge them for the ones we do have`,
		func(t *testing.T) {
			t.FailNow()
		})
```

</CodeBlockWrapper>

<br><br>

### 리팩토링

TDD의 마지막 단계는 리팩토링이다.
위에서 진행하였던, 도메인 전문가와의 질의 내용을 반영하여 코드를 수정할 것이다.

일단 쿠키 가격이 50센트로 변경된다. 이를 반영하면 당연히 테스트는 실패할 것이다. 따라서 테스트 코드도 수정해준다. 당연한 얘기니 코드는 생략!

다른 테스트들도 작성할 것이다. 먼저, 쿠키 재고보다 더 많은 쿠키를 구매하려고 하면 어떻게 해야 할지에 대한 테스트를 작성한다.

<CodeBlockWrapper>

```go
	t.Run(`Given a user tries to purchase a cookie and we don't have any in stock, we return an error to the cashier
      so they can apologize to the customer.`,
		func(t *testing.T) {
			ctrl := gomock.NewController(t)
			e := mocks.NewMockEmailSender(ctrl)
			c := mocks.NewMockCardCharger(ctrl)
			s := mocks.NewMockCookieStockChecker(ctrl)
			ctx := context.Background()

			const cookiesToBuy = 5
			cs, err := chapter8.NewCookieService(e, c, s)
			if err != nil {
				t.Fatalf("unexpected error: %v", err)
			}

			gomock.InOrder(
				s.EXPECT().AmountInStock(ctx).Times(1).Return(0),
			)
			err = cs.PurchaseCookies(ctx, cookiesToBuy)
			if err == nil {
				t.Fatalf("expected error, got nil")
			}
		})
```

</CodeBlockWrapper>

일단 이 테스트를 실행하면 성공할 것이다. 코드에서 쿠키 재고가 부족하면 에러를 반환하게끔 작성해두었기 때문.

하지만 쿠키 재고가 있을 때는 남아있는 재고만큼만 구매할 수 있도록 하라는 요구사항이 있다. 이를 반영하여 코드를 수정해야 한다.

<CodeBlockWrapper>

```go
func (c *CookieService) PurchaseCookies(ctx context.Context, amountOfCookies int) error {
	const priceOfCookie = 50

	cookiesInStock := c.cookieStockChecker.AmountInStock(ctx)
	if cookiesInStock == 0 {
		return errors.New("no cookies in stock")
	}
	if cookiesInStock < amountOfCookies {
		// TODO : 재고 부족시 로직 추가
	}

	cost := priceOfCookie * amountOfCookies

	err := c.cardCharger.ChargeCard(ctx, "some-token", cost)
	if err != nil {
		return fmt.Errorf("failed to charge card: %w", err)
	}

	err = c.emailSender.SendEmailReceipt(ctx, "some-email")
	if err != nil {
		return fmt.Errorf("failed to send email receipt: %w", err)
	}

	return nil
}
```

</CodeBlockWrapper>

<br>

다음 단계의 테스트를 먼저 작성해보자. 카드 결제가 실패했을 때, 어떻게 처리할지에 대한 테스트이다.

<CodeBlockWrapper>

```go
	t.Run(`Given a user tries to purchase a cookie, we have them in stock, but their card gets declined, we return
	an error to the cashier so that we can ban the customer from the store.`,
			func(t *testing.T) {
				ctrl := gomock.NewController(t)
				e := mocks.NewMockEmailSender(ctrl)
				c := mocks.NewMockCardCharger(ctrl)
				s := mocks.NewMockCookieStockChecker(ctrl)
				ctx := context.Background()

				const cookiesToBuy = 5
				const totalExpectedCost = 250
				cs, err := chapter8.NewCookieService(e, c, s)
				if err != nil {
					t.Fatalf("unexpected error: %v", err)
				}

				gomock.InOrder(
					s.EXPECT().AmountInStock(ctx).Times(1).Return(cookiesToBuy),
					c.EXPECT().ChargeCard(ctx, "some-token", totalExpectedCost).Times(1).Return(errors.New("your card was declined")),
				)
				err = cs.PurchaseCookies(ctx, cookiesToBuy)
				if err == nil {
					t.Fatalf("expected error, got nil")
				}
				if err.Error() != "your card was declined" {
					t.Fatalf("expected error, got %v", err)
				}
			})
```

</CodeBlockWrapper>

테스트를 실행하면 다음과 같은 에러가 발생한다.

```text
--- FAIL: Test_CookiePurchases/Given_a_user_tries_to_purchase_a_cookie,_we_have_them_in_stock,_but_their_card_gets_declined,_we_return____an_error_to_the_cashier_so_that_we_can_ban_the_customer_from_the_store. (0.00s)
        cookies_test.go:92: expected error, got failed to charge card: some error
```

얼추 보니 코드에서 반환하는 에러 메시지와 테스트에서 기대하는 에러 메시지가 다르다.
코드에서는 에러를 한번 `fmt.Errorf`로 감싸서 반환하고 있다. 따라서 테스트에서 기대하는 에러 메시지를 수정하거나, 코드에서 `fmt.Errorf`를 제거하면 테스트가 성공할 것이다. 코드를 수정하는 것이 더 좋아보이니, 코드를 수정해보자.
이를 반영하여 코드를 수정하고, 다시 테스트를 실행해보자.

```go
	err := c.cardCharger.ChargeCard(ctx, "some-token", cost)
	if err != nil {
		return err
	}
```

이후 테스트를 실행하면 성공할 것이다.

```text
--- PASS: Test_CookiePurchases/Given_a_user_tries_to_purchase_a_cookie,_we_have_them_in_stock,_but_their_card_gets_declined,_we_return____an_error_to_the_cashier_so_that_we_can_ban_the_customer_from_the_store. (0.00s)
```

이제 코드를 리팩토링하는 단계이지만, 달리 리팩토링할 부분이 없으니 생략하고 다음 단계로 넘어간다.

<br>

다음 단계의 테스트는 이메일 전송이 실패했을 때, 어떻게 처리할지에 대한 테스트이다.
먼저 테스트를 작성한다.

```go
	t.Run(`Given a user purchases a cookie and we have them in stock, their card is charged successfully but we
	fail to send an email, we return a message to the cashier so they know can notify the customer that they will not
	get an e-mail, but the transaction is still considered done.`,
			func(t *testing.T) {
				ctrl := gomock.NewController(t)
				e := mocks.NewMockEmailSender(ctrl)
				c := mocks.NewMockCardCharger(ctrl)
				s := mocks.NewMockCookieStockChecker(ctrl)
				ctx := context.Background()

				const cookiesToBuy = 5
				const totalExpectedCost = 250
				cs, err := chapter8.NewCookieService(e, c, s)
				if err != nil {
					t.Fatalf("unexpected error: %v", err)
				}

				gomock.InOrder(
					s.EXPECT().AmountInStock(ctx).Times(1).Return(cookiesToBuy),
					c.EXPECT().ChargeCard(ctx, "some-token", totalExpectedCost).Times(1).Return(nil),
					e.EXPECT().SendEmailReceipt(ctx, "some-email").Times(1).Return(errors.New("failed to send email")),
				)
				err = cs.PurchaseCookies(ctx, cookiesToBuy)
				if err == nil {
					t.Fatalf("expected error, got nil")
				}
				if err.Error() != "failed to send email" {
					t.Fatalf("expected error, got %v", err)
				}
			})
```

테스트를 실행하면 이전 단계와 동일한 에러가 발생한다. 해결 방법도 동일하다.
코드를 수정하거나, 테스트에서 기대하는 에러 메시지를 수정하면 된다. 마찬가지로 코드를 수정하는 것이 더 좋아보이니, 코드를 수정해보자.

```go
	err := c.emailSender.SendEmailReceipt(ctx, "some-email")
	if err != nil {
		return err
	}
```

테스트를 다시 실행하면 성공할 것이다.

<br>

마지막 테스트를 작성해보자.

<CodeBlockWrapper>

```go
	t.Run(`Given someone wants to purchase more cookies than we have in stock we only charge them for the ones we do have`,
		func(t *testing.T) {
			ctrl := gomock.NewController(t)
			e := mocks.NewMockEmailSender(ctrl)
			c := mocks.NewMockCardCharger(ctrl)
			s := mocks.NewMockCookieStockChecker(ctrl)
			ctx := context.Background()

			const cookiesToBuy = 5
			const inStock = 3
			const totalExpectedCost = 150
			cs, err := chapter8.NewCookieService(e, c, s)
			if err != nil {
				t.Fatalf("unexpected error: %v", err)
			}

			gomock.InOrder(
				s.EXPECT().AmountInStock(ctx).Times(1).Return(inStock),
				c.EXPECT().ChargeCard(ctx, "some-token", totalExpectedCost).Times(1).Return(nil),
				e.EXPECT().SendEmailReceipt(ctx, "some-email").Times(1).Return(nil),
			)

			err = cs.PurchaseCookies(ctx, cookiesToBuy)
			if err != nil {
				t.Fatalf("unexpected error: %v", err)
			}
		})
```

</CodeBlockWrapper>

위 테스트를 실행하면 다음과 같이 실패할 것이다.

```text
--- FAIL: Test_CookiePurchases (0.00s)
    --- FAIL: Test_CookiePurchases/Given_someone_wants_to_purchase_more_cookies_than_we_have_in_stock_we_only_charge_them_for_the_ones_we_do_have (0.00s)
        cookies.go:47: Unexpected call to *mocks.MockCardCharger.ChargeCard([context.Background some-token 250]) at /home/junhyuk/Programming/Golang/Golang-DDD/chapter8/cookies.go:47 because:
            expected call at /home/junhyuk/Programming/Golang/Golang-DDD/chapter8/cookies_test.go:145 doesn't match the argument at index 2.
            Got: 250 (int)
            Want: is equal to 150 (int)
        controller.go:137: missing call(s) to *mocks.MockCardCharger.ChargeCard(is equal to context.Background (*context.emptyCtx), is equal to some-token (string), is equal to 150 (int)) /home/junhyuk/Programming/Golang/Golang-DDD/chapter8/cookies_test.go:145
        controller.go:137: missing call(s) to *mocks.MockEmailSender.SendEmailReceipt(is equal to context.Background (*context.emptyCtx), is equal to some-email (string)) /home/junhyuk/Programming/Golang/Golang-DDD/chapter8/cookies_test.go:146
        controller.go:137: aborting test due to missing call(s)
FAIL
exit status 1
FAIL    github.com/jhseoeo/Golang-DDD/chapter8  0.001s
```

남아있는 쿠키 재고가 구매하려는 쿠키 재고보다 적을 때 처리하는 로직을 코드에 작성하지 않았기 때문에 테스트가 실패하는 것이다.
따라서 코드를 수정해보자.

<CodeBlockWrapper>

```go
cookiesInStock := c.cookieStockChecker.AmountInStock(ctx)
	if cookiesInStock == 0 {
		return errors.New("no cookies in stock")
	}
	if cookiesInStock < amountOfCookies {
		amountOfCookies = cookiesInStock
	}
```

</CodeBlockWrapper>

테스트를 다시 실행하면 성공할 것이다.

<br>

이제 모든 테스트 케이스가 통과하므로, `go test -cover` 명령을 실행해보자.

```text
PASS
        github.com/jhseoeo/Golang-DDD/chapter8  coverage: 100.0% of statements
ok      github.com/jhseoeo/Golang-DDD/chapter8  0.002s
```

100% 커버리지를 달성한 것을 확인할 수 있다! 신난다🎉🎉

<br>

다만 지금까지 작성한 테스트 코드에서 궁금증이 좀 생길 수 있다.
얼핏 봐도 상당한 코드 중복이 있다. 일정한 패턴이 보이는데, 적당히 묶어서 함수로 만들거나 하면 좋지 않을까?
이에 대한 대답은, 그래도 된다는 것이다. 실제로 Go에는 Table Test라고 하는 방식이 있어서, 테스트 코드를 더 깔끔하게 작성할 수 있다.

하지만 이 책에서는 테스트 코드가 더 깔끔해지는 것보다는, 테스트 코드가 더 명확하게 보이는 것을 우선시한다.
테스트 코드는 그 자체로 일종의 문서 역할을 하기 때문에, 테스트 코드를 읽는 사람이 테스트 코드를 이해하기 쉽게 작성하는 것이 중요하다고 설명한다.

<br>

아직 안 끝났다ㅠㅠ 아직 구현하지 않은 요구사항이 있다.

코드에는 카드 토큰과 이메일 주소가 하드코딩되어 있는데, 이는 요청할 때 파라미터로 받아오게 될 것이다.
따라서, 함수 정의를 바꿔야 한다.

```go
func (c *CookieService) PurchaseCookies(ctx context.Context, amountOfCookies int, cardToken string, email string) error {
```

하지만 이렇게 변경하고 나면 기존에 작성한 테스트 코드들이 모두 실패할 것이다.
이에 맞게 테스트 코드를 수정해줄 필요가 있다.

<CodeBlockWrapper>

```go
	t.Run(`Given a user tries to purchase a cookie and we have them in stock,
    when they tap their card, they get charged and then receive an email receipt a few moments later.`,
		func(t *testing.T) {
			ctrl := gomock.NewController(t)
			e := mocks.NewMockEmailSender(ctrl)
			c := mocks.NewMockCardCharger(ctrl)
			s := mocks.NewMockCookieStockChecker(ctrl)
			ctx := context.Background()

			const cookiesToBuy = 5
			const totalExpectedCost = 250
			const cardToken = "some-token"
			const email = "some-email"

			cs, err := chapter8.NewCookieService(e, c, s)
			if err != nil {
				t.Fatalf("unexpected error: %v", err)
			}

			gomock.InOrder(
				s.EXPECT().AmountInStock(ctx).Times(1).Return(cookiesToBuy),
				c.EXPECT().ChargeCard(ctx, cardToken, totalExpectedCost).Times(1).Return(nil),
				e.EXPECT().SendEmailReceipt(ctx, email).Times(1).Return(nil),
			)

			err = cs.PurchaseCookies(ctx, cookiesToBuy, cardToken, email)
			if err != nil {
				t.Fatalf("unexpected error: %v", err)
			}
		})
```

</CodeBlockWrapper>

이와 같이 테스트 코드를 수정해주면, 테스트가 다시 성공할 것이다.

<br>

이 정도면 TDD로 개발하는 것에 대한 전반적인 감을 잡을 수 있을 것이다. 다음 단계인 BDD(Behavior-Driven Development)에 대해 알아보자.

<br><br>

## BDD

BDD는 TDD의 확장판같은 개념으로, 엔지니어-도메인 전문가-QA간의 긴밀한 협업을 가능하게 하는 개발 방법론이다.

BDD의 목표는 Domain-Specific Language(DSL)을 통해 더 높은 수준의 추상화를 제공하는 것이며, 이는 테스트로 실행 가능하다.
가장 유명한 BDD 테스트 프레임워크는 [Gherkin](https://cucumber.io/docs/gherkin/)과 [Cucumber](https://cucumber.io/)이다.
Gherkin은 몇 개의 키워드로 이루어진 언어를 제공하며, Cucumber는 이 언어를 읽어 소프트웨어가 예상대로 작동하는지 검증한다.

[`go-bdd` 프레임워크](https://github.com/go-bdd/gobdd)를 활용하여 BDD 테스트를 작성해보자. 먼저, go-bdd를 설치한다.

```bash
go get github.com/go-bdd/gobdd
```

이후 프로젝트 루트 디렉토리에 `features` 디렉토리를 생성하고, `features/add.feature` 파일을 생성한 후 다음과 같이 작성한다.

```gherkin
Feature: Adding numbers
    Scenario: add two numbers together
        When I add 3 and 6
        Then the result should equal 9
```

그리고 `add_test.go` 파일을 생성하여 다음과 같이 작성한다.

<CodeBlockWrapper>

```go
package chapter8

import (
	"github.com/go-bdd/gobdd"
	"testing"
)

func add(t gobdd.StepTest, ctx gobdd.Context, first int, second int) {
	res := first + second
	ctx.Set("result", res)
}

func check(t gobdd.StepTest, ctx gobdd.Context, sum int) {
	received, err := ctx.GetInt("result")
	if err != nil {
		t.Fatal(err)
		return
	}

	if sum != received {
		t.Fatalf("Expected %d, received %d", sum, received)
	}
}

func TestScenarios(t *testing.T) {
	suite := gobdd.NewSuite(t)
	suite.AddStep(`I add (\d+) and (\d+)`, add)
	suite.AddStep(`the result should equal (\d+)`, check)
	suite.Run()
}
```

</CodeBlockWrapper>

위 코드에서 `add` 함수는 `bdd step` 함수인데, 함수 이름이 중요하다.
`add.feature` 파일의 `When I add 3 and 6`이라는 문장을 만나면, `add` 함수가 실행된다.
만약 `add` 함수의 이름을 `sum`으로 변경한다면, `add.feature` 파일을 `When I sum 3 and 6`으로 변경해야 할 것이다.
이후 로직을 수행하고 나중에 `check`에서 불러올 수 있도록 컨텍스트에 저장한다.

`check` 함수는 실질적인 테스트를 수행하는 함수로, 검증은 이 함수에서 이루어진다.
다음으로 테스트 스위트를 생성하고, `add`와 `check` 함수를 등록한다.
이 테스트를 수행한다면 통과할 것이다.

<br>

이와 같이 BDD는 자연어와 유사하여 직관성이 뛰어나지만, 테스트 코드를 작성하는 것이 번거로워진다.
앞선 예제의 경우 비교적 간단하지만, 실제로는 훨씬 복잡한 테스트 코드를 작성해야 할 것이다. 그 코드를 BDD로 작성한다고 생각해 보면 좀 어지러워진다.
도메인 전문가가 BDD를 이해할 수 있고, 자주 의사소통할 수 있다면 BDD를 사용하는 게 괜찮은 선택지일 수 있다.
하지만 그렇지 않다면 그냥 Unit Test를 작성하는 게 더 좋다.

<br><br>

## References

---

<center>

[![Domain-Driven Design with Golang Cover](https://learning.oreilly.com/covers/urn:orm:book:9781804613450/400w/)](https://learning.oreilly.com/library/view/domain-driven-design-with/9781804613450/) <br>
[Matthew Boyle, Domain-Driven Design with Golang』, O'Reilly Media, Inc.](https://learning.oreilly.com/library/view/domain-driven-design-with/9781804613450/)

</center>
