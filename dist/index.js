"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=t(function(A,q){
var j=require('@stdlib/blas-ext-base-dnannsumkbn/dist').ndarray;function l(e,r,n,s,a,i,u){return j(e,r,n,s,a,i,u)}q.exports=l
});var c=t(function(B,m){
var d=require('@stdlib/strided-base-stride2offset/dist'),R=v();function _(e,r,n,s,a){var i,u;return i=d(e,n),u=d(2,a),R(e,r,n,i,s,a,u)}m.exports=_
});var p=t(function(C,f){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=c(),k=v();b(y,"ndarray",k);f.exports=y
});var E=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),w=p(),o,x=g(E(__dirname,"./native.js"));h(x)?o=w:o=x;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
