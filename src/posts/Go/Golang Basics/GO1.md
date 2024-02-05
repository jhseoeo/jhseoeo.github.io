---
title: 개발환경설정
date: 2022-07-19
excerpt: Setting up Golang development environment
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

## Installation

---

터미널에서 `sudo apt-get install golang-go`를 통해 Go를 설치할 수는 있지만, 패키지 매니저를 통해 설치된 Go는 최신 버전이 아니다.

최신 버전의 Go를 설치하기 위해서는 [Go 웹페이지](https://go.dev/dl/)에서 설치 파일을 다운받아 설치한다.

```bash
tar -C /usr/local -xzf go1.18.4.linux-amd64.tar.gz
```

위의 버전은 다운로드한 설치 파일의 버전에 맞게 잘 바꿔주도록 하자.

<br>

`bash`를 사용한다면 *.profile*에, `zsh`라면 *.zshrc*에 아래 내용을 추가해준다.

```bash
export GOPATH=$HOME/go
export PATH=$PATH:$GOPATH/bin
```

추가하였다면, `source ~/.profile` 또는 `source ~/.zshrc`를 입력하여 변경된 설정을 적용한다.

<br>

이제 잘 설치되었는지 Go 명령어를 실행해보자.

```bash
go version
```

잘 설치되었다면, 아래와 같은 결과를 확인할 수 있을 것이다

```bash
go version go1.18.4 linux/amd64
```

<br><br>

## Hello world

---

파일명이 `hello.go`인 파일을 생성하여, 아래와 같이 입력한다

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello world!")
}
```

<br>

코드의 모양새는 대충 C/C++과 비슷해 보인다. 중괄호 사용하고, 메인함수 있고, 등등
이후 아래 명령어를 통해 방금 생성한 _hello.go_ 파일을 실행해보자.

```bash
go run hello.go
```

<br>

Go에서는 파일을 빌드할 수도 있다. 아래 명령어를 통해 _hello.go_ 파일을 빌드해보자.

```bash
go build hello.go
```

아마 윈도우라면 *hello.exe*가, 리눅스라면 _hello_ 파일이 생성되었을 것이다. (`source hello`를 입력하여 실행할 수 있다.)
`-o` 플래그를 통해 빌드로 생성될 실행 파일의 이름 및 경로를 아래와 같이 설정해줄 수 있다.

```bash
go build -o hello_world hello.go
```

<br><br>

## Installing third-party libraries

---

`go install` 명령어를 통해 써드 파티 라이브러리를 설치해보자.

```bash
go install github.com/rakyll/hey@latest
```

`go install` 명령어는 저장소의 주소를 인자로 받으며, @ 뒤에 다운로드할 버전을 명시할 수 있다. `latest`는 최신 버전이라는 뜻.

<br>

설치한 `hey` 라이브러리를 사용해보자

```bash
hey https://jhseoeo.github.io
```

실행 결과를 보면 알 수 있다시피, 대충 `curl` 비슷한 http 서버 테스트하는 용도의 라이브러리이다.

<br><br>

## Formatting codes

---

Go에는 표준 포맷(Standard format)이 존재한다. `go fmt` 명령어로 표준 포맷에 맞게 코드를 포맷할 수 있다. 아래 명령어를 입력하면 현재 디렉토리 내의 모든 _.go_ 파일들을 포매팅할 수 있다.

```bash
go fmt ./..
```

<br>

보다 향상된 기능의 `goimport` 모듈이 존재하는데, 아마 불필요하게 import된 라이브러리들을 관리해주는 등의 기능을 추가로 제공해주는 것으로 보인다.

`go install golang.org/x/tools/cmd/goimports@latest`로 설치한 후, 아래 명령어를 통해 실행한다.

```bash
goimports -l -w .
```

`-l` 플래그는 포맷된 내용을 콘솔에 출력하도록 하며, `-w` 플래그는 수정된 내용이 그 파일에 그대로 적용되도록 (추가로 파일이 생성되지 않도록) 한다.

<br><br>

## Linting and Vetting

---

`golint`는 현재 deprecated된 도구이지만, 문법적인 오류를 잡아주는 역할을 한다.

```bash
go install golang.org/x/lint/golint@latest
```

위 명령어로 설치 후, 아래 명령어로 실행한다.

```bash
golint ./..
```

<br>

`go vet` 명령어는 사용되지 않은 변수나, 함수 인자의 잘못된 전달 등의 오류를 잡아준다.

```bash
go vet ./..
```

<br>

위 두 가지 명령어를 동시에 실행하여 주는 써드 파티 도구가 존재한다. [golingci-lint](https://golangci-lint.run/usage/install/)라는 것인데, 필요하다면 설치해서 써보도록 하자.

<br><br>

## VSCode

---

본인은 개발환경을 VSCode로 잡았는데, 당연히 Go 확장을 설치해주었다.

<Image alt="PIC" src="/post_img/Go/Golang_basics/GO1/1.PNG"/>

<br>

이외에도, *setting.json*을 열어 아래 설정들을 추가해주었다.

```json
"go.lintOnSave": "file",
"go.vetOnSave": "package",
"[go]": {
    "editor.insertSpaces": true,
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "golang.go"
}
```

이와 같이 설정하면, `Ctrl + S`를 눌러 저장할 때마다 자동으로 `fmt`, `lint`, `vet`을 실행해주기 때문에 엄청 편리하다.

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
