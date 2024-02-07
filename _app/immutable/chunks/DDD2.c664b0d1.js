import{S as Bf,i as Nf,s as Gf,k as o,q as e,a as u,y as x,l,m as r,h as n,r as p,c as i,z as U,n as k,b as c,E as a,A as O,g as L,d as H,B as q,M as Xs}from"./index.d78780bf.js";import{C as Vs}from"./CodeBlockWrapper.eeb7c0c0.js";import{I as Mo}from"./Image.605b14b5.js";function jf(y){let f,v=`<code class="language-go"><span class="token keyword">package</span> chapter2

<span class="token keyword">import</span> <span class="token string">"context"</span>

<span class="token keyword">type</span> UserType <span class="token operator">=</span> <span class="token builtin">int</span>
<span class="token keyword">type</span> SubscriptionType <span class="token operator">=</span> <span class="token builtin">int</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
	unknownUserType UserType <span class="token operator">=</span> <span class="token boolean">iota</span>
	lead
	customer
	churned
	lostLead
<span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
	unknownSubscriptionType SubscriptionType <span class="token operator">=</span> <span class="token boolean">iota</span>
	basic
	premium
	exclusive
<span class="token punctuation">)</span>

<span class="token keyword">type</span> UserAddRequest <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	UserType       UserType
	Email          <span class="token builtin">string</span>
	SubType        SubscriptionType
	PaymentDetails PaymentDetails
<span class="token punctuation">&#125;</span>

<span class="token keyword">type</span> UserModifyRequest <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	ID             <span class="token builtin">string</span>
	UserType       UserType
	Email          <span class="token builtin">string</span>
	SubType        SubscriptionType
	PaymentDetails PaymentDetails
<span class="token punctuation">&#125;</span>

<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	ID             <span class="token builtin">string</span>
	PaymentDetails PaymentDetails
<span class="token punctuation">&#125;</span>

<span class="token keyword">type</span> PaymentDetails <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	stripeTokenID <span class="token builtin">string</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">type</span> UserManager <span class="token keyword">interface</span> <span class="token punctuation">&#123;</span>
	<span class="token function">AddUser</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> request UserAddRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span>User<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
	<span class="token function">ModifyUser</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> request UserModifyRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span>User<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){f=o("pre"),this.h()},l(m){f=l(m,"PRE",{class:!0});var E=r(f);E.forEach(n),this.h()},h(){k(f,"class","language-go")},m(m,E){c(m,f,E),f.innerHTML=v},p:Xs,d(m){m&&n(f)}}}function Qf(y){let f,v=`<code class="language-go"><span class="token keyword">type</span> UserType <span class="token operator">=</span> <span class="token builtin">int</span>
<span class="token keyword">type</span> SubscriptionType <span class="token operator">=</span> <span class="token builtin">int</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
	unknownUserType UserType <span class="token operator">=</span> <span class="token boolean">iota</span>
	lead
	customer
	churned
	lostLead
<span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
	unknownSubscriptionType SubscriptionType <span class="token operator">=</span> <span class="token boolean">iota</span>
	basic
	premium
	exclusive
<span class="token punctuation">)</span></code>`;return{c(){f=o("pre"),this.h()},l(m){f=l(m,"PRE",{class:!0});var E=r(f);E.forEach(n),this.h()},h(){k(f,"class","language-go")},m(m,E){c(m,f,E),f.innerHTML=v},p:Xs,d(m){m&&n(f)}}}function Ff(y){let f,v=`<code class="language-go"><span class="token keyword">type</span> UserAddRequest <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	UserType       UserType
	Email          <span class="token builtin">string</span>
	SubType        SubscriptionType
	PaymentDetails PaymentDetails
<span class="token punctuation">&#125;</span>

<span class="token keyword">type</span> UserModifyRequest <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	ID             <span class="token builtin">string</span>
	UserType       UserType
	Email          <span class="token builtin">string</span>
	SubType        SubscriptionType
	PaymentDetails PaymentDetails
<span class="token punctuation">&#125;</span>

<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	ID             <span class="token builtin">string</span>
	PaymentDetails PaymentDetails
<span class="token punctuation">&#125;</span>

