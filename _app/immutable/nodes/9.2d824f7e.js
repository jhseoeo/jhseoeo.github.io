import{S as A,i as S,s as z,k as g,a as $,q as B,y,U as C,l as q,h as i,c as d,m as D,r as H,z as E,n as h,E as k,b as _,A as v,g as b,d as w,B as x}from"../chunks/index.7a488568.js";import{P as L}from"../chunks/PostsList.dcf67b64.js";import{P as M}from"../chunks/Pagination.18d6923e.js";import{b as T}from"../chunks/config.2138fdd4.js";function U(p){let s,r,a,m,c,n,f,o,u;return n=new L({props:{posts:p[0].posts}}),o=new M({props:{currentPage:1,totalPosts:p[0].total}}),{c(){s=g("meta"),r=$(),a=g("h1"),m=B("Posts"),c=$(),y(n.$$.fragment),f=$(),y(o.$$.fragment),this.h()},l(t){const e=C("svelte-qtltqo",document.head);s=q(e,"META",{"data-key":!0,name:!0,content:!0}),e.forEach(i),r=d(t),a=q(t,"H1",{});var l=D(a);m=H(l,"Posts"),l.forEach(i),c=d(t),E(n.$$.fragment,t),f=d(t),E(o.$$.fragment,t),this.h()},h(){document.title="Posts",h(s,"data-key","description"),h(s,"name","description"),h(s,"content",T)},m(t,e){k(document.head,s),_(t,r,e),_(t,a,e),k(a,m),_(t,c,e),v(n,t,e),_(t,f,e),v(o,t,e),u=!0},p(t,[e]){const l={};e&1&&(l.posts=t[0].posts),n.$set(l);const P={};e&1&&(P.totalPosts=t[0].total),o.$set(P)},i(t){u||(b(n.$$.fragment,t),b(o.$$.fragment,t),u=!0)},o(t){w(n.$$.fragment,t),w(o.$$.fragment,t),u=!1},d(t){i(s),t&&i(r),t&&i(a),t&&i(c),x(n,t),t&&i(f),x(o,t)}}}function j(p,s,r){let{data:a}=s;return p.$$set=m=>{"data"in m&&r(0,a=m.data)},[a]}class K extends A{constructor(s){super(),S(this,s,j,U,z,{data:0})}}export{K as component};