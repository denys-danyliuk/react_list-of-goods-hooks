(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c,s=n(7),r=n.n(s),a=n(5),o=n(8),i=n(4),u=n.n(i),l=n(1),b=(n(13),n(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPABET=1]="ALPABET",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var p=function(){var t=Object(l.useState)(!1),e=Object(a.a)(t,2),n=e[0],s=e[1],r=Object(l.useState)(!1),i=Object(a.a)(r,2),p=i[0],m=i[1],h=Object(l.useState)(c.NONE),N=Object(a.a)(h,2),O=N[0],d=N[1],f=function(t,e,n){var s=Object(o.a)(t);return s.sort((function(t,n){switch(e){case c.ALPABET:return t.localeCompare(n);case c.LENGTH:return t.length-n.length;default:return 0}})),n&&s.reverse(),s}(j,O,p);return Object(b.jsxs)("div",{className:"App",children:[!n&&Object(b.jsx)("button",{type:"button",onClick:function(){s(!0)},className:"button is-primary",children:"Start"}),n&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)("button",{type:"button",onClick:function(){d(c.ALPABET)},className:u()("button is-primary",{active:O===c.ALPABET}),children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",onClick:function(){d(c.LENGTH)},className:u()("button is-primary",{active:O===c.LENGTH}),children:"Sort by length"}),Object(b.jsx)("button",{type:"button",onClick:function(){m((function(t){return!t}))},className:u()("button is-primary",{active:!0===p}),children:"Reverse"}),Object(b.jsx)("button",{type:"button",onClick:function(){d(c.NONE),m(!1)},className:"button is-primary is-light",children:"Reset"})]}),Object(b.jsx)("ul",{className:"Goods",children:f.map((function(t){return Object(b.jsx)("li",{className:"Goods__item",children:t},t)}))})]})]})};r.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f6281b9c.chunk.js.map