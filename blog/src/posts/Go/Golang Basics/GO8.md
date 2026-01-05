---
title: 에러 처리
date: 2022-08-19
excerpt: Errors
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

## Errors

---

다른 언어를 쓰다가 Go를 배워보면, Go의 에러 핸들링은 상당히 낯설게 느껴진다고 한다.
에러를 핸들링하는 Go의 접근 방식에 대해 알아보고, `panic`과 `recover`에 대해 알아보자.

Go는 함수에서 `error` 타입의 값을 리턴함으로써, 에러를 핸들링한다.
만약 함수가 정상적으로 잘 동작했다면 `error` 파라미터로 `nil`을 리턴한다. 반면 함수가 함수가 무언가 잘못되었다면, 에러 값이 리턴된다.
그 함수를 호출한 함수는 에러 변수를 `nil`과 비교하여 에러 여부를 판단함으로써 핸들링한다. 만약 에러가 발생했다면 리턴된 에러 변수를 그대로 리턴한다.
이런 방식이 굉장히 낡은 방식이라고 느낄 수는 있는데, 동시에 가장 강력한 방식이다.

```go
func calcRemainderAndMod(numerator, denomiator int) (int, int, error) {
	if denomiator == 0 {
		return 0, 0, errors.New("denimiator is 0")
	}
	return numerator / denomiator, numerator % denomiator, nil
}

func main() {
	numerator, denomiator := 20, 3
	remainder, mod, err := calcRemainderAndMod(numerator, denomiator)
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
	fmt.Println(remainder, mod)
}
```

만약 파라미터로 받은 분모가 0일 경우, `errors` 패키지의 `New()` 함수로 새로운 에러를 생성한다.
에러의 알파벳 앞 글자는 대문자를 사용하지 않고(not capitalized), 마침표(`.`)를 사용하거나, 개행을 하지 않는 게 국룰이라고 한다.
또한 에러가 발생했을 시, 대부분의 경우 다른 리턴값은 Zero value로 리턴한다.

다른 언어의 예외 처리 방법과는 달리, Go에서 특별히 에러를 확인하는 문법은 없다.
if문을 사용하여 에러 변수가 `nil`인지 확인하는 것이 유일한 방법이다.

<br>

`error`는 내부적으로 이렇게 생겼다.

```go
type error interface {
    Error() string
}
```

`Error()`라는 한 개의 메소드가 존재하는 인터페이스로, 이 인터페이스를 충족시키는 모든 타입들은 에러로 간주된다.
또한 에러가 발생하지 않았을 때 `nil`을 리턴하는 이유는 `nil`이 인터페이스의 Zero Value이기 때문.

<br>

이렇듯 Go가 일반적인 `Try`-`Catch`-`Throw` 방식의 예외처리가 아니라 `error`를 리턴하여 처리하는 방식을 택한 이유가 있다.
첫 번째로, exception을 사용하면 코드가 진행되는 흐름이 또 한개 더 생겨버리게 되며, 이런 흐름들은 불분명한 경우가 많다.
만일 exception이 제대로 처리되지 않으면 crash가 발생할 수도 있으며, crash가 밣생하지 않았지만 데이터가 제대로 처리되지 않을 수도 있다.

두 번째로, Go 컴파일러에서는 모든 변수가 반드시 한 번씩은 레퍼런스가 되어야 한다.
그래서 `error`를 리턴값으로 받으면 언더스코어(`_`)를 사용하여 명시적으로 에러를 무시하는 게 아닌 이상, 반드시 에러를 체크해야 한다.
이러한 반드시 에러를 체크해야 한다는 점 때문에 개발자들에게 좋은 버릇을 들이게 되는 것 같다.

<br>

Exception Handling의 방식은 코드 길이는 확연히 짧아질 수 있지만, 그것이 코드를 이해하거나 유지보수 하기 쉽다는 뜻은 아니다.
반면 Go의 에러 처리 방식이 라인 수는 다소 길 지언정 이해하기는 쉽다.

Go의 에러 핸들링은 `if`문 내부에서 인덴트되며, 나머지 비즈니스 로직은 인덴트 바깥에 있다.
그래서 시각적으로도 에러 조건을 확인하기가 더 용이하다고 한다.

<br><br>

### Use Strings for Simple Errors

