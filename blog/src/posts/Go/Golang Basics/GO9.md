---
title: 모듈, 패키지, 임포트
date: 2022-08-24
excerpt: Modules, Packages, Imports
categories:
  - 'Golang'
  - 'Basic Golang'
coverImage: '/post_img/Go/Golang_basics/cover.png'
coverWidth: 16
coverHeight: 9
indexed: false
exposed: true
---

<script>
  import Image from '$lib/components/Image.svelte';
</script>

<br>

본 글은 Golang을 공부하며 주요 내용이라 생각되는 것들을 기록해둔 자료이며, Ubuntu 22.04 LTS 기준으로 작성되었습니다.

<br><br>

## Repositories, Modules, Packages

---

Go의 라이브러리 관리는 레포지토리, 모듈, 패키지, 이렇게 세 가지의 개념을 기반으로 한다.
레포지토리는 프로젝트의 소스 코드가 저장되는 버전 컨트롤 시스템을 의미한다.
모듈은 Go 라이브러리나 어플리케이션의 루트이며, 레포지토리에 저장된다.
모듈은 한 개 이상의 패키지로 구성되며, 패키지는 모듈을 구성하고 구조를 형성한다.

> 레포지토리에 한 개 이상의 모듈을 저장할 수 있지만 권장되지 않는다. 모듈 안의 모든 것들은 버전이 기록되기 때문이다.
> 두 개 이상의 모듈을 한 레포지토리에서 관리할 경우, 서로 다른 프로젝트의 버전들이 한 레포지토리에서 기록됨을 의미한다. 이는 상당히 비효율적이다.

이전 포스트에서는 스탠다드 라이브러리 밖의 패키지의 코드들을 사용할 수 있었다.
하지만 이제부터는 우리의 프로젝트가 모듈임을 선언할 필요가 있다.

모든 모듈은 고유한 식별자를 가진다(Java와 달리, Go에서는 반드시 Unique해야 할 필요는 없는 것 같다).
일반적으로는 모듈이 저장되는 레포지토리의 주소를 사용한다.
예를 들어, 나의 `ASDFDSA`라는 이름의 모듈이 깃허브에 저장된다면, `github.com/jhseoeo/ASDFDSA`와 같은 식이다.

<br><br>

## go.mod

---

루트 디렉토리에 유효한 _go.mod_ 파일이 존재한다면, Go 소스 코드들은 모듈이 된다.
일반적으로 파일을 직접 생성하기보단 _go mod_ 명령어를 통해 모듈을 관리한다.

`go mod init [MODULE_PATH]`를 입력하면 현재 디렉토리를 보듈의 루트 디렉토리로 설정하는 _go.mod_ 파일이 생성되며, `[MODULE_PATH]`는 식별자가 된다.
module path는 대소문자를 구분하지만, 소문자만 사용하는 것이 일반적이다.

_go.mod_ 파일의 내부가 어떻게 생겼는지 확인해 보자.

```makefile
module github.com/learning-go-book/money

go 1.15

require (
    github.com/learning-go-book/formatter v0.0.0-20200921021027-5abc380940ae
    github.com/shopspring/decimal v1.2.0
)
```

모든 _go.mod_ 파일은 `module` 선언으로 시작한다.
`module` 선언은 `module`이라는 단어와 unique module path로 이루어져 있다.

그 다음에는 호환 가능한 go의 최소 버전이 명시되어 있다.

그 다음, `require` 영역에 의존성을 갖는 모듈들과 최소 버전들이 표시되며, 해당 버전들의 의미는 이후 다룰 예정이다.
모듈 내에 의존성을 갖는 다른 모듈이 없다면, `require` 영역을 생략한다.

`replace`와 `exclude` 영역은 선택적으로 사용된다.
`replace` 영역은 종속되는 모듈의 위치를 다시 정의할 때 사용되며,
`exclude` 영역은 특정 버전의 모듈이 사용되는 것을 방지한다.

<br><br>

## Building Packages

---

모듈을 생성하는 법을 알았으니, 패키지를 사용하여 코드를 구성해보자.
먼저 `import`가 어떻게 동작하는 지 알아보고, 패키지의 생성과 구성, Go의 패키지에 대한 기능 몇 개를 알아볼 것이다.

### Imports and Exports

Go의 `import`문은 다른 패키지에서 export된 상수, 변수, 함수, 타입에 접근할 수 있게 해준다.
`import`문 없이 다른 패키지의 export된 식별자(변수, 상수, 함수, 타입, 메소드, 필드값 등)에 접근할 수는 없다.

그렇다면 Go에서 어떻게 식별자들을 export할까?
Go에서는 특별한 키워드를 사용하지 않고, Capitalization된 package-level의 식별자들이 export된다.
다시 <span style="background-color: #FFF5B1">첫 글자가 대문자로 시작하는 식별자는 export</span>되는 것이다.
반대로, 첫 글자가 소문자로 시작하는 식별자들은 이들이 선언된 패키지 안에서만 접근할 수 있다.

export하는 모든 것들은 패키지 API의 일부이다.
어느 식별자를 export하기 전에, 그것을 사용자에게 노출시킬 것인지 확실히 결정해야 한다.
export된 식별자들에 대해 문서를 작성하고, major version change를 하지 않는 이상 이전 버전에도 호환이 가능하도록 유지해야 한다.

### Creating and Acessing a Package

Go에서 패키지를 생성하는 건 생각보다 어렵지 않다.

먼저, `go mod init` 명령어를 사용하여 모듈을 생성해주자.

```bash
go mod init github.com/learning-go/9/package_example
```

이렇게 하면 _go.mod_ 파일이 생성되는데, 파일의 내용은 아래와 같을 것이다.

```makefile
module github.com/learning-go/9/package_example

go 1.18
```

이로써 *go.mod*가 있는 폴더는 모듈의 루트 디렉토리가 되었다.
이제 루트 디렉토리에 _math_ 폴더를 생성하고, 거기에 _math.go_ 파일을 생성하여 아래와 같이 작성한다.

```go
package math

func Double(a int) int {
	return a * 2
}
```

주목할 점은 앞서 언급했듯 함수의 이름이 대문자로 시작한다는 점,
그리고 첫 번째 줄의 `package` 키워드 이후 오는 패키지 이름이 지금까지 보았던 `main`이 아닌 `math`라는 점이다.

<br>

마찬가지로, 루트 디렉토리에 _formatter_ 폴더를 생성하고, 거기에 _formatter.go_ 파일을 생성하여 아래와 같이 작성한다.

```go
package print

import "fmt"

func Format(num int) string {
	return fmt.Sprintf("The number is %d", num)
}
```

위 예제의 경우 _formatter_ 디렉토리에 있지만 패키지의 이름은 `formatter`가 아닌 `print`이다.
이에 대해서는 나중에 이야기해보자.

<br>

마지막으로, 루트 디렉토리에 _main.go_ 파일을 생성한다. 그러면 전체 모듈의 디렉토리 구조는 아래와 같을 것이다.

<center>

<Image alt="사진" src="/post_img/Go/Golang_basics/GO9/1.PNG"/>

</center>

<br>

*main.go*의 내용은 아래와 같이 작성한다.

```go
package main

import (
	"fmt"

	"github.com/learning-go/9/package_example/formatter"
	"github.com/learning-go/9/package_example/math"
)

func main() {
	num := math.Double(2)
	output := print.Format(num)
	fmt.Println(output)
}
```

