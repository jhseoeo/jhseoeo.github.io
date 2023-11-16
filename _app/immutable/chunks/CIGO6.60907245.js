import{S as vt,i as ht,s as Pt,k as o,q as i,a as k,y as v,l as e,m as l,h as s,r as f,c as r,z as h,n as w,U as Ct,b as t,E as c,A as P,g as C,d as R,B as T,M as X}from"./index.d78780bf.js";import{H as Rt}from"./Highlight.1019e7a6.js";import{C as V}from"./CodeBlockWrapper.eeb7c0c0.js";function Tt($){let p;return{c(){p=i("에러를 무시해서는 안 된다")},l(y){p=f(y,"에러를 무시해서는 안 된다")},m(y,u){t(y,p,u)},d(y){y&&s(p)}}}function Ht($){let p,y=`<code class="language-go"><span class="token keyword">type</span> Result1 <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
    Result ResultType1
    Error err
<span class="token punctuation">&#125;</span>

<span class="token keyword">type</span> Result2 <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
    Result ResultType2
    Error err
<span class="token punctuation">&#125;</span>

<span class="token operator">...</span>

result1Ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> Result1<span class="token punctuation">)</span>
<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    result<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">handleRequest1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    result1Ch <span class="token operator">&lt;-</span> Result1<span class="token punctuation">&#123;</span>Result<span class="token punctuation">:</span> result<span class="token punctuation">,</span> Error<span class="token punctuation">:</span> err<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

result2Ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> Result2<span class="token punctuation">)</span>
<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    result<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">handleRequest2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    result2Ch <span class="token operator">&lt;-</span> Result2<span class="token punctuation">&#123;</span>Result<span class="token punctuation">:</span> result<span class="token punctuation">,</span> Error<span class="token punctuation">:</span> err<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

result1 <span class="token operator">:=</span> <span class="token operator">&lt;-</span>result1Ch
result2 <span class="token operator">:=</span> <span class="token operator">&lt;-</span>result2Ch

<span class="token keyword">if</span> result1<span class="token punctuation">.</span>Error <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
    <span class="token comment">// handle error</span>
<span class="token punctuation">&#125;</span>
<span class="token keyword">if</span> result2<span class="token punctuation">.</span>Error <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
    <span class="token comment">// handle error</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){p=o("pre"),this.h()},l(u){p=e(u,"PRE",{class:!0});var d=l(p);d.forEach(s),this.h()},h(){w(p,"class","language-go")},m(u,d){t(u,p,d),p.innerHTML=y},p:X,d(u){u&&s(p)}}}function Mt($){let p,y=`<code class="language-go">result1 <span class="token operator">:=</span> <span class="token operator">&lt;-</span>result1Ch
<span class="token keyword">if</span> result1<span class="token punctuation">.</span>Error <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
    <span class="token comment">// handle error</span>
    <span class="token keyword">return</span> result1<span class="token punctuation">.</span>Error
<span class="token punctuation">&#125;</span>
result2 <span class="token operator">:=</span> <span class="token operator">&lt;-</span>result2Ch <span class="token comment">// 이 채널에서 값을 읽지 않으므로 고루틴 누수 발생</span></code>`;return{c(){p=o("pre"),this.h()},l(u){p=e(u,"PRE",{class:!0});var d=l(p);d.forEach(s),this.h()},h(){w(p,"class","language-go")},m(u,d){t(u,p,d),p.innerHTML=y},p:X,d(u){u&&s(p)}}}function St($){let p,y=`<code class="language-go">	resultCh1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> Result1<span class="token punctuation">)</span>
	resultCh2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> Result2<span class="token punctuation">)</span>
	canceled <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
	cancelCh <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>cancelCh<span class="token punctuation">)</span>

	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		once <span class="token operator">:=</span> sync<span class="token punctuation">.</span>Once<span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span>
		<span class="token keyword">for</span> <span class="token keyword">range</span> cancelCh <span class="token punctuation">&#123;</span>
			once<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
				<span class="token function">close</span><span class="token punctuation">(</span>canceled<span class="token punctuation">)</span>
			<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
		<span class="token punctuation">&#125;</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		result<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">compute</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
			cancelCh <span class="token operator">&lt;-</span> <span class="token keyword">struct</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span>
			resultCh1 <span class="token operator">&lt;-</span> Result1<span class="token punctuation">&#123;</span>Error<span class="token punctuation">:</span> err<span class="token punctuation">&#125;</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">&#125;</span>

		<span class="token keyword">select</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>canceled<span class="token punctuation">:</span>
			<span class="token function">close</span><span class="token punctuation">(</span>resultCh1<span class="token punctuation">)</span>
			<span class="token keyword">return</span>
		<span class="token keyword">default</span><span class="token punctuation">:</span>
		<span class="token punctuation">&#125;</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token comment">// same as above</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    result1<span class="token punctuation">,</span> ok1 <span class="token operator">:=</span> <span class="token operator">&lt;-</span>resultCh1
    result2<span class="token punctuation">,</span> ok2 <span class="token operator">:=</span> <span class="token operator">&lt;-</span>resultCh2

    <span class="token keyword">if</span> <span class="token operator">!</span>ok1 <span class="token operator">||</span> <span class="token operator">!</span>ok2 <span class="token punctuation">&#123;</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"canceled"</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>result1<span class="token punctuation">.</span>Result<span class="token punctuation">,</span> result1<span class="token punctuation">.</span>Error<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>result2<span class="token punctuation">.</span>Result<span class="token punctuation">,</span> result2<span class="token punctuation">.</span>Error<span class="token punctuation">)</span></code>`;return{c(){p=o("pre"),this.h()},l(u){p=e(u,"PRE",{class:!0});var d=l(p);d.forEach(s),this.h()},h(){w(p,"class","language-go")},m(u,d){t(u,p,d),p.innerHTML=y},p:X,d(u){u&&s(p)}}}function Wt($){let p,y=`<code class="language-go">	errCh <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>errCh<span class="token punctuation">)</span>
	canceled <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

	errs <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">error</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		once <span class="token operator">:=</span> sync<span class="token punctuation">.</span>Once<span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span>
		<span class="token keyword">for</span> err <span class="token operator">:=</span> <span class="token keyword">range</span> errCh <span class="token punctuation">&#123;</span>
			errs <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>errs<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
			once<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
				<span class="token function">close</span><span class="token punctuation">(</span>canceled<span class="token punctuation">)</span>
			<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
		<span class="token punctuation">&#125;</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	resultCh1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> Result1<span class="token punctuation">)</span>
	resultCh2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> Result2<span class="token punctuation">)</span>

	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>resultCh1<span class="token punctuation">)</span>
		result<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">compute</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
			errCh <span class="token operator">&lt;-</span> err
			<span class="token keyword">return</span>
		<span class="token punctuation">&#125;</span>

		<span class="token keyword">select</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>canceled<span class="token punctuation">:</span>
			<span class="token keyword">return</span>
		<span class="token keyword">default</span><span class="token punctuation">:</span>
		<span class="token punctuation">&#125;</span>
		resultCh1 <span class="token operator">&lt;-</span> Result1<span class="token punctuation">&#123;</span>Result<span class="token punctuation">:</span> result<span class="token punctuation">&#125;</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token comment">// same as above</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	result1<span class="token punctuation">,</span> ok1 <span class="token operator">:=</span> <span class="token operator">&lt;-</span>resultCh1
	result2<span class="token punctuation">,</span> ok2 <span class="token operator">:=</span> <span class="token operator">&lt;-</span>resultCh2

	<span class="token keyword">if</span> <span class="token operator">!</span>ok1 <span class="token operator">||</span> <span class="token operator">!</span>ok2 <span class="token punctuation">&#123;</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"canceled"</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>result1<span class="token punctuation">,</span> result2<span class="token punctuation">)</span></code>`;return{c(){p=o("pre"),this.h()},l(u){p=e(u,"PRE",{class:!0});var d=l(p);d.forEach(s),this.h()},h(){w(p,"class","language-go")},m(u,d){t(u,p,d),p.innerHTML=y},p:X,d(u){u&&s(p)}}}function xt($){let p,y=`<code class="language-go">    wg <span class="token operator">:=</span> sync<span class="token punctuation">.</span>WaitGroup<span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span>
	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

	<span class="token keyword">var</span> err1<span class="token punctuation">,</span> err2 <span class="token builtin">error</span>
	resultCh1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> ResultType<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
	resultCh2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> ResultType<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>resultCh1<span class="token punctuation">)</span>
		result<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">compute</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
			err1 <span class="token operator">=</span> err
			<span class="token keyword">return</span>
		<span class="token punctuation">&#125;</span>
		resultCh1 <span class="token operator">&lt;-</span> result
	<span class="token punctuation">&#125;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>resultCh2<span class="token punctuation">)</span>
		result<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">compute</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
			err2 <span class="token operator">=</span> err
			<span class="token keyword">return</span>
		<span class="token punctuation">&#125;</span>
		resultCh2 <span class="token operator">&lt;-</span> result
	<span class="token punctuation">&#125;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err1 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"1:"</span><span class="token punctuation">,</span> err1<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	<span class="token keyword">if</span> err2 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"2:"</span><span class="token punctuation">,</span> err2<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	result1<span class="token punctuation">,</span> ok1 <span class="token operator">:=</span> <span class="token operator">&lt;-</span>resultCh1
	result2<span class="token punctuation">,</span> ok2 <span class="token operator">:=</span> <span class="token operator">&lt;-</span>resultCh2

	<span class="token keyword">if</span> <span class="token operator">!</span>ok1 <span class="token operator">||</span> <span class="token operator">!</span>ok2 <span class="token punctuation">&#123;</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"channel closed"</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>result1<span class="token punctuation">,</span> result2<span class="token punctuation">)</span></code>`;return{c(){p=o("pre"),this.h()},l(u){p=e(u,"PRE",{class:!0});var d=l(p);d.forEach(s),this.h()},h(){w(p,"class","language-go")},m(u,d){t(u,p,d),p.innerHTML=y},p:X,d(u){u&&s(p)}}}function Lt($){let p,y=`<code class="language-go"><span class="token keyword">type</span> Error <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
    Code <span class="token builtin">int</span>
    HttpStatus <span class="token builtin">int</span>
    DiagMsg <span class="token builtin">string</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">type</span> HTTPError <span class="token keyword">interface</span> <span class="token punctuation">&#123;</span>
    <span class="token function">HTTPStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span>
    <span class="token function">HTTPMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>e <span class="token operator">*</span>Error<span class="token punctuation">)</span> <span class="token function">HTTPStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> e<span class="token punctuation">.</span>HttpStatus
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>e <span class="token operator">*</span>Error<span class="token punctuation">)</span> <span class="token function">HTTPMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"%d: %s"</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>Code<span class="token punctuation">,</span> e<span class="token punctuation">.</span>DiagMsg<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token function">WriteError</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    e<span class="token punctuation">,</span> ok <span class="token operator">:=</span> err<span class="token punctuation">.</span><span class="token punctuation">(</span>HTTPError<span class="token punctuation">)</span>
    <span class="token keyword">if</span> ok <span class="token punctuation">&#123;</span>
        http<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">HTTPStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">HTTPMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
        http<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> http<span class="token punctuation">.</span>StatusInternalServerError<span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
