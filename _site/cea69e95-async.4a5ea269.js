(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["cea69e95"],{cea69e95:function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return k;}});var f=t("777fffbe"),l=t("ecd7afd0");t("6ad01bea");var d=t("f2d3421c"),u=f._(t("5d168765")),r=f._(t("900f2abd"));u.default.extend(r.default);let{RangePicker:o}=d.DatePicker,i="YYYY/MM/DD",s="MM/DD",c="YYYY/MM",Y=["DD/MM/YYYY","DD/MM/YY","DD-MM-YYYY","DD-MM-YY"],n=e=>`custom format: ${e.format(i)}`,D=e=>`${(0,u.default)(e).startOf("week").format(s)} ~ ${(0,u.default)(e).endOf("week").format(s)}`;var k=()=>(0,l.jsxs)(d.Space,{direction:"vertical",size:12,children:[(0,l.jsx)(d.DatePicker,{defaultValue:(0,u.default)("2015/01/01",i),format:i}),(0,l.jsx)(d.DatePicker,{defaultValue:(0,u.default)("01/01/2015",Y[0]),format:Y}),(0,l.jsx)(d.DatePicker,{defaultValue:(0,u.default)("2015/01",c),format:c,picker:"month"}),(0,l.jsx)(d.DatePicker,{defaultValue:(0,u.default)(),format:D,picker:"week"}),(0,l.jsx)(o,{defaultValue:[(0,u.default)("2015/01/01",i),(0,u.default)("2015/01/01",i)],format:i}),(0,l.jsx)(d.DatePicker,{defaultValue:(0,u.default)("2015/01/01",i),format:n})]});}}]);