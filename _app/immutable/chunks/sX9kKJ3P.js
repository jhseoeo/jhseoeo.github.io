import"./Bzak7iHL.js";import"./69_IOA4Y.js";import{s as n,f as k,c as a,r as t}from"./CVx5jffJ.js";import{f as b,a as q}from"./2cXyNWGb.js";import{h as o}from"./D6IIVJDJ.js";import{I}from"./BVXqo7x9.js";const _={title:"AWS Lambda 함수를 Golang으로 작성할 때 알아두면 좋은 것들",date:"2023-10-23",excerpt:"AWS Lambda Golang으로 함수를 만들어 보며 알게 된 것들",categories:["AWS Lambda","Golang"],coverImage:"/post_img/Cloud/AWS/Lambda_with_Golang/cover.png",coverWidth:16,coverHeight:9,indexed:!0,exposed:!0},{title:O,date:$,excerpt:v,categories:A,coverImage:x,coverWidth:R,coverHeight:F,indexed:P,exposed:D}=_;var h=b(`<p>개인프로젝트를 하며 Lambda를 쓰게 되었고, 열심히 공부한 Golang으로 작성하게 되었다. 그 과정에서 겪은 여러 시행착오와 알게 된 것들을 정리해보려고 한다.</p> <h2 id="handler-함수의-signature"><a aria-hidden="true" tabindex="-1" href="#handler-함수의-signature"><span class="icon icon-link"></span></a>Handler 함수의 signature</h2> <hr/> <p>Lambda 함수를 작성할 때, Handler 함수의 유효한 signature는 몇 가지가 있다.</p> <pre class="language-go"><!></pre> <p>위 signature는 모두 유효한 형태이다. <code>func (context.Context, TIn) (TOut, error)</code>의 형태가 가장 이상적인 형태라고 볼 수 있다.</p> <p>이 때 <code>TIn</code>과 <code>TOut</code>은 Lambda 함수의 event 및 response의 타입을 의미하며, 입력 및 출력 값이 알아서 unmarshal 및 marshal 된다.</p> <p>event로 어떤 데이터가 올지 모르는 경우 <code>interface&#123;&#125;</code>로 놓을 수 있다. 이 때는 <code>map[string]interface&#123;&#125;</code>로 unmarshal 되는데, 데이터 구조를 대략적으로 확인할 수 있다.
거기다가 ChatGPT한테 golang struct 형태로 바꿔달라 하면 바꿔준다!</p> <!> <p>오오 GPT는 신이야</p> <br/> <p>한편 Lambda 함수의 Invoke 조건을 API Gateway로 한 경우 Response의 데이터타입은 <code>interface&#123;&#125;</code>로 놓을 수 없다.
이게 Invoke 조건이 다를 때는 어떤지 잘 모르겠는데, API Gateway로 Invoke할 때는
Response 타입이 <code>interface&#123;&#125;</code>이면 Lambda 함수가 실행되지 않는다. 이 때 로그상에 아무런 에러 메시지도 뜨지 않기 때문에 찾기가 힘들다.</p> <p>나의 경우 Golang이 Polymorphism을 지원하지 않고, 리턴 타입에 제네릭을 끼워넣기도 애매해서 핸들러의 리턴 타입을 <code>interface&#123;&#125;</code>로 뒀었는데 갑자기 안됐었다.
이거 때문인 줄도 모르고 한참을 해맸다 ㅂㄷㅂㄷ..</p> <br/><br/> <h2 id="코드-중복을-줄이기-위한-패키지-구조"><a aria-hidden="true" tabindex="-1" href="#코드-중복을-줄이기-위한-패키지-구조"><span class="icon icon-link"></span></a>코드 중복을 줄이기 위한 패키지 구조</h2> <hr/> <p>API Gateway와 연결된 Lambda 함수의 경우, endpoint 및 method당 한 개의 Lambda 함수를 만드는 것이 일반적이다.
그 외에도 cronjob이나 S3 event 등 여러 용도와 목적으로 Lambda 함수가 만들어지다 보면 Lambda 함수의 개수가 꽤 많아질 수 있다.</p> <p>이 때 코드를 재활용하지 않고 각 Lambda 함수를 작성하면 코드가 엄청나게 중복된다.
이를 방지하기 위해 코드를 재활용할 수 있는 패키지 구조는 다음과 같다.</p> <pre class="language-text"><!></pre> <p><em>cmd</em> 폴더 외에는 모두 DDD(Domain Driven Design) 패턴의 구조를 따른다.
cmd 폴더 안에는 각 Lambda 함수의 main 함수가 작성되어 있으며, 의존성 주입을 통해 각 Lambda 함수의 동작이 결정되기 때문에 코드 중복을 줄일 수 있다.</p> <p>아마 다른 마이크로서비스 아키텍처에서도 비슷한 패턴을 사용할 수 있을 것이다.</p> <br/><br/> <h2 id="빌드-및-배포"><a aria-hidden="true" tabindex="-1" href="#빌드-및-배포"><span class="icon icon-link"></span></a>빌드 및 배포</h2> <hr/> <p>Lambda 함수가 많아진다는 것은 빌드 및 배포를 해야 할 대상이 많아진다는 것을 의미한다.
일일이 명령어를 하나씩 입력해가며 빌드 및 배포 과정을 거치는 것은 매우 비효율적이다.
위의 디렉토리 구조를 사용한다고 가정하고, 간단한 쉘 스크립트를 작성하여 빌드 및 배포 과정을 명령어 한 줄로 실행할 수 있도록 하자.</p> <pre class="language-sh"><!></pre> <p>예를 들어 <em>Function-A</em>라는 Lambda 함수를 빌드 및 배포하고 싶다면, 다음과 같이 실행하면 된다.</p> <pre class="language-bash"><!></pre>`,1);function w(r){var c=h(),s=n(k(c),8),l=a(s);o(l,()=>`<code class="language-go"><span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>TIn<span class="token punctuation">)</span> <span class="token builtin">error</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token builtin">error</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> TIn<span class="token punctuation">)</span> <span class="token builtin">error</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>TOut<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">(</span>TOut<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> TIn<span class="token punctuation">)</span> <span class="token punctuation">(</span>TOut<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span></code>`),t(s);var u=n(s,8);I(u,{alt:"사진",src:"/post_img/Cloud/AWS/Lambda_with_Golang/1.png"});var e=n(u,21),d=a(e);o(d,()=>`<code class="language-text">.
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
└── ...</code>`),t(e);var p=n(e,15),m=a(p);o(m,()=>`<code class="language-sh"># 파라미터 체크
if [ $# -ne 1 ]; then
  echo &quot;Usage: $0 &lt;function name&gt;&quot;
  exit 1
fi

# 변수 설정
PROJECT_DIR=&quot;$(cd &quot;$(dirname &quot;$0&quot;)&quot; &amp;&amp; pwd)/..&quot;
FUNCTION_NAME=&quot;$1&quot;
LAMBDA_NAME=&quot;$FUNCTION_NAME&quot;
BIN_FILE=&quot;$PROJECT_DIR/build/$FUNCTION_NAME&quot;
ZIP_FILE=&quot;$PROJECT_DIR/build/function-$FUNCTION_NAME.zip&quot;
PROFILE=&quot;##프로필##&quot;

# 디렉토리명(함수명) 검사
if [ ! -d &quot;$PROJECT_DIR/internal/cmd/$FUNCTION_NAME&quot; ]; then
  echo &quot;The directory &#39;$FUNCTION_NAME&#39; does not exist.&quot;
  return 1
fi

# 빌드
cd &quot;$PROJECT_DIR&quot; || exit 1
rm -f &quot;$BIN_FILE&quot; &quot;$ZIP_FILE&quot;
GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build -o &quot;$PROJECT_DIR/build/$FUNCTION_NAME&quot; -C &quot;$PROJECT_DIR/internal/cmd/$FUNCTION_NAME&quot; &quot;./...&quot;
mv &quot;$BIN_FILE&quot; &quot;$PROJECT_DIR/build/main&quot;
zip -r -j &quot;$ZIP_FILE&quot; &quot;$PROJECT_DIR/build/main&quot;
rm -f &quot;$PROJECT_DIR/build/main&quot;
aws lambda update-function-code     --function-name &quot;$LAMBDA_NAME&quot;     --zip-file &quot;fileb://$ZIP_FILE&quot;     --profile $PROFILE</code>`),t(p);var i=n(p,4),g=a(i);o(g,()=>'<code class="language-bash">./scripts/deploy.sh Function-A</code>'),t(i),q(r,c)}export{w as default,_ as metadata};
