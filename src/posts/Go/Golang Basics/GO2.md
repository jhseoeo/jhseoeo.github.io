---
title: 변수와 원시 타입
date: 2022-07-21
excerpt: Primitive Types and Variable Declaration
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

본 글은 Golang을 공부하며 주요 내용이라 생각되는 것들을 기록해둔 자료이며, Ubuntu 20.04 LTS 기준으로 작성되었습니다.

<br><br>

## Variables and Constants

---

<br>

### Variables

Go에서 변수는 아래와 같이 선언 및 초기화할 수 있다. 특이사항은 다음과 같다.

1. C/C++과는 달리, 타입이 변수명 뒤에 옴
2. 변수를 생성하고 값을 할당하지 않는 C나 C++와는 달리, 변수를 생성하면 기본적으로 할당되는 값인 <span style="background-color: #FFF5B1">zero value</span>가 존재함
3. 변수가 선언만 되고 사용되지 않으면 에러가 발생함
4. 권장되지는 않지만 전역변수도 됨

```go
package main

import "fmt"

func main() {
	var a int = 1         // variable declaration
	var b string          // declare string variable. it's value would be zero value of string ("")
	var c, d = 123, "456" // multiple declaration. their type would be int, string
	var (                 // inside parentheses, variables can be declared line by line
		e    int            //
		f    = 20           // it's type would be int
		g, h = 1.23, "4.56" // multiple declaration, only specified their values
		i, j string         // only specified their types
	)
	var 한글개꿀ㅋㅋ = 1 // 한글도 되긴 하는데 이러지 맙시다
```

<br>

`:=` 연산자를 활용하여 변수를 선언할 수도 있다. 변수의 타입은 초기화되는 값에 따라 결정된다. c++의 `auto` 키워드와 비슷한 듯 하다.

```go
	k := 10        // variable declaration by := operator
	k, l := 20, 20 // multiple declaration
```

`:=` 연산자는 편리하지만 주의해서 사용해야 한다. <span style="background-color: #FFF5B1">Shadowing</span>이 발생할 수도 있기 때문이다.

> ### Shadowing이란?
>
> `var` 키워드는 동일한 이름을 가진 변수를 선언할 때 에러가 발생하는데 반해,
> 위 예제에서는 `k`가 선언되고, 그 아래 줄에서 `l`과 함께 `k`가 다시 선언된 것을 확인할 수 있다(`k`만 다시 선언하면 에러가 발생한다).
> 이 경우 해당 Block이 끝날 때까지, 앞서 선언한 `k`의 값인 10에 접근할 수 없게 된다.
>
> 이런 현상을 Shadowing이라고 하며, `:=` 연산자를 사용할 때 주의해야 하는 이유이다.
> 특히 함수의 파라미터나, `fmt`같은 패키지 이름이나, 심지어는 `nil` 또는 `false` 같은 리터럴들도 Shadowing할 수 있다.
> `var` 키워드는 함수의 타입을 명시해주는 효과도 있고 Shadowing의 염려가 없으므로 `var`가 조금 더 안전한 선택지이다.
> 반면 `if`, `switch`, `for`문이나 에러 핸들링 등에서는 `:=`을 주로 사용한다.

<br>

변수가 선언만 되고 사용되지 않으면 에러가 발생하니, `fmt.Println()` 함수를 활용하여 모두 출력해주자.

```go
	fmt.Println(a, b, c, d, e, f, g, h, i, j, k, l)
	fmt.Println(asd)
	fmt.Println(한글개꿀ㅋㅋ)
}
```

<br><br>

### Constants

상수의 선언은 변수와 유사하다. `const` 키워드를 사용한다

```go
package main

import "fmt"

func main() {
	const a int = 1         // typed
	const b, c = 123, "456" // untyped, multiple declaration
	const (                 // decalaration constants using parentheses
		d    = 20           // inside parentheses, constants can be declared line by line
		e, f = 1.23, "4.56" // multiple decalaration
	)

	fmt.Println(a, b, c, d, e, f)
```

<br>

상수로 선언된 값을 변수에 할당할 때, 타입이 다르면 에러가 발생한다.

```go
	var i int = a // constants can be value of variables when their types are same
	// var f float64 = a // if types are different, it occurs error
	fmt.Println(i)
}
```

<br><br>

## Primitive Types

---

Go의 타입들에는 아래와 같은 특징이 존재한다.

<br><br>

### bool

bool은 다른 언어와 크게 다르지 않다. Zero value는 `false`이다.

```go
var flag bool // initial value is false
var isAwesome = true
fmt.Println(flag, isAwesome)
```