*main.go*의 패키지명은 이전에 우리가 봐왔듯 `main`이다. 패키지명 `main`의 의미에 대해서는 나중에 알아보자.

`package`절 이후 세 개의 패키지를 import하는 `import`절이 있다.
`fmt`는 많이 import하였으니 제쳐놓고, 나머지 두 개는 다소 낯설지만 앞서 정의한 `formatter`와 `math`이다.
이렇게 표준 라이브러리가 아닌, 모듈 안의 패키지들을 import할 때는 *import path*를 명시해주어야 한다.

*import path*는 *module path*에 패키지의 경로를 더하여 만든다.
위 예제의 경우, *module path*는 `github.com/learning-go/9/package_example`까지이며, 패키지의 경로는 각각 `/formatter`와 `/math`이다.

패키지를 import할 때 상대경로를 사용할 수 있긴 하지만, 권장되지 않는다.
절대경로를 사용하면 어떤 패키지를 import하는지 명확해지며, 더 쉽게 리팩토링할 수 있게 된다.
반면 상대경로는 불편한 점이 많은데, 특정 파일의 경로를 수정하면 상대경로로 작성된 `import`문도 수정해주어야 한다.
그리고 다른 모듈의 패키지를 사용하려면, 반드시 절대경로를 사용해야 한다.

패키지를 import하였지만 해당 패키지에서 export된 식별자를 한 개도 사용하지 않았다면 컴파일 에러가 발생한다.
이 때문에 Go가 생성하는 바이너리 파일에는 실제로 사용되는 코드만 포함된다.

<br>

*main.go*를 실행해보자.

```bash
The number is 4
```

`math` 패키지에서 불러온 `Double()` 함수를 호출할 때, 함수 앞에 패키지명을 prefix로 붙여주었다.
이는 우리가 앞서 사용했던 `fmt.Println()` 등의 함수에서도 동일하였으니, 낯설진 않을 것이다.

`Format()` 함수는 `github.com/learning-go/9/package_example/formatter`에서 import하였지만 `print`라는 패키지명이 붙었다.
이 `print`라는 패키지명은 _formatter.go_ 안의 `package`절에서 붙였던 것이다.
한 디렉토리 안의 Go 파일들의 `package`절은 반드시 동일해야 하며,
패키지의 이름은 import한 경로가 아니라 `package`절에 붙인 이름에 따라 결정된다.

패키지명과 디렉토리명이 다르면 패키지명을 확인하기 어려울 수 있기 때문에, 일반적으로 패키지명과 디렉토리명을 일치시키는 게 국룰이다.
다만 패키지명과 디렉토리명을 다르게 해야 하는 몇 가지 상황이 있다.

첫 번째는 `main`으로, `main`은 보통 루트 디렉토리에 위치하며, 프로그램의 시작점이 되는 특별한 패키지명이다.
`main` 패키지는 import하거나 할 수 없다.

두 번째는 드문 경우이긴 하지만, 디렉토리명이 Go 식별자로 사용할 수 없는 문자를 포함하는 경우이다.
다만 이러한 경우에는 디렉토리명을 패키지명과 다르게 설정하는 것보단 그냥 디렉토리명에 그런 문자를 안 집어넣는 게 낫다.

마지막 경우는 디렉토리를 사용하여 버전 관리를 하는 경우이다. 이는 나중에 확인할 예정이다.

<br><br>

### Naming Packages

패키지명을 짓는 것에는 한 가지 대전제가 있는데, 패키지명은 패키지 내부의 것들을 나타낼 수 있는 이름이어야 한다.
이를 상기시키면서, 패키지명을 짓는 몇 가지 규칙들에 대해 알아보자.

먼저, 패키지명은 구체적이어야 한다.
`util` 같은 패키지명보다는, 해당 패키지가 어떤 기능을 제공하는 지 설명할 수 있는 패키지명으로 설정하는 것이 좋다.
가령 `ExtractNames()`나 `FormatNames()` 같은 함수를 `util`이라는 패키지에 둔다면, 별로 좋지 않은 선택이다.
`ExtractNames()`나 `FormatNames()`를 쓸 때마다 참조되는 `util`이라는 패키지명은 함수들이 어떤 일을 하는지에 대해 어떠한 정보도 제공하지 않는다.

보다 적절한 방식은 `ExtractNames()`의 경우 `extract` 패키지의 `Names()` 함수로,
`FormatNames()`는 `format` 패키지의 `Names()` 함수로 변경하는 것이다.
이렇게 할 경우 각각 `extract.Names()` 및 `foormat.Names()`로 호출할 수 있으며,
함수명은 동일하지만 패키지명으로 구분할 수 있기 때문에 더 나은 방식이라 할 수 있다.

패키지 내부의 함수, 타입 등의 이름과 패키지명을 동일하게 짓는 것도 피해야 한다.
이를테면 `extract` 패키지의 함수는 `ExtractNames()`으로 짓지 않는다.
다만 패키지의 이름과 패키지 내부의 식별자의 이름이 아예 동일한 경우가 있긴 하다.
대표적인 케이스가 `sort` 라이브러리의 `Sort()` 함수나, `Context` 인터페이스가 정의된 `context` 라이브러리 등이다.

<br><br>

### How to Organize Your Module

모듈 내의 패키지들의 구조를 어떻게 조직하는지에 대해 정해진 공식적인 방법은 없다.
다만 수 년을 거치며 정형화된 몇 개의 패턴들이 존재하며, 이 패턴들은 코드를 더 쉽게 이해하고 유지보수할 수 있게끔 하는 데에 포커스를 맞춘다.
만약 모듈의 크기가 작다면 한 개의 패키지에 모든 코드가 들어가도 된다.
어떤 모듈에 의존성을 갖는 다른 모듈이 없다면, 특별히 Organization할 필요는 없다.

프로젝트가 커진다면 코드들의 가독성을 높이기 위해 특정 절차를 도입하고 싶을 것이다.
만약 모듈이 한 개 이상의 어플리케이션으로 구성된다면, 모듈의 루트에 *cmd*라는 디렉토리를 추가하고,
_cmd_ 디렉토리에서는 각 모듈에서 빌드된 바이너리 파일마다 디렉토리를 생성한다.
가령 웹서버와, DB 내의 데이터를 확인하는 CLI 도구, 이렇게 두 가지 포함하는 모듈이 있다고 하자.
이 때는 각 디렉토리 내에서 패키지 이름으로 `main`을 사용한다.

만약 모듈들의 루트 디렉토리가 프로젝트의 관리, 테스트, 배포 등을 위한 파일들(shell script, Dockerfile, CI/CD configuration 등)을 포함하고 있다면,
_cmd_ 디렉토리 안 `main` 패키지 옆에 _pkg_ 디렉토리를 생성하여, 모든 Go 코드들을 여기에 저장한다.
_pkg_ 디렉토리에서는 패키지간의 종속성을 제한할 수 있도록 코드를 구성한다.
일반적인 패턴 중 하나는 기능에 따라 코드들을 자르는 것이다.
예를 들면 소핑 사이트를 작성했다고 할 때, 소비자 지원 관리 기능과 상품 재고 관리 기능의 코드들은 서로 다른 패키지로 두는 것이다.
이렇게 하면 하나의 웹 서비스를 여러 개의 Microservice로 쪼개어, 이후의 리팩토링을 쉽게 할 수 있다.

