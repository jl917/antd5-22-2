(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["e4a360a6"],{e4a360a6:function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return n;}});var l=a("ecd7afd0");a("440023a9");var d=a("4b659183"),o=a("f2d3421c"),n=()=>{let[e,t]=(0,d.useState)(),[a,n]=(0,d.useState)([{id:1,pId:0,value:"1",title:"Expand to load"},{id:2,pId:0,value:"2",title:"Expand to load"},{id:3,pId:0,value:"3",title:"Tree Node",isLeaf:!0}]),i=(e,t=!1)=>{let a=Math.random().toString(36).substring(2,6);return{id:a,pId:e,value:a,title:t?"Tree Node":"Expand to load",isLeaf:t};};return(0,l.jsx)(o.TreeSelect,{treeDataSimpleMode:!0,style:{width:"100%"},value:e,dropdownStyle:{maxHeight:400,overflow:"auto"},placeholder:"Please select",onChange:e=>{console.log(e),t(e);},loadData:({id:e})=>new Promise(t=>{setTimeout(()=>{n(a.concat([i(e,!1),i(e,!0),i(e,!0)])),t(void 0);},300);}),treeData:a});};}}]);