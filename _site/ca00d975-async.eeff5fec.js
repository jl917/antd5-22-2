(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["ca00d975"],{"06928650":function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return d;}});var t=a("ecd7afd0");a("0040c853");var o=a("f2d3421c");let{Title:u}=o.Typography,n=[];for(let e=0;e<1e5;e++){let l=`${e.toString(36)}${e}`;n.push({label:l,value:l,disabled:10===e});}let i=e=>{console.log(`selected ${e}`);};var d=()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(u,{level:4,children:[n.length," Items"]}),(0,t.jsx)(o.Select,{mode:"multiple",style:{width:"100%"},placeholder:"Please select",defaultValue:["a10","c12"],onChange:i,options:n})]});},"13af4b44":function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return d;}});var t=a("777fffbe"),o=a("ecd7afd0");a("efc4fada");var u=t._(a("4b659183")),n=a("f2d3421c");let{_InternalPanelDoNotUseOrYouWillBeFired:i}=n.Select;var d=()=>{let[e,l]=u.default.useState(!0);return(0,o.jsxs)(n.Space,{direction:"vertical",style:{display:"flex"},children:[(0,o.jsx)(n.Switch,{checked:e,onChange:()=>l(!e)}),(0,o.jsx)(i,{defaultValue:"lucy",style:{width:120},open:e,options:[{label:"Jack",value:"jack"},{label:"Lucy",value:"lucy"},{label:"Disabled",value:"disabled"},{label:"Bamboo",value:"bamboo"}]})]});};},"1ff63371":function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return d;}});var t=a("777fffbe"),o=a("ecd7afd0");a("68eda5c2");var u=t._(a("4b659183")),n=a("e9032722"),i=a("f2d3421c"),d=()=>{let[e,l]=u.default.useState(["Ava Swift"]),a=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("span",{children:[e.length," / ",3]}),(0,o.jsx)(n.DownOutlined,{})]});return(0,o.jsx)(i.Select,{mode:"multiple",maxCount:3,value:e,style:{width:"100%"},onChange:l,suffixIcon:a,placeholder:"Please select",options:[{value:"Ava Swift",label:"Ava Swift"},{value:"Cole Reed",label:"Cole Reed"},{value:"Mia Blake",label:"Mia Blake"},{value:"Jake Stone",label:"Jake Stone"},{value:"Lily Lane",label:"Lily Lane"},{value:"Ryan Chase",label:"Ryan Chase"},{value:"Zoe Fox",label:"Zoe Fox"},{value:"Alex Grey",label:"Alex Grey"},{value:"Elle Blair",label:"Elle Blair"}]});};},"23dfb66a":function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return i;}});var t=a("ecd7afd0");a("1b75d68d");var o=a("4b659183"),u=a("f2d3421c");let n=["Apples","Nails","Bananas","Helicopters"];var i=()=>{let[e,l]=(0,o.useState)([]),a=n.filter(l=>!e.includes(l));return(0,t.jsx)(u.Select,{mode:"multiple",placeholder:"Inserted are removed",value:e,onChange:l,style:{width:"100%"},options:a.map(e=>({value:e,label:e}))});};},"24b3ff5c":function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return d;}});var t=a("ecd7afd0");a("1be6c435");var o=a("4b659183"),u=a("f2d3421c");let n={Zhejiang:["Hangzhou","Ningbo","Wenzhou"],Jiangsu:["Nanjing","Suzhou","Zhenjiang"]},i=["Zhejiang","Jiangsu"];var d=()=>{let[e,l]=(0,o.useState)(n[i[0]]),[a,d]=(0,o.useState)(n[i[0]][0]);return(0,t.jsxs)(u.Space,{wrap:!0,children:[(0,t.jsx)(u.Select,{defaultValue:i[0],style:{width:120},onChange:e=>{l(n[e]),d(n[e][0]);},options:i.map(e=>({label:e,value:e}))}),(0,t.jsx)(u.Select,{style:{width:120},value:a,onChange:e=>{d(e);},options:e.map(e=>({label:e,value:e}))})]});};},"29106dad":function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return u;}});var t=a("ecd7afd0");a("05d4a96f");var o=a("f2d3421c"),u=()=>(0,t.jsxs)(o.Space,{direction:"vertical",style:{width:"100%"},children:[(0,t.jsx)(o.Select,{status:"error",style:{width:"100%"}}),(0,t.jsx)(o.Select,{status:"warning",style:{width:"100%"}})]});},"2ad4cd22":function(e,l,a){"use strict";let t,o;a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return f;}});var u=a("777fffbe"),n=a("ecd7afd0");a("d67a117a");var i=a("4b659183"),d=a("f2d3421c"),s=u._(a("a0ff7389")),c=u._(a("1366dbd8"));let r=(e,l)=>{t&&(clearTimeout(t),t=null),o=e,e?t=setTimeout(()=>{let a=c.default.stringify({code:"utf-8",q:e});(0,s.default)(`https://suggest.taobao.com/sug?${a}`).then(e=>e.json()).then(a=>{if(o===e){let{result:e}=a;l(e.map(e=>({value:e[0],text:e[0]})));}});},300):l([]);},h=e=>{let[l,a]=(0,i.useState)([]),[t,o]=(0,i.useState)();return(0,n.jsx)(d.Select,{showSearch:!0,value:t,placeholder:e.placeholder,style:e.style,defaultActiveFirstOption:!1,suffixIcon:null,filterOption:!1,onSearch:e=>{r(e,a);},onChange:e=>{o(e);},notFoundContent:null,options:(l||[]).map(e=>({value:e.value,label:e.text}))});};var f=()=>(0,n.jsx)(h,{placeholder:"input search text",style:{width:200}});},"2e892f90":function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return u;}});var t=a("ecd7afd0");a("7d65bca7");var o=a("f2d3421c"),u=()=>(0,t.jsx)(o.Select,{showSearch:!0,style:{width:200},placeholder:"Search to Select",optionFilterProp:"label",filterSort:(e,l)=>((null==e?void 0:e.label)??"").toLowerCase().localeCompare(((null==l?void 0:l.label)??"").toLowerCase()),options:[{value:"1",label:"Not Identified"},{value:"2",label:"Closed"},{value:"3",label:"Communicated"},{value:"4",label:"Identified"},{value:"5",label:"Resolved"},{value:"6",label:"Cancelled"}]});},"3a0f30cd":function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return i;}});var t=a("ecd7afd0");a("a9e3d8bb");var o=a("f2d3421c");let u={width:500,position:"relative",zIndex:1,border:"1px solid red",backgroundColor:"#fff"},n=e=>{console.log(`selected ${e}`);};var i=()=>(0,t.jsxs)(o.Space,{style:u,wrap:!0,children:[(0,t.jsx)(o.Input,{style:{width:100},value:"222"}),(0,t.jsx)(o.Select,{style:{width:120},onChange:n,showSearch:!0,placeholder:"233",options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"disabled",disabled:!0,label:"Disabled"},{value:"Yiminghe",label:"yiminghe"},{value:"long",label:"I am super super long!"}]}),(0,t.jsx)(o.Select,{mode:"multiple",style:{width:120},defaultValue:["lucy"],onChange:n,showSearch:!0,placeholder:"233",options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"disabled",disabled:!0,label:"Disabled"},{value:"Yiminghe",label:"yiminghe"},{value:"long",label:"I am super super long!"}]}),(0,t.jsx)("span",{className:"debug-align",children:"AntDesign"}),(0,t.jsx)(o.Button,{children:"222"})]});},"3b1255e6":function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return i;}});var t=a("ecd7afd0");a("b88bad99");var o=a("f2d3421c");let u=[];for(let e=10;e<36;e++)u.push({value:e.toString(36)+e,label:e.toString(36)+e});let n=e=>{console.log(`selected ${e}`);};var i=()=>(0,t.jsx)(o.Select,{mode:"tags",style:{width:"100%"},placeholder:"Tags Mode",onChange:n,options:u});},"4368dc6c":function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return i;}});var t=a("ecd7afd0");a("76551236");var o=a("f2d3421c");let u=[{label:"gold",value:"gold"},{label:"lime",value:"lime"},{label:"green",value:"green"},{label:"cyan",value:"cyan"}],n=e=>{let{label:l,value:a}=e;return l?a:(0,t.jsx)("span",{children:"No option match"});};var i=()=>(0,t.jsx)(o.Select,{labelRender:n,defaultValue:"1",style:{width:"100%"},options:u});},"4facc070":function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return i;}});var t=a("ecd7afd0");a("a3d72030");var o=a("f2d3421c");let u=[];for(let e=10;e<36;e++)u.push({label:e.toString(36)+e,value:e.toString(36)+e});let n=e=>{console.log(`selected ${e}`);};var i=()=>(0,t.jsxs)(o.Space,{style:{width:"100%"},direction:"vertical",children:[(0,t.jsx)(o.Select,{mode:"multiple",allowClear:!0,style:{width:"100%"},placeholder:"Please select",defaultValue:["a10","c12"],onChange:n,options:u}),(0,t.jsx)(o.Select,{mode:"multiple",disabled:!0,style:{width:"100%"},placeholder:"Please select",defaultValue:["a10","c12"],onChange:n,options:u})]});},"56bd068a":function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return i;}});var t=a("ecd7afd0");a("09c306b8");var o=a("f2d3421c");let u=[{value:"gold"},{value:"lime"},{value:"green"},{value:"cyan"}],n=e=>{let{label:l,value:a,closable:u,onClose:n}=e;return(0,t.jsx)(o.Tag,{color:a,onMouseDown:e=>{e.preventDefault(),e.stopPropagation();},closable:u,onClose:n,style:{marginInlineEnd:4},children:l});};var i=()=>(0,t.jsx)(o.Select,{mode:"multiple",tagRender:n,defaultValue:["gold","cyan"],style:{width:"100%"},options:u});},"5ae9fc9e":function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return i;}});var t=a("ecd7afd0");a("4bb1c28c");var o=a("4b659183"),u=a("f2d3421c");let n=e=>Array.from({length:e??Math.floor(5*Math.random())+1}).map((e,l)=>({value:l,label:`Option ${l}`}));var i=()=>{let[e,l]=(0,o.useState)("topLeft"),[a,i]=(0,o.useState)(!1),[d,s]=(0,o.useState)(()=>n(3));return(0,t.jsxs)("div",{style:{height:"100%",minHeight:500,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"relative"},children:[(0,t.jsxs)(u.Space,{style:{position:"absolute",top:0,insetInlineStart:"50%",transform:"translateX(-50%)"},children:[(0,t.jsxs)(u.Radio.Group,{value:e,onChange:e=>{l(e.target.value);},children:[(0,t.jsx)(u.Radio.Button,{value:"topLeft",children:"TL"}),(0,t.jsx)(u.Radio.Button,{value:"topRight",children:"TR"}),(0,t.jsx)(u.Radio.Button,{value:"bottomLeft",children:"BL"}),(0,t.jsx)(u.Radio.Button,{value:"bottomRight",children:"BR"})]}),(0,t.jsx)(u.Switch,{checked:a,onChange:()=>i(e=>!e)}),(0,t.jsx)(u.Button,{onClick:()=>s(n()),children:"Random"})]}),(0,t.jsx)(u.Select,{open:a,style:{width:120},placement:e,options:d,popupMatchSelectWidth:200})]});};},"6ace38ef":function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return n;}});var t=a("ecd7afd0");a("fd4c10d6");var o=a("f2d3421c");let u=[{value:"long",label:(0,t.jsx)(o.Typography,{children:"long, long, long piece of text"})},{value:"short",label:(0,t.jsx)(o.Typography,{children:"short"})},{value:"normal",label:(0,t.jsx)("div",{children:"normal"})}];var n=()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.Space,{wrap:!0,children:[(0,t.jsx)(o.Select,{defaultValue:"long, long, long piece of text",style:{width:120},allowClear:!0,options:u}),(0,t.jsx)(o.Select,{placeholder:"Select a option",style:{width:120,height:60},allowClear:!0,options:u}),(0,t.jsx)(o.Select,{defaultValue:"normal",placeholder:"Select a option",style:{width:120},allowClear:!0,options:u}),(0,t.jsx)(o.Select,{defaultValue:["normal"],mode:"multiple",placeholder:"Select a option",style:{width:120},allowClear:!0,options:u}),(0,t.jsx)(o.Select,{mode:"multiple",placeholder:"Select a option",style:{width:120,height:60},allowClear:!0,options:u}),(0,t.jsx)(o.Cascader,{placeholder:"Select a option",style:{width:120,height:60},allowClear:!0,options:u}),(0,t.jsx)(o.TreeSelect,{showSearch:!0,style:{width:120,height:60},placeholder:"Please select",allowClear:!0,popupMatchSelectWidth:!1,treeDefaultExpandAll:!0,treeData:[{value:"parent 1",title:"parent 1",children:u}]}),(0,t.jsx)(o.Select,{prefix:"Hello World",mode:"multiple",allowClear:!0,placeholder:"Select",style:{minWidth:200,height:200},defaultValue:["long"],options:u}),(0,t.jsx)(o.Select,{mode:"multiple",style:{width:200},placeholder:"\u8BF7\u9009\u62E9",maxTagCount:"responsive",prefix:"\u57CE\u5E02",options:u}),(0,t.jsx)(o.Select,{style:{width:200},placeholder:"\u8BF7\u9009\u62E9",prefix:"\u57CE\u5E02",options:u,showSearch:!0,allowClear:!0,status:"error"}),(0,t.jsx)(o.Select,{style:{width:100},prefix:"Hi",options:u,showSearch:!0,allowClear:!0,status:"warning",variant:"filled",defaultValue:"Bamboo"}),(0,t.jsx)(o.Select,{style:{width:100},prefix:"Hi",options:u,showSearch:!0,allowClear:!0,status:"error",variant:"borderless",defaultValue:"Bamboo"}),(0,t.jsxs)(o.Form,{style:{width:200},layout:"vertical",children:[(0,t.jsx)(o.Form.Item,{label:"Label",name:"bamboo",initialValue:"Bamboo",style:{boxShadow:"0 0 0 1px red"},children:(0,t.jsx)(o.Select,{options:u,allowClear:!0,placeholder:"bamboo"})}),(0,t.jsx)(o.Form.Item,{label:"Label",name:"bamboo",initialValue:"Bamboo",style:{boxShadow:"0 0 0 1px red"},children:(0,t.jsx)(o.AutoComplete,{options:u,allowClear:!0,placeholder:"bamboo"})})]})]}),(0,t.jsxs)(o.Flex,{vertical:!0,style:{width:200},children:[(0,t.jsx)(o.Input,{prefix:"Hi",placeholder:"Input",allowClear:!0}),(0,t.jsx)(o.Select,{prefix:"Hi",placeholder:"Single",options:u,allowClear:!0,showSearch:!0}),(0,t.jsx)(o.Select,{prefix:"Hi",placeholder:"Single",options:u,allowClear:!0,showSearch:!0,defaultValue:"Bamboo"}),(0,t.jsx)(o.Select,{placeholder:"Multiple",options:u,allowClear:!0,mode:"multiple"}),(0,t.jsx)(o.Select,{prefix:"Hi",placeholder:"Multiple",options:u,allowClear:!0,mode:"multiple"}),(0,t.jsx)(o.Select,{prefix:"Hi",placeholder:"Multiple",options:u,allowClear:!0,mode:"multiple",defaultValue:["Bamboo"]}),(0,t.jsx)(o.Select,{placeholder:"Multiple",options:u,allowClear:!0,mode:"multiple",defaultValue:["Bamboo"]})]})]});},"7688b2b0":function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return d;}});var t=a("ecd7afd0");a("4951304a");var o=a("4b659183"),u=a("e9032722"),n=a("f2d3421c");let i=0;var d=()=>{let[e,l]=(0,o.useState)(["jack","lucy"]),[a,d]=(0,o.useState)(""),s=(0,o.useRef)(null),c=e=>{d(e.target.value);},r=t=>{t.preventDefault(),l([...e,a||`New item ${i++}`]),d(""),setTimeout(()=>{var e;null===(e=s.current)||void 0===e||e.focus();},0);};return(0,t.jsx)(n.Select,{style:{width:300},placeholder:"custom dropdown render",dropdownRender:e=>(0,t.jsxs)(t.Fragment,{children:[e,(0,t.jsx)(n.Divider,{style:{margin:"8px 0"}}),(0,t.jsxs)(n.Space,{style:{padding:"0 8px 4px"},children:[(0,t.jsx)(n.Input,{placeholder:"Please enter item",ref:s,value:a,onChange:c,onKeyDown:e=>e.stopPropagation()}),(0,t.jsx)(n.Button,{type:"text",icon:(0,t.jsx)(u.PlusOutlined,{}),onClick:r,children:"Add item"})]})]}),options:e.map(e=>({label:e,value:e}))});};},"76e4d099":function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return s;}});var t=a("ecd7afd0");a("d4177563");var o=a("e9032722"),u=a("f2d3421c");let n=(0,t.jsx)(o.SmileOutlined,{}),i=(0,t.jsx)(o.MehOutlined,{}),d=e=>{console.log(`selected ${e}`);};var s=()=>(0,t.jsxs)(u.Space,{wrap:!0,children:[(0,t.jsx)(u.Select,{prefix:"User",defaultValue:"lucy",style:{width:200},onChange:d,options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"Yiminghe",label:"yiminghe"},{value:"disabled",label:"Disabled",disabled:!0}]}),(0,t.jsx)(u.Select,{suffixIcon:n,defaultValue:"lucy",style:{width:120},onChange:d,options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"Yiminghe",label:"yiminghe"},{value:"disabled",label:"Disabled",disabled:!0}]}),(0,t.jsx)(u.Select,{suffixIcon:i,defaultValue:"lucy",style:{width:120},disabled:!0,options:[{value:"lucy",label:"Lucy"}]}),(0,t.jsx)("br",{}),(0,t.jsx)(u.Select,{prefix:"User",defaultValue:["lucy"],mode:"multiple",style:{width:200},onChange:d,options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"Yiminghe",label:"yiminghe"},{value:"disabled",label:"Disabled",disabled:!0}]}),(0,t.jsx)(u.Select,{suffixIcon:n,defaultValue:["lucy"],mode:"multiple",style:{width:120},onChange:d,options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"Yiminghe",label:"yiminghe"},{value:"disabled",label:"Disabled",disabled:!0}]}),(0,t.jsx)(u.Select,{suffixIcon:i,defaultValue:["lucy"],mode:"multiple",style:{width:120},disabled:!0,options:[{value:"lucy",label:"Lucy"}]})]});},"86fe8860":function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return i;}});var t=a("ecd7afd0");a("f3d8b07d");var o=a("f2d3421c");let u=[];for(let e=10;e<36;e++)u.push({value:e.toString(36)+e,label:e.toString(36)+e});let n=e=>{console.log(`selected ${e}`);};var i=()=>(0,t.jsx)(o.Select,{mode:"tags",style:{width:"100%"},onChange:n,tokenSeparators:[","],options:u});},"913c894c":function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return d;}});var t=a("ecd7afd0");a("2c5ca9dc");var o=a("4b659183"),u=a("f2d3421c");let n=[];for(let e=10;e<36;e++){let l=e.toString(36)+e;n.push({label:`Long Label: ${l}`,value:l});}let i={mode:"multiple",style:{width:"100%"},options:n,placeholder:"Select Item...",maxTagCount:"responsive"};var d=()=>{let[e,l]=(0,o.useState)(["a10","c12","h17","j19","k20"]),a={value:e,onChange:l};return(0,t.jsxs)(u.Space,{direction:"vertical",style:{width:"100%"},children:[(0,t.jsx)(u.Select,{...i,...a}),(0,t.jsx)(u.Select,{...i,disabled:!0}),(0,t.jsx)(u.Select,{...i,...a,maxTagPlaceholder:e=>(0,t.jsx)(u.Tooltip,{overlayStyle:{pointerEvents:"none"},title:e.map(({label:e})=>e).join(", "),children:(0,t.jsx)("span",{children:"Hover Me"})})})]});};},"92aad9c1":function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return n;}});var t=a("ecd7afd0");a("f6294f2a");var o=a("f2d3421c");let u=e=>{console.log(e);};var n=()=>(0,t.jsx)(o.Select,{labelInValue:!0,defaultValue:{value:"lucy",label:"Lucy (101)"},style:{width:120},onChange:u,options:[{value:"jack",label:"Jack (100)"},{value:"lucy",label:"Lucy (101)"}]});},"9be0a398":function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return c;}});var t=a("777fffbe"),o=a("ecd7afd0");a("ff2f907c");var u=a("4b659183"),n=a("f2d3421c"),i=t._(a("9b283227"));function d({fetchOptions:e,debounceTimeout:l=800,...a}){let[t,d]=(0,u.useState)(!1),[s,c]=(0,u.useState)([]),r=(0,u.useRef)(0),h=(0,u.useMemo)(()=>(0,i.default)(l=>{r.current+=1;let a=r.current;c([]),d(!0),e(l).then(e=>{a===r.current&&(c(e),d(!1));});},l),[e,l]);return(0,o.jsx)(n.Select,{labelInValue:!0,filterOption:!1,onSearch:h,notFoundContent:t?(0,o.jsx)(n.Spin,{size:"small"}):null,...a,options:s});}async function s(e){return console.log("fetching user",e),fetch("https://randomuser.me/api/?results=5").then(e=>e.json()).then(e=>e.results.map(e=>({label:`${e.name.first} ${e.name.last}`,value:e.login.username})));}var c=()=>{let[e,l]=(0,u.useState)([]);return(0,o.jsx)(d,{mode:"multiple",value:e,placeholder:"Select users",fetchOptions:s,onChange:e=>{l(e);},style:{width:"100%"}});};},a0b567d7:function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return u;}});var t=a("ecd7afd0");a("a65820b1");var o=a("f2d3421c"),u=()=>(0,t.jsxs)(o.Flex,{gap:12,vertical:!0,children:[(0,t.jsxs)(o.Flex,{gap:8,children:[(0,t.jsx)(o.Select,{value:"lucy",disabled:!0,variant:"filled",style:{flex:1},options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"Yiminghe",label:"yiminghe"}]}),(0,t.jsx)(o.Select,{value:"lucy",disabled:!0,mode:"multiple",variant:"filled",placeholder:"Outlined",style:{flex:1},options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"Yiminghe",label:"yiminghe"}]})]}),(0,t.jsxs)(o.Flex,{gap:8,children:[(0,t.jsx)(o.Select,{value:"lucy",status:"error",variant:"filled",style:{flex:1},options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"Yiminghe",label:"yiminghe"}]}),(0,t.jsx)(o.Select,{value:"lucy",status:"error",mode:"multiple",variant:"filled",placeholder:"Outlined",style:{flex:1},options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"Yiminghe",label:"yiminghe"}]})]}),(0,t.jsxs)(o.Flex,{gap:8,children:[(0,t.jsx)(o.Select,{disabled:!0,value:"lucy",status:"error",variant:"filled",style:{flex:1},options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"Yiminghe",label:"yiminghe"}]}),(0,t.jsx)(o.Select,{disabled:!0,value:"lucy",status:"error",mode:"multiple",variant:"filled",placeholder:"Outlined",style:{flex:1},options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"Yiminghe",label:"yiminghe"}]})]})]});},a4aaa886:function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return i;}});var t=a("ecd7afd0");a("ef0b0baa");var o=a("f2d3421c");let u=e=>{console.log(`selected ${e}`);},n=[{label:"China",value:"china",emoji:"\u{1F1E8}\u{1F1F3}",desc:"China (\u4E2D\u56FD)"},{label:"USA",value:"usa",emoji:"\u{1F1FA}\u{1F1F8}",desc:"USA (\u7F8E\u56FD)"},{label:"Japan",value:"japan",emoji:"\u{1F1EF}\u{1F1F5}",desc:"Japan (\u65E5\u672C)"},{label:"Korea",value:"korea",emoji:"\u{1F1F0}\u{1F1F7}",desc:"Korea (\u97E9\u56FD)"}];var i=()=>(0,t.jsx)(o.Select,{mode:"multiple",style:{width:"100%"},placeholder:"select one country",defaultValue:["china"],onChange:u,options:n,optionRender:e=>(0,t.jsxs)(o.Space,{children:[(0,t.jsx)("span",{role:"img","aria-label":e.data.label,children:e.data.emoji}),e.data.desc]})});},a89f57f3:function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return d;}});var t=a("ecd7afd0");a("27400ad4");var o=a("4b659183"),u=a("f2d3421c");let n=[];for(let e=10;e<36;e++)n.push({value:e.toString(36)+e,label:e.toString(36)+e});let i=e=>{console.log(`Selected: ${e}`);};var d=()=>{let[e,l]=(0,o.useState)("middle");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(u.Radio.Group,{value:e,onChange:e=>{l(e.target.value);},children:[(0,t.jsx)(u.Radio.Button,{value:"large",children:"Large"}),(0,t.jsx)(u.Radio.Button,{value:"middle",children:"Default"}),(0,t.jsx)(u.Radio.Button,{value:"small",children:"Small"})]}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsxs)(u.Space,{direction:"vertical",style:{width:"100%"},children:[(0,t.jsx)(u.Select,{size:e,defaultValue:"a1",onChange:i,style:{width:200},options:n}),(0,t.jsx)(u.Select,{mode:"multiple",size:e,placeholder:"Please select",defaultValue:["a10","c12"],onChange:i,style:{width:"100%"},options:n}),(0,t.jsx)(u.Select,{mode:"tags",size:e,placeholder:"Please select",defaultValue:["a10","c12"],onChange:i,style:{width:"100%"},options:n})]})]});};},b7554326:function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return u;}});var t=a("ecd7afd0");a("cd8b781e");var o=a("f2d3421c"),u=()=>(0,t.jsxs)(o.Flex,{gap:12,vertical:!0,children:[(0,t.jsxs)(o.Flex,{gap:8,children:[(0,t.jsx)(o.Select,{placeholder:"Outlined",style:{flex:1},options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"Yiminghe",label:"yiminghe"}]}),(0,t.jsx)(o.Select,{mode:"multiple",defaultValue:["lucy"],placeholder:"Outlined",style:{flex:1},options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"Yiminghe",label:"yiminghe"}]})]}),(0,t.jsxs)(o.Flex,{gap:8,children:[(0,t.jsx)(o.Select,{placeholder:"Filled",variant:"filled",style:{flex:1},options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"Yiminghe",label:"yiminghe"}]}),(0,t.jsx)(o.Select,{mode:"multiple",defaultValue:["lucy"],placeholder:"Filled",variant:"filled",style:{flex:1},options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"Yiminghe",label:"yiminghe"}]})]}),(0,t.jsxs)(o.Flex,{gap:8,children:[(0,t.jsx)(o.Select,{placeholder:"Borderless",variant:"borderless",style:{flex:1},options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"Yiminghe",label:"yiminghe"}]}),(0,t.jsx)(o.Select,{mode:"multiple",defaultValue:["lucy"],placeholder:"Borderless",variant:"borderless",style:{flex:1},options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"Yiminghe",label:"yiminghe"}]})]})]});},bce8cce8:function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return i;}});var t=a("ecd7afd0");a("56f63681");var o=a("f2d3421c");let u=e=>{console.log(`selected ${e}`);},n=e=>{console.log("search:",e);};var i=()=>(0,t.jsx)(o.Select,{showSearch:!0,placeholder:"Select a person",optionFilterProp:"label",onChange:u,onSearch:n,options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"tom",label:"Tom"}]});},ca5eb78c:function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return n;}});var t=a("ecd7afd0");a("9cabb764");var o=a("f2d3421c");let u=e=>{console.log(`selected ${e}`);};var n=()=>(0,t.jsx)(o.Select,{defaultValue:"lucy",style:{width:200},onChange:u,options:[{label:(0,t.jsx)("span",{children:"manager"}),title:"manager",options:[{label:(0,t.jsx)("span",{children:"Jack"}),value:"Jack"},{label:(0,t.jsx)("span",{children:"Lucy"}),value:"Lucy"}]},{label:(0,t.jsx)("span",{children:"engineer"}),title:"engineer",options:[{label:(0,t.jsx)("span",{children:"Chloe"}),value:"Chloe"},{label:(0,t.jsx)("span",{children:"Lucas"}),value:"Lucas"}]}]});},ce79da0c:function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return n;}});var t=a("ecd7afd0");a("6707ae4f");var o=a("f2d3421c");let u=[];for(let e=10;e<36;e++)u.push({label:e.toString(36)+e,value:e.toString(36)+e});var n=()=>(0,t.jsxs)(o.Space,{direction:"vertical",children:[(0,t.jsx)(o.ConfigProvider,{theme:{components:{Select:{multipleItemBorderColor:"rgba(0,0,0,0.06)",multipleItemBorderColorDisabled:"rgba(0,0,0,0.06)",optionSelectedColor:"#1677ff",hoverBorderColor:"red",activeBorderColor:"green",activeOutlineColor:"pink"}}},children:(0,t.jsxs)(o.Space,{style:{width:"100%"},direction:"vertical",children:[(0,t.jsx)(o.Select,{mode:"multiple",allowClear:!0,style:{width:"100%"},placeholder:"Please select",defaultValue:["a10","c12"],options:u}),(0,t.jsx)(o.Select,{mode:"multiple",disabled:!0,style:{width:"100%"},placeholder:"Please select",defaultValue:["a10","c12"],options:u})]})}),(0,t.jsx)(o.ConfigProvider,{theme:{token:{controlHeightSM:28}},children:(0,t.jsxs)(o.Space,{style:{width:"100%"},direction:"vertical",children:[(0,t.jsx)(o.Select,{mode:"multiple",allowClear:!0,size:"small",style:{width:"100%"},placeholder:"Please select",defaultValue:["a10","c12"],options:u}),(0,t.jsx)(o.Select,{mode:"multiple",allowClear:!0,style:{width:"100%"},placeholder:"Please select",defaultValue:["a10","c12"],options:u})]})}),(0,t.jsx)(o.ConfigProvider,{theme:{components:{Select:{paddingXXS:0,controlHeight:28}}},children:(0,t.jsxs)(o.Space,{style:{width:"100%"},direction:"vertical",children:[(0,t.jsx)(o.Select,{style:{width:"100%"},defaultValue:"a10",options:u}),(0,t.jsx)(o.Select,{mode:"multiple",style:{width:"100%"},defaultValue:["a10","c12"],options:u})]})})]});},dd7da3b6:function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return n;}});var t=a("ecd7afd0");a("76e8b707");var o=a("4b659183"),u=a("f2d3421c"),n=()=>{let[e,l]=(0,o.useState)("topLeft");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(u.Radio.Group,{value:e,onChange:e=>{l(e.target.value);},children:[(0,t.jsx)(u.Radio.Button,{value:"topLeft",children:"topLeft"}),(0,t.jsx)(u.Radio.Button,{value:"topRight",children:"topRight"}),(0,t.jsx)(u.Radio.Button,{value:"bottomLeft",children:"bottomLeft"}),(0,t.jsx)(u.Radio.Button,{value:"bottomRight",children:"bottomRight"})]}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(u.Select,{defaultValue:"HangZhou",style:{width:120},popupMatchSelectWidth:!1,placement:e,options:[{value:"HangZhou",label:"HangZhou #310000"},{value:"NingBo",label:"NingBo #315000"},{value:"WenZhou",label:"WenZhou #325000"}]})]});};},de9757fb:function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return u;}});var t=a("ecd7afd0");a("43ee3f0a");var o=a("f2d3421c"),u=()=>(0,t.jsx)(o.Select,{style:{width:120,marginTop:"50vh"},open:!0,options:Array(100).fill(null).map((e,l)=>({value:l}))});},e38ccfc4:function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return n;}});var t=a("ecd7afd0");a("6b27fa2a");var o=a("f2d3421c");let u=e=>{console.log(`selected ${e}`);};var n=()=>(0,t.jsxs)(o.Space,{wrap:!0,children:[(0,t.jsx)(o.Select,{defaultValue:"lucy",style:{width:120},onChange:u,options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"Yiminghe",label:"yiminghe"},{value:"disabled",label:"Disabled",disabled:!0}]}),(0,t.jsx)(o.Select,{defaultValue:"lucy",style:{width:120},disabled:!0,options:[{value:"lucy",label:"Lucy"}]}),(0,t.jsx)(o.Select,{defaultValue:"lucy",style:{width:120},loading:!0,options:[{value:"lucy",label:"Lucy"}]}),(0,t.jsx)(o.Select,{defaultValue:"lucy",style:{width:120},allowClear:!0,options:[{value:"lucy",label:"Lucy"}],placeholder:"select it"})]});},f4f62a59:function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return u;}});var t=a("ecd7afd0");a("f31ca714");var o=a("f2d3421c"),u=()=>(0,t.jsx)(o.Select,{showSearch:!0,placeholder:"Select a person",filterOption:(e,l)=>((null==l?void 0:l.label)??"").toLowerCase().includes(e.toLowerCase()),options:[{value:"1",label:"Jack"},{value:"2",label:"Lucy"},{value:"3",label:"Tom"}]});}}]);