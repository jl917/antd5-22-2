(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["75c5df17"],{"75c5df17":function(e,l,s){"use strict";s.d(l,"__esModule",{value:!0}),s.d(l,"default",{enumerable:!0,get:function(){return t;}});var d=s("ecd7afd0");s("03785f92");var n=s("e9032722"),a=s("f2d3421c");let i="https://ant.design",r=e=>{var l,s,i;switch(e.status){case"expired":return(0,d.jsxs)("div",{children:[(0,d.jsx)(n.CloseCircleFilled,{style:{color:"red"}})," ",null===(l=e.locale)||void 0===l?void 0:l.expired,(0,d.jsx)("p",{children:(0,d.jsxs)(a.Button,{type:"link",onClick:e.onRefresh,children:[(0,d.jsx)(n.ReloadOutlined,{})," ",null===(s=e.locale)||void 0===s?void 0:s.refresh]})})]});case"loading":return(0,d.jsxs)(a.Space,{direction:"vertical",children:[(0,d.jsx)(a.Spin,{}),(0,d.jsx)("p",{children:"Loading..."})]});case"scanned":return(0,d.jsxs)("div",{children:[(0,d.jsx)(n.CheckCircleFilled,{style:{color:"green"}})," ",null===(i=e.locale)||void 0===i?void 0:i.scanned]});default:return null;}};var t=()=>(0,d.jsxs)(a.Flex,{gap:"middle",wrap:!0,children:[(0,d.jsx)(a.QRCode,{value:i,status:"loading",statusRender:r}),(0,d.jsx)(a.QRCode,{value:i,status:"expired",onRefresh:()=>console.log("refresh"),statusRender:r}),(0,d.jsx)(a.QRCode,{value:i,status:"scanned",statusRender:r})]});}}]);