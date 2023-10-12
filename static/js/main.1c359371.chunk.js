(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{35:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(24),a=n(8),r=(n(33),n(34),n(2)),s=(n(35),n(10)),i=n.n(s),o=n(3),j=function(){return Object(o.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"navbar-brand",children:[Object(o.jsx)(a.c,{className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},to:"/",children:"Home"}),Object(o.jsx)(a.c,{className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},to:"/people",children:"People"})]})})})},l=function(){return Object(o.jsx)("h1",{className:"title",children:"Home Page"})},d=n(4),b=n(6),h=n(5),u=n(0);function x(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}n(37);var m=function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})},O=function(e){var t=e.text,n=e.redColorCondition,c=e.to;return Object(o.jsx)("td",{children:Object(o.jsx)(a.b,{className:i()("",{"has-text-danger":n}),to:c,children:t||"-"})})},p=function(e){var t=e.people,n=Object(r.m)().hash.split("/").pop();return Object(o.jsx)(o.Fragment,{children:t.map((function(e){var c,a;return Object(o.jsxs)("tr",{className:i()("",{"has-background-warning":n===e.slug}),"data-cy":"person",children:[Object(o.jsx)(O,{text:e.name,redColorCondition:"f"===e.sex,to:"#/".concat(e.slug)}),Object(o.jsx)("td",{children:e.sex}),Object(o.jsx)("td",{children:e.born}),Object(o.jsx)("td",{children:e.died}),t.some((function(t){return t.name===e.motherName}))?Object(o.jsx)(O,{text:e.motherName,redColorCondition:t.some((function(t){return t.name===e.motherName})),to:"#/".concat(null===(c=t.find((function(t){return t.name===e.motherName})))||void 0===c?void 0:c.slug)}):Object(o.jsx)("td",{children:e.motherName}),t.some((function(t){return t.name===e.fatherName}))?Object(o.jsx)(O,{text:e.fatherName,redColorCondition:!1,to:"#/".concat(null===(a=t.find((function(t){return t.name===e.fatherName})))||void 0===a?void 0:a.slug)}):Object(o.jsx)("td",{children:e.fatherName})]},e.slug)}))})},f=function(){var e=Object(u.useState)([]),t=Object(h.a)(e,2),n=t[0],c=t[1],a=Object(u.useState)(!0),r=Object(h.a)(a,2),s=r[0],i=r[1],j=Object(u.useState)(!1),l=Object(h.a)(j,2),O=l[0],f=l[1],v=function(){var e=Object(b.a)(Object(d.a)().mark((function e(){var t;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x();case 3:t=e.sent,c(t),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),f(!0);case 11:return e.prev=11,i(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,7,11,14]])})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){v()}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"title",children:"People Page"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsxs)("div",{className:"box table-container",children:[s&&Object(o.jsx)(m,{}),O&&Object(o.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),0===n.length&&!s&&Object(o.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!s&&n.length>0&&Object(o.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"Sex"}),Object(o.jsx)("th",{children:"Born"}),Object(o.jsx)("th",{children:"Died"}),Object(o.jsx)("th",{children:"Mother"}),Object(o.jsx)("th",{children:"Father"})]})}),Object(o.jsx)("tbody",{children:Object(o.jsx)(p,{people:n})})]})]})})]})},v=function(){return Object(o.jsxs)("div",{"data-cy":"app",children:[Object(o.jsx)(j,{}),Object(o.jsx)("main",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)(r.d,{children:[Object(o.jsx)(r.b,{path:"/",element:Object(o.jsx)(l,{})}),Object(o.jsx)(r.b,{path:"/people",element:Object(o.jsx)(f,{})}),Object(o.jsx)(r.b,{path:"/home",element:Object(o.jsx)(r.a,{to:"/",replace:!0})}),Object(o.jsx)(r.b,{path:"*",element:Object(o.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})};Object(c.createRoot)(document.getElementById("root")).render(Object(o.jsx)(a.a,{children:Object(o.jsx)(v,{})}))}},[[38,1,2]]]);
//# sourceMappingURL=main.1c359371.chunk.js.map