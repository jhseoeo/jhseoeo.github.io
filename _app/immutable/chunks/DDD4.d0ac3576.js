import{S as eo,i as co,s as lo,k as o,q as u,a as k,y as C,l as e,m as c,h as s,r as i,c as r,z as g,n as m,b as t,E as p,A as S,g as B,d as x,B as D,M as sn}from"./index.d78780bf.js";import{C as nn}from"./CodeBlockWrapper.eeb7c0c0.js";import{I as uo}from"./Image.605b14b5.js";function io(w){let l,d=`<code class="language-go"><span class="token keyword">package</span> chapter4

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"errors"</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"log"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Car <span class="token keyword">interface</span> <span class="token punctuation">&#123;</span>
	<span class="token function">BeepBeep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">type</span> BMW <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	heatedSeatSubscriptionEnabled <span class="token builtin">bool</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>B BMW<span class="token punctuation">)</span> <span class="token function">BeepBeep</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token comment">// TODO: implement me</span>
	<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">"implement me"</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">type</span> Tesla <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	autopilotEnabled <span class="token builtin">bool</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>T Tesla<span class="token punctuation">)</span> <span class="token function">BeepBeep</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token comment">// TODO: implement me</span>
	<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">"implement me"</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token function">BuildCar</span><span class="token punctuation">(</span>carType <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>Car<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">switch</span> carType <span class="token punctuation">&#123;</span>
	<span class="token keyword">case</span> <span class="token string">"bmw"</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> BMW<span class="token punctuation">&#123;</span>heatedSeatSubscriptionEnabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
	<span class="token keyword">case</span> <span class="token string">"tesla"</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> Tesla<span class="token punctuation">&#123;</span>autopilotEnabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"unknown car type"</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	myCar<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">BuildCar</span><span class="token punctuation">(</span><span class="token string">"tesla"</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	<span class="token comment">// TODO: do something with myCar</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%v is my car&#92;n"</span><span class="token punctuation">,</span> myCar<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){l=o("pre"),this.h()},l(f){l=e(f,"PRE",{class:!0});var b=c(l);b.forEach(s),this.h()},h(){m(l,"class","language-go")},m(f,b){t(f,l,b),l.innerHTML=d},p:sn,d(f){f&&s(l)}}}function ko(w){let l,d=`<code class="language-go"><span class="token keyword">package</span> chapter4

<span class="token keyword">import</span> <span class="token punctuation">(</span>
<span class="token string">"errors"</span>
<span class="token string">"github.com/google/uuid"</span>
<span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Booking <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
id uuid<span class="token punctuation">.</span>UUID
userId uuid<span class="token punctuation">.</span>UUID
from time<span class="token punctuation">.</span>Time
to time<span class="token punctuation">.</span>Time
hairDresserId uuid<span class="token punctuation">.</span>UUID
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token function">CreateBooking</span><span class="token punctuation">(</span>from time<span class="token punctuation">.</span>Time<span class="token punctuation">,</span> to time<span class="token punctuation">.</span>Time<span class="token punctuation">,</span> userId uuid<span class="token punctuation">.</span>UUID<span class="token punctuation">,</span> hairDresserId uuid<span class="token punctuation">.</span>UUID<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>Booking<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
closingTime<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Kitchen<span class="token punctuation">,</span> <span class="token string">"17:00pm"</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> from<span class="token punctuation">.</span><span class="token function">After</span><span class="token punctuation">(</span>closingTime<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    	<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"no appointments after closing time"</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
    	<span class="token keyword">return</span> <span class="token operator">&amp;</span>Booking<span class="token punctuation">&#123;</span>
    		hairDresserId<span class="token punctuation">:</span> hairDresserId<span class="token punctuation">,</span>
    		id<span class="token punctuation">:</span>            uuid<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    		userId<span class="token punctuation">:</span>        userId<span class="token punctuation">,</span>
    		from<span class="token punctuation">:</span>          from<span class="token punctuation">,</span>
    		to<span class="token punctuation">:</span>            to<span class="token punctuation">,</span>
    	<span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
    <span class="token punctuation">&#125;</span>

<span class="token punctuation">&#125;</span>
</code>`;return{c(){l=o("pre"),this.h()},l(f){l=e(f,"PRE",{class:!0});var b=c(l);b.forEach(s),this.h()},h(){m(l,"class","language-go")},m(f,b){t(f,l,b),l.innerHTML=d},p:sn,d(f){f&&s(l)}}}function ro(w){let l,d=`<code class="language-go"><span class="token keyword">package</span> chapter4

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"context"</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"github.com/jackc/pgx/v4"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> BookingRepository <span class="token keyword">interface</span> <span class="token punctuation">&#123;</span>
	<span class="token function">SaveBooking</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> booking Booking<span class="token punctuation">)</span> <span class="token builtin">error</span>
	<span class="token function">DeleteBooking</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> booking Booking<span class="token punctuation">)</span> <span class="token builtin">error</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">type</span> PostgresRepository <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	connPool <span class="token operator">*</span>pgx<span class="token punctuation">.</span>Conn
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token function">NewPostgresRepository</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> dbConnString <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>PostgresRepository<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> pgx<span class="token punctuation">.</span><span class="token function">Connect</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> dbConnString<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"failed to connect to database: %w"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	<span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>PostgresRepository<span class="token punctuation">&#123;</span>connPool<span class="token punctuation">:</span> conn<span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p PostgresRepository<span class="token punctuation">)</span> <span class="token function">SaveBooking</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> booking Booking<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">&#123;</span>
	<span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> p<span class="token punctuation">.</span>connPool<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span>
		ctx<span class="token punctuation">,</span>
		<span class="token string">"INSERT INTO bookings (id, from, to, hair_dresser_id) VALUES ($1, $2, $3, $4)"</span><span class="token punctuation">,</span>
		booking<span class="token punctuation">.</span>id<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		booking<span class="token punctuation">.</span>from<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		booking<span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		booking<span class="token punctuation">.</span>hairDresserId<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">)</span>

	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"failed to save booking: %w"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p PostgresRepository<span class="token punctuation">)</span> <span class="token function">DeleteBooking</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> booking Booking<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">&#123;</span>
	<span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> p<span class="token punctuation">.</span>connPool<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span>
		ctx<span class="token punctuation">,</span>
		<span class="token string">"DELETE FROM bookings WHERE id = $1"</span><span class="token punctuation">,</span>
		booking<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
	<span class="token punctuation">)</span>

	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"failed to delete booking: %w"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){l=o("pre"),this.h()},l(f){l=e(f,"PRE",{class:!0});var b=c(l);b.forEach(s),this.h()},h(){m(l,"class","language-go")},m(f,b){t(f,l,b),l.innerHTML=d},p:sn,d(f){f&&s(l)}}}function fo(w){let l,d=`<code class="language-go"><span class="token keyword">package</span> chapter4

<span class="token keyword">import</span> <span class="token string">"github.com/google/uuid"</span>

<span class="token keyword">type</span> Product <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	Id             uuid<span class="token punctuation">.</span>UUID
	InStock        <span class="token builtin">bool</span>
	InSomeonesCart <span class="token builtin">bool</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p Product<span class="token punctuation">)</span> <span class="token function">CanBeBought</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">return</span> p<span class="token punctuation">.</span>InStock <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>p<span class="token punctuation">.</span>InSomeonesCart
<span class="token punctuation">&#125;</span>

<span class="token keyword">type</span> ShoppingCart <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	Id          uuid<span class="token punctuation">.</span>UUID
	Products    <span class="token punctuation">[</span><span class="token punctuation">]</span>Product
	IsFull      <span class="token builtin">bool</span>
	MaxCartSize <span class="token builtin">int</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>ShoppingCart<span class="token punctuation">)</span> <span class="token function">AddToCard</span><span class="token punctuation">(</span>p Product<span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">if</span> s<span class="token punctuation">.</span>IsFull <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span>
	<span class="token punctuation">&#125;</span>
	<span class="token keyword">if</span> p<span class="token punctuation">.</span><span class="token function">CanBeBought</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		s<span class="token punctuation">.</span>Products <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>Products<span class="token punctuation">,</span> p<span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span>
	<span class="token punctuation">&#125;</span>
	<span class="token keyword">if</span> s<span class="token punctuation">.</span>MaxCartSize <span class="token operator">==</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>Products<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		s<span class="token punctuation">.</span>IsFull <span class="token operator">=</span> <span class="token boolean">true</span>
	<span class="token punctuation">&#125;</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){l=o("pre"),this.h()},l(f){l=e(f,"PRE",{class:!0});var b=c(l);b.forEach(s),this.h()},h(){m(l,"class","language-go")},m(f,b){t(f,l,b),l.innerHTML=d},p:sn,d(f){f&&s(l)}}}function mo(w){let l,d=`<code class="language-go"><span class="token keyword">package</span> chapter4

<span class="token keyword">import</span> <span class="token string">"errors"</span>

<span class="token keyword">type</span> CheckOutService <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	shoppingCart <span class="token operator">*</span>ShoppingCart
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token function">NewCheckOutService</span><span class="token punctuation">(</span>shoppingCart <span class="token operator">*</span>ShoppingCart<span class="token punctuation">)</span> <span class="token operator">*</span>CheckOutService <span class="token punctuation">&#123;</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>CheckOutService<span class="token punctuation">&#123;</span>shoppingCart<span class="token punctuation">:</span> shoppingCart<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>CheckOutService<span class="token punctuation">)</span> <span class="token function">AddProductToCart</span><span class="token punctuation">(</span>p <span class="token operator">*</span>Product<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">if</span> c<span class="token punctuation">.</span>shoppingCart<span class="token punctuation">.</span>IsFull <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"cannot add product to full cart"</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	<span class="token keyword">if</span> p<span class="token punctuation">.</span><span class="token function">CanBeBought</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		c<span class="token punctuation">.</span>shoppingCart<span class="token punctuation">.</span>Products <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>shoppingCart<span class="token punctuation">.</span>Products<span class="token punctuation">,</span> <span class="token operator">*</span>p<span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span>
	<span class="token punctuation">&#125;</span>
	<span class="token keyword">if</span> c<span class="token punctuation">.</span>shoppingCart<span class="token punctuation">.</span>MaxCartSize <span class="token operator">==</span> <span class="token function">len</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>shoppingCart<span class="token punctuation">.</span>Products<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		c<span class="token punctuation">.</span>shoppingCart<span class="token punctuation">.</span>IsFull <span class="token operator">=</span> <span class="token boolean">true</span>
	<span class="token punctuation">&#125;</span>

	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){l=o("pre"),this.h()},l(f){l=e(f,"PRE",{class:!0});var b=c(l);b.forEach(s),this.h()},h(){m(l,"class","language-go")},m(f,b){t(f,l,b),l.innerHTML=d},p:sn,d(f){f&&s(l)}}}function bo(w){let l,d=`<code class="language-go"><span class="token keyword">package</span> chapter4

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"context"</span>
	<span class="token string">"errors"</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"github.com/jhseoeo/Golang-DDD/chapter2"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> accountKey <span class="token operator">=</span> <span class="token builtin">int</span>

<span class="token keyword">const</span> accountCtxKey <span class="token operator">=</span> <span class="token function">accountKey</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token keyword">type</span> BookingDomainService <span class="token keyword">interface</span> <span class="token punctuation">&#123;</span>
	<span class="token function">CreateBooking</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> booking Booking<span class="token punctuation">)</span> <span class="token builtin">error</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">type</span> BookingAppService <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	bookingRepo          BookingRepository
	bookingDomainService BookingDomainService
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token function">NewBookingAppService</span><span class="token punctuation">(</span>bookingRepo BookingRepository<span class="token punctuation">,</span> bookingDomainService BookingDomainService<span class="token punctuation">)</span> <span class="token operator">*</span>BookingAppService <span class="token punctuation">&#123;</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>BookingAppService<span class="token punctuation">&#123;</span>
		bookingRepo<span class="token punctuation">:</span>          bookingRepo<span class="token punctuation">,</span>
		bookingDomainService<span class="token punctuation">:</span> bookingDomainService<span class="token punctuation">,</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>b <span class="token operator">*</span>BookingAppService<span class="token punctuation">)</span> <span class="token function">CreateBooking</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> booking Booking<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">&#123;</span>
	u<span class="token punctuation">,</span> ok <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Value</span><span class="token punctuation">(</span>accountCtxKey<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>chapter2<span class="token punctuation">.</span>Customer<span class="token punctuation">)</span>
	<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"invalid customer"</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	<span class="token keyword">if</span> u<span class="token punctuation">.</span><span class="token function">UserID</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> booking<span class="token punctuation">.</span>userId<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"cannot create booking for other users"</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	err <span class="token operator">:=</span> b<span class="token punctuation">.</span>bookingDomainService<span class="token punctuation">.</span><span class="token function">CreateBooking</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> booking<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"could not create booking: %w"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	err <span class="token operator">=</span> b<span class="token punctuation">.</span>bookingRepo<span class="token punctuation">.</span><span class="token function">SaveBooking</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> booking<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"could not save bookign: %w"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){l=o("pre"),this.h()},l(f){l=e(f,"PRE",{class:!0});var b=c(l);b.forEach(s),this.h()},h(){m(l,"class","language-go")},m(f,b){t(f,l,b),l.innerHTML=d},p:sn,d(f){f&&s(l)}}}function wo(w){let l,d=`<code class="language-go"><span class="token keyword">package</span> chapter4

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"bytes"</span>
	<span class="token string">"context"</span>
	<span class="token string">"encoding/json"</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"net/http"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> EmailSender <span class="token keyword">interface</span> <span class="token punctuation">&#123;</span>
	<span class="token function">SendEmail</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> to <span class="token builtin">string</span><span class="token punctuation">,</span> title <span class="token builtin">string</span><span class="token punctuation">,</span> body <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> emailUrl <span class="token operator">=</span> <span class="token string">"https://maindrillapp.com/api/1.0/messages/send""</span>

<span class="token keyword">type</span> MailChimp <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	apiKey     <span class="token builtin">string</span>
	from       <span class="token builtin">string</span>
	httpClient http<span class="token punctuation">.</span>Client
<span class="token punctuation">&#125;</span>

<span class="token keyword">type</span> MailChimpReqBody <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	Key     <span class="token builtin">string</span> <span class="token string">&#96;json:"key"&#96;</span>
	Message <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
		FromEmail <span class="token builtin">string</span> <span class="token string">&#96;json:"from_email"&#96;</span>
		Subject   <span class="token builtin">string</span> <span class="token string">&#96;json:"subject"&#96;</span>
		Text      <span class="token builtin">string</span> <span class="token string">&#96;json:"text"&#96;</span>
		To        <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
			Email <span class="token builtin">string</span> <span class="token string">&#96;json:"email"&#96;</span>
			Type  <span class="token builtin">string</span> <span class="token string">&#96;json:"type"&#96;</span>
		<span class="token punctuation">&#125;</span> <span class="token string">&#96;json:"to"&#96;</span>
	<span class="token punctuation">&#125;</span> <span class="token string">&#96;json:"message"&#96;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token function">NewMailChimp</span><span class="token punctuation">(</span>apiKey <span class="token builtin">string</span><span class="token punctuation">,</span> from <span class="token builtin">string</span><span class="token punctuation">,</span> httpClient http<span class="token punctuation">.</span>Client<span class="token punctuation">)</span> <span class="token operator">*</span>MailChimp <span class="token punctuation">&#123;</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>MailChimp<span class="token punctuation">&#123;</span>
		apiKey<span class="token punctuation">:</span>     apiKey<span class="token punctuation">,</span>
		from<span class="token punctuation">:</span>       from<span class="token punctuation">,</span>
		httpClient<span class="token punctuation">:</span> httpClient<span class="token punctuation">,</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>m MailChimp<span class="token punctuation">)</span> <span class="token function">SendEmail</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> to <span class="token builtin">string</span><span class="token punctuation">,</span> title <span class="token builtin">string</span><span class="token punctuation">,</span> body <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">&#123;</span>
	mailBody <span class="token operator">:=</span> MailChimpReqBody<span class="token punctuation">&#123;</span>
		Key<span class="token punctuation">:</span> m<span class="token punctuation">.</span>apiKey<span class="token punctuation">,</span>
		Message<span class="token punctuation">:</span> <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
			FromEmail <span class="token builtin">string</span> <span class="token string">&#96;json:"from_email"&#96;</span>
			Subject   <span class="token builtin">string</span> <span class="token string">&#96;json:"subject"&#96;</span>
			Text      <span class="token builtin">string</span> <span class="token string">&#96;json:"text"&#96;</span>
			To        <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
				Email <span class="token builtin">string</span> <span class="token string">&#96;json:"email"&#96;</span>
				Type  <span class="token builtin">string</span> <span class="token string">&#96;json:"type"&#96;</span>
			<span class="token punctuation">&#125;</span> <span class="token string">&#96;json:"to"&#96;</span>
		<span class="token punctuation">&#125;</span><span class="token punctuation">&#123;</span>
			FromEmail<span class="token punctuation">:</span> m<span class="token punctuation">.</span>from<span class="token punctuation">,</span>
			Subject<span class="token punctuation">:</span>   title<span class="token punctuation">,</span>
			Text<span class="token punctuation">:</span>      body<span class="token punctuation">,</span>
			To<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
				Email <span class="token builtin">string</span> <span class="token string">&#96;json:"email"&#96;</span>
				Type  <span class="token builtin">string</span> <span class="token string">&#96;json:"type"&#96;</span>
			<span class="token punctuation">&#125;</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span>Email<span class="token punctuation">:</span> to<span class="token punctuation">,</span> Type<span class="token punctuation">:</span> <span class="token string">"to"</span><span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
	<span class="token punctuation">&#125;</span>

	payload<span class="token punctuation">,</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>mailBody<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"failed to marshall body: %w"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	req<span class="token punctuation">,</span> err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">NewRequest</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>MethodPost<span class="token punctuation">,</span> emailUrl<span class="token punctuation">,</span> bytes<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>payload<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"failed to create request: %w"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	<span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> m<span class="token punctuation">.</span>httpClient<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"failed to send email: %w"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){l=o("pre"),this.h()},l(f){l=e(f,"PRE",{class:!0});var b=c(l);b.forEach(s),this.h()},h(){m(l,"class","language-go")},m(f,b){t(f,l,b),l.innerHTML=d},p:sn,d(f){f&&s(l)}}}function yo(w){let l,d=`<code class="language-go"><span class="token keyword">type</span> BookingAppService <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	bookingRepo          BookingRepository
	bookingDomainService BookingDomainService
	emailService         EmailSender