Go의 표준 라이브러리는 두 가지 방식으로 `string`을 통해 에러를 생성할 수 있다.
한 가지 방식은 앞서 보았듯, `errors.New()` 함수를 사용하는 것이다. `errors.New()`는 파라미터로 `string`을 받고 `error`를 리턴한다.
이 때 보낸 `string`은 나중에 `fmt.Println()` 등으로 `error`를 출력할 때 `Error()` 메소드를 출력하면서 반환된다.

```go
func doubleEven1(i int) (int, error) {
	if i%2 != 0 {
		return 0, errors.New("only even numbers are processed")
	}
	return i * 2, nil
}
```

<br>

또 다른 방식은 `fmt.Errorf()` 함수를 사용하는 것이다.
이 함수는 `fmt.Printf()` 함수와 유사하게 `%d` 등 서식 기호를 사용하여 에러 메세지를 포매팅할 수 있다.
함수를 호출하면 `errors.New()`처럼 `error`가 생성된다.

```go
func doubleEven1(i int) (int, error) {
	if i%2 != 0 {
		return 0, errors.New("only even numbers are processed")
	}
	return i * 2, nil
}

func doubleEven2(i int) (int, error) {
	if i%2 != 0 {
		return 0, fmt.Errorf("%d isn't an even number", i)
	}
	return i * 2, nil
}
```

<br><br>

### Sentinel Errors

**Sentinel Error**는 패키지 레벨에서 정의되어 있는 에러로, 현 상태에서 특정한 문제로 인해 더 이상 프로세스의 진행이 불가능함을 나타낸다.
대체로 `Err`로 시작하는 이름을 가지며(예외로 `io.EOF`가 있다), 읽기 전용이다.

`.zip` 파일을 처리하는 `archive/zip` 라이브러리에 존재하는 센티넬 에러 중에 `ErrFormat`이란 것이 있는데,
이는 `.zip` 파일 형태가 아닌 데이터가 넘겨졌음을 나타낸다.

```go
func main() {
    data := []byte("This is not a zip file")
    notAZipFile := bytes.NewReader(data)
    _, err := zip.NewReader(notAZipFile, int64(len(data)))
    if err == zip.ErrFormat {
        fmt.Println("Told you so")
    }
}
```

<br>

Sentinel Error의 또 다른 예는 `crypto/rsa` 패키지의 `rsa.ErrMessageTooLong`이다.
현재 public key를 가지고 암호화하기에는 메시지의 크기가 너무 크다는 것을 나타낸다.
그 이외에도 `context.Canceled`라는 센티넬 에러가 있는데, 12장에서 보게 될 것이다.

Sentinel Error를 정의하기 이전에, 정의할 Sentinel Error가 정말 필요한 것인지 확실히 하는 것이 좋다.
일단 에러를 정의하고 해당 버전을 커밋하면, 그 이후의 모든 릴리즈에서 이전 버전들과도 호환이 되도록 에러를 유지해야 한다.
그러니 그냥 표준 라이브러리를 재사용하거나, 에러를 일으킨 원인에 대한 정보를 포함하는 `error` 타입을 정의한 후 이를 리턴하는 것이 나을 것이다.

반면 Sentinel Error가 분명히 필요한 상황도 존재한다.
더이상 프로세스를 진행할 수 없고, 에러 상태를 설명하기 위해 맥락에 대한 정보를 제공할 필요가 없으면, Sentinel Error를 선택하는 것이 좋다.

앞선 예제에서 보았듯, `==`를 통해 Sentinel Error를 테스트할 수 있다.
함수의 리턴값으로 받은 에러를, document에 명시된 Sentinel Error와 일치하는지 확인하는 것이다.

<br><br>

### Constant Errors

아래 예제와 같은 방식으로 Sentinel Error를 생성할 수 있다.

```go
type Sentinel string

func (s Sentinel) Error() string {
	return string(s)
}

const (
	ErrFoo = Sentinel("foo error")
	ErrBar = Sentinel("bar error")
)
```

위 `Sentinel` 타입은 `error` 인터페이스를 지원하는 타입으로, `string` 리터럴을 `error`로써 사용할 수 있게 해준다.
마치 함수 호출처럼 Sentinel Error를 생성할 수 있다는 장점이 있다. 아래 예제처럼 사용할 수 있다.

