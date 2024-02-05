---
title: 포인터
date: 2022-08-07
excerpt: Pointer
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

## Pointer

---

놀랍게도 Go에는 포인터가 있다. C++ 공부하며 다신 보기 싫었던 친구인데 다시 보게 되니 감회가 새롭다.
다들 알다시피 포인터는 특정 변수가 저장된 메모리의 주소를 가리키는 변수를 의미한다. C/C++의 포인터와 크게 다르지 않다.

포인터 변수는 가리키고자 하는 메모리 주소의 첫 번째 byte address를 저장한다.

```go
var x int32 = 10
var y bool = true

pointerX := &x
pointerY := &y
var pointerZ *string

fmt.Println(pointerX, pointerY, pointerZ) // addresses of variables
fmt.Println(pointerZ == nil)              // referencing *pointerZ occurs an runtime error(panics), because pointerZ is nil
fmt.Println(*pointerX, *pointerY)         // * is indirection operator.
*pointerX, *pointerY = 8, false
fmt.Println(x, y) // by changing pointer's values, we can change origin value
```

`&`는 변수의 주소값을 반환하는 연산자이며, `*`는 indirection 연산자로, 해당 포인터가 가리키는 주소에 저장된 값을 반환한다.
`*`를 통해 메모리 주소에 저장된 값에 접근하는 것을 **dereferencing**이라고 한다.

위 코드의 출력 결과는 아래와 같다.

```go
0xc0000b8000 0xc0000b8004 <nil>
true
10 true
8 false
```

위의 `pointerZ` 변수처럼 포인터 변수를 선언하고 아무런 주소값도 할당하지 않으면 `nil`이 할당된다. 포인터 변수의 Zero value가 `nil`인 셈이다.<br>
만약 주소가 `nil`인 접근하려고 하면 panic(런타임 에러)이 발생한다.

<br>

`new()` 함수는 포인터 변수를 생성하는 built-in 함수이다. 포인터가 가리키는 값은 파라미터로 주어진 타입의 Zero value로 초기화된다.

```go
var a = new(int)      // built-in function `new` creates a pointer variable
fmt.Println(a == nil) // false
fmt.Println(*a)       // it points zero value of given type
*a = 2
fmt.Println(*a)
```

근데 `new()` 함수는 자주 쓰이지는 않는다고 한다.

<br>

`&` 연산자를 통해서 상수나 리터럴의 주소값을 얻을 수는 없다. 이런 애들은 메모리 주소가 따로 존재하지 않기 때문이다.

따라서 특정 값을 가진 포인터 변수를 생셩하려면, 먼저 일반 변수를 선언해서 값을 할당한 뒤, 해당 변수의 주소값을 넘겨주어야 한다.

```go
	x := &Foo{}
	// z := &"string" // this statement occurs an error
	var y string
	z := &y // to point to a primitive type, declare a variable first

	fmt.Println(x, z)
```

이러한 방식이 직관적이기는 하지만 코드의 길이가 쓸데없이 길어진다는 단점이 있다.
그렇다면 *helper function*이란 것을 만들어서 값을 할당해줄 수 있다.

```go
type person struct {
	FirstName  string
	MiddleName *string
	LastName   string
}

func stringp(s string) *string {
	// helper function that returns address of parameter variable
	return &s
}

func main() {
	p := person{
		FirstName: "Pat",
		// MiddleName: "Perry",  // or
		// MiddleName: &"Perry", // this lines won't compile
		MiddleName: stringp("Perry"), // helper function turned a constant value into a pointer
		LastName:   "Peterson",
	}

	fmt.Println(p)
}
```

<br><br>

## Passing Pointers

---

<br>

### Pass by Pointer

다들 알다시피, struct를 비롯한 원시 타입의 변수를 함수의 파라미터로 넘기면, 함수 안에서 해당 파라미터를 어떻게 수정하든 그 값이 바뀌지 않는다.
Go는 **Call by Value** 기반이기 때문.

