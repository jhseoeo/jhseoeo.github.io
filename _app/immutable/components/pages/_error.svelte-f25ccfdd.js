import{S as R,i as T,s as U,k as f,q as y,a as M,l as p,m as c,r as S,h as s,c as P,n as J,b as _,E as o,u as N,B as O,J as j}from"../../chunks/index-803d89d3.js";import{s as w}from"../../chunks/singletons-be855953.js";const z=()=>{const r=w;return{page:{subscribe:r.page.subscribe},navigating:{subscribe:r.navigating.subscribe},updated:r.updated}},D={subscribe(r){return z().page.subscribe(r)}};function F(r){let a,l=r[0].status+"",i,b,n,v=r[0].error+"",$,k,u,E,g,q,H,m,d,h,x;return{c(){a=f("h2"),i=y(l),b=M(),n=f("p"),$=y(v),k=M(),u=f("p"),E=f("strong"),g=y("Sorry!"),q=y(" Maybe try one of these links?"),H=M(),m=f("ul"),d=f("li"),h=f("a"),x=y("Home"),this.h()},l(e){a=p(e,"H2",{});var t=c(a);i=S(t,l),t.forEach(s),b=P(e),n=p(e,"P",{class:!0});var A=c(n);$=S(A,v),A.forEach(s),k=P(e),u=p(e,"P",{});var L=c(u);E=p(L,"STRONG",{});var B=c(E);g=S(B,"Sorry!"),B.forEach(s),q=S(L," Maybe try one of these links?"),L.forEach(s),H=P(e),m=p(e,"UL",{});var C=c(m);d=p(C,"LI",{});var G=c(d);h=p(G,"A",{href:!0});var I=c(h);x=S(I,"Home"),I.forEach(s),G.forEach(s),C.forEach(s),this.h()},h(){J(n,"class","subhead"),J(h,"href","/")},m(e,t){_(e,a,t),o(a,i),_(e,b,t),_(e,n,t),o(n,$),_(e,k,t),_(e,u,t),o(u,E),o(E,g),o(u,q),_(e,H,t),_(e,m,t),o(m,d),o(d,h),o(h,x)},p(e,[t]){t&1&&l!==(l=e[0].status+"")&&N(i,l),t&1&&v!==(v=e[0].error+"")&&N($,v)},i:O,o:O,d(e){e&&s(a),e&&s(b),e&&s(n),e&&s(k),e&&s(u),e&&s(H),e&&s(m)}}}function K(r,a,l){let i;return j(r,D,b=>l(0,i=b)),[i]}let W=class extends R{constructor(a){super(),T(this,a,K,F,U,{})}};export{W as default};
