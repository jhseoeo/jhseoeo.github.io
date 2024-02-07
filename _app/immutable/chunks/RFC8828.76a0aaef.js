import{S as fo,i as so,s as po,k as i,q as a,a as s,l as r,m as o,r as f,h as t,c as p,n as E,b as T,E as l,M as gi}from"./index.d78780bf.js";function vo(ao){let W,it,Ee,_e,be,Pe,h,n,Tl,rt,ue,Q,ot,Re,X,at,de,P,El,ft,st,_l,pt,vt,bl,Tt,Ie,ce,Ce,Le,m,S,Pl,Et,Ue,Y,_t,Ne,_,V,ul,bt,Pt,Rl,dl,ut,Rt,Il,cl,dt,It,Cl,Ll,ct,Ct,Ul,Nl,Lt,We,$,Ut,he,b,F,Wl,Nt,Wt,I,hl,ht,nt,nl,mt,St,ml,Dt,xt,q,Sl,At,Ht,c,Dl,Ot,Bt,xl,kt,Vt,Al,Ft,qt,w,Hl,wt,Mt,C,Ol,yt,Zt,Bl,jt,zt,kl,Gt,Jt,M,Vl,Kt,Qt,L,Fl,Xt,Yt,ql,$t,gt,wl,li,ne,me,Se,D,ei,Ml,ti,ii,De,u,yl,ri,oi,Zl,ai,fi,jl,si,xe,Ae,He,g,pi,Oe,x,zl,vi,Ti,Gl,Ei,Be,ke,Ve,Fe,A,H,Jl,_i,qe,ll,bi,we,R,y,Kl,Pi,ui,Ql,O,Ri,Xl,di,Ii,Yl,$l,ci,Ci,Z,gl,Li,Ui,U,el,Ni,j,le,Wi,hi,ee,ni,mi,te,Si,Di,d,xi,ie,Ai,Hi,re,Oi,Bi,z,oe,ki,Vi,G,Fi,ae,qi,wi,Mi,N,fe,yi,Zi,se,ji,zi,J,pe,Gi,Ji,ve,Ki,Me,ye,Ze;return{c(){W=i("p"),it=a("학교 프로젝트 진행 중 WebRTC 내부적으로 IP 주소를 처리하는 규칙에 대해 인사이트가 필요하여 읽어본 RFC8828의 내용을 정리해보았습니다."),Ee=s(),_e=i("br"),be=i("br"),Pe=s(),h=i("h2"),n=i("a"),Tl=i("span"),rt=a("개요"),ue=s(),Q=i("p"),ot=a("WebRTC의 ICE에서는 STUN을 통해 여러 개의 IP 주소를 찾아내고 각 local-remote 주소 페어의 연결성을 테스트하여 최선의 것을 찾아냄. 수집된 주소는 엔드포인트의 물리적인(또는 가상의) private 주소와 이의 public 주소로 이루어져 있음."),Re=s(),X=i("p"),at=a("웹 애플리케이션에서는 이러한 주소로 원격 엔드포인트와 통신 가능함. 기존 웹 어플리케이션에서 public 주소 하나만 알 수 있었던 것과는 달리 로컬 네트워크 설정에 대한 추가적인 정보를 알 수 있음."),de=s(),P=i("ol"),El=i("li"),ft=a("만약 클라이언트가 multihomed인 경우 추가적인 public ip 주소를 알 수 있음. 가령 클라이언트가 split-tunnel이라고 하는 특정 종류의 VPN을 사용하는 경우 VPN의 public 주소 뿐 아니라 VPN 밑에서 돌아가는 ISP의 Public 주소도 알 수 있다고 함."),st=s(),_l=i("li"),pt=a("NAT로 숨겨진 IP를 알 수 있음."),vt=s(),bl=i("li"),Tt=a("클라이언트가 프록시를 쓰더라도, STUN으로 프록시를 우회하여 public ip를 알아낼 수 있음."),Ie=s(),ce=i("br"),Ce=i("br"),Le=s(),m=i("h2"),S=i("a"),Pl=i("span"),Et=a("원리"),Ue=s(),Y=i("p"),_t=a("WebRTC IP 처리의 중요 원리는 다음과 같음"),Ne=s(),_=i("ol"),V=i("li"),ul=i("p"),bt=a("기본적으로 WebRTC 트래픽은 전통적인 IP 라우팅 방식을 따르며(HTTP 트래픽과 동일한 인터페이스를 사용함), application이 시스템의 public 주소를 볼 수 있어야 함."),Pt=s(),Rl=i("ul"),dl=i("li"),ut=a("하지만 최적의 미디어 퀄리티를 위해 WebRTC는 모든 네트워크 인터페이스에서 최적의 경로를 찾을 수 있어야 함."),Rt=s(),Il=i("li"),cl=i("p"),dt=a("WebRTC는 NAT 순회 또는 TURN을 사용하지 않고 엔드포인트간의 직접적인 p2p 연결이 가능한 경우, 그렇게 해야 함. 이로써 p2p 라우팅을 필요로하는 애플리케이션이 성공적으로 동작할 수 있음."),It=s(),Cl=i("li"),Ll=i("p"),ct=a("WebRTC가 private IP를 공개하지 않기를 원한다면, 이를 설정할 수 있어야 함. 단 이게 기본 설정은 아님."),Ct=s(),Ul=i("li"),Nl=i("p"),Lt=a("기본 설정으로 WebRTC 트래픽은 프록시 서버를 통해 전송되지는 않아야 함. 이는 프록시를 사용하여 통신하는 경우 WebRTC 트래픽이 TCP를 통해 전송되기 때문에 성능 문제가 발생하기 때문임. 또한 WebRTC의 long-lived, high bandwidth인 연결이 프록시를 통하면 성능 문제가 생김. 하지만 클라이언트가 원할 경우 프록시를 통하여 WebRTC 연결을 보내도록 설정할 수 있어야 함."),We=s(),$=i("p"),Ut=a("이러한 원리에 기반하여, WebRTC 동작에 대한 4개의 모드를 정의할 수 있음."),he=s(),b=i("ol"),F=i("li"),Wl=i("p"),Nt=a("모든 주소를 열거함"),Wt=s(),I=i("ul"),hl=i("li"),ht=a("WebRTC는 모든 네트워크 인터페이스를 사용하여 STUN, TURN, 피어와 통신을 시도함."),nt=s(),nl=i("li"),mt=a("이를 통해 최선의 미디어 경로를 찾음."),St=s(),ml=i("li"),Dt=a("미디어 성능이 최우선적으로 중요할 때 사용하지만 많은 정보가 공개됨."),xt=s(),q=i("li"),Sl=i("p"),At=a("기본 경로 + 연관된 로컬 주소"),Ht=s(),c=i("ul"),Dl=i("li"),Ot=a("WebRTC는 커널의 라우팅 테이블을 따라야 하며, 이 경우 일반적으로 미디어 패킷이 HTTP 트래픽과 같은 경로를 타게 됨."),Bt=s(),xl=i("li"),kt=a("만약 TURN 서버가 존재하는 경우, TRUN 서버를 통과하는 경로를 선호함."),Vt=s(),Al=i("li"),Ft=a("인터페이스가 선택되면, 이 인터페이스와 연관된 private ipv4 및 ipv6 주소를 찾아 호스트 후보로 어플리케이션에 전달됨. 이로써 이 모드에서 직접적인 연결이 생성될 수 있음."),qt=s(),w=i("li"),Hl=i("p"),wt=a("기본 경로만 사용"),Mt=s(),C=i("ul"),Ol=i("li"),yt=a("이 모드는 (2)의 모드와 비슷하지만, 연관된 private 주소가 제공되지 않음."),Zt=s(),Bl=i("li"),jt=a("수집된 IP주소는 기본 경로에서 STUN 및 TURN과 같은 매커니즘을 통해 검색된 IP주소 이외엔 없음."),zt=s(),kl=i("li"),Gt=a("하지만 트래픽이 NAT를 통과하거나, TURN 서버를 통하거나, 모두 실패하여 품질에 영향을 미칠 수 있음."),Jt=s(),M=i("li"),Vl=i("p"),Kt=a("프록시 강제"),Qt=s(),L=i("ul"),Fl=i("li"),Xt=a("(3)의 모드와 동일하지만 HTTP 트래픽이 프록시를 통하는 경우, WebRTC의 트래픽도 프록시를 통하게 됨."),Yt=s(),ql=i("li"),$t=a("만약 프록시가 UDP를 지원하지 않거나 WebRTC 구현이 UDP 프록시를 지원하지 않는경우, WebRTC는 UDP를 사용하지 않고 TCP를 사용하여 프록시를 통해 전송 및 수신함."),gt=s(),wl=i("li"),li=a("TCP를 사용하면 미디어 품질 및 전송시 성능이 감소함."),ne=s(),me=i("br"),Se=s(),D=i("p"),ei=a("이때 사용자 동의가 없는 한 모드 1을 사용하지 않는다. 사용자 정의에 관련된 부분은 "),Ml=i("code"),ti=a("getUserMedia"),ii=a(" 등에서 얻을 수 있는 듯 함. 동의가 없는 경우 모드 2를 사용한다."),De=s(),u=i("ul"),yl=i("li"),ri=a("즉, 모드 2는 별다른 동의 없이 최적의 네트워크 성능을 달성할 수 있게끔 하는 합리적인 절충안이라고 볼 수 있음"),oi=s(),Zl=i("li"),ai=a("직접 연결을 달성하는데 필요한 최소 정보만 동의 없이 어플리케이션에 제공"),fi=s(),jl=i("li"),si=a("하지만 사용자 요구에 따라, 필요하다면 더 엄격한 모드를 선택함."),xe=s(),Ae=i("br"),He=s(),g=i("p"),pi=a("제안된 기본값음 모든 외부 WebRTC 트래픽이 프록시나 TURN 서버를 통과하게끔 원하는 조직도 사용 가능함"),Oe=s(),x=i("ul"),zl=i("li"),vi=a("WebRTC 트래픽이 프록시나 TURN 서버를 통해서만 나가도록 조직의 방화벽 정책을 설정하면 됨"),Ti=s(),Gl=i("li"),Ei=a("프록시나 TURN 서버가 외부 트래픽에 사용되지만, 조직 내 트래픽에 직접 연결될 수 있으며, 프록시의 경우 성능 문제를 방지할 수 있음"),Be=s(),ke=i("br"),Ve=i("br"),Fe=s(),A=i("h2"),H=i("a"),Jl=i("span"),_i=a("구현 가이드"),qe=s(),ll=i("p"),bi=a("위 정책을 구현하는 방법에 대한 WebRTC 구현 지침"),we=s(),R=i("ol"),y=i("li"),Kl=i("p"),Pi=a("정상 라우팅 보장"),ui=s(),Ql=i("ul"),O=i("li"),Ri=a("모드 2 또는 모드 3과 같은 전통적인 IP 라우팅을 시도하는 경우, 가장 간단한 방법은 와일드카드 주소(IPv4의 0.0.0.0 및 IPv6의 ::)로 소켓을 "),Xl=i("code"),di=a("bind()"),Ii=a("하는 것임."),Yl=i("ul"),$l=i("li"),ci=a("이렇게 하면 OS는 HTTP 트래픽과 동일한 방식으로 WebRTC 트래픽을 라우팅할 것이며, STUN과 TURN도 평소대로 사용되고, 호스트 후보는 아래 언급된 것처럼 여전히 결정될 수 있음."),Ci=s(),Z=i("li"),gl=i("p"),Li=a("연관된 로컬 주소 결정"),Ui=s(),U=i("ul"),el=i("li"),Ni=a("와일드카드 주소를 바인딩할 때, 모드 2에 필요한 연관된 로컬 주소를 결정하려면 추가적인 작업이 필요함."),j=i("ul"),le=i("li"),Wi=a("로컬 주소는 웹 애플리케이션 호스트로 전송되는 모든 패킷의 source address로 정의됨."),hi=s(),ee=i("li"),ni=a("웹 애플리케이션 호스트를 destination으로 사용하면 애플리케이션의 위치에 관계 없이 올바른 source address가 선택됨."),mi=s(),te=i("li"),Si=a("웹 애플리케이션 URI의 호스트 컴포넌트를 resolve하여 적절한 remote IPv4/IPv6 주소를 얻음. 클라이언트가 프록시 뒤에 있고 DNS를 통해 IP를 resolve할 수 없는 경우, 프록시의 주소를 대신 사용함."),Di=s(),d=i("li"),xi=a("일단 적절한 원격 IP가 결정되면, UDP 소켓을 적절한 와일드카드 주소에 "),ie=i("code"),Ai=a("bind()"),Hi=a("하고 원격 IP에 "),re=i("code"),Oi=a("connect()"),Bi=a("함."),z=i("ul"),oe=i("li"),ki=a("일반적으로 이 소켓은 네트워크를 통해 패킷을 보내지 않고 커널의 라우팅 테이블을 바탕으로 로컬 주소를 할당받음."),Vi=s(),G=i("li"),Fi=a("결과적으로 이 소켓으로 "),ae=i("code"),qi=a("getsocketname()"),wi=a(" 등을 호출하여 적절한 로컬 주소를 확인할 수 있음."),Mi=s(),N=i("li"),fe=i("p"),yi=a("어플리케이션 동작"),Zi=s(),se=i("p"),ji=a("WebRTC를 사용하는 애플리케이션이 잘못 동작하지 않게끔, 다음과 같은 가이드라인을 제공함."),zi=s(),J=i("ul"),pe=i("li"),Gi=a("모드 3 및 4를 지원하기 위해서는 UDP 및 TCP 연결을 모두 지원하는 TURN 서버를 배포해야 함."),Ji=s(),ve=i("li"),Ki=a("어플리케이션은 host candidate의 존재 유무를 확인하여 모든 ICE candidates에 접근할 수 없는 경우를 감지할 수 있어야 함. host candidate가 없다면 모드 3 및 4를 사용중인 경우임."),Me=s(),ye=i("br"),Ze=i("br"),this.h()},l(e){W=r(e,"P",{});var v=o(W);it=f(v,"학교 프로젝트 진행 중 WebRTC 내부적으로 IP 주소를 처리하는 규칙에 대해 인사이트가 필요하여 읽어본 RFC8828의 내용을 정리해보았습니다."),v.forEach(t),Ee=p(e),_e=r(e,"BR",{}),be=r(e,"BR",{}),Pe=p(e),h=r(e,"H2",{id:!0});var Qi=o(h);n=r(Qi,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var lr=o(n);Tl=r(lr,"SPAN",{class:!0}),o(Tl).forEach(t),lr.forEach(t),rt=f(Qi,"개요"),Qi.forEach(t),ue=p(e),Q=r(e,"P",{});var er=o(Q);ot=f(er,"WebRTC의 ICE에서는 STUN을 통해 여러 개의 IP 주소를 찾아내고 각 local-remote 주소 페어의 연결성을 테스트하여 최선의 것을 찾아냄. 수집된 주소는 엔드포인트의 물리적인(또는 가상의) private 주소와 이의 public 주소로 이루어져 있음."),er.forEach(t),Re=p(e),X=r(e,"P",{});var tr=o(X);at=f(tr,"웹 애플리케이션에서는 이러한 주소로 원격 엔드포인트와 통신 가능함. 기존 웹 어플리케이션에서 public 주소 하나만 알 수 있었던 것과는 달리 로컬 네트워크 설정에 대한 추가적인 정보를 알 수 있음."),tr.forEach(t),de=p(e),P=r(e,"OL",{});var tl=o(P);El=r(tl,"LI",{});var ir=o(El);ft=f(ir,"만약 클라이언트가 multihomed인 경우 추가적인 public ip 주소를 알 수 있음. 가령 클라이언트가 split-tunnel이라고 하는 특정 종류의 VPN을 사용하는 경우 VPN의 public 주소 뿐 아니라 VPN 밑에서 돌아가는 ISP의 Public 주소도 알 수 있다고 함."),ir.forEach(t),st=p(tl),_l=r(tl,"LI",{});var rr=o(_l);pt=f(rr,"NAT로 숨겨진 IP를 알 수 있음."),rr.forEach(t),vt=p(tl),bl=r(tl,"LI",{});var or=o(bl);Tt=f(or,"클라이언트가 프록시를 쓰더라도, STUN으로 프록시를 우회하여 public ip를 알아낼 수 있음."),or.forEach(t),tl.forEach(t),Ie=p(e),ce=r(e,"BR",{}),Ce=r(e,"BR",{}),Le=p(e),m=r(e,"H2",{id:!0});var Xi=o(m);S=r(Xi,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ar=o(S);Pl=r(ar,"SPAN",{class:!0}),o(Pl).forEach(t),ar.forEach(t),Et=f(Xi,"원리"),Xi.forEach(t),Ue=p(e),Y=r(e,"P",{});var fr=o(Y);_t=f(fr,"WebRTC IP 처리의 중요 원리는 다음과 같음"),fr.forEach(t),Ne=p(e),_=r(e,"OL",{});var B=o(_);V=r(B,"LI",{});var je=o(V);ul=r(je,"P",{});var sr=o(ul);bt=f(sr,"기본적으로 WebRTC 트래픽은 전통적인 IP 라우팅 방식을 따르며(HTTP 트래픽과 동일한 인터페이스를 사용함), application이 시스템의 public 주소를 볼 수 있어야 함."),sr.forEach(t),Pt=p(je),Rl=r(je,"UL",{});var pr=o(Rl);dl=r(pr,"LI",{});var vr=o(dl);ut=f(vr,"하지만 최적의 미디어 퀄리티를 위해 WebRTC는 모든 네트워크 인터페이스에서 최적의 경로를 찾을 수 있어야 함."),vr.forEach(t),pr.forEach(t),je.forEach(t),Rt=p(B),Il=r(B,"LI",{});var Tr=o(Il);cl=r(Tr,"P",{});var Er=o(cl);dt=f(Er,"WebRTC는 NAT 순회 또는 TURN을 사용하지 않고 엔드포인트간의 직접적인 p2p 연결이 가능한 경우, 그렇게 해야 함. 이로써 p2p 라우팅을 필요로하는 애플리케이션이 성공적으로 동작할 수 있음."),Er.forEach(t),Tr.forEach(t),It=p(B),Cl=r(B,"LI",{});var _r=o(Cl);Ll=r(_r,"P",{});var br=o(Ll);ct=f(br,"WebRTC가 private IP를 공개하지 않기를 원한다면, 이를 설정할 수 있어야 함. 단 이게 기본 설정은 아님."),br.forEach(t),_r.forEach(t),Ct=p(B),Ul=r(B,"LI",{});var Pr=o(Ul);Nl=r(Pr,"P",{});var ur=o(Nl);Lt=f(ur,"기본 설정으로 WebRTC 트래픽은 프록시 서버를 통해 전송되지는 않아야 함. 이는 프록시를 사용하여 통신하는 경우 WebRTC 트래픽이 TCP를 통해 전송되기 때문에 성능 문제가 발생하기 때문임. 또한 WebRTC의 long-lived, high bandwidth인 연결이 프록시를 통하면 성능 문제가 생김. 하지만 클라이언트가 원할 경우 프록시를 통하여 WebRTC 연결을 보내도록 설정할 수 있어야 함."),ur.forEach(t),Pr.forEach(t),B.forEach(t),We=p(e),$=r(e,"P",{});var Rr=o($);Ut=f(Rr,"이러한 원리에 기반하여, WebRTC 동작에 대한 4개의 모드를 정의할 수 있음."),Rr.forEach(t),he=p(e),b=r(e,"OL",{});var k=o(b);F=r(k,"LI",{});var ze=o(F);Wl=r(ze,"P",{});var dr=o(Wl);Nt=f(dr,"모든 주소를 열거함"),dr.forEach(t),Wt=p(ze),I=r(ze,"UL",{});var il=o(I);hl=r(il,"LI",{});var Ir=o(hl);ht=f(Ir,"WebRTC는 모든 네트워크 인터페이스를 사용하여 STUN, TURN, 피어와 통신을 시도함."),Ir.forEach(t),nt=p(il),nl=r(il,"LI",{});var cr=o(nl);mt=f(cr,"이를 통해 최선의 미디어 경로를 찾음."),cr.forEach(t),St=p(il),ml=r(il,"LI",{});var Cr=o(ml);Dt=f(Cr,"미디어 성능이 최우선적으로 중요할 때 사용하지만 많은 정보가 공개됨."),Cr.forEach(t),il.forEach(t),ze.forEach(t),xt=p(k),q=r(k,"LI",{});var Ge=o(q);Sl=r(Ge,"P",{});var Lr=o(Sl);At=f(Lr,"기본 경로 + 연관된 로컬 주소"),Lr.forEach(t),Ht=p(Ge),c=r(Ge,"UL",{});var rl=o(c);Dl=r(rl,"LI",{});var Ur=o(Dl);Ot=f(Ur,"WebRTC는 커널의 라우팅 테이블을 따라야 하며, 이 경우 일반적으로 미디어 패킷이 HTTP 트래픽과 같은 경로를 타게 됨."),Ur.forEach(t),Bt=p(rl),xl=r(rl,"LI",{});var Nr=o(xl);kt=f(Nr,"만약 TURN 서버가 존재하는 경우, TRUN 서버를 통과하는 경로를 선호함."),Nr.forEach(t),Vt=p(rl),Al=r(rl,"LI",{});var Wr=o(Al);Ft=f(Wr,"인터페이스가 선택되면, 이 인터페이스와 연관된 private ipv4 및 ipv6 주소를 찾아 호스트 후보로 어플리케이션에 전달됨. 이로써 이 모드에서 직접적인 연결이 생성될 수 있음."),Wr.forEach(t),rl.forEach(t),Ge.forEach(t),qt=p(k),w=r(k,"LI",{});var Je=o(w);Hl=r(Je,"P",{});var hr=o(Hl);wt=f(hr,"기본 경로만 사용"),hr.forEach(t),Mt=p(Je),C=r(Je,"UL",{});var ol=o(C);Ol=r(ol,"LI",{});var nr=o(Ol);yt=f(nr,"이 모드는 (2)의 모드와 비슷하지만, 연관된 private 주소가 제공되지 않음."),nr.forEach(t),Zt=p(ol),Bl=r(ol,"LI",{});var mr=o(Bl);jt=f(mr,"수집된 IP주소는 기본 경로에서 STUN 및 TURN과 같은 매커니즘을 통해 검색된 IP주소 이외엔 없음."),mr.forEach(t),zt=p(ol),kl=r(ol,"LI",{});var Sr=o(kl);Gt=f(Sr,"하지만 트래픽이 NAT를 통과하거나, TURN 서버를 통하거나, 모두 실패하여 품질에 영향을 미칠 수 있음."),Sr.forEach(t),ol.forEach(t),Je.forEach(t),Jt=p(k),M=r(k,"LI",{});var Ke=o(M);Vl=r(Ke,"P",{});var Dr=o(Vl);Kt=f(Dr,"프록시 강제"),Dr.forEach(t),Qt=p(Ke),L=r(Ke,"UL",{});var al=o(L);Fl=r(al,"LI",{});var xr=o(Fl);Xt=f(xr,"(3)의 모드와 동일하지만 HTTP 트래픽이 프록시를 통하는 경우, WebRTC의 트래픽도 프록시를 통하게 됨."),xr.forEach(t),Yt=p(al),ql=r(al,"LI",{});var Ar=o(ql);$t=f(Ar,"만약 프록시가 UDP를 지원하지 않거나 WebRTC 구현이 UDP 프록시를 지원하지 않는경우, WebRTC는 UDP를 사용하지 않고 TCP를 사용하여 프록시를 통해 전송 및 수신함."),Ar.forEach(t),gt=p(al),wl=r(al,"LI",{});var Hr=o(wl);li=f(Hr,"TCP를 사용하면 미디어 품질 및 전송시 성능이 감소함."),Hr.forEach(t),al.forEach(t),Ke.forEach(t),k.forEach(t),ne=p(e),me=r(e,"BR",{}),Se=p(e),D=r(e,"P",{});var Qe=o(D);ei=f(Qe,"이때 사용자 동의가 없는 한 모드 1을 사용하지 않는다. 사용자 정의에 관련된 부분은 "),Ml=r(Qe,"CODE",{});var Or=o(Ml);ti=f(Or,"getUserMedia"),Or.forEach(t),ii=f(Qe," 등에서 얻을 수 있는 듯 함. 동의가 없는 경우 모드 2를 사용한다."),Qe.forEach(t),De=p(e),u=r(e,"UL",{});var fl=o(u);yl=r(fl,"LI",{});var Br=o(yl);ri=f(Br,"즉, 모드 2는 별다른 동의 없이 최적의 네트워크 성능을 달성할 수 있게끔 하는 합리적인 절충안이라고 볼 수 있음"),Br.forEach(t),oi=p(fl),Zl=r(fl,"LI",{});var kr=o(Zl);ai=f(kr,"직접 연결을 달성하는데 필요한 최소 정보만 동의 없이 어플리케이션에 제공"),kr.forEach(t),fi=p(fl),jl=r(fl,"LI",{});var Vr=o(jl);si=f(Vr,"하지만 사용자 요구에 따라, 필요하다면 더 엄격한 모드를 선택함."),Vr.forEach(t),fl.forEach(t),xe=p(e),Ae=r(e,"BR",{}),He=p(e),g=r(e,"P",{});var Fr=o(g);pi=f(Fr,"제안된 기본값음 모든 외부 WebRTC 트래픽이 프록시나 TURN 서버를 통과하게끔 원하는 조직도 사용 가능함"),Fr.forEach(t),Oe=p(e),x=r(e,"UL",{});var Xe=o(x);zl=r(Xe,"LI",{});var qr=o(zl);vi=f(qr,"WebRTC 트래픽이 프록시나 TURN 서버를 통해서만 나가도록 조직의 방화벽 정책을 설정하면 됨"),qr.forEach(t),Ti=p(Xe),Gl=r(Xe,"LI",{});var wr=o(Gl);Ei=f(wr,"프록시나 TURN 서버가 외부 트래픽에 사용되지만, 조직 내 트래픽에 직접 연결될 수 있으며, 프록시의 경우 성능 문제를 방지할 수 있음"),wr.forEach(t),Xe.forEach(t),Be=p(e),ke=r(e,"BR",{}),Ve=r(e,"BR",{}),Fe=p(e),A=r(e,"H2",{id:!0});var Yi=o(A);H=r(Yi,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Mr=o(H);Jl=r(Mr,"SPAN",{class:!0}),o(Jl).forEach(t),Mr.forEach(t),_i=f(Yi,"구현 가이드"),Yi.forEach(t),qe=p(e),ll=r(e,"P",{});var yr=o(ll);bi=f(yr,"위 정책을 구현하는 방법에 대한 WebRTC 구현 지침"),yr.forEach(t),we=p(e),R=r(e,"OL",{});var sl=o(R);y=r(sl,"LI",{});var Ye=o(y);Kl=r(Ye,"P",{});var Zr=o(Kl);Pi=f(Zr,"정상 라우팅 보장"),Zr.forEach(t),ui=p(Ye),Ql=r(Ye,"UL",{});var jr=o(Ql);O=r(jr,"LI",{});var Te=o(O);Ri=f(Te,"모드 2 또는 모드 3과 같은 전통적인 IP 라우팅을 시도하는 경우, 가장 간단한 방법은 와일드카드 주소(IPv4의 0.0.0.0 및 IPv6의 ::)로 소켓을 "),Xl=r(Te,"CODE",{});var zr=o(Xl);di=f(zr,"bind()"),zr.forEach(t),Ii=f(Te,"하는 것임."),Yl=r(Te,"UL",{});var Gr=o(Yl);$l=r(Gr,"LI",{});var Jr=o($l);ci=f(Jr,"이렇게 하면 OS는 HTTP 트래픽과 동일한 방식으로 WebRTC 트래픽을 라우팅할 것이며, STUN과 TURN도 평소대로 사용되고, 호스트 후보는 아래 언급된 것처럼 여전히 결정될 수 있음."),Jr.forEach(t),Gr.forEach(t),Te.forEach(t),jr.forEach(t),Ye.forEach(t),Ci=p(sl),Z=r(sl,"LI",{});var $e=o(Z);gl=r($e,"P",{});var Kr=o(gl);Li=f(Kr,"연관된 로컬 주소 결정"),Kr.forEach(t),Ui=p($e),U=r($e,"UL",{});var pl=o(U);el=r(pl,"LI",{});var $i=o(el);Ni=f($i,"와일드카드 주소를 바인딩할 때, 모드 2에 필요한 연관된 로컬 주소를 결정하려면 추가적인 작업이 필요함."),j=r($i,"UL",{});var ge=o(j);le=r(ge,"LI",{});var Qr=o(le);Wi=f(Qr,"로컬 주소는 웹 애플리케이션 호스트로 전송되는 모든 패킷의 source address로 정의됨."),Qr.forEach(t),hi=p(ge),ee=r(ge,"LI",{});var Xr=o(ee);ni=f(Xr,"웹 애플리케이션 호스트를 destination으로 사용하면 애플리케이션의 위치에 관계 없이 올바른 source address가 선택됨."),Xr.forEach(t),ge.forEach(t),$i.forEach(t),mi=p(pl),te=r(pl,"LI",{});var Yr=o(te);Si=f(Yr,"웹 애플리케이션 URI의 호스트 컴포넌트를 resolve하여 적절한 remote IPv4/IPv6 주소를 얻음. 클라이언트가 프록시 뒤에 있고 DNS를 통해 IP를 resolve할 수 없는 경우, 프록시의 주소를 대신 사용함."),Yr.forEach(t),Di=p(pl),d=r(pl,"LI",{});var K=o(d);xi=f(K,"일단 적절한 원격 IP가 결정되면, UDP 소켓을 적절한 와일드카드 주소에 "),ie=r(K,"CODE",{});var $r=o(ie);Ai=f($r,"bind()"),$r.forEach(t),Hi=f(K,"하고 원격 IP에 "),re=r(K,"CODE",{});var gr=o(re);Oi=f(gr,"connect()"),gr.forEach(t),Bi=f(K,"함."),z=r(K,"UL",{});var lt=o(z);oe=r(lt,"LI",{});var lo=o(oe);ki=f(lo,"일반적으로 이 소켓은 네트워크를 통해 패킷을 보내지 않고 커널의 라우팅 테이블을 바탕으로 로컬 주소를 할당받음."),lo.forEach(t),Vi=p(lt),G=r(lt,"LI",{});var et=o(G);Fi=f(et,"결과적으로 이 소켓으로 "),ae=r(et,"CODE",{});var eo=o(ae);qi=f(eo,"getsocketname()"),eo.forEach(t),wi=f(et," 등을 호출하여 적절한 로컬 주소를 확인할 수 있음."),et.forEach(t),lt.forEach(t),K.forEach(t),pl.forEach(t),$e.forEach(t),Mi=p(sl),N=r(sl,"LI",{});var vl=o(N);fe=r(vl,"P",{});var to=o(fe);yi=f(to,"어플리케이션 동작"),to.forEach(t),Zi=p(vl),se=r(vl,"P",{});var io=o(se);ji=f(io,"WebRTC를 사용하는 애플리케이션이 잘못 동작하지 않게끔, 다음과 같은 가이드라인을 제공함."),io.forEach(t),zi=p(vl),J=r(vl,"UL",{});var tt=o(J);pe=r(tt,"LI",{});var ro=o(pe);Gi=f(ro,"모드 3 및 4를 지원하기 위해서는 UDP 및 TCP 연결을 모두 지원하는 TURN 서버를 배포해야 함."),ro.forEach(t),Ji=p(tt),ve=r(tt,"LI",{});var oo=o(ve);Ki=f(oo,"어플리케이션은 host candidate의 존재 유무를 확인하여 모든 ICE candidates에 접근할 수 없는 경우를 감지할 수 있어야 함. host candidate가 없다면 모드 3 및 4를 사용중인 경우임."),oo.forEach(t),tt.forEach(t),vl.forEach(t),sl.forEach(t),Me=p(e),ye=r(e,"BR",{}),Ze=r(e,"BR",{}),this.h()},h(){E(Tl,"class","icon icon-link"),E(n,"aria-hidden","true"),E(n,"tabindex","-1"),E(n,"href","#개요"),E(h,"id","개요"),E(Pl,"class","icon icon-link"),E(S,"aria-hidden","true"),E(S,"tabindex","-1"),E(S,"href","#원리"),E(m,"id","원리"),E(Jl,"class","icon icon-link"),E(H,"aria-hidden","true"),E(H,"tabindex","-1"),E(H,"href","#구현-가이드"),E(A,"id","구현-가이드")},m(e,v){T(e,W,v),l(W,it),T(e,Ee,v),T(e,_e,v),T(e,be,v),T(e,Pe,v),T(e,h,v),l(h,n),l(n,Tl),l(h,rt),T(e,ue,v),T(e,Q,v),l(Q,ot),T(e,Re,v),T(e,X,v),l(X,at),T(e,de,v),T(e,P,v),l(P,El),l(El,ft),l(P,st),l(P,_l),l(_l,pt),l(P,vt),l(P,bl),l(bl,Tt),T(e,Ie,v),T(e,ce,v),T(e,Ce,v),T(e,Le,v),T(e,m,v),l(m,S),l(S,Pl),l(m,Et),T(e,Ue,v),T(e,Y,v),l(Y,_t),T(e,Ne,v),T(e,_,v),l(_,V),l(V,ul),l(ul,bt),l(V,Pt),l(V,Rl),l(Rl,dl),l(dl,ut),l(_,Rt),l(_,Il),l(Il,cl),l(cl,dt),l(_,It),l(_,Cl),l(Cl,Ll),l(Ll,ct),l(_,Ct),l(_,Ul),l(Ul,Nl),l(Nl,Lt),T(e,We,v),T(e,$,v),l($,Ut),T(e,he,v),T(e,b,v),l(b,F),l(F,Wl),l(Wl,Nt),l(F,Wt),l(F,I),l(I,hl),l(hl,ht),l(I,nt),l(I,nl),l(nl,mt),l(I,St),l(I,ml),l(ml,Dt),l(b,xt),l(b,q),l(q,Sl),l(Sl,At),l(q,Ht),l(q,c),l(c,Dl),l(Dl,Ot),l(c,Bt),l(c,xl),l(xl,kt),l(c,Vt),l(c,Al),l(Al,Ft),l(b,qt),l(b,w),l(w,Hl),l(Hl,wt),l(w,Mt),l(w,C),l(C,Ol),l(Ol,yt),l(C,Zt),l(C,Bl),l(Bl,jt),l(C,zt),l(C,kl),l(kl,Gt),l(b,Jt),l(b,M),l(M,Vl),l(Vl,Kt),l(M,Qt),l(M,L),l(L,Fl),l(Fl,Xt),l(L,Yt),l(L,ql),l(ql,$t),l(L,gt),l(L,wl),l(wl,li),T(e,ne,v),T(e,me,v),T(e,Se,v),T(e,D,v),l(D,ei),l(D,Ml),l(Ml,ti),l(D,ii),T(e,De,v),T(e,u,v),l(u,yl),l(yl,ri),l(u,oi),l(u,Zl),l(Zl,ai),l(u,fi),l(u,jl),l(jl,si),T(e,xe,v),T(e,Ae,v),T(e,He,v),T(e,g,v),l(g,pi),T(e,Oe,v),T(e,x,v),l(x,zl),l(zl,vi),l(x,Ti),l(x,Gl),l(Gl,Ei),T(e,Be,v),T(e,ke,v),T(e,Ve,v),T(e,Fe,v),T(e,A,v),l(A,H),l(H,Jl),l(A,_i),T(e,qe,v),T(e,ll,v),l(ll,bi),T(e,we,v),T(e,R,v),l(R,y),l(y,Kl),l(Kl,Pi),l(y,ui),l(y,Ql),l(Ql,O),l(O,Ri),l(O,Xl),l(Xl,di),l(O,Ii),l(O,Yl),l(Yl,$l),l($l,ci),l(R,Ci),l(R,Z),l(Z,gl),l(gl,Li),l(Z,Ui),l(Z,U),l(U,el),l(el,Ni),l(el,j),l(j,le),l(le,Wi),l(j,hi),l(j,ee),l(ee,ni),l(U,mi),l(U,te),l(te,Si),l(U,Di),l(U,d),l(d,xi),l(d,ie),l(ie,Ai),l(d,Hi),l(d,re),l(re,Oi),l(d,Bi),l(d,z),l(z,oe),l(oe,ki),l(z,Vi),l(z,G),l(G,Fi),l(G,ae),l(ae,qi),l(G,wi),l(R,Mi),l(R,N),l(N,fe),l(fe,yi),l(N,Zi),l(N,se),l(se,ji),l(N,zi),l(N,J),l(J,pe),l(pe,Gi),l(J,Ji),l(J,ve),l(ve,Ki),T(e,Me,v),T(e,ye,v),T(e,Ze,v)},p:gi,i:gi,o:gi,d(e){e&&t(W),e&&t(Ee),e&&t(_e),e&&t(be),e&&t(Pe),e&&t(h),e&&t(ue),e&&t(Q),e&&t(Re),e&&t(X),e&&t(de),e&&t(P),e&&t(Ie),e&&t(ce),e&&t(Ce),e&&t(Le),e&&t(m),e&&t(Ue),e&&t(Y),e&&t(Ne),e&&t(_),e&&t(We),e&&t($),e&&t(he),e&&t(b),e&&t(ne),e&&t(me),e&&t(Se),e&&t(D),e&&t(De),e&&t(u),e&&t(xe),e&&t(Ae),e&&t(He),e&&t(g),e&&t(Oe),e&&t(x),e&&t(Be),e&&t(ke),e&&t(Ve),e&&t(Fe),e&&t(A),e&&t(qe),e&&t(ll),e&&t(we),e&&t(R),e&&t(Me),e&&t(ye),e&&t(Ze)}}}const Eo={title:"RFC8828: WebRTC IP Address Handling Requirements 정리",date:"2023-03-15T00:00:00.000Z",excerpt:"RFC8828을 읽고 WebRTC의 IP주소 처리 정책을 정리해보았습니다",categories:["WebRTC","논문정리"],coverImage:"/post_img/Networking/WebRTC/cover.png",coverWidth:16,coverHeight:9,indexed:!0,exposed:!0};class _o extends fo{constructor(W){super(),so(this,W,null,vo,po,{})}}export{_o as default,Eo as metadata};