<span class="token keyword">type</span> PaymentDetails <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	stripeTokenID <span class="token builtin">string</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">type</span> UserManager <span class="token keyword">interface</span> <span class="token punctuation">&#123;</span>
	<span class="token function">AddUser</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> request UserAddRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span>User<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
	<span class="token function">ModifyUser</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> request UserModifyRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span>User<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){f=o("pre"),this.h()},l(m){f=l(m,"PRE",{class:!0});var E=r(f);E.forEach(n),this.h()},h(){k(f,"class","language-go")},m(m,E){c(m,f,E),f.innerHTML=v},p:Xs,d(m){m&&n(f)}}}function Kf(y){let f,v=`<code class="language-go"><span class="token keyword">type</span> LeadRequest <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	email <span class="token builtin">string</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">type</span> Lead <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	id <span class="token builtin">string</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">type</span> LeadCreater <span class="token keyword">interface</span> <span class="token punctuation">&#123;</span>
	<span class="token function">CreateLead</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> request LeadRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span>Lead<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">type</span> Customer <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	leadID <span class="token builtin">string</span>
	userID <span class="token builtin">string</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Customer<span class="token punctuation">)</span> <span class="token function">UserID</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">return</span> c<span class="token punctuation">.</span>userID
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Customer<span class="token punctuation">)</span> <span class="token function">SetUserID</span><span class="token punctuation">(</span>userID <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	c<span class="token punctuation">.</span>userID <span class="token operator">=</span> userID
<span class="token punctuation">&#125;</span>

<span class="token keyword">type</span> LeadConvertor <span class="token keyword">interface</span> <span class="token punctuation">&#123;</span>
	<span class="token function">Convert</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> subSelection SubscriptionType<span class="token punctuation">)</span> <span class="token punctuation">(</span>Customer<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>l Lead<span class="token punctuation">)</span> <span class="token function">Convert</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> subSelection SubscriptionType<span class="token punctuation">)</span> <span class="token punctuation">(</span>Customer<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token comment">// TODO: implement</span>
	<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">"implement me"</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){f=o("pre"),this.h()},l(m){f=l(m,"PRE",{class:!0});var E=r(f);E.forEach(n),this.h()},h(){k(f,"class","language-go")},m(m,E){c(m,f,E),f.innerHTML=v},p:Xs,d(m){m&&n(f)}}}function Wf(y){let f,v=`<code class="language-go"><span class="token keyword">package</span> chapter2

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"context"</span>
	<span class="token string">"encoding/json"</span>
	<span class="token string">"github.com/gofiber/fiber/v2"</span>
	<span class="token string">"net/http"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> UserHandler <span class="token keyword">interface</span> <span class="token punctuation">&#123;</span>
	<span class="token function">IsUserPaymentActive</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> userID <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">type</span> UserActiveResponse <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	IsActive <span class="token builtin">bool</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token function">router</span><span class="token punctuation">(</span>u UserHandler<span class="token punctuation">,</span> app <span class="token operator">*</span>fiber<span class="token punctuation">.</span>App<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	app<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">"/user/&#123;userID&#125;/payment/active"</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>fiber<span class="token punctuation">.</span>Ctx<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">&#123;</span>
		uID <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span><span class="token string">"userID"</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> uID <span class="token operator">==</span> <span class="token string">""</span> <span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> ctx<span class="token punctuation">.</span><span class="token function">SendStatus</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusBadRequest<span class="token punctuation">)</span>
		<span class="token punctuation">&#125;</span>
		isActive <span class="token operator">:=</span> u<span class="token punctuation">.</span><span class="token function">IsUserPaymentActive</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span><span class="token function">UserContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> uID<span class="token punctuation">)</span>

		b<span class="token punctuation">,</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>UserActiveResponse<span class="token punctuation">&#123;</span>IsActive<span class="token punctuation">:</span> isActive<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> ctx<span class="token punctuation">.</span><span class="token function">SendStatus</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusInternalServerError<span class="token punctuation">)</span>
		<span class="token punctuation">&#125;</span>

		<span class="token keyword">return</span> ctx<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){f=o("pre"),this.h()},l(m){f=l(m,"PRE",{class:!0});var E=r(f);E.forEach(n),this.h()},h(){k(f,"class","language-go")},m(m,E){c(m,f,E),f.innerHTML=v},p:Xs,d(m){m&&n(f)}}}function zf(y){let f,v=`<code class="language-yml"><span class="token key atrule">swagger</span><span class="token punctuation">:</span> <span class="token string">'2.0'</span>
<span class="token key atrule">info</span><span class="token punctuation">:</span>
  <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">'Public documentation for payment &amp; subscription System'</span>
  <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">'1.0.0'</span>
  <span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">'Payment &amp; Subscription API'</span>
  <span class="token key atrule">contact</span><span class="token punctuation">:</span>
    <span class="token key atrule">email</span><span class="token punctuation">:</span> <span class="token string">'ourteam@subs.com'</span>
<span class="token key atrule">host</span><span class="token punctuation">:</span> <span class="token string">'api.payments.com'</span>
<span class="token key atrule">schemes</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token string">'https'</span>
<span class="token key atrule">paths</span><span class="token punctuation">:</span>
  <span class="token key atrule">/users</span><span class="token punctuation">:</span>
    <span class="token key atrule">get</span><span class="token punctuation">:</span>
      <span class="token key atrule">summary</span><span class="token punctuation">:</span> <span class="token string">'Return details about users'</span>
      <span class="token key atrule">operationId</span><span class="token punctuation">:</span> <span class="token string">'getUsers'</span>
      <span class="token key atrule">produces</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">'application/json'</span>
      <span class="token key atrule">responses</span><span class="token punctuation">:</span>
        <span class="token key atrule">'200'</span><span class="token punctuation">:</span>
          <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">'successful operation'</span>
          <span class="token key atrule">schema</span><span class="token punctuation">:</span>
            <span class="token key atrule">$ref</span><span class="token punctuation">:</span> <span class="token string">'#/definitions/User'</span>
        <span class="token key atrule">'400'</span><span class="token punctuation">:</span>
          <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">'bad request'</span>
        <span class="token key atrule">'404'</span><span class="token punctuation">:</span>
          <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">'users not found'</span>
<span class="token key atrule">definitions</span><span class="token punctuation">:</span>
  <span class="token key atrule">User</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">'object'</span>
    <span class="token key atrule">properties</span><span class="token punctuation">:</span>
      <span class="token key atrule">id</span><span class="token punctuation">:</span>
        <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">'integer'</span>
	<span class="token punctuation">...</span></code>`;return{c(){f=o("pre"),this.h()},l(m){f=l(m,"PRE",{class:!0});var E=r(f);E.forEach(n),this.h()},h(){k(f,"class","language-yml")},m(m,E){c(m,f,E),f.innerHTML=v},p:Xs,d(m){m&&n(f)}}}function Zf(y){let f,v=`<code class="language-proto">syntax = &quot;proto3&quot;;

option go_package = &quot;github.com/jhseoeo/Golang-DDD/chapter2/grpc/user&quot;;

package user.v1;

message User &#123;
    int64 id = 1;
    string username = 2;
    string email = 3;
&#125;

service UserService &#123;
	rpc CreateUser (CreateUserRequest) returns (CreateUserResponse) &#123;&#125;
&#125;

message CreateUserRequest &#123;
	User user = 1;
&#125;

message CreateUserResponse &#123;
	bool success = 1;
&#125;</code>`;return{c(){f=o("pre"),this.h()},l(m){f=l(m,"PRE",{class:!0});var E=r(f);E.forEach(n),this.h()},h(){k(f,"class","language-proto")},m(m,E){c(m,f,E),f.innerHTML=v},p:Xs,d(m){m&&n(f)}}}function Jf(y){let f,v=`<code class="language-go"><span class="token keyword">package</span> chapter2

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"errors"</span>
	<span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Campaign <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	ID      <span class="token builtin">string</span>
	Title   <span class="token builtin">string</span>
	Goal    <span class="token builtin">string</span>
	EndDate time<span class="token punctuation">.</span>Time
<span class="token punctuation">&#125;</span>

<span class="token keyword">type</span> MarketingCampaignModel <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	Id       <span class="token builtin">string</span> <span class="token string">&#96;json:"id"&#96;</span>
	Metadata <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
		Name     <span class="token builtin">string</span> <span class="token string">&#96;json:"name"&#96;</span>
		Category <span class="token builtin">string</span> <span class="token string">&#96;json:"category"&#96;</span>
		EndDate  <span class="token builtin">string</span> <span class="token string">&#96;json:"endDate"&#96;</span>
	<span class="token punctuation">&#125;</span> <span class="token string">&#96;json:"metadata"&#96;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>MarketingCampaignModel<span class="token punctuation">)</span> <span class="token function">ToCampaign</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>Campaign<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">if</span> m<span class="token punctuation">.</span>Id <span class="token operator">==</span> <span class="token string">""</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"campaign ID cannot be empty"</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	formattedDate<span class="token punctuation">,</span> err <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token string">"2006-01-02"</span><span class="token punctuation">,</span> m<span class="token punctuation">.</span>Metadata<span class="token punctuation">.</span>EndDate<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"endDate was not in a parsable format"</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	<span class="token keyword">return</span> <span class="token operator">&amp;</span>Campaign<span class="token punctuation">&#123;</span>
		ID<span class="token punctuation">:</span>      m<span class="token punctuation">.</span>Id<span class="token punctuation">,</span>
		Title<span class="token punctuation">:</span>   m<span class="token punctuation">.</span>Metadata<span class="token punctuation">.</span>Name<span class="token punctuation">,</span>
		Goal<span class="token punctuation">:</span>    m<span class="token punctuation">.</span>Metadata<span class="token punctuation">.</span>Category<span class="token punctuation">,</span>
		EndDate<span class="token punctuation">:</span> formattedDate<span class="token punctuation">,</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){f=o("pre"),this.h()},l(m){f=l(m,"PRE",{class:!0});var E=r(f);E.forEach(n),this.h()},h(){k(f,"class","language-go")},m(m,E){c(m,f,E),f.innerHTML=v},p:Xs,d(m){m&&n(f)}}}function Vf(y){let f,v,m,E,zt,Zt,Jt,h,Ro,oa,To,Io,Vt,kn,D,A,la,So,xo,ca,Uo,Oo,ra,Lo,Ho,ua,qo,Bo,No,fn,ia,Go,jo,Qo,_,ka,Fo,Ko,fa,Wo,zo,ma,Zo,Jo,Ea,Vo,Xo,va,Yo,go,_a,ho,sl,ba,nl,al,tl,B,el,ya,pl,ol,da,ll,cl,Pa,rl,ul,il,C,$a,kl,fl,Da,ml,El,wa,vl,_l,Aa,bl,yl,Xt,mn,dl,Yt,ss,gt,En,Pl,ht,se,ne,ae,ns,as,Ca,$l,te,ee,pe,M,Dl,Ma,wl,Al,Ra,Cl,Ml,Ta,Rl,Tl,oe,vn,Il,le,G,Sl,Ia,xl,Ul,Sa,Ol,Ll,ce,_n,Hl,re,ts,ql,xa,Bl,Nl,ue,ie,ke,fe,es,ps,Ua,Gl,me,Ee,ve,bn,jl,_e,R,Ql,Oa,Fl,Kl,La,Wl,zl,Ha,Zl,Jl,be,yn,Vl,ye,dn,Xl,de,os,ls,qa,Yl,Pe,j,gl,Ba,hl,sc,Na,nc,ac,$e,Pn,tc,De,cs,we,rs,ec,Ga,pc,oc,Ae,T,lc,ja,cc,rc,Qa,uc,ic,Fa,kc,fc,Ce,Me,Re,$n,mc,Te,us,Ie,Dn,Ec,Se,b,vc,Ka,_c,bc,Wa,yc,dc,za,Pc,$c,Za,Dc,wc,Ja,Ac,Cc,Va,Mc,Rc,xe,is,Tc,Xa,Ic,Sc,Ue,wn,xc,Oe,Le,He,Q,Uc,Ya,Oc,Lc,ga,Hc,qc,qe,ks,Be,P,Bc,ha,Nc,Gc,st,jc,Qc,nt,Fc,Kc,at,Wc,zc,Ne,fs,ms,tt,Zc,Ge,An,Jc,je,Es,vs,et,Vc,Qe,I,Xc,pt,Yc,gc,ot,hc,sr,lt,nr,ar,Fe,Ke,We,ze,_s,bs,ct,tr,Ze,Je,Ve,ys,er,rt,pr,or,Xe,Cn,lr,Ye,Ys,ge,Mn,cr,he,gs,sp,F,rr,ut,ur,ir,it,kr,fr,np,K,mr,kt,Er,vr,ft,_r,br,ap,Rn,yr,tp,Tn,Y,mt,dr,Pr,Et,$r,Dr,vt,wr,ep,ds,Ps,_t,Ar,pp,In,Cr,op,Sn,Mr,lp,hs,cp,xn,Rr,rp,$s,up,Ds,Tr,bt,Ir,Sr,ip,Un,xr,kp,fp,mp,ws,As,yt,Ur,Ep,On,Or,vp,Cs,Lr,dt,Hr,qr,_p,Ms,Rs,Pt,Br,bp,Ln,Nr,yp,Ts,dp,W,Gr,$t,jr,Qr,sn,Fr,Kr,Pp,Is,Wr,Dt,zr,Zr,$p,nn,wf='<code class="language-bash">go <span class="token function">install</span> github.com/deepmap/oapi-codegen/cmd/oapi-codegen@latest</code>',Dp,Hn,Jr,wp,an,Af=`<code class="language-yml"><span class="token key atrule">package</span><span class="token punctuation">:</span> oapi
<span class="token key atrule">output</span><span class="token punctuation">:</span> ./openapi.gen.go
<span class="token key atrule">generate</span><span class="token punctuation">:</span>
  <span class="token key atrule">models</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></code>`,Ap,qn,Vr,Cp,tn,Cf='<code class="language-bash">oapi-codegen <span class="token parameter variable">--config</span><span class="token operator">=</span>config.yml  ./oapi.yaml</code>',Mp,Ss,Xr,wt,Yr,gr,Rp,z,hr,At,su,nu,Ct,au,tu,Tp,Bn,eu,Ip,Nn,pu,Sp,Gn,ou,xp,jn,lu,Up,Op,Lp,Hp,xs,Us,Mt,cu,qp,Qn,ru,Bp,Fn,uu,Np,Os,iu,Rt,ku,fu,Gp,Ls,jp,Kn,mu,Qp,Wn,Eu,Fp,Z,vu,Tt,_u,bu,It,yu,du,Kp,en,Mf=`<code class="language-bash"><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> protobuf-compiler
go <span class="token function">install</span> google.golang.org/protobuf/cmd/protoc-gen-go@latest
go <span class="token function">install</span> google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">"<span class="token environment constant">$PATH</span>:<span class="token variable"><span class="token variable">$(</span>go <span class="token function">env</span> GOPATH<span class="token variable">)</span></span>/bin"</span></code>`,Wp,zn,Pu,zp,pn,Rf=`<code class="language-bash">protoc <span class="token parameter variable">--go_out</span><span class="token operator">=</span>. <span class="token parameter variable">--go_opt</span><span class="token operator">=</span>paths<span class="token operator">=</span>source_relative <span class="token punctuation"></span>
    --go-grpc_out<span class="token operator">=</span>. --go-grpc_opt<span class="token operator">=</span>paths<span class="token operator">=</span>source_relative <span class="token punctuation"></span>
    grpc/userservice.proto</code>`,Zp,J,$u,St,Du,wu,xt,Au,Cu,Jp,Zn,Mu,Vp,Xp,Yp,Hs,qs,Ut,Ru,gp,Bs,Tu,Ot,Iu,Su,hp,on,Tf=`<code class="language-json"><span class="token punctuation">&#123;</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"4cdd4ba9-7c04-4a3d-ac52-71f37ba75d7f"</span><span class="token punctuation">,</span>
	<span class="token property">"metadata"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
		<span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"some campaign"</span><span class="token punctuation">,</span>
		<span class="token property">"category"</span><span class="token operator">:</span> <span class="token string">"growth"</span><span class="token punctuation">,</span>
		<span class="token property">"endDate"</span><span class="token operator">:</span> <span class="token string">"2023-04-12"</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,so,Ns,xu,Lt,Uu,Ou,no,ln,If=`<code class="language-go"><span class="token keyword">type</span> Campaign <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
    id      <span class="token builtin">string</span>
    title   <span class="token builtin">string</span>
    goal    <span class="token builtin">string</span>
    endDate time<span class="token punctuation">.</span>Time
<span class="token punctuation">&#125;</span></code>`,ao,Gs,Lu,Ht,Hu,qu,to,js,eo,V,Bu,qt,Nu,Gu,Bt,ju,Qu,po,Jn,Fu,oo,lo,co,ro,Qs,Fs,Nt,Ku,uo,io,ko,N,Gt,Wu,zu,cn,Zu,Ju,Vu,fo;return ss=new Vs({props:{$$slots:{default:[jf]},$$scope:{ctx:y}}}),cs=new Vs({props:{$$slots:{default:[Qf]},$$scope:{ctx:y}}}),us=new Vs({props:{$$slots:{default:[Ff]},$$scope:{ctx:y}}}),ks=new Vs({props:{$$slots:{default:[Kf]},$$scope:{ctx:y}}}),Ys=new Mo({props:{alt:"Alt text",src:"/post_img/Backend/Architecture/DDD/2/1.png"}}),gs=new Mo({props:{alt:"Alt text",src:"/post_img/Backend/Architecture/DDD/2/2.png"}}),hs=new Mo({props:{alt:"Alt text",src:"/post_img/Backend/Architecture/DDD/2/3.png"}}),$s=new Vs({props:{$$slots:{default:[Wf]},$$scope:{ctx:y}}}),Ts=new Vs({props:{$$slots:{default:[zf]},$$scope:{ctx:y}}}),Ls=new Vs({props:{$$slots:{default:[Zf]},$$scope:{ctx:y}}}),js=new Vs({props:{$$slots:{default:[Jf]},$$scope:{ctx:y}}}),cn=new Mo({props:{alt:"Domain-Driven Design with Golang Cover",src:"https://learning.oreilly.com/covers/urn:orm:book:9781804613450/400w/"}}),{c(){f=o("h2"),v=o("a"),m=o("span"),E=e("상황 설정"),zt=u(),Zt=o("hr"),Jt=u(),h=o("p"),Ro=e("회사에서 새로 생긴 개발팀인 "),oa=o("em"),To=e("과금 및 구독"),Io=e(` 팀의의 리드 개발자가 되었다고 가정해보자.
아무래도 새로운 분야인지라 이 분야의 전문가들과 기본적인 도메인과 작동 방식에 대해 부지런히 논의해야 할 것이다.
그들의 반응은 다음과 같다.`),Vt=u(),kn=o("blockquote"),D=o("ul"),A=o("li"),la=o("em"),So=e("리드(lead)"),xo=e("가 처음으로 앱을 사용하는 경우, 그들은 세 가지 구독 계획을 선택해야 한다. 각각 "),ca=o("em"),Uo=e("basic"),Oo=e(", "),ra=o("em"),Lo=e("premium"),Ho=e(", "),ua=o("em"),qo=e("exclusive"),Bo=e("이다."),No=u(),fn=o("li"),ia=o("em"),Go=e("구독 계획(subscription plan)"),jo=e("에 따라 앱 내에서 접근할 수 있는 기능이 달라지며, 이러한 사항은 변경될 수 있다."),Qo=u(),_=o("li"),ka=o("em"),Fo=e("구독 계획"),Ko=e("이 생성되면 "),fa=o("em"),Wo=e("리드"),zo=e("가 "),ma=o("em"),Zo=e("고객(customer)"),Jo=e("으로 전환되며, "),Ea=o("em"),Vo=e("고객"),Xo=e("은 "),va=o("em"),Yo=e("이탈"),go=e("할 때까지 고객으로 간주한다. 이 경우, "),_a=o("em"),ho=e("고객"),sl=e("은 다시 "),ba=o("em"),nl=e("리드"),al=e("가 된다."),tl=u(),B=o("li"),el=e("6개월이 지나면 이들을 "),ya=o("em"),pl=e("잃어버린 리드(lost lead)"),ol=e("로 간주하며, "),da=o("em"),ll=e("할인 코드(discount code)"),cl=e("를 포함할 수 있는 "),Pa=o("em"),rl=e("재참여 캠페인(re-engagement campaign)"),ul=e("의 대상이 될 수 있다."),il=u(),C=o("li"),$a=o("em"),kl=e("구독 계획"),fl=e("이 생성되면 "),Da=o("em"),ml=e("자동 이체(direct debit)"),El=e("를 통해 "),wa=o("em"),vl=e("고객"),_l=e("으로부터 자금을 확보하기 위해 "),Aa=o("em"),bl=e("반복 과금(recurring payment)"),yl=e("를 설정한다."),Xt=u(),mn=o("p"),dl=e("자, 이제 팀으로 되돌아가서, 새 애플리케이션의 시작점으로 다음과 같은 인터페이스를 정의해보자."),Yt=u(),x(ss.$$.fragment),gt=u(),En=o("p"),Pl=e("이와 같이 인터페이스를 정의하였다. 차후 DDD에 대해 더 자세히 알아보면서 이 코드를 다시 확인할 것이다."),ht=u(),se=o("br"),ne=o("br"),ae=u(),ns=o("h2"),as=o("a"),Ca=o("span"),$l=e("도메인(Domain)과 서브도메인(Sub-Domain)"),te=u(),ee=o("hr"),pe=u(),M=o("p"),Dl=e("앞선 "),Ma=o("em"),wl=e("상황 설정"),Al=e(" 장에서 결제 및 구독 시스템에 대한 간략한 개요를 살펴보았다. 이러한 것들이 바로 "),Ra=o("strong"),Cl=e("도메인"),Ml=e(`이다.
Eric Evans에 따르면, 도메인은 `),Ta=o("em"),Rl=e("“지식, 영향, 또는 활동의 영역”"),Tl=e("이다."),oe=u(),vn=o("p"),Il=e(`도메인은 DDD의 중심 개체로, 모든 언어와 시스템 전반에서 우리가 모델링해야 할 대상이다.
도메인을 떠올리는 또 다른 방법은 비즈니스 세계에서 바라보는 것이다.
Domain Driven Design이라는 용어를 Business Problem-Driven Design으로 읽는다고 생각해보면 된다.`),le=u(),G=o("p"),Sl=e(`도메인을 정의하는 것은 어려운 문제이며, 항상 이 예제에서처럼 명확한 것은 아니다.
이 예제에서는 `),Ia=o("strong"),xl=e("결제"),Ul=e("와 "),Sa=o("strong"),Ol=e("구독"),Ll=e(`이라는, 확실히 구분되는 두 개의 도메인이 있다.
일부 팀에서는 이 두가지를 단일 도메인으로 간주할 수도 있지만, 크게 상관은 없다. DDD는 과학이 아니다.`),ce=u(),_n=o("p"),Hl=e(`대규모 회사에서는 도메인을 중심으로 팀을 구성하는 경우가 많다.
새로운 도메인이 발견되고 팀이 성장함에 따라, 새로운 도메인에 기반한 팀이 생겨날 수도 있을 것이다.`),re=u(),ts=o("p"),ql=e("도메인과 "),xa=o("strong"),Bl=e("서브도메인"),Nl=e(`은 거의 같은 의미라고 볼 수 있지만,
상위 도메인의 자식 도메인임을 나타내고자 할 때 주로 서브도메인을 사용한다.
이 예제에서의 결제와 구독이라는 도메인은 더 큰 비즈니스 도메인의 서브도메인이라고 볼 수 있다.`),ue=u(),ie=o("br"),ke=o("br"),fe=u(),es=o("h2"),ps=o("a"),Ua=o("span"),Gl=e("유비쿼터스 언어(Ubiquitous Language)"),me=u(),Ee=o("hr"),ve=u(),bn=o("p"),jl=e("유비쿼터스 언어는 도메인 전문가와 기술 전문가가 공통으로 사용하는 언어이다."),_e=u(),R=o("p"),Ql=e("앞선 "),Oa=o("em"),Fl=e("상황 설정"),Kl=e("장에서, 전문가들이 대화에서 사용했던 일부 단어를 "),La=o("em"),Wl=e("이탤릭체"),zl=e(` 처리하였다.
이러한 용어들은 다른 회사나 팀에서와는 달리 특정한 의미를 갖는다.
가령 이 팀에서의 `),Ha=o("em"),Zl=e("고객"),Jl=e("은 마케팅 팀에서는 다른 의미를 가질 것이다."),be=u(),yn=o("p"),Vl=e(`유비쿼터스 언어는 요구 사항이나 시스템 설계를 논의할 때, 그리고 소스코드 자체에서도 사용되어야 한다.
또한 발전해야 하기 때문에, 언어를 주기적으로 평가하고 업데이트하는 데 시간을 할애해야 한다.`),ye=u(),dn=o("p"),Xl=e("물론 신경을 많이 써야 하는 만큼의 이점이 있다. 다음과 같다."),de=u(),os=o("h3"),ls=o("a"),qa=o("span"),Yl=e("유비쿼터스 언어의 이점"),Pe=u(),j=o("p"),gl=e(`IT 프로젝트가 실패하는 주요 이유 중 하나는 요구 사항이 번역 과정에서 누락되기 때문이다.
이를테면 비즈니스 담당자가 고객당 여러 계정을 사용할 수 있게끔 요구했다고 해보자.
하지만 시스템에는 고객 엔티티가 존재하지 않는다. 과거에 고객당 계정 하나를 사용할 것이라고 가정하고 설계된 시스템이기 때문이다.
그렇다면 이 변경 사항은 사소한 변경 사항이 아니라, 몇 분기에 걸쳐 진행될 수도 있는 중대한 프로젝트가 된다.
또한, 설명에서 `),Ba=o("em"),hl=e("유저"),sc=e("라는 단어가 아니라 "),Na=o("em"),nc=e("사용자"),ac=e(`라는 단어를 사용하고 있다.
이는 사소한 차이처럼 보이지만, 엔지니어가 비즈니스적 관점에서 생각하지 않고 유비쿼터스 언어를 사용하지 않았다는 점이 이러한 불변성을 놓친 이유일 수 있다.`),$e=u(),Pn=o("p"),tc=e("앞서 유비쿼터스 언어는 소스코드 자체에도 적용되어야 한다고 언급하였다. 우리가 작성하였던 코드를 살펴보자."),De=u(),x(cs.$$.fragment),we=u(),rs=o("p"),ec=e(`이렇게 코드에 유비쿼터스 언어가 잘 적용되어 있다.
도메인 전문가가 `),Ga=o("em"),pc=e("구독"),oc=e("에 관련된 이야기를 꺼낼 때마다, 시스템 표현을 찾기 위해 애쓸 필요가 없어진다."),Ae=u(),T=o("p"),lc=e("코드에서 "),ja=o("code"),cc=e("UserType"),rc=e("이란 것도 정의했는데, 도메인 전문가와의 대화에서는 "),Qa=o("em"),uc=e("사용자"),ic=e(`라는 단어를 사용하지 않았다.
따라서 이 단어를 유비쿼터스 언어 단어 사전에 추가할지 논의하여, `),Fa=o("em"),kc=e("사용자"),fc=e("라는 단어를 사용할 때 모두가 같은 것에 대해 이야기하고 있는지 확인할 수 있는 좋은 기회가 될 것이다."),Ce=u(),Me=o("br"),Re=u(),$n=o("p"),mc=e("다음 부분 코드는 이렇다."),Te=u(),x(us.$$.fragment),Ie=u(),Dn=o("p"),Ec=e("일단 이런 코드는 흔히 볼 수 있는 코드이다 보니, 처음에 보면 별 문제 없어 보인다."),Se=u(),b=o("p"),vc=e("드디어 "),Ka=o("em"),_c=e("사용자"),bc=e(`라는 단어를 정의하기로 도메인 전문가와 협의했다.
이제 `),Wa=o("em"),yc=e("사용자"),dc=e(`는 상태에 관계 없이 앱을 사용하는(혹은 사용했던) 사람을 나타낸다.
그들의 가능한 상태는 `),za=o("em"),Pc=e("lead"),$c=e(", "),Za=o("em"),Dc=e("lost lead"),wc=e(", "),Ja=o("em"),Ac=e("customer"),Cc=e(", "),Va=o("em"),Mc=e("churned"),Rc=e("가 있고, 미래에 상태가 추가될 수도 있다."),xe=u(),is=o("p"),Tc=e("이러한 정의를 감안할 때, "),Xa=o("code"),Ic=e("AddUser"),Sc=e(` 함수는 별로 좋은 생각이 아닌 것 같다.
우리 도메인에는 사용자 추가라는 개념이 없으며, 도메인 전문가에게 이런 문장을 사용하면 혼란을 줄 것이다.`),Ue=u(),wn=o("p"),xc=e(`일단 도메인의 시스템 표현과 실세계 표현 사이의 매핑으로 끝맺음을 짓지만,
강력한 유비쿼터스 언어를 만들기 위해 투자한 시간으로부터 이득을 얻지 못했다.`),Oe=u(),Le=o("br"),He=u(),Q=o("p"),Uc=e("다시 되돌아가서, 우리는 새로 앱을 사용하는 사람을 "),Ya=o("em"),Oc=e("리드"),Lc=e("라고 부르고, 그들이 구독을 하면 "),ga=o("em"),Hc=e("고객"),qc=e(`으로 전환하기로 하였다.
이에 기반하여 코드를 다음과 같이 일부 수정할 수 있다.`),qe=u(),x(ks.$$.fragment),Be=u(),P=o("p"),Bc=e(`이 코드는 더 합리적이며, 실제 세계를 더 잘 반영한다.
이제 전문가와 시스템에 대해 이야기할 때, `),ha=o("em"),Nc=e("리드"),Gc=e("와 "),st=o("em"),jc=e("고객"),Qc=e(", "),nt=o("em"),Fc=e("구독"),Kc=e(", 그리고 "),at=o("em"),Wc=e("리드"),zc=e(`의 전환이라는 단어를 사용할 수 있으며,
이는 모두 도메인에 대한 유비쿼터스 언어이다.`),Ne=u(),fs=o("h3"),ms=o("a"),tt=o("span"),Zc=e("강력한 유비쿼터스 언어를 만드는 방법"),Ge=u(),An=o("p"),Jc=e(`강력한 유비쿼터스 언어를 만드는 지름길은 없고,
도메인 전문가와의 충분한 대화를 거치는 것이 모든 중요한 언어를 포착하는 최선의 방법이다.
한 가지 좋은 방법은 회의에 참가하여 회의록을 작성하는 것이다.
회의 중 이해하지 못한 언어를 적어두고 회의가 끝나면 도메인 전문가에게 물어보는 것이다.
이를 유비쿼터스 언어 단어 사전에 추가하고, 다른 동료들과 공유할 수 있다.`),je=u(),Es=o("h3"),vs=o("a"),et=o("span"),Vc=e("유비쿼터스 언어를 적용할 때의 주의점"),Qe=u(),I=o("p"),Xc=e(`여러 프로젝트, 팀, 또는 회사 전체에 유비쿼터스 언어를 적용하고 싶을 수도 있지만, 이는 좋은 선택이 아니다.
Evans에 따르면 유비쿼터스 언어는 하나의 `),pt=o("strong"),Yc=e("제한된 컨텍스트"),gc=e(`에서만 적용되어야 한다. 유비쿼터스 언어는 엄격할 때 가장 잘 작동하기 때문이다.
`),ot=o("em"),hc=e("고객(customer)"),sr=e("이나 "),lt=o("em"),nr=e("유저(user)"),ar=e("같은 특정한 단어를 다른 모든 분야에 적용하려 한다면, 해당 단어는 엄격함을 잃고 혼란을 야기할 것이다."),Fe=u(),Ke=o("br"),We=o("br"),ze=u(),_s=o("h2"),bs=o("a"),ct=o("span"),tr=e("제한된 컨텍스트"),Ze=u(),Je=o("hr"),Ve=u(),ys=o("p"),er=e(`구독 시스템에 대한 개요를 시작하였고, 시스템을 나타내는 유비쿼터스 언어에 대해서도 알아보았다.
그러던 와중, 만약 사업의 다른 분야에서 온 누군가가 `),rt=o("em"),pr=e("고객(customer)"),or=e(`에 대해 논의하기 위에 온다면 어떻게 해야 할까?
우리가 가장 먼저 할 일은 제한된 컨텍스트 내에서 고객의 의미가 다를 수 있기 때문에, 먼저 이를 정의하는 것이다.`),Xe=u(),Cn=o("p"),lr=e(`제한된 컨텍스트는 큰 모델을 작은 조각으로 나누어, 이해하기 쉽게끔 모델의 구조를 명시하는 것이다.
한 컨텍스트에서 단어를 정의하면, 다른 컨텍스트에서 동일한 의미일 필요는 없다.
가령 우리의 구독 시스템을 다이어그램으로 나타내면 다음과 같을 것이다.`),Ye=u(),x(Ys.$$.fragment),ge=u(),Mn=o("p"),cr=e("하지만 마케팅 팀과 이야기하고 그들의 컨텍스트를 이해하고 나면 다음과 같은 관계를 정의할 수 있다."),he=u(),x(gs.$$.fragment),sp=u(),F=o("p"),rr=e("서로 다른 제한된 컨텍스트 사이에서 "),ut=o("em"),ur=e("캠페인(campaign)"),ir=e("과 "),it=o("em"),kr=e("고객(customer)"),fr=e(` 사이에 연결된 선은 동일한 용어를 사용하지만 모델이 다르며, 그들 사이에 일부 매핑이 가능함을 나타낸다.
이러한 내용은 다음 단락에서 보다 자세히 설명한다`),np=u(),K=o("p"),mr=e("두 컨텍스트에서 모두 "),kt=o("em"),Er=e("캠페인(campaign)"),vr=e("과 "),ft=o("em"),_r=e("고객(customer)"),br=e(`을 중요하게 생각하지만, 서로 다른 컨텍스트이기 때문에 각 컨텍스트에서 이를 모델링하고 이야기하는 방법은 같을 필요가 없다.
이 예제는 간단한 예제이지만 시스템이 진화하고 복잡해질 수록 경계를 정의하는 것이 점점 유의미해질 것이다.`),ap=u(),Rn=o("p"),yr=e(`위 그림처럼 제한된 컨텍스트 사이에서 통신해야 하는 경우가 많기 때문에, 모델들의 무결성을 유지해야 한다.
이에는 몇 가지 패턴이 있는데, 세 가지 주요 패턴은 다음과 같다.`),tp=u(),Tn=o("blockquote"),Y=o("ul"),mt=o("li"),dr=e("Open Host Service"),Pr=u(),Et=o("li"),$r=e("Published Language"),Dr=u(),vt=o("li"),wr=e("Anti-Corruption Layer"),ep=u(),ds=o("h3"),Ps=o("a"),_t=o("span"),Ar=e("Open Host Service"),pp=u(),In=o("p"),Cr=e(`Open Host Service는 다른 시스템(또는 서브시스템)에서 우리의 시스템에 접근할 수 있도록 하는 서비스이다.
팀의 제약 조건과 기술적인 요소에 따라 사정이 다를 수 있기 때문에, Evans는 이 부분의 구현에 대해서 설명을 모호하게 두었다.
일반적으로 Open Host Service는 RPC로 구현되며, RPC는 RESTFul API, gRPC 등으로 구현될 수 있다.`),op=u(),Sn=o("p"),Mr=e("Open Host Service를 시각적으로 나타내면 다음과 같다."),lp=u(),x(hs.$$.fragment),cp=u(),xn=o("p"),Rr=e(`그림에서 파란 직사각형은 제한된 컨텍스트의 노출된 부분을 의미한다.
우리의 과금 및 구독 모델을 예로 들면, 마케팅 팀이 우리 컨텍스트 내에서 다양한 정보를 얻을 수 있도록 엔드포인트를 노출할 수 있다. 이를테면 다음과 같다.`),rp=u(),x($s.$$.fragment),up=u(),Ds=o("p"),Tr=e("위 코드는 "),bt=o("code"),Ir=e("/user/{userID}/payment/active"),Sr=e(`에서 사용 가능한 HTTP 엔드포인트를 노출하는 코드이다.
이를 통해 다른 팀에서 우리의 시스템에 접근하여 사용자가 활성 구독을 가지고 있는지 확인할 수 있다.`),ip=u(),Un=o("p"),xr=e("원본 코드는 gorilla mux를 통해 작성되어 있지만, 여기서는 fiber를 사용하여 작성하였다."),kp=u(),fp=o("br"),mp=u(),ws=o("h3"),As=o("a"),yt=o("span"),Ur=e("Published Language"),Ep=u(),On=o("p"),Or=e(`유비쿼터스 언어가 팀의 내부에서 사용하는 언어라면, Published Language는 그 반대 개념이다.
만약 우리 팀이 Open Host Service를 통해 다른 팀에 시스템 일부를 노출하기로 결정하였다면,
서로 다른 제한된 컨텍스트에서 어떤 것을 노출시킬 것인지에 대한 정의를 명확히 해야 한다.`),vp=u(),Cs=o("p"),Lr=e("앞서 언급한 HTTP 서버와 같이 "),dt=o("code"),Hr=e("GET /{id}/user"),qr=e(` 엔드포인트를 노출시킨다고 한다면,
다른 팀이 입/출력 스키마에 대해 알 수 있도록 언어를 개시해야 한다.
가장 인기있는 방식은 OpenAPI 또는 gRPC를 사용하는 것이다.`),_p=u(),Ms=o("h4"),Rs=o("a"),Pt=o("span"),Br=e("OpenAPI"),bp=u(),Ln=o("p"),Nr=e("일반적으로 Swagger와 같이 사용하는 그 OpenAPI이다. 대충 이렇게 생겼다."),yp=u(),x(Ts.$$.fragment),dp=u(),W=o("p"),Gr=e(`자동으로 직관적인 UI를 만들어준다는 장점이 있다.
특히 golang의 경우 `),$t=o("code"),jr=e("oapi-codegen"),Qr=e("이라는 라이브러리가 좋다고 한다. 해당 라이브러리에 대한 Github 링크는 "),sn=o("a"),Fr=e("여기"),Kr=e("를 참조하자."),Pp=u(),Is=o("p"),Wr=e("자동으로 OpenAPI 파일을 생성해볼 것이다. 먼저 "),Dt=o("code"),zr=e("oapi-codegen"),Zr=e("을 설치해야 한다."),$p=u(),nn=o("pre"),Dp=u(),Hn=o("p"),Jr=e(`그리고 다음과 같은 설정 파일을 작성한다.
생성된 코드가 속할 패키지와, 생성된 코드가 저장될 파일을 명시해준다.`),wp=u(),an=o("pre"),Ap=u(),qn=o("p"),Vr=e("이제 명령어를 쳐보자!"),Cp=u(),tn=o("pre"),Mp=u(),Ss=o("p"),Xr=e("이렇게 하면 "),wt=o("code"),Yr=e("openapi.gen.go"),gr=e(` 파일이 생기면서, 구현할 수 있는 서버용 인터페이스가 생긴다.
API 문서를 업데이트할 때마다 이 명령어를 재실행하면 새로운 서버 정의를 생성할 수 있다.`),Rp=u(),z=o("p"),hr=e("클라이언트 코드를 생성하는 것도 간단하다. "),At=o("code"),su=e("config.yml"),nu=e(" 파일 맨 끝에 "),Ct=o("code"),au=e("client: true"),tu=e("만 추가하고 이전 명령어를 재실행하면 된다. 여기서는 생략해야지~"),Tp=u(),Bn=o("p"),eu=e(`OpenAPI 사양을 업데이트하고 클라이언트를 업데이트하고자 하는 경우, 이전에 쳤던 명령어를 다시 실행시키기만 하면 된다.
이러한 작업을 Continuous Integration 파이프라인에 추가하면, 소비자 팀에서 필요할 때마다 최신 버전을 얻을 수 있을 것이다.`),Ip=u(),Nn=o("p"),pu=e(`팀이 REST API를 사용하는 데 익숙하다면 OpenAPI는 꽤 괜찮은 Published Language이다.
OpenAPI는 문서 우선이므로 외부 문서가 항상 최신으로 유지되는 것을 보자아며, 이는 굉장한 이점이다.
또한 코드가 자동으로 생성되므로, 별도의 노력 없이 다양한 유즈 케이스를 지원할 수 있다.`),Sp=u(),Gn=o("p"),ou=e(`하지만 OpenAPI보다 성능이 더 좋은 대안들이 많다.
그리고 OpenAPI는 기본적으로 주요 변경 사항에 대한 보호를 제공하지 않는다.
이를테면 문서에서 어떤 필드를 제거했지만 다른 팀이 이에 의존하는 경우, 그들의 워크플로우가 깨질 수 있다.`),xp=u(),jn=o("p"),lu=e("이러한 문제를 해결하고 추가적인 기능을 제공하는 gRPC를 살펴보록 하자."),Up=u(),Op=o("br"),Lp=o("br"),Hp=u(),xs=o("h4"),Us=o("a"),Mt=o("span"),cu=e("gRPC"),qp=u(),Qn=o("p"),ru=e(`gRPC는 대규모 원격 통신을 위해 Google에서 개발된 통신 프레이뭐크로,
HTTP/2를 기반으로 하며 로드 밸런싱, 추적, 인증, 양방향 스트리밍, 헬스 체크 등의 기능을 제공한다.`),Bp=u(),Fn=o("p"),uu=e(`gRPC는 전송하는 페이로드를 바이너리로 직렬화하기 때문에 더 빠르고 효율적이다.
또한 gRPC에서 클라이언트는 원격 서버의 코드를 마치 로컬 코드를 호출하듯 사용할 수 있다.
그리고, gRPC는 다양한 언어와 OpenAPI같은 다양한 프레임워크를 지원한다.`),Np=u(),Os=o("p"),iu=e(`원격 서버의 메소드를 호출하기 위해서는 먼저 Protobuf 파일을 작성해야 한다.
Protobuf 파일은 주로 `),Rt=o("code"),ku=e(".proto"),fu=e(` 확장자를 가지며, 언어에 구애받지 않는다.
Protobuf 파일은 다음과 같은 형태를 가진다.`),Gp=u(),x(Ls.$$.fragment),jp=u(),Kn=o("p"),mu=e("이를 통해 서비스, 그리고 요청 및 응답 객체를 정의하고, 클라이언트 코드와 서버 코드를 생성할 수 있다."),Qp=u(),Wn=o("p"),Eu=e(`gRPC는 REST-API 기반인 OpenAPI에 비해 시작하기가 조금 더 어렵다.
또한 코드를 생성하는데 필요한 일부 도구를 설치 및 사용하기가 다소 어려울 수 있다.`),Fp=u(),Z=o("p"),vu=e("먼저, "),Tt=o("code"),_u=e("protobuf"),bu=e(" 컴파일러를 설치하고, "),It=o("code"),yu=e("protoc"),du=e(" 명령어를 활성화하기 위해 path를 업데이트해줘야 한다."),Kp=u(),en=o("pre"),Wp=u(),zn=o("p"),Pu=e("이후, 프로젝트 폴더에서 다음과 같이 명령어를 입력한다."),zp=u(),pn=o("pre"),Zp=u(),J=o("p"),$u=e("이렇게 하면 "),St=o("code"),Du=e("userservice.pb.go"),wu=e("와 "),xt=o("code"),Au=e("userservice_grpc.pb.go"),Cu=e(" 파일이 생성되며, 해당 파일을 통해 서버와 클라이언트 코드를 작성할 수 있다."),Jp=u(),Zn=o("p"),Mu=e("gRPC에 관련한 내용은 아마도 다른 포스트에서 다룰 예정이다."),Vp=u(),Xp=o("br"),Yp=u(),Hs=o("h3"),qs=o("a"),Ut=o("span"),Ru=e("Anti-Corruption Layer"),gp=u(),Bs=o("p"),Tu=e(`Anti-Corruption Layer는 Adapter Layer라고도 하며, 다른 시스템의 모델을 변환하기 위해 사용된다.
Open Host Service와 잘 어울리는 상호보완적인 패턴이라고도 할 수 있다.
가령 마케팅 팀의 published language에서는 `),Ot=o("em"),Iu=e("캠페인(campaign)"),Su=e("을 다음과 같이 정의할 수 있다."),hp=u(),on=o("pre"),so=u(),Ns=o("p"),xu=e("하지만 우리 팀에서의 "),Lt=o("em"),Uu=e("캠페인"),Ou=e("은 내부적으로 이와 같이 정의되어 있다고 해보자."),no=u(),ln=o("pre"),ao=u(),Gs=o("p"),Lu=e(`두 모델은 거의 동일한 정보를 가지고 있지만, 데이터 필드의 이름이나 포맷이 약간 다르다.
우리의 `),Ht=o("em"),Hu=e("캠페인"),qu=e(` 모델을 마케팅 팀과 완전히 동일하게 바꾸면 해결되지만 이는 DDD의 원칙에 위배된다.
이러한 경우 Anti-Corruption Layer를 사용할 수 있다.`),to=u(),x(js.$$.fragment),eo=u(),V=o("p"),Bu=e("이와 같이 "),qt=o("code"),Nu=e("MarketingCampaignModel"),Gu=e("을 "),Bt=o("code"),ju=e("Campaign"),Qu=e(`으로 변환하는 과정에서 데이터가 변환 가능한지 검증하는 로직이 포함되어 있다.
복잡한 시스템에서는 Anti-Corruption Layer의 역할이 더 커질 수 있고, 이전 시스템에서 현 시스템으로 마이그레이션하는 과정에서도 사용될 수 있다.
하지만 추가적인 오버헤드나 실패가 발생할 수 있는 지점이 생겨난다는 점을 유의해야 한다.`),po=u(),Jn=o("p"),Fu=e("모든 DDD 패턴 중, Anti-Corruption Layer는 DDD 외부에서 가장 많이 사용되는 패턴이다. 시스템을 분리(디커플링)된 상태로 유지할 때 효과적이다."),oo=u(),lo=o("br"),co=o("br"),ro=u(),Qs=o("h2"),Fs=o("a"),Nt=o("span"),Ku=e("References"),uo=u(),io=o("hr"),ko=u(),N=o("center"),Gt=o("p"),Wu=e("["),zu=u(),x(cn.$$.fragment),Zu=e(`
](https://learning.oreilly.com/library/view/domain-driven-design-with/9781804613450/) `),Ju=o("br"),Vu=e(`
[Matthew Boyle, Domain-Driven Design with Golang』, O'Reilly Media, Inc.](https://learning.oreilly.com/library/view/domain-driven-design-with/9781804613450/)`),this.h()},l(s){f=l(s,"H2",{id:!0});var t=r(f);v=l(t,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var jt=r(v);m=l(jt,"SPAN",{class:!0}),r(m).forEach(n),jt.forEach(n),E=p(t,"상황 설정"),t.forEach(n),zt=i(s),Zt=l(s,"HR",{}),Jt=i(s),h=l(s,"P",{});var rn=r(h);Ro=p(rn,"회사에서 새로 생긴 개발팀인 "),oa=l(rn,"EM",{});var Qt=r(oa);To=p(Qt,"과금 및 구독"),Qt.forEach(n),Io=p(rn,` 팀의의 리드 개발자가 되었다고 가정해보자.
아무래도 새로운 분야인지라 이 분야의 전문가들과 기본적인 도메인과 작동 방식에 대해 부지런히 논의해야 할 것이다.
그들의 반응은 다음과 같다.`),rn.forEach(n),Vt=i(s),kn=l(s,"BLOCKQUOTE",{});var Ft=r(kn);D=l(Ft,"UL",{});var w=r(D);A=l(w,"LI",{});var S=r(A);la=l(S,"EM",{});var Kt=r(la);So=p(Kt,"리드(lead)"),Kt.forEach(n),xo=p(S,"가 처음으로 앱을 사용하는 경우, 그들은 세 가지 구독 계획을 선택해야 한다. 각각 "),ca=l(S,"EM",{});var Wt=r(ca);Uo=p(Wt,"basic"),Wt.forEach(n),Oo=p(S,", "),ra=l(S,"EM",{});var ri=r(ra);Lo=p(ri,"premium"),ri.forEach(n),Ho=p(S,", "),ua=l(S,"EM",{});var ui=r(ua);qo=p(ui,"exclusive"),ui.forEach(n),Bo=p(S,"이다."),S.forEach(n),No=i(w),fn=l(w,"LI",{});var Xu=r(fn);ia=l(Xu,"EM",{});var ii=r(ia);Go=p(ii,"구독 계획(subscription plan)"),ii.forEach(n),jo=p(Xu,"에 따라 앱 내에서 접근할 수 있는 기능이 달라지며, 이러한 사항은 변경될 수 있다."),Xu.forEach(n),Qo=i(w),_=l(w,"LI",{});var d=r(_);ka=l(d,"EM",{});var ki=r(ka);Fo=p(ki,"구독 계획"),ki.forEach(n),Ko=p(d,"이 생성되면 "),fa=l(d,"EM",{});var fi=r(fa);Wo=p(fi,"리드"),fi.forEach(n),zo=p(d,"가 "),ma=l(d,"EM",{});var mi=r(ma);Zo=p(mi,"고객(customer)"),mi.forEach(n),Jo=p(d,"으로 전환되며, "),Ea=l(d,"EM",{});var Ei=r(Ea);Vo=p(Ei,"고객"),Ei.forEach(n),Xo=p(d,"은 "),va=l(d,"EM",{});var vi=r(va);Yo=p(vi,"이탈"),vi.forEach(n),go=p(d,"할 때까지 고객으로 간주한다. 이 경우, "),_a=l(d,"EM",{});var _i=r(_a);ho=p(_i,"고객"),_i.forEach(n),sl=p(d,"은 다시 "),ba=l(d,"EM",{});var bi=r(ba);nl=p(bi,"리드"),bi.forEach(n),al=p(d,"가 된다."),d.forEach(n),tl=i(w),B=l(w,"LI",{});var Ks=r(B);el=p(Ks,"6개월이 지나면 이들을 "),ya=l(Ks,"EM",{});var yi=r(ya);pl=p(yi,"잃어버린 리드(lost lead)"),yi.forEach(n),ol=p(Ks,"로 간주하며, "),da=l(Ks,"EM",{});var di=r(da);ll=p(di,"할인 코드(discount code)"),di.forEach(n),cl=p(Ks,"를 포함할 수 있는 "),Pa=l(Ks,"EM",{});var Pi=r(Pa);rl=p(Pi,"재참여 캠페인(re-engagement campaign)"),Pi.forEach(n),ul=p(Ks,"의 대상이 될 수 있다."),Ks.forEach(n),il=i(w),C=l(w,"LI",{});var g=r(C);$a=l(g,"EM",{});var $i=r($a);kl=p($i,"구독 계획"),$i.forEach(n),fl=p(g,"이 생성되면 "),Da=l(g,"EM",{});var Di=r(Da);ml=p(Di,"자동 이체(direct debit)"),Di.forEach(n),El=p(g,"를 통해 "),wa=l(g,"EM",{});var wi=r(wa);vl=p(wi,"고객"),wi.forEach(n),_l=p(g,"으로부터 자금을 확보하기 위해 "),Aa=l(g,"EM",{});var Ai=r(Aa);bl=p(Ai,"반복 과금(recurring payment)"),Ai.forEach(n),yl=p(g,"를 설정한다."),g.forEach(n),w.forEach(n),Ft.forEach(n),Xt=i(s),mn=l(s,"P",{});var Ci=r(mn);dl=p(Ci,"자, 이제 팀으로 되돌아가서, 새 애플리케이션의 시작점으로 다음과 같은 인터페이스를 정의해보자."),Ci.forEach(n),Yt=i(s),U(ss.$$.fragment,s),gt=i(s),En=l(s,"P",{});var Mi=r(En);Pl=p(Mi,"이와 같이 인터페이스를 정의하였다. 차후 DDD에 대해 더 자세히 알아보면서 이 코드를 다시 확인할 것이다."),Mi.forEach(n),ht=i(s),se=l(s,"BR",{}),ne=l(s,"BR",{}),ae=i(s),ns=l(s,"H2",{id:!0});var Yu=r(ns);as=l(Yu,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Ri=r(as);Ca=l(Ri,"SPAN",{class:!0}),r(Ca).forEach(n),Ri.forEach(n),$l=p(Yu,"도메인(Domain)과 서브도메인(Sub-Domain)"),Yu.forEach(n),te=i(s),ee=l(s,"HR",{}),pe=i(s),M=l(s,"P",{});var Ws=r(M);Dl=p(Ws,"앞선 "),Ma=l(Ws,"EM",{});var Ti=r(Ma);wl=p(Ti,"상황 설정"),Ti.forEach(n),Al=p(Ws," 장에서 결제 및 구독 시스템에 대한 간략한 개요를 살펴보았다. 이러한 것들이 바로 "),Ra=l(Ws,"STRONG",{});var Ii=r(Ra);Cl=p(Ii,"도메인"),Ii.forEach(n),Ml=p(Ws,`이다.
Eric Evans에 따르면, 도메인은 `),Ta=l(Ws,"EM",{});var Si=r(Ta);Rl=p(Si,"“지식, 영향, 또는 활동의 영역”"),Si.forEach(n),Tl=p(Ws,"이다."),Ws.forEach(n),oe=i(s),vn=l(s,"P",{});var xi=r(vn);Il=p(xi,`도메인은 DDD의 중심 개체로, 모든 언어와 시스템 전반에서 우리가 모델링해야 할 대상이다.
도메인을 떠올리는 또 다른 방법은 비즈니스 세계에서 바라보는 것이다.
Domain Driven Design이라는 용어를 Business Problem-Driven Design으로 읽는다고 생각해보면 된다.`),xi.forEach(n),le=i(s),G=l(s,"P",{});var Vn=r(G);Sl=p(Vn,`도메인을 정의하는 것은 어려운 문제이며, 항상 이 예제에서처럼 명확한 것은 아니다.
이 예제에서는 `),Ia=l(Vn,"STRONG",{});var Ui=r(Ia);xl=p(Ui,"결제"),Ui.forEach(n),Ul=p(Vn,"와 "),Sa=l(Vn,"STRONG",{});var Oi=r(Sa);Ol=p(Oi,"구독"),Oi.forEach(n),Ll=p(Vn,`이라는, 확실히 구분되는 두 개의 도메인이 있다.
일부 팀에서는 이 두가지를 단일 도메인으로 간주할 수도 있지만, 크게 상관은 없다. DDD는 과학이 아니다.`),Vn.forEach(n),ce=i(s),_n=l(s,"P",{});var Li=r(_n);Hl=p(Li,`대규모 회사에서는 도메인을 중심으로 팀을 구성하는 경우가 많다.
새로운 도메인이 발견되고 팀이 성장함에 따라, 새로운 도메인에 기반한 팀이 생겨날 수도 있을 것이다.`),Li.forEach(n),re=i(s),ts=l(s,"P",{});var mo=r(ts);ql=p(mo,"도메인과 "),xa=l(mo,"STRONG",{});var Hi=r(xa);Bl=p(Hi,"서브도메인"),Hi.forEach(n),Nl=p(mo,`은 거의 같은 의미라고 볼 수 있지만,
상위 도메인의 자식 도메인임을 나타내고자 할 때 주로 서브도메인을 사용한다.
이 예제에서의 결제와 구독이라는 도메인은 더 큰 비즈니스 도메인의 서브도메인이라고 볼 수 있다.`),mo.forEach(n),ue=i(s),ie=l(s,"BR",{}),ke=l(s,"BR",{}),fe=i(s),es=l(s,"H2",{id:!0});var gu=r(es);ps=l(gu,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var qi=r(ps);Ua=l(qi,"SPAN",{class:!0}),r(Ua).forEach(n),qi.forEach(n),Gl=p(gu,"유비쿼터스 언어(Ubiquitous Language)"),gu.forEach(n),me=i(s),Ee=l(s,"HR",{}),ve=i(s),bn=l(s,"P",{});var Bi=r(bn);jl=p(Bi,"유비쿼터스 언어는 도메인 전문가와 기술 전문가가 공통으로 사용하는 언어이다."),Bi.forEach(n),_e=i(s),R=l(s,"P",{});var zs=r(R);Ql=p(zs,"앞선 "),Oa=l(zs,"EM",{});var Ni=r(Oa);Fl=p(Ni,"상황 설정"),Ni.forEach(n),Kl=p(zs,"장에서, 전문가들이 대화에서 사용했던 일부 단어를 "),La=l(zs,"EM",{});var Gi=r(La);Wl=p(Gi,"이탤릭체"),Gi.forEach(n),zl=p(zs,` 처리하였다.
이러한 용어들은 다른 회사나 팀에서와는 달리 특정한 의미를 갖는다.
가령 이 팀에서의 `),Ha=l(zs,"EM",{});var ji=r(Ha);Zl=p(ji,"고객"),ji.forEach(n),Jl=p(zs,"은 마케팅 팀에서는 다른 의미를 가질 것이다."),zs.forEach(n),be=i(s),yn=l(s,"P",{});var Qi=r(yn);Vl=p(Qi,`유비쿼터스 언어는 요구 사항이나 시스템 설계를 논의할 때, 그리고 소스코드 자체에서도 사용되어야 한다.
또한 발전해야 하기 때문에, 언어를 주기적으로 평가하고 업데이트하는 데 시간을 할애해야 한다.`),Qi.forEach(n),ye=i(s),dn=l(s,"P",{});var Fi=r(dn);Xl=p(Fi,"물론 신경을 많이 써야 하는 만큼의 이점이 있다. 다음과 같다."),Fi.forEach(n),de=i(s),os=l(s,"H3",{id:!0});var hu=r(os);ls=l(hu,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Ki=r(ls);qa=l(Ki,"SPAN",{class:!0}),r(qa).forEach(n),Ki.forEach(n),Yl=p(hu,"유비쿼터스 언어의 이점"),hu.forEach(n),Pe=i(s),j=l(s,"P",{});var Xn=r(j);gl=p(Xn,`IT 프로젝트가 실패하는 주요 이유 중 하나는 요구 사항이 번역 과정에서 누락되기 때문이다.
이를테면 비즈니스 담당자가 고객당 여러 계정을 사용할 수 있게끔 요구했다고 해보자.
하지만 시스템에는 고객 엔티티가 존재하지 않는다. 과거에 고객당 계정 하나를 사용할 것이라고 가정하고 설계된 시스템이기 때문이다.
그렇다면 이 변경 사항은 사소한 변경 사항이 아니라, 몇 분기에 걸쳐 진행될 수도 있는 중대한 프로젝트가 된다.
또한, 설명에서 `),Ba=l(Xn,"EM",{});var Wi=r(Ba);hl=p(Wi,"유저"),Wi.forEach(n),sc=p(Xn,"라는 단어가 아니라 "),Na=l(Xn,"EM",{});var zi=r(Na);nc=p(zi,"사용자"),zi.forEach(n),ac=p(Xn,`라는 단어를 사용하고 있다.
이는 사소한 차이처럼 보이지만, 엔지니어가 비즈니스적 관점에서 생각하지 않고 유비쿼터스 언어를 사용하지 않았다는 점이 이러한 불변성을 놓친 이유일 수 있다.`),Xn.forEach(n),$e=i(s),Pn=l(s,"P",{});var Zi=r(Pn);tc=p(Zi,"앞서 유비쿼터스 언어는 소스코드 자체에도 적용되어야 한다고 언급하였다. 우리가 작성하였던 코드를 살펴보자."),Zi.forEach(n),De=i(s),U(cs.$$.fragment,s),we=i(s),rs=l(s,"P",{});var Eo=r(rs);ec=p(Eo,`이렇게 코드에 유비쿼터스 언어가 잘 적용되어 있다.
도메인 전문가가 `),Ga=l(Eo,"EM",{});var Ji=r(Ga);pc=p(Ji,"구독"),Ji.forEach(n),oc=p(Eo,"에 관련된 이야기를 꺼낼 때마다, 시스템 표현을 찾기 위해 애쓸 필요가 없어진다."),Eo.forEach(n),Ae=i(s),T=l(s,"P",{});var Zs=r(T);lc=p(Zs,"코드에서 "),ja=l(Zs,"CODE",{});var Vi=r(ja);cc=p(Vi,"UserType"),Vi.forEach(n),rc=p(Zs,"이란 것도 정의했는데, 도메인 전문가와의 대화에서는 "),Qa=l(Zs,"EM",{});var Xi=r(Qa);uc=p(Xi,"사용자"),Xi.forEach(n),ic=p(Zs,`라는 단어를 사용하지 않았다.
따라서 이 단어를 유비쿼터스 언어 단어 사전에 추가할지 논의하여, `),Fa=l(Zs,"EM",{});var Yi=r(Fa);kc=p(Yi,"사용자"),Yi.forEach(n),fc=p(Zs,"라는 단어를 사용할 때 모두가 같은 것에 대해 이야기하고 있는지 확인할 수 있는 좋은 기회가 될 것이다."),Zs.forEach(n),Ce=i(s),Me=l(s,"BR",{}),Re=i(s),$n=l(s,"P",{});var gi=r($n);mc=p(gi,"다음 부분 코드는 이렇다."),gi.forEach(n),Te=i(s),U(us.$$.fragment,s),Ie=i(s),Dn=l(s,"P",{});var hi=r(Dn);Ec=p(hi,"일단 이런 코드는 흔히 볼 수 있는 코드이다 보니, 처음에 보면 별 문제 없어 보인다."),hi.forEach(n),Se=i(s),b=l(s,"P",{});var $=r(b);vc=p($,"드디어 "),Ka=l($,"EM",{});var sk=r(Ka);_c=p(sk,"사용자"),sk.forEach(n),bc=p($,`라는 단어를 정의하기로 도메인 전문가와 협의했다.
이제 `),Wa=l($,"EM",{});var nk=r(Wa);yc=p(nk,"사용자"),nk.forEach(n),dc=p($,`는 상태에 관계 없이 앱을 사용하는(혹은 사용했던) 사람을 나타낸다.
그들의 가능한 상태는 `),za=l($,"EM",{});var ak=r(za);Pc=p(ak,"lead"),ak.forEach(n),$c=p($,", "),Za=l($,"EM",{});var tk=r(Za);Dc=p(tk,"lost lead"),tk.forEach(n),wc=p($,", "),Ja=l($,"EM",{});var ek=r(Ja);Ac=p(ek,"customer"),ek.forEach(n),Cc=p($,", "),Va=l($,"EM",{});var pk=r(Va);Mc=p(pk,"churned"),pk.forEach(n),Rc=p($,"가 있고, 미래에 상태가 추가될 수도 있다."),$.forEach(n),xe=i(s),is=l(s,"P",{});var vo=r(is);Tc=p(vo,"이러한 정의를 감안할 때, "),Xa=l(vo,"CODE",{});var ok=r(Xa);Ic=p(ok,"AddUser"),ok.forEach(n),Sc=p(vo,` 함수는 별로 좋은 생각이 아닌 것 같다.
우리 도메인에는 사용자 추가라는 개념이 없으며, 도메인 전문가에게 이런 문장을 사용하면 혼란을 줄 것이다.`),vo.forEach(n),Ue=i(s),wn=l(s,"P",{});var lk=r(wn);xc=p(lk,`일단 도메인의 시스템 표현과 실세계 표현 사이의 매핑으로 끝맺음을 짓지만,
강력한 유비쿼터스 언어를 만들기 위해 투자한 시간으로부터 이득을 얻지 못했다.`),lk.forEach(n),Oe=i(s),Le=l(s,"BR",{}),He=i(s),Q=l(s,"P",{});var Yn=r(Q);Uc=p(Yn,"다시 되돌아가서, 우리는 새로 앱을 사용하는 사람을 "),Ya=l(Yn,"EM",{});var ck=r(Ya);Oc=p(ck,"리드"),ck.forEach(n),Lc=p(Yn,"라고 부르고, 그들이 구독을 하면 "),ga=l(Yn,"EM",{});var rk=r(ga);Hc=p(rk,"고객"),rk.forEach(n),qc=p(Yn,`으로 전환하기로 하였다.
이에 기반하여 코드를 다음과 같이 일부 수정할 수 있다.`),Yn.forEach(n),qe=i(s),U(ks.$$.fragment,s),Be=i(s),P=l(s,"P",{});var X=r(P);Bc=p(X,`이 코드는 더 합리적이며, 실제 세계를 더 잘 반영한다.
이제 전문가와 시스템에 대해 이야기할 때, `),ha=l(X,"EM",{});var uk=r(ha);Nc=p(uk,"리드"),uk.forEach(n),Gc=p(X,"와 "),st=l(X,"EM",{});var ik=r(st);jc=p(ik,"고객"),ik.forEach(n),Qc=p(X,", "),nt=l(X,"EM",{});var kk=r(nt);Fc=p(kk,"구독"),kk.forEach(n),Kc=p(X,", 그리고 "),at=l(X,"EM",{});var fk=r(at);Wc=p(fk,"리드"),fk.forEach(n),zc=p(X,`의 전환이라는 단어를 사용할 수 있으며,
이는 모두 도메인에 대한 유비쿼터스 언어이다.`),X.forEach(n),Ne=i(s),fs=l(s,"H3",{id:!0});var si=r(fs);ms=l(si,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var mk=r(ms);tt=l(mk,"SPAN",{class:!0}),r(tt).forEach(n),mk.forEach(n),Zc=p(si,"강력한 유비쿼터스 언어를 만드는 방법"),si.forEach(n),Ge=i(s),An=l(s,"P",{});var Ek=r(An);Jc=p(Ek,`강력한 유비쿼터스 언어를 만드는 지름길은 없고,
도메인 전문가와의 충분한 대화를 거치는 것이 모든 중요한 언어를 포착하는 최선의 방법이다.
한 가지 좋은 방법은 회의에 참가하여 회의록을 작성하는 것이다.
회의 중 이해하지 못한 언어를 적어두고 회의가 끝나면 도메인 전문가에게 물어보는 것이다.
이를 유비쿼터스 언어 단어 사전에 추가하고, 다른 동료들과 공유할 수 있다.`),Ek.forEach(n),je=i(s),Es=l(s,"H3",{id:!0});var ni=r(Es);vs=l(ni,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var vk=r(vs);et=l(vk,"SPAN",{class:!0}),r(et).forEach(n),vk.forEach(n),Vc=p(ni,"유비쿼터스 언어를 적용할 때의 주의점"),ni.forEach(n),Qe=i(s),I=l(s,"P",{});var Js=r(I);Xc=p(Js,`여러 프로젝트, 팀, 또는 회사 전체에 유비쿼터스 언어를 적용하고 싶을 수도 있지만, 이는 좋은 선택이 아니다.
Evans에 따르면 유비쿼터스 언어는 하나의 `),pt=l(Js,"STRONG",{});var _k=r(pt);Yc=p(_k,"제한된 컨텍스트"),_k.forEach(n),gc=p(Js,`에서만 적용되어야 한다. 유비쿼터스 언어는 엄격할 때 가장 잘 작동하기 때문이다.
`),ot=l(Js,"EM",{});var bk=r(ot);hc=p(bk,"고객(customer)"),bk.forEach(n),sr=p(Js,"이나 "),lt=l(Js,"EM",{});var yk=r(lt);nr=p(yk,"유저(user)"),yk.forEach(n),ar=p(Js,"같은 특정한 단어를 다른 모든 분야에 적용하려 한다면, 해당 단어는 엄격함을 잃고 혼란을 야기할 것이다."),Js.forEach(n),Fe=i(s),Ke=l(s,"BR",{}),We=l(s,"BR",{}),ze=i(s),_s=l(s,"H2",{id:!0});var ai=r(_s);bs=l(ai,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var dk=r(bs);ct=l(dk,"SPAN",{class:!0}),r(ct).forEach(n),dk.forEach(n),tr=p(ai,"제한된 컨텍스트"),ai.forEach(n),Ze=i(s),Je=l(s,"HR",{}),Ve=i(s),ys=l(s,"P",{});var _o=r(ys);er=p(_o,`구독 시스템에 대한 개요를 시작하였고, 시스템을 나타내는 유비쿼터스 언어에 대해서도 알아보았다.
그러던 와중, 만약 사업의 다른 분야에서 온 누군가가 `),rt=l(_o,"EM",{});var Pk=r(rt);pr=p(Pk,"고객(customer)"),Pk.forEach(n),or=p(_o,`에 대해 논의하기 위에 온다면 어떻게 해야 할까?
우리가 가장 먼저 할 일은 제한된 컨텍스트 내에서 고객의 의미가 다를 수 있기 때문에, 먼저 이를 정의하는 것이다.`),_o.forEach(n),Xe=i(s),Cn=l(s,"P",{});var $k=r(Cn);lr=p($k,`제한된 컨텍스트는 큰 모델을 작은 조각으로 나누어, 이해하기 쉽게끔 모델의 구조를 명시하는 것이다.
한 컨텍스트에서 단어를 정의하면, 다른 컨텍스트에서 동일한 의미일 필요는 없다.
가령 우리의 구독 시스템을 다이어그램으로 나타내면 다음과 같을 것이다.`),$k.forEach(n),Ye=i(s),U(Ys.$$.fragment,s),ge=i(s),Mn=l(s,"P",{});var Dk=r(Mn);cr=p(Dk,"하지만 마케팅 팀과 이야기하고 그들의 컨텍스트를 이해하고 나면 다음과 같은 관계를 정의할 수 있다."),Dk.forEach(n),he=i(s),U(gs.$$.fragment,s),sp=i(s),F=l(s,"P",{});var gn=r(F);rr=p(gn,"서로 다른 제한된 컨텍스트 사이에서 "),ut=l(gn,"EM",{});var wk=r(ut);ur=p(wk,"캠페인(campaign)"),wk.forEach(n),ir=p(gn,"과 "),it=l(gn,"EM",{});var Ak=r(it);kr=p(Ak,"고객(customer)"),Ak.forEach(n),fr=p(gn,` 사이에 연결된 선은 동일한 용어를 사용하지만 모델이 다르며, 그들 사이에 일부 매핑이 가능함을 나타낸다.
이러한 내용은 다음 단락에서 보다 자세히 설명한다`),gn.forEach(n),np=i(s),K=l(s,"P",{});var hn=r(K);mr=p(hn,"두 컨텍스트에서 모두 "),kt=l(hn,"EM",{});var Ck=r(kt);Er=p(Ck,"캠페인(campaign)"),Ck.forEach(n),vr=p(hn,"과 "),ft=l(hn,"EM",{});var Mk=r(ft);_r=p(Mk,"고객(customer)"),Mk.forEach(n),br=p(hn,`을 중요하게 생각하지만, 서로 다른 컨텍스트이기 때문에 각 컨텍스트에서 이를 모델링하고 이야기하는 방법은 같을 필요가 없다.
이 예제는 간단한 예제이지만 시스템이 진화하고 복잡해질 수록 경계를 정의하는 것이 점점 유의미해질 것이다.`),hn.forEach(n),ap=i(s),Rn=l(s,"P",{});var Rk=r(Rn);yr=p(Rk,`위 그림처럼 제한된 컨텍스트 사이에서 통신해야 하는 경우가 많기 때문에, 모델들의 무결성을 유지해야 한다.
이에는 몇 가지 패턴이 있는데, 세 가지 주요 패턴은 다음과 같다.`),Rk.forEach(n),tp=i(s),Tn=l(s,"BLOCKQUOTE",{});var Tk=r(Tn);Y=l(Tk,"UL",{});var sa=r(Y);mt=l(sa,"LI",{});var Ik=r(mt);dr=p(Ik,"Open Host Service"),Ik.forEach(n),Pr=i(sa),Et=l(sa,"LI",{});var Sk=r(Et);$r=p(Sk,"Published Language"),Sk.forEach(n),Dr=i(sa),vt=l(sa,"LI",{});var xk=r(vt);wr=p(xk,"Anti-Corruption Layer"),xk.forEach(n),sa.forEach(n),Tk.forEach(n),ep=i(s),ds=l(s,"H3",{id:!0});var ti=r(ds);Ps=l(ti,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Uk=r(Ps);_t=l(Uk,"SPAN",{class:!0}),r(_t).forEach(n),Uk.forEach(n),Ar=p(ti,"Open Host Service"),ti.forEach(n),pp=i(s),In=l(s,"P",{});var Ok=r(In);Cr=p(Ok,`Open Host Service는 다른 시스템(또는 서브시스템)에서 우리의 시스템에 접근할 수 있도록 하는 서비스이다.
팀의 제약 조건과 기술적인 요소에 따라 사정이 다를 수 있기 때문에, Evans는 이 부분의 구현에 대해서 설명을 모호하게 두었다.
일반적으로 Open Host Service는 RPC로 구현되며, RPC는 RESTFul API, gRPC 등으로 구현될 수 있다.`),Ok.forEach(n),op=i(s),Sn=l(s,"P",{});var Lk=r(Sn);Mr=p(Lk,"Open Host Service를 시각적으로 나타내면 다음과 같다."),Lk.forEach(n),lp=i(s),U(hs.$$.fragment,s),cp=i(s),xn=l(s,"P",{});var Hk=r(xn);Rr=p(Hk,`그림에서 파란 직사각형은 제한된 컨텍스트의 노출된 부분을 의미한다.
우리의 과금 및 구독 모델을 예로 들면, 마케팅 팀이 우리 컨텍스트 내에서 다양한 정보를 얻을 수 있도록 엔드포인트를 노출할 수 있다. 이를테면 다음과 같다.`),Hk.forEach(n),rp=i(s),U($s.$$.fragment,s),up=i(s),Ds=l(s,"P",{});var bo=r(Ds);Tr=p(bo,"위 코드는 "),bt=l(bo,"CODE",{});var qk=r(bt);Ir=p(qk,"/user/{userID}/payment/active"),qk.forEach(n),Sr=p(bo,`에서 사용 가능한 HTTP 엔드포인트를 노출하는 코드이다.
이를 통해 다른 팀에서 우리의 시스템에 접근하여 사용자가 활성 구독을 가지고 있는지 확인할 수 있다.`),bo.forEach(n),ip=i(s),Un=l(s,"P",{});var Bk=r(Un);xr=p(Bk,"원본 코드는 gorilla mux를 통해 작성되어 있지만, 여기서는 fiber를 사용하여 작성하였다."),Bk.forEach(n),kp=i(s),fp=l(s,"BR",{}),mp=i(s),ws=l(s,"H3",{id:!0});var ei=r(ws);As=l(ei,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Nk=r(As);yt=l(Nk,"SPAN",{class:!0}),r(yt).forEach(n),Nk.forEach(n),Ur=p(ei,"Published Language"),ei.forEach(n),Ep=i(s),On=l(s,"P",{});var Gk=r(On);Or=p(Gk,`유비쿼터스 언어가 팀의 내부에서 사용하는 언어라면, Published Language는 그 반대 개념이다.
만약 우리 팀이 Open Host Service를 통해 다른 팀에 시스템 일부를 노출하기로 결정하였다면,
서로 다른 제한된 컨텍스트에서 어떤 것을 노출시킬 것인지에 대한 정의를 명확히 해야 한다.`),Gk.forEach(n),vp=i(s),Cs=l(s,"P",{});var yo=r(Cs);Lr=p(yo,"앞서 언급한 HTTP 서버와 같이 "),dt=l(yo,"CODE",{});var jk=r(dt);Hr=p(jk,"GET /{id}/user"),jk.forEach(n),qr=p(yo,` 엔드포인트를 노출시킨다고 한다면,
다른 팀이 입/출력 스키마에 대해 알 수 있도록 언어를 개시해야 한다.
가장 인기있는 방식은 OpenAPI 또는 gRPC를 사용하는 것이다.`),yo.forEach(n),_p=i(s),Ms=l(s,"H4",{id:!0});var pi=r(Ms);Rs=l(pi,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Qk=r(Rs);Pt=l(Qk,"SPAN",{class:!0}),r(Pt).forEach(n),Qk.forEach(n),Br=p(pi,"OpenAPI"),pi.forEach(n),bp=i(s),Ln=l(s,"P",{});var Fk=r(Ln);Nr=p(Fk,"일반적으로 Swagger와 같이 사용하는 그 OpenAPI이다. 대충 이렇게 생겼다."),Fk.forEach(n),yp=i(s),U(Ts.$$.fragment,s),dp=i(s),W=l(s,"P",{});var na=r(W);Gr=p(na,`자동으로 직관적인 UI를 만들어준다는 장점이 있다.
특히 golang의 경우 `),$t=l(na,"CODE",{});var Kk=r($t);jr=p(Kk,"oapi-codegen"),Kk.forEach(n),Qr=p(na,"이라는 라이브러리가 좋다고 한다. 해당 라이브러리에 대한 Github 링크는 "),sn=l(na,"A",{href:!0,rel:!0});var Wk=r(sn);Fr=p(Wk,"여기"),Wk.forEach(n),Kr=p(na,"를 참조하자."),na.forEach(n),Pp=i(s),Is=l(s,"P",{});var Po=r(Is);Wr=p(Po,"자동으로 OpenAPI 파일을 생성해볼 것이다. 먼저 "),Dt=l(Po,"CODE",{});var zk=r(Dt);zr=p(zk,"oapi-codegen"),zk.forEach(n),Zr=p(Po,"을 설치해야 한다."),Po.forEach(n),$p=i(s),nn=l(s,"PRE",{class:!0});var Sf=r(nn);Sf.forEach(n),Dp=i(s),Hn=l(s,"P",{});var Zk=r(Hn);Jr=p(Zk,`그리고 다음과 같은 설정 파일을 작성한다.
생성된 코드가 속할 패키지와, 생성된 코드가 저장될 파일을 명시해준다.`),Zk.forEach(n),wp=i(s),an=l(s,"PRE",{class:!0});var xf=r(an);xf.forEach(n),Ap=i(s),qn=l(s,"P",{});var Jk=r(qn);Vr=p(Jk,"이제 명령어를 쳐보자!"),Jk.forEach(n),Cp=i(s),tn=l(s,"PRE",{class:!0});var Uf=r(tn);Uf.forEach(n),Mp=i(s),Ss=l(s,"P",{});var $o=r(Ss);Xr=p($o,"이렇게 하면 "),wt=l($o,"CODE",{});var Vk=r(wt);Yr=p(Vk,"openapi.gen.go"),Vk.forEach(n),gr=p($o,` 파일이 생기면서, 구현할 수 있는 서버용 인터페이스가 생긴다.
API 문서를 업데이트할 때마다 이 명령어를 재실행하면 새로운 서버 정의를 생성할 수 있다.`),$o.forEach(n),Rp=i(s),z=l(s,"P",{});var aa=r(z);hr=p(aa,"클라이언트 코드를 생성하는 것도 간단하다. "),At=l(aa,"CODE",{});var Xk=r(At);su=p(Xk,"config.yml"),Xk.forEach(n),nu=p(aa," 파일 맨 끝에 "),Ct=l(aa,"CODE",{});var Yk=r(Ct);au=p(Yk,"client: true"),Yk.forEach(n),tu=p(aa,"만 추가하고 이전 명령어를 재실행하면 된다. 여기서는 생략해야지~"),aa.forEach(n),Tp=i(s),Bn=l(s,"P",{});var gk=r(Bn);eu=p(gk,`OpenAPI 사양을 업데이트하고 클라이언트를 업데이트하고자 하는 경우, 이전에 쳤던 명령어를 다시 실행시키기만 하면 된다.
이러한 작업을 Continuous Integration 파이프라인에 추가하면, 소비자 팀에서 필요할 때마다 최신 버전을 얻을 수 있을 것이다.`),gk.forEach(n),Ip=i(s),Nn=l(s,"P",{});var hk=r(Nn);pu=p(hk,`팀이 REST API를 사용하는 데 익숙하다면 OpenAPI는 꽤 괜찮은 Published Language이다.
OpenAPI는 문서 우선이므로 외부 문서가 항상 최신으로 유지되는 것을 보자아며, 이는 굉장한 이점이다.
또한 코드가 자동으로 생성되므로, 별도의 노력 없이 다양한 유즈 케이스를 지원할 수 있다.`),hk.forEach(n),Sp=i(s),Gn=l(s,"P",{});var sf=r(Gn);ou=p(sf,`하지만 OpenAPI보다 성능이 더 좋은 대안들이 많다.
그리고 OpenAPI는 기본적으로 주요 변경 사항에 대한 보호를 제공하지 않는다.
이를테면 문서에서 어떤 필드를 제거했지만 다른 팀이 이에 의존하는 경우, 그들의 워크플로우가 깨질 수 있다.`),sf.forEach(n),xp=i(s),jn=l(s,"P",{});var nf=r(jn);lu=p(nf,"이러한 문제를 해결하고 추가적인 기능을 제공하는 gRPC를 살펴보록 하자."),nf.forEach(n),Up=i(s),Op=l(s,"BR",{}),Lp=l(s,"BR",{}),Hp=i(s),xs=l(s,"H4",{id:!0});var oi=r(xs);Us=l(oi,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var af=r(Us);Mt=l(af,"SPAN",{class:!0}),r(Mt).forEach(n),af.forEach(n),cu=p(oi,"gRPC"),oi.forEach(n),qp=i(s),Qn=l(s,"P",{});var tf=r(Qn);ru=p(tf,`gRPC는 대규모 원격 통신을 위해 Google에서 개발된 통신 프레이뭐크로,
HTTP/2를 기반으로 하며 로드 밸런싱, 추적, 인증, 양방향 스트리밍, 헬스 체크 등의 기능을 제공한다.`),tf.forEach(n),Bp=i(s),Fn=l(s,"P",{});var ef=r(Fn);uu=p(ef,`gRPC는 전송하는 페이로드를 바이너리로 직렬화하기 때문에 더 빠르고 효율적이다.
또한 gRPC에서 클라이언트는 원격 서버의 코드를 마치 로컬 코드를 호출하듯 사용할 수 있다.
그리고, gRPC는 다양한 언어와 OpenAPI같은 다양한 프레임워크를 지원한다.`),ef.forEach(n),Np=i(s),Os=l(s,"P",{});var Do=r(Os);iu=p(Do,`원격 서버의 메소드를 호출하기 위해서는 먼저 Protobuf 파일을 작성해야 한다.
Protobuf 파일은 주로 `),Rt=l(Do,"CODE",{});var pf=r(Rt);ku=p(pf,".proto"),pf.forEach(n),fu=p(Do,` 확장자를 가지며, 언어에 구애받지 않는다.
Protobuf 파일은 다음과 같은 형태를 가진다.`),Do.forEach(n),Gp=i(s),U(Ls.$$.fragment,s),jp=i(s),Kn=l(s,"P",{});var of=r(Kn);mu=p(of,"이를 통해 서비스, 그리고 요청 및 응답 객체를 정의하고, 클라이언트 코드와 서버 코드를 생성할 수 있다."),of.forEach(n),Qp=i(s),Wn=l(s,"P",{});var lf=r(Wn);Eu=p(lf,`gRPC는 REST-API 기반인 OpenAPI에 비해 시작하기가 조금 더 어렵다.
또한 코드를 생성하는데 필요한 일부 도구를 설치 및 사용하기가 다소 어려울 수 있다.`),lf.forEach(n),Fp=i(s),Z=l(s,"P",{});var ta=r(Z);vu=p(ta,"먼저, "),Tt=l(ta,"CODE",{});var cf=r(Tt);_u=p(cf,"protobuf"),cf.forEach(n),bu=p(ta," 컴파일러를 설치하고, "),It=l(ta,"CODE",{});var rf=r(It);yu=p(rf,"protoc"),rf.forEach(n),du=p(ta," 명령어를 활성화하기 위해 path를 업데이트해줘야 한다."),ta.forEach(n),Kp=i(s),en=l(s,"PRE",{class:!0});var Of=r(en);Of.forEach(n),Wp=i(s),zn=l(s,"P",{});var uf=r(zn);Pu=p(uf,"이후, 프로젝트 폴더에서 다음과 같이 명령어를 입력한다."),uf.forEach(n),zp=i(s),pn=l(s,"PRE",{class:!0});var Lf=r(pn);Lf.forEach(n),Zp=i(s),J=l(s,"P",{});var ea=r(J);$u=p(ea,"이렇게 하면 "),St=l(ea,"CODE",{});var kf=r(St);Du=p(kf,"userservice.pb.go"),kf.forEach(n),wu=p(ea,"와 "),xt=l(ea,"CODE",{});var ff=r(xt);Au=p(ff,"userservice_grpc.pb.go"),ff.forEach(n),Cu=p(ea," 파일이 생성되며, 해당 파일을 통해 서버와 클라이언트 코드를 작성할 수 있다."),ea.forEach(n),Jp=i(s),Zn=l(s,"P",{});var mf=r(Zn);Mu=p(mf,"gRPC에 관련한 내용은 아마도 다른 포스트에서 다룰 예정이다."),mf.forEach(n),Vp=i(s),Xp=l(s,"BR",{}),Yp=i(s),Hs=l(s,"H3",{id:!0});var li=r(Hs);qs=l(li,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Ef=r(qs);Ut=l(Ef,"SPAN",{class:!0}),r(Ut).forEach(n),Ef.forEach(n),Ru=p(li,"Anti-Corruption Layer"),li.forEach(n),gp=i(s),Bs=l(s,"P",{});var wo=r(Bs);Tu=p(wo,`Anti-Corruption Layer는 Adapter Layer라고도 하며, 다른 시스템의 모델을 변환하기 위해 사용된다.
Open Host Service와 잘 어울리는 상호보완적인 패턴이라고도 할 수 있다.
가령 마케팅 팀의 published language에서는 `),Ot=l(wo,"EM",{});var vf=r(Ot);Iu=p(vf,"캠페인(campaign)"),vf.forEach(n),Su=p(wo,"을 다음과 같이 정의할 수 있다."),wo.forEach(n),hp=i(s),on=l(s,"PRE",{class:!0});var Hf=r(on);Hf.forEach(n),so=i(s),Ns=l(s,"P",{});var Ao=r(Ns);xu=p(Ao,"하지만 우리 팀에서의 "),Lt=l(Ao,"EM",{});var _f=r(Lt);Uu=p(_f,"캠페인"),_f.forEach(n),Ou=p(Ao,"은 내부적으로 이와 같이 정의되어 있다고 해보자."),Ao.forEach(n),no=i(s),ln=l(s,"PRE",{class:!0});var qf=r(ln);qf.forEach(n),ao=i(s),Gs=l(s,"P",{});var Co=r(Gs);Lu=p(Co,`두 모델은 거의 동일한 정보를 가지고 있지만, 데이터 필드의 이름이나 포맷이 약간 다르다.
우리의 `),Ht=l(Co,"EM",{});var bf=r(Ht);Hu=p(bf,"캠페인"),bf.forEach(n),qu=p(Co,` 모델을 마케팅 팀과 완전히 동일하게 바꾸면 해결되지만 이는 DDD의 원칙에 위배된다.
이러한 경우 Anti-Corruption Layer를 사용할 수 있다.`),Co.forEach(n),to=i(s),U(js.$$.fragment,s),eo=i(s),V=l(s,"P",{});var pa=r(V);Bu=p(pa,"이와 같이 "),qt=l(pa,"CODE",{});var yf=r(qt);Nu=p(yf,"MarketingCampaignModel"),yf.forEach(n),Gu=p(pa,"을 "),Bt=l(pa,"CODE",{});var df=r(Bt);ju=p(df,"Campaign"),df.forEach(n),Qu=p(pa,`으로 변환하는 과정에서 데이터가 변환 가능한지 검증하는 로직이 포함되어 있다.
복잡한 시스템에서는 Anti-Corruption Layer의 역할이 더 커질 수 있고, 이전 시스템에서 현 시스템으로 마이그레이션하는 과정에서도 사용될 수 있다.
하지만 추가적인 오버헤드나 실패가 발생할 수 있는 지점이 생겨난다는 점을 유의해야 한다.`),pa.forEach(n),po=i(s),Jn=l(s,"P",{});var Pf=r(Jn);Fu=p(Pf,"모든 DDD 패턴 중, Anti-Corruption Layer는 DDD 외부에서 가장 많이 사용되는 패턴이다. 시스템을 분리(디커플링)된 상태로 유지할 때 효과적이다."),Pf.forEach(n),oo=i(s),lo=l(s,"BR",{}),co=l(s,"BR",{}),ro=i(s),Qs=l(s,"H2",{id:!0});var ci=r(Qs);Fs=l(ci,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var $f=r(Fs);Nt=l($f,"SPAN",{class:!0}),r(Nt).forEach(n),$f.forEach(n),Ku=p(ci,"References"),ci.forEach(n),uo=i(s),io=l(s,"HR",{}),ko=i(s),N=l(s,"CENTER",{});var un=r(N);Gt=l(un,"P",{});var Df=r(Gt);Wu=p(Df,"["),Df.forEach(n),zu=i(un),U(cn.$$.fragment,un),Zu=p(un,`
](https://learning.oreilly.com/library/view/domain-driven-design-with/9781804613450/) `),Ju=l(un,"BR",{}),Vu=p(un,`
[Matthew Boyle, Domain-Driven Design with Golang』, O'Reilly Media, Inc.](https://learning.oreilly.com/library/view/domain-driven-design-with/9781804613450/)`),un.forEach(n),this.h()},h(){k(m,"class","icon icon-link"),k(v,"aria-hidden","true"),k(v,"tabindex","-1"),k(v,"href","#상황-설정"),k(f,"id","상황-설정"),k(Ca,"class","icon icon-link"),k(as,"aria-hidden","true"),k(as,"tabindex","-1"),k(as,"href","#도메인domain과-서브도메인sub-domain"),k(ns,"id","도메인domain과-서브도메인sub-domain"),k(Ua,"class","icon icon-link"),k(ps,"aria-hidden","true"),k(ps,"tabindex","-1"),k(ps,"href","#유비쿼터스-언어ubiquitous-language"),k(es,"id","유비쿼터스-언어ubiquitous-language"),k(qa,"class","icon icon-link"),k(ls,"aria-hidden","true"),k(ls,"tabindex","-1"),k(ls,"href","#유비쿼터스-언어의-이점"),k(os,"id","유비쿼터스-언어의-이점"),k(tt,"class","icon icon-link"),k(ms,"aria-hidden","true"),k(ms,"tabindex","-1"),k(ms,"href","#강력한-유비쿼터스-언어를-만드는-방법"),k(fs,"id","강력한-유비쿼터스-언어를-만드는-방법"),k(et,"class","icon icon-link"),k(vs,"aria-hidden","true"),k(vs,"tabindex","-1"),k(vs,"href","#유비쿼터스-언어를-적용할-때의-주의점"),k(Es,"id","유비쿼터스-언어를-적용할-때의-주의점"),k(ct,"class","icon icon-link"),k(bs,"aria-hidden","true"),k(bs,"tabindex","-1"),k(bs,"href","#제한된-컨텍스트"),k(_s,"id","제한된-컨텍스트"),k(_t,"class","icon icon-link"),k(Ps,"aria-hidden","true"),k(Ps,"tabindex","-1"),k(Ps,"href","#open-host-service"),k(ds,"id","open-host-service"),k(yt,"class","icon icon-link"),k(As,"aria-hidden","true"),k(As,"tabindex","-1"),k(As,"href","#published-language"),k(ws,"id","published-language"),k(Pt,"class","icon icon-link"),k(Rs,"aria-hidden","true"),k(Rs,"tabindex","-1"),k(Rs,"href","#openapi"),k(Ms,"id","openapi"),k(sn,"href","https://github.com/PacktPublishing/Domain-Driven-Design-with-GoLang/tree/main/chapter2/oapi"),k(sn,"rel","nofollow"),k(nn,"class","language-bash"),k(an,"class","language-yml"),k(tn,"class","language-bash"),k(Mt,"class","icon icon-link"),k(Us,"aria-hidden","true"),k(Us,"tabindex","-1"),k(Us,"href","#grpc"),k(xs,"id","grpc"),k(en,"class","language-bash"),k(pn,"class","language-bash"),k(Ut,"class","icon icon-link"),k(qs,"aria-hidden","true"),k(qs,"tabindex","-1"),k(qs,"href","#anti-corruption-layer"),k(Hs,"id","anti-corruption-layer"),k(on,"class","language-json"),k(ln,"class","language-go"),k(Nt,"class","icon icon-link"),k(Fs,"aria-hidden","true"),k(Fs,"tabindex","-1"),k(Fs,"href","#references"),k(Qs,"id","references")},m(s,t){c(s,f,t),a(f,v),a(v,m),a(f,E),c(s,zt,t),c(s,Zt,t),c(s,Jt,t),c(s,h,t),a(h,Ro),a(h,oa),a(oa,To),a(h,Io),c(s,Vt,t),c(s,kn,t),a(kn,D),a(D,A),a(A,la),a(la,So),a(A,xo),a(A,ca),a(ca,Uo),a(A,Oo),a(A,ra),a(ra,Lo),a(A,Ho),a(A,ua),a(ua,qo),a(A,Bo),a(D,No),a(D,fn),a(fn,ia),a(ia,Go),a(fn,jo),a(D,Qo),a(D,_),a(_,ka),a(ka,Fo),a(_,Ko),a(_,fa),a(fa,Wo),a(_,zo),a(_,ma),a(ma,Zo),a(_,Jo),a(_,Ea),a(Ea,Vo),a(_,Xo),a(_,va),a(va,Yo),a(_,go),a(_,_a),a(_a,ho),a(_,sl),a(_,ba),a(ba,nl),a(_,al),a(D,tl),a(D,B),a(B,el),a(B,ya),a(ya,pl),a(B,ol),a(B,da),a(da,ll),a(B,cl),a(B,Pa),a(Pa,rl),a(B,ul),a(D,il),a(D,C),a(C,$a),a($a,kl),a(C,fl),a(C,Da),a(Da,ml),a(C,El),a(C,wa),a(wa,vl),a(C,_l),a(C,Aa),a(Aa,bl),a(C,yl),c(s,Xt,t),c(s,mn,t),a(mn,dl),c(s,Yt,t),O(ss,s,t),c(s,gt,t),c(s,En,t),a(En,Pl),c(s,ht,t),c(s,se,t),c(s,ne,t),c(s,ae,t),c(s,ns,t),a(ns,as),a(as,Ca),a(ns,$l),c(s,te,t),c(s,ee,t),c(s,pe,t),c(s,M,t),a(M,Dl),a(M,Ma),a(Ma,wl),a(M,Al),a(M,Ra),a(Ra,Cl),a(M,Ml),a(M,Ta),a(Ta,Rl),a(M,Tl),c(s,oe,t),c(s,vn,t),a(vn,Il),c(s,le,t),c(s,G,t),a(G,Sl),a(G,Ia),a(Ia,xl),a(G,Ul),a(G,Sa),a(Sa,Ol),a(G,Ll),c(s,ce,t),c(s,_n,t),a(_n,Hl),c(s,re,t),c(s,ts,t),a(ts,ql),a(ts,xa),a(xa,Bl),a(ts,Nl),c(s,ue,t),c(s,ie,t),c(s,ke,t),c(s,fe,t),c(s,es,t),a(es,ps),a(ps,Ua),a(es,Gl),c(s,me,t),c(s,Ee,t),c(s,ve,t),c(s,bn,t),a(bn,jl),c(s,_e,t),c(s,R,t),a(R,Ql),a(R,Oa),a(Oa,Fl),a(R,Kl),a(R,La),a(La,Wl),a(R,zl),a(R,Ha),a(Ha,Zl),a(R,Jl),c(s,be,t),c(s,yn,t),a(yn,Vl),c(s,ye,t),c(s,dn,t),a(dn,Xl),c(s,de,t),c(s,os,t),a(os,ls),a(ls,qa),a(os,Yl),c(s,Pe,t),c(s,j,t),a(j,gl),a(j,Ba),a(Ba,hl),a(j,sc),a(j,Na),a(Na,nc),a(j,ac),c(s,$e,t),c(s,Pn,t),a(Pn,tc),c(s,De,t),O(cs,s,t),c(s,we,t),c(s,rs,t),a(rs,ec),a(rs,Ga),a(Ga,pc),a(rs,oc),c(s,Ae,t),c(s,T,t),a(T,lc),a(T,ja),a(ja,cc),a(T,rc),a(T,Qa),a(Qa,uc),a(T,ic),a(T,Fa),a(Fa,kc),a(T,fc),c(s,Ce,t),c(s,Me,t),c(s,Re,t),c(s,$n,t),a($n,mc),c(s,Te,t),O(us,s,t),c(s,Ie,t),c(s,Dn,t),a(Dn,Ec),c(s,Se,t),c(s,b,t),a(b,vc),a(b,Ka),a(Ka,_c),a(b,bc),a(b,Wa),a(Wa,yc),a(b,dc),a(b,za),a(za,Pc),a(b,$c),a(b,Za),a(Za,Dc),a(b,wc),a(b,Ja),a(Ja,Ac),a(b,Cc),a(b,Va),a(Va,Mc),a(b,Rc),c(s,xe,t),c(s,is,t),a(is,Tc),a(is,Xa),a(Xa,Ic),a(is,Sc),c(s,Ue,t),c(s,wn,t),a(wn,xc),c(s,Oe,t),c(s,Le,t),c(s,He,t),c(s,Q,t),a(Q,Uc),a(Q,Ya),a(Ya,Oc),a(Q,Lc),a(Q,ga),a(ga,Hc),a(Q,qc),c(s,qe,t),O(ks,s,t),c(s,Be,t),c(s,P,t),a(P,Bc),a(P,ha),a(ha,Nc),a(P,Gc),a(P,st),a(st,jc),a(P,Qc),a(P,nt),a(nt,Fc),a(P,Kc),a(P,at),a(at,Wc),a(P,zc),c(s,Ne,t),c(s,fs,t),a(fs,ms),a(ms,tt),a(fs,Zc),c(s,Ge,t),c(s,An,t),a(An,Jc),c(s,je,t),c(s,Es,t),a(Es,vs),a(vs,et),a(Es,Vc),c(s,Qe,t),c(s,I,t),a(I,Xc),a(I,pt),a(pt,Yc),a(I,gc),a(I,ot),a(ot,hc),a(I,sr),a(I,lt),a(lt,nr),a(I,ar),c(s,Fe,t),c(s,Ke,t),c(s,We,t),c(s,ze,t),c(s,_s,t),a(_s,bs),a(bs,ct),a(_s,tr),c(s,Ze,t),c(s,Je,t),c(s,Ve,t),c(s,ys,t),a(ys,er),a(ys,rt),a(rt,pr),a(ys,or),c(s,Xe,t),c(s,Cn,t),a(Cn,lr),c(s,Ye,t),O(Ys,s,t),c(s,ge,t),c(s,Mn,t),a(Mn,cr),c(s,he,t),O(gs,s,t),c(s,sp,t),c(s,F,t),a(F,rr),a(F,ut),a(ut,ur),a(F,ir),a(F,it),a(it,kr),a(F,fr),c(s,np,t),c(s,K,t),a(K,mr),a(K,kt),a(kt,Er),a(K,vr),a(K,ft),a(ft,_r),a(K,br),c(s,ap,t),c(s,Rn,t),a(Rn,yr),c(s,tp,t),c(s,Tn,t),a(Tn,Y),a(Y,mt),a(mt,dr),a(Y,Pr),a(Y,Et),a(Et,$r),a(Y,Dr),a(Y,vt),a(vt,wr),c(s,ep,t),c(s,ds,t),a(ds,Ps),a(Ps,_t),a(ds,Ar),c(s,pp,t),c(s,In,t),a(In,Cr),c(s,op,t),c(s,Sn,t),a(Sn,Mr),c(s,lp,t),O(hs,s,t),c(s,cp,t),c(s,xn,t),a(xn,Rr),c(s,rp,t),O($s,s,t),c(s,up,t),c(s,Ds,t),a(Ds,Tr),a(Ds,bt),a(bt,Ir),a(Ds,Sr),c(s,ip,t),c(s,Un,t),a(Un,xr),c(s,kp,t),c(s,fp,t),c(s,mp,t),c(s,ws,t),a(ws,As),a(As,yt),a(ws,Ur),c(s,Ep,t),c(s,On,t),a(On,Or),c(s,vp,t),c(s,Cs,t),a(Cs,Lr),a(Cs,dt),a(dt,Hr),a(Cs,qr),c(s,_p,t),c(s,Ms,t),a(Ms,Rs),a(Rs,Pt),a(Ms,Br),c(s,bp,t),c(s,Ln,t),a(Ln,Nr),c(s,yp,t),O(Ts,s,t),c(s,dp,t),c(s,W,t),a(W,Gr),a(W,$t),a($t,jr),a(W,Qr),a(W,sn),a(sn,Fr),a(W,Kr),c(s,Pp,t),c(s,Is,t),a(Is,Wr),a(Is,Dt),a(Dt,zr),a(Is,Zr),c(s,$p,t),c(s,nn,t),nn.innerHTML=wf,c(s,Dp,t),c(s,Hn,t),a(Hn,Jr),c(s,wp,t),c(s,an,t),an.innerHTML=Af,c(s,Ap,t),c(s,qn,t),a(qn,Vr),c(s,Cp,t),c(s,tn,t),tn.innerHTML=Cf,c(s,Mp,t),c(s,Ss,t),a(Ss,Xr),a(Ss,wt),a(wt,Yr),a(Ss,gr),c(s,Rp,t),c(s,z,t),a(z,hr),a(z,At),a(At,su),a(z,nu),a(z,Ct),a(Ct,au),a(z,tu),c(s,Tp,t),c(s,Bn,t),a(Bn,eu),c(s,Ip,t),c(s,Nn,t),a(Nn,pu),c(s,Sp,t),c(s,Gn,t),a(Gn,ou),c(s,xp,t),c(s,jn,t),a(jn,lu),c(s,Up,t),c(s,Op,t),c(s,Lp,t),c(s,Hp,t),c(s,xs,t),a(xs,Us),a(Us,Mt),a(xs,cu),c(s,qp,t),c(s,Qn,t),a(Qn,ru),c(s,Bp,t),c(s,Fn,t),a(Fn,uu),c(s,Np,t),c(s,Os,t),a(Os,iu),a(Os,Rt),a(Rt,ku),a(Os,fu),c(s,Gp,t),O(Ls,s,t),c(s,jp,t),c(s,Kn,t),a(Kn,mu),c(s,Qp,t),c(s,Wn,t),a(Wn,Eu),c(s,Fp,t),c(s,Z,t),a(Z,vu),a(Z,Tt),a(Tt,_u),a(Z,bu),a(Z,It),a(It,yu),a(Z,du),c(s,Kp,t),c(s,en,t),en.innerHTML=Mf,c(s,Wp,t),c(s,zn,t),a(zn,Pu),c(s,zp,t),c(s,pn,t),pn.innerHTML=Rf,c(s,Zp,t),c(s,J,t),a(J,$u),a(J,St),a(St,Du),a(J,wu),a(J,xt),a(xt,Au),a(J,Cu),c(s,Jp,t),c(s,Zn,t),a(Zn,Mu),c(s,Vp,t),c(s,Xp,t),c(s,Yp,t),c(s,Hs,t),a(Hs,qs),a(qs,Ut),a(Hs,Ru),c(s,gp,t),c(s,Bs,t),a(Bs,Tu),a(Bs,Ot),a(Ot,Iu),a(Bs,Su),c(s,hp,t),c(s,on,t),on.innerHTML=Tf,c(s,so,t),c(s,Ns,t),a(Ns,xu),a(Ns,Lt),a(Lt,Uu),a(Ns,Ou),c(s,no,t),c(s,ln,t),ln.innerHTML=If,c(s,ao,t),c(s,Gs,t),a(Gs,Lu),a(Gs,Ht),a(Ht,Hu),a(Gs,qu),c(s,to,t),O(js,s,t),c(s,eo,t),c(s,V,t),a(V,Bu),a(V,qt),a(qt,Nu),a(V,Gu),a(V,Bt),a(Bt,ju),a(V,Qu),c(s,po,t),c(s,Jn,t),a(Jn,Fu),c(s,oo,t),c(s,lo,t),c(s,co,t),c(s,ro,t),c(s,Qs,t),a(Qs,Fs),a(Fs,Nt),a(Qs,Ku),c(s,uo,t),c(s,io,t),c(s,ko,t),c(s,N,t),a(N,Gt),a(Gt,Wu),a(N,zu),O(cn,N,null),a(N,Zu),a(N,Ju),a(N,Vu),fo=!0},p(s,[t]){const jt={};t&1&&(jt.$$scope={dirty:t,ctx:s}),ss.$set(jt);const rn={};t&1&&(rn.$$scope={dirty:t,ctx:s}),cs.$set(rn);const Qt={};t&1&&(Qt.$$scope={dirty:t,ctx:s}),us.$set(Qt);const Ft={};t&1&&(Ft.$$scope={dirty:t,ctx:s}),ks.$set(Ft);const w={};t&1&&(w.$$scope={dirty:t,ctx:s}),$s.$set(w);const S={};t&1&&(S.$$scope={dirty:t,ctx:s}),Ts.$set(S);const Kt={};t&1&&(Kt.$$scope={dirty:t,ctx:s}),Ls.$set(Kt);const Wt={};t&1&&(Wt.$$scope={dirty:t,ctx:s}),js.$set(Wt)},i(s){fo||(L(ss.$$.fragment,s),L(cs.$$.fragment,s),L(us.$$.fragment,s),L(ks.$$.fragment,s),L(Ys.$$.fragment,s),L(gs.$$.fragment,s),L(hs.$$.fragment,s),L($s.$$.fragment,s),L(Ts.$$.fragment,s),L(Ls.$$.fragment,s),L(js.$$.fragment,s),L(cn.$$.fragment,s),fo=!0)},o(s){H(ss.$$.fragment,s),H(cs.$$.fragment,s),H(us.$$.fragment,s),H(ks.$$.fragment,s),H(Ys.$$.fragment,s),H(gs.$$.fragment,s),H(hs.$$.fragment,s),H($s.$$.fragment,s),H(Ts.$$.fragment,s),H(Ls.$$.fragment,s),H(js.$$.fragment,s),H(cn.$$.fragment,s),fo=!1},d(s){s&&n(f),s&&n(zt),s&&n(Zt),s&&n(Jt),s&&n(h),s&&n(Vt),s&&n(kn),s&&n(Xt),s&&n(mn),s&&n(Yt),q(ss,s),s&&n(gt),s&&n(En),s&&n(ht),s&&n(se),s&&n(ne),s&&n(ae),s&&n(ns),s&&n(te),s&&n(ee),s&&n(pe),s&&n(M),s&&n(oe),s&&n(vn),s&&n(le),s&&n(G),s&&n(ce),s&&n(_n),s&&n(re),s&&n(ts),s&&n(ue),s&&n(ie),s&&n(ke),s&&n(fe),s&&n(es),s&&n(me),s&&n(Ee),s&&n(ve),s&&n(bn),s&&n(_e),s&&n(R),s&&n(be),s&&n(yn),s&&n(ye),s&&n(dn),s&&n(de),s&&n(os),s&&n(Pe),s&&n(j),s&&n($e),s&&n(Pn),s&&n(De),q(cs,s),s&&n(we),s&&n(rs),s&&n(Ae),s&&n(T),s&&n(Ce),s&&n(Me),s&&n(Re),s&&n($n),s&&n(Te),q(us,s),s&&n(Ie),s&&n(Dn),s&&n(Se),s&&n(b),s&&n(xe),s&&n(is),s&&n(Ue),s&&n(wn),s&&n(Oe),s&&n(Le),s&&n(He),s&&n(Q),s&&n(qe),q(ks,s),s&&n(Be),s&&n(P),s&&n(Ne),s&&n(fs),s&&n(Ge),s&&n(An),s&&n(je),s&&n(Es),s&&n(Qe),s&&n(I),s&&n(Fe),s&&n(Ke),s&&n(We),s&&n(ze),s&&n(_s),s&&n(Ze),s&&n(Je),s&&n(Ve),s&&n(ys),s&&n(Xe),s&&n(Cn),s&&n(Ye),q(Ys,s),s&&n(ge),s&&n(Mn),s&&n(he),q(gs,s),s&&n(sp),s&&n(F),s&&n(np),s&&n(K),s&&n(ap),s&&n(Rn),s&&n(tp),s&&n(Tn),s&&n(ep),s&&n(ds),s&&n(pp),s&&n(In),s&&n(op),s&&n(Sn),s&&n(lp),q(hs,s),s&&n(cp),s&&n(xn),s&&n(rp),q($s,s),s&&n(up),s&&n(Ds),s&&n(ip),s&&n(Un),s&&n(kp),s&&n(fp),s&&n(mp),s&&n(ws),s&&n(Ep),s&&n(On),s&&n(vp),s&&n(Cs),s&&n(_p),s&&n(Ms),s&&n(bp),s&&n(Ln),s&&n(yp),q(Ts,s),s&&n(dp),s&&n(W),s&&n(Pp),s&&n(Is),s&&n($p),s&&n(nn),s&&n(Dp),s&&n(Hn),s&&n(wp),s&&n(an),s&&n(Ap),s&&n(qn),s&&n(Cp),s&&n(tn),s&&n(Mp),s&&n(Ss),s&&n(Rp),s&&n(z),s&&n(Tp),s&&n(Bn),s&&n(Ip),s&&n(Nn),s&&n(Sp),s&&n(Gn),s&&n(xp),s&&n(jn),s&&n(Up),s&&n(Op),s&&n(Lp),s&&n(Hp),s&&n(xs),s&&n(qp),s&&n(Qn),s&&n(Bp),s&&n(Fn),s&&n(Np),s&&n(Os),s&&n(Gp),q(Ls,s),s&&n(jp),s&&n(Kn),s&&n(Qp),s&&n(Wn),s&&n(Fp),s&&n(Z),s&&n(Kp),s&&n(en),s&&n(Wp),s&&n(zn),s&&n(zp),s&&n(pn),s&&n(Zp),s&&n(J),s&&n(Jp),s&&n(Zn),s&&n(Vp),s&&n(Xp),s&&n(Yp),s&&n(Hs),s&&n(gp),s&&n(Bs),s&&n(hp),s&&n(on),s&&n(so),s&&n(Ns),s&&n(no),s&&n(ln),s&&n(ao),s&&n(Gs),s&&n(to),q(js,s),s&&n(eo),s&&n(V),s&&n(po),s&&n(Jn),s&&n(oo),s&&n(lo),s&&n(co),s&&n(ro),s&&n(Qs),s&&n(uo),s&&n(io),s&&n(ko),s&&n(N),q(cn)}}}const hf={title:"도메인, 유비쿼터스 언어, 제한된 컨텍스트 이해하기",date:"2023-07-07T00:00:00.000Z",excerpt:"Understanding Domains, Ubiquitous Language, and Bounded Contexts",categories:["Golang","Backend","Architecture","Domain Driven Design"],coverImage:"/post_img/Backend/Architecture/DDD/cover.png",coverWidth:16,coverHeight:9,indexed:!1,exposed:!0};class sm extends Bf{constructor(f){super(),Nf(this,f,null,Vf,Gf,{})}}export{sm as default,hf as metadata};
