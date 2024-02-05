---
title: 타입, 메소드, 인터페이스
date: 2022-08-11
excerpt: Types, Methods, Interfaces
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

## Types

---

Go에는 Class나 상속과 같은 개념이 개념이 존재하지 않는다. 대신 타입을 정의하고자 하는 경우, `type` 키워드를 사용하여 정의한다.

```go
type Person struct {
    FirstName string
    LastName  string
    Age       int
}
type Score int
type Converter func(string) Score
type TeamScores map[string]Score
type Employee Person
```

위처럼 정의된 타입들은 이들이 정의된 스코프 내에서만 정의 가능하다.

<br>

한 가지 짚고 넘어가야 할 점은, 위 예제의 `Score` 타입의 경우 사실상 `int`와 동일한 타입이다.
그럼에도 위와 같이 타입명을 지정해준 것은 타입명 자체를 일종의 **documentation**으로 볼 수 있기 때문이다.

이러한 타입 지정은 해당 타입의 변수 또는 인스턴스가 코드 내에서 어떠한 역할을 하며,
어떠한 데이터를 저장할 지에 대한 정보를 제공할 수 있다.
위 예제에서 `Score`는 `int`와 똑같은 정수 타입이기는 해도, 무식하게 큰 정수나 음수인 값에 대해서는 유효하지 않은 값임을 파악할 수 있을 것이다.

위 예제의 `Employee`은 유저가 정의한 타입을 다시 정의한 경우인데, 이 또한 같은 맥락에서 바라볼 수 있다.
저장하고 있는 데이터의 종류는 같을지라도, 이들이 사용되어야 할 적합한 맥락에 대해서 정보를 제공할 수 있다.

<br><br>

### Inheritance in Go?

Go에는 객체지향과 상속 개념이 없다. type을 선언할 수 있지만, 이는 말 그대로 어디까지나 선언만 할 수 있는 것이다.

```go
type HighScore Score
type Employee Person
```

위와 같은 `type` 선언은 상속처럼 보일 수는 있지만, 엄연히 다르다. 실질적으로는 이름만 다른 동일한 타입이 두 개 선언되는 것.
이들 사이에는 어떠한 계층 구조도 존재하지 않는다.

객체지향에서 *child class*는 *parent class*가 가진 모든 메소드와 값들을 사용할 수 있어야 하며, parent class가 사용되는 곳 어디에든 사용될 수 있어야 한다.
반면 Go에서는, 위 예제의 `Score` 인스턴스가 사용되는 상황에서 `HighScore` 인스턴스를 사용하려면 타입 변환을 해주어야 한다.

```go
// assigning untyped constants is valid
var i int = 300
var s Score = 100
var hs HighScore = 200
hs = s                  // compilation error!
s = i                   // compilation error!
s = Score(i)            // ok
hs = HighScore(s)       // ok
```

<br><br>

### Enumeration in Go - iota

여러 프로그래밍 언어에 존재하는 *Enumeration*에 대한 개념 대신, Go에는 `iota`가 존재한다. 바로 예제를 확인해보자.

```go
	type MailCategory int
	const (
		Uncategorized MailCategory = iota // 0
		Personal                          // 1
		Spam                              // 2
		Social                            // 3
		Advertisement                     // 4
	)

	fmt.Println(Uncategorized, Personal, Spam, Social, Advertisement)
```

```bash
0 1 2 3 4
```

위 예제의 실행 결과를 확인해보면, 0부터 4까지의 수가 순서대로 할당되었음을 알 수 있다.
이는 `iota`가 첫 번째 상수인 `Uncategorized`에 0, 두 번째 상수인 `Personal`에 1, 이런 식으로 점점 증가되게끔 값을 할당하였기 때문이다.
또한, 만일 새로운 `const` 선언 블록이 존재할 경우, iota는 0이 될 것이다.

<br>

```go
	type BitField int
	const (
		Field1 BitField = 1 << iota // assigned 1
		Field2                      // assigned 2
		Field3                      // assigned 4
		Field4                      // assigned 8
		_                           // passed 16
		Field6                      // assigned 32
	)

	fmt.Println(Field1, Field2, Field3, Field4, Field6)
```

`_`를 이용하면 iota로 할당되는 값을 건너뛸 수 있다.
또한 `iota`를 사용할 때 위와 같은 표현식을 사용하여 값들을 할당할 수도 있다.
다만 이런 경우, 무슨 목적으로 이런 코드를 짰는지 잘 명시해주는 것이 좋겠다.

<br>

단 `iota`를 사용하려면 `iota`에 의해서 할당되는 값이 큰 의미가 없는 경우여야 한다.
0, 1, 2, ... 등 `iota`에 의해 할당되는 값들은 단순히 서로를 구분하기 위해서 사용되는 값일 뿐이며, 이 값을 직접적으로 사용해선 안된다.
만일 `iota`를 사용하는 `const` 블록 중간에 새로운 상수를 추가하면 값들이 전체적으로 바뀔 것이다.
이 때 `iota`에 의해 할당되는 값을 직접적으로 사용한다면 이에 영향을 받을 것이다.

특정 인터페이스와 직접적으로 관련되어있지 않은 내부적인 로직에서 사용하는 것이 좋다.
만약 어느 `struct` 타입에 `iota`를 사용하는 Enumeration 필드가 존재하고, 해당 인스턴스들이 DB에 저장되어있다고 가정해보자.
그런데 `iota`를 사용하는 `const` 블록 중간에 새로운 상수를 추가하면 DB에 저장된 값들이 완전히 다른 값을 가리키게 될 것이다.

따라서 상수의 값이 중요한 경우이거나 내부적인 로직에서 사용하는 것이 아니라면 `iota`를 쓰지 말고 그냥 값을 직접 할당해주는 편이 좋다.
그게 아니라면 문서를 잘 써놓자.

<br><br>

## Methods

---

Go에서는 *User-defined type*에 대해 메소드를 생성할 수 있다.
일반적인 함수 선언과 유사하지만, `func`와 메소드명 사이에 **receiver**를 명시해준다.
보통의 변수 선언처럼 변수명을 먼저 적고 타입을 뒤에 적는다.
일반적으로는 타입명의 맨 앞글자를 소문자로 적는다고 한다.

```go
type Person struct {
	FirstName string
	LastName  string
	Age       int
}

// defining methods for user-defined type
func (p Person) String() string { // The receiver appears between the keyword func and the name of the method
	return fmt.Sprintf("%s %s, age %d", p.FirstName, p.LastName, p.Age)
}

func main() {
	p := Person{
		FirstName: "Fred",
		LastName:  "Fredson",
		Age:       52,
	}
    // method invocations look familiar to those who have used methods in other languages
	output := p.String()
	fmt.Println(output)
}
```

Go에서는 함수 오버로딩을 지원하지 않으며, 메소드도 동일하다.
동일한 타입에서 두개 이상의 동일한 이름을 가진 메소드를 선언할 수 없다.