```go
type person struct {
	name string
	age  int
}

func modifyFails(i int, s string, p person) { // all the parameters are passed by value(copied), not referenced or aliased
	i *= 2
	s = "goodbye"
	p.name = "Bob" // even for the struct, cannot change the origin value by modifying parameters.
}

func main() {
	p, i, s := person{}, 2, "hello"
	modifyFails(i, s, p) // this invocation of function can't make any change on variables above
	fmt.Println(i, s, p)
}
```

<br>

다만 이는 파라미터로 넘기는 변수의 타입이 *slice*이거나 *map*이면 달라지는데, slice와 map은 **Pass by Pointer**로 넘겨진다.
따라서 파라미터로 받은 함수에서 값을 변경할 수 있다.

```go
// slices and maps are passed passed by pointers
func modifyMap(m map[int]string) {
	// changing map parameters are reflected in the variables passed into the function
	m[2] = "hello"
	m[3] = "goodbye"
}

func modifySlice(s []int) {
	// we can modify any element in the slice, but can't lengthen the slice
	for k, v := range s {
		s[k] = v * 2
	}
	s = append(s, 10) // this line actually did not append a value to origin variable
}

func main() {
    i := 20
    modify(i)
    fmt.Println(i)
}
```

<br>

파라미터로 넘기는 변수를 포인터로 지정해주면 Pass by Pointer가 된다.
이 경우 *dereferencing*을 통해 메모리 주소에 직접 접근하여 변수의 값을 변경할 수 있다.
다만 포인터 변수에 새로운 변수의 주소값을 할당한다고 해서 원래의 값이 바뀌지는 않는다(아래 예제의 `failedUpdate()`함수 참조).

```go

func update(g *int) {
	*g = 10 // dereferencing => success to change original value
}

func failedUpdate(g *int) {
	x := 20
	g = &x // where the pointer is pointing at is changed
}

func main() {
	var x *int
	var y int

	// update(x) // this invocation occurs an error. cannot dereference nil
	update(&y)
	fmt.Println(y)

	failedUpdate(x)
	failedUpdate(&y) // those two invocations cannot changed x and y's values

	fmt.Println(x, y)
}
```

<br>

따라서 위에서 보았던 `modifySlice()` 함수에서, 파라미터로 넘긴 변수가 `s = append(s, 10)` 라인에 의해 변경되지 않으리라는 것을 알 수 있다.

```go
func modifySlice(s []int) {
	// we can modify any element in the slice, but can't lengthen the slice
	for k, v := range s {
		s[k] = v * 2
	}
	s = append(s, 10) // this line actually did not append a value to origin variable
}
```

추가적으로, Go 내부적으로 slice는 원소들이 저장되는 메모리 주소에 대한 포인터, `cap`, `len`, 이렇게 세 개의 원소로 구성된 struct 구조체라고 볼 수 있다.
따라서 slice가 파라미터로 넘어오면 원본 slice의 cap, len은 복사된 정수로 변경할 수 없는데 반해, 원소들이 저장된 메모리 공간에 대한 변경은 가능한 것이다.

<br><br>

### Avoid Passing by Pointer

일반적으로 구조체 등 데이터를 생성하거나 설정하고자 할 때, 이를 *Pass by Pointer*로 넘기는 방식은 직관적이지 않다.
경우에 따라 오히려 이를 수행하는데 필요한 자원이 더 많이 소모하게 될 수도 있다.

```go
type Foo struct {
	foo int
	bar string
}

func MakeFoo1(f *Foo) error {
	// not +recommended format
	f.foo = 20
	f.bar = "val"
	return nil
}

// rather than using pointer parameter to pass a value, just return this.
func MakeFoo2() (Foo, error) {
	// recommended format
	f := Foo{
		foo: 20,
		bar: "val",
	}
	return f, nil
}

func main() {
	a := Foo{}
	MakeFoo1(&a) // rather than using this pattern,

	b, _ := MakeFoo2() // use this pattern

	fmt.Println(a, b)
}
```

