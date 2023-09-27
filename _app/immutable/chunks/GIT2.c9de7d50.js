import{S as en,i as ln,s as pn,k as p,a as i,q as u,l as t,m as o,h as a,c as r,r as c,U as la,n as f,p as tn,b as l,E as n,M as yp}from"./index.d78780bf.js";function nn(Ct){let C,Ds,ss,Pp,pa,w,B,Is,Xe,ta,na,oa,R,Ye,as,$e,de,ia,ra,ua,ca,A,H,Ls,he,fa,ka,Ea,x,wt=`<code class="language-bash"><span class="token function">git</span> clone https://github.com/your-account/rour-repo-name
<span class="token builtin class-name">cd</span> your-repo-name
<span class="token function">git</span> branch <span class="token parameter variable">-a</span></code>`,ma,es,ge,ba,va,_a,N,Bt=`<code class="language-bash"><span class="token function">git</span> switch master
<span class="token function">touch</span> hello.py
<span class="token function">vim</span> hello.py</code>`,ya,ls,sl,Pa,ps,al,Ca,F,Rt=`<code class="language-python"><span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Hello &#123;&#125;!"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span></code>`,wa,S,At=`<code class="language-bash"><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"hello"</span></code>`,Ba,Ra,Aa,Ha,q,Ht=`<code class="language-bash"><span class="token function">git</span> switch your-branch-name
<span class="token function">touch</span> bye.py
<span class="token function">vim</span> bye.py</code>`,Ma,ts,el,Ta,ns,ll,Da,j,Mt=`<code class="language-python"><span class="token keyword">def</span> <span class="token function">bye</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Bye &#123;&#125;!"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span></code>`,Ia,U,Tt=`<code class="language-bash"><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"bye"</span></code>`,La,Oa,Ga,k,Os,os,Cp,pl,Gs,tl,nl,xs,ol,il,V,rl,Ns,ul,cl,fl,Fs,kl,xa,Na,Fa,M,El,Ss,ml,bl,Sa,z,Dt=`<code class="language-bash"><span class="token function">git</span> switch master
<span class="token function">git</span> merge <span class="token parameter variable">-m</span> <span class="token string">"your-merge-message"</span> your-branch-name
<span class="token function">git</span> push</code>`,qa,T,vl,qs,_l,yl,ja,b,js,Pl,Cl,Us,wl,Bl,Vs,Rl,Al,Ua,Va,za,is,Hl,Ka,Qa,Wa,rs,K,us,wp,Ml,zs,Tl,Za,Ja,Xa,Ya,D,I,Ks,Dl,$a,da,ha,cs,Il,ga,Q,It=`<code class="language-bash"><span class="token function">git</span> branch your-branch-name-2
<span class="token function">git</span> switch your-branch-name-2
<span class="token function">vim</span> hello.py
<span class="token function">vim</span> bye.py
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"Emphasize"</span></code>`,se,fs,Ll,ae,W,Lt=`<code class="language-python"><span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Hello &#123;&#125;!!!!!"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span></code>`,ee,ks,Ol,le,Z,Ot=`<code class="language-python"><span class="token keyword">def</span> <span class="token function">bye</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Bye &#123;&#125;!!!!!"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span></code>`,pe,te,ne,Es,Gl,oe,J,Gt=`<code class="language-bash"><span class="token function">git</span> switch master
<span class="token function">vim</span> bye.py
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"Farewell"</span></code>`,ie,ms,xl,re,X,xt=`<code class="language-python"><span class="token keyword">def</span> <span class="token function">bye</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Farewell &#123;&#125;!"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span></code>`,ue,ce,fe,bs,Nl,ke,Y,Nt='<code class="language-bash"><span class="token function">git</span> merge <span class="token parameter variable">-m</span> <span class="token string">"your-merge-message"</span> your-branch-name-2</code>',Ee,me,be,vs,Qs,_s,Bp,ve,_e,ye,ys,Fl,Pe,Ps,Sl,Ce,$,Ft=`<code class="language-python"><span class="token keyword">def</span> <span class="token function">bye</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token operator">&lt;&lt;</span><span class="token operator">&lt;&lt;</span><span class="token operator">&lt;&lt;</span><span class="token operator">&lt;</span> HEAD
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Farewell &#123;&#125;!"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Bye &#123;&#125;!!!!!!!!!"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">>></span><span class="token operator">>></span><span class="token operator">>></span><span class="token operator">></span> new2b</code>`,we,Be,Re,E,ql,Ws,jl,Ul,Zs,Vl,zl,Js,Kl,Ql,Xs,Wl,Zl,Ae,Cs,Jl,He,d,St=`<code class="language-python"><span class="token keyword">def</span> <span class="token function">bye</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Farewell &#123;&#125;!!!!!!!!!"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span></code>`,Me,Te,De,m,Xl,Ys,Yl,$l,$s,dl,hl,ds,gl,sp,Ie,h,qt=`<code class="language-bash"><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"your-merge-message"</span></code>`,Le,v,ap,ep,lp,hs,pp,tp,Oe,_,np,gs,op,ip,sa,rp,up,Ge,xe,Ne,Fe,L,O,aa,cp,Se,qe,je,ws,ea,Bs,Rp,Ue,Rs,fp,Ve,As,kp,ze,Hs,Ep;return{c(){C=p("center"),Ds=p("p"),ss=p("img"),pa=i(),w=p("h2"),B=p("a"),Is=p("span"),Xe=u("Merge란?"),ta=i(),na=p("hr"),oa=i(),R=p("p"),Ye=u("기능별로 Branch를 열심히 나누어 개발을 했다면, 개발된 기능들을 합칠 필요가 있습니다. 이러한 브랜치들을 합치는 작업을 "),as=p("span"),$e=u("Merge"),de=u("를 통해 진행할 수 있습니다."),ia=i(),ra=p("br"),ua=p("br"),ca=i(),A=p("h2"),H=p("a"),Ls=p("span"),he=u("브랜치 병합"),fa=i(),ka=p("hr"),Ea=i(),x=p("pre"),ma=i(),es=p("p"),ge=u("이전 Git Branch 강의에서 푸시하였던 Github의 레포지토리를 클론하는 것부터 시작해 봅시다. 이전 강의 내용대로 잘 진행하였다면 master 브랜치와 여러분이 만든 한 개의 브랜치, 총 두 개의 브랜치가 있을 것입니다."),ba=i(),va=p("br"),_a=i(),N=p("pre"),ya=i(),ls=p("p"),sl=u("vim을 열어 hello.py를 아래와 같이 수정해주고 커밋합니다."),Pa=i(),ps=p("p"),al=u("hello.py"),Ca=i(),F=p("pre"),wa=i(),S=p("pre"),Ba=i(),Ra=p("br"),Aa=p("br"),Ha=i(),q=p("pre"),Ma=i(),ts=p("p"),el=u("마찬가지로, 브랜치를 이동한 뒤 vim을 열어 bye.py를 아래와 같이 수정해주고 커밋합니다."),Ta=i(),ns=p("p"),ll=u("bye.py"),Da=i(),j=p("pre"),Ia=i(),U=p("pre"),La=i(),Oa=p("br"),Ga=i(),k=p("blockquote"),Os=p("p"),os=p("img"),pl=i(),Gs=p("p"),tl=u("vim(vi improved)은 CLI상에서 텍스트를 편집할 수 있는 도구입니다. CLI상에서 간단한 파일 수정을 할 수 있다는 점이 유용합니다."),nl=i(),xs=p("p"),ol=u("vim이 익숙하지 않은 경우 Visual Studio Code 등 다른 텍스트 에디터를 이용하여 수정하여도 상관없습니다."),il=i(),V=p("p"),rl=u("vim창이 켜지고 a키를 누르면 파일을 수정할 수 있고, 수정 후 Esc를 누른 뒤 "),Ns=p("code"),ul=u(":wq"),cl=u("를 입력하면 파일이 저장됩니다."),fl=i(),Fs=p("p"),kl=u("좋은 개발자라면 vim이나 nano같은 텍스트 에디터와 친숙해지는 것도 중요합니다!"),xa=i(),Na=p("br"),Fa=i(),M=p("p"),El=u("이제 두 브랜치를 병합해봅시다. HEAD를 master 브랜치로 옮긴 뒤, "),Ss=p("code"),ml=u("git merge"),bl=u(" 명령어를 입력합니다."),Sa=i(),z=p("pre"),qa=i(),T=p("p"),vl=u("위 명령어를 입력하면, 여러분이 생성한 브랜치가 master 브랜치에 병합됩니다. "),qs=p("code"),_l=u("git merge"),yl=u(" 명령어는 파라미터로 입력된 브랜치를 현재 브랜치에 병합합니다. -m 플래그를 통해 병합시 입력될 커밋 메시지를 입력할 수 있습니다."),ja=i(),b=p("p"),js=p("code"),Pl=u("ls"),Cl=u(" 명령어를 입력하여, "),Us=p("code"),wl=u("hello.py"),Bl=u(" 파일과 "),Vs=p("code"),Rl=u("bye.py"),Al=u(" 파일이 master 브랜치에 모두 존재하는 것을 확인해 봅시다."),Ua=i(),Va=p("br"),za=i(),is=p("p"),Hl=u("깃허브의 푸쉬된 레포지토리에 접속해 봅시다. 페이지 상단의 Insight > 좌측 Network 탭으로 이동합니다. 커밋 이력이 시각화된 모습을 확인할 수 있을 것입니다."),Ka=i(),Qa=p("br"),Wa=i(),rs=p("center"),K=p("p"),us=p("img"),Ml=i(),zs=p("em"),Tl=u("이 사진이랑은 조금 다를 수도 있음요"),Za=i(),Ja=p("br"),Xa=p("br"),Ya=i(),D=p("h2"),I=p("a"),Ks=p("span"),Dl=u("충돌 해결"),$a=i(),da=p("hr"),ha=i(),cs=p("p"),Il=u("새로운 브랜치를 만들어서 추가적인 작업을 진행해 봅시다."),ga=i(),Q=p("pre"),se=i(),fs=p("p"),Ll=u("hello.py"),ae=i(),W=p("pre"),ee=i(),ks=p("p"),Ol=u("bye.py"),le=i(),Z=p("pre"),pe=i(),te=p("br"),ne=i(),Es=p("p"),Gl=u("이후, 다시 master 브랜치로 이동하여 bye.py 파일만 바꿔봅시다."),oe=i(),J=p("pre"),ie=i(),ms=p("p"),xl=u("bye.py"),re=i(),X=p("pre"),ue=i(),ce=p("br"),fe=i(),bs=p("p"),Nl=u("이와 같은 작업 후, master 브랜치에서 merge를 다시 진행해 봅시다."),ke=i(),Y=p("pre"),Ee=i(),me=p("br"),be=i(),vs=p("center"),Qs=p("p"),_s=p("img"),ve=i(),_e=p("br"),ye=i(),ys=p("p"),Fl=u("위 사진처럼, bye.py 파일에서 Conflict가 발생했다는 문구가 발생합니다. bye.py 파일을 확인해 봅시다."),Pe=i(),Ps=p("span"),Sl=u("bye.py"),Ce=i(),$=p("pre"),we=i(),Be=p("br"),Re=i(),E=p("p"),ql=u("bye.py의 소스 코드가 위처럼 변했습니다. "),Ws=p("code"),jl=u("<<<<<<< HEAD"),Ul=u(" 와 "),Zs=p("code"),Vl=u("======="),zl=u(" 사이에는 현재 (HEAD가 가리키는)브랜치의 변경 사항이 기록되어 있습니다. "),Js=p("code"),Kl=u("======="),Ql=u(" 와 "),Xs=p("code"),Wl=u(">>>>>>> new2b"),Zl=u(" 사이에는 병합할 브랜치의 변경 사항이 기록되어 있습니다."),Ae=i(),Cs=p("p"),Jl=u("이 변경 사항들 중 master 브랜치의 것을 택할수도, 병합할 브랜치의 것을 택할수도, 양쪽을 적절히 취합할 수도 있습니다. 우리는 양쪽의 변경 사항을 적절히 섞어보겠습니다."),He=i(),d=p("pre"),Me=i(),Te=p("br"),De=i(),m=p("p"),Xl=u("이렇게 적용할 변경 사항만 남기고, 버릴 변경 사항 및 "),Ys=p("code"),Yl=u("<<<<<<< HEAD"),$l=u(", "),$s=p("code"),dl=u("======="),hl=u(", "),ds=p("code"),gl=u(">>>>>>> new2b"),sp=u(" 등은 지우도록 합니다."),Ie=i(),h=p("pre"),Le=i(),v=p("p"),ap=u("위의 명령어를 입력하면, 충돌을 제거하여, merge가 성공적으로 끝나게 됩니다."),ep=p("br"),lp=u(`
또한 `),hs=p("code"),pp=u("cat hello.py"),tp=u("를 입력하여, hello.py 파일의 내용을 확인해 봅시다."),Oe=i(),_=p("p"),np=u("만약 "),gs=p("code"),op=u("git merge"),ip=u(" 입력 후, 병합 프로세스를 중단하고 싶은 경우 "),sa=p("code"),rp=u("git merge --abort"),up=u("를 입력하면 됩니다."),Ge=i(),xe=p("br"),Ne=p("br"),Fe=i(),L=p("h2"),O=p("a"),aa=p("span"),cp=u("끝!"),Se=i(),qe=p("hr"),je=i(),ws=p("center"),ea=p("p"),Bs=p("img"),Ue=i(),Rs=p("p"),fp=u("마크다운으로 포스트 쓰는거 생각보다 쉽지않네여.. 두개 쓰는데 거의 하루+반나절 썼음 허허"),Ve=i(),As=p("p"),kp=u("git은 여러분이 미래에 저처럼 카레집 하는 게 아니라 개발자가 된다면 무조건 쓰게 되는 기능인 만큼 잘 알아둘 필요가 있습니다. 게다가 branch는 그 중에서도 완전 핵심 기능이니까 생각보다 디테일하게 했네요"),ze=i(),Hs=p("p"),Ep=u("하다보면 궁금한거 있을 수도 있는데, 예를들면 비어있는 브랜치 만드는 방법같은거? 그런거 구글에 치면 싹다 나옵니다. 저보다 구글이 백만 천만배는 똑똑함. 구글님이 해결 못해주시는 질문이면 저한테 물어봐도 됩니다. 위에 예제들 진행하다가 막힌다거나 해도 댓글 남겨주세요."),this.h()},l(s){C=t(s,"CENTER",{});var e=o(C);Ds=t(e,"P",{});var Ap=o(Ds);ss=t(Ap,"IMG",{src:!0,alt:!0}),Ap.forEach(a),e.forEach(a),pa=r(s),w=t(s,"H2",{id:!0});var mp=o(w);B=t(mp,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Hp=o(B);Is=t(Hp,"SPAN",{class:!0}),o(Is).forEach(a),Hp.forEach(a),Xe=c(mp,"Merge란?"),mp.forEach(a),ta=r(s),na=t(s,"HR",{}),oa=r(s),R=t(s,"P",{});var Ke=o(R);Ye=c(Ke,"기능별로 Branch를 열심히 나누어 개발을 했다면, 개발된 기능들을 합칠 필요가 있습니다. 이러한 브랜치들을 합치는 작업을 "),as=t(Ke,"SPAN",{style:!0});var Mp=o(as);$e=c(Mp,"Merge"),Mp.forEach(a),de=c(Ke,"를 통해 진행할 수 있습니다."),Ke.forEach(a),ia=r(s),ra=t(s,"BR",{}),ua=t(s,"BR",{}),ca=r(s),A=t(s,"H2",{id:!0});var bp=o(A);H=t(bp,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Tp=o(H);Ls=t(Tp,"SPAN",{class:!0}),o(Ls).forEach(a),Tp.forEach(a),he=c(bp,"브랜치 병합"),bp.forEach(a),fa=r(s),ka=t(s,"HR",{}),Ea=r(s),x=t(s,"PRE",{class:!0});var jt=o(x);jt.forEach(a),ma=r(s),es=t(s,"P",{});var Dp=o(es);ge=c(Dp,"이전 Git Branch 강의에서 푸시하였던 Github의 레포지토리를 클론하는 것부터 시작해 봅시다. 이전 강의 내용대로 잘 진행하였다면 master 브랜치와 여러분이 만든 한 개의 브랜치, 총 두 개의 브랜치가 있을 것입니다."),Dp.forEach(a),ba=r(s),va=t(s,"BR",{}),_a=r(s),N=t(s,"PRE",{class:!0});var Ut=o(N);Ut.forEach(a),ya=r(s),ls=t(s,"P",{});var Ip=o(ls);sl=c(Ip,"vim을 열어 hello.py를 아래와 같이 수정해주고 커밋합니다."),Ip.forEach(a),Pa=r(s),ps=t(s,"P",{});var Lp=o(ps);al=c(Lp,"hello.py"),Lp.forEach(a),Ca=r(s),F=t(s,"PRE",{class:!0});var Vt=o(F);Vt.forEach(a),wa=r(s),S=t(s,"PRE",{class:!0});var zt=o(S);zt.forEach(a),Ba=r(s),Ra=t(s,"BR",{}),Aa=t(s,"BR",{}),Ha=r(s),q=t(s,"PRE",{class:!0});var Kt=o(q);Kt.forEach(a),Ma=r(s),ts=t(s,"P",{});var Op=o(ts);el=c(Op,"마찬가지로, 브랜치를 이동한 뒤 vim을 열어 bye.py를 아래와 같이 수정해주고 커밋합니다."),Op.forEach(a),Ta=r(s),ns=t(s,"P",{});var Gp=o(ns);ll=c(Gp,"bye.py"),Gp.forEach(a),Da=r(s),j=t(s,"PRE",{class:!0});var Qt=o(j);Qt.forEach(a),Ia=r(s),U=t(s,"PRE",{class:!0});var Wt=o(U);Wt.forEach(a),La=r(s),Oa=t(s,"BR",{}),Ga=r(s),k=t(s,"BLOCKQUOTE",{});var y=o(k);Os=t(y,"P",{});var xp=o(Os);os=t(xp,"IMG",{src:!0,alt:!0}),xp.forEach(a),pl=r(y),Gs=t(y,"P",{});var Np=o(Gs);tl=c(Np,"vim(vi improved)은 CLI상에서 텍스트를 편집할 수 있는 도구입니다. CLI상에서 간단한 파일 수정을 할 수 있다는 점이 유용합니다."),Np.forEach(a),nl=r(y),xs=t(y,"P",{});var Fp=o(xs);ol=c(Fp,"vim이 익숙하지 않은 경우 Visual Studio Code 등 다른 텍스트 에디터를 이용하여 수정하여도 상관없습니다."),Fp.forEach(a),il=r(y),V=t(y,"P",{});var Qe=o(V);rl=c(Qe,"vim창이 켜지고 a키를 누르면 파일을 수정할 수 있고, 수정 후 Esc를 누른 뒤 "),Ns=t(Qe,"CODE",{});var Sp=o(Ns);ul=c(Sp,":wq"),Sp.forEach(a),cl=c(Qe,"를 입력하면 파일이 저장됩니다."),Qe.forEach(a),fl=r(y),Fs=t(y,"P",{});var qp=o(Fs);kl=c(qp,"좋은 개발자라면 vim이나 nano같은 텍스트 에디터와 친숙해지는 것도 중요합니다!"),qp.forEach(a),y.forEach(a),xa=r(s),Na=t(s,"BR",{}),Fa=r(s),M=t(s,"P",{});var We=o(M);El=c(We,"이제 두 브랜치를 병합해봅시다. HEAD를 master 브랜치로 옮긴 뒤, "),Ss=t(We,"CODE",{});var jp=o(Ss);ml=c(jp,"git merge"),jp.forEach(a),bl=c(We," 명령어를 입력합니다."),We.forEach(a),Sa=r(s),z=t(s,"PRE",{class:!0});var Zt=o(z);Zt.forEach(a),qa=r(s),T=t(s,"P",{});var Ze=o(T);vl=c(Ze,"위 명령어를 입력하면, 여러분이 생성한 브랜치가 master 브랜치에 병합됩니다. "),qs=t(Ze,"CODE",{});var Up=o(qs);_l=c(Up,"git merge"),Up.forEach(a),yl=c(Ze," 명령어는 파라미터로 입력된 브랜치를 현재 브랜치에 병합합니다. -m 플래그를 통해 병합시 입력될 커밋 메시지를 입력할 수 있습니다."),Ze.forEach(a),ja=r(s),b=t(s,"P",{});var g=o(b);js=t(g,"CODE",{});var Vp=o(js);Pl=c(Vp,"ls"),Vp.forEach(a),Cl=c(g," 명령어를 입력하여, "),Us=t(g,"CODE",{});var zp=o(Us);wl=c(zp,"hello.py"),zp.forEach(a),Bl=c(g," 파일과 "),Vs=t(g,"CODE",{});var Kp=o(Vs);Rl=c(Kp,"bye.py"),Kp.forEach(a),Al=c(g," 파일이 master 브랜치에 모두 존재하는 것을 확인해 봅시다."),g.forEach(a),Ua=r(s),Va=t(s,"BR",{}),za=r(s),is=t(s,"P",{});var Qp=o(is);Hl=c(Qp,"깃허브의 푸쉬된 레포지토리에 접속해 봅시다. 페이지 상단의 Insight > 좌측 Network 탭으로 이동합니다. 커밋 이력이 시각화된 모습을 확인할 수 있을 것입니다."),Qp.forEach(a),Ka=r(s),Qa=t(s,"BR",{}),Wa=r(s),rs=t(s,"CENTER",{});var Wp=o(rs);K=t(Wp,"P",{});var Je=o(K);us=t(Je,"IMG",{src:!0,alt:!0}),Ml=r(Je),zs=t(Je,"EM",{});var Zp=o(zs);Tl=c(Zp,"이 사진이랑은 조금 다를 수도 있음요"),Zp.forEach(a),Je.forEach(a),Wp.forEach(a),Za=r(s),Ja=t(s,"BR",{}),Xa=t(s,"BR",{}),Ya=r(s),D=t(s,"H2",{id:!0});var vp=o(D);I=t(vp,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Jp=o(I);Ks=t(Jp,"SPAN",{class:!0}),o(Ks).forEach(a),Jp.forEach(a),Dl=c(vp,"충돌 해결"),vp.forEach(a),$a=r(s),da=t(s,"HR",{}),ha=r(s),cs=t(s,"P",{});var Xp=o(cs);Il=c(Xp,"새로운 브랜치를 만들어서 추가적인 작업을 진행해 봅시다."),Xp.forEach(a),ga=r(s),Q=t(s,"PRE",{class:!0});var Jt=o(Q);Jt.forEach(a),se=r(s),fs=t(s,"P",{});var Yp=o(fs);Ll=c(Yp,"hello.py"),Yp.forEach(a),ae=r(s),W=t(s,"PRE",{class:!0});var Xt=o(W);Xt.forEach(a),ee=r(s),ks=t(s,"P",{});var $p=o(ks);Ol=c($p,"bye.py"),$p.forEach(a),le=r(s),Z=t(s,"PRE",{class:!0});var Yt=o(Z);Yt.forEach(a),pe=r(s),te=t(s,"BR",{}),ne=r(s),Es=t(s,"P",{});var dp=o(Es);Gl=c(dp,"이후, 다시 master 브랜치로 이동하여 bye.py 파일만 바꿔봅시다."),dp.forEach(a),oe=r(s),J=t(s,"PRE",{class:!0});var $t=o(J);$t.forEach(a),ie=r(s),ms=t(s,"P",{});var hp=o(ms);xl=c(hp,"bye.py"),hp.forEach(a),re=r(s),X=t(s,"PRE",{class:!0});var dt=o(X);dt.forEach(a),ue=r(s),ce=t(s,"BR",{}),fe=r(s),bs=t(s,"P",{});var gp=o(bs);Nl=c(gp,"이와 같은 작업 후, master 브랜치에서 merge를 다시 진행해 봅시다."),gp.forEach(a),ke=r(s),Y=t(s,"PRE",{class:!0});var ht=o(Y);ht.forEach(a),Ee=r(s),me=t(s,"BR",{}),be=r(s),vs=t(s,"CENTER",{});var st=o(vs);Qs=t(st,"P",{});var at=o(Qs);_s=t(at,"IMG",{src:!0,alt:!0}),at.forEach(a),st.forEach(a),ve=r(s),_e=t(s,"BR",{}),ye=r(s),ys=t(s,"P",{});var et=o(ys);Fl=c(et,"위 사진처럼, bye.py 파일에서 Conflict가 발생했다는 문구가 발생합니다. bye.py 파일을 확인해 봅시다."),et.forEach(a),Pe=r(s),Ps=t(s,"SPAN",{});var lt=o(Ps);Sl=c(lt,"bye.py"),lt.forEach(a),Ce=r(s),$=t(s,"PRE",{class:!0});var gt=o($);gt.forEach(a),we=r(s),Be=t(s,"BR",{}),Re=r(s),E=t(s,"P",{});var P=o(E);ql=c(P,"bye.py의 소스 코드가 위처럼 변했습니다. "),Ws=t(P,"CODE",{});var pt=o(Ws);jl=c(pt,"<<<<<<< HEAD"),pt.forEach(a),Ul=c(P," 와 "),Zs=t(P,"CODE",{});var tt=o(Zs);Vl=c(tt,"======="),tt.forEach(a),zl=c(P," 사이에는 현재 (HEAD가 가리키는)브랜치의 변경 사항이 기록되어 있습니다. "),Js=t(P,"CODE",{});var nt=o(Js);Kl=c(nt,"======="),nt.forEach(a),Ql=c(P," 와 "),Xs=t(P,"CODE",{});var ot=o(Xs);Wl=c(ot,">>>>>>> new2b"),ot.forEach(a),Zl=c(P," 사이에는 병합할 브랜치의 변경 사항이 기록되어 있습니다."),P.forEach(a),Ae=r(s),Cs=t(s,"P",{});var it=o(Cs);Jl=c(it,"이 변경 사항들 중 master 브랜치의 것을 택할수도, 병합할 브랜치의 것을 택할수도, 양쪽을 적절히 취합할 수도 있습니다. 우리는 양쪽의 변경 사항을 적절히 섞어보겠습니다."),it.forEach(a),He=r(s),d=t(s,"PRE",{class:!0});var sn=o(d);sn.forEach(a),Me=r(s),Te=t(s,"BR",{}),De=r(s),m=t(s,"P",{});var G=o(m);Xl=c(G,"이렇게 적용할 변경 사항만 남기고, 버릴 변경 사항 및 "),Ys=t(G,"CODE",{});var rt=o(Ys);Yl=c(rt,"<<<<<<< HEAD"),rt.forEach(a),$l=c(G,", "),$s=t(G,"CODE",{});var ut=o($s);dl=c(ut,"======="),ut.forEach(a),hl=c(G,", "),ds=t(G,"CODE",{});var ct=o(ds);gl=c(ct,">>>>>>> new2b"),ct.forEach(a),sp=c(G," 등은 지우도록 합니다."),G.forEach(a),Ie=r(s),h=t(s,"PRE",{class:!0});var an=o(h);an.forEach(a),Le=r(s),v=t(s,"P",{});var Ms=o(v);ap=c(Ms,"위의 명령어를 입력하면, 충돌을 제거하여, merge가 성공적으로 끝나게 됩니다."),ep=t(Ms,"BR",{}),lp=c(Ms,`
또한 `),hs=t(Ms,"CODE",{});var ft=o(hs);pp=c(ft,"cat hello.py"),ft.forEach(a),tp=c(Ms,"를 입력하여, hello.py 파일의 내용을 확인해 봅시다."),Ms.forEach(a),Oe=r(s),_=t(s,"P",{});var Ts=o(_);np=c(Ts,"만약 "),gs=t(Ts,"CODE",{});var kt=o(gs);op=c(kt,"git merge"),kt.forEach(a),ip=c(Ts," 입력 후, 병합 프로세스를 중단하고 싶은 경우 "),sa=t(Ts,"CODE",{});var Et=o(sa);rp=c(Et,"git merge --abort"),Et.forEach(a),up=c(Ts,"를 입력하면 됩니다."),Ts.forEach(a),Ge=r(s),xe=t(s,"BR",{}),Ne=t(s,"BR",{}),Fe=r(s),L=t(s,"H2",{id:!0});var _p=o(L);O=t(_p,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var mt=o(O);aa=t(mt,"SPAN",{class:!0}),o(aa).forEach(a),mt.forEach(a),cp=c(_p,"끝!"),_p.forEach(a),Se=r(s),qe=t(s,"HR",{}),je=r(s),ws=t(s,"CENTER",{});var bt=o(ws);ea=t(bt,"P",{});var vt=o(ea);Bs=t(vt,"IMG",{src:!0,alt:!0}),vt.forEach(a),bt.forEach(a),Ue=r(s),Rs=t(s,"P",{});var _t=o(Rs);fp=c(_t,"마크다운으로 포스트 쓰는거 생각보다 쉽지않네여.. 두개 쓰는데 거의 하루+반나절 썼음 허허"),_t.forEach(a),Ve=r(s),As=t(s,"P",{});var yt=o(As);kp=c(yt,"git은 여러분이 미래에 저처럼 카레집 하는 게 아니라 개발자가 된다면 무조건 쓰게 되는 기능인 만큼 잘 알아둘 필요가 있습니다. 게다가 branch는 그 중에서도 완전 핵심 기능이니까 생각보다 디테일하게 했네요"),yt.forEach(a),ze=r(s),Hs=t(s,"P",{});var Pt=o(Hs);Ep=c(Pt,"하다보면 궁금한거 있을 수도 있는데, 예를들면 비어있는 브랜치 만드는 방법같은거? 그런거 구글에 치면 싹다 나옵니다. 저보다 구글이 백만 천만배는 똑똑함. 구글님이 해결 못해주시는 질문이면 저한테 물어봐도 됩니다. 위에 예제들 진행하다가 막힌다거나 해도 댓글 남겨주세요."),Pt.forEach(a),this.h()},h(){la(ss.src,Pp="/post_img/%EB%8F%99%EC%95%84%EB%A6%AC%EA%B5%90%EC%9C%A1/22-s_return_git//GIT2/1.png")||f(ss,"src",Pp),f(ss,"alt","PIC"),f(Is,"class","icon icon-link"),f(B,"aria-hidden","true"),f(B,"tabindex","-1"),f(B,"href","#merge란"),f(w,"id","merge란"),tn(as,"background-color","#FFF5B1"),f(Ls,"class","icon icon-link"),f(H,"aria-hidden","true"),f(H,"tabindex","-1"),f(H,"href","#브랜치-병합"),f(A,"id","브랜치-병합"),f(x,"class","language-bash"),f(N,"class","language-bash"),f(F,"class","language-python"),f(S,"class","language-bash"),f(q,"class","language-bash"),f(j,"class","language-python"),f(U,"class","language-bash"),la(os.src,Cp="/post_img/%EB%8F%99%EC%95%84%EB%A6%AC%EA%B5%90%EC%9C%A1/22-s_return_git//GIT2/2.png")||f(os,"src",Cp),f(os,"alt","PIC"),f(z,"class","language-bash"),la(us.src,wp="/post_img/%EB%8F%99%EC%95%84%EB%A6%AC%EA%B5%90%EC%9C%A1/22-s_return_git//GIT2/3.PNG")||f(us,"src",wp),f(us,"alt","PIC"),f(Ks,"class","icon icon-link"),f(I,"aria-hidden","true"),f(I,"tabindex","-1"),f(I,"href","#충돌-해결"),f(D,"id","충돌-해결"),f(Q,"class","language-bash"),f(W,"class","language-python"),f(Z,"class","language-python"),f(J,"class","language-bash"),f(X,"class","language-python"),f(Y,"class","language-bash"),la(_s.src,Bp="/post_img/%EB%8F%99%EC%95%84%EB%A6%AC%EA%B5%90%EC%9C%A1/22-s_return_git//GIT2/4.PNG")||f(_s,"src",Bp),f(_s,"alt","PIC"),f($,"class","language-python"),f(d,"class","language-python"),f(h,"class","language-bash"),f(aa,"class","icon icon-link"),f(O,"aria-hidden","true"),f(O,"tabindex","-1"),f(O,"href","#끝"),f(L,"id","끝"),la(Bs.src,Rp="/post_img/%EB%8F%99%EC%95%84%EB%A6%AC%EA%B5%90%EC%9C%A1/22-s_return_git//GIT2/5.jpg")||f(Bs,"src",Rp),f(Bs,"alt","PIC")},m(s,e){l(s,C,e),n(C,Ds),n(Ds,ss),l(s,pa,e),l(s,w,e),n(w,B),n(B,Is),n(w,Xe),l(s,ta,e),l(s,na,e),l(s,oa,e),l(s,R,e),n(R,Ye),n(R,as),n(as,$e),n(R,de),l(s,ia,e),l(s,ra,e),l(s,ua,e),l(s,ca,e),l(s,A,e),n(A,H),n(H,Ls),n(A,he),l(s,fa,e),l(s,ka,e),l(s,Ea,e),l(s,x,e),x.innerHTML=wt,l(s,ma,e),l(s,es,e),n(es,ge),l(s,ba,e),l(s,va,e),l(s,_a,e),l(s,N,e),N.innerHTML=Bt,l(s,ya,e),l(s,ls,e),n(ls,sl),l(s,Pa,e),l(s,ps,e),n(ps,al),l(s,Ca,e),l(s,F,e),F.innerHTML=Rt,l(s,wa,e),l(s,S,e),S.innerHTML=At,l(s,Ba,e),l(s,Ra,e),l(s,Aa,e),l(s,Ha,e),l(s,q,e),q.innerHTML=Ht,l(s,Ma,e),l(s,ts,e),n(ts,el),l(s,Ta,e),l(s,ns,e),n(ns,ll),l(s,Da,e),l(s,j,e),j.innerHTML=Mt,l(s,Ia,e),l(s,U,e),U.innerHTML=Tt,l(s,La,e),l(s,Oa,e),l(s,Ga,e),l(s,k,e),n(k,Os),n(Os,os),n(k,pl),n(k,Gs),n(Gs,tl),n(k,nl),n(k,xs),n(xs,ol),n(k,il),n(k,V),n(V,rl),n(V,Ns),n(Ns,ul),n(V,cl),n(k,fl),n(k,Fs),n(Fs,kl),l(s,xa,e),l(s,Na,e),l(s,Fa,e),l(s,M,e),n(M,El),n(M,Ss),n(Ss,ml),n(M,bl),l(s,Sa,e),l(s,z,e),z.innerHTML=Dt,l(s,qa,e),l(s,T,e),n(T,vl),n(T,qs),n(qs,_l),n(T,yl),l(s,ja,e),l(s,b,e),n(b,js),n(js,Pl),n(b,Cl),n(b,Us),n(Us,wl),n(b,Bl),n(b,Vs),n(Vs,Rl),n(b,Al),l(s,Ua,e),l(s,Va,e),l(s,za,e),l(s,is,e),n(is,Hl),l(s,Ka,e),l(s,Qa,e),l(s,Wa,e),l(s,rs,e),n(rs,K),n(K,us),n(K,Ml),n(K,zs),n(zs,Tl),l(s,Za,e),l(s,Ja,e),l(s,Xa,e),l(s,Ya,e),l(s,D,e),n(D,I),n(I,Ks),n(D,Dl),l(s,$a,e),l(s,da,e),l(s,ha,e),l(s,cs,e),n(cs,Il),l(s,ga,e),l(s,Q,e),Q.innerHTML=It,l(s,se,e),l(s,fs,e),n(fs,Ll),l(s,ae,e),l(s,W,e),W.innerHTML=Lt,l(s,ee,e),l(s,ks,e),n(ks,Ol),l(s,le,e),l(s,Z,e),Z.innerHTML=Ot,l(s,pe,e),l(s,te,e),l(s,ne,e),l(s,Es,e),n(Es,Gl),l(s,oe,e),l(s,J,e),J.innerHTML=Gt,l(s,ie,e),l(s,ms,e),n(ms,xl),l(s,re,e),l(s,X,e),X.innerHTML=xt,l(s,ue,e),l(s,ce,e),l(s,fe,e),l(s,bs,e),n(bs,Nl),l(s,ke,e),l(s,Y,e),Y.innerHTML=Nt,l(s,Ee,e),l(s,me,e),l(s,be,e),l(s,vs,e),n(vs,Qs),n(Qs,_s),l(s,ve,e),l(s,_e,e),l(s,ye,e),l(s,ys,e),n(ys,Fl),l(s,Pe,e),l(s,Ps,e),n(Ps,Sl),l(s,Ce,e),l(s,$,e),$.innerHTML=Ft,l(s,we,e),l(s,Be,e),l(s,Re,e),l(s,E,e),n(E,ql),n(E,Ws),n(Ws,jl),n(E,Ul),n(E,Zs),n(Zs,Vl),n(E,zl),n(E,Js),n(Js,Kl),n(E,Ql),n(E,Xs),n(Xs,Wl),n(E,Zl),l(s,Ae,e),l(s,Cs,e),n(Cs,Jl),l(s,He,e),l(s,d,e),d.innerHTML=St,l(s,Me,e),l(s,Te,e),l(s,De,e),l(s,m,e),n(m,Xl),n(m,Ys),n(Ys,Yl),n(m,$l),n(m,$s),n($s,dl),n(m,hl),n(m,ds),n(ds,gl),n(m,sp),l(s,Ie,e),l(s,h,e),h.innerHTML=qt,l(s,Le,e),l(s,v,e),n(v,ap),n(v,ep),n(v,lp),n(v,hs),n(hs,pp),n(v,tp),l(s,Oe,e),l(s,_,e),n(_,np),n(_,gs),n(gs,op),n(_,ip),n(_,sa),n(sa,rp),n(_,up),l(s,Ge,e),l(s,xe,e),l(s,Ne,e),l(s,Fe,e),l(s,L,e),n(L,O),n(O,aa),n(L,cp),l(s,Se,e),l(s,qe,e),l(s,je,e),l(s,ws,e),n(ws,ea),n(ea,Bs),l(s,Ue,e),l(s,Rs,e),n(Rs,fp),l(s,Ve,e),l(s,As,e),n(As,kp),l(s,ze,e),l(s,Hs,e),n(Hs,Ep)},p:yp,i:yp,o:yp,d(s){s&&a(C),s&&a(pa),s&&a(w),s&&a(ta),s&&a(na),s&&a(oa),s&&a(R),s&&a(ia),s&&a(ra),s&&a(ua),s&&a(ca),s&&a(A),s&&a(fa),s&&a(ka),s&&a(Ea),s&&a(x),s&&a(ma),s&&a(es),s&&a(ba),s&&a(va),s&&a(_a),s&&a(N),s&&a(ya),s&&a(ls),s&&a(Pa),s&&a(ps),s&&a(Ca),s&&a(F),s&&a(wa),s&&a(S),s&&a(Ba),s&&a(Ra),s&&a(Aa),s&&a(Ha),s&&a(q),s&&a(Ma),s&&a(ts),s&&a(Ta),s&&a(ns),s&&a(Da),s&&a(j),s&&a(Ia),s&&a(U),s&&a(La),s&&a(Oa),s&&a(Ga),s&&a(k),s&&a(xa),s&&a(Na),s&&a(Fa),s&&a(M),s&&a(Sa),s&&a(z),s&&a(qa),s&&a(T),s&&a(ja),s&&a(b),s&&a(Ua),s&&a(Va),s&&a(za),s&&a(is),s&&a(Ka),s&&a(Qa),s&&a(Wa),s&&a(rs),s&&a(Za),s&&a(Ja),s&&a(Xa),s&&a(Ya),s&&a(D),s&&a($a),s&&a(da),s&&a(ha),s&&a(cs),s&&a(ga),s&&a(Q),s&&a(se),s&&a(fs),s&&a(ae),s&&a(W),s&&a(ee),s&&a(ks),s&&a(le),s&&a(Z),s&&a(pe),s&&a(te),s&&a(ne),s&&a(Es),s&&a(oe),s&&a(J),s&&a(ie),s&&a(ms),s&&a(re),s&&a(X),s&&a(ue),s&&a(ce),s&&a(fe),s&&a(bs),s&&a(ke),s&&a(Y),s&&a(Ee),s&&a(me),s&&a(be),s&&a(vs),s&&a(ve),s&&a(_e),s&&a(ye),s&&a(ys),s&&a(Pe),s&&a(Ps),s&&a(Ce),s&&a($),s&&a(we),s&&a(Be),s&&a(Re),s&&a(E),s&&a(Ae),s&&a(Cs),s&&a(He),s&&a(d),s&&a(Me),s&&a(Te),s&&a(De),s&&a(m),s&&a(Ie),s&&a(h),s&&a(Le),s&&a(v),s&&a(Oe),s&&a(_),s&&a(Ge),s&&a(xe),s&&a(Ne),s&&a(Fe),s&&a(L),s&&a(Se),s&&a(qe),s&&a(je),s&&a(ws),s&&a(Ue),s&&a(Rs),s&&a(Ve),s&&a(As),s&&a(ze),s&&a(Hs)}}}const rn={title:"Merge Branch",date:"2022-06-30T00:00:00.000Z",excerpt:"브랜치 병합",categories:["동아리교육","git"],coverImage:"/post_img/동아리교육/22-s_return_git/cover.jpeg",coverWidth:16,coverHeight:9,indexed:!1,exposed:!1};class un extends en{constructor(C){super(),ln(this,C,null,nn,pn,{})}}export{un as default,rn as metadata};