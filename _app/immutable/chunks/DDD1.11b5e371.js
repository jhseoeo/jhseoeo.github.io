import{S as xi,i as ki,s as Hi,k as r,q as n,a as f,l as i,m as a,h as l,r as d,c as s,n as v,U as wi,b as o,E as e,M as wr}from"./index.5621e629.js";function Oi(Si){let p,S,ut,Ve,$t,gt,te,K,Ke,ee,Q,Qe,le,Y,Ye,re,u,ct,ht,Ze,Fe,U,Je,bt,Xe,$e,ge,h,Z,mt,tl,el,ll,F,Tt,rl,il,al,J,Rt,Dl,ol,ie,X,fl,ae,De,oe,fe,x,k,Bt,sl,se,ne,de,c,G,M,nl,dl,vl,El,Pt,_l,pl,q,j,ul,cl,hl,bl,At,ml,Tl,yt,W,Rl,Bl,Pl,ve,Ee,_e,pe,H,w,St,Al,ue,ce,he,$,yl,be,g,Sl,me,Te,Re,Be,O,C,xt,xl,Pe,Ae,ye,tt,kl,Se,et,Hl,xe,L,kt,b,Ht,wl,Ol,wt,Cl,Ll,Ot,Il,Nl,E,m,Ct,Ul,Gl,Lt,Ml,ql,It,jl,Wl,T,Nt,zl,Vl,Ut,Kl,Ql,Gt,Yl,Zl,R,Mt,Fl,Jl,qt,Xl,$l,jt,gl,tr,B,Wt,er,lr,zt,rr,ir,Vt,ar,Dr,P,Kt,or,fr,Qt,sr,nr,Yt,dr,vr,A,Zt,Er,_r,Ft,pr,ur,Jt,cr,ke,lt,hr,He,we,Oe,Ce,I,N,Xt,br,Le,Ie,Ne,rt,y,z,it,Or,mr,Tr,Rr,V,Br;return{c(){p=r("h2"),S=r("a"),ut=r("span"),Ve=n("Domain Driven Design의 탄생"),$t=f(),gt=r("hr"),te=f(),K=r("p"),Ke=n(`소프트웨어가 점점 복잡해지면서 공학자들과 아키텍트들은 시스템의 구조에 대해 여러 가지 고민을 하였고,
모델링하려는 문제 공간(도메인)을 시스템에 나타내는 방식으로 접근했다.
이 때 시스템이 도메인에 가까울 수록 변경하기가 쉽다는 장점이 있었고, 시스템과 실세계의 도메인 사이의 단절이 적기 때문에 다른 관계자가 모델을 이해하기 쉬웠다.`),ee=f(),Q=r("p"),Qe=n(`소프트웨어 엔지니어인 Eric Evans가 마주한 문제는 시스템의 복잡성 증가와 시스템 생성 및 유지 보수의 실패였다.
이로 인해 그는 Domain-Driven Design: Tacking Complexity in the Heart of Software , Addison-Wesley Professional 이라는 책을 저술하였다.`),le=f(),Y=r("p"),Ye=n("이 책은 복잡한 시스템을 구축하고 유지하는 데 도움이 되는 방법들을 제시하며, 도메인 주도 설계의 많은 부분이 객체지향 설계 패턴에서 유래했음을 언급하고 있다."),re=f(),u=r("blockquote"),ct=r("p"),ht=r("strong"),Ze=n("객체지향 패턴이란?"),Fe=f(),U=r("p"),Je=n("1995년도에 저술된 "),bt=r("em"),Xe=n("Design Patterns, Elements of Reusable Object-Oriented Software"),$e=n(`라는 책은 현재까지도 컴퓨터공학 분야에서 가장 유명한 책 중 하나이다.
이 책에서는 뛰어난 확장성과 유지보수성을 가진 객체지향 소프트웨어를 설계하기 위한 23개의 패턴을 소개하고 있다.
그리고, DDD에서도 이러한 패턴 중 일부에서 아주 중요한 영감을 얻었다고 한다.`),ge=f(),h=r("ul"),Z=r("li"),mt=r("strong"),tl=n("Creational Patterns"),el=n(" : 오브젝트를 직접 생성하지 않고, 생성하는 방법을 제공하는 패턴으로, 오브젝트 생성의 유연성을 높이고 코드의 유지보수를 쉽게 한다."),ll=f(),F=r("li"),Tt=r("strong"),rl=n("Structural Patterns"),il=n(" : 특정 기능을 수행하기 위해 클래스와 객체를 조합하는 패턴으로, 클래스와 객체의 구성을 통해 더 큰 구조를 만들 수 있다."),al=f(),J=r("li"),Rt=r("strong"),Dl=n("Behavioral Patterns"),ol=n(" : 오브젝트 사이의 통신에 관한 패턴이다."),ie=f(),X=r("p"),fl=n(`Big Blue Book이라고도 불리는 Evans의 책은, 세련되고 명확한 시스템을 설계하기 위한 공통 언어와 원칙을 제시한다.
또한, 복잡한 소프트웨어를 개선할 때 사용할 수 있는 세 가지 기둥을 제시한다.`),ae=f(),De=r("br"),oe=r("br"),fe=f(),x=r("h2"),k=r("a"),Bt=r("span"),sl=n("DDD의 세 가지 기둥"),se=f(),ne=r("hr"),de=f(),c=r("ul"),G=r("li"),M=r("p"),nl=n("Ubiquitous Language"),dl=r("br"),vl=n(`
도메인에대해 이야기할 때 사용하는 공통 언어이다.
이 언어는 도메인 전문가와 개발자 모두가 사용할 수 있어야 하며, 소통 과정에서의 불확실성을 줄여 준다.`),El=f(),Pt=r("p"),_l=n(`실제 언어와 마찬가지로, 유비쿼터스 언어는 도메인에 대한 팀의 이해가 높아질수록 발전해야 한다.
비즈니스 언어가 아니기 때문에 도메인 전문가에 의해 강요되어서는 안 된다.`),pl=f(),q=r("li"),j=r("p"),ul=n("Strategic Design"),cl=r("br"),hl=n(`
비즈니스 도메인을 매핑하고 제한된 컨텍스트를 정의하는 DDD 프로세스의 한 단계이다.
Strategic Design의 목표는 비즈니스 결과에 초점을 맞춰 시스템을 설계하는 것이다.`),bl=f(),At=r("p"),ml=n(`먼저 문제 공간의 추상적 표현인 도메인 모델을 만든다.
제한된 컨텍스트를 만들기 위해 이 단계에서 해야 할 일이 더 있지만,
DDD 프로세스의 초기 단계에서도 시스템이 어떻게 보일 지 생각할 수도 있다.`),Tl=f(),yt=r("li"),W=r("p"),Rl=n("Tactical Design"),Bl=r("br"),Pl=n(`
Tactical Design에서는 시스템이 어떻게 보일지에 대한 세부사항을 다룬다.
이 단계에서는 entity, aggregates, 그리고 value object에 대해 논하며,
이러한 패턴을 통해 소프트웨어 경계를 정의한다.`),ve=f(),Ee=r("br"),_e=r("br"),pe=f(),H=r("h2"),w=r("a"),St=r("span"),Al=n("Adoptation of DDD"),ue=f(),ce=r("hr"),he=f(),$=r("p"),yl=n(`DDD는 그 개념이 처음 등장했을 때부터, 지금까지도 매우 인기있는 개념이다.
Microsoft나 Amazon 같은 기업에서도 내부적으로 DDD를 사용하므로, DDD를 배우는 것은 가치있는 일이라고 할 수 있다.`),be=f(),g=r("p"),Sl=n(`물론 DDD를 어느 곳에사 사용할 수 있는 것은 아니다.
여러 대기업에서 사용하긴 하지만, 모든 사이드 프로젝트에 적합하지는 않다.
다음 장에서 이에 대해 자세히 살펴보자.`),me=f(),Te=r("br"),Re=r("br"),Be=f(),O=r("h2"),C=r("a"),xt=r("span"),xl=n("언제 DDD를 사용해야 할까?"),Pe=f(),Ae=r("hr"),ye=f(),tt=r("p"),kl=n(`DDD는 크고 복잡한 시스템에 더 적합하다.
절대다수의 소프트웨어 개발자들이 작성하는 소프트웨어는 기본적인 CRUD 애플리케이션이다.
이러한 애플리케이션에 DDD를 적용하는 것은 오히려 더 복잡하고 비효율적일 수 있다.`),Se=f(),et=r("p"),Hl=n("Big Red Book에서는 다음과 같은 DDD 스코어 카드를 제시한다."),xe=f(),L=r("table"),kt=r("thead"),b=r("tr"),Ht=r("th"),wl=n("프로젝트 종류"),Ol=f(),wt=r("th"),Cl=n("포인트"),Ll=f(),Ot=r("th"),Il=n("고려할 사항"),Nl=f(),E=r("tbody"),m=r("tr"),Ct=r("td"),Ul=n("주로 DB에서 단순한 CRUD 작업만을 하는가?"),Gl=f(),Lt=r("td"),Ml=n("0"),ql=f(),It=r("td"),jl=n("‘단순하다’는 평가를 내리는 게 쉽지 않긴 하지만, 입력과 출력 사이에 많은 비즈니스 로직이 있는 경우 이 범주에 맞지 않을 수 있다. 반면, 입력을 Validating하여 데이터베이스 레이어로 전달하는 것 뿐이라면 이 범주에 속한다."),Wl=f(),T=r("tr"),Nt=r("td"),zl=n("애플리케이션이 30개 미만의 유저 스토리 및 비즈니스 플로우를 가지는가?"),Vl=f(),Ut=r("td"),Kl=n("1"),Ql=f(),Gt=r("td"),Yl=n("만약 미래에도 이러한 유저 스토리가 추가되지 않고 자잘한 마이너 업데이트만 계획되어 있다면, DDD를 적용할 필요성이 높지 않은 셈이다."),Zl=f(),R=r("tr"),Mt=r("td"),Fl=n("애플리케이션이 40개 이상의 유저 스토리 및 비즈니스 플로우를 가지는가?"),Jl=f(),qt=r("td"),Xl=n("2"),$l=f(),jt=r("td"),gl=n("이 단계에서부터는 DDD를 도입하는 것을 적극적으로 고려해볼만 하다. 복잡한 시스템을 구축하고 있는 것 같다면, 미리 DDD를 도입하는 것이 좋을 수도 있다."),tr=f(),B=r("tr"),Wt=r("td"),er=n("애플리케이션이 점차 복잡해질 가능성이 있는가?"),lr=f(),zt=r("td"),rr=n("3"),ir=f(),Vt=r("td"),ar=n("어떤 애플리케이션은 간단하게 시작하지만, 복잡도가 증가하기도 한다. 예를 들어 스타트업에서는 처음 몇 달 동안은 간단한 일만 할 수 있지만, 투자를 받고 나면 해결하려는 문제의 복잡성을 강화해야 한다"),Dr=f(),P=r("tr"),Kt=r("td"),or=n("애플리케이션이 오래동안 유지될 것이며, 변경 사항은 간단하지 않을 것으로 예상된다."),fr=f(),Qt=r("td"),sr=n("4"),nr=f(),Yt=r("td"),dr=n("정기적인 변경을 거치지 않는 프로그램은 거의 없다. DDD가 적합한지 판단하기 위해, 필요한 변경 사항의 복잡도를 이해하는 것은 중요한 일이다. 간단한 변경 사항보다는 크고 복잡한 변경 사항이 이 카테고리에 보다 적합하다고 볼 수 있다."),vr=f(),A=r("tr"),Zt=r("td"),Er=n("현재 도메인이 새롭기 때문에 잘 이해하지 못한 상태이며, 내가 아는 한 이러한 종류의 시스템을 구축해본 사람이 없다."),_r=f(),Ft=r("td"),pr=n("5"),ur=f(),Jt=r("td"),cr=n("모델링과 도메인 정의는 DDD의 빵과 버터와 같다"),ke=f(),lt=r("p"),hr=n(`만약 테이블에서 7 포인트 이상을 획득했다면, DDD를 적용하는 것이 좋다고 볼 수 있다.
반면 7 포인트 미만이라면, DDD의 일부 원칙이 도움이 될 수는 있지만 제대로 된 DDD를 적용하는 것은 비효율적일 수 있다.`),He=f(),we=r("br"),Oe=r("br"),Ce=f(),I=r("h2"),N=r("a"),Xt=r("span"),br=n("References"),Le=f(),Ie=r("hr"),Ne=f(),rt=r("center"),y=r("p"),z=r("a"),it=r("img"),mr=f(),Tr=r("br"),Rr=f(),V=r("a"),Br=n("Matthew Boyle, Domain-Driven Design with Golang』, O’Reilly Media, Inc."),this.h()},l(t){p=i(t,"H2",{id:!0});var D=a(p);S=i(D,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Cr=a(S);ut=i(Cr,"SPAN",{class:!0}),a(ut).forEach(l),Cr.forEach(l),Ve=d(D,"Domain Driven Design의 탄생"),D.forEach(l),$t=s(t),gt=i(t,"HR",{}),te=s(t),K=i(t,"P",{});var Lr=a(K);Ke=d(Lr,`소프트웨어가 점점 복잡해지면서 공학자들과 아키텍트들은 시스템의 구조에 대해 여러 가지 고민을 하였고,
모델링하려는 문제 공간(도메인)을 시스템에 나타내는 방식으로 접근했다.
이 때 시스템이 도메인에 가까울 수록 변경하기가 쉽다는 장점이 있었고, 시스템과 실세계의 도메인 사이의 단절이 적기 때문에 다른 관계자가 모델을 이해하기 쉬웠다.`),Lr.forEach(l),ee=s(t),Q=i(t,"P",{});var Ir=a(Q);Qe=d(Ir,`소프트웨어 엔지니어인 Eric Evans가 마주한 문제는 시스템의 복잡성 증가와 시스템 생성 및 유지 보수의 실패였다.
이로 인해 그는 Domain-Driven Design: Tacking Complexity in the Heart of Software , Addison-Wesley Professional 이라는 책을 저술하였다.`),Ir.forEach(l),le=s(t),Y=i(t,"P",{});var Nr=a(Y);Ye=d(Nr,"이 책은 복잡한 시스템을 구축하고 유지하는 데 도움이 되는 방법들을 제시하며, 도메인 주도 설계의 많은 부분이 객체지향 설계 패턴에서 유래했음을 언급하고 있다."),Nr.forEach(l),re=s(t),u=i(t,"BLOCKQUOTE",{});var at=a(u);ct=i(at,"P",{});var Ur=a(ct);ht=i(Ur,"STRONG",{});var Gr=a(ht);Ze=d(Gr,"객체지향 패턴이란?"),Gr.forEach(l),Ur.forEach(l),Fe=s(at),U=i(at,"P",{});var Ue=a(U);Je=d(Ue,"1995년도에 저술된 "),bt=i(Ue,"EM",{});var Mr=a(bt);Xe=d(Mr,"Design Patterns, Elements of Reusable Object-Oriented Software"),Mr.forEach(l),$e=d(Ue,`라는 책은 현재까지도 컴퓨터공학 분야에서 가장 유명한 책 중 하나이다.
이 책에서는 뛰어난 확장성과 유지보수성을 가진 객체지향 소프트웨어를 설계하기 위한 23개의 패턴을 소개하고 있다.
그리고, DDD에서도 이러한 패턴 중 일부에서 아주 중요한 영감을 얻었다고 한다.`),Ue.forEach(l),ge=s(at),h=i(at,"UL",{});var Dt=a(h);Z=i(Dt,"LI",{});var Pr=a(Z);mt=i(Pr,"STRONG",{});var qr=a(mt);tl=d(qr,"Creational Patterns"),qr.forEach(l),el=d(Pr," : 오브젝트를 직접 생성하지 않고, 생성하는 방법을 제공하는 패턴으로, 오브젝트 생성의 유연성을 높이고 코드의 유지보수를 쉽게 한다."),Pr.forEach(l),ll=s(Dt),F=i(Dt,"LI",{});var Ar=a(F);Tt=i(Ar,"STRONG",{});var jr=a(Tt);rl=d(jr,"Structural Patterns"),jr.forEach(l),il=d(Ar," : 특정 기능을 수행하기 위해 클래스와 객체를 조합하는 패턴으로, 클래스와 객체의 구성을 통해 더 큰 구조를 만들 수 있다."),Ar.forEach(l),al=s(Dt),J=i(Dt,"LI",{});var yr=a(J);Rt=i(yr,"STRONG",{});var Wr=a(Rt);Dl=d(Wr,"Behavioral Patterns"),Wr.forEach(l),ol=d(yr," : 오브젝트 사이의 통신에 관한 패턴이다."),yr.forEach(l),Dt.forEach(l),at.forEach(l),ie=s(t),X=i(t,"P",{});var zr=a(X);fl=d(zr,`Big Blue Book이라고도 불리는 Evans의 책은, 세련되고 명확한 시스템을 설계하기 위한 공통 언어와 원칙을 제시한다.
또한, 복잡한 소프트웨어를 개선할 때 사용할 수 있는 세 가지 기둥을 제시한다.`),zr.forEach(l),ae=s(t),De=i(t,"BR",{}),oe=i(t,"BR",{}),fe=s(t),x=i(t,"H2",{id:!0});var Sr=a(x);k=i(Sr,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Vr=a(k);Bt=i(Vr,"SPAN",{class:!0}),a(Bt).forEach(l),Vr.forEach(l),sl=d(Sr,"DDD의 세 가지 기둥"),Sr.forEach(l),se=s(t),ne=i(t,"HR",{}),de=s(t),c=i(t,"UL",{});var ot=a(c);G=i(ot,"LI",{});var Ge=a(G);M=i(Ge,"P",{});var Me=a(M);nl=d(Me,"Ubiquitous Language"),dl=i(Me,"BR",{}),vl=d(Me,`
도메인에대해 이야기할 때 사용하는 공통 언어이다.
이 언어는 도메인 전문가와 개발자 모두가 사용할 수 있어야 하며, 소통 과정에서의 불확실성을 줄여 준다.`),Me.forEach(l),El=s(Ge),Pt=i(Ge,"P",{});var Kr=a(Pt);_l=d(Kr,`실제 언어와 마찬가지로, 유비쿼터스 언어는 도메인에 대한 팀의 이해가 높아질수록 발전해야 한다.
비즈니스 언어가 아니기 때문에 도메인 전문가에 의해 강요되어서는 안 된다.`),Kr.forEach(l),Ge.forEach(l),pl=s(ot),q=i(ot,"LI",{});var qe=a(q);j=i(qe,"P",{});var je=a(j);ul=d(je,"Strategic Design"),cl=i(je,"BR",{}),hl=d(je,`
비즈니스 도메인을 매핑하고 제한된 컨텍스트를 정의하는 DDD 프로세스의 한 단계이다.
Strategic Design의 목표는 비즈니스 결과에 초점을 맞춰 시스템을 설계하는 것이다.`),je.forEach(l),bl=s(qe),At=i(qe,"P",{});var Qr=a(At);ml=d(Qr,`먼저 문제 공간의 추상적 표현인 도메인 모델을 만든다.
제한된 컨텍스트를 만들기 위해 이 단계에서 해야 할 일이 더 있지만,
DDD 프로세스의 초기 단계에서도 시스템이 어떻게 보일 지 생각할 수도 있다.`),Qr.forEach(l),qe.forEach(l),Tl=s(ot),yt=i(ot,"LI",{});var Yr=a(yt);W=i(Yr,"P",{});var We=a(W);Rl=d(We,"Tactical Design"),Bl=i(We,"BR",{}),Pl=d(We,`
Tactical Design에서는 시스템이 어떻게 보일지에 대한 세부사항을 다룬다.
이 단계에서는 entity, aggregates, 그리고 value object에 대해 논하며,
이러한 패턴을 통해 소프트웨어 경계를 정의한다.`),We.forEach(l),Yr.forEach(l),ot.forEach(l),ve=s(t),Ee=i(t,"BR",{}),_e=i(t,"BR",{}),pe=s(t),H=i(t,"H2",{id:!0});var xr=a(H);w=i(xr,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Zr=a(w);St=i(Zr,"SPAN",{class:!0}),a(St).forEach(l),Zr.forEach(l),Al=d(xr,"Adoptation of DDD"),xr.forEach(l),ue=s(t),ce=i(t,"HR",{}),he=s(t),$=i(t,"P",{});var Fr=a($);yl=d(Fr,`DDD는 그 개념이 처음 등장했을 때부터, 지금까지도 매우 인기있는 개념이다.
Microsoft나 Amazon 같은 기업에서도 내부적으로 DDD를 사용하므로, DDD를 배우는 것은 가치있는 일이라고 할 수 있다.`),Fr.forEach(l),be=s(t),g=i(t,"P",{});var Jr=a(g);Sl=d(Jr,`물론 DDD를 어느 곳에사 사용할 수 있는 것은 아니다.
여러 대기업에서 사용하긴 하지만, 모든 사이드 프로젝트에 적합하지는 않다.
다음 장에서 이에 대해 자세히 살펴보자.`),Jr.forEach(l),me=s(t),Te=i(t,"BR",{}),Re=i(t,"BR",{}),Be=s(t),O=i(t,"H2",{id:!0});var kr=a(O);C=i(kr,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Xr=a(C);xt=i(Xr,"SPAN",{class:!0}),a(xt).forEach(l),Xr.forEach(l),xl=d(kr,"언제 DDD를 사용해야 할까?"),kr.forEach(l),Pe=s(t),Ae=i(t,"HR",{}),ye=s(t),tt=i(t,"P",{});var $r=a(tt);kl=d($r,`DDD는 크고 복잡한 시스템에 더 적합하다.
절대다수의 소프트웨어 개발자들이 작성하는 소프트웨어는 기본적인 CRUD 애플리케이션이다.
이러한 애플리케이션에 DDD를 적용하는 것은 오히려 더 복잡하고 비효율적일 수 있다.`),$r.forEach(l),Se=s(t),et=i(t,"P",{});var gr=a(et);Hl=d(gr,"Big Red Book에서는 다음과 같은 DDD 스코어 카드를 제시한다."),gr.forEach(l),xe=s(t),L=i(t,"TABLE",{});var ze=a(L);kt=i(ze,"THEAD",{});var ti=a(kt);b=i(ti,"TR",{});var ft=a(b);Ht=i(ft,"TH",{});var ei=a(Ht);wl=d(ei,"프로젝트 종류"),ei.forEach(l),Ol=s(ft),wt=i(ft,"TH",{});var li=a(wt);Cl=d(li,"포인트"),li.forEach(l),Ll=s(ft),Ot=i(ft,"TH",{});var ri=a(Ot);Il=d(ri,"고려할 사항"),ri.forEach(l),ft.forEach(l),ti.forEach(l),Nl=s(ze),E=i(ze,"TBODY",{});var _=a(E);m=i(_,"TR",{});var st=a(m);Ct=i(st,"TD",{});var ii=a(Ct);Ul=d(ii,"주로 DB에서 단순한 CRUD 작업만을 하는가?"),ii.forEach(l),Gl=s(st),Lt=i(st,"TD",{});var ai=a(Lt);Ml=d(ai,"0"),ai.forEach(l),ql=s(st),It=i(st,"TD",{});var Di=a(It);jl=d(Di,"‘단순하다’는 평가를 내리는 게 쉽지 않긴 하지만, 입력과 출력 사이에 많은 비즈니스 로직이 있는 경우 이 범주에 맞지 않을 수 있다. 반면, 입력을 Validating하여 데이터베이스 레이어로 전달하는 것 뿐이라면 이 범주에 속한다."),Di.forEach(l),st.forEach(l),Wl=s(_),T=i(_,"TR",{});var nt=a(T);Nt=i(nt,"TD",{});var oi=a(Nt);zl=d(oi,"애플리케이션이 30개 미만의 유저 스토리 및 비즈니스 플로우를 가지는가?"),oi.forEach(l),Vl=s(nt),Ut=i(nt,"TD",{});var fi=a(Ut);Kl=d(fi,"1"),fi.forEach(l),Ql=s(nt),Gt=i(nt,"TD",{});var si=a(Gt);Yl=d(si,"만약 미래에도 이러한 유저 스토리가 추가되지 않고 자잘한 마이너 업데이트만 계획되어 있다면, DDD를 적용할 필요성이 높지 않은 셈이다."),si.forEach(l),nt.forEach(l),Zl=s(_),R=i(_,"TR",{});var dt=a(R);Mt=i(dt,"TD",{});var ni=a(Mt);Fl=d(ni,"애플리케이션이 40개 이상의 유저 스토리 및 비즈니스 플로우를 가지는가?"),ni.forEach(l),Jl=s(dt),qt=i(dt,"TD",{});var di=a(qt);Xl=d(di,"2"),di.forEach(l),$l=s(dt),jt=i(dt,"TD",{});var vi=a(jt);gl=d(vi,"이 단계에서부터는 DDD를 도입하는 것을 적극적으로 고려해볼만 하다. 복잡한 시스템을 구축하고 있는 것 같다면, 미리 DDD를 도입하는 것이 좋을 수도 있다."),vi.forEach(l),dt.forEach(l),tr=s(_),B=i(_,"TR",{});var vt=a(B);Wt=i(vt,"TD",{});var Ei=a(Wt);er=d(Ei,"애플리케이션이 점차 복잡해질 가능성이 있는가?"),Ei.forEach(l),lr=s(vt),zt=i(vt,"TD",{});var _i=a(zt);rr=d(_i,"3"),_i.forEach(l),ir=s(vt),Vt=i(vt,"TD",{});var pi=a(Vt);ar=d(pi,"어떤 애플리케이션은 간단하게 시작하지만, 복잡도가 증가하기도 한다. 예를 들어 스타트업에서는 처음 몇 달 동안은 간단한 일만 할 수 있지만, 투자를 받고 나면 해결하려는 문제의 복잡성을 강화해야 한다"),pi.forEach(l),vt.forEach(l),Dr=s(_),P=i(_,"TR",{});var Et=a(P);Kt=i(Et,"TD",{});var ui=a(Kt);or=d(ui,"애플리케이션이 오래동안 유지될 것이며, 변경 사항은 간단하지 않을 것으로 예상된다."),ui.forEach(l),fr=s(Et),Qt=i(Et,"TD",{});var ci=a(Qt);sr=d(ci,"4"),ci.forEach(l),nr=s(Et),Yt=i(Et,"TD",{});var hi=a(Yt);dr=d(hi,"정기적인 변경을 거치지 않는 프로그램은 거의 없다. DDD가 적합한지 판단하기 위해, 필요한 변경 사항의 복잡도를 이해하는 것은 중요한 일이다. 간단한 변경 사항보다는 크고 복잡한 변경 사항이 이 카테고리에 보다 적합하다고 볼 수 있다."),hi.forEach(l),Et.forEach(l),vr=s(_),A=i(_,"TR",{});var _t=a(A);Zt=i(_t,"TD",{});var bi=a(Zt);Er=d(bi,"현재 도메인이 새롭기 때문에 잘 이해하지 못한 상태이며, 내가 아는 한 이러한 종류의 시스템을 구축해본 사람이 없다."),bi.forEach(l),_r=s(_t),Ft=i(_t,"TD",{});var mi=a(Ft);pr=d(mi,"5"),mi.forEach(l),ur=s(_t),Jt=i(_t,"TD",{});var Ti=a(Jt);cr=d(Ti,"모델링과 도메인 정의는 DDD의 빵과 버터와 같다"),Ti.forEach(l),_t.forEach(l),_.forEach(l),ze.forEach(l),ke=s(t),lt=i(t,"P",{});var Ri=a(lt);hr=d(Ri,`만약 테이블에서 7 포인트 이상을 획득했다면, DDD를 적용하는 것이 좋다고 볼 수 있다.
반면 7 포인트 미만이라면, DDD의 일부 원칙이 도움이 될 수는 있지만 제대로 된 DDD를 적용하는 것은 비효율적일 수 있다.`),Ri.forEach(l),He=s(t),we=i(t,"BR",{}),Oe=i(t,"BR",{}),Ce=s(t),I=i(t,"H2",{id:!0});var Hr=a(I);N=i(Hr,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Bi=a(N);Xt=i(Bi,"SPAN",{class:!0}),a(Xt).forEach(l),Bi.forEach(l),br=d(Hr,"References"),Hr.forEach(l),Le=s(t),Ie=i(t,"HR",{}),Ne=s(t),rt=i(t,"CENTER",{});var Pi=a(rt);y=i(Pi,"P",{});var pt=a(y);z=i(pt,"A",{href:!0,rel:!0});var Ai=a(z);it=i(Ai,"IMG",{src:!0,alt:!0}),Ai.forEach(l),mr=s(pt),Tr=i(pt,"BR",{}),Rr=s(pt),V=i(pt,"A",{href:!0,rel:!0});var yi=a(V);Br=d(yi,"Matthew Boyle, Domain-Driven Design with Golang』, O’Reilly Media, Inc."),yi.forEach(l),pt.forEach(l),Pi.forEach(l),this.h()},h(){v(ut,"class","icon icon-link"),v(S,"aria-hidden","true"),v(S,"tabindex","-1"),v(S,"href","#domain-driven-design의-탄생"),v(p,"id","domain-driven-design의-탄생"),v(Bt,"class","icon icon-link"),v(k,"aria-hidden","true"),v(k,"tabindex","-1"),v(k,"href","#ddd의-세-가지-기둥"),v(x,"id","ddd의-세-가지-기둥"),v(St,"class","icon icon-link"),v(w,"aria-hidden","true"),v(w,"tabindex","-1"),v(w,"href","#adoptation-of-ddd"),v(H,"id","adoptation-of-ddd"),v(xt,"class","icon icon-link"),v(C,"aria-hidden","true"),v(C,"tabindex","-1"),v(C,"href","#언제-ddd를-사용해야-할까"),v(O,"id","언제-ddd를-사용해야-할까"),v(Xt,"class","icon icon-link"),v(N,"aria-hidden","true"),v(N,"tabindex","-1"),v(N,"href","#references"),v(I,"id","references"),wi(it.src,Or="https://learning.oreilly.com/covers/urn:orm:book:9781804613450/400w/")||v(it,"src",Or),v(it,"alt","Domain-Driven Design with Golang Cover"),v(z,"href","https://learning.oreilly.com/library/view/domain-driven-design-with/9781804613450/"),v(z,"rel","nofollow"),v(V,"href","https://learning.oreilly.com/library/view/domain-driven-design-with/9781804613450/"),v(V,"rel","nofollow")},m(t,D){o(t,p,D),e(p,S),e(S,ut),e(p,Ve),o(t,$t,D),o(t,gt,D),o(t,te,D),o(t,K,D),e(K,Ke),o(t,ee,D),o(t,Q,D),e(Q,Qe),o(t,le,D),o(t,Y,D),e(Y,Ye),o(t,re,D),o(t,u,D),e(u,ct),e(ct,ht),e(ht,Ze),e(u,Fe),e(u,U),e(U,Je),e(U,bt),e(bt,Xe),e(U,$e),e(u,ge),e(u,h),e(h,Z),e(Z,mt),e(mt,tl),e(Z,el),e(h,ll),e(h,F),e(F,Tt),e(Tt,rl),e(F,il),e(h,al),e(h,J),e(J,Rt),e(Rt,Dl),e(J,ol),o(t,ie,D),o(t,X,D),e(X,fl),o(t,ae,D),o(t,De,D),o(t,oe,D),o(t,fe,D),o(t,x,D),e(x,k),e(k,Bt),e(x,sl),o(t,se,D),o(t,ne,D),o(t,de,D),o(t,c,D),e(c,G),e(G,M),e(M,nl),e(M,dl),e(M,vl),e(G,El),e(G,Pt),e(Pt,_l),e(c,pl),e(c,q),e(q,j),e(j,ul),e(j,cl),e(j,hl),e(q,bl),e(q,At),e(At,ml),e(c,Tl),e(c,yt),e(yt,W),e(W,Rl),e(W,Bl),e(W,Pl),o(t,ve,D),o(t,Ee,D),o(t,_e,D),o(t,pe,D),o(t,H,D),e(H,w),e(w,St),e(H,Al),o(t,ue,D),o(t,ce,D),o(t,he,D),o(t,$,D),e($,yl),o(t,be,D),o(t,g,D),e(g,Sl),o(t,me,D),o(t,Te,D),o(t,Re,D),o(t,Be,D),o(t,O,D),e(O,C),e(C,xt),e(O,xl),o(t,Pe,D),o(t,Ae,D),o(t,ye,D),o(t,tt,D),e(tt,kl),o(t,Se,D),o(t,et,D),e(et,Hl),o(t,xe,D),o(t,L,D),e(L,kt),e(kt,b),e(b,Ht),e(Ht,wl),e(b,Ol),e(b,wt),e(wt,Cl),e(b,Ll),e(b,Ot),e(Ot,Il),e(L,Nl),e(L,E),e(E,m),e(m,Ct),e(Ct,Ul),e(m,Gl),e(m,Lt),e(Lt,Ml),e(m,ql),e(m,It),e(It,jl),e(E,Wl),e(E,T),e(T,Nt),e(Nt,zl),e(T,Vl),e(T,Ut),e(Ut,Kl),e(T,Ql),e(T,Gt),e(Gt,Yl),e(E,Zl),e(E,R),e(R,Mt),e(Mt,Fl),e(R,Jl),e(R,qt),e(qt,Xl),e(R,$l),e(R,jt),e(jt,gl),e(E,tr),e(E,B),e(B,Wt),e(Wt,er),e(B,lr),e(B,zt),e(zt,rr),e(B,ir),e(B,Vt),e(Vt,ar),e(E,Dr),e(E,P),e(P,Kt),e(Kt,or),e(P,fr),e(P,Qt),e(Qt,sr),e(P,nr),e(P,Yt),e(Yt,dr),e(E,vr),e(E,A),e(A,Zt),e(Zt,Er),e(A,_r),e(A,Ft),e(Ft,pr),e(A,ur),e(A,Jt),e(Jt,cr),o(t,ke,D),o(t,lt,D),e(lt,hr),o(t,He,D),o(t,we,D),o(t,Oe,D),o(t,Ce,D),o(t,I,D),e(I,N),e(N,Xt),e(I,br),o(t,Le,D),o(t,Ie,D),o(t,Ne,D),o(t,rt,D),e(rt,y),e(y,z),e(z,it),e(y,mr),e(y,Tr),e(y,Rr),e(y,V),e(V,Br)},p:wr,i:wr,o:wr,d(t){t&&l(p),t&&l($t),t&&l(gt),t&&l(te),t&&l(K),t&&l(ee),t&&l(Q),t&&l(le),t&&l(Y),t&&l(re),t&&l(u),t&&l(ie),t&&l(X),t&&l(ae),t&&l(De),t&&l(oe),t&&l(fe),t&&l(x),t&&l(se),t&&l(ne),t&&l(de),t&&l(c),t&&l(ve),t&&l(Ee),t&&l(_e),t&&l(pe),t&&l(H),t&&l(ue),t&&l(ce),t&&l(he),t&&l($),t&&l(be),t&&l(g),t&&l(me),t&&l(Te),t&&l(Re),t&&l(Be),t&&l(O),t&&l(Pe),t&&l(Ae),t&&l(ye),t&&l(tt),t&&l(Se),t&&l(et),t&&l(xe),t&&l(L),t&&l(ke),t&&l(lt),t&&l(He),t&&l(we),t&&l(Oe),t&&l(Ce),t&&l(I),t&&l(Le),t&&l(Ie),t&&l(Ne),t&&l(rt)}}}const Li={title:"Domain Driven Design의 역사",date:"2023-07-04T00:00:00.000Z",excerpt:"History of Domain Driven Design",categories:["Golang","Backend","Architecture","Domain Driven Design"],coverImage:"/post_img/Backend/Architecture/DDD/cover.png",coverWidth:16,coverHeight:9,indexed:!0,exposed:!0};class Ii extends xi{constructor(p){super(),ki(this,p,null,Oi,Hi,{})}}export{Ii as default,Li as metadata};