또한 타입과 이에 대한 메소드가 선언된 파일을 서로 분리할 수는 있지만, 같은 파일 에서 함께 선언하는 것이 권장된다고 한다.

<br><br>

### Pointer Receivers

함수에서 포인터 파라미터를 사용할 때처럼, *Receiver*에도 포인터를 사용할 수 있다.
이 때 *Value Receiver*를 사용할 때와의 차이점은 *Receiver*로 패스한 값이 변경될 수 있다는 것이다.

*Pointer Reciver*에 대한 몇 가지 규칙이 존재한다.

1. 메소드가 _Reciver_ 값을 변경한다면, 반드시 *Pointer Reciver*를 사용한다.
2. 메소드가 `nil` 인스턴스를 다뤄야 한다면, 반드시 *Pointer Reciver*를 사용한다.
3. 메소드가 _Reciver_ 값을 변경하지 않는다면, *Value Reciver*를 사용할 수 있다.

_Reciver_ 값을 변경하지 않는 메소드에 대해서도 *Pointer Reciver*를 사용하는 것이 국룰이라고 한다.
다만 난 잘 모르겠다. 개인적으로는 값을 변경하지 않는다면 명시적으로 *Value Reciver*를 써도 되는 거 아닌가 싶다.

<br>

```go
type Counter struct {
	total       int
	lastUpdated time.Time
}

// pointer receiver should be used when the method modifies the receiver or handles nil instances
func (c *Counter) Increment() {
	c.total++
	c.lastUpdated = time.Now()
}

// value receiver can be used when the method doesn't modify the receiver
func (c Counter) String() string {
	return fmt.Sprintf("total: %d, last updated: %v", c.total, c.lastUpdated)
}

func main() {
	var c Counter
	fmt.Println(c.String())
	// Go automatically converts it to a pointer type.
	c.Increment() //c.Increment() is converted to (&c).Increment()
	fmt.Println(c.String())
}
```

함수에 포인터 파라미터를 넘길 때와는 달리, Receiver에 `&`를 붙이지 않아도 된다.
위 `c.Increment()` 부분은 자동으로 `(&c).Increment()`로 변환된다.
아래 코드는 예제의 실행 결과이다.

```bash
total: 0, last updated: 0001-01-01 00:00:00 +0000 UTC
total: 1, last updated: 2022-08-10 17:54:27.046864964 +0900 KST m=+0.000053109
```

<br>

이러한 규칙들에 대해 잘 이해하면, 아래 예제의 실행 결과도 알 수 있을 것이다.

```go
func doUpdateWrong(c Counter) {
    c.Increment()
    fmt.Println("in doUpdateWrong:", c.String())
}

func doUpdateRight(c *Counter) {
    c.Increment()
    fmt.Println("in doUpdateRight:", c.String())
}

func main() {
    var c Counter
    doUpdateWrong(c)
    fmt.Println("in main:", c.String())
    doUpdateRight(&c)
    fmt.Println("in main:", c.String())
}
```

`doUpdateWrong()` 함수의 스코프 내에서 `c.Increment()`를 호출시 `c`가 변경되고, 그 결과가 이후 출력에서 반영된다.
하지만 `doUpdateWrong()` 함수는 파라미터인 `Counter`를 *pass by value*로 받았기 때문에 `main()` 함수로 되돌아왔을 때 변경사항이 유지되지 않는다.
반면 `doUpdateWrong()` 함수는 파라미터를 *pass by pointer*로 받았기에, 변경사항이 유지된다.

위 예제의 실행 결과는 아래와 같다.

```bash
in doUpdateWrong: total: 1, last updated: 2022-08-11 01:35:23.983808201 +0900 KST m=+0.000097936
in main: total: 0, last updated: 0001-01-01 00:00:00 +0000 UTC
in doUpdateRight: total: 1, last updated: 2022-08-11 01:35:23.983813841 +0900 KST m=+0.000103576
in main: total: 1, last updated: 2022-08-11 01:35:23.983813841 +0900 KST m=+0.000103576
```

<br>

이렇게 유저가 정의한 타입에 Method를 통해 *Getter*나, *Pointer Reciver*를 이용하여 *Setter*를 정의할 수는 있다.
다만 필드에 직접 값을 할당하는 경우가 아니거나, 여러 필드를 한 번의 오퍼레이션으로 처리해야 하는 경우가 아니라면,
Go에서는 되도록이면 필드값에 직접 접근하는 것을 권장한다.

<br><br>

*Pointer Reciver*는 `nil` 인스턴스를 다뤄야 할 때 사용할 수 있다.

다른 언어들의 경우 `null`이나 `None` 인스턴스에서 메소드를 호출하면 에러가 발생한다.
Go에서도 `nil` 인스턴스에서 메소드를 호출할 때 *Value Reciver*인 경우에는 *panic*이 발생하지만, *Pointer Reciver*인 경우 메소드가 정상적으로 호출된다.
이 경우, 메소드가 `nil` 인스턴스를 처리할 수 있게끔 작성되어 있어야 한다.

```go
type IntTree struct {
	val         int
	left, right *IntTree
}

func (it *IntTree) Insert(val int) *IntTree {
	if it == nil { // case that handles when the receiver is a nil instance
		return &IntTree{val: val} // cannot assign its address into receiver directly
	}
	if val < it.val {
		it.left = it.left.Insert(val)
	} else if val > it.val {
		it.right = it.right.Insert(val)
	}
	return it
}

func (it *IntTree) Contains(val int) bool {
	switch {
	case it == nil: // case that handles when the receiver is a nil instance
		return false
	case val < it.val:
		return it.left.Contains(val)
	case val > it.val:
		return it.right.Contains(val)
	default:
		return true
	}
}

func main() {
	var it *IntTree
	it = it.Insert(5)
	it = it.Insert(3)
	it = it.Insert(10)
	it = it.Insert(2)
	fmt.Println(it.Contains(2))  // true
	fmt.Println(it.Contains(12)) // false
}
```

위 예제는 `nil` 인스턴스를 핸들링할 수 있는 정수형 바이너리 트리의 예제이다.

`IntTree.Contains()` 메소드는 현재 receiver가 `nil`인지에 따라 해당 값이 포함되어 있는가의 여부를 판단하며
`IntTree.Insert()` 메소드는 현재 receiver가 `nil`일 경우 현 위치에 값을 추가한 값을 반환한다.
단, 이때는 포인터 파라미터를 사용할 때처럼 receiver에 특정 주소값을 할당하여도, 원본 포인터가 변경되지는 않는다.

<br><br>

### Methods and Functions

Go에서 메소드는 함수와 유사한 점이 많다.

```go
type Adder struct {
	start int
}

func (a Adder) AddTo(val int) int {
	return a.start + val
}

func main() {
	myAdder := Adder{start: 10}
	fmt.Println(myAdder.AddTo(5)) // prints 15

	f1 := myAdder.AddTo           // We can also assign the method to a variable or pass it to a parameter of type func(int)int
	fmt.Println(f1(10))           // prints 20

	f2 := Adder.AddTo
	fmt.Println(f2(myAdder, 15)) // prints 25
}
```