```go
func doubleEven1(i int) (int, error) {
	if i%2 != 0 {
		return 0, ErrFoo
	}
	return i * 2, nil
}

func main() {
	i, err := doubleEven1(21)
	if err == ErrFoo {
		fmt.Println(err)
	}
	fmt.Println(i)
}
```

이 방식이 언뜻 보기에는 좋은 방법이라고 생각할 수 있지만, Go에서 이상적인 코드는 아니다.
이렇게 생성한 에러 타입은 실질적으로는 `string`이며,
만약 <span style="background-color: #FFF5B1">에러 메시지가 동일하다면 동일한 에러로 인식</span>한다.
설령 다른 패키지에 존재하는 에러라도, 동일한 에러 메시지를 가진다면 동일한 에러로 인식해버리고 마는 것이다.
`errors.New()`로 생성한 에러 타입이 에러 메시지가 동일하더라도 서로 다른 에러로 인식하는 것과는 대조적이라고 할 수 있다.

Go의 설계 철학상, Sentinel Error를 많이 만들어야 할 이유는 없다.
애초에 프로세스를 진행하다 보면 빠질 수 있는 에러 상황을 나타내는 게 얘네들의 존재 의의인데,
그런 상황이 몇 가지 안될 테니 많을 이유가 없는 것이 당연하다.

Sentinel Error는 패키지 레벨에서 선언되는 public 변수일 수밖에 없는 이유는 자명하다.
유저가 모든 상황에 대한 에러 변수를 생성하게끔 하기 보다는 그냥 이미 정의된 Sentinel Error를 가져다 쓰는 것이 더 편하기 때문이며,
그러는 편이 언어가 더 단순해진다고 볼 수 있다.

<br><br>

### Errors Are Values

`error`는 인터페이스이므로, 로깅이나 에러 핸들링을 위한 새로운 에러 타입을 직접 정의할 수 있다.
이를테면 유저의 에러 리포트를 확인하기 위해 *status code*를 추가할 수 있다.
그렇게 하면 에러 메시지만을 가지고 에러를 확인하는 것보단 훨씬 나을 것이다.

직접 *status code*가 추가된 에러 타입을 만들어보자.

먼저, `iota`로 각 *status code*를 정의해보자.

```go
type Status int

const (
	InvalidLogin Status = iota + 1
	NotFound
)
```

이제 이 `Status`들이 추가된 에러 타입을 정의해보자.

```go
type StatusErr struct {
	Status  Status
	Message string
}

func (se StatusErr) Error() string {
	return fmt.Sprintf("%d - %s", se.Status, se.Message)
}
```

이렇게 정의된 `StatusErr` 타입을 사용하면 에러에 대해 더 정확한 정보를 기록하고 확인할 수 있다.

<br>

```go
func LoginAndGetData(uid, pwd, file string) ([]byte, error) {
    err := login(uid, pwd)
    if err != nil {
        return nil, StatusErr{
            Status:    InvalidLogin,
            Message: fmt.Sprintf("invalid credentials for user %s", uid),
        }
    }
    data, err := getData(file)
    if err != nil {
        return nil, StatusErr{
            Status:    NotFound,
            Message: fmt.Sprintf("file %s not found", file),
        }
    }
    return data, nil
}
```

위 예제는 `StatusErr` 에러 타입을 사용하는 예제 코드이다.

주의해야 할 점이 있는데, `StatusErr`와 같이 직접 정의한 에러 타입을 사용할 때에도 리턴할 타입으로는 반드시 `error`를 사용해주어야 한다.
이렇게 해야 함수를 호출할 때 특정 에러 타입에 종속되지 않으며, 함수에서 사용하는 여러 타입의 에러들을 모두 리턴할 수 있다.

<br>

에러 타입을 직접 정의해서 사용하는 경우 주의해야 할 것이 있다. 초기화되지 않은 에러 변수를 사용하면 안된다.
다시 말해 에러 변수를 선언만 하고 초기화하지 않은 상태로 이를 리턴하면 안된다.

하지 말라는데 굳이 해본 예제를 확인해보자.

```go
func GenerateWrongError(flag bool) error {
	var genErr StatusErr
	if flag {
		genErr = StatusErr{
			Status: NotFound,
		}
	}
	return genErr
}

func main() {
	err := GenerateError(true)
	fmt.Println(err != nil)
	err = GenerateError(false)
	fmt.Println(err != nil)
}
```

```bash
true
true
```

