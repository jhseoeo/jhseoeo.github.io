---
title: 복합 타입
date: 2022-07-23
excerpt: Composite Types
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

## Array

---

**Array**는 같은 타입의, 크기(개수)가 정해진 데이터들을 묶어서 처리하기 위해 사용된다.

```go
var arr [3]int // array declaration
fmt.Println(arr)
// var size int = 5	 // can not specify size of array with variables.
// var arr [size]int // it occurs an error.
```

위 코드에서 `[3]int`은 크기가 *3*인 `int`의 Array임을 나타낸다. Array의 값을 초기화하지 않았으므로, `int`의 Zero value인 0으로 채워진다.
그리고 Array는 크기가 정해진 데이터에 대해서만 지원한다. 주석 처리된 부분처럼 배열의 크기를 변수값으로 초기화하는 것은 불가능하다.

<br>

C/C++에서 그렇듯, 중괄호를 이용하여 배열 내의 값을 초기화할 수 있다.

```go
// declare with literal
var x = [3]int{1, 2, 3}                  // [1, 2, 3]
var y = [12]int{1, 5: 4, 6, 10: 100, 15} // [1, 0, 0, 0, 0, 4, 6, 0, 0, 0, 100, 15]
var z = [...]int{4, 5, 6, 7, 8}          // [4, 5, 6, 7, 8]
```

위 코드의 변수 `y`를 초기화하는 라인에서 `n:m` 형태의 표기법을 확인할 수 있다. `n`번째 인덱스의 값을 `m`으로 초기화한다는 의미이다.
지정되지 않은 다른 값들은 Zero value인 *0*으로 초기화된다.<br>
변수 `z`를 초기화하는 라인처럼 배열의 크기에 `...`가 입력되면 자동으로 배열의 크기를 결정한다. 위 코드에서 `z`의 크기는 *5*가 될 것이다.

<br>

여느 언어가 그렇듯, 대괄호를 통해 indexing한다. 인덱스에 음수나 배열 크기보다 큰 수 넣으면 런타임 에러가 발생한다.
또한 `len()` 함수를 사용하여 Array의 크기를 확인할 수 있다.

```go
x[2] = 10
fmt.Println(x[2]) // indexing by bracket
fmt.Println(len(x))
```

<br>

다차원 배열은 좀 난해하하다고 느꼈는데, 어떻게 사용하는지는 코드를 바로 보는 편이 이해가 빠를 것이다.

```go
var multidimentional = [2][3]int{{1, 2, 3}, {1, 2, 3}} // multidimetional array
fmt.Println(multidimentional)
```

<br>

이건 좀 신기했던 부분인데, Go에서 Array는 크기와 element의 타입이 같다면 동일한 타입으로 여긴다. 그래서 `==`와 `!=`의 두 가지의 비교 연산이 가능하다!
다만 element의 타입이 같아도 Array의 크기가 다르다면 서로 다른 타입으로 여기기 때문에, 비교 연산을 하면 에러가 발생한다.

```go
var a = [...]int{1, 2, 3}
var b = [3]int{1, 2, 3}
var c = [2]int{1, 2}
fmt.Println(a == b) // prints true
// fmt.Println(a == c) // occurs error
```

<br><br>

## Slice

---

**Slice**는 동적으로 크기가 늘어났다 줄어들었다 하는 Array라고 볼 수 있다. 다른 언어에도 이와 유사한 타입들이 많이 존재하지만, Go의 Slice는 좀 유니크하다.<br>
먼저 Array와는 달리 대괄호 사이를 비워놓고 선언한다. Array와 유사한 부분들을 모아보았다.

```go
var x = []int{1, 2, 3} // declaration + initialization
var y = []int{1, 5: 4, 6, 10: 100, 15} // [1, 0, 0, 0, 0, 4, 6, 0, 0, 0, 100, 15]
fmt.Println(x, y)

x[2] = 10
fmt.Println(x[2]) // indexing by bracket

var multidimentional = [][]int{{1, 2, 3}, {1, 2, 3}} // multidimetional slice
fmt.Println(multidimentional)

fmt.Println(len(x)) // the number of current elements
```