함수를 변수에 할당하여 사용할 수 있듯, 위 예제의 `f1`처럼 메소드도 변수에 할당하여 사용할 수 있다.
이 때 이 메소드의 타입은 `func(int)int`가 되며, 이를 *method value*라 한다.

*method value*는 *closure*처럼 파라미터로 넘기거나 할 수도 있다.
*method value*를 선언할 때 붙어있던 *receiver*가 고정되어 있기 때문에, 이를 호출할 경우 해당 *receiver*가 영향을 받는다.

위 예제의 `f2`처럼 그냥 타입명에 메소드를 붙인 것을 변수에 할당할 수도 있다.
이를 *method expression*이라 한다. 이 때 이 메소드의 타입은 `func(Adder, int) int`가 되며, 첫 번째 파라미터가 *receiver*가 된다.

이렇게 Go에서는 메소드를 함수처럼 사용할 수 있기에 큰 차이가 없기에 어느 것을 사용해야 할지 혼동이 올 수 있다.
만약 작성하고자 하는 로직이 입력 파라미터에 의해서만 영향을 받는다면 함수를 사용하는 것이 옳다.
반면 프로그램이 실행되며 설정되고, 실행 중 계속 바뀌는 어떤 값에 의해 로직이 영향을 받을 수 있다.
그러한 경우 이 값들은 `struct`에 저장되어야 하고 메소드를 사용하는 것이 좋다.

<br><br>

## Embedding

---

Go에는 상속이 없지만 **Embedding**을 통해 구조화된 `struct` 타입을 구성할 수 있다.

기본적인 예제는 다음과 같다.

```go
type Employee struct {
	Name string
	ID   string
}

func (e Employee) Description() string {
	return fmt.Sprintf("%s (%s)", e.Name, e.ID)
}

type Manager struct {
	// Employee as an embedded field
	Employee // no name assigned to this filed. only type.
	Reports  []Employee
}

func (m Manager) FindNewEmployees() []Employee {
	// do business logic
	return m.Reports
}

func main() {
	m := Manager{
		Employee: Employee{
			Name: "Bob Bobson",
			ID:   "12345",
		},
		Reports: []Employee{},
	}
	fmt.Println(m.ID)            // prints 12345
	fmt.Println(m.Description()) // prints Bob Bobson (12345)
}
```

`Manager`를 정의할 때 `Employee`를 필드명 없이 선언해줌으로써, `Employee`는 `Manager`의 **Embedded Field**가 된다.
`Manager`에서는 `Employee`의 필드에 접근할 수 있다.

<br>

```go
type Inner struct {
    X int
}

type Outer struct {
    Inner
    X int
}

func main() {
	o := Outer{
		Inner: Inner{
			X: 10,
		},
		X: 20,
	}
	fmt.Println(o.X)       // prints 20
	fmt.Println(o.Inner.X) // prints 10
}
```

위 예제처럼 *Embedding*된 구조체의 내부와 외부 양쪽에 동일한 필드명을 가진 상황이 생길 수 있다.

이러한 경우, `Outer`에 있는 `Inner` 내부에 위치한 X에 접근하려고 할 때는 `Inner`를 명시해줘야 한다.

<br><br>

*Embedding*은 다른 언어에서 찾기 힘든, 흔치 않은 개념이다. 그래서 구조적으로 비슷한 상속과 연관지어서 생각하곤 하는데, *Embedding*은 상속과는 명백하게 다르다.

<br>

위 `Manager`와 `Employee` 예제에 이어서, 아래 예제도 살펴보자.

```go
var m Manager := {/*fields*/}
var eFail Employee = m			// complie error
var eOk Employee = m.Employee   // successfully compiled
```

만약 상속이었다면 위 `var eFail Employee = m` 라인이 정상적으로 컴파일되었을 것이다.
`Manager`를 `Employee`의 하위 개념으로 보기 때문.
하지만 *Embedding*은 상속과는 차이가 있기 때문에 에러가 발생한다.

<br>

Go는 상속을 지원하지 않기 때문에 폴리모피즘과는 거리가 있고, **Dynamic Dispatch**(동적 디스패치)도 존재하지 않는다.

```go
type Inner struct {
	A int
}

func (i Inner) IntPrinter(val int) string {
	return fmt.Sprintf("Inner: %d", val) // This always call Inner.IntPrinter()
}

func (i Inner) Double() string {
	return i.IntPrinter(i.A * 2)
}

type Outer struct {
	Inner
	S string
}

func (o Outer) IntPrinter(val int) string {
	return fmt.Sprintf("Outer: %d", val)
}

func main() {
	o := Outer{
		Inner: Inner{
			A: 10,
		},
		S: "Hello",
	}

	fmt.Println(o.Double())
}
```

```bash
Inner: 20
```

위 예제에서 `o.Double()`를 호출하면 겹치는 메소드명이 없기 때문에 `o.Inner.Double()`가 자동 호출된다.
이 때 `o.Inner.Double()` 내부에서는 `o.Inner.IntPrinter()`를 호출하기 때문에, `Inner: 20`가 출력된 것이다.
이렇듯 Go에서 메소드는 전혀 오버라이딩되지 않는다.

<br><br>

## Interface

---

책에서는 Go의 진정한 꽃이 Goroutine을 위시한 Concurrency가 아니라, 이 *Interface*라고 하는데, 대체 얼마나 맛집이기에..

설명에 앞서 인터페이스는 아래와 같이 정의할 수 있다.

```go
type Stringer interface {
	String() string
}
```

`struct`를 정의하는 것과 큰 차이는 없는 것 같다.
암묵적인 룰이 하나 있는데, 인터페이스의 이름은 대개 "er"로 끝난다.
그 예로 `fmt.Stringer`, `io.Reader`, `io.Closer`, `io.ReadCloser`, `json.Marshaler`, `http.Handler` 등등이 있다.

<br>

*Interface*는 객체지향의 *Abstract Class*와 유사하지만, 차이점이 있다.
다른 객체지향 언어에서는 *Abstract Class*에서 선언된 메소드 등을 *Concrete Class*에서 구현한다.

반면 Go의 인터페이스는 <span style="background-color: #FFF5B1">암묵적</span>인 개념이다.
*Concrete Type*에서는 인터페이스를 구현한다고 선언하지 않는다.
만약 *Concrete Type*에서 구현하는 메소드들이 인터페이스에서 선언된 모든 메소드들을 포함한다면,
그 때 *Concrete Type*가 인터페이스를 구현한다고 할 수 있으며, 이래서 암묵적이라는 표현을 사용하는 듯 하다.
그래서 Go에서는 *Concrete Type*을 인터페이스에 할당한다는 느낌으로 받아들여야 하는 것 같다.

_Interface_ 덕에 Type-Safe, 디커플링, 정적/동적 언어에서 기능을 연결하는 것이 가능해진다고 하는데, 이건 좀 더 해봐야 알 듯 하다.

