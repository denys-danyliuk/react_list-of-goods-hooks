(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c,s=n(6),r=n.n(s),i=n(4),o=n(7),a=n(1),l=(n(12),n(0)),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPABET=1]="ALPABET",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var b=function(){var t=Object(a.useState)(!1),e=Object(i.a)(t,2),n=e[0],s=e[1],r=Object(a.useState)(!1),b=Object(i.a)(r,2),j=b[0],h=b[1],p=Object(a.useState)(c.NONE),m=Object(i.a)(p,2),O=m[0],d=m[1],N=function(t,e,n){var s=Object(o.a)(t);return s.sort((function(t,n){switch(e){case c.ALPABET:return t.localeCompare(n);case c.LENGTH:return t.length-n.length;default:return 0}})),n&&s.reverse(),s}(u,O,j);return Object(l.jsxs)("div",{className:"App",children:[!n&&Object(l.jsx)("button",{type:"button",onClick:function(){s(!0)},className:"button is-primary",children:"Start"}),n&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)("button",{type:"button",onClick:function(){d(c.ALPABET)},className:"button is-primary is-light",children:"Sort alphabetically"}),Object(l.jsx)("button",{type:"button",onClick:function(){d(c.LENGTH)},className:"button is-primary is-light",children:"Sort by length"}),Object(l.jsx)("button",{type:"button",onClick:function(){h((function(t){return!t}))},className:"button is-primary is-light",children:"Reverse"}),Object(l.jsx)("button",{type:"button",onClick:function(){d(c.NONE),h(!1)},className:"button is-primary is-light",children:"Reset"})]}),Object(l.jsx)("ul",{className:"Goods",children:N.map((function(t){return Object(l.jsx)("li",{className:"Goods__item",children:t},t)}))})]})]})};r.a.render(Object(l.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ecedb91a.chunk.js.map