(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["35064242"],{35064242:function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return u;}});var o=l("ecd7afd0");l("c76d74cd");var n=l("4b659183"),a=l("f2d3421c");let s=(e,t=1)=>({value:e.repeat(t)});var u=()=>{let[e,t]=(0,n.useState)(""),[l,u]=(0,n.useState)([]),[d,r]=(0,n.useState)([]),c=e=>e?[s(e),s(e,2),s(e,3)]:[],h=e=>{console.log("onSelect",e);};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.AutoComplete,{options:l,style:{width:200},onSelect:h,onSearch:e=>u(c(e)),placeholder:"input here"}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)(a.AutoComplete,{value:e,options:d,style:{width:200},onSelect:h,onSearch:e=>r(c(e)),onChange:e=>{t(e);},placeholder:"control mode"})]});};}}]);