Javascript, Python 등의 동적 타입 언어에서는 인터페이스가 없는 대신 *Duck Typing*이란 것을 사용한다.
*Duck Typing*은 어떤 인스턴스가 원하는 메소드(또는 필드)들을 가지고 있다면, 내가 원하는 타입으로 간주한다는 뜻이다.
프로젝트의 규모가 너무 크거나, 프로젝트가 너무 오래되어서 의존성을 추적하기 어려운 경우 이런 방식을 사용한다.

주로 정적 타입 언어를 사용하는 개발자라면 이런 방식에 대해 회의적이다.
인스턴스의 타입을 명시하지 않으면 어떤 타입인지 확인하기도 어려울 것이며, 어떤 기능을 할 수 있을지 예측할 수 없으리라 생각한다.

반면 Java에서는 다소 패턴이 다르다. 인터페이스의 정의와 구현이 각각 존재하지만, 인터페이스의 정의만 참조된다.
주로 동적 타입 언어를 사용하는 개발자들은 이 방식에 대해, 인터페이스가 바뀔 때마다 코드를 다시 짜야 하는 불편한 방식이라고 생각한다.

<br>

만약 어플리케이션이 잠정적으로 개선될 여지가 있다면 코드에 유연성이 필요하다.
하지만 코드가 하고 있는 일이 무엇인지에 대해 사람들이 이해할 수 있도록 하는 것도 중요하기에, 코드의 역할과 의존성 등을 명시할 필요도 있다.
Go의 인터페이스는 양쪽 모두의 입장을 받아들인다.

아래 예제에서 Interface가 사용된 예시를 확인할 수 있다.

```go
type LogicProvider struct{}

func (lp LogicProvider) Process(data string) string {
	// do some business logic
	return data + "!"
}

type Logic interface {
	Process(data string) string
}

type Client struct {
	L Logic
}

func (c Client) Program() {
	// get data from somewhere
	data := "hello world"
	refinedData := c.L.Process(data)
	fmt.Println(refinedData)
}

func main() {
	c := Client{
		L: LogicProvider{}, // concrete type assigned into Client's interface
	}
	c.Program()
}
```

_Concrete Type_ 역할을 하는 `LogicProvider`가 정의될 때, 이것이 `Logic`이라는 인터페이스에 관련된 것이라고 선언된 것은 없다.
`Logic`과 `LogicProvider`이 연결되는 것은, `Client` 인스턴스인 `c`가 생성될 때이며,
`LogicProvider`에는 `Logic`에서 정의된 것과 동일한 이름의 메소드인 `Process()`가 존재할 뿐이다.
따라서 `LogicProvider`가 `Logic`이라는 인터페이스를 위한 *Concrete Type*임을 알 수 있도록, 잘 문서화할 필요가 있다.

<br>

Go에서는 `io.Reader`나 `io.Writer` 등, 스탠다드 인터페이스도 존재한다.
스탠다드 인터페이스를 사용하는 것은 _decorator_ 패턴과 유사한데,
특정 인터페이스의 인스턴스를 받아서 동일한 인터페이스의 다른 인스턴스를 반환하는 _Factory Function_(객체를 반환하는 함수)를 자주 사용하기 때문.

아래 예제를 확인하자.

```go

func process(r io.Reader) error {
	// do something
}

func openfile(fileName string) error {
	r, err := os.Open(fileName)
	if err != nil {
		return err
	}
	defer r.CLose()
	return process(r)
}
```

위 코드에서 `os.Open()`에 의해 반환된 `os.File` 인스턴스는 `io.Reader` 인터페이스를 충족시킨다.
따라서 `process()` 함수 내에서 파일의 데이터를 읽을 수 있다.

아래 예제는 `gzip`을 통해 파일을 압축 해제할 수 있는 경우에, `gzip` 라이브러리를 사용하여 압축 해제하는 예제이다.

```go
func openfile(fileName string) error {
	r, err := os.Open(fileName)
	if err != nil {
	r	eturn err
	}
	defer r.Close()

	gz, err = gzip.NewReader(r)
	if err != nil {
		return err
	}
	defer gz.Close()
	return process(gz)
}
```

위처럼 스탠다드 라이브러리의 인터페이스가 코드에 잘 어울릴 것 같으면, 사용하는 것이 좋다.

예제에서는 `gzip`으로 압축 해제된 `io.Reader` 인터페이스의 인스턴스가 `gz`에 할당되고,
그 `gz`가 다시 한번 `process()`함수에서 `io.Reader`의 인스턴스가 된다.

어느 타입의 메소드들이 특정 인터페이스를 충족시키고도 남는 경우,
즉 인터페이스에 명시된 것 외의 메소드들이 존재한다고 해도 그 타입은 인터페이스를 충족시킨다.
이 때문에 한 타입이 두 개 이상의 인터페이스를 동시에 충족시킬 수 있다. 이 때 명시된 것 외의 메소드들은 무시한다.
이를테면 `io.File` 타입은 `io.Reader`와 `io.Writer`를 동시에 충족시킨다.
즉, `io.File` 한 가지 타입으로 읽고 쓰기가 동시에, 각각 지원되는 것이다.

<br><br>

### Embedding and Interfaces

`struct` 타입을 Embedding하는 것처럼, 인터페이스도 인터페이스 안에 Embedding할 수 있다.
스탠다드 라이브러리의 `io.ReadCloser`도 `io.Reader`와 `io.Closer`가 임베딩된 것이다.
아래의 예제와 유사하다.

```go
type Reader interface {
	Read(p []byte) (n int, err error)
}

type Closer interface {
	Close() error
}

type ReadCloser interface {
	Reader
	Closer
}
```

<br><br>

### Accept Interfaces, Return Structs

Go의 빡고수들이 버릇처럼 읊는 말이 **Accept Interfaces, Return Structs**라고 한다.
이는 함수에 의해 호출되는 로직은 반드시 인터페이스를 통해 호출되어야 하며,
함수의 결과값은 반드시 concrete type(struct)이어야 한다는 것이다.
함수의 파라미터로 인터페이스를 받으면 어떤 기능을 사용할 것인지 명시적으로 선언하면서도, flexible함을 동시에 챙길 수 있다.

만약 API가 (암묵적이어야 할) 인터페이스를 리턴한다면, 디커플링이라는 인터페이스의 장점을 잃는다.
만약 그렇게 된다면 서드 파티 모듈의 인터페이스에 코드가 종속되는 결과를 낳게 된다.
대개 서드 파티 인터페이스에 대한 클라이언트의 의존성을 줄이고자 하기 마련이다.
이를 위해 또다른 인터페이스를 작성한 뒤, 타입 변환을 하는데(의존성 주입, Dependency Injection),
이는 어플리케이션의 기능을 제약할 수도 있기에 좋은 방법은 아니다.

