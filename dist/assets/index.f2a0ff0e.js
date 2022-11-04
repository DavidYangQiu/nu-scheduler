function h0(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}const f0=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};f0();function p0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var x={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hs=Symbol.for("react.element"),m0=Symbol.for("react.portal"),g0=Symbol.for("react.fragment"),_0=Symbol.for("react.strict_mode"),y0=Symbol.for("react.profiler"),v0=Symbol.for("react.provider"),w0=Symbol.for("react.context"),E0=Symbol.for("react.forward_ref"),C0=Symbol.for("react.suspense"),S0=Symbol.for("react.memo"),I0=Symbol.for("react.lazy"),_h=Symbol.iterator;function T0(t){return t===null||typeof t!="object"?null:(t=_h&&t[_h]||t["@@iterator"],typeof t=="function"?t:null)}var am={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},um=Object.assign,cm={};function Yr(t,e,n){this.props=t,this.context=e,this.refs=cm,this.updater=n||am}Yr.prototype.isReactComponent={};Yr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Yr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function dm(){}dm.prototype=Yr.prototype;function gc(t,e,n){this.props=t,this.context=e,this.refs=cm,this.updater=n||am}var _c=gc.prototype=new dm;_c.constructor=gc;um(_c,Yr.prototype);_c.isPureReactComponent=!0;var yh=Array.isArray,hm=Object.prototype.hasOwnProperty,yc={current:null},fm={key:!0,ref:!0,__self:!0,__source:!0};function pm(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)hm.call(e,r)&&!fm.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:hs,type:t,key:s,ref:o,props:i,_owner:yc.current}}function k0(t,e){return{$$typeof:hs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vc(t){return typeof t=="object"&&t!==null&&t.$$typeof===hs}function R0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vh=/\/+/g;function Yl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?R0(""+t.key):e.toString(36)}function Qs(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case hs:case m0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Yl(o,0):r,yh(i)?(n="",t!=null&&(n=t.replace(vh,"$&/")+"/"),Qs(i,e,n,"",function(u){return u})):i!=null&&(vc(i)&&(i=k0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(vh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",yh(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Yl(s,l);o+=Qs(s,e,n,a,i)}else if(a=T0(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Yl(s,l++),o+=Qs(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ps(t,e,n){if(t==null)return t;var r=[],i=0;return Qs(t,r,"","",function(s){return e.call(n,s,i++)}),r}function N0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ae={current:null},Ys={transition:null},P0={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:Ys,ReactCurrentOwner:yc};z.Children={map:Ps,forEach:function(t,e,n){Ps(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ps(t,function(){e++}),e},toArray:function(t){return Ps(t,function(e){return e})||[]},only:function(t){if(!vc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};z.Component=Yr;z.Fragment=g0;z.Profiler=y0;z.PureComponent=gc;z.StrictMode=_0;z.Suspense=C0;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P0;z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=um({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=yc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)hm.call(e,a)&&!fm.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:hs,type:t.type,key:i,ref:s,props:r,_owner:o}};z.createContext=function(t){return t={$$typeof:w0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:v0,_context:t},t.Consumer=t};z.createElement=pm;z.createFactory=function(t){var e=pm.bind(null,t);return e.type=t,e};z.createRef=function(){return{current:null}};z.forwardRef=function(t){return{$$typeof:E0,render:t}};z.isValidElement=vc;z.lazy=function(t){return{$$typeof:I0,_payload:{_status:-1,_result:t},_init:N0}};z.memo=function(t,e){return{$$typeof:S0,type:t,compare:e===void 0?null:e}};z.startTransition=function(t){var e=Ys.transition;Ys.transition={};try{t()}finally{Ys.transition=e}};z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};z.useCallback=function(t,e){return Ae.current.useCallback(t,e)};z.useContext=function(t){return Ae.current.useContext(t)};z.useDebugValue=function(){};z.useDeferredValue=function(t){return Ae.current.useDeferredValue(t)};z.useEffect=function(t,e){return Ae.current.useEffect(t,e)};z.useId=function(){return Ae.current.useId()};z.useImperativeHandle=function(t,e,n){return Ae.current.useImperativeHandle(t,e,n)};z.useInsertionEffect=function(t,e){return Ae.current.useInsertionEffect(t,e)};z.useLayoutEffect=function(t,e){return Ae.current.useLayoutEffect(t,e)};z.useMemo=function(t,e){return Ae.current.useMemo(t,e)};z.useReducer=function(t,e,n){return Ae.current.useReducer(t,e,n)};z.useRef=function(t){return Ae.current.useRef(t)};z.useState=function(t){return Ae.current.useState(t)};z.useSyncExternalStore=function(t,e,n){return Ae.current.useSyncExternalStore(t,e,n)};z.useTransition=function(){return Ae.current.useTransition()};z.version="18.2.0";(function(t){t.exports=z})(x);const mm=p0(x.exports),Va=h0({__proto__:null,default:mm},[x.exports]);var Ha={},gm={exports:{}},Ke={},_m={exports:{}},ym={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,b){var M=P.length;P.push(b);e:for(;0<M;){var ie=M-1>>>1,ce=P[ie];if(0<i(ce,b))P[ie]=b,P[M]=ce,M=ie;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var b=P[0],M=P.pop();if(M!==b){P[0]=M;e:for(var ie=0,ce=P.length,Rs=ce>>>1;ie<Rs;){var Rn=2*(ie+1)-1,Ql=P[Rn],Nn=Rn+1,Ns=P[Nn];if(0>i(Ql,M))Nn<ce&&0>i(Ns,Ql)?(P[ie]=Ns,P[Nn]=M,ie=Nn):(P[ie]=Ql,P[Rn]=M,ie=Rn);else if(Nn<ce&&0>i(Ns,M))P[ie]=Ns,P[Nn]=M,ie=Nn;else break e}}return b}function i(P,b){var M=P.sortIndex-b.sortIndex;return M!==0?M:P.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,d=null,h=3,p=!1,_=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var b=n(u);b!==null;){if(b.callback===null)r(u);else if(b.startTime<=P)r(u),b.sortIndex=b.expirationTime,e(a,b);else break;b=n(u)}}function v(P){if(y=!1,g(P),!_)if(n(a)!==null)_=!0,Kl(T);else{var b=n(u);b!==null&&Gl(v,b.startTime-P)}}function T(P,b){_=!1,y&&(y=!1,m(I),I=-1),p=!0;var M=h;try{for(g(b),d=n(a);d!==null&&(!(d.expirationTime>b)||P&&!Ne());){var ie=d.callback;if(typeof ie=="function"){d.callback=null,h=d.priorityLevel;var ce=ie(d.expirationTime<=b);b=t.unstable_now(),typeof ce=="function"?d.callback=ce:d===n(a)&&r(a),g(b)}else r(a);d=n(a)}if(d!==null)var Rs=!0;else{var Rn=n(u);Rn!==null&&Gl(v,Rn.startTime-b),Rs=!1}return Rs}finally{d=null,h=M,p=!1}}var C=!1,S=null,I=-1,j=5,D=-1;function Ne(){return!(t.unstable_now()-D<j)}function ur(){if(S!==null){var P=t.unstable_now();D=P;var b=!0;try{b=S(!0,P)}finally{b?kn():(C=!1,S=null)}}else C=!1}var kn;if(typeof f=="function")kn=function(){f(ur)};else if(typeof MessageChannel<"u"){var gh=new MessageChannel,d0=gh.port2;gh.port1.onmessage=ur,kn=function(){d0.postMessage(null)}}else kn=function(){k(ur,0)};function Kl(P){S=P,C||(C=!0,kn())}function Gl(P,b){I=k(function(){P(t.unstable_now())},b)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,Kl(T))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var b=3;break;default:b=h}var M=h;h=b;try{return P()}finally{h=M}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,b){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var M=h;h=P;try{return b()}finally{h=M}},t.unstable_scheduleCallback=function(P,b,M){var ie=t.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?ie+M:ie):M=ie,P){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=M+ce,P={id:c++,callback:b,priorityLevel:P,startTime:M,expirationTime:ce,sortIndex:-1},M>ie?(P.sortIndex=M,e(u,P),n(a)===null&&P===n(u)&&(y?(m(I),I=-1):y=!0,Gl(v,M-ie))):(P.sortIndex=ce,e(a,P),_||p||(_=!0,Kl(T))),P},t.unstable_shouldYield=Ne,t.unstable_wrapCallback=function(P){var b=h;return function(){var M=h;h=b;try{return P.apply(this,arguments)}finally{h=M}}}})(ym);(function(t){t.exports=ym})(_m);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm=x.exports,qe=_m.exports;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wm=new Set,Fi={};function ir(t,e){Fr(t,e),Fr(t+"Capture",e)}function Fr(t,e){for(Fi[t]=e,t=0;t<e.length;t++)wm.add(e[t])}var Ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qa=Object.prototype.hasOwnProperty,x0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wh={},Eh={};function O0(t){return qa.call(Eh,t)?!0:qa.call(wh,t)?!1:x0.test(t)?Eh[t]=!0:(wh[t]=!0,!1)}function A0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function D0(t,e,n,r){if(e===null||typeof e>"u"||A0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function De(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ee[t]=new De(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ee[e]=new De(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ee[t]=new De(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ee[t]=new De(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ee[t]=new De(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ee[t]=new De(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ee[t]=new De(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ee[t]=new De(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ee[t]=new De(t,5,!1,t.toLowerCase(),null,!1,!1)});var wc=/[\-:]([a-z])/g;function Ec(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wc,Ec);Ee[e]=new De(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wc,Ec);Ee[e]=new De(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wc,Ec);Ee[e]=new De(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ee[t]=new De(t,1,!1,t.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ee[t]=new De(t,1,!1,t.toLowerCase(),null,!0,!0)});function Cc(t,e,n,r){var i=Ee.hasOwnProperty(e)?Ee[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(D0(e,n,i,r)&&(n=null),r||i===null?O0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ht=vm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xs=Symbol.for("react.element"),hr=Symbol.for("react.portal"),fr=Symbol.for("react.fragment"),Sc=Symbol.for("react.strict_mode"),Ka=Symbol.for("react.profiler"),Em=Symbol.for("react.provider"),Cm=Symbol.for("react.context"),Ic=Symbol.for("react.forward_ref"),Ga=Symbol.for("react.suspense"),Qa=Symbol.for("react.suspense_list"),Tc=Symbol.for("react.memo"),Qt=Symbol.for("react.lazy"),Sm=Symbol.for("react.offscreen"),Ch=Symbol.iterator;function oi(t){return t===null||typeof t!="object"?null:(t=Ch&&t[Ch]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Object.assign,Xl;function yi(t){if(Xl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xl=e&&e[1]||""}return`
`+Xl+t}var Jl=!1;function Zl(t,e){if(!t||Jl)return"";Jl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Jl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?yi(t):""}function b0(t){switch(t.tag){case 5:return yi(t.type);case 16:return yi("Lazy");case 13:return yi("Suspense");case 19:return yi("SuspenseList");case 0:case 2:case 15:return t=Zl(t.type,!1),t;case 11:return t=Zl(t.type.render,!1),t;case 1:return t=Zl(t.type,!0),t;default:return""}}function Ya(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fr:return"Fragment";case hr:return"Portal";case Ka:return"Profiler";case Sc:return"StrictMode";case Ga:return"Suspense";case Qa:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Cm:return(t.displayName||"Context")+".Consumer";case Em:return(t._context.displayName||"Context")+".Provider";case Ic:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tc:return e=t.displayName||null,e!==null?e:Ya(t.type)||"Memo";case Qt:e=t._payload,t=t._init;try{return Ya(t(e))}catch{}}return null}function M0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ya(e);case 8:return e===Sc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Im(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function L0(t){var e=Im(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Os(t){t._valueTracker||(t._valueTracker=L0(t))}function Tm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Im(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ho(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xa(t,e){var n=e.checked;return ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Sh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=vn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function km(t,e){e=e.checked,e!=null&&Cc(t,"checked",e,!1)}function Ja(t,e){km(t,e);var n=vn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Za(t,e.type,n):e.hasOwnProperty("defaultValue")&&Za(t,e.type,vn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ih(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Za(t,e,n){(e!=="number"||ho(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var vi=Array.isArray;function Tr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+vn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function eu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Th(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(vi(n)){if(1<n.length)throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:vn(n)}}function Rm(t,e){var n=vn(e.value),r=vn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function kh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Nm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Nm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var As,Pm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(As=As||document.createElement("div"),As.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=As.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ui(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ci={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},F0=["Webkit","ms","Moz","O"];Object.keys(Ci).forEach(function(t){F0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ci[e]=Ci[t]})});function xm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ci.hasOwnProperty(t)&&Ci[t]?(""+e).trim():e+"px"}function Om(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var U0=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nu(t,e){if(e){if(U0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function ru(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var iu=null;function kc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var su=null,kr=null,Rr=null;function Rh(t){if(t=ms(t)){if(typeof su!="function")throw Error(w(280));var e=t.stateNode;e&&(e=hl(e),su(t.stateNode,t.type,e))}}function Am(t){kr?Rr?Rr.push(t):Rr=[t]:kr=t}function Dm(){if(kr){var t=kr,e=Rr;if(Rr=kr=null,Rh(t),e)for(t=0;t<e.length;t++)Rh(e[t])}}function bm(t,e){return t(e)}function Mm(){}var ea=!1;function Lm(t,e,n){if(ea)return t(e,n);ea=!0;try{return bm(t,e,n)}finally{ea=!1,(kr!==null||Rr!==null)&&(Mm(),Dm())}}function zi(t,e){var n=t.stateNode;if(n===null)return null;var r=hl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var ou=!1;if(Ut)try{var li={};Object.defineProperty(li,"passive",{get:function(){ou=!0}}),window.addEventListener("test",li,li),window.removeEventListener("test",li,li)}catch{ou=!1}function z0(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Si=!1,fo=null,po=!1,lu=null,j0={onError:function(t){Si=!0,fo=t}};function B0(t,e,n,r,i,s,o,l,a){Si=!1,fo=null,z0.apply(j0,arguments)}function $0(t,e,n,r,i,s,o,l,a){if(B0.apply(this,arguments),Si){if(Si){var u=fo;Si=!1,fo=null}else throw Error(w(198));po||(po=!0,lu=u)}}function sr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Fm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Nh(t){if(sr(t)!==t)throw Error(w(188))}function W0(t){var e=t.alternate;if(!e){if(e=sr(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Nh(i),t;if(s===r)return Nh(i),e;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function Um(t){return t=W0(t),t!==null?zm(t):null}function zm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=zm(t);if(e!==null)return e;t=t.sibling}return null}var jm=qe.unstable_scheduleCallback,Ph=qe.unstable_cancelCallback,V0=qe.unstable_shouldYield,H0=qe.unstable_requestPaint,se=qe.unstable_now,q0=qe.unstable_getCurrentPriorityLevel,Rc=qe.unstable_ImmediatePriority,Bm=qe.unstable_UserBlockingPriority,mo=qe.unstable_NormalPriority,K0=qe.unstable_LowPriority,$m=qe.unstable_IdlePriority,al=null,wt=null;function G0(t){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(al,t,void 0,(t.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:X0,Q0=Math.log,Y0=Math.LN2;function X0(t){return t>>>=0,t===0?32:31-(Q0(t)/Y0|0)|0}var Ds=64,bs=4194304;function wi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function go(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=wi(l):(s&=o,s!==0&&(r=wi(s)))}else o=n&~i,o!==0?r=wi(o):s!==0&&(r=wi(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-dt(e),i=1<<n,r|=t[n],e&=~i;return r}function J0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Z0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-dt(s),l=1<<o,a=i[o];a===-1?((l&n)===0||(l&r)!==0)&&(i[o]=J0(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function au(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Wm(){var t=Ds;return Ds<<=1,(Ds&4194240)===0&&(Ds=64),t}function ta(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-dt(e),t[e]=n}function ew(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-dt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Nc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-dt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var W=0;function Vm(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Hm,Pc,qm,Km,Gm,uu=!1,Ms=[],ln=null,an=null,un=null,ji=new Map,Bi=new Map,Jt=[],tw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xh(t,e){switch(t){case"focusin":case"focusout":ln=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":ji.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bi.delete(e.pointerId)}}function ai(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ms(e),e!==null&&Pc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function nw(t,e,n,r,i){switch(e){case"focusin":return ln=ai(ln,t,e,n,r,i),!0;case"dragenter":return an=ai(an,t,e,n,r,i),!0;case"mouseover":return un=ai(un,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ji.set(s,ai(ji.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Bi.set(s,ai(Bi.get(s)||null,t,e,n,r,i)),!0}return!1}function Qm(t){var e=Dn(t.target);if(e!==null){var n=sr(e);if(n!==null){if(e=n.tag,e===13){if(e=Fm(n),e!==null){t.blockedOn=e,Gm(t.priority,function(){qm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=cu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);iu=r,n.target.dispatchEvent(r),iu=null}else return e=ms(n),e!==null&&Pc(e),t.blockedOn=n,!1;e.shift()}return!0}function Oh(t,e,n){Xs(t)&&n.delete(e)}function rw(){uu=!1,ln!==null&&Xs(ln)&&(ln=null),an!==null&&Xs(an)&&(an=null),un!==null&&Xs(un)&&(un=null),ji.forEach(Oh),Bi.forEach(Oh)}function ui(t,e){t.blockedOn===e&&(t.blockedOn=null,uu||(uu=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,rw)))}function $i(t){function e(i){return ui(i,t)}if(0<Ms.length){ui(Ms[0],t);for(var n=1;n<Ms.length;n++){var r=Ms[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ln!==null&&ui(ln,t),an!==null&&ui(an,t),un!==null&&ui(un,t),ji.forEach(e),Bi.forEach(e),n=0;n<Jt.length;n++)r=Jt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Jt.length&&(n=Jt[0],n.blockedOn===null);)Qm(n),n.blockedOn===null&&Jt.shift()}var Nr=Ht.ReactCurrentBatchConfig,_o=!0;function iw(t,e,n,r){var i=W,s=Nr.transition;Nr.transition=null;try{W=1,xc(t,e,n,r)}finally{W=i,Nr.transition=s}}function sw(t,e,n,r){var i=W,s=Nr.transition;Nr.transition=null;try{W=4,xc(t,e,n,r)}finally{W=i,Nr.transition=s}}function xc(t,e,n,r){if(_o){var i=cu(t,e,n,r);if(i===null)da(t,e,r,yo,n),xh(t,r);else if(nw(i,t,e,n,r))r.stopPropagation();else if(xh(t,r),e&4&&-1<tw.indexOf(t)){for(;i!==null;){var s=ms(i);if(s!==null&&Hm(s),s=cu(t,e,n,r),s===null&&da(t,e,r,yo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else da(t,e,r,null,n)}}var yo=null;function cu(t,e,n,r){if(yo=null,t=kc(r),t=Dn(t),t!==null)if(e=sr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Fm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yo=t,null}function Ym(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q0()){case Rc:return 1;case Bm:return 4;case mo:case K0:return 16;case $m:return 536870912;default:return 16}default:return 16}}var rn=null,Oc=null,Js=null;function Xm(){if(Js)return Js;var t,e=Oc,n=e.length,r,i="value"in rn?rn.value:rn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Js=i.slice(t,1<r?1-r:void 0)}function Zs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ls(){return!0}function Ah(){return!1}function Ge(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ls:Ah,this.isPropagationStopped=Ah,this}return ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ls)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ls)},persist:function(){},isPersistent:Ls}),e}var Xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ac=Ge(Xr),ps=ee({},Xr,{view:0,detail:0}),ow=Ge(ps),na,ra,ci,ul=ee({},ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ci&&(ci&&t.type==="mousemove"?(na=t.screenX-ci.screenX,ra=t.screenY-ci.screenY):ra=na=0,ci=t),na)},movementY:function(t){return"movementY"in t?t.movementY:ra}}),Dh=Ge(ul),lw=ee({},ul,{dataTransfer:0}),aw=Ge(lw),uw=ee({},ps,{relatedTarget:0}),ia=Ge(uw),cw=ee({},Xr,{animationName:0,elapsedTime:0,pseudoElement:0}),dw=Ge(cw),hw=ee({},Xr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fw=Ge(hw),pw=ee({},Xr,{data:0}),bh=Ge(pw),mw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_w={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_w[t])?!!e[t]:!1}function Dc(){return yw}var vw=ee({},ps,{key:function(t){if(t.key){var e=mw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Zs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dc,charCode:function(t){return t.type==="keypress"?Zs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ww=Ge(vw),Ew=ee({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mh=Ge(Ew),Cw=ee({},ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dc}),Sw=Ge(Cw),Iw=ee({},Xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tw=Ge(Iw),kw=ee({},ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Rw=Ge(kw),Nw=[9,13,27,32],bc=Ut&&"CompositionEvent"in window,Ii=null;Ut&&"documentMode"in document&&(Ii=document.documentMode);var Pw=Ut&&"TextEvent"in window&&!Ii,Jm=Ut&&(!bc||Ii&&8<Ii&&11>=Ii),Lh=String.fromCharCode(32),Fh=!1;function Zm(t,e){switch(t){case"keyup":return Nw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function eg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var pr=!1;function xw(t,e){switch(t){case"compositionend":return eg(e);case"keypress":return e.which!==32?null:(Fh=!0,Lh);case"textInput":return t=e.data,t===Lh&&Fh?null:t;default:return null}}function Ow(t,e){if(pr)return t==="compositionend"||!bc&&Zm(t,e)?(t=Xm(),Js=Oc=rn=null,pr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Jm&&e.locale!=="ko"?null:e.data;default:return null}}var Aw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Aw[t.type]:e==="textarea"}function tg(t,e,n,r){Am(r),e=vo(e,"onChange"),0<e.length&&(n=new Ac("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ti=null,Wi=null;function Dw(t){hg(t,0)}function cl(t){var e=_r(t);if(Tm(e))return t}function bw(t,e){if(t==="change")return e}var ng=!1;if(Ut){var sa;if(Ut){var oa="oninput"in document;if(!oa){var zh=document.createElement("div");zh.setAttribute("oninput","return;"),oa=typeof zh.oninput=="function"}sa=oa}else sa=!1;ng=sa&&(!document.documentMode||9<document.documentMode)}function jh(){Ti&&(Ti.detachEvent("onpropertychange",rg),Wi=Ti=null)}function rg(t){if(t.propertyName==="value"&&cl(Wi)){var e=[];tg(e,Wi,t,kc(t)),Lm(Dw,e)}}function Mw(t,e,n){t==="focusin"?(jh(),Ti=e,Wi=n,Ti.attachEvent("onpropertychange",rg)):t==="focusout"&&jh()}function Lw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cl(Wi)}function Fw(t,e){if(t==="click")return cl(e)}function Uw(t,e){if(t==="input"||t==="change")return cl(e)}function zw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var mt=typeof Object.is=="function"?Object.is:zw;function Vi(t,e){if(mt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!qa.call(e,i)||!mt(t[i],e[i]))return!1}return!0}function Bh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $h(t,e){var n=Bh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bh(n)}}function ig(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ig(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function sg(){for(var t=window,e=ho();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ho(t.document)}return e}function Mc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jw(t){var e=sg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ig(n.ownerDocument.documentElement,n)){if(r!==null&&Mc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=$h(n,s);var o=$h(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Bw=Ut&&"documentMode"in document&&11>=document.documentMode,mr=null,du=null,ki=null,hu=!1;function Wh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hu||mr==null||mr!==ho(r)||(r=mr,"selectionStart"in r&&Mc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ki&&Vi(ki,r)||(ki=r,r=vo(du,"onSelect"),0<r.length&&(e=new Ac("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=mr)))}function Fs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gr={animationend:Fs("Animation","AnimationEnd"),animationiteration:Fs("Animation","AnimationIteration"),animationstart:Fs("Animation","AnimationStart"),transitionend:Fs("Transition","TransitionEnd")},la={},og={};Ut&&(og=document.createElement("div").style,"AnimationEvent"in window||(delete gr.animationend.animation,delete gr.animationiteration.animation,delete gr.animationstart.animation),"TransitionEvent"in window||delete gr.transitionend.transition);function dl(t){if(la[t])return la[t];if(!gr[t])return t;var e=gr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in og)return la[t]=e[n];return t}var lg=dl("animationend"),ag=dl("animationiteration"),ug=dl("animationstart"),cg=dl("transitionend"),dg=new Map,Vh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sn(t,e){dg.set(t,e),ir(e,[t])}for(var aa=0;aa<Vh.length;aa++){var ua=Vh[aa],$w=ua.toLowerCase(),Ww=ua[0].toUpperCase()+ua.slice(1);Sn($w,"on"+Ww)}Sn(lg,"onAnimationEnd");Sn(ag,"onAnimationIteration");Sn(ug,"onAnimationStart");Sn("dblclick","onDoubleClick");Sn("focusin","onFocus");Sn("focusout","onBlur");Sn(cg,"onTransitionEnd");Fr("onMouseEnter",["mouseout","mouseover"]);Fr("onMouseLeave",["mouseout","mouseover"]);Fr("onPointerEnter",["pointerout","pointerover"]);Fr("onPointerLeave",["pointerout","pointerover"]);ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ei));function Hh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,$0(r,e,void 0,t),t.currentTarget=null}function hg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Hh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Hh(i,l,u),s=a}}}if(po)throw t=lu,po=!1,lu=null,t}function Q(t,e){var n=e[_u];n===void 0&&(n=e[_u]=new Set);var r=t+"__bubble";n.has(r)||(fg(e,t,2,!1),n.add(r))}function ca(t,e,n){var r=0;e&&(r|=4),fg(n,t,r,e)}var Us="_reactListening"+Math.random().toString(36).slice(2);function Hi(t){if(!t[Us]){t[Us]=!0,wm.forEach(function(n){n!=="selectionchange"&&(Vw.has(n)||ca(n,!1,t),ca(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Us]||(e[Us]=!0,ca("selectionchange",!1,e))}}function fg(t,e,n,r){switch(Ym(e)){case 1:var i=iw;break;case 4:i=sw;break;default:i=xc}n=i.bind(null,e,n,t),i=void 0,!ou||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function da(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Dn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Lm(function(){var u=s,c=kc(n),d=[];e:{var h=dg.get(t);if(h!==void 0){var p=Ac,_=t;switch(t){case"keypress":if(Zs(n)===0)break e;case"keydown":case"keyup":p=ww;break;case"focusin":_="focus",p=ia;break;case"focusout":_="blur",p=ia;break;case"beforeblur":case"afterblur":p=ia;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=aw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Sw;break;case lg:case ag:case ug:p=dw;break;case cg:p=Tw;break;case"scroll":p=ow;break;case"wheel":p=Rw;break;case"copy":case"cut":case"paste":p=fw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Mh}var y=(e&4)!==0,k=!y&&t==="scroll",m=y?h!==null?h+"Capture":null:h;y=[];for(var f=u,g;f!==null;){g=f;var v=g.stateNode;if(g.tag===5&&v!==null&&(g=v,m!==null&&(v=zi(f,m),v!=null&&y.push(qi(f,v,g)))),k)break;f=f.return}0<y.length&&(h=new p(h,_,null,n,c),d.push({event:h,listeners:y}))}}if((e&7)===0){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==iu&&(_=n.relatedTarget||n.fromElement)&&(Dn(_)||_[zt]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=u,_=_?Dn(_):null,_!==null&&(k=sr(_),_!==k||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(y=Dh,v="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=Mh,v="onPointerLeave",m="onPointerEnter",f="pointer"),k=p==null?h:_r(p),g=_==null?h:_r(_),h=new y(v,f+"leave",p,n,c),h.target=k,h.relatedTarget=g,v=null,Dn(c)===u&&(y=new y(m,f+"enter",_,n,c),y.target=g,y.relatedTarget=k,v=y),k=v,p&&_)t:{for(y=p,m=_,f=0,g=y;g;g=cr(g))f++;for(g=0,v=m;v;v=cr(v))g++;for(;0<f-g;)y=cr(y),f--;for(;0<g-f;)m=cr(m),g--;for(;f--;){if(y===m||m!==null&&y===m.alternate)break t;y=cr(y),m=cr(m)}y=null}else y=null;p!==null&&qh(d,h,p,y,!1),_!==null&&k!==null&&qh(d,k,_,y,!0)}}e:{if(h=u?_r(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var T=bw;else if(Uh(h))if(ng)T=Uw;else{T=Lw;var C=Mw}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=Fw);if(T&&(T=T(t,u))){tg(d,T,n,c);break e}C&&C(t,h,u),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Za(h,"number",h.value)}switch(C=u?_r(u):window,t){case"focusin":(Uh(C)||C.contentEditable==="true")&&(mr=C,du=u,ki=null);break;case"focusout":ki=du=mr=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,Wh(d,n,c);break;case"selectionchange":if(Bw)break;case"keydown":case"keyup":Wh(d,n,c)}var S;if(bc)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else pr?Zm(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Jm&&n.locale!=="ko"&&(pr||I!=="onCompositionStart"?I==="onCompositionEnd"&&pr&&(S=Xm()):(rn=c,Oc="value"in rn?rn.value:rn.textContent,pr=!0)),C=vo(u,I),0<C.length&&(I=new bh(I,t,null,n,c),d.push({event:I,listeners:C}),S?I.data=S:(S=eg(n),S!==null&&(I.data=S)))),(S=Pw?xw(t,n):Ow(t,n))&&(u=vo(u,"onBeforeInput"),0<u.length&&(c=new bh("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=S))}hg(d,e)})}function qi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=zi(t,n),s!=null&&r.unshift(qi(t,s,i)),s=zi(t,e),s!=null&&r.push(qi(t,s,i))),t=t.return}return r}function cr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=zi(n,s),a!=null&&o.unshift(qi(n,a,l))):i||(a=zi(n,s),a!=null&&o.push(qi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Hw=/\r\n?/g,qw=/\u0000|\uFFFD/g;function Kh(t){return(typeof t=="string"?t:""+t).replace(Hw,`
`).replace(qw,"")}function zs(t,e,n){if(e=Kh(e),Kh(t)!==e&&n)throw Error(w(425))}function wo(){}var fu=null,pu=null;function mu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gu=typeof setTimeout=="function"?setTimeout:void 0,Kw=typeof clearTimeout=="function"?clearTimeout:void 0,Gh=typeof Promise=="function"?Promise:void 0,Gw=typeof queueMicrotask=="function"?queueMicrotask:typeof Gh<"u"?function(t){return Gh.resolve(null).then(t).catch(Qw)}:gu;function Qw(t){setTimeout(function(){throw t})}function ha(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),$i(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);$i(e)}function cn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Qh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Jr=Math.random().toString(36).slice(2),vt="__reactFiber$"+Jr,Ki="__reactProps$"+Jr,zt="__reactContainer$"+Jr,_u="__reactEvents$"+Jr,Yw="__reactListeners$"+Jr,Xw="__reactHandles$"+Jr;function Dn(t){var e=t[vt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zt]||n[vt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Qh(t);t!==null;){if(n=t[vt])return n;t=Qh(t)}return e}t=n,n=t.parentNode}return null}function ms(t){return t=t[vt]||t[zt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _r(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function hl(t){return t[Ki]||null}var yu=[],yr=-1;function In(t){return{current:t}}function Y(t){0>yr||(t.current=yu[yr],yu[yr]=null,yr--)}function G(t,e){yr++,yu[yr]=t.current,t.current=e}var wn={},ke=In(wn),Ue=In(!1),Hn=wn;function Ur(t,e){var n=t.type.contextTypes;if(!n)return wn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ze(t){return t=t.childContextTypes,t!=null}function Eo(){Y(Ue),Y(ke)}function Yh(t,e,n){if(ke.current!==wn)throw Error(w(168));G(ke,e),G(Ue,n)}function pg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(w(108,M0(t)||"Unknown",i));return ee({},n,r)}function Co(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wn,Hn=ke.current,G(ke,t),G(Ue,Ue.current),!0}function Xh(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=pg(t,e,Hn),r.__reactInternalMemoizedMergedChildContext=t,Y(Ue),Y(ke),G(ke,t)):Y(Ue),G(Ue,n)}var Pt=null,fl=!1,fa=!1;function mg(t){Pt===null?Pt=[t]:Pt.push(t)}function Jw(t){fl=!0,mg(t)}function Tn(){if(!fa&&Pt!==null){fa=!0;var t=0,e=W;try{var n=Pt;for(W=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Pt=null,fl=!1}catch(i){throw Pt!==null&&(Pt=Pt.slice(t+1)),jm(Rc,Tn),i}finally{W=e,fa=!1}}return null}var vr=[],wr=0,So=null,Io=0,Ye=[],Xe=0,qn=null,Ot=1,At="";function Pn(t,e){vr[wr++]=Io,vr[wr++]=So,So=t,Io=e}function gg(t,e,n){Ye[Xe++]=Ot,Ye[Xe++]=At,Ye[Xe++]=qn,qn=t;var r=Ot;t=At;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var s=32-dt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ot=1<<32-dt(e)+i|n<<i|r,At=s+t}else Ot=1<<s|n<<i|r,At=t}function Lc(t){t.return!==null&&(Pn(t,1),gg(t,1,0))}function Fc(t){for(;t===So;)So=vr[--wr],vr[wr]=null,Io=vr[--wr],vr[wr]=null;for(;t===qn;)qn=Ye[--Xe],Ye[Xe]=null,At=Ye[--Xe],Ye[Xe]=null,Ot=Ye[--Xe],Ye[Xe]=null}var Ve=null,We=null,X=!1,at=null;function _g(t,e){var n=Je(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Jh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ve=t,We=cn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ve=t,We=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=qn!==null?{id:Ot,overflow:At}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Je(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ve=t,We=null,!0):!1;default:return!1}}function vu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wu(t){if(X){var e=We;if(e){var n=e;if(!Jh(t,e)){if(vu(t))throw Error(w(418));e=cn(n.nextSibling);var r=Ve;e&&Jh(t,e)?_g(r,n):(t.flags=t.flags&-4097|2,X=!1,Ve=t)}}else{if(vu(t))throw Error(w(418));t.flags=t.flags&-4097|2,X=!1,Ve=t}}}function Zh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ve=t}function js(t){if(t!==Ve)return!1;if(!X)return Zh(t),X=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!mu(t.type,t.memoizedProps)),e&&(e=We)){if(vu(t))throw yg(),Error(w(418));for(;e;)_g(t,e),e=cn(e.nextSibling)}if(Zh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){We=cn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}We=null}}else We=Ve?cn(t.stateNode.nextSibling):null;return!0}function yg(){for(var t=We;t;)t=cn(t.nextSibling)}function zr(){We=Ve=null,X=!1}function Uc(t){at===null?at=[t]:at.push(t)}var Zw=Ht.ReactCurrentBatchConfig;function st(t,e){if(t&&t.defaultProps){e=ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var To=In(null),ko=null,Er=null,zc=null;function jc(){zc=Er=ko=null}function Bc(t){var e=To.current;Y(To),t._currentValue=e}function Eu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Pr(t,e){ko=t,zc=Er=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Me=!0),t.firstContext=null)}function nt(t){var e=t._currentValue;if(zc!==t)if(t={context:t,memoizedValue:e,next:null},Er===null){if(ko===null)throw Error(w(308));Er=t,ko.dependencies={lanes:0,firstContext:t}}else Er=Er.next=t;return e}var bn=null;function $c(t){bn===null?bn=[t]:bn.push(t)}function vg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,$c(e)):(n.next=i.next,i.next=n),e.interleaved=n,jt(t,r)}function jt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yt=!1;function Wc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Lt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function dn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(B&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,jt(t,n)}return i=r.interleaved,i===null?(e.next=e,$c(r)):(e.next=i.next,i.next=e),r.interleaved=e,jt(t,n)}function eo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nc(t,n)}}function ef(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ro(t,e,n,r){var i=t.updateQueue;Yt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,c=u=a=null,l=s;do{var h=l.lane,p=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,y=l;switch(h=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){d=_.call(p,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(p,d,h):_,h==null)break e;d=ee({},d,h);break e;case 2:Yt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else p={eventTime:p,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=p,a=d):c=c.next=p,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Gn|=o,t.lanes=o,t.memoizedState=d}}function tf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var Eg=new vm.Component().refs;function Cu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var pl={isMounted:function(t){return(t=t._reactInternals)?sr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Oe(),i=fn(t),s=Lt(r,i);s.payload=e,n!=null&&(s.callback=n),e=dn(t,s,i),e!==null&&(ht(e,t,i,r),eo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Oe(),i=fn(t),s=Lt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=dn(t,s,i),e!==null&&(ht(e,t,i,r),eo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Oe(),r=fn(t),i=Lt(n,r);i.tag=2,e!=null&&(i.callback=e),e=dn(t,i,r),e!==null&&(ht(e,t,r,n),eo(e,t,r))}};function nf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Vi(n,r)||!Vi(i,s):!0}function Cg(t,e,n){var r=!1,i=wn,s=e.contextType;return typeof s=="object"&&s!==null?s=nt(s):(i=ze(e)?Hn:ke.current,r=e.contextTypes,s=(r=r!=null)?Ur(t,i):wn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=pl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function rf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&pl.enqueueReplaceState(e,e.state,null)}function Su(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Eg,Wc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=nt(s):(s=ze(e)?Hn:ke.current,i.context=Ur(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Cu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&pl.enqueueReplaceState(i,i.state,null),Ro(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function di(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===Eg&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function Bs(t,e){throw t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sf(t){var e=t._init;return e(t._payload)}function Sg(t){function e(m,f){if(t){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=pn(m,f),m.index=0,m.sibling=null,m}function s(m,f,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,f,g,v){return f===null||f.tag!==6?(f=wa(g,m.mode,v),f.return=m,f):(f=i(f,g),f.return=m,f)}function a(m,f,g,v){var T=g.type;return T===fr?c(m,f,g.props.children,v,g.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Qt&&sf(T)===f.type)?(v=i(f,g.props),v.ref=di(m,f,g),v.return=m,v):(v=oo(g.type,g.key,g.props,null,m.mode,v),v.ref=di(m,f,g),v.return=m,v)}function u(m,f,g,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Ea(g,m.mode,v),f.return=m,f):(f=i(f,g.children||[]),f.return=m,f)}function c(m,f,g,v,T){return f===null||f.tag!==7?(f=$n(g,m.mode,v,T),f.return=m,f):(f=i(f,g),f.return=m,f)}function d(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=wa(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case xs:return g=oo(f.type,f.key,f.props,null,m.mode,g),g.ref=di(m,null,f),g.return=m,g;case hr:return f=Ea(f,m.mode,g),f.return=m,f;case Qt:var v=f._init;return d(m,v(f._payload),g)}if(vi(f)||oi(f))return f=$n(f,m.mode,g,null),f.return=m,f;Bs(m,f)}return null}function h(m,f,g,v){var T=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return T!==null?null:l(m,f,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case xs:return g.key===T?a(m,f,g,v):null;case hr:return g.key===T?u(m,f,g,v):null;case Qt:return T=g._init,h(m,f,T(g._payload),v)}if(vi(g)||oi(g))return T!==null?null:c(m,f,g,v,null);Bs(m,g)}return null}function p(m,f,g,v,T){if(typeof v=="string"&&v!==""||typeof v=="number")return m=m.get(g)||null,l(f,m,""+v,T);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case xs:return m=m.get(v.key===null?g:v.key)||null,a(f,m,v,T);case hr:return m=m.get(v.key===null?g:v.key)||null,u(f,m,v,T);case Qt:var C=v._init;return p(m,f,g,C(v._payload),T)}if(vi(v)||oi(v))return m=m.get(g)||null,c(f,m,v,T,null);Bs(f,v)}return null}function _(m,f,g,v){for(var T=null,C=null,S=f,I=f=0,j=null;S!==null&&I<g.length;I++){S.index>I?(j=S,S=null):j=S.sibling;var D=h(m,S,g[I],v);if(D===null){S===null&&(S=j);break}t&&S&&D.alternate===null&&e(m,S),f=s(D,f,I),C===null?T=D:C.sibling=D,C=D,S=j}if(I===g.length)return n(m,S),X&&Pn(m,I),T;if(S===null){for(;I<g.length;I++)S=d(m,g[I],v),S!==null&&(f=s(S,f,I),C===null?T=S:C.sibling=S,C=S);return X&&Pn(m,I),T}for(S=r(m,S);I<g.length;I++)j=p(S,m,I,g[I],v),j!==null&&(t&&j.alternate!==null&&S.delete(j.key===null?I:j.key),f=s(j,f,I),C===null?T=j:C.sibling=j,C=j);return t&&S.forEach(function(Ne){return e(m,Ne)}),X&&Pn(m,I),T}function y(m,f,g,v){var T=oi(g);if(typeof T!="function")throw Error(w(150));if(g=T.call(g),g==null)throw Error(w(151));for(var C=T=null,S=f,I=f=0,j=null,D=g.next();S!==null&&!D.done;I++,D=g.next()){S.index>I?(j=S,S=null):j=S.sibling;var Ne=h(m,S,D.value,v);if(Ne===null){S===null&&(S=j);break}t&&S&&Ne.alternate===null&&e(m,S),f=s(Ne,f,I),C===null?T=Ne:C.sibling=Ne,C=Ne,S=j}if(D.done)return n(m,S),X&&Pn(m,I),T;if(S===null){for(;!D.done;I++,D=g.next())D=d(m,D.value,v),D!==null&&(f=s(D,f,I),C===null?T=D:C.sibling=D,C=D);return X&&Pn(m,I),T}for(S=r(m,S);!D.done;I++,D=g.next())D=p(S,m,I,D.value,v),D!==null&&(t&&D.alternate!==null&&S.delete(D.key===null?I:D.key),f=s(D,f,I),C===null?T=D:C.sibling=D,C=D);return t&&S.forEach(function(ur){return e(m,ur)}),X&&Pn(m,I),T}function k(m,f,g,v){if(typeof g=="object"&&g!==null&&g.type===fr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case xs:e:{for(var T=g.key,C=f;C!==null;){if(C.key===T){if(T=g.type,T===fr){if(C.tag===7){n(m,C.sibling),f=i(C,g.props.children),f.return=m,m=f;break e}}else if(C.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Qt&&sf(T)===C.type){n(m,C.sibling),f=i(C,g.props),f.ref=di(m,C,g),f.return=m,m=f;break e}n(m,C);break}else e(m,C);C=C.sibling}g.type===fr?(f=$n(g.props.children,m.mode,v,g.key),f.return=m,m=f):(v=oo(g.type,g.key,g.props,null,m.mode,v),v.ref=di(m,f,g),v.return=m,m=v)}return o(m);case hr:e:{for(C=g.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(m,f.sibling),f=i(f,g.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=Ea(g,m.mode,v),f.return=m,m=f}return o(m);case Qt:return C=g._init,k(m,f,C(g._payload),v)}if(vi(g))return _(m,f,g,v);if(oi(g))return y(m,f,g,v);Bs(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,g),f.return=m,m=f):(n(m,f),f=wa(g,m.mode,v),f.return=m,m=f),o(m)):n(m,f)}return k}var jr=Sg(!0),Ig=Sg(!1),gs={},Et=In(gs),Gi=In(gs),Qi=In(gs);function Mn(t){if(t===gs)throw Error(w(174));return t}function Vc(t,e){switch(G(Qi,e),G(Gi,t),G(Et,gs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:tu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=tu(e,t)}Y(Et),G(Et,e)}function Br(){Y(Et),Y(Gi),Y(Qi)}function Tg(t){Mn(Qi.current);var e=Mn(Et.current),n=tu(e,t.type);e!==n&&(G(Gi,t),G(Et,n))}function Hc(t){Gi.current===t&&(Y(Et),Y(Gi))}var J=In(0);function No(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var pa=[];function qc(){for(var t=0;t<pa.length;t++)pa[t]._workInProgressVersionPrimary=null;pa.length=0}var to=Ht.ReactCurrentDispatcher,ma=Ht.ReactCurrentBatchConfig,Kn=0,Z=null,le=null,he=null,Po=!1,Ri=!1,Yi=0,eE=0;function Se(){throw Error(w(321))}function Kc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!mt(t[n],e[n]))return!1;return!0}function Gc(t,e,n,r,i,s){if(Kn=s,Z=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,to.current=t===null||t.memoizedState===null?iE:sE,t=n(r,i),Ri){s=0;do{if(Ri=!1,Yi=0,25<=s)throw Error(w(301));s+=1,he=le=null,e.updateQueue=null,to.current=oE,t=n(r,i)}while(Ri)}if(to.current=xo,e=le!==null&&le.next!==null,Kn=0,he=le=Z=null,Po=!1,e)throw Error(w(300));return t}function Qc(){var t=Yi!==0;return Yi=0,t}function yt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?Z.memoizedState=he=t:he=he.next=t,he}function rt(){if(le===null){var t=Z.alternate;t=t!==null?t.memoizedState:null}else t=le.next;var e=he===null?Z.memoizedState:he.next;if(e!==null)he=e,le=t;else{if(t===null)throw Error(w(310));le=t,t={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},he===null?Z.memoizedState=he=t:he=he.next=t}return he}function Xi(t,e){return typeof e=="function"?e(t):e}function ga(t){var e=rt(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=le,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((Kn&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,Z.lanes|=c,Gn|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,mt(r,e.memoizedState)||(Me=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Z.lanes|=s,Gn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function _a(t){var e=rt(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);mt(s,e.memoizedState)||(Me=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function kg(){}function Rg(t,e){var n=Z,r=rt(),i=e(),s=!mt(r.memoizedState,i);if(s&&(r.memoizedState=i,Me=!0),r=r.queue,Yc(xg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,Ji(9,Pg.bind(null,n,r,i,e),void 0,null),me===null)throw Error(w(349));(Kn&30)!==0||Ng(n,e,i)}return i}function Ng(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Pg(t,e,n,r){e.value=n,e.getSnapshot=r,Og(e)&&Ag(t)}function xg(t,e,n){return n(function(){Og(e)&&Ag(t)})}function Og(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!mt(t,n)}catch{return!0}}function Ag(t){var e=jt(t,1);e!==null&&ht(e,t,1,-1)}function of(t){var e=yt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:t},e.queue=t,t=t.dispatch=rE.bind(null,Z,t),[e.memoizedState,t]}function Ji(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Dg(){return rt().memoizedState}function no(t,e,n,r){var i=yt();Z.flags|=t,i.memoizedState=Ji(1|e,n,void 0,r===void 0?null:r)}function ml(t,e,n,r){var i=rt();r=r===void 0?null:r;var s=void 0;if(le!==null){var o=le.memoizedState;if(s=o.destroy,r!==null&&Kc(r,o.deps)){i.memoizedState=Ji(e,n,s,r);return}}Z.flags|=t,i.memoizedState=Ji(1|e,n,s,r)}function lf(t,e){return no(8390656,8,t,e)}function Yc(t,e){return ml(2048,8,t,e)}function bg(t,e){return ml(4,2,t,e)}function Mg(t,e){return ml(4,4,t,e)}function Lg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Fg(t,e,n){return n=n!=null?n.concat([t]):null,ml(4,4,Lg.bind(null,e,t),n)}function Xc(){}function Ug(t,e){var n=rt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function zg(t,e){var n=rt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function jg(t,e,n){return(Kn&21)===0?(t.baseState&&(t.baseState=!1,Me=!0),t.memoizedState=n):(mt(n,e)||(n=Wm(),Z.lanes|=n,Gn|=n,t.baseState=!0),e)}function tE(t,e){var n=W;W=n!==0&&4>n?n:4,t(!0);var r=ma.transition;ma.transition={};try{t(!1),e()}finally{W=n,ma.transition=r}}function Bg(){return rt().memoizedState}function nE(t,e,n){var r=fn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$g(t))Wg(e,n);else if(n=vg(t,e,n,r),n!==null){var i=Oe();ht(n,t,r,i),Vg(n,e,r)}}function rE(t,e,n){var r=fn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($g(t))Wg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,mt(l,o)){var a=e.interleaved;a===null?(i.next=i,$c(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=vg(t,e,i,r),n!==null&&(i=Oe(),ht(n,t,r,i),Vg(n,e,r))}}function $g(t){var e=t.alternate;return t===Z||e!==null&&e===Z}function Wg(t,e){Ri=Po=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Vg(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nc(t,n)}}var xo={readContext:nt,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},iE={readContext:nt,useCallback:function(t,e){return yt().memoizedState=[t,e===void 0?null:e],t},useContext:nt,useEffect:lf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,no(4194308,4,Lg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return no(4194308,4,t,e)},useInsertionEffect:function(t,e){return no(4,2,t,e)},useMemo:function(t,e){var n=yt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=yt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=nE.bind(null,Z,t),[r.memoizedState,t]},useRef:function(t){var e=yt();return t={current:t},e.memoizedState=t},useState:of,useDebugValue:Xc,useDeferredValue:function(t){return yt().memoizedState=t},useTransition:function(){var t=of(!1),e=t[0];return t=tE.bind(null,t[1]),yt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Z,i=yt();if(X){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),me===null)throw Error(w(349));(Kn&30)!==0||Ng(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,lf(xg.bind(null,r,s,t),[t]),r.flags|=2048,Ji(9,Pg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=yt(),e=me.identifierPrefix;if(X){var n=At,r=Ot;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Yi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=eE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},sE={readContext:nt,useCallback:Ug,useContext:nt,useEffect:Yc,useImperativeHandle:Fg,useInsertionEffect:bg,useLayoutEffect:Mg,useMemo:zg,useReducer:ga,useRef:Dg,useState:function(){return ga(Xi)},useDebugValue:Xc,useDeferredValue:function(t){var e=rt();return jg(e,le.memoizedState,t)},useTransition:function(){var t=ga(Xi)[0],e=rt().memoizedState;return[t,e]},useMutableSource:kg,useSyncExternalStore:Rg,useId:Bg,unstable_isNewReconciler:!1},oE={readContext:nt,useCallback:Ug,useContext:nt,useEffect:Yc,useImperativeHandle:Fg,useInsertionEffect:bg,useLayoutEffect:Mg,useMemo:zg,useReducer:_a,useRef:Dg,useState:function(){return _a(Xi)},useDebugValue:Xc,useDeferredValue:function(t){var e=rt();return le===null?e.memoizedState=t:jg(e,le.memoizedState,t)},useTransition:function(){var t=_a(Xi)[0],e=rt().memoizedState;return[t,e]},useMutableSource:kg,useSyncExternalStore:Rg,useId:Bg,unstable_isNewReconciler:!1};function $r(t,e){try{var n="",r=e;do n+=b0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ya(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Iu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var lE=typeof WeakMap=="function"?WeakMap:Map;function Hg(t,e,n){n=Lt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ao||(Ao=!0,bu=r),Iu(t,e)},n}function qg(t,e,n){n=Lt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Iu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Iu(t,e),typeof r!="function"&&(hn===null?hn=new Set([this]):hn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function af(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new lE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=EE.bind(null,t,e,n),e.then(t,t))}function uf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function cf(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Lt(-1,1),e.tag=2,dn(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var aE=Ht.ReactCurrentOwner,Me=!1;function Pe(t,e,n,r){e.child=t===null?Ig(e,null,n,r):jr(e,t.child,n,r)}function df(t,e,n,r,i){n=n.render;var s=e.ref;return Pr(e,i),r=Gc(t,e,n,r,s,i),n=Qc(),t!==null&&!Me?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Bt(t,e,i)):(X&&n&&Lc(e),e.flags|=1,Pe(t,e,r,i),e.child)}function hf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!sd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Kg(t,e,s,r,i)):(t=oo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Vi,n(o,r)&&t.ref===e.ref)return Bt(t,e,i)}return e.flags|=1,t=pn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Kg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Vi(s,r)&&t.ref===e.ref)if(Me=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Me=!0);else return e.lanes=t.lanes,Bt(t,e,i)}return Tu(t,e,n,r,i)}function Gg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(Sr,$e),$e|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,G(Sr,$e),$e|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,G(Sr,$e),$e|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,G(Sr,$e),$e|=r;return Pe(t,e,i,n),e.child}function Qg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Tu(t,e,n,r,i){var s=ze(n)?Hn:ke.current;return s=Ur(e,s),Pr(e,i),n=Gc(t,e,n,r,s,i),r=Qc(),t!==null&&!Me?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Bt(t,e,i)):(X&&r&&Lc(e),e.flags|=1,Pe(t,e,n,i),e.child)}function ff(t,e,n,r,i){if(ze(n)){var s=!0;Co(e)}else s=!1;if(Pr(e,i),e.stateNode===null)ro(t,e),Cg(e,n,r),Su(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=nt(u):(u=ze(n)?Hn:ke.current,u=Ur(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&rf(e,o,r,u),Yt=!1;var h=e.memoizedState;o.state=h,Ro(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Ue.current||Yt?(typeof c=="function"&&(Cu(e,n,c,r),a=e.memoizedState),(l=Yt||nf(e,n,l,r,h,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,wg(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:st(e.type,l),o.props=u,d=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=nt(a):(a=ze(n)?Hn:ke.current,a=Ur(e,a));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==a)&&rf(e,o,r,a),Yt=!1,h=e.memoizedState,o.state=h,Ro(e,r,o,i);var _=e.memoizedState;l!==d||h!==_||Ue.current||Yt?(typeof p=="function"&&(Cu(e,n,p,r),_=e.memoizedState),(u=Yt||nf(e,n,u,r,h,_,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return ku(t,e,n,r,s,i)}function ku(t,e,n,r,i,s){Qg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Xh(e,n,!1),Bt(t,e,s);r=e.stateNode,aE.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=jr(e,t.child,null,s),e.child=jr(e,null,l,s)):Pe(t,e,l,s),e.memoizedState=r.state,i&&Xh(e,n,!0),e.child}function Yg(t){var e=t.stateNode;e.pendingContext?Yh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Yh(t,e.context,!1),Vc(t,e.containerInfo)}function pf(t,e,n,r,i){return zr(),Uc(i),e.flags|=256,Pe(t,e,n,r),e.child}var Ru={dehydrated:null,treeContext:null,retryLane:0};function Nu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Xg(t,e,n){var r=e.pendingProps,i=J.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),G(J,i&1),t===null)return wu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=yl(o,r,0,null),t=$n(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Nu(n),e.memoizedState=Ru,t):Jc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return uE(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=pn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=pn(l,s):(s=$n(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Nu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ru,r}return s=t.child,t=s.sibling,r=pn(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Jc(t,e){return e=yl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function $s(t,e,n,r){return r!==null&&Uc(r),jr(e,t.child,null,n),t=Jc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function uE(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ya(Error(w(422))),$s(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=yl({mode:"visible",children:r.children},i,0,null),s=$n(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&jr(e,t.child,null,o),e.child.memoizedState=Nu(o),e.memoizedState=Ru,s);if((e.mode&1)===0)return $s(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(w(419)),r=ya(s,r,void 0),$s(t,e,o,r)}if(l=(o&t.childLanes)!==0,Me||l){if(r=me,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,jt(t,i),ht(r,t,i,-1))}return id(),r=ya(Error(w(421))),$s(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=CE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,We=cn(i.nextSibling),Ve=e,X=!0,at=null,t!==null&&(Ye[Xe++]=Ot,Ye[Xe++]=At,Ye[Xe++]=qn,Ot=t.id,At=t.overflow,qn=e),e=Jc(e,r.children),e.flags|=4096,e)}function mf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Eu(t.return,e,n)}function va(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Jg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Pe(t,e,r.children,n),r=J.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&mf(t,n,e);else if(t.tag===19)mf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(G(J,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&No(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),va(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&No(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}va(e,!0,n,null,s);break;case"together":va(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ro(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Bt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gn|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=pn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=pn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function cE(t,e,n){switch(e.tag){case 3:Yg(e),zr();break;case 5:Tg(e);break;case 1:ze(e.type)&&Co(e);break;case 4:Vc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;G(To,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(G(J,J.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?Xg(t,e,n):(G(J,J.current&1),t=Bt(t,e,n),t!==null?t.sibling:null);G(J,J.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return Jg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(J,J.current),r)break;return null;case 22:case 23:return e.lanes=0,Gg(t,e,n)}return Bt(t,e,n)}var Zg,Pu,e_,t_;Zg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pu=function(){};e_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Mn(Et.current);var s=null;switch(n){case"input":i=Xa(t,i),r=Xa(t,r),s=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),s=[];break;case"textarea":i=eu(t,i),r=eu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=wo)}nu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Fi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Fi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Q("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};t_=function(t,e,n,r){n!==r&&(e.flags|=4)};function hi(t,e){if(!X)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ie(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function dE(t,e,n){var r=e.pendingProps;switch(Fc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(e),null;case 1:return ze(e.type)&&Eo(),Ie(e),null;case 3:return r=e.stateNode,Br(),Y(Ue),Y(ke),qc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(js(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,at!==null&&(Fu(at),at=null))),Pu(t,e),Ie(e),null;case 5:Hc(e);var i=Mn(Qi.current);if(n=e.type,t!==null&&e.stateNode!=null)e_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return Ie(e),null}if(t=Mn(Et.current),js(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[vt]=e,r[Ki]=s,t=(e.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(i=0;i<Ei.length;i++)Q(Ei[i],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":Sh(r,s),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Q("invalid",r);break;case"textarea":Th(r,s),Q("invalid",r)}nu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&zs(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&zs(r.textContent,l,t),i=["children",""+l]):Fi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Q("scroll",r)}switch(n){case"input":Os(r),Ih(r,s,!0);break;case"textarea":Os(r),kh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=wo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Nm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[vt]=e,t[Ki]=r,Zg(t,e,!1,!1),e.stateNode=t;e:{switch(o=ru(n,r),n){case"dialog":Q("cancel",t),Q("close",t),i=r;break;case"iframe":case"object":case"embed":Q("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ei.length;i++)Q(Ei[i],t);i=r;break;case"source":Q("error",t),i=r;break;case"img":case"image":case"link":Q("error",t),Q("load",t),i=r;break;case"details":Q("toggle",t),i=r;break;case"input":Sh(t,r),i=Xa(t,r),Q("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),Q("invalid",t);break;case"textarea":Th(t,r),i=eu(t,r),Q("invalid",t);break;default:i=r}nu(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Om(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Pm(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ui(t,a):typeof a=="number"&&Ui(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&Q("scroll",t):a!=null&&Cc(t,s,a,o))}switch(n){case"input":Os(t),Ih(t,r,!1);break;case"textarea":Os(t),kh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+vn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Tr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Tr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=wo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ie(e),null;case 6:if(t&&e.stateNode!=null)t_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=Mn(Qi.current),Mn(Et.current),js(e)){if(r=e.stateNode,n=e.memoizedProps,r[vt]=e,(s=r.nodeValue!==n)&&(t=Ve,t!==null))switch(t.tag){case 3:zs(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&zs(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vt]=e,e.stateNode=r}return Ie(e),null;case 13:if(Y(J),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(X&&We!==null&&(e.mode&1)!==0&&(e.flags&128)===0)yg(),zr(),e.flags|=98560,s=!1;else if(s=js(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(w(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[vt]=e}else zr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ie(e),s=!1}else at!==null&&(Fu(at),at=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(J.current&1)!==0?ae===0&&(ae=3):id())),e.updateQueue!==null&&(e.flags|=4),Ie(e),null);case 4:return Br(),Pu(t,e),t===null&&Hi(e.stateNode.containerInfo),Ie(e),null;case 10:return Bc(e.type._context),Ie(e),null;case 17:return ze(e.type)&&Eo(),Ie(e),null;case 19:if(Y(J),s=e.memoizedState,s===null)return Ie(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)hi(s,!1);else{if(ae!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=No(t),o!==null){for(e.flags|=128,hi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return G(J,J.current&1|2),e.child}t=t.sibling}s.tail!==null&&se()>Wr&&(e.flags|=128,r=!0,hi(s,!1),e.lanes=4194304)}else{if(!r)if(t=No(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),hi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!X)return Ie(e),null}else 2*se()-s.renderingStartTime>Wr&&n!==1073741824&&(e.flags|=128,r=!0,hi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=se(),e.sibling=null,n=J.current,G(J,r?n&1|2:n&1),e):(Ie(e),null);case 22:case 23:return rd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?($e&1073741824)!==0&&(Ie(e),e.subtreeFlags&6&&(e.flags|=8192)):Ie(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function hE(t,e){switch(Fc(e),e.tag){case 1:return ze(e.type)&&Eo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Br(),Y(Ue),Y(ke),qc(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Hc(e),null;case 13:if(Y(J),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));zr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Y(J),null;case 4:return Br(),null;case 10:return Bc(e.type._context),null;case 22:case 23:return rd(),null;case 24:return null;default:return null}}var Ws=!1,Te=!1,fE=typeof WeakSet=="function"?WeakSet:Set,N=null;function Cr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(t,e,r)}else n.current=null}function xu(t,e,n){try{n()}catch(r){te(t,e,r)}}var gf=!1;function pE(t,e){if(fu=_o,t=sg(),Mc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++c===r&&(a=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(pu={focusedElem:t,selectionRange:n},_o=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var _=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,k=_.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:st(e.type,y),k);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(v){te(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return _=gf,gf=!1,_}function Ni(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&xu(e,n,s)}i=i.next}while(i!==r)}}function gl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ou(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function n_(t){var e=t.alternate;e!==null&&(t.alternate=null,n_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[vt],delete e[Ki],delete e[_u],delete e[Yw],delete e[Xw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function r_(t){return t.tag===5||t.tag===3||t.tag===4}function _f(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||r_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Au(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wo));else if(r!==4&&(t=t.child,t!==null))for(Au(t,e,n),t=t.sibling;t!==null;)Au(t,e,n),t=t.sibling}function Du(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Du(t,e,n),t=t.sibling;t!==null;)Du(t,e,n),t=t.sibling}var _e=null,lt=!1;function Kt(t,e,n){for(n=n.child;n!==null;)i_(t,e,n),n=n.sibling}function i_(t,e,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(al,n)}catch{}switch(n.tag){case 5:Te||Cr(n,e);case 6:var r=_e,i=lt;_e=null,Kt(t,e,n),_e=r,lt=i,_e!==null&&(lt?(t=_e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(lt?(t=_e,n=n.stateNode,t.nodeType===8?ha(t.parentNode,n):t.nodeType===1&&ha(t,n),$i(t)):ha(_e,n.stateNode));break;case 4:r=_e,i=lt,_e=n.stateNode.containerInfo,lt=!0,Kt(t,e,n),_e=r,lt=i;break;case 0:case 11:case 14:case 15:if(!Te&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&xu(n,e,o),i=i.next}while(i!==r)}Kt(t,e,n);break;case 1:if(!Te&&(Cr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){te(n,e,l)}Kt(t,e,n);break;case 21:Kt(t,e,n);break;case 22:n.mode&1?(Te=(r=Te)||n.memoizedState!==null,Kt(t,e,n),Te=r):Kt(t,e,n);break;default:Kt(t,e,n)}}function yf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new fE),e.forEach(function(r){var i=SE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function it(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:_e=l.stateNode,lt=!1;break e;case 3:_e=l.stateNode.containerInfo,lt=!0;break e;case 4:_e=l.stateNode.containerInfo,lt=!0;break e}l=l.return}if(_e===null)throw Error(w(160));i_(s,o,i),_e=null,lt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){te(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)s_(e,t),e=e.sibling}function s_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(it(e,t),_t(t),r&4){try{Ni(3,t,t.return),gl(3,t)}catch(y){te(t,t.return,y)}try{Ni(5,t,t.return)}catch(y){te(t,t.return,y)}}break;case 1:it(e,t),_t(t),r&512&&n!==null&&Cr(n,n.return);break;case 5:if(it(e,t),_t(t),r&512&&n!==null&&Cr(n,n.return),t.flags&32){var i=t.stateNode;try{Ui(i,"")}catch(y){te(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&km(i,s),ru(l,o);var u=ru(l,s);for(o=0;o<a.length;o+=2){var c=a[o],d=a[o+1];c==="style"?Om(i,d):c==="dangerouslySetInnerHTML"?Pm(i,d):c==="children"?Ui(i,d):Cc(i,c,d,u)}switch(l){case"input":Ja(i,s);break;case"textarea":Rm(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Tr(i,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Tr(i,!!s.multiple,s.defaultValue,!0):Tr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ki]=s}catch(y){te(t,t.return,y)}}break;case 6:if(it(e,t),_t(t),r&4){if(t.stateNode===null)throw Error(w(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){te(t,t.return,y)}}break;case 3:if(it(e,t),_t(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$i(e.containerInfo)}catch(y){te(t,t.return,y)}break;case 4:it(e,t),_t(t);break;case 13:it(e,t),_t(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(td=se())),r&4&&yf(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Te=(u=Te)||c,it(e,t),Te=u):it(e,t),_t(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(N=t,c=t.child;c!==null;){for(d=N=c;N!==null;){switch(h=N,p=h.child,h.tag){case 0:case 11:case 14:case 15:Ni(4,h,h.return);break;case 1:Cr(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){te(r,n,y)}}break;case 5:Cr(h,h.return);break;case 22:if(h.memoizedState!==null){wf(d);continue}}p!==null?(p.return=h,N=p):wf(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=xm("display",o))}catch(y){te(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){te(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:it(e,t),_t(t),r&4&&yf(t);break;case 21:break;default:it(e,t),_t(t)}}function _t(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(r_(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ui(i,""),r.flags&=-33);var s=_f(t);Du(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=_f(t);Au(t,l,o);break;default:throw Error(w(161))}}catch(a){te(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mE(t,e,n){N=t,o_(t)}function o_(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ws;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Te;l=Ws;var u=Te;if(Ws=o,(Te=a)&&!u)for(N=i;N!==null;)o=N,a=o.child,o.tag===22&&o.memoizedState!==null?Ef(i):a!==null?(a.return=o,N=a):Ef(i);for(;s!==null;)N=s,o_(s),s=s.sibling;N=i,Ws=l,Te=u}vf(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,N=s):vf(t)}}function vf(t){for(;N!==null;){var e=N;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Te||gl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Te)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:st(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&tf(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}tf(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&$i(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}Te||e.flags&512&&Ou(e)}catch(h){te(e,e.return,h)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function wf(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function Ef(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{gl(4,e)}catch(a){te(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){te(e,i,a)}}var s=e.return;try{Ou(e)}catch(a){te(e,s,a)}break;case 5:var o=e.return;try{Ou(e)}catch(a){te(e,o,a)}}}catch(a){te(e,e.return,a)}if(e===t){N=null;break}var l=e.sibling;if(l!==null){l.return=e.return,N=l;break}N=e.return}}var gE=Math.ceil,Oo=Ht.ReactCurrentDispatcher,Zc=Ht.ReactCurrentOwner,et=Ht.ReactCurrentBatchConfig,B=0,me=null,oe=null,we=0,$e=0,Sr=In(0),ae=0,Zi=null,Gn=0,_l=0,ed=0,Pi=null,be=null,td=0,Wr=1/0,Nt=null,Ao=!1,bu=null,hn=null,Vs=!1,sn=null,Do=0,xi=0,Mu=null,io=-1,so=0;function Oe(){return(B&6)!==0?se():io!==-1?io:io=se()}function fn(t){return(t.mode&1)===0?1:(B&2)!==0&&we!==0?we&-we:Zw.transition!==null?(so===0&&(so=Wm()),so):(t=W,t!==0||(t=window.event,t=t===void 0?16:Ym(t.type)),t)}function ht(t,e,n,r){if(50<xi)throw xi=0,Mu=null,Error(w(185));fs(t,n,r),((B&2)===0||t!==me)&&(t===me&&((B&2)===0&&(_l|=n),ae===4&&Zt(t,we)),je(t,r),n===1&&B===0&&(e.mode&1)===0&&(Wr=se()+500,fl&&Tn()))}function je(t,e){var n=t.callbackNode;Z0(t,e);var r=go(t,t===me?we:0);if(r===0)n!==null&&Ph(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ph(n),e===1)t.tag===0?Jw(Cf.bind(null,t)):mg(Cf.bind(null,t)),Gw(function(){(B&6)===0&&Tn()}),n=null;else{switch(Vm(r)){case 1:n=Rc;break;case 4:n=Bm;break;case 16:n=mo;break;case 536870912:n=$m;break;default:n=mo}n=p_(n,l_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function l_(t,e){if(io=-1,so=0,(B&6)!==0)throw Error(w(327));var n=t.callbackNode;if(xr()&&t.callbackNode!==n)return null;var r=go(t,t===me?we:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=bo(t,r);else{e=r;var i=B;B|=2;var s=u_();(me!==t||we!==e)&&(Nt=null,Wr=se()+500,Bn(t,e));do try{vE();break}catch(l){a_(t,l)}while(1);jc(),Oo.current=s,B=i,oe!==null?e=0:(me=null,we=0,e=ae)}if(e!==0){if(e===2&&(i=au(t),i!==0&&(r=i,e=Lu(t,i))),e===1)throw n=Zi,Bn(t,0),Zt(t,r),je(t,se()),n;if(e===6)Zt(t,r);else{if(i=t.current.alternate,(r&30)===0&&!_E(i)&&(e=bo(t,r),e===2&&(s=au(t),s!==0&&(r=s,e=Lu(t,s))),e===1))throw n=Zi,Bn(t,0),Zt(t,r),je(t,se()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:xn(t,be,Nt);break;case 3:if(Zt(t,r),(r&130023424)===r&&(e=td+500-se(),10<e)){if(go(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Oe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=gu(xn.bind(null,t,be,Nt),e);break}xn(t,be,Nt);break;case 4:if(Zt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-dt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gE(r/1960))-r,10<r){t.timeoutHandle=gu(xn.bind(null,t,be,Nt),r);break}xn(t,be,Nt);break;case 5:xn(t,be,Nt);break;default:throw Error(w(329))}}}return je(t,se()),t.callbackNode===n?l_.bind(null,t):null}function Lu(t,e){var n=Pi;return t.current.memoizedState.isDehydrated&&(Bn(t,e).flags|=256),t=bo(t,e),t!==2&&(e=be,be=n,e!==null&&Fu(e)),t}function Fu(t){be===null?be=t:be.push.apply(be,t)}function _E(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!mt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zt(t,e){for(e&=~ed,e&=~_l,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-dt(e),r=1<<n;t[n]=-1,e&=~r}}function Cf(t){if((B&6)!==0)throw Error(w(327));xr();var e=go(t,0);if((e&1)===0)return je(t,se()),null;var n=bo(t,e);if(t.tag!==0&&n===2){var r=au(t);r!==0&&(e=r,n=Lu(t,r))}if(n===1)throw n=Zi,Bn(t,0),Zt(t,e),je(t,se()),n;if(n===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xn(t,be,Nt),je(t,se()),null}function nd(t,e){var n=B;B|=1;try{return t(e)}finally{B=n,B===0&&(Wr=se()+500,fl&&Tn())}}function Qn(t){sn!==null&&sn.tag===0&&(B&6)===0&&xr();var e=B;B|=1;var n=et.transition,r=W;try{if(et.transition=null,W=1,t)return t()}finally{W=r,et.transition=n,B=e,(B&6)===0&&Tn()}}function rd(){$e=Sr.current,Y(Sr)}function Bn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Kw(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(Fc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Eo();break;case 3:Br(),Y(Ue),Y(ke),qc();break;case 5:Hc(r);break;case 4:Br();break;case 13:Y(J);break;case 19:Y(J);break;case 10:Bc(r.type._context);break;case 22:case 23:rd()}n=n.return}if(me=t,oe=t=pn(t.current,null),we=$e=e,ae=0,Zi=null,ed=_l=Gn=0,be=Pi=null,bn!==null){for(e=0;e<bn.length;e++)if(n=bn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}bn=null}return t}function a_(t,e){do{var n=oe;try{if(jc(),to.current=xo,Po){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Po=!1}if(Kn=0,he=le=Z=null,Ri=!1,Yi=0,Zc.current=null,n===null||n.return===null){ae=1,Zi=e,oe=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=we,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=uf(o);if(p!==null){p.flags&=-257,cf(p,o,l,s,e),p.mode&1&&af(s,u,e),e=p,a=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(a),e.updateQueue=y}else _.add(a);break e}else{if((e&1)===0){af(s,u,e),id();break e}a=Error(w(426))}}else if(X&&l.mode&1){var k=uf(o);if(k!==null){(k.flags&65536)===0&&(k.flags|=256),cf(k,o,l,s,e),Uc($r(a,l));break e}}s=a=$r(a,l),ae!==4&&(ae=2),Pi===null?Pi=[s]:Pi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Hg(s,a,e);ef(s,m);break e;case 1:l=a;var f=s.type,g=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(hn===null||!hn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=qg(s,l,e);ef(s,v);break e}}s=s.return}while(s!==null)}d_(n)}catch(T){e=T,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(1)}function u_(){var t=Oo.current;return Oo.current=xo,t===null?xo:t}function id(){(ae===0||ae===3||ae===2)&&(ae=4),me===null||(Gn&268435455)===0&&(_l&268435455)===0||Zt(me,we)}function bo(t,e){var n=B;B|=2;var r=u_();(me!==t||we!==e)&&(Nt=null,Bn(t,e));do try{yE();break}catch(i){a_(t,i)}while(1);if(jc(),B=n,Oo.current=r,oe!==null)throw Error(w(261));return me=null,we=0,ae}function yE(){for(;oe!==null;)c_(oe)}function vE(){for(;oe!==null&&!V0();)c_(oe)}function c_(t){var e=f_(t.alternate,t,$e);t.memoizedProps=t.pendingProps,e===null?d_(t):oe=e,Zc.current=null}function d_(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=dE(n,e,$e),n!==null){oe=n;return}}else{if(n=hE(n,e),n!==null){n.flags&=32767,oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ae=6,oe=null;return}}if(e=e.sibling,e!==null){oe=e;return}oe=e=t}while(e!==null);ae===0&&(ae=5)}function xn(t,e,n){var r=W,i=et.transition;try{et.transition=null,W=1,wE(t,e,n,r)}finally{et.transition=i,W=r}return null}function wE(t,e,n,r){do xr();while(sn!==null);if((B&6)!==0)throw Error(w(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ew(t,s),t===me&&(oe=me=null,we=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Vs||(Vs=!0,p_(mo,function(){return xr(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=et.transition,et.transition=null;var o=W;W=1;var l=B;B|=4,Zc.current=null,pE(t,n),s_(n,t),jw(pu),_o=!!fu,pu=fu=null,t.current=n,mE(n),H0(),B=l,W=o,et.transition=s}else t.current=n;if(Vs&&(Vs=!1,sn=t,Do=i),s=t.pendingLanes,s===0&&(hn=null),G0(n.stateNode),je(t,se()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ao)throw Ao=!1,t=bu,bu=null,t;return(Do&1)!==0&&t.tag!==0&&xr(),s=t.pendingLanes,(s&1)!==0?t===Mu?xi++:(xi=0,Mu=t):xi=0,Tn(),null}function xr(){if(sn!==null){var t=Vm(Do),e=et.transition,n=W;try{if(et.transition=null,W=16>t?16:t,sn===null)var r=!1;else{if(t=sn,sn=null,Do=0,(B&6)!==0)throw Error(w(331));var i=B;for(B|=4,N=t.current;N!==null;){var s=N,o=s.child;if((N.flags&16)!==0){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:Ni(8,c,s)}var d=c.child;if(d!==null)d.return=c,N=d;else for(;N!==null;){c=N;var h=c.sibling,p=c.return;if(n_(c),c===u){N=null;break}if(h!==null){h.return=p,N=h;break}N=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}N=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Ni(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,N=m;break e}N=s.return}}var f=t.current;for(N=f;N!==null;){o=N;var g=o.child;if((o.subtreeFlags&2064)!==0&&g!==null)g.return=o,N=g;else e:for(o=f;N!==null;){if(l=N,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:gl(9,l)}}catch(T){te(l,l.return,T)}if(l===o){N=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,N=v;break e}N=l.return}}if(B=i,Tn(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(al,t)}catch{}r=!0}return r}finally{W=n,et.transition=e}}return!1}function Sf(t,e,n){e=$r(n,e),e=Hg(t,e,1),t=dn(t,e,1),e=Oe(),t!==null&&(fs(t,1,e),je(t,e))}function te(t,e,n){if(t.tag===3)Sf(t,t,n);else for(;e!==null;){if(e.tag===3){Sf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hn===null||!hn.has(r))){t=$r(n,t),t=qg(e,t,1),e=dn(e,t,1),t=Oe(),e!==null&&(fs(e,1,t),je(e,t));break}}e=e.return}}function EE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Oe(),t.pingedLanes|=t.suspendedLanes&n,me===t&&(we&n)===n&&(ae===4||ae===3&&(we&130023424)===we&&500>se()-td?Bn(t,0):ed|=n),je(t,e)}function h_(t,e){e===0&&((t.mode&1)===0?e=1:(e=bs,bs<<=1,(bs&130023424)===0&&(bs=4194304)));var n=Oe();t=jt(t,e),t!==null&&(fs(t,e,n),je(t,n))}function CE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),h_(t,n)}function SE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),h_(t,n)}var f_;f_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ue.current)Me=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Me=!1,cE(t,e,n);Me=(t.flags&131072)!==0}else Me=!1,X&&(e.flags&1048576)!==0&&gg(e,Io,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ro(t,e),t=e.pendingProps;var i=Ur(e,ke.current);Pr(e,n),i=Gc(null,e,r,t,i,n);var s=Qc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ze(r)?(s=!0,Co(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Wc(e),i.updater=pl,e.stateNode=i,i._reactInternals=e,Su(e,r,t,n),e=ku(null,e,r,!0,s,n)):(e.tag=0,X&&s&&Lc(e),Pe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ro(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=TE(r),t=st(r,t),i){case 0:e=Tu(null,e,r,t,n);break e;case 1:e=ff(null,e,r,t,n);break e;case 11:e=df(null,e,r,t,n);break e;case 14:e=hf(null,e,r,st(r.type,t),n);break e}throw Error(w(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),Tu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),ff(t,e,r,i,n);case 3:e:{if(Yg(e),t===null)throw Error(w(387));r=e.pendingProps,s=e.memoizedState,i=s.element,wg(t,e),Ro(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=$r(Error(w(423)),e),e=pf(t,e,r,n,i);break e}else if(r!==i){i=$r(Error(w(424)),e),e=pf(t,e,r,n,i);break e}else for(We=cn(e.stateNode.containerInfo.firstChild),Ve=e,X=!0,at=null,n=Ig(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zr(),r===i){e=Bt(t,e,n);break e}Pe(t,e,r,n)}e=e.child}return e;case 5:return Tg(e),t===null&&wu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,mu(r,i)?o=null:s!==null&&mu(r,s)&&(e.flags|=32),Qg(t,e),Pe(t,e,o,n),e.child;case 6:return t===null&&wu(e),null;case 13:return Xg(t,e,n);case 4:return Vc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=jr(e,null,r,n):Pe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),df(t,e,r,i,n);case 7:return Pe(t,e,e.pendingProps,n),e.child;case 8:return Pe(t,e,e.pendingProps.children,n),e.child;case 12:return Pe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,G(To,r._currentValue),r._currentValue=o,s!==null)if(mt(s.value,o)){if(s.children===i.children&&!Ue.current){e=Bt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Lt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Eu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Eu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Pe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Pr(e,n),i=nt(i),r=r(i),e.flags|=1,Pe(t,e,r,n),e.child;case 14:return r=e.type,i=st(r,e.pendingProps),i=st(r.type,i),hf(t,e,r,i,n);case 15:return Kg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),ro(t,e),e.tag=1,ze(r)?(t=!0,Co(e)):t=!1,Pr(e,n),Cg(e,r,i),Su(e,r,i,n),ku(null,e,r,!0,t,n);case 19:return Jg(t,e,n);case 22:return Gg(t,e,n)}throw Error(w(156,e.tag))};function p_(t,e){return jm(t,e)}function IE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(t,e,n,r){return new IE(t,e,n,r)}function sd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function TE(t){if(typeof t=="function")return sd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ic)return 11;if(t===Tc)return 14}return 2}function pn(t,e){var n=t.alternate;return n===null?(n=Je(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function oo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")sd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case fr:return $n(n.children,i,s,e);case Sc:o=8,i|=8;break;case Ka:return t=Je(12,n,e,i|2),t.elementType=Ka,t.lanes=s,t;case Ga:return t=Je(13,n,e,i),t.elementType=Ga,t.lanes=s,t;case Qa:return t=Je(19,n,e,i),t.elementType=Qa,t.lanes=s,t;case Sm:return yl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Em:o=10;break e;case Cm:o=9;break e;case Ic:o=11;break e;case Tc:o=14;break e;case Qt:o=16,r=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=Je(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function $n(t,e,n,r){return t=Je(7,t,r,e),t.lanes=n,t}function yl(t,e,n,r){return t=Je(22,t,r,e),t.elementType=Sm,t.lanes=n,t.stateNode={isHidden:!1},t}function wa(t,e,n){return t=Je(6,t,null,e),t.lanes=n,t}function Ea(t,e,n){return e=Je(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function kE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ta(0),this.expirationTimes=ta(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ta(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function od(t,e,n,r,i,s,o,l,a){return t=new kE(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Je(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wc(s),t}function RE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function m_(t){if(!t)return wn;t=t._reactInternals;e:{if(sr(t)!==t||t.tag!==1)throw Error(w(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ze(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(w(171))}if(t.tag===1){var n=t.type;if(ze(n))return pg(t,n,e)}return e}function g_(t,e,n,r,i,s,o,l,a){return t=od(n,r,!0,t,i,s,o,l,a),t.context=m_(null),n=t.current,r=Oe(),i=fn(n),s=Lt(r,i),s.callback=e!=null?e:null,dn(n,s,i),t.current.lanes=i,fs(t,i,r),je(t,r),t}function vl(t,e,n,r){var i=e.current,s=Oe(),o=fn(i);return n=m_(n),e.context===null?e.context=n:e.pendingContext=n,e=Lt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=dn(i,e,o),t!==null&&(ht(t,i,o,s),eo(t,i,o)),o}function Mo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function If(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ld(t,e){If(t,e),(t=t.alternate)&&If(t,e)}function NE(){return null}var __=typeof reportError=="function"?reportError:function(t){console.error(t)};function ad(t){this._internalRoot=t}wl.prototype.render=ad.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));vl(t,e,null,null)};wl.prototype.unmount=ad.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Qn(function(){vl(null,t,null,null)}),e[zt]=null}};function wl(t){this._internalRoot=t}wl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Km();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Jt.length&&e!==0&&e<Jt[n].priority;n++);Jt.splice(n,0,t),n===0&&Qm(t)}};function ud(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function El(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tf(){}function PE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Mo(o);s.call(u)}}var o=g_(e,r,t,0,null,!1,!1,"",Tf);return t._reactRootContainer=o,t[zt]=o.current,Hi(t.nodeType===8?t.parentNode:t),Qn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Mo(a);l.call(u)}}var a=od(t,0,!1,null,null,!1,!1,"",Tf);return t._reactRootContainer=a,t[zt]=a.current,Hi(t.nodeType===8?t.parentNode:t),Qn(function(){vl(e,a,n,r)}),a}function Cl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Mo(o);l.call(a)}}vl(e,o,t,i)}else o=PE(n,e,t,i,r);return Mo(o)}Hm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=wi(e.pendingLanes);n!==0&&(Nc(e,n|1),je(e,se()),(B&6)===0&&(Wr=se()+500,Tn()))}break;case 13:Qn(function(){var r=jt(t,1);if(r!==null){var i=Oe();ht(r,t,1,i)}}),ld(t,1)}};Pc=function(t){if(t.tag===13){var e=jt(t,134217728);if(e!==null){var n=Oe();ht(e,t,134217728,n)}ld(t,134217728)}};qm=function(t){if(t.tag===13){var e=fn(t),n=jt(t,e);if(n!==null){var r=Oe();ht(n,t,e,r)}ld(t,e)}};Km=function(){return W};Gm=function(t,e){var n=W;try{return W=t,e()}finally{W=n}};su=function(t,e,n){switch(e){case"input":if(Ja(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=hl(r);if(!i)throw Error(w(90));Tm(r),Ja(r,i)}}}break;case"textarea":Rm(t,n);break;case"select":e=n.value,e!=null&&Tr(t,!!n.multiple,e,!1)}};bm=nd;Mm=Qn;var xE={usingClientEntryPoint:!1,Events:[ms,_r,hl,Am,Dm,nd]},fi={findFiberByHostInstance:Dn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},OE={bundleType:fi.bundleType,version:fi.version,rendererPackageName:fi.rendererPackageName,rendererConfig:fi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Um(t),t===null?null:t.stateNode},findFiberByHostInstance:fi.findFiberByHostInstance||NE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hs.isDisabled&&Hs.supportsFiber)try{al=Hs.inject(OE),wt=Hs}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xE;Ke.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ud(e))throw Error(w(200));return RE(t,e,null,n)};Ke.createRoot=function(t,e){if(!ud(t))throw Error(w(299));var n=!1,r="",i=__;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=od(t,1,!1,null,null,n,!1,r,i),t[zt]=e.current,Hi(t.nodeType===8?t.parentNode:t),new ad(e)};Ke.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=Um(e),t=t===null?null:t.stateNode,t};Ke.flushSync=function(t){return Qn(t)};Ke.hydrate=function(t,e,n){if(!El(e))throw Error(w(200));return Cl(null,t,e,!0,n)};Ke.hydrateRoot=function(t,e,n){if(!ud(t))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=__;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=g_(e,null,t,1,n!=null?n:null,i,!1,s,o),t[zt]=e.current,Hi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new wl(e)};Ke.render=function(t,e,n){if(!El(e))throw Error(w(200));return Cl(null,t,e,!1,n)};Ke.unmountComponentAtNode=function(t){if(!El(t))throw Error(w(40));return t._reactRootContainer?(Qn(function(){Cl(null,null,t,!1,function(){t._reactRootContainer=null,t[zt]=null})}),!0):!1};Ke.unstable_batchedUpdates=nd;Ke.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!El(n))throw Error(w(200));if(t==null||t._reactInternals===void 0)throw Error(w(38));return Cl(t,e,n,!1,r)};Ke.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Ke})(gm);var kf=gm.exports;Ha.createRoot=kf.createRoot,Ha.hydrateRoot=kf.hydrateRoot;/**
 * @remix-run/router v1.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lo(){return Lo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Lo.apply(this,arguments)}var on;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(on||(on={}));const Rf="popstate";function AE(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Uu("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:zu(i)}return bE(e,n,null,t)}function DE(){return Math.random().toString(36).substr(2,8)}function Nf(t){return{usr:t.state,key:t.key}}function Uu(t,e,n,r){return n===void 0&&(n=null),Lo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Zr(e):e,{state:n,key:e&&e.key||r||DE()})}function zu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Zr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function bE(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=on.Pop,a=null;function u(){l=on.Pop,a&&a({action:l,location:h.location})}function c(p,_){l=on.Push;let y=Uu(h.location,p,_);n&&n(y,p);let k=Nf(y),m=h.createHref(y);try{o.pushState(k,"",m)}catch{i.location.assign(m)}s&&a&&a({action:l,location:y})}function d(p,_){l=on.Replace;let y=Uu(h.location,p,_);n&&n(y,p);let k=Nf(y),m=h.createHref(y);o.replaceState(k,"",m),s&&a&&a({action:l,location:y})}let h={get action(){return l},get location(){return t(i,o)},listen(p){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Rf,u),a=p,()=>{i.removeEventListener(Rf,u),a=null}},createHref(p){return e(i,p)},push:c,replace:d,go(p){return o.go(p)}};return h}var Pf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Pf||(Pf={}));function ME(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Zr(e):e,i=v_(r.pathname||"/",n);if(i==null)return null;let s=y_(t);LE(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=HE(s[l],i);return o}function y_(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(ge(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let l=mn([r,o.relativePath]),a=n.concat(o);i.children&&i.children.length>0&&(ge(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),y_(i.children,e,a,l)),!(i.path==null&&!i.index)&&e.push({path:l,score:WE(l,i.index),routesMeta:a})}),e}function LE(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:VE(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const FE=/^:\w+$/,UE=3,zE=2,jE=1,BE=10,$E=-2,xf=t=>t==="*";function WE(t,e){let n=t.split("/"),r=n.length;return n.some(xf)&&(r+=$E),e&&(r+=zE),n.filter(i=>!xf(i)).reduce((i,s)=>i+(FE.test(s)?UE:s===""?jE:BE),r)}function VE(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function HE(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=qE({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;s.push({params:r,pathname:mn([i,c.pathname]),pathnameBase:XE(mn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=mn([i,c.pathnameBase]))}return s}function qE(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=KE(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=l[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=GE(l[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function KE(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),w_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,l)=>(r.push(l),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function GE(t,e){try{return decodeURIComponent(t)}catch(n){return w_(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function v_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function ge(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function w_(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function QE(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Zr(t):t;return{pathname:n?n.startsWith("/")?n:YE(n,e):e,search:JE(r),hash:ZE(i)}}function YE(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ca(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function E_(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Zr(t):(i=Lo({},t),ge(!i.pathname||!i.pathname.includes("?"),Ca("?","pathname","search",i)),ge(!i.pathname||!i.pathname.includes("#"),Ca("#","pathname","hash",i)),ge(!i.search||!i.search.includes("#"),Ca("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let d=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}l=d>=0?e[d]:"/"}let a=QE(i,l),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||c)&&(a.pathname+="/"),a}const mn=t=>t.join("/").replace(/\/\/+/g,"/"),XE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),JE=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ZE=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class eC{constructor(e,n,r){this.status=e,this.statusText=n||"",this.data=r}}function tC(t){return t instanceof eC}var Sl={exports:{}},Il={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nC=x.exports,rC=Symbol.for("react.element"),iC=Symbol.for("react.fragment"),sC=Object.prototype.hasOwnProperty,oC=nC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lC={key:!0,ref:!0,__self:!0,__source:!0};function C_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)sC.call(e,r)&&!lC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:rC,type:t,key:s,ref:o,props:i,_owner:oC.current}}Il.Fragment=iC;Il.jsx=C_;Il.jsxs=C_;(function(t){t.exports=Il})(Sl);const aC=Sl.exports.Fragment,R=Sl.exports.jsx,ue=Sl.exports.jsxs;/**
 * React Router v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ju(){return ju=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ju.apply(this,arguments)}function uC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const cC=typeof Object.is=="function"?Object.is:uC,{useState:dC,useEffect:hC,useLayoutEffect:fC,useDebugValue:pC}=Va;function mC(t,e,n){const r=e(),[{inst:i},s]=dC({inst:{value:r,getSnapshot:e}});return fC(()=>{i.value=r,i.getSnapshot=e,Sa(i)&&s({inst:i})},[t,r,e]),hC(()=>(Sa(i)&&s({inst:i}),t(()=>{Sa(i)&&s({inst:i})})),[t]),pC(r),r}function Sa(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!cC(n,r)}catch{return!0}}function gC(t,e,n){return e()}const _C=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yC=!_C,vC=yC?gC:mC;"useSyncExternalStore"in Va&&(t=>t.useSyncExternalStore)(Va);const wC=x.exports.createContext(null),EC=x.exports.createContext(null),S_=x.exports.createContext(null),cd=x.exports.createContext(null),Tl=x.exports.createContext(null),ei=x.exports.createContext({outlet:null,matches:[]}),I_=x.exports.createContext(null);function CC(t,e){let{relative:n}=e===void 0?{}:e;_s()||ge(!1);let{basename:r,navigator:i}=x.exports.useContext(cd),{hash:s,pathname:o,search:l}=R_(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:mn([r,o])),i.createHref({pathname:a,search:l,hash:s})}function _s(){return x.exports.useContext(Tl)!=null}function kl(){return _s()||ge(!1),x.exports.useContext(Tl).location}function T_(t){return t.filter((e,n)=>n===0||!e.route.index&&e.pathnameBase!==t[n-1].pathnameBase)}function k_(){_s()||ge(!1);let{basename:t,navigator:e}=x.exports.useContext(cd),{matches:n}=x.exports.useContext(ei),{pathname:r}=kl(),i=JSON.stringify(T_(n).map(l=>l.pathnameBase)),s=x.exports.useRef(!1);return x.exports.useEffect(()=>{s.current=!0}),x.exports.useCallback(function(l,a){if(a===void 0&&(a={}),!s.current)return;if(typeof l=="number"){e.go(l);return}let u=E_(l,JSON.parse(i),r,a.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:mn([t,u.pathname])),(a.replace?e.replace:e.push)(u,a.state,a)},[t,e,i,r])}function SC(){let{matches:t}=x.exports.useContext(ei),e=t[t.length-1];return e?e.params:{}}function R_(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=x.exports.useContext(ei),{pathname:i}=kl(),s=JSON.stringify(T_(r).map(o=>o.pathnameBase));return x.exports.useMemo(()=>E_(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function IC(t,e){_s()||ge(!1);let n=x.exports.useContext(S_),{matches:r}=x.exports.useContext(ei),i=r[r.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let l=kl(),a;if(e){var u;let _=typeof e=="string"?Zr(e):e;o==="/"||((u=_.pathname)==null?void 0:u.startsWith(o))||ge(!1),a=_}else a=l;let c=a.pathname||"/",d=o==="/"?c:c.slice(o.length)||"/",h=ME(t,{pathname:d}),p=NC(h&&h.map(_=>Object.assign({},_,{params:Object.assign({},s,_.params),pathname:mn([o,_.pathname]),pathnameBase:_.pathnameBase==="/"?o:mn([o,_.pathnameBase])})),r,n||void 0);return e?R(Tl.Provider,{value:{location:ju({pathname:"/",search:"",hash:"",state:null,key:"default"},a),navigationType:on.Pop},children:p}):p}function TC(){let t=xC(),e=tC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return ue(aC,{children:[R("h2",{children:"Unhandled Thrown Error!"}),R("h3",{style:{fontStyle:"italic"},children:e}),n?R("pre",{style:i,children:n}):null,R("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),ue("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",R("code",{style:s,children:"errorElement"})," props on\xA0",R("code",{style:s,children:"<Route>"})]})]})}class kC extends x.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?R(I_.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function RC(t){let{routeContext:e,match:n,children:r}=t,i=x.exports.useContext(wC);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),R(ei.Provider,{value:e,children:r})}function NC(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||ge(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,l)=>{let a=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||R(TC,{}):null,c=()=>R(RC,{match:o,routeContext:{outlet:s,matches:e.concat(r.slice(0,l+1))},children:a?u:o.route.element!==void 0?o.route.element:s});return n&&(o.route.errorElement||l===0)?R(kC,{location:n.location,component:u,error:a,children:c()}):c()},null)}var Of;(function(t){t.UseRevalidator="useRevalidator"})(Of||(Of={}));var Bu;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Bu||(Bu={}));function PC(t){let e=x.exports.useContext(S_);return e||ge(!1),e}function xC(){var t;let e=x.exports.useContext(I_),n=PC(Bu.UseRouteError),r=x.exports.useContext(ei),i=r.matches[r.matches.length-1];return e||(r||ge(!1),i.route.id||ge(!1),(t=n.errors)==null?void 0:t[i.route.id])}function $u(t){ge(!1)}function OC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=on.Pop,navigator:s,static:o=!1}=t;_s()&&ge(!1);let l=e.replace(/^\/*/,"/"),a=x.exports.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=Zr(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:p="default"}=r,_=x.exports.useMemo(()=>{let y=v_(u,l);return y==null?null:{pathname:y,search:c,hash:d,state:h,key:p}},[l,u,c,d,h,p]);return _==null?null:R(cd.Provider,{value:a,children:R(Tl.Provider,{children:n,value:{location:_,navigationType:i}})})}function AC(t){let{children:e,location:n}=t,r=x.exports.useContext(EC),i=r&&!e?r.router.routes:Wu(e);return IC(i,n)}var Af;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Af||(Af={}));new Promise(()=>{});function Wu(t,e){e===void 0&&(e=[]);let n=[];return x.exports.Children.forEach(t,(r,i)=>{if(!x.exports.isValidElement(r))return;if(r.type===x.exports.Fragment){n.push.apply(n,Wu(r.props.children,e));return}r.type!==$u&&ge(!1),!r.props.index||!r.props.children||ge(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=Wu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function DC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function bC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function MC(t,e){return t.button===0&&(!e||e==="_self")&&!bC(t)}const LC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function FC(t){let{basename:e,children:n,window:r}=t,i=x.exports.useRef();i.current==null&&(i.current=AE({window:r,v5Compat:!0}));let s=i.current,[o,l]=x.exports.useState({action:s.action,location:s.location});return x.exports.useLayoutEffect(()=>s.listen(l),[s]),R(OC,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const UC=x.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:c}=e,d=DC(e,LC),h=CC(u,{relative:i}),p=zC(u,{replace:o,state:l,target:a,preventScrollReset:c,relative:i});function _(y){r&&r(y),y.defaultPrevented||p(y)}return R("a",{...d,href:h,onClick:s?r:_,ref:n,target:a})});var Df;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Df||(Df={}));var bf;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(bf||(bf={}));function zC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,l=k_(),a=kl(),u=R_(t,{relative:o});return x.exports.useCallback(c=>{if(MC(c,n)){c.preventDefault();let d=r!==void 0?r:zu(a)===zu(u);l(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[a,l,u,r,i,n,t,s,o])}class Rl{constructor(){this.listeners=[],this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.push(e),this.onSubscribe(),()=>{this.listeners=this.listeners.filter(n=>n!==e),this.onUnsubscribe()}}hasListeners(){return this.listeners.length>0}onSubscribe(){}onUnsubscribe(){}}const dd=typeof window>"u";function ot(){}function jC(t,e){return typeof t=="function"?t(e):t}function BC(t){return typeof t=="number"&&t>=0&&t!==1/0}function $C(t,e){return Math.max(t+(e||0)-Date.now(),0)}function Ia(t,e,n){return Nl(t)?typeof e=="function"?{...n,queryKey:t,queryFn:e}:{...e,queryKey:t}:t}function Xt(t,e,n){return Nl(t)?[{...e,queryKey:t},n]:[t||{},e]}function Mf(t,e){const{type:n="all",exact:r,fetchStatus:i,predicate:s,queryKey:o,stale:l}=t;if(Nl(o)){if(r){if(e.queryHash!==hd(o,e.options))return!1}else if(!Fo(e.queryKey,o))return!1}if(n!=="all"){const a=e.isActive();if(n==="active"&&!a||n==="inactive"&&a)return!1}return!(typeof l=="boolean"&&e.isStale()!==l||typeof i<"u"&&i!==e.state.fetchStatus||s&&!s(e))}function Lf(t,e){const{exact:n,fetching:r,predicate:i,mutationKey:s}=t;if(Nl(s)){if(!e.options.mutationKey)return!1;if(n){if(Ln(e.options.mutationKey)!==Ln(s))return!1}else if(!Fo(e.options.mutationKey,s))return!1}return!(typeof r=="boolean"&&e.state.status==="loading"!==r||i&&!i(e))}function hd(t,e){return((e==null?void 0:e.queryKeyHashFn)||Ln)(t)}function Ln(t){return JSON.stringify(t,(e,n)=>Vu(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function Fo(t,e){return N_(t,e)}function N_(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(n=>!N_(t[n],e[n])):!1}function P_(t,e){if(t===e)return t;const n=Ff(t)&&Ff(e);if(n||Vu(t)&&Vu(e)){const r=n?t.length:Object.keys(t).length,i=n?e:Object.keys(e),s=i.length,o=n?[]:{};let l=0;for(let a=0;a<s;a++){const u=n?a:i[a];o[u]=P_(t[u],e[u]),o[u]===t[u]&&l++}return r===s&&l===r?t:o}return e}function Ff(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function Vu(t){if(!Uf(t))return!1;const e=t.constructor;if(typeof e>"u")return!0;const n=e.prototype;return!(!Uf(n)||!n.hasOwnProperty("isPrototypeOf"))}function Uf(t){return Object.prototype.toString.call(t)==="[object Object]"}function Nl(t){return Array.isArray(t)}function x_(t){return new Promise(e=>{setTimeout(e,t)})}function zf(t){x_(0).then(t)}function WC(){if(typeof AbortController=="function")return new AbortController}function VC(t,e,n){return n.isDataEqual!=null&&n.isDataEqual(t,e)?t:typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?P_(t,e):e}class HC extends Rl{constructor(){super(),this.setup=e=>{if(!dd&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),window.addEventListener("focus",n,!1),()=>{window.removeEventListener("visibilitychange",n),window.removeEventListener("focus",n)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.cleanup)==null||e.call(this),this.cleanup=void 0}}setEventListener(e){var n;this.setup=e,(n=this.cleanup)==null||n.call(this),this.cleanup=e(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()})}setFocused(e){this.focused=e,e&&this.onFocus()}onFocus(){this.listeners.forEach(e=>{e()})}isFocused(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)}}const Hu=new HC;class qC extends Rl{constructor(){super(),this.setup=e=>{if(!dd&&window.addEventListener){const n=()=>e();return window.addEventListener("online",n,!1),window.addEventListener("offline",n,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",n)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.cleanup)==null||e.call(this),this.cleanup=void 0}}setEventListener(e){var n;this.setup=e,(n=this.cleanup)==null||n.call(this),this.cleanup=e(r=>{typeof r=="boolean"?this.setOnline(r):this.onOnline()})}setOnline(e){this.online=e,e&&this.onOnline()}onOnline(){this.listeners.forEach(e=>{e()})}isOnline(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine}}const Uo=new qC;function KC(t){return Math.min(1e3*2**t,3e4)}function fd(t){return(t!=null?t:"online")==="online"?Uo.isOnline():!0}class O_{constructor(e){this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}}function Ta(t){return t instanceof O_}function A_(t){let e=!1,n=0,r=!1,i,s,o;const l=new Promise((k,m)=>{s=k,o=m}),a=k=>{r||(p(new O_(k)),t.abort==null||t.abort())},u=()=>{e=!0},c=()=>{e=!1},d=()=>!Hu.isFocused()||t.networkMode!=="always"&&!Uo.isOnline(),h=k=>{r||(r=!0,t.onSuccess==null||t.onSuccess(k),i==null||i(),s(k))},p=k=>{r||(r=!0,t.onError==null||t.onError(k),i==null||i(),o(k))},_=()=>new Promise(k=>{i=m=>{if(r||!d())return k(m)},t.onPause==null||t.onPause()}).then(()=>{i=void 0,r||t.onContinue==null||t.onContinue()}),y=()=>{if(r)return;let k;try{k=t.fn()}catch(m){k=Promise.reject(m)}Promise.resolve(k).then(h).catch(m=>{var f,g;if(r)return;const v=(f=t.retry)!=null?f:3,T=(g=t.retryDelay)!=null?g:KC,C=typeof T=="function"?T(n,m):T,S=v===!0||typeof v=="number"&&n<v||typeof v=="function"&&v(n,m);if(e||!S){p(m);return}n++,t.onFail==null||t.onFail(n,m),x_(C).then(()=>{if(d())return _()}).then(()=>{e?p(m):y()})})};return fd(t.networkMode)?y():_().then(y),{promise:l,cancel:a,continue:()=>{i==null||i()},cancelRetry:u,continueRetry:c}}const pd=console;function GC(){let t=[],e=0,n=c=>{c()},r=c=>{c()};const i=c=>{let d;e++;try{d=c()}finally{e--,e||l()}return d},s=c=>{e?t.push(c):zf(()=>{n(c)})},o=c=>(...d)=>{s(()=>{c(...d)})},l=()=>{const c=t;t=[],c.length&&zf(()=>{r(()=>{c.forEach(d=>{n(d)})})})};return{batch:i,batchCalls:o,schedule:s,setNotifyFunction:c=>{n=c},setBatchNotifyFunction:c=>{r=c}}}const xe=GC();class D_{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),BC(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(e){this.cacheTime=Math.max(this.cacheTime||0,e!=null?e:dd?1/0:5*60*1e3)}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class QC extends D_{constructor(e){super(),this.abortSignalConsumed=!1,this.defaultOptions=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.cache=e.cache,this.logger=e.logger||pd,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.initialState=e.state||YC(this.options),this.state=this.initialState,this.meta=e.meta}setOptions(e){this.options={...this.defaultOptions,...e},this.meta=e==null?void 0:e.meta,this.updateCacheTime(this.options.cacheTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.cache.remove(this)}setData(e,n){const r=VC(this.state.data,e,this.options);return this.dispatch({data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(e,n){this.dispatch({type:"setState",state:e,setStateOptions:n})}cancel(e){var n;const r=this.promise;return(n=this.retryer)==null||n.cancel(e),r?r.then(ot).catch(ot):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(e=>e.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(e=>e.getCurrentResult().isStale)}isStaleByTime(e=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!$C(this.state.dataUpdatedAt,e)}onFocus(){var e;const n=this.observers.find(r=>r.shouldFetchOnWindowFocus());n&&n.refetch({cancelRefetch:!1}),(e=this.retryer)==null||e.continue()}onOnline(){var e;const n=this.observers.find(r=>r.shouldFetchOnReconnect());n&&n.refetch({cancelRefetch:!1}),(e=this.retryer)==null||e.continue()}addObserver(e){this.observers.indexOf(e)===-1&&(this.observers.push(e),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.indexOf(e)!==-1&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(e,n){var r,i;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&n!=null&&n.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var s;return(s=this.retryer)==null||s.continueRetry(),this.promise}}if(e&&this.setOptions(e),!this.options.queryFn){const p=this.observers.find(_=>_.options.queryFn);p&&this.setOptions(p.options)}Array.isArray(this.options.queryKey);const o=WC(),l={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},a=p=>{Object.defineProperty(p,"signal",{enumerable:!0,get:()=>{if(o)return this.abortSignalConsumed=!0,o.signal}})};a(l);const u=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(l)):Promise.reject("Missing queryFn"),c={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:u,meta:this.meta};if(a(c),(r=this.options.behavior)==null||r.onFetch(c),this.revertState=this.state,this.state.fetchStatus==="idle"||this.state.fetchMeta!==((i=c.fetchOptions)==null?void 0:i.meta)){var d;this.dispatch({type:"fetch",meta:(d=c.fetchOptions)==null?void 0:d.meta})}const h=p=>{if(Ta(p)&&p.silent||this.dispatch({type:"error",error:p}),!Ta(p)){var _,y;(_=(y=this.cache.config).onError)==null||_.call(y,p,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=A_({fn:c.fetchFn,abort:o==null?void 0:o.abort.bind(o),onSuccess:p=>{var _,y;if(typeof p>"u"){h(new Error("undefined"));return}this.setData(p),(_=(y=this.cache.config).onSuccess)==null||_.call(y,p,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:h,onFail:()=>{this.dispatch({type:"failed"})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:c.options.retry,retryDelay:c.options.retryDelay,networkMode:c.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(e){const n=r=>{var i,s;switch(e.type){case"failed":return{...r,fetchFailureCount:r.fetchFailureCount+1};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,fetchFailureCount:0,fetchMeta:(i=e.meta)!=null?i:null,fetchStatus:fd(this.options.networkMode)?"fetching":"paused",...!r.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...r,data:e.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(s=e.dataUpdatedAt)!=null?s:Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0}};case"error":const o=e.error;return Ta(o)&&o.revert&&this.revertState?{...this.revertState}:{...r,error:o,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...e.state}}};this.state=n(this.state),xe.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate(e)}),this.cache.notify({query:this,type:"updated",action:e})})}}function YC(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,r=typeof t.initialData<"u"?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0,i=typeof e<"u";return{data:e,dataUpdateCount:0,dataUpdatedAt:i?r!=null?r:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isInvalidated:!1,status:i?"success":"loading",fetchStatus:"idle"}}class XC extends Rl{constructor(e){super(),this.config=e||{},this.queries=[],this.queriesMap={}}build(e,n,r){var i;const s=n.queryKey,o=(i=n.queryHash)!=null?i:hd(s,n);let l=this.get(o);return l||(l=new QC({cache:this,logger:e.getLogger(),queryKey:s,queryHash:o,options:e.defaultQueryOptions(n),state:r,defaultOptions:e.getQueryDefaults(s),meta:n.meta}),this.add(l)),l}add(e){this.queriesMap[e.queryHash]||(this.queriesMap[e.queryHash]=e,this.queries.push(e),this.notify({type:"added",query:e}))}remove(e){const n=this.queriesMap[e.queryHash];n&&(e.destroy(),this.queries=this.queries.filter(r=>r!==e),n===e&&delete this.queriesMap[e.queryHash],this.notify({type:"removed",query:e}))}clear(){xe.batch(()=>{this.queries.forEach(e=>{this.remove(e)})})}get(e){return this.queriesMap[e]}getAll(){return this.queries}find(e,n){const[r]=Xt(e,n);return typeof r.exact>"u"&&(r.exact=!0),this.queries.find(i=>Mf(r,i))}findAll(e,n){const[r]=Xt(e,n);return Object.keys(r).length>0?this.queries.filter(i=>Mf(r,i)):this.queries}notify(e){xe.batch(()=>{this.listeners.forEach(n=>{n(e)})})}onFocus(){xe.batch(()=>{this.queries.forEach(e=>{e.onFocus()})})}onOnline(){xe.batch(()=>{this.queries.forEach(e=>{e.onOnline()})})}}class JC extends D_{constructor(e){super(),this.options={...e.defaultOptions,...e.options},this.mutationId=e.mutationId,this.mutationCache=e.mutationCache,this.logger=e.logger||pd,this.observers=[],this.state=e.state||ZC(),this.meta=e.meta,this.updateCacheTime(this.options.cacheTime),this.scheduleGc()}setState(e){this.dispatch({type:"setState",state:e})}addObserver(e){this.observers.indexOf(e)===-1&&(this.observers.push(e),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.observers=this.observers.filter(n=>n!==e),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.observers.length||(this.state.status==="loading"?this.scheduleGc():this.mutationCache.remove(this))}continue(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()}async execute(){const e=()=>{var g;return this.retryer=A_({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:()=>{this.dispatch({type:"failed"})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:(g=this.options.retry)!=null?g:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},n=this.state.status==="loading";try{var r,i,s,o,l,a;if(!n){var u,c,d,h;this.dispatch({type:"loading",variables:this.options.variables}),(u=(c=this.mutationCache.config).onMutate)==null||u.call(c,this.state.variables,this);const v=await((d=(h=this.options).onMutate)==null?void 0:d.call(h,this.state.variables));v!==this.state.context&&this.dispatch({type:"loading",context:v,variables:this.state.variables})}const g=await e();return(r=(i=this.mutationCache.config).onSuccess)==null||r.call(i,g,this.state.variables,this.state.context,this),await((s=(o=this.options).onSuccess)==null?void 0:s.call(o,g,this.state.variables,this.state.context)),await((l=(a=this.options).onSettled)==null?void 0:l.call(a,g,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:g}),g}catch(g){try{var p,_,y,k,m,f;throw(p=(_=this.mutationCache.config).onError)==null||p.call(_,g,this.state.variables,this.state.context,this),await((y=(k=this.options).onError)==null?void 0:y.call(k,g,this.state.variables,this.state.context)),await((m=(f=this.options).onSettled)==null?void 0:m.call(f,void 0,g,this.state.variables,this.state.context)),g}finally{this.dispatch({type:"error",error:g})}}}dispatch(e){const n=r=>{switch(e.type){case"failed":return{...r,failureCount:r.failureCount+1};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"loading":return{...r,context:e.context,data:void 0,error:null,isPaused:!fd(this.options.networkMode),status:"loading",variables:e.variables};case"success":return{...r,data:e.data,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:e.error,failureCount:r.failureCount+1,isPaused:!1,status:"error"};case"setState":return{...r,...e.state}}};this.state=n(this.state),xe.batch(()=>{this.observers.forEach(r=>{r.onMutationUpdate(e)}),this.mutationCache.notify({mutation:this,type:"updated",action:e})})}}function ZC(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}class eS extends Rl{constructor(e){super(),this.config=e||{},this.mutations=[],this.mutationId=0}build(e,n,r){const i=new JC({mutationCache:this,logger:e.getLogger(),mutationId:++this.mutationId,options:e.defaultMutationOptions(n),state:r,defaultOptions:n.mutationKey?e.getMutationDefaults(n.mutationKey):void 0,meta:n.meta});return this.add(i),i}add(e){this.mutations.push(e),this.notify({type:"added",mutation:e})}remove(e){this.mutations=this.mutations.filter(n=>n!==e),this.notify({type:"removed",mutation:e})}clear(){xe.batch(()=>{this.mutations.forEach(e=>{this.remove(e)})})}getAll(){return this.mutations}find(e){return typeof e.exact>"u"&&(e.exact=!0),this.mutations.find(n=>Lf(e,n))}findAll(e){return this.mutations.filter(n=>Lf(e,n))}notify(e){xe.batch(()=>{this.listeners.forEach(n=>{n(e)})})}resumePausedMutations(){const e=this.mutations.filter(n=>n.state.isPaused);return xe.batch(()=>e.reduce((n,r)=>n.then(()=>r.continue().catch(ot)),Promise.resolve()))}}function tS(){return{onFetch:t=>{t.fetchFn=()=>{var e,n,r,i,s,o;const l=(e=t.fetchOptions)==null||(n=e.meta)==null?void 0:n.refetchPage,a=(r=t.fetchOptions)==null||(i=r.meta)==null?void 0:i.fetchMore,u=a==null?void 0:a.pageParam,c=(a==null?void 0:a.direction)==="forward",d=(a==null?void 0:a.direction)==="backward",h=((s=t.state.data)==null?void 0:s.pages)||[],p=((o=t.state.data)==null?void 0:o.pageParams)||[];let _=p,y=!1;const k=C=>{Object.defineProperty(C,"signal",{enumerable:!0,get:()=>{var S;if((S=t.signal)!=null&&S.aborted)y=!0;else{var I;(I=t.signal)==null||I.addEventListener("abort",()=>{y=!0})}return t.signal}})},m=t.options.queryFn||(()=>Promise.reject("Missing queryFn")),f=(C,S,I,j)=>(_=j?[S,..._]:[..._,S],j?[I,...C]:[...C,I]),g=(C,S,I,j)=>{if(y)return Promise.reject("Cancelled");if(typeof I>"u"&&!S&&C.length)return Promise.resolve(C);const D={queryKey:t.queryKey,pageParam:I,meta:t.meta};k(D);const Ne=m(D);return Promise.resolve(Ne).then(kn=>f(C,I,kn,j))};let v;if(!h.length)v=g([]);else if(c){const C=typeof u<"u",S=C?u:jf(t.options,h);v=g(h,C,S)}else if(d){const C=typeof u<"u",S=C?u:nS(t.options,h);v=g(h,C,S,!0)}else{_=[];const C=typeof t.options.getNextPageParam>"u";v=(l&&h[0]?l(h[0],0,h):!0)?g([],C,p[0]):Promise.resolve(f([],p[0],h[0]));for(let I=1;I<h.length;I++)v=v.then(j=>{if(l&&h[I]?l(h[I],I,h):!0){const Ne=C?p[I]:jf(t.options,j);return g(j,C,Ne)}return Promise.resolve(f(j,p[I],h[I]))})}return v.then(C=>({pages:C,pageParams:_}))}}}}function jf(t,e){return t.getNextPageParam==null?void 0:t.getNextPageParam(e[e.length-1],e)}function nS(t,e){return t.getPreviousPageParam==null?void 0:t.getPreviousPageParam(e[0],e)}class rS{constructor(e={}){this.queryCache=e.queryCache||new XC,this.mutationCache=e.mutationCache||new eS,this.logger=e.logger||pd,this.defaultOptions=e.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}mount(){this.unsubscribeFocus=Hu.subscribe(()=>{Hu.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=Uo.subscribe(()=>{Uo.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())})}unmount(){var e,n;(e=this.unsubscribeFocus)==null||e.call(this),(n=this.unsubscribeOnline)==null||n.call(this)}isFetching(e,n){const[r]=Xt(e,n);return r.fetchStatus="fetching",this.queryCache.findAll(r).length}isMutating(e){return this.mutationCache.findAll({...e,fetching:!0}).length}getQueryData(e,n){var r;return(r=this.queryCache.find(e,n))==null?void 0:r.state.data}getQueriesData(e){return this.getQueryCache().findAll(e).map(({queryKey:n,state:r})=>{const i=r.data;return[n,i]})}setQueryData(e,n,r){const i=this.queryCache.find(e),s=i==null?void 0:i.state.data,o=jC(n,s);if(typeof o>"u")return;const l=Ia(e),a=this.defaultQueryOptions(l);return this.queryCache.build(this,a).setData(o,{...r,manual:!0})}setQueriesData(e,n,r){return xe.batch(()=>this.getQueryCache().findAll(e).map(({queryKey:i})=>[i,this.setQueryData(i,n,r)]))}getQueryState(e,n){var r;return(r=this.queryCache.find(e,n))==null?void 0:r.state}removeQueries(e,n){const[r]=Xt(e,n),i=this.queryCache;xe.batch(()=>{i.findAll(r).forEach(s=>{i.remove(s)})})}resetQueries(e,n,r){const[i,s]=Xt(e,n,r),o=this.queryCache,l={type:"active",...i};return xe.batch(()=>(o.findAll(i).forEach(a=>{a.reset()}),this.refetchQueries(l,s)))}cancelQueries(e,n,r){const[i,s={}]=Xt(e,n,r);typeof s.revert>"u"&&(s.revert=!0);const o=xe.batch(()=>this.queryCache.findAll(i).map(l=>l.cancel(s)));return Promise.all(o).then(ot).catch(ot)}invalidateQueries(e,n,r){const[i,s]=Xt(e,n,r);return xe.batch(()=>{var o,l;if(this.queryCache.findAll(i).forEach(u=>{u.invalidate()}),i.refetchType==="none")return Promise.resolve();const a={...i,type:(o=(l=i.refetchType)!=null?l:i.type)!=null?o:"active"};return this.refetchQueries(a,s)})}refetchQueries(e,n,r){const[i,s]=Xt(e,n,r),o=xe.batch(()=>this.queryCache.findAll(i).filter(a=>!a.isDisabled()).map(a=>{var u;return a.fetch(void 0,{...s,cancelRefetch:(u=s==null?void 0:s.cancelRefetch)!=null?u:!0,meta:{refetchPage:i.refetchPage}})}));let l=Promise.all(o).then(ot);return s!=null&&s.throwOnError||(l=l.catch(ot)),l}fetchQuery(e,n,r){const i=Ia(e,n,r),s=this.defaultQueryOptions(i);typeof s.retry>"u"&&(s.retry=!1);const o=this.queryCache.build(this,s);return o.isStaleByTime(s.staleTime)?o.fetch(s):Promise.resolve(o.state.data)}prefetchQuery(e,n,r){return this.fetchQuery(e,n,r).then(ot).catch(ot)}fetchInfiniteQuery(e,n,r){const i=Ia(e,n,r);return i.behavior=tS(),this.fetchQuery(i)}prefetchInfiniteQuery(e,n,r){return this.fetchInfiniteQuery(e,n,r).then(ot).catch(ot)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(e){this.defaultOptions=e}setQueryDefaults(e,n){const r=this.queryDefaults.find(i=>Ln(e)===Ln(i.queryKey));r?r.defaultOptions=n:this.queryDefaults.push({queryKey:e,defaultOptions:n})}getQueryDefaults(e){if(!e)return;const n=this.queryDefaults.find(r=>Fo(e,r.queryKey));return n==null?void 0:n.defaultOptions}setMutationDefaults(e,n){const r=this.mutationDefaults.find(i=>Ln(e)===Ln(i.mutationKey));r?r.defaultOptions=n:this.mutationDefaults.push({mutationKey:e,defaultOptions:n})}getMutationDefaults(e){if(!e)return;const n=this.mutationDefaults.find(r=>Fo(e,r.mutationKey));return n==null?void 0:n.defaultOptions}defaultQueryOptions(e){if(e!=null&&e._defaulted)return e;const n={...this.defaultOptions.queries,...this.getQueryDefaults(e==null?void 0:e.queryKey),...e,_defaulted:!0};return!n.queryHash&&n.queryKey&&(n.queryHash=hd(n.queryKey,n)),typeof n.refetchOnReconnect>"u"&&(n.refetchOnReconnect=n.networkMode!=="always"),typeof n.useErrorBoundary>"u"&&(n.useErrorBoundary=!!n.suspense),n}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...this.defaultOptions.mutations,...this.getMutationDefaults(e==null?void 0:e.mutationKey),...e,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}const Bf=x.exports.createContext(void 0),iS=x.exports.createContext(!1);function sS(t,e){return t||(e&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=Bf),window.ReactQueryClientContext):Bf)}const oS=({client:t,children:e,context:n,contextSharing:r=!1})=>{x.exports.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]);const i=sS(n,r);return R(iS.Provider,{value:!n&&r,children:R(i.Provider,{value:t,children:e})})};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=function(t,e){if(!t)throw ti(e)},ti=function(t){return new Error("Firebase Database ("+b_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},lS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},md={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=s>>2,d=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,p=u&63;a||(p=64,o||(h=64)),r.push(n[c],n[d],n[h],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(M_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||d==null)throw Error();const h=s<<2|l>>4;if(r.push(h),u!==64){const p=l<<4&240|u>>2;if(r.push(p),d!==64){const _=u<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},L_=function(t){const e=M_(t);return md.encodeByteArray(e,!0)},zo=function(t){return L_(t).replace(/\./g,"")},jo=function(t){try{return md.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(t){return F_(void 0,t)}function F_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!uS(n)||(t[n]=F_(t[n],e[n]));return t}function uS(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function U_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function z_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cS(){const t=Re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function j_(){return b_.NODE_ADMIN===!0}function B_(){return typeof indexedDB=="object"}function $_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function dS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function hS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS=()=>hS().__FIREBASE_DEFAULTS__,pS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&jo(t[1]);return e&&JSON.parse(e)},_d=()=>{try{return fS()||pS()||mS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},W_=t=>{var e,n;return(n=(e=_d())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gS=t=>{const e=W_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},_S=()=>{var t;return(t=_d())===null||t===void 0?void 0:t.config},V_=t=>{var e;return(e=_d())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[zo(JSON.stringify(n)),zo(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS="FirebaseError";class kt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vS,Object.setPrototypeOf(this,kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,or.prototype.create)}}class or{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?wS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new kt(i,l,r)}}function wS(t,e){return t.replace(ES,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ES=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(t){return JSON.parse(t)}function pe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=es(jo(s[0])||""),n=es(jo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},CS=function(t){const e=H_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},SS=function(t){const e=H_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Vr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function qu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Bo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function $o(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if($f(s)&&$f(o)){if(!$o(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function $f(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=l^s&(o^l),c=1518500249):(u=s^o^l,c=1859775393):d<60?(u=s&o|l&(s|o),c=2400959708):(u=s^o^l,c=3395469782);const h=(i<<5|i>>>27)+u+a+c+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function TS(t,e){const n=new kS(t,e);return n.subscribe.bind(n)}class kS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");RS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ka),i.error===void 0&&(i.error=ka),i.complete===void 0&&(i.complete=ka);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ka(){}function yd(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,E(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},xl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=1e3,xS=2,OS=4*60*60*1e3,AS=.5;function Wf(t,e=PS,n=xS){const r=e*Math.pow(n,t),i=Math.round(AS*r*(Math.random()-.5)*2);return Math.min(OS,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t){return t&&t._delegate?t._delegate:t}class gt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Pl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(MS(e))try{this.getOrInitializeService({instanceIdentifier:On})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=On){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=On){return this.instances.has(e)}getOptions(e=On){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=On){return this.component?this.component.multipleInstances?e:On:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bS(t){return t===On?void 0:t}function MS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new DS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(H||(H={}));const FS={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},US=H.INFO,zS={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},jS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=zS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ol{constructor(e){this.name=e,this._logLevel=US,this._logHandler=jS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?FS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const BS=(t,e)=>e.some(n=>t instanceof n);let Vf,Hf;function $S(){return Vf||(Vf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function WS(){return Hf||(Hf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const q_=new WeakMap,Ku=new WeakMap,K_=new WeakMap,Ra=new WeakMap,vd=new WeakMap;function VS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(gn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&q_.set(n,t)}).catch(()=>{}),vd.set(e,t),e}function HS(t){if(Ku.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ku.set(t,e)}let Gu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ku.get(t);if(e==="objectStoreNames")return t.objectStoreNames||K_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qS(t){Gu=t(Gu)}function KS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Na(this),e,...n);return K_.set(r,e.sort?e.sort():[e]),gn(r)}:WS().includes(t)?function(...e){return t.apply(Na(this),e),gn(q_.get(this))}:function(...e){return gn(t.apply(Na(this),e))}}function GS(t){return typeof t=="function"?KS(t):(t instanceof IDBTransaction&&HS(t),BS(t,$S())?new Proxy(t,Gu):t)}function gn(t){if(t instanceof IDBRequest)return VS(t);if(Ra.has(t))return Ra.get(t);const e=GS(t);return e!==t&&(Ra.set(t,e),vd.set(e,t)),e}const Na=t=>vd.get(t);function G_(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=gn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(gn(o.result),a.oldVersion,a.newVersion,gn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const QS=["get","getKey","getAll","getAllKeys","count"],YS=["put","add","delete","clear"],Pa=new Map;function qf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pa.get(e))return Pa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=YS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||QS.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Pa.set(e,s),s}qS(t=>({...t,get:(e,n,r)=>qf(e,n)||t.get(e,n,r),has:(e,n)=>!!qf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(JS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function JS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qu="@firebase/app",Kf="0.8.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=new Ol("@firebase/app"),ZS="@firebase/app-compat",eI="@firebase/analytics-compat",tI="@firebase/analytics",nI="@firebase/app-check-compat",rI="@firebase/app-check",iI="@firebase/auth",sI="@firebase/auth-compat",oI="@firebase/database",lI="@firebase/database-compat",aI="@firebase/functions",uI="@firebase/functions-compat",cI="@firebase/installations",dI="@firebase/installations-compat",hI="@firebase/messaging",fI="@firebase/messaging-compat",pI="@firebase/performance",mI="@firebase/performance-compat",gI="@firebase/remote-config",_I="@firebase/remote-config-compat",yI="@firebase/storage",vI="@firebase/storage-compat",wI="@firebase/firestore",EI="@firebase/firestore-compat",CI="firebase",SI="9.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu="[DEFAULT]",II={[Qu]:"fire-core",[ZS]:"fire-core-compat",[tI]:"fire-analytics",[eI]:"fire-analytics-compat",[rI]:"fire-app-check",[nI]:"fire-app-check-compat",[iI]:"fire-auth",[sI]:"fire-auth-compat",[oI]:"fire-rtdb",[lI]:"fire-rtdb-compat",[aI]:"fire-fn",[uI]:"fire-fn-compat",[cI]:"fire-iid",[dI]:"fire-iid-compat",[hI]:"fire-fcm",[fI]:"fire-fcm-compat",[pI]:"fire-perf",[mI]:"fire-perf-compat",[gI]:"fire-rc",[_I]:"fire-rc-compat",[yI]:"fire-gcs",[vI]:"fire-gcs-compat",[wI]:"fire-fst",[EI]:"fire-fst-compat","fire-js":"fire-js",[CI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo=new Map,Xu=new Map;function TI(t,e){try{t.container.addComponent(e)}catch(n){Yn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function It(t){const e=t.name;if(Xu.has(e))return Yn.debug(`There were multiple attempts to register component ${e}.`),!1;Xu.set(e,t);for(const n of Wo.values())TI(n,t);return!0}function ys(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},_n=new or("app","Firebase",kI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _n.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=SI;function Q_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Yu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw _n.create("bad-app-name",{appName:String(i)});if(n||(n=_S()),!n)throw _n.create("no-options");const s=Wo.get(i);if(s){if($o(n,s.options)&&$o(r,s.config))return s;throw _n.create("duplicate-app",{appName:i})}const o=new LS(i);for(const a of Xu.values())o.addComponent(a);const l=new RI(n,r,o);return Wo.set(i,l),l}function Y_(t=Yu){const e=Wo.get(t);if(!e&&t===Yu)return Q_();if(!e)throw _n.create("no-app",{appName:t});return e}function tt(t,e,n){var r;let i=(r=II[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yn.warn(l.join(" "));return}It(new gt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI="firebase-heartbeat-database",PI=1,ts="firebase-heartbeat-store";let xa=null;function X_(){return xa||(xa=G_(NI,PI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ts)}}}).catch(t=>{throw _n.create("idb-open",{originalErrorMessage:t.message})})),xa}async function xI(t){var e;try{return(await X_()).transaction(ts).objectStore(ts).get(J_(t))}catch(n){if(n instanceof kt)Yn.warn(n.message);else{const r=_n.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Yn.warn(r.message)}}}async function Gf(t,e){var n;try{const i=(await X_()).transaction(ts,"readwrite");return await i.objectStore(ts).put(e,J_(t)),i.done}catch(r){if(r instanceof kt)Yn.warn(r.message);else{const i=_n.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Yn.warn(i.message)}}}function J_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI=1024,AI=30*24*60*60*1e3;class DI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new MI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Qf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=AI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Qf(),{heartbeatsToSend:n,unsentEntries:r}=bI(this._heartbeatsCache.heartbeats),i=zo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Qf(){return new Date().toISOString().substring(0,10)}function bI(t,e=OI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Yf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Yf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class MI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return B_()?$_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await xI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Yf(t){return zo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(t){It(new gt("platform-logger",e=>new XS(e),"PRIVATE")),It(new gt("heartbeat",e=>new DI(e),"PRIVATE")),tt(Qu,Kf,t),tt(Qu,Kf,"esm2017"),tt("fire-js","")}LI("");var FI="firebase",UI="9.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tt(FI,UI,"app");const Xf="@firebase/database",Jf="0.13.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Z_="";function zI(t){Z_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:es(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Rt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new jI(e)}}catch{}return new BI},Fn=ey("localStorage"),Ju=ey("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new Ol("@firebase/database"),$I=function(){let t=1;return function(){return t++}}(),ty=function(t){const e=NS(t),n=new IS;n.update(e);const r=n.digest();return md.encodeByteArray(r)},ws=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ws.apply(null,r):typeof r=="object"?e+=pe(r):e+=r,e+=" "}return e};let Wn=null,Zf=!0;const WI=function(t,e){E(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Or.logLevel=H.VERBOSE,Wn=Or.log.bind(Or),e&&Ju.set("logging_enabled",!0)):typeof t=="function"?Wn=t:(Wn=null,Ju.remove("logging_enabled"))},ye=function(...t){if(Zf===!0&&(Zf=!1,Wn===null&&Ju.get("logging_enabled")===!0&&WI(!0)),Wn){const e=ws.apply(null,t);Wn(e)}},Es=function(t){return function(...e){ye(t,...e)}},Zu=function(...t){const e="FIREBASE INTERNAL ERROR: "+ws(...t);Or.error(e)},$t=function(...t){const e=`FIREBASE FATAL ERROR: ${ws(...t)}`;throw Or.error(e),new Error(e)},Be=function(...t){const e="FIREBASE WARNING: "+ws(...t);Or.warn(e)},VI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Be("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},wd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},HI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Hr="[MIN_NAME]",Xn="[MAX_NAME]",lr=function(t,e){if(t===e)return 0;if(t===Hr||e===Xn)return-1;if(e===Hr||t===Xn)return 1;{const n=ep(t),r=ep(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},qI=function(t,e){return t===e?0:t<e?-1:1},pi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+pe(e))},Ed=function(t){if(typeof t!="object"||t===null)return pe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=pe(e[r]),n+=":",n+=Ed(t[e[r]]);return n+="}",n},ny=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ce(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ry=function(t){E(!wd(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(a=0;a<64;a+=8){let h=parseInt(c.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},KI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},GI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function QI(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const YI=new RegExp("^-?(0*)\\d{1,10}$"),XI=-2147483648,JI=2147483647,ep=function(t){if(YI.test(t)){const e=Number(t);if(e>=XI&&e<=JI)return e}return null},ri=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Be("Exception was thrown by user callback.",n),e},Math.floor(0))}},ZI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Oi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Be(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ye("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Be(e)}}class Ar{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ar.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd="5",iy="v",sy="s",oy="r",ly="f",ay=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,uy="ls",cy="p",ec="ac",dy="websocket",hy="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,n,r,i,s=!1,o="",l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Fn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Fn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function nT(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function py(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let r;if(e===dy)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===hy)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);nT(t)&&(n.ns=t.namespace);const i=[];return Ce(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(){this.counters_={}}incrementCounter(e,n=1){Rt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return aS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa={},Aa={};function Sd(t){const e=t.toString();return Oa[e]||(Oa[e]=new rT),Oa[e]}function iT(t,e){const n=t.toString();return Aa[n]||(Aa[n]=e()),Aa[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ri(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp="start",oT="close",lT="pLPCommand",aT="pRTLPCB",my="id",gy="pw",_y="ser",uT="cb",cT="seg",dT="ts",hT="d",fT="dframe",yy=1870,vy=30,pT=yy-vy,mT=25e3,gT=3e4;class Ir{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Es(e),this.stats_=Sd(n),this.urlFn=a=>(this.appCheckToken&&(a[ec]=this.appCheckToken),py(n,hy,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new sT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(gT)),HI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Id((...s)=>{const[o,l,a,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===tp)this.id=l,this.password=a;else if(o===oT)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[tp]="t",r[_y]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[uT]=this.scriptTagHolder.uniqueCallbackIdentifier),r[iy]=Cd,this.transportSessionId&&(r[sy]=this.transportSessionId),this.lastSessionId&&(r[uy]=this.lastSessionId),this.applicationId&&(r[cy]=this.applicationId),this.appCheckToken&&(r[ec]=this.appCheckToken),typeof location<"u"&&location.hostname&&ay.test(location.hostname)&&(r[oy]=ly);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ir.forceAllow_=!0}static forceDisallow(){Ir.forceDisallow_=!0}static isAvailable(){return Ir.forceAllow_?!0:!Ir.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!KI()&&!GI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=L_(n),i=ny(r,pT);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[fT]="t",r[my]=e,r[gy]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Id{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=$I(),window[lT+this.uniqueCallbackIdentifier]=e,window[aT+this.uniqueCallbackIdentifier]=n,this.myIFrame=Id.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const l=document.domain;s='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ye("frame writing exception"),l.stack&&ye(l.stack),ye(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ye("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[my]=this.myID,e[gy]=this.myPW,e[_y]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+vy+r.length<=yy;){const o=this.pendingSegs.shift();r=r+"&"+cT+i+"="+o.seg+"&"+dT+i+"="+o.ts+"&"+hT+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(mT)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ye("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T=16384,yT=45e3;let Vo=null;typeof MozWebSocket<"u"?Vo=MozWebSocket:typeof WebSocket<"u"&&(Vo=WebSocket);class ut{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Es(this.connId),this.stats_=Sd(n),this.connURL=ut.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[iy]=Cd,typeof location<"u"&&location.hostname&&ay.test(location.hostname)&&(o[oy]=ly),n&&(o[sy]=n),r&&(o[uy]=r),i&&(o[ec]=i),s&&(o[cy]=s),py(e,dy,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Fn.set("previous_websocket_failure",!0);try{let r;j_(),this.mySock=new Vo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ut.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Vo!==null&&!ut.forceDisallow_}static previouslyFailed(){return Fn.isInMemoryStorage||Fn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Fn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=es(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ny(n,_T);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(yT))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ut.responsesRequiredToBeHealthy=2;ut.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ir,ut]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ut&&ut.isAvailable();let r=n&&!ut.previouslyFailed();if(e.webSocketOnly&&(n||Be("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ut];else{const i=this.transports_=[];for(const s of ns.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ns.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ns.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT=6e4,wT=5e3,ET=10*1024,CT=100*1024,Da="t",np="d",ST="s",rp="r",IT="e",ip="o",sp="a",op="n",lp="p",TT="h";class kT{constructor(e,n,r,i,s,o,l,a,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Es("c:"+this.id+":"),this.transportManager_=new ns(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Oi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>CT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ET?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Da in e){const n=e[Da];n===sp?this.upgradeIfSecondaryHealthy_():n===rp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ip&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=pi("t",e),r=pi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:lp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:sp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:op,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=pi("t",e),r=pi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=pi(Da,e);if(np in e){const r=e[np];if(n===TT)this.onHandshake_(r);else if(n===op){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ST?this.onConnectionShutdown_(r):n===rp?this.onReset_(r):n===IT?Zu("Server Error: "+r):n===ip?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Zu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Cd!==r&&Be("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Oi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(vT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Oi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(wT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:lp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Fn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho extends Ey{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!gd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ho}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap=32,up=768;class V{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function $(){return new V("")}function F(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function En(t){return t.pieces_.length-t.pieceNum_}function K(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new V(t.pieces_,e)}function Td(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function RT(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function rs(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Cy(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new V(e,0)}function ne(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof V)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new V(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function Le(t,e){const n=F(t),r=F(e);if(n===null)return e;if(n===r)return Le(K(t),K(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function NT(t,e){const n=rs(t,0),r=rs(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=lr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function kd(t,e){if(En(t)!==En(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Ze(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(En(t)>En(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class PT{constructor(e,n){this.errorPrefix_=n,this.parts_=rs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=xl(this.parts_[r]);Sy(this)}}function xT(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=xl(e),Sy(t)}function OT(t){const e=t.parts_.pop();t.byteLength_-=xl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Sy(t){if(t.byteLength_>up)throw new Error(t.errorPrefix_+"has a key path longer than "+up+" bytes ("+t.byteLength_+").");if(t.parts_.length>ap)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ap+") or object contains a cycle "+An(t))}function An(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd extends Ey{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Rd}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=1e3,AT=60*5*1e3,cp=30*1e3,DT=1.3,bT=3e4,MT="server_kill",dp=3;class Ft extends wy{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Ft.nextPersistentConnectionId_++,this.log_=Es("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=mi,this.maxReconnectDelay_=AT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!j_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Rd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ho.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(pe(s)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Pl,r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Ft.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Rt(e,"w")){const r=Vr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Be(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||SS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=cp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=CS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+pe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Zu("Unrecognized action received from server: "+pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=mi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=mi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>bT&&(this.reconnectDelay_=mi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*DT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ft.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){E(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?ye("getToken() completed but was canceled"):(ye("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,l=new kT(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{Be(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(MT)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Be(d),a())}}}interrupt(e){ye("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ye("Resuming connection for reason: "+e),delete this.interruptReasons_[e],qu(this.interruptReasons_)&&(this.reconnectDelay_=mi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Ed(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new V(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ye("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=dp&&(this.reconnectDelay_=cp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ye("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=dp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Z_.replace(/\./g,"-")]=1,gd()?e["framework.cordova"]=1:z_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ho.getInstance().currentlyOnline();return qu(this.interruptReasons_)&&e}}Ft.nextPersistentConnectionId_=0;Ft.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new L(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new L(Hr,e),i=new L(Hr,n);return this.compare(r,i)!==0}minPost(){return L.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qs;class Iy extends Al{static get __EMPTY_NODE(){return qs}static set __EMPTY_NODE(e){qs=e}compare(e,n){return lr(e.name,n.name)}isDefinedOn(e){throw ti("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return L.MIN}maxPost(){return new L(Xn,qs)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new L(e,qs)}toString(){return".key"}}const Dr=new Iy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class fe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:fe.RED,this.left=i!=null?i:Fe.EMPTY_NODE,this.right=s!=null?s:Fe.EMPTY_NODE}copy(e,n,r,i,s){return new fe(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Fe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Fe.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}fe.RED=!0;fe.BLACK=!1;class LT{copy(e,n,r,i,s){return this}insert(e,n,r){return new fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Fe{constructor(e,n=Fe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Fe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,fe.BLACK,null,null))}remove(e){return new Fe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,fe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ks(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ks(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ks(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ks(this.root_,null,this.comparator_,!0,e)}}Fe.EMPTY_NODE=new LT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(t,e){return lr(t.name,e.name)}function Nd(t,e){return lr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tc;function UT(t){tc=t}const Ty=function(t){return typeof t=="number"?"number:"+ry(t):"string:"+t},ky=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Rt(e,".sv"),"Priority must be a string or number.")}else E(t===tc||t.isEmpty(),"priority of unexpected type.");E(t===tc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hp;class de{constructor(e,n=de.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ky(this.priorityNode_)}static set __childrenNodeConstructor(e){hp=e}static get __childrenNodeConstructor(){return hp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new de(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:F(e)===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:de.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=F(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(E(r!==".priority"||En(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,de.__childrenNodeConstructor.EMPTY_NODE.updateChild(K(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ty(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ry(this.value_):e+=this.value_,this.lazyHash_=ty(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===de.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof de.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=de.VALUE_TYPE_ORDER.indexOf(n),s=de.VALUE_TYPE_ORDER.indexOf(r);return E(i>=0,"Unknown leaf type: "+n),E(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}de.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ry,Ny;function zT(t){Ry=t}function jT(t){Ny=t}class BT extends Al{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?lr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return L.MIN}maxPost(){return new L(Xn,new de("[PRIORITY-POST]",Ny))}makePost(e,n){const r=Ry(e);return new L(n,new de("[PRIORITY-POST]",r))}toString(){return".priority"}}const re=new BT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T=Math.log(2);class WT{constructor(e){const n=s=>parseInt(Math.log(s)/$T,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const qo=function(t,e,n,r){t.sort(e);const i=function(a,u){const c=u-a;let d,h;if(c===0)return null;if(c===1)return d=t[a],h=n?n(d):d,new fe(h,d.node,fe.BLACK,null,null);{const p=parseInt(c/2,10)+a,_=i(a,p),y=i(p+1,u);return d=t[p],h=n?n(d):d,new fe(h,d.node,fe.BLACK,_,y)}},s=function(a){let u=null,c=null,d=t.length;const h=function(_,y){const k=d-_,m=d;d-=_;const f=i(k+1,m),g=t[k],v=n?n(g):g;p(new fe(v,g.node,y,null,f))},p=function(_){u?(u.left=_,u=_):(c=_,u=_)};for(let _=0;_<a.count;++_){const y=a.nextBitIsOne(),k=Math.pow(2,a.count-(_+1));y?h(k,fe.BLACK):(h(k,fe.BLACK),h(k,fe.RED))}return c},o=new WT(t.length),l=s(o);return new Fe(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ba;const dr={};class Dt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return E(dr&&re,"ChildrenNode.ts has not been loaded"),ba=ba||new Dt({".priority":dr},{".priority":re}),ba}get(e){const n=Vr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Fe?n:null}hasIndex(e){return Rt(this.indexSet_,e.toString())}addIndex(e,n){E(e!==Dr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(L.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=qo(r,e.getCompare()):l=dr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new Dt(c,u)}addToIndexes(e,n){const r=Bo(this.indexes_,(i,s)=>{const o=Vr(this.indexSet_,s);if(E(o,"Missing index implementation for "+s),i===dr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(L.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),qo(l,o.getCompare())}else return dr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new L(e.name,l))),a.insert(e,e.node)}});return new Dt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Bo(this.indexes_,i=>{if(i===dr)return i;{const s=n.get(e.name);return s?i.remove(new L(e.name,s)):i}});return new Dt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gi;class O{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&ky(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return gi||(gi=new O(new Fe(Nd),null,Dt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||gi}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?gi:n}}getChild(e){const n=F(e);return n===null?this:this.getImmediateChild(n).getChild(K(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new L(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?gi:this.priorityNode_;return new O(i,o,s)}}updateChild(e,n){const r=F(e);if(r===null)return n;{E(F(e)!==".priority"||En(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(K(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(re,(o,l)=>{n[o]=l.val(e),r++,s&&O.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ty(this.getPriority().val())+":"),this.forEachChild(re,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":ty(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new L(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new L(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new L(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,L.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,L.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Cs?-1:0}withIndex(e){if(e===Dr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Dr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(re),i=n.getIterator(re);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Dr?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class VT extends O{constructor(){super(new Fe(Nd),O.EMPTY_NODE,Dt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const Cs=new VT;Object.defineProperties(L,{MIN:{value:new L(Hr,O.EMPTY_NODE)},MAX:{value:new L(Xn,Cs)}});Iy.__EMPTY_NODE=O.EMPTY_NODE;de.__childrenNodeConstructor=O;UT(Cs);jT(Cs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT=!0;function ve(t,e=null){if(t===null)return O.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new de(n,ve(e))}if(!(t instanceof Array)&&HT){const n=[];let r=!1;if(Ce(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ve(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new L(o,a)))}}),n.length===0)return O.EMPTY_NODE;const s=qo(n,FT,o=>o.name,Nd);if(r){const o=qo(n,re.getCompare());return new O(s,ve(e),new Dt({".priority":o},{".priority":re}))}else return new O(s,ve(e),Dt.Default)}else{let n=O.EMPTY_NODE;return Ce(t,(r,i)=>{if(Rt(t,r)&&r.substring(0,1)!=="."){const s=ve(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ve(e))}}zT(ve);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT extends Al{constructor(e){super(),this.indexPath_=e,E(!U(e)&&F(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?lr(e.name,n.name):s}makePost(e,n){const r=ve(e),i=O.EMPTY_NODE.updateChild(this.indexPath_,r);return new L(n,i)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,Cs);return new L(Xn,e)}toString(){return rs(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT extends Al{compare(e,n){const r=e.node.compareTo(n.node);return r===0?lr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return L.MIN}maxPost(){return L.MAX}makePost(e,n){const r=ve(e);return new L(n,r)}toString(){return".value"}}const GT=new KT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(t){return{type:"value",snapshotNode:t}}function qr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function is(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ss(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function QT(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(is(n,l)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(qr(n,r)):o.trackChildChange(ss(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(re,(i,s)=>{n.hasChild(i)||r.trackChildChange(is(i,s))}),n.isLeafNode()||n.forEachChild(re,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ss(i,s,o))}else r.trackChildChange(qr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?O.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.indexedFilter_=new Pd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=os.getStartPost_(e),this.endPost_=os.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,s,o){return this.matches(new L(n,r))||(r=O.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=O.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(O.EMPTY_NODE);const s=this;return n.forEachChild(re,(o,l)=>{s.matches(new L(o,l))||(i=i.updateImmediateChild(o,O.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e){this.rangedFilter_=new os(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new L(n,r))||(r=O.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=O.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();let a;if(this.reverse_?a=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:a=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,a)i=i.updateImmediateChild(l.name,l.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(O.EMPTY_NODE);let s,o,l,a;if(this.reverse_){a=i.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const d=this.index_.getCompare();l=(h,p)=>d(p,h)}else a=i.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let u=0,c=!1;for(;a.hasNext();){const d=a.getNext();!c&&l(s,d)<=0&&(c=!0),c&&u<this.limit_&&l(d,o)<=0?u++:i=i.updateImmediateChild(d.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,p)=>d(p,h)}else o=this.index_.getCompare();const l=e;E(l.numChildren()===this.limit_,"");const a=new L(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const p=h==null?1:o(h,a);if(c&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(ss(n,r,d)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(is(n,d));const y=l.updateImmediateChild(n,O.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(qr(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return r.isEmpty()?e:c&&o(u,a)>=0?(s!=null&&(s.trackChildChange(is(u.name,u.node)),s.trackChildChange(qr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,O.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=re}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Hr}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===re}copy(){const e=new xd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function XT(t){return t.loadsAllData()?new Pd(t.getIndex()):t.hasLimit()?new YT(t):new os(t)}function fp(t){const e={};if(t.isDefault())return e;let n;return t.index_===re?n="$priority":t.index_===GT?n="$value":t.index_===Dr?n="$key":(E(t.index_ instanceof qT,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=pe(n),t.startSet_&&(e.startAt=pe(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+pe(t.indexStartName_))),t.endSet_&&(e.endAt=pe(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+pe(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function pp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==re&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko extends wy{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Es("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ko.getListenId_(e,r),l={};this.listens_[o]=l;const a=fp(e._queryParams);this.restRequest_(s+".json",a,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Vr(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Ko.getListenId_(e,n);delete this.listens_[r]}get(e){const n=fp(e._queryParams),r=e._path.toString(),i=new Pl;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ni(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=es(l.responseText)}catch{Be("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Be("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(){return{value:null,children:new Map}}function xy(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=F(e);t.children.has(r)||t.children.set(r,Go());const i=t.children.get(r);e=K(e),xy(i,e,n)}}function nc(t,e,n){t.value!==null?n(e,t.value):ZT(t,(r,i)=>{const s=new V(e.toString()+"/"+r);nc(i,s,n)})}function ZT(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ce(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp=10*1e3,tk=30*1e3,nk=5*60*1e3;class rk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new ek(e);const r=mp+(tk-mp)*Math.random();Oi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ce(e,(i,s)=>{s>0&&Rt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Oi(this.reportStats_.bind(this),Math.floor(Math.random()*2*nk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ct||(ct={}));function Od(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ad(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Dd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ct.ACK_USER_WRITE,this.source=Od()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new V(e));return new Qo($(),n,this.revert)}}else return E(F(this.path)===e,"operationForChild called for unrelated child."),new Qo(K(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,n){this.source=e,this.path=n,this.type=ct.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new ls(this.source,$()):new ls(this.source,K(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ct.OVERWRITE}operationForChild(e){return U(this.path)?new Jn(this.source,$(),this.snap.getImmediateChild(e)):new Jn(this.source,K(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ct.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new V(e));return n.isEmpty()?null:n.value?new Jn(this.source,$(),n.value):new Kr(this.source,$(),n)}else return E(F(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Kr(this.source,K(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=F(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function sk(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(QT(o.childName,o.snapshotNode))}),_i(t,i,"child_removed",e,r,n),_i(t,i,"child_added",e,r,n),_i(t,i,"child_moved",s,r,n),_i(t,i,"child_changed",e,r,n),_i(t,i,"value",e,r,n),i}function _i(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>lk(t,l,a)),o.forEach(l=>{const a=ok(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function ok(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function lk(t,e,n){if(e.childName==null||n.childName==null)throw ti("Should only compare child_ events.");const r=new L(e.childName,e.snapshotNode),i=new L(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(t,e){return{eventCache:t,serverCache:e}}function Ai(t,e,n,r){return Dl(new Zn(e,n,r),t.serverCache)}function Oy(t,e,n,r){return Dl(t.eventCache,new Zn(e,n,r))}function rc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function er(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ma;const ak=()=>(Ma||(Ma=new Fe(qI)),Ma);class q{constructor(e,n=ak()){this.value=e,this.children=n}static fromObject(e){let n=new q(null);return Ce(e,(r,i)=>{n=n.set(new V(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:$(),value:this.value};if(U(e))return null;{const r=F(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(K(e),n);return s!=null?{path:ne(new V(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=F(e),r=this.children.get(n);return r!==null?r.subtree(K(e)):new q(null)}}set(e,n){if(U(e))return new q(n,this.children);{const r=F(e),s=(this.children.get(r)||new q(null)).set(K(e),n),o=this.children.insert(r,s);return new q(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new q(null):new q(null,this.children);{const n=F(e),r=this.children.get(n);if(r){const i=r.remove(K(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new q(null):new q(this.value,s)}else return this}}get(e){if(U(e))return this.value;{const n=F(e),r=this.children.get(n);return r?r.get(K(e)):null}}setTree(e,n){if(U(e))return n;{const r=F(e),s=(this.children.get(r)||new q(null)).setTree(K(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new q(this.value,o)}}fold(e){return this.fold_($(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ne(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,$(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(U(e))return null;{const s=F(e),o=this.children.get(s);return o?o.findOnPath_(K(e),ne(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,$(),n)}foreachOnPath_(e,n,r){if(U(e))return this;{this.value&&r(n,this.value);const i=F(e),s=this.children.get(i);return s?s.foreachOnPath_(K(e),ne(n,i),r):new q(null)}}foreach(e){this.foreach_($(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ne(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.writeTree_=e}static empty(){return new ft(new q(null))}}function Di(t,e,n){if(U(e))return new ft(new q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Le(i,e);return s=s.updateChild(o,n),new ft(t.writeTree_.set(i,s))}else{const i=new q(n),s=t.writeTree_.setTree(e,i);return new ft(s)}}}function ic(t,e,n){let r=t;return Ce(n,(i,s)=>{r=Di(r,ne(e,i),s)}),r}function gp(t,e){if(U(e))return ft.empty();{const n=t.writeTree_.setTree(e,new q(null));return new ft(n)}}function sc(t,e){return ar(t,e)!=null}function ar(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Le(n.path,e)):null}function _p(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(re,(r,i)=>{e.push(new L(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new L(r,i.value))}),e}function yn(t,e){if(U(e))return t;{const n=ar(t,e);return n!=null?new ft(new q(n)):new ft(t.writeTree_.subtree(e))}}function oc(t){return t.writeTree_.isEmpty()}function Gr(t,e){return Ay($(),t.writeTree_,e)}function Ay(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(E(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Ay(ne(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ne(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(t,e){return Ly(e,t)}function uk(t,e,n,r,i){E(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Di(t.visibleWrites,e,n)),t.lastWriteId=r}function ck(t,e,n,r){E(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=ic(t.visibleWrites,e,n),t.lastWriteId=r}function dk(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function hk(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&fk(l,r.path)?i=!1:Ze(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return pk(t),!0;if(r.snap)t.visibleWrites=gp(t.visibleWrites,r.path);else{const l=r.children;Ce(l,a=>{t.visibleWrites=gp(t.visibleWrites,ne(r.path,a))})}return!0}else return!1}function fk(t,e){if(t.snap)return Ze(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ze(ne(t.path,n),e))return!0;return!1}function pk(t){t.visibleWrites=Dy(t.allWrites,mk,$()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function mk(t){return t.visible}function Dy(t,e,n){let r=ft.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)Ze(n,o)?(l=Le(n,o),r=Di(r,l,s.snap)):Ze(o,n)&&(l=Le(o,n),r=Di(r,$(),s.snap.getChild(l)));else if(s.children){if(Ze(n,o))l=Le(n,o),r=ic(r,l,s.children);else if(Ze(o,n))if(l=Le(o,n),U(l))r=ic(r,$(),s.children);else{const a=Vr(s.children,F(l));if(a){const u=a.getChild(K(l));r=Di(r,$(),u)}}}else throw ti("WriteRecord should have .snap or .children")}}return r}function by(t,e,n,r,i){if(!r&&!i){const s=ar(t.visibleWrites,e);if(s!=null)return s;{const o=yn(t.visibleWrites,e);if(oc(o))return n;if(n==null&&!sc(o,$()))return null;{const l=n||O.EMPTY_NODE;return Gr(o,l)}}}else{const s=yn(t.visibleWrites,e);if(!i&&oc(s))return n;if(!i&&n==null&&!sc(s,$()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Ze(u.path,e)||Ze(e,u.path))},l=Dy(t.allWrites,o,e),a=n||O.EMPTY_NODE;return Gr(l,a)}}}function gk(t,e,n){let r=O.EMPTY_NODE;const i=ar(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(re,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=yn(t.visibleWrites,e);return n.forEachChild(re,(o,l)=>{const a=Gr(yn(s,new V(o)),l);r=r.updateImmediateChild(o,a)}),_p(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=yn(t.visibleWrites,e);return _p(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function _k(t,e,n,r,i){E(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ne(e,n);if(sc(t.visibleWrites,s))return null;{const o=yn(t.visibleWrites,s);return oc(o)?i.getChild(n):Gr(o,i.getChild(n))}}function yk(t,e,n,r){const i=ne(e,n),s=ar(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=yn(t.visibleWrites,i);return Gr(o,r.getNode().getImmediateChild(n))}else return null}function vk(t,e){return ar(t.visibleWrites,e)}function wk(t,e,n,r,i,s,o){let l;const a=yn(t.visibleWrites,e),u=ar(a,$());if(u!=null)l=u;else if(n!=null)l=Gr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],d=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let p=h.getNext();for(;p&&c.length<i;)d(p,r)!==0&&c.push(p),p=h.getNext();return c}else return[]}function Ek(){return{visibleWrites:ft.empty(),allWrites:[],lastWriteId:-1}}function Yo(t,e,n,r){return by(t.writeTree,t.treePath,e,n,r)}function Md(t,e){return gk(t.writeTree,t.treePath,e)}function yp(t,e,n,r){return _k(t.writeTree,t.treePath,e,n,r)}function Xo(t,e){return vk(t.writeTree,ne(t.treePath,e))}function Ck(t,e,n,r,i,s){return wk(t.writeTree,t.treePath,e,n,r,i,s)}function Ld(t,e,n){return yk(t.writeTree,t.treePath,e,n)}function My(t,e){return Ly(ne(t.treePath,e),t.writeTree)}function Ly(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ss(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,is(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,qr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ss(r,e.snapshotNode,i.oldSnap));else throw ti("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Fy=new Ik;class Fd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Zn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ld(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:er(this.viewCache_),s=Ck(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(t){return{filter:t}}function kk(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Rk(t,e,n,r,i){const s=new Sk;let o,l;if(n.type===ct.OVERWRITE){const u=n;u.source.fromUser?o=lc(t,e,u.path,u.snap,r,i,s):(E(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!U(u.path),o=Jo(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===ct.MERGE){const u=n;u.source.fromUser?o=Pk(t,e,u.path,u.children,r,i,s):(E(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=ac(t,e,u.path,u.children,r,i,l,s))}else if(n.type===ct.ACK_USER_WRITE){const u=n;u.revert?o=Ak(t,e,u.path,r,i,s):o=xk(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===ct.LISTEN_COMPLETE)o=Ok(t,e,n.path,r,s);else throw ti("Unknown operation type: "+n.type);const a=s.getChanges();return Nk(e,o,a),{viewCache:o,changes:a}}function Nk(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=rc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Py(rc(e)))}}function Uy(t,e,n,r,i,s){const o=e.eventCache;if(Xo(r,n)!=null)return e;{let l,a;if(U(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=er(e),c=u instanceof O?u:O.EMPTY_NODE,d=Md(r,c);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Yo(r,er(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=F(n);if(u===".priority"){E(En(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const d=yp(r,n,c,a);d!=null?l=t.filter.updatePriority(c,d):l=o.getNode()}else{const c=K(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=yp(r,n,o.getNode(),a);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=Ld(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,c,i,s):l=o.getNode()}}return Ai(e,l,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function Jo(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(U(n))u=c.updateFullNode(a.getNode(),r,null);else if(c.filtersNodes()&&!a.isFiltered()){const p=a.getNode().updateChild(n,r);u=c.updateFullNode(a.getNode(),p,null)}else{const p=F(n);if(!a.isCompleteForPath(n)&&En(n)>1)return e;const _=K(n),k=a.getNode().getImmediateChild(p).updateChild(_,r);p===".priority"?u=c.updatePriority(a.getNode(),k):u=c.updateChild(a.getNode(),p,k,_,Fy,null)}const d=Oy(e,u,a.isFullyInitialized()||U(n),c.filtersNodes()),h=new Fd(i,d,s);return Uy(t,d,n,i,h,l)}function lc(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const c=new Fd(i,e,s);if(U(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Ai(e,u,!0,t.filter.filtersNodes());else{const d=F(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Ai(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=K(n),p=l.getNode().getImmediateChild(d);let _;if(U(h))_=r;else{const y=c.getCompleteChild(d);y!=null?Td(h)===".priority"&&y.getChild(Cy(h)).isEmpty()?_=y:_=y.updateChild(h,r):_=O.EMPTY_NODE}if(p.equals(_))a=e;else{const y=t.filter.updateChild(l.getNode(),d,_,h,c,o);a=Ai(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function vp(t,e){return t.eventCache.isCompleteForChild(e)}function Pk(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const c=ne(n,a);vp(e,F(c))&&(l=lc(t,l,c,u,i,s,o))}),r.foreach((a,u)=>{const c=ne(n,a);vp(e,F(c))||(l=lc(t,l,c,u,i,s,o))}),l}function wp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function ac(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;U(n)?u=r:u=new q(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),_=wp(t,p,h);a=Jo(t,a,new V(d),_,i,s,o,l)}}),u.children.inorderTraversal((d,h)=>{const p=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!p){const _=e.serverCache.getNode().getImmediateChild(d),y=wp(t,_,h);a=Jo(t,a,new V(d),y,i,s,o,l)}}),a}function xk(t,e,n,r,i,s,o){if(Xo(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(U(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Jo(t,e,n,a.getNode().getChild(n),i,s,l,o);if(U(n)){let u=new q(null);return a.getNode().forEachChild(Dr,(c,d)=>{u=u.set(new V(c),d)}),ac(t,e,n,u,i,s,l,o)}else return e}else{let u=new q(null);return r.foreach((c,d)=>{const h=ne(n,c);a.isCompleteForPath(h)&&(u=u.set(c,a.getNode().getChild(h)))}),ac(t,e,n,u,i,s,l,o)}}function Ok(t,e,n,r,i){const s=e.serverCache,o=Oy(e,s.getNode(),s.isFullyInitialized()||U(n),s.isFiltered());return Uy(t,o,n,r,Fy,i)}function Ak(t,e,n,r,i,s){let o;if(Xo(r,n)!=null)return e;{const l=new Fd(r,e,i),a=e.eventCache.getNode();let u;if(U(n)||F(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Yo(r,er(e));else{const d=e.serverCache.getNode();E(d instanceof O,"serverChildren would be complete if leaf node"),c=Md(r,d)}c=c,u=t.filter.updateFullNode(a,c,s)}else{const c=F(n);let d=Ld(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=a.getImmediateChild(c)),d!=null?u=t.filter.updateChild(a,c,d,K(n),l,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(a,c,O.EMPTY_NODE,K(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Yo(r,er(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Xo(r,$())!=null,Ai(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Pd(r.getIndex()),s=XT(r);this.processor_=Tk(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(O.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(O.EMPTY_NODE,l.getNode(),null),c=new Zn(a,o.isFullyInitialized(),i.filtersNodes()),d=new Zn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Dl(d,c),this.eventGenerator_=new ik(this.query_)}get query(){return this.query_}}function bk(t){return t.viewCache_.serverCache.getNode()}function Mk(t,e){const n=er(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(F(e)).isEmpty())?n.getChild(e):null}function Ep(t){return t.eventRegistrations_.length===0}function Lk(t,e){t.eventRegistrations_.push(e)}function Cp(t,e,n){const r=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Sp(t,e,n,r){e.type===ct.MERGE&&e.source.queryId!==null&&(E(er(t.viewCache_),"We should always have a full cache before handling merges"),E(rc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=Rk(t.processor_,i,e,n,r);return kk(t.processor_,s.viewCache),E(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,zy(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Fk(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(re,(s,o)=>{r.push(qr(s,o))}),n.isFullyInitialized()&&r.push(Py(n.getNode())),zy(t,r,n.getNode(),e)}function zy(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return sk(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zo;class Uk{constructor(){this.views=new Map}}function zk(t){E(!Zo,"__referenceConstructor has already been defined"),Zo=t}function jk(){return E(Zo,"Reference.ts has not been loaded"),Zo}function Bk(t){return t.views.size===0}function Ud(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return E(s!=null,"SyncTree gave us an op for an invalid query."),Sp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Sp(o,e,n,r));return s}}function $k(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Yo(n,i?r:null),a=!1;l?a=!0:r instanceof O?(l=Md(n,r),a=!1):(l=O.EMPTY_NODE,a=!1);const u=Dl(new Zn(l,a,!1),new Zn(r,i,!1));return new Dk(e,u)}return o}function Wk(t,e,n,r,i,s){const o=$k(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Lk(o,n),Fk(o,n)}function Vk(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Cn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Cp(u,n,r)),Ep(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Cp(a,n,r)),Ep(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Cn(t)&&s.push(new(jk())(e._repo,e._path)),{removed:s,events:o}}function jy(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function br(t,e){let n=null;for(const r of t.views.values())n=n||Mk(r,e);return n}function By(t,e){if(e._queryParams.loadsAllData())return bl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function $y(t,e){return By(t,e)!=null}function Cn(t){return bl(t)!=null}function bl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let el;function Hk(t){E(!el,"__referenceConstructor has already been defined"),el=t}function qk(){return E(el,"Reference.ts has not been loaded"),el}let Kk=1;class Ip{constructor(e){this.listenProvider_=e,this.syncPointTree_=new q(null),this.pendingWriteTree_=Ek(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Gk(t,e,n,r,i){return uk(t.pendingWriteTree_,e,n,r,i),i?ii(t,new Jn(Od(),e,n)):[]}function Qk(t,e,n,r){ck(t.pendingWriteTree_,e,n,r);const i=q.fromObject(n);return ii(t,new Kr(Od(),e,i))}function Un(t,e,n=!1){const r=dk(t.pendingWriteTree_,e);if(hk(t.pendingWriteTree_,e)){let s=new q(null);return r.snap!=null?s=s.set($(),!0):Ce(r.children,o=>{s=s.set(new V(o),!0)}),ii(t,new Qo(r.path,s,n))}else return[]}function Ml(t,e,n){return ii(t,new Jn(Ad(),e,n))}function Yk(t,e,n){const r=q.fromObject(n);return ii(t,new Kr(Ad(),e,r))}function Xk(t,e){return ii(t,new ls(Ad(),e))}function Jk(t,e,n){const r=zd(t,n);if(r){const i=jd(r),s=i.path,o=i.queryId,l=Le(s,e),a=new ls(Dd(o),l);return Bd(t,s,a)}else return[]}function uc(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||$y(o,e))){const a=Vk(o,e,n,r);Bk(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const c=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,p)=>Cn(p));if(c&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const p=t1(h);for(let _=0;_<p.length;++_){const y=p[_],k=y.query,m=qy(t,y);t.listenProvider_.startListening(bi(k),tl(t,k),m.hashFn,m.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(bi(e),null):u.forEach(h=>{const p=t.queryToTagMap.get(Ll(h));t.listenProvider_.stopListening(bi(h),p)}))}n1(t,u)}return l}function Zk(t,e,n,r){const i=zd(t,r);if(i!=null){const s=jd(i),o=s.path,l=s.queryId,a=Le(o,e),u=new Jn(Dd(l),a,n);return Bd(t,o,u)}else return[]}function e1(t,e,n,r){const i=zd(t,r);if(i){const s=jd(i),o=s.path,l=s.queryId,a=Le(o,e),u=q.fromObject(n),c=new Kr(Dd(l),a,u);return Bd(t,o,c)}else return[]}function Tp(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,p)=>{const _=Le(h,i);s=s||br(p,_),o=o||Cn(p)});let l=t.syncPointTree_.get(i);l?(o=o||Cn(l),s=s||br(l,$())):(l=new Uk,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=O.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,_)=>{const y=br(_,$());y&&(s=s.updateImmediateChild(p,y))}));const u=$y(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=Ll(e);E(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const p=r1();t.queryToTagMap.set(h,p),t.tagToQueryMap.set(p,h)}const c=bd(t.pendingWriteTree_,i);let d=Wk(l,e,n,c,s,a);if(!u&&!o&&!r){const h=By(l,e);d=d.concat(i1(t,e,h))}return d}function Wy(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Le(o,e),u=br(l,a);if(u)return u});return by(i,e,s,n,!0)}function ii(t,e){return Vy(e,t.syncPointTree_,null,bd(t.pendingWriteTree_,$()))}function Vy(t,e,n,r){if(U(t.path))return Hy(t,e,n,r);{const i=e.get($());n==null&&i!=null&&(n=br(i,$()));let s=[];const o=F(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=My(r,o);s=s.concat(Vy(l,a,u,c))}return i&&(s=s.concat(Ud(i,t,r,n))),s}}function Hy(t,e,n,r){const i=e.get($());n==null&&i!=null&&(n=br(i,$()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=My(r,o),c=t.operationForChild(o);c&&(s=s.concat(Hy(c,l,a,u)))}),i&&(s=s.concat(Ud(i,t,r,n))),s}function qy(t,e){const n=e.query,r=tl(t,n);return{hashFn:()=>(bk(e)||O.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?Jk(t,n._path,r):Xk(t,n._path);{const s=QI(i,n);return uc(t,n,null,s)}}}}function tl(t,e){const n=Ll(e);return t.queryToTagMap.get(n)}function Ll(t){return t._path.toString()+"$"+t._queryIdentifier}function zd(t,e){return t.tagToQueryMap.get(e)}function jd(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new V(t.substr(0,e))}}function Bd(t,e,n){const r=t.syncPointTree_.get(e);E(r,"Missing sync point for query tag that we're tracking");const i=bd(t.pendingWriteTree_,e);return Ud(r,n,i,null)}function t1(t){return t.fold((e,n,r)=>{if(n&&Cn(n))return[bl(n)];{let i=[];return n&&(i=jy(n)),Ce(r,(s,o)=>{i=i.concat(o)}),i}})}function bi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(qk())(t._repo,t._path):t}function n1(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Ll(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function r1(){return Kk++}function i1(t,e,n){const r=e._path,i=tl(t,e),s=qy(t,n),o=t.listenProvider_.startListening(bi(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)E(!Cn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,c,d)=>{if(!U(u)&&c&&Cn(c))return[bl(c).query];{let h=[];return c&&(h=h.concat(jy(c).map(p=>p.query))),Ce(d,(p,_)=>{h=h.concat(_)}),h}});for(let u=0;u<a.length;++u){const c=a[u];t.listenProvider_.stopListening(bi(c),tl(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new $d(n)}node(){return this.node_}}class Wd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ne(this.path_,e);return new Wd(this.syncTree_,n)}node(){return Wy(this.syncTree_,this.path_)}}const s1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},kp=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return o1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return l1(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},o1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},l1=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&E(!1,"Unexpected increment value: "+r);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Ky=function(t,e,n,r){return Vd(e,new Wd(n,t),r)},a1=function(t,e,n){return Vd(t,new $d(e),n)};function Vd(t,e,n){const r=t.getPriority().val(),i=kp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=kp(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new de(l,ve(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new de(i))),o.forEachChild(re,(l,a)=>{const u=Vd(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function qd(t,e){let n=e instanceof V?e:new V(e),r=t,i=F(n);for(;i!==null;){const s=Vr(r.node.children,i)||{children:{},childCount:0};r=new Hd(i,r,s),n=K(n),i=F(n)}return r}function si(t){return t.node.value}function Gy(t,e){t.node.value=e,cc(t)}function Qy(t){return t.node.childCount>0}function u1(t){return si(t)===void 0&&!Qy(t)}function Fl(t,e){Ce(t.node.children,(n,r)=>{e(new Hd(n,t,r))})}function Yy(t,e,n,r){n&&!r&&e(t),Fl(t,i=>{Yy(i,e,!0,r)}),n&&r&&e(t)}function c1(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ss(t){return new V(t.parent===null?t.name:Ss(t.parent)+"/"+t.name)}function cc(t){t.parent!==null&&d1(t.parent,t.name,t)}function d1(t,e,n){const r=u1(n),i=Rt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,cc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,cc(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1=/[\[\].#$\/\u0000-\u001F\u007F]/,f1=/[\[\].#$\u0000-\u001F\u007F]/,La=10*1024*1024,Kd=function(t){return typeof t=="string"&&t.length!==0&&!h1.test(t)},Xy=function(t){return typeof t=="string"&&t.length!==0&&!f1.test(t)},p1=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Xy(t)},m1=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!wd(t)||t&&typeof t=="object"&&Rt(t,".sv")},Gd=function(t,e,n){const r=n instanceof V?new PT(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+An(r));if(typeof e=="function")throw new Error(t+"contains a function "+An(r)+" with contents = "+e.toString());if(wd(e))throw new Error(t+"contains "+e.toString()+" "+An(r));if(typeof e=="string"&&e.length>La/3&&xl(e)>La)throw new Error(t+"contains a string greater than "+La+" utf8 bytes "+An(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ce(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Kd(o)))throw new Error(t+" contains an invalid key ("+o+") "+An(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);xT(r,o),Gd(t,l,r),OT(r)}),i&&s)throw new Error(t+' contains ".value" child '+An(r)+" in addition to actual children.")}},g1=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=rs(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Kd(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(NT);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Ze(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},_1=function(t,e,n,r){if(r&&e===void 0)return;const i=yd(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ce(e,(o,l)=>{const a=new V(o);if(Gd(i,l,ne(n,a)),Td(a)===".priority"&&!m1(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),g1(i,s)},Jy=function(t,e,n,r){if(!(r&&n===void 0)&&!Xy(n))throw new Error(yd(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},y1=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Jy(t,e,n,r)},v1=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Kd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!p1(n))throw new Error(yd(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Qd(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!kd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Zy(t,e,n){Qd(t,n),ev(t,r=>kd(r,e))}function Wt(t,e,n){Qd(t,n),ev(t,r=>Ze(r,e)||Ze(e,r))}function ev(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(E1(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function E1(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Wn&&ye("event: "+n.toString()),ri(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1="repo_interrupt",S1=25;class I1{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new w1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Go(),this.transactionQueueTree_=new Hd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function T1(t,e,n){if(t.stats_=Sd(t.repoInfo_),t.forceRestClient_||ZI())t.server_=new Ko(t.repoInfo_,(r,i,s,o)=>{Rp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Np(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{pe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Ft(t.repoInfo_,e,(r,i,s,o)=>{Rp(t,r,i,s,o)},r=>{Np(t,r)},r=>{R1(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=iT(t.repoInfo_,()=>new rk(t.stats_,t.server_)),t.infoData_=new JT,t.infoSyncTree_=new Ip({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Ml(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Xd(t,"connected",!1),t.serverSyncTree_=new Ip({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Wt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function k1(t){const n=t.infoData_.getNode(new V(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Yd(t){return s1({timestamp:k1(t)})}function Rp(t,e,n,r,i){t.dataUpdateCount++;const s=new V(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Bo(n,u=>ve(u));o=e1(t.serverSyncTree_,s,a,i)}else{const a=ve(n);o=Zk(t.serverSyncTree_,s,a,i)}else if(r){const a=Bo(n,u=>ve(u));o=Yk(t.serverSyncTree_,s,a)}else{const a=ve(n);o=Ml(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=as(t,s)),Wt(t.eventQueue_,l,o)}function Np(t,e){Xd(t,"connected",e),e===!1&&P1(t)}function R1(t,e){Ce(e,(n,r)=>{Xd(t,n,r)})}function Xd(t,e,n){const r=new V("/.info/"+e),i=ve(n);t.infoData_.updateSnapshot(r,i);const s=Ml(t.infoSyncTree_,r,i);Wt(t.eventQueue_,r,s)}function tv(t){return t.nextWriteId_++}function N1(t,e,n,r){Jd(t,"update",{path:e.toString(),value:n});let i=!0;const s=Yd(t),o={};if(Ce(n,(l,a)=>{i=!1,o[l]=Ky(ne(e,l),ve(a),t.serverSyncTree_,s)}),i)ye("update() called with empty data.  Don't do anything."),xp(t,r,"ok",void 0);else{const l=tv(t),a=Qk(t.serverSyncTree_,e,o,l);Qd(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,c)=>{const d=u==="ok";d||Be("update at "+e+" failed: "+u);const h=Un(t.serverSyncTree_,l,!d),p=h.length>0?as(t,e):e;Wt(t.eventQueue_,p,h),xp(t,r,u,c)}),Ce(n,u=>{const c=ov(t,ne(e,u));as(t,c)}),Wt(t.eventQueue_,e,[])}}function P1(t){Jd(t,"onDisconnectEvents");const e=Yd(t),n=Go();nc(t.onDisconnect_,$(),(i,s)=>{const o=Ky(i,s,t.serverSyncTree_,e);xy(n,i,o)});let r=[];nc(n,$(),(i,s)=>{r=r.concat(Ml(t.serverSyncTree_,i,s));const o=ov(t,i);as(t,o)}),t.onDisconnect_=Go(),Wt(t.eventQueue_,$(),r)}function x1(t,e,n){let r;F(e._path)===".info"?r=Tp(t.infoSyncTree_,e,n):r=Tp(t.serverSyncTree_,e,n),Zy(t.eventQueue_,e._path,r)}function Pp(t,e,n){let r;F(e._path)===".info"?r=uc(t.infoSyncTree_,e,n):r=uc(t.serverSyncTree_,e,n),Zy(t.eventQueue_,e._path,r)}function O1(t){t.persistentConnection_&&t.persistentConnection_.interrupt(C1)}function Jd(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ye(n,...e)}function xp(t,e,n,r){e&&ri(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function nv(t,e,n){return Wy(t.serverSyncTree_,e,n)||O.EMPTY_NODE}function Zd(t,e=t.transactionQueueTree_){if(e||Ul(t,e),si(e)){const n=iv(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&A1(t,Ss(e),n)}else Qy(e)&&Fl(e,n=>{Zd(t,n)})}function A1(t,e,n){const r=n.map(u=>u.currentWriteId),i=nv(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];E(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=Le(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Jd(t,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(Un(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Ul(t,qd(t.transactionQueueTree_,e)),Zd(t,t.transactionQueueTree_),Wt(t.eventQueue_,e,c);for(let h=0;h<d.length;h++)ri(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Be("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}as(t,e)}},o)}function as(t,e){const n=rv(t,e),r=Ss(n),i=iv(t,n);return D1(t,i,r),r}function D1(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Le(n,a.path);let c=!1,d;if(E(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,d=a.abortReason,i=i.concat(Un(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=S1)c=!0,d="maxretry",i=i.concat(Un(t.serverSyncTree_,a.currentWriteId,!0));else{const h=nv(t,a.path,o);a.currentInputSnapshot=h;const p=e[l].update(h.val());if(p!==void 0){Gd("transaction failed: Data returned ",p,a.path);let _=ve(p);typeof p=="object"&&p!=null&&Rt(p,".priority")||(_=_.updatePriority(h.getPriority()));const k=a.currentWriteId,m=Yd(t),f=a1(_,h,m);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=f,a.currentWriteId=tv(t),o.splice(o.indexOf(k),1),i=i.concat(Gk(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(Un(t.serverSyncTree_,k,!0))}else c=!0,d="nodata",i=i.concat(Un(t.serverSyncTree_,a.currentWriteId,!0))}Wt(t.eventQueue_,n,i),i=[],c&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}Ul(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ri(r[l]);Zd(t,t.transactionQueueTree_)}function rv(t,e){let n,r=t.transactionQueueTree_;for(n=F(e);n!==null&&si(r)===void 0;)r=qd(r,n),e=K(e),n=F(e);return r}function iv(t,e){const n=[];return sv(t,e,n),n.sort((r,i)=>r.order-i.order),n}function sv(t,e,n){const r=si(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Fl(e,i=>{sv(t,i,n)})}function Ul(t,e){const n=si(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Gy(e,n.length>0?n:void 0)}Fl(e,r=>{Ul(t,r)})}function ov(t,e){const n=Ss(rv(t,e)),r=qd(t.transactionQueueTree_,e);return c1(r,i=>{Fa(t,i)}),Fa(t,r),Yy(r,i=>{Fa(t,i)}),n}function Fa(t,e){const n=si(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Un(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Gy(e,void 0):n.length=s+1,Wt(t.eventQueue_,Ss(e),i);for(let o=0;o<r.length;o++)ri(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function M1(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Be(`Invalid query segment '${n}' in query '${t}'`)}return e}const Op=function(t,e){const n=L1(t),r=n.namespace;n.domain==="firebase.com"&&$t(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&$t("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||VI();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new fy(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new V(n.pathString)}},L1=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=b1(t.substring(c,d)));const h=M1(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const p=e.slice(0,u);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+pe(this.snapshot.exportVal())}}class av{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return U(this._path)?null:Td(this._path)}get ref(){return new qt(this._repo,this._path)}get _queryIdentifier(){const e=pp(this._queryParams),n=Ed(e);return n==="{}"?"default":n}get _queryObject(){return pp(this._queryParams)}isEqual(e){if(e=Qe(e),!(e instanceof eh))return!1;const n=this._repo===e._repo,r=kd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+RT(this._path)}}class qt extends eh{constructor(e,n){super(e,n,new xd,!1)}get parent(){const e=Cy(this._path);return e===null?null:new qt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class us{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new V(e),r=nl(this.ref,e);return new us(this._node.getChild(n),r,re)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new us(i,nl(this.ref,r),re)))}hasChild(e){const n=new V(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function uv(t,e){return t=Qe(t),t._checkNotDeleted("ref"),e!==void 0?nl(t._root,e):t._root}function nl(t,e){return t=Qe(t),F(t._path)===null?y1("child","path",e,!1):Jy("child","path",e,!1),new qt(t._repo,ne(t._path,e))}function U1(t,e){_1("update",e,t._path,!1);const n=new Pl;return N1(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class th{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new lv("value",this,new us(e.snapshotNode,new qt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new av(this,e,n):null}matches(e){return e instanceof th?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class nh{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new av(this,e,n):null}createEvent(e,n){E(e.childName!=null,"Child events should have a childName.");const r=nl(new qt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new lv(e.type,this,new us(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof nh?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function z1(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(c,d)=>{Pp(t._repo,t,l),a(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new F1(n,s||void 0),l=e==="value"?new th(o):new nh(e,o);return x1(t._repo,t,l),()=>Pp(t._repo,t,l)}function j1(t,e,n,r){return z1(t,"value",e,n,r)}zk(qt);Hk(qt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1="FIREBASE_DATABASE_EMULATOR_HOST",dc={};let $1=!1;function W1(t,e,n,r){t.repoInfo_=new fy(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),r&&(t.authTokenProvider_=r)}function V1(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||$t("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ye("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Op(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[B1]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=Op(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const c=i&&a?new Ar(Ar.OWNER):new tT(t.name,t.options,e);v1("Invalid Firebase Database URL",o),U(o.path)||$t("Database URL must point to the root of a Firebase Database (not including a child path).");const d=q1(l,t,c,new eT(t.name,n));return new K1(d,t)}function H1(t,e){const n=dc[e];(!n||n[t.key]!==t)&&$t(`Database ${e}(${t.repoInfo_}) has already been deleted.`),O1(t),delete n[t.key]}function q1(t,e,n,r){let i=dc[e.name];i||(i={},dc[e.name]=i);let s=i[t.toURLString()];return s&&$t("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new I1(t,$1,n,r),i[t.toURLString()]=s,s}class K1{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(T1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new qt(this._repo,$())),this._rootInternal}_delete(){return this._rootInternal!==null&&(H1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&$t("Cannot call "+e+" on a deleted database.")}}function G1(t=Y_(),e){const n=ys(t,"database").getImmediate({identifier:e}),r=gS("database");return r&&Q1(n,...r),n}function Q1(t,e,n,r={}){t=Qe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&$t("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&$t('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Ar(Ar.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:yS(r.mockUserToken,t.app.options.projectId);s=new Ar(o)}W1(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y1(t){zI(vs),It(new gt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return V1(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),tt(Xf,Jf,t),tt(Xf,Jf,"esm2017")}Ft.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ft.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Y1();const cv="@firebase/installations",rh="0.5.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=1e4,hv=`w:${rh}`,fv="FIS_v2",X1="https://firebaseinstallations.googleapis.com/v1",J1=60*60*1e3,Z1="installations",eR="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},tr=new or(Z1,eR,tR);function pv(t){return t instanceof kt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv({projectId:t}){return`${X1}/projects/${t}/installations`}function gv(t){return{token:t.token,requestStatus:2,expiresIn:rR(t.expiresIn),creationTime:Date.now()}}async function _v(t,e){const r=(await e.json()).error;return tr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function yv({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function nR(t,{refreshToken:e}){const n=yv(t);return n.append("Authorization",iR(e)),n}async function vv(t){const e=await t();return e.status>=500&&e.status<600?t():e}function rR(t){return Number(t.replace("s","000"))}function iR(t){return`${fv} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sR({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=mv(t),i=yv(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:fv,appId:t.appId,sdkVersion:hv},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await vv(()=>fetch(r,l));if(a.ok){const u=await a.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:gv(u.authToken)}}else throw await _v("Create Installation",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oR(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR=/^[cdef][\w-]{21}$/,hc="";function aR(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=uR(t);return lR.test(n)?n:hc}catch{return hc}}function uR(t){return oR(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev=new Map;function Cv(t,e){const n=zl(t);Sv(n,e),cR(n,e)}function Sv(t,e){const n=Ev.get(t);if(!!n)for(const r of n)r(e)}function cR(t,e){const n=dR();n&&n.postMessage({key:t,fid:e}),hR()}let zn=null;function dR(){return!zn&&"BroadcastChannel"in self&&(zn=new BroadcastChannel("[Firebase] FID Change"),zn.onmessage=t=>{Sv(t.data.key,t.data.fid)}),zn}function hR(){Ev.size===0&&zn&&(zn.close(),zn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR="firebase-installations-database",pR=1,nr="firebase-installations-store";let Ua=null;function ih(){return Ua||(Ua=G_(fR,pR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(nr)}}})),Ua}async function rl(t,e){const n=zl(t),i=(await ih()).transaction(nr,"readwrite"),s=i.objectStore(nr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Cv(t,e.fid),e}async function Iv(t){const e=zl(t),r=(await ih()).transaction(nr,"readwrite");await r.objectStore(nr).delete(e),await r.done}async function jl(t,e){const n=zl(t),i=(await ih()).transaction(nr,"readwrite"),s=i.objectStore(nr),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&Cv(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sh(t){let e;const n=await jl(t.appConfig,r=>{const i=mR(r),s=gR(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===hc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function mR(t){const e=t||{fid:aR(),registrationStatus:0};return Tv(e)}function gR(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(tr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=_R(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:yR(t)}:{installationEntry:e}}async function _R(t,e){try{const n=await sR(t,e);return rl(t.appConfig,n)}catch(n){throw pv(n)&&n.customData.serverCode===409?await Iv(t.appConfig):await rl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function yR(t){let e=await Ap(t.appConfig);for(;e.registrationStatus===1;)await wv(100),e=await Ap(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await sh(t);return r||n}return e}function Ap(t){return jl(t,e=>{if(!e)throw tr.create("installation-not-found");return Tv(e)})}function Tv(t){return vR(t)?{fid:t.fid,registrationStatus:0}:t}function vR(t){return t.registrationStatus===1&&t.registrationTime+dv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wR({appConfig:t,heartbeatServiceProvider:e},n){const r=ER(t,n),i=nR(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:hv,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await vv(()=>fetch(r,l));if(a.ok){const u=await a.json();return gv(u)}else throw await _v("Generate Auth Token",a)}function ER(t,{fid:e}){return`${mv(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oh(t,e=!1){let n;const r=await jl(t.appConfig,s=>{if(!kv(s))throw tr.create("not-registered");const o=s.authToken;if(!e&&IR(o))return s;if(o.requestStatus===1)return n=CR(t,e),s;{if(!navigator.onLine)throw tr.create("app-offline");const l=kR(s);return n=SR(t,l),l}});return n?await n:r.authToken}async function CR(t,e){let n=await Dp(t.appConfig);for(;n.authToken.requestStatus===1;)await wv(100),n=await Dp(t.appConfig);const r=n.authToken;return r.requestStatus===0?oh(t,e):r}function Dp(t){return jl(t,e=>{if(!kv(e))throw tr.create("not-registered");const n=e.authToken;return RR(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function SR(t,e){try{const n=await wR(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await rl(t.appConfig,r),n}catch(n){if(pv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Iv(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await rl(t.appConfig,r)}throw n}}function kv(t){return t!==void 0&&t.registrationStatus===2}function IR(t){return t.requestStatus===2&&!TR(t)}function TR(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+J1}function kR(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function RR(t){return t.requestStatus===1&&t.requestTime+dv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NR(t){const e=t,{installationEntry:n,registrationPromise:r}=await sh(e);return r?r.catch(console.error):oh(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PR(t,e=!1){const n=t;return await xR(n),(await oh(n,e)).token}async function xR(t){const{registrationPromise:e}=await sh(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OR(t){if(!t||!t.options)throw za("App Configuration");if(!t.name)throw za("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw za(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function za(t){return tr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv="installations",AR="installations-internal",DR=t=>{const e=t.getProvider("app").getImmediate(),n=OR(e),r=ys(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},bR=t=>{const e=t.getProvider("app").getImmediate(),n=ys(e,Rv).getImmediate();return{getId:()=>NR(n),getToken:i=>PR(n,i)}};function MR(){It(new gt(Rv,DR,"PUBLIC")),It(new gt(AR,bR,"PRIVATE"))}MR();tt(cv,rh);tt(cv,rh,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp="analytics",LR="firebase_id",FR="origin",UR=60*1e3,zR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Nv="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=new Ol("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function jR(t,e){const n=document.createElement("script");n.src=`${Nv}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function BR(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function $R(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const a=(await Pv(n)).find(u=>u.measurementId===i);a&&await e[a.appId]}}catch(l){He.error(l)}t("config",i,s)}async function WR(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await Pv(n);for(const a of o){const u=l.find(d=>d.measurementId===a),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){He.error(s)}}function VR(t,e,n,r){async function i(s,o,l){try{s==="event"?await WR(t,e,n,o,l):s==="config"?await $R(t,e,n,r,o,l):s==="consent"?t("consent","update",l):t("set",o)}catch(a){He.error(a)}}return i}function HR(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=VR(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function qR(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Nv)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},pt=new or("analytics","Analytics",KR);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR=30,QR=1e3;class YR{constructor(e={},n=QR){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const xv=new YR;function XR(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function JR(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:XR(r)},s=zR.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const a=await o.json();!((e=a.error)===null||e===void 0)&&e.message&&(l=a.error.message)}catch{}throw pt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function ZR(t,e=xv,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw pt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw pt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new nN;return setTimeout(async()=>{l.abort()},n!==void 0?n:UR),Ov({appId:r,apiKey:i,measurementId:s},o,l,e)}async function Ov(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=xv){var s,o;const{appId:l,measurementId:a}=t;try{await eN(r,e)}catch(u){if(a)return He.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${(s=u)===null||s===void 0?void 0:s.message}]`),{appId:l,measurementId:a};throw u}try{const u=await JR(t);return i.deleteThrottleMetadata(l),u}catch(u){const c=u;if(!tN(c)){if(i.deleteThrottleMetadata(l),a)return He.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:l,measurementId:a};throw u}const d=Number((o=c==null?void 0:c.customData)===null||o===void 0?void 0:o.httpStatus)===503?Wf(n,i.intervalMillis,GR):Wf(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(l,h),He.debug(`Calling attemptFetch again in ${d} millis`),Ov(t,h,r,i)}}function eN(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(pt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function tN(t){if(!(t instanceof kt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class nN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function rN(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iN(){var t;if(B_())try{await $_()}catch(e){return He.warn(pt.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return He.warn(pt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function sN(t,e,n,r,i,s,o){var l;const a=ZR(t);a.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&He.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>He.error(p)),e.push(a);const u=iN().then(p=>{if(p)return r.getId()}),[c,d]=await Promise.all([a,u]);qR(s)||jR(s,c.measurementId),i("js",new Date);const h=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return h[FR]="firebase",h.update=!0,d!=null&&(h[LR]=d),i("config",c.measurementId,h),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e){this.app=e}_delete(){return delete Mi[this.app.options.appId],Promise.resolve()}}let Mi={},Mp=[];const Lp={};let ja="dataLayer",lN="gtag",Fp,Av,Up=!1;function aN(){const t=[];if(U_()&&t.push("This is a browser extension environment."),dS()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=pt.create("invalid-analytics-context",{errorInfo:e});He.warn(n.message)}}function uN(t,e,n){aN();const r=t.options.appId;if(!r)throw pt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)He.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw pt.create("no-api-key");if(Mi[r]!=null)throw pt.create("already-exists",{id:r});if(!Up){BR(ja);const{wrappedGtag:s,gtagCore:o}=HR(Mi,Mp,Lp,ja,lN);Av=s,Fp=o,Up=!0}return Mi[r]=sN(t,Mp,Lp,e,Fp,ja,n),new oN(t)}function cN(t,e,n,r){t=Qe(t),rN(Av,Mi[t.app.options.appId],e,n,r).catch(i=>He.error(i))}const zp="@firebase/analytics",jp="0.8.4";function dN(){It(new gt(bp,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return uN(r,i,n)},"PUBLIC")),It(new gt("analytics-internal",t,"PRIVATE")),tt(zp,jp),tt(zp,jp,"esm2017");function t(e){try{const n=e.getProvider(bp).getImmediate();return{logEvent:(r,i,s)=>cN(n,r,i,s)}}catch(n){throw pt.create("interop-component-reg-failed",{reason:n})}}}dN();function lh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Dv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hN=Dv,bv=new or("auth","Firebase",Dv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp=new Ol("@firebase/auth");function lo(t,...e){Bp.logLevel<=H.ERROR&&Bp.error(`Auth (${vs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t,...e){throw ah(t,...e)}function Ct(t,...e){return ah(t,...e)}function Mv(t,e,n){const r=Object.assign(Object.assign({},hN()),{[e]:n});return new or("auth","Firebase",r).create(e,{appName:t.name})}function fN(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Tt(t,"argument-error"),Mv(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ah(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return bv.create(t,...e)}function A(t,e,...n){if(!t)throw ah(e,...n)}function bt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw lo(e),new Error(e)}function Vt(t,e){t||bt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=new Map;function Mt(t){Vt(t instanceof Function,"Expected a class definition");let e=$p.get(t);return e?(Vt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$p.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pN(t,e){const n=ys(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if($o(s,e!=null?e:{}))return i;Tt(i,"already-initialized")}return n.initialize({options:e})}function mN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function gN(){return Wp()==="http:"||Wp()==="https:"}function Wp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _N(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gN()||U_()||"connection"in navigator)?navigator.onLine:!0}function yN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vt(n>e,"Short delay should be less than long delay!"),this.isMobile=gd()||z_()}get(){return _N()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(t,e){Vt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN=new Is(3e4,6e4);function EN(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bl(t,e,n,r,i={}){return Fv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ni(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Lv.fetch()(Uv(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function Fv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},vN),e);try{const i=new SN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Gs(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gs(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Gs(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Gs(t,"user-disabled",o);const c=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Mv(t,c,u);Tt(t,c)}}catch(i){if(i instanceof kt)throw i;Tt(t,"network-request-failed")}}async function CN(t,e,n,r,i={}){const s=await Bl(t,e,n,r,i);return"mfaPendingCredential"in s&&Tt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Uv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?uh(t.config,i):`${t.config.apiScheme}://${i}`}class SN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ct(this.auth,"network-request-failed")),wN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gs(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ct(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IN(t,e){return Bl(t,"POST","/v1/accounts:delete",e)}async function TN(t,e){return Bl(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kN(t,e=!1){const n=Qe(t),r=await n.getIdToken(e),i=ch(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Li(Ba(i.auth_time)),issuedAtTime:Li(Ba(i.iat)),expirationTime:Li(Ba(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ba(t){return Number(t)*1e3}function ch(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return lo("JWT malformed, contained fewer than 3 sections"),null;try{const s=jo(r);return s?JSON.parse(s):(lo("Failed to decode base64 JWT payload"),null)}catch(s){return lo("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function RN(t){const e=ch(t);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kt&&NN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function NN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Li(this.lastLoginAt),this.creationTime=Li(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function il(t){var e;const n=t.auth,r=await t.getIdToken(),i=await cs(t,TN(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?AN(s.providerUserInfo):[],l=ON(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),c=a?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new zv(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function xN(t){const e=Qe(t);await il(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ON(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function AN(t){return t.map(e=>{var{providerId:n}=e,r=lh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DN(t,e){const n=await Fv(t,{},async()=>{const r=ni({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Uv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Lv.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):RN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return A(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await DN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ds;return r&&(A(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ds,this.toJSON())}_performRefresh(){return bt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t,e){A(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=lh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new PN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new zv(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await cs(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kN(this,e)}reload(){return xN(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await il(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await cs(this,IN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,k=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:v,isAnonymous:T,providerData:C,stsTokenManager:S}=n;A(g&&S,e,"internal-error");const I=ds.fromJSON(this.name,S);A(typeof g=="string",e,"internal-error"),Gt(d,e.name),Gt(h,e.name),A(typeof v=="boolean",e,"internal-error"),A(typeof T=="boolean",e,"internal-error"),Gt(p,e.name),Gt(_,e.name),Gt(y,e.name),Gt(k,e.name),Gt(m,e.name),Gt(f,e.name);const j=new Vn({uid:g,auth:e,email:h,emailVerified:v,displayName:d,isAnonymous:T,photoURL:_,phoneNumber:p,tenantId:y,stsTokenManager:I,createdAt:m,lastLoginAt:f});return C&&Array.isArray(C)&&(j.providerData=C.map(D=>Object.assign({},D))),k&&(j._redirectEventId=k),j}static async _fromIdTokenResponse(e,n,r=!1){const i=new ds;i.updateFromServerResponse(n);const s=new Vn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await il(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jv.type="NONE";const Vp=jv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(t,e,n){return`firebase:${t}:${e}:${n}`}class Mr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ao(this.userKey,i.apiKey,s),this.fullPersistenceKey=ao("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Mr(Mt(Vp),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Mt(Vp);const o=ao(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Vn._fromJSON(e,c);u!==s&&(l=d),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Mr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Mr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hv(e))return"Blackberry";if(qv(e))return"Webos";if(dh(e))return"Safari";if((e.includes("chrome/")||$v(e))&&!e.includes("edge/"))return"Chrome";if(Vv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Bv(t=Re()){return/firefox\//i.test(t)}function dh(t=Re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $v(t=Re()){return/crios\//i.test(t)}function Wv(t=Re()){return/iemobile/i.test(t)}function Vv(t=Re()){return/android/i.test(t)}function Hv(t=Re()){return/blackberry/i.test(t)}function qv(t=Re()){return/webos/i.test(t)}function $l(t=Re()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bN(t=Re()){var e;return $l(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function MN(){return cS()&&document.documentMode===10}function Kv(t=Re()){return $l(t)||Vv(t)||qv(t)||Hv(t)||/windows phone/i.test(t)||Wv(t)}function LN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(t,e=[]){let n;switch(t){case"Browser":n=Hp(Re());break;case"Worker":n=`${Hp(Re())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qp(this),this.idTokenSubscription=new qp(this),this.beforeStateQueue=new FN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bv,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Mr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a==null?void 0:a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await il(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Qe(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Mt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new or("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mt(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await Mr.create(this,[Mt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return A(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Wl(t){return Qe(t)}class qp{constructor(e){this.auth=e,this.observer=null,this.addObserver=TS(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function zN(t,e,n){const r=Wl(t);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Qv(e),{host:o,port:l}=jN(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||BN()}function Qv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jN(t){const e=Qv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Kp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Kp(o)}}}function Kp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function BN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bt("not implemented")}_getIdTokenResponse(e){return bt("not implemented")}_linkToIdToken(e,n){return bt("not implemented")}_getReauthenticationResolver(e){return bt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lr(t,e){return CN(t,"POST","/v1/accounts:signInWithIdp",EN(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $N="http://localhost";class rr extends Yv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=lh(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new rr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Lr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Lr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Lr(e,n)}buildRequest(){const e={requestUri:$N,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ni(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends hh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Ts{constructor(){super("facebook.com")}static credential(e){return rr._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends Ts{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return rr._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xt.credential(n,r)}catch{return null}}}xt.GOOGLE_SIGN_IN_METHOD="google.com";xt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Ts{constructor(){super("github.com")}static credential(e){return rr._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.GITHUB_SIGN_IN_METHOD="github.com";tn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Ts{constructor(){super("twitter.com")}static credential(e,n){return rr._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return nn.credential(n,r)}catch{return null}}}nn.TWITTER_SIGN_IN_METHOD="twitter.com";nn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Vn._fromIdTokenResponse(e,r,i),o=Gp(r);return new Qr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Gp(r);return new Qr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Gp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl extends kt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,sl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new sl(e,n,r,i)}}function Xv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?sl._fromErrorAndOperation(t,s,e,r):s})}async function WN(t,e,n=!1){const r=await cs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VN(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await cs(t,Xv(i,s,e,t),n);A(o.idToken,i,"internal-error");const l=ch(o.idToken);A(l,i,"internal-error");const{sub:a}=l;return A(t.uid===a,i,"user-mismatch"),Qr._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Tt(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HN(t,e,n=!1){const r="signIn",i=await Xv(t,r,e),s=await Qr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function qN(t,e,n,r){return Qe(t).onIdTokenChanged(e,n,r)}function KN(t,e,n){return Qe(t).beforeAuthStateChanged(e,n)}function GN(t,e,n,r){return Qe(t).onAuthStateChanged(e,n,r)}function QN(t){return Qe(t).signOut()}const ol="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ol,"1"),this.storage.removeItem(ol),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YN(){const t=Re();return dh(t)||$l(t)}const XN=1e3,JN=10;class Zv extends Jv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=YN()&&LN(),this.fallbackToPolling=Kv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);MN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,JN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},XN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zv.type="LOCAL";const ZN=Zv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0 extends Jv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}e0.type="SESSION";const t0=e0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Vl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await eP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=fh("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return window}function nP(t){St().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n0(){return typeof St().WorkerGlobalScope<"u"&&typeof St().importScripts=="function"}async function rP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function sP(){return n0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0="firebaseLocalStorageDb",oP=1,ll="firebaseLocalStorage",i0="fbase_key";class ks{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hl(t,e){return t.transaction([ll],e?"readwrite":"readonly").objectStore(ll)}function lP(){const t=indexedDB.deleteDatabase(r0);return new ks(t).toPromise()}function pc(){const t=indexedDB.open(r0,oP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ll,{keyPath:i0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ll)?e(r):(r.close(),await lP(),e(await pc()))})})}async function Qp(t,e,n){const r=Hl(t,!0).put({[i0]:e,value:n});return new ks(r).toPromise()}async function aP(t,e){const n=Hl(t,!1).get(e),r=await new ks(n).toPromise();return r===void 0?null:r.value}function Yp(t,e){const n=Hl(t,!0).delete(e);return new ks(n).toPromise()}const uP=800,cP=3;class s0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>cP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return n0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vl._getInstance(sP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rP(),!this.activeServiceWorker)return;this.sender=new tP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pc();return await Qp(e,ol,"1"),await Yp(e,ol),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>aP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Hl(i,!1).getAll();return new ks(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}s0.type="LOCAL";const dP=s0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function fP(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ct("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",hP().appendChild(r)})}function pP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Is(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(t,e){return e?Mt(e):(A(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph extends Yv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Lr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Lr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Lr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function mP(t){return HN(t.auth,new ph(t),t.bypassAuthState)}function gP(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),VN(n,new ph(t),t.bypassAuthState)}async function _P(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),WN(n,new ph(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mP;case"linkViaPopup":case"linkViaRedirect":return _P;case"reauthViaPopup":case"reauthViaRedirect":return gP;default:Tt(this.auth,"internal-error")}}resolve(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP=new Is(2e3,1e4);async function vP(t,e,n){const r=Wl(t);fN(t,e,hh);const i=o0(r,n);return new jn(r,"signInViaPopup",e,i).executeNotNull()}class jn extends l0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,jn.currentPopupAction&&jn.currentPopupAction.cancel(),jn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){Vt(this.filter.length===1,"Popup operations only handle one event");const e=fh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ct(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,yP.get())};e()}}jn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP="pendingRedirect",uo=new Map;class EP extends l0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=uo.get(this.auth._key());if(!e){try{const r=await CP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}uo.set(this.auth._key(),e)}return this.bypassAuthState||uo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CP(t,e){const n=TP(e),r=IP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function SP(t,e){uo.set(t._key(),e)}function IP(t){return Mt(t._redirectPersistence)}function TP(t){return ao(wP,t.config.apiKey,t.name)}async function kP(t,e,n=!1){const r=Wl(t),i=o0(r,e),o=await new EP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP=10*60*1e3;class NP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!PP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!a0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ct(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=RP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xp(e))}saveEventToCache(e){this.cachedEventUids.add(Xp(e)),this.lastProcessedEventTime=Date.now()}}function Xp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function a0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function PP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return a0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xP(t,e={}){return Bl(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AP=/^https?/;async function DP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xP(t);for(const n of e)try{if(bP(n))return}catch{}Tt(t,"unauthorized-domain")}function bP(t){const e=fc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!AP.test(n))return!1;if(OP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP=new Is(3e4,6e4);function Jp(){const t=St().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function LP(t){return new Promise((e,n)=>{var r,i,s;function o(){Jp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jp(),n(Ct(t,"network-request-failed"))},timeout:MP.get()})}if(!((i=(r=St().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=St().gapi)===null||s===void 0)&&s.load)o();else{const l=pP("iframefcb");return St()[l]=()=>{gapi.load?o():n(Ct(t,"network-request-failed"))},fP(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw co=null,e})}let co=null;function FP(t){return co=co||LP(t),co}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP=new Is(5e3,15e3),zP="__/auth/iframe",jP="emulator/auth/iframe",BP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$P=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function WP(t){const e=t.config;A(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?uh(e,jP):`https://${t.config.authDomain}/${zP}`,r={apiKey:e.apiKey,appName:t.name,v:vs},i=$P.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ni(r).slice(1)}`}async function VP(t){const e=await FP(t),n=St().gapi;return A(n,t,"internal-error"),e.open({where:document.body,url:WP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ct(t,"network-request-failed"),l=St().setTimeout(()=>{s(o)},UP.get());function a(){St().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qP=500,KP=600,GP="_blank",QP="http://localhost";class Zp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YP(t,e,n,r=qP,i=KP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},HP),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Re().toLowerCase();n&&(l=$v(u)?GP:n),Bv(u)&&(e=e||QP,a.scrollbars="yes");const c=Object.entries(a).reduce((h,[p,_])=>`${h}${p}=${_},`,"");if(bN(u)&&l!=="_self")return XP(e||"",l),new Zp(null);const d=window.open(e||"",l,c);A(d,t,"popup-blocked");try{d.focus()}catch{}return new Zp(d)}function XP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP="__/auth/handler",ZP="emulator/auth/handler";function em(t,e,n,r,i,s){A(t.config.authDomain,t,"auth-domain-config-required"),A(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:vs,eventId:i};if(e instanceof hh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[a,u]of Object.entries(s||{}))o[a]=u}if(e instanceof Ts){const a=e.getScopes().filter(u=>u!=="");a.length>0&&(o.scopes=a.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const a of Object.keys(l))l[a]===void 0&&delete l[a];return`${ex(t)}?${ni(l).slice(1)}`}function ex({config:t}){return t.emulator?uh(t,ZP):`https://${t.authDomain}/${JP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a="webStorageSupport";class tx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=t0,this._completeRedirectFn=kP,this._overrideRedirectResult=SP}async _openPopup(e,n,r,i){var s;Vt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=em(e,n,r,fc(),i);return YP(e,o,fh())}async _openRedirect(e,n,r,i){return await this._originValidation(e),nP(em(e,n,r,fc(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Vt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await VP(e),r=new NP(e);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($a,{type:$a},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[$a];o!==void 0&&n(!!o),Tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=DP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Kv()||dh()||$l()}}const nx=tx;var tm="@firebase/auth",nm="0.20.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ix(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function sx(t){It(new gt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((l,a)=>{A(s&&!s.includes(":"),"invalid-api-key",{appName:l.name}),A(!(o!=null&&o.includes(":")),"argument-error",{appName:l.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gv(t)},c=new UN(l,a,u);return mN(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),It(new gt("auth-internal",e=>{const n=Wl(e.getProvider("auth").getImmediate());return(r=>new rx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tt(tm,nm,ix(t)),tt(tm,nm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox=5*60,lx=V_("authIdTokenMaxAge")||ox;let rm=null;const ax=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>lx)return;const i=n==null?void 0:n.token;rm!==i&&(rm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function mh(t=Y_()){const e=ys(t,"auth");if(e.isInitialized())return e.getImmediate();const n=pN(t,{popupRedirectResolver:nx,persistence:[dP,ZN,t0]}),r=V_("authTokenSyncURL");if(r){const s=ax(r);KN(n,s,()=>s(n.currentUser)),qN(n,o=>s(o))}const i=W_("auth");return i&&zN(n,`http://${i}`),n}sx("Browser");const ux={apiKey:"AIzaSyDQ6btMnK0zEk9XAKBmnPEHVW-QT5Qjaik",authDomain:"nu-schedule-e072e.firebaseapp.com",databaseURL:"https://nu-schedule-e072e-default-rtdb.firebaseio.com",projectId:"nu-schedule-e072e",storageBucket:"nu-schedule-e072e.appspot.com",messagingSenderId:"603223146719",appId:"1:603223146719:web:5653b9cd1edeead46f296a",measurementId:"G-CGKY4ENMHQ"},ql=Q_(ux),mc=G1(ql),u0=t=>{const[e,n]=x.exports.useState(),[r,i]=x.exports.useState(null);return x.exports.useEffect(()=>j1(uv(mc,t),s=>{n(s.val())},s=>{i(s)}),[t]),[e,r]},im=t=>{const e=Date.now(),n=(t==null?void 0:t.message)||`Updated: ${new Date(e).toLocaleString()}`;return{timestamp:e,error:t,message:n}},cx=t=>{const[e,n]=x.exports.useState();return[x.exports.useCallback(i=>{U1(uv(mc,t),i).then(()=>n(im())).catch(s=>n(im(s)))},[mc,t]),e]},dx=()=>{vP(mh(ql),new xt)},hx=()=>QN(mh(ql)),c0=()=>{const[t,e]=x.exports.useState();return x.exports.useEffect(()=>GN(mh(ql),e)),[t]},fx=()=>{const[t]=c0(),[e,n,r]=u0(`/admins/${(t==null?void 0:t.uid)||"guest"}`);return[{user:t,isAdmin:e},n,r]},px=({title:t})=>R("h1",{children:t});const mx=({cid:t,term:e,number:n,meets:r,title:i,active:s,disabled:o,editable:l,onClick:a})=>(s&&(o=!1),ue("li",{className:`card m-1 p-2 border border-3 ${s?"border-success":""} ${o?"bg-secondary":""}`,onClick:o?u=>u:a,children:[ue("div",{className:"px-1 pt-2",style:{height:"10em"},children:[ue("h4",{className:"font-weight-bold",children:[e," CS ",n]}),i]}),R("hr",{className:"m-4"}),ue("div",{className:"px-3 pb-3",children:[R("p",{children:r}),l&&R(UC,{to:`/edit/${t}`,children:R("button",{type:"button",className:"btn btn-outline-dark me-2",children:"Edit"})})]})]})),gx=(t,e)=>["M","Tu","W","Th","F"].some(n=>t.includes(n)&&e.includes(n)),Wa=(t,e)=>t.padStart(5,"0")<=e.padStart(5,"0"),_x=(t,e,n,r)=>Wa(t,n)?!Wa(e,n):!Wa(r,t),yx=(t,e,n,r,i,s)=>gx(t,r)&&_x(e,n,i,s),sm=t=>t.split(/ |-/),vx=(t,e)=>yx(...sm(t),...sm(e)),wx=({courses:t,selected:e,toggleSelected:n,editable:r})=>R("ul",{className:"course-list p-0",children:Object.entries(t).map(([i,s])=>R(mx,{cid:i,term:s.term,number:s.number,meets:s.meets,title:s.title,active:e.includes(i),disabled:s.meets.length>0&&e.some(o=>t[o]&&t[o].meets.length>0&&vx(t[o].meets,s.meets)),editable:r,onClick:()=>n(i)},i))});const Ex=({children:t,open:e,close:n})=>R("div",{className:`modal ${e?"modal-show":""}`,tabIndex:"-1",role:"dialog",onClick:r=>{r.target===r.currentTarget&&n()},children:R("div",{className:"modal-dialog",role:"document",children:ue("div",{className:"modal-content",children:[R("div",{className:"modal-header",children:R("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:n})}),R("div",{className:"modal-body",children:t})]})})}),Cx=({selection:t,open:e,close:n})=>R(Ex,{open:e,close:n,children:t.length>0?R("ul",{className:"p-0",children:t.map(([r,i])=>ue("li",{className:"card m-4 p-2 text-center border",children:[ue("b",{className:"p-2",children:[i.number," ",i.title]}),i.meets]}))}):R("p",{children:"No class was selected. Click on the class to select one"})}),Sx={Fall:"Fall",Winter:"Winter",Spring:"Spring"},Ix=({term:t,selection:e,setSelection:n})=>ue("div",{children:[R("input",{type:"radio",id:t,className:"btn-check",checked:t===e,autoComplete:"off",onChange:()=>n(t)}),R("label",{className:"btn btn-success m-1 p-2",htmlFor:t,children:t})]}),Tx=({selection:t,setSelection:e})=>R("div",{className:"btn-group",children:Object.keys(Sx).map(n=>R(Ix,{term:n,selection:t,setSelection:e},n))}),kx=({courseList:t,selection:e,toggleSelected:n,profile:r})=>(c0(),R(wx,{courses:Object.fromEntries(t),selected:e,toggleSelected:n,editable:r==null?void 0:r.isAdmin})),Rx=({title:t,courses:e,profile:n})=>{const[r,i]=x.exports.useState("Fall"),[s,o]=x.exports.useState(!1),[l,a]=x.exports.useState([]),u=_=>a(l.includes(_)?l.filter(y=>y!==_):[...l,_]),c=Object.entries(e).filter(_=>_[1].term===r),d=Object.entries(e).filter(_=>l.includes(_[0]));return ue("div",{children:[R(px,{title:t}),ue("div",{className:"d-flex",children:[R(Tx,{selection:r,setSelection:i}),R("button",{type:"button",className:"ms-auto btn btn-succes ",onClick:()=>dx(),children:"Log In"}),R("button",{type:"button",className:"ms-auto btn btn-succes ",onClick:()=>hx(),children:"Log Out"}),R("button",{type:"button",className:"ms-auto btn btn-succes ",onClick:()=>o(!0),children:"course plan"})]}),R(kx,{courseList:c,selection:l,toggleSelected:u,profile:n}),R(Cx,{selection:d,open:s,close:()=>o(!1)})]})},om=(t=null,e={})=>{const[n,r]=x.exports.useState(()=>({values:e}));return[n,s=>{const{id:o,value:l}=s.target,a=t?t(o,l):"";s.target.setCustomValidity(a);const u={...n.values,[o]:l},c={...n.errors,[o]:a},d=Object.values(c).some(h=>h!=="");r(d?{values:u,errors:c}:{values:u})}]},lm=({name:t,text:e,state:n,change:r})=>{var i,s;return ue("div",{className:"mb-3",children:[R("label",{htmlFor:t,className:"form-label",children:e}),R("input",{className:`form-control ${n.errors?"is-invalid":""}`,id:t,name:t,defaultValue:(i=n.values)==null?void 0:i[t],onChange:r}),R("div",{className:"invalid-feedback",children:(s=n.errors)==null?void 0:s[t]})]})},Nx=({message:t,disabled:e})=>{const n=k_();return ue("div",{className:"d-flex",children:[R("button",{type:"button",className:"btn btn-outline-dark me-2",onClick:()=>n(-1),children:"Cancel"}),R("button",{type:"submit",className:"btn btn-primary me-auto",disabled:e,children:"Submit"}),R("span",{className:"p-2",children:t})]})},Px=(t,e)=>/(^\w\w)/.test(e)?"":"Title must be at least two characters",xx=(t,e)=>/^ *((?:M|Tu|W|Th|F)+) +(\d\d?):(\d\d) *[ -] *(\d\d?):(\d\d) *$/.test(e)?"":"Meets must contain days and start-end, e.g., MWF 12:00-13:20",Ox=({courses:t})=>{const{id:e}=SC(),[n,r]=om(Px,t[e]),[i,s]=om(xx,t[e]),[o,l]=cx(`/courses/${e}`);return ue("div",{className:"container pt-3",children:[R("h2",{children:"Edit Course Information"}),ue("form",{onSubmit:u=>{u.preventDefault(),!n.errors&&!i.errors&&o({title:n.values.title,meets:i.values.meets})},children:[R(lm,{name:"title",text:"Title",state:n,change:r}),R(lm,{name:"meets",text:"Meets",state:i,change:s}),R(Nx,{disabled:n.errors||i.errors})]})]})};const Ax=new rS,Dx=()=>{const[t,e]=u0("/"),[n,r,i]=fx();return e?ue("h1",{children:["Error loading the course list: ",`${e}`]}):t?i?ue("h1",{children:["Error loading profile: ",`${i}`]}):r?R("h1",{children:"Loading user profile"}):n?R(FC,{children:ue(AC,{children:[R($u,{path:"/",element:R(Rx,{profile:n,title:t.title,courses:t.courses})}),R($u,{path:"/edit/:id",element:R(Ox,{courses:t.courses})})]})}):R("h1",{children:"No profile data"}):R("h1",{children:"Failed to find the course list"})},bx=()=>R(oS,{client:Ax,contextSharing:!0,children:R(Dx,{})}),Mx=Ha.createRoot(document.getElementById("root"));Mx.render(R(mm.StrictMode,{children:R(bx,{})}));
