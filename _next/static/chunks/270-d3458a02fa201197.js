"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[270],{1270:function(e,s,t){t.d(s,{k:function(){return p}});var a=t(5893),n=t(1664),l=t.n(n),r=t(7294),i=t(7480),o=t(6042),c=t(9396),d=t(9534),u=t(6975),m=function(e){var s=e.children,t=e.side,n=void 0===t?"top":t,l=e.text,r=e.className,i=void 0===r?"":r,m=(0,d.Z)(e,["children","side","text","className"]);return(0,a.jsxs)(u.fC,{delayDuration:0,children:[(0,a.jsx)(u.xz,{asChild:!0,children:s}),(0,a.jsxs)(u.VY,(0,c.Z)((0,o.Z)({side:n,sideOffset:6,className:"relative bg-black text-white p-3 py-1 rounded-lg shadow-lg text-sm ".concat(i)},m),{children:[l,(0,a.jsx)(u.Eh,{className:"border-black"})]}))]})};function x(e){var s=e.scores,t=e.onPillarClick,n=void 0===t?function(){}:t,l=e.activePillar,r=i.y.pillarNames;return(0,a.jsx)("div",{className:"flex h-6 border-t px-1",children:r.map((function(e){var t=s[e],r=null===t||void 0===t?void 0:t.stage,o=t?"".concat(e,": ").concat(r?null===r||void 0===r?void 0:r.name:"No Data"):"No data",c=i.y.pillarColorMap[e].base,d=20*((null===r||void 0===r?void 0:r.number)||0);return(0,a.jsx)(m,{text:o,children:(0,a.jsx)("button",{onClick:function(s){s.preventDefault(),n(e)},className:"relative flex-1 h-full appearance-none focus:outline-none transition-opacity border border-b-0 ".concat(e===l?"bg-gray-100 border-gray-100":"border-white"),children:(0,a.jsx)("div",{className:"absolute left-0 bottom-0 right-0",style:{height:"".concat(d,"%"),background:c}})})},e)}))})}var h=t(5870);function p(e){var s,t=e.country,n=e.pillar,i=e.definitions,o=e.onPillarChange,c=e.isActive,d=e.showFooterLink,u=void 0!==d&&d,m=(0,r.useState)(n),p=m[0],v=m[1],f=o?n:p;return(0,a.jsxs)("div",{id:"country-".concat(t.alpha3),className:"".concat(c?"ring-4 ring-brand-blue/20 border-brand-blue shadow-lg shadow-brand-blue/20":"border-gray-200 shadow-lg"," pb-0 w-full flex-1 h-full border rounded-lg flex flex-col items-center bg-white overflow-hidden"),children:[(0,a.jsxs)("div",{className:"p-4 flex flex-col items-center",children:[(0,a.jsx)(l(),{href:"/country/".concat(t.alpha3),children:(0,a.jsxs)("div",{className:"flex flex-col items-center group cursor-pointer",children:[(0,a.jsx)("div",{className:"flex-shrink-0",children:(0,a.jsx)("span",{className:"fp ".concat(null===(s=t.alpha2)||void 0===s?void 0:s.toLowerCase())})}),(0,a.jsx)("div",{className:"flex-1 ml-2",children:(0,a.jsx)("h3",{className:"text-xl",children:(0,a.jsx)("div",{className:"group-hover:underline",children:t.name})})})]})}),(0,a.jsx)("div",{className:"py-4 flex items-center justify-center text-center w-full",children:(0,a.jsx)(h.q,{name:t.name,definitions:i[f],pillar:f,scores:t.scores})})]}),u&&(0,a.jsx)("div",{className:"mb-4",children:(0,a.jsx)(l(),{href:"/country/".concat(t.alpha3),children:(0,a.jsx)("a",{className:"bg-[#006EB5] hover:button-bg-color text-base uppercase font-bold px-6 py-4 text-white flex-shrink-0 flex items-center",children:"view more"})})}),(0,a.jsx)("div",{className:"w-full flex-1 flex flex-col justify-end",children:(0,a.jsx)(x,{activePillar:f,onPillarClick:function(e){o?o(e):v(e)},scores:t.scores})})]})}},5870:function(e,s,t){t.d(s,{q:function(){return x}});var a=t(6042),n=t(5893),l=t(8032),r=t(4412),i=t(7480),o=t(5830),c=t(7294),d=function(e){return e*Math.PI/180},u=i.y.pillarNames.length;function m(e){var s,t=e.scores,a=e.pillar,u=e.definitions,m=e.name,x=(0,c.useState)(null),h=x[0],p=x[1],v=t[a].stage,f=i.y.pillarColorMap[a].base,g=i.y.pillars[a],j=g.length||1,N=250,y=62.5/1.5,b=(0,c.useMemo)((function(){return Array.from({length:j},(function(e,s){var n,l="";"Overall"===a?(l="Overall",n=t[a].stage):(l=g[s],n=t[a][l].stage);var i=n?n.number:0,o=220/j,c=o*s-110,u=c+o,m=d(c+4),x=d(u-4),h=125-y,p=(0,r.Nb1)().innerRadius(y).outerRadius(125).startAngle(m).endAngle(x)([{}]),v={stage:{score:i,name:l,description:null===n||void 0===n?void 0:n.description},path:(0,r.Nb1)().innerRadius(y).outerRadius(y+h/5*i).startAngle(m).endAngle(x)([{}])};return{lines:Array.from({length:5}).map((function(e,s){return(0,r.Nb1)().innerRadius(y+h/5*s).outerRadius(y+h/5*s).startAngle(m).endAngle(x)([{}])})),scoreArc:v,outerArc:{start:m,end:x,path:p}}}))}),[a]),w=h?o.b1[h.score-1]:"",A=(null===h||void 0===h?void 0:h.name)?null===(s=(u||[]).find((function(e){return e["Sub-Pillar"]===h.name})))||void 0===s?void 0:s.Definition:null;return(0,n.jsxs)("div",{style:{width:N},className:"",children:[(0,n.jsx)("svg",{width:N,height:125,viewBox:"0 0 ".concat(N," ").concat(N/6),className:"overflow-visible p-2",onMouseLeave:function(){p(null)},children:(0,n.jsx)("g",{transform:"translate(".concat(125,", ").concat(N/3,")"),children:b.map((function(e,s){var t=1;return h&&h.name!==e.scoreArc.stage.name&&(t=.5),(0,n.jsxs)("g",{className:"transition-opacity",style:{opacity:t},children:[(0,n.jsx)("path",{onMouseEnter:function(){var s;v&&(s=e.scoreArc.stage,p(s))},id:"".concat(e.scoreArc.stage.name,"-path"),className:"opacity-20 transition-opacity ".concat(v?"cursor-auto":"cursor-not-allowed"),style:{fill:f},d:e.outerArc.path}),(0,n.jsx)("path",{className:"pointer-events-none",fill:f,d:e.scoreArc.path}),(0,n.jsx)("g",{className:"pointer-events-none",children:e.lines.map((function(e,s){return(0,n.jsx)("path",{d:e,stroke:"white",strokeWidth:2},s)}))})]},"arc-".concat(s))}))})}),(0,n.jsxs)("div",{className:"text-center relative",children:[(0,n.jsx)("div",{style:{color:f},className:"text-3xl flex items-center justify-center pointer-events-none absolute -top-8 left-0 right-0","aria-label":"".concat(a," icon"),children:l.Z[a.toLowerCase()]}),(0,n.jsxs)("div",{className:"mt-3",children:[(0,n.jsx)("div",{className:"pt-3",children:(0,n.jsx)("span",{style:{background:f},className:"text-xs text-white font-medium uppercase tracking-widest py-[2px] px-[12px] rounded-full",children:a})}),v?(0,n.jsxs)(n.Fragment,{children:[null==h&&(0,n.jsxs)("div",{children:[(0,n.jsxs)("p",{className:"text-sm font-medium uppercase tracking-widest mt-4",style:{color:f},children:["Stage ",v.number,": ",v.name]}),(0,n.jsx)("p",{className:"font-medium text-lg",children:"Overall"}),(0,n.jsx)("p",{className:"text-sm text-gray-600",children:v.description})]}),Boolean(h)&&0===(null===h||void 0===h?void 0:h.score)&&(0,n.jsxs)("div",{className:"mt-4",children:[(0,n.jsx)("p",{className:"text-sm font-medium uppercase tracking-widest text-gray-400",children:"No Stage Data"}),(0,n.jsx)("p",{className:"font-medium text-lg",children:null===h||void 0===h?void 0:h.name}),(0,n.jsx)("p",{className:"text-sm text-gray-600",children:A})]}),Boolean(h)&&(null===h||void 0===h?void 0:h.score)>0&&(0,n.jsxs)("div",{className:"mt-4",children:[(0,n.jsxs)("p",{className:"text-sm font-medium uppercase tracking-widest",style:{color:f},children:["Stage ",null===h||void 0===h?void 0:h.score,": ",w]}),(0,n.jsx)("p",{className:"font-medium text-lg",children:null===h||void 0===h?void 0:h.name}),(0,n.jsx)("p",{className:"text-sm text-gray-600",children:null===h||void 0===h?void 0:h.description})]})]}):(0,n.jsx)("div",{className:"mt-4",children:(0,n.jsxs)("p",{className:"text-sm text-gray-600",children:["No ",a," data for ",m]})})]})]})]})}function x(e){return"Overall"===e.pillar?(0,n.jsx)(h,(0,a.Z)({},e)):(0,n.jsx)(m,(0,a.Z)({},e))}function h(e){var s,t=e.scores,a=e.name,o=(0,c.useState)("Overall"),m=o[0],x=o[1],h=null===(s=t[m])||void 0===s?void 0:s.stage,p=250,v=62.5/1.5,f=(0,c.useMemo)((function(){return Array.from({length:u},(function(e,s){var a,n=i.y.pillarNames[s],l=null===(a=t[n])||void 0===a?void 0:a.stage,o=220/u,c=o*s-110,m=c+o,x=d(c+4),h=d(m-4),p=125-v,f=(0,r.Nb1)().innerRadius(v).outerRadius(125).startAngle(x).endAngle(h)([{}]);return{scoreArc:{stage:l,path:(0,r.Nb1)().innerRadius(v).outerRadius(v+p/5*(null===l||void 0===l?void 0:l.number)).startAngle(x).endAngle(h)([{}])},outlineArc:{start:x,end:h,path:f},lines:Array.from({length:5}).map((function(e,s){return(0,r.Nb1)().innerRadius(v+p/5*s).outerRadius(v+p/5*s).startAngle(x).endAngle(h)([{}])}))}}))}),[]);return(0,n.jsxs)("div",{style:{width:p},className:"min-h-[290px]",children:[(0,n.jsx)("svg",{width:p,height:125,viewBox:"0 0 ".concat(p," ").concat(p/6),className:"overflow-visible p-2",onMouseLeave:function(){x("Overall")},children:(0,n.jsx)("g",{transform:"translate(".concat(125,", ").concat(p/3,")"),children:f.map((function(e,s){var t,a,l=i.y.pillarNames[s],r=1;m!==l&&(r=.5);var o=i.y.pillarColorMap[l].base;return(0,n.jsxs)("g",{style:{opacity:r},children:[(0,n.jsx)("path",{onMouseEnter:function(){var e;e=i.y.pillarNames[s],x(e)},id:"".concat(null===(t=e.scoreArc)||void 0===t||null===(a=t.stage)||void 0===a?void 0:a.name,"-path"),className:"opacity-20 transition-opacity ".concat(h?"cursor-auto":"cursor-not-allowed"),style:{fill:o},d:e.outlineArc.path}),(0,n.jsx)("path",{className:"pointer-events-none",fill:o,d:e.scoreArc.path}),(0,n.jsx)("g",{className:"pointer-events-none",children:e.lines.map((function(e,s){return(0,n.jsx)("path",{d:e,stroke:"white",strokeWidth:2},s)}))})]},s)}))})}),(0,n.jsxs)("div",{className:"text-center relative",children:[(0,n.jsx)("div",{style:{color:i.y.pillarColorMap[m].base},className:"text-3xl flex items-center justify-center pointer-events-none absolute -top-6 left-0 right-0","aria-label":"".concat(m," icon"),children:l.Z[m.toLowerCase()]}),(0,n.jsxs)("div",{className:"mt-3",children:[(0,n.jsx)("div",{className:"pt-3",children:(0,n.jsx)("span",{style:{background:i.y.pillarColorMap[m].base},className:"text-xs text-white font-medium uppercase tracking-widest py-[2px] px-[12px] rounded-full",children:m})}),h?(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"mt-4",children:[(0,n.jsxs)("p",{className:"text-sm font-medium uppercase tracking-widest",style:{color:i.y.pillarColorMap[m].base},children:["Stage ",null===h||void 0===h?void 0:h.number,": ",null===h||void 0===h?void 0:h.name]}),(0,n.jsx)("p",{className:"text-sm text-gray-600",children:null===h||void 0===h?void 0:h.description})]})}):(0,n.jsx)("div",{className:"mt-4",children:(0,n.jsxs)("p",{className:"text-sm text-gray-600",children:["No ",m," data for ",a]})})]})]})]})}}}]);