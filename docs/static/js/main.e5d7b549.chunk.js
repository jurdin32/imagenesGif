(this["webpackJsonpgit-expert-app"]=this["webpackJsonpgit-expert-app"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),i=n(2),s=n(10),u=n(8),o=n.n(u),j=n(0),d=function(e){var t=e.setcategorias,n=Object(a.useState)(),c=Object(i.a)(n,2),r=c[0],u=c[1];return Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t((function(e){return[r].concat(Object(s.a)(e))})),u(""))},children:Object(j.jsx)("input",{type:"text",value:r,onChange:function(e){u(e.target.value)}})})};d.protoType={setcategorias:o.a.func.isRequired};var l=d,p=n(11),b=n(6),h=n.n(b),f=n(9),m=function(){var e=Object(f.a)(h.a.mark((function e(t){var n,a,c,r,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"'&api_key=sG01SRQntkhcN3h2JZbpoQyKGeYSjhmB"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){e.id;var t=e.title,n=e.url;return Object(j.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(j.jsx)("img",{src:n,alt:t}),Object(j.jsx)("p",{children:t})]})},x=function(e){var t=e.categoria,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){m(e).then((function(e){r({data:e,loading:!1})}))}),[e]),c}(t),c=n.data,r=n.loading;return console.log(c,r),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),Object(j.jsxs)("div",{className:"card-grid",children:[r?Object(j.jsx)("p",{className:"animate__animated animate__flash",children:"Cargando.."}):null,Object(j.jsx)("ol",{children:c.map((function(e){return Object(j.jsx)(O,Object(p.a)({},e),e.id)}))})]})]})},g=function(){var e=Object(a.useState)(["One Punch"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"GitExpertApp"}),Object(j.jsx)(l,{setcategorias:c}),Object(j.jsx)("hr",{}),Object(j.jsx)("ol",{children:n.map((function(e){return Object(j.jsx)(x,{categoria:e},e)}))})]})};n(20);r.a.render(Object(j.jsx)(g,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.e5d7b549.chunk.js.map