---
title: '마이크로서비스에 DDD 적용하기 (+ wire 사용해보기)'
date: 2023-07-27
excerpt: Applying DDD to a Microservice Application (+ Using wire)
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

이전 포스트에서 모놀리식 아키텍처에 DDD를 적용하는 방법을 알아보았는데, 시스템의 복잡도가 커질수록 마이크로서비스로의 전환은 불가피하다.
마이크로서비스에 DDD를 잘 적용하려면 다른 마이크로서비스와 통신하는 방법을 고려해야 하는데, 이 때 포트와 어댑터 패턴 등 Anti-Corruption Layer를 유용하게 사용할 수 있다.

<br><br>

## 마이크로서비스

마이크로서비스 아키텍처(Microservice Architecture)는 각각의 팀이 저마다 데이터베이스를 가지고 RPC 형태로 통신하는 작은 서비스를 구축하는 형태의 개발 방법론이다.
기술적인 측면 외에도 조직적인 측면에서도 팀이 독립적으로 개발하고 배포할 수 있어서 팀의 생산성을 높일 수 있다는 장점이 있으며, 소프트웨어 뿐 아니라 팀 자체의 확장성도 높일 수 있다.

마이크로서비스는 일반적으로 다음과 같은 특징을 가진다.

- 각각의 서비스는 독립적으로 개발, 배포, 확장될 수 있으며, 다른 서비스의 기능에 영향을 주지 않는다.
  다른 서비스와 코드를 공유하지 않고, RPC를 통해 통신한다.
- 다른 서비스의 성공에 의존하지 않는다. 다른 서비스가 충돌하더라도 그것이 본 서비스의 충돌로 이어져서는 안 된다.
- 서비스는 특정한 문제를 잘 해결하며, 서비스가 확장된다면 더 작은 서비스로 분리될 수 있다.

<br><br>

### 마이크로서비스의 장점

마이크로서비스는 얼핏 보면 참 좋아 보인다! 본 김에 몇가지 장점을 더 살펴보자.

- 각각의 팀이 잘 정의된 컨텍스트 안에서 독립적인 의사결정을 할 수 있어서 팀의 생산성을 높일 수 있다.
- 확장이 유연하다. 서비스 전체를 확장하는 것 뿐만 아니라, 워크로드가 많은 특정 서비스만 확장할 수도 있다.
- 배포가 빨라진다. 전체 서비스의 일부분만 배포되는 만큼 서비스가 작아지고 배포 시간이 줄어든다. 따라서 롤백, 테스트 등이 용이해지며, 더 적합한 배포 전략을 선택할 수 있다.
- 서비스 간의 통신은 RPC를 통해 이루어지기 때문에, 서비스를 작성할 때 언어 또는 프레임워크에 구애받지 않는다.
- 더 탄력적이다. 서비스가 분리되어 있기 때문에, 서비스가 충돌하더라도 그것이 전체 서비스의 충돌로 이어지지 않는다.

<br><br>

### 마이크로서비스의 단점

컴퓨터공학에는 항상 트레이드오프가 있는 법이다. 이번엔 마이크로서비스의 단점을 살펴보자.

- 분산 시스템은 모놀리식보다 관리하기 훨씬 어렵다. 적합한 모니터링 및 로깅 시스템이 구축되지 않으면, 문제를 찾기가 매우 어렵다.
- 마이크로서비스 아키텍처 하에서 작헙하는 개발자는 더 많은 도구와 기술을 익혀야 하며, 서비스간 통신이 늘어나면서 더 많은 오버헤드가 발생한다.
- 서비스가 분리되어 있기 때문에 통합 테스트가 어려워진다.

이러한 단점들로 인해 마이크로서비스 아키텍처가 어디에나 어울리는 만능 솔루션이라고 할 수는 없다.

<br><br>

### 마이크로서비스는 언제 사용해야 할까?