인터페이스를 리턴하지 말아야 하는 또 다른 이유는 버전에 관련된 것이다.
Concrete Type을 리턴하는 경우에는 기존 코드에 새로운 메소드나 필드가 별 문제 없이 추가될 수 있다.
반면 인터페이스의 경우에는 새로운 메소드를 추가하려면 기존에 존재하는 모든 메소드들의 구현을 업데이트해야 한다.
따라서 API를 롤백해야 하는 경우에도, major version number를 증가시켜야 한다.

인터페이스가 정해져 있고 파라미터에 따라서 다른 인스턴스가 나오는 factory function을 짜는 것보다는,
타입들을 분리하여 concrete type이 반환되는 각각의 함수를 작성하는 것이 좋다.

웬만하면 인터페이스를 반환하지 않는 것이 좋긴 한데, 가끔 어쩔 수 없이 하는 경우가 있다. 대표적인 예시가 바로 에러이다.
Go에서는 `error` 인터페이스를 반환하도록 선언되는 경우가 많다.
이는 인터페이스가 Go에서 유일하게 사용할 수 있는 추상 유형이며. `error` 인터페이스의 다른 구현을 사용해야 하는 경우가 많기 때문이다.
따라서 가능한 모든 옵션을 처리하기 위해 인터페이스를 사용해야 한다.

다만 이러한 패턴의 잠재적인 문제점이 존재한다.
concrete type을 반환하는 경우 Heap 할당이 줄어들기에 가비지 콜렉터의 워크로드가 줄어든다.
반면 인터페이스를 파라미터로 사용하는 함수의 경우, 각 인터페이스마다 Heap 할당되므로, 가비지 콜렉터가 힘들어한다.
결국은 더 좋은 성능과 더 좋은 추상화 사이에 trade-off가 존재하는 셈이다.

그렇기 때문에 되도록이면 코드를 예쁘게, 고치기 편하게 작성하는 것이 좋다.
그래야 인터페이스로 인한 잠재적인 성능 문제가 발생하여도, 이를 concrete type으로 변경하는 등의 작업을 하기가 쉬워진다.

<br><br>

### Interfaces and nil

많이 봐왔듯, `nil`은 포인터의 Zero value이다.
마찬가지로 `nil`은 인터페이스의 Zero value이긴 하지만, Concrete Type들에 비해 간단하지만은 않다.

```go
	var s *string
	fmt.Println(s == nil)
	var i interface{}
	fmt.Println(i == nil)
	i = s
	fmt.Println(i, i == nil)
```

```bash
<nil> true
<nil> true
<nil> false
```

Go의 인터페이스는 내부적으로 두 쌍의 포인터로 구성되며, 각각 타입, 값을 가리킨다.
만약 타입을 가리키는 포인터가 `nil`이 아니라면, 인터페이스는 `nil`이 아닌 것이다. 출력 결과의 세 번째 라인이 저 모양인 것이 이 때문.

인터페이스에 할당된 concrete type에 따라 호출되는 메소드가 달라지듯, 인터페이스에서 `nil`은 메소드를 호출할 수 있는지 여부를 나타낸다.
만약 인터페이스가 `nil`임에도 메소드를 호출하였다면, *panic*이 발생한다.
만약 인터페이스가 `nil`이 아닌데 메소드를 호출하였다면, 메소드를 호출하려고 시도할 것이다.
(다만 위 예제와 같은 경우 인터페이스에 연결된 값이 `nil`이기 때문에, 곧바로 *panic*이 발생할 것이다.)

인터페이스 인스턴스의 타입을 나타내는 포인터가 `nil`이 아니라면, 이는 `nil`이 아닌 것이다.
그렇다고 해서 이 인터페이스의 값이 `nil`인지는 확실하게 알 수 없기 때문에, 나중에 나올 *Reflection*을 사용해야 한다.

<br><br>

### The Empty Interface Says Nothing

정적 타입 언어에서도 아무 타입이나 다 집어넣을 수 있는 변수가 필요할 때가 있다.
그러한 경우, Go에서는 `interface{}`를 사용할 수 있다.

```go
var i interface{} // empty interfece variable can store a value of any type

i = 20
fmt.Println(i)

i = "hello"
fmt.Println(i)

i = struct {
	FirstName string
	LastName  string
}{"Fred", "Fredson"}
fmt.Println(i)
```

비어 있는 인터페이스는 말 그대로 아무 값이나 다 저장할 수 있다.
인터페이스가 비어 있다는 말은 0개 이상의 메소드가 있는 타입들을 가리킬 수 있다는 뜻이며,
그래서 메소드가 없는 `int`, `string` 등의 Primitive Type들도 저장이 가능해진다.

<br>

비어 있는 인터페이스가 사용되는 예 중 하나는, JSON처럼 외부 소스에서 읽어온 불분명한 스키마의 placeholder로 사용하는 것이다.

```go
data := map[string]interface{}{}

contents, err := ioutil.ReadFile("testdata/sample.json")
if err != nil {
    return err
}
defer contents.Close()

json.Unmarshal(contents, &data)
```

위 코드를 실행하면 JSON 데이터가 `data` 변수에 저장된다.

<br>

또 다른 경우에는, 유저가 만든 자료구조에서 다양한 타입의 값을 저장하기 위해 사용된다.
Go의 `slice`, `map` 등 타입들은 한 가지 타입밖에 저장하지 못하는데 비해, `interface{}`는 여러 타입을 가리킬 수 있기 때문.

```go
type LinkedList struct {
    Value interface{}
    Next    *LinkedList
}

func (ll *LinkedList) Insert(pos int, val interface{}) *LinkedList {
    if ll == nil || pos == 0 {
        return &LinkedList{
            Value: val,
            Next:    ll,
        }
    }
    ll.Next = ll.Next.Insert(pos-1, val)
    return ll
}
```

위 코드는 러프한 예시니까 실제로 사용하지는 말자.

또 다른 사용예로는 함수의 파라미터로 `interface{}`를 받는 경우인데, *reflection*을 하기 위해 사용한다고 하는 것 같다.
*reflection*은 나중에 나온다!

<br>

근데 `interface{}`를 되도록이면 사용하지 않는 게 좋다.
Go는 기본적으로 정적 타입 언어로 디자인된 언어인 만큼, `interface{}`로 여러 타입들을 쑤시고 다니는 건 좋지 않다.
`interface{}`를 사용하여 값들을 저장해야 할 상황에서, 값을 다시 읽어오려면 어떻게 해야 할까?
그럴 때 바로 아래에서 설명할 _Type Assertions_ 및 *Type Switches*를 사용해 보자.

<br><br>

### Type Assertions and Type Switches

Go에는 어떤 변수의 인터페이스가 가리키는 타입이 특정한 Concrete Type인지,
혹은 Concrete Type이 또 다른 인터페이스를 구현하는지 확인할 수 있는 두 가지 방법이 있다.