<br>

이제 다른 부분들을 하나씩 알아보자.

선언만 하고 초기화하지 않으면 해당 타입의 Zero value로 초기화하는 Array와는 달리, Slice는 비어 있는 객체라는 뜻인 Slice는 `nil`이 된다.
이때 `nil`과 Length가 0인 Slice는 엄연히 서로 다르다.
`nil`은 C/C++의 `NULL`과 자바스크립트의 `null` 사이 어딘가의 느낌인데, 추후 설명하겠다.

```go
var slice1 []int            // slice declaration
var slice2 = []int{}        // zero-length slice
fmt.Println(slice1, slice2)
fmt.Println(slice1 == nil, slice2 == nil)
// comparation between two slices occurs error; only possible comparation is the one between slice and nil
```

타입과 크기가 같다면 비교 연산을 할 수 있었던 Array와는 달리, slice끼리는 타입이 같아도 서로 비교 연산을 할 수 없다.
slice와 nil과의 비교 연산만 허용된다.

<br>

`make()` 함수를 이용하여 slice를 생성할 수도 있다. 타입, Length, Capacity를 인자로 설정한다.

```go
initialized_capacity := make([]int, 0, 5) // make(type, length, capacity)
// initialized_capacity := make([]int, 6, 5) // it occurs an error (length > capacity)
```

<br><br>

### Appending Elements into Slices

<br>

Slice에 값을 추가하기 위해서는 `append()` 함수를 사용한다. 값을 추가할 Slice와, 한 개 이상의 추가할 값들을 파라미터로 받는다.<br>
`...` 연산자를 활용하여, 다른 Slice 변수의 값들을 추가할수도 있다.

특이사항은 `append()`함수에 값을 추가할 Slice 변수를 넣고, 반환값을 다시 그 변수로 받아야 한다는 것이다.

```go
// capacity grows as it gets appended
slice = append(slice, 10)
fmt.Println(slice, len(slice), cap(slice))
slice = append(slice, 20, 30, 40, 50)
fmt.Println(slice, len(slice), cap(slice))

tmp := []int{20, 30, 40}
slice = append(slice, tmp...)
fmt.Println(slice, len(slice), cap(slice))
// append(slice, x...) => it occurs an error (append() returns an slice that the element is appended to.)
```

이때 위 코드에서 `cap()`라는 함수가 사용되는 것을 확인할 수 있다.
Slice에는 요소들의 개수를 나타내는 *Length*뿐 아니라, **Capacity**라는 속성이 존재한다. 이는 요소들이 추가될 수 있는 전체 공간의 크기를 의미한다.
`append()`로 변수 `slice`에 요소들을 추가할 때마다 Length가 증가하고, Length가 Capacity를 초과하려고 할 때마다 Capacity도 증가함을 확인할 수 있다.

<br><br>

### Slicing Slices

<br>

Python의 `List`처럼 대괄호에 콜론(`:`)과 인덱스를 붙여 Slicing할 수 있다.

```go
x := []int{1, 2, 3, 4}
y := x[:2]
z := x[1:]
d := x[1:3]
e := x[:]
fmt.Println(x, y, z, d, e)
```

Python은 이렇게 Slicing 하면, Slicing된 새로운 `List`가 복사되어, 원본과 같은 공간을 가리키지 않는다. 반면 Go의 Slicing된 `Slice`는 원본을 가리킨다. `e`의 값 중 하나를 수정해보면, `x`, `z`, `d`까지 해당 값을 포함했던 모든 `Slice`의 값들도 변경됨을 확인할 수 있다.

```go
e[2] = 1                   // Slicing overwraps storage
fmt.Println(x, y, z, d, e) // value of x, z, d, e is changed
```

<br>

사실 여기까진 그냥 그런가보다 할텐데, 원소를 추가하기 시작하면 본격적으로 어지러워진다.