어떤 프로젝트에는 마이크로서비스가 아주 적합할 수 있지만, 어떤 프로젝트에는 적합하지 않을 수도 있다. 마이크로서비스를 사용해야 할지 말지 결정하는 데에는 다음과 같은 기준을 적용할 수 있다.

- 분산 시스템 전문가가 있거나, 그런 전문가를 고용할 수 있는 여력이 있는가?
- 분산 시스템을 적절히 모니터링하고 관리할 수 있는 시스템이 구축되어 있는가? 없다면 구축할 수 있는 여력이 있는가?
- 현재 팀원들이 분산 시스템 플랫폼(쿠버네티스 등)에 대해 익숙한가?
- 팀원들이 CI/CD 파이프라인을 구축하고 관리하는 것에 익숙한가?

결국 이러한 기준들은, 마이크로서비스를 사용하기 위해 충분한 시간과 돈을 투자할 수 있는지 여부를 묻는 것이다.

<br><br>

## 애플리케이션의 요구사항

이전 포스트에서는 카페 결제 애플리케이션에 대한 요구사항을 정리하여 모놀리식 아키텍처로 디자인하였다. 이와 유사하게 이번 포스트에서도 마이크로서비스 아키텍처로 디자인할 애플리케이션의 요구사항을 정리해보자.

여행 비교 웹사이트 회사에서 일하는 당신은, 예산 등 여러 요인에 근거하여 고객에게 여행 장소를 추천하는 서비스를 담당하는 팀, 즉 추천 팀에서 일하고 있다.
다른 팀에서 사용할 수 있게끔 이 추천 서비스를 API로 제공해야 한다.

또한 회사에는 여행업체를 온보딩하고, 비용을 집계하고, 시스템에 정보를 제공하는 파트너쉽 팀이 존재한다.
추천할 정보를 수집하기 위해 파트너쉽 팀의 API를 호출해야 한다.
파트너쉽 팀은 다음과 같은 API 문서를 작성해 두었다.

```text
"If you make a GET request to /partnerships?location=$country&from=$date&to=$date we will return all the hotels in that country on those dates.
$country must be in Alpha 3 ISO-3166 format and the date must be ISO-8601 format. You can expect one of the following responses:
400. This means you made a bad request, and your parameters aren't in the correct format or were missing.
401. You are not authorized. You must pass an agreed password in the Authorization header field"
200. This means your request was successful. You can expect the following response:
{
  "availableHotels": [
    {
            "name": "hotel1_name",
      "priceInUSDPerNight": 500
    },
    {
      "name": "hotel2_name",
      "priceInUSDPerNight": 300
    }
  ]
}
There is no pagination, so if there are lots of hotels, the response could be slow.
This API can be a little temperamental so fails sometimes; we are not sure why. If you are going to call it, please prepare for intermittent failure. Due to this, we are going to rebuild the system soon, so don't recommend being too coupled to this specific API. If it fails, you will receive a 500 response with no body.
```

본 문서로부터 파라미터의 포맷, 가능한 응답의 종류, 그리고 간혹 요청이 실패할 수도 있다는 점까지 알 수 있다.
OpenAPI 문서는 아니지만 이 정도면 꽤 쓸만한 문서이다.

이러한 내용과 문서를 참고해서, 추천 서비스를 구현해보자.

<br><br>

## 추천 서비스 구축

먼저, 파트너쉽 팀의 서비스는 이미 작성되어 있다고 가정할 것이다. 이렇게 파트너쉽 팀의 서비스를 별도 폴더에 작성해두자.

```bash
.
├── partnerships
│   └── main.go
├── Dockerfile
├── docker-compose.yml
└── go.mod
```

`partnerships/main.go` 파일에는 다음과 같은 내용이 들어있다. 따라 치지 말고 복붙하자ㅎㅎ

<CodeBlockWrapper>

