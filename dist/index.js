"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=u(function(A,v){
var j=require('@stdlib/blas-ext-base-dnannsumkbn/dist').ndarray;function l(e,r,n,i,a,p,x){return j(e,r,n,i,a,p,x)}v.exports=l
});var o=u(function(B,d){
var q=require('@stdlib/strided-base-stride2offset/dist'),R=s();function _(e,r,n,i,a){return R(e,r,n,q(e,n),i,a,q(2,a))}d.exports=_
});var y=u(function(C,c){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=o(),k=s();b(m,"ndarray",k);c.exports=m
});var E=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),w=y(),t,f=g(E(__dirname,"./native.js"));h(f)?t=w:t=f;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