한 가지가 바로 **Type Assertion**이다.
이는 어떤 인터페이스를 구현하는 Concrete Type에 이름을 붙이거나,
또는 이 인터페이스를 구현하고 있는 Concrete Type이 구현하는 또 다른 인터페이스에 이름을 붙인다.

```go
type MyInt int

func main() {
    var i interface{}
    var mine MyInt = 20
    i = mine
    i2 := i.(MyInt) // using type assertion, we can confine the type of concrete type that the interface indicates
    fmt.Println(i2 + 1)
}
```

이렇게 *Type Assertion*을 사용하여 `i`가 가리키고 있는 타입을 `MyInt`로 한정할 수 있다.
위 예제에서 변수 `i2`의 타입은 `MyInt`가 된다.

<br>

만약 잘못된 타입으로 *Type Assertion*을 하면 *panic*이 발생한다.

```go
i3 := i.(string) // this line occurs a panic
fmt.Println(i3)
```

<br>

`int`와 `MyInt`는 본질적으론 같은 타입이지만, Go는 타입에 엄격하기 때문에 *Type Assertion*을 사용할 때 Concrete Type끼리 일치시켜주어야 한다.
따라서 아래와 같은 예제는 *panic*이 발생한다.

```go
i4 := i.(int) // this line also occurs a panic
fmt.Println(i4)
```

<br>

`map`을 사용할 때 보았던 *comma ok idiom*을 사용하여 panic을 회피할 수 있다.

```go
// ok is set to true if the type conversion was successful.
// if it was not, ok is set to false and the other value is set to its zero value
i5, ok := i.(int) // i5 is set to 0, ok is set to false
if !ok {
	msg := fmt.Errorf("unexpected type for %v", i5)
	fmt.Println(msg)
}

i6, ok := i.(MyInt)
if !ok { // i6 is set to 20, ok is set to true
	// this block is not reached
	msg := fmt.Errorf("unexpected type for %v", i6)
	fmt.Println(msg)
}
```

`map`에서 봤던 패턴과 유사하다.
*Type Assertion*에 성공하면 변수 `ok`는 `true`가 되며, 나머지 변수는 인터페이스가 가리키는 값으로 초기화된다.  
반면 실패하면 `ok`는 `false`가 되며, 나머지 변수는 해당 타입의 Zero value로 초기화된다.

그렇게 얻은 `ok` 변수값을 통해 이를 `if`문으로 처리할 수는 있지만
Go에서는 에러 핸들링을 통해 처리하는 것을 더 지향한다는 것 같다. 에러 핸들링은 다음 챕터에서 나온다!

어찌 됐든, 인터페이스가 가리키고 있는 데이터의 타입이 확실하다고 생각해도 되도록이면 *comma ok idiom*를 쓰는 것이 좋다.
다른 사람이나 미래의 내가 언제 이 코드를 다시 사용할 지도 모르는 일이며, 코드를 조금 수정했는데 런타임 에러가 날 수도 있으니 말이다.

<br><br>

어느 인터페이스의 타입에 여러 개의 후보군이 있다면, *Type Switch*를 써보도록 하자.

```go
func typeSwitch(i interface{}) {
	switch i.(type) {
	case nil:
		fmt.Println("nil")
	case int:
		fmt.Println("int")
	case MyInt:
		fmt.Println("MyInt")
	case string:
		fmt.Println("string")
	case bool, rune:
		fmt.Println("bool or rune")
	default:
		fmt.Println("what is this")
	}
}

func main() {
	var a int = 12
	var b MyInt = 23
	var c *string
	d := "asdasd"
	e := map[string]string{
		"hi": "there",
	}
	var f interface{}

	typeSwitch(a)
	typeSwitch(b)
	typeSwitch(c)
	typeSwitch(d)
	typeSwitch(e)
	typeSwitch(f)
}
```

```bash
int
MyInt
what is this
string
what is this
nil
```

기본적으로 형태는 boolean 표현식이 사용되지 않는 일반적인 `switch`문의 형태와 유사하다.
다만 switch문 이후에 `i.(type)`로, 인터페이스의 타입을 나타내어 주면 된다.
이렇게 각 case문에 타입을 할당함으로써, 인터페이스의 타입에 따라 처리할 수 있다.

실행 결과를 보면 대충 알 수 있겠지만, 3번째 줄의 경우 주의해야 할 것 같다.
변수 `c`는 값이 `nil`인 것이지, 타입은 `nil`이 아니라 `*string`이다.
실제로 `switch`문에서 `case nil`에 걸리는 경우는, 변수 `f`처럼 인터페이스가 가리키는 대상이 아무 것도 없을 때이다.

인터페이스가 가리키는 타입에 대해 전혀 모를 경우, *reflection*을 사용하면 된다고 한다.
나중에 나온다. 나중에...

*Type Assertion*과 *Type Switch*가 꽤나 유용한 기술처럼 보이는데, 자주 사용하면 안된다고 한다.
웬만하면 함수의 파라미터나 리턴값은 특정한 몇 가지의 타입으로만 지정하는 것이 좋으며, 나머지 다른 타입들은 가능은 하더라도 안되게 해야 한다.
그렇지 않으면 우리가 짜는 함수가 어떤 타입들을 지원하는지에 대해 정확히 명시하지 못할 수 있다.
대충 `interface{}`를 사용하는 걸 지양하라는 말과 일맥상통하는 것 같다. `interface{}`를 안 쓰면 특정한 타입을 명시할 수밖에 없을 테니 말이다.

<br>

*Type Assertion*과 *Type Switch*가 유용하게 사용되는 예제에 대해 알아보자.

가장 일반적인 경우, 한 인터페이스가 가리키고 있는 concrete type을 보기 위해 사용되는데,
이 concrete type은 다른 인터페이스에서도 가리킬 수 있는 경우이다.
이를테면 `io` 라이브러리의 `io.File` 등 여러 타입들은 `io.Reader`와 `io.Writer` 두 가지 인터페이스를 모두 만족시킨다.
그 때 `io.Reader`가 가리키고 있는 타입이 어떤 타입인지 확인하기 위해 사용할 수 있을 것이다.

`io.Copy()` 함수는 `io.Reader`와 `io.Writer` 인터페이스들을 파라미터로 받아, `io.copyBuffer()`함수를 실행한다.
다만 이때 `io.Reader`의 파라미터가 `io.ReaderFrom`에서도 사용할 수 있거나, `io.Writer`의 파라미터가 `io.WriterTo`에서도 사용할 수 있다면,
함수 내용 대부분이 생략될 수 있다.

```go
// copyBuffer is the actual implementation of Copy and CopyBuffer.
// if buf is nil, one is allocated.
func copyBuffer(dst Writer, src Reader, buf []byte) (written int64, err error) {
    // If the reader has a WriteTo method, use it to do the copy.
    // Avoids an allocation and a copy.
    if wt, ok := src.(WriterTo); ok {
        return wt.WriteTo(dst)
    }
    // Similarly, if the writer has a ReadFrom method, use it to do the copy.
    if rt, ok := dst.(ReaderFrom); ok {
        return rt.ReadFrom(src)
    }
    // function continues...
}
```

