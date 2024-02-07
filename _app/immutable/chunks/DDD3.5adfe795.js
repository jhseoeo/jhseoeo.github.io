import{S as Xc,i as Yc,s as hc,k as e,q as c,a as i,y as dn,l as o,m as l,h as s,r as u,c as r,z as En,n as k,b as p,E as t,A as vn,g as _n,d as wn,B as yn,M as _s}from"./index.d78780bf.js";import{C as vs}from"./CodeBlockWrapper.eeb7c0c0.js";import{I as Sc}from"./Image.605b14b5.js";function gc(y){let f,E=`<code class="language-go"><span class="token keyword">package</span> chapter3

<span class="token keyword">import</span> <span class="token string">"time"</span>

<span class="token keyword">type</span> AnemicAuction <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	id            <span class="token builtin">int</span>
	startingPrice Money
	sellerID      <span class="token builtin">int</span>
	createdAt     time<span class="token punctuation">.</span>Time
	auctionStart  time<span class="token punctuation">.</span>Time
	auctionEnd    time<span class="token punctuation">.</span>Time
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>AnemicAuction<span class="token punctuation">)</span> <span class="token function">GetID</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">return</span> a<span class="token punctuation">.</span>id
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>AnemicAuction<span class="token punctuation">)</span> <span class="token function">StartingPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Money <span class="token punctuation">&#123;</span>
	<span class="token keyword">return</span> a<span class="token punctuation">.</span>startingPrice
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>AnemicAuction<span class="token punctuation">)</span> <span class="token function">SetStartingPrice</span><span class="token punctuation">(</span>startingPrice Money<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	a<span class="token punctuation">.</span>startingPrice <span class="token operator">=</span> startingPrice
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>AnemicAuction<span class="token punctuation">)</span> <span class="token function">GetSellerID</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">return</span> a<span class="token punctuation">.</span>sellerID
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>AnemicAuction<span class="token punctuation">)</span> <span class="token function">SetSellerID</span><span class="token punctuation">(</span>sellerID <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	a<span class="token punctuation">.</span>sellerID <span class="token operator">=</span> sellerID
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>AnemicAuction<span class="token punctuation">)</span> <span class="token function">GetCreatedAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> time<span class="token punctuation">.</span>Time <span class="token punctuation">&#123;</span>
	<span class="token keyword">return</span> a<span class="token punctuation">.</span>createdAt
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>AnemicAuction<span class="token punctuation">)</span> <span class="token function">SetCreatedAt</span><span class="token punctuation">(</span>createdAt time<span class="token punctuation">.</span>Time<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	a<span class="token punctuation">.</span>createdAt <span class="token operator">=</span> createdAt
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>AnemicAuction<span class="token punctuation">)</span> <span class="token function">GetAuctionStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> time<span class="token punctuation">.</span>Time <span class="token punctuation">&#123;</span>
	<span class="token keyword">return</span> a<span class="token punctuation">.</span>auctionStart
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>AnemicAuction<span class="token punctuation">)</span> <span class="token function">SetAuctionStart</span><span class="token punctuation">(</span>auctionStart time<span class="token punctuation">.</span>Time<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	a<span class="token punctuation">.</span>auctionStart <span class="token operator">=</span> auctionStart
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>AnemicAuction<span class="token punctuation">)</span> <span class="token function">GetAuctionEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> time<span class="token punctuation">.</span>Time <span class="token punctuation">&#123;</span>
	<span class="token keyword">return</span> a<span class="token punctuation">.</span>auctionEnd
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>AnemicAuction<span class="token punctuation">)</span> <span class="token function">SetAuctionEnd</span><span class="token punctuation">(</span>auctionEnd time<span class="token punctuation">.</span>Time<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	a<span class="token punctuation">.</span>auctionEnd <span class="token operator">=</span> auctionEnd
<span class="token punctuation">&#125;</span></code>`;return{c(){f=e("pre"),this.h()},l(m){f=o(m,"PRE",{class:!0});var d=l(f);d.forEach(s),this.h()},h(){k(f,"class","language-go")},m(m,d){p(m,f,d),f.innerHTML=E},p:_s,d(m){m&&s(f)}}}function nu(y){let f,E=`<code class="language-go"><span class="token keyword">package</span> chapter3

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"errors"</span>
	<span class="token string">"github.com/google/uuid"</span>
	<span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> AuctionRefactored <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	id            uuid<span class="token punctuation">.</span>UUID
	startingPrice Money
	sellerID      uuid<span class="token punctuation">.</span>UUID
	createdAt     time<span class="token punctuation">.</span>Time
	auctionStart  time<span class="token punctuation">.</span>Time
	auctionEnd    time<span class="token punctuation">.</span>Time
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>AuctionRefactored<span class="token punctuation">)</span> <span class="token function">GetAuctionElapsedDuration</span><span class="token punctuation">(</span><span class="token punctuation">)</span> time<span class="token punctuation">.</span>Duration <span class="token punctuation">&#123;</span>
	<span class="token keyword">return</span> a<span class="token punctuation">.</span>auctionStart<span class="token punctuation">.</span><span class="token function">Sub</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>auctionEnd<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>AuctionRefactored<span class="token punctuation">)</span> <span class="token function">GetAuctionEndTimeInUTC</span><span class="token punctuation">(</span><span class="token punctuation">)</span> time<span class="token punctuation">.</span>Time <span class="token punctuation">&#123;</span>
	<span class="token keyword">return</span> a<span class="token punctuation">.</span>auctionEnd
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>AuctionRefactored<span class="token punctuation">)</span> <span class="token function">SetAuctionEnd</span><span class="token punctuation">(</span>auctionEnd time<span class="token punctuation">.</span>Time<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">&#123;</span>
	err <span class="token operator">:=</span> a<span class="token punctuation">.</span><span class="token function">validateTimeZone</span><span class="token punctuation">(</span>auctionEnd<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> err
	<span class="token punctuation">&#125;</span>
	a<span class="token punctuation">.</span>auctionEnd <span class="token operator">=</span> auctionEnd
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>AuctionRefactored<span class="token punctuation">)</span> <span class="token function">GetAuctionStartTimeInUTC</span><span class="token punctuation">(</span><span class="token punctuation">)</span> time<span class="token punctuation">.</span>Time <span class="token punctuation">&#123;</span>
	<span class="token keyword">return</span> a<span class="token punctuation">.</span>auctionStart
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>AuctionRefactored<span class="token punctuation">)</span> <span class="token function">SetAuctionStartTimeInUTC</span><span class="token punctuation">(</span>auctionStart time<span class="token punctuation">.</span>Time<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">&#123;</span>
	err <span class="token operator">:=</span> a<span class="token punctuation">.</span><span class="token function">validateTimeZone</span><span class="token punctuation">(</span>auctionStart<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> err
	<span class="token punctuation">&#125;</span>
	a<span class="token punctuation">.</span>auctionStart <span class="token operator">=</span> auctionStart
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>AuctionRefactored<span class="token punctuation">)</span> <span class="token function">GetId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> uuid<span class="token punctuation">.</span>UUID <span class="token punctuation">&#123;</span>
	<span class="token keyword">return</span> a<span class="token punctuation">.</span>id
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>AuctionRefactored<span class="token punctuation">)</span> <span class="token function">validateTimeZone</span><span class="token punctuation">(</span>t time<span class="token punctuation">.</span>Time<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">&#123;</span>
	tz<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> t<span class="token punctuation">.</span><span class="token function">Zone</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> tz <span class="token operator">!=</span> time<span class="token punctuation">.</span>UTC<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"time zone must be UTC"</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){f=e("pre"),this.h()},l(m){f=o(m,"PRE",{class:!0});var d=l(f);d.forEach(s),this.h()},h(){k(f,"class","language-go")},m(m,d){p(m,f,d),f.innerHTML=E},p:_s,d(m){m&&s(f)}}}function su(y){let f,E=`<code class="language-go"><span class="token keyword">package</span> chapter3

<span class="token keyword">type</span> Point <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	x intpackage chapter3

<span class="token keyword">type</span> Point <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	x <span class="token builtin">int</span>
	y <span class="token builtin">int</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token function">NewPoint</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>Point <span class="token punctuation">&#123;</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>Point<span class="token punctuation">&#123;</span>x<span class="token punctuation">,</span> y<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
</code>`;return{c(){f=e("pre"),this.h()},l(m){f=o(m,"PRE",{class:!0});var d=l(f);d.forEach(s),this.h()},h(){k(f,"class","language-go")},m(m,d){p(m,f,d),f.innerHTML=E},p:_s,d(m){m&&s(f)}}}function au(y){let f,E=`<code class="language-go"><span class="token keyword">package</span> chapter3_test

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"github.com/jhseoeo/Golang-DDD/chapter3"</span>
	<span class="token string">"testing"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">Test_Point</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	a <span class="token operator">:=</span> chapter3<span class="token punctuation">.</span><span class="token function">NewPoint</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
	b <span class="token operator">:=</span> chapter3<span class="token punctuation">.</span><span class="token function">NewPoint</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

	<span class="token keyword">if</span> a <span class="token operator">!=</span> b <span class="token punctuation">&#123;</span>
		t<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">"a and b were not equal"</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){f=e("pre"),this.h()},l(m){f=o(m,"PRE",{class:!0});var d=l(f);d.forEach(s),this.h()},h(){k(f,"class","language-go")},m(m,d){p(m,f,d),f.innerHTML=E},p:_s,d(m){m&&s(f)}}}function tu(y){let f,E=`<code class="language-go"><span class="token keyword">package</span> chapter3

<span class="token keyword">type</span> Point <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	x <span class="token builtin">int</span>
	y <span class="token builtin">int</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token function">NewPoint</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> Point <span class="token punctuation">&#123;</span>
	<span class="token keyword">return</span> Point<span class="token punctuation">&#123;</span>x<span class="token punctuation">,</span> y<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
	directionUnkonwn <span class="token operator">=</span> <span class="token boolean">iota</span>
	directionNorth
	directionSouth
	directionEast
	directionWest
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">TrackPlayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	currLocation <span class="token operator">:=</span> <span class="token function">NewPoint</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
	currLocation <span class="token operator">=</span> <span class="token function">move</span><span class="token punctuation">(</span>currLocation<span class="token punctuation">,</span> directionNorth<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token function">move</span><span class="token punctuation">(</span>currLocation Point<span class="token punctuation">,</span> direction <span class="token builtin">int</span><span class="token punctuation">)</span> Point <span class="token punctuation">&#123;</span>
	<span class="token keyword">switch</span> direction <span class="token punctuation">&#123;</span>
	<span class="token keyword">case</span> directionNorth<span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token function">NewPoint</span><span class="token punctuation">(</span>currLocation<span class="token punctuation">.</span>x<span class="token punctuation">,</span> currLocation<span class="token punctuation">.</span>y<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token keyword">case</span> directionSouth<span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token function">NewPoint</span><span class="token punctuation">(</span>currLocation<span class="token punctuation">.</span>x<span class="token punctuation">,</span> currLocation<span class="token punctuation">.</span>y<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token keyword">case</span> directionEast<span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token function">NewPoint</span><span class="token punctuation">(</span>currLocation<span class="token punctuation">.</span>x<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> currLocation<span class="token punctuation">.</span>y<span class="token punctuation">)</span>
	<span class="token keyword">case</span> directionWest<span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token function">NewPoint</span><span class="token punctuation">(</span>currLocation<span class="token punctuation">.</span>x<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> currLocation<span class="token punctuation">.</span>y<span class="token punctuation">)</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
		<span class="token comment">// :D</span>
	<span class="token punctuation">&#125;</span>

	<span class="token keyword">return</span> currLocation
<span class="token punctuation">&#125;</span></code>`;return{c(){f=e("pre"),this.h()},l(m){f=o(m,"PRE",{class:!0});var d=l(f);d.forEach(s),this.h()},h(){k(f,"class","language-go")},m(m,d){p(m,f,d),f.innerHTML=E},p:_s,d(m){m&&s(f)}}}function pu(y){let f,E=`<code class="language-go"><span class="token keyword">package</span> chapter3

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"errors"</span>
	<span class="token string">"github.com/google/uuid"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> WalletItem <span class="token keyword">interface</span> <span class="token punctuation">&#123;</span>
	<span class="token function">GetBalance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>Money<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">type</span> Wallet <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	id          uuid<span class="token punctuation">.</span>UUID
	ownerId     uuid<span class="token punctuation">.</span>UUID
	walletItems <span class="token punctuation">[</span><span class="token punctuation">]</span>WalletItem
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>w Wallet<span class="token punctuation">)</span> <span class="token function">GetWalletBalance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>Money<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">var</span> result Money
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> w<span class="token punctuation">.</span>walletItems <span class="token punctuation">&#123;</span>
		itemBal<span class="token punctuation">,</span> err <span class="token operator">:=</span> v<span class="token punctuation">.</span><span class="token function">GetBalance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"failed to get balance"</span><span class="token punctuation">)</span>
		<span class="token punctuation">&#125;</span>
		result <span class="token operator">+=</span> itemBal
	<span class="token punctuation">&#125;</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>result<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){f=e("pre"),this.h()},l(m){f=o(m,"PRE",{class:!0});var d=l(f);d.forEach(s),this.h()},h(){k(f,"class","language-go")},m(m,d){p(m,f,d),f.innerHTML=E},p:_s,d(m){m&&s(f)}}}function eu(y){let f,E,m,d,va,S,Dp,ws,bp,Pp,_a,Cn,$p,wa,Dn,ya,Ln,Ap,Da,$,ys,Ip,Mp,Ds,Rp,Op,bs,Tp,ba,Gn,Sp,Pa,Nn,Up,$a,bn,Uc=`<code class="language-go"><span class="token keyword">package</span> chapter3