```go
package main

import (
	"encoding/json"
	"log"
	"math/rand"
	"net/http"
	"time"

	"github.com/gorilla/mux"
)

type Res struct {
	AvailableHotels []struct {
		Name               string `json:"name"`
		PriceInUSDPerNight int    `json:"priceInUSDPerNight"`
	} `json:"availableHotels"`
}

func main() {
	rand.Seed(time.Now().UnixNano())
	min := 1
	max := 10

	sampleRes := Res{AvailableHotels: []struct {
		Name               string `json:"name"`
		PriceInUSDPerNight int    `json:"priceInUSDPerNight"`
	}{
		{
			Name:               "some hotel",
			PriceInUSDPerNight: 300,
		},
		{
			Name:               "some other hotel",
			PriceInUSDPerNight: 30,
		},
		{
			Name:               "some third hotel",
			PriceInUSDPerNight: 90,
		},
		{
			Name:               "some fourth hotel",
			PriceInUSDPerNight: 80,
		},
	}}

	b, err := json.Marshal(sampleRes)
	if err != nil {
		log.Fatal(err)
	}

	r := mux.NewRouter()
	r.
		Path("/partnerships").
		HandlerFunc(func(writer http.ResponseWriter, request *http.Request) {
			ran := rand.Intn(max - min + 1)
			if ran > 7 {
				writer.WriteHeader(http.StatusInternalServerError)
				return
			}
			writer.WriteHeader(http.StatusOK)
			_, _ = writer.Write(b)
		})

	log.Println("running")
	if err := http.ListenAndServe(":3031", r); err != nil {
		log.Fatal(err)
	}
}
```

</CodeBlockWrapper>

