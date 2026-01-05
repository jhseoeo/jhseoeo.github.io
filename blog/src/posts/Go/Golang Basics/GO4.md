---
title: 블록, Shadowing, 흐름 제어문
date: 2022-07-27
excerpt: Blocks, Shadows, and Control Structures
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

## Shadowing

---

Go에서 기본적으로 `Block`의 개념은 타 언어와 유사하다.
`if`, `for` 등 흐름 제어 키워드들에 의해 중괄호가 시작되고, 해당 중괄호가 닫히는 영역까지를 `Block`이라 한다.

```go
x1 := 10 // shadowed variable.
if x1 > 5 {
    fmt.Println(x1) // 10 => x1 is not yet shadowed
    x1 := 5         // shadowing variable. from this line to end of this block
    fmt.Println(x1) // 5 => x1 is shadowed until if-blocks ends
}
fmt.Println(x1) // 10 => if-block ends. x1 is not shadowed
```

이전 챕터에서도 다루었지만, Shadowing이 발생하면 해당 블록이 끝날 때까지 Shadowing된 변수에 접근할 수 없다.

<br>

```go
	true, int := 10, "hi"
	fmt := "oops"    // fmt is shadowed
```

이렇게 패키지명이나 *universe block*의 구분자들을 Shadowing하는 것이 문법적으로는 가능하지만, **절대** 이렇게 하지 않도록 주의하자.

<br>

변수가 Shadowing되는 것을 확인할 수 있는 명령어가 존재한다. 외부 모듈이므로 설치 후 사용해주어야 한다.

```bash
go install golang.org/x/tools/go/analysis/passes/shadow/cmd/shadow@latest
shadow ./..
```

위와 같이 설치 후, `shadow` 명령어를 통해 검사를 실시하고자 하는 파일을 지정한다.

```bash
declaration of "x" shadows declaration at line 6
```

<br><br>

## if

---

C 계열 프로그래밍 언어의 `if`문과 크게 다르지 않다. 특이사항으로는 괄호를 생략한다.

```go
n1 := 7
if n1 == 0 {        // there is no parenthesis around the condition
    fmt.Println("too low")
} else if n1 > 5 {
    fmt.Println("too big :", n1)
} else {
    fmt.Println("good :", n1)
}
```

<br>

특이사항으로는 `if`문의 조건 확인 구문 안에서 변수 선언을 동시에 할 수 있다.

```go
if n2 := 4; n2 == 0 { // both declaring variable and checking condition
    fmt.Println("too low")
} else if n2 > 5 {
    fmt.Println("too big :", n2)
} else {
    fmt.Println("good :", n2)
}

// fmt.Println(n2) // it causes error. once a if/else statement ends, n1 is not accessable.
```

단, 이렇게 선언된 변수는 `if`문 밖에선 접근할 수 없다.

<br><br>

## for

---

Go의 `for`문은 4가지 유형이 존재한다.

1. 일반적인 `for`문과 유사함 => `for(int i = 0; i < n; i++) {}`
2. 일반적인 while문과 유사함 => `while(condition)`
3. 무한 루프 => `while(True)`
4. range-based의 foreach문 => `for(const auto& element : containor) {}`

하나씩 살펴보자.

<br><br>

### The Complete for Statement

```go
for i := 0; i < 10; i++ {
    fmt.Print(i)
}
```

`if`문처럼 괄호를 사용하지 않는다. 또한 변수를 초기화할 때 `var` 키워드를 사용하지 않고, `:=` 연산자를 이용하여 초기화해야 한다.

<br>

### condition-only statements

```go
i := 1
for i < 100 {
    fmt.Print(i, " ")
    i = i * 2
}
```

변수의 선언과 증감이 생략된 형태로, 다른 언어의 while문과 유사한 형태이다.

<br>

### infinite loop and break, continue statements

```go
j := 0
for {
    if j++; j > 10 {
        break // if there is no break statement, loop will last until a keyboard interrupt(ctrl-c) occurs
    } else if j%2 == 0 {
        continue
    }
    fmt.Print(i, " ")
}
```

`for` 키워드 이후 아무런 표현식도 오지 않으면 무한루프를 돌게 된다. `break`문과 `contine`문도 사용 가능하다.

<br>

### for-range loop

```go
// for-range loop (array, slice, string)
evenVals := []int{2, 4, 6, 8, 10, 12}
for i, v := range evenVals {
    fmt.Println(i, v) // i is an key(index) of the data, v is value of the data
}

// ignoring the key in a for-range loop
for _, v := range evenVals { // using underscore(_), we can only access the value
    fmt.Print(v, " ") // if you want, it is also possible to ignore the value by using underscore
}
```

다른 언어에 존재하는 `for-each` 형태의 반복문과 유사한 형태이다. `range` 키워드를 통해 각각 인덱스와 값에 접근할 수 있다.
또한 변수 이름을 언더바(`_`)로 설정하면, 해당 값을 사용하지 않고 넘긴다는 의미가 된다. 적절히 사용할 수 있도록 하자.

<br>

`map` 타입에 대해서도 for-range loop를 적용할 수 있다.

```go
// for-range loop (map)
names := map[string]bool{
    "Fred": true,
    "Raul": true,
    "Will": false,
}

for k, v := range names {
    fmt.Println(k, v)
}

for k := range names { // by leave off second variable, it is possible to get key only.
    fmt.Println(k, names[k])
}
```

대충 Python이랑 비슷한 것 같다.

<br>

`string`에 대해서도 for-range loop가 가능하다.