```go
fmt.Println(cap(x), cap(y), cap(z), cap(d), cap(e))
y = append(y, 30) // appending an elements into y changes the mapped value of other slices, but not changes their length

fmt.Println(x, y, z, d, e) // it's too confusing :(
fmt.Println(cap(x), cap(y), cap(z), cap(d), cap(e))
```

<br>

추가 이전, `x`, `y`, `z`, `d`, `e`는 아래와 같았는데,

```go
[1 2 1 4] [1 2] [2 1 4] [2 1] [1 2 1 4]
```

이렇게 변했다.

```go
[1 2 30 4] [1 2 30] [2 30 4] [2 30] [1 2 30 4]
```

`y`에 `30`을 추가했으니 `[1 2 30]`이 된 건 그렇다 치고, `x`, `z`, `d`, `e`에서 대응되는 위치에 있었던 `1`도 모두 `30`으로 바뀌었음을 알 수 있다.
그리고 여기서 `y`만 length가 바뀌었으므로, 나타나는 원소의 개수는 `y`만 2개에서 3개로 늘었다.

<br>

다음의 예제를 보자.

```go
xx := make([]int, 0, 5)
xx = append(xx, 1, 2, 3, 4)
yy := xx[:2]
zz := xx[2:]

fmt.Println(cap(xx), cap(yy), cap(zz))
yy = append(yy, 30, 40, 50)
xx = append(xx, 60)
zz = append(zz, 70)

fmt.Println("xx:", xx)
fmt.Println("yy:", yy)
fmt.Println("zz:", zz)
```

해당 구문의 실행 결과는 ...

```go
5 5 3
xx: [1 2 30 40 70]
yy: [1 2 30 40 70]
zz: [30 40 70]
```

<br>

<center>

<Image alt="pepe question" src="/post_img/Go/Golang_basics/GO3/1.jpg"/>

</center>

<br>

상당히 혼란스럽다. 하나씩 알아보자.

```go
xx := make([]int, 0, 5)
xx = append(xx, 1, 2, 3, 4)
yy := xx[:2]
zz := xx[2:]
```

여기까지 실행했을 때, `xx`, `yy`, `zz`의 값은

```go
xx: [1 2 3 4] len=4 cap=5
yy: [1 2] len=2 cap=5
zz: [3 4] len=2 cap=3
```

이다. 이제, `yy`에 `30`, `40`, `50`을 추가해보자.

```go
xx: [1 2 30 40] len=4 cap=5
yy: [1 2 30 40 50] len=5 cap=5
zz: [30 40] len=2 cap=3
```

<br>

`xx`와 `zz`는 `yy`와 같은 공간을 공유한다. 따라서 대응되는 위치의 값이었던 `xx`와 `zz`의 `3`, `4`가 각각 `30`, `40`으로 바뀌었음을 확인할 수 있다.
반면 `xx`와 `zz`의 Length는 바뀌지 않고, `yy`의 Length만 5로 바뀌었다.<br>
여기서 `xx = append(xx, 60)`가 실행되면,

```go
xx: [1 2 30 40 60] len=5 cap=5
yy: [1 2 30 40 60] len=5 cap=5
zz: [30 40] len=2 cap=3
```

`xx`에 60이 추가되며, `yy`의 대응되는 위치의 값이었던 50의 값이 60으로 바뀌었다.<br>
여기서 `zz = append(zz, 70)`가 실행되면,

```go
xx: [1 2 30 40 70] len=5 cap=5
yy: [1 2 30 40 70] len=5 cap=5
zz: [30 40 70] len=3 cap=3
```

`xx`와 `yy`의 대응되는 위치의 값이었던 `60`이 `70`으로 바뀌었다.

<br>

Slice에 값을 `append`하였을 때 생기는 문제로 인해 직관적으로 이해하기 어려운 결과를 확인하였다.
`xx`, `yy`, `zz`가 같은 Capacity를 공유하기 때문에 생긴 문제이다.
Slice를 Slicing할 때, Capacity의 범위를 명시하는 표기법을 사용하면 이와 같은 문제를 어느 정도 해결할 수 있다.

