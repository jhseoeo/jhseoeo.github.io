import"./Bzak7iHL.js";import"./69_IOA4Y.js";import{s as n,f as L,c as s,r as a,n as h}from"./CVx5jffJ.js";import{f as j,a as z}from"./2cXyNWGb.js";import{h as p}from"./D6IIVJDJ.js";import{I as H}from"./BVXqo7x9.js";const J={title:"포인터",date:"2022-08-07T00:00:00.000Z",excerpt:"Pointer",categories:["Golang","Basic Golang"],coverImage:"/post_img/Go/Golang_basics/cover.png",coverWidth:16,coverHeight:9,indexed:!1,exposed:!0},{title:V,date:q,excerpt:D,categories:E,coverImage:K,coverWidth:Q,coverHeight:$,indexed:nn,exposed:sn}=J;var O=j(`<br/> <p>본 글은 Golang을 공부하며 주요 내용이라 생각되는 것들을 기록해둔 자료이며, Ubuntu 20.04 LTS 기준으로 작성되었습니다.</p> <br/><br/> <h2 id="pointer"><a aria-hidden="true" tabindex="-1" href="#pointer"><span class="icon icon-link"></span></a>Pointer</h2> <hr/> <p>놀랍게도 Go에는 포인터가 있다. C++ 공부하며 다신 보기 싫었던 친구인데 다시 보게 되니 감회가 새롭다.
다들 알다시피 포인터는 특정 변수가 저장된 메모리의 주소를 가리키는 변수를 의미한다. C/C++의 포인터와 크게 다르지 않다.</p> <p>포인터 변수는 가리키고자 하는 메모리 주소의 첫 번째 byte address를 저장한다.</p> <pre class="language-go"><!></pre> <p><code>&</code>는 변수의 주소값을 반환하는 연산자이며, <code>*</code>는 indirection 연산자로, 해당 포인터가 가리키는 주소에 저장된 값을 반환한다. <code>*</code>를 통해 메모리 주소에 저장된 값에 접근하는 것을 <strong>dereferencing</strong>이라고 한다.</p> <p>위 코드의 출력 결과는 아래와 같다.</p> <pre class="language-go"><!></pre> <p>위의 <code>pointerZ</code> 변수처럼 포인터 변수를 선언하고 아무런 주소값도 할당하지 않으면 <code>nil</code>이 할당된다. 포인터 변수의 Zero value가 <code>nil</code>인 셈이다.<br/> 만약 주소가 <code>nil</code>인 접근하려고 하면 panic(런타임 에러)이 발생한다.</p> <br/> <p><code>new()</code> 함수는 포인터 변수를 생성하는 built-in 함수이다. 포인터가 가리키는 값은 파라미터로 주어진 타입의 Zero value로 초기화된다.</p> <pre class="language-go"><!></pre> <p>근데 <code>new()</code> 함수는 자주 쓰이지는 않는다고 한다.</p> <br/> <p><code>&</code> 연산자를 통해서 상수나 리터럴의 주소값을 얻을 수는 없다. 이런 애들은 메모리 주소가 따로 존재하지 않기 때문이다.</p> <p>따라서 특정 값을 가진 포인터 변수를 생셩하려면, 먼저 일반 변수를 선언해서 값을 할당한 뒤, 해당 변수의 주소값을 넘겨주어야 한다.</p> <pre class="language-go"><!></pre> <p>이러한 방식이 직관적이기는 하지만 코드의 길이가 쓸데없이 길어진다는 단점이 있다.
그렇다면 <em>helper function</em>이란 것을 만들어서 값을 할당해줄 수 있다.</p> <pre class="language-go"><!></pre> <br/><br/> <h2 id="passing-pointers"><a aria-hidden="true" tabindex="-1" href="#passing-pointers"><span class="icon icon-link"></span></a>Passing Pointers</h2> <hr/> <br/> <h3 id="pass-by-pointer"><a aria-hidden="true" tabindex="-1" href="#pass-by-pointer"><span class="icon icon-link"></span></a>Pass by Pointer</h3> <p>다들 알다시피, struct를 비롯한 원시 타입의 변수를 함수의 파라미터로 넘기면, 함수 안에서 해당 파라미터를 어떻게 수정하든 그 값이 바뀌지 않는다.
Go는 <strong>Call by Value</strong> 기반이기 때문.</p> <pre class="language-go"><!></pre> <br/> <p>다만 이는 파라미터로 넘기는 변수의 타입이 <em>slice</em>이거나 <em>map</em>이면 달라지는데, slice와 map은 <strong>Pass by Pointer</strong>로 넘겨진다.
따라서 파라미터로 받은 함수에서 값을 변경할 수 있다.</p> <pre class="language-go"><!></pre> <br/> <p>파라미터로 넘기는 변수를 포인터로 지정해주면 Pass by Pointer가 된다.
이 경우 <em>dereferencing</em>을 통해 메모리 주소에 직접 접근하여 변수의 값을 변경할 수 있다.
다만 포인터 변수에 새로운 변수의 주소값을 할당한다고 해서 원래의 값이 바뀌지는 않는다(아래 예제의 <code>failedUpdate()</code>함수 참조).</p> <pre class="language-go"><!></pre> <br/> <p>따라서 위에서 보았던 <code>modifySlice()</code> 함수에서, 파라미터로 넘긴 변수가 <code>s = append(s, 10)</code> 라인에 의해 변경되지 않으리라는 것을 알 수 있다.</p> <pre class="language-go"><!></pre> <p>추가적으로, Go 내부적으로 slice는 원소들이 저장되는 메모리 주소에 대한 포인터, <code>cap</code>, <code>len</code>, 이렇게 세 개의 원소로 구성된 struct 구조체라고 볼 수 있다.
따라서 slice가 파라미터로 넘어오면 원본 slice의 cap, len은 복사된 정수로 변경할 수 없는데 반해, 원소들이 저장된 메모리 공간에 대한 변경은 가능한 것이다.</p> <br/><br/> <h3 id="avoid-passing-by-pointer"><a aria-hidden="true" tabindex="-1" href="#avoid-passing-by-pointer"><span class="icon icon-link"></span></a>Avoid Passing by Pointer</h3> <p>일반적으로 구조체 등 데이터를 생성하거나 설정하고자 할 때, 이를 <em>Pass by Pointer</em>로 넘기는 방식은 직관적이지 않다.
경우에 따라 오히려 이를 수행하는데 필요한 자원이 더 많이 소모하게 될 수도 있다.</p> <pre class="language-go"><!></pre> <p>위 예시처럼 <em>Pass by Pointer</em>를 사용하기보단, 그냥 그 값을 반환하는 형식이 시각적으로도 더 좋다.</p> <br/> <p>다만 예외사항이 좀 있다. 이를테면 JSON을 파싱하는 경우, <code>Unmarshal()</code>과 같은 일부 함수들은 포인터 파라미터를 사용하기도 한다.</p> <pre class="language-go"><!></pre> <br/> <p>또는, 반환해야 할(또는 파라미터로 넘겨야 할) 데이터가 메가바이트 단위 이상일 경우, Pass by Pointer를 사용하는 것이 훨씬 빠르다고 한다.</p> <br/><br/> <h2 id="garbage-collector"><a aria-hidden="true" tabindex="-1" href="#garbage-collector"><span class="icon icon-link"></span></a>Garbage Collector</h2> <hr/> <p>Go에는 가비지 콜렉터가 존재한다. 이녀석의 역할은 더 이상 사용되지 않는 메모리 공간을 반환하는 것으로, Go는 메모리 관리를 프로그램 레벨에서 해준다.
다만 가비지 콜렉터가 존재한다고 해도 생각없이 코드를 짜면 가비지 콜렉터의 워크로드가 늘어나 프로그램이 느려질 수 있다.</p> <br/> <pre class="language-go"><!></pre> <p>위 코드는 안좋은 예로, 매 이터레이션마다 <code>r.next_chunk()</code>의 반환값을 받아들이는 <code>data_chunk</code> 변수가 생성된다.
이터레이션이 끝날 때마다 <code>data_chunk</code>에 저장된 값은 필요 없는 메모리 공간이 되고, 가비지 콜렉터가 해야 하는 일이 쌓이게 되는 것이다.</p> <p>아래 예제는 <em>Slice</em>를 <em>Buffer</em>처럼 사용하여, 파일의 데이터를 읽어오는 예제이다.
매 이터레이션마다 변수 <code>data</code>에 값을 불러오고, 변수 <code>data</code>는 전체 이터레이션에서 재사용되므로, 가비지 콜렉터가 해야 할 일이 줄어든다.</p> <pre class="language-go"><!></pre> <br/> <p>Go에서는 기본적으로 <em>Stack</em>에 저장할 수 없는 가변적인 크기의 데이터들은 <em>Heap</em>에 저장되며, <em>Heap</em>은 가비지 콜렉터에 의해 관리된다.
가비지 콜렉터는 어떠한 포인터도 가리키지 않는 데이터(<em>garbage</em>)들을 청소하는 알고리즘이다.
사용가능한 데이터를 찾기 위해 한번에 최대한 많은 데이터를, 가능한한 빨리 찾게끔 디자인되어있기 때문에,
우리가 짠 Go 코드가 <em>garbage</em>를 많이 생성할수록 <em>garbage</em>찾지 못할 확률이 높아지며, <em>garbage</em>를 찾는데 더욱 오래 걸리게 된다.
게다가 보통 포인터가 가리키는 데이터들은 메모리 상에서 흩어져서 저장되기 때문에 찾기가 더 힘들어진다.</p> <p>비록 Go가 Python, Java, Javascript와 같은 여타 언어들에 비해 가비지 콜렉터의 성능이 뛰어난 편이라고는 해도,
가비지 컬렉터가 해야 할 일을 줄여서 코드를 최적화시키는게 당연히 좋을 것이다.</p> <br/><br/> <h2 id="references"><a aria-hidden="true" tabindex="-1" href="#references"><span class="icon icon-link"></span></a>References</h2> <hr/> <center><p>[</p> <!> ](https://learning.oreilly.com/library/view/learning-go/9781492077206/) <br/> [Jon Bodner, 『Learning Go』, O'Reilly Media, Inc.](https://learning.oreilly.com/library/view/learning-go/9781492077206/)</center> <br/><br/>`,1);function an(v){var b=O(),t=n(L(b),15),w=s(t);p(w,()=>`<code class="language-go"><span class="token keyword">var</span> x <span class="token builtin">int32</span> <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">var</span> y <span class="token builtin">bool</span> <span class="token operator">=</span> <span class="token boolean">true</span>

pointerX <span class="token operator">:=</span> <span class="token operator">&amp;</span>x
pointerY <span class="token operator">:=</span> <span class="token operator">&amp;</span>y
<span class="token keyword">var</span> pointerZ <span class="token operator">*</span><span class="token builtin">string</span>

fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>pointerX<span class="token punctuation">,</span> pointerY<span class="token punctuation">,</span> pointerZ<span class="token punctuation">)</span> <span class="token comment">// addresses of variables</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>pointerZ <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>              <span class="token comment">// referencing *pointerZ occurs an runtime error(panics), because pointerZ is nil</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">*</span>pointerX<span class="token punctuation">,</span> <span class="token operator">*</span>pointerY<span class="token punctuation">)</span>         <span class="token comment">// * is indirection operator.</span>
<span class="token operator">*</span>pointerX<span class="token punctuation">,</span> <span class="token operator">*</span>pointerY <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token boolean">false</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token comment">// by changing pointer's values, we can change origin value</span></code>`),a(t);var o=n(t,6),P=s(o);p(P,()=>`<code class="language-go"><span class="token number">0xc0000b8000</span> <span class="token number">0xc0000b8004</span> <span class="token operator">&lt;</span><span class="token boolean">nil</span><span class="token operator">></span>
<span class="token boolean">true</span>
<span class="token number">10</span> <span class="token boolean">true</span>
<span class="token number">8</span> <span class="token boolean">false</span></code>`),a(o);var e=n(o,8),_=s(e);p(_,()=>`<code class="language-go"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>      <span class="token comment">// built-in function &#96;new&#96; creates a pointer variable</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">*</span>a<span class="token punctuation">)</span>       <span class="token comment">// it points zero value of given type</span>
<span class="token operator">*</span>a <span class="token operator">=</span> <span class="token number">2</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">*</span>a<span class="token punctuation">)</span></code>`),a(e);var c=n(e,10),x=s(c);p(x,()=>`<code class="language-go">	x <span class="token operator">:=</span> <span class="token operator">&amp;</span>Foo<span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span>
	<span class="token comment">// z := &amp;"string" // this statement occurs an error</span>
	<span class="token keyword">var</span> y <span class="token builtin">string</span>
	z <span class="token operator">:=</span> <span class="token operator">&amp;</span>y <span class="token comment">// to point to a primitive type, declare a variable first</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> z<span class="token punctuation">)</span></code>`),a(c);var l=n(c,4),G=s(l);p(G,()=>`<code class="language-go"><span class="token keyword">type</span> person <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	FirstName  <span class="token builtin">string</span>
	MiddleName <span class="token operator">*</span><span class="token builtin">string</span>
	LastName   <span class="token builtin">string</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token function">stringp</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span><span class="token builtin">string</span> <span class="token punctuation">&#123;</span>
	<span class="token comment">// helper function that returns address of parameter variable</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>s
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	p <span class="token operator">:=</span> person<span class="token punctuation">&#123;</span>
		FirstName<span class="token punctuation">:</span> <span class="token string">"Pat"</span><span class="token punctuation">,</span>
		<span class="token comment">// MiddleName: "Perry",  // or</span>
		<span class="token comment">// MiddleName: &amp;"Perry", // this lines won't compile</span>
		MiddleName<span class="token punctuation">:</span> <span class="token function">stringp</span><span class="token punctuation">(</span><span class="token string">"Perry"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// helper function turned a constant value into a pointer</span>
		LastName<span class="token punctuation">:</span>   <span class="token string">"Peterson"</span><span class="token punctuation">,</span>
	<span class="token punctuation">&#125;</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`),a(l);var u=n(l,15),F=s(u);p(F,()=>`<code class="language-go"><span class="token keyword">type</span> person <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	name <span class="token builtin">string</span>
	age  <span class="token builtin">int</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token function">modifyFails</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">,</span> s <span class="token builtin">string</span><span class="token punctuation">,</span> p person<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span> <span class="token comment">// all the parameters are passed by value(copied), not referenced or aliased</span>
	i <span class="token operator">*=</span> <span class="token number">2</span>
	s <span class="token operator">=</span> <span class="token string">"goodbye"</span>
	p<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"Bob"</span> <span class="token comment">// even for the struct, cannot change the origin value by modifying parameters.</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	p<span class="token punctuation">,</span> i<span class="token punctuation">,</span> s <span class="token operator">:=</span> person<span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">"hello"</span>
	<span class="token function">modifyFails</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> s<span class="token punctuation">,</span> p<span class="token punctuation">)</span> <span class="token comment">// this invocation of function can't make any change on variables above</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> s<span class="token punctuation">,</span> p<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`),a(u);var i=n(u,6),N=s(i);p(N,()=>`<code class="language-go"><span class="token comment">// slices and maps are passed passed by pointers</span>
<span class="token keyword">func</span> <span class="token function">modifyMap</span><span class="token punctuation">(</span>m <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token comment">// changing map parameters are reflected in the variables passed into the function</span>
	m<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"hello"</span>
	m<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"goodbye"</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token function">modifySlice</span><span class="token punctuation">(</span>s <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token comment">// we can modify any element in the slice, but can't lengthen the slice</span>
	<span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> s <span class="token punctuation">&#123;</span>
		s<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> v <span class="token operator">*</span> <span class="token number">2</span>
	<span class="token punctuation">&#125;</span>
	s <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">// this line actually did not append a value to origin variable</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    i <span class="token operator">:=</span> <span class="token number">20</span>
    <span class="token function">modify</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`),a(i);var r=n(i,6),M=s(r);p(M,()=>`<code class="language-go">
<span class="token keyword">func</span> <span class="token function">update</span><span class="token punctuation">(</span>g <span class="token operator">*</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token operator">*</span>g <span class="token operator">=</span> <span class="token number">10</span> <span class="token comment">// dereferencing => success to change original value</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token function">failedUpdate</span><span class="token punctuation">(</span>g <span class="token operator">*</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	x <span class="token operator">:=</span> <span class="token number">20</span>
	g <span class="token operator">=</span> <span class="token operator">&amp;</span>x <span class="token comment">// where the pointer is pointing at is changed</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">var</span> x <span class="token operator">*</span><span class="token builtin">int</span>
	<span class="token keyword">var</span> y <span class="token builtin">int</span>

	<span class="token comment">// update(x) // this invocation occurs an error. cannot dereference nil</span>
	<span class="token function">update</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>y<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span>

	<span class="token function">failedUpdate</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
	<span class="token function">failedUpdate</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>y<span class="token punctuation">)</span> <span class="token comment">// those two invocations cannot changed x and y's values</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`),a(r);var k=n(r,6),Z=s(k);p(Z,()=>`<code class="language-go"><span class="token keyword">func</span> <span class="token function">modifySlice</span><span class="token punctuation">(</span>s <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token comment">// we can modify any element in the slice, but can't lengthen the slice</span>
	<span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> s <span class="token punctuation">&#123;</span>
		s<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> v <span class="token operator">*</span> <span class="token number">2</span>
	<span class="token punctuation">&#125;</span>
	s <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">// this line actually did not append a value to origin variable</span>
<span class="token punctuation">&#125;</span></code>`),a(k);var d=n(k,11),C=s(d);p(C,()=>`<code class="language-go"><span class="token keyword">type</span> Foo <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	foo <span class="token builtin">int</span>
	bar <span class="token builtin">string</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token function">MakeFoo1</span><span class="token punctuation">(</span>f <span class="token operator">*</span>Foo<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">&#123;</span>
	<span class="token comment">// not +recommended format</span>
	f<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token number">20</span>
	f<span class="token punctuation">.</span>bar <span class="token operator">=</span> <span class="token string">"val"</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// rather than using pointer parameter to pass a value, just return this.</span>
<span class="token keyword">func</span> <span class="token function">MakeFoo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>Foo<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token comment">// recommended format</span>
	f <span class="token operator">:=</span> Foo<span class="token punctuation">&#123;</span>
		foo<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
		bar<span class="token punctuation">:</span> <span class="token string">"val"</span><span class="token punctuation">,</span>
	<span class="token punctuation">&#125;</span>
	<span class="token keyword">return</span> f<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	a <span class="token operator">:=</span> Foo<span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span>
	<span class="token function">MakeFoo1</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">)</span> <span class="token comment">// rather than using this pattern,</span>

	b<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> <span class="token function">MakeFoo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// use this pattern</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`),a(d);var m=n(d,8),S=s(m);p(S,()=>`<code class="language-go">	f <span class="token operator">:=</span> <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
		Name <span class="token builtin">string</span> <span class="token string">&#96;json:"name"&#96;</span>
		Age  <span class="token builtin">int</span>    <span class="token string">&#96;json:"age"&#96;</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span>
	err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&#96;&#123;"name": "Bob", "age": 30&#125;&#96;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>f<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span></code>`),a(m);var g=n(m,17),U=s(g);p(U,()=>`<code class="language-go">r <span class="token operator">:=</span> <span class="token function">open_resource</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
while r<span class="token punctuation">.</span><span class="token function">has_data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	data_chunk <span class="token operator">:=</span> r<span class="token punctuation">.</span><span class="token function">next_chunk</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">process</span><span class="token punctuation">(</span>data_chunk<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
r<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>`),a(g);var f=n(g,6),B=s(f);p(B,()=>`<code class="language-go">file<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">return</span> err
<span class="token punctuation">&#125;</span>
<span class="token keyword">defer</span> file<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// this pattern is good at reducing the garbage collector's workload</span>
data <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token comment">// using slice as a buffer</span>
<span class="token keyword">for</span> <span class="token punctuation">&#123;</span>
	count<span class="token punctuation">,</span> err <span class="token operator">:=</span> file<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> err
	<span class="token punctuation">&#125;</span>
	<span class="token keyword">if</span> count <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span>
	<span class="token punctuation">&#125;</span>
	<span class="token function">process</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token punctuation">:</span>count<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// it passes next block of bytes in to the slice (up to 100)</span>
<span class="token punctuation">&#125;</span></code>`),a(f);var y=n(f,15),I=n(s(y),2);H(I,{alt:"Learning Go Book Cover",src:"https://learning.oreilly.com/covers/urn:orm:book:9781492077206/400w/"}),h(3),a(y),h(3),z(v,b)}export{an as default,J as metadata};