위 예제의 `err = GenerateError(false)`라인에서 파라미터로 `false`를 넘겨주었기 때문에, 리턴되는 에러 변수는 초기화되지 않았다.
그럼에도 `err != nil`는 `true`로 처리되며, 이는 설령 `GenerateError()`의 `genErr`의 타입을 `*StatusErr`로 변경하더라도 마찬가지이다.

원인을 떠올려 보자면, `error`는 인터페이스이니까 인터페이스가 `nil`이 되는 조건에 대해 생각해보면 된다.
인터페이스가 `nil`이려면 가리키는 대상의 타입과 값이 모두 `nil`이어야 한다.
위 경우 가리키는 대상의 값은 `nil`이지만, 타입이 `StatusErr` 또는 `*StatusErr`이기 때문에 `nil`이 아닌 것이다.

<br>

이런 코드는 두 가지 방법으로 고칠 수 있다. 하나는 `nil`을 직접 리턴하는 것이다.

```go
func GenerateError1(flag bool) error {
	if flag {
		return StatusErr{
			Status: NotFound,
		}
	}
	return nil
}
```

이와 같은 방식은 `return`문 옆에 붙어있는 에러 변수가 제대로 초기화되었는지 굳이 확인해볼 필요가 없다는 장점이 있다.

또 한가지 방식은 변수를 `error`로 선언하는 것이다.

```go
func GenerateError2(flag bool) error {
	var genErr error
	if flag {
		genErr = StatusErr{
			Status: NotFound,
		}
	}
	return genErr
}
```

어차피 `error`는 인터페이스니까, 초기화 안한 상태로 리턴하면 `nil`로 리턴될 것이다.

첫 번째와 두 번째 예제의 공통점은, 변수를 선언할 때 우리가 정의하였던 에러 타입으로 선언하지 않는다는 것이다.
그렇게 하면 앞서 본 예제처럼, 문제를 일으킬 수 있다.

<br>

그리고 `error`가 인터페이스이기는 하지만, 직접 정의한 에러에 Type Assertion이나 Type Swtich를 사용하지 말자.
대신 `errors.As()`를 사용한다. 사용하는 예제는 이후 다룰 것이다.

<br><br>

## Wrapping Errors

---

에러가 코드에서 코드로 전달되는데, 이때 각 맥락 정보를 에러에 추가하고 싶을 수 있다.
이러한 맥락 정보는 이를테면, 어떤 함수인지나 어떤 라인에서 발생한 에러인지를 포함한다.
이처럼 Go에서는 기존 에러에 맥락 정보를 추가하는 것을, 에러를 *Wrapping*한다고 한다.
또한 이렇게 받은 여러 겹의 에러를 *error chain*이라고 한다.

Go에 표준 라이브러리에도 Error Wrapping에 대한 함수가 있다.
`fmt.Errorf()`가 바로 그것인데, 이 함수의 서식 문자 중 `%w`는 기존 에러가 포함하고 있던 에러 메시지를 의미한다.
일반적으로는 에러 메시지의 끝에 `: %w`라고 적어서 기존 에러에 대한 정보도 함께 출력하는 것이 일반적이다.

표준 라이브러리에는 에러를 Unwrapping하는 함수인 `errors.Unwrap()`도 있다.
이 함수에 에러 타입을 보내면 Wrapping된 에러를 반환한다. 만약 더 이상 Wrapping된 에러가 없으면 `nil`을 반환한다.

```go
func fileChecker(name string) error {
	f, err := os.Open(name)
	if err != nil {
		return fmt.Errorf("in fileChecker: %w", err)
	}
	defer f.Close()
	return nil
}

func main() {
	err := fileChecker("nonExistFile.txt")
	if err != nil {
		fmt.Println(err)
		if wrappedErr := errors.Unwrap(err); wrappedErr != nil {
			fmt.Println(wrappedErr)
		}
	}
}
```

위 코드를 실횅시, 아래와 같은 결과를 확인할 수 있다.

```bash
in fileChecker: open nonExistFile.txt: no such file or directory
open nonExistFile.txt: no such file or directory
```

위처럼 `fileChecker()`에서 에러를 Wrapping하여 두 겹의 에러를 생성하였고, `errors.Unwrap()`으로 Wrapping된 에러를 확인할 수 있다.

