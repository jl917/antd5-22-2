(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["d6312fa4"],{d6312fa4:function(e,l,t){"use strict";t.d(l,"__esModule",{value:!0}),t.d(l,"default",{enumerable:!0,get:function(){return u;}});var o=t("ecd7afd0");t("634044c1");var n=t("4b659183"),a=t("f2d3421c");let{TextArea:s}=a.Input;var u=()=>{let[e,l]=(0,n.useState)([]);return(0,o.jsx)(a.AutoComplete,{options:e,style:{width:200},onSelect:e=>{console.log("onSelect",e);},onSearch:e=>{l(e?[{value:e},{value:e+e},{value:e+e+e}]:[]);},children:(0,o.jsx)(s,{placeholder:"input here",className:"custom",style:{height:50},onKeyPress:e=>{console.log("handleKeyPress",e);}})});};}}]);