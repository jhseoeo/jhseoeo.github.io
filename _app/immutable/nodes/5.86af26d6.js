import{S as L,i as M,s as N,a as B,k as b,q as $,e as w,U as R,h as f,c as S,l as k,m as P,r as h,b as g,E as y,g as O,d as q,n as T,M as E,y as A,z,A as G,B as H}from"../chunks/index.7a488568.js";import{P as U}from"../chunks/PostsList.dcf67b64.js";import{P as j}from"../chunks/Pagination.18d6923e.js";function D(s){let e,r,a,l,t,i,m,n,u,d;return{c(){e=b("p"),r=b("strong"),a=$("Ope!"),l=$(` Sorry, couldn't find any posts in the category "`),t=$(s[2]),i=$('".'),m=B(),n=b("p"),u=b("a"),d=$("Back to blog"),this.h()},l(c){e=k(c,"P",{});var p=P(e);r=k(p,"STRONG",{});var v=P(r);a=h(v,"Ope!"),v.forEach(f),l=h(p,` Sorry, couldn't find any posts in the category "`),t=h(p,s[2]),i=h(p,'".'),p.forEach(f),m=S(c),n=k(c,"P",{});var o=P(n);u=k(o,"A",{href:!0});var _=P(u);d=h(_,"Back to blog"),_.forEach(f),o.forEach(f),this.h()},h(){T(u,"href","/posts")},m(c,p){g(c,e,p),y(e,r),y(r,a),y(e,l),y(e,t),y(e,i),g(c,m,p),g(c,n,p),y(n,u),y(u,d)},p:E,i:E,o:E,d(c){c&&f(e),c&&f(m),c&&f(n)}}}function F(s){let e,r,a,l;return e=new U({props:{posts:s[1]}}),a=new j({props:{currentPage:s[0],totalPosts:s[3],path:"/category/"+s[2]+"/page"}}),{c(){A(e.$$.fragment),r=B(),A(a.$$.fragment)},l(t){z(e.$$.fragment,t),r=S(t),z(a.$$.fragment,t)},m(t,i){G(e,t,i),g(t,r,i),G(a,t,i),l=!0},p:E,i(t){l||(O(e.$$.fragment,t),O(a.$$.fragment,t),l=!0)},o(t){q(e.$$.fragment,t),q(a.$$.fragment,t),l=!1},d(t){H(e,t),t&&f(r),H(a,t)}}}function I(s){let e,r,a,l,t,i,m,n,u,d;document.title=e="Category: "+s[2];const c=[F,D],p=[];function v(o,_){return o[1].length?0:1}return m=v(s),n=p[m]=c[m](s),{c(){r=B(),a=b("h1"),l=$("Blog category: "),t=$(s[2]),i=B(),n.c(),u=w()},l(o){R("svelte-2blklu",document.head).forEach(f),r=S(o),a=k(o,"H1",{});var C=P(a);l=h(C,"Blog category: "),t=h(C,s[2]),C.forEach(f),i=S(o),n.l(o),u=w()},m(o,_){g(o,r,_),g(o,a,_),y(a,l),y(a,t),g(o,i,_),p[m].m(o,_),g(o,u,_),d=!0},p(o,[_]){(!d||_&4)&&e!==(e="Category: "+o[2])&&(document.title=e),n.p(o,_)},i(o){d||(O(n),d=!0)},o(o){q(n),d=!1},d(o){o&&f(r),o&&f(a),o&&f(i),p[m].d(o),o&&f(u)}}}function J(s,e,r){let{data:a}=e;const{page:l,posts:t,category:i,total:m}=a;return s.$$set=n=>{"data"in n&&r(4,a=n.data)},[l,t,i,m,a]}class W extends L{constructor(e){super(),M(this,e,J,I,N,{data:4})}}export{W as component};