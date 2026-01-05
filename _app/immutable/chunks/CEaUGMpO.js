import"./Bzak7iHL.js";import"./69_IOA4Y.js";import{s,f as _,c as a,r as t,n as C}from"./CVx5jffJ.js";import{f as u,a as c}from"./2cXyNWGb.js";import{h as e}from"./D6IIVJDJ.js";import{C as k}from"./BQl3WXse.js";import{I as S}from"./BVXqo7x9.js";const P={title:"Timer와 Ticker",date:"2023-09-14T00:00:00.000Z",excerpt:"Go에서 일정 시간이 지난 이후 또는 주기적으로 특정 작업을 수행하려면 어떻게 해야 할지 알아보자.",categories:["Golang","Concurrency in Go"],coverImage:"/post_img/Go/Concurrency in Go/cover.png",coverWidth:16,coverHeight:9,indexed:!1,exposed:!0},{title:B,date:E,excerpt:J,categories:O,coverImage:Z,coverWidth:j,coverHeight:q,indexed:z,exposed:D}=P;var $=u('<pre class="language-go"><!></pre>'),G=u('<pre class="language-go"><!></pre>'),H=u('<pre class="language-go"><!></pre>'),N=u(`<h2 id="timer"><a aria-hidden="true" tabindex="-1" href="#timer"><span class="icon icon-link"></span></a>Timer</h2> <p>Go에서 일정 시간이 지난 이후 특정 작업을 수행하려면 <code>time.Timer</code>를 사용하면 된다. <code>time.Timer</code>는 지정된 시간만큼 대기한 후 채널에 값을 전송한다.
이 때 채널에 전송되는 값은 메시지가 전송된 시간이며, 수신된 시간이 아님을 염두에 두어야 한다.</p> <p>타이머는 주로 작업의 타임아웃을 설정할 때 사용한다. 타임아웃 자체는 <code>context.Context</code>를 사용하여 구현하는 것이 좋지만, 타이머를 사용하는 방법도 알아두면 좋다.</p> <!> <p><code>time.NewTimer</code> 대신 <code>time.After</code>를 사용할 수도 있다. 사용법은 거의 동일하므로 예제는 생략해도 될 듯 하다.
또한 이와 같은 예제는 <code>time.AfterFunc</code>을 사용하여 더 간단하게 작성할 수 있다.</p> <pre class="language-go"><!></pre> <br/> <p>어떤 작업이 타임아웃을 초과하기 이전에 정상적으로 완료되었다면 타이머를 중지해야 한다.
타이머를 중지하려면 <code>Stop</code> 메서드를 호출하면 된다.
타이머가 정상적으로 중지되었다면 <code>Stop</code> 메서드는 <code>true</code>를 반환하고, 이미 중지되었다면 <code>false</code>를 반환한다.</p> <p>타이머를 재설정하려면 <code>Reset</code> 메서드를 호출하면 된다.</p> <ul><li><p><code>AfterFunc</code>로 생성된 타이머의 경우 아직 호출되지 않았다면 호출될 시간을 재설정하며, 이미 호출되었다면 한 번 더 호출될 시간이 설정된다. 전자의 경우 <code>true</code>가, 후자의 경우 <code>false</code>가 반환된다.</p></li> <li><p><code>NewTimer</code>로 생성된 타이머의 경우, <code>Reset</code> 메서드를 사용할 때 동시에 해당 타이머 채널으로부터 값을 수신하고 있는 고루틴이 있어선 안된다. 아래 예제가 <code>Reset</code> 메서드를 사용할 때의 올바른 사용법이다.</p> <pre class="language-go"><!></pre></li></ul> <br/><br/> <h2 id="tickers"><a aria-hidden="true" tabindex="-1" href="#tickers"><span class="icon icon-link"></span></a>Tickers</h2> <hr/> <p><code>time.Ticker</code>는 지정된 시간 간격으로 특정 작업을 수행하려고 할 때 사용한다. <code>time.Ticker</code> 또한 마찬가지로 <code>time.NewTicker</code>를 사용하여 생성하며, 명시적으로 중지하기 전까지 주기적으로 채널에 값을 전송한다.
다음의 예제는 3초간 주기적으로 프로그램의 경과 시간을 출력하는 예제이다.</p> <!> <p>Ticker의 간격보다 작업 시간이 길어져서 Ticker가 보내는 신호를 놓치는 경우가 생길 수 있다.
만약 Ticker 채널에서 다음 값이 발생하기 전에 값을 읽었다면 단순이 약간 늦게 읽었을 뿐이라 큰 차이가 없다.
반면 Ticker 채널에서 값을 읽지 못해 다음 값이 이미 발생하는 경우가 있을 수 있다. 이 경우 Ticker 채널에서 값을 읽으면 쌓여있는 값을 와다닥 다 읽는 게 아니라, 놓친 값들은 모두 버려지고 최신 값 하나만 읽게 된다.</p> <p>Ticker를 모두 사용했다면 반드시 <code>Stop()</code> 메서드를 호출하여 중지해야 한다. Timer와 달리 Ticker는 자동으로 중지되지 않기 때문에 가비지 컬렉터가 수거해가지 못한다. <code>defer ticker.Stop()</code>를 통해 Ticker를 중지하는 것을 잊지 않도록 하자.</p> <h3 id="heartbeats"><a aria-hidden="true" tabindex="-1" href="#heartbeats"><span class="icon icon-link"></span></a>Heartbeats</h3> <p>Long-running 작업을 수행하는 경우, 작업이 정상적으로 수행되고 있는지 주기적으로 모니터링해야 할 필요가 있다.
이 경우 Long-running 함수가 모니터 함수에 Heartbeat를 보내어 작업이 정상적으로 수행되고 있는지 알려줄 수 있다.
모니터 함수는 일정 시간동안 Heartbeat를 받지 못하면 Long-running 함수가 정상적으로 수행되지 않고 있다고 판단할 수 있다.</p> <!> <p>위 코드에서 <code>monitor</code> 함수는 2회 연속으로 Tick에서 신호를 받는 동안 <code>longRunningFunction</code>으로부터 Heartbeat를 받지 못하면 문제가 생긴 것으로 판단하고 <code>longRunningFunction</code>을 종료한다.
이 예제에서 <code>heartbeat</code> 채널은 단순히 <code>struct&#123;&#125;</code> 타입이지만 다양한 메타데이터를 포함할 수 있다.</p> <br/><br/> <h2 id="references"><a aria-hidden="true" tabindex="-1" href="#references"><span class="icon icon-link"></span></a>References</h2> <hr/> <center><p>[</p> <!> ](https://learning.oreilly.com/library/view/effective-concurrency-in/9781804619070/)<br/> [Burak Serdar, 『Effective Concurrency in Go』, Packt Publishing](https://learning.oreilly.com/library/view/effective-concurrency-in/9781804619070/)</center>`,1);function K(b){var r=N(),d=s(_(r),6);k(d,{children:(p,h)=>{var n=$(),o=a(n);e(o,()=>`<code class="language-go"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	timer <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">NewTimer</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Millisecond<span class="token punctuation">)</span>
	timeout <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token operator">&lt;-</span>timer<span class="token punctuation">.</span>C
		<span class="token function">close</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Timer expired"</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	x <span class="token operator">:=</span> <span class="token number">0</span>
	done <span class="token operator">:=</span> <span class="token boolean">false</span>
	<span class="token keyword">for</span> <span class="token operator">!</span>done <span class="token punctuation">&#123;</span>
		<span class="token keyword">select</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>timeout<span class="token punctuation">:</span>
			done <span class="token operator">=</span> <span class="token boolean">true</span>
		<span class="token keyword">default</span><span class="token punctuation">:</span>
		<span class="token punctuation">&#125;</span>

		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Millisecond<span class="token punctuation">)</span>
		x<span class="token operator">++</span>
	<span class="token punctuation">&#125;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"x ="</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`),t(n),c(p,n)},$$slots:{default:!0}});var l=s(d,4),v=a(l);e(v,()=>`<code class="language-go"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
timeout <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

    time<span class="token punctuation">.</span><span class="token function">AfterFunc</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Millisecond<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    	<span class="token function">close</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>
    	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Timer expired"</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token punctuation">&#125;</span></code>`),t(l);var i=s(l,8),m=s(a(i),2),f=s(a(m),2),T=a(f);e(T,()=>`<code class="language-go"><span class="token keyword">select</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">case</span> <span class="token operator">&lt;-</span>timer<span class="token punctuation">.</span>C<span class="token punctuation">:</span>
		<span class="token comment">// timeout</span>
	<span class="token keyword">case</span> d <span class="token operator">:=</span> <span class="token operator">&lt;-</span>resetTimer<span class="token punctuation">:</span>
		<span class="token keyword">if</span> <span class="token operator">!</span>timer<span class="token punctuation">.</span><span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
			<span class="token operator">&lt;-</span>timer<span class="token punctuation">.</span>C
		<span class="token punctuation">&#125;</span>
		timer<span class="token punctuation">.</span><span class="token function">Reset</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`),t(f),t(m),t(i);var g=s(i,11);k(g,{children:(p,h)=>{var n=G(),o=a(n);e(o,()=>`<code class="language-go"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	start <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	ticker <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">NewTicker</span><span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Millisecond<span class="token punctuation">)</span>
	<span class="token keyword">defer</span> ticker<span class="token punctuation">.</span><span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	done <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">After</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>

	<span class="token keyword">for</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">select</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>ticker<span class="token punctuation">.</span>C<span class="token punctuation">:</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"tick:"</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span><span class="token function">Since</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Milliseconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">&#125;</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`),t(n),c(p,n)},$$slots:{default:!0}});var w=s(g,10);k(w,{children:(p,h)=>{var n=H(),o=a(n);e(o,()=>`<code class="language-go"><span class="token keyword">func</span> <span class="token function">monitor</span><span class="token punctuation">(</span>heartbeat <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span> done <span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span> tick <span class="token operator">&lt;-</span><span class="token keyword">chan</span> time<span class="token punctuation">.</span>Time<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">var</span> lastHeartbeat time<span class="token punctuation">.</span>Time
	<span class="token keyword">var</span> numTicks <span class="token builtin">int</span>

	<span class="token keyword">for</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">select</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>tick<span class="token punctuation">:</span>
			numTicks<span class="token operator">++</span>
			<span class="token keyword">if</span> numTicks <span class="token operator">>=</span> <span class="token number">2</span> <span class="token punctuation">&#123;</span>
				fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"No progress since %s, exiting&#92;n"</span><span class="token punctuation">,</span> lastHeartbeat<span class="token punctuation">)</span>
				<span class="token function">close</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>
				<span class="token keyword">return</span>
			<span class="token punctuation">&#125;</span>

		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>heartbeat<span class="token punctuation">:</span>
			lastHeartbeat <span class="token operator">=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			numTicks <span class="token operator">=</span> <span class="token number">0</span>
		<span class="token punctuation">&#125;</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token function">longRunningFunction</span><span class="token punctuation">(</span>heartbeat <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token keyword">struct</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span> done <span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">select</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
			<span class="token keyword">return</span>
		<span class="token keyword">case</span> heartbeat <span class="token operator">&lt;-</span> <span class="token keyword">struct</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">:</span>
		<span class="token punctuation">&#125;</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Job %d&#92;n"</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">500</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Millisecond<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	<span class="token function">close</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	heartbeat <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>heartbeat<span class="token punctuation">)</span>
	done <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
	tick <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">NewTicker</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
	<span class="token keyword">defer</span> tick<span class="token punctuation">.</span><span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">go</span> <span class="token function">monitor</span><span class="token punctuation">(</span>heartbeat<span class="token punctuation">,</span> done<span class="token punctuation">,</span> tick<span class="token punctuation">.</span>C<span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">longRunningFunction</span><span class="token punctuation">(</span>heartbeat<span class="token punctuation">,</span> done<span class="token punctuation">)</span>

	<span class="token operator">&lt;-</span>done
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Long running function finished"</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`),t(n),c(p,n)},$$slots:{default:!0}});var y=s(w,11),x=s(a(y),2);S(x,{alt:"Effective Concurrency in Go",src:"https://learning.oreilly.com/covers/urn:orm:book:9781804619070/400w/"}),C(3),t(y),c(b,r)}export{K as default,P as metadata};
