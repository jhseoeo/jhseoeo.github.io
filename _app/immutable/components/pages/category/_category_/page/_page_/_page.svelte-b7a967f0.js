import{S as Q,i as U,s as V,k as v,a as g,e as J,T as W,l as S,h as p,c as k,n as I,E as h,b,f as H,t as O,q as y,m as C,r as P,B as z,w as D,x as R,y as j,u as K,z as F}from"../../../../../../chunks/index-d6e32500.js";import{P as X}from"../../../../../../chunks/PostsList-03089b5c.js";import{P as N}from"../../../../../../chunks/Pagination-2caceb1d.js";import{p as G,b as Y}from"../../../../../../chunks/config-2138fdd4.js";function Z(r){let a,n,c,l,f,m,o,$;return{c(){a=v("h1"),n=y("Oops!"),c=g(),l=v("p"),f=y("Sorry, no posts to show here."),m=g(),o=v("a"),$=y("Back to blog"),this.h()},l(e){a=S(e,"H1",{});var u=C(a);n=P(u,"Oops!"),u.forEach(p),c=k(e),l=S(e,"P",{});var s=C(l);f=P(s,"Sorry, no posts to show here."),s.forEach(p),m=k(e),o=S(e,"A",{href:!0});var _=C(o);$=P(_,"Back to blog"),_.forEach(p),this.h()},h(){I(o,"href","/posts")},m(e,u){b(e,a,u),h(a,n),b(e,c,u),b(e,l,u),h(l,f),b(e,m,u),b(e,o,u),h(o,$)},p:z,i:z,o:z,d(e){e&&p(a),e&&p(c),e&&p(l),e&&p(m),e&&p(o)}}}function x(r){let a,n,c,l,f,m,o,$,e,u,s,_,T,L,d,M,B,q,E,A;return d=new N({props:{currentPage:r[2],totalPosts:r[4],path:"/category/"+r[3]+"/page"}}),B=new X({props:{posts:r[5]}}),E=new N({props:{currentPage:r[2],totalPosts:r[4],path:"/category/"+r[3]+"/page"}}),{c(){a=v("h1"),n=y("Category: "),c=y(r[3]),l=g(),f=v("br"),m=g(),o=v("small"),$=y("Posts "),e=y(r[1]),u=y("–"),s=y(r[0]),_=y(" of "),T=y(r[4]),L=g(),D(d.$$.fragment),M=g(),D(B.$$.fragment),q=g(),D(E.$$.fragment)},l(t){a=S(t,"H1",{});var i=C(a);n=P(i,"Category: "),c=P(i,r[3]),l=k(i),f=S(i,"BR",{}),m=k(i),o=S(i,"SMALL",{});var w=C(o);$=P(w,"Posts "),e=P(w,r[1]),u=P(w,"–"),s=P(w,r[0]),_=P(w," of "),T=P(w,r[4]),w.forEach(p),i.forEach(p),L=k(t),R(d.$$.fragment,t),M=k(t),R(B.$$.fragment,t),q=k(t),R(E.$$.fragment,t)},m(t,i){b(t,a,i),h(a,n),h(a,c),h(a,l),h(a,f),h(a,m),h(a,o),h(o,$),h(o,e),h(o,u),h(o,s),h(o,_),h(o,T),b(t,L,i),j(d,t,i),b(t,M,i),j(B,t,i),b(t,q,i),j(E,t,i),A=!0},p(t,i){(!A||i&2)&&K(e,t[1]),(!A||i&1)&&K(s,t[0])},i(t){A||(H(d.$$.fragment,t),H(B.$$.fragment,t),H(E.$$.fragment,t),A=!0)},o(t){O(d.$$.fragment,t),O(B.$$.fragment,t),O(E.$$.fragment,t),A=!1},d(t){t&&p(a),t&&p(L),F(d,t),t&&p(M),F(B,t),t&&p(q),F(E,t)}}}function tt(r){let a,n,c,l,f,m,o;document.title=a="Blog category "+r[3]+" - page "+r[2];const $=[x,Z],e=[];function u(s,_){return s[5]&&s[5].length?0:1}return l=u(r),f=e[l]=$[l](r),{c(){n=v("meta"),c=g(),f.c(),m=J(),this.h()},l(s){const _=W("svelte-hdac8e",document.head);n=S(_,"META",{"data-key":!0,name:!0}),_.forEach(p),c=k(s),f.l(s),m=J(),this.h()},h(){I(n,"data-key","description"),I(n,"name",Y)},m(s,_){h(document.head,n),b(s,c,_),e[l].m(s,_),b(s,m,_),o=!0},p(s,[_]){(!o||_&12)&&a!==(a="Blog category "+s[3]+" - page "+s[2])&&(document.title=a),f.p(s,_)},i(s){o||(H(f),o=!0)},o(s){O(f),o=!1},d(s){p(n),s&&p(c),e[l].d(s),s&&p(m)}}}function et(r,a,n){let c,l,{data:f}=a;const{page:m,category:o,totalPosts:$,posts:e}=f;return r.$$set=u=>{"data"in u&&n(6,f=u.data)},n(1,c=m*G-(G-1)||1),n(0,l=Math.min(m*G,$)),[l,c,m,o,$,e,f]}class lt extends Q{constructor(a){super(),U(this,a,et,tt,V,{data:6})}}export{lt as default};