다만 `errors.Unwrap()` 함수보다는 `errors.Is()`나 `errors.As()`를 사용하는 것이 일반적이라고 한다. 이 두 함수에 대해서는 다음 섹션에서 다룬다.

<br>

이제 우리가 만든 에러 타입도 Wrapping이 가능하도록 만들어보자.
Wrapping이 가능하려면 Unwrap() 메소드를 추가해주어야 한다. 코드는 다음과 같다.

```go
type StatusErr struct {
	Status  Status
	Message string
	Err     error
}

func (se StatusErr) Error() string {
	return se.Message
}

func (se StatusErr) Unwrap() error {
	return se.Err
}
```

StatusErr에 `error` 타입의 `Err`라는 필드가 추가되었으며, `Unwrap()`이라는 메소드가 추가되었다.

```go
func LoginAndGetData(uid, pwd, file string) ([]byte, error) {
	err := login(uid, pwd)
	if err != nil {
		return nil, StatusErr{
			Status:  InvalidLogin,
			Message: fmt.Sprintf("Invalid Credentials for user %s", uid),
			Err:     err,
		}
	}

	data, err := getData(file)
	if err != nil {
		return nil, StatusErr{
			Status:  NotFound,
			Message: fmt.Sprintf("file %s is not found", file),
			Err:     err,
		}
	}

	return data, nil
}
```

이렇게 에러 타입을 Wrapping이 가능하게 설계할 수 있다.

다만 모든 상황에서 에러를 Wrapping해야 하는 것은 아니다.
외부 라이브러리의 에러는 프로그램에서 굳이 필요하지 않은 내용까지 포함하는 경우가 있다.
그럴 때는 그냥 에러를 새로 생성하여도 괜찮긴 하다.

이전에 본 `fmt.Errorf()` 함수의 기능 중 그러한 기능이 있는데,
서식 문자로 `%w` 대신 `%v`를 사용하면 기존 에러의 에러 메시지만 가져오고, 에러를 Wrapping하지는 않는다.

<br><br>

### Is

Wrapping하는 것은 에러에 정보를 추가적으로 담을 수 있다는 점에서 유용하지만, 문제를 야기할 수 있다.
가령 Wrapping된 에러가 Sentinel Error라면, `==`로 에러를 체크하거나 Type Switch, Type Assertion을 사용할 수 없다.
이와 같은 상황을 위해 존재하는 함수가 바로 `errors.Is()`와 `errors.As()`이다.

먼저 `errors.Is()`는 에러가 어떤 Sentinel Error 인스턴스를 Wrapping하고 있는지 확인하기 위해 사용된다.
`errors.Is()`는 체크할 에러와 비교 대상이 되는 Sentinel Error, 두 개의 에러를 파라미터로 받는다.
만약 첫 번째 파라미터의 Error Chain 안에 일치하는 Sentinel Error가 있다면 `true`, 찾을 수 없다면 `false`를 반환한다.

```go
func fileChecker(name string) error {
	f, err := os.Open(name)
	if err != nil {
		return fmt.Errorf("in fileChecker: %w", err)
	}
	defer f.Close()
	return nil
}

func main() {
	err := fileChecker("nonExistFile.txt")
	if err != nil {
		if errors.Is(err, os.ErrNotExist) {
			fmt.Println(err)
		}
	}
}
```

위 예제를 실행하면 다음의 결과를 얻을 수 있다.

```bash
in fileChecker: open nonExistFile.txt: no such file or directory
```

<br>

기본적으로 `errors.Is()`는 `==` 연산을 통해 각 Wrapping된 에러들을 검사한다.
그래서 직접 정의한 에러가 `==`연산을 통해 비교할 수 없는 경우, `Is()` 메소드를 추가해주어야 한다.

```go
type MyErr struct {
	Codes []int
}

func (me MyErr) Error() string {
	return fmt.Sprintf("codes: %v", me.Codes)
}

func (me MyErr) Is(target error) bool {
	if me2, ok := target.(MyErr); ok {
		return reflect.DeepEqual(me, me2)
	}
	return false
```

예제에서는 Type Assertion을 통해 먼저 에러가 `MyErr` 타입인지 확인하고, 맞다면 `reflect.DeepEqual()`을 통해 비교를 진행한다.
`slice`는 `==`로 비교 연산이 불가능하므로 `reflect.DeepEqual()`를 사용한다.

<br>