```go
xxx := []int{1, 2, 3, 4, 5}
yyy := xxx[:2:2] // limits capacity of slice, they not share additional capacity
zzz := xxx[2:4:4]

fmt.Println(cap(xxx), cap(yyy), cap(zzz))
yyy = append(yyy, 30, 40, 50) // this appending never interacts with other slices
xxx = append(xxx, 60)
zzz = append(zzz, 70)
fmt.Println(xxx, yyy, zzz)
```

위 코드의 출력 결과는 아래와 같다.

```go
5 2 2
[1 2 3 4 5 60] [1 2 30 40 50] [3 4 70]
```

<br>

한편 Array도 Slicing이 가능하며, Slicing된 값은 Slice 타입이다.

```go
ax := [...]int{1, 2, 3, 4}
ay := ax[:2] // slicing array
az := ax[2:]
ax[0] = 10
fmt.Println(ax, ay, az)
```

<br><br>

### Copying Slices

<br>

또다른 해결방법은 다른 언어의 *deep copy*처럼, 새로운 공간에 값들을 복사하는 방법이다. `copy()` 함수를 통해 할 수 있다.

```go
x := []int{1, 2, 3, 4}
y := make([]int, 4)

num := copy(y, x)   // copy(destination, source). x is copied into y
fmt.Println(y, num) // num: the number of elements copied (decided by length of slices)
y[2] = 1            // if we change any value of y,
fmt.Println(y, x)   // values of x still unchanged (doesn't share memory spaces)
```

<br>

`copy()` 함수는 두 번째 인수로 들어온 Array나 Slice를 첫 번째 인수로 들어온 Slice에 복사한다. 반환값은 복사된 원소의 수이다.

```go
z := make([]int, 2, 4) // because length of z is 2,
num = copy(z, x)       // when it is copied, only two of x are copied.
fmt.Println(z, num)    // [1, 2] 2
```

<br>

`copy()` 함수의 인수로 들어오는 Slice나 Array들은 Length가 서로 다를 수 있다.
Destination Slice의 Length가 Source Slice보다 크다면, 앞쪽의 원소들부터 채워진다.

```go
w := make([]int, 4, 4) //
num = copy(w, x[:2])   // because x[:2] has only two element (length is 2),
fmt.Println(w, num)    // x[:2] is copied into first two elements
```

동일한 원리로 이런 것도 가능하다.

```go
q := []int{1, 2, 3, 4}
num = copy(q[:3], q[1:]) // [2, 3, 4] is copied into [1, 2, 3]
fmt.Println(q, num)      // [2, 3, 4, 4]
```

<br><br>

## string

---

`string`은 Primitive Data Type이지만, 여러 문자들의 Slice처럼 생각할 수도 있다. Slice처럼 `string`을 Slicing할 수도 있다.

```go
var s string = "Hello there"
fmt.Println(s, b, len(s))

// slicing string
fmt.Println(s[4:7])
fmt.Println(s[5:])
fmt.Println(s[:6])
```

한편, 알파벳과 같은 일반적인 문자들을 `string`으로 표현할 때는 문제를 느끼지 못할 수도 있다.
하지만 한글처럼 UTF-8에서 2바이트 이상의 크기로 표현되는 문자들은 Slicing시 문자가 제대로 나타나지 않을 때도 있다.

```go
var h string = "한글조아"
fmt.Println(h, len(h))
// each character of korean letter takes 3 bytes, slicing like below would not be done properly
fmt.Println(h[2:])
fmt.Println(h[:5])
fmt.Println(h[2:7])
```

`string`을 구성하는 각 문자들은 `rune` 타입이지만, 실제로 `string`은 `byte`들의 배열이다.
`rune`은 문자가 1바이트든, 4바이트든 한 개의 문자를 온전히 나타낼 수 있고,
`byte`는 2바이트 이상의 문자를 나타내기 위해서는 2개 이상 모여야 한다는 것이다.