<br>

인터페이스는 API를 업그레이드할때도 사용된다고 한다.
챕터 12에서 *context*에 대해 알아볼 텐데, *context*란 취소를 관리하는 표준적인 방법을 제시하는 파라미터이다.
Go 버전 1.7부터 생긴 기능인지라, 이전 버전의 데이터베이스 드라이버 등에서는 지원하지 않는다.

Go 1.8부터는 `database/sql/driver` 패키지에 기존에 존재하는 인터페이스에 대한 새로운 컨텍스트 인식 유사체가 정의되었다.
이를테면 `StmtExecContext` 인터페이스에는 `ExecContext`라는 메소드가 있다.
스탠다드 라이브러리 데이터베이스 코드에 `Stmt` 인터페이스의 타입이 통과될 경우,
이 타입이 `StmtExecContext`에도 사용할 수 있는지 확인한다. 만약 그렇다면 `ExecContext`를 호출한다.
만약 그렇지 않다면, fallback code를 실행한다.

```go
func ctxDriverStmtExec(ctx context.Context, si driver.Stmt,
                       nvdargs []driver.NamedValue) (driver.Result, error) {
    if siCtx, is := si.(driver.StmtExecContext); is {
        return siCtx.ExecContext(ctx, nvdargs)
    }
    // fallback code is here
}
```

<br>

이런 optional interface 기능에는 한 가지 단점이 존재한다.
한 인터페이스로 여러 가지 타입을 사용하여 계층적 구조를 만드는 decorator 패턴을 사용하기 위해 인터페이스가 많이들 사용된다.
이 때, 어느 optional interface가 이 타입들 중 한 가지라도 사용할 수 있다면, *Type Assertion*과 *Type Switch*으로 이를 감지할 수 없다.

그 예로 `bufio`라는 표준 라이브러리는 buffered reader를 제공한다.
이 때 `bufio.NewReader()` 함수에 `io.Reader`를 지원하는 타입을 파라미터로 통과시키면, `*bufio.Reader`를 리턴받는다.
만약 파라미터로 넘겨진 `io.Reader`의 타입이 `io.ReaderFrom`도 지원하는 경우, 이를 buffered reader로 감싸게 되면 최적화가 되지 않는다.

에러 핸들링 할때도 본 현상인데, 에러는 다른 에러를 감싸는 것을 통해 추가적인 정보를 포함할 수 있다.
*Type Assertion*과 *Type Switch*로는 감싸진 에러를 확인할 수 없기 때문에,
제대로 핸들링하기 위해 감싸진 에러에 접근하려면 `errors.Is()`나 `errors.As()`같은 함수를 사용해야 한다.

<br>

*Type Switch*는 인터페이스를 지원하는 타입들이 여러 개 있고, 각 타입마다 다르게 처리해줘야 하는 경우 유용하다.
그중 가장 유용한 경우는, 유효한 타입이 딱 한 개만 존재하는 경우이다.

웬만하면 `switch`문에 `default`를 반드시 넣어주는 게 좋다.
인터페이스를 지원하는 타입을 추가했는데 `switch`문을 업데이트하는 것을 까먹은 경우 `default` 블록에 걸리므로, 문제를 추적하기 쉬워질 것이다.

<br><br>

### Function Types Are a Bridge to Interfaces

Go에서는 함수를 비롯하여 유저가 정의한 타입이라면 어떠한 타입이든 메소드를 추가할 수 있으며, 이는 굉장히 유용하다.

가장 일반적인 사례는 HTTP 요청을 처리하는 HTTP 핸들러이다. 이는 아래와 같이 인터페이스로 정의되어 있다.

```go
type Handler interface {
    ServeHTTP(http.ResponseWriter, *http.Request)
}
```

`http.ResponseWriter`, `*http.Request`를 파라미터로 받는 함수들은 `HandlerFunc`로 타입 변환을 할 수 있다.
그러면 `ServeHTTP()`를 호출할 수 있게 되며, `http.Handler` 인터페이스를 사용할 수 있게 된다.

```go
type HandlerFunc func(http.ResponseWriter, *http.Request)

func (f HandlerFunc) ServeHTTP(w http.ResponseWriter, r *http.Request) {
    f(w, r)
}
```

이러한 방식을 통해 `http.Handler`의 인터페이스를 충족시키기만 하면 함수, 메소드, Closure를 HTTP 핸들러로 사용할 수 있다.

<br>

Go에서 함수는 가장 중요한 개념인 만큼, 또 다른 함수의 파라미터로 전달된다.
한편으로, Go에서는 작은 인터페이스를 권장하며, 메소드가 하나 뿐인 인터페이스는 함수의 파라미터로 전달되는 함수를 대체할 수 있다.
그렇다면 이런 질문이 생길 수 있다. 파라미터인 함수의 타입을 언제 명시해줘야 하며, 언제 인터페이스를 써야 할까?

만약 함수가 다른 함수들이나, 파라미터가 아닌 state에 의존한다면,
인터페이스 파라미터를 사용하고 인터페이스에 대한 bridge로써 함수 타입을 정의하는 것이 좋다고 한다.
이를테면 이는 `http` 패키지에서 사용하는 방식이다. http 핸들러는 설정해주어야 하는 연쇄적인 함수 호출의 진입점일 가능성이 높다.
반면 함수가 `sort.Slice()`처럼 간단한 함수일 경우, 인터페이스보단 그냥 함수를 넘기는 게 좋다고 한다.

<br><br>

### Implicit Interfaces Make Dependency Injection Easier

**Dependency Injection**이란 코드가 수행하는 기능과 작업을 분명하게 명시해야 한다는 개념이다.
Go의 인터페이스는 디커플링을 맛깔나게 잘 해줘서 Dependency Injection이 엄청 잘 된다고 한다.
그래서 다른 언어에서 Dependency Injection를 위해 복잡한 프레임워크를 사용하는 반면,
Go는 어떠한 외부 라이브러리도 사용하지 않는다.

Dependency Injection이 어떻게 이루어지는지 보기 위해, 간단한 웹 서버 예제를 만들어보자.

```go
func LogOutput(message string) {
    fmt.Println(message)
}

type SimpleDataStore struct {
    userData map[string]string
}

func (sds SimpleDataStore) UserNameForID(userID string) (string, bool) {
    name, ok := sds.userData[userID]
    return name, ok
}
```

간단한 로깅 함수와 저장을 위한 데이터 타입, 및 데이터 탐색 메소드를 정의하였다.
`SimpleDataStore` 인스턴스를 생성하는 factory function을 정의해보자.

```go
func NewSimpleDataStore() SimpleDataStore {
	return SimpleDataStore{
		userData: map[string]string{
			"1": "Fred",
			"2": "Mary",
			"3": "Pat",
		},
	}
}
```

<br>

