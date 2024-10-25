import{s as pa,C as Fl,D as ea,E as Ca,F as Da,G as ka,H as Ea,e as d,a as g,c as m,b,g as $,f as v,l as f,i as O,h as l,k as Ia,m as j,n as Pl,t as k,d as E,A as ta,v as _a,j as L,x as Nl}from"../chunks/scheduler.BOwFYlz0.js";import{S as ga,i as $a,c as y,a as M,m as G,t as I,b as P,d as J,e as Ut,g as Rt}from"../chunks/index.Dy59Beth.js";import{I as Sa,g as Va,a as xa,N as qa,U as Pa,e as Ze}from"../chunks/navbar.DW8wy0cd.js";import{g as Fa}from"../chunks/entry.CQ-_EvKG.js";import{p as Na}from"../chunks/stores.CrF0CoGP.js";import{B as Ba}from"../chunks/background.DFmoeKge.js";import{S as ba}from"../chunks/sdgsIcon.C7l2wcaS.js";import{e as La}from"../chunks/events.BNOdUGot.js";import{m as Ta,e as ja}from"../chunks/user_data.BknuLSOj.js";import{C as la,a as za,M as Ha,B as Ua,S as Ra,b as ya}from"../chunks/star.CDTSC9lX.js";import{U as Ma}from"../chunks/user.COIw_O06.js";function Ga(r){let e;const t=r[2].default,s=Ca(t,r,r[3],null);return{c(){s&&s.c()},l(n){s&&s.l(n)},m(n,a){s&&s.m(n,a),e=!0},p(n,a){s&&s.p&&(!e||a&8)&&Da(s,t,n,n[3],e?Ea(t,n[3],a,null):ka(n[3]),null)},i(n){e||(I(s,n),e=!0)},o(n){P(s,n),e=!1},d(n){s&&s.d(n)}}}function Ja(r){let e,t;const s=[{name:"arrow-left"},r[1],{iconNode:r[0]}];let n={$$slots:{default:[Ga]},$$scope:{ctx:r}};for(let a=0;a<s.length;a+=1)n=Fl(n,s[a]);return e=new Sa({props:n}),{c(){y(e.$$.fragment)},l(a){M(e.$$.fragment,a)},m(a,o){G(e,a,o),t=!0},p(a,[o]){const c=o&3?Va(s,[s[0],o&2&&xa(a[1]),o&1&&{iconNode:a[0]}]):{};o&8&&(c.$$scope={dirty:o,ctx:a}),e.$set(c)},i(a){t||(I(e.$$.fragment,a),t=!0)},o(a){P(e.$$.fragment,a),t=!1},d(a){J(e,a)}}}function Oa(r,e,t){let{$$slots:s={},$$scope:n}=e;const a=[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]];return r.$$set=o=>{t(1,e=Fl(Fl({},e),ea(o))),"$$scope"in o&&t(3,n=o.$$scope)},e=ea(e),[a,e,s,n]}class Ka extends ga{constructor(e){super(),$a(this,e,Oa,Ja,pa,{})}}function aa(r,e,t){const s=r.slice();return s[9]=e[t],s}function sa(r,e,t){const s=r.slice();return s[12]=e[t],s}function na(r,e,t){const s=r.slice();return s[15]=e[t],s}function Qa(r){let e,t="<p>イベントが見つかりませんでした。</p>";return{c(){e=d("div"),e.innerHTML=t,this.h()},l(s){e=m(s,"DIV",{class:!0,"data-svelte-h":!0}),j(e)!=="svelte-1q3lipz"&&(e.innerHTML=t),this.h()},h(){f(e,"class","text-center py-10")},m(s,n){O(s,e,n)},p:Pl,i:Pl,o:Pl,d(s){s&&v(e)}}}function Wa(r){var Kl;let e,t,s,n,a,o,c,u=r[0].title+"",h,p,S,C=r[0].description+"",F,A,V,N,pe,mt,yt,z,Q,_e,Mt,ge,Bl="実施日：",Gt,Ue,et=new Date(r[0].schedule.startDate).toLocaleDateString("ja-JP")+"",ht,Jt,W,$e,Ot,be,Ll="時間：",Kt,ie,tt=r[0].schedule.startTime+"",vt,Qt,lt=r[0].schedule.endTime+"",pt,Wt,X,we,Xt,Ae,Tl="場所：",Yt,Y,at=r[0].location.prefecture+"",_t,Zt,st=r[0].location.city+"",gt,el,nt=r[0].location.address+"",$t,tl,Z,Ce,ll,De,jl="募集人数：",al,ke,rt=r[0].schedule.participantLimit+"",bt,sl,nl,ee,Ee,rl,Ie,zl="応募締め切り：",il,Re,it=new Date(r[0].schedule.applicationDeadline).toLocaleDateString("ja-JP")+"",wt,ol,te,Se,fl,Ve,Hl="配信者：",cl,ye,ot=r[0].metadata.organizer+"",At,ul,oe,xe,Ul="イベント参加者",dl,le,Ct,ml=r[1](r[0].metadata.createdAt).length<r[0].schedule.participantLimit,hl,ae,qe,Rl="関連するSDGs",vl,se,Dt,pl,fe,Pe,_l,Fe,ft=r[0].activity.vpPoints+"",kt,gl,$l,ce,Ne,yl="イベント開催地",bl,ue,Be,Ml='<iframe width="100%" height="400" frameborder="0" style="border:0" loading="lazy" allowfullscreen="" src="https://www.openstreetmap.org/export/embed.html?bbox=138.3830,34.9717,138.3930,34.9757&amp;layer=mapnik&amp;marker=34.9737,138.3880&amp;zoom=17" title="イベント開催地"></iframe>',wl,de,ne,Gl="大きな地図で見る",Al,re,ct=r[0].location.prefecture+"",Et,Cl,ut=r[0].location.city+"",It,Dl,dt=r[0].location.address+"",St,kl,Vt,xt,me,he,Le,El,Il,Te,Jl="参加申し込み",B,Sl,Ol;a=new Ka({props:{class:"h-4 w-4"}}),_e=new la({props:{class:"mr-2 h-5 w-5 text-[#3AAFA9]"}}),$e=new za({props:{class:"mr-2 h-5 w-5 text-[#3AAFA9]"}}),we=new Ha({props:{class:"mr-2 h-5 w-5 text-[#3AAFA9]"}}),Ce=new Pa({props:{class:"mr-2 h-5 w-5 text-[#3AAFA9]"}}),Ee=new la({props:{class:"mr-2 h-5 w-5 text-[#FF6B6B]"}}),Se=new Ua({props:{class:"mr-2 h-5 w-5 text-[#3AAFA9]"}});let je=Ze(r[1](r[0].metadata.createdAt)),x=[];for(let i=0;i<je.length;i+=1)x[i]=ra(na(r,je,i));const wa=i=>P(x[i],1,1,()=>{x[i]=null});let H=ml&&ia(r),T=r[0].categories.representativeSDG&&oa(r),ze=Ze(r[0].categories.sdgs.filter(r[8])),q=[];for(let i=0;i<ze.length;i+=1)q[i]=fa(sa(r,ze,i));const Aa=i=>P(q[i],1,1,()=>{q[i]=null});Pe=new Ra({props:{class:"h-6 w-6 text-[#3AAFA9] mr-2"}});let U=r[0].requirements&&(((Kl=r[0].requirements.qualifications)==null?void 0:Kl.length)>0||r[0].requirements.ageRange)&&ca(r),R=r[0].metadata.remarks&&va(r);return Le=new ya({props:{class:"mr-2 h-5 w-5"}}),{c(){e=d("div"),t=d("div"),s=d("div"),n=d("a"),y(a.$$.fragment),o=g(),c=d("h1"),h=k(u),p=g(),S=d("p"),F=k(C),A=g(),V=d("div"),N=d("img"),yt=g(),z=d("div"),Q=d("div"),y(_e.$$.fragment),Mt=g(),ge=d("span"),ge.textContent=Bl,Gt=g(),Ue=d("span"),ht=k(et),Jt=g(),W=d("div"),y($e.$$.fragment),Ot=g(),be=d("span"),be.textContent=Ll,Kt=g(),ie=d("span"),vt=k(tt),Qt=k(" - "),pt=k(lt),Wt=g(),X=d("div"),y(we.$$.fragment),Xt=g(),Ae=d("span"),Ae.textContent=Tl,Yt=g(),Y=d("span"),_t=k(at),Zt=g(),gt=k(st),el=g(),$t=k(nt),tl=g(),Z=d("div"),y(Ce.$$.fragment),ll=g(),De=d("span"),De.textContent=jl,al=g(),ke=d("span"),bt=k(rt),sl=k("名"),nl=g(),ee=d("div"),y(Ee.$$.fragment),rl=g(),Ie=d("span"),Ie.textContent=zl,il=g(),Re=d("span"),wt=k(it),ol=g(),te=d("div"),y(Se.$$.fragment),fl=g(),Ve=d("span"),Ve.textContent=Hl,cl=g(),ye=d("span"),At=k(ot),ul=g(),oe=d("div"),xe=d("h3"),xe.textContent=Ul,dl=g(),le=d("div");for(let i=0;i<x.length;i+=1)x[i].c();Ct=g(),H&&H.c(),hl=g(),ae=d("div"),qe=d("h3"),qe.textContent=Rl,vl=g(),se=d("div"),T&&T.c(),Dt=g();for(let i=0;i<q.length;i+=1)q[i].c();pl=g(),fe=d("div"),y(Pe.$$.fragment),_l=g(),Fe=d("span"),kt=k(ft),gl=k("VP"),$l=g(),ce=d("div"),Ne=d("h3"),Ne.textContent=yl,bl=g(),ue=d("div"),Be=d("div"),Be.innerHTML=Ml,wl=g(),de=d("div"),ne=d("a"),ne.textContent=Gl,Al=g(),re=d("p"),Et=k(ct),Cl=g(),It=k(ut),Dl=g(),St=k(dt),kl=g(),U&&U.c(),Vt=g(),R&&R.c(),xt=g(),me=d("div"),he=d("button"),y(Le.$$.fragment),El=k(`
                共有する`),Il=g(),Te=d("button"),Te.textContent=Jl,this.h()},l(i){e=m(i,"DIV",{class:!0});var _=b(e);t=m(_,"DIV",{class:!0});var D=b(t);s=m(D,"DIV",{class:!0});var w=b(s);n=m(w,"A",{href:!0,class:!0});var ve=b(n);M(a.$$.fragment,ve),ve.forEach(v),o=$(w),c=m(w,"H1",{class:!0});var Ql=b(c);h=E(Ql,u),Ql.forEach(v),w.forEach(v),p=$(D),S=m(D,"P",{class:!0});var Wl=b(S);F=E(Wl,C),Wl.forEach(v),A=$(D),V=m(D,"DIV",{class:!0});var qt=b(V);N=m(qt,"IMG",{src:!0,alt:!0,class:!0}),yt=$(qt),z=m(qt,"DIV",{class:!0});var K=b(z);Q=m(K,"DIV",{class:!0});var Me=b(Q);M(_e.$$.fragment,Me),Mt=$(Me),ge=m(Me,"SPAN",{class:!0,"data-svelte-h":!0}),j(ge)!=="svelte-185mru7"&&(ge.textContent=Bl),Gt=$(Me),Ue=m(Me,"SPAN",{class:!0});var Xl=b(Ue);ht=E(Xl,et),Xl.forEach(v),Me.forEach(v),Jt=$(K),W=m(K,"DIV",{class:!0});var Ge=b(W);M($e.$$.fragment,Ge),Ot=$(Ge),be=m(Ge,"SPAN",{class:!0,"data-svelte-h":!0}),j(be)!=="svelte-oedt5d"&&(be.textContent=Ll),Kt=$(Ge),ie=m(Ge,"SPAN",{class:!0});var Pt=b(ie);vt=E(Pt,tt),Qt=E(Pt," - "),pt=E(Pt,lt),Pt.forEach(v),Ge.forEach(v),Wt=$(K),X=m(K,"DIV",{class:!0});var Je=b(X);M(we.$$.fragment,Je),Xt=$(Je),Ae=m(Je,"SPAN",{class:!0,"data-svelte-h":!0}),j(Ae)!=="svelte-ergovi"&&(Ae.textContent=Tl),Yt=$(Je),Y=m(Je,"SPAN",{class:!0});var Oe=b(Y);_t=E(Oe,at),Zt=$(Oe),gt=E(Oe,st),el=$(Oe),$t=E(Oe,nt),Oe.forEach(v),Je.forEach(v),tl=$(K),Z=m(K,"DIV",{class:!0});var Ke=b(Z);M(Ce.$$.fragment,Ke),ll=$(Ke),De=m(Ke,"SPAN",{class:!0,"data-svelte-h":!0}),j(De)!=="svelte-5h85l1"&&(De.textContent=jl),al=$(Ke),ke=m(Ke,"SPAN",{class:!0});var Vl=b(ke);bt=E(Vl,rt),sl=E(Vl,"名"),Vl.forEach(v),Ke.forEach(v),nl=$(K),ee=m(K,"DIV",{class:!0});var Qe=b(ee);M(Ee.$$.fragment,Qe),rl=$(Qe),Ie=m(Qe,"SPAN",{class:!0,"data-svelte-h":!0}),j(Ie)!=="svelte-1sowdeu"&&(Ie.textContent=zl),il=$(Qe),Re=m(Qe,"SPAN",{class:!0});var Yl=b(Re);wt=E(Yl,it),Yl.forEach(v),Qe.forEach(v),ol=$(K),te=m(K,"DIV",{class:!0});var We=b(te);M(Se.$$.fragment,We),fl=$(We),Ve=m(We,"SPAN",{class:!0,"data-svelte-h":!0}),j(Ve)!=="svelte-1jlmhmx"&&(Ve.textContent=Hl),cl=$(We),ye=m(We,"SPAN",{class:!0});var Zl=b(ye);At=E(Zl,ot),Zl.forEach(v),We.forEach(v),K.forEach(v),qt.forEach(v),ul=$(D),oe=m(D,"DIV",{class:!0});var Ft=b(oe);xe=m(Ft,"H3",{class:!0,"data-svelte-h":!0}),j(xe)!=="svelte-1rpzl5d"&&(xe.textContent=Ul),dl=$(Ft),le=m(Ft,"DIV",{class:!0});var Nt=b(le);for(let He=0;He<x.length;He+=1)x[He].l(Nt);Ct=$(Nt),H&&H.l(Nt),Nt.forEach(v),Ft.forEach(v),hl=$(D),ae=m(D,"DIV",{class:!0});var Xe=b(ae);qe=m(Xe,"H3",{class:!0,"data-svelte-h":!0}),j(qe)!=="svelte-1hf462y"&&(qe.textContent=Rl),vl=$(Xe),se=m(Xe,"DIV",{class:!0});var Bt=b(se);T&&T.l(Bt),Dt=$(Bt);for(let He=0;He<q.length;He+=1)q[He].l(Bt);Bt.forEach(v),pl=$(Xe),fe=m(Xe,"DIV",{class:!0});var Lt=b(fe);M(Pe.$$.fragment,Lt),_l=$(Lt),Fe=m(Lt,"SPAN",{class:!0});var xl=b(Fe);kt=E(xl,ft),gl=E(xl,"VP"),xl.forEach(v),Lt.forEach(v),Xe.forEach(v),$l=$(D),ce=m(D,"DIV",{class:!0});var Tt=b(ce);Ne=m(Tt,"H3",{class:!0,"data-svelte-h":!0}),j(Ne)!=="svelte-t5w75t"&&(Ne.textContent=yl),bl=$(Tt),ue=m(Tt,"DIV",{class:!0});var jt=b(ue);Be=m(jt,"DIV",{class:!0,"data-svelte-h":!0}),j(Be)!=="svelte-pm1qvf"&&(Be.innerHTML=Ml),wl=$(jt),de=m(jt,"DIV",{class:!0});var zt=b(de);ne=m(zt,"A",{href:!0,target:!0,rel:!0,class:!0,"data-svelte-h":!0}),j(ne)!=="svelte-7kav9y"&&(ne.textContent=Gl),Al=$(zt),re=m(zt,"P",{class:!0});var Ye=b(re);Et=E(Ye,ct),Cl=$(Ye),It=E(Ye,ut),Dl=$(Ye),St=E(Ye,dt),Ye.forEach(v),zt.forEach(v),jt.forEach(v),Tt.forEach(v),kl=$(D),U&&U.l(D),Vt=$(D),R&&R.l(D),xt=$(D),me=m(D,"DIV",{class:!0});var Ht=b(me);he=m(Ht,"BUTTON",{class:!0});var ql=b(he);M(Le.$$.fragment,ql),El=E(ql,`
                共有する`),ql.forEach(v),Il=$(Ht),Te=m(Ht,"BUTTON",{class:!0,"data-svelte-h":!0}),j(Te)!=="svelte-1uqp2bb"&&(Te.textContent=Jl),Ht.forEach(v),D.forEach(v),_.forEach(v),this.h()},h(){f(n,"href","/event-list"),f(n,"class","mr-2 p-2 hover:bg-gray-100 rounded"),f(c,"class","text-3xl font-bold"),f(s,"class","flex items-center mb-4"),f(S,"class","text-lg text-gray-600 mb-6"),ta(N.src,pe=r[0].image)||f(N,"src",pe),f(N,"alt",mt=r[0].title),f(N,"class","w-full h-auto object-cover rounded-lg"),f(ge,"class","font-semibold"),f(Ue,"class","ml-2"),f(Q,"class","flex items-center"),f(be,"class","font-semibold"),f(ie,"class","ml-2"),f(W,"class","flex items-center"),f(Ae,"class","font-semibold"),f(Y,"class","ml-2"),f(X,"class","flex items-center"),f(De,"class","font-semibold"),f(ke,"class","ml-2"),f(Z,"class","flex items-center"),f(Ie,"class","font-semibold text-[#FF6B6B]"),f(Re,"class","ml-2 text-[#FF6B6B]"),f(ee,"class","flex items-center"),f(Ve,"class","font-semibold"),f(ye,"class","ml-2"),f(te,"class","flex items-center"),f(z,"class","space-y-4"),f(V,"class","grid md:grid-cols-2 gap-6"),f(xe,"class","text-xl font-semibold mb-2"),f(le,"class","flex flex-wrap gap-2"),f(oe,"class","mt-6"),f(qe,"class","text-xl font-semibold mb-4"),f(se,"class","flex flex-wrap gap-4 items-center"),f(Fe,"class","font-bold text-[#3AAFA9] text-xl"),f(fe,"class","flex items-center justify-end mt-4"),f(ae,"class","mt-6 bg-gray-100 p-4 rounded-md"),f(Ne,"class","text-xl font-semibold mb-2"),f(Be,"class","rounded-lg overflow-hidden"),f(ne,"href","https://www.openstreetmap.org/?mlat=34.9737&mlon=138.3880#map=17/34.9737/138.3880"),f(ne,"target","_blank"),f(ne,"rel","noopener noreferrer"),f(ne,"class","text-[#3AAFA9] hover:text-[#FF6B6B]"),f(re,"class","mt-1"),f(de,"class","mt-2 text-sm text-gray-600"),f(ue,"class","bg-white p-4 rounded-lg shadow"),f(ce,"class","mt-6"),f(he,"class","hover:text-[#3AAFA9] border border-current px-4 py-2 rounded flex items-center"),f(Te,"class","bg-[#FF6B6B] hover:bg-[#FF8080] text-white px-6 py-2 rounded"),f(me,"class","mt-6 flex justify-between"),f(t,"class","p-6"),f(e,"class","w-full max-w-4xl mx-auto bg-white bg-opacity-90 rounded-lg shadow")},m(i,_){O(i,e,_),l(e,t),l(t,s),l(s,n),G(a,n,null),l(s,o),l(s,c),l(c,h),l(t,p),l(t,S),l(S,F),l(t,A),l(t,V),l(V,N),l(V,yt),l(V,z),l(z,Q),G(_e,Q,null),l(Q,Mt),l(Q,ge),l(Q,Gt),l(Q,Ue),l(Ue,ht),l(z,Jt),l(z,W),G($e,W,null),l(W,Ot),l(W,be),l(W,Kt),l(W,ie),l(ie,vt),l(ie,Qt),l(ie,pt),l(z,Wt),l(z,X),G(we,X,null),l(X,Xt),l(X,Ae),l(X,Yt),l(X,Y),l(Y,_t),l(Y,Zt),l(Y,gt),l(Y,el),l(Y,$t),l(z,tl),l(z,Z),G(Ce,Z,null),l(Z,ll),l(Z,De),l(Z,al),l(Z,ke),l(ke,bt),l(ke,sl),l(z,nl),l(z,ee),G(Ee,ee,null),l(ee,rl),l(ee,Ie),l(ee,il),l(ee,Re),l(Re,wt),l(z,ol),l(z,te),G(Se,te,null),l(te,fl),l(te,Ve),l(te,cl),l(te,ye),l(ye,At),l(t,ul),l(t,oe),l(oe,xe),l(oe,dl),l(oe,le);for(let D=0;D<x.length;D+=1)x[D]&&x[D].m(le,null);l(le,Ct),H&&H.m(le,null),l(t,hl),l(t,ae),l(ae,qe),l(ae,vl),l(ae,se),T&&T.m(se,null),l(se,Dt);for(let D=0;D<q.length;D+=1)q[D]&&q[D].m(se,null);l(ae,pl),l(ae,fe),G(Pe,fe,null),l(fe,_l),l(fe,Fe),l(Fe,kt),l(Fe,gl),l(t,$l),l(t,ce),l(ce,Ne),l(ce,bl),l(ce,ue),l(ue,Be),l(ue,wl),l(ue,de),l(de,ne),l(de,Al),l(de,re),l(re,Et),l(re,Cl),l(re,It),l(re,Dl),l(re,St),l(t,kl),U&&U.m(t,null),l(t,Vt),R&&R.m(t,null),l(t,xt),l(t,me),l(me,he),G(Le,he,null),l(he,El),l(me,Il),l(me,Te),B=!0,Sl||(Ol=_a(he,"click",r[3]),Sl=!0)},p(i,_){var D;if((!B||_&1)&&u!==(u=i[0].title+"")&&L(h,u),(!B||_&1)&&C!==(C=i[0].description+"")&&L(F,C),(!B||_&1&&!ta(N.src,pe=i[0].image))&&f(N,"src",pe),(!B||_&1&&mt!==(mt=i[0].title))&&f(N,"alt",mt),(!B||_&1)&&et!==(et=new Date(i[0].schedule.startDate).toLocaleDateString("ja-JP")+"")&&L(ht,et),(!B||_&1)&&tt!==(tt=i[0].schedule.startTime+"")&&L(vt,tt),(!B||_&1)&&lt!==(lt=i[0].schedule.endTime+"")&&L(pt,lt),(!B||_&1)&&at!==(at=i[0].location.prefecture+"")&&L(_t,at),(!B||_&1)&&st!==(st=i[0].location.city+"")&&L(gt,st),(!B||_&1)&&nt!==(nt=i[0].location.address+"")&&L($t,nt),(!B||_&1)&&rt!==(rt=i[0].schedule.participantLimit+"")&&L(bt,rt),(!B||_&1)&&it!==(it=new Date(i[0].schedule.applicationDeadline).toLocaleDateString("ja-JP")+"")&&L(wt,it),(!B||_&1)&&ot!==(ot=i[0].metadata.organizer+"")&&L(At,ot),_&7){je=Ze(i[1](i[0].metadata.createdAt));let w;for(w=0;w<je.length;w+=1){const ve=na(i,je,w);x[w]?(x[w].p(ve,_),I(x[w],1)):(x[w]=ra(ve),x[w].c(),I(x[w],1),x[w].m(le,Ct))}for(Rt(),w=je.length;w<x.length;w+=1)wa(w);Ut()}if(_&1&&(ml=i[1](i[0].metadata.createdAt).length<i[0].schedule.participantLimit),ml?H?H.p(i,_):(H=ia(i),H.c(),H.m(le,null)):H&&(H.d(1),H=null),i[0].categories.representativeSDG?T?(T.p(i,_),_&1&&I(T,1)):(T=oa(i),T.c(),I(T,1),T.m(se,Dt)):T&&(Rt(),P(T,1,1,()=>{T=null}),Ut()),_&1){ze=Ze(i[0].categories.sdgs.filter(i[8]));let w;for(w=0;w<ze.length;w+=1){const ve=sa(i,ze,w);q[w]?(q[w].p(ve,_),I(q[w],1)):(q[w]=fa(ve),q[w].c(),I(q[w],1),q[w].m(se,null))}for(Rt(),w=ze.length;w<q.length;w+=1)Aa(w);Ut()}(!B||_&1)&&ft!==(ft=i[0].activity.vpPoints+"")&&L(kt,ft),(!B||_&1)&&ct!==(ct=i[0].location.prefecture+"")&&L(Et,ct),(!B||_&1)&&ut!==(ut=i[0].location.city+"")&&L(It,ut),(!B||_&1)&&dt!==(dt=i[0].location.address+"")&&L(St,dt),i[0].requirements&&(((D=i[0].requirements.qualifications)==null?void 0:D.length)>0||i[0].requirements.ageRange)?U?U.p(i,_):(U=ca(i),U.c(),U.m(t,Vt)):U&&(U.d(1),U=null),i[0].metadata.remarks?R?R.p(i,_):(R=va(i),R.c(),R.m(t,xt)):R&&(R.d(1),R=null)},i(i){if(!B){I(a.$$.fragment,i),I(_e.$$.fragment,i),I($e.$$.fragment,i),I(we.$$.fragment,i),I(Ce.$$.fragment,i),I(Ee.$$.fragment,i),I(Se.$$.fragment,i);for(let _=0;_<je.length;_+=1)I(x[_]);I(T);for(let _=0;_<ze.length;_+=1)I(q[_]);I(Pe.$$.fragment,i),I(Le.$$.fragment,i),B=!0}},o(i){P(a.$$.fragment,i),P(_e.$$.fragment,i),P($e.$$.fragment,i),P(we.$$.fragment,i),P(Ce.$$.fragment,i),P(Ee.$$.fragment,i),P(Se.$$.fragment,i),x=x.filter(Boolean);for(let _=0;_<x.length;_+=1)P(x[_]);P(T),q=q.filter(Boolean);for(let _=0;_<q.length;_+=1)P(q[_]);P(Pe.$$.fragment,i),P(Le.$$.fragment,i),B=!1},d(i){i&&v(e),J(a),J(_e),J($e),J(we),J(Ce),J(Ee),J(Se),Nl(x,i),H&&H.d(),T&&T.d(),Nl(q,i),J(Pe),U&&U.d(),R&&R.d(),J(Le),Sl=!1,Ol()}}}function ra(r){let e,t,s,n,a,o=r[15].name+"",c,u,h,p,S;s=new Ma({props:{class:"w-6 h-6"}});function C(){return r[7](r[15])}return{c(){e=d("button"),t=d("div"),y(s.$$.fragment),n=g(),a=d("div"),c=k(o),this.h()},l(F){e=m(F,"BUTTON",{class:!0,title:!0});var A=b(e);t=m(A,"DIV",{class:!0});var V=b(t);M(s.$$.fragment,V),V.forEach(v),n=$(A),a=m(A,"DIV",{class:!0});var N=b(a);c=E(N,o),N.forEach(v),A.forEach(v),this.h()},h(){f(t,"class","w-10 h-10 rounded-full border-2 border-[#3AAFA9] bg-white flex items-center justify-center text-[#3AAFA9] overflow-hidden transition-colors duration-200 hover:bg-[#3AAFA9] hover:text-white"),f(a,"class","absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity duration-200"),f(e,"class","group relative"),f(e,"title",u=r[15].name)},m(F,A){O(F,e,A),l(e,t),G(s,t,null),l(e,n),l(e,a),l(a,c),h=!0,p||(S=_a(e,"click",C),p=!0)},p(F,A){r=F,(!h||A&1)&&o!==(o=r[15].name+"")&&L(c,o),(!h||A&1&&u!==(u=r[15].name))&&f(e,"title",u)},i(F){h||(I(s.$$.fragment,F),h=!0)},o(F){P(s.$$.fragment,F),h=!1},d(F){F&&v(e),J(s),p=!1,S()}}}function ia(r){let e,t,s=r[0].schedule.participantLimit-r[1](r[0].metadata.createdAt).length+"",n;return{c(){e=d("div"),t=k("+"),n=k(s),this.h()},l(a){e=m(a,"DIV",{class:!0});var o=b(e);t=E(o,"+"),n=E(o,s),o.forEach(v),this.h()},h(){f(e,"class","w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-sm")},m(a,o){O(a,e,o),l(e,t),l(e,n)},p(a,o){o&1&&s!==(s=a[0].schedule.participantLimit-a[1](a[0].metadata.createdAt).length+"")&&L(n,s)},d(a){a&&v(e)}}}function oa(r){let e,t,s;return t=new ba({props:{goal:r[0].categories.representativeSDG,size:56}}),{c(){e=d("div"),y(t.$$.fragment),this.h()},l(n){e=m(n,"DIV",{class:!0});var a=b(e);M(t.$$.fragment,a),a.forEach(v),this.h()},h(){f(e,"class","flex items-center")},m(n,a){O(n,e,a),G(t,e,null),s=!0},p(n,a){const o={};a&1&&(o.goal=n[0].categories.representativeSDG),t.$set(o)},i(n){s||(I(t.$$.fragment,n),s=!0)},o(n){P(t.$$.fragment,n),s=!1},d(n){n&&v(e),J(t)}}}function fa(r){let e,t;return e=new ba({props:{goal:r[12],size:56}}),{c(){y(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,n){G(e,s,n),t=!0},p(s,n){const a={};n&1&&(a.goal=s[12]),e.$set(a)},i(s){t||(I(e.$$.fragment,s),t=!0)},o(s){P(e.$$.fragment,s),t=!1},d(s){J(e,s)}}}function ca(r){var u;let e,t,s="参加要件",n,a,o=r[0].requirements.ageRange&&ua(r),c=((u=r[0].requirements.qualifications)==null?void 0:u.length)>0&&ma(r);return{c(){e=d("div"),t=d("h3"),t.textContent=s,n=g(),o&&o.c(),a=g(),c&&c.c(),this.h()},l(h){e=m(h,"DIV",{class:!0});var p=b(e);t=m(p,"H3",{class:!0,"data-svelte-h":!0}),j(t)!=="svelte-r0ihlp"&&(t.textContent=s),n=$(p),o&&o.l(p),a=$(p),c&&c.l(p),p.forEach(v),this.h()},h(){f(t,"class","text-xl font-semibold mb-2"),f(e,"class","mt-6 bg-gray-50 p-4 rounded-lg")},m(h,p){O(h,e,p),l(e,t),l(e,n),o&&o.m(e,null),l(e,a),c&&c.m(e,null)},p(h,p){var S;h[0].requirements.ageRange?o?o.p(h,p):(o=ua(h),o.c(),o.m(e,a)):o&&(o.d(1),o=null),((S=h[0].requirements.qualifications)==null?void 0:S.length)>0?c?c.p(h,p):(c=ma(h),c.c(),c.m(e,null)):c&&(c.d(1),c=null)},d(h){h&&v(e),o&&o.d(),c&&c.d()}}}function ua(r){let e,t,s="年齢制限：",n,a=r[0].requirements.ageRange.min+"",o,c,u=r[0].requirements.ageRange.max&&da(r);return{c(){e=d("div"),t=d("span"),t.textContent=s,n=g(),o=k(a),c=k(`歳
                    `),u&&u.c(),this.h()},l(h){e=m(h,"DIV",{class:!0});var p=b(e);t=m(p,"SPAN",{class:!0,"data-svelte-h":!0}),j(t)!=="svelte-jw33k6"&&(t.textContent=s),n=$(p),o=E(p,a),c=E(p,`歳
                    `),u&&u.l(p),p.forEach(v),this.h()},h(){f(t,"class","font-semibold"),f(e,"class","mb-2")},m(h,p){O(h,e,p),l(e,t),l(e,n),l(e,o),l(e,c),u&&u.m(e,null)},p(h,p){p&1&&a!==(a=h[0].requirements.ageRange.min+"")&&L(o,a),h[0].requirements.ageRange.max?u?u.p(h,p):(u=da(h),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},d(h){h&&v(e),u&&u.d()}}}function da(r){let e,t=r[0].requirements.ageRange.max+"",s,n;return{c(){e=k("～"),s=k(t),n=k("歳")},l(a){e=E(a,"～"),s=E(a,t),n=E(a,"歳")},m(a,o){O(a,e,o),O(a,s,o),O(a,n,o)},p(a,o){o&1&&t!==(t=a[0].requirements.ageRange.max+"")&&L(s,t)},d(a){a&&(v(e),v(s),v(n))}}}function ma(r){let e,t,s="必要な資格：",n,a,o=Ze(r[0].requirements.qualifications),c=[];for(let u=0;u<o.length;u+=1)c[u]=ha(aa(r,o,u));return{c(){e=d("div"),t=d("span"),t.textContent=s,n=g(),a=d("ul");for(let u=0;u<c.length;u+=1)c[u].c();this.h()},l(u){e=m(u,"DIV",{});var h=b(e);t=m(h,"SPAN",{class:!0,"data-svelte-h":!0}),j(t)!=="svelte-1qn07mz"&&(t.textContent=s),n=$(h),a=m(h,"UL",{class:!0});var p=b(a);for(let S=0;S<c.length;S+=1)c[S].l(p);p.forEach(v),h.forEach(v),this.h()},h(){f(t,"class","font-semibold"),f(a,"class","list-disc list-inside ml-4")},m(u,h){O(u,e,h),l(e,t),l(e,n),l(e,a);for(let p=0;p<c.length;p+=1)c[p]&&c[p].m(a,null)},p(u,h){if(h&1){o=Ze(u[0].requirements.qualifications);let p;for(p=0;p<o.length;p+=1){const S=aa(u,o,p);c[p]?c[p].p(S,h):(c[p]=ha(S),c[p].c(),c[p].m(a,null))}for(;p<c.length;p+=1)c[p].d(1);c.length=o.length}},d(u){u&&v(e),Nl(c,u)}}}function ha(r){let e,t=r[9]+"",s;return{c(){e=d("li"),s=k(t)},l(n){e=m(n,"LI",{});var a=b(e);s=E(a,t),a.forEach(v)},m(n,a){O(n,e,a),l(e,s)},p(n,a){a&1&&t!==(t=n[9]+"")&&L(s,t)},d(n){n&&v(e)}}}function va(r){let e,t,s="備考：",n=r[0].metadata.remarks+"",a;return{c(){e=d("div"),t=d("span"),t.textContent=s,a=k(n),this.h()},l(o){e=m(o,"DIV",{class:!0});var c=b(e);t=m(c,"SPAN",{class:!0,"data-svelte-h":!0}),j(t)!=="svelte-54d7f6"&&(t.textContent=s),a=E(c,n),c.forEach(v),this.h()},h(){f(t,"class","font-semibold"),f(e,"class","mt-4 text-gray-600")},m(o,c){O(o,e,c),l(e,t),l(e,a)},p(o,c){c&1&&n!==(n=o[0].metadata.remarks+"")&&L(a,n)},d(o){o&&v(e)}}}function Xa(r){let e,t,s,n,a,o,c,u,h,p;t=new Ba({}),a=new qa({});const S=[Wa,Qa],C=[];function F(A,V){return A[0]?0:1}return u=F(r),h=C[u]=S[u](r),{c(){e=d("div"),y(t.$$.fragment),s=g(),n=d("div"),y(a.$$.fragment),o=g(),c=d("main"),h.c(),this.h()},l(A){e=m(A,"DIV",{class:!0});var V=b(e);M(t.$$.fragment,V),s=$(V),n=m(V,"DIV",{class:!0});var N=b(n);M(a.$$.fragment,N),o=$(N),c=m(N,"MAIN",{class:!0});var pe=b(c);h.l(pe),pe.forEach(v),N.forEach(v),V.forEach(v),this.h()},h(){f(c,"class","container mx-auto p-4 relative z-10 pt-20"),f(n,"class","relative z-10 flex flex-col min-h-screen"),f(e,"class","min-h-screen relative overflow-hidden")},m(A,V){O(A,e,V),G(t,e,null),l(e,s),l(e,n),G(a,n,null),l(n,o),l(n,c),C[u].m(c,null),p=!0},p(A,[V]){let N=u;u=F(A),u===N?C[u].p(A,V):(Rt(),P(C[N],1,1,()=>{C[N]=null}),Ut(),h=C[u],h?h.p(A,V):(h=C[u]=S[u](A),h.c()),I(h,1),h.m(c,null))},i(A){p||(I(t.$$.fragment,A),I(a.$$.fragment,A),I(h),p=!0)},o(A){P(t.$$.fragment,A),P(a.$$.fragment,A),P(h),p=!1},d(A){A&&v(e),J(t),J(a),C[u].d()}}}function Ya(r,e,t){let s,n,a;Ia(r,Na,C=>t(6,a=C));let o=[];La.subscribe(C=>{t(4,o=C)});function c(C){return(ja[C]||[]).map(A=>Ta.find(V=>V.id===A))}function u(C){Fa(`/user/${C}/history`)}function h(){const C=`https://avs.com/event-list/${s}`,F=`${n.title}に参加します！一緒に参加しませんか？ ${C}`;navigator.share?navigator.share({title:n.title,text:F,url:C}):(navigator.clipboard.writeText(F),alert("共有用リンクがクリップボードにコピーされました。"))}const p=C=>u(C.id),S=C=>C!==n.categories.representativeSDG;return r.$$.update=()=>{r.$$.dirty&64&&t(5,s=a.params.id),r.$$.dirty&48&&t(0,n=o.find(C=>C.metadata.createdAt===s))},[n,c,u,h,o,s,a,p,S]}class cs extends ga{constructor(e){super(),$a(this,e,Ya,Xa,pa,{})}}export{cs as component};
