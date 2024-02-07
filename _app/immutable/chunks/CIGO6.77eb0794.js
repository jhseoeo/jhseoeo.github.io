import{S as mt,i as _t,s as Et,k as o,q as i,a as k,y as b,l as e,m as l,h as s,r as f,c as r,z as v,n as d,b as t,E as c,A as h,g as P,d as C,B as R,M as X}from"./index.d78780bf.js";import{H as bt}from"./Highlight.1019e7a6.js";import{C as V}from"./CodeBlockWrapper.eeb7c0c0.js";import{I as vt}from"./Image.605b14b5.js";function ht($){let p;return{c(){p=i("에러를 무시해서는 안 된다")},l(y){p=f(y,"에러를 무시해서는 안 된다")},m(y,u){t(y,p,u)},d(y){y&&s(p)}}}function Pt($){let p,y=`<code class="language-go"><span class="token keyword">type</span> Result1 <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
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
<span class="token punctuation">&#125;</span></code>`;return{c(){p=o("pre"),this.h()},l(u){p=e(u,"PRE",{class:!0});var w=l(p);w.forEach(s),this.h()},h(){d(p,"class","language-go")},m(u,w){t(u,p,w),p.innerHTML=y},p:X,d(u){u&&s(p)}}}function Ct($){let p,y=`<code class="language-go">result1 <span class="token operator">:=</span> <span class="token operator">&lt;-</span>result1Ch
<span class="token keyword">if</span> result1<span class="token punctuation">.</span>Error <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
    <span class="token comment">// handle error</span>
    <span class="token keyword">return</span> result1<span class="token punctuation">.</span>Error
<span class="token punctuation">&#125;</span>
result2 <span class="token operator">:=</span> <span class="token operator">&lt;-</span>result2Ch <span class="token comment">// 이 채널에서 값을 읽지 않으므로 고루틴 누수 발생</span></code>`;return{c(){p=o("pre"),this.h()},l(u){p=e(u,"PRE",{class:!0});var w=l(p);w.forEach(s),this.h()},h(){d(p,"class","language-go")},m(u,w){t(u,p,w),p.innerHTML=y},p:X,d(u){u&&s(p)}}}function Rt($){let p,y=`<code class="language-go">	resultCh1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> Result1<span class="token punctuation">)</span>
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
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>result2<span class="token punctuation">.</span>Result<span class="token punctuation">,</span> result2<span class="token punctuation">.</span>Error<span class="token punctuation">)</span></code>`;return{c(){p=o("pre"),this.h()},l(u){p=e(u,"PRE",{class:!0});var w=l(p);w.forEach(s),this.h()},h(){d(p,"class","language-go")},m(u,w){t(u,p,w),p.innerHTML=y},p:X,d(u){u&&s(p)}}}function Tt($){let p,y=`<code class="language-go">	errCh <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
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

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>result1<span class="token punctuation">,</span> result2<span class="token punctuation">)</span></code>`;return{c(){p=o("pre"),this.h()},l(u){p=e(u,"PRE",{class:!0});var w=l(p);w.forEach(s),this.h()},h(){d(p,"class","language-go")},m(u,w){t(u,p,w),p.innerHTML=y},p:X,d(u){u&&s(p)}}}function Ht($){let p,y=`<code class="language-go">    wg <span class="token operator">:=</span> sync<span class="token punctuation">.</span>WaitGroup<span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span>
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

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>result1<span class="token punctuation">,</span> result2<span class="token punctuation">)</span></code>`;return{c(){p=o("pre"),this.h()},l(u){p=e(u,"PRE",{class:!0});var w=l(p);w.forEach(s),this.h()},h(){d(p,"class","language-go")},m(u,w){t(u,p,w),p.innerHTML=y},p:X,d(u){u&&s(p)}}}function St($){let p,y=`<code class="language-go"><span class="token keyword">type</span> Error <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
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
</code>`;return{c(){p=o("pre"),this.h()},l(u){p=e(u,"PRE",{class:!0});var w=l(p);w.forEach(s),this.h()},h(){d(p,"class","language-go")},m(u,w){t(u,p,w),p.innerHTML=y},p:X,d(u){u&&s(p)}}}function Wt($){let p,y=`<code class="language-go"><span class="token keyword">type</span> Handler <span class="token keyword">func</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span>

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
</code>`;return{c(){p=o("pre"),this.h()},l(u){p=e(u,"PRE",{class:!0});var w=l(p);w.forEach(s),this.h()},h(){d(p,"class","language-go")},m(u,w){t(u,p,w),p.innerHTML=y},p:X,d(u){u&&s(p)}}}function xt($){let p,y=`<code class="language-go"><span class="token keyword">func</span> pipelineStage<span class="token punctuation">[</span>IN any<span class="token punctuation">,</span> OUT WithError<span class="token punctuation">]</span><span class="token punctuation">(</span>input <span class="token operator">&lt;-</span><span class="token keyword">chan</span> IN<span class="token punctuation">,</span> output <span class="token keyword">chan</span><span class="token operator">&lt;-</span> WithError<span class="token punctuation">,</span> errCh <span class="token keyword">chan</span><span class="token operator">&lt;-</span><span class="token builtin">error</span><span class="token punctuation">,</span> <span class="token function">process</span><span class="token punctuation">(</span>IN<span class="token punctuation">)</span> OUT<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
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
<span class="token punctuation">&#125;</span></code>`;return{c(){p=o("pre"),this.h()},l(u){p=e(u,"PRE",{class:!0});var w=l(p);w.forEach(s),this.h()},h(){d(p,"class","language-go")},m(u,w){t(u,p,w),p.innerHTML=y},p:X,d(u){u&&s(p)}}}function Bt($){let p,y,u,w,Nn,an,Qs,qn,H,Vs,S,Xs,Un,zn,Zn,tn,Ys,jn,W,Fn,pn,gs,Jn,on,na,Kn,x,Qn,Vn,Xn,_,sa,_n,aa,ta,En,pa,oa,Yn,B,ea,bn,ca,la,gn,M,ua,vn,ka,ra,ns,L,ss,en,ia,as,ts,ps,cn,fa,os,A,es,cs,ls,G,wa,hn,da,ya,us,D,$a,Pn,ma,_a,ks,O,rs,is,fs,I,N,Cn,Ea,ws,ln,ba,ds,un,va,ys,E,Rn,ha,Pa,Tn,Ca,Ra,Hn,Ta,$s,q,U,Sn,Ha,ms,kn,Sa,_s,z,Es,bs,vs,hs,Z,j,Wn,Wa,Ps,Cs,Rs,rn,xa,Ts,fn,Ba,Hs,wn,Ma,Ss,F,Ws,dn,La,xs,Y,yt=`<code class="language-go"><span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span>errCh <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">error</span><span class="token punctuation">,</span> resultCh <span class="token keyword">chan</span><span class="token operator">&lt;-</span> result<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        err <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
            errCh <span class="token operator">&lt;-</span> err
            <span class="token function">close</span><span class="token punctuation">(</span>resultCh<span class="token punctuation">)</span>
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// do something</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">(</span>errCh<span class="token punctuation">,</span> resultCh<span class="token punctuation">)</span></code>`,Bs,Ms,Ls,yn,Aa,As,$n,Ga,Gs,J,Ds,Os,Is,Ns,K,Q,xn,Da,qs,Us,zs,m,Bn,Oa,Ia,g,Na,qa,Ua,Zs;return S=new bt({props:{$$slots:{default:[ht]},$$scope:{ctx:$}}}),W=new V({props:{$$slots:{default:[Pt]},$$scope:{ctx:$}}}),x=new V({props:{$$slots:{default:[Ct]},$$scope:{ctx:$}}}),L=new V({props:{$$slots:{default:[Rt]},$$scope:{ctx:$}}}),A=new V({props:{$$slots:{default:[Tt]},$$scope:{ctx:$}}}),O=new V({props:{$$slots:{default:[Ht]},$$scope:{ctx:$}}}),z=new V({props:{$$slots:{default:[St]},$$scope:{ctx:$}}}),F=new V({props:{$$slots:{default:[Wt]},$$scope:{ctx:$}}}),J=new V({props:{$$slots:{default:[xt]},$$scope:{ctx:$}}}),g=new vt({props:{alt:"Effective Concurrency in Go",src:"https://learning.oreilly.com/covers/urn:orm:book:9781804619070/400w/"}}),{c(){p=o("h2"),y=o("a"),u=o("span"),w=i("에러 핸들링"),Nn=k(),an=o("p"),Qs=i(`Go는 try-catch 기반의 에러 처리가 아닌 에러 여부 및 정보를 명시적으로 리턴하는 방식으로 에러를 처리한다.
이러한 방식이 과연 좋은지에 대해서는 의견이 분분하지만, 적어도 동시성 프로그래밍에서는 이러한 방식이 더 적합하다고 한다.
채널을 통해 다른 고루틴으로 에러 인스턴스를 전달하기 더 용이하기 때문이다.`),qn=k(),H=o("p"),Vs=i(`일반적인 함수에서 허용되지 않은 상황이 발생했을 때 에러를 리턴한다.
하지만 고루틴은 에러를 반환할 수 없다. 따라서 에러를 처리할 수 있는 다른 방법을 찾아야 한다.
가령 여러 고루틴이 서로 다른 작업을 수행하고 있는데 한 고루틴에서 에러가 발생했다면, 다른 고루틴을 종료시키거나 결과를 폐기해야 한다.
또는 여러 고루틴이 실패하여 여러 에러 값을 처리해야 할 때도 있다.
하지만 에러 처리의 대원칙은 `),b(S.$$.fragment),Xs=i("는 것이다."),Un=k(),zn=o("br"),Zn=k(),tn=o("p"),Ys=i(`예제를 통해 살펴보자. 아래 패턴은 여러 작업을 동시에 수행하는 중 에러를 처리하려 할 때 유용한 패턴이다.
또한 Worker Pool 패턴에서도 유용하게 사용된다.`),jn=k(),b(W.$$.fragment),Fn=k(),pn=o("p"),gs=i("이 예제에서는 결과 채널에서 받은 결과에 에러가 있는지 확인한다."),Jn=k(),on=o("p"),na=i(`이 때 한 결과에 에러가 있더라도 바로 함수를 종료하지 않고, 모든 채널에서 결과를 읽어와야 한다.
그렇지 않으면 고루틴 누수가 발생할 수 있다. 이를테면 다음과 같은 상황이다.`),Kn=k(),b(x.$$.fragment),Qn=k(),Vn=o("br"),Xn=k(),_=o("p"),sa=i(`모든 고루틴이 끝나기까지 기다린 후 에러를 반환하는 경우가 있을 수 있지만, 한 고루틴이 실패하면 다른 고루틴도 종료시켜야 하는 경우도 있다.
이 경우 `),_n=o("code"),aa=i("context.Context"),ta=i("를 사용하는 방법도 있지만 이는 나중에 다루고, 여기서는 "),En=o("code"),pa=i("canceled"),oa=i(" 채널을 사용하여 고루틴을 종료하는 방법을 알아보자."),Yn=k(),B=o("p"),ea=i(`채널을 닫으면 해당 채널을 읽고 있는 모든 고루틴에 일회성 브로드캐스팅이 가능하다.
따라서 특정 고루틴에서 에러가 발생하면 `),bn=o("code"),ca=i("canceled"),la=i(` 채널을 닫아 다른 고루틴에 에러가 발생했음을 알릴 수 있다.
주기적으로 canceled 채널을 읽는 다른 고루틴은 에러가 발생했음을 알게 되고, 종료할 수 있다.`),gn=k(),M=o("p"),ua=i("다만 이 방법은 잠재적인 문제가 있는데, 바로 오류가 2회 이상 발생하여 이미 닫힌 "),vn=o("code"),ka=i("canceled"),ra=i(` 채널을 다시 닫는 경우이다.
이 경우 panic이 발생하므로, 취소 채널을 닫는 대신 취소 채널을 단 한번만 닫을 수 있게끔 별도의 고루틴을 두어야 한다.`),ns=k(),b(L.$$.fragment),ss=k(),en=o("p"),ia=i("1번 고루틴이 실패하면 2번 고루틴도 종료될것이며, 그 반대도 마찬가지이다."),as=k(),ts=o("br"),ps=k(),cn=o("p"),fa=i("취소 채널 대신 오류 채널을 사용하는 방법도 있다."),os=k(),b(A.$$.fragment),es=k(),cs=o("br"),ls=k(),G=o("p"),wa=i(`또 다른 방법은 각 고루틴의 스코프에서 전용 에러 변수를 사용하는 것이다.
이 방법은 `),hn=o("code"),da=i("sync.WaitGroup"),ya=i(`을 사용하며, 한 고루틴이 실패하더라도 다른 고루틴을 종료시킬 수 없다.
따라서 고루틴들이 굳이 취소할 필요가 없는 연산을 수행하는 경우 유용하다.`),us=k(),D=o("p"),$a=i("이 패턴으로 구현하고자 하는 경우 "),Pn=o("code"),ma=i("Wait()"),_a=i(` 메서드를 호출한 이후 에러를 확인해야 한다.
이는 메모리 모델에 따라 happened-before 관계를 만듦으로써 data race를 방지하기 위함이다.`),ks=k(),b(O.$$.fragment),rs=k(),is=o("br"),fs=k(),I=o("h3"),N=o("a"),Cn=o("span"),Ea=i("파이프라인"),ws=k(),ln=o("p"),ba=i(`파이프라인은 일반적으로 많은 입력을 받아서 처리하므로, 입력 하나가 실패한다고 해서 파이프라인 전체를 종료시키는 것은 바람직하지 않다.
따라서 오류를 기록해두거나 로깅하고 계속 처리를 진행하는 것이 좋다.
이 때 로그를 보고 오류에 대한 인사이트를 확실히 얻을 수 있게끔, 오류 발생에 대한 다양한 정보와 컨텍스트를 기록해야 한다.`),ds=k(),un=o("p"),va=i("다음과 같은 원칙을 따르면 파이프라인에서 오류를 처리하는 것이 더 쉬워진다."),ys=k(),E=o("ul"),Rn=o("li"),ha=i("파이프라인의 각 단계에서는 에러 기록 함수를 호출한다. 이 함수는 파이프라인의 여러 단계에서 호출될 수 있으므로, 동시 호출을 처리할 수 있어야 한다."),Pa=k(),Tn=o("li"),Ca=i("파이프라인에서 오류가 발생하면, 파일명, 입력, 실패 이유, 해당 단계 등 관련된 정보를 분리된 오류 채널로 전송한다. 해당 채널을 읽는 고루틴은 이 정보를 데이터베이스나 로그에 기록한다."),Ra=k(),Hn=o("li"),Ta=i("오류를 다음 단계로 전달하여, 각 단계에서 입력에 오류가 있었는지 확인하고 이를 파이프라인이 끝날 때까지 전달해야 한다."),$s=k(),q=o("h3"),U=o("a"),Sn=o("span"),Ha=i("서버"),ms=k(),kn=o("p"),Sa=i(`일반적으로 서버는 HTTP 또는 gRPC 등의 요청을 받아서 처리하며, 보통 각 요청은 별도의 고루틴에서 처리된다.
따라서 사용자에 대한 응답을 작성하기 위한 에러를 전파하는 것은 요청 처리 스택에 달려있다.
에러 코드나 추가적인 진단 정보를 포함시키기 위해 커스텀 에러 타입을 정의하는 것도 좋은 방법이다.`),_s=k(),b(z.$$.fragment),Es=k(),bs=o("br"),vs=o("br"),hs=k(),Z=o("h2"),j=o("a"),Wn=o("span"),Wa=i("Panic"),Ps=k(),Cs=o("hr"),Rs=k(),rn=o("p"),xa=i(`패닉은 일반적인 오류와 달리 프로그램 자체를 더 이상 실행할 수 없는 상황을 의미하며, 즉시 프로그램을 종료시킨다.
따라서 패닉이 발생하는 경우 최대한 많은 진단 정보와 컨텍스트를 개발자에게 전달해야 한다.`),Ts=k(),fn=o("p"),Ba=i(`동시성 프로그램에서 패닉이 발생하면 해당 고루틴을 실행한 함수까지 거슬러 올라가며 모든 중첩 함수 호출이 종료된다.
이 때 모든 defer 함수가 실행되는데, 이를 통해 panic 상태를 회복하거나 가비지 컬렉터에 수집되지 않은 리소스를 정리할 수 있다.
함수 체인에서 패닉이 처리되지 않으면 프로그램은 종료되므로, 패닉은 반드시 적절히 처리되어야 한다고 할 수 있다.`),Hs=k(),wn=o("p"),Ma=i(`일반적으로 서버 프로그램에서는 별도의 고루틴이 요청을 처리한다.
대부분의 프레임워크에서는 패닉이 발생하면 프로그램 전체를 중지시키는 게 아니라 오류 스택을 출력하고 해당 요청만 실패시킨다.
이 때 프레임워크를 사용하지 않는다면 패닉을 직접 처리해야 한다.`),Ss=k(),b(F.$$.fragment),Ws=k(),dn=o("p"),La=i("또는 패닉을 발생시킬 수 있는 고루틴이 있고, 그 패닉이 프로그램 전체를 종료시키지 않아야 한다면 패닉을 처리해야 한다."),xs=k(),Y=o("pre"),Bs=k(),Ms=o("br"),Ls=k(),yn=o("p"),Aa=i(`파이프라인에서 패닉을 처리하는 것은 보다 방어적이어야 한다.
에러 처리와 마찬가지로 파이프라인은 장시간 실행되는 프로그램이므로, 패닉이 발생하더라도 프로그램을 무작정 종료시키는 것은 좋은 생각이 아니다.
일반적으로 파이프라인 처리가 완료되면 모든 패닉과 에러에 대한 로그를 갖고 있어야 한다.
따라서 패닉 복구가 제대로 이루어졌는지 확실하게 알 수 있어야 한다.`),As=k(),$n=o("p"),Ga=i("다음의 예제는 패닉이 발생하더라도 계속 처리를 진행하는 방법을 보여준다."),Gs=k(),b(J.$$.fragment),Ds=k(),Os=o("br"),Is=o("br"),Ns=k(),K=o("h2"),Q=o("a"),xn=o("span"),Da=i("References"),qs=k(),Us=o("hr"),zs=k(),m=o("center"),Bn=o("p"),Oa=i("["),Ia=k(),b(g.$$.fragment),Na=i(`
](https://learning.oreilly.com/library/view/effective-concurrency-in/9781804619070/)`),qa=o("br"),Ua=i(`
[Burak Serdar, 『Effective Concurrency in Go』, Packt Publishing](https://learning.oreilly.com/library/view/effective-concurrency-in/9781804619070/)`),this.h()},l(n){p=e(n,"H2",{id:!0});var a=l(p);y=e(a,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Mn=l(y);u=e(Mn,"SPAN",{class:!0}),l(u).forEach(s),Mn.forEach(s),w=f(a,"에러 핸들링"),a.forEach(s),Nn=r(n),an=e(n,"P",{});var Ln=l(an);Qs=f(Ln,`Go는 try-catch 기반의 에러 처리가 아닌 에러 여부 및 정보를 명시적으로 리턴하는 방식으로 에러를 처리한다.
이러한 방식이 과연 좋은지에 대해서는 의견이 분분하지만, 적어도 동시성 프로그래밍에서는 이러한 방식이 더 적합하다고 한다.
채널을 통해 다른 고루틴으로 에러 인스턴스를 전달하기 더 용이하기 때문이다.`),Ln.forEach(s),qn=r(n),H=e(n,"P",{});var nn=l(H);Vs=f(nn,`일반적인 함수에서 허용되지 않은 상황이 발생했을 때 에러를 리턴한다.
하지만 고루틴은 에러를 반환할 수 없다. 따라서 에러를 처리할 수 있는 다른 방법을 찾아야 한다.
가령 여러 고루틴이 서로 다른 작업을 수행하고 있는데 한 고루틴에서 에러가 발생했다면, 다른 고루틴을 종료시키거나 결과를 폐기해야 한다.
또는 여러 고루틴이 실패하여 여러 에러 값을 처리해야 할 때도 있다.
하지만 에러 처리의 대원칙은 `),v(S.$$.fragment,nn),Xs=f(nn,"는 것이다."),nn.forEach(s),Un=r(n),zn=e(n,"BR",{}),Zn=r(n),tn=e(n,"P",{});var An=l(tn);Ys=f(An,`예제를 통해 살펴보자. 아래 패턴은 여러 작업을 동시에 수행하는 중 에러를 처리하려 할 때 유용한 패턴이다.
또한 Worker Pool 패턴에서도 유용하게 사용된다.`),An.forEach(s),jn=r(n),v(W.$$.fragment,n),Fn=r(n),pn=e(n,"P",{});var Gn=l(pn);gs=f(Gn,"이 예제에서는 결과 채널에서 받은 결과에 에러가 있는지 확인한다."),Gn.forEach(s),Jn=r(n),on=e(n,"P",{});var Dn=l(on);na=f(Dn,`이 때 한 결과에 에러가 있더라도 바로 함수를 종료하지 않고, 모든 채널에서 결과를 읽어와야 한다.
그렇지 않으면 고루틴 누수가 발생할 수 있다. 이를테면 다음과 같은 상황이다.`),Dn.forEach(s),Kn=r(n),v(x.$$.fragment,n),Qn=r(n),Vn=e(n,"BR",{}),Xn=r(n),_=e(n,"P",{});var T=l(_);sa=f(T,`모든 고루틴이 끝나기까지 기다린 후 에러를 반환하는 경우가 있을 수 있지만, 한 고루틴이 실패하면 다른 고루틴도 종료시켜야 하는 경우도 있다.
이 경우 `),_n=e(T,"CODE",{});var On=l(_n);aa=f(On,"context.Context"),On.forEach(s),ta=f(T,"를 사용하는 방법도 있지만 이는 나중에 다루고, 여기서는 "),En=e(T,"CODE",{});var In=l(En);pa=f(In,"canceled"),In.forEach(s),oa=f(T," 채널을 사용하여 고루틴을 종료하는 방법을 알아보자."),T.forEach(s),Yn=r(n),B=e(n,"P",{});var js=l(B);ea=f(js,`채널을 닫으면 해당 채널을 읽고 있는 모든 고루틴에 일회성 브로드캐스팅이 가능하다.
따라서 특정 고루틴에서 에러가 발생하면 `),bn=e(js,"CODE",{});var Ja=l(bn);ca=f(Ja,"canceled"),Ja.forEach(s),la=f(js,` 채널을 닫아 다른 고루틴에 에러가 발생했음을 알릴 수 있다.
주기적으로 canceled 채널을 읽는 다른 고루틴은 에러가 발생했음을 알게 되고, 종료할 수 있다.`),js.forEach(s),gn=r(n),M=e(n,"P",{});var Fs=l(M);ua=f(Fs,"다만 이 방법은 잠재적인 문제가 있는데, 바로 오류가 2회 이상 발생하여 이미 닫힌 "),vn=e(Fs,"CODE",{});var Ka=l(vn);ka=f(Ka,"canceled"),Ka.forEach(s),ra=f(Fs,` 채널을 다시 닫는 경우이다.
이 경우 panic이 발생하므로, 취소 채널을 닫는 대신 취소 채널을 단 한번만 닫을 수 있게끔 별도의 고루틴을 두어야 한다.`),Fs.forEach(s),ns=r(n),v(L.$$.fragment,n),ss=r(n),en=e(n,"P",{});var Qa=l(en);ia=f(Qa,"1번 고루틴이 실패하면 2번 고루틴도 종료될것이며, 그 반대도 마찬가지이다."),Qa.forEach(s),as=r(n),ts=e(n,"BR",{}),ps=r(n),cn=e(n,"P",{});var Va=l(cn);fa=f(Va,"취소 채널 대신 오류 채널을 사용하는 방법도 있다."),Va.forEach(s),os=r(n),v(A.$$.fragment,n),es=r(n),cs=e(n,"BR",{}),ls=r(n),G=e(n,"P",{});var Js=l(G);wa=f(Js,`또 다른 방법은 각 고루틴의 스코프에서 전용 에러 변수를 사용하는 것이다.
이 방법은 `),hn=e(Js,"CODE",{});var Xa=l(hn);da=f(Xa,"sync.WaitGroup"),Xa.forEach(s),ya=f(Js,`을 사용하며, 한 고루틴이 실패하더라도 다른 고루틴을 종료시킬 수 없다.
따라서 고루틴들이 굳이 취소할 필요가 없는 연산을 수행하는 경우 유용하다.`),Js.forEach(s),us=r(n),D=e(n,"P",{});var Ks=l(D);$a=f(Ks,"이 패턴으로 구현하고자 하는 경우 "),Pn=e(Ks,"CODE",{});var Ya=l(Pn);ma=f(Ya,"Wait()"),Ya.forEach(s),_a=f(Ks,` 메서드를 호출한 이후 에러를 확인해야 한다.
이는 메모리 모델에 따라 happened-before 관계를 만듦으로써 data race를 방지하기 위함이다.`),Ks.forEach(s),ks=r(n),v(O.$$.fragment,n),rs=r(n),is=e(n,"BR",{}),fs=r(n),I=e(n,"H3",{id:!0});var za=l(I);N=e(za,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ga=l(N);Cn=e(ga,"SPAN",{class:!0}),l(Cn).forEach(s),ga.forEach(s),Ea=f(za,"파이프라인"),za.forEach(s),ws=r(n),ln=e(n,"P",{});var nt=l(ln);ba=f(nt,`파이프라인은 일반적으로 많은 입력을 받아서 처리하므로, 입력 하나가 실패한다고 해서 파이프라인 전체를 종료시키는 것은 바람직하지 않다.
따라서 오류를 기록해두거나 로깅하고 계속 처리를 진행하는 것이 좋다.
이 때 로그를 보고 오류에 대한 인사이트를 확실히 얻을 수 있게끔, 오류 발생에 대한 다양한 정보와 컨텍스트를 기록해야 한다.`),nt.forEach(s),ds=r(n),un=e(n,"P",{});var st=l(un);va=f(st,"다음과 같은 원칙을 따르면 파이프라인에서 오류를 처리하는 것이 더 쉬워진다."),st.forEach(s),ys=r(n),E=e(n,"UL",{});var mn=l(E);Rn=e(mn,"LI",{});var at=l(Rn);ha=f(at,"파이프라인의 각 단계에서는 에러 기록 함수를 호출한다. 이 함수는 파이프라인의 여러 단계에서 호출될 수 있으므로, 동시 호출을 처리할 수 있어야 한다."),at.forEach(s),Pa=r(mn),Tn=e(mn,"LI",{});var tt=l(Tn);Ca=f(tt,"파이프라인에서 오류가 발생하면, 파일명, 입력, 실패 이유, 해당 단계 등 관련된 정보를 분리된 오류 채널로 전송한다. 해당 채널을 읽는 고루틴은 이 정보를 데이터베이스나 로그에 기록한다."),tt.forEach(s),Ra=r(mn),Hn=e(mn,"LI",{});var pt=l(Hn);Ta=f(pt,"오류를 다음 단계로 전달하여, 각 단계에서 입력에 오류가 있었는지 확인하고 이를 파이프라인이 끝날 때까지 전달해야 한다."),pt.forEach(s),mn.forEach(s),$s=r(n),q=e(n,"H3",{id:!0});var Za=l(q);U=e(Za,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ot=l(U);Sn=e(ot,"SPAN",{class:!0}),l(Sn).forEach(s),ot.forEach(s),Ha=f(Za,"서버"),Za.forEach(s),ms=r(n),kn=e(n,"P",{});var et=l(kn);Sa=f(et,`일반적으로 서버는 HTTP 또는 gRPC 등의 요청을 받아서 처리하며, 보통 각 요청은 별도의 고루틴에서 처리된다.
따라서 사용자에 대한 응답을 작성하기 위한 에러를 전파하는 것은 요청 처리 스택에 달려있다.
에러 코드나 추가적인 진단 정보를 포함시키기 위해 커스텀 에러 타입을 정의하는 것도 좋은 방법이다.`),et.forEach(s),_s=r(n),v(z.$$.fragment,n),Es=r(n),bs=e(n,"BR",{}),vs=e(n,"BR",{}),hs=r(n),Z=e(n,"H2",{id:!0});var ja=l(Z);j=e(ja,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ct=l(j);Wn=e(ct,"SPAN",{class:!0}),l(Wn).forEach(s),ct.forEach(s),Wa=f(ja,"Panic"),ja.forEach(s),Ps=r(n),Cs=e(n,"HR",{}),Rs=r(n),rn=e(n,"P",{});var lt=l(rn);xa=f(lt,`패닉은 일반적인 오류와 달리 프로그램 자체를 더 이상 실행할 수 없는 상황을 의미하며, 즉시 프로그램을 종료시킨다.
따라서 패닉이 발생하는 경우 최대한 많은 진단 정보와 컨텍스트를 개발자에게 전달해야 한다.`),lt.forEach(s),Ts=r(n),fn=e(n,"P",{});var ut=l(fn);Ba=f(ut,`동시성 프로그램에서 패닉이 발생하면 해당 고루틴을 실행한 함수까지 거슬러 올라가며 모든 중첩 함수 호출이 종료된다.
이 때 모든 defer 함수가 실행되는데, 이를 통해 panic 상태를 회복하거나 가비지 컬렉터에 수집되지 않은 리소스를 정리할 수 있다.
함수 체인에서 패닉이 처리되지 않으면 프로그램은 종료되므로, 패닉은 반드시 적절히 처리되어야 한다고 할 수 있다.`),ut.forEach(s),Hs=r(n),wn=e(n,"P",{});var kt=l(wn);Ma=f(kt,`일반적으로 서버 프로그램에서는 별도의 고루틴이 요청을 처리한다.
대부분의 프레임워크에서는 패닉이 발생하면 프로그램 전체를 중지시키는 게 아니라 오류 스택을 출력하고 해당 요청만 실패시킨다.
이 때 프레임워크를 사용하지 않는다면 패닉을 직접 처리해야 한다.`),kt.forEach(s),Ss=r(n),v(F.$$.fragment,n),Ws=r(n),dn=e(n,"P",{});var rt=l(dn);La=f(rt,"또는 패닉을 발생시킬 수 있는 고루틴이 있고, 그 패닉이 프로그램 전체를 종료시키지 않아야 한다면 패닉을 처리해야 한다."),rt.forEach(s),xs=r(n),Y=e(n,"PRE",{class:!0});var $t=l(Y);$t.forEach(s),Bs=r(n),Ms=e(n,"BR",{}),Ls=r(n),yn=e(n,"P",{});var it=l(yn);Aa=f(it,`파이프라인에서 패닉을 처리하는 것은 보다 방어적이어야 한다.
에러 처리와 마찬가지로 파이프라인은 장시간 실행되는 프로그램이므로, 패닉이 발생하더라도 프로그램을 무작정 종료시키는 것은 좋은 생각이 아니다.
일반적으로 파이프라인 처리가 완료되면 모든 패닉과 에러에 대한 로그를 갖고 있어야 한다.
따라서 패닉 복구가 제대로 이루어졌는지 확실하게 알 수 있어야 한다.`),it.forEach(s),As=r(n),$n=e(n,"P",{});var ft=l($n);Ga=f(ft,"다음의 예제는 패닉이 발생하더라도 계속 처리를 진행하는 방법을 보여준다."),ft.forEach(s),Gs=r(n),v(J.$$.fragment,n),Ds=r(n),Os=e(n,"BR",{}),Is=e(n,"BR",{}),Ns=r(n),K=e(n,"H2",{id:!0});var Fa=l(K);Q=e(Fa,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var wt=l(Q);xn=e(wt,"SPAN",{class:!0}),l(xn).forEach(s),wt.forEach(s),Da=f(Fa,"References"),Fa.forEach(s),qs=r(n),Us=e(n,"HR",{}),zs=r(n),m=e(n,"CENTER",{});var sn=l(m);Bn=e(sn,"P",{});var dt=l(Bn);Oa=f(dt,"["),dt.forEach(s),Ia=r(sn),v(g.$$.fragment,sn),Na=f(sn,`
](https://learning.oreilly.com/library/view/effective-concurrency-in/9781804619070/)`),qa=e(sn,"BR",{}),Ua=f(sn,`
[Burak Serdar, 『Effective Concurrency in Go』, Packt Publishing](https://learning.oreilly.com/library/view/effective-concurrency-in/9781804619070/)`),sn.forEach(s),this.h()},h(){d(u,"class","icon icon-link"),d(y,"aria-hidden","true"),d(y,"tabindex","-1"),d(y,"href","#에러-핸들링"),d(p,"id","에러-핸들링"),d(Cn,"class","icon icon-link"),d(N,"aria-hidden","true"),d(N,"tabindex","-1"),d(N,"href","#파이프라인"),d(I,"id","파이프라인"),d(Sn,"class","icon icon-link"),d(U,"aria-hidden","true"),d(U,"tabindex","-1"),d(U,"href","#서버"),d(q,"id","서버"),d(Wn,"class","icon icon-link"),d(j,"aria-hidden","true"),d(j,"tabindex","-1"),d(j,"href","#panic"),d(Z,"id","panic"),d(Y,"class","language-go"),d(xn,"class","icon icon-link"),d(Q,"aria-hidden","true"),d(Q,"tabindex","-1"),d(Q,"href","#references"),d(K,"id","references")},m(n,a){t(n,p,a),c(p,y),c(y,u),c(p,w),t(n,Nn,a),t(n,an,a),c(an,Qs),t(n,qn,a),t(n,H,a),c(H,Vs),h(S,H,null),c(H,Xs),t(n,Un,a),t(n,zn,a),t(n,Zn,a),t(n,tn,a),c(tn,Ys),t(n,jn,a),h(W,n,a),t(n,Fn,a),t(n,pn,a),c(pn,gs),t(n,Jn,a),t(n,on,a),c(on,na),t(n,Kn,a),h(x,n,a),t(n,Qn,a),t(n,Vn,a),t(n,Xn,a),t(n,_,a),c(_,sa),c(_,_n),c(_n,aa),c(_,ta),c(_,En),c(En,pa),c(_,oa),t(n,Yn,a),t(n,B,a),c(B,ea),c(B,bn),c(bn,ca),c(B,la),t(n,gn,a),t(n,M,a),c(M,ua),c(M,vn),c(vn,ka),c(M,ra),t(n,ns,a),h(L,n,a),t(n,ss,a),t(n,en,a),c(en,ia),t(n,as,a),t(n,ts,a),t(n,ps,a),t(n,cn,a),c(cn,fa),t(n,os,a),h(A,n,a),t(n,es,a),t(n,cs,a),t(n,ls,a),t(n,G,a),c(G,wa),c(G,hn),c(hn,da),c(G,ya),t(n,us,a),t(n,D,a),c(D,$a),c(D,Pn),c(Pn,ma),c(D,_a),t(n,ks,a),h(O,n,a),t(n,rs,a),t(n,is,a),t(n,fs,a),t(n,I,a),c(I,N),c(N,Cn),c(I,Ea),t(n,ws,a),t(n,ln,a),c(ln,ba),t(n,ds,a),t(n,un,a),c(un,va),t(n,ys,a),t(n,E,a),c(E,Rn),c(Rn,ha),c(E,Pa),c(E,Tn),c(Tn,Ca),c(E,Ra),c(E,Hn),c(Hn,Ta),t(n,$s,a),t(n,q,a),c(q,U),c(U,Sn),c(q,Ha),t(n,ms,a),t(n,kn,a),c(kn,Sa),t(n,_s,a),h(z,n,a),t(n,Es,a),t(n,bs,a),t(n,vs,a),t(n,hs,a),t(n,Z,a),c(Z,j),c(j,Wn),c(Z,Wa),t(n,Ps,a),t(n,Cs,a),t(n,Rs,a),t(n,rn,a),c(rn,xa),t(n,Ts,a),t(n,fn,a),c(fn,Ba),t(n,Hs,a),t(n,wn,a),c(wn,Ma),t(n,Ss,a),h(F,n,a),t(n,Ws,a),t(n,dn,a),c(dn,La),t(n,xs,a),t(n,Y,a),Y.innerHTML=yt,t(n,Bs,a),t(n,Ms,a),t(n,Ls,a),t(n,yn,a),c(yn,Aa),t(n,As,a),t(n,$n,a),c($n,Ga),t(n,Gs,a),h(J,n,a),t(n,Ds,a),t(n,Os,a),t(n,Is,a),t(n,Ns,a),t(n,K,a),c(K,Q),c(Q,xn),c(K,Da),t(n,qs,a),t(n,Us,a),t(n,zs,a),t(n,m,a),c(m,Bn),c(Bn,Oa),c(m,Ia),h(g,m,null),c(m,Na),c(m,qa),c(m,Ua),Zs=!0},p(n,[a]){const Mn={};a&1&&(Mn.$$scope={dirty:a,ctx:n}),S.$set(Mn);const Ln={};a&1&&(Ln.$$scope={dirty:a,ctx:n}),W.$set(Ln);const nn={};a&1&&(nn.$$scope={dirty:a,ctx:n}),x.$set(nn);const An={};a&1&&(An.$$scope={dirty:a,ctx:n}),L.$set(An);const Gn={};a&1&&(Gn.$$scope={dirty:a,ctx:n}),A.$set(Gn);const Dn={};a&1&&(Dn.$$scope={dirty:a,ctx:n}),O.$set(Dn);const T={};a&1&&(T.$$scope={dirty:a,ctx:n}),z.$set(T);const On={};a&1&&(On.$$scope={dirty:a,ctx:n}),F.$set(On);const In={};a&1&&(In.$$scope={dirty:a,ctx:n}),J.$set(In)},i(n){Zs||(P(S.$$.fragment,n),P(W.$$.fragment,n),P(x.$$.fragment,n),P(L.$$.fragment,n),P(A.$$.fragment,n),P(O.$$.fragment,n),P(z.$$.fragment,n),P(F.$$.fragment,n),P(J.$$.fragment,n),P(g.$$.fragment,n),Zs=!0)},o(n){C(S.$$.fragment,n),C(W.$$.fragment,n),C(x.$$.fragment,n),C(L.$$.fragment,n),C(A.$$.fragment,n),C(O.$$.fragment,n),C(z.$$.fragment,n),C(F.$$.fragment,n),C(J.$$.fragment,n),C(g.$$.fragment,n),Zs=!1},d(n){n&&s(p),n&&s(Nn),n&&s(an),n&&s(qn),n&&s(H),R(S),n&&s(Un),n&&s(zn),n&&s(Zn),n&&s(tn),n&&s(jn),R(W,n),n&&s(Fn),n&&s(pn),n&&s(Jn),n&&s(on),n&&s(Kn),R(x,n),n&&s(Qn),n&&s(Vn),n&&s(Xn),n&&s(_),n&&s(Yn),n&&s(B),n&&s(gn),n&&s(M),n&&s(ns),R(L,n),n&&s(ss),n&&s(en),n&&s(as),n&&s(ts),n&&s(ps),n&&s(cn),n&&s(os),R(A,n),n&&s(es),n&&s(cs),n&&s(ls),n&&s(G),n&&s(us),n&&s(D),n&&s(ks),R(O,n),n&&s(rs),n&&s(is),n&&s(fs),n&&s(I),n&&s(ws),n&&s(ln),n&&s(ds),n&&s(un),n&&s(ys),n&&s(E),n&&s($s),n&&s(q),n&&s(ms),n&&s(kn),n&&s(_s),R(z,n),n&&s(Es),n&&s(bs),n&&s(vs),n&&s(hs),n&&s(Z),n&&s(Ps),n&&s(Cs),n&&s(Rs),n&&s(rn),n&&s(Ts),n&&s(fn),n&&s(Hs),n&&s(wn),n&&s(Ss),R(F,n),n&&s(Ws),n&&s(dn),n&&s(xs),n&&s(Y),n&&s(Bs),n&&s(Ms),n&&s(Ls),n&&s(yn),n&&s(As),n&&s($n),n&&s(Gs),R(J,n),n&&s(Ds),n&&s(Os),n&&s(Is),n&&s(Ns),n&&s(K),n&&s(qs),n&&s(Us),n&&s(zs),n&&s(m),R(g)}}}const Dt={title:"동시성 프로그램의 에러 핸들링",date:"2023-09-11T00:00:00.000Z",excerpt:"동시성 프로그래밍에서 발생하는 에러 및 panic은 어떻게 핸들링해야 할지 알아보자",categories:["Golang","Concurrency in Go"],coverImage:"/post_img/Go/Concurrency in Go/cover.png",coverWidth:16,coverHeight:9,indexed:!1,exposed:!0};class Ot extends mt{constructor(p){super(),_t(this,p,null,Bt,Et,{})}}export{Ot as default,Dt as metadata};