```go
// difference of rune and byte
var ss string = "Hello 안녕"
var bs []byte = []byte(ss) // []byte splits UTF-8 characters. usually use this.
var rs []rune = []rune(ss) // []rune doesn't split
fmt.Println(bs, rs)
```

위처럼 `string`을 각각 `byte`와 `rune`의 Slice로 변환해보면 확인할 수 있다.

<br><br>

## Map

---

**Map**은 전형적인 Key-Value 페어의 데이터타입으로, C++의 `map`과 유사하다. 아래 코드처럼 선언하고, 초기화할 수 있다. <br>
Slice와 마찬가지로 `map`의 Zero value는 반드시 `nil`이며, 크기가 0인 `map`과 `nil`은 서로 다르다.

```go
var nilMap map[string]int
mamap := map[string]int{}
fmt.Println(nilMap, mamap, nilMap == nil, mamap == nil)
```

<br>

초기화하는 방법도 다른 언어와 유사하다. 아래의 예제는 key는 `string`이고, value는 `string`의 `slice`인 `map`이다.

```go
var teams = map[string][]string{
    "Orcas":   []string{"Fred", "Ralph"},
    "Lions":   []string{"Sarah", "Peter"},
    "Kittens": {"Waldo", "Raul"}, // 이렇게 해도 됨
}
fmt.Println(teams)
```

<br>

`make()`함수와 `len()`함수는 map에서도 사용할 수 있다.

```go
ages := make(map[int][]string, 10)
fmt.Println(ages, len(ages)) // len() returns the number of key-value pairs of map
```

<br>

사용 방법은 다른 언어의 일반적인 Key-Value 페어 데이터타입과 크게 다르지 않다. 이때 Value값이 존재하지 않는 Key에 접근하면 Zero value를 반환한다.

```go
totalWins := map[string]int{}
totalWins["Orcas"] = 1 // assigning value into specific key with =, not :=
totalWins["Lions"] = 2
fmt.Println(totalWins["Orcas"])
fmt.Println(totalWins["Kittens"]) // an initial value of int is zero.
totalWins["Kittens"]++            // value of "Kittens" would be 1
totalWins["Lions"] = 3
fmt.Println(totalWins["Kittens"])
fmt.Println(totalWins["Lions"])
```

<br>

이 때 Value값이 존재하지 않는 Key에 접근한 것인지, 아니면 그냥 Value값이 Zero value인지 알 수 없다.

```go
m := map[string]int{
    "Hello": 5,
    "world": 0,
}
```

이를테면 위와 같은 예제에서 Key가 `"world"`일 때와, Key가 `"Bye"`일 때 동일하게 0이라는 값을 얻게 될 것이다.
Go 개발자들은 당연히 이에 대한 해결책으로 *comma ok idiom*이란 것을 만들어 두었다.

```go
// comma idiom
v, ok := m["Hello"] // v gets value of the given key
fmt.Println(v, ok)  // ok gets if the key exists in map

v, ok = m["world"] // though v gets zero value,
fmt.Println(v, ok) // ok gets true because "world" exists in map

v, ok = m["nono"]  // "nono" doesn't exist in map, so ok gets false
fmt.Println(v, ok) // v gets zero value,

delete(m, "Hello") // deletes key "Hello" from the map
v, ok = m["Hello"] // the key doesn't exist in map as it is deleted
fmt.Println(v, ok)
```

위 예제에서 `m`에서 반환받은 값을 계속 `v`, `ok` 두 개의 변수에 할당하는 것을 확인할 수 있다.
이 때 첫 번째 변수인 `v`에는 Key에 해당하는 Value가 들어가며, 두 번째 변수인 `ok`에는 해당 Key가 `m`에 존재하는지 여부가 `true` or `false`로 들어간다.
또한 `map`에서 Key-Value 페어를 지우려면 `delete()` 함수를 사용한다.

<br><br>

## struct

