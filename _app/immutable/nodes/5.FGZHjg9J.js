import{s as T,a as C,e as $,g as M,c as b,b as V,f as d,l as k,i as y,h as B,k as H,m as j,n as h}from"../chunks/scheduler.BOwFYlz0.js";import{S as q,i as x,c as E,a as D,m as w,b as v,e as z,t as g,d as S,g as A}from"../chunks/index.Dy59Beth.js";import{g as L}from"../chunks/entry.D9KDtMk4.js";import{p as P}from"../chunks/stores.BuSYOcD_.js";import{e as N}from"../chunks/events.BNOdUGot.js";import{B as F}from"../chunks/background.DFmoeKge.js";import{N as G}from"../chunks/navbar.DW8wy0cd.js";import{E as J}from"../chunks/event_form._ciOvrH2.js";function K(o){let t,a="<p>イベントが見つかりません</p>";return{c(){t=$("div"),t.innerHTML=a,this.h()},l(e){t=b(e,"DIV",{class:!0,"data-svelte-h":!0}),j(t)!=="svelte-amjcn9"&&(t.innerHTML=a),this.h()},h(){k(t,"class","text-center py-8")},m(e,r){y(e,t,r)},p:h,i:h,o:h,d(e){e&&d(t)}}}function O(o){let t,a;return t=new J({props:{isEditMode:!0,initialData:o[0]}}),t.$on("submit",o[1]),t.$on("cancel",o[2]),{c(){E(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,r){w(t,e,r),a=!0},p(e,r){const f={};r&1&&(f.initialData=e[0]),t.$set(f)},i(e){a||(g(t.$$.fragment,e),a=!0)},o(e){v(t.$$.fragment,e),a=!1},d(e){S(t,e)}}}function Q(o){let t,a,e,r,f,m,s,i,c;t=new G({}),r=new F({});const _=[O,K],u=[];function I(n,l){return n[0]?0:1}return s=I(o),i=u[s]=_[s](o),{c(){E(t.$$.fragment),a=C(),e=$("div"),E(r.$$.fragment),f=C(),m=$("div"),i.c(),this.h()},l(n){D(t.$$.fragment,n),a=M(n),e=b(n,"DIV",{class:!0});var l=V(e);D(r.$$.fragment,l),f=M(l),m=b(l,"DIV",{class:!0});var p=V(m);i.l(p),p.forEach(d),l.forEach(d),this.h()},h(){k(m,"class","relative z-10 pt-16"),k(e,"class","relative min-h-screen bg-white")},m(n,l){w(t,n,l),y(n,a,l),y(n,e,l),w(r,e,null),B(e,f),B(e,m),u[s].m(m,null),c=!0},p(n,[l]){let p=s;s=I(n),s===p?u[s].p(n,l):(A(),v(u[p],1,1,()=>{u[p]=null}),z(),i=u[s],i?i.p(n,l):(i=u[s]=_[s](n),i.c()),g(i,1),i.m(m,null))},i(n){c||(g(t.$$.fragment,n),g(r.$$.fragment,n),g(i),c=!0)},o(n){v(t.$$.fragment,n),v(r.$$.fragment,n),v(i),c=!1},d(n){n&&(d(a),d(e)),S(t,n),S(r),u[s].d()}}}function R(o,t,a){let e,r,f,m;H(o,N,c=>a(4,f=c)),H(o,P,c=>a(5,m=c));const s=async c=>{const{eventData:_}=c.detail;console.log("更新するイベントデータ:",_),N.updateEvent(e,_),await L("/home")},i=()=>{L("/home")};return o.$$.update=()=>{o.$$.dirty&32&&a(3,e=m.params.id),o.$$.dirty&24&&a(0,r=f.find(c=>c.metadata.createdAt===e))},[r,s,i,e,f,m]}class ae extends q{constructor(t){super(),x(this,t,R,Q,T,{})}}export{ae as component};
