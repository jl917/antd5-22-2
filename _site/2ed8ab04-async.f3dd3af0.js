(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["2ed8ab04"],{"2ed8ab04":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return r;}});var i=n("ecd7afd0"),l=n("e9032722"),o=n("f2d3421c");let a=(0,n("392e099d").createStyles)(({token:e,css:t})=>{let{colorIcon:n,colorText:i,iconCls:l}=e;return{editButton:t`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: ${e.marginXS}px;
        ${l} {
          display: block;
          color: ${n};
          font-size: ${e.fontSizeLG}px;
          transition: all ${e.motionDurationSlow};
          &:hover {
            color: ${i};
          }
        }
      }
    `};});var r=({title:e,filename:t})=>{let{styles:n}=a();return(0,i.jsx)(o.Tooltip,{title:e,children:(0,i.jsx)("a",{className:n.editButton,href:`https://github.com/ant-design/ant-design/edit/master/${t}`,target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(l.EditOutlined,{})})});};}}]);