그 외에도 `Dockerfile`, `docker-compose.yml` 등이 있는데, [여기](https://github.com/PacktPublishing/Domain-Driven-Design-with-GoLang/tree/main/chapter6)에서 확인할 수 있다.

코드에서 나타나듯 파트너쉽 서비스는 위 문서의 포맷대로 응답을 보내는 API이며, 30%의 확률로 500 에러를 보낸다. `docker-compose up` 명령어로 서비스를 실행할 수 있다.

실행 이후, curl을 날려서 파트너쉽 서비스가 잘 동작하는지 확인해보자.

```bash
curl --location --request GET 'http://localhost:3031/partnerships?location=UK'
```

요청을 날리면 다음과 같은 응답을 받을 수 있다. 한편 10번 요청을 날리면 얼추 3번 정도는 아무런 응답 데이터 없이 500 에러를 받을 것이다.

```json
{
	"availableHotels": [
		{ "name": "some hotel", "priceInUSDPerNight": 300 },
		{ "name": "some other hotel", "priceInUSDPerNight": 30 },
		{ "name": "some third hotel", "priceInUSDPerNight": 90 },
		{ "name": "some fourth hotel", "priceInUSDPerNight": 80 }
	]
}
```

<br>

이제 본격적으로 추천 서비스를 구현해보자. 다음과 같이 `recommendation` 폴더를 만들고 하위에 `cmd`와 `internal` 폴더를 만든다.

```bash
.
├── partnerships
│   └── main.go
├── recommendation
│   ├── cmd
│   └── internal
├── Dockerfile
├── docker-compose.yml
├── go.mod
└── go.sum
```

`cmd` 폴더는 `main.go` 등 메인 바이너리 파일을 저장할 폴더이고, `internal` 폴더는 추천 서비스의 핵심 로직을 저장할 폴더이다. 이전 포스트에서 본 패키지 구조와 크게 다르지 않다.

<br>

`internal` 폴더에 또 다시 `recommendation` 폴더를 만들고, 그 아래 `recommendation.go` 파일을 생성하여 다음과 같이 도메인 모델을 정의한다.

```go
package recommendation

import "time"

type Money = int

type Recommendation struct {
	TripStart time.Time
	TripEnd   time.Time
	HotelName string
	Location  string
	TripPrice Money
}
```

도메인 모델을 정의하는 데 도메인 언어가 적절히 사용된 것을 알 수 있다. 이어서 파트너쉽 서비스를 사용하기 위한 인터페이스를 정의한다.

```go
type Option struct {
	HotelName     string
	Location      string
	PricePerNight Money
}

type AvailabilityGetter interface {
	GetAvailability(ctx context.Context, tripStart time.Time, tripEnd time.Time, location string) ([]Option, error)
}
```

이 때 이 인터페이스와 파트너쉽 서비스 구현은 전혀 결합되어 있지 않다.
추후 의존성 주입을 통해 구현체를 주입받을 것이며, 파트너쉽 서비스가 변경되더라도 추천 서비스는 영향을 받지 않게 하기 위함이다.

이제 이 인터페이스를 사용하는 서비스를 만들어보자.

```go
type Service struct {
	availabilityGetter AvailabilityGetter
}

func NewService(availabilityGetter AvailabilityGetter) (*Service, error) {
	if availabilityGetter == nil {
		return nil, errors.New("availabilityGetter must not be nil")
	}

	return &Service{availabilityGetter: availabilityGetter}, nil
}
```

이어서 `Get` 메소드를 구현한다. `Get` 메소드는 `recommendation` 패키지에 있기 때문에 호출시 `recommendation.Get`으로 호출할 수 있으며, 직관적으로 어떤 기능을 하는지 알 수 있다.

```go
func (svc *Service) Get(ctx context.Context, tripStart time.Time, tripEnd time.Time, location string, budget Money) (*Recommendation, error) {
	switch {
	case tripStart.IsZero():
		return nil, errors.New("tripStart must not be zero")
	case tripEnd.IsZero():
		return nil, errors.New("tripEnd must not be zero")
	case location == "":
		return nil, errors.New("location must not be empty")
	}

	...
}
```

도메인 언어에 따르면 `tripStart`, `tripEnd`, `location`은 필수값이다. 따라서 파라미터 값을 먼저 검증해야 한다. 이어서 파트너쉽 서비스를 호출하여 응답을 받는다.

```go
	opts, err := svc.availabilityGetter.GetAvailability(ctx, tripStart, tripEnd, location)
	if err != nil {
		return nil, fmt.Errorf("error getting availability: %w", err)
	}

	...
```

이처럼 `availabilityGetter`의 정확한 구현을 아직 작성하지 않았더라도, 추상화된 인터페이스를 사용하여 서비스 작성을 계속 진행할 수 있다.

<CodeBlockWrapper>

```go
	tripDuration := math.Round(tripEnd.Sub(tripStart).Hours() / 24)
	var lowestPrice = math.MaxFloat64
	var cheapestTrip *Option
	for _, opt := range opts {
		price := float64(opt.PricePerNight) * tripDuration
		if price > float64(budget) {
			continue
		}
		if price < lowestPrice {
			lowestPrice = price
			cheapestTrip = &opt
		}
	}

	if cheapestTrip == nil {
		return nil, errors.New("no trips available")
	}

	return &Recommendation{
		TripStart: tripStart,
		TripEnd:   tripEnd,
		HotelName: cheapestTrip.HotelName,
		Location:  cheapestTrip.Location,
		TripPrice: Money(lowestPrice),
	}, nil
}
```

</CodeBlockWrapper>

이와 같이 여행 기간과 예산이 주어졌을 때, 가장 저렴한 여행 옵션을 추천하는 기능을 구현하였다. 이는 작은 서비스로, 제한된 컨텍스트 안에서 많은 도메인 언어를 사용하였다.

<br><br>

## 어탭터 패턴 사용

앞선 포스트에서 Anti-Corruption Layer에 대해 다룬 내용이 있다. Anti-Corruption Layer, 즉 어댑터 패턴은 서로 다른 두 제한된 컨텍스트를 디커플링하기 위해 사용된다.

이 서비스에도 `AvailabilityGetter` 인터페이스를 충족시키는 어댑터 레이어를 추가하려 한다. `internal/recommendation` 폴더에 `adapter.go` 파일을 생성하고 다음과 같이 작성한다.

```go
package recommendation

type PartnershipAdapter struct {
	client *http.client
	url    string
}

func NewPartnershipAdapter(client *http.Client, url string) (*PartnershipAdapter, error) {
	if client == nil {
		return nil, errors.New("client is required")
	}
	if url == "" {
		return nil, errors.New("url is required")
	}
	return &PartnershipAdapter{
		client: client,
		url:    url,
	}, nil
}
```

많이 봐온 코드이다. 이제 `AvailabilityGetter` 인터페이스를 구현하기 위해 `GetAvailability` 메소드를 작성한다.

<CodeBlockWrapper>

```go
func (p PartnershipAdapter) GetAvailability(ctx context.Context, tripStart time.Time, tripEnd time.Time, location string) ([]Option, error) {
	from := fmt.Sprintf("%d-%d-%d", tripEnd.Year(), tripEnd.Month(), tripEnd.Day())
	to := fmt.Sprintf("%d-%d-%d", tripStart.Year(), tripStart.Month(), tripStart.Day())
	url := fmt.Sprintf("%s/partnerships?from=%s&to=%s&location=%s", p.url, from, to, location)
	res, err := p.client.Get(url)
	if err != nil {
		return nil, fmt.Errorf("failed to call partnership service: %w", err)
	}
	defer res.Body.Close()
	if res.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("bad request to partnership service: %d", res.StatusCode)
	}

	var pr partnershipResponse
	err = json.NewDecoder(res.Body).Decode(&pr)
	if err != nil {
		return nil, fmt.Errorf("failed to decode partnership response: %w", err)
	}

	opts := make([]Option, len(pr.AvailableHotels))
	for i, p := range pr.AvailableHotels {
		opts[i] = Option{
			HotelName:     p.Name,
			Location:      location,
			PricePerNight: Money(p.PriceInUSDPerNight),
		}
	}
	return opts, nil
}
```

</CodeBlockWrapper>

`GetAvailability` 메소드는 파트너쉽 서비스의 엔드포인트에 GET 요청을 날려서 필요한 정보를 받아온다.
단 파트너쉽 서비스는 실패할 수 있기 때문에 적절한 처리 방법이 필요한데, 이는 조금 뒤에 다룰 것이다.

요청이 성공적이었다고 가정하고, 요청의 응답을 json으로 unmarshal할 필요가 있다. 이를 위해 `partnershipResponse` 구조체를 정의하였다. `partnershipResponse`의 정의는 파트너쉽 팀에서 제공받은 문서를 참고하여 작성할 수 있다. 그 후 unmarshal된 응답에 대해 이터레이션을 돌며, `[]Options` 타입으로 변환하여 반환한다.

<br><br>

## 서비스 공개하기

---

이제 다른 마이크로서비스나 사용자 인터페이스에서 우리 서비스를 호출하여 사용할 수 있게끔, 서비스를 API로 공개해야 한다.
REST API 외에도 gRPC 등 여러 방법이 있으나, 여기서는 REST API를 사용한다.

먼저, API의 포맷을 정의해야 한다. 요청 포맷은 다음과 같다.

```text
/recommendation?location=$country?from=$date&to=$date&budget =$budget
```

그리고 응답 포맷은 다음과 같다.

```json
{
	"hotelName": "hotel Name",
	"totalCost": {
		"cost": 300,
		"currency": "USD"
	}
}
```

이 때 우리의 응답 포맷이 파트너쉽 서비스의 응답 포맷과 다를 수 있는데, 이는 크게 상관없다.
우리가 파트너쉽 서비스를 호출할 때 어댑터 레이어를 통해 응답을 변환했던 것처럼, 다른 서비스에서도 우리의 응답 포맷을 어댑터 레이어를 통해 원하는 포맷으로 변환할 수 있기 때문이다.

요청과 응답 포맷이 정해졌으니. 다음으로 HTTP 핸들러를 정의해보자 `recommendation` 폴더에 `handler.go` 파일을 생성하고 다음과 같이 작성한다.

<CodeBlockWrapper>

```go
package recommendation

import (
	"errors"
	"github.com/gofiber/fiber/v2"
)

type Handler struct {
	svc *Service
	app *fiber.App
}

func NewHandler(svc *Service, app *fiber.App) (*Handler, error) {
	if svc == nil {
		return nil, errors.New("service must not be empty")
	}
	if app == nil {
		return nil, errors.New("fiber app must not be nil")
	}

	h := &Handler{svc: svc, app: app}

	app.Get("/recommendation", h.getRecommendation)

	return h, nil
}
```

</CodeBlockWrapper>

이 핸들러는 엔드포인트를 정의해서 요청을 처리하는 역할일 뿐, 비즈니스 로직을 수행하지는 않는다. 따라서 비즈니스 로직을 수행할 서비스를 필드로 가지고 있다.

fiber 프레임워크를 사용하고 있기 때문에, `fiber.App` 타입의 인스턴스를 필드로 가지고 있다.
이 인스턴스는 `NewHandler` 함수에서 전달받으며, `NewHandler` 함수에서는 `/recommendation` 엔드포인트에 `getRecommendation` 핸들러를 등록한다.

다음으로, 위에서 정의한 응답 포맷을 구조체로 정의한다.

```go
type GetRecommendationResponse struct {
	HotelName  string `json:"hotelName"`
	TotalConst struct {
		Cost     int64  `json:"cost"`
		Currency string `json:"currency"`
	} `json:"totalCost"`
}
```

이 구조체는 응답을 JSON으로 Marshal 및 Unmarshal하기 위해 필요하다.

<br>

다음으로,

<CodeBlockWrapper>

```go
func (h Handler) getRecommendation(ctx *fiber.Ctx) error {
	location := ctx.Query("location")
	_from := ctx.Query("from")
	_to := ctx.Query("to")
	_budget := ctx.Query("budget")
	if location == "" || _from == "" || _to == "" || _budget == "" {
		return ctx.Status(400).JSON(fiber.Map{
			"error": "missing required query parameter",
		})
	}

	const expectedFormat = "2006-01-02"
	from, err := time.Parse(expectedFormat, _from)
	if err != nil {
		return ctx.Status(400).JSON(fiber.Map{
			"error": "invalid from date",
		})
	}
	to, err := time.Parse(expectedFormat, _to)
	if err != nil {
		return ctx.Status(400).JSON(fiber.Map{
			"error": "invalid to date",
		})
	}
	budget, err := strconv.ParseInt(_budget, 10, 64)
	if err != nil {
		return ctx.Status(400).JSON(fiber.Map{
			"error": "invalid budget",
		})
	}

	res, err := h.svc.Get(ctx.UserContext(), from, to, location, Money(budget))
	if err != nil {
		return ctx.Status(500).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	return ctx.Status(200).JSON(GetRecommendationResponse{
		HotelName: res.HotelName,
		TotalConst: struct {
			Cost     int64  `json:"cost"`
			Currency string `json:"currency"`
		}{
			Cost:     int64(res.TripPrice),
			Currency: "USD",
		},
	})
}
```

</CodeBlockWrapper>

핸들러 메소드의 최상단부에서는 요청의 쿼리 파라미터를 읽어오고, 쿼리 파라미터가 비어있는지 검사한다. 쿼리 파라미터가 하나라도 비어있다면 400 에러를 반환한다.
이후 쿼리 파라미터를 파싱하는데, `from`과 `to`는 `time.Time` 타입으로, `budget`는 `int64` 타입으로 파싱한다. 마찬가지로, 파싱에 실패하면 400 에러를 반환한다.
이는 일종의 어댑터 레이어 역할을 수행하며, 유효성 검사를 통해 우리의 비즈니스 로직을 보호하는 역할을 한다.

다음으로, 서비스를 호출한다. 만약 서비스 호출에 실패하면 500 에러를 반환하며, 성공하면 응답 포맷에 맞게 JSON으로 marshal하여 반환한다.

코드는 좀 길지만, 핸들러의 동작 자체는 꽤 단순하다. 쿼리 파라미터를 읽어오고, 파싱하고, 서비스를 호출하고, 응답을 반환하는 것 뿐이다.

<br>

이제 이 핸들러를 http 프레임워크에 등록하는 작업이 필요한데, 책 원본에서는 `gorilla/mux`를 사용하지만 여기서는 `fiber`를 사용하기 때문에 코드가 조금 달라지긴 한다.

따라서 이번 포스트에서는 전반적인 의존성 주입을 `wire` 라이브러리를 사용하여 처리해보려 한다.

<br><br>

## wire를 사용한 의존성 주입

---

일단, Golang은 인터페이스를 통해 언어 자체에서 의존성 주입을 굉장히 잘 지원하는 편이다.
그래서 외부 라이브러리를 사용하는 것에 꽤 회의를 느끼는 사람들도 많다.

외부 라이브러리를 통한 의존성 주입의 장점은 복잡한 의존성 주입 코드를 간단하게 만들어준다는 것인데,
규모가 작은 서비스나 이번 포스트와 같은 마이크로서비스에서는 애초에 복잡한 의존성 주입 코드가 필요하지 않으니 실제로 큰 장점이 되지는 않는다.

본인도 마이크로 서비스를 개발할 때는 외부 라이브러리를 사용하지 않고 인터페이스를 통해 의존성 주입을 처리할 것 같다. 다만, 여기서 굳이 `wire`를 사용하는 것은 그냥 연습삼아 써보기 위해서이다 헤헿

<br>

`wire`는 컴파일 타임에 의존성 주입을 처리해주는 라이브러리이다.

컴파일 타임에 의존성 주입을 처리하기 때문에, 의존성 문제로 인해 발생할 수 있는 런타임 에러를 컴파일 타임에 미리 잡아낼 수 있다는 장점이 있다고 한다.

또한 reflection을 사용하지 않으며, 런타임에 의존성 주입을 처리하는 것보다 훨씬 빠르다고 한다.
물론 그게 유의미한 속도차이를 내는지는 잘 모르겠지만, 아무튼 그렇다고 한다.

<br>

먼저, `wire` 명령어를 위해 라이브러리를 설치한다.

```bash
go install github.com/google/wire/cmd/wire@latest
```

그리고 작업 디렉토리에 wire 라이브러리를 설치한다.

```bash
go get github.com/google/wire
```

이후, wire를 사용하기 위해 `wire.go` 파일을 생성하고 다음과 같이 작성한다.

<CodeBlockWrapper>

```go
// +build wireinject

package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/google/wire"
	"github.com/jhseoeo/Golang-DDD/chapter6/recommendation/internal/recommendation"
	"net/http"
)

func newHttpClient() (*http.Client, error) {
	return &http.Client{}, nil
}

func InitializeRecommendationHandler(url string, app *fiber.App) (*recommendation.Handler, error) {

	wire.Build(
		wire.Bind(new(recommendation.AvailabilityGetter), new(*recommendation.PartnershipAdapter)),
		newHttpClient,
		recommendation.NewPartnershipAdapter,
		recommendation.NewService,
		recommendation.NewHandler,
	)

	return nil, nil
}
```

</CodeBlockWrapper>

아무튼 이와 같이 작성 후, `wire` 명령어를 실행하면 `wire_gen.go` 파일이 생성된다.
내 경우 main 패키지의 위치가 `./recommendation/cmd`에 있기 때문에 다음과 같은 명령어를 사용했다.

```bash
wire ./recommendation/cmd
```

생성된 `wire_gen.go` 파일을 보면, `InitializeRecommendationHandler` 함수가 생성된 것을 확인할 수 있다.

<CodeBlockWrapper>

```go
// Code generated by Wire. DO NOT EDIT.

//go:generate go run github.com/google/wire/cmd/wire
//go:build !wireinject
// +build !wireinject

package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/jhseoeo/Golang-DDD/chapter6/recommendation/internal/recommendation"
	"net/http"
)

// Injectors from wire.go:

func InitializeRecommendationHandler(url string, app *fiber.App) (*recommendation.Handler, error) {
	client, err := newHttpClient()
	if err != nil {
		return nil, err
	}
	partnershipAdapter, err := recommendation.NewPartnershipAdapter(client, url)
	if err != nil {
		return nil, err
	}
	service, err := recommendation.NewService(partnershipAdapter)
	if err != nil {
		return nil, err
	}
	handler, err := recommendation.NewHandler(service, app)
	if err != nil {
		return nil, err
	}
	return handler, nil
}

// wire.go:

func newHttpClient() (*http.Client, error) {
	return &http.Client{}, nil
}
```

</CodeBlockWrapper>

이렇게 의존성 주입을 알아서 얍얍 다 해준다.

<br>

이제 생성된 `wire_gen.go` 파일을 `main.go` 파일에서 import하고, `InitializeRecommendationHandler` 함수를 사용하면 된다.

<CodeBlockWrapper>

```go
package main

import "github.com/gofiber/fiber/v2"

const ServiceAddr = ":3030"
const PartnershipsServiceUrl = "http://localhost:3031"

func main() {
	app := fiber.New()
	_, err := InitializeRecommendationHandler(PartnershipsServiceUrl, app)
	if err != nil {
		panic(err)
	}
}
```

</CodeBlockWrapper>

다만 써보고 나니 그냥 직접 의존성 주입을 하는 것이 더 편한 것 같다. 뭔가 추가적인 지식이 필요한 것에 비해, 그렇게까지 큰 메리트를 가져다주지는 않는 느낌..?

<br><br>

## 서비스 열고 실행해보기

---

`main.go` 파일을 다음과 같이 수정한다.

<CodeBlockWrapper>

```go
package main

import "github.com/gofiber/fiber/v2"

const ServiceAddr = ":3030"
const PartnershipsServiceUrl = "http://localhost:3031"

func main() {
	app := fiber.New()
	_, err := InitializeRecommendationHandler(PartnershipsServiceUrl, app)
	if err != nil {
		panic(err)
	}

	err = app.Listen(ServiceAddr)
	if err != nil {
		panic(err)
	}
}
```

</CodeBlockWrapper>

fiber의 `app.Listen()`은 지정된 주소로 서버를 여는 함수이다.
이제 파트너쉽 서비스를 실행하고, 추천 서비스를 실행하면 된다.

```bash
docker-compose up -d
go run ./recommendation/...
```

<br>

이제 curl을 찍어서 추천 서비스가 잘 동작하는지 확인해보자.

```bash
curl --location --request GET 'http://localhost:3030/recommendation?location=UK&from=2022-09-01&to=2022-09-08&budget=5000'
```

호출 결과는 다음과 같다.

```json
{ "hotelName": "some fourth hotel", "totalCost": { "cost": 210, "currency": "USD" } }
```

근데 파트너쉽 서비스가 일정 확률로 실패하는 경우가 있었다. 이 경우 호출 결과는 이렇게 된다.

```json
{ "error": "error getting availability: bad request to partnership service: 500" }
```

<br><br>

## References

---

<center>

[
<Image alt="Domain-Driven Design with Golang Cover" src="https://learning.oreilly.com/covers/urn:orm:book:9781804613450/400w/"/>
](https://learning.oreilly.com/library/view/domain-driven-design-with/9781804613450/) <br>
[Matthew Boyle, Domain-Driven Design with Golang』, O'Reilly Media, Inc.](https://learning.oreilly.com/library/view/domain-driven-design-with/9781804613450/)

</center>
