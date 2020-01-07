window.waveorb=function(){"use strict";function e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function t(e,t,r,n,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,o)}function r(e){return function(){var r=this,n=arguments;return new Promise(function(o,i){function a(e){t(c,o,i,a,s,"next",e)}function s(e){t(c,o,i,a,s,"throw",e)}var c=e.apply(r,n);a(void 0)})}}function n(e){return"[object Array]"===J.call(e)}function o(e){return"[object ArrayBuffer]"===J.call(e)}function i(e){return"undefined"!=typeof FormData&&e instanceof FormData}function a(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function s(e){return"string"==typeof e}function c(e){return"number"==typeof e}function u(e){return void 0===e}function f(e){return null!==e&&"object"==typeof e}function l(e){return"[object Date]"===J.call(e)}function p(e){return"[object File]"===J.call(e)}function h(e){return"[object Blob]"===J.call(e)}function d(e){return"[object Function]"===J.call(e)}function y(e){return f(e)&&d(e.pipe)}function m(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function v(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function g(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function w(e,t){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),n(e))for(var r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function b(){function e(e,r){"object"==typeof t[r]&&"object"==typeof e?t[r]=b(t[r],e):t[r]=e}for(var t={},r=0,n=arguments.length;r<n;r++)w(arguments[r],e);return t}function x(){function e(e,r){"object"==typeof t[r]&&"object"==typeof e?t[r]=x(t[r],e):t[r]="object"==typeof e?x({},e):e}for(var t={},r=0,n=arguments.length;r<n;r++)w(arguments[r],e);return t}function O(e,t,r){return w(t,function(t,n){e[n]=r&&"function"==typeof t?H(t,r):t}),e}function E(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function S(){this.handlers=[]}function j(e,t){!X.isUndefined(e)&&X.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function k(e){e.cancelToken&&e.cancelToken.throwIfRequested()}function L(e){this.defaults=e,this.interceptors={request:new K,response:new K}}function P(e){this.message=e}function N(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new me(e),t(r.reason))})}function R(e){var t=new ye(e),r=H(ye.prototype.request,t);return X.extend(r,ye.prototype,t),X.extend(r,t),r}function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(r,!0).forEach(function(t){B(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(r,!0).forEach(function(t){B(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var B=e,U="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},_=null;"undefined"!=typeof WebSocket?_=WebSocket:"undefined"!=typeof MozWebSocket?_=MozWebSocket:void 0!==U?_=U.WebSocket||U.MozWebSocket:"undefined"!=typeof window?_=window.WebSocket||window.MozWebSocket:"undefined"!=typeof self&&(_=self.WebSocket||self.MozWebSocket);var q=_;const F=["open","message","close","error"];class z{constructor(e,t={}){this.events={};for(const e of F)this.events[e]=[],this[e]=this[e].bind(this);this.url=e||"ws://localhost:6000",void 0!==t.reconnect&&!0!==t.reconnect||(t.reconnect=1e3),this.options=t,this.callbacks={},this.callbackId=0,this.connect()}get readyState(){return this.socket?this.socket.readyState:-1}listeners(e){if(this.socket)for(const t of F)this.socket[`${e}EventListener`](t,this[t]),"remove"===e&&(this.events[t]=[])}on(e,t){this.events[e].push(t)}connect(){this.readyState>0&&this.disconnect(),this.socket=new q(this.url),this.listeners("add")}reconnect(){this.options.reconnect&&setTimeout(()=>{this.connect()},this.options.reconnect)}disconnect(e=1e3){this.socket.close(e)}emit(e,...t){for(const r of this.events[e])r(...t)}message(e){const t=JSON.parse(e.data),r=this.getCallback(t);r?r(t,e):this.emit("message",t,e)}open(e){this.emit("open",e)}close(e){this.listeners("remove"),this.emit("close",e),1e3!==e.code&&this.reconnect()}error(e){this.listeners("remove"),this.emit("error",e),3===this.readyState&&this.reconnect()}send(e){1===this.readyState&&this.socket.send(JSON.stringify(e))}fetch(e,t){if(1===this.readyState)return new Promise(r=>{this.addCallback(e,t||(e=>{r(e)}));this.send(e)})}addCallback(e,t){const r=++this.callbackId;e.$cbid=r,this.callbacks[r]=t}getCallback(e){const t=e.$cbid;if(t){delete e.$cbid;const r=this.callbacks[t];if(r)return delete this.callbacks[t],r}}}var M=z,I=function(e,t){return new M(e,t)},W=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(e){var t=function(e){function t(e,t,r,o){var i=t&&t.prototype instanceof n?t:n,a=Object.create(i.prototype),s=new p(o||[]);return a._invoke=c(e,r,s),a}function r(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function n(){}function o(){}function i(){}function a(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function s(e){function t(n,o,i,a){var s=r(e[n],e,o);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&v.call(u,"__await")?Promise.resolve(u.__await).then(function(e){t("next",e,i,a)},function(e){t("throw",e,i,a)}):Promise.resolve(u).then(function(e){c.value=e,i(c)},function(e){return t("throw",e,i,a)})}a(s.arg)}function n(e,r){function n(){return new Promise(function(n,o){t(e,r,n,o)})}return o=o?o.then(n,n):n()}var o;this._invoke=n}function c(e,t,n){var o=O;return function(i,a){if(o===S)throw new Error("Generator is already running");if(o===j){if("throw"===i)throw a;return d()}for(n.method=i,n.arg=a;;){var s=n.delegate;if(s){var c=u(s,n);if(c){if(c===k)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===O)throw o=j,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=S;var f=r(e,t,n);if("normal"===f.type){if(o=n.done?j:E,f.arg===k)continue;return{value:f.arg,done:n.done}}"throw"===f.type&&(o=j,n.method="throw",n.arg=f.arg)}}}function u(e,t){var n=e.iterator[t.method];if(n===y){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=y,u(e,t),"throw"===t.method))return k;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return k}var o=r(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,k;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=y),t.delegate=null,k):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,k)}function f(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function l(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function p(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(f,this),this.reset(!0)}function h(e){if(e){var t=e[w];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(v.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=y,t.done=!0,t};return n.next=n}}return{next:d}}function d(){return{value:y,done:!0}}var y,m=Object.prototype,v=m.hasOwnProperty,g="function"==typeof Symbol?Symbol:{},w=g.iterator||"@@iterator",b=g.asyncIterator||"@@asyncIterator",x=g.toStringTag||"@@toStringTag";e.wrap=t;var O="suspendedStart",E="suspendedYield",S="executing",j="completed",k={},L={};L[w]=function(){return this};var P=Object.getPrototypeOf,N=P&&P(P(h([])));N&&N!==m&&v.call(N,w)&&(L=N);var R=i.prototype=n.prototype=Object.create(L);return o.prototype=R.constructor=i,i.constructor=o,i[x]=o.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===o||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,i):(e.__proto__=i,x in e||(e[x]="GeneratorFunction")),e.prototype=Object.create(R),e},e.awrap=function(e){return{__await:e}},a(s.prototype),s.prototype[b]=function(){return this},e.AsyncIterator=s,e.async=function(r,n,o,i){var a=new s(t(r,n,o,i));return e.isGeneratorFunction(n)?a:a.next().then(function(e){return e.done?e.value:a.next()})},a(R),R[x]="Generator",R[w]=function(){return this},R.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=h,p.prototype={constructor:p,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.method="next",this.arg=y,this.tryEntries.forEach(l),!e)for(var t in this)"t"===t.charAt(0)&&v.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=y)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){function t(t,n){return i.type="throw",i.arg=e,r.next=t,n&&(r.method="next",r.arg=y),!!n}if(this.done)throw e;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=v.call(o,"catchLoc"),s=v.call(o,"finallyLoc");if(a&&s){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&v.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,k):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),k},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),l(r),k}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;l(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:h(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=y),k}},e}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}}),G=r,H=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}},$=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},J=Object.prototype.toString,X={isArray:n,isArrayBuffer:o,isBuffer:$,isFormData:i,isArrayBufferView:a,isString:s,isNumber:c,isObject:f,isUndefined:u,isDate:l,isFile:p,isBlob:h,isFunction:d,isStream:y,isURLSearchParams:m,isStandardBrowserEnv:g,forEach:w,merge:b,deepMerge:x,extend:O,trim:v},V=function(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(X.isURLSearchParams(t))n=t.toString();else{var o=[];X.forEach(t,function(e,t){null!==e&&void 0!==e&&(X.isArray(e)?t+="[]":e=[e],X.forEach(e,function(e){X.isDate(e)?e=e.toISOString():X.isObject(e)&&(e=JSON.stringify(e)),o.push(E(t)+"="+E(e))}))}),n=o.join("&")}if(n){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e};S.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},S.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},S.prototype.forEach=function(e){X.forEach(this.handlers,function(t){null!==t&&e(t)})};var K=S,Y=function(e,t,r){return X.forEach(r,function(r){e=r(e,t)}),e},Q=function(e){return!(!e||!e.__CANCEL__)},Z=function(e,t){X.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})},ee=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},te=function(e,t,r,n,o){var i=new Error(e);return ee(i,t,r,n,o)},re=function(e,t,r){var n=r.config.validateStatus;!n||n(r.status)?e(r):t(te("Request failed with status code "+r.status,r.config,null,r.request,r))},ne=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],oe=function(e){var t,r,n,o={};return e?(X.forEach(e.split("\n"),function(e){if(n=e.indexOf(":"),t=X.trim(e.substr(0,n)).toLowerCase(),r=X.trim(e.substr(n+1)),t){if(o[t]&&ne.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([r]):o[t]?o[t]+", "+r:r}}),o):o},ie=X.isStandardBrowserEnv()?function(){function e(e){var t=e;return r&&(n.setAttribute("href",t),t=n.href),n.setAttribute("href",t),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}var t,r=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");return t=e(window.location.href),function(r){var n=X.isString(r)?e(r):r;return n.protocol===t.protocol&&n.host===t.host}}():function(){return function(){return!0}}(),ae=X.isStandardBrowserEnv()?function(){return{write:function(e,t,r,n,o,i){var a=[];a.push(e+"="+encodeURIComponent(t)),X.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),X.isString(n)&&a.push("path="+n),X.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),se=function(e){return new Promise(function(t,r){var n=e.data,o=e.headers;X.isFormData(n)&&delete o["Content-Type"];var i=new XMLHttpRequest;if(e.auth){var a=e.auth.username||"",s=e.auth.password||"";o.Authorization="Basic "+btoa(a+":"+s)}if(i.open(e.method.toUpperCase(),V(e.url,e.params,e.paramsSerializer),!0),i.timeout=e.timeout,i.onreadystatechange=function(){if(i&&4===i.readyState&&(0!==i.status||i.responseURL&&0===i.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in i?oe(i.getAllResponseHeaders()):null,o={data:e.responseType&&"text"!==e.responseType?i.response:i.responseText,status:i.status,statusText:i.statusText,headers:n,config:e,request:i};re(t,r,o),i=null}},i.onabort=function(){i&&(r(te("Request aborted",e,"ECONNABORTED",i)),i=null)},i.onerror=function(){r(te("Network Error",e,null,i)),i=null},i.ontimeout=function(){r(te("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",i)),i=null},X.isStandardBrowserEnv()){var c=ae,u=(e.withCredentials||ie(e.url))&&e.xsrfCookieName?c.read(e.xsrfCookieName):void 0;u&&(o[e.xsrfHeaderName]=u)}if("setRequestHeader"in i&&X.forEach(o,function(e,t){void 0===n&&"content-type"===t.toLowerCase()?delete o[t]:i.setRequestHeader(t,e)}),e.withCredentials&&(i.withCredentials=!0),e.responseType)try{i.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&i.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){i&&(i.abort(),r(e),i=null)}),void 0===n&&(n=null),i.send(n)})},ce={"Content-Type":"application/x-www-form-urlencoded"},ue={adapter:function(){var e;return"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process)?e=se:"undefined"!=typeof XMLHttpRequest&&(e=se),e}(),transformRequest:[function(e,t){return Z(t,"Accept"),Z(t,"Content-Type"),X.isFormData(e)||X.isArrayBuffer(e)||X.isBuffer(e)||X.isStream(e)||X.isFile(e)||X.isBlob(e)?e:X.isArrayBufferView(e)?e.buffer:X.isURLSearchParams(e)?(j(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):X.isObject(e)?(j(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};ue.headers={common:{Accept:"application/json, text/plain, */*"}},X.forEach(["delete","get","head"],function(e){ue.headers[e]={}}),X.forEach(["post","put","patch"],function(e){ue.headers[e]=X.merge(ce)});var fe=ue,le=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},pe=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},he=function(e){return k(e),e.baseURL&&!le(e.url)&&(e.url=pe(e.baseURL,e.url)),e.headers=e.headers||{},e.data=Y(e.data,e.headers,e.transformRequest),e.headers=X.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),X.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||fe.adapter)(e).then(function(t){return k(e),t.data=Y(t.data,t.headers,e.transformResponse),t},function(t){return Q(t)||(k(e),t&&t.response&&(t.response.data=Y(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})},de=function(e,t){t=t||{};var r={};return X.forEach(["url","method","params","data"],function(e){void 0!==t[e]&&(r[e]=t[e])}),X.forEach(["headers","auth","proxy"],function(n){X.isObject(t[n])?r[n]=X.deepMerge(e[n],t[n]):void 0!==t[n]?r[n]=t[n]:X.isObject(e[n])?r[n]=X.deepMerge(e[n]):void 0!==e[n]&&(r[n]=e[n])}),X.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function(n){void 0!==t[n]?r[n]=t[n]:void 0!==e[n]&&(r[n]=e[n])}),r};L.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=de(this.defaults,e)).method=e.method?e.method.toLowerCase():"get";var t=[he,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},L.prototype.getUri=function(e){return e=de(this.defaults,e),V(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},X.forEach(["delete","get","head","options"],function(e){L.prototype[e]=function(t,r){return this.request(X.merge(r||{},{method:e,url:t}))}}),X.forEach(["post","put","patch"],function(e){L.prototype[e]=function(t,r,n){return this.request(X.merge(n||{},{method:e,url:t,data:r}))}});var ye=L;P.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},P.prototype.__CANCEL__=!0;var me=P;N.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},N.source=function(){var e;return{token:new N(function(t){e=t}),cancel:e}};var ve=N,ge=function(e){return function(t){return e.apply(null,t)}},we=R(fe);we.Axios=ye,we.create=function(e){return R(de(we.defaults,e))},we.Cancel=me,we.CancelToken=ve,we.isCancel=Q,we.all=function(e){return Promise.all(e)},we.spread=ge;var be=we,xe=we;be.default=xe;var Oe=be,Ee="object"==typeof self?self.FormData:window.FormData,Se=function(e,t,r,n){function o(){var e=s.files,o=!0,a=!1,c=void 0;try{for(var u,f=e[Symbol.iterator]();!(o=(u=f.next()).done);o=!0){var l=u.value;i.append("file",l,l.name)}}catch(e){a=!0,c=e}finally{try{o||null==f.return||f.return()}finally{if(a)throw c}}"function"==typeof t.progress&&(r.onUploadProgress=function(e){e.percent=Math.round(100*e.loaded/e.total),t.progress(e)}),n(i)}var i=new Ee;for(var a in e)i.append(a,e[a]);r.headers=T({},r.headers);var s=document.createElement("input");s.type="file",s.value="",t.multiple&&(s.multiple=!0),t.accept&&(s.accept=t.accept),s.addEventListener("change",o),s.click()},je=function(e,t){function r(e){return n.apply(this,arguments)}function n(){return(n=G(W.mark(function t(r){var n,o=arguments;return W.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:{},t.next=3,Oe.post(e,r,n);case 3:return t.abrupt("return",t.sent.data);case 4:case"end":return t.stop()}},t)}))).apply(this,arguments)}return{fetch:r,upload:function(){function e(e){return t.apply(this,arguments)}var t=G(W.mark(function e(t){var n,o,i=arguments;return W.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{},o=i.length>2&&void 0!==i[2]?i[2]:{},e.abrupt("return",new Promise(function(e){Se(t,n,o,function(){var t=G(W.mark(function t(n){return W.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,r(n,o);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}));case 3:case"end":return e.stop()}},e)}));return e}()}};return function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return"http"===(0===e.indexOf("ws")?"ws":"http")?je(e):I(e,D({reconnect:!0,ping:3e3}))}}();