이제 유저에게 "hello" 또는 "good bye"라고 날리는 로직을 작성해 볼 것이다.
이 로직은 유저에게 접근해야 하므로 접근 대상이 되는 자료구조와, 로깅을 하는 함수에 대한 의존성이 존재한다.
하지만 우리는 `LogOutput()`이나 `SimpleDataStore`에 대한 직접적인 의존성을 만들고 싶지 않다.
미래에 다른 자료구조나 로깅 함수를 사용할 수도 있기 때문이다.

바로 이러한 경우, 인터페이스가 적절한 해법이 된다.

```go
type DataStore interface {
	UserNameForID(userID string) (string, bool)
}

type Logger interface {
	Log(message string)
}

type LoggerAdapter func(message string)

func (lg LoggerAdapter) Log(message string) {
	lg(message)
}
```

`LoggerAdapter`를 선언해 `LogOutput()`함수를 `Logger`에 연결해 주었다.
이제 우리의 비즈니스 로직은 인터페이스들을 사용하여 자료구조에 접근하고, 로깅을 할 수 있다.

의존성이 정의되었으니, 비즈니스 로직을 완성해보자.

```go
type SimpleLogic struct {
	l  Logger
	ds DataStore
}

func (sl SimpleLogic) SayHello(userID string) (string, error) {
	sl.l.Log("in say hello for " + userID)
	name, ok := sl.ds.UserNameForID(userID)
	if !ok {
		return "", errors.New("unknown user")
	}
	return "Hello, " + name, nil
}

func (sl SimpleLogic) SayGoodbye(userID string) (string, error) {
	sl.l.Log("in say goodbye for " + userID)
	name, ok := sl.ds.UserNameForID(userID)
	if !ok {
		return "", errors.New("unknown user")
	}
	return "Goodbye, " + name, nil
}

func NewSimpleLogic(l Logger, ds DataStore) SimpleLogic {
    return SimpleLogic{
        l:    l,
        ds: ds,
    }
}

func NewSimpleLogic(l Logger, ds DataStore) SimpleLogic {
	return SimpleLogic{
		l:  l,
		ds: ds,
	}
}
```

`Logger`와 `DataStore`를 필드로 갖는 `SimpleLogic`이라는 `struct`와, factory function을 정의해주었다.
이 `SimpleLogic` 내의 메소드는 다른 concrete type을 레퍼런스하지 않기 때문에, 의존성이 없다.
그래서 차후 라이브러리를 교체하더라도 인터페이스는 라이브러리와 관련이 없기 때문에 문제가 발생하지 않는다.

<br>

이제 `/hello`라는 엔드포인트를 정의해볼 것이다. 이 엔드포인트에서는 유저의 ID가 같이 오면 인사를 할 것이다.
*Controller*에게 인사를 할 로직을 쥐어주기 위해 인터페이스를 만들어주자.

```go
type Logic interface {
    SayHello(userID string) (string, error)
}
```

이 인터페이스는 `SimpleLogic`을 가리킬 수 있다.
인터페이스는 클라이언트 코드에서 정의되기 때문에, 수정이 필요하다면 클라이언트 코드에서 수정하면 그만이다.
따라서 `SimpleLogic`이 나중에 변경되거나, 혹은 새로운 로직이 추가되더라도 별다른 문제 없이 사용할 수 있다.

```go
type Controller struct {
	l     Logger
	logic Logic
}

func (c Controller) SayHello(w http.ResponseWriter, r *http.Request) {
	c.l.Log("In sayhello")
	userID := r.URL.Query().get("user_id")
	message, err := c.logic.SayHello(userID)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte(err.Error()))
		return
	}
	w.Write([]byte(message))
}

func NewController(l Logger, logic Logic) Controller {
	return Controller{
		l:     l,
		logic: logic,
	}
}
```

<br>

마지막으로, `main` 함수에서 모든 컴포넌트를 연결하고 서버를 열어보자.

```go
func main() {
	l := LoggerAdapter(LogOutput)
	ds := NewSimpleDataStore()
	logic := NewSimpleLogic(l, ds)
	c := NewController(l, logic)
	http.HandleFunc("/hello", c.SayHello)
	http.ListenAndServe(":8080", nil)
}
```

파일을 실행하여 서버를 연 뒤, 브라우저에서 `http://localhost:8080/hello?user_id=1` 및 `http://localhost:8080/hello?user_id=5` 등으로 접속해보자.

`http.HandleFunc("/hello", c.SayHello)` 라인을 잘 살펴보면, 두 번째 `http.HandleFunc()`의 두 번째 파라미터로 `c.SayHello()` 메소드를 보냈다.
이때 보내진 메소드는 `http.Handler` 인터페이스를 충족시키는 `http.HandlerFunc` 타입으로 변환이 된다.
`NewController`의 메소드임을 유지한 채로 말이다.

`main` 함수는 concrete type들이 실제로 선언되는 유일한 영역이다.
어느 타입 하나를 다른 타입으로 변경하고 싶다면, `main`에서만 변경해주면 된다.
이렇게 Dependency Injection을 통해 의존성을 Externalizing함으로써, 코드를 업데이트 할 때 변경해야 할 내용을 최소화할 수 있다.

Dependency Injection은 테스트를 더 쉽게 할 수 있도록 해주기도 한다.
환경이 다르더라도, 입출력이 제한된 상황에서 unit test를 하는 것은 코드를 효과적으로 재사용한다.
이를테면 위 예제에서 logger의 출력을 테스트하려고 한다면, logger의 출력을 capture하는 타입을 주입하고 인터페이스를 충족시켜주기만 하면 된다.

<br>

개인적으로는 Dependency Injection이 일단 짜놓으면 편하긴 한데, 직접 짜기에는 너무 복잡하고 양이 많아 보였다.
그럴 때에는 구글님들이 [Wire](https://github.com/google/wire)라는, Dependency Injection을 도와주는 유틸리티가 있는데,
자동적으로 concrete type 선언 코드를 만들어준다고 하니 필요하다면 잘 사용해보도록 하자.

<br><br>

### Go Isn’t Particularly Object-Oriented

Go라는 언어를 특정 스타일로 구분짓기는 어렵다.
일단 절차지향은 아닌 듯 한데, 메소드 오버라이딩이나 상속도 없어서 객체지향이라기에도 애매하다.
함수 타입과 closure가 있지만 함수형 언어도 아니다.
만약 이러한 방법론에 맞춰서 Go 코드를 짜면, 아마 그게 이상적인 Go 코드는 아닐 것이다.

<br><br>

## Refereces

---

<center>

[
<Image alt="Learning Go Book Cover" src="https://learning.oreilly.com/covers/urn:orm:book:9781492077206/400w/"/>
](https://learning.oreilly.com/library/view/learning-go/9781492077206/) <br>
[Jon Bodner, 『Learning Go』, O'Reilly Media, Inc.](https://learning.oreilly.com/library/view/learning-go/9781492077206/)

</center>

<br>

이번 포스트는 의역이 너무 많아용

원문 참조하시는 게 좋을듯함

<br><br>
