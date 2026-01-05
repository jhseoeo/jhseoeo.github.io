import"./Bzak7iHL.js";import"./69_IOA4Y.js";import{s,f as dn,c as a,r as p,n as gn}from"./CVx5jffJ.js";import{f as u,a as c}from"./2cXyNWGb.js";import{h as t}from"./D6IIVJDJ.js";import{C as l}from"./BQl3WXse.js";import{I as fn}from"./BVXqo7x9.js";const hn={title:"모놀리식 애플리케이션에 DDD 적용하기",date:"2023-07-20T00:00:00.000Z",excerpt:"Applying DDD to a Monolithic Application",categories:["Golang","Backend","Architecture","Domain Driven Design"],coverImage:"/post_img/Backend/Architecture/DDD/cover.png",coverWidth:16,coverHeight:9,indexed:!1,exposed:!0},{title:Un,date:Tn,excerpt:Fn,categories:Gn,coverImage:Ln,coverWidth:On,coverHeight:Hn,indexed:jn,exposed:Kn}=hn;var yn=u('<pre class="language-go"><!></pre>'),mn=u('<pre class="language-go"><!></pre>'),wn=u('<pre class="language-go"><!></pre>'),bn=u('<pre class="language-go"><!></pre>'),vn=u('<pre class="language-go"><!></pre>'),Cn=u('<pre class="language-go"><!></pre>'),Dn=u('<pre class="language-go"><!></pre>'),xn=u('<pre class="language-go"><!></pre>'),Sn=u('<pre class="language-go"><!></pre>'),Pn=u('<pre class="language-go"><!></pre>'),_n=u('<pre class="language-go"><!></pre>'),Mn=u(`<p>이전 포스트까지는 주로 DDD의 이론적인 부분에 대해 다루었다면, 이번 포스트부터는 실제 애플리케이션에 DDD를 적용하는 방법에 대해 다룰 것이다.</p> <br/><br/> <h2 id="모놀리식-애플리케이션이란"><a aria-hidden="true" tabindex="-1" href="#모놀리식-애플리케이션이란"><span class="icon icon-link"></span></a>모놀리식 애플리케이션이란?</h2> <hr/> <p>모놀리식 애플리케이션(Monolithic Application)은 시스템의 모든 컴포넌츠가 하나의 단위로 묶여있는 애플리케이션을 말한다.
가령 UI, 도메인, 인프라스트럭처 서비스가 동일한 배포 단위에 합쳐져 있다면, 그 애플리케이션은 모놀리식 애플리케이션이라 할 수 있다.</p> <p>모놀리식 애플리케이션은 몇 가지 이유에서 인기가 높다.</p> <ul><li>모든 코드와 우려 사항이 한 곳에 존재하므로 개발이 쉽다. 분산 시스템에서 RPC를 사용할 때 고려해야 하는 사항이 없다.</li> <li>배포할 항목이 하나이기 때문에 배포가 간단하다.</li> <li>서비스 간 통신이 인메모리에서 이루어지기 때문에 성능이 좋다.</li></ul> <p>하지만, 모놀리식 애플리케이션의 복잡도가 증가하면서, 다음과 같은 단점들이 드러나기 시작했다.</p> <ul><li>애플리케이션의 스타트업 시간이 길어진다.</li> <li>애플리케이션의 확장(스케일링)이 어렵다. 위의 스타트업 시간이 길어진다는 점과 더해져, 애플리케이션의 인스턴스를 늘리는 것이 어렵다. 따라서 수직적 확장은 가능하지만, 수평적 확장에는 실질적 어려움이 있다.</li> <li>지속적 배포(Continious Deployment, CD)가 느려진다. 애플리케이션의 일부분만 수정하더라도 전체 애플리케이션을 모두 배포해야 하며, 이는 애플리케이션이 복잡해질수록 더욱 느려진다.</li> <li>특정 기술 스택에 귀속된다. 더 적합한 기술 스택이 나오거나 다른 기술 스택의 전문가이더라도 사용하던 기술 스택을 사용해야 한다. 만약 새로운 언어로 애플리케이션을 작성하고 싶다면, 애플리케이션 전체를 다시 작성해야 한다.</li> <li>변경 사항을 적용하기가 어렵고 모듈성이 떨어진다. 이는 DDD를 적용함으로써 해결할 수 있다.</li></ul> <p>본 포스트에서는 DDD를 통해 간단한 모놀리식 애플리케이션을 작성해볼 것이다.</p> <br/><br/> <h2 id="애플리케이션의-요구사항"><a aria-hidden="true" tabindex="-1" href="#애플리케이션의-요구사항"><span class="icon icon-link"></span></a>애플리케이션의 요구사항</h2> <p>가상의 회사인 <em>CoffeeCo</em>는 국제 커피 체인점이다. <em>CoffeeCo</em>에 대한 비즈니스 도메인은 다음과 같다.</p> <p>이 회사는 작년에만 50개의 매장을 새로 내는 등 급속한 성장을 이루었다.
각 매장은 커피 및 커피 관련 액세서리와 매장별 음료를 판매한다.
매장은 개별적인 가격을 가지고 있지만, 국가적인 마케팅 캠페인이 종종 운영되기도 하며, 이는 품목의 가격에 영향을 미친다.</p> <p>CoffeeCo는 음료를 10회 구매할 때마다 1회의 무료 음료를 제공하는 <em>CoffeeBux</em>라는 로열티 프로그램을 시작하였다.
모든 매장에서 음료를 구매하거나 교환할 수 있다.</p> <p>CoffeeCo는 온라인 매장을 출시하는 것을 고려하고 있으며, 구매자가 매월 무제한 커피를 받을 수 있는 월간 구독과 다른 음료에 대한 할인을 고려하고 있다.</p> <br/> <p>시스템을 개발할 때 다음과 같은 유비쿼터스 언어와 정의를 따라야 한다.</p> <ul><li><strong>Coffee Lovers</strong>: CoffeeCo의 고객</li> <li><strong>CoffeeBux</strong>: CoffeeCo의 멤버십 프로그램으로, Coffee Lovers가 음료 또는 악세서리를 구매할 때마다 CoffeeBux 포인트가 1점씩 쌓임.</li> <li><strong>Tiny, medium, and massive</strong>: 음료의 크기를 오름차순으로 나타냄. 일부 음료는 사이즈가 하나로 고정되어 있음.</li></ul> <p>도메인 모델링 과정에서, 다음과 같은 도메인 객체를 식별할 수 있다.</p> <ul><li>Store</li> <li>Products</li> <li>Membership(원문에서는 Loyalty)</li> <li>Subscription</li></ul> <p>또한, 시스템의 MVP(Minimum Viable Product)는 다음과 같은 기능을 갖추어야 한다.</p> <ul><li>CoffeeBux를 이용해서 음료 또는 악세서리를 구매할 수 있어야 한다.</li> <li>신용카드 및 체크카드를 이용해서 음료 또는 악세서리를 구매할 수 있어야 한다.</li> <li>현금을 이용해서 음료 또는 악세서리를 구매할 수 있어야 한다.</li> <li>구매시마다 CoffeeBux 포인트가 쌓인다.</li> <li>매장별 할인 캠페인</li> <li>현재는 음료는 한 사이즈만 존재</li></ul> <p>비즈니스 도메인에 대한 사항을 모두 파악했으므로, 이제 DDD를 통해 애플리케이션을 작성해보자.</p> <br/><br/> <h2 id="프로젝트-시작"><a aria-hidden="true" tabindex="-1" href="#프로젝트-시작"><span class="icon icon-link"></span></a>프로젝트 시작</h2> <hr/> <p>먼저, 다음과 같은 패키지 구조를 갖는 프로젝트를 생성한다.</p> <pre class="language-bash"><!></pre> <p>Golang에서 <code>internal</code> 폴더는 특수한 의미를 가지며, 다른 프로젝트에서 임포트할 수 없다.
따라서 공개 API에 노출되지 않아야 하는 도메인 코드를 작성하기에 적합하며, 모든 도메인 코드는 <code>internal</code> 폴더에 작성할 것이다.</p> <h3 id="도메인-모델-작성"><a aria-hidden="true" tabindex="-1" href="#도메인-모델-작성"><span class="icon icon-link"></span></a>도메인 모델 작성</h3> <p>가장 먼저 작성해야 할 것은 <strong>Coffee Lover</strong> 모델이다. Coffee Lover는 가장 확실한 <strong>엔티티</strong>이며, 다른 도메인 객체와의 상호작용에서 중심적인 역할을 수행하기 때문이다.</p> <p><code>internal</code> 폴더에 <code>coffeelover.go</code>파일을 생성하여, Coffee Lover 모델을 작성한다.</p> <pre class="language-go"><!></pre> <p><code>CoffeeLover</code> 구조체에 <code>FirstName</code>이나 <code>EmailAddress</code>와 같은 필드가 일부 추가되었는데, 이는 Coffee Lover에 대해 저장할 필요가 있는 추가적인 정보이다. 가령 도메인 전문가나 관계자와의 주기적인 회의를 통해 이러한 정보를 파악할 수 있다.</p> <br/> <p>이번에는 매장 도메인을 작성해볼 것이다. <code>internal</code> 폴더 안에 <code>store</code> 폴더를 만들고, 그 아래 <code>store.go</code> 파일을 생성한다. <code>store/store.go</code> 파일에는 다음과 같은 코드를 작성한다.</p> <pre class="language-go"><!></pre> <p>이와 같이 매장은 ID를 가지는 엔티티가 된다.</p> <br/> <p>각 매장에서는 커피, 커피에 관련된 악세사리, 매장별 음료를 팔고, 따라서 우리는 상품을 정의해야 한다.</p> <p>여기까지는 비교적 간단한 모델링이었지만, 상품을 정의하는 것은 꽤 까다롭다. 상품은 엔티티일까, 아니면 밸류 오브젝트일까?
결론만 말하자면 상품은 밸류 오브젝트로 두는 것이 좋다. 왜냐하면,</p> <ul><li>각 상품은 불변성을 가진다고 볼 수 있으며</li> <li>상품은 도매인 개념을 측정, 설명, 수량화하며,</li> <li>값만으로 동일한 타입의 다른 객체와 구분할 수 있으며,</li> <li>엔티티인지 밸류 오브젝트인지 애매한 것들은 일단 밸류 오브젝트로 처리하고 나중에 엔티티로 변경하는 것이 더 안전한 선택이기 때문이다.</li></ul> <p><code>internal</code> 폴더 안에 <code>product.go</code> 파일을 생성하고, 다음과 같이 작성한다.</p> <pre class="language-go"><!></pre> <br/> <p>이제 매장 도메인으로 다시 돌아가서, 매장에서 판매하는 상품을 정의해야 한다. <code>store/store.go</code> 파일을 다음과 같이 수정한다.</p> <pre class="language-go"><!></pre> <br/> <p>사용자가 상품을 구매할 때 카드를 사용하는지 혹은 현금을 사용하는지, 카드를 사용했다면 어떤 카드인지에 대한 정보를 표현할 수 있어야 한다.</p> <p><code>payment</code> 도메인을 정의할 것이다. <code>internal</code> 폴더 안에 <code>payment</code> 폴더를 만들고, 그 아래 <code>means.go</code> 파일을 생성한다. <code>payment/means.go</code> 파일에는 다음과 같은 코드를 작성한다.</p> <pre class="language-go"><!></pre> <p>지불 수단을 나타내기 위한 타입인 <code>Means</code>는 string에 대한 alias이다.
또한 카드에 대한 정보를 나타내는 <code>CardDetails</code> 타입을 정의하였다. 실제 카드 결제가 동작하는 방식과는 다소 거리가 있으나, 본 예제에서는 <code>cardToken</code>을 사용하여 결제를 처리한다고 가정한다.</p> <p>또한 현금 및 CoffeeBux 결제에 관련된 상수를 정의하였는데, 이는 결제 수단을 나타내는 <code>Means</code> 타입의 값으로 사용된다.</p> <br/> <p>다음으로는 상품의 구매에 관련된 도메인을 작성해야 한다.
coffee lover가 상품을 구매할 때 필요한 정보에 대해 잘 이해하고 있는지, 그리고 알아야 할 추가적인 도메인 정보는 없는지에 대해 도메인 전문가와 대화해야 할 타이밍이 아마 이쯤이 될 것이다.</p> <p><code>internal</code> 폴더 안에 <code>purchase</code> 폴더를 만들고, 그 아래 <code>purchase.go</code> 파일을 생성한다. <code>purchase/purchase.go</code> 파일에는 다음과 같은 코드를 작성한다.</p> <pre class="language-go"><!></pre> <p><code>Purchase</code>는 ID를 가지는 엔티티여야 한다. 만약 사용자가 구매를 취소하고 싶을 때, ID를 통해 구매를 취소할 수 있어야 하기 때문이다.</p> <br/> <p>이제 멤버십에 관한 도메인을 정의할 차례이다. <code>internal</code> 폴더 안에 <code>membership</code> 폴더를 만들고, 그 아래 <code>coffeebux.go</code> 파일을 생성한다. <code>membership/coffeebux.go</code> 파일에는 다음과 같은 코드를 작성한다.</p> <pre class="language-go"><!></pre> <br/> <p>여기까지, 모든 도메인 모델이 정의되었다. 지금까지의 작업이 반영된 패키지 구조는 다음과 같다.</p> <pre class="language-bash"><!></pre> <br/><br/> <h3 id="도메인-서비스-작성"><a aria-hidden="true" tabindex="-1" href="#도메인-서비스-작성"><span class="icon icon-link"></span></a>도메인 서비스 작성</h3> <p>이제 도메인 서비스를 작성할 차례이다. <code>Purchase</code>가 서비스 로직이 작성되기에 가장 적절하다고 볼 수 있는데, 이유는 다음과 같다.</p> <ul><li>도매인 내의 중요한 비즈니스 로직이 수행될 것이며,</li> <li>일부 값을 계산해야 하며,</li> <li>레포지토리 레이어에 접근해야 하기 때문이다.</li></ul> <p>프로그램을 방어적으로 작성하려면 서비스를 얇게 유지하는 것이 좋고, 따라서 로직 코드를 최대한 도메인 객체에까지 내리는게 좋다. <code>purchase/purchase.go</code>를 열어, 다음과 같이 각 상품의 가격을 합하여 총 가격을 계산하고, 구매건에 대한 ID를 생성하는 메소드를 추가한다.</p> <!> <p>이어서, <code>purchase/purchase.go</code>에 서비스를 계속 작성한다.</p> <!> <p>이 서비스는 <code>Purchase</code> 객체에 필요한 값을 추가하기 위해 <code>validateAndEnrich</code> 메소드를 호출한다. 이후, 결제 수단에 따라 결제를 처리하고, 결제가 성공적으로 이루어지면 <code>Purchase</code> 객체를 저장한다.</p> <br/> <p><code>purchase.validateAndEnrich()</code>를 호출하고 나서 결제 수단에 따라 처리해야 할 몇 가지 로직이 있다.
카드 결제의 경우 <code>CardService</code>를 통해 카드 결제를 처리하므로, <code>CardService</code> 인터페이스를 정의할 것이다.
이렇게 인터페이스로 정의하면 개발자 혹은 개발팀이 나뉘어져 있을 때, 정해진 인터페이스를 통해 서로간의 의존성을 줄이면서도 개발 속도를 높이며 원활한 협업이 가능해진다.</p> <p>다음으로, 레포지토리 인터페이스를 정의할 것이다. <code>purchase</code> 디렉토리에 <code>repository.go</code> 파일을 생성하고, 다음과 같이 작성한다.</p> <pre class="language-go"><!></pre> <p>이렇게 인터페이스를 정의하여 사용하는 것은 좋은 방법이다. 레포지토리의 구현체가 어떤 데이터베이스에 의존하든, 인터페이스만 충족시키면 되기 때문이다.</p> <p>지금까지의 작업이 반영된 패키지 구조는 다음과 같다. 프로젝트의 대략적인 윤곽이 잡히고 있다!</p> <pre class="language-bash"><!></pre> <br/><br/> <h3 id="레포지토리-작성"><a aria-hidden="true" tabindex="-1" href="#레포지토리-작성"><span class="icon icon-link"></span></a>레포지토리 작성</h3> <p>MongoDB를 사용하여 레포지토리 계층을 구현할 것이다. 먼저, MongoDB Golang Driver를 설치한다.</p> <pre class="language-bash"><!></pre> <p>그리고 <code>Purchase</code> 모델을 저장하기 위한 레포지토리를 작성할 것이므로, <code>purchase/repository.go</code> 파일에 다음과 같이 이어서 작성한다.</p> <!> <p>다음으로 이전에 선언한 <code>Repository</code> 인터페이스를 충족시키기 위해 <code>Store</code> 메소드를 작성한다.</p> <pre class="language-go"><!></pre> <p>여기에서 <code>toMongoPurchase</code> 함수는 <code>Purchase</code> 객체를 <code>MongoPurchase</code> 객체로 변환하는 어댑터 함수이며, <code>MongoPurchase</code>는 <code>Purchase</code> 객체를 저장하기 위해 MongoDB에 저장되는 도큐먼트의 구조체 타입이다.</p> <p>계속해서 <code>purchase/repository.go</code>에 <code>mongoPurchase</code>와 <code>toMongoPurchase</code>를 구현한다.</p> <!> <p>이와 같이 MongoDB에 대한 의존성과 Purchase 애그리거트를 디커플링할 수 있다. 다른 도메인 모델도 마찬가지로 데이터베이스 모델과 디커플링해야 한다.</p> <p>지금까지의 작업이 반영된 패키지 구조는 다음과 같다.</p> <pre class="language-bash"><!></pre> <br/><br/> <h3 id="인프라스트럭처-서비스-작성"><a aria-hidden="true" tabindex="-1" href="#인프라스트럭처-서비스-작성"><span class="icon icon-link"></span></a>인프라스트럭처 서비스 작성</h3> <p>결제 서비스를 위해 <em>Stripe</em>라는 것을 써볼 것이다.
Mongo 레포지토리처럼 Stripe에 대한 의존성을 디커플링하기 위해 인터페이스를 정의할 것이다.</p> <p>먼저, 다음 명령어로 Stripe Golang SDK를 설치한다.</p> <pre class="language-bash"><!></pre> <p>이거 뭔데 73버전까지 있는거지..?</p> <p>아무튼 <code>payment</code> 폴더에 <code>stripe.go</code> 파일을 생성하고, 다음과 같이 작성한다.</p> <pre class="language-go"><!></pre> <p>그리고 <code>CardChargeService</code> 인터페이스를 충족시키기 위해 <code>ChargeCard</code> 메소드를 작성한다.</p> <!> <p>이와 같이 외부 리소스인 Stripe를 사용하는 코드를 인프라스트럭처 레이어에 작성하였다.</p> <br/><br/> <h2 id="기능-추가-구현하기"><a aria-hidden="true" tabindex="-1" href="#기능-추가-구현하기"><span class="icon icon-link"></span></a>기능 추가 구현하기</h2> <hr/> <p>DDD의 장점 중 하나는 모듈성 덕분에 새로운 기능을 추가하기가 쉽다는 것이다. 아직 비즈니스 요구사항을 모두 충족시킨 것은 아니기 떄문에, 남은 요구사항을 충족시키기 위해 기능을 추가해보자.</p> <h3 id="멤버십-프로그램-구현"><a aria-hidden="true" tabindex="-1" href="#멤버십-프로그램-구현"><span class="icon icon-link"></span></a>멤버십 프로그램 구현</h3> <p>요구사항 중 10회 구매시 1회 무료 음료를 제공하는 멤버십 프로그램이 있다. 이를 구현하기 위해 <code>membership/coffeebux.go</code> 파일에 다음과 같은 메소드를 추가한다.</p> <pre class="language-go"><!></pre> <p><code>AddStamp</code> 무료 음료를 제공하는 로직을 구현한 메소드이다. 이제 <code>purchase/purchase.go</code> 파일의 <code>CompletePurchase</code> 메소드에서 <em>coffeebux</em> 스탬프를 쌓는 로직을 추가한다.</p> <!> <p><code>CompletePurchase</code>의 파라미터로 <code>coffeeBuxCard</code>를 추가하였는데, 고객이 멤버십을 가지고 있지 않을 수 있기 때문에 <code>nil</code> 여부를 검사해야 한다. 검사 이후에는 단지 <code>AddStamp</code> 메소드를 호출함으로써, 아주 쉽게 멤버십 프로그램을 구현할 수 있다.</p> <br/> <p>이제 결제 수단으로 CoffeeBux를 사용할 수 있도록 구현해야 하는데, 이는 결제 도메인과 멤버십 도메인에 모두 속하기 때문에 어디에 구현해야 할지 고민이 될 수 있다. 이를 구현하는 데는 여러 가지 방법이 있을 수 있으며, 정답은 없다. 이번 예제에서는 결제 도메인에 구현할 것이다. <code>purchase/purchase.go</code> 파일을 열어 다음과 같이 <code>Pay</code> 메소드를 추가한다.</p> <!> <p>이와 같이 사용할 수 있는 무료 음료의 수를 확인하고, 충분한 음료가 있다면 무료 음료의 수를 차감한다.</p> <br/> <p>남은 것은 구매 서비스의 <code>CompletePurchase</code> 메소드에서 결제 수단으로 CoffeeBux를 사용할 수 있도록 구현하는 것이다. <code>purchase/purchase.go</code> 파일을 열어 다음과 같이 <code>CompletePurchase</code> 메소드를 수정한다.</p> <!> <p>이와 같이 결제 수단으로 CoffeeBux를 사용할 수 있도록 구현하였다.
이 때 CoffeeBux를 사용하여도 <code>AddStamp</code> 메소드를 호출하여 멤버십 포인트가 쌓이도록 구현하였는데, 이러한 비즈니스 불변성은 도메인 전문가와의 대화를 통해 확인할 수 있다.</p> <br/><br/> <h3 id="매장별-할인-캠페인-구현"><a aria-hidden="true" tabindex="-1" href="#매장별-할인-캠페인-구현"><span class="icon icon-link"></span></a>매장별 할인 캠페인 구현</h3> <p>매장별 할인 정보를 저장하기 위해서는 레포지토리 계층이 필요하다. <code>store</code> 폴더에 <code>repository.go</code> 파일을 생성하고, 다음과 같이 작성한다.</p> <!> <p>이 코드는 이전의 레포지토리 레이어와 비슷하다. 다만 현재 각각의 레포지토리 레이어에서 Mongo 연결 풀을 중복으로 생성하고 있는데, 이를 다른 패키지로 분리하여 공유하는 것이 향후 개선사항이 될 수 있다.</p> <p><code>GetStoreDiscount</code> 메소드를 사용할 때 에러 체크를 하는 것을 알 수있는데, 만약 <code>ErrNoDocuments</code> 에러가 발생하면 할인이 적용되지 않은 것이므로 <code>ErrNoDiscount</code> 에러를 반환하며, 이는 실제 에러라기보다는 할인이 적용되지 않았음을 명시적으로 알리는 것이다.</p> <br/> <p>이렇게 구현된 매장별 할인을 구매 서비스에 추가할 것이다. <code>purchase/purchase.go</code> 파일을 열어 <code>StoreService</code> 인터페이스를 정의하고, 이를 구매 서비스 구조체에 추가한다.</p> <pre class="language-go"><!></pre> <p>이후 <code>CompletePurchase</code> 메소드에서 매장별 할인을 적용하는 로직을 추가한다.</p> <!> <p>이렇게 이것저것 추가하고 나니 가독성도 떨어지고 도메인이 복잡해졌다. 리팩토링이 필요해 보인다.</p> <!> <p>이와 같이 <code>calculateStoreSpecificDiscount</code>함수로 따로 분리하였고, 훨씬 더 보기 깔끔해진 만큼 도메인 전문가와 이야기하기 더 쉬울 것이다.</p> <br/> <p>마지막으로 <code>store/store.go</code>를 열어 <code>StoreService</code>를 충족시키는 <code>Service</code> 구조체를 작성한다.</p> <pre class="language-go"><!></pre> <br/> <p>이로써 Domain Driven Design 기반의 전체 서비스가 완성되었다. 지금까지의 작업이 반영된 패키지 구조는 다음과 같다.</p> <pre class="language-bash"><!></pre> <br/><br/> <h2 id="마치며"><a aria-hidden="true" tabindex="-1" href="#마치며"><span class="icon icon-link"></span></a>마치며</h2> <hr/> <p>이렇게 모놀리식 아키텍처에 DDD를 적용해보았다.
현재로서는 서비스만 구현되어 있지만 REST API 등 인터페이스가 정의된다면 어떻게 구현해야 할지 고민해보는 것도 좋을 것 같다.
또한 유닛 테스트 또는 통합 테스트를 작성해보는 것도 좋을 것 같다.</p> <p>DDD가 적용되지 않은 기존 코드에서, 이 포스트에서와 같이 레포지토리 패턴을 사용하고 도메인 객체를 사용하도록 리팩토링하는 것은 꽤 노력이 요구되는 일일 수 있다.
하지만 인프라스트럭처 레이어를 적용하는 것은 꽤 권장되는 방법이다.
비즈니스 로직과 인프라스트럭처를 분리함으로써, 비즈니스 로직을 테스트하기가 훨씬 쉬워지기 때문이다.</p> <br/><br/> <h2 id="references"><a aria-hidden="true" tabindex="-1" href="#references"><span class="icon icon-link"></span></a>References</h2> <hr/> <center><p>[</p> <!> ](https://learning.oreilly.com/library/view/domain-driven-design-with/9781804613450/) <br/> [Matthew Boyle, Domain-Driven Design with Golang』, O'Reilly Media, Inc.](https://learning.oreilly.com/library/view/domain-driven-design-with/9781804613450/)</center>`,1);function Wn(K){var E=Mn(),i=s(dn(E),59),W=a(i);t(W,()=>`<code class="language-bash">$ tree
<span class="token builtin class-name">.</span>
├── go.mod
└── internal</code>`),p(i);var k=s(i,10),X=a(k);t(X,()=>`<code class="language-go"><span class="token keyword">package</span> coffeeco

<span class="token keyword">import</span> <span class="token string">"github.com/google/uuid"</span>

<span class="token keyword">type</span> CoffeeLover <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	ID           uuid<span class="token punctuation">.</span>UUID
	FirstName    <span class="token builtin">string</span>
	LastName     <span class="token builtin">string</span>
	EmailAddress <span class="token builtin">string</span>
<span class="token punctuation">&#125;</span></code>`),p(k);var d=s(k,8),V=a(d);t(V,()=>`<code class="language-go"><span class="token keyword">package</span> store

<span class="token keyword">import</span> <span class="token string">"github.com/google/uuid"</span>

<span class="token keyword">type</span> Store <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	ID       uuid<span class="token punctuation">.</span>UUID
	Location <span class="token builtin">string</span>
<span class="token punctuation">&#125;</span></code>`),p(d);var g=s(d,14),q=a(g);t(q,()=>`<code class="language-go"><span class="token keyword">package</span> coffeeco

<span class="token keyword">type</span> Money <span class="token operator">=</span> <span class="token builtin">int</span>

<span class="token keyword">type</span> Product <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	ItemName  <span class="token builtin">string</span>
	BasePrice Money
<span class="token punctuation">&#125;</span></code>`),p(g);var f=s(g,6),Z=a(f);t(Z,()=>`<code class="language-go"><span class="token keyword">package</span> store

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"github.com/google/uuid"</span>
	coffeeco <span class="token string">"github.com/jhseoeo/Golang-DDD/chapter5/internal"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Store <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	ID             uuid<span class="token punctuation">.</span>UUID
	Location       <span class="token builtin">string</span>
	ProductForSale coffeeco<span class="token punctuation">.</span>Product
<span class="token punctuation">&#125;</span></code>`),p(f);var h=s(f,8),z=a(h);t(z,()=>`<code class="language-go"><span class="token keyword">package</span> payment

<span class="token keyword">type</span> Means <span class="token builtin">string</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
	MEANS_CARD      <span class="token operator">=</span> <span class="token string">"card"</span>
	MEANS_CASH      <span class="token operator">=</span> <span class="token string">"cash"</span>
	MEANS_COFFEEBUX <span class="token operator">=</span> <span class="token string">"coffeebux"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> CardDetails <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	cardToken <span class="token builtin">string</span>
<span class="token punctuation">&#125;</span></code>`),p(h);var y=s(h,12),J=a(y);t(J,()=>`<code class="language-go"><span class="token keyword">package</span> purchase

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"github.com/google/uuid"</span>
	coffeeco <span class="token string">"github.com/jhseoeo/Golang-DDD/chapter5/internal"</span>
	<span class="token string">"github.com/jhseoeo/Golang-DDD/chapter5/internal/payment"</span>
	<span class="token string">"github.com/jhseoeo/Golang-DDD/chapter5/internal/store"</span>
	<span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Purchase <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	id                 uuid<span class="token punctuation">.</span>UUID
	Store              store<span class="token punctuation">.</span>Store
	ProductsToPurchase <span class="token punctuation">[</span><span class="token punctuation">]</span>coffeeco<span class="token punctuation">.</span>Product
	total              coffeeco<span class="token punctuation">.</span>Money
	PaymentMeans       payment<span class="token punctuation">.</span>Means
	timeOfPurchase     time<span class="token punctuation">.</span>Time
	cardToken          <span class="token operator">*</span><span class="token builtin">string</span>
<span class="token punctuation">&#125;</span></code>`),p(y);var m=s(y,8),Q=a(m);t(Q,()=>`<code class="language-go"><span class="token keyword">package</span> membership

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"github.com/google/uuid"</span>
	coffeeco <span class="token string">"github.com/jhseoeo/Golang-DDD/chapter5/internal"</span>
	<span class="token string">"github.com/jhseoeo/Golang-DDD/chapter5/internal/store"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> CoffeeBux <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	ID                                    uuid<span class="token punctuation">.</span>UUID
	store                                 store<span class="token punctuation">.</span>Store
	coffeeLover                           coffeeco<span class="token punctuation">.</span>CoffeeLover
	FreeDrinksAvailable                   <span class="token builtin">int</span>
	RemainingDrinkPurchasesUntilFreeDrink <span class="token builtin">int</span>
<span class="token punctuation">&#125;</span></code>`),p(m);var w=s(m,6),Y=a(w);t(Y,()=>`<code class="language-bash"><span class="token builtin class-name">.</span>
├── go.mod
├── go.sum
└── internal
    ├── coffeelover.go
    ├── membership
    │   └── coffeebux.go
    ├── payment
    │   └── means.go
    ├── product.go
    ├── purchase
    │   └── purchase.go
    └── store
        └── store.go</code>`),p(w);var N=s(w,13);l(N,{children:(o,r)=>{var n=yn(),e=a(n);t(e,()=>`<code class="language-go"><span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Purchase<span class="token punctuation">)</span> <span class="token function">validateAndEnrich</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>ProductsToPurchase<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"puchase must have at least one product"</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

    p<span class="token punctuation">.</span>total <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> p<span class="token punctuation">.</span>ProductsToPurchase <span class="token punctuation">&#123;</span>
    	p<span class="token punctuation">.</span>total <span class="token operator">+=</span> v<span class="token punctuation">.</span>BasePrice
    <span class="token punctuation">&#125;</span>

    <span class="token keyword">if</span> p<span class="token punctuation">.</span>total <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">&#123;</span>
    	<span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"total price must be greater than 0"</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span>

    p<span class="token punctuation">.</span>id <span class="token operator">=</span> uuid<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    p<span class="token punctuation">.</span>timeOfPurchase <span class="token operator">=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">nil</span>

<span class="token punctuation">&#125;</span></code>`),p(n),c(o,n)},$$slots:{default:!0}});var B=s(N,4);l(B,{children:(o,r)=>{var n=mn(),e=a(n);t(e,()=>`<code class="language-go"><span class="token keyword">type</span> CardChargeService <span class="token keyword">interface</span> <span class="token punctuation">&#123;</span>
	<span class="token function">ChargeCard</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> amount coffeeco<span class="token punctuation">.</span>Money<span class="token punctuation">,</span> cardToken <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">type</span> Service <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	cardService  CardChargeService
	purchaseRepo Repository
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s Service<span class="token punctuation">)</span> <span class="token function">CompletePurchase</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> purchase <span class="token operator">*</span>Purchase<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">&#123;</span>
	err <span class="token operator">:=</span> purchase<span class="token punctuation">.</span><span class="token function">validateAndEnrich</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> err
	<span class="token punctuation">&#125;</span>

	<span class="token keyword">switch</span> purchase<span class="token punctuation">.</span>PaymentMeans <span class="token punctuation">&#123;</span>
	<span class="token keyword">case</span> payment<span class="token punctuation">.</span>MEANS_CARD<span class="token punctuation">:</span>
		err <span class="token operator">:=</span> s<span class="token punctuation">.</span>cardService<span class="token punctuation">.</span><span class="token function">ChargeCard</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> purchase<span class="token punctuation">.</span>total<span class="token punctuation">,</span> <span class="token operator">*</span>purchase<span class="token punctuation">.</span>cardToken<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"card charge is failed"</span><span class="token punctuation">)</span>
		<span class="token punctuation">&#125;</span>

	<span class="token keyword">case</span> payment<span class="token punctuation">.</span>MEANS_CASH<span class="token punctuation">:</span>
		<span class="token comment">// do nothing</span>

	<span class="token keyword">default</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"unknown payment means"</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	err <span class="token operator">=</span> s<span class="token punctuation">.</span>purchaseRepo<span class="token punctuation">.</span><span class="token function">Store</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token operator">*</span>purchase<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"failed to store purchase"</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">&#125;</span></code>`),p(n),c(o,n)},$$slots:{default:!0}});var b=s(B,10),nn=a(b);t(nn,()=>`<code class="language-go"><span class="token keyword">package</span> purchase

<span class="token keyword">import</span> <span class="token string">"context"</span>

<span class="token keyword">type</span> Repository <span class="token keyword">interface</span> <span class="token punctuation">&#123;</span>
	<span class="token function">Store</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> purchase Purchase<span class="token punctuation">)</span> <span class="token builtin">error</span>
<span class="token punctuation">&#125;</span></code>`),p(b);var v=s(b,6),sn=a(v);t(sn,()=>`<code class="language-bash"><span class="token builtin class-name">.</span>
├── go.mod
├── go.sum
└── internal
    ├── coffeelover.go
    ├── membership
    │   └── coffeebux.go
    ├── payment
    │   └── means.go
    ├── product.go
    ├── purchase
    │   ├── purchase.go
    │   └── repository.go
    └── store
        └── store.go</code>`),p(v);var C=s(v,9),an=a(C);t(an,()=>'<code class="language-bash">go get go.mongodb.org/mongo-driver/mongo</code>'),p(C);var $=s(C,4);l($,{children:(o,r)=>{var n=wn(),e=a(n);t(e,()=>`<code class="language-go"><span class="token keyword">type</span> MongoRepository <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	purchases <span class="token operator">*</span>mongo<span class="token punctuation">.</span>Collection
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token function">NewMongoRepo</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> connectionString <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>MongoRepository<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	client<span class="token punctuation">,</span> err <span class="token operator">:=</span> mongo<span class="token punctuation">.</span><span class="token function">Connect</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> options<span class="token punctuation">.</span><span class="token function">Client</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ApplyURI</span><span class="token punctuation">(</span>connectionString<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"failed to create a mongo client: %w"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	purchases <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">Database</span><span class="token punctuation">(</span><span class="token string">"coffeeco"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Collection</span><span class="token punctuation">(</span><span class="token string">"purchases"</span><span class="token punctuation">)</span>

	<span class="token keyword">return</span> <span class="token operator">&amp;</span>MongoRepository<span class="token punctuation">&#123;</span>
		purchases<span class="token punctuation">:</span> purchases<span class="token punctuation">,</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">&#125;</span></code>`),p(n),c(o,n)},$$slots:{default:!0}});var D=s($,4),pn=a(D);t(pn,()=>`<code class="language-go"><span class="token keyword">func</span> <span class="token punctuation">(</span>mr <span class="token operator">*</span>MongoRepository<span class="token punctuation">)</span> <span class="token function">Store</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> purchase Purchase<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">&#123;</span>
	mongoP <span class="token operator">:=</span> <span class="token function">toMongoPurchase</span><span class="token punctuation">(</span>purchase<span class="token punctuation">)</span>
	<span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> mr<span class="token punctuation">.</span>purchases<span class="token punctuation">.</span><span class="token function">InsertOne</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> mongoP<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"failed to persist purchase: %w"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">&#125;</span></code>`),p(D);var R=s(D,6);l(R,{children:(o,r)=>{var n=bn(),e=a(n);t(e,()=>`<code class="language-go"><span class="token keyword">type</span> mongoPurchase <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	id                 uuid<span class="token punctuation">.</span>UUID          <span class="token string">&#96;bson:"ID"&#96;</span>
	store              store<span class="token punctuation">.</span>Store        <span class="token string">&#96;bson:"Store"&#96;</span>
	productsToPurchase <span class="token punctuation">[</span><span class="token punctuation">]</span>coffeeco<span class="token punctuation">.</span>Product <span class="token string">&#96;bson:"product_purchased"&#96;</span>
	total              <span class="token builtin">int64</span>              <span class="token string">&#96;bson:"purchase_total"&#96;</span>
	paymentMeans       payment<span class="token punctuation">.</span>Means      <span class="token string">&#96;bson:"payment_means"&#96;</span>
	timeOfPurchase     time<span class="token punctuation">.</span>Time          <span class="token string">&#96;bson:"created_at"&#96;</span>
	cardToken          <span class="token operator">*</span><span class="token builtin">string</span>            <span class="token string">&#96;bson:"card_token"&#96;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token function">toMongoPurchase</span><span class="token punctuation">(</span>p Purchase<span class="token punctuation">)</span> mongoPurchase <span class="token punctuation">&#123;</span>
	<span class="token keyword">return</span> mongoPurchase<span class="token punctuation">&#123;</span>
		id<span class="token punctuation">:</span>                 p<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
		store<span class="token punctuation">:</span>              p<span class="token punctuation">.</span>Store<span class="token punctuation">,</span>
		productsToPurchase<span class="token punctuation">:</span> p<span class="token punctuation">.</span>ProductsToPurchase<span class="token punctuation">,</span>
		total<span class="token punctuation">:</span>              <span class="token function">int64</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>total<span class="token punctuation">)</span><span class="token punctuation">,</span>
		paymentMeans<span class="token punctuation">:</span>       p<span class="token punctuation">.</span>PaymentMeans<span class="token punctuation">,</span>
		timeOfPurchase<span class="token punctuation">:</span>     p<span class="token punctuation">.</span>timeOfPurchase<span class="token punctuation">,</span>
		cardToken<span class="token punctuation">:</span>          p<span class="token punctuation">.</span>cardToken<span class="token punctuation">,</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`),p(n),c(o,n)},$$slots:{default:!0}});var x=s(R,6),tn=a(x);t(tn,()=>`<code class="language-bash"><span class="token builtin class-name">.</span>
├── go.mod
├── go.sum
└── internal
    ├── coffeelover.go
    ├── membership
    │   └── coffeebux.go
    ├── payment
    │   └── means.go
    ├── product.go
    ├── purchase
    │   ├── purchase.go
    │   └── repository.go
    └── store
        └── store.go</code>`),p(x);var S=s(x,11),on=a(S);t(on,()=>'<code class="language-bash">go get github.com/stripe/stripe-go/v73</code>'),p(S);var P=s(S,6),en=a(P);t(en,()=>`<code class="language-go"><span class="token keyword">package</span> payment

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"errors"</span>
	<span class="token string">"github.com/stripe/stripe-go/v73/client"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> StripeService <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	stripeClient <span class="token operator">*</span>client<span class="token punctuation">.</span>API
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token function">NewStripeService</span><span class="token punctuation">(</span>apiKey <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>StripeService<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">if</span> apiKey <span class="token operator">==</span> <span class="token string">""</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"API key cannot be nil"</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	sc <span class="token operator">:=</span> <span class="token operator">&amp;</span>client<span class="token punctuation">.</span>API<span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span>
	sc<span class="token punctuation">.</span><span class="token function">Init</span><span class="token punctuation">(</span>apiKey<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>StripeService<span class="token punctuation">&#123;</span>stripeClient<span class="token punctuation">:</span> sc<span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">&#125;</span></code>`),p(P);var U=s(P,4);l(U,{children:(o,r)=>{var n=vn(),e=a(n);t(e,()=>`<code class="language-go"><span class="token keyword">func</span> <span class="token punctuation">(</span>s StripeService<span class="token punctuation">)</span> <span class="token function">ChargeCard</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> amount coffeeco<span class="token punctuation">.</span>Money<span class="token punctuation">,</span> cardToken <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">&#123;</span>
	params <span class="token operator">:=</span> <span class="token operator">&amp;</span>stripe<span class="token punctuation">.</span>ChargeParams<span class="token punctuation">&#123;</span>
		Amount<span class="token punctuation">:</span>   stripe<span class="token punctuation">.</span><span class="token function">Int64</span><span class="token punctuation">(</span><span class="token function">int64</span><span class="token punctuation">(</span>amount<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		Currency<span class="token punctuation">:</span> stripe<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>stripe<span class="token punctuation">.</span>CurrencyKRW<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		Source<span class="token punctuation">:</span>   <span class="token operator">&amp;</span>stripe<span class="token punctuation">.</span>PaymentSourceSourceParams<span class="token punctuation">&#123;</span>Token<span class="token punctuation">:</span> stripe<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span>cardToken<span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
	<span class="token punctuation">&#125;</span>

	<span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> charge<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"failed to create a charge: %w"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">&#125;</span></code>`),p(n),c(o,n)},$$slots:{default:!0}});var _=s(U,17),cn=a(_);t(cn,()=>`<code class="language-go"><span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>CoffeeBux<span class="token punctuation">)</span> <span class="token function">AddStamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">if</span> c<span class="token punctuation">.</span>RemainingDrinkPurchasesUntilFreeDrink <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">&#123;</span>
		c<span class="token punctuation">.</span>RemainingDrinkPurchasesUntilFreeDrink <span class="token operator">=</span> <span class="token number">10</span>
		c<span class="token punctuation">.</span>FreeDrinksAvailable <span class="token operator">+=</span> <span class="token number">1</span>
	<span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
		c<span class="token punctuation">.</span>RemainingDrinkPurchasesUntilFreeDrink<span class="token operator">--</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`),p(_);var T=s(_,4);l(T,{children:(o,r)=>{var n=Cn(),e=a(n);t(e,()=>`<code class="language-go"><span class="token keyword">func</span> <span class="token punctuation">(</span>s Service<span class="token punctuation">)</span> <span class="token function">CompletePurchase</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> purchase <span class="token operator">*</span>Purchase<span class="token punctuation">,</span> coffeeBuxCard <span class="token operator">*</span>membership<span class="token punctuation">.</span>CoffeeBux<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">&#123;</span>
	err <span class="token operator">:=</span> purchase<span class="token punctuation">.</span><span class="token function">validateAndEnrich</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> err
	<span class="token punctuation">&#125;</span>

	<span class="token keyword">switch</span> purchase<span class="token punctuation">.</span>PaymentMeans <span class="token punctuation">&#123;</span>
	<span class="token keyword">case</span> payment<span class="token punctuation">.</span>MEANS_CARD<span class="token punctuation">:</span>
		err <span class="token operator">:=</span> s<span class="token punctuation">.</span>cardService<span class="token punctuation">.</span><span class="token function">ChargeCard</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> purchase<span class="token punctuation">.</span>total<span class="token punctuation">,</span> <span class="token operator">*</span>purchase<span class="token punctuation">.</span>cardToken<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"card charge is failed"</span><span class="token punctuation">)</span>
		<span class="token punctuation">&#125;</span>

	<span class="token keyword">case</span> payment<span class="token punctuation">.</span>MEANS_CASH<span class="token punctuation">:</span>
		<span class="token comment">// do nothing</span>

	<span class="token keyword">default</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"unknown payment means"</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	err <span class="token operator">=</span> s<span class="token punctuation">.</span>purchaseRepo<span class="token punctuation">.</span><span class="token function">Store</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token operator">*</span>purchase<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"failed to store purchase"</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	<span class="token keyword">if</span> coffeeBuxCard <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		coffeeBuxCard<span class="token punctuation">.</span><span class="token function">AddStamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">&#125;</span></code>`),p(n),c(o,n)},$$slots:{default:!0}});var F=s(T,8);l(F,{children:(o,r)=>{var n=Dn(),e=a(n);t(e,()=>`<code class="language-go"><span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>CoffeeBux<span class="token punctuation">)</span> <span class="token function">Pay</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> purchases <span class="token punctuation">[</span><span class="token punctuation">]</span>purchase<span class="token punctuation">.</span>Purchase<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">&#123;</span>
	lp <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>purchases<span class="token punctuation">)</span>
	<span class="token keyword">if</span> lp <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"nothing to buy"</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	<span class="token keyword">if</span> c<span class="token punctuation">.</span>FreeDrinksAvailable <span class="token operator">&lt;</span> lp <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"not enough free drinks available, %d requestsed, %d available"</span><span class="token punctuation">,</span> lp<span class="token punctuation">,</span> c<span class="token punctuation">.</span>FreeDrinksAvailable<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	c<span class="token punctuation">.</span>FreeDrinksAvailable <span class="token operator">-=</span> lp
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">&#125;</span></code>`),p(n),c(o,n)},$$slots:{default:!0}});var G=s(F,8);l(G,{children:(o,r)=>{var n=xn(),e=a(n);t(e,()=>`<code class="language-go"><span class="token keyword">func</span> <span class="token punctuation">(</span>s Service<span class="token punctuation">)</span> <span class="token function">CompletePurchase</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> purchase <span class="token operator">*</span>Purchase<span class="token punctuation">,</span> coffeeBuxCard <span class="token operator">*</span>membership<span class="token punctuation">.</span>CoffeeBux<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">&#123;</span>
	err <span class="token operator">:=</span> purchase<span class="token punctuation">.</span><span class="token function">validateAndEnrich</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> err
	<span class="token punctuation">&#125;</span>

	<span class="token keyword">switch</span> purchase<span class="token punctuation">.</span>PaymentMeans <span class="token punctuation">&#123;</span>
	<span class="token keyword">case</span> payment<span class="token punctuation">.</span>MEANS_CARD<span class="token punctuation">:</span>
		err <span class="token operator">:=</span> s<span class="token punctuation">.</span>cardService<span class="token punctuation">.</span><span class="token function">ChargeCard</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> purchase<span class="token punctuation">.</span>total<span class="token punctuation">,</span> <span class="token operator">*</span>purchase<span class="token punctuation">.</span>cardToken<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"card charge is failed"</span><span class="token punctuation">)</span>
		<span class="token punctuation">&#125;</span>

	<span class="token keyword">case</span> payment<span class="token punctuation">.</span>MEANS_CASH<span class="token punctuation">:</span>
	<span class="token comment">// do nothing</span>

	<span class="token keyword">case</span> payment<span class="token punctuation">.</span>MEANS_COFFEEBUX<span class="token punctuation">:</span>
		err <span class="token operator">:=</span> coffeeBuxCard<span class="token punctuation">.</span><span class="token function">Pay</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> purchase<span class="token punctuation">.</span>ProductsToPurchase<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"failed to charge membership card: %w"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token punctuation">&#125;</span>

	<span class="token keyword">default</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"unknown payment means"</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	err <span class="token operator">=</span> s<span class="token punctuation">.</span>purchaseRepo<span class="token punctuation">.</span><span class="token function">Store</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token operator">*</span>purchase<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"failed to store purchase"</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	<span class="token keyword">if</span> coffeeBuxCard <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		coffeeBuxCard<span class="token punctuation">.</span><span class="token function">AddStamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">&#125;</span></code>`),p(n),c(o,n)},$$slots:{default:!0}});var L=s(G,11);l(L,{children:(o,r)=>{var n=Sn(),e=a(n);t(e,()=>`<code class="language-go"><span class="token keyword">package</span> store

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"context"</span>
	<span class="token string">"errors"</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"github.com/google/uuid"</span>
	<span class="token string">"go.mongodb.org/mongo-driver/bson"</span>
	<span class="token string">"go.mongodb.org/mongo-driver/mongo"</span>
	<span class="token string">"go.mongodb.org/mongo-driver/mongo/options"</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> ErrNoDiscount <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"no discount for store"</span><span class="token punctuation">)</span>

<span class="token keyword">type</span> Repository <span class="token keyword">interface</span> <span class="token punctuation">&#123;</span>
	<span class="token function">GetStoreDiscount</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> storeId uuid<span class="token punctuation">.</span>UUID<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">type</span> MongoRepository <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	storeDiscounts <span class="token operator">*</span>mongo<span class="token punctuation">.</span>Collection
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token function">NewMongoRepo</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> connectionString <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>MongoRepository<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	client<span class="token punctuation">,</span> err <span class="token operator">:=</span> mongo<span class="token punctuation">.</span><span class="token function">Connect</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> options<span class="token punctuation">.</span><span class="token function">Client</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ApplyURI</span><span class="token punctuation">(</span>connectionString<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"failed to create a mongo client: %w"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	discounts <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">Database</span><span class="token punctuation">(</span><span class="token string">"coffeeco"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Collection</span><span class="token punctuation">(</span><span class="token string">"store_discounts"</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>MongoRepository<span class="token punctuation">&#123;</span>
		storeDiscounts<span class="token punctuation">:</span> discounts<span class="token punctuation">,</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>m MongoRepository<span class="token punctuation">)</span> <span class="token function">GetStoreDiscount</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> storeId uuid<span class="token punctuation">.</span>UUID<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">float32</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">var</span> discountRate <span class="token builtin">float32</span>
	err <span class="token operator">:=</span> m<span class="token punctuation">.</span>storeDiscounts<span class="token punctuation">.</span><span class="token function">FindOne</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> bson<span class="token punctuation">.</span>D<span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span><span class="token string">"store_id"</span><span class="token punctuation">,</span> storeId<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Decode</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>discountRate<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">if</span> errors<span class="token punctuation">.</span><span class="token function">Is</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> mongo<span class="token punctuation">.</span>ErrNoDocuments<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">,</span> ErrNoDiscount
		<span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">,</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"failed to get store discount: %w"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token punctuation">&#125;</span>
	<span class="token punctuation">&#125;</span>

	<span class="token keyword">return</span> discountRate<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">&#125;</span></code>`),p(n),c(o,n)},$$slots:{default:!0}});var M=s(L,10),un=a(M);t(un,()=>`<code class="language-go"><span class="token keyword">type</span> StoreService <span class="token keyword">interface</span> <span class="token punctuation">&#123;</span>
	<span class="token function">GetStoreSpecificDiscount</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> storeId uuid<span class="token punctuation">.</span>UUID<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">float32</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">type</span> Service <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	cardService  CardChargeService
	purchaseRepo Repository
	storeService StoreService
<span class="token punctuation">&#125;</span></code>`),p(M);var O=s(M,4);l(O,{children:(o,r)=>{var n=Pn(),e=a(n);t(e,()=>`<code class="language-go"><span class="token keyword">func</span> <span class="token punctuation">(</span>s Service<span class="token punctuation">)</span> <span class="token function">CompletePurchase</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> storeId uuid<span class="token punctuation">.</span>UUID<span class="token punctuation">,</span> purchase <span class="token operator">*</span>Purchase<span class="token punctuation">,</span> coffeeBuxCard <span class="token operator">*</span>membership<span class="token punctuation">.</span>CoffeeBux<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">&#123;</span>
	err <span class="token operator">:=</span> purchase<span class="token punctuation">.</span><span class="token function">validateAndEnrich</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> err
	<span class="token punctuation">&#125;</span>

	discount<span class="token punctuation">,</span> err <span class="token operator">:=</span> s<span class="token punctuation">.</span>storeService<span class="token punctuation">.</span><span class="token function">GetStoreSpecificDiscount</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> storeId<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>errors<span class="token punctuation">.</span><span class="token function">Is</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> store<span class="token punctuation">.</span>ErrNoDiscount<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"failed to get discount: %w"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	purchasePrice <span class="token operator">:=</span> purchase<span class="token punctuation">.</span>total
	<span class="token keyword">if</span> discount <span class="token operator">></span> <span class="token number">0</span> <span class="token punctuation">&#123;</span>
		purchasePrice <span class="token operator">*=</span> coffeeco<span class="token punctuation">.</span><span class="token function">Money</span><span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">-</span> discount<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	<span class="token keyword">switch</span> purchase<span class="token punctuation">.</span>PaymentMeans <span class="token punctuation">&#123;</span>
	<span class="token keyword">case</span> payment<span class="token punctuation">.</span>MEANS_CARD<span class="token punctuation">:</span>
		err <span class="token operator">:=</span> s<span class="token punctuation">.</span>cardService<span class="token punctuation">.</span><span class="token function">ChargeCard</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> purchase<span class="token punctuation">.</span>total<span class="token punctuation">,</span> <span class="token operator">*</span>purchase<span class="token punctuation">.</span>cardToken<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"card charge is failed"</span><span class="token punctuation">)</span>
		<span class="token punctuation">&#125;</span>

	<span class="token keyword">case</span> payment<span class="token punctuation">.</span>MEANS_CASH<span class="token punctuation">:</span>
	<span class="token comment">// do nothing</span>

	<span class="token keyword">case</span> payment<span class="token punctuation">.</span>MEANS_COFFEEBUX<span class="token punctuation">:</span>
		err <span class="token operator">:=</span> coffeeBuxCard<span class="token punctuation">.</span><span class="token function">Pay</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> purchase<span class="token punctuation">.</span>ProductsToPurchase<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"failed to charge membership card: %w"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token punctuation">&#125;</span>

	<span class="token keyword">default</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"unknown payment means"</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	err <span class="token operator">=</span> s<span class="token punctuation">.</span>purchaseRepo<span class="token punctuation">.</span><span class="token function">Store</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token operator">*</span>purchase<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"failed to store purchase"</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	<span class="token keyword">if</span> coffeeBuxCard <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		coffeeBuxCard<span class="token punctuation">.</span><span class="token function">AddStamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">&#125;</span></code>`),p(n),c(o,n)},$$slots:{default:!0}});var H=s(O,4);l(H,{children:(o,r)=>{var n=_n(),e=a(n);t(e,()=>`<code class="language-go"><span class="token keyword">func</span> <span class="token punctuation">(</span>s Service<span class="token punctuation">)</span> <span class="token function">CompletePurchase</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> storeId uuid<span class="token punctuation">.</span>UUID<span class="token punctuation">,</span> purchase <span class="token operator">*</span>Purchase<span class="token punctuation">,</span> coffeeBuxCard <span class="token operator">*</span>membership<span class="token punctuation">.</span>CoffeeBux<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">&#123;</span>
	err <span class="token operator">:=</span> purchase<span class="token punctuation">.</span><span class="token function">validateAndEnrich</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> err
	<span class="token punctuation">&#125;</span>

	err <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">calculateStoreSpecificDiscount</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> storeId<span class="token punctuation">,</span> purchase<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> err
	<span class="token punctuation">&#125;</span>

	<span class="token keyword">switch</span> purchase<span class="token punctuation">.</span>PaymentMeans <span class="token punctuation">&#123;</span>
	<span class="token keyword">case</span> payment<span class="token punctuation">.</span>MEANS_CARD<span class="token punctuation">:</span>
		err <span class="token operator">:=</span> s<span class="token punctuation">.</span>cardService<span class="token punctuation">.</span><span class="token function">ChargeCard</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> purchase<span class="token punctuation">.</span>total<span class="token punctuation">,</span> <span class="token operator">*</span>purchase<span class="token punctuation">.</span>cardToken<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"card charge is failed"</span><span class="token punctuation">)</span>
		<span class="token punctuation">&#125;</span>

	<span class="token keyword">case</span> payment<span class="token punctuation">.</span>MEANS_CASH<span class="token punctuation">:</span>
	<span class="token comment">// do nothing</span>

	<span class="token keyword">case</span> payment<span class="token punctuation">.</span>MEANS_COFFEEBUX<span class="token punctuation">:</span>
		err <span class="token operator">:=</span> coffeeBuxCard<span class="token punctuation">.</span><span class="token function">Pay</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> purchase<span class="token punctuation">.</span>ProductsToPurchase<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"failed to charge membership card: %w"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token punctuation">&#125;</span>

	<span class="token keyword">default</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"unknown payment type"</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	err <span class="token operator">=</span> s<span class="token punctuation">.</span>purchaseRepo<span class="token punctuation">.</span><span class="token function">Store</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token operator">*</span>purchase<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"failed to store purchase"</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	<span class="token keyword">if</span> coffeeBuxCard <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		coffeeBuxCard<span class="token punctuation">.</span><span class="token function">AddStamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>Service<span class="token punctuation">)</span> <span class="token function">calculateStoreSpecificDiscount</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> storeId uuid<span class="token punctuation">.</span>UUID<span class="token punctuation">,</span> purchase <span class="token operator">*</span>Purchase<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">&#123;</span>
	discount<span class="token punctuation">,</span> err <span class="token operator">:=</span> s<span class="token punctuation">.</span>storeService<span class="token punctuation">.</span><span class="token function">GetStoreSpecificDiscount</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> storeId<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>errors<span class="token punctuation">.</span><span class="token function">Is</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> store<span class="token punctuation">.</span>ErrNoDiscount<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"failed to get discount: %w"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	purchasePrice <span class="token operator">:=</span> purchase<span class="token punctuation">.</span>total
	<span class="token keyword">if</span> discount <span class="token operator">></span> <span class="token number">0</span> <span class="token punctuation">&#123;</span>
		purchase<span class="token punctuation">.</span>total <span class="token operator">=</span> purchasePrice <span class="token operator">*</span> coffeeco<span class="token punctuation">.</span><span class="token function">Money</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token operator">-</span>discount<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">&#125;</span></code>`),p(n),c(o,n)},$$slots:{default:!0}});var A=s(H,8),ln=a(A);t(ln,()=>`<code class="language-go"><span class="token keyword">type</span> Service <span class="token keyword">struct</span> <span class="token punctuation">&#123;</span>
	repo Repository
<span class="token punctuation">&#125;</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s Service<span class="token punctuation">)</span> <span class="token function">GetStoreSpecificDiscount</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> storeId uuid<span class="token punctuation">.</span>UUID<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">float32</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	dis<span class="token punctuation">,</span> err <span class="token operator">:=</span> s<span class="token punctuation">.</span>repo<span class="token punctuation">.</span><span class="token function">GetStoreDiscount</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> storeId<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">,</span> err
	<span class="token punctuation">&#125;</span>
	<span class="token keyword">return</span> <span class="token function">float32</span><span class="token punctuation">(</span>dis<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">&#125;</span></code>`),p(A);var I=s(A,6),rn=a(I);t(rn,()=>`<code class="language-bash"><span class="token builtin class-name">.</span>
├── go.mod
├── go.sum
└── internal
    ├── coffeelover.go
    ├── membership
    │   └── coffeebux.go
    ├── payment
    │   ├── means.go
    │   └── stripe.go
    ├── product.go
    ├── purchase
    │   ├── purchase.go
    │   └── repository.go
    └── store
        ├── repository.go
        └── store.go</code>`),p(I);var j=s(I,20),kn=s(a(j),2);fn(kn,{alt:"Domain-Driven Design with Golang Cover",src:"https://learning.oreilly.com/covers/urn:orm:book:9781804613450/400w/"}),gn(3),p(j),c(K,E)}export{Wn as default,hn as metadata};
