import{S as $,i as ee,s as te,e as X,b as H,M as j,h,o as ne,k as p,l as y,m as v,W as s,a as A,q as W,X as le,U as oe,c as w,r as B,Y as re,n as g,V as se,p as ce,E as u,g as ie,d as ae,J as fe,N as me,y as ue,z as he,A as de,B as ge}from"../chunks/index.7a488568.js";import{_ as _e}from"../chunks/preload-helper.41c905a7.js";import{a as be}from"../chunks/store.ac9b2e1d.js";import{g as q}from"../chunks/config.2138fdd4.js";function Q(a){let e;return{c(){e=p("giscus-widget"),this.h()},l(t){e=y(t,"GISCUS-WIDGET",{id:!0,host:!0,repo:!0,repoid:!0,category:!0,categoryid:!0,mapping:!0,term:!0,strict:!0,reactionsenabled:!0,emitmetadata:!0,inputposition:!0,theme:!0,lang:!0,loading:!0}),v(e).forEach(h),this.h()},h(){s(e,"id",a[0]),s(e,"host",a[1]),s(e,"repo",a[2]),s(e,"repoid",a[3]),s(e,"category",a[4]),s(e,"categoryid",a[5]),s(e,"mapping",a[6]),s(e,"term",a[7]),s(e,"strict",a[8]),s(e,"reactionsenabled",a[9]),s(e,"emitmetadata",a[10]),s(e,"inputposition",a[11]),s(e,"theme",a[12]),s(e,"lang",a[13]),s(e,"loading",a[14])},m(t,i){H(t,e,i)},p(t,i){i&1&&s(e,"id",t[0]),i&2&&s(e,"host",t[1]),i&4&&s(e,"repo",t[2]),i&8&&s(e,"repoid",t[3]),i&16&&s(e,"category",t[4]),i&32&&s(e,"categoryid",t[5]),i&64&&s(e,"mapping",t[6]),i&128&&s(e,"term",t[7]),i&256&&s(e,"strict",t[8]),i&512&&s(e,"reactionsenabled",t[9]),i&1024&&s(e,"emitmetadata",t[10]),i&2048&&s(e,"inputposition",t[11]),i&4096&&s(e,"theme",t[12]),i&8192&&s(e,"lang",t[13]),i&16384&&s(e,"loading",t[14])},d(t){t&&h(e)}}}function Ee(a){let e,t=a[15]&&Q(a);return{c(){t&&t.c(),e=X()},l(i){t&&t.l(i),e=X()},m(i,r){t&&t.m(i,r),H(i,e,r)},p(i,[r]){i[15]?t?t.p(i,r):(t=Q(i),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:j,o:j,d(i){t&&t.d(i),i&&h(e)}}}function Ie(a,e,t){let{id:i=void 0}=e,{host:r="https://giscus.app"}=e,{repo:f}=e,{repoId:d}=e,{category:n=void 0}=e,{categoryId:l=void 0}=e,{mapping:_="pathname"}=e,{term:c=void 0}=e,{strict:b="0"}=e,{reactionsEnabled:I="1"}=e,{emitMetadata:S="0"}=e,{inputPosition:P="bottom"}=e,{theme:C="light"}=e,{lang:D="en"}=e,{loading:G="eager"}=e,U=!1;return ne(()=>{t(15,U=!0),_e(()=>import("../chunks/giscus.6650c2d9.js"),[],import.meta.url)}),a.$$set=o=>{"id"in o&&t(0,i=o.id),"host"in o&&t(1,r=o.host),"repo"in o&&t(2,f=o.repo),"repoId"in o&&t(3,d=o.repoId),"category"in o&&t(4,n=o.category),"categoryId"in o&&t(5,l=o.categoryId),"mapping"in o&&t(6,_=o.mapping),"term"in o&&t(7,c=o.term),"strict"in o&&t(8,b=o.strict),"reactionsEnabled"in o&&t(9,I=o.reactionsEnabled),"emitMetadata"in o&&t(10,S=o.emitMetadata),"inputPosition"in o&&t(11,P=o.inputPosition),"theme"in o&&t(12,C=o.theme),"lang"in o&&t(13,D=o.lang),"loading"in o&&t(14,G=o.loading)},[i,r,f,d,n,l,_,c,b,I,S,P,C,D,G,U]}class pe extends ${constructor(e){super(),ee(this,e,Ie,Ee,te,{id:0,host:1,repo:2,repoId:3,category:4,categoryId:5,mapping:6,term:7,strict:8,reactionsEnabled:9,emitMetadata:10,inputPosition:11,theme:12,lang:13,loading:14})}}function Z(a,e,t){const i=a.slice();return i[9]=e[t],i}function ye(a){let e,t,i,r,f,d=a[8],n=[];for(let l=0;l<d.length;l+=1)n[l]=x(Z(a,d,l));return{c(){e=p("aside"),t=p("h2"),i=W("Posted in:"),r=A(),f=p("ul");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){e=y(l,"ASIDE",{class:!0});var _=v(e);t=y(_,"H2",{});var c=v(t);i=B(c,"Posted in:"),c.forEach(h),r=w(_),f=y(_,"UL",{});var b=v(f);for(let I=0;I<n.length;I+=1)n[I].l(b);b.forEach(h),_.forEach(h),this.h()},h(){g(e,"class","post-footer")},m(l,_){H(l,e,_),u(e,t),u(t,i),u(e,r),u(e,f);for(let c=0;c<n.length;c+=1)n[c].m(f,null)},p(l,_){if(_&256){d=l[8];let c;for(c=0;c<d.length;c+=1){const b=Z(l,d,c);n[c]?n[c].p(b,_):(n[c]=x(b),n[c].c(),n[c].m(f,null))}for(;c<n.length;c+=1)n[c].d(1);n.length=d.length}},d(l){l&&h(e),me(n,l)}}}function x(a){let e,t,i=a[9]+"",r,f;return{c(){e=p("li"),t=p("a"),r=W(i),f=A(),this.h()},l(d){e=y(d,"LI",{});var n=v(e);t=y(n,"A",{href:!0});var l=v(t);r=B(l,i),l.forEach(h),f=w(n),n.forEach(h),this.h()},h(){g(t,"href","/category/"+a[9]+"/")},m(d,n){H(d,e,n),u(e,t),u(t,r),u(e,f)},p:j,d(d){d&&h(e)}}}function Pe(a){let e,t;return e=new pe({props:{repo:q.repo,repoId:q.repoId,category:q.category,categoryId:q.categoryId,mapping:q.mapping,strict:"0",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"bottom",theme:a[1],lang:q.lang}}),{c(){ue(e.$$.fragment)},l(i){he(e.$$.fragment,i)},m(i,r){de(e,i,r),t=!0},p(i,r){const f={};r&2&&(f.theme=i[1]),e.$set(f)},i(i){t||(ie(e.$$.fragment,i),t=!0)},o(i){ae(e.$$.fragment,i),t=!1},d(i){ge(e,i)}}}function ke(a){let e,t,i,r,f,d,n,l,_,c,b,I,S,P,C,D,G,U=a[4].slice(0,10)+"",o,Y,V,N=a[0].PostContent+"",R,z,J,L;document.title=e=a[2];let T=a[8]&&ye(a),k=Pe(a);return{c(){t=p("meta"),i=p("meta"),r=p("meta"),f=p("meta"),d=A(),n=p("article"),l=p("img"),c=A(),b=p("h1"),I=W(a[2]),S=A(),P=p("div"),C=p("b"),D=W("Published:"),G=A(),o=W(U),Y=A(),V=new le(!1),R=A(),T&&T.c(),z=A(),k&&k.c(),J=X(),this.h()},l(m){const E=oe("svelte-15lge4r",document.head);t=y(E,"META",{"data-key":!0,name:!0,content:!0}),i=y(E,"META",{property:!0,content:!0}),r=y(E,"META",{property:!0,content:!0}),f=y(E,"META",{property:!0,content:!0}),E.forEach(h),d=w(m),n=y(m,"ARTICLE",{class:!0});var M=v(n);l=y(M,"IMG",{class:!0,src:!0,alt:!0,style:!0,width:!0,height:!0}),c=w(M),b=y(M,"H1",{});var F=v(b);I=B(F,a[2]),F.forEach(h),S=w(M),P=y(M,"DIV",{class:!0});var O=v(P);C=y(O,"B",{});var K=v(C);D=B(K,"Published:"),K.forEach(h),G=w(O),o=B(O,U),O.forEach(h),Y=w(M),V=re(M,!1),R=w(M),T&&T.l(M),M.forEach(h),z=w(m),k&&k.l(m),J=X(),this.h()},h(){g(t,"data-key","description"),g(t,"name","description"),g(t,"content",a[3]),g(i,"property","og:type"),g(i,"content","article"),g(r,"property","og:title"),g(r,"content",a[2]),g(f,"property","og:description"),g(f,"content",a[3]),g(l,"class","cover-image"),se(l.src,_=a[5])||g(l,"src",_),g(l,"alt",""),ce(l,"aspect-ratio",a[6]+" / "+a[7]),g(l,"width",a[6]),g(l,"height",a[7]),g(P,"class","meta"),V.a=R,g(n,"class","post")},m(m,E){u(document.head,t),u(document.head,i),u(document.head,r),u(document.head,f),H(m,d,E),H(m,n,E),u(n,l),u(n,c),u(n,b),u(b,I),u(n,S),u(n,P),u(P,C),u(C,D),u(P,G),u(P,o),u(n,Y),V.m(N,n),u(n,R),T&&T.m(n,null),H(m,z,E),k&&k.m(m,E),H(m,J,E),L=!0},p(m,[E]){(!L||E&4)&&e!==(e=m[2])&&(document.title=e),(!L||E&1)&&N!==(N=m[0].PostContent+"")&&V.p(N),m[8]&&T.p(m,E),k.p(m,E)},i(m){L||(ie(k),L=!0)},o(m){ae(k),L=!1},d(m){h(t),h(i),h(r),h(f),m&&h(d),m&&h(n),T&&T.d(),m&&h(z),k&&k.d(m),m&&h(J)}}}function Me(a,e,t){let i;fe(a,be,I=>t(1,i=I));let{data:r}=e;const{title:f,excerpt:d,date:n,coverImage:l,coverWidth:_,coverHeight:c,categories:b}=r.meta;return a.$$set=I=>{"data"in I&&t(0,r=I.data)},[r,i,f,d,n,l,_,c,b]}class Ce extends ${constructor(e){super(),ee(this,e,Me,ke,te,{data:0})}}export{Ce as component};
