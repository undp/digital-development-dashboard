(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[84],{2199:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sandbox",function(){return n(8720)}])},8560:function(e,r,n){"use strict";n.d(r,{P:function(){return i}});var t=n(5893),s=n(4729),a=n(7294),o=n(7036);function i(e){var r=e.value,n=e.disabled,i=e.onChange,l=e.trigger,c=e.options,u=e.itemRenderer,d=(0,a.useState)(!1),m=d[0],p=d[1],f=(0,a.useRef)(null);return(0,a.useEffect)((function(){var e=function(e){f.current&&!f.current.contains(e.target)&&p(!1)};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[f]),(0,t.jsxs)(s.R,{ref:f,disabled:n,value:r,onChange:i,as:"div",className:"relative w-full",onClick:function(){return p(!m)},children:[(0,t.jsxs)(s.R.Button,{className:"focus:ring disabled:cursor-not-allowed disabled:opacity-75 focus:ring-brand-blue relative w-full h-[53.3px] pl-4 text-left bg-white border-black font- border-2 ".concat(m?"border-b-0":""," cursor-pointer shadow-sm focus:outline-none sm:text-sm"),onClick:function(){return p(!m)},children:[l,(0,t.jsx)("span",{className:"absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none",children:(0,t.jsx)("img",{src:"".concat(o.O,"/chevron-down.svg"),alt:"Chevron Right",width:20,height:13,className:"transform transition-transform ".concat(m?"rotate-180":"rotate-0")})})]}),(0,t.jsx)(s.R.Options,{className:"absolute w-auto left-0 right-0 py-1 mt-0 overflow-auto text-base bg-white shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-20 border-black border-2 border-t-0",children:c.map((function(e){return(0,t.jsx)(s.R.Option,{className:function(e){var r=e.active;return"cursor-default select-none relative py-4 pr-3 ml-4 flex justify-between border-b border-b-[#d4d6d8] border-gray-300 ".concat(r?"text-black bg-[#fafafa]":"text-black")},value:e,onClick:function(){return p(!m)},children:function(r){var n=r.selected;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"block ".concat("font-normal"),children:u(e)}),(0,t.jsx)("span",{className:"flex items-center",children:(0,t.jsx)("span",{className:"h-4 w-4 border-2 rounded-sm flex items-center justify-center ".concat(n?"border-[#d12800]":"border-[#d12800] bg-white"),children:n&&(0,t.jsx)("svg",{className:"w-3 h-3 text-[#d12800]",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4",d:"M5 13l4 4L19 7"})})})})]})}},e)}))})]})}},8035:function(e,r,n){"use strict";n.d(r,{$:function(){return s}});var t=n(5893);function s(){return(0,t.jsxs)("svg",{className:"animate-spin text-current",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,t.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,t.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}},7036:function(e,r,n){"use strict";n.d(r,{O:function(){return t}});var t=n(3454).env.NEXT_PUBLIC_BASE_PATH||"/undp-digital-development-compass"},8720:function(e,r,n){"use strict";n.r(r),n.d(r,{__N_SSG:function(){return k},default:function(){return S}});var t=n(5893),s=n(1270),a=n(7568),o=n(6042),i=n(4051),l=n.n(i),c=n(4412),u=n(7480),d=n(1190),m=n(6580),p=n(5830),f=n(1664),x=n.n(f),h=n(7294),v=n(8100),g=n(8560),b=n(8035);function y(e,r,n){return j.apply(this,arguments)}function j(){return(j=(0,a.Z)(l().mark((function e(r,n,t){var s,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/api/compare",s=new URLSearchParams({key:t,country:n}).toString(),e.next=5,fetch("".concat("/api/compare","?").concat(s));case 5:return a=e.sent,e.next=8,a.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){var r=e.country,n=e.pillars,s=e.relatedCountries,a=void 0===s?[]:s,i=(0,h.useState)("Sub-region Name"),l=i[0],f=i[1],j=(0,h.useState)("Digital Public Infrastructure"),w=j[0],C=j[1],k=(0,h.useState)(),S=k[0],O=k[1],_=r["ISO-alpha3 Code"],L=Object.keys(n),E=(0,o.Z)({"Region Name":"Regional Neighbors","Sub-region Name":"Subregional Neighbors",sids:"Small Island Developing States (SIDS)",lldc:"Land Locked Developing Countries (LLDC)",ldc:"Least Developed Countries (LDC)","World Bank Income Level":"Same Income Group (".concat(r["World Bank Income Level"],")")},a?{related:"Related Countries"}:{}),I=(0,h.useMemo)((function(){var e=u.y.pillarColorMap[w];return(0,c.BYU)().domain([0,6]).range([e.triple[1],e.triple[2]]).interpolate(c.YrV)}),[w]),P=(0,v.ZP)(["compare",_,l],y),R=P.data,A=(P.error,"related"===l?a.slice(0,15):R);if(!A)return(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("div",{className:"w-4 h-4 mr-2 text-gray-500",children:(0,t.jsx)(b.$,{})}),(0,t.jsx)("p",{className:"text-gray-600 text-sm",children:"Loading comparison data..."})]});var B=A.sort((function(e,r){return"Overall"===w?r.scores[w].score-e.scores[w].score:"Overall"!==w&&Boolean(S)?r.scores[w][S].score-e.scores[w][S].score:r.scores[w].score-e.scores[w].score}));return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"flex items-center gap-4 mb-4",children:[(0,t.jsx)(g.P,{value:l,onChange:f,label:"Compared to",trigger:E[l],itemRenderer:function(e){return(0,t.jsx)("span",{children:E[e]})},options:Object.keys(E)}),(0,t.jsx)(g.P,{label:"Pillar",value:w,trigger:(0,t.jsx)("span",{className:"text-xs text-white font-medium uppercase py-[0.3em] px-[1em] rounded-full",style:{background:u.y.pillarColorMap[w].base},children:w}),itemRenderer:function(e){var r=e,n=u.y.pillarColorMap[r].base;return(0,t.jsx)("span",{className:"text-xs text-white font-medium uppercase py-[0.3em] px-[1em] rounded-full",style:{background:n},children:r})},onChange:function(e){O(void 0),C(e)},options:L.filter((function(e){return"Overall"!==e}))}),(0,t.jsx)(g.P,{disabled:!w||"Overall"===w,trigger:S||(0,t.jsx)("span",{className:"text-gray-600",children:"Select subpillar"}),label:"Subpillar",value:S,itemRenderer:function(e){return(0,t.jsx)("span",{children:e})},onChange:function(e){var r=n[w];O(r.includes(e)?e:"Overall")},options:n[w]||[]})]}),(0,t.jsxs)(d.M,{children:[0===B.length&&(0,t.jsx)("p",{className:"text-gray-600 text-sm my-2",children:"No data matching these filters."}),B.map((function(e,r){var n,s,a=S?null===(n=e.scores[w][S])||void 0===n?void 0:n.score:null===(s=e.scores[w])||void 0===s?void 0:s.score,o=e["ISO-alpha3 Code"]===_;return a?(0,t.jsxs)(m.E.div,{className:"w-full flex items-center px-3 border rounded ".concat(o?" border-brand-blue bg-brand-blue/10 shadow-md":"border-transparent hover:bg-gray-100"),initial:{opacity:0,x:-10},animate:{opacity:1,x:0,transition:{type:"spring",stiffness:200}},exit:{opacity:0,x:10},children:[(0,t.jsx)(x(),{href:"/country/".concat(e["ISO-alpha3 Code"]),children:(0,t.jsxs)("a",{className:"group flex-none flex items-center w-52 py-2",title:e.name,children:[(0,t.jsx)("span",{className:"fp fp-sm ".concat(e["ISO-alpha2 Code"].toLowerCase())}),(0,t.jsxs)("div",{className:"text-gray-500 font-mono text-sm mr-2 w-8 text-right",children:["#",r+1]}),(0,t.jsx)("div",{className:"flex-1 truncate group-hover:underline",children:e["Country or Area"]})]})}),a?(0,t.jsx)("div",{className:"relative flex-1 border-b border-gray-200 h-1/2",children:(0,t.jsx)(m.E.div,{animate:{left:"".concat(N(a),"%"),background:o?u.y.pillarColorMap[w].base:I(a)},transition:{type:"spring",stiffness:300},className:"w-6 h-6 rounded-full top-0 transform -translate-y-1/2 absolute flex items-center justify-center ".concat(o?"ring-2 ring-opacity-10 ring-white":""),children:(0,t.jsx)("div",{className:"font-mono absolute text-xs text-gray-600 left-full ml-2",children:(0,p.QV)(a,2)})})}):(0,t.jsx)("div",{className:"flex-1 font-mono text-xs italic text-gray-400",children:"No data"})]},e["ISO-alpha3 Code"]):null}))]})]})}var N=(0,c.BYU)().domain([0,6]).range([0,100]),C=n(5870),k=!0;function S(e){var r=e.country,n=e.definitions;return(0,t.jsx)("div",{className:"p-8 space-y-8",children:(0,t.jsx)("div",{className:"gap-8 w-full flex-1",children:r&&(0,t.jsxs)("div",{className:"space-y-8 flex flex-col",children:[(0,t.jsx)(w,{pillars:u.y.pillars,country:r}),(0,t.jsx)(C.q,{name:r["Country or Area"],scores:r.scores,definitions:n.Economy,pillar:"Overall"}),(0,t.jsx)(C.q,{name:r["Country or Area"],scores:r.scores,definitions:n.Economy,pillar:"Economy"}),(0,t.jsx)(C.q,{name:r["Country or Area"],scores:r.scores,definitions:n.Regulation,pillar:"Regulation"}),(0,t.jsx)(C.q,{name:r["Country or Area"],scores:r.scores,definitions:n["Digital Public Infrastructure"],pillar:"Digital Public Infrastructure"}),(0,t.jsx)(C.q,{name:r["Country or Area"],scores:r.scores,definitions:n.Connectivity,pillar:"Connectivity"}),(0,t.jsx)(C.q,{name:r["Country or Area"],scores:r.scores,definitions:n.People,pillar:"People"}),(0,t.jsx)(C.q,{name:r["Country or Area"],scores:r.scores,definitions:n.Government,pillar:"Government"}),(0,t.jsx)("div",{className:"w-1/2 lg:w-1/2",children:(0,t.jsx)(s.k,{country:{name:r["Country or Area"],alpha3:r["ISO-alpha3 Code"],alpha2:r["ISO-alpha2 Code"],scores:r.scores},definitions:n,pillar:"Economy"})})]})})})}}},function(e){e.O(0,[754,852,812,953,975,535,555,270,774,888,179],(function(){return r=2199,e(e.s=r);var r}));var r=e.O();_N_E=r}]);