서로 다른 에러 인스턴스끼리 비교를 할 수 있도록 `Is()` 메소드를 추가하기도 한다.
이를테면 특정한 에러들과 일치하는 패턴을 만드는 작업이라고 할 수 있는데,
특정 필드값이 동일한지 검사하는 필터 역할의 필터 인스턴스를 만드는 것이다.

```go
type ResourceErr struct {
	Resource string
	Code     int
}

func (re ResourceErr) Error() string {
	return fmt.Sprintf("%s: %d", re.Resource, re.Code)
}
```

위와 같은 `ResourceErr`에서, `Is()` 메소드를 직접 정의해보자.

```go
func (re ResourceErr) Is(target error) bool {
	if other, ok := target.(ResourceErr); ok {
		ignoreResource := other.Resource == ""
		ignoreCode := other.Code == 0
		matchResource := other.Resource == re.Resource
		matchCode := other.Code == re.Code

		return matchCode && matchResource ||
			matchCode && ignoreResource ||
			ignoreCode && matchResource
	}
	return false
}
```

정의된 `Is()` 메소드는 먼저 에러 타입이 ResourceErr인지 확인하고,
`Code`와 `Resource` 중 필드값이 하나라도 설정되면 그에 대하여 비교를 진행한다.

이렇게 `Is()` 메소드를 직접 설정해주면, 아래 예제처럼 사용할 수 있다.

```go
func main() {
	err := fileChecker("nonExistFile.txt")
	if err != nil {
		if errors.Is(err, os.ErrNotExist) {
			fmt.Println(err)
		}
	}

	fmt.Println("---------------------------")

	err1 := ResourceErr{
		Resource: "Database",
		Code:     123,
	}

	err2 := ResourceErr{
		Resource: "Network",
		Code:     456,
	}

	if errors.Is(err1, ResourceErr{Resource: "Database"}) {
		fmt.Println("The database is broken:", err)
	}

	if errors.Is(err2, ResourceErr{Resource: "Database"}) {
		fmt.Println("The database is broken:", err)
	}

	if errors.Is(err1, ResourceErr{Code: 123}) {
		fmt.Println("Code 123 is triggered:", err)
	}

	if errors.Is(err2, ResourceErr{Code: 123}) {
		fmt.Println("Code 123 is triggered:", err)
	}

	if errors.Is(err1, ResourceErr{Resource: "Database", Code: 123}) {
		fmt.Println("Database is broken and Code 123 is triggered", err)
	}

	if errors.Is(err1, ResourceErr{Resource: "Network", Code: 123}) {
		fmt.Println("Network is broken and Code 123 is triggered", err)
	}
}
```

위 코드의 실행 결과는 어렵지 않게 짐작할 수 있을 것이다.

```bash
The database is broken: Database: 123
Code 123 is triggered: Database: 123
Database is broken and Code 123 is triggered Database: 123
```

<br><br>

### As

`errors.As()`는 반환된 에러(또는 error chain중의 어느 에러)가 특정 타입과 일치하는지 확인하는 함수이다.

이 함수는 두 개의 파라미터를 받는데, 각각 검사할 에러와, 특정 타입의 변수를 가리키는 포인터이다.
만약 해당 첫 번째 파라미터의 error chain 안에 두 번째 파라미터와 일치하는 타입이 존재한다면 `true`를 반환하며,
일치하지 않는다면 `false`를 반환한다.

사용 예제는 아래와 같다.

```go
err := AFunctionThatReturnsAnError()
var myErr MyErr
if errors.As(err, &myErr) {
    fmt.Println(myErr.Code)
}
```

위처럼 `var` 키워드를 사용하여 Zero value인 에러를 선언하고, 이를 `errors.As()`에 pass by pointer로 넘길 수 있다.

또한 두 번째 파라미터로 변수가 아니라 인터페이스를 넘길 수도 있는데, 이렇게 하면 해당 인터페이스를 충족시키는 에러 타입이 있는지 찾아낼 수 있다.

```go
err2 := AFunctionThatReturnsAnError()
var coder interface {
	Code() int
}

if errors.As(err2, &coder) {
	fmt.Println(coder.Code())
}
```

위 예제에서는 익명 인터페이스를 사용하였는데, 어떤 인터페이스 타입이든 상관 없다.

`errors.As()`의 두 번째 파라미터는 에러 타입이나 인터페이스에 대한 포인터만 올 수 있으며, 그 외에 것은 panic이 발생한다.

