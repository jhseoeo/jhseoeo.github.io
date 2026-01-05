---
title: AWS Lambda 함수를 Golang으로 작성할 때 알아두면 좋은 것들
date: '2023-10-23'
excerpt: AWS Lambda Golang으로 함수를 만들어 보며 알게 된 것들
categories:
  - 'AWS Lambda'
  - 'Golang'
coverImage: '/post_img/Cloud/AWS/Lambda_with_Golang/cover.png'
coverWidth: 16
coverHeight: 9
indexed: true
exposed: true
---

<script>
  import Image from '$lib/components/Image.svelte';
</script>

개인프로젝트를 하며 Lambda를 쓰게 되었고, 열심히 공부한 Golang으로 작성하게 되었다. 그 과정에서 겪은 여러 시행착오와 알게 된 것들을 정리해보려고 한다.

## Handler 함수의 signature

---

Lambda 함수를 작성할 때, Handler 함수의 유효한 signature는 몇 가지가 있다.

```go
func ()
func () error
func (TIn) error
func (context.Context) error
func (context.Context, TIn) error
func () (TOut, error)
func (context.Context) (TOut, error)
func (context.Context, TIn) (TOut, error)
```

위 signature는 모두 유효한 형태이다. `func (context.Context, TIn) (TOut, error)`의 형태가 가장 이상적인 형태라고 볼 수 있다.

이 때 `TIn`과 `TOut`은 Lambda 함수의 event 및 response의 타입을 의미하며, 입력 및 출력 값이 알아서 unmarshal 및 marshal 된다.

event로 어떤 데이터가 올지 모르는 경우 `interface{}`로 놓을 수 있다. 이 때는 `map[string]interface{}`로 unmarshal 되는데, 데이터 구조를 대략적으로 확인할 수 있다.
거기다가 ChatGPT한테 golang struct 형태로 바꿔달라 하면 바꿔준다!

<Image alt="사진" src="/post_img/Cloud/AWS/Lambda_with_Golang/1.png"/>

오오 GPT는 신이야

<br>

한편 Lambda 함수의 Invoke 조건을 API Gateway로 한 경우 Response의 데이터타입은 `interface{}`로 놓을 수 없다.
이게 Invoke 조건이 다를 때는 어떤지 잘 모르겠는데, API Gateway로 Invoke할 때는
Response 타입이 `interface{}`이면 Lambda 함수가 실행되지 않는다. 이 때 로그상에 아무런 에러 메시지도 뜨지 않기 때문에 찾기가 힘들다.

나의 경우 Golang이 Polymorphism을 지원하지 않고, 리턴 타입에 제네릭을 끼워넣기도 애매해서 핸들러의 리턴 타입을 `interface{}`로 뒀었는데 갑자기 안됐었다.
이거 때문인 줄도 모르고 한참을 해맸다 ㅂㄷㅂㄷ..

<br><br>

## 코드 중복을 줄이기 위한 패키지 구조

---

API Gateway와 연결된 Lambda 함수의 경우, endpoint 및 method당 한 개의 Lambda 함수를 만드는 것이 일반적이다.
그 외에도 cronjob이나 S3 event 등 여러 용도와 목적으로 Lambda 함수가 만들어지다 보면 Lambda 함수의 개수가 꽤 많아질 수 있다.

이 때 코드를 재활용하지 않고 각 Lambda 함수를 작성하면 코드가 엄청나게 중복된다.
이를 방지하기 위해 코드를 재활용할 수 있는 패키지 구조는 다음과 같다.

```text
.
├── build
├── internal
│   ├── application
│   │   └── ...
│   ├── cmd
│   │   ├── Function-A
│   │   │   ├── main.go
│   │   │   └── main_test.go
│   │   ├── Function-B
│   │   │   ├── main.go
│   │   │   └── main_test.go
│   │   └── Function-C
│   │       ├── main.go
│   │       └── main_test.go
│   ├── domain
│   │   ├── model
│   │   └── service
│   ├── infrastructure
│   │   └── ...
│   └── interface
│       ├── dto
│       │   ├── request
│       │   └── response
│       └── handler
├── scripts
│   ├── deploy.sh
│   └── ...
├── go.mod
├── go.sum
├── .gitignore
└── ...
```

_cmd_ 폴더 외에는 모두 DDD(Domain Driven Design) 패턴의 구조를 따른다.
cmd 폴더 안에는 각 Lambda 함수의 main 함수가 작성되어 있으며, 의존성 주입을 통해 각 Lambda 함수의 동작이 결정되기 때문에 코드 중복을 줄일 수 있다.

아마 다른 마이크로서비스 아키텍처에서도 비슷한 패턴을 사용할 수 있을 것이다.

<br><br>

## 빌드 및 배포

---

Lambda 함수가 많아진다는 것은 빌드 및 배포를 해야 할 대상이 많아진다는 것을 의미한다.
일일이 명령어를 하나씩 입력해가며 빌드 및 배포 과정을 거치는 것은 매우 비효율적이다.
위의 디렉토리 구조를 사용한다고 가정하고, 간단한 쉘 스크립트를 작성하여 빌드 및 배포 과정을 명령어 한 줄로 실행할 수 있도록 하자.

```sh
# 파라미터 체크
if [ $# -ne 1 ]; then
  echo "Usage: $0 <function name>"
  exit 1
fi

# 변수 설정
PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)/.."
FUNCTION_NAME="$1"
LAMBDA_NAME="$FUNCTION_NAME"
BIN_FILE="$PROJECT_DIR/build/$FUNCTION_NAME"
ZIP_FILE="$PROJECT_DIR/build/function-$FUNCTION_NAME.zip"
PROFILE="##프로필##"

# 디렉토리명(함수명) 검사
if [ ! -d "$PROJECT_DIR/internal/cmd/$FUNCTION_NAME" ]; then
  echo "The directory '$FUNCTION_NAME' does not exist."
  return 1
fi

# 빌드
cd "$PROJECT_DIR" || exit 1
rm -f "$BIN_FILE" "$ZIP_FILE"
GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build -o "$PROJECT_DIR/build/$FUNCTION_NAME" -C "$PROJECT_DIR/internal/cmd/$FUNCTION_NAME" "./..."
mv "$BIN_FILE" "$PROJECT_DIR/build/main"
zip -r -j "$ZIP_FILE" "$PROJECT_DIR/build/main"
rm -f "$PROJECT_DIR/build/main"
aws lambda update-function-code \
    --function-name "$LAMBDA_NAME" \
    --zip-file "fileb://$ZIP_FILE" \
    --profile $PROFILE
```

예를 들어 *Function-A*라는 Lambda 함수를 빌드 및 배포하고 싶다면, 다음과 같이 실행하면 된다.

```bash
./scripts/deploy.sh Function-A
```
