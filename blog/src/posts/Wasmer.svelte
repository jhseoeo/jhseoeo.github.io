<script context="module" lang="ts">
  export const metadata = {
    title: 'Wasmer',
    date: '2024-11-26',
    categories: ["Backend","DevOps"],
    coverImage: '/images/Wasmer/c711039222242613.png',
    coverWidth: 16,
    coverHeight: 9,
    excerpt: '',
    indexed: false,
    exposed: true
  };
</script>

<script lang="ts">
  import CodeBlockWrapper from '$lib/components/CodeBlockWrapper.svelte';
</script>

<img src="/images/Wasmer/c711039222242613.png" alt="" class="responsive-image" />

<ul>
<li>와! new container technology</li>
<li>요약: 웹어셈블리 런타임 이거 좋아보이는데 브라우저에서 떼와서 여기저기 쓰자</li>
</ul>
<p></p>

<h2>장점</h2>

<p>이 친구들이 주장하는 장점을 찾아보았는데, 대충 아래 내용</p>

<ul>
<li>cross-language + cross-platform 런타임</li>
<li>근데 이제 빠르고 가벼운</li>
</ul>
<p></p>

<h2>단점</h2>

<ul>
<li>이론상 아무 언어의 코드를 아무 데서나 짤 수 있는 만능짱짱런타임같지만, 아무래도 런타임에 WASM 레이어가 한 겹 추가되는 것일테니 성능이 그렇게까지 좋진 않을거란 생각이 든다. 🤔</li>
<li>또 뭐가 있는지 모르겠어서 GPT를 좀 고문했더니, WASM 런타임 아래는 사실상 샌드박스라 (장점도 있지만) 디버깅이 쉽지 않다고 함</li>
</ul>
<p></p>

<p></p>

<h2>출발</h2>

<img src="/images/Wasmer/d38805d7ce7241ec.png" alt="" class="responsive-image" />

<p>러스트는 처음 건드려봐서 뭐가 뭔지 모르지만 러스트로 간단한 sum 함수를 짜보았다</p>

<CodeBlockWrapper>
  <pre class="language-bash"><code class="language-bash">cargo build --target wasm32-unknown-unknown --release</code></pre>
</CodeBlockWrapper>

<details>
  <summary>src</summary>
  <CodeBlockWrapper>
    <pre class="language-go"><code class="language-go">package main

import (
	"fmt"
	"os"

	"github.com/wasmerio/wasmer-go/wasmer"
)

const lustWasmFileName = "./rust.wasm"

var (
	sumFuncRust     func(...interface&#123;&#125;) (interface&#123;&#125;, error)
	initializedRust bool
)

func init() &#123;
	engine := wasmer.NewEngine()
	store := wasmer.NewStore(engine)
	wasmBytes, err := os.ReadFile(lustWasmFileName)
	if err != nil &#123;
		panic(err)
	&#125;
	module, err := wasmer.NewModule(store, wasmBytes)
	if err != nil &#123;
		panic(err)
	&#125;
	importObject := wasmer.NewImportObject()
	instance, err := wasmer.NewInstance(module, importObject)
	if err != nil &#123;
		panic(err)
	&#125;
	sum, err := instance.Exports.GetFunction("add")
	if err != nil &#123;
		panic(err)
	&#125;
	sumFuncRust = func(args ...interface&#123;&#125;) (interface&#123;&#125;, error) &#123;
		if !initializedRust &#123;
			return nil, fmt.Errorf("not initialized")
		&#125;
		return sum(args...)
	&#125;
	initializedRust = true
&#125;


func getSumRust(a, b int32) int32 &#123;
	iface, err := sumFuncRust(a, b)
	if err != nil &#123;
		panic(err)
	&#125;
	return iface.(int32)
&#125;</code></pre>
  </CodeBlockWrapper>

</details>

<p>이렇게 나온 wasm 바이너리를 적당히 옮겨와서 실행해주었습니다. 3이 잘 나온다.</p>

<CodeBlockWrapper>
  <pre class="language-go"><code class="language-go">fmt.Println(getSumRust(1, 2))</code></pre>
</CodeBlockWrapper>

<p></p>

<h2>벤치마킹</h2>

<ul>
<li>을 할 수가 없다….</li>
<li>호출 횟수가 많아지면 스택오버플로우가 나는 것인지, sigsegv가 떠버린다..</li>
<li>뭔가 싶어 깃헙 가봤더니</li>
</ul>
<img src="/images/Wasmer/ef8ef87ee375185b.png" alt="" class="responsive-image" />

<ul>
<li>그만 알아보자..</li>
</ul>
<p></p>


