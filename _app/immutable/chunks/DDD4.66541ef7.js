import{S as io,i as ko,s as ro,k as o,q as k,a as u,y as z,l as e,m as c,h as s,r,c as i,z as V,n as f,U as fo,b as t,E as p,A as Z,g as J,d as X,B as Y,M as sn}from"./index.d78780bf.js";import{C as nn}from"./CodeBlockWrapper.9fa2b505.js";function bo(w){let l,d=`<code class="language-go"><span class="token keyword">package</span> chapter4

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
<span class="token punctuation">&#125;</span></code>`;return{c(){l=o("pre"),this.h()},l(b){l=e(b,"PRE",{class:!0});var m=c(l);m.forEach(s),this.h()},h(){f(l,"class","language-go")},m(b,m){t(b,l,m),l.innerHTML=d},p:sn,d(b){b&&s(l)}}}function mo(w){let l,d=`<code class="language-go"><span class="token keyword">package</span> chapter4

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
</code>`;return{c(){l=o("pre"),this.h()},l(b){l=e(b,"PRE",{class:!0});var m=c(l);m.forEach(s),this.h()},h(){f(l,"class","language-go")},m(b,m){t(b,l,m),l.innerHTML=d},p:sn,d(b){b&&s(l)}}}function wo(w){let l,d=`<code class="language-go"><span class="token keyword">package</span> chapter4

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
<span class="token punctuation">&#125;</span></code>`;return{c(){l=o("pre"),this.h()},l(b){l=e(b,"PRE",{class:!0});var m=c(l);m.forEach(s),this.h()},h(){f(l,"class","language-go")},m(b,m){t(b,l,m),l.innerHTML=d},p:sn,d(b){b&&s(l)}}}function yo(w){let l,d=`<code class="language-go"><span class="token keyword">package</span> chapter4

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
<span class="token punctuation">&#125;</span></code>`;return{c(){l=o("pre"),this.h()},l(b){l=e(b,"PRE",{class:!0});var m=c(l);m.forEach(s),this.h()},h(){f(l,"class","language-go")},m(b,m){t(b,l,m),l.innerHTML=d},p:sn,d(b){b&&s(l)}}}function Eo(w){let l,d=`<code class="language-go"><span class="token keyword">package</span> chapter4

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
<span class="token punctuation">&#125;</span></code>`;return{c(){l=o("pre"),this.h()},l(b){l=e(b,"PRE",{class:!0});var m=c(l);m.forEach(s),this.h()},h(){f(l,"class","language-go")},m(b,m){t(b,l,m),l.innerHTML=d},p:sn,d(b){b&&s(l)}}}function _o(w){let l,d=`<code class="language-go"><span class="token keyword">package</span> chapter4

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
<span class="token punctuation">&#125;</span></code>`;return{c(){l=o("pre"),this.h()},l(b){l=e(b,"PRE",{class:!0});var m=c(l);m.forEach(s),this.h()},h(){f(l,"class","language-go")},m(b,m){t(b,l,m),l.innerHTML=d},p:sn,d(b){b&&s(l)}}}function vo(w){let l,d=`<code class="language-go"><span class="token keyword">package</span> chapter4

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
<span class="token punctuation">&#125;</span></code>`;return{c(){l=o("pre"),this.h()},l(b){l=e(b,"PRE",{class:!0});var m=c(l);m.forEach(s),this.h()},h(){f(l,"class","language-go")},m(b,m){t(b,l,m),l.innerHTML=d},p:sn,d(b){b&&s(l)}}}function $o(w){let l,d=`<code class="language-go"><span class="token keyword">type</span> BookingAppService <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
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
<span class="token punctuation">&#125;</span></code>`;return{c(){l=o("pre"),this.h()},l(b){l=e(b,"PRE",{class:!0});var m=c(l);m.forEach(s),this.h()},h(){f(l,"class","language-go")},m(b,m){t(b,l,m),l.innerHTML=d},p:sn,d(b){b&&s(l)}}}function Co(w){let l,d,b,m,bs,ms,ds,on,Qa,ws,en,qa,ys,C,Es,y,Ga,Ln,Wa,za,Kn,Va,Za,Fn,Ja,Xa,Qn,Ya,nt,qn,st,at,_s,cn,tt,vs,ln,pt,$s,g,Cs,un,ot,gs,kn,et,Ss,Bs,xs,S,B,Gn,ct,Ds,rn,lt,Ps,fn,ut,Rs,Ts,Is,hs,x,D,Wn,it,Ms,As,Ns,bn,kt,Os,mn,rt,js,dn,ft,Hs,wn,bt,Us,P,R,zn,mt,Ls,yn,dt,Ks,Fs,Qs,En,wt,qs,an,lo=`<code class="language-go"><span class="token keyword">package</span> chapter4

<span class="token keyword">import</span> <span class="token string">"context"</span>

<span class="token keyword">type</span> BookingRepository <span class="token keyword">interface</span> <span class="token punctuation">&#123;</span>
	<span class="token function">SaveBooking</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> booking Booking<span class="token punctuation">)</span> <span class="token builtin">error</span>
	<span class="token function">DeleteBooking</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> booking Booking<span class="token punctuation">)</span> <span class="token builtin">error</span>
<span class="token punctuation">&#125;</span></code>`,Gs,T,yt,Vn,Et,_t,Ws,_n,vt,zs,I,Vs,vn,$t,Zs,Js,Xs,Ys,h,M,Zn,Ct,na,sa,aa,$n,gt,ta,pa,oa,A,N,Jn,St,ea,Cn,Bt,ca,gn,xt,la,_,Xn,Dt,Pt,Yn,Rt,Tt,ns,It,ua,Sn,ht,ia,Bn,Mt,ka,O,ra,v,At,ss,Nt,Ot,as,jt,Ht,fa,j,ba,H,Ut,ts,Lt,Kt,ma,xn,Ft,da,wa,ya,U,L,ps,Qt,Ea,Dn,qt,_a,Pn,Gt,va,Rn,Wt,$a,K,Ca,Tn,zt,ga,In,Vt,Sa,Ba,xa,hn,Zt,Da,Mn,Jt,Pa,F,Ra,An,Xt,Ta,Q,Ia,q,Yt,os,np,sp,ha,Ma,Aa,Na,G,W,es,ap,Oa,ja,Ha,Nn,$,tn,On,bp,tp,pp,op,pn,ep,Ua;return C=new nn({props:{$$slots:{default:[bo]},$$scope:{ctx:w}}}),g=new nn({props:{$$slots:{default:[mo]},$$scope:{ctx:w}}}),I=new nn({props:{$$slots:{default:[wo]},$$scope:{ctx:w}}}),O=new nn({props:{$$slots:{default:[yo]},$$scope:{ctx:w}}}),j=new nn({props:{$$slots:{default:[Eo]},$$scope:{ctx:w}}}),K=new nn({props:{$$slots:{default:[_o]},$$scope:{ctx:w}}}),F=new nn({props:{$$slots:{default:[vo]},$$scope:{ctx:w}}}),Q=new nn({props:{$$slots:{default:[$o]},$$scope:{ctx:w}}}),{c(){l=o("h2"),d=o("a"),b=o("span"),m=k("팩토리 패턴"),bs=u(),ms=o("hr"),ds=u(),on=o("p"),Qa=k(`팩토리 패턴은 주로 객체지향 프로그래밍에서 찾아볼 수 있으며, 다른 오브젝트를 생성하는 주된 책임을 가지고 있는 개체로 정의된다.
객체의 기본 속성을 설정하는 데 유용하며, 일반적으로 객체의 생성 외에 다른 목적을 가지면 안된다.`),ws=u(),en=o("p"),qa=k(`Go는 객체지향 언어가 아님에도 팩토리 패턴은 꽤 유용하다.
아래 예제는 팩토리 패턴의 간단한 예제이다.`),ys=u(),z(C.$$.fragment),Es=u(),y=o("p"),Ga=k("위 예제에서는 "),Ln=o("code"),Wa=k("Car"),za=k(" 인터페이스를 충족하는 "),Kn=o("code"),Va=k("BMW"),Za=k("와 "),Fn=o("code"),Ja=k("Tesla"),Xa=k(" 구조체를 정의하였고, "),Qn=o("code"),Ya=k("Car"),nt=k(" 오브젝트의 필드값을 초기화하여 반환하는 팩토리 함수 "),qn=o("code"),st=k("BuildCar"),at=k(`를 정의하였다.
또한, 자동차의 타입이 유효하지 않을 경우 에러를 반환한다.`),_s=u(),cn=o("p"),tt=k(`팩토리 패턴은 복잡한 구조체의 생성을 표준화하는 좋은 방법이며, 애플리케이션이 복잡해질 수록 유용하다.
또한 팩토리를 통해 Encapsulation을 달성할 수 있고, 객체 생성시 비즈니스 불변성을 적용하여 도메인 모델을 단순화할 수 있다.`),vs=u(),ln=o("p"),pt=k(`가령 미용실 예약 시스템을 구현한다고 가정해보자.
누군가 업무 시간이 지나고 예약하려 하는 경우, 다음과 같이 팩토리 함수를 통해 예외를 발생시킬 수 있다.`),$s=u(),z(g.$$.fragment),Cs=u(),un=o("p"),ot=k("위 예제는 엔티티를 생성하는 팩토리 함수를 보여주며, 엔티티의 식별자는 팩토리에서 생성된다."),gs=u(),kn=o("p"),et=k("엔티티 팩토리에 대헤 조금 더 살펴보자."),Ss=u(),Bs=o("br"),xs=u(),S=o("h3"),B=o("a"),Gn=o("span"),ct=k("엔티티 팩토리"),Ds=u(),rn=o("p"),lt=k(`앞선 포스트에서 설명하였듯 엔티티에는 식별자가 있고, 인스턴스화하기 위한 최소한의 요구사항이 존재한다.
따라서 팩토리를 만들 때 이러한 요구사항을 충족시켜야 하며, 다른 속성을 설정하려는 경우 이를 위한 다른 함수를 제공할 수 있다.`),Ps=u(),fn=o("p"),ut=k(`엔티티 팩토리 함수를 만들 때는 팩토리 함수가 식별자를 생성할지, 아니면 파라미터로 받을지 결정해야 한다.
둘 다 가능하지만, 되도록이면 식별자를 팩토리 함수에서 생성하는 것이 더 좋은 방법이다.`),Rs=u(),Ts=o("br"),Is=o("br"),hs=u(),x=o("h2"),D=o("a"),Wn=o("span"),it=k("레포지토리 패턴"),Ms=u(),As=o("hr"),Ns=u(),bn=o("p"),kt=k(`레포지토리 패턴은 데이터 저장소에 접근하기 위해 필요한 코드의 일부이다.
데이터 저장소는 파일 시스템, 메모리, 스프레드시트, S3 등이 있을 수 있으나, 대부분의 프로젝트에서는 데이터베이스에 해당한다.`),Os=u(),mn=o("p"),rt=k(`레포지토리 계층을 사용함으로써 데이터에 액세스하는 코드를 중앙화하여 관리할 수 있고, 특정 데이터베이스에 코드가 종속되지 않도록 할 수 있다.
예를 들면 한 클라우드에서 다른 클라우드로 마이그레이션하는 경우 데이터베이스 설정이 약간 달라질 수 있다. 이를테면 한 MySQL에서 NoSQL로 이동하는 경우이다.
이 경우 시스템의 일부분만, 즉 레포지토리 계층만 다시 설계하면 된다.`),js=u(),dn=o("p"),ft=k(`일부 개발자는 다른 채널(CQRS: Command Query Responsibility Segregation 등)을 통해 데이터베이스에 쿼리를 보내는 것을 선호한다.
이는 쿼리가 데이터베이스의 상태를 변경하면 안되기 때문에 작동하지만, 이제 막 시작하는 경우라면 데이터베이스와의 모든 상호작용이 레포지토리 계층에서 일어나게 하는 것이 좋다.`),Hs=u(),wn=o("p"),bt=k("레포지토리 계층에서 테이블 하나당 한 개의 구조체를 만드는 경우가 많은데, 그보단 애그리거트당 하나의 구조체를 만드는 것이 더 좋다. 다음 그림을 보자."),Us=u(),P=o("h3"),R=o("a"),zn=o("span"),mt=k("그림"),Ls=u(),yn=o("p"),dt=k(`위 그림에서 데이터베이스 테이블과 레포지토리 계층의 명확한 차이를 볼 수 있다. 주목할 부분은 레포지토리 계층에서 한 개 이상의 테이블을 사용할 수 있다는 것이다.
또한, 도메인 레이어는 레포지토리 레이어와 디커플링되어 있다.
DDD를 사용한다면 위와 같은 시스템을 구축하는 것이 좋다.`),Ks=u(),Fs=o("br"),Qs=u(),En=o("p"),wt=k("이전 장의 예약 시스템 예제에서 계속하여, 미용실 예약 정보를 데이터베이스에 저장하려 한다. 먼저 레포지토리 계층에 해당하는 인터페이스를 정의한다."),qs=u(),an=o("pre"),Gs=u(),T=o("p"),yt=k("이 인터페이스는 "),Vn=o("code"),Et=k("Booking"),_t=k(" 팩토리 및 서비스 계층과 같은 계층에 정의되었는데, 그 이유는 다음 장에서 설명한다."),Ws=u(),_n=o("p"),vt=k("PostgreSQL 데이터베이스를 위한 간단한 레포지토리 레이어를 구현해보자."),zs=u(),z(I.$$.fragment),Vs=u(),vn=o("p"),$t=k(`코드에서 볼 수 있듯, 데이터베이스와 상호작용하는 것은 꽤 간단하며, 도메인 로직이 들어가지 않는다.
도메인 로직은 애플리케이션 서비스 계층에 들어가며, 애플리케이션 서비스 계층은 다음 장에서 다룬다.`),Zs=u(),Js=o("br"),Xs=o("br"),Ys=u(),h=o("h2"),M=o("a"),Zn=o("span"),Ct=k("서비스 계층"),na=u(),sa=o("hr"),aa=u(),$n=o("p"),gt=k(`DDD에서 코드를 조직화하기 위해 몇 가지 종류의 서비스를 사용한다.
각각 애플리케이션 서비스, 도메인 서비스, 인프라스트럭처 서비스이다.`),ta=u(),pa=o("br"),oa=u(),A=o("h3"),N=o("a"),Jn=o("span"),St=k("도메인 서비스"),ea=u(),Cn=o("p"),Bt=k(`도메인 서비스는 도메인 내에서 특정 작업을 수행하는 stateless한 연산이다.
엔티티 혹은 밸류 오브젝트로 모델링하는 좋은 방법을 찾을 수 없는 프로세스가 있을 때가 있는데, 이 경우 도메인 서비스를 사용하면 좋다`),ca=u(),gn=o("p"),xt=k("도메인 서비스의 규칙을 정의하기는 좀 애매한 감이 있지만, 주의해야 할 점이 있다."),la=u(),_=o("ul"),Xn=o("li"),Dt=k("작성되는 코드는 한 도메인 내에서 중요한 비즈니스 로직을 수행해야 한다."),Pt=u(),Yn=o("li"),Rt=k("한 도메인 객체를 다른 도메인 객체로 변환한다."),Tt=u(),ns=o("li"),It=k("값을 계산하기 위해 두 개 이상의 도메인 객체의 속성을 사용한다."),ua=u(),Sn=o("p"),ht=k("서비스는 DDD의 다른 모든 요소들과 마찬가지로 제한된 컨텍스트 안에서 유비쿼터스 언어를 통해 표현되어야 한다."),ia=u(),Bn=o("p"),Mt=k("서비스가 유용하게 쓰일 수 있는 예제를 살펴보자. 엔티티 내에 이런 코드가 있다고 가정해보자."),ka=u(),z(O.$$.fragment),ra=u(),v=o("p"),At=k(`괜찮아 보이는 코드지만 문제가 있다.
`),ss=o("code"),Nt=k("ShoppingCart"),Ot=k("의 구현에서 다른 엔티티를 참조하고 있고, 실제로 "),as=o("code"),jt=k("ShoppingCart"),Ht=k(`에 속하지 않는 비즈니스 로직이 포함되어 있다.
이런 문제를 해결하기 위해 도메인 서비스를 사용할 수 있다.`),fa=u(),z(j.$$.fragment),ba=u(),H=o("p"),Ut=k(`두 엔티티에 모두 접근할 수 있는 도메인 로직이 도메인 서비스에 작성되었다.
이를 통해, `),ts=o("code"),Lt=k("CheckOutService"),Kt=k(`에서 더 많은 엔티티를 참조하고자 할 때 더 유용해질 것이다.
단일 도메인 서비스에 이러한 로직이 있기 때문에, 다른 클라이언트에서 우리의 동작을 구현하려는 경우 이 서비스를 사용할 수 있으며, 비즈니스 불변성이 유지된다.`),ma=u(),xn=o("p"),Ft=k(`도메인 서비스는 stateless하게 도메인 로직을 구성해야 하는 경우에 유용하다.
하지만 stateful한 로직을 구성해야 하는 경우에는 애플리케이션 서비스를 사용해야 한다.`),da=u(),wa=o("br"),ya=u(),U=o("h3"),L=o("a"),ps=o("span"),Qt=k("애플리케이션 서비스"),Ea=u(),Dn=o("p"),qt=k(`애플리케이션 서비스는 다른 서비스 및 레포지토리를 구성하는 데 사용되며, 여러 모달 사이에서 트랜잭션을 관리한다.
다만 도메인 로직은 애플리케이션 서비스가 아니라 도메인 서비스에 작성되어야 한다.`),_a=u(),Pn=o("p"),Gt=k("어플리케이션 서비스는 보통 그렇게 길지 않다. 일반적으로 트랜잭션 등 조정을 위해 사용되며, 다른 로직은 어플리케이션 레이어 밑으로 내려가야 한다. 또한 보한 문제를 해결하기도 한다."),va=u(),Rn=o("p"),Wt=k("예약 예제를 통해 애플리케이션 서비스를 살펴보자."),$a=u(),z(K.$$.fragment),Ca=u(),Tn=o("p"),zt=k(`위 코드에서는 기본적인 인증을 수행하고, 도메인 레이어와 레포지토리 레이어로 애플리케이션 서비스를 구성한다.
이런 예제의 경우에서라면 애플리케이션 서비스가 여러 도메인에 걸쳐 있지 않기 때문에 영속성을 도메인 서비스에서 건드리는 것도 괜찮다.
이 코드가 실행되면 새로운 예약이 생성되고 저장된다.`),ga=u(),In=o("p"),Vt=k("UI는 여러 도메인 서비스를 통해 구성될 필요가 있는데, 이런 측면에서 애플리케이션 서비스가 잘 어울린다."),Sa=u(),Ba=o("br"),xa=u(),hn=o("p"),Zt=k(`대부분의 최신 웹 앱은 결제, 이메인 전송, 유저 행동 추적 등의 역할을 수행한다.
이러한 기능들은 도메인에 포함되지는 않지만 여전히 애플리케이션에 포함되어야 한다.
이러한 경우 인프라스트럭처 레이어를 사용하여, 애플리케이션 서비스나 도메인 서비스에 추가할 수 있다.`),Da=u(),Mn=o("p"),Jt=k("가령 이메일 인프라스트럭처 서비스는 다음과 같이 구현될 수 있다."),Pa=u(),z(F.$$.fragment),Ra=u(),An=o("p"),Xt=k("이와 같이 인프라스트럭처 레이어를 구성하면, 애플리케이션 서비스에서 다음과 같이 사용할 수 있다."),Ta=u(),z(Q.$$.fragment),Ia=u(),q=o("p"),Yt=k("이제 애플리케이션 서비스의 "),os=o("code"),np=k("CreateBooking"),sp=k(" 함수가 호출되면 예약을 생성하고, 데이터베이스에 저장하는 것 뿐만 아니라 이메일을 유저에게 보낼 것이다."),ha=u(),Ma=o("br"),Aa=o("br"),Na=u(),G=o("h2"),W=o("a"),es=o("span"),ap=k("References"),Oa=u(),ja=o("hr"),Ha=u(),Nn=o("center"),$=o("p"),tn=o("a"),On=o("img"),tp=u(),pp=o("br"),op=u(),pn=o("a"),ep=k("Matthew Boyle, Domain-Driven Design with Golang』, O’Reilly Media, Inc."),this.h()},l(n){l=e(n,"H2",{id:!0});var a=c(l);d=e(a,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var cs=c(d);b=e(cs,"SPAN",{class:!0}),c(b).forEach(s),cs.forEach(s),m=r(a,"팩토리 패턴"),a.forEach(s),bs=i(n),ms=e(n,"HR",{}),ds=i(n),on=e(n,"P",{});var ls=c(on);Qa=r(ls,`팩토리 패턴은 주로 객체지향 프로그래밍에서 찾아볼 수 있으며, 다른 오브젝트를 생성하는 주된 책임을 가지고 있는 개체로 정의된다.
객체의 기본 속성을 설정하는 데 유용하며, 일반적으로 객체의 생성 외에 다른 목적을 가지면 안된다.`),ls.forEach(s),ws=i(n),en=e(n,"P",{});var us=c(en);qa=r(us,`Go는 객체지향 언어가 아님에도 팩토리 패턴은 꽤 유용하다.
아래 예제는 팩토리 패턴의 간단한 예제이다.`),us.forEach(s),ys=i(n),V(C.$$.fragment,n),Es=i(n),y=e(n,"P",{});var E=c(y);Ga=r(E,"위 예제에서는 "),Ln=e(E,"CODE",{});var is=c(Ln);Wa=r(is,"Car"),is.forEach(s),za=r(E," 인터페이스를 충족하는 "),Kn=e(E,"CODE",{});var ks=c(Kn);Va=r(ks,"BMW"),ks.forEach(s),Za=r(E,"와 "),Fn=e(E,"CODE",{});var rs=c(Fn);Ja=r(rs,"Tesla"),rs.forEach(s),Xa=r(E," 구조체를 정의하였고, "),Qn=e(E,"CODE",{});var fs=c(Qn);Ya=r(fs,"Car"),fs.forEach(s),nt=r(E," 오브젝트의 필드값을 초기화하여 반환하는 팩토리 함수 "),qn=e(E,"CODE",{});var mp=c(qn);st=r(mp,"BuildCar"),mp.forEach(s),at=r(E,`를 정의하였다.
또한, 자동차의 타입이 유효하지 않을 경우 에러를 반환한다.`),E.forEach(s),_s=i(n),cn=e(n,"P",{});var dp=c(cn);tt=r(dp,`팩토리 패턴은 복잡한 구조체의 생성을 표준화하는 좋은 방법이며, 애플리케이션이 복잡해질 수록 유용하다.
또한 팩토리를 통해 Encapsulation을 달성할 수 있고, 객체 생성시 비즈니스 불변성을 적용하여 도메인 모델을 단순화할 수 있다.`),dp.forEach(s),vs=i(n),ln=e(n,"P",{});var wp=c(ln);pt=r(wp,`가령 미용실 예약 시스템을 구현한다고 가정해보자.
누군가 업무 시간이 지나고 예약하려 하는 경우, 다음과 같이 팩토리 함수를 통해 예외를 발생시킬 수 있다.`),wp.forEach(s),$s=i(n),V(g.$$.fragment,n),Cs=i(n),un=e(n,"P",{});var yp=c(un);ot=r(yp,"위 예제는 엔티티를 생성하는 팩토리 함수를 보여주며, 엔티티의 식별자는 팩토리에서 생성된다."),yp.forEach(s),gs=i(n),kn=e(n,"P",{});var Ep=c(kn);et=r(Ep,"엔티티 팩토리에 대헤 조금 더 살펴보자."),Ep.forEach(s),Ss=i(n),Bs=e(n,"BR",{}),xs=i(n),S=e(n,"H3",{id:!0});var cp=c(S);B=e(cp,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var _p=c(B);Gn=e(_p,"SPAN",{class:!0}),c(Gn).forEach(s),_p.forEach(s),ct=r(cp,"엔티티 팩토리"),cp.forEach(s),Ds=i(n),rn=e(n,"P",{});var vp=c(rn);lt=r(vp,`앞선 포스트에서 설명하였듯 엔티티에는 식별자가 있고, 인스턴스화하기 위한 최소한의 요구사항이 존재한다.
따라서 팩토리를 만들 때 이러한 요구사항을 충족시켜야 하며, 다른 속성을 설정하려는 경우 이를 위한 다른 함수를 제공할 수 있다.`),vp.forEach(s),Ps=i(n),fn=e(n,"P",{});var $p=c(fn);ut=r($p,`엔티티 팩토리 함수를 만들 때는 팩토리 함수가 식별자를 생성할지, 아니면 파라미터로 받을지 결정해야 한다.
둘 다 가능하지만, 되도록이면 식별자를 팩토리 함수에서 생성하는 것이 더 좋은 방법이다.`),$p.forEach(s),Rs=i(n),Ts=e(n,"BR",{}),Is=e(n,"BR",{}),hs=i(n),x=e(n,"H2",{id:!0});var lp=c(x);D=e(lp,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Cp=c(D);Wn=e(Cp,"SPAN",{class:!0}),c(Wn).forEach(s),Cp.forEach(s),it=r(lp,"레포지토리 패턴"),lp.forEach(s),Ms=i(n),As=e(n,"HR",{}),Ns=i(n),bn=e(n,"P",{});var gp=c(bn);kt=r(gp,`레포지토리 패턴은 데이터 저장소에 접근하기 위해 필요한 코드의 일부이다.
데이터 저장소는 파일 시스템, 메모리, 스프레드시트, S3 등이 있을 수 있으나, 대부분의 프로젝트에서는 데이터베이스에 해당한다.`),gp.forEach(s),Os=i(n),mn=e(n,"P",{});var Sp=c(mn);rt=r(Sp,`레포지토리 계층을 사용함으로써 데이터에 액세스하는 코드를 중앙화하여 관리할 수 있고, 특정 데이터베이스에 코드가 종속되지 않도록 할 수 있다.
예를 들면 한 클라우드에서 다른 클라우드로 마이그레이션하는 경우 데이터베이스 설정이 약간 달라질 수 있다. 이를테면 한 MySQL에서 NoSQL로 이동하는 경우이다.
이 경우 시스템의 일부분만, 즉 레포지토리 계층만 다시 설계하면 된다.`),Sp.forEach(s),js=i(n),dn=e(n,"P",{});var Bp=c(dn);ft=r(Bp,`일부 개발자는 다른 채널(CQRS: Command Query Responsibility Segregation 등)을 통해 데이터베이스에 쿼리를 보내는 것을 선호한다.
이는 쿼리가 데이터베이스의 상태를 변경하면 안되기 때문에 작동하지만, 이제 막 시작하는 경우라면 데이터베이스와의 모든 상호작용이 레포지토리 계층에서 일어나게 하는 것이 좋다.`),Bp.forEach(s),Hs=i(n),wn=e(n,"P",{});var xp=c(wn);bt=r(xp,"레포지토리 계층에서 테이블 하나당 한 개의 구조체를 만드는 경우가 많은데, 그보단 애그리거트당 하나의 구조체를 만드는 것이 더 좋다. 다음 그림을 보자."),xp.forEach(s),Us=i(n),P=e(n,"H3",{id:!0});var up=c(P);R=e(up,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Dp=c(R);zn=e(Dp,"SPAN",{class:!0}),c(zn).forEach(s),Dp.forEach(s),mt=r(up,"그림"),up.forEach(s),Ls=i(n),yn=e(n,"P",{});var Pp=c(yn);dt=r(Pp,`위 그림에서 데이터베이스 테이블과 레포지토리 계층의 명확한 차이를 볼 수 있다. 주목할 부분은 레포지토리 계층에서 한 개 이상의 테이블을 사용할 수 있다는 것이다.
또한, 도메인 레이어는 레포지토리 레이어와 디커플링되어 있다.
DDD를 사용한다면 위와 같은 시스템을 구축하는 것이 좋다.`),Pp.forEach(s),Ks=i(n),Fs=e(n,"BR",{}),Qs=i(n),En=e(n,"P",{});var Rp=c(En);wt=r(Rp,"이전 장의 예약 시스템 예제에서 계속하여, 미용실 예약 정보를 데이터베이스에 저장하려 한다. 먼저 레포지토리 계층에 해당하는 인터페이스를 정의한다."),Rp.forEach(s),qs=i(n),an=e(n,"PRE",{class:!0});var uo=c(an);uo.forEach(s),Gs=i(n),T=e(n,"P",{});var La=c(T);yt=r(La,"이 인터페이스는 "),Vn=e(La,"CODE",{});var Tp=c(Vn);Et=r(Tp,"Booking"),Tp.forEach(s),_t=r(La," 팩토리 및 서비스 계층과 같은 계층에 정의되었는데, 그 이유는 다음 장에서 설명한다."),La.forEach(s),Ws=i(n),_n=e(n,"P",{});var Ip=c(_n);vt=r(Ip,"PostgreSQL 데이터베이스를 위한 간단한 레포지토리 레이어를 구현해보자."),Ip.forEach(s),zs=i(n),V(I.$$.fragment,n),Vs=i(n),vn=e(n,"P",{});var hp=c(vn);$t=r(hp,`코드에서 볼 수 있듯, 데이터베이스와 상호작용하는 것은 꽤 간단하며, 도메인 로직이 들어가지 않는다.
도메인 로직은 애플리케이션 서비스 계층에 들어가며, 애플리케이션 서비스 계층은 다음 장에서 다룬다.`),hp.forEach(s),Zs=i(n),Js=e(n,"BR",{}),Xs=e(n,"BR",{}),Ys=i(n),h=e(n,"H2",{id:!0});var ip=c(h);M=e(ip,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Mp=c(M);Zn=e(Mp,"SPAN",{class:!0}),c(Zn).forEach(s),Mp.forEach(s),Ct=r(ip,"서비스 계층"),ip.forEach(s),na=i(n),sa=e(n,"HR",{}),aa=i(n),$n=e(n,"P",{});var Ap=c($n);gt=r(Ap,`DDD에서 코드를 조직화하기 위해 몇 가지 종류의 서비스를 사용한다.
각각 애플리케이션 서비스, 도메인 서비스, 인프라스트럭처 서비스이다.`),Ap.forEach(s),ta=i(n),pa=e(n,"BR",{}),oa=i(n),A=e(n,"H3",{id:!0});var kp=c(A);N=e(kp,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Np=c(N);Jn=e(Np,"SPAN",{class:!0}),c(Jn).forEach(s),Np.forEach(s),St=r(kp,"도메인 서비스"),kp.forEach(s),ea=i(n),Cn=e(n,"P",{});var Op=c(Cn);Bt=r(Op,`도메인 서비스는 도메인 내에서 특정 작업을 수행하는 stateless한 연산이다.
엔티티 혹은 밸류 오브젝트로 모델링하는 좋은 방법을 찾을 수 없는 프로세스가 있을 때가 있는데, 이 경우 도메인 서비스를 사용하면 좋다`),Op.forEach(s),ca=i(n),gn=e(n,"P",{});var jp=c(gn);xt=r(jp,"도메인 서비스의 규칙을 정의하기는 좀 애매한 감이 있지만, 주의해야 할 점이 있다."),jp.forEach(s),la=i(n),_=e(n,"UL",{});var jn=c(_);Xn=e(jn,"LI",{});var Hp=c(Xn);Dt=r(Hp,"작성되는 코드는 한 도메인 내에서 중요한 비즈니스 로직을 수행해야 한다."),Hp.forEach(s),Pt=i(jn),Yn=e(jn,"LI",{});var Up=c(Yn);Rt=r(Up,"한 도메인 객체를 다른 도메인 객체로 변환한다."),Up.forEach(s),Tt=i(jn),ns=e(jn,"LI",{});var Lp=c(ns);It=r(Lp,"값을 계산하기 위해 두 개 이상의 도메인 객체의 속성을 사용한다."),Lp.forEach(s),jn.forEach(s),ua=i(n),Sn=e(n,"P",{});var Kp=c(Sn);ht=r(Kp,"서비스는 DDD의 다른 모든 요소들과 마찬가지로 제한된 컨텍스트 안에서 유비쿼터스 언어를 통해 표현되어야 한다."),Kp.forEach(s),ia=i(n),Bn=e(n,"P",{});var Fp=c(Bn);Mt=r(Fp,"서비스가 유용하게 쓰일 수 있는 예제를 살펴보자. 엔티티 내에 이런 코드가 있다고 가정해보자."),Fp.forEach(s),ka=i(n),V(O.$$.fragment,n),ra=i(n),v=e(n,"P",{});var Hn=c(v);At=r(Hn,`괜찮아 보이는 코드지만 문제가 있다.
`),ss=e(Hn,"CODE",{});var Qp=c(ss);Nt=r(Qp,"ShoppingCart"),Qp.forEach(s),Ot=r(Hn,"의 구현에서 다른 엔티티를 참조하고 있고, 실제로 "),as=e(Hn,"CODE",{});var qp=c(as);jt=r(qp,"ShoppingCart"),qp.forEach(s),Ht=r(Hn,`에 속하지 않는 비즈니스 로직이 포함되어 있다.
이런 문제를 해결하기 위해 도메인 서비스를 사용할 수 있다.`),Hn.forEach(s),fa=i(n),V(j.$$.fragment,n),ba=i(n),H=e(n,"P",{});var Ka=c(H);Ut=r(Ka,`두 엔티티에 모두 접근할 수 있는 도메인 로직이 도메인 서비스에 작성되었다.
이를 통해, `),ts=e(Ka,"CODE",{});var Gp=c(ts);Lt=r(Gp,"CheckOutService"),Gp.forEach(s),Kt=r(Ka,`에서 더 많은 엔티티를 참조하고자 할 때 더 유용해질 것이다.
단일 도메인 서비스에 이러한 로직이 있기 때문에, 다른 클라이언트에서 우리의 동작을 구현하려는 경우 이 서비스를 사용할 수 있으며, 비즈니스 불변성이 유지된다.`),Ka.forEach(s),ma=i(n),xn=e(n,"P",{});var Wp=c(xn);Ft=r(Wp,`도메인 서비스는 stateless하게 도메인 로직을 구성해야 하는 경우에 유용하다.
하지만 stateful한 로직을 구성해야 하는 경우에는 애플리케이션 서비스를 사용해야 한다.`),Wp.forEach(s),da=i(n),wa=e(n,"BR",{}),ya=i(n),U=e(n,"H3",{id:!0});var rp=c(U);L=e(rp,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var zp=c(L);ps=e(zp,"SPAN",{class:!0}),c(ps).forEach(s),zp.forEach(s),Qt=r(rp,"애플리케이션 서비스"),rp.forEach(s),Ea=i(n),Dn=e(n,"P",{});var Vp=c(Dn);qt=r(Vp,`애플리케이션 서비스는 다른 서비스 및 레포지토리를 구성하는 데 사용되며, 여러 모달 사이에서 트랜잭션을 관리한다.
다만 도메인 로직은 애플리케이션 서비스가 아니라 도메인 서비스에 작성되어야 한다.`),Vp.forEach(s),_a=i(n),Pn=e(n,"P",{});var Zp=c(Pn);Gt=r(Zp,"어플리케이션 서비스는 보통 그렇게 길지 않다. 일반적으로 트랜잭션 등 조정을 위해 사용되며, 다른 로직은 어플리케이션 레이어 밑으로 내려가야 한다. 또한 보한 문제를 해결하기도 한다."),Zp.forEach(s),va=i(n),Rn=e(n,"P",{});var Jp=c(Rn);Wt=r(Jp,"예약 예제를 통해 애플리케이션 서비스를 살펴보자."),Jp.forEach(s),$a=i(n),V(K.$$.fragment,n),Ca=i(n),Tn=e(n,"P",{});var Xp=c(Tn);zt=r(Xp,`위 코드에서는 기본적인 인증을 수행하고, 도메인 레이어와 레포지토리 레이어로 애플리케이션 서비스를 구성한다.
이런 예제의 경우에서라면 애플리케이션 서비스가 여러 도메인에 걸쳐 있지 않기 때문에 영속성을 도메인 서비스에서 건드리는 것도 괜찮다.
이 코드가 실행되면 새로운 예약이 생성되고 저장된다.`),Xp.forEach(s),ga=i(n),In=e(n,"P",{});var Yp=c(In);Vt=r(Yp,"UI는 여러 도메인 서비스를 통해 구성될 필요가 있는데, 이런 측면에서 애플리케이션 서비스가 잘 어울린다."),Yp.forEach(s),Sa=i(n),Ba=e(n,"BR",{}),xa=i(n),hn=e(n,"P",{});var no=c(hn);Zt=r(no,`대부분의 최신 웹 앱은 결제, 이메인 전송, 유저 행동 추적 등의 역할을 수행한다.
이러한 기능들은 도메인에 포함되지는 않지만 여전히 애플리케이션에 포함되어야 한다.
이러한 경우 인프라스트럭처 레이어를 사용하여, 애플리케이션 서비스나 도메인 서비스에 추가할 수 있다.`),no.forEach(s),Da=i(n),Mn=e(n,"P",{});var so=c(Mn);Jt=r(so,"가령 이메일 인프라스트럭처 서비스는 다음과 같이 구현될 수 있다."),so.forEach(s),Pa=i(n),V(F.$$.fragment,n),Ra=i(n),An=e(n,"P",{});var ao=c(An);Xt=r(ao,"이와 같이 인프라스트럭처 레이어를 구성하면, 애플리케이션 서비스에서 다음과 같이 사용할 수 있다."),ao.forEach(s),Ta=i(n),V(Q.$$.fragment,n),Ia=i(n),q=e(n,"P",{});var Fa=c(q);Yt=r(Fa,"이제 애플리케이션 서비스의 "),os=e(Fa,"CODE",{});var to=c(os);np=r(to,"CreateBooking"),to.forEach(s),sp=r(Fa," 함수가 호출되면 예약을 생성하고, 데이터베이스에 저장하는 것 뿐만 아니라 이메일을 유저에게 보낼 것이다."),Fa.forEach(s),ha=i(n),Ma=e(n,"BR",{}),Aa=e(n,"BR",{}),Na=i(n),G=e(n,"H2",{id:!0});var fp=c(G);W=e(fp,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var po=c(W);es=e(po,"SPAN",{class:!0}),c(es).forEach(s),po.forEach(s),ap=r(fp,"References"),fp.forEach(s),Oa=i(n),ja=e(n,"HR",{}),Ha=i(n),Nn=e(n,"CENTER",{});var oo=c(Nn);$=e(oo,"P",{});var Un=c($);tn=e(Un,"A",{href:!0,rel:!0});var eo=c(tn);On=e(eo,"IMG",{src:!0,alt:!0}),eo.forEach(s),tp=i(Un),pp=e(Un,"BR",{}),op=i(Un),pn=e(Un,"A",{href:!0,rel:!0});var co=c(pn);ep=r(co,"Matthew Boyle, Domain-Driven Design with Golang』, O’Reilly Media, Inc."),co.forEach(s),Un.forEach(s),oo.forEach(s),this.h()},h(){f(b,"class","icon icon-link"),f(d,"aria-hidden","true"),f(d,"tabindex","-1"),f(d,"href","#팩토리-패턴"),f(l,"id","팩토리-패턴"),f(Gn,"class","icon icon-link"),f(B,"aria-hidden","true"),f(B,"tabindex","-1"),f(B,"href","#엔티티-팩토리"),f(S,"id","엔티티-팩토리"),f(Wn,"class","icon icon-link"),f(D,"aria-hidden","true"),f(D,"tabindex","-1"),f(D,"href","#레포지토리-패턴"),f(x,"id","레포지토리-패턴"),f(zn,"class","icon icon-link"),f(R,"aria-hidden","true"),f(R,"tabindex","-1"),f(R,"href","#그림"),f(P,"id","그림"),f(an,"class","language-go"),f(Zn,"class","icon icon-link"),f(M,"aria-hidden","true"),f(M,"tabindex","-1"),f(M,"href","#서비스-계층"),f(h,"id","서비스-계층"),f(Jn,"class","icon icon-link"),f(N,"aria-hidden","true"),f(N,"tabindex","-1"),f(N,"href","#도메인-서비스"),f(A,"id","도메인-서비스"),f(ps,"class","icon icon-link"),f(L,"aria-hidden","true"),f(L,"tabindex","-1"),f(L,"href","#애플리케이션-서비스"),f(U,"id","애플리케이션-서비스"),f(es,"class","icon icon-link"),f(W,"aria-hidden","true"),f(W,"tabindex","-1"),f(W,"href","#references"),f(G,"id","references"),fo(On.src,bp="https://learning.oreilly.com/covers/urn:orm:book:9781804613450/400w/")||f(On,"src",bp),f(On,"alt","Domain-Driven Design with Golang Cover"),f(tn,"href","https://learning.oreilly.com/library/view/domain-driven-design-with/9781804613450/"),f(tn,"rel","nofollow"),f(pn,"href","https://learning.oreilly.com/library/view/domain-driven-design-with/9781804613450/"),f(pn,"rel","nofollow")},m(n,a){t(n,l,a),p(l,d),p(d,b),p(l,m),t(n,bs,a),t(n,ms,a),t(n,ds,a),t(n,on,a),p(on,Qa),t(n,ws,a),t(n,en,a),p(en,qa),t(n,ys,a),Z(C,n,a),t(n,Es,a),t(n,y,a),p(y,Ga),p(y,Ln),p(Ln,Wa),p(y,za),p(y,Kn),p(Kn,Va),p(y,Za),p(y,Fn),p(Fn,Ja),p(y,Xa),p(y,Qn),p(Qn,Ya),p(y,nt),p(y,qn),p(qn,st),p(y,at),t(n,_s,a),t(n,cn,a),p(cn,tt),t(n,vs,a),t(n,ln,a),p(ln,pt),t(n,$s,a),Z(g,n,a),t(n,Cs,a),t(n,un,a),p(un,ot),t(n,gs,a),t(n,kn,a),p(kn,et),t(n,Ss,a),t(n,Bs,a),t(n,xs,a),t(n,S,a),p(S,B),p(B,Gn),p(S,ct),t(n,Ds,a),t(n,rn,a),p(rn,lt),t(n,Ps,a),t(n,fn,a),p(fn,ut),t(n,Rs,a),t(n,Ts,a),t(n,Is,a),t(n,hs,a),t(n,x,a),p(x,D),p(D,Wn),p(x,it),t(n,Ms,a),t(n,As,a),t(n,Ns,a),t(n,bn,a),p(bn,kt),t(n,Os,a),t(n,mn,a),p(mn,rt),t(n,js,a),t(n,dn,a),p(dn,ft),t(n,Hs,a),t(n,wn,a),p(wn,bt),t(n,Us,a),t(n,P,a),p(P,R),p(R,zn),p(P,mt),t(n,Ls,a),t(n,yn,a),p(yn,dt),t(n,Ks,a),t(n,Fs,a),t(n,Qs,a),t(n,En,a),p(En,wt),t(n,qs,a),t(n,an,a),an.innerHTML=lo,t(n,Gs,a),t(n,T,a),p(T,yt),p(T,Vn),p(Vn,Et),p(T,_t),t(n,Ws,a),t(n,_n,a),p(_n,vt),t(n,zs,a),Z(I,n,a),t(n,Vs,a),t(n,vn,a),p(vn,$t),t(n,Zs,a),t(n,Js,a),t(n,Xs,a),t(n,Ys,a),t(n,h,a),p(h,M),p(M,Zn),p(h,Ct),t(n,na,a),t(n,sa,a),t(n,aa,a),t(n,$n,a),p($n,gt),t(n,ta,a),t(n,pa,a),t(n,oa,a),t(n,A,a),p(A,N),p(N,Jn),p(A,St),t(n,ea,a),t(n,Cn,a),p(Cn,Bt),t(n,ca,a),t(n,gn,a),p(gn,xt),t(n,la,a),t(n,_,a),p(_,Xn),p(Xn,Dt),p(_,Pt),p(_,Yn),p(Yn,Rt),p(_,Tt),p(_,ns),p(ns,It),t(n,ua,a),t(n,Sn,a),p(Sn,ht),t(n,ia,a),t(n,Bn,a),p(Bn,Mt),t(n,ka,a),Z(O,n,a),t(n,ra,a),t(n,v,a),p(v,At),p(v,ss),p(ss,Nt),p(v,Ot),p(v,as),p(as,jt),p(v,Ht),t(n,fa,a),Z(j,n,a),t(n,ba,a),t(n,H,a),p(H,Ut),p(H,ts),p(ts,Lt),p(H,Kt),t(n,ma,a),t(n,xn,a),p(xn,Ft),t(n,da,a),t(n,wa,a),t(n,ya,a),t(n,U,a),p(U,L),p(L,ps),p(U,Qt),t(n,Ea,a),t(n,Dn,a),p(Dn,qt),t(n,_a,a),t(n,Pn,a),p(Pn,Gt),t(n,va,a),t(n,Rn,a),p(Rn,Wt),t(n,$a,a),Z(K,n,a),t(n,Ca,a),t(n,Tn,a),p(Tn,zt),t(n,ga,a),t(n,In,a),p(In,Vt),t(n,Sa,a),t(n,Ba,a),t(n,xa,a),t(n,hn,a),p(hn,Zt),t(n,Da,a),t(n,Mn,a),p(Mn,Jt),t(n,Pa,a),Z(F,n,a),t(n,Ra,a),t(n,An,a),p(An,Xt),t(n,Ta,a),Z(Q,n,a),t(n,Ia,a),t(n,q,a),p(q,Yt),p(q,os),p(os,np),p(q,sp),t(n,ha,a),t(n,Ma,a),t(n,Aa,a),t(n,Na,a),t(n,G,a),p(G,W),p(W,es),p(G,ap),t(n,Oa,a),t(n,ja,a),t(n,Ha,a),t(n,Nn,a),p(Nn,$),p($,tn),p(tn,On),p($,tp),p($,pp),p($,op),p($,pn),p(pn,ep),Ua=!0},p(n,[a]){const cs={};a&1&&(cs.$$scope={dirty:a,ctx:n}),C.$set(cs);const ls={};a&1&&(ls.$$scope={dirty:a,ctx:n}),g.$set(ls);const us={};a&1&&(us.$$scope={dirty:a,ctx:n}),I.$set(us);const E={};a&1&&(E.$$scope={dirty:a,ctx:n}),O.$set(E);const is={};a&1&&(is.$$scope={dirty:a,ctx:n}),j.$set(is);const ks={};a&1&&(ks.$$scope={dirty:a,ctx:n}),K.$set(ks);const rs={};a&1&&(rs.$$scope={dirty:a,ctx:n}),F.$set(rs);const fs={};a&1&&(fs.$$scope={dirty:a,ctx:n}),Q.$set(fs)},i(n){Ua||(J(C.$$.fragment,n),J(g.$$.fragment,n),J(I.$$.fragment,n),J(O.$$.fragment,n),J(j.$$.fragment,n),J(K.$$.fragment,n),J(F.$$.fragment,n),J(Q.$$.fragment,n),Ua=!0)},o(n){X(C.$$.fragment,n),X(g.$$.fragment,n),X(I.$$.fragment,n),X(O.$$.fragment,n),X(j.$$.fragment,n),X(K.$$.fragment,n),X(F.$$.fragment,n),X(Q.$$.fragment,n),Ua=!1},d(n){n&&s(l),n&&s(bs),n&&s(ms),n&&s(ds),n&&s(on),n&&s(ws),n&&s(en),n&&s(ys),Y(C,n),n&&s(Es),n&&s(y),n&&s(_s),n&&s(cn),n&&s(vs),n&&s(ln),n&&s($s),Y(g,n),n&&s(Cs),n&&s(un),n&&s(gs),n&&s(kn),n&&s(Ss),n&&s(Bs),n&&s(xs),n&&s(S),n&&s(Ds),n&&s(rn),n&&s(Ps),n&&s(fn),n&&s(Rs),n&&s(Ts),n&&s(Is),n&&s(hs),n&&s(x),n&&s(Ms),n&&s(As),n&&s(Ns),n&&s(bn),n&&s(Os),n&&s(mn),n&&s(js),n&&s(dn),n&&s(Hs),n&&s(wn),n&&s(Us),n&&s(P),n&&s(Ls),n&&s(yn),n&&s(Ks),n&&s(Fs),n&&s(Qs),n&&s(En),n&&s(qs),n&&s(an),n&&s(Gs),n&&s(T),n&&s(Ws),n&&s(_n),n&&s(zs),Y(I,n),n&&s(Vs),n&&s(vn),n&&s(Zs),n&&s(Js),n&&s(Xs),n&&s(Ys),n&&s(h),n&&s(na),n&&s(sa),n&&s(aa),n&&s($n),n&&s(ta),n&&s(pa),n&&s(oa),n&&s(A),n&&s(ea),n&&s(Cn),n&&s(ca),n&&s(gn),n&&s(la),n&&s(_),n&&s(ua),n&&s(Sn),n&&s(ia),n&&s(Bn),n&&s(ka),Y(O,n),n&&s(ra),n&&s(v),n&&s(fa),Y(j,n),n&&s(ba),n&&s(H),n&&s(ma),n&&s(xn),n&&s(da),n&&s(wa),n&&s(ya),n&&s(U),n&&s(Ea),n&&s(Dn),n&&s(_a),n&&s(Pn),n&&s(va),n&&s(Rn),n&&s($a),Y(K,n),n&&s(Ca),n&&s(Tn),n&&s(ga),n&&s(In),n&&s(Sa),n&&s(Ba),n&&s(xa),n&&s(hn),n&&s(Da),n&&s(Mn),n&&s(Pa),Y(F,n),n&&s(Ra),n&&s(An),n&&s(Ta),Y(Q,n),n&&s(Ia),n&&s(q),n&&s(ha),n&&s(Ma),n&&s(Aa),n&&s(Na),n&&s(G),n&&s(Oa),n&&s(ja),n&&s(Ha),n&&s(Nn)}}}const Bo={title:"팩토리, 레포지토리, 서비스",date:"2023-07-16T00:00:00.000Z",excerpt:"Factories, Repositories, and Services",categories:["Golang","Backend","Architecture","Domain Driven Design"],coverImage:"/post_img/Backend/Architecture/DDD/cover.png",coverWidth:16,coverHeight:9,indexed:!1,exposed:!0};class xo extends io{constructor(l){super(),ko(this,l,null,Co,ro,{})}}export{xo as default,Bo as metadata};
