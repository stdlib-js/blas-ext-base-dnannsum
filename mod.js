// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,a=n.__lookupGetter__,f=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var c,l,s,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(a.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=c):r[t]=e.value),s="get"in e,p="set"in e,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(r,t,e.get),p&&i&&i.call(r,t,e.set),r};var c=t;function l(r,t,e){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function s(r){if(r.__esModule)return r;var t=r.default;if("function"==typeof t){var e=function r(){if(this instanceof r){var e=[null];e.push.apply(e,arguments);var n=Function.bind.apply(t,e);return new n}return t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}function p(r,t){for(var e=0,n=r.length-1;n>=0;n--){var o=r[n];"."===o?r.splice(n,1):".."===o?(r.splice(n,1),e++):e&&(r.splice(n,1),e--)}if(t)for(;e--;e)r.unshift("..");return r}var y=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,b=function(r){return y.exec(r).slice(1)};function v(){for(var r="",t=!1,e=arguments.length-1;e>=-1&&!t;e--){var n=e>=0?arguments[e]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,t="/"===n.charAt(0))}return(t?"/":"")+(r=p(E(r.split("/"),(function(r){return!!r})),!t).join("/"))||"."}function d(r){var t=g(r),e="/"===A(r,-1);return(r=p(E(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&e&&(r+="/"),(t?"/":"")+r}function g(r){return"/"===r.charAt(0)}function j(){var r=Array.prototype.slice.call(arguments,0);return d(E(r,(function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function m(r,t){function e(r){for(var t=0;t<r.length&&""===r[t];t++);for(var e=r.length-1;e>=0&&""===r[e];e--);return t>e?[]:r.slice(t,e-t+1)}r=v(r).substr(1),t=v(t).substr(1);for(var n=e(r.split("/")),o=e(t.split("/")),u=Math.min(n.length,o.length),i=u,a=0;a<u;a++)if(n[a]!==o[a]){i=a;break}var f=[];for(a=i;a<n.length;a++)f.push("..");return(f=f.concat(o.slice(i))).join("/")}function h(r){var t=b(r),e=t[0],n=t[1];return e||n?(n&&(n=n.substr(0,n.length-1)),e+n):"."}function _(r,t){var e=b(r)[2];return t&&e.substr(-1*t.length)===t&&(e=e.substr(0,e.length-t.length)),e}function w(r){return b(r)[3]}var O={extname:w,basename:_,dirname:h,sep:"/",delimiter:":",relative:m,join:j,isAbsolute:g,normalize:d,resolve:v};function E(r,t){if(r.filter)return r.filter(t);for(var e=[],n=0;n<r.length;n++)t(r[n],n,r)&&e.push(r[n]);return e}var A="b"==="ab".substr(-1)?function(r,t,e){return r.substr(t,e)}:function(r,t,e){return t<0&&(t=r.length+t),r.substr(t,e)},S=s(Object.freeze({__proto__:null,basename:_,default:O,delimiter:":",dirname:h,extname:w,isAbsolute:g,join:j,normalize:d,relative:m,resolve:v,sep:"/"}));var P=/./;function x(r){return"boolean"==typeof r}var T="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function k(){return T&&"symbol"==typeof Symbol.toStringTag}var B=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;var q,C="function"==typeof Symbol?Symbol.toStringTag:"";q=k()?function(r){var t,e,n,o,u;if(null==r)return B.call(r);e=r[C],u=C,t=null!=(o=r)&&M.call(o,u);try{r[C]=void 0}catch(t){return B.call(r)}return n=B.call(r),t?r[C]=e:delete r[C],n}:function(r){return B.call(r)};var F=q,V=Boolean.prototype.toString;var z=k();function G(r){return"object"==typeof r&&(r instanceof Boolean||(z?function(r){try{return V.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===F(r)))}function L(r){return x(r)||G(r)}function R(){return new Function("return this;")()}l(L,"isPrimitive",x),l(L,"isObject",G);var D="object"==typeof self?self:null,N="object"==typeof window?window:null,I="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},J="object"==typeof I?I:null;var U=function(r){if(arguments.length){if(!x(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return R()}if(D)return D;if(N)return N;if(J)return J;throw new Error("unexpected error. Unable to resolve global object.")}(),X=U.document&&U.document.childNodes,$=Int8Array;function H(){return/^\s*function\s*([^(]*)/i}var K,Q=/^\s*function\s*([^(]*)/i;l(H,"REGEXP",Q),K=Array.isArray?Array.isArray:function(r){return"[object Array]"===F(r)};var W=K;function Y(r){return null!==r&&"object"==typeof r}var Z=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!W(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Y);function rr(r){var t,e,n,o;if(("Object"===(e=F(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Q.exec(n.toString()))return t[1]}return Y(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}l(Y,"isObjectLikeArray",Z);var tr="function"==typeof P||"object"==typeof $||"function"==typeof X?function(r){return rr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?rr(r).toLowerCase():t};var er,nr,or=Object.getPrototypeOf;nr=Object.getPrototypeOf,er="function"===tr(nr)?or:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===F(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var ur=er;function ir(r){return null==r?null:(r=Object(r),ur(r))}function ar(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===F(r))return!0;r=ir(r)}return!1}function fr(r){return r!=r}function cr(r){return Math.abs(r)}function lr(r,t,e,n,o){var u,i,a,f,c,l,s,p;if(i=e<0?(1-r)*e:0,a=o<0?-o:0,u=0,r<=0)return n[a]=u,n[a+o]=0,n;if(1===r||0===e)return fr(t[i])?(n[a]=u,n[a+o]=0,n):(n[a]=t[i],n[a+o]=1,n);for(l=0,s=0,p=0;p<r;p++)!1===fr(f=t[i])&&(c=u+f,cr(u)>=cr(f)?l+=u-c+f:l+=f-c+u,u=c,s+=1),i+=e;return n[a]=u+l,n[a+o]=s,n}l(lr,"ndarray",(function(r,t,e,n,o,u,i){var a,f,c,l,s,p,y,b;if(f=n,c=i,a=0,r<=0)return o[c]=a,o[c+u]=0,o;if(1===r||0===e)return fr(t[f])?(o[c]=a,o[c+u]=0,o):(o[c]=t[f],o[c+u]=1,o);for(p=0,y=0,b=0;b<r;b++)!1===fr(l=t[f])&&(s=a+l,cr(a)>=cr(l)?p+=a-s+l:p+=l-s+a,a=s,y+=1),f+=e;return o[c]=a+p,o[c+u]=y,o}));var sr,pr=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return ar(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,S.join)("/home/runner/work/blas-ext-base-dnannsum/blas-ext-base-dnannsum/node_modules/@stdlib/blas-ext-base-dnannsumkbn/lib","./native.js")),yr=sr=ar(pr)?lr:pr;const{ndarray:br}=sr;function vr(r,t,e,n,o){return yr(r,t,e,n,o)}function dr(r,t,e,n,o,u,i){return br(r,t,e,n,o,u,i)}l(vr,"ndarray",dr);export{vr as default,dr as ndarray};
//# sourceMappingURL=mod.js.map
