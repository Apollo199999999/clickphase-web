import{S as ae,i as ne,s as se,Y as $e,e as y,w as K,k,c as v,a as B,x,m as w,d as l,f as te,b as m,g as G,y as D,J as c,U as fe,q as E,o as A,B as T,t as V,h as M,H as ue,G as de,E as me}from"../chunks/index-a7d8ca41.js";import{T as Z}from"../chunks/NavigationView.svelte_svelte_type_style_lang-86c9a88c.js";import{M as pe}from"../chunks/MicaBackground-ff907a83.js";import{B as Q}from"../chunks/Button-9d1ab1dc.js";import{H as ie}from"../chunks/HeaderChip-049c70ed.js";function ge(s){let e;return{c(){e=V("Your keys will start worshipping Granny")},l(t){e=M(t,"Your keys will start worshipping Granny")},m(t,n){G(t,e,n)},d(t){t&&l(e)}}}function _e(s){let e;return{c(){e=V("Download Granny Keyboard")},l(t){e=M(t,"Download Granny Keyboard")},m(t,n){G(t,e,n)},d(t){t&&l(e)}}}function he(s){let e=!1,t=()=>{e=!1},n,o,_,p,h,i,b,$,a,r,I,C,L,R,H,X;return $e(s[1]),_=new pe({}),I=new Z({props:{variant:"subtitle",style:"transform: translate(0,"+-s[0]*.1+"px)",class:"caption-text",$$slots:{default:[ge]},$$scope:{ctx:s}}}),L=new Q({props:{class:"download-btn",style:"transform: translate(0,"+-s[0]*.1+"px) scale(calc(16/14))",onclick:"window.open('https://github.com/Apollo199999999/Granny-Keyboard/releases', '_blank');",variant:"accent",$$slots:{default:[_e]},$$scope:{ctx:s}}}),{c(){o=y("div"),K(_.$$.fragment),p=k(),h=y("div"),i=y("img"),b=k(),$=y("div"),a=y("img"),r=k(),K(I.$$.fragment),C=k(),K(L.$$.fragment),this.h()},l(d){o=v(d,"DIV",{class:!0});var f=B(o);x(_.$$.fragment,f),p=w(f),h=v(f,"DIV",{class:!0});var Y=B(h);i=v(Y,"IMG",{style:!0,alt:!0,class:!0}),Y.forEach(l),b=w(f),$=v(f,"DIV",{class:!0});var q=B($);a=v(q,"IMG",{style:!0,alt:!0,class:!0}),r=w(q),x(I.$$.fragment,q),C=w(q),x(L.$$.fragment,q),q.forEach(l),f.forEach(l),this.h()},h(){te(i,"transform","translate(0,"+-s[0]*.2+"px)"),m(i,"alt","Granny Keyboard Windows Screenshot"),m(i,"class","svelte-1iyksoe"),m(h,"class","bg-image-div svelte-1iyksoe"),te(a,"transform","translate(0,"+-s[0]*.1+"px)"),m(a,"alt","Granny Keyboard Logo"),m(a,"class","svelte-1iyksoe"),m($,"class","logo-components svelte-1iyksoe"),m(o,"class","parallax-container svelte-1iyksoe")},m(d,f){G(d,o,f),D(_,o,null),c(o,p),c(o,h),c(h,i),c(o,b),c(o,$),c($,a),c($,r),D(I,$,null),c($,C),D(L,$,null),R=!0,H||(X=fe(window,"scroll",()=>{e=!0,clearTimeout(n),n=setTimeout(t,100),s[1]()}),H=!0)},p(d,[f]){f&1&&!e&&(e=!0,clearTimeout(n),scrollTo(window.pageXOffset,d[0]),n=setTimeout(t,100)),(!R||f&1)&&te(i,"transform","translate(0,"+-d[0]*.2+"px)"),(!R||f&1)&&te(a,"transform","translate(0,"+-d[0]*.1+"px)");const Y={};f&1&&(Y.style="transform: translate(0,"+-d[0]*.1+"px)"),f&4&&(Y.$$scope={dirty:f,ctx:d}),I.$set(Y);const q={};f&1&&(q.style="transform: translate(0,"+-d[0]*.1+"px) scale(calc(16/14))"),f&4&&(q.$$scope={dirty:f,ctx:d}),L.$set(q)},i(d){R||(E(_.$$.fragment,d),E(I.$$.fragment,d),E(L.$$.fragment,d),R=!0)},o(d){A(_.$$.fragment,d),A(I.$$.fragment,d),A(L.$$.fragment,d),R=!1},d(d){d&&l(o),T(_),T(I),T(L),H=!1,X()}}}function be(s,e,t){let n;function o(){t(0,n=window.pageYOffset)}return[n,o]}class ye extends ae{constructor(e){super(),ne(this,e,be,he,se,{})}}function ke(s){let e;return{c(){e=V("About")},l(t){e=M(t,"About")},m(t,n){G(t,e,n)},d(t){t&&l(e)}}}function ve(s){let e;return{c(){e=V("About Granny Keyboard")},l(t){e=M(t,"About Granny Keyboard")},m(t,n){G(t,e,n)},d(t){t&&l(e)}}}function we(s){let e;return{c(){e=V(`Granny Keyboard is a keyboard modifier that modifies your keyboard to\r
        make it worthy of Granny. Whichever key you press, the word 'Granny'\r
        will be added in front of it and a dialog box will pop up.`)},l(t){e=M(t,`Granny Keyboard is a keyboard modifier that modifies your keyboard to\r
        make it worthy of Granny. Whichever key you press, the word 'Granny'\r
        will be added in front of it and a dialog box will pop up.`)},m(t,n){G(t,e,n)},d(t){t&&l(e)}}}function Ge(s){let e,t,n,o,_,p,h,i,b,$;return t=new ie({props:{$$slots:{default:[ke]},$$scope:{ctx:s}}}),o=new Z({props:{variant:"titleLarge",class:"titleText",$$slots:{default:[ve]},$$scope:{ctx:s}}}),p=new Z({props:{variant:"bodyLarge",class:"bodyText",$$slots:{default:[we]},$$scope:{ctx:s}}}),{c(){e=y("div"),K(t.$$.fragment),n=k(),K(o.$$.fragment),_=k(),K(p.$$.fragment),h=k(),i=y("iframe"),this.h()},l(a){e=v(a,"DIV",{class:!0});var r=B(e);x(t.$$.fragment,r),n=w(r),x(o.$$.fragment,r),_=w(r),x(p.$$.fragment,r),h=w(r),i=v(r,"IFRAME",{src:!0,title:!0,frameborder:!0,allow:!0,class:!0}),B(i).forEach(l),r.forEach(l),this.h()},h(){ue(i.src,b="https://www.youtube-nocookie.com/embed/NdBmcblzhFA")||m(i,"src",b),m(i,"title","YouTube video player"),m(i,"frameborder","0"),m(i,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),i.allowFullscreen=!0,m(i,"class","svelte-18fotlr"),m(e,"class","container svelte-18fotlr")},m(a,r){G(a,e,r),D(t,e,null),c(e,n),D(o,e,null),c(e,_),D(p,e,null),c(e,h),c(e,i),$=!0},p(a,[r]){const I={};r&1&&(I.$$scope={dirty:r,ctx:a}),t.$set(I);const C={};r&1&&(C.$$scope={dirty:r,ctx:a}),o.$set(C);const L={};r&1&&(L.$$scope={dirty:r,ctx:a}),p.$set(L)},i(a){$||(E(t.$$.fragment,a),E(o.$$.fragment,a),E(p.$$.fragment,a),$=!0)},o(a){A(t.$$.fragment,a),A(o.$$.fragment,a),A(p.$$.fragment,a),$=!1},d(a){a&&l(e),T(t),T(o),T(p)}}}class Ke extends ae{constructor(e){super(),ne(this,e,null,Ge,se,{})}}function xe(s){let e;return{c(){e=V("Links")},l(t){e=M(t,"Links")},m(t,n){G(t,e,n)},d(t){t&&l(e)}}}function De(s){let e;return{c(){e=V("Downloads and Links")},l(t){e=M(t,"Downloads and Links")},m(t,n){G(t,e,n)},d(t){t&&l(e)}}}function Ee(s){let e;return{c(){e=V("Granny Keyboard downloads and other links.")},l(t){e=M(t,"Granny Keyboard downloads and other links.")},m(t,n){G(t,e,n)},d(t){t&&l(e)}}}function Ae(s){let e;return{c(){e=V("Download Granny Keyboard")},l(t){e=M(t,"Download Granny Keyboard")},m(t,n){G(t,e,n)},d(t){t&&l(e)}}}function Te(s){let e;return{c(){e=V("Granny Keyboard source code")},l(t){e=M(t,"Granny Keyboard source code")},m(t,n){G(t,e,n)},d(t){t&&l(e)}}}function Ie(s){let e;return{c(){e=V("Report a bug")},l(t){e=M(t,"Report a bug")},m(t,n){G(t,e,n)},d(t){t&&l(e)}}}function Le(s){let e;return{c(){e=V("Request a feature")},l(t){e=M(t,"Request a feature")},m(t,n){G(t,e,n)},d(t){t&&l(e)}}}function Ve(s){let e,t,n,o,_,p,h,i,b,$,a,r,I,C,L,R,H,X,d,f,Y,q,re,W,oe,F,le,j,ee;return t=new ie({props:{$$slots:{default:[xe]},$$scope:{ctx:s}}}),o=new Z({props:{class:"titleText",variant:"titleLarge",$$slots:{default:[De]},$$scope:{ctx:s}}}),p=new Z({props:{variant:"bodyLarge",class:"bodyText",$$slots:{default:[Ee]},$$scope:{ctx:s}}}),H=new Q({props:{onclick:"window.open('https://github.com/Apollo199999999/Granny-Keyboard/releases', '_blank');",variant:"accent",class:"download-btn",$$slots:{default:[Ae]},$$scope:{ctx:s}}}),W=new Q({props:{class:"hyperlinks",onclick:"window.open('https://github.com/Apollo199999999/Granny-Keyboard', '_blank');",variant:"hyperlink",$$slots:{default:[Te]},$$scope:{ctx:s}}}),F=new Q({props:{class:"hyperlinks",onclick:"window.open('https://github.com/Apollo199999999/Granny-Keyboard/issues', '_blank');",variant:"hyperlink",$$slots:{default:[Ie]},$$scope:{ctx:s}}}),j=new Q({props:{class:"hyperlinks",onclick:"window.open('https://github.com/Apollo199999999/Granny-Keyboard/issues', '_blank');",variant:"hyperlink",$$slots:{default:[Le]},$$scope:{ctx:s}}}),{c(){e=y("div"),K(t.$$.fragment),n=k(),K(o.$$.fragment),_=k(),K(p.$$.fragment),h=k(),i=y("div"),b=y("div"),$=y("div"),a=y("p"),r=V("Download Granny Keyboard"),I=k(),C=y("p"),L=V("Click the button below to download Granny Keyboard:"),R=k(),K(H.$$.fragment),X=k(),d=y("div"),f=y("div"),Y=y("p"),q=V("Granny Keyboard links"),re=k(),K(W.$$.fragment),oe=k(),K(F.$$.fragment),le=k(),K(j.$$.fragment),this.h()},l(u){e=v(u,"DIV",{class:!0});var g=B(e);x(t.$$.fragment,g),n=w(g),x(o.$$.fragment,g),_=w(g),x(p.$$.fragment,g),h=w(g),i=v(g,"DIV",{class:!0});var O=B(i);b=v(O,"DIV",{class:!0});var z=B(b);$=v(z,"DIV",{class:!0});var S=B($);a=v(S,"P",{class:!0});var J=B(a);r=M(J,"Download Granny Keyboard"),J.forEach(l),I=w(S),C=v(S,"P",{class:!0});var N=B(C);L=M(N,"Click the button below to download Granny Keyboard:"),N.forEach(l),R=w(S),x(H.$$.fragment,S),S.forEach(l),z.forEach(l),X=w(O),d=v(O,"DIV",{class:!0});var U=B(d);f=v(U,"DIV",{class:!0});var P=B(f);Y=v(P,"P",{class:!0});var ce=B(Y);q=M(ce,"Granny Keyboard links"),ce.forEach(l),re=w(P),x(W.$$.fragment,P),oe=w(P),x(F.$$.fragment,P),le=w(P),x(j.$$.fragment,P),P.forEach(l),U.forEach(l),O.forEach(l),g.forEach(l),this.h()},h(){m(a,"class","card-text svelte-2gk8ks"),m(C,"class","card-subtext svelte-2gk8ks"),m($,"class","card-content svelte-2gk8ks"),m(b,"class","card svelte-2gk8ks"),m(Y,"class","card-text svelte-2gk8ks"),m(f,"class","card-content svelte-2gk8ks"),m(d,"class","card svelte-2gk8ks"),m(i,"class","cards-collection svelte-2gk8ks"),m(e,"class","container svelte-2gk8ks")},m(u,g){G(u,e,g),D(t,e,null),c(e,n),D(o,e,null),c(e,_),D(p,e,null),c(e,h),c(e,i),c(i,b),c(b,$),c($,a),c(a,r),c($,I),c($,C),c(C,L),c($,R),D(H,$,null),c(i,X),c(i,d),c(d,f),c(f,Y),c(Y,q),c(f,re),D(W,f,null),c(f,oe),D(F,f,null),c(f,le),D(j,f,null),ee=!0},p(u,[g]){const O={};g&1&&(O.$$scope={dirty:g,ctx:u}),t.$set(O);const z={};g&1&&(z.$$scope={dirty:g,ctx:u}),o.$set(z);const S={};g&1&&(S.$$scope={dirty:g,ctx:u}),p.$set(S);const J={};g&1&&(J.$$scope={dirty:g,ctx:u}),H.$set(J);const N={};g&1&&(N.$$scope={dirty:g,ctx:u}),W.$set(N);const U={};g&1&&(U.$$scope={dirty:g,ctx:u}),F.$set(U);const P={};g&1&&(P.$$scope={dirty:g,ctx:u}),j.$set(P)},i(u){ee||(E(t.$$.fragment,u),E(o.$$.fragment,u),E(p.$$.fragment,u),E(H.$$.fragment,u),E(W.$$.fragment,u),E(F.$$.fragment,u),E(j.$$.fragment,u),ee=!0)},o(u){A(t.$$.fragment,u),A(o.$$.fragment,u),A(p.$$.fragment,u),A(H.$$.fragment,u),A(W.$$.fragment,u),A(F.$$.fragment,u),A(j.$$.fragment,u),ee=!1},d(u){u&&l(e),T(t),T(o),T(p),T(H),T(W),T(F),T(j)}}}class Me extends ae{constructor(e){super(),ne(this,e,null,Ve,se,{})}}function qe(s){let e,t,n,o,_,p,h,i,b,$;return _=new ye({}),h=new Ke({}),b=new Me({}),{c(){e=y("meta"),t=y("meta"),n=y("meta"),o=k(),K(_.$$.fragment),p=k(),K(h.$$.fragment),i=k(),K(b.$$.fragment),this.h()},l(a){const r=de('[data-svelte="svelte-17x9va3"]',document.head);e=v(r,"META",{name:!0,content:!0}),t=v(r,"META",{name:!0,content:!0}),n=v(r,"META",{name:!0,content:!0}),r.forEach(l),o=w(a),x(_.$$.fragment,a),p=w(a),x(h.$$.fragment,a),i=w(a),x(b.$$.fragment,a),this.h()},h(){document.title="Granny Keyboard - ClickPhase",m(e,"name","description"),m(e,"content","Granny Keyboard - Your keys will start worshipping Granny"),m(t,"name","keywords"),m(t,"content","Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny keyboard, launcherx, dynawin, DynaWin, p5js, p5.js"),m(n,"name","author"),m(n,"content","ClickPhase")},m(a,r){c(document.head,e),c(document.head,t),c(document.head,n),G(a,o,r),D(_,a,r),G(a,p,r),D(h,a,r),G(a,i,r),D(b,a,r),$=!0},p:me,i(a){$||(E(_.$$.fragment,a),E(h.$$.fragment,a),E(b.$$.fragment,a),$=!0)},o(a){A(_.$$.fragment,a),A(h.$$.fragment,a),A(b.$$.fragment,a),$=!1},d(a){l(e),l(t),l(n),a&&l(o),T(_,a),a&&l(p),T(h,a),a&&l(i),T(b,a)}}}class Re extends ae{constructor(e){super(),ne(this,e,null,qe,se,{})}}export{Re as default};