Go의 프로젝트 구조 예쁘게 짜는 꿀팁을 GopherCon에서 다루었다고 하니, [참조](https://www.youtube.com/watch?v=oL6JBUk6tj0&ab_channel=GopherAcademy)해보자.

<br><br>

### Overriding a Package's Name

임포트하는 패키지들의 이름이 충돌하는 경우가 생길 수 있다.
이를테면 난수를 생성하는 두 개의 패키지가 있다. 암호화에 관련된 `crypto/rand` 패키지와, 수학적 난수를 의미하는 `math/rand` 패키지이다.
이 둘을 모두 사용하려고 하는 경우, 한 패키지에 다른 이름을 붙여주어야 한다.

예제를 확인해보자.

```go
import (
	crand "crypto/rand"
	"encoding/binary"
	"math/rand"
)

func seedRand() *rand.Rand {
	var b [8]byte

	_, err := crand.Read(b[:])
	if err != nil {
		panic("cannot seed with crpytographic random number generator")
	}

	r := rand.New(rand.NewSource(int64(binary.LittleEndian.Uint64(b[:]))))
	return r
}
```

위 예제의 `math/rand`와 `crypto/rand`의 패키지명이 중복되므로, `crypto/rand`에 `crand`라는 이름을 붙여 주었다.
`rand`를 prefix로 붙이면 `math/rand`에, `crand`를 prefix로 붙이면 `crypto/rand`에 접근할 수 있다.

앞선 포스트에서 보았듯 패키지명도 shadowing이 될 수 있다.
일반적으로는 변수, 함수 등의 이름을 선언할 때 패키지명과 중복되게 설정하지 않는 것이 일반적이지만,
그럴 수 없는 경우(가령 새로 임포트한 패키지명이 이미 식별자가 존재하는 식별자와 충돌하는 경우) 패키지명의 overriding이 유용할 것이다.

> 패키지명으로 사용할 수 있는 기호가 두 개 더 있는데, 각각 `.`와 `_`이다.
>
> `.`이 패키지명으로 쓰이면 모든 임포트된 식별자들이 현재 패키지의 namespace로 인식된다.
> 따라서 해당 패키지의 식별자에 접근할 때 prefix를 붙일 필요가 없어진다.
> 하지만 이는 젼혀 권장되지 않는다.
> 식별자를 어느 패키지에서 불러온 것인지 한 눈에 알 수 없어지기 때문에, 식별자가 어느 패키지에서 선언된 것인지 헷갈려진다.
>
> 패키지명으로 `_`를 쓸 수 있는데, 이는 추후 다루도록 하겠다.

<br><br>

### Package Comments and godoc

Go에는 주석이 자동으로 문서로 변환되는 주석 작성 포맷이 있으며, 이 포맷은 **godoc**이다.
godoc은 아주 간단하다. 특정한 기호를 사용할 필요는 없고, 그냥 몇 가지 규칙을 따르면 된다.

1. document를 작성할 대상 바로 앞에 주석을 작성한다. 대상과 주석 사이에 빈 줄을 놓지 않는다.
2. 먼저 슬래시 두 개(`//`)를 쓰고, 대상의 이름으로 주석을 시작한다.
3. 주석을 여러 문단으로 나눌 때에는 빈 주석을 사용한다.
4. 이미 포맷된 주석을 삽입하고 싶은 경우, 들여쓰기를 한다.

패키지 선언 앞에 주석을 붙이면 패키지에 대한 주석이 된다.
다만 패키지 주석이 너무 길어질 경우, *doc.go*라는 파일을 생성하여 주석을 작성하는 것이 일반적이다.

<br>

다음은 패키지 주석의 작성 예제이다.

```go
// Package money provides various utilities to make it easy to manage money.
package money
```

<br>

다음은 export될 타입 주석의 작성 예제이다. 주석이 타입명으로 시작하는 것을 기억하자.

```go
// Money represent the combination of an amount of money
// and the currency the money is in
type Money struct {
	Value    int
	Currency string
}
```

<br>

다음은 함수 주석이다. 마찬가지로, 주석은 함수명으로 시작한다.
그나저나 주석 엄청 잘 달아놨다. 난 이렇게 할 자신이 없다;;

```go
// Convert converts the value of one currency to another.
//
// It has two parameters: a Money instance with the value to convert,
// and a string that represents the currency to convert to. Convert returns
// the converted currency and any errors encountered from unknown or unconvertible
// currencies.
// If an error is returned, the Money instance is set to the zero value.
//
// Supported currencies are:
//        USD - US Dollar
//        CAD - Canadian Dollar
//        EUR - Euro
//        INR - Indian Rupee
//
// More information on exchange rates can be found
// at https://www.investopedia.com/terms/e/exchangerate.asp
func Convert(from Money, to string) (Money, error) {
    // ...
}
```

<br>

`go doc`이란 명령어를 쓰면, 작성한 godocs를 확인할 수 있다. 방금 생성한 `money` 패키지에 명령어를 사용해보자.

```bash
go doc money
```

위와 같이 패키지명을 입력하면 패키지에 대한 godocs와, 패키지에서 export되는 식별자들의 목록을 확인할 수 있다.

<br>

```bash
go doc money.Convert
```

이처럼 패키지명 뒤에 `.식별자명`을 붙이면 해당 식별자에 대한 godocs를 확인할 수 있다.

> 주석을 적절히 잘 써주어야 하는 건 당연한 말이지만, 최소한 Export되는 식별자들에 대해서는 **반드시** 주석을 작성해주는 게 좋다.
> `golint`나 `golangci-lint`와 같은 linting 유틸리티들을 사용하면 export되는 식별자중 주석이 없는 것을 찾을 수 있다.

<br><br>

### The internal Package

모듈 내에서 함수, 타입, 상수 등을 다른 패키지로 전달하되, API에 포함되지 않게 하려면 `internal` 패키지를 사용한다.
`internal` 패키지를 생성하면, 해당 패키지와 서브패키지들에서 export되는 식별자들은
오직 `internal` 패키지의 부모 패키지나, 형제 패키지에서만 접근할 수 있다.

예제를 살펴보기에 앞서, 프로젝트의 디렉토리 구조가 아래와 같다고 하자.

<center>

<Image alt="사진" src="/post_img/Go/Golang_basics/GO9/2.PNG"/>

</center>

<br>

`internal` 패키지의 _internal.go_ 파일의 내용을 아래와 같이 작성한다.

```go
package internal

func Double(a int) int {
	return a * 2
}
```

`foo`, `bar`, `sibling`, `main` 등, 모듈 내의 나머지 패키지들은 `internal` 패키지의 `Double()`을 호출하게끔 적절히 작성해 주자.
작성된 예제는 [Github](https://github.com/jhseoeo/Learning-golang/tree/master/09-modules_packages_imports/internal_package)에 올라가 있으니,
확인할 수 있다.

이제 루트 디렉토리에서 모듈을 빌드하여, 출력되는 컴파일 에러 메시지를 확인해보자.

```bash
$ go build ./...
package github.com/learning-go/9/internal_package
        main.go:8:2: use of internal package github.com/learning-go/9/internal_package/foo/internal not allowed
package github.com/learning-go/9/internal_package
        imports github.com/learning-go/9/internal_package/bar
        bar/bar.go:6:2: use of internal package github.com/learning-go/9/internal_package/foo/internal not allowed
```

이처럼 `bar` 패키지와 `main` 패키지에서 `internal` 패키지에 접근할 수 없다는 에러 메세지가 출력된다.
`main` 패키지는 `internal` 패키지의 상위 패키지이기는 하나 부모 패키지는 아니기 때문이고,
`bar` 패키지 또한 관계가 없기 때문에 `internal`에 접근할 수 없었다.

<br><br>

### The init Function

Go의 코드는 보통 어떤 메소드나 함수가 호출되고, 언제 호출되는지 명확히 나타나 있다.
이는 Go에 메소드 오버라이딩이나 함수 오버로딩이 없기 때문이기도 하다.
하지만 패키지에서 아무것도 호출하지 않고 상태를 설정하는 방법이 바로 `init` 함수이다.

함수명을 `init`이고 으로 짓고 파라미터와 리턴 값이 없다면, 이 함수가 속한 패키지가 다른 패키지에 의해 참조될 때 `init` 함수가 실행된다.
어떠한 입력과 출력도 없는, 패키지에 선언된 함수나 변수와만 상호작용하는 side effect 함수이다.

`init`함수에는 특수한 기능이 있는데, Go에서는 단일 패키지에서 여러 개의 `init` 함수를 선언할 수 있다.
뿐만 아니라, 단일 파일에서도 여러 개를 선언할 수 있다.
여러 개의 `init` 함수가 실행되는 순서가 설명된 문서가 존재하기는 하지만, 그냥 `init`함수를 사용하지 않는 게 좋다.

데이터베이스 드라이버같이, 일부 패키지에서는 DB를 등록하기 위해 `init` 함수를 쓰기도 하지만,
이런 패키지의 경우 식별자들을 export하지 않는다.
Go에서는 사용되지 않는 패키지를 임포트할 수 없게 막기 때문에 이런 패키지를 임포트하면 (사용할 수 있는 식별자가 없으니) 에러가 발생한다.
따라서, 이런 패키지는 임포트할 때 패키지명을 언더스코어(`_`)로 오버라이딩 하면 된다.
이렇게 하면 임포트된 식별자에 접근하지 않아도 되고, `init` 함수는 실행된다.

```go
import (
	"database/sql"
	_ "github.com/lib/pq"
)
```

다만 이런 패턴은 등록 및 초기화 절차가 진행되는 것이 눈에 제대로 보이지 않기 때문에 좋지 않은 방식이다.
만일 코드에 등록 패턴이 있다면 등록 절차를 명시적으로 나타내 주는 것이 좋다.

`init` 함수가 주로 사용되는 경우는 단순한 할당으로 설정할 수 없는 패키지 레벨의 변수를 초기화하고자할 때이다.
다만 패키지 최상단에 mutable state를 두는 것은 좋은 생각이 아니다. 어플리케이션 내에서의 데이터 흐름을 이해하기 어렵게 만들기 때문이다.
따라서 `init`을 통해 설정되는 패키지 레벨의 변수는 실질적으로 불변(effectively immutable)인 상태여야 한다.
Go에서는 변수의 값이 변경되지 않도록 강제할 수 없기 때문에, 코드가 값을 변경시키지 않게끔 신경써서 작성해주어야 한다.
프로그램 작동 중 패키지 레벨의 변수가 수정되어야 한다면,
코드를 리팩토링하여 해당 상태를 패키지 내 함수에 의해 초기화되어 반환되는 구조체로 만들 수 있는지 확인한다.

`init`을 하용할 때 주의해야 할 점이 있다.
Go에서는 패키지당 여러 개의 `init` 함수를 만드는 것을 허용하지만, 하나만 선언한다.
만약 `init` 함수가 파일을 로드하거나 네트워크에 접속한다면, 이를 명시하여 문서를 작성한다.
그렇게 하지 않으면 예상되지 않은 I/O로 인해 일부 사용자가 당황할 수도 있다고 한다.

<br><br>

### Circular Dependencies

Go에서는 패키지간의 Circular Dependency를 허용하지 않는다.
즉, 패키지 A가 B를 임포트하였다면, B에서는 직접적으로든 간접적으로든 A를 임포트할 수 없다.

예제를 만들어 직접 확인해보자. 먼저 모듈을 생성한 뒤 `pet`과 `person`, 이렇게 두 개의 하위 패키지를 만들었다.
`pet` 패키지의 _pet.go_ 파일에서 아래와 같이 작성해준다.

```go
package pet

import "github.com/learning-go/9/circular_dependency/person"

type Pet struct {
	Name      string
	Type      string
	OwnerName string
}

var owners = map[string]person.Person{
	"Bob":   {"Bob", 30, "Fluffy"},
	"Julia": {"Julia", 40, "Rex"},
}
```

또한, `person` 패키지의 _person.go_ 파일에서 이렇게 작성해준다.

```go
package person

import "github.com/learning-go/9/circular_dependency/pet"

type Person struct {
	Name    string
	Age     int
	PetName string
}

var owners = map[string]pet.Pet{
	"Fluffy": {"Fluffy", "Cat", "Bob"},
	"Rex":    {"Rex", "Dog", "Julia"},
}
```

<br>

적절히 `main` 패키지를 작성하고 모듈을 빌드해보자.

```bash
$ go build ./...
package github.com/learning-go/9/circular_dependency
        imports github.com/learning-go/9/circular_dependency/person
        imports github.com/learning-go/9/circular_dependency/pet
        imports github.com/learning-go/9/circular_dependency/person: import cycle not allowed
```

위처럼 circular dependency로 인한 컴파일 에러가 발생함을 확인할 수 있다.

circular dependency는 패키지를 너무 잘게 쪼개서 생겼을 가능성이 있다.
패키지 두 개가 서로 의존성을 갖는다면, 한 개의 패키지로 합치는 것이 좋다.
따라서 위 예제의 `pet`과 `person` 패키지는 단일 패키지로 합치면 문제가 해결된다.

만약 두 패키지를 반드시 분리해야 한다면,
한 쪽 패키지에서 circular dependency를 일으키는 대상을 반대쪽 패키지나 새로운 패키지로 이동시키는 방법이 있을 수 있다.
이를테면 `person` 패키지의 `owners` 변수를 `pet` 패키지나 새로운 패키지로 이동하면 오류가 발생하지 않을 것이다.

작성된 예제는 [Github](https://github.com/jhseoeo/Learning-golang/tree/master/09-modules_packages_imports/circular_dependency)에 올라가 있으니,
확인할 수 있다.

<br><br>

### Renaming and Reorganizing API

모듈을 사용하다 보면 그 모듈의 API가 별로라고 생각할 때가 있다.
그렇다면 export된 식별자들의 이름을 다시 짓거나, 이들을 모듈 안의 다른 패키지로 옮기고 싶어질 것이다.
이전 버전 호환성을 제공하려면 기존 식별자를 제거해선 안되고, 대체할 이름을 새로 제공하여야 한다.

각 식별자의 종류에 대해, 정리하자면 다음과 같다.

1. 함수나 메소드의 경우는 간단하다. 기존 함수를 호출하는 새로운 함수를 선언하면 된다.
2. 상수의 경우도 간단하다. 기존 상수와 동일한 타입, 값, 다른 이름을 가지는 새로운 상수를 선언한다.
3. export되는 타입의 경우, *alias*를 사용한다.
   *alias*란 `type` 키워드를 사용하여 새로운 타입이 기존 타입을 가리키도록 하는 것이다.

<br>

*alias*의 예제를 살펴보자.

```go
type Foo struct {
	x int
	S string
}

func (f Foo) Hello() string {
	return "Hello"
}

func (f Foo) goodbye() string {
	return "goodbye"
}
```

위처럼 `Foo` 타입 및 관련 메소드에 대한 정의가 있다고 가정하자.
이때 `Bar`로도 `Foo` 타입에 접근이 가능하게 하고 싶다면 이렇게 선언한다.

```go
type Bar = Foo
```

기존에 `type` 키워드와 유사하지만, 등호(`=`)가 가운데에 추가된 모습이다.
이와 같이 선언할 시, `Bar`를 통해서도 `Foo`와 동일한 필드, 메소드에 접근 가능하다.

일반적인 `type`과 alias의 다른 점이 존재하는데, alias를 기존 타입에 변수에 할당하려고 할 때 형변환을 해줄 필요가 없다.

```go
func main() {
	bar := Bar{
		x: 20,
		S: "Hello",
	}
	var f Foo = bar

	fmt.Println(f.Hello(), f.goodbye())
}
```

<br>

alias는 기존 타입의 또 다른 이름일 뿐이다.
따라서 alias된 타입에 메소드나 필드를 추가하려면, 기존 타입에 추가해주면 된다.

타입이 정의된 패키지와 동일한 패키지, 또는 다른 패키지에서 모두 alias를 생성할 수 있다.
심지어는 *다른 모듈*에서 정의된 타입까지도 alias를 생성할 수 있다.
다만 다른 패키지의 타입에 대한 alias를 생성하는 것의 주의사항이 하나 있는데,
원본 유형에 대한 필드값이나 메소드 중 export되지 않은 것은 사용할 수 없다는 것이다.
애초에 alias를 정의한다고 export되지 않은 메소드나 필드에 접근할 수 있으면 그게 더 이상할 것이다.

패키지 레벨 변수와 구조체의 필드값들은 alias를 가질 수 없기 때문에, 한 번 이름을 정할 때 주의해주어야 한다.

<br><br>

## Modules

---

지금까지 한 개의 모듈 안에서 여러 패키지들을 구성하고 작업하는 방법을 알아봤으니,
다른 모듈과 그 안의 패키지들을 통합하는 방법에 대해 알아보고자 한다.
그 다음 모듈의 퍼블리싱 및 버전 관리에 대해 알아보고, `pkg.go.dev`와 모듈 프록시, sum 데이터베이스에 대해 알아보자.

<br><br>

### Importing Third-Party Code

지금까지 임포트한 패키지들은 모두 `fmt`, `errors`, `os`, `math`와 같은 표준 라이브러리들이었다.
Go는 내부 패키지와 서드 파티 라이브러리에서 동일한 임포트 방식을 사용한다.
다른 컴파일 언어와는 달리 Go는 서드 파티 라이브러리가 포함되어있든 아니든, 코드가 한 개의 바이너리 파일로 컴파일된다.

서드 파티 패키지를 임포트할 때는 패키지가 위치한 레포지토리의 위치를 명시해주어야 한다.
예제를 통해 살펴볼 텐데, 정밀한 10진수 표현을 위해 사용되는 `decimal`이라는 라이브러리와 책에서 나온 포매팅 라이브러리를 사용해볼 것이다.
제품의 가격과 세금을 계산해서 예쁘게 출력해주는 프로그램을 작성해보자.

먼저 모듈을 생성한 뒤, *main.go*파일의 내용을 아래와 같이 작성해 주었다.

```go
package main

import (
	"fmt"
	"log"
	"os"

	"github.com/learning-go-book/formatter"
	"github.com/shopspring/decimal"
)

func main() {
	if len(os.Args) < 3 {
		fmt.Println("Need two parameters: amount and percent")
		os.Exit(1)
	}

	amount, err := decimal.NewFromString(os.Args[1])
	if err != nil {
		log.Fatal(err)
	}

	percent, err := decimal.NewFromString(os.Args[2])
	if err != nil {
		log.Fatal(err)
	}

	percent = percent.Div(decimal.NewFromInt(100))
	total := amount.Add(amount.Mul(percent)).Round(2)
	fmt.Println(formatter.Space(80, os.Args[1], os.Args[2], total.StringFixed(2)))
}
```

위 예제에서 알 수 있듯, 두 개의 서드 파티 패키지 저장소의 위치를 명시해주었다.
이렇게 import한 후, 다른 라이브러리를 사용하는 것과 유사하게 export된 아이템에 접근할 수 있다.

책에서 진행한 것과 다른 점이 있는데, 책에서는 이러고 `go build`를 쳐서 바로 빌드한다.
나의 경우 바로 빌드하면 에러가 나기에, 빌드 이전에 `go mod tidy`를 쳐주었다.
`go mod tidy` 명령어는 소스 코드와 _go.mod_ 파일을 비교하여 사용되지 않는 의존성을 제거하고 소스 코드에 명시된 의존성을 추가해준다.

`go mod tidy` 명령어를 치면 _go.mod_ 파일의 내용은 아래와 비슷하게 변경될 것이다.

```makefile
module github.com/learning-go/9/importing_third_party

go 1.18

require (
	github.com/learning-go-book/formatter v0.0.0-20200921021027-5abc380940ae
	github.com/shopspring/decimal v1.3.1
)
```

`require` 영역에는 임포트한 모듈들과 버전들이 적혀있다.
다만 `formatter` 모듈의 경우 달리 버전이 존재하지 않기 때문에, pseudo-version이 생성되었다.

그 외에도, 모듈 폴더 내에 *go.sum*이란 파일도 생성되었을 것이다.
이 녀석도 파일을 열어 내용을 확인해보면 아래와 비슷할 것이다.

```makefile
github.com/google/go-cmp v0.5.2 h1:X2ev0eStA3AbceY54o37/0PQ/UWqKEiiO2dKL5OPaFM=
github.com/google/go-cmp v0.5.2/go.mod h1:v8dTdLbMG2kIc/vJvl+f65V22dbkXbowE6jgT/gNBxE=
github.com/learning-go-book/formatter v0.0.0-20200921021027-5abc380940ae h1:TRWDqrPLdqr3L6T0reL3A7/ArQ194nVFY7frsixLYdQ=
github.com/learning-go-book/formatter v0.0.0-20200921021027-5abc380940ae/go.mod h1:YSLNw1QDbIcM0EvYO9bUmuMrIPv1NNCn8KxYKBj5ZE8=
github.com/shopspring/decimal v1.3.1 h1:2Usl1nmF/WZucqkFZhnfFYxxxu8LG21F6nPQBE5gKV8=
github.com/shopspring/decimal v1.3.1/go.mod h1:DKyhrW/HYNuLGql+MJL6WCR6knT2jwCFRcu2hWCYk4o=
golang.org/x/xerrors v0.0.0-20191204190536-9bdfabe68543/go.mod h1:I/5z698sn9Ka8TeJc9MKroUUfqBBauWjQqLJ2OPfmY0=
```

<br>

`go run`, `go build` 등 의존성이 필요한 go 명령어를 실행할 때마다, *go.mod*에 존재하는 모듈들은 캐시로 다운로드된다.
*go.mod*파일은 패키지와 모듈의 버전을 자동으로 포함하는 모듈 경로를 자동으로 업데이트한다.

_go.sum_ 파일은 모듈과 그 버전, 그리고 모듈에 대한 _go.mod_ 파일의 해시로 업데이트된다.
_go.sum_ 파일이 어떻게 사용되는지는 이후 알아볼 것이다.

이제, `go build ./...`을 입력하여 빌드하면, 바이너리 파일이 생성될 것이다.
잘 실행되는지 확인해보자. 본인은 리눅스니 cli로 실행해주었다.

```bash
$ ./importing_third_party 99.99 7.25
99.99                                 7.25                                107.24
```

<br><br>

### Working with Versions

Go에서의 버전 관리에 대해 알아보자.

모듈을 생성하고, *main.go*에 이렇게 작성해보자.
내용은 별로 중요하지 않고, 위 세금 계산 프로그램의 연장선상이라고 보면 된다.

```go
package main

import (
	"fmt"
	"os"

	"github.com/learning-go-book/simpletax"
	"github.com/shopspring/decimal"
)

func main() {
	amount, _ := decimal.NewFromString(os.Args[1])
	zip := os.Args[2]
	percent, err := simpletax.TaxForZip(zip)
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
	total := amount.Add(amount.Mul(percent)).Round(2)
	fmt.Println(total)
}
```

그 후 `go mod tidy`를 입력하면 _go.mod_ 파일은 아래와 같이 수정될 것이다.

```makefile
module github.com/learning-go/9/working_with_versions

go 1.18

require (
	github.com/learning-go-book/simpletax v1.1.0
	github.com/shopspring/decimal v1.3.1
)
```

다만 빌드 후 프로그램을 실행하면 오류가 발생한다.

```bash
$ go build ./...
$ ./working_with_versions 99.99 12345
unknown zip: 12345
```

이는 `simpletax` 패키지의 _latest_ 버전에서 에러가 발생하는 상황을 가정하고 만든 것이기에 그렇다.
`simpletax` 버전을 한 단계 이전 버전으로 되돌리면 문제가 해결된다.

<br>

우리는 이전 버전의 `simpletax`를 사용할 것이기 때문에. `simpletax` 패키지에 어떤 버전들이 있는지 확인해보아야 한다.
`go list` 명령어를 통해 사용 가능한 버전들의 목록을 확인해보자.

```bash
$ go list -m -versions github.com/learning-go-book/simpletax
github.com/learning-go-book/simpletax v1.0.0 v1.1.0
```

이렇게 `-m`, `-versions` 플래그를 붙여서 `go list` 명령러를 사용하면 사용 가능한 버전들의 목록을 확인할 수 있다.
위 출력 결과에서 확인할 수 있듯 _v1.1.0_ 버전 외에도 _`v1.0.0`_ 버전이 사용 가능하니, _`v1.0.0`_ 버전으로 다운그레이드해보자.

<br>

_`v1.0.0`_ 버전으로 다운그레이드하려면 `go get` 명령어를 사용한다.

```bash
$ go get github.com/learning-go-book/simpletax@v`1.0.0`
go: downloading github.com/learning-go-book/simpletax v`1.0.0`
go: downgraded github.com/learning-go-book/simpletax v1.1.0 => v1.0.0
```

`go get` 명령어가 입력되면 모듈에 기록된 의존성들이 업데이트된다.
따라서 _go.mod_ 파일을 열어 확인해보면 `simpletax`의 버전이 *v1.0.0*으로 다운그레이드되었을 것이다.

한편 _go.sum_ 파일을 열어 확인해보면 다운그레이드한 *v1.0.0*에 대한 내용 외에도 *v1.1.0*에 대한 엔트리가 그대로 적혀있을 수 있다.
이건 정상적인 거고, 아무런 문제도 없으니 신경 안써도 된다.

아래 내용은 다운그레이드 후 _go.sum_ 파일의 내용이다.

```makefile
github.com/learning-go-book/simpletax v1.0.0 h1:iH+7ADkdyrSqrMR2GzuWSFznXhF/DTbApdwoJylUcCk=
github.com/learning-go-book/simpletax v1.0.0/go.mod h1:/YqHwHy95m0M4Qo3DmXVYP1a5/stZ/YHI9mnkiPVtUg=
github.com/learning-go-book/simpletax v1.1.0 h1:Z/6s1ydS/vjblI6PFuDEnxW8QgYjGI4wKAeP/7DKLQ0=
github.com/learning-go-book/simpletax v1.1.0/go.mod h1:/YqHwHy95m0M4Qo3DmXVYP1a5/stZ/YHI9mnkiPVtUg=
github.com/shopspring/decimal v1.2.0/go.mod h1:DKyhrW/HYNuLGql+MJL6WCR6knT2jwCFRcu2hWCYk4o=
github.com/shopspring/decimal v1.3.1 h1:2Usl1nmF/WZucqkFZhnfFYxxxu8LG21F6nPQBE5gKV8=
github.com/shopspring/decimal v1.3.1/go.mod h1:DKyhrW/HYNuLGql+MJL6WCR6knT2jwCFRcu2hWCYk4o=
```

<br>

오류를 고쳤으니 빌드하여 잘 돌아가는지 확인해보자.

```bash
$ go build ./...
$ ./working_with_versions 99.99 12345
107.99
```

<br>

_go.mod_ 파일에 `// indirect`라고 적힌 부분이 있다면, 이는 프로젝트에서 직접적으로 선언되지 않은 의존성을 의미한다.
만약 프로젝트가 `go.mod` 파일을 찾을 수 없거나 에러가 발생하였고,
일부 종속성이 없는 오래된 모듈에 의존성을 갖는 경우 `// indirect`라고 적힌 부분이 추가될 수 있다.
모듈을 빌드할 때 모든 종속성은 `go.mod` 파일에 선언되어야 하지만,
그런 모듈들의 경우 선언할 곳이 없기에 우리의 _go.mod_ 파일에 선언된다.

직접 종속성 선언이 간점 종속성까지 충족시키는 경우가 있을 수 있지만,
간접 종속성 선언이 프로젝트에 명시된 버전보다 이전 버전을 지정할 때도 있다.
이는 `go get` 명령어나 의존성 버전을 다운그레이드하여 간접 종속성을 명시적으로 업데이트할 때 발생한다.

<br>

> Go의 모듈 버전 관리는 Sementic Versioning, 줄여서 *SemVer*를 따른다.
> 대충 버전 맨 앞에 `v`를 붙이고, `major.minor.patch`순으로 숫자를 나열하는 방식이다.

<br><br>

### Minimal Version Selection

프로젝트가 두 개 의상에 모듈에 의존성을 갖게 되고, 이 모듈들은 어느 동일한 모듈에 또 다른 의존성을 갖게 될 수도 있다.
이런 모듈들은 해당 모듈의 다른 마이너 버전이나 패치 버전에 의존성을 갖는다고 선언하는 경우가 많다.

Go의 모듈 시스템은 *minimal version selection*이라는 정책에 기반한다.
이는 다시 말해, 반드시 모든 의존성의 `go.mod`에서 작동이 가능하다고 명시된 버전 중 가장 낮은 것을 택한다는 뜻이다.

우리가 작성한 모듈이 A, B, C라는 모듈에 의존성을 갖는다고 가정하자. 이 때 A, B, C는 D라는 모듈에 의존성을 갖는다.
A의 _go.mod_ 파일에는 D의 v1.1.0이, B의 _go.mod_ 파일에는 D의 v1.2.0이,
C의 _go.mod_ 파일에는 D의 v1.2.3이 필요하다고 적혀 있다.
이 경우 Go는 **v1.2.3**의 D를 단 한 번만 임포트하며, 이는 A, B, C를 모두 만족시키는 버전 중 가장 낮은 버전이기 때문이다.

헌데, 가령 A는 v1.1.0의 D가 필요한데 v1.2.3의 D로는 작동하지 않는다면 어떨까?
책에서는 모듈 제작자에게 버전 호환이 안된다고 고쳐달라고 하면 된다고 한다(진짜임).
애초에 마이너 버전이나 패치 버전이 업데이트되는 거라면 이전 버전에 대한 호환성을 제공해야 한다.
따라서, 모듈 A는 v1.1.0의 D는 호환되지만 v1.2.3의 D로는 호환이 안된다면, 모듈 D의 v1.2.3에는 문제가 있는 것이다.
또는 모듈 A가 모듈 D에 대해 잘못된 가정을 했을 것이기에, 모듈 A의 코드를 고쳐야 할 수도 있다.

단일 버전만 임포트하는 Go와 비교해봤을 때,
_npm_ 등 다른 패키지 관리 시스템의 경우 동일한 패키지의 서로 다른 여러 버전들이 인클루드된다.
이로 인해 특정 에러가 발생하고, 소프트웨어가 무거워질 수도 있다고 한다.

<br><br>

### Updating to Compatible Versions

앞선 예제의 `simpletax` 모듈에 각각 _v1.1.1_, _v1.2.0_, _v1.2.1_, 이렇게 세 가지 버전이 추가되었다고 가정해보자.
현재 버전에서 마이너 버전은 유지하고 패치 버전만 업데이트하면 *v1.1.0*에서 *v1.1.1*이 될 것이다.

패치 버전만 업데이트하는 명령어는 다음과 같다.

```bash
go get -u=patch github.com/learning-go-book/simpletax
```

<br>

특정 버전의 모듈을 가져오는 명령어는 다음과 같다.

```bash
go get -u=patch github.com/learning-go-book/simpletax@v1.2.0
```

이렇게 모듈 뒤에 골뱅이를 붙이고 버전을 명시해주면 된다.

<br>

아래 명령어를 입력하면 모듈의 가장 최신 버전으로 업데이트된다.

```bash
go get -u github.com/learning-go-book/simpletax
```

이 경우 `simpletax` 모듈의 가장 최신 버전인 *v1.2.1*로 업데이트될 것이다.

<br><br>

### Updating to Incompatible Versions

`simpletax` 모듈의 메이저 버전 패치인 *v2.0.0*이 떴다.
여러 기능이 추가되었지만 이전 버전과 비교해 보았을 때 API에 몇 가지 변화가 생겼고, 기존 버전을 사용하던 대로 사용하면 문제가 생길 것이다.
이렇게 호환되지 않는 버전으로 업데이트할 때, Go에서는 _semantic import versioning_ 규칙을 따르며, 이는 두 가지 규칙으로 구성된다.

- 모듈의 메이저 버전은 증가해야 한다.
- 0과 1을 제외한 메이저 버전의 경우, 모듈의 경로가 vN으로 끝나야 한다. N은 메이저 버전이다.

호환되지 않는 버전과 호환되는 버전을 같이 두면 동일한 패키지로 인식된다.
반면 경로가 다르면 패키지를 고유하게 식별하기 때문에, 서로 다른 메이저 버전을 서로 다른 경로에 두는 것이다.
이렇게 하면 호환되지 않는 두 버전의 패키지를 프로그램의 다른 부분으로 가져와 정상적으로 업그레이드할 수 있다.

<br>

앞서 작성한 예제에서 `simpletax`의 버전을 *v2*로 변경해보자.
*main.go*의 내용을 아래와 같이 변경한다.

```go
package main

import (
	"fmt"
	"log"
	"os"

	"github.com/learning-go-book/simpletax/v2"
	"github.com/shopspring/decimal"
)

func main() {
	amount, err := decimal.NewFromString(os.Args[1])
	if err != nil {
		log.Fatal(err)
	}
	zip := os.Args[2]
	country := os.Args[3]
	percent, err := simpletax.ForCountryPostalCode(country, zip)
	if err != nil {
		fmt.Println(err)
	}
	total := amount.Add(amount.Mul(percent)).Round(2)
	fmt.Println(total)
}
```

이후, `go mod tidy`를 입력한다. 이후 _go.mod_ 파일의 내용은 아래와 같이 변경된다.

```makefile
module github.com/learning-go/9/working_with_versions/imcompatible

go 1.18

require (
	github.com/learning-go-book/simpletax/v2 v2.0.0
	github.com/shopspring/decimal v1.3.1
)
```

마찬가지로 _go.sum_ 파일의 내용도 변경되었을 것이다.
이전 버전의 `simpletax` 에 관련된 내용이 삭제되었을 테니, 확인해보기 바란다.

<br><br>

### Vendoring

어떤 조직에서는 모듈이 항상 동일한 종속성으로 빌드되도록 하기 위해 의존성의 복사본을 모듈 안에 저장하기도 하며, 이를 *Vendoring*이라 한다.
이를 Go에서 하려면 `go mod vendor` 명령어를 입력하면 된다.
명령어가 입력되면 모듈의 최상위 디렉토리에 _vendor_ 디렉토리가 생성되며, 이 디렉토리 안에 모든 모듈의 의존성들이 저장된다.

만약 _go.mod_ 파일에 새로운 의존성이 추가되거나 의존성이 `go get` 명령어로 업그레이드되는 경우,
_vendor_ 디렉토리를 업데이트하기 위해 `go mod vendor`를 다시 한번 입력해주어야 한다.
명령어를 입력하지 않았다면 `go build`, `go run`, `go test` 등이 실행되지 않고 에러가 발생할 것이다.

종속성들을 Vendoring로 관리할지 여부는 조직에 따라 다르다.
이전 Go의 의존성 관리 시스템은 Vendoring을 사용했지만, Go 모듈과 프록시 서버의 등장으로 이러한 방식은 점차 시들해지고 있다.

Vendoring의 장점은 프로젝트에 어떤 서드 파티 코드가 사용될지 정확하게 알고 있다는 점이다.
반면, 버전 관리시 프로젝트의 크기가 크게 증가된다는 점이 단점이다.

<br><br>

### pkg.go.dev

<center>

<Image alt="사진" src="/post_img/Go/Golang_basics/GO9/3.PNG"/>

</center>

Go 모듈을 관리하는 중앙 저장소는 따로 없지만, Go 모듈들과 관련 문서들을 모아놓은 서비스가 존재한다.
Go 개발진은 오픈소스 Go 프로젝트를 자동으로 인덱싱하는 [pkg.go.dev](https://pkg.go.dev)라는 사이트를 만들었다.
패키지 인덱스는 각 모듈마다 godocs, 라이센스, README, 의존성, 어떤 오픈소스 프로젝트가 해당 모듈에 의존성을 갖는지 등을 게시한다.

<br><br>

## Publishing Module

---

프로젝트를 오픈 소스로 Github같은 VCS에 배포하든, 특정 기관의 private한 저장소에 배포하든,
모듈을 다른 사람들이 사용 가능하도록 하는 것은 매우 간단한 일이다.
Go 모듈은 소스 코드로부터 빌드되고 저장소 경로를 통해 구분하기 때문에, 중앙화된 라이브러리 저장소에 모듈을 업로드할 필요가 없다.
그냥 *go.mod*와 _go.sum_ 파일만 잘 확인해주자.

오픈 소스 모듈을 배포할 때는, 모듈의 루트 디렉토리에 오픈 소스 라이센스 관련 내용이 명시된 *LICENSE*라는 파일을 포함해준다.
Go 커뮤니티에서는 BSD, MIT, Apache 라이센스와 같이 permissive한 라이센스를 선호한다고 한다.

<br><br>

### Versioning Module

모듈이 public이든 private든, 적절히 버전을 관리해주어야 Go의 모듈 시스템에서 잘 동작할 것이다. 방법이 어렵진 않다.
만약 기능을 추가하거나 버그를 패치하는 경우, 소스 코드 레포지토리에 변경사항을 기록하고 _sementic versioning_ 규칙에 따라 버전을 기록한다.

이전 버전에 대한 호환성을 깨고 새로운 버전을 출시하려고 한다면 절차가 살짝 복잡해지긴 한다.
앞서 봤던 `simpletax` 예제의 `v2`를 보았듯, 이전 버전에 대한 호환성을 제거하는 경우 임포트 경로가 달라진다.

먼저, 새로운 버전을 저장하는 방식은 두 가지가 있다.

1. *N*을 모듈의 메이저 버전이라고 할 때, 모듈 내에 *vN*이라는 디렉토리를 생성한다.
   예를 들면 모듈의 버전 2를 만들고자 한다면, *v2*라는 디렉토리를 생성하는 식이다.
   이 디렉토리 내에 *README*나 _LICENSE_ 파일을 포함한 코드 파일을을 복사한다.
2. Github 등 버전 컨트롤 시스템의 branch 기능을 활용한다.
   새로운 브랜치의 이름을 *vN*으로 짓고 상위 버전 코드를 넣거나, 브랜치의 이름을 *vN-1*로 짓고 기존 코드를 넣을 수 있다.
   예를들어 *v2*라는 브랜치에 상위 버전 코드를 넣거나, *v1*이라는 브랜치에 기존 코드를 넣거나 하는 식이다.

새 코드를 저장할 방식을 선택했다면, 임포트 경로를 해당 브랜치나 서브디렉토리로 변경해주어야 한다.
_go.mod_ 파일의 모듈 경로는 반드시 `/vN`으로 끝나야 하고, 모듈 내 코드들의 임포트 경로 또한 `/vN`을 사용해야 한다.

모든 코드를 검토하기 귀찮으면 이 작업을 자동으로 해주는 [요런 도구](https://github.com/marwan-at-work/mod)가 있다고 하니, 참조해보자.
한번 경로가 수정되면 알아서 반영되는 모양이다.

> 실질적으로 *go.mod*와 소스 코드의 `import` 구문만 변경하여 메인 브랜치에 최신 버전을 태그할 수 있고,
> 하위 디렉토리나 버전 브랜치에 별 신경을 기울이지 않을 수 있다.
> 다만 이는 좋은 습관이 아니다. 이전 버전의 언어나 서드 파티 종속성 관리자를 사용할 경우 빌드가 안 될 수도 있다.

새 코드를 배포하려면 먼저 레포지토리에 *vN.0.0*과 같이, 태그를 붙여야 한다.
디렉토리에 상위 버전을 저장하는 방식이거나, 메인 브랜치에 최신 버전이 있는 경우, 메인 브랜치에 태그를 붙인다.
다른 브랜치에 새 버전이 있다면, 그 브랜치에 태그를 붙인다.

<br><br>

## Module Proxy Server

---

Go는 중앙화된 한 개의 라이브러리 저장소를 사용하기 보다는, 복합적인 모델을 사용한다.
모든 Go 모듈은 GitHub나 GitLab과 같은 소스 코드 저장소에 저장된다.
하지만 `go get` 커맨드는 소스 코드 저장소에서 직접적으로 코드를 받아오지 않고, Google이 관리하는 프록시 서버에 요청을 보낸다.
이 서버에서는 Public Go 모듈의 모든 버전들이 복사되어 관리된다.
만약 어떤 모듈이나 모듈의 특정 버전이 프록시 서버에 없다면, 프록시 서버에서는 해당 모듈의 저장소에서 다운로드하여 복사본을 저장한다.

Google은 프록시 서버 뿐만 아니라 *sum database*라는 것도 관리한다.
*sum database*는 모든 모듈에 모든 버전에 관한 정보를 저장하는 곳이다.
_go.sum_ 파일에서 확인할 수 있는, 모듈과 버전에 대한 해시값 등의 항목들이 여기서 쓰이는 것이다.

프록시 서버가 특정 버전의 모듈이 인터넷으로부터 지워져서 생기는 문제를 막아 주는 것처럼,
*sum database*는 모듈 버전의 수정으로 생기는 문제를 막아 준다.
그러한 문제라고 하면 모듈 개발자의 부주의로 인해 기존 버전 태그를 그대로 두고 새로운 기능을 추가하거나 버그 픽스를 하였거나,
아니면 누군가 모듈을 하이재킹하여 악성 코드를 집어넣었을 수도 있다.
어떤 경우든 변경된 모듈을 사용하면 결과물이 달라질 것이기 때문에, 이를 사용하기는 꺼려질 것이다.

`go build`, `go test`, 또는 `go get` 등 명령어를 통해 모듈을 다운로드할 때마다 Go는 모듈의 해시값을 계산한다.
그리고 *sum database*의 저장된 버전의 모듈이 가진 해시값과 비교하여, 불일치할시 모듈이 설치되지 않는다.

<br><br>

### Specifying a Proxy Server

Google의 프록시 서버를 쓰기 싫으면 몇 가지 대안이 있다.

1. public proxy server를 쓰는건 괜찮은데 구글 혐오증이 있다면, GoCenter의 서버를 사용할 수 있다.
   환경 변수 `GOPROXY`를 `https://gocenter.io,direct`로 설정해주자.
2. 프록시 서버 자체를 사용하지 않으려면 환경 변수 `GOPROXY`를 `direct`로 설정하면 된다.
   이 경우 모듈을 레포지토리에서 직접 다운로드하지만, 특정 버전이 레포지토리에서 사라진 경우 다시 접근할 수 없다.
3. 직접 프록시 서버를 굴릴 수도 있다. [여기](https://docs.gomods.io/)서 오픈 소스 프록시 서버를 뿌리고 있으니,
   이걸로 서버를 열고 환경 변수 `GOPROXY`를 URL이나 IP 주소로 설정해주자.

<br><br>

### Private Repositories

상업적인 목적의 private한 모듈을 저장하고 싶은 경우 Google의 프록시 서버를 거치기는 어려울 것이다.
프록시 서버에서 Private Repositories에 접근하지 못하는 경우 어차피 Go가 직접 접근하려 할 테지만,
Private Repositories에 대한 정보조차 유출하고 싶지 않을 수 있다.

직접 프록시 서버를 굴리거나 프록시 서버를 사용하지 않는 경우라면 문제가 없을 것이다.
프록시 서버를 직접 굴리면 캐싱이 로컬에 되기 때문에 속도가 빠르다거나, 보안 관련하여 신경쓸 것이 적어진다는 추가적인 단점도 있다.
다만 public proxy server를 사용하는 경우, `GOPRIVATE` 환경 변수를 설정하여 private repositoriy의 목록을 작성할 수 있다.

`GOPRIVATE`는 아래와 같이, 컴마로 구분하여 private repositoriy의 목록을 기입한다.

```makefile
GOPRIVATE=*.example.com,company.com/repo
```

<br><br>

## References

---

<center>

[
<Image alt="Learning Go Book Cover" src="https://learning.oreilly.com/covers/urn:orm:book:9781492077206/400w/"/>
](https://learning.oreilly.com/library/view/learning-go/9781492077206/) <br>
[Jon Bodner, 『Learning Go』, O'Reilly Media, Inc.](https://learning.oreilly.com/library/view/learning-go/9781492077206/)

</center>

<br><br>