```go
// for-range loop (string)
samples := []string{"hello", "안녕하세요"}

for _, sample := range samples {
    for i, r := range sample { // it iterates over the runes, not bytes
        fmt.Println(i, r, string(r)) // key is the number of byte from the beginning of the string, type of value is rune
    }
}
```

특이사항은 `byte` 단위가 아닌 `rune` 단위로 iterating한다는 것.
따라서 문자의 크기가 2바이트 이상인 경우, 인덱스가 점프하는 것을 확인할 수 있다.

<br>

Go에서의 `for`문은 **Labeling**을 지원한다.

```go
func main() {
	samples := []string{"hello", "안녕hello"}

outer: // label of outer for-statements
	for _, sample := range samples {
		for i, r := range sample {
			fmt.Println(i, r, string(r))
			if r == 'l' {
				continue outer // this leads to continue nested loop
			}
		}
		fmt.Println() // this line is not reached because all the strings contain 'l', and the process continued outer loop
	}
}
```

바깥쪽 반복문에 `outer`라는 Label이 붙어있다.
그리고 안쪽 반복문에서 `continue outer`를 통해 `for i, r := range sample {}` 블록이 아닌, `for _, sample := range samples` 블록의 시작점으로 되돌아가고 있다.

<br><br>

## switch

---

보통 제한적인 상황에서만 사용되거나 `switch`문이 없는 다른 언어들과는 달리, Go는 `switch`문이 엄청 잘되어있다.

```go
words := []string{"a", "cow", "smile", "gopher", "octopus", "영어싫어", ""}

for _, word := range words {
    switch size := len(word); size { // as like if-statements, there is no parenthesis
    case 1, 2, 3, 4: // using comma(,), we can make multiple matches
        fmt.Println(word, "is a short word!")
    case 5:
        fmt.Println(word, "is exactly the right length:", size)
        break                         // this makes it exits switch earlier
        fmt.Println("not be printed") // because of break above, this line is unreachable
    case 6, 7, 8, 9: // empty case (nothing happened)
        // fallthrough // if keyword `fallthrough` is here, as like other languages, run next case's block
    default:
        fmt.Println(word, "is a wrong word")
    }
}
```

여러 값에 대해 적용되는 `case`를 설정하려면 컴마(`,`)로 값들을 구분지어서 나열하면 된다.<br>
특이사항은 `case` 블록에서 `break`를 통한 탈출을 지원하긴 하지만, 다른 언어와 달리 반드시 사용하지 않아도 `case` 블록이 끝나면 알아서 탈출해준다.
만약 `case` 블록이 끝나고 아래 `case` 블록도 실행되게끔 하고자 하는 경우, `fallthrough` 키워드를 사용하면 된다 한다. 다만 권장되지는 않는 듯 하다.

<br>

`switch`문에 아무런 변수도 할당하지 않는 경우, boolean expression의 true/false 여부에 따라 `case` 블록이 실행된다. `if`/`else`문이랑 비슷한듯.

```go
	// blank switch, break a loop in switch/case statements
loop: // to break in switch/case statement, attach a label to for-statements
	for i := 0; i < 10; i++ {
		switch { // this is a blank switch. no variable
		case i%2 == 0: // here can be boolean expression
			fmt.Println(i, "is even number")
		case i%3 == 0:
			fmt.Println(i, "is divisible by 3 but not 2")
		case i%7 == 0:
			fmt.Println("exit the loop")
			break loop // if this statement is just `break`, it cannot exit the loop. just proceed until the loop ends
		default:
			fmt.Println(i, "is boring")
		}
	}
```

`case`안에서 `for`문을 탈출하려면 위처럼 `break`문에 Label을 명시해주어야 한다.

<br><br>

## goto

---

놀랍게도 Go엔 `goto`가 있다. `goto` 자체가 가지고 있는 문제점을 해결하기 위해 몇 가지 보완이 이루어진 듯 하다.

```go
	a := 10
	// goto skip // cannot jump over variable declaration
	b := 20
	goto skip
skip:
	c := 30

	fmt.Println(a, b, c)
	if c > a {
		// goto inner // cannot jump into block
	}

	if a < b {
		goto inner
	inner:
		fmt.Println("a is less than b")
	}
```

`goto`를 통해 특정 block 안으로 들어가거나, 변수 선언 이전으로 되돌아가거나 할 수는 없다.

<br>

`goto`가 유용하게 쓰이는 경우가 한 가지 있다.

```go
    x := rand.Intn(10)

	for x < 100 {
		if a%5 == 0 {
			goto done // in this case, instead of using boolean flag, using goto makes code clearer and readable
		}
		a = a*2 + 1
	}

	fmt.Println("do something when the loop completes normally")
done:
	fmt.Println("do complicated stuff no matter why we left the loop")
	fmt.Println(a)
```

위처럼 flag를 설정하여, flag의 여부에 따라 추가적으로 처리를 해주어야 하는 경우이다.
이 경우 위처럼 `goto`를 사용하는 것이 `if`를 사용하는 것보다 깔끔하다고 한다.

<br><br>

## References

---

<center>****

[
<Image alt="Learning Go Book Cover" src="https://learning.oreilly.com/covers/urn:orm:book:9781492077206/400w/"/>
](https://learning.oreilly.com/library/view/learning-go/9781492077206/) <br>
[Jon Bodner, 『Learning Go』, O'Reilly Media, Inc.](https://learning.oreilly.com/library/view/learning-go/9781492077206/)

</center>

<br><br>
