(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["6930c620"],{"6930c620":function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return r;}});var n=a("ecd7afd0");a("7e545ff4");var d=a("4b659183"),i=a("f2d3421c");let s=()=>{let{componentDisabled:e,componentSize:l}=i.ConfigProvider.useConfig();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Form.Item,{label:"componentSize value",children:(0,n.jsx)(i.Input,{value:l})}),(0,n.jsx)(i.Form.Item,{label:"componentDisabled value",children:(0,n.jsx)(i.Input,{value:String(e),disabled:e})})]});};var r=()=>{let[e,l]=(0,d.useState)("small"),[a,r]=(0,d.useState)(!0);return(0,n.jsxs)("div",{children:[(0,n.jsxs)(i.Space,{children:[(0,n.jsxs)(i.Radio.Group,{value:e,onChange:e=>{l(e.target.value);},children:[(0,n.jsx)(i.Radio.Button,{value:"small",children:"Small"}),(0,n.jsx)(i.Radio.Button,{value:"middle",children:"Middle"}),(0,n.jsx)(i.Radio.Button,{value:"large",children:"Large"})]}),(0,n.jsx)(i.Checkbox,{checked:a,onChange:e=>r(e.target.checked),children:"Form disabled"})]}),(0,n.jsx)(i.Divider,{}),(0,n.jsx)(i.ConfigProvider,{componentSize:e,children:(0,n.jsx)("div",{className:"example",children:(0,n.jsx)(i.Form,{disabled:a,children:(0,n.jsx)(s,{})})})})]});};}}]);