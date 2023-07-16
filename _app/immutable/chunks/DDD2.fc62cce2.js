import{S as Yf,i as hf,s as gf,k as e,q as l,a as u,y as Fs,l as p,m as r,h as n,r as o,c as i,z as Ks,n as k,U as Sl,b as c,E as a,A as Ws,g as zs,d as Zs,B as Js,M as Xs}from"./index.5621e629.js";import{C as Vs}from"./CodeBlockWrapper.c301ace2.js";function s1(y){let f,v=`<code class="language-go"><span class="token keyword">package</span> chapter2

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
<span class="token punctuation">&#125;</span></code>`;return{c(){f=e("pre"),this.h()},l(m){f=p(m,"PRE",{class:!0});var E=r(f);E.forEach(n),this.h()},h(){k(f,"class","language-go")},m(m,E){c(m,f,E),f.innerHTML=v},p:Xs,d(m){m&&n(f)}}}function n1(y){let f,v=`<code class="language-go"><span class="token keyword">type</span> UserType <span class="token operator">=</span> <span class="token builtin">int</span>
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
<span class="token punctuation">)</span></code>`;return{c(){f=e("pre"),this.h()},l(m){f=p(m,"PRE",{class:!0});var E=r(f);E.forEach(n),this.h()},h(){k(f,"class","language-go")},m(m,E){c(m,f,E),f.innerHTML=v},p:Xs,d(m){m&&n(f)}}}function a1(y){let f,v=`<code class="language-go"><span class="token keyword">type</span> UserAddRequest <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
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
<span class="token punctuation">&#125;</span></code>`;return{c(){f=e("pre"),this.h()},l(m){f=p(m,"PRE",{class:!0});var E=r(f);E.forEach(n),this.h()},h(){k(f,"class","language-go")},m(m,E){c(m,f,E),f.innerHTML=v},p:Xs,d(m){m&&n(f)}}}function t1(y){let f,v=`<code class="language-go"><span class="token keyword">type</span> LeadRequest <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
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
<span class="token punctuation">&#125;</span></code>`;return{c(){f=e("pre"),this.h()},l(m){f=p(m,"PRE",{class:!0});var E=r(f);E.forEach(n),this.h()},h(){k(f,"class","language-go")},m(m,E){c(m,f,E),f.innerHTML=v},p:Xs,d(m){m&&n(f)}}}function e1(y){let f,v=`<code class="language-go"><span class="token keyword">package</span> chapter2

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
<span class="token punctuation">&#125;</span></code>`;return{c(){f=e("pre"),this.h()},l(m){f=p(m,"PRE",{class:!0});var E=r(f);E.forEach(n),this.h()},h(){k(f,"class","language-go")},m(m,E){c(m,f,E),f.innerHTML=v},p:Xs,d(m){m&&n(f)}}}function p1(y){let f,v=`<code class="language-yml"><span class="token key atrule">swagger</span><span class="token punctuation">:</span> <span class="token string">'2.0'</span>
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
	<span class="token punctuation">...</span></code>`;return{c(){f=e("pre"),this.h()},l(m){f=p(m,"PRE",{class:!0});var E=r(f);E.forEach(n),this.h()},h(){k(f,"class","language-yml")},m(m,E){c(m,f,E),f.innerHTML=v},p:Xs,d(m){m&&n(f)}}}function l1(y){let f,v=`<code class="language-proto">syntax = &quot;proto3&quot;;

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
&#125;</code>`;return{c(){f=e("pre"),this.h()},l(m){f=p(m,"PRE",{class:!0});var E=r(f);E.forEach(n),this.h()},h(){k(f,"class","language-proto")},m(m,E){c(m,f,E),f.innerHTML=v},p:Xs,d(m){m&&n(f)}}}function o1(y){let f,v=`<code class="language-go"><span class="token keyword">package</span> chapter2

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
<span class="token punctuation">&#125;</span></code>`;return{c(){f=e("pre"),this.h()},l(m){f=p(m,"PRE",{class:!0});var E=r(f);E.forEach(n),this.h()},h(){k(f,"class","language-go")},m(m,E){c(m,f,E),f.innerHTML=v},p:Xs,d(m){m&&n(f)}}}function c1(y){let f,v,m,E,Yt,ht,gt,Z,xl,ka,Ul,Ol,se,cn,w,A,fa,Ll,Hl,ma,ql,Bl,Ea,Gl,Nl,va,jl,Ql,Fl,rn,_a,Kl,Wl,zl,_,ba,Zl,Jl,ya,Vl,Xl,da,Yl,hl,Pa,gl,so,Da,no,ao,wa,to,eo,$a,po,lo,oo,x,co,Aa,ro,uo,Ca,io,ko,Ma,fo,mo,Eo,C,Ra,vo,_o,Ta,bo,yo,Ia,Po,Do,Sa,wo,$o,ne,un,Ao,ae,J,te,kn,Co,ee,pe,le,oe,V,X,xa,Mo,ce,re,ue,M,Ro,Ua,To,Io,Oa,So,xo,La,Uo,Oo,ie,fn,Lo,ke,U,Ho,Ha,qo,Bo,qa,Go,No,fe,mn,jo,me,Y,Qo,Ba,Fo,Ko,Ee,ve,_e,be,h,g,Ga,Wo,ye,de,Pe,En,zo,De,R,Zo,Na,Jo,Vo,ja,Xo,Yo,Qa,ho,go,we,vn,sc,$e,_n,nc,Ae,ss,ns,Fa,ac,Ce,O,tc,Ka,ec,pc,Wa,lc,oc,Me,bn,cc,Re,as,Te,ts,rc,za,uc,ic,Ie,T,kc,Za,fc,mc,Ja,Ec,vc,Va,_c,bc,Se,xe,Ue,yn,yc,Oe,es,Le,dn,dc,He,b,Pc,Xa,Dc,wc,Ya,$c,Ac,ha,Cc,Mc,ga,Rc,Tc,st,Ic,Sc,nt,xc,Uc,qe,ps,Oc,at,Lc,Hc,Be,Pn,qc,Ge,Ne,je,L,Bc,tt,Gc,Nc,et,jc,Qc,Qe,ls,Fe,P,Fc,pt,Kc,Wc,lt,zc,Zc,ot,Jc,Vc,ct,Xc,Yc,Ke,os,cs,rt,hc,We,Dn,gc,ze,rs,us,ut,sr,Ze,I,nr,it,ar,tr,kt,er,pr,ft,lr,or,Je,Ve,Xe,Ye,is,ks,mt,cr,he,ge,sp,fs,rr,Et,ur,ir,np,wn,kr,ap,$n,An,fi,tp,Cn,fr,ep,Mn,Rn,mi,pp,H,mr,vt,Er,vr,_t,_r,br,lp,q,yr,bt,dr,Pr,yt,Dr,wr,op,Tn,$r,cp,In,K,dt,Ar,Cr,Pt,Mr,Rr,Dt,Tr,rp,ms,Es,wt,Ir,up,Sn,Sr,ip,xn,xr,kp,Un,On,Ei,fp,Ln,Ur,mp,vs,Ep,_s,Or,$t,Lr,Hr,vp,Hn,qr,_p,bp,yp,bs,ys,At,Br,dp,qn,Gr,Pp,ds,Nr,Ct,jr,Qr,Dp,Ps,Ds,Mt,Fr,wp,Bn,Kr,$p,ws,Ap,B,Wr,Rt,zr,Zr,Ys,Jr,Vr,Cp,$s,Xr,Tt,Yr,hr,Mp,hs,qf='<code class="language-bash">go <span class="token function">install</span> github.com/deepmap/oapi-codegen/cmd/oapi-codegen@latest</code>',Rp,Gn,gr,Tp,gs,Bf=`<code class="language-yml"><span class="token key atrule">package</span><span class="token punctuation">:</span> oapi
<span class="token key atrule">output</span><span class="token punctuation">:</span> ./openapi.gen.go
<span class="token key atrule">generate</span><span class="token punctuation">:</span>
  <span class="token key atrule">models</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></code>`,Ip,Nn,su,Sp,sn,Gf='<code class="language-bash">oapi-codegen <span class="token parameter variable">--config</span><span class="token operator">=</span>config.yml  ./oapi.yaml</code>',xp,As,nu,It,au,tu,Up,G,eu,St,pu,lu,xt,ou,cu,Op,jn,ru,Lp,Qn,uu,Hp,Fn,iu,qp,Kn,ku,Bp,Gp,Np,jp,Cs,Ms,Ut,fu,Qp,Wn,mu,Fp,zn,Eu,Kp,Rs,vu,Ot,_u,bu,Wp,Ts,zp,Zn,yu,Zp,Jn,du,Jp,N,Pu,Lt,Du,wu,Ht,$u,Au,Vp,nn,Nf=`<code class="language-bash"><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> protobuf-compiler
go <span class="token function">install</span> google.golang.org/protobuf/cmd/protoc-gen-go@latest
go <span class="token function">install</span> google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">"<span class="token environment constant">$PATH</span>:<span class="token variable"><span class="token variable">$(</span>go <span class="token function">env</span> GOPATH<span class="token variable">)</span></span>/bin"</span></code>`,Xp,Vn,Cu,Yp,an,jf=`<code class="language-bash">protoc <span class="token parameter variable">--go_out</span><span class="token operator">=</span>. <span class="token parameter variable">--go_opt</span><span class="token operator">=</span>paths<span class="token operator">=</span>source_relative <span class="token punctuation"></span>
    --go-grpc_out<span class="token operator">=</span>. --go-grpc_opt<span class="token operator">=</span>paths<span class="token operator">=</span>source_relative <span class="token punctuation"></span>
    grpc/userservice.proto</code>`,hp,j,Mu,qt,Ru,Tu,Bt,Iu,Su,gp,Xn,xu,sl,nl,al,Is,Ss,Gt,Uu,tl,xs,Ou,Nt,Lu,Hu,el,tn,Qf=`<code class="language-json"><span class="token punctuation">&#123;</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"4cdd4ba9-7c04-4a3d-ac52-71f37ba75d7f"</span><span class="token punctuation">,</span>
	<span class="token property">"metadata"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
		<span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"some campaign"</span><span class="token punctuation">,</span>
		<span class="token property">"category"</span><span class="token operator">:</span> <span class="token string">"growth"</span><span class="token punctuation">,</span>
		<span class="token property">"endDate"</span><span class="token operator">:</span> <span class="token string">"2023-04-12"</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,pl,Us,qu,jt,Bu,Gu,ll,en,Ff=`<code class="language-go"><span class="token keyword">type</span> Campaign <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
    id      <span class="token builtin">string</span>
    title   <span class="token builtin">string</span>
    goal    <span class="token builtin">string</span>
    endDate time<span class="token punctuation">.</span>Time
<span class="token punctuation">&#125;</span></code>`,ol,Os,Nu,Qt,ju,Qu,cl,Ls,rl,Q,Fu,Ft,Ku,Wu,Kt,zu,Zu,ul,Yn,Ju,il,kl,fl,ml,Hs,qs,Wt,Vu,El,vl,_l,hn,W,pn,gn,vi,Xu,Yu,hu,ln,gu,bl;return J=new Vs({props:{$$slots:{default:[s1]},$$scope:{ctx:y}}}),as=new Vs({props:{$$slots:{default:[n1]},$$scope:{ctx:y}}}),es=new Vs({props:{$$slots:{default:[a1]},$$scope:{ctx:y}}}),ls=new Vs({props:{$$slots:{default:[t1]},$$scope:{ctx:y}}}),vs=new Vs({props:{$$slots:{default:[e1]},$$scope:{ctx:y}}}),ws=new Vs({props:{$$slots:{default:[p1]},$$scope:{ctx:y}}}),Ts=new Vs({props:{$$slots:{default:[l1]},$$scope:{ctx:y}}}),Ls=new Vs({props:{$$slots:{default:[o1]},$$scope:{ctx:y}}}),{c(){f=e("h2"),v=e("a"),m=e("span"),E=l("상황 설정"),Yt=u(),ht=e("hr"),gt=u(),Z=e("p"),xl=l("회사에서 새로 생긴 개발팀인 "),ka=e("em"),Ul=l("과금 및 구독"),Ol=l(` 팀의의 리드 개발자가 되었다고 가정해보자.
아무래도 새로운 분야인지라 이 분야의 전문가들과 기본적인 도메인과 작동 방식에 대해 부지런히 논의해야 할 것이다.
그들의 반응은 다음과 같다.`),se=u(),cn=e("blockquote"),w=e("ul"),A=e("li"),fa=e("em"),Ll=l("리드(lead)"),Hl=l("가 처음으로 앱을 사용하는 경우, 그들은 세 가지 구독 계획을 선택해야 한다. 각각 "),ma=e("em"),ql=l("basic"),Bl=l(", "),Ea=e("em"),Gl=l("premium"),Nl=l(", "),va=e("em"),jl=l("exclusive"),Ql=l("이다."),Fl=u(),rn=e("li"),_a=e("em"),Kl=l("구독 계획(subscription plan)"),Wl=l("에 따라 앱 내에서 접근할 수 있는 기능이 달라지며, 이러한 사항은 변경될 수 있다."),zl=u(),_=e("li"),ba=e("em"),Zl=l("구독 계획"),Jl=l("이 생성되면 "),ya=e("em"),Vl=l("리드"),Xl=l("가 "),da=e("em"),Yl=l("고객(customer)"),hl=l("으로 전환되며, "),Pa=e("em"),gl=l("고객"),so=l("은 "),Da=e("em"),no=l("이탈"),ao=l("할 때까지 고객으로 간주한다. 이 경우, "),wa=e("em"),to=l("고객"),eo=l("은 다시 "),$a=e("em"),po=l("리드"),lo=l("가 된다."),oo=u(),x=e("li"),co=l("6개월이 지나면 이들을 "),Aa=e("em"),ro=l("잃어버린 리드(lost lead)"),uo=l("로 간주하며, "),Ca=e("em"),io=l("할인 코드(discount code)"),ko=l("를 포함할 수 있는 "),Ma=e("em"),fo=l("재참여 캠페인(re-engagement campaign)"),mo=l("의 대상이 될 수 있다."),Eo=u(),C=e("li"),Ra=e("em"),vo=l("구독 계획"),_o=l("이 생성되면 "),Ta=e("em"),bo=l("자동 이체(direct debit)"),yo=l("를 통해 "),Ia=e("em"),Po=l("고객"),Do=l("으로부터 자금을 확보하기 위해 "),Sa=e("em"),wo=l("반복 과금(recurring payment)"),$o=l("를 설정한다."),ne=u(),un=e("p"),Ao=l("자, 이제 팀으로 되돌아가서, 새 애플리케이션의 시작점으로 다음과 같은 인터페이스를 정의해보자."),ae=u(),Fs(J.$$.fragment),te=u(),kn=e("p"),Co=l("이와 같이 인터페이스를 정의하였다. 차후 DDD에 대해 더 자세히 알아보면서 이 코드를 다시 확인할 것이다."),ee=u(),pe=e("br"),le=e("br"),oe=u(),V=e("h2"),X=e("a"),xa=e("span"),Mo=l("도메인(Domain)과 서브도메인(Sub-Domain)"),ce=u(),re=e("hr"),ue=u(),M=e("p"),Ro=l("앞선 "),Ua=e("em"),To=l("상황 설정"),Io=l(" 장에서 결제 및 구독 시스템에 대한 간략한 개요를 살펴보았다. 이러한 것들이 바로 "),Oa=e("strong"),So=l("도메인"),xo=l(`이다.
Eric Evans에 따르면, 도메인은 `),La=e("em"),Uo=l("“지식, 영향, 또는 활동의 영역”"),Oo=l("이다."),ie=u(),fn=e("p"),Lo=l(`도메인은 DDD의 중심 개체로, 모든 언어와 시스템 전반에서 우리가 모델링해야 할 대상이다.
도메인을 떠올리는 또 다른 방법은 비즈니스 세계에서 바라보는 것이다.
Domain Driven Design이라는 용어를 Business Problem-Driven Design으로 읽는다고 생각해보면 된다.`),ke=u(),U=e("p"),Ho=l(`도메인을 정의하는 것은 어려운 문제이며, 항상 이 예제에서처럼 명확한 것은 아니다.
이 예제에서는 `),Ha=e("strong"),qo=l("결제"),Bo=l("와 "),qa=e("strong"),Go=l("구독"),No=l(`이라는, 확실히 구분되는 두 개의 도메인이 있다.
일부 팀에서는 이 두가지를 단일 도메인으로 간주할 수도 있지만, 크게 상관은 없다. DDD는 과학이 아니다.`),fe=u(),mn=e("p"),jo=l(`대규모 회사에서는 도메인을 중심으로 팀을 구성하는 경우가 많다.
새로운 도메인이 발견되고 팀이 성장함에 따라, 새로운 도메인에 기반한 팀이 생겨날 수도 있을 것이다.`),me=u(),Y=e("p"),Qo=l("도메인과 "),Ba=e("strong"),Fo=l("서브도메인"),Ko=l(`은 거의 같은 의미라고 볼 수 있지만,
상위 도메인의 자식 도메인임을 나타내고자 할 때 주로 서브도메인을 사용한다.
이 예제에서의 결제와 구독이라는 도메인은 더 큰 비즈니스 도메인의 서브도메인이라고 볼 수 있다.`),Ee=u(),ve=e("br"),_e=e("br"),be=u(),h=e("h2"),g=e("a"),Ga=e("span"),Wo=l("유비쿼터스 언어(Ubiquitous Language)"),ye=u(),de=e("hr"),Pe=u(),En=e("p"),zo=l("유비쿼터스 언어는 도메인 전문가와 기술 전문가가 공통으로 사용하는 언어이다."),De=u(),R=e("p"),Zo=l("앞선 "),Na=e("em"),Jo=l("상황 설정"),Vo=l("장에서, 전문가들이 대화에서 사용했던 일부 단어를 "),ja=e("em"),Xo=l("이탤릭체"),Yo=l(` 처리하였다.
이러한 용어들은 다른 회사나 팀에서와는 달리 특정한 의미를 갖는다.
가령 이 팀에서의 `),Qa=e("em"),ho=l("고객"),go=l("은 마케팅 팀에서는 다른 의미를 가질 것이다."),we=u(),vn=e("p"),sc=l(`유비쿼터스 언어는 요구 사항이나 시스템 설계를 논의할 때, 그리고 소스코드 자체에서도 사용되어야 한다.
또한 발전해야 하기 때문에, 언어를 주기적으로 평가하고 업데이트하는 데 시간을 할애해야 한다.`),$e=u(),_n=e("p"),nc=l("물론 신경을 많이 써야 하는 만큼의 이점이 있다. 다음과 같다."),Ae=u(),ss=e("h3"),ns=e("a"),Fa=e("span"),ac=l("유비쿼터스 언어의 이점"),Ce=u(),O=e("p"),tc=l(`IT 프로젝트가 실패하는 주요 이유 중 하나는 요구 사항이 번역 과정에서 누락되기 때문이다.
이를테면 비즈니스 담당자가 고객당 여러 계정을 사용할 수 있게끔 요구했다고 해보자.
하지만 시스템에는 고객 엔티티가 존재하지 않는다. 과거에 고객당 계정 하나를 사용할 것이라고 가정하고 설계된 시스템이기 때문이다.
그렇다면 이 변경 사항은 사소한 변경 사항이 아니라, 몇 분기에 걸쳐 진행될 수도 있는 중대한 프로젝트가 된다.
또한, 설명에서 `),Ka=e("em"),ec=l("유저"),pc=l("라는 단어가 아니라 "),Wa=e("em"),lc=l("사용자"),oc=l(`라는 단어를 사용하고 있다.
이는 사소한 차이처럼 보이지만, 엔지니어가 비즈니스적 관점에서 생각하지 않고 유비쿼터스 언어를 사용하지 않았다는 점이 이러한 불변성을 놓친 이유일 수 있다.`),Me=u(),bn=e("p"),cc=l("앞서 유비쿼터스 언어는 소스코드 자체에도 적용되어야 한다고 언급하였다. 우리가 작성하였던 코드를 살펴보자."),Re=u(),Fs(as.$$.fragment),Te=u(),ts=e("p"),rc=l(`이렇게 코드에 유비쿼터스 언어가 잘 적용되어 있다.
도메인 전문가가 `),za=e("em"),uc=l("구독"),ic=l("에 관련된 이야기를 꺼낼 때마다, 시스템 표현을 찾기 위해 애쓸 필요가 없어진다."),Ie=u(),T=e("p"),kc=l("코드에서 "),Za=e("code"),fc=l("UserType"),mc=l("이란 것도 정의했는데, 도메인 전문가와의 대화에서는 "),Ja=e("em"),Ec=l("사용자"),vc=l(`라는 단어를 사용하지 않았다.
따라서 이 단어를 유비쿼터스 언어 단어 사전에 추가할지 논의하여, `),Va=e("em"),_c=l("사용자"),bc=l("라는 단어를 사용할 때 모두가 같은 것에 대해 이야기하고 있는지 확인할 수 있는 좋은 기회가 될 것이다."),Se=u(),xe=e("br"),Ue=u(),yn=e("p"),yc=l("다음 부분 코드는 이렇다."),Oe=u(),Fs(es.$$.fragment),Le=u(),dn=e("p"),dc=l("일단 이런 코드는 흔히 볼 수 있는 코드이다 보니, 처음에 보면 별 문제 없어 보인다."),He=u(),b=e("p"),Pc=l("드디어 "),Xa=e("em"),Dc=l("사용자"),wc=l(`라는 단어를 정의하기로 도메인 전문가와 협의했다.
이제 `),Ya=e("em"),$c=l("사용자"),Ac=l(`는 상태에 관계 없이 앱을 사용하는(혹은 사용했던) 사람을 나타낸다.
그들의 가능한 상태는 `),ha=e("em"),Cc=l("lead"),Mc=l(", "),ga=e("em"),Rc=l("lost lead"),Tc=l(", "),st=e("em"),Ic=l("customer"),Sc=l(", "),nt=e("em"),xc=l("churned"),Uc=l("가 있고, 미래에 상태가 추가될 수도 있다."),qe=u(),ps=e("p"),Oc=l("이러한 정의를 감안할 때, "),at=e("code"),Lc=l("AddUser"),Hc=l(` 함수는 별로 좋은 생각이 아닌 것 같다.
우리 도메인에는 사용자 추가라는 개념이 없으며, 도메인 전문가에게 이런 문장을 사용하면 혼란을 줄 것이다.`),Be=u(),Pn=e("p"),qc=l(`일단 도메인의 시스템 표현과 실세계 표현 사이의 매핑으로 끝맺음을 짓지만,
강력한 유비쿼터스 언어를 만들기 위해 투자한 시간으로부터 이득을 얻지 못했다.`),Ge=u(),Ne=e("br"),je=u(),L=e("p"),Bc=l("다시 되돌아가서, 우리는 새로 앱을 사용하는 사람을 "),tt=e("em"),Gc=l("리드"),Nc=l("라고 부르고, 그들이 구독을 하면 "),et=e("em"),jc=l("고객"),Qc=l(`으로 전환하기로 하였다.
이에 기반하여 코드를 다음과 같이 일부 수정할 수 있다.`),Qe=u(),Fs(ls.$$.fragment),Fe=u(),P=e("p"),Fc=l(`이 코드는 더 합리적이며, 실제 세계를 더 잘 반영한다.
이제 전문가와 시스템에 대해 이야기할 때, `),pt=e("em"),Kc=l("리드"),Wc=l("와 "),lt=e("em"),zc=l("고객"),Zc=l(", "),ot=e("em"),Jc=l("구독"),Vc=l(", 그리고 "),ct=e("em"),Xc=l("리드"),Yc=l(`의 전환이라는 단어를 사용할 수 있으며,
이는 모두 도메인에 대한 유비쿼터스 언어이다.`),Ke=u(),os=e("h3"),cs=e("a"),rt=e("span"),hc=l("강력한 유비쿼터스 언어를 만드는 방법"),We=u(),Dn=e("p"),gc=l(`강력한 유비쿼터스 언어를 만드는 지름길은 없고,
도메인 전문가와의 충분한 대화를 거치는 것이 모든 중요한 언어를 포착하는 최선의 방법이다.
한 가지 좋은 방법은 회의에 참가하여 회의록을 작성하는 것이다.
회의 중 이해하지 못한 언어를 적어두고 회의가 끝나면 도메인 전문가에게 물어보는 것이다.
이를 유비쿼터스 언어 단어 사전에 추가하고, 다른 동료들과 공유할 수 있다.`),ze=u(),rs=e("h3"),us=e("a"),ut=e("span"),sr=l("유비쿼터스 언어를 적용할 때의 주의점"),Ze=u(),I=e("p"),nr=l(`여러 프로젝트, 팀, 또는 회사 전체에 유비쿼터스 언어를 적용하고 싶을 수도 있지만, 이는 좋은 선택이 아니다.
Evans에 따르면 유비쿼터스 언어는 하나의 `),it=e("strong"),ar=l("제한된 컨텍스트"),tr=l(`에서만 적용되어야 한다. 유비쿼터스 언어는 엄격할 때 가장 잘 작동하기 때문이다.
`),kt=e("em"),er=l("고객(customer)"),pr=l("이나 "),ft=e("em"),lr=l("유저(user)"),or=l("같은 특정한 단어를 다른 모든 분야에 적용하려 한다면, 해당 단어는 엄격함을 잃고 혼란을 야기할 것이다."),Je=u(),Ve=e("br"),Xe=e("br"),Ye=u(),is=e("h2"),ks=e("a"),mt=e("span"),cr=l("제한된 컨텍스트"),he=u(),ge=e("hr"),sp=u(),fs=e("p"),rr=l(`구독 시스템에 대한 개요를 시작하였고, 시스템을 나타내는 유비쿼터스 언어에 대해서도 알아보았다.
그러던 와중, 만약 사업의 다른 분야에서 온 누군가가 `),Et=e("em"),ur=l("고객(customer)"),ir=l(`에 대해 논의하기 위에 온다면 어떻게 해야 할까?
우리가 가장 먼저 할 일은 제한된 컨텍스트 내에서 고객의 의미가 다를 수 있기 때문에, 먼저 이를 정의하는 것이다.`),np=u(),wn=e("p"),kr=l(`제한된 컨텍스트는 큰 모델을 작은 조각으로 나누어, 이해하기 쉽게끔 모델의 구조를 명시하는 것이다.
한 컨텍스트에서 단어를 정의하면, 다른 컨텍스트에서 동일한 의미일 필요는 없다.
가령 우리의 구독 시스템을 다이어그램으로 나타내면 다음과 같을 것이다.`),ap=u(),$n=e("p"),An=e("img"),tp=u(),Cn=e("p"),fr=l("하지만 마케팅 팀과 이야기하고 그들의 컨텍스트를 이해하고 나면 다음과 같은 관계를 정의할 수 있다."),ep=u(),Mn=e("p"),Rn=e("img"),pp=u(),H=e("p"),mr=l("서로 다른 제한된 컨텍스트 사이에서 "),vt=e("em"),Er=l("캠페인(campaign)"),vr=l("과 "),_t=e("em"),_r=l("고객(customer)"),br=l(` 사이에 연결된 선은 동일한 용어를 사용하지만 모델이 다르며, 그들 사이에 일부 매핑이 가능함을 나타낸다.
이러한 내용은 다음 단락에서 보다 자세히 설명한다`),lp=u(),q=e("p"),yr=l("두 컨텍스트에서 모두 "),bt=e("em"),dr=l("캠페인(campaign)"),Pr=l("과 "),yt=e("em"),Dr=l("고객(customer)"),wr=l(`을 중요하게 생각하지만, 서로 다른 컨텍스트이기 때문에 각 컨텍스트에서 이를 모델링하고 이야기하는 방법은 같을 필요가 없다.
이 예제는 간단한 예제이지만 시스템이 진화하고 복잡해질 수록 경계를 정의하는 것이 점점 유의미해질 것이다.`),op=u(),Tn=e("p"),$r=l(`위 그림처럼 제한된 컨텍스트 사이에서 통신해야 하는 경우가 많기 때문에, 모델들의 무결성을 유지해야 한다.
이에는 몇 가지 패턴이 있는데, 세 가지 주요 패턴은 다음과 같다.`),cp=u(),In=e("blockquote"),K=e("ul"),dt=e("li"),Ar=l("Open Host Service"),Cr=u(),Pt=e("li"),Mr=l("Published Language"),Rr=u(),Dt=e("li"),Tr=l("Anti-Corruption Layer"),rp=u(),ms=e("h3"),Es=e("a"),wt=e("span"),Ir=l("Open Host Service"),up=u(),Sn=e("p"),Sr=l(`Open Host Service는 다른 시스템(또는 서브시스템)에서 우리의 시스템에 접근할 수 있도록 하는 서비스이다.
팀의 제약 조건과 기술적인 요소에 따라 사정이 다를 수 있기 때문에, Evans는 이 부분의 구현에 대해서 설명을 모호하게 두었다.
일반적으로 Open Host Service는 RPC로 구현되며, RPC는 RESTFul API, gRPC 등으로 구현될 수 있다.`),ip=u(),xn=e("p"),xr=l("Open Host Service를 시각적으로 나타내면 다음과 같다."),kp=u(),Un=e("p"),On=e("img"),fp=u(),Ln=e("p"),Ur=l(`그림에서 파란 직사각형은 제한된 컨텍스트의 노출된 부분을 의미한다.
우리의 과금 및 구독 모델을 예로 들면, 마케팅 팀이 우리 컨텍스트 내에서 다양한 정보를 얻을 수 있도록 엔드포인트를 노출할 수 있다. 이를테면 다음과 같다.`),mp=u(),Fs(vs.$$.fragment),Ep=u(),_s=e("p"),Or=l("위 코드는 "),$t=e("code"),Lr=l("/user/{userID}/payment/active"),Hr=l(`에서 사용 가능한 HTTP 엔드포인트를 노출하는 코드이다.
이를 통해 다른 팀에서 우리의 시스템에 접근하여 사용자가 활성 구독을 가지고 있는지 확인할 수 있다.`),vp=u(),Hn=e("p"),qr=l("원본 코드는 gorilla mux를 통해 작성되어 있지만, 여기서는 fiber를 사용하여 작성하였다."),_p=u(),bp=e("br"),yp=u(),bs=e("h3"),ys=e("a"),At=e("span"),Br=l("Published Language"),dp=u(),qn=e("p"),Gr=l(`유비쿼터스 언어가 팀의 내부에서 사용하는 언어라면, Published Language는 그 반대 개념이다.
만약 우리 팀이 Open Host Service를 통해 다른 팀에 시스템 일부를 노출하기로 결정하였다면,
서로 다른 제한된 컨텍스트에서 어떤 것을 노출시킬 것인지에 대한 정의를 명확히 해야 한다.`),Pp=u(),ds=e("p"),Nr=l("앞서 언급한 HTTP 서버와 같이 "),Ct=e("code"),jr=l("GET /{id}/user"),Qr=l(` 엔드포인트를 노출시킨다고 한다면,
다른 팀이 입/출력 스키마에 대해 알 수 있도록 언어를 개시해야 한다.
가장 인기있는 방식은 OpenAPI 또는 gRPC를 사용하는 것이다.`),Dp=u(),Ps=e("h4"),Ds=e("a"),Mt=e("span"),Fr=l("OpenAPI"),wp=u(),Bn=e("p"),Kr=l("일반적으로 Swagger와 같이 사용하는 그 OpenAPI이다. 대충 이렇게 생겼다."),$p=u(),Fs(ws.$$.fragment),Ap=u(),B=e("p"),Wr=l(`자동으로 직관적인 UI를 만들어준다는 장점이 있다.
특히 golang의 경우 `),Rt=e("code"),zr=l("oapi-codegen"),Zr=l("이라는 라이브러리가 좋다고 한다. 해당 라이브러리에 대한 Github 링크는 "),Ys=e("a"),Jr=l("여기"),Vr=l("를 참조하자."),Cp=u(),$s=e("p"),Xr=l("자동으로 OpenAPI 파일을 생성해볼 것이다. 먼저 "),Tt=e("code"),Yr=l("oapi-codegen"),hr=l("을 설치해야 한다."),Mp=u(),hs=e("pre"),Rp=u(),Gn=e("p"),gr=l(`그리고 다음과 같은 설정 파일을 작성한다.
생성된 코드가 속할 패키지와, 생성된 코드가 저장될 파일을 명시해준다.`),Tp=u(),gs=e("pre"),Ip=u(),Nn=e("p"),su=l("이제 명령어를 쳐보자!"),Sp=u(),sn=e("pre"),xp=u(),As=e("p"),nu=l("이렇게 하면 "),It=e("code"),au=l("openapi.gen.go"),tu=l(` 파일이 생기면서, 구현할 수 있는 서버용 인터페이스가 생긴다.
API 문서를 업데이트할 때마다 이 명령어를 재실행하면 새로운 서버 정의를 생성할 수 있다.`),Up=u(),G=e("p"),eu=l("클라이언트 코드를 생성하는 것도 간단하다. "),St=e("code"),pu=l("config.yml"),lu=l(" 파일 맨 끝에 "),xt=e("code"),ou=l("client: true"),cu=l("만 추가하고 이전 명령어를 재실행하면 된다. 여기서는 생략해야지~"),Op=u(),jn=e("p"),ru=l(`OpenAPI 사양을 업데이트하고 클라이언트를 업데이트하고자 하는 경우, 이전에 쳤던 명령어를 다시 실행시키기만 하면 된다.
이러한 작업을 Continuous Integration 파이프라인에 추가하면, 소비자 팀에서 필요할 때마다 최신 버전을 얻을 수 있을 것이다.`),Lp=u(),Qn=e("p"),uu=l(`팀이 REST API를 사용하는 데 익숙하다면 OpenAPI는 꽤 괜찮은 Published Language이다.
OpenAPI는 문서 우선이므로 외부 문서가 항상 최신으로 유지되는 것을 보자아며, 이는 굉장한 이점이다.
또한 코드가 자동으로 생성되므로, 별도의 노력 없이 다양한 유즈 케이스를 지원할 수 있다.`),Hp=u(),Fn=e("p"),iu=l(`하지만 OpenAPI보다 성능이 더 좋은 대안들이 많다.
그리고 OpenAPI는 기본적으로 주요 변경 사항에 대한 보호를 제공하지 않는다.
이를테면 문서에서 어떤 필드를 제거했지만 다른 팀이 이에 의존하는 경우, 그들의 워크플로우가 깨질 수 있다.`),qp=u(),Kn=e("p"),ku=l("이러한 문제를 해결하고 추가적인 기능을 제공하는 gRPC를 살펴보록 하자."),Bp=u(),Gp=e("br"),Np=e("br"),jp=u(),Cs=e("h4"),Ms=e("a"),Ut=e("span"),fu=l("gRPC"),Qp=u(),Wn=e("p"),mu=l(`gRPC는 대규모 원격 통신을 위해 Google에서 개발된 통신 프레이뭐크로,
HTTP/2를 기반으로 하며 로드 밸런싱, 추적, 인증, 양방향 스트리밍, 헬스 체크 등의 기능을 제공한다.`),Fp=u(),zn=e("p"),Eu=l(`gRPC는 전송하는 페이로드를 바이너리로 직렬화하기 때문에 더 빠르고 효율적이다.
또한 gRPC에서 클라이언트는 원격 서버의 코드를 마치 로컬 코드를 호출하듯 사용할 수 있다.
그리고, gRPC는 다양한 언어와 OpenAPI같은 다양한 프레임워크를 지원한다.`),Kp=u(),Rs=e("p"),vu=l(`원격 서버의 메소드를 호출하기 위해서는 먼저 Protobuf 파일을 작성해야 한다.
Protobuf 파일은 주로 `),Ot=e("code"),_u=l(".proto"),bu=l(` 확장자를 가지며, 언어에 구애받지 않는다.
Protobuf 파일은 다음과 같은 형태를 가진다.`),Wp=u(),Fs(Ts.$$.fragment),zp=u(),Zn=e("p"),yu=l("이를 통해 서비스, 그리고 요청 및 응답 객체를 정의하고, 클라이언트 코드와 서버 코드를 생성할 수 있다."),Zp=u(),Jn=e("p"),du=l(`gRPC는 REST-API 기반인 OpenAPI에 비해 시작하기가 조금 더 어렵다.
또한 코드를 생성하는데 필요한 일부 도구를 설치 및 사용하기가 다소 어려울 수 있다.`),Jp=u(),N=e("p"),Pu=l("먼저, "),Lt=e("code"),Du=l("protobuf"),wu=l(" 컴파일러를 설치하고, "),Ht=e("code"),$u=l("protoc"),Au=l(" 명령어를 활성화하기 위해 path를 업데이트해줘야 한다."),Vp=u(),nn=e("pre"),Xp=u(),Vn=e("p"),Cu=l("이후, 프로젝트 폴더에서 다음과 같이 명령어를 입력한다."),Yp=u(),an=e("pre"),hp=u(),j=e("p"),Mu=l("이렇게 하면 "),qt=e("code"),Ru=l("userservice.pb.go"),Tu=l("와 "),Bt=e("code"),Iu=l("userservice_grpc.pb.go"),Su=l(" 파일이 생성되며, 해당 파일을 통해 서버와 클라이언트 코드를 작성할 수 있다."),gp=u(),Xn=e("p"),xu=l("gRPC에 관련한 내용은 아마도 다른 포스트에서 다룰 예정이다."),sl=u(),nl=e("br"),al=u(),Is=e("h3"),Ss=e("a"),Gt=e("span"),Uu=l("Anti-Corruption Layer"),tl=u(),xs=e("p"),Ou=l(`Anti-Corruption Layer는 Adapter Layer라고도 하며, 다른 시스템의 모델을 변환하기 위해 사용된다.
Open Host Service와 잘 어울리는 상호보완적인 패턴이라고도 할 수 있다.
가령 마케팅 팀의 published language에서는 `),Nt=e("em"),Lu=l("캠페인(campaign)"),Hu=l("을 다음과 같이 정의할 수 있다."),el=u(),tn=e("pre"),pl=u(),Us=e("p"),qu=l("하지만 우리 팀에서의 "),jt=e("em"),Bu=l("캠페인"),Gu=l("은 내부적으로 이와 같이 정의되어 있다고 해보자."),ll=u(),en=e("pre"),ol=u(),Os=e("p"),Nu=l(`두 모델은 거의 동일한 정보를 가지고 있지만, 데이터 필드의 이름이나 포맷이 약간 다르다.
우리의 `),Qt=e("em"),ju=l("캠페인"),Qu=l(` 모델을 마케팅 팀과 완전히 동일하게 바꾸면 해결되지만 이는 DDD의 원칙에 위배된다.
이러한 경우 Anti-Corruption Layer를 사용할 수 있다.`),cl=u(),Fs(Ls.$$.fragment),rl=u(),Q=e("p"),Fu=l("이와 같이 "),Ft=e("code"),Ku=l("MarketingCampaignModel"),Wu=l("을 "),Kt=e("code"),zu=l("Campaign"),Zu=l(`으로 변환하는 과정에서 데이터가 변환 가능한지 검증하는 로직이 포함되어 있다.
복잡한 시스템에서는 Anti-Corruption Layer의 역할이 더 커질 수 있고, 이전 시스템에서 현 시스템으로 마이그레이션하는 과정에서도 사용될 수 있다.
하지만 추가적인 오버헤드나 실패가 발생할 수 있는 지점이 생겨난다는 점을 유의해야 한다.`),ul=u(),Yn=e("p"),Ju=l("모든 DDD 패턴 중, Anti-Corruption Layer는 DDD 외부에서 가장 많이 사용되는 패턴이다. 시스템을 분리(디커플링)된 상태로 유지할 때 효과적이다."),il=u(),kl=e("br"),fl=e("br"),ml=u(),Hs=e("h2"),qs=e("a"),Wt=e("span"),Vu=l("References"),El=u(),vl=e("hr"),_l=u(),hn=e("center"),W=e("p"),pn=e("a"),gn=e("img"),Xu=u(),Yu=e("br"),hu=u(),ln=e("a"),gu=l("Matthew Boyle, Domain-Driven Design with Golang』, O’Reilly Media, Inc."),this.h()},l(s){f=p(s,"H2",{id:!0});var t=r(f);v=p(t,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var zt=r(v);m=p(zt,"SPAN",{class:!0}),r(m).forEach(n),zt.forEach(n),E=o(t,"상황 설정"),t.forEach(n),Yt=i(s),ht=p(s,"HR",{}),gt=i(s),Z=p(s,"P",{});var on=r(Z);xl=o(on,"회사에서 새로 생긴 개발팀인 "),ka=p(on,"EM",{});var Zt=r(ka);Ul=o(Zt,"과금 및 구독"),Zt.forEach(n),Ol=o(on,` 팀의의 리드 개발자가 되었다고 가정해보자.
아무래도 새로운 분야인지라 이 분야의 전문가들과 기본적인 도메인과 작동 방식에 대해 부지런히 논의해야 할 것이다.
그들의 반응은 다음과 같다.`),on.forEach(n),se=i(s),cn=p(s,"BLOCKQUOTE",{});var Jt=r(cn);w=p(Jt,"UL",{});var $=r(w);A=p($,"LI",{});var S=r(A);fa=p(S,"EM",{});var Vt=r(fa);Ll=o(Vt,"리드(lead)"),Vt.forEach(n),Hl=o(S,"가 처음으로 앱을 사용하는 경우, 그들은 세 가지 구독 계획을 선택해야 한다. 각각 "),ma=p(S,"EM",{});var Xt=r(ma);ql=o(Xt,"basic"),Xt.forEach(n),Bl=o(S,", "),Ea=p(S,"EM",{});var _i=r(Ea);Gl=o(_i,"premium"),_i.forEach(n),Nl=o(S,", "),va=p(S,"EM",{});var bi=r(va);jl=o(bi,"exclusive"),bi.forEach(n),Ql=o(S,"이다."),S.forEach(n),Fl=i($),rn=p($,"LI",{});var si=r(rn);_a=p(si,"EM",{});var yi=r(_a);Kl=o(yi,"구독 계획(subscription plan)"),yi.forEach(n),Wl=o(si,"에 따라 앱 내에서 접근할 수 있는 기능이 달라지며, 이러한 사항은 변경될 수 있다."),si.forEach(n),zl=i($),_=p($,"LI",{});var d=r(_);ba=p(d,"EM",{});var di=r(ba);Zl=o(di,"구독 계획"),di.forEach(n),Jl=o(d,"이 생성되면 "),ya=p(d,"EM",{});var Pi=r(ya);Vl=o(Pi,"리드"),Pi.forEach(n),Xl=o(d,"가 "),da=p(d,"EM",{});var Di=r(da);Yl=o(Di,"고객(customer)"),Di.forEach(n),hl=o(d,"으로 전환되며, "),Pa=p(d,"EM",{});var wi=r(Pa);gl=o(wi,"고객"),wi.forEach(n),so=o(d,"은 "),Da=p(d,"EM",{});var $i=r(Da);no=o($i,"이탈"),$i.forEach(n),ao=o(d,"할 때까지 고객으로 간주한다. 이 경우, "),wa=p(d,"EM",{});var Ai=r(wa);to=o(Ai,"고객"),Ai.forEach(n),eo=o(d,"은 다시 "),$a=p(d,"EM",{});var Ci=r($a);po=o(Ci,"리드"),Ci.forEach(n),lo=o(d,"가 된다."),d.forEach(n),oo=i($),x=p($,"LI",{});var Bs=r(x);co=o(Bs,"6개월이 지나면 이들을 "),Aa=p(Bs,"EM",{});var Mi=r(Aa);ro=o(Mi,"잃어버린 리드(lost lead)"),Mi.forEach(n),uo=o(Bs,"로 간주하며, "),Ca=p(Bs,"EM",{});var Ri=r(Ca);io=o(Ri,"할인 코드(discount code)"),Ri.forEach(n),ko=o(Bs,"를 포함할 수 있는 "),Ma=p(Bs,"EM",{});var Ti=r(Ma);fo=o(Ti,"재참여 캠페인(re-engagement campaign)"),Ti.forEach(n),mo=o(Bs,"의 대상이 될 수 있다."),Bs.forEach(n),Eo=i($),C=p($,"LI",{});var z=r(C);Ra=p(z,"EM",{});var Ii=r(Ra);vo=o(Ii,"구독 계획"),Ii.forEach(n),_o=o(z,"이 생성되면 "),Ta=p(z,"EM",{});var Si=r(Ta);bo=o(Si,"자동 이체(direct debit)"),Si.forEach(n),yo=o(z,"를 통해 "),Ia=p(z,"EM",{});var xi=r(Ia);Po=o(xi,"고객"),xi.forEach(n),Do=o(z,"으로부터 자금을 확보하기 위해 "),Sa=p(z,"EM",{});var Ui=r(Sa);wo=o(Ui,"반복 과금(recurring payment)"),Ui.forEach(n),$o=o(z,"를 설정한다."),z.forEach(n),$.forEach(n),Jt.forEach(n),ne=i(s),un=p(s,"P",{});var Oi=r(un);Ao=o(Oi,"자, 이제 팀으로 되돌아가서, 새 애플리케이션의 시작점으로 다음과 같은 인터페이스를 정의해보자."),Oi.forEach(n),ae=i(s),Ks(J.$$.fragment,s),te=i(s),kn=p(s,"P",{});var Li=r(kn);Co=o(Li,"이와 같이 인터페이스를 정의하였다. 차후 DDD에 대해 더 자세히 알아보면서 이 코드를 다시 확인할 것이다."),Li.forEach(n),ee=i(s),pe=p(s,"BR",{}),le=p(s,"BR",{}),oe=i(s),V=p(s,"H2",{id:!0});var ni=r(V);X=p(ni,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Hi=r(X);xa=p(Hi,"SPAN",{class:!0}),r(xa).forEach(n),Hi.forEach(n),Mo=o(ni,"도메인(Domain)과 서브도메인(Sub-Domain)"),ni.forEach(n),ce=i(s),re=p(s,"HR",{}),ue=i(s),M=p(s,"P",{});var Gs=r(M);Ro=o(Gs,"앞선 "),Ua=p(Gs,"EM",{});var qi=r(Ua);To=o(qi,"상황 설정"),qi.forEach(n),Io=o(Gs," 장에서 결제 및 구독 시스템에 대한 간략한 개요를 살펴보았다. 이러한 것들이 바로 "),Oa=p(Gs,"STRONG",{});var Bi=r(Oa);So=o(Bi,"도메인"),Bi.forEach(n),xo=o(Gs,`이다.
Eric Evans에 따르면, 도메인은 `),La=p(Gs,"EM",{});var Gi=r(La);Uo=o(Gi,"“지식, 영향, 또는 활동의 영역”"),Gi.forEach(n),Oo=o(Gs,"이다."),Gs.forEach(n),ie=i(s),fn=p(s,"P",{});var Ni=r(fn);Lo=o(Ni,`도메인은 DDD의 중심 개체로, 모든 언어와 시스템 전반에서 우리가 모델링해야 할 대상이다.
도메인을 떠올리는 또 다른 방법은 비즈니스 세계에서 바라보는 것이다.
Domain Driven Design이라는 용어를 Business Problem-Driven Design으로 읽는다고 생각해보면 된다.`),Ni.forEach(n),ke=i(s),U=p(s,"P",{});var sa=r(U);Ho=o(sa,`도메인을 정의하는 것은 어려운 문제이며, 항상 이 예제에서처럼 명확한 것은 아니다.
이 예제에서는 `),Ha=p(sa,"STRONG",{});var ji=r(Ha);qo=o(ji,"결제"),ji.forEach(n),Bo=o(sa,"와 "),qa=p(sa,"STRONG",{});var Qi=r(qa);Go=o(Qi,"구독"),Qi.forEach(n),No=o(sa,`이라는, 확실히 구분되는 두 개의 도메인이 있다.
일부 팀에서는 이 두가지를 단일 도메인으로 간주할 수도 있지만, 크게 상관은 없다. DDD는 과학이 아니다.`),sa.forEach(n),fe=i(s),mn=p(s,"P",{});var Fi=r(mn);jo=o(Fi,`대규모 회사에서는 도메인을 중심으로 팀을 구성하는 경우가 많다.
새로운 도메인이 발견되고 팀이 성장함에 따라, 새로운 도메인에 기반한 팀이 생겨날 수도 있을 것이다.`),Fi.forEach(n),me=i(s),Y=p(s,"P",{});var yl=r(Y);Qo=o(yl,"도메인과 "),Ba=p(yl,"STRONG",{});var Ki=r(Ba);Fo=o(Ki,"서브도메인"),Ki.forEach(n),Ko=o(yl,`은 거의 같은 의미라고 볼 수 있지만,
상위 도메인의 자식 도메인임을 나타내고자 할 때 주로 서브도메인을 사용한다.
이 예제에서의 결제와 구독이라는 도메인은 더 큰 비즈니스 도메인의 서브도메인이라고 볼 수 있다.`),yl.forEach(n),Ee=i(s),ve=p(s,"BR",{}),_e=p(s,"BR",{}),be=i(s),h=p(s,"H2",{id:!0});var ai=r(h);g=p(ai,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Wi=r(g);Ga=p(Wi,"SPAN",{class:!0}),r(Ga).forEach(n),Wi.forEach(n),Wo=o(ai,"유비쿼터스 언어(Ubiquitous Language)"),ai.forEach(n),ye=i(s),de=p(s,"HR",{}),Pe=i(s),En=p(s,"P",{});var zi=r(En);zo=o(zi,"유비쿼터스 언어는 도메인 전문가와 기술 전문가가 공통으로 사용하는 언어이다."),zi.forEach(n),De=i(s),R=p(s,"P",{});var Ns=r(R);Zo=o(Ns,"앞선 "),Na=p(Ns,"EM",{});var Zi=r(Na);Jo=o(Zi,"상황 설정"),Zi.forEach(n),Vo=o(Ns,"장에서, 전문가들이 대화에서 사용했던 일부 단어를 "),ja=p(Ns,"EM",{});var Ji=r(ja);Xo=o(Ji,"이탤릭체"),Ji.forEach(n),Yo=o(Ns,` 처리하였다.
이러한 용어들은 다른 회사나 팀에서와는 달리 특정한 의미를 갖는다.
가령 이 팀에서의 `),Qa=p(Ns,"EM",{});var Vi=r(Qa);ho=o(Vi,"고객"),Vi.forEach(n),go=o(Ns,"은 마케팅 팀에서는 다른 의미를 가질 것이다."),Ns.forEach(n),we=i(s),vn=p(s,"P",{});var Xi=r(vn);sc=o(Xi,`유비쿼터스 언어는 요구 사항이나 시스템 설계를 논의할 때, 그리고 소스코드 자체에서도 사용되어야 한다.
또한 발전해야 하기 때문에, 언어를 주기적으로 평가하고 업데이트하는 데 시간을 할애해야 한다.`),Xi.forEach(n),$e=i(s),_n=p(s,"P",{});var Yi=r(_n);nc=o(Yi,"물론 신경을 많이 써야 하는 만큼의 이점이 있다. 다음과 같다."),Yi.forEach(n),Ae=i(s),ss=p(s,"H3",{id:!0});var ti=r(ss);ns=p(ti,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var hi=r(ns);Fa=p(hi,"SPAN",{class:!0}),r(Fa).forEach(n),hi.forEach(n),ac=o(ti,"유비쿼터스 언어의 이점"),ti.forEach(n),Ce=i(s),O=p(s,"P",{});var na=r(O);tc=o(na,`IT 프로젝트가 실패하는 주요 이유 중 하나는 요구 사항이 번역 과정에서 누락되기 때문이다.
이를테면 비즈니스 담당자가 고객당 여러 계정을 사용할 수 있게끔 요구했다고 해보자.
하지만 시스템에는 고객 엔티티가 존재하지 않는다. 과거에 고객당 계정 하나를 사용할 것이라고 가정하고 설계된 시스템이기 때문이다.
그렇다면 이 변경 사항은 사소한 변경 사항이 아니라, 몇 분기에 걸쳐 진행될 수도 있는 중대한 프로젝트가 된다.
또한, 설명에서 `),Ka=p(na,"EM",{});var gi=r(Ka);ec=o(gi,"유저"),gi.forEach(n),pc=o(na,"라는 단어가 아니라 "),Wa=p(na,"EM",{});var sk=r(Wa);lc=o(sk,"사용자"),sk.forEach(n),oc=o(na,`라는 단어를 사용하고 있다.
이는 사소한 차이처럼 보이지만, 엔지니어가 비즈니스적 관점에서 생각하지 않고 유비쿼터스 언어를 사용하지 않았다는 점이 이러한 불변성을 놓친 이유일 수 있다.`),na.forEach(n),Me=i(s),bn=p(s,"P",{});var nk=r(bn);cc=o(nk,"앞서 유비쿼터스 언어는 소스코드 자체에도 적용되어야 한다고 언급하였다. 우리가 작성하였던 코드를 살펴보자."),nk.forEach(n),Re=i(s),Ks(as.$$.fragment,s),Te=i(s),ts=p(s,"P",{});var dl=r(ts);rc=o(dl,`이렇게 코드에 유비쿼터스 언어가 잘 적용되어 있다.
도메인 전문가가 `),za=p(dl,"EM",{});var ak=r(za);uc=o(ak,"구독"),ak.forEach(n),ic=o(dl,"에 관련된 이야기를 꺼낼 때마다, 시스템 표현을 찾기 위해 애쓸 필요가 없어진다."),dl.forEach(n),Ie=i(s),T=p(s,"P",{});var js=r(T);kc=o(js,"코드에서 "),Za=p(js,"CODE",{});var tk=r(Za);fc=o(tk,"UserType"),tk.forEach(n),mc=o(js,"이란 것도 정의했는데, 도메인 전문가와의 대화에서는 "),Ja=p(js,"EM",{});var ek=r(Ja);Ec=o(ek,"사용자"),ek.forEach(n),vc=o(js,`라는 단어를 사용하지 않았다.
따라서 이 단어를 유비쿼터스 언어 단어 사전에 추가할지 논의하여, `),Va=p(js,"EM",{});var pk=r(Va);_c=o(pk,"사용자"),pk.forEach(n),bc=o(js,"라는 단어를 사용할 때 모두가 같은 것에 대해 이야기하고 있는지 확인할 수 있는 좋은 기회가 될 것이다."),js.forEach(n),Se=i(s),xe=p(s,"BR",{}),Ue=i(s),yn=p(s,"P",{});var lk=r(yn);yc=o(lk,"다음 부분 코드는 이렇다."),lk.forEach(n),Oe=i(s),Ks(es.$$.fragment,s),Le=i(s),dn=p(s,"P",{});var ok=r(dn);dc=o(ok,"일단 이런 코드는 흔히 볼 수 있는 코드이다 보니, 처음에 보면 별 문제 없어 보인다."),ok.forEach(n),He=i(s),b=p(s,"P",{});var D=r(b);Pc=o(D,"드디어 "),Xa=p(D,"EM",{});var ck=r(Xa);Dc=o(ck,"사용자"),ck.forEach(n),wc=o(D,`라는 단어를 정의하기로 도메인 전문가와 협의했다.
이제 `),Ya=p(D,"EM",{});var rk=r(Ya);$c=o(rk,"사용자"),rk.forEach(n),Ac=o(D,`는 상태에 관계 없이 앱을 사용하는(혹은 사용했던) 사람을 나타낸다.
그들의 가능한 상태는 `),ha=p(D,"EM",{});var uk=r(ha);Cc=o(uk,"lead"),uk.forEach(n),Mc=o(D,", "),ga=p(D,"EM",{});var ik=r(ga);Rc=o(ik,"lost lead"),ik.forEach(n),Tc=o(D,", "),st=p(D,"EM",{});var kk=r(st);Ic=o(kk,"customer"),kk.forEach(n),Sc=o(D,", "),nt=p(D,"EM",{});var fk=r(nt);xc=o(fk,"churned"),fk.forEach(n),Uc=o(D,"가 있고, 미래에 상태가 추가될 수도 있다."),D.forEach(n),qe=i(s),ps=p(s,"P",{});var Pl=r(ps);Oc=o(Pl,"이러한 정의를 감안할 때, "),at=p(Pl,"CODE",{});var mk=r(at);Lc=o(mk,"AddUser"),mk.forEach(n),Hc=o(Pl,` 함수는 별로 좋은 생각이 아닌 것 같다.
우리 도메인에는 사용자 추가라는 개념이 없으며, 도메인 전문가에게 이런 문장을 사용하면 혼란을 줄 것이다.`),Pl.forEach(n),Be=i(s),Pn=p(s,"P",{});var Ek=r(Pn);qc=o(Ek,`일단 도메인의 시스템 표현과 실세계 표현 사이의 매핑으로 끝맺음을 짓지만,
강력한 유비쿼터스 언어를 만들기 위해 투자한 시간으로부터 이득을 얻지 못했다.`),Ek.forEach(n),Ge=i(s),Ne=p(s,"BR",{}),je=i(s),L=p(s,"P",{});var aa=r(L);Bc=o(aa,"다시 되돌아가서, 우리는 새로 앱을 사용하는 사람을 "),tt=p(aa,"EM",{});var vk=r(tt);Gc=o(vk,"리드"),vk.forEach(n),Nc=o(aa,"라고 부르고, 그들이 구독을 하면 "),et=p(aa,"EM",{});var _k=r(et);jc=o(_k,"고객"),_k.forEach(n),Qc=o(aa,`으로 전환하기로 하였다.
이에 기반하여 코드를 다음과 같이 일부 수정할 수 있다.`),aa.forEach(n),Qe=i(s),Ks(ls.$$.fragment,s),Fe=i(s),P=p(s,"P",{});var F=r(P);Fc=o(F,`이 코드는 더 합리적이며, 실제 세계를 더 잘 반영한다.
이제 전문가와 시스템에 대해 이야기할 때, `),pt=p(F,"EM",{});var bk=r(pt);Kc=o(bk,"리드"),bk.forEach(n),Wc=o(F,"와 "),lt=p(F,"EM",{});var yk=r(lt);zc=o(yk,"고객"),yk.forEach(n),Zc=o(F,", "),ot=p(F,"EM",{});var dk=r(ot);Jc=o(dk,"구독"),dk.forEach(n),Vc=o(F,", 그리고 "),ct=p(F,"EM",{});var Pk=r(ct);Xc=o(Pk,"리드"),Pk.forEach(n),Yc=o(F,`의 전환이라는 단어를 사용할 수 있으며,
이는 모두 도메인에 대한 유비쿼터스 언어이다.`),F.forEach(n),Ke=i(s),os=p(s,"H3",{id:!0});var ei=r(os);cs=p(ei,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Dk=r(cs);rt=p(Dk,"SPAN",{class:!0}),r(rt).forEach(n),Dk.forEach(n),hc=o(ei,"강력한 유비쿼터스 언어를 만드는 방법"),ei.forEach(n),We=i(s),Dn=p(s,"P",{});var wk=r(Dn);gc=o(wk,`강력한 유비쿼터스 언어를 만드는 지름길은 없고,
도메인 전문가와의 충분한 대화를 거치는 것이 모든 중요한 언어를 포착하는 최선의 방법이다.
한 가지 좋은 방법은 회의에 참가하여 회의록을 작성하는 것이다.
회의 중 이해하지 못한 언어를 적어두고 회의가 끝나면 도메인 전문가에게 물어보는 것이다.
이를 유비쿼터스 언어 단어 사전에 추가하고, 다른 동료들과 공유할 수 있다.`),wk.forEach(n),ze=i(s),rs=p(s,"H3",{id:!0});var pi=r(rs);us=p(pi,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var $k=r(us);ut=p($k,"SPAN",{class:!0}),r(ut).forEach(n),$k.forEach(n),sr=o(pi,"유비쿼터스 언어를 적용할 때의 주의점"),pi.forEach(n),Ze=i(s),I=p(s,"P",{});var Qs=r(I);nr=o(Qs,`여러 프로젝트, 팀, 또는 회사 전체에 유비쿼터스 언어를 적용하고 싶을 수도 있지만, 이는 좋은 선택이 아니다.
Evans에 따르면 유비쿼터스 언어는 하나의 `),it=p(Qs,"STRONG",{});var Ak=r(it);ar=o(Ak,"제한된 컨텍스트"),Ak.forEach(n),tr=o(Qs,`에서만 적용되어야 한다. 유비쿼터스 언어는 엄격할 때 가장 잘 작동하기 때문이다.
`),kt=p(Qs,"EM",{});var Ck=r(kt);er=o(Ck,"고객(customer)"),Ck.forEach(n),pr=o(Qs,"이나 "),ft=p(Qs,"EM",{});var Mk=r(ft);lr=o(Mk,"유저(user)"),Mk.forEach(n),or=o(Qs,"같은 특정한 단어를 다른 모든 분야에 적용하려 한다면, 해당 단어는 엄격함을 잃고 혼란을 야기할 것이다."),Qs.forEach(n),Je=i(s),Ve=p(s,"BR",{}),Xe=p(s,"BR",{}),Ye=i(s),is=p(s,"H2",{id:!0});var li=r(is);ks=p(li,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Rk=r(ks);mt=p(Rk,"SPAN",{class:!0}),r(mt).forEach(n),Rk.forEach(n),cr=o(li,"제한된 컨텍스트"),li.forEach(n),he=i(s),ge=p(s,"HR",{}),sp=i(s),fs=p(s,"P",{});var Dl=r(fs);rr=o(Dl,`구독 시스템에 대한 개요를 시작하였고, 시스템을 나타내는 유비쿼터스 언어에 대해서도 알아보았다.
그러던 와중, 만약 사업의 다른 분야에서 온 누군가가 `),Et=p(Dl,"EM",{});var Tk=r(Et);ur=o(Tk,"고객(customer)"),Tk.forEach(n),ir=o(Dl,`에 대해 논의하기 위에 온다면 어떻게 해야 할까?
우리가 가장 먼저 할 일은 제한된 컨텍스트 내에서 고객의 의미가 다를 수 있기 때문에, 먼저 이를 정의하는 것이다.`),Dl.forEach(n),np=i(s),wn=p(s,"P",{});var Ik=r(wn);kr=o(Ik,`제한된 컨텍스트는 큰 모델을 작은 조각으로 나누어, 이해하기 쉽게끔 모델의 구조를 명시하는 것이다.
한 컨텍스트에서 단어를 정의하면, 다른 컨텍스트에서 동일한 의미일 필요는 없다.
가령 우리의 구독 시스템을 다이어그램으로 나타내면 다음과 같을 것이다.`),Ik.forEach(n),ap=i(s),$n=p(s,"P",{});var Sk=r($n);An=p(Sk,"IMG",{src:!0,alt:!0}),Sk.forEach(n),tp=i(s),Cn=p(s,"P",{});var xk=r(Cn);fr=o(xk,"하지만 마케팅 팀과 이야기하고 그들의 컨텍스트를 이해하고 나면 다음과 같은 관계를 정의할 수 있다."),xk.forEach(n),ep=i(s),Mn=p(s,"P",{});var Uk=r(Mn);Rn=p(Uk,"IMG",{src:!0,alt:!0}),Uk.forEach(n),pp=i(s),H=p(s,"P",{});var ta=r(H);mr=o(ta,"서로 다른 제한된 컨텍스트 사이에서 "),vt=p(ta,"EM",{});var Ok=r(vt);Er=o(Ok,"캠페인(campaign)"),Ok.forEach(n),vr=o(ta,"과 "),_t=p(ta,"EM",{});var Lk=r(_t);_r=o(Lk,"고객(customer)"),Lk.forEach(n),br=o(ta,` 사이에 연결된 선은 동일한 용어를 사용하지만 모델이 다르며, 그들 사이에 일부 매핑이 가능함을 나타낸다.
이러한 내용은 다음 단락에서 보다 자세히 설명한다`),ta.forEach(n),lp=i(s),q=p(s,"P",{});var ea=r(q);yr=o(ea,"두 컨텍스트에서 모두 "),bt=p(ea,"EM",{});var Hk=r(bt);dr=o(Hk,"캠페인(campaign)"),Hk.forEach(n),Pr=o(ea,"과 "),yt=p(ea,"EM",{});var qk=r(yt);Dr=o(qk,"고객(customer)"),qk.forEach(n),wr=o(ea,`을 중요하게 생각하지만, 서로 다른 컨텍스트이기 때문에 각 컨텍스트에서 이를 모델링하고 이야기하는 방법은 같을 필요가 없다.
이 예제는 간단한 예제이지만 시스템이 진화하고 복잡해질 수록 경계를 정의하는 것이 점점 유의미해질 것이다.`),ea.forEach(n),op=i(s),Tn=p(s,"P",{});var Bk=r(Tn);$r=o(Bk,`위 그림처럼 제한된 컨텍스트 사이에서 통신해야 하는 경우가 많기 때문에, 모델들의 무결성을 유지해야 한다.
이에는 몇 가지 패턴이 있는데, 세 가지 주요 패턴은 다음과 같다.`),Bk.forEach(n),cp=i(s),In=p(s,"BLOCKQUOTE",{});var Gk=r(In);K=p(Gk,"UL",{});var pa=r(K);dt=p(pa,"LI",{});var Nk=r(dt);Ar=o(Nk,"Open Host Service"),Nk.forEach(n),Cr=i(pa),Pt=p(pa,"LI",{});var jk=r(Pt);Mr=o(jk,"Published Language"),jk.forEach(n),Rr=i(pa),Dt=p(pa,"LI",{});var Qk=r(Dt);Tr=o(Qk,"Anti-Corruption Layer"),Qk.forEach(n),pa.forEach(n),Gk.forEach(n),rp=i(s),ms=p(s,"H3",{id:!0});var oi=r(ms);Es=p(oi,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Fk=r(Es);wt=p(Fk,"SPAN",{class:!0}),r(wt).forEach(n),Fk.forEach(n),Ir=o(oi,"Open Host Service"),oi.forEach(n),up=i(s),Sn=p(s,"P",{});var Kk=r(Sn);Sr=o(Kk,`Open Host Service는 다른 시스템(또는 서브시스템)에서 우리의 시스템에 접근할 수 있도록 하는 서비스이다.
팀의 제약 조건과 기술적인 요소에 따라 사정이 다를 수 있기 때문에, Evans는 이 부분의 구현에 대해서 설명을 모호하게 두었다.
일반적으로 Open Host Service는 RPC로 구현되며, RPC는 RESTFul API, gRPC 등으로 구현될 수 있다.`),Kk.forEach(n),ip=i(s),xn=p(s,"P",{});var Wk=r(xn);xr=o(Wk,"Open Host Service를 시각적으로 나타내면 다음과 같다."),Wk.forEach(n),kp=i(s),Un=p(s,"P",{});var zk=r(Un);On=p(zk,"IMG",{src:!0,alt:!0}),zk.forEach(n),fp=i(s),Ln=p(s,"P",{});var Zk=r(Ln);Ur=o(Zk,`그림에서 파란 직사각형은 제한된 컨텍스트의 노출된 부분을 의미한다.
우리의 과금 및 구독 모델을 예로 들면, 마케팅 팀이 우리 컨텍스트 내에서 다양한 정보를 얻을 수 있도록 엔드포인트를 노출할 수 있다. 이를테면 다음과 같다.`),Zk.forEach(n),mp=i(s),Ks(vs.$$.fragment,s),Ep=i(s),_s=p(s,"P",{});var wl=r(_s);Or=o(wl,"위 코드는 "),$t=p(wl,"CODE",{});var Jk=r($t);Lr=o(Jk,"/user/{userID}/payment/active"),Jk.forEach(n),Hr=o(wl,`에서 사용 가능한 HTTP 엔드포인트를 노출하는 코드이다.
이를 통해 다른 팀에서 우리의 시스템에 접근하여 사용자가 활성 구독을 가지고 있는지 확인할 수 있다.`),wl.forEach(n),vp=i(s),Hn=p(s,"P",{});var Vk=r(Hn);qr=o(Vk,"원본 코드는 gorilla mux를 통해 작성되어 있지만, 여기서는 fiber를 사용하여 작성하였다."),Vk.forEach(n),_p=i(s),bp=p(s,"BR",{}),yp=i(s),bs=p(s,"H3",{id:!0});var ci=r(bs);ys=p(ci,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Xk=r(ys);At=p(Xk,"SPAN",{class:!0}),r(At).forEach(n),Xk.forEach(n),Br=o(ci,"Published Language"),ci.forEach(n),dp=i(s),qn=p(s,"P",{});var Yk=r(qn);Gr=o(Yk,`유비쿼터스 언어가 팀의 내부에서 사용하는 언어라면, Published Language는 그 반대 개념이다.
만약 우리 팀이 Open Host Service를 통해 다른 팀에 시스템 일부를 노출하기로 결정하였다면,
서로 다른 제한된 컨텍스트에서 어떤 것을 노출시킬 것인지에 대한 정의를 명확히 해야 한다.`),Yk.forEach(n),Pp=i(s),ds=p(s,"P",{});var $l=r(ds);Nr=o($l,"앞서 언급한 HTTP 서버와 같이 "),Ct=p($l,"CODE",{});var hk=r(Ct);jr=o(hk,"GET /{id}/user"),hk.forEach(n),Qr=o($l,` 엔드포인트를 노출시킨다고 한다면,
다른 팀이 입/출력 스키마에 대해 알 수 있도록 언어를 개시해야 한다.
가장 인기있는 방식은 OpenAPI 또는 gRPC를 사용하는 것이다.`),$l.forEach(n),Dp=i(s),Ps=p(s,"H4",{id:!0});var ri=r(Ps);Ds=p(ri,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var gk=r(Ds);Mt=p(gk,"SPAN",{class:!0}),r(Mt).forEach(n),gk.forEach(n),Fr=o(ri,"OpenAPI"),ri.forEach(n),wp=i(s),Bn=p(s,"P",{});var sf=r(Bn);Kr=o(sf,"일반적으로 Swagger와 같이 사용하는 그 OpenAPI이다. 대충 이렇게 생겼다."),sf.forEach(n),$p=i(s),Ks(ws.$$.fragment,s),Ap=i(s),B=p(s,"P",{});var la=r(B);Wr=o(la,`자동으로 직관적인 UI를 만들어준다는 장점이 있다.
특히 golang의 경우 `),Rt=p(la,"CODE",{});var nf=r(Rt);zr=o(nf,"oapi-codegen"),nf.forEach(n),Zr=o(la,"이라는 라이브러리가 좋다고 한다. 해당 라이브러리에 대한 Github 링크는 "),Ys=p(la,"A",{href:!0,rel:!0});var af=r(Ys);Jr=o(af,"여기"),af.forEach(n),Vr=o(la,"를 참조하자."),la.forEach(n),Cp=i(s),$s=p(s,"P",{});var Al=r($s);Xr=o(Al,"자동으로 OpenAPI 파일을 생성해볼 것이다. 먼저 "),Tt=p(Al,"CODE",{});var tf=r(Tt);Yr=o(tf,"oapi-codegen"),tf.forEach(n),hr=o(Al,"을 설치해야 한다."),Al.forEach(n),Mp=i(s),hs=p(s,"PRE",{class:!0});var Kf=r(hs);Kf.forEach(n),Rp=i(s),Gn=p(s,"P",{});var ef=r(Gn);gr=o(ef,`그리고 다음과 같은 설정 파일을 작성한다.
생성된 코드가 속할 패키지와, 생성된 코드가 저장될 파일을 명시해준다.`),ef.forEach(n),Tp=i(s),gs=p(s,"PRE",{class:!0});var Wf=r(gs);Wf.forEach(n),Ip=i(s),Nn=p(s,"P",{});var pf=r(Nn);su=o(pf,"이제 명령어를 쳐보자!"),pf.forEach(n),Sp=i(s),sn=p(s,"PRE",{class:!0});var zf=r(sn);zf.forEach(n),xp=i(s),As=p(s,"P",{});var Cl=r(As);nu=o(Cl,"이렇게 하면 "),It=p(Cl,"CODE",{});var lf=r(It);au=o(lf,"openapi.gen.go"),lf.forEach(n),tu=o(Cl,` 파일이 생기면서, 구현할 수 있는 서버용 인터페이스가 생긴다.
API 문서를 업데이트할 때마다 이 명령어를 재실행하면 새로운 서버 정의를 생성할 수 있다.`),Cl.forEach(n),Up=i(s),G=p(s,"P",{});var oa=r(G);eu=o(oa,"클라이언트 코드를 생성하는 것도 간단하다. "),St=p(oa,"CODE",{});var of=r(St);pu=o(of,"config.yml"),of.forEach(n),lu=o(oa," 파일 맨 끝에 "),xt=p(oa,"CODE",{});var cf=r(xt);ou=o(cf,"client: true"),cf.forEach(n),cu=o(oa,"만 추가하고 이전 명령어를 재실행하면 된다. 여기서는 생략해야지~"),oa.forEach(n),Op=i(s),jn=p(s,"P",{});var rf=r(jn);ru=o(rf,`OpenAPI 사양을 업데이트하고 클라이언트를 업데이트하고자 하는 경우, 이전에 쳤던 명령어를 다시 실행시키기만 하면 된다.
이러한 작업을 Continuous Integration 파이프라인에 추가하면, 소비자 팀에서 필요할 때마다 최신 버전을 얻을 수 있을 것이다.`),rf.forEach(n),Lp=i(s),Qn=p(s,"P",{});var uf=r(Qn);uu=o(uf,`팀이 REST API를 사용하는 데 익숙하다면 OpenAPI는 꽤 괜찮은 Published Language이다.
OpenAPI는 문서 우선이므로 외부 문서가 항상 최신으로 유지되는 것을 보자아며, 이는 굉장한 이점이다.
또한 코드가 자동으로 생성되므로, 별도의 노력 없이 다양한 유즈 케이스를 지원할 수 있다.`),uf.forEach(n),Hp=i(s),Fn=p(s,"P",{});var kf=r(Fn);iu=o(kf,`하지만 OpenAPI보다 성능이 더 좋은 대안들이 많다.
그리고 OpenAPI는 기본적으로 주요 변경 사항에 대한 보호를 제공하지 않는다.
이를테면 문서에서 어떤 필드를 제거했지만 다른 팀이 이에 의존하는 경우, 그들의 워크플로우가 깨질 수 있다.`),kf.forEach(n),qp=i(s),Kn=p(s,"P",{});var ff=r(Kn);ku=o(ff,"이러한 문제를 해결하고 추가적인 기능을 제공하는 gRPC를 살펴보록 하자."),ff.forEach(n),Bp=i(s),Gp=p(s,"BR",{}),Np=p(s,"BR",{}),jp=i(s),Cs=p(s,"H4",{id:!0});var ui=r(Cs);Ms=p(ui,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var mf=r(Ms);Ut=p(mf,"SPAN",{class:!0}),r(Ut).forEach(n),mf.forEach(n),fu=o(ui,"gRPC"),ui.forEach(n),Qp=i(s),Wn=p(s,"P",{});var Ef=r(Wn);mu=o(Ef,`gRPC는 대규모 원격 통신을 위해 Google에서 개발된 통신 프레이뭐크로,
HTTP/2를 기반으로 하며 로드 밸런싱, 추적, 인증, 양방향 스트리밍, 헬스 체크 등의 기능을 제공한다.`),Ef.forEach(n),Fp=i(s),zn=p(s,"P",{});var vf=r(zn);Eu=o(vf,`gRPC는 전송하는 페이로드를 바이너리로 직렬화하기 때문에 더 빠르고 효율적이다.
또한 gRPC에서 클라이언트는 원격 서버의 코드를 마치 로컬 코드를 호출하듯 사용할 수 있다.
그리고, gRPC는 다양한 언어와 OpenAPI같은 다양한 프레임워크를 지원한다.`),vf.forEach(n),Kp=i(s),Rs=p(s,"P",{});var Ml=r(Rs);vu=o(Ml,`원격 서버의 메소드를 호출하기 위해서는 먼저 Protobuf 파일을 작성해야 한다.
Protobuf 파일은 주로 `),Ot=p(Ml,"CODE",{});var _f=r(Ot);_u=o(_f,".proto"),_f.forEach(n),bu=o(Ml,` 확장자를 가지며, 언어에 구애받지 않는다.
Protobuf 파일은 다음과 같은 형태를 가진다.`),Ml.forEach(n),Wp=i(s),Ks(Ts.$$.fragment,s),zp=i(s),Zn=p(s,"P",{});var bf=r(Zn);yu=o(bf,"이를 통해 서비스, 그리고 요청 및 응답 객체를 정의하고, 클라이언트 코드와 서버 코드를 생성할 수 있다."),bf.forEach(n),Zp=i(s),Jn=p(s,"P",{});var yf=r(Jn);du=o(yf,`gRPC는 REST-API 기반인 OpenAPI에 비해 시작하기가 조금 더 어렵다.
또한 코드를 생성하는데 필요한 일부 도구를 설치 및 사용하기가 다소 어려울 수 있다.`),yf.forEach(n),Jp=i(s),N=p(s,"P",{});var ca=r(N);Pu=o(ca,"먼저, "),Lt=p(ca,"CODE",{});var df=r(Lt);Du=o(df,"protobuf"),df.forEach(n),wu=o(ca," 컴파일러를 설치하고, "),Ht=p(ca,"CODE",{});var Pf=r(Ht);$u=o(Pf,"protoc"),Pf.forEach(n),Au=o(ca," 명령어를 활성화하기 위해 path를 업데이트해줘야 한다."),ca.forEach(n),Vp=i(s),nn=p(s,"PRE",{class:!0});var Zf=r(nn);Zf.forEach(n),Xp=i(s),Vn=p(s,"P",{});var Df=r(Vn);Cu=o(Df,"이후, 프로젝트 폴더에서 다음과 같이 명령어를 입력한다."),Df.forEach(n),Yp=i(s),an=p(s,"PRE",{class:!0});var Jf=r(an);Jf.forEach(n),hp=i(s),j=p(s,"P",{});var ra=r(j);Mu=o(ra,"이렇게 하면 "),qt=p(ra,"CODE",{});var wf=r(qt);Ru=o(wf,"userservice.pb.go"),wf.forEach(n),Tu=o(ra,"와 "),Bt=p(ra,"CODE",{});var $f=r(Bt);Iu=o($f,"userservice_grpc.pb.go"),$f.forEach(n),Su=o(ra," 파일이 생성되며, 해당 파일을 통해 서버와 클라이언트 코드를 작성할 수 있다."),ra.forEach(n),gp=i(s),Xn=p(s,"P",{});var Af=r(Xn);xu=o(Af,"gRPC에 관련한 내용은 아마도 다른 포스트에서 다룰 예정이다."),Af.forEach(n),sl=i(s),nl=p(s,"BR",{}),al=i(s),Is=p(s,"H3",{id:!0});var ii=r(Is);Ss=p(ii,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Cf=r(Ss);Gt=p(Cf,"SPAN",{class:!0}),r(Gt).forEach(n),Cf.forEach(n),Uu=o(ii,"Anti-Corruption Layer"),ii.forEach(n),tl=i(s),xs=p(s,"P",{});var Rl=r(xs);Ou=o(Rl,`Anti-Corruption Layer는 Adapter Layer라고도 하며, 다른 시스템의 모델을 변환하기 위해 사용된다.
Open Host Service와 잘 어울리는 상호보완적인 패턴이라고도 할 수 있다.
가령 마케팅 팀의 published language에서는 `),Nt=p(Rl,"EM",{});var Mf=r(Nt);Lu=o(Mf,"캠페인(campaign)"),Mf.forEach(n),Hu=o(Rl,"을 다음과 같이 정의할 수 있다."),Rl.forEach(n),el=i(s),tn=p(s,"PRE",{class:!0});var Vf=r(tn);Vf.forEach(n),pl=i(s),Us=p(s,"P",{});var Tl=r(Us);qu=o(Tl,"하지만 우리 팀에서의 "),jt=p(Tl,"EM",{});var Rf=r(jt);Bu=o(Rf,"캠페인"),Rf.forEach(n),Gu=o(Tl,"은 내부적으로 이와 같이 정의되어 있다고 해보자."),Tl.forEach(n),ll=i(s),en=p(s,"PRE",{class:!0});var Xf=r(en);Xf.forEach(n),ol=i(s),Os=p(s,"P",{});var Il=r(Os);Nu=o(Il,`두 모델은 거의 동일한 정보를 가지고 있지만, 데이터 필드의 이름이나 포맷이 약간 다르다.
우리의 `),Qt=p(Il,"EM",{});var Tf=r(Qt);ju=o(Tf,"캠페인"),Tf.forEach(n),Qu=o(Il,` 모델을 마케팅 팀과 완전히 동일하게 바꾸면 해결되지만 이는 DDD의 원칙에 위배된다.
이러한 경우 Anti-Corruption Layer를 사용할 수 있다.`),Il.forEach(n),cl=i(s),Ks(Ls.$$.fragment,s),rl=i(s),Q=p(s,"P",{});var ua=r(Q);Fu=o(ua,"이와 같이 "),Ft=p(ua,"CODE",{});var If=r(Ft);Ku=o(If,"MarketingCampaignModel"),If.forEach(n),Wu=o(ua,"을 "),Kt=p(ua,"CODE",{});var Sf=r(Kt);zu=o(Sf,"Campaign"),Sf.forEach(n),Zu=o(ua,`으로 변환하는 과정에서 데이터가 변환 가능한지 검증하는 로직이 포함되어 있다.
복잡한 시스템에서는 Anti-Corruption Layer의 역할이 더 커질 수 있고, 이전 시스템에서 현 시스템으로 마이그레이션하는 과정에서도 사용될 수 있다.
하지만 추가적인 오버헤드나 실패가 발생할 수 있는 지점이 생겨난다는 점을 유의해야 한다.`),ua.forEach(n),ul=i(s),Yn=p(s,"P",{});var xf=r(Yn);Ju=o(xf,"모든 DDD 패턴 중, Anti-Corruption Layer는 DDD 외부에서 가장 많이 사용되는 패턴이다. 시스템을 분리(디커플링)된 상태로 유지할 때 효과적이다."),xf.forEach(n),il=i(s),kl=p(s,"BR",{}),fl=p(s,"BR",{}),ml=i(s),Hs=p(s,"H2",{id:!0});var ki=r(Hs);qs=p(ki,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Uf=r(qs);Wt=p(Uf,"SPAN",{class:!0}),r(Wt).forEach(n),Uf.forEach(n),Vu=o(ki,"References"),ki.forEach(n),El=i(s),vl=p(s,"HR",{}),_l=i(s),hn=p(s,"CENTER",{});var Of=r(hn);W=p(Of,"P",{});var ia=r(W);pn=p(ia,"A",{href:!0,rel:!0});var Lf=r(pn);gn=p(Lf,"IMG",{src:!0,alt:!0}),Lf.forEach(n),Xu=i(ia),Yu=p(ia,"BR",{}),hu=i(ia),ln=p(ia,"A",{href:!0,rel:!0});var Hf=r(ln);gu=o(Hf,"Matthew Boyle, Domain-Driven Design with Golang』, O’Reilly Media, Inc."),Hf.forEach(n),ia.forEach(n),Of.forEach(n),this.h()},h(){k(m,"class","icon icon-link"),k(v,"aria-hidden","true"),k(v,"tabindex","-1"),k(v,"href","#상황-설정"),k(f,"id","상황-설정"),k(xa,"class","icon icon-link"),k(X,"aria-hidden","true"),k(X,"tabindex","-1"),k(X,"href","#도메인domain과-서브도메인sub-domain"),k(V,"id","도메인domain과-서브도메인sub-domain"),k(Ga,"class","icon icon-link"),k(g,"aria-hidden","true"),k(g,"tabindex","-1"),k(g,"href","#유비쿼터스-언어ubiquitous-language"),k(h,"id","유비쿼터스-언어ubiquitous-language"),k(Fa,"class","icon icon-link"),k(ns,"aria-hidden","true"),k(ns,"tabindex","-1"),k(ns,"href","#유비쿼터스-언어의-이점"),k(ss,"id","유비쿼터스-언어의-이점"),k(rt,"class","icon icon-link"),k(cs,"aria-hidden","true"),k(cs,"tabindex","-1"),k(cs,"href","#강력한-유비쿼터스-언어를-만드는-방법"),k(os,"id","강력한-유비쿼터스-언어를-만드는-방법"),k(ut,"class","icon icon-link"),k(us,"aria-hidden","true"),k(us,"tabindex","-1"),k(us,"href","#유비쿼터스-언어를-적용할-때의-주의점"),k(rs,"id","유비쿼터스-언어를-적용할-때의-주의점"),k(mt,"class","icon icon-link"),k(ks,"aria-hidden","true"),k(ks,"tabindex","-1"),k(ks,"href","#제한된-컨텍스트"),k(is,"id","제한된-컨텍스트"),Sl(An.src,fi="/post_img/Backend/Architecture/DDD/2/1.png")||k(An,"src",fi),k(An,"alt","Alt text"),Sl(Rn.src,mi="/post_img/Backend/Architecture/DDD/2/2.png")||k(Rn,"src",mi),k(Rn,"alt","Alt text"),k(wt,"class","icon icon-link"),k(Es,"aria-hidden","true"),k(Es,"tabindex","-1"),k(Es,"href","#open-host-service"),k(ms,"id","open-host-service"),Sl(On.src,Ei="/post_img/Backend/Architecture/DDD/2/3.png")||k(On,"src",Ei),k(On,"alt","Alt text"),k(At,"class","icon icon-link"),k(ys,"aria-hidden","true"),k(ys,"tabindex","-1"),k(ys,"href","#published-language"),k(bs,"id","published-language"),k(Mt,"class","icon icon-link"),k(Ds,"aria-hidden","true"),k(Ds,"tabindex","-1"),k(Ds,"href","#openapi"),k(Ps,"id","openapi"),k(Ys,"href","https://github.com/PacktPublishing/Domain-Driven-Design-with-GoLang/tree/main/chapter2/oapi"),k(Ys,"rel","nofollow"),k(hs,"class","language-bash"),k(gs,"class","language-yml"),k(sn,"class","language-bash"),k(Ut,"class","icon icon-link"),k(Ms,"aria-hidden","true"),k(Ms,"tabindex","-1"),k(Ms,"href","#grpc"),k(Cs,"id","grpc"),k(nn,"class","language-bash"),k(an,"class","language-bash"),k(Gt,"class","icon icon-link"),k(Ss,"aria-hidden","true"),k(Ss,"tabindex","-1"),k(Ss,"href","#anti-corruption-layer"),k(Is,"id","anti-corruption-layer"),k(tn,"class","language-json"),k(en,"class","language-go"),k(Wt,"class","icon icon-link"),k(qs,"aria-hidden","true"),k(qs,"tabindex","-1"),k(qs,"href","#references"),k(Hs,"id","references"),Sl(gn.src,vi="https://learning.oreilly.com/covers/urn:orm:book:9781804613450/400w/")||k(gn,"src",vi),k(gn,"alt","Domain-Driven Design with Golang Cover"),k(pn,"href","https://learning.oreilly.com/library/view/domain-driven-design-with/9781804613450/"),k(pn,"rel","nofollow"),k(ln,"href","https://learning.oreilly.com/library/view/domain-driven-design-with/9781804613450/"),k(ln,"rel","nofollow")},m(s,t){c(s,f,t),a(f,v),a(v,m),a(f,E),c(s,Yt,t),c(s,ht,t),c(s,gt,t),c(s,Z,t),a(Z,xl),a(Z,ka),a(ka,Ul),a(Z,Ol),c(s,se,t),c(s,cn,t),a(cn,w),a(w,A),a(A,fa),a(fa,Ll),a(A,Hl),a(A,ma),a(ma,ql),a(A,Bl),a(A,Ea),a(Ea,Gl),a(A,Nl),a(A,va),a(va,jl),a(A,Ql),a(w,Fl),a(w,rn),a(rn,_a),a(_a,Kl),a(rn,Wl),a(w,zl),a(w,_),a(_,ba),a(ba,Zl),a(_,Jl),a(_,ya),a(ya,Vl),a(_,Xl),a(_,da),a(da,Yl),a(_,hl),a(_,Pa),a(Pa,gl),a(_,so),a(_,Da),a(Da,no),a(_,ao),a(_,wa),a(wa,to),a(_,eo),a(_,$a),a($a,po),a(_,lo),a(w,oo),a(w,x),a(x,co),a(x,Aa),a(Aa,ro),a(x,uo),a(x,Ca),a(Ca,io),a(x,ko),a(x,Ma),a(Ma,fo),a(x,mo),a(w,Eo),a(w,C),a(C,Ra),a(Ra,vo),a(C,_o),a(C,Ta),a(Ta,bo),a(C,yo),a(C,Ia),a(Ia,Po),a(C,Do),a(C,Sa),a(Sa,wo),a(C,$o),c(s,ne,t),c(s,un,t),a(un,Ao),c(s,ae,t),Ws(J,s,t),c(s,te,t),c(s,kn,t),a(kn,Co),c(s,ee,t),c(s,pe,t),c(s,le,t),c(s,oe,t),c(s,V,t),a(V,X),a(X,xa),a(V,Mo),c(s,ce,t),c(s,re,t),c(s,ue,t),c(s,M,t),a(M,Ro),a(M,Ua),a(Ua,To),a(M,Io),a(M,Oa),a(Oa,So),a(M,xo),a(M,La),a(La,Uo),a(M,Oo),c(s,ie,t),c(s,fn,t),a(fn,Lo),c(s,ke,t),c(s,U,t),a(U,Ho),a(U,Ha),a(Ha,qo),a(U,Bo),a(U,qa),a(qa,Go),a(U,No),c(s,fe,t),c(s,mn,t),a(mn,jo),c(s,me,t),c(s,Y,t),a(Y,Qo),a(Y,Ba),a(Ba,Fo),a(Y,Ko),c(s,Ee,t),c(s,ve,t),c(s,_e,t),c(s,be,t),c(s,h,t),a(h,g),a(g,Ga),a(h,Wo),c(s,ye,t),c(s,de,t),c(s,Pe,t),c(s,En,t),a(En,zo),c(s,De,t),c(s,R,t),a(R,Zo),a(R,Na),a(Na,Jo),a(R,Vo),a(R,ja),a(ja,Xo),a(R,Yo),a(R,Qa),a(Qa,ho),a(R,go),c(s,we,t),c(s,vn,t),a(vn,sc),c(s,$e,t),c(s,_n,t),a(_n,nc),c(s,Ae,t),c(s,ss,t),a(ss,ns),a(ns,Fa),a(ss,ac),c(s,Ce,t),c(s,O,t),a(O,tc),a(O,Ka),a(Ka,ec),a(O,pc),a(O,Wa),a(Wa,lc),a(O,oc),c(s,Me,t),c(s,bn,t),a(bn,cc),c(s,Re,t),Ws(as,s,t),c(s,Te,t),c(s,ts,t),a(ts,rc),a(ts,za),a(za,uc),a(ts,ic),c(s,Ie,t),c(s,T,t),a(T,kc),a(T,Za),a(Za,fc),a(T,mc),a(T,Ja),a(Ja,Ec),a(T,vc),a(T,Va),a(Va,_c),a(T,bc),c(s,Se,t),c(s,xe,t),c(s,Ue,t),c(s,yn,t),a(yn,yc),c(s,Oe,t),Ws(es,s,t),c(s,Le,t),c(s,dn,t),a(dn,dc),c(s,He,t),c(s,b,t),a(b,Pc),a(b,Xa),a(Xa,Dc),a(b,wc),a(b,Ya),a(Ya,$c),a(b,Ac),a(b,ha),a(ha,Cc),a(b,Mc),a(b,ga),a(ga,Rc),a(b,Tc),a(b,st),a(st,Ic),a(b,Sc),a(b,nt),a(nt,xc),a(b,Uc),c(s,qe,t),c(s,ps,t),a(ps,Oc),a(ps,at),a(at,Lc),a(ps,Hc),c(s,Be,t),c(s,Pn,t),a(Pn,qc),c(s,Ge,t),c(s,Ne,t),c(s,je,t),c(s,L,t),a(L,Bc),a(L,tt),a(tt,Gc),a(L,Nc),a(L,et),a(et,jc),a(L,Qc),c(s,Qe,t),Ws(ls,s,t),c(s,Fe,t),c(s,P,t),a(P,Fc),a(P,pt),a(pt,Kc),a(P,Wc),a(P,lt),a(lt,zc),a(P,Zc),a(P,ot),a(ot,Jc),a(P,Vc),a(P,ct),a(ct,Xc),a(P,Yc),c(s,Ke,t),c(s,os,t),a(os,cs),a(cs,rt),a(os,hc),c(s,We,t),c(s,Dn,t),a(Dn,gc),c(s,ze,t),c(s,rs,t),a(rs,us),a(us,ut),a(rs,sr),c(s,Ze,t),c(s,I,t),a(I,nr),a(I,it),a(it,ar),a(I,tr),a(I,kt),a(kt,er),a(I,pr),a(I,ft),a(ft,lr),a(I,or),c(s,Je,t),c(s,Ve,t),c(s,Xe,t),c(s,Ye,t),c(s,is,t),a(is,ks),a(ks,mt),a(is,cr),c(s,he,t),c(s,ge,t),c(s,sp,t),c(s,fs,t),a(fs,rr),a(fs,Et),a(Et,ur),a(fs,ir),c(s,np,t),c(s,wn,t),a(wn,kr),c(s,ap,t),c(s,$n,t),a($n,An),c(s,tp,t),c(s,Cn,t),a(Cn,fr),c(s,ep,t),c(s,Mn,t),a(Mn,Rn),c(s,pp,t),c(s,H,t),a(H,mr),a(H,vt),a(vt,Er),a(H,vr),a(H,_t),a(_t,_r),a(H,br),c(s,lp,t),c(s,q,t),a(q,yr),a(q,bt),a(bt,dr),a(q,Pr),a(q,yt),a(yt,Dr),a(q,wr),c(s,op,t),c(s,Tn,t),a(Tn,$r),c(s,cp,t),c(s,In,t),a(In,K),a(K,dt),a(dt,Ar),a(K,Cr),a(K,Pt),a(Pt,Mr),a(K,Rr),a(K,Dt),a(Dt,Tr),c(s,rp,t),c(s,ms,t),a(ms,Es),a(Es,wt),a(ms,Ir),c(s,up,t),c(s,Sn,t),a(Sn,Sr),c(s,ip,t),c(s,xn,t),a(xn,xr),c(s,kp,t),c(s,Un,t),a(Un,On),c(s,fp,t),c(s,Ln,t),a(Ln,Ur),c(s,mp,t),Ws(vs,s,t),c(s,Ep,t),c(s,_s,t),a(_s,Or),a(_s,$t),a($t,Lr),a(_s,Hr),c(s,vp,t),c(s,Hn,t),a(Hn,qr),c(s,_p,t),c(s,bp,t),c(s,yp,t),c(s,bs,t),a(bs,ys),a(ys,At),a(bs,Br),c(s,dp,t),c(s,qn,t),a(qn,Gr),c(s,Pp,t),c(s,ds,t),a(ds,Nr),a(ds,Ct),a(Ct,jr),a(ds,Qr),c(s,Dp,t),c(s,Ps,t),a(Ps,Ds),a(Ds,Mt),a(Ps,Fr),c(s,wp,t),c(s,Bn,t),a(Bn,Kr),c(s,$p,t),Ws(ws,s,t),c(s,Ap,t),c(s,B,t),a(B,Wr),a(B,Rt),a(Rt,zr),a(B,Zr),a(B,Ys),a(Ys,Jr),a(B,Vr),c(s,Cp,t),c(s,$s,t),a($s,Xr),a($s,Tt),a(Tt,Yr),a($s,hr),c(s,Mp,t),c(s,hs,t),hs.innerHTML=qf,c(s,Rp,t),c(s,Gn,t),a(Gn,gr),c(s,Tp,t),c(s,gs,t),gs.innerHTML=Bf,c(s,Ip,t),c(s,Nn,t),a(Nn,su),c(s,Sp,t),c(s,sn,t),sn.innerHTML=Gf,c(s,xp,t),c(s,As,t),a(As,nu),a(As,It),a(It,au),a(As,tu),c(s,Up,t),c(s,G,t),a(G,eu),a(G,St),a(St,pu),a(G,lu),a(G,xt),a(xt,ou),a(G,cu),c(s,Op,t),c(s,jn,t),a(jn,ru),c(s,Lp,t),c(s,Qn,t),a(Qn,uu),c(s,Hp,t),c(s,Fn,t),a(Fn,iu),c(s,qp,t),c(s,Kn,t),a(Kn,ku),c(s,Bp,t),c(s,Gp,t),c(s,Np,t),c(s,jp,t),c(s,Cs,t),a(Cs,Ms),a(Ms,Ut),a(Cs,fu),c(s,Qp,t),c(s,Wn,t),a(Wn,mu),c(s,Fp,t),c(s,zn,t),a(zn,Eu),c(s,Kp,t),c(s,Rs,t),a(Rs,vu),a(Rs,Ot),a(Ot,_u),a(Rs,bu),c(s,Wp,t),Ws(Ts,s,t),c(s,zp,t),c(s,Zn,t),a(Zn,yu),c(s,Zp,t),c(s,Jn,t),a(Jn,du),c(s,Jp,t),c(s,N,t),a(N,Pu),a(N,Lt),a(Lt,Du),a(N,wu),a(N,Ht),a(Ht,$u),a(N,Au),c(s,Vp,t),c(s,nn,t),nn.innerHTML=Nf,c(s,Xp,t),c(s,Vn,t),a(Vn,Cu),c(s,Yp,t),c(s,an,t),an.innerHTML=jf,c(s,hp,t),c(s,j,t),a(j,Mu),a(j,qt),a(qt,Ru),a(j,Tu),a(j,Bt),a(Bt,Iu),a(j,Su),c(s,gp,t),c(s,Xn,t),a(Xn,xu),c(s,sl,t),c(s,nl,t),c(s,al,t),c(s,Is,t),a(Is,Ss),a(Ss,Gt),a(Is,Uu),c(s,tl,t),c(s,xs,t),a(xs,Ou),a(xs,Nt),a(Nt,Lu),a(xs,Hu),c(s,el,t),c(s,tn,t),tn.innerHTML=Qf,c(s,pl,t),c(s,Us,t),a(Us,qu),a(Us,jt),a(jt,Bu),a(Us,Gu),c(s,ll,t),c(s,en,t),en.innerHTML=Ff,c(s,ol,t),c(s,Os,t),a(Os,Nu),a(Os,Qt),a(Qt,ju),a(Os,Qu),c(s,cl,t),Ws(Ls,s,t),c(s,rl,t),c(s,Q,t),a(Q,Fu),a(Q,Ft),a(Ft,Ku),a(Q,Wu),a(Q,Kt),a(Kt,zu),a(Q,Zu),c(s,ul,t),c(s,Yn,t),a(Yn,Ju),c(s,il,t),c(s,kl,t),c(s,fl,t),c(s,ml,t),c(s,Hs,t),a(Hs,qs),a(qs,Wt),a(Hs,Vu),c(s,El,t),c(s,vl,t),c(s,_l,t),c(s,hn,t),a(hn,W),a(W,pn),a(pn,gn),a(W,Xu),a(W,Yu),a(W,hu),a(W,ln),a(ln,gu),bl=!0},p(s,[t]){const zt={};t&1&&(zt.$$scope={dirty:t,ctx:s}),J.$set(zt);const on={};t&1&&(on.$$scope={dirty:t,ctx:s}),as.$set(on);const Zt={};t&1&&(Zt.$$scope={dirty:t,ctx:s}),es.$set(Zt);const Jt={};t&1&&(Jt.$$scope={dirty:t,ctx:s}),ls.$set(Jt);const $={};t&1&&($.$$scope={dirty:t,ctx:s}),vs.$set($);const S={};t&1&&(S.$$scope={dirty:t,ctx:s}),ws.$set(S);const Vt={};t&1&&(Vt.$$scope={dirty:t,ctx:s}),Ts.$set(Vt);const Xt={};t&1&&(Xt.$$scope={dirty:t,ctx:s}),Ls.$set(Xt)},i(s){bl||(zs(J.$$.fragment,s),zs(as.$$.fragment,s),zs(es.$$.fragment,s),zs(ls.$$.fragment,s),zs(vs.$$.fragment,s),zs(ws.$$.fragment,s),zs(Ts.$$.fragment,s),zs(Ls.$$.fragment,s),bl=!0)},o(s){Zs(J.$$.fragment,s),Zs(as.$$.fragment,s),Zs(es.$$.fragment,s),Zs(ls.$$.fragment,s),Zs(vs.$$.fragment,s),Zs(ws.$$.fragment,s),Zs(Ts.$$.fragment,s),Zs(Ls.$$.fragment,s),bl=!1},d(s){s&&n(f),s&&n(Yt),s&&n(ht),s&&n(gt),s&&n(Z),s&&n(se),s&&n(cn),s&&n(ne),s&&n(un),s&&n(ae),Js(J,s),s&&n(te),s&&n(kn),s&&n(ee),s&&n(pe),s&&n(le),s&&n(oe),s&&n(V),s&&n(ce),s&&n(re),s&&n(ue),s&&n(M),s&&n(ie),s&&n(fn),s&&n(ke),s&&n(U),s&&n(fe),s&&n(mn),s&&n(me),s&&n(Y),s&&n(Ee),s&&n(ve),s&&n(_e),s&&n(be),s&&n(h),s&&n(ye),s&&n(de),s&&n(Pe),s&&n(En),s&&n(De),s&&n(R),s&&n(we),s&&n(vn),s&&n($e),s&&n(_n),s&&n(Ae),s&&n(ss),s&&n(Ce),s&&n(O),s&&n(Me),s&&n(bn),s&&n(Re),Js(as,s),s&&n(Te),s&&n(ts),s&&n(Ie),s&&n(T),s&&n(Se),s&&n(xe),s&&n(Ue),s&&n(yn),s&&n(Oe),Js(es,s),s&&n(Le),s&&n(dn),s&&n(He),s&&n(b),s&&n(qe),s&&n(ps),s&&n(Be),s&&n(Pn),s&&n(Ge),s&&n(Ne),s&&n(je),s&&n(L),s&&n(Qe),Js(ls,s),s&&n(Fe),s&&n(P),s&&n(Ke),s&&n(os),s&&n(We),s&&n(Dn),s&&n(ze),s&&n(rs),s&&n(Ze),s&&n(I),s&&n(Je),s&&n(Ve),s&&n(Xe),s&&n(Ye),s&&n(is),s&&n(he),s&&n(ge),s&&n(sp),s&&n(fs),s&&n(np),s&&n(wn),s&&n(ap),s&&n($n),s&&n(tp),s&&n(Cn),s&&n(ep),s&&n(Mn),s&&n(pp),s&&n(H),s&&n(lp),s&&n(q),s&&n(op),s&&n(Tn),s&&n(cp),s&&n(In),s&&n(rp),s&&n(ms),s&&n(up),s&&n(Sn),s&&n(ip),s&&n(xn),s&&n(kp),s&&n(Un),s&&n(fp),s&&n(Ln),s&&n(mp),Js(vs,s),s&&n(Ep),s&&n(_s),s&&n(vp),s&&n(Hn),s&&n(_p),s&&n(bp),s&&n(yp),s&&n(bs),s&&n(dp),s&&n(qn),s&&n(Pp),s&&n(ds),s&&n(Dp),s&&n(Ps),s&&n(wp),s&&n(Bn),s&&n($p),Js(ws,s),s&&n(Ap),s&&n(B),s&&n(Cp),s&&n($s),s&&n(Mp),s&&n(hs),s&&n(Rp),s&&n(Gn),s&&n(Tp),s&&n(gs),s&&n(Ip),s&&n(Nn),s&&n(Sp),s&&n(sn),s&&n(xp),s&&n(As),s&&n(Up),s&&n(G),s&&n(Op),s&&n(jn),s&&n(Lp),s&&n(Qn),s&&n(Hp),s&&n(Fn),s&&n(qp),s&&n(Kn),s&&n(Bp),s&&n(Gp),s&&n(Np),s&&n(jp),s&&n(Cs),s&&n(Qp),s&&n(Wn),s&&n(Fp),s&&n(zn),s&&n(Kp),s&&n(Rs),s&&n(Wp),Js(Ts,s),s&&n(zp),s&&n(Zn),s&&n(Zp),s&&n(Jn),s&&n(Jp),s&&n(N),s&&n(Vp),s&&n(nn),s&&n(Xp),s&&n(Vn),s&&n(Yp),s&&n(an),s&&n(hp),s&&n(j),s&&n(gp),s&&n(Xn),s&&n(sl),s&&n(nl),s&&n(al),s&&n(Is),s&&n(tl),s&&n(xs),s&&n(el),s&&n(tn),s&&n(pl),s&&n(Us),s&&n(ll),s&&n(en),s&&n(ol),s&&n(Os),s&&n(cl),Js(Ls,s),s&&n(rl),s&&n(Q),s&&n(ul),s&&n(Yn),s&&n(il),s&&n(kl),s&&n(fl),s&&n(ml),s&&n(Hs),s&&n(El),s&&n(vl),s&&n(_l),s&&n(hn)}}}const i1={title:"도메인, 유비쿼터스 언어, 제한된 컨텍스트 이해하기",date:"2023-07-07T00:00:00.000Z",excerpt:"Understanding Domains, Ubiquitous Language, and Bounded Contexts",categories:["Golang","Backend","Architecture","Domain Driven Design"],coverImage:"/post_img/Backend/Architecture/DDD/cover.png",coverWidth:16,coverHeight:9,indexed:!0,exposed:!0};class k1 extends Yf{constructor(f){super(),hf(this,f,null,c1,gf,{})}}export{k1 as default,i1 as metadata};