<span class="token keyword">import</span> <span class="token string">"time"</span>

<span class="token keyword">type</span> Money <span class="token operator">=</span> <span class="token builtin">int</span>

<span class="token keyword">type</span> Auction <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	ID            <span class="token builtin">int</span>
	startingPrice Money
	sellerID      <span class="token builtin">int</span>
	createdAt     time<span class="token punctuation">.</span>Time
	auctionStart  time<span class="token punctuation">.</span>Time
	auctionEnd    time<span class="token punctuation">.</span>Time
<span class="token punctuation">&#125;</span></code>`,Aa,A,xp,Ps,Cp,Lp,$s,Gp,Np,Ia,Ma,Ra,U,x,As,Hp,Oa,C,Bp,Is,Wp,jp,Ta,Hn,qp,Sa,Pn,xc='<code class="language-go">fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span>MaxInt<span class="token punctuation">)</span></code>',Ua,Bn,Zp,xa,$n,Cc='<code class="language-text">9223372036854775807</code>',Ca,Wn,zp,La,An,Lc='<code class="language-go">fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span>MaxInt <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span></code>',Ga,In,Gc='<code class="language-text">cannot use math.MaxInt + 1 (untyped int constant 9223372036854775808) as int value in argument to fmt.Println (overflows)</code>',Na,L,Fp,Ms,Qp,Vp,Ha,jn,Jp,Ba,Mn,Nc=`<code class="language-go"><span class="token keyword">package</span> chapter3

<span class="token keyword">import</span> <span class="token string">"github.com/google/uuid"</span>

<span class="token keyword">type</span> SomeEntity <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	id uuid<span class="token punctuation">.</span>UUID
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token function">NewSomeEntity</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>SomeEntity <span class="token punctuation">&#123;</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>SomeEntity<span class="token punctuation">&#123;</span>
		id<span class="token punctuation">:</span> uuid<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Wa,qn,Kp,ja,G,N,Rs,Xp,qa,H,Yp,Os,hp,gp,Za,Zn,ne,za,zn,se,Fa,B,Qa,W,ae,Ts,te,pe,Va,Fn,ee,Ja,j,Ka,q,oe,Ss,le,ce,Xa,Qn,ue,Ya,ha,ga,Z,z,Us,ie,nt,Vn,re,st,Jn,ke,at,tt,pt,et,F,Q,xs,fe,ot,Kn,me,lt,V,de,Cs,Ee,ve,ct,J,ut,Xn,_e,it,K,rt,Yn,we,kt,Rn,Hc=`<code class="language-bash">$ go <span class="token builtin class-name">test</span>
--- FAIL: Test_Point <span class="token punctuation">(</span><span class="token number">0</span>.00s<span class="token punctuation">)</span>
    value_object_test.go:13: a and b were not equal
FAIL
<span class="token builtin class-name">exit</span> status <span class="token number">1</span>
FAIL    github.com/jhseoeo/Golang-DDD/chapter3  <span class="token number">0</span>.001s</code>`,ft,b,ye,Ls,De,be,Gs,Pe,$e,Ns,Ae,Ie,mt,hn,Me,dt,On,Bc=`<code class="language-go"><span class="token keyword">func</span> <span class="token function">NewPoint</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> Point <span class="token punctuation">&#123;</span>
	<span class="token keyword">return</span> Point<span class="token punctuation">&#123;</span>x<span class="token punctuation">,</span> y<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Et,gn,Re,vt,D,Hs,Oe,Te,Bs,Se,Ue,Ws,xe,Ce,js,Le,Ge,_t,X,Ne,qs,He,Be,wt,Y,yt,I,We,Zs,je,qe,zs,Ze,ze,Dt,ns,Fe,bt,Pt,$t,h,g,Fs,Qe,At,ss,Ve,It,as,Je,Mt,M,Qs,Ke,Xe,Vs,Ye,he,Js,ge,Rt,ts,no,Ot,ps,so,Tt,St,Ut,xt,nn,sn,Ks,ao,Ct,es,to,Lt,os,po,Gt,ls,eo,Nt,cs,oo,Ht,us,lo,Bt,an,Wt,v,co,Xs,uo,io,Ys,ro,ko,hs,fo,mo,gs,Eo,vo,na,_o,wo,sa,yo,Do,jt,qt,Zt,tn,pn,aa,bo,zt,is,Po,Ft,en,$o,ta,Ao,Io,Qt,Vt,Jt,on,ln,pa,Mo,Kt,rs,Ro,Xt,cn,Oo,ea,To,So,Yt,Tn,Wc=`<code class="language-go"><span class="token keyword">type</span> item <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	name <span class="token builtin">string</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">type</span> Order <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	items          <span class="token punctuation">[</span><span class="token punctuation">]</span>item
	taxAmount      Money
	discount       Money
	paymentCard    uuid<span class="token punctuation">.</span>UUID
	customerId     uuid<span class="token punctuation">.</span>UUID
	marketingOptIn <span class="token builtin">bool</span>
