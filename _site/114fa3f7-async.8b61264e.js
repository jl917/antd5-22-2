(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["114fa3f7"],{"114fa3f7":function(e,t,o){"use strict";o.d(t,"__esModule",{value:!0}),o.d(t,"texts",{enumerable:!0,get:function(){return a;}}),o("d8e90f0e");let a=[{value:"Ant Design v5 provides the Design Token model, which supports custom algorithm to implement theme extension capabilities. For example, the compact theme itself does not carry color style algorithms, so it can be implemented by passing in multiple algorithms to achieve the compact theme under the light theme and the compact theme under the dark theme.",paraId:0},{value:"Today, we now put down the algorithm part. Talk about how to extend the theme through ConfigProvider.",paraId:1},{value:"This is an example of using ConfigProvider to extend the theme. You can view the complete code directly ",paraId:2,tocIndex:0},{value:"here",paraId:2,tocIndex:0},{value:" (",paraId:2,tocIndex:0},{value:"online demo",paraId:2,tocIndex:0},{value:"):",paraId:2,tocIndex:0},{value:"We will talk about how to use ConfigProvider to extend the theme in Ant Design. Of course, this article is not a CSS tutorial, so we will not introduce the style implementation above. If you are interested, you can directly look at the code instead.",paraId:3,tocIndex:0},{value:"Design Token has powerful extension capabilities, but it also has limitations. For example, when Token does not support some configurations, developers become powerless. Even worse, some theme implementations cannot rely solely on a certain Token, which will become very difficult. For example, the gradient border colors in the above example cannot be implemented simply by ",paraId:4,tocIndex:1},{value:"border-color",paraId:4,tocIndex:1},{value:", it requires some CSS tricks. As mentioned in ",paraId:4,tocIndex:1},{value:'"Happy Work Theme"',paraId:5,tocIndex:1},{value:", landing some specific implementations to Design Token will cause the code quality to deteriorate rapidly. Therefore, we need some other ways to extend the theme, which can uniformly modify the style of a component. And ConfigProvider is such an entry.",paraId:4,tocIndex:1},{value:"In ",paraId:6,tocIndex:2},{value:"5.7.0",paraId:6,tocIndex:2},{value:", ConfigProvider supports the ",paraId:6,tocIndex:2},{value:"className",paraId:6,tocIndex:2},{value:" and ",paraId:6,tocIndex:2},{value:"style",paraId:6,tocIndex:2},{value:" configurations of all components. So we can easily extend beyond Token:",paraId:6,tocIndex:2},{value:"<ConfigProvider\n  button={{ className: 'my-button' }}\n  checkbox={{ className: 'my-checkbox' }}\n  divider={{ className: 'my-divider' }}\n/>\n",paraId:7,tocIndex:2},{value:"And then we can go to add our style:",paraId:8,tocIndex:2},{value:".my-button {\n  background: red;\n}\n",paraId:9,tocIndex:2},{value:"This is actually strange. Since we can modify the style through ",paraId:10,tocIndex:2},{value:"className",paraId:10,tocIndex:2},{value:", why do we need ConfigProvider? We can just override the ",paraId:10,tocIndex:2},{value:".ant-btn",paraId:10,tocIndex:2},{value:" style.",paraId:10,tocIndex:2},{value:"If your project is maintained by only one person, this is a good idea. But if your project is a large project, then you will find that this approach will cause style conflicts. Especially in the case of multi-person collaboration, modifying styles at will will result in unexpected results, and other people have to use more complex selectors to override your styles. ConfigProvider can solve this problem well. It can isolate styles inside ConfigProvider and will not affect other components.",paraId:11,tocIndex:2},{value:"Above example looks easy to implement, but in real scenarios you will find that there are some shortcomings for hierarchical structures. For example, the ",paraId:12,tocIndex:3},{value:"ant-",paraId:12,tocIndex:3},{value:" prefix can be modified by ConfigProvider's ",paraId:12,tocIndex:3},{value:"prefixCls",paraId:12,tocIndex:3},{value:", so the prefix of the semantic structure may change from ",paraId:12,tocIndex:3},{value:"ant-btn-icon",paraId:12,tocIndex:3},{value:" to ",paraId:12,tocIndex:3},{value:"abc-btn-icon",paraId:12,tocIndex:3},{value:". So it is not enough to override only by ",paraId:12,tocIndex:3},{value:"my-button",paraId:12,tocIndex:3},{value:":",paraId:12,tocIndex:3},{value:".my-button {\n  // OPS. It's `abc-btn-icon` now.\n  .ant-btn-icon {\n    background: red;\n  }\n}\n",paraId:13,tocIndex:3},{value:"So our extended theme also needs the ability to consume ",paraId:14,tocIndex:3},{value:"prefixCls",paraId:14,tocIndex:3},{value:". In CSS-in-JS, mixing ",paraId:14,tocIndex:3},{value:"prefixCls",paraId:14,tocIndex:3},{value:" is easy. We can get ",paraId:14,tocIndex:3},{value:"prefixCls",paraId:14,tocIndex:3},{value:" through the ",paraId:14,tocIndex:3},{value:"getPrefixCls",paraId:14,tocIndex:3},{value:" method of ConfigProvider, and then mix it:",paraId:14,tocIndex:3},{value:"// This is an example of using `antd-style`, you can use any CSS-in-JS library.\nimport React from 'react';\nimport { ConfigProvider } from 'antd';\nimport { createStyles } from 'antd-style';\n\nconst useButtonStyle = () => {\n  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);\n  const btnPrefixCls = getPrefixCls('btn');\n\n  // Customize styles\n  return createStyles(({ css }) => ({\n    btn: css`\n      background: red;\n      .${btnPrefixCls}-icon {\n        color: green;\n      }\n    `,\n  }))();\n};\n\nconst GeekProvider: React.FC<Readonly<React.PropsWithChildren>> = (props) => {\n  const { styles } = useButtonStyle();\n  return <ConfigProvider button={{ className: styles.btn }}>{props.children}</ConfigProvider>;\n};\n\nexport default GeekProvider;\n",paraId:15,tocIndex:3},{value:"It's also easy to extend for scenarios that need to inherit ",paraId:16,tocIndex:3},{value:"className",paraId:16,tocIndex:3},{value:":",paraId:16,tocIndex:3},{value:"import React from 'react';\nimport { ConfigProvider } from 'antd';\n\nconst GeekProvider: React.FC<Readonly<React.PropsWithChildren>> = (props) => {\n  const { button } = React.useContext(ConfigProvider.ConfigContext);\n  const { styles } = useButtonStyle();\n  return (\n    <ConfigProvider button={{ className: classNames(button?.className, styles.btn) }}>\n      {props.children}\n    </ConfigProvider>\n  );\n};\n\nexport default GeekProvider;\n",paraId:17,tocIndex:3},{value:"Through ConfigProvider, we can further extend the theme. It can isolate styles well and avoid style conflicts. Let's try it out!",paraId:18,tocIndex:4}];}}]);