<span class="token punctuation">&#125;</span>

<span class="token operator">...</span>


<span class="token keyword">func</span> <span class="token punctuation">(</span>b <span class="token operator">*</span>BookingAppService<span class="token punctuation">)</span> <span class="token function">CreateBooking</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> booking Booking<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">&#123;</span>
	u<span class="token punctuation">,</span> ok <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Value</span><span class="token punctuation">(</span>accountCtxKey<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>chapter2<span class="token punctuation">.</span>Customer<span class="token punctuation">)</span>
	<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"invalid customer"</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	<span class="token keyword">if</span> u<span class="token punctuation">.</span><span class="token function">UserID</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> booking<span class="token punctuation">.</span>userId<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"cannot create booking for other users"</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	err <span class="token operator">:=</span> b<span class="token punctuation">.</span>bookingDomainService<span class="token punctuation">.</span><span class="token function">CreateBooking</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> booking<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"could not create booking: %w"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	err <span class="token operator">=</span> b<span class="token punctuation">.</span>bookingRepo<span class="token punctuation">.</span><span class="token function">SaveBooking</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> booking<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"could not save bookign: %w"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	err <span class="token operator">=</span> b<span class="token punctuation">.</span>emailService<span class="token punctuation">.</span><span class="token function">SendEmail</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		<span class="token operator">...</span>
	<span class="token punctuation">&#125;</span>

	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){l=o("pre"),this.h()},l(f){l=e(f,"PRE",{class:!0});var b=c(l);b.forEach(s),this.h()},h(){m(l,"class","language-go")},m(f,b){t(f,l,b),l.innerHTML=d},p:sn,d(f){f&&s(l)}}}function vo(w){let l,d,f,b,rs,fs,ms,on,Ka,bs,en,Fa,ds,P,ws,y,Qa,jn,qa,Wa,Hn,Ga,za,Un,Va,Za,Ln,Ja,Xa,Kn,Ya,nt,ys,cn,st,vs,ln,at,Es,R,_s,un,tt,$s,kn,pt,Cs,gs,Ss,I,T,Fn,ot,Bs,rn,et,xs,fn,ct,Ds,Ps,Rs,Is,h,M,Qn,lt,Ts,hs,Ms,mn,ut,As,bn,it,Ns,dn,kt,Os,wn,rt,js,A,N,qn,ft,Hs,yn,mt,Us,Ls,Ks,vn,bt,Fs,an,po=`<code class="language-go"><span class="token keyword">package</span> chapter4

<span class="token keyword">import</span> <span class="token string">"context"</span>

<span class="token keyword">type</span> BookingRepository <span class="token keyword">interface</span> <span class="token punctuation">&#123;</span>
	<span class="token function">SaveBooking</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> booking Booking<span class="token punctuation">)</span> <span class="token builtin">error</span>
	<span class="token function">DeleteBooking</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> booking Booking<span class="token punctuation">)</span> <span class="token builtin">error</span>
<span class="token punctuation">&#125;</span></code>`,Qs,O,dt,Wn,wt,yt,qs,En,vt,Ws,j,Gs,_n,Et,zs,Vs,Zs,Js,H,U,Gn,_t,Xs,Ys,na,$n,$t,sa,aa,ta,L,K,zn,Ct,pa,Cn,gt,oa,gn,St,ea,_,Vn,Bt,xt,Zn,Dt,Pt,Jn,Rt,ca,Sn,It,la,Bn,Tt,ua,F,ia,$,ht,Xn,Mt,At,Yn,Nt,Ot,ka,Q,ra,q,jt,ns,Ht,Ut,fa,xn,Lt,ma,ba,da,W,G,ss,Kt,wa,Dn,Ft,ya,Pn,Qt,va,Rn,qt,Ea,z,_a,In,Wt,$a,Tn,Gt,Ca,ga,Sa,hn,zt,Ba,Mn,Vt,xa,V,Da,An,Zt,Pa,Z,Ra,J,Jt,as,Xt,Yt,Ia,Ta,ha,Ma,X,Y,ts,np,Aa,Na,Oa,E,ps,sp,ap,tn,tp,pp,op,ja;return P=new nn({props:{$$slots:{default:[io]},$$scope:{ctx:w}}}),R=new nn({props:{$$slots:{default:[ko]},$$scope:{ctx:w}}}),j=new nn({props:{$$slots:{default:[ro]},$$scope:{ctx:w}}}),F=new nn({props:{$$slots:{default:[fo]},$$scope:{ctx:w}}}),Q=new nn({props:{$$slots:{default:[mo]},$$scope:{ctx:w}}}),z=new nn({props:{$$slots:{default:[bo]},$$scope:{ctx:w}}}),V=new nn({props:{$$slots:{default:[wo]},$$scope:{ctx:w}}}),Z=new nn({props:{$$slots:{default:[yo]},$$scope:{ctx:w}}}),tn=new uo({props:{alt:"Domain-Driven Design with Golang Cover",src:"https://learning.oreilly.com/covers/urn:orm:book:9781804613450/400w/"}}),{c(){l=o("h2"),d=o("a"),f=o("span"),b=u("팩토리 패턴"),rs=k(),fs=o("hr"),ms=k(),on=o("p"),Ka=u(`팩토리 패턴은 주로 객체지향 프로그래밍에서 찾아볼 수 있으며, 다른 오브젝트를 생성하는 주된 책임을 가지고 있는 개체로 정의된다.
객체의 기본 속성을 설정하는 데 유용하며, 일반적으로 객체의 생성 외에 다른 목적을 가지면 안된다.`),bs=k(),en=o("p"),Fa=u(`Go는 객체지향 언어가 아님에도 팩토리 패턴은 꽤 유용하다.
아래 예제는 팩토리 패턴의 간단한 예제이다.`),ds=k(),C(P.$$.fragment),ws=k(),y=o("p"),Qa=u("위 예제에서는 "),jn=o("code"),qa=u("Car"),Wa=u(" 인터페이스를 충족하는 "),Hn=o("code"),Ga=u("BMW"),za=u("와 "),Un=o("code"),Va=u("Tesla"),Za=u(" 구조체를 정의하였고, "),Ln=o("code"),Ja=u("Car"),Xa=u(" 오브젝트의 필드값을 초기화하여 반환하는 팩토리 함수 "),Kn=o("code"),Ya=u("BuildCar"),nt=u(`를 정의하였다.
또한, 자동차의 타입이 유효하지 않을 경우 에러를 반환한다.`),ys=k(),cn=o("p"),st=u(`팩토리 패턴은 복잡한 구조체의 생성을 표준화하는 좋은 방법이며, 애플리케이션이 복잡해질 수록 유용하다.
또한 팩토리를 통해 Encapsulation을 달성할 수 있고, 객체 생성시 비즈니스 불변성을 적용하여 도메인 모델을 단순화할 수 있다.`),vs=k(),ln=o("p"),at=u(`가령 미용실 예약 시스템을 구현한다고 가정해보자.
누군가 업무 시간이 지나고 예약하려 하는 경우, 다음과 같이 팩토리 함수를 통해 예외를 발생시킬 수 있다.`),Es=k(),C(R.$$.fragment),_s=k(),un=o("p"),tt=u("위 예제는 엔티티를 생성하는 팩토리 함수를 보여주며, 엔티티의 식별자는 팩토리에서 생성된다."),$s=k(),kn=o("p"),pt=u("엔티티 팩토리에 대헤 조금 더 살펴보자."),Cs=k(),gs=o("br"),Ss=k(),I=o("h3"),T=o("a"),Fn=o("span"),ot=u("엔티티 팩토리"),Bs=k(),rn=o("p"),et=u(`앞선 포스트에서 설명하였듯 엔티티에는 식별자가 있고, 인스턴스화하기 위한 최소한의 요구사항이 존재한다.
따라서 팩토리를 만들 때 이러한 요구사항을 충족시켜야 하며, 다른 속성을 설정하려는 경우 이를 위한 다른 함수를 제공할 수 있다.`),xs=k(),fn=o("p"),ct=u(`엔티티 팩토리 함수를 만들 때는 팩토리 함수가 식별자를 생성할지, 아니면 파라미터로 받을지 결정해야 한다.
둘 다 가능하지만, 되도록이면 식별자를 팩토리 함수에서 생성하는 것이 더 좋은 방법이다.`),Ds=k(),Ps=o("br"),Rs=o("br"),Is=k(),h=o("h2"),M=o("a"),Qn=o("span"),lt=u("레포지토리 패턴"),Ts=k(),hs=o("hr"),Ms=k(),mn=o("p"),ut=u(`레포지토리 패턴은 데이터 저장소에 접근하기 위해 필요한 코드의 일부이다.
데이터 저장소는 파일 시스템, 메모리, 스프레드시트, S3 등이 있을 수 있으나, 대부분의 프로젝트에서는 데이터베이스에 해당한다.`),As=k(),bn=o("p"),it=u(`레포지토리 계층을 사용함으로써 데이터에 액세스하는 코드를 중앙화하여 관리할 수 있고, 특정 데이터베이스에 코드가 종속되지 않도록 할 수 있다.
예를 들면 한 클라우드에서 다른 클라우드로 마이그레이션하는 경우 데이터베이스 설정이 약간 달라질 수 있다. 이를테면 한 MySQL에서 NoSQL로 이동하는 경우이다.
이 경우 시스템의 일부분만, 즉 레포지토리 계층만 다시 설계하면 된다.`),Ns=k(),dn=o("p"),kt=u(`일부 개발자는 다른 채널(CQRS: Command Query Responsibility Segregation 등)을 통해 데이터베이스에 쿼리를 보내는 것을 선호한다.
이는 쿼리가 데이터베이스의 상태를 변경하면 안되기 때문에 작동하지만, 이제 막 시작하는 경우라면 데이터베이스와의 모든 상호작용이 레포지토리 계층에서 일어나게 하는 것이 좋다.`),Os=k(),wn=o("p"),rt=u("레포지토리 계층에서 테이블 하나당 한 개의 구조체를 만드는 경우가 많은데, 그보단 애그리거트당 하나의 구조체를 만드는 것이 더 좋다. 다음 그림을 보자."),js=k(),A=o("h3"),N=o("a"),qn=o("span"),ft=u("그림"),Hs=k(),yn=o("p"),mt=u(`위 그림에서 데이터베이스 테이블과 레포지토리 계층의 명확한 차이를 볼 수 있다. 주목할 부분은 레포지토리 계층에서 한 개 이상의 테이블을 사용할 수 있다는 것이다.
또한, 도메인 레이어는 레포지토리 레이어와 디커플링되어 있다.
DDD를 사용한다면 위와 같은 시스템을 구축하는 것이 좋다.`),Us=k(),Ls=o("br"),Ks=k(),vn=o("p"),bt=u("이전 장의 예약 시스템 예제에서 계속하여, 미용실 예약 정보를 데이터베이스에 저장하려 한다. 먼저 레포지토리 계층에 해당하는 인터페이스를 정의한다."),Fs=k(),an=o("pre"),Qs=k(),O=o("p"),dt=u("이 인터페이스는 "),Wn=o("code"),wt=u("Booking"),yt=u(" 팩토리 및 서비스 계층과 같은 계층에 정의되었는데, 그 이유는 다음 장에서 설명한다."),qs=k(),En=o("p"),vt=u("PostgreSQL 데이터베이스를 위한 간단한 레포지토리 레이어를 구현해보자."),Ws=k(),C(j.$$.fragment),Gs=k(),_n=o("p"),Et=u(`코드에서 볼 수 있듯, 데이터베이스와 상호작용하는 것은 꽤 간단하며, 도메인 로직이 들어가지 않는다.
도메인 로직은 애플리케이션 서비스 계층에 들어가며, 애플리케이션 서비스 계층은 다음 장에서 다룬다.`),zs=k(),Vs=o("br"),Zs=o("br"),Js=k(),H=o("h2"),U=o("a"),Gn=o("span"),_t=u("서비스 계층"),Xs=k(),Ys=o("hr"),na=k(),$n=o("p"),$t=u(`DDD에서 코드를 조직화하기 위해 몇 가지 종류의 서비스를 사용한다.
각각 애플리케이션 서비스, 도메인 서비스, 인프라스트럭처 서비스이다.`),sa=k(),aa=o("br"),ta=k(),L=o("h3"),K=o("a"),zn=o("span"),Ct=u("도메인 서비스"),pa=k(),Cn=o("p"),gt=u(`도메인 서비스는 도메인 내에서 특정 작업을 수행하는 stateless한 연산이다.
엔티티 혹은 밸류 오브젝트로 모델링하는 좋은 방법을 찾을 수 없는 프로세스가 있을 때가 있는데, 이 경우 도메인 서비스를 사용하면 좋다`),oa=k(),gn=o("p"),St=u("도메인 서비스의 규칙을 정의하기는 좀 애매한 감이 있지만, 주의해야 할 점이 있다."),ea=k(),_=o("ul"),Vn=o("li"),Bt=u("작성되는 코드는 한 도메인 내에서 중요한 비즈니스 로직을 수행해야 한다."),xt=k(),Zn=o("li"),Dt=u("한 도메인 객체를 다른 도메인 객체로 변환한다."),Pt=k(),Jn=o("li"),Rt=u("값을 계산하기 위해 두 개 이상의 도메인 객체의 속성을 사용한다."),ca=k(),Sn=o("p"),It=u("서비스는 DDD의 다른 모든 요소들과 마찬가지로 제한된 컨텍스트 안에서 유비쿼터스 언어를 통해 표현되어야 한다."),la=k(),Bn=o("p"),Tt=u("서비스가 유용하게 쓰일 수 있는 예제를 살펴보자. 엔티티 내에 이런 코드가 있다고 가정해보자."),ua=k(),C(F.$$.fragment),ia=k(),$=o("p"),ht=u(`괜찮아 보이는 코드지만 문제가 있다.
`),Xn=o("code"),Mt=u("ShoppingCart"),At=u("의 구현에서 다른 엔티티를 참조하고 있고, 실제로 "),Yn=o("code"),Nt=u("ShoppingCart"),Ot=u(`에 속하지 않는 비즈니스 로직이 포함되어 있다.
이런 문제를 해결하기 위해 도메인 서비스를 사용할 수 있다.`),ka=k(),C(Q.$$.fragment),ra=k(),q=o("p"),jt=u(`두 엔티티에 모두 접근할 수 있는 도메인 로직이 도메인 서비스에 작성되었다.
이를 통해, `),ns=o("code"),Ht=u("CheckOutService"),Ut=u(`에서 더 많은 엔티티를 참조하고자 할 때 더 유용해질 것이다.
단일 도메인 서비스에 이러한 로직이 있기 때문에, 다른 클라이언트에서 우리의 동작을 구현하려는 경우 이 서비스를 사용할 수 있으며, 비즈니스 불변성이 유지된다.`),fa=k(),xn=o("p"),Lt=u(`도메인 서비스는 stateless하게 도메인 로직을 구성해야 하는 경우에 유용하다.
하지만 stateful한 로직을 구성해야 하는 경우에는 애플리케이션 서비스를 사용해야 한다.`),ma=k(),ba=o("br"),da=k(),W=o("h3"),G=o("a"),ss=o("span"),Kt=u("애플리케이션 서비스"),wa=k(),Dn=o("p"),Ft=u(`애플리케이션 서비스는 다른 서비스 및 레포지토리를 구성하는 데 사용되며, 여러 모달 사이에서 트랜잭션을 관리한다.
다만 도메인 로직은 애플리케이션 서비스가 아니라 도메인 서비스에 작성되어야 한다.`),ya=k(),Pn=o("p"),Qt=u("어플리케이션 서비스는 보통 그렇게 길지 않다. 일반적으로 트랜잭션 등 조정을 위해 사용되며, 다른 로직은 어플리케이션 레이어 밑으로 내려가야 한다. 또한 보한 문제를 해결하기도 한다."),va=k(),Rn=o("p"),qt=u("예약 예제를 통해 애플리케이션 서비스를 살펴보자."),Ea=k(),C(z.$$.fragment),_a=k(),In=o("p"),Wt=u(`위 코드에서는 기본적인 인증을 수행하고, 도메인 레이어와 레포지토리 레이어로 애플리케이션 서비스를 구성한다.
이런 예제의 경우에서라면 애플리케이션 서비스가 여러 도메인에 걸쳐 있지 않기 때문에 영속성을 도메인 서비스에서 건드리는 것도 괜찮다.
이 코드가 실행되면 새로운 예약이 생성되고 저장된다.`),$a=k(),Tn=o("p"),Gt=u("UI는 여러 도메인 서비스를 통해 구성될 필요가 있는데, 이런 측면에서 애플리케이션 서비스가 잘 어울린다."),Ca=k(),ga=o("br"),Sa=k(),hn=o("p"),zt=u(`대부분의 최신 웹 앱은 결제, 이메인 전송, 유저 행동 추적 등의 역할을 수행한다.
이러한 기능들은 도메인에 포함되지는 않지만 여전히 애플리케이션에 포함되어야 한다.
이러한 경우 인프라스트럭처 레이어를 사용하여, 애플리케이션 서비스나 도메인 서비스에 추가할 수 있다.`),Ba=k(),Mn=o("p"),Vt=u("가령 이메일 인프라스트럭처 서비스는 다음과 같이 구현될 수 있다."),xa=k(),C(V.$$.fragment),Da=k(),An=o("p"),Zt=u("이와 같이 인프라스트럭처 레이어를 구성하면, 애플리케이션 서비스에서 다음과 같이 사용할 수 있다."),Pa=k(),C(Z.$$.fragment),Ra=k(),J=o("p"),Jt=u("이제 애플리케이션 서비스의 "),as=o("code"),Xt=u("CreateBooking"),Yt=u(" 함수가 호출되면 예약을 생성하고, 데이터베이스에 저장하는 것 뿐만 아니라 이메일을 유저에게 보낼 것이다."),Ia=k(),Ta=o("br"),ha=o("br"),Ma=k(),X=o("h2"),Y=o("a"),ts=o("span"),np=u("References"),Aa=k(),Na=o("hr"),Oa=k(),E=o("center"),ps=o("p"),sp=u("["),ap=k(),C(tn.$$.fragment),tp=u(`
](https://learning.oreilly.com/library/view/domain-driven-design-with/9781804613450/) `),pp=o("br"),op=u(`
[Matthew Boyle, Domain-Driven Design with Golang』, O'Reilly Media, Inc.](https://learning.oreilly.com/library/view/domain-driven-design-with/9781804613450/)`),this.h()},l(n){l=e(n,"H2",{id:!0});var a=c(l);d=e(a,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var os=c(d);f=e(os,"SPAN",{class:!0}),c(f).forEach(s),os.forEach(s),b=i(a,"팩토리 패턴"),a.forEach(s),rs=r(n),fs=e(n,"HR",{}),ms=r(n),on=e(n,"P",{});var es=c(on);Ka=i(es,`팩토리 패턴은 주로 객체지향 프로그래밍에서 찾아볼 수 있으며, 다른 오브젝트를 생성하는 주된 책임을 가지고 있는 개체로 정의된다.
객체의 기본 속성을 설정하는 데 유용하며, 일반적으로 객체의 생성 외에 다른 목적을 가지면 안된다.`),es.forEach(s),bs=r(n),en=e(n,"P",{});var cs=c(en);Fa=i(cs,`Go는 객체지향 언어가 아님에도 팩토리 패턴은 꽤 유용하다.
아래 예제는 팩토리 패턴의 간단한 예제이다.`),cs.forEach(s),ds=r(n),g(P.$$.fragment,n),ws=r(n),y=e(n,"P",{});var v=c(y);Qa=i(v,"위 예제에서는 "),jn=e(v,"CODE",{});var ls=c(jn);qa=i(ls,"Car"),ls.forEach(s),Wa=i(v," 인터페이스를 충족하는 "),Hn=e(v,"CODE",{});var us=c(Hn);Ga=i(us,"BMW"),us.forEach(s),za=i(v,"와 "),Un=e(v,"CODE",{});var is=c(Un);Va=i(is,"Tesla"),is.forEach(s),Za=i(v," 구조체를 정의하였고, "),Ln=e(v,"CODE",{});var ks=c(Ln);Ja=i(ks,"Car"),ks.forEach(s),Xa=i(v," 오브젝트의 필드값을 초기화하여 반환하는 팩토리 함수 "),Kn=e(v,"CODE",{});var fp=c(Kn);Ya=i(fp,"BuildCar"),fp.forEach(s),nt=i(v,`를 정의하였다.
또한, 자동차의 타입이 유효하지 않을 경우 에러를 반환한다.`),v.forEach(s),ys=r(n),cn=e(n,"P",{});var mp=c(cn);st=i(mp,`팩토리 패턴은 복잡한 구조체의 생성을 표준화하는 좋은 방법이며, 애플리케이션이 복잡해질 수록 유용하다.
또한 팩토리를 통해 Encapsulation을 달성할 수 있고, 객체 생성시 비즈니스 불변성을 적용하여 도메인 모델을 단순화할 수 있다.`),mp.forEach(s),vs=r(n),ln=e(n,"P",{});var bp=c(ln);at=i(bp,`가령 미용실 예약 시스템을 구현한다고 가정해보자.
누군가 업무 시간이 지나고 예약하려 하는 경우, 다음과 같이 팩토리 함수를 통해 예외를 발생시킬 수 있다.`),bp.forEach(s),Es=r(n),g(R.$$.fragment,n),_s=r(n),un=e(n,"P",{});var dp=c(un);tt=i(dp,"위 예제는 엔티티를 생성하는 팩토리 함수를 보여주며, 엔티티의 식별자는 팩토리에서 생성된다."),dp.forEach(s),$s=r(n),kn=e(n,"P",{});var wp=c(kn);pt=i(wp,"엔티티 팩토리에 대헤 조금 더 살펴보자."),wp.forEach(s),Cs=r(n),gs=e(n,"BR",{}),Ss=r(n),I=e(n,"H3",{id:!0});var ep=c(I);T=e(ep,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var yp=c(T);Fn=e(yp,"SPAN",{class:!0}),c(Fn).forEach(s),yp.forEach(s),ot=i(ep,"엔티티 팩토리"),ep.forEach(s),Bs=r(n),rn=e(n,"P",{});var vp=c(rn);et=i(vp,`앞선 포스트에서 설명하였듯 엔티티에는 식별자가 있고, 인스턴스화하기 위한 최소한의 요구사항이 존재한다.
따라서 팩토리를 만들 때 이러한 요구사항을 충족시켜야 하며, 다른 속성을 설정하려는 경우 이를 위한 다른 함수를 제공할 수 있다.`),vp.forEach(s),xs=r(n),fn=e(n,"P",{});var Ep=c(fn);ct=i(Ep,`엔티티 팩토리 함수를 만들 때는 팩토리 함수가 식별자를 생성할지, 아니면 파라미터로 받을지 결정해야 한다.
둘 다 가능하지만, 되도록이면 식별자를 팩토리 함수에서 생성하는 것이 더 좋은 방법이다.`),Ep.forEach(s),Ds=r(n),Ps=e(n,"BR",{}),Rs=e(n,"BR",{}),Is=r(n),h=e(n,"H2",{id:!0});var cp=c(h);M=e(cp,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var _p=c(M);Qn=e(_p,"SPAN",{class:!0}),c(Qn).forEach(s),_p.forEach(s),lt=i(cp,"레포지토리 패턴"),cp.forEach(s),Ts=r(n),hs=e(n,"HR",{}),Ms=r(n),mn=e(n,"P",{});var $p=c(mn);ut=i($p,`레포지토리 패턴은 데이터 저장소에 접근하기 위해 필요한 코드의 일부이다.
데이터 저장소는 파일 시스템, 메모리, 스프레드시트, S3 등이 있을 수 있으나, 대부분의 프로젝트에서는 데이터베이스에 해당한다.`),$p.forEach(s),As=r(n),bn=e(n,"P",{});var Cp=c(bn);it=i(Cp,`레포지토리 계층을 사용함으로써 데이터에 액세스하는 코드를 중앙화하여 관리할 수 있고, 특정 데이터베이스에 코드가 종속되지 않도록 할 수 있다.
예를 들면 한 클라우드에서 다른 클라우드로 마이그레이션하는 경우 데이터베이스 설정이 약간 달라질 수 있다. 이를테면 한 MySQL에서 NoSQL로 이동하는 경우이다.
이 경우 시스템의 일부분만, 즉 레포지토리 계층만 다시 설계하면 된다.`),Cp.forEach(s),Ns=r(n),dn=e(n,"P",{});var gp=c(dn);kt=i(gp,`일부 개발자는 다른 채널(CQRS: Command Query Responsibility Segregation 등)을 통해 데이터베이스에 쿼리를 보내는 것을 선호한다.
이는 쿼리가 데이터베이스의 상태를 변경하면 안되기 때문에 작동하지만, 이제 막 시작하는 경우라면 데이터베이스와의 모든 상호작용이 레포지토리 계층에서 일어나게 하는 것이 좋다.`),gp.forEach(s),Os=r(n),wn=e(n,"P",{});var Sp=c(wn);rt=i(Sp,"레포지토리 계층에서 테이블 하나당 한 개의 구조체를 만드는 경우가 많은데, 그보단 애그리거트당 하나의 구조체를 만드는 것이 더 좋다. 다음 그림을 보자."),Sp.forEach(s),js=r(n),A=e(n,"H3",{id:!0});var lp=c(A);N=e(lp,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Bp=c(N);qn=e(Bp,"SPAN",{class:!0}),c(qn).forEach(s),Bp.forEach(s),ft=i(lp,"그림"),lp.forEach(s),Hs=r(n),yn=e(n,"P",{});var xp=c(yn);mt=i(xp,`위 그림에서 데이터베이스 테이블과 레포지토리 계층의 명확한 차이를 볼 수 있다. 주목할 부분은 레포지토리 계층에서 한 개 이상의 테이블을 사용할 수 있다는 것이다.
또한, 도메인 레이어는 레포지토리 레이어와 디커플링되어 있다.
DDD를 사용한다면 위와 같은 시스템을 구축하는 것이 좋다.`),xp.forEach(s),Us=r(n),Ls=e(n,"BR",{}),Ks=r(n),vn=e(n,"P",{});var Dp=c(vn);bt=i(Dp,"이전 장의 예약 시스템 예제에서 계속하여, 미용실 예약 정보를 데이터베이스에 저장하려 한다. 먼저 레포지토리 계층에 해당하는 인터페이스를 정의한다."),Dp.forEach(s),Fs=r(n),an=e(n,"PRE",{class:!0});var oo=c(an);oo.forEach(s),Qs=r(n),O=e(n,"P",{});var Ha=c(O);dt=i(Ha,"이 인터페이스는 "),Wn=e(Ha,"CODE",{});var Pp=c(Wn);wt=i(Pp,"Booking"),Pp.forEach(s),yt=i(Ha," 팩토리 및 서비스 계층과 같은 계층에 정의되었는데, 그 이유는 다음 장에서 설명한다."),Ha.forEach(s),qs=r(n),En=e(n,"P",{});var Rp=c(En);vt=i(Rp,"PostgreSQL 데이터베이스를 위한 간단한 레포지토리 레이어를 구현해보자."),Rp.forEach(s),Ws=r(n),g(j.$$.fragment,n),Gs=r(n),_n=e(n,"P",{});var Ip=c(_n);Et=i(Ip,`코드에서 볼 수 있듯, 데이터베이스와 상호작용하는 것은 꽤 간단하며, 도메인 로직이 들어가지 않는다.
도메인 로직은 애플리케이션 서비스 계층에 들어가며, 애플리케이션 서비스 계층은 다음 장에서 다룬다.`),Ip.forEach(s),zs=r(n),Vs=e(n,"BR",{}),Zs=e(n,"BR",{}),Js=r(n),H=e(n,"H2",{id:!0});var up=c(H);U=e(up,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Tp=c(U);Gn=e(Tp,"SPAN",{class:!0}),c(Gn).forEach(s),Tp.forEach(s),_t=i(up,"서비스 계층"),up.forEach(s),Xs=r(n),Ys=e(n,"HR",{}),na=r(n),$n=e(n,"P",{});var hp=c($n);$t=i(hp,`DDD에서 코드를 조직화하기 위해 몇 가지 종류의 서비스를 사용한다.
각각 애플리케이션 서비스, 도메인 서비스, 인프라스트럭처 서비스이다.`),hp.forEach(s),sa=r(n),aa=e(n,"BR",{}),ta=r(n),L=e(n,"H3",{id:!0});var ip=c(L);K=e(ip,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Mp=c(K);zn=e(Mp,"SPAN",{class:!0}),c(zn).forEach(s),Mp.forEach(s),Ct=i(ip,"도메인 서비스"),ip.forEach(s),pa=r(n),Cn=e(n,"P",{});var Ap=c(Cn);gt=i(Ap,`도메인 서비스는 도메인 내에서 특정 작업을 수행하는 stateless한 연산이다.
엔티티 혹은 밸류 오브젝트로 모델링하는 좋은 방법을 찾을 수 없는 프로세스가 있을 때가 있는데, 이 경우 도메인 서비스를 사용하면 좋다`),Ap.forEach(s),oa=r(n),gn=e(n,"P",{});var Np=c(gn);St=i(Np,"도메인 서비스의 규칙을 정의하기는 좀 애매한 감이 있지만, 주의해야 할 점이 있다."),Np.forEach(s),ea=r(n),_=e(n,"UL",{});var Nn=c(_);Vn=e(Nn,"LI",{});var Op=c(Vn);Bt=i(Op,"작성되는 코드는 한 도메인 내에서 중요한 비즈니스 로직을 수행해야 한다."),Op.forEach(s),xt=r(Nn),Zn=e(Nn,"LI",{});var jp=c(Zn);Dt=i(jp,"한 도메인 객체를 다른 도메인 객체로 변환한다."),jp.forEach(s),Pt=r(Nn),Jn=e(Nn,"LI",{});var Hp=c(Jn);Rt=i(Hp,"값을 계산하기 위해 두 개 이상의 도메인 객체의 속성을 사용한다."),Hp.forEach(s),Nn.forEach(s),ca=r(n),Sn=e(n,"P",{});var Up=c(Sn);It=i(Up,"서비스는 DDD의 다른 모든 요소들과 마찬가지로 제한된 컨텍스트 안에서 유비쿼터스 언어를 통해 표현되어야 한다."),Up.forEach(s),la=r(n),Bn=e(n,"P",{});var Lp=c(Bn);Tt=i(Lp,"서비스가 유용하게 쓰일 수 있는 예제를 살펴보자. 엔티티 내에 이런 코드가 있다고 가정해보자."),Lp.forEach(s),ua=r(n),g(F.$$.fragment,n),ia=r(n),$=e(n,"P",{});var On=c($);ht=i(On,`괜찮아 보이는 코드지만 문제가 있다.
`),Xn=e(On,"CODE",{});var Kp=c(Xn);Mt=i(Kp,"ShoppingCart"),Kp.forEach(s),At=i(On,"의 구현에서 다른 엔티티를 참조하고 있고, 실제로 "),Yn=e(On,"CODE",{});var Fp=c(Yn);Nt=i(Fp,"ShoppingCart"),Fp.forEach(s),Ot=i(On,`에 속하지 않는 비즈니스 로직이 포함되어 있다.
이런 문제를 해결하기 위해 도메인 서비스를 사용할 수 있다.`),On.forEach(s),ka=r(n),g(Q.$$.fragment,n),ra=r(n),q=e(n,"P",{});var Ua=c(q);jt=i(Ua,`두 엔티티에 모두 접근할 수 있는 도메인 로직이 도메인 서비스에 작성되었다.
이를 통해, `),ns=e(Ua,"CODE",{});var Qp=c(ns);Ht=i(Qp,"CheckOutService"),Qp.forEach(s),Ut=i(Ua,`에서 더 많은 엔티티를 참조하고자 할 때 더 유용해질 것이다.
단일 도메인 서비스에 이러한 로직이 있기 때문에, 다른 클라이언트에서 우리의 동작을 구현하려는 경우 이 서비스를 사용할 수 있으며, 비즈니스 불변성이 유지된다.`),Ua.forEach(s),fa=r(n),xn=e(n,"P",{});var qp=c(xn);Lt=i(qp,`도메인 서비스는 stateless하게 도메인 로직을 구성해야 하는 경우에 유용하다.
하지만 stateful한 로직을 구성해야 하는 경우에는 애플리케이션 서비스를 사용해야 한다.`),qp.forEach(s),ma=r(n),ba=e(n,"BR",{}),da=r(n),W=e(n,"H3",{id:!0});var kp=c(W);G=e(kp,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Wp=c(G);ss=e(Wp,"SPAN",{class:!0}),c(ss).forEach(s),Wp.forEach(s),Kt=i(kp,"애플리케이션 서비스"),kp.forEach(s),wa=r(n),Dn=e(n,"P",{});var Gp=c(Dn);Ft=i(Gp,`애플리케이션 서비스는 다른 서비스 및 레포지토리를 구성하는 데 사용되며, 여러 모달 사이에서 트랜잭션을 관리한다.
다만 도메인 로직은 애플리케이션 서비스가 아니라 도메인 서비스에 작성되어야 한다.`),Gp.forEach(s),ya=r(n),Pn=e(n,"P",{});var zp=c(Pn);Qt=i(zp,"어플리케이션 서비스는 보통 그렇게 길지 않다. 일반적으로 트랜잭션 등 조정을 위해 사용되며, 다른 로직은 어플리케이션 레이어 밑으로 내려가야 한다. 또한 보한 문제를 해결하기도 한다."),zp.forEach(s),va=r(n),Rn=e(n,"P",{});var Vp=c(Rn);qt=i(Vp,"예약 예제를 통해 애플리케이션 서비스를 살펴보자."),Vp.forEach(s),Ea=r(n),g(z.$$.fragment,n),_a=r(n),In=e(n,"P",{});var Zp=c(In);Wt=i(Zp,`위 코드에서는 기본적인 인증을 수행하고, 도메인 레이어와 레포지토리 레이어로 애플리케이션 서비스를 구성한다.
이런 예제의 경우에서라면 애플리케이션 서비스가 여러 도메인에 걸쳐 있지 않기 때문에 영속성을 도메인 서비스에서 건드리는 것도 괜찮다.
이 코드가 실행되면 새로운 예약이 생성되고 저장된다.`),Zp.forEach(s),$a=r(n),Tn=e(n,"P",{});var Jp=c(Tn);Gt=i(Jp,"UI는 여러 도메인 서비스를 통해 구성될 필요가 있는데, 이런 측면에서 애플리케이션 서비스가 잘 어울린다."),Jp.forEach(s),Ca=r(n),ga=e(n,"BR",{}),Sa=r(n),hn=e(n,"P",{});var Xp=c(hn);zt=i(Xp,`대부분의 최신 웹 앱은 결제, 이메인 전송, 유저 행동 추적 등의 역할을 수행한다.
이러한 기능들은 도메인에 포함되지는 않지만 여전히 애플리케이션에 포함되어야 한다.
이러한 경우 인프라스트럭처 레이어를 사용하여, 애플리케이션 서비스나 도메인 서비스에 추가할 수 있다.`),Xp.forEach(s),Ba=r(n),Mn=e(n,"P",{});var Yp=c(Mn);Vt=i(Yp,"가령 이메일 인프라스트럭처 서비스는 다음과 같이 구현될 수 있다."),Yp.forEach(s),xa=r(n),g(V.$$.fragment,n),Da=r(n),An=e(n,"P",{});var no=c(An);Zt=i(no,"이와 같이 인프라스트럭처 레이어를 구성하면, 애플리케이션 서비스에서 다음과 같이 사용할 수 있다."),no.forEach(s),Pa=r(n),g(Z.$$.fragment,n),Ra=r(n),J=e(n,"P",{});var La=c(J);Jt=i(La,"이제 애플리케이션 서비스의 "),as=e(La,"CODE",{});var so=c(as);Xt=i(so,"CreateBooking"),so.forEach(s),Yt=i(La," 함수가 호출되면 예약을 생성하고, 데이터베이스에 저장하는 것 뿐만 아니라 이메일을 유저에게 보낼 것이다."),La.forEach(s),Ia=r(n),Ta=e(n,"BR",{}),ha=e(n,"BR",{}),Ma=r(n),X=e(n,"H2",{id:!0});var rp=c(X);Y=e(rp,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ao=c(Y);ts=e(ao,"SPAN",{class:!0}),c(ts).forEach(s),ao.forEach(s),np=i(rp,"References"),rp.forEach(s),Aa=r(n),Na=e(n,"HR",{}),Oa=r(n),E=e(n,"CENTER",{});var pn=c(E);ps=e(pn,"P",{});var to=c(ps);sp=i(to,"["),to.forEach(s),ap=r(pn),g(tn.$$.fragment,pn),tp=i(pn,`
](https://learning.oreilly.com/library/view/domain-driven-design-with/9781804613450/) `),pp=e(pn,"BR",{}),op=i(pn,`
[Matthew Boyle, Domain-Driven Design with Golang』, O'Reilly Media, Inc.](https://learning.oreilly.com/library/view/domain-driven-design-with/9781804613450/)`),pn.forEach(s),this.h()},h(){m(f,"class","icon icon-link"),m(d,"aria-hidden","true"),m(d,"tabindex","-1"),m(d,"href","#팩토리-패턴"),m(l,"id","팩토리-패턴"),m(Fn,"class","icon icon-link"),m(T,"aria-hidden","true"),m(T,"tabindex","-1"),m(T,"href","#엔티티-팩토리"),m(I,"id","엔티티-팩토리"),m(Qn,"class","icon icon-link"),m(M,"aria-hidden","true"),m(M,"tabindex","-1"),m(M,"href","#레포지토리-패턴"),m(h,"id","레포지토리-패턴"),m(qn,"class","icon icon-link"),m(N,"aria-hidden","true"),m(N,"tabindex","-1"),m(N,"href","#그림"),m(A,"id","그림"),m(an,"class","language-go"),m(Gn,"class","icon icon-link"),m(U,"aria-hidden","true"),m(U,"tabindex","-1"),m(U,"href","#서비스-계층"),m(H,"id","서비스-계층"),m(zn,"class","icon icon-link"),m(K,"aria-hidden","true"),m(K,"tabindex","-1"),m(K,"href","#도메인-서비스"),m(L,"id","도메인-서비스"),m(ss,"class","icon icon-link"),m(G,"aria-hidden","true"),m(G,"tabindex","-1"),m(G,"href","#애플리케이션-서비스"),m(W,"id","애플리케이션-서비스"),m(ts,"class","icon icon-link"),m(Y,"aria-hidden","true"),m(Y,"tabindex","-1"),m(Y,"href","#references"),m(X,"id","references")},m(n,a){t(n,l,a),p(l,d),p(d,f),p(l,b),t(n,rs,a),t(n,fs,a),t(n,ms,a),t(n,on,a),p(on,Ka),t(n,bs,a),t(n,en,a),p(en,Fa),t(n,ds,a),S(P,n,a),t(n,ws,a),t(n,y,a),p(y,Qa),p(y,jn),p(jn,qa),p(y,Wa),p(y,Hn),p(Hn,Ga),p(y,za),p(y,Un),p(Un,Va),p(y,Za),p(y,Ln),p(Ln,Ja),p(y,Xa),p(y,Kn),p(Kn,Ya),p(y,nt),t(n,ys,a),t(n,cn,a),p(cn,st),t(n,vs,a),t(n,ln,a),p(ln,at),t(n,Es,a),S(R,n,a),t(n,_s,a),t(n,un,a),p(un,tt),t(n,$s,a),t(n,kn,a),p(kn,pt),t(n,Cs,a),t(n,gs,a),t(n,Ss,a),t(n,I,a),p(I,T),p(T,Fn),p(I,ot),t(n,Bs,a),t(n,rn,a),p(rn,et),t(n,xs,a),t(n,fn,a),p(fn,ct),t(n,Ds,a),t(n,Ps,a),t(n,Rs,a),t(n,Is,a),t(n,h,a),p(h,M),p(M,Qn),p(h,lt),t(n,Ts,a),t(n,hs,a),t(n,Ms,a),t(n,mn,a),p(mn,ut),t(n,As,a),t(n,bn,a),p(bn,it),t(n,Ns,a),t(n,dn,a),p(dn,kt),t(n,Os,a),t(n,wn,a),p(wn,rt),t(n,js,a),t(n,A,a),p(A,N),p(N,qn),p(A,ft),t(n,Hs,a),t(n,yn,a),p(yn,mt),t(n,Us,a),t(n,Ls,a),t(n,Ks,a),t(n,vn,a),p(vn,bt),t(n,Fs,a),t(n,an,a),an.innerHTML=po,t(n,Qs,a),t(n,O,a),p(O,dt),p(O,Wn),p(Wn,wt),p(O,yt),t(n,qs,a),t(n,En,a),p(En,vt),t(n,Ws,a),S(j,n,a),t(n,Gs,a),t(n,_n,a),p(_n,Et),t(n,zs,a),t(n,Vs,a),t(n,Zs,a),t(n,Js,a),t(n,H,a),p(H,U),p(U,Gn),p(H,_t),t(n,Xs,a),t(n,Ys,a),t(n,na,a),t(n,$n,a),p($n,$t),t(n,sa,a),t(n,aa,a),t(n,ta,a),t(n,L,a),p(L,K),p(K,zn),p(L,Ct),t(n,pa,a),t(n,Cn,a),p(Cn,gt),t(n,oa,a),t(n,gn,a),p(gn,St),t(n,ea,a),t(n,_,a),p(_,Vn),p(Vn,Bt),p(_,xt),p(_,Zn),p(Zn,Dt),p(_,Pt),p(_,Jn),p(Jn,Rt),t(n,ca,a),t(n,Sn,a),p(Sn,It),t(n,la,a),t(n,Bn,a),p(Bn,Tt),t(n,ua,a),S(F,n,a),t(n,ia,a),t(n,$,a),p($,ht),p($,Xn),p(Xn,Mt),p($,At),p($,Yn),p(Yn,Nt),p($,Ot),t(n,ka,a),S(Q,n,a),t(n,ra,a),t(n,q,a),p(q,jt),p(q,ns),p(ns,Ht),p(q,Ut),t(n,fa,a),t(n,xn,a),p(xn,Lt),t(n,ma,a),t(n,ba,a),t(n,da,a),t(n,W,a),p(W,G),p(G,ss),p(W,Kt),t(n,wa,a),t(n,Dn,a),p(Dn,Ft),t(n,ya,a),t(n,Pn,a),p(Pn,Qt),t(n,va,a),t(n,Rn,a),p(Rn,qt),t(n,Ea,a),S(z,n,a),t(n,_a,a),t(n,In,a),p(In,Wt),t(n,$a,a),t(n,Tn,a),p(Tn,Gt),t(n,Ca,a),t(n,ga,a),t(n,Sa,a),t(n,hn,a),p(hn,zt),t(n,Ba,a),t(n,Mn,a),p(Mn,Vt),t(n,xa,a),S(V,n,a),t(n,Da,a),t(n,An,a),p(An,Zt),t(n,Pa,a),S(Z,n,a),t(n,Ra,a),t(n,J,a),p(J,Jt),p(J,as),p(as,Xt),p(J,Yt),t(n,Ia,a),t(n,Ta,a),t(n,ha,a),t(n,Ma,a),t(n,X,a),p(X,Y),p(Y,ts),p(X,np),t(n,Aa,a),t(n,Na,a),t(n,Oa,a),t(n,E,a),p(E,ps),p(ps,sp),p(E,ap),S(tn,E,null),p(E,tp),p(E,pp),p(E,op),ja=!0},p(n,[a]){const os={};a&1&&(os.$$scope={dirty:a,ctx:n}),P.$set(os);const es={};a&1&&(es.$$scope={dirty:a,ctx:n}),R.$set(es);const cs={};a&1&&(cs.$$scope={dirty:a,ctx:n}),j.$set(cs);const v={};a&1&&(v.$$scope={dirty:a,ctx:n}),F.$set(v);const ls={};a&1&&(ls.$$scope={dirty:a,ctx:n}),Q.$set(ls);const us={};a&1&&(us.$$scope={dirty:a,ctx:n}),z.$set(us);const is={};a&1&&(is.$$scope={dirty:a,ctx:n}),V.$set(is);const ks={};a&1&&(ks.$$scope={dirty:a,ctx:n}),Z.$set(ks)},i(n){ja||(B(P.$$.fragment,n),B(R.$$.fragment,n),B(j.$$.fragment,n),B(F.$$.fragment,n),B(Q.$$.fragment,n),B(z.$$.fragment,n),B(V.$$.fragment,n),B(Z.$$.fragment,n),B(tn.$$.fragment,n),ja=!0)},o(n){x(P.$$.fragment,n),x(R.$$.fragment,n),x(j.$$.fragment,n),x(F.$$.fragment,n),x(Q.$$.fragment,n),x(z.$$.fragment,n),x(V.$$.fragment,n),x(Z.$$.fragment,n),x(tn.$$.fragment,n),ja=!1},d(n){n&&s(l),n&&s(rs),n&&s(fs),n&&s(ms),n&&s(on),n&&s(bs),n&&s(en),n&&s(ds),D(P,n),n&&s(ws),n&&s(y),n&&s(ys),n&&s(cn),n&&s(vs),n&&s(ln),n&&s(Es),D(R,n),n&&s(_s),n&&s(un),n&&s($s),n&&s(kn),n&&s(Cs),n&&s(gs),n&&s(Ss),n&&s(I),n&&s(Bs),n&&s(rn),n&&s(xs),n&&s(fn),n&&s(Ds),n&&s(Ps),n&&s(Rs),n&&s(Is),n&&s(h),n&&s(Ts),n&&s(hs),n&&s(Ms),n&&s(mn),n&&s(As),n&&s(bn),n&&s(Ns),n&&s(dn),n&&s(Os),n&&s(wn),n&&s(js),n&&s(A),n&&s(Hs),n&&s(yn),n&&s(Us),n&&s(Ls),n&&s(Ks),n&&s(vn),n&&s(Fs),n&&s(an),n&&s(Qs),n&&s(O),n&&s(qs),n&&s(En),n&&s(Ws),D(j,n),n&&s(Gs),n&&s(_n),n&&s(zs),n&&s(Vs),n&&s(Zs),n&&s(Js),n&&s(H),n&&s(Xs),n&&s(Ys),n&&s(na),n&&s($n),n&&s(sa),n&&s(aa),n&&s(ta),n&&s(L),n&&s(pa),n&&s(Cn),n&&s(oa),n&&s(gn),n&&s(ea),n&&s(_),n&&s(ca),n&&s(Sn),n&&s(la),n&&s(Bn),n&&s(ua),D(F,n),n&&s(ia),n&&s($),n&&s(ka),D(Q,n),n&&s(ra),n&&s(q),n&&s(fa),n&&s(xn),n&&s(ma),n&&s(ba),n&&s(da),n&&s(W),n&&s(wa),n&&s(Dn),n&&s(ya),n&&s(Pn),n&&s(va),n&&s(Rn),n&&s(Ea),D(z,n),n&&s(_a),n&&s(In),n&&s($a),n&&s(Tn),n&&s(Ca),n&&s(ga),n&&s(Sa),n&&s(hn),n&&s(Ba),n&&s(Mn),n&&s(xa),D(V,n),n&&s(Da),n&&s(An),n&&s(Pa),D(Z,n),n&&s(Ra),n&&s(J),n&&s(Ia),n&&s(Ta),n&&s(ha),n&&s(Ma),n&&s(X),n&&s(Aa),n&&s(Na),n&&s(Oa),n&&s(E),D(tn)}}}const Co={title:"팩토리, 레포지토리, 서비스",date:"2023-07-16T00:00:00.000Z",excerpt:"Factories, Repositories, and Services",categories:["Golang","Backend","Architecture","Domain Driven Design"],coverImage:"/post_img/Backend/Architecture/DDD/cover.png",coverWidth:16,coverHeight:9,indexed:!1,exposed:!0};class go extends eo{constructor(l){super(),co(this,l,null,vo,lo,{})}}export{go as default,Co as metadata};
