"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=i(function(w,t){
var f=require('@stdlib/blas-ext-base-dnannsumkbn/dist');function j(e,r,n,a,u){return f(e,r,n,a,u)}t.exports=j
});var q=i(function(z,d){
var b=require('@stdlib/blas-ext-base-dnannsumkbn/dist').ndarray;function k(e,r,n,a,u,y,x){return b(e,r,n,a,u,y,x)}d.exports=k
});var c=i(function(A,o){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=v(),R=q();l(m,"ndarray",R);o.exports=m
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),g=c(),s,p=E(_(__dirname,"./native.js"));O(p)?s=g:s=p;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