<span class="token punctuation">&#125;</span></code>`,ht,_,Uo,oa,xo,Co,la,Lo,Go,ca,No,Ho,ua,Bo,Wo,gt,ks,jo,np,sp,ap,un,rn,ia,qo,tp,fs,Zo,pp,ep,op,lp,kn,fn,ra,zo,cp,up,ip,P,ka,Fo,Qo,Sn,Vo,Jo,Ko,rp;return Dn=new Sc({props:{alt:"Alt text",src:"/post_img/Backend/Architecture/DDD/3/1.png"}}),B=new vs({props:{$$slots:{default:[gc]},$$scope:{ctx:y}}}),j=new vs({props:{$$slots:{default:[nu]},$$scope:{ctx:y}}}),J=new vs({props:{$$slots:{default:[su]},$$scope:{ctx:y}}}),K=new vs({props:{$$slots:{default:[au]},$$scope:{ctx:y}}}),Y=new vs({props:{$$slots:{default:[tu]},$$scope:{ctx:y}}}),an=new vs({props:{$$slots:{default:[pu]},$$scope:{ctx:y}}}),Sn=new Sc({props:{alt:"Domain-Driven Design with Golang Cover",src:"https://learning.oreilly.com/covers/urn:orm:book:9781804613450/400w/"}}),{c(){f=e("h2"),E=e("a"),m=e("span"),d=c("엔티티"),va=i(),S=e("p"),Dp=c("Domain Driven Design에서, "),ws=e("strong"),bp=c("엔티티"),Pp=c(`는 ID로 정의된다. 그들의 속성이 변하더라도, 식별자는 변하지 않는다.
엔티티가 처음과 비교하여 많이 달라져서 구분이 불가능하더라도, 식별자가 같다면 같은 엔티티이다.`),_a=i(),Cn=e("p"),$p=c(`예를 들며 살펴보자.
이베이에서는 유저로 회원가입을 할 수 있다. 만약 무언가를 판매하고자 한다면, 판매자가 된다.
또한 항목에 입찰을 할 수도 있다. 이러한 서비스의 도메인 모델은 다음 사진과 같다.`),wa=i(),dn(Dn.$$.fragment),ya=i(),Ln=e("p"),Ap=c("시스템에서는 다음과 같은 동작이 일어날 수 있다."),Da=i(),$=e("ul"),ys=e("li"),Ip=c("유저가 주소를 변경한다."),Mp=i(),Ds=e("li"),Rp=c("유저가 이메일 주소를 변경한다."),Op=i(),bs=e("li"),Tp=c("경매 종료 시각이 변경된다."),ba=i(),Gn=e("p"),Sp=c("이러한 동작은 엔티티의 식별자를 변경하지 않는다. 동일한 ID를 참조하지만, 그들의 속성은 변경될 수 있다."),Pa=i(),Nn=e("p"),Up=c("이와 같은 경매 시스템의 엔티티를 구현하면 다음과 같다."),$a=i(),bn=e("pre"),Aa=i(),A=e("p"),xp=c("위 예제에서, "),Ps=e("code"),Cp=c("int"),Lp=c(" 타입의 "),$s=e("code"),Gp=c("ID"),Np=c(`는 엔티티의 식별자를 나타낸다.
엔티티 ID는 반드시 시스템에서 생성되어야 하는 것은 아니며, 엔티티 속성의 일부를 나타낼 수도 있다.
이를테면 대부분의 국가에서, 사람들을 구분하기 위해 주민등록번호를 사용한다.`),Ia=i(),Ma=e("br"),Ra=i(),U=e("h3"),x=e("a"),As=e("span"),Hp=c("좋은 식별자 생성하기"),Oa=i(),C=e("p"),Bp=c(`엔티티에 대한 고유하고 적절한 생성자를 생성하는 것은 의외로 어렵다.
이전 예제에서의 ID는 `),Is=e("code"),Wp=c("int"),jp=c(" 타입이었다. 대부분의 간단한 시스템에서는 이렇게 사용해도 무방하지만, 규모가 큰 시스템에서는 문제가 생기게 된다."),Ta=i(),Hn=e("p"),qp=c("예를 들어 다음과 같은 코드가 있다고 해보자."),Sa=i(),Pn=e("pre"),Ua=i(),Bn=e("p"),Zp=c("이를 실행하면 다음과 같은 결과를 얻게 된다."),xa=i(),$n=e("pre"),Ca=i(),Wn=e("p"),zp=c("하지만 이러한 코드를 작성하면, 다음과 같은 문제가 발생한다."),La=i(),An=e("pre"),Ga=i(),In=e("pre"),Na=i(),L=e("p"),Fp=c(`정수를 모두 다 써렸다! 만약 이처럼 정수를 식별자로 사용했다면, 시스템을 다시 설계해야 하는 문제가 발생했을 것이다.
따라서 엔티티의 식별자를 정할 때는 미래에 발생할 수 있는 문제를 고려하여야 한다.
일반적으로 가장 많이 고려되는 방식은 `),Ms=e("strong"),Qp=c("UUID(Universally Unique Identifier)"),Vp=c(`를 사용하는 것이다.
UUID는 128비트 레이블로, 실질적으로 중복될 가능성이 없다.`),Ha=i(),jn=e("p"),Jp=c(`UUID는 Go의 표준 라이브러리는 아니지만, 구글에서 제공하는 라이브러리가 있다.
다음과 같은 예제처럼 UUID를 사용할 수 있다.`),Ba=i(),Mn=e("pre"),Wa=i(),qn=e("p"),Kp=c("PostgreSQL과 같은 데이터베이스의 경우, 자체적인 UUID 타입을 사용할 수도 있다"),ja=i(),G=e("h3"),N=e("a"),Rs=e("span"),Xp=c("엔티티를 정의할 때 주의해야 할 점"),qa=i(),H=e("p"),Yp=c(`엔티티는 식별자에 중점을 두기 때문에, 데이터베이스 설계 구조가 도메인 모델 구조를 결정하게 되는 현상이 일어날 수 있다.
이러한 현상은 `),Os=e("strong"),hp=c("Anemic Domain Model"),gp=c("이라고도 하는 현상으로 이어질 수도 있다."),Za=i(),Zn=e("p"),ne=c(`Anemic Model은 도메인의 동작이 거의 없거나 없는 모델을 의미한다. 이런 경우, DDD의 이점을 얻을 수 없다.
엔티티는 Anemic Model이 될 수 있는 유력한 후보이다.
만약 그들이 애초부터 잘 식별된다면, Anemic Model을 진단하고 해결하기 쉽다.
모델이 대부분 공개 getter 및 setter 함수로 구성되어 있거나, 비즈니스 로직이 거의 없거나, 혹은 비즈니스 로직을 구현하기 위해 다양한 클라이언트에 의존하는 경우, Anemic Model이라고 볼 수 있다.`),za=i(),zn=e("p"),se=c("아래 코드는 우리의 경매 시스템에 대한 Anemic Entity의 예제이다. 코드가 좀 길어져서 따로 뺐다."),Fa=i(),dn(B.$$.fragment),Qa=i(),W=e("p"),ae=c(`이런 코드가 잘못되었다고 할 수 있는 것은 아니며, 이런 느낌의 코드를 여기저기서 많이 볼 수 있다.
하지만 이런 코드는 Domain Driven Design의 모든 이점을 얻을 수 없다.
`),Ts=e("code"),te=c("AnemicAuction"),pe=c(`를 사용하는 다른 구성은 잠재적으로 일부 속성이 무엇인지 가정하고 있다.
또한, 도메인 전문가가 의도하지 않은 대로 비즈니스 로직을 구현될 수 있다.`),Va=i(),Fn=e("p"),ee=c("따라서, 다음과 같이 리팩토링되어야 한다."),Ja=i(),dn(j.$$.fragment),Ka=i(),q=e("p"),oe=c(`간단한 예제임에도 엔티티가 비즈니스 로직을 가지고 있는 경우의 이점을 확인할 수 있다.
특히, 시간대의 일관성을 위해 UTC로 강제하는 로직이 에러 처리를 통해 잘 드러나 있다.
또한 경매 경과 시간에 대한 일관적인 정의를 위해 `),Ss=e("code"),le=c("GetAuctionElapsedDuration"),ce=c(" 함수를 사용하고 있다."),Xa=i(),Qn=e("p"),ue=c(`그렇다면 데이터베이스에 동일한 모델을 사용할 수는 없을까?
시스템이 복잡해짐에 따라 경매에 대한 추가적인 메타데이터를 저장해야 할 수도 있다.
이를테면 경매를 본 사용자의 수, 광고를 클릭해서 들어온 사용자의 수, 사용자의 경매 기록 등이다.
이러한 모든 정보는 유용하지만, 도메인 모델에 속하지는 않는다.`),Ya=i(),ha=e("br"),ga=i(),Z=e("h3"),z=e("a"),Us=e("span"),ie=c("ORM을 사용할 때 주의할 점"),nt=i(),Vn=e("p"),re=c(`ORM(Object Relational Mapping)은 데이터베이스 영속성을 관리하기 위해 사용되는 방식으로, DDD의 개념은 아니지만 널리 사용되고 있다.
Golang에서는 GORM이라는 ORM 라이브러리가 가장 유명하다.
ORM을 사용함으로써 발생하는 문제점이 있긴 하지만, ORM을 처리하면 쿼리 생성 및 처리에 대한 제어 권한을 위임하게 된다.`),st=i(),Jn=e("p"),ke=c(`ORM을 DDD와 함께 사용하려면 ORM이 DDD 컨텍스트에서 엔티티를 작성하는 것을 제어할 수 없게 해야 한다. 그렇지 않으면 Anemic Model이 될 수 있다.
또한 엔티티와 ORM의 결합도를 낮추기 위해, ORM 계층과 엔티티 계층 사이에 이전 포스트에서 다루었던 어댑터 계층을 추가하는 것이 좋다.`),at=i(),tt=e("br"),pt=e("br"),et=i(),F=e("h2"),Q=e("a"),xs=e("span"),fe=c("밸류 오브젝트"),ot=i(),Kn=e("p"),me=c(`밸류 오브젝트는 엔티티와 다르게 식별자가 없고, 풍부한 도메인 모델을 만들기 위해 엔티티, 애그리거트와 함께 사용된다.
일반적으로 도메인에 대한 것을 측정, 정량화, 설명하는 데 사용된다.`),lt=i(),V=e("p"),de=c(`밸류 오브젝트를 이해하는데 도움이 되는 Golang 코드를 작성해보고자 한다.
먼저, `),Cs=e("code"),Ee=c("Point"),ve=c("라는 구조체와 생성 함수를 정의한다."),ct=i(),dn(J.$$.fragment),ut=i(),Xn=e("p"),_e=c("그리고 같은 좌표를 가진 두 점이 같은지 확인하는 테스트도 함께 작성한다."),it=i(),dn(K.$$.fragment),rt=i(),Yn=e("p"),we=c("직관적으로 두 점은 동일하다는 사실을 알 수 있지만, 이 테스트는 실패한다."),kt=i(),Rn=e("pre"),ft=i(),b=e("p"),ye=c(`이 테스트는 왜 실패할까?
Go에서 `),Ls=e("code"),De=c("&"),be=c(` 기호를 사용하는 경우, A와 B가 저장되는 메모리 주소를 가리키는 포인터가 생성된다.
따라서 `),Gs=e("code"),Pe=c("a"),$e=c("와 "),Ns=e("code"),Ae=c("b"),Ie=c("는 서로 다른 메모리 주소를 가리키고 있기 때문에 동일하지 않다고 판단한다."),mt=i(),hn=e("p"),Me=c("그렇다면 포인터 생성 함수를 이렇게 변경해보자"),dt=i(),On=e("pre"),Et=i(),gn=e("p"),Re=c(`이제 테스트를 실행하면 통과하는 것을 알 수 있다. 이제 포인터의 메모리 주소값이 아닌 구조체의 값을 비교하기 때문이다.
이러한 경우 이들은 밸류 오브젝트라고 볼 수 있다. 동일한 값을 가지는 경우 동일하다고 판단된다.`),vt=i(),D=e("p"),Hs=e("code"),Oe=c("Point"),Te=c(" 구조체에서 "),Bs=e("code"),Se=c("x"),Ue=c("와 "),Ws=e("code"),xe=c("y"),Ce=c("는 소문자로 시작하는데, 이는 "),js=e("code"),Le=c("Point"),Ge=c(`가 패키지 외부에서 사용되지 않게 하기 위함이다.
밸류 오브젝트에서도 또한 마찬가지로, 필드값이 변경되지 않도록 하는 것이 좋다.`),_t=i(),X=e("p"),Ne=c("밸류 오브젝트는 대체 가능성이 있다. 우리가 게임을 작성하고, 플레이어의 현재 위치를 나타내기 위해 "),qs=e("code"),He=c("Point"),Be=c(`를 사용한다고 가정해보자.
다음과 같이 플레이어가 이동하는 코드를 작성할 수 있다.`),wt=i(),dn(Y.$$.fragment),yt=i(),I=e("p"),We=c("여기서 "),Zs=e("code"),je=c("Point"),qe=c(`는 플레이어의 위치를 나타낸다.
밸류 오브젝트의 교체 가능성을 이용하여, 플레이어가 움직일 때마다 플레이어의 위치를 나타내는 지점을 완전히 새로운 값으로 업데이트할 수 있다.
또한 `),zs=e("code"),Ze=c("move"),ze=c(" 함수는 side effect가 존재하지 않는 함수임을 알 수 있다."),Dt=i(),ns=e("p"),Fe=c(`불변성과 side effect가 없는 함수를 작성하였기 때문에, 값을 추론하고 유닛 테스트를 작성하기가 쉬워진다.
따라서, 장기적인 시스템의 유지보수성을 높일 수 있다.`),bt=i(),Pt=e("br"),$t=i(),h=e("h3"),g=e("a"),Fs=e("span"),Qe=c("언제 엔티티를 사용하고, 언제 밸류 오브젝트를 사용해야 할까?"),At=i(),ss=e("p"),Ve=c(`도메인을 모델링할 때, 가능한 한 밸류 오브젝트를 사용하는 것이 좋다.
밸류 오브젝트는 제대로 구현되었을 때, 가장 안전한 구조체이기 때문이다.
의도하지 않은 방식으로 인스턴스를 잘못 수정하는 사용자들을 걱정할 필요가 없어진다.`),It=i(),as=e("p"),Je=c(`또한 객체의 값에만 관심이 있다면 밸류 오브젝트를 사용해야 한다.
밸류 오브젝트가 적절한 경우이려면, 다음과 같은 조건을 모두 충족시켜야 한다.`),Mt=i(),M=e("ul"),Qs=e("li"),Ke=c("객체를 불변적으로 취급해야 할 때"),Xe=i(),Vs=e("li"),Ye=c("도메인 개념을 나타내거나, 측정하거나, 정량화해야 할 때"),he=i(),Js=e("li"),ge=c("값으로 동일한 타입의 다른 객체와 비교할 수 있을 때"),Rt=i(),ts=e("p"),no=c("모든 조건이 충족된다면 밸류 오브젝트가 적절한 선택이 될 것이다."),Ot=i(),ps=e("p"),so=c(`마치 모든 것이 밸류 오브젝트가 되어야 한다고 말하는 것처럼 보일 수 있지만, 실제로 그게 나쁜 아이디어는 아니다.
부적합한게 아니라면 최대한 많은 것들을 밸류 오브젝트로 만드는 것이 좋다.
부적합하다고 판단이 들면 그 때 엔티티로 변경한다`),Tt=i(),St=e("br"),Ut=e("br"),xt=i(),nn=e("h3"),sn=e("a"),Ks=e("span"),ao=c("애그리거트"),Ct=i(),es=e("p"),to=c(`애그리거트는 Domain Driven Design에서 가장 어려운 개념 중 하나로, 잘못 구현되는 경우가 많다.
코드를 조직화하는데 도움이 된다면 좋지만, 잘못 구현되면 개발 속도를 늦추고 일관성을 해치는 요소가 될 수 있다.`),Lt=i(),os=e("p"),po=c(`애그리거트는 일부 동작에 대해 한 그룹으로 묶을 수 있는 도메인의 집합이다.
예를 들면, 각각의 직원들에 대한 도메인 오브젝트가 있지만 이들을 팀으로 묶는다면 부서 구성과 같은 상황에서 유용할 것이다.
또한, 다양한 통화나 카드, 가상화폐를 묶어 지갑으로 관리할 수도 있으며, 이 경우 지갑이 애그리거트가 된다.`),Gt=i(),ls=e("p"),eo=c(`애그리거트는 array, map, slice 등 데이터 컬렉션 타입과 헷갈리기도 하는데, 이들은 동일한 개념이 아니다.
애그리거트는 컬렉션을 사용할 수도 있지만, 애그리거트는 DDD 개념이기 때문에 일반적으로 여러 컬렉션, 필드, 함수, 메서드 등을 포함한다.`),Nt=i(),cs=e("p"),oo=c(`애그리거트의 주된 역할은 포함된 도매인 개체끼리의 트랜잭션 경계를 정의하는 것이다.
개체에 대한 CRUD는 애그리거트 전체에 걸쳐 일어나거나, 또는 전혀 일어나지 않아야 한다.
이를테면 새로운 직원이 팀에 입사하면, 직속 관리자 구조를 업데이트해야 할 수 있다.
그리고 사용자가 지갑에 새로운 카드를 추가하면, 해당 카드의 잔액이 지갑의 전체 잔액에 반영되어야 한다.`),Ht=i(),us=e("p"),lo=c("애그리거트는 다음과 같이 구현할 수 있다."),Bt=i(),dn(an.$$.fragment),Wt=i(),v=e("p"),co=c("위 코드에서 "),Xs=e("code"),uo=c("Wallet"),io=c(" 구조체의 "),Ys=e("code"),ro=c("id"),ko=c(`는 애그리거트 루트이며, 지갑의 식별자이다.
`),hs=e("code"),fo=c("ownerId"),mo=c(`는 지갑을 소유하는 엔티티의 식별자이다. 소유자에 대한 모든 정보를 포함할 필요는 없으며, 필요할 때 가져올 수 있게끔 소유자의 식별자만 있으면 된다.
`),gs=e("code"),Eo=c("walletItems"),vo=c("는 "),na=e("code"),_o=c("WalletItem"),wo=c("의 집합이며, "),sa=e("code"),yo=c("WalletItem"),Do=c("은 다른 곳에서 정의한 엔티티이므로 여기서는 인터페이스로 정의한다."),jt=i(),qt=e("br"),Zt=i(),tn=e("h3"),pn=e("a"),aa=e("span"),bo=c("애그리거트 찾기"),zt=i(),is=e("p"),Po=c(`Domain Driven Design에서 가장 어려운 작업 중 하나는 어떤 타임을 언제 쓸 지 결정하는 것이다.
도메인 모델을 애그리거트로 클러스터링 하려면, 먼저 제한된 컨텍스트의 불변성을 이해해야 한다.
불변성은 도메인에서 반드시 참이어야 하는 규칙이다.
이를테면 시스템에서 주문을 생성하려면 상품의 재고가 충분해야 한다.
이는 비즈니스적인 불변성이며, 재고가 없는 경우 고객에게 약속할 수 없다.`),Ft=i(),en=e("p"),$o=c(`애그리거트에서는 eventually consistency가 아닌 transactional consistency가 필요하다.
애그리거트에 대한 변경 사항은 즉각적이고 atomic해야 한다.
따라서 애그리거트를 `),ta=e("em"),Ao=c("transactional consistency boundary"),Io=c(`라고 봐도 무방하다.
도메인 내에서 변경 사항이 생길 때마다, 이상적으로는 트랜잭션당 단 하나의 애그리거트만 수정해야 한다.`),Qt=i(),Vt=e("br"),Jt=i(),on=e("h3"),ln=e("a"),pa=e("span"),Mo=c("애그리거트 디자인"),Kt=i(),rs=e("p"),Ro=c(`일반적으로 애그리거트는 작을수록 좋다.
애그리거트가 작을수록 시스템의 유연성이 높아지고, 성능이 향상되며, 트랜잭션의 성공률이 높아진다.`),Xt=i(),cn=e("p"),Oo=c(`여러 명의 사용자가 동시에 동일한 주문을 하려 하는 상황을 떠올려보자.
먼저, `),ea=e("em"),To=c("주문"),So=c(" 애그리거트를 다음과 같이 정의할 수 있다."),Yt=i(),Tn=e("pre"),ht=i(),_=e("p"),Uo=c("이 "),oa=e("code"),xo=c("Order"),Co=c(` 구조체는 보기엔 괜찮아 보이고, 일반적인 주문 흐름과 유사해 보인다.
하지만, 이 애그리거트에 `),la=e("code"),Lo=c("marketingOptIn"),Go=c(` 필드를 추가하는 것은 부적절하다.
제한된 컨텍스트 관점에서 이 애그리거트에 `),ca=e("code"),No=c("marketingOptIn"),Ho=c(`은 주문 객체와 관련이 없고,
사용자가 주문 시작과 완료 사이에 마케팅을 거부하면 주문이 완료되지 않길 원하기 때문이다.
따라서 `),ua=e("code"),Bo=c("marketingOptIn"),Wo=c(" 필드를 제거하는 것이 바람직하다."),gt=i(),ks=e("p"),jo=c("물론 UI에서 마케팅 선택 확인란 자체를 제거하라는 게 아니라, 단지 애그리거트와 트랜잭션 흐름에서 디커플링되어야 한다는 것이다."),np=i(),sp=e("br"),ap=i(),un=e("h3"),rn=e("a"),ia=e("span"),qo=c("한 개 이상의 제한된 컨텍스트에 걸친 애그리거트"),tp=i(),fs=e("p"),Zo=c(`비즈니스 규모에서 제한된 컨텍스트가 변경되거나, 하위 시스템에 대한 알림이 필요한 상황이 있을 수 있다.
여러 제한된 컨텍스트에 걸치는 경우에는 eventual consistency를 목표로 해야 한다.
즉, 다른 시스템이 우리가 보낸 이벤트를 적절히 잘 받아서 처리할 것이라고 기대할 뿐, 제한된 컨텍스트 안에서 하는 것처럼 atomic하게 처리하는 것을 기대하면 안된다.
이를 통해 더 강력한 복원력과 확장 가능성을 가진 분리된 시스템으로 발전할 수 있다(마이크로서비스!).`),pp=i(),ep=e("br"),op=e("br"),lp=i(),kn=e("h2"),fn=e("a"),ra=e("span"),zo=c("References"),cp=i(),up=e("hr"),ip=i(),P=e("center"),ka=e("p"),Fo=c("["),Qo=i(),dn(Sn.$$.fragment),Vo=c(`
](https://learning.oreilly.com/library/view/domain-driven-design-with/9781804613450/) `),Jo=e("br"),Ko=c(`
[Matthew Boyle, Domain-Driven Design with Golang』, O'Reilly Media, Inc.](https://learning.oreilly.com/library/view/domain-driven-design-with/9781804613450/)`),this.h()},l(n){f=o(n,"H2",{id:!0});var a=l(f);E=o(a,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var fa=l(E);m=o(fa,"SPAN",{class:!0}),l(m).forEach(s),fa.forEach(s),d=u(a,"엔티티"),a.forEach(s),va=r(n),S=o(n,"P",{});var Un=l(S);Dp=u(Un,"Domain Driven Design에서, "),ws=o(Un,"STRONG",{});var ma=l(ws);bp=u(ma,"엔티티"),ma.forEach(s),Pp=u(Un,`는 ID로 정의된다. 그들의 속성이 변하더라도, 식별자는 변하지 않는다.
엔티티가 처음과 비교하여 많이 달라져서 구분이 불가능하더라도, 식별자가 같다면 같은 엔티티이다.`),Un.forEach(s),_a=r(n),Cn=o(n,"P",{});var da=l(Cn);$p=u(da,`예를 들며 살펴보자.
이베이에서는 유저로 회원가입을 할 수 있다. 만약 무언가를 판매하고자 한다면, 판매자가 된다.
또한 항목에 입찰을 할 수도 있다. 이러한 서비스의 도메인 모델은 다음 사진과 같다.`),da.forEach(s),wa=r(n),En(Dn.$$.fragment,n),ya=r(n),Ln=o(n,"P",{});var Ea=l(Ln);Ap=u(Ea,"시스템에서는 다음과 같은 동작이 일어날 수 있다."),Ea.forEach(s),Da=r(n),$=o(n,"UL",{});var O=l($);ys=o(O,"LI",{});var ol=l(ys);Ip=u(ol,"유저가 주소를 변경한다."),ol.forEach(s),Mp=r(O),Ds=o(O,"LI",{});var ll=l(Ds);Rp=u(ll,"유저가 이메일 주소를 변경한다."),ll.forEach(s),Op=r(O),bs=o(O,"LI",{});var cl=l(bs);Tp=u(cl,"경매 종료 시각이 변경된다."),cl.forEach(s),O.forEach(s),ba=r(n),Gn=o(n,"P",{});var ul=l(Gn);Sp=u(ul,"이러한 동작은 엔티티의 식별자를 변경하지 않는다. 동일한 ID를 참조하지만, 그들의 속성은 변경될 수 있다."),ul.forEach(s),Pa=r(n),Nn=o(n,"P",{});var il=l(Nn);Up=u(il,"이와 같은 경매 시스템의 엔티티를 구현하면 다음과 같다."),il.forEach(s),$a=r(n),bn=o(n,"PRE",{class:!0});var jc=l(bn);jc.forEach(s),Aa=r(n),A=o(n,"P",{});var ms=l(A);xp=u(ms,"위 예제에서, "),Ps=o(ms,"CODE",{});var rl=l(Ps);Cp=u(rl,"int"),rl.forEach(s),Lp=u(ms," 타입의 "),$s=o(ms,"CODE",{});var kl=l($s);Gp=u(kl,"ID"),kl.forEach(s),Np=u(ms,`는 엔티티의 식별자를 나타낸다.
엔티티 ID는 반드시 시스템에서 생성되어야 하는 것은 아니며, 엔티티 속성의 일부를 나타낼 수도 있다.
이를테면 대부분의 국가에서, 사람들을 구분하기 위해 주민등록번호를 사용한다.`),ms.forEach(s),Ia=r(n),Ma=o(n,"BR",{}),Ra=r(n),U=o(n,"H3",{id:!0});var Xo=l(U);x=o(Xo,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var fl=l(x);As=o(fl,"SPAN",{class:!0}),l(As).forEach(s),fl.forEach(s),Hp=u(Xo,"좋은 식별자 생성하기"),Xo.forEach(s),Oa=r(n),C=o(n,"P",{});var kp=l(C);Bp=u(kp,`엔티티에 대한 고유하고 적절한 생성자를 생성하는 것은 의외로 어렵다.
이전 예제에서의 ID는 `),Is=o(kp,"CODE",{});var ml=l(Is);Wp=u(ml,"int"),ml.forEach(s),jp=u(kp," 타입이었다. 대부분의 간단한 시스템에서는 이렇게 사용해도 무방하지만, 규모가 큰 시스템에서는 문제가 생기게 된다."),kp.forEach(s),Ta=r(n),Hn=o(n,"P",{});var dl=l(Hn);qp=u(dl,"예를 들어 다음과 같은 코드가 있다고 해보자."),dl.forEach(s),Sa=r(n),Pn=o(n,"PRE",{class:!0});var qc=l(Pn);qc.forEach(s),Ua=r(n),Bn=o(n,"P",{});var El=l(Bn);Zp=u(El,"이를 실행하면 다음과 같은 결과를 얻게 된다."),El.forEach(s),xa=r(n),$n=o(n,"PRE",{class:!0});var Zc=l($n);Zc.forEach(s),Ca=r(n),Wn=o(n,"P",{});var vl=l(Wn);zp=u(vl,"하지만 이러한 코드를 작성하면, 다음과 같은 문제가 발생한다."),vl.forEach(s),La=r(n),An=o(n,"PRE",{class:!0});var zc=l(An);zc.forEach(s),Ga=r(n),In=o(n,"PRE",{class:!0});var Fc=l(In);Fc.forEach(s),Na=r(n),L=o(n,"P",{});var fp=l(L);Fp=u(fp,`정수를 모두 다 써렸다! 만약 이처럼 정수를 식별자로 사용했다면, 시스템을 다시 설계해야 하는 문제가 발생했을 것이다.
따라서 엔티티의 식별자를 정할 때는 미래에 발생할 수 있는 문제를 고려하여야 한다.
일반적으로 가장 많이 고려되는 방식은 `),Ms=o(fp,"STRONG",{});var _l=l(Ms);Qp=u(_l,"UUID(Universally Unique Identifier)"),_l.forEach(s),Vp=u(fp,`를 사용하는 것이다.
UUID는 128비트 레이블로, 실질적으로 중복될 가능성이 없다.`),fp.forEach(s),Ha=r(n),jn=o(n,"P",{});var wl=l(jn);Jp=u(wl,`UUID는 Go의 표준 라이브러리는 아니지만, 구글에서 제공하는 라이브러리가 있다.
다음과 같은 예제처럼 UUID를 사용할 수 있다.`),wl.forEach(s),Ba=r(n),Mn=o(n,"PRE",{class:!0});var Qc=l(Mn);Qc.forEach(s),Wa=r(n),qn=o(n,"P",{});var yl=l(qn);Kp=u(yl,"PostgreSQL과 같은 데이터베이스의 경우, 자체적인 UUID 타입을 사용할 수도 있다"),yl.forEach(s),ja=r(n),G=o(n,"H3",{id:!0});var Yo=l(G);N=o(Yo,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Dl=l(N);Rs=o(Dl,"SPAN",{class:!0}),l(Rs).forEach(s),Dl.forEach(s),Xp=u(Yo,"엔티티를 정의할 때 주의해야 할 점"),Yo.forEach(s),qa=r(n),H=o(n,"P",{});var mp=l(H);Yp=u(mp,`엔티티는 식별자에 중점을 두기 때문에, 데이터베이스 설계 구조가 도메인 모델 구조를 결정하게 되는 현상이 일어날 수 있다.
이러한 현상은 `),Os=o(mp,"STRONG",{});var bl=l(Os);hp=u(bl,"Anemic Domain Model"),bl.forEach(s),gp=u(mp,"이라고도 하는 현상으로 이어질 수도 있다."),mp.forEach(s),Za=r(n),Zn=o(n,"P",{});var Pl=l(Zn);ne=u(Pl,`Anemic Model은 도메인의 동작이 거의 없거나 없는 모델을 의미한다. 이런 경우, DDD의 이점을 얻을 수 없다.
엔티티는 Anemic Model이 될 수 있는 유력한 후보이다.
만약 그들이 애초부터 잘 식별된다면, Anemic Model을 진단하고 해결하기 쉽다.
모델이 대부분 공개 getter 및 setter 함수로 구성되어 있거나, 비즈니스 로직이 거의 없거나, 혹은 비즈니스 로직을 구현하기 위해 다양한 클라이언트에 의존하는 경우, Anemic Model이라고 볼 수 있다.`),Pl.forEach(s),za=r(n),zn=o(n,"P",{});var $l=l(zn);se=u($l,"아래 코드는 우리의 경매 시스템에 대한 Anemic Entity의 예제이다. 코드가 좀 길어져서 따로 뺐다."),$l.forEach(s),Fa=r(n),En(B.$$.fragment,n),Qa=r(n),W=o(n,"P",{});var dp=l(W);ae=u(dp,`이런 코드가 잘못되었다고 할 수 있는 것은 아니며, 이런 느낌의 코드를 여기저기서 많이 볼 수 있다.
하지만 이런 코드는 Domain Driven Design의 모든 이점을 얻을 수 없다.
`),Ts=o(dp,"CODE",{});var Al=l(Ts);te=u(Al,"AnemicAuction"),Al.forEach(s),pe=u(dp,`를 사용하는 다른 구성은 잠재적으로 일부 속성이 무엇인지 가정하고 있다.
또한, 도메인 전문가가 의도하지 않은 대로 비즈니스 로직을 구현될 수 있다.`),dp.forEach(s),Va=r(n),Fn=o(n,"P",{});var Il=l(Fn);ee=u(Il,"따라서, 다음과 같이 리팩토링되어야 한다."),Il.forEach(s),Ja=r(n),En(j.$$.fragment,n),Ka=r(n),q=o(n,"P",{});var Ep=l(q);oe=u(Ep,`간단한 예제임에도 엔티티가 비즈니스 로직을 가지고 있는 경우의 이점을 확인할 수 있다.
특히, 시간대의 일관성을 위해 UTC로 강제하는 로직이 에러 처리를 통해 잘 드러나 있다.
또한 경매 경과 시간에 대한 일관적인 정의를 위해 `),Ss=o(Ep,"CODE",{});var Ml=l(Ss);le=u(Ml,"GetAuctionElapsedDuration"),Ml.forEach(s),ce=u(Ep," 함수를 사용하고 있다."),Ep.forEach(s),Xa=r(n),Qn=o(n,"P",{});var Rl=l(Qn);ue=u(Rl,`그렇다면 데이터베이스에 동일한 모델을 사용할 수는 없을까?
시스템이 복잡해짐에 따라 경매에 대한 추가적인 메타데이터를 저장해야 할 수도 있다.
이를테면 경매를 본 사용자의 수, 광고를 클릭해서 들어온 사용자의 수, 사용자의 경매 기록 등이다.
이러한 모든 정보는 유용하지만, 도메인 모델에 속하지는 않는다.`),Rl.forEach(s),Ya=r(n),ha=o(n,"BR",{}),ga=r(n),Z=o(n,"H3",{id:!0});var ho=l(Z);z=o(ho,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Ol=l(z);Us=o(Ol,"SPAN",{class:!0}),l(Us).forEach(s),Ol.forEach(s),ie=u(ho,"ORM을 사용할 때 주의할 점"),ho.forEach(s),nt=r(n),Vn=o(n,"P",{});var Tl=l(Vn);re=u(Tl,`ORM(Object Relational Mapping)은 데이터베이스 영속성을 관리하기 위해 사용되는 방식으로, DDD의 개념은 아니지만 널리 사용되고 있다.
Golang에서는 GORM이라는 ORM 라이브러리가 가장 유명하다.
ORM을 사용함으로써 발생하는 문제점이 있긴 하지만, ORM을 처리하면 쿼리 생성 및 처리에 대한 제어 권한을 위임하게 된다.`),Tl.forEach(s),st=r(n),Jn=o(n,"P",{});var Sl=l(Jn);ke=u(Sl,`ORM을 DDD와 함께 사용하려면 ORM이 DDD 컨텍스트에서 엔티티를 작성하는 것을 제어할 수 없게 해야 한다. 그렇지 않으면 Anemic Model이 될 수 있다.
또한 엔티티와 ORM의 결합도를 낮추기 위해, ORM 계층과 엔티티 계층 사이에 이전 포스트에서 다루었던 어댑터 계층을 추가하는 것이 좋다.`),Sl.forEach(s),at=r(n),tt=o(n,"BR",{}),pt=o(n,"BR",{}),et=r(n),F=o(n,"H2",{id:!0});var go=l(F);Q=o(go,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Ul=l(Q);xs=o(Ul,"SPAN",{class:!0}),l(xs).forEach(s),Ul.forEach(s),fe=u(go,"밸류 오브젝트"),go.forEach(s),ot=r(n),Kn=o(n,"P",{});var xl=l(Kn);me=u(xl,`밸류 오브젝트는 엔티티와 다르게 식별자가 없고, 풍부한 도메인 모델을 만들기 위해 엔티티, 애그리거트와 함께 사용된다.
일반적으로 도메인에 대한 것을 측정, 정량화, 설명하는 데 사용된다.`),xl.forEach(s),lt=r(n),V=o(n,"P",{});var vp=l(V);de=u(vp,`밸류 오브젝트를 이해하는데 도움이 되는 Golang 코드를 작성해보고자 한다.
먼저, `),Cs=o(vp,"CODE",{});var Cl=l(Cs);Ee=u(Cl,"Point"),Cl.forEach(s),ve=u(vp,"라는 구조체와 생성 함수를 정의한다."),vp.forEach(s),ct=r(n),En(J.$$.fragment,n),ut=r(n),Xn=o(n,"P",{});var Ll=l(Xn);_e=u(Ll,"그리고 같은 좌표를 가진 두 점이 같은지 확인하는 테스트도 함께 작성한다."),Ll.forEach(s),it=r(n),En(K.$$.fragment,n),rt=r(n),Yn=o(n,"P",{});var Gl=l(Yn);we=u(Gl,"직관적으로 두 점은 동일하다는 사실을 알 수 있지만, 이 테스트는 실패한다."),Gl.forEach(s),kt=r(n),Rn=o(n,"PRE",{class:!0});var Vc=l(Rn);Vc.forEach(s),ft=r(n),b=o(n,"P",{});var mn=l(b);ye=u(mn,`이 테스트는 왜 실패할까?
Go에서 `),Ls=o(mn,"CODE",{});var Nl=l(Ls);De=u(Nl,"&"),Nl.forEach(s),be=u(mn,` 기호를 사용하는 경우, A와 B가 저장되는 메모리 주소를 가리키는 포인터가 생성된다.
따라서 `),Gs=o(mn,"CODE",{});var Hl=l(Gs);Pe=u(Hl,"a"),Hl.forEach(s),$e=u(mn,"와 "),Ns=o(mn,"CODE",{});var Bl=l(Ns);Ae=u(Bl,"b"),Bl.forEach(s),Ie=u(mn,"는 서로 다른 메모리 주소를 가리키고 있기 때문에 동일하지 않다고 판단한다."),mn.forEach(s),mt=r(n),hn=o(n,"P",{});var Wl=l(hn);Me=u(Wl,"그렇다면 포인터 생성 함수를 이렇게 변경해보자"),Wl.forEach(s),dt=r(n),On=o(n,"PRE",{class:!0});var Jc=l(On);Jc.forEach(s),Et=r(n),gn=o(n,"P",{});var jl=l(gn);Re=u(jl,`이제 테스트를 실행하면 통과하는 것을 알 수 있다. 이제 포인터의 메모리 주소값이 아닌 구조체의 값을 비교하기 때문이다.
이러한 경우 이들은 밸류 오브젝트라고 볼 수 있다. 동일한 값을 가지는 경우 동일하다고 판단된다.`),jl.forEach(s),vt=r(n),D=o(n,"P",{});var T=l(D);Hs=o(T,"CODE",{});var ql=l(Hs);Oe=u(ql,"Point"),ql.forEach(s),Te=u(T," 구조체에서 "),Bs=o(T,"CODE",{});var Zl=l(Bs);Se=u(Zl,"x"),Zl.forEach(s),Ue=u(T,"와 "),Ws=o(T,"CODE",{});var zl=l(Ws);xe=u(zl,"y"),zl.forEach(s),Ce=u(T,"는 소문자로 시작하는데, 이는 "),js=o(T,"CODE",{});var Fl=l(js);Le=u(Fl,"Point"),Fl.forEach(s),Ge=u(T,`가 패키지 외부에서 사용되지 않게 하기 위함이다.
밸류 오브젝트에서도 또한 마찬가지로, 필드값이 변경되지 않도록 하는 것이 좋다.`),T.forEach(s),_t=r(n),X=o(n,"P",{});var _p=l(X);Ne=u(_p,"밸류 오브젝트는 대체 가능성이 있다. 우리가 게임을 작성하고, 플레이어의 현재 위치를 나타내기 위해 "),qs=o(_p,"CODE",{});var Ql=l(qs);He=u(Ql,"Point"),Ql.forEach(s),Be=u(_p,`를 사용한다고 가정해보자.
다음과 같이 플레이어가 이동하는 코드를 작성할 수 있다.`),_p.forEach(s),wt=r(n),En(Y.$$.fragment,n),yt=r(n),I=o(n,"P",{});var ds=l(I);We=u(ds,"여기서 "),Zs=o(ds,"CODE",{});var Vl=l(Zs);je=u(Vl,"Point"),Vl.forEach(s),qe=u(ds,`는 플레이어의 위치를 나타낸다.
밸류 오브젝트의 교체 가능성을 이용하여, 플레이어가 움직일 때마다 플레이어의 위치를 나타내는 지점을 완전히 새로운 값으로 업데이트할 수 있다.
또한 `),zs=o(ds,"CODE",{});var Jl=l(zs);Ze=u(Jl,"move"),Jl.forEach(s),ze=u(ds," 함수는 side effect가 존재하지 않는 함수임을 알 수 있다."),ds.forEach(s),Dt=r(n),ns=o(n,"P",{});var Kl=l(ns);Fe=u(Kl,`불변성과 side effect가 없는 함수를 작성하였기 때문에, 값을 추론하고 유닛 테스트를 작성하기가 쉬워진다.
따라서, 장기적인 시스템의 유지보수성을 높일 수 있다.`),Kl.forEach(s),bt=r(n),Pt=o(n,"BR",{}),$t=r(n),h=o(n,"H3",{id:!0});var nl=l(h);g=o(nl,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Xl=l(g);Fs=o(Xl,"SPAN",{class:!0}),l(Fs).forEach(s),Xl.forEach(s),Qe=u(nl,"언제 엔티티를 사용하고, 언제 밸류 오브젝트를 사용해야 할까?"),nl.forEach(s),At=r(n),ss=o(n,"P",{});var Yl=l(ss);Ve=u(Yl,`도메인을 모델링할 때, 가능한 한 밸류 오브젝트를 사용하는 것이 좋다.
밸류 오브젝트는 제대로 구현되었을 때, 가장 안전한 구조체이기 때문이다.
의도하지 않은 방식으로 인스턴스를 잘못 수정하는 사용자들을 걱정할 필요가 없어진다.`),Yl.forEach(s),It=r(n),as=o(n,"P",{});var hl=l(as);Je=u(hl,`또한 객체의 값에만 관심이 있다면 밸류 오브젝트를 사용해야 한다.
밸류 오브젝트가 적절한 경우이려면, 다음과 같은 조건을 모두 충족시켜야 한다.`),hl.forEach(s),Mt=r(n),M=o(n,"UL",{});var Es=l(M);Qs=o(Es,"LI",{});var gl=l(Qs);Ke=u(gl,"객체를 불변적으로 취급해야 할 때"),gl.forEach(s),Xe=r(Es),Vs=o(Es,"LI",{});var nc=l(Vs);Ye=u(nc,"도메인 개념을 나타내거나, 측정하거나, 정량화해야 할 때"),nc.forEach(s),he=r(Es),Js=o(Es,"LI",{});var sc=l(Js);ge=u(sc,"값으로 동일한 타입의 다른 객체와 비교할 수 있을 때"),sc.forEach(s),Es.forEach(s),Rt=r(n),ts=o(n,"P",{});var ac=l(ts);no=u(ac,"모든 조건이 충족된다면 밸류 오브젝트가 적절한 선택이 될 것이다."),ac.forEach(s),Ot=r(n),ps=o(n,"P",{});var tc=l(ps);so=u(tc,`마치 모든 것이 밸류 오브젝트가 되어야 한다고 말하는 것처럼 보일 수 있지만, 실제로 그게 나쁜 아이디어는 아니다.
부적합한게 아니라면 최대한 많은 것들을 밸류 오브젝트로 만드는 것이 좋다.
부적합하다고 판단이 들면 그 때 엔티티로 변경한다`),tc.forEach(s),Tt=r(n),St=o(n,"BR",{}),Ut=o(n,"BR",{}),xt=r(n),nn=o(n,"H3",{id:!0});var sl=l(nn);sn=o(sl,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var pc=l(sn);Ks=o(pc,"SPAN",{class:!0}),l(Ks).forEach(s),pc.forEach(s),ao=u(sl,"애그리거트"),sl.forEach(s),Ct=r(n),es=o(n,"P",{});var ec=l(es);to=u(ec,`애그리거트는 Domain Driven Design에서 가장 어려운 개념 중 하나로, 잘못 구현되는 경우가 많다.
코드를 조직화하는데 도움이 된다면 좋지만, 잘못 구현되면 개발 속도를 늦추고 일관성을 해치는 요소가 될 수 있다.`),ec.forEach(s),Lt=r(n),os=o(n,"P",{});var oc=l(os);po=u(oc,`애그리거트는 일부 동작에 대해 한 그룹으로 묶을 수 있는 도메인의 집합이다.
예를 들면, 각각의 직원들에 대한 도메인 오브젝트가 있지만 이들을 팀으로 묶는다면 부서 구성과 같은 상황에서 유용할 것이다.
또한, 다양한 통화나 카드, 가상화폐를 묶어 지갑으로 관리할 수도 있으며, 이 경우 지갑이 애그리거트가 된다.`),oc.forEach(s),Gt=r(n),ls=o(n,"P",{});var lc=l(ls);eo=u(lc,`애그리거트는 array, map, slice 등 데이터 컬렉션 타입과 헷갈리기도 하는데, 이들은 동일한 개념이 아니다.
애그리거트는 컬렉션을 사용할 수도 있지만, 애그리거트는 DDD 개념이기 때문에 일반적으로 여러 컬렉션, 필드, 함수, 메서드 등을 포함한다.`),lc.forEach(s),Nt=r(n),cs=o(n,"P",{});var cc=l(cs);oo=u(cc,`애그리거트의 주된 역할은 포함된 도매인 개체끼리의 트랜잭션 경계를 정의하는 것이다.
개체에 대한 CRUD는 애그리거트 전체에 걸쳐 일어나거나, 또는 전혀 일어나지 않아야 한다.
이를테면 새로운 직원이 팀에 입사하면, 직속 관리자 구조를 업데이트해야 할 수 있다.
그리고 사용자가 지갑에 새로운 카드를 추가하면, 해당 카드의 잔액이 지갑의 전체 잔액에 반영되어야 한다.`),cc.forEach(s),Ht=r(n),us=o(n,"P",{});var uc=l(us);lo=u(uc,"애그리거트는 다음과 같이 구현할 수 있다."),uc.forEach(s),Bt=r(n),En(an.$$.fragment,n),Wt=r(n),v=o(n,"P",{});var w=l(v);co=u(w,"위 코드에서 "),Xs=o(w,"CODE",{});var ic=l(Xs);uo=u(ic,"Wallet"),ic.forEach(s),io=u(w," 구조체의 "),Ys=o(w,"CODE",{});var rc=l(Ys);ro=u(rc,"id"),rc.forEach(s),ko=u(w,`는 애그리거트 루트이며, 지갑의 식별자이다.
`),hs=o(w,"CODE",{});var kc=l(hs);fo=u(kc,"ownerId"),kc.forEach(s),mo=u(w,`는 지갑을 소유하는 엔티티의 식별자이다. 소유자에 대한 모든 정보를 포함할 필요는 없으며, 필요할 때 가져올 수 있게끔 소유자의 식별자만 있으면 된다.
`),gs=o(w,"CODE",{});var fc=l(gs);Eo=u(fc,"walletItems"),fc.forEach(s),vo=u(w,"는 "),na=o(w,"CODE",{});var mc=l(na);_o=u(mc,"WalletItem"),mc.forEach(s),wo=u(w,"의 집합이며, "),sa=o(w,"CODE",{});var dc=l(sa);yo=u(dc,"WalletItem"),dc.forEach(s),Do=u(w,"은 다른 곳에서 정의한 엔티티이므로 여기서는 인터페이스로 정의한다."),w.forEach(s),jt=r(n),qt=o(n,"BR",{}),Zt=r(n),tn=o(n,"H3",{id:!0});var al=l(tn);pn=o(al,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Ec=l(pn);aa=o(Ec,"SPAN",{class:!0}),l(aa).forEach(s),Ec.forEach(s),bo=u(al,"애그리거트 찾기"),al.forEach(s),zt=r(n),is=o(n,"P",{});var vc=l(is);Po=u(vc,`Domain Driven Design에서 가장 어려운 작업 중 하나는 어떤 타임을 언제 쓸 지 결정하는 것이다.
도메인 모델을 애그리거트로 클러스터링 하려면, 먼저 제한된 컨텍스트의 불변성을 이해해야 한다.
불변성은 도메인에서 반드시 참이어야 하는 규칙이다.
이를테면 시스템에서 주문을 생성하려면 상품의 재고가 충분해야 한다.
이는 비즈니스적인 불변성이며, 재고가 없는 경우 고객에게 약속할 수 없다.`),vc.forEach(s),Ft=r(n),en=o(n,"P",{});var wp=l(en);$o=u(wp,`애그리거트에서는 eventually consistency가 아닌 transactional consistency가 필요하다.
애그리거트에 대한 변경 사항은 즉각적이고 atomic해야 한다.
따라서 애그리거트를 `),ta=o(wp,"EM",{});var _c=l(ta);Ao=u(_c,"transactional consistency boundary"),_c.forEach(s),Io=u(wp,`라고 봐도 무방하다.
도메인 내에서 변경 사항이 생길 때마다, 이상적으로는 트랜잭션당 단 하나의 애그리거트만 수정해야 한다.`),wp.forEach(s),Qt=r(n),Vt=o(n,"BR",{}),Jt=r(n),on=o(n,"H3",{id:!0});var tl=l(on);ln=o(tl,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var wc=l(ln);pa=o(wc,"SPAN",{class:!0}),l(pa).forEach(s),wc.forEach(s),Mo=u(tl,"애그리거트 디자인"),tl.forEach(s),Kt=r(n),rs=o(n,"P",{});var yc=l(rs);Ro=u(yc,`일반적으로 애그리거트는 작을수록 좋다.
애그리거트가 작을수록 시스템의 유연성이 높아지고, 성능이 향상되며, 트랜잭션의 성공률이 높아진다.`),yc.forEach(s),Xt=r(n),cn=o(n,"P",{});var yp=l(cn);Oo=u(yp,`여러 명의 사용자가 동시에 동일한 주문을 하려 하는 상황을 떠올려보자.
먼저, `),ea=o(yp,"EM",{});var Dc=l(ea);To=u(Dc,"주문"),Dc.forEach(s),So=u(yp," 애그리거트를 다음과 같이 정의할 수 있다."),yp.forEach(s),Yt=r(n),Tn=o(n,"PRE",{class:!0});var Kc=l(Tn);Kc.forEach(s),ht=r(n),_=o(n,"P",{});var R=l(_);Uo=u(R,"이 "),oa=o(R,"CODE",{});var bc=l(oa);xo=u(bc,"Order"),bc.forEach(s),Co=u(R,` 구조체는 보기엔 괜찮아 보이고, 일반적인 주문 흐름과 유사해 보인다.
하지만, 이 애그리거트에 `),la=o(R,"CODE",{});var Pc=l(la);Lo=u(Pc,"marketingOptIn"),Pc.forEach(s),Go=u(R,` 필드를 추가하는 것은 부적절하다.
제한된 컨텍스트 관점에서 이 애그리거트에 `),ca=o(R,"CODE",{});var $c=l(ca);No=u($c,"marketingOptIn"),$c.forEach(s),Ho=u(R,`은 주문 객체와 관련이 없고,
사용자가 주문 시작과 완료 사이에 마케팅을 거부하면 주문이 완료되지 않길 원하기 때문이다.
따라서 `),ua=o(R,"CODE",{});var Ac=l(ua);Bo=u(Ac,"marketingOptIn"),Ac.forEach(s),Wo=u(R," 필드를 제거하는 것이 바람직하다."),R.forEach(s),gt=r(n),ks=o(n,"P",{});var Ic=l(ks);jo=u(Ic,"물론 UI에서 마케팅 선택 확인란 자체를 제거하라는 게 아니라, 단지 애그리거트와 트랜잭션 흐름에서 디커플링되어야 한다는 것이다."),Ic.forEach(s),np=r(n),sp=o(n,"BR",{}),ap=r(n),un=o(n,"H3",{id:!0});var pl=l(un);rn=o(pl,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Mc=l(rn);ia=o(Mc,"SPAN",{class:!0}),l(ia).forEach(s),Mc.forEach(s),qo=u(pl,"한 개 이상의 제한된 컨텍스트에 걸친 애그리거트"),pl.forEach(s),tp=r(n),fs=o(n,"P",{});var Rc=l(fs);Zo=u(Rc,`비즈니스 규모에서 제한된 컨텍스트가 변경되거나, 하위 시스템에 대한 알림이 필요한 상황이 있을 수 있다.
여러 제한된 컨텍스트에 걸치는 경우에는 eventual consistency를 목표로 해야 한다.
즉, 다른 시스템이 우리가 보낸 이벤트를 적절히 잘 받아서 처리할 것이라고 기대할 뿐, 제한된 컨텍스트 안에서 하는 것처럼 atomic하게 처리하는 것을 기대하면 안된다.
이를 통해 더 강력한 복원력과 확장 가능성을 가진 분리된 시스템으로 발전할 수 있다(마이크로서비스!).`),Rc.forEach(s),pp=r(n),ep=o(n,"BR",{}),op=o(n,"BR",{}),lp=r(n),kn=o(n,"H2",{id:!0});var el=l(kn);fn=o(el,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Oc=l(fn);ra=o(Oc,"SPAN",{class:!0}),l(ra).forEach(s),Oc.forEach(s),zo=u(el,"References"),el.forEach(s),cp=r(n),up=o(n,"HR",{}),ip=r(n),P=o(n,"CENTER",{});var xn=l(P);ka=o(xn,"P",{});var Tc=l(ka);Fo=u(Tc,"["),Tc.forEach(s),Qo=r(xn),En(Sn.$$.fragment,xn),Vo=u(xn,`
](https://learning.oreilly.com/library/view/domain-driven-design-with/9781804613450/) `),Jo=o(xn,"BR",{}),Ko=u(xn,`
[Matthew Boyle, Domain-Driven Design with Golang』, O'Reilly Media, Inc.](https://learning.oreilly.com/library/view/domain-driven-design-with/9781804613450/)`),xn.forEach(s),this.h()},h(){k(m,"class","icon icon-link"),k(E,"aria-hidden","true"),k(E,"tabindex","-1"),k(E,"href","#엔티티"),k(f,"id","엔티티"),k(bn,"class","language-go"),k(As,"class","icon icon-link"),k(x,"aria-hidden","true"),k(x,"tabindex","-1"),k(x,"href","#좋은-식별자-생성하기"),k(U,"id","좋은-식별자-생성하기"),k(Pn,"class","language-go"),k($n,"class","language-text"),k(An,"class","language-go"),k(In,"class","language-text"),k(Mn,"class","language-go"),k(Rs,"class","icon icon-link"),k(N,"aria-hidden","true"),k(N,"tabindex","-1"),k(N,"href","#엔티티를-정의할-때-주의해야-할-점"),k(G,"id","엔티티를-정의할-때-주의해야-할-점"),k(Us,"class","icon icon-link"),k(z,"aria-hidden","true"),k(z,"tabindex","-1"),k(z,"href","#orm을-사용할-때-주의할-점"),k(Z,"id","orm을-사용할-때-주의할-점"),k(xs,"class","icon icon-link"),k(Q,"aria-hidden","true"),k(Q,"tabindex","-1"),k(Q,"href","#밸류-오브젝트"),k(F,"id","밸류-오브젝트"),k(Rn,"class","language-bash"),k(On,"class","language-go"),k(Fs,"class","icon icon-link"),k(g,"aria-hidden","true"),k(g,"tabindex","-1"),k(g,"href","#언제-엔티티를-사용하고-언제-밸류-오브젝트를-사용해야-할까"),k(h,"id","언제-엔티티를-사용하고-언제-밸류-오브젝트를-사용해야-할까"),k(Ks,"class","icon icon-link"),k(sn,"aria-hidden","true"),k(sn,"tabindex","-1"),k(sn,"href","#애그리거트"),k(nn,"id","애그리거트"),k(aa,"class","icon icon-link"),k(pn,"aria-hidden","true"),k(pn,"tabindex","-1"),k(pn,"href","#애그리거트-찾기"),k(tn,"id","애그리거트-찾기"),k(pa,"class","icon icon-link"),k(ln,"aria-hidden","true"),k(ln,"tabindex","-1"),k(ln,"href","#애그리거트-디자인"),k(on,"id","애그리거트-디자인"),k(Tn,"class","language-go"),k(ia,"class","icon icon-link"),k(rn,"aria-hidden","true"),k(rn,"tabindex","-1"),k(rn,"href","#한-개-이상의-제한된-컨텍스트에-걸친-애그리거트"),k(un,"id","한-개-이상의-제한된-컨텍스트에-걸친-애그리거트"),k(ra,"class","icon icon-link"),k(fn,"aria-hidden","true"),k(fn,"tabindex","-1"),k(fn,"href","#references"),k(kn,"id","references")},m(n,a){p(n,f,a),t(f,E),t(E,m),t(f,d),p(n,va,a),p(n,S,a),t(S,Dp),t(S,ws),t(ws,bp),t(S,Pp),p(n,_a,a),p(n,Cn,a),t(Cn,$p),p(n,wa,a),vn(Dn,n,a),p(n,ya,a),p(n,Ln,a),t(Ln,Ap),p(n,Da,a),p(n,$,a),t($,ys),t(ys,Ip),t($,Mp),t($,Ds),t(Ds,Rp),t($,Op),t($,bs),t(bs,Tp),p(n,ba,a),p(n,Gn,a),t(Gn,Sp),p(n,Pa,a),p(n,Nn,a),t(Nn,Up),p(n,$a,a),p(n,bn,a),bn.innerHTML=Uc,p(n,Aa,a),p(n,A,a),t(A,xp),t(A,Ps),t(Ps,Cp),t(A,Lp),t(A,$s),t($s,Gp),t(A,Np),p(n,Ia,a),p(n,Ma,a),p(n,Ra,a),p(n,U,a),t(U,x),t(x,As),t(U,Hp),p(n,Oa,a),p(n,C,a),t(C,Bp),t(C,Is),t(Is,Wp),t(C,jp),p(n,Ta,a),p(n,Hn,a),t(Hn,qp),p(n,Sa,a),p(n,Pn,a),Pn.innerHTML=xc,p(n,Ua,a),p(n,Bn,a),t(Bn,Zp),p(n,xa,a),p(n,$n,a),$n.innerHTML=Cc,p(n,Ca,a),p(n,Wn,a),t(Wn,zp),p(n,La,a),p(n,An,a),An.innerHTML=Lc,p(n,Ga,a),p(n,In,a),In.innerHTML=Gc,p(n,Na,a),p(n,L,a),t(L,Fp),t(L,Ms),t(Ms,Qp),t(L,Vp),p(n,Ha,a),p(n,jn,a),t(jn,Jp),p(n,Ba,a),p(n,Mn,a),Mn.innerHTML=Nc,p(n,Wa,a),p(n,qn,a),t(qn,Kp),p(n,ja,a),p(n,G,a),t(G,N),t(N,Rs),t(G,Xp),p(n,qa,a),p(n,H,a),t(H,Yp),t(H,Os),t(Os,hp),t(H,gp),p(n,Za,a),p(n,Zn,a),t(Zn,ne),p(n,za,a),p(n,zn,a),t(zn,se),p(n,Fa,a),vn(B,n,a),p(n,Qa,a),p(n,W,a),t(W,ae),t(W,Ts),t(Ts,te),t(W,pe),p(n,Va,a),p(n,Fn,a),t(Fn,ee),p(n,Ja,a),vn(j,n,a),p(n,Ka,a),p(n,q,a),t(q,oe),t(q,Ss),t(Ss,le),t(q,ce),p(n,Xa,a),p(n,Qn,a),t(Qn,ue),p(n,Ya,a),p(n,ha,a),p(n,ga,a),p(n,Z,a),t(Z,z),t(z,Us),t(Z,ie),p(n,nt,a),p(n,Vn,a),t(Vn,re),p(n,st,a),p(n,Jn,a),t(Jn,ke),p(n,at,a),p(n,tt,a),p(n,pt,a),p(n,et,a),p(n,F,a),t(F,Q),t(Q,xs),t(F,fe),p(n,ot,a),p(n,Kn,a),t(Kn,me),p(n,lt,a),p(n,V,a),t(V,de),t(V,Cs),t(Cs,Ee),t(V,ve),p(n,ct,a),vn(J,n,a),p(n,ut,a),p(n,Xn,a),t(Xn,_e),p(n,it,a),vn(K,n,a),p(n,rt,a),p(n,Yn,a),t(Yn,we),p(n,kt,a),p(n,Rn,a),Rn.innerHTML=Hc,p(n,ft,a),p(n,b,a),t(b,ye),t(b,Ls),t(Ls,De),t(b,be),t(b,Gs),t(Gs,Pe),t(b,$e),t(b,Ns),t(Ns,Ae),t(b,Ie),p(n,mt,a),p(n,hn,a),t(hn,Me),p(n,dt,a),p(n,On,a),On.innerHTML=Bc,p(n,Et,a),p(n,gn,a),t(gn,Re),p(n,vt,a),p(n,D,a),t(D,Hs),t(Hs,Oe),t(D,Te),t(D,Bs),t(Bs,Se),t(D,Ue),t(D,Ws),t(Ws,xe),t(D,Ce),t(D,js),t(js,Le),t(D,Ge),p(n,_t,a),p(n,X,a),t(X,Ne),t(X,qs),t(qs,He),t(X,Be),p(n,wt,a),vn(Y,n,a),p(n,yt,a),p(n,I,a),t(I,We),t(I,Zs),t(Zs,je),t(I,qe),t(I,zs),t(zs,Ze),t(I,ze),p(n,Dt,a),p(n,ns,a),t(ns,Fe),p(n,bt,a),p(n,Pt,a),p(n,$t,a),p(n,h,a),t(h,g),t(g,Fs),t(h,Qe),p(n,At,a),p(n,ss,a),t(ss,Ve),p(n,It,a),p(n,as,a),t(as,Je),p(n,Mt,a),p(n,M,a),t(M,Qs),t(Qs,Ke),t(M,Xe),t(M,Vs),t(Vs,Ye),t(M,he),t(M,Js),t(Js,ge),p(n,Rt,a),p(n,ts,a),t(ts,no),p(n,Ot,a),p(n,ps,a),t(ps,so),p(n,Tt,a),p(n,St,a),p(n,Ut,a),p(n,xt,a),p(n,nn,a),t(nn,sn),t(sn,Ks),t(nn,ao),p(n,Ct,a),p(n,es,a),t(es,to),p(n,Lt,a),p(n,os,a),t(os,po),p(n,Gt,a),p(n,ls,a),t(ls,eo),p(n,Nt,a),p(n,cs,a),t(cs,oo),p(n,Ht,a),p(n,us,a),t(us,lo),p(n,Bt,a),vn(an,n,a),p(n,Wt,a),p(n,v,a),t(v,co),t(v,Xs),t(Xs,uo),t(v,io),t(v,Ys),t(Ys,ro),t(v,ko),t(v,hs),t(hs,fo),t(v,mo),t(v,gs),t(gs,Eo),t(v,vo),t(v,na),t(na,_o),t(v,wo),t(v,sa),t(sa,yo),t(v,Do),p(n,jt,a),p(n,qt,a),p(n,Zt,a),p(n,tn,a),t(tn,pn),t(pn,aa),t(tn,bo),p(n,zt,a),p(n,is,a),t(is,Po),p(n,Ft,a),p(n,en,a),t(en,$o),t(en,ta),t(ta,Ao),t(en,Io),p(n,Qt,a),p(n,Vt,a),p(n,Jt,a),p(n,on,a),t(on,ln),t(ln,pa),t(on,Mo),p(n,Kt,a),p(n,rs,a),t(rs,Ro),p(n,Xt,a),p(n,cn,a),t(cn,Oo),t(cn,ea),t(ea,To),t(cn,So),p(n,Yt,a),p(n,Tn,a),Tn.innerHTML=Wc,p(n,ht,a),p(n,_,a),t(_,Uo),t(_,oa),t(oa,xo),t(_,Co),t(_,la),t(la,Lo),t(_,Go),t(_,ca),t(ca,No),t(_,Ho),t(_,ua),t(ua,Bo),t(_,Wo),p(n,gt,a),p(n,ks,a),t(ks,jo),p(n,np,a),p(n,sp,a),p(n,ap,a),p(n,un,a),t(un,rn),t(rn,ia),t(un,qo),p(n,tp,a),p(n,fs,a),t(fs,Zo),p(n,pp,a),p(n,ep,a),p(n,op,a),p(n,lp,a),p(n,kn,a),t(kn,fn),t(fn,ra),t(kn,zo),p(n,cp,a),p(n,up,a),p(n,ip,a),p(n,P,a),t(P,ka),t(ka,Fo),t(P,Qo),vn(Sn,P,null),t(P,Vo),t(P,Jo),t(P,Ko),rp=!0},p(n,[a]){const fa={};a&1&&(fa.$$scope={dirty:a,ctx:n}),B.$set(fa);const Un={};a&1&&(Un.$$scope={dirty:a,ctx:n}),j.$set(Un);const ma={};a&1&&(ma.$$scope={dirty:a,ctx:n}),J.$set(ma);const da={};a&1&&(da.$$scope={dirty:a,ctx:n}),K.$set(da);const Ea={};a&1&&(Ea.$$scope={dirty:a,ctx:n}),Y.$set(Ea);const O={};a&1&&(O.$$scope={dirty:a,ctx:n}),an.$set(O)},i(n){rp||(_n(Dn.$$.fragment,n),_n(B.$$.fragment,n),_n(j.$$.fragment,n),_n(J.$$.fragment,n),_n(K.$$.fragment,n),_n(Y.$$.fragment,n),_n(an.$$.fragment,n),_n(Sn.$$.fragment,n),rp=!0)},o(n){wn(Dn.$$.fragment,n),wn(B.$$.fragment,n),wn(j.$$.fragment,n),wn(J.$$.fragment,n),wn(K.$$.fragment,n),wn(Y.$$.fragment,n),wn(an.$$.fragment,n),wn(Sn.$$.fragment,n),rp=!1},d(n){n&&s(f),n&&s(va),n&&s(S),n&&s(_a),n&&s(Cn),n&&s(wa),yn(Dn,n),n&&s(ya),n&&s(Ln),n&&s(Da),n&&s($),n&&s(ba),n&&s(Gn),n&&s(Pa),n&&s(Nn),n&&s($a),n&&s(bn),n&&s(Aa),n&&s(A),n&&s(Ia),n&&s(Ma),n&&s(Ra),n&&s(U),n&&s(Oa),n&&s(C),n&&s(Ta),n&&s(Hn),n&&s(Sa),n&&s(Pn),n&&s(Ua),n&&s(Bn),n&&s(xa),n&&s($n),n&&s(Ca),n&&s(Wn),n&&s(La),n&&s(An),n&&s(Ga),n&&s(In),n&&s(Na),n&&s(L),n&&s(Ha),n&&s(jn),n&&s(Ba),n&&s(Mn),n&&s(Wa),n&&s(qn),n&&s(ja),n&&s(G),n&&s(qa),n&&s(H),n&&s(Za),n&&s(Zn),n&&s(za),n&&s(zn),n&&s(Fa),yn(B,n),n&&s(Qa),n&&s(W),n&&s(Va),n&&s(Fn),n&&s(Ja),yn(j,n),n&&s(Ka),n&&s(q),n&&s(Xa),n&&s(Qn),n&&s(Ya),n&&s(ha),n&&s(ga),n&&s(Z),n&&s(nt),n&&s(Vn),n&&s(st),n&&s(Jn),n&&s(at),n&&s(tt),n&&s(pt),n&&s(et),n&&s(F),n&&s(ot),n&&s(Kn),n&&s(lt),n&&s(V),n&&s(ct),yn(J,n),n&&s(ut),n&&s(Xn),n&&s(it),yn(K,n),n&&s(rt),n&&s(Yn),n&&s(kt),n&&s(Rn),n&&s(ft),n&&s(b),n&&s(mt),n&&s(hn),n&&s(dt),n&&s(On),n&&s(Et),n&&s(gn),n&&s(vt),n&&s(D),n&&s(_t),n&&s(X),n&&s(wt),yn(Y,n),n&&s(yt),n&&s(I),n&&s(Dt),n&&s(ns),n&&s(bt),n&&s(Pt),n&&s($t),n&&s(h),n&&s(At),n&&s(ss),n&&s(It),n&&s(as),n&&s(Mt),n&&s(M),n&&s(Rt),n&&s(ts),n&&s(Ot),n&&s(ps),n&&s(Tt),n&&s(St),n&&s(Ut),n&&s(xt),n&&s(nn),n&&s(Ct),n&&s(es),n&&s(Lt),n&&s(os),n&&s(Gt),n&&s(ls),n&&s(Nt),n&&s(cs),n&&s(Ht),n&&s(us),n&&s(Bt),yn(an,n),n&&s(Wt),n&&s(v),n&&s(jt),n&&s(qt),n&&s(Zt),n&&s(tn),n&&s(zt),n&&s(is),n&&s(Ft),n&&s(en),n&&s(Qt),n&&s(Vt),n&&s(Jt),n&&s(on),n&&s(Kt),n&&s(rs),n&&s(Xt),n&&s(cn),n&&s(Yt),n&&s(Tn),n&&s(ht),n&&s(_),n&&s(gt),n&&s(ks),n&&s(np),n&&s(sp),n&&s(ap),n&&s(un),n&&s(tp),n&&s(fs),n&&s(pp),n&&s(ep),n&&s(op),n&&s(lp),n&&s(kn),n&&s(cp),n&&s(up),n&&s(ip),n&&s(P),yn(Sn)}}}const uu={title:"엔티티, 밸류 오브젝트, 애그리거트",date:"2023-07-13T00:00:00.000Z",excerpt:"Entities, Value Objects, and Aggregates",categories:["Golang","Backend","Architecture","Domain Driven Design"],coverImage:"/post_img/Backend/Architecture/DDD/cover.png",coverWidth:16,coverHeight:9,indexed:!1,exposed:!0};class iu extends Xc{constructor(f){super(),Yc(this,f,null,eu,hc,{})}}export{iu as default,uu as metadata};
