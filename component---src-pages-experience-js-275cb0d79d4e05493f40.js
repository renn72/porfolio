(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{I4Ts:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n("qhky"),o=n("1dQK"),a=n("wx14"),c=n("kOA+"),u=n.n(c),s=n("9eSz"),f=n.n(s),l=n("nQg3"),m=n("lVZA"),d=n("cMmx"),b=n("qKvR"),p=n("N0KO");var h=Object(p.a)([{type:"min",size:"52.5"},{type:"max",size:"36"}]),g=h[0],w=h[1],j={experience:{name:"uubgek",styles:"color:#fff;h1,h2,h3{color:#fff;}"},header:Object(b.b)("position:relative;margin:0 auto;max-width:1200px;padding:0.3rem 6em 0;h1{font-size:3rem;line-height:1.25;margin:0;",w,"{font-size:2.2rem;line-height:0.8;}}p{display:block;max-width:calc(100vw - 5em);margin:1em 0 0 5px;font-weight:500;font-size:1.2rem;}"),grid:Object(b.b)('max-width:1200px;width:100%;margin:0 auto;display:flex;flex-flow:column wrap;align-content:space-between;min-height:100vh;&::before,&::after{content:"";flex-basis:100%;width:0;order:2;}',w,"{&::before,&::after{flex-basis:auto;}}"),job:Object(b.b)("width:50%;min-width:280px;margin:0 0 2em;padding:1em 4em 0;position:relative;&:nth-of-type(2n + 1){order:1;}&:nth-of-type(2n){order:2;}&::before{font-family:sans-serif;font-size:10em;position:absolute;top:-1em;left:-0.15em;opacity:0.3;content:attr(data-year);}",g,"{width:33.33%;margin:0 0 9em;&:first-of-type{margin-top:5em;}&:nth-of-type(2){margin-top:14em;}&:nth-of-type(3n + 1){order:1;}&:nth-of-type(3n + 2){order:2;}&:nth-of-type(3n){order:3;}}",w,"{width:100%;margin:2em 0;padding:1em 2em 0;&:nth-of-type(3n + 1){order:0;}&:nth-of-type(3n + 2){order:0;}&:nth-of-type(3n){order:0;}}"),link:{name:"jcj1pv",styles:"display:block;color:#474283;&:hover{color:#474283;outline:none;}"},img:{name:"13qxx8m",styles:"max-width:100%;box-shadow:0 0 10px 1px rgba(0,0,0,0.4);transform:translate3d(0,0,0);border-radius:50%;position:relative;z-index:1;"},year:{name:"1jojip8",styles:"font-size:0.85em;position:absolute;z-index:1;right:0;margin:-1.4em 3em 0 0;padding:0.3em 0.5em;color:#fff;border:2px solid #fff;"},position:{name:"1owg1i2",styles:"font-size:1em;font-weight:900;margin:0 0 0 1em;white-space:nowrap;"},company:{name:"gr1u4x",styles:"font-size:0.9em;font-weight:600;margin:1em 0 0.5em;"}};function y(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var O={min52:"(min-width: 52.5em)",max36:"(max-width: 36em)"},x=function(e){var t,n=e.jobs,i=e.title,o=e.description,c=e.showLoadingAnimation,s=void 0===c||c,p=(e.transitionStatus,Object(r.useState)(!1)),h=p[0],g=p[1],w=Object(r.useRef)(null),v=Object(l.a)(O),x=Object(r.useRef)(n.map(r.createRef));if(h&&!d.a){for(var k,z=0,S=0,R=9999,E=y(x.current);!(k=E()).done;){var A=k.value,T=window.getComputedStyle(A.current),M=parseFloat(T.marginTop,10);M&&(M>S&&(S=M),M<R&&(R=M)),z+=A.current?A.current.offsetHeight+parseFloat(T.marginBottom,10):parseFloat(T.marginBottom,10)}R=9999===R?1:R,z&&(v.max36||v.min52?v.min52?(z+=n.length*R,z/=3,z+=S):z+=n.length*R+S:(z+=n.length*R,z/=2),w.current.style.height=Math.ceil(z)+"px")}return Object(b.c)("main",{css:j.experience},Object(b.c)("header",{css:j.header},Object(b.c)("h1",null,i),Object(b.c)("p",null,o)),Object(b.c)(m.a,{wait:1e3,cb:function(){g(!0)},showLoadingAnimation:s},Object(b.c)("div",{css:j.grid,"data-test":"jobs",ref:w},n.map((function(e,n){var r=e.node,i=r.id,o=r.fields.slug,c=r.frontmatter,s=c.company,l=c.logo,m=c.jobTitle,d=c.dateFrom,p=c.dateTo,h=d===p?d:d+" - "+p,g=!1;return p.slice(-1)%3==0&&(t!==p&&(g=!0),t=p),Object(b.c)("div",Object(a.a)({key:i,css:j.job,ref:x.current[n]},g&&{"data-year":t}),Object(b.c)(u.a,{cover:!0,to:o,css:j.link,direction:"left",bg:"#282b2f"},Object(b.c)(f.a,{css:j.img,fluid:l.childImageSharp.fluid,alt:s}),Object(b.c)("span",{css:j.year},h),Object(b.c)("h2",{css:j.company},s.length>=25?s.substring(0,25)+"...":s),Object(b.c)("h3",{css:j.position},m)))})))))};t.default=function(e){var t=e.data,n=e.transitionStatus;return Object(b.c)(o.a,{bgClassName:"experience"},Object(b.c)(i.a,null,Object(b.c)("title",null,"Work Experience")),Object(b.c)(x,{jobs:t.allMarkdownRemark.edges,transitionStatus:n,title:"Experience",description:"Here are some of my projects."}))}},cMmx:function(e,t,n){"use strict";var r="undefined"==typeof window;t.a=r},nQg3:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return u}));n("E9XD");var r=n("q1tI");function i(e,t,n){void 0===n&&(n={});var i=n.maxWait,o=Object(r.useRef)(null),a=Object(r.useRef)([]),c=n.leading,u=void 0===n.trailing||n.trailing,s=Object(r.useRef)(!1),f=Object(r.useRef)(null),l=Object(r.useRef)(!1),m=Object(r.useRef)(e);m.current=e;var d=Object(r.useCallback)((function(){clearTimeout(f.current),clearTimeout(o.current),o.current=null,a.current=[],f.current=null,s.current=!1}),[]);Object(r.useEffect)((function(){return l.current=!1,function(){l.current=!0}}),[]);var b=Object(r.useCallback)((function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];a.current=e,clearTimeout(f.current),s.current&&(s.current=!1),f.current||!c||s.current||(m.current.apply(m,e),s.current=!0),f.current=setTimeout((function(){var t=!0;c&&s.current&&(t=!1),d(),!l.current&&u&&t&&m.current.apply(m,e)}),t),i&&!o.current&&u&&(o.current=setTimeout((function(){var e=a.current;d(),l.current||m.current.apply(null,e)}),i))}),[i,t,d,c,u]),p=Object(r.useCallback)((function(){f.current&&(m.current.apply(null,a.current),d())}),[d]);return[b,d,p]}var o=n("cMmx");var a=function(e){var t=Object(r.useState)(null),n=t[0],a=t[1],c=Object(r.useRef)(Object.keys(e)),u=Object(r.useCallback)((function(){var t=c.current.reduce((function(t,n){return t[n]=!!window.matchMedia(e[n]).matches,t}),{});a(t)}),[e]),s=i((function(){u()}),500)[0];return Object(r.useEffect)((function(){return!o.a&&window.matchMedia&&(window.addEventListener("resize",s),u()),function(){!o.a&&window.matchMedia&&window.removeEventListener("resize",s)}}),[u,e,s]),n};var c=function(e,t){void 0===e&&(e=!1),void 0===t&&(t=500);var n=Object(r.useState)(null),a=n[0],c=n[1],u=Object(r.useCallback)((function(){c({width:!1===e?window.innerWidth:e.current.offsetWidth,height:!1===e?window.innerHeight:e.current.offsetHeight})}),[e]),s=i((function(){u()}),t)[0];return Object(r.useEffect)((function(){return o.a||(window.addEventListener("resize",s),u()),function(){!o.a&&window.removeEventListener("resize",s)}}),[s,e,u]),a};var u=function(e){var t=Object(r.useRef)();return Object(r.useEffect)((function(){t.current=e})),t.current}}}]);
//# sourceMappingURL=component---src-pages-experience-js-275cb0d79d4e05493f40.js.map