import{s as N,a as _,e as b,g as w,c as S,b as y,f as p,l as E,i as D,h as k,n as P,k as x,o as B}from"../chunks/scheduler.BOwFYlz0.js";import{S as C,i as L,c as d,a as f,m as u,t as $,b as g,d as v}from"../chunks/index.Dy59Beth.js";import{g as R}from"../chunks/entry.CQ-_EvKG.js";import{e as I}from"../chunks/events.BNOdUGot.js";import{B as U}from"../chunks/background.DFmoeKge.js";import{N as V}from"../chunks/navbar.DW8wy0cd.js";import{E as q}from"../chunks/event_form._ciOvrH2.js";function z(c){let r,i,a,o,l,n,t,m;return r=new V({}),o=new U({}),t=new q({}),t.$on("submit",c[0]),{c(){d(r.$$.fragment),i=_(),a=b("div"),d(o.$$.fragment),l=_(),n=b("div"),d(t.$$.fragment),this.h()},l(e){f(r.$$.fragment,e),i=w(e),a=S(e,"DIV",{class:!0});var s=y(a);f(o.$$.fragment,s),l=w(s),n=S(s,"DIV",{class:!0});var h=y(n);f(t.$$.fragment,h),h.forEach(p),s.forEach(p),this.h()},h(){E(n,"class","relative z-10 pt-16"),E(a,"class","relative min-h-screen bg-white")},m(e,s){u(r,e,s),D(e,i,s),D(e,a,s),u(o,a,null),k(a,l),k(a,n),u(t,n,null),m=!0},p:P,i(e){m||($(r.$$.fragment,e),$(o.$$.fragment,e),$(t.$$.fragment,e),m=!0)},o(e){g(r.$$.fragment,e),g(o.$$.fragment,e),g(t.$$.fragment,e),m=!1},d(e){e&&(p(i),p(a)),v(r,e),v(o),v(t)}}}function F(c,r,i){let a;x(c,I,n=>i(2,a=n));let o=null;return B(()=>{const t=new URLSearchParams(window.location.search).get("duplicate");if(t)try{o=JSON.parse(decodeURIComponent(t)),console.log("Loaded initial data:",o)}catch(m){console.error("Failed to parse duplicate data:",m)}}),[async n=>{const{eventData:t}=n.detail;console.log("送信するイベントデータ:",t),I.addEvent(t),console.log("イベント追加後のストア:",a),await R("/home")}]}class K extends C{constructor(r){super(),L(this,r,F,z,N,{})}}export{K as component};
