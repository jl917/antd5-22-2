(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["f9c57fc3"],{f9c57fc3:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"SandpackRuntime",{enumerable:!0,get:function(){return L;}});var i=n("777fffbe"),r=n("c328ad69"),o=n("bc59095d"),s=n("78429105"),a=i._(n("ecca74bb"));n("15867bf6");for(var c=function(){function e(e,t,n){var i=this;this.type=e,this.handleMessage=t,this.protocol=n,this._disposeMessageListener=this.protocol.channelListen(function(e){return(0,r._)(i,void 0,void 0,function(){var t,n,i,o;return(0,r.a)(this,function(r){switch(r.label){case 0:if(!(e.type===this.getTypeId()&&e.method))return[3,4];t=e,r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this.handleMessage(t)];case 2:return n=r.sent(),i={type:this.getTypeId(),msgId:t.msgId,result:n},this.protocol.dispatch(i),[3,4];case 3:return o=r.sent(),i={type:this.getTypeId(),msgId:t.msgId,error:{message:o.message}},this.protocol.dispatch(i),[3,4];case 4:return[2];}});});});}return e.prototype.getTypeId=function(){return"protocol-".concat(this.type);},e.prototype.dispose=function(){this._disposeMessageListener();},e;}(),d=function(){function e(e,t){this.globalListeners={},this.globalListenersCount=0,this.channelListeners={},this.channelListenersCount=0,this.channelId=Math.floor(1e6*Math.random()),this.frameWindow=e.contentWindow,this.origin=t,this.globalListeners=[],this.channelListeners=[],this.eventListener=this.eventListener.bind(this),"undefined"!=typeof window&&window.addEventListener("message",this.eventListener);}return e.prototype.cleanup=function(){window.removeEventListener("message",this.eventListener),this.globalListeners={},this.channelListeners={},this.globalListenersCount=0,this.channelListenersCount=0;},e.prototype.register=function(){this.frameWindow&&this.frameWindow.postMessage({type:"register-frame",origin:document.location.origin,id:this.channelId},this.origin);},e.prototype.dispatch=function(e){this.frameWindow&&this.frameWindow.postMessage((0,r.h)({$id:this.channelId,codesandbox:!0},e),this.origin);},e.prototype.globalListen=function(e){var t=this;if("function"!=typeof e)return function(){};var n=this.globalListenersCount;return this.globalListeners[n]=e,this.globalListenersCount++,function(){delete t.globalListeners[n];};},e.prototype.channelListen=function(e){var t=this;if("function"!=typeof e)return function(){};var n=this.channelListenersCount;return this.channelListeners[n]=e,this.channelListenersCount++,function(){delete t.channelListeners[n];};},e.prototype.eventListener=function(e){if(e.source===this.frameWindow){var t=e.data;t.codesandbox&&(Object.values(this.globalListeners).forEach(function(e){return e(t);}),t.$id===this.channelId&&Object.values(this.channelListeners).forEach(function(e){return e(t);}));}},e;}(),l=new Map,u=Object.entries(a.default),p=0;p<u.length;p++){var h=u[p],f=h[0],m=h[1];if(m.extensions){var b=m.extensions;if(b.length)for(var v=0;v<b.length;v++){var g=b[v];l.set(g,f);}}}var x="$CSB_RELAY",y="-{{suffix}}",w="https://".concat("2.19.8".replace(/\./g,"-")).concat(y,"-sandpack.codesandbox.io/"),L=function(e){function t(t,n,i){void 0===i&&(i={});var o=e.call(this,t,n,i)||this;if(o.getTranspilerContext=function(){return new Promise(function(e){var t=o.listen(function(n){"transpiler-context"===n.type&&(e(n.data),t());});o.dispatch({type:"get-transpiler-context"});});},o.getTranspiledFiles=function(){return new Promise(function(e){var t=o.listen(function(n){"all-modules"===n.type&&(e(n.data),t());});o.dispatch({type:"get-modules"});});},o.bundlerURL=o.createBundlerURL(),o.bundlerState=void 0,o.errors=[],o.status="initializing","string"==typeof t){o.selector=t;var s=document.querySelector(t);(0,r.n)(s,"The element '".concat(t,"' was not found")),o.element=s,o.iframe=document.createElement("iframe"),o.initializeElement();}else o.element=t,o.iframe=t;return o.iframe.getAttribute("sandbox")||(o.iframe.setAttribute("sandbox","allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-downloads allow-pointer-lock"),o.iframe.setAttribute("allow","accelerometer; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; clipboard-read; clipboard-write; xr-spatial-tracking;")),o.setLocationURLIntoIFrame(),o.iframeProtocol=new d(o.iframe,o.bundlerURL),o.unsubscribeGlobalListener=o.iframeProtocol.globalListen(function(e){"initialized"===e.type&&o.iframe.contentWindow&&(o.iframeProtocol.register(),o.options.fileResolver&&(o.fileResolverProtocol=new c("fs",function(e){return(0,r._)(o,void 0,void 0,function(){return(0,r.a)(this,function(t){if("isFile"===e.method)return[2,this.options.fileResolver.isFile(e.params[0])];if("readFile"===e.method)return[2,this.options.fileResolver.readFile(e.params[0])];throw Error("Method not supported");});});},o.iframeProtocol)),o.updateSandbox(o.sandboxSetup,!0));}),o.unsubscribeChannelListener=o.iframeProtocol.channelListen(function(e){switch(e.type){case"start":o.errors=[];break;case"status":o.status=e.status;break;case"action":"show-error"===e.action&&(o.errors=(0,r.i)((0,r.i)([],o.errors,!0),[(0,r.e)(e)],!1));break;case"done":o.status="done";break;case"state":o.bundlerState=e.state;}}),i.experimental_enableServiceWorker&&o.serviceWorkerHandshake(),o;}return(0,r.g)(t,e),t.prototype.createBundlerURL=function(){var e,t=this.options.bundlerURL||w;if(this.options.bundlerURL)return t;if(this.options.teamId&&(t=t.replace("https://","https://"+this.options.teamId+"-")+"?cache=".concat(Date.now())),this.options.experimental_enableServiceWorker){var n=[];n.push(Math.random().toString(36).slice(4)),t=t.replace(y,"-".concat(null!==(e=this.options.experimental_stableServiceWorkerId)&&void 0!==e?e:n.join("-")));}else t=t.replace(y,"");return t;},t.prototype.serviceWorkerHandshake=function(){var e=this,t=new MessageChannel,n=this.iframe.contentWindow;if(!n)throw Error("Could not get iframe contentWindow");var i=t.port1;i.onmessage=function(t){if("object"==typeof t.data&&t.data.$channel===x)switch(t.data.$type){case"preview/ready":break;case"preview/request":e.handleWorkerRequest(t.data,i);}};var r=function(){n.postMessage({$channel:x,$type:"preview/init"},"*",[t.port2]),e.iframe.removeEventListener("load",r);};this.iframe.addEventListener("load",r);},t.prototype.handleWorkerRequest=function(e,t){return(0,r._)(this,void 0,void 0,function(){var n,i,o,s,a,c,d,u;return(0,r.a)(this,function(r){switch(r.label){case 0:n=function(){var n={$channel:x,$type:"preview/response",id:e.id,headers:{"Content-Type":"text/html; charset=utf-8"},status:404,body:"File not found"};t.postMessage(n);},r.label=1;case 1:if(r.trys.push([1,4,,5]),i=new URL(e.url,this.bundlerURL).pathname,o={},s=this.getFiles()[i])return[3,3];return[4,this.getTranspiledFiles()];case 2:if(!(s=r.sent().find(function(e){return e.path.endsWith(i);})))return n(),[2];r.label=3;case 3:if(a=s.code,!o["Content-Type"]){var p;c=(p=i.split(".")).length<=1?"":p[p.length-1],(d=l.get(c))&&(o["Content-Type"]=d);}return u={$channel:x,$type:"preview/response",id:e.id,headers:o,status:200,body:a},t.postMessage(u),[3,5];case 4:return console.error(r.sent()),n(),[3,5];case 5:return[2];}});});},t.prototype.setLocationURLIntoIFrame=function(){var e,t=this.options.startRoute?new URL(this.options.startRoute,this.bundlerURL).toString():this.bundlerURL;null===(e=this.iframe.contentWindow)||void 0===e||e.location.replace(t),this.iframe.src=t;},t.prototype.destroy=function(){this.unsubscribeChannelListener(),this.unsubscribeGlobalListener(),this.iframeProtocol.cleanup();},t.prototype.updateOptions=function(e){(0,o.dequal)(this.options,e)||(this.options=e,this.updateSandbox());},t.prototype.updateSandbox=function(e,t){void 0===e&&(e=this.sandboxSetup),this.sandboxSetup=(0,r.h)((0,r.h)({},this.sandboxSetup),e);var n,i,o,s,a=this.getFiles(),c=Object.keys(a).reduce(function(e,t){var n;return(0,r.h)((0,r.h)({},e),((n={})[t]={code:a[t].code,path:t},n));},{}),d=JSON.parse((0,r.b)(this.sandboxSetup.dependencies,this.sandboxSetup.devDependencies,this.sandboxSetup.entry));try{d=JSON.parse(a["/package.json"].code);}catch(e){console.error((0,r.c)("could not parse package.json file: "+e.message));}var l=Object.keys(a).reduce(function(e,t){var n;return(0,r.h)((0,r.h)({},e),((n={})[t]={content:a[t].code,path:t},n));},{});this.dispatch((0,r.h)((0,r.h)({},this.options),{type:"compile",codesandbox:!0,version:3,isInitializationCompile:t,modules:c,reactDevTools:this.options.reactDevTools,externalResources:this.options.externalResources||[],hasFileResolver:!!this.options.fileResolver,disableDependencyPreprocessing:this.sandboxSetup.disableDependencyPreprocessing,experimental_enableServiceWorker:this.options.experimental_enableServiceWorker,template:this.sandboxSetup.template||function(e,t){if(!e)return"static";var n=e.dependencies,i=void 0===n?{}:n,o=e.devDependencies,s=(0,r.i)((0,r.i)([],Object.keys(i),!0),Object.keys(void 0===o?{}:o),!0),a=Object.keys(t),c=["@adonisjs/framework","@adonisjs/core"];if(s.some(function(e){return c.indexOf(e)>-1;}))return"adonis";var d=["nuxt","nuxt-edge","nuxt-ts","nuxt-ts-edge","nuxt3"];if(s.some(function(e){return d.indexOf(e)>-1;}))return"nuxt";if(s.indexOf("next")>-1)return"next";var l=["apollo-server","apollo-server-express","apollo-server-hapi","apollo-server-koa","apollo-server-lambda","apollo-server-micro"];if(s.some(function(e){return l.indexOf(e)>-1;}))return"apollo";if(s.indexOf("mdx-deck")>-1)return"mdx-deck";if(s.indexOf("gridsome")>-1)return"gridsome";if(s.indexOf("vuepress")>-1)return"vuepress";if(s.indexOf("ember-cli")>-1)return"ember";if(s.indexOf("sapper")>-1)return"sapper";if(s.indexOf("gatsby")>-1)return"gatsby";if(s.indexOf("quasar")>-1)return"quasar";if(s.indexOf("@docusaurus/core")>-1)return"docusaurus";if(s.indexOf("remix")>-1)return"remix";if(s.indexOf("astro")>-1)return"node";if(a.some(function(e){return e.endsWith(".re");}))return"reason";var u=["parcel-bundler","parcel"];if(s.some(function(e){return u.indexOf(e)>-1;}))return"parcel";var p=["@dojo/core","@dojo/framework"];if(s.some(function(e){return p.indexOf(e)>-1;}))return"@dojo/cli-create-app";if(s.indexOf("@nestjs/core")>-1||s.indexOf("@nestjs/common")>-1)return"nest";if(s.indexOf("react-styleguidist")>-1)return"styleguidist";if(s.indexOf("react-scripts")>-1)return"create-react-app";if(s.indexOf("react-scripts-ts")>-1)return"create-react-app-typescript";if(s.indexOf("@angular/core")>-1)return"angular-cli";if(s.indexOf("preact-cli")>-1)return"preact-cli";if(s.indexOf("@sveltech/routify")>-1||s.indexOf("@roxi/routify")>-1||s.indexOf("vite")>-1||s.indexOf("@frontity/core")>-1)return"node";if(s.indexOf("svelte")>-1)return"svelte";if(s.indexOf("vue")>-1)return"vue-cli";if(s.indexOf("cx")>-1)return"cxjs";var h=["express","koa","nodemon","ts-node","@tensorflow/tfjs-node","webpack-dev-server","snowpack"];if(s.some(function(e){return h.indexOf(e)>-1;})||Object.keys(i).length>=50)return"node";}(d,l),showOpenInCodeSandbox:null===(n=this.options.showOpenInCodeSandbox)||void 0===n||n,showErrorScreen:null===(i=this.options.showErrorScreen)||void 0===i||i,showLoadingScreen:null!==(o=this.options.showLoadingScreen)&&void 0!==o&&o,skipEval:this.options.skipEval||!1,clearConsoleDisabled:!this.options.clearConsoleOnFirstCompile,logLevel:null!==(s=this.options.logLevel)&&void 0!==s?s:r.S.Info,customNpmRegistries:this.options.customNpmRegistries,teamId:this.options.teamId,sandboxId:this.options.sandboxId}));},t.prototype.dispatch=function(e){"refresh"===e.type&&(this.setLocationURLIntoIFrame(),this.options.experimental_enableServiceWorker&&this.serviceWorkerHandshake()),this.iframeProtocol.dispatch(e);},t.prototype.listen=function(e){return this.iframeProtocol.channelListen(e);},t.prototype.getCodeSandboxURL=function(){var e=this.getFiles();return fetch("https://codesandbox.io/api/v1/sandboxes/define?json=1",{method:"POST",body:JSON.stringify({files:Object.keys(e).reduce(function(t,n){var i;return(0,r.h)((0,r.h)({},t),((i={})[n.replace("/","")]={content:e[n].code,isBinary:!1},i));},{})}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json();}).then(function(e){return{sandboxId:e.sandbox_id,editorUrl:"https://codesandbox.io/s/".concat(e.sandbox_id),embedUrl:"https://codesandbox.io/embed/".concat(e.sandbox_id)};});},t.prototype.getFiles=function(){var e=this.sandboxSetup;return void 0===e.files["/package.json"]?(0,r.d)(e.files,e.dependencies,e.devDependencies,e.entry):this.sandboxSetup.files;},t.prototype.initializeElement=function(){this.iframe.style.border="0",this.iframe.style.width=this.options.width||"100%",this.iframe.style.height=this.options.height||"100%",this.iframe.style.overflow="hidden",(0,r.n)(this.element.parentNode,"The given iframe does not have a parent."),this.element.parentNode.replaceChild(this.iframe,this.element);},t;}(s.S);}}]);