---

C/C++의 `struct`와 유사하다. Go가 일반적으로 그런 것처럼, 필드들을 선언할 때 자료형이 필드명의 뒤에 온다.
C/C++의 `typedef` 키워드처럼, `type` 키워드를 통해 `struct` 타입을 정의할 수 있다.

```go
type person struct { // define struct type
    name string
    age  int
    pet  string
}

var john person // struct variable declaration
var james = person{"James", 24, "cat"}
kim := person{}                   // there is no difference on empty struct and zero value of struct
fred := person{"Fred", 22, "dog"} // values are assigned to the fields in the order they were declared in struct definition
beth := person{                   // using key names (recommended)
    age:  20,
    name: "Beth",
}
fred.pet = "parrot" // can use dotted notation

fmt.Println(john, kim, james, fred, beth)
```

`struct` 인스턴스를 생성할 때는 `struct`를 정의할 때 입력했던 순서대로 각 필드의 값을 중괄호 안에 입력해주면 된다.
특이사항으로는 `map`이나 `slice`와는 달리, `struct`의 Zero value와 비어있는 `struct`가 동일하게 처리된다.

<br><br>

### Anonymous Structs

```go
var human struct { // anonymous structs
    name string
    age  int
    pet  string
}
human.name = "Bob"
human.age = 24
human.pet = "dog"

pet := struct { // directly initializing anonymous structs
    name string
    kind string
}{
    name: "choco",
    kind: "dog",
}

fmt.Println(human, pet)
```

위 코드는 익명 `struct` 변수를 선언하고, 또 선언과 동시에 초기화하는 예제이다.
타입 명시와 값 할당이 다른 중괄호 안에서 이루어져야 하는 것만 주의하면 큰 문제 없는 듯.

<br><br>

### Comparing and Converting Structs

```go
type firstPerson struct {
    name string
    age  int
}
f1 := firstPerson{"kim", 24}
f2 := firstPerson{"lee", 25}
fmt.Println(f1 == f2) // comparing two firstPerson instances is possible when they are composed of comparable types
```

`struct`의 필드가 비교 가능한 타입들로 이루어져 있다면, 서로 같은 `struct` 타입끼리는 서로 비교할 수 있다.

<br>

```go
type secondPerson struct {
    name string
    age int
}
s1 := secondPerson{"choi", 26}
// fmt.Println(s1 == f1) // comparing(==, !=) secondPerson with firstPerson is impossible
fmt.Println(firstPerson(s1)) // convert secondPerson into firstPerson is possible because they have same fields
```

서로 다른 `struct` 타입끼리는 서로 비교할 수 없다.
단, 필드의 타입과 필드명이 같다면 서로 변환할 수 있다.

<br>

```go
type thirdPerson struct {
    age int
    name string
}
// t1 := thirdPerson{27, "Park"}
// fmt.Println(firstPerson(t1)) // convert thirdPerson into firstPerson is impossible because their fields have different order.
```

만약 필드의 타입과 필드명이 같아도 선언된 순서가 다르다면 비교 및 변환할 수 없다.

<br>

```go
type fourthPerson struct {
    firstName string
    age int
}
// f3 := fourthPerson{"Kang", 28}
// fmt.Println(firstPerson(f3)) // convert fourthPerson into firstPerson is impossible because their fields have different name.

type fifthPerson struct {
    name string
    age int
    hobby string
}
// f4 := fifthPerson{"Seo", 24, "Cooking"}
// fmt.Println(firstPerson(f4)) // convert fourthPerson into firstPerson is impossible because there is an additional field.
```

타입이 같아도 필드명이 다르다면 변환할 수 없으며, 다른 필드가 추가로 존재하면 비교 및 변환할 수 없다.

<br>

```go
var g struct {
    name string
    age  int
}
g = f1 // =, == are possible when anonymous struct have same field
fmt.Println(g == f1)
```

동일한 필드를 가지고 있는 익명 `struct`에 대해서는 비교가 가능하다.

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