위 예시처럼 *Pass by Pointer*를 사용하기보단, 그냥 그 값을 반환하는 형식이 시각적으로도 더 좋다.

<br>

다만 예외사항이 좀 있다. 이를테면 JSON을 파싱하는 경우, `Unmarshal()`과 같은 일부 함수들은 포인터 파라미터를 사용하기도 한다.

```go
	f := struct {
		Name string `json:"name"`
		Age  int    `json:"age"`
	}{}
	err := json.Unmarshal([]byte(`{"name": "Bob", "age": 30}`), &f)
	if err == nil {
		fmt.Println(f)
	}
```

<br>

또는, 반환해야 할(또는 파라미터로 넘겨야 할) 데이터가 메가바이트 단위 이상일 경우, Pass by Pointer를 사용하는 것이 훨씬 빠르다고 한다.

<br><br>

## Garbage Collector

---

Go에는 가비지 콜렉터가 존재한다. 이녀석의 역할은 더 이상 사용되지 않는 메모리 공간을 반환하는 것으로, Go는 메모리 관리를 프로그램 레벨에서 해준다.
다만 가비지 콜렉터가 존재한다고 해도 생각없이 코드를 짜면 가비지 콜렉터의 워크로드가 늘어나 프로그램이 느려질 수 있다.

<br>

```go
r := open_resource()
while r.has_data() {
	data_chunk := r.next_chunk()
	process(data_chunk)
}
r.close()
```

위 코드는 안좋은 예로, 매 이터레이션마다 `r.next_chunk()`의 반환값을 받아들이는 `data_chunk` 변수가 생성된다.
이터레이션이 끝날 때마다 `data_chunk`에 저장된 값은 필요 없는 메모리 공간이 되고, 가비지 콜렉터가 해야 하는 일이 쌓이게 되는 것이다.

아래 예제는 *Slice*를 *Buffer*처럼 사용하여, 파일의 데이터를 읽어오는 예제이다.
매 이터레이션마다 변수 `data`에 값을 불러오고, 변수 `data`는 전체 이터레이션에서 재사용되므로, 가비지 콜렉터가 해야 할 일이 줄어든다.

```go
file, err := os.Open(fileName)
if err != nil {
	return err
}
defer file.Close()

// this pattern is good at reducing the garbage collector's workload
data := make([]byte, 100) // using slice as a buffer
for {
	count, err := file.Read(data)
	if err != nil {
		return err
	}
	if count == 0 {
		return nil
	}
	process(data[:count]) // it passes next block of bytes in to the slice (up to 100)
}
```

<br>

Go에서는 기본적으로 *Stack*에 저장할 수 없는 가변적인 크기의 데이터들은 *Heap*에 저장되며, *Heap*은 가비지 콜렉터에 의해 관리된다.
가비지 콜렉터는 어떠한 포인터도 가리키지 않는 데이터(_garbage_)들을 청소하는 알고리즘이다.
사용가능한 데이터를 찾기 위해 한번에 최대한 많은 데이터를, 가능한한 빨리 찾게끔 디자인되어있기 때문에,
우리가 짠 Go 코드가 *garbage*를 많이 생성할수록 *garbage*찾지 못할 확률이 높아지며, *garbage*를 찾는데 더욱 오래 걸리게 된다.
게다가 보통 포인터가 가리키는 데이터들은 메모리 상에서 흩어져서 저장되기 때문에 찾기가 더 힘들어진다.

비록 Go가 Python, Java, Javascript와 같은 여타 언어들에 비해 가비지 콜렉터의 성능이 뛰어난 편이라고는 해도,
가비지 컬렉터가 해야 할 일을 줄여서 코드를 최적화시키는게 당연히 좋을 것이다.

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