<br><br>

### int

int는 C/C++와 유사하다. Zero value는 0이며, signed와 unsigned로 구분된다.
또한 8bit, 16bit, 32bit, 64bit중 변수의 크기를 결정할 수 있으며, (u)int 뒤에 크기를 붙임으로써 나타낸다.

```go
var i8 int8 = -128                  // 8-bit signed integer
var i64 int64 = 9223372036854775807 // 64-bit signed integer
var u32 uint32 = 4294967295         // 32-bit unsigned integer
fmt.Println(i8, i64, u32)
```

<br>

이 중 `byte`라는 자료형은 `uint8`과 동일한 것으로 처리된다.

```go
var b byte = 123 // byte: 8-bit unsigned integer
var uint8_ uint8 = 234
fmt.Println(b == uint8_) // doesn't occur error
```

<br>

크기를 붙이지 않은 `int`라는 자료형도 존재하는데, 32bit와 64bit중에서 정해진다. 이는 어떤 하드웨어를 사용하는지에 따라, 실행할때 결정된다.<br>
다만 컴퓨터가 64bit를 사용하는 경우라고 해도, int와 int64끼리의 연산은 에러가 발생한다. int는 플랫폼마다, 하드웨어마다 실행시 크기가 다르기 때문이다.

```go
var i int = 9223372036854775807 // signed int. its size(32 or 64bits) is decided at compile time, determined by its hardware
var ui uint = 0                 // unsigned int
// fmt.Println(i == i64) occurs error
fmt.Println(i, ui)
```

<br>

일반적인 경우 `(u)int` 타입을 선택하는 것이 권장되지만,
바이너리 파일 처리나 네트워크 통신 등, 정수 자료형의 특정한 크기를 사용해야 하는 경우라면 `(u)int8`~`(u)int64` 에서 타입을 선택한다.
또는 라이브러리 함수를 작성하는 경우, 함수의 파라미터나 변수로 `(u)int64`를 선택하는 것이 좋다고 한다.

<br>

정수를 표기할 때 언더바(\_)로 구분할 수 있다. 또한 앞에 `0x`, `0o`, `0b`를 붙여 각각 16, 8, 2진수로 표현할 수 있다.

```go
fmt.Println(1_2_3_4, 123_456_789_123123_456) // numbers can distinguished by underbar(_)
fmt.Println(0x1234, 0o1234, 0b1101)          // hexadecimal, octal, binary representation
```

<br><br>

### float

실수를 표현하는 타입은 32bit인 `float32`와 64bit인 `float64` 두 가지로 구분된다. C/C++와 유사하게 부동소숫점(Floating point) 방식을 사용한다.

```go
var f32 float32 = 0.5   // f32 : 32-bits floating point number
var f64 float32 = 0.524 // f64 : 64-bits floating point number
fmt.Println(f32, f64)
```

<br>

또한 복소수를 표현하는 `complex` 타입도 존재한다. 다만 복소수가 필요한 수학, 물리 관련된 코드를 굳이 Go를..?

```go
var c64 complex64 = complex(2, 3) // c64 : 복소수(float32 + float32)
c128 := complex(3, 4)             // c128 : 복소수(float64 + float64)
fmt.Println(c64, c128)
fmt.Println(real(c128))      // 실수부
fmt.Println(imag(c128))      // 허수부
fmt.Println(cmplx.Abs(c128)) // 절댓값..?
```

<br><br>

### string

문자열을 표현하는 `string` 타입이 존재한다. 아래 코드는 기본적인 선언과 연산자들이다. Zero value는 `""`이다. 또한 Go의 기본 문자열 인코딩은 UTF-8이다.

```go
var s1 string = "qwe"
var s2 string = "asd"

fmt.Println(s1 == s2) // comparison operators between string
fmt.Println(s1 > s2)
fmt.Println(s1 + s2)
```

<br>

`string`을 구성하는 각 문자들은 `rune` 타입이다. `byte`가 `uint8`과 동의어인 것처럼, `rune`은 `int32`와 동의어이다.

```go
var character rune = '\u0061' // rune represents a single character
fmt.Println(character)
```

<br><br>

### Type Conversion

Go에서는 서로 다른 타입들간의 변환이 가능하다. 함수처럼 타입명에 괄호를 붙이면 된다. 이를테면 `int16`에서 `int32`로의 변환부터, `int`와 `float64` 사이의 변환 등도 가능하다

```go
// type conversion between int and float
var x int = 10
var y float64 = 30.2
var z float64 = float64(x) + y
var d int = x + int(y)
fmt.Println(z, d)
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
