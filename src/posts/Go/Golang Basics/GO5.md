---
title: 함수
date: 2022-07-31
excerpt: Functions
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

## Functions

---

<br>

### Declaration and Invocation

함수에는 파라미터들과 그 타입, 반환형의 타입을 명시한다. 파라미터의 타입은 변수 선언처럼 타입이 뒤에 온다.
파라미터와 함수 body 사이에 반환형이 위치한다.

```go
func div(numerator int, denominator int) int { // parameters and each type of this, and the return type specified here
	// if there is no return type specified (as like main function), no return statement is needed in the function body.
	if denominator == 0 {
		return 0
	}
	return numerator / denominator
}

func main() {
	res := div(8, 5)
	fmt.Println(res)
}
```

파라미터들의 타입이 중복되면 생략할 수 있다. 위 함수의 선언 부분을 `func div(numerator denominator int) int {`로 대체하여도 동일하게 동작한다.

<br><br>

### Emulating Named Parameters using Struct

Go는 named parameter나, parameter의 default value를 지원하지 않는다(Optional parameter가 없다).
다시 말해, 함수가 있으면 그 함수의 모든 파라미터를 넘겨줘야 한다.

named parameter는 함수의 파라미터가 많을 때 유용하기 때문에, `struct`로 이를 대체할 수는 있다.
다만 애초에 함수의 파라미터가 많은 게 그리 이상적인 상황은 아니긴 하다.
아래의 코드는 `struct`

```go
type MyFuncOpts struct {
	FirstName string
	LastName  string
	Age       int
}

func MyFunc(opts MyFuncOpts) string {
	return opts.FirstName + " " + opts.LastName + "/" + strconv.Itoa(opts.Age)
}
```

<br><br>

### Variadic Parameter

파라미터의 타입 앞에 `...`를 붙여 variadic parameter로 만들 수 있다. Python의 \*args랑 비슷하다.

```go
func addTo(base int, vals ...int) int { // put three dots(...) before type to declare a parameter as variadic
	var res int
	for _, v := range vals {
		res += v
	}
	return res
}

func main() {
	addVal1 := addTo(1, 2, 3, 4, 5)            // we can pass parameters as multiple parameters
	addVal2 := addTo(2, []int{4, 6, 8, 10}...) // we can pass parameters as slice, but must put three dots(...) after slice.
	fmt.Println(addVal1, addVal2)
}
```

Slice의 뒤에 `...`를 붙여, variadic parameter와 대응시킬 수도 있다.

<br><br>

### Multiple Return Values

Go의 특이한 점은 함수가 반환할 수 있는 값이 여러 개 존재한다는 것이다.
`Tuple`형으로 값을 반환하는 Python과 그나마 유사한데, 사실 이것도 `Tuple`로 묶어서 보내는 거라 엄연히 다르다.

반환 값을 여러개 설정하려면 반환형을 써야 할 위치에 반환형들을 순서대로 나열한 뒤 소괄호로 묶으면 된다.
`return`할 때 괄호로 묶어줄 필요는 없다.

```go
func divAndRemainder(numerator int, denomiator int) (int, int, error) {
	if denomiator == 0 {
		return 0, 0, errors.New("cannot divide by zero")
	} else {
		return numerator / denomiator, numerator % denomiator, nil // must return all of return values, without parantheses
		// if there is no error, just return nil for error.
	}
}

func main() {
	result1, remainder1, err1 := divAndRemainder(5, 2) // if we try assigning multiple return values into a single variable, there will be a compile-time error
	result2, _, err2 := divAndRemainder_Named(5, 2)    // if we don't need to get remainder as variable, just using _, we can ignore it
}
```

함수에서 반환된 값들을 변수에 저장할 때는 `range`를 쓸 때와 유사하게, 컴마(`,`)로 구분하여 순서대로 변수을 나열하면 된다.<br>
언더바(`_`)를 사용하면 저장할 필요 없는 변수는 생략할 수 있다. 이 역시도 앞서 봤던 패턴이다.

<br><br>

### Named Return Values

반환할 값들을 변수로 지정할 수 있는데, 이를 **Named return value**라 한다.
Named return value들은 기본적으로 Zero value로 초기화된다.
또한 Named return value를 사용할 경우 반환할 값이 하나여도 소괄호로 둘러싸줘야 한다.

단, Named Return Value를 사용하면 두 가지 잠재적 문제점이 생길 수 있다.<br>
하나는 Named return value을 shadowing할 수도 있다는 문제이다.<br>
또 하나는 `return result, remainder, err` 대신에 `return 0, 0, errors.New("cannot divide by zero")` 이런 식으로
Named return value를 사용하지 않고 `return`하여도 문제가 없다.
이 때문에 코드가 일관적으로 작성되지 않을 수도 있다는 점이다.

```go
func divAndRemainder_Named(numerator int, denomiator int) (result int, remainder int, err error) {
	if denomiator == 0 {
		err = errors.New("cannot divide by zero")
		return result, remainder, err
		// return 0, 0, errors.New("cannot divide by zero") // this statement is also legal. it is not essential to use name of return value
	} else {
		result = numerator / denomiator
		remainder = numerator % denomiator
		return result, remainder, err
		// return // blank return can reduce amount of typing, but it is less readable.
	}
}
```

Named Return Value를 사용하면 **Blank return**이란 것이 가능한데,
`return result, remainder, err` 대신 `return`만 적어도 `result, remainder, err`가 반환된다.
Named return value가 명시된 순서대로 반환하는 것이다.

<br><br>

### Functions Are Value

다른 많은 언어에서 그러하듯, Go에서 함수는 값으로 여겨진다. 다시 말해 변수에 집어넣거나 할 수 있다.