</code>`;return{c(){p=o("pre"),this.h()},l(u){p=e(u,"PRE",{class:!0});var d=l(p);d.forEach(s),this.h()},h(){w(p,"class","language-go")},m(u,d){t(u,p,d),p.innerHTML=y},p:X,d(u){u&&s(p)}}}function At($){let p,y=`<code class="language-go"><span class="token keyword">type</span> Handler <span class="token keyword">func</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>h Handler<span class="token punctuation">)</span> <span class="token function">ServeHTTP</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token function">h</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> r<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token function">PanicHandler</span><span class="token punctuation">(</span>next Handler<span class="token punctuation">)</span> Handler <span class="token punctuation">&#123;</span>
	<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
			err <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
				fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
			<span class="token punctuation">&#125;</span>
		<span class="token punctuation">&#125;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token function">next</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> r<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	handler <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">"Panic!"</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	http<span class="token punctuation">.</span><span class="token function">Handle</span><span class="token punctuation">(</span><span class="token string">"/path"</span><span class="token punctuation">,</span> <span class="token function">PanicHandler</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">)</span>
	http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">":8080"</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code>`;return{c(){p=o("pre"),this.h()},l(u){p=e(u,"PRE",{class:!0});var d=l(p);d.forEach(s),this.h()},h(){w(p,"class","language-go")},m(u,d){t(u,p,d),p.innerHTML=y},p:X,d(u){u&&s(p)}}}function Bt($){let p,y=`<code class="language-go"><span class="token keyword">func</span> pipelineStage<span class="token punctuation">[</span>IN any<span class="token punctuation">,</span> OUT WithError<span class="token punctuation">]</span><span class="token punctuation">(</span>input <span class="token operator">&lt;-</span><span class="token keyword">chan</span> IN<span class="token punctuation">,</span> output <span class="token keyword">chan</span><span class="token operator">&lt;-</span> WithError<span class="token punctuation">,</span> errCh <span class="token keyword">chan</span><span class="token operator">&lt;-</span><span class="token builtin">error</span><span class="token punctuation">,</span> <span class="token function">process</span><span class="token punctuation">(</span>IN<span class="token punctuation">)</span> OUT<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>output<span class="token punctuation">)</span>
    <span class="token keyword">for</span> data <span class="token operator">:=</span> <span class="token keyword">range</span> output <span class="token punctuation">&#123;</span>
        result<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>res OUT<span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
            <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
                err <span class="token operator">=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
                    <span class="token keyword">return</span>
                <span class="token punctuation">&#125;</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token function">process</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
            errCh <span class="token operator">&lt;-</span> err
            <span class="token keyword">continue</span>
        <span class="token punctuation">&#125;</span>
        output <span class="token operator">&lt;-</span> result
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){p=o("pre"),this.h()},l(u){p=e(u,"PRE",{class:!0});var d=l(p);d.forEach(s),this.h()},h(){w(p,"class","language-go")},m(u,d){t(u,p,d),p.innerHTML=y},p:X,d(u){u&&s(p)}}}function Gt($){let p,y,u,d,Un,an,Xs,Jn,H,Ys,M,gs,zn,Zn,jn,tn,na,Fn,S,Kn,pn,sa,Qn,on,aa,Vn,W,Xn,Yn,gn,m,ta,vn,pa,oa,hn,ea,ca,ns,x,la,Pn,ua,ka,ss,L,ra,Cn,ia,fa,as,A,ts,en,wa,ps,os,es,cn,da,cs,B,ls,us,ks,G,ya,Rn,$a,ma,rs,O,_a,Tn,Ea,ba,is,D,fs,ws,ds,I,q,Hn,va,ys,ln,ha,$s,un,Pa,ms,_,Mn,Ca,Ra,Sn,Ta,Ha,Wn,Ma,_s,N,U,xn,Sa,Es,kn,Wa,bs,J,vs,hs,Ps,Cs,z,Z,Ln,xa,Rs,Ts,Hs,rn,La,Ms,fn,Aa,Ss,wn,Ba,Ws,j,xs,dn,Ga,Ls,Y,Et=`<code class="language-go"><span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span>errCh <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">error</span><span class="token punctuation">,</span> resultCh <span class="token keyword">chan</span><span class="token operator">&lt;-</span> result<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        err <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
            errCh <span class="token operator">&lt;-</span> err
            <span class="token function">close</span><span class="token punctuation">(</span>resultCh<span class="token punctuation">)</span>
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// do something</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">(</span>errCh<span class="token punctuation">,</span> resultCh<span class="token punctuation">)</span></code>`,As,Bs,Gs,yn,Oa,Os,$n,Da,Ds,F,Is,qs,Ns,Us,K,Q,An,Ia,Js,zs,Zs,mn,E,g,_n,Ka,qa,Na,Ua,nn,Ja,js;return M=new Rt({props:{$$slots:{default:[Tt]},$$scope:{ctx:$}}}),S=new V({props:{$$slots:{default:[Ht]},$$scope:{ctx:$}}}),W=new V({props:{$$slots:{default:[Mt]},$$scope:{ctx:$}}}),A=new V({props:{$$slots:{default:[St]},$$scope:{ctx:$}}}),B=new V({props:{$$slots:{default:[Wt]},$$scope:{ctx:$}}}),D=new V({props:{$$slots:{default:[xt]},$$scope:{ctx:$}}}),J=new V({props:{$$slots:{default:[Lt]},$$scope:{ctx:$}}}),j=new V({props:{$$slots:{default:[At]},$$scope:{ctx:$}}}),F=new V({props:{$$slots:{default:[Bt]},$$scope:{ctx:$}}}),{c(){p=o("h2"),y=o("a"),u=o("span"),d=i("에러 핸들링"),Un=k(),an=o("p"),Xs=i(`Go는 try-catch 기반의 에러 처리가 아닌 에러 여부 및 정보를 명시적으로 리턴하는 방식으로 에러를 처리한다.
이러한 방식이 과연 좋은지에 대해서는 의견이 분분하지만, 적어도 동시성 프로그래밍에서는 이러한 방식이 더 적합하다고 한다.
채널을 통해 다른 고루틴으로 에러 인스턴스를 전달하기 더 용이하기 때문이다.`),Jn=k(),H=o("p"),Ys=i(`일반적인 함수에서 허용되지 않은 상황이 발생했을 때 에러를 리턴한다.
하지만 고루틴은 에러를 반환할 수 없다. 따라서 에러를 처리할 수 있는 다른 방법을 찾아야 한다.
가령 여러 고루틴이 서로 다른 작업을 수행하고 있는데 한 고루틴에서 에러가 발생했다면, 다른 고루틴을 종료시키거나 결과를 폐기해야 한다.
또는 여러 고루틴이 실패하여 여러 에러 값을 처리해야 할 때도 있다.
하지만 에러 처리의 대원칙은 `),v(M.$$.fragment),gs=i("는 것이다."),zn=k(),Zn=o("br"),jn=k(),tn=o("p"),na=i(`예제를 통해 살펴보자. 아래 패턴은 여러 작업을 동시에 수행하는 중 에러를 처리하려 할 때 유용한 패턴이다.
또한 Worker Pool 패턴에서도 유용하게 사용된다.`),Fn=k(),v(S.$$.fragment),Kn=k(),pn=o("p"),sa=i("이 예제에서는 결과 채널에서 받은 결과에 에러가 있는지 확인한다."),Qn=k(),on=o("p"),aa=i(`이 때 한 결과에 에러가 있더라도 바로 함수를 종료하지 않고, 모든 채널에서 결과를 읽어와야 한다.
그렇지 않으면 고루틴 누수가 발생할 수 있다. 이를테면 다음과 같은 상황이다.`),Vn=k(),v(W.$$.fragment),Xn=k(),Yn=o("br"),gn=k(),m=o("p"),ta=i(`모든 고루틴이 끝나기까지 기다린 후 에러를 반환하는 경우가 있을 수 있지만, 한 고루틴이 실패하면 다른 고루틴도 종료시켜야 하는 경우도 있다.
이 경우 `),vn=o("code"),pa=i("context.Context"),oa=i("를 사용하는 방법도 있지만 이는 나중에 다루고, 여기서는 "),hn=o("code"),ea=i("canceled"),ca=i(" 채널을 사용하여 고루틴을 종료하는 방법을 알아보자."),ns=k(),x=o("p"),la=i(`채널을 닫으면 해당 채널을 읽고 있는 모든 고루틴에 일회성 브로드캐스팅이 가능하다.
따라서 특정 고루틴에서 에러가 발생하면 `),Pn=o("code"),ua=i("canceled"),ka=i(` 채널을 닫아 다른 고루틴에 에러가 발생했음을 알릴 수 있다.
주기적으로 canceled 채널을 읽는 다른 고루틴은 에러가 발생했음을 알게 되고, 종료할 수 있다.`),ss=k(),L=o("p"),ra=i("다만 이 방법은 잠재적인 문제가 있는데, 바로 오류가 2회 이상 발생하여 이미 닫힌 "),Cn=o("code"),ia=i("canceled"),fa=i(` 채널을 다시 닫는 경우이다.
이 경우 panic이 발생하므로, 취소 채널을 닫는 대신 취소 채널을 단 한번만 닫을 수 있게끔 별도의 고루틴을 두어야 한다.`),as=k(),v(A.$$.fragment),ts=k(),en=o("p"),wa=i("1번 고루틴이 실패하면 2번 고루틴도 종료될것이며, 그 반대도 마찬가지이다."),ps=k(),os=o("br"),es=k(),cn=o("p"),da=i("취소 채널 대신 오류 채널을 사용하는 방법도 있다."),cs=k(),v(B.$$.fragment),ls=k(),us=o("br"),ks=k(),G=o("p"),ya=i(`또 다른 방법은 각 고루틴의 스코프에서 전용 에러 변수를 사용하는 것이다.
이 방법은 `),Rn=o("code"),$a=i("sync.WaitGroup"),ma=i(`을 사용하며, 한 고루틴이 실패하더라도 다른 고루틴을 종료시킬 수 없다.
따라서 고루틴들이 굳이 취소할 필요가 없는 연산을 수행하는 경우 유용하다.`),rs=k(),O=o("p"),_a=i("이 패턴으로 구현하고자 하는 경우 "),Tn=o("code"),Ea=i("Wait()"),ba=i(` 메서드를 호출한 이후 에러를 확인해야 한다.
이는 메모리 모델에 따라 happened-before 관계를 만듦으로써 data race를 방지하기 위함이다.`),is=k(),v(D.$$.fragment),fs=k(),ws=o("br"),ds=k(),I=o("h3"),q=o("a"),Hn=o("span"),va=i("파이프라인"),ys=k(),ln=o("p"),ha=i(`파이프라인은 일반적으로 많은 입력을 받아서 처리하므로, 입력 하나가 실패한다고 해서 파이프라인 전체를 종료시키는 것은 바람직하지 않다.
따라서 오류를 기록해두거나 로깅하고 계속 처리를 진행하는 것이 좋다.
이 때 로그를 보고 오류에 대한 인사이트를 확실히 얻을 수 있게끔, 오류 발생에 대한 다양한 정보와 컨텍스트를 기록해야 한다.`),$s=k(),un=o("p"),Pa=i("다음과 같은 원칙을 따르면 파이프라인에서 오류를 처리하는 것이 더 쉬워진다."),ms=k(),_=o("ul"),Mn=o("li"),Ca=i("파이프라인의 각 단계에서는 에러 기록 함수를 호출한다. 이 함수는 파이프라인의 여러 단계에서 호출될 수 있으므로, 동시 호출을 처리할 수 있어야 한다."),Ra=k(),Sn=o("li"),Ta=i("파이프라인에서 오류가 발생하면, 파일명, 입력, 실패 이유, 해당 단계 등 관련된 정보를 분리된 오류 채널로 전송한다. 해당 채널을 읽는 고루틴은 이 정보를 데이터베이스나 로그에 기록한다."),Ha=k(),Wn=o("li"),Ma=i("오류를 다음 단계로 전달하여, 각 단계에서 입력에 오류가 있었는지 확인하고 이를 파이프라인이 끝날 때까지 전달해야 한다."),_s=k(),N=o("h3"),U=o("a"),xn=o("span"),Sa=i("서버"),Es=k(),kn=o("p"),Wa=i(`일반적으로 서버는 HTTP 또는 gRPC 등의 요청을 받아서 처리하며, 보통 각 요청은 별도의 고루틴에서 처리된다.
따라서 사용자에 대한 응답을 작성하기 위한 에러를 전파하는 것은 요청 처리 스택에 달려있다.
에러 코드나 추가적인 진단 정보를 포함시키기 위해 커스텀 에러 타입을 정의하는 것도 좋은 방법이다.`),bs=k(),v(J.$$.fragment),vs=k(),hs=o("br"),Ps=o("br"),Cs=k(),z=o("h2"),Z=o("a"),Ln=o("span"),xa=i("Panic"),Rs=k(),Ts=o("hr"),Hs=k(),rn=o("p"),La=i(`패닉은 일반적인 오류와 달리 프로그램 자체를 더 이상 실행할 수 없는 상황을 의미하며, 즉시 프로그램을 종료시킨다.
따라서 패닉이 발생하는 경우 최대한 많은 진단 정보와 컨텍스트를 개발자에게 전달해야 한다.`),Ms=k(),fn=o("p"),Aa=i(`동시성 프로그램에서 패닉이 발생하면 해당 고루틴을 실행한 함수까지 거슬러 올라가며 모든 중첩 함수 호출이 종료된다.
이 때 모든 defer 함수가 실행되는데, 이를 통해 panic 상태를 회복하거나 가비지 컬렉터에 수집되지 않은 리소스를 정리할 수 있다.
함수 체인에서 패닉이 처리되지 않으면 프로그램은 종료되므로, 패닉은 반드시 적절히 처리되어야 한다고 할 수 있다.`),Ss=k(),wn=o("p"),Ba=i(`일반적으로 서버 프로그램에서는 별도의 고루틴이 요청을 처리한다.
대부분의 프레임워크에서는 패닉이 발생하면 프로그램 전체를 중지시키는 게 아니라 오류 스택을 출력하고 해당 요청만 실패시킨다.
이 때 프레임워크를 사용하지 않는다면 패닉을 직접 처리해야 한다.`),Ws=k(),v(j.$$.fragment),xs=k(),dn=o("p"),Ga=i("또는 패닉을 발생시킬 수 있는 고루틴이 있고, 그 패닉이 프로그램 전체를 종료시키지 않아야 한다면 패닉을 처리해야 한다."),Ls=k(),Y=o("pre"),As=k(),Bs=o("br"),Gs=k(),yn=o("p"),Oa=i(`파이프라인에서 패닉을 처리하는 것은 보다 방어적이어야 한다.
에러 처리와 마찬가지로 파이프라인은 장시간 실행되는 프로그램이므로, 패닉이 발생하더라도 프로그램을 무작정 종료시키는 것은 좋은 생각이 아니다.
일반적으로 파이프라인 처리가 완료되면 모든 패닉과 에러에 대한 로그를 갖고 있어야 한다.
따라서 패닉 복구가 제대로 이루어졌는지 확실하게 알 수 있어야 한다.`),Os=k(),$n=o("p"),Da=i("다음의 예제는 패닉이 발생하더라도 계속 처리를 진행하는 방법을 보여준다."),Ds=k(),v(F.$$.fragment),Is=k(),qs=o("br"),Ns=o("br"),Us=k(),K=o("h2"),Q=o("a"),An=o("span"),Ia=i("References"),Js=k(),zs=o("hr"),Zs=k(),mn=o("center"),E=o("p"),g=o("a"),_n=o("img"),qa=k(),Na=o("br"),Ua=k(),nn=o("a"),Ja=i("Jon Bodner, 『Learning Go』, O’Reilly Media, Inc."),this.h()},l(n){p=e(n,"H2",{id:!0});var a=l(p);y=e(a,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Bn=l(y);u=e(Bn,"SPAN",{class:!0}),l(u).forEach(s),Bn.forEach(s),d=f(a,"에러 핸들링"),a.forEach(s),Un=r(n),an=e(n,"P",{});var Gn=l(an);Xs=f(Gn,`Go는 try-catch 기반의 에러 처리가 아닌 에러 여부 및 정보를 명시적으로 리턴하는 방식으로 에러를 처리한다.
이러한 방식이 과연 좋은지에 대해서는 의견이 분분하지만, 적어도 동시성 프로그래밍에서는 이러한 방식이 더 적합하다고 한다.
채널을 통해 다른 고루틴으로 에러 인스턴스를 전달하기 더 용이하기 때문이다.`),Gn.forEach(s),Jn=r(n),H=e(n,"P",{});var sn=l(H);Ys=f(sn,`일반적인 함수에서 허용되지 않은 상황이 발생했을 때 에러를 리턴한다.
하지만 고루틴은 에러를 반환할 수 없다. 따라서 에러를 처리할 수 있는 다른 방법을 찾아야 한다.
가령 여러 고루틴이 서로 다른 작업을 수행하고 있는데 한 고루틴에서 에러가 발생했다면, 다른 고루틴을 종료시키거나 결과를 폐기해야 한다.
또는 여러 고루틴이 실패하여 여러 에러 값을 처리해야 할 때도 있다.
하지만 에러 처리의 대원칙은 `),h(M.$$.fragment,sn),gs=f(sn,"는 것이다."),sn.forEach(s),zn=r(n),Zn=e(n,"BR",{}),jn=r(n),tn=e(n,"P",{});var On=l(tn);na=f(On,`예제를 통해 살펴보자. 아래 패턴은 여러 작업을 동시에 수행하는 중 에러를 처리하려 할 때 유용한 패턴이다.
또한 Worker Pool 패턴에서도 유용하게 사용된다.`),On.forEach(s),Fn=r(n),h(S.$$.fragment,n),Kn=r(n),pn=e(n,"P",{});var Dn=l(pn);sa=f(Dn,"이 예제에서는 결과 채널에서 받은 결과에 에러가 있는지 확인한다."),Dn.forEach(s),Qn=r(n),on=e(n,"P",{});var In=l(on);aa=f(In,`이 때 한 결과에 에러가 있더라도 바로 함수를 종료하지 않고, 모든 채널에서 결과를 읽어와야 한다.
그렇지 않으면 고루틴 누수가 발생할 수 있다. 이를테면 다음과 같은 상황이다.`),In.forEach(s),Vn=r(n),h(W.$$.fragment,n),Xn=r(n),Yn=e(n,"BR",{}),gn=r(n),m=e(n,"P",{});var b=l(m);ta=f(b,`모든 고루틴이 끝나기까지 기다린 후 에러를 반환하는 경우가 있을 수 있지만, 한 고루틴이 실패하면 다른 고루틴도 종료시켜야 하는 경우도 있다.
이 경우 `),vn=e(b,"CODE",{});var qn=l(vn);pa=f(qn,"context.Context"),qn.forEach(s),oa=f(b,"를 사용하는 방법도 있지만 이는 나중에 다루고, 여기서는 "),hn=e(b,"CODE",{});var Nn=l(hn);ea=f(Nn,"canceled"),Nn.forEach(s),ca=f(b," 채널을 사용하여 고루틴을 종료하는 방법을 알아보자."),b.forEach(s),ns=r(n),x=e(n,"P",{});var Fs=l(x);la=f(Fs,`채널을 닫으면 해당 채널을 읽고 있는 모든 고루틴에 일회성 브로드캐스팅이 가능하다.
따라서 특정 고루틴에서 에러가 발생하면 `),Pn=e(Fs,"CODE",{});var Qa=l(Pn);ua=f(Qa,"canceled"),Qa.forEach(s),ka=f(Fs,` 채널을 닫아 다른 고루틴에 에러가 발생했음을 알릴 수 있다.
주기적으로 canceled 채널을 읽는 다른 고루틴은 에러가 발생했음을 알게 되고, 종료할 수 있다.`),Fs.forEach(s),ss=r(n),L=e(n,"P",{});var Ks=l(L);ra=f(Ks,"다만 이 방법은 잠재적인 문제가 있는데, 바로 오류가 2회 이상 발생하여 이미 닫힌 "),Cn=e(Ks,"CODE",{});var Va=l(Cn);ia=f(Va,"canceled"),Va.forEach(s),fa=f(Ks,` 채널을 다시 닫는 경우이다.
이 경우 panic이 발생하므로, 취소 채널을 닫는 대신 취소 채널을 단 한번만 닫을 수 있게끔 별도의 고루틴을 두어야 한다.`),Ks.forEach(s),as=r(n),h(A.$$.fragment,n),ts=r(n),en=e(n,"P",{});var Xa=l(en);wa=f(Xa,"1번 고루틴이 실패하면 2번 고루틴도 종료될것이며, 그 반대도 마찬가지이다."),Xa.forEach(s),ps=r(n),os=e(n,"BR",{}),es=r(n),cn=e(n,"P",{});var Ya=l(cn);da=f(Ya,"취소 채널 대신 오류 채널을 사용하는 방법도 있다."),Ya.forEach(s),cs=r(n),h(B.$$.fragment,n),ls=r(n),us=e(n,"BR",{}),ks=r(n),G=e(n,"P",{});var Qs=l(G);ya=f(Qs,`또 다른 방법은 각 고루틴의 스코프에서 전용 에러 변수를 사용하는 것이다.
이 방법은 `),Rn=e(Qs,"CODE",{});var ga=l(Rn);$a=f(ga,"sync.WaitGroup"),ga.forEach(s),ma=f(Qs,`을 사용하며, 한 고루틴이 실패하더라도 다른 고루틴을 종료시킬 수 없다.
따라서 고루틴들이 굳이 취소할 필요가 없는 연산을 수행하는 경우 유용하다.`),Qs.forEach(s),rs=r(n),O=e(n,"P",{});var Vs=l(O);_a=f(Vs,"이 패턴으로 구현하고자 하는 경우 "),Tn=e(Vs,"CODE",{});var nt=l(Tn);Ea=f(nt,"Wait()"),nt.forEach(s),ba=f(Vs,` 메서드를 호출한 이후 에러를 확인해야 한다.
이는 메모리 모델에 따라 happened-before 관계를 만듦으로써 data race를 방지하기 위함이다.`),Vs.forEach(s),is=r(n),h(D.$$.fragment,n),fs=r(n),ws=e(n,"BR",{}),ds=r(n),I=e(n,"H3",{id:!0});var za=l(I);q=e(za,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var st=l(q);Hn=e(st,"SPAN",{class:!0}),l(Hn).forEach(s),st.forEach(s),va=f(za,"파이프라인"),za.forEach(s),ys=r(n),ln=e(n,"P",{});var at=l(ln);ha=f(at,`파이프라인은 일반적으로 많은 입력을 받아서 처리하므로, 입력 하나가 실패한다고 해서 파이프라인 전체를 종료시키는 것은 바람직하지 않다.
따라서 오류를 기록해두거나 로깅하고 계속 처리를 진행하는 것이 좋다.
이 때 로그를 보고 오류에 대한 인사이트를 확실히 얻을 수 있게끔, 오류 발생에 대한 다양한 정보와 컨텍스트를 기록해야 한다.`),at.forEach(s),$s=r(n),un=e(n,"P",{});var tt=l(un);Pa=f(tt,"다음과 같은 원칙을 따르면 파이프라인에서 오류를 처리하는 것이 더 쉬워진다."),tt.forEach(s),ms=r(n),_=e(n,"UL",{});var En=l(_);Mn=e(En,"LI",{});var pt=l(Mn);Ca=f(pt,"파이프라인의 각 단계에서는 에러 기록 함수를 호출한다. 이 함수는 파이프라인의 여러 단계에서 호출될 수 있으므로, 동시 호출을 처리할 수 있어야 한다."),pt.forEach(s),Ra=r(En),Sn=e(En,"LI",{});var ot=l(Sn);Ta=f(ot,"파이프라인에서 오류가 발생하면, 파일명, 입력, 실패 이유, 해당 단계 등 관련된 정보를 분리된 오류 채널로 전송한다. 해당 채널을 읽는 고루틴은 이 정보를 데이터베이스나 로그에 기록한다."),ot.forEach(s),Ha=r(En),Wn=e(En,"LI",{});var et=l(Wn);Ma=f(et,"오류를 다음 단계로 전달하여, 각 단계에서 입력에 오류가 있었는지 확인하고 이를 파이프라인이 끝날 때까지 전달해야 한다."),et.forEach(s),En.forEach(s),_s=r(n),N=e(n,"H3",{id:!0});var Za=l(N);U=e(Za,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ct=l(U);xn=e(ct,"SPAN",{class:!0}),l(xn).forEach(s),ct.forEach(s),Sa=f(Za,"서버"),Za.forEach(s),Es=r(n),kn=e(n,"P",{});var lt=l(kn);Wa=f(lt,`일반적으로 서버는 HTTP 또는 gRPC 등의 요청을 받아서 처리하며, 보통 각 요청은 별도의 고루틴에서 처리된다.
따라서 사용자에 대한 응답을 작성하기 위한 에러를 전파하는 것은 요청 처리 스택에 달려있다.
에러 코드나 추가적인 진단 정보를 포함시키기 위해 커스텀 에러 타입을 정의하는 것도 좋은 방법이다.`),lt.forEach(s),bs=r(n),h(J.$$.fragment,n),vs=r(n),hs=e(n,"BR",{}),Ps=e(n,"BR",{}),Cs=r(n),z=e(n,"H2",{id:!0});var ja=l(z);Z=e(ja,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ut=l(Z);Ln=e(ut,"SPAN",{class:!0}),l(Ln).forEach(s),ut.forEach(s),xa=f(ja,"Panic"),ja.forEach(s),Rs=r(n),Ts=e(n,"HR",{}),Hs=r(n),rn=e(n,"P",{});var kt=l(rn);La=f(kt,`패닉은 일반적인 오류와 달리 프로그램 자체를 더 이상 실행할 수 없는 상황을 의미하며, 즉시 프로그램을 종료시킨다.
따라서 패닉이 발생하는 경우 최대한 많은 진단 정보와 컨텍스트를 개발자에게 전달해야 한다.`),kt.forEach(s),Ms=r(n),fn=e(n,"P",{});var rt=l(fn);Aa=f(rt,`동시성 프로그램에서 패닉이 발생하면 해당 고루틴을 실행한 함수까지 거슬러 올라가며 모든 중첩 함수 호출이 종료된다.
이 때 모든 defer 함수가 실행되는데, 이를 통해 panic 상태를 회복하거나 가비지 컬렉터에 수집되지 않은 리소스를 정리할 수 있다.
함수 체인에서 패닉이 처리되지 않으면 프로그램은 종료되므로, 패닉은 반드시 적절히 처리되어야 한다고 할 수 있다.`),rt.forEach(s),Ss=r(n),wn=e(n,"P",{});var it=l(wn);Ba=f(it,`일반적으로 서버 프로그램에서는 별도의 고루틴이 요청을 처리한다.
대부분의 프레임워크에서는 패닉이 발생하면 프로그램 전체를 중지시키는 게 아니라 오류 스택을 출력하고 해당 요청만 실패시킨다.
이 때 프레임워크를 사용하지 않는다면 패닉을 직접 처리해야 한다.`),it.forEach(s),Ws=r(n),h(j.$$.fragment,n),xs=r(n),dn=e(n,"P",{});var ft=l(dn);Ga=f(ft,"또는 패닉을 발생시킬 수 있는 고루틴이 있고, 그 패닉이 프로그램 전체를 종료시키지 않아야 한다면 패닉을 처리해야 한다."),ft.forEach(s),Ls=r(n),Y=e(n,"PRE",{class:!0});var bt=l(Y);bt.forEach(s),As=r(n),Bs=e(n,"BR",{}),Gs=r(n),yn=e(n,"P",{});var wt=l(yn);Oa=f(wt,`파이프라인에서 패닉을 처리하는 것은 보다 방어적이어야 한다.
에러 처리와 마찬가지로 파이프라인은 장시간 실행되는 프로그램이므로, 패닉이 발생하더라도 프로그램을 무작정 종료시키는 것은 좋은 생각이 아니다.
일반적으로 파이프라인 처리가 완료되면 모든 패닉과 에러에 대한 로그를 갖고 있어야 한다.
따라서 패닉 복구가 제대로 이루어졌는지 확실하게 알 수 있어야 한다.`),wt.forEach(s),Os=r(n),$n=e(n,"P",{});var dt=l($n);Da=f(dt,"다음의 예제는 패닉이 발생하더라도 계속 처리를 진행하는 방법을 보여준다."),dt.forEach(s),Ds=r(n),h(F.$$.fragment,n),Is=r(n),qs=e(n,"BR",{}),Ns=e(n,"BR",{}),Us=r(n),K=e(n,"H2",{id:!0});var Fa=l(K);Q=e(Fa,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var yt=l(Q);An=e(yt,"SPAN",{class:!0}),l(An).forEach(s),yt.forEach(s),Ia=f(Fa,"References"),Fa.forEach(s),Js=r(n),zs=e(n,"HR",{}),Zs=r(n),mn=e(n,"CENTER",{});var $t=l(mn);E=e($t,"P",{});var bn=l(E);g=e(bn,"A",{href:!0,rel:!0});var mt=l(g);_n=e(mt,"IMG",{src:!0,alt:!0}),mt.forEach(s),qa=r(bn),Na=e(bn,"BR",{}),Ua=r(bn),nn=e(bn,"A",{href:!0,rel:!0});var _t=l(nn);Ja=f(_t,"Jon Bodner, 『Learning Go』, O’Reilly Media, Inc."),_t.forEach(s),bn.forEach(s),$t.forEach(s),this.h()},h(){w(u,"class","icon icon-link"),w(y,"aria-hidden","true"),w(y,"tabindex","-1"),w(y,"href","#에러-핸들링"),w(p,"id","에러-핸들링"),w(Hn,"class","icon icon-link"),w(q,"aria-hidden","true"),w(q,"tabindex","-1"),w(q,"href","#파이프라인"),w(I,"id","파이프라인"),w(xn,"class","icon icon-link"),w(U,"aria-hidden","true"),w(U,"tabindex","-1"),w(U,"href","#서버"),w(N,"id","서버"),w(Ln,"class","icon icon-link"),w(Z,"aria-hidden","true"),w(Z,"tabindex","-1"),w(Z,"href","#panic"),w(z,"id","panic"),w(Y,"class","language-go"),w(An,"class","icon icon-link"),w(Q,"aria-hidden","true"),w(Q,"tabindex","-1"),w(Q,"href","#references"),w(K,"id","references"),Ct(_n.src,Ka="https://learning.oreilly.com/covers/urn:orm:book:9781804619070/400w/")||w(_n,"src",Ka),w(_n,"alt","Effective Concurrency in Go"),w(g,"href","https://learning.oreilly.com/library/view/effective-concurrency-in/9781804619070/"),w(g,"rel","nofollow"),w(nn,"href","https://learning.oreilly.com/library/view/effective-concurrency-in/9781804619070/"),w(nn,"rel","nofollow")},m(n,a){t(n,p,a),c(p,y),c(y,u),c(p,d),t(n,Un,a),t(n,an,a),c(an,Xs),t(n,Jn,a),t(n,H,a),c(H,Ys),P(M,H,null),c(H,gs),t(n,zn,a),t(n,Zn,a),t(n,jn,a),t(n,tn,a),c(tn,na),t(n,Fn,a),P(S,n,a),t(n,Kn,a),t(n,pn,a),c(pn,sa),t(n,Qn,a),t(n,on,a),c(on,aa),t(n,Vn,a),P(W,n,a),t(n,Xn,a),t(n,Yn,a),t(n,gn,a),t(n,m,a),c(m,ta),c(m,vn),c(vn,pa),c(m,oa),c(m,hn),c(hn,ea),c(m,ca),t(n,ns,a),t(n,x,a),c(x,la),c(x,Pn),c(Pn,ua),c(x,ka),t(n,ss,a),t(n,L,a),c(L,ra),c(L,Cn),c(Cn,ia),c(L,fa),t(n,as,a),P(A,n,a),t(n,ts,a),t(n,en,a),c(en,wa),t(n,ps,a),t(n,os,a),t(n,es,a),t(n,cn,a),c(cn,da),t(n,cs,a),P(B,n,a),t(n,ls,a),t(n,us,a),t(n,ks,a),t(n,G,a),c(G,ya),c(G,Rn),c(Rn,$a),c(G,ma),t(n,rs,a),t(n,O,a),c(O,_a),c(O,Tn),c(Tn,Ea),c(O,ba),t(n,is,a),P(D,n,a),t(n,fs,a),t(n,ws,a),t(n,ds,a),t(n,I,a),c(I,q),c(q,Hn),c(I,va),t(n,ys,a),t(n,ln,a),c(ln,ha),t(n,$s,a),t(n,un,a),c(un,Pa),t(n,ms,a),t(n,_,a),c(_,Mn),c(Mn,Ca),c(_,Ra),c(_,Sn),c(Sn,Ta),c(_,Ha),c(_,Wn),c(Wn,Ma),t(n,_s,a),t(n,N,a),c(N,U),c(U,xn),c(N,Sa),t(n,Es,a),t(n,kn,a),c(kn,Wa),t(n,bs,a),P(J,n,a),t(n,vs,a),t(n,hs,a),t(n,Ps,a),t(n,Cs,a),t(n,z,a),c(z,Z),c(Z,Ln),c(z,xa),t(n,Rs,a),t(n,Ts,a),t(n,Hs,a),t(n,rn,a),c(rn,La),t(n,Ms,a),t(n,fn,a),c(fn,Aa),t(n,Ss,a),t(n,wn,a),c(wn,Ba),t(n,Ws,a),P(j,n,a),t(n,xs,a),t(n,dn,a),c(dn,Ga),t(n,Ls,a),t(n,Y,a),Y.innerHTML=Et,t(n,As,a),t(n,Bs,a),t(n,Gs,a),t(n,yn,a),c(yn,Oa),t(n,Os,a),t(n,$n,a),c($n,Da),t(n,Ds,a),P(F,n,a),t(n,Is,a),t(n,qs,a),t(n,Ns,a),t(n,Us,a),t(n,K,a),c(K,Q),c(Q,An),c(K,Ia),t(n,Js,a),t(n,zs,a),t(n,Zs,a),t(n,mn,a),c(mn,E),c(E,g),c(g,_n),c(E,qa),c(E,Na),c(E,Ua),c(E,nn),c(nn,Ja),js=!0},p(n,[a]){const Bn={};a&1&&(Bn.$$scope={dirty:a,ctx:n}),M.$set(Bn);const Gn={};a&1&&(Gn.$$scope={dirty:a,ctx:n}),S.$set(Gn);const sn={};a&1&&(sn.$$scope={dirty:a,ctx:n}),W.$set(sn);const On={};a&1&&(On.$$scope={dirty:a,ctx:n}),A.$set(On);const Dn={};a&1&&(Dn.$$scope={dirty:a,ctx:n}),B.$set(Dn);const In={};a&1&&(In.$$scope={dirty:a,ctx:n}),D.$set(In);const b={};a&1&&(b.$$scope={dirty:a,ctx:n}),J.$set(b);const qn={};a&1&&(qn.$$scope={dirty:a,ctx:n}),j.$set(qn);const Nn={};a&1&&(Nn.$$scope={dirty:a,ctx:n}),F.$set(Nn)},i(n){js||(C(M.$$.fragment,n),C(S.$$.fragment,n),C(W.$$.fragment,n),C(A.$$.fragment,n),C(B.$$.fragment,n),C(D.$$.fragment,n),C(J.$$.fragment,n),C(j.$$.fragment,n),C(F.$$.fragment,n),js=!0)},o(n){R(M.$$.fragment,n),R(S.$$.fragment,n),R(W.$$.fragment,n),R(A.$$.fragment,n),R(B.$$.fragment,n),R(D.$$.fragment,n),R(J.$$.fragment,n),R(j.$$.fragment,n),R(F.$$.fragment,n),js=!1},d(n){n&&s(p),n&&s(Un),n&&s(an),n&&s(Jn),n&&s(H),T(M),n&&s(zn),n&&s(Zn),n&&s(jn),n&&s(tn),n&&s(Fn),T(S,n),n&&s(Kn),n&&s(pn),n&&s(Qn),n&&s(on),n&&s(Vn),T(W,n),n&&s(Xn),n&&s(Yn),n&&s(gn),n&&s(m),n&&s(ns),n&&s(x),n&&s(ss),n&&s(L),n&&s(as),T(A,n),n&&s(ts),n&&s(en),n&&s(ps),n&&s(os),n&&s(es),n&&s(cn),n&&s(cs),T(B,n),n&&s(ls),n&&s(us),n&&s(ks),n&&s(G),n&&s(rs),n&&s(O),n&&s(is),T(D,n),n&&s(fs),n&&s(ws),n&&s(ds),n&&s(I),n&&s(ys),n&&s(ln),n&&s($s),n&&s(un),n&&s(ms),n&&s(_),n&&s(_s),n&&s(N),n&&s(Es),n&&s(kn),n&&s(bs),T(J,n),n&&s(vs),n&&s(hs),n&&s(Ps),n&&s(Cs),n&&s(z),n&&s(Rs),n&&s(Ts),n&&s(Hs),n&&s(rn),n&&s(Ms),n&&s(fn),n&&s(Ss),n&&s(wn),n&&s(Ws),T(j,n),n&&s(xs),n&&s(dn),n&&s(Ls),n&&s(Y),n&&s(As),n&&s(Bs),n&&s(Gs),n&&s(yn),n&&s(Os),n&&s($n),n&&s(Ds),T(F,n),n&&s(Is),n&&s(qs),n&&s(Ns),n&&s(Us),n&&s(K),n&&s(Js),n&&s(zs),n&&s(Zs),n&&s(mn)}}}const qt={title:"동시성 프로그램의 에러 핸들링",date:"2023-09-11T00:00:00.000Z",excerpt:"동시성 프로그래밍에서 발생하는 에러 및 panic은 어떻게 핸들링해야 할지 알아보자",categories:["Golang","Concurrency in Go"],coverImage:"/post_img/Go/Concurrency in Go/cover.png",coverWidth:16,coverHeight:9,indexed:!1,exposed:!0};class Nt extends vt{constructor(p){super(),ht(this,p,null,Gt,Pt,{})}}export{Nt as default,qt as metadata};