`errors.Is()`처럼, `As()` 메소드를 오버라이딩하면 `errors.As()`도 커스터마이징하여 사용할 수 있다.
다만 *reflection*이 필요하며, 특수한 상황에서만 사용한다고 한다.

<br><br>

### Wrapping Errors with defer

아래와 같은 코드가 있다고 가정해보자.

```go
func doSomeThings_before(val1, val2 int) (int, error) {
	val3, err := doThing1(val1)
	if err != nil {
		return 0, fmt.Errorf("in DoSomeThings: %w", err)
	}

	val4, err := doThing2(val2)
	if err != nil {
		return 0, fmt.Errorf("in DoSomeThings: %w", err)
	}

	res, err := doThing3(val3, val4)
	if err != nil {
		return 0, fmt.Errorf("in DoSomeThings: %w", err)
	}
	return res, nil
}
```

딱 봐도 `if`절이 반복되고 있는데, 이와 같은 반복은 `defer`를 통해 리팩토링할 수 있다.

```go
func doSomeThings_after(val1, val2 int) (_ int, err error) {
	defer func() {
		if err != nil {
			err = fmt.Errorf("in DoSomeThings: %w", err)
		}
	}()

	val3, err := doThing1(val1)
	if err != nil {
		return 0, err
	}

	val4, err := doThing2(val2)
	if err != nil {
		return 0, err
	}

	return doThing3(val3, val4)
}
```

비록 어느 정도 반복되는 구문이 여전히 남아있기는 하지만, 그래도 훨씬 더 보기 좋다.

`defer`를 썼기 때문에 반환할 named return value가 변경되고, 변경된 값을 그대로 반환한다.
주목할 점은 첫 번째 리턴 변수의 이름을 `_`로 설정함으로써,
해당 파라미터는 named return value를 사용하지 않는다는 것을 명시적으로 선언하였다는 점이다.

`defer`의 closure에서는 에러가 리턴되었는지 체크하며,
만약 그렇다면 해당 에러에 어느 함수에서 에러를 확인했는지 정보를 추가하여 Wrapping한 새로운 에러를 반환한다.

이러한 패턴은 모든 에러에 동일한 메시지를 출력하는 경우 용이하다.
`fmt.Errorf()`와 서식 문자 `%w`를 사용하여, 에러가 발생한 맥락에 대해 추가적인 정보를 제공할 수 있다는 점은 기억할 수 있을 것 같다.

<br><br>

## panic and recover

---

Go에서는, 런타임에서 이 다음에 무슨 일이 일어날 지 밝혀낼 수 없는 상황일 때 *panic*을 발생시킨다.
프로그래밍 에러(slice의 out of index)나 환경적인 요인(running out of memory) 등의 원인이 있다.

Go에서는 *panic*이 발생하자마자 현재 실행중인 함수를 즉시 끝내고 현재 함수에 붙어있는 `defer`를 즉시 실행한다.
`defer`가 끝나면 현재 함수를 실행한 또 다른 함수의 `defer`를 끝내고, `main()`함수에 도달할 때까지 이를 반복한다.
그러면 프로그램이 종료되며, stack trace를 출력한다.

우리가 짠 프로그램이 회복할 수 없는 상태에 빠진다면 *panic*을 일으킬 수 있다.
`panic()` 함수는 에러 메세지 하나를 파라미터로 받아서 출력한다(보통 `string`이다).

직접 *panic*을 일으키는 예제를 확인해보자

```go
func doPanic(msg string) {
	panic(msg)
}

func main() {
	doPanic("응애앵")
}
```

위 예제를 실행하면 아래와 같은 결과를 얻는다.

```bash
panic: 응애앵

goroutine 1 [running]:
main.doPanic(...)
        /home/junhyuk/Programming/Golang/8-errors/panic.go:6
main.main()
        /home/junhyuk/Programming/Golang/8-errors/panic.go:10 +0x45
exit status 2
```

*panic*을 발생시킬 때 보냈던 메세지와, 어느 goroutine에서 발생한 패닉인지(goroutine은 나중에 나온다!),
그리고 stacktrace가 나오는 것을 확인할 수 있다.

<br>

