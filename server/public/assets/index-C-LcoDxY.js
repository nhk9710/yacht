(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vc(i){const t=Object.create(null);for(const e of i.split(","))t[e]=1;return e=>e in t}const ge={},Ws=[],Xn=()=>{},jf=()=>!1,pa=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),Gc=i=>i.startsWith("onUpdate:"),Be=Object.assign,Wc=(i,t)=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)},ym=Object.prototype.hasOwnProperty,ue=(i,t)=>ym.call(i,t),Wt=Array.isArray,qs=i=>eo(i)==="[object Map]",Kf=i=>eo(i)==="[object Set]",Ou=i=>eo(i)==="[object Date]",Kt=i=>typeof i=="function",Le=i=>typeof i=="string",jn=i=>typeof i=="symbol",me=i=>i!==null&&typeof i=="object",Zf=i=>(me(i)||Kt(i))&&Kt(i.then)&&Kt(i.catch),Jf=Object.prototype.toString,eo=i=>Jf.call(i),Sm=i=>eo(i).slice(8,-1),Qf=i=>eo(i)==="[object Object]",ma=i=>Le(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Br=Vc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ga=i=>{const t=Object.create(null);return(e=>t[e]||(t[e]=i(e)))},Mm=/-\w/g,qi=ga(i=>i.replace(Mm,t=>t.slice(1).toUpperCase())),Em=/\B([A-Z])/g,ji=ga(i=>i.replace(Em,"-$1").toLowerCase()),td=ga(i=>i.charAt(0).toUpperCase()+i.slice(1)),Ua=ga(i=>i?`on${td(i)}`:""),ki=(i,t)=>!Object.is(i,t),qo=(i,...t)=>{for(let e=0;e<i.length;e++)i[e](...t)},ed=(i,t,e,n=!1)=>{Object.defineProperty(i,t,{configurable:!0,enumerable:!1,writable:n,value:e})},qc=i=>{const t=parseFloat(i);return isNaN(t)?i:t};let Bu;const _a=()=>Bu||(Bu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function cn(i){if(Wt(i)){const t={};for(let e=0;e<i.length;e++){const n=i[e],s=Le(n)?Am(n):cn(n);if(s)for(const r in s)t[r]=s[r]}return t}else if(Le(i)||me(i))return i}const bm=/;(?![^(]*\))/g,wm=/:([^]+)/,Tm=/\/\*[^]*?\*\//g;function Am(i){const t={};return i.replace(Tm,"").split(bm).forEach(e=>{if(e){const n=e.split(wm);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Kn(i){let t="";if(Le(i))t=i;else if(Wt(i))for(let e=0;e<i.length;e++){const n=Kn(i[e]);n&&(t+=n+" ")}else if(me(i))for(const e in i)i[e]&&(t+=e+" ");return t.trim()}const Cm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Rm=Vc(Cm);function nd(i){return!!i||i===""}function Pm(i,t){if(i.length!==t.length)return!1;let e=!0;for(let n=0;e&&n<i.length;n++)e=Xc(i[n],t[n]);return e}function Xc(i,t){if(i===t)return!0;let e=Ou(i),n=Ou(t);if(e||n)return e&&n?i.getTime()===t.getTime():!1;if(e=jn(i),n=jn(t),e||n)return i===t;if(e=Wt(i),n=Wt(t),e||n)return e&&n?Pm(i,t):!1;if(e=me(i),n=me(t),e||n){if(!e||!n)return!1;const s=Object.keys(i).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in i){const a=i.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!Xc(i[o],t[o]))return!1}}return String(i)===String(t)}const id=i=>!!(i&&i.__v_isRef===!0),Yt=i=>Le(i)?i:i==null?"":Wt(i)||me(i)&&(i.toString===Jf||!Kt(i.toString))?id(i)?Yt(i.value):JSON.stringify(i,sd,2):String(i),sd=(i,t)=>id(t)?sd(i,t.value):qs(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[n,s],r)=>(e[Fa(n,r)+" =>"]=s,e),{})}:Kf(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Fa(e))}:jn(t)?Fa(t):me(t)&&!Wt(t)&&!Qf(t)?String(t):t,Fa=(i,t="")=>{var e;return jn(i)?`Symbol(${(e=i.description)!=null?e:t})`:i};/**
* @vue/reactivity v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ve;class rd{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Ve,!t&&Ve&&(this.index=(Ve.scopes||(Ve.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Ve;try{return Ve=this,t()}finally{Ve=e}}}on(){++this._on===1&&(this.prevScope=Ve,Ve=this)}off(){this._on>0&&--this._on===0&&(Ve=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(this.effects.length=0,e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function od(i){return new rd(i)}function ad(){return Ve}function Lm(i,t=!1){Ve&&Ve.cleanups.push(i)}let xe;const Oa=new WeakSet;class ld{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ve&&Ve.active&&Ve.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Oa.has(this)&&(Oa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ud(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,zu(this),hd(this);const t=xe,e=In;xe=this,In=!0;try{return this.fn()}finally{fd(this),xe=t,In=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)jc(t);this.deps=this.depsTail=void 0,zu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Oa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Fl(this)&&this.run()}get dirty(){return Fl(this)}}let cd=0,zr,kr;function ud(i,t=!1){if(i.flags|=8,t){i.next=kr,kr=i;return}i.next=zr,zr=i}function $c(){cd++}function Yc(){if(--cd>0)return;if(kr){let t=kr;for(kr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let i;for(;zr;){let t=zr;for(zr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){i||(i=n)}t=e}}if(i)throw i}function hd(i){for(let t=i.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function fd(i){let t,e=i.depsTail,n=e;for(;n;){const s=n.prevDep;n.version===-1?(n===e&&(e=s),jc(n),Im(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=s}i.deps=t,i.depsTail=e}function Fl(i){for(let t=i.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(dd(t.dep.computed)||t.dep.version!==t.version))return!0;return!!i._dirty}function dd(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===jr)||(i.globalVersion=jr,!i.isSSR&&i.flags&128&&(!i.deps&&!i._dirty||!Fl(i))))return;i.flags|=2;const t=i.dep,e=xe,n=In;xe=i,In=!0;try{hd(i);const s=i.fn(i._value);(t.version===0||ki(s,i._value))&&(i.flags|=128,i._value=s,t.version++)}catch(s){throw t.version++,s}finally{xe=e,In=n,fd(i),i.flags&=-3}}function jc(i,t=!1){const{dep:e,prevSub:n,nextSub:s}=i;if(n&&(n.nextSub=s,i.prevSub=void 0),s&&(s.prevSub=n,i.nextSub=void 0),e.subs===i&&(e.subs=n,!n&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)jc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Im(i){const{prevDep:t,nextDep:e}=i;t&&(t.nextDep=e,i.prevDep=void 0),e&&(e.prevDep=t,i.nextDep=void 0)}let In=!0;const pd=[];function yi(){pd.push(In),In=!1}function Si(){const i=pd.pop();In=i===void 0?!0:i}function zu(i){const{cleanup:t}=i;if(i.cleanup=void 0,t){const e=xe;xe=void 0;try{t()}finally{xe=e}}}let jr=0;class Dm{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Kc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!xe||!In||xe===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==xe)e=this.activeLink=new Dm(xe,this),xe.deps?(e.prevDep=xe.depsTail,xe.depsTail.nextDep=e,xe.depsTail=e):xe.deps=xe.depsTail=e,md(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const n=e.nextDep;n.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=n),e.prevDep=xe.depsTail,e.nextDep=void 0,xe.depsTail.nextDep=e,xe.depsTail=e,xe.deps===e&&(xe.deps=n)}return e}trigger(t){this.version++,jr++,this.notify(t)}notify(t){$c();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Yc()}}}function md(i){if(i.dep.sc++,i.sub.flags&4){const t=i.dep.computed;if(t&&!i.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)md(n)}const e=i.dep.subs;e!==i&&(i.prevSub=e,e&&(e.nextSub=i)),i.dep.subs=i}}const sa=new WeakMap,ps=Symbol(""),Ol=Symbol(""),Kr=Symbol("");function We(i,t,e){if(In&&xe){let n=sa.get(i);n||sa.set(i,n=new Map);let s=n.get(e);s||(n.set(e,s=new Kc),s.map=n,s.key=e),s.track()}}function pi(i,t,e,n,s,r){const o=sa.get(i);if(!o){jr++;return}const a=l=>{l&&l.trigger()};if($c(),t==="clear")o.forEach(a);else{const l=Wt(i),c=l&&ma(e);if(l&&e==="length"){const u=Number(n);o.forEach((f,h)=>{(h==="length"||h===Kr||!jn(h)&&h>=u)&&a(f)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Kr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(ps)),qs(i)&&a(o.get(Ol)));break;case"delete":l||(a(o.get(ps)),qs(i)&&a(o.get(Ol)));break;case"set":qs(i)&&a(o.get(ps));break}}Yc()}function Nm(i,t){const e=sa.get(i);return e&&e.get(t)}function Ss(i){const t=re(i);return t===i?t:(We(t,"iterate",Kr),dn(i)?t:t.map(Un))}function va(i){return We(i=re(i),"iterate",Kr),i}function Fi(i,t){return Mi(i)?Zs(vi(i)?Un(t):t):Un(t)}const Um={__proto__:null,[Symbol.iterator](){return Ba(this,Symbol.iterator,i=>Fi(this,i))},concat(...i){return Ss(this).concat(...i.map(t=>Wt(t)?Ss(t):t))},entries(){return Ba(this,"entries",i=>(i[1]=Fi(this,i[1]),i))},every(i,t){return ei(this,"every",i,t,void 0,arguments)},filter(i,t){return ei(this,"filter",i,t,e=>e.map(n=>Fi(this,n)),arguments)},find(i,t){return ei(this,"find",i,t,e=>Fi(this,e),arguments)},findIndex(i,t){return ei(this,"findIndex",i,t,void 0,arguments)},findLast(i,t){return ei(this,"findLast",i,t,e=>Fi(this,e),arguments)},findLastIndex(i,t){return ei(this,"findLastIndex",i,t,void 0,arguments)},forEach(i,t){return ei(this,"forEach",i,t,void 0,arguments)},includes(...i){return za(this,"includes",i)},indexOf(...i){return za(this,"indexOf",i)},join(i){return Ss(this).join(i)},lastIndexOf(...i){return za(this,"lastIndexOf",i)},map(i,t){return ei(this,"map",i,t,void 0,arguments)},pop(){return vr(this,"pop")},push(...i){return vr(this,"push",i)},reduce(i,...t){return ku(this,"reduce",i,t)},reduceRight(i,...t){return ku(this,"reduceRight",i,t)},shift(){return vr(this,"shift")},some(i,t){return ei(this,"some",i,t,void 0,arguments)},splice(...i){return vr(this,"splice",i)},toReversed(){return Ss(this).toReversed()},toSorted(i){return Ss(this).toSorted(i)},toSpliced(...i){return Ss(this).toSpliced(...i)},unshift(...i){return vr(this,"unshift",i)},values(){return Ba(this,"values",i=>Fi(this,i))}};function Ba(i,t,e){const n=va(i),s=n[t]();return n!==i&&!dn(i)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const Fm=Array.prototype;function ei(i,t,e,n,s,r){const o=va(i),a=o!==i&&!dn(i),l=o[t];if(l!==Fm[t]){const f=l.apply(i,r);return a?Un(f):f}let c=e;o!==i&&(a?c=function(f,h){return e.call(this,Fi(i,f),h,i)}:e.length>2&&(c=function(f,h){return e.call(this,f,h,i)}));const u=l.call(o,c,n);return a&&s?s(u):u}function ku(i,t,e,n){const s=va(i);let r=e;return s!==i&&(dn(i)?e.length>3&&(r=function(o,a,l){return e.call(this,o,a,l,i)}):r=function(o,a,l){return e.call(this,o,Fi(i,a),l,i)}),s[t](r,...n)}function za(i,t,e){const n=re(i);We(n,"iterate",Kr);const s=n[t](...e);return(s===-1||s===!1)&&ya(e[0])?(e[0]=re(e[0]),n[t](...e)):s}function vr(i,t,e=[]){yi(),$c();const n=re(i)[t].apply(i,e);return Yc(),Si(),n}const Om=Vc("__proto__,__v_isRef,__isVue"),gd=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(jn));function Bm(i){jn(i)||(i=String(i));const t=re(this);return We(t,"has",i),t.hasOwnProperty(i)}class _d{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,n){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return n===(s?r?Ym:Sd:r?yd:xd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=Wt(t);if(!s){let l;if(o&&(l=Um[e]))return l;if(e==="hasOwnProperty")return Bm}const a=Reflect.get(t,e,Te(t)?t:n);if((jn(e)?gd.has(e):Om(e))||(s||We(t,"get",e),r))return a;if(Te(a)){const l=o&&ma(e)?a:a.value;return s&&me(l)?zl(l):l}return me(a)?s?zl(a):xa(a):a}}class vd extends _d{constructor(t=!1){super(!1,t)}set(t,e,n,s){let r=t[e];const o=Wt(t)&&ma(e);if(!this._isShallow){const c=Mi(r);if(!dn(n)&&!Mi(n)&&(r=re(r),n=re(n)),!o&&Te(r)&&!Te(n))return c||(r.value=n),!0}const a=o?Number(e)<t.length:ue(t,e),l=Reflect.set(t,e,n,Te(t)?t:s);return t===re(s)&&(a?ki(n,r)&&pi(t,"set",e,n):pi(t,"add",e,n)),l}deleteProperty(t,e){const n=ue(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&pi(t,"delete",e,void 0),s}has(t,e){const n=Reflect.has(t,e);return(!jn(e)||!gd.has(e))&&We(t,"has",e),n}ownKeys(t){return We(t,"iterate",Wt(t)?"length":ps),Reflect.ownKeys(t)}}class zm extends _d{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const km=new vd,Hm=new zm,Vm=new vd(!0);const Bl=i=>i,fo=i=>Reflect.getPrototypeOf(i);function Gm(i,t,e){return function(...n){const s=this.__v_raw,r=re(s),o=qs(r),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=s[i](...n),u=e?Bl:t?Zs:Un;return!t&&We(r,"iterate",l?Ol:ps),Be(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function po(i){return function(...t){return i==="delete"?!1:i==="clear"?void 0:this}}function Wm(i,t){const e={get(s){const r=this.__v_raw,o=re(r),a=re(s);i||(ki(s,a)&&We(o,"get",s),We(o,"get",a));const{has:l}=fo(o),c=t?Bl:i?Zs:Un;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!i&&We(re(s),"iterate",ps),s.size},has(s){const r=this.__v_raw,o=re(r),a=re(s);return i||(ki(s,a)&&We(o,"has",s),We(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=re(a),c=t?Bl:i?Zs:Un;return!i&&We(l,"iterate",ps),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return Be(e,i?{add:po("add"),set:po("set"),delete:po("delete"),clear:po("clear")}:{add(s){!t&&!dn(s)&&!Mi(s)&&(s=re(s));const r=re(this);return fo(r).has.call(r,s)||(r.add(s),pi(r,"add",s,s)),this},set(s,r){!t&&!dn(r)&&!Mi(r)&&(r=re(r));const o=re(this),{has:a,get:l}=fo(o);let c=a.call(o,s);c||(s=re(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?ki(r,u)&&pi(o,"set",s,r):pi(o,"add",s,r),this},delete(s){const r=re(this),{has:o,get:a}=fo(r);let l=o.call(r,s);l||(s=re(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&pi(r,"delete",s,void 0),c},clear(){const s=re(this),r=s.size!==0,o=s.clear();return r&&pi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Gm(s,i,t)}),e}function Zc(i,t){const e=Wm(i,t);return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(ue(e,s)&&s in n?e:n,s,r)}const qm={get:Zc(!1,!1)},Xm={get:Zc(!1,!0)},$m={get:Zc(!0,!1)};const xd=new WeakMap,yd=new WeakMap,Sd=new WeakMap,Ym=new WeakMap;function jm(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Km(i){return i.__v_skip||!Object.isExtensible(i)?0:jm(Sm(i))}function xa(i){return Mi(i)?i:Jc(i,!1,km,qm,xd)}function Zm(i){return Jc(i,!1,Vm,Xm,yd)}function zl(i){return Jc(i,!0,Hm,$m,Sd)}function Jc(i,t,e,n,s){if(!me(i)||i.__v_raw&&!(t&&i.__v_isReactive))return i;const r=Km(i);if(r===0)return i;const o=s.get(i);if(o)return o;const a=new Proxy(i,r===2?n:e);return s.set(i,a),a}function vi(i){return Mi(i)?vi(i.__v_raw):!!(i&&i.__v_isReactive)}function Mi(i){return!!(i&&i.__v_isReadonly)}function dn(i){return!!(i&&i.__v_isShallow)}function ya(i){return i?!!i.__v_raw:!1}function re(i){const t=i&&i.__v_raw;return t?re(t):i}function Qc(i){return!ue(i,"__v_skip")&&Object.isExtensible(i)&&ed(i,"__v_skip",!0),i}const Un=i=>me(i)?xa(i):i,Zs=i=>me(i)?zl(i):i;function Te(i){return i?i.__v_isRef===!0:!1}function Ee(i){return Md(i,!1)}function Jm(i){return Md(i,!0)}function Md(i,t){return Te(i)?i:new Qm(i,t)}class Qm{constructor(t,e){this.dep=new Kc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:re(t),this._value=e?t:Un(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,n=this.__v_isShallow||dn(t)||Mi(t);t=n?t:re(t),ki(t,e)&&(this._rawValue=t,this._value=n?t:Un(t),this.dep.trigger())}}function Bt(i){return Te(i)?i.value:i}const tg={get:(i,t,e)=>t==="__v_raw"?i:Bt(Reflect.get(i,t,e)),set:(i,t,e,n)=>{const s=i[t];return Te(s)&&!Te(e)?(s.value=e,!0):Reflect.set(i,t,e,n)}};function Ed(i){return vi(i)?i:new Proxy(i,tg)}function eg(i){const t=Wt(i)?new Array(i.length):{};for(const e in i)t[e]=ig(i,e);return t}class ng{constructor(t,e,n){this._object=t,this._key=e,this._defaultValue=n,this.__v_isRef=!0,this._value=void 0,this._raw=re(t);let s=!0,r=t;if(!Wt(t)||!ma(String(e)))do s=!ya(r)||dn(r);while(s&&(r=r.__v_raw));this._shallow=s}get value(){let t=this._object[this._key];return this._shallow&&(t=Bt(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&Te(this._raw[this._key])){const e=this._object[this._key];if(Te(e)){e.value=t;return}}this._object[this._key]=t}get dep(){return Nm(this._raw,this._key)}}function ig(i,t,e){return new ng(i,t,e)}class sg{constructor(t,e,n){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Kc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=jr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&xe!==this)return ud(this,!0),!0}get value(){const t=this.dep.track();return dd(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function rg(i,t,e=!1){let n,s;return Kt(i)?n=i:(n=i.get,s=i.set),new sg(n,s,e)}const mo={},ra=new WeakMap;let os;function og(i,t=!1,e=os){if(e){let n=ra.get(e);n||ra.set(e,n=[]),n.push(i)}}function ag(i,t,e=ge){const{immediate:n,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=x=>s?x:dn(x)||s===!1||s===0?mi(x,1):mi(x);let u,f,h,d,g=!1,_=!1;if(Te(i)?(f=()=>i.value,g=dn(i)):vi(i)?(f=()=>c(i),g=!0):Wt(i)?(_=!0,g=i.some(x=>vi(x)||dn(x)),f=()=>i.map(x=>{if(Te(x))return x.value;if(vi(x))return c(x);if(Kt(x))return l?l(x,2):x()})):Kt(i)?t?f=l?()=>l(i,2):i:f=()=>{if(h){yi();try{h()}finally{Si()}}const x=os;os=u;try{return l?l(i,3,[d]):i(d)}finally{os=x}}:f=Xn,t&&s){const x=f,D=s===!0?1/0:s;f=()=>mi(x(),D)}const m=ad(),p=()=>{u.stop(),m&&m.active&&Wc(m.effects,u)};if(r&&t){const x=t;t=(...D)=>{x(...D),p()}}let v=_?new Array(i.length).fill(mo):mo;const b=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(t){const D=u.run();if(s||g||(_?D.some((L,P)=>ki(L,v[P])):ki(D,v))){h&&h();const L=os;os=u;try{const P=[D,v===mo?void 0:_&&v[0]===mo?[]:v,d];v=D,l?l(t,3,P):t(...P)}finally{os=L}}}else u.run()};return a&&a(b),u=new ld(f),u.scheduler=o?()=>o(b,!1):b,d=x=>og(x,!1,u),h=u.onStop=()=>{const x=ra.get(u);if(x){if(l)l(x,4);else for(const D of x)D();ra.delete(u)}},t?n?b(!0):v=u.run():o?o(b.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function mi(i,t=1/0,e){if(t<=0||!me(i)||i.__v_skip||(e=e||new Map,(e.get(i)||0)>=t))return i;if(e.set(i,t),t--,Te(i))mi(i.value,t,e);else if(Wt(i))for(let n=0;n<i.length;n++)mi(i[n],t,e);else if(Kf(i)||qs(i))i.forEach(n=>{mi(n,t,e)});else if(Qf(i)){for(const n in i)mi(i[n],t,e);for(const n of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,n)&&mi(i[n],t,e)}return i}/**
* @vue/runtime-core v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function no(i,t,e,n){try{return n?i(...n):i()}catch(s){Sa(s,t,e)}}function Zn(i,t,e,n){if(Kt(i)){const s=no(i,t,e,n);return s&&Zf(s)&&s.catch(r=>{Sa(r,t,e)}),s}if(Wt(i)){const s=[];for(let r=0;r<i.length;r++)s.push(Zn(i[r],t,e,n));return s}}function Sa(i,t,e,n=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ge;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](i,l,c)===!1)return}a=a.parent}if(r){yi(),no(r,null,10,[i,l,c]),Si();return}}lg(i,e,s,n,o)}function lg(i,t,e,n=!0,s=!1){if(s)throw i;console.error(i)}const je=[];let Hn=-1;const Xs=[];let Oi=null,ks=0;const bd=Promise.resolve();let oa=null;function wd(i){const t=oa||bd;return i?t.then(this?i.bind(this):i):t}function cg(i){let t=Hn+1,e=je.length;for(;t<e;){const n=t+e>>>1,s=je[n],r=Zr(s);r<i||r===i&&s.flags&2?t=n+1:e=n}return t}function tu(i){if(!(i.flags&1)){const t=Zr(i),e=je[je.length-1];!e||!(i.flags&2)&&t>=Zr(e)?je.push(i):je.splice(cg(t),0,i),i.flags|=1,Td()}}function Td(){oa||(oa=bd.then(Cd))}function ug(i){Wt(i)?Xs.push(...i):Oi&&i.id===-1?Oi.splice(ks+1,0,i):i.flags&1||(Xs.push(i),i.flags|=1),Td()}function Hu(i,t,e=Hn+1){for(;e<je.length;e++){const n=je[e];if(n&&n.flags&2){if(i&&n.id!==i.uid)continue;je.splice(e,1),e--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function Ad(i){if(Xs.length){const t=[...new Set(Xs)].sort((e,n)=>Zr(e)-Zr(n));if(Xs.length=0,Oi){Oi.push(...t);return}for(Oi=t,ks=0;ks<Oi.length;ks++){const e=Oi[ks];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Oi=null,ks=0}}const Zr=i=>i.id==null?i.flags&2?-1:1/0:i.id;function Cd(i){try{for(Hn=0;Hn<je.length;Hn++){const t=je[Hn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),no(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Hn<je.length;Hn++){const t=je[Hn];t&&(t.flags&=-2)}Hn=-1,je.length=0,Ad(),oa=null,(je.length||Xs.length)&&Cd()}}let Sn=null,Rd=null;function aa(i){const t=Sn;return Sn=i,Rd=i&&i.type.__scopeId||null,t}function hg(i,t=Sn,e){if(!t||i._n)return i;const n=(...s)=>{n._d&&Ju(-1);const r=aa(t);let o;try{o=i(...s)}finally{aa(r),n._d&&Ju(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function ka(i,t){if(Sn===null)return i;const e=wa(Sn),n=i.dirs||(i.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=ge]=t[s];r&&(Kt(r)&&(r={mounted:r,updated:r}),r.deep&&mi(o),n.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return i}function Zi(i,t,e,n){const s=i.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[n];l&&(yi(),Zn(l,e,8,[i.el,a,i,t]),Si())}}function fg(i,t){if(Ze){let e=Ze.provides;const n=Ze.parent&&Ze.parent.provides;n===e&&(e=Ze.provides=Object.create(n)),e[i]=t}}function Hr(i,t,e=!1){const n=ip();if(n||ms){let s=ms?ms._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(s&&i in s)return s[i];if(arguments.length>1)return e&&Kt(t)?t.call(n&&n.proxy):t}}function dg(){return!!(ip()||ms)}const pg=Symbol.for("v-scx"),mg=()=>Hr(pg);function $s(i,t,e){return Pd(i,t,e)}function Pd(i,t,e=ge){const{immediate:n,deep:s,flush:r,once:o}=e,a=Be({},e),l=t&&n||!t&&r!=="post";let c;if(Qr){if(r==="sync"){const d=mg();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Xn,d.resume=Xn,d.pause=Xn,d}}const u=Ze;a.call=(d,g,_)=>Zn(d,u,g,_);let f=!1;r==="post"?a.scheduler=d=>{nn(d,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():tu(d)}),a.augmentJob=d=>{t&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=ag(i,t,a);return Qr&&(c?c.push(h):l&&h()),h}function gg(i,t,e){const n=this.proxy,s=Le(i)?i.includes(".")?Ld(n,i):()=>n[i]:i.bind(n,n);let r;Kt(t)?r=t:(r=t.handler,e=t);const o=so(this),a=Pd(s,r.bind(n),e);return o(),a}function Ld(i,t){const e=t.split(".");return()=>{let n=i;for(let s=0;s<e.length&&n;s++)n=n[e[s]];return n}}const _g=Symbol("_vte"),vg=i=>i.__isTeleport,xg=Symbol("_leaveCb");function eu(i,t){i.shapeFlag&6&&i.component?(i.transition=t,eu(i.component.subTree,t)):i.shapeFlag&128?(i.ssContent.transition=t.clone(i.ssContent),i.ssFallback.transition=t.clone(i.ssFallback)):i.transition=t}function vs(i,t){return Kt(i)?Be({name:i.name},t,{setup:i}):i}function Id(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}function Vu(i,t){let e;return!!((e=Object.getOwnPropertyDescriptor(i,t))&&!e.configurable)}const la=new WeakMap;function Vr(i,t,e,n,s=!1){if(Wt(i)){i.forEach((_,m)=>Vr(_,t&&(Wt(t)?t[m]:t),e,n,s));return}if(Gr(n)&&!s){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Vr(i,t,e,n.component.subTree);return}const r=n.shapeFlag&4?wa(n.component):n.el,o=s?null:r,{i:a,r:l}=i,c=t&&t.r,u=a.refs===ge?a.refs={}:a.refs,f=a.setupState,h=re(f),d=f===ge?jf:_=>Vu(u,_)?!1:ue(h,_),g=(_,m)=>!(m&&Vu(u,m));if(c!=null&&c!==l){if(Gu(t),Le(c))u[c]=null,d(c)&&(f[c]=null);else if(Te(c)){const _=t;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(Kt(l))no(l,a,12,[o,u]);else{const _=Le(l),m=Te(l);if(_||m){const p=()=>{if(i.f){const v=_?d(l)?f[l]:u[l]:g()||!i.k?l.value:u[i.k];if(s)Wt(v)&&Wc(v,r);else if(Wt(v))v.includes(r)||v.push(r);else if(_)u[l]=[r],d(l)&&(f[l]=u[l]);else{const b=[r];g(l,i.k)&&(l.value=b),i.k&&(u[i.k]=b)}}else _?(u[l]=o,d(l)&&(f[l]=o)):m&&(g(l,i.k)&&(l.value=o),i.k&&(u[i.k]=o))};if(o){const v=()=>{p(),la.delete(i)};v.id=-1,la.set(i,v),nn(v,e)}else Gu(i),p()}}}function Gu(i){const t=la.get(i);t&&(t.flags|=8,la.delete(i))}_a().requestIdleCallback;_a().cancelIdleCallback;const Gr=i=>!!i.type.__asyncLoader,Dd=i=>i.type.__isKeepAlive;function yg(i,t){Nd(i,"a",t)}function Sg(i,t){Nd(i,"da",t)}function Nd(i,t,e=Ze){const n=i.__wdc||(i.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(Ma(t,n,e),e){let s=e.parent;for(;s&&s.parent;)Dd(s.parent.vnode)&&Mg(n,t,e,s),s=s.parent}}function Mg(i,t,e,n){const s=Ma(t,i,n,!0);Fd(()=>{Wc(n[t],s)},e)}function Ma(i,t,e=Ze,n=!1){if(e){const s=e[i]||(e[i]=[]),r=t.__weh||(t.__weh=(...o)=>{yi();const a=so(e),l=Zn(t,e,i,o);return a(),Si(),l});return n?s.unshift(r):s.push(r),r}}const bi=i=>(t,e=Ze)=>{(!Qr||i==="sp")&&Ma(i,(...n)=>t(...n),e)},Eg=bi("bm"),io=bi("m"),bg=bi("bu"),wg=bi("u"),Ud=bi("bum"),Fd=bi("um"),Tg=bi("sp"),Ag=bi("rtg"),Cg=bi("rtc");function Rg(i,t=Ze){Ma("ec",i,t)}const Pg=Symbol.for("v-ndc");function Fe(i,t,e,n){let s;const r=e,o=Wt(i);if(o||Le(i)){const a=o&&vi(i);let l=!1,c=!1;a&&(l=!dn(i),c=Mi(i),i=va(i)),s=new Array(i.length);for(let u=0,f=i.length;u<f;u++)s[u]=t(l?c?Zs(Un(i[u])):Un(i[u]):i[u],u,void 0,r)}else if(typeof i=="number"){s=new Array(i);for(let a=0;a<i;a++)s[a]=t(a+1,a,void 0,r)}else if(me(i))if(i[Symbol.iterator])s=Array.from(i,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(i);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(i[u],u,l,r)}}else s=[];return s}const kl=i=>i?sp(i)?wa(i):kl(i.parent):null,Wr=Be(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>kl(i.parent),$root:i=>kl(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>Bd(i),$forceUpdate:i=>i.f||(i.f=()=>{tu(i.update)}),$nextTick:i=>i.n||(i.n=wd.bind(i.proxy)),$watch:i=>gg.bind(i)}),Ha=(i,t)=>i!==ge&&!i.__isScriptSetup&&ue(i,t),Lg={get({_:i},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:n,data:s,props:r,accessCache:o,type:a,appContext:l}=i;if(t[0]!=="$"){const h=o[t];if(h!==void 0)switch(h){case 1:return n[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Ha(n,t))return o[t]=1,n[t];if(s!==ge&&ue(s,t))return o[t]=2,s[t];if(ue(r,t))return o[t]=3,r[t];if(e!==ge&&ue(e,t))return o[t]=4,e[t];Hl&&(o[t]=0)}}const c=Wr[t];let u,f;if(c)return t==="$attrs"&&We(i.attrs,"get",""),c(i);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==ge&&ue(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,ue(f,t))return f[t]},set({_:i},t,e){const{data:n,setupState:s,ctx:r}=i;return Ha(s,t)?(s[t]=e,!0):n!==ge&&ue(n,t)?(n[t]=e,!0):ue(i.props,t)||t[0]==="$"&&t.slice(1)in i?!1:(r[t]=e,!0)},has({_:{data:i,setupState:t,accessCache:e,ctx:n,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||i!==ge&&a[0]!=="$"&&ue(i,a)||Ha(t,a)||ue(r,a)||ue(n,a)||ue(Wr,a)||ue(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(i,t,e){return e.get!=null?i._.accessCache[t]=0:ue(e,"value")&&this.set(i,t,e.value,null),Reflect.defineProperty(i,t,e)}};function Wu(i){return Wt(i)?i.reduce((t,e)=>(t[e]=null,t),{}):i}let Hl=!0;function Ig(i){const t=Bd(i),e=i.proxy,n=i.ctx;Hl=!1,t.beforeCreate&&qu(t.beforeCreate,i,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:v,destroyed:b,unmounted:x,render:D,renderTracked:L,renderTriggered:P,errorCaptured:N,serverPrefetch:w,expose:S,inheritAttrs:U,components:Y,directives:O,filters:W}=t;if(c&&Dg(c,n,null),o)for(const K in o){const H=o[K];Kt(H)&&(n[K]=H.bind(e))}if(s){const K=s.call(e,e);me(K)&&(i.data=xa(K))}if(Hl=!0,r)for(const K in r){const H=r[K],lt=Kt(H)?H.bind(e,e):Kt(H.get)?H.get.bind(e,e):Xn,_t=!Kt(H)&&Kt(H.set)?H.set.bind(e):Xn,ct=Ge({get:lt,set:_t});Object.defineProperty(n,K,{enumerable:!0,configurable:!0,get:()=>ct.value,set:mt=>ct.value=mt})}if(a)for(const K in a)Od(a[K],n,e,K);if(l){const K=Kt(l)?l.call(e):l;Reflect.ownKeys(K).forEach(H=>{fg(H,K[H])})}u&&qu(u,i,"c");function B(K,H){Wt(H)?H.forEach(lt=>K(lt.bind(e))):H&&K(H.bind(e))}if(B(Eg,f),B(io,h),B(bg,d),B(wg,g),B(yg,_),B(Sg,m),B(Rg,N),B(Cg,L),B(Ag,P),B(Ud,v),B(Fd,x),B(Tg,w),Wt(S))if(S.length){const K=i.exposed||(i.exposed={});S.forEach(H=>{Object.defineProperty(K,H,{get:()=>e[H],set:lt=>e[H]=lt,enumerable:!0})})}else i.exposed||(i.exposed={});D&&i.render===Xn&&(i.render=D),U!=null&&(i.inheritAttrs=U),Y&&(i.components=Y),O&&(i.directives=O),w&&Id(i)}function Dg(i,t,e=Xn){Wt(i)&&(i=Vl(i));for(const n in i){const s=i[n];let r;me(s)?"default"in s?r=Hr(s.from||n,s.default,!0):r=Hr(s.from||n):r=Hr(s),Te(r)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[n]=r}}function qu(i,t,e){Zn(Wt(i)?i.map(n=>n.bind(t.proxy)):i.bind(t.proxy),t,e)}function Od(i,t,e,n){let s=n.includes(".")?Ld(e,n):()=>e[n];if(Le(i)){const r=t[i];Kt(r)&&$s(s,r)}else if(Kt(i))$s(s,i.bind(e));else if(me(i))if(Wt(i))i.forEach(r=>Od(r,t,e,n));else{const r=Kt(i.handler)?i.handler.bind(e):t[i.handler];Kt(r)&&$s(s,r,i)}}function Bd(i){const t=i.type,{mixins:e,extends:n}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=i.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!n?l=t:(l={},s.length&&s.forEach(c=>ca(l,c,o,!0)),ca(l,t,o)),me(t)&&r.set(t,l),l}function ca(i,t,e,n=!1){const{mixins:s,extends:r}=t;r&&ca(i,r,e,!0),s&&s.forEach(o=>ca(i,o,e,!0));for(const o in t)if(!(n&&o==="expose")){const a=Ng[o]||e&&e[o];i[o]=a?a(i[o],t[o]):t[o]}return i}const Ng={data:Xu,props:$u,emits:$u,methods:Dr,computed:Dr,beforeCreate:$e,created:$e,beforeMount:$e,mounted:$e,beforeUpdate:$e,updated:$e,beforeDestroy:$e,beforeUnmount:$e,destroyed:$e,unmounted:$e,activated:$e,deactivated:$e,errorCaptured:$e,serverPrefetch:$e,components:Dr,directives:Dr,watch:Fg,provide:Xu,inject:Ug};function Xu(i,t){return t?i?function(){return Be(Kt(i)?i.call(this,this):i,Kt(t)?t.call(this,this):t)}:t:i}function Ug(i,t){return Dr(Vl(i),Vl(t))}function Vl(i){if(Wt(i)){const t={};for(let e=0;e<i.length;e++)t[i[e]]=i[e];return t}return i}function $e(i,t){return i?[...new Set([].concat(i,t))]:t}function Dr(i,t){return i?Be(Object.create(null),i,t):t}function $u(i,t){return i?Wt(i)&&Wt(t)?[...new Set([...i,...t])]:Be(Object.create(null),Wu(i),Wu(t??{})):t}function Fg(i,t){if(!i)return t;if(!t)return i;const e=Be(Object.create(null),i);for(const n in t)e[n]=$e(i[n],t[n]);return e}function zd(){return{app:null,config:{isNativeTag:jf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Og=0;function Bg(i,t){return function(n,s=null){Kt(n)||(n=Be({},n)),s!=null&&!me(s)&&(s=null);const r=zd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Og++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:m_,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&Kt(u.install)?(o.add(u),u.install(c,...f)):Kt(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Dn(n,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),i(d,u,h),l=!0,c._container=u,u.__vue_app__=c,wa(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Zn(a,c._instance,16),i(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=ms;ms=c;try{return u()}finally{ms=f}}};return c}}let ms=null;const zg=(i,t)=>t==="modelValue"||t==="model-value"?i.modelModifiers:i[`${t}Modifiers`]||i[`${qi(t)}Modifiers`]||i[`${ji(t)}Modifiers`];function kg(i,t,...e){if(i.isUnmounted)return;const n=i.vnode.props||ge;let s=e;const r=t.startsWith("update:"),o=r&&zg(n,t.slice(7));o&&(o.trim&&(s=e.map(u=>Le(u)?u.trim():u)),o.number&&(s=e.map(qc)));let a,l=n[a=Ua(t)]||n[a=Ua(qi(t))];!l&&r&&(l=n[a=Ua(ji(t))]),l&&Zn(l,i,6,s);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,Zn(c,i,6,s)}}const Hg=new WeakMap;function kd(i,t,e=!1){const n=e?Hg:t.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let o={},a=!1;if(!Kt(i)){const l=c=>{const u=kd(c,t,!0);u&&(a=!0,Be(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!r&&!a?(me(i)&&n.set(i,null),null):(Wt(r)?r.forEach(l=>o[l]=null):Be(o,r),me(i)&&n.set(i,o),o)}function Ea(i,t){return!i||!pa(t)?!1:(t=t.slice(2).replace(/Once$/,""),ue(i,t[0].toLowerCase()+t.slice(1))||ue(i,ji(t))||ue(i,t))}function Yu(i){const{type:t,vnode:e,proxy:n,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=i,m=aa(i);let p,v;try{if(e.shapeFlag&4){const x=s||n,D=x;p=Vn(c.call(D,x,u,f,d,h,g)),v=a}else{const x=t;p=Vn(x.length>1?x(f,{attrs:a,slots:o,emit:l}):x(f,null)),v=t.props?a:Vg(a)}}catch(x){qr.length=0,Sa(x,i,1),p=Dn(Xi)}let b=p;if(v&&_!==!1){const x=Object.keys(v),{shapeFlag:D}=b;x.length&&D&7&&(r&&x.some(Gc)&&(v=Gg(v,r)),b=Js(b,v,!1,!0))}return e.dirs&&(b=Js(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(e.dirs):e.dirs),e.transition&&eu(b,e.transition),p=b,aa(m),p}const Vg=i=>{let t;for(const e in i)(e==="class"||e==="style"||pa(e))&&((t||(t={}))[e]=i[e]);return t},Gg=(i,t)=>{const e={};for(const n in i)(!Gc(n)||!(n.slice(9)in t))&&(e[n]=i[n]);return e};function Wg(i,t,e){const{props:n,children:s,component:r}=i,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return n?ju(n,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(Hd(o,n,h)&&!Ea(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?ju(n,o,c):!0:!!o;return!1}function ju(i,t,e){const n=Object.keys(t);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(Hd(t,i,r)&&!Ea(e,r))return!0}return!1}function Hd(i,t,e){const n=i[e],s=t[e];return e==="style"&&me(n)&&me(s)?!Xc(n,s):n!==s}function qg({vnode:i,parent:t},e){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=t.vnode).el=e,t=t.parent;else break}}const Vd={},Gd=()=>Object.create(Vd),Wd=i=>Object.getPrototypeOf(i)===Vd;function Xg(i,t,e,n=!1){const s={},r=Gd();i.propsDefaults=Object.create(null),qd(i,t,s,r);for(const o in i.propsOptions[0])o in s||(s[o]=void 0);e?i.props=n?s:Zm(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function $g(i,t,e,n){const{props:s,attrs:r,vnode:{patchFlag:o}}=i,a=re(s),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Ea(i.emitsOptions,h))continue;const d=t[h];if(l)if(ue(r,h))d!==r[h]&&(r[h]=d,c=!0);else{const g=qi(h);s[g]=Gl(l,a,g,d,i,!1)}else d!==r[h]&&(r[h]=d,c=!0)}}}else{qd(i,t,s,r)&&(c=!0);let u;for(const f in a)(!t||!ue(t,f)&&((u=ji(f))===f||!ue(t,u)))&&(l?e&&(e[f]!==void 0||e[u]!==void 0)&&(s[f]=Gl(l,a,f,void 0,i,!0)):delete s[f]);if(r!==a)for(const f in r)(!t||!ue(t,f))&&(delete r[f],c=!0)}c&&pi(i.attrs,"set","")}function qd(i,t,e,n){const[s,r]=i.propsOptions;let o=!1,a;if(t)for(let l in t){if(Br(l))continue;const c=t[l];let u;s&&ue(s,u=qi(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:Ea(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=re(e),c=a||ge;for(let u=0;u<r.length;u++){const f=r[u];e[f]=Gl(s,l,f,c[f],i,!ue(c,f))}}return o}function Gl(i,t,e,n,s,r){const o=i[e];if(o!=null){const a=ue(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Kt(l)){const{propsDefaults:c}=s;if(e in c)n=c[e];else{const u=so(s);n=c[e]=l.call(null,t),u()}}else n=l;s.ce&&s.ce._setProp(e,n)}o[0]&&(r&&!a?n=!1:o[1]&&(n===""||n===ji(e))&&(n=!0))}return n}const Yg=new WeakMap;function Xd(i,t,e=!1){const n=e?Yg:t.propsCache,s=n.get(i);if(s)return s;const r=i.props,o={},a=[];let l=!1;if(!Kt(i)){const u=f=>{l=!0;const[h,d]=Xd(f,t,!0);Be(o,h),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!r&&!l)return me(i)&&n.set(i,Ws),Ws;if(Wt(r))for(let u=0;u<r.length;u++){const f=qi(r[u]);Ku(f)&&(o[f]=ge)}else if(r)for(const u in r){const f=qi(u);if(Ku(f)){const h=r[u],d=o[f]=Wt(h)||Kt(h)?{type:h}:Be({},h),g=d.type;let _=!1,m=!0;if(Wt(g))for(let p=0;p<g.length;++p){const v=g[p],b=Kt(v)&&v.name;if(b==="Boolean"){_=!0;break}else b==="String"&&(m=!1)}else _=Kt(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||ue(d,"default"))&&a.push(f)}}const c=[o,a];return me(i)&&n.set(i,c),c}function Ku(i){return i[0]!=="$"&&!Br(i)}const nu=i=>i==="_"||i==="_ctx"||i==="$stable",iu=i=>Wt(i)?i.map(Vn):[Vn(i)],jg=(i,t,e)=>{if(t._n)return t;const n=hg((...s)=>iu(t(...s)),e);return n._c=!1,n},$d=(i,t,e)=>{const n=i._ctx;for(const s in i){if(nu(s))continue;const r=i[s];if(Kt(r))t[s]=jg(s,r,n);else if(r!=null){const o=iu(r);t[s]=()=>o}}},Yd=(i,t)=>{const e=iu(t);i.slots.default=()=>e},jd=(i,t,e)=>{for(const n in t)(e||!nu(n))&&(i[n]=t[n])},Kg=(i,t,e)=>{const n=i.slots=Gd();if(i.vnode.shapeFlag&32){const s=t._;s?(jd(n,t,e),e&&ed(n,"_",s,!0)):$d(t,n)}else t&&Yd(i,t)},Zg=(i,t,e)=>{const{vnode:n,slots:s}=i;let r=!0,o=ge;if(n.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:jd(s,t,e):(r=!t.$stable,$d(t,s)),o=t}else t&&(Yd(i,t),o={default:1});if(r)for(const a in s)!nu(a)&&o[a]==null&&delete s[a]},nn=n_;function Jg(i){return Qg(i)}function Qg(i,t){const e=_a();e.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Xn,insertStaticContent:g}=i,_=(I,k,C,ft=null,tt=null,et=null,rt=void 0,pt=null,nt=!!k.dynamicChildren)=>{if(I===k)return;I&&!xr(I,k)&&(ft=St(I),mt(I,tt,et,!0),I=null),k.patchFlag===-2&&(nt=!1,k.dynamicChildren=null);const{type:M,ref:y,shapeFlag:A}=k;switch(M){case ba:m(I,k,C,ft);break;case Xi:p(I,k,C,ft);break;case Ga:I==null&&v(k,C,ft,rt);break;case oe:Y(I,k,C,ft,tt,et,rt,pt,nt);break;default:A&1?D(I,k,C,ft,tt,et,rt,pt,nt):A&6?O(I,k,C,ft,tt,et,rt,pt,nt):(A&64||A&128)&&M.process(I,k,C,ft,tt,et,rt,pt,nt,qt)}y!=null&&tt?Vr(y,I&&I.ref,et,k||I,!k):y==null&&I&&I.ref!=null&&Vr(I.ref,null,et,I,!0)},m=(I,k,C,ft)=>{if(I==null)n(k.el=a(k.children),C,ft);else{const tt=k.el=I.el;k.children!==I.children&&c(tt,k.children)}},p=(I,k,C,ft)=>{I==null?n(k.el=l(k.children||""),C,ft):k.el=I.el},v=(I,k,C,ft)=>{[I.el,I.anchor]=g(I.children,k,C,ft,I.el,I.anchor)},b=({el:I,anchor:k},C,ft)=>{let tt;for(;I&&I!==k;)tt=h(I),n(I,C,ft),I=tt;n(k,C,ft)},x=({el:I,anchor:k})=>{let C;for(;I&&I!==k;)C=h(I),s(I),I=C;s(k)},D=(I,k,C,ft,tt,et,rt,pt,nt)=>{if(k.type==="svg"?rt="svg":k.type==="math"&&(rt="mathml"),I==null)L(k,C,ft,tt,et,rt,pt,nt);else{const M=I.el&&I.el._isVueCE?I.el:null;try{M&&M._beginPatch(),w(I,k,tt,et,rt,pt,nt)}finally{M&&M._endPatch()}}},L=(I,k,C,ft,tt,et,rt,pt)=>{let nt,M;const{props:y,shapeFlag:A,transition:R,dirs:F}=I;if(nt=I.el=o(I.type,et,y&&y.is,y),A&8?u(nt,I.children):A&16&&N(I.children,nt,null,ft,tt,Va(I,et),rt,pt),F&&Zi(I,null,ft,"created"),P(nt,I,I.scopeId,rt,ft),y){for(const j in y)j!=="value"&&!Br(j)&&r(nt,j,null,y[j],et,ft);"value"in y&&r(nt,"value",null,y.value,et),(M=y.onVnodeBeforeMount)&&On(M,ft,I)}F&&Zi(I,null,ft,"beforeMount");const z=t_(tt,R);z&&R.beforeEnter(nt),n(nt,k,C),((M=y&&y.onVnodeMounted)||z||F)&&nn(()=>{M&&On(M,ft,I),z&&R.enter(nt),F&&Zi(I,null,ft,"mounted")},tt)},P=(I,k,C,ft,tt)=>{if(C&&d(I,C),ft)for(let et=0;et<ft.length;et++)d(I,ft[et]);if(tt){let et=tt.subTree;if(k===et||Qd(et.type)&&(et.ssContent===k||et.ssFallback===k)){const rt=tt.vnode;P(I,rt,rt.scopeId,rt.slotScopeIds,tt.parent)}}},N=(I,k,C,ft,tt,et,rt,pt,nt=0)=>{for(let M=nt;M<I.length;M++){const y=I[M]=pt?di(I[M]):Vn(I[M]);_(null,y,k,C,ft,tt,et,rt,pt)}},w=(I,k,C,ft,tt,et,rt)=>{const pt=k.el=I.el;let{patchFlag:nt,dynamicChildren:M,dirs:y}=k;nt|=I.patchFlag&16;const A=I.props||ge,R=k.props||ge;let F;if(C&&Ji(C,!1),(F=R.onVnodeBeforeUpdate)&&On(F,C,k,I),y&&Zi(k,I,C,"beforeUpdate"),C&&Ji(C,!0),(A.innerHTML&&R.innerHTML==null||A.textContent&&R.textContent==null)&&u(pt,""),M?S(I.dynamicChildren,M,pt,C,ft,Va(k,tt),et):rt||H(I,k,pt,null,C,ft,Va(k,tt),et,!1),nt>0){if(nt&16)U(pt,A,R,C,tt);else if(nt&2&&A.class!==R.class&&r(pt,"class",null,R.class,tt),nt&4&&r(pt,"style",A.style,R.style,tt),nt&8){const z=k.dynamicProps;for(let j=0;j<z.length;j++){const Z=z[j],st=A[Z],bt=R[Z];(bt!==st||Z==="value")&&r(pt,Z,st,bt,tt,C)}}nt&1&&I.children!==k.children&&u(pt,k.children)}else!rt&&M==null&&U(pt,A,R,C,tt);((F=R.onVnodeUpdated)||y)&&nn(()=>{F&&On(F,C,k,I),y&&Zi(k,I,C,"updated")},ft)},S=(I,k,C,ft,tt,et,rt)=>{for(let pt=0;pt<k.length;pt++){const nt=I[pt],M=k[pt],y=nt.el&&(nt.type===oe||!xr(nt,M)||nt.shapeFlag&198)?f(nt.el):C;_(nt,M,y,null,ft,tt,et,rt,!0)}},U=(I,k,C,ft,tt)=>{if(k!==C){if(k!==ge)for(const et in k)!Br(et)&&!(et in C)&&r(I,et,k[et],null,tt,ft);for(const et in C){if(Br(et))continue;const rt=C[et],pt=k[et];rt!==pt&&et!=="value"&&r(I,et,pt,rt,tt,ft)}"value"in C&&r(I,"value",k.value,C.value,tt)}},Y=(I,k,C,ft,tt,et,rt,pt,nt)=>{const M=k.el=I?I.el:a(""),y=k.anchor=I?I.anchor:a("");let{patchFlag:A,dynamicChildren:R,slotScopeIds:F}=k;F&&(pt=pt?pt.concat(F):F),I==null?(n(M,C,ft),n(y,C,ft),N(k.children||[],C,y,tt,et,rt,pt,nt)):A>0&&A&64&&R&&I.dynamicChildren&&I.dynamicChildren.length===R.length?(S(I.dynamicChildren,R,C,tt,et,rt,pt),(k.key!=null||tt&&k===tt.subTree)&&Kd(I,k,!0)):H(I,k,C,y,tt,et,rt,pt,nt)},O=(I,k,C,ft,tt,et,rt,pt,nt)=>{k.slotScopeIds=pt,I==null?k.shapeFlag&512?tt.ctx.activate(k,C,ft,rt,nt):W(k,C,ft,tt,et,rt,nt):V(I,k,nt)},W=(I,k,C,ft,tt,et,rt)=>{const pt=I.component=c_(I,ft,tt);if(Dd(I)&&(pt.ctx.renderer=qt),u_(pt,!1,rt),pt.asyncDep){if(tt&&tt.registerDep(pt,B,rt),!I.el){const nt=pt.subTree=Dn(Xi);p(null,nt,k,C),I.placeholder=nt.el}}else B(pt,I,k,C,tt,et,rt)},V=(I,k,C)=>{const ft=k.component=I.component;if(Wg(I,k,C))if(ft.asyncDep&&!ft.asyncResolved){K(ft,k,C);return}else ft.next=k,ft.update();else k.el=I.el,ft.vnode=k},B=(I,k,C,ft,tt,et,rt)=>{const pt=()=>{if(I.isMounted){let{next:A,bu:R,u:F,parent:z,vnode:j}=I;{const ht=Zd(I);if(ht){A&&(A.el=j.el,K(I,A,rt)),ht.asyncDep.then(()=>{nn(()=>{I.isUnmounted||M()},tt)});return}}let Z=A,st;Ji(I,!1),A?(A.el=j.el,K(I,A,rt)):A=j,R&&qo(R),(st=A.props&&A.props.onVnodeBeforeUpdate)&&On(st,z,A,j),Ji(I,!0);const bt=Yu(I),ut=I.subTree;I.subTree=bt,_(ut,bt,f(ut.el),St(ut),I,tt,et),A.el=bt.el,Z===null&&qg(I,bt.el),F&&nn(F,tt),(st=A.props&&A.props.onVnodeUpdated)&&nn(()=>On(st,z,A,j),tt)}else{let A;const{el:R,props:F}=k,{bm:z,m:j,parent:Z,root:st,type:bt}=I,ut=Gr(k);Ji(I,!1),z&&qo(z),!ut&&(A=F&&F.onVnodeBeforeMount)&&On(A,Z,k),Ji(I,!0);{st.ce&&st.ce._hasShadowRoot()&&st.ce._injectChildStyle(bt);const ht=I.subTree=Yu(I);_(null,ht,C,ft,I,tt,et),k.el=ht.el}if(j&&nn(j,tt),!ut&&(A=F&&F.onVnodeMounted)){const ht=k;nn(()=>On(A,Z,ht),tt)}(k.shapeFlag&256||Z&&Gr(Z.vnode)&&Z.vnode.shapeFlag&256)&&I.a&&nn(I.a,tt),I.isMounted=!0,k=C=ft=null}};I.scope.on();const nt=I.effect=new ld(pt);I.scope.off();const M=I.update=nt.run.bind(nt),y=I.job=nt.runIfDirty.bind(nt);y.i=I,y.id=I.uid,nt.scheduler=()=>tu(y),Ji(I,!0),M()},K=(I,k,C)=>{k.component=I;const ft=I.vnode.props;I.vnode=k,I.next=null,$g(I,k.props,ft,C),Zg(I,k.children,C),yi(),Hu(I),Si()},H=(I,k,C,ft,tt,et,rt,pt,nt=!1)=>{const M=I&&I.children,y=I?I.shapeFlag:0,A=k.children,{patchFlag:R,shapeFlag:F}=k;if(R>0){if(R&128){_t(M,A,C,ft,tt,et,rt,pt,nt);return}else if(R&256){lt(M,A,C,ft,tt,et,rt,pt,nt);return}}F&8?(y&16&&At(M,tt,et),A!==M&&u(C,A)):y&16?F&16?_t(M,A,C,ft,tt,et,rt,pt,nt):At(M,tt,et,!0):(y&8&&u(C,""),F&16&&N(A,C,ft,tt,et,rt,pt,nt))},lt=(I,k,C,ft,tt,et,rt,pt,nt)=>{I=I||Ws,k=k||Ws;const M=I.length,y=k.length,A=Math.min(M,y);let R;for(R=0;R<A;R++){const F=k[R]=nt?di(k[R]):Vn(k[R]);_(I[R],F,C,null,tt,et,rt,pt,nt)}M>y?At(I,tt,et,!0,!1,A):N(k,C,ft,tt,et,rt,pt,nt,A)},_t=(I,k,C,ft,tt,et,rt,pt,nt)=>{let M=0;const y=k.length;let A=I.length-1,R=y-1;for(;M<=A&&M<=R;){const F=I[M],z=k[M]=nt?di(k[M]):Vn(k[M]);if(xr(F,z))_(F,z,C,null,tt,et,rt,pt,nt);else break;M++}for(;M<=A&&M<=R;){const F=I[A],z=k[R]=nt?di(k[R]):Vn(k[R]);if(xr(F,z))_(F,z,C,null,tt,et,rt,pt,nt);else break;A--,R--}if(M>A){if(M<=R){const F=R+1,z=F<y?k[F].el:ft;for(;M<=R;)_(null,k[M]=nt?di(k[M]):Vn(k[M]),C,z,tt,et,rt,pt,nt),M++}}else if(M>R)for(;M<=A;)mt(I[M],tt,et,!0),M++;else{const F=M,z=M,j=new Map;for(M=z;M<=R;M++){const Mt=k[M]=nt?di(k[M]):Vn(k[M]);Mt.key!=null&&j.set(Mt.key,M)}let Z,st=0;const bt=R-z+1;let ut=!1,ht=0;const yt=new Array(bt);for(M=0;M<bt;M++)yt[M]=0;for(M=F;M<=A;M++){const Mt=I[M];if(st>=bt){mt(Mt,tt,et,!0);continue}let Xt;if(Mt.key!=null)Xt=j.get(Mt.key);else for(Z=z;Z<=R;Z++)if(yt[Z-z]===0&&xr(Mt,k[Z])){Xt=Z;break}Xt===void 0?mt(Mt,tt,et,!0):(yt[Xt-z]=M+1,Xt>=ht?ht=Xt:ut=!0,_(Mt,k[Xt],C,null,tt,et,rt,pt,nt),st++)}const Dt=ut?e_(yt):Ws;for(Z=Dt.length-1,M=bt-1;M>=0;M--){const Mt=z+M,Xt=k[Mt],jt=k[Mt+1],he=Mt+1<y?jt.el||Jd(jt):ft;yt[M]===0?_(null,Xt,C,he,tt,et,rt,pt,nt):ut&&(Z<0||M!==Dt[Z]?ct(Xt,C,he,2):Z--)}}},ct=(I,k,C,ft,tt=null)=>{const{el:et,type:rt,transition:pt,children:nt,shapeFlag:M}=I;if(M&6){ct(I.component.subTree,k,C,ft);return}if(M&128){I.suspense.move(k,C,ft);return}if(M&64){rt.move(I,k,C,qt);return}if(rt===oe){n(et,k,C);for(let A=0;A<nt.length;A++)ct(nt[A],k,C,ft);n(I.anchor,k,C);return}if(rt===Ga){b(I,k,C);return}if(ft!==2&&M&1&&pt)if(ft===0)pt.beforeEnter(et),n(et,k,C),nn(()=>pt.enter(et),tt);else{const{leave:A,delayLeave:R,afterLeave:F}=pt,z=()=>{I.ctx.isUnmounted?s(et):n(et,k,C)},j=()=>{et._isLeaving&&et[xg](!0),A(et,()=>{z(),F&&F()})};R?R(et,z,j):j()}else n(et,k,C)},mt=(I,k,C,ft=!1,tt=!1)=>{const{type:et,props:rt,ref:pt,children:nt,dynamicChildren:M,shapeFlag:y,patchFlag:A,dirs:R,cacheIndex:F}=I;if(A===-2&&(tt=!1),pt!=null&&(yi(),Vr(pt,null,C,I,!0),Si()),F!=null&&(k.renderCache[F]=void 0),y&256){k.ctx.deactivate(I);return}const z=y&1&&R,j=!Gr(I);let Z;if(j&&(Z=rt&&rt.onVnodeBeforeUnmount)&&On(Z,k,I),y&6)gt(I.component,C,ft);else{if(y&128){I.suspense.unmount(C,ft);return}z&&Zi(I,null,k,"beforeUnmount"),y&64?I.type.remove(I,k,C,qt,ft):M&&!M.hasOnce&&(et!==oe||A>0&&A&64)?At(M,k,C,!1,!0):(et===oe&&A&384||!tt&&y&16)&&At(nt,k,C),ft&&Ht(I)}(j&&(Z=rt&&rt.onVnodeUnmounted)||z)&&nn(()=>{Z&&On(Z,k,I),z&&Zi(I,null,k,"unmounted")},C)},Ht=I=>{const{type:k,el:C,anchor:ft,transition:tt}=I;if(k===oe){at(C,ft);return}if(k===Ga){x(I);return}const et=()=>{s(C),tt&&!tt.persisted&&tt.afterLeave&&tt.afterLeave()};if(I.shapeFlag&1&&tt&&!tt.persisted){const{leave:rt,delayLeave:pt}=tt,nt=()=>rt(C,et);pt?pt(I.el,et,nt):nt()}else et()},at=(I,k)=>{let C;for(;I!==k;)C=h(I),s(I),I=C;s(k)},gt=(I,k,C)=>{const{bum:ft,scope:tt,job:et,subTree:rt,um:pt,m:nt,a:M}=I;Zu(nt),Zu(M),ft&&qo(ft),tt.stop(),et&&(et.flags|=8,mt(rt,I,k,C)),pt&&nn(pt,k),nn(()=>{I.isUnmounted=!0},k)},At=(I,k,C,ft=!1,tt=!1,et=0)=>{for(let rt=et;rt<I.length;rt++)mt(I[rt],k,C,ft,tt)},St=I=>{if(I.shapeFlag&6)return St(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const k=h(I.anchor||I.el),C=k&&k[_g];return C?h(C):k};let kt=!1;const Gt=(I,k,C)=>{let ft;I==null?k._vnode&&(mt(k._vnode,null,null,!0),ft=k._vnode.component):_(k._vnode||null,I,k,null,null,null,C),k._vnode=I,kt||(kt=!0,Hu(ft),Ad(),kt=!1)},qt={p:_,um:mt,m:ct,r:Ht,mt:W,mc:N,pc:H,pbc:S,n:St,o:i};return{render:Gt,hydrate:void 0,createApp:Bg(Gt)}}function Va({type:i,props:t},e){return e==="svg"&&i==="foreignObject"||e==="mathml"&&i==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Ji({effect:i,job:t},e){e?(i.flags|=32,t.flags|=4):(i.flags&=-33,t.flags&=-5)}function t_(i,t){return(!i||i&&!i.pendingBranch)&&t&&!t.persisted}function Kd(i,t,e=!1){const n=i.children,s=t.children;if(Wt(n)&&Wt(s))for(let r=0;r<n.length;r++){const o=n[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=di(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&Kd(o,a)),a.type===ba&&(a.patchFlag===-1&&(a=s[r]=di(a)),a.el=o.el),a.type===Xi&&!a.el&&(a.el=o.el)}}function e_(i){const t=i.slice(),e=[0];let n,s,r,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(s=e[e.length-1],i[s]<c){t[n]=s,e.push(n);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,i[e[a]]<c?r=a+1:o=a;c<i[e[r]]&&(r>0&&(t[n]=e[r-1]),e[r]=n)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function Zd(i){const t=i.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Zd(t)}function Zu(i){if(i)for(let t=0;t<i.length;t++)i[t].flags|=8}function Jd(i){if(i.placeholder)return i.placeholder;const t=i.component;return t?Jd(t.subTree):null}const Qd=i=>i.__isSuspense;function n_(i,t){t&&t.pendingBranch?Wt(i)?t.effects.push(...i):t.effects.push(i):ug(i)}const oe=Symbol.for("v-fgt"),ba=Symbol.for("v-txt"),Xi=Symbol.for("v-cmt"),Ga=Symbol.for("v-stc"),qr=[];let hn=null;function Tt(i=!1){qr.push(hn=i?null:[])}function i_(){qr.pop(),hn=qr[qr.length-1]||null}let Jr=1;function Ju(i,t=!1){Jr+=i,i<0&&hn&&t&&(hn.hasOnce=!0)}function tp(i){return i.dynamicChildren=Jr>0?hn||Ws:null,i_(),Jr>0&&hn&&hn.push(i),i}function It(i,t,e,n,s,r){return tp(it(i,t,e,n,s,r,!0))}function Xr(i,t,e,n,s){return tp(Dn(i,t,e,n,s,!0))}function ep(i){return i?i.__v_isVNode===!0:!1}function xr(i,t){return i.type===t.type&&i.key===t.key}const np=({key:i})=>i??null,Xo=({ref:i,ref_key:t,ref_for:e})=>(typeof i=="number"&&(i=""+i),i!=null?Le(i)||Te(i)||Kt(i)?{i:Sn,r:i,k:t,f:!!e}:i:null);function it(i,t=null,e=null,n=0,s=null,r=i===oe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:t,key:t&&np(t),ref:t&&Xo(t),scopeId:Rd,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Sn};return a?(su(l,e),r&128&&i.normalize(l)):e&&(l.shapeFlag|=Le(e)?8:16),Jr>0&&!o&&hn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&hn.push(l),l}const Dn=s_;function s_(i,t=null,e=null,n=0,s=null,r=!1){if((!i||i===Pg)&&(i=Xi),ep(i)){const a=Js(i,t,!0);return e&&su(a,e),Jr>0&&!r&&hn&&(a.shapeFlag&6?hn[hn.indexOf(i)]=a:hn.push(a)),a.patchFlag=-2,a}if(p_(i)&&(i=i.__vccOpts),t){t=r_(t);let{class:a,style:l}=t;a&&!Le(a)&&(t.class=Kn(a)),me(l)&&(ya(l)&&!Wt(l)&&(l=Be({},l)),t.style=cn(l))}const o=Le(i)?1:Qd(i)?128:vg(i)?64:me(i)?4:Kt(i)?2:0;return it(i,t,e,n,s,o,r,!0)}function r_(i){return i?ya(i)||Wd(i)?Be({},i):i:null}function Js(i,t,e=!1,n=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=i,c=t?o_(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&np(c),ref:t&&t.ref?e&&r?Wt(r)?r.concat(Xo(t)):[r,Xo(t)]:Xo(t):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:t&&i.type!==oe?o===-1?16:o|16:o,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Js(i.ssContent),ssFallback:i.ssFallback&&Js(i.ssFallback),placeholder:i.placeholder,el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&n&&eu(u,l.clone(u)),u}function sn(i=" ",t=0){return Dn(ba,null,i,t)}function fn(i="",t=!1){return t?(Tt(),Xr(Xi,null,i)):Dn(Xi,null,i)}function Vn(i){return i==null||typeof i=="boolean"?Dn(Xi):Wt(i)?Dn(oe,null,i.slice()):ep(i)?di(i):Dn(ba,null,String(i))}function di(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Js(i)}function su(i,t){let e=0;const{shapeFlag:n}=i;if(t==null)t=null;else if(Wt(t))e=16;else if(typeof t=="object")if(n&65){const s=t.default;s&&(s._c&&(s._d=!1),su(i,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Wd(t)?t._ctx=Sn:s===3&&Sn&&(Sn.slots._===1?t._=1:(t._=2,i.patchFlag|=1024))}else Kt(t)?(t={default:t,_ctx:Sn},e=32):(t=String(t),n&64?(e=16,t=[sn(t)]):e=8);i.children=t,i.shapeFlag|=e}function o_(...i){const t={};for(let e=0;e<i.length;e++){const n=i[e];for(const s in n)if(s==="class")t.class!==n.class&&(t.class=Kn([t.class,n.class]));else if(s==="style")t.style=cn([t.style,n.style]);else if(pa(s)){const r=t[s],o=n[s];o&&r!==o&&!(Wt(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=n[s])}return t}function On(i,t,e,n=null){Zn(i,t,7,[e,n])}const a_=zd();let l_=0;function c_(i,t,e){const n=i.type,s=(t?t.appContext:i.appContext)||a_,r={uid:l_++,vnode:i,type:n,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new rd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xd(n,s),emitsOptions:kd(n,s),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:n.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=kg.bind(null,r),i.ce&&i.ce(r),r}let Ze=null;const ip=()=>Ze||Sn;let ua,Wl;{const i=_a(),t=(e,n)=>{let s;return(s=i[e])||(s=i[e]=[]),s.push(n),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ua=t("__VUE_INSTANCE_SETTERS__",e=>Ze=e),Wl=t("__VUE_SSR_SETTERS__",e=>Qr=e)}const so=i=>{const t=Ze;return ua(i),i.scope.on(),()=>{i.scope.off(),ua(t)}},Qu=()=>{Ze&&Ze.scope.off(),ua(null)};function sp(i){return i.vnode.shapeFlag&4}let Qr=!1;function u_(i,t=!1,e=!1){t&&Wl(t);const{props:n,children:s}=i.vnode,r=sp(i);Xg(i,n,r,t),Kg(i,s,e||t);const o=r?h_(i,t):void 0;return t&&Wl(!1),o}function h_(i,t){const e=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,Lg);const{setup:n}=e;if(n){yi();const s=i.setupContext=n.length>1?d_(i):null,r=so(i),o=no(n,i,0,[i.props,s]),a=Zf(o);if(Si(),r(),(a||i.sp)&&!Gr(i)&&Id(i),a){if(o.then(Qu,Qu),t)return o.then(l=>{th(i,l)}).catch(l=>{Sa(l,i,0)});i.asyncDep=o}else th(i,o)}else rp(i)}function th(i,t,e){Kt(t)?i.type.__ssrInlineRender?i.ssrRender=t:i.render=t:me(t)&&(i.setupState=Ed(t)),rp(i)}function rp(i,t,e){const n=i.type;i.render||(i.render=n.render||Xn);{const s=so(i);yi();try{Ig(i)}finally{Si(),s()}}}const f_={get(i,t){return We(i,"get",""),i[t]}};function d_(i){const t=e=>{i.exposed=e||{}};return{attrs:new Proxy(i.attrs,f_),slots:i.slots,emit:i.emit,expose:t}}function wa(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(Ed(Qc(i.exposed)),{get(t,e){if(e in t)return t[e];if(e in Wr)return Wr[e](i)},has(t,e){return e in t||e in Wr}})):i.proxy}function p_(i){return Kt(i)&&"__vccOpts"in i}const Ge=(i,t)=>rg(i,t,Qr),m_="3.5.28";/**
* @vue/runtime-dom v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ql;const eh=typeof window<"u"&&window.trustedTypes;if(eh)try{ql=eh.createPolicy("vue",{createHTML:i=>i})}catch{}const op=ql?i=>ql.createHTML(i):i=>i,g_="http://www.w3.org/2000/svg",__="http://www.w3.org/1998/Math/MathML",fi=typeof document<"u"?document:null,nh=fi&&fi.createElement("template"),v_={insert:(i,t,e)=>{t.insertBefore(i,e||null)},remove:i=>{const t=i.parentNode;t&&t.removeChild(i)},createElement:(i,t,e,n)=>{const s=t==="svg"?fi.createElementNS(g_,i):t==="mathml"?fi.createElementNS(__,i):e?fi.createElement(i,{is:e}):fi.createElement(i);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>fi.createTextNode(i),createComment:i=>fi.createComment(i),setText:(i,t)=>{i.nodeValue=t},setElementText:(i,t)=>{i.textContent=t},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>fi.querySelector(i),setScopeId(i,t){i.setAttribute(t,"")},insertStaticContent(i,t,e,n,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{nh.innerHTML=op(n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i);const a=nh.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},x_=Symbol("_vtc");function y_(i,t,e){const n=i[x_];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?i.removeAttribute("class"):e?i.setAttribute("class",t):i.className=t}const ih=Symbol("_vod"),S_=Symbol("_vsh"),M_=Symbol(""),E_=/(?:^|;)\s*display\s*:/;function b_(i,t,e){const n=i.style,s=Le(e);let r=!1;if(e&&!s){if(t)if(Le(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&$o(n,a,"")}else for(const o in t)e[o]==null&&$o(n,o,"");for(const o in e)o==="display"&&(r=!0),$o(n,o,e[o])}else if(s){if(t!==e){const o=n[M_];o&&(e+=";"+o),n.cssText=e,r=E_.test(e)}}else t&&i.removeAttribute("style");ih in i&&(i[ih]=r?n.display:"",i[S_]&&(n.display="none"))}const sh=/\s*!important$/;function $o(i,t,e){if(Wt(e))e.forEach(n=>$o(i,t,n));else if(e==null&&(e=""),t.startsWith("--"))i.setProperty(t,e);else{const n=w_(i,t);sh.test(e)?i.setProperty(ji(n),e.replace(sh,""),"important"):i[n]=e}}const rh=["Webkit","Moz","ms"],Wa={};function w_(i,t){const e=Wa[t];if(e)return e;let n=qi(t);if(n!=="filter"&&n in i)return Wa[t]=n;n=td(n);for(let s=0;s<rh.length;s++){const r=rh[s]+n;if(r in i)return Wa[t]=r}return t}const oh="http://www.w3.org/1999/xlink";function ah(i,t,e,n,s,r=Rm(t)){n&&t.startsWith("xlink:")?e==null?i.removeAttributeNS(oh,t.slice(6,t.length)):i.setAttributeNS(oh,t,e):e==null||r&&!nd(e)?i.removeAttribute(t):i.setAttribute(t,r?"":jn(e)?String(e):e)}function lh(i,t,e,n,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(i[t]=t==="innerHTML"?op(e):e);return}const r=i.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?i.getAttribute("value")||"":i.value,l=e==null?i.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in i))&&(i.value=l),e==null&&i.removeAttribute(t),i._value=e;return}let o=!1;if(e===""||e==null){const a=typeof i[t];a==="boolean"?e=nd(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{i[t]=e}catch{}o&&i.removeAttribute(s||t)}function Hs(i,t,e,n){i.addEventListener(t,e,n)}function T_(i,t,e,n){i.removeEventListener(t,e,n)}const ch=Symbol("_vei");function A_(i,t,e,n,s=null){const r=i[ch]||(i[ch]={}),o=r[t];if(n&&o)o.value=n;else{const[a,l]=C_(t);if(n){const c=r[t]=L_(n,s);Hs(i,a,c,l)}else o&&(T_(i,a,o,l),r[t]=void 0)}}const uh=/(?:Once|Passive|Capture)$/;function C_(i){let t;if(uh.test(i)){t={};let n;for(;n=i.match(uh);)i=i.slice(0,i.length-n[0].length),t[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):ji(i.slice(2)),t]}let qa=0;const R_=Promise.resolve(),P_=()=>qa||(R_.then(()=>qa=0),qa=Date.now());function L_(i,t){const e=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=e.attached)return;Zn(I_(n,e.value),t,5,[n])};return e.value=i,e.attached=P_(),e}function I_(i,t){if(Wt(t)){const e=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{e.call(i),i._stopped=!0},t.map(n=>s=>!s._stopped&&n&&n(s))}else return t}const hh=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,D_=(i,t,e,n,s,r)=>{const o=s==="svg";t==="class"?y_(i,n,o):t==="style"?b_(i,e,n):pa(t)?Gc(t)||A_(i,t,e,n,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):N_(i,t,n,o))?(lh(i,t,n),!i.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ah(i,t,n,o,r,t!=="value")):i._isVueCE&&(/[A-Z]/.test(t)||!Le(n))?lh(i,qi(t),n,r,t):(t==="true-value"?i._trueValue=n:t==="false-value"&&(i._falseValue=n),ah(i,t,n,o))};function N_(i,t,e,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in i&&hh(t)&&Kt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&i.tagName==="IFRAME"||t==="form"||t==="list"&&i.tagName==="INPUT"||t==="type"&&i.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=i.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return hh(t)&&Le(e)?!1:t in i}const fh=i=>{const t=i.props["onUpdate:modelValue"]||!1;return Wt(t)?e=>qo(t,e):t};function U_(i){i.target.composing=!0}function dh(i){const t=i.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Xa=Symbol("_assign");function ph(i,t,e){return t&&(i=i.trim()),e&&(i=qc(i)),i}const $a={created(i,{modifiers:{lazy:t,trim:e,number:n}},s){i[Xa]=fh(s);const r=n||s.props&&s.props.type==="number";Hs(i,t?"change":"input",o=>{o.target.composing||i[Xa](ph(i.value,e,r))}),(e||r)&&Hs(i,"change",()=>{i.value=ph(i.value,e,r)}),t||(Hs(i,"compositionstart",U_),Hs(i,"compositionend",dh),Hs(i,"change",dh))},mounted(i,{value:t}){i.value=t??""},beforeUpdate(i,{value:t,oldValue:e,modifiers:{lazy:n,trim:s,number:r}},o){if(i[Xa]=fh(o),i.composing)return;const a=(r||i.type==="number")&&!/^0\d/.test(i.value)?qc(i.value):i.value,l=t??"";a!==l&&(document.activeElement===i&&i.type!=="range"&&(n&&t===e||s&&i.value.trim()===l)||(i.value=l))}},F_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},mh=(i,t)=>{const e=i._withKeys||(i._withKeys={}),n=t.join(".");return e[n]||(e[n]=(s=>{if(!("key"in s))return;const r=ji(s.key);if(t.some(o=>o===r||F_[o]===r))return i(s)}))},O_=Be({patchProp:D_},v_);let gh;function B_(){return gh||(gh=Jg(O_))}const z_=((...i)=>{const t=B_().createApp(...i),{mount:e}=t;return t.mount=n=>{const s=H_(n);if(!s)return;const r=t._component;!Kt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,k_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function k_(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function H_(i){return Le(i)?document.querySelector(i):i}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let ap;const Ta=i=>ap=i,lp=Symbol();function Xl(i){return i&&typeof i=="object"&&Object.prototype.toString.call(i)==="[object Object]"&&typeof i.toJSON!="function"}var $r;(function(i){i.direct="direct",i.patchObject="patch object",i.patchFunction="patch function"})($r||($r={}));function V_(){const i=od(!0),t=i.run(()=>Ee({}));let e=[],n=[];const s=Qc({install(r){Ta(s),s._a=r,r.provide(lp,s),r.config.globalProperties.$pinia=s,n.forEach(o=>e.push(o)),n=[]},use(r){return this._a?e.push(r):n.push(r),this},_p:e,_a:null,_e:i,_s:new Map,state:t});return s}const cp=()=>{};function _h(i,t,e,n=cp){i.push(t);const s=()=>{const r=i.indexOf(t);r>-1&&(i.splice(r,1),n())};return!e&&ad()&&Lm(s),s}function Ms(i,...t){i.slice().forEach(e=>{e(...t)})}const G_=i=>i(),vh=Symbol(),Ya=Symbol();function $l(i,t){i instanceof Map&&t instanceof Map?t.forEach((e,n)=>i.set(n,e)):i instanceof Set&&t instanceof Set&&t.forEach(i.add,i);for(const e in t){if(!t.hasOwnProperty(e))continue;const n=t[e],s=i[e];Xl(s)&&Xl(n)&&i.hasOwnProperty(e)&&!Te(n)&&!vi(n)?i[e]=$l(s,n):i[e]=n}return i}const W_=Symbol();function q_(i){return!Xl(i)||!i.hasOwnProperty(W_)}const{assign:Ui}=Object;function X_(i){return!!(Te(i)&&i.effect)}function $_(i,t,e,n){const{state:s,actions:r,getters:o}=t,a=e.state.value[i];let l;function c(){a||(e.state.value[i]=s?s():{});const u=eg(e.state.value[i]);return Ui(u,r,Object.keys(o||{}).reduce((f,h)=>(f[h]=Qc(Ge(()=>{Ta(e);const d=e._s.get(i);return o[h].call(d,d)})),f),{}))}return l=up(i,c,t,e,n,!0),l}function up(i,t,e={},n,s,r){let o;const a=Ui({actions:{}},e),l={deep:!0};let c,u,f=[],h=[],d;const g=n.state.value[i];!r&&!g&&(n.state.value[i]={});let _;function m(N){let w;c=u=!1,typeof N=="function"?(N(n.state.value[i]),w={type:$r.patchFunction,storeId:i,events:d}):($l(n.state.value[i],N),w={type:$r.patchObject,payload:N,storeId:i,events:d});const S=_=Symbol();wd().then(()=>{_===S&&(c=!0)}),u=!0,Ms(f,w,n.state.value[i])}const p=r?function(){const{state:w}=e,S=w?w():{};this.$patch(U=>{Ui(U,S)})}:cp;function v(){o.stop(),f=[],h=[],n._s.delete(i)}const b=(N,w="")=>{if(vh in N)return N[Ya]=w,N;const S=function(){Ta(n);const U=Array.from(arguments),Y=[],O=[];function W(K){Y.push(K)}function V(K){O.push(K)}Ms(h,{args:U,name:S[Ya],store:D,after:W,onError:V});let B;try{B=N.apply(this&&this.$id===i?this:D,U)}catch(K){throw Ms(O,K),K}return B instanceof Promise?B.then(K=>(Ms(Y,K),K)).catch(K=>(Ms(O,K),Promise.reject(K))):(Ms(Y,B),B)};return S[vh]=!0,S[Ya]=w,S},x={_p:n,$id:i,$onAction:_h.bind(null,h),$patch:m,$reset:p,$subscribe(N,w={}){const S=_h(f,N,w.detached,()=>U()),U=o.run(()=>$s(()=>n.state.value[i],Y=>{(w.flush==="sync"?u:c)&&N({storeId:i,type:$r.direct,events:d},Y)},Ui({},l,w)));return S},$dispose:v},D=xa(x);n._s.set(i,D);const P=(n._a&&n._a.runWithContext||G_)(()=>n._e.run(()=>(o=od()).run(()=>t({action:b}))));for(const N in P){const w=P[N];if(Te(w)&&!X_(w)||vi(w))r||(g&&q_(w)&&(Te(w)?w.value=g[N]:$l(w,g[N])),n.state.value[i][N]=w);else if(typeof w=="function"){const S=b(w,N);P[N]=S,a.actions[N]=w}}return Ui(D,P),Ui(re(D),P),Object.defineProperty(D,"$state",{get:()=>n.state.value[i],set:N=>{m(w=>{Ui(w,N)})}}),n._p.forEach(N=>{Ui(D,o.run(()=>N({store:D,app:n._a,pinia:n,options:a})))}),g&&r&&e.hydrate&&e.hydrate(D.$state,g),c=!0,u=!0,D}/*! #__NO_SIDE_EFFECTS__ */function Y_(i,t,e){let n,s;const r=typeof t=="function";n=i,s=r?e:t;function o(a,l){const c=dg();return a=a||(c?Hr(lp,null):null),a&&Ta(a),a=ap,a._s.has(n)||(r?up(n,t,s,a):$_(n,s,a)),a._s.get(n)}return o.$id=n,o}const xs=Y_("game",()=>{const i=Ee(""),t=Ee(!1),e=Ee(""),n=Ee("waiting"),s=Ee([]),r=Ee(0),o=Ee(1),a=Ee({rollCount:0,dice:[0,0,0,0,0],kept:[!1,!1,!1,!1,!1]}),l=Ee({ones:null,twos:null,threes:null,fours:null,fives:null,sixes:null,choice:null,fourOfAKind:null,fullHouse:null,smallStraight:null,largeStraight:null,yacht:null}),c=Ee(0),u=Ee(0),f=Ee({}),h=Ee([]),d=Ee(null),g=Ee(!1),_=Ee(""),m=Jm(null),p=Ge(()=>s.value.find(ct=>ct.id===i.value)),v=Ge(()=>{const ct=s.value[r.value];return(ct==null?void 0:ct.id)===i.value}),b=Ge(()=>s.value[r.value]),x=Ge(()=>v.value&&a.value.rollCount<3&&!g.value&&n.value==="playing"),D=Ge(()=>v.value&&a.value.rollCount>0&&!g.value&&n.value==="playing"),L=Ge(()=>{var ct;return((ct=p.value)==null?void 0:ct.isHost)??!1}),P=Ge(()=>_.value===i.value);function N(ct){n.value=ct.phase,s.value=ct.players,r.value=ct.currentPlayerIndex,o.value=ct.currentRound,ct.turnState&&(a.value=ct.turnState)}function w(ct){l.value=ct.scores,c.value=ct.bonus,u.value=ct.total}function S(ct){f.value=ct}function U(ct,mt,Ht){_.value=ct,a.value.rollCount=mt,a.value.kept=Ht,a.value.dice=[0,0,0,0,0],m.value=null,g.value=!0}function Y(ct){a.value.dice=ct.dice,a.value.rollCount=ct.rollCount,a.value.kept=ct.kept,g.value=!1,m.value=null}function O(ct){m.value=ct}function W(){g.value=!1}function V(ct){a.value.kept=ct}function B(ct){h.value=ct,n.value="finished"}function K(ct){d.value=ct}function H(){d.value=null}function lt(ct){!v.value||a.value.rollCount===0||a.value.rollCount>=3||(a.value.kept[ct]=!a.value.kept[ct])}function _t(){e.value="",n.value="waiting",s.value=[],r.value=0,o.value=1,a.value={rollCount:0,dice:[0,0,0,0,0],kept:[!1,!1,!1,!1,!1]},_.value="",m.value=null,l.value={ones:null,twos:null,threes:null,fours:null,fives:null,sixes:null,choice:null,fourOfAKind:null,fullHouse:null,smallStraight:null,largeStraight:null,yacht:null},c.value=0,u.value=0,f.value={},h.value=[]}return{mySocketId:i,connected:t,roomCode:e,phase:n,players:s,currentPlayerIndex:r,currentRound:o,turnState:a,myScores:l,myBonus:c,myTotal:u,possibleScores:f,rankings:h,isRolling:g,rollingPlayerId:_,physicsStreamData:m,viewingPlayerScore:d,myPlayer:p,isMyTurn:v,currentPlayer:b,canRoll:x,canSelectScore:D,isHost:L,isMyRolling:P,updateRoomState:N,updateScoreCard:w,updatePossibleScores:S,startRolling:U,updateDiceRolled:Y,updatePhysicsStream:O,onPhysicsComplete:W,updateKept:V,setRankings:B,toggleKeep:lt,reset:_t,setViewingPlayerScore:K,clearViewingPlayerScore:H}}),Jn=Object.create(null);Jn.open="0";Jn.close="1";Jn.ping="2";Jn.pong="3";Jn.message="4";Jn.upgrade="5";Jn.noop="6";const Yo=Object.create(null);Object.keys(Jn).forEach(i=>{Yo[Jn[i]]=i});const Yl={type:"error",data:"parser error"},hp=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",fp=typeof ArrayBuffer=="function",dp=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i&&i.buffer instanceof ArrayBuffer,ru=({type:i,data:t},e,n)=>hp&&t instanceof Blob?e?n(t):xh(t,n):fp&&(t instanceof ArrayBuffer||dp(t))?e?n(t):xh(new Blob([t]),n):n(Jn[i]+(t||"")),xh=(i,t)=>{const e=new FileReader;return e.onload=function(){const n=e.result.split(",")[1];t("b"+(n||""))},e.readAsDataURL(i)};function yh(i){return i instanceof Uint8Array?i:i instanceof ArrayBuffer?new Uint8Array(i):new Uint8Array(i.buffer,i.byteOffset,i.byteLength)}let ja;function j_(i,t){if(hp&&i.data instanceof Blob)return i.data.arrayBuffer().then(yh).then(t);if(fp&&(i.data instanceof ArrayBuffer||dp(i.data)))return t(yh(i.data));ru(i,!1,e=>{ja||(ja=new TextEncoder),t(ja.encode(e))})}const Sh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Nr=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let i=0;i<Sh.length;i++)Nr[Sh.charCodeAt(i)]=i;const K_=i=>{let t=i.length*.75,e=i.length,n,s=0,r,o,a,l;i[i.length-1]==="="&&(t--,i[i.length-2]==="="&&t--);const c=new ArrayBuffer(t),u=new Uint8Array(c);for(n=0;n<e;n+=4)r=Nr[i.charCodeAt(n)],o=Nr[i.charCodeAt(n+1)],a=Nr[i.charCodeAt(n+2)],l=Nr[i.charCodeAt(n+3)],u[s++]=r<<2|o>>4,u[s++]=(o&15)<<4|a>>2,u[s++]=(a&3)<<6|l&63;return c},Z_=typeof ArrayBuffer=="function",ou=(i,t)=>{if(typeof i!="string")return{type:"message",data:pp(i,t)};const e=i.charAt(0);return e==="b"?{type:"message",data:J_(i.substring(1),t)}:Yo[e]?i.length>1?{type:Yo[e],data:i.substring(1)}:{type:Yo[e]}:Yl},J_=(i,t)=>{if(Z_){const e=K_(i);return pp(e,t)}else return{base64:!0,data:i}},pp=(i,t)=>{switch(t){case"blob":return i instanceof Blob?i:new Blob([i]);case"arraybuffer":default:return i instanceof ArrayBuffer?i:i.buffer}},mp="",Q_=(i,t)=>{const e=i.length,n=new Array(e);let s=0;i.forEach((r,o)=>{ru(r,!1,a=>{n[o]=a,++s===e&&t(n.join(mp))})})},tv=(i,t)=>{const e=i.split(mp),n=[];for(let s=0;s<e.length;s++){const r=ou(e[s],t);if(n.push(r),r.type==="error")break}return n};function ev(){return new TransformStream({transform(i,t){j_(i,e=>{const n=e.length;let s;if(n<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,n);else if(n<65536){s=new Uint8Array(3);const r=new DataView(s.buffer);r.setUint8(0,126),r.setUint16(1,n)}else{s=new Uint8Array(9);const r=new DataView(s.buffer);r.setUint8(0,127),r.setBigUint64(1,BigInt(n))}i.data&&typeof i.data!="string"&&(s[0]|=128),t.enqueue(s),t.enqueue(e)})}})}let Ka;function go(i){return i.reduce((t,e)=>t+e.length,0)}function _o(i,t){if(i[0].length===t)return i.shift();const e=new Uint8Array(t);let n=0;for(let s=0;s<t;s++)e[s]=i[0][n++],n===i[0].length&&(i.shift(),n=0);return i.length&&n<i[0].length&&(i[0]=i[0].slice(n)),e}function nv(i,t){Ka||(Ka=new TextDecoder);const e=[];let n=0,s=-1,r=!1;return new TransformStream({transform(o,a){for(e.push(o);;){if(n===0){if(go(e)<1)break;const l=_o(e,1);r=(l[0]&128)===128,s=l[0]&127,s<126?n=3:s===126?n=1:n=2}else if(n===1){if(go(e)<2)break;const l=_o(e,2);s=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),n=3}else if(n===2){if(go(e)<8)break;const l=_o(e,8),c=new DataView(l.buffer,l.byteOffset,l.length),u=c.getUint32(0);if(u>Math.pow(2,21)-1){a.enqueue(Yl);break}s=u*Math.pow(2,32)+c.getUint32(4),n=3}else{if(go(e)<s)break;const l=_o(e,s);a.enqueue(ou(r?l:Ka.decode(l),t)),n=0}if(s===0||s>i){a.enqueue(Yl);break}}}})}const gp=4;function Pe(i){if(i)return iv(i)}function iv(i){for(var t in Pe.prototype)i[t]=Pe.prototype[t];return i}Pe.prototype.on=Pe.prototype.addEventListener=function(i,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+i]=this._callbacks["$"+i]||[]).push(t),this};Pe.prototype.once=function(i,t){function e(){this.off(i,e),t.apply(this,arguments)}return e.fn=t,this.on(i,e),this};Pe.prototype.off=Pe.prototype.removeListener=Pe.prototype.removeAllListeners=Pe.prototype.removeEventListener=function(i,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var e=this._callbacks["$"+i];if(!e)return this;if(arguments.length==1)return delete this._callbacks["$"+i],this;for(var n,s=0;s<e.length;s++)if(n=e[s],n===t||n.fn===t){e.splice(s,1);break}return e.length===0&&delete this._callbacks["$"+i],this};Pe.prototype.emit=function(i){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),e=this._callbacks["$"+i],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(e){e=e.slice(0);for(var n=0,s=e.length;n<s;++n)e[n].apply(this,t)}return this};Pe.prototype.emitReserved=Pe.prototype.emit;Pe.prototype.listeners=function(i){return this._callbacks=this._callbacks||{},this._callbacks["$"+i]||[]};Pe.prototype.hasListeners=function(i){return!!this.listeners(i).length};const Aa=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,e)=>e(t,0),yn=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),sv="arraybuffer";function _p(i,...t){return t.reduce((e,n)=>(i.hasOwnProperty(n)&&(e[n]=i[n]),e),{})}const rv=yn.setTimeout,ov=yn.clearTimeout;function Ca(i,t){t.useNativeTimers?(i.setTimeoutFn=rv.bind(yn),i.clearTimeoutFn=ov.bind(yn)):(i.setTimeoutFn=yn.setTimeout.bind(yn),i.clearTimeoutFn=yn.clearTimeout.bind(yn))}const av=1.33;function lv(i){return typeof i=="string"?cv(i):Math.ceil((i.byteLength||i.size)*av)}function cv(i){let t=0,e=0;for(let n=0,s=i.length;n<s;n++)t=i.charCodeAt(n),t<128?e+=1:t<2048?e+=2:t<55296||t>=57344?e+=3:(n++,e+=4);return e}function vp(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function uv(i){let t="";for(let e in i)i.hasOwnProperty(e)&&(t.length&&(t+="&"),t+=encodeURIComponent(e)+"="+encodeURIComponent(i[e]));return t}function hv(i){let t={},e=i.split("&");for(let n=0,s=e.length;n<s;n++){let r=e[n].split("=");t[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return t}class fv extends Error{constructor(t,e,n){super(t),this.description=e,this.context=n,this.type="TransportError"}}class au extends Pe{constructor(t){super(),this.writable=!1,Ca(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,e,n){return super.emitReserved("error",new fv(t,e,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const e=ou(t,this.socket.binaryType);this.onPacket(e)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,e={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(e)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const e=uv(t);return e.length?"?"+e:""}}class dv extends au{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const e=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||e()})),this.writable||(n++,this.once("drain",function(){--n||e()}))}else e()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const e=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};tv(t,this.socket.binaryType).forEach(e),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,Q_(t,e=>{this.doWrite(e,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",e=this.query||{};return this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=vp()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.createUri(t,e)}}let xp=!1;try{xp=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const pv=xp;function mv(){}class gv extends dv{constructor(t){if(super(t),typeof location<"u"){const e=location.protocol==="https:";let n=location.port;n||(n=e?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||n!==t.port}}doWrite(t,e){const n=this.request({method:"POST",data:t});n.on("success",e),n.on("error",(s,r)=>{this.onError("xhr post error",s,r)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(e,n)=>{this.onError("xhr poll error",e,n)}),this.pollXhr=t}}class $n extends Pe{constructor(t,e,n){super(),this.createRequest=t,Ca(this,n),this._opts=n,this._method=n.method||"GET",this._uri=e,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var t;const e=_p(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(e);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let s in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(s)&&n.setRequestHeader(s,this._opts.extraHeaders[s])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var s;n.readyState===3&&((s=this._opts.cookieJar)===null||s===void 0||s.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(s){this.setTimeoutFn(()=>{this._onError(s)},0);return}typeof document<"u"&&(this._index=$n.requestsCount++,$n.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=mv,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete $n.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}$n.requestsCount=0;$n.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Mh);else if(typeof addEventListener=="function"){const i="onpagehide"in yn?"pagehide":"unload";addEventListener(i,Mh,!1)}}function Mh(){for(let i in $n.requests)$n.requests.hasOwnProperty(i)&&$n.requests[i].abort()}const _v=(function(){const i=yp({xdomain:!1});return i&&i.responseType!==null})();class vv extends gv{constructor(t){super(t);const e=t&&t.forceBase64;this.supportsBinary=_v&&!e}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new $n(yp,this.uri(),t)}}function yp(i){const t=i.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||pv))return new XMLHttpRequest}catch{}if(!t)try{return new yn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Sp=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class xv extends au{get name(){return"websocket"}doOpen(){const t=this.uri(),e=this.opts.protocols,n=Sp?{}:_p(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,e,n)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const n=t[e],s=e===t.length-1;ru(n,this.supportsBinary,r=>{try{this.doWrite(n,r)}catch{}s&&Aa(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",e=this.query||{};return this.opts.timestampRequests&&(e[this.opts.timestampParam]=vp()),this.supportsBinary||(e.b64=1),this.createUri(t,e)}}const Za=yn.WebSocket||yn.MozWebSocket;class yv extends xv{createSocket(t,e,n){return Sp?new Za(t,e,n):e?new Za(t,e):new Za(t)}doWrite(t,e){this.ws.send(e)}}class Sv extends au{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const e=nv(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=t.readable.pipeThrough(e).getReader(),s=ev();s.readable.pipeTo(t.writable),this._writer=s.writable.getWriter();const r=()=>{n.read().then(({done:a,value:l})=>{a||(this.onPacket(l),r())}).catch(a=>{})};r();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const n=t[e],s=e===t.length-1;this._writer.write(n).then(()=>{s&&Aa(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const Mv={websocket:yv,webtransport:Sv,polling:vv},Ev=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,bv=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function jl(i){if(i.length>8e3)throw"URI too long";const t=i,e=i.indexOf("["),n=i.indexOf("]");e!=-1&&n!=-1&&(i=i.substring(0,e)+i.substring(e,n).replace(/:/g,";")+i.substring(n,i.length));let s=Ev.exec(i||""),r={},o=14;for(;o--;)r[bv[o]]=s[o]||"";return e!=-1&&n!=-1&&(r.source=t,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=wv(r,r.path),r.queryKey=Tv(r,r.query),r}function wv(i,t){const e=/\/{2,9}/g,n=t.replace(e,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&n.splice(0,1),t.slice(-1)=="/"&&n.splice(n.length-1,1),n}function Tv(i,t){const e={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,s,r){s&&(e[s]=r)}),e}const Kl=typeof addEventListener=="function"&&typeof removeEventListener=="function",jo=[];Kl&&addEventListener("offline",()=>{jo.forEach(i=>i())},!1);class Hi extends Pe{constructor(t,e){if(super(),this.binaryType=sv,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(e=t,t=null),t){const n=jl(t);e.hostname=n.host,e.secure=n.protocol==="https"||n.protocol==="wss",e.port=n.port,n.query&&(e.query=n.query)}else e.host&&(e.hostname=jl(e.host).host);Ca(this,e),this.secure=e.secure!=null?e.secure:typeof location<"u"&&location.protocol==="https:",e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.hostname=e.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=e.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},e.transports.forEach(n=>{const s=n.prototype.name;this.transports.push(s),this._transportsByName[s]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},e),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=hv(this.opts.query)),Kl&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},jo.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const e=Object.assign({},this.opts.query);e.EIO=gp,e.transport=t,this.id&&(e.sid=this.id);const n=Object.assign({},this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&Hi.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const e=this.createTransport(t);e.open(),this.setTransport(e)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",e=>this._onClose("transport close",e))}onOpen(){this.readyState="open",Hi.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const e=new Error("server error");e.code=t.data,this._onError(e);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let e=1;for(let n=0;n<this.writeBuffer.length;n++){const s=this.writeBuffer[n].data;if(s&&(e+=lv(s)),n>0&&e>this._maxPayload)return this.writeBuffer.slice(0,n);e+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,Aa(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,e,n){return this._sendPacket("message",t,e,n),this}send(t,e,n){return this._sendPacket("message",t,e,n),this}_sendPacket(t,e,n,s){if(typeof e=="function"&&(s=e,e=void 0),typeof n=="function"&&(s=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const r={type:t,data:e,options:n};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),s&&this.once("flush",s),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},e=()=>{this.off("upgrade",e),this.off("upgradeError",e),t()},n=()=>{this.once("upgrade",e),this.once("upgradeError",e)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():t()}):this.upgrading?n():t()),this}_onError(t){if(Hi.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Kl&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=jo.indexOf(this._offlineEventListener);n!==-1&&jo.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,e),this.writeBuffer=[],this._prevBufferLen=0}}}Hi.protocol=gp;class Av extends Hi{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let e=this.createTransport(t),n=!1;Hi.priorWebsocketSuccess=!1;const s=()=>{n||(e.send([{type:"ping",data:"probe"}]),e.once("packet",f=>{if(!n)if(f.type==="pong"&&f.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",e),!e)return;Hi.priorWebsocketSuccess=e.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(u(),this.setTransport(e),e.send([{type:"upgrade"}]),this.emitReserved("upgrade",e),e=null,this.upgrading=!1,this.flush())})}else{const h=new Error("probe error");h.transport=e.name,this.emitReserved("upgradeError",h)}}))};function r(){n||(n=!0,u(),e.close(),e=null)}const o=f=>{const h=new Error("probe error: "+f);h.transport=e.name,r(),this.emitReserved("upgradeError",h)};function a(){o("transport closed")}function l(){o("socket closed")}function c(f){e&&f.name!==e.name&&r()}const u=()=>{e.removeListener("open",s),e.removeListener("error",o),e.removeListener("close",a),this.off("close",l),this.off("upgrading",c)};e.once("open",s),e.once("error",o),e.once("close",a),this.once("close",l),this.once("upgrading",c),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{n||e.open()},200):e.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const e=[];for(let n=0;n<t.length;n++)~this.transports.indexOf(t[n])&&e.push(t[n]);return e}}let Cv=class extends Av{constructor(t,e={}){const n=typeof t=="object"?t:e;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(s=>Mv[s]).filter(s=>!!s)),super(t,n)}};function Rv(i,t="",e){let n=i;e=e||typeof location<"u"&&location,i==null&&(i=e.protocol+"//"+e.host),typeof i=="string"&&(i.charAt(0)==="/"&&(i.charAt(1)==="/"?i=e.protocol+i:i=e.host+i),/^(https?|wss?):\/\//.test(i)||(typeof e<"u"?i=e.protocol+"//"+i:i="https://"+i),n=jl(i)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const r=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+r+":"+n.port+t,n.href=n.protocol+"://"+r+(e&&e.port===n.port?"":":"+n.port),n}const Pv=typeof ArrayBuffer=="function",Lv=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i.buffer instanceof ArrayBuffer,Mp=Object.prototype.toString,Iv=typeof Blob=="function"||typeof Blob<"u"&&Mp.call(Blob)==="[object BlobConstructor]",Dv=typeof File=="function"||typeof File<"u"&&Mp.call(File)==="[object FileConstructor]";function lu(i){return Pv&&(i instanceof ArrayBuffer||Lv(i))||Iv&&i instanceof Blob||Dv&&i instanceof File}function Ko(i,t){if(!i||typeof i!="object")return!1;if(Array.isArray(i)){for(let e=0,n=i.length;e<n;e++)if(Ko(i[e]))return!0;return!1}if(lu(i))return!0;if(i.toJSON&&typeof i.toJSON=="function"&&arguments.length===1)return Ko(i.toJSON(),!0);for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e)&&Ko(i[e]))return!0;return!1}function Nv(i){const t=[],e=i.data,n=i;return n.data=Zl(e,t),n.attachments=t.length,{packet:n,buffers:t}}function Zl(i,t){if(!i)return i;if(lu(i)){const e={_placeholder:!0,num:t.length};return t.push(i),e}else if(Array.isArray(i)){const e=new Array(i.length);for(let n=0;n<i.length;n++)e[n]=Zl(i[n],t);return e}else if(typeof i=="object"&&!(i instanceof Date)){const e={};for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=Zl(i[n],t));return e}return i}function Uv(i,t){return i.data=Jl(i.data,t),delete i.attachments,i}function Jl(i,t){if(!i)return i;if(i&&i._placeholder===!0){if(typeof i.num=="number"&&i.num>=0&&i.num<t.length)return t[i.num];throw new Error("illegal attachments")}else if(Array.isArray(i))for(let e=0;e<i.length;e++)i[e]=Jl(i[e],t);else if(typeof i=="object")for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&(i[e]=Jl(i[e],t));return i}const Fv=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var ee;(function(i){i[i.CONNECT=0]="CONNECT",i[i.DISCONNECT=1]="DISCONNECT",i[i.EVENT=2]="EVENT",i[i.ACK=3]="ACK",i[i.CONNECT_ERROR=4]="CONNECT_ERROR",i[i.BINARY_EVENT=5]="BINARY_EVENT",i[i.BINARY_ACK=6]="BINARY_ACK"})(ee||(ee={}));class Ov{constructor(t){this.replacer=t}encode(t){return(t.type===ee.EVENT||t.type===ee.ACK)&&Ko(t)?this.encodeAsBinary({type:t.type===ee.EVENT?ee.BINARY_EVENT:ee.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let e=""+t.type;return(t.type===ee.BINARY_EVENT||t.type===ee.BINARY_ACK)&&(e+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(e+=t.nsp+","),t.id!=null&&(e+=t.id),t.data!=null&&(e+=JSON.stringify(t.data,this.replacer)),e}encodeAsBinary(t){const e=Nv(t),n=this.encodeAsString(e.packet),s=e.buffers;return s.unshift(n),s}}class cu extends Pe{constructor(t){super(),this.reviver=t}add(t){let e;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");e=this.decodeString(t);const n=e.type===ee.BINARY_EVENT;n||e.type===ee.BINARY_ACK?(e.type=n?ee.EVENT:ee.ACK,this.reconstructor=new Bv(e),e.attachments===0&&super.emitReserved("decoded",e)):super.emitReserved("decoded",e)}else if(lu(t)||t.base64)if(this.reconstructor)e=this.reconstructor.takeBinaryData(t),e&&(this.reconstructor=null,super.emitReserved("decoded",e));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let e=0;const n={type:Number(t.charAt(0))};if(ee[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===ee.BINARY_EVENT||n.type===ee.BINARY_ACK){const r=e+1;for(;t.charAt(++e)!=="-"&&e!=t.length;);const o=t.substring(r,e);if(o!=Number(o)||t.charAt(e)!=="-")throw new Error("Illegal attachments");n.attachments=Number(o)}if(t.charAt(e+1)==="/"){const r=e+1;for(;++e&&!(t.charAt(e)===","||e===t.length););n.nsp=t.substring(r,e)}else n.nsp="/";const s=t.charAt(e+1);if(s!==""&&Number(s)==s){const r=e+1;for(;++e;){const o=t.charAt(e);if(o==null||Number(o)!=o){--e;break}if(e===t.length)break}n.id=Number(t.substring(r,e+1))}if(t.charAt(++e)){const r=this.tryParse(t.substr(e));if(cu.isPayloadValid(n.type,r))n.data=r;else throw new Error("invalid payload")}return n}tryParse(t){try{return JSON.parse(t,this.reviver)}catch{return!1}}static isPayloadValid(t,e){switch(t){case ee.CONNECT:return Eh(e);case ee.DISCONNECT:return e===void 0;case ee.CONNECT_ERROR:return typeof e=="string"||Eh(e);case ee.EVENT:case ee.BINARY_EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&Fv.indexOf(e[0])===-1);case ee.ACK:case ee.BINARY_ACK:return Array.isArray(e)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Bv{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const e=Uv(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function Eh(i){return Object.prototype.toString.call(i)==="[object Object]"}const zv=Object.freeze(Object.defineProperty({__proto__:null,Decoder:cu,Encoder:Ov,get PacketType(){return ee}},Symbol.toStringTag,{value:"Module"}));function Cn(i,t,e){return i.on(t,e),function(){i.off(t,e)}}const kv=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Ep extends Pe{constructor(t,e,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=e,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[Cn(t,"open",this.onopen.bind(this)),Cn(t,"packet",this.onpacket.bind(this)),Cn(t,"error",this.onerror.bind(this)),Cn(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...e){var n,s,r;if(kv.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(e.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(e),this;const o={type:ee.EVENT,data:e};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof e[e.length-1]=="function"){const u=this.ids++,f=e.pop();this._registerAckCallback(u,f),o.id=u}const a=(s=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||s===void 0?void 0:s.writable,l=this.connected&&!(!((r=this.io.engine)===null||r===void 0)&&r._hasPingExpired());return this.flags.volatile&&!a||(l?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(t,e){var n;const s=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(s===void 0){this.acks[t]=e;return}const r=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===t&&this.sendBuffer.splice(a,1);e.call(this,new Error("operation has timed out"))},s),o=(...a)=>{this.io.clearTimeoutFn(r),e.apply(this,a)};o.withError=!0,this.acks[t]=o}emitWithAck(t,...e){return new Promise((n,s)=>{const r=(o,a)=>o?s(o):n(a);r.withError=!0,e.push(r),this.emit(t,...e)})}_addToQueue(t){let e;typeof t[t.length-1]=="function"&&(e=t.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((s,...r)=>(this._queue[0],s!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),e&&e(s)):(this._queue.shift(),e&&e(null,...r)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const e=this._queue[0];e.pending&&!t||(e.pending=!0,e.tryCount++,this.flags=e.flags,this.emit.apply(this,e.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:ee.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,e){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,e),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(n=>String(n.id)===t)){const n=this.acks[t];delete this.acks[t],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case ee.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case ee.EVENT:case ee.BINARY_EVENT:this.onevent(t);break;case ee.ACK:case ee.BINARY_ACK:this.onack(t);break;case ee.DISCONNECT:this.ondisconnect();break;case ee.CONNECT_ERROR:this.destroy();const n=new Error(t.data.message);n.data=t.data.data,this.emitReserved("connect_error",n);break}}onevent(t){const e=t.data||[];t.id!=null&&e.push(this.ack(t.id)),this.connected?this.emitEvent(e):this.receiveBuffer.push(Object.freeze(e))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const e=this._anyListeners.slice();for(const n of e)n.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const e=this;let n=!1;return function(...s){n||(n=!0,e.packet({type:ee.ACK,id:t,data:s}))}}onack(t){const e=this.acks[t.id];typeof e=="function"&&(delete this.acks[t.id],e.withError&&t.data.unshift(null),e.apply(this,t.data))}onconnect(t,e){this.id=t,this.recovered=e&&this._pid===e,this._pid=e,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:ee.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const e=this._anyListeners;for(let n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const e=this._anyOutgoingListeners;for(let n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const e=this._anyOutgoingListeners.slice();for(const n of e)n.apply(this,t.data)}}}function cr(i){i=i||{},this.ms=i.min||100,this.max=i.max||1e4,this.factor=i.factor||2,this.jitter=i.jitter>0&&i.jitter<=1?i.jitter:0,this.attempts=0}cr.prototype.duration=function(){var i=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),e=Math.floor(t*this.jitter*i);i=(Math.floor(t*10)&1)==0?i-e:i+e}return Math.min(i,this.max)|0};cr.prototype.reset=function(){this.attempts=0};cr.prototype.setMin=function(i){this.ms=i};cr.prototype.setMax=function(i){this.max=i};cr.prototype.setJitter=function(i){this.jitter=i};class Ql extends Pe{constructor(t,e){var n;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.opts=e,Ca(this,e),this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor((n=e.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new cr({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(e.timeout==null?2e4:e.timeout),this._readyState="closed",this.uri=t;const s=e.parser||zv;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=e.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var e;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(e=this.backoff)===null||e===void 0||e.setMin(t),this)}randomizationFactor(t){var e;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(e=this.backoff)===null||e===void 0||e.setJitter(t),this)}reconnectionDelayMax(t){var e;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(e=this.backoff)===null||e===void 0||e.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new Cv(this.uri,this.opts);const e=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const s=Cn(e,"open",function(){n.onopen(),t&&t()}),r=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),t?t(a):this.maybeReconnectOnOpen()},o=Cn(e,"error",r);if(this._timeout!==!1){const a=this._timeout,l=this.setTimeoutFn(()=>{s(),r(new Error("timeout")),e.close()},a);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(s),this.subs.push(o),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(Cn(t,"ping",this.onping.bind(this)),Cn(t,"data",this.ondata.bind(this)),Cn(t,"error",this.onerror.bind(this)),Cn(t,"close",this.onclose.bind(this)),Cn(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(e){this.onclose("parse error",e)}}ondecoded(t){Aa(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,e){let n=this.nsps[t];return n?this._autoConnect&&!n.active&&n.connect():(n=new Ep(this,t,e),this.nsps[t]=n),n}_destroy(t){const e=Object.keys(this.nsps);for(const n of e)if(this.nsps[n].active)return;this._close()}_packet(t){const e=this.encoder.encode(t);for(let n=0;n<e.length;n++)this.engine.write(e[n],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,e){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,e),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const e=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(s=>{s?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",s)):t.onreconnect()}))},e);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const yr={};function Zo(i,t){typeof i=="object"&&(t=i,i=void 0),t=t||{};const e=Rv(i,t.path||"/socket.io"),n=e.source,s=e.id,r=e.path,o=yr[s]&&r in yr[s].nsps,a=t.forceNew||t["force new connection"]||t.multiplex===!1||o;let l;return a?l=new Ql(n,t):(yr[s]||(yr[s]=new Ql(n,t)),l=yr[s]),e.query&&!t.query&&(t.query=e.queryKey),l.socket(e.path,t)}Object.assign(Zo,{Manager:Ql,Socket:Ep,io:Zo,connect:Zo});let Lt=null;const uu="yacht:session";function bh(i,t){sessionStorage.setItem(uu,JSON.stringify({code:i,playerId:t}))}function bp(){try{const i=sessionStorage.getItem(uu);return i?JSON.parse(i):null}catch{return null}}function Hv(){sessionStorage.removeItem(uu)}function ur(){const i=xs();function t(){Lt||(Lt=Zo(window.location.origin,{transports:["websocket","polling"]}),Lt.on("connect",()=>{i.mySocketId=Lt.id,i.connected=!0,console.log("[Socket] 연결됨:",Lt.id);const d=bp();d&&d.playerId!==Lt.id&&Lt.emit("room:rejoin",{code:d.code,playerId:d.playerId})}),Lt.on("disconnect",()=>{i.connected=!1,console.log("[Socket] 연결 끊김")}),Lt.on("room:created",({code:d,state:g})=>{i.roomCode=d,i.updateRoomState(g),bh(d,Lt.id)}),Lt.on("room:rejoined",({code:d,state:g})=>{i.roomCode=d,i.updateRoomState(g),bh(d,Lt.id),console.log("[Socket] 재접속 완료:",d)}),Lt.on("room:rejoin:error",({message:d})=>{console.warn("[Socket] 재접속 실패:",d),Hv(),i.reset()}),Lt.on("room:state",d=>{i.updateRoomState(d)}),Lt.on("game:started",d=>{i.updateRoomState(d)}),Lt.on("turn:begin",d=>{i.turnState.rollCount=0,i.turnState.dice=[0,0,0,0,0],i.turnState.kept=[!1,!1,!1,!1,!1],i.possibleScores={}}),Lt.on("dice:rolling",d=>{i.startRolling(d.playerId,d.rollCount,d.kept)}),Lt.on("dice:rolled",d=>{i.updateDiceRolled(d)}),Lt.on("dice:physics-stream",d=>{i.updatePhysicsStream(d)}),Lt.on("dice:kept",({kept:d})=>{i.updateKept(d)}),Lt.on("score:card",d=>{i.updateScoreCard(d)}),Lt.on("score:possible",({possible:d})=>{i.updatePossibleScores(d)}),Lt.on("score:updated",({playerId:d,category:g})=>{const _=i.players.find(m=>m.id===d);_&&(_.usedCategories[g]=!0)}),Lt.on("game:finished",({rankings:d})=>{i.setRankings(d)}),Lt.on("score:player",d=>{i.setViewingPlayerScore(d)}),Lt.on("error",({message:d})=>{console.error("[Server Error]",d)}))}function e(d){Lt!=null&&Lt.connected||t(),setTimeout(()=>{Lt==null||Lt.emit("room:create",{name:d})},300)}function n(d,g,_){Lt!=null&&Lt.connected||t(),setTimeout(()=>{Lt==null||Lt.emit("room:join",{name:d,code:g}),Lt==null||Lt.once("room:join:error",({message:m})=>{_(m)})},300)}function s(){Lt==null||Lt.emit("game:start")}function r(){Lt==null||Lt.emit("dice:roll")}function o(d){Lt==null||Lt.emit("dice:result",{values:d})}function a(d){Lt==null||Lt.volatile.emit("dice:physics-stream",d)}function l(d){Lt==null||Lt.emit("dice:keep",{kept:d})}function c(d){Lt==null||Lt.emit("score:select",{category:d})}function u(d){Lt==null||Lt.emit("score:request",{playerId:d})}function f(){Lt==null||Lt.emit("game:restart")}function h(){Lt==null||Lt.disconnect(),Lt=null}return{connect:t,createRoom:e,joinRoom:n,startGame:s,rollDice:r,submitDiceResult:o,sendPhysicsStream:a,setKept:l,selectCategory:c,requestPlayerScore:u,restartGame:f,disconnect:h}}const Vv={class:"lobby"},Gv={class:"lobby-container"},Wv={key:0,class:"mode-section"},qv={key:1,class:"join-section"},Xv={class:"input-group"},$v=["disabled"],Yv={key:2,class:"join-section"},jv={class:"input-group"},Kv={key:0,class:"error-text"},Zv=["disabled"],Jv={key:3,class:"waiting-section"},Qv={class:"room-code"},t0={class:"players-panel"},e0={class:"panel-title"},n0={class:"player-count"},i0={class:"player-list"},s0={class:"player-name"},r0={key:0,class:"host-badge"},o0={key:1,class:"me-badge"},a0={class:"actions"},l0=["disabled"],c0={key:1,class:"waiting-text"},u0={class:"connection-info"},h0={class:"address"},f0={computed:{window(){return window}}},d0=vs({...f0,__name:"LobbyView",setup(i){const t=xs(),e=ur(),n=Ee(""),s=Ee(""),r=Ee(""),o=Ee(""),a=Ee(!1),l=5,c=Ge(()=>t.isHost&&t.players.length>=1);function u(){s.value.trim()&&(e.connect(),e.createRoom(s.value.trim()),a.value=!0)}function f(){!s.value.trim()||!r.value.trim()||(o.value="",e.connect(),e.joinRoom(s.value.trim(),r.value.trim(),g=>{o.value=g,a.value=!1}),a.value=!0)}function h(){e.startGame()}function d(){navigator.clipboard.writeText(t.roomCode).catch(()=>{})}return io(()=>{t.connected&&t.roomCode&&(a.value=!0)}),(g,_)=>(Tt(),It("div",Vv,[it("div",Gv,[_[13]||(_[13]=it("div",{class:"lobby-header"},[it("h1",{class:"title"},"YACHT"),it("p",{class:"subtitle"},"Dice Game")],-1)),!a.value&&n.value===""?(Tt(),It("div",Wv,[it("button",{class:"btn btn-primary btn-lg",onClick:_[0]||(_[0]=m=>n.value="create")}," 방 만들기 "),it("button",{class:"btn btn-secondary btn-lg",onClick:_[1]||(_[1]=m=>n.value="join")}," 방 코드로 참가 ")])):!a.value&&n.value==="create"?(Tt(),It("div",qv,[it("div",Xv,[ka(it("input",{"onUpdate:modelValue":_[2]||(_[2]=m=>s.value=m),class:"name-input",placeholder:"닉네임을 입력하세요",maxlength:"12",onKeyup:mh(u,["enter"]),autofocus:""},null,544),[[$a,s.value]]),it("button",{class:"btn btn-primary btn-lg",disabled:!s.value.trim(),onClick:u}," 방 만들기 ",8,$v),it("button",{class:"btn btn-ghost",onClick:_[3]||(_[3]=m=>n.value="")},"← 뒤로")])])):!a.value&&n.value==="join"?(Tt(),It("div",Yv,[it("div",jv,[ka(it("input",{"onUpdate:modelValue":_[4]||(_[4]=m=>s.value=m),class:"name-input",placeholder:"닉네임을 입력하세요",maxlength:"12",autofocus:""},null,512),[[$a,s.value]]),ka(it("input",{"onUpdate:modelValue":_[5]||(_[5]=m=>r.value=m),class:"name-input code-input",placeholder:"방 코드 (예: ABCD)",maxlength:"4",onKeyup:mh(f,["enter"])},null,544),[[$a,r.value]]),o.value?(Tt(),It("p",Kv,Yt(o.value),1)):fn("",!0),it("button",{class:"btn btn-primary btn-lg",disabled:!s.value.trim()||!r.value.trim(),onClick:f}," 참가하기 ",8,Zv),it("button",{class:"btn btn-ghost",onClick:_[6]||(_[6]=m=>n.value="")},"← 뒤로")])])):(Tt(),It("div",Jv,[it("div",{class:"room-code-panel",onClick:d,title:"클릭해서 복사"},[_[7]||(_[7]=it("span",{class:"room-code-label"},"방 코드",-1)),it("span",Qv,Yt(Bt(t).roomCode),1),_[8]||(_[8]=it("span",{class:"copy-hint"},"클릭해서 복사",-1))]),it("div",t0,[it("h3",e0,[_[9]||(_[9]=sn(" 대기실 ",-1)),it("span",n0,Yt(Bt(t).players.length)+" / "+Yt(l),1)]),it("div",i0,[(Tt(!0),It(oe,null,Fe(Bt(t).players,m=>(Tt(),It("div",{key:m.id,class:"player-card"},[it("span",{class:"player-dot",style:cn({background:m.color})},null,4),it("span",s0,[sn(Yt(m.name)+" ",1),m.isHost?(Tt(),It("span",r0,"HOST")):fn("",!0),m.id===Bt(t).mySocketId?(Tt(),It("span",o0,"ME")):fn("",!0)])]))),128)),(Tt(!0),It(oe,null,Fe(l-Bt(t).players.length,m=>(Tt(),It("div",{key:"empty-"+m,class:"player-card empty"},[..._[10]||(_[10]=[it("span",{class:"player-dot empty-dot"},null,-1),it("span",{class:"player-name empty-name"},"대기 중...",-1)])]))),128))])]),it("div",a0,[Bt(t).isHost?(Tt(),It("button",{key:0,class:"btn btn-success btn-lg start-btn",disabled:!c.value,onClick:h}," 게임 시작 ",8,l0)):(Tt(),It("p",c0," 호스트가 게임을 시작할 때까지 대기 중... "))]),it("div",u0,[it("p",null,[_[11]||(_[11]=sn("이 주소로 접속한 뒤 방 코드 ",-1)),it("strong",null,Yt(Bt(t).roomCode),1),_[12]||(_[12]=sn("를 입력하세요",-1))]),it("code",h0,Yt(g.window.location.origin),1)])]))]),_[14]||(_[14]=it("div",{class:"bg-dice dice-1"},"⚀",-1)),_[15]||(_[15]=it("div",{class:"bg-dice dice-2"},"⚅",-1)),_[16]||(_[16]=it("div",{class:"bg-dice dice-3"},"⚃",-1))]))}}),hr=(i,t)=>{const e=i.__vccOpts||i;for(const[n,s]of t)e[n]=s;return e},p0=hr(d0,[["__scopeId","data-v-2fc56986"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hu="170",m0=0,wh=1,g0=2,wp=1,Tp=2,hi=3,$i=0,rn=1,Wn=2,Vi=0,Ys=1,Th=2,Ah=3,Ch=4,_0=5,cs=100,v0=101,x0=102,y0=103,S0=104,M0=200,E0=201,b0=202,w0=203,tc=204,ec=205,T0=206,A0=207,C0=208,R0=209,P0=210,L0=211,I0=212,D0=213,N0=214,nc=0,ic=1,sc=2,Qs=3,rc=4,oc=5,ac=6,lc=7,Ap=0,U0=1,F0=2,Gi=0,O0=1,B0=2,z0=3,Cp=4,k0=5,H0=6,V0=7,Rp=300,tr=301,er=302,cc=303,uc=304,Ra=306,hc=1e3,fs=1001,fc=1002,Nn=1003,G0=1004,vo=1005,qn=1006,Ja=1007,ds=1008,Ei=1009,Pp=1010,Lp=1011,to=1012,fu=1013,gs=1014,gi=1015,ro=1016,du=1017,pu=1018,nr=1020,Ip=35902,Dp=1021,Np=1022,Pn=1023,Up=1024,Fp=1025,js=1026,ir=1027,Op=1028,mu=1029,Bp=1030,gu=1031,_u=1033,Jo=33776,Qo=33777,ta=33778,ea=33779,dc=35840,pc=35841,mc=35842,gc=35843,_c=36196,vc=37492,xc=37496,yc=37808,Sc=37809,Mc=37810,Ec=37811,bc=37812,wc=37813,Tc=37814,Ac=37815,Cc=37816,Rc=37817,Pc=37818,Lc=37819,Ic=37820,Dc=37821,na=36492,Nc=36494,Uc=36495,zp=36283,Fc=36284,Oc=36285,Bc=36286,W0=3200,q0=3201,kp=0,X0=1,Bi="",xn="srgb",fr="srgb-linear",Pa="linear",de="srgb",Es=7680,Rh=519,$0=512,Y0=513,j0=514,Hp=515,K0=516,Z0=517,J0=518,Q0=519,Ph=35044,Lh="300 es",_i=2e3,ha=2001;class dr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qa=Math.PI/180,zc=180/Math.PI;function oo(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function Ke(i,t,e){return Math.max(t,Math.min(e,i))}function tx(i,t){return(i%t+t)%t}function tl(i,t,e){return(1-e)*i+e*t}function Sr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function tn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Vt{constructor(t=0,e=0){Vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(t,e,n,s,r,o,a,l,c){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],v=s[1],b=s[4],x=s[7],D=s[2],L=s[5],P=s[8];return r[0]=o*_+a*v+l*D,r[3]=o*m+a*b+l*L,r[6]=o*p+a*x+l*P,r[1]=c*_+u*v+f*D,r[4]=c*m+u*b+f*L,r[7]=c*p+u*x+f*P,r[2]=h*_+d*v+g*D,r[5]=h*m+d*b+g*L,r[8]=h*p+d*x+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,g=e*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(s*c-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=h*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(el.makeScale(t,e)),this}rotate(t){return this.premultiply(el.makeRotation(-t)),this}translate(t,e){return this.premultiply(el.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const el=new Qt;function Vp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function fa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ex(){const i=fa("canvas");return i.style.display="block",i}const Ih={};function Ur(i){i in Ih||(Ih[i]=!0,console.warn(i))}function nx(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ix(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function sx(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ie={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(i.r=xi(i.r),i.g=xi(i.g),i.b=xi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(i.r=Ks(i.r),i.g=Ks(i.g),i.b=Ks(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Bi?Pa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ks(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Dh=[.64,.33,.3,.6,.15,.06],Nh=[.2126,.7152,.0722],Uh=[.3127,.329],Fh=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oh=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[fr]:{primaries:Dh,whitePoint:Uh,transfer:Pa,toXYZ:Fh,fromXYZ:Oh,luminanceCoefficients:Nh,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:Dh,whitePoint:Uh,transfer:de,toXYZ:Fh,fromXYZ:Oh,luminanceCoefficients:Nh,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}});let bs;class rx{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{bs===void 0&&(bs=fa("canvas")),bs.width=t.width,bs.height=t.height;const n=bs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=bs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=fa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xi(e[n]/255)*255):e[n]=xi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ox=0;class Gp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=oo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nl(s[o].image)):r.push(nl(s[o]))}else r=nl(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function nl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rx.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ax=0;class Je extends dr{constructor(t=Je.DEFAULT_IMAGE,e=Je.DEFAULT_MAPPING,n=fs,s=fs,r=qn,o=ds,a=Pn,l=Ei,c=Je.DEFAULT_ANISOTROPY,u=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=oo(),this.name="",this.source=new Gp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hc:t.x=t.x-Math.floor(t.x);break;case fs:t.x=t.x<0?0:1;break;case fc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hc:t.y=t.y-Math.floor(t.y);break;case fs:t.y=t.y<0?0:1;break;case fc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=Rp;Je.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,s=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,x=(d+1)/2,D=(p+1)/2,L=(u+h)/4,P=(f+_)/4,N=(g+m)/4;return b>x&&b>D?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=L/n,r=P/n):x>D?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=L/s,r=N/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=P/r,s=N/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-_)/v,this.z=(h-u)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lx extends dr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Je(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Gp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _s extends lx{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Wp extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class cx extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Wi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3];const h=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*_,v=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const D=Math.sqrt(b),L=Math.atan2(D,p*v);m=Math.sin(m*L)/D,a=Math.sin(a*L)/D}const x=a*v;if(l=l*m+h*x,c=c*m+d*x,u=u*m+g*x,f=f*m+_*x,m===1-a){const D=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=D,c*=D,u*=D,f*=D}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*f+l*d-c*h,t[e+1]=l*g+u*h+c*f-a*d,t[e+2]=c*g+u*d+a*h-l*f,t[e+3]=u*g-a*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(r/2),h=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ke(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class ${constructor(t=0,e=0,n=0){$.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*u,this.y=n+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return il.copy(this).projectOnVector(t),this.sub(il)}reflect(t){return this.sub(il.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const il=new $,Bh=new Wi;class ao{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,bn):bn.fromBufferAttribute(r,o),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xo.copy(n.boundingBox)),xo.applyMatrix4(t.matrixWorld),this.union(xo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mr),yo.subVectors(this.max,Mr),ws.subVectors(t.a,Mr),Ts.subVectors(t.b,Mr),As.subVectors(t.c,Mr),Ci.subVectors(Ts,ws),Ri.subVectors(As,Ts),Qi.subVectors(ws,As);let e=[0,-Ci.z,Ci.y,0,-Ri.z,Ri.y,0,-Qi.z,Qi.y,Ci.z,0,-Ci.x,Ri.z,0,-Ri.x,Qi.z,0,-Qi.x,-Ci.y,Ci.x,0,-Ri.y,Ri.x,0,-Qi.y,Qi.x,0];return!sl(e,ws,Ts,As,yo)||(e=[1,0,0,0,1,0,0,0,1],!sl(e,ws,Ts,As,yo))?!1:(So.crossVectors(Ci,Ri),e=[So.x,So.y,So.z],sl(e,ws,Ts,As,yo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ni=[new $,new $,new $,new $,new $,new $,new $,new $],bn=new $,xo=new ao,ws=new $,Ts=new $,As=new $,Ci=new $,Ri=new $,Qi=new $,Mr=new $,yo=new $,So=new $,ts=new $;function sl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ts.fromArray(i,r);const a=s.x*Math.abs(ts.x)+s.y*Math.abs(ts.y)+s.z*Math.abs(ts.z),l=t.dot(ts),c=e.dot(ts),u=n.dot(ts);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const ux=new ao,Er=new $,rl=new $;class vu{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ux.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Er.subVectors(t,this.center);const e=Er.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Er,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Er.copy(t.center).add(rl)),this.expandByPoint(Er.copy(t.center).sub(rl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new $,ol=new $,Mo=new $,Pi=new $,al=new $,Eo=new $,ll=new $;let qp=class{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ol.copy(t).add(e).multiplyScalar(.5),Mo.copy(e).sub(t).normalize(),Pi.copy(this.origin).sub(ol);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Mo),a=Pi.dot(this.direction),l=-Pi.dot(Mo),c=Pi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ol).addScaledVector(Mo,h),d}intersectSphere(t,e){ii.subVectors(t.center,this.origin);const n=ii.dot(this.direction),s=ii.dot(ii)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,n,s,r){al.subVectors(e,t),Eo.subVectors(n,t),ll.crossVectors(al,Eo);let o=this.direction.dot(ll),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,t);const l=a*this.direction.dot(Eo.crossVectors(Pi,Eo));if(l<0)return null;const c=a*this.direction.dot(al.cross(Pi));if(c<0||l+c>o)return null;const u=-a*Pi.dot(ll);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class be{constructor(t,e,n,s,r,o,a,l,c,u,f,h,d,g,_,m){be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,f,h,d,g,_,m)}set(t,e,n,s,r,o,a,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new be().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Cs.setFromMatrixColumn(t,0).length(),r=1/Cs.setFromMatrixColumn(t,1).length(),o=1/Cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=h-_*c,e[9]=-a*l,e[2]=_-h*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;e[0]=h+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;e[0]=h-_*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=g*c-d,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*f+g,e[10]=h-_*f}else if(t.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+_,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hx,t,fx)}lookAt(t,e,n){const s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),Li.crossVectors(n,an),Li.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Li.crossVectors(n,an)),Li.normalize(),bo.crossVectors(an,Li),s[0]=Li.x,s[4]=bo.x,s[8]=an.x,s[1]=Li.y,s[5]=bo.y,s[9]=an.y,s[2]=Li.z,s[6]=bo.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],b=n[7],x=n[11],D=n[15],L=s[0],P=s[4],N=s[8],w=s[12],S=s[1],U=s[5],Y=s[9],O=s[13],W=s[2],V=s[6],B=s[10],K=s[14],H=s[3],lt=s[7],_t=s[11],ct=s[15];return r[0]=o*L+a*S+l*W+c*H,r[4]=o*P+a*U+l*V+c*lt,r[8]=o*N+a*Y+l*B+c*_t,r[12]=o*w+a*O+l*K+c*ct,r[1]=u*L+f*S+h*W+d*H,r[5]=u*P+f*U+h*V+d*lt,r[9]=u*N+f*Y+h*B+d*_t,r[13]=u*w+f*O+h*K+d*ct,r[2]=g*L+_*S+m*W+p*H,r[6]=g*P+_*U+m*V+p*lt,r[10]=g*N+_*Y+m*B+p*_t,r[14]=g*w+_*O+m*K+p*ct,r[3]=v*L+b*S+x*W+D*H,r[7]=v*P+b*U+x*V+D*lt,r[11]=v*N+b*Y+x*B+D*_t,r[15]=v*w+b*O+x*K+D*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*f-s*c*f-r*a*h+n*c*h+s*a*d-n*l*d)+_*(+e*l*d-e*c*h+r*o*h-s*o*d+s*c*u-r*l*u)+m*(+e*c*f-e*a*d-r*o*f+n*o*d+r*a*u-n*c*u)+p*(-s*a*u-e*l*f+e*a*h+s*o*f-n*o*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],v=f*m*c-_*h*c+_*l*d-a*m*d-f*l*p+a*h*p,b=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,x=u*_*c-g*f*c+g*a*d-o*_*d-u*a*p+o*f*p,D=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,L=e*v+n*b+s*x+r*D;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return t[0]=v*P,t[1]=(_*h*r-f*m*r-_*s*d+n*m*d+f*s*p-n*h*p)*P,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*P,t[3]=(f*l*r-a*h*r-f*s*c+n*h*c+a*s*d-n*l*d)*P,t[4]=b*P,t[5]=(u*m*r-g*h*r+g*s*d-e*m*d-u*s*p+e*h*p)*P,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*P,t[7]=(o*h*r-u*l*r+u*s*c-e*h*c-o*s*d+e*l*d)*P,t[8]=x*P,t[9]=(g*f*r-u*_*r-g*n*d+e*_*d+u*n*p-e*f*p)*P,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*P,t[11]=(u*a*r-o*f*r-u*n*c+e*f*c+o*n*d-e*a*d)*P,t[12]=D*P,t[13]=(u*_*s-g*f*s+g*n*h-e*_*h-u*n*m+e*f*m)*P,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*P,t[15]=(o*f*s-u*a*s+u*n*l-e*f*l-o*n*h+e*a*h)*P,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,g=r*f,_=o*u,m=o*f,p=a*f,v=l*c,b=l*u,x=l*f,D=n.x,L=n.y,P=n.z;return s[0]=(1-(_+p))*D,s[1]=(d+x)*D,s[2]=(g-b)*D,s[3]=0,s[4]=(d-x)*L,s[5]=(1-(h+p))*L,s[6]=(m+v)*L,s[7]=0,s[8]=(g+b)*P,s[9]=(m-v)*P,s[10]=(1-(h+_))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Cs.set(s[0],s[1],s[2]).length();const o=Cs.set(s[4],s[5],s[6]).length(),a=Cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],wn.copy(this);const c=1/r,u=1/o,f=1/a;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=f,wn.elements[9]*=f,wn.elements[10]*=f,e.setFromRotationMatrix(wn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=_i){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),h=(n+s)/(n-s);let d,g;if(a===_i)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ha)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=_i){const l=this.elements,c=1/(e-t),u=1/(n-s),f=1/(o-r),h=(e+t)*c,d=(n+s)*u;let g,_;if(a===_i)g=(o+r)*f,_=-2*f;else if(a===ha)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Cs=new $,wn=new be,hx=new $(0,0,0),fx=new $(1,1,1),Li=new $,bo=new $,an=new $,zh=new be,kh=new Wi;class qe{constructor(t=0,e=0,n=0,s=qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kh.setFromEuler(this),this.setFromQuaternion(kh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qe.DEFAULT_ORDER="XYZ";class xu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let dx=0;const Hh=new $,Rs=new Wi,si=new be,wo=new $,br=new $,px=new $,mx=new Wi,Vh=new $(1,0,0),Gh=new $(0,1,0),Wh=new $(0,0,1),qh={type:"added"},gx={type:"removed"},Ps={type:"childadded",child:null},cl={type:"childremoved",child:null};class Xe extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xe.DEFAULT_UP.clone();const t=new $,e=new qe,n=new Wi,s=new $(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new be},normalMatrix:{value:new Qt}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=Xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Rs.setFromAxisAngle(t,e),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(t,e){return Rs.setFromAxisAngle(t,e),this.quaternion.premultiply(Rs),this}rotateX(t){return this.rotateOnAxis(Vh,t)}rotateY(t){return this.rotateOnAxis(Gh,t)}rotateZ(t){return this.rotateOnAxis(Wh,t)}translateOnAxis(t,e){return Hh.copy(t).applyQuaternion(this.quaternion),this.position.add(Hh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vh,t)}translateY(t){return this.translateOnAxis(Gh,t)}translateZ(t){return this.translateOnAxis(Wh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wo.copy(t):wo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(br,wo,this.up):si.lookAt(wo,br,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),Rs.setFromRotationMatrix(si),this.quaternion.premultiply(Rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qh),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gx),cl.child=t,this.dispatchEvent(cl),cl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qh),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,t,px),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,mx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Xe.DEFAULT_UP=new $(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new $,ri=new $,ul=new $,oi=new $,Ls=new $,Is=new $,Xh=new $,hl=new $,fl=new $,dl=new $,pl=new pe,ml=new pe,gl=new pe;class Rn{constructor(t=new $,e=new $,n=new $){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Tn.subVectors(t,e),s.cross(Tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Tn.subVectors(s,e),ri.subVectors(n,e),ul.subVectors(t,e);const o=Tn.dot(Tn),a=Tn.dot(ri),l=Tn.dot(ul),c=ri.dot(ri),u=ri.dot(ul),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return pl.setScalar(0),ml.setScalar(0),gl.setScalar(0),pl.fromBufferAttribute(t,e),ml.fromBufferAttribute(t,n),gl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(pl,r.x),o.addScaledVector(ml,r.y),o.addScaledVector(gl,r.z),o}static isFrontFacing(t,e,n,s){return Tn.subVectors(n,e),ri.subVectors(t,e),Tn.cross(ri).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Tn.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Rn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ls.subVectors(s,n),Is.subVectors(r,n),hl.subVectors(t,n);const l=Ls.dot(hl),c=Is.dot(hl);if(l<=0&&c<=0)return e.copy(n);fl.subVectors(t,s);const u=Ls.dot(fl),f=Is.dot(fl);if(u>=0&&f<=u)return e.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Ls,o);dl.subVectors(t,r);const d=Ls.dot(dl),g=Is.dot(dl);if(g>=0&&d<=g)return e.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Is,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Xh.subVectors(r,s),a=(f-u)/(f-u+(d-g)),e.copy(s).addScaledVector(Xh,a);const p=1/(m+_+h);return o=_*p,a=h*p,e.copy(n).addScaledVector(Ls,o).addScaledVector(Is,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},To={h:0,s:0,l:0};function _l(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ne{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=tx(t,1),e=Ke(e,0,1),n=Ke(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=_l(o,r,t+1/3),this.g=_l(o,r,t),this.b=_l(o,r,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=xn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xn){const n=Xp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xi(t.r),this.g=xi(t.g),this.b=xi(t.b),this}copyLinearToSRGB(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xn){return ie.fromWorkingColorSpace(He.copy(this),t),Math.round(Ke(He.r*255,0,255))*65536+Math.round(Ke(He.g*255,0,255))*256+Math.round(Ke(He.b*255,0,255))}getHexString(t=xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(He.copy(this),e);const n=He.r,s=He.g,r=He.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=xn){ie.fromWorkingColorSpace(He.copy(this),t);const e=He.r,n=He.g,s=He.b;return t!==xn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ii),this.setHSL(Ii.h+t,Ii.s+e,Ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ii),t.getHSL(To);const n=tl(Ii.h,To.h,e),s=tl(Ii.s,To.s,e),r=tl(Ii.l,To.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new ne;ne.NAMES=Xp;let _x=0,lo=class extends dr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=oo(),this.name="",this.blending=Ys,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tc,this.blendDst=ec,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(n.blending=this.blending),this.side!==$i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==tc&&(n.blendSrc=this.blendSrc),this.blendDst!==ec&&(n.blendDst=this.blendDst),this.blendEquation!==cs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}};class $p extends lo{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.combine=Ap,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new $,Ao=new Vt;class Yn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ph,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ao.fromBufferAttribute(this,e),Ao.applyMatrix3(t),this.setXY(e,Ao.x,Ao.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Sr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=tn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Sr(e,this.array)),e}setX(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Sr(e,this.array)),e}setY(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Sr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Sr(e,this.array)),e}setW(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),s=tn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),s=tn(s,this.array),r=tn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ph&&(t.usage=this.usage),t}}class Yp extends Yn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class jp extends Yn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class pn extends Yn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let vx=0;const _n=new be,vl=new Xe,Ds=new $,ln=new ao,wr=new ao,Ue=new $;class wi extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vx++}),this.uuid=oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vp(t)?jp:Yp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return vl.lookAt(t),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pn(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ao);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vu);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];wr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(ln.min,wr.min),ln.expandByPoint(Ue),Ue.addVectors(ln.max,wr.max),ln.expandByPoint(Ue)):(ln.expandByPoint(wr.min),ln.expandByPoint(wr.max))}ln.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ue));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ue.fromBufferAttribute(a,c),l&&(Ds.fromBufferAttribute(t,c),Ue.add(Ds)),s=Math.max(s,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<n.count;N++)a[N]=new $,l[N]=new $;const c=new $,u=new $,f=new $,h=new Vt,d=new Vt,g=new Vt,_=new $,m=new $;function p(N,w,S){c.fromBufferAttribute(n,N),u.fromBufferAttribute(n,w),f.fromBufferAttribute(n,S),h.fromBufferAttribute(r,N),d.fromBufferAttribute(r,w),g.fromBufferAttribute(r,S),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const U=1/(d.x*g.y-g.x*d.y);isFinite(U)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(U),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(U),a[N].add(_),a[w].add(_),a[S].add(_),l[N].add(m),l[w].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let N=0,w=v.length;N<w;++N){const S=v[N],U=S.start,Y=S.count;for(let O=U,W=U+Y;O<W;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const b=new $,x=new $,D=new $,L=new $;function P(N){D.fromBufferAttribute(s,N),L.copy(D);const w=a[N];b.copy(w),b.sub(D.multiplyScalar(D.dot(w))).normalize(),x.crossVectors(L,w);const U=x.dot(l[N])<0?-1:1;o.setXYZW(N,b.x,b.y,b.z,U)}for(let N=0,w=v.length;N<w;++N){const S=v[N],U=S.start,Y=S.count;for(let O=U,W=U+Y;O<W;O+=3)P(t.getX(O+0)),P(t.getX(O+1)),P(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new $,r=new $,o=new $,a=new $,l=new $,c=new $,u=new $,f=new $;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Yn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new wi,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $h=new be,es=new qp,Co=new vu,Yh=new $,Ro=new $,Po=new $,Lo=new $,xl=new $,Io=new $,jh=new $,Do=new $;class Oe extends Xe{constructor(t=new wi,e=new $p){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Io.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(xl.fromBufferAttribute(f,t),o?Io.addScaledVector(xl,u):Io.addScaledVector(xl.sub(e),u))}e.add(Io)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(r),es.copy(t.ray).recast(t.near),!(Co.containsPoint(es.origin)===!1&&(es.intersectSphere(Co,Yh)===null||es.origin.distanceToSquared(Yh)>(t.far-t.near)**2))&&($h.copy(r).invert(),es.copy(t.ray).applyMatrix4($h),!(n.boundingBox!==null&&es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,es)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),b=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,D=b;x<D;x+=3){const L=a.getX(x),P=a.getX(x+1),N=a.getX(x+2);s=No(this,p,t,n,c,u,f,L,P,N),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),b=a.getX(m+1),x=a.getX(m+2);s=No(this,o,t,n,c,u,f,v,b,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,D=b;x<D;x+=3){const L=x,P=x+1,N=x+2;s=No(this,p,t,n,c,u,f,L,P,N),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=m,b=m+1,x=m+2;s=No(this,o,t,n,c,u,f,v,b,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function xx(i,t,e,n,s,r,o,a){let l;if(t.side===rn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===$i,a),l===null)return null;Do.copy(a),Do.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Do);return c<e.near||c>e.far?null:{distance:c,point:Do.clone(),object:i}}function No(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ro),i.getVertexPosition(l,Po),i.getVertexPosition(c,Lo);const u=xx(i,t,e,n,Ro,Po,Lo,jh);if(u){const f=new $;Rn.getBarycoord(jh,Ro,Po,Lo,f),s&&(u.uv=Rn.getInterpolatedAttribute(s,a,l,c,f,new Vt)),r&&(u.uv1=Rn.getInterpolatedAttribute(r,a,l,c,f,new Vt)),o&&(u.normal=Rn.getInterpolatedAttribute(o,a,l,c,f,new $),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new $,materialIndex:0};Rn.getNormal(Ro,Po,Lo,h.normal),u.face=h,u.barycoord=f}return u}class pr extends wi{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new pn(c,3)),this.setAttribute("normal",new pn(u,3)),this.setAttribute("uv",new pn(f,2));function g(_,m,p,v,b,x,D,L,P,N,w){const S=x/P,U=D/N,Y=x/2,O=D/2,W=L/2,V=P+1,B=N+1;let K=0,H=0;const lt=new $;for(let _t=0;_t<B;_t++){const ct=_t*U-O;for(let mt=0;mt<V;mt++){const Ht=mt*S-Y;lt[_]=Ht*v,lt[m]=ct*b,lt[p]=W,c.push(lt.x,lt.y,lt.z),lt[_]=0,lt[m]=0,lt[p]=L>0?1:-1,u.push(lt.x,lt.y,lt.z),f.push(mt/P),f.push(1-_t/N),K+=1}}for(let _t=0;_t<N;_t++)for(let ct=0;ct<P;ct++){const mt=h+ct+V*_t,Ht=h+ct+V*(_t+1),at=h+(ct+1)+V*(_t+1),gt=h+(ct+1)+V*_t;l.push(mt,Ht,gt),l.push(Ht,at,gt),H+=6}a.addGroup(d,H,w),d+=H,h+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function sr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ye(i){const t={};for(let e=0;e<i.length;e++){const n=sr(i[e]);for(const s in n)t[s]=n[s]}return t}function yx(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Kp(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const Sx={clone:sr,merge:Ye};var Mx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ex=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends lo{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mx,this.fragmentShader=Ex,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=sr(t.uniforms),this.uniformsGroups=yx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Zp extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=_i}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Di=new $,Kh=new Vt,Zh=new Vt;class un extends Zp{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zc*2*Math.atan(Math.tan(Qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Di.x,Di.y).multiplyScalar(-t/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-t/Di.z)}getViewSize(t,e){return this.getViewBounds(t,Kh,Zh),e.subVectors(Zh,Kh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Qa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ns=-90,Us=1;class bx extends Xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un(Ns,Us,t,e);s.layers=this.layers,this.add(s);const r=new un(Ns,Us,t,e);r.layers=this.layers,this.add(r);const o=new un(Ns,Us,t,e);o.layers=this.layers,this.add(o);const a=new un(Ns,Us,t,e);a.layers=this.layers,this.add(a);const l=new un(Ns,Us,t,e);l.layers=this.layers,this.add(l);const c=new un(Ns,Us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===_i)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Jp extends Je{constructor(t,e,n,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:tr,super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wx extends _s{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Jp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:qn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pr(5,5,5),r=new Yi({name:"CubemapFromEquirect",uniforms:sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Vi});r.uniforms.tEquirect.value=e;const o=new Oe(s,r),a=e.minFilter;return e.minFilter===ds&&(e.minFilter=qn),new bx(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const yl=new $,Tx=new $,Ax=new Qt;class as{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=yl.subVectors(n,e).cross(Tx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(yl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ax.getNormalMatrix(t),s=this.coplanarPoint(yl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new vu,Uo=new $;class yu{constructor(t=new as,e=new as,n=new as,s=new as,r=new as,o=new as){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_i){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],v=s[13],b=s[14],x=s[15];if(n[0].setComponents(l-r,h-c,m-d,x-p).normalize(),n[1].setComponents(l+r,h+c,m+d,x+p).normalize(),n[2].setComponents(l+o,h+u,m+g,x+v).normalize(),n[3].setComponents(l-o,h-u,m-g,x-v).normalize(),n[4].setComponents(l-a,h-f,m-_,x-b).normalize(),e===_i)n[5].setComponents(l+a,h+f,m+_,x+b).normalize();else if(e===ha)n[5].setComponents(a,f,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(t){return ns.center.set(0,0,0),ns.radius=.7071067811865476,ns.applyMatrix4(t.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Uo.x=s.normal.x>0?t.max.x:t.min.x,Uo.y=s.normal.y>0?t.max.y:t.min.y,Uo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Uo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qp(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Cx(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class La extends wi{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=t/a,h=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const v=p*h-o;for(let b=0;b<c;b++){const x=b*f-r;g.push(x,-v,0),_.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const b=v+c*p,x=v+c*(p+1),D=v+1+c*(p+1),L=v+1+c*p;d.push(b,x,L),d.push(x,D,L)}this.setIndex(d),this.setAttribute("position",new pn(g,3)),this.setAttribute("normal",new pn(_,3)),this.setAttribute("uv",new pn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new La(t.width,t.height,t.widthSegments,t.heightSegments)}}var Rx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Px=`#ifdef USE_ALPHAHASH
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
#endif`,Lx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ix=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ux=`#ifdef USE_AOMAP
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
#endif`,Fx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ox=`#ifdef USE_BATCHING
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
#endif`,Bx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vx=`#ifdef USE_IRIDESCENCE
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
#endif`,Gx=`#ifdef USE_BUMPMAP
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
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Jx=`#define PI 3.141592653589793
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
} // validated`,Qx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ty=`vec3 transformedNormal = objectNormal;
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
#endif`,ey=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ny=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ry="gl_FragColor = linearToOutputTexel( gl_FragColor );",oy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ay=`#ifdef USE_ENVMAP
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
#endif`,ly=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cy=`#ifdef USE_ENVMAP
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
#endif`,uy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hy=`#ifdef USE_ENVMAP
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
#endif`,fy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,py=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,my=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gy=`#ifdef USE_GRADIENTMAP
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
}`,_y=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yy=`uniform bool receiveShadow;
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
#endif`,Sy=`#ifdef USE_ENVMAP
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
#endif`,My=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,by=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ty=`PhysicalMaterial material;
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
#endif`,Ay=`struct PhysicalMaterial {
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
}`,Cy=`
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
#endif`,Ry=`#if defined( RE_IndirectDiffuse )
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
#endif`,Py=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ly=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Iy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ny=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Oy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,By=`#if defined( USE_POINTS_UV )
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
#endif`,zy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ky=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wy=`#ifdef USE_MORPHTARGETS
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
#endif`,qy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$y=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ky=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zy=`#ifdef USE_NORMALMAP
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
#endif`,Jy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dS=`float getShadowMask() {
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
}`,pS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mS=`#ifdef USE_SKINNING
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
#endif`,gS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_S=`#ifdef USE_SKINNING
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
#endif`,vS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,MS=`#ifdef USE_TRANSMISSION
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
#endif`,ES=`#ifdef USE_TRANSMISSION
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
#endif`,bS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RS=`uniform sampler2D t2D;
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
}`,PS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,IS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NS=`#include <common>
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
}`,US=`#if DEPTH_PACKING == 3200
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
}`,FS=`#define DISTANCE
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
}`,OS=`#define DISTANCE
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
}`,BS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kS=`uniform float scale;
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
}`,HS=`uniform vec3 diffuse;
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
}`,VS=`#include <common>
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
}`,GS=`uniform vec3 diffuse;
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
}`,WS=`#define LAMBERT
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
}`,qS=`#define LAMBERT
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
}`,XS=`#define MATCAP
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
}`,$S=`#define MATCAP
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
}`,YS=`#define NORMAL
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
}`,jS=`#define NORMAL
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
}`,KS=`#define PHONG
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
}`,ZS=`#define PHONG
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
}`,JS=`#define STANDARD
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
}`,QS=`#define STANDARD
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
}`,tM=`#define TOON
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
}`,eM=`#define TOON
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
}`,nM=`uniform float size;
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
}`,iM=`uniform vec3 diffuse;
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
}`,sM=`#include <common>
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
}`,rM=`uniform vec3 color;
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
}`,oM=`uniform float rotation;
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
}`,aM=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:Rx,alphahash_pars_fragment:Px,alphamap_fragment:Lx,alphamap_pars_fragment:Ix,alphatest_fragment:Dx,alphatest_pars_fragment:Nx,aomap_fragment:Ux,aomap_pars_fragment:Fx,batching_pars_vertex:Ox,batching_vertex:Bx,begin_vertex:zx,beginnormal_vertex:kx,bsdfs:Hx,iridescence_fragment:Vx,bumpmap_pars_fragment:Gx,clipping_planes_fragment:Wx,clipping_planes_pars_fragment:qx,clipping_planes_pars_vertex:Xx,clipping_planes_vertex:$x,color_fragment:Yx,color_pars_fragment:jx,color_pars_vertex:Kx,color_vertex:Zx,common:Jx,cube_uv_reflection_fragment:Qx,defaultnormal_vertex:ty,displacementmap_pars_vertex:ey,displacementmap_vertex:ny,emissivemap_fragment:iy,emissivemap_pars_fragment:sy,colorspace_fragment:ry,colorspace_pars_fragment:oy,envmap_fragment:ay,envmap_common_pars_fragment:ly,envmap_pars_fragment:cy,envmap_pars_vertex:uy,envmap_physical_pars_fragment:Sy,envmap_vertex:hy,fog_vertex:fy,fog_pars_vertex:dy,fog_fragment:py,fog_pars_fragment:my,gradientmap_pars_fragment:gy,lightmap_pars_fragment:_y,lights_lambert_fragment:vy,lights_lambert_pars_fragment:xy,lights_pars_begin:yy,lights_toon_fragment:My,lights_toon_pars_fragment:Ey,lights_phong_fragment:by,lights_phong_pars_fragment:wy,lights_physical_fragment:Ty,lights_physical_pars_fragment:Ay,lights_fragment_begin:Cy,lights_fragment_maps:Ry,lights_fragment_end:Py,logdepthbuf_fragment:Ly,logdepthbuf_pars_fragment:Iy,logdepthbuf_pars_vertex:Dy,logdepthbuf_vertex:Ny,map_fragment:Uy,map_pars_fragment:Fy,map_particle_fragment:Oy,map_particle_pars_fragment:By,metalnessmap_fragment:zy,metalnessmap_pars_fragment:ky,morphinstance_vertex:Hy,morphcolor_vertex:Vy,morphnormal_vertex:Gy,morphtarget_pars_vertex:Wy,morphtarget_vertex:qy,normal_fragment_begin:Xy,normal_fragment_maps:$y,normal_pars_fragment:Yy,normal_pars_vertex:jy,normal_vertex:Ky,normalmap_pars_fragment:Zy,clearcoat_normal_fragment_begin:Jy,clearcoat_normal_fragment_maps:Qy,clearcoat_pars_fragment:tS,iridescence_pars_fragment:eS,opaque_fragment:nS,packing:iS,premultiplied_alpha_fragment:sS,project_vertex:rS,dithering_fragment:oS,dithering_pars_fragment:aS,roughnessmap_fragment:lS,roughnessmap_pars_fragment:cS,shadowmap_pars_fragment:uS,shadowmap_pars_vertex:hS,shadowmap_vertex:fS,shadowmask_pars_fragment:dS,skinbase_vertex:pS,skinning_pars_vertex:mS,skinning_vertex:gS,skinnormal_vertex:_S,specularmap_fragment:vS,specularmap_pars_fragment:xS,tonemapping_fragment:yS,tonemapping_pars_fragment:SS,transmission_fragment:MS,transmission_pars_fragment:ES,uv_pars_fragment:bS,uv_pars_vertex:wS,uv_vertex:TS,worldpos_vertex:AS,background_vert:CS,background_frag:RS,backgroundCube_vert:PS,backgroundCube_frag:LS,cube_vert:IS,cube_frag:DS,depth_vert:NS,depth_frag:US,distanceRGBA_vert:FS,distanceRGBA_frag:OS,equirect_vert:BS,equirect_frag:zS,linedashed_vert:kS,linedashed_frag:HS,meshbasic_vert:VS,meshbasic_frag:GS,meshlambert_vert:WS,meshlambert_frag:qS,meshmatcap_vert:XS,meshmatcap_frag:$S,meshnormal_vert:YS,meshnormal_frag:jS,meshphong_vert:KS,meshphong_frag:ZS,meshphysical_vert:JS,meshphysical_frag:QS,meshtoon_vert:tM,meshtoon_frag:eM,points_vert:nM,points_frag:iM,shadow_vert:sM,shadow_frag:rM,sprite_vert:oM,sprite_frag:aM},Et={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Gn={basic:{uniforms:Ye([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Ye([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new ne(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Ye([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Ye([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Ye([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new ne(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Ye([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Ye([Et.points,Et.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Ye([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Ye([Et.common,Et.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Ye([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Ye([Et.sprite,Et.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:Ye([Et.common,Et.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:Ye([Et.lights,Et.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Gn.physical={uniforms:Ye([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const Fo={r:0,b:0,g:0},is=new qe,lM=new be;function cM(i,t,e,n,s,r,o){const a=new ne(0);let l=r===!0?0:1,c,u,f=null,h=0,d=null;function g(v){let b=v.isScene===!0?v.background:null;return b&&b.isTexture&&(b=(v.backgroundBlurriness>0?e:t).get(b)),b}function _(v){let b=!1;const x=g(v);x===null?p(a,l):x&&x.isColor&&(p(x,1),b=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,b){const x=g(b);x&&(x.isCubeTexture||x.mapping===Ra)?(u===void 0&&(u=new Oe(new pr(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:sr(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,L,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),is.copy(b.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(lM.makeRotationFromEuler(is)),u.material.toneMapped=ie.getTransfer(x.colorSpace)!==de,(f!==x||h!==x.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,d=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Oe(new La(2,2),new Yi({name:"BackgroundMaterial",uniforms:sr(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ie.getTransfer(x.colorSpace)!==de,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,b){v.getRGB(Fo,Kp(i)),n.buffers.color.setClear(Fo.r,Fo.g,Fo.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),l=b,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:_,addToRenderList:m}}function uM(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(S,U,Y,O,W){let V=!1;const B=f(O,Y,U);r!==B&&(r=B,c(r.object)),V=d(S,O,Y,W),V&&g(S,O,Y,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,x(S,U,Y,O),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function f(S,U,Y){const O=Y.wireframe===!0;let W=n[S.id];W===void 0&&(W={},n[S.id]=W);let V=W[U.id];V===void 0&&(V={},W[U.id]=V);let B=V[O];return B===void 0&&(B=h(l()),V[O]=B),B}function h(S){const U=[],Y=[],O=[];for(let W=0;W<e;W++)U[W]=0,Y[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:Y,attributeDivisors:O,object:S,attributes:{},index:null}}function d(S,U,Y,O){const W=r.attributes,V=U.attributes;let B=0;const K=Y.getAttributes();for(const H in K)if(K[H].location>=0){const _t=W[H];let ct=V[H];if(ct===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(ct=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(ct=S.instanceColor)),_t===void 0||_t.attribute!==ct||ct&&_t.data!==ct.data)return!0;B++}return r.attributesNum!==B||r.index!==O}function g(S,U,Y,O){const W={},V=U.attributes;let B=0;const K=Y.getAttributes();for(const H in K)if(K[H].location>=0){let _t=V[H];_t===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(_t=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(_t=S.instanceColor));const ct={};ct.attribute=_t,_t&&_t.data&&(ct.data=_t.data),W[H]=ct,B++}r.attributes=W,r.attributesNum=B,r.index=O}function _(){const S=r.newAttributes;for(let U=0,Y=S.length;U<Y;U++)S[U]=0}function m(S){p(S,0)}function p(S,U){const Y=r.newAttributes,O=r.enabledAttributes,W=r.attributeDivisors;Y[S]=1,O[S]===0&&(i.enableVertexAttribArray(S),O[S]=1),W[S]!==U&&(i.vertexAttribDivisor(S,U),W[S]=U)}function v(){const S=r.newAttributes,U=r.enabledAttributes;for(let Y=0,O=U.length;Y<O;Y++)U[Y]!==S[Y]&&(i.disableVertexAttribArray(Y),U[Y]=0)}function b(S,U,Y,O,W,V,B){B===!0?i.vertexAttribIPointer(S,U,Y,W,V):i.vertexAttribPointer(S,U,Y,O,W,V)}function x(S,U,Y,O){_();const W=O.attributes,V=Y.getAttributes(),B=U.defaultAttributeValues;for(const K in V){const H=V[K];if(H.location>=0){let lt=W[K];if(lt===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(lt=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(lt=S.instanceColor)),lt!==void 0){const _t=lt.normalized,ct=lt.itemSize,mt=t.get(lt);if(mt===void 0)continue;const Ht=mt.buffer,at=mt.type,gt=mt.bytesPerElement,At=at===i.INT||at===i.UNSIGNED_INT||lt.gpuType===fu;if(lt.isInterleavedBufferAttribute){const St=lt.data,kt=St.stride,Gt=lt.offset;if(St.isInstancedInterleavedBuffer){for(let qt=0;qt<H.locationSize;qt++)p(H.location+qt,St.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let qt=0;qt<H.locationSize;qt++)m(H.location+qt);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let qt=0;qt<H.locationSize;qt++)b(H.location+qt,ct/H.locationSize,at,_t,kt*gt,(Gt+ct/H.locationSize*qt)*gt,At)}else{if(lt.isInstancedBufferAttribute){for(let St=0;St<H.locationSize;St++)p(H.location+St,lt.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let St=0;St<H.locationSize;St++)m(H.location+St);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let St=0;St<H.locationSize;St++)b(H.location+St,ct/H.locationSize,at,_t,ct*gt,ct/H.locationSize*St*gt,At)}}else if(B!==void 0){const _t=B[K];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(H.location,_t);break;case 3:i.vertexAttrib3fv(H.location,_t);break;case 4:i.vertexAttrib4fv(H.location,_t);break;default:i.vertexAttrib1fv(H.location,_t)}}}}v()}function D(){N();for(const S in n){const U=n[S];for(const Y in U){const O=U[Y];for(const W in O)u(O[W].object),delete O[W];delete U[Y]}delete n[S]}}function L(S){if(n[S.id]===void 0)return;const U=n[S.id];for(const Y in U){const O=U[Y];for(const W in O)u(O[W].object),delete O[W];delete U[Y]}delete n[S.id]}function P(S){for(const U in n){const Y=n[U];if(Y[S.id]===void 0)continue;const O=Y[S.id];for(const W in O)u(O[W].object),delete O[W];delete Y[S.id]}}function N(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:w,dispose:D,releaseStatesOfGeometry:L,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function hM(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];e.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function fM(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Pn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const N=P===ro&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Ei&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==gi&&!N)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:D,maxSamples:L}}function dM(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new as,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const v=r?0:n,b=v*4;let x=p.clippingState||null;l.value=x,x=u(g,h,b,d);for(let D=0;D!==b;++D)x[D]=e[D];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,x=d;b!==_;++b,x+=4)o.copy(f[b]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function pM(i){let t=new WeakMap;function e(o,a){return a===cc?o.mapping=tr:a===uc&&(o.mapping=er),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===cc||a===uc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new wx(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class tm extends Zp{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Vs=4,Jh=[.125,.215,.35,.446,.526,.582],us=20,Sl=new tm,Qh=new ne;let Ml=null,El=0,bl=0,wl=!1;const ls=(1+Math.sqrt(5))/2,Fs=1/ls,tf=[new $(-ls,Fs,0),new $(ls,Fs,0),new $(-Fs,0,ls),new $(Fs,0,ls),new $(0,ls,-Fs),new $(0,ls,Fs),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class ef{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ml=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ml,El,bl),this._renderer.xr.enabled=wl,t.scissorTest=!1,Oo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===tr||t.mapping===er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ml=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:ro,format:Pn,colorSpace:fr,depthBuffer:!1},s=nf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nf(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mM(r)),this._blurMaterial=gM(r,t,e)}return s}_compileMaterial(t){const e=new Oe(this._lodPlanes[0],t);this._renderer.compile(e,Sl)}_sceneToCubeUV(t,e,n,s){const a=new un(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Qh),u.toneMapping=Gi,u.autoClear=!1;const d=new $p({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new Oe(new pr,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Qh),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const b=this._cubeSize;Oo(s,v*b,p>2?b:0,b,b),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===tr||t.mapping===er;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Oe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Oo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Sl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=tf[(s-r-1)%tf.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Oe(this._lodPlanes[s],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*us-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):us;m>us&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${us}`);const p=[];let v=0;for(let P=0;P<us;++P){const N=P/_,w=Math.exp(-N*N/2);p.push(w),P===0?v+=w:P<m&&(v+=2*w)}for(let P=0;P<p.length;P++)p[P]=p[P]/v;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-n;const x=this._sizeLods[s],D=3*x*(s>b-Vs?s-b+Vs:0),L=4*(this._cubeSize-x);Oo(e,D,L,3*x,2*x),l.setRenderTarget(e),l.render(f,Sl)}}function mM(i){const t=[],e=[],n=[];let s=i;const r=i-Vs+1+Jh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Vs?l=Jh[o-i+Vs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*d),b=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let L=0;L<d;L++){const P=L%3*2/3-1,N=L>2?0:-1,w=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];v.set(w,_*g*L),b.set(h,m*g*L);const S=[L,L,L,L,L,L];x.set(S,p*g*L)}const D=new wi;D.setAttribute("position",new Yn(v,_)),D.setAttribute("uv",new Yn(b,m)),D.setAttribute("faceIndex",new Yn(x,p)),t.push(D),s>Vs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function nf(i,t,e){const n=new _s(i,t,e);return n.texture.mapping=Ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function gM(i,t,e){const n=new Float32Array(us),s=new $(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Su(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function sf(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Su(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function rf(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Su(){return`

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
	`}function _M(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===cc||l===uc,u=l===tr||l===er;if(c||u){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new ef(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new ef(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function vM(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ur("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function xM(i,t,e,n){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)t.update(h[g],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const v=d.array;_=d.version;for(let b=0,x=v.length;b<x;b+=3){const D=v[b+0],L=v[b+1],P=v[b+2];h.push(D,L,L,P,P,D)}}else if(g!==void 0){const v=g.array;_=g.version;for(let b=0,x=v.length/3-1;b<x;b+=3){const D=b+0,L=b+1,P=b+2;h.push(D,L,L,P,P,D)}}else return;const m=new(Vp(h)?jp:Yp)(h,1);m.version=_;const p=r.get(f);p&&t.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function yM(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){i.drawElements(n,d,r,h*o),e.update(d,n,1)}function c(h,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,h*o,g),e.update(d,n,g))}function u(h,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function f(h,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,h,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=d[v]*_[v];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function SM(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function MM(i,t,e){const n=new WeakMap,s=new pe;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let S=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var d=S;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let D=a.attributes.position.count*x,L=1;D>t.maxTextureSize&&(L=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const P=new Float32Array(D*L*4*f),N=new Wp(P,D,L,f);N.type=gi,N.needsUpdate=!0;const w=x*4;for(let U=0;U<f;U++){const Y=p[U],O=v[U],W=b[U],V=D*L*4*U;for(let B=0;B<Y.count;B++){const K=B*w;g===!0&&(s.fromBufferAttribute(Y,B),P[V+K+0]=s.x,P[V+K+1]=s.y,P[V+K+2]=s.z,P[V+K+3]=0),_===!0&&(s.fromBufferAttribute(O,B),P[V+K+4]=s.x,P[V+K+5]=s.y,P[V+K+6]=s.z,P[V+K+7]=0),m===!0&&(s.fromBufferAttribute(W,B),P[V+K+8]=s.x,P[V+K+9]=s.y,P[V+K+10]=s.z,P[V+K+11]=W.itemSize===4?s.w:1)}}h={count:f,texture:N,size:new Vt(D,L)},n.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function EM(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class em extends Je{constructor(t,e,n,s,r,o,a,l,c,u=js){if(u!==js&&u!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===js&&(n=gs),n===void 0&&u===ir&&(n=nr),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Nn,this.minFilter=l!==void 0?l:Nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const nm=new Je,of=new em(1,1),im=new Wp,sm=new cx,rm=new Jp,af=[],lf=[],cf=new Float32Array(16),uf=new Float32Array(9),hf=new Float32Array(4);function mr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=af[s];if(r===void 0&&(r=new Float32Array(s),af[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ia(i,t){let e=lf[t];e===void 0&&(e=new Int32Array(t),lf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function bM(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function wM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function TM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function AM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function CM(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;hf.set(n),i.uniformMatrix2fv(this.addr,!1,hf),Ne(e,n)}}function RM(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;uf.set(n),i.uniformMatrix3fv(this.addr,!1,uf),Ne(e,n)}}function PM(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;cf.set(n),i.uniformMatrix4fv(this.addr,!1,cf),Ne(e,n)}}function LM(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function IM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function DM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function NM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function UM(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function FM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function OM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function BM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function zM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(of.compareFunction=Hp,r=of):r=nm,e.setTexture2D(t||r,s)}function kM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||sm,s)}function HM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||rm,s)}function VM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||im,s)}function GM(i){switch(i){case 5126:return bM;case 35664:return wM;case 35665:return TM;case 35666:return AM;case 35674:return CM;case 35675:return RM;case 35676:return PM;case 5124:case 35670:return LM;case 35667:case 35671:return IM;case 35668:case 35672:return DM;case 35669:case 35673:return NM;case 5125:return UM;case 36294:return FM;case 36295:return OM;case 36296:return BM;case 35678:case 36198:case 36298:case 36306:case 35682:return zM;case 35679:case 36299:case 36307:return kM;case 35680:case 36300:case 36308:case 36293:return HM;case 36289:case 36303:case 36311:case 36292:return VM}}function WM(i,t){i.uniform1fv(this.addr,t)}function qM(i,t){const e=mr(t,this.size,2);i.uniform2fv(this.addr,e)}function XM(i,t){const e=mr(t,this.size,3);i.uniform3fv(this.addr,e)}function $M(i,t){const e=mr(t,this.size,4);i.uniform4fv(this.addr,e)}function YM(i,t){const e=mr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function jM(i,t){const e=mr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function KM(i,t){const e=mr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ZM(i,t){i.uniform1iv(this.addr,t)}function JM(i,t){i.uniform2iv(this.addr,t)}function QM(i,t){i.uniform3iv(this.addr,t)}function tE(i,t){i.uniform4iv(this.addr,t)}function eE(i,t){i.uniform1uiv(this.addr,t)}function nE(i,t){i.uniform2uiv(this.addr,t)}function iE(i,t){i.uniform3uiv(this.addr,t)}function sE(i,t){i.uniform4uiv(this.addr,t)}function rE(i,t,e){const n=this.cache,s=t.length,r=Ia(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||nm,r[o])}function oE(i,t,e){const n=this.cache,s=t.length,r=Ia(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||sm,r[o])}function aE(i,t,e){const n=this.cache,s=t.length,r=Ia(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||rm,r[o])}function lE(i,t,e){const n=this.cache,s=t.length,r=Ia(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||im,r[o])}function cE(i){switch(i){case 5126:return WM;case 35664:return qM;case 35665:return XM;case 35666:return $M;case 35674:return YM;case 35675:return jM;case 35676:return KM;case 5124:case 35670:return ZM;case 35667:case 35671:return JM;case 35668:case 35672:return QM;case 35669:case 35673:return tE;case 5125:return eE;case 36294:return nE;case 36295:return iE;case 36296:return sE;case 35678:case 36198:case 36298:case 36306:case 35682:return rE;case 35679:case 36299:case 36307:return oE;case 35680:case 36300:case 36308:case 36293:return aE;case 36289:case 36303:case 36311:case 36292:return lE}}class uE{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=GM(e.type)}}class hE{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cE(e.type)}}class fE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Tl=/(\w+)(\])?(\[|\.)?/g;function ff(i,t){i.seq.push(t),i.map[t.id]=t}function dE(i,t,e){const n=i.name,s=n.length;for(Tl.lastIndex=0;;){const r=Tl.exec(n),o=Tl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ff(e,c===void 0?new uE(a,i,t):new hE(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new fE(a),ff(e,f)),e=f}}}class ia{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);dE(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function df(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const pE=37297;let mE=0;function gE(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const pf=new Qt;function _E(i){ie._getMatrix(pf,ie.workingColorSpace,i);const t=`mat3( ${pf.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case Pa:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function mf(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+gE(i.getShaderSource(t),o)}else return s}function vE(i,t){const e=_E(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function xE(i,t){let e;switch(t){case O0:e="Linear";break;case B0:e="Reinhard";break;case z0:e="Cineon";break;case Cp:e="ACESFilmic";break;case H0:e="AgX";break;case V0:e="Neutral";break;case k0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Bo=new $;function yE(){ie.getLuminanceCoefficients(Bo);const i=Bo.x.toFixed(4),t=Bo.y.toFixed(4),e=Bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function SE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fr).join(`
`)}function ME(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function EE(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Fr(i){return i!==""}function gf(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _f(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bE=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(i){return i.replace(bE,TE)}const wE=new Map;function TE(i,t){let e=te[t];if(e===void 0){const n=wE.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return kc(e)}const AE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vf(i){return i.replace(AE,CE)}function CE(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function RE(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wp?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Tp?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hi&&(t="SHADOWMAP_TYPE_VSM"),t}function PE(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case tr:case er:t="ENVMAP_TYPE_CUBE";break;case Ra:t="ENVMAP_TYPE_CUBE_UV";break}return t}function LE(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case er:t="ENVMAP_MODE_REFRACTION";break}return t}function IE(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ap:t="ENVMAP_BLENDING_MULTIPLY";break;case U0:t="ENVMAP_BLENDING_MIX";break;case F0:t="ENVMAP_BLENDING_ADD";break}return t}function DE(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function NE(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=RE(e),c=PE(e),u=LE(e),f=IE(e),h=DE(e),d=SE(e),g=ME(r),_=s.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fr).join(`
`),p.length>0&&(p+=`
`)):(m=[xf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),p=[xf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gi?"#define TONE_MAPPING":"",e.toneMapping!==Gi?te.tonemapping_pars_fragment:"",e.toneMapping!==Gi?xE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,vE("linearToOutputTexel",e.outputColorSpace),yE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fr).join(`
`)),o=kc(o),o=gf(o,e),o=_f(o,e),a=kc(a),a=gf(a,e),a=_f(a,e),o=vf(o),a=vf(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=v+m+o,x=v+p+a,D=df(s,s.VERTEX_SHADER,b),L=df(s,s.FRAGMENT_SHADER,x);s.attachShader(_,D),s.attachShader(_,L),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(U){if(i.debug.checkShaderErrors){const Y=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(D).trim(),W=s.getShaderInfoLog(L).trim();let V=!0,B=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,D,L);else{const K=mf(s,D,"vertex"),H=mf(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+Y+`
`+K+`
`+H)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(O===""||W==="")&&(B=!1);B&&(U.diagnostics={runnable:V,programLog:Y,vertexShader:{log:O,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(D),s.deleteShader(L),N=new ia(s,_),w=EE(s,_)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,pE)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mE++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=L,this}let UE=0;class FE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new OE(t),e.set(t,n)),n}}class OE{constructor(t){this.id=UE++,this.code=t,this.usedTimes=0}}function BE(i,t,e,n,s,r,o){const a=new xu,l=new FE,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,S,U,Y,O){const W=Y.fog,V=O.geometry,B=w.isMeshStandardMaterial?Y.environment:null,K=(w.isMeshStandardMaterial?e:t).get(w.envMap||B),H=K&&K.mapping===Ra?K.image.height:null,lt=g[w.type];w.precision!==null&&(d=s.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const _t=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ct=_t!==void 0?_t.length:0;let mt=0;V.morphAttributes.position!==void 0&&(mt=1),V.morphAttributes.normal!==void 0&&(mt=2),V.morphAttributes.color!==void 0&&(mt=3);let Ht,at,gt,At;if(lt){const fe=Gn[lt];Ht=fe.vertexShader,at=fe.fragmentShader}else Ht=w.vertexShader,at=w.fragmentShader,l.update(w),gt=l.getVertexShaderID(w),At=l.getFragmentShaderID(w);const St=i.getRenderTarget(),kt=i.state.buffers.depth.getReversed(),Gt=O.isInstancedMesh===!0,qt=O.isBatchedMesh===!0,_e=!!w.map,I=!!w.matcap,k=!!K,C=!!w.aoMap,ft=!!w.lightMap,tt=!!w.bumpMap,et=!!w.normalMap,rt=!!w.displacementMap,pt=!!w.emissiveMap,nt=!!w.metalnessMap,M=!!w.roughnessMap,y=w.anisotropy>0,A=w.clearcoat>0,R=w.dispersion>0,F=w.iridescence>0,z=w.sheen>0,j=w.transmission>0,Z=y&&!!w.anisotropyMap,st=A&&!!w.clearcoatMap,bt=A&&!!w.clearcoatNormalMap,ut=A&&!!w.clearcoatRoughnessMap,ht=F&&!!w.iridescenceMap,yt=F&&!!w.iridescenceThicknessMap,Dt=z&&!!w.sheenColorMap,Mt=z&&!!w.sheenRoughnessMap,Xt=!!w.specularMap,jt=!!w.specularColorMap,he=!!w.specularIntensityMap,G=j&&!!w.transmissionMap,wt=j&&!!w.thicknessMap,ot=!!w.gradientMap,dt=!!w.alphaMap,Pt=w.alphaTest>0,Ct=!!w.alphaHash,Zt=!!w.extensions;let we=Gi;w.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(we=i.toneMapping);const ze={shaderID:lt,shaderType:w.type,shaderName:w.name,vertexShader:Ht,fragmentShader:at,defines:w.defines,customVertexShaderID:gt,customFragmentShaderID:At,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:qt,batchingColor:qt&&O._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&O.instanceColor!==null,instancingMorph:Gt&&O.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:St===null?i.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:fr,alphaToCoverage:!!w.alphaToCoverage,map:_e,matcap:I,envMap:k,envMapMode:k&&K.mapping,envMapCubeUVHeight:H,aoMap:C,lightMap:ft,bumpMap:tt,normalMap:et,displacementMap:h&&rt,emissiveMap:pt,normalMapObjectSpace:et&&w.normalMapType===X0,normalMapTangentSpace:et&&w.normalMapType===kp,metalnessMap:nt,roughnessMap:M,anisotropy:y,anisotropyMap:Z,clearcoat:A,clearcoatMap:st,clearcoatNormalMap:bt,clearcoatRoughnessMap:ut,dispersion:R,iridescence:F,iridescenceMap:ht,iridescenceThicknessMap:yt,sheen:z,sheenColorMap:Dt,sheenRoughnessMap:Mt,specularMap:Xt,specularColorMap:jt,specularIntensityMap:he,transmission:j,transmissionMap:G,thicknessMap:wt,gradientMap:ot,opaque:w.transparent===!1&&w.blending===Ys&&w.alphaToCoverage===!1,alphaMap:dt,alphaTest:Pt,alphaHash:Ct,combine:w.combine,mapUv:_e&&_(w.map.channel),aoMapUv:C&&_(w.aoMap.channel),lightMapUv:ft&&_(w.lightMap.channel),bumpMapUv:tt&&_(w.bumpMap.channel),normalMapUv:et&&_(w.normalMap.channel),displacementMapUv:rt&&_(w.displacementMap.channel),emissiveMapUv:pt&&_(w.emissiveMap.channel),metalnessMapUv:nt&&_(w.metalnessMap.channel),roughnessMapUv:M&&_(w.roughnessMap.channel),anisotropyMapUv:Z&&_(w.anisotropyMap.channel),clearcoatMapUv:st&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:bt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&_(w.sheenRoughnessMap.channel),specularMapUv:Xt&&_(w.specularMap.channel),specularColorMapUv:jt&&_(w.specularColorMap.channel),specularIntensityMapUv:he&&_(w.specularIntensityMap.channel),transmissionMapUv:G&&_(w.transmissionMap.channel),thicknessMapUv:wt&&_(w.thicknessMap.channel),alphaMapUv:dt&&_(w.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(et||y),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(_e||dt),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:kt,skinning:O.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:mt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:we,decodeVideoTexture:_e&&w.map.isVideoTexture===!0&&ie.getTransfer(w.map.colorSpace)===de,decodeVideoTextureEmissive:pt&&w.emissiveMap.isVideoTexture===!0&&ie.getTransfer(w.emissiveMap.colorSpace)===de,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Wn,flipSided:w.side===rn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Zt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&w.extensions.multiDraw===!0||qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function p(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const U in w.defines)S.push(U),S.push(w.defines[U]);return w.isRawShaderMaterial===!1&&(v(S,w),b(S,w),S.push(i.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function v(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function b(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const S=g[w.type];let U;if(S){const Y=Gn[S];U=Sx.clone(Y.uniforms)}else U=w.uniforms;return U}function D(w,S){let U;for(let Y=0,O=u.length;Y<O;Y++){const W=u[Y];if(W.cacheKey===S){U=W,++U.usedTimes;break}}return U===void 0&&(U=new NE(i,S,w,r),u.push(U)),U}function L(w){if(--w.usedTimes===0){const S=u.indexOf(w);u[S]=u[u.length-1],u.pop(),w.destroy()}}function P(w){l.remove(w)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:D,releaseProgram:L,releaseShaderCache:P,programs:u,dispose:N}}function zE(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function kE(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function yf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Sf(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,h,d,g,_,m){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[t]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),t++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(f,h){e.length>1&&e.sort(f||kE),n.length>1&&n.sort(h||yf),s.length>1&&s.sort(h||yf)}function u(){for(let f=t,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function HE(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Sf,i.set(n,[o])):s>=r.length?(o=new Sf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function VE(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new $,color:new ne};break;case"SpotLight":e={position:new $,direction:new $,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new $,halfWidth:new $,halfHeight:new $};break}return i[t.id]=e,e}}}function GE(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let WE=0;function qE(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function XE(i){const t=new VE,e=GE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new $);const s=new $,r=new be,o=new be;function a(c){let u=0,f=0,h=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,v=0,b=0,x=0,D=0,L=0,P=0;c.sort(qE);for(let w=0,S=c.length;w<S;w++){const U=c[w],Y=U.color,O=U.intensity,W=U.distance,V=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=Y.r*O,f+=Y.g*O,h+=Y.b*O;else if(U.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(U.sh.coefficients[B],O);P++}else if(U.isDirectionalLight){const B=t.get(U);if(B.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const K=U.shadow,H=e.get(U);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=V,n.directionalShadowMatrix[d]=U.shadow.matrix,v++}n.directional[d]=B,d++}else if(U.isSpotLight){const B=t.get(U);B.position.setFromMatrixPosition(U.matrixWorld),B.color.copy(Y).multiplyScalar(O),B.distance=W,B.coneCos=Math.cos(U.angle),B.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),B.decay=U.decay,n.spot[_]=B;const K=U.shadow;if(U.map&&(n.spotLightMap[D]=U.map,D++,K.updateMatrices(U),U.castShadow&&L++),n.spotLightMatrix[_]=K.matrix,U.castShadow){const H=e.get(U);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=V,x++}_++}else if(U.isRectAreaLight){const B=t.get(U);B.color.copy(Y).multiplyScalar(O),B.halfWidth.set(U.width*.5,0,0),B.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=B,m++}else if(U.isPointLight){const B=t.get(U);if(B.color.copy(U.color).multiplyScalar(U.intensity),B.distance=U.distance,B.decay=U.decay,U.castShadow){const K=U.shadow,H=e.get(U);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=U.shadow.matrix,b++}n.point[g]=B,g++}else if(U.isHemisphereLight){const B=t.get(U);B.skyColor.copy(U.color).multiplyScalar(O),B.groundColor.copy(U.groundColor).multiplyScalar(O),n.hemi[p]=B,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const N=n.hash;(N.directionalLength!==d||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==v||N.numPointShadows!==b||N.numSpotShadows!==x||N.numSpotMaps!==D||N.numLightProbes!==P)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=x+D-L,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=P,N.directionalLength=d,N.pointLength=g,N.spotLength=_,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=v,N.numPointShadows=b,N.numSpotShadows=x,N.numSpotMaps=D,N.numLightProbes=P,n.version=WE++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const b=c[p];if(b.isDirectionalLight){const x=n.directional[f];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(b.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(b.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Mf(i){const t=new XE(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function $E(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Mf(i),t.set(s,[a])):r>=o.length?(a=new Mf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class YE extends lo{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=W0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class jE extends lo{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const KE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZE=`uniform sampler2D shadow_pass;
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
}`;function JE(i,t,e){let n=new yu;const s=new Vt,r=new Vt,o=new pe,a=new YE({depthPacking:q0}),l=new jE,c={},u=e.maxTextureSize,f={[$i]:rn,[rn]:$i,[Wn]:Wn},h=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:KE,fragmentShader:ZE}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new wi;g.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Oe(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wp;let p=this.type;this.render=function(L,P,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const w=i.getRenderTarget(),S=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(Vi),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const O=p!==hi&&this.type===hi,W=p===hi&&this.type!==hi;for(let V=0,B=L.length;V<B;V++){const K=L[V],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const lt=H.getFrameExtents();if(s.multiply(lt),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/lt.x),s.x=r.x*lt.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/lt.y),s.y=r.y*lt.y,H.mapSize.y=r.y)),H.map===null||O===!0||W===!0){const ct=this.type!==hi?{minFilter:Nn,magFilter:Nn}:{};H.map!==null&&H.map.dispose(),H.map=new _s(s.x,s.y,ct),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const _t=H.getViewportCount();for(let ct=0;ct<_t;ct++){const mt=H.getViewport(ct);o.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),Y.viewport(o),H.updateMatrices(K,ct),n=H.getFrustum(),x(P,N,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===hi&&v(H,N),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,S,U)};function v(L,P){const N=t.update(_);h.defines.VSM_SAMPLES!==L.blurSamples&&(h.defines.VSM_SAMPLES=L.blurSamples,d.defines.VSM_SAMPLES=L.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new _s(s.x,s.y)),h.uniforms.shadow_pass.value=L.map.texture,h.uniforms.resolution.value=L.mapSize,h.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(P,null,N,h,_,null),d.uniforms.shadow_pass.value=L.mapPass.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(P,null,N,d,_,null)}function b(L,P,N,w){let S=null;const U=N.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(U!==void 0)S=U;else if(S=N.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const Y=S.uuid,O=P.uuid;let W=c[Y];W===void 0&&(W={},c[Y]=W);let V=W[O];V===void 0&&(V=S.clone(),W[O]=V,P.addEventListener("dispose",D)),S=V}if(S.visible=P.visible,S.wireframe=P.wireframe,w===hi?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:f[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const Y=i.properties.get(S);Y.light=N}return S}function x(L,P,N,w,S){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&S===hi)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,L.matrixWorld);const O=t.update(L),W=L.material;if(Array.isArray(W)){const V=O.groups;for(let B=0,K=V.length;B<K;B++){const H=V[B],lt=W[H.materialIndex];if(lt&&lt.visible){const _t=b(L,lt,w,S);L.onBeforeShadow(i,L,P,N,O,_t,H),i.renderBufferDirect(N,null,O,_t,L,H),L.onAfterShadow(i,L,P,N,O,_t,H)}}}else if(W.visible){const V=b(L,W,w,S);L.onBeforeShadow(i,L,P,N,O,V,null),i.renderBufferDirect(N,null,O,V,L,null),L.onAfterShadow(i,L,P,N,O,V,null)}}const Y=L.children;for(let O=0,W=Y.length;O<W;O++)x(Y[O],P,N,w,S)}function D(L){L.target.removeEventListener("dispose",D);for(const N in c){const w=c[N],S=L.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const QE={[nc]:ic,[sc]:ac,[rc]:lc,[Qs]:oc,[ic]:nc,[ac]:sc,[lc]:rc,[oc]:Qs};function tb(i,t){function e(){let G=!1;const wt=new pe;let ot=null;const dt=new pe(0,0,0,0);return{setMask:function(Pt){ot!==Pt&&!G&&(i.colorMask(Pt,Pt,Pt,Pt),ot=Pt)},setLocked:function(Pt){G=Pt},setClear:function(Pt,Ct,Zt,we,ze){ze===!0&&(Pt*=we,Ct*=we,Zt*=we),wt.set(Pt,Ct,Zt,we),dt.equals(wt)===!1&&(i.clearColor(Pt,Ct,Zt,we),dt.copy(wt))},reset:function(){G=!1,ot=null,dt.set(-1,0,0,0)}}}function n(){let G=!1,wt=!1,ot=null,dt=null,Pt=null;return{setReversed:function(Ct){if(wt!==Ct){const Zt=t.get("EXT_clip_control");wt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT);const we=Pt;Pt=null,this.setClear(we)}wt=Ct},getReversed:function(){return wt},setTest:function(Ct){Ct?St(i.DEPTH_TEST):kt(i.DEPTH_TEST)},setMask:function(Ct){ot!==Ct&&!G&&(i.depthMask(Ct),ot=Ct)},setFunc:function(Ct){if(wt&&(Ct=QE[Ct]),dt!==Ct){switch(Ct){case nc:i.depthFunc(i.NEVER);break;case ic:i.depthFunc(i.ALWAYS);break;case sc:i.depthFunc(i.LESS);break;case Qs:i.depthFunc(i.LEQUAL);break;case rc:i.depthFunc(i.EQUAL);break;case oc:i.depthFunc(i.GEQUAL);break;case ac:i.depthFunc(i.GREATER);break;case lc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=Ct}},setLocked:function(Ct){G=Ct},setClear:function(Ct){Pt!==Ct&&(wt&&(Ct=1-Ct),i.clearDepth(Ct),Pt=Ct)},reset:function(){G=!1,ot=null,dt=null,Pt=null,wt=!1}}}function s(){let G=!1,wt=null,ot=null,dt=null,Pt=null,Ct=null,Zt=null,we=null,ze=null;return{setTest:function(fe){G||(fe?St(i.STENCIL_TEST):kt(i.STENCIL_TEST))},setMask:function(fe){wt!==fe&&!G&&(i.stencilMask(fe),wt=fe)},setFunc:function(fe,Mn,Qn){(ot!==fe||dt!==Mn||Pt!==Qn)&&(i.stencilFunc(fe,Mn,Qn),ot=fe,dt=Mn,Pt=Qn)},setOp:function(fe,Mn,Qn){(Ct!==fe||Zt!==Mn||we!==Qn)&&(i.stencilOp(fe,Mn,Qn),Ct=fe,Zt=Mn,we=Qn)},setLocked:function(fe){G=fe},setClear:function(fe){ze!==fe&&(i.clearStencil(fe),ze=fe)},reset:function(){G=!1,wt=null,ot=null,dt=null,Pt=null,Ct=null,Zt=null,we=null,ze=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,v=null,b=null,x=null,D=null,L=null,P=new ne(0,0,0),N=0,w=!1,S=null,U=null,Y=null,O=null,W=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,K=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=K>=2);let lt=null,_t={};const ct=i.getParameter(i.SCISSOR_BOX),mt=i.getParameter(i.VIEWPORT),Ht=new pe().fromArray(ct),at=new pe().fromArray(mt);function gt(G,wt,ot,dt){const Pt=new Uint8Array(4),Ct=i.createTexture();i.bindTexture(G,Ct),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<ot;Zt++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,dt,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(wt+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return Ct}const At={};At[i.TEXTURE_2D]=gt(i.TEXTURE_2D,i.TEXTURE_2D,1),At[i.TEXTURE_CUBE_MAP]=gt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[i.TEXTURE_2D_ARRAY]=gt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),At[i.TEXTURE_3D]=gt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),St(i.DEPTH_TEST),o.setFunc(Qs),tt(!1),et(wh),St(i.CULL_FACE),C(Vi);function St(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function kt(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function Gt(G,wt){return f[G]!==wt?(i.bindFramebuffer(G,wt),f[G]=wt,G===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=wt),G===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function qt(G,wt){let ot=d,dt=!1;if(G){ot=h.get(wt),ot===void 0&&(ot=[],h.set(wt,ot));const Pt=G.textures;if(ot.length!==Pt.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let Ct=0,Zt=Pt.length;Ct<Zt;Ct++)ot[Ct]=i.COLOR_ATTACHMENT0+Ct;ot.length=Pt.length,dt=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,dt=!0);dt&&i.drawBuffers(ot)}function _e(G){return g!==G?(i.useProgram(G),g=G,!0):!1}const I={[cs]:i.FUNC_ADD,[v0]:i.FUNC_SUBTRACT,[x0]:i.FUNC_REVERSE_SUBTRACT};I[y0]=i.MIN,I[S0]=i.MAX;const k={[M0]:i.ZERO,[E0]:i.ONE,[b0]:i.SRC_COLOR,[tc]:i.SRC_ALPHA,[P0]:i.SRC_ALPHA_SATURATE,[C0]:i.DST_COLOR,[T0]:i.DST_ALPHA,[w0]:i.ONE_MINUS_SRC_COLOR,[ec]:i.ONE_MINUS_SRC_ALPHA,[R0]:i.ONE_MINUS_DST_COLOR,[A0]:i.ONE_MINUS_DST_ALPHA,[L0]:i.CONSTANT_COLOR,[I0]:i.ONE_MINUS_CONSTANT_COLOR,[D0]:i.CONSTANT_ALPHA,[N0]:i.ONE_MINUS_CONSTANT_ALPHA};function C(G,wt,ot,dt,Pt,Ct,Zt,we,ze,fe){if(G===Vi){_===!0&&(kt(i.BLEND),_=!1);return}if(_===!1&&(St(i.BLEND),_=!0),G!==_0){if(G!==m||fe!==w){if((p!==cs||x!==cs)&&(i.blendEquation(i.FUNC_ADD),p=cs,x=cs),fe)switch(G){case Ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Th:i.blendFunc(i.ONE,i.ONE);break;case Ah:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ch:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Th:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ah:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ch:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}v=null,b=null,D=null,L=null,P.set(0,0,0),N=0,m=G,w=fe}return}Pt=Pt||wt,Ct=Ct||ot,Zt=Zt||dt,(wt!==p||Pt!==x)&&(i.blendEquationSeparate(I[wt],I[Pt]),p=wt,x=Pt),(ot!==v||dt!==b||Ct!==D||Zt!==L)&&(i.blendFuncSeparate(k[ot],k[dt],k[Ct],k[Zt]),v=ot,b=dt,D=Ct,L=Zt),(we.equals(P)===!1||ze!==N)&&(i.blendColor(we.r,we.g,we.b,ze),P.copy(we),N=ze),m=G,w=!1}function ft(G,wt){G.side===Wn?kt(i.CULL_FACE):St(i.CULL_FACE);let ot=G.side===rn;wt&&(ot=!ot),tt(ot),G.blending===Ys&&G.transparent===!1?C(Vi):C(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);const dt=G.stencilWrite;a.setTest(dt),dt&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),pt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?St(i.SAMPLE_ALPHA_TO_COVERAGE):kt(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(G){S!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),S=G)}function et(G){G!==m0?(St(i.CULL_FACE),G!==U&&(G===wh?i.cullFace(i.BACK):G===g0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):kt(i.CULL_FACE),U=G}function rt(G){G!==Y&&(B&&i.lineWidth(G),Y=G)}function pt(G,wt,ot){G?(St(i.POLYGON_OFFSET_FILL),(O!==wt||W!==ot)&&(i.polygonOffset(wt,ot),O=wt,W=ot)):kt(i.POLYGON_OFFSET_FILL)}function nt(G){G?St(i.SCISSOR_TEST):kt(i.SCISSOR_TEST)}function M(G){G===void 0&&(G=i.TEXTURE0+V-1),lt!==G&&(i.activeTexture(G),lt=G)}function y(G,wt,ot){ot===void 0&&(lt===null?ot=i.TEXTURE0+V-1:ot=lt);let dt=_t[ot];dt===void 0&&(dt={type:void 0,texture:void 0},_t[ot]=dt),(dt.type!==G||dt.texture!==wt)&&(lt!==ot&&(i.activeTexture(ot),lt=ot),i.bindTexture(G,wt||At[G]),dt.type=G,dt.texture=wt)}function A(){const G=_t[lt];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function R(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function F(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function z(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function j(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Z(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function st(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function bt(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ut(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ht(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function yt(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Dt(G){Ht.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Ht.copy(G))}function Mt(G){at.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),at.copy(G))}function Xt(G,wt){let ot=c.get(wt);ot===void 0&&(ot=new WeakMap,c.set(wt,ot));let dt=ot.get(G);dt===void 0&&(dt=i.getUniformBlockIndex(wt,G.name),ot.set(G,dt))}function jt(G,wt){const dt=c.get(wt).get(G);l.get(wt)!==dt&&(i.uniformBlockBinding(wt,dt,G.__bindingPointIndex),l.set(wt,dt))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},lt=null,_t={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,v=null,b=null,x=null,D=null,L=null,P=new ne(0,0,0),N=0,w=!1,S=null,U=null,Y=null,O=null,W=null,Ht.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:St,disable:kt,bindFramebuffer:Gt,drawBuffers:qt,useProgram:_e,setBlending:C,setMaterial:ft,setFlipSided:tt,setCullFace:et,setLineWidth:rt,setPolygonOffset:pt,setScissorTest:nt,activeTexture:M,bindTexture:y,unbindTexture:A,compressedTexImage2D:R,compressedTexImage3D:F,texImage2D:ht,texImage3D:yt,updateUBOMapping:Xt,uniformBlockBinding:jt,texStorage2D:bt,texStorage3D:ut,texSubImage2D:z,texSubImage3D:j,compressedTexSubImage2D:Z,compressedTexSubImage3D:st,scissor:Dt,viewport:Mt,reset:he}}function Ef(i,t,e,n){const s=eb(n);switch(e){case Dp:return i*t;case Up:return i*t;case Fp:return i*t*2;case Op:return i*t/s.components*s.byteLength;case mu:return i*t/s.components*s.byteLength;case Bp:return i*t*2/s.components*s.byteLength;case gu:return i*t*2/s.components*s.byteLength;case Np:return i*t*3/s.components*s.byteLength;case Pn:return i*t*4/s.components*s.byteLength;case _u:return i*t*4/s.components*s.byteLength;case Jo:case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ta:case ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pc:case gc:return Math.max(i,16)*Math.max(t,8)/4;case dc:case mc:return Math.max(i,8)*Math.max(t,8)/2;case _c:case vc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Mc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case bc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case wc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ac:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Cc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Rc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Pc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Lc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ic:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Dc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case na:case Nc:case Uc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case zp:case Fc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Oc:case Bc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function eb(i){switch(i){case Ei:case Pp:return{byteLength:1,components:1};case to:case Lp:case ro:return{byteLength:2,components:1};case du:case pu:return{byteLength:2,components:4};case gs:case fu:case gi:return{byteLength:4,components:1};case Ip:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function nb(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Vt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,y){return d?new OffscreenCanvas(M,y):fa("canvas")}function _(M,y,A){let R=1;const F=nt(M);if((F.width>A||F.height>A)&&(R=A/Math.max(F.width,F.height)),R<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const z=Math.floor(R*F.width),j=Math.floor(R*F.height);f===void 0&&(f=g(z,j));const Z=y?g(z,j):f;return Z.width=z,Z.height=j,Z.getContext("2d").drawImage(M,0,0,z,j),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+z+"x"+j+")."),Z}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),M;return M}function m(M){return M.generateMipmaps}function p(M){i.generateMipmap(M)}function v(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(M,y,A,R,F=!1){if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let z=y;if(y===i.RED&&(A===i.FLOAT&&(z=i.R32F),A===i.HALF_FLOAT&&(z=i.R16F),A===i.UNSIGNED_BYTE&&(z=i.R8)),y===i.RED_INTEGER&&(A===i.UNSIGNED_BYTE&&(z=i.R8UI),A===i.UNSIGNED_SHORT&&(z=i.R16UI),A===i.UNSIGNED_INT&&(z=i.R32UI),A===i.BYTE&&(z=i.R8I),A===i.SHORT&&(z=i.R16I),A===i.INT&&(z=i.R32I)),y===i.RG&&(A===i.FLOAT&&(z=i.RG32F),A===i.HALF_FLOAT&&(z=i.RG16F),A===i.UNSIGNED_BYTE&&(z=i.RG8)),y===i.RG_INTEGER&&(A===i.UNSIGNED_BYTE&&(z=i.RG8UI),A===i.UNSIGNED_SHORT&&(z=i.RG16UI),A===i.UNSIGNED_INT&&(z=i.RG32UI),A===i.BYTE&&(z=i.RG8I),A===i.SHORT&&(z=i.RG16I),A===i.INT&&(z=i.RG32I)),y===i.RGB_INTEGER&&(A===i.UNSIGNED_BYTE&&(z=i.RGB8UI),A===i.UNSIGNED_SHORT&&(z=i.RGB16UI),A===i.UNSIGNED_INT&&(z=i.RGB32UI),A===i.BYTE&&(z=i.RGB8I),A===i.SHORT&&(z=i.RGB16I),A===i.INT&&(z=i.RGB32I)),y===i.RGBA_INTEGER&&(A===i.UNSIGNED_BYTE&&(z=i.RGBA8UI),A===i.UNSIGNED_SHORT&&(z=i.RGBA16UI),A===i.UNSIGNED_INT&&(z=i.RGBA32UI),A===i.BYTE&&(z=i.RGBA8I),A===i.SHORT&&(z=i.RGBA16I),A===i.INT&&(z=i.RGBA32I)),y===i.RGB&&A===i.UNSIGNED_INT_5_9_9_9_REV&&(z=i.RGB9_E5),y===i.RGBA){const j=F?Pa:ie.getTransfer(R);A===i.FLOAT&&(z=i.RGBA32F),A===i.HALF_FLOAT&&(z=i.RGBA16F),A===i.UNSIGNED_BYTE&&(z=j===de?i.SRGB8_ALPHA8:i.RGBA8),A===i.UNSIGNED_SHORT_4_4_4_4&&(z=i.RGBA4),A===i.UNSIGNED_SHORT_5_5_5_1&&(z=i.RGB5_A1)}return(z===i.R16F||z===i.R32F||z===i.RG16F||z===i.RG32F||z===i.RGBA16F||z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),z}function x(M,y){let A;return M?y===null||y===gs||y===nr?A=i.DEPTH24_STENCIL8:y===gi?A=i.DEPTH32F_STENCIL8:y===to&&(A=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===gs||y===nr?A=i.DEPTH_COMPONENT24:y===gi?A=i.DEPTH_COMPONENT32F:y===to&&(A=i.DEPTH_COMPONENT16),A}function D(M,y){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==Nn&&M.minFilter!==qn?Math.log2(Math.max(y.width,y.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?y.mipmaps.length:1}function L(M){const y=M.target;y.removeEventListener("dispose",L),N(y),y.isVideoTexture&&u.delete(y)}function P(M){const y=M.target;y.removeEventListener("dispose",P),S(y)}function N(M){const y=n.get(M);if(y.__webglInit===void 0)return;const A=M.source,R=h.get(A);if(R){const F=R[y.__cacheKey];F.usedTimes--,F.usedTimes===0&&w(M),Object.keys(R).length===0&&h.delete(A)}n.remove(M)}function w(M){const y=n.get(M);i.deleteTexture(y.__webglTexture);const A=M.source,R=h.get(A);delete R[y.__cacheKey],o.memory.textures--}function S(M){const y=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let R=0;R<6;R++){if(Array.isArray(y.__webglFramebuffer[R]))for(let F=0;F<y.__webglFramebuffer[R].length;F++)i.deleteFramebuffer(y.__webglFramebuffer[R][F]);else i.deleteFramebuffer(y.__webglFramebuffer[R]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[R])}else{if(Array.isArray(y.__webglFramebuffer))for(let R=0;R<y.__webglFramebuffer.length;R++)i.deleteFramebuffer(y.__webglFramebuffer[R]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let R=0;R<y.__webglColorRenderbuffer.length;R++)y.__webglColorRenderbuffer[R]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[R]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const A=M.textures;for(let R=0,F=A.length;R<F;R++){const z=n.get(A[R]);z.__webglTexture&&(i.deleteTexture(z.__webglTexture),o.memory.textures--),n.remove(A[R])}n.remove(M)}let U=0;function Y(){U=0}function O(){const M=U;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),U+=1,M}function W(M){const y=[];return y.push(M.wrapS),y.push(M.wrapT),y.push(M.wrapR||0),y.push(M.magFilter),y.push(M.minFilter),y.push(M.anisotropy),y.push(M.internalFormat),y.push(M.format),y.push(M.type),y.push(M.generateMipmaps),y.push(M.premultiplyAlpha),y.push(M.flipY),y.push(M.unpackAlignment),y.push(M.colorSpace),y.join()}function V(M,y){const A=n.get(M);if(M.isVideoTexture&&rt(M),M.isRenderTargetTexture===!1&&M.version>0&&A.__version!==M.version){const R=M.image;if(R===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(R.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(A,M,y);return}}e.bindTexture(i.TEXTURE_2D,A.__webglTexture,i.TEXTURE0+y)}function B(M,y){const A=n.get(M);if(M.version>0&&A.__version!==M.version){at(A,M,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,A.__webglTexture,i.TEXTURE0+y)}function K(M,y){const A=n.get(M);if(M.version>0&&A.__version!==M.version){at(A,M,y);return}e.bindTexture(i.TEXTURE_3D,A.__webglTexture,i.TEXTURE0+y)}function H(M,y){const A=n.get(M);if(M.version>0&&A.__version!==M.version){gt(A,M,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+y)}const lt={[hc]:i.REPEAT,[fs]:i.CLAMP_TO_EDGE,[fc]:i.MIRRORED_REPEAT},_t={[Nn]:i.NEAREST,[G0]:i.NEAREST_MIPMAP_NEAREST,[vo]:i.NEAREST_MIPMAP_LINEAR,[qn]:i.LINEAR,[Ja]:i.LINEAR_MIPMAP_NEAREST,[ds]:i.LINEAR_MIPMAP_LINEAR},ct={[$0]:i.NEVER,[Q0]:i.ALWAYS,[Y0]:i.LESS,[Hp]:i.LEQUAL,[j0]:i.EQUAL,[J0]:i.GEQUAL,[K0]:i.GREATER,[Z0]:i.NOTEQUAL};function mt(M,y){if(y.type===gi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===qn||y.magFilter===Ja||y.magFilter===vo||y.magFilter===ds||y.minFilter===qn||y.minFilter===Ja||y.minFilter===vo||y.minFilter===ds)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,lt[y.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,lt[y.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,lt[y.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,_t[y.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,_t[y.minFilter]),y.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,ct[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Nn||y.minFilter!==vo&&y.minFilter!==ds||y.type===gi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const A=t.get("EXT_texture_filter_anisotropic");i.texParameterf(M,A.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ht(M,y){let A=!1;M.__webglInit===void 0&&(M.__webglInit=!0,y.addEventListener("dispose",L));const R=y.source;let F=h.get(R);F===void 0&&(F={},h.set(R,F));const z=W(y);if(z!==M.__cacheKey){F[z]===void 0&&(F[z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,A=!0),F[z].usedTimes++;const j=F[M.__cacheKey];j!==void 0&&(F[M.__cacheKey].usedTimes--,j.usedTimes===0&&w(y)),M.__cacheKey=z,M.__webglTexture=F[z].texture}return A}function at(M,y,A){let R=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(R=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(R=i.TEXTURE_3D);const F=Ht(M,y),z=y.source;e.bindTexture(R,M.__webglTexture,i.TEXTURE0+A);const j=n.get(z);if(z.version!==j.__version||F===!0){e.activeTexture(i.TEXTURE0+A);const Z=ie.getPrimaries(ie.workingColorSpace),st=y.colorSpace===Bi?null:ie.getPrimaries(y.colorSpace),bt=y.colorSpace===Bi||Z===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let ut=_(y.image,!1,s.maxTextureSize);ut=pt(y,ut);const ht=r.convert(y.format,y.colorSpace),yt=r.convert(y.type);let Dt=b(y.internalFormat,ht,yt,y.colorSpace,y.isVideoTexture);mt(R,y);let Mt;const Xt=y.mipmaps,jt=y.isVideoTexture!==!0,he=j.__version===void 0||F===!0,G=z.dataReady,wt=D(y,ut);if(y.isDepthTexture)Dt=x(y.format===ir,y.type),he&&(jt?e.texStorage2D(i.TEXTURE_2D,1,Dt,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Dt,ut.width,ut.height,0,ht,yt,null));else if(y.isDataTexture)if(Xt.length>0){jt&&he&&e.texStorage2D(i.TEXTURE_2D,wt,Dt,Xt[0].width,Xt[0].height);for(let ot=0,dt=Xt.length;ot<dt;ot++)Mt=Xt[ot],jt?G&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,Mt.width,Mt.height,ht,yt,Mt.data):e.texImage2D(i.TEXTURE_2D,ot,Dt,Mt.width,Mt.height,0,ht,yt,Mt.data);y.generateMipmaps=!1}else jt?(he&&e.texStorage2D(i.TEXTURE_2D,wt,Dt,ut.width,ut.height),G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut.width,ut.height,ht,yt,ut.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,ut.width,ut.height,0,ht,yt,ut.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){jt&&he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Dt,Xt[0].width,Xt[0].height,ut.depth);for(let ot=0,dt=Xt.length;ot<dt;ot++)if(Mt=Xt[ot],y.format!==Pn)if(ht!==null)if(jt){if(G)if(y.layerUpdates.size>0){const Pt=Ef(Mt.width,Mt.height,y.format,y.type);for(const Ct of y.layerUpdates){const Zt=Mt.data.subarray(Ct*Pt/Mt.data.BYTES_PER_ELEMENT,(Ct+1)*Pt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,Ct,Mt.width,Mt.height,1,ht,Zt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,Mt.width,Mt.height,ut.depth,ht,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,Dt,Mt.width,Mt.height,ut.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?G&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,Mt.width,Mt.height,ut.depth,ht,yt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,Dt,Mt.width,Mt.height,ut.depth,0,ht,yt,Mt.data)}else{jt&&he&&e.texStorage2D(i.TEXTURE_2D,wt,Dt,Xt[0].width,Xt[0].height);for(let ot=0,dt=Xt.length;ot<dt;ot++)Mt=Xt[ot],y.format!==Pn?ht!==null?jt?G&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,Mt.width,Mt.height,ht,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,Dt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?G&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,Mt.width,Mt.height,ht,yt,Mt.data):e.texImage2D(i.TEXTURE_2D,ot,Dt,Mt.width,Mt.height,0,ht,yt,Mt.data)}else if(y.isDataArrayTexture)if(jt){if(he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Dt,ut.width,ut.height,ut.depth),G)if(y.layerUpdates.size>0){const ot=Ef(ut.width,ut.height,y.format,y.type);for(const dt of y.layerUpdates){const Pt=ut.data.subarray(dt*ot/ut.data.BYTES_PER_ELEMENT,(dt+1)*ot/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,dt,ut.width,ut.height,1,ht,yt,Pt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,ht,yt,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,ut.width,ut.height,ut.depth,0,ht,yt,ut.data);else if(y.isData3DTexture)jt?(he&&e.texStorage3D(i.TEXTURE_3D,wt,Dt,ut.width,ut.height,ut.depth),G&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,ht,yt,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,ut.width,ut.height,ut.depth,0,ht,yt,ut.data);else if(y.isFramebufferTexture){if(he)if(jt)e.texStorage2D(i.TEXTURE_2D,wt,Dt,ut.width,ut.height);else{let ot=ut.width,dt=ut.height;for(let Pt=0;Pt<wt;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,Dt,ot,dt,0,ht,yt,null),ot>>=1,dt>>=1}}else if(Xt.length>0){if(jt&&he){const ot=nt(Xt[0]);e.texStorage2D(i.TEXTURE_2D,wt,Dt,ot.width,ot.height)}for(let ot=0,dt=Xt.length;ot<dt;ot++)Mt=Xt[ot],jt?G&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,ht,yt,Mt):e.texImage2D(i.TEXTURE_2D,ot,Dt,ht,yt,Mt);y.generateMipmaps=!1}else if(jt){if(he){const ot=nt(ut);e.texStorage2D(i.TEXTURE_2D,wt,Dt,ot.width,ot.height)}G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht,yt,ut)}else e.texImage2D(i.TEXTURE_2D,0,Dt,ht,yt,ut);m(y)&&p(R),j.__version=z.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function gt(M,y,A){if(y.image.length!==6)return;const R=Ht(M,y),F=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+A);const z=n.get(F);if(F.version!==z.__version||R===!0){e.activeTexture(i.TEXTURE0+A);const j=ie.getPrimaries(ie.workingColorSpace),Z=y.colorSpace===Bi?null:ie.getPrimaries(y.colorSpace),st=y.colorSpace===Bi||j===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);const bt=y.isCompressedTexture||y.image[0].isCompressedTexture,ut=y.image[0]&&y.image[0].isDataTexture,ht=[];for(let dt=0;dt<6;dt++)!bt&&!ut?ht[dt]=_(y.image[dt],!0,s.maxCubemapSize):ht[dt]=ut?y.image[dt].image:y.image[dt],ht[dt]=pt(y,ht[dt]);const yt=ht[0],Dt=r.convert(y.format,y.colorSpace),Mt=r.convert(y.type),Xt=b(y.internalFormat,Dt,Mt,y.colorSpace),jt=y.isVideoTexture!==!0,he=z.__version===void 0||R===!0,G=F.dataReady;let wt=D(y,yt);mt(i.TEXTURE_CUBE_MAP,y);let ot;if(bt){jt&&he&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Xt,yt.width,yt.height);for(let dt=0;dt<6;dt++){ot=ht[dt].mipmaps;for(let Pt=0;Pt<ot.length;Pt++){const Ct=ot[Pt];y.format!==Pn?Dt!==null?jt?G&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Pt,0,0,Ct.width,Ct.height,Dt,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Pt,Xt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Pt,0,0,Ct.width,Ct.height,Dt,Mt,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Pt,Xt,Ct.width,Ct.height,0,Dt,Mt,Ct.data)}}}else{if(ot=y.mipmaps,jt&&he){ot.length>0&&wt++;const dt=nt(ht[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Xt,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(ut){jt?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,ht[dt].width,ht[dt].height,Dt,Mt,ht[dt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Xt,ht[dt].width,ht[dt].height,0,Dt,Mt,ht[dt].data);for(let Pt=0;Pt<ot.length;Pt++){const Zt=ot[Pt].image[dt].image;jt?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Pt+1,0,0,Zt.width,Zt.height,Dt,Mt,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Pt+1,Xt,Zt.width,Zt.height,0,Dt,Mt,Zt.data)}}else{jt?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Dt,Mt,ht[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Xt,Dt,Mt,ht[dt]);for(let Pt=0;Pt<ot.length;Pt++){const Ct=ot[Pt];jt?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Pt+1,0,0,Dt,Mt,Ct.image[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Pt+1,Xt,Dt,Mt,Ct.image[dt])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),z.__version=F.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function At(M,y,A,R,F,z){const j=r.convert(A.format,A.colorSpace),Z=r.convert(A.type),st=b(A.internalFormat,j,Z,A.colorSpace),bt=n.get(y),ut=n.get(A);if(ut.__renderTarget=y,!bt.__hasExternalTextures){const ht=Math.max(1,y.width>>z),yt=Math.max(1,y.height>>z);F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?e.texImage3D(F,z,st,ht,yt,y.depth,0,j,Z,null):e.texImage2D(F,z,st,ht,yt,0,j,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,M),et(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,R,F,ut.__webglTexture,0,tt(y)):(F===i.TEXTURE_2D||F>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&F<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,R,F,ut.__webglTexture,z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(M,y,A){if(i.bindRenderbuffer(i.RENDERBUFFER,M),y.depthBuffer){const R=y.depthTexture,F=R&&R.isDepthTexture?R.type:null,z=x(y.stencilBuffer,F),j=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=tt(y);et(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z,z,y.width,y.height):A?i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,z,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,z,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,M)}else{const R=y.textures;for(let F=0;F<R.length;F++){const z=R[F],j=r.convert(z.format,z.colorSpace),Z=r.convert(z.type),st=b(z.internalFormat,j,Z,z.colorSpace),bt=tt(y);A&&et(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,st,y.width,y.height):et(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt,st,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,st,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function kt(M,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,M),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const R=n.get(y.depthTexture);R.__renderTarget=y,(!R.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),V(y.depthTexture,0);const F=R.__webglTexture,z=tt(y);if(y.depthTexture.format===js)et(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,F,0,z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,F,0);else if(y.depthTexture.format===ir)et(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,F,0,z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function Gt(M){const y=n.get(M),A=M.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==M.depthTexture){const R=M.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),R){const F=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,R.removeEventListener("dispose",F)};R.addEventListener("dispose",F),y.__depthDisposeCallback=F}y.__boundDepthTexture=R}if(M.depthTexture&&!y.__autoAllocateDepthBuffer){if(A)throw new Error("target.depthTexture not supported in Cube render targets");kt(y.__webglFramebuffer,M)}else if(A){y.__webglDepthbuffer=[];for(let R=0;R<6;R++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[R]),y.__webglDepthbuffer[R]===void 0)y.__webglDepthbuffer[R]=i.createRenderbuffer(),St(y.__webglDepthbuffer[R],M,!1);else{const F=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=y.__webglDepthbuffer[R];i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,F,i.RENDERBUFFER,z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),St(y.__webglDepthbuffer,M,!1);else{const R=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,F),i.framebufferRenderbuffer(i.FRAMEBUFFER,R,i.RENDERBUFFER,F)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(M,y,A){const R=n.get(M);y!==void 0&&At(R.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),A!==void 0&&Gt(M)}function _e(M){const y=M.texture,A=n.get(M),R=n.get(y);M.addEventListener("dispose",P);const F=M.textures,z=M.isWebGLCubeRenderTarget===!0,j=F.length>1;if(j||(R.__webglTexture===void 0&&(R.__webglTexture=i.createTexture()),R.__version=y.version,o.memory.textures++),z){A.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0){A.__webglFramebuffer[Z]=[];for(let st=0;st<y.mipmaps.length;st++)A.__webglFramebuffer[Z][st]=i.createFramebuffer()}else A.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){A.__webglFramebuffer=[];for(let Z=0;Z<y.mipmaps.length;Z++)A.__webglFramebuffer[Z]=i.createFramebuffer()}else A.__webglFramebuffer=i.createFramebuffer();if(j)for(let Z=0,st=F.length;Z<st;Z++){const bt=n.get(F[Z]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),o.memory.textures++)}if(M.samples>0&&et(M)===!1){A.__webglMultisampledFramebuffer=i.createFramebuffer(),A.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,A.__webglMultisampledFramebuffer);for(let Z=0;Z<F.length;Z++){const st=F[Z];A.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,A.__webglColorRenderbuffer[Z]);const bt=r.convert(st.format,st.colorSpace),ut=r.convert(st.type),ht=b(st.internalFormat,bt,ut,st.colorSpace,M.isXRRenderTarget===!0),yt=tt(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,ht,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,A.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(A.__webglDepthRenderbuffer=i.createRenderbuffer(),St(A.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(z){e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture),mt(i.TEXTURE_CUBE_MAP,y);for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0)for(let st=0;st<y.mipmaps.length;st++)At(A.__webglFramebuffer[Z][st],M,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,st);else At(A.__webglFramebuffer[Z],M,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);m(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(j){for(let Z=0,st=F.length;Z<st;Z++){const bt=F[Z],ut=n.get(bt);e.bindTexture(i.TEXTURE_2D,ut.__webglTexture),mt(i.TEXTURE_2D,bt),At(A.__webglFramebuffer,M,bt,i.COLOR_ATTACHMENT0+Z,i.TEXTURE_2D,0),m(bt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(Z=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,R.__webglTexture),mt(Z,y),y.mipmaps&&y.mipmaps.length>0)for(let st=0;st<y.mipmaps.length;st++)At(A.__webglFramebuffer[st],M,y,i.COLOR_ATTACHMENT0,Z,st);else At(A.__webglFramebuffer,M,y,i.COLOR_ATTACHMENT0,Z,0);m(y)&&p(Z),e.unbindTexture()}M.depthBuffer&&Gt(M)}function I(M){const y=M.textures;for(let A=0,R=y.length;A<R;A++){const F=y[A];if(m(F)){const z=v(M),j=n.get(F).__webglTexture;e.bindTexture(z,j),p(z),e.unbindTexture()}}}const k=[],C=[];function ft(M){if(M.samples>0){if(et(M)===!1){const y=M.textures,A=M.width,R=M.height;let F=i.COLOR_BUFFER_BIT;const z=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=n.get(M),Z=y.length>1;if(Z)for(let st=0;st<y.length;st++)e.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,j.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,j.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,j.__webglFramebuffer);for(let st=0;st<y.length;st++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(F|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(F|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,j.__webglColorRenderbuffer[st]);const bt=n.get(y[st]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,bt,0)}i.blitFramebuffer(0,0,A,R,0,0,A,R,F,i.NEAREST),l===!0&&(k.length=0,C.length=0,k.push(i.COLOR_ATTACHMENT0+st),M.depthBuffer&&M.resolveDepthBuffer===!1&&(k.push(z),C.push(z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,k))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let st=0;st<y.length;st++){e.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,j.__webglColorRenderbuffer[st]);const bt=n.get(y[st]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,j.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.TEXTURE_2D,bt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,j.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const y=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function tt(M){return Math.min(s.maxSamples,M.samples)}function et(M){const y=n.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function rt(M){const y=o.render.frame;u.get(M)!==y&&(u.set(M,y),M.update())}function pt(M,y){const A=M.colorSpace,R=M.format,F=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||A!==fr&&A!==Bi&&(ie.getTransfer(A)===de?(R!==Pn||F!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",A)),y}function nt(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=Y,this.setTexture2D=V,this.setTexture2DArray=B,this.setTexture3D=K,this.setTextureCube=H,this.rebindTextures=qt,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=et}function ib(i,t){function e(n,s=Bi){let r;const o=ie.getTransfer(s);if(n===Ei)return i.UNSIGNED_BYTE;if(n===du)return i.UNSIGNED_SHORT_4_4_4_4;if(n===pu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ip)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pp)return i.BYTE;if(n===Lp)return i.SHORT;if(n===to)return i.UNSIGNED_SHORT;if(n===fu)return i.INT;if(n===gs)return i.UNSIGNED_INT;if(n===gi)return i.FLOAT;if(n===ro)return i.HALF_FLOAT;if(n===Dp)return i.ALPHA;if(n===Np)return i.RGB;if(n===Pn)return i.RGBA;if(n===Up)return i.LUMINANCE;if(n===Fp)return i.LUMINANCE_ALPHA;if(n===js)return i.DEPTH_COMPONENT;if(n===ir)return i.DEPTH_STENCIL;if(n===Op)return i.RED;if(n===mu)return i.RED_INTEGER;if(n===Bp)return i.RG;if(n===gu)return i.RG_INTEGER;if(n===_u)return i.RGBA_INTEGER;if(n===Jo||n===Qo||n===ta||n===ea)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Jo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Jo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===dc||n===pc||n===mc||n===gc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===dc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_c||n===vc||n===xc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_c||n===vc)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===yc||n===Sc||n===Mc||n===Ec||n===bc||n===wc||n===Tc||n===Ac||n===Cc||n===Rc||n===Pc||n===Lc||n===Ic||n===Dc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===yc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ec)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Tc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ac)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ic)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Dc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===na||n===Nc||n===Uc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===na)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Uc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zp||n===Fc||n===Oc||n===Bc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===na)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class sb extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Or extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rb={type:"move"};class Al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Or,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Or,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Or,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Or;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ob=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ab=`
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

}`;class lb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Je,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Yi({vertexShader:ob,fragmentShader:ab,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Oe(new La(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cb extends dr{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new lb,m=e.getContextAttributes();let p=null,v=null;const b=[],x=[],D=new Vt;let L=null;const P=new un;P.viewport=new pe;const N=new un;N.viewport=new pe;const w=[P,N],S=new sb;let U=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let gt=b[at];return gt===void 0&&(gt=new Al,b[at]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(at){let gt=b[at];return gt===void 0&&(gt=new Al,b[at]=gt),gt.getGripSpace()},this.getHand=function(at){let gt=b[at];return gt===void 0&&(gt=new Al,b[at]=gt),gt.getHandSpace()};function O(at){const gt=x.indexOf(at.inputSource);if(gt===-1)return;const At=b[gt];At!==void 0&&(At.update(at.inputSource,at.frame,c||o),At.dispatchEvent({type:at.type,data:at.inputSource}))}function W(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",V);for(let at=0;at<b.length;at++){const gt=x[at];gt!==null&&(x[at]=null,b[at].disconnect(gt))}U=null,Y=null,_.reset(),t.setRenderTarget(p),d=null,h=null,f=null,s=null,v=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){r=at,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){a=at,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(at){c=at},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(at){if(s=at,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",W),s.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const gt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,gt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new _s(d.framebufferWidth,d.framebufferHeight,{format:Pn,type:Ei,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let gt=null,At=null,St=null;m.depth&&(St=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=m.stencil?ir:js,At=m.stencil?nr:gs);const kt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};f=new XRWebGLBinding(s,e),h=f.createProjectionLayer(kt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new _s(h.textureWidth,h.textureHeight,{format:Pn,type:Ei,depthTexture:new em(h.textureWidth,h.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ht.setContext(s),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(at){for(let gt=0;gt<at.removed.length;gt++){const At=at.removed[gt],St=x.indexOf(At);St>=0&&(x[St]=null,b[St].disconnect(At))}for(let gt=0;gt<at.added.length;gt++){const At=at.added[gt];let St=x.indexOf(At);if(St===-1){for(let Gt=0;Gt<b.length;Gt++)if(Gt>=x.length){x.push(At),St=Gt;break}else if(x[Gt]===null){x[Gt]=At,St=Gt;break}if(St===-1)break}const kt=b[St];kt&&kt.connect(At)}}const B=new $,K=new $;function H(at,gt,At){B.setFromMatrixPosition(gt.matrixWorld),K.setFromMatrixPosition(At.matrixWorld);const St=B.distanceTo(K),kt=gt.projectionMatrix.elements,Gt=At.projectionMatrix.elements,qt=kt[14]/(kt[10]-1),_e=kt[14]/(kt[10]+1),I=(kt[9]+1)/kt[5],k=(kt[9]-1)/kt[5],C=(kt[8]-1)/kt[0],ft=(Gt[8]+1)/Gt[0],tt=qt*C,et=qt*ft,rt=St/(-C+ft),pt=rt*-C;if(gt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(pt),at.translateZ(rt),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),kt[10]===-1)at.projectionMatrix.copy(gt.projectionMatrix),at.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const nt=qt+rt,M=_e+rt,y=tt-pt,A=et+(St-pt),R=I*_e/M*nt,F=k*_e/M*nt;at.projectionMatrix.makePerspective(y,A,R,F,nt,M),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function lt(at,gt){gt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(gt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(s===null)return;let gt=at.near,At=at.far;_.texture!==null&&(_.depthNear>0&&(gt=_.depthNear),_.depthFar>0&&(At=_.depthFar)),S.near=N.near=P.near=gt,S.far=N.far=P.far=At,(U!==S.near||Y!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),U=S.near,Y=S.far),P.layers.mask=at.layers.mask|2,N.layers.mask=at.layers.mask|4,S.layers.mask=P.layers.mask|N.layers.mask;const St=at.parent,kt=S.cameras;lt(S,St);for(let Gt=0;Gt<kt.length;Gt++)lt(kt[Gt],St);kt.length===2?H(S,P,N):S.projectionMatrix.copy(P.projectionMatrix),_t(at,S,St)};function _t(at,gt,At){At===null?at.matrix.copy(gt.matrixWorld):(at.matrix.copy(At.matrixWorld),at.matrix.invert(),at.matrix.multiply(gt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(gt.projectionMatrix),at.projectionMatrixInverse.copy(gt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=zc*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(at){l=at,h!==null&&(h.fixedFoveation=at),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=at)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let ct=null;function mt(at,gt){if(u=gt.getViewerPose(c||o),g=gt,u!==null){const At=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let St=!1;At.length!==S.cameras.length&&(S.cameras.length=0,St=!0);for(let Gt=0;Gt<At.length;Gt++){const qt=At[Gt];let _e=null;if(d!==null)_e=d.getViewport(qt);else{const k=f.getViewSubImage(h,qt);_e=k.viewport,Gt===0&&(t.setRenderTargetTextures(v,k.colorTexture,h.ignoreDepthValues?void 0:k.depthStencilTexture),t.setRenderTarget(v))}let I=w[Gt];I===void 0&&(I=new un,I.layers.enable(Gt),I.viewport=new pe,w[Gt]=I),I.matrix.fromArray(qt.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(qt.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(_e.x,_e.y,_e.width,_e.height),Gt===0&&(S.matrix.copy(I.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),St===!0&&S.cameras.push(I)}const kt=s.enabledFeatures;if(kt&&kt.includes("depth-sensing")){const Gt=f.getDepthInformation(At[0]);Gt&&Gt.isValid&&Gt.texture&&_.init(t,Gt,s.renderState)}}for(let At=0;At<b.length;At++){const St=x[At],kt=b[At];St!==null&&kt!==void 0&&kt.update(St,gt,c||o)}ct&&ct(at,gt),gt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:gt}),g=null}const Ht=new Qp;Ht.setAnimationLoop(mt),this.setAnimationLoop=function(at){ct=at},this.dispose=function(){}}}const ss=new qe,ub=new be;function hb(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Kp(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,b,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),b=v.envMap,x=v.envMapRotation;b&&(m.envMap.value=b,ss.copy(x),ss.x*=-1,ss.y*=-1,ss.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),m.envMapRotation.value.setFromMatrix4(ub.makeRotationFromEuler(ss)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fb(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){const x=b.program;n.uniformBlockBinding(v,x)}function c(v,b){let x=s[v.id];x===void 0&&(g(v),x=u(v),s[v.id]=x,v.addEventListener("dispose",m));const D=b.program;n.updateUBOMapping(v,D);const L=t.render.frame;r[v.id]!==L&&(h(v),r[v.id]=L)}function u(v){const b=f();v.__bindingPointIndex=b;const x=i.createBuffer(),D=v.__size,L=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,D,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,x),x}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const b=s[v.id],x=v.uniforms,D=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let L=0,P=x.length;L<P;L++){const N=Array.isArray(x[L])?x[L]:[x[L]];for(let w=0,S=N.length;w<S;w++){const U=N[w];if(d(U,L,w,D)===!0){const Y=U.__offset,O=Array.isArray(U.value)?U.value:[U.value];let W=0;for(let V=0;V<O.length;V++){const B=O[V],K=_(B);typeof B=="number"||typeof B=="boolean"?(U.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,Y+W,U.__data)):B.isMatrix3?(U.__data[0]=B.elements[0],U.__data[1]=B.elements[1],U.__data[2]=B.elements[2],U.__data[3]=0,U.__data[4]=B.elements[3],U.__data[5]=B.elements[4],U.__data[6]=B.elements[5],U.__data[7]=0,U.__data[8]=B.elements[6],U.__data[9]=B.elements[7],U.__data[10]=B.elements[8],U.__data[11]=0):(B.toArray(U.__data,W),W+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,b,x,D){const L=v.value,P=b+"_"+x;if(D[P]===void 0)return typeof L=="number"||typeof L=="boolean"?D[P]=L:D[P]=L.clone(),!0;{const N=D[P];if(typeof L=="number"||typeof L=="boolean"){if(N!==L)return D[P]=L,!0}else if(N.equals(L)===!1)return N.copy(L),!0}return!1}function g(v){const b=v.uniforms;let x=0;const D=16;for(let P=0,N=b.length;P<N;P++){const w=Array.isArray(b[P])?b[P]:[b[P]];for(let S=0,U=w.length;S<U;S++){const Y=w[S],O=Array.isArray(Y.value)?Y.value:[Y.value];for(let W=0,V=O.length;W<V;W++){const B=O[W],K=_(B),H=x%D,lt=H%K.boundary,_t=H+lt;x+=lt,_t!==0&&D-_t<K.storage&&(x+=D-_t),Y.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=x,x+=K.storage}}}const L=x%D;return L>0&&(x+=D-L),v.__size=x,v.__cache={},this}function _(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),b}function m(v){const b=v.target;b.removeEventListener("dispose",m);const x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class db{constructor(t={}){const{canvas:e=ex(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const v=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xn,this.toneMapping=Gi,this.toneMappingExposure=1;const x=this;let D=!1,L=0,P=0,N=null,w=-1,S=null;const U=new pe,Y=new pe;let O=null;const W=new ne(0);let V=0,B=e.width,K=e.height,H=1,lt=null,_t=null;const ct=new pe(0,0,B,K),mt=new pe(0,0,B,K);let Ht=!1;const at=new yu;let gt=!1,At=!1;const St=new be,kt=new be,Gt=new $,qt=new pe,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let I=!1;function k(){return N===null?H:1}let C=n;function ft(T,q){return e.getContext(T,q)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hu}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),C===null){const q="webgl2";if(C=ft(q,T),C===null)throw ft(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let tt,et,rt,pt,nt,M,y,A,R,F,z,j,Z,st,bt,ut,ht,yt,Dt,Mt,Xt,jt,he,G;function wt(){tt=new vM(C),tt.init(),jt=new ib(C,tt),et=new fM(C,tt,t,jt),rt=new tb(C,tt),et.reverseDepthBuffer&&h&&rt.buffers.depth.setReversed(!0),pt=new SM(C),nt=new zE,M=new nb(C,tt,rt,nt,et,jt,pt),y=new pM(x),A=new _M(x),R=new Cx(C),he=new uM(C,R),F=new xM(C,R,pt,he),z=new EM(C,F,R,pt),Dt=new MM(C,et,M),ut=new dM(nt),j=new BE(x,y,A,tt,et,he,ut),Z=new hb(x,nt),st=new HE,bt=new $E(tt),yt=new cM(x,y,A,rt,z,d,l),ht=new JE(x,z,et),G=new fb(C,pt,et,rt),Mt=new hM(C,tt,pt),Xt=new yM(C,tt,pt),pt.programs=j.programs,x.capabilities=et,x.extensions=tt,x.properties=nt,x.renderLists=st,x.shadowMap=ht,x.state=rt,x.info=pt}wt();const ot=new cb(x,C);this.xr=ot,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const T=tt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=tt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(T){T!==void 0&&(H=T,this.setSize(B,K,!1))},this.getSize=function(T){return T.set(B,K)},this.setSize=function(T,q,J=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=T,K=q,e.width=Math.floor(T*H),e.height=Math.floor(q*H),J===!0&&(e.style.width=T+"px",e.style.height=q+"px"),this.setViewport(0,0,T,q)},this.getDrawingBufferSize=function(T){return T.set(B*H,K*H).floor()},this.setDrawingBufferSize=function(T,q,J){B=T,K=q,H=J,e.width=Math.floor(T*J),e.height=Math.floor(q*J),this.setViewport(0,0,T,q)},this.getCurrentViewport=function(T){return T.copy(U)},this.getViewport=function(T){return T.copy(ct)},this.setViewport=function(T,q,J,Q){T.isVector4?ct.set(T.x,T.y,T.z,T.w):ct.set(T,q,J,Q),rt.viewport(U.copy(ct).multiplyScalar(H).round())},this.getScissor=function(T){return T.copy(mt)},this.setScissor=function(T,q,J,Q){T.isVector4?mt.set(T.x,T.y,T.z,T.w):mt.set(T,q,J,Q),rt.scissor(Y.copy(mt).multiplyScalar(H).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(T){rt.setScissorTest(Ht=T)},this.setOpaqueSort=function(T){lt=T},this.setTransparentSort=function(T){_t=T},this.getClearColor=function(T){return T.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor.apply(yt,arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha.apply(yt,arguments)},this.clear=function(T=!0,q=!0,J=!0){let Q=0;if(T){let X=!1;if(N!==null){const vt=N.texture.format;X=vt===_u||vt===gu||vt===mu}if(X){const vt=N.texture.type,Rt=vt===Ei||vt===gs||vt===to||vt===nr||vt===du||vt===pu,Ut=yt.getClearColor(),Ft=yt.getClearAlpha(),$t=Ut.r,Jt=Ut.g,Ot=Ut.b;Rt?(g[0]=$t,g[1]=Jt,g[2]=Ot,g[3]=Ft,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=$t,_[1]=Jt,_[2]=Ot,_[3]=Ft,C.clearBufferiv(C.COLOR,0,_))}else Q|=C.COLOR_BUFFER_BIT}q&&(Q|=C.DEPTH_BUFFER_BIT),J&&(Q|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),st.dispose(),bt.dispose(),nt.dispose(),y.dispose(),A.dispose(),z.dispose(),he.dispose(),G.dispose(),j.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Ru),ot.removeEventListener("sessionend",Pu),Ki.stop()};function dt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const T=pt.autoReset,q=ht.enabled,J=ht.autoUpdate,Q=ht.needsUpdate,X=ht.type;wt(),pt.autoReset=T,ht.enabled=q,ht.autoUpdate=J,ht.needsUpdate=Q,ht.type=X}function Ct(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Zt(T){const q=T.target;q.removeEventListener("dispose",Zt),we(q)}function we(T){ze(T),nt.remove(T)}function ze(T){const q=nt.get(T).programs;q!==void 0&&(q.forEach(function(J){j.releaseProgram(J)}),T.isShaderMaterial&&j.releaseShaderCache(T))}this.renderBufferDirect=function(T,q,J,Q,X,vt){q===null&&(q=_e);const Rt=X.isMesh&&X.matrixWorld.determinant()<0,Ut=_m(T,q,J,Q,X);rt.setMaterial(Q,Rt);let Ft=J.index,$t=1;if(Q.wireframe===!0){if(Ft=F.getWireframeAttribute(J),Ft===void 0)return;$t=2}const Jt=J.drawRange,Ot=J.attributes.position;let se=Jt.start*$t,ve=(Jt.start+Jt.count)*$t;vt!==null&&(se=Math.max(se,vt.start*$t),ve=Math.min(ve,(vt.start+vt.count)*$t)),Ft!==null?(se=Math.max(se,0),ve=Math.min(ve,Ft.count)):Ot!=null&&(se=Math.max(se,0),ve=Math.min(ve,Ot.count));const ye=ve-se;if(ye<0||ye===1/0)return;he.setup(X,Q,Ut,J,Ft);let Qe,le=Mt;if(Ft!==null&&(Qe=R.get(Ft),le=Xt,le.setIndex(Qe)),X.isMesh)Q.wireframe===!0?(rt.setLineWidth(Q.wireframeLinewidth*k()),le.setMode(C.LINES)):le.setMode(C.TRIANGLES);else if(X.isLine){let zt=Q.linewidth;zt===void 0&&(zt=1),rt.setLineWidth(zt*k()),X.isLineSegments?le.setMode(C.LINES):X.isLineLoop?le.setMode(C.LINE_LOOP):le.setMode(C.LINE_STRIP)}else X.isPoints?le.setMode(C.POINTS):X.isSprite&&le.setMode(C.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)le.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))le.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const zt=X._multiDrawStarts,ti=X._multiDrawCounts,ce=X._multiDrawCount,En=Ft?R.get(Ft).bytesPerElement:1,ys=nt.get(Q).currentProgram.getUniforms();for(let on=0;on<ce;on++)ys.setValue(C,"_gl_DrawID",on),le.render(zt[on]/En,ti[on])}else if(X.isInstancedMesh)le.renderInstances(se,ye,X.count);else if(J.isInstancedBufferGeometry){const zt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ti=Math.min(J.instanceCount,zt);le.renderInstances(se,ye,ti)}else le.render(se,ye)};function fe(T,q,J){T.transparent===!0&&T.side===Wn&&T.forceSinglePass===!1?(T.side=rn,T.needsUpdate=!0,ho(T,q,J),T.side=$i,T.needsUpdate=!0,ho(T,q,J),T.side=Wn):ho(T,q,J)}this.compile=function(T,q,J=null){J===null&&(J=T),p=bt.get(J),p.init(q),b.push(p),J.traverseVisible(function(X){X.isLight&&X.layers.test(q.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),T!==J&&T.traverseVisible(function(X){X.isLight&&X.layers.test(q.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();const Q=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const vt=X.material;if(vt)if(Array.isArray(vt))for(let Rt=0;Rt<vt.length;Rt++){const Ut=vt[Rt];fe(Ut,J,X),Q.add(Ut)}else fe(vt,J,X),Q.add(vt)}),b.pop(),p=null,Q},this.compileAsync=function(T,q,J=null){const Q=this.compile(T,q,J);return new Promise(X=>{function vt(){if(Q.forEach(function(Rt){nt.get(Rt).currentProgram.isReady()&&Q.delete(Rt)}),Q.size===0){X(T);return}setTimeout(vt,10)}tt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Mn=null;function Qn(T){Mn&&Mn(T)}function Ru(){Ki.stop()}function Pu(){Ki.start()}const Ki=new Qp;Ki.setAnimationLoop(Qn),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(T){Mn=T,ot.setAnimationLoop(T),T===null?Ki.stop():Ki.start()},ot.addEventListener("sessionstart",Ru),ot.addEventListener("sessionend",Pu),this.render=function(T,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(q),q=ot.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,q,N),p=bt.get(T,b.length),p.init(q),b.push(p),kt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),at.setFromProjectionMatrix(kt),At=this.localClippingEnabled,gt=ut.init(this.clippingPlanes,At),m=st.get(T,v.length),m.init(),v.push(m),ot.enabled===!0&&ot.isPresenting===!0){const vt=x.xr.getDepthSensingMesh();vt!==null&&Na(vt,q,-1/0,x.sortObjects)}Na(T,q,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(lt,_t),I=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,I&&yt.addToRenderList(m,T),this.info.render.frame++,gt===!0&&ut.beginShadows();const J=p.state.shadowsArray;ht.render(J,T,q),gt===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,X=m.transmissive;if(p.setupLights(),q.isArrayCamera){const vt=q.cameras;if(X.length>0)for(let Rt=0,Ut=vt.length;Rt<Ut;Rt++){const Ft=vt[Rt];Iu(Q,X,T,Ft)}I&&yt.render(T);for(let Rt=0,Ut=vt.length;Rt<Ut;Rt++){const Ft=vt[Rt];Lu(m,T,Ft,Ft.viewport)}}else X.length>0&&Iu(Q,X,T,q),I&&yt.render(T),Lu(m,T,q);N!==null&&(M.updateMultisampleRenderTarget(N),M.updateRenderTargetMipmap(N)),T.isScene===!0&&T.onAfterRender(x,T,q),he.resetDefaultState(),w=-1,S=null,b.pop(),b.length>0?(p=b[b.length-1],gt===!0&&ut.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Na(T,q,J,Q){if(T.visible===!1)return;if(T.layers.test(q.layers)){if(T.isGroup)J=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(q);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||at.intersectsSprite(T)){Q&&qt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(kt);const Rt=z.update(T),Ut=T.material;Ut.visible&&m.push(T,Rt,Ut,J,qt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||at.intersectsObject(T))){const Rt=z.update(T),Ut=T.material;if(Q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),qt.copy(T.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),qt.copy(Rt.boundingSphere.center)),qt.applyMatrix4(T.matrixWorld).applyMatrix4(kt)),Array.isArray(Ut)){const Ft=Rt.groups;for(let $t=0,Jt=Ft.length;$t<Jt;$t++){const Ot=Ft[$t],se=Ut[Ot.materialIndex];se&&se.visible&&m.push(T,Rt,se,J,qt.z,Ot)}}else Ut.visible&&m.push(T,Rt,Ut,J,qt.z,null)}}const vt=T.children;for(let Rt=0,Ut=vt.length;Rt<Ut;Rt++)Na(vt[Rt],q,J,Q)}function Lu(T,q,J,Q){const X=T.opaque,vt=T.transmissive,Rt=T.transparent;p.setupLightsView(J),gt===!0&&ut.setGlobalState(x.clippingPlanes,J),Q&&rt.viewport(U.copy(Q)),X.length>0&&uo(X,q,J),vt.length>0&&uo(vt,q,J),Rt.length>0&&uo(Rt,q,J),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function Iu(T,q,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new _s(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?ro:Ei,minFilter:ds,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const vt=p.state.transmissionRenderTarget[Q.id],Rt=Q.viewport||U;vt.setSize(Rt.z,Rt.w);const Ut=x.getRenderTarget();x.setRenderTarget(vt),x.getClearColor(W),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),x.clear(),I&&yt.render(J);const Ft=x.toneMapping;x.toneMapping=Gi;const $t=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),gt===!0&&ut.setGlobalState(x.clippingPlanes,Q),uo(T,J,Q),M.updateMultisampleRenderTarget(vt),M.updateRenderTargetMipmap(vt),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Ot=0,se=q.length;Ot<se;Ot++){const ve=q[Ot],ye=ve.object,Qe=ve.geometry,le=ve.material,zt=ve.group;if(le.side===Wn&&ye.layers.test(Q.layers)){const ti=le.side;le.side=rn,le.needsUpdate=!0,Du(ye,J,Q,Qe,le,zt),le.side=ti,le.needsUpdate=!0,Jt=!0}}Jt===!0&&(M.updateMultisampleRenderTarget(vt),M.updateRenderTargetMipmap(vt))}x.setRenderTarget(Ut),x.setClearColor(W,V),$t!==void 0&&(Q.viewport=$t),x.toneMapping=Ft}function uo(T,q,J){const Q=q.isScene===!0?q.overrideMaterial:null;for(let X=0,vt=T.length;X<vt;X++){const Rt=T[X],Ut=Rt.object,Ft=Rt.geometry,$t=Q===null?Rt.material:Q,Jt=Rt.group;Ut.layers.test(J.layers)&&Du(Ut,q,J,Ft,$t,Jt)}}function Du(T,q,J,Q,X,vt){T.onBeforeRender(x,q,J,Q,X,vt),T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(x,q,J,Q,T,vt),X.transparent===!0&&X.side===Wn&&X.forceSinglePass===!1?(X.side=rn,X.needsUpdate=!0,x.renderBufferDirect(J,q,Q,X,T,vt),X.side=$i,X.needsUpdate=!0,x.renderBufferDirect(J,q,Q,X,T,vt),X.side=Wn):x.renderBufferDirect(J,q,Q,X,T,vt),T.onAfterRender(x,q,J,Q,X,vt)}function ho(T,q,J){q.isScene!==!0&&(q=_e);const Q=nt.get(T),X=p.state.lights,vt=p.state.shadowsArray,Rt=X.state.version,Ut=j.getParameters(T,X.state,vt,q,J),Ft=j.getProgramCacheKey(Ut);let $t=Q.programs;Q.environment=T.isMeshStandardMaterial?q.environment:null,Q.fog=q.fog,Q.envMap=(T.isMeshStandardMaterial?A:y).get(T.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&T.envMap===null?q.environmentRotation:T.envMapRotation,$t===void 0&&(T.addEventListener("dispose",Zt),$t=new Map,Q.programs=$t);let Jt=$t.get(Ft);if(Jt!==void 0){if(Q.currentProgram===Jt&&Q.lightsStateVersion===Rt)return Uu(T,Ut),Jt}else Ut.uniforms=j.getUniforms(T),T.onBeforeCompile(Ut,x),Jt=j.acquireProgram(Ut,Ft),$t.set(Ft,Jt),Q.uniforms=Ut.uniforms;const Ot=Q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ot.clippingPlanes=ut.uniform),Uu(T,Ut),Q.needsLights=xm(T),Q.lightsStateVersion=Rt,Q.needsLights&&(Ot.ambientLightColor.value=X.state.ambient,Ot.lightProbe.value=X.state.probe,Ot.directionalLights.value=X.state.directional,Ot.directionalLightShadows.value=X.state.directionalShadow,Ot.spotLights.value=X.state.spot,Ot.spotLightShadows.value=X.state.spotShadow,Ot.rectAreaLights.value=X.state.rectArea,Ot.ltc_1.value=X.state.rectAreaLTC1,Ot.ltc_2.value=X.state.rectAreaLTC2,Ot.pointLights.value=X.state.point,Ot.pointLightShadows.value=X.state.pointShadow,Ot.hemisphereLights.value=X.state.hemi,Ot.directionalShadowMap.value=X.state.directionalShadowMap,Ot.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ot.spotShadowMap.value=X.state.spotShadowMap,Ot.spotLightMatrix.value=X.state.spotLightMatrix,Ot.spotLightMap.value=X.state.spotLightMap,Ot.pointShadowMap.value=X.state.pointShadowMap,Ot.pointShadowMatrix.value=X.state.pointShadowMatrix),Q.currentProgram=Jt,Q.uniformsList=null,Jt}function Nu(T){if(T.uniformsList===null){const q=T.currentProgram.getUniforms();T.uniformsList=ia.seqWithValue(q.seq,T.uniforms)}return T.uniformsList}function Uu(T,q){const J=nt.get(T);J.outputColorSpace=q.outputColorSpace,J.batching=q.batching,J.batchingColor=q.batchingColor,J.instancing=q.instancing,J.instancingColor=q.instancingColor,J.instancingMorph=q.instancingMorph,J.skinning=q.skinning,J.morphTargets=q.morphTargets,J.morphNormals=q.morphNormals,J.morphColors=q.morphColors,J.morphTargetsCount=q.morphTargetsCount,J.numClippingPlanes=q.numClippingPlanes,J.numIntersection=q.numClipIntersection,J.vertexAlphas=q.vertexAlphas,J.vertexTangents=q.vertexTangents,J.toneMapping=q.toneMapping}function _m(T,q,J,Q,X){q.isScene!==!0&&(q=_e),M.resetTextureUnits();const vt=q.fog,Rt=Q.isMeshStandardMaterial?q.environment:null,Ut=N===null?x.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:fr,Ft=(Q.isMeshStandardMaterial?A:y).get(Q.envMap||Rt),$t=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Jt=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ot=!!J.morphAttributes.position,se=!!J.morphAttributes.normal,ve=!!J.morphAttributes.color;let ye=Gi;Q.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(ye=x.toneMapping);const Qe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,le=Qe!==void 0?Qe.length:0,zt=nt.get(Q),ti=p.state.lights;if(gt===!0&&(At===!0||T!==S)){const gn=T===S&&Q.id===w;ut.setState(Q,T,gn)}let ce=!1;Q.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==ti.state.version||zt.outputColorSpace!==Ut||X.isBatchedMesh&&zt.batching===!1||!X.isBatchedMesh&&zt.batching===!0||X.isBatchedMesh&&zt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&zt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&zt.instancing===!1||!X.isInstancedMesh&&zt.instancing===!0||X.isSkinnedMesh&&zt.skinning===!1||!X.isSkinnedMesh&&zt.skinning===!0||X.isInstancedMesh&&zt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&zt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&zt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&zt.instancingMorph===!1&&X.morphTexture!==null||zt.envMap!==Ft||Q.fog===!0&&zt.fog!==vt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==ut.numPlanes||zt.numIntersection!==ut.numIntersection)||zt.vertexAlphas!==$t||zt.vertexTangents!==Jt||zt.morphTargets!==Ot||zt.morphNormals!==se||zt.morphColors!==ve||zt.toneMapping!==ye||zt.morphTargetsCount!==le)&&(ce=!0):(ce=!0,zt.__version=Q.version);let En=zt.currentProgram;ce===!0&&(En=ho(Q,q,X));let ys=!1,on=!1,gr=!1;const Se=En.getUniforms(),Fn=zt.uniforms;if(rt.useProgram(En.program)&&(ys=!0,on=!0,gr=!0),Q.id!==w&&(w=Q.id,on=!0),ys||S!==T){rt.buffers.depth.getReversed()?(St.copy(T.projectionMatrix),ix(St),sx(St),Se.setValue(C,"projectionMatrix",St)):Se.setValue(C,"projectionMatrix",T.projectionMatrix),Se.setValue(C,"viewMatrix",T.matrixWorldInverse);const Ti=Se.map.cameraPosition;Ti!==void 0&&Ti.setValue(C,Gt.setFromMatrixPosition(T.matrixWorld)),et.logarithmicDepthBuffer&&Se.setValue(C,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Se.setValue(C,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,on=!0,gr=!0)}if(X.isSkinnedMesh){Se.setOptional(C,X,"bindMatrix"),Se.setOptional(C,X,"bindMatrixInverse");const gn=X.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Se.setValue(C,"boneTexture",gn.boneTexture,M))}X.isBatchedMesh&&(Se.setOptional(C,X,"batchingTexture"),Se.setValue(C,"batchingTexture",X._matricesTexture,M),Se.setOptional(C,X,"batchingIdTexture"),Se.setValue(C,"batchingIdTexture",X._indirectTexture,M),Se.setOptional(C,X,"batchingColorTexture"),X._colorsTexture!==null&&Se.setValue(C,"batchingColorTexture",X._colorsTexture,M));const _r=J.morphAttributes;if((_r.position!==void 0||_r.normal!==void 0||_r.color!==void 0)&&Dt.update(X,J,En),(on||zt.receiveShadow!==X.receiveShadow)&&(zt.receiveShadow=X.receiveShadow,Se.setValue(C,"receiveShadow",X.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Fn.envMap.value=Ft,Fn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&q.environment!==null&&(Fn.envMapIntensity.value=q.environmentIntensity),on&&(Se.setValue(C,"toneMappingExposure",x.toneMappingExposure),zt.needsLights&&vm(Fn,gr),vt&&Q.fog===!0&&Z.refreshFogUniforms(Fn,vt),Z.refreshMaterialUniforms(Fn,Q,H,K,p.state.transmissionRenderTarget[T.id]),ia.upload(C,Nu(zt),Fn,M)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(ia.upload(C,Nu(zt),Fn,M),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Se.setValue(C,"center",X.center),Se.setValue(C,"modelViewMatrix",X.modelViewMatrix),Se.setValue(C,"normalMatrix",X.normalMatrix),Se.setValue(C,"modelMatrix",X.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const gn=Q.uniformsGroups;for(let Ti=0,Ai=gn.length;Ti<Ai;Ti++){const Fu=gn[Ti];G.update(Fu,En),G.bind(Fu,En)}}return En}function vm(T,q){T.ambientLightColor.needsUpdate=q,T.lightProbe.needsUpdate=q,T.directionalLights.needsUpdate=q,T.directionalLightShadows.needsUpdate=q,T.pointLights.needsUpdate=q,T.pointLightShadows.needsUpdate=q,T.spotLights.needsUpdate=q,T.spotLightShadows.needsUpdate=q,T.rectAreaLights.needsUpdate=q,T.hemisphereLights.needsUpdate=q}function xm(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(T,q,J){nt.get(T.texture).__webglTexture=q,nt.get(T.depthTexture).__webglTexture=J;const Q=nt.get(T);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=J===void 0,Q.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,q){const J=nt.get(T);J.__webglFramebuffer=q,J.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(T,q=0,J=0){N=T,L=q,P=J;let Q=!0,X=null,vt=!1,Rt=!1;if(T){const Ft=nt.get(T);if(Ft.__useDefaultFramebuffer!==void 0)rt.bindFramebuffer(C.FRAMEBUFFER,null),Q=!1;else if(Ft.__webglFramebuffer===void 0)M.setupRenderTarget(T);else if(Ft.__hasExternalTextures)M.rebindTextures(T,nt.get(T.texture).__webglTexture,nt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ot=T.depthTexture;if(Ft.__boundDepthTexture!==Ot){if(Ot!==null&&nt.has(Ot)&&(T.width!==Ot.image.width||T.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(T)}}const $t=T.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Rt=!0);const Jt=nt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Jt[q])?X=Jt[q][J]:X=Jt[q],vt=!0):T.samples>0&&M.useMultisampledRTT(T)===!1?X=nt.get(T).__webglMultisampledFramebuffer:Array.isArray(Jt)?X=Jt[J]:X=Jt,U.copy(T.viewport),Y.copy(T.scissor),O=T.scissorTest}else U.copy(ct).multiplyScalar(H).floor(),Y.copy(mt).multiplyScalar(H).floor(),O=Ht;if(rt.bindFramebuffer(C.FRAMEBUFFER,X)&&Q&&rt.drawBuffers(T,X),rt.viewport(U),rt.scissor(Y),rt.setScissorTest(O),vt){const Ft=nt.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ft.__webglTexture,J)}else if(Rt){const Ft=nt.get(T.texture),$t=q||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ft.__webglTexture,J||0,$t)}w=-1},this.readRenderTargetPixels=function(T,q,J,Q,X,vt,Rt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=nt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ut=Ut[Rt]),Ut){rt.bindFramebuffer(C.FRAMEBUFFER,Ut);try{const Ft=T.texture,$t=Ft.format,Jt=Ft.type;if(!et.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=T.width-Q&&J>=0&&J<=T.height-X&&C.readPixels(q,J,Q,X,jt.convert($t),jt.convert(Jt),vt)}finally{const Ft=N!==null?nt.get(N).__webglFramebuffer:null;rt.bindFramebuffer(C.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(T,q,J,Q,X,vt,Rt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=nt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ut=Ut[Rt]),Ut){const Ft=T.texture,$t=Ft.format,Jt=Ft.type;if(!et.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=T.width-Q&&J>=0&&J<=T.height-X){rt.bindFramebuffer(C.FRAMEBUFFER,Ut);const Ot=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ot),C.bufferData(C.PIXEL_PACK_BUFFER,vt.byteLength,C.STREAM_READ),C.readPixels(q,J,Q,X,jt.convert($t),jt.convert(Jt),0);const se=N!==null?nt.get(N).__webglFramebuffer:null;rt.bindFramebuffer(C.FRAMEBUFFER,se);const ve=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await nx(C,ve,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ot),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,vt),C.deleteBuffer(Ot),C.deleteSync(ve),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,q=null,J=0){T.isTexture!==!0&&(Ur("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,T=arguments[1]);const Q=Math.pow(2,-J),X=Math.floor(T.image.width*Q),vt=Math.floor(T.image.height*Q),Rt=q!==null?q.x:0,Ut=q!==null?q.y:0;M.setTexture2D(T,0),C.copyTexSubImage2D(C.TEXTURE_2D,J,0,0,Rt,Ut,X,vt),rt.unbindTexture()},this.copyTextureToTexture=function(T,q,J=null,Q=null,X=0){T.isTexture!==!0&&(Ur("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,T=arguments[1],q=arguments[2],X=arguments[3]||0,J=null);let vt,Rt,Ut,Ft,$t,Jt,Ot,se,ve;const ye=T.isCompressedTexture?T.mipmaps[X]:T.image;J!==null?(vt=J.max.x-J.min.x,Rt=J.max.y-J.min.y,Ut=J.isBox3?J.max.z-J.min.z:1,Ft=J.min.x,$t=J.min.y,Jt=J.isBox3?J.min.z:0):(vt=ye.width,Rt=ye.height,Ut=ye.depth||1,Ft=0,$t=0,Jt=0),Q!==null?(Ot=Q.x,se=Q.y,ve=Q.z):(Ot=0,se=0,ve=0);const Qe=jt.convert(q.format),le=jt.convert(q.type);let zt;q.isData3DTexture?(M.setTexture3D(q,0),zt=C.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(M.setTexture2DArray(q,0),zt=C.TEXTURE_2D_ARRAY):(M.setTexture2D(q,0),zt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,q.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,q.unpackAlignment);const ti=C.getParameter(C.UNPACK_ROW_LENGTH),ce=C.getParameter(C.UNPACK_IMAGE_HEIGHT),En=C.getParameter(C.UNPACK_SKIP_PIXELS),ys=C.getParameter(C.UNPACK_SKIP_ROWS),on=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ye.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ye.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ft),C.pixelStorei(C.UNPACK_SKIP_ROWS,$t),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Jt);const gr=T.isDataArrayTexture||T.isData3DTexture,Se=q.isDataArrayTexture||q.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Fn=nt.get(T),_r=nt.get(q),gn=nt.get(Fn.__renderTarget),Ti=nt.get(_r.__renderTarget);rt.bindFramebuffer(C.READ_FRAMEBUFFER,gn.__webglFramebuffer),rt.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Ai=0;Ai<Ut;Ai++)gr&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,nt.get(T).__webglTexture,X,Jt+Ai),T.isDepthTexture?(Se&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,nt.get(q).__webglTexture,X,ve+Ai),C.blitFramebuffer(Ft,$t,vt,Rt,Ot,se,vt,Rt,C.DEPTH_BUFFER_BIT,C.NEAREST)):Se?C.copyTexSubImage3D(zt,X,Ot,se,ve+Ai,Ft,$t,vt,Rt):C.copyTexSubImage2D(zt,X,Ot,se,ve+Ai,Ft,$t,vt,Rt);rt.bindFramebuffer(C.READ_FRAMEBUFFER,null),rt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Se?T.isDataTexture||T.isData3DTexture?C.texSubImage3D(zt,X,Ot,se,ve,vt,Rt,Ut,Qe,le,ye.data):q.isCompressedArrayTexture?C.compressedTexSubImage3D(zt,X,Ot,se,ve,vt,Rt,Ut,Qe,ye.data):C.texSubImage3D(zt,X,Ot,se,ve,vt,Rt,Ut,Qe,le,ye):T.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,X,Ot,se,vt,Rt,Qe,le,ye.data):T.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,X,Ot,se,ye.width,ye.height,Qe,ye.data):C.texSubImage2D(C.TEXTURE_2D,X,Ot,se,vt,Rt,Qe,le,ye);C.pixelStorei(C.UNPACK_ROW_LENGTH,ti),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ce),C.pixelStorei(C.UNPACK_SKIP_PIXELS,En),C.pixelStorei(C.UNPACK_SKIP_ROWS,ys),C.pixelStorei(C.UNPACK_SKIP_IMAGES,on),X===0&&q.generateMipmaps&&C.generateMipmap(zt),rt.unbindTexture()},this.copyTextureToTexture3D=function(T,q,J=null,Q=null,X=0){return T.isTexture!==!0&&(Ur("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,Q=arguments[1]||null,T=arguments[2],q=arguments[3],X=arguments[4]||0),Ur('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,q,J,Q,X)},this.initRenderTarget=function(T){nt.get(T).__webglFramebuffer===void 0&&M.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?M.setTextureCube(T,0):T.isData3DTexture?M.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?M.setTexture2DArray(T,0):M.setTexture2D(T,0),rt.unbindTexture()},this.resetState=function(){L=0,P=0,N=null,rt.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}class Mu{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ne(t),this.near=e,this.far=n}clone(){return new Mu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class pb extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qe,this.environmentIntensity=1,this.environmentRotation=new qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class bf extends Je{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Eu extends wi{constructor(t=[new Vt(0,-.5),new Vt(.5,0),new Vt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ke(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/e,f=new $,h=new Vt,d=new $,g=new $,_=new $;let m=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(g)}for(let v=0;v<=e;v++){const b=n+v*u*s,x=Math.sin(b),D=Math.cos(b);for(let L=0;L<=t.length-1;L++){f.x=t[L].x*x,f.y=t[L].y,f.z=t[L].x*D,o.push(f.x,f.y,f.z),h.x=v/e,h.y=L/(t.length-1),a.push(h.x,h.y);const P=l[3*L+0]*x,N=l[3*L+1],w=l[3*L+0]*D;c.push(P,N,w)}}for(let v=0;v<e;v++)for(let b=0;b<t.length-1;b++){const x=b+v*t.length,D=x,L=x+t.length,P=x+t.length+1,N=x+1;r.push(D,L,N),r.push(P,N,L)}this.setIndex(r),this.setAttribute("position",new pn(o,3)),this.setAttribute("uv",new pn(a,2)),this.setAttribute("normal",new pn(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Eu(t.points,t.segments,t.phiStart,t.phiLength)}}class bu extends wi{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new $,f=new $,h=new $;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const _=g/s*r,m=d/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(_),f.y=(t+e*Math.cos(m))*Math.sin(_),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,v=(s+1)*d+g;o.push(_,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new pn(a,3)),this.setAttribute("normal",new pn(l,3)),this.setAttribute("uv",new pn(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bu(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Os extends lo{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kp,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wu extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Cl=new be,wf=new $,Tf=new $;class om{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vt(512,512),this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yu,this._frameExtents=new Vt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;wf.setFromMatrixPosition(t.matrixWorld),e.position.copy(wf),Tf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Tf),e.updateMatrixWorld(),Cl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Cl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Af=new be,Tr=new $,Rl=new $;class mb extends om{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Vt(4,2),this._viewportCount=6,this._viewports=[new pe(2,1,1,1),new pe(0,1,1,1),new pe(3,1,1,1),new pe(1,1,1,1),new pe(3,0,1,1),new pe(1,0,1,1)],this._cubeDirections=[new $(1,0,0),new $(-1,0,0),new $(0,0,1),new $(0,0,-1),new $(0,1,0),new $(0,-1,0)],this._cubeUps=[new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,0,1),new $(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Tr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Tr),Rl.copy(n.position),Rl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Rl),n.updateMatrixWorld(),s.makeTranslation(-Tr.x,-Tr.y,-Tr.z),Af.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Af)}}class gb extends wu{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new mb}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class _b extends om{constructor(){super(new tm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vb extends wu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new _b}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class xb extends wu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Cf=new be;class yb{constructor(t,e,n=0,s=1/0){this.ray=new qp(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new xu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Cf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cf),this}intersectObject(t,e=!0,n=[]){return Hc(t,this,n,e),n.sort(Rf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Hc(t[s],this,n,e);return n.sort(Rf),n}}function Rf(i,t){return i.distance-t.distance}function Hc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Hc(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hu);const Ar=new $;function vn(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Ar.copy(t),Ar[n]=0,Ar.normalize();const c=.5*o/(o+a),u=1-Ar.angleTo(i)/l;return Math.sign(Ar[e])===1?u*c:a/(o+a)+c+c*(1-u)}class zo extends pr{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new $,l=new $,c=new $(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,h=this.attributes.uv.array,d=u.length/6,g=new $,_=.5/s;for(let m=0,p=0;m<u.length;m+=3,p+=2)switch(a.fromArray(u,m),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),u[m+0]=c.x*Math.sign(a.x)+l.x*r,u[m+1]=c.y*Math.sign(a.y)+l.y*r,u[m+2]=c.z*Math.sign(a.z)+l.z*r,f[m+0]=l.x,f[m+1]=l.y,f[m+2]=l.z,Math.floor(m/d)){case 0:g.set(1,0,0),h[p+0]=vn(g,l,"z","y",r,n),h[p+1]=1-vn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),h[p+0]=1-vn(g,l,"z","y",r,n),h[p+1]=1-vn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),h[p+0]=1-vn(g,l,"x","z",r,t),h[p+1]=vn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),h[p+0]=1-vn(g,l,"x","z",r,t),h[p+1]=1-vn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),h[p+0]=1-vn(g,l,"x","y",r,t),h[p+1]=1-vn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),h[p+0]=vn(g,l,"x","y",r,t),h[p+1]=1-vn(g,l,"y","x",r,e);break}}}class Ln{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new E);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new E);const n=this.elements,s=t.x,r=t.y,o=t.z;return e.x=n[0]*s+n[1]*r+n[2]*o,e.y=n[3]*s+n[4]*r+n[5]*o,e.z=n[6]*s+n[7]*r+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new Ln);const n=this.elements,s=t.elements,r=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],u=n[4],f=n[5],h=n[6],d=n[7],g=n[8],_=s[0],m=s[1],p=s[2],v=s[3],b=s[4],x=s[5],D=s[6],L=s[7],P=s[8];return r[0]=o*_+a*v+l*D,r[1]=o*m+a*b+l*L,r[2]=o*p+a*x+l*P,r[3]=c*_+u*v+f*D,r[4]=c*m+u*b+f*L,r[5]=c*p+u*x+f*P,r[6]=h*_+d*v+g*D,r[7]=h*m+d*b+g*L,r[8]=h*p+d*x+g*P,e}scale(t,e){e===void 0&&(e=new Ln);const n=this.elements,s=e.elements;for(let r=0;r!==3;r++)s[3*r+0]=t.x*n[3*r+0],s[3*r+1]=t.y*n[3*r+1],s[3*r+2]=t.z*n[3*r+2];return e}solve(t,e){e===void 0&&(e=new E);const n=3,s=4,r=[];let o,a;for(o=0;o<n*s;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+s*a]=this.elements[o+3*a];r[3]=t.x,r[7]=t.y,r[11]=t.z;let l=3;const c=l;let u;const f=4;let h;do{if(o=c-l,r[o+s*o]===0){for(a=o+1;a<c;a++)if(r[o+s*a]!==0){u=f;do h=f-u,r[h+s*o]+=r[h+s*a];while(--u);break}}if(r[o+s*o]!==0)for(a=o+1;a<c;a++){const d=r[o+s*a]/r[o+s*o];u=f;do h=f-u,r[h+s*a]=h<=o?0:r[h+s*a]-r[h+s*o]*d;while(--u)}}while(--l);if(e.z=r[2*s+3]/r[2*s+2],e.y=(r[1*s+3]-r[1*s+2]*e.z)/r[1*s+1],e.x=(r[0*s+3]-r[0*s+2]*e.z-r[0*s+1]*e.y)/r[0*s+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";for(let n=0;n<9;n++)t+=this.elements[n]+",";return t}reverse(t){t===void 0&&(t=new Ln);const e=3,n=6,s=Sb;let r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+n*o]=this.elements[r+3*o];s[3]=1,s[9]=0,s[15]=0,s[4]=0,s[10]=1,s[16]=0,s[5]=0,s[11]=0,s[17]=1;let a=3;const l=a;let c;const u=n;let f;do{if(r=l-a,s[r+n*r]===0){for(o=r+1;o<l;o++)if(s[r+n*o]!==0){c=u;do f=u-c,s[f+n*r]+=s[f+n*o];while(--c);break}}if(s[r+n*r]!==0)for(o=r+1;o<l;o++){const h=s[r+n*o]/s[r+n*r];c=u;do f=u-c,s[f+n*o]=f<=r?0:s[f+n*o]-s[f+n*r]*h;while(--c)}}while(--a);r=2;do{o=r-1;do{const h=s[r+n*o]/s[r+n*r];c=n;do f=n-c,s[f+n*o]=s[f+n*o]-s[f+n*r]*h;while(--c)}while(o--)}while(--r);r=2;do{const h=1/s[r+n*r];c=n;do f=n-c,s[f+n*r]=s[f+n*r]*h;while(--c)}while(r--);r=2;do{o=2;do{if(f=s[e+o+n*r],isNaN(f)||f===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,f)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,s=t.z,r=t.w,o=e+e,a=n+n,l=s+s,c=e*o,u=e*a,f=e*l,h=n*a,d=n*l,g=s*l,_=r*o,m=r*a,p=r*l,v=this.elements;return v[0]=1-(h+g),v[1]=u-p,v[2]=f+m,v[3]=u+p,v[4]=1-(c+g),v[5]=d-_,v[6]=f-m,v[7]=d+_,v[8]=1-(c+h),this}transpose(t){t===void 0&&(t=new Ln);const e=this.elements,n=t.elements;let s;return n[0]=e[0],n[4]=e[4],n[8]=e[8],s=e[1],n[1]=e[3],n[3]=s,s=e[2],n[2]=e[6],n[6]=s,s=e[5],n[5]=e[7],n[7]=s,t}}const Sb=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class E{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new E);const n=t.x,s=t.y,r=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*r-l*s,e.y=l*n-o*r,e.z=o*s-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new E(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new E(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Ln([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,s=Math.sqrt(t*t+e*e+n*n);if(s>0){const r=1/s;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return s}unit(t){t===void 0&&(t=new E);const e=this.x,n=this.y,s=this.z;let r=Math.sqrt(e*e+n*n+s*s);return r>0?(r=1/r,t.x=e*r,t.y=n*r,t.z=s*r):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-n)*(o-n)+(a-s)*(a-s))}distanceSquared(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-n)*(o-n)+(a-s)*(a-s)}scale(t,e){e===void 0&&(e=new E);const n=this.x,s=this.y,r=this.z;return e.x=t*n,e.y=t*s,e.z=t*r,e}vmul(t,e){return e===void 0&&(e=new E),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new E),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new E),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const s=Mb,r=1/n;s.set(this.x*r,this.y*r,this.z*r);const o=Eb;Math.abs(s.x)<.9?(o.set(1,0,0),s.cross(o,t)):(o.set(0,1,0),s.cross(o,t)),s.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const s=this.x,r=this.y,o=this.z;n.x=s+(t.x-s)*e,n.y=r+(t.y-r)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Pf),Pf.almostEquals(t,e)}clone(){return new E(this.x,this.y,this.z)}}E.ZERO=new E(0,0,0);E.UNIT_X=new E(1,0,0);E.UNIT_Y=new E(0,1,0);E.UNIT_Z=new E(0,0,1);const Mb=new E,Eb=new E,Pf=new E;class mn{constructor(t){t===void 0&&(t={}),this.lowerBound=new E,this.upperBound=new E,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,s){const r=this.lowerBound,o=this.upperBound,a=n;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,Lf),c=Lf),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),s&&(r.x-=s,r.y-=s,r.z-=s,o.x+=s,o.y+=s,o.z+=s),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new mn().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,s=t.lowerBound,r=t.upperBound,o=s.x<=n.x&&n.x<=r.x||e.x<=r.x&&r.x<=n.x,a=s.y<=n.y&&n.y<=r.y||e.y<=r.y&&r.y<=n.y,l=s.z<=n.z&&n.z<=r.z||e.z<=r.z&&r.z<=n.z;return o&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,s=t.lowerBound,r=t.upperBound;return e.x<=s.x&&n.x>=r.x&&e.y<=s.y&&n.y>=r.y&&e.z<=s.z&&n.z>=r.z}getCorners(t,e,n,s,r,o,a,l){const c=this.lowerBound,u=this.upperBound;t.copy(c),e.set(u.x,c.y,c.z),n.set(u.x,u.y,c.z),s.set(c.x,u.y,u.z),r.set(u.x,c.y,u.z),o.set(c.x,u.y,c.z),a.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(t,e){const n=If,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7];this.getCorners(s,r,o,a,l,c,u,f);for(let h=0;h!==8;h++){const d=n[h];t.pointToLocal(d,d)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=If,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7];this.getCorners(s,r,o,a,l,c,u,f);for(let h=0;h!==8;h++){const d=n[h];t.pointToWorld(d,d)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,s=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*s,l=(this.upperBound.x-n.x)*s,c=(this.lowerBound.y-n.y)*r,u=(this.upperBound.y-n.y)*r,f=(this.lowerBound.z-n.z)*o,h=(this.upperBound.z-n.z)*o,d=Math.max(Math.max(Math.min(a,l),Math.min(c,u)),Math.min(f,h)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,u)),Math.max(f,h));return!(g<0||d>g)}}const Lf=new E,If=[new E,new E,new E,new E,new E,new E,new E,new E];class Df{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:s}=e;if(s>n){const r=s;s=n,n=r}return this.matrix[(n*(n+1)>>1)+s-1]}set(t,e,n){let{index:s}=t,{index:r}=e;if(r>s){const o=r;r=s,s=o}this.matrix[(s*(s+1)>>1)+r-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class am{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const s=n[t].indexOf(e);return s!==-1&&n[t].splice(s,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let s=0,r=n.length;s<r;s++)n[s].call(this,t)}return this}}class Re{constructor(t,e,n,s){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),s===void 0&&(s=1),this.x=t,this.y=e,this.z=n,this.w=s}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new E),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=bb,s=wb;t.tangents(n,s),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Re);const n=this.x,s=this.y,r=this.z,o=this.w,a=t.x,l=t.y,c=t.z,u=t.w;return e.x=n*u+o*a+s*c-r*l,e.y=s*u+o*l+r*a-n*c,e.z=r*u+o*c+n*l-s*a,e.w=o*u-n*a-s*l-r*c,e}inverse(t){t===void 0&&(t=new Re);const e=this.x,n=this.y,s=this.z,r=this.w;this.conjugate(t);const o=1/(e*e+n*n+s*s+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new Re),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new E);const n=t.x,s=t.y,r=t.z,o=this.x,a=this.y,l=this.z,c=this.w,u=c*n+a*r-l*s,f=c*s+l*n-o*r,h=c*r+o*s-a*n,d=-o*n-a*s-l*r;return e.x=u*c+d*-o+f*-l-h*-a,e.y=f*c+d*-a+h*-o-u*-l,e.z=h*c+d*-l+u*-a-f*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,s,r;const o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const u=o*a+l*c;if(u>.499&&(n=2*Math.atan2(o,c),s=Math.PI/2,r=0),u<-.499&&(n=-2*Math.atan2(o,c),s=-Math.PI/2,r=0),n===void 0){const f=o*o,h=a*a,d=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*h-2*d),s=Math.asin(2*u),r=Math.atan2(2*o*c-2*a*l,1-2*f-2*d)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=s,t.x=r}setFromEuler(t,e,n,s){s===void 0&&(s="XYZ");const r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),u=Math.sin(n/2);return s==="XYZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):s==="YXZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):s==="ZXY"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):s==="ZYX"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):s==="YZX"?(this.x=l*o*a+r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a-l*c*u):s==="XZY"&&(this.x=l*o*a-r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a+l*c*u),this}clone(){return new Re(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Re);const s=this.x,r=this.y,o=this.z,a=this.w;let l=t.x,c=t.y,u=t.z,f=t.w,h,d,g,_,m;return d=s*l+r*c+o*u+a*f,d<0&&(d=-d,l=-l,c=-c,u=-u,f=-f),1-d>1e-6?(h=Math.acos(d),g=Math.sin(h),_=Math.sin((1-e)*h)/g,m=Math.sin(e*h)/g):(_=1-e,m=e),n.x=_*s+m*l,n.y=_*r+m*c,n.z=_*o+m*u,n.w=_*a+m*f,n}integrate(t,e,n,s){s===void 0&&(s=new Re);const r=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,u=this.z,f=this.w,h=e*.5;return s.x+=h*(r*f+o*u-a*c),s.y+=h*(o*f+a*l-r*u),s.z+=h*(a*f+r*c-o*l),s.w+=h*(-r*l-o*c-a*u),s}}const bb=new E,wb=new E,Tb={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Nt{constructor(t){t===void 0&&(t={}),this.id=Nt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Nt.idCounter=0;Nt.types=Tb;class ae{constructor(t){t===void 0&&(t={}),this.position=new E,this.quaternion=new Re,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return ae.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return ae.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,s){return s===void 0&&(s=new E),n.vsub(t,s),e.conjugate(Nf),Nf.vmult(s,s),s}static pointToWorldFrame(t,e,n,s){return s===void 0&&(s=new E),e.vmult(n,s),s.vadd(t,s),s}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new E),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,s){return s===void 0&&(s=new E),e.w*=-1,e.vmult(n,s),e.w*=-1,s}}const Nf=new Re;class Yr extends Nt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:s=[],axes:r,boundingSphereRadius:o}=t;super({type:Nt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const s=new E;for(let r=0;r!==t.length;r++){const o=t[r],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[o[l]].vsub(e[o[c]],s),s.normalize();let u=!1;for(let f=0;f!==n.length;f++)if(n[f].almostEquals(s)||n[f].almostEquals(s)){u=!0;break}u||n.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let s=0;s<this.faces[t].length;s++)if(!this.vertices[this.faces[t][s]])throw new Error(`Vertex ${this.faces[t][s]} not found!`);const e=this.faceNormals[t]||new E;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[t].length;s++)console.warn(`.vertices[${this.faces[t][s]}] = Vec3(${this.vertices[this.faces[t][s]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],s=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];Yr.computeNormal(s,r,o,e)}static computeNormal(t,e,n,s){const r=new E,o=new E;e.vsub(t,o),n.vsub(e,r),r.cross(o,s),s.isZero()||s.normalize()}clipAgainstHull(t,e,n,s,r,o,a,l,c){const u=new E;let f=-1,h=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){u.copy(n.faceNormals[g]),r.vmult(u,u);const _=u.dot(o);_>h&&(h=_,f=g)}const d=[];for(let g=0;g<n.faces[f].length;g++){const _=n.vertices[n.faces[f][g]],m=new E;m.copy(_),r.vmult(m,m),s.vadd(m,m),d.push(m)}f>=0&&this.clipFaceAgainstHull(o,t,e,d,a,l,c)}findSeparatingAxis(t,e,n,s,r,o,a,l){const c=new E,u=new E,f=new E,h=new E,d=new E,g=new E;let _=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let p=0;p!==m.uniqueAxes.length;p++){n.vmult(m.uniqueAxes[p],c);const v=m.testSepAxis(c,t,e,n,s,r);if(v===!1)return!1;v<_&&(_=v,o.copy(c))}else{const p=a?a.length:m.faces.length;for(let v=0;v<p;v++){const b=a?a[v]:v;c.copy(m.faceNormals[b]),n.vmult(c,c);const x=m.testSepAxis(c,t,e,n,s,r);if(x===!1)return!1;x<_&&(_=x,o.copy(c))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){r.vmult(t.uniqueAxes[p],u);const v=m.testSepAxis(u,t,e,n,s,r);if(v===!1)return!1;v<_&&(_=v,o.copy(u))}else{const p=l?l.length:t.faces.length;for(let v=0;v<p;v++){const b=l?l[v]:v;u.copy(t.faceNormals[b]),r.vmult(u,u);const x=m.testSepAxis(u,t,e,n,s,r);if(x===!1)return!1;x<_&&(_=x,o.copy(u))}}for(let p=0;p!==m.uniqueEdges.length;p++){n.vmult(m.uniqueEdges[p],h);for(let v=0;v!==t.uniqueEdges.length;v++)if(r.vmult(t.uniqueEdges[v],d),h.cross(d,g),!g.almostZero()){g.normalize();const b=m.testSepAxis(g,t,e,n,s,r);if(b===!1)return!1;b<_&&(_=b,o.copy(g))}}return s.vsub(e,f),f.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,s,r,o){const a=this;Yr.project(a,t,n,s,Pl),Yr.project(e,t,r,o,Ll);const l=Pl[0],c=Pl[1],u=Ll[0],f=Ll[1];if(l<f||u<c)return!1;const h=l-f,d=u-c;return h<d?h:d}calculateLocalInertia(t,e){const n=new E,s=new E;this.computeLocalAABB(s,n);const r=n.x-s.x,o=n.y-s.y,a=n.z-s.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*r*2*r+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],s=this.vertices[e[0]];return-n.dot(s)}clipFaceAgainstHull(t,e,n,s,r,o,a){const l=new E,c=new E,u=new E,f=new E,h=new E,d=new E,g=new E,_=new E,m=this,p=[],v=s,b=p;let x=-1,D=Number.MAX_VALUE;for(let S=0;S<m.faces.length;S++){l.copy(m.faceNormals[S]),n.vmult(l,l);const U=l.dot(t);U<D&&(D=U,x=S)}if(x<0)return;const L=m.faces[x];L.connectedFaces=[];for(let S=0;S<m.faces.length;S++)for(let U=0;U<m.faces[S].length;U++)L.indexOf(m.faces[S][U])!==-1&&S!==x&&L.connectedFaces.indexOf(S)===-1&&L.connectedFaces.push(S);const P=L.length;for(let S=0;S<P;S++){const U=m.vertices[L[S]],Y=m.vertices[L[(S+1)%P]];U.vsub(Y,c),u.copy(c),n.vmult(u,u),e.vadd(u,u),f.copy(this.faceNormals[x]),n.vmult(f,f),e.vadd(f,f),u.cross(f,h),h.negate(h),d.copy(U),n.vmult(d,d),e.vadd(d,d);const O=L.connectedFaces[S];g.copy(this.faceNormals[O]);const W=this.getPlaneConstantOfFace(O);_.copy(g),n.vmult(_,_);const V=W-_.dot(e);for(this.clipFaceAgainstPlane(v,b,_,V);v.length;)v.shift();for(;b.length;)v.push(b.shift())}g.copy(this.faceNormals[x]);const N=this.getPlaneConstantOfFace(x);_.copy(g),n.vmult(_,_);const w=N-_.dot(e);for(let S=0;S<v.length;S++){let U=_.dot(v[S])+w;if(U<=r&&(console.log(`clamped: depth=${U} to minDist=${r}`),U=r),U<=o){const Y=v[S];if(U<=1e-6){const O={point:Y,normal:_,depth:U};a.push(O)}}}}clipFaceAgainstPlane(t,e,n,s){let r,o;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];r=n.dot(l)+s;for(let u=0;u<a;u++){if(c=t[u],o=n.dot(c)+s,r<0)if(o<0){const f=new E;f.copy(c),e.push(f)}else{const f=new E;l.lerp(c,r/(r-o),f),e.push(f)}else if(o<0){const f=new E;l.lerp(c,r/(r-o),f),e.push(f),e.push(c)}l=c,r=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new E);const n=this.vertices,s=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)e.vmult(n[r],s[r]),t.vadd(s[r],s[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){const r=n[s];r.x<t.x?t.x=r.x:r.x>e.x&&(e.x=r.x),r.y<t.y?t.y=r.y:r.y>e.y&&(e.y=r.y),r.z<t.z?t.z=r.z:r.z>e.z&&(e.z=r.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new E);const n=this.faceNormals,s=this.worldFaceNormals;for(let r=0;r!==e;r++)t.vmult(n[r],s[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const s=e[n].lengthSquared();s>t&&(t=s)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,s){const r=this.vertices;let o,a,l,c,u,f,h=new E;for(let d=0;d<r.length;d++){h.copy(r[d]),e.vmult(h,h),t.vadd(h,h);const g=h;(o===void 0||g.x<o)&&(o=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(u===void 0||g.y>u)&&(u=g.y),(l===void 0||g.z<l)&&(l=g.z),(f===void 0||g.z>f)&&(f=g.z)}n.set(o,a,l),s.set(c,u,f)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new E);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,s=this.vertices;if(e){for(let r=0;r<n;r++){const o=s[r];e.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){const o=this.faceNormals[r];e.vmult(o,o)}}if(t)for(let r=0;r<n;r++){const o=s[r];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,s=this.faceNormals,r=new E;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let a=s[o];const l=e[n[o][0]],c=new E;t.vsub(l,c);const u=a.dot(c),f=new E;r.vsub(l,f);const h=a.dot(f);if(u<0&&h>0||u>0&&h<0)return!1}return-1}static project(t,e,n,s,r){const o=t.vertices.length,a=Ab;let l=0,c=0;const u=Cb,f=t.vertices;u.setZero(),ae.vectorToLocalFrame(n,s,e,a),ae.pointToLocalFrame(n,s,u,u);const h=u.dot(a);c=l=f[0].dot(a);for(let d=1;d<o;d++){const g=f[d].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=h,l-=h,c>l){const d=c;c=l,l=d}r[0]=l,r[1]=c}}const Pl=[],Ll=[];new E;const Ab=new E,Cb=new E;class zi extends Nt{constructor(t){super({type:Nt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,s=E,r=[new s(-t,-e,-n),new s(t,-e,-n),new s(t,e,-n),new s(-t,e,-n),new s(-t,-e,n),new s(t,-e,n),new s(t,e,n),new s(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],l=new Yr({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new E),zi.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const s=t;n.x=1/12*e*(2*s.y*2*s.y+2*s.z*2*s.z),n.y=1/12*e*(2*s.x*2*s.x+2*s.z*2*s.z),n.z=1/12*e*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(t,e){const n=t,s=this.halfExtents;if(n[0].set(s.x,0,0),n[1].set(0,s.y,0),n[2].set(0,0,s.z),n[3].set(-s.x,0,0),n[4].set(0,-s.y,0),n[5].set(0,0,-s.z),e!==void 0)for(let r=0;r!==n.length;r++)e.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const s=this.halfExtents,r=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let o=0;o<r.length;o++)Ni.set(r[o][0],r[o][1],r[o][2]),e.vmult(Ni,Ni),t.vadd(Ni,Ni),n(Ni.x,Ni.y,Ni.z)}calculateWorldAABB(t,e,n,s){const r=this.halfExtents;Bn[0].set(r.x,r.y,r.z),Bn[1].set(-r.x,r.y,r.z),Bn[2].set(-r.x,-r.y,r.z),Bn[3].set(-r.x,-r.y,-r.z),Bn[4].set(r.x,-r.y,-r.z),Bn[5].set(r.x,r.y,-r.z),Bn[6].set(-r.x,r.y,-r.z),Bn[7].set(r.x,-r.y,r.z);const o=Bn[0];e.vmult(o,o),t.vadd(o,o),s.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=Bn[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,u=l.y,f=l.z;c>s.x&&(s.x=c),u>s.y&&(s.y=u),f>s.z&&(s.z=f),c<n.x&&(n.x=c),u<n.y&&(n.y=u),f<n.z&&(n.z=f)}}}const Ni=new E,Bn=[new E,new E,new E,new E,new E,new E,new E,new E],Tu={DYNAMIC:1,STATIC:2,KINEMATIC:4},Au={AWAKE:0,SLEEPY:1,SLEEPING:2};class xt extends am{constructor(t){t===void 0&&(t={}),super(),this.id=xt.idCounter++,this.index=-1,this.world=null,this.vlambda=new E,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new E,this.previousPosition=new E,this.interpolatedPosition=new E,this.initPosition=new E,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new E,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new E,this.force=new E;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?xt.STATIC:xt.DYNAMIC,typeof t.type==typeof xt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=xt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new E,this.quaternion=new Re,this.initQuaternion=new Re,this.previousQuaternion=new Re,this.interpolatedQuaternion=new Re,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new E,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new E,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new E,this.invInertia=new E,this.invInertiaWorld=new Ln,this.invMassSolve=0,this.invInertiaSolve=new E,this.invInertiaWorldSolve=new Ln,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new E(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new E(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new mn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new E,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=xt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===xt.SLEEPING&&this.dispatchEvent(xt.wakeupEvent)}sleep(){this.sleepState=xt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;e===xt.AWAKE&&n<s?(this.sleepState=xt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(xt.sleepyEvent)):e===xt.SLEEPY&&n>s?this.wakeUp():e===xt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(xt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===xt.SLEEPING||this.type===xt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new E),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new E),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e}addShape(t,e,n){const s=new E,r=new Re;return e&&s.copy(e),n&&r.copy(n),this.shapes.push(t),this.shapeOffsets.push(s),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let s=0;for(let r=0;r!==n;r++){const o=t[r];o.updateBoundingSphereRadius();const a=e[r].length(),l=o.boundingSphereRadius;a+l>s&&(s=a+l)}this.boundingRadius=s}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,s=t.length,r=Rb,o=Pb,a=this.quaternion,l=this.aabb,c=Lb;for(let u=0;u!==s;u++){const f=t[u];a.vmult(e[u],r),r.vadd(this.position,r),a.mult(n[u],o),f.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),u===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=Ib,s=Db;n.setRotationFromQuaternion(this.quaternion),n.transpose(s),n.scale(e,n),n.mmult(s,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new E),this.type!==xt.DYNAMIC)return;this.sleepState===xt.SLEEPING&&this.wakeUp();const n=Nb;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new E),this.type!==xt.DYNAMIC)return;const n=Ub,s=Fb;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyForce(n,s)}applyTorque(t){this.type===xt.DYNAMIC&&(this.sleepState===xt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new E),this.type!==xt.DYNAMIC)return;this.sleepState===xt.SLEEPING&&this.wakeUp();const n=e,s=Ob;s.copy(t),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);const r=Bb;n.cross(t,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new E),this.type!==xt.DYNAMIC)return;const n=zb,s=kb;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyImpulse(n,s)}updateMassProperties(){const t=Hb;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),zi.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new E;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===xt.DYNAMIC||this.type===xt.KINEMATIC)||this.sleepState===xt.SLEEPING)return;const s=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,u=this.invMass,f=this.invInertiaWorld,h=this.linearFactor,d=u*t;s.x+=a.x*d*h.x,s.y+=a.y*d*h.y,s.z+=a.z*d*h.z;const g=f.elements,_=this.angularFactor,m=l.x*_.x,p=l.y*_.y,v=l.z*_.z;r.x+=t*(g[0]*m+g[1]*p+g[2]*v),r.y+=t*(g[3]*m+g[4]*p+g[5]*v),r.z+=t*(g[6]*m+g[7]*p+g[8]*v),o.x+=s.x*t,o.y+=s.y*t,o.z+=s.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}xt.idCounter=0;xt.COLLIDE_EVENT_NAME="collide";xt.DYNAMIC=Tu.DYNAMIC;xt.STATIC=Tu.STATIC;xt.KINEMATIC=Tu.KINEMATIC;xt.AWAKE=Au.AWAKE;xt.SLEEPY=Au.SLEEPY;xt.SLEEPING=Au.SLEEPING;xt.wakeupEvent={type:"wakeup"};xt.sleepyEvent={type:"sleepy"};xt.sleepEvent={type:"sleep"};const Rb=new E,Pb=new Re,Lb=new mn,Ib=new Ln,Db=new Ln;new Ln;const Nb=new E,Ub=new E,Fb=new E,Ob=new E,Bb=new E,zb=new E,kb=new E,Hb=new E;class lm{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&xt.STATIC)!==0||t.sleepState===xt.SLEEPING)&&((e.type&xt.STATIC)!==0||e.sleepState===xt.SLEEPING))}intersectionTest(t,e,n,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,s):this.doBoundingSphereBroadphase(t,e,n,s)}doBoundingSphereBroadphase(t,e,n,s){const r=Vb;e.position.vsub(t.position,r);const o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(n.push(t),s.push(e))}doBoundingBoxBroadphase(t,e,n,s){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),s.push(e))}makePairsUnique(t,e){const n=Gb,s=Wb,r=qb,o=t.length;for(let a=0;a!==o;a++)s[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const l=s[a].id,c=r[a].id,u=l<c?`${l},${c}`:`${c},${l}`;n[u]=a,n.keys.push(u)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(s[c]),e.push(r[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new E;t.position.vsub(e.position,n);const s=t.shapes[0],r=e.shapes[0];return Math.pow(s.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Vb=new E;new E;new Re;new E;const Gb={keys:[]},Wb=[],qb=[];new E;new E;new E;class Xb extends lm{constructor(){super()}collisionPairs(t,e,n){const s=t.bodies,r=s.length;let o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=s[l],a=s[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let s=0;s<t.bodies.length;s++){const r=t.bodies[s];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&n.push(r)}return n}}class da{constructor(){this.rayFromWorld=new E,this.rayToWorld=new E,this.hitNormalWorld=new E,this.hitPointWorld=new E,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,s,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(s),this.shape=r,this.body=o,this.distance=a}}let cm,um,hm,fm,dm,pm,mm;const Cu={CLOSEST:1,ANY:2,ALL:4};cm=Nt.types.SPHERE;um=Nt.types.PLANE;hm=Nt.types.BOX;fm=Nt.types.CYLINDER;dm=Nt.types.CONVEXPOLYHEDRON;pm=Nt.types.HEIGHTFIELD;mm=Nt.types.TRIMESH;class Ce{get[cm](){return this._intersectSphere}get[um](){return this._intersectPlane}get[hm](){return this._intersectBox}get[fm](){return this._intersectConvex}get[dm](){return this._intersectConvex}get[pm](){return this._intersectHeightfield}get[mm](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new E),e===void 0&&(e=new E),this.from=t.clone(),this.to=e.clone(),this.direction=new E,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Ce.ANY,this.result=new da,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Ce.ANY,this.result=e.result||new da,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Uf),Il.length=0,t.broadphase.aabbQuery(t,Uf,Il),this.intersectBodies(Il),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;const s=$b,r=Yb;for(let o=0,a=t.shapes.length;o<a;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],s),s.vadd(t.position,s),this.intersectShape(l,r,s,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,s=t.length;!this.result.shouldStop&&n<s;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,s){const r=this.from;if(lw(r,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,s,t)}_intersectBox(t,e,n,s,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,s,r)}_intersectPlane(t,e,n,s,r){const o=this.from,a=this.to,l=this.direction,c=new E(0,0,1);e.vmult(c,c);const u=new E;o.vsub(n,u);const f=u.dot(c);a.vsub(n,u);const h=u.dot(c);if(f*h>0||o.distanceTo(a)<f)return;const d=c.dot(l);if(Math.abs(d)<this.precision)return;const g=new E,_=new E,m=new E;o.vsub(n,g);const p=-c.dot(g)/d;l.scale(p,_),o.vadd(_,m),this.reportIntersection(c,m,r,s,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,s=this.to,r=this.from;e.x=Math.min(s.x,r.x),e.y=Math.min(s.y,r.y),e.z=Math.min(s.z,r.z),n.x=Math.max(s.x,r.x),n.y=Math.max(s.y,r.y),n.z=Math.max(s.z,r.z)}_intersectHeightfield(t,e,n,s,r){t.data,t.elementSize;const o=jb;o.from.copy(this.from),o.to.copy(this.to),ae.pointToLocalFrame(n,e,o.from,o.from),ae.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=Kb;let l,c,u,f;l=c=0,u=f=t.data.length-1;const h=new mn;o.getAABB(h),t.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),u=Math.min(u,a[0]+1),f=Math.min(f,a[1]+1);for(let d=l;d<u;d++)for(let g=c;g<f;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(d,g,h),!!h.overlapsRay(o)){if(t.getConvexTrianglePillar(d,g,!1),ae.pointToWorldFrame(n,e,t.pillarOffset,ko),this._intersectConvex(t.pillarConvex,e,ko,s,r,Ff),this.result.shouldStop)return;t.getConvexTrianglePillar(d,g,!0),ae.pointToWorldFrame(n,e,t.pillarOffset,ko),this._intersectConvex(t.pillarConvex,e,ko,s,r,Ff)}}}_intersectSphere(t,e,n,s,r){const o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,u=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),f=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,h=u**2-4*c*f,d=Zb,g=Jb;if(!(h<0))if(h===0)o.lerp(a,h,d),d.vsub(n,g),g.normalize(),this.reportIntersection(g,d,r,s,-1);else{const _=(-u-Math.sqrt(h))/(2*c),m=(-u+Math.sqrt(h))/(2*c);if(_>=0&&_<=1&&(o.lerp(a,_,d),d.vsub(n,g),g.normalize(),this.reportIntersection(g,d,r,s,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,d),d.vsub(n,g),g.normalize(),this.reportIntersection(g,d,r,s,-1))}}_intersectConvex(t,e,n,s,r,o){const a=Qb,l=Of,c=o&&o.faceList||null,u=t.faces,f=t.vertices,h=t.faceNormals,d=this.direction,g=this.from,_=this.to,m=g.distanceTo(_),p=c?c.length:u.length,v=this.result;for(let b=0;!v.shouldStop&&b<p;b++){const x=c?c[b]:b,D=u[x],L=h[x],P=e,N=n;l.copy(f[D[0]]),P.vmult(l,l),l.vadd(N,l),l.vsub(g,l),P.vmult(L,a);const w=d.dot(a);if(Math.abs(w)<this.precision)continue;const S=a.dot(l)/w;if(!(S<0)){d.scale(S,en),en.vadd(g,en),An.copy(f[D[0]]),P.vmult(An,An),N.vadd(An,An);for(let U=1;!v.shouldStop&&U<D.length-1;U++){zn.copy(f[D[U]]),kn.copy(f[D[U+1]]),P.vmult(zn,zn),P.vmult(kn,kn),N.vadd(zn,zn),N.vadd(kn,kn);const Y=en.distanceTo(g);!(Ce.pointInTriangle(en,An,zn,kn)||Ce.pointInTriangle(en,zn,An,kn))||Y>m||this.reportIntersection(a,en,r,s,x)}}}}_intersectTrimesh(t,e,n,s,r,o){const a=tw,l=ow,c=aw,u=Of,f=ew,h=nw,d=iw,g=rw,_=sw,m=t.indices;t.vertices;const p=this.from,v=this.to,b=this.direction;c.position.copy(n),c.quaternion.copy(e),ae.vectorToLocalFrame(n,e,b,f),ae.pointToLocalFrame(n,e,p,h),ae.pointToLocalFrame(n,e,v,d),d.x*=t.scale.x,d.y*=t.scale.y,d.z*=t.scale.z,h.x*=t.scale.x,h.y*=t.scale.y,h.z*=t.scale.z,d.vsub(h,f),f.normalize();const x=h.distanceSquared(d);t.tree.rayQuery(this,c,l);for(let D=0,L=l.length;!this.result.shouldStop&&D!==L;D++){const P=l[D];t.getNormal(P,a),t.getVertex(m[P*3],An),An.vsub(h,u);const N=f.dot(a),w=a.dot(u)/N;if(w<0)continue;f.scale(w,en),en.vadd(h,en),t.getVertex(m[P*3+1],zn),t.getVertex(m[P*3+2],kn);const S=en.distanceSquared(h);!(Ce.pointInTriangle(en,zn,An,kn)||Ce.pointInTriangle(en,An,zn,kn))||S>x||(ae.vectorToWorldFrame(e,a,_),ae.pointToWorldFrame(n,e,en,g),this.reportIntersection(_,g,r,s,P))}l.length=0}reportIntersection(t,e,n,s,r){const o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case Ce.ALL:this.hasHit=!0,c.set(o,a,t,e,n,s,l),c.hasHit=!0,this.callback(c);break;case Ce.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,s,l));break;case Ce.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,s,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,s){s.vsub(e,hs),n.vsub(e,Cr),t.vsub(e,Dl);const r=hs.dot(hs),o=hs.dot(Cr),a=hs.dot(Dl),l=Cr.dot(Cr),c=Cr.dot(Dl);let u,f;return(u=l*a-o*c)>=0&&(f=r*c-o*a)>=0&&u+f<r*l-o*o}}Ce.CLOSEST=Cu.CLOSEST;Ce.ANY=Cu.ANY;Ce.ALL=Cu.ALL;const Uf=new mn,Il=[],Cr=new E,Dl=new E,$b=new E,Yb=new Re,en=new E,An=new E,zn=new E,kn=new E;new E;new da;const Ff={faceList:[0]},ko=new E,jb=new Ce,Kb=[],Zb=new E,Jb=new E,Qb=new E;new E;new E;const Of=new E,tw=new E,ew=new E,nw=new E,iw=new E,sw=new E,rw=new E;new mn;const ow=[],aw=new ae,hs=new E,Ho=new E;function lw(i,t,e){e.vsub(i,hs);const n=hs.dot(t);return t.scale(n,Ho),Ho.vadd(i,Ho),e.distanceTo(Ho)}class Gs extends lm{static checkBounds(t,e,n){let s,r;n===0?(s=t.position.x,r=e.position.x):n===1?(s=t.position.y,r=e.position.y):n===2&&(s=t.position.z,r=e.position.z);const o=t.boundingRadius,a=e.boundingRadius,l=s+o;return r-a<l}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const s=t[e];let r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.x<=s.aabb.lowerBound.x);r--)t[r+1]=t[r];t[r+1]=s}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const s=t[e];let r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.y<=s.aabb.lowerBound.y);r--)t[r+1]=t[r];t[r+1]=s}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const s=t[e];let r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.z<=s.aabb.lowerBound.z);r--)t[r+1]=t[r];t[r+1]=s}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const s=e.indexOf(n.body);s!==-1&&e.splice(s,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const s=this.axisList,r=s.length,o=this.axisIndex;let a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==r;a++){const c=s[a];for(l=a+1;l<r;l++){const u=s[l];if(this.needBroadphaseCollision(c,u)){if(!Gs.checkBounds(c,u,o))break;this.intersectionTest(c,u,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let s=0;s!==n;s++){const r=t[s];r.aabbNeedsUpdate&&r.updateAABB()}e===0?Gs.insertionSortX(t):e===1?Gs.insertionSortY(t):e===2&&Gs.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,s=0,r=0,o=0;const a=this.axisList,l=a.length,c=1/l;for(let d=0;d!==l;d++){const g=a[d],_=g.position.x;t+=_,e+=_*_;const m=g.position.y;n+=m,s+=m*m;const p=g.position.z;r+=p,o+=p*p}const u=e-t*t*c,f=s-n*n*c,h=o-r*r*c;u>f?u>h?this.axisIndex=0:this.axisIndex=2:f>h?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const s=this.axisIndex;let r="x";s===1&&(r="y"),s===2&&(r="z");const o=this.axisList;e.lowerBound[r],e.upperBound[r];for(let a=0;a<o.length;a++){const l=o[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(e)&&n.push(l)}return n}}class cw{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class Bf{constructor(){this.spatial=new E,this.rotational=new E}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class co{constructor(t,e,n,s){n===void 0&&(n=-1e6),s===void 0&&(s=1e6),this.id=co.idCounter++,this.minForce=n,this.maxForce=s,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Bf,this.jacobianElementB=new Bf,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const s=e,r=t,o=n;this.a=4/(o*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(o*o*r*(1+4*s))}computeB(t,e,n){const s=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-s*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.position,o=s.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.velocity,o=s.velocity,a=n.angularVelocity,l=s.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.vlambda,o=s.vlambda,a=n.wlambda,l=s.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.force,o=n.torque,a=s.force,l=s.torque,c=n.invMassSolve,u=s.invMassSolve;return r.scale(c,zf),a.scale(u,kf),n.invInertiaWorldSolve.vmult(o,Hf),s.invInertiaWorldSolve.vmult(l,Vf),t.multiplyVectors(zf,Hf)+e.multiplyVectors(kf,Vf)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.invMassSolve,o=s.invMassSolve,a=n.invInertiaWorldSolve,l=s.invInertiaWorldSolve;let c=r+o;return a.vmult(t.rotational,Vo),c+=Vo.dot(t.rotational),l.vmult(e.rotational,Vo),c+=Vo.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,s=this.bi,r=this.bj,o=uw;s.vlambda.addScaledVector(s.invMassSolve*t,e.spatial,s.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),s.invInertiaWorldSolve.vmult(e.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}co.idCounter=0;const zf=new E,kf=new E,Hf=new E,Vf=new E,Vo=new E,uw=new E;class hw extends co{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new E,this.rj=new E,this.ni=new E}computeB(t){const e=this.a,n=this.b,s=this.bi,r=this.bj,o=this.ri,a=this.rj,l=fw,c=dw,u=s.velocity,f=s.angularVelocity;s.force,s.torque;const h=r.velocity,d=r.angularVelocity;r.force,r.torque;const g=pw,_=this.jacobianElementA,m=this.jacobianElementB,p=this.ni;o.cross(p,l),a.cross(p,c),p.negate(_.spatial),l.negate(_.rotational),m.spatial.copy(p),m.rotational.copy(c),g.copy(r.position),g.vadd(a,g),g.vsub(s.position,g),g.vsub(o,g);const v=p.dot(g),b=this.restitution+1,x=b*h.dot(p)-b*u.dot(p)+d.dot(c)-f.dot(l),D=this.computeGiMf();return-v*e-x*n-t*D}getImpactVelocityAlongNormal(){const t=mw,e=gw,n=_w,s=vw,r=xw;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(s,e),t.vsub(e,r),this.ni.dot(r)}}const fw=new E,dw=new E,pw=new E,mw=new E,gw=new E,_w=new E,vw=new E,xw=new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;class Gf extends co{constructor(t,e,n){super(t,e,-n,n),this.ri=new E,this.rj=new E,this.t=new E}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,s=this.rj,r=yw,o=Sw,a=this.t;n.cross(a,r),s.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const u=this.computeGW(),f=this.computeGiMf();return-u*e-t*f}}const yw=new E,Sw=new E;class rr{constructor(t,e,n){n=cw.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=rr.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}rr.idCounter=0;class or{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=or.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}or.idCounter=0;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new Ce;new E;new E;new E;new E(1,0,0),new E(0,1,0),new E(0,0,1);new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new mn;new E;new mn;new E;new E;new E;new E;new E;new E;new E;new mn;new E;new ae;new mn;class Mw{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class Ew extends Mw{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const s=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,u=t;let f,h,d,g,_,m;if(a!==0)for(let x=0;x!==c;x++)l[x].updateSolveMassProperties();const p=ww,v=Tw,b=bw;p.length=a,v.length=a,b.length=a;for(let x=0;x!==a;x++){const D=o[x];b[x]=0,v[x]=D.computeB(u),p[x]=1/D.computeC()}if(a!==0){for(let L=0;L!==c;L++){const P=l[L],N=P.vlambda,w=P.wlambda;N.set(0,0,0),w.set(0,0,0)}for(n=0;n!==s;n++){g=0;for(let L=0;L!==a;L++){const P=o[L];f=v[L],h=p[L],m=b[L],_=P.computeGWlambda(),d=h*(f-_-P.eps*m),m+d<P.minForce?d=P.minForce-m:m+d>P.maxForce&&(d=P.maxForce-m),b[L]+=d,g+=d>0?d:-d,P.addToWlambda(d)}if(g*g<r)break}for(let L=0;L!==c;L++){const P=l[L],N=P.velocity,w=P.angularVelocity;P.vlambda.vmul(P.linearFactor,P.vlambda),N.vadd(P.vlambda,N),P.wlambda.vmul(P.angularFactor,P.wlambda),w.vadd(P.wlambda,w)}let x=o.length;const D=1/u;for(;x--;)o[x].multiplier=b[x]*D}return n}}const bw=[],ww=[],Tw=[];class Aw{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class Cw extends Aw{constructor(){super(...arguments),this.type=E}constructObject(){return new E}}const Me={sphereSphere:Nt.types.SPHERE,spherePlane:Nt.types.SPHERE|Nt.types.PLANE,boxBox:Nt.types.BOX|Nt.types.BOX,sphereBox:Nt.types.SPHERE|Nt.types.BOX,planeBox:Nt.types.PLANE|Nt.types.BOX,convexConvex:Nt.types.CONVEXPOLYHEDRON,sphereConvex:Nt.types.SPHERE|Nt.types.CONVEXPOLYHEDRON,planeConvex:Nt.types.PLANE|Nt.types.CONVEXPOLYHEDRON,boxConvex:Nt.types.BOX|Nt.types.CONVEXPOLYHEDRON,sphereHeightfield:Nt.types.SPHERE|Nt.types.HEIGHTFIELD,boxHeightfield:Nt.types.BOX|Nt.types.HEIGHTFIELD,convexHeightfield:Nt.types.CONVEXPOLYHEDRON|Nt.types.HEIGHTFIELD,sphereParticle:Nt.types.PARTICLE|Nt.types.SPHERE,planeParticle:Nt.types.PLANE|Nt.types.PARTICLE,boxParticle:Nt.types.BOX|Nt.types.PARTICLE,convexParticle:Nt.types.PARTICLE|Nt.types.CONVEXPOLYHEDRON,cylinderCylinder:Nt.types.CYLINDER,sphereCylinder:Nt.types.SPHERE|Nt.types.CYLINDER,planeCylinder:Nt.types.PLANE|Nt.types.CYLINDER,boxCylinder:Nt.types.BOX|Nt.types.CYLINDER,convexCylinder:Nt.types.CONVEXPOLYHEDRON|Nt.types.CYLINDER,heightfieldCylinder:Nt.types.HEIGHTFIELD|Nt.types.CYLINDER,particleCylinder:Nt.types.PARTICLE|Nt.types.CYLINDER,sphereTrimesh:Nt.types.SPHERE|Nt.types.TRIMESH,planeTrimesh:Nt.types.PLANE|Nt.types.TRIMESH};class Rw{get[Me.sphereSphere](){return this.sphereSphere}get[Me.spherePlane](){return this.spherePlane}get[Me.boxBox](){return this.boxBox}get[Me.sphereBox](){return this.sphereBox}get[Me.planeBox](){return this.planeBox}get[Me.convexConvex](){return this.convexConvex}get[Me.sphereConvex](){return this.sphereConvex}get[Me.planeConvex](){return this.planeConvex}get[Me.boxConvex](){return this.boxConvex}get[Me.sphereHeightfield](){return this.sphereHeightfield}get[Me.boxHeightfield](){return this.boxHeightfield}get[Me.convexHeightfield](){return this.convexHeightfield}get[Me.sphereParticle](){return this.sphereParticle}get[Me.planeParticle](){return this.planeParticle}get[Me.boxParticle](){return this.boxParticle}get[Me.convexParticle](){return this.convexParticle}get[Me.cylinderCylinder](){return this.convexConvex}get[Me.sphereCylinder](){return this.sphereConvex}get[Me.planeCylinder](){return this.planeConvex}get[Me.boxCylinder](){return this.boxConvex}get[Me.convexCylinder](){return this.convexConvex}get[Me.heightfieldCylinder](){return this.heightfieldCylinder}get[Me.particleCylinder](){return this.particleCylinder}get[Me.sphereTrimesh](){return this.sphereTrimesh}get[Me.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Cw,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,s,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new hw(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&s.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,u=s.material||e.material;return c&&u&&c.restitution>=0&&u.restitution>=0&&(a.restitution=c.restitution*u.restitution),a.si=r||n,a.sj=o||s,a}createFrictionEquationsFromContact(t,e){const n=t.bi,s=t.bj,r=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const u=r.material||n.material,f=o.material||s.material;if(u&&f&&u.friction>=0&&f.friction>=0&&(c=u.friction*f.friction),c>0){const h=c*(a.frictionGravity||a.gravity).length();let d=n.invMass+s.invMass;d>0&&(d=1/d);const g=this.frictionEquationPool,_=g.length?g.pop():new Gf(n,s,h*d),m=g.length?g.pop():new Gf(n,s,h*d);return _.bi=m.bi=n,_.bj=m.bj=s,_.minForce=m.minForce=-h*d,_.maxForce=m.maxForce=h*d,_.ri.copy(t.ri),_.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(_.t,m.t),_.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),_.enabled=m.enabled=t.enabled,e.push(_,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];rs.setZero(),Bs.setZero(),zs.setZero();const r=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==r?(rs.vadd(e.ni,rs),Bs.vadd(e.ri,Bs),zs.vadd(e.rj,zs)):(rs.vsub(e.ni,rs),Bs.vadd(e.rj,Bs),zs.vadd(e.ri,zs));const o=1/t;Bs.scale(o,n.ri),zs.scale(o,n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj),rs.normalize(),rs.tangents(n.t,s.t)}getContacts(t,e,n,s,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=s,this.frictionResult=o;const l=Iw,c=Dw,u=Pw,f=Lw;for(let h=0,d=t.length;h!==d;h++){const g=t[h],_=e[h];let m=null;g.material&&_.material&&(m=n.getContactMaterial(g.material,_.material)||null);const p=g.type&xt.KINEMATIC&&_.type&xt.STATIC||g.type&xt.STATIC&&_.type&xt.KINEMATIC||g.type&xt.KINEMATIC&&_.type&xt.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],l),g.quaternion.vmult(g.shapeOffsets[v],u),u.vadd(g.position,u);const b=g.shapes[v];for(let x=0;x<_.shapes.length;x++){_.quaternion.mult(_.shapeOrientations[x],c),_.quaternion.vmult(_.shapeOffsets[x],f),f.vadd(_.position,f);const D=_.shapes[x];if(!(b.collisionFilterMask&D.collisionFilterGroup&&D.collisionFilterMask&b.collisionFilterGroup)||u.distanceTo(f)>b.boundingSphereRadius+D.boundingSphereRadius)continue;let L=null;b.material&&D.material&&(L=n.getContactMaterial(b.material,D.material)||null),this.currentContactMaterial=L||m||n.defaultContactMaterial;const P=b.type|D.type,N=this[P];if(N){let w=!1;b.type<D.type?w=N.call(this,b,D,u,f,l,c,g,_,b,D,p):w=N.call(this,D,b,f,u,c,l,_,g,b,D,p),w&&p&&(n.shapeOverlapKeeper.set(b.id,D.id),n.bodyOverlapKeeper.set(g.id,_.id))}}}}}sphereSphere(t,e,n,s,r,o,a,l,c,u,f){if(f)return n.distanceSquared(s)<(t.radius+e.radius)**2;const h=this.createContactEquation(a,l,t,e,c,u);s.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(t.radius,h.ri),h.rj.scale(-e.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(s,h.rj),h.rj.vsub(l.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(t,e,n,s,r,o,a,l,c,u,f){const h=this.createContactEquation(a,l,t,e,c,u);if(h.ni.set(0,0,1),o.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(t.radius,h.ri),n.vsub(s,Go),h.ni.scale(h.ni.dot(Go),Wf),Go.vsub(Wf,h.rj),-Go.dot(h.ni)<=t.radius){if(f)return!0;const d=h.ri,g=h.rj;d.vadd(n,d),d.vsub(a.position,d),g.vadd(s,g),g.vsub(l.position,g),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(t,e,n,s,r,o,a,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,s,r,o,a,l,t,e,f)}sphereBox(t,e,n,s,r,o,a,l,c,u,f){const h=this.v3pool,d=rT;n.vsub(s,Wo),e.getSideNormals(d,o);const g=t.radius;let _=!1;const m=aT,p=lT,v=cT;let b=null,x=0,D=0,L=0,P=null;for(let B=0,K=d.length;B!==K&&_===!1;B++){const H=nT;H.copy(d[B]);const lt=H.length();H.normalize();const _t=Wo.dot(H);if(_t<lt+g&&_t>0){const ct=iT,mt=sT;ct.copy(d[(B+1)%3]),mt.copy(d[(B+2)%3]);const Ht=ct.length(),at=mt.length();ct.normalize(),mt.normalize();const gt=Wo.dot(ct),At=Wo.dot(mt);if(gt<Ht&&gt>-Ht&&At<at&&At>-at){const St=Math.abs(_t-lt-g);if((P===null||St<P)&&(P=St,D=gt,L=At,b=lt,m.copy(H),p.copy(ct),v.copy(mt),x++,f))return!0}}}if(x){_=!0;const B=this.createContactEquation(a,l,t,e,c,u);m.scale(-g,B.ri),B.ni.copy(m),B.ni.negate(B.ni),m.scale(b,m),p.scale(D,p),m.vadd(p,m),v.scale(L,v),m.vadd(v,B.rj),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),B.rj.vadd(s,B.rj),B.rj.vsub(l.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}let N=h.get();const w=oT;for(let B=0;B!==2&&!_;B++)for(let K=0;K!==2&&!_;K++)for(let H=0;H!==2&&!_;H++)if(N.set(0,0,0),B?N.vadd(d[0],N):N.vsub(d[0],N),K?N.vadd(d[1],N):N.vsub(d[1],N),H?N.vadd(d[2],N):N.vsub(d[2],N),s.vadd(N,w),w.vsub(n,w),w.lengthSquared()<g*g){if(f)return!0;_=!0;const lt=this.createContactEquation(a,l,t,e,c,u);lt.ri.copy(w),lt.ri.normalize(),lt.ni.copy(lt.ri),lt.ri.scale(g,lt.ri),lt.rj.copy(N),lt.ri.vadd(n,lt.ri),lt.ri.vsub(a.position,lt.ri),lt.rj.vadd(s,lt.rj),lt.rj.vsub(l.position,lt.rj),this.result.push(lt),this.createFrictionEquationsFromContact(lt,this.frictionResult)}h.release(N),N=null;const S=h.get(),U=h.get(),Y=h.get(),O=h.get(),W=h.get(),V=d.length;for(let B=0;B!==V&&!_;B++)for(let K=0;K!==V&&!_;K++)if(B%3!==K%3){d[K].cross(d[B],S),S.normalize(),d[B].vadd(d[K],U),Y.copy(n),Y.vsub(U,Y),Y.vsub(s,Y);const H=Y.dot(S);S.scale(H,O);let lt=0;for(;lt===B%3||lt===K%3;)lt++;W.copy(n),W.vsub(O,W),W.vsub(U,W),W.vsub(s,W);const _t=Math.abs(H),ct=W.length();if(_t<d[lt].length()&&ct<g){if(f)return!0;_=!0;const mt=this.createContactEquation(a,l,t,e,c,u);U.vadd(O,mt.rj),mt.rj.copy(mt.rj),W.negate(mt.ni),mt.ni.normalize(),mt.ri.copy(mt.rj),mt.ri.vadd(s,mt.ri),mt.ri.vsub(n,mt.ri),mt.ri.normalize(),mt.ri.scale(g,mt.ri),mt.ri.vadd(n,mt.ri),mt.ri.vsub(a.position,mt.ri),mt.rj.vadd(s,mt.rj),mt.rj.vsub(l.position,mt.rj),this.result.push(mt),this.createFrictionEquationsFromContact(mt,this.frictionResult)}}h.release(S,U,Y,O,W)}planeBox(t,e,n,s,r,o,a,l,c,u,f){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,s,r,o,a,l,t,e,f)}convexConvex(t,e,n,s,r,o,a,l,c,u,f,h,d){const g=bT;if(!(n.distanceTo(s)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,r,s,o,g,h,d)){const _=[],m=wT;t.clipAgainstHull(n,r,e,s,o,g,-100,100,_);let p=0;for(let v=0;v!==_.length;v++){if(f)return!0;const b=this.createContactEquation(a,l,t,e,c,u),x=b.ri,D=b.rj;g.negate(b.ni),_[v].normal.negate(m),m.scale(_[v].depth,m),_[v].point.vadd(m,x),D.copy(_[v].point),x.vsub(n,x),D.vsub(s,D),x.vadd(n,x),x.vsub(a.position,x),D.vadd(s,D),D.vsub(l.position,D),this.result.push(b),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(b,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,s,r,o,a,l,c,u,f){const h=this.v3pool;n.vsub(s,uT);const d=e.faceNormals,g=e.faces,_=e.vertices,m=t.radius;let p=!1;for(let v=0;v!==_.length;v++){const b=_[v],x=pT;o.vmult(b,x),s.vadd(x,x);const D=dT;if(x.vsub(n,D),D.lengthSquared()<m*m){if(f)return!0;p=!0;const L=this.createContactEquation(a,l,t,e,c,u);L.ri.copy(D),L.ri.normalize(),L.ni.copy(L.ri),L.ri.scale(m,L.ri),x.vsub(s,L.rj),L.ri.vadd(n,L.ri),L.ri.vsub(a.position,L.ri),L.rj.vadd(s,L.rj),L.rj.vsub(l.position,L.rj),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult);return}}for(let v=0,b=g.length;v!==b&&p===!1;v++){const x=d[v],D=g[v],L=mT;o.vmult(x,L);const P=gT;o.vmult(_[D[0]],P),P.vadd(s,P);const N=_T;L.scale(-m,N),n.vadd(N,N);const w=vT;N.vsub(P,w);const S=w.dot(L),U=xT;if(n.vsub(P,U),S<0&&U.dot(L)>0){const Y=[];for(let O=0,W=D.length;O!==W;O++){const V=h.get();o.vmult(_[D[O]],V),s.vadd(V,V),Y.push(V)}if(eT(Y,L,n)){if(f)return!0;p=!0;const O=this.createContactEquation(a,l,t,e,c,u);L.scale(-m,O.ri),L.negate(O.ni);const W=h.get();L.scale(-S,W);const V=h.get();L.scale(-m,V),n.vsub(s,O.rj),O.rj.vadd(V,O.rj),O.rj.vadd(W,O.rj),O.rj.vadd(s,O.rj),O.rj.vsub(l.position,O.rj),O.ri.vadd(n,O.ri),O.ri.vsub(a.position,O.ri),h.release(W),h.release(V),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult);for(let B=0,K=Y.length;B!==K;B++)h.release(Y[B]);return}else for(let O=0;O!==D.length;O++){const W=h.get(),V=h.get();o.vmult(_[D[(O+1)%D.length]],W),o.vmult(_[D[(O+2)%D.length]],V),s.vadd(W,W),s.vadd(V,V);const B=hT;V.vsub(W,B);const K=fT;B.unit(K);const H=h.get(),lt=h.get();n.vsub(W,lt);const _t=lt.dot(K);K.scale(_t,H),H.vadd(W,H);const ct=h.get();if(H.vsub(n,ct),_t>0&&_t*_t<B.lengthSquared()&&ct.lengthSquared()<m*m){if(f)return!0;const mt=this.createContactEquation(a,l,t,e,c,u);H.vsub(s,mt.rj),H.vsub(n,mt.ni),mt.ni.normalize(),mt.ni.scale(m,mt.ri),mt.rj.vadd(s,mt.rj),mt.rj.vsub(l.position,mt.rj),mt.ri.vadd(n,mt.ri),mt.ri.vsub(a.position,mt.ri),this.result.push(mt),this.createFrictionEquationsFromContact(mt,this.frictionResult);for(let Ht=0,at=Y.length;Ht!==at;Ht++)h.release(Y[Ht]);h.release(W),h.release(V),h.release(H),h.release(ct),h.release(lt);return}h.release(W),h.release(V),h.release(H),h.release(ct),h.release(lt)}for(let O=0,W=Y.length;O!==W;O++)h.release(Y[O])}}}planeConvex(t,e,n,s,r,o,a,l,c,u,f){const h=yT,d=ST;d.set(0,0,1),r.vmult(d,d);let g=0;const _=MT;for(let m=0;m!==e.vertices.length;m++)if(h.copy(e.vertices[m]),o.vmult(h,h),s.vadd(h,h),h.vsub(n,_),d.dot(_)<=0){if(f)return!0;const v=this.createContactEquation(a,l,t,e,c,u),b=ET;d.scale(d.dot(_),b),h.vsub(b,b),b.vsub(n,v.ri),v.ni.copy(d),h.vsub(s,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(s,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,s,r,o,a,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,s,r,o,a,l,t,e,f)}sphereHeightfield(t,e,n,s,r,o,a,l,c,u,f){const h=e.data,d=t.radius,g=e.elementSize,_=OT,m=FT;ae.pointToLocalFrame(s,o,n,m);let p=Math.floor((m.x-d)/g)-1,v=Math.ceil((m.x+d)/g)+1,b=Math.floor((m.y-d)/g)-1,x=Math.ceil((m.y+d)/g)+1;if(v<0||x<0||p>h.length||b>h[0].length)return;p<0&&(p=0),v<0&&(v=0),b<0&&(b=0),x<0&&(x=0),p>=h.length&&(p=h.length-1),v>=h.length&&(v=h.length-1),x>=h[0].length&&(x=h[0].length-1),b>=h[0].length&&(b=h[0].length-1);const D=[];e.getRectMinMax(p,b,v,x,D);const L=D[0],P=D[1];if(m.z-d>P||m.z+d<L)return;const N=this.result;for(let w=p;w<v;w++)for(let S=b;S<x;S++){const U=N.length;let Y=!1;if(e.getConvexTrianglePillar(w,S,!1),ae.pointToWorldFrame(s,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(Y=this.sphereConvex(t,e.pillarConvex,n,_,r,o,a,l,t,e,f)),f&&Y||(e.getConvexTrianglePillar(w,S,!0),ae.pointToWorldFrame(s,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(Y=this.sphereConvex(t,e.pillarConvex,n,_,r,o,a,l,t,e,f)),f&&Y))return!0;if(N.length-U>2)return}}boxHeightfield(t,e,n,s,r,o,a,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,s,r,o,a,l,t,e,f)}convexHeightfield(t,e,n,s,r,o,a,l,c,u,f){const h=e.data,d=e.elementSize,g=t.boundingSphereRadius,_=NT,m=UT,p=DT;ae.pointToLocalFrame(s,o,n,p);let v=Math.floor((p.x-g)/d)-1,b=Math.ceil((p.x+g)/d)+1,x=Math.floor((p.y-g)/d)-1,D=Math.ceil((p.y+g)/d)+1;if(b<0||D<0||v>h.length||x>h[0].length)return;v<0&&(v=0),b<0&&(b=0),x<0&&(x=0),D<0&&(D=0),v>=h.length&&(v=h.length-1),b>=h.length&&(b=h.length-1),D>=h[0].length&&(D=h[0].length-1),x>=h[0].length&&(x=h[0].length-1);const L=[];e.getRectMinMax(v,x,b,D,L);const P=L[0],N=L[1];if(!(p.z-g>N||p.z+g<P))for(let w=v;w<b;w++)for(let S=x;S<D;S++){let U=!1;if(e.getConvexTrianglePillar(w,S,!1),ae.pointToWorldFrame(s,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(U=this.convexConvex(t,e.pillarConvex,n,_,r,o,a,l,null,null,f,m,null)),f&&U||(e.getConvexTrianglePillar(w,S,!0),ae.pointToWorldFrame(s,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(U=this.convexConvex(t,e.pillarConvex,n,_,r,o,a,l,null,null,f,m,null)),f&&U))return!0}}sphereParticle(t,e,n,s,r,o,a,l,c,u,f){const h=RT;if(h.set(0,0,1),s.vsub(n,h),h.lengthSquared()<=t.radius*t.radius){if(f)return!0;const g=this.createContactEquation(l,a,e,t,c,u);h.normalize(),g.rj.copy(h),g.rj.scale(t.radius,g.rj),g.ni.copy(h),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,s,r,o,a,l,c,u,f){const h=TT;h.set(0,0,1),a.quaternion.vmult(h,h);const d=AT;if(s.vsub(a.position,d),h.dot(d)<=0){if(f)return!0;const _=this.createContactEquation(l,a,e,t,c,u);_.ni.copy(h),_.ni.negate(_.ni),_.ri.set(0,0,0);const m=CT;h.scale(h.dot(s),m),s.vsub(m,m),_.rj.copy(m),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(t,e,n,s,r,o,a,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,s,r,o,a,l,t,e,f)}convexParticle(t,e,n,s,r,o,a,l,c,u,f){let h=-1;const d=LT,g=IT;let _=null;const m=PT;if(m.copy(s),m.vsub(n,m),r.conjugate(qf),qf.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let p=0,v=t.faces.length;p!==v;p++){const b=[t.worldVertices[t.faces[p][0]]],x=t.worldFaceNormals[p];s.vsub(b[0],Xf);const D=-x.dot(Xf);if(_===null||Math.abs(D)<Math.abs(_)){if(f)return!0;_=D,h=p,d.copy(x)}}if(h!==-1){const p=this.createContactEquation(l,a,e,t,c,u);d.scale(_,g),g.vadd(s,g),g.vsub(n,g),p.rj.copy(g),d.negate(p.ni),p.ri.set(0,0,0);const v=p.ri,b=p.rj;v.vadd(s,v),v.vsub(l.position,v),b.vadd(n,b),b.vsub(a.position,b),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,s,r,o,a,l,c,u,f){return this.convexHeightfield(e,t,s,n,o,r,l,a,c,u,f)}particleCylinder(t,e,n,s,r,o,a,l,c,u,f){return this.convexParticle(e,t,s,n,o,r,l,a,c,u,f)}sphereTrimesh(t,e,n,s,r,o,a,l,c,u,f){const h=Hw,d=Vw,g=Gw,_=Ww,m=qw,p=Xw,v=Kw,b=kw,x=Bw,D=Zw;ae.pointToLocalFrame(s,o,n,m);const L=t.radius;v.lowerBound.set(m.x-L,m.y-L,m.z-L),v.upperBound.set(m.x+L,m.y+L,m.z+L),e.getTrianglesInAABB(v,D);const P=zw,N=t.radius*t.radius;for(let O=0;O<D.length;O++)for(let W=0;W<3;W++)if(e.getVertex(e.indices[D[O]*3+W],P),P.vsub(m,x),x.lengthSquared()<=N){if(b.copy(P),ae.pointToWorldFrame(s,o,b,P),P.vsub(n,x),f)return!0;let V=this.createContactEquation(a,l,t,e,c,u);V.ni.copy(x),V.ni.normalize(),V.ri.copy(V.ni),V.ri.scale(t.radius,V.ri),V.ri.vadd(n,V.ri),V.ri.vsub(a.position,V.ri),V.rj.copy(P),V.rj.vsub(l.position,V.rj),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}for(let O=0;O<D.length;O++)for(let W=0;W<3;W++){e.getVertex(e.indices[D[O]*3+W],h),e.getVertex(e.indices[D[O]*3+(W+1)%3],d),d.vsub(h,g),m.vsub(d,p);const V=p.dot(g);m.vsub(h,p);let B=p.dot(g);if(B>0&&V<0&&(m.vsub(h,p),_.copy(g),_.normalize(),B=p.dot(_),_.scale(B,p),p.vadd(h,p),p.distanceTo(m)<t.radius)){if(f)return!0;const H=this.createContactEquation(a,l,t,e,c,u);p.vsub(m,H.ni),H.ni.normalize(),H.ni.scale(t.radius,H.ri),H.ri.vadd(n,H.ri),H.ri.vsub(a.position,H.ri),ae.pointToWorldFrame(s,o,p,p),p.vsub(l.position,H.rj),ae.vectorToWorldFrame(o,H.ni,H.ni),ae.vectorToWorldFrame(o,H.ri,H.ri),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult)}}const w=$w,S=Yw,U=jw,Y=Ow;for(let O=0,W=D.length;O!==W;O++){e.getTriangleVertices(D[O],w,S,U),e.getNormal(D[O],Y),m.vsub(w,p);let V=p.dot(Y);if(Y.scale(V,p),m.vsub(p,p),V=p.distanceTo(m),Ce.pointInTriangle(p,w,S,U)&&V<t.radius){if(f)return!0;let B=this.createContactEquation(a,l,t,e,c,u);p.vsub(m,B.ni),B.ni.normalize(),B.ni.scale(t.radius,B.ri),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),ae.pointToWorldFrame(s,o,p,p),p.vsub(l.position,B.rj),ae.vectorToWorldFrame(o,B.ni,B.ni),ae.vectorToWorldFrame(o,B.ri,B.ri),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}}D.length=0}planeTrimesh(t,e,n,s,r,o,a,l,c,u,f){const h=new E,d=Nw;d.set(0,0,1),r.vmult(d,d);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,h);const _=new E;_.copy(h),ae.pointToWorldFrame(s,o,_,h);const m=Uw;if(h.vsub(n,m),d.dot(m)<=0){if(f)return!0;const v=this.createContactEquation(a,l,t,e,c,u);v.ni.copy(d);const b=Fw;d.scale(m.dot(d),b),h.vsub(b,b),v.ri.copy(b),v.ri.vsub(a.position,v.ri),v.rj.copy(h),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const rs=new E,Bs=new E,zs=new E,Pw=new E,Lw=new E,Iw=new Re,Dw=new Re,Nw=new E,Uw=new E,Fw=new E,Ow=new E,Bw=new E;new E;const zw=new E,kw=new E,Hw=new E,Vw=new E,Gw=new E,Ww=new E,qw=new E,Xw=new E,$w=new E,Yw=new E,jw=new E,Kw=new mn,Zw=[],Go=new E,Wf=new E,Jw=new E,Qw=new E,tT=new E;function eT(i,t,e){let n=null;const s=i.length;for(let r=0;r!==s;r++){const o=i[r],a=Jw;i[(r+1)%s].vsub(o,a);const l=Qw;a.cross(t,l);const c=tT;e.vsub(o,c);const u=l.dot(c);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}const Wo=new E,nT=new E,iT=new E,sT=new E,rT=[new E,new E,new E,new E,new E,new E],oT=new E,aT=new E,lT=new E,cT=new E,uT=new E,hT=new E,fT=new E,dT=new E,pT=new E,mT=new E,gT=new E,_T=new E,vT=new E,xT=new E;new E;new E;const yT=new E,ST=new E,MT=new E,ET=new E,bT=new E,wT=new E,TT=new E,AT=new E,CT=new E,RT=new E,qf=new Re,PT=new E;new E;const LT=new E,Xf=new E,IT=new E,DT=new E,NT=new E,UT=[0],FT=new E,OT=new E;class $f{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),s=this.current;let r=0;for(;n>s[r];)r++;if(n!==s[r]){for(let o=s.length-1;o>=r;o--)s[o+1]=s[o];s[r]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,s=this.previous,r=n.length,o=s.length;let a=0;for(let l=0;l<r;l++){let c=!1;const u=n[l];for(;u>s[a];)a++;c=u===s[a],c||Yf(t,u)}a=0;for(let l=0;l<o;l++){let c=!1;const u=s[l];for(;u>n[a];)a++;c=n[a]===u,c||Yf(e,u)}}}function Yf(i,t){i.push((t&4294901760)>>16,t&65535)}const Nl=(i,t)=>i<t?`${i}-${t}`:`${t}-${i}`;class BT{constructor(){this.data={keys:[]}}get(t,e){const n=Nl(t,e);return this.data[n]}set(t,e,n){const s=Nl(t,e);this.get(t,e)||this.data.keys.push(s),this.data[s]=n}delete(t,e){const n=Nl(t,e),s=this.data.keys.indexOf(n);s!==-1&&this.data.keys.splice(s,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class zT extends am{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new E,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new E,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Xb,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new Ew,this.constraints=[],this.narrowphase=new Rw(this),this.collisionMatrix=new Df,this.collisionMatrixPrevious=new Df,this.bodyOverlapKeeper=new $f,this.shapeOverlapKeeper=new $f,this.contactmaterials=[],this.contactMaterialTable=new BT,this.defaultMaterial=new or("default"),this.defaultContactMaterial=new rr(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof da?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,s){return n===void 0&&(n={}),n.mode=Ce.ALL,n.from=t,n.to=e,n.callback=s,Ul.intersectWorld(this,n)}raycastAny(t,e,n,s){return n===void 0&&(n={}),n.mode=Ce.ANY,n.from=t,n.to=e,n.result=s,Ul.intersectWorld(this,n)}raycastClosest(t,e,n,s){return n===void 0&&(n={}),n.mode=Ce.CLOSEST,n.from=t,n.to=e,n.result=s,Ul.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof xt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,s=n.indexOf(t);if(s!==-1){n.splice(s,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const s=e[n].shapes;for(let r=0;r<s.length;r++){const o=s[r];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=Ie.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const s=n-this.lastCallTime;this.step(t,s,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const s=Ie.now();let r=0;for(;this.accumulator>=t&&r<n&&(this.internalStep(t),this.accumulator-=t,r++,!(Ie.now()-s>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=WT,s=qT,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,u=this.profile,f=xt.DYNAMIC;let h=-1/0;const d=this.constraints,g=GT;l.length();const _=l.x,m=l.y,p=l.z;let v=0;for(c&&(h=Ie.now()),v=0;v!==r;v++){const O=o[v];if(O.type===f){const W=O.force,V=O.mass;W.x+=V*_,W.y+=V*m,W.z+=V*p}}for(let O=0,W=this.subsystems.length;O!==W;O++)this.subsystems[O].update();c&&(h=Ie.now()),n.length=0,s.length=0,this.broadphase.collisionPairs(this,n,s),c&&(u.broadphase=Ie.now()-h);let b=d.length;for(v=0;v!==b;v++){const O=d[v];if(!O.collideConnected)for(let W=n.length-1;W>=0;W-=1)(O.bodyA===n[W]&&O.bodyB===s[W]||O.bodyB===n[W]&&O.bodyA===s[W])&&(n.splice(W,1),s.splice(W,1))}this.collisionMatrixTick(),c&&(h=Ie.now());const x=VT,D=e.length;for(v=0;v!==D;v++)x.push(e[v]);e.length=0;const L=this.frictionEquations.length;for(v=0;v!==L;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,s,this,e,x,this.frictionEquations,g),c&&(u.narrowphase=Ie.now()-h),c&&(h=Ie.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const P=e.length;for(let O=0;O!==P;O++){const W=e[O],V=W.bi,B=W.bj,K=W.si,H=W.sj;let lt;if(V.material&&B.material?lt=this.getContactMaterial(V.material,B.material)||this.defaultContactMaterial:lt=this.defaultContactMaterial,lt.friction,V.material&&B.material&&(V.material.friction>=0&&B.material.friction>=0&&V.material.friction*B.material.friction,V.material.restitution>=0&&B.material.restitution>=0&&(W.restitution=V.material.restitution*B.material.restitution)),a.addEquation(W),V.allowSleep&&V.type===xt.DYNAMIC&&V.sleepState===xt.SLEEPING&&B.sleepState===xt.AWAKE&&B.type!==xt.STATIC){const _t=B.velocity.lengthSquared()+B.angularVelocity.lengthSquared(),ct=B.sleepSpeedLimit**2;_t>=ct*2&&(V.wakeUpAfterNarrowphase=!0)}if(B.allowSleep&&B.type===xt.DYNAMIC&&B.sleepState===xt.SLEEPING&&V.sleepState===xt.AWAKE&&V.type!==xt.STATIC){const _t=V.velocity.lengthSquared()+V.angularVelocity.lengthSquared(),ct=V.sleepSpeedLimit**2;_t>=ct*2&&(B.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(V,B,!0),this.collisionMatrixPrevious.get(V,B)||(Rr.body=B,Rr.contact=W,V.dispatchEvent(Rr),Rr.body=V,B.dispatchEvent(Rr)),this.bodyOverlapKeeper.set(V.id,B.id),this.shapeOverlapKeeper.set(K.id,H.id)}for(this.emitContactEvents(),c&&(u.makeContactConstraints=Ie.now()-h,h=Ie.now()),v=0;v!==r;v++){const O=o[v];O.wakeUpAfterNarrowphase&&(O.wakeUp(),O.wakeUpAfterNarrowphase=!1)}for(b=d.length,v=0;v!==b;v++){const O=d[v];O.update();for(let W=0,V=O.equations.length;W!==V;W++){const B=O.equations[W];a.addEquation(B)}}a.solve(t,this),c&&(u.solve=Ie.now()-h),a.removeAllEquations();const N=Math.pow;for(v=0;v!==r;v++){const O=o[v];if(O.type&f){const W=N(1-O.linearDamping,t),V=O.velocity;V.scale(W,V);const B=O.angularVelocity;if(B){const K=N(1-O.angularDamping,t);B.scale(K,B)}}}this.dispatchEvent(HT),c&&(h=Ie.now());const S=this.stepnumber%(this.quatNormalizeSkip+1)===0,U=this.quatNormalizeFast;for(v=0;v!==r;v++)o[v].integrate(t,S,U);this.clearForces(),this.broadphase.dirty=!0,c&&(u.integrate=Ie.now()-h),this.stepnumber+=1,this.dispatchEvent(kT);let Y=!0;if(this.allowSleep)for(Y=!1,v=0;v!==r;v++){const O=o[v];O.sleepTick(this.time),O.sleepState!==xt.SLEEPING&&(Y=!0)}this.hasActiveBodies=Y}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(ai,li),t){for(let r=0,o=ai.length;r<o;r+=2)Pr.bodyA=this.getBodyById(ai[r]),Pr.bodyB=this.getBodyById(ai[r+1]),this.dispatchEvent(Pr);Pr.bodyA=Pr.bodyB=null}if(e){for(let r=0,o=li.length;r<o;r+=2)Lr.bodyA=this.getBodyById(li[r]),Lr.bodyB=this.getBodyById(li[r+1]),this.dispatchEvent(Lr);Lr.bodyA=Lr.bodyB=null}ai.length=li.length=0;const n=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((n||s)&&this.shapeOverlapKeeper.getDiff(ai,li),n){for(let r=0,o=ai.length;r<o;r+=2){const a=this.getShapeById(ai[r]),l=this.getShapeById(ai[r+1]);ci.shapeA=a,ci.shapeB=l,a&&(ci.bodyA=a.body),l&&(ci.bodyB=l.body),this.dispatchEvent(ci)}ci.bodyA=ci.bodyB=ci.shapeA=ci.shapeB=null}if(s){for(let r=0,o=li.length;r<o;r+=2){const a=this.getShapeById(li[r]),l=this.getShapeById(li[r+1]);ui.shapeA=a,ui.shapeB=l,a&&(ui.bodyA=a.body),l&&(ui.bodyB=l.body),this.dispatchEvent(ui)}ui.bodyA=ui.bodyB=ui.shapeA=ui.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const s=t[n];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}}new mn;const Ul=new Ce,Ie=globalThis.performance||{};if(!Ie.now){let i=Date.now();Ie.timing&&Ie.timing.navigationStart&&(i=Ie.timing.navigationStart),Ie.now=()=>Date.now()-i}new E;const kT={type:"postStep"},HT={type:"preStep"},Rr={type:xt.COLLIDE_EVENT_NAME,body:null,contact:null},VT=[],GT=[],WT=[],qT=[],ai=[],li=[],Pr={type:"beginContact",bodyA:null,bodyB:null},Lr={type:"endContact",bodyA:null,bodyB:null},ci={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},ui={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},XT=33,Ir=.5,$T=-.5,YT=2,jT=100,KT=vs({__name:"GameScene",setup(i){const t=xs(),e=ur(),n=Ee(null);let s,r,o,a,l;const c=[],u=[];let f=0,h=!1,d=0,g,_=!1,m,p,v;function b(A){const F=document.createElement("canvas");F.width=256,F.height=256;const z=F.getContext("2d");z.fillStyle="#f8f8f8",z.fillRect(0,0,256,256);const j=256*.07,Z={1:[[.5,.5]],2:[[.28,.28],[.72,.72]],3:[[.28,.28],[.5,.5],[.72,.72]],4:[[.28,.28],[.72,.28],[.28,.72],[.72,.72]],5:[[.28,.28],[.72,.28],[.5,.5],[.28,.72],[.72,.72]],6:[[.28,.25],[.72,.25],[.28,.5],[.72,.5],[.28,.75],[.72,.75]]};z.fillStyle="#1a1a2e";for(const[bt,ut]of Z[A])z.beginPath(),z.arc(bt*256,ut*256,j,0,Math.PI*2),z.fill();const st=new bf(F);return st.needsUpdate=!0,st}const x=[3,4,1,6,2,5];function D(){return x.map(A=>{const R=b(A);return new Os({map:R,roughness:.3,metalness:0})})}const L={1:new $(0,1,0),6:new $(0,-1,0),2:new $(0,0,1),5:new $(0,0,-1),3:new $(1,0,0),4:new $(-1,0,0)};function P(A){const R=new $(0,1,0);let F=-1/0,z=1;for(const[j,Z]of Object.entries(L)){const bt=Z.clone().applyQuaternion(A).dot(R);bt>F&&(F=bt,z=parseInt(j))}return z}function N(A){const R=new Wi;switch(A){case 1:R.setFromEuler(new qe(0,0,0));break;case 6:R.setFromEuler(new qe(Math.PI,0,0));break;case 2:R.setFromEuler(new qe(Math.PI/2,0,0));break;case 5:R.setFromEuler(new qe(-Math.PI/2,0,0));break;case 3:R.setFromEuler(new qe(0,0,-Math.PI/2));break;case 4:R.setFromEuler(new qe(0,0,Math.PI/2));break}return R}function w(){if(!n.value)return;s=new db({canvas:n.value,antialias:!0,alpha:!1}),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.shadowMap.enabled=!0,s.shadowMap.type=Tp,s.shadowMap.autoUpdate=!1,s.shadowMap.needsUpdate=!0,s.toneMapping=Cp,s.toneMappingExposure=1.2,nt(),r=new pb,r.background=new ne("#0d0d14"),r.fog=new Mu("#0d0d14",15,30),o=new un(45,pt(),.1,100),o.position.set(0,12,.01),o.lookAt(0,0,0);const A=new xb(16777215,.5);r.add(A);const R=new vb(16777215,1);R.position.set(3,12,3),R.castShadow=!0,R.shadow.mapSize.width=2048,R.shadow.mapSize.height=2048,R.shadow.camera.near=.5,R.shadow.camera.far=30,R.shadow.camera.left=-8,R.shadow.camera.right=8,R.shadow.camera.top=8,R.shadow.camera.bottom=-8,r.add(R);const F=new gb(16766617,.6,20);F.position.set(0,6,0),r.add(F),a=new zT({gravity:new E(0,-15,0)}),a.broadphase=new Gs(a),a.solver.iterations=10,a.allowSleep=!0,a.defaultContactMaterial.contactEquationStiffness=1e8,a.defaultContactMaterial.contactEquationRelaxation=3,p=new or("dice"),v=new or("table"),a.addContactMaterial(new rr(p,v,{friction:.4,restitution:.3})),a.addContactMaterial(new rr(p,p,{friction:.3,restitution:.4})),U(),Y(),W(),V()}function S(){const F=document.createElement("canvas");F.width=1024,F.height=768;const z=F.getContext("2d"),j=z.createRadialGradient(1024/2,768/2,80,1024/2,768/2,1024*.62);j.addColorStop(0,"#3f9161"),j.addColorStop(1,"#297347"),z.fillStyle=j,z.fillRect(0,0,1024,768);for(let st=0;st<3500;st++)z.fillStyle=Math.random()>.5?"rgba(255,255,255,0.03)":"rgba(0,40,20,0.04)",z.fillRect(Math.random()*1024,Math.random()*768,2,2);z.strokeStyle="rgba(246, 237, 214, 0.5)",z.lineWidth=6,z.beginPath(),z.roundRect(56,56,912,656,40),z.stroke();const Z=new bf(F);return Z.anisotropy=4,Z}function U(){const A=new Os({map:S(),roughness:.85,metalness:0}),R=new Os({color:"#2a6742",roughness:.85}),F=new zo(8,.3,6,2,.06),z=new Oe(F,[R,R,A,R,R,R]);z.position.y=-.15,z.receiveShadow=!0,r.add(z);const j=new Os({color:"#c9a26b",roughness:.5,metalness:.05}),Z=new zo(8.7,.45,.35,2,.09),st=new zo(.35,.45,6.7,2,.09),bt=new Oe(Z,j);bt.position.set(0,.03,3.17),bt.castShadow=!0,bt.receiveShadow=!0,r.add(bt);const ut=new Oe(Z,j);ut.position.set(0,.03,-3.17),ut.castShadow=!0,ut.receiveShadow=!0,r.add(ut);const ht=new Oe(st,j);ht.position.set(-4.17,.03,0),ht.castShadow=!0,ht.receiveShadow=!0,r.add(ht);const yt=new Oe(st,j);yt.position.set(4.17,.03,0),yt.castShadow=!0,yt.receiveShadow=!0,r.add(yt),m=new xt({type:xt.STATIC,material:v}),m.addShape(new zi(new E(4,1,3)),new E(0,-1,0)),a.addBody(m)}function Y(){const F=v,z=new zi(new E(4+.5*2,4,.5)),j=[new E(0,3,3+.5),new E(0,3,-3-.5)],Z=new zi(new E(.5,4,3+.5*2)),st=[new E(4+.5,3,0),new E(-4-.5,3,0)];for(const ut of j){const ht=new xt({type:xt.STATIC,material:F});ht.addShape(z),ht.position.copy(ut),a.addBody(ht)}for(const ut of st){const ht=new xt({type:xt.STATIC,material:F});ht.addShape(Z),ht.position.copy(ut),a.addBody(ht)}const bt=new xt({type:xt.STATIC,material:F});bt.addShape(new zi(new E(5,.25,4))),bt.position.set(0,7.25,0),a.addBody(bt)}const O=Ir/2;function W(){for(let A=0;A<5;A++){const R=new zo(Ir,Ir,Ir,4,Ir*.12),F=D(),z=new Oe(R,F);z.castShadow=!0,z.receiveShadow=!0,z.position.set(-10,-10,-10),z.visible=!1,r.add(z),c.push(z);const j=new xt({mass:.3,type:xt.STATIC,material:p,shape:new zi(new E(O,O,O)),allowSleep:!0,sleepSpeedLimit:.1,sleepTimeLimit:1,linearDamping:.1,angularDamping:.1});j.position.set(-10,-10,-10),a.addBody(j),u.push(j)}}function V(){g=new Or;const A=1.8,R=[new Vt(0,.07),new Vt(.76,.09),new Vt(.83,.6),new Vt(.86,1.56),new Vt(.93,1.73),new Vt(1.02,1.8),new Vt(1.06,1.7),new Vt(.96,1.25),new Vt(.94,.75),new Vt(1,.2),new Vt(1.02,.07),new Vt(.95,0),new Vt(0,0)],F=new Eu(R,48),z=new Os({color:"#dcb686",roughness:.45,metalness:.05,side:Wn}),j=new Oe(F,z);j.castShadow=!0,j.position.y=-A/2,g.add(j);const Z=new Os({color:"#8a5f3d",roughness:.5}),st=new Oe(new bu(.99,.028,12,48),Z);st.rotation.x=Math.PI/2,st.position.y=1.42-A/2,g.add(st),g.position.set(3,A/2+.01,0),g.visible=!1,r.add(g)}async function B(){if(_)return;_=!0,h=!1,f=performance.now(),d=0;const A=[],R=[];for(let F=0;F<5;F++)t.turnState.kept[F]?A.push(F):R.push(F);A.forEach((F,z)=>{const j=-2+z*.8,Z=c[F],st=u[F];st.type=xt.STATIC,st.position.set(j,O+.01,2),st.velocity.setZero(),st.angularVelocity.setZero(),Z.visible=!0,Z.position.set(j,O+.01,2);const bt=t.turnState.dice[F];if(bt>0){const ut=N(bt);Z.quaternion.copy(ut),st.quaternion.set(ut.x,ut.y,ut.z,ut.w)}}),g.visible=!0,g.position.set(0,1.5,-1),g.rotation.set(0,0,0),await K(),await H();for(let F=0;F<R.length;F++){const z=R[F],j=u[z],Z=c[z];j.type=xt.DYNAMIC,j.wakeUp();const st=(Math.random()-.5)*1.5,bt=(Math.random()-.5)*.5;j.position.set(st,3+Math.random()*1,-.5+bt),j.quaternion.setFromEuler(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),j.velocity.set((Math.random()-.5)*5,-2+Math.random()*2,(Math.random()-.5)*4),j.angularVelocity.set((Math.random()-.5)*20,(Math.random()-.5)*20,(Math.random()-.5)*20),Z.visible=!0}await lt(),_=!1}function K(){return new Promise(A=>{const R=performance.now(),F=500;function z(){const j=performance.now()-R,Z=Math.min(j/F,1),st=Math.sin(Z*Math.PI*6)*.15*(1-Z);g.rotation.z=st,g.position.y=1.5+Math.abs(Math.sin(Z*Math.PI*3))*.2,Z<1?requestAnimationFrame(z):A()}z()})}function H(){return new Promise(A=>{const R=performance.now(),F=400;function z(){const j=performance.now()-R,Z=Math.min(j/F,1),st=Z*Z*(3-2*Z);g.rotation.x=-st*1.8,g.position.y=1.5+st*2,g.position.z=-1+st*1,Z<1?requestAnimationFrame(z):A()}z()})}function lt(){return new Promise(A=>{const R=performance.now(),F=300;function z(){const j=performance.now()-R,Z=Math.min(j/F,1);g.position.x=5*Z,g.position.y=3.5-Z*2,Z<1?requestAnimationFrame(z):(g.visible=!1,A())}z()})}function _t(){for(let A=0;A<5;A++){if(t.turnState.kept[A])continue;const R=u[A];if(R.type!==xt.STATIC&&R.position.y<$T){const F=(Math.random()-.5)*2,z=(Math.random()-.5)*2;R.position.set(F,YT,z),R.velocity.set(0,-1,0),R.angularVelocity.set((Math.random()-.5)*5,(Math.random()-.5)*5,(Math.random()-.5)*5),R.wakeUp(),console.warn(`[Physics] 주사위 ${A}이(가) 낙하하여 복구됨`)}}}function ct(){for(let R=0;R<5;R++){if(t.turnState.kept[R])continue;const F=u[R];if(F.type===xt.STATIC)continue;const z=F.velocity,j=F.angularVelocity;if(z.length()>.05||j.length()>.05)return!1}return!0}function mt(){const A=performance.now();if(A-d<XT)return;d=A;const R={dice:c.map(F=>({p:[Math.round(F.position.x*1e3)/1e3,Math.round(F.position.y*1e3)/1e3,Math.round(F.position.z*1e3)/1e3],q:[Math.round(F.quaternion.x*1e3)/1e3,Math.round(F.quaternion.y*1e3)/1e3,Math.round(F.quaternion.z*1e3)/1e3,Math.round(F.quaternion.w*1e3)/1e3],v:F.visible})),cup:{p:[Math.round(g.position.x*1e3)/1e3,Math.round(g.position.y*1e3)/1e3,Math.round(g.position.z*1e3)/1e3],r:[Math.round(g.rotation.x*1e3)/1e3,Math.round(g.rotation.y*1e3)/1e3,Math.round(g.rotation.z*1e3)/1e3],v:g.visible}};e.sendPhysicsStream(R)}let Ht=[],at=null;const gt=new Wi,At=new Wi;function St(){const A=t.physicsStreamData;A&&A!==at&&(at=A,Ht.push({time:performance.now(),frame:A}),Ht.length>30&&Ht.shift())}function kt(A){if(A.dice)for(let R=0;R<5;R++){const F=A.dice[R];F&&(c[R].visible=F.v,F.v&&(c[R].position.set(F.p[0],F.p[1],F.p[2]),c[R].quaternion.set(F.q[0],F.q[1],F.q[2],F.q[3])))}A.cup&&(g.visible=A.cup.v,A.cup.v&&(g.position.set(A.cup.p[0],A.cup.p[1],A.cup.p[2]),g.rotation.set(A.cup.r[0],A.cup.r[1],A.cup.r[2])))}function Gt(){var bt,ut;if(Ht.length===0)return;const A=performance.now()-jT;let R=Ht[0],F=null;for(let ht=Ht.length-1;ht>=0;ht--)if(Ht[ht].time<=A){R=Ht[ht],F=Ht[ht+1]??null;break}if(!F){kt(Ht[Ht.length-1].frame);return}const z=F.time-R.time,j=z>0?Math.min(Math.max((A-R.time)/z,0),1):1,Z=R.frame,st=F.frame;if(st.dice)for(let ht=0;ht<5;ht++){const yt=st.dice[ht];if(!yt||(c[ht].visible=yt.v,!yt.v))continue;const Dt=(bt=Z.dice)==null?void 0:bt[ht];if(!Dt||!Dt.v){c[ht].position.set(yt.p[0],yt.p[1],yt.p[2]),c[ht].quaternion.set(yt.q[0],yt.q[1],yt.q[2],yt.q[3]);continue}c[ht].position.set(Dt.p[0]+(yt.p[0]-Dt.p[0])*j,Dt.p[1]+(yt.p[1]-Dt.p[1])*j,Dt.p[2]+(yt.p[2]-Dt.p[2])*j),gt.set(Dt.q[0],Dt.q[1],Dt.q[2],Dt.q[3]).normalize(),At.set(yt.q[0],yt.q[1],yt.q[2],yt.q[3]).normalize(),c[ht].quaternion.slerpQuaternions(gt,At,j)}if(st.cup&&(g.visible=st.cup.v,st.cup.v)){const ht=(ut=Z.cup)!=null&&ut.v?Z.cup:st.cup;g.position.set(ht.p[0]+(st.cup.p[0]-ht.p[0])*j,ht.p[1]+(st.cup.p[1]-ht.p[1])*j,ht.p[2]+(st.cup.p[2]-ht.p[2])*j),g.rotation.set(ht.r[0]+(st.cup.r[0]-ht.r[0])*j,ht.r[1]+(st.cup.r[1]-ht.r[1])*j,ht.r[2]+(st.cup.r[2]-ht.r[2])*j)}}function qt(){const A=t.turnState.dice;for(let R=0;R<5;R++){if(A[R]<=0)continue;const F=c[R];if(!F.visible)continue;if(P(F.quaternion)!==A[R]){let j=function(){const ht=performance.now()-bt,yt=Math.min(ht/ut,1),Dt=yt*yt*(3-2*yt);F.quaternion.slerpQuaternions(st,Z,Dt),u[R].quaternion.set(F.quaternion.x,F.quaternion.y,F.quaternion.z,F.quaternion.w),yt<1&&requestAnimationFrame(j)};const Z=N(A[R]),st=F.quaternion.clone(),bt=performance.now(),ut=200;j()}u[R].type=xt.STATIC,u[R].velocity.setZero(),u[R].angularVelocity.setZero()}}function _e(){h=!1,f=performance.now(),t.physicsStreamData=null,Ht=[],at=null;for(let A=0;A<5;A++)u[A].type=xt.STATIC,u[A].velocity.setZero(),u[A].angularVelocity.setZero()}function I(){if(h)return;h=!0;for(let R=0;R<5;R++)!t.turnState.kept[R]&&u[R].type===xt.DYNAMIC&&(c[R].position.copy(u[R].position),c[R].quaternion.copy(u[R].quaternion));const A=[];for(let R=0;R<5;R++)t.turnState.kept[R]?A.push(t.turnState.dice[R]||P(c[R].quaternion)):A.push(P(c[R].quaternion));for(let R=0;R<5;R++)t.turnState.kept[R]||(u[R].type=xt.STATIC,u[R].velocity.setZero(),u[R].angularVelocity.setZero());console.log("[Roller] 물리 결과 전송:",A),e.submitDiceResult(A)}const k=new ne("#2244aa"),C=new ne("#000000");function ft(){for(let A=0;A<5;A++){const R=c[A];if(!R.visible)continue;const F=R.material,z=t.turnState.kept[A];F.forEach(j=>{j.emissive.copy(z?k:C),j.emissiveIntensity=z?.3:0})}}let tt=0,et=0;function rt(){l=requestAnimationFrame(rt);const A=performance.now(),R=tt>0?Math.min((A-tt)/1e3,.1):1/60;tt=A;const F=t.isRolling&&!t.isMyRolling,z=u.some(j=>j.type===xt.DYNAMIC&&j.sleepState!==xt.SLEEPING);if(a&&!F&&(z||t.isRolling)&&(a.step(1/120,R,5),_t()),!F)for(let j=0;j<5;j++)c[j].visible&&u[j].type===xt.DYNAMIC&&(c[j].position.copy(u[j].interpolatedPosition),c[j].quaternion.copy(u[j].interpolatedQuaternion));if((t.isRolling||_||z)&&(et=A),A-et<500&&(s.shadowMap.needsUpdate=!0),t.isRolling&&t.isMyRolling&&mt(),F&&(St(),Gt()),t.isRolling&&t.isMyRolling&&!_&&!h){const j=performance.now()-f;if(j>1500&&ct()&&I(),j>1e4){for(let Z=0;Z<5;Z++)t.turnState.kept[Z]||(u[Z].velocity.setZero(),u[Z].angularVelocity.setZero());I()}}if(ft(),o){const j=performance.now()*1e-4;o.position.x=Math.sin(j)*.05,o.position.z=.01+Math.cos(j)*.05}s&&r&&o&&s.render(r,o)}function pt(){return n.value?n.value.clientWidth/n.value.clientHeight:16/9}function nt(){if(!n.value||!s)return;const A=n.value.clientWidth,R=n.value.clientHeight;s.setSize(A,R,!1),o&&(o.aspect=A/R,o.updateProjectionMatrix())}let M=null;function y(A){if(!n.value||!o||!t.isMyTurn||t.turnState.rollCount===0||t.turnState.rollCount>=3||t.isRolling)return;const R=n.value.getBoundingClientRect(),F=new Vt((A.clientX-R.left)/R.width*2-1,-((A.clientY-R.top)/R.height)*2+1),z=new yb;z.setFromCamera(F,o);const j=z.intersectObjects(c);if(j.length>0){const Z=j[0].object,st=c.indexOf(Z);st>=0&&t.toggleKeep(st)}}return $s(()=>t.isRolling,(A,R)=>{A&&!R?t.isMyRolling?B():_e():!A&&R&&(t.isMyRolling||qt())}),$s(()=>t.turnState.rollCount,A=>{A===0&&c.forEach(R=>{R.visible=!1})}),io(()=>{w(),rt(),M=new ResizeObserver(()=>{nt()}),n.value&&M.observe(n.value.parentElement)}),Ud(()=>{cancelAnimationFrame(l),M==null||M.disconnect(),s==null||s.dispose()}),(A,R)=>(Tt(),It("canvas",{ref_key:"canvasRef",ref:n,class:"game-canvas",onClick:y},null,512))}}),ZT=hr(KT,[["__scopeId","data-v-26c183b9"]]),ar=["ones","twos","threes","fours","fives","sixes"],Da=["choice","fourOfAKind","fullHouse","smallStraight","largeStraight","yacht"];[...ar,...Da];const lr={ones:"Ones (1)",twos:"Twos (2)",threes:"Threes (3)",fours:"Fours (4)",fives:"Fives (5)",sixes:"Sixes (6)",choice:"Choice",fourOfAKind:"Four of a Kind",fullHouse:"Full House",smallStraight:"Small Straight",largeStraight:"Large Straight",yacht:"Yacht!"},JT={class:"score-card"},QT={class:"section"},tA=["onClick"],eA={class:"cat-label"},nA={class:"cat-score"},iA={key:1,class:"preview"},sA={class:"score-row subtotal"},rA={class:"cat-label"},oA={key:0,class:"bonus-achieved"},aA={class:"cat-score"},lA={class:"score-row bonus"},cA={class:"cat-score"},uA={class:"section"},hA=["onClick"],fA={class:"cat-label"},dA={class:"cat-score"},pA={key:1,class:"preview"},mA={class:"total-row"},gA={class:"total-score"},_A=vs({__name:"ScoreCard",setup(i){const t=xs(),e=ur(),n=Ge(()=>{let a=0;for(const l of ar){const c=t.myScores[l];c!==null&&(a+=c)}return a});function s(a){return t.canSelectScore&&t.myScores[a]===null}function r(a){return t.myScores[a]!==null||!t.canSelectScore?null:t.possibleScores[a]??null}function o(a){s(a)&&e.selectCategory(a)}return(a,l)=>(Tt(),It("div",JT,[l[5]||(l[5]=it("h3",{class:"card-title"},"MY SCORE",-1)),it("div",QT,[l[2]||(l[2]=it("div",{class:"section-header"},"UPPER",-1)),(Tt(!0),It(oe,null,Fe(Bt(ar),c=>(Tt(),It("div",{key:c,class:Kn(["score-row",{filled:Bt(t).myScores[c]!==null,selectable:s(c),"has-preview":r(c)!==null}]),onClick:u=>o(c)},[it("span",eA,Yt(Bt(lr)[c]),1),it("span",nA,[Bt(t).myScores[c]!==null?(Tt(),It(oe,{key:0},[sn(Yt(Bt(t).myScores[c]),1)],64)):r(c)!==null?(Tt(),It("span",iA,Yt(r(c)),1)):(Tt(),It(oe,{key:2},[sn(" - ")],64))])],10,tA))),128)),it("div",sA,[it("span",rA,[l[0]||(l[0]=sn(" Subtotal ",-1)),n.value>=63?(Tt(),It("span",oA,"+35")):fn("",!0)]),it("span",aA,Yt(n.value)+" / 63",1)]),it("div",lA,[l[1]||(l[1]=it("span",{class:"cat-label"},"Bonus",-1)),it("span",cA,Yt(Bt(t).myBonus),1)])]),it("div",uA,[l[3]||(l[3]=it("div",{class:"section-header"},"LOWER",-1)),(Tt(!0),It(oe,null,Fe(Bt(Da),c=>(Tt(),It("div",{key:c,class:Kn(["score-row",{filled:Bt(t).myScores[c]!==null,selectable:s(c),"has-preview":r(c)!==null,yacht:c==="yacht"&&r(c)===50}]),onClick:u=>o(c)},[it("span",fA,Yt(Bt(lr)[c]),1),it("span",dA,[Bt(t).myScores[c]!==null?(Tt(),It(oe,{key:0},[sn(Yt(Bt(t).myScores[c]),1)],64)):r(c)!==null?(Tt(),It("span",pA,Yt(r(c)),1)):(Tt(),It(oe,{key:2},[sn(" - ")],64))])],10,hA))),128))]),it("div",mA,[l[4]||(l[4]=it("span",null,"TOTAL",-1)),it("span",gA,Yt(Bt(t).myTotal),1)])]))}}),vA=hr(_A,[["__scopeId","data-v-8814a682"]]),xA={class:"popup-card"},yA={key:0,class:"loading"},SA={class:"popup-header"},MA={class:"player-info"},EA={class:"player-name"},bA={class:"popup-body"},wA={class:"section"},TA={class:"cat-label"},AA={class:"cat-score"},CA={class:"score-row subtotal"},RA={class:"cat-label"},PA={key:0,class:"bonus-tag"},LA={class:"cat-score"},IA={class:"score-row bonus-row"},DA={class:"cat-score"},NA={class:"section"},UA={class:"cat-label"},FA={class:"cat-score"},OA={class:"total-row"},BA={class:"total-score"},zA=vs({__name:"PlayerScorePopup",props:{data:{}},emits:["close"],setup(i,{emit:t}){const e=i,n=t;function s(){if(!e.data)return 0;let o=0;for(const a of ar){const l=e.data.scores[a];l!==null&&(o+=l)}return o}function r(o){o.target.classList.contains("popup-overlay")&&n("close")}return(o,a)=>(Tt(),It("div",{class:"popup-overlay",onClick:r},[it("div",xA,[i.data?(Tt(),It(oe,{key:1},[it("div",SA,[it("div",MA,[it("span",{class:"player-dot",style:cn({background:i.data.color})},null,4),it("span",EA,Yt(i.data.name),1)]),it("button",{class:"close-btn",onClick:a[0]||(a[0]=l=>n("close"))},"✕")]),it("div",bA,[it("div",wA,[a[4]||(a[4]=it("div",{class:"section-header"},"UPPER",-1)),(Tt(!0),It(oe,null,Fe(Bt(ar),l=>(Tt(),It("div",{key:l,class:Kn(["score-row",{filled:i.data.scores[l]!==null}])},[it("span",TA,Yt(Bt(lr)[l]),1),it("span",AA,Yt(i.data.scores[l]!==null?i.data.scores[l]:"-"),1)],2))),128)),it("div",CA,[it("span",RA,[a[2]||(a[2]=sn(" Subtotal ",-1)),s()>=63?(Tt(),It("span",PA,"+35")):fn("",!0)]),it("span",LA,Yt(s())+" / 63",1)]),it("div",IA,[a[3]||(a[3]=it("span",{class:"cat-label"},"Bonus",-1)),it("span",DA,Yt(i.data.bonus),1)])]),it("div",NA,[a[5]||(a[5]=it("div",{class:"section-header"},"LOWER",-1)),(Tt(!0),It(oe,null,Fe(Bt(Da),l=>(Tt(),It("div",{key:l,class:Kn(["score-row",{filled:i.data.scores[l]!==null}])},[it("span",UA,Yt(Bt(lr)[l]),1),it("span",FA,Yt(i.data.scores[l]!==null?i.data.scores[l]:"-"),1)],2))),128))]),it("div",OA,[a[6]||(a[6]=it("span",null,"TOTAL",-1)),it("span",BA,Yt(i.data.total),1)])])],64)):(Tt(),It("div",yA,[...a[1]||(a[1]=[it("span",{class:"loading-spinner"},null,-1),it("span",null,"불러오는 중...",-1)])]))])]))}}),kA=hr(zA,[["__scopeId","data-v-a96b7ade"]]),HA={class:"game-view"},VA={class:"top-bar"},GA={class:"turn-info"},WA={class:"turn-text"},qA={class:"game-info"},XA={class:"info-item"},$A={class:"value"},YA={class:"info-item"},jA={class:"value"},KA={class:"player-badges"},ZA=["onClick"],JA={class:"badge-name"},QA={class:"main-area"},t1={class:"scene-container"},e1={class:"side-panel"},n1={class:"controls-area"},i1={key:0,class:"dice-results"},s1=["onClick"],r1={class:"dice-number"},o1={key:0,class:"kept-dot"},a1={class:"dice-sum"},l1={class:"sum-value"},c1=["disabled"],u1={class:"scorecard-wrapper"},h1=vs({__name:"GameView",setup(i){const t=xs(),e=ur(),n=Ee(!1);function s(h){h!==t.mySocketId&&(e.requestPlayerScore(h),n.value=!0)}function r(){n.value=!1,t.clearViewingPlayerScore()}const o=Ge(()=>{const h=t.currentPlayer;return h?`${h.id===t.mySocketId?"나":h.name}의 차례`:""}),a=Ge(()=>t.isRolling?"굴리는 중...":t.turnState.rollCount===0?"주사위 굴리기":t.turnState.rollCount>=3?"점수를 선택하세요":`다시 굴리기 (${t.turnState.rollCount}/3)`);function l(){t.turnState.rollCount>0&&e.setKept(t.turnState.kept),setTimeout(()=>{e.rollDice()},t.turnState.rollCount>0?50:0)}function c(h){!t.isMyTurn||t.turnState.rollCount===0||t.turnState.rollCount>=3||t.isRolling||(t.toggleKeep(h),e.setKept(t.turnState.kept))}const u=Ge(()=>t.turnState.dice.map((h,d)=>({value:h,kept:t.turnState.kept[d]}))),f=Ge(()=>t.turnState.dice.reduce((h,d)=>h+d,0));return(h,d)=>{var g;return Tt(),It("div",HA,[it("div",VA,[it("div",GA,[it("span",{class:"turn-dot",style:cn({background:((g=Bt(t).currentPlayer)==null?void 0:g.color)||"#666"})},null,4),it("span",WA,Yt(o.value),1)]),it("div",qA,[it("div",XA,[d[0]||(d[0]=it("span",{class:"label"},"라운드",-1)),it("span",$A,Yt(Bt(t).currentRound)+" / 12",1)]),it("div",YA,[d[1]||(d[1]=it("span",{class:"label"},"굴림",-1)),it("span",jA,Yt(Bt(t).turnState.rollCount)+" / 3",1)])]),it("div",KA,[(Tt(!0),It(oe,null,Fe(Bt(t).players,_=>{var m;return Tt(),It("div",{key:_.id,class:Kn(["player-badge",{"is-current":_.id===((m=Bt(t).currentPlayer)==null?void 0:m.id),"is-me":_.id===Bt(t).mySocketId,clickable:_.id!==Bt(t).mySocketId}]),onClick:p=>s(_.id)},[it("span",{class:"badge-dot",style:cn({background:_.color})},null,4),it("span",JA,[sn(Yt(_.name)+" ",1),_.id===Bt(t).mySocketId?(Tt(),It(oe,{key:0},[sn("(나)")],64)):fn("",!0)])],10,ZA)}),128))])]),it("div",QA,[it("div",t1,[Dn(ZT)]),it("div",e1,[it("div",n1,[Bt(t).turnState.rollCount>0?(Tt(),It("div",i1,[(Tt(!0),It(oe,null,Fe(u.value,(_,m)=>(Tt(),It("div",{key:m,class:Kn(["dice-chip",{kept:_.kept,clickable:Bt(t).isMyTurn&&Bt(t).turnState.rollCount>0&&Bt(t).turnState.rollCount<3&&!Bt(t).isRolling}]),onClick:p=>c(m)},[it("span",r1,Yt(_.value>0?_.value:"?"),1),_.kept?(Tt(),It("span",o1)):fn("",!0)],10,s1))),128)),it("div",a1,[d[2]||(d[2]=it("span",{class:"sum-label"},"합계",-1)),it("span",l1,Yt(f.value),1)])])):fn("",!0),it("button",{class:"btn btn-primary roll-btn",disabled:!Bt(t).canRoll,onClick:l},Yt(a.value),9,c1)]),it("div",u1,[Dn(vA)])])]),n.value?(Tt(),Xr(kA,{key:0,data:Bt(t).viewingPlayerScore,onClose:r},null,8,["data"])):fn("",!0)])}}}),f1=hr(h1,[["__scopeId","data-v-fe1cc534"]]),d1={class:"result-view"},p1={key:0,class:"confetti-container"},m1={class:"result-container"},g1={key:0,class:"winner-card"},_1={class:"winner-score"},v1={class:"rankings-table"},x1={class:"rank-player"},y1={class:"rank-name"},S1={key:0,class:"me-tag"},M1={class:"rank-total"},E1={class:"detail-table-wrap"},b1={class:"detail-table"},w1={class:"section-label"},T1=["colspan"],A1={class:"bonus-row"},C1={class:"section-label"},R1=["colspan"],P1={class:"total-row"},L1={class:"result-actions"},I1={key:1,class:"wait-text"},D1=vs({__name:"ResultView",setup(i){const t=xs(),e=ur(),n=Ee(!1),s=Ge(()=>t.rankings[0]);function r(){e.restartGame()}io(()=>{n.value=!0,setTimeout(()=>{n.value=!1},5e3)});function o(l){return l===1?"1st":l===2?"2nd":l===3?"3rd":`${l}th`}function a(l){return l===1?"var(--gold)":l===2?"var(--silver)":l===3?"var(--bronze)":"var(--text-muted)"}return(l,c)=>(Tt(),It("div",d1,[n.value?(Tt(),It("div",p1,[(Tt(),It(oe,null,Fe(60,u=>it("div",{key:u,class:"confetti-piece",style:cn({left:Math.random()*100+"%",animationDelay:Math.random()*3+"s",animationDuration:2+Math.random()*3+"s",background:["#ef4444","#3b82f6","#22c55e","#eab308","#a855f7","#ec4899"][u%6]})},null,4)),64))])):fn("",!0),it("div",m1,[c[4]||(c[4]=it("h1",{class:"result-title"},"GAME OVER",-1)),s.value?(Tt(),It("div",g1,[c[0]||(c[0]=it("div",{class:"crown"},"♔",-1)),it("div",{class:"winner-name",style:cn({color:s.value.color})},Yt(s.value.name),5),it("div",_1,Yt(s.value.totalScore)+" pts",1)])):fn("",!0),it("div",v1,[(Tt(!0),It(oe,null,Fe(Bt(t).rankings,u=>(Tt(),It("div",{key:u.playerId,class:Kn(["rank-row",{"is-me":u.playerId===Bt(t).mySocketId,"is-winner":u.rank===1}])},[it("div",{class:"rank-medal",style:cn({color:a(u.rank)})},Yt(o(u.rank)),5),it("div",x1,[it("span",{class:"rank-dot",style:cn({background:u.color})},null,4),it("span",y1,[sn(Yt(u.name)+" ",1),u.playerId===Bt(t).mySocketId?(Tt(),It("span",S1,"(나)")):fn("",!0)])]),it("div",M1,Yt(u.totalScore),1)],2))),128))]),it("div",E1,[it("table",b1,[it("thead",null,[it("tr",null,[c[1]||(c[1]=it("th",null,"카테고리",-1)),(Tt(!0),It(oe,null,Fe(Bt(t).rankings,u=>(Tt(),It("th",{key:u.playerId,style:cn({color:u.color})},Yt(u.name),5))),128))])]),it("tbody",null,[it("tr",w1,[it("td",{colspan:Bt(t).rankings.length+1},"Upper Section",8,T1)]),(Tt(!0),It(oe,null,Fe(Bt(ar),u=>(Tt(),It("tr",{key:u},[it("td",null,Yt(Bt(lr)[u]),1),(Tt(!0),It(oe,null,Fe(Bt(t).rankings,f=>(Tt(),It("td",{key:f.playerId},Yt(f.scores[u]??"-"),1))),128))]))),128)),it("tr",A1,[c[2]||(c[2]=it("td",null,"Bonus (+35)",-1)),(Tt(!0),It(oe,null,Fe(Bt(t).rankings,u=>(Tt(),It("td",{key:u.playerId},Yt(u.upperBonus),1))),128))]),it("tr",C1,[it("td",{colspan:Bt(t).rankings.length+1},"Lower Section",8,R1)]),(Tt(!0),It(oe,null,Fe(Bt(Da),u=>(Tt(),It("tr",{key:u},[it("td",null,Yt(Bt(lr)[u]),1),(Tt(!0),It(oe,null,Fe(Bt(t).rankings,f=>(Tt(),It("td",{key:f.playerId},Yt(f.scores[u]??"-"),1))),128))]))),128)),it("tr",P1,[c[3]||(c[3]=it("td",null,"TOTAL",-1)),(Tt(!0),It(oe,null,Fe(Bt(t).rankings,u=>(Tt(),It("td",{key:u.playerId,style:cn({color:u.color})},[it("strong",null,Yt(u.totalScore),1)],4))),128))])])])]),it("div",L1,[Bt(t).isHost?(Tt(),It("button",{key:0,class:"btn btn-primary btn-lg",onClick:r}," 다시 하기 ")):(Tt(),It("p",I1,"호스트가 다시 시작할 때까지 대기 중..."))])])]))}}),N1=hr(D1,[["__scopeId","data-v-41e99f8f"]]),U1={class:"app"},F1=vs({__name:"App",setup(i){const t=xs(),e=ur();return io(()=>{bp()&&e.connect()}),(n,s)=>(Tt(),It("div",U1,[Bt(t).phase==="waiting"?(Tt(),Xr(p0,{key:0})):Bt(t).phase==="playing"?(Tt(),Xr(f1,{key:1})):Bt(t).phase==="finished"?(Tt(),Xr(N1,{key:2})):fn("",!0)]))}}),gm=z_(F1);gm.use(V_());gm.mount("#app");
