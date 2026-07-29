(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vc(i){const t=Object.create(null);for(const e of i.split(","))t[e]=1;return e=>e in t}const _e={},Ws=[],Xn=()=>{},$f=()=>!1,pa=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),Gc=i=>i.startsWith("onUpdate:"),Be=Object.assign,Wc=(i,t)=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)},vm=Object.prototype.hasOwnProperty,ue=(i,t)=>vm.call(i,t),Vt=Array.isArray,qs=i=>eo(i)==="[object Map]",Yf=i=>eo(i)==="[object Set]",Fu=i=>eo(i)==="[object Date]",jt=i=>typeof i=="function",Le=i=>typeof i=="string",jn=i=>typeof i=="symbol",me=i=>i!==null&&typeof i=="object",jf=i=>(me(i)||jt(i))&&jt(i.then)&&jt(i.catch),Kf=Object.prototype.toString,eo=i=>Kf.call(i),xm=i=>eo(i).slice(8,-1),Zf=i=>eo(i)==="[object Object]",ma=i=>Le(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Br=Vc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ga=i=>{const t=Object.create(null);return(e=>t[e]||(t[e]=i(e)))},ym=/-\w/g,Xi=ga(i=>i.replace(ym,t=>t.slice(1).toUpperCase())),Sm=/\B([A-Z])/g,Ki=ga(i=>i.replace(Sm,"-$1").toLowerCase()),Jf=ga(i=>i.charAt(0).toUpperCase()+i.slice(1)),Ua=ga(i=>i?`on${Jf(i)}`:""),Hi=(i,t)=>!Object.is(i,t),Wo=(i,...t)=>{for(let e=0;e<i.length;e++)i[e](...t)},Qf=(i,t,e,n=!1)=>{Object.defineProperty(i,t,{configurable:!0,enumerable:!1,writable:n,value:e})},qc=i=>{const t=parseFloat(i);return isNaN(t)?i:t};let Ou;const _a=()=>Ou||(Ou=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function cn(i){if(Vt(i)){const t={};for(let e=0;e<i.length;e++){const n=i[e],s=Le(n)?wm(n):cn(n);if(s)for(const r in s)t[r]=s[r]}return t}else if(Le(i)||me(i))return i}const Mm=/;(?![^(]*\))/g,Em=/:([^]+)/,bm=/\/\*[^]*?\*\//g;function wm(i){const t={};return i.replace(bm,"").split(Mm).forEach(e=>{if(e){const n=e.split(Em);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Kn(i){let t="";if(Le(i))t=i;else if(Vt(i))for(let e=0;e<i.length;e++){const n=Kn(i[e]);n&&(t+=n+" ")}else if(me(i))for(const e in i)i[e]&&(t+=e+" ");return t.trim()}const Tm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Am=Vc(Tm);function td(i){return!!i||i===""}function Cm(i,t){if(i.length!==t.length)return!1;let e=!0;for(let n=0;e&&n<i.length;n++)e=Xc(i[n],t[n]);return e}function Xc(i,t){if(i===t)return!0;let e=Fu(i),n=Fu(t);if(e||n)return e&&n?i.getTime()===t.getTime():!1;if(e=jn(i),n=jn(t),e||n)return i===t;if(e=Vt(i),n=Vt(t),e||n)return e&&n?Cm(i,t):!1;if(e=me(i),n=me(t),e||n){if(!e||!n)return!1;const s=Object.keys(i).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in i){const a=i.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!Xc(i[o],t[o]))return!1}}return String(i)===String(t)}const ed=i=>!!(i&&i.__v_isRef===!0),Xt=i=>Le(i)?i:i==null?"":Vt(i)||me(i)&&(i.toString===Kf||!jt(i.toString))?ed(i)?Xt(i.value):JSON.stringify(i,nd,2):String(i),nd=(i,t)=>ed(t)?nd(i,t.value):qs(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[n,s],r)=>(e[Fa(n,r)+" =>"]=s,e),{})}:Yf(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Fa(e))}:jn(t)?Fa(t):me(t)&&!Vt(t)&&!Zf(t)?String(t):t,Fa=(i,t="")=>{var e;return jn(i)?`Symbol(${(e=i.description)!=null?e:t})`:i};/**
* @vue/reactivity v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ve;class id{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Ve,!t&&Ve&&(this.index=(Ve.scopes||(Ve.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Ve;try{return Ve=this,t()}finally{Ve=e}}}on(){++this._on===1&&(this.prevScope=Ve,Ve=this)}off(){this._on>0&&--this._on===0&&(Ve=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(this.effects.length=0,e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function sd(i){return new id(i)}function rd(){return Ve}function Rm(i,t=!1){Ve&&Ve.cleanups.push(i)}let xe;const Oa=new WeakSet;class od{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ve&&Ve.active&&Ve.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Oa.has(this)&&(Oa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ld(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bu(this),cd(this);const t=xe,e=In;xe=this,In=!0;try{return this.fn()}finally{ud(this),xe=t,In=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)jc(t);this.deps=this.depsTail=void 0,Bu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Oa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Fl(this)&&this.run()}get dirty(){return Fl(this)}}let ad=0,zr,kr;function ld(i,t=!1){if(i.flags|=8,t){i.next=kr,kr=i;return}i.next=zr,zr=i}function $c(){ad++}function Yc(){if(--ad>0)return;if(kr){let t=kr;for(kr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let i;for(;zr;){let t=zr;for(zr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){i||(i=n)}t=e}}if(i)throw i}function cd(i){for(let t=i.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ud(i){let t,e=i.depsTail,n=e;for(;n;){const s=n.prevDep;n.version===-1?(n===e&&(e=s),jc(n),Pm(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=s}i.deps=t,i.depsTail=e}function Fl(i){for(let t=i.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(hd(t.dep.computed)||t.dep.version!==t.version))return!0;return!!i._dirty}function hd(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===jr)||(i.globalVersion=jr,!i.isSSR&&i.flags&128&&(!i.deps&&!i._dirty||!Fl(i))))return;i.flags|=2;const t=i.dep,e=xe,n=In;xe=i,In=!0;try{cd(i);const s=i.fn(i._value);(t.version===0||Hi(s,i._value))&&(i.flags|=128,i._value=s,t.version++)}catch(s){throw t.version++,s}finally{xe=e,In=n,ud(i),i.flags&=-3}}function jc(i,t=!1){const{dep:e,prevSub:n,nextSub:s}=i;if(n&&(n.nextSub=s,i.prevSub=void 0),s&&(s.prevSub=n,i.nextSub=void 0),e.subs===i&&(e.subs=n,!n&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)jc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Pm(i){const{prevDep:t,nextDep:e}=i;t&&(t.nextDep=e,i.prevDep=void 0),e&&(e.prevDep=t,i.nextDep=void 0)}let In=!0;const fd=[];function Si(){fd.push(In),In=!1}function Mi(){const i=fd.pop();In=i===void 0?!0:i}function Bu(i){const{cleanup:t}=i;if(i.cleanup=void 0,t){const e=xe;xe=void 0;try{t()}finally{xe=e}}}let jr=0;class Lm{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Kc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!xe||!In||xe===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==xe)e=this.activeLink=new Lm(xe,this),xe.deps?(e.prevDep=xe.depsTail,xe.depsTail.nextDep=e,xe.depsTail=e):xe.deps=xe.depsTail=e,dd(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const n=e.nextDep;n.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=n),e.prevDep=xe.depsTail,e.nextDep=void 0,xe.depsTail.nextDep=e,xe.depsTail=e,xe.deps===e&&(xe.deps=n)}return e}trigger(t){this.version++,jr++,this.notify(t)}notify(t){$c();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Yc()}}}function dd(i){if(i.dep.sc++,i.sub.flags&4){const t=i.dep.computed;if(t&&!i.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)dd(n)}const e=i.dep.subs;e!==i&&(i.prevSub=e,e&&(e.nextSub=i)),i.dep.subs=i}}const ia=new WeakMap,ms=Symbol(""),Ol=Symbol(""),Kr=Symbol("");function We(i,t,e){if(In&&xe){let n=ia.get(i);n||ia.set(i,n=new Map);let s=n.get(e);s||(n.set(e,s=new Kc),s.map=n,s.key=e),s.track()}}function pi(i,t,e,n,s,r){const o=ia.get(i);if(!o){jr++;return}const a=l=>{l&&l.trigger()};if($c(),t==="clear")o.forEach(a);else{const l=Vt(i),c=l&&ma(e);if(l&&e==="length"){const u=Number(n);o.forEach((f,h)=>{(h==="length"||h===Kr||!jn(h)&&h>=u)&&a(f)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Kr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(ms)),qs(i)&&a(o.get(Ol)));break;case"delete":l||(a(o.get(ms)),qs(i)&&a(o.get(Ol)));break;case"set":qs(i)&&a(o.get(ms));break}}Yc()}function Im(i,t){const e=ia.get(i);return e&&e.get(t)}function Ms(i){const t=re(i);return t===i?t:(We(t,"iterate",Kr),dn(i)?t:t.map(Un))}function va(i){return We(i=re(i),"iterate",Kr),i}function Oi(i,t){return Ei(i)?Zs(vi(i)?Un(t):t):Un(t)}const Dm={__proto__:null,[Symbol.iterator](){return Ba(this,Symbol.iterator,i=>Oi(this,i))},concat(...i){return Ms(this).concat(...i.map(t=>Vt(t)?Ms(t):t))},entries(){return Ba(this,"entries",i=>(i[1]=Oi(this,i[1]),i))},every(i,t){return ei(this,"every",i,t,void 0,arguments)},filter(i,t){return ei(this,"filter",i,t,e=>e.map(n=>Oi(this,n)),arguments)},find(i,t){return ei(this,"find",i,t,e=>Oi(this,e),arguments)},findIndex(i,t){return ei(this,"findIndex",i,t,void 0,arguments)},findLast(i,t){return ei(this,"findLast",i,t,e=>Oi(this,e),arguments)},findLastIndex(i,t){return ei(this,"findLastIndex",i,t,void 0,arguments)},forEach(i,t){return ei(this,"forEach",i,t,void 0,arguments)},includes(...i){return za(this,"includes",i)},indexOf(...i){return za(this,"indexOf",i)},join(i){return Ms(this).join(i)},lastIndexOf(...i){return za(this,"lastIndexOf",i)},map(i,t){return ei(this,"map",i,t,void 0,arguments)},pop(){return _r(this,"pop")},push(...i){return _r(this,"push",i)},reduce(i,...t){return zu(this,"reduce",i,t)},reduceRight(i,...t){return zu(this,"reduceRight",i,t)},shift(){return _r(this,"shift")},some(i,t){return ei(this,"some",i,t,void 0,arguments)},splice(...i){return _r(this,"splice",i)},toReversed(){return Ms(this).toReversed()},toSorted(i){return Ms(this).toSorted(i)},toSpliced(...i){return Ms(this).toSpliced(...i)},unshift(...i){return _r(this,"unshift",i)},values(){return Ba(this,"values",i=>Oi(this,i))}};function Ba(i,t,e){const n=va(i),s=n[t]();return n!==i&&!dn(i)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const Nm=Array.prototype;function ei(i,t,e,n,s,r){const o=va(i),a=o!==i&&!dn(i),l=o[t];if(l!==Nm[t]){const f=l.apply(i,r);return a?Un(f):f}let c=e;o!==i&&(a?c=function(f,h){return e.call(this,Oi(i,f),h,i)}:e.length>2&&(c=function(f,h){return e.call(this,f,h,i)}));const u=l.call(o,c,n);return a&&s?s(u):u}function zu(i,t,e,n){const s=va(i);let r=e;return s!==i&&(dn(i)?e.length>3&&(r=function(o,a,l){return e.call(this,o,a,l,i)}):r=function(o,a,l){return e.call(this,o,Oi(i,a),l,i)}),s[t](r,...n)}function za(i,t,e){const n=re(i);We(n,"iterate",Kr);const s=n[t](...e);return(s===-1||s===!1)&&ya(e[0])?(e[0]=re(e[0]),n[t](...e)):s}function _r(i,t,e=[]){Si(),$c();const n=re(i)[t].apply(i,e);return Yc(),Mi(),n}const Um=Vc("__proto__,__v_isRef,__isVue"),pd=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(jn));function Fm(i){jn(i)||(i=String(i));const t=re(this);return We(t,"has",i),t.hasOwnProperty(i)}class md{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,n){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return n===(s?r?Xm:xd:r?vd:_d).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=Vt(t);if(!s){let l;if(o&&(l=Dm[e]))return l;if(e==="hasOwnProperty")return Fm}const a=Reflect.get(t,e,Te(t)?t:n);if((jn(e)?pd.has(e):Um(e))||(s||We(t,"get",e),r))return a;if(Te(a)){const l=o&&ma(e)?a:a.value;return s&&me(l)?zl(l):l}return me(a)?s?zl(a):xa(a):a}}class gd extends md{constructor(t=!1){super(!1,t)}set(t,e,n,s){let r=t[e];const o=Vt(t)&&ma(e);if(!this._isShallow){const c=Ei(r);if(!dn(n)&&!Ei(n)&&(r=re(r),n=re(n)),!o&&Te(r)&&!Te(n))return c||(r.value=n),!0}const a=o?Number(e)<t.length:ue(t,e),l=Reflect.set(t,e,n,Te(t)?t:s);return t===re(s)&&(a?Hi(n,r)&&pi(t,"set",e,n):pi(t,"add",e,n)),l}deleteProperty(t,e){const n=ue(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&pi(t,"delete",e,void 0),s}has(t,e){const n=Reflect.has(t,e);return(!jn(e)||!pd.has(e))&&We(t,"has",e),n}ownKeys(t){return We(t,"iterate",Vt(t)?"length":ms),Reflect.ownKeys(t)}}class Om extends md{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Bm=new gd,zm=new Om,km=new gd(!0);const Bl=i=>i,fo=i=>Reflect.getPrototypeOf(i);function Hm(i,t,e){return function(...n){const s=this.__v_raw,r=re(s),o=qs(r),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=s[i](...n),u=e?Bl:t?Zs:Un;return!t&&We(r,"iterate",l?Ol:ms),Be(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function po(i){return function(...t){return i==="delete"?!1:i==="clear"?void 0:this}}function Vm(i,t){const e={get(s){const r=this.__v_raw,o=re(r),a=re(s);i||(Hi(s,a)&&We(o,"get",s),We(o,"get",a));const{has:l}=fo(o),c=t?Bl:i?Zs:Un;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!i&&We(re(s),"iterate",ms),s.size},has(s){const r=this.__v_raw,o=re(r),a=re(s);return i||(Hi(s,a)&&We(o,"has",s),We(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=re(a),c=t?Bl:i?Zs:Un;return!i&&We(l,"iterate",ms),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return Be(e,i?{add:po("add"),set:po("set"),delete:po("delete"),clear:po("clear")}:{add(s){!t&&!dn(s)&&!Ei(s)&&(s=re(s));const r=re(this);return fo(r).has.call(r,s)||(r.add(s),pi(r,"add",s,s)),this},set(s,r){!t&&!dn(r)&&!Ei(r)&&(r=re(r));const o=re(this),{has:a,get:l}=fo(o);let c=a.call(o,s);c||(s=re(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Hi(r,u)&&pi(o,"set",s,r):pi(o,"add",s,r),this},delete(s){const r=re(this),{has:o,get:a}=fo(r);let l=o.call(r,s);l||(s=re(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&pi(r,"delete",s,void 0),c},clear(){const s=re(this),r=s.size!==0,o=s.clear();return r&&pi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Hm(s,i,t)}),e}function Zc(i,t){const e=Vm(i,t);return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(ue(e,s)&&s in n?e:n,s,r)}const Gm={get:Zc(!1,!1)},Wm={get:Zc(!1,!0)},qm={get:Zc(!0,!1)};const _d=new WeakMap,vd=new WeakMap,xd=new WeakMap,Xm=new WeakMap;function $m(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ym(i){return i.__v_skip||!Object.isExtensible(i)?0:$m(xm(i))}function xa(i){return Ei(i)?i:Jc(i,!1,Bm,Gm,_d)}function jm(i){return Jc(i,!1,km,Wm,vd)}function zl(i){return Jc(i,!0,zm,qm,xd)}function Jc(i,t,e,n,s){if(!me(i)||i.__v_raw&&!(t&&i.__v_isReactive))return i;const r=Ym(i);if(r===0)return i;const o=s.get(i);if(o)return o;const a=new Proxy(i,r===2?n:e);return s.set(i,a),a}function vi(i){return Ei(i)?vi(i.__v_raw):!!(i&&i.__v_isReactive)}function Ei(i){return!!(i&&i.__v_isReadonly)}function dn(i){return!!(i&&i.__v_isShallow)}function ya(i){return i?!!i.__v_raw:!1}function re(i){const t=i&&i.__v_raw;return t?re(t):i}function Qc(i){return!ue(i,"__v_skip")&&Object.isExtensible(i)&&Qf(i,"__v_skip",!0),i}const Un=i=>me(i)?xa(i):i,Zs=i=>me(i)?zl(i):i;function Te(i){return i?i.__v_isRef===!0:!1}function Ee(i){return yd(i,!1)}function Km(i){return yd(i,!0)}function yd(i,t){return Te(i)?i:new Zm(i,t)}class Zm{constructor(t,e){this.dep=new Kc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:re(t),this._value=e?t:Un(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,n=this.__v_isShallow||dn(t)||Ei(t);t=n?t:re(t),Hi(t,e)&&(this._rawValue=t,this._value=n?t:Un(t),this.dep.trigger())}}function Ot(i){return Te(i)?i.value:i}const Jm={get:(i,t,e)=>t==="__v_raw"?i:Ot(Reflect.get(i,t,e)),set:(i,t,e,n)=>{const s=i[t];return Te(s)&&!Te(e)?(s.value=e,!0):Reflect.set(i,t,e,n)}};function Sd(i){return vi(i)?i:new Proxy(i,Jm)}function Qm(i){const t=Vt(i)?new Array(i.length):{};for(const e in i)t[e]=eg(i,e);return t}class tg{constructor(t,e,n){this._object=t,this._key=e,this._defaultValue=n,this.__v_isRef=!0,this._value=void 0,this._raw=re(t);let s=!0,r=t;if(!Vt(t)||!ma(String(e)))do s=!ya(r)||dn(r);while(s&&(r=r.__v_raw));this._shallow=s}get value(){let t=this._object[this._key];return this._shallow&&(t=Ot(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&Te(this._raw[this._key])){const e=this._object[this._key];if(Te(e)){e.value=t;return}}this._object[this._key]=t}get dep(){return Im(this._raw,this._key)}}function eg(i,t,e){return new tg(i,t,e)}class ng{constructor(t,e,n){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Kc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=jr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&xe!==this)return ld(this,!0),!0}get value(){const t=this.dep.track();return hd(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ig(i,t,e=!1){let n,s;return jt(i)?n=i:(n=i.get,s=i.set),new ng(n,s,e)}const mo={},sa=new WeakMap;let as;function sg(i,t=!1,e=as){if(e){let n=sa.get(e);n||sa.set(e,n=[]),n.push(i)}}function rg(i,t,e=_e){const{immediate:n,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=y=>s?y:dn(y)||s===!1||s===0?mi(y,1):mi(y);let u,f,h,d,g=!1,_=!1;if(Te(i)?(f=()=>i.value,g=dn(i)):vi(i)?(f=()=>c(i),g=!0):Vt(i)?(_=!0,g=i.some(y=>vi(y)||dn(y)),f=()=>i.map(y=>{if(Te(y))return y.value;if(vi(y))return c(y);if(jt(y))return l?l(y,2):y()})):jt(i)?t?f=l?()=>l(i,2):i:f=()=>{if(h){Si();try{h()}finally{Mi()}}const y=as;as=u;try{return l?l(i,3,[d]):i(d)}finally{as=y}}:f=Xn,t&&s){const y=f,L=s===!0?1/0:s;f=()=>mi(y(),L)}const m=rd(),p=()=>{u.stop(),m&&m.active&&Wc(m.effects,u)};if(r&&t){const y=t;t=(...L)=>{y(...L),p()}}let x=_?new Array(i.length).fill(mo):mo;const w=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(t){const L=u.run();if(s||g||(_?L.some((P,R)=>Hi(P,x[R])):Hi(L,x))){h&&h();const P=as;as=u;try{const R=[L,x===mo?void 0:_&&x[0]===mo?[]:x,d];x=L,l?l(t,3,R):t(...R)}finally{as=P}}}else u.run()};return a&&a(w),u=new od(f),u.scheduler=o?()=>o(w,!1):w,d=y=>sg(y,!1,u),h=u.onStop=()=>{const y=sa.get(u);if(y){if(l)l(y,4);else for(const L of y)L();sa.delete(u)}},t?n?w(!0):x=u.run():o?o(w.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function mi(i,t=1/0,e){if(t<=0||!me(i)||i.__v_skip||(e=e||new Map,(e.get(i)||0)>=t))return i;if(e.set(i,t),t--,Te(i))mi(i.value,t,e);else if(Vt(i))for(let n=0;n<i.length;n++)mi(i[n],t,e);else if(Yf(i)||qs(i))i.forEach(n=>{mi(n,t,e)});else if(Zf(i)){for(const n in i)mi(i[n],t,e);for(const n of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,n)&&mi(i[n],t,e)}return i}/**
* @vue/runtime-core v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function no(i,t,e,n){try{return n?i(...n):i()}catch(s){Sa(s,t,e)}}function Zn(i,t,e,n){if(jt(i)){const s=no(i,t,e,n);return s&&jf(s)&&s.catch(r=>{Sa(r,t,e)}),s}if(Vt(i)){const s=[];for(let r=0;r<i.length;r++)s.push(Zn(i[r],t,e,n));return s}}function Sa(i,t,e,n=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||_e;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](i,l,c)===!1)return}a=a.parent}if(r){Si(),no(r,null,10,[i,l,c]),Mi();return}}og(i,e,s,n,o)}function og(i,t,e,n=!0,s=!1){if(s)throw i;console.error(i)}const je=[];let Hn=-1;const Xs=[];let Bi=null,ks=0;const Md=Promise.resolve();let ra=null;function Ed(i){const t=ra||Md;return i?t.then(this?i.bind(this):i):t}function ag(i){let t=Hn+1,e=je.length;for(;t<e;){const n=t+e>>>1,s=je[n],r=Zr(s);r<i||r===i&&s.flags&2?t=n+1:e=n}return t}function tu(i){if(!(i.flags&1)){const t=Zr(i),e=je[je.length-1];!e||!(i.flags&2)&&t>=Zr(e)?je.push(i):je.splice(ag(t),0,i),i.flags|=1,bd()}}function bd(){ra||(ra=Md.then(Td))}function lg(i){Vt(i)?Xs.push(...i):Bi&&i.id===-1?Bi.splice(ks+1,0,i):i.flags&1||(Xs.push(i),i.flags|=1),bd()}function ku(i,t,e=Hn+1){for(;e<je.length;e++){const n=je[e];if(n&&n.flags&2){if(i&&n.id!==i.uid)continue;je.splice(e,1),e--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function wd(i){if(Xs.length){const t=[...new Set(Xs)].sort((e,n)=>Zr(e)-Zr(n));if(Xs.length=0,Bi){Bi.push(...t);return}for(Bi=t,ks=0;ks<Bi.length;ks++){const e=Bi[ks];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Bi=null,ks=0}}const Zr=i=>i.id==null?i.flags&2?-1:1/0:i.id;function Td(i){try{for(Hn=0;Hn<je.length;Hn++){const t=je[Hn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),no(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Hn<je.length;Hn++){const t=je[Hn];t&&(t.flags&=-2)}Hn=-1,je.length=0,wd(),ra=null,(je.length||Xs.length)&&Td()}}let Sn=null,Ad=null;function oa(i){const t=Sn;return Sn=i,Ad=i&&i.type.__scopeId||null,t}function cg(i,t=Sn,e){if(!t||i._n)return i;const n=(...s)=>{n._d&&Zu(-1);const r=oa(t);let o;try{o=i(...s)}finally{oa(r),n._d&&Zu(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function ka(i,t){if(Sn===null)return i;const e=wa(Sn),n=i.dirs||(i.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=_e]=t[s];r&&(jt(r)&&(r={mounted:r,updated:r}),r.deep&&mi(o),n.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return i}function Ji(i,t,e,n){const s=i.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[n];l&&(Si(),Zn(l,e,8,[i.el,a,i,t]),Mi())}}function ug(i,t){if(Ke){let e=Ke.provides;const n=Ke.parent&&Ke.parent.provides;n===e&&(e=Ke.provides=Object.create(n)),e[i]=t}}function Hr(i,t,e=!1){const n=ep();if(n||gs){let s=gs?gs._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(s&&i in s)return s[i];if(arguments.length>1)return e&&jt(t)?t.call(n&&n.proxy):t}}function hg(){return!!(ep()||gs)}const fg=Symbol.for("v-scx"),dg=()=>Hr(fg);function $s(i,t,e){return Cd(i,t,e)}function Cd(i,t,e=_e){const{immediate:n,deep:s,flush:r,once:o}=e,a=Be({},e),l=t&&n||!t&&r!=="post";let c;if(Qr){if(r==="sync"){const d=dg();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Xn,d.resume=Xn,d.pause=Xn,d}}const u=Ke;a.call=(d,g,_)=>Zn(d,u,g,_);let f=!1;r==="post"?a.scheduler=d=>{nn(d,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():tu(d)}),a.augmentJob=d=>{t&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=rg(i,t,a);return Qr&&(c?c.push(h):l&&h()),h}function pg(i,t,e){const n=this.proxy,s=Le(i)?i.includes(".")?Rd(n,i):()=>n[i]:i.bind(n,n);let r;jt(t)?r=t:(r=t.handler,e=t);const o=so(this),a=Cd(s,r.bind(n),e);return o(),a}function Rd(i,t){const e=t.split(".");return()=>{let n=i;for(let s=0;s<e.length&&n;s++)n=n[e[s]];return n}}const mg=Symbol("_vte"),gg=i=>i.__isTeleport,_g=Symbol("_leaveCb");function eu(i,t){i.shapeFlag&6&&i.component?(i.transition=t,eu(i.component.subTree,t)):i.shapeFlag&128?(i.ssContent.transition=t.clone(i.ssContent),i.ssFallback.transition=t.clone(i.ssFallback)):i.transition=t}function xs(i,t){return jt(i)?Be({name:i.name},t,{setup:i}):i}function Pd(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}function Hu(i,t){let e;return!!((e=Object.getOwnPropertyDescriptor(i,t))&&!e.configurable)}const aa=new WeakMap;function Vr(i,t,e,n,s=!1){if(Vt(i)){i.forEach((_,m)=>Vr(_,t&&(Vt(t)?t[m]:t),e,n,s));return}if(Gr(n)&&!s){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Vr(i,t,e,n.component.subTree);return}const r=n.shapeFlag&4?wa(n.component):n.el,o=s?null:r,{i:a,r:l}=i,c=t&&t.r,u=a.refs===_e?a.refs={}:a.refs,f=a.setupState,h=re(f),d=f===_e?$f:_=>Hu(u,_)?!1:ue(h,_),g=(_,m)=>!(m&&Hu(u,m));if(c!=null&&c!==l){if(Vu(t),Le(c))u[c]=null,d(c)&&(f[c]=null);else if(Te(c)){const _=t;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(jt(l))no(l,a,12,[o,u]);else{const _=Le(l),m=Te(l);if(_||m){const p=()=>{if(i.f){const x=_?d(l)?f[l]:u[l]:g()||!i.k?l.value:u[i.k];if(s)Vt(x)&&Wc(x,r);else if(Vt(x))x.includes(r)||x.push(r);else if(_)u[l]=[r],d(l)&&(f[l]=u[l]);else{const w=[r];g(l,i.k)&&(l.value=w),i.k&&(u[i.k]=w)}}else _?(u[l]=o,d(l)&&(f[l]=o)):m&&(g(l,i.k)&&(l.value=o),i.k&&(u[i.k]=o))};if(o){const x=()=>{p(),aa.delete(i)};x.id=-1,aa.set(i,x),nn(x,e)}else Vu(i),p()}}}function Vu(i){const t=aa.get(i);t&&(t.flags|=8,aa.delete(i))}_a().requestIdleCallback;_a().cancelIdleCallback;const Gr=i=>!!i.type.__asyncLoader,Ld=i=>i.type.__isKeepAlive;function vg(i,t){Id(i,"a",t)}function xg(i,t){Id(i,"da",t)}function Id(i,t,e=Ke){const n=i.__wdc||(i.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(Ma(t,n,e),e){let s=e.parent;for(;s&&s.parent;)Ld(s.parent.vnode)&&yg(n,t,e,s),s=s.parent}}function yg(i,t,e,n){const s=Ma(t,i,n,!0);Nd(()=>{Wc(n[t],s)},e)}function Ma(i,t,e=Ke,n=!1){if(e){const s=e[i]||(e[i]=[]),r=t.__weh||(t.__weh=(...o)=>{Si();const a=so(e),l=Zn(t,e,i,o);return a(),Mi(),l});return n?s.unshift(r):s.push(r),r}}const wi=i=>(t,e=Ke)=>{(!Qr||i==="sp")&&Ma(i,(...n)=>t(...n),e)},Sg=wi("bm"),io=wi("m"),Mg=wi("bu"),Eg=wi("u"),Dd=wi("bum"),Nd=wi("um"),bg=wi("sp"),wg=wi("rtg"),Tg=wi("rtc");function Ag(i,t=Ke){Ma("ec",i,t)}const Cg=Symbol.for("v-ndc");function Oe(i,t,e,n){let s;const r=e,o=Vt(i);if(o||Le(i)){const a=o&&vi(i);let l=!1,c=!1;a&&(l=!dn(i),c=Ei(i),i=va(i)),s=new Array(i.length);for(let u=0,f=i.length;u<f;u++)s[u]=t(l?c?Zs(Un(i[u])):Un(i[u]):i[u],u,void 0,r)}else if(typeof i=="number"){s=new Array(i);for(let a=0;a<i;a++)s[a]=t(a+1,a,void 0,r)}else if(me(i))if(i[Symbol.iterator])s=Array.from(i,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(i);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(i[u],u,l,r)}}else s=[];return s}const kl=i=>i?np(i)?wa(i):kl(i.parent):null,Wr=Be(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>kl(i.parent),$root:i=>kl(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>Fd(i),$forceUpdate:i=>i.f||(i.f=()=>{tu(i.update)}),$nextTick:i=>i.n||(i.n=Ed.bind(i.proxy)),$watch:i=>pg.bind(i)}),Ha=(i,t)=>i!==_e&&!i.__isScriptSetup&&ue(i,t),Rg={get({_:i},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:n,data:s,props:r,accessCache:o,type:a,appContext:l}=i;if(t[0]!=="$"){const h=o[t];if(h!==void 0)switch(h){case 1:return n[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Ha(n,t))return o[t]=1,n[t];if(s!==_e&&ue(s,t))return o[t]=2,s[t];if(ue(r,t))return o[t]=3,r[t];if(e!==_e&&ue(e,t))return o[t]=4,e[t];Hl&&(o[t]=0)}}const c=Wr[t];let u,f;if(c)return t==="$attrs"&&We(i.attrs,"get",""),c(i);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==_e&&ue(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,ue(f,t))return f[t]},set({_:i},t,e){const{data:n,setupState:s,ctx:r}=i;return Ha(s,t)?(s[t]=e,!0):n!==_e&&ue(n,t)?(n[t]=e,!0):ue(i.props,t)||t[0]==="$"&&t.slice(1)in i?!1:(r[t]=e,!0)},has({_:{data:i,setupState:t,accessCache:e,ctx:n,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||i!==_e&&a[0]!=="$"&&ue(i,a)||Ha(t,a)||ue(r,a)||ue(n,a)||ue(Wr,a)||ue(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(i,t,e){return e.get!=null?i._.accessCache[t]=0:ue(e,"value")&&this.set(i,t,e.value,null),Reflect.defineProperty(i,t,e)}};function Gu(i){return Vt(i)?i.reduce((t,e)=>(t[e]=null,t),{}):i}let Hl=!0;function Pg(i){const t=Fd(i),e=i.proxy,n=i.ctx;Hl=!1,t.beforeCreate&&Wu(t.beforeCreate,i,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:x,destroyed:w,unmounted:y,render:L,renderTracked:P,renderTriggered:R,errorCaptured:I,serverPrefetch:b,expose:S,inheritAttrs:N,components:W,directives:F,filters:V}=t;if(c&&Lg(c,n,null),o)for(const j in o){const H=o[j];jt(H)&&(n[j]=H.bind(e))}if(s){const j=s.call(e,e);me(j)&&(i.data=xa(j))}if(Hl=!0,r)for(const j in r){const H=r[j],lt=jt(H)?H.bind(e,e):jt(H.get)?H.get.bind(e,e):Xn,_t=!jt(H)&&jt(H.set)?H.set.bind(e):Xn,ct=Ge({get:lt,set:_t});Object.defineProperty(n,j,{enumerable:!0,configurable:!0,get:()=>ct.value,set:ht=>ct.value=ht})}if(a)for(const j in a)Ud(a[j],n,e,j);if(l){const j=jt(l)?l.call(e):l;Reflect.ownKeys(j).forEach(H=>{ug(H,j[H])})}u&&Wu(u,i,"c");function O(j,H){Vt(H)?H.forEach(lt=>j(lt.bind(e))):H&&j(H.bind(e))}if(O(Sg,f),O(io,h),O(Mg,d),O(Eg,g),O(vg,_),O(xg,m),O(Ag,I),O(Tg,P),O(wg,R),O(Dd,x),O(Nd,y),O(bg,b),Vt(S))if(S.length){const j=i.exposed||(i.exposed={});S.forEach(H=>{Object.defineProperty(j,H,{get:()=>e[H],set:lt=>e[H]=lt,enumerable:!0})})}else i.exposed||(i.exposed={});L&&i.render===Xn&&(i.render=L),N!=null&&(i.inheritAttrs=N),W&&(i.components=W),F&&(i.directives=F),b&&Pd(i)}function Lg(i,t,e=Xn){Vt(i)&&(i=Vl(i));for(const n in i){const s=i[n];let r;me(s)?"default"in s?r=Hr(s.from||n,s.default,!0):r=Hr(s.from||n):r=Hr(s),Te(r)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[n]=r}}function Wu(i,t,e){Zn(Vt(i)?i.map(n=>n.bind(t.proxy)):i.bind(t.proxy),t,e)}function Ud(i,t,e,n){let s=n.includes(".")?Rd(e,n):()=>e[n];if(Le(i)){const r=t[i];jt(r)&&$s(s,r)}else if(jt(i))$s(s,i.bind(e));else if(me(i))if(Vt(i))i.forEach(r=>Ud(r,t,e,n));else{const r=jt(i.handler)?i.handler.bind(e):t[i.handler];jt(r)&&$s(s,r,i)}}function Fd(i){const t=i.type,{mixins:e,extends:n}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=i.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!n?l=t:(l={},s.length&&s.forEach(c=>la(l,c,o,!0)),la(l,t,o)),me(t)&&r.set(t,l),l}function la(i,t,e,n=!1){const{mixins:s,extends:r}=t;r&&la(i,r,e,!0),s&&s.forEach(o=>la(i,o,e,!0));for(const o in t)if(!(n&&o==="expose")){const a=Ig[o]||e&&e[o];i[o]=a?a(i[o],t[o]):t[o]}return i}const Ig={data:qu,props:Xu,emits:Xu,methods:Dr,computed:Dr,beforeCreate:$e,created:$e,beforeMount:$e,mounted:$e,beforeUpdate:$e,updated:$e,beforeDestroy:$e,beforeUnmount:$e,destroyed:$e,unmounted:$e,activated:$e,deactivated:$e,errorCaptured:$e,serverPrefetch:$e,components:Dr,directives:Dr,watch:Ng,provide:qu,inject:Dg};function qu(i,t){return t?i?function(){return Be(jt(i)?i.call(this,this):i,jt(t)?t.call(this,this):t)}:t:i}function Dg(i,t){return Dr(Vl(i),Vl(t))}function Vl(i){if(Vt(i)){const t={};for(let e=0;e<i.length;e++)t[i[e]]=i[e];return t}return i}function $e(i,t){return i?[...new Set([].concat(i,t))]:t}function Dr(i,t){return i?Be(Object.create(null),i,t):t}function Xu(i,t){return i?Vt(i)&&Vt(t)?[...new Set([...i,...t])]:Be(Object.create(null),Gu(i),Gu(t??{})):t}function Ng(i,t){if(!i)return t;if(!t)return i;const e=Be(Object.create(null),i);for(const n in t)e[n]=$e(i[n],t[n]);return e}function Od(){return{app:null,config:{isNativeTag:$f,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ug=0;function Fg(i,t){return function(n,s=null){jt(n)||(n=Be({},n)),s!=null&&!me(s)&&(s=null);const r=Od(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Ug++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:d_,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&jt(u.install)?(o.add(u),u.install(c,...f)):jt(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Dn(n,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),i(d,u,h),l=!0,c._container=u,u.__vue_app__=c,wa(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Zn(a,c._instance,16),i(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=gs;gs=c;try{return u()}finally{gs=f}}};return c}}let gs=null;const Og=(i,t)=>t==="modelValue"||t==="model-value"?i.modelModifiers:i[`${t}Modifiers`]||i[`${Xi(t)}Modifiers`]||i[`${Ki(t)}Modifiers`];function Bg(i,t,...e){if(i.isUnmounted)return;const n=i.vnode.props||_e;let s=e;const r=t.startsWith("update:"),o=r&&Og(n,t.slice(7));o&&(o.trim&&(s=e.map(u=>Le(u)?u.trim():u)),o.number&&(s=e.map(qc)));let a,l=n[a=Ua(t)]||n[a=Ua(Xi(t))];!l&&r&&(l=n[a=Ua(Ki(t))]),l&&Zn(l,i,6,s);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,Zn(c,i,6,s)}}const zg=new WeakMap;function Bd(i,t,e=!1){const n=e?zg:t.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let o={},a=!1;if(!jt(i)){const l=c=>{const u=Bd(c,t,!0);u&&(a=!0,Be(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!r&&!a?(me(i)&&n.set(i,null),null):(Vt(r)?r.forEach(l=>o[l]=null):Be(o,r),me(i)&&n.set(i,o),o)}function Ea(i,t){return!i||!pa(t)?!1:(t=t.slice(2).replace(/Once$/,""),ue(i,t[0].toLowerCase()+t.slice(1))||ue(i,Ki(t))||ue(i,t))}function $u(i){const{type:t,vnode:e,proxy:n,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=i,m=oa(i);let p,x;try{if(e.shapeFlag&4){const y=s||n,L=y;p=Vn(c.call(L,y,u,f,d,h,g)),x=a}else{const y=t;p=Vn(y.length>1?y(f,{attrs:a,slots:o,emit:l}):y(f,null)),x=t.props?a:kg(a)}}catch(y){qr.length=0,Sa(y,i,1),p=Dn($i)}let w=p;if(x&&_!==!1){const y=Object.keys(x),{shapeFlag:L}=w;y.length&&L&7&&(r&&y.some(Gc)&&(x=Hg(x,r)),w=Js(w,x,!1,!0))}return e.dirs&&(w=Js(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(e.dirs):e.dirs),e.transition&&eu(w,e.transition),p=w,oa(m),p}const kg=i=>{let t;for(const e in i)(e==="class"||e==="style"||pa(e))&&((t||(t={}))[e]=i[e]);return t},Hg=(i,t)=>{const e={};for(const n in i)(!Gc(n)||!(n.slice(9)in t))&&(e[n]=i[n]);return e};function Vg(i,t,e){const{props:n,children:s,component:r}=i,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return n?Yu(n,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(zd(o,n,h)&&!Ea(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Yu(n,o,c):!0:!!o;return!1}function Yu(i,t,e){const n=Object.keys(t);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(zd(t,i,r)&&!Ea(e,r))return!0}return!1}function zd(i,t,e){const n=i[e],s=t[e];return e==="style"&&me(n)&&me(s)?!Xc(n,s):n!==s}function Gg({vnode:i,parent:t},e){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=t.vnode).el=e,t=t.parent;else break}}const kd={},Hd=()=>Object.create(kd),Vd=i=>Object.getPrototypeOf(i)===kd;function Wg(i,t,e,n=!1){const s={},r=Hd();i.propsDefaults=Object.create(null),Gd(i,t,s,r);for(const o in i.propsOptions[0])o in s||(s[o]=void 0);e?i.props=n?s:jm(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function qg(i,t,e,n){const{props:s,attrs:r,vnode:{patchFlag:o}}=i,a=re(s),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Ea(i.emitsOptions,h))continue;const d=t[h];if(l)if(ue(r,h))d!==r[h]&&(r[h]=d,c=!0);else{const g=Xi(h);s[g]=Gl(l,a,g,d,i,!1)}else d!==r[h]&&(r[h]=d,c=!0)}}}else{Gd(i,t,s,r)&&(c=!0);let u;for(const f in a)(!t||!ue(t,f)&&((u=Ki(f))===f||!ue(t,u)))&&(l?e&&(e[f]!==void 0||e[u]!==void 0)&&(s[f]=Gl(l,a,f,void 0,i,!0)):delete s[f]);if(r!==a)for(const f in r)(!t||!ue(t,f))&&(delete r[f],c=!0)}c&&pi(i.attrs,"set","")}function Gd(i,t,e,n){const[s,r]=i.propsOptions;let o=!1,a;if(t)for(let l in t){if(Br(l))continue;const c=t[l];let u;s&&ue(s,u=Xi(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:Ea(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=re(e),c=a||_e;for(let u=0;u<r.length;u++){const f=r[u];e[f]=Gl(s,l,f,c[f],i,!ue(c,f))}}return o}function Gl(i,t,e,n,s,r){const o=i[e];if(o!=null){const a=ue(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&jt(l)){const{propsDefaults:c}=s;if(e in c)n=c[e];else{const u=so(s);n=c[e]=l.call(null,t),u()}}else n=l;s.ce&&s.ce._setProp(e,n)}o[0]&&(r&&!a?n=!1:o[1]&&(n===""||n===Ki(e))&&(n=!0))}return n}const Xg=new WeakMap;function Wd(i,t,e=!1){const n=e?Xg:t.propsCache,s=n.get(i);if(s)return s;const r=i.props,o={},a=[];let l=!1;if(!jt(i)){const u=f=>{l=!0;const[h,d]=Wd(f,t,!0);Be(o,h),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!r&&!l)return me(i)&&n.set(i,Ws),Ws;if(Vt(r))for(let u=0;u<r.length;u++){const f=Xi(r[u]);ju(f)&&(o[f]=_e)}else if(r)for(const u in r){const f=Xi(u);if(ju(f)){const h=r[u],d=o[f]=Vt(h)||jt(h)?{type:h}:Be({},h),g=d.type;let _=!1,m=!0;if(Vt(g))for(let p=0;p<g.length;++p){const x=g[p],w=jt(x)&&x.name;if(w==="Boolean"){_=!0;break}else w==="String"&&(m=!1)}else _=jt(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||ue(d,"default"))&&a.push(f)}}const c=[o,a];return me(i)&&n.set(i,c),c}function ju(i){return i[0]!=="$"&&!Br(i)}const nu=i=>i==="_"||i==="_ctx"||i==="$stable",iu=i=>Vt(i)?i.map(Vn):[Vn(i)],$g=(i,t,e)=>{if(t._n)return t;const n=cg((...s)=>iu(t(...s)),e);return n._c=!1,n},qd=(i,t,e)=>{const n=i._ctx;for(const s in i){if(nu(s))continue;const r=i[s];if(jt(r))t[s]=$g(s,r,n);else if(r!=null){const o=iu(r);t[s]=()=>o}}},Xd=(i,t)=>{const e=iu(t);i.slots.default=()=>e},$d=(i,t,e)=>{for(const n in t)(e||!nu(n))&&(i[n]=t[n])},Yg=(i,t,e)=>{const n=i.slots=Hd();if(i.vnode.shapeFlag&32){const s=t._;s?($d(n,t,e),e&&Qf(n,"_",s,!0)):qd(t,n)}else t&&Xd(i,t)},jg=(i,t,e)=>{const{vnode:n,slots:s}=i;let r=!0,o=_e;if(n.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:$d(s,t,e):(r=!t.$stable,qd(t,s)),o=t}else t&&(Xd(i,t),o={default:1});if(r)for(const a in s)!nu(a)&&o[a]==null&&delete s[a]},nn=t_;function Kg(i){return Zg(i)}function Zg(i,t){const e=_a();e.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Xn,insertStaticContent:g}=i,_=(D,z,C,ut=null,tt=null,nt=null,ot=void 0,ft=null,et=!!z.dynamicChildren)=>{if(D===z)return;D&&!vr(D,z)&&(ut=yt(D),ht(D,tt,nt,!0),D=null),z.patchFlag===-2&&(et=!1,z.dynamicChildren=null);const{type:M,ref:v,shapeFlag:T}=z;switch(M){case ba:m(D,z,C,ut);break;case $i:p(D,z,C,ut);break;case Ga:D==null&&x(z,C,ut,ot);break;case oe:W(D,z,C,ut,tt,nt,ot,ft,et);break;default:T&1?L(D,z,C,ut,tt,nt,ot,ft,et):T&6?F(D,z,C,ut,tt,nt,ot,ft,et):(T&64||T&128)&&M.process(D,z,C,ut,tt,nt,ot,ft,et,Gt)}v!=null&&tt?Vr(v,D&&D.ref,nt,z||D,!z):v==null&&D&&D.ref!=null&&Vr(D.ref,null,nt,D,!0)},m=(D,z,C,ut)=>{if(D==null)n(z.el=a(z.children),C,ut);else{const tt=z.el=D.el;z.children!==D.children&&c(tt,z.children)}},p=(D,z,C,ut)=>{D==null?n(z.el=l(z.children||""),C,ut):z.el=D.el},x=(D,z,C,ut)=>{[D.el,D.anchor]=g(D.children,z,C,ut,D.el,D.anchor)},w=({el:D,anchor:z},C,ut)=>{let tt;for(;D&&D!==z;)tt=h(D),n(D,C,ut),D=tt;n(z,C,ut)},y=({el:D,anchor:z})=>{let C;for(;D&&D!==z;)C=h(D),s(D),D=C;s(z)},L=(D,z,C,ut,tt,nt,ot,ft,et)=>{if(z.type==="svg"?ot="svg":z.type==="math"&&(ot="mathml"),D==null)P(z,C,ut,tt,nt,ot,ft,et);else{const M=D.el&&D.el._isVueCE?D.el:null;try{M&&M._beginPatch(),b(D,z,tt,nt,ot,ft,et)}finally{M&&M._endPatch()}}},P=(D,z,C,ut,tt,nt,ot,ft)=>{let et,M;const{props:v,shapeFlag:T,transition:U,dirs:k}=D;if(et=D.el=o(D.type,nt,v&&v.is,v),T&8?u(et,D.children):T&16&&I(D.children,et,null,ut,tt,Va(D,nt),ot,ft),k&&Ji(D,null,ut,"created"),R(et,D,D.scopeId,ot,ut),v){for(const st in v)st!=="value"&&!Br(st)&&r(et,st,null,v[st],nt,ut);"value"in v&&r(et,"value",null,v.value,nt),(M=v.onVnodeBeforeMount)&&On(M,ut,D)}k&&Ji(D,null,ut,"beforeMount");const B=Jg(tt,U);B&&U.beforeEnter(et),n(et,z,C),((M=v&&v.onVnodeMounted)||B||k)&&nn(()=>{M&&On(M,ut,D),B&&U.enter(et),k&&Ji(D,null,ut,"mounted")},tt)},R=(D,z,C,ut,tt)=>{if(C&&d(D,C),ut)for(let nt=0;nt<ut.length;nt++)d(D,ut[nt]);if(tt){let nt=tt.subTree;if(z===nt||Zd(nt.type)&&(nt.ssContent===z||nt.ssFallback===z)){const ot=tt.vnode;R(D,ot,ot.scopeId,ot.slotScopeIds,tt.parent)}}},I=(D,z,C,ut,tt,nt,ot,ft,et=0)=>{for(let M=et;M<D.length;M++){const v=D[M]=ft?di(D[M]):Vn(D[M]);_(null,v,z,C,ut,tt,nt,ot,ft)}},b=(D,z,C,ut,tt,nt,ot)=>{const ft=z.el=D.el;let{patchFlag:et,dynamicChildren:M,dirs:v}=z;et|=D.patchFlag&16;const T=D.props||_e,U=z.props||_e;let k;if(C&&Qi(C,!1),(k=U.onVnodeBeforeUpdate)&&On(k,C,z,D),v&&Ji(z,D,C,"beforeUpdate"),C&&Qi(C,!0),(T.innerHTML&&U.innerHTML==null||T.textContent&&U.textContent==null)&&u(ft,""),M?S(D.dynamicChildren,M,ft,C,ut,Va(z,tt),nt):ot||H(D,z,ft,null,C,ut,Va(z,tt),nt,!1),et>0){if(et&16)N(ft,T,U,C,tt);else if(et&2&&T.class!==U.class&&r(ft,"class",null,U.class,tt),et&4&&r(ft,"style",T.style,U.style,tt),et&8){const B=z.dynamicProps;for(let st=0;st<B.length;st++){const K=B[st],dt=T[K],wt=U[K];(wt!==dt||K==="value")&&r(ft,K,dt,wt,tt,C)}}et&1&&D.children!==z.children&&u(ft,z.children)}else!ot&&M==null&&N(ft,T,U,C,tt);((k=U.onVnodeUpdated)||v)&&nn(()=>{k&&On(k,C,z,D),v&&Ji(z,D,C,"updated")},ut)},S=(D,z,C,ut,tt,nt,ot)=>{for(let ft=0;ft<z.length;ft++){const et=D[ft],M=z[ft],v=et.el&&(et.type===oe||!vr(et,M)||et.shapeFlag&198)?f(et.el):C;_(et,M,v,null,ut,tt,nt,ot,!0)}},N=(D,z,C,ut,tt)=>{if(z!==C){if(z!==_e)for(const nt in z)!Br(nt)&&!(nt in C)&&r(D,nt,z[nt],null,tt,ut);for(const nt in C){if(Br(nt))continue;const ot=C[nt],ft=z[nt];ot!==ft&&nt!=="value"&&r(D,nt,ft,ot,tt,ut)}"value"in C&&r(D,"value",z.value,C.value,tt)}},W=(D,z,C,ut,tt,nt,ot,ft,et)=>{const M=z.el=D?D.el:a(""),v=z.anchor=D?D.anchor:a("");let{patchFlag:T,dynamicChildren:U,slotScopeIds:k}=z;k&&(ft=ft?ft.concat(k):k),D==null?(n(M,C,ut),n(v,C,ut),I(z.children||[],C,v,tt,nt,ot,ft,et)):T>0&&T&64&&U&&D.dynamicChildren&&D.dynamicChildren.length===U.length?(S(D.dynamicChildren,U,C,tt,nt,ot,ft),(z.key!=null||tt&&z===tt.subTree)&&Yd(D,z,!0)):H(D,z,C,v,tt,nt,ot,ft,et)},F=(D,z,C,ut,tt,nt,ot,ft,et)=>{z.slotScopeIds=ft,D==null?z.shapeFlag&512?tt.ctx.activate(z,C,ut,ot,et):V(z,C,ut,tt,nt,ot,et):G(D,z,et)},V=(D,z,C,ut,tt,nt,ot)=>{const ft=D.component=a_(D,ut,tt);if(Ld(D)&&(ft.ctx.renderer=Gt),l_(ft,!1,ot),ft.asyncDep){if(tt&&tt.registerDep(ft,O,ot),!D.el){const et=ft.subTree=Dn($i);p(null,et,z,C),D.placeholder=et.el}}else O(ft,D,z,C,tt,nt,ot)},G=(D,z,C)=>{const ut=z.component=D.component;if(Vg(D,z,C))if(ut.asyncDep&&!ut.asyncResolved){j(ut,z,C);return}else ut.next=z,ut.update();else z.el=D.el,ut.vnode=z},O=(D,z,C,ut,tt,nt,ot)=>{const ft=()=>{if(D.isMounted){let{next:T,bu:U,u:k,parent:B,vnode:st}=D;{const mt=jd(D);if(mt){T&&(T.el=st.el,j(D,T,ot)),mt.asyncDep.then(()=>{nn(()=>{D.isUnmounted||M()},tt)});return}}let K=T,dt;Qi(D,!1),T?(T.el=st.el,j(D,T,ot)):T=st,U&&Wo(U),(dt=T.props&&T.props.onVnodeBeforeUpdate)&&On(dt,B,T,st),Qi(D,!0);const wt=$u(D),Z=D.subTree;D.subTree=wt,_(Z,wt,f(Z.el),yt(Z),D,tt,nt),T.el=wt.el,K===null&&Gg(D,wt.el),k&&nn(k,tt),(dt=T.props&&T.props.onVnodeUpdated)&&nn(()=>On(dt,B,T,st),tt)}else{let T;const{el:U,props:k}=z,{bm:B,m:st,parent:K,root:dt,type:wt}=D,Z=Gr(z);Qi(D,!1),B&&Wo(B),!Z&&(T=k&&k.onVnodeBeforeMount)&&On(T,K,z),Qi(D,!0);{dt.ce&&dt.ce._hasShadowRoot()&&dt.ce._injectChildStyle(wt);const mt=D.subTree=$u(D);_(null,mt,C,ut,D,tt,nt),z.el=mt.el}if(st&&nn(st,tt),!Z&&(T=k&&k.onVnodeMounted)){const mt=z;nn(()=>On(T,K,mt),tt)}(z.shapeFlag&256||K&&Gr(K.vnode)&&K.vnode.shapeFlag&256)&&D.a&&nn(D.a,tt),D.isMounted=!0,z=C=ut=null}};D.scope.on();const et=D.effect=new od(ft);D.scope.off();const M=D.update=et.run.bind(et),v=D.job=et.runIfDirty.bind(et);v.i=D,v.id=D.uid,et.scheduler=()=>tu(v),Qi(D,!0),M()},j=(D,z,C)=>{z.component=D;const ut=D.vnode.props;D.vnode=z,D.next=null,qg(D,z.props,ut,C),jg(D,z.children,C),Si(),ku(D),Mi()},H=(D,z,C,ut,tt,nt,ot,ft,et=!1)=>{const M=D&&D.children,v=D?D.shapeFlag:0,T=z.children,{patchFlag:U,shapeFlag:k}=z;if(U>0){if(U&128){_t(M,T,C,ut,tt,nt,ot,ft,et);return}else if(U&256){lt(M,T,C,ut,tt,nt,ot,ft,et);return}}k&8?(v&16&&Ct(M,tt,nt),T!==M&&u(C,T)):v&16?k&16?_t(M,T,C,ut,tt,nt,ot,ft,et):Ct(M,tt,nt,!0):(v&8&&u(C,""),k&16&&I(T,C,ut,tt,nt,ot,ft,et))},lt=(D,z,C,ut,tt,nt,ot,ft,et)=>{D=D||Ws,z=z||Ws;const M=D.length,v=z.length,T=Math.min(M,v);let U;for(U=0;U<T;U++){const k=z[U]=et?di(z[U]):Vn(z[U]);_(D[U],k,C,null,tt,nt,ot,ft,et)}M>v?Ct(D,tt,nt,!0,!1,T):I(z,C,ut,tt,nt,ot,ft,et,T)},_t=(D,z,C,ut,tt,nt,ot,ft,et)=>{let M=0;const v=z.length;let T=D.length-1,U=v-1;for(;M<=T&&M<=U;){const k=D[M],B=z[M]=et?di(z[M]):Vn(z[M]);if(vr(k,B))_(k,B,C,null,tt,nt,ot,ft,et);else break;M++}for(;M<=T&&M<=U;){const k=D[T],B=z[U]=et?di(z[U]):Vn(z[U]);if(vr(k,B))_(k,B,C,null,tt,nt,ot,ft,et);else break;T--,U--}if(M>T){if(M<=U){const k=U+1,B=k<v?z[k].el:ut;for(;M<=U;)_(null,z[M]=et?di(z[M]):Vn(z[M]),C,B,tt,nt,ot,ft,et),M++}}else if(M>U)for(;M<=T;)ht(D[M],tt,nt,!0),M++;else{const k=M,B=M,st=new Map;for(M=B;M<=U;M++){const St=z[M]=et?di(z[M]):Vn(z[M]);St.key!=null&&st.set(St.key,M)}let K,dt=0;const wt=U-B+1;let Z=!1,mt=0;const Rt=new Array(wt);for(M=0;M<wt;M++)Rt[M]=0;for(M=k;M<=T;M++){const St=D[M];if(dt>=wt){ht(St,tt,nt,!0);continue}let Wt;if(St.key!=null)Wt=st.get(St.key);else for(K=B;K<=U;K++)if(Rt[K-B]===0&&vr(St,z[K])){Wt=K;break}Wt===void 0?ht(St,tt,nt,!0):(Rt[Wt-B]=M+1,Wt>=mt?mt=Wt:Z=!0,_(St,z[Wt],C,null,tt,nt,ot,ft,et),dt++)}const kt=Z?Qg(Rt):Ws;for(K=kt.length-1,M=wt-1;M>=0;M--){const St=B+M,Wt=z[St],Yt=z[St+1],he=St+1<v?Yt.el||Kd(Yt):ut;Rt[M]===0?_(null,Wt,C,he,tt,nt,ot,ft,et):Z&&(K<0||M!==kt[K]?ct(Wt,C,he,2):K--)}}},ct=(D,z,C,ut,tt=null)=>{const{el:nt,type:ot,transition:ft,children:et,shapeFlag:M}=D;if(M&6){ct(D.component.subTree,z,C,ut);return}if(M&128){D.suspense.move(z,C,ut);return}if(M&64){ot.move(D,z,C,Gt);return}if(ot===oe){n(nt,z,C);for(let T=0;T<et.length;T++)ct(et[T],z,C,ut);n(D.anchor,z,C);return}if(ot===Ga){w(D,z,C);return}if(ut!==2&&M&1&&ft)if(ut===0)ft.beforeEnter(nt),n(nt,z,C),nn(()=>ft.enter(nt),tt);else{const{leave:T,delayLeave:U,afterLeave:k}=ft,B=()=>{D.ctx.isUnmounted?s(nt):n(nt,z,C)},st=()=>{nt._isLeaving&&nt[_g](!0),T(nt,()=>{B(),k&&k()})};U?U(nt,B,st):st()}else n(nt,z,C)},ht=(D,z,C,ut=!1,tt=!1)=>{const{type:nt,props:ot,ref:ft,children:et,dynamicChildren:M,shapeFlag:v,patchFlag:T,dirs:U,cacheIndex:k}=D;if(T===-2&&(tt=!1),ft!=null&&(Si(),Vr(ft,null,C,D,!0),Mi()),k!=null&&(z.renderCache[k]=void 0),v&256){z.ctx.deactivate(D);return}const B=v&1&&U,st=!Gr(D);let K;if(st&&(K=ot&&ot.onVnodeBeforeUnmount)&&On(K,z,D),v&6)gt(D.component,C,ut);else{if(v&128){D.suspense.unmount(C,ut);return}B&&Ji(D,null,z,"beforeUnmount"),v&64?D.type.remove(D,z,C,Gt,ut):M&&!M.hasOnce&&(nt!==oe||T>0&&T&64)?Ct(M,z,C,!1,!0):(nt===oe&&T&384||!tt&&v&16)&&Ct(et,z,C),ut&&$t(D)}(st&&(K=ot&&ot.onVnodeUnmounted)||B)&&nn(()=>{K&&On(K,z,D),B&&Ji(D,null,z,"unmounted")},C)},$t=D=>{const{type:z,el:C,anchor:ut,transition:tt}=D;if(z===oe){at(C,ut);return}if(z===Ga){y(D);return}const nt=()=>{s(C),tt&&!tt.persisted&&tt.afterLeave&&tt.afterLeave()};if(D.shapeFlag&1&&tt&&!tt.persisted){const{leave:ot,delayLeave:ft}=tt,et=()=>ot(C,nt);ft?ft(D.el,nt,et):et()}else nt()},at=(D,z)=>{let C;for(;D!==z;)C=h(D),s(D),D=C;s(z)},gt=(D,z,C)=>{const{bum:ut,scope:tt,job:nt,subTree:ot,um:ft,m:et,a:M}=D;Ku(et),Ku(M),ut&&Wo(ut),tt.stop(),nt&&(nt.flags|=8,ht(ot,D,z,C)),ft&&nn(ft,z),nn(()=>{D.isUnmounted=!0},z)},Ct=(D,z,C,ut=!1,tt=!1,nt=0)=>{for(let ot=nt;ot<D.length;ot++)ht(D[ot],z,C,ut,tt)},yt=D=>{if(D.shapeFlag&6)return yt(D.component.subTree);if(D.shapeFlag&128)return D.suspense.next();const z=h(D.anchor||D.el),C=z&&z[mg];return C?h(C):z};let zt=!1;const Ht=(D,z,C)=>{let ut;D==null?z._vnode&&(ht(z._vnode,null,null,!0),ut=z._vnode.component):_(z._vnode||null,D,z,null,null,null,C),z._vnode=D,zt||(zt=!0,ku(ut),wd(),zt=!1)},Gt={p:_,um:ht,m:ct,r:$t,mt:V,mc:I,pc:H,pbc:S,n:yt,o:i};return{render:Ht,hydrate:void 0,createApp:Fg(Ht)}}function Va({type:i,props:t},e){return e==="svg"&&i==="foreignObject"||e==="mathml"&&i==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Qi({effect:i,job:t},e){e?(i.flags|=32,t.flags|=4):(i.flags&=-33,t.flags&=-5)}function Jg(i,t){return(!i||i&&!i.pendingBranch)&&t&&!t.persisted}function Yd(i,t,e=!1){const n=i.children,s=t.children;if(Vt(n)&&Vt(s))for(let r=0;r<n.length;r++){const o=n[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=di(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&Yd(o,a)),a.type===ba&&(a.patchFlag===-1&&(a=s[r]=di(a)),a.el=o.el),a.type===$i&&!a.el&&(a.el=o.el)}}function Qg(i){const t=i.slice(),e=[0];let n,s,r,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(s=e[e.length-1],i[s]<c){t[n]=s,e.push(n);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,i[e[a]]<c?r=a+1:o=a;c<i[e[r]]&&(r>0&&(t[n]=e[r-1]),e[r]=n)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function jd(i){const t=i.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:jd(t)}function Ku(i){if(i)for(let t=0;t<i.length;t++)i[t].flags|=8}function Kd(i){if(i.placeholder)return i.placeholder;const t=i.component;return t?Kd(t.subTree):null}const Zd=i=>i.__isSuspense;function t_(i,t){t&&t.pendingBranch?Vt(i)?t.effects.push(...i):t.effects.push(i):lg(i)}const oe=Symbol.for("v-fgt"),ba=Symbol.for("v-txt"),$i=Symbol.for("v-cmt"),Ga=Symbol.for("v-stc"),qr=[];let hn=null;function bt(i=!1){qr.push(hn=i?null:[])}function e_(){qr.pop(),hn=qr[qr.length-1]||null}let Jr=1;function Zu(i,t=!1){Jr+=i,i<0&&hn&&t&&(hn.hasOnce=!0)}function Jd(i){return i.dynamicChildren=Jr>0?hn||Ws:null,e_(),Jr>0&&hn&&hn.push(i),i}function It(i,t,e,n,s,r){return Jd(it(i,t,e,n,s,r,!0))}function Xr(i,t,e,n,s){return Jd(Dn(i,t,e,n,s,!0))}function Qd(i){return i?i.__v_isVNode===!0:!1}function vr(i,t){return i.type===t.type&&i.key===t.key}const tp=({key:i})=>i??null,qo=({ref:i,ref_key:t,ref_for:e})=>(typeof i=="number"&&(i=""+i),i!=null?Le(i)||Te(i)||jt(i)?{i:Sn,r:i,k:t,f:!!e}:i:null);function it(i,t=null,e=null,n=0,s=null,r=i===oe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:t,key:t&&tp(t),ref:t&&qo(t),scopeId:Ad,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Sn};return a?(su(l,e),r&128&&i.normalize(l)):e&&(l.shapeFlag|=Le(e)?8:16),Jr>0&&!o&&hn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&hn.push(l),l}const Dn=n_;function n_(i,t=null,e=null,n=0,s=null,r=!1){if((!i||i===Cg)&&(i=$i),Qd(i)){const a=Js(i,t,!0);return e&&su(a,e),Jr>0&&!r&&hn&&(a.shapeFlag&6?hn[hn.indexOf(i)]=a:hn.push(a)),a.patchFlag=-2,a}if(f_(i)&&(i=i.__vccOpts),t){t=i_(t);let{class:a,style:l}=t;a&&!Le(a)&&(t.class=Kn(a)),me(l)&&(ya(l)&&!Vt(l)&&(l=Be({},l)),t.style=cn(l))}const o=Le(i)?1:Zd(i)?128:gg(i)?64:me(i)?4:jt(i)?2:0;return it(i,t,e,n,s,o,r,!0)}function i_(i){return i?ya(i)||Vd(i)?Be({},i):i:null}function Js(i,t,e=!1,n=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=i,c=t?s_(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&tp(c),ref:t&&t.ref?e&&r?Vt(r)?r.concat(qo(t)):[r,qo(t)]:qo(t):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:t&&i.type!==oe?o===-1?16:o|16:o,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Js(i.ssContent),ssFallback:i.ssFallback&&Js(i.ssFallback),placeholder:i.placeholder,el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&n&&eu(u,l.clone(u)),u}function rn(i=" ",t=0){return Dn(ba,null,i,t)}function fn(i="",t=!1){return t?(bt(),Xr($i,null,i)):Dn($i,null,i)}function Vn(i){return i==null||typeof i=="boolean"?Dn($i):Vt(i)?Dn(oe,null,i.slice()):Qd(i)?di(i):Dn(ba,null,String(i))}function di(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Js(i)}function su(i,t){let e=0;const{shapeFlag:n}=i;if(t==null)t=null;else if(Vt(t))e=16;else if(typeof t=="object")if(n&65){const s=t.default;s&&(s._c&&(s._d=!1),su(i,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Vd(t)?t._ctx=Sn:s===3&&Sn&&(Sn.slots._===1?t._=1:(t._=2,i.patchFlag|=1024))}else jt(t)?(t={default:t,_ctx:Sn},e=32):(t=String(t),n&64?(e=16,t=[rn(t)]):e=8);i.children=t,i.shapeFlag|=e}function s_(...i){const t={};for(let e=0;e<i.length;e++){const n=i[e];for(const s in n)if(s==="class")t.class!==n.class&&(t.class=Kn([t.class,n.class]));else if(s==="style")t.style=cn([t.style,n.style]);else if(pa(s)){const r=t[s],o=n[s];o&&r!==o&&!(Vt(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=n[s])}return t}function On(i,t,e,n=null){Zn(i,t,7,[e,n])}const r_=Od();let o_=0;function a_(i,t,e){const n=i.type,s=(t?t.appContext:i.appContext)||r_,r={uid:o_++,vnode:i,type:n,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new id(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wd(n,s),emitsOptions:Bd(n,s),emit:null,emitted:null,propsDefaults:_e,inheritAttrs:n.inheritAttrs,ctx:_e,data:_e,props:_e,attrs:_e,slots:_e,refs:_e,setupState:_e,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Bg.bind(null,r),i.ce&&i.ce(r),r}let Ke=null;const ep=()=>Ke||Sn;let ca,Wl;{const i=_a(),t=(e,n)=>{let s;return(s=i[e])||(s=i[e]=[]),s.push(n),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ca=t("__VUE_INSTANCE_SETTERS__",e=>Ke=e),Wl=t("__VUE_SSR_SETTERS__",e=>Qr=e)}const so=i=>{const t=Ke;return ca(i),i.scope.on(),()=>{i.scope.off(),ca(t)}},Ju=()=>{Ke&&Ke.scope.off(),ca(null)};function np(i){return i.vnode.shapeFlag&4}let Qr=!1;function l_(i,t=!1,e=!1){t&&Wl(t);const{props:n,children:s}=i.vnode,r=np(i);Wg(i,n,r,t),Yg(i,s,e||t);const o=r?c_(i,t):void 0;return t&&Wl(!1),o}function c_(i,t){const e=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,Rg);const{setup:n}=e;if(n){Si();const s=i.setupContext=n.length>1?h_(i):null,r=so(i),o=no(n,i,0,[i.props,s]),a=jf(o);if(Mi(),r(),(a||i.sp)&&!Gr(i)&&Pd(i),a){if(o.then(Ju,Ju),t)return o.then(l=>{Qu(i,l)}).catch(l=>{Sa(l,i,0)});i.asyncDep=o}else Qu(i,o)}else ip(i)}function Qu(i,t,e){jt(t)?i.type.__ssrInlineRender?i.ssrRender=t:i.render=t:me(t)&&(i.setupState=Sd(t)),ip(i)}function ip(i,t,e){const n=i.type;i.render||(i.render=n.render||Xn);{const s=so(i);Si();try{Pg(i)}finally{Mi(),s()}}}const u_={get(i,t){return We(i,"get",""),i[t]}};function h_(i){const t=e=>{i.exposed=e||{}};return{attrs:new Proxy(i.attrs,u_),slots:i.slots,emit:i.emit,expose:t}}function wa(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(Sd(Qc(i.exposed)),{get(t,e){if(e in t)return t[e];if(e in Wr)return Wr[e](i)},has(t,e){return e in t||e in Wr}})):i.proxy}function f_(i){return jt(i)&&"__vccOpts"in i}const Ge=(i,t)=>ig(i,t,Qr),d_="3.5.28";/**
* @vue/runtime-dom v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ql;const th=typeof window<"u"&&window.trustedTypes;if(th)try{ql=th.createPolicy("vue",{createHTML:i=>i})}catch{}const sp=ql?i=>ql.createHTML(i):i=>i,p_="http://www.w3.org/2000/svg",m_="http://www.w3.org/1998/Math/MathML",fi=typeof document<"u"?document:null,eh=fi&&fi.createElement("template"),g_={insert:(i,t,e)=>{t.insertBefore(i,e||null)},remove:i=>{const t=i.parentNode;t&&t.removeChild(i)},createElement:(i,t,e,n)=>{const s=t==="svg"?fi.createElementNS(p_,i):t==="mathml"?fi.createElementNS(m_,i):e?fi.createElement(i,{is:e}):fi.createElement(i);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>fi.createTextNode(i),createComment:i=>fi.createComment(i),setText:(i,t)=>{i.nodeValue=t},setElementText:(i,t)=>{i.textContent=t},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>fi.querySelector(i),setScopeId(i,t){i.setAttribute(t,"")},insertStaticContent(i,t,e,n,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{eh.innerHTML=sp(n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i);const a=eh.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},__=Symbol("_vtc");function v_(i,t,e){const n=i[__];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?i.removeAttribute("class"):e?i.setAttribute("class",t):i.className=t}const nh=Symbol("_vod"),x_=Symbol("_vsh"),y_=Symbol(""),S_=/(?:^|;)\s*display\s*:/;function M_(i,t,e){const n=i.style,s=Le(e);let r=!1;if(e&&!s){if(t)if(Le(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Xo(n,a,"")}else for(const o in t)e[o]==null&&Xo(n,o,"");for(const o in e)o==="display"&&(r=!0),Xo(n,o,e[o])}else if(s){if(t!==e){const o=n[y_];o&&(e+=";"+o),n.cssText=e,r=S_.test(e)}}else t&&i.removeAttribute("style");nh in i&&(i[nh]=r?n.display:"",i[x_]&&(n.display="none"))}const ih=/\s*!important$/;function Xo(i,t,e){if(Vt(e))e.forEach(n=>Xo(i,t,n));else if(e==null&&(e=""),t.startsWith("--"))i.setProperty(t,e);else{const n=E_(i,t);ih.test(e)?i.setProperty(Ki(n),e.replace(ih,""),"important"):i[n]=e}}const sh=["Webkit","Moz","ms"],Wa={};function E_(i,t){const e=Wa[t];if(e)return e;let n=Xi(t);if(n!=="filter"&&n in i)return Wa[t]=n;n=Jf(n);for(let s=0;s<sh.length;s++){const r=sh[s]+n;if(r in i)return Wa[t]=r}return t}const rh="http://www.w3.org/1999/xlink";function oh(i,t,e,n,s,r=Am(t)){n&&t.startsWith("xlink:")?e==null?i.removeAttributeNS(rh,t.slice(6,t.length)):i.setAttributeNS(rh,t,e):e==null||r&&!td(e)?i.removeAttribute(t):i.setAttribute(t,r?"":jn(e)?String(e):e)}function ah(i,t,e,n,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(i[t]=t==="innerHTML"?sp(e):e);return}const r=i.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?i.getAttribute("value")||"":i.value,l=e==null?i.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in i))&&(i.value=l),e==null&&i.removeAttribute(t),i._value=e;return}let o=!1;if(e===""||e==null){const a=typeof i[t];a==="boolean"?e=td(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{i[t]=e}catch{}o&&i.removeAttribute(s||t)}function Hs(i,t,e,n){i.addEventListener(t,e,n)}function b_(i,t,e,n){i.removeEventListener(t,e,n)}const lh=Symbol("_vei");function w_(i,t,e,n,s=null){const r=i[lh]||(i[lh]={}),o=r[t];if(n&&o)o.value=n;else{const[a,l]=T_(t);if(n){const c=r[t]=R_(n,s);Hs(i,a,c,l)}else o&&(b_(i,a,o,l),r[t]=void 0)}}const ch=/(?:Once|Passive|Capture)$/;function T_(i){let t;if(ch.test(i)){t={};let n;for(;n=i.match(ch);)i=i.slice(0,i.length-n[0].length),t[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Ki(i.slice(2)),t]}let qa=0;const A_=Promise.resolve(),C_=()=>qa||(A_.then(()=>qa=0),qa=Date.now());function R_(i,t){const e=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=e.attached)return;Zn(P_(n,e.value),t,5,[n])};return e.value=i,e.attached=C_(),e}function P_(i,t){if(Vt(t)){const e=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{e.call(i),i._stopped=!0},t.map(n=>s=>!s._stopped&&n&&n(s))}else return t}const uh=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,L_=(i,t,e,n,s,r)=>{const o=s==="svg";t==="class"?v_(i,n,o):t==="style"?M_(i,e,n):pa(t)?Gc(t)||w_(i,t,e,n,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):I_(i,t,n,o))?(ah(i,t,n),!i.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&oh(i,t,n,o,r,t!=="value")):i._isVueCE&&(/[A-Z]/.test(t)||!Le(n))?ah(i,Xi(t),n,r,t):(t==="true-value"?i._trueValue=n:t==="false-value"&&(i._falseValue=n),oh(i,t,n,o))};function I_(i,t,e,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in i&&uh(t)&&jt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&i.tagName==="IFRAME"||t==="form"||t==="list"&&i.tagName==="INPUT"||t==="type"&&i.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=i.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return uh(t)&&Le(e)?!1:t in i}const hh=i=>{const t=i.props["onUpdate:modelValue"]||!1;return Vt(t)?e=>Wo(t,e):t};function D_(i){i.target.composing=!0}function fh(i){const t=i.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Xa=Symbol("_assign");function dh(i,t,e){return t&&(i=i.trim()),e&&(i=qc(i)),i}const $a={created(i,{modifiers:{lazy:t,trim:e,number:n}},s){i[Xa]=hh(s);const r=n||s.props&&s.props.type==="number";Hs(i,t?"change":"input",o=>{o.target.composing||i[Xa](dh(i.value,e,r))}),(e||r)&&Hs(i,"change",()=>{i.value=dh(i.value,e,r)}),t||(Hs(i,"compositionstart",D_),Hs(i,"compositionend",fh),Hs(i,"change",fh))},mounted(i,{value:t}){i.value=t??""},beforeUpdate(i,{value:t,oldValue:e,modifiers:{lazy:n,trim:s,number:r}},o){if(i[Xa]=hh(o),i.composing)return;const a=(r||i.type==="number")&&!/^0\d/.test(i.value)?qc(i.value):i.value,l=t??"";a!==l&&(document.activeElement===i&&i.type!=="range"&&(n&&t===e||s&&i.value.trim()===l)||(i.value=l))}},N_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ph=(i,t)=>{const e=i._withKeys||(i._withKeys={}),n=t.join(".");return e[n]||(e[n]=(s=>{if(!("key"in s))return;const r=Ki(s.key);if(t.some(o=>o===r||N_[o]===r))return i(s)}))},U_=Be({patchProp:L_},g_);let mh;function F_(){return mh||(mh=Kg(U_))}const O_=((...i)=>{const t=F_().createApp(...i),{mount:e}=t;return t.mount=n=>{const s=z_(n);if(!s)return;const r=t._component;!jt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,B_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function B_(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function z_(i){return Le(i)?document.querySelector(i):i}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let rp;const Ta=i=>rp=i,op=Symbol();function Xl(i){return i&&typeof i=="object"&&Object.prototype.toString.call(i)==="[object Object]"&&typeof i.toJSON!="function"}var $r;(function(i){i.direct="direct",i.patchObject="patch object",i.patchFunction="patch function"})($r||($r={}));function k_(){const i=sd(!0),t=i.run(()=>Ee({}));let e=[],n=[];const s=Qc({install(r){Ta(s),s._a=r,r.provide(op,s),r.config.globalProperties.$pinia=s,n.forEach(o=>e.push(o)),n=[]},use(r){return this._a?e.push(r):n.push(r),this},_p:e,_a:null,_e:i,_s:new Map,state:t});return s}const ap=()=>{};function gh(i,t,e,n=ap){i.push(t);const s=()=>{const r=i.indexOf(t);r>-1&&(i.splice(r,1),n())};return!e&&rd()&&Rm(s),s}function Es(i,...t){i.slice().forEach(e=>{e(...t)})}const H_=i=>i(),_h=Symbol(),Ya=Symbol();function $l(i,t){i instanceof Map&&t instanceof Map?t.forEach((e,n)=>i.set(n,e)):i instanceof Set&&t instanceof Set&&t.forEach(i.add,i);for(const e in t){if(!t.hasOwnProperty(e))continue;const n=t[e],s=i[e];Xl(s)&&Xl(n)&&i.hasOwnProperty(e)&&!Te(n)&&!vi(n)?i[e]=$l(s,n):i[e]=n}return i}const V_=Symbol();function G_(i){return!Xl(i)||!i.hasOwnProperty(V_)}const{assign:Fi}=Object;function W_(i){return!!(Te(i)&&i.effect)}function q_(i,t,e,n){const{state:s,actions:r,getters:o}=t,a=e.state.value[i];let l;function c(){a||(e.state.value[i]=s?s():{});const u=Qm(e.state.value[i]);return Fi(u,r,Object.keys(o||{}).reduce((f,h)=>(f[h]=Qc(Ge(()=>{Ta(e);const d=e._s.get(i);return o[h].call(d,d)})),f),{}))}return l=lp(i,c,t,e,n,!0),l}function lp(i,t,e={},n,s,r){let o;const a=Fi({actions:{}},e),l={deep:!0};let c,u,f=[],h=[],d;const g=n.state.value[i];!r&&!g&&(n.state.value[i]={});let _;function m(I){let b;c=u=!1,typeof I=="function"?(I(n.state.value[i]),b={type:$r.patchFunction,storeId:i,events:d}):($l(n.state.value[i],I),b={type:$r.patchObject,payload:I,storeId:i,events:d});const S=_=Symbol();Ed().then(()=>{_===S&&(c=!0)}),u=!0,Es(f,b,n.state.value[i])}const p=r?function(){const{state:b}=e,S=b?b():{};this.$patch(N=>{Fi(N,S)})}:ap;function x(){o.stop(),f=[],h=[],n._s.delete(i)}const w=(I,b="")=>{if(_h in I)return I[Ya]=b,I;const S=function(){Ta(n);const N=Array.from(arguments),W=[],F=[];function V(j){W.push(j)}function G(j){F.push(j)}Es(h,{args:N,name:S[Ya],store:L,after:V,onError:G});let O;try{O=I.apply(this&&this.$id===i?this:L,N)}catch(j){throw Es(F,j),j}return O instanceof Promise?O.then(j=>(Es(W,j),j)).catch(j=>(Es(F,j),Promise.reject(j))):(Es(W,O),O)};return S[_h]=!0,S[Ya]=b,S},y={_p:n,$id:i,$onAction:gh.bind(null,h),$patch:m,$reset:p,$subscribe(I,b={}){const S=gh(f,I,b.detached,()=>N()),N=o.run(()=>$s(()=>n.state.value[i],W=>{(b.flush==="sync"?u:c)&&I({storeId:i,type:$r.direct,events:d},W)},Fi({},l,b)));return S},$dispose:x},L=xa(y);n._s.set(i,L);const R=(n._a&&n._a.runWithContext||H_)(()=>n._e.run(()=>(o=sd()).run(()=>t({action:w}))));for(const I in R){const b=R[I];if(Te(b)&&!W_(b)||vi(b))r||(g&&G_(b)&&(Te(b)?b.value=g[I]:$l(b,g[I])),n.state.value[i][I]=b);else if(typeof b=="function"){const S=w(b,I);R[I]=S,a.actions[I]=b}}return Fi(L,R),Fi(re(L),R),Object.defineProperty(L,"$state",{get:()=>n.state.value[i],set:I=>{m(b=>{Fi(b,I)})}}),n._p.forEach(I=>{Fi(L,o.run(()=>I({store:L,app:n._a,pinia:n,options:a})))}),g&&r&&e.hydrate&&e.hydrate(L.$state,g),c=!0,u=!0,L}/*! #__NO_SIDE_EFFECTS__ */function X_(i,t,e){let n,s;const r=typeof t=="function";n=i,s=r?e:t;function o(a,l){const c=hg();return a=a||(c?Hr(op,null):null),a&&Ta(a),a=rp,a._s.has(n)||(r?lp(n,t,s,a):q_(n,s,a)),a._s.get(n)}return o.$id=n,o}const ys=X_("game",()=>{const i=Ee(""),t=Ee(!1),e=Ee(""),n=Ee("waiting"),s=Ee([]),r=Ee(0),o=Ee(1),a=Ee({rollCount:0,dice:[0,0,0,0,0],kept:[!1,!1,!1,!1,!1]}),l=Ee({ones:null,twos:null,threes:null,fours:null,fives:null,sixes:null,choice:null,fourOfAKind:null,fullHouse:null,smallStraight:null,largeStraight:null,yacht:null}),c=Ee(0),u=Ee(0),f=Ee({}),h=Ee([]),d=Ee(null),g=Ee(!1),_=Ee(""),m=Km(null),p=Ge(()=>s.value.find(ct=>ct.id===i.value)),x=Ge(()=>{const ct=s.value[r.value];return(ct==null?void 0:ct.id)===i.value}),w=Ge(()=>s.value[r.value]),y=Ge(()=>x.value&&a.value.rollCount<3&&!g.value&&n.value==="playing"),L=Ge(()=>x.value&&a.value.rollCount>0&&!g.value&&n.value==="playing"),P=Ge(()=>{var ct;return((ct=p.value)==null?void 0:ct.isHost)??!1}),R=Ge(()=>_.value===i.value);function I(ct){n.value=ct.phase,s.value=ct.players,r.value=ct.currentPlayerIndex,o.value=ct.currentRound,ct.turnState&&(a.value=ct.turnState)}function b(ct){l.value=ct.scores,c.value=ct.bonus,u.value=ct.total}function S(ct){f.value=ct}function N(ct,ht,$t){_.value=ct,a.value.rollCount=ht,a.value.kept=$t,a.value.dice=[0,0,0,0,0],m.value=null,g.value=!0}function W(ct){a.value.dice=ct.dice,a.value.rollCount=ct.rollCount,a.value.kept=ct.kept,g.value=!1,m.value=null}function F(ct){m.value=ct}function V(){g.value=!1}function G(ct){a.value.kept=ct}function O(ct){h.value=ct,n.value="finished"}function j(ct){d.value=ct}function H(){d.value=null}function lt(ct){!x.value||a.value.rollCount===0||a.value.rollCount>=3||(a.value.kept[ct]=!a.value.kept[ct])}function _t(){e.value="",n.value="waiting",s.value=[],r.value=0,o.value=1,a.value={rollCount:0,dice:[0,0,0,0,0],kept:[!1,!1,!1,!1,!1]},_.value="",m.value=null,l.value={ones:null,twos:null,threes:null,fours:null,fives:null,sixes:null,choice:null,fourOfAKind:null,fullHouse:null,smallStraight:null,largeStraight:null,yacht:null},c.value=0,u.value=0,f.value={},h.value=[]}return{mySocketId:i,connected:t,roomCode:e,phase:n,players:s,currentPlayerIndex:r,currentRound:o,turnState:a,myScores:l,myBonus:c,myTotal:u,possibleScores:f,rankings:h,isRolling:g,rollingPlayerId:_,physicsStreamData:m,viewingPlayerScore:d,myPlayer:p,isMyTurn:x,currentPlayer:w,canRoll:y,canSelectScore:L,isHost:P,isMyRolling:R,updateRoomState:I,updateScoreCard:b,updatePossibleScores:S,startRolling:N,updateDiceRolled:W,updatePhysicsStream:F,onPhysicsComplete:V,updateKept:G,setRankings:O,toggleKeep:lt,reset:_t,setViewingPlayerScore:j,clearViewingPlayerScore:H}}),Jn=Object.create(null);Jn.open="0";Jn.close="1";Jn.ping="2";Jn.pong="3";Jn.message="4";Jn.upgrade="5";Jn.noop="6";const $o=Object.create(null);Object.keys(Jn).forEach(i=>{$o[Jn[i]]=i});const Yl={type:"error",data:"parser error"},cp=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",up=typeof ArrayBuffer=="function",hp=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i&&i.buffer instanceof ArrayBuffer,ru=({type:i,data:t},e,n)=>cp&&t instanceof Blob?e?n(t):vh(t,n):up&&(t instanceof ArrayBuffer||hp(t))?e?n(t):vh(new Blob([t]),n):n(Jn[i]+(t||"")),vh=(i,t)=>{const e=new FileReader;return e.onload=function(){const n=e.result.split(",")[1];t("b"+(n||""))},e.readAsDataURL(i)};function xh(i){return i instanceof Uint8Array?i:i instanceof ArrayBuffer?new Uint8Array(i):new Uint8Array(i.buffer,i.byteOffset,i.byteLength)}let ja;function $_(i,t){if(cp&&i.data instanceof Blob)return i.data.arrayBuffer().then(xh).then(t);if(up&&(i.data instanceof ArrayBuffer||hp(i.data)))return t(xh(i.data));ru(i,!1,e=>{ja||(ja=new TextEncoder),t(ja.encode(e))})}const yh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Nr=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let i=0;i<yh.length;i++)Nr[yh.charCodeAt(i)]=i;const Y_=i=>{let t=i.length*.75,e=i.length,n,s=0,r,o,a,l;i[i.length-1]==="="&&(t--,i[i.length-2]==="="&&t--);const c=new ArrayBuffer(t),u=new Uint8Array(c);for(n=0;n<e;n+=4)r=Nr[i.charCodeAt(n)],o=Nr[i.charCodeAt(n+1)],a=Nr[i.charCodeAt(n+2)],l=Nr[i.charCodeAt(n+3)],u[s++]=r<<2|o>>4,u[s++]=(o&15)<<4|a>>2,u[s++]=(a&3)<<6|l&63;return c},j_=typeof ArrayBuffer=="function",ou=(i,t)=>{if(typeof i!="string")return{type:"message",data:fp(i,t)};const e=i.charAt(0);return e==="b"?{type:"message",data:K_(i.substring(1),t)}:$o[e]?i.length>1?{type:$o[e],data:i.substring(1)}:{type:$o[e]}:Yl},K_=(i,t)=>{if(j_){const e=Y_(i);return fp(e,t)}else return{base64:!0,data:i}},fp=(i,t)=>{switch(t){case"blob":return i instanceof Blob?i:new Blob([i]);case"arraybuffer":default:return i instanceof ArrayBuffer?i:i.buffer}},dp="",Z_=(i,t)=>{const e=i.length,n=new Array(e);let s=0;i.forEach((r,o)=>{ru(r,!1,a=>{n[o]=a,++s===e&&t(n.join(dp))})})},J_=(i,t)=>{const e=i.split(dp),n=[];for(let s=0;s<e.length;s++){const r=ou(e[s],t);if(n.push(r),r.type==="error")break}return n};function Q_(){return new TransformStream({transform(i,t){$_(i,e=>{const n=e.length;let s;if(n<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,n);else if(n<65536){s=new Uint8Array(3);const r=new DataView(s.buffer);r.setUint8(0,126),r.setUint16(1,n)}else{s=new Uint8Array(9);const r=new DataView(s.buffer);r.setUint8(0,127),r.setBigUint64(1,BigInt(n))}i.data&&typeof i.data!="string"&&(s[0]|=128),t.enqueue(s),t.enqueue(e)})}})}let Ka;function go(i){return i.reduce((t,e)=>t+e.length,0)}function _o(i,t){if(i[0].length===t)return i.shift();const e=new Uint8Array(t);let n=0;for(let s=0;s<t;s++)e[s]=i[0][n++],n===i[0].length&&(i.shift(),n=0);return i.length&&n<i[0].length&&(i[0]=i[0].slice(n)),e}function tv(i,t){Ka||(Ka=new TextDecoder);const e=[];let n=0,s=-1,r=!1;return new TransformStream({transform(o,a){for(e.push(o);;){if(n===0){if(go(e)<1)break;const l=_o(e,1);r=(l[0]&128)===128,s=l[0]&127,s<126?n=3:s===126?n=1:n=2}else if(n===1){if(go(e)<2)break;const l=_o(e,2);s=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),n=3}else if(n===2){if(go(e)<8)break;const l=_o(e,8),c=new DataView(l.buffer,l.byteOffset,l.length),u=c.getUint32(0);if(u>Math.pow(2,21)-1){a.enqueue(Yl);break}s=u*Math.pow(2,32)+c.getUint32(4),n=3}else{if(go(e)<s)break;const l=_o(e,s);a.enqueue(ou(r?l:Ka.decode(l),t)),n=0}if(s===0||s>i){a.enqueue(Yl);break}}}})}const pp=4;function Pe(i){if(i)return ev(i)}function ev(i){for(var t in Pe.prototype)i[t]=Pe.prototype[t];return i}Pe.prototype.on=Pe.prototype.addEventListener=function(i,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+i]=this._callbacks["$"+i]||[]).push(t),this};Pe.prototype.once=function(i,t){function e(){this.off(i,e),t.apply(this,arguments)}return e.fn=t,this.on(i,e),this};Pe.prototype.off=Pe.prototype.removeListener=Pe.prototype.removeAllListeners=Pe.prototype.removeEventListener=function(i,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var e=this._callbacks["$"+i];if(!e)return this;if(arguments.length==1)return delete this._callbacks["$"+i],this;for(var n,s=0;s<e.length;s++)if(n=e[s],n===t||n.fn===t){e.splice(s,1);break}return e.length===0&&delete this._callbacks["$"+i],this};Pe.prototype.emit=function(i){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),e=this._callbacks["$"+i],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(e){e=e.slice(0);for(var n=0,s=e.length;n<s;++n)e[n].apply(this,t)}return this};Pe.prototype.emitReserved=Pe.prototype.emit;Pe.prototype.listeners=function(i){return this._callbacks=this._callbacks||{},this._callbacks["$"+i]||[]};Pe.prototype.hasListeners=function(i){return!!this.listeners(i).length};const Aa=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,e)=>e(t,0),yn=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),nv="arraybuffer";function mp(i,...t){return t.reduce((e,n)=>(i.hasOwnProperty(n)&&(e[n]=i[n]),e),{})}const iv=yn.setTimeout,sv=yn.clearTimeout;function Ca(i,t){t.useNativeTimers?(i.setTimeoutFn=iv.bind(yn),i.clearTimeoutFn=sv.bind(yn)):(i.setTimeoutFn=yn.setTimeout.bind(yn),i.clearTimeoutFn=yn.clearTimeout.bind(yn))}const rv=1.33;function ov(i){return typeof i=="string"?av(i):Math.ceil((i.byteLength||i.size)*rv)}function av(i){let t=0,e=0;for(let n=0,s=i.length;n<s;n++)t=i.charCodeAt(n),t<128?e+=1:t<2048?e+=2:t<55296||t>=57344?e+=3:(n++,e+=4);return e}function gp(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function lv(i){let t="";for(let e in i)i.hasOwnProperty(e)&&(t.length&&(t+="&"),t+=encodeURIComponent(e)+"="+encodeURIComponent(i[e]));return t}function cv(i){let t={},e=i.split("&");for(let n=0,s=e.length;n<s;n++){let r=e[n].split("=");t[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return t}class uv extends Error{constructor(t,e,n){super(t),this.description=e,this.context=n,this.type="TransportError"}}class au extends Pe{constructor(t){super(),this.writable=!1,Ca(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,e,n){return super.emitReserved("error",new uv(t,e,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const e=ou(t,this.socket.binaryType);this.onPacket(e)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,e={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(e)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const e=lv(t);return e.length?"?"+e:""}}class hv extends au{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const e=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||e()})),this.writable||(n++,this.once("drain",function(){--n||e()}))}else e()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const e=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};J_(t,this.socket.binaryType).forEach(e),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,Z_(t,e=>{this.doWrite(e,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",e=this.query||{};return this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=gp()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.createUri(t,e)}}let _p=!1;try{_p=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const fv=_p;function dv(){}class pv extends hv{constructor(t){if(super(t),typeof location<"u"){const e=location.protocol==="https:";let n=location.port;n||(n=e?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||n!==t.port}}doWrite(t,e){const n=this.request({method:"POST",data:t});n.on("success",e),n.on("error",(s,r)=>{this.onError("xhr post error",s,r)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(e,n)=>{this.onError("xhr poll error",e,n)}),this.pollXhr=t}}class $n extends Pe{constructor(t,e,n){super(),this.createRequest=t,Ca(this,n),this._opts=n,this._method=n.method||"GET",this._uri=e,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var t;const e=mp(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(e);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let s in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(s)&&n.setRequestHeader(s,this._opts.extraHeaders[s])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var s;n.readyState===3&&((s=this._opts.cookieJar)===null||s===void 0||s.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(s){this.setTimeoutFn(()=>{this._onError(s)},0);return}typeof document<"u"&&(this._index=$n.requestsCount++,$n.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=dv,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete $n.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}$n.requestsCount=0;$n.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Sh);else if(typeof addEventListener=="function"){const i="onpagehide"in yn?"pagehide":"unload";addEventListener(i,Sh,!1)}}function Sh(){for(let i in $n.requests)$n.requests.hasOwnProperty(i)&&$n.requests[i].abort()}const mv=(function(){const i=vp({xdomain:!1});return i&&i.responseType!==null})();class gv extends pv{constructor(t){super(t);const e=t&&t.forceBase64;this.supportsBinary=mv&&!e}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new $n(vp,this.uri(),t)}}function vp(i){const t=i.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||fv))return new XMLHttpRequest}catch{}if(!t)try{return new yn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const xp=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class _v extends au{get name(){return"websocket"}doOpen(){const t=this.uri(),e=this.opts.protocols,n=xp?{}:mp(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,e,n)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const n=t[e],s=e===t.length-1;ru(n,this.supportsBinary,r=>{try{this.doWrite(n,r)}catch{}s&&Aa(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",e=this.query||{};return this.opts.timestampRequests&&(e[this.opts.timestampParam]=gp()),this.supportsBinary||(e.b64=1),this.createUri(t,e)}}const Za=yn.WebSocket||yn.MozWebSocket;class vv extends _v{createSocket(t,e,n){return xp?new Za(t,e,n):e?new Za(t,e):new Za(t)}doWrite(t,e){this.ws.send(e)}}class xv extends au{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const e=tv(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=t.readable.pipeThrough(e).getReader(),s=Q_();s.readable.pipeTo(t.writable),this._writer=s.writable.getWriter();const r=()=>{n.read().then(({done:a,value:l})=>{a||(this.onPacket(l),r())}).catch(a=>{})};r();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const n=t[e],s=e===t.length-1;this._writer.write(n).then(()=>{s&&Aa(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const yv={websocket:vv,webtransport:xv,polling:gv},Sv=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Mv=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function jl(i){if(i.length>8e3)throw"URI too long";const t=i,e=i.indexOf("["),n=i.indexOf("]");e!=-1&&n!=-1&&(i=i.substring(0,e)+i.substring(e,n).replace(/:/g,";")+i.substring(n,i.length));let s=Sv.exec(i||""),r={},o=14;for(;o--;)r[Mv[o]]=s[o]||"";return e!=-1&&n!=-1&&(r.source=t,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=Ev(r,r.path),r.queryKey=bv(r,r.query),r}function Ev(i,t){const e=/\/{2,9}/g,n=t.replace(e,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&n.splice(0,1),t.slice(-1)=="/"&&n.splice(n.length-1,1),n}function bv(i,t){const e={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,s,r){s&&(e[s]=r)}),e}const Kl=typeof addEventListener=="function"&&typeof removeEventListener=="function",Yo=[];Kl&&addEventListener("offline",()=>{Yo.forEach(i=>i())},!1);class Vi extends Pe{constructor(t,e){if(super(),this.binaryType=nv,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(e=t,t=null),t){const n=jl(t);e.hostname=n.host,e.secure=n.protocol==="https"||n.protocol==="wss",e.port=n.port,n.query&&(e.query=n.query)}else e.host&&(e.hostname=jl(e.host).host);Ca(this,e),this.secure=e.secure!=null?e.secure:typeof location<"u"&&location.protocol==="https:",e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.hostname=e.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=e.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},e.transports.forEach(n=>{const s=n.prototype.name;this.transports.push(s),this._transportsByName[s]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},e),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=cv(this.opts.query)),Kl&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Yo.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const e=Object.assign({},this.opts.query);e.EIO=pp,e.transport=t,this.id&&(e.sid=this.id);const n=Object.assign({},this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&Vi.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const e=this.createTransport(t);e.open(),this.setTransport(e)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",e=>this._onClose("transport close",e))}onOpen(){this.readyState="open",Vi.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const e=new Error("server error");e.code=t.data,this._onError(e);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let e=1;for(let n=0;n<this.writeBuffer.length;n++){const s=this.writeBuffer[n].data;if(s&&(e+=ov(s)),n>0&&e>this._maxPayload)return this.writeBuffer.slice(0,n);e+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,Aa(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,e,n){return this._sendPacket("message",t,e,n),this}send(t,e,n){return this._sendPacket("message",t,e,n),this}_sendPacket(t,e,n,s){if(typeof e=="function"&&(s=e,e=void 0),typeof n=="function"&&(s=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const r={type:t,data:e,options:n};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),s&&this.once("flush",s),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},e=()=>{this.off("upgrade",e),this.off("upgradeError",e),t()},n=()=>{this.once("upgrade",e),this.once("upgradeError",e)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():t()}):this.upgrading?n():t()),this}_onError(t){if(Vi.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Kl&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=Yo.indexOf(this._offlineEventListener);n!==-1&&Yo.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,e),this.writeBuffer=[],this._prevBufferLen=0}}}Vi.protocol=pp;class wv extends Vi{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let e=this.createTransport(t),n=!1;Vi.priorWebsocketSuccess=!1;const s=()=>{n||(e.send([{type:"ping",data:"probe"}]),e.once("packet",f=>{if(!n)if(f.type==="pong"&&f.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",e),!e)return;Vi.priorWebsocketSuccess=e.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(u(),this.setTransport(e),e.send([{type:"upgrade"}]),this.emitReserved("upgrade",e),e=null,this.upgrading=!1,this.flush())})}else{const h=new Error("probe error");h.transport=e.name,this.emitReserved("upgradeError",h)}}))};function r(){n||(n=!0,u(),e.close(),e=null)}const o=f=>{const h=new Error("probe error: "+f);h.transport=e.name,r(),this.emitReserved("upgradeError",h)};function a(){o("transport closed")}function l(){o("socket closed")}function c(f){e&&f.name!==e.name&&r()}const u=()=>{e.removeListener("open",s),e.removeListener("error",o),e.removeListener("close",a),this.off("close",l),this.off("upgrading",c)};e.once("open",s),e.once("error",o),e.once("close",a),this.once("close",l),this.once("upgrading",c),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{n||e.open()},200):e.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const e=[];for(let n=0;n<t.length;n++)~this.transports.indexOf(t[n])&&e.push(t[n]);return e}}let Tv=class extends wv{constructor(t,e={}){const n=typeof t=="object"?t:e;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(s=>yv[s]).filter(s=>!!s)),super(t,n)}};function Av(i,t="",e){let n=i;e=e||typeof location<"u"&&location,i==null&&(i=e.protocol+"//"+e.host),typeof i=="string"&&(i.charAt(0)==="/"&&(i.charAt(1)==="/"?i=e.protocol+i:i=e.host+i),/^(https?|wss?):\/\//.test(i)||(typeof e<"u"?i=e.protocol+"//"+i:i="https://"+i),n=jl(i)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const r=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+r+":"+n.port+t,n.href=n.protocol+"://"+r+(e&&e.port===n.port?"":":"+n.port),n}const Cv=typeof ArrayBuffer=="function",Rv=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i.buffer instanceof ArrayBuffer,yp=Object.prototype.toString,Pv=typeof Blob=="function"||typeof Blob<"u"&&yp.call(Blob)==="[object BlobConstructor]",Lv=typeof File=="function"||typeof File<"u"&&yp.call(File)==="[object FileConstructor]";function lu(i){return Cv&&(i instanceof ArrayBuffer||Rv(i))||Pv&&i instanceof Blob||Lv&&i instanceof File}function jo(i,t){if(!i||typeof i!="object")return!1;if(Array.isArray(i)){for(let e=0,n=i.length;e<n;e++)if(jo(i[e]))return!0;return!1}if(lu(i))return!0;if(i.toJSON&&typeof i.toJSON=="function"&&arguments.length===1)return jo(i.toJSON(),!0);for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e)&&jo(i[e]))return!0;return!1}function Iv(i){const t=[],e=i.data,n=i;return n.data=Zl(e,t),n.attachments=t.length,{packet:n,buffers:t}}function Zl(i,t){if(!i)return i;if(lu(i)){const e={_placeholder:!0,num:t.length};return t.push(i),e}else if(Array.isArray(i)){const e=new Array(i.length);for(let n=0;n<i.length;n++)e[n]=Zl(i[n],t);return e}else if(typeof i=="object"&&!(i instanceof Date)){const e={};for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=Zl(i[n],t));return e}return i}function Dv(i,t){return i.data=Jl(i.data,t),delete i.attachments,i}function Jl(i,t){if(!i)return i;if(i&&i._placeholder===!0){if(typeof i.num=="number"&&i.num>=0&&i.num<t.length)return t[i.num];throw new Error("illegal attachments")}else if(Array.isArray(i))for(let e=0;e<i.length;e++)i[e]=Jl(i[e],t);else if(typeof i=="object")for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&(i[e]=Jl(i[e],t));return i}const Nv=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var te;(function(i){i[i.CONNECT=0]="CONNECT",i[i.DISCONNECT=1]="DISCONNECT",i[i.EVENT=2]="EVENT",i[i.ACK=3]="ACK",i[i.CONNECT_ERROR=4]="CONNECT_ERROR",i[i.BINARY_EVENT=5]="BINARY_EVENT",i[i.BINARY_ACK=6]="BINARY_ACK"})(te||(te={}));class Uv{constructor(t){this.replacer=t}encode(t){return(t.type===te.EVENT||t.type===te.ACK)&&jo(t)?this.encodeAsBinary({type:t.type===te.EVENT?te.BINARY_EVENT:te.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let e=""+t.type;return(t.type===te.BINARY_EVENT||t.type===te.BINARY_ACK)&&(e+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(e+=t.nsp+","),t.id!=null&&(e+=t.id),t.data!=null&&(e+=JSON.stringify(t.data,this.replacer)),e}encodeAsBinary(t){const e=Iv(t),n=this.encodeAsString(e.packet),s=e.buffers;return s.unshift(n),s}}class cu extends Pe{constructor(t){super(),this.reviver=t}add(t){let e;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");e=this.decodeString(t);const n=e.type===te.BINARY_EVENT;n||e.type===te.BINARY_ACK?(e.type=n?te.EVENT:te.ACK,this.reconstructor=new Fv(e),e.attachments===0&&super.emitReserved("decoded",e)):super.emitReserved("decoded",e)}else if(lu(t)||t.base64)if(this.reconstructor)e=this.reconstructor.takeBinaryData(t),e&&(this.reconstructor=null,super.emitReserved("decoded",e));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let e=0;const n={type:Number(t.charAt(0))};if(te[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===te.BINARY_EVENT||n.type===te.BINARY_ACK){const r=e+1;for(;t.charAt(++e)!=="-"&&e!=t.length;);const o=t.substring(r,e);if(o!=Number(o)||t.charAt(e)!=="-")throw new Error("Illegal attachments");n.attachments=Number(o)}if(t.charAt(e+1)==="/"){const r=e+1;for(;++e&&!(t.charAt(e)===","||e===t.length););n.nsp=t.substring(r,e)}else n.nsp="/";const s=t.charAt(e+1);if(s!==""&&Number(s)==s){const r=e+1;for(;++e;){const o=t.charAt(e);if(o==null||Number(o)!=o){--e;break}if(e===t.length)break}n.id=Number(t.substring(r,e+1))}if(t.charAt(++e)){const r=this.tryParse(t.substr(e));if(cu.isPayloadValid(n.type,r))n.data=r;else throw new Error("invalid payload")}return n}tryParse(t){try{return JSON.parse(t,this.reviver)}catch{return!1}}static isPayloadValid(t,e){switch(t){case te.CONNECT:return Mh(e);case te.DISCONNECT:return e===void 0;case te.CONNECT_ERROR:return typeof e=="string"||Mh(e);case te.EVENT:case te.BINARY_EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&Nv.indexOf(e[0])===-1);case te.ACK:case te.BINARY_ACK:return Array.isArray(e)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Fv{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const e=Dv(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function Mh(i){return Object.prototype.toString.call(i)==="[object Object]"}const Ov=Object.freeze(Object.defineProperty({__proto__:null,Decoder:cu,Encoder:Uv,get PacketType(){return te}},Symbol.toStringTag,{value:"Module"}));function Cn(i,t,e){return i.on(t,e),function(){i.off(t,e)}}const Bv=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Sp extends Pe{constructor(t,e,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=e,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[Cn(t,"open",this.onopen.bind(this)),Cn(t,"packet",this.onpacket.bind(this)),Cn(t,"error",this.onerror.bind(this)),Cn(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...e){var n,s,r;if(Bv.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(e.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(e),this;const o={type:te.EVENT,data:e};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof e[e.length-1]=="function"){const u=this.ids++,f=e.pop();this._registerAckCallback(u,f),o.id=u}const a=(s=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||s===void 0?void 0:s.writable,l=this.connected&&!(!((r=this.io.engine)===null||r===void 0)&&r._hasPingExpired());return this.flags.volatile&&!a||(l?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(t,e){var n;const s=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(s===void 0){this.acks[t]=e;return}const r=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===t&&this.sendBuffer.splice(a,1);e.call(this,new Error("operation has timed out"))},s),o=(...a)=>{this.io.clearTimeoutFn(r),e.apply(this,a)};o.withError=!0,this.acks[t]=o}emitWithAck(t,...e){return new Promise((n,s)=>{const r=(o,a)=>o?s(o):n(a);r.withError=!0,e.push(r),this.emit(t,...e)})}_addToQueue(t){let e;typeof t[t.length-1]=="function"&&(e=t.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((s,...r)=>(this._queue[0],s!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),e&&e(s)):(this._queue.shift(),e&&e(null,...r)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const e=this._queue[0];e.pending&&!t||(e.pending=!0,e.tryCount++,this.flags=e.flags,this.emit.apply(this,e.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:te.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,e){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,e),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(n=>String(n.id)===t)){const n=this.acks[t];delete this.acks[t],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case te.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case te.EVENT:case te.BINARY_EVENT:this.onevent(t);break;case te.ACK:case te.BINARY_ACK:this.onack(t);break;case te.DISCONNECT:this.ondisconnect();break;case te.CONNECT_ERROR:this.destroy();const n=new Error(t.data.message);n.data=t.data.data,this.emitReserved("connect_error",n);break}}onevent(t){const e=t.data||[];t.id!=null&&e.push(this.ack(t.id)),this.connected?this.emitEvent(e):this.receiveBuffer.push(Object.freeze(e))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const e=this._anyListeners.slice();for(const n of e)n.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const e=this;let n=!1;return function(...s){n||(n=!0,e.packet({type:te.ACK,id:t,data:s}))}}onack(t){const e=this.acks[t.id];typeof e=="function"&&(delete this.acks[t.id],e.withError&&t.data.unshift(null),e.apply(this,t.data))}onconnect(t,e){this.id=t,this.recovered=e&&this._pid===e,this._pid=e,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:te.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const e=this._anyListeners;for(let n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const e=this._anyOutgoingListeners;for(let n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const e=this._anyOutgoingListeners.slice();for(const n of e)n.apply(this,t.data)}}}function cr(i){i=i||{},this.ms=i.min||100,this.max=i.max||1e4,this.factor=i.factor||2,this.jitter=i.jitter>0&&i.jitter<=1?i.jitter:0,this.attempts=0}cr.prototype.duration=function(){var i=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),e=Math.floor(t*this.jitter*i);i=(Math.floor(t*10)&1)==0?i-e:i+e}return Math.min(i,this.max)|0};cr.prototype.reset=function(){this.attempts=0};cr.prototype.setMin=function(i){this.ms=i};cr.prototype.setMax=function(i){this.max=i};cr.prototype.setJitter=function(i){this.jitter=i};class Ql extends Pe{constructor(t,e){var n;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.opts=e,Ca(this,e),this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor((n=e.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new cr({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(e.timeout==null?2e4:e.timeout),this._readyState="closed",this.uri=t;const s=e.parser||Ov;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=e.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var e;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(e=this.backoff)===null||e===void 0||e.setMin(t),this)}randomizationFactor(t){var e;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(e=this.backoff)===null||e===void 0||e.setJitter(t),this)}reconnectionDelayMax(t){var e;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(e=this.backoff)===null||e===void 0||e.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new Tv(this.uri,this.opts);const e=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const s=Cn(e,"open",function(){n.onopen(),t&&t()}),r=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),t?t(a):this.maybeReconnectOnOpen()},o=Cn(e,"error",r);if(this._timeout!==!1){const a=this._timeout,l=this.setTimeoutFn(()=>{s(),r(new Error("timeout")),e.close()},a);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(s),this.subs.push(o),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(Cn(t,"ping",this.onping.bind(this)),Cn(t,"data",this.ondata.bind(this)),Cn(t,"error",this.onerror.bind(this)),Cn(t,"close",this.onclose.bind(this)),Cn(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(e){this.onclose("parse error",e)}}ondecoded(t){Aa(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,e){let n=this.nsps[t];return n?this._autoConnect&&!n.active&&n.connect():(n=new Sp(this,t,e),this.nsps[t]=n),n}_destroy(t){const e=Object.keys(this.nsps);for(const n of e)if(this.nsps[n].active)return;this._close()}_packet(t){const e=this.encoder.encode(t);for(let n=0;n<e.length;n++)this.engine.write(e[n],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,e){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,e),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const e=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(s=>{s?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",s)):t.onreconnect()}))},e);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const xr={};function Ko(i,t){typeof i=="object"&&(t=i,i=void 0),t=t||{};const e=Av(i,t.path||"/socket.io"),n=e.source,s=e.id,r=e.path,o=xr[s]&&r in xr[s].nsps,a=t.forceNew||t["force new connection"]||t.multiplex===!1||o;let l;return a?l=new Ql(n,t):(xr[s]||(xr[s]=new Ql(n,t)),l=xr[s]),e.query&&!t.query&&(t.query=e.queryKey),l.socket(e.path,t)}Object.assign(Ko,{Manager:Ql,Socket:Sp,io:Ko,connect:Ko});let Lt=null;const uu="yacht:session";function Eh(i,t){sessionStorage.setItem(uu,JSON.stringify({code:i,playerId:t}))}function Mp(){try{const i=sessionStorage.getItem(uu);return i?JSON.parse(i):null}catch{return null}}function zv(){sessionStorage.removeItem(uu)}function ur(){const i=ys();function t(){Lt||(Lt=Ko(window.location.origin,{transports:["websocket","polling"]}),Lt.on("connect",()=>{i.mySocketId=Lt.id,i.connected=!0,console.log("[Socket] 연결됨:",Lt.id);const d=Mp();d&&d.playerId!==Lt.id&&Lt.emit("room:rejoin",{code:d.code,playerId:d.playerId})}),Lt.on("disconnect",()=>{i.connected=!1,console.log("[Socket] 연결 끊김")}),Lt.on("room:created",({code:d,state:g})=>{i.roomCode=d,i.updateRoomState(g),Eh(d,Lt.id)}),Lt.on("room:rejoined",({code:d,state:g})=>{i.roomCode=d,i.updateRoomState(g),Eh(d,Lt.id),console.log("[Socket] 재접속 완료:",d)}),Lt.on("room:rejoin:error",({message:d})=>{console.warn("[Socket] 재접속 실패:",d),zv(),i.reset()}),Lt.on("room:state",d=>{i.updateRoomState(d)}),Lt.on("game:started",d=>{i.updateRoomState(d)}),Lt.on("turn:begin",d=>{i.turnState.rollCount=0,i.turnState.dice=[0,0,0,0,0],i.turnState.kept=[!1,!1,!1,!1,!1],i.possibleScores={}}),Lt.on("dice:rolling",d=>{i.startRolling(d.playerId,d.rollCount,d.kept)}),Lt.on("dice:rolled",d=>{i.updateDiceRolled(d)}),Lt.on("dice:physics-stream",d=>{i.updatePhysicsStream(d)}),Lt.on("dice:kept",({kept:d})=>{i.updateKept(d)}),Lt.on("score:card",d=>{i.updateScoreCard(d)}),Lt.on("score:possible",({possible:d})=>{i.updatePossibleScores(d)}),Lt.on("score:updated",({playerId:d,category:g})=>{const _=i.players.find(m=>m.id===d);_&&(_.usedCategories[g]=!0)}),Lt.on("game:finished",({rankings:d})=>{i.setRankings(d)}),Lt.on("score:player",d=>{i.setViewingPlayerScore(d)}),Lt.on("error",({message:d})=>{console.error("[Server Error]",d)}))}function e(d){Lt!=null&&Lt.connected||t(),setTimeout(()=>{Lt==null||Lt.emit("room:create",{name:d})},300)}function n(d,g,_){Lt!=null&&Lt.connected||t(),setTimeout(()=>{Lt==null||Lt.emit("room:join",{name:d,code:g}),Lt==null||Lt.once("room:join:error",({message:m})=>{_(m)})},300)}function s(){Lt==null||Lt.emit("game:start")}function r(){Lt==null||Lt.emit("dice:roll")}function o(d){Lt==null||Lt.emit("dice:result",{values:d})}function a(d){Lt==null||Lt.volatile.emit("dice:physics-stream",d)}function l(d){Lt==null||Lt.emit("dice:keep",{kept:d})}function c(d){Lt==null||Lt.emit("score:select",{category:d})}function u(d){Lt==null||Lt.emit("score:request",{playerId:d})}function f(){Lt==null||Lt.emit("game:restart")}function h(){Lt==null||Lt.disconnect(),Lt=null}return{connect:t,createRoom:e,joinRoom:n,startGame:s,rollDice:r,submitDiceResult:o,sendPhysicsStream:a,setKept:l,selectCategory:c,requestPlayerScore:u,restartGame:f,disconnect:h}}const kv={class:"lobby"},Hv={class:"lobby-container"},Vv={key:0,class:"mode-section"},Gv={key:1,class:"join-section"},Wv={class:"input-group"},qv=["disabled"],Xv={key:2,class:"join-section"},$v={class:"input-group"},Yv={key:0,class:"error-text"},jv=["disabled"],Kv={key:3,class:"waiting-section"},Zv={class:"room-code"},Jv={class:"players-panel"},Qv={class:"panel-title"},t0={class:"player-count"},e0={class:"player-list"},n0={class:"player-name"},i0={key:0,class:"host-badge"},s0={key:1,class:"me-badge"},r0={class:"actions"},o0=["disabled"],a0={key:1,class:"waiting-text"},l0={class:"connection-info"},c0={class:"address"},u0={computed:{window(){return window}}},h0=xs({...u0,__name:"LobbyView",setup(i){const t=ys(),e=ur(),n=Ee(""),s=Ee(""),r=Ee(""),o=Ee(""),a=Ee(!1),l=5,c=Ge(()=>t.isHost&&t.players.length>=1);function u(){s.value.trim()&&(e.connect(),e.createRoom(s.value.trim()),a.value=!0)}function f(){!s.value.trim()||!r.value.trim()||(o.value="",e.connect(),e.joinRoom(s.value.trim(),r.value.trim(),g=>{o.value=g,a.value=!1}),a.value=!0)}function h(){e.startGame()}function d(){navigator.clipboard.writeText(t.roomCode).catch(()=>{})}return io(()=>{t.connected&&t.roomCode&&(a.value=!0)}),(g,_)=>(bt(),It("div",kv,[it("div",Hv,[_[13]||(_[13]=it("div",{class:"lobby-header"},[it("h1",{class:"title"},"YACHT"),it("p",{class:"subtitle"},"Dice Game")],-1)),!a.value&&n.value===""?(bt(),It("div",Vv,[it("button",{class:"btn btn-primary btn-lg",onClick:_[0]||(_[0]=m=>n.value="create")}," 방 만들기 "),it("button",{class:"btn btn-secondary btn-lg",onClick:_[1]||(_[1]=m=>n.value="join")}," 방 코드로 참가 ")])):!a.value&&n.value==="create"?(bt(),It("div",Gv,[it("div",Wv,[ka(it("input",{"onUpdate:modelValue":_[2]||(_[2]=m=>s.value=m),class:"name-input",placeholder:"닉네임을 입력하세요",maxlength:"12",onKeyup:ph(u,["enter"]),autofocus:""},null,544),[[$a,s.value]]),it("button",{class:"btn btn-primary btn-lg",disabled:!s.value.trim(),onClick:u}," 방 만들기 ",8,qv),it("button",{class:"btn btn-ghost",onClick:_[3]||(_[3]=m=>n.value="")},"← 뒤로")])])):!a.value&&n.value==="join"?(bt(),It("div",Xv,[it("div",$v,[ka(it("input",{"onUpdate:modelValue":_[4]||(_[4]=m=>s.value=m),class:"name-input",placeholder:"닉네임을 입력하세요",maxlength:"12",autofocus:""},null,512),[[$a,s.value]]),ka(it("input",{"onUpdate:modelValue":_[5]||(_[5]=m=>r.value=m),class:"name-input code-input",placeholder:"방 코드 (예: ABCD)",maxlength:"4",onKeyup:ph(f,["enter"])},null,544),[[$a,r.value]]),o.value?(bt(),It("p",Yv,Xt(o.value),1)):fn("",!0),it("button",{class:"btn btn-primary btn-lg",disabled:!s.value.trim()||!r.value.trim(),onClick:f}," 참가하기 ",8,jv),it("button",{class:"btn btn-ghost",onClick:_[6]||(_[6]=m=>n.value="")},"← 뒤로")])])):(bt(),It("div",Kv,[it("div",{class:"room-code-panel",onClick:d,title:"클릭해서 복사"},[_[7]||(_[7]=it("span",{class:"room-code-label"},"방 코드",-1)),it("span",Zv,Xt(Ot(t).roomCode),1),_[8]||(_[8]=it("span",{class:"copy-hint"},"클릭해서 복사",-1))]),it("div",Jv,[it("h3",Qv,[_[9]||(_[9]=rn(" 대기실 ",-1)),it("span",t0,Xt(Ot(t).players.length)+" / "+Xt(l),1)]),it("div",e0,[(bt(!0),It(oe,null,Oe(Ot(t).players,m=>(bt(),It("div",{key:m.id,class:"player-card"},[it("span",{class:"player-dot",style:cn({background:m.color})},null,4),it("span",n0,[rn(Xt(m.name)+" ",1),m.isHost?(bt(),It("span",i0,"HOST")):fn("",!0),m.id===Ot(t).mySocketId?(bt(),It("span",s0,"ME")):fn("",!0)])]))),128)),(bt(!0),It(oe,null,Oe(l-Ot(t).players.length,m=>(bt(),It("div",{key:"empty-"+m,class:"player-card empty"},[..._[10]||(_[10]=[it("span",{class:"player-dot empty-dot"},null,-1),it("span",{class:"player-name empty-name"},"대기 중...",-1)])]))),128))])]),it("div",r0,[Ot(t).isHost?(bt(),It("button",{key:0,class:"btn btn-success btn-lg start-btn",disabled:!c.value,onClick:h}," 게임 시작 ",8,o0)):(bt(),It("p",a0," 호스트가 게임을 시작할 때까지 대기 중... "))]),it("div",l0,[it("p",null,[_[11]||(_[11]=rn("이 주소로 접속한 뒤 방 코드 ",-1)),it("strong",null,Xt(Ot(t).roomCode),1),_[12]||(_[12]=rn("를 입력하세요",-1))]),it("code",c0,Xt(g.window.location.origin),1)])]))]),_[14]||(_[14]=it("div",{class:"bg-dice dice-1"},"⚀",-1)),_[15]||(_[15]=it("div",{class:"bg-dice dice-2"},"⚅",-1)),_[16]||(_[16]=it("div",{class:"bg-dice dice-3"},"⚃",-1))]))}}),hr=(i,t)=>{const e=i.__vccOpts||i;for(const[n,s]of t)e[n]=s;return e},f0=hr(h0,[["__scopeId","data-v-2fc56986"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hu="170",d0=0,bh=1,p0=2,Ep=1,bp=2,hi=3,Yi=0,Ze=1,Wn=2,Gi=0,Ys=1,wh=2,Th=3,Ah=4,m0=5,us=100,g0=101,_0=102,v0=103,x0=104,y0=200,S0=201,M0=202,E0=203,tc=204,ec=205,b0=206,w0=207,T0=208,A0=209,C0=210,R0=211,P0=212,L0=213,I0=214,nc=0,ic=1,sc=2,Qs=3,rc=4,oc=5,ac=6,lc=7,wp=0,D0=1,N0=2,Wi=0,U0=1,F0=2,O0=3,Tp=4,B0=5,z0=6,k0=7,Ap=300,tr=301,er=302,cc=303,uc=304,Ra=306,hc=1e3,ds=1001,fc=1002,Nn=1003,H0=1004,vo=1005,qn=1006,Ja=1007,ps=1008,bi=1009,Cp=1010,Rp=1011,to=1012,fu=1013,_s=1014,gi=1015,ro=1016,du=1017,pu=1018,nr=1020,Pp=35902,Lp=1021,Ip=1022,Pn=1023,Dp=1024,Np=1025,js=1026,ir=1027,Up=1028,mu=1029,Fp=1030,gu=1031,_u=1033,Zo=33776,Jo=33777,Qo=33778,ta=33779,dc=35840,pc=35841,mc=35842,gc=35843,_c=36196,vc=37492,xc=37496,yc=37808,Sc=37809,Mc=37810,Ec=37811,bc=37812,wc=37813,Tc=37814,Ac=37815,Cc=37816,Rc=37817,Pc=37818,Lc=37819,Ic=37820,Dc=37821,ea=36492,Nc=36494,Uc=36495,Op=36283,Fc=36284,Oc=36285,Bc=36286,V0=3200,G0=3201,Bp=0,W0=1,zi="",xn="srgb",fr="srgb-linear",Pa="linear",de="srgb",bs=7680,Ch=519,q0=512,X0=513,$0=514,zp=515,Y0=516,j0=517,K0=518,Z0=519,Rh=35044,Ph="300 es",_i=2e3,ua=2001;class dr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qa=Math.PI/180,zc=180/Math.PI;function oo(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function sn(i,t,e){return Math.max(t,Math.min(e,i))}function J0(i,t){return(i%t+t)%t}function tl(i,t,e){return(1-e)*i+e*t}function yr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function tn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ne{constructor(t=0,e=0){ne.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(sn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,n,s,r,o,a,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],x=s[1],w=s[4],y=s[7],L=s[2],P=s[5],R=s[8];return r[0]=o*_+a*x+l*L,r[3]=o*m+a*w+l*P,r[6]=o*p+a*y+l*R,r[1]=c*_+u*x+f*L,r[4]=c*m+u*w+f*P,r[7]=c*p+u*y+f*R,r[2]=h*_+d*x+g*L,r[5]=h*m+d*w+g*P,r[8]=h*p+d*y+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,g=e*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(s*c-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=h*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(el.makeScale(t,e)),this}rotate(t){return this.premultiply(el.makeRotation(-t)),this}translate(t,e){return this.premultiply(el.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const el=new Jt;function kp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ha(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Q0(){const i=ha("canvas");return i.style.display="block",i}const Lh={};function Ur(i){i in Lh||(Lh[i]=!0,console.warn(i))}function tx(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ex(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function nx(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ie={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(i.r=xi(i.r),i.g=xi(i.g),i.b=xi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(i.r=Ks(i.r),i.g=Ks(i.g),i.b=Ks(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===zi?Pa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ks(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ih=[.64,.33,.3,.6,.15,.06],Dh=[.2126,.7152,.0722],Nh=[.3127,.329],Uh=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fh=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[fr]:{primaries:Ih,whitePoint:Nh,transfer:Pa,toXYZ:Uh,fromXYZ:Fh,luminanceCoefficients:Dh,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:Ih,whitePoint:Nh,transfer:de,toXYZ:Uh,fromXYZ:Fh,luminanceCoefficients:Dh,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}});let ws;class ix{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ws===void 0&&(ws=ha("canvas")),ws.width=t.width,ws.height=t.height;const n=ws.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ws}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ha("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xi(e[n]/255)*255):e[n]=xi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sx=0;class Hp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=oo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nl(s[o].image)):r.push(nl(s[o]))}else r=nl(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function nl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ix.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rx=0;class Je extends dr{constructor(t=Je.DEFAULT_IMAGE,e=Je.DEFAULT_MAPPING,n=ds,s=ds,r=qn,o=ps,a=Pn,l=bi,c=Je.DEFAULT_ANISOTROPY,u=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=oo(),this.name="",this.source=new Hp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ap)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hc:t.x=t.x-Math.floor(t.x);break;case ds:t.x=t.x<0?0:1;break;case fc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hc:t.y=t.y-Math.floor(t.y);break;case ds:t.y=t.y<0?0:1;break;case fc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=Ap;Je.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,s=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,y=(d+1)/2,L=(p+1)/2,P=(u+h)/4,R=(f+_)/4,I=(g+m)/4;return w>y&&w>L?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=P/n,r=R/n):y>L?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=P/s,r=I/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=R/r,s=I/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-_)/x,this.z=(h-u)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ox extends dr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Je(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Hp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vs extends ox{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Vp extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ax extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let qi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3];const h=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*_,x=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const L=Math.sqrt(w),P=Math.atan2(L,p*x);m=Math.sin(m*P)/L,a=Math.sin(a*P)/L}const y=a*x;if(l=l*m+h*y,c=c*m+d*y,u=u*m+g*y,f=f*m+_*y,m===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=L,c*=L,u*=L,f*=L}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*f+l*d-c*h,t[e+1]=l*g+u*h+c*f-a*d,t[e+2]=c*g+u*d+a*h-l*f,t[e+3]=u*g-a*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(r/2),h=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(sn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class Y{constructor(t=0,e=0,n=0){Y.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Oh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Oh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*u,this.y=n+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return il.copy(this).projectOnVector(t),this.sub(il)}reflect(t){return this.sub(il.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(sn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const il=new Y,Oh=new qi;class ao{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,bn):bn.fromBufferAttribute(r,o),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xo.copy(n.boundingBox)),xo.applyMatrix4(t.matrixWorld),this.union(xo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Sr),yo.subVectors(this.max,Sr),Ts.subVectors(t.a,Sr),As.subVectors(t.b,Sr),Cs.subVectors(t.c,Sr),Ri.subVectors(As,Ts),Pi.subVectors(Cs,As),ts.subVectors(Ts,Cs);let e=[0,-Ri.z,Ri.y,0,-Pi.z,Pi.y,0,-ts.z,ts.y,Ri.z,0,-Ri.x,Pi.z,0,-Pi.x,ts.z,0,-ts.x,-Ri.y,Ri.x,0,-Pi.y,Pi.x,0,-ts.y,ts.x,0];return!sl(e,Ts,As,Cs,yo)||(e=[1,0,0,0,1,0,0,0,1],!sl(e,Ts,As,Cs,yo))?!1:(So.crossVectors(Ri,Pi),e=[So.x,So.y,So.z],sl(e,Ts,As,Cs,yo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ni=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],bn=new Y,xo=new ao,Ts=new Y,As=new Y,Cs=new Y,Ri=new Y,Pi=new Y,ts=new Y,Sr=new Y,yo=new Y,So=new Y,es=new Y;function sl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){es.fromArray(i,r);const a=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),l=t.dot(es),c=e.dot(es),u=n.dot(es);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const lx=new ao,Mr=new Y,rl=new Y;class vu{constructor(t=new Y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):lx.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mr.subVectors(t,this.center);const e=Mr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Mr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mr.copy(t.center).add(rl)),this.expandByPoint(Mr.copy(t.center).sub(rl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new Y,ol=new Y,Mo=new Y,Li=new Y,al=new Y,Eo=new Y,ll=new Y;let Gp=class{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ol.copy(t).add(e).multiplyScalar(.5),Mo.copy(e).sub(t).normalize(),Li.copy(this.origin).sub(ol);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Mo),a=Li.dot(this.direction),l=-Li.dot(Mo),c=Li.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ol).addScaledVector(Mo,h),d}intersectSphere(t,e){ii.subVectors(t.center,this.origin);const n=ii.dot(this.direction),s=ii.dot(ii)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,n,s,r){al.subVectors(e,t),Eo.subVectors(n,t),ll.crossVectors(al,Eo);let o=this.direction.dot(ll),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Li.subVectors(this.origin,t);const l=a*this.direction.dot(Eo.crossVectors(Li,Eo));if(l<0)return null;const c=a*this.direction.dot(al.cross(Li));if(c<0||l+c>o)return null;const u=-a*Li.dot(ll);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class be{constructor(t,e,n,s,r,o,a,l,c,u,f,h,d,g,_,m){be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,f,h,d,g,_,m)}set(t,e,n,s,r,o,a,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new be().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Rs.setFromMatrixColumn(t,0).length(),r=1/Rs.setFromMatrixColumn(t,1).length(),o=1/Rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=h-_*c,e[9]=-a*l,e[2]=_-h*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;e[0]=h+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;e[0]=h-_*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=g*c-d,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*f+g,e[10]=h-_*f}else if(t.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+_,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cx,t,ux)}lookAt(t,e,n){const s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),Ii.crossVectors(n,an),Ii.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Ii.crossVectors(n,an)),Ii.normalize(),bo.crossVectors(an,Ii),s[0]=Ii.x,s[4]=bo.x,s[8]=an.x,s[1]=Ii.y,s[5]=bo.y,s[9]=an.y,s[2]=Ii.z,s[6]=bo.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],w=n[7],y=n[11],L=n[15],P=s[0],R=s[4],I=s[8],b=s[12],S=s[1],N=s[5],W=s[9],F=s[13],V=s[2],G=s[6],O=s[10],j=s[14],H=s[3],lt=s[7],_t=s[11],ct=s[15];return r[0]=o*P+a*S+l*V+c*H,r[4]=o*R+a*N+l*G+c*lt,r[8]=o*I+a*W+l*O+c*_t,r[12]=o*b+a*F+l*j+c*ct,r[1]=u*P+f*S+h*V+d*H,r[5]=u*R+f*N+h*G+d*lt,r[9]=u*I+f*W+h*O+d*_t,r[13]=u*b+f*F+h*j+d*ct,r[2]=g*P+_*S+m*V+p*H,r[6]=g*R+_*N+m*G+p*lt,r[10]=g*I+_*W+m*O+p*_t,r[14]=g*b+_*F+m*j+p*ct,r[3]=x*P+w*S+y*V+L*H,r[7]=x*R+w*N+y*G+L*lt,r[11]=x*I+w*W+y*O+L*_t,r[15]=x*b+w*F+y*j+L*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*f-s*c*f-r*a*h+n*c*h+s*a*d-n*l*d)+_*(+e*l*d-e*c*h+r*o*h-s*o*d+s*c*u-r*l*u)+m*(+e*c*f-e*a*d-r*o*f+n*o*d+r*a*u-n*c*u)+p*(-s*a*u-e*l*f+e*a*h+s*o*f-n*o*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],x=f*m*c-_*h*c+_*l*d-a*m*d-f*l*p+a*h*p,w=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,y=u*_*c-g*f*c+g*a*d-o*_*d-u*a*p+o*f*p,L=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,P=e*x+n*w+s*y+r*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return t[0]=x*R,t[1]=(_*h*r-f*m*r-_*s*d+n*m*d+f*s*p-n*h*p)*R,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*R,t[3]=(f*l*r-a*h*r-f*s*c+n*h*c+a*s*d-n*l*d)*R,t[4]=w*R,t[5]=(u*m*r-g*h*r+g*s*d-e*m*d-u*s*p+e*h*p)*R,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*R,t[7]=(o*h*r-u*l*r+u*s*c-e*h*c-o*s*d+e*l*d)*R,t[8]=y*R,t[9]=(g*f*r-u*_*r-g*n*d+e*_*d+u*n*p-e*f*p)*R,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*R,t[11]=(u*a*r-o*f*r-u*n*c+e*f*c+o*n*d-e*a*d)*R,t[12]=L*R,t[13]=(u*_*s-g*f*s+g*n*h-e*_*h-u*n*m+e*f*m)*R,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*R,t[15]=(o*f*s-u*a*s+u*n*l-e*f*l-o*n*h+e*a*h)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,g=r*f,_=o*u,m=o*f,p=a*f,x=l*c,w=l*u,y=l*f,L=n.x,P=n.y,R=n.z;return s[0]=(1-(_+p))*L,s[1]=(d+y)*L,s[2]=(g-w)*L,s[3]=0,s[4]=(d-y)*P,s[5]=(1-(h+p))*P,s[6]=(m+x)*P,s[7]=0,s[8]=(g+w)*R,s[9]=(m-x)*R,s[10]=(1-(h+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Rs.set(s[0],s[1],s[2]).length();const o=Rs.set(s[4],s[5],s[6]).length(),a=Rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],wn.copy(this);const c=1/r,u=1/o,f=1/a;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=f,wn.elements[9]*=f,wn.elements[10]*=f,e.setFromRotationMatrix(wn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=_i){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),h=(n+s)/(n-s);let d,g;if(a===_i)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ua)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=_i){const l=this.elements,c=1/(e-t),u=1/(n-s),f=1/(o-r),h=(e+t)*c,d=(n+s)*u;let g,_;if(a===_i)g=(o+r)*f,_=-2*f;else if(a===ua)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Rs=new Y,wn=new be,cx=new Y(0,0,0),ux=new Y(1,1,1),Ii=new Y,bo=new Y,an=new Y,Bh=new be,zh=new qi;class qe{constructor(t=0,e=0,n=0,s=qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-sn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zh.setFromEuler(this),this.setFromQuaternion(zh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qe.DEFAULT_ORDER="XYZ";class xu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hx=0;const kh=new Y,Ps=new qi,si=new be,wo=new Y,Er=new Y,fx=new Y,dx=new qi,Hh=new Y(1,0,0),Vh=new Y(0,1,0),Gh=new Y(0,0,1),Wh={type:"added"},px={type:"removed"},Ls={type:"childadded",child:null},cl={type:"childremoved",child:null};class Xe extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xe.DEFAULT_UP.clone();const t=new Y,e=new qe,n=new qi,s=new Y(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new be},normalMatrix:{value:new Jt}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=Xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.premultiply(Ps),this}rotateX(t){return this.rotateOnAxis(Hh,t)}rotateY(t){return this.rotateOnAxis(Vh,t)}rotateZ(t){return this.rotateOnAxis(Gh,t)}translateOnAxis(t,e){return kh.copy(t).applyQuaternion(this.quaternion),this.position.add(kh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hh,t)}translateY(t){return this.translateOnAxis(Vh,t)}translateZ(t){return this.translateOnAxis(Gh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wo.copy(t):wo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Er,wo,this.up):si.lookAt(wo,Er,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),Ps.setFromRotationMatrix(si),this.quaternion.premultiply(Ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wh),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(px),cl.child=t,this.dispatchEvent(cl),cl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wh),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,t,fx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,dx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Xe.DEFAULT_UP=new Y(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new Y,ri=new Y,ul=new Y,oi=new Y,Is=new Y,Ds=new Y,qh=new Y,hl=new Y,fl=new Y,dl=new Y,pl=new pe,ml=new pe,gl=new pe;class Rn{constructor(t=new Y,e=new Y,n=new Y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Tn.subVectors(t,e),s.cross(Tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Tn.subVectors(s,e),ri.subVectors(n,e),ul.subVectors(t,e);const o=Tn.dot(Tn),a=Tn.dot(ri),l=Tn.dot(ul),c=ri.dot(ri),u=ri.dot(ul),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return pl.setScalar(0),ml.setScalar(0),gl.setScalar(0),pl.fromBufferAttribute(t,e),ml.fromBufferAttribute(t,n),gl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(pl,r.x),o.addScaledVector(ml,r.y),o.addScaledVector(gl,r.z),o}static isFrontFacing(t,e,n,s){return Tn.subVectors(n,e),ri.subVectors(t,e),Tn.cross(ri).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Tn.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Rn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Is.subVectors(s,n),Ds.subVectors(r,n),hl.subVectors(t,n);const l=Is.dot(hl),c=Ds.dot(hl);if(l<=0&&c<=0)return e.copy(n);fl.subVectors(t,s);const u=Is.dot(fl),f=Ds.dot(fl);if(u>=0&&f<=u)return e.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Is,o);dl.subVectors(t,r);const d=Is.dot(dl),g=Ds.dot(dl);if(g>=0&&d<=g)return e.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ds,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return qh.subVectors(r,s),a=(f-u)/(f-u+(d-g)),e.copy(s).addScaledVector(qh,a);const p=1/(m+_+h);return o=_*p,a=h*p,e.copy(n).addScaledVector(Is,o).addScaledVector(Ds,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},To={h:0,s:0,l:0};function _l(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ee{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=J0(t,1),e=sn(e,0,1),n=sn(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=_l(o,r,t+1/3),this.g=_l(o,r,t),this.b=_l(o,r,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=xn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xn){const n=Wp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xi(t.r),this.g=xi(t.g),this.b=xi(t.b),this}copyLinearToSRGB(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xn){return ie.fromWorkingColorSpace(He.copy(this),t),Math.round(sn(He.r*255,0,255))*65536+Math.round(sn(He.g*255,0,255))*256+Math.round(sn(He.b*255,0,255))}getHexString(t=xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(He.copy(this),e);const n=He.r,s=He.g,r=He.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=xn){ie.fromWorkingColorSpace(He.copy(this),t);const e=He.r,n=He.g,s=He.b;return t!==xn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Di),this.setHSL(Di.h+t,Di.s+e,Di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Di),t.getHSL(To);const n=tl(Di.h,To.h,e),s=tl(Di.s,To.s,e),r=tl(Di.l,To.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new ee;ee.NAMES=Wp;let mx=0,lo=class extends dr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=oo(),this.name="",this.blending=Ys,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tc,this.blendDst=ec,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(n.blending=this.blending),this.side!==Yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==tc&&(n.blendSrc=this.blendSrc),this.blendDst!==ec&&(n.blendDst=this.blendDst),this.blendEquation!==us&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ch&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}};class qp extends lo{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.combine=wp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new Y,Ao=new ne;class Yn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Rh,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ao.fromBufferAttribute(this,e),Ao.applyMatrix3(t),this.setXY(e,Ao.x,Ao.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=tn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yr(e,this.array)),e}setX(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yr(e,this.array)),e}setY(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yr(e,this.array)),e}setW(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),s=tn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),s=tn(s,this.array),r=tn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rh&&(t.usage=this.usage),t}}class Xp extends Yn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class $p extends Yn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class pn extends Yn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let gx=0;const _n=new be,vl=new Xe,Ns=new Y,ln=new ao,br=new ao,Ue=new Y;class Ti extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kp(t)?$p:Xp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return vl.lookAt(t),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pn(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ao);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vu);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];br.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(ln.min,br.min),ln.expandByPoint(Ue),Ue.addVectors(ln.max,br.max),ln.expandByPoint(Ue)):(ln.expandByPoint(br.min),ln.expandByPoint(br.max))}ln.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ue));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ue.fromBufferAttribute(a,c),l&&(Ns.fromBufferAttribute(t,c),Ue.add(Ns)),s=Math.max(s,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new Y,l[I]=new Y;const c=new Y,u=new Y,f=new Y,h=new ne,d=new ne,g=new ne,_=new Y,m=new Y;function p(I,b,S){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,b),f.fromBufferAttribute(n,S),h.fromBufferAttribute(r,I),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const N=1/(d.x*g.y-g.x*d.y);isFinite(N)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(N),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(N),a[I].add(_),a[b].add(_),a[S].add(_),l[I].add(m),l[b].add(m),l[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let I=0,b=x.length;I<b;++I){const S=x[I],N=S.start,W=S.count;for(let F=N,V=N+W;F<V;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const w=new Y,y=new Y,L=new Y,P=new Y;function R(I){L.fromBufferAttribute(s,I),P.copy(L);const b=a[I];w.copy(b),w.sub(L.multiplyScalar(L.dot(b))).normalize(),y.crossVectors(P,b);const N=y.dot(l[I])<0?-1:1;o.setXYZW(I,w.x,w.y,w.z,N)}for(let I=0,b=x.length;I<b;++I){const S=x[I],N=S.start,W=S.count;for(let F=N,V=N+W;F<V;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new Y,r=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,f=new Y;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Yn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ti,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xh=new be,ns=new Gp,Co=new vu,$h=new Y,Ro=new Y,Po=new Y,Lo=new Y,xl=new Y,Io=new Y,Yh=new Y,Do=new Y;class Fe extends Xe{constructor(t=new Ti,e=new qp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Io.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(xl.fromBufferAttribute(f,t),o?Io.addScaledVector(xl,u):Io.addScaledVector(xl.sub(e),u))}e.add(Io)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(r),ns.copy(t.ray).recast(t.near),!(Co.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Co,$h)===null||ns.origin.distanceToSquared($h)>(t.far-t.near)**2))&&(Xh.copy(r).invert(),ns.copy(t.ray).applyMatrix4(Xh),!(n.boundingBox!==null&&ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ns)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),w=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=x,L=w;y<L;y+=3){const P=a.getX(y),R=a.getX(y+1),I=a.getX(y+2);s=No(this,p,t,n,c,u,f,P,R,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const x=a.getX(m),w=a.getX(m+1),y=a.getX(m+2);s=No(this,o,t,n,c,u,f,x,w,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),w=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=x,L=w;y<L;y+=3){const P=y,R=y+1,I=y+2;s=No(this,p,t,n,c,u,f,P,R,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const x=m,w=m+1,y=m+2;s=No(this,o,t,n,c,u,f,x,w,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function _x(i,t,e,n,s,r,o,a){let l;if(t.side===Ze?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Yi,a),l===null)return null;Do.copy(a),Do.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Do);return c<e.near||c>e.far?null:{distance:c,point:Do.clone(),object:i}}function No(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ro),i.getVertexPosition(l,Po),i.getVertexPosition(c,Lo);const u=_x(i,t,e,n,Ro,Po,Lo,Yh);if(u){const f=new Y;Rn.getBarycoord(Yh,Ro,Po,Lo,f),s&&(u.uv=Rn.getInterpolatedAttribute(s,a,l,c,f,new ne)),r&&(u.uv1=Rn.getInterpolatedAttribute(r,a,l,c,f,new ne)),o&&(u.normal=Rn.getInterpolatedAttribute(o,a,l,c,f,new Y),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new Y,materialIndex:0};Rn.getNormal(Ro,Po,Lo,h.normal),u.face=h,u.barycoord=f}return u}class yi extends Ti{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new pn(c,3)),this.setAttribute("normal",new pn(u,3)),this.setAttribute("uv",new pn(f,2));function g(_,m,p,x,w,y,L,P,R,I,b){const S=y/R,N=L/I,W=y/2,F=L/2,V=P/2,G=R+1,O=I+1;let j=0,H=0;const lt=new Y;for(let _t=0;_t<O;_t++){const ct=_t*N-F;for(let ht=0;ht<G;ht++){const $t=ht*S-W;lt[_]=$t*x,lt[m]=ct*w,lt[p]=V,c.push(lt.x,lt.y,lt.z),lt[_]=0,lt[m]=0,lt[p]=P>0?1:-1,u.push(lt.x,lt.y,lt.z),f.push(ht/R),f.push(1-_t/I),j+=1}}for(let _t=0;_t<I;_t++)for(let ct=0;ct<R;ct++){const ht=h+ct+G*_t,$t=h+ct+G*(_t+1),at=h+(ct+1)+G*(_t+1),gt=h+(ct+1)+G*_t;l.push(ht,$t,gt),l.push($t,at,gt),H+=6}a.addGroup(d,H,b),d+=H,h+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function sr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ye(i){const t={};for(let e=0;e<i.length;e++){const n=sr(i[e]);for(const s in n)t[s]=n[s]}return t}function vx(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Yp(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const xx={clone:sr,merge:Ye};var yx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends lo{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yx,this.fragmentShader=Sx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=sr(t.uniforms),this.uniformsGroups=vx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class jp extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=_i}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new Y,jh=new ne,Kh=new ne;class un extends jp{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zc*2*Math.atan(Math.tan(Qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z)}getViewSize(t,e){return this.getViewBounds(t,jh,Kh),e.subVectors(Kh,jh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Qa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Us=-90,Fs=1;class Mx extends Xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un(Us,Fs,t,e);s.layers=this.layers,this.add(s);const r=new un(Us,Fs,t,e);r.layers=this.layers,this.add(r);const o=new un(Us,Fs,t,e);o.layers=this.layers,this.add(o);const a=new un(Us,Fs,t,e);a.layers=this.layers,this.add(a);const l=new un(Us,Fs,t,e);l.layers=this.layers,this.add(l);const c=new un(Us,Fs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===_i)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ua)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Kp extends Je{constructor(t,e,n,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:tr,super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ex extends vs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Kp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:qn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new yi(5,5,5),r=new ji({name:"CubemapFromEquirect",uniforms:sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:Gi});r.uniforms.tEquirect.value=e;const o=new Fe(s,r),a=e.minFilter;return e.minFilter===ps&&(e.minFilter=qn),new Mx(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const yl=new Y,bx=new Y,wx=new Jt;class ls{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=yl.subVectors(n,e).cross(bx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(yl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||wx.getNormalMatrix(t),s=this.coplanarPoint(yl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new vu,Uo=new Y;class yu{constructor(t=new ls,e=new ls,n=new ls,s=new ls,r=new ls,o=new ls){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_i){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],x=s[13],w=s[14],y=s[15];if(n[0].setComponents(l-r,h-c,m-d,y-p).normalize(),n[1].setComponents(l+r,h+c,m+d,y+p).normalize(),n[2].setComponents(l+o,h+u,m+g,y+x).normalize(),n[3].setComponents(l-o,h-u,m-g,y-x).normalize(),n[4].setComponents(l-a,h-f,m-_,y-w).normalize(),e===_i)n[5].setComponents(l+a,h+f,m+_,y+w).normalize();else if(e===ua)n[5].setComponents(a,f,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(t){return is.center.set(0,0,0),is.radius=.7071067811865476,is.applyMatrix4(t.matrixWorld),this.intersectsSphere(is)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Uo.x=s.normal.x>0?t.max.x:t.min.x,Uo.y=s.normal.y>0?t.max.y:t.min.y,Uo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Uo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zp(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Tx(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class La extends Ti{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=t/a,h=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const x=p*h-o;for(let w=0;w<c;w++){const y=w*f-r;g.push(y,-x,0),_.push(0,0,1),m.push(w/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const w=x+c*p,y=x+c*(p+1),L=x+1+c*(p+1),P=x+1+c*p;d.push(w,y,P),d.push(y,L,P)}this.setIndex(d),this.setAttribute("position",new pn(g,3)),this.setAttribute("normal",new pn(_,3)),this.setAttribute("uv",new pn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new La(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ax=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Px=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ix=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Nx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ux=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Fx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ox=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$x=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Kx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ty=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ey=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ny=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iy="gl_FragColor = linearToOutputTexel( gl_FragColor );",sy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ry=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,oy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ay=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ly=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,py=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,my=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_y=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,My=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ey=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,by=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ty=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ay=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ry=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Py=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ly=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Iy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ny=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Oy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,By=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ky=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Gy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ky=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_S=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,SS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,MS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ES=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,AS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,DS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,NS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,US=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,FS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,HS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$S=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,YS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ZS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,eM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:Ax,alphahash_pars_fragment:Cx,alphamap_fragment:Rx,alphamap_pars_fragment:Px,alphatest_fragment:Lx,alphatest_pars_fragment:Ix,aomap_fragment:Dx,aomap_pars_fragment:Nx,batching_pars_vertex:Ux,batching_vertex:Fx,begin_vertex:Ox,beginnormal_vertex:Bx,bsdfs:zx,iridescence_fragment:kx,bumpmap_pars_fragment:Hx,clipping_planes_fragment:Vx,clipping_planes_pars_fragment:Gx,clipping_planes_pars_vertex:Wx,clipping_planes_vertex:qx,color_fragment:Xx,color_pars_fragment:$x,color_pars_vertex:Yx,color_vertex:jx,common:Kx,cube_uv_reflection_fragment:Zx,defaultnormal_vertex:Jx,displacementmap_pars_vertex:Qx,displacementmap_vertex:ty,emissivemap_fragment:ey,emissivemap_pars_fragment:ny,colorspace_fragment:iy,colorspace_pars_fragment:sy,envmap_fragment:ry,envmap_common_pars_fragment:oy,envmap_pars_fragment:ay,envmap_pars_vertex:ly,envmap_physical_pars_fragment:xy,envmap_vertex:cy,fog_vertex:uy,fog_pars_vertex:hy,fog_fragment:fy,fog_pars_fragment:dy,gradientmap_pars_fragment:py,lightmap_pars_fragment:my,lights_lambert_fragment:gy,lights_lambert_pars_fragment:_y,lights_pars_begin:vy,lights_toon_fragment:yy,lights_toon_pars_fragment:Sy,lights_phong_fragment:My,lights_phong_pars_fragment:Ey,lights_physical_fragment:by,lights_physical_pars_fragment:wy,lights_fragment_begin:Ty,lights_fragment_maps:Ay,lights_fragment_end:Cy,logdepthbuf_fragment:Ry,logdepthbuf_pars_fragment:Py,logdepthbuf_pars_vertex:Ly,logdepthbuf_vertex:Iy,map_fragment:Dy,map_pars_fragment:Ny,map_particle_fragment:Uy,map_particle_pars_fragment:Fy,metalnessmap_fragment:Oy,metalnessmap_pars_fragment:By,morphinstance_vertex:zy,morphcolor_vertex:ky,morphnormal_vertex:Hy,morphtarget_pars_vertex:Vy,morphtarget_vertex:Gy,normal_fragment_begin:Wy,normal_fragment_maps:qy,normal_pars_fragment:Xy,normal_pars_vertex:$y,normal_vertex:Yy,normalmap_pars_fragment:jy,clearcoat_normal_fragment_begin:Ky,clearcoat_normal_fragment_maps:Zy,clearcoat_pars_fragment:Jy,iridescence_pars_fragment:Qy,opaque_fragment:tS,packing:eS,premultiplied_alpha_fragment:nS,project_vertex:iS,dithering_fragment:sS,dithering_pars_fragment:rS,roughnessmap_fragment:oS,roughnessmap_pars_fragment:aS,shadowmap_pars_fragment:lS,shadowmap_pars_vertex:cS,shadowmap_vertex:uS,shadowmask_pars_fragment:hS,skinbase_vertex:fS,skinning_pars_vertex:dS,skinning_vertex:pS,skinnormal_vertex:mS,specularmap_fragment:gS,specularmap_pars_fragment:_S,tonemapping_fragment:vS,tonemapping_pars_fragment:xS,transmission_fragment:yS,transmission_pars_fragment:SS,uv_pars_fragment:MS,uv_pars_vertex:ES,uv_vertex:bS,worldpos_vertex:wS,background_vert:TS,background_frag:AS,backgroundCube_vert:CS,backgroundCube_frag:RS,cube_vert:PS,cube_frag:LS,depth_vert:IS,depth_frag:DS,distanceRGBA_vert:NS,distanceRGBA_frag:US,equirect_vert:FS,equirect_frag:OS,linedashed_vert:BS,linedashed_frag:zS,meshbasic_vert:kS,meshbasic_frag:HS,meshlambert_vert:VS,meshlambert_frag:GS,meshmatcap_vert:WS,meshmatcap_frag:qS,meshnormal_vert:XS,meshnormal_frag:$S,meshphong_vert:YS,meshphong_frag:jS,meshphysical_vert:KS,meshphysical_frag:ZS,meshtoon_vert:JS,meshtoon_frag:QS,points_vert:tM,points_frag:eM,shadow_vert:nM,shadow_frag:iM,sprite_vert:sM,sprite_frag:rM},Mt={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Gn={basic:{uniforms:Ye([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Ye([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new ee(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Ye([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Ye([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Ye([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new ee(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Ye([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Ye([Mt.points,Mt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Ye([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Ye([Mt.common,Mt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Ye([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Ye([Mt.sprite,Mt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:Ye([Mt.common,Mt.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:Ye([Mt.lights,Mt.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Gn.physical={uniforms:Ye([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const Fo={r:0,b:0,g:0},ss=new qe,oM=new be;function aM(i,t,e,n,s,r,o){const a=new ee(0);let l=r===!0?0:1,c,u,f=null,h=0,d=null;function g(x){let w=x.isScene===!0?x.background:null;return w&&w.isTexture&&(w=(x.backgroundBlurriness>0?e:t).get(w)),w}function _(x){let w=!1;const y=g(x);y===null?p(a,l):y&&y.isColor&&(p(y,1),w=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,w){const y=g(w);y&&(y.isCubeTexture||y.mapping===Ra)?(u===void 0&&(u=new Fe(new yi(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:sr(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ss.copy(w.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(oM.makeRotationFromEuler(ss)),u.material.toneMapped=ie.getTransfer(y.colorSpace)!==de,(f!==y||h!==y.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,d=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Fe(new La(2,2),new ji({name:"BackgroundMaterial",uniforms:sr(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=ie.getTransfer(y.colorSpace)!==de,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,w){x.getRGB(Fo,Yp(i)),n.buffers.color.setClear(Fo.r,Fo.g,Fo.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(x,w=1){a.set(x),l=w,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:_,addToRenderList:m}}function lM(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(S,N,W,F,V){let G=!1;const O=f(F,W,N);r!==O&&(r=O,c(r.object)),G=d(S,F,W,V),G&&g(S,F,W,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,y(S,N,W,F),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function f(S,N,W){const F=W.wireframe===!0;let V=n[S.id];V===void 0&&(V={},n[S.id]=V);let G=V[N.id];G===void 0&&(G={},V[N.id]=G);let O=G[F];return O===void 0&&(O=h(l()),G[F]=O),O}function h(S){const N=[],W=[],F=[];for(let V=0;V<e;V++)N[V]=0,W[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:W,attributeDivisors:F,object:S,attributes:{},index:null}}function d(S,N,W,F){const V=r.attributes,G=N.attributes;let O=0;const j=W.getAttributes();for(const H in j)if(j[H].location>=0){const _t=V[H];let ct=G[H];if(ct===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(ct=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(ct=S.instanceColor)),_t===void 0||_t.attribute!==ct||ct&&_t.data!==ct.data)return!0;O++}return r.attributesNum!==O||r.index!==F}function g(S,N,W,F){const V={},G=N.attributes;let O=0;const j=W.getAttributes();for(const H in j)if(j[H].location>=0){let _t=G[H];_t===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(_t=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(_t=S.instanceColor));const ct={};ct.attribute=_t,_t&&_t.data&&(ct.data=_t.data),V[H]=ct,O++}r.attributes=V,r.attributesNum=O,r.index=F}function _(){const S=r.newAttributes;for(let N=0,W=S.length;N<W;N++)S[N]=0}function m(S){p(S,0)}function p(S,N){const W=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;W[S]=1,F[S]===0&&(i.enableVertexAttribArray(S),F[S]=1),V[S]!==N&&(i.vertexAttribDivisor(S,N),V[S]=N)}function x(){const S=r.newAttributes,N=r.enabledAttributes;for(let W=0,F=N.length;W<F;W++)N[W]!==S[W]&&(i.disableVertexAttribArray(W),N[W]=0)}function w(S,N,W,F,V,G,O){O===!0?i.vertexAttribIPointer(S,N,W,V,G):i.vertexAttribPointer(S,N,W,F,V,G)}function y(S,N,W,F){_();const V=F.attributes,G=W.getAttributes(),O=N.defaultAttributeValues;for(const j in G){const H=G[j];if(H.location>=0){let lt=V[j];if(lt===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(lt=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(lt=S.instanceColor)),lt!==void 0){const _t=lt.normalized,ct=lt.itemSize,ht=t.get(lt);if(ht===void 0)continue;const $t=ht.buffer,at=ht.type,gt=ht.bytesPerElement,Ct=at===i.INT||at===i.UNSIGNED_INT||lt.gpuType===fu;if(lt.isInterleavedBufferAttribute){const yt=lt.data,zt=yt.stride,Ht=lt.offset;if(yt.isInstancedInterleavedBuffer){for(let Gt=0;Gt<H.locationSize;Gt++)p(H.location+Gt,yt.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Gt=0;Gt<H.locationSize;Gt++)m(H.location+Gt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let Gt=0;Gt<H.locationSize;Gt++)w(H.location+Gt,ct/H.locationSize,at,_t,zt*gt,(Ht+ct/H.locationSize*Gt)*gt,Ct)}else{if(lt.isInstancedBufferAttribute){for(let yt=0;yt<H.locationSize;yt++)p(H.location+yt,lt.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let yt=0;yt<H.locationSize;yt++)m(H.location+yt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let yt=0;yt<H.locationSize;yt++)w(H.location+yt,ct/H.locationSize,at,_t,ct*gt,ct/H.locationSize*yt*gt,Ct)}}else if(O!==void 0){const _t=O[j];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(H.location,_t);break;case 3:i.vertexAttrib3fv(H.location,_t);break;case 4:i.vertexAttrib4fv(H.location,_t);break;default:i.vertexAttrib1fv(H.location,_t)}}}}x()}function L(){I();for(const S in n){const N=n[S];for(const W in N){const F=N[W];for(const V in F)u(F[V].object),delete F[V];delete N[W]}delete n[S]}}function P(S){if(n[S.id]===void 0)return;const N=n[S.id];for(const W in N){const F=N[W];for(const V in F)u(F[V].object),delete F[V];delete N[W]}delete n[S.id]}function R(S){for(const N in n){const W=n[N];if(W[S.id]===void 0)continue;const F=W[S.id];for(const V in F)u(F[V].object),delete F[V];delete W[S.id]}}function I(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function cM(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];e.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function uM(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Pn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const I=R===ro&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==bi&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==gi&&!I)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:w,maxFragmentUniforms:y,vertexTextures:L,maxSamples:P}}function hM(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ls,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const x=r?0:n,w=x*4;let y=p.clippingState||null;l.value=y,y=u(g,h,w,d);for(let L=0;L!==w;++L)y[L]=e[L];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,y=d;w!==_;++w,y+=4)o.copy(f[w]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function fM(i){let t=new WeakMap;function e(o,a){return a===cc?o.mapping=tr:a===uc&&(o.mapping=er),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===cc||a===uc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ex(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Jp extends jp{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Vs=4,Zh=[.125,.215,.35,.446,.526,.582],hs=20,Sl=new Jp,Jh=new ee;let Ml=null,El=0,bl=0,wl=!1;const cs=(1+Math.sqrt(5))/2,Os=1/cs,Qh=[new Y(-cs,Os,0),new Y(cs,Os,0),new Y(-Os,0,cs),new Y(Os,0,cs),new Y(0,cs,-Os),new Y(0,cs,Os),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class tf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ml=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ml,El,bl),this._renderer.xr.enabled=wl,t.scissorTest=!1,Oo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===tr||t.mapping===er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ml=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:ro,format:Pn,colorSpace:fr,depthBuffer:!1},s=ef(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ef(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dM(r)),this._blurMaterial=pM(r,t,e)}return s}_compileMaterial(t){const e=new Fe(this._lodPlanes[0],t);this._renderer.compile(e,Sl)}_sceneToCubeUV(t,e,n,s){const a=new un(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Jh),u.toneMapping=Wi,u.autoClear=!1;const d=new qp({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),g=new Fe(new yi,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Jh),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const w=this._cubeSize;Oo(s,x*w,p>2?w:0,w,w),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===tr||t.mapping===er;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Fe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Oo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Sl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Qh[(s-r-1)%Qh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Fe(this._lodPlanes[s],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*hs-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):hs;m>hs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hs}`);const p=[];let x=0;for(let R=0;R<hs;++R){const I=R/_,b=Math.exp(-I*I/2);p.push(b),R===0?x+=b:R<m&&(x+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/x;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:w}=this;h.dTheta.value=g,h.mipInt.value=w-n;const y=this._sizeLods[s],L=3*y*(s>w-Vs?s-w+Vs:0),P=4*(this._cubeSize-y);Oo(e,L,P,3*y,2*y),l.setRenderTarget(e),l.render(f,Sl)}}function dM(i){const t=[],e=[],n=[];let s=i;const r=i-Vs+1+Zh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Vs?l=Zh[o-i+Vs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*d),w=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let P=0;P<d;P++){const R=P%3*2/3-1,I=P>2?0:-1,b=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];x.set(b,_*g*P),w.set(h,m*g*P);const S=[P,P,P,P,P,P];y.set(S,p*g*P)}const L=new Ti;L.setAttribute("position",new Yn(x,_)),L.setAttribute("uv",new Yn(w,m)),L.setAttribute("faceIndex",new Yn(y,p)),t.push(L),s>Vs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ef(i,t,e){const n=new vs(i,t,e);return n.texture.mapping=Ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function pM(i,t,e){const n=new Float32Array(hs),s=new Y(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function nf(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function sf(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Su(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mM(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===cc||l===uc,u=l===tr||l===er;if(c||u){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new tf(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new tf(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function gM(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ur("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _M(i,t,e,n){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)t.update(h[g],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let w=0,y=x.length;w<y;w+=3){const L=x[w+0],P=x[w+1],R=x[w+2];h.push(L,P,P,R,R,L)}}else if(g!==void 0){const x=g.array;_=g.version;for(let w=0,y=x.length/3-1;w<y;w+=3){const L=w+0,P=w+1,R=w+2;h.push(L,P,P,R,R,L)}}else return;const m=new(kp(h)?$p:Xp)(h,1);m.version=_;const p=r.get(f);p&&t.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function vM(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){i.drawElements(n,d,r,h*o),e.update(d,n,1)}function c(h,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,h*o,g),e.update(d,n,g))}function u(h,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function f(h,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,h,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=d[x]*_[x];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function xM(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function yM(i,t,e){const n=new WeakMap,s=new pe;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let S=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var d=S;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let L=a.attributes.position.count*y,P=1;L>t.maxTextureSize&&(P=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const R=new Float32Array(L*P*4*f),I=new Vp(R,L,P,f);I.type=gi,I.needsUpdate=!0;const b=y*4;for(let N=0;N<f;N++){const W=p[N],F=x[N],V=w[N],G=L*P*4*N;for(let O=0;O<W.count;O++){const j=O*b;g===!0&&(s.fromBufferAttribute(W,O),R[G+j+0]=s.x,R[G+j+1]=s.y,R[G+j+2]=s.z,R[G+j+3]=0),_===!0&&(s.fromBufferAttribute(F,O),R[G+j+4]=s.x,R[G+j+5]=s.y,R[G+j+6]=s.z,R[G+j+7]=0),m===!0&&(s.fromBufferAttribute(V,O),R[G+j+8]=s.x,R[G+j+9]=s.y,R[G+j+10]=s.z,R[G+j+11]=V.itemSize===4?s.w:1)}}h={count:f,texture:I,size:new ne(L,P)},n.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function SM(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Qp extends Je{constructor(t,e,n,s,r,o,a,l,c,u=js){if(u!==js&&u!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===js&&(n=_s),n===void 0&&u===ir&&(n=nr),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Nn,this.minFilter=l!==void 0?l:Nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const tm=new Je,rf=new Qp(1,1),em=new Vp,nm=new ax,im=new Kp,of=[],af=[],lf=new Float32Array(16),cf=new Float32Array(9),uf=new Float32Array(4);function pr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=of[s];if(r===void 0&&(r=new Float32Array(s),of[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ia(i,t){let e=af[t];e===void 0&&(e=new Int32Array(t),af[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function MM(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function EM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function bM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function wM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function TM(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;uf.set(n),i.uniformMatrix2fv(this.addr,!1,uf),Ne(e,n)}}function AM(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;cf.set(n),i.uniformMatrix3fv(this.addr,!1,cf),Ne(e,n)}}function CM(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;lf.set(n),i.uniformMatrix4fv(this.addr,!1,lf),Ne(e,n)}}function RM(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function PM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function LM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function IM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function DM(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function NM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function UM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function FM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function OM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(rf.compareFunction=zp,r=rf):r=tm,e.setTexture2D(t||r,s)}function BM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||nm,s)}function zM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||im,s)}function kM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||em,s)}function HM(i){switch(i){case 5126:return MM;case 35664:return EM;case 35665:return bM;case 35666:return wM;case 35674:return TM;case 35675:return AM;case 35676:return CM;case 5124:case 35670:return RM;case 35667:case 35671:return PM;case 35668:case 35672:return LM;case 35669:case 35673:return IM;case 5125:return DM;case 36294:return NM;case 36295:return UM;case 36296:return FM;case 35678:case 36198:case 36298:case 36306:case 35682:return OM;case 35679:case 36299:case 36307:return BM;case 35680:case 36300:case 36308:case 36293:return zM;case 36289:case 36303:case 36311:case 36292:return kM}}function VM(i,t){i.uniform1fv(this.addr,t)}function GM(i,t){const e=pr(t,this.size,2);i.uniform2fv(this.addr,e)}function WM(i,t){const e=pr(t,this.size,3);i.uniform3fv(this.addr,e)}function qM(i,t){const e=pr(t,this.size,4);i.uniform4fv(this.addr,e)}function XM(i,t){const e=pr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $M(i,t){const e=pr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function YM(i,t){const e=pr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function jM(i,t){i.uniform1iv(this.addr,t)}function KM(i,t){i.uniform2iv(this.addr,t)}function ZM(i,t){i.uniform3iv(this.addr,t)}function JM(i,t){i.uniform4iv(this.addr,t)}function QM(i,t){i.uniform1uiv(this.addr,t)}function tE(i,t){i.uniform2uiv(this.addr,t)}function eE(i,t){i.uniform3uiv(this.addr,t)}function nE(i,t){i.uniform4uiv(this.addr,t)}function iE(i,t,e){const n=this.cache,s=t.length,r=Ia(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||tm,r[o])}function sE(i,t,e){const n=this.cache,s=t.length,r=Ia(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||nm,r[o])}function rE(i,t,e){const n=this.cache,s=t.length,r=Ia(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||im,r[o])}function oE(i,t,e){const n=this.cache,s=t.length,r=Ia(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||em,r[o])}function aE(i){switch(i){case 5126:return VM;case 35664:return GM;case 35665:return WM;case 35666:return qM;case 35674:return XM;case 35675:return $M;case 35676:return YM;case 5124:case 35670:return jM;case 35667:case 35671:return KM;case 35668:case 35672:return ZM;case 35669:case 35673:return JM;case 5125:return QM;case 36294:return tE;case 36295:return eE;case 36296:return nE;case 35678:case 36198:case 36298:case 36306:case 35682:return iE;case 35679:case 36299:case 36307:return sE;case 35680:case 36300:case 36308:case 36293:return rE;case 36289:case 36303:case 36311:case 36292:return oE}}class lE{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=HM(e.type)}}class cE{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=aE(e.type)}}class uE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Tl=/(\w+)(\])?(\[|\.)?/g;function hf(i,t){i.seq.push(t),i.map[t.id]=t}function hE(i,t,e){const n=i.name,s=n.length;for(Tl.lastIndex=0;;){const r=Tl.exec(n),o=Tl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){hf(e,c===void 0?new lE(a,i,t):new cE(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new uE(a),hf(e,f)),e=f}}}class na{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);hE(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function ff(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const fE=37297;let dE=0;function pE(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const df=new Jt;function mE(i){ie._getMatrix(df,ie.workingColorSpace,i);const t=`mat3( ${df.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case Pa:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function pf(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+pE(i.getShaderSource(t),o)}else return s}function gE(i,t){const e=mE(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function _E(i,t){let e;switch(t){case U0:e="Linear";break;case F0:e="Reinhard";break;case O0:e="Cineon";break;case Tp:e="ACESFilmic";break;case z0:e="AgX";break;case k0:e="Neutral";break;case B0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Bo=new Y;function vE(){ie.getLuminanceCoefficients(Bo);const i=Bo.x.toFixed(4),t=Bo.y.toFixed(4),e=Bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fr).join(`
`)}function yE(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function SE(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Fr(i){return i!==""}function mf(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ME=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(i){return i.replace(ME,bE)}const EE=new Map;function bE(i,t){let e=Qt[t];if(e===void 0){const n=EE.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return kc(e)}const wE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _f(i){return i.replace(wE,TE)}function TE(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function AE(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ep?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===bp?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hi&&(t="SHADOWMAP_TYPE_VSM"),t}function CE(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case tr:case er:t="ENVMAP_TYPE_CUBE";break;case Ra:t="ENVMAP_TYPE_CUBE_UV";break}return t}function RE(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case er:t="ENVMAP_MODE_REFRACTION";break}return t}function PE(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case wp:t="ENVMAP_BLENDING_MULTIPLY";break;case D0:t="ENVMAP_BLENDING_MIX";break;case N0:t="ENVMAP_BLENDING_ADD";break}return t}function LE(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function IE(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=AE(e),c=CE(e),u=RE(e),f=PE(e),h=LE(e),d=xE(e),g=yE(r),_=s.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fr).join(`
`),p.length>0&&(p+=`
`)):(m=[vf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),p=[vf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wi?"#define TONE_MAPPING":"",e.toneMapping!==Wi?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Wi?_E("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,gE("linearToOutputTexel",e.outputColorSpace),vE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fr).join(`
`)),o=kc(o),o=mf(o,e),o=gf(o,e),a=kc(a),a=mf(a,e),a=gf(a,e),o=_f(o),a=_f(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=x+m+o,y=x+p+a,L=ff(s,s.VERTEX_SHADER,w),P=ff(s,s.FRAGMENT_SHADER,y);s.attachShader(_,L),s.attachShader(_,P),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(N){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(L).trim(),V=s.getShaderInfoLog(P).trim();let G=!0,O=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,L,P);else{const j=pf(s,L,"vertex"),H=pf(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+W+`
`+j+`
`+H)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(F===""||V==="")&&(O=!1);O&&(N.diagnostics={runnable:G,programLog:W,vertexShader:{log:F,prefix:m},fragmentShader:{log:V,prefix:p}})}s.deleteShader(L),s.deleteShader(P),I=new na(s,_),b=SE(s,_)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,fE)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dE++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=P,this}let DE=0;class NE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new UE(t),e.set(t,n)),n}}class UE{constructor(t){this.id=DE++,this.code=t,this.usedTimes=0}}function FE(i,t,e,n,s,r,o){const a=new xu,l=new NE,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,S,N,W,F){const V=W.fog,G=F.geometry,O=b.isMeshStandardMaterial?W.environment:null,j=(b.isMeshStandardMaterial?e:t).get(b.envMap||O),H=j&&j.mapping===Ra?j.image.height:null,lt=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const _t=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ct=_t!==void 0?_t.length:0;let ht=0;G.morphAttributes.position!==void 0&&(ht=1),G.morphAttributes.normal!==void 0&&(ht=2),G.morphAttributes.color!==void 0&&(ht=3);let $t,at,gt,Ct;if(lt){const fe=Gn[lt];$t=fe.vertexShader,at=fe.fragmentShader}else $t=b.vertexShader,at=b.fragmentShader,l.update(b),gt=l.getVertexShaderID(b),Ct=l.getFragmentShaderID(b);const yt=i.getRenderTarget(),zt=i.state.buffers.depth.getReversed(),Ht=F.isInstancedMesh===!0,Gt=F.isBatchedMesh===!0,ge=!!b.map,D=!!b.matcap,z=!!j,C=!!b.aoMap,ut=!!b.lightMap,tt=!!b.bumpMap,nt=!!b.normalMap,ot=!!b.displacementMap,ft=!!b.emissiveMap,et=!!b.metalnessMap,M=!!b.roughnessMap,v=b.anisotropy>0,T=b.clearcoat>0,U=b.dispersion>0,k=b.iridescence>0,B=b.sheen>0,st=b.transmission>0,K=v&&!!b.anisotropyMap,dt=T&&!!b.clearcoatMap,wt=T&&!!b.clearcoatNormalMap,Z=T&&!!b.clearcoatRoughnessMap,mt=k&&!!b.iridescenceMap,Rt=k&&!!b.iridescenceThicknessMap,kt=B&&!!b.sheenColorMap,St=B&&!!b.sheenRoughnessMap,Wt=!!b.specularMap,Yt=!!b.specularColorMap,he=!!b.specularIntensityMap,q=st&&!!b.transmissionMap,Et=st&&!!b.thicknessMap,rt=!!b.gradientMap,pt=!!b.alphaMap,Pt=b.alphaTest>0,Tt=!!b.alphaHash,Kt=!!b.extensions;let we=Wi;b.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(we=i.toneMapping);const ze={shaderID:lt,shaderType:b.type,shaderName:b.name,vertexShader:$t,fragmentShader:at,defines:b.defines,customVertexShaderID:gt,customFragmentShaderID:Ct,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Gt,batchingColor:Gt&&F._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&F.instanceColor!==null,instancingMorph:Ht&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:yt===null?i.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:fr,alphaToCoverage:!!b.alphaToCoverage,map:ge,matcap:D,envMap:z,envMapMode:z&&j.mapping,envMapCubeUVHeight:H,aoMap:C,lightMap:ut,bumpMap:tt,normalMap:nt,displacementMap:h&&ot,emissiveMap:ft,normalMapObjectSpace:nt&&b.normalMapType===W0,normalMapTangentSpace:nt&&b.normalMapType===Bp,metalnessMap:et,roughnessMap:M,anisotropy:v,anisotropyMap:K,clearcoat:T,clearcoatMap:dt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Z,dispersion:U,iridescence:k,iridescenceMap:mt,iridescenceThicknessMap:Rt,sheen:B,sheenColorMap:kt,sheenRoughnessMap:St,specularMap:Wt,specularColorMap:Yt,specularIntensityMap:he,transmission:st,transmissionMap:q,thicknessMap:Et,gradientMap:rt,opaque:b.transparent===!1&&b.blending===Ys&&b.alphaToCoverage===!1,alphaMap:pt,alphaTest:Pt,alphaHash:Tt,combine:b.combine,mapUv:ge&&_(b.map.channel),aoMapUv:C&&_(b.aoMap.channel),lightMapUv:ut&&_(b.lightMap.channel),bumpMapUv:tt&&_(b.bumpMap.channel),normalMapUv:nt&&_(b.normalMap.channel),displacementMapUv:ot&&_(b.displacementMap.channel),emissiveMapUv:ft&&_(b.emissiveMap.channel),metalnessMapUv:et&&_(b.metalnessMap.channel),roughnessMapUv:M&&_(b.roughnessMap.channel),anisotropyMapUv:K&&_(b.anisotropyMap.channel),clearcoatMapUv:dt&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:wt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:St&&_(b.sheenRoughnessMap.channel),specularMapUv:Wt&&_(b.specularMap.channel),specularColorMapUv:Yt&&_(b.specularColorMap.channel),specularIntensityMapUv:he&&_(b.specularIntensityMap.channel),transmissionMapUv:q&&_(b.transmissionMap.channel),thicknessMapUv:Et&&_(b.thicknessMap.channel),alphaMapUv:pt&&_(b.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(nt||v),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!G.attributes.uv&&(ge||pt),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:zt,skinning:F.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:ht,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:we,decodeVideoTexture:ge&&b.map.isVideoTexture===!0&&ie.getTransfer(b.map.colorSpace)===de,decodeVideoTextureEmissive:ft&&b.emissiveMap.isVideoTexture===!0&&ie.getTransfer(b.emissiveMap.colorSpace)===de,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Wn,flipSided:b.side===Ze,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Kt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&b.extensions.multiDraw===!0||Gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const N in b.defines)S.push(N),S.push(b.defines[N]);return b.isRawShaderMaterial===!1&&(x(S,b),w(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function x(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function w(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){const S=g[b.type];let N;if(S){const W=Gn[S];N=xx.clone(W.uniforms)}else N=b.uniforms;return N}function L(b,S){let N;for(let W=0,F=u.length;W<F;W++){const V=u[W];if(V.cacheKey===S){N=V,++N.usedTimes;break}}return N===void 0&&(N=new IE(i,S,b,r),u.push(N)),N}function P(b){if(--b.usedTimes===0){const S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function R(b){l.remove(b)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:L,releaseProgram:P,releaseShaderCache:R,programs:u,dispose:I}}function OE(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function BE(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function xf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function yf(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,h,d,g,_,m){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[t]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),t++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(f,h){e.length>1&&e.sort(f||BE),n.length>1&&n.sort(h||xf),s.length>1&&s.sort(h||xf)}function u(){for(let f=t,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function zE(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new yf,i.set(n,[o])):s>=r.length?(o=new yf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function kE(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Y,color:new ee};break;case"SpotLight":e={position:new Y,direction:new Y,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Y,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Y,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return i[t.id]=e,e}}}function HE(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let VE=0;function GE(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function WE(i){const t=new kE,e=HE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Y);const s=new Y,r=new be,o=new be;function a(c){let u=0,f=0,h=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,x=0,w=0,y=0,L=0,P=0,R=0;c.sort(GE);for(let b=0,S=c.length;b<S;b++){const N=c[b],W=N.color,F=N.intensity,V=N.distance,G=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=W.r*F,f+=W.g*F,h+=W.b*F;else if(N.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(N.sh.coefficients[O],F);R++}else if(N.isDirectionalLight){const O=t.get(N);if(O.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const j=N.shadow,H=e.get(N);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=G,n.directionalShadowMatrix[d]=N.shadow.matrix,x++}n.directional[d]=O,d++}else if(N.isSpotLight){const O=t.get(N);O.position.setFromMatrixPosition(N.matrixWorld),O.color.copy(W).multiplyScalar(F),O.distance=V,O.coneCos=Math.cos(N.angle),O.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),O.decay=N.decay,n.spot[_]=O;const j=N.shadow;if(N.map&&(n.spotLightMap[L]=N.map,L++,j.updateMatrices(N),N.castShadow&&P++),n.spotLightMatrix[_]=j.matrix,N.castShadow){const H=e.get(N);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=G,y++}_++}else if(N.isRectAreaLight){const O=t.get(N);O.color.copy(W).multiplyScalar(F),O.halfWidth.set(N.width*.5,0,0),O.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=O,m++}else if(N.isPointLight){const O=t.get(N);if(O.color.copy(N.color).multiplyScalar(N.intensity),O.distance=N.distance,O.decay=N.decay,N.castShadow){const j=N.shadow,H=e.get(N);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=N.shadow.matrix,w++}n.point[g]=O,g++}else if(N.isHemisphereLight){const O=t.get(N);O.skyColor.copy(N.color).multiplyScalar(F),O.groundColor.copy(N.groundColor).multiplyScalar(F),n.hemi[p]=O,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const I=n.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==x||I.numPointShadows!==w||I.numSpotShadows!==y||I.numSpotMaps!==L||I.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=y+L-P,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=R,I.directionalLength=d,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=x,I.numPointShadows=w,I.numSpotShadows=y,I.numSpotMaps=L,I.numLightProbes=R,n.version=VE++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const w=c[p];if(w.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(w.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(w.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),h++}else if(w.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Sf(i){const t=new WE(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function qE(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Sf(i),t.set(s,[a])):r>=o.length?(a=new Sf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class XE extends lo{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=V0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $E extends lo{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const YE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function KE(i,t,e){let n=new yu;const s=new ne,r=new ne,o=new pe,a=new XE({depthPacking:G0}),l=new $E,c={},u=e.maxTextureSize,f={[Yi]:Ze,[Ze]:Yi,[Wn]:Wn},h=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:YE,fragmentShader:jE}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ti;g.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Fe(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ep;let p=this.type;this.render=function(P,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const b=i.getRenderTarget(),S=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Gi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const F=p!==hi&&this.type===hi,V=p===hi&&this.type!==hi;for(let G=0,O=P.length;G<O;G++){const j=P[G],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const lt=H.getFrameExtents();if(s.multiply(lt),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/lt.x),s.x=r.x*lt.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/lt.y),s.y=r.y*lt.y,H.mapSize.y=r.y)),H.map===null||F===!0||V===!0){const ct=this.type!==hi?{minFilter:Nn,magFilter:Nn}:{};H.map!==null&&H.map.dispose(),H.map=new vs(s.x,s.y,ct),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const _t=H.getViewportCount();for(let ct=0;ct<_t;ct++){const ht=H.getViewport(ct);o.set(r.x*ht.x,r.y*ht.y,r.x*ht.z,r.y*ht.w),W.viewport(o),H.updateMatrices(j,ct),n=H.getFrustum(),y(R,I,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===hi&&x(H,I),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,N)};function x(P,R){const I=t.update(_);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new vs(s.x,s.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(R,null,I,h,_,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(R,null,I,d,_,null)}function w(P,R,I,b){let S=null;const N=I.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(N!==void 0)S=N;else if(S=I.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const W=S.uuid,F=R.uuid;let V=c[W];V===void 0&&(V={},c[W]=V);let G=V[F];G===void 0&&(G=S.clone(),V[F]=G,R.addEventListener("dispose",L)),S=G}if(S.visible=R.visible,S.wireframe=R.wireframe,b===hi?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:f[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const W=i.properties.get(S);W.light=I}return S}function y(P,R,I,b,S){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===hi)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,P.matrixWorld);const F=t.update(P),V=P.material;if(Array.isArray(V)){const G=F.groups;for(let O=0,j=G.length;O<j;O++){const H=G[O],lt=V[H.materialIndex];if(lt&&lt.visible){const _t=w(P,lt,b,S);P.onBeforeShadow(i,P,R,I,F,_t,H),i.renderBufferDirect(I,null,F,_t,P,H),P.onAfterShadow(i,P,R,I,F,_t,H)}}}else if(V.visible){const G=w(P,V,b,S);P.onBeforeShadow(i,P,R,I,F,G,null),i.renderBufferDirect(I,null,F,G,P,null),P.onAfterShadow(i,P,R,I,F,G,null)}}const W=P.children;for(let F=0,V=W.length;F<V;F++)y(W[F],R,I,b,S)}function L(P){P.target.removeEventListener("dispose",L);for(const I in c){const b=c[I],S=P.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const ZE={[nc]:ic,[sc]:ac,[rc]:lc,[Qs]:oc,[ic]:nc,[ac]:sc,[lc]:rc,[oc]:Qs};function JE(i,t){function e(){let q=!1;const Et=new pe;let rt=null;const pt=new pe(0,0,0,0);return{setMask:function(Pt){rt!==Pt&&!q&&(i.colorMask(Pt,Pt,Pt,Pt),rt=Pt)},setLocked:function(Pt){q=Pt},setClear:function(Pt,Tt,Kt,we,ze){ze===!0&&(Pt*=we,Tt*=we,Kt*=we),Et.set(Pt,Tt,Kt,we),pt.equals(Et)===!1&&(i.clearColor(Pt,Tt,Kt,we),pt.copy(Et))},reset:function(){q=!1,rt=null,pt.set(-1,0,0,0)}}}function n(){let q=!1,Et=!1,rt=null,pt=null,Pt=null;return{setReversed:function(Tt){if(Et!==Tt){const Kt=t.get("EXT_clip_control");Et?Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.ZERO_TO_ONE_EXT):Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.NEGATIVE_ONE_TO_ONE_EXT);const we=Pt;Pt=null,this.setClear(we)}Et=Tt},getReversed:function(){return Et},setTest:function(Tt){Tt?yt(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function(Tt){rt!==Tt&&!q&&(i.depthMask(Tt),rt=Tt)},setFunc:function(Tt){if(Et&&(Tt=ZE[Tt]),pt!==Tt){switch(Tt){case nc:i.depthFunc(i.NEVER);break;case ic:i.depthFunc(i.ALWAYS);break;case sc:i.depthFunc(i.LESS);break;case Qs:i.depthFunc(i.LEQUAL);break;case rc:i.depthFunc(i.EQUAL);break;case oc:i.depthFunc(i.GEQUAL);break;case ac:i.depthFunc(i.GREATER);break;case lc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=Tt}},setLocked:function(Tt){q=Tt},setClear:function(Tt){Pt!==Tt&&(Et&&(Tt=1-Tt),i.clearDepth(Tt),Pt=Tt)},reset:function(){q=!1,rt=null,pt=null,Pt=null,Et=!1}}}function s(){let q=!1,Et=null,rt=null,pt=null,Pt=null,Tt=null,Kt=null,we=null,ze=null;return{setTest:function(fe){q||(fe?yt(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function(fe){Et!==fe&&!q&&(i.stencilMask(fe),Et=fe)},setFunc:function(fe,Mn,Qn){(rt!==fe||pt!==Mn||Pt!==Qn)&&(i.stencilFunc(fe,Mn,Qn),rt=fe,pt=Mn,Pt=Qn)},setOp:function(fe,Mn,Qn){(Tt!==fe||Kt!==Mn||we!==Qn)&&(i.stencilOp(fe,Mn,Qn),Tt=fe,Kt=Mn,we=Qn)},setLocked:function(fe){q=fe},setClear:function(fe){ze!==fe&&(i.clearStencil(fe),ze=fe)},reset:function(){q=!1,Et=null,rt=null,pt=null,Pt=null,Tt=null,Kt=null,we=null,ze=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,x=null,w=null,y=null,L=null,P=null,R=new ee(0,0,0),I=0,b=!1,S=null,N=null,W=null,F=null,V=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,j=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),O=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),O=j>=2);let lt=null,_t={};const ct=i.getParameter(i.SCISSOR_BOX),ht=i.getParameter(i.VIEWPORT),$t=new pe().fromArray(ct),at=new pe().fromArray(ht);function gt(q,Et,rt,pt){const Pt=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(q,Tt),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Kt=0;Kt<rt;Kt++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(Et,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(Et+Kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return Tt}const Ct={};Ct[i.TEXTURE_2D]=gt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ct[i.TEXTURE_CUBE_MAP]=gt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ct[i.TEXTURE_2D_ARRAY]=gt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ct[i.TEXTURE_3D]=gt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),yt(i.DEPTH_TEST),o.setFunc(Qs),tt(!1),nt(bh),yt(i.CULL_FACE),C(Gi);function yt(q){u[q]!==!0&&(i.enable(q),u[q]=!0)}function zt(q){u[q]!==!1&&(i.disable(q),u[q]=!1)}function Ht(q,Et){return f[q]!==Et?(i.bindFramebuffer(q,Et),f[q]=Et,q===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Et),q===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Et),!0):!1}function Gt(q,Et){let rt=d,pt=!1;if(q){rt=h.get(Et),rt===void 0&&(rt=[],h.set(Et,rt));const Pt=q.textures;if(rt.length!==Pt.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,Kt=Pt.length;Tt<Kt;Tt++)rt[Tt]=i.COLOR_ATTACHMENT0+Tt;rt.length=Pt.length,pt=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,pt=!0);pt&&i.drawBuffers(rt)}function ge(q){return g!==q?(i.useProgram(q),g=q,!0):!1}const D={[us]:i.FUNC_ADD,[g0]:i.FUNC_SUBTRACT,[_0]:i.FUNC_REVERSE_SUBTRACT};D[v0]=i.MIN,D[x0]=i.MAX;const z={[y0]:i.ZERO,[S0]:i.ONE,[M0]:i.SRC_COLOR,[tc]:i.SRC_ALPHA,[C0]:i.SRC_ALPHA_SATURATE,[T0]:i.DST_COLOR,[b0]:i.DST_ALPHA,[E0]:i.ONE_MINUS_SRC_COLOR,[ec]:i.ONE_MINUS_SRC_ALPHA,[A0]:i.ONE_MINUS_DST_COLOR,[w0]:i.ONE_MINUS_DST_ALPHA,[R0]:i.CONSTANT_COLOR,[P0]:i.ONE_MINUS_CONSTANT_COLOR,[L0]:i.CONSTANT_ALPHA,[I0]:i.ONE_MINUS_CONSTANT_ALPHA};function C(q,Et,rt,pt,Pt,Tt,Kt,we,ze,fe){if(q===Gi){_===!0&&(zt(i.BLEND),_=!1);return}if(_===!1&&(yt(i.BLEND),_=!0),q!==m0){if(q!==m||fe!==b){if((p!==us||y!==us)&&(i.blendEquation(i.FUNC_ADD),p=us,y=us),fe)switch(q){case Ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wh:i.blendFunc(i.ONE,i.ONE);break;case Th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ah:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ah:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}x=null,w=null,L=null,P=null,R.set(0,0,0),I=0,m=q,b=fe}return}Pt=Pt||Et,Tt=Tt||rt,Kt=Kt||pt,(Et!==p||Pt!==y)&&(i.blendEquationSeparate(D[Et],D[Pt]),p=Et,y=Pt),(rt!==x||pt!==w||Tt!==L||Kt!==P)&&(i.blendFuncSeparate(z[rt],z[pt],z[Tt],z[Kt]),x=rt,w=pt,L=Tt,P=Kt),(we.equals(R)===!1||ze!==I)&&(i.blendColor(we.r,we.g,we.b,ze),R.copy(we),I=ze),m=q,b=!1}function ut(q,Et){q.side===Wn?zt(i.CULL_FACE):yt(i.CULL_FACE);let rt=q.side===Ze;Et&&(rt=!rt),tt(rt),q.blending===Ys&&q.transparent===!1?C(Gi):C(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),o.setFunc(q.depthFunc),o.setTest(q.depthTest),o.setMask(q.depthWrite),r.setMask(q.colorWrite);const pt=q.stencilWrite;a.setTest(pt),pt&&(a.setMask(q.stencilWriteMask),a.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),a.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),ft(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?yt(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(q){S!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),S=q)}function nt(q){q!==d0?(yt(i.CULL_FACE),q!==N&&(q===bh?i.cullFace(i.BACK):q===p0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),N=q}function ot(q){q!==W&&(O&&i.lineWidth(q),W=q)}function ft(q,Et,rt){q?(yt(i.POLYGON_OFFSET_FILL),(F!==Et||V!==rt)&&(i.polygonOffset(Et,rt),F=Et,V=rt)):zt(i.POLYGON_OFFSET_FILL)}function et(q){q?yt(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function M(q){q===void 0&&(q=i.TEXTURE0+G-1),lt!==q&&(i.activeTexture(q),lt=q)}function v(q,Et,rt){rt===void 0&&(lt===null?rt=i.TEXTURE0+G-1:rt=lt);let pt=_t[rt];pt===void 0&&(pt={type:void 0,texture:void 0},_t[rt]=pt),(pt.type!==q||pt.texture!==Et)&&(lt!==rt&&(i.activeTexture(rt),lt=rt),i.bindTexture(q,Et||Ct[q]),pt.type=q,pt.texture=Et)}function T(){const q=_t[lt];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function U(){try{i.compressedTexImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function k(){try{i.compressedTexImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function B(){try{i.texSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function st(){try{i.texSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function K(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function wt(){try{i.texStorage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Z(){try{i.texStorage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function mt(){try{i.texImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Rt(){try{i.texImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function kt(q){$t.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),$t.copy(q))}function St(q){at.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),at.copy(q))}function Wt(q,Et){let rt=c.get(Et);rt===void 0&&(rt=new WeakMap,c.set(Et,rt));let pt=rt.get(q);pt===void 0&&(pt=i.getUniformBlockIndex(Et,q.name),rt.set(q,pt))}function Yt(q,Et){const pt=c.get(Et).get(q);l.get(Et)!==pt&&(i.uniformBlockBinding(Et,pt,q.__bindingPointIndex),l.set(Et,pt))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},lt=null,_t={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,x=null,w=null,y=null,L=null,P=null,R=new ee(0,0,0),I=0,b=!1,S=null,N=null,W=null,F=null,V=null,$t.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:yt,disable:zt,bindFramebuffer:Ht,drawBuffers:Gt,useProgram:ge,setBlending:C,setMaterial:ut,setFlipSided:tt,setCullFace:nt,setLineWidth:ot,setPolygonOffset:ft,setScissorTest:et,activeTexture:M,bindTexture:v,unbindTexture:T,compressedTexImage2D:U,compressedTexImage3D:k,texImage2D:mt,texImage3D:Rt,updateUBOMapping:Wt,uniformBlockBinding:Yt,texStorage2D:wt,texStorage3D:Z,texSubImage2D:B,texSubImage3D:st,compressedTexSubImage2D:K,compressedTexSubImage3D:dt,scissor:kt,viewport:St,reset:he}}function Mf(i,t,e,n){const s=QE(n);switch(e){case Lp:return i*t;case Dp:return i*t;case Np:return i*t*2;case Up:return i*t/s.components*s.byteLength;case mu:return i*t/s.components*s.byteLength;case Fp:return i*t*2/s.components*s.byteLength;case gu:return i*t*2/s.components*s.byteLength;case Ip:return i*t*3/s.components*s.byteLength;case Pn:return i*t*4/s.components*s.byteLength;case _u:return i*t*4/s.components*s.byteLength;case Zo:case Jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qo:case ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pc:case gc:return Math.max(i,16)*Math.max(t,8)/4;case dc:case mc:return Math.max(i,8)*Math.max(t,8)/2;case _c:case vc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Mc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case bc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case wc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ac:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Cc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Rc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Pc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Lc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ic:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Dc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ea:case Nc:case Uc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Op:case Fc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Oc:case Bc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function QE(i){switch(i){case bi:case Cp:return{byteLength:1,components:1};case to:case Rp:case ro:return{byteLength:2,components:1};case du:case pu:return{byteLength:2,components:4};case _s:case fu:case gi:return{byteLength:4,components:1};case Pp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function tb(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,v){return d?new OffscreenCanvas(M,v):ha("canvas")}function _(M,v,T){let U=1;const k=et(M);if((k.width>T||k.height>T)&&(U=T/Math.max(k.width,k.height)),U<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const B=Math.floor(U*k.width),st=Math.floor(U*k.height);f===void 0&&(f=g(B,st));const K=v?g(B,st):f;return K.width=B,K.height=st,K.getContext("2d").drawImage(M,0,0,B,st),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+B+"x"+st+")."),K}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),M;return M}function m(M){return M.generateMipmaps}function p(M){i.generateMipmap(M)}function x(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(M,v,T,U,k=!1){if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let B=v;if(v===i.RED&&(T===i.FLOAT&&(B=i.R32F),T===i.HALF_FLOAT&&(B=i.R16F),T===i.UNSIGNED_BYTE&&(B=i.R8)),v===i.RED_INTEGER&&(T===i.UNSIGNED_BYTE&&(B=i.R8UI),T===i.UNSIGNED_SHORT&&(B=i.R16UI),T===i.UNSIGNED_INT&&(B=i.R32UI),T===i.BYTE&&(B=i.R8I),T===i.SHORT&&(B=i.R16I),T===i.INT&&(B=i.R32I)),v===i.RG&&(T===i.FLOAT&&(B=i.RG32F),T===i.HALF_FLOAT&&(B=i.RG16F),T===i.UNSIGNED_BYTE&&(B=i.RG8)),v===i.RG_INTEGER&&(T===i.UNSIGNED_BYTE&&(B=i.RG8UI),T===i.UNSIGNED_SHORT&&(B=i.RG16UI),T===i.UNSIGNED_INT&&(B=i.RG32UI),T===i.BYTE&&(B=i.RG8I),T===i.SHORT&&(B=i.RG16I),T===i.INT&&(B=i.RG32I)),v===i.RGB_INTEGER&&(T===i.UNSIGNED_BYTE&&(B=i.RGB8UI),T===i.UNSIGNED_SHORT&&(B=i.RGB16UI),T===i.UNSIGNED_INT&&(B=i.RGB32UI),T===i.BYTE&&(B=i.RGB8I),T===i.SHORT&&(B=i.RGB16I),T===i.INT&&(B=i.RGB32I)),v===i.RGBA_INTEGER&&(T===i.UNSIGNED_BYTE&&(B=i.RGBA8UI),T===i.UNSIGNED_SHORT&&(B=i.RGBA16UI),T===i.UNSIGNED_INT&&(B=i.RGBA32UI),T===i.BYTE&&(B=i.RGBA8I),T===i.SHORT&&(B=i.RGBA16I),T===i.INT&&(B=i.RGBA32I)),v===i.RGB&&T===i.UNSIGNED_INT_5_9_9_9_REV&&(B=i.RGB9_E5),v===i.RGBA){const st=k?Pa:ie.getTransfer(U);T===i.FLOAT&&(B=i.RGBA32F),T===i.HALF_FLOAT&&(B=i.RGBA16F),T===i.UNSIGNED_BYTE&&(B=st===de?i.SRGB8_ALPHA8:i.RGBA8),T===i.UNSIGNED_SHORT_4_4_4_4&&(B=i.RGBA4),T===i.UNSIGNED_SHORT_5_5_5_1&&(B=i.RGB5_A1)}return(B===i.R16F||B===i.R32F||B===i.RG16F||B===i.RG32F||B===i.RGBA16F||B===i.RGBA32F)&&t.get("EXT_color_buffer_float"),B}function y(M,v){let T;return M?v===null||v===_s||v===nr?T=i.DEPTH24_STENCIL8:v===gi?T=i.DEPTH32F_STENCIL8:v===to&&(T=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===_s||v===nr?T=i.DEPTH_COMPONENT24:v===gi?T=i.DEPTH_COMPONENT32F:v===to&&(T=i.DEPTH_COMPONENT16),T}function L(M,v){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==Nn&&M.minFilter!==qn?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function P(M){const v=M.target;v.removeEventListener("dispose",P),I(v),v.isVideoTexture&&u.delete(v)}function R(M){const v=M.target;v.removeEventListener("dispose",R),S(v)}function I(M){const v=n.get(M);if(v.__webglInit===void 0)return;const T=M.source,U=h.get(T);if(U){const k=U[v.__cacheKey];k.usedTimes--,k.usedTimes===0&&b(M),Object.keys(U).length===0&&h.delete(T)}n.remove(M)}function b(M){const v=n.get(M);i.deleteTexture(v.__webglTexture);const T=M.source,U=h.get(T);delete U[v.__cacheKey],o.memory.textures--}function S(M){const v=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(v.__webglFramebuffer[U]))for(let k=0;k<v.__webglFramebuffer[U].length;k++)i.deleteFramebuffer(v.__webglFramebuffer[U][k]);else i.deleteFramebuffer(v.__webglFramebuffer[U]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[U])}else{if(Array.isArray(v.__webglFramebuffer))for(let U=0;U<v.__webglFramebuffer.length;U++)i.deleteFramebuffer(v.__webglFramebuffer[U]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let U=0;U<v.__webglColorRenderbuffer.length;U++)v.__webglColorRenderbuffer[U]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[U]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const T=M.textures;for(let U=0,k=T.length;U<k;U++){const B=n.get(T[U]);B.__webglTexture&&(i.deleteTexture(B.__webglTexture),o.memory.textures--),n.remove(T[U])}n.remove(M)}let N=0;function W(){N=0}function F(){const M=N;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),N+=1,M}function V(M){const v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function G(M,v){const T=n.get(M);if(M.isVideoTexture&&ot(M),M.isRenderTargetTexture===!1&&M.version>0&&T.__version!==M.version){const U=M.image;if(U===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(T,M,v);return}}e.bindTexture(i.TEXTURE_2D,T.__webglTexture,i.TEXTURE0+v)}function O(M,v){const T=n.get(M);if(M.version>0&&T.__version!==M.version){at(T,M,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,T.__webglTexture,i.TEXTURE0+v)}function j(M,v){const T=n.get(M);if(M.version>0&&T.__version!==M.version){at(T,M,v);return}e.bindTexture(i.TEXTURE_3D,T.__webglTexture,i.TEXTURE0+v)}function H(M,v){const T=n.get(M);if(M.version>0&&T.__version!==M.version){gt(T,M,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+v)}const lt={[hc]:i.REPEAT,[ds]:i.CLAMP_TO_EDGE,[fc]:i.MIRRORED_REPEAT},_t={[Nn]:i.NEAREST,[H0]:i.NEAREST_MIPMAP_NEAREST,[vo]:i.NEAREST_MIPMAP_LINEAR,[qn]:i.LINEAR,[Ja]:i.LINEAR_MIPMAP_NEAREST,[ps]:i.LINEAR_MIPMAP_LINEAR},ct={[q0]:i.NEVER,[Z0]:i.ALWAYS,[X0]:i.LESS,[zp]:i.LEQUAL,[$0]:i.EQUAL,[K0]:i.GEQUAL,[Y0]:i.GREATER,[j0]:i.NOTEQUAL};function ht(M,v){if(v.type===gi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===qn||v.magFilter===Ja||v.magFilter===vo||v.magFilter===ps||v.minFilter===qn||v.minFilter===Ja||v.minFilter===vo||v.minFilter===ps)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,lt[v.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,lt[v.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,lt[v.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,_t[v.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,_t[v.minFilter]),v.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,ct[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Nn||v.minFilter!==vo&&v.minFilter!==ps||v.type===gi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const T=t.get("EXT_texture_filter_anisotropic");i.texParameterf(M,T.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function $t(M,v){let T=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",P));const U=v.source;let k=h.get(U);k===void 0&&(k={},h.set(U,k));const B=V(v);if(B!==M.__cacheKey){k[B]===void 0&&(k[B]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,T=!0),k[B].usedTimes++;const st=k[M.__cacheKey];st!==void 0&&(k[M.__cacheKey].usedTimes--,st.usedTimes===0&&b(v)),M.__cacheKey=B,M.__webglTexture=k[B].texture}return T}function at(M,v,T){let U=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(U=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(U=i.TEXTURE_3D);const k=$t(M,v),B=v.source;e.bindTexture(U,M.__webglTexture,i.TEXTURE0+T);const st=n.get(B);if(B.version!==st.__version||k===!0){e.activeTexture(i.TEXTURE0+T);const K=ie.getPrimaries(ie.workingColorSpace),dt=v.colorSpace===zi?null:ie.getPrimaries(v.colorSpace),wt=v.colorSpace===zi||K===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let Z=_(v.image,!1,s.maxTextureSize);Z=ft(v,Z);const mt=r.convert(v.format,v.colorSpace),Rt=r.convert(v.type);let kt=w(v.internalFormat,mt,Rt,v.colorSpace,v.isVideoTexture);ht(U,v);let St;const Wt=v.mipmaps,Yt=v.isVideoTexture!==!0,he=st.__version===void 0||k===!0,q=B.dataReady,Et=L(v,Z);if(v.isDepthTexture)kt=y(v.format===ir,v.type),he&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,kt,Z.width,Z.height):e.texImage2D(i.TEXTURE_2D,0,kt,Z.width,Z.height,0,mt,Rt,null));else if(v.isDataTexture)if(Wt.length>0){Yt&&he&&e.texStorage2D(i.TEXTURE_2D,Et,kt,Wt[0].width,Wt[0].height);for(let rt=0,pt=Wt.length;rt<pt;rt++)St=Wt[rt],Yt?q&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,St.width,St.height,mt,Rt,St.data):e.texImage2D(i.TEXTURE_2D,rt,kt,St.width,St.height,0,mt,Rt,St.data);v.generateMipmaps=!1}else Yt?(he&&e.texStorage2D(i.TEXTURE_2D,Et,kt,Z.width,Z.height),q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Z.width,Z.height,mt,Rt,Z.data)):e.texImage2D(i.TEXTURE_2D,0,kt,Z.width,Z.height,0,mt,Rt,Z.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Yt&&he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,kt,Wt[0].width,Wt[0].height,Z.depth);for(let rt=0,pt=Wt.length;rt<pt;rt++)if(St=Wt[rt],v.format!==Pn)if(mt!==null)if(Yt){if(q)if(v.layerUpdates.size>0){const Pt=Mf(St.width,St.height,v.format,v.type);for(const Tt of v.layerUpdates){const Kt=St.data.subarray(Tt*Pt/St.data.BYTES_PER_ELEMENT,(Tt+1)*Pt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,Tt,St.width,St.height,1,mt,Kt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,St.width,St.height,Z.depth,mt,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,kt,St.width,St.height,Z.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,St.width,St.height,Z.depth,mt,Rt,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,kt,St.width,St.height,Z.depth,0,mt,Rt,St.data)}else{Yt&&he&&e.texStorage2D(i.TEXTURE_2D,Et,kt,Wt[0].width,Wt[0].height);for(let rt=0,pt=Wt.length;rt<pt;rt++)St=Wt[rt],v.format!==Pn?mt!==null?Yt?q&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,St.width,St.height,mt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,kt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?q&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,St.width,St.height,mt,Rt,St.data):e.texImage2D(i.TEXTURE_2D,rt,kt,St.width,St.height,0,mt,Rt,St.data)}else if(v.isDataArrayTexture)if(Yt){if(he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,kt,Z.width,Z.height,Z.depth),q)if(v.layerUpdates.size>0){const rt=Mf(Z.width,Z.height,v.format,v.type);for(const pt of v.layerUpdates){const Pt=Z.data.subarray(pt*rt/Z.data.BYTES_PER_ELEMENT,(pt+1)*rt/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pt,Z.width,Z.height,1,mt,Rt,Pt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,mt,Rt,Z.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,kt,Z.width,Z.height,Z.depth,0,mt,Rt,Z.data);else if(v.isData3DTexture)Yt?(he&&e.texStorage3D(i.TEXTURE_3D,Et,kt,Z.width,Z.height,Z.depth),q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,mt,Rt,Z.data)):e.texImage3D(i.TEXTURE_3D,0,kt,Z.width,Z.height,Z.depth,0,mt,Rt,Z.data);else if(v.isFramebufferTexture){if(he)if(Yt)e.texStorage2D(i.TEXTURE_2D,Et,kt,Z.width,Z.height);else{let rt=Z.width,pt=Z.height;for(let Pt=0;Pt<Et;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,kt,rt,pt,0,mt,Rt,null),rt>>=1,pt>>=1}}else if(Wt.length>0){if(Yt&&he){const rt=et(Wt[0]);e.texStorage2D(i.TEXTURE_2D,Et,kt,rt.width,rt.height)}for(let rt=0,pt=Wt.length;rt<pt;rt++)St=Wt[rt],Yt?q&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,mt,Rt,St):e.texImage2D(i.TEXTURE_2D,rt,kt,mt,Rt,St);v.generateMipmaps=!1}else if(Yt){if(he){const rt=et(Z);e.texStorage2D(i.TEXTURE_2D,Et,kt,rt.width,rt.height)}q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Rt,Z)}else e.texImage2D(i.TEXTURE_2D,0,kt,mt,Rt,Z);m(v)&&p(U),st.__version=B.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function gt(M,v,T){if(v.image.length!==6)return;const U=$t(M,v),k=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+T);const B=n.get(k);if(k.version!==B.__version||U===!0){e.activeTexture(i.TEXTURE0+T);const st=ie.getPrimaries(ie.workingColorSpace),K=v.colorSpace===zi?null:ie.getPrimaries(v.colorSpace),dt=v.colorSpace===zi||st===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const wt=v.isCompressedTexture||v.image[0].isCompressedTexture,Z=v.image[0]&&v.image[0].isDataTexture,mt=[];for(let pt=0;pt<6;pt++)!wt&&!Z?mt[pt]=_(v.image[pt],!0,s.maxCubemapSize):mt[pt]=Z?v.image[pt].image:v.image[pt],mt[pt]=ft(v,mt[pt]);const Rt=mt[0],kt=r.convert(v.format,v.colorSpace),St=r.convert(v.type),Wt=w(v.internalFormat,kt,St,v.colorSpace),Yt=v.isVideoTexture!==!0,he=B.__version===void 0||U===!0,q=k.dataReady;let Et=L(v,Rt);ht(i.TEXTURE_CUBE_MAP,v);let rt;if(wt){Yt&&he&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,Wt,Rt.width,Rt.height);for(let pt=0;pt<6;pt++){rt=mt[pt].mipmaps;for(let Pt=0;Pt<rt.length;Pt++){const Tt=rt[Pt];v.format!==Pn?kt!==null?Yt?q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Pt,0,0,Tt.width,Tt.height,kt,Tt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Pt,Wt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Pt,0,0,Tt.width,Tt.height,kt,St,Tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Pt,Wt,Tt.width,Tt.height,0,kt,St,Tt.data)}}}else{if(rt=v.mipmaps,Yt&&he){rt.length>0&&Et++;const pt=et(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,Wt,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(Z){Yt?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,mt[pt].width,mt[pt].height,kt,St,mt[pt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,Wt,mt[pt].width,mt[pt].height,0,kt,St,mt[pt].data);for(let Pt=0;Pt<rt.length;Pt++){const Kt=rt[Pt].image[pt].image;Yt?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Pt+1,0,0,Kt.width,Kt.height,kt,St,Kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Pt+1,Wt,Kt.width,Kt.height,0,kt,St,Kt.data)}}else{Yt?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,kt,St,mt[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,Wt,kt,St,mt[pt]);for(let Pt=0;Pt<rt.length;Pt++){const Tt=rt[Pt];Yt?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Pt+1,0,0,kt,St,Tt.image[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Pt+1,Wt,kt,St,Tt.image[pt])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),B.__version=k.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function Ct(M,v,T,U,k,B){const st=r.convert(T.format,T.colorSpace),K=r.convert(T.type),dt=w(T.internalFormat,st,K,T.colorSpace),wt=n.get(v),Z=n.get(T);if(Z.__renderTarget=v,!wt.__hasExternalTextures){const mt=Math.max(1,v.width>>B),Rt=Math.max(1,v.height>>B);k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?e.texImage3D(k,B,dt,mt,Rt,v.depth,0,st,K,null):e.texImage2D(k,B,dt,mt,Rt,0,st,K,null)}e.bindFramebuffer(i.FRAMEBUFFER,M),nt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,U,k,Z.__webglTexture,0,tt(v)):(k===i.TEXTURE_2D||k>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,U,k,Z.__webglTexture,B),e.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(M,v,T){if(i.bindRenderbuffer(i.RENDERBUFFER,M),v.depthBuffer){const U=v.depthTexture,k=U&&U.isDepthTexture?U.type:null,B=y(v.stencilBuffer,k),st=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=tt(v);nt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,B,v.width,v.height):T?i.renderbufferStorageMultisample(i.RENDERBUFFER,K,B,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,B,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,M)}else{const U=v.textures;for(let k=0;k<U.length;k++){const B=U[k],st=r.convert(B.format,B.colorSpace),K=r.convert(B.type),dt=w(B.internalFormat,st,K,B.colorSpace),wt=tt(v);T&&nt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,dt,v.width,v.height):nt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt,dt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,dt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const U=n.get(v.depthTexture);U.__renderTarget=v,(!U.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G(v.depthTexture,0);const k=U.__webglTexture,B=tt(v);if(v.depthTexture.format===js)nt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,k,0,B):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,k,0);else if(v.depthTexture.format===ir)nt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,k,0,B):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function Ht(M){const v=n.get(M),T=M.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==M.depthTexture){const U=M.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),U){const k=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,U.removeEventListener("dispose",k)};U.addEventListener("dispose",k),v.__depthDisposeCallback=k}v.__boundDepthTexture=U}if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(T)throw new Error("target.depthTexture not supported in Cube render targets");zt(v.__webglFramebuffer,M)}else if(T){v.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[U]),v.__webglDepthbuffer[U]===void 0)v.__webglDepthbuffer[U]=i.createRenderbuffer(),yt(v.__webglDepthbuffer[U],M,!1);else{const k=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=v.__webglDepthbuffer[U];i.bindRenderbuffer(i.RENDERBUFFER,B),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,B)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),yt(v.__webglDepthbuffer,M,!1);else{const U=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,U,i.RENDERBUFFER,k)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(M,v,T){const U=n.get(M);v!==void 0&&Ct(U.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),T!==void 0&&Ht(M)}function ge(M){const v=M.texture,T=n.get(M),U=n.get(v);M.addEventListener("dispose",R);const k=M.textures,B=M.isWebGLCubeRenderTarget===!0,st=k.length>1;if(st||(U.__webglTexture===void 0&&(U.__webglTexture=i.createTexture()),U.__version=v.version,o.memory.textures++),B){T.__webglFramebuffer=[];for(let K=0;K<6;K++)if(v.mipmaps&&v.mipmaps.length>0){T.__webglFramebuffer[K]=[];for(let dt=0;dt<v.mipmaps.length;dt++)T.__webglFramebuffer[K][dt]=i.createFramebuffer()}else T.__webglFramebuffer[K]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){T.__webglFramebuffer=[];for(let K=0;K<v.mipmaps.length;K++)T.__webglFramebuffer[K]=i.createFramebuffer()}else T.__webglFramebuffer=i.createFramebuffer();if(st)for(let K=0,dt=k.length;K<dt;K++){const wt=n.get(k[K]);wt.__webglTexture===void 0&&(wt.__webglTexture=i.createTexture(),o.memory.textures++)}if(M.samples>0&&nt(M)===!1){T.__webglMultisampledFramebuffer=i.createFramebuffer(),T.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,T.__webglMultisampledFramebuffer);for(let K=0;K<k.length;K++){const dt=k[K];T.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,T.__webglColorRenderbuffer[K]);const wt=r.convert(dt.format,dt.colorSpace),Z=r.convert(dt.type),mt=w(dt.internalFormat,wt,Z,dt.colorSpace,M.isXRRenderTarget===!0),Rt=tt(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,mt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,T.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(T.__webglDepthRenderbuffer=i.createRenderbuffer(),yt(T.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(B){e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture),ht(i.TEXTURE_CUBE_MAP,v);for(let K=0;K<6;K++)if(v.mipmaps&&v.mipmaps.length>0)for(let dt=0;dt<v.mipmaps.length;dt++)Ct(T.__webglFramebuffer[K][dt],M,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt);else Ct(T.__webglFramebuffer[K],M,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);m(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){for(let K=0,dt=k.length;K<dt;K++){const wt=k[K],Z=n.get(wt);e.bindTexture(i.TEXTURE_2D,Z.__webglTexture),ht(i.TEXTURE_2D,wt),Ct(T.__webglFramebuffer,M,wt,i.COLOR_ATTACHMENT0+K,i.TEXTURE_2D,0),m(wt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let K=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(K=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,U.__webglTexture),ht(K,v),v.mipmaps&&v.mipmaps.length>0)for(let dt=0;dt<v.mipmaps.length;dt++)Ct(T.__webglFramebuffer[dt],M,v,i.COLOR_ATTACHMENT0,K,dt);else Ct(T.__webglFramebuffer,M,v,i.COLOR_ATTACHMENT0,K,0);m(v)&&p(K),e.unbindTexture()}M.depthBuffer&&Ht(M)}function D(M){const v=M.textures;for(let T=0,U=v.length;T<U;T++){const k=v[T];if(m(k)){const B=x(M),st=n.get(k).__webglTexture;e.bindTexture(B,st),p(B),e.unbindTexture()}}}const z=[],C=[];function ut(M){if(M.samples>0){if(nt(M)===!1){const v=M.textures,T=M.width,U=M.height;let k=i.COLOR_BUFFER_BIT;const B=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=n.get(M),K=v.length>1;if(K)for(let dt=0;dt<v.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let dt=0;dt<v.length;dt++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(k|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(k|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,st.__webglColorRenderbuffer[dt]);const wt=n.get(v[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,wt,0)}i.blitFramebuffer(0,0,T,U,0,0,T,U,k,i.NEAREST),l===!0&&(z.length=0,C.length=0,z.push(i.COLOR_ATTACHMENT0+dt),M.depthBuffer&&M.resolveDepthBuffer===!1&&(z.push(B),C.push(B),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,z))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let dt=0;dt<v.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,st.__webglColorRenderbuffer[dt]);const wt=n.get(v[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const v=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function tt(M){return Math.min(s.maxSamples,M.samples)}function nt(M){const v=n.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ot(M){const v=o.render.frame;u.get(M)!==v&&(u.set(M,v),M.update())}function ft(M,v){const T=M.colorSpace,U=M.format,k=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||T!==fr&&T!==zi&&(ie.getTransfer(T)===de?(U!==Pn||k!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",T)),v}function et(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=W,this.setTexture2D=G,this.setTexture2DArray=O,this.setTexture3D=j,this.setTextureCube=H,this.rebindTextures=Gt,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=nt}function eb(i,t){function e(n,s=zi){let r;const o=ie.getTransfer(s);if(n===bi)return i.UNSIGNED_BYTE;if(n===du)return i.UNSIGNED_SHORT_4_4_4_4;if(n===pu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Pp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cp)return i.BYTE;if(n===Rp)return i.SHORT;if(n===to)return i.UNSIGNED_SHORT;if(n===fu)return i.INT;if(n===_s)return i.UNSIGNED_INT;if(n===gi)return i.FLOAT;if(n===ro)return i.HALF_FLOAT;if(n===Lp)return i.ALPHA;if(n===Ip)return i.RGB;if(n===Pn)return i.RGBA;if(n===Dp)return i.LUMINANCE;if(n===Np)return i.LUMINANCE_ALPHA;if(n===js)return i.DEPTH_COMPONENT;if(n===ir)return i.DEPTH_STENCIL;if(n===Up)return i.RED;if(n===mu)return i.RED_INTEGER;if(n===Fp)return i.RG;if(n===gu)return i.RG_INTEGER;if(n===_u)return i.RGBA_INTEGER;if(n===Zo||n===Jo||n===Qo||n===ta)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===dc||n===pc||n===mc||n===gc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===dc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_c||n===vc||n===xc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_c||n===vc)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===yc||n===Sc||n===Mc||n===Ec||n===bc||n===wc||n===Tc||n===Ac||n===Cc||n===Rc||n===Pc||n===Lc||n===Ic||n===Dc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===yc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ec)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Tc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ac)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ic)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Dc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ea||n===Nc||n===Uc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ea)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Uc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Op||n===Fc||n===Oc||n===Bc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ea)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class nb extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Or extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ib={type:"move"};class Al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Or,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Or,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Or,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ib)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Or;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const sb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ob{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Je,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ji({vertexShader:sb,fragmentShader:rb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Fe(new La(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ab extends dr{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new ob,m=e.getContextAttributes();let p=null,x=null;const w=[],y=[],L=new ne;let P=null;const R=new un;R.viewport=new pe;const I=new un;I.viewport=new pe;const b=[R,I],S=new nb;let N=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let gt=w[at];return gt===void 0&&(gt=new Al,w[at]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(at){let gt=w[at];return gt===void 0&&(gt=new Al,w[at]=gt),gt.getGripSpace()},this.getHand=function(at){let gt=w[at];return gt===void 0&&(gt=new Al,w[at]=gt),gt.getHandSpace()};function F(at){const gt=y.indexOf(at.inputSource);if(gt===-1)return;const Ct=w[gt];Ct!==void 0&&(Ct.update(at.inputSource,at.frame,c||o),Ct.dispatchEvent({type:at.type,data:at.inputSource}))}function V(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",G);for(let at=0;at<w.length;at++){const gt=y[at];gt!==null&&(y[at]=null,w[at].disconnect(gt))}N=null,W=null,_.reset(),t.setRenderTarget(p),d=null,h=null,f=null,s=null,x=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){r=at,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){a=at,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(at){c=at},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(at){if(s=at,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",V),s.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const gt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,gt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new vs(d.framebufferWidth,d.framebufferHeight,{format:Pn,type:bi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let gt=null,Ct=null,yt=null;m.depth&&(yt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=m.stencil?ir:js,Ct=m.stencil?nr:_s);const zt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};f=new XRWebGLBinding(s,e),h=f.createProjectionLayer(zt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),x=new vs(h.textureWidth,h.textureHeight,{format:Pn,type:bi,depthTexture:new Qp(h.textureWidth,h.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(at){for(let gt=0;gt<at.removed.length;gt++){const Ct=at.removed[gt],yt=y.indexOf(Ct);yt>=0&&(y[yt]=null,w[yt].disconnect(Ct))}for(let gt=0;gt<at.added.length;gt++){const Ct=at.added[gt];let yt=y.indexOf(Ct);if(yt===-1){for(let Ht=0;Ht<w.length;Ht++)if(Ht>=y.length){y.push(Ct),yt=Ht;break}else if(y[Ht]===null){y[Ht]=Ct,yt=Ht;break}if(yt===-1)break}const zt=w[yt];zt&&zt.connect(Ct)}}const O=new Y,j=new Y;function H(at,gt,Ct){O.setFromMatrixPosition(gt.matrixWorld),j.setFromMatrixPosition(Ct.matrixWorld);const yt=O.distanceTo(j),zt=gt.projectionMatrix.elements,Ht=Ct.projectionMatrix.elements,Gt=zt[14]/(zt[10]-1),ge=zt[14]/(zt[10]+1),D=(zt[9]+1)/zt[5],z=(zt[9]-1)/zt[5],C=(zt[8]-1)/zt[0],ut=(Ht[8]+1)/Ht[0],tt=Gt*C,nt=Gt*ut,ot=yt/(-C+ut),ft=ot*-C;if(gt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(ft),at.translateZ(ot),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),zt[10]===-1)at.projectionMatrix.copy(gt.projectionMatrix),at.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const et=Gt+ot,M=ge+ot,v=tt-ft,T=nt+(yt-ft),U=D*ge/M*et,k=z*ge/M*et;at.projectionMatrix.makePerspective(v,T,U,k,et,M),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function lt(at,gt){gt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(gt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(s===null)return;let gt=at.near,Ct=at.far;_.texture!==null&&(_.depthNear>0&&(gt=_.depthNear),_.depthFar>0&&(Ct=_.depthFar)),S.near=I.near=R.near=gt,S.far=I.far=R.far=Ct,(N!==S.near||W!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),N=S.near,W=S.far),R.layers.mask=at.layers.mask|2,I.layers.mask=at.layers.mask|4,S.layers.mask=R.layers.mask|I.layers.mask;const yt=at.parent,zt=S.cameras;lt(S,yt);for(let Ht=0;Ht<zt.length;Ht++)lt(zt[Ht],yt);zt.length===2?H(S,R,I):S.projectionMatrix.copy(R.projectionMatrix),_t(at,S,yt)};function _t(at,gt,Ct){Ct===null?at.matrix.copy(gt.matrixWorld):(at.matrix.copy(Ct.matrixWorld),at.matrix.invert(),at.matrix.multiply(gt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(gt.projectionMatrix),at.projectionMatrixInverse.copy(gt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=zc*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(at){l=at,h!==null&&(h.fixedFoveation=at),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=at)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let ct=null;function ht(at,gt){if(u=gt.getViewerPose(c||o),g=gt,u!==null){const Ct=u.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let yt=!1;Ct.length!==S.cameras.length&&(S.cameras.length=0,yt=!0);for(let Ht=0;Ht<Ct.length;Ht++){const Gt=Ct[Ht];let ge=null;if(d!==null)ge=d.getViewport(Gt);else{const z=f.getViewSubImage(h,Gt);ge=z.viewport,Ht===0&&(t.setRenderTargetTextures(x,z.colorTexture,h.ignoreDepthValues?void 0:z.depthStencilTexture),t.setRenderTarget(x))}let D=b[Ht];D===void 0&&(D=new un,D.layers.enable(Ht),D.viewport=new pe,b[Ht]=D),D.matrix.fromArray(Gt.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(Gt.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(ge.x,ge.y,ge.width,ge.height),Ht===0&&(S.matrix.copy(D.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),yt===!0&&S.cameras.push(D)}const zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")){const Ht=f.getDepthInformation(Ct[0]);Ht&&Ht.isValid&&Ht.texture&&_.init(t,Ht,s.renderState)}}for(let Ct=0;Ct<w.length;Ct++){const yt=y[Ct],zt=w[Ct];yt!==null&&zt!==void 0&&zt.update(yt,gt,c||o)}ct&&ct(at,gt),gt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:gt}),g=null}const $t=new Zp;$t.setAnimationLoop(ht),this.setAnimationLoop=function(at){ct=at},this.dispose=function(){}}}const rs=new qe,lb=new be;function cb(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Yp(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,w,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),w=x.envMap,y=x.envMapRotation;w&&(m.envMap.value=w,rs.copy(y),rs.x*=-1,rs.y*=-1,rs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),m.envMapRotation.value.setFromMatrix4(lb.makeRotationFromEuler(rs)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ze&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ub(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,w){const y=w.program;n.uniformBlockBinding(x,y)}function c(x,w){let y=s[x.id];y===void 0&&(g(x),y=u(x),s[x.id]=y,x.addEventListener("dispose",m));const L=w.program;n.updateUBOMapping(x,L);const P=t.render.frame;r[x.id]!==P&&(h(x),r[x.id]=P)}function u(x){const w=f();x.__bindingPointIndex=w;const y=i.createBuffer(),L=x.__size,P=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,L,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,y),y}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const w=s[x.id],y=x.uniforms,L=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let P=0,R=y.length;P<R;P++){const I=Array.isArray(y[P])?y[P]:[y[P]];for(let b=0,S=I.length;b<S;b++){const N=I[b];if(d(N,P,b,L)===!0){const W=N.__offset,F=Array.isArray(N.value)?N.value:[N.value];let V=0;for(let G=0;G<F.length;G++){const O=F[G],j=_(O);typeof O=="number"||typeof O=="boolean"?(N.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,W+V,N.__data)):O.isMatrix3?(N.__data[0]=O.elements[0],N.__data[1]=O.elements[1],N.__data[2]=O.elements[2],N.__data[3]=0,N.__data[4]=O.elements[3],N.__data[5]=O.elements[4],N.__data[6]=O.elements[5],N.__data[7]=0,N.__data[8]=O.elements[6],N.__data[9]=O.elements[7],N.__data[10]=O.elements[8],N.__data[11]=0):(O.toArray(N.__data,V),V+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,w,y,L){const P=x.value,R=w+"_"+y;if(L[R]===void 0)return typeof P=="number"||typeof P=="boolean"?L[R]=P:L[R]=P.clone(),!0;{const I=L[R];if(typeof P=="number"||typeof P=="boolean"){if(I!==P)return L[R]=P,!0}else if(I.equals(P)===!1)return I.copy(P),!0}return!1}function g(x){const w=x.uniforms;let y=0;const L=16;for(let R=0,I=w.length;R<I;R++){const b=Array.isArray(w[R])?w[R]:[w[R]];for(let S=0,N=b.length;S<N;S++){const W=b[S],F=Array.isArray(W.value)?W.value:[W.value];for(let V=0,G=F.length;V<G;V++){const O=F[V],j=_(O),H=y%L,lt=H%j.boundary,_t=H+lt;y+=lt,_t!==0&&L-_t<j.storage&&(y+=L-_t),W.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=j.storage}}}const P=y%L;return P>0&&(y+=L-P),x.__size=y,x.__cache={},this}function _(x){const w={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(w.boundary=4,w.storage=4):x.isVector2?(w.boundary=8,w.storage=8):x.isVector3||x.isColor?(w.boundary=16,w.storage=12):x.isVector4?(w.boundary=16,w.storage=16):x.isMatrix3?(w.boundary=48,w.storage=48):x.isMatrix4?(w.boundary=64,w.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),w}function m(x){const w=x.target;w.removeEventListener("dispose",m);const y=o.indexOf(w.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class hb{constructor(t={}){const{canvas:e=Q0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const x=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xn,this.toneMapping=Wi,this.toneMappingExposure=1;const y=this;let L=!1,P=0,R=0,I=null,b=-1,S=null;const N=new pe,W=new pe;let F=null;const V=new ee(0);let G=0,O=e.width,j=e.height,H=1,lt=null,_t=null;const ct=new pe(0,0,O,j),ht=new pe(0,0,O,j);let $t=!1;const at=new yu;let gt=!1,Ct=!1;const yt=new be,zt=new be,Ht=new Y,Gt=new pe,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let D=!1;function z(){return I===null?H:1}let C=n;function ut(A,X){return e.getContext(A,X)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hu}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),C===null){const X="webgl2";if(C=ut(X,A),C===null)throw ut(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let tt,nt,ot,ft,et,M,v,T,U,k,B,st,K,dt,wt,Z,mt,Rt,kt,St,Wt,Yt,he,q;function Et(){tt=new gM(C),tt.init(),Yt=new eb(C,tt),nt=new uM(C,tt,t,Yt),ot=new JE(C,tt),nt.reverseDepthBuffer&&h&&ot.buffers.depth.setReversed(!0),ft=new xM(C),et=new OE,M=new tb(C,tt,ot,et,nt,Yt,ft),v=new fM(y),T=new mM(y),U=new Tx(C),he=new lM(C,U),k=new _M(C,U,ft,he),B=new SM(C,k,U,ft),kt=new yM(C,nt,M),Z=new hM(et),st=new FE(y,v,T,tt,nt,he,Z),K=new cb(y,et),dt=new zE,wt=new qE(tt),Rt=new aM(y,v,T,ot,B,d,l),mt=new KE(y,B,nt),q=new ub(C,ft,nt,ot),St=new cM(C,tt,ft),Wt=new vM(C,tt,ft),ft.programs=st.programs,y.capabilities=nt,y.extensions=tt,y.properties=et,y.renderLists=dt,y.shadowMap=mt,y.state=ot,y.info=ft}Et();const rt=new ab(y,C);this.xr=rt,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const A=tt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=tt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(O,j,!1))},this.getSize=function(A){return A.set(O,j)},this.setSize=function(A,X,J=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,j=X,e.width=Math.floor(A*H),e.height=Math.floor(X*H),J===!0&&(e.style.width=A+"px",e.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(O*H,j*H).floor()},this.setDrawingBufferSize=function(A,X,J){O=A,j=X,H=J,e.width=Math.floor(A*J),e.height=Math.floor(X*J),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(ct)},this.setViewport=function(A,X,J,Q){A.isVector4?ct.set(A.x,A.y,A.z,A.w):ct.set(A,X,J,Q),ot.viewport(N.copy(ct).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(ht)},this.setScissor=function(A,X,J,Q){A.isVector4?ht.set(A.x,A.y,A.z,A.w):ht.set(A,X,J,Q),ot.scissor(W.copy(ht).multiplyScalar(H).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(A){ot.setScissorTest($t=A)},this.setOpaqueSort=function(A){lt=A},this.setTransparentSort=function(A){_t=A},this.getClearColor=function(A){return A.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(A=!0,X=!0,J=!0){let Q=0;if(A){let $=!1;if(I!==null){const vt=I.texture.format;$=vt===_u||vt===gu||vt===mu}if($){const vt=I.texture.type,At=vt===bi||vt===_s||vt===to||vt===nr||vt===du||vt===pu,Nt=Rt.getClearColor(),Ut=Rt.getClearAlpha(),qt=Nt.r,Zt=Nt.g,Ft=Nt.b;At?(g[0]=qt,g[1]=Zt,g[2]=Ft,g[3]=Ut,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=qt,_[1]=Zt,_[2]=Ft,_[3]=Ut,C.clearBufferiv(C.COLOR,0,_))}else Q|=C.COLOR_BUFFER_BIT}X&&(Q|=C.DEPTH_BUFFER_BIT),J&&(Q|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),dt.dispose(),wt.dispose(),et.dispose(),v.dispose(),T.dispose(),B.dispose(),he.dispose(),q.dispose(),st.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Cu),rt.removeEventListener("sessionend",Ru),Zi.stop()};function pt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const A=ft.autoReset,X=mt.enabled,J=mt.autoUpdate,Q=mt.needsUpdate,$=mt.type;Et(),ft.autoReset=A,mt.enabled=X,mt.autoUpdate=J,mt.needsUpdate=Q,mt.type=$}function Tt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Kt(A){const X=A.target;X.removeEventListener("dispose",Kt),we(X)}function we(A){ze(A),et.remove(A)}function ze(A){const X=et.get(A).programs;X!==void 0&&(X.forEach(function(J){st.releaseProgram(J)}),A.isShaderMaterial&&st.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,J,Q,$,vt){X===null&&(X=ge);const At=$.isMesh&&$.matrixWorld.determinant()<0,Nt=mm(A,X,J,Q,$);ot.setMaterial(Q,At);let Ut=J.index,qt=1;if(Q.wireframe===!0){if(Ut=k.getWireframeAttribute(J),Ut===void 0)return;qt=2}const Zt=J.drawRange,Ft=J.attributes.position;let se=Zt.start*qt,ve=(Zt.start+Zt.count)*qt;vt!==null&&(se=Math.max(se,vt.start*qt),ve=Math.min(ve,(vt.start+vt.count)*qt)),Ut!==null?(se=Math.max(se,0),ve=Math.min(ve,Ut.count)):Ft!=null&&(se=Math.max(se,0),ve=Math.min(ve,Ft.count));const ye=ve-se;if(ye<0||ye===1/0)return;he.setup($,Q,Nt,J,Ut);let Qe,le=St;if(Ut!==null&&(Qe=U.get(Ut),le=Wt,le.setIndex(Qe)),$.isMesh)Q.wireframe===!0?(ot.setLineWidth(Q.wireframeLinewidth*z()),le.setMode(C.LINES)):le.setMode(C.TRIANGLES);else if($.isLine){let Bt=Q.linewidth;Bt===void 0&&(Bt=1),ot.setLineWidth(Bt*z()),$.isLineSegments?le.setMode(C.LINES):$.isLineLoop?le.setMode(C.LINE_LOOP):le.setMode(C.LINE_STRIP)}else $.isPoints?le.setMode(C.POINTS):$.isSprite&&le.setMode(C.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)le.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))le.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Bt=$._multiDrawStarts,ti=$._multiDrawCounts,ce=$._multiDrawCount,En=Ut?U.get(Ut).bytesPerElement:1,Ss=et.get(Q).currentProgram.getUniforms();for(let on=0;on<ce;on++)Ss.setValue(C,"_gl_DrawID",on),le.render(Bt[on]/En,ti[on])}else if($.isInstancedMesh)le.renderInstances(se,ye,$.count);else if(J.isInstancedBufferGeometry){const Bt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ti=Math.min(J.instanceCount,Bt);le.renderInstances(se,ye,ti)}else le.render(se,ye)};function fe(A,X,J){A.transparent===!0&&A.side===Wn&&A.forceSinglePass===!1?(A.side=Ze,A.needsUpdate=!0,ho(A,X,J),A.side=Yi,A.needsUpdate=!0,ho(A,X,J),A.side=Wn):ho(A,X,J)}this.compile=function(A,X,J=null){J===null&&(J=A),p=wt.get(J),p.init(X),w.push(p),J.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),A!==J&&A.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights();const Q=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const vt=$.material;if(vt)if(Array.isArray(vt))for(let At=0;At<vt.length;At++){const Nt=vt[At];fe(Nt,J,$),Q.add(Nt)}else fe(vt,J,$),Q.add(vt)}),w.pop(),p=null,Q},this.compileAsync=function(A,X,J=null){const Q=this.compile(A,X,J);return new Promise($=>{function vt(){if(Q.forEach(function(At){et.get(At).currentProgram.isReady()&&Q.delete(At)}),Q.size===0){$(A);return}setTimeout(vt,10)}tt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Mn=null;function Qn(A){Mn&&Mn(A)}function Cu(){Zi.stop()}function Ru(){Zi.start()}const Zi=new Zp;Zi.setAnimationLoop(Qn),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(A){Mn=A,rt.setAnimationLoop(A),A===null?Zi.stop():Zi.start()},rt.addEventListener("sessionstart",Cu),rt.addEventListener("sessionend",Ru),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(X),X=rt.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,X,I),p=wt.get(A,w.length),p.init(X),w.push(p),zt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),at.setFromProjectionMatrix(zt),Ct=this.localClippingEnabled,gt=Z.init(this.clippingPlanes,Ct),m=dt.get(A,x.length),m.init(),x.push(m),rt.enabled===!0&&rt.isPresenting===!0){const vt=y.xr.getDepthSensingMesh();vt!==null&&Na(vt,X,-1/0,y.sortObjects)}Na(A,X,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(lt,_t),D=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,D&&Rt.addToRenderList(m,A),this.info.render.frame++,gt===!0&&Z.beginShadows();const J=p.state.shadowsArray;mt.render(J,A,X),gt===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,$=m.transmissive;if(p.setupLights(),X.isArrayCamera){const vt=X.cameras;if($.length>0)for(let At=0,Nt=vt.length;At<Nt;At++){const Ut=vt[At];Lu(Q,$,A,Ut)}D&&Rt.render(A);for(let At=0,Nt=vt.length;At<Nt;At++){const Ut=vt[At];Pu(m,A,Ut,Ut.viewport)}}else $.length>0&&Lu(Q,$,A,X),D&&Rt.render(A),Pu(m,A,X);I!==null&&(M.updateMultisampleRenderTarget(I),M.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(y,A,X),he.resetDefaultState(),b=-1,S=null,w.pop(),w.length>0?(p=w[w.length-1],gt===!0&&Z.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Na(A,X,J,Q){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||at.intersectsSprite(A)){Q&&Gt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(zt);const At=B.update(A),Nt=A.material;Nt.visible&&m.push(A,At,Nt,J,Gt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||at.intersectsObject(A))){const At=B.update(A),Nt=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Gt.copy(A.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Gt.copy(At.boundingSphere.center)),Gt.applyMatrix4(A.matrixWorld).applyMatrix4(zt)),Array.isArray(Nt)){const Ut=At.groups;for(let qt=0,Zt=Ut.length;qt<Zt;qt++){const Ft=Ut[qt],se=Nt[Ft.materialIndex];se&&se.visible&&m.push(A,At,se,J,Gt.z,Ft)}}else Nt.visible&&m.push(A,At,Nt,J,Gt.z,null)}}const vt=A.children;for(let At=0,Nt=vt.length;At<Nt;At++)Na(vt[At],X,J,Q)}function Pu(A,X,J,Q){const $=A.opaque,vt=A.transmissive,At=A.transparent;p.setupLightsView(J),gt===!0&&Z.setGlobalState(y.clippingPlanes,J),Q&&ot.viewport(N.copy(Q)),$.length>0&&uo($,X,J),vt.length>0&&uo(vt,X,J),At.length>0&&uo(At,X,J),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function Lu(A,X,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new vs(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?ro:bi,minFilter:ps,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const vt=p.state.transmissionRenderTarget[Q.id],At=Q.viewport||N;vt.setSize(At.z,At.w);const Nt=y.getRenderTarget();y.setRenderTarget(vt),y.getClearColor(V),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear(),D&&Rt.render(J);const Ut=y.toneMapping;y.toneMapping=Wi;const qt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),gt===!0&&Z.setGlobalState(y.clippingPlanes,Q),uo(A,J,Q),M.updateMultisampleRenderTarget(vt),M.updateRenderTargetMipmap(vt),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Ft=0,se=X.length;Ft<se;Ft++){const ve=X[Ft],ye=ve.object,Qe=ve.geometry,le=ve.material,Bt=ve.group;if(le.side===Wn&&ye.layers.test(Q.layers)){const ti=le.side;le.side=Ze,le.needsUpdate=!0,Iu(ye,J,Q,Qe,le,Bt),le.side=ti,le.needsUpdate=!0,Zt=!0}}Zt===!0&&(M.updateMultisampleRenderTarget(vt),M.updateRenderTargetMipmap(vt))}y.setRenderTarget(Nt),y.setClearColor(V,G),qt!==void 0&&(Q.viewport=qt),y.toneMapping=Ut}function uo(A,X,J){const Q=X.isScene===!0?X.overrideMaterial:null;for(let $=0,vt=A.length;$<vt;$++){const At=A[$],Nt=At.object,Ut=At.geometry,qt=Q===null?At.material:Q,Zt=At.group;Nt.layers.test(J.layers)&&Iu(Nt,X,J,Ut,qt,Zt)}}function Iu(A,X,J,Q,$,vt){A.onBeforeRender(y,X,J,Q,$,vt),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(y,X,J,Q,A,vt),$.transparent===!0&&$.side===Wn&&$.forceSinglePass===!1?($.side=Ze,$.needsUpdate=!0,y.renderBufferDirect(J,X,Q,$,A,vt),$.side=Yi,$.needsUpdate=!0,y.renderBufferDirect(J,X,Q,$,A,vt),$.side=Wn):y.renderBufferDirect(J,X,Q,$,A,vt),A.onAfterRender(y,X,J,Q,$,vt)}function ho(A,X,J){X.isScene!==!0&&(X=ge);const Q=et.get(A),$=p.state.lights,vt=p.state.shadowsArray,At=$.state.version,Nt=st.getParameters(A,$.state,vt,X,J),Ut=st.getProgramCacheKey(Nt);let qt=Q.programs;Q.environment=A.isMeshStandardMaterial?X.environment:null,Q.fog=X.fog,Q.envMap=(A.isMeshStandardMaterial?T:v).get(A.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,qt===void 0&&(A.addEventListener("dispose",Kt),qt=new Map,Q.programs=qt);let Zt=qt.get(Ut);if(Zt!==void 0){if(Q.currentProgram===Zt&&Q.lightsStateVersion===At)return Nu(A,Nt),Zt}else Nt.uniforms=st.getUniforms(A),A.onBeforeCompile(Nt,y),Zt=st.acquireProgram(Nt,Ut),qt.set(Ut,Zt),Q.uniforms=Nt.uniforms;const Ft=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ft.clippingPlanes=Z.uniform),Nu(A,Nt),Q.needsLights=_m(A),Q.lightsStateVersion=At,Q.needsLights&&(Ft.ambientLightColor.value=$.state.ambient,Ft.lightProbe.value=$.state.probe,Ft.directionalLights.value=$.state.directional,Ft.directionalLightShadows.value=$.state.directionalShadow,Ft.spotLights.value=$.state.spot,Ft.spotLightShadows.value=$.state.spotShadow,Ft.rectAreaLights.value=$.state.rectArea,Ft.ltc_1.value=$.state.rectAreaLTC1,Ft.ltc_2.value=$.state.rectAreaLTC2,Ft.pointLights.value=$.state.point,Ft.pointLightShadows.value=$.state.pointShadow,Ft.hemisphereLights.value=$.state.hemi,Ft.directionalShadowMap.value=$.state.directionalShadowMap,Ft.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ft.spotShadowMap.value=$.state.spotShadowMap,Ft.spotLightMatrix.value=$.state.spotLightMatrix,Ft.spotLightMap.value=$.state.spotLightMap,Ft.pointShadowMap.value=$.state.pointShadowMap,Ft.pointShadowMatrix.value=$.state.pointShadowMatrix),Q.currentProgram=Zt,Q.uniformsList=null,Zt}function Du(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=na.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Nu(A,X){const J=et.get(A);J.outputColorSpace=X.outputColorSpace,J.batching=X.batching,J.batchingColor=X.batchingColor,J.instancing=X.instancing,J.instancingColor=X.instancingColor,J.instancingMorph=X.instancingMorph,J.skinning=X.skinning,J.morphTargets=X.morphTargets,J.morphNormals=X.morphNormals,J.morphColors=X.morphColors,J.morphTargetsCount=X.morphTargetsCount,J.numClippingPlanes=X.numClippingPlanes,J.numIntersection=X.numClipIntersection,J.vertexAlphas=X.vertexAlphas,J.vertexTangents=X.vertexTangents,J.toneMapping=X.toneMapping}function mm(A,X,J,Q,$){X.isScene!==!0&&(X=ge),M.resetTextureUnits();const vt=X.fog,At=Q.isMeshStandardMaterial?X.environment:null,Nt=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:fr,Ut=(Q.isMeshStandardMaterial?T:v).get(Q.envMap||At),qt=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Zt=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ft=!!J.morphAttributes.position,se=!!J.morphAttributes.normal,ve=!!J.morphAttributes.color;let ye=Wi;Q.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ye=y.toneMapping);const Qe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,le=Qe!==void 0?Qe.length:0,Bt=et.get(Q),ti=p.state.lights;if(gt===!0&&(Ct===!0||A!==S)){const gn=A===S&&Q.id===b;Z.setState(Q,A,gn)}let ce=!1;Q.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==ti.state.version||Bt.outputColorSpace!==Nt||$.isBatchedMesh&&Bt.batching===!1||!$.isBatchedMesh&&Bt.batching===!0||$.isBatchedMesh&&Bt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Bt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Bt.instancing===!1||!$.isInstancedMesh&&Bt.instancing===!0||$.isSkinnedMesh&&Bt.skinning===!1||!$.isSkinnedMesh&&Bt.skinning===!0||$.isInstancedMesh&&Bt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Bt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Bt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Bt.instancingMorph===!1&&$.morphTexture!==null||Bt.envMap!==Ut||Q.fog===!0&&Bt.fog!==vt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==Z.numPlanes||Bt.numIntersection!==Z.numIntersection)||Bt.vertexAlphas!==qt||Bt.vertexTangents!==Zt||Bt.morphTargets!==Ft||Bt.morphNormals!==se||Bt.morphColors!==ve||Bt.toneMapping!==ye||Bt.morphTargetsCount!==le)&&(ce=!0):(ce=!0,Bt.__version=Q.version);let En=Bt.currentProgram;ce===!0&&(En=ho(Q,X,$));let Ss=!1,on=!1,mr=!1;const Se=En.getUniforms(),Fn=Bt.uniforms;if(ot.useProgram(En.program)&&(Ss=!0,on=!0,mr=!0),Q.id!==b&&(b=Q.id,on=!0),Ss||S!==A){ot.buffers.depth.getReversed()?(yt.copy(A.projectionMatrix),ex(yt),nx(yt),Se.setValue(C,"projectionMatrix",yt)):Se.setValue(C,"projectionMatrix",A.projectionMatrix),Se.setValue(C,"viewMatrix",A.matrixWorldInverse);const Ai=Se.map.cameraPosition;Ai!==void 0&&Ai.setValue(C,Ht.setFromMatrixPosition(A.matrixWorld)),nt.logarithmicDepthBuffer&&Se.setValue(C,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Se.setValue(C,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,on=!0,mr=!0)}if($.isSkinnedMesh){Se.setOptional(C,$,"bindMatrix"),Se.setOptional(C,$,"bindMatrixInverse");const gn=$.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Se.setValue(C,"boneTexture",gn.boneTexture,M))}$.isBatchedMesh&&(Se.setOptional(C,$,"batchingTexture"),Se.setValue(C,"batchingTexture",$._matricesTexture,M),Se.setOptional(C,$,"batchingIdTexture"),Se.setValue(C,"batchingIdTexture",$._indirectTexture,M),Se.setOptional(C,$,"batchingColorTexture"),$._colorsTexture!==null&&Se.setValue(C,"batchingColorTexture",$._colorsTexture,M));const gr=J.morphAttributes;if((gr.position!==void 0||gr.normal!==void 0||gr.color!==void 0)&&kt.update($,J,En),(on||Bt.receiveShadow!==$.receiveShadow)&&(Bt.receiveShadow=$.receiveShadow,Se.setValue(C,"receiveShadow",$.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Fn.envMap.value=Ut,Fn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&X.environment!==null&&(Fn.envMapIntensity.value=X.environmentIntensity),on&&(Se.setValue(C,"toneMappingExposure",y.toneMappingExposure),Bt.needsLights&&gm(Fn,mr),vt&&Q.fog===!0&&K.refreshFogUniforms(Fn,vt),K.refreshMaterialUniforms(Fn,Q,H,j,p.state.transmissionRenderTarget[A.id]),na.upload(C,Du(Bt),Fn,M)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(na.upload(C,Du(Bt),Fn,M),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Se.setValue(C,"center",$.center),Se.setValue(C,"modelViewMatrix",$.modelViewMatrix),Se.setValue(C,"normalMatrix",$.normalMatrix),Se.setValue(C,"modelMatrix",$.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const gn=Q.uniformsGroups;for(let Ai=0,Ci=gn.length;Ai<Ci;Ai++){const Uu=gn[Ai];q.update(Uu,En),q.bind(Uu,En)}}return En}function gm(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function _m(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,X,J){et.get(A.texture).__webglTexture=X,et.get(A.depthTexture).__webglTexture=J;const Q=et.get(A);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=J===void 0,Q.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,X){const J=et.get(A);J.__webglFramebuffer=X,J.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,J=0){I=A,P=X,R=J;let Q=!0,$=null,vt=!1,At=!1;if(A){const Ut=et.get(A);if(Ut.__useDefaultFramebuffer!==void 0)ot.bindFramebuffer(C.FRAMEBUFFER,null),Q=!1;else if(Ut.__webglFramebuffer===void 0)M.setupRenderTarget(A);else if(Ut.__hasExternalTextures)M.rebindTextures(A,et.get(A.texture).__webglTexture,et.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ft=A.depthTexture;if(Ut.__boundDepthTexture!==Ft){if(Ft!==null&&et.has(Ft)&&(A.width!==Ft.image.width||A.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(A)}}const qt=A.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(At=!0);const Zt=et.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Zt[X])?$=Zt[X][J]:$=Zt[X],vt=!0):A.samples>0&&M.useMultisampledRTT(A)===!1?$=et.get(A).__webglMultisampledFramebuffer:Array.isArray(Zt)?$=Zt[J]:$=Zt,N.copy(A.viewport),W.copy(A.scissor),F=A.scissorTest}else N.copy(ct).multiplyScalar(H).floor(),W.copy(ht).multiplyScalar(H).floor(),F=$t;if(ot.bindFramebuffer(C.FRAMEBUFFER,$)&&Q&&ot.drawBuffers(A,$),ot.viewport(N),ot.scissor(W),ot.setScissorTest(F),vt){const Ut=et.get(A.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ut.__webglTexture,J)}else if(At){const Ut=et.get(A.texture),qt=X||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ut.__webglTexture,J||0,qt)}b=-1},this.readRenderTargetPixels=function(A,X,J,Q,$,vt,At){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=et.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&At!==void 0&&(Nt=Nt[At]),Nt){ot.bindFramebuffer(C.FRAMEBUFFER,Nt);try{const Ut=A.texture,qt=Ut.format,Zt=Ut.type;if(!nt.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-Q&&J>=0&&J<=A.height-$&&C.readPixels(X,J,Q,$,Yt.convert(qt),Yt.convert(Zt),vt)}finally{const Ut=I!==null?et.get(I).__webglFramebuffer:null;ot.bindFramebuffer(C.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(A,X,J,Q,$,vt,At){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=et.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&At!==void 0&&(Nt=Nt[At]),Nt){const Ut=A.texture,qt=Ut.format,Zt=Ut.type;if(!nt.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=A.width-Q&&J>=0&&J<=A.height-$){ot.bindFramebuffer(C.FRAMEBUFFER,Nt);const Ft=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ft),C.bufferData(C.PIXEL_PACK_BUFFER,vt.byteLength,C.STREAM_READ),C.readPixels(X,J,Q,$,Yt.convert(qt),Yt.convert(Zt),0);const se=I!==null?et.get(I).__webglFramebuffer:null;ot.bindFramebuffer(C.FRAMEBUFFER,se);const ve=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await tx(C,ve,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ft),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,vt),C.deleteBuffer(Ft),C.deleteSync(ve),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,X=null,J=0){A.isTexture!==!0&&(Ur("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1]);const Q=Math.pow(2,-J),$=Math.floor(A.image.width*Q),vt=Math.floor(A.image.height*Q),At=X!==null?X.x:0,Nt=X!==null?X.y:0;M.setTexture2D(A,0),C.copyTexSubImage2D(C.TEXTURE_2D,J,0,0,At,Nt,$,vt),ot.unbindTexture()},this.copyTextureToTexture=function(A,X,J=null,Q=null,$=0){A.isTexture!==!0&&(Ur("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,A=arguments[1],X=arguments[2],$=arguments[3]||0,J=null);let vt,At,Nt,Ut,qt,Zt,Ft,se,ve;const ye=A.isCompressedTexture?A.mipmaps[$]:A.image;J!==null?(vt=J.max.x-J.min.x,At=J.max.y-J.min.y,Nt=J.isBox3?J.max.z-J.min.z:1,Ut=J.min.x,qt=J.min.y,Zt=J.isBox3?J.min.z:0):(vt=ye.width,At=ye.height,Nt=ye.depth||1,Ut=0,qt=0,Zt=0),Q!==null?(Ft=Q.x,se=Q.y,ve=Q.z):(Ft=0,se=0,ve=0);const Qe=Yt.convert(X.format),le=Yt.convert(X.type);let Bt;X.isData3DTexture?(M.setTexture3D(X,0),Bt=C.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(M.setTexture2DArray(X,0),Bt=C.TEXTURE_2D_ARRAY):(M.setTexture2D(X,0),Bt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,X.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,X.unpackAlignment);const ti=C.getParameter(C.UNPACK_ROW_LENGTH),ce=C.getParameter(C.UNPACK_IMAGE_HEIGHT),En=C.getParameter(C.UNPACK_SKIP_PIXELS),Ss=C.getParameter(C.UNPACK_SKIP_ROWS),on=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ye.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ye.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ut),C.pixelStorei(C.UNPACK_SKIP_ROWS,qt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Zt);const mr=A.isDataArrayTexture||A.isData3DTexture,Se=X.isDataArrayTexture||X.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Fn=et.get(A),gr=et.get(X),gn=et.get(Fn.__renderTarget),Ai=et.get(gr.__renderTarget);ot.bindFramebuffer(C.READ_FRAMEBUFFER,gn.__webglFramebuffer),ot.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let Ci=0;Ci<Nt;Ci++)mr&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,et.get(A).__webglTexture,$,Zt+Ci),A.isDepthTexture?(Se&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,et.get(X).__webglTexture,$,ve+Ci),C.blitFramebuffer(Ut,qt,vt,At,Ft,se,vt,At,C.DEPTH_BUFFER_BIT,C.NEAREST)):Se?C.copyTexSubImage3D(Bt,$,Ft,se,ve+Ci,Ut,qt,vt,At):C.copyTexSubImage2D(Bt,$,Ft,se,ve+Ci,Ut,qt,vt,At);ot.bindFramebuffer(C.READ_FRAMEBUFFER,null),ot.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Se?A.isDataTexture||A.isData3DTexture?C.texSubImage3D(Bt,$,Ft,se,ve,vt,At,Nt,Qe,le,ye.data):X.isCompressedArrayTexture?C.compressedTexSubImage3D(Bt,$,Ft,se,ve,vt,At,Nt,Qe,ye.data):C.texSubImage3D(Bt,$,Ft,se,ve,vt,At,Nt,Qe,le,ye):A.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,$,Ft,se,vt,At,Qe,le,ye.data):A.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,$,Ft,se,ye.width,ye.height,Qe,ye.data):C.texSubImage2D(C.TEXTURE_2D,$,Ft,se,vt,At,Qe,le,ye);C.pixelStorei(C.UNPACK_ROW_LENGTH,ti),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ce),C.pixelStorei(C.UNPACK_SKIP_PIXELS,En),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ss),C.pixelStorei(C.UNPACK_SKIP_IMAGES,on),$===0&&X.generateMipmaps&&C.generateMipmap(Bt),ot.unbindTexture()},this.copyTextureToTexture3D=function(A,X,J=null,Q=null,$=0){return A.isTexture!==!0&&(Ur("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,Q=arguments[1]||null,A=arguments[2],X=arguments[3],$=arguments[4]||0),Ur('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,X,J,Q,$)},this.initRenderTarget=function(A){et.get(A).__webglFramebuffer===void 0&&M.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?M.setTextureCube(A,0):A.isData3DTexture?M.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?M.setTexture2DArray(A,0):M.setTexture2D(A,0),ot.unbindTexture()},this.resetState=function(){P=0,R=0,I=null,ot.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}class Mu{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ee(t),this.near=e,this.far=n}clone(){return new Mu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class fb extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qe,this.environmentIntensity=1,this.environmentRotation=new qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class db extends Je{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Eu extends Ti{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new Y,u=new ne;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){const d=n+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new pn(o,3)),this.setAttribute("normal",new pn(a,3)),this.setAttribute("uv",new pn(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Eu(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class fa extends Ti{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let g=0;const _=[],m=n/2;let p=0;x(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new pn(f,3)),this.setAttribute("normal",new pn(h,3)),this.setAttribute("uv",new pn(d,2));function x(){const y=new Y,L=new Y;let P=0;const R=(e-t)/n;for(let I=0;I<=r;I++){const b=[],S=I/r,N=S*(e-t)+t;for(let W=0;W<=s;W++){const F=W/s,V=F*l+a,G=Math.sin(V),O=Math.cos(V);L.x=N*G,L.y=-S*n+m,L.z=N*O,f.push(L.x,L.y,L.z),y.set(G,R,O).normalize(),h.push(y.x,y.y,y.z),d.push(F,1-S),b.push(g++)}_.push(b)}for(let I=0;I<s;I++)for(let b=0;b<r;b++){const S=_[b][I],N=_[b+1][I],W=_[b+1][I+1],F=_[b][I+1];(t>0||b!==0)&&(u.push(S,N,F),P+=3),(e>0||b!==r-1)&&(u.push(N,W,F),P+=3)}c.addGroup(p,P,0),p+=P}function w(y){const L=g,P=new ne,R=new Y;let I=0;const b=y===!0?t:e,S=y===!0?1:-1;for(let W=1;W<=s;W++)f.push(0,m*S,0),h.push(0,S,0),d.push(.5,.5),g++;const N=g;for(let W=0;W<=s;W++){const V=W/s*l+a,G=Math.cos(V),O=Math.sin(V);R.x=b*O,R.y=m*S,R.z=b*G,f.push(R.x,R.y,R.z),h.push(0,S,0),P.x=G*.5+.5,P.y=O*.5*S+.5,d.push(P.x,P.y),g++}for(let W=0;W<s;W++){const F=L+W,V=N+W;y===!0?u.push(V,V+1,F):u.push(V+1,V,F),I+=3}c.addGroup(p,I,y===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fa(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class wr extends lo{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bp,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class bu extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Cl=new be,Ef=new Y,bf=new Y;class sm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yu,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ef.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ef),bf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bf),e.updateMatrixWorld(),Cl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Cl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const wf=new be,Tr=new Y,Rl=new Y;class pb extends sm{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new pe(2,1,1,1),new pe(0,1,1,1),new pe(3,1,1,1),new pe(1,1,1,1),new pe(3,0,1,1),new pe(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Tr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Tr),Rl.copy(n.position),Rl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Rl),n.updateMatrixWorld(),s.makeTranslation(-Tr.x,-Tr.y,-Tr.z),wf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wf)}}class mb extends bu{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new pb}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class gb extends sm{constructor(){super(new Jp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _b extends bu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new gb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class vb extends bu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Tf=new be;class xb{constructor(t,e,n=0,s=1/0){this.ray=new Gp(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new xu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Tf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tf),this}intersectObject(t,e=!0,n=[]){return Hc(t,this,n,e),n.sort(Af),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Hc(t[s],this,n,e);return n.sort(Af),n}}function Af(i,t){return i.distance-t.distance}function Hc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Hc(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hu);const Ar=new Y;function vn(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Ar.copy(t),Ar[n]=0,Ar.normalize();const c=.5*o/(o+a),u=1-Ar.angleTo(i)/l;return Math.sign(Ar[e])===1?u*c:a/(o+a)+c+c*(1-u)}class yb extends yi{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new Y,l=new Y,c=new Y(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,h=this.attributes.uv.array,d=u.length/6,g=new Y,_=.5/s;for(let m=0,p=0;m<u.length;m+=3,p+=2)switch(a.fromArray(u,m),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),u[m+0]=c.x*Math.sign(a.x)+l.x*r,u[m+1]=c.y*Math.sign(a.y)+l.y*r,u[m+2]=c.z*Math.sign(a.z)+l.z*r,f[m+0]=l.x,f[m+1]=l.y,f[m+2]=l.z,Math.floor(m/d)){case 0:g.set(1,0,0),h[p+0]=vn(g,l,"z","y",r,n),h[p+1]=1-vn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),h[p+0]=1-vn(g,l,"z","y",r,n),h[p+1]=1-vn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),h[p+0]=1-vn(g,l,"x","z",r,t),h[p+1]=vn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),h[p+0]=1-vn(g,l,"x","z",r,t),h[p+1]=1-vn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),h[p+0]=1-vn(g,l,"x","y",r,t),h[p+1]=1-vn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),h[p+0]=vn(g,l,"x","y",r,t),h[p+1]=1-vn(g,l,"y","x",r,e);break}}}class Ln{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new E);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new E);const n=this.elements,s=t.x,r=t.y,o=t.z;return e.x=n[0]*s+n[1]*r+n[2]*o,e.y=n[3]*s+n[4]*r+n[5]*o,e.z=n[6]*s+n[7]*r+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new Ln);const n=this.elements,s=t.elements,r=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],u=n[4],f=n[5],h=n[6],d=n[7],g=n[8],_=s[0],m=s[1],p=s[2],x=s[3],w=s[4],y=s[5],L=s[6],P=s[7],R=s[8];return r[0]=o*_+a*x+l*L,r[1]=o*m+a*w+l*P,r[2]=o*p+a*y+l*R,r[3]=c*_+u*x+f*L,r[4]=c*m+u*w+f*P,r[5]=c*p+u*y+f*R,r[6]=h*_+d*x+g*L,r[7]=h*m+d*w+g*P,r[8]=h*p+d*y+g*R,e}scale(t,e){e===void 0&&(e=new Ln);const n=this.elements,s=e.elements;for(let r=0;r!==3;r++)s[3*r+0]=t.x*n[3*r+0],s[3*r+1]=t.y*n[3*r+1],s[3*r+2]=t.z*n[3*r+2];return e}solve(t,e){e===void 0&&(e=new E);const n=3,s=4,r=[];let o,a;for(o=0;o<n*s;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+s*a]=this.elements[o+3*a];r[3]=t.x,r[7]=t.y,r[11]=t.z;let l=3;const c=l;let u;const f=4;let h;do{if(o=c-l,r[o+s*o]===0){for(a=o+1;a<c;a++)if(r[o+s*a]!==0){u=f;do h=f-u,r[h+s*o]+=r[h+s*a];while(--u);break}}if(r[o+s*o]!==0)for(a=o+1;a<c;a++){const d=r[o+s*a]/r[o+s*o];u=f;do h=f-u,r[h+s*a]=h<=o?0:r[h+s*a]-r[h+s*o]*d;while(--u)}}while(--l);if(e.z=r[2*s+3]/r[2*s+2],e.y=(r[1*s+3]-r[1*s+2]*e.z)/r[1*s+1],e.x=(r[0*s+3]-r[0*s+2]*e.z-r[0*s+1]*e.y)/r[0*s+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";for(let n=0;n<9;n++)t+=this.elements[n]+",";return t}reverse(t){t===void 0&&(t=new Ln);const e=3,n=6,s=Sb;let r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+n*o]=this.elements[r+3*o];s[3]=1,s[9]=0,s[15]=0,s[4]=0,s[10]=1,s[16]=0,s[5]=0,s[11]=0,s[17]=1;let a=3;const l=a;let c;const u=n;let f;do{if(r=l-a,s[r+n*r]===0){for(o=r+1;o<l;o++)if(s[r+n*o]!==0){c=u;do f=u-c,s[f+n*r]+=s[f+n*o];while(--c);break}}if(s[r+n*r]!==0)for(o=r+1;o<l;o++){const h=s[r+n*o]/s[r+n*r];c=u;do f=u-c,s[f+n*o]=f<=r?0:s[f+n*o]-s[f+n*r]*h;while(--c)}}while(--a);r=2;do{o=r-1;do{const h=s[r+n*o]/s[r+n*r];c=n;do f=n-c,s[f+n*o]=s[f+n*o]-s[f+n*r]*h;while(--c)}while(o--)}while(--r);r=2;do{const h=1/s[r+n*r];c=n;do f=n-c,s[f+n*r]=s[f+n*r]*h;while(--c)}while(r--);r=2;do{o=2;do{if(f=s[e+o+n*r],isNaN(f)||f===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,f)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,s=t.z,r=t.w,o=e+e,a=n+n,l=s+s,c=e*o,u=e*a,f=e*l,h=n*a,d=n*l,g=s*l,_=r*o,m=r*a,p=r*l,x=this.elements;return x[0]=1-(h+g),x[1]=u-p,x[2]=f+m,x[3]=u+p,x[4]=1-(c+g),x[5]=d-_,x[6]=f-m,x[7]=d+_,x[8]=1-(c+h),this}transpose(t){t===void 0&&(t=new Ln);const e=this.elements,n=t.elements;let s;return n[0]=e[0],n[4]=e[4],n[8]=e[8],s=e[1],n[1]=e[3],n[3]=s,s=e[2],n[2]=e[6],n[6]=s,s=e[5],n[5]=e[7],n[7]=s,t}}const Sb=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class E{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new E);const n=t.x,s=t.y,r=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*r-l*s,e.y=l*n-o*r,e.z=o*s-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new E(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new E(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Ln([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,s=Math.sqrt(t*t+e*e+n*n);if(s>0){const r=1/s;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return s}unit(t){t===void 0&&(t=new E);const e=this.x,n=this.y,s=this.z;let r=Math.sqrt(e*e+n*n+s*s);return r>0?(r=1/r,t.x=e*r,t.y=n*r,t.z=s*r):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-n)*(o-n)+(a-s)*(a-s))}distanceSquared(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-n)*(o-n)+(a-s)*(a-s)}scale(t,e){e===void 0&&(e=new E);const n=this.x,s=this.y,r=this.z;return e.x=t*n,e.y=t*s,e.z=t*r,e}vmul(t,e){return e===void 0&&(e=new E),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new E),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new E),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const s=Mb,r=1/n;s.set(this.x*r,this.y*r,this.z*r);const o=Eb;Math.abs(s.x)<.9?(o.set(1,0,0),s.cross(o,t)):(o.set(0,1,0),s.cross(o,t)),s.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const s=this.x,r=this.y,o=this.z;n.x=s+(t.x-s)*e,n.y=r+(t.y-r)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Cf),Cf.almostEquals(t,e)}clone(){return new E(this.x,this.y,this.z)}}E.ZERO=new E(0,0,0);E.UNIT_X=new E(1,0,0);E.UNIT_Y=new E(0,1,0);E.UNIT_Z=new E(0,0,1);const Mb=new E,Eb=new E,Cf=new E;class mn{constructor(t){t===void 0&&(t={}),this.lowerBound=new E,this.upperBound=new E,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,s){const r=this.lowerBound,o=this.upperBound,a=n;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,Rf),c=Rf),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),s&&(r.x-=s,r.y-=s,r.z-=s,o.x+=s,o.y+=s,o.z+=s),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new mn().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,s=t.lowerBound,r=t.upperBound,o=s.x<=n.x&&n.x<=r.x||e.x<=r.x&&r.x<=n.x,a=s.y<=n.y&&n.y<=r.y||e.y<=r.y&&r.y<=n.y,l=s.z<=n.z&&n.z<=r.z||e.z<=r.z&&r.z<=n.z;return o&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,s=t.lowerBound,r=t.upperBound;return e.x<=s.x&&n.x>=r.x&&e.y<=s.y&&n.y>=r.y&&e.z<=s.z&&n.z>=r.z}getCorners(t,e,n,s,r,o,a,l){const c=this.lowerBound,u=this.upperBound;t.copy(c),e.set(u.x,c.y,c.z),n.set(u.x,u.y,c.z),s.set(c.x,u.y,u.z),r.set(u.x,c.y,u.z),o.set(c.x,u.y,c.z),a.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(t,e){const n=Pf,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7];this.getCorners(s,r,o,a,l,c,u,f);for(let h=0;h!==8;h++){const d=n[h];t.pointToLocal(d,d)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=Pf,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7];this.getCorners(s,r,o,a,l,c,u,f);for(let h=0;h!==8;h++){const d=n[h];t.pointToWorld(d,d)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,s=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*s,l=(this.upperBound.x-n.x)*s,c=(this.lowerBound.y-n.y)*r,u=(this.upperBound.y-n.y)*r,f=(this.lowerBound.z-n.z)*o,h=(this.upperBound.z-n.z)*o,d=Math.max(Math.max(Math.min(a,l),Math.min(c,u)),Math.min(f,h)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,u)),Math.max(f,h));return!(g<0||d>g)}}const Rf=new E,Pf=[new E,new E,new E,new E,new E,new E,new E,new E];class Lf{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:s}=e;if(s>n){const r=s;s=n,n=r}return this.matrix[(n*(n+1)>>1)+s-1]}set(t,e,n){let{index:s}=t,{index:r}=e;if(r>s){const o=r;r=s,s=o}this.matrix[(s*(s+1)>>1)+r-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class rm{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const s=n[t].indexOf(e);return s!==-1&&n[t].splice(s,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let s=0,r=n.length;s<r;s++)n[s].call(this,t)}return this}}class Re{constructor(t,e,n,s){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),s===void 0&&(s=1),this.x=t,this.y=e,this.z=n,this.w=s}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new E),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=bb,s=wb;t.tangents(n,s),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Re);const n=this.x,s=this.y,r=this.z,o=this.w,a=t.x,l=t.y,c=t.z,u=t.w;return e.x=n*u+o*a+s*c-r*l,e.y=s*u+o*l+r*a-n*c,e.z=r*u+o*c+n*l-s*a,e.w=o*u-n*a-s*l-r*c,e}inverse(t){t===void 0&&(t=new Re);const e=this.x,n=this.y,s=this.z,r=this.w;this.conjugate(t);const o=1/(e*e+n*n+s*s+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new Re),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new E);const n=t.x,s=t.y,r=t.z,o=this.x,a=this.y,l=this.z,c=this.w,u=c*n+a*r-l*s,f=c*s+l*n-o*r,h=c*r+o*s-a*n,d=-o*n-a*s-l*r;return e.x=u*c+d*-o+f*-l-h*-a,e.y=f*c+d*-a+h*-o-u*-l,e.z=h*c+d*-l+u*-a-f*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,s,r;const o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const u=o*a+l*c;if(u>.499&&(n=2*Math.atan2(o,c),s=Math.PI/2,r=0),u<-.499&&(n=-2*Math.atan2(o,c),s=-Math.PI/2,r=0),n===void 0){const f=o*o,h=a*a,d=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*h-2*d),s=Math.asin(2*u),r=Math.atan2(2*o*c-2*a*l,1-2*f-2*d)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=s,t.x=r}setFromEuler(t,e,n,s){s===void 0&&(s="XYZ");const r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),u=Math.sin(n/2);return s==="XYZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):s==="YXZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):s==="ZXY"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):s==="ZYX"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):s==="YZX"?(this.x=l*o*a+r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a-l*c*u):s==="XZY"&&(this.x=l*o*a-r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a+l*c*u),this}clone(){return new Re(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Re);const s=this.x,r=this.y,o=this.z,a=this.w;let l=t.x,c=t.y,u=t.z,f=t.w,h,d,g,_,m;return d=s*l+r*c+o*u+a*f,d<0&&(d=-d,l=-l,c=-c,u=-u,f=-f),1-d>1e-6?(h=Math.acos(d),g=Math.sin(h),_=Math.sin((1-e)*h)/g,m=Math.sin(e*h)/g):(_=1-e,m=e),n.x=_*s+m*l,n.y=_*r+m*c,n.z=_*o+m*u,n.w=_*a+m*f,n}integrate(t,e,n,s){s===void 0&&(s=new Re);const r=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,u=this.z,f=this.w,h=e*.5;return s.x+=h*(r*f+o*u-a*c),s.y+=h*(o*f+a*l-r*u),s.z+=h*(a*f+r*c-o*l),s.w+=h*(-r*l-o*c-a*u),s}}const bb=new E,wb=new E,Tb={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Dt{constructor(t){t===void 0&&(t={}),this.id=Dt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Dt.idCounter=0;Dt.types=Tb;class ae{constructor(t){t===void 0&&(t={}),this.position=new E,this.quaternion=new Re,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return ae.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return ae.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,s){return s===void 0&&(s=new E),n.vsub(t,s),e.conjugate(If),If.vmult(s,s),s}static pointToWorldFrame(t,e,n,s){return s===void 0&&(s=new E),e.vmult(n,s),s.vadd(t,s),s}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new E),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,s){return s===void 0&&(s=new E),e.w*=-1,e.vmult(n,s),e.w*=-1,s}}const If=new Re;class Yr extends Dt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:s=[],axes:r,boundingSphereRadius:o}=t;super({type:Dt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const s=new E;for(let r=0;r!==t.length;r++){const o=t[r],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[o[l]].vsub(e[o[c]],s),s.normalize();let u=!1;for(let f=0;f!==n.length;f++)if(n[f].almostEquals(s)||n[f].almostEquals(s)){u=!0;break}u||n.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let s=0;s<this.faces[t].length;s++)if(!this.vertices[this.faces[t][s]])throw new Error(`Vertex ${this.faces[t][s]} not found!`);const e=this.faceNormals[t]||new E;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[t].length;s++)console.warn(`.vertices[${this.faces[t][s]}] = Vec3(${this.vertices[this.faces[t][s]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],s=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];Yr.computeNormal(s,r,o,e)}static computeNormal(t,e,n,s){const r=new E,o=new E;e.vsub(t,o),n.vsub(e,r),r.cross(o,s),s.isZero()||s.normalize()}clipAgainstHull(t,e,n,s,r,o,a,l,c){const u=new E;let f=-1,h=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){u.copy(n.faceNormals[g]),r.vmult(u,u);const _=u.dot(o);_>h&&(h=_,f=g)}const d=[];for(let g=0;g<n.faces[f].length;g++){const _=n.vertices[n.faces[f][g]],m=new E;m.copy(_),r.vmult(m,m),s.vadd(m,m),d.push(m)}f>=0&&this.clipFaceAgainstHull(o,t,e,d,a,l,c)}findSeparatingAxis(t,e,n,s,r,o,a,l){const c=new E,u=new E,f=new E,h=new E,d=new E,g=new E;let _=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let p=0;p!==m.uniqueAxes.length;p++){n.vmult(m.uniqueAxes[p],c);const x=m.testSepAxis(c,t,e,n,s,r);if(x===!1)return!1;x<_&&(_=x,o.copy(c))}else{const p=a?a.length:m.faces.length;for(let x=0;x<p;x++){const w=a?a[x]:x;c.copy(m.faceNormals[w]),n.vmult(c,c);const y=m.testSepAxis(c,t,e,n,s,r);if(y===!1)return!1;y<_&&(_=y,o.copy(c))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){r.vmult(t.uniqueAxes[p],u);const x=m.testSepAxis(u,t,e,n,s,r);if(x===!1)return!1;x<_&&(_=x,o.copy(u))}else{const p=l?l.length:t.faces.length;for(let x=0;x<p;x++){const w=l?l[x]:x;u.copy(t.faceNormals[w]),r.vmult(u,u);const y=m.testSepAxis(u,t,e,n,s,r);if(y===!1)return!1;y<_&&(_=y,o.copy(u))}}for(let p=0;p!==m.uniqueEdges.length;p++){n.vmult(m.uniqueEdges[p],h);for(let x=0;x!==t.uniqueEdges.length;x++)if(r.vmult(t.uniqueEdges[x],d),h.cross(d,g),!g.almostZero()){g.normalize();const w=m.testSepAxis(g,t,e,n,s,r);if(w===!1)return!1;w<_&&(_=w,o.copy(g))}}return s.vsub(e,f),f.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,s,r,o){const a=this;Yr.project(a,t,n,s,Pl),Yr.project(e,t,r,o,Ll);const l=Pl[0],c=Pl[1],u=Ll[0],f=Ll[1];if(l<f||u<c)return!1;const h=l-f,d=u-c;return h<d?h:d}calculateLocalInertia(t,e){const n=new E,s=new E;this.computeLocalAABB(s,n);const r=n.x-s.x,o=n.y-s.y,a=n.z-s.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*r*2*r+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],s=this.vertices[e[0]];return-n.dot(s)}clipFaceAgainstHull(t,e,n,s,r,o,a){const l=new E,c=new E,u=new E,f=new E,h=new E,d=new E,g=new E,_=new E,m=this,p=[],x=s,w=p;let y=-1,L=Number.MAX_VALUE;for(let S=0;S<m.faces.length;S++){l.copy(m.faceNormals[S]),n.vmult(l,l);const N=l.dot(t);N<L&&(L=N,y=S)}if(y<0)return;const P=m.faces[y];P.connectedFaces=[];for(let S=0;S<m.faces.length;S++)for(let N=0;N<m.faces[S].length;N++)P.indexOf(m.faces[S][N])!==-1&&S!==y&&P.connectedFaces.indexOf(S)===-1&&P.connectedFaces.push(S);const R=P.length;for(let S=0;S<R;S++){const N=m.vertices[P[S]],W=m.vertices[P[(S+1)%R]];N.vsub(W,c),u.copy(c),n.vmult(u,u),e.vadd(u,u),f.copy(this.faceNormals[y]),n.vmult(f,f),e.vadd(f,f),u.cross(f,h),h.negate(h),d.copy(N),n.vmult(d,d),e.vadd(d,d);const F=P.connectedFaces[S];g.copy(this.faceNormals[F]);const V=this.getPlaneConstantOfFace(F);_.copy(g),n.vmult(_,_);const G=V-_.dot(e);for(this.clipFaceAgainstPlane(x,w,_,G);x.length;)x.shift();for(;w.length;)x.push(w.shift())}g.copy(this.faceNormals[y]);const I=this.getPlaneConstantOfFace(y);_.copy(g),n.vmult(_,_);const b=I-_.dot(e);for(let S=0;S<x.length;S++){let N=_.dot(x[S])+b;if(N<=r&&(console.log(`clamped: depth=${N} to minDist=${r}`),N=r),N<=o){const W=x[S];if(N<=1e-6){const F={point:W,normal:_,depth:N};a.push(F)}}}}clipFaceAgainstPlane(t,e,n,s){let r,o;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];r=n.dot(l)+s;for(let u=0;u<a;u++){if(c=t[u],o=n.dot(c)+s,r<0)if(o<0){const f=new E;f.copy(c),e.push(f)}else{const f=new E;l.lerp(c,r/(r-o),f),e.push(f)}else if(o<0){const f=new E;l.lerp(c,r/(r-o),f),e.push(f),e.push(c)}l=c,r=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new E);const n=this.vertices,s=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)e.vmult(n[r],s[r]),t.vadd(s[r],s[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){const r=n[s];r.x<t.x?t.x=r.x:r.x>e.x&&(e.x=r.x),r.y<t.y?t.y=r.y:r.y>e.y&&(e.y=r.y),r.z<t.z?t.z=r.z:r.z>e.z&&(e.z=r.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new E);const n=this.faceNormals,s=this.worldFaceNormals;for(let r=0;r!==e;r++)t.vmult(n[r],s[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const s=e[n].lengthSquared();s>t&&(t=s)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,s){const r=this.vertices;let o,a,l,c,u,f,h=new E;for(let d=0;d<r.length;d++){h.copy(r[d]),e.vmult(h,h),t.vadd(h,h);const g=h;(o===void 0||g.x<o)&&(o=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(u===void 0||g.y>u)&&(u=g.y),(l===void 0||g.z<l)&&(l=g.z),(f===void 0||g.z>f)&&(f=g.z)}n.set(o,a,l),s.set(c,u,f)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new E);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,s=this.vertices;if(e){for(let r=0;r<n;r++){const o=s[r];e.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){const o=this.faceNormals[r];e.vmult(o,o)}}if(t)for(let r=0;r<n;r++){const o=s[r];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,s=this.faceNormals,r=new E;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let a=s[o];const l=e[n[o][0]],c=new E;t.vsub(l,c);const u=a.dot(c),f=new E;r.vsub(l,f);const h=a.dot(f);if(u<0&&h>0||u>0&&h<0)return!1}return-1}static project(t,e,n,s,r){const o=t.vertices.length,a=Ab;let l=0,c=0;const u=Cb,f=t.vertices;u.setZero(),ae.vectorToLocalFrame(n,s,e,a),ae.pointToLocalFrame(n,s,u,u);const h=u.dot(a);c=l=f[0].dot(a);for(let d=1;d<o;d++){const g=f[d].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=h,l-=h,c>l){const d=c;c=l,l=d}r[0]=l,r[1]=c}}const Pl=[],Ll=[];new E;const Ab=new E,Cb=new E;class ki extends Dt{constructor(t){super({type:Dt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,s=E,r=[new s(-t,-e,-n),new s(t,-e,-n),new s(t,e,-n),new s(-t,e,-n),new s(-t,-e,n),new s(t,-e,n),new s(t,e,n),new s(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],l=new Yr({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new E),ki.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const s=t;n.x=1/12*e*(2*s.y*2*s.y+2*s.z*2*s.z),n.y=1/12*e*(2*s.x*2*s.x+2*s.z*2*s.z),n.z=1/12*e*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(t,e){const n=t,s=this.halfExtents;if(n[0].set(s.x,0,0),n[1].set(0,s.y,0),n[2].set(0,0,s.z),n[3].set(-s.x,0,0),n[4].set(0,-s.y,0),n[5].set(0,0,-s.z),e!==void 0)for(let r=0;r!==n.length;r++)e.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const s=this.halfExtents,r=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let o=0;o<r.length;o++)Ui.set(r[o][0],r[o][1],r[o][2]),e.vmult(Ui,Ui),t.vadd(Ui,Ui),n(Ui.x,Ui.y,Ui.z)}calculateWorldAABB(t,e,n,s){const r=this.halfExtents;Bn[0].set(r.x,r.y,r.z),Bn[1].set(-r.x,r.y,r.z),Bn[2].set(-r.x,-r.y,r.z),Bn[3].set(-r.x,-r.y,-r.z),Bn[4].set(r.x,-r.y,-r.z),Bn[5].set(r.x,r.y,-r.z),Bn[6].set(-r.x,r.y,-r.z),Bn[7].set(r.x,-r.y,r.z);const o=Bn[0];e.vmult(o,o),t.vadd(o,o),s.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=Bn[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,u=l.y,f=l.z;c>s.x&&(s.x=c),u>s.y&&(s.y=u),f>s.z&&(s.z=f),c<n.x&&(n.x=c),u<n.y&&(n.y=u),f<n.z&&(n.z=f)}}}const Ui=new E,Bn=[new E,new E,new E,new E,new E,new E,new E,new E],wu={DYNAMIC:1,STATIC:2,KINEMATIC:4},Tu={AWAKE:0,SLEEPY:1,SLEEPING:2};class xt extends rm{constructor(t){t===void 0&&(t={}),super(),this.id=xt.idCounter++,this.index=-1,this.world=null,this.vlambda=new E,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new E,this.previousPosition=new E,this.interpolatedPosition=new E,this.initPosition=new E,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new E,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new E,this.force=new E;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?xt.STATIC:xt.DYNAMIC,typeof t.type==typeof xt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=xt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new E,this.quaternion=new Re,this.initQuaternion=new Re,this.previousQuaternion=new Re,this.interpolatedQuaternion=new Re,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new E,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new E,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new E,this.invInertia=new E,this.invInertiaWorld=new Ln,this.invMassSolve=0,this.invInertiaSolve=new E,this.invInertiaWorldSolve=new Ln,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new E(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new E(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new mn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new E,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=xt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===xt.SLEEPING&&this.dispatchEvent(xt.wakeupEvent)}sleep(){this.sleepState=xt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;e===xt.AWAKE&&n<s?(this.sleepState=xt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(xt.sleepyEvent)):e===xt.SLEEPY&&n>s?this.wakeUp():e===xt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(xt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===xt.SLEEPING||this.type===xt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new E),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new E),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e}addShape(t,e,n){const s=new E,r=new Re;return e&&s.copy(e),n&&r.copy(n),this.shapes.push(t),this.shapeOffsets.push(s),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let s=0;for(let r=0;r!==n;r++){const o=t[r];o.updateBoundingSphereRadius();const a=e[r].length(),l=o.boundingSphereRadius;a+l>s&&(s=a+l)}this.boundingRadius=s}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,s=t.length,r=Rb,o=Pb,a=this.quaternion,l=this.aabb,c=Lb;for(let u=0;u!==s;u++){const f=t[u];a.vmult(e[u],r),r.vadd(this.position,r),a.mult(n[u],o),f.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),u===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=Ib,s=Db;n.setRotationFromQuaternion(this.quaternion),n.transpose(s),n.scale(e,n),n.mmult(s,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new E),this.type!==xt.DYNAMIC)return;this.sleepState===xt.SLEEPING&&this.wakeUp();const n=Nb;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new E),this.type!==xt.DYNAMIC)return;const n=Ub,s=Fb;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyForce(n,s)}applyTorque(t){this.type===xt.DYNAMIC&&(this.sleepState===xt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new E),this.type!==xt.DYNAMIC)return;this.sleepState===xt.SLEEPING&&this.wakeUp();const n=e,s=Ob;s.copy(t),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);const r=Bb;n.cross(t,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new E),this.type!==xt.DYNAMIC)return;const n=zb,s=kb;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyImpulse(n,s)}updateMassProperties(){const t=Hb;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),ki.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new E;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===xt.DYNAMIC||this.type===xt.KINEMATIC)||this.sleepState===xt.SLEEPING)return;const s=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,u=this.invMass,f=this.invInertiaWorld,h=this.linearFactor,d=u*t;s.x+=a.x*d*h.x,s.y+=a.y*d*h.y,s.z+=a.z*d*h.z;const g=f.elements,_=this.angularFactor,m=l.x*_.x,p=l.y*_.y,x=l.z*_.z;r.x+=t*(g[0]*m+g[1]*p+g[2]*x),r.y+=t*(g[3]*m+g[4]*p+g[5]*x),r.z+=t*(g[6]*m+g[7]*p+g[8]*x),o.x+=s.x*t,o.y+=s.y*t,o.z+=s.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}xt.idCounter=0;xt.COLLIDE_EVENT_NAME="collide";xt.DYNAMIC=wu.DYNAMIC;xt.STATIC=wu.STATIC;xt.KINEMATIC=wu.KINEMATIC;xt.AWAKE=Tu.AWAKE;xt.SLEEPY=Tu.SLEEPY;xt.SLEEPING=Tu.SLEEPING;xt.wakeupEvent={type:"wakeup"};xt.sleepyEvent={type:"sleepy"};xt.sleepEvent={type:"sleep"};const Rb=new E,Pb=new Re,Lb=new mn,Ib=new Ln,Db=new Ln;new Ln;const Nb=new E,Ub=new E,Fb=new E,Ob=new E,Bb=new E,zb=new E,kb=new E,Hb=new E;class om{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&xt.STATIC)!==0||t.sleepState===xt.SLEEPING)&&((e.type&xt.STATIC)!==0||e.sleepState===xt.SLEEPING))}intersectionTest(t,e,n,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,s):this.doBoundingSphereBroadphase(t,e,n,s)}doBoundingSphereBroadphase(t,e,n,s){const r=Vb;e.position.vsub(t.position,r);const o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(n.push(t),s.push(e))}doBoundingBoxBroadphase(t,e,n,s){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),s.push(e))}makePairsUnique(t,e){const n=Gb,s=Wb,r=qb,o=t.length;for(let a=0;a!==o;a++)s[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const l=s[a].id,c=r[a].id,u=l<c?`${l},${c}`:`${c},${l}`;n[u]=a,n.keys.push(u)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(s[c]),e.push(r[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new E;t.position.vsub(e.position,n);const s=t.shapes[0],r=e.shapes[0];return Math.pow(s.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Vb=new E;new E;new Re;new E;const Gb={keys:[]},Wb=[],qb=[];new E;new E;new E;class Xb extends om{constructor(){super()}collisionPairs(t,e,n){const s=t.bodies,r=s.length;let o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=s[l],a=s[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let s=0;s<t.bodies.length;s++){const r=t.bodies[s];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&n.push(r)}return n}}class da{constructor(){this.rayFromWorld=new E,this.rayToWorld=new E,this.hitNormalWorld=new E,this.hitPointWorld=new E,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,s,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(s),this.shape=r,this.body=o,this.distance=a}}let am,lm,cm,um,hm,fm,dm;const Au={CLOSEST:1,ANY:2,ALL:4};am=Dt.types.SPHERE;lm=Dt.types.PLANE;cm=Dt.types.BOX;um=Dt.types.CYLINDER;hm=Dt.types.CONVEXPOLYHEDRON;fm=Dt.types.HEIGHTFIELD;dm=Dt.types.TRIMESH;class Ce{get[am](){return this._intersectSphere}get[lm](){return this._intersectPlane}get[cm](){return this._intersectBox}get[um](){return this._intersectConvex}get[hm](){return this._intersectConvex}get[fm](){return this._intersectHeightfield}get[dm](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new E),e===void 0&&(e=new E),this.from=t.clone(),this.to=e.clone(),this.direction=new E,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Ce.ANY,this.result=new da,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Ce.ANY,this.result=e.result||new da,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Df),Il.length=0,t.broadphase.aabbQuery(t,Df,Il),this.intersectBodies(Il),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;const s=$b,r=Yb;for(let o=0,a=t.shapes.length;o<a;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],s),s.vadd(t.position,s),this.intersectShape(l,r,s,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,s=t.length;!this.result.shouldStop&&n<s;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,s){const r=this.from;if(lw(r,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,s,t)}_intersectBox(t,e,n,s,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,s,r)}_intersectPlane(t,e,n,s,r){const o=this.from,a=this.to,l=this.direction,c=new E(0,0,1);e.vmult(c,c);const u=new E;o.vsub(n,u);const f=u.dot(c);a.vsub(n,u);const h=u.dot(c);if(f*h>0||o.distanceTo(a)<f)return;const d=c.dot(l);if(Math.abs(d)<this.precision)return;const g=new E,_=new E,m=new E;o.vsub(n,g);const p=-c.dot(g)/d;l.scale(p,_),o.vadd(_,m),this.reportIntersection(c,m,r,s,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,s=this.to,r=this.from;e.x=Math.min(s.x,r.x),e.y=Math.min(s.y,r.y),e.z=Math.min(s.z,r.z),n.x=Math.max(s.x,r.x),n.y=Math.max(s.y,r.y),n.z=Math.max(s.z,r.z)}_intersectHeightfield(t,e,n,s,r){t.data,t.elementSize;const o=jb;o.from.copy(this.from),o.to.copy(this.to),ae.pointToLocalFrame(n,e,o.from,o.from),ae.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=Kb;let l,c,u,f;l=c=0,u=f=t.data.length-1;const h=new mn;o.getAABB(h),t.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),u=Math.min(u,a[0]+1),f=Math.min(f,a[1]+1);for(let d=l;d<u;d++)for(let g=c;g<f;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(d,g,h),!!h.overlapsRay(o)){if(t.getConvexTrianglePillar(d,g,!1),ae.pointToWorldFrame(n,e,t.pillarOffset,zo),this._intersectConvex(t.pillarConvex,e,zo,s,r,Nf),this.result.shouldStop)return;t.getConvexTrianglePillar(d,g,!0),ae.pointToWorldFrame(n,e,t.pillarOffset,zo),this._intersectConvex(t.pillarConvex,e,zo,s,r,Nf)}}}_intersectSphere(t,e,n,s,r){const o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,u=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),f=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,h=u**2-4*c*f,d=Zb,g=Jb;if(!(h<0))if(h===0)o.lerp(a,h,d),d.vsub(n,g),g.normalize(),this.reportIntersection(g,d,r,s,-1);else{const _=(-u-Math.sqrt(h))/(2*c),m=(-u+Math.sqrt(h))/(2*c);if(_>=0&&_<=1&&(o.lerp(a,_,d),d.vsub(n,g),g.normalize(),this.reportIntersection(g,d,r,s,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,d),d.vsub(n,g),g.normalize(),this.reportIntersection(g,d,r,s,-1))}}_intersectConvex(t,e,n,s,r,o){const a=Qb,l=Uf,c=o&&o.faceList||null,u=t.faces,f=t.vertices,h=t.faceNormals,d=this.direction,g=this.from,_=this.to,m=g.distanceTo(_),p=c?c.length:u.length,x=this.result;for(let w=0;!x.shouldStop&&w<p;w++){const y=c?c[w]:w,L=u[y],P=h[y],R=e,I=n;l.copy(f[L[0]]),R.vmult(l,l),l.vadd(I,l),l.vsub(g,l),R.vmult(P,a);const b=d.dot(a);if(Math.abs(b)<this.precision)continue;const S=a.dot(l)/b;if(!(S<0)){d.scale(S,en),en.vadd(g,en),An.copy(f[L[0]]),R.vmult(An,An),I.vadd(An,An);for(let N=1;!x.shouldStop&&N<L.length-1;N++){zn.copy(f[L[N]]),kn.copy(f[L[N+1]]),R.vmult(zn,zn),R.vmult(kn,kn),I.vadd(zn,zn),I.vadd(kn,kn);const W=en.distanceTo(g);!(Ce.pointInTriangle(en,An,zn,kn)||Ce.pointInTriangle(en,zn,An,kn))||W>m||this.reportIntersection(a,en,r,s,y)}}}}_intersectTrimesh(t,e,n,s,r,o){const a=tw,l=ow,c=aw,u=Uf,f=ew,h=nw,d=iw,g=rw,_=sw,m=t.indices;t.vertices;const p=this.from,x=this.to,w=this.direction;c.position.copy(n),c.quaternion.copy(e),ae.vectorToLocalFrame(n,e,w,f),ae.pointToLocalFrame(n,e,p,h),ae.pointToLocalFrame(n,e,x,d),d.x*=t.scale.x,d.y*=t.scale.y,d.z*=t.scale.z,h.x*=t.scale.x,h.y*=t.scale.y,h.z*=t.scale.z,d.vsub(h,f),f.normalize();const y=h.distanceSquared(d);t.tree.rayQuery(this,c,l);for(let L=0,P=l.length;!this.result.shouldStop&&L!==P;L++){const R=l[L];t.getNormal(R,a),t.getVertex(m[R*3],An),An.vsub(h,u);const I=f.dot(a),b=a.dot(u)/I;if(b<0)continue;f.scale(b,en),en.vadd(h,en),t.getVertex(m[R*3+1],zn),t.getVertex(m[R*3+2],kn);const S=en.distanceSquared(h);!(Ce.pointInTriangle(en,zn,An,kn)||Ce.pointInTriangle(en,An,zn,kn))||S>y||(ae.vectorToWorldFrame(e,a,_),ae.pointToWorldFrame(n,e,en,g),this.reportIntersection(_,g,r,s,R))}l.length=0}reportIntersection(t,e,n,s,r){const o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case Ce.ALL:this.hasHit=!0,c.set(o,a,t,e,n,s,l),c.hasHit=!0,this.callback(c);break;case Ce.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,s,l));break;case Ce.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,s,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,s){s.vsub(e,fs),n.vsub(e,Cr),t.vsub(e,Dl);const r=fs.dot(fs),o=fs.dot(Cr),a=fs.dot(Dl),l=Cr.dot(Cr),c=Cr.dot(Dl);let u,f;return(u=l*a-o*c)>=0&&(f=r*c-o*a)>=0&&u+f<r*l-o*o}}Ce.CLOSEST=Au.CLOSEST;Ce.ANY=Au.ANY;Ce.ALL=Au.ALL;const Df=new mn,Il=[],Cr=new E,Dl=new E,$b=new E,Yb=new Re,en=new E,An=new E,zn=new E,kn=new E;new E;new da;const Nf={faceList:[0]},zo=new E,jb=new Ce,Kb=[],Zb=new E,Jb=new E,Qb=new E;new E;new E;const Uf=new E,tw=new E,ew=new E,nw=new E,iw=new E,sw=new E,rw=new E;new mn;const ow=[],aw=new ae,fs=new E,ko=new E;function lw(i,t,e){e.vsub(i,fs);const n=fs.dot(t);return t.scale(n,ko),ko.vadd(i,ko),e.distanceTo(ko)}class Gs extends om{static checkBounds(t,e,n){let s,r;n===0?(s=t.position.x,r=e.position.x):n===1?(s=t.position.y,r=e.position.y):n===2&&(s=t.position.z,r=e.position.z);const o=t.boundingRadius,a=e.boundingRadius,l=s+o;return r-a<l}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const s=t[e];let r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.x<=s.aabb.lowerBound.x);r--)t[r+1]=t[r];t[r+1]=s}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const s=t[e];let r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.y<=s.aabb.lowerBound.y);r--)t[r+1]=t[r];t[r+1]=s}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const s=t[e];let r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.z<=s.aabb.lowerBound.z);r--)t[r+1]=t[r];t[r+1]=s}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const s=e.indexOf(n.body);s!==-1&&e.splice(s,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const s=this.axisList,r=s.length,o=this.axisIndex;let a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==r;a++){const c=s[a];for(l=a+1;l<r;l++){const u=s[l];if(this.needBroadphaseCollision(c,u)){if(!Gs.checkBounds(c,u,o))break;this.intersectionTest(c,u,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let s=0;s!==n;s++){const r=t[s];r.aabbNeedsUpdate&&r.updateAABB()}e===0?Gs.insertionSortX(t):e===1?Gs.insertionSortY(t):e===2&&Gs.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,s=0,r=0,o=0;const a=this.axisList,l=a.length,c=1/l;for(let d=0;d!==l;d++){const g=a[d],_=g.position.x;t+=_,e+=_*_;const m=g.position.y;n+=m,s+=m*m;const p=g.position.z;r+=p,o+=p*p}const u=e-t*t*c,f=s-n*n*c,h=o-r*r*c;u>f?u>h?this.axisIndex=0:this.axisIndex=2:f>h?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const s=this.axisIndex;let r="x";s===1&&(r="y"),s===2&&(r="z");const o=this.axisList;e.lowerBound[r],e.upperBound[r];for(let a=0;a<o.length;a++){const l=o[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(e)&&n.push(l)}return n}}class cw{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class Ff{constructor(){this.spatial=new E,this.rotational=new E}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class co{constructor(t,e,n,s){n===void 0&&(n=-1e6),s===void 0&&(s=1e6),this.id=co.idCounter++,this.minForce=n,this.maxForce=s,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Ff,this.jacobianElementB=new Ff,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const s=e,r=t,o=n;this.a=4/(o*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(o*o*r*(1+4*s))}computeB(t,e,n){const s=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-s*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.position,o=s.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.velocity,o=s.velocity,a=n.angularVelocity,l=s.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.vlambda,o=s.vlambda,a=n.wlambda,l=s.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.force,o=n.torque,a=s.force,l=s.torque,c=n.invMassSolve,u=s.invMassSolve;return r.scale(c,Of),a.scale(u,Bf),n.invInertiaWorldSolve.vmult(o,zf),s.invInertiaWorldSolve.vmult(l,kf),t.multiplyVectors(Of,zf)+e.multiplyVectors(Bf,kf)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.invMassSolve,o=s.invMassSolve,a=n.invInertiaWorldSolve,l=s.invInertiaWorldSolve;let c=r+o;return a.vmult(t.rotational,Ho),c+=Ho.dot(t.rotational),l.vmult(e.rotational,Ho),c+=Ho.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,s=this.bi,r=this.bj,o=uw;s.vlambda.addScaledVector(s.invMassSolve*t,e.spatial,s.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),s.invInertiaWorldSolve.vmult(e.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}co.idCounter=0;const Of=new E,Bf=new E,zf=new E,kf=new E,Ho=new E,uw=new E;class hw extends co{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new E,this.rj=new E,this.ni=new E}computeB(t){const e=this.a,n=this.b,s=this.bi,r=this.bj,o=this.ri,a=this.rj,l=fw,c=dw,u=s.velocity,f=s.angularVelocity;s.force,s.torque;const h=r.velocity,d=r.angularVelocity;r.force,r.torque;const g=pw,_=this.jacobianElementA,m=this.jacobianElementB,p=this.ni;o.cross(p,l),a.cross(p,c),p.negate(_.spatial),l.negate(_.rotational),m.spatial.copy(p),m.rotational.copy(c),g.copy(r.position),g.vadd(a,g),g.vsub(s.position,g),g.vsub(o,g);const x=p.dot(g),w=this.restitution+1,y=w*h.dot(p)-w*u.dot(p)+d.dot(c)-f.dot(l),L=this.computeGiMf();return-x*e-y*n-t*L}getImpactVelocityAlongNormal(){const t=mw,e=gw,n=_w,s=vw,r=xw;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(s,e),t.vsub(e,r),this.ni.dot(r)}}const fw=new E,dw=new E,pw=new E,mw=new E,gw=new E,_w=new E,vw=new E,xw=new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;class Hf extends co{constructor(t,e,n){super(t,e,-n,n),this.ri=new E,this.rj=new E,this.t=new E}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,s=this.rj,r=yw,o=Sw,a=this.t;n.cross(a,r),s.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const u=this.computeGW(),f=this.computeGiMf();return-u*e-t*f}}const yw=new E,Sw=new E;class rr{constructor(t,e,n){n=cw.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=rr.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}rr.idCounter=0;class or{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=or.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}or.idCounter=0;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new Ce;new E;new E;new E;new E(1,0,0),new E(0,1,0),new E(0,0,1);new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new mn;new E;new mn;new E;new E;new E;new E;new E;new E;new E;new mn;new E;new ae;new mn;class Mw{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class Ew extends Mw{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const s=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,u=t;let f,h,d,g,_,m;if(a!==0)for(let y=0;y!==c;y++)l[y].updateSolveMassProperties();const p=ww,x=Tw,w=bw;p.length=a,x.length=a,w.length=a;for(let y=0;y!==a;y++){const L=o[y];w[y]=0,x[y]=L.computeB(u),p[y]=1/L.computeC()}if(a!==0){for(let P=0;P!==c;P++){const R=l[P],I=R.vlambda,b=R.wlambda;I.set(0,0,0),b.set(0,0,0)}for(n=0;n!==s;n++){g=0;for(let P=0;P!==a;P++){const R=o[P];f=x[P],h=p[P],m=w[P],_=R.computeGWlambda(),d=h*(f-_-R.eps*m),m+d<R.minForce?d=R.minForce-m:m+d>R.maxForce&&(d=R.maxForce-m),w[P]+=d,g+=d>0?d:-d,R.addToWlambda(d)}if(g*g<r)break}for(let P=0;P!==c;P++){const R=l[P],I=R.velocity,b=R.angularVelocity;R.vlambda.vmul(R.linearFactor,R.vlambda),I.vadd(R.vlambda,I),R.wlambda.vmul(R.angularFactor,R.wlambda),b.vadd(R.wlambda,b)}let y=o.length;const L=1/u;for(;y--;)o[y].multiplier=w[y]*L}return n}}const bw=[],ww=[],Tw=[];class Aw{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class Cw extends Aw{constructor(){super(...arguments),this.type=E}constructObject(){return new E}}const Me={sphereSphere:Dt.types.SPHERE,spherePlane:Dt.types.SPHERE|Dt.types.PLANE,boxBox:Dt.types.BOX|Dt.types.BOX,sphereBox:Dt.types.SPHERE|Dt.types.BOX,planeBox:Dt.types.PLANE|Dt.types.BOX,convexConvex:Dt.types.CONVEXPOLYHEDRON,sphereConvex:Dt.types.SPHERE|Dt.types.CONVEXPOLYHEDRON,planeConvex:Dt.types.PLANE|Dt.types.CONVEXPOLYHEDRON,boxConvex:Dt.types.BOX|Dt.types.CONVEXPOLYHEDRON,sphereHeightfield:Dt.types.SPHERE|Dt.types.HEIGHTFIELD,boxHeightfield:Dt.types.BOX|Dt.types.HEIGHTFIELD,convexHeightfield:Dt.types.CONVEXPOLYHEDRON|Dt.types.HEIGHTFIELD,sphereParticle:Dt.types.PARTICLE|Dt.types.SPHERE,planeParticle:Dt.types.PLANE|Dt.types.PARTICLE,boxParticle:Dt.types.BOX|Dt.types.PARTICLE,convexParticle:Dt.types.PARTICLE|Dt.types.CONVEXPOLYHEDRON,cylinderCylinder:Dt.types.CYLINDER,sphereCylinder:Dt.types.SPHERE|Dt.types.CYLINDER,planeCylinder:Dt.types.PLANE|Dt.types.CYLINDER,boxCylinder:Dt.types.BOX|Dt.types.CYLINDER,convexCylinder:Dt.types.CONVEXPOLYHEDRON|Dt.types.CYLINDER,heightfieldCylinder:Dt.types.HEIGHTFIELD|Dt.types.CYLINDER,particleCylinder:Dt.types.PARTICLE|Dt.types.CYLINDER,sphereTrimesh:Dt.types.SPHERE|Dt.types.TRIMESH,planeTrimesh:Dt.types.PLANE|Dt.types.TRIMESH};class Rw{get[Me.sphereSphere](){return this.sphereSphere}get[Me.spherePlane](){return this.spherePlane}get[Me.boxBox](){return this.boxBox}get[Me.sphereBox](){return this.sphereBox}get[Me.planeBox](){return this.planeBox}get[Me.convexConvex](){return this.convexConvex}get[Me.sphereConvex](){return this.sphereConvex}get[Me.planeConvex](){return this.planeConvex}get[Me.boxConvex](){return this.boxConvex}get[Me.sphereHeightfield](){return this.sphereHeightfield}get[Me.boxHeightfield](){return this.boxHeightfield}get[Me.convexHeightfield](){return this.convexHeightfield}get[Me.sphereParticle](){return this.sphereParticle}get[Me.planeParticle](){return this.planeParticle}get[Me.boxParticle](){return this.boxParticle}get[Me.convexParticle](){return this.convexParticle}get[Me.cylinderCylinder](){return this.convexConvex}get[Me.sphereCylinder](){return this.sphereConvex}get[Me.planeCylinder](){return this.planeConvex}get[Me.boxCylinder](){return this.boxConvex}get[Me.convexCylinder](){return this.convexConvex}get[Me.heightfieldCylinder](){return this.heightfieldCylinder}get[Me.particleCylinder](){return this.particleCylinder}get[Me.sphereTrimesh](){return this.sphereTrimesh}get[Me.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Cw,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,s,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new hw(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&s.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,u=s.material||e.material;return c&&u&&c.restitution>=0&&u.restitution>=0&&(a.restitution=c.restitution*u.restitution),a.si=r||n,a.sj=o||s,a}createFrictionEquationsFromContact(t,e){const n=t.bi,s=t.bj,r=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const u=r.material||n.material,f=o.material||s.material;if(u&&f&&u.friction>=0&&f.friction>=0&&(c=u.friction*f.friction),c>0){const h=c*(a.frictionGravity||a.gravity).length();let d=n.invMass+s.invMass;d>0&&(d=1/d);const g=this.frictionEquationPool,_=g.length?g.pop():new Hf(n,s,h*d),m=g.length?g.pop():new Hf(n,s,h*d);return _.bi=m.bi=n,_.bj=m.bj=s,_.minForce=m.minForce=-h*d,_.maxForce=m.maxForce=h*d,_.ri.copy(t.ri),_.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(_.t,m.t),_.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),_.enabled=m.enabled=t.enabled,e.push(_,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];os.setZero(),Bs.setZero(),zs.setZero();const r=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==r?(os.vadd(e.ni,os),Bs.vadd(e.ri,Bs),zs.vadd(e.rj,zs)):(os.vsub(e.ni,os),Bs.vadd(e.rj,Bs),zs.vadd(e.ri,zs));const o=1/t;Bs.scale(o,n.ri),zs.scale(o,n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj),os.normalize(),os.tangents(n.t,s.t)}getContacts(t,e,n,s,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=s,this.frictionResult=o;const l=Iw,c=Dw,u=Pw,f=Lw;for(let h=0,d=t.length;h!==d;h++){const g=t[h],_=e[h];let m=null;g.material&&_.material&&(m=n.getContactMaterial(g.material,_.material)||null);const p=g.type&xt.KINEMATIC&&_.type&xt.STATIC||g.type&xt.STATIC&&_.type&xt.KINEMATIC||g.type&xt.KINEMATIC&&_.type&xt.KINEMATIC;for(let x=0;x<g.shapes.length;x++){g.quaternion.mult(g.shapeOrientations[x],l),g.quaternion.vmult(g.shapeOffsets[x],u),u.vadd(g.position,u);const w=g.shapes[x];for(let y=0;y<_.shapes.length;y++){_.quaternion.mult(_.shapeOrientations[y],c),_.quaternion.vmult(_.shapeOffsets[y],f),f.vadd(_.position,f);const L=_.shapes[y];if(!(w.collisionFilterMask&L.collisionFilterGroup&&L.collisionFilterMask&w.collisionFilterGroup)||u.distanceTo(f)>w.boundingSphereRadius+L.boundingSphereRadius)continue;let P=null;w.material&&L.material&&(P=n.getContactMaterial(w.material,L.material)||null),this.currentContactMaterial=P||m||n.defaultContactMaterial;const R=w.type|L.type,I=this[R];if(I){let b=!1;w.type<L.type?b=I.call(this,w,L,u,f,l,c,g,_,w,L,p):b=I.call(this,L,w,f,u,c,l,_,g,w,L,p),b&&p&&(n.shapeOverlapKeeper.set(w.id,L.id),n.bodyOverlapKeeper.set(g.id,_.id))}}}}}sphereSphere(t,e,n,s,r,o,a,l,c,u,f){if(f)return n.distanceSquared(s)<(t.radius+e.radius)**2;const h=this.createContactEquation(a,l,t,e,c,u);s.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(t.radius,h.ri),h.rj.scale(-e.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(s,h.rj),h.rj.vsub(l.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(t,e,n,s,r,o,a,l,c,u,f){const h=this.createContactEquation(a,l,t,e,c,u);if(h.ni.set(0,0,1),o.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(t.radius,h.ri),n.vsub(s,Vo),h.ni.scale(h.ni.dot(Vo),Vf),Vo.vsub(Vf,h.rj),-Vo.dot(h.ni)<=t.radius){if(f)return!0;const d=h.ri,g=h.rj;d.vadd(n,d),d.vsub(a.position,d),g.vadd(s,g),g.vsub(l.position,g),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(t,e,n,s,r,o,a,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,s,r,o,a,l,t,e,f)}sphereBox(t,e,n,s,r,o,a,l,c,u,f){const h=this.v3pool,d=rT;n.vsub(s,Go),e.getSideNormals(d,o);const g=t.radius;let _=!1;const m=aT,p=lT,x=cT;let w=null,y=0,L=0,P=0,R=null;for(let O=0,j=d.length;O!==j&&_===!1;O++){const H=nT;H.copy(d[O]);const lt=H.length();H.normalize();const _t=Go.dot(H);if(_t<lt+g&&_t>0){const ct=iT,ht=sT;ct.copy(d[(O+1)%3]),ht.copy(d[(O+2)%3]);const $t=ct.length(),at=ht.length();ct.normalize(),ht.normalize();const gt=Go.dot(ct),Ct=Go.dot(ht);if(gt<$t&&gt>-$t&&Ct<at&&Ct>-at){const yt=Math.abs(_t-lt-g);if((R===null||yt<R)&&(R=yt,L=gt,P=Ct,w=lt,m.copy(H),p.copy(ct),x.copy(ht),y++,f))return!0}}}if(y){_=!0;const O=this.createContactEquation(a,l,t,e,c,u);m.scale(-g,O.ri),O.ni.copy(m),O.ni.negate(O.ni),m.scale(w,m),p.scale(L,p),m.vadd(p,m),x.scale(P,x),m.vadd(x,O.rj),O.ri.vadd(n,O.ri),O.ri.vsub(a.position,O.ri),O.rj.vadd(s,O.rj),O.rj.vsub(l.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}let I=h.get();const b=oT;for(let O=0;O!==2&&!_;O++)for(let j=0;j!==2&&!_;j++)for(let H=0;H!==2&&!_;H++)if(I.set(0,0,0),O?I.vadd(d[0],I):I.vsub(d[0],I),j?I.vadd(d[1],I):I.vsub(d[1],I),H?I.vadd(d[2],I):I.vsub(d[2],I),s.vadd(I,b),b.vsub(n,b),b.lengthSquared()<g*g){if(f)return!0;_=!0;const lt=this.createContactEquation(a,l,t,e,c,u);lt.ri.copy(b),lt.ri.normalize(),lt.ni.copy(lt.ri),lt.ri.scale(g,lt.ri),lt.rj.copy(I),lt.ri.vadd(n,lt.ri),lt.ri.vsub(a.position,lt.ri),lt.rj.vadd(s,lt.rj),lt.rj.vsub(l.position,lt.rj),this.result.push(lt),this.createFrictionEquationsFromContact(lt,this.frictionResult)}h.release(I),I=null;const S=h.get(),N=h.get(),W=h.get(),F=h.get(),V=h.get(),G=d.length;for(let O=0;O!==G&&!_;O++)for(let j=0;j!==G&&!_;j++)if(O%3!==j%3){d[j].cross(d[O],S),S.normalize(),d[O].vadd(d[j],N),W.copy(n),W.vsub(N,W),W.vsub(s,W);const H=W.dot(S);S.scale(H,F);let lt=0;for(;lt===O%3||lt===j%3;)lt++;V.copy(n),V.vsub(F,V),V.vsub(N,V),V.vsub(s,V);const _t=Math.abs(H),ct=V.length();if(_t<d[lt].length()&&ct<g){if(f)return!0;_=!0;const ht=this.createContactEquation(a,l,t,e,c,u);N.vadd(F,ht.rj),ht.rj.copy(ht.rj),V.negate(ht.ni),ht.ni.normalize(),ht.ri.copy(ht.rj),ht.ri.vadd(s,ht.ri),ht.ri.vsub(n,ht.ri),ht.ri.normalize(),ht.ri.scale(g,ht.ri),ht.ri.vadd(n,ht.ri),ht.ri.vsub(a.position,ht.ri),ht.rj.vadd(s,ht.rj),ht.rj.vsub(l.position,ht.rj),this.result.push(ht),this.createFrictionEquationsFromContact(ht,this.frictionResult)}}h.release(S,N,W,F,V)}planeBox(t,e,n,s,r,o,a,l,c,u,f){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,s,r,o,a,l,t,e,f)}convexConvex(t,e,n,s,r,o,a,l,c,u,f,h,d){const g=bT;if(!(n.distanceTo(s)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,r,s,o,g,h,d)){const _=[],m=wT;t.clipAgainstHull(n,r,e,s,o,g,-100,100,_);let p=0;for(let x=0;x!==_.length;x++){if(f)return!0;const w=this.createContactEquation(a,l,t,e,c,u),y=w.ri,L=w.rj;g.negate(w.ni),_[x].normal.negate(m),m.scale(_[x].depth,m),_[x].point.vadd(m,y),L.copy(_[x].point),y.vsub(n,y),L.vsub(s,L),y.vadd(n,y),y.vsub(a.position,y),L.vadd(s,L),L.vsub(l.position,L),this.result.push(w),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(w,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,s,r,o,a,l,c,u,f){const h=this.v3pool;n.vsub(s,uT);const d=e.faceNormals,g=e.faces,_=e.vertices,m=t.radius;let p=!1;for(let x=0;x!==_.length;x++){const w=_[x],y=pT;o.vmult(w,y),s.vadd(y,y);const L=dT;if(y.vsub(n,L),L.lengthSquared()<m*m){if(f)return!0;p=!0;const P=this.createContactEquation(a,l,t,e,c,u);P.ri.copy(L),P.ri.normalize(),P.ni.copy(P.ri),P.ri.scale(m,P.ri),y.vsub(s,P.rj),P.ri.vadd(n,P.ri),P.ri.vsub(a.position,P.ri),P.rj.vadd(s,P.rj),P.rj.vsub(l.position,P.rj),this.result.push(P),this.createFrictionEquationsFromContact(P,this.frictionResult);return}}for(let x=0,w=g.length;x!==w&&p===!1;x++){const y=d[x],L=g[x],P=mT;o.vmult(y,P);const R=gT;o.vmult(_[L[0]],R),R.vadd(s,R);const I=_T;P.scale(-m,I),n.vadd(I,I);const b=vT;I.vsub(R,b);const S=b.dot(P),N=xT;if(n.vsub(R,N),S<0&&N.dot(P)>0){const W=[];for(let F=0,V=L.length;F!==V;F++){const G=h.get();o.vmult(_[L[F]],G),s.vadd(G,G),W.push(G)}if(eT(W,P,n)){if(f)return!0;p=!0;const F=this.createContactEquation(a,l,t,e,c,u);P.scale(-m,F.ri),P.negate(F.ni);const V=h.get();P.scale(-S,V);const G=h.get();P.scale(-m,G),n.vsub(s,F.rj),F.rj.vadd(G,F.rj),F.rj.vadd(V,F.rj),F.rj.vadd(s,F.rj),F.rj.vsub(l.position,F.rj),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),h.release(V),h.release(G),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult);for(let O=0,j=W.length;O!==j;O++)h.release(W[O]);return}else for(let F=0;F!==L.length;F++){const V=h.get(),G=h.get();o.vmult(_[L[(F+1)%L.length]],V),o.vmult(_[L[(F+2)%L.length]],G),s.vadd(V,V),s.vadd(G,G);const O=hT;G.vsub(V,O);const j=fT;O.unit(j);const H=h.get(),lt=h.get();n.vsub(V,lt);const _t=lt.dot(j);j.scale(_t,H),H.vadd(V,H);const ct=h.get();if(H.vsub(n,ct),_t>0&&_t*_t<O.lengthSquared()&&ct.lengthSquared()<m*m){if(f)return!0;const ht=this.createContactEquation(a,l,t,e,c,u);H.vsub(s,ht.rj),H.vsub(n,ht.ni),ht.ni.normalize(),ht.ni.scale(m,ht.ri),ht.rj.vadd(s,ht.rj),ht.rj.vsub(l.position,ht.rj),ht.ri.vadd(n,ht.ri),ht.ri.vsub(a.position,ht.ri),this.result.push(ht),this.createFrictionEquationsFromContact(ht,this.frictionResult);for(let $t=0,at=W.length;$t!==at;$t++)h.release(W[$t]);h.release(V),h.release(G),h.release(H),h.release(ct),h.release(lt);return}h.release(V),h.release(G),h.release(H),h.release(ct),h.release(lt)}for(let F=0,V=W.length;F!==V;F++)h.release(W[F])}}}planeConvex(t,e,n,s,r,o,a,l,c,u,f){const h=yT,d=ST;d.set(0,0,1),r.vmult(d,d);let g=0;const _=MT;for(let m=0;m!==e.vertices.length;m++)if(h.copy(e.vertices[m]),o.vmult(h,h),s.vadd(h,h),h.vsub(n,_),d.dot(_)<=0){if(f)return!0;const x=this.createContactEquation(a,l,t,e,c,u),w=ET;d.scale(d.dot(_),w),h.vsub(w,w),w.vsub(n,x.ri),x.ni.copy(d),h.vsub(s,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(a.position,x.ri),x.rj.vadd(s,x.rj),x.rj.vsub(l.position,x.rj),this.result.push(x),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,s,r,o,a,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,s,r,o,a,l,t,e,f)}sphereHeightfield(t,e,n,s,r,o,a,l,c,u,f){const h=e.data,d=t.radius,g=e.elementSize,_=OT,m=FT;ae.pointToLocalFrame(s,o,n,m);let p=Math.floor((m.x-d)/g)-1,x=Math.ceil((m.x+d)/g)+1,w=Math.floor((m.y-d)/g)-1,y=Math.ceil((m.y+d)/g)+1;if(x<0||y<0||p>h.length||w>h[0].length)return;p<0&&(p=0),x<0&&(x=0),w<0&&(w=0),y<0&&(y=0),p>=h.length&&(p=h.length-1),x>=h.length&&(x=h.length-1),y>=h[0].length&&(y=h[0].length-1),w>=h[0].length&&(w=h[0].length-1);const L=[];e.getRectMinMax(p,w,x,y,L);const P=L[0],R=L[1];if(m.z-d>R||m.z+d<P)return;const I=this.result;for(let b=p;b<x;b++)for(let S=w;S<y;S++){const N=I.length;let W=!1;if(e.getConvexTrianglePillar(b,S,!1),ae.pointToWorldFrame(s,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(W=this.sphereConvex(t,e.pillarConvex,n,_,r,o,a,l,t,e,f)),f&&W||(e.getConvexTrianglePillar(b,S,!0),ae.pointToWorldFrame(s,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(W=this.sphereConvex(t,e.pillarConvex,n,_,r,o,a,l,t,e,f)),f&&W))return!0;if(I.length-N>2)return}}boxHeightfield(t,e,n,s,r,o,a,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,s,r,o,a,l,t,e,f)}convexHeightfield(t,e,n,s,r,o,a,l,c,u,f){const h=e.data,d=e.elementSize,g=t.boundingSphereRadius,_=NT,m=UT,p=DT;ae.pointToLocalFrame(s,o,n,p);let x=Math.floor((p.x-g)/d)-1,w=Math.ceil((p.x+g)/d)+1,y=Math.floor((p.y-g)/d)-1,L=Math.ceil((p.y+g)/d)+1;if(w<0||L<0||x>h.length||y>h[0].length)return;x<0&&(x=0),w<0&&(w=0),y<0&&(y=0),L<0&&(L=0),x>=h.length&&(x=h.length-1),w>=h.length&&(w=h.length-1),L>=h[0].length&&(L=h[0].length-1),y>=h[0].length&&(y=h[0].length-1);const P=[];e.getRectMinMax(x,y,w,L,P);const R=P[0],I=P[1];if(!(p.z-g>I||p.z+g<R))for(let b=x;b<w;b++)for(let S=y;S<L;S++){let N=!1;if(e.getConvexTrianglePillar(b,S,!1),ae.pointToWorldFrame(s,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(N=this.convexConvex(t,e.pillarConvex,n,_,r,o,a,l,null,null,f,m,null)),f&&N||(e.getConvexTrianglePillar(b,S,!0),ae.pointToWorldFrame(s,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(N=this.convexConvex(t,e.pillarConvex,n,_,r,o,a,l,null,null,f,m,null)),f&&N))return!0}}sphereParticle(t,e,n,s,r,o,a,l,c,u,f){const h=RT;if(h.set(0,0,1),s.vsub(n,h),h.lengthSquared()<=t.radius*t.radius){if(f)return!0;const g=this.createContactEquation(l,a,e,t,c,u);h.normalize(),g.rj.copy(h),g.rj.scale(t.radius,g.rj),g.ni.copy(h),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,s,r,o,a,l,c,u,f){const h=TT;h.set(0,0,1),a.quaternion.vmult(h,h);const d=AT;if(s.vsub(a.position,d),h.dot(d)<=0){if(f)return!0;const _=this.createContactEquation(l,a,e,t,c,u);_.ni.copy(h),_.ni.negate(_.ni),_.ri.set(0,0,0);const m=CT;h.scale(h.dot(s),m),s.vsub(m,m),_.rj.copy(m),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(t,e,n,s,r,o,a,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,s,r,o,a,l,t,e,f)}convexParticle(t,e,n,s,r,o,a,l,c,u,f){let h=-1;const d=LT,g=IT;let _=null;const m=PT;if(m.copy(s),m.vsub(n,m),r.conjugate(Gf),Gf.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let p=0,x=t.faces.length;p!==x;p++){const w=[t.worldVertices[t.faces[p][0]]],y=t.worldFaceNormals[p];s.vsub(w[0],Wf);const L=-y.dot(Wf);if(_===null||Math.abs(L)<Math.abs(_)){if(f)return!0;_=L,h=p,d.copy(y)}}if(h!==-1){const p=this.createContactEquation(l,a,e,t,c,u);d.scale(_,g),g.vadd(s,g),g.vsub(n,g),p.rj.copy(g),d.negate(p.ni),p.ri.set(0,0,0);const x=p.ri,w=p.rj;x.vadd(s,x),x.vsub(l.position,x),w.vadd(n,w),w.vsub(a.position,w),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,s,r,o,a,l,c,u,f){return this.convexHeightfield(e,t,s,n,o,r,l,a,c,u,f)}particleCylinder(t,e,n,s,r,o,a,l,c,u,f){return this.convexParticle(e,t,s,n,o,r,l,a,c,u,f)}sphereTrimesh(t,e,n,s,r,o,a,l,c,u,f){const h=Hw,d=Vw,g=Gw,_=Ww,m=qw,p=Xw,x=Kw,w=kw,y=Bw,L=Zw;ae.pointToLocalFrame(s,o,n,m);const P=t.radius;x.lowerBound.set(m.x-P,m.y-P,m.z-P),x.upperBound.set(m.x+P,m.y+P,m.z+P),e.getTrianglesInAABB(x,L);const R=zw,I=t.radius*t.radius;for(let F=0;F<L.length;F++)for(let V=0;V<3;V++)if(e.getVertex(e.indices[L[F]*3+V],R),R.vsub(m,y),y.lengthSquared()<=I){if(w.copy(R),ae.pointToWorldFrame(s,o,w,R),R.vsub(n,y),f)return!0;let G=this.createContactEquation(a,l,t,e,c,u);G.ni.copy(y),G.ni.normalize(),G.ri.copy(G.ni),G.ri.scale(t.radius,G.ri),G.ri.vadd(n,G.ri),G.ri.vsub(a.position,G.ri),G.rj.copy(R),G.rj.vsub(l.position,G.rj),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult)}for(let F=0;F<L.length;F++)for(let V=0;V<3;V++){e.getVertex(e.indices[L[F]*3+V],h),e.getVertex(e.indices[L[F]*3+(V+1)%3],d),d.vsub(h,g),m.vsub(d,p);const G=p.dot(g);m.vsub(h,p);let O=p.dot(g);if(O>0&&G<0&&(m.vsub(h,p),_.copy(g),_.normalize(),O=p.dot(_),_.scale(O,p),p.vadd(h,p),p.distanceTo(m)<t.radius)){if(f)return!0;const H=this.createContactEquation(a,l,t,e,c,u);p.vsub(m,H.ni),H.ni.normalize(),H.ni.scale(t.radius,H.ri),H.ri.vadd(n,H.ri),H.ri.vsub(a.position,H.ri),ae.pointToWorldFrame(s,o,p,p),p.vsub(l.position,H.rj),ae.vectorToWorldFrame(o,H.ni,H.ni),ae.vectorToWorldFrame(o,H.ri,H.ri),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult)}}const b=$w,S=Yw,N=jw,W=Ow;for(let F=0,V=L.length;F!==V;F++){e.getTriangleVertices(L[F],b,S,N),e.getNormal(L[F],W),m.vsub(b,p);let G=p.dot(W);if(W.scale(G,p),m.vsub(p,p),G=p.distanceTo(m),Ce.pointInTriangle(p,b,S,N)&&G<t.radius){if(f)return!0;let O=this.createContactEquation(a,l,t,e,c,u);p.vsub(m,O.ni),O.ni.normalize(),O.ni.scale(t.radius,O.ri),O.ri.vadd(n,O.ri),O.ri.vsub(a.position,O.ri),ae.pointToWorldFrame(s,o,p,p),p.vsub(l.position,O.rj),ae.vectorToWorldFrame(o,O.ni,O.ni),ae.vectorToWorldFrame(o,O.ri,O.ri),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}}L.length=0}planeTrimesh(t,e,n,s,r,o,a,l,c,u,f){const h=new E,d=Nw;d.set(0,0,1),r.vmult(d,d);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,h);const _=new E;_.copy(h),ae.pointToWorldFrame(s,o,_,h);const m=Uw;if(h.vsub(n,m),d.dot(m)<=0){if(f)return!0;const x=this.createContactEquation(a,l,t,e,c,u);x.ni.copy(d);const w=Fw;d.scale(m.dot(d),w),h.vsub(w,w),x.ri.copy(w),x.ri.vsub(a.position,x.ri),x.rj.copy(h),x.rj.vsub(l.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}}const os=new E,Bs=new E,zs=new E,Pw=new E,Lw=new E,Iw=new Re,Dw=new Re,Nw=new E,Uw=new E,Fw=new E,Ow=new E,Bw=new E;new E;const zw=new E,kw=new E,Hw=new E,Vw=new E,Gw=new E,Ww=new E,qw=new E,Xw=new E,$w=new E,Yw=new E,jw=new E,Kw=new mn,Zw=[],Vo=new E,Vf=new E,Jw=new E,Qw=new E,tT=new E;function eT(i,t,e){let n=null;const s=i.length;for(let r=0;r!==s;r++){const o=i[r],a=Jw;i[(r+1)%s].vsub(o,a);const l=Qw;a.cross(t,l);const c=tT;e.vsub(o,c);const u=l.dot(c);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}const Go=new E,nT=new E,iT=new E,sT=new E,rT=[new E,new E,new E,new E,new E,new E],oT=new E,aT=new E,lT=new E,cT=new E,uT=new E,hT=new E,fT=new E,dT=new E,pT=new E,mT=new E,gT=new E,_T=new E,vT=new E,xT=new E;new E;new E;const yT=new E,ST=new E,MT=new E,ET=new E,bT=new E,wT=new E,TT=new E,AT=new E,CT=new E,RT=new E,Gf=new Re,PT=new E;new E;const LT=new E,Wf=new E,IT=new E,DT=new E,NT=new E,UT=[0],FT=new E,OT=new E;class qf{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),s=this.current;let r=0;for(;n>s[r];)r++;if(n!==s[r]){for(let o=s.length-1;o>=r;o--)s[o+1]=s[o];s[r]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,s=this.previous,r=n.length,o=s.length;let a=0;for(let l=0;l<r;l++){let c=!1;const u=n[l];for(;u>s[a];)a++;c=u===s[a],c||Xf(t,u)}a=0;for(let l=0;l<o;l++){let c=!1;const u=s[l];for(;u>n[a];)a++;c=n[a]===u,c||Xf(e,u)}}}function Xf(i,t){i.push((t&4294901760)>>16,t&65535)}const Nl=(i,t)=>i<t?`${i}-${t}`:`${t}-${i}`;class BT{constructor(){this.data={keys:[]}}get(t,e){const n=Nl(t,e);return this.data[n]}set(t,e,n){const s=Nl(t,e);this.get(t,e)||this.data.keys.push(s),this.data[s]=n}delete(t,e){const n=Nl(t,e),s=this.data.keys.indexOf(n);s!==-1&&this.data.keys.splice(s,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class zT extends rm{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new E,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new E,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Xb,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new Ew,this.constraints=[],this.narrowphase=new Rw(this),this.collisionMatrix=new Lf,this.collisionMatrixPrevious=new Lf,this.bodyOverlapKeeper=new qf,this.shapeOverlapKeeper=new qf,this.contactmaterials=[],this.contactMaterialTable=new BT,this.defaultMaterial=new or("default"),this.defaultContactMaterial=new rr(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof da?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,s){return n===void 0&&(n={}),n.mode=Ce.ALL,n.from=t,n.to=e,n.callback=s,Ul.intersectWorld(this,n)}raycastAny(t,e,n,s){return n===void 0&&(n={}),n.mode=Ce.ANY,n.from=t,n.to=e,n.result=s,Ul.intersectWorld(this,n)}raycastClosest(t,e,n,s){return n===void 0&&(n={}),n.mode=Ce.CLOSEST,n.from=t,n.to=e,n.result=s,Ul.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof xt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,s=n.indexOf(t);if(s!==-1){n.splice(s,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const s=e[n].shapes;for(let r=0;r<s.length;r++){const o=s[r];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=Ie.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const s=n-this.lastCallTime;this.step(t,s,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const s=Ie.now();let r=0;for(;this.accumulator>=t&&r<n&&(this.internalStep(t),this.accumulator-=t,r++,!(Ie.now()-s>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=WT,s=qT,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,u=this.profile,f=xt.DYNAMIC;let h=-1/0;const d=this.constraints,g=GT;l.length();const _=l.x,m=l.y,p=l.z;let x=0;for(c&&(h=Ie.now()),x=0;x!==r;x++){const F=o[x];if(F.type===f){const V=F.force,G=F.mass;V.x+=G*_,V.y+=G*m,V.z+=G*p}}for(let F=0,V=this.subsystems.length;F!==V;F++)this.subsystems[F].update();c&&(h=Ie.now()),n.length=0,s.length=0,this.broadphase.collisionPairs(this,n,s),c&&(u.broadphase=Ie.now()-h);let w=d.length;for(x=0;x!==w;x++){const F=d[x];if(!F.collideConnected)for(let V=n.length-1;V>=0;V-=1)(F.bodyA===n[V]&&F.bodyB===s[V]||F.bodyB===n[V]&&F.bodyA===s[V])&&(n.splice(V,1),s.splice(V,1))}this.collisionMatrixTick(),c&&(h=Ie.now());const y=VT,L=e.length;for(x=0;x!==L;x++)y.push(e[x]);e.length=0;const P=this.frictionEquations.length;for(x=0;x!==P;x++)g.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,s,this,e,y,this.frictionEquations,g),c&&(u.narrowphase=Ie.now()-h),c&&(h=Ie.now()),x=0;x<this.frictionEquations.length;x++)a.addEquation(this.frictionEquations[x]);const R=e.length;for(let F=0;F!==R;F++){const V=e[F],G=V.bi,O=V.bj,j=V.si,H=V.sj;let lt;if(G.material&&O.material?lt=this.getContactMaterial(G.material,O.material)||this.defaultContactMaterial:lt=this.defaultContactMaterial,lt.friction,G.material&&O.material&&(G.material.friction>=0&&O.material.friction>=0&&G.material.friction*O.material.friction,G.material.restitution>=0&&O.material.restitution>=0&&(V.restitution=G.material.restitution*O.material.restitution)),a.addEquation(V),G.allowSleep&&G.type===xt.DYNAMIC&&G.sleepState===xt.SLEEPING&&O.sleepState===xt.AWAKE&&O.type!==xt.STATIC){const _t=O.velocity.lengthSquared()+O.angularVelocity.lengthSquared(),ct=O.sleepSpeedLimit**2;_t>=ct*2&&(G.wakeUpAfterNarrowphase=!0)}if(O.allowSleep&&O.type===xt.DYNAMIC&&O.sleepState===xt.SLEEPING&&G.sleepState===xt.AWAKE&&G.type!==xt.STATIC){const _t=G.velocity.lengthSquared()+G.angularVelocity.lengthSquared(),ct=G.sleepSpeedLimit**2;_t>=ct*2&&(O.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(G,O,!0),this.collisionMatrixPrevious.get(G,O)||(Rr.body=O,Rr.contact=V,G.dispatchEvent(Rr),Rr.body=G,O.dispatchEvent(Rr)),this.bodyOverlapKeeper.set(G.id,O.id),this.shapeOverlapKeeper.set(j.id,H.id)}for(this.emitContactEvents(),c&&(u.makeContactConstraints=Ie.now()-h,h=Ie.now()),x=0;x!==r;x++){const F=o[x];F.wakeUpAfterNarrowphase&&(F.wakeUp(),F.wakeUpAfterNarrowphase=!1)}for(w=d.length,x=0;x!==w;x++){const F=d[x];F.update();for(let V=0,G=F.equations.length;V!==G;V++){const O=F.equations[V];a.addEquation(O)}}a.solve(t,this),c&&(u.solve=Ie.now()-h),a.removeAllEquations();const I=Math.pow;for(x=0;x!==r;x++){const F=o[x];if(F.type&f){const V=I(1-F.linearDamping,t),G=F.velocity;G.scale(V,G);const O=F.angularVelocity;if(O){const j=I(1-F.angularDamping,t);O.scale(j,O)}}}this.dispatchEvent(HT),c&&(h=Ie.now());const S=this.stepnumber%(this.quatNormalizeSkip+1)===0,N=this.quatNormalizeFast;for(x=0;x!==r;x++)o[x].integrate(t,S,N);this.clearForces(),this.broadphase.dirty=!0,c&&(u.integrate=Ie.now()-h),this.stepnumber+=1,this.dispatchEvent(kT);let W=!0;if(this.allowSleep)for(W=!1,x=0;x!==r;x++){const F=o[x];F.sleepTick(this.time),F.sleepState!==xt.SLEEPING&&(W=!0)}this.hasActiveBodies=W}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(ai,li),t){for(let r=0,o=ai.length;r<o;r+=2)Pr.bodyA=this.getBodyById(ai[r]),Pr.bodyB=this.getBodyById(ai[r+1]),this.dispatchEvent(Pr);Pr.bodyA=Pr.bodyB=null}if(e){for(let r=0,o=li.length;r<o;r+=2)Lr.bodyA=this.getBodyById(li[r]),Lr.bodyB=this.getBodyById(li[r+1]),this.dispatchEvent(Lr);Lr.bodyA=Lr.bodyB=null}ai.length=li.length=0;const n=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((n||s)&&this.shapeOverlapKeeper.getDiff(ai,li),n){for(let r=0,o=ai.length;r<o;r+=2){const a=this.getShapeById(ai[r]),l=this.getShapeById(ai[r+1]);ci.shapeA=a,ci.shapeB=l,a&&(ci.bodyA=a.body),l&&(ci.bodyB=l.body),this.dispatchEvent(ci)}ci.bodyA=ci.bodyB=ci.shapeA=ci.shapeB=null}if(s){for(let r=0,o=li.length;r<o;r+=2){const a=this.getShapeById(li[r]),l=this.getShapeById(li[r+1]);ui.shapeA=a,ui.shapeB=l,a&&(ui.bodyA=a.body),l&&(ui.bodyB=l.body),this.dispatchEvent(ui)}ui.bodyA=ui.bodyB=ui.shapeA=ui.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const s=t[n];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}}new mn;const Ul=new Ce,Ie=globalThis.performance||{};if(!Ie.now){let i=Date.now();Ie.timing&&Ie.timing.navigationStart&&(i=Ie.timing.navigationStart),Ie.now=()=>Date.now()-i}new E;const kT={type:"postStep"},HT={type:"preStep"},Rr={type:xt.COLLIDE_EVENT_NAME,body:null,contact:null},VT=[],GT=[],WT=[],qT=[],ai=[],li=[],Pr={type:"beginContact",bodyA:null,bodyB:null},Lr={type:"endContact",bodyA:null,bodyB:null},ci={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},ui={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},XT=33,Ir=.5,$T=-.5,YT=2,jT=100,KT=xs({__name:"GameScene",setup(i){const t=ys(),e=ur(),n=Ee(null);let s,r,o,a,l;const c=[],u=[];let f=0,h=!1,d=0,g,_=!1,m,p,x;function w(v){const U=document.createElement("canvas");U.width=256,U.height=256;const k=U.getContext("2d");k.fillStyle="#f8f8f8",k.fillRect(0,0,256,256);const B=256*.07,st={1:[[.5,.5]],2:[[.28,.28],[.72,.72]],3:[[.28,.28],[.5,.5],[.72,.72]],4:[[.28,.28],[.72,.28],[.28,.72],[.72,.72]],5:[[.28,.28],[.72,.28],[.5,.5],[.28,.72],[.72,.72]],6:[[.28,.25],[.72,.25],[.28,.5],[.72,.5],[.28,.75],[.72,.75]]};k.fillStyle="#1a1a2e";for(const[dt,wt]of st[v])k.beginPath(),k.arc(dt*256,wt*256,B,0,Math.PI*2),k.fill();const K=new db(U);return K.needsUpdate=!0,K}const y=[3,4,1,6,2,5];function L(){return y.map(v=>{const T=w(v);return new wr({map:T,roughness:.3,metalness:0})})}const P={1:new Y(0,1,0),6:new Y(0,-1,0),2:new Y(0,0,1),5:new Y(0,0,-1),3:new Y(1,0,0),4:new Y(-1,0,0)};function R(v){const T=new Y(0,1,0);let U=-1/0,k=1;for(const[B,st]of Object.entries(P)){const dt=st.clone().applyQuaternion(v).dot(T);dt>U&&(U=dt,k=parseInt(B))}return k}function I(v){const T=new qi;switch(v){case 1:T.setFromEuler(new qe(0,0,0));break;case 6:T.setFromEuler(new qe(Math.PI,0,0));break;case 2:T.setFromEuler(new qe(Math.PI/2,0,0));break;case 5:T.setFromEuler(new qe(-Math.PI/2,0,0));break;case 3:T.setFromEuler(new qe(0,0,-Math.PI/2));break;case 4:T.setFromEuler(new qe(0,0,Math.PI/2));break}return T}function b(){if(!n.value)return;s=new hb({canvas:n.value,antialias:!0,alpha:!1}),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.shadowMap.enabled=!0,s.shadowMap.type=bp,s.shadowMap.autoUpdate=!1,s.shadowMap.needsUpdate=!0,s.toneMapping=Tp,s.toneMappingExposure=1.2,ft(),r=new fb,r.background=new ee("#0d0d14"),r.fog=new Mu("#0d0d14",15,30),o=new un(45,ot(),.1,100),o.position.set(0,12,.01),o.lookAt(0,0,0);const v=new vb(16777215,.4);r.add(v);const T=new _b(16777215,1);T.position.set(3,12,3),T.castShadow=!0,T.shadow.mapSize.width=2048,T.shadow.mapSize.height=2048,T.shadow.camera.near=.5,T.shadow.camera.far=30,T.shadow.camera.left=-8,T.shadow.camera.right=8,T.shadow.camera.top=8,T.shadow.camera.bottom=-8,r.add(T);const U=new mb(16766617,.6,20);U.position.set(0,6,0),r.add(U),a=new zT({gravity:new E(0,-15,0)}),a.broadphase=new Gs(a),a.solver.iterations=10,a.allowSleep=!0,a.defaultContactMaterial.contactEquationStiffness=1e8,a.defaultContactMaterial.contactEquationRelaxation=3,p=new or("dice"),x=new or("table"),a.addContactMaterial(new rr(p,x,{friction:.4,restitution:.3})),a.addContactMaterial(new rr(p,p,{friction:.3,restitution:.4})),S(),N(),F(),V()}function S(){const v=new yi(8,.3,6),T=new wr({color:"#1a5c2a",roughness:.8,metalness:0}),U=new Fe(v,T);U.position.y=-.15,U.receiveShadow=!0,r.add(U);const k=new wr({color:"#4a3020",roughness:.6,metalness:.1}),B=new yi(8.4,.4,.2),st=new yi(.2,.4,6.4),K=new Fe(B,k);K.position.set(0,0,3.1),K.castShadow=!0,r.add(K);const dt=new Fe(B,k);dt.position.set(0,0,-3.1),dt.castShadow=!0,r.add(dt);const wt=new Fe(st,k);wt.position.set(-4.1,0,0),wt.castShadow=!0,r.add(wt);const Z=new Fe(st,k);Z.position.set(4.1,0,0),Z.castShadow=!0,r.add(Z),m=new xt({type:xt.STATIC,material:x}),m.addShape(new ki(new E(4,1,3)),new E(0,-1,0)),a.addBody(m)}function N(){const U=x,k=new ki(new E(4+.5*2,4,.5)),B=[new E(0,3,3+.5),new E(0,3,-3-.5)],st=new ki(new E(.5,4,3+.5*2)),K=[new E(4+.5,3,0),new E(-4-.5,3,0)];for(const wt of B){const Z=new xt({type:xt.STATIC,material:U});Z.addShape(k),Z.position.copy(wt),a.addBody(Z)}for(const wt of K){const Z=new xt({type:xt.STATIC,material:U});Z.addShape(st),Z.position.copy(wt),a.addBody(Z)}const dt=new xt({type:xt.STATIC,material:U});dt.addShape(new ki(new E(5,.25,4))),dt.position.set(0,7.25,0),a.addBody(dt)}const W=Ir/2;function F(){for(let v=0;v<5;v++){const T=new yb(Ir,Ir,Ir,4,Ir*.12),U=L(),k=new Fe(T,U);k.castShadow=!0,k.receiveShadow=!0,k.position.set(-10,-10,-10),k.visible=!1,r.add(k),c.push(k);const B=new xt({mass:.3,type:xt.STATIC,material:p,shape:new ki(new E(W,W,W)),allowSleep:!0,sleepSpeedLimit:.1,sleepTimeLimit:1,linearDamping:.1,angularDamping:.1});B.position.set(-10,-10,-10),a.addBody(B),u.push(B)}}function V(){g=new Or;const v=1,T=1.8,U=.08,k=new fa(v,v*.9,T,32,1,!0),B=new wr({color:"#8B4513",roughness:.7,metalness:.1,side:Wn}),st=new Fe(k,B);st.castShadow=!0,g.add(st);const K=new Eu(v*.9,32),dt=new Fe(K,B);dt.rotation.x=-Math.PI/2,dt.position.y=-T/2,g.add(dt);const wt=new fa(v-U,v*.9-U,T-.05,32,1,!0),Z=new wr({color:"#3a1f0d",roughness:.9,side:Ze}),mt=new Fe(wt,Z);g.add(mt),g.position.set(3,T/2+.01,0),g.visible=!1,r.add(g)}async function G(){if(_)return;_=!0,h=!1,f=performance.now(),d=0;const v=[],T=[];for(let U=0;U<5;U++)t.turnState.kept[U]?v.push(U):T.push(U);v.forEach((U,k)=>{const B=-2+k*.8,st=c[U],K=u[U];K.type=xt.STATIC,K.position.set(B,W+.01,2),K.velocity.setZero(),K.angularVelocity.setZero(),st.visible=!0,st.position.set(B,W+.01,2);const dt=t.turnState.dice[U];if(dt>0){const wt=I(dt);st.quaternion.copy(wt),K.quaternion.set(wt.x,wt.y,wt.z,wt.w)}}),g.visible=!0,g.position.set(0,1.5,-1),g.rotation.set(0,0,0),await O(),await j();for(let U=0;U<T.length;U++){const k=T[U],B=u[k],st=c[k];B.type=xt.DYNAMIC,B.wakeUp();const K=(Math.random()-.5)*1.5,dt=(Math.random()-.5)*.5;B.position.set(K,3+Math.random()*1,-.5+dt),B.quaternion.setFromEuler(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),B.velocity.set((Math.random()-.5)*5,-2+Math.random()*2,(Math.random()-.5)*4),B.angularVelocity.set((Math.random()-.5)*20,(Math.random()-.5)*20,(Math.random()-.5)*20),st.visible=!0}await H(),_=!1}function O(){return new Promise(v=>{const T=performance.now(),U=500;function k(){const B=performance.now()-T,st=Math.min(B/U,1),K=Math.sin(st*Math.PI*6)*.15*(1-st);g.rotation.z=K,g.position.y=1.5+Math.abs(Math.sin(st*Math.PI*3))*.2,st<1?requestAnimationFrame(k):v()}k()})}function j(){return new Promise(v=>{const T=performance.now(),U=400;function k(){const B=performance.now()-T,st=Math.min(B/U,1),K=st*st*(3-2*st);g.rotation.x=-K*1.8,g.position.y=1.5+K*2,g.position.z=-1+K*1,st<1?requestAnimationFrame(k):v()}k()})}function H(){return new Promise(v=>{const T=performance.now(),U=300;function k(){const B=performance.now()-T,st=Math.min(B/U,1);g.position.x=5*st,g.position.y=3.5-st*2,st<1?requestAnimationFrame(k):(g.visible=!1,v())}k()})}function lt(){for(let v=0;v<5;v++){if(t.turnState.kept[v])continue;const T=u[v];if(T.type!==xt.STATIC&&T.position.y<$T){const U=(Math.random()-.5)*2,k=(Math.random()-.5)*2;T.position.set(U,YT,k),T.velocity.set(0,-1,0),T.angularVelocity.set((Math.random()-.5)*5,(Math.random()-.5)*5,(Math.random()-.5)*5),T.wakeUp(),console.warn(`[Physics] 주사위 ${v}이(가) 낙하하여 복구됨`)}}}function _t(){for(let T=0;T<5;T++){if(t.turnState.kept[T])continue;const U=u[T];if(U.type===xt.STATIC)continue;const k=U.velocity,B=U.angularVelocity;if(k.length()>.05||B.length()>.05)return!1}return!0}function ct(){const v=performance.now();if(v-d<XT)return;d=v;const T={dice:c.map(U=>({p:[Math.round(U.position.x*1e3)/1e3,Math.round(U.position.y*1e3)/1e3,Math.round(U.position.z*1e3)/1e3],q:[Math.round(U.quaternion.x*1e3)/1e3,Math.round(U.quaternion.y*1e3)/1e3,Math.round(U.quaternion.z*1e3)/1e3,Math.round(U.quaternion.w*1e3)/1e3],v:U.visible})),cup:{p:[Math.round(g.position.x*1e3)/1e3,Math.round(g.position.y*1e3)/1e3,Math.round(g.position.z*1e3)/1e3],r:[Math.round(g.rotation.x*1e3)/1e3,Math.round(g.rotation.y*1e3)/1e3,Math.round(g.rotation.z*1e3)/1e3],v:g.visible}};e.sendPhysicsStream(T)}let ht=[],$t=null;const at=new qi,gt=new qi;function Ct(){const v=t.physicsStreamData;v&&v!==$t&&($t=v,ht.push({time:performance.now(),frame:v}),ht.length>30&&ht.shift())}function yt(v){if(v.dice)for(let T=0;T<5;T++){const U=v.dice[T];U&&(c[T].visible=U.v,U.v&&(c[T].position.set(U.p[0],U.p[1],U.p[2]),c[T].quaternion.set(U.q[0],U.q[1],U.q[2],U.q[3])))}v.cup&&(g.visible=v.cup.v,v.cup.v&&(g.position.set(v.cup.p[0],v.cup.p[1],v.cup.p[2]),g.rotation.set(v.cup.r[0],v.cup.r[1],v.cup.r[2])))}function zt(){var dt,wt;if(ht.length===0)return;const v=performance.now()-jT;let T=ht[0],U=null;for(let Z=ht.length-1;Z>=0;Z--)if(ht[Z].time<=v){T=ht[Z],U=ht[Z+1]??null;break}if(!U){yt(ht[ht.length-1].frame);return}const k=U.time-T.time,B=k>0?Math.min(Math.max((v-T.time)/k,0),1):1,st=T.frame,K=U.frame;if(K.dice)for(let Z=0;Z<5;Z++){const mt=K.dice[Z];if(!mt||(c[Z].visible=mt.v,!mt.v))continue;const Rt=(dt=st.dice)==null?void 0:dt[Z];if(!Rt||!Rt.v){c[Z].position.set(mt.p[0],mt.p[1],mt.p[2]),c[Z].quaternion.set(mt.q[0],mt.q[1],mt.q[2],mt.q[3]);continue}c[Z].position.set(Rt.p[0]+(mt.p[0]-Rt.p[0])*B,Rt.p[1]+(mt.p[1]-Rt.p[1])*B,Rt.p[2]+(mt.p[2]-Rt.p[2])*B),at.set(Rt.q[0],Rt.q[1],Rt.q[2],Rt.q[3]).normalize(),gt.set(mt.q[0],mt.q[1],mt.q[2],mt.q[3]).normalize(),c[Z].quaternion.slerpQuaternions(at,gt,B)}if(K.cup&&(g.visible=K.cup.v,K.cup.v)){const Z=(wt=st.cup)!=null&&wt.v?st.cup:K.cup;g.position.set(Z.p[0]+(K.cup.p[0]-Z.p[0])*B,Z.p[1]+(K.cup.p[1]-Z.p[1])*B,Z.p[2]+(K.cup.p[2]-Z.p[2])*B),g.rotation.set(Z.r[0]+(K.cup.r[0]-Z.r[0])*B,Z.r[1]+(K.cup.r[1]-Z.r[1])*B,Z.r[2]+(K.cup.r[2]-Z.r[2])*B)}}function Ht(){const v=t.turnState.dice;for(let T=0;T<5;T++){if(v[T]<=0)continue;const U=c[T];if(!U.visible)continue;if(R(U.quaternion)!==v[T]){let B=function(){const Z=performance.now()-dt,mt=Math.min(Z/wt,1),Rt=mt*mt*(3-2*mt);U.quaternion.slerpQuaternions(K,st,Rt),u[T].quaternion.set(U.quaternion.x,U.quaternion.y,U.quaternion.z,U.quaternion.w),mt<1&&requestAnimationFrame(B)};const st=I(v[T]),K=U.quaternion.clone(),dt=performance.now(),wt=200;B()}u[T].type=xt.STATIC,u[T].velocity.setZero(),u[T].angularVelocity.setZero()}}function Gt(){h=!1,f=performance.now(),t.physicsStreamData=null,ht=[],$t=null;for(let v=0;v<5;v++)u[v].type=xt.STATIC,u[v].velocity.setZero(),u[v].angularVelocity.setZero()}function ge(){if(h)return;h=!0;for(let T=0;T<5;T++)!t.turnState.kept[T]&&u[T].type===xt.DYNAMIC&&(c[T].position.copy(u[T].position),c[T].quaternion.copy(u[T].quaternion));const v=[];for(let T=0;T<5;T++)t.turnState.kept[T]?v.push(t.turnState.dice[T]||R(c[T].quaternion)):v.push(R(c[T].quaternion));for(let T=0;T<5;T++)t.turnState.kept[T]||(u[T].type=xt.STATIC,u[T].velocity.setZero(),u[T].angularVelocity.setZero());console.log("[Roller] 물리 결과 전송:",v),e.submitDiceResult(v)}const D=new ee("#2244aa"),z=new ee("#000000");function C(){for(let v=0;v<5;v++){const T=c[v];if(!T.visible)continue;const U=T.material,k=t.turnState.kept[v];U.forEach(B=>{B.emissive.copy(k?D:z),B.emissiveIntensity=k?.3:0})}}let ut=0,tt=0;function nt(){l=requestAnimationFrame(nt);const v=performance.now(),T=ut>0?Math.min((v-ut)/1e3,.1):1/60;ut=v;const U=t.isRolling&&!t.isMyRolling,k=u.some(B=>B.type===xt.DYNAMIC&&B.sleepState!==xt.SLEEPING);if(a&&!U&&(k||t.isRolling)&&(a.step(1/120,T,5),lt()),!U)for(let B=0;B<5;B++)c[B].visible&&u[B].type===xt.DYNAMIC&&(c[B].position.copy(u[B].interpolatedPosition),c[B].quaternion.copy(u[B].interpolatedQuaternion));if((t.isRolling||_||k)&&(tt=v),v-tt<500&&(s.shadowMap.needsUpdate=!0),t.isRolling&&t.isMyRolling&&ct(),U&&(Ct(),zt()),t.isRolling&&t.isMyRolling&&!_&&!h){const B=performance.now()-f;if(B>1500&&_t()&&ge(),B>1e4){for(let st=0;st<5;st++)t.turnState.kept[st]||(u[st].velocity.setZero(),u[st].angularVelocity.setZero());ge()}}if(C(),o){const B=performance.now()*1e-4;o.position.x=Math.sin(B)*.05,o.position.z=.01+Math.cos(B)*.05}s&&r&&o&&s.render(r,o)}function ot(){return n.value?n.value.clientWidth/n.value.clientHeight:16/9}function ft(){if(!n.value||!s)return;const v=n.value.clientWidth,T=n.value.clientHeight;s.setSize(v,T,!1),o&&(o.aspect=v/T,o.updateProjectionMatrix())}let et=null;function M(v){if(!n.value||!o||!t.isMyTurn||t.turnState.rollCount===0||t.turnState.rollCount>=3||t.isRolling)return;const T=n.value.getBoundingClientRect(),U=new ne((v.clientX-T.left)/T.width*2-1,-((v.clientY-T.top)/T.height)*2+1),k=new xb;k.setFromCamera(U,o);const B=k.intersectObjects(c);if(B.length>0){const st=B[0].object,K=c.indexOf(st);K>=0&&t.toggleKeep(K)}}return $s(()=>t.isRolling,(v,T)=>{v&&!T?t.isMyRolling?G():Gt():!v&&T&&(t.isMyRolling||Ht())}),$s(()=>t.turnState.rollCount,v=>{v===0&&c.forEach(T=>{T.visible=!1})}),io(()=>{b(),nt(),et=new ResizeObserver(()=>{ft()}),n.value&&et.observe(n.value.parentElement)}),Dd(()=>{cancelAnimationFrame(l),et==null||et.disconnect(),s==null||s.dispose()}),(v,T)=>(bt(),It("canvas",{ref_key:"canvasRef",ref:n,class:"game-canvas",onClick:M},null,512))}}),ZT=hr(KT,[["__scopeId","data-v-5d756ad5"]]),ar=["ones","twos","threes","fours","fives","sixes"],Da=["choice","fourOfAKind","fullHouse","smallStraight","largeStraight","yacht"];[...ar,...Da];const lr={ones:"Ones (1)",twos:"Twos (2)",threes:"Threes (3)",fours:"Fours (4)",fives:"Fives (5)",sixes:"Sixes (6)",choice:"Choice",fourOfAKind:"Four of a Kind",fullHouse:"Full House",smallStraight:"Small Straight",largeStraight:"Large Straight",yacht:"Yacht!"},JT={class:"score-card"},QT={class:"section"},tA=["onClick"],eA={class:"cat-label"},nA={class:"cat-score"},iA={key:1,class:"preview"},sA={class:"score-row subtotal"},rA={class:"cat-label"},oA={key:0,class:"bonus-achieved"},aA={class:"cat-score"},lA={class:"score-row bonus"},cA={class:"cat-score"},uA={class:"section"},hA=["onClick"],fA={class:"cat-label"},dA={class:"cat-score"},pA={key:1,class:"preview"},mA={class:"total-row"},gA={class:"total-score"},_A=xs({__name:"ScoreCard",setup(i){const t=ys(),e=ur(),n=Ge(()=>{let a=0;for(const l of ar){const c=t.myScores[l];c!==null&&(a+=c)}return a});function s(a){return t.canSelectScore&&t.myScores[a]===null}function r(a){return t.myScores[a]!==null||!t.canSelectScore?null:t.possibleScores[a]??null}function o(a){s(a)&&e.selectCategory(a)}return(a,l)=>(bt(),It("div",JT,[l[5]||(l[5]=it("h3",{class:"card-title"},"MY SCORE",-1)),it("div",QT,[l[2]||(l[2]=it("div",{class:"section-header"},"UPPER",-1)),(bt(!0),It(oe,null,Oe(Ot(ar),c=>(bt(),It("div",{key:c,class:Kn(["score-row",{filled:Ot(t).myScores[c]!==null,selectable:s(c),"has-preview":r(c)!==null}]),onClick:u=>o(c)},[it("span",eA,Xt(Ot(lr)[c]),1),it("span",nA,[Ot(t).myScores[c]!==null?(bt(),It(oe,{key:0},[rn(Xt(Ot(t).myScores[c]),1)],64)):r(c)!==null?(bt(),It("span",iA,Xt(r(c)),1)):(bt(),It(oe,{key:2},[rn(" - ")],64))])],10,tA))),128)),it("div",sA,[it("span",rA,[l[0]||(l[0]=rn(" Subtotal ",-1)),n.value>=63?(bt(),It("span",oA,"+35")):fn("",!0)]),it("span",aA,Xt(n.value)+" / 63",1)]),it("div",lA,[l[1]||(l[1]=it("span",{class:"cat-label"},"Bonus",-1)),it("span",cA,Xt(Ot(t).myBonus),1)])]),it("div",uA,[l[3]||(l[3]=it("div",{class:"section-header"},"LOWER",-1)),(bt(!0),It(oe,null,Oe(Ot(Da),c=>(bt(),It("div",{key:c,class:Kn(["score-row",{filled:Ot(t).myScores[c]!==null,selectable:s(c),"has-preview":r(c)!==null,yacht:c==="yacht"&&r(c)===50}]),onClick:u=>o(c)},[it("span",fA,Xt(Ot(lr)[c]),1),it("span",dA,[Ot(t).myScores[c]!==null?(bt(),It(oe,{key:0},[rn(Xt(Ot(t).myScores[c]),1)],64)):r(c)!==null?(bt(),It("span",pA,Xt(r(c)),1)):(bt(),It(oe,{key:2},[rn(" - ")],64))])],10,hA))),128))]),it("div",mA,[l[4]||(l[4]=it("span",null,"TOTAL",-1)),it("span",gA,Xt(Ot(t).myTotal),1)])]))}}),vA=hr(_A,[["__scopeId","data-v-8814a682"]]),xA={class:"popup-card"},yA={key:0,class:"loading"},SA={class:"popup-header"},MA={class:"player-info"},EA={class:"player-name"},bA={class:"popup-body"},wA={class:"section"},TA={class:"cat-label"},AA={class:"cat-score"},CA={class:"score-row subtotal"},RA={class:"cat-label"},PA={key:0,class:"bonus-tag"},LA={class:"cat-score"},IA={class:"score-row bonus-row"},DA={class:"cat-score"},NA={class:"section"},UA={class:"cat-label"},FA={class:"cat-score"},OA={class:"total-row"},BA={class:"total-score"},zA=xs({__name:"PlayerScorePopup",props:{data:{}},emits:["close"],setup(i,{emit:t}){const e=i,n=t;function s(){if(!e.data)return 0;let o=0;for(const a of ar){const l=e.data.scores[a];l!==null&&(o+=l)}return o}function r(o){o.target.classList.contains("popup-overlay")&&n("close")}return(o,a)=>(bt(),It("div",{class:"popup-overlay",onClick:r},[it("div",xA,[i.data?(bt(),It(oe,{key:1},[it("div",SA,[it("div",MA,[it("span",{class:"player-dot",style:cn({background:i.data.color})},null,4),it("span",EA,Xt(i.data.name),1)]),it("button",{class:"close-btn",onClick:a[0]||(a[0]=l=>n("close"))},"✕")]),it("div",bA,[it("div",wA,[a[4]||(a[4]=it("div",{class:"section-header"},"UPPER",-1)),(bt(!0),It(oe,null,Oe(Ot(ar),l=>(bt(),It("div",{key:l,class:Kn(["score-row",{filled:i.data.scores[l]!==null}])},[it("span",TA,Xt(Ot(lr)[l]),1),it("span",AA,Xt(i.data.scores[l]!==null?i.data.scores[l]:"-"),1)],2))),128)),it("div",CA,[it("span",RA,[a[2]||(a[2]=rn(" Subtotal ",-1)),s()>=63?(bt(),It("span",PA,"+35")):fn("",!0)]),it("span",LA,Xt(s())+" / 63",1)]),it("div",IA,[a[3]||(a[3]=it("span",{class:"cat-label"},"Bonus",-1)),it("span",DA,Xt(i.data.bonus),1)])]),it("div",NA,[a[5]||(a[5]=it("div",{class:"section-header"},"LOWER",-1)),(bt(!0),It(oe,null,Oe(Ot(Da),l=>(bt(),It("div",{key:l,class:Kn(["score-row",{filled:i.data.scores[l]!==null}])},[it("span",UA,Xt(Ot(lr)[l]),1),it("span",FA,Xt(i.data.scores[l]!==null?i.data.scores[l]:"-"),1)],2))),128))]),it("div",OA,[a[6]||(a[6]=it("span",null,"TOTAL",-1)),it("span",BA,Xt(i.data.total),1)])])],64)):(bt(),It("div",yA,[...a[1]||(a[1]=[it("span",{class:"loading-spinner"},null,-1),it("span",null,"불러오는 중...",-1)])]))])]))}}),kA=hr(zA,[["__scopeId","data-v-a96b7ade"]]),HA={class:"game-view"},VA={class:"top-bar"},GA={class:"turn-info"},WA={class:"turn-text"},qA={class:"game-info"},XA={class:"info-item"},$A={class:"value"},YA={class:"info-item"},jA={class:"value"},KA={class:"player-badges"},ZA=["onClick"],JA={class:"badge-name"},QA={class:"main-area"},t1={class:"scene-container"},e1={class:"side-panel"},n1={class:"controls-area"},i1={key:0,class:"dice-results"},s1=["onClick"],r1={class:"dice-number"},o1={key:0,class:"kept-dot"},a1={class:"dice-sum"},l1={class:"sum-value"},c1=["disabled"],u1={class:"scorecard-wrapper"},h1=xs({__name:"GameView",setup(i){const t=ys(),e=ur(),n=Ee(!1);function s(h){h!==t.mySocketId&&(e.requestPlayerScore(h),n.value=!0)}function r(){n.value=!1,t.clearViewingPlayerScore()}const o=Ge(()=>{const h=t.currentPlayer;return h?`${h.id===t.mySocketId?"나":h.name}의 차례`:""}),a=Ge(()=>t.isRolling?"굴리는 중...":t.turnState.rollCount===0?"주사위 굴리기":t.turnState.rollCount>=3?"점수를 선택하세요":`다시 굴리기 (${t.turnState.rollCount}/3)`);function l(){t.turnState.rollCount>0&&e.setKept(t.turnState.kept),setTimeout(()=>{e.rollDice()},t.turnState.rollCount>0?50:0)}function c(h){!t.isMyTurn||t.turnState.rollCount===0||t.turnState.rollCount>=3||t.isRolling||(t.toggleKeep(h),e.setKept(t.turnState.kept))}const u=Ge(()=>t.turnState.dice.map((h,d)=>({value:h,kept:t.turnState.kept[d]}))),f=Ge(()=>t.turnState.dice.reduce((h,d)=>h+d,0));return(h,d)=>{var g;return bt(),It("div",HA,[it("div",VA,[it("div",GA,[it("span",{class:"turn-dot",style:cn({background:((g=Ot(t).currentPlayer)==null?void 0:g.color)||"#666"})},null,4),it("span",WA,Xt(o.value),1)]),it("div",qA,[it("div",XA,[d[0]||(d[0]=it("span",{class:"label"},"라운드",-1)),it("span",$A,Xt(Ot(t).currentRound)+" / 12",1)]),it("div",YA,[d[1]||(d[1]=it("span",{class:"label"},"굴림",-1)),it("span",jA,Xt(Ot(t).turnState.rollCount)+" / 3",1)])]),it("div",KA,[(bt(!0),It(oe,null,Oe(Ot(t).players,_=>{var m;return bt(),It("div",{key:_.id,class:Kn(["player-badge",{"is-current":_.id===((m=Ot(t).currentPlayer)==null?void 0:m.id),"is-me":_.id===Ot(t).mySocketId,clickable:_.id!==Ot(t).mySocketId}]),onClick:p=>s(_.id)},[it("span",{class:"badge-dot",style:cn({background:_.color})},null,4),it("span",JA,[rn(Xt(_.name)+" ",1),_.id===Ot(t).mySocketId?(bt(),It(oe,{key:0},[rn("(나)")],64)):fn("",!0)])],10,ZA)}),128))])]),it("div",QA,[it("div",t1,[Dn(ZT)]),it("div",e1,[it("div",n1,[Ot(t).turnState.rollCount>0?(bt(),It("div",i1,[(bt(!0),It(oe,null,Oe(u.value,(_,m)=>(bt(),It("div",{key:m,class:Kn(["dice-chip",{kept:_.kept,clickable:Ot(t).isMyTurn&&Ot(t).turnState.rollCount>0&&Ot(t).turnState.rollCount<3&&!Ot(t).isRolling}]),onClick:p=>c(m)},[it("span",r1,Xt(_.value>0?_.value:"?"),1),_.kept?(bt(),It("span",o1)):fn("",!0)],10,s1))),128)),it("div",a1,[d[2]||(d[2]=it("span",{class:"sum-label"},"합계",-1)),it("span",l1,Xt(f.value),1)])])):fn("",!0),it("button",{class:"btn btn-primary roll-btn",disabled:!Ot(t).canRoll,onClick:l},Xt(a.value),9,c1)]),it("div",u1,[Dn(vA)])])]),n.value?(bt(),Xr(kA,{key:0,data:Ot(t).viewingPlayerScore,onClose:r},null,8,["data"])):fn("",!0)])}}}),f1=hr(h1,[["__scopeId","data-v-fe1cc534"]]),d1={class:"result-view"},p1={key:0,class:"confetti-container"},m1={class:"result-container"},g1={key:0,class:"winner-card"},_1={class:"winner-score"},v1={class:"rankings-table"},x1={class:"rank-player"},y1={class:"rank-name"},S1={key:0,class:"me-tag"},M1={class:"rank-total"},E1={class:"detail-table-wrap"},b1={class:"detail-table"},w1={class:"section-label"},T1=["colspan"],A1={class:"bonus-row"},C1={class:"section-label"},R1=["colspan"],P1={class:"total-row"},L1={class:"result-actions"},I1={key:1,class:"wait-text"},D1=xs({__name:"ResultView",setup(i){const t=ys(),e=ur(),n=Ee(!1),s=Ge(()=>t.rankings[0]);function r(){e.restartGame()}io(()=>{n.value=!0,setTimeout(()=>{n.value=!1},5e3)});function o(l){return l===1?"1st":l===2?"2nd":l===3?"3rd":`${l}th`}function a(l){return l===1?"var(--gold)":l===2?"var(--silver)":l===3?"var(--bronze)":"var(--text-muted)"}return(l,c)=>(bt(),It("div",d1,[n.value?(bt(),It("div",p1,[(bt(),It(oe,null,Oe(60,u=>it("div",{key:u,class:"confetti-piece",style:cn({left:Math.random()*100+"%",animationDelay:Math.random()*3+"s",animationDuration:2+Math.random()*3+"s",background:["#ef4444","#3b82f6","#22c55e","#eab308","#a855f7","#ec4899"][u%6]})},null,4)),64))])):fn("",!0),it("div",m1,[c[4]||(c[4]=it("h1",{class:"result-title"},"GAME OVER",-1)),s.value?(bt(),It("div",g1,[c[0]||(c[0]=it("div",{class:"crown"},"♔",-1)),it("div",{class:"winner-name",style:cn({color:s.value.color})},Xt(s.value.name),5),it("div",_1,Xt(s.value.totalScore)+" pts",1)])):fn("",!0),it("div",v1,[(bt(!0),It(oe,null,Oe(Ot(t).rankings,u=>(bt(),It("div",{key:u.playerId,class:Kn(["rank-row",{"is-me":u.playerId===Ot(t).mySocketId,"is-winner":u.rank===1}])},[it("div",{class:"rank-medal",style:cn({color:a(u.rank)})},Xt(o(u.rank)),5),it("div",x1,[it("span",{class:"rank-dot",style:cn({background:u.color})},null,4),it("span",y1,[rn(Xt(u.name)+" ",1),u.playerId===Ot(t).mySocketId?(bt(),It("span",S1,"(나)")):fn("",!0)])]),it("div",M1,Xt(u.totalScore),1)],2))),128))]),it("div",E1,[it("table",b1,[it("thead",null,[it("tr",null,[c[1]||(c[1]=it("th",null,"카테고리",-1)),(bt(!0),It(oe,null,Oe(Ot(t).rankings,u=>(bt(),It("th",{key:u.playerId,style:cn({color:u.color})},Xt(u.name),5))),128))])]),it("tbody",null,[it("tr",w1,[it("td",{colspan:Ot(t).rankings.length+1},"Upper Section",8,T1)]),(bt(!0),It(oe,null,Oe(Ot(ar),u=>(bt(),It("tr",{key:u},[it("td",null,Xt(Ot(lr)[u]),1),(bt(!0),It(oe,null,Oe(Ot(t).rankings,f=>(bt(),It("td",{key:f.playerId},Xt(f.scores[u]??"-"),1))),128))]))),128)),it("tr",A1,[c[2]||(c[2]=it("td",null,"Bonus (+35)",-1)),(bt(!0),It(oe,null,Oe(Ot(t).rankings,u=>(bt(),It("td",{key:u.playerId},Xt(u.upperBonus),1))),128))]),it("tr",C1,[it("td",{colspan:Ot(t).rankings.length+1},"Lower Section",8,R1)]),(bt(!0),It(oe,null,Oe(Ot(Da),u=>(bt(),It("tr",{key:u},[it("td",null,Xt(Ot(lr)[u]),1),(bt(!0),It(oe,null,Oe(Ot(t).rankings,f=>(bt(),It("td",{key:f.playerId},Xt(f.scores[u]??"-"),1))),128))]))),128)),it("tr",P1,[c[3]||(c[3]=it("td",null,"TOTAL",-1)),(bt(!0),It(oe,null,Oe(Ot(t).rankings,u=>(bt(),It("td",{key:u.playerId,style:cn({color:u.color})},[it("strong",null,Xt(u.totalScore),1)],4))),128))])])])]),it("div",L1,[Ot(t).isHost?(bt(),It("button",{key:0,class:"btn btn-primary btn-lg",onClick:r}," 다시 하기 ")):(bt(),It("p",I1,"호스트가 다시 시작할 때까지 대기 중..."))])])]))}}),N1=hr(D1,[["__scopeId","data-v-41e99f8f"]]),U1={class:"app"},F1=xs({__name:"App",setup(i){const t=ys(),e=ur();return io(()=>{Mp()&&e.connect()}),(n,s)=>(bt(),It("div",U1,[Ot(t).phase==="waiting"?(bt(),Xr(f0,{key:0})):Ot(t).phase==="playing"?(bt(),Xr(f1,{key:1})):Ot(t).phase==="finished"?(bt(),Xr(N1,{key:2})):fn("",!0)]))}}),pm=O_(F1);pm.use(k_());pm.mount("#app");
