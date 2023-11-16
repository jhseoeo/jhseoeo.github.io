import{S as tu,i as pu,s as eu,k as e,q as c,a as i,y as ds,l as o,m as l,h as s,r as u,c as r,z as Es,n as k,U as Hc,b as p,E as a,A as _s,g as vs,d as ws,B as ys,M as bs}from"./index.d78780bf.js";import{C as Ds}from"./CodeBlockWrapper.eeb7c0c0.js";function ou(y){let f,E=`<code class="language-go"><span class="token keyword">package</span> chapter3

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
<span class="token punctuation">&#125;</span></code>`;return{c(){f=e("pre"),this.h()},l(m){f=o(m,"PRE",{class:!0});var d=l(f);d.forEach(s),this.h()},h(){k(f,"class","language-go")},m(m,d){p(m,f,d),f.innerHTML=E},p:bs,d(m){m&&s(f)}}}function lu(y){let f,E=`<code class="language-go"><span class="token keyword">package</span> chapter3

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
<span class="token punctuation">&#125;</span></code>`;return{c(){f=e("pre"),this.h()},l(m){f=o(m,"PRE",{class:!0});var d=l(f);d.forEach(s),this.h()},h(){k(f,"class","language-go")},m(m,d){p(m,f,d),f.innerHTML=E},p:bs,d(m){m&&s(f)}}}function cu(y){let f,E=`<code class="language-go"><span class="token keyword">package</span> chapter3

<span class="token keyword">type</span> Point <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	x intpackage chapter3

<span class="token keyword">type</span> Point <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	x <span class="token builtin">int</span>
	y <span class="token builtin">int</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token function">NewPoint</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>Point <span class="token punctuation">&#123;</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>Point<span class="token punctuation">&#123;</span>x<span class="token punctuation">,</span> y<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
</code>`;return{c(){f=e("pre"),this.h()},l(m){f=o(m,"PRE",{class:!0});var d=l(f);d.forEach(s),this.h()},h(){k(f,"class","language-go")},m(m,d){p(m,f,d),f.innerHTML=E},p:bs,d(m){m&&s(f)}}}function uu(y){let f,E=`<code class="language-go"><span class="token keyword">package</span> chapter3_test

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
<span class="token punctuation">&#125;</span></code>`;return{c(){f=e("pre"),this.h()},l(m){f=o(m,"PRE",{class:!0});var d=l(f);d.forEach(s),this.h()},h(){k(f,"class","language-go")},m(m,d){p(m,f,d),f.innerHTML=E},p:bs,d(m){m&&s(f)}}}function iu(y){let f,E=`<code class="language-go"><span class="token keyword">package</span> chapter3

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
<span class="token punctuation">&#125;</span></code>`;return{c(){f=e("pre"),this.h()},l(m){f=o(m,"PRE",{class:!0});var d=l(f);d.forEach(s),this.h()},h(){k(f,"class","language-go")},m(m,d){p(m,f,d),f.innerHTML=E},p:bs,d(m){m&&s(f)}}}function ru(y){let f,E=`<code class="language-go"><span class="token keyword">package</span> chapter3

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
<span class="token punctuation">&#125;</span></code>`;return{c(){f=e("pre"),this.h()},l(m){f=o(m,"PRE",{class:!0});var d=l(f);d.forEach(s),this.h()},h(){k(f,"class","language-go")},m(m,d){p(m,f,d),f.innerHTML=E},p:bs,d(m){m&&s(f)}}}function ku(y){let f,E,m,d,Da,T,$p,Ps,Ip,Mp,ba,In,Rp,Pa,Mn,Rn,ul,Aa,On,Op,$a,P,As,Tp,Up,$s,Sp,xp,Is,Cp,Ia,Tn,Lp,Ma,Un,Gp,Ra,mn,Bc=`<code class="language-go"><span class="token keyword">package</span> chapter3

<span class="token keyword">import</span> <span class="token string">"time"</span>

<span class="token keyword">type</span> Money <span class="token operator">=</span> <span class="token builtin">int</span>

<span class="token keyword">type</span> Auction <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	ID            <span class="token builtin">int</span>
	startingPrice Money
	sellerID      <span class="token builtin">int</span>
	createdAt     time<span class="token punctuation">.</span>Time
	auctionStart  time<span class="token punctuation">.</span>Time
	auctionEnd    time<span class="token punctuation">.</span>Time
<span class="token punctuation">&#125;</span></code>`,Oa,A,Np,Ms,Hp,Bp,Rs,Wp,qp,Ta,Ua,Sa,U,S,Os,jp,xa,x,Zp,Ts,zp,Fp,Ca,Sn,Qp,La,dn,Wc='<code class="language-go">fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span>MaxInt<span class="token punctuation">)</span></code>',Ga,xn,Vp,Na,En,qc='<code class="language-text">9223372036854775807</code>',Ha,Cn,Jp,Ba,_n,jc='<code class="language-go">fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span>MaxInt <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span></code>',Wa,vn,Zc='<code class="language-text">cannot use math.MaxInt + 1 (untyped int constant 9223372036854775808) as int value in argument to fmt.Println (overflows)</code>',qa,C,Kp,Us,Xp,Yp,ja,Ln,hp,Za,wn,zc=`<code class="language-go"><span class="token keyword">package</span> chapter3

<span class="token keyword">import</span> <span class="token string">"github.com/google/uuid"</span>

<span class="token keyword">type</span> SomeEntity <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	id uuid<span class="token punctuation">.</span>UUID
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token function">NewSomeEntity</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>SomeEntity <span class="token punctuation">&#123;</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>SomeEntity<span class="token punctuation">&#123;</span>
		id<span class="token punctuation">:</span> uuid<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,za,Gn,gp,Fa,L,G,Ss,ne,Qa,N,se,xs,ae,te,Va,Nn,pe,Ja,Hn,ee,Ka,H,Xa,B,oe,Cs,le,ce,Ya,Bn,ue,ha,W,ga,q,ie,Ls,re,ke,nt,Wn,fe,st,at,tt,j,Z,Gs,me,pt,qn,de,et,jn,Ee,ot,lt,ct,ut,z,F,Ns,_e,it,Zn,ve,rt,Q,we,Hs,ye,De,kt,V,ft,zn,be,mt,J,dt,Fn,Pe,Et,yn,Fc=`<code class="language-bash">$ go <span class="token builtin class-name">test</span>
--- FAIL: Test_Point <span class="token punctuation">(</span><span class="token number">0</span>.00s<span class="token punctuation">)</span>
    value_object_test.go:13: a and b were not equal
FAIL
<span class="token builtin class-name">exit</span> status <span class="token number">1</span>
FAIL    github.com/jhseoeo/Golang-DDD/chapter3  <span class="token number">0</span>.001s</code>`,_t,b,Ae,Bs,$e,Ie,Ws,Me,Re,qs,Oe,Te,vt,Qn,Ue,wt,Dn,Qc=`<code class="language-go"><span class="token keyword">func</span> <span class="token function">NewPoint</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> Point <span class="token punctuation">&#123;</span>
	<span class="token keyword">return</span> Point<span class="token punctuation">&#123;</span>x<span class="token punctuation">,</span> y<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,yt,Vn,Se,Dt,D,js,xe,Ce,Zs,Le,Ge,zs,Ne,He,Fs,Be,We,bt,K,qe,Qs,je,Ze,Pt,X,At,$,ze,Vs,Fe,Qe,Js,Ve,Je,$t,Jn,Ke,It,Mt,Rt,Y,h,Ks,Xe,Ot,Kn,Ye,Tt,Xn,he,Ut,I,Xs,ge,no,Ys,so,ao,hs,to,St,Yn,po,xt,hn,eo,Ct,Lt,Gt,Nt,g,nn,gs,oo,Ht,gn,lo,Bt,ns,co,Wt,ss,uo,qt,as,io,jt,ts,ro,Zt,sn,zt,_,ko,na,fo,mo,sa,Eo,_o,aa,vo,wo,ta,yo,Do,pa,bo,Po,ea,Ao,$o,Ft,Qt,Vt,an,tn,oa,Io,Jt,ps,Mo,Kt,pn,Ro,la,Oo,To,Xt,Yt,ht,en,on,ca,Uo,gt,es,So,np,ln,xo,ua,Co,Lo,sp,bn,Vc=`<code class="language-go"><span class="token keyword">type</span> item <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	name <span class="token builtin">string</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">type</span> Order <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	items          <span class="token punctuation">[</span><span class="token punctuation">]</span>item
	taxAmount      Money
	discount       Money
	paymentCard    uuid<span class="token punctuation">.</span>UUID
	customerId     uuid<span class="token punctuation">.</span>UUID
	marketingOptIn <span class="token builtin">bool</span>
<span class="token punctuation">&#125;</span></code>`,ap,v,Go,ia,No,Ho,ra,Bo,Wo,ka,qo,jo,fa,Zo,zo,tp,os,Fo,pp,ep,op,cn,un,ma,Qo,lp,ls,Vo,cp,up,ip,rp,rn,kn,da,Jo,kp,fp,mp,cs,R,Pn,us,il,Ko,Xo,Yo,An,ho,dp;return H=new Ds({props:{$$slots:{default:[ou]},$$scope:{ctx:y}}}),W=new Ds({props:{$$slots:{default:[lu]},$$scope:{ctx:y}}}),V=new Ds({props:{$$slots:{default:[cu]},$$scope:{ctx:y}}}),J=new Ds({props:{$$slots:{default:[uu]},$$scope:{ctx:y}}}),X=new Ds({props:{$$slots:{default:[iu]},$$scope:{ctx:y}}}),sn=new Ds({props:{$$slots:{default:[ru]},$$scope:{ctx:y}}}),{c(){f=e("h2"),E=e("a"),m=e("span"),d=c("엔티티"),Da=i(),T=e("p"),$p=c("Domain Driven Design에서, "),Ps=e("strong"),Ip=c("엔티티"),Mp=c(`는 ID로 정의된다. 그들의 속성이 변하더라도, 식별자는 변하지 않는다.
엔티티가 처음과 비교하여 많이 달라져서 구분이 불가능하더라도, 식별자가 같다면 같은 엔티티이다.`),ba=i(),In=e("p"),Rp=c(`예를 들며 살펴보자.
이베이에서는 유저로 회원가입을 할 수 있다. 만약 무언가를 판매하고자 한다면, 판매자가 된다.
또한 항목에 입찰을 할 수도 있다. 이러한 서비스의 도메인 모델은 다음 사진과 같다.`),Pa=i(),Mn=e("p"),Rn=e("img"),Aa=i(),On=e("p"),Op=c("시스템에서는 다음과 같은 동작이 일어날 수 있다."),$a=i(),P=e("ul"),As=e("li"),Tp=c("유저가 주소를 변경한다."),Up=i(),$s=e("li"),Sp=c("유저가 이메일 주소를 변경한다."),xp=i(),Is=e("li"),Cp=c("경매 종료 시각이 변경된다."),Ia=i(),Tn=e("p"),Lp=c("이러한 동작은 엔티티의 식별자를 변경하지 않는다. 동일한 ID를 참조하지만, 그들의 속성은 변경될 수 있다."),Ma=i(),Un=e("p"),Gp=c("이와 같은 경매 시스템의 엔티티를 구현하면 다음과 같다."),Ra=i(),mn=e("pre"),Oa=i(),A=e("p"),Np=c("위 예제에서, "),Ms=e("code"),Hp=c("int"),Bp=c(" 타입의 "),Rs=e("code"),Wp=c("ID"),qp=c(`는 엔티티의 식별자를 나타낸다.
엔티티 ID는 반드시 시스템에서 생성되어야 하는 것은 아니며, 엔티티 속성의 일부를 나타낼 수도 있다.
이를테면 대부분의 국가에서, 사람들을 구분하기 위해 주민등록번호를 사용한다.`),Ta=i(),Ua=e("br"),Sa=i(),U=e("h3"),S=e("a"),Os=e("span"),jp=c("좋은 식별자 생성하기"),xa=i(),x=e("p"),Zp=c(`엔티티에 대한 고유하고 적절한 생성자를 생성하는 것은 의외로 어렵다.
이전 예제에서의 ID는 `),Ts=e("code"),zp=c("int"),Fp=c(" 타입이었다. 대부분의 간단한 시스템에서는 이렇게 사용해도 무방하지만, 규모가 큰 시스템에서는 문제가 생기게 된다."),Ca=i(),Sn=e("p"),Qp=c("예를 들어 다음과 같은 코드가 있다고 해보자."),La=i(),dn=e("pre"),Ga=i(),xn=e("p"),Vp=c("이를 실행하면 다음과 같은 결과를 얻게 된다."),Na=i(),En=e("pre"),Ha=i(),Cn=e("p"),Jp=c("하지만 이러한 코드를 작성하면, 다음과 같은 문제가 발생한다."),Ba=i(),_n=e("pre"),Wa=i(),vn=e("pre"),qa=i(),C=e("p"),Kp=c(`정수를 모두 다 써렸다! 만약 이처럼 정수를 식별자로 사용했다면, 시스템을 다시 설계해야 하는 문제가 발생했을 것이다.
따라서 엔티티의 식별자를 정할 때는 미래에 발생할 수 있는 문제를 고려하여야 한다.
일반적으로 가장 많이 고려되는 방식은 `),Us=e("strong"),Xp=c("UUID(Universally Unique Identifier)"),Yp=c(`를 사용하는 것이다.
UUID는 128비트 레이블로, 실질적으로 중복될 가능성이 없다.`),ja=i(),Ln=e("p"),hp=c(`UUID는 Go의 표준 라이브러리는 아니지만, 구글에서 제공하는 라이브러리가 있다.
다음과 같은 예제처럼 UUID를 사용할 수 있다.`),Za=i(),wn=e("pre"),za=i(),Gn=e("p"),gp=c("PostgreSQL과 같은 데이터베이스의 경우, 자체적인 UUID 타입을 사용할 수도 있다"),Fa=i(),L=e("h3"),G=e("a"),Ss=e("span"),ne=c("엔티티를 정의할 때 주의해야 할 점"),Qa=i(),N=e("p"),se=c(`엔티티는 식별자에 중점을 두기 때문에, 데이터베이스 설계 구조가 도메인 모델 구조를 결정하게 되는 현상이 일어날 수 있다.
이러한 현상은 `),xs=e("strong"),ae=c("Anemic Domain Model"),te=c("이라고도 하는 현상으로 이어질 수도 있다."),Va=i(),Nn=e("p"),pe=c(`Anemic Model은 도메인의 동작이 거의 없거나 없는 모델을 의미한다. 이런 경우, DDD의 이점을 얻을 수 없다.
엔티티는 Anemic Model이 될 수 있는 유력한 후보이다.
만약 그들이 애초부터 잘 식별된다면, Anemic Model을 진단하고 해결하기 쉽다.
모델이 대부분 공개 getter 및 setter 함수로 구성되어 있거나, 비즈니스 로직이 거의 없거나, 혹은 비즈니스 로직을 구현하기 위해 다양한 클라이언트에 의존하는 경우, Anemic Model이라고 볼 수 있다.`),Ja=i(),Hn=e("p"),ee=c("아래 코드는 우리의 경매 시스템에 대한 Anemic Entity의 예제이다. 코드가 좀 길어져서 따로 뺐다."),Ka=i(),ds(H.$$.fragment),Xa=i(),B=e("p"),oe=c(`이런 코드가 잘못되었다고 할 수 있는 것은 아니며, 이런 느낌의 코드를 여기저기서 많이 볼 수 있다.
하지만 이런 코드는 Domain Driven Design의 모든 이점을 얻을 수 없다.
`),Cs=e("code"),le=c("AnemicAuction"),ce=c(`를 사용하는 다른 구성은 잠재적으로 일부 속성이 무엇인지 가정하고 있다.
또한, 도메인 전문가가 의도하지 않은 대로 비즈니스 로직을 구현될 수 있다.`),Ya=i(),Bn=e("p"),ue=c("따라서, 다음과 같이 리팩토링되어야 한다."),ha=i(),ds(W.$$.fragment),ga=i(),q=e("p"),ie=c(`간단한 예제임에도 엔티티가 비즈니스 로직을 가지고 있는 경우의 이점을 확인할 수 있다.
특히, 시간대의 일관성을 위해 UTC로 강제하는 로직이 에러 처리를 통해 잘 드러나 있다.
또한 경매 경과 시간에 대한 일관적인 정의를 위해 `),Ls=e("code"),re=c("GetAuctionElapsedDuration"),ke=c(" 함수를 사용하고 있다."),nt=i(),Wn=e("p"),fe=c(`그렇다면 데이터베이스에 동일한 모델을 사용할 수는 없을까?
시스템이 복잡해짐에 따라 경매에 대한 추가적인 메타데이터를 저장해야 할 수도 있다.
이를테면 경매를 본 사용자의 수, 광고를 클릭해서 들어온 사용자의 수, 사용자의 경매 기록 등이다.
이러한 모든 정보는 유용하지만, 도메인 모델에 속하지는 않는다.`),st=i(),at=e("br"),tt=i(),j=e("h3"),Z=e("a"),Gs=e("span"),me=c("ORM을 사용할 때 주의할 점"),pt=i(),qn=e("p"),de=c(`ORM(Object Relational Mapping)은 데이터베이스 영속성을 관리하기 위해 사용되는 방식으로, DDD의 개념은 아니지만 널리 사용되고 있다.
Golang에서는 GORM이라는 ORM 라이브러리가 가장 유명하다.
ORM을 사용함으로써 발생하는 문제점이 있긴 하지만, ORM을 처리하면 쿼리 생성 및 처리에 대한 제어 권한을 위임하게 된다.`),et=i(),jn=e("p"),Ee=c(`ORM을 DDD와 함께 사용하려면 ORM이 DDD 컨텍스트에서 엔티티를 작성하는 것을 제어할 수 없게 해야 한다. 그렇지 않으면 Anemic Model이 될 수 있다.
또한 엔티티와 ORM의 결합도를 낮추기 위해, ORM 계층과 엔티티 계층 사이에 이전 포스트에서 다루었던 어댑터 계층을 추가하는 것이 좋다.`),ot=i(),lt=e("br"),ct=e("br"),ut=i(),z=e("h2"),F=e("a"),Ns=e("span"),_e=c("밸류 오브젝트"),it=i(),Zn=e("p"),ve=c(`밸류 오브젝트는 엔티티와 다르게 식별자가 없고, 풍부한 도메인 모델을 만들기 위해 엔티티, 애그리거트와 함께 사용된다.
일반적으로 도메인에 대한 것을 측정, 정량화, 설명하는 데 사용된다.`),rt=i(),Q=e("p"),we=c(`밸류 오브젝트를 이해하는데 도움이 되는 Golang 코드를 작성해보고자 한다.
먼저, `),Hs=e("code"),ye=c("Point"),De=c("라는 구조체와 생성 함수를 정의한다."),kt=i(),ds(V.$$.fragment),ft=i(),zn=e("p"),be=c("그리고 같은 좌표를 가진 두 점이 같은지 확인하는 테스트도 함께 작성한다."),mt=i(),ds(J.$$.fragment),dt=i(),Fn=e("p"),Pe=c("직관적으로 두 점은 동일하다는 사실을 알 수 있지만, 이 테스트는 실패한다."),Et=i(),yn=e("pre"),_t=i(),b=e("p"),Ae=c(`이 테스트는 왜 실패할까?
Go에서 `),Bs=e("code"),$e=c("&"),Ie=c(` 기호를 사용하는 경우, A와 B가 저장되는 메모리 주소를 가리키는 포인터가 생성된다.
따라서 `),Ws=e("code"),Me=c("a"),Re=c("와 "),qs=e("code"),Oe=c("b"),Te=c("는 서로 다른 메모리 주소를 가리키고 있기 때문에 동일하지 않다고 판단한다."),vt=i(),Qn=e("p"),Ue=c("그렇다면 포인터 생성 함수를 이렇게 변경해보자"),wt=i(),Dn=e("pre"),yt=i(),Vn=e("p"),Se=c(`이제 테스트를 실행하면 통과하는 것을 알 수 있다. 이제 포인터의 메모리 주소값이 아닌 구조체의 값을 비교하기 때문이다.
이러한 경우 이들은 밸류 오브젝트라고 볼 수 있다. 동일한 값을 가지는 경우 동일하다고 판단된다.`),Dt=i(),D=e("p"),js=e("code"),xe=c("Point"),Ce=c(" 구조체에서 "),Zs=e("code"),Le=c("x"),Ge=c("와 "),zs=e("code"),Ne=c("y"),He=c("는 소문자로 시작하는데, 이는 "),Fs=e("code"),Be=c("Point"),We=c(`가 패키지 외부에서 사용되지 않게 하기 위함이다.
밸류 오브젝트에서도 또한 마찬가지로, 필드값이 변경되지 않도록 하는 것이 좋다.`),bt=i(),K=e("p"),qe=c("밸류 오브젝트는 대체 가능성이 있다. 우리가 게임을 작성하고, 플레이어의 현재 위치를 나타내기 위해 "),Qs=e("code"),je=c("Point"),Ze=c(`를 사용한다고 가정해보자.
다음과 같이 플레이어가 이동하는 코드를 작성할 수 있다.`),Pt=i(),ds(X.$$.fragment),At=i(),$=e("p"),ze=c("여기서 "),Vs=e("code"),Fe=c("Point"),Qe=c(`는 플레이어의 위치를 나타낸다.
밸류 오브젝트의 교체 가능성을 이용하여, 플레이어가 움직일 때마다 플레이어의 위치를 나타내는 지점을 완전히 새로운 값으로 업데이트할 수 있다.
또한 `),Js=e("code"),Ve=c("move"),Je=c(" 함수는 side effect가 존재하지 않는 함수임을 알 수 있다."),$t=i(),Jn=e("p"),Ke=c(`불변성과 side effect가 없는 함수를 작성하였기 때문에, 값을 추론하고 유닛 테스트를 작성하기가 쉬워진다.
따라서, 장기적인 시스템의 유지보수성을 높일 수 있다.`),It=i(),Mt=e("br"),Rt=i(),Y=e("h3"),h=e("a"),Ks=e("span"),Xe=c("언제 엔티티를 사용하고, 언제 밸류 오브젝트를 사용해야 할까?"),Ot=i(),Kn=e("p"),Ye=c(`도메인을 모델링할 때, 가능한 한 밸류 오브젝트를 사용하는 것이 좋다.
밸류 오브젝트는 제대로 구현되었을 때, 가장 안전한 구조체이기 때문이다.
의도하지 않은 방식으로 인스턴스를 잘못 수정하는 사용자들을 걱정할 필요가 없어진다.`),Tt=i(),Xn=e("p"),he=c(`또한 객체의 값에만 관심이 있다면 밸류 오브젝트를 사용해야 한다.
밸류 오브젝트가 적절한 경우이려면, 다음과 같은 조건을 모두 충족시켜야 한다.`),Ut=i(),I=e("ul"),Xs=e("li"),ge=c("객체를 불변적으로 취급해야 할 때"),no=i(),Ys=e("li"),so=c("도메인 개념을 나타내거나, 측정하거나, 정량화해야 할 때"),ao=i(),hs=e("li"),to=c("값으로 동일한 타입의 다른 객체와 비교할 수 있을 때"),St=i(),Yn=e("p"),po=c("모든 조건이 충족된다면 밸류 오브젝트가 적절한 선택이 될 것이다."),xt=i(),hn=e("p"),eo=c(`마치 모든 것이 밸류 오브젝트가 되어야 한다고 말하는 것처럼 보일 수 있지만, 실제로 그게 나쁜 아이디어는 아니다.
부적합한게 아니라면 최대한 많은 것들을 밸류 오브젝트로 만드는 것이 좋다.
부적합하다고 판단이 들면 그 때 엔티티로 변경한다`),Ct=i(),Lt=e("br"),Gt=e("br"),Nt=i(),g=e("h3"),nn=e("a"),gs=e("span"),oo=c("애그리거트"),Ht=i(),gn=e("p"),lo=c(`애그리거트는 Domain Driven Design에서 가장 어려운 개념 중 하나로, 잘못 구현되는 경우가 많다.
코드를 조직화하는데 도움이 된다면 좋지만, 잘못 구현되면 개발 속도를 늦추고 일관성을 해치는 요소가 될 수 있다.`),Bt=i(),ns=e("p"),co=c(`애그리거트는 일부 동작에 대해 한 그룹으로 묶을 수 있는 도메인의 집합이다.
예를 들면, 각각의 직원들에 대한 도메인 오브젝트가 있지만 이들을 팀으로 묶는다면 부서 구성과 같은 상황에서 유용할 것이다.
또한, 다양한 통화나 카드, 가상화폐를 묶어 지갑으로 관리할 수도 있으며, 이 경우 지갑이 애그리거트가 된다.`),Wt=i(),ss=e("p"),uo=c(`애그리거트는 array, map, slice 등 데이터 컬렉션 타입과 헷갈리기도 하는데, 이들은 동일한 개념이 아니다.
애그리거트는 컬렉션을 사용할 수도 있지만, 애그리거트는 DDD 개념이기 때문에 일반적으로 여러 컬렉션, 필드, 함수, 메서드 등을 포함한다.`),qt=i(),as=e("p"),io=c(`애그리거트의 주된 역할은 포함된 도매인 개체끼리의 트랜잭션 경계를 정의하는 것이다.
개체에 대한 CRUD는 애그리거트 전체에 걸쳐 일어나거나, 또는 전혀 일어나지 않아야 한다.
이를테면 새로운 직원이 팀에 입사하면, 직속 관리자 구조를 업데이트해야 할 수 있다.
그리고 사용자가 지갑에 새로운 카드를 추가하면, 해당 카드의 잔액이 지갑의 전체 잔액에 반영되어야 한다.`),jt=i(),ts=e("p"),ro=c("애그리거트는 다음과 같이 구현할 수 있다."),Zt=i(),ds(sn.$$.fragment),zt=i(),_=e("p"),ko=c("위 코드에서 "),na=e("code"),fo=c("Wallet"),mo=c(" 구조체의 "),sa=e("code"),Eo=c("id"),_o=c(`는 애그리거트 루트이며, 지갑의 식별자이다.
`),aa=e("code"),vo=c("ownerId"),wo=c(`는 지갑을 소유하는 엔티티의 식별자이다. 소유자에 대한 모든 정보를 포함할 필요는 없으며, 필요할 때 가져올 수 있게끔 소유자의 식별자만 있으면 된다.
`),ta=e("code"),yo=c("walletItems"),Do=c("는 "),pa=e("code"),bo=c("WalletItem"),Po=c("의 집합이며, "),ea=e("code"),Ao=c("WalletItem"),$o=c("은 다른 곳에서 정의한 엔티티이므로 여기서는 인터페이스로 정의한다."),Ft=i(),Qt=e("br"),Vt=i(),an=e("h3"),tn=e("a"),oa=e("span"),Io=c("애그리거트 찾기"),Jt=i(),ps=e("p"),Mo=c(`Domain Driven Design에서 가장 어려운 작업 중 하나는 어떤 타임을 언제 쓸 지 결정하는 것이다.
도메인 모델을 애그리거트로 클러스터링 하려면, 먼저 제한된 컨텍스트의 불변성을 이해해야 한다.
불변성은 도메인에서 반드시 참이어야 하는 규칙이다.
이를테면 시스템에서 주문을 생성하려면 상품의 재고가 충분해야 한다.
이는 비즈니스적인 불변성이며, 재고가 없는 경우 고객에게 약속할 수 없다.`),Kt=i(),pn=e("p"),Ro=c(`애그리거트에서는 eventually consistency가 아닌 transactional consistency가 필요하다.
애그리거트에 대한 변경 사항은 즉각적이고 atomic해야 한다.
따라서 애그리거트를 `),la=e("em"),Oo=c("transactional consistency boundary"),To=c(`라고 봐도 무방하다.
도메인 내에서 변경 사항이 생길 때마다, 이상적으로는 트랜잭션당 단 하나의 애그리거트만 수정해야 한다.`),Xt=i(),Yt=e("br"),ht=i(),en=e("h3"),on=e("a"),ca=e("span"),Uo=c("애그리거트 디자인"),gt=i(),es=e("p"),So=c(`일반적으로 애그리거트는 작을수록 좋다.
애그리거트가 작을수록 시스템의 유연성이 높아지고, 성능이 향상되며, 트랜잭션의 성공률이 높아진다.`),np=i(),ln=e("p"),xo=c(`여러 명의 사용자가 동시에 동일한 주문을 하려 하는 상황을 떠올려보자.
먼저, `),ua=e("em"),Co=c("주문"),Lo=c(" 애그리거트를 다음과 같이 정의할 수 있다."),sp=i(),bn=e("pre"),ap=i(),v=e("p"),Go=c("이 "),ia=e("code"),No=c("Order"),Ho=c(` 구조체는 보기엔 괜찮아 보이고, 일반적인 주문 흐름과 유사해 보인다.
하지만, 이 애그리거트에 `),ra=e("code"),Bo=c("marketingOptIn"),Wo=c(` 필드를 추가하는 것은 부적절하다.
제한된 컨텍스트 관점에서 이 애그리거트에 `),ka=e("code"),qo=c("marketingOptIn"),jo=c(`은 주문 객체와 관련이 없고,
사용자가 주문 시작과 완료 사이에 마케팅을 거부하면 주문이 완료되지 않길 원하기 때문이다.
따라서 `),fa=e("code"),Zo=c("marketingOptIn"),zo=c(" 필드를 제거하는 것이 바람직하다."),tp=i(),os=e("p"),Fo=c("물론 UI에서 마케팅 선택 확인란 자체를 제거하라는 게 아니라, 단지 애그리거트와 트랜잭션 흐름에서 디커플링되어야 한다는 것이다."),pp=i(),ep=e("br"),op=i(),cn=e("h3"),un=e("a"),ma=e("span"),Qo=c("한 개 이상의 제한된 컨텍스트에 걸친 애그리거트"),lp=i(),ls=e("p"),Vo=c(`비즈니스 규모에서 제한된 컨텍스트가 변경되거나, 하위 시스템에 대한 알림이 필요한 상황이 있을 수 있다.
여러 제한된 컨텍스트에 걸치는 경우에는 eventual consistency를 목표로 해야 한다.
즉, 다른 시스템이 우리가 보낸 이벤트를 적절히 잘 받아서 처리할 것이라고 기대할 뿐, 제한된 컨텍스트 안에서 하는 것처럼 atomic하게 처리하는 것을 기대하면 안된다.
이를 통해 더 강력한 복원력과 확장 가능성을 가진 분리된 시스템으로 발전할 수 있다(마이크로서비스!).`),cp=i(),up=e("br"),ip=e("br"),rp=i(),rn=e("h2"),kn=e("a"),da=e("span"),Jo=c("References"),kp=i(),fp=e("hr"),mp=i(),cs=e("center"),R=e("p"),Pn=e("a"),us=e("img"),Ko=i(),Xo=e("br"),Yo=i(),An=e("a"),ho=c("Matthew Boyle, Domain-Driven Design with Golang』, O’Reilly Media, Inc."),this.h()},l(n){f=o(n,"H2",{id:!0});var t=l(f);E=o(t,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Ea=l(E);m=o(Ea,"SPAN",{class:!0}),l(m).forEach(s),Ea.forEach(s),d=u(t,"엔티티"),t.forEach(s),Da=r(n),T=o(n,"P",{});var $n=l(T);$p=u($n,"Domain Driven Design에서, "),Ps=o($n,"STRONG",{});var _a=l(Ps);Ip=u(_a,"엔티티"),_a.forEach(s),Mp=u($n,`는 ID로 정의된다. 그들의 속성이 변하더라도, 식별자는 변하지 않는다.
엔티티가 처음과 비교하여 많이 달라져서 구분이 불가능하더라도, 식별자가 같다면 같은 엔티티이다.`),$n.forEach(s),ba=r(n),In=o(n,"P",{});var va=l(In);Rp=u(va,`예를 들며 살펴보자.
이베이에서는 유저로 회원가입을 할 수 있다. 만약 무언가를 판매하고자 한다면, 판매자가 된다.
또한 항목에 입찰을 할 수도 있다. 이러한 서비스의 도메인 모델은 다음 사진과 같다.`),va.forEach(s),Pa=r(n),Mn=o(n,"P",{});var wa=l(Mn);Rn=o(wa,"IMG",{src:!0,alt:!0}),wa.forEach(s),Aa=r(n),On=o(n,"P",{});var ya=l(On);Op=u(ya,"시스템에서는 다음과 같은 동작이 일어날 수 있다."),ya.forEach(s),$a=r(n),P=o(n,"UL",{});var is=l(P);As=o(is,"LI",{});var rl=l(As);Tp=u(rl,"유저가 주소를 변경한다."),rl.forEach(s),Up=r(is),$s=o(is,"LI",{});var kl=l($s);Sp=u(kl,"유저가 이메일 주소를 변경한다."),kl.forEach(s),xp=r(is),Is=o(is,"LI",{});var fl=l(Is);Cp=u(fl,"경매 종료 시각이 변경된다."),fl.forEach(s),is.forEach(s),Ia=r(n),Tn=o(n,"P",{});var ml=l(Tn);Lp=u(ml,"이러한 동작은 엔티티의 식별자를 변경하지 않는다. 동일한 ID를 참조하지만, 그들의 속성은 변경될 수 있다."),ml.forEach(s),Ma=r(n),Un=o(n,"P",{});var dl=l(Un);Gp=u(dl,"이와 같은 경매 시스템의 엔티티를 구현하면 다음과 같다."),dl.forEach(s),Ra=r(n),mn=o(n,"PRE",{class:!0});var Jc=l(mn);Jc.forEach(s),Oa=r(n),A=o(n,"P",{});var rs=l(A);Np=u(rs,"위 예제에서, "),Ms=o(rs,"CODE",{});var El=l(Ms);Hp=u(El,"int"),El.forEach(s),Bp=u(rs," 타입의 "),Rs=o(rs,"CODE",{});var _l=l(Rs);Wp=u(_l,"ID"),_l.forEach(s),qp=u(rs,`는 엔티티의 식별자를 나타낸다.
엔티티 ID는 반드시 시스템에서 생성되어야 하는 것은 아니며, 엔티티 속성의 일부를 나타낼 수도 있다.
이를테면 대부분의 국가에서, 사람들을 구분하기 위해 주민등록번호를 사용한다.`),rs.forEach(s),Ta=r(n),Ua=o(n,"BR",{}),Sa=r(n),U=o(n,"H3",{id:!0});var go=l(U);S=o(go,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var vl=l(S);Os=o(vl,"SPAN",{class:!0}),l(Os).forEach(s),vl.forEach(s),jp=u(go,"좋은 식별자 생성하기"),go.forEach(s),xa=r(n),x=o(n,"P",{});var Ep=l(x);Zp=u(Ep,`엔티티에 대한 고유하고 적절한 생성자를 생성하는 것은 의외로 어렵다.
이전 예제에서의 ID는 `),Ts=o(Ep,"CODE",{});var wl=l(Ts);zp=u(wl,"int"),wl.forEach(s),Fp=u(Ep," 타입이었다. 대부분의 간단한 시스템에서는 이렇게 사용해도 무방하지만, 규모가 큰 시스템에서는 문제가 생기게 된다."),Ep.forEach(s),Ca=r(n),Sn=o(n,"P",{});var yl=l(Sn);Qp=u(yl,"예를 들어 다음과 같은 코드가 있다고 해보자."),yl.forEach(s),La=r(n),dn=o(n,"PRE",{class:!0});var Kc=l(dn);Kc.forEach(s),Ga=r(n),xn=o(n,"P",{});var Dl=l(xn);Vp=u(Dl,"이를 실행하면 다음과 같은 결과를 얻게 된다."),Dl.forEach(s),Na=r(n),En=o(n,"PRE",{class:!0});var Xc=l(En);Xc.forEach(s),Ha=r(n),Cn=o(n,"P",{});var bl=l(Cn);Jp=u(bl,"하지만 이러한 코드를 작성하면, 다음과 같은 문제가 발생한다."),bl.forEach(s),Ba=r(n),_n=o(n,"PRE",{class:!0});var Yc=l(_n);Yc.forEach(s),Wa=r(n),vn=o(n,"PRE",{class:!0});var hc=l(vn);hc.forEach(s),qa=r(n),C=o(n,"P",{});var _p=l(C);Kp=u(_p,`정수를 모두 다 써렸다! 만약 이처럼 정수를 식별자로 사용했다면, 시스템을 다시 설계해야 하는 문제가 발생했을 것이다.
따라서 엔티티의 식별자를 정할 때는 미래에 발생할 수 있는 문제를 고려하여야 한다.
일반적으로 가장 많이 고려되는 방식은 `),Us=o(_p,"STRONG",{});var Pl=l(Us);Xp=u(Pl,"UUID(Universally Unique Identifier)"),Pl.forEach(s),Yp=u(_p,`를 사용하는 것이다.
UUID는 128비트 레이블로, 실질적으로 중복될 가능성이 없다.`),_p.forEach(s),ja=r(n),Ln=o(n,"P",{});var Al=l(Ln);hp=u(Al,`UUID는 Go의 표준 라이브러리는 아니지만, 구글에서 제공하는 라이브러리가 있다.
다음과 같은 예제처럼 UUID를 사용할 수 있다.`),Al.forEach(s),Za=r(n),wn=o(n,"PRE",{class:!0});var gc=l(wn);gc.forEach(s),za=r(n),Gn=o(n,"P",{});var $l=l(Gn);gp=u($l,"PostgreSQL과 같은 데이터베이스의 경우, 자체적인 UUID 타입을 사용할 수도 있다"),$l.forEach(s),Fa=r(n),L=o(n,"H3",{id:!0});var nl=l(L);G=o(nl,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Il=l(G);Ss=o(Il,"SPAN",{class:!0}),l(Ss).forEach(s),Il.forEach(s),ne=u(nl,"엔티티를 정의할 때 주의해야 할 점"),nl.forEach(s),Qa=r(n),N=o(n,"P",{});var vp=l(N);se=u(vp,`엔티티는 식별자에 중점을 두기 때문에, 데이터베이스 설계 구조가 도메인 모델 구조를 결정하게 되는 현상이 일어날 수 있다.
이러한 현상은 `),xs=o(vp,"STRONG",{});var Ml=l(xs);ae=u(Ml,"Anemic Domain Model"),Ml.forEach(s),te=u(vp,"이라고도 하는 현상으로 이어질 수도 있다."),vp.forEach(s),Va=r(n),Nn=o(n,"P",{});var Rl=l(Nn);pe=u(Rl,`Anemic Model은 도메인의 동작이 거의 없거나 없는 모델을 의미한다. 이런 경우, DDD의 이점을 얻을 수 없다.
엔티티는 Anemic Model이 될 수 있는 유력한 후보이다.
만약 그들이 애초부터 잘 식별된다면, Anemic Model을 진단하고 해결하기 쉽다.
모델이 대부분 공개 getter 및 setter 함수로 구성되어 있거나, 비즈니스 로직이 거의 없거나, 혹은 비즈니스 로직을 구현하기 위해 다양한 클라이언트에 의존하는 경우, Anemic Model이라고 볼 수 있다.`),Rl.forEach(s),Ja=r(n),Hn=o(n,"P",{});var Ol=l(Hn);ee=u(Ol,"아래 코드는 우리의 경매 시스템에 대한 Anemic Entity의 예제이다. 코드가 좀 길어져서 따로 뺐다."),Ol.forEach(s),Ka=r(n),Es(H.$$.fragment,n),Xa=r(n),B=o(n,"P",{});var wp=l(B);oe=u(wp,`이런 코드가 잘못되었다고 할 수 있는 것은 아니며, 이런 느낌의 코드를 여기저기서 많이 볼 수 있다.
하지만 이런 코드는 Domain Driven Design의 모든 이점을 얻을 수 없다.
`),Cs=o(wp,"CODE",{});var Tl=l(Cs);le=u(Tl,"AnemicAuction"),Tl.forEach(s),ce=u(wp,`를 사용하는 다른 구성은 잠재적으로 일부 속성이 무엇인지 가정하고 있다.
또한, 도메인 전문가가 의도하지 않은 대로 비즈니스 로직을 구현될 수 있다.`),wp.forEach(s),Ya=r(n),Bn=o(n,"P",{});var Ul=l(Bn);ue=u(Ul,"따라서, 다음과 같이 리팩토링되어야 한다."),Ul.forEach(s),ha=r(n),Es(W.$$.fragment,n),ga=r(n),q=o(n,"P",{});var yp=l(q);ie=u(yp,`간단한 예제임에도 엔티티가 비즈니스 로직을 가지고 있는 경우의 이점을 확인할 수 있다.
특히, 시간대의 일관성을 위해 UTC로 강제하는 로직이 에러 처리를 통해 잘 드러나 있다.
또한 경매 경과 시간에 대한 일관적인 정의를 위해 `),Ls=o(yp,"CODE",{});var Sl=l(Ls);re=u(Sl,"GetAuctionElapsedDuration"),Sl.forEach(s),ke=u(yp," 함수를 사용하고 있다."),yp.forEach(s),nt=r(n),Wn=o(n,"P",{});var xl=l(Wn);fe=u(xl,`그렇다면 데이터베이스에 동일한 모델을 사용할 수는 없을까?
시스템이 복잡해짐에 따라 경매에 대한 추가적인 메타데이터를 저장해야 할 수도 있다.
이를테면 경매를 본 사용자의 수, 광고를 클릭해서 들어온 사용자의 수, 사용자의 경매 기록 등이다.
이러한 모든 정보는 유용하지만, 도메인 모델에 속하지는 않는다.`),xl.forEach(s),st=r(n),at=o(n,"BR",{}),tt=r(n),j=o(n,"H3",{id:!0});var sl=l(j);Z=o(sl,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Cl=l(Z);Gs=o(Cl,"SPAN",{class:!0}),l(Gs).forEach(s),Cl.forEach(s),me=u(sl,"ORM을 사용할 때 주의할 점"),sl.forEach(s),pt=r(n),qn=o(n,"P",{});var Ll=l(qn);de=u(Ll,`ORM(Object Relational Mapping)은 데이터베이스 영속성을 관리하기 위해 사용되는 방식으로, DDD의 개념은 아니지만 널리 사용되고 있다.
Golang에서는 GORM이라는 ORM 라이브러리가 가장 유명하다.
ORM을 사용함으로써 발생하는 문제점이 있긴 하지만, ORM을 처리하면 쿼리 생성 및 처리에 대한 제어 권한을 위임하게 된다.`),Ll.forEach(s),et=r(n),jn=o(n,"P",{});var Gl=l(jn);Ee=u(Gl,`ORM을 DDD와 함께 사용하려면 ORM이 DDD 컨텍스트에서 엔티티를 작성하는 것을 제어할 수 없게 해야 한다. 그렇지 않으면 Anemic Model이 될 수 있다.
또한 엔티티와 ORM의 결합도를 낮추기 위해, ORM 계층과 엔티티 계층 사이에 이전 포스트에서 다루었던 어댑터 계층을 추가하는 것이 좋다.`),Gl.forEach(s),ot=r(n),lt=o(n,"BR",{}),ct=o(n,"BR",{}),ut=r(n),z=o(n,"H2",{id:!0});var al=l(z);F=o(al,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Nl=l(F);Ns=o(Nl,"SPAN",{class:!0}),l(Ns).forEach(s),Nl.forEach(s),_e=u(al,"밸류 오브젝트"),al.forEach(s),it=r(n),Zn=o(n,"P",{});var Hl=l(Zn);ve=u(Hl,`밸류 오브젝트는 엔티티와 다르게 식별자가 없고, 풍부한 도메인 모델을 만들기 위해 엔티티, 애그리거트와 함께 사용된다.
일반적으로 도메인에 대한 것을 측정, 정량화, 설명하는 데 사용된다.`),Hl.forEach(s),rt=r(n),Q=o(n,"P",{});var Dp=l(Q);we=u(Dp,`밸류 오브젝트를 이해하는데 도움이 되는 Golang 코드를 작성해보고자 한다.
먼저, `),Hs=o(Dp,"CODE",{});var Bl=l(Hs);ye=u(Bl,"Point"),Bl.forEach(s),De=u(Dp,"라는 구조체와 생성 함수를 정의한다."),Dp.forEach(s),kt=r(n),Es(V.$$.fragment,n),ft=r(n),zn=o(n,"P",{});var Wl=l(zn);be=u(Wl,"그리고 같은 좌표를 가진 두 점이 같은지 확인하는 테스트도 함께 작성한다."),Wl.forEach(s),mt=r(n),Es(J.$$.fragment,n),dt=r(n),Fn=o(n,"P",{});var ql=l(Fn);Pe=u(ql,"직관적으로 두 점은 동일하다는 사실을 알 수 있지만, 이 테스트는 실패한다."),ql.forEach(s),Et=r(n),yn=o(n,"PRE",{class:!0});var nu=l(yn);nu.forEach(s),_t=r(n),b=o(n,"P",{});var fn=l(b);Ae=u(fn,`이 테스트는 왜 실패할까?
Go에서 `),Bs=o(fn,"CODE",{});var jl=l(Bs);$e=u(jl,"&"),jl.forEach(s),Ie=u(fn,` 기호를 사용하는 경우, A와 B가 저장되는 메모리 주소를 가리키는 포인터가 생성된다.
따라서 `),Ws=o(fn,"CODE",{});var Zl=l(Ws);Me=u(Zl,"a"),Zl.forEach(s),Re=u(fn,"와 "),qs=o(fn,"CODE",{});var zl=l(qs);Oe=u(zl,"b"),zl.forEach(s),Te=u(fn,"는 서로 다른 메모리 주소를 가리키고 있기 때문에 동일하지 않다고 판단한다."),fn.forEach(s),vt=r(n),Qn=o(n,"P",{});var Fl=l(Qn);Ue=u(Fl,"그렇다면 포인터 생성 함수를 이렇게 변경해보자"),Fl.forEach(s),wt=r(n),Dn=o(n,"PRE",{class:!0});var su=l(Dn);su.forEach(s),yt=r(n),Vn=o(n,"P",{});var Ql=l(Vn);Se=u(Ql,`이제 테스트를 실행하면 통과하는 것을 알 수 있다. 이제 포인터의 메모리 주소값이 아닌 구조체의 값을 비교하기 때문이다.
이러한 경우 이들은 밸류 오브젝트라고 볼 수 있다. 동일한 값을 가지는 경우 동일하다고 판단된다.`),Ql.forEach(s),Dt=r(n),D=o(n,"P",{});var O=l(D);js=o(O,"CODE",{});var Vl=l(js);xe=u(Vl,"Point"),Vl.forEach(s),Ce=u(O," 구조체에서 "),Zs=o(O,"CODE",{});var Jl=l(Zs);Le=u(Jl,"x"),Jl.forEach(s),Ge=u(O,"와 "),zs=o(O,"CODE",{});var Kl=l(zs);Ne=u(Kl,"y"),Kl.forEach(s),He=u(O,"는 소문자로 시작하는데, 이는 "),Fs=o(O,"CODE",{});var Xl=l(Fs);Be=u(Xl,"Point"),Xl.forEach(s),We=u(O,`가 패키지 외부에서 사용되지 않게 하기 위함이다.
밸류 오브젝트에서도 또한 마찬가지로, 필드값이 변경되지 않도록 하는 것이 좋다.`),O.forEach(s),bt=r(n),K=o(n,"P",{});var bp=l(K);qe=u(bp,"밸류 오브젝트는 대체 가능성이 있다. 우리가 게임을 작성하고, 플레이어의 현재 위치를 나타내기 위해 "),Qs=o(bp,"CODE",{});var Yl=l(Qs);je=u(Yl,"Point"),Yl.forEach(s),Ze=u(bp,`를 사용한다고 가정해보자.
다음과 같이 플레이어가 이동하는 코드를 작성할 수 있다.`),bp.forEach(s),Pt=r(n),Es(X.$$.fragment,n),At=r(n),$=o(n,"P",{});var ks=l($);ze=u(ks,"여기서 "),Vs=o(ks,"CODE",{});var hl=l(Vs);Fe=u(hl,"Point"),hl.forEach(s),Qe=u(ks,`는 플레이어의 위치를 나타낸다.
밸류 오브젝트의 교체 가능성을 이용하여, 플레이어가 움직일 때마다 플레이어의 위치를 나타내는 지점을 완전히 새로운 값으로 업데이트할 수 있다.
또한 `),Js=o(ks,"CODE",{});var gl=l(Js);Ve=u(gl,"move"),gl.forEach(s),Je=u(ks," 함수는 side effect가 존재하지 않는 함수임을 알 수 있다."),ks.forEach(s),$t=r(n),Jn=o(n,"P",{});var nc=l(Jn);Ke=u(nc,`불변성과 side effect가 없는 함수를 작성하였기 때문에, 값을 추론하고 유닛 테스트를 작성하기가 쉬워진다.
따라서, 장기적인 시스템의 유지보수성을 높일 수 있다.`),nc.forEach(s),It=r(n),Mt=o(n,"BR",{}),Rt=r(n),Y=o(n,"H3",{id:!0});var tl=l(Y);h=o(tl,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var sc=l(h);Ks=o(sc,"SPAN",{class:!0}),l(Ks).forEach(s),sc.forEach(s),Xe=u(tl,"언제 엔티티를 사용하고, 언제 밸류 오브젝트를 사용해야 할까?"),tl.forEach(s),Ot=r(n),Kn=o(n,"P",{});var ac=l(Kn);Ye=u(ac,`도메인을 모델링할 때, 가능한 한 밸류 오브젝트를 사용하는 것이 좋다.
밸류 오브젝트는 제대로 구현되었을 때, 가장 안전한 구조체이기 때문이다.
의도하지 않은 방식으로 인스턴스를 잘못 수정하는 사용자들을 걱정할 필요가 없어진다.`),ac.forEach(s),Tt=r(n),Xn=o(n,"P",{});var tc=l(Xn);he=u(tc,`또한 객체의 값에만 관심이 있다면 밸류 오브젝트를 사용해야 한다.
밸류 오브젝트가 적절한 경우이려면, 다음과 같은 조건을 모두 충족시켜야 한다.`),tc.forEach(s),Ut=r(n),I=o(n,"UL",{});var fs=l(I);Xs=o(fs,"LI",{});var pc=l(Xs);ge=u(pc,"객체를 불변적으로 취급해야 할 때"),pc.forEach(s),no=r(fs),Ys=o(fs,"LI",{});var ec=l(Ys);so=u(ec,"도메인 개념을 나타내거나, 측정하거나, 정량화해야 할 때"),ec.forEach(s),ao=r(fs),hs=o(fs,"LI",{});var oc=l(hs);to=u(oc,"값으로 동일한 타입의 다른 객체와 비교할 수 있을 때"),oc.forEach(s),fs.forEach(s),St=r(n),Yn=o(n,"P",{});var lc=l(Yn);po=u(lc,"모든 조건이 충족된다면 밸류 오브젝트가 적절한 선택이 될 것이다."),lc.forEach(s),xt=r(n),hn=o(n,"P",{});var cc=l(hn);eo=u(cc,`마치 모든 것이 밸류 오브젝트가 되어야 한다고 말하는 것처럼 보일 수 있지만, 실제로 그게 나쁜 아이디어는 아니다.
부적합한게 아니라면 최대한 많은 것들을 밸류 오브젝트로 만드는 것이 좋다.
부적합하다고 판단이 들면 그 때 엔티티로 변경한다`),cc.forEach(s),Ct=r(n),Lt=o(n,"BR",{}),Gt=o(n,"BR",{}),Nt=r(n),g=o(n,"H3",{id:!0});var pl=l(g);nn=o(pl,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var uc=l(nn);gs=o(uc,"SPAN",{class:!0}),l(gs).forEach(s),uc.forEach(s),oo=u(pl,"애그리거트"),pl.forEach(s),Ht=r(n),gn=o(n,"P",{});var ic=l(gn);lo=u(ic,`애그리거트는 Domain Driven Design에서 가장 어려운 개념 중 하나로, 잘못 구현되는 경우가 많다.
코드를 조직화하는데 도움이 된다면 좋지만, 잘못 구현되면 개발 속도를 늦추고 일관성을 해치는 요소가 될 수 있다.`),ic.forEach(s),Bt=r(n),ns=o(n,"P",{});var rc=l(ns);co=u(rc,`애그리거트는 일부 동작에 대해 한 그룹으로 묶을 수 있는 도메인의 집합이다.
예를 들면, 각각의 직원들에 대한 도메인 오브젝트가 있지만 이들을 팀으로 묶는다면 부서 구성과 같은 상황에서 유용할 것이다.
또한, 다양한 통화나 카드, 가상화폐를 묶어 지갑으로 관리할 수도 있으며, 이 경우 지갑이 애그리거트가 된다.`),rc.forEach(s),Wt=r(n),ss=o(n,"P",{});var kc=l(ss);uo=u(kc,`애그리거트는 array, map, slice 등 데이터 컬렉션 타입과 헷갈리기도 하는데, 이들은 동일한 개념이 아니다.
애그리거트는 컬렉션을 사용할 수도 있지만, 애그리거트는 DDD 개념이기 때문에 일반적으로 여러 컬렉션, 필드, 함수, 메서드 등을 포함한다.`),kc.forEach(s),qt=r(n),as=o(n,"P",{});var fc=l(as);io=u(fc,`애그리거트의 주된 역할은 포함된 도매인 개체끼리의 트랜잭션 경계를 정의하는 것이다.
개체에 대한 CRUD는 애그리거트 전체에 걸쳐 일어나거나, 또는 전혀 일어나지 않아야 한다.
이를테면 새로운 직원이 팀에 입사하면, 직속 관리자 구조를 업데이트해야 할 수 있다.
그리고 사용자가 지갑에 새로운 카드를 추가하면, 해당 카드의 잔액이 지갑의 전체 잔액에 반영되어야 한다.`),fc.forEach(s),jt=r(n),ts=o(n,"P",{});var mc=l(ts);ro=u(mc,"애그리거트는 다음과 같이 구현할 수 있다."),mc.forEach(s),Zt=r(n),Es(sn.$$.fragment,n),zt=r(n),_=o(n,"P",{});var w=l(_);ko=u(w,"위 코드에서 "),na=o(w,"CODE",{});var dc=l(na);fo=u(dc,"Wallet"),dc.forEach(s),mo=u(w," 구조체의 "),sa=o(w,"CODE",{});var Ec=l(sa);Eo=u(Ec,"id"),Ec.forEach(s),_o=u(w,`는 애그리거트 루트이며, 지갑의 식별자이다.
`),aa=o(w,"CODE",{});var _c=l(aa);vo=u(_c,"ownerId"),_c.forEach(s),wo=u(w,`는 지갑을 소유하는 엔티티의 식별자이다. 소유자에 대한 모든 정보를 포함할 필요는 없으며, 필요할 때 가져올 수 있게끔 소유자의 식별자만 있으면 된다.
`),ta=o(w,"CODE",{});var vc=l(ta);yo=u(vc,"walletItems"),vc.forEach(s),Do=u(w,"는 "),pa=o(w,"CODE",{});var wc=l(pa);bo=u(wc,"WalletItem"),wc.forEach(s),Po=u(w,"의 집합이며, "),ea=o(w,"CODE",{});var yc=l(ea);Ao=u(yc,"WalletItem"),yc.forEach(s),$o=u(w,"은 다른 곳에서 정의한 엔티티이므로 여기서는 인터페이스로 정의한다."),w.forEach(s),Ft=r(n),Qt=o(n,"BR",{}),Vt=r(n),an=o(n,"H3",{id:!0});var el=l(an);tn=o(el,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Dc=l(tn);oa=o(Dc,"SPAN",{class:!0}),l(oa).forEach(s),Dc.forEach(s),Io=u(el,"애그리거트 찾기"),el.forEach(s),Jt=r(n),ps=o(n,"P",{});var bc=l(ps);Mo=u(bc,`Domain Driven Design에서 가장 어려운 작업 중 하나는 어떤 타임을 언제 쓸 지 결정하는 것이다.
도메인 모델을 애그리거트로 클러스터링 하려면, 먼저 제한된 컨텍스트의 불변성을 이해해야 한다.
불변성은 도메인에서 반드시 참이어야 하는 규칙이다.
이를테면 시스템에서 주문을 생성하려면 상품의 재고가 충분해야 한다.
이는 비즈니스적인 불변성이며, 재고가 없는 경우 고객에게 약속할 수 없다.`),bc.forEach(s),Kt=r(n),pn=o(n,"P",{});var Pp=l(pn);Ro=u(Pp,`애그리거트에서는 eventually consistency가 아닌 transactional consistency가 필요하다.
애그리거트에 대한 변경 사항은 즉각적이고 atomic해야 한다.
따라서 애그리거트를 `),la=o(Pp,"EM",{});var Pc=l(la);Oo=u(Pc,"transactional consistency boundary"),Pc.forEach(s),To=u(Pp,`라고 봐도 무방하다.
도메인 내에서 변경 사항이 생길 때마다, 이상적으로는 트랜잭션당 단 하나의 애그리거트만 수정해야 한다.`),Pp.forEach(s),Xt=r(n),Yt=o(n,"BR",{}),ht=r(n),en=o(n,"H3",{id:!0});var ol=l(en);on=o(ol,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Ac=l(on);ca=o(Ac,"SPAN",{class:!0}),l(ca).forEach(s),Ac.forEach(s),Uo=u(ol,"애그리거트 디자인"),ol.forEach(s),gt=r(n),es=o(n,"P",{});var $c=l(es);So=u($c,`일반적으로 애그리거트는 작을수록 좋다.
애그리거트가 작을수록 시스템의 유연성이 높아지고, 성능이 향상되며, 트랜잭션의 성공률이 높아진다.`),$c.forEach(s),np=r(n),ln=o(n,"P",{});var Ap=l(ln);xo=u(Ap,`여러 명의 사용자가 동시에 동일한 주문을 하려 하는 상황을 떠올려보자.
먼저, `),ua=o(Ap,"EM",{});var Ic=l(ua);Co=u(Ic,"주문"),Ic.forEach(s),Lo=u(Ap," 애그리거트를 다음과 같이 정의할 수 있다."),Ap.forEach(s),sp=r(n),bn=o(n,"PRE",{class:!0});var au=l(bn);au.forEach(s),ap=r(n),v=o(n,"P",{});var M=l(v);Go=u(M,"이 "),ia=o(M,"CODE",{});var Mc=l(ia);No=u(Mc,"Order"),Mc.forEach(s),Ho=u(M,` 구조체는 보기엔 괜찮아 보이고, 일반적인 주문 흐름과 유사해 보인다.
하지만, 이 애그리거트에 `),ra=o(M,"CODE",{});var Rc=l(ra);Bo=u(Rc,"marketingOptIn"),Rc.forEach(s),Wo=u(M,` 필드를 추가하는 것은 부적절하다.
제한된 컨텍스트 관점에서 이 애그리거트에 `),ka=o(M,"CODE",{});var Oc=l(ka);qo=u(Oc,"marketingOptIn"),Oc.forEach(s),jo=u(M,`은 주문 객체와 관련이 없고,
사용자가 주문 시작과 완료 사이에 마케팅을 거부하면 주문이 완료되지 않길 원하기 때문이다.
따라서 `),fa=o(M,"CODE",{});var Tc=l(fa);Zo=u(Tc,"marketingOptIn"),Tc.forEach(s),zo=u(M," 필드를 제거하는 것이 바람직하다."),M.forEach(s),tp=r(n),os=o(n,"P",{});var Uc=l(os);Fo=u(Uc,"물론 UI에서 마케팅 선택 확인란 자체를 제거하라는 게 아니라, 단지 애그리거트와 트랜잭션 흐름에서 디커플링되어야 한다는 것이다."),Uc.forEach(s),pp=r(n),ep=o(n,"BR",{}),op=r(n),cn=o(n,"H3",{id:!0});var ll=l(cn);un=o(ll,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Sc=l(un);ma=o(Sc,"SPAN",{class:!0}),l(ma).forEach(s),Sc.forEach(s),Qo=u(ll,"한 개 이상의 제한된 컨텍스트에 걸친 애그리거트"),ll.forEach(s),lp=r(n),ls=o(n,"P",{});var xc=l(ls);Vo=u(xc,`비즈니스 규모에서 제한된 컨텍스트가 변경되거나, 하위 시스템에 대한 알림이 필요한 상황이 있을 수 있다.
여러 제한된 컨텍스트에 걸치는 경우에는 eventual consistency를 목표로 해야 한다.
즉, 다른 시스템이 우리가 보낸 이벤트를 적절히 잘 받아서 처리할 것이라고 기대할 뿐, 제한된 컨텍스트 안에서 하는 것처럼 atomic하게 처리하는 것을 기대하면 안된다.
이를 통해 더 강력한 복원력과 확장 가능성을 가진 분리된 시스템으로 발전할 수 있다(마이크로서비스!).`),xc.forEach(s),cp=r(n),up=o(n,"BR",{}),ip=o(n,"BR",{}),rp=r(n),rn=o(n,"H2",{id:!0});var cl=l(rn);kn=o(cl,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Cc=l(kn);da=o(Cc,"SPAN",{class:!0}),l(da).forEach(s),Cc.forEach(s),Jo=u(cl,"References"),cl.forEach(s),kp=r(n),fp=o(n,"HR",{}),mp=r(n),cs=o(n,"CENTER",{});var Lc=l(cs);R=o(Lc,"P",{});var ms=l(R);Pn=o(ms,"A",{href:!0,rel:!0});var Gc=l(Pn);us=o(Gc,"IMG",{src:!0,alt:!0}),Gc.forEach(s),Ko=r(ms),Xo=o(ms,"BR",{}),Yo=r(ms),An=o(ms,"A",{href:!0,rel:!0});var Nc=l(An);ho=u(Nc,"Matthew Boyle, Domain-Driven Design with Golang』, O’Reilly Media, Inc."),Nc.forEach(s),ms.forEach(s),Lc.forEach(s),this.h()},h(){k(m,"class","icon icon-link"),k(E,"aria-hidden","true"),k(E,"tabindex","-1"),k(E,"href","#엔티티"),k(f,"id","엔티티"),Hc(Rn.src,ul="/post_img/Backend/Architecture/DDD/3/1.png")||k(Rn,"src",ul),k(Rn,"alt","Alt text"),k(mn,"class","language-go"),k(Os,"class","icon icon-link"),k(S,"aria-hidden","true"),k(S,"tabindex","-1"),k(S,"href","#좋은-식별자-생성하기"),k(U,"id","좋은-식별자-생성하기"),k(dn,"class","language-go"),k(En,"class","language-text"),k(_n,"class","language-go"),k(vn,"class","language-text"),k(wn,"class","language-go"),k(Ss,"class","icon icon-link"),k(G,"aria-hidden","true"),k(G,"tabindex","-1"),k(G,"href","#엔티티를-정의할-때-주의해야-할-점"),k(L,"id","엔티티를-정의할-때-주의해야-할-점"),k(Gs,"class","icon icon-link"),k(Z,"aria-hidden","true"),k(Z,"tabindex","-1"),k(Z,"href","#orm을-사용할-때-주의할-점"),k(j,"id","orm을-사용할-때-주의할-점"),k(Ns,"class","icon icon-link"),k(F,"aria-hidden","true"),k(F,"tabindex","-1"),k(F,"href","#밸류-오브젝트"),k(z,"id","밸류-오브젝트"),k(yn,"class","language-bash"),k(Dn,"class","language-go"),k(Ks,"class","icon icon-link"),k(h,"aria-hidden","true"),k(h,"tabindex","-1"),k(h,"href","#언제-엔티티를-사용하고-언제-밸류-오브젝트를-사용해야-할까"),k(Y,"id","언제-엔티티를-사용하고-언제-밸류-오브젝트를-사용해야-할까"),k(gs,"class","icon icon-link"),k(nn,"aria-hidden","true"),k(nn,"tabindex","-1"),k(nn,"href","#애그리거트"),k(g,"id","애그리거트"),k(oa,"class","icon icon-link"),k(tn,"aria-hidden","true"),k(tn,"tabindex","-1"),k(tn,"href","#애그리거트-찾기"),k(an,"id","애그리거트-찾기"),k(ca,"class","icon icon-link"),k(on,"aria-hidden","true"),k(on,"tabindex","-1"),k(on,"href","#애그리거트-디자인"),k(en,"id","애그리거트-디자인"),k(bn,"class","language-go"),k(ma,"class","icon icon-link"),k(un,"aria-hidden","true"),k(un,"tabindex","-1"),k(un,"href","#한-개-이상의-제한된-컨텍스트에-걸친-애그리거트"),k(cn,"id","한-개-이상의-제한된-컨텍스트에-걸친-애그리거트"),k(da,"class","icon icon-link"),k(kn,"aria-hidden","true"),k(kn,"tabindex","-1"),k(kn,"href","#references"),k(rn,"id","references"),Hc(us.src,il="https://learning.oreilly.com/covers/urn:orm:book:9781804613450/400w/")||k(us,"src",il),k(us,"alt","Domain-Driven Design with Golang Cover"),k(Pn,"href","https://learning.oreilly.com/library/view/domain-driven-design-with/9781804613450/"),k(Pn,"rel","nofollow"),k(An,"href","https://learning.oreilly.com/library/view/domain-driven-design-with/9781804613450/"),k(An,"rel","nofollow")},m(n,t){p(n,f,t),a(f,E),a(E,m),a(f,d),p(n,Da,t),p(n,T,t),a(T,$p),a(T,Ps),a(Ps,Ip),a(T,Mp),p(n,ba,t),p(n,In,t),a(In,Rp),p(n,Pa,t),p(n,Mn,t),a(Mn,Rn),p(n,Aa,t),p(n,On,t),a(On,Op),p(n,$a,t),p(n,P,t),a(P,As),a(As,Tp),a(P,Up),a(P,$s),a($s,Sp),a(P,xp),a(P,Is),a(Is,Cp),p(n,Ia,t),p(n,Tn,t),a(Tn,Lp),p(n,Ma,t),p(n,Un,t),a(Un,Gp),p(n,Ra,t),p(n,mn,t),mn.innerHTML=Bc,p(n,Oa,t),p(n,A,t),a(A,Np),a(A,Ms),a(Ms,Hp),a(A,Bp),a(A,Rs),a(Rs,Wp),a(A,qp),p(n,Ta,t),p(n,Ua,t),p(n,Sa,t),p(n,U,t),a(U,S),a(S,Os),a(U,jp),p(n,xa,t),p(n,x,t),a(x,Zp),a(x,Ts),a(Ts,zp),a(x,Fp),p(n,Ca,t),p(n,Sn,t),a(Sn,Qp),p(n,La,t),p(n,dn,t),dn.innerHTML=Wc,p(n,Ga,t),p(n,xn,t),a(xn,Vp),p(n,Na,t),p(n,En,t),En.innerHTML=qc,p(n,Ha,t),p(n,Cn,t),a(Cn,Jp),p(n,Ba,t),p(n,_n,t),_n.innerHTML=jc,p(n,Wa,t),p(n,vn,t),vn.innerHTML=Zc,p(n,qa,t),p(n,C,t),a(C,Kp),a(C,Us),a(Us,Xp),a(C,Yp),p(n,ja,t),p(n,Ln,t),a(Ln,hp),p(n,Za,t),p(n,wn,t),wn.innerHTML=zc,p(n,za,t),p(n,Gn,t),a(Gn,gp),p(n,Fa,t),p(n,L,t),a(L,G),a(G,Ss),a(L,ne),p(n,Qa,t),p(n,N,t),a(N,se),a(N,xs),a(xs,ae),a(N,te),p(n,Va,t),p(n,Nn,t),a(Nn,pe),p(n,Ja,t),p(n,Hn,t),a(Hn,ee),p(n,Ka,t),_s(H,n,t),p(n,Xa,t),p(n,B,t),a(B,oe),a(B,Cs),a(Cs,le),a(B,ce),p(n,Ya,t),p(n,Bn,t),a(Bn,ue),p(n,ha,t),_s(W,n,t),p(n,ga,t),p(n,q,t),a(q,ie),a(q,Ls),a(Ls,re),a(q,ke),p(n,nt,t),p(n,Wn,t),a(Wn,fe),p(n,st,t),p(n,at,t),p(n,tt,t),p(n,j,t),a(j,Z),a(Z,Gs),a(j,me),p(n,pt,t),p(n,qn,t),a(qn,de),p(n,et,t),p(n,jn,t),a(jn,Ee),p(n,ot,t),p(n,lt,t),p(n,ct,t),p(n,ut,t),p(n,z,t),a(z,F),a(F,Ns),a(z,_e),p(n,it,t),p(n,Zn,t),a(Zn,ve),p(n,rt,t),p(n,Q,t),a(Q,we),a(Q,Hs),a(Hs,ye),a(Q,De),p(n,kt,t),_s(V,n,t),p(n,ft,t),p(n,zn,t),a(zn,be),p(n,mt,t),_s(J,n,t),p(n,dt,t),p(n,Fn,t),a(Fn,Pe),p(n,Et,t),p(n,yn,t),yn.innerHTML=Fc,p(n,_t,t),p(n,b,t),a(b,Ae),a(b,Bs),a(Bs,$e),a(b,Ie),a(b,Ws),a(Ws,Me),a(b,Re),a(b,qs),a(qs,Oe),a(b,Te),p(n,vt,t),p(n,Qn,t),a(Qn,Ue),p(n,wt,t),p(n,Dn,t),Dn.innerHTML=Qc,p(n,yt,t),p(n,Vn,t),a(Vn,Se),p(n,Dt,t),p(n,D,t),a(D,js),a(js,xe),a(D,Ce),a(D,Zs),a(Zs,Le),a(D,Ge),a(D,zs),a(zs,Ne),a(D,He),a(D,Fs),a(Fs,Be),a(D,We),p(n,bt,t),p(n,K,t),a(K,qe),a(K,Qs),a(Qs,je),a(K,Ze),p(n,Pt,t),_s(X,n,t),p(n,At,t),p(n,$,t),a($,ze),a($,Vs),a(Vs,Fe),a($,Qe),a($,Js),a(Js,Ve),a($,Je),p(n,$t,t),p(n,Jn,t),a(Jn,Ke),p(n,It,t),p(n,Mt,t),p(n,Rt,t),p(n,Y,t),a(Y,h),a(h,Ks),a(Y,Xe),p(n,Ot,t),p(n,Kn,t),a(Kn,Ye),p(n,Tt,t),p(n,Xn,t),a(Xn,he),p(n,Ut,t),p(n,I,t),a(I,Xs),a(Xs,ge),a(I,no),a(I,Ys),a(Ys,so),a(I,ao),a(I,hs),a(hs,to),p(n,St,t),p(n,Yn,t),a(Yn,po),p(n,xt,t),p(n,hn,t),a(hn,eo),p(n,Ct,t),p(n,Lt,t),p(n,Gt,t),p(n,Nt,t),p(n,g,t),a(g,nn),a(nn,gs),a(g,oo),p(n,Ht,t),p(n,gn,t),a(gn,lo),p(n,Bt,t),p(n,ns,t),a(ns,co),p(n,Wt,t),p(n,ss,t),a(ss,uo),p(n,qt,t),p(n,as,t),a(as,io),p(n,jt,t),p(n,ts,t),a(ts,ro),p(n,Zt,t),_s(sn,n,t),p(n,zt,t),p(n,_,t),a(_,ko),a(_,na),a(na,fo),a(_,mo),a(_,sa),a(sa,Eo),a(_,_o),a(_,aa),a(aa,vo),a(_,wo),a(_,ta),a(ta,yo),a(_,Do),a(_,pa),a(pa,bo),a(_,Po),a(_,ea),a(ea,Ao),a(_,$o),p(n,Ft,t),p(n,Qt,t),p(n,Vt,t),p(n,an,t),a(an,tn),a(tn,oa),a(an,Io),p(n,Jt,t),p(n,ps,t),a(ps,Mo),p(n,Kt,t),p(n,pn,t),a(pn,Ro),a(pn,la),a(la,Oo),a(pn,To),p(n,Xt,t),p(n,Yt,t),p(n,ht,t),p(n,en,t),a(en,on),a(on,ca),a(en,Uo),p(n,gt,t),p(n,es,t),a(es,So),p(n,np,t),p(n,ln,t),a(ln,xo),a(ln,ua),a(ua,Co),a(ln,Lo),p(n,sp,t),p(n,bn,t),bn.innerHTML=Vc,p(n,ap,t),p(n,v,t),a(v,Go),a(v,ia),a(ia,No),a(v,Ho),a(v,ra),a(ra,Bo),a(v,Wo),a(v,ka),a(ka,qo),a(v,jo),a(v,fa),a(fa,Zo),a(v,zo),p(n,tp,t),p(n,os,t),a(os,Fo),p(n,pp,t),p(n,ep,t),p(n,op,t),p(n,cn,t),a(cn,un),a(un,ma),a(cn,Qo),p(n,lp,t),p(n,ls,t),a(ls,Vo),p(n,cp,t),p(n,up,t),p(n,ip,t),p(n,rp,t),p(n,rn,t),a(rn,kn),a(kn,da),a(rn,Jo),p(n,kp,t),p(n,fp,t),p(n,mp,t),p(n,cs,t),a(cs,R),a(R,Pn),a(Pn,us),a(R,Ko),a(R,Xo),a(R,Yo),a(R,An),a(An,ho),dp=!0},p(n,[t]){const Ea={};t&1&&(Ea.$$scope={dirty:t,ctx:n}),H.$set(Ea);const $n={};t&1&&($n.$$scope={dirty:t,ctx:n}),W.$set($n);const _a={};t&1&&(_a.$$scope={dirty:t,ctx:n}),V.$set(_a);const va={};t&1&&(va.$$scope={dirty:t,ctx:n}),J.$set(va);const wa={};t&1&&(wa.$$scope={dirty:t,ctx:n}),X.$set(wa);const ya={};t&1&&(ya.$$scope={dirty:t,ctx:n}),sn.$set(ya)},i(n){dp||(vs(H.$$.fragment,n),vs(W.$$.fragment,n),vs(V.$$.fragment,n),vs(J.$$.fragment,n),vs(X.$$.fragment,n),vs(sn.$$.fragment,n),dp=!0)},o(n){ws(H.$$.fragment,n),ws(W.$$.fragment,n),ws(V.$$.fragment,n),ws(J.$$.fragment,n),ws(X.$$.fragment,n),ws(sn.$$.fragment,n),dp=!1},d(n){n&&s(f),n&&s(Da),n&&s(T),n&&s(ba),n&&s(In),n&&s(Pa),n&&s(Mn),n&&s(Aa),n&&s(On),n&&s($a),n&&s(P),n&&s(Ia),n&&s(Tn),n&&s(Ma),n&&s(Un),n&&s(Ra),n&&s(mn),n&&s(Oa),n&&s(A),n&&s(Ta),n&&s(Ua),n&&s(Sa),n&&s(U),n&&s(xa),n&&s(x),n&&s(Ca),n&&s(Sn),n&&s(La),n&&s(dn),n&&s(Ga),n&&s(xn),n&&s(Na),n&&s(En),n&&s(Ha),n&&s(Cn),n&&s(Ba),n&&s(_n),n&&s(Wa),n&&s(vn),n&&s(qa),n&&s(C),n&&s(ja),n&&s(Ln),n&&s(Za),n&&s(wn),n&&s(za),n&&s(Gn),n&&s(Fa),n&&s(L),n&&s(Qa),n&&s(N),n&&s(Va),n&&s(Nn),n&&s(Ja),n&&s(Hn),n&&s(Ka),ys(H,n),n&&s(Xa),n&&s(B),n&&s(Ya),n&&s(Bn),n&&s(ha),ys(W,n),n&&s(ga),n&&s(q),n&&s(nt),n&&s(Wn),n&&s(st),n&&s(at),n&&s(tt),n&&s(j),n&&s(pt),n&&s(qn),n&&s(et),n&&s(jn),n&&s(ot),n&&s(lt),n&&s(ct),n&&s(ut),n&&s(z),n&&s(it),n&&s(Zn),n&&s(rt),n&&s(Q),n&&s(kt),ys(V,n),n&&s(ft),n&&s(zn),n&&s(mt),ys(J,n),n&&s(dt),n&&s(Fn),n&&s(Et),n&&s(yn),n&&s(_t),n&&s(b),n&&s(vt),n&&s(Qn),n&&s(wt),n&&s(Dn),n&&s(yt),n&&s(Vn),n&&s(Dt),n&&s(D),n&&s(bt),n&&s(K),n&&s(Pt),ys(X,n),n&&s(At),n&&s($),n&&s($t),n&&s(Jn),n&&s(It),n&&s(Mt),n&&s(Rt),n&&s(Y),n&&s(Ot),n&&s(Kn),n&&s(Tt),n&&s(Xn),n&&s(Ut),n&&s(I),n&&s(St),n&&s(Yn),n&&s(xt),n&&s(hn),n&&s(Ct),n&&s(Lt),n&&s(Gt),n&&s(Nt),n&&s(g),n&&s(Ht),n&&s(gn),n&&s(Bt),n&&s(ns),n&&s(Wt),n&&s(ss),n&&s(qt),n&&s(as),n&&s(jt),n&&s(ts),n&&s(Zt),ys(sn,n),n&&s(zt),n&&s(_),n&&s(Ft),n&&s(Qt),n&&s(Vt),n&&s(an),n&&s(Jt),n&&s(ps),n&&s(Kt),n&&s(pn),n&&s(Xt),n&&s(Yt),n&&s(ht),n&&s(en),n&&s(gt),n&&s(es),n&&s(np),n&&s(ln),n&&s(sp),n&&s(bn),n&&s(ap),n&&s(v),n&&s(tp),n&&s(os),n&&s(pp),n&&s(ep),n&&s(op),n&&s(cn),n&&s(lp),n&&s(ls),n&&s(cp),n&&s(up),n&&s(ip),n&&s(rp),n&&s(rn),n&&s(kp),n&&s(fp),n&&s(mp),n&&s(cs)}}}const du={title:"엔티티, 밸류 오브젝트, 애그리거트",date:"2023-07-13T00:00:00.000Z",excerpt:"Entities, Value Objects, and Aggregates",categories:["Golang","Backend","Architecture","Domain Driven Design"],coverImage:"/post_img/Backend/Architecture/DDD/cover.png",coverWidth:16,coverHeight:9,indexed:!1,exposed:!0};class Eu extends tu{constructor(f){super(),pu(this,f,null,ku,eu,{})}}export{Eu as default,du as metadata};