```go
func add(i int, j int) int { return i + j }
func sub(i int, j int) int { return i - j }
func mul(i int, j int) int { return i * j }
func div(i int, j int) int { return i / j }

func main() {
	var opMap = map[string]func(int, int) int{
		"+": add,
		"-": sub,
		"*": mul,
		"/": div,
	}
}
```

예제는 4개의 함수를 `map`의 값으로 집어넣은 예제이다. 이 때 map의 value 타입은 `func(int, int), int`가 된다.

아래 예제처럼 `type` 키워드를 사용하여 타입을 간략화할 수도 있다.

```go
func add(i int, j int) int { return i + j }
func sub(i int, j int) int { return i - j }
func mul(i int, j int) int { return i * j }
func div(i int, j int) int { return i / j }

type opFuncType func(int, int) int

func main() {
	var opMap = map[string]opFuncType{
		"+": add,
		"-": sub,
		"*": mul,
		"/": div,
	}
}
```

<br><br>

### Anonymous Function

함수를 선언할 때 함수명만 지우면 익명함수가 된다. 익명함수를 즉시 호출하려면 익명함수 뒤에 소괄호를 붙여 파라미터만 보내주면 된다.

```go
func main() {
	pow := func(num int) int { // using keyword `func`, we can declare an anonyymous function
		// if we put a function name on anonymous function, it will occur a compile-time error
		return num * num
	}

	for i := 0; i < 5; i++ {
		func(j int) {
			fmt.Println("Printing", pow(j), "from inside of an anonymous function")
		}(i) // anonymous function are declared and called immediately
	}
}
```

<br><br>

## Closure

---

**Closure**란 특정한 함수 안에서 선언된 함수를 의미한다. 대체로 파라미터로 넘겨지거나, `return`을 통해 반환된다.

<br>

`sort.Slice()`함수는 파라미터로 정렬할 데이터와 원소들의 대소를 비교하여 `bool`값을 반환하는 함수를 인자로 받는다.
이 함수의 `true` 및 `false` 여부에 따라 Slice가 정렬된다.

```go
type Person struct {
	FirstName string
	LastName  string
	Age       int
}

people := []Person{
	{"Kimkim", "Kim", 25},
	{"Junhyuk", "Seo", 24},
	{"Leelee", "Lee", 26},
}

// we can pass functions as parameter in Go
sort.Slice(people, func(i int, j int) bool { // sort.Slice sorts the slice using function that is passed in
	return people[i].Age < people[j].Age // sorting by Age field
})
fmt.Println(people)

sort.Slice(people, func(i int, j int) bool {
	return people[i].LastName < people[j].LastName
})
fmt.Println(people)
```

ㅇㅇ

<br>

```go
func makeMult(base int) func(int) int {
	return func(factor int) int {
		return base * factor
	}
}

func main() {
	twoBase := makeMult(2)
	threeBase := makeMult(3)

	for i := 0; i < 3; i++ {
		fmt.Println(twoBase(i), threeBase(i))
	}
}
```

위 예제는 함수의 반환형이 Closure인 예제이다. 익명 함수로 반환되었다.

<br><br>

## defer

---

Go에는 **defer**라는 키워드가 존재한다. 다른 언어에는 없는데 Go에만 있는 것 같다.<br>
일반적으로 파일이나 네트워크 연결 등, 임시적으로 쓰이는 자원들을 다시 반납하기 위해 사용되는 것 같다.

```go
func getFile(name string) (*os.File, func(), error) {
	file, err := os.Open(name)
	if err != nil {
		return nil, nil, err
	} else { // it returns resource and a closure that cleans up the resource
		return file, func() { file.Close() }, nil
	}
}

func main() {
	_, closer, err := getFile(os.Args[1])
	if err != nil {
		log.Fatal(err)
	}
	defer closer() // releases the resource by using defer and closer function
}
```

<br>

`defer` 키워드가 쓰인 *Closure*는 값을 `return`한 후 해당 함수가 끝나기 직전 실행된다.

```go
func main() {
	j := 2

	defer func(i int) {
		fmt.Println(i)
	}(j)

	j++
	fmt.Println(j)
}
```

위 코드의 실행 결과는 다음과 같다.

```go
3
2
```

먼저 `defer`에 의해 `2`를 출력하도록 예약된다. 이후 `j`가 `3`이 되어 출력이 되고, `main`함수가 끝나기 직전에 2가 출력되는 것이다.<br>
`j`값이 `3`으로 변했다고 `defer`에 의해 실행되는 *Closure*의 출력 결과가 3으로 바뀌지 않는다.

<br>

```go
func DoSomeInserts(ctx context.Context, db *sql.DB, value1, value2 string)
                  (err error) {
    tx, err := db.BeginTx(ctx, nil)
    if err != nil {
        return err
    }
    defer func() {
        if err == nil {
            err = tx.Commit()
        }
        if err != nil {
            tx.Rollback()
        }
    }()
    _, err = tx.ExecContext(ctx, "INSERT INTO FOO (val) values $1", value1)
    if err != nil {
        return err
    }
    // use tx to do more database inserts here
    return nil
}
```

위 예제는 `defer`가 DB write에 사용된 예제이다. db write 과정에서 에러가 발생하지 않았다면 _commit_, 에러가 발생하였다면 *rollback*한다.

<br><br>

## References

---

<center>

[
<Image alt="Learning Go Book Cover" src="https://learning.oreilly.com/covers/urn:orm:book:9781492077206/400w/"/>
](https://learning.oreilly.com/library/view/learning-go/9781492077206/)<br>
[Jon Bodner, 『Learning Go』, O'Reilly Media, Inc.](https://learning.oreilly.com/library/view/learning-go/9781492077206/)

</center>

<br><br>