Go에는 *panic*을 캡쳐하여 프로그램을 조금 더 예쁘게 셧다운하거나, 혹은 셧다운하지 않게 해주는 빌트인 함수 `recover()`가 존재한다.
`recover()` 함수가 `defer`의 closure에서 호출되면 *panic*이 발생했는지 확인한다.
만약 *panic*이 발생하였으면 `recover()`의 리턴값은 panic에 할당된 값(아마 에러 메세지인듯?)이 되며,
프로그램은 termination을 멈추고 계속 동작한다.

아래 예제에서 `recover()`문을 사용하는 패턴을 확인할 수 있다.

```go
func div60(i int) {
	defer func() {
		if v := recover(); v != nil {
			fmt.Println(v)
		}
	}()

	fmt.Println(60 / i)
}

func main() {
	for _, val := range []int{1, 2, 0, 6} {
		div60(val)
	}
}
```

panic이 발생하면 모두 건너뛰고 `defer`가 실행되기 때문에, `recover()`는 반드시 `defer`문 내에서만 호출되어야 한다.
`if`문 내에서 `recover()`를 호출하는데, 이때 panic이 발생하였다면 `nil`이 아닌 값을 리턴받으므로 `if`문 내부를 실행한다.

```bash
60
30
runtime error: integer divide by zero
10
```

만약 위 예제의 `div60()`함수에 `defer~recover` 구문이 없었다면 `div60(0)`이 실행될 때 panic이 발생하여 프로세스가 종료되었을 것이다.
하지만 panic이 `recover()`문에 걸려 `runtime error: integer divide by zero`를 출력한 뒤,
프로세스가 끝나지 않고 그 다음 호출인 `div60(6)`까지 호출한 것을 확인할 수 있다.

panic과 recover는 다른 언어에서 Exception Handling을 하는 패턴과 유사하지만, 그런 패턴대로 사용하는 것은 별로 좋은 생각이 아니다.
panic은 심각한 에러 상황에만 사용하고, recover로 그러한 예제를 처리할 떄는 매우 조심스럽게 접근해야 한다.

특히 panic이 발생했을 때 recover를 이용하여 프로그램을 계속 실행시키려면, 많은 주의를 기울여야 한다.
일반적으로 panic이 발생한 상황에서 프로그램을 계속 실행해야 하는 경우는 드물다.
가령 메모리나 디스크 공간 부족 등의 이유로 panic이 발생한 경우,
recover로 현 상태를 기록하고 os.Exit(1)로 프로그램을 종료하는 게 최선의 방법이다.

프로그래밍 에러로 인해 panic이 발생한 경우라면 프로그램을 계속 실행시킬 수는 있겠으나, 동일한 panic을 다시 겪게 될 가능성이 높다.
따라서 위 예제의 경우에서라면 division by zero로 인해 panic이 발생하지 않게끔,
먼저 파라미터 값이 0인지 확인하여 맞다면 `error`를 리턴하는 것이 좋을 것이다.

panic과 recover에 의존하는 것을 권장하지 않는 이유는, recover의 한정적인 기능 때문이다.
어떤 종류든 panic이 발생하면 recover로 메시지를 출력하고 프로그램을 계속 실행시킬 수 있지만, 특정 종류의 panic만 처리할 수는 없다.
Go에서는 모든 것을 처리할 수 있는 짧은 코드보다는, 가능한 에러 조건들을 명시하는 코드를 더 이상적이라고 생각한다.

`recover`가 권장되는 한 가지 상황이 있다.
서드 파티 라이브러리를 작성하는 경우인데, 이 경우 panic이 API 밖으로 벗어나면 안되기 때문이다.
따라서 함수에서 `panic`을 처리하고, 이를 `error`로 변경하여 리턴하는 코드를 작성해 주어야 한다.

<br><br>

### Getting a Stack Trace from an Error

`panic`과 `recover`는 Stack Trace를 제공하지 않는다.
기본적으로는 Error Wrapping을 통해 직접 Error Stack을 쌓아나가는 방식을 택할 수 있지만,
이러한 [Error Stack을 자동으로 생성해주는 서드파티 라이브러리](https://github.com/pkg/errors)가 존재한다.
이 라이브러리는 stack trace를 할 수 있게 해주는 Error Wrapping 함수를 제공하는 것 같다.
위 라이브러리를 임포트하여 `fmt.Printf()` 함수에서 서식 문자로 `%+v`를 사용하면 stack trace를 확인할 수 있을 것이다.

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
