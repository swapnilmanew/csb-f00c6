(this["webpackJsonpreact-api"]=this["webpackJsonpreact-api"]||[]).push([[0],{14:function(e,t,c){"use strict";c.r(t);var r=c(1),s=c(4),n=c.n(s),i=c(3),a=c.n(i),j=c(5),d=c(6),o=(c(12),c.p+"static/media/img.4e95cb67.svg"),l=c(0),h=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],n=function(){var e=Object(j.a)(a.a.mark((function e(){var t,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19api.com/summary");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,s(c.Countries);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){n()}),[]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("h1",{className:"text-center mt-4 w-100 mb-2 font-weight-bold",children:"Covid - 19 Tracker"}),Object(l.jsxs)("p",{className:"text-center text-danger",children:["Note : Data might not be accurate. ",Object(l.jsx)("br",{}),Object(l.jsx)("p",{className:"text-dark mt-3",children:"App By - Shinichi Izumi"})]}),Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("img",{src:o,alt:"Covid - 19",className:"img-fluid"})}),Object(l.jsxs)("table",{className:"table table-striped text-center",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"col",children:"#"}),Object(l.jsx)("th",{scope:"col",children:"Country"}),Object(l.jsx)("th",{scope:"col",children:"New Confirmed"}),Object(l.jsx)("th",{scope:"col",children:"Total Confirmed"}),Object(l.jsx)("th",{scope:"col",children:"New Deaths"}),Object(l.jsx)("th",{scope:"col",children:"Total Deaths"}),Object(l.jsx)("th",{scope:"col",children:"New Recovered"}),Object(l.jsx)("th",{scope:"col",children:"Total Recovered"})]})}),Object(l.jsx)("tbody",{children:c.map((function(e,t){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"row",children:t+1}),Object(l.jsx)("td",{children:e.Country}),Object(l.jsx)("td",{children:e.NewConfirmed}),Object(l.jsx)("td",{children:e.TotalConfirmed}),Object(l.jsx)("td",{children:e.NewDeaths}),Object(l.jsx)("td",{children:e.TotalDeaths}),Object(l.jsx)("td",{children:e.NewRecovered}),Object(l.jsx)("td",{children:e.TotalRecovered})]})})}))})]})]})})},b=document.getElementById("root");n.a.render(Object(l.jsx)(r.StrictMode,{children:Object(l.jsx)(h,{})}),b)}},[[14,1,2]]]);
//# sourceMappingURL=main.89a83f97.chunk.js.map