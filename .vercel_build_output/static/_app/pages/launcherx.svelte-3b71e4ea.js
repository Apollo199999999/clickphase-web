import{S as H,i as Y,s as z,Y as P,e as x,w as X,k as y,c as b,a as D,x as E,m as k,d as f,f as T,b as g,g as L,y as I,J as _,U,q as B,o as S,B as M,t as A,h as J,G as W,E as j}from"../chunks/index-306fcf0d.js";import{T as F}from"../chunks/NavigationView.svelte_svelte_type_style_lang-c16d035c.js";import{M as K}from"../chunks/MicaBackground-d5b6acee.js";import{B as N}from"../chunks/Button-cef66c42.js";function Q(o){let e;return{c(){e=A("Organise all your stuff!")},l(t){e=J(t,"Organise all your stuff!")},m(t,r){L(t,e,r)},d(t){t&&f(e)}}}function R(o){let e;return{c(){e=A("Download LauncherX")},l(t){e=J(t,"Download LauncherX")},m(t,r){L(t,e,r)},d(t){t&&f(e)}}}function Z(o){let e=!1,t=()=>{e=!1},r,l,c,s,i,$,O,u,v,V,p,q,d,h,G,C;return P(o[1]),c=new K({}),p=new F({props:{variant:"subtitle",style:"transform: translate(0,"+-o[0]*.1+"px)",class:"caption-text",$$slots:{default:[Q]},$$scope:{ctx:o}}}),d=new N({props:{class:"download-btn",style:"transform: translate(0,"+-o[0]*.1+"px) scale(calc(16/14))",onclick:"window.open('https://github.com/Apollo199999999/LauncherX/releases', '_blank');",variant:"accent",$$slots:{default:[R]},$$scope:{ctx:o}}}),{c(){l=x("div"),X(c.$$.fragment),s=y(),i=x("div"),$=x("img"),O=y(),u=x("div"),v=x("img"),V=y(),X(p.$$.fragment),q=y(),X(d.$$.fragment),this.h()},l(a){l=b(a,"DIV",{class:!0});var n=D(l);E(c.$$.fragment,n),s=k(n),i=b(n,"DIV",{class:!0});var w=D(i);$=b(w,"IMG",{style:!0,alt:!0,class:!0}),w.forEach(f),O=k(n),u=b(n,"DIV",{class:!0});var m=D(u);v=b(m,"IMG",{style:!0,alt:!0,class:!0}),V=k(m),E(p.$$.fragment,m),q=k(m),E(d.$$.fragment,m),m.forEach(f),n.forEach(f),this.h()},h(){T($,"transform","translate(0,"+-o[0]*.2+"px)"),g($,"alt","LauncherX Window Screenshot"),g($,"class","svelte-tx0l95"),g(i,"class","bg-image-div svelte-tx0l95"),T(v,"transform","translate(0,"+-o[0]*.1+"px)"),g(v,"alt","LauncherX Logo"),g(v,"class","svelte-tx0l95"),g(u,"class","logo-components svelte-tx0l95"),g(l,"class","parallax-container svelte-tx0l95")},m(a,n){L(a,l,n),I(c,l,null),_(l,s),_(l,i),_(i,$),_(l,O),_(l,u),_(u,v),_(u,V),I(p,u,null),_(u,q),I(d,u,null),h=!0,G||(C=U(window,"scroll",()=>{e=!0,clearTimeout(r),r=setTimeout(t,100),o[1]()}),G=!0)},p(a,[n]){n&1&&!e&&(e=!0,clearTimeout(r),scrollTo(window.pageXOffset,a[0]),r=setTimeout(t,100)),(!h||n&1)&&T($,"transform","translate(0,"+-a[0]*.2+"px)"),(!h||n&1)&&T(v,"transform","translate(0,"+-a[0]*.1+"px)");const w={};n&1&&(w.style="transform: translate(0,"+-a[0]*.1+"px)"),n&4&&(w.$$scope={dirty:n,ctx:a}),p.$set(w);const m={};n&1&&(m.style="transform: translate(0,"+-a[0]*.1+"px) scale(calc(16/14))"),n&4&&(m.$$scope={dirty:n,ctx:a}),d.$set(m)},i(a){h||(B(c.$$.fragment,a),B(p.$$.fragment,a),B(d.$$.fragment,a),h=!0)},o(a){S(c.$$.fragment,a),S(p.$$.fragment,a),S(d.$$.fragment,a),h=!1},d(a){a&&f(l),M(c),M(p),M(d),G=!1,C()}}}function ee(o,e,t){let r;function l(){t(0,r=window.pageYOffset)}return[r,l]}class te extends H{constructor(e){super(),Y(this,e,ee,Z,z,{})}}function se(o){let e,t,r,l,c;return t=new te({}),{c(){e=y(),X(t.$$.fragment),r=y(),l=x("div"),this.h()},l(s){W('[data-svelte="svelte-1ou1z5a"]',document.head).forEach(f),e=k(s),E(t.$$.fragment,s),r=k(s),l=b(s,"DIV",{class:!0});var $=D(l);$.forEach(f),this.h()},h(){document.title="LauncherX - ClickPhase",g(l,"class","content svelte-vp6s3y")},m(s,i){L(s,e,i),I(t,s,i),L(s,r,i),L(s,l,i),c=!0},p:j,i(s){c||(B(t.$$.fragment,s),c=!0)},o(s){S(t.$$.fragment,s),c=!1},d(s){s&&f(e),M(t,s),s&&f(r),s&&f(l)}}}class oe extends H{constructor(e){super(),Y(this,e,null,se,z,{})}}export{oe as default};