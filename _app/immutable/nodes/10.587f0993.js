import{S as A,i as S,s as T,k as g,a as $,q as z,y,T as B,l as q,h as i,c as d,m as C,r as D,z as E,n as h,E as k,b as _,A as v,g as b,d as w,B as x}from"../chunks/index.5621e629.js";import{P as H}from"../chunks/PostsList.26f2ee46.js";import{P as L}from"../chunks/Pagination.c888326a.js";import{b as M}from"../chunks/config.4ba40868.js";function j(p){let s,r,a,m,c,n,f,o,u;return n=new H({props:{posts:p[0].posts}}),o=new L({props:{currentPage:1,totalPosts:p[0].total}}),{c(){s=g("meta"),r=$(),a=g("h1"),m=z("Posts"),c=$(),y(n.$$.fragment),f=$(),y(o.$$.fragment),this.h()},l(t){const e=B("svelte-qtltqo",document.head);s=q(e,"META",{"data-key":!0,name:!0,content:!0}),e.forEach(i),r=d(t),a=q(t,"H1",{});var l=C(a);m=D(l,"Posts"),l.forEach(i),c=d(t),E(n.$$.fragment,t),f=d(t),E(o.$$.fragment,t),this.h()},h(){document.title="Posts",h(s,"data-key","description"),h(s,"name","description"),h(s,"content",M)},m(t,e){k(document.head,s),_(t,r,e),_(t,a,e),k(a,m),_(t,c,e),v(n,t,e),_(t,f,e),v(o,t,e),u=!0},p(t,[e]){const l={};e&1&&(l.posts=t[0].posts),n.$set(l);const P={};e&1&&(P.totalPosts=t[0].total),o.$set(P)},i(t){u||(b(n.$$.fragment,t),b(o.$$.fragment,t),u=!0)},o(t){w(n.$$.fragment,t),w(o.$$.fragment,t),u=!1},d(t){i(s),t&&i(r),t&&i(a),t&&i(c),x(n,t),t&&i(f),x(o,t)}}}function F(p,s,r){let{data:a}=s;return p.$$set=m=>{"data"in m&&r(0,a=m.data)},[a]}class N extends A{constructor(s){super(),S(this,s,F,j,T,{data:0})}}export{N as component};
