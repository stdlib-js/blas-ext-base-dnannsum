// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("path")):"function"==typeof define&&define.amd?define(["path"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).dnannsum=e(r.require$$0)}(this,(function(r){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(o):i(o)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function u(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=o(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=o(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===c.call(r.specifier)?c.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var l=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,w,"$1e"),t=p.call(t,v,"e"),t=p.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,g,"e+0$1"),t=p.call(t,d,"e-0$1"),r.alternate&&(t=p.call(t,y,"$1."),t=p.call(t,b,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):f.call(t)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var _=String.fromCharCode,E=Array.isArray;function S(r){return r!=r}function x(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,i,a,c,l,f,s,p,g,d,y;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,f=0;f<r.length;f++)if(n=r[f],"string"==typeof n)c+=n;else{if(e=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,S(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,y=void 0,(y=g-p.length)<0?p:p=d?p+j(y):j(y)+p)),c+=n.arg||"",l+=1}return c}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,n,i;for(t=[],i=0,n=O.exec(r);n;)(e=r.slice(i,O.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),i=O.lastIndex,n=O.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function V(r){var e,t;if("string"!=typeof r)throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[A(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return k.apply(null,e)}var $,F=Object.prototype,P=F.toString,C=F.__defineGetter__,I=F.__defineSetter__,R=F.__lookupGetter__,B=F.__lookupSetter__;$=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(r,e)||B.call(r,e)?(n=r.__proto__,r.__proto__=F,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(r,e,t.get),a&&I&&I.call(r,e,t.set),r};var q=$;function L(r,e,t){q(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(r,e){return e>0?0:(1-r)*e}var Z=Object,M=/./;function W(r){return"boolean"==typeof r}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return U&&"symbol"==typeof Symbol.toStringTag}var N=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;var D,J="function"==typeof Symbol?Symbol:void 0,H="function"==typeof J?J.toStringTag:"";D=X()?function(r){var e,t,n,i,o;if(null==r)return N.call(r);t=r[H],o=H,e=null!=(i=r)&&z.call(i,o);try{r[H]=void 0}catch(e){return N.call(r)}return n=N.call(r),e?r[H]=t:delete r[H],n}:function(r){return N.call(r)};var K=D,Q=Boolean,Y=Boolean.prototype.toString;var rr=X();function er(r){return"object"==typeof r&&(r instanceof Q||(rr?function(r){try{return Y.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===K(r)))}function tr(r){return W(r)||er(r)}L(tr,"isPrimitive",W),L(tr,"isObject",er);var nr="object"==typeof self?self:null,ir="object"==typeof window?window:null,or="object"==typeof global?global:null,ar="object"==typeof globalThis?globalThis:null;var cr=function(r){if(arguments.length){if(!W(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(ar)return ar;if(nr)return nr;if(ir)return ir;if(or)return or;throw new Error("unexpected error. Unable to resolve global object.")}(),ur=cr.document&&cr.document.childNodes,lr=Int8Array;function fr(){return/^\s*function\s*([^(]*)/i}var sr,pr=/^\s*function\s*([^(]*)/i;L(fr,"REGEXP",pr),sr=Array.isArray?Array.isArray:function(r){return"[object Array]"===K(r)};var gr=sr;function dr(r){return null!==r&&"object"==typeof r}var yr=function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!gr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(dr);function br(r){var e,t,n,i;if(("Object"===(t=K(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=pr.exec(n.toString()))return e[1]}return dr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}L(dr,"isObjectLikeArray",yr);var hr="function"==typeof M||"object"==typeof lr||"function"==typeof ur?function(r){return br(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?br(r).toLowerCase():e};var vr,wr,mr=Object.getPrototypeOf;wr=Object.getPrototypeOf,vr="function"===hr(wr)?mr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===K(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var jr=vr;function _r(r){return null==r?null:(r=Z(r),jr(r))}function Er(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===K(r))return!0;r=_r(r)}return!1}function Sr(r){return r!=r}function xr(r){return Math.abs(r)}function kr(r,e,t,n,i){var o,a,c,u,l,f,s,p;if(a=t<0?(1-r)*t:0,c=i<0?-i:0,o=0,r<=0)return n[c]=o,n[c+i]=0,n;if(1===r||0===t)return Sr(e[a])?(n[c]=o,n[c+i]=0,n):(n[c]=e[a],n[c+i]=1,n);for(f=0,s=0,p=0;p<r;p++)!1===Sr(u=e[a])&&(l=o+u,xr(o)>=xr(u)?f+=o-l+u:f+=u-l+o,o=l,s+=1),a+=t;return n[c]=o+f,n[c+i]=s,n}L(kr,"ndarray",(function(r,e,t,n,i,o,a){var c,u,l,f,s,p,g,d;if(u=n,l=a,c=0,r<=0)return i[l]=c,i[l+o]=0,i;if(1===r||0===t)return Sr(e[u])?(i[l]=c,i[l+o]=0,i):(i[l]=e[u],i[l+o]=1,i);for(p=0,g=0,d=0;d<r;d++)!1===Sr(f=e[u])&&(s=c+f,xr(c)>=xr(f)?p+=c-s+f:p+=f-s+c,c=s,g+=1),u+=t;return i[l]=c+p,i[l+o]=g,i}));var Or,Tr=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return Er(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,r.join)(__dirname,"./native.js"));Or=Er(Tr)?kr:Tr;const{ndarray:Ar}=Or;function Vr(r,e,t,n,i,o,a){return Ar(r,e,t,n,i,o,a)}function $r(r,e,t,n,i){return Vr(r,e,t,G(r,t),n,i,G(2,i))}return L($r,"ndarray",Vr),$r}));
//# sourceMappingURL=index.js.map