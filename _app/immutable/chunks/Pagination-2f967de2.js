import{S as Q,i as X,s as S,k as v,l as d,m as k,h,n as u,b as I,B as q,M as Y,a as C,q as y,c as H,r as N,T as R,p as V,E as _,u as M,e as G}from"./index-803d89d3.js";import{p as Z}from"./config-2195c28c.js";function j(i,a,l){const e=i.slice();return e[1]=a[l],e}function z(i){let a,l,e,t,r,n,s,o,b,P=i[1].title+"",L,E,m,c,f=i[1].excerpt+"",A,w;return{c(){a=v("li"),l=v("article"),e=v("a"),t=v("img"),o=C(),b=v("h2"),L=y(P),m=C(),c=v("p"),A=y(f),w=C(),this.h()},l(p){a=d(p,"LI",{});var g=k(a);l=d(g,"ARTICLE",{});var T=k(l);e=d(T,"A",{href:!0});var W=k(e);t=d(W,"IMG",{src:!0,alt:!0,width:!0,height:!0,style:!0}),o=H(W),b=d(W,"H2",{});var U=k(b);L=N(U,P),U.forEach(h),W.forEach(h),T.forEach(h),m=H(g),c=d(g,"P",{});var B=k(c);A=N(B,f),B.forEach(h),w=H(g),g.forEach(h),this.h()},h(){R(t.src,r=i[1].coverImage)||u(t,"src",r),u(t,"alt",""),u(t,"width",n=i[1].coverWidth),u(t,"height",s=i[1].coverHeight),V(t,"ratio",i[1].coverWidth+" / "+i[1].coverHeight),u(e,"href",E="/posts/"+i[1].slug)},m(p,g){I(p,a,g),_(a,l),_(l,e),_(e,t),_(e,o),_(e,b),_(b,L),_(a,m),_(a,c),_(c,A),_(a,w)},p(p,g){g&1&&!R(t.src,r=p[1].coverImage)&&u(t,"src",r),g&1&&n!==(n=p[1].coverWidth)&&u(t,"width",n),g&1&&s!==(s=p[1].coverHeight)&&u(t,"height",s),g&1&&V(t,"ratio",p[1].coverWidth+" / "+p[1].coverHeight),g&1&&P!==(P=p[1].title+"")&&M(L,P),g&1&&E!==(E="/posts/"+p[1].slug)&&u(e,"href",E),g&1&&f!==(f=p[1].excerpt+"")&&M(A,f)},d(p){p&&h(a)}}}function $(i){let a,l=i[0],e=[];for(let t=0;t<l.length;t+=1)e[t]=z(j(i,l,t));return{c(){a=v("ul");for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l(t){a=d(t,"UL",{class:!0});var r=k(a);for(let n=0;n<e.length;n+=1)e[n].l(r);r.forEach(h),this.h()},h(){u(a,"class","posts-list")},m(t,r){I(t,a,r);for(let n=0;n<e.length;n+=1)e[n].m(a,null)},p(t,[r]){if(r&1){l=t[0];let n;for(n=0;n<l.length;n+=1){const s=j(t,l,n);e[n]?e[n].p(s,r):(e[n]=z(s),e[n].c(),e[n].m(a,null))}for(;n<e.length;n+=1)e[n].d(1);e.length=l.length}},i:q,o:q,d(t){t&&h(a),Y(e,t)}}}function x(i,a,l){let{posts:e=[]}=a;return i.$$set=t=>{"posts"in t&&l(0,e=t.posts)},[e]}class ne extends Q{constructor(a){super(),X(this,a,x,$,S,{posts:0})}}function D(i,a,l){const e=i.slice();return e[5]=a[l],e}function F(i){let a,l,e=Array.from({length:i[2]},O),t=[];for(let r=0;r<e.length;r+=1)t[r]=J(D(i,e,r));return{c(){a=v("nav"),l=v("ul");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){a=d(r,"NAV",{"aria-label":!0,class:!0});var n=k(a);l=d(n,"UL",{});var s=k(l);for(let o=0;o<t.length;o+=1)t[o].l(s);s.forEach(h),n.forEach(h),this.h()},h(){u(a,"aria-label","Pagination navigation"),u(a,"class","pagination")},m(r,n){I(r,a,n),_(a,l);for(let s=0;s<t.length;s+=1)t[s].m(l,null)},p(r,n){if(n&14){e=Array.from({length:r[2]},O);let s;for(s=0;s<e.length;s+=1){const o=D(r,e,s);t[s]?t[s].p(o,n):(t[s]=J(o),t[s].c(),t[s].m(l,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=e.length}},d(r){r&&h(a),Y(t,r)}}}function ee(i){let a;return{c(){a=y("Go to page")},l(l){a=N(l,"Go to page")},m(l,e){I(l,a,e)},d(l){l&&h(a)}}}function te(i){let a;return{c(){a=y("Current page:")},l(l){a=N(l,"Current page:")},m(l,e){I(l,a,e)},d(l){l&&h(a)}}}function J(i){let a,l,e,t,r,n=i[5]+"",s,o,b,P;function L(c,f){return f&4&&(t=null),t==null&&(t=!!c[3](c[5])),t?te:ee}let E=L(i,-1),m=E(i);return{c(){a=v("li"),l=v("a"),e=v("span"),m.c(),r=C(),s=y(n),P=C(),this.h()},l(c){a=d(c,"LI",{});var f=k(a);l=d(f,"A",{href:!0,"aria-current":!0});var A=k(l);e=d(A,"SPAN",{class:!0});var w=k(e);m.l(w),w.forEach(h),r=H(A),s=N(A,n),A.forEach(h),P=H(f),f.forEach(h),this.h()},h(){u(e,"class","sr-only"),u(l,"href",o=i[1]+"/"+i[5]),u(l,"aria-current",b=i[3](i[5]))},m(c,f){I(c,a,f),_(a,l),_(l,e),m.m(e,null),_(l,r),_(l,s),_(a,P)},p(c,f){E!==(E=L(c,f))&&(m.d(1),m=E(c),m&&(m.c(),m.m(e,null))),f&4&&n!==(n=c[5]+"")&&M(s,n),f&6&&o!==(o=c[1]+"/"+c[5])&&u(l,"href",o),f&4&&b!==(b=c[3](c[5]))&&u(l,"aria-current",b)},d(c){c&&h(a),m.d()}}}function K(i){let a,l=i[2]>1&&F(i);return{c(){l&&l.c(),a=G()},l(e){l&&l.l(e),a=G()},m(e,t){l&&l.m(e,t),I(e,a,t)},p(e,t){e[2]>1?l?l.p(e,t):(l=F(e),l.c(),l.m(a.parentNode,a)):l&&(l.d(1),l=null)},d(e){l&&l.d(e),e&&h(a)}}}function le(i){let a=i[0],l,e=K(i);return{c(){e.c(),l=G()},l(t){e.l(t),l=G()},m(t,r){e.m(t,r),I(t,l,r)},p(t,[r]){r&1&&S(a,a=t[0])?(e.d(1),e=K(t),e.c(),e.m(l.parentNode,l)):e.p(t,r)},i:q,o:q,d(t){t&&h(l),e.d(t)}}}const O=(i,a)=>a+1;function ae(i,a,l){let{currentPage:e}=a,{totalPosts:t}=a,{path:r="/posts/page"}=a,n;const s=o=>o==e;return i.$$set=o=>{"currentPage"in o&&l(0,e=o.currentPage),"totalPosts"in o&&l(4,t=o.totalPosts),"path"in o&&l(1,r=o.path)},i.$$.update=()=>{i.$$.dirty&16&&l(2,n=Math.ceil(t/Z))},[e,r,n,s,t]}class se extends Q{constructor(a){super(),X(this,a,ae,le,S,{currentPage:0,totalPosts:4,path:1})}}export{ne as P,se as a};
