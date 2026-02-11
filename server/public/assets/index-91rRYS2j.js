(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Bc(i){const t=Object.create(null);for(const e of i.split(","))t[e]=1;return e=>e in t}const ge={},Hs=[],qn=()=>{},kf=()=>!1,ha=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),zc=i=>i.startsWith("onUpdate:"),Be=Object.assign,kc=(i,t)=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)},um=Object.prototype.hasOwnProperty,ue=(i,t)=>um.call(i,t),Gt=Array.isArray,Gs=i=>Zr(i)==="[object Map]",Vf=i=>Zr(i)==="[object Set]",Lu=i=>Zr(i)==="[object Date]",Yt=i=>typeof i=="function",Le=i=>typeof i=="string",$n=i=>typeof i=="symbol",me=i=>i!==null&&typeof i=="object",Hf=i=>(me(i)||Yt(i))&&Yt(i.then)&&Yt(i.catch),Gf=Object.prototype.toString,Zr=i=>Gf.call(i),hm=i=>Zr(i).slice(8,-1),Wf=i=>Zr(i)==="[object Object]",fa=i=>Le(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Nr=Bc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),da=i=>{const t=Object.create(null);return(e=>t[e]||(t[e]=i(e)))},fm=/-\w/g,Gi=da(i=>i.replace(fm,t=>t.slice(1).toUpperCase())),dm=/\B([A-Z])/g,Yi=da(i=>i.replace(dm,"-$1").toLowerCase()),qf=da(i=>i.charAt(0).toUpperCase()+i.slice(1)),Da=da(i=>i?`on${qf(i)}`:""),zi=(i,t)=>!Object.is(i,t),Vo=(i,...t)=>{for(let e=0;e<i.length;e++)i[e](...t)},Xf=(i,t,e,n=!1)=>{Object.defineProperty(i,t,{configurable:!0,enumerable:!1,writable:n,value:e})},Vc=i=>{const t=parseFloat(i);return isNaN(t)?i:t};let Iu;const pa=()=>Iu||(Iu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ln(i){if(Gt(i)){const t={};for(let e=0;e<i.length;e++){const n=i[e],s=Le(n)?_m(n):ln(n);if(s)for(const r in s)t[r]=s[r]}return t}else if(Le(i)||me(i))return i}const pm=/;(?![^(]*\))/g,mm=/:([^]+)/,gm=/\/\*[^]*?\*\//g;function _m(i){const t={};return i.replace(gm,"").split(pm).forEach(e=>{if(e){const n=e.split(mm);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function jn(i){let t="";if(Le(i))t=i;else if(Gt(i))for(let e=0;e<i.length;e++){const n=jn(i[e]);n&&(t+=n+" ")}else if(me(i))for(const e in i)i[e]&&(t+=e+" ");return t.trim()}const vm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xm=Bc(vm);function Yf(i){return!!i||i===""}function ym(i,t){if(i.length!==t.length)return!1;let e=!0;for(let n=0;e&&n<i.length;n++)e=Hc(i[n],t[n]);return e}function Hc(i,t){if(i===t)return!0;let e=Lu(i),n=Lu(t);if(e||n)return e&&n?i.getTime()===t.getTime():!1;if(e=$n(i),n=$n(t),e||n)return i===t;if(e=Gt(i),n=Gt(t),e||n)return e&&n?ym(i,t):!1;if(e=me(i),n=me(t),e||n){if(!e||!n)return!1;const s=Object.keys(i).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in i){const a=i.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!Hc(i[o],t[o]))return!1}}return String(i)===String(t)}const $f=i=>!!(i&&i.__v_isRef===!0),Jt=i=>Le(i)?i:i==null?"":Gt(i)||me(i)&&(i.toString===Gf||!Yt(i.toString))?$f(i)?Jt(i.value):JSON.stringify(i,jf,2):String(i),jf=(i,t)=>$f(t)?jf(i,t.value):Gs(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[n,s],r)=>(e[Na(n,r)+" =>"]=s,e),{})}:Vf(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Na(e))}:$n(t)?Na(t):me(t)&&!Gt(t)&&!Wf(t)?String(t):t,Na=(i,t="")=>{var e;return $n(i)?`Symbol(${(e=i.description)!=null?e:t})`:i};/**
* @vue/reactivity v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let He;class Kf{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=He,!t&&He&&(this.index=(He.scopes||(He.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=He;try{return He=this,t()}finally{He=e}}}on(){++this._on===1&&(this.prevScope=He,He=this)}off(){this._on>0&&--this._on===0&&(He=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(this.effects.length=0,e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Zf(i){return new Kf(i)}function Jf(){return He}function Sm(i,t=!1){He&&He.cleanups.push(i)}let xe;const Ua=new WeakSet;class Qf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,He&&He.active&&He.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ua.has(this)&&(Ua.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ed(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Du(this),nd(this);const t=xe,e=Ln;xe=this,Ln=!0;try{return this.fn()}finally{id(this),xe=t,Ln=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)qc(t);this.deps=this.depsTail=void 0,Du(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ua.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Il(this)&&this.run()}get dirty(){return Il(this)}}let td=0,Ur,Fr;function ed(i,t=!1){if(i.flags|=8,t){i.next=Fr,Fr=i;return}i.next=Ur,Ur=i}function Gc(){td++}function Wc(){if(--td>0)return;if(Fr){let t=Fr;for(Fr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let i;for(;Ur;){let t=Ur;for(Ur=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){i||(i=n)}t=e}}if(i)throw i}function nd(i){for(let t=i.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function id(i){let t,e=i.depsTail,n=e;for(;n;){const s=n.prevDep;n.version===-1?(n===e&&(e=s),qc(n),Mm(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=s}i.deps=t,i.depsTail=e}function Il(i){for(let t=i.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(sd(t.dep.computed)||t.dep.version!==t.version))return!0;return!!i._dirty}function sd(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===qr)||(i.globalVersion=qr,!i.isSSR&&i.flags&128&&(!i.deps&&!i._dirty||!Il(i))))return;i.flags|=2;const t=i.dep,e=xe,n=Ln;xe=i,Ln=!0;try{nd(i);const s=i.fn(i._value);(t.version===0||zi(s,i._value))&&(i.flags|=128,i._value=s,t.version++)}catch(s){throw t.version++,s}finally{xe=e,Ln=n,id(i),i.flags&=-3}}function qc(i,t=!1){const{dep:e,prevSub:n,nextSub:s}=i;if(n&&(n.nextSub=s,i.prevSub=void 0),s&&(s.prevSub=n,i.nextSub=void 0),e.subs===i&&(e.subs=n,!n&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)qc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Mm(i){const{prevDep:t,nextDep:e}=i;t&&(t.nextDep=e,i.prevDep=void 0),e&&(e.prevDep=t,i.nextDep=void 0)}let Ln=!0;const rd=[];function yi(){rd.push(Ln),Ln=!1}function Si(){const i=rd.pop();Ln=i===void 0?!0:i}function Du(i){const{cleanup:t}=i;if(i.cleanup=void 0,t){const e=xe;xe=void 0;try{t()}finally{xe=e}}}let qr=0;class Em{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!xe||!Ln||xe===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==xe)e=this.activeLink=new Em(xe,this),xe.deps?(e.prevDep=xe.depsTail,xe.depsTail.nextDep=e,xe.depsTail=e):xe.deps=xe.depsTail=e,od(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const n=e.nextDep;n.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=n),e.prevDep=xe.depsTail,e.nextDep=void 0,xe.depsTail.nextDep=e,xe.depsTail=e,xe.deps===e&&(xe.deps=n)}return e}trigger(t){this.version++,qr++,this.notify(t)}notify(t){Gc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Wc()}}}function od(i){if(i.dep.sc++,i.sub.flags&4){const t=i.dep.computed;if(t&&!i.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)od(n)}const e=i.dep.subs;e!==i&&(i.prevSub=e,e&&(e.nextSub=i)),i.dep.subs=i}}const ta=new WeakMap,ds=Symbol(""),Dl=Symbol(""),Xr=Symbol("");function We(i,t,e){if(Ln&&xe){let n=ta.get(i);n||ta.set(i,n=new Map);let s=n.get(e);s||(n.set(e,s=new Xc),s.map=n,s.key=e),s.track()}}function di(i,t,e,n,s,r){const o=ta.get(i);if(!o){qr++;return}const a=l=>{l&&l.trigger()};if(Gc(),t==="clear")o.forEach(a);else{const l=Gt(i),c=l&&fa(e);if(l&&e==="length"){const u=Number(n);o.forEach((f,h)=>{(h==="length"||h===Xr||!$n(h)&&h>=u)&&a(f)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Xr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(ds)),Gs(i)&&a(o.get(Dl)));break;case"delete":l||(a(o.get(ds)),Gs(i)&&a(o.get(Dl)));break;case"set":Gs(i)&&a(o.get(ds));break}}Wc()}function bm(i,t){const e=ta.get(i);return e&&e.get(t)}function ys(i){const t=re(i);return t===i?t:(We(t,"iterate",Xr),hn(i)?t:t.map(Nn))}function ma(i){return We(i=re(i),"iterate",Xr),i}function Fi(i,t){return Mi(i)?js(vi(i)?Nn(t):t):Nn(t)}const wm={__proto__:null,[Symbol.iterator](){return Fa(this,Symbol.iterator,i=>Fi(this,i))},concat(...i){return ys(this).concat(...i.map(t=>Gt(t)?ys(t):t))},entries(){return Fa(this,"entries",i=>(i[1]=Fi(this,i[1]),i))},every(i,t){return ti(this,"every",i,t,void 0,arguments)},filter(i,t){return ti(this,"filter",i,t,e=>e.map(n=>Fi(this,n)),arguments)},find(i,t){return ti(this,"find",i,t,e=>Fi(this,e),arguments)},findIndex(i,t){return ti(this,"findIndex",i,t,void 0,arguments)},findLast(i,t){return ti(this,"findLast",i,t,e=>Fi(this,e),arguments)},findLastIndex(i,t){return ti(this,"findLastIndex",i,t,void 0,arguments)},forEach(i,t){return ti(this,"forEach",i,t,void 0,arguments)},includes(...i){return Oa(this,"includes",i)},indexOf(...i){return Oa(this,"indexOf",i)},join(i){return ys(this).join(i)},lastIndexOf(...i){return Oa(this,"lastIndexOf",i)},map(i,t){return ti(this,"map",i,t,void 0,arguments)},pop(){return mr(this,"pop")},push(...i){return mr(this,"push",i)},reduce(i,...t){return Nu(this,"reduce",i,t)},reduceRight(i,...t){return Nu(this,"reduceRight",i,t)},shift(){return mr(this,"shift")},some(i,t){return ti(this,"some",i,t,void 0,arguments)},splice(...i){return mr(this,"splice",i)},toReversed(){return ys(this).toReversed()},toSorted(i){return ys(this).toSorted(i)},toSpliced(...i){return ys(this).toSpliced(...i)},unshift(...i){return mr(this,"unshift",i)},values(){return Fa(this,"values",i=>Fi(this,i))}};function Fa(i,t,e){const n=ma(i),s=n[t]();return n!==i&&!hn(i)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const Tm=Array.prototype;function ti(i,t,e,n,s,r){const o=ma(i),a=o!==i&&!hn(i),l=o[t];if(l!==Tm[t]){const f=l.apply(i,r);return a?Nn(f):f}let c=e;o!==i&&(a?c=function(f,h){return e.call(this,Fi(i,f),h,i)}:e.length>2&&(c=function(f,h){return e.call(this,f,h,i)}));const u=l.call(o,c,n);return a&&s?s(u):u}function Nu(i,t,e,n){const s=ma(i);let r=e;return s!==i&&(hn(i)?e.length>3&&(r=function(o,a,l){return e.call(this,o,a,l,i)}):r=function(o,a,l){return e.call(this,o,Fi(i,a),l,i)}),s[t](r,...n)}function Oa(i,t,e){const n=re(i);We(n,"iterate",Xr);const s=n[t](...e);return(s===-1||s===!1)&&_a(e[0])?(e[0]=re(e[0]),n[t](...e)):s}function mr(i,t,e=[]){yi(),Gc();const n=re(i)[t].apply(i,e);return Wc(),Si(),n}const Am=Bc("__proto__,__v_isRef,__isVue"),ad=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter($n));function Cm(i){$n(i)||(i=String(i));const t=re(this);return We(t,"has",i),t.hasOwnProperty(i)}class ld{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,n){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return n===(s?r?Bm:fd:r?hd:ud).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=Gt(t);if(!s){let l;if(o&&(l=wm[e]))return l;if(e==="hasOwnProperty")return Cm}const a=Reflect.get(t,e,we(t)?t:n);if(($n(e)?ad.has(e):Am(e))||(s||We(t,"get",e),r))return a;if(we(a)){const l=o&&fa(e)?a:a.value;return s&&me(l)?Ul(l):l}return me(a)?s?Ul(a):ga(a):a}}class cd extends ld{constructor(t=!1){super(!1,t)}set(t,e,n,s){let r=t[e];const o=Gt(t)&&fa(e);if(!this._isShallow){const c=Mi(r);if(!hn(n)&&!Mi(n)&&(r=re(r),n=re(n)),!o&&we(r)&&!we(n))return c||(r.value=n),!0}const a=o?Number(e)<t.length:ue(t,e),l=Reflect.set(t,e,n,we(t)?t:s);return t===re(s)&&(a?zi(n,r)&&di(t,"set",e,n):di(t,"add",e,n)),l}deleteProperty(t,e){const n=ue(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&di(t,"delete",e,void 0),s}has(t,e){const n=Reflect.has(t,e);return(!$n(e)||!ad.has(e))&&We(t,"has",e),n}ownKeys(t){return We(t,"iterate",Gt(t)?"length":ds),Reflect.ownKeys(t)}}class Rm extends ld{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Pm=new cd,Lm=new Rm,Im=new cd(!0);const Nl=i=>i,lo=i=>Reflect.getPrototypeOf(i);function Dm(i,t,e){return function(...n){const s=this.__v_raw,r=re(s),o=Gs(r),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=s[i](...n),u=e?Nl:t?js:Nn;return!t&&We(r,"iterate",l?Dl:ds),Be(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function co(i){return function(...t){return i==="delete"?!1:i==="clear"?void 0:this}}function Nm(i,t){const e={get(s){const r=this.__v_raw,o=re(r),a=re(s);i||(zi(s,a)&&We(o,"get",s),We(o,"get",a));const{has:l}=lo(o),c=t?Nl:i?js:Nn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!i&&We(re(s),"iterate",ds),s.size},has(s){const r=this.__v_raw,o=re(r),a=re(s);return i||(zi(s,a)&&We(o,"has",s),We(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=re(a),c=t?Nl:i?js:Nn;return!i&&We(l,"iterate",ds),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return Be(e,i?{add:co("add"),set:co("set"),delete:co("delete"),clear:co("clear")}:{add(s){!t&&!hn(s)&&!Mi(s)&&(s=re(s));const r=re(this);return lo(r).has.call(r,s)||(r.add(s),di(r,"add",s,s)),this},set(s,r){!t&&!hn(r)&&!Mi(r)&&(r=re(r));const o=re(this),{has:a,get:l}=lo(o);let c=a.call(o,s);c||(s=re(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?zi(r,u)&&di(o,"set",s,r):di(o,"add",s,r),this},delete(s){const r=re(this),{has:o,get:a}=lo(r);let l=o.call(r,s);l||(s=re(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&di(r,"delete",s,void 0),c},clear(){const s=re(this),r=s.size!==0,o=s.clear();return r&&di(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Dm(s,i,t)}),e}function Yc(i,t){const e=Nm(i,t);return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(ue(e,s)&&s in n?e:n,s,r)}const Um={get:Yc(!1,!1)},Fm={get:Yc(!1,!0)},Om={get:Yc(!0,!1)};const ud=new WeakMap,hd=new WeakMap,fd=new WeakMap,Bm=new WeakMap;function zm(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function km(i){return i.__v_skip||!Object.isExtensible(i)?0:zm(hm(i))}function ga(i){return Mi(i)?i:$c(i,!1,Pm,Um,ud)}function Vm(i){return $c(i,!1,Im,Fm,hd)}function Ul(i){return $c(i,!0,Lm,Om,fd)}function $c(i,t,e,n,s){if(!me(i)||i.__v_raw&&!(t&&i.__v_isReactive))return i;const r=km(i);if(r===0)return i;const o=s.get(i);if(o)return o;const a=new Proxy(i,r===2?n:e);return s.set(i,a),a}function vi(i){return Mi(i)?vi(i.__v_raw):!!(i&&i.__v_isReactive)}function Mi(i){return!!(i&&i.__v_isReadonly)}function hn(i){return!!(i&&i.__v_isShallow)}function _a(i){return i?!!i.__v_raw:!1}function re(i){const t=i&&i.__v_raw;return t?re(t):i}function jc(i){return!ue(i,"__v_skip")&&Object.isExtensible(i)&&Xf(i,"__v_skip",!0),i}const Nn=i=>me(i)?ga(i):i,js=i=>me(i)?Ul(i):i;function we(i){return i?i.__v_isRef===!0:!1}function Te(i){return dd(i,!1)}function Hm(i){return dd(i,!0)}function dd(i,t){return we(i)?i:new Gm(i,t)}class Gm{constructor(t,e){this.dep=new Xc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:re(t),this._value=e?t:Nn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,n=this.__v_isShallow||hn(t)||Mi(t);t=n?t:re(t),zi(t,e)&&(this._rawValue=t,this._value=n?t:Nn(t),this.dep.trigger())}}function Ut(i){return we(i)?i.value:i}const Wm={get:(i,t,e)=>t==="__v_raw"?i:Ut(Reflect.get(i,t,e)),set:(i,t,e,n)=>{const s=i[t];return we(s)&&!we(e)?(s.value=e,!0):Reflect.set(i,t,e,n)}};function pd(i){return vi(i)?i:new Proxy(i,Wm)}function qm(i){const t=Gt(i)?new Array(i.length):{};for(const e in i)t[e]=Ym(i,e);return t}class Xm{constructor(t,e,n){this._object=t,this._key=e,this._defaultValue=n,this.__v_isRef=!0,this._value=void 0,this._raw=re(t);let s=!0,r=t;if(!Gt(t)||!fa(String(e)))do s=!_a(r)||hn(r);while(s&&(r=r.__v_raw));this._shallow=s}get value(){let t=this._object[this._key];return this._shallow&&(t=Ut(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&we(this._raw[this._key])){const e=this._object[this._key];if(we(e)){e.value=t;return}}this._object[this._key]=t}get dep(){return bm(this._raw,this._key)}}function Ym(i,t,e){return new Xm(i,t,e)}class $m{constructor(t,e,n){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Xc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=qr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&xe!==this)return ed(this,!0),!0}get value(){const t=this.dep.track();return sd(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function jm(i,t,e=!1){let n,s;return Yt(i)?n=i:(n=i.get,s=i.set),new $m(n,s,e)}const uo={},ea=new WeakMap;let ss;function Km(i,t=!1,e=ss){if(e){let n=ea.get(e);n||ea.set(e,n=[]),n.push(i)}}function Zm(i,t,e=ge){const{immediate:n,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=x=>s?x:hn(x)||s===!1||s===0?pi(x,1):pi(x);let u,f,h,d,g=!1,_=!1;if(we(i)?(f=()=>i.value,g=hn(i)):vi(i)?(f=()=>c(i),g=!0):Gt(i)?(_=!0,g=i.some(x=>vi(x)||hn(x)),f=()=>i.map(x=>{if(we(x))return x.value;if(vi(x))return c(x);if(Yt(x))return l?l(x,2):x()})):Yt(i)?t?f=l?()=>l(i,2):i:f=()=>{if(h){yi();try{h()}finally{Si()}}const x=ss;ss=u;try{return l?l(i,3,[d]):i(d)}finally{ss=x}}:f=qn,t&&s){const x=f,I=s===!0?1/0:s;f=()=>pi(x(),I)}const m=Jf(),p=()=>{u.stop(),m&&m.active&&kc(m.effects,u)};if(r&&t){const x=t;t=(...I)=>{x(...I),p()}}let v=_?new Array(i.length).fill(uo):uo;const T=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(t){const I=u.run();if(s||g||(_?I.some((L,P)=>zi(L,v[P])):zi(I,v))){h&&h();const L=ss;ss=u;try{const P=[I,v===uo?void 0:_&&v[0]===uo?[]:v,d];v=I,l?l(t,3,P):t(...P)}finally{ss=L}}}else u.run()};return a&&a(T),u=new Qf(f),u.scheduler=o?()=>o(T,!1):T,d=x=>Km(x,!1,u),h=u.onStop=()=>{const x=ea.get(u);if(x){if(l)l(x,4);else for(const I of x)I();ea.delete(u)}},t?n?T(!0):v=u.run():o?o(T.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function pi(i,t=1/0,e){if(t<=0||!me(i)||i.__v_skip||(e=e||new Map,(e.get(i)||0)>=t))return i;if(e.set(i,t),t--,we(i))pi(i.value,t,e);else if(Gt(i))for(let n=0;n<i.length;n++)pi(i[n],t,e);else if(Vf(i)||Gs(i))i.forEach(n=>{pi(n,t,e)});else if(Wf(i)){for(const n in i)pi(i[n],t,e);for(const n of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,n)&&pi(i[n],t,e)}return i}/**
* @vue/runtime-core v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Jr(i,t,e,n){try{return n?i(...n):i()}catch(s){va(s,t,e)}}function Kn(i,t,e,n){if(Yt(i)){const s=Jr(i,t,e,n);return s&&Hf(s)&&s.catch(r=>{va(r,t,e)}),s}if(Gt(i)){const s=[];for(let r=0;r<i.length;r++)s.push(Kn(i[r],t,e,n));return s}}function va(i,t,e,n=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ge;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](i,l,c)===!1)return}a=a.parent}if(r){yi(),Jr(r,null,10,[i,l,c]),Si();return}}Jm(i,e,s,n,o)}function Jm(i,t,e,n=!0,s=!1){if(s)throw i;console.error(i)}const je=[];let kn=-1;const Ws=[];let Oi=null,Bs=0;const md=Promise.resolve();let na=null;function gd(i){const t=na||md;return i?t.then(this?i.bind(this):i):t}function Qm(i){let t=kn+1,e=je.length;for(;t<e;){const n=t+e>>>1,s=je[n],r=Yr(s);r<i||r===i&&s.flags&2?t=n+1:e=n}return t}function Kc(i){if(!(i.flags&1)){const t=Yr(i),e=je[je.length-1];!e||!(i.flags&2)&&t>=Yr(e)?je.push(i):je.splice(Qm(t),0,i),i.flags|=1,_d()}}function _d(){na||(na=md.then(xd))}function tg(i){Gt(i)?Ws.push(...i):Oi&&i.id===-1?Oi.splice(Bs+1,0,i):i.flags&1||(Ws.push(i),i.flags|=1),_d()}function Uu(i,t,e=kn+1){for(;e<je.length;e++){const n=je[e];if(n&&n.flags&2){if(i&&n.id!==i.uid)continue;je.splice(e,1),e--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function vd(i){if(Ws.length){const t=[...new Set(Ws)].sort((e,n)=>Yr(e)-Yr(n));if(Ws.length=0,Oi){Oi.push(...t);return}for(Oi=t,Bs=0;Bs<Oi.length;Bs++){const e=Oi[Bs];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Oi=null,Bs=0}}const Yr=i=>i.id==null?i.flags&2?-1:1/0:i.id;function xd(i){try{for(kn=0;kn<je.length;kn++){const t=je[kn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Jr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;kn<je.length;kn++){const t=je[kn];t&&(t.flags&=-2)}kn=-1,je.length=0,vd(),na=null,(je.length||Ws.length)&&xd()}}let xn=null,yd=null;function ia(i){const t=xn;return xn=i,yd=i&&i.type.__scopeId||null,t}function eg(i,t=xn,e){if(!t||i._n)return i;const n=(...s)=>{n._d&&Xu(-1);const r=ia(t);let o;try{o=i(...s)}finally{ia(r),n._d&&Xu(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function ng(i,t){if(xn===null)return i;const e=Ea(xn),n=i.dirs||(i.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=ge]=t[s];r&&(Yt(r)&&(r={mounted:r,updated:r}),r.deep&&pi(o),n.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return i}function ji(i,t,e,n){const s=i.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[n];l&&(yi(),Kn(l,e,8,[i.el,a,i,t]),Si())}}function ig(i,t){if(Ke){let e=Ke.provides;const n=Ke.parent&&Ke.parent.provides;n===e&&(e=Ke.provides=Object.create(n)),e[i]=t}}function Or(i,t,e=!1){const n=$d();if(n||ps){let s=ps?ps._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(s&&i in s)return s[i];if(arguments.length>1)return e&&Yt(t)?t.call(n&&n.proxy):t}}function sg(){return!!($d()||ps)}const rg=Symbol.for("v-scx"),og=()=>Or(rg);function qs(i,t,e){return Sd(i,t,e)}function Sd(i,t,e=ge){const{immediate:n,deep:s,flush:r,once:o}=e,a=Be({},e),l=t&&n||!t&&r!=="post";let c;if(jr){if(r==="sync"){const d=og();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=qn,d.resume=qn,d.pause=qn,d}}const u=Ke;a.call=(d,g,_)=>Kn(d,u,g,_);let f=!1;r==="post"?a.scheduler=d=>{nn(d,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():Kc(d)}),a.augmentJob=d=>{t&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=Zm(i,t,a);return jr&&(c?c.push(h):l&&h()),h}function ag(i,t,e){const n=this.proxy,s=Le(i)?i.includes(".")?Md(n,i):()=>n[i]:i.bind(n,n);let r;Yt(t)?r=t:(r=t.handler,e=t);const o=Qr(this),a=Sd(s,r.bind(n),e);return o(),a}function Md(i,t){const e=t.split(".");return()=>{let n=i;for(let s=0;s<e.length&&n;s++)n=n[e[s]];return n}}const lg=Symbol("_vte"),cg=i=>i.__isTeleport,ug=Symbol("_leaveCb");function Zc(i,t){i.shapeFlag&6&&i.component?(i.transition=t,Zc(i.component.subTree,t)):i.shapeFlag&128?(i.ssContent.transition=t.clone(i.ssContent),i.ssFallback.transition=t.clone(i.ssFallback)):i.transition=t}function _s(i,t){return Yt(i)?Be({name:i.name},t,{setup:i}):i}function Ed(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}function Fu(i,t){let e;return!!((e=Object.getOwnPropertyDescriptor(i,t))&&!e.configurable)}const sa=new WeakMap;function Br(i,t,e,n,s=!1){if(Gt(i)){i.forEach((_,m)=>Br(_,t&&(Gt(t)?t[m]:t),e,n,s));return}if(zr(n)&&!s){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Br(i,t,e,n.component.subTree);return}const r=n.shapeFlag&4?Ea(n.component):n.el,o=s?null:r,{i:a,r:l}=i,c=t&&t.r,u=a.refs===ge?a.refs={}:a.refs,f=a.setupState,h=re(f),d=f===ge?kf:_=>Fu(u,_)?!1:ue(h,_),g=(_,m)=>!(m&&Fu(u,m));if(c!=null&&c!==l){if(Ou(t),Le(c))u[c]=null,d(c)&&(f[c]=null);else if(we(c)){const _=t;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(Yt(l))Jr(l,a,12,[o,u]);else{const _=Le(l),m=we(l);if(_||m){const p=()=>{if(i.f){const v=_?d(l)?f[l]:u[l]:g()||!i.k?l.value:u[i.k];if(s)Gt(v)&&kc(v,r);else if(Gt(v))v.includes(r)||v.push(r);else if(_)u[l]=[r],d(l)&&(f[l]=u[l]);else{const T=[r];g(l,i.k)&&(l.value=T),i.k&&(u[i.k]=T)}}else _?(u[l]=o,d(l)&&(f[l]=o)):m&&(g(l,i.k)&&(l.value=o),i.k&&(u[i.k]=o))};if(o){const v=()=>{p(),sa.delete(i)};v.id=-1,sa.set(i,v),nn(v,e)}else Ou(i),p()}}}function Ou(i){const t=sa.get(i);t&&(t.flags|=8,sa.delete(i))}pa().requestIdleCallback;pa().cancelIdleCallback;const zr=i=>!!i.type.__asyncLoader,bd=i=>i.type.__isKeepAlive;function hg(i,t){wd(i,"a",t)}function fg(i,t){wd(i,"da",t)}function wd(i,t,e=Ke){const n=i.__wdc||(i.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(xa(t,n,e),e){let s=e.parent;for(;s&&s.parent;)bd(s.parent.vnode)&&dg(n,t,e,s),s=s.parent}}function dg(i,t,e,n){const s=xa(t,i,n,!0);Ad(()=>{kc(n[t],s)},e)}function xa(i,t,e=Ke,n=!1){if(e){const s=e[i]||(e[i]=[]),r=t.__weh||(t.__weh=(...o)=>{yi();const a=Qr(e),l=Kn(t,e,i,o);return a(),Si(),l});return n?s.unshift(r):s.push(r),r}}const bi=i=>(t,e=Ke)=>{(!jr||i==="sp")&&xa(i,(...n)=>t(...n),e)},pg=bi("bm"),ya=bi("m"),mg=bi("bu"),gg=bi("u"),Td=bi("bum"),Ad=bi("um"),_g=bi("sp"),vg=bi("rtg"),xg=bi("rtc");function yg(i,t=Ke){xa("ec",i,t)}const Sg=Symbol.for("v-ndc");function Oe(i,t,e,n){let s;const r=e,o=Gt(i);if(o||Le(i)){const a=o&&vi(i);let l=!1,c=!1;a&&(l=!hn(i),c=Mi(i),i=ma(i)),s=new Array(i.length);for(let u=0,f=i.length;u<f;u++)s[u]=t(l?c?js(Nn(i[u])):Nn(i[u]):i[u],u,void 0,r)}else if(typeof i=="number"){s=new Array(i);for(let a=0;a<i;a++)s[a]=t(a+1,a,void 0,r)}else if(me(i))if(i[Symbol.iterator])s=Array.from(i,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(i);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(i[u],u,l,r)}}else s=[];return s}const Fl=i=>i?jd(i)?Ea(i):Fl(i.parent):null,kr=Be(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Fl(i.parent),$root:i=>Fl(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>Rd(i),$forceUpdate:i=>i.f||(i.f=()=>{Kc(i.update)}),$nextTick:i=>i.n||(i.n=gd.bind(i.proxy)),$watch:i=>ag.bind(i)}),Ba=(i,t)=>i!==ge&&!i.__isScriptSetup&&ue(i,t),Mg={get({_:i},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:n,data:s,props:r,accessCache:o,type:a,appContext:l}=i;if(t[0]!=="$"){const h=o[t];if(h!==void 0)switch(h){case 1:return n[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Ba(n,t))return o[t]=1,n[t];if(s!==ge&&ue(s,t))return o[t]=2,s[t];if(ue(r,t))return o[t]=3,r[t];if(e!==ge&&ue(e,t))return o[t]=4,e[t];Ol&&(o[t]=0)}}const c=kr[t];let u,f;if(c)return t==="$attrs"&&We(i.attrs,"get",""),c(i);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==ge&&ue(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,ue(f,t))return f[t]},set({_:i},t,e){const{data:n,setupState:s,ctx:r}=i;return Ba(s,t)?(s[t]=e,!0):n!==ge&&ue(n,t)?(n[t]=e,!0):ue(i.props,t)||t[0]==="$"&&t.slice(1)in i?!1:(r[t]=e,!0)},has({_:{data:i,setupState:t,accessCache:e,ctx:n,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||i!==ge&&a[0]!=="$"&&ue(i,a)||Ba(t,a)||ue(r,a)||ue(n,a)||ue(kr,a)||ue(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(i,t,e){return e.get!=null?i._.accessCache[t]=0:ue(e,"value")&&this.set(i,t,e.value,null),Reflect.defineProperty(i,t,e)}};function Bu(i){return Gt(i)?i.reduce((t,e)=>(t[e]=null,t),{}):i}let Ol=!0;function Eg(i){const t=Rd(i),e=i.proxy,n=i.ctx;Ol=!1,t.beforeCreate&&zu(t.beforeCreate,i,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:v,destroyed:T,unmounted:x,render:I,renderTracked:L,renderTriggered:P,errorCaptured:D,serverPrefetch:w,expose:M,inheritAttrs:N,components:V,directives:U,filters:z}=t;if(c&&bg(c,n,null),o)for(const $ in o){const B=o[$];Yt(B)&&(n[$]=B.bind(e))}if(s){const $=s.call(e,e);me($)&&(i.data=ga($))}if(Ol=!0,r)for(const $ in r){const B=r[$],lt=Yt(B)?B.bind(e,e):Yt(B.get)?B.get.bind(e,e):qn,st=!Yt(B)&&Yt(B.set)?B.set.bind(e):qn,gt=Ge({get:lt,set:st});Object.defineProperty(n,$,{enumerable:!0,configurable:!0,get:()=>gt.value,set:ht=>gt.value=ht})}if(a)for(const $ in a)Cd(a[$],n,e,$);if(l){const $=Yt(l)?l.call(e):l;Reflect.ownKeys($).forEach(B=>{ig(B,$[B])})}u&&zu(u,i,"c");function F($,B){Gt(B)?B.forEach(lt=>$(lt.bind(e))):B&&$(B.bind(e))}if(F(pg,f),F(ya,h),F(mg,d),F(gg,g),F(hg,_),F(fg,m),F(yg,D),F(xg,L),F(vg,P),F(Td,v),F(Ad,x),F(_g,w),Gt(M))if(M.length){const $=i.exposed||(i.exposed={});M.forEach(B=>{Object.defineProperty($,B,{get:()=>e[B],set:lt=>e[B]=lt,enumerable:!0})})}else i.exposed||(i.exposed={});I&&i.render===qn&&(i.render=I),N!=null&&(i.inheritAttrs=N),V&&(i.components=V),U&&(i.directives=U),w&&Ed(i)}function bg(i,t,e=qn){Gt(i)&&(i=Bl(i));for(const n in i){const s=i[n];let r;me(s)?"default"in s?r=Or(s.from||n,s.default,!0):r=Or(s.from||n):r=Or(s),we(r)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[n]=r}}function zu(i,t,e){Kn(Gt(i)?i.map(n=>n.bind(t.proxy)):i.bind(t.proxy),t,e)}function Cd(i,t,e,n){let s=n.includes(".")?Md(e,n):()=>e[n];if(Le(i)){const r=t[i];Yt(r)&&qs(s,r)}else if(Yt(i))qs(s,i.bind(e));else if(me(i))if(Gt(i))i.forEach(r=>Cd(r,t,e,n));else{const r=Yt(i.handler)?i.handler.bind(e):t[i.handler];Yt(r)&&qs(s,r,i)}}function Rd(i){const t=i.type,{mixins:e,extends:n}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=i.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!n?l=t:(l={},s.length&&s.forEach(c=>ra(l,c,o,!0)),ra(l,t,o)),me(t)&&r.set(t,l),l}function ra(i,t,e,n=!1){const{mixins:s,extends:r}=t;r&&ra(i,r,e,!0),s&&s.forEach(o=>ra(i,o,e,!0));for(const o in t)if(!(n&&o==="expose")){const a=wg[o]||e&&e[o];i[o]=a?a(i[o],t[o]):t[o]}return i}const wg={data:ku,props:Vu,emits:Vu,methods:Rr,computed:Rr,beforeCreate:Ye,created:Ye,beforeMount:Ye,mounted:Ye,beforeUpdate:Ye,updated:Ye,beforeDestroy:Ye,beforeUnmount:Ye,destroyed:Ye,unmounted:Ye,activated:Ye,deactivated:Ye,errorCaptured:Ye,serverPrefetch:Ye,components:Rr,directives:Rr,watch:Ag,provide:ku,inject:Tg};function ku(i,t){return t?i?function(){return Be(Yt(i)?i.call(this,this):i,Yt(t)?t.call(this,this):t)}:t:i}function Tg(i,t){return Rr(Bl(i),Bl(t))}function Bl(i){if(Gt(i)){const t={};for(let e=0;e<i.length;e++)t[i[e]]=i[e];return t}return i}function Ye(i,t){return i?[...new Set([].concat(i,t))]:t}function Rr(i,t){return i?Be(Object.create(null),i,t):t}function Vu(i,t){return i?Gt(i)&&Gt(t)?[...new Set([...i,...t])]:Be(Object.create(null),Bu(i),Bu(t??{})):t}function Ag(i,t){if(!i)return t;if(!t)return i;const e=Be(Object.create(null),i);for(const n in t)e[n]=Ye(i[n],t[n]);return e}function Pd(){return{app:null,config:{isNativeTag:kf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cg=0;function Rg(i,t){return function(n,s=null){Yt(n)||(n=Be({},n)),s!=null&&!me(s)&&(s=null);const r=Pd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Cg++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:o_,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&Yt(u.install)?(o.add(u),u.install(c,...f)):Yt(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||In(n,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),i(d,u,h),l=!0,c._container=u,u.__vue_app__=c,Ea(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Kn(a,c._instance,16),i(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=ps;ps=c;try{return u()}finally{ps=f}}};return c}}let ps=null;const Pg=(i,t)=>t==="modelValue"||t==="model-value"?i.modelModifiers:i[`${t}Modifiers`]||i[`${Gi(t)}Modifiers`]||i[`${Yi(t)}Modifiers`];function Lg(i,t,...e){if(i.isUnmounted)return;const n=i.vnode.props||ge;let s=e;const r=t.startsWith("update:"),o=r&&Pg(n,t.slice(7));o&&(o.trim&&(s=e.map(u=>Le(u)?u.trim():u)),o.number&&(s=e.map(Vc)));let a,l=n[a=Da(t)]||n[a=Da(Gi(t))];!l&&r&&(l=n[a=Da(Yi(t))]),l&&Kn(l,i,6,s);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,Kn(c,i,6,s)}}const Ig=new WeakMap;function Ld(i,t,e=!1){const n=e?Ig:t.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let o={},a=!1;if(!Yt(i)){const l=c=>{const u=Ld(c,t,!0);u&&(a=!0,Be(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!r&&!a?(me(i)&&n.set(i,null),null):(Gt(r)?r.forEach(l=>o[l]=null):Be(o,r),me(i)&&n.set(i,o),o)}function Sa(i,t){return!i||!ha(t)?!1:(t=t.slice(2).replace(/Once$/,""),ue(i,t[0].toLowerCase()+t.slice(1))||ue(i,Yi(t))||ue(i,t))}function Hu(i){const{type:t,vnode:e,proxy:n,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=i,m=ia(i);let p,v;try{if(e.shapeFlag&4){const x=s||n,I=x;p=Vn(c.call(I,x,u,f,d,h,g)),v=a}else{const x=t;p=Vn(x.length>1?x(f,{attrs:a,slots:o,emit:l}):x(f,null)),v=t.props?a:Dg(a)}}catch(x){Vr.length=0,va(x,i,1),p=In(Wi)}let T=p;if(v&&_!==!1){const x=Object.keys(v),{shapeFlag:I}=T;x.length&&I&7&&(r&&x.some(zc)&&(v=Ng(v,r)),T=Ks(T,v,!1,!0))}return e.dirs&&(T=Ks(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(e.dirs):e.dirs),e.transition&&Zc(T,e.transition),p=T,ia(m),p}const Dg=i=>{let t;for(const e in i)(e==="class"||e==="style"||ha(e))&&((t||(t={}))[e]=i[e]);return t},Ng=(i,t)=>{const e={};for(const n in i)(!zc(n)||!(n.slice(9)in t))&&(e[n]=i[n]);return e};function Ug(i,t,e){const{props:n,children:s,component:r}=i,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return n?Gu(n,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(Id(o,n,h)&&!Sa(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Gu(n,o,c):!0:!!o;return!1}function Gu(i,t,e){const n=Object.keys(t);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(Id(t,i,r)&&!Sa(e,r))return!0}return!1}function Id(i,t,e){const n=i[e],s=t[e];return e==="style"&&me(n)&&me(s)?!Hc(n,s):n!==s}function Fg({vnode:i,parent:t},e){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=t.vnode).el=e,t=t.parent;else break}}const Dd={},Nd=()=>Object.create(Dd),Ud=i=>Object.getPrototypeOf(i)===Dd;function Og(i,t,e,n=!1){const s={},r=Nd();i.propsDefaults=Object.create(null),Fd(i,t,s,r);for(const o in i.propsOptions[0])o in s||(s[o]=void 0);e?i.props=n?s:Vm(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function Bg(i,t,e,n){const{props:s,attrs:r,vnode:{patchFlag:o}}=i,a=re(s),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Sa(i.emitsOptions,h))continue;const d=t[h];if(l)if(ue(r,h))d!==r[h]&&(r[h]=d,c=!0);else{const g=Gi(h);s[g]=zl(l,a,g,d,i,!1)}else d!==r[h]&&(r[h]=d,c=!0)}}}else{Fd(i,t,s,r)&&(c=!0);let u;for(const f in a)(!t||!ue(t,f)&&((u=Yi(f))===f||!ue(t,u)))&&(l?e&&(e[f]!==void 0||e[u]!==void 0)&&(s[f]=zl(l,a,f,void 0,i,!0)):delete s[f]);if(r!==a)for(const f in r)(!t||!ue(t,f))&&(delete r[f],c=!0)}c&&di(i.attrs,"set","")}function Fd(i,t,e,n){const[s,r]=i.propsOptions;let o=!1,a;if(t)for(let l in t){if(Nr(l))continue;const c=t[l];let u;s&&ue(s,u=Gi(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:Sa(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=re(e),c=a||ge;for(let u=0;u<r.length;u++){const f=r[u];e[f]=zl(s,l,f,c[f],i,!ue(c,f))}}return o}function zl(i,t,e,n,s,r){const o=i[e];if(o!=null){const a=ue(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Yt(l)){const{propsDefaults:c}=s;if(e in c)n=c[e];else{const u=Qr(s);n=c[e]=l.call(null,t),u()}}else n=l;s.ce&&s.ce._setProp(e,n)}o[0]&&(r&&!a?n=!1:o[1]&&(n===""||n===Yi(e))&&(n=!0))}return n}const zg=new WeakMap;function Od(i,t,e=!1){const n=e?zg:t.propsCache,s=n.get(i);if(s)return s;const r=i.props,o={},a=[];let l=!1;if(!Yt(i)){const u=f=>{l=!0;const[h,d]=Od(f,t,!0);Be(o,h),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!r&&!l)return me(i)&&n.set(i,Hs),Hs;if(Gt(r))for(let u=0;u<r.length;u++){const f=Gi(r[u]);Wu(f)&&(o[f]=ge)}else if(r)for(const u in r){const f=Gi(u);if(Wu(f)){const h=r[u],d=o[f]=Gt(h)||Yt(h)?{type:h}:Be({},h),g=d.type;let _=!1,m=!0;if(Gt(g))for(let p=0;p<g.length;++p){const v=g[p],T=Yt(v)&&v.name;if(T==="Boolean"){_=!0;break}else T==="String"&&(m=!1)}else _=Yt(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||ue(d,"default"))&&a.push(f)}}const c=[o,a];return me(i)&&n.set(i,c),c}function Wu(i){return i[0]!=="$"&&!Nr(i)}const Jc=i=>i==="_"||i==="_ctx"||i==="$stable",Qc=i=>Gt(i)?i.map(Vn):[Vn(i)],kg=(i,t,e)=>{if(t._n)return t;const n=eg((...s)=>Qc(t(...s)),e);return n._c=!1,n},Bd=(i,t,e)=>{const n=i._ctx;for(const s in i){if(Jc(s))continue;const r=i[s];if(Yt(r))t[s]=kg(s,r,n);else if(r!=null){const o=Qc(r);t[s]=()=>o}}},zd=(i,t)=>{const e=Qc(t);i.slots.default=()=>e},kd=(i,t,e)=>{for(const n in t)(e||!Jc(n))&&(i[n]=t[n])},Vg=(i,t,e)=>{const n=i.slots=Nd();if(i.vnode.shapeFlag&32){const s=t._;s?(kd(n,t,e),e&&Xf(n,"_",s,!0)):Bd(t,n)}else t&&zd(i,t)},Hg=(i,t,e)=>{const{vnode:n,slots:s}=i;let r=!0,o=ge;if(n.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:kd(s,t,e):(r=!t.$stable,Bd(t,s)),o=t}else t&&(zd(i,t),o={default:1});if(r)for(const a in s)!Jc(a)&&o[a]==null&&delete s[a]},nn=Yg;function Gg(i){return Wg(i)}function Wg(i,t){const e=pa();e.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=qn,insertStaticContent:g}=i,_=(A,C,S,Z=null,G=null,X=null,j=void 0,rt=null,J=!!C.dynamicChildren)=>{if(A===C)return;A&&!gr(A,C)&&(Z=_t(A),ht(A,G,X,!0),A=null),C.patchFlag===-2&&(J=!1,C.dynamicChildren=null);const{type:E,ref:y,shapeFlag:O}=C;switch(E){case Ma:m(A,C,S,Z);break;case Wi:p(A,C,S,Z);break;case ka:A==null&&v(C,S,Z,j);break;case oe:V(A,C,S,Z,G,X,j,rt,J);break;default:O&1?I(A,C,S,Z,G,X,j,rt,J):O&6?U(A,C,S,Z,G,X,j,rt,J):(O&64||O&128)&&E.process(A,C,S,Z,G,X,j,rt,J,zt)}y!=null&&G?Br(y,A&&A.ref,X,C||A,!C):y==null&&A&&A.ref!=null&&Br(A.ref,null,X,A,!0)},m=(A,C,S,Z)=>{if(A==null)n(C.el=a(C.children),S,Z);else{const G=C.el=A.el;C.children!==A.children&&c(G,C.children)}},p=(A,C,S,Z)=>{A==null?n(C.el=l(C.children||""),S,Z):C.el=A.el},v=(A,C,S,Z)=>{[A.el,A.anchor]=g(A.children,C,S,Z,A.el,A.anchor)},T=({el:A,anchor:C},S,Z)=>{let G;for(;A&&A!==C;)G=h(A),n(A,S,Z),A=G;n(C,S,Z)},x=({el:A,anchor:C})=>{let S;for(;A&&A!==C;)S=h(A),s(A),A=S;s(C)},I=(A,C,S,Z,G,X,j,rt,J)=>{if(C.type==="svg"?j="svg":C.type==="math"&&(j="mathml"),A==null)L(C,S,Z,G,X,j,rt,J);else{const E=A.el&&A.el._isVueCE?A.el:null;try{E&&E._beginPatch(),w(A,C,G,X,j,rt,J)}finally{E&&E._endPatch()}}},L=(A,C,S,Z,G,X,j,rt)=>{let J,E;const{props:y,shapeFlag:O,transition:K,dirs:tt}=A;if(J=A.el=o(A.type,X,y&&y.is,y),O&8?u(J,A.children):O&16&&D(A.children,J,null,Z,G,za(A,X),j,rt),tt&&ji(A,null,Z,"created"),P(J,A,A.scopeId,j,Z),y){for(const mt in y)mt!=="value"&&!Nr(mt)&&r(J,mt,null,y[mt],X,Z);"value"in y&&r(J,"value",null,y.value,X),(E=y.onVnodeBeforeMount)&&Fn(E,Z,A)}tt&&ji(A,null,Z,"beforeMount");const Q=qg(G,K);Q&&K.beforeEnter(J),n(J,C,S),((E=y&&y.onVnodeMounted)||Q||tt)&&nn(()=>{E&&Fn(E,Z,A),Q&&K.enter(J),tt&&ji(A,null,Z,"mounted")},G)},P=(A,C,S,Z,G)=>{if(S&&d(A,S),Z)for(let X=0;X<Z.length;X++)d(A,Z[X]);if(G){let X=G.subTree;if(C===X||Wd(X.type)&&(X.ssContent===C||X.ssFallback===C)){const j=G.vnode;P(A,j,j.scopeId,j.slotScopeIds,G.parent)}}},D=(A,C,S,Z,G,X,j,rt,J=0)=>{for(let E=J;E<A.length;E++){const y=A[E]=rt?fi(A[E]):Vn(A[E]);_(null,y,C,S,Z,G,X,j,rt)}},w=(A,C,S,Z,G,X,j)=>{const rt=C.el=A.el;let{patchFlag:J,dynamicChildren:E,dirs:y}=C;J|=A.patchFlag&16;const O=A.props||ge,K=C.props||ge;let tt;if(S&&Ki(S,!1),(tt=K.onVnodeBeforeUpdate)&&Fn(tt,S,C,A),y&&ji(C,A,S,"beforeUpdate"),S&&Ki(S,!0),(O.innerHTML&&K.innerHTML==null||O.textContent&&K.textContent==null)&&u(rt,""),E?M(A.dynamicChildren,E,rt,S,Z,za(C,G),X):j||B(A,C,rt,null,S,Z,za(C,G),X,!1),J>0){if(J&16)N(rt,O,K,S,G);else if(J&2&&O.class!==K.class&&r(rt,"class",null,K.class,G),J&4&&r(rt,"style",O.style,K.style,G),J&8){const Q=C.dynamicProps;for(let mt=0;mt<Q.length;mt++){const ut=Q[mt],vt=O[ut],Vt=K[ut];(Vt!==vt||ut==="value")&&r(rt,ut,vt,Vt,G,S)}}J&1&&A.children!==C.children&&u(rt,C.children)}else!j&&E==null&&N(rt,O,K,S,G);((tt=K.onVnodeUpdated)||y)&&nn(()=>{tt&&Fn(tt,S,C,A),y&&ji(C,A,S,"updated")},Z)},M=(A,C,S,Z,G,X,j)=>{for(let rt=0;rt<C.length;rt++){const J=A[rt],E=C[rt],y=J.el&&(J.type===oe||!gr(J,E)||J.shapeFlag&198)?f(J.el):S;_(J,E,y,null,Z,G,X,j,!0)}},N=(A,C,S,Z,G)=>{if(C!==S){if(C!==ge)for(const X in C)!Nr(X)&&!(X in S)&&r(A,X,C[X],null,G,Z);for(const X in S){if(Nr(X))continue;const j=S[X],rt=C[X];j!==rt&&X!=="value"&&r(A,X,rt,j,G,Z)}"value"in S&&r(A,"value",C.value,S.value,G)}},V=(A,C,S,Z,G,X,j,rt,J)=>{const E=C.el=A?A.el:a(""),y=C.anchor=A?A.anchor:a("");let{patchFlag:O,dynamicChildren:K,slotScopeIds:tt}=C;tt&&(rt=rt?rt.concat(tt):tt),A==null?(n(E,S,Z),n(y,S,Z),D(C.children||[],S,y,G,X,j,rt,J)):O>0&&O&64&&K&&A.dynamicChildren&&A.dynamicChildren.length===K.length?(M(A.dynamicChildren,K,S,G,X,j,rt),(C.key!=null||G&&C===G.subTree)&&Vd(A,C,!0)):B(A,C,S,y,G,X,j,rt,J)},U=(A,C,S,Z,G,X,j,rt,J)=>{C.slotScopeIds=rt,A==null?C.shapeFlag&512?G.ctx.activate(C,S,Z,j,J):z(C,S,Z,G,X,j,J):k(A,C,J)},z=(A,C,S,Z,G,X,j)=>{const rt=A.component=t_(A,Z,G);if(bd(A)&&(rt.ctx.renderer=zt),e_(rt,!1,j),rt.asyncDep){if(G&&G.registerDep(rt,F,j),!A.el){const J=rt.subTree=In(Wi);p(null,J,C,S),A.placeholder=J.el}}else F(rt,A,C,S,G,X,j)},k=(A,C,S)=>{const Z=C.component=A.component;if(Ug(A,C,S))if(Z.asyncDep&&!Z.asyncResolved){$(Z,C,S);return}else Z.next=C,Z.update();else C.el=A.el,Z.vnode=C},F=(A,C,S,Z,G,X,j)=>{const rt=()=>{if(A.isMounted){let{next:O,bu:K,u:tt,parent:Q,vnode:mt}=A;{const Mt=Hd(A);if(Mt){O&&(O.el=mt.el,$(A,O,j)),Mt.asyncDep.then(()=>{nn(()=>{A.isUnmounted||E()},G)});return}}let ut=O,vt;Ki(A,!1),O?(O.el=mt.el,$(A,O,j)):O=mt,K&&Vo(K),(vt=O.props&&O.props.onVnodeBeforeUpdate)&&Fn(vt,Q,O,mt),Ki(A,!0);const Vt=Hu(A),ft=A.subTree;A.subTree=Vt,_(ft,Vt,f(ft.el),_t(ft),A,G,X),O.el=Vt.el,ut===null&&Fg(A,Vt.el),tt&&nn(tt,G),(vt=O.props&&O.props.onVnodeUpdated)&&nn(()=>Fn(vt,Q,O,mt),G)}else{let O;const{el:K,props:tt}=C,{bm:Q,m:mt,parent:ut,root:vt,type:Vt}=A,ft=zr(C);Ki(A,!1),Q&&Vo(Q),!ft&&(O=tt&&tt.onVnodeBeforeMount)&&Fn(O,ut,C),Ki(A,!0);{vt.ce&&vt.ce._hasShadowRoot()&&vt.ce._injectChildStyle(Vt);const Mt=A.subTree=Hu(A);_(null,Mt,S,Z,A,G,X),C.el=Mt.el}if(mt&&nn(mt,G),!ft&&(O=tt&&tt.onVnodeMounted)){const Mt=C;nn(()=>Fn(O,ut,Mt),G)}(C.shapeFlag&256||ut&&zr(ut.vnode)&&ut.vnode.shapeFlag&256)&&A.a&&nn(A.a,G),A.isMounted=!0,C=S=Z=null}};A.scope.on();const J=A.effect=new Qf(rt);A.scope.off();const E=A.update=J.run.bind(J),y=A.job=J.runIfDirty.bind(J);y.i=A,y.id=A.uid,J.scheduler=()=>Kc(y),Ki(A,!0),E()},$=(A,C,S)=>{C.component=A;const Z=A.vnode.props;A.vnode=C,A.next=null,Bg(A,C.props,Z,S),Hg(A,C.children,S),yi(),Uu(A),Si()},B=(A,C,S,Z,G,X,j,rt,J=!1)=>{const E=A&&A.children,y=A?A.shapeFlag:0,O=C.children,{patchFlag:K,shapeFlag:tt}=C;if(K>0){if(K&128){st(E,O,S,Z,G,X,j,rt,J);return}else if(K&256){lt(E,O,S,Z,G,X,j,rt,J);return}}tt&8?(y&16&&Tt(E,G,X),O!==E&&u(S,O)):y&16?tt&16?st(E,O,S,Z,G,X,j,rt,J):Tt(E,G,X,!0):(y&8&&u(S,""),tt&16&&D(O,S,Z,G,X,j,rt,J))},lt=(A,C,S,Z,G,X,j,rt,J)=>{A=A||Hs,C=C||Hs;const E=A.length,y=C.length,O=Math.min(E,y);let K;for(K=0;K<O;K++){const tt=C[K]=J?fi(C[K]):Vn(C[K]);_(A[K],tt,S,null,G,X,j,rt,J)}E>y?Tt(A,G,X,!0,!1,O):D(C,S,Z,G,X,j,rt,J,O)},st=(A,C,S,Z,G,X,j,rt,J)=>{let E=0;const y=C.length;let O=A.length-1,K=y-1;for(;E<=O&&E<=K;){const tt=A[E],Q=C[E]=J?fi(C[E]):Vn(C[E]);if(gr(tt,Q))_(tt,Q,S,null,G,X,j,rt,J);else break;E++}for(;E<=O&&E<=K;){const tt=A[O],Q=C[K]=J?fi(C[K]):Vn(C[K]);if(gr(tt,Q))_(tt,Q,S,null,G,X,j,rt,J);else break;O--,K--}if(E>O){if(E<=K){const tt=K+1,Q=tt<y?C[tt].el:Z;for(;E<=K;)_(null,C[E]=J?fi(C[E]):Vn(C[E]),S,Q,G,X,j,rt,J),E++}}else if(E>K)for(;E<=O;)ht(A[E],G,X,!0),E++;else{const tt=E,Q=E,mt=new Map;for(E=Q;E<=K;E++){const xt=C[E]=J?fi(C[E]):Vn(C[E]);xt.key!=null&&mt.set(xt.key,E)}let ut,vt=0;const Vt=K-Q+1;let ft=!1,Mt=0;const Ft=new Array(Vt);for(E=0;E<Vt;E++)Ft[E]=0;for(E=tt;E<=O;E++){const xt=A[E];if(vt>=Vt){ht(xt,G,X,!0);continue}let Wt;if(xt.key!=null)Wt=mt.get(xt.key);else for(ut=Q;ut<=K;ut++)if(Ft[ut-Q]===0&&gr(xt,C[ut])){Wt=ut;break}Wt===void 0?ht(xt,G,X,!0):(Ft[Wt-Q]=E+1,Wt>=Mt?Mt=Wt:ft=!0,_(xt,C[Wt],S,null,G,X,j,rt,J),vt++)}const Ht=ft?Xg(Ft):Hs;for(ut=Ht.length-1,E=Vt-1;E>=0;E--){const xt=Q+E,Wt=C[xt],Xt=C[xt+1],he=xt+1<y?Xt.el||Gd(Xt):Z;Ft[E]===0?_(null,Wt,S,he,G,X,j,rt,J):ft&&(ut<0||E!==Ht[ut]?gt(Wt,S,he,2):ut--)}}},gt=(A,C,S,Z,G=null)=>{const{el:X,type:j,transition:rt,children:J,shapeFlag:E}=A;if(E&6){gt(A.component.subTree,C,S,Z);return}if(E&128){A.suspense.move(C,S,Z);return}if(E&64){j.move(A,C,S,zt);return}if(j===oe){n(X,C,S);for(let O=0;O<J.length;O++)gt(J[O],C,S,Z);n(A.anchor,C,S);return}if(j===ka){T(A,C,S);return}if(Z!==2&&E&1&&rt)if(Z===0)rt.beforeEnter(X),n(X,C,S),nn(()=>rt.enter(X),G);else{const{leave:O,delayLeave:K,afterLeave:tt}=rt,Q=()=>{A.ctx.isUnmounted?s(X):n(X,C,S)},mt=()=>{X._isLeaving&&X[ug](!0),O(X,()=>{Q(),tt&&tt()})};K?K(X,Q,mt):mt()}else n(X,C,S)},ht=(A,C,S,Z=!1,G=!1)=>{const{type:X,props:j,ref:rt,children:J,dynamicChildren:E,shapeFlag:y,patchFlag:O,dirs:K,cacheIndex:tt}=A;if(O===-2&&(G=!1),rt!=null&&(yi(),Br(rt,null,S,A,!0),Si()),tt!=null&&(C.renderCache[tt]=void 0),y&256){C.ctx.deactivate(A);return}const Q=y&1&&K,mt=!zr(A);let ut;if(mt&&(ut=j&&j.onVnodeBeforeUnmount)&&Fn(ut,C,A),y&6)dt(A.component,S,Z);else{if(y&128){A.suspense.unmount(S,Z);return}Q&&ji(A,null,C,"beforeUnmount"),y&64?A.type.remove(A,C,S,zt,Z):E&&!E.hasOnce&&(X!==oe||O>0&&O&64)?Tt(E,C,S,!1,!0):(X===oe&&O&384||!G&&y&16)&&Tt(J,C,S),Z&&Qt(A)}(mt&&(ut=j&&j.onVnodeUnmounted)||Q)&&nn(()=>{ut&&Fn(ut,C,A),Q&&ji(A,null,C,"unmounted")},S)},Qt=A=>{const{type:C,el:S,anchor:Z,transition:G}=A;if(C===oe){at(S,Z);return}if(C===ka){x(A);return}const X=()=>{s(S),G&&!G.persisted&&G.afterLeave&&G.afterLeave()};if(A.shapeFlag&1&&G&&!G.persisted){const{leave:j,delayLeave:rt}=G,J=()=>j(S,X);rt?rt(A.el,X,J):J()}else X()},at=(A,C)=>{let S;for(;A!==C;)S=h(A),s(A),A=S;s(C)},dt=(A,C,S)=>{const{bum:Z,scope:G,job:X,subTree:j,um:rt,m:J,a:E}=A;qu(J),qu(E),Z&&Vo(Z),G.stop(),X&&(X.flags|=8,ht(j,A,C,S)),rt&&nn(rt,C),nn(()=>{A.isUnmounted=!0},C)},Tt=(A,C,S,Z=!1,G=!1,X=0)=>{for(let j=X;j<A.length;j++)ht(A[j],C,S,Z,G)},_t=A=>{if(A.shapeFlag&6)return _t(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const C=h(A.anchor||A.el),S=C&&C[lg];return S?h(S):C};let Ot=!1;const kt=(A,C,S)=>{let Z;A==null?C._vnode&&(ht(C._vnode,null,null,!0),Z=C._vnode.component):_(C._vnode||null,A,C,null,null,null,S),C._vnode=A,Ot||(Ot=!0,Uu(Z),vd(),Ot=!1)},zt={p:_,um:ht,m:gt,r:Qt,mt:z,mc:D,pc:B,pbc:M,n:_t,o:i};return{render:kt,hydrate:void 0,createApp:Rg(kt)}}function za({type:i,props:t},e){return e==="svg"&&i==="foreignObject"||e==="mathml"&&i==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Ki({effect:i,job:t},e){e?(i.flags|=32,t.flags|=4):(i.flags&=-33,t.flags&=-5)}function qg(i,t){return(!i||i&&!i.pendingBranch)&&t&&!t.persisted}function Vd(i,t,e=!1){const n=i.children,s=t.children;if(Gt(n)&&Gt(s))for(let r=0;r<n.length;r++){const o=n[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=fi(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&Vd(o,a)),a.type===Ma&&(a.patchFlag===-1&&(a=s[r]=fi(a)),a.el=o.el),a.type===Wi&&!a.el&&(a.el=o.el)}}function Xg(i){const t=i.slice(),e=[0];let n,s,r,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(s=e[e.length-1],i[s]<c){t[n]=s,e.push(n);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,i[e[a]]<c?r=a+1:o=a;c<i[e[r]]&&(r>0&&(t[n]=e[r-1]),e[r]=n)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function Hd(i){const t=i.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Hd(t)}function qu(i){if(i)for(let t=0;t<i.length;t++)i[t].flags|=8}function Gd(i){if(i.placeholder)return i.placeholder;const t=i.component;return t?Gd(t.subTree):null}const Wd=i=>i.__isSuspense;function Yg(i,t){t&&t.pendingBranch?Gt(i)?t.effects.push(...i):t.effects.push(i):tg(i)}const oe=Symbol.for("v-fgt"),Ma=Symbol.for("v-txt"),Wi=Symbol.for("v-cmt"),ka=Symbol.for("v-stc"),Vr=[];let un=null;function Ct(i=!1){Vr.push(un=i?null:[])}function $g(){Vr.pop(),un=Vr[Vr.length-1]||null}let $r=1;function Xu(i,t=!1){$r+=i,i<0&&un&&t&&(un.hasOnce=!0)}function qd(i){return i.dynamicChildren=$r>0?un||Hs:null,$g(),$r>0&&un&&un.push(i),i}function Rt(i,t,e,n,s,r){return qd(ot(i,t,e,n,s,r,!0))}function Hr(i,t,e,n,s){return qd(In(i,t,e,n,s,!0))}function Xd(i){return i?i.__v_isVNode===!0:!1}function gr(i,t){return i.type===t.type&&i.key===t.key}const Yd=({key:i})=>i??null,Ho=({ref:i,ref_key:t,ref_for:e})=>(typeof i=="number"&&(i=""+i),i!=null?Le(i)||we(i)||Yt(i)?{i:xn,r:i,k:t,f:!!e}:i:null);function ot(i,t=null,e=null,n=0,s=null,r=i===oe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:t,key:t&&Yd(t),ref:t&&Ho(t),scopeId:yd,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:xn};return a?(tu(l,e),r&128&&i.normalize(l)):e&&(l.shapeFlag|=Le(e)?8:16),$r>0&&!o&&un&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&un.push(l),l}const In=jg;function jg(i,t=null,e=null,n=0,s=null,r=!1){if((!i||i===Sg)&&(i=Wi),Xd(i)){const a=Ks(i,t,!0);return e&&tu(a,e),$r>0&&!r&&un&&(a.shapeFlag&6?un[un.indexOf(i)]=a:un.push(a)),a.patchFlag=-2,a}if(r_(i)&&(i=i.__vccOpts),t){t=Kg(t);let{class:a,style:l}=t;a&&!Le(a)&&(t.class=jn(a)),me(l)&&(_a(l)&&!Gt(l)&&(l=Be({},l)),t.style=ln(l))}const o=Le(i)?1:Wd(i)?128:cg(i)?64:me(i)?4:Yt(i)?2:0;return ot(i,t,e,n,s,o,r,!0)}function Kg(i){return i?_a(i)||Ud(i)?Be({},i):i:null}function Ks(i,t,e=!1,n=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=i,c=t?Zg(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&Yd(c),ref:t&&t.ref?e&&r?Gt(r)?r.concat(Ho(t)):[r,Ho(t)]:Ho(t):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:t&&i.type!==oe?o===-1?16:o|16:o,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Ks(i.ssContent),ssFallback:i.ssFallback&&Ks(i.ssFallback),placeholder:i.placeholder,el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&n&&Zc(u,l.clone(u)),u}function vn(i=" ",t=0){return In(Ma,null,i,t)}function yn(i="",t=!1){return t?(Ct(),Hr(Wi,null,i)):In(Wi,null,i)}function Vn(i){return i==null||typeof i=="boolean"?In(Wi):Gt(i)?In(oe,null,i.slice()):Xd(i)?fi(i):In(Ma,null,String(i))}function fi(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Ks(i)}function tu(i,t){let e=0;const{shapeFlag:n}=i;if(t==null)t=null;else if(Gt(t))e=16;else if(typeof t=="object")if(n&65){const s=t.default;s&&(s._c&&(s._d=!1),tu(i,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Ud(t)?t._ctx=xn:s===3&&xn&&(xn.slots._===1?t._=1:(t._=2,i.patchFlag|=1024))}else Yt(t)?(t={default:t,_ctx:xn},e=32):(t=String(t),n&64?(e=16,t=[vn(t)]):e=8);i.children=t,i.shapeFlag|=e}function Zg(...i){const t={};for(let e=0;e<i.length;e++){const n=i[e];for(const s in n)if(s==="class")t.class!==n.class&&(t.class=jn([t.class,n.class]));else if(s==="style")t.style=ln([t.style,n.style]);else if(ha(s)){const r=t[s],o=n[s];o&&r!==o&&!(Gt(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=n[s])}return t}function Fn(i,t,e,n=null){Kn(i,t,7,[e,n])}const Jg=Pd();let Qg=0;function t_(i,t,e){const n=i.type,s=(t?t.appContext:i.appContext)||Jg,r={uid:Qg++,vnode:i,type:n,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Kf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Od(n,s),emitsOptions:Ld(n,s),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:n.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Lg.bind(null,r),i.ce&&i.ce(r),r}let Ke=null;const $d=()=>Ke||xn;let oa,kl;{const i=pa(),t=(e,n)=>{let s;return(s=i[e])||(s=i[e]=[]),s.push(n),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};oa=t("__VUE_INSTANCE_SETTERS__",e=>Ke=e),kl=t("__VUE_SSR_SETTERS__",e=>jr=e)}const Qr=i=>{const t=Ke;return oa(i),i.scope.on(),()=>{i.scope.off(),oa(t)}},Yu=()=>{Ke&&Ke.scope.off(),oa(null)};function jd(i){return i.vnode.shapeFlag&4}let jr=!1;function e_(i,t=!1,e=!1){t&&kl(t);const{props:n,children:s}=i.vnode,r=jd(i);Og(i,n,r,t),Vg(i,s,e||t);const o=r?n_(i,t):void 0;return t&&kl(!1),o}function n_(i,t){const e=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,Mg);const{setup:n}=e;if(n){yi();const s=i.setupContext=n.length>1?s_(i):null,r=Qr(i),o=Jr(n,i,0,[i.props,s]),a=Hf(o);if(Si(),r(),(a||i.sp)&&!zr(i)&&Ed(i),a){if(o.then(Yu,Yu),t)return o.then(l=>{$u(i,l)}).catch(l=>{va(l,i,0)});i.asyncDep=o}else $u(i,o)}else Kd(i)}function $u(i,t,e){Yt(t)?i.type.__ssrInlineRender?i.ssrRender=t:i.render=t:me(t)&&(i.setupState=pd(t)),Kd(i)}function Kd(i,t,e){const n=i.type;i.render||(i.render=n.render||qn);{const s=Qr(i);yi();try{Eg(i)}finally{Si(),s()}}}const i_={get(i,t){return We(i,"get",""),i[t]}};function s_(i){const t=e=>{i.exposed=e||{}};return{attrs:new Proxy(i.attrs,i_),slots:i.slots,emit:i.emit,expose:t}}function Ea(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(pd(jc(i.exposed)),{get(t,e){if(e in t)return t[e];if(e in kr)return kr[e](i)},has(t,e){return e in t||e in kr}})):i.proxy}function r_(i){return Yt(i)&&"__vccOpts"in i}const Ge=(i,t)=>jm(i,t,jr),o_="3.5.28";/**
* @vue/runtime-dom v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Vl;const ju=typeof window<"u"&&window.trustedTypes;if(ju)try{Vl=ju.createPolicy("vue",{createHTML:i=>i})}catch{}const Zd=Vl?i=>Vl.createHTML(i):i=>i,a_="http://www.w3.org/2000/svg",l_="http://www.w3.org/1998/Math/MathML",hi=typeof document<"u"?document:null,Ku=hi&&hi.createElement("template"),c_={insert:(i,t,e)=>{t.insertBefore(i,e||null)},remove:i=>{const t=i.parentNode;t&&t.removeChild(i)},createElement:(i,t,e,n)=>{const s=t==="svg"?hi.createElementNS(a_,i):t==="mathml"?hi.createElementNS(l_,i):e?hi.createElement(i,{is:e}):hi.createElement(i);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>hi.createTextNode(i),createComment:i=>hi.createComment(i),setText:(i,t)=>{i.nodeValue=t},setElementText:(i,t)=>{i.textContent=t},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>hi.querySelector(i),setScopeId(i,t){i.setAttribute(t,"")},insertStaticContent(i,t,e,n,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Ku.innerHTML=Zd(n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i);const a=Ku.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},u_=Symbol("_vtc");function h_(i,t,e){const n=i[u_];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?i.removeAttribute("class"):e?i.setAttribute("class",t):i.className=t}const Zu=Symbol("_vod"),f_=Symbol("_vsh"),d_=Symbol(""),p_=/(?:^|;)\s*display\s*:/;function m_(i,t,e){const n=i.style,s=Le(e);let r=!1;if(e&&!s){if(t)if(Le(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Go(n,a,"")}else for(const o in t)e[o]==null&&Go(n,o,"");for(const o in e)o==="display"&&(r=!0),Go(n,o,e[o])}else if(s){if(t!==e){const o=n[d_];o&&(e+=";"+o),n.cssText=e,r=p_.test(e)}}else t&&i.removeAttribute("style");Zu in i&&(i[Zu]=r?n.display:"",i[f_]&&(n.display="none"))}const Ju=/\s*!important$/;function Go(i,t,e){if(Gt(e))e.forEach(n=>Go(i,t,n));else if(e==null&&(e=""),t.startsWith("--"))i.setProperty(t,e);else{const n=g_(i,t);Ju.test(e)?i.setProperty(Yi(n),e.replace(Ju,""),"important"):i[n]=e}}const Qu=["Webkit","Moz","ms"],Va={};function g_(i,t){const e=Va[t];if(e)return e;let n=Gi(t);if(n!=="filter"&&n in i)return Va[t]=n;n=qf(n);for(let s=0;s<Qu.length;s++){const r=Qu[s]+n;if(r in i)return Va[t]=r}return t}const th="http://www.w3.org/1999/xlink";function eh(i,t,e,n,s,r=xm(t)){n&&t.startsWith("xlink:")?e==null?i.removeAttributeNS(th,t.slice(6,t.length)):i.setAttributeNS(th,t,e):e==null||r&&!Yf(e)?i.removeAttribute(t):i.setAttribute(t,r?"":$n(e)?String(e):e)}function nh(i,t,e,n,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(i[t]=t==="innerHTML"?Zd(e):e);return}const r=i.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?i.getAttribute("value")||"":i.value,l=e==null?i.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in i))&&(i.value=l),e==null&&i.removeAttribute(t),i._value=e;return}let o=!1;if(e===""||e==null){const a=typeof i[t];a==="boolean"?e=Yf(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{i[t]=e}catch{}o&&i.removeAttribute(s||t)}function zs(i,t,e,n){i.addEventListener(t,e,n)}function __(i,t,e,n){i.removeEventListener(t,e,n)}const ih=Symbol("_vei");function v_(i,t,e,n,s=null){const r=i[ih]||(i[ih]={}),o=r[t];if(n&&o)o.value=n;else{const[a,l]=x_(t);if(n){const c=r[t]=M_(n,s);zs(i,a,c,l)}else o&&(__(i,a,o,l),r[t]=void 0)}}const sh=/(?:Once|Passive|Capture)$/;function x_(i){let t;if(sh.test(i)){t={};let n;for(;n=i.match(sh);)i=i.slice(0,i.length-n[0].length),t[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Yi(i.slice(2)),t]}let Ha=0;const y_=Promise.resolve(),S_=()=>Ha||(y_.then(()=>Ha=0),Ha=Date.now());function M_(i,t){const e=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=e.attached)return;Kn(E_(n,e.value),t,5,[n])};return e.value=i,e.attached=S_(),e}function E_(i,t){if(Gt(t)){const e=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{e.call(i),i._stopped=!0},t.map(n=>s=>!s._stopped&&n&&n(s))}else return t}const rh=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,b_=(i,t,e,n,s,r)=>{const o=s==="svg";t==="class"?h_(i,n,o):t==="style"?m_(i,e,n):ha(t)?zc(t)||v_(i,t,e,n,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):w_(i,t,n,o))?(nh(i,t,n),!i.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&eh(i,t,n,o,r,t!=="value")):i._isVueCE&&(/[A-Z]/.test(t)||!Le(n))?nh(i,Gi(t),n,r,t):(t==="true-value"?i._trueValue=n:t==="false-value"&&(i._falseValue=n),eh(i,t,n,o))};function w_(i,t,e,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in i&&rh(t)&&Yt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&i.tagName==="IFRAME"||t==="form"||t==="list"&&i.tagName==="INPUT"||t==="type"&&i.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=i.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return rh(t)&&Le(e)?!1:t in i}const oh=i=>{const t=i.props["onUpdate:modelValue"]||!1;return Gt(t)?e=>Vo(t,e):t};function T_(i){i.target.composing=!0}function ah(i){const t=i.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ga=Symbol("_assign");function lh(i,t,e){return t&&(i=i.trim()),e&&(i=Vc(i)),i}const A_={created(i,{modifiers:{lazy:t,trim:e,number:n}},s){i[Ga]=oh(s);const r=n||s.props&&s.props.type==="number";zs(i,t?"change":"input",o=>{o.target.composing||i[Ga](lh(i.value,e,r))}),(e||r)&&zs(i,"change",()=>{i.value=lh(i.value,e,r)}),t||(zs(i,"compositionstart",T_),zs(i,"compositionend",ah),zs(i,"change",ah))},mounted(i,{value:t}){i.value=t??""},beforeUpdate(i,{value:t,oldValue:e,modifiers:{lazy:n,trim:s,number:r}},o){if(i[Ga]=oh(o),i.composing)return;const a=(r||i.type==="number")&&!/^0\d/.test(i.value)?Vc(i.value):i.value,l=t??"";a!==l&&(document.activeElement===i&&i.type!=="range"&&(n&&t===e||s&&i.value.trim()===l)||(i.value=l))}},C_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},R_=(i,t)=>{const e=i._withKeys||(i._withKeys={}),n=t.join(".");return e[n]||(e[n]=(s=>{if(!("key"in s))return;const r=Yi(s.key);if(t.some(o=>o===r||C_[o]===r))return i(s)}))},P_=Be({patchProp:b_},c_);let ch;function L_(){return ch||(ch=Gg(P_))}const I_=((...i)=>{const t=L_().createApp(...i),{mount:e}=t;return t.mount=n=>{const s=N_(n);if(!s)return;const r=t._component;!Yt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,D_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function D_(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function N_(i){return Le(i)?document.querySelector(i):i}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Jd;const ba=i=>Jd=i,Qd=Symbol();function Hl(i){return i&&typeof i=="object"&&Object.prototype.toString.call(i)==="[object Object]"&&typeof i.toJSON!="function"}var Gr;(function(i){i.direct="direct",i.patchObject="patch object",i.patchFunction="patch function"})(Gr||(Gr={}));function U_(){const i=Zf(!0),t=i.run(()=>Te({}));let e=[],n=[];const s=jc({install(r){ba(s),s._a=r,r.provide(Qd,s),r.config.globalProperties.$pinia=s,n.forEach(o=>e.push(o)),n=[]},use(r){return this._a?e.push(r):n.push(r),this},_p:e,_a:null,_e:i,_s:new Map,state:t});return s}const tp=()=>{};function uh(i,t,e,n=tp){i.push(t);const s=()=>{const r=i.indexOf(t);r>-1&&(i.splice(r,1),n())};return!e&&Jf()&&Sm(s),s}function Ss(i,...t){i.slice().forEach(e=>{e(...t)})}const F_=i=>i(),hh=Symbol(),Wa=Symbol();function Gl(i,t){i instanceof Map&&t instanceof Map?t.forEach((e,n)=>i.set(n,e)):i instanceof Set&&t instanceof Set&&t.forEach(i.add,i);for(const e in t){if(!t.hasOwnProperty(e))continue;const n=t[e],s=i[e];Hl(s)&&Hl(n)&&i.hasOwnProperty(e)&&!we(n)&&!vi(n)?i[e]=Gl(s,n):i[e]=n}return i}const O_=Symbol();function B_(i){return!Hl(i)||!i.hasOwnProperty(O_)}const{assign:Ui}=Object;function z_(i){return!!(we(i)&&i.effect)}function k_(i,t,e,n){const{state:s,actions:r,getters:o}=t,a=e.state.value[i];let l;function c(){a||(e.state.value[i]=s?s():{});const u=qm(e.state.value[i]);return Ui(u,r,Object.keys(o||{}).reduce((f,h)=>(f[h]=jc(Ge(()=>{ba(e);const d=e._s.get(i);return o[h].call(d,d)})),f),{}))}return l=ep(i,c,t,e,n,!0),l}function ep(i,t,e={},n,s,r){let o;const a=Ui({actions:{}},e),l={deep:!0};let c,u,f=[],h=[],d;const g=n.state.value[i];!r&&!g&&(n.state.value[i]={});let _;function m(D){let w;c=u=!1,typeof D=="function"?(D(n.state.value[i]),w={type:Gr.patchFunction,storeId:i,events:d}):(Gl(n.state.value[i],D),w={type:Gr.patchObject,payload:D,storeId:i,events:d});const M=_=Symbol();gd().then(()=>{_===M&&(c=!0)}),u=!0,Ss(f,w,n.state.value[i])}const p=r?function(){const{state:w}=e,M=w?w():{};this.$patch(N=>{Ui(N,M)})}:tp;function v(){o.stop(),f=[],h=[],n._s.delete(i)}const T=(D,w="")=>{if(hh in D)return D[Wa]=w,D;const M=function(){ba(n);const N=Array.from(arguments),V=[],U=[];function z($){V.push($)}function k($){U.push($)}Ss(h,{args:N,name:M[Wa],store:I,after:z,onError:k});let F;try{F=D.apply(this&&this.$id===i?this:I,N)}catch($){throw Ss(U,$),$}return F instanceof Promise?F.then($=>(Ss(V,$),$)).catch($=>(Ss(U,$),Promise.reject($))):(Ss(V,F),F)};return M[hh]=!0,M[Wa]=w,M},x={_p:n,$id:i,$onAction:uh.bind(null,h),$patch:m,$reset:p,$subscribe(D,w={}){const M=uh(f,D,w.detached,()=>N()),N=o.run(()=>qs(()=>n.state.value[i],V=>{(w.flush==="sync"?u:c)&&D({storeId:i,type:Gr.direct,events:d},V)},Ui({},l,w)));return M},$dispose:v},I=ga(x);n._s.set(i,I);const P=(n._a&&n._a.runWithContext||F_)(()=>n._e.run(()=>(o=Zf()).run(()=>t({action:T}))));for(const D in P){const w=P[D];if(we(w)&&!z_(w)||vi(w))r||(g&&B_(w)&&(we(w)?w.value=g[D]:Gl(w,g[D])),n.state.value[i][D]=w);else if(typeof w=="function"){const M=T(w,D);P[D]=M,a.actions[D]=w}}return Ui(I,P),Ui(re(I),P),Object.defineProperty(I,"$state",{get:()=>n.state.value[i],set:D=>{m(w=>{Ui(w,D)})}}),n._p.forEach(D=>{Ui(I,o.run(()=>D({store:I,app:n._a,pinia:n,options:a})))}),g&&r&&e.hydrate&&e.hydrate(I.$state,g),c=!0,u=!0,I}/*! #__NO_SIDE_EFFECTS__ */function V_(i,t,e){let n,s;const r=typeof t=="function";n=i,s=r?e:t;function o(a,l){const c=sg();return a=a||(c?Or(Qd,null):null),a&&ba(a),a=Jd,a._s.has(n)||(r?ep(n,t,s,a):k_(n,s,a)),a._s.get(n)}return o.$id=n,o}const vs=V_("game",()=>{const i=Te(""),t=Te(!1),e=Te("waiting"),n=Te([]),s=Te(0),r=Te(1),o=Te({rollCount:0,dice:[0,0,0,0,0],kept:[!1,!1,!1,!1,!1]}),a=Te({ones:null,twos:null,threes:null,fours:null,fives:null,sixes:null,choice:null,fourOfAKind:null,fullHouse:null,smallStraight:null,largeStraight:null,yacht:null}),l=Te(0),c=Te(0),u=Te({}),f=Te([]),h=Te(null),d=Te(!1),g=Te(""),_=Hm(null),m=Ge(()=>n.value.find(st=>st.id===i.value)),p=Ge(()=>{const st=n.value[s.value];return(st==null?void 0:st.id)===i.value}),v=Ge(()=>n.value[s.value]),T=Ge(()=>p.value&&o.value.rollCount<3&&!d.value&&e.value==="playing"),x=Ge(()=>p.value&&o.value.rollCount>0&&!d.value&&e.value==="playing"),I=Ge(()=>{var st;return((st=m.value)==null?void 0:st.isHost)??!1}),L=Ge(()=>g.value===i.value);function P(st){e.value=st.phase,n.value=st.players,s.value=st.currentPlayerIndex,r.value=st.currentRound,st.turnState&&(o.value=st.turnState)}function D(st){a.value=st.scores,l.value=st.bonus,c.value=st.total}function w(st){u.value=st}function M(st,gt,ht){g.value=st,o.value.rollCount=gt,o.value.kept=ht,o.value.dice=[0,0,0,0,0],_.value=null,d.value=!0}function N(st){o.value.dice=st.dice,o.value.rollCount=st.rollCount,o.value.kept=st.kept,d.value=!1,_.value=null}function V(st){_.value=st}function U(){d.value=!1}function z(st){o.value.kept=st}function k(st){f.value=st,e.value="finished"}function F(st){h.value=st}function $(){h.value=null}function B(st){!p.value||o.value.rollCount===0||o.value.rollCount>=3||(o.value.kept[st]=!o.value.kept[st])}function lt(){e.value="waiting",n.value=[],s.value=0,r.value=1,o.value={rollCount:0,dice:[0,0,0,0,0],kept:[!1,!1,!1,!1,!1]},g.value="",_.value=null,a.value={ones:null,twos:null,threes:null,fours:null,fives:null,sixes:null,choice:null,fourOfAKind:null,fullHouse:null,smallStraight:null,largeStraight:null,yacht:null},l.value=0,c.value=0,u.value={},f.value=[]}return{mySocketId:i,connected:t,phase:e,players:n,currentPlayerIndex:s,currentRound:r,turnState:o,myScores:a,myBonus:l,myTotal:c,possibleScores:u,rankings:f,isRolling:d,rollingPlayerId:g,physicsStreamData:_,viewingPlayerScore:h,myPlayer:m,isMyTurn:p,currentPlayer:v,canRoll:T,canSelectScore:x,isHost:I,isMyRolling:L,updateRoomState:P,updateScoreCard:D,updatePossibleScores:w,startRolling:M,updateDiceRolled:N,updatePhysicsStream:V,onPhysicsComplete:U,updateKept:z,setRankings:k,toggleKeep:B,reset:lt,setViewingPlayerScore:F,clearViewingPlayerScore:$}}),Zn=Object.create(null);Zn.open="0";Zn.close="1";Zn.ping="2";Zn.pong="3";Zn.message="4";Zn.upgrade="5";Zn.noop="6";const Wo=Object.create(null);Object.keys(Zn).forEach(i=>{Wo[Zn[i]]=i});const Wl={type:"error",data:"parser error"},np=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",ip=typeof ArrayBuffer=="function",sp=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i&&i.buffer instanceof ArrayBuffer,eu=({type:i,data:t},e,n)=>np&&t instanceof Blob?e?n(t):fh(t,n):ip&&(t instanceof ArrayBuffer||sp(t))?e?n(t):fh(new Blob([t]),n):n(Zn[i]+(t||"")),fh=(i,t)=>{const e=new FileReader;return e.onload=function(){const n=e.result.split(",")[1];t("b"+(n||""))},e.readAsDataURL(i)};function dh(i){return i instanceof Uint8Array?i:i instanceof ArrayBuffer?new Uint8Array(i):new Uint8Array(i.buffer,i.byteOffset,i.byteLength)}let qa;function H_(i,t){if(np&&i.data instanceof Blob)return i.data.arrayBuffer().then(dh).then(t);if(ip&&(i.data instanceof ArrayBuffer||sp(i.data)))return t(dh(i.data));eu(i,!1,e=>{qa||(qa=new TextEncoder),t(qa.encode(e))})}const ph="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Pr=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let i=0;i<ph.length;i++)Pr[ph.charCodeAt(i)]=i;const G_=i=>{let t=i.length*.75,e=i.length,n,s=0,r,o,a,l;i[i.length-1]==="="&&(t--,i[i.length-2]==="="&&t--);const c=new ArrayBuffer(t),u=new Uint8Array(c);for(n=0;n<e;n+=4)r=Pr[i.charCodeAt(n)],o=Pr[i.charCodeAt(n+1)],a=Pr[i.charCodeAt(n+2)],l=Pr[i.charCodeAt(n+3)],u[s++]=r<<2|o>>4,u[s++]=(o&15)<<4|a>>2,u[s++]=(a&3)<<6|l&63;return c},W_=typeof ArrayBuffer=="function",nu=(i,t)=>{if(typeof i!="string")return{type:"message",data:rp(i,t)};const e=i.charAt(0);return e==="b"?{type:"message",data:q_(i.substring(1),t)}:Wo[e]?i.length>1?{type:Wo[e],data:i.substring(1)}:{type:Wo[e]}:Wl},q_=(i,t)=>{if(W_){const e=G_(i);return rp(e,t)}else return{base64:!0,data:i}},rp=(i,t)=>{switch(t){case"blob":return i instanceof Blob?i:new Blob([i]);case"arraybuffer":default:return i instanceof ArrayBuffer?i:i.buffer}},op="",X_=(i,t)=>{const e=i.length,n=new Array(e);let s=0;i.forEach((r,o)=>{eu(r,!1,a=>{n[o]=a,++s===e&&t(n.join(op))})})},Y_=(i,t)=>{const e=i.split(op),n=[];for(let s=0;s<e.length;s++){const r=nu(e[s],t);if(n.push(r),r.type==="error")break}return n};function $_(){return new TransformStream({transform(i,t){H_(i,e=>{const n=e.length;let s;if(n<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,n);else if(n<65536){s=new Uint8Array(3);const r=new DataView(s.buffer);r.setUint8(0,126),r.setUint16(1,n)}else{s=new Uint8Array(9);const r=new DataView(s.buffer);r.setUint8(0,127),r.setBigUint64(1,BigInt(n))}i.data&&typeof i.data!="string"&&(s[0]|=128),t.enqueue(s),t.enqueue(e)})}})}let Xa;function ho(i){return i.reduce((t,e)=>t+e.length,0)}function fo(i,t){if(i[0].length===t)return i.shift();const e=new Uint8Array(t);let n=0;for(let s=0;s<t;s++)e[s]=i[0][n++],n===i[0].length&&(i.shift(),n=0);return i.length&&n<i[0].length&&(i[0]=i[0].slice(n)),e}function j_(i,t){Xa||(Xa=new TextDecoder);const e=[];let n=0,s=-1,r=!1;return new TransformStream({transform(o,a){for(e.push(o);;){if(n===0){if(ho(e)<1)break;const l=fo(e,1);r=(l[0]&128)===128,s=l[0]&127,s<126?n=3:s===126?n=1:n=2}else if(n===1){if(ho(e)<2)break;const l=fo(e,2);s=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),n=3}else if(n===2){if(ho(e)<8)break;const l=fo(e,8),c=new DataView(l.buffer,l.byteOffset,l.length),u=c.getUint32(0);if(u>Math.pow(2,21)-1){a.enqueue(Wl);break}s=u*Math.pow(2,32)+c.getUint32(4),n=3}else{if(ho(e)<s)break;const l=fo(e,s);a.enqueue(nu(r?l:Xa.decode(l),t)),n=0}if(s===0||s>i){a.enqueue(Wl);break}}}})}const ap=4;function Pe(i){if(i)return K_(i)}function K_(i){for(var t in Pe.prototype)i[t]=Pe.prototype[t];return i}Pe.prototype.on=Pe.prototype.addEventListener=function(i,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+i]=this._callbacks["$"+i]||[]).push(t),this};Pe.prototype.once=function(i,t){function e(){this.off(i,e),t.apply(this,arguments)}return e.fn=t,this.on(i,e),this};Pe.prototype.off=Pe.prototype.removeListener=Pe.prototype.removeAllListeners=Pe.prototype.removeEventListener=function(i,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var e=this._callbacks["$"+i];if(!e)return this;if(arguments.length==1)return delete this._callbacks["$"+i],this;for(var n,s=0;s<e.length;s++)if(n=e[s],n===t||n.fn===t){e.splice(s,1);break}return e.length===0&&delete this._callbacks["$"+i],this};Pe.prototype.emit=function(i){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),e=this._callbacks["$"+i],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(e){e=e.slice(0);for(var n=0,s=e.length;n<s;++n)e[n].apply(this,t)}return this};Pe.prototype.emitReserved=Pe.prototype.emit;Pe.prototype.listeners=function(i){return this._callbacks=this._callbacks||{},this._callbacks["$"+i]||[]};Pe.prototype.hasListeners=function(i){return!!this.listeners(i).length};const wa=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,e)=>e(t,0),_n=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),Z_="arraybuffer";function lp(i,...t){return t.reduce((e,n)=>(i.hasOwnProperty(n)&&(e[n]=i[n]),e),{})}const J_=_n.setTimeout,Q_=_n.clearTimeout;function Ta(i,t){t.useNativeTimers?(i.setTimeoutFn=J_.bind(_n),i.clearTimeoutFn=Q_.bind(_n)):(i.setTimeoutFn=_n.setTimeout.bind(_n),i.clearTimeoutFn=_n.clearTimeout.bind(_n))}const tv=1.33;function ev(i){return typeof i=="string"?nv(i):Math.ceil((i.byteLength||i.size)*tv)}function nv(i){let t=0,e=0;for(let n=0,s=i.length;n<s;n++)t=i.charCodeAt(n),t<128?e+=1:t<2048?e+=2:t<55296||t>=57344?e+=3:(n++,e+=4);return e}function cp(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function iv(i){let t="";for(let e in i)i.hasOwnProperty(e)&&(t.length&&(t+="&"),t+=encodeURIComponent(e)+"="+encodeURIComponent(i[e]));return t}function sv(i){let t={},e=i.split("&");for(let n=0,s=e.length;n<s;n++){let r=e[n].split("=");t[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return t}class rv extends Error{constructor(t,e,n){super(t),this.description=e,this.context=n,this.type="TransportError"}}class iu extends Pe{constructor(t){super(),this.writable=!1,Ta(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,e,n){return super.emitReserved("error",new rv(t,e,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const e=nu(t,this.socket.binaryType);this.onPacket(e)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,e={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(e)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const e=iv(t);return e.length?"?"+e:""}}class ov extends iu{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const e=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||e()})),this.writable||(n++,this.once("drain",function(){--n||e()}))}else e()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const e=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};Y_(t,this.socket.binaryType).forEach(e),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,X_(t,e=>{this.doWrite(e,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",e=this.query||{};return this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=cp()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.createUri(t,e)}}let up=!1;try{up=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const av=up;function lv(){}class cv extends ov{constructor(t){if(super(t),typeof location<"u"){const e=location.protocol==="https:";let n=location.port;n||(n=e?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||n!==t.port}}doWrite(t,e){const n=this.request({method:"POST",data:t});n.on("success",e),n.on("error",(s,r)=>{this.onError("xhr post error",s,r)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(e,n)=>{this.onError("xhr poll error",e,n)}),this.pollXhr=t}}class Xn extends Pe{constructor(t,e,n){super(),this.createRequest=t,Ta(this,n),this._opts=n,this._method=n.method||"GET",this._uri=e,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var t;const e=lp(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(e);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let s in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(s)&&n.setRequestHeader(s,this._opts.extraHeaders[s])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var s;n.readyState===3&&((s=this._opts.cookieJar)===null||s===void 0||s.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(s){this.setTimeoutFn(()=>{this._onError(s)},0);return}typeof document<"u"&&(this._index=Xn.requestsCount++,Xn.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=lv,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Xn.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}Xn.requestsCount=0;Xn.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",mh);else if(typeof addEventListener=="function"){const i="onpagehide"in _n?"pagehide":"unload";addEventListener(i,mh,!1)}}function mh(){for(let i in Xn.requests)Xn.requests.hasOwnProperty(i)&&Xn.requests[i].abort()}const uv=(function(){const i=hp({xdomain:!1});return i&&i.responseType!==null})();class hv extends cv{constructor(t){super(t);const e=t&&t.forceBase64;this.supportsBinary=uv&&!e}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new Xn(hp,this.uri(),t)}}function hp(i){const t=i.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||av))return new XMLHttpRequest}catch{}if(!t)try{return new _n[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const fp=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class fv extends iu{get name(){return"websocket"}doOpen(){const t=this.uri(),e=this.opts.protocols,n=fp?{}:lp(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,e,n)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const n=t[e],s=e===t.length-1;eu(n,this.supportsBinary,r=>{try{this.doWrite(n,r)}catch{}s&&wa(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",e=this.query||{};return this.opts.timestampRequests&&(e[this.opts.timestampParam]=cp()),this.supportsBinary||(e.b64=1),this.createUri(t,e)}}const Ya=_n.WebSocket||_n.MozWebSocket;class dv extends fv{createSocket(t,e,n){return fp?new Ya(t,e,n):e?new Ya(t,e):new Ya(t)}doWrite(t,e){this.ws.send(e)}}class pv extends iu{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const e=j_(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=t.readable.pipeThrough(e).getReader(),s=$_();s.readable.pipeTo(t.writable),this._writer=s.writable.getWriter();const r=()=>{n.read().then(({done:a,value:l})=>{a||(this.onPacket(l),r())}).catch(a=>{})};r();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const n=t[e],s=e===t.length-1;this._writer.write(n).then(()=>{s&&wa(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const mv={websocket:dv,webtransport:pv,polling:hv},gv=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,_v=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function ql(i){if(i.length>8e3)throw"URI too long";const t=i,e=i.indexOf("["),n=i.indexOf("]");e!=-1&&n!=-1&&(i=i.substring(0,e)+i.substring(e,n).replace(/:/g,";")+i.substring(n,i.length));let s=gv.exec(i||""),r={},o=14;for(;o--;)r[_v[o]]=s[o]||"";return e!=-1&&n!=-1&&(r.source=t,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=vv(r,r.path),r.queryKey=xv(r,r.query),r}function vv(i,t){const e=/\/{2,9}/g,n=t.replace(e,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&n.splice(0,1),t.slice(-1)=="/"&&n.splice(n.length-1,1),n}function xv(i,t){const e={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,s,r){s&&(e[s]=r)}),e}const Xl=typeof addEventListener=="function"&&typeof removeEventListener=="function",qo=[];Xl&&addEventListener("offline",()=>{qo.forEach(i=>i())},!1);class ki extends Pe{constructor(t,e){if(super(),this.binaryType=Z_,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(e=t,t=null),t){const n=ql(t);e.hostname=n.host,e.secure=n.protocol==="https"||n.protocol==="wss",e.port=n.port,n.query&&(e.query=n.query)}else e.host&&(e.hostname=ql(e.host).host);Ta(this,e),this.secure=e.secure!=null?e.secure:typeof location<"u"&&location.protocol==="https:",e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.hostname=e.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=e.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},e.transports.forEach(n=>{const s=n.prototype.name;this.transports.push(s),this._transportsByName[s]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},e),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=sv(this.opts.query)),Xl&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},qo.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const e=Object.assign({},this.opts.query);e.EIO=ap,e.transport=t,this.id&&(e.sid=this.id);const n=Object.assign({},this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&ki.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const e=this.createTransport(t);e.open(),this.setTransport(e)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",e=>this._onClose("transport close",e))}onOpen(){this.readyState="open",ki.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const e=new Error("server error");e.code=t.data,this._onError(e);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let e=1;for(let n=0;n<this.writeBuffer.length;n++){const s=this.writeBuffer[n].data;if(s&&(e+=ev(s)),n>0&&e>this._maxPayload)return this.writeBuffer.slice(0,n);e+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,wa(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,e,n){return this._sendPacket("message",t,e,n),this}send(t,e,n){return this._sendPacket("message",t,e,n),this}_sendPacket(t,e,n,s){if(typeof e=="function"&&(s=e,e=void 0),typeof n=="function"&&(s=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const r={type:t,data:e,options:n};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),s&&this.once("flush",s),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},e=()=>{this.off("upgrade",e),this.off("upgradeError",e),t()},n=()=>{this.once("upgrade",e),this.once("upgradeError",e)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():t()}):this.upgrading?n():t()),this}_onError(t){if(ki.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Xl&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=qo.indexOf(this._offlineEventListener);n!==-1&&qo.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,e),this.writeBuffer=[],this._prevBufferLen=0}}}ki.protocol=ap;class yv extends ki{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let e=this.createTransport(t),n=!1;ki.priorWebsocketSuccess=!1;const s=()=>{n||(e.send([{type:"ping",data:"probe"}]),e.once("packet",f=>{if(!n)if(f.type==="pong"&&f.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",e),!e)return;ki.priorWebsocketSuccess=e.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(u(),this.setTransport(e),e.send([{type:"upgrade"}]),this.emitReserved("upgrade",e),e=null,this.upgrading=!1,this.flush())})}else{const h=new Error("probe error");h.transport=e.name,this.emitReserved("upgradeError",h)}}))};function r(){n||(n=!0,u(),e.close(),e=null)}const o=f=>{const h=new Error("probe error: "+f);h.transport=e.name,r(),this.emitReserved("upgradeError",h)};function a(){o("transport closed")}function l(){o("socket closed")}function c(f){e&&f.name!==e.name&&r()}const u=()=>{e.removeListener("open",s),e.removeListener("error",o),e.removeListener("close",a),this.off("close",l),this.off("upgrading",c)};e.once("open",s),e.once("error",o),e.once("close",a),this.once("close",l),this.once("upgrading",c),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{n||e.open()},200):e.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const e=[];for(let n=0;n<t.length;n++)~this.transports.indexOf(t[n])&&e.push(t[n]);return e}}let Sv=class extends yv{constructor(t,e={}){const n=typeof t=="object"?t:e;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(s=>mv[s]).filter(s=>!!s)),super(t,n)}};function Mv(i,t="",e){let n=i;e=e||typeof location<"u"&&location,i==null&&(i=e.protocol+"//"+e.host),typeof i=="string"&&(i.charAt(0)==="/"&&(i.charAt(1)==="/"?i=e.protocol+i:i=e.host+i),/^(https?|wss?):\/\//.test(i)||(typeof e<"u"?i=e.protocol+"//"+i:i="https://"+i),n=ql(i)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const r=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+r+":"+n.port+t,n.href=n.protocol+"://"+r+(e&&e.port===n.port?"":":"+n.port),n}const Ev=typeof ArrayBuffer=="function",bv=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i.buffer instanceof ArrayBuffer,dp=Object.prototype.toString,wv=typeof Blob=="function"||typeof Blob<"u"&&dp.call(Blob)==="[object BlobConstructor]",Tv=typeof File=="function"||typeof File<"u"&&dp.call(File)==="[object FileConstructor]";function su(i){return Ev&&(i instanceof ArrayBuffer||bv(i))||wv&&i instanceof Blob||Tv&&i instanceof File}function Xo(i,t){if(!i||typeof i!="object")return!1;if(Array.isArray(i)){for(let e=0,n=i.length;e<n;e++)if(Xo(i[e]))return!0;return!1}if(su(i))return!0;if(i.toJSON&&typeof i.toJSON=="function"&&arguments.length===1)return Xo(i.toJSON(),!0);for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e)&&Xo(i[e]))return!0;return!1}function Av(i){const t=[],e=i.data,n=i;return n.data=Yl(e,t),n.attachments=t.length,{packet:n,buffers:t}}function Yl(i,t){if(!i)return i;if(su(i)){const e={_placeholder:!0,num:t.length};return t.push(i),e}else if(Array.isArray(i)){const e=new Array(i.length);for(let n=0;n<i.length;n++)e[n]=Yl(i[n],t);return e}else if(typeof i=="object"&&!(i instanceof Date)){const e={};for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=Yl(i[n],t));return e}return i}function Cv(i,t){return i.data=$l(i.data,t),delete i.attachments,i}function $l(i,t){if(!i)return i;if(i&&i._placeholder===!0){if(typeof i.num=="number"&&i.num>=0&&i.num<t.length)return t[i.num];throw new Error("illegal attachments")}else if(Array.isArray(i))for(let e=0;e<i.length;e++)i[e]=$l(i[e],t);else if(typeof i=="object")for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&(i[e]=$l(i[e],t));return i}const Rv=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var te;(function(i){i[i.CONNECT=0]="CONNECT",i[i.DISCONNECT=1]="DISCONNECT",i[i.EVENT=2]="EVENT",i[i.ACK=3]="ACK",i[i.CONNECT_ERROR=4]="CONNECT_ERROR",i[i.BINARY_EVENT=5]="BINARY_EVENT",i[i.BINARY_ACK=6]="BINARY_ACK"})(te||(te={}));class Pv{constructor(t){this.replacer=t}encode(t){return(t.type===te.EVENT||t.type===te.ACK)&&Xo(t)?this.encodeAsBinary({type:t.type===te.EVENT?te.BINARY_EVENT:te.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let e=""+t.type;return(t.type===te.BINARY_EVENT||t.type===te.BINARY_ACK)&&(e+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(e+=t.nsp+","),t.id!=null&&(e+=t.id),t.data!=null&&(e+=JSON.stringify(t.data,this.replacer)),e}encodeAsBinary(t){const e=Av(t),n=this.encodeAsString(e.packet),s=e.buffers;return s.unshift(n),s}}class ru extends Pe{constructor(t){super(),this.reviver=t}add(t){let e;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");e=this.decodeString(t);const n=e.type===te.BINARY_EVENT;n||e.type===te.BINARY_ACK?(e.type=n?te.EVENT:te.ACK,this.reconstructor=new Lv(e),e.attachments===0&&super.emitReserved("decoded",e)):super.emitReserved("decoded",e)}else if(su(t)||t.base64)if(this.reconstructor)e=this.reconstructor.takeBinaryData(t),e&&(this.reconstructor=null,super.emitReserved("decoded",e));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let e=0;const n={type:Number(t.charAt(0))};if(te[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===te.BINARY_EVENT||n.type===te.BINARY_ACK){const r=e+1;for(;t.charAt(++e)!=="-"&&e!=t.length;);const o=t.substring(r,e);if(o!=Number(o)||t.charAt(e)!=="-")throw new Error("Illegal attachments");n.attachments=Number(o)}if(t.charAt(e+1)==="/"){const r=e+1;for(;++e&&!(t.charAt(e)===","||e===t.length););n.nsp=t.substring(r,e)}else n.nsp="/";const s=t.charAt(e+1);if(s!==""&&Number(s)==s){const r=e+1;for(;++e;){const o=t.charAt(e);if(o==null||Number(o)!=o){--e;break}if(e===t.length)break}n.id=Number(t.substring(r,e+1))}if(t.charAt(++e)){const r=this.tryParse(t.substr(e));if(ru.isPayloadValid(n.type,r))n.data=r;else throw new Error("invalid payload")}return n}tryParse(t){try{return JSON.parse(t,this.reviver)}catch{return!1}}static isPayloadValid(t,e){switch(t){case te.CONNECT:return gh(e);case te.DISCONNECT:return e===void 0;case te.CONNECT_ERROR:return typeof e=="string"||gh(e);case te.EVENT:case te.BINARY_EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&Rv.indexOf(e[0])===-1);case te.ACK:case te.BINARY_ACK:return Array.isArray(e)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Lv{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const e=Cv(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function gh(i){return Object.prototype.toString.call(i)==="[object Object]"}const Iv=Object.freeze(Object.defineProperty({__proto__:null,Decoder:ru,Encoder:Pv,get PacketType(){return te}},Symbol.toStringTag,{value:"Module"}));function An(i,t,e){return i.on(t,e),function(){i.off(t,e)}}const Dv=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class pp extends Pe{constructor(t,e,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=e,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[An(t,"open",this.onopen.bind(this)),An(t,"packet",this.onpacket.bind(this)),An(t,"error",this.onerror.bind(this)),An(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...e){var n,s,r;if(Dv.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(e.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(e),this;const o={type:te.EVENT,data:e};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof e[e.length-1]=="function"){const u=this.ids++,f=e.pop();this._registerAckCallback(u,f),o.id=u}const a=(s=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||s===void 0?void 0:s.writable,l=this.connected&&!(!((r=this.io.engine)===null||r===void 0)&&r._hasPingExpired());return this.flags.volatile&&!a||(l?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(t,e){var n;const s=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(s===void 0){this.acks[t]=e;return}const r=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===t&&this.sendBuffer.splice(a,1);e.call(this,new Error("operation has timed out"))},s),o=(...a)=>{this.io.clearTimeoutFn(r),e.apply(this,a)};o.withError=!0,this.acks[t]=o}emitWithAck(t,...e){return new Promise((n,s)=>{const r=(o,a)=>o?s(o):n(a);r.withError=!0,e.push(r),this.emit(t,...e)})}_addToQueue(t){let e;typeof t[t.length-1]=="function"&&(e=t.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((s,...r)=>(this._queue[0],s!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),e&&e(s)):(this._queue.shift(),e&&e(null,...r)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const e=this._queue[0];e.pending&&!t||(e.pending=!0,e.tryCount++,this.flags=e.flags,this.emit.apply(this,e.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:te.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,e){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,e),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(n=>String(n.id)===t)){const n=this.acks[t];delete this.acks[t],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case te.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case te.EVENT:case te.BINARY_EVENT:this.onevent(t);break;case te.ACK:case te.BINARY_ACK:this.onack(t);break;case te.DISCONNECT:this.ondisconnect();break;case te.CONNECT_ERROR:this.destroy();const n=new Error(t.data.message);n.data=t.data.data,this.emitReserved("connect_error",n);break}}onevent(t){const e=t.data||[];t.id!=null&&e.push(this.ack(t.id)),this.connected?this.emitEvent(e):this.receiveBuffer.push(Object.freeze(e))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const e=this._anyListeners.slice();for(const n of e)n.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const e=this;let n=!1;return function(...s){n||(n=!0,e.packet({type:te.ACK,id:t,data:s}))}}onack(t){const e=this.acks[t.id];typeof e=="function"&&(delete this.acks[t.id],e.withError&&t.data.unshift(null),e.apply(this,t.data))}onconnect(t,e){this.id=t,this.recovered=e&&this._pid===e,this._pid=e,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:te.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const e=this._anyListeners;for(let n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const e=this._anyOutgoingListeners;for(let n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const e=this._anyOutgoingListeners.slice();for(const n of e)n.apply(this,t.data)}}}function ar(i){i=i||{},this.ms=i.min||100,this.max=i.max||1e4,this.factor=i.factor||2,this.jitter=i.jitter>0&&i.jitter<=1?i.jitter:0,this.attempts=0}ar.prototype.duration=function(){var i=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),e=Math.floor(t*this.jitter*i);i=(Math.floor(t*10)&1)==0?i-e:i+e}return Math.min(i,this.max)|0};ar.prototype.reset=function(){this.attempts=0};ar.prototype.setMin=function(i){this.ms=i};ar.prototype.setMax=function(i){this.max=i};ar.prototype.setJitter=function(i){this.jitter=i};class jl extends Pe{constructor(t,e){var n;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.opts=e,Ta(this,e),this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor((n=e.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new ar({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(e.timeout==null?2e4:e.timeout),this._readyState="closed",this.uri=t;const s=e.parser||Iv;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=e.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var e;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(e=this.backoff)===null||e===void 0||e.setMin(t),this)}randomizationFactor(t){var e;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(e=this.backoff)===null||e===void 0||e.setJitter(t),this)}reconnectionDelayMax(t){var e;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(e=this.backoff)===null||e===void 0||e.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new Sv(this.uri,this.opts);const e=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const s=An(e,"open",function(){n.onopen(),t&&t()}),r=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),t?t(a):this.maybeReconnectOnOpen()},o=An(e,"error",r);if(this._timeout!==!1){const a=this._timeout,l=this.setTimeoutFn(()=>{s(),r(new Error("timeout")),e.close()},a);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(s),this.subs.push(o),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(An(t,"ping",this.onping.bind(this)),An(t,"data",this.ondata.bind(this)),An(t,"error",this.onerror.bind(this)),An(t,"close",this.onclose.bind(this)),An(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(e){this.onclose("parse error",e)}}ondecoded(t){wa(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,e){let n=this.nsps[t];return n?this._autoConnect&&!n.active&&n.connect():(n=new pp(this,t,e),this.nsps[t]=n),n}_destroy(t){const e=Object.keys(this.nsps);for(const n of e)if(this.nsps[n].active)return;this._close()}_packet(t){const e=this.encoder.encode(t);for(let n=0;n<e.length;n++)this.engine.write(e[n],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,e){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,e),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const e=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(s=>{s?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",s)):t.onreconnect()}))},e);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const _r={};function Yo(i,t){typeof i=="object"&&(t=i,i=void 0),t=t||{};const e=Mv(i,t.path||"/socket.io"),n=e.source,s=e.id,r=e.path,o=_r[s]&&r in _r[s].nsps,a=t.forceNew||t["force new connection"]||t.multiplex===!1||o;let l;return a?l=new jl(n,t):(_r[s]||(_r[s]=new jl(n,t)),l=_r[s]),e.query&&!t.query&&(t.query=e.queryKey),l.socket(e.path,t)}Object.assign(Yo,{Manager:jl,Socket:pp,io:Yo,connect:Yo});let Bt=null;function to(){const i=vs();function t(){Bt!=null&&Bt.connected||(Bt=Yo(window.location.origin,{transports:["websocket","polling"]}),Bt.on("connect",()=>{i.mySocketId=Bt.id,i.connected=!0,console.log("[Socket] 연결됨:",Bt.id)}),Bt.on("disconnect",()=>{i.connected=!1,console.log("[Socket] 연결 끊김")}),Bt.on("room:state",h=>{i.updateRoomState(h)}),Bt.on("game:started",h=>{i.updateRoomState(h)}),Bt.on("turn:begin",h=>{i.turnState.rollCount=0,i.turnState.dice=[0,0,0,0,0],i.turnState.kept=[!1,!1,!1,!1,!1],i.possibleScores={}}),Bt.on("dice:rolling",h=>{i.startRolling(h.playerId,h.rollCount,h.kept)}),Bt.on("dice:rolled",h=>{i.updateDiceRolled(h)}),Bt.on("dice:physics-stream",h=>{i.updatePhysicsStream(h)}),Bt.on("dice:kept",({kept:h})=>{i.updateKept(h)}),Bt.on("score:card",h=>{i.updateScoreCard(h)}),Bt.on("score:possible",({possible:h})=>{i.updatePossibleScores(h)}),Bt.on("score:updated",({playerId:h,category:d})=>{const g=i.players.find(_=>_.id===h);g&&(g.usedCategories[d]=!0)}),Bt.on("game:finished",({rankings:h})=>{i.setRankings(h)}),Bt.on("score:player",h=>{i.setViewingPlayerScore(h)}),Bt.on("error",({message:h})=>{console.error("[Server Error]",h)}))}function e(h){Bt==null||Bt.emit("player:join",{name:h})}function n(){Bt==null||Bt.emit("game:start")}function s(){Bt==null||Bt.emit("dice:roll")}function r(h){Bt==null||Bt.emit("dice:result",{values:h})}function o(h){Bt==null||Bt.volatile.emit("dice:physics-stream",h)}function a(h){Bt==null||Bt.emit("dice:keep",{kept:h})}function l(h){Bt==null||Bt.emit("score:select",{category:h})}function c(h){Bt==null||Bt.emit("score:request",{playerId:h})}function u(){Bt==null||Bt.emit("game:restart")}function f(){Bt==null||Bt.disconnect(),Bt=null}return{connect:t,joinGame:e,startGame:n,rollDice:s,submitDiceResult:r,sendPhysicsStream:o,setKept:a,selectCategory:l,requestPlayerScore:c,restartGame:u,disconnect:f}}const Nv={class:"lobby"},Uv={class:"lobby-container"},Fv={key:0,class:"join-section"},Ov={class:"input-group"},Bv=["disabled"],zv={key:1,class:"waiting-section"},kv={class:"players-panel"},Vv={class:"panel-title"},Hv={class:"player-count"},Gv={class:"player-list"},Wv={class:"player-name"},qv={key:0,class:"host-badge"},Xv={key:1,class:"me-badge"},Yv={class:"actions"},$v=["disabled"],jv={key:1,class:"waiting-text"},Kv={class:"connection-info"},Zv={class:"address"},Jv={computed:{window(){return window}}},Qv=_s({...Jv,__name:"LobbyView",setup(i){const t=vs(),e=to(),n=Te(""),s=Te(!1),r=Ge(()=>t.isHost&&t.players.length>=1);function o(){n.value.trim()&&(e.connect(),setTimeout(()=>{e.joinGame(n.value.trim()),s.value=!0},300))}function a(){e.startGame()}return ya(()=>{t.connected&&(s.value=!0)}),(l,c)=>(Ct(),Rt("div",Nv,[ot("div",Uv,[c[4]||(c[4]=ot("div",{class:"lobby-header"},[ot("h1",{class:"title"},"YACHT"),ot("p",{class:"subtitle"},"Dice Game")],-1)),s.value?(Ct(),Rt("div",zv,[ot("div",kv,[ot("h3",Vv,[c[1]||(c[1]=vn(" 대기실 ",-1)),ot("span",Hv,Jt(Ut(t).players.length)+" / 5",1)]),ot("div",Gv,[(Ct(!0),Rt(oe,null,Oe(Ut(t).players,u=>(Ct(),Rt("div",{key:u.id,class:"player-card"},[ot("span",{class:"player-dot",style:ln({background:u.color})},null,4),ot("span",Wv,[vn(Jt(u.name)+" ",1),u.isHost?(Ct(),Rt("span",qv,"HOST")):yn("",!0),u.id===Ut(t).mySocketId?(Ct(),Rt("span",Xv,"ME")):yn("",!0)])]))),128)),(Ct(!0),Rt(oe,null,Oe(5-Ut(t).players.length,u=>(Ct(),Rt("div",{key:"empty-"+u,class:"player-card empty"},[...c[2]||(c[2]=[ot("span",{class:"player-dot empty-dot"},null,-1),ot("span",{class:"player-name empty-name"},"대기 중...",-1)])]))),128))])]),ot("div",Yv,[Ut(t).isHost?(Ct(),Rt("button",{key:0,class:"btn btn-success btn-lg start-btn",disabled:!r.value,onClick:a}," 게임 시작 ",8,$v)):(Ct(),Rt("p",jv," 호스트가 게임을 시작할 때까지 대기 중... "))]),ot("div",Kv,[c[3]||(c[3]=ot("p",null,"같은 네트워크에서 아래 주소로 접속하세요:",-1)),ot("code",Zv,Jt(l.window.location.origin),1)])])):(Ct(),Rt("div",Fv,[ot("div",Ov,[ng(ot("input",{"onUpdate:modelValue":c[0]||(c[0]=u=>n.value=u),class:"name-input",placeholder:"닉네임을 입력하세요",maxlength:"12",onKeyup:R_(o,["enter"]),autofocus:""},null,544),[[A_,n.value]]),ot("button",{class:"btn btn-primary btn-lg",disabled:!n.value.trim(),onClick:o}," 참가하기 ",8,Bv)])]))]),c[5]||(c[5]=ot("div",{class:"bg-dice dice-1"},"⚀",-1)),c[6]||(c[6]=ot("div",{class:"bg-dice dice-2"},"⚅",-1)),c[7]||(c[7]=ot("div",{class:"bg-dice dice-3"},"⚃",-1))]))}}),lr=(i,t)=>{const e=i.__vccOpts||i;for(const[n,s]of t)e[n]=s;return e},t0=lr(Qv,[["__scopeId","data-v-b0beeabe"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ou="170",e0=0,_h=1,n0=2,mp=1,gp=2,ui=3,qi=0,Ze=1,Gn=2,Vi=0,Xs=1,vh=2,xh=3,yh=4,i0=5,as=100,s0=101,r0=102,o0=103,a0=104,l0=200,c0=201,u0=202,h0=203,Kl=204,Zl=205,f0=206,d0=207,p0=208,m0=209,g0=210,_0=211,v0=212,x0=213,y0=214,Jl=0,Ql=1,tc=2,Zs=3,ec=4,nc=5,ic=6,sc=7,_p=0,S0=1,M0=2,Hi=0,E0=1,b0=2,w0=3,vp=4,T0=5,A0=6,C0=7,xp=300,Js=301,Qs=302,rc=303,oc=304,Aa=306,ac=1e3,us=1001,lc=1002,Dn=1003,R0=1004,po=1005,Wn=1006,$a=1007,hs=1008,Ei=1009,yp=1010,Sp=1011,Kr=1012,au=1013,ms=1014,mi=1015,eo=1016,lu=1017,cu=1018,tr=1020,Mp=35902,Ep=1021,bp=1022,Rn=1023,wp=1024,Tp=1025,Ys=1026,er=1027,Ap=1028,uu=1029,Cp=1030,hu=1031,fu=1033,$o=33776,jo=33777,Ko=33778,Zo=33779,cc=35840,uc=35841,hc=35842,fc=35843,dc=36196,pc=37492,mc=37496,gc=37808,_c=37809,vc=37810,xc=37811,yc=37812,Sc=37813,Mc=37814,Ec=37815,bc=37816,wc=37817,Tc=37818,Ac=37819,Cc=37820,Rc=37821,Jo=36492,Pc=36494,Lc=36495,Rp=36283,Ic=36284,Dc=36285,Nc=36286,P0=3200,L0=3201,Pp=0,I0=1,Bi="",gn="srgb",cr="srgb-linear",Ca="linear",de="srgb",Ms=7680,Sh=519,D0=512,N0=513,U0=514,Lp=515,F0=516,O0=517,B0=518,z0=519,Mh=35044,Eh="300 es",gi=2e3,aa=2001;class ur{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ja=Math.PI/180,Uc=180/Math.PI;function no(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function sn(i,t,e){return Math.max(t,Math.min(e,i))}function k0(i,t){return(i%t+t)%t}function Ka(i,t,e){return(1-e)*i+e*t}function vr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function tn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ne{constructor(t=0,e=0){ne.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(sn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,n,s,r,o,a,l,c){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],v=s[1],T=s[4],x=s[7],I=s[2],L=s[5],P=s[8];return r[0]=o*_+a*v+l*I,r[3]=o*m+a*T+l*L,r[6]=o*p+a*x+l*P,r[1]=c*_+u*v+f*I,r[4]=c*m+u*T+f*L,r[7]=c*p+u*x+f*P,r[2]=h*_+d*v+g*I,r[5]=h*m+d*T+g*L,r[8]=h*p+d*x+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,g=e*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(s*c-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=h*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Za.makeScale(t,e)),this}rotate(t){return this.premultiply(Za.makeRotation(-t)),this}translate(t,e){return this.premultiply(Za.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Za=new Kt;function Ip(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function la(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function V0(){const i=la("canvas");return i.style.display="block",i}const bh={};function Lr(i){i in bh||(bh[i]=!0,console.warn(i))}function H0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function G0(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function W0(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ie={enabled:!0,workingColorSpace:cr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(i.r=xi(i.r),i.g=xi(i.g),i.b=xi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(i.r=$s(i.r),i.g=$s(i.g),i.b=$s(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Bi?Ca:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const wh=[.64,.33,.3,.6,.15,.06],Th=[.2126,.7152,.0722],Ah=[.3127,.329],Ch=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rh=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[cr]:{primaries:wh,whitePoint:Ah,transfer:Ca,toXYZ:Ch,fromXYZ:Rh,luminanceCoefficients:Th,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:wh,whitePoint:Ah,transfer:de,toXYZ:Ch,fromXYZ:Rh,luminanceCoefficients:Th,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}});let Es;class q0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Es===void 0&&(Es=la("canvas")),Es.width=t.width,Es.height=t.height;const n=Es.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Es}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=la("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xi(e[n]/255)*255):e[n]=xi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let X0=0;class Dp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=no(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ja(s[o].image)):r.push(Ja(s[o]))}else r=Ja(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ja(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?q0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Y0=0;class Je extends ur{constructor(t=Je.DEFAULT_IMAGE,e=Je.DEFAULT_MAPPING,n=us,s=us,r=Wn,o=hs,a=Rn,l=Ei,c=Je.DEFAULT_ANISOTROPY,u=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=no(),this.name="",this.source=new Dp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ac:t.x=t.x-Math.floor(t.x);break;case us:t.x=t.x<0?0:1;break;case lc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ac:t.y=t.y-Math.floor(t.y);break;case us:t.y=t.y<0?0:1;break;case lc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=xp;Je.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,s=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,x=(d+1)/2,I=(p+1)/2,L=(u+h)/4,P=(f+_)/4,D=(g+m)/4;return T>x&&T>I?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=L/n,r=P/n):x>I?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=L/s,r=D/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=P/r,s=D/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-_)/v,this.z=(h-u)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $0 extends ur{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Je(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Dp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gs extends $0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Np extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class j0 extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let hr=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3];const h=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*_,v=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const I=Math.sqrt(T),L=Math.atan2(I,p*v);m=Math.sin(m*L)/I,a=Math.sin(a*L)/I}const x=a*v;if(l=l*m+h*x,c=c*m+d*x,u=u*m+g*x,f=f*m+_*x,m===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=I,c*=I,u*=I,f*=I}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*f+l*d-c*h,t[e+1]=l*g+u*h+c*f-a*d,t[e+2]=c*g+u*d+a*h-l*f,t[e+3]=u*g-a*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(r/2),h=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(sn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class Y{constructor(t=0,e=0,n=0){Y.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ph.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ph.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*u,this.y=n+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qa.copy(this).projectOnVector(t),this.sub(Qa)}reflect(t){return this.sub(Qa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(sn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qa=new Y,Ph=new hr;class io{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,En):En.fromBufferAttribute(r,o),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mo.copy(n.boundingBox)),mo.applyMatrix4(t.matrixWorld),this.union(mo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xr),go.subVectors(this.max,xr),bs.subVectors(t.a,xr),ws.subVectors(t.b,xr),Ts.subVectors(t.c,xr),Ci.subVectors(ws,bs),Ri.subVectors(Ts,ws),Zi.subVectors(bs,Ts);let e=[0,-Ci.z,Ci.y,0,-Ri.z,Ri.y,0,-Zi.z,Zi.y,Ci.z,0,-Ci.x,Ri.z,0,-Ri.x,Zi.z,0,-Zi.x,-Ci.y,Ci.x,0,-Ri.y,Ri.x,0,-Zi.y,Zi.x,0];return!tl(e,bs,ws,Ts,go)||(e=[1,0,0,0,1,0,0,0,1],!tl(e,bs,ws,Ts,go))?!1:(_o.crossVectors(Ci,Ri),e=[_o.x,_o.y,_o.z],tl(e,bs,ws,Ts,go))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ei=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],En=new Y,mo=new io,bs=new Y,ws=new Y,Ts=new Y,Ci=new Y,Ri=new Y,Zi=new Y,xr=new Y,go=new Y,_o=new Y,Ji=new Y;function tl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ji.fromArray(i,r);const a=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),l=t.dot(Ji),c=e.dot(Ji),u=n.dot(Ji);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const K0=new io,yr=new Y,el=new Y;class du{constructor(t=new Y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):K0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yr.subVectors(t,this.center);const e=yr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(yr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(el.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yr.copy(t.center).add(el)),this.expandByPoint(yr.copy(t.center).sub(el))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new Y,nl=new Y,vo=new Y,Pi=new Y,il=new Y,xo=new Y,sl=new Y;let Up=class{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.origin).addScaledVector(this.direction,e),ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){nl.copy(t).add(e).multiplyScalar(.5),vo.copy(e).sub(t).normalize(),Pi.copy(this.origin).sub(nl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(vo),a=Pi.dot(this.direction),l=-Pi.dot(vo),c=Pi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(nl).addScaledVector(vo,h),d}intersectSphere(t,e){ni.subVectors(t.center,this.origin);const n=ni.dot(this.direction),s=ni.dot(ni)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,n,s,r){il.subVectors(e,t),xo.subVectors(n,t),sl.crossVectors(il,xo);let o=this.direction.dot(sl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,t);const l=a*this.direction.dot(xo.crossVectors(Pi,xo));if(l<0)return null;const c=a*this.direction.dot(il.cross(Pi));if(c<0||l+c>o)return null;const u=-a*Pi.dot(sl);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Ee{constructor(t,e,n,s,r,o,a,l,c,u,f,h,d,g,_,m){Ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,f,h,d,g,_,m)}set(t,e,n,s,r,o,a,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/As.setFromMatrixColumn(t,0).length(),r=1/As.setFromMatrixColumn(t,1).length(),o=1/As.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=h-_*c,e[9]=-a*l,e[2]=_-h*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;e[0]=h+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;e[0]=h-_*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=g*c-d,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*f+g,e[10]=h-_*f}else if(t.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+_,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Z0,t,J0)}lookAt(t,e,n){const s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),Li.crossVectors(n,on),Li.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Li.crossVectors(n,on)),Li.normalize(),yo.crossVectors(on,Li),s[0]=Li.x,s[4]=yo.x,s[8]=on.x,s[1]=Li.y,s[5]=yo.y,s[9]=on.y,s[2]=Li.z,s[6]=yo.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],T=n[7],x=n[11],I=n[15],L=s[0],P=s[4],D=s[8],w=s[12],M=s[1],N=s[5],V=s[9],U=s[13],z=s[2],k=s[6],F=s[10],$=s[14],B=s[3],lt=s[7],st=s[11],gt=s[15];return r[0]=o*L+a*M+l*z+c*B,r[4]=o*P+a*N+l*k+c*lt,r[8]=o*D+a*V+l*F+c*st,r[12]=o*w+a*U+l*$+c*gt,r[1]=u*L+f*M+h*z+d*B,r[5]=u*P+f*N+h*k+d*lt,r[9]=u*D+f*V+h*F+d*st,r[13]=u*w+f*U+h*$+d*gt,r[2]=g*L+_*M+m*z+p*B,r[6]=g*P+_*N+m*k+p*lt,r[10]=g*D+_*V+m*F+p*st,r[14]=g*w+_*U+m*$+p*gt,r[3]=v*L+T*M+x*z+I*B,r[7]=v*P+T*N+x*k+I*lt,r[11]=v*D+T*V+x*F+I*st,r[15]=v*w+T*U+x*$+I*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*f-s*c*f-r*a*h+n*c*h+s*a*d-n*l*d)+_*(+e*l*d-e*c*h+r*o*h-s*o*d+s*c*u-r*l*u)+m*(+e*c*f-e*a*d-r*o*f+n*o*d+r*a*u-n*c*u)+p*(-s*a*u-e*l*f+e*a*h+s*o*f-n*o*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],v=f*m*c-_*h*c+_*l*d-a*m*d-f*l*p+a*h*p,T=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,x=u*_*c-g*f*c+g*a*d-o*_*d-u*a*p+o*f*p,I=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,L=e*v+n*T+s*x+r*I;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return t[0]=v*P,t[1]=(_*h*r-f*m*r-_*s*d+n*m*d+f*s*p-n*h*p)*P,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*P,t[3]=(f*l*r-a*h*r-f*s*c+n*h*c+a*s*d-n*l*d)*P,t[4]=T*P,t[5]=(u*m*r-g*h*r+g*s*d-e*m*d-u*s*p+e*h*p)*P,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*P,t[7]=(o*h*r-u*l*r+u*s*c-e*h*c-o*s*d+e*l*d)*P,t[8]=x*P,t[9]=(g*f*r-u*_*r-g*n*d+e*_*d+u*n*p-e*f*p)*P,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*P,t[11]=(u*a*r-o*f*r-u*n*c+e*f*c+o*n*d-e*a*d)*P,t[12]=I*P,t[13]=(u*_*s-g*f*s+g*n*h-e*_*h-u*n*m+e*f*m)*P,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*P,t[15]=(o*f*s-u*a*s+u*n*l-e*f*l-o*n*h+e*a*h)*P,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,g=r*f,_=o*u,m=o*f,p=a*f,v=l*c,T=l*u,x=l*f,I=n.x,L=n.y,P=n.z;return s[0]=(1-(_+p))*I,s[1]=(d+x)*I,s[2]=(g-T)*I,s[3]=0,s[4]=(d-x)*L,s[5]=(1-(h+p))*L,s[6]=(m+v)*L,s[7]=0,s[8]=(g+T)*P,s[9]=(m-v)*P,s[10]=(1-(h+_))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=As.set(s[0],s[1],s[2]).length();const o=As.set(s[4],s[5],s[6]).length(),a=As.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],bn.copy(this);const c=1/r,u=1/o,f=1/a;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=f,bn.elements[9]*=f,bn.elements[10]*=f,e.setFromRotationMatrix(bn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=gi){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),h=(n+s)/(n-s);let d,g;if(a===gi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===aa)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=gi){const l=this.elements,c=1/(e-t),u=1/(n-s),f=1/(o-r),h=(e+t)*c,d=(n+s)*u;let g,_;if(a===gi)g=(o+r)*f,_=-2*f;else if(a===aa)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const As=new Y,bn=new Ee,Z0=new Y(0,0,0),J0=new Y(1,1,1),Li=new Y,yo=new Y,on=new Y,Lh=new Ee,Ih=new hr;class qe{constructor(t=0,e=0,n=0,s=qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-sn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Lh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ih.setFromEuler(this),this.setFromQuaternion(Ih,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qe.DEFAULT_ORDER="XYZ";class pu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Q0=0;const Dh=new Y,Cs=new hr,ii=new Ee,So=new Y,Sr=new Y,tx=new Y,ex=new hr,Nh=new Y(1,0,0),Uh=new Y(0,1,0),Fh=new Y(0,0,1),Oh={type:"added"},nx={type:"removed"},Rs={type:"childadded",child:null},rl={type:"childremoved",child:null};class Xe extends ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=no(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xe.DEFAULT_UP.clone();const t=new Y,e=new qe,n=new hr,s=new Y(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ee},normalMatrix:{value:new Kt}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=Xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.premultiply(Cs),this}rotateX(t){return this.rotateOnAxis(Nh,t)}rotateY(t){return this.rotateOnAxis(Uh,t)}rotateZ(t){return this.rotateOnAxis(Fh,t)}translateOnAxis(t,e){return Dh.copy(t).applyQuaternion(this.quaternion),this.position.add(Dh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nh,t)}translateY(t){return this.translateOnAxis(Uh,t)}translateZ(t){return this.translateOnAxis(Fh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?So.copy(t):So.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Sr,So,this.up):ii.lookAt(So,Sr,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(ii),this.quaternion.premultiply(Cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Oh),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nx),rl.child=t,this.dispatchEvent(rl),rl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Oh),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,t,tx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,ex,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Xe.DEFAULT_UP=new Y(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new Y,si=new Y,ol=new Y,ri=new Y,Ps=new Y,Ls=new Y,Bh=new Y,al=new Y,ll=new Y,cl=new Y,ul=new pe,hl=new pe,fl=new pe;class Cn{constructor(t=new Y,e=new Y,n=new Y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),wn.subVectors(t,e),s.cross(wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){wn.subVectors(s,e),si.subVectors(n,e),ol.subVectors(t,e);const o=wn.dot(wn),a=wn.dot(si),l=wn.dot(ol),c=si.dot(si),u=si.dot(ol),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return ul.setScalar(0),hl.setScalar(0),fl.setScalar(0),ul.fromBufferAttribute(t,e),hl.fromBufferAttribute(t,n),fl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ul,r.x),o.addScaledVector(hl,r.y),o.addScaledVector(fl,r.z),o}static isFrontFacing(t,e,n,s){return wn.subVectors(n,e),si.subVectors(t,e),wn.cross(si).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),wn.cross(si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Cn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ps.subVectors(s,n),Ls.subVectors(r,n),al.subVectors(t,n);const l=Ps.dot(al),c=Ls.dot(al);if(l<=0&&c<=0)return e.copy(n);ll.subVectors(t,s);const u=Ps.dot(ll),f=Ls.dot(ll);if(u>=0&&f<=u)return e.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Ps,o);cl.subVectors(t,r);const d=Ps.dot(cl),g=Ls.dot(cl);if(g>=0&&d<=g)return e.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ls,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Bh.subVectors(r,s),a=(f-u)/(f-u+(d-g)),e.copy(s).addScaledVector(Bh,a);const p=1/(m+_+h);return o=_*p,a=h*p,e.copy(n).addScaledVector(Ps,o).addScaledVector(Ls,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Fp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function dl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ee{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=k0(t,1),e=sn(e,0,1),n=sn(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=dl(o,r,t+1/3),this.g=dl(o,r,t),this.b=dl(o,r,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=gn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gn){const n=Fp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xi(t.r),this.g=xi(t.g),this.b=xi(t.b),this}copyLinearToSRGB(t){return this.r=$s(t.r),this.g=$s(t.g),this.b=$s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return ie.fromWorkingColorSpace(Ve.copy(this),t),Math.round(sn(Ve.r*255,0,255))*65536+Math.round(sn(Ve.g*255,0,255))*256+Math.round(sn(Ve.b*255,0,255))}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Ve.copy(this),e);const n=Ve.r,s=Ve.g,r=Ve.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=gn){ie.fromWorkingColorSpace(Ve.copy(this),t);const e=Ve.r,n=Ve.g,s=Ve.b;return t!==gn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ii),this.setHSL(Ii.h+t,Ii.s+e,Ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ii),t.getHSL(Mo);const n=Ka(Ii.h,Mo.h,e),s=Ka(Ii.s,Mo.s,e),r=Ka(Ii.l,Mo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new ee;ee.NAMES=Fp;let ix=0,so=class extends ur{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=no(),this.name="",this.blending=Xs,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kl,this.blendDst=Zl,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(n.blending=this.blending),this.side!==qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Kl&&(n.blendSrc=this.blendSrc),this.blendDst!==Zl&&(n.blendDst=this.blendDst),this.blendEquation!==as&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}};class Op extends so{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.combine=_p,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new Y,Eo=new ne;class Yn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Mh,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Eo.fromBufferAttribute(this,e),Eo.applyMatrix3(t),this.setXY(e,Eo.x,Eo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=tn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vr(e,this.array)),e}setX(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vr(e,this.array)),e}setY(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vr(e,this.array)),e}setW(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),s=tn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),s=tn(s,this.array),r=tn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Mh&&(t.usage=this.usage),t}}class Bp extends Yn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class zp extends Yn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fn extends Yn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let sx=0;const mn=new Ee,pl=new Xe,Is=new Y,an=new io,Mr=new io,Ue=new Y;class wi extends ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=no(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ip(t)?zp:Bp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return pl.lookAt(t),pl.updateMatrix(),this.applyMatrix4(pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fn(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new io);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new du);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Mr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(an.min,Mr.min),an.expandByPoint(Ue),Ue.addVectors(an.max,Mr.max),an.expandByPoint(Ue)):(an.expandByPoint(Mr.min),an.expandByPoint(Mr.max))}an.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ue));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ue.fromBufferAttribute(a,c),l&&(Is.fromBufferAttribute(t,c),Ue.add(Is)),s=Math.max(s,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new Y,l[D]=new Y;const c=new Y,u=new Y,f=new Y,h=new ne,d=new ne,g=new ne,_=new Y,m=new Y;function p(D,w,M){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,w),f.fromBufferAttribute(n,M),h.fromBufferAttribute(r,D),d.fromBufferAttribute(r,w),g.fromBufferAttribute(r,M),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const N=1/(d.x*g.y-g.x*d.y);isFinite(N)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(N),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(N),a[D].add(_),a[w].add(_),a[M].add(_),l[D].add(m),l[w].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let D=0,w=v.length;D<w;++D){const M=v[D],N=M.start,V=M.count;for(let U=N,z=N+V;U<z;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const T=new Y,x=new Y,I=new Y,L=new Y;function P(D){I.fromBufferAttribute(s,D),L.copy(I);const w=a[D];T.copy(w),T.sub(I.multiplyScalar(I.dot(w))).normalize(),x.crossVectors(L,w);const N=x.dot(l[D])<0?-1:1;o.setXYZW(D,T.x,T.y,T.z,N)}for(let D=0,w=v.length;D<w;++D){const M=v[D],N=M.start,V=M.count;for(let U=N,z=N+V;U<z;U+=3)P(t.getX(U+0)),P(t.getX(U+1)),P(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new Y,r=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,f=new Y;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Yn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new wi,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zh=new Ee,Qi=new Up,bo=new du,kh=new Y,wo=new Y,To=new Y,Ao=new Y,ml=new Y,Co=new Y,Vh=new Y,Ro=new Y;class Fe extends Xe{constructor(t=new wi,e=new Op){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Co.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(ml.fromBufferAttribute(f,t),o?Co.addScaledVector(ml,u):Co.addScaledVector(ml.sub(e),u))}e.add(Co)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bo.copy(n.boundingSphere),bo.applyMatrix4(r),Qi.copy(t.ray).recast(t.near),!(bo.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(bo,kh)===null||Qi.origin.distanceToSquared(kh)>(t.far-t.near)**2))&&(zh.copy(r).invert(),Qi.copy(t.ray).applyMatrix4(zh),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),T=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,I=T;x<I;x+=3){const L=a.getX(x),P=a.getX(x+1),D=a.getX(x+2);s=Po(this,p,t,n,c,u,f,L,P,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),T=a.getX(m+1),x=a.getX(m+2);s=Po(this,o,t,n,c,u,f,v,T,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),T=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,I=T;x<I;x+=3){const L=x,P=x+1,D=x+2;s=Po(this,p,t,n,c,u,f,L,P,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=m,T=m+1,x=m+2;s=Po(this,o,t,n,c,u,f,v,T,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function rx(i,t,e,n,s,r,o,a){let l;if(t.side===Ze?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===qi,a),l===null)return null;Ro.copy(a),Ro.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ro);return c<e.near||c>e.far?null:{distance:c,point:Ro.clone(),object:i}}function Po(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,wo),i.getVertexPosition(l,To),i.getVertexPosition(c,Ao);const u=rx(i,t,e,n,wo,To,Ao,Vh);if(u){const f=new Y;Cn.getBarycoord(Vh,wo,To,Ao,f),s&&(u.uv=Cn.getInterpolatedAttribute(s,a,l,c,f,new ne)),r&&(u.uv1=Cn.getInterpolatedAttribute(r,a,l,c,f,new ne)),o&&(u.normal=Cn.getInterpolatedAttribute(o,a,l,c,f,new Y),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new Y,materialIndex:0};Cn.getNormal(wo,To,Ao,h.normal),u.face=h,u.barycoord=f}return u}class _i extends wi{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new fn(c,3)),this.setAttribute("normal",new fn(u,3)),this.setAttribute("uv",new fn(f,2));function g(_,m,p,v,T,x,I,L,P,D,w){const M=x/P,N=I/D,V=x/2,U=I/2,z=L/2,k=P+1,F=D+1;let $=0,B=0;const lt=new Y;for(let st=0;st<F;st++){const gt=st*N-U;for(let ht=0;ht<k;ht++){const Qt=ht*M-V;lt[_]=Qt*v,lt[m]=gt*T,lt[p]=z,c.push(lt.x,lt.y,lt.z),lt[_]=0,lt[m]=0,lt[p]=L>0?1:-1,u.push(lt.x,lt.y,lt.z),f.push(ht/P),f.push(1-st/D),$+=1}}for(let st=0;st<D;st++)for(let gt=0;gt<P;gt++){const ht=h+gt+k*st,Qt=h+gt+k*(st+1),at=h+(gt+1)+k*(st+1),dt=h+(gt+1)+k*st;l.push(ht,Qt,dt),l.push(Qt,at,dt),B+=6}a.addGroup(d,B,w),d+=B,h+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function nr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function $e(i){const t={};for(let e=0;e<i.length;e++){const n=nr(i[e]);for(const s in n)t[s]=n[s]}return t}function ox(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function kp(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const ax={clone:nr,merge:$e};var lx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends so{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lx,this.fragmentShader=cx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=nr(t.uniforms),this.uniformsGroups=ox(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Vp extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=gi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Di=new Y,Hh=new ne,Gh=new ne;class cn extends Vp{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Uc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ja*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Uc*2*Math.atan(Math.tan(ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Di.x,Di.y).multiplyScalar(-t/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-t/Di.z)}getViewSize(t,e){return this.getViewBounds(t,Hh,Gh),e.subVectors(Gh,Hh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ja*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ds=-90,Ns=1;class ux extends Xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new cn(Ds,Ns,t,e);s.layers=this.layers,this.add(s);const r=new cn(Ds,Ns,t,e);r.layers=this.layers,this.add(r);const o=new cn(Ds,Ns,t,e);o.layers=this.layers,this.add(o);const a=new cn(Ds,Ns,t,e);a.layers=this.layers,this.add(a);const l=new cn(Ds,Ns,t,e);l.layers=this.layers,this.add(l);const c=new cn(Ds,Ns,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===gi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===aa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Hp extends Je{constructor(t,e,n,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Js,super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hx extends gs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Hp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Wn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _i(5,5,5),r=new Xi({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:Vi});r.uniforms.tEquirect.value=e;const o=new Fe(s,r),a=e.minFilter;return e.minFilter===hs&&(e.minFilter=Wn),new ux(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const gl=new Y,fx=new Y,dx=new Kt;class rs{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=gl.subVectors(n,e).cross(fx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(gl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||dx.getNormalMatrix(t),s=this.coplanarPoint(gl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new du,Lo=new Y;class mu{constructor(t=new rs,e=new rs,n=new rs,s=new rs,r=new rs,o=new rs){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=gi){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],v=s[13],T=s[14],x=s[15];if(n[0].setComponents(l-r,h-c,m-d,x-p).normalize(),n[1].setComponents(l+r,h+c,m+d,x+p).normalize(),n[2].setComponents(l+o,h+u,m+g,x+v).normalize(),n[3].setComponents(l-o,h-u,m-g,x-v).normalize(),n[4].setComponents(l-a,h-f,m-_,x-T).normalize(),e===gi)n[5].setComponents(l+a,h+f,m+_,x+T).normalize();else if(e===aa)n[5].setComponents(a,f,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(t){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Lo.x=s.normal.x>0?t.max.x:t.min.x,Lo.y=s.normal.y>0?t.max.y:t.min.y,Lo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gp(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function px(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Ra extends wi{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=t/a,h=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const v=p*h-o;for(let T=0;T<c;T++){const x=T*f-r;g.push(x,-v,0),_.push(0,0,1),m.push(T/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const T=v+c*p,x=v+c*(p+1),I=v+1+c*(p+1),L=v+1+c*p;d.push(T,x,L),d.push(x,I,L)}this.setIndex(d),this.setAttribute("position",new fn(g,3)),this.setAttribute("normal",new fn(_,3)),this.setAttribute("uv",new fn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ra(t.width,t.height,t.widthSegments,t.heightSegments)}}var mx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gx=`#ifdef USE_ALPHAHASH
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
#endif`,_x=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sx=`#ifdef USE_AOMAP
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
#endif`,Mx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ex=`#ifdef USE_BATCHING
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
#endif`,bx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ax=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cx=`#ifdef USE_IRIDESCENCE
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
#endif`,Rx=`#ifdef USE_BUMPMAP
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
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ux=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ox=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Bx=`#define PI 3.141592653589793
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
} // validated`,zx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kx=`vec3 transformedNormal = objectNormal;
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
#endif`,Vx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yx=`#ifdef USE_ENVMAP
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
#endif`,$x=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jx=`#ifdef USE_ENVMAP
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
#endif`,Kx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zx=`#ifdef USE_ENVMAP
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
#endif`,Jx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ty=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ey=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ny=`#ifdef USE_GRADIENTMAP
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
}`,iy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ry=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oy=`uniform bool receiveShadow;
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
#endif`,ay=`#ifdef USE_ENVMAP
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
#endif`,ly=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fy=`PhysicalMaterial material;
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
#endif`,dy=`struct PhysicalMaterial {
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
}`,py=`
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
#endif`,my=`#if defined( RE_IndirectDiffuse )
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
#endif`,gy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_y=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,My=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ey=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,by=`#if defined( USE_POINTS_UV )
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
#endif`,wy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ty=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ay=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ry=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Py=`#ifdef USE_MORPHTARGETS
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
#endif`,Ly=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ny=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Oy=`#ifdef USE_NORMALMAP
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
#endif`,By=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ky=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$y=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ky=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qy=`float getShadowMask() {
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
}`,tS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eS=`#ifdef USE_SKINNING
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
#endif`,nS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iS=`#ifdef USE_SKINNING
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
#endif`,sS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lS=`#ifdef USE_TRANSMISSION
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
#endif`,cS=`#ifdef USE_TRANSMISSION
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
#endif`,uS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mS=`uniform sampler2D t2D;
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
}`,gS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_S=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yS=`#include <common>
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
}`,SS=`#if DEPTH_PACKING == 3200
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
}`,MS=`#define DISTANCE
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
}`,ES=`#define DISTANCE
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
}`,bS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TS=`uniform float scale;
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
}`,AS=`uniform vec3 diffuse;
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
}`,CS=`#include <common>
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
}`,RS=`uniform vec3 diffuse;
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
}`,PS=`#define LAMBERT
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
}`,LS=`#define LAMBERT
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
}`,IS=`#define MATCAP
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
}`,DS=`#define MATCAP
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
}`,NS=`#define NORMAL
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
}`,US=`#define NORMAL
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
}`,FS=`#define PHONG
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
}`,OS=`#define PHONG
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
}`,BS=`#define STANDARD
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
}`,zS=`#define STANDARD
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
}`,kS=`#define TOON
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
}`,VS=`#define TOON
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
}`,HS=`uniform float size;
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
}`,GS=`uniform vec3 diffuse;
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
}`,WS=`#include <common>
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
}`,qS=`uniform vec3 color;
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
}`,XS=`uniform float rotation;
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
}`,YS=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:mx,alphahash_pars_fragment:gx,alphamap_fragment:_x,alphamap_pars_fragment:vx,alphatest_fragment:xx,alphatest_pars_fragment:yx,aomap_fragment:Sx,aomap_pars_fragment:Mx,batching_pars_vertex:Ex,batching_vertex:bx,begin_vertex:wx,beginnormal_vertex:Tx,bsdfs:Ax,iridescence_fragment:Cx,bumpmap_pars_fragment:Rx,clipping_planes_fragment:Px,clipping_planes_pars_fragment:Lx,clipping_planes_pars_vertex:Ix,clipping_planes_vertex:Dx,color_fragment:Nx,color_pars_fragment:Ux,color_pars_vertex:Fx,color_vertex:Ox,common:Bx,cube_uv_reflection_fragment:zx,defaultnormal_vertex:kx,displacementmap_pars_vertex:Vx,displacementmap_vertex:Hx,emissivemap_fragment:Gx,emissivemap_pars_fragment:Wx,colorspace_fragment:qx,colorspace_pars_fragment:Xx,envmap_fragment:Yx,envmap_common_pars_fragment:$x,envmap_pars_fragment:jx,envmap_pars_vertex:Kx,envmap_physical_pars_fragment:ay,envmap_vertex:Zx,fog_vertex:Jx,fog_pars_vertex:Qx,fog_fragment:ty,fog_pars_fragment:ey,gradientmap_pars_fragment:ny,lightmap_pars_fragment:iy,lights_lambert_fragment:sy,lights_lambert_pars_fragment:ry,lights_pars_begin:oy,lights_toon_fragment:ly,lights_toon_pars_fragment:cy,lights_phong_fragment:uy,lights_phong_pars_fragment:hy,lights_physical_fragment:fy,lights_physical_pars_fragment:dy,lights_fragment_begin:py,lights_fragment_maps:my,lights_fragment_end:gy,logdepthbuf_fragment:_y,logdepthbuf_pars_fragment:vy,logdepthbuf_pars_vertex:xy,logdepthbuf_vertex:yy,map_fragment:Sy,map_pars_fragment:My,map_particle_fragment:Ey,map_particle_pars_fragment:by,metalnessmap_fragment:wy,metalnessmap_pars_fragment:Ty,morphinstance_vertex:Ay,morphcolor_vertex:Cy,morphnormal_vertex:Ry,morphtarget_pars_vertex:Py,morphtarget_vertex:Ly,normal_fragment_begin:Iy,normal_fragment_maps:Dy,normal_pars_fragment:Ny,normal_pars_vertex:Uy,normal_vertex:Fy,normalmap_pars_fragment:Oy,clearcoat_normal_fragment_begin:By,clearcoat_normal_fragment_maps:zy,clearcoat_pars_fragment:ky,iridescence_pars_fragment:Vy,opaque_fragment:Hy,packing:Gy,premultiplied_alpha_fragment:Wy,project_vertex:qy,dithering_fragment:Xy,dithering_pars_fragment:Yy,roughnessmap_fragment:$y,roughnessmap_pars_fragment:jy,shadowmap_pars_fragment:Ky,shadowmap_pars_vertex:Zy,shadowmap_vertex:Jy,shadowmask_pars_fragment:Qy,skinbase_vertex:tS,skinning_pars_vertex:eS,skinning_vertex:nS,skinnormal_vertex:iS,specularmap_fragment:sS,specularmap_pars_fragment:rS,tonemapping_fragment:oS,tonemapping_pars_fragment:aS,transmission_fragment:lS,transmission_pars_fragment:cS,uv_pars_fragment:uS,uv_pars_vertex:hS,uv_vertex:fS,worldpos_vertex:dS,background_vert:pS,background_frag:mS,backgroundCube_vert:gS,backgroundCube_frag:_S,cube_vert:vS,cube_frag:xS,depth_vert:yS,depth_frag:SS,distanceRGBA_vert:MS,distanceRGBA_frag:ES,equirect_vert:bS,equirect_frag:wS,linedashed_vert:TS,linedashed_frag:AS,meshbasic_vert:CS,meshbasic_frag:RS,meshlambert_vert:PS,meshlambert_frag:LS,meshmatcap_vert:IS,meshmatcap_frag:DS,meshnormal_vert:NS,meshnormal_frag:US,meshphong_vert:FS,meshphong_frag:OS,meshphysical_vert:BS,meshphysical_frag:zS,meshtoon_vert:kS,meshtoon_frag:VS,points_vert:HS,points_frag:GS,shadow_vert:WS,shadow_frag:qS,sprite_vert:XS,sprite_frag:YS},St={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Hn={basic:{uniforms:$e([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:$e([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new ee(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:$e([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:$e([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:$e([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new ee(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:$e([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:$e([St.points,St.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:$e([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:$e([St.common,St.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:$e([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:$e([St.sprite,St.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:$e([St.common,St.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:$e([St.lights,St.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Hn.physical={uniforms:$e([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const Io={r:0,b:0,g:0},es=new qe,$S=new Ee;function jS(i,t,e,n,s,r,o){const a=new ee(0);let l=r===!0?0:1,c,u,f=null,h=0,d=null;function g(v){let T=v.isScene===!0?v.background:null;return T&&T.isTexture&&(T=(v.backgroundBlurriness>0?e:t).get(T)),T}function _(v){let T=!1;const x=g(v);x===null?p(a,l):x&&x.isColor&&(p(x,1),T=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,T){const x=g(T);x&&(x.isCubeTexture||x.mapping===Aa)?(u===void 0&&(u=new Fe(new _i(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:nr(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,L,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),es.copy(T.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($S.makeRotationFromEuler(es)),u.material.toneMapped=ie.getTransfer(x.colorSpace)!==de,(f!==x||h!==x.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,d=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Fe(new Ra(2,2),new Xi({name:"BackgroundMaterial",uniforms:nr(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=ie.getTransfer(x.colorSpace)!==de,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,T){v.getRGB(Io,kp(i)),n.buffers.color.setClear(Io.r,Io.g,Io.b,T,o)}return{getClearColor:function(){return a},setClearColor:function(v,T=1){a.set(v),l=T,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:_,addToRenderList:m}}function KS(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(M,N,V,U,z){let k=!1;const F=f(U,V,N);r!==F&&(r=F,c(r.object)),k=d(M,U,V,z),k&&g(M,U,V,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,x(M,N,V,U),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function f(M,N,V){const U=V.wireframe===!0;let z=n[M.id];z===void 0&&(z={},n[M.id]=z);let k=z[N.id];k===void 0&&(k={},z[N.id]=k);let F=k[U];return F===void 0&&(F=h(l()),k[U]=F),F}function h(M){const N=[],V=[],U=[];for(let z=0;z<e;z++)N[z]=0,V[z]=0,U[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:V,attributeDivisors:U,object:M,attributes:{},index:null}}function d(M,N,V,U){const z=r.attributes,k=N.attributes;let F=0;const $=V.getAttributes();for(const B in $)if($[B].location>=0){const st=z[B];let gt=k[B];if(gt===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(gt=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(gt=M.instanceColor)),st===void 0||st.attribute!==gt||gt&&st.data!==gt.data)return!0;F++}return r.attributesNum!==F||r.index!==U}function g(M,N,V,U){const z={},k=N.attributes;let F=0;const $=V.getAttributes();for(const B in $)if($[B].location>=0){let st=k[B];st===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(st=M.instanceColor));const gt={};gt.attribute=st,st&&st.data&&(gt.data=st.data),z[B]=gt,F++}r.attributes=z,r.attributesNum=F,r.index=U}function _(){const M=r.newAttributes;for(let N=0,V=M.length;N<V;N++)M[N]=0}function m(M){p(M,0)}function p(M,N){const V=r.newAttributes,U=r.enabledAttributes,z=r.attributeDivisors;V[M]=1,U[M]===0&&(i.enableVertexAttribArray(M),U[M]=1),z[M]!==N&&(i.vertexAttribDivisor(M,N),z[M]=N)}function v(){const M=r.newAttributes,N=r.enabledAttributes;for(let V=0,U=N.length;V<U;V++)N[V]!==M[V]&&(i.disableVertexAttribArray(V),N[V]=0)}function T(M,N,V,U,z,k,F){F===!0?i.vertexAttribIPointer(M,N,V,z,k):i.vertexAttribPointer(M,N,V,U,z,k)}function x(M,N,V,U){_();const z=U.attributes,k=V.getAttributes(),F=N.defaultAttributeValues;for(const $ in k){const B=k[$];if(B.location>=0){let lt=z[$];if(lt===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(lt=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(lt=M.instanceColor)),lt!==void 0){const st=lt.normalized,gt=lt.itemSize,ht=t.get(lt);if(ht===void 0)continue;const Qt=ht.buffer,at=ht.type,dt=ht.bytesPerElement,Tt=at===i.INT||at===i.UNSIGNED_INT||lt.gpuType===au;if(lt.isInterleavedBufferAttribute){const _t=lt.data,Ot=_t.stride,kt=lt.offset;if(_t.isInstancedInterleavedBuffer){for(let zt=0;zt<B.locationSize;zt++)p(B.location+zt,_t.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let zt=0;zt<B.locationSize;zt++)m(B.location+zt);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let zt=0;zt<B.locationSize;zt++)T(B.location+zt,gt/B.locationSize,at,st,Ot*dt,(kt+gt/B.locationSize*zt)*dt,Tt)}else{if(lt.isInstancedBufferAttribute){for(let _t=0;_t<B.locationSize;_t++)p(B.location+_t,lt.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let _t=0;_t<B.locationSize;_t++)m(B.location+_t);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let _t=0;_t<B.locationSize;_t++)T(B.location+_t,gt/B.locationSize,at,st,gt*dt,gt/B.locationSize*_t*dt,Tt)}}else if(F!==void 0){const st=F[$];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(B.location,st);break;case 3:i.vertexAttrib3fv(B.location,st);break;case 4:i.vertexAttrib4fv(B.location,st);break;default:i.vertexAttrib1fv(B.location,st)}}}}v()}function I(){D();for(const M in n){const N=n[M];for(const V in N){const U=N[V];for(const z in U)u(U[z].object),delete U[z];delete N[V]}delete n[M]}}function L(M){if(n[M.id]===void 0)return;const N=n[M.id];for(const V in N){const U=N[V];for(const z in U)u(U[z].object),delete U[z];delete N[V]}delete n[M.id]}function P(M){for(const N in n){const V=n[N];if(V[M.id]===void 0)continue;const U=V[M.id];for(const z in U)u(U[z].object),delete U[z];delete V[M.id]}}function D(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function ZS(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];e.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function JS(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Rn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const D=P===eo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Ei&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==mi&&!D)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:x,vertexTextures:I,maxSamples:L}}function QS(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new rs,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const v=r?0:n,T=v*4;let x=p.clippingState||null;l.value=x,x=u(g,h,T,d);for(let I=0;I!==T;++I)x[I]=e[I];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,x=d;T!==_;++T,x+=4)o.copy(f[T]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function tM(i){let t=new WeakMap;function e(o,a){return a===rc?o.mapping=Js:a===oc&&(o.mapping=Qs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===rc||a===oc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new hx(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Wp extends Vp{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ks=4,Wh=[.125,.215,.35,.446,.526,.582],ls=20,_l=new Wp,qh=new ee;let vl=null,xl=0,yl=0,Sl=!1;const os=(1+Math.sqrt(5))/2,Us=1/os,Xh=[new Y(-os,Us,0),new Y(os,Us,0),new Y(-Us,0,os),new Y(Us,0,os),new Y(0,os,-Us),new Y(0,os,Us),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class Yh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){vl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vl,xl,yl),this._renderer.xr.enabled=Sl,t.scissorTest=!1,Do(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Js||t.mapping===Qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:eo,format:Rn,colorSpace:cr,depthBuffer:!1},s=$h(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$h(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eM(r)),this._blurMaterial=nM(r,t,e)}return s}_compileMaterial(t){const e=new Fe(this._lodPlanes[0],t);this._renderer.compile(e,_l)}_sceneToCubeUV(t,e,n,s){const a=new cn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(qh),u.toneMapping=Hi,u.autoClear=!1;const d=new Op({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),g=new Fe(new _i,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(qh),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const T=this._cubeSize;Do(s,v*T,p>2?T:0,T,T),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Js||t.mapping===Qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Fe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Do(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,_l)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Xh[(s-r-1)%Xh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Fe(this._lodPlanes[s],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ls-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):ls;m>ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ls}`);const p=[];let v=0;for(let P=0;P<ls;++P){const D=P/_,w=Math.exp(-D*D/2);p.push(w),P===0?v+=w:P<m&&(v+=2*w)}for(let P=0;P<p.length;P++)p[P]=p[P]/v;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:T}=this;h.dTheta.value=g,h.mipInt.value=T-n;const x=this._sizeLods[s],I=3*x*(s>T-ks?s-T+ks:0),L=4*(this._cubeSize-x);Do(e,I,L,3*x,2*x),l.setRenderTarget(e),l.render(f,_l)}}function eM(i){const t=[],e=[],n=[];let s=i;const r=i-ks+1+Wh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ks?l=Wh[o-i+ks-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*d),T=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let L=0;L<d;L++){const P=L%3*2/3-1,D=L>2?0:-1,w=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];v.set(w,_*g*L),T.set(h,m*g*L);const M=[L,L,L,L,L,L];x.set(M,p*g*L)}const I=new wi;I.setAttribute("position",new Yn(v,_)),I.setAttribute("uv",new Yn(T,m)),I.setAttribute("faceIndex",new Yn(x,p)),t.push(I),s>ks&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $h(i,t,e){const n=new gs(i,t,e);return n.texture.mapping=Aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Do(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function nM(i,t,e){const n=new Float32Array(ls),s=new Y(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gu(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function jh(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gu(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Kh(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function gu(){return`

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
	`}function iM(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===rc||l===oc,u=l===Js||l===Qs;if(c||u){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Yh(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new Yh(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function sM(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Lr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function rM(i,t,e,n){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)t.update(h[g],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const v=d.array;_=d.version;for(let T=0,x=v.length;T<x;T+=3){const I=v[T+0],L=v[T+1],P=v[T+2];h.push(I,L,L,P,P,I)}}else if(g!==void 0){const v=g.array;_=g.version;for(let T=0,x=v.length/3-1;T<x;T+=3){const I=T+0,L=T+1,P=T+2;h.push(I,L,L,P,P,I)}}else return;const m=new(Ip(h)?zp:Bp)(h,1);m.version=_;const p=r.get(f);p&&t.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function oM(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){i.drawElements(n,d,r,h*o),e.update(d,n,1)}function c(h,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,h*o,g),e.update(d,n,g))}function u(h,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function f(h,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,h,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=d[v]*_[v];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function aM(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function lM(i,t,e){const n=new WeakMap,s=new pe;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let M=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var d=M;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let I=a.attributes.position.count*x,L=1;I>t.maxTextureSize&&(L=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const P=new Float32Array(I*L*4*f),D=new Np(P,I,L,f);D.type=mi,D.needsUpdate=!0;const w=x*4;for(let N=0;N<f;N++){const V=p[N],U=v[N],z=T[N],k=I*L*4*N;for(let F=0;F<V.count;F++){const $=F*w;g===!0&&(s.fromBufferAttribute(V,F),P[k+$+0]=s.x,P[k+$+1]=s.y,P[k+$+2]=s.z,P[k+$+3]=0),_===!0&&(s.fromBufferAttribute(U,F),P[k+$+4]=s.x,P[k+$+5]=s.y,P[k+$+6]=s.z,P[k+$+7]=0),m===!0&&(s.fromBufferAttribute(z,F),P[k+$+8]=s.x,P[k+$+9]=s.y,P[k+$+10]=s.z,P[k+$+11]=z.itemSize===4?s.w:1)}}h={count:f,texture:D,size:new ne(I,L)},n.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function cM(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class qp extends Je{constructor(t,e,n,s,r,o,a,l,c,u=Ys){if(u!==Ys&&u!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ys&&(n=ms),n===void 0&&u===er&&(n=tr),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Dn,this.minFilter=l!==void 0?l:Dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Xp=new Je,Zh=new qp(1,1),Yp=new Np,$p=new j0,jp=new Hp,Jh=[],Qh=[],tf=new Float32Array(16),ef=new Float32Array(9),nf=new Float32Array(4);function fr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Jh[s];if(r===void 0&&(r=new Float32Array(s),Jh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Pa(i,t){let e=Qh[t];e===void 0&&(e=new Int32Array(t),Qh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function uM(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function hM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function fM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function dM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function pM(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;nf.set(n),i.uniformMatrix2fv(this.addr,!1,nf),Ne(e,n)}}function mM(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;ef.set(n),i.uniformMatrix3fv(this.addr,!1,ef),Ne(e,n)}}function gM(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;tf.set(n),i.uniformMatrix4fv(this.addr,!1,tf),Ne(e,n)}}function _M(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function vM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function xM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function yM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function SM(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function MM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function EM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function bM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function wM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Zh.compareFunction=Lp,r=Zh):r=Xp,e.setTexture2D(t||r,s)}function TM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||$p,s)}function AM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||jp,s)}function CM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Yp,s)}function RM(i){switch(i){case 5126:return uM;case 35664:return hM;case 35665:return fM;case 35666:return dM;case 35674:return pM;case 35675:return mM;case 35676:return gM;case 5124:case 35670:return _M;case 35667:case 35671:return vM;case 35668:case 35672:return xM;case 35669:case 35673:return yM;case 5125:return SM;case 36294:return MM;case 36295:return EM;case 36296:return bM;case 35678:case 36198:case 36298:case 36306:case 35682:return wM;case 35679:case 36299:case 36307:return TM;case 35680:case 36300:case 36308:case 36293:return AM;case 36289:case 36303:case 36311:case 36292:return CM}}function PM(i,t){i.uniform1fv(this.addr,t)}function LM(i,t){const e=fr(t,this.size,2);i.uniform2fv(this.addr,e)}function IM(i,t){const e=fr(t,this.size,3);i.uniform3fv(this.addr,e)}function DM(i,t){const e=fr(t,this.size,4);i.uniform4fv(this.addr,e)}function NM(i,t){const e=fr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function UM(i,t){const e=fr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function FM(i,t){const e=fr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function OM(i,t){i.uniform1iv(this.addr,t)}function BM(i,t){i.uniform2iv(this.addr,t)}function zM(i,t){i.uniform3iv(this.addr,t)}function kM(i,t){i.uniform4iv(this.addr,t)}function VM(i,t){i.uniform1uiv(this.addr,t)}function HM(i,t){i.uniform2uiv(this.addr,t)}function GM(i,t){i.uniform3uiv(this.addr,t)}function WM(i,t){i.uniform4uiv(this.addr,t)}function qM(i,t,e){const n=this.cache,s=t.length,r=Pa(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Xp,r[o])}function XM(i,t,e){const n=this.cache,s=t.length,r=Pa(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||$p,r[o])}function YM(i,t,e){const n=this.cache,s=t.length,r=Pa(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||jp,r[o])}function $M(i,t,e){const n=this.cache,s=t.length,r=Pa(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Yp,r[o])}function jM(i){switch(i){case 5126:return PM;case 35664:return LM;case 35665:return IM;case 35666:return DM;case 35674:return NM;case 35675:return UM;case 35676:return FM;case 5124:case 35670:return OM;case 35667:case 35671:return BM;case 35668:case 35672:return zM;case 35669:case 35673:return kM;case 5125:return VM;case 36294:return HM;case 36295:return GM;case 36296:return WM;case 35678:case 36198:case 36298:case 36306:case 35682:return qM;case 35679:case 36299:case 36307:return XM;case 35680:case 36300:case 36308:case 36293:return YM;case 36289:case 36303:case 36311:case 36292:return $M}}class KM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=RM(e.type)}}class ZM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jM(e.type)}}class JM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ml=/(\w+)(\])?(\[|\.)?/g;function sf(i,t){i.seq.push(t),i.map[t.id]=t}function QM(i,t,e){const n=i.name,s=n.length;for(Ml.lastIndex=0;;){const r=Ml.exec(n),o=Ml.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){sf(e,c===void 0?new KM(a,i,t):new ZM(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new JM(a),sf(e,f)),e=f}}}class Qo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);QM(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function rf(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const tE=37297;let eE=0;function nE(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const of=new Kt;function iE(i){ie._getMatrix(of,ie.workingColorSpace,i);const t=`mat3( ${of.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case Ca:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function af(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+nE(i.getShaderSource(t),o)}else return s}function sE(i,t){const e=iE(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function rE(i,t){let e;switch(t){case E0:e="Linear";break;case b0:e="Reinhard";break;case w0:e="Cineon";break;case vp:e="ACESFilmic";break;case A0:e="AgX";break;case C0:e="Neutral";break;case T0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const No=new Y;function oE(){ie.getLuminanceCoefficients(No);const i=No.x.toFixed(4),t=No.y.toFixed(4),e=No.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function lE(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function cE(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ir(i){return i!==""}function lf(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const uE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fc(i){return i.replace(uE,fE)}const hE=new Map;function fE(i,t){let e=Zt[t];if(e===void 0){const n=hE.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Fc(e)}const dE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uf(i){return i.replace(dE,pE)}function pE(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function mE(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===mp?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===gp?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ui&&(t="SHADOWMAP_TYPE_VSM"),t}function gE(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Js:case Qs:t="ENVMAP_TYPE_CUBE";break;case Aa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _E(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Qs:t="ENVMAP_MODE_REFRACTION";break}return t}function vE(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _p:t="ENVMAP_BLENDING_MULTIPLY";break;case S0:t="ENVMAP_BLENDING_MIX";break;case M0:t="ENVMAP_BLENDING_ADD";break}return t}function xE(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function yE(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=mE(e),c=gE(e),u=_E(e),f=vE(e),h=xE(e),d=aE(e),g=lE(r),_=s.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ir).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ir).join(`
`),p.length>0&&(p+=`
`)):(m=[hf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),p=[hf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hi?"#define TONE_MAPPING":"",e.toneMapping!==Hi?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Hi?rE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,sE("linearToOutputTexel",e.outputColorSpace),oE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ir).join(`
`)),o=Fc(o),o=lf(o,e),o=cf(o,e),a=Fc(a),a=lf(a,e),a=cf(a,e),o=uf(o),a=uf(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=v+m+o,x=v+p+a,I=rf(s,s.VERTEX_SHADER,T),L=rf(s,s.FRAGMENT_SHADER,x);s.attachShader(_,I),s.attachShader(_,L),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(N){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(_).trim(),U=s.getShaderInfoLog(I).trim(),z=s.getShaderInfoLog(L).trim();let k=!0,F=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,I,L);else{const $=af(s,I,"vertex"),B=af(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+V+`
`+$+`
`+B)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(U===""||z==="")&&(F=!1);F&&(N.diagnostics={runnable:k,programLog:V,vertexShader:{log:U,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(I),s.deleteShader(L),D=new Qo(s,_),w=cE(s,_)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,tE)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=eE++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=L,this}let SE=0;class ME{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new EE(t),e.set(t,n)),n}}class EE{constructor(t){this.id=SE++,this.code=t,this.usedTimes=0}}function bE(i,t,e,n,s,r,o){const a=new pu,l=new ME,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,M,N,V,U){const z=V.fog,k=U.geometry,F=w.isMeshStandardMaterial?V.environment:null,$=(w.isMeshStandardMaterial?e:t).get(w.envMap||F),B=$&&$.mapping===Aa?$.image.height:null,lt=g[w.type];w.precision!==null&&(d=s.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const st=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,gt=st!==void 0?st.length:0;let ht=0;k.morphAttributes.position!==void 0&&(ht=1),k.morphAttributes.normal!==void 0&&(ht=2),k.morphAttributes.color!==void 0&&(ht=3);let Qt,at,dt,Tt;if(lt){const fe=Hn[lt];Qt=fe.vertexShader,at=fe.fragmentShader}else Qt=w.vertexShader,at=w.fragmentShader,l.update(w),dt=l.getVertexShaderID(w),Tt=l.getFragmentShaderID(w);const _t=i.getRenderTarget(),Ot=i.state.buffers.depth.getReversed(),kt=U.isInstancedMesh===!0,zt=U.isBatchedMesh===!0,_e=!!w.map,A=!!w.matcap,C=!!$,S=!!w.aoMap,Z=!!w.lightMap,G=!!w.bumpMap,X=!!w.normalMap,j=!!w.displacementMap,rt=!!w.emissiveMap,J=!!w.metalnessMap,E=!!w.roughnessMap,y=w.anisotropy>0,O=w.clearcoat>0,K=w.dispersion>0,tt=w.iridescence>0,Q=w.sheen>0,mt=w.transmission>0,ut=y&&!!w.anisotropyMap,vt=O&&!!w.clearcoatMap,Vt=O&&!!w.clearcoatNormalMap,ft=O&&!!w.clearcoatRoughnessMap,Mt=tt&&!!w.iridescenceMap,Ft=tt&&!!w.iridescenceThicknessMap,Ht=Q&&!!w.sheenColorMap,xt=Q&&!!w.sheenRoughnessMap,Wt=!!w.specularMap,Xt=!!w.specularColorMap,he=!!w.specularIntensityMap,H=mt&&!!w.transmissionMap,Et=mt&&!!w.thicknessMap,it=!!w.gradientMap,ct=!!w.alphaMap,At=w.alphaTest>0,bt=!!w.alphaHash,$t=!!w.extensions;let be=Hi;w.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(be=i.toneMapping);const ze={shaderID:lt,shaderType:w.type,shaderName:w.name,vertexShader:Qt,fragmentShader:at,defines:w.defines,customVertexShaderID:dt,customFragmentShaderID:Tt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:zt,batchingColor:zt&&U._colorsTexture!==null,instancing:kt,instancingColor:kt&&U.instanceColor!==null,instancingMorph:kt&&U.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:cr,alphaToCoverage:!!w.alphaToCoverage,map:_e,matcap:A,envMap:C,envMapMode:C&&$.mapping,envMapCubeUVHeight:B,aoMap:S,lightMap:Z,bumpMap:G,normalMap:X,displacementMap:h&&j,emissiveMap:rt,normalMapObjectSpace:X&&w.normalMapType===I0,normalMapTangentSpace:X&&w.normalMapType===Pp,metalnessMap:J,roughnessMap:E,anisotropy:y,anisotropyMap:ut,clearcoat:O,clearcoatMap:vt,clearcoatNormalMap:Vt,clearcoatRoughnessMap:ft,dispersion:K,iridescence:tt,iridescenceMap:Mt,iridescenceThicknessMap:Ft,sheen:Q,sheenColorMap:Ht,sheenRoughnessMap:xt,specularMap:Wt,specularColorMap:Xt,specularIntensityMap:he,transmission:mt,transmissionMap:H,thicknessMap:Et,gradientMap:it,opaque:w.transparent===!1&&w.blending===Xs&&w.alphaToCoverage===!1,alphaMap:ct,alphaTest:At,alphaHash:bt,combine:w.combine,mapUv:_e&&_(w.map.channel),aoMapUv:S&&_(w.aoMap.channel),lightMapUv:Z&&_(w.lightMap.channel),bumpMapUv:G&&_(w.bumpMap.channel),normalMapUv:X&&_(w.normalMap.channel),displacementMapUv:j&&_(w.displacementMap.channel),emissiveMapUv:rt&&_(w.emissiveMap.channel),metalnessMapUv:J&&_(w.metalnessMap.channel),roughnessMapUv:E&&_(w.roughnessMap.channel),anisotropyMapUv:ut&&_(w.anisotropyMap.channel),clearcoatMapUv:vt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(w.sheenRoughnessMap.channel),specularMapUv:Wt&&_(w.specularMap.channel),specularColorMapUv:Xt&&_(w.specularColorMap.channel),specularIntensityMapUv:he&&_(w.specularIntensityMap.channel),transmissionMapUv:H&&_(w.transmissionMap.channel),thicknessMapUv:Et&&_(w.thicknessMap.channel),alphaMapUv:ct&&_(w.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(X||y),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!k.attributes.uv&&(_e||ct),fog:!!z,useFog:w.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ot,skinning:U.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:ht,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:be,decodeVideoTexture:_e&&w.map.isVideoTexture===!0&&ie.getTransfer(w.map.colorSpace)===de,decodeVideoTextureEmissive:rt&&w.emissiveMap.isVideoTexture===!0&&ie.getTransfer(w.emissiveMap.colorSpace)===de,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Gn,flipSided:w.side===Ze,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:$t&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&w.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function p(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const N in w.defines)M.push(N),M.push(w.defines[N]);return w.isRawShaderMaterial===!1&&(v(M,w),T(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function v(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function T(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const M=g[w.type];let N;if(M){const V=Hn[M];N=ax.clone(V.uniforms)}else N=w.uniforms;return N}function I(w,M){let N;for(let V=0,U=u.length;V<U;V++){const z=u[V];if(z.cacheKey===M){N=z,++N.usedTimes;break}}return N===void 0&&(N=new yE(i,M,w,r),u.push(N)),N}function L(w){if(--w.usedTimes===0){const M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function P(w){l.remove(w)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:I,releaseProgram:L,releaseShaderCache:P,programs:u,dispose:D}}function wE(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function TE(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ff(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function df(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,h,d,g,_,m){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[t]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),t++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(f,h){e.length>1&&e.sort(f||TE),n.length>1&&n.sort(h||ff),s.length>1&&s.sort(h||ff)}function u(){for(let f=t,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function AE(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new df,i.set(n,[o])):s>=r.length?(o=new df,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function CE(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Y,color:new ee};break;case"SpotLight":e={position:new Y,direction:new Y,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Y,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Y,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return i[t.id]=e,e}}}function RE(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let PE=0;function LE(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function IE(i){const t=new CE,e=RE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Y);const s=new Y,r=new Ee,o=new Ee;function a(c){let u=0,f=0,h=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,v=0,T=0,x=0,I=0,L=0,P=0;c.sort(LE);for(let w=0,M=c.length;w<M;w++){const N=c[w],V=N.color,U=N.intensity,z=N.distance,k=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=V.r*U,f+=V.g*U,h+=V.b*U;else if(N.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(N.sh.coefficients[F],U);P++}else if(N.isDirectionalLight){const F=t.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const $=N.shadow,B=e.get(N);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,n.directionalShadow[d]=B,n.directionalShadowMap[d]=k,n.directionalShadowMatrix[d]=N.shadow.matrix,v++}n.directional[d]=F,d++}else if(N.isSpotLight){const F=t.get(N);F.position.setFromMatrixPosition(N.matrixWorld),F.color.copy(V).multiplyScalar(U),F.distance=z,F.coneCos=Math.cos(N.angle),F.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),F.decay=N.decay,n.spot[_]=F;const $=N.shadow;if(N.map&&(n.spotLightMap[I]=N.map,I++,$.updateMatrices(N),N.castShadow&&L++),n.spotLightMatrix[_]=$.matrix,N.castShadow){const B=e.get(N);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,n.spotShadow[_]=B,n.spotShadowMap[_]=k,x++}_++}else if(N.isRectAreaLight){const F=t.get(N);F.color.copy(V).multiplyScalar(U),F.halfWidth.set(N.width*.5,0,0),F.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=F,m++}else if(N.isPointLight){const F=t.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity),F.distance=N.distance,F.decay=N.decay,N.castShadow){const $=N.shadow,B=e.get(N);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,B.shadowCameraNear=$.camera.near,B.shadowCameraFar=$.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=N.shadow.matrix,T++}n.point[g]=F,g++}else if(N.isHemisphereLight){const F=t.get(N);F.skyColor.copy(N.color).multiplyScalar(U),F.groundColor.copy(N.groundColor).multiplyScalar(U),n.hemi[p]=F,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const D=n.hash;(D.directionalLength!==d||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==v||D.numPointShadows!==T||D.numSpotShadows!==x||D.numSpotMaps!==I||D.numLightProbes!==P)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=x+I-L,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=P,D.directionalLength=d,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=v,D.numPointShadows=T,D.numSpotShadows=x,D.numSpotMaps=I,D.numLightProbes=P,n.version=PE++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const T=c[p];if(T.isDirectionalLight){const x=n.directional[f];x.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(T.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(T.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(T.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(T.width*.5,0,0),x.halfHeight.set(0,T.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),h++}else if(T.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(T.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function pf(i){const t=new IE(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function DE(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new pf(i),t.set(s,[a])):r>=o.length?(a=new pf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class NE extends so{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=P0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class UE extends so{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const FE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OE=`uniform sampler2D shadow_pass;
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
}`;function BE(i,t,e){let n=new mu;const s=new ne,r=new ne,o=new pe,a=new NE({depthPacking:L0}),l=new UE,c={},u=e.maxTextureSize,f={[qi]:Ze,[Ze]:qi,[Gn]:Gn},h=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:FE,fragmentShader:OE}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new wi;g.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Fe(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mp;let p=this.type;this.render=function(L,P,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const w=i.getRenderTarget(),M=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Vi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const U=p!==ui&&this.type===ui,z=p===ui&&this.type!==ui;for(let k=0,F=L.length;k<F;k++){const $=L[k],B=$.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const lt=B.getFrameExtents();if(s.multiply(lt),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/lt.x),s.x=r.x*lt.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/lt.y),s.y=r.y*lt.y,B.mapSize.y=r.y)),B.map===null||U===!0||z===!0){const gt=this.type!==ui?{minFilter:Dn,magFilter:Dn}:{};B.map!==null&&B.map.dispose(),B.map=new gs(s.x,s.y,gt),B.map.texture.name=$.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const st=B.getViewportCount();for(let gt=0;gt<st;gt++){const ht=B.getViewport(gt);o.set(r.x*ht.x,r.y*ht.y,r.x*ht.z,r.y*ht.w),V.viewport(o),B.updateMatrices($,gt),n=B.getFrustum(),x(P,D,B.camera,$,this.type)}B.isPointLightShadow!==!0&&this.type===ui&&v(B,D),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,M,N)};function v(L,P){const D=t.update(_);h.defines.VSM_SAMPLES!==L.blurSamples&&(h.defines.VSM_SAMPLES=L.blurSamples,d.defines.VSM_SAMPLES=L.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new gs(s.x,s.y)),h.uniforms.shadow_pass.value=L.map.texture,h.uniforms.resolution.value=L.mapSize,h.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(P,null,D,h,_,null),d.uniforms.shadow_pass.value=L.mapPass.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(P,null,D,d,_,null)}function T(L,P,D,w){let M=null;const N=D.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(N!==void 0)M=N;else if(M=D.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const V=M.uuid,U=P.uuid;let z=c[V];z===void 0&&(z={},c[V]=z);let k=z[U];k===void 0&&(k=M.clone(),z[U]=k,P.addEventListener("dispose",I)),M=k}if(M.visible=P.visible,M.wireframe=P.wireframe,w===ui?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:f[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=i.properties.get(M);V.light=D}return M}function x(L,P,D,w,M){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&M===ui)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,L.matrixWorld);const U=t.update(L),z=L.material;if(Array.isArray(z)){const k=U.groups;for(let F=0,$=k.length;F<$;F++){const B=k[F],lt=z[B.materialIndex];if(lt&&lt.visible){const st=T(L,lt,w,M);L.onBeforeShadow(i,L,P,D,U,st,B),i.renderBufferDirect(D,null,U,st,L,B),L.onAfterShadow(i,L,P,D,U,st,B)}}}else if(z.visible){const k=T(L,z,w,M);L.onBeforeShadow(i,L,P,D,U,k,null),i.renderBufferDirect(D,null,U,k,L,null),L.onAfterShadow(i,L,P,D,U,k,null)}}const V=L.children;for(let U=0,z=V.length;U<z;U++)x(V[U],P,D,w,M)}function I(L){L.target.removeEventListener("dispose",I);for(const D in c){const w=c[D],M=L.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const zE={[Jl]:Ql,[tc]:ic,[ec]:sc,[Zs]:nc,[Ql]:Jl,[ic]:tc,[sc]:ec,[nc]:Zs};function kE(i,t){function e(){let H=!1;const Et=new pe;let it=null;const ct=new pe(0,0,0,0);return{setMask:function(At){it!==At&&!H&&(i.colorMask(At,At,At,At),it=At)},setLocked:function(At){H=At},setClear:function(At,bt,$t,be,ze){ze===!0&&(At*=be,bt*=be,$t*=be),Et.set(At,bt,$t,be),ct.equals(Et)===!1&&(i.clearColor(At,bt,$t,be),ct.copy(Et))},reset:function(){H=!1,it=null,ct.set(-1,0,0,0)}}}function n(){let H=!1,Et=!1,it=null,ct=null,At=null;return{setReversed:function(bt){if(Et!==bt){const $t=t.get("EXT_clip_control");Et?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);const be=At;At=null,this.setClear(be)}Et=bt},getReversed:function(){return Et},setTest:function(bt){bt?_t(i.DEPTH_TEST):Ot(i.DEPTH_TEST)},setMask:function(bt){it!==bt&&!H&&(i.depthMask(bt),it=bt)},setFunc:function(bt){if(Et&&(bt=zE[bt]),ct!==bt){switch(bt){case Jl:i.depthFunc(i.NEVER);break;case Ql:i.depthFunc(i.ALWAYS);break;case tc:i.depthFunc(i.LESS);break;case Zs:i.depthFunc(i.LEQUAL);break;case ec:i.depthFunc(i.EQUAL);break;case nc:i.depthFunc(i.GEQUAL);break;case ic:i.depthFunc(i.GREATER);break;case sc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=bt}},setLocked:function(bt){H=bt},setClear:function(bt){At!==bt&&(Et&&(bt=1-bt),i.clearDepth(bt),At=bt)},reset:function(){H=!1,it=null,ct=null,At=null,Et=!1}}}function s(){let H=!1,Et=null,it=null,ct=null,At=null,bt=null,$t=null,be=null,ze=null;return{setTest:function(fe){H||(fe?_t(i.STENCIL_TEST):Ot(i.STENCIL_TEST))},setMask:function(fe){Et!==fe&&!H&&(i.stencilMask(fe),Et=fe)},setFunc:function(fe,Sn,Jn){(it!==fe||ct!==Sn||At!==Jn)&&(i.stencilFunc(fe,Sn,Jn),it=fe,ct=Sn,At=Jn)},setOp:function(fe,Sn,Jn){(bt!==fe||$t!==Sn||be!==Jn)&&(i.stencilOp(fe,Sn,Jn),bt=fe,$t=Sn,be=Jn)},setLocked:function(fe){H=fe},setClear:function(fe){ze!==fe&&(i.clearStencil(fe),ze=fe)},reset:function(){H=!1,Et=null,it=null,ct=null,At=null,bt=null,$t=null,be=null,ze=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,v=null,T=null,x=null,I=null,L=null,P=new ee(0,0,0),D=0,w=!1,M=null,N=null,V=null,U=null,z=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,$=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(B)[1]),F=$>=1):B.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),F=$>=2);let lt=null,st={};const gt=i.getParameter(i.SCISSOR_BOX),ht=i.getParameter(i.VIEWPORT),Qt=new pe().fromArray(gt),at=new pe().fromArray(ht);function dt(H,Et,it,ct){const At=new Uint8Array(4),bt=i.createTexture();i.bindTexture(H,bt),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<it;$t++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(Et,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(Et+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return bt}const Tt={};Tt[i.TEXTURE_2D]=dt(i.TEXTURE_2D,i.TEXTURE_2D,1),Tt[i.TEXTURE_CUBE_MAP]=dt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[i.TEXTURE_2D_ARRAY]=dt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Tt[i.TEXTURE_3D]=dt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),_t(i.DEPTH_TEST),o.setFunc(Zs),G(!1),X(_h),_t(i.CULL_FACE),S(Vi);function _t(H){u[H]!==!0&&(i.enable(H),u[H]=!0)}function Ot(H){u[H]!==!1&&(i.disable(H),u[H]=!1)}function kt(H,Et){return f[H]!==Et?(i.bindFramebuffer(H,Et),f[H]=Et,H===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Et),H===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Et),!0):!1}function zt(H,Et){let it=d,ct=!1;if(H){it=h.get(Et),it===void 0&&(it=[],h.set(Et,it));const At=H.textures;if(it.length!==At.length||it[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,$t=At.length;bt<$t;bt++)it[bt]=i.COLOR_ATTACHMENT0+bt;it.length=At.length,ct=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,ct=!0);ct&&i.drawBuffers(it)}function _e(H){return g!==H?(i.useProgram(H),g=H,!0):!1}const A={[as]:i.FUNC_ADD,[s0]:i.FUNC_SUBTRACT,[r0]:i.FUNC_REVERSE_SUBTRACT};A[o0]=i.MIN,A[a0]=i.MAX;const C={[l0]:i.ZERO,[c0]:i.ONE,[u0]:i.SRC_COLOR,[Kl]:i.SRC_ALPHA,[g0]:i.SRC_ALPHA_SATURATE,[p0]:i.DST_COLOR,[f0]:i.DST_ALPHA,[h0]:i.ONE_MINUS_SRC_COLOR,[Zl]:i.ONE_MINUS_SRC_ALPHA,[m0]:i.ONE_MINUS_DST_COLOR,[d0]:i.ONE_MINUS_DST_ALPHA,[_0]:i.CONSTANT_COLOR,[v0]:i.ONE_MINUS_CONSTANT_COLOR,[x0]:i.CONSTANT_ALPHA,[y0]:i.ONE_MINUS_CONSTANT_ALPHA};function S(H,Et,it,ct,At,bt,$t,be,ze,fe){if(H===Vi){_===!0&&(Ot(i.BLEND),_=!1);return}if(_===!1&&(_t(i.BLEND),_=!0),H!==i0){if(H!==m||fe!==w){if((p!==as||x!==as)&&(i.blendEquation(i.FUNC_ADD),p=as,x=as),fe)switch(H){case Xs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vh:i.blendFunc(i.ONE,i.ONE);break;case xh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Xs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case xh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}v=null,T=null,I=null,L=null,P.set(0,0,0),D=0,m=H,w=fe}return}At=At||Et,bt=bt||it,$t=$t||ct,(Et!==p||At!==x)&&(i.blendEquationSeparate(A[Et],A[At]),p=Et,x=At),(it!==v||ct!==T||bt!==I||$t!==L)&&(i.blendFuncSeparate(C[it],C[ct],C[bt],C[$t]),v=it,T=ct,I=bt,L=$t),(be.equals(P)===!1||ze!==D)&&(i.blendColor(be.r,be.g,be.b,ze),P.copy(be),D=ze),m=H,w=!1}function Z(H,Et){H.side===Gn?Ot(i.CULL_FACE):_t(i.CULL_FACE);let it=H.side===Ze;Et&&(it=!it),G(it),H.blending===Xs&&H.transparent===!1?S(Vi):S(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);const ct=H.stencilWrite;a.setTest(ct),ct&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),rt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):Ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function G(H){M!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),M=H)}function X(H){H!==e0?(_t(i.CULL_FACE),H!==N&&(H===_h?i.cullFace(i.BACK):H===n0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ot(i.CULL_FACE),N=H}function j(H){H!==V&&(F&&i.lineWidth(H),V=H)}function rt(H,Et,it){H?(_t(i.POLYGON_OFFSET_FILL),(U!==Et||z!==it)&&(i.polygonOffset(Et,it),U=Et,z=it)):Ot(i.POLYGON_OFFSET_FILL)}function J(H){H?_t(i.SCISSOR_TEST):Ot(i.SCISSOR_TEST)}function E(H){H===void 0&&(H=i.TEXTURE0+k-1),lt!==H&&(i.activeTexture(H),lt=H)}function y(H,Et,it){it===void 0&&(lt===null?it=i.TEXTURE0+k-1:it=lt);let ct=st[it];ct===void 0&&(ct={type:void 0,texture:void 0},st[it]=ct),(ct.type!==H||ct.texture!==Et)&&(lt!==it&&(i.activeTexture(it),lt=it),i.bindTexture(H,Et||Tt[H]),ct.type=H,ct.texture=Et)}function O(){const H=st[lt];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function mt(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function vt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Vt(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ft(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Mt(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ft(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ht(H){Qt.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Qt.copy(H))}function xt(H){at.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),at.copy(H))}function Wt(H,Et){let it=c.get(Et);it===void 0&&(it=new WeakMap,c.set(Et,it));let ct=it.get(H);ct===void 0&&(ct=i.getUniformBlockIndex(Et,H.name),it.set(H,ct))}function Xt(H,Et){const ct=c.get(Et).get(H);l.get(Et)!==ct&&(i.uniformBlockBinding(Et,ct,H.__bindingPointIndex),l.set(Et,ct))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},lt=null,st={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,v=null,T=null,x=null,I=null,L=null,P=new ee(0,0,0),D=0,w=!1,M=null,N=null,V=null,U=null,z=null,Qt.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:_t,disable:Ot,bindFramebuffer:kt,drawBuffers:zt,useProgram:_e,setBlending:S,setMaterial:Z,setFlipSided:G,setCullFace:X,setLineWidth:j,setPolygonOffset:rt,setScissorTest:J,activeTexture:E,bindTexture:y,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:tt,texImage2D:Mt,texImage3D:Ft,updateUBOMapping:Wt,uniformBlockBinding:Xt,texStorage2D:Vt,texStorage3D:ft,texSubImage2D:Q,texSubImage3D:mt,compressedTexSubImage2D:ut,compressedTexSubImage3D:vt,scissor:Ht,viewport:xt,reset:he}}function mf(i,t,e,n){const s=VE(n);switch(e){case Ep:return i*t;case wp:return i*t;case Tp:return i*t*2;case Ap:return i*t/s.components*s.byteLength;case uu:return i*t/s.components*s.byteLength;case Cp:return i*t*2/s.components*s.byteLength;case hu:return i*t*2/s.components*s.byteLength;case bp:return i*t*3/s.components*s.byteLength;case Rn:return i*t*4/s.components*s.byteLength;case fu:return i*t*4/s.components*s.byteLength;case $o:case jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ko:case Zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case uc:case fc:return Math.max(i,16)*Math.max(t,8)/4;case cc:case hc:return Math.max(i,8)*Math.max(t,8)/2;case dc:case pc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case mc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _c:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case vc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case xc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case yc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Sc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ec:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case bc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case wc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Cc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Rc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Jo:case Pc:case Lc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Rp:case Ic:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Dc:case Nc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function VE(i){switch(i){case Ei:case yp:return{byteLength:1,components:1};case Kr:case Sp:case eo:return{byteLength:2,components:1};case lu:case cu:return{byteLength:2,components:4};case ms:case au:case mi:return{byteLength:4,components:1};case Mp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function HE(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,y){return d?new OffscreenCanvas(E,y):la("canvas")}function _(E,y,O){let K=1;const tt=J(E);if((tt.width>O||tt.height>O)&&(K=O/Math.max(tt.width,tt.height)),K<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Q=Math.floor(K*tt.width),mt=Math.floor(K*tt.height);f===void 0&&(f=g(Q,mt));const ut=y?g(Q,mt):f;return ut.width=Q,ut.height=mt,ut.getContext("2d").drawImage(E,0,0,Q,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Q+"x"+mt+")."),ut}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){i.generateMipmap(E)}function v(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(E,y,O,K,tt=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Q=y;if(y===i.RED&&(O===i.FLOAT&&(Q=i.R32F),O===i.HALF_FLOAT&&(Q=i.R16F),O===i.UNSIGNED_BYTE&&(Q=i.R8)),y===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.R8UI),O===i.UNSIGNED_SHORT&&(Q=i.R16UI),O===i.UNSIGNED_INT&&(Q=i.R32UI),O===i.BYTE&&(Q=i.R8I),O===i.SHORT&&(Q=i.R16I),O===i.INT&&(Q=i.R32I)),y===i.RG&&(O===i.FLOAT&&(Q=i.RG32F),O===i.HALF_FLOAT&&(Q=i.RG16F),O===i.UNSIGNED_BYTE&&(Q=i.RG8)),y===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.RG8UI),O===i.UNSIGNED_SHORT&&(Q=i.RG16UI),O===i.UNSIGNED_INT&&(Q=i.RG32UI),O===i.BYTE&&(Q=i.RG8I),O===i.SHORT&&(Q=i.RG16I),O===i.INT&&(Q=i.RG32I)),y===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),O===i.UNSIGNED_INT&&(Q=i.RGB32UI),O===i.BYTE&&(Q=i.RGB8I),O===i.SHORT&&(Q=i.RGB16I),O===i.INT&&(Q=i.RGB32I)),y===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),O===i.UNSIGNED_INT&&(Q=i.RGBA32UI),O===i.BYTE&&(Q=i.RGBA8I),O===i.SHORT&&(Q=i.RGBA16I),O===i.INT&&(Q=i.RGBA32I)),y===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),y===i.RGBA){const mt=tt?Ca:ie.getTransfer(K);O===i.FLOAT&&(Q=i.RGBA32F),O===i.HALF_FLOAT&&(Q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Q=mt===de?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function x(E,y){let O;return E?y===null||y===ms||y===tr?O=i.DEPTH24_STENCIL8:y===mi?O=i.DEPTH32F_STENCIL8:y===Kr&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ms||y===tr?O=i.DEPTH_COMPONENT24:y===mi?O=i.DEPTH_COMPONENT32F:y===Kr&&(O=i.DEPTH_COMPONENT16),O}function I(E,y){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Dn&&E.minFilter!==Wn?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function L(E){const y=E.target;y.removeEventListener("dispose",L),D(y),y.isVideoTexture&&u.delete(y)}function P(E){const y=E.target;y.removeEventListener("dispose",P),M(y)}function D(E){const y=n.get(E);if(y.__webglInit===void 0)return;const O=E.source,K=h.get(O);if(K){const tt=K[y.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&w(E),Object.keys(K).length===0&&h.delete(O)}n.remove(E)}function w(E){const y=n.get(E);i.deleteTexture(y.__webglTexture);const O=E.source,K=h.get(O);delete K[y.__cacheKey],o.memory.textures--}function M(E){const y=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let tt=0;tt<y.__webglFramebuffer[K].length;tt++)i.deleteFramebuffer(y.__webglFramebuffer[K][tt]);else i.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)i.deleteFramebuffer(y.__webglFramebuffer[K]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=E.textures;for(let K=0,tt=O.length;K<tt;K++){const Q=n.get(O[K]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(O[K])}n.remove(E)}let N=0;function V(){N=0}function U(){const E=N;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),N+=1,E}function z(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function k(E,y){const O=n.get(E);if(E.isVideoTexture&&j(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){const K=E.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(O,E,y);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+y)}function F(E,y){const O=n.get(E);if(E.version>0&&O.__version!==E.version){at(O,E,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+y)}function $(E,y){const O=n.get(E);if(E.version>0&&O.__version!==E.version){at(O,E,y);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+y)}function B(E,y){const O=n.get(E);if(E.version>0&&O.__version!==E.version){dt(O,E,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+y)}const lt={[ac]:i.REPEAT,[us]:i.CLAMP_TO_EDGE,[lc]:i.MIRRORED_REPEAT},st={[Dn]:i.NEAREST,[R0]:i.NEAREST_MIPMAP_NEAREST,[po]:i.NEAREST_MIPMAP_LINEAR,[Wn]:i.LINEAR,[$a]:i.LINEAR_MIPMAP_NEAREST,[hs]:i.LINEAR_MIPMAP_LINEAR},gt={[D0]:i.NEVER,[z0]:i.ALWAYS,[N0]:i.LESS,[Lp]:i.LEQUAL,[U0]:i.EQUAL,[B0]:i.GEQUAL,[F0]:i.GREATER,[O0]:i.NOTEQUAL};function ht(E,y){if(y.type===mi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Wn||y.magFilter===$a||y.magFilter===po||y.magFilter===hs||y.minFilter===Wn||y.minFilter===$a||y.minFilter===po||y.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,lt[y.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,lt[y.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,lt[y.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,st[y.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,st[y.minFilter]),y.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,gt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Dn||y.minFilter!==po&&y.minFilter!==hs||y.type===mi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Qt(E,y){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",L));const K=y.source;let tt=h.get(K);tt===void 0&&(tt={},h.set(K,tt));const Q=z(y);if(Q!==E.__cacheKey){tt[Q]===void 0&&(tt[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),tt[Q].usedTimes++;const mt=tt[E.__cacheKey];mt!==void 0&&(tt[E.__cacheKey].usedTimes--,mt.usedTimes===0&&w(y)),E.__cacheKey=Q,E.__webglTexture=tt[Q].texture}return O}function at(E,y,O){let K=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=i.TEXTURE_3D);const tt=Qt(E,y),Q=y.source;e.bindTexture(K,E.__webglTexture,i.TEXTURE0+O);const mt=n.get(Q);if(Q.version!==mt.__version||tt===!0){e.activeTexture(i.TEXTURE0+O);const ut=ie.getPrimaries(ie.workingColorSpace),vt=y.colorSpace===Bi?null:ie.getPrimaries(y.colorSpace),Vt=y.colorSpace===Bi||ut===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let ft=_(y.image,!1,s.maxTextureSize);ft=rt(y,ft);const Mt=r.convert(y.format,y.colorSpace),Ft=r.convert(y.type);let Ht=T(y.internalFormat,Mt,Ft,y.colorSpace,y.isVideoTexture);ht(K,y);let xt;const Wt=y.mipmaps,Xt=y.isVideoTexture!==!0,he=mt.__version===void 0||tt===!0,H=Q.dataReady,Et=I(y,ft);if(y.isDepthTexture)Ht=x(y.format===er,y.type),he&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,Ht,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,Ht,ft.width,ft.height,0,Mt,Ft,null));else if(y.isDataTexture)if(Wt.length>0){Xt&&he&&e.texStorage2D(i.TEXTURE_2D,Et,Ht,Wt[0].width,Wt[0].height);for(let it=0,ct=Wt.length;it<ct;it++)xt=Wt[it],Xt?H&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,xt.width,xt.height,Mt,Ft,xt.data):e.texImage2D(i.TEXTURE_2D,it,Ht,xt.width,xt.height,0,Mt,Ft,xt.data);y.generateMipmaps=!1}else Xt?(he&&e.texStorage2D(i.TEXTURE_2D,Et,Ht,ft.width,ft.height),H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft.width,ft.height,Mt,Ft,ft.data)):e.texImage2D(i.TEXTURE_2D,0,Ht,ft.width,ft.height,0,Mt,Ft,ft.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Xt&&he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Ht,Wt[0].width,Wt[0].height,ft.depth);for(let it=0,ct=Wt.length;it<ct;it++)if(xt=Wt[it],y.format!==Rn)if(Mt!==null)if(Xt){if(H)if(y.layerUpdates.size>0){const At=mf(xt.width,xt.height,y.format,y.type);for(const bt of y.layerUpdates){const $t=xt.data.subarray(bt*At/xt.data.BYTES_PER_ELEMENT,(bt+1)*At/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,bt,xt.width,xt.height,1,Mt,$t)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,xt.width,xt.height,ft.depth,Mt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,Ht,xt.width,xt.height,ft.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?H&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,xt.width,xt.height,ft.depth,Mt,Ft,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,Ht,xt.width,xt.height,ft.depth,0,Mt,Ft,xt.data)}else{Xt&&he&&e.texStorage2D(i.TEXTURE_2D,Et,Ht,Wt[0].width,Wt[0].height);for(let it=0,ct=Wt.length;it<ct;it++)xt=Wt[it],y.format!==Rn?Mt!==null?Xt?H&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,xt.width,xt.height,Mt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,it,Ht,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?H&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,xt.width,xt.height,Mt,Ft,xt.data):e.texImage2D(i.TEXTURE_2D,it,Ht,xt.width,xt.height,0,Mt,Ft,xt.data)}else if(y.isDataArrayTexture)if(Xt){if(he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Ht,ft.width,ft.height,ft.depth),H)if(y.layerUpdates.size>0){const it=mf(ft.width,ft.height,y.format,y.type);for(const ct of y.layerUpdates){const At=ft.data.subarray(ct*it/ft.data.BYTES_PER_ELEMENT,(ct+1)*it/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ct,ft.width,ft.height,1,Mt,Ft,At)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Mt,Ft,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ht,ft.width,ft.height,ft.depth,0,Mt,Ft,ft.data);else if(y.isData3DTexture)Xt?(he&&e.texStorage3D(i.TEXTURE_3D,Et,Ht,ft.width,ft.height,ft.depth),H&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Mt,Ft,ft.data)):e.texImage3D(i.TEXTURE_3D,0,Ht,ft.width,ft.height,ft.depth,0,Mt,Ft,ft.data);else if(y.isFramebufferTexture){if(he)if(Xt)e.texStorage2D(i.TEXTURE_2D,Et,Ht,ft.width,ft.height);else{let it=ft.width,ct=ft.height;for(let At=0;At<Et;At++)e.texImage2D(i.TEXTURE_2D,At,Ht,it,ct,0,Mt,Ft,null),it>>=1,ct>>=1}}else if(Wt.length>0){if(Xt&&he){const it=J(Wt[0]);e.texStorage2D(i.TEXTURE_2D,Et,Ht,it.width,it.height)}for(let it=0,ct=Wt.length;it<ct;it++)xt=Wt[it],Xt?H&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Mt,Ft,xt):e.texImage2D(i.TEXTURE_2D,it,Ht,Mt,Ft,xt);y.generateMipmaps=!1}else if(Xt){if(he){const it=J(ft);e.texStorage2D(i.TEXTURE_2D,Et,Ht,it.width,it.height)}H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Ft,ft)}else e.texImage2D(i.TEXTURE_2D,0,Ht,Mt,Ft,ft);m(y)&&p(K),mt.__version=Q.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function dt(E,y,O){if(y.image.length!==6)return;const K=Qt(E,y),tt=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);const Q=n.get(tt);if(tt.version!==Q.__version||K===!0){e.activeTexture(i.TEXTURE0+O);const mt=ie.getPrimaries(ie.workingColorSpace),ut=y.colorSpace===Bi?null:ie.getPrimaries(y.colorSpace),vt=y.colorSpace===Bi||mt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Vt=y.isCompressedTexture||y.image[0].isCompressedTexture,ft=y.image[0]&&y.image[0].isDataTexture,Mt=[];for(let ct=0;ct<6;ct++)!Vt&&!ft?Mt[ct]=_(y.image[ct],!0,s.maxCubemapSize):Mt[ct]=ft?y.image[ct].image:y.image[ct],Mt[ct]=rt(y,Mt[ct]);const Ft=Mt[0],Ht=r.convert(y.format,y.colorSpace),xt=r.convert(y.type),Wt=T(y.internalFormat,Ht,xt,y.colorSpace),Xt=y.isVideoTexture!==!0,he=Q.__version===void 0||K===!0,H=tt.dataReady;let Et=I(y,Ft);ht(i.TEXTURE_CUBE_MAP,y);let it;if(Vt){Xt&&he&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,Wt,Ft.width,Ft.height);for(let ct=0;ct<6;ct++){it=Mt[ct].mipmaps;for(let At=0;At<it.length;At++){const bt=it[At];y.format!==Rn?Ht!==null?Xt?H&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,At,0,0,bt.width,bt.height,Ht,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,At,Wt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,At,0,0,bt.width,bt.height,Ht,xt,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,At,Wt,bt.width,bt.height,0,Ht,xt,bt.data)}}}else{if(it=y.mipmaps,Xt&&he){it.length>0&&Et++;const ct=J(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,Wt,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(ft){Xt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Mt[ct].width,Mt[ct].height,Ht,xt,Mt[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Wt,Mt[ct].width,Mt[ct].height,0,Ht,xt,Mt[ct].data);for(let At=0;At<it.length;At++){const $t=it[At].image[ct].image;Xt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,At+1,0,0,$t.width,$t.height,Ht,xt,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,At+1,Wt,$t.width,$t.height,0,Ht,xt,$t.data)}}else{Xt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Ht,xt,Mt[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Wt,Ht,xt,Mt[ct]);for(let At=0;At<it.length;At++){const bt=it[At];Xt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,At+1,0,0,Ht,xt,bt.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,At+1,Wt,Ht,xt,bt.image[ct])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),Q.__version=tt.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Tt(E,y,O,K,tt,Q){const mt=r.convert(O.format,O.colorSpace),ut=r.convert(O.type),vt=T(O.internalFormat,mt,ut,O.colorSpace),Vt=n.get(y),ft=n.get(O);if(ft.__renderTarget=y,!Vt.__hasExternalTextures){const Mt=Math.max(1,y.width>>Q),Ft=Math.max(1,y.height>>Q);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,Q,vt,Mt,Ft,y.depth,0,mt,ut,null):e.texImage2D(tt,Q,vt,Mt,Ft,0,mt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),X(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,tt,ft.__webglTexture,0,G(y)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,tt,ft.__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(E,y,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),y.depthBuffer){const K=y.depthTexture,tt=K&&K.isDepthTexture?K.type:null,Q=x(y.stencilBuffer,tt),mt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=G(y);X(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,Q,y.width,y.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,Q,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Q,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,E)}else{const K=y.textures;for(let tt=0;tt<K.length;tt++){const Q=K[tt],mt=r.convert(Q.format,Q.colorSpace),ut=r.convert(Q.type),vt=T(Q.internalFormat,mt,ut,Q.colorSpace),Vt=G(y);O&&X(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,vt,y.width,y.height):X(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt,vt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,vt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ot(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(y.depthTexture);K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),k(y.depthTexture,0);const tt=K.__webglTexture,Q=G(y);if(y.depthTexture.format===Ys)X(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(y.depthTexture.format===er)X(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function kt(E){const y=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){const K=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const tt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",tt)};K.addEventListener("dispose",tt),y.__depthDisposeCallback=tt}y.__boundDepthTexture=K}if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ot(y.__webglFramebuffer,E)}else if(O){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=i.createRenderbuffer(),_t(y.__webglDepthbuffer[K],E,!1);else{const tt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),_t(y.__webglDepthbuffer,E,!1);else{const K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(E,y,O){const K=n.get(E);y!==void 0&&Tt(K.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&kt(E)}function _e(E){const y=E.texture,O=n.get(E),K=n.get(y);E.addEventListener("dispose",P);const tt=E.textures,Q=E.isWebGLCubeRenderTarget===!0,mt=tt.length>1;if(mt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=y.version,o.memory.textures++),Q){O.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[ut]=[];for(let vt=0;vt<y.mipmaps.length;vt++)O.__webglFramebuffer[ut][vt]=i.createFramebuffer()}else O.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let ut=0;ut<y.mipmaps.length;ut++)O.__webglFramebuffer[ut]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(mt)for(let ut=0,vt=tt.length;ut<vt;ut++){const Vt=n.get(tt[ut]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&X(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ut=0;ut<tt.length;ut++){const vt=tt[ut];O.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ut]);const Vt=r.convert(vt.format,vt.colorSpace),ft=r.convert(vt.type),Mt=T(vt.internalFormat,Vt,ft,vt.colorSpace,E.isXRRenderTarget===!0),Ft=G(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,Mt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,O.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),_t(O.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ht(i.TEXTURE_CUBE_MAP,y);for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0)for(let vt=0;vt<y.mipmaps.length;vt++)Tt(O.__webglFramebuffer[ut][vt],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,vt);else Tt(O.__webglFramebuffer[ut],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let ut=0,vt=tt.length;ut<vt;ut++){const Vt=tt[ut],ft=n.get(Vt);e.bindTexture(i.TEXTURE_2D,ft.__webglTexture),ht(i.TEXTURE_2D,Vt),Tt(O.__webglFramebuffer,E,Vt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),m(Vt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ut=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,K.__webglTexture),ht(ut,y),y.mipmaps&&y.mipmaps.length>0)for(let vt=0;vt<y.mipmaps.length;vt++)Tt(O.__webglFramebuffer[vt],E,y,i.COLOR_ATTACHMENT0,ut,vt);else Tt(O.__webglFramebuffer,E,y,i.COLOR_ATTACHMENT0,ut,0);m(y)&&p(ut),e.unbindTexture()}E.depthBuffer&&kt(E)}function A(E){const y=E.textures;for(let O=0,K=y.length;O<K;O++){const tt=y[O];if(m(tt)){const Q=v(E),mt=n.get(tt).__webglTexture;e.bindTexture(Q,mt),p(Q),e.unbindTexture()}}}const C=[],S=[];function Z(E){if(E.samples>0){if(X(E)===!1){const y=E.textures,O=E.width,K=E.height;let tt=i.COLOR_BUFFER_BIT;const Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(E),ut=y.length>1;if(ut)for(let vt=0;vt<y.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let vt=0;vt<y.length;vt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[vt]);const Vt=n.get(y[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Vt,0)}i.blitFramebuffer(0,0,O,K,0,0,O,K,tt,i.NEAREST),l===!0&&(C.length=0,S.length=0,C.push(i.COLOR_ATTACHMENT0+vt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(C.push(Q),S.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,S)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,C))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let vt=0;vt<y.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[vt]);const Vt=n.get(y[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function G(E){return Math.min(s.maxSamples,E.samples)}function X(E){const y=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function j(E){const y=o.render.frame;u.get(E)!==y&&(u.set(E,y),E.update())}function rt(E,y){const O=E.colorSpace,K=E.format,tt=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==cr&&O!==Bi&&(ie.getTransfer(O)===de?(K!==Rn||tt!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function J(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=V,this.setTexture2D=k,this.setTexture2DArray=F,this.setTexture3D=$,this.setTextureCube=B,this.rebindTextures=zt,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=X}function GE(i,t){function e(n,s=Bi){let r;const o=ie.getTransfer(s);if(n===Ei)return i.UNSIGNED_BYTE;if(n===lu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Mp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yp)return i.BYTE;if(n===Sp)return i.SHORT;if(n===Kr)return i.UNSIGNED_SHORT;if(n===au)return i.INT;if(n===ms)return i.UNSIGNED_INT;if(n===mi)return i.FLOAT;if(n===eo)return i.HALF_FLOAT;if(n===Ep)return i.ALPHA;if(n===bp)return i.RGB;if(n===Rn)return i.RGBA;if(n===wp)return i.LUMINANCE;if(n===Tp)return i.LUMINANCE_ALPHA;if(n===Ys)return i.DEPTH_COMPONENT;if(n===er)return i.DEPTH_STENCIL;if(n===Ap)return i.RED;if(n===uu)return i.RED_INTEGER;if(n===Cp)return i.RG;if(n===hu)return i.RG_INTEGER;if(n===fu)return i.RGBA_INTEGER;if(n===$o||n===jo||n===Ko||n===Zo)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ko)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cc||n===uc||n===hc||n===fc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===cc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===uc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dc||n===pc||n===mc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===dc||n===pc)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===mc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===gc||n===_c||n===vc||n===xc||n===yc||n===Sc||n===Mc||n===Ec||n===bc||n===wc||n===Tc||n===Ac||n===Cc||n===Rc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===gc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_c)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ec)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ac)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jo||n===Pc||n===Lc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Jo)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rp||n===Ic||n===Dc||n===Nc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Dc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class WE extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Dr extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qE={type:"move"};class El{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qE)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Dr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const XE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YE=`
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

}`;class $E{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Je,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Xi({vertexShader:XE,fragmentShader:YE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Fe(new Ra(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jE extends ur{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new $E,m=e.getContextAttributes();let p=null,v=null;const T=[],x=[],I=new ne;let L=null;const P=new cn;P.viewport=new pe;const D=new cn;D.viewport=new pe;const w=[P,D],M=new WE;let N=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let dt=T[at];return dt===void 0&&(dt=new El,T[at]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(at){let dt=T[at];return dt===void 0&&(dt=new El,T[at]=dt),dt.getGripSpace()},this.getHand=function(at){let dt=T[at];return dt===void 0&&(dt=new El,T[at]=dt),dt.getHandSpace()};function U(at){const dt=x.indexOf(at.inputSource);if(dt===-1)return;const Tt=T[dt];Tt!==void 0&&(Tt.update(at.inputSource,at.frame,c||o),Tt.dispatchEvent({type:at.type,data:at.inputSource}))}function z(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",k);for(let at=0;at<T.length;at++){const dt=x[at];dt!==null&&(x[at]=null,T[at].disconnect(dt))}N=null,V=null,_.reset(),t.setRenderTarget(p),d=null,h=null,f=null,s=null,v=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){r=at,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){a=at,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(at){c=at},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(at){if(s=at,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",z),s.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){const dt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,dt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new gs(d.framebufferWidth,d.framebufferHeight,{format:Rn,type:Ei,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let dt=null,Tt=null,_t=null;m.depth&&(_t=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=m.stencil?er:Ys,Tt=m.stencil?tr:ms);const Ot={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};f=new XRWebGLBinding(s,e),h=f.createProjectionLayer(Ot),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new gs(h.textureWidth,h.textureHeight,{format:Rn,type:Ei,depthTexture:new qp(h.textureWidth,h.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Qt.setContext(s),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(at){for(let dt=0;dt<at.removed.length;dt++){const Tt=at.removed[dt],_t=x.indexOf(Tt);_t>=0&&(x[_t]=null,T[_t].disconnect(Tt))}for(let dt=0;dt<at.added.length;dt++){const Tt=at.added[dt];let _t=x.indexOf(Tt);if(_t===-1){for(let kt=0;kt<T.length;kt++)if(kt>=x.length){x.push(Tt),_t=kt;break}else if(x[kt]===null){x[kt]=Tt,_t=kt;break}if(_t===-1)break}const Ot=T[_t];Ot&&Ot.connect(Tt)}}const F=new Y,$=new Y;function B(at,dt,Tt){F.setFromMatrixPosition(dt.matrixWorld),$.setFromMatrixPosition(Tt.matrixWorld);const _t=F.distanceTo($),Ot=dt.projectionMatrix.elements,kt=Tt.projectionMatrix.elements,zt=Ot[14]/(Ot[10]-1),_e=Ot[14]/(Ot[10]+1),A=(Ot[9]+1)/Ot[5],C=(Ot[9]-1)/Ot[5],S=(Ot[8]-1)/Ot[0],Z=(kt[8]+1)/kt[0],G=zt*S,X=zt*Z,j=_t/(-S+Z),rt=j*-S;if(dt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(rt),at.translateZ(j),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Ot[10]===-1)at.projectionMatrix.copy(dt.projectionMatrix),at.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const J=zt+j,E=_e+j,y=G-rt,O=X+(_t-rt),K=A*_e/E*J,tt=C*_e/E*J;at.projectionMatrix.makePerspective(y,O,K,tt,J,E),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function lt(at,dt){dt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(dt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(s===null)return;let dt=at.near,Tt=at.far;_.texture!==null&&(_.depthNear>0&&(dt=_.depthNear),_.depthFar>0&&(Tt=_.depthFar)),M.near=D.near=P.near=dt,M.far=D.far=P.far=Tt,(N!==M.near||V!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),N=M.near,V=M.far),P.layers.mask=at.layers.mask|2,D.layers.mask=at.layers.mask|4,M.layers.mask=P.layers.mask|D.layers.mask;const _t=at.parent,Ot=M.cameras;lt(M,_t);for(let kt=0;kt<Ot.length;kt++)lt(Ot[kt],_t);Ot.length===2?B(M,P,D):M.projectionMatrix.copy(P.projectionMatrix),st(at,M,_t)};function st(at,dt,Tt){Tt===null?at.matrix.copy(dt.matrixWorld):(at.matrix.copy(Tt.matrixWorld),at.matrix.invert(),at.matrix.multiply(dt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(dt.projectionMatrix),at.projectionMatrixInverse.copy(dt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=Uc*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(at){l=at,h!==null&&(h.fixedFoveation=at),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=at)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let gt=null;function ht(at,dt){if(u=dt.getViewerPose(c||o),g=dt,u!==null){const Tt=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let _t=!1;Tt.length!==M.cameras.length&&(M.cameras.length=0,_t=!0);for(let kt=0;kt<Tt.length;kt++){const zt=Tt[kt];let _e=null;if(d!==null)_e=d.getViewport(zt);else{const C=f.getViewSubImage(h,zt);_e=C.viewport,kt===0&&(t.setRenderTargetTextures(v,C.colorTexture,h.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(v))}let A=w[kt];A===void 0&&(A=new cn,A.layers.enable(kt),A.viewport=new pe,w[kt]=A),A.matrix.fromArray(zt.transform.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale),A.projectionMatrix.fromArray(zt.projectionMatrix),A.projectionMatrixInverse.copy(A.projectionMatrix).invert(),A.viewport.set(_e.x,_e.y,_e.width,_e.height),kt===0&&(M.matrix.copy(A.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),_t===!0&&M.cameras.push(A)}const Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")){const kt=f.getDepthInformation(Tt[0]);kt&&kt.isValid&&kt.texture&&_.init(t,kt,s.renderState)}}for(let Tt=0;Tt<T.length;Tt++){const _t=x[Tt],Ot=T[Tt];_t!==null&&Ot!==void 0&&Ot.update(_t,dt,c||o)}gt&&gt(at,dt),dt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:dt}),g=null}const Qt=new Gp;Qt.setAnimationLoop(ht),this.setAnimationLoop=function(at){gt=at},this.dispose=function(){}}}const ns=new qe,KE=new Ee;function ZE(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,kp(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,T,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),T=v.envMap,x=v.envMapRotation;T&&(m.envMap.value=T,ns.copy(x),ns.x*=-1,ns.y*=-1,ns.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),m.envMapRotation.value.setFromMatrix4(KE.makeRotationFromEuler(ns)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=T*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ze&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function JE(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,T){const x=T.program;n.uniformBlockBinding(v,x)}function c(v,T){let x=s[v.id];x===void 0&&(g(v),x=u(v),s[v.id]=x,v.addEventListener("dispose",m));const I=T.program;n.updateUBOMapping(v,I);const L=t.render.frame;r[v.id]!==L&&(h(v),r[v.id]=L)}function u(v){const T=f();v.__bindingPointIndex=T;const x=i.createBuffer(),I=v.__size,L=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,I,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,x),x}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const T=s[v.id],x=v.uniforms,I=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let L=0,P=x.length;L<P;L++){const D=Array.isArray(x[L])?x[L]:[x[L]];for(let w=0,M=D.length;w<M;w++){const N=D[w];if(d(N,L,w,I)===!0){const V=N.__offset,U=Array.isArray(N.value)?N.value:[N.value];let z=0;for(let k=0;k<U.length;k++){const F=U[k],$=_(F);typeof F=="number"||typeof F=="boolean"?(N.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,V+z,N.__data)):F.isMatrix3?(N.__data[0]=F.elements[0],N.__data[1]=F.elements[1],N.__data[2]=F.elements[2],N.__data[3]=0,N.__data[4]=F.elements[3],N.__data[5]=F.elements[4],N.__data[6]=F.elements[5],N.__data[7]=0,N.__data[8]=F.elements[6],N.__data[9]=F.elements[7],N.__data[10]=F.elements[8],N.__data[11]=0):(F.toArray(N.__data,z),z+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,T,x,I){const L=v.value,P=T+"_"+x;if(I[P]===void 0)return typeof L=="number"||typeof L=="boolean"?I[P]=L:I[P]=L.clone(),!0;{const D=I[P];if(typeof L=="number"||typeof L=="boolean"){if(D!==L)return I[P]=L,!0}else if(D.equals(L)===!1)return D.copy(L),!0}return!1}function g(v){const T=v.uniforms;let x=0;const I=16;for(let P=0,D=T.length;P<D;P++){const w=Array.isArray(T[P])?T[P]:[T[P]];for(let M=0,N=w.length;M<N;M++){const V=w[M],U=Array.isArray(V.value)?V.value:[V.value];for(let z=0,k=U.length;z<k;z++){const F=U[z],$=_(F),B=x%I,lt=B%$.boundary,st=B+lt;x+=lt,st!==0&&I-st<$.storage&&(x+=I-st),V.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=$.storage}}}const L=x%I;return L>0&&(x+=I-L),v.__size=x,v.__cache={},this}function _(v){const T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),T}function m(v){const T=v.target;T.removeEventListener("dispose",m);const x=o.indexOf(T.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class QE{constructor(t={}){const{canvas:e=V0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const v=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gn,this.toneMapping=Hi,this.toneMappingExposure=1;const x=this;let I=!1,L=0,P=0,D=null,w=-1,M=null;const N=new pe,V=new pe;let U=null;const z=new ee(0);let k=0,F=e.width,$=e.height,B=1,lt=null,st=null;const gt=new pe(0,0,F,$),ht=new pe(0,0,F,$);let Qt=!1;const at=new mu;let dt=!1,Tt=!1;const _t=new Ee,Ot=new Ee,kt=new Y,zt=new pe,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let A=!1;function C(){return D===null?B:1}let S=n;function Z(R,W){return e.getContext(R,W)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ou}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",bt,!1),S===null){const W="webgl2";if(S=Z(W,R),S===null)throw Z(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let G,X,j,rt,J,E,y,O,K,tt,Q,mt,ut,vt,Vt,ft,Mt,Ft,Ht,xt,Wt,Xt,he,H;function Et(){G=new sM(S),G.init(),Xt=new GE(S,G),X=new JS(S,G,t,Xt),j=new kE(S,G),X.reverseDepthBuffer&&h&&j.buffers.depth.setReversed(!0),rt=new aM(S),J=new wE,E=new HE(S,G,j,J,X,Xt,rt),y=new tM(x),O=new iM(x),K=new px(S),he=new KS(S,K),tt=new rM(S,K,rt,he),Q=new cM(S,tt,K,rt),Ht=new lM(S,X,E),ft=new QS(J),mt=new bE(x,y,O,G,X,he,ft),ut=new ZE(x,J),vt=new AE,Vt=new DE(G),Ft=new jS(x,y,O,j,Q,d,l),Mt=new BE(x,Q,X),H=new JE(S,rt,X,j),xt=new ZS(S,G,rt),Wt=new oM(S,G,rt),rt.programs=mt.programs,x.capabilities=X,x.extensions=G,x.properties=J,x.renderLists=vt,x.shadowMap=Mt,x.state=j,x.info=rt}Et();const it=new jE(x,S);this.xr=it,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const R=G.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=G.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(R){R!==void 0&&(B=R,this.setSize(F,$,!1))},this.getSize=function(R){return R.set(F,$)},this.setSize=function(R,W,et=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,$=W,e.width=Math.floor(R*B),e.height=Math.floor(W*B),et===!0&&(e.style.width=R+"px",e.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(F*B,$*B).floor()},this.setDrawingBufferSize=function(R,W,et){F=R,$=W,B=et,e.width=Math.floor(R*et),e.height=Math.floor(W*et),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(N)},this.getViewport=function(R){return R.copy(gt)},this.setViewport=function(R,W,et,nt){R.isVector4?gt.set(R.x,R.y,R.z,R.w):gt.set(R,W,et,nt),j.viewport(N.copy(gt).multiplyScalar(B).round())},this.getScissor=function(R){return R.copy(ht)},this.setScissor=function(R,W,et,nt){R.isVector4?ht.set(R.x,R.y,R.z,R.w):ht.set(R,W,et,nt),j.scissor(V.copy(ht).multiplyScalar(B).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(R){j.setScissorTest(Qt=R)},this.setOpaqueSort=function(R){lt=R},this.setTransparentSort=function(R){st=R},this.getClearColor=function(R){return R.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(R=!0,W=!0,et=!0){let nt=0;if(R){let q=!1;if(D!==null){const pt=D.texture.format;q=pt===fu||pt===hu||pt===uu}if(q){const pt=D.texture.type,wt=pt===Ei||pt===ms||pt===Kr||pt===tr||pt===lu||pt===cu,Lt=Ft.getClearColor(),It=Ft.getClearAlpha(),qt=Lt.r,jt=Lt.g,Dt=Lt.b;wt?(g[0]=qt,g[1]=jt,g[2]=Dt,g[3]=It,S.clearBufferuiv(S.COLOR,0,g)):(_[0]=qt,_[1]=jt,_[2]=Dt,_[3]=It,S.clearBufferiv(S.COLOR,0,_))}else nt|=S.COLOR_BUFFER_BIT}W&&(nt|=S.DEPTH_BUFFER_BIT),et&&(nt|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),vt.dispose(),Vt.dispose(),J.dispose(),y.dispose(),O.dispose(),Q.dispose(),he.dispose(),H.dispose(),mt.dispose(),it.dispose(),it.removeEventListener("sessionstart",Eu),it.removeEventListener("sessionend",bu),$i.stop()};function ct(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const R=rt.autoReset,W=Mt.enabled,et=Mt.autoUpdate,nt=Mt.needsUpdate,q=Mt.type;Et(),rt.autoReset=R,Mt.enabled=W,Mt.autoUpdate=et,Mt.needsUpdate=nt,Mt.type=q}function bt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function $t(R){const W=R.target;W.removeEventListener("dispose",$t),be(W)}function be(R){ze(R),J.remove(R)}function ze(R){const W=J.get(R).programs;W!==void 0&&(W.forEach(function(et){mt.releaseProgram(et)}),R.isShaderMaterial&&mt.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,et,nt,q,pt){W===null&&(W=_e);const wt=q.isMesh&&q.matrixWorld.determinant()<0,Lt=am(R,W,et,nt,q);j.setMaterial(nt,wt);let It=et.index,qt=1;if(nt.wireframe===!0){if(It=tt.getWireframeAttribute(et),It===void 0)return;qt=2}const jt=et.drawRange,Dt=et.attributes.position;let se=jt.start*qt,ve=(jt.start+jt.count)*qt;pt!==null&&(se=Math.max(se,pt.start*qt),ve=Math.min(ve,(pt.start+pt.count)*qt)),It!==null?(se=Math.max(se,0),ve=Math.min(ve,It.count)):Dt!=null&&(se=Math.max(se,0),ve=Math.min(ve,Dt.count));const ye=ve-se;if(ye<0||ye===1/0)return;he.setup(q,nt,Lt,et,It);let Qe,le=xt;if(It!==null&&(Qe=K.get(It),le=Wt,le.setIndex(Qe)),q.isMesh)nt.wireframe===!0?(j.setLineWidth(nt.wireframeLinewidth*C()),le.setMode(S.LINES)):le.setMode(S.TRIANGLES);else if(q.isLine){let Nt=nt.linewidth;Nt===void 0&&(Nt=1),j.setLineWidth(Nt*C()),q.isLineSegments?le.setMode(S.LINES):q.isLineLoop?le.setMode(S.LINE_LOOP):le.setMode(S.LINE_STRIP)}else q.isPoints?le.setMode(S.POINTS):q.isSprite&&le.setMode(S.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)le.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(G.get("WEBGL_multi_draw"))le.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Nt=q._multiDrawStarts,Qn=q._multiDrawCounts,ce=q._multiDrawCount,Mn=It?K.get(It).bytesPerElement:1,xs=J.get(nt).currentProgram.getUniforms();for(let rn=0;rn<ce;rn++)xs.setValue(S,"_gl_DrawID",rn),le.render(Nt[rn]/Mn,Qn[rn])}else if(q.isInstancedMesh)le.renderInstances(se,ye,q.count);else if(et.isInstancedBufferGeometry){const Nt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Qn=Math.min(et.instanceCount,Nt);le.renderInstances(se,ye,Qn)}else le.render(se,ye)};function fe(R,W,et){R.transparent===!0&&R.side===Gn&&R.forceSinglePass===!1?(R.side=Ze,R.needsUpdate=!0,ao(R,W,et),R.side=qi,R.needsUpdate=!0,ao(R,W,et),R.side=Gn):ao(R,W,et)}this.compile=function(R,W,et=null){et===null&&(et=R),p=Vt.get(et),p.init(W),T.push(p),et.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),R!==et&&R.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();const nt=new Set;return R.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const pt=q.material;if(pt)if(Array.isArray(pt))for(let wt=0;wt<pt.length;wt++){const Lt=pt[wt];fe(Lt,et,q),nt.add(Lt)}else fe(pt,et,q),nt.add(pt)}),T.pop(),p=null,nt},this.compileAsync=function(R,W,et=null){const nt=this.compile(R,W,et);return new Promise(q=>{function pt(){if(nt.forEach(function(wt){J.get(wt).currentProgram.isReady()&&nt.delete(wt)}),nt.size===0){q(R);return}setTimeout(pt,10)}G.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Sn=null;function Jn(R){Sn&&Sn(R)}function Eu(){$i.stop()}function bu(){$i.start()}const $i=new Gp;$i.setAnimationLoop(Jn),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(R){Sn=R,it.setAnimationLoop(R),R===null?$i.stop():$i.start()},it.addEventListener("sessionstart",Eu),it.addEventListener("sessionend",bu),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(W),W=it.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,W,D),p=Vt.get(R,T.length),p.init(W),T.push(p),Ot.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),at.setFromProjectionMatrix(Ot),Tt=this.localClippingEnabled,dt=ft.init(this.clippingPlanes,Tt),m=vt.get(R,v.length),m.init(),v.push(m),it.enabled===!0&&it.isPresenting===!0){const pt=x.xr.getDepthSensingMesh();pt!==null&&Ia(pt,W,-1/0,x.sortObjects)}Ia(R,W,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(lt,st),A=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,A&&Ft.addToRenderList(m,R),this.info.render.frame++,dt===!0&&ft.beginShadows();const et=p.state.shadowsArray;Mt.render(et,R,W),dt===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const nt=m.opaque,q=m.transmissive;if(p.setupLights(),W.isArrayCamera){const pt=W.cameras;if(q.length>0)for(let wt=0,Lt=pt.length;wt<Lt;wt++){const It=pt[wt];Tu(nt,q,R,It)}A&&Ft.render(R);for(let wt=0,Lt=pt.length;wt<Lt;wt++){const It=pt[wt];wu(m,R,It,It.viewport)}}else q.length>0&&Tu(nt,q,R,W),A&&Ft.render(R),wu(m,R,W);D!==null&&(E.updateMultisampleRenderTarget(D),E.updateRenderTargetMipmap(D)),R.isScene===!0&&R.onAfterRender(x,R,W),he.resetDefaultState(),w=-1,M=null,T.pop(),T.length>0?(p=T[T.length-1],dt===!0&&ft.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Ia(R,W,et,nt){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)et=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||at.intersectsSprite(R)){nt&&zt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ot);const wt=Q.update(R),Lt=R.material;Lt.visible&&m.push(R,wt,Lt,et,zt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||at.intersectsObject(R))){const wt=Q.update(R),Lt=R.material;if(nt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),zt.copy(R.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),zt.copy(wt.boundingSphere.center)),zt.applyMatrix4(R.matrixWorld).applyMatrix4(Ot)),Array.isArray(Lt)){const It=wt.groups;for(let qt=0,jt=It.length;qt<jt;qt++){const Dt=It[qt],se=Lt[Dt.materialIndex];se&&se.visible&&m.push(R,wt,se,et,zt.z,Dt)}}else Lt.visible&&m.push(R,wt,Lt,et,zt.z,null)}}const pt=R.children;for(let wt=0,Lt=pt.length;wt<Lt;wt++)Ia(pt[wt],W,et,nt)}function wu(R,W,et,nt){const q=R.opaque,pt=R.transmissive,wt=R.transparent;p.setupLightsView(et),dt===!0&&ft.setGlobalState(x.clippingPlanes,et),nt&&j.viewport(N.copy(nt)),q.length>0&&oo(q,W,et),pt.length>0&&oo(pt,W,et),wt.length>0&&oo(wt,W,et),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Tu(R,W,et,nt){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[nt.id]===void 0&&(p.state.transmissionRenderTarget[nt.id]=new gs(1,1,{generateMipmaps:!0,type:G.has("EXT_color_buffer_half_float")||G.has("EXT_color_buffer_float")?eo:Ei,minFilter:hs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const pt=p.state.transmissionRenderTarget[nt.id],wt=nt.viewport||N;pt.setSize(wt.z,wt.w);const Lt=x.getRenderTarget();x.setRenderTarget(pt),x.getClearColor(z),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),x.clear(),A&&Ft.render(et);const It=x.toneMapping;x.toneMapping=Hi;const qt=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),p.setupLightsView(nt),dt===!0&&ft.setGlobalState(x.clippingPlanes,nt),oo(R,et,nt),E.updateMultisampleRenderTarget(pt),E.updateRenderTargetMipmap(pt),G.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Dt=0,se=W.length;Dt<se;Dt++){const ve=W[Dt],ye=ve.object,Qe=ve.geometry,le=ve.material,Nt=ve.group;if(le.side===Gn&&ye.layers.test(nt.layers)){const Qn=le.side;le.side=Ze,le.needsUpdate=!0,Au(ye,et,nt,Qe,le,Nt),le.side=Qn,le.needsUpdate=!0,jt=!0}}jt===!0&&(E.updateMultisampleRenderTarget(pt),E.updateRenderTargetMipmap(pt))}x.setRenderTarget(Lt),x.setClearColor(z,k),qt!==void 0&&(nt.viewport=qt),x.toneMapping=It}function oo(R,W,et){const nt=W.isScene===!0?W.overrideMaterial:null;for(let q=0,pt=R.length;q<pt;q++){const wt=R[q],Lt=wt.object,It=wt.geometry,qt=nt===null?wt.material:nt,jt=wt.group;Lt.layers.test(et.layers)&&Au(Lt,W,et,It,qt,jt)}}function Au(R,W,et,nt,q,pt){R.onBeforeRender(x,W,et,nt,q,pt),R.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(x,W,et,nt,R,pt),q.transparent===!0&&q.side===Gn&&q.forceSinglePass===!1?(q.side=Ze,q.needsUpdate=!0,x.renderBufferDirect(et,W,nt,q,R,pt),q.side=qi,q.needsUpdate=!0,x.renderBufferDirect(et,W,nt,q,R,pt),q.side=Gn):x.renderBufferDirect(et,W,nt,q,R,pt),R.onAfterRender(x,W,et,nt,q,pt)}function ao(R,W,et){W.isScene!==!0&&(W=_e);const nt=J.get(R),q=p.state.lights,pt=p.state.shadowsArray,wt=q.state.version,Lt=mt.getParameters(R,q.state,pt,W,et),It=mt.getProgramCacheKey(Lt);let qt=nt.programs;nt.environment=R.isMeshStandardMaterial?W.environment:null,nt.fog=W.fog,nt.envMap=(R.isMeshStandardMaterial?O:y).get(R.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,qt===void 0&&(R.addEventListener("dispose",$t),qt=new Map,nt.programs=qt);let jt=qt.get(It);if(jt!==void 0){if(nt.currentProgram===jt&&nt.lightsStateVersion===wt)return Ru(R,Lt),jt}else Lt.uniforms=mt.getUniforms(R),R.onBeforeCompile(Lt,x),jt=mt.acquireProgram(Lt,It),qt.set(It,jt),nt.uniforms=Lt.uniforms;const Dt=nt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Dt.clippingPlanes=ft.uniform),Ru(R,Lt),nt.needsLights=cm(R),nt.lightsStateVersion=wt,nt.needsLights&&(Dt.ambientLightColor.value=q.state.ambient,Dt.lightProbe.value=q.state.probe,Dt.directionalLights.value=q.state.directional,Dt.directionalLightShadows.value=q.state.directionalShadow,Dt.spotLights.value=q.state.spot,Dt.spotLightShadows.value=q.state.spotShadow,Dt.rectAreaLights.value=q.state.rectArea,Dt.ltc_1.value=q.state.rectAreaLTC1,Dt.ltc_2.value=q.state.rectAreaLTC2,Dt.pointLights.value=q.state.point,Dt.pointLightShadows.value=q.state.pointShadow,Dt.hemisphereLights.value=q.state.hemi,Dt.directionalShadowMap.value=q.state.directionalShadowMap,Dt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Dt.spotShadowMap.value=q.state.spotShadowMap,Dt.spotLightMatrix.value=q.state.spotLightMatrix,Dt.spotLightMap.value=q.state.spotLightMap,Dt.pointShadowMap.value=q.state.pointShadowMap,Dt.pointShadowMatrix.value=q.state.pointShadowMatrix),nt.currentProgram=jt,nt.uniformsList=null,jt}function Cu(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Qo.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Ru(R,W){const et=J.get(R);et.outputColorSpace=W.outputColorSpace,et.batching=W.batching,et.batchingColor=W.batchingColor,et.instancing=W.instancing,et.instancingColor=W.instancingColor,et.instancingMorph=W.instancingMorph,et.skinning=W.skinning,et.morphTargets=W.morphTargets,et.morphNormals=W.morphNormals,et.morphColors=W.morphColors,et.morphTargetsCount=W.morphTargetsCount,et.numClippingPlanes=W.numClippingPlanes,et.numIntersection=W.numClipIntersection,et.vertexAlphas=W.vertexAlphas,et.vertexTangents=W.vertexTangents,et.toneMapping=W.toneMapping}function am(R,W,et,nt,q){W.isScene!==!0&&(W=_e),E.resetTextureUnits();const pt=W.fog,wt=nt.isMeshStandardMaterial?W.environment:null,Lt=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:cr,It=(nt.isMeshStandardMaterial?O:y).get(nt.envMap||wt),qt=nt.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,jt=!!et.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Dt=!!et.morphAttributes.position,se=!!et.morphAttributes.normal,ve=!!et.morphAttributes.color;let ye=Hi;nt.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ye=x.toneMapping);const Qe=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,le=Qe!==void 0?Qe.length:0,Nt=J.get(nt),Qn=p.state.lights;if(dt===!0&&(Tt===!0||R!==M)){const pn=R===M&&nt.id===w;ft.setState(nt,R,pn)}let ce=!1;nt.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Qn.state.version||Nt.outputColorSpace!==Lt||q.isBatchedMesh&&Nt.batching===!1||!q.isBatchedMesh&&Nt.batching===!0||q.isBatchedMesh&&Nt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Nt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Nt.instancing===!1||!q.isInstancedMesh&&Nt.instancing===!0||q.isSkinnedMesh&&Nt.skinning===!1||!q.isSkinnedMesh&&Nt.skinning===!0||q.isInstancedMesh&&Nt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Nt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Nt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Nt.instancingMorph===!1&&q.morphTexture!==null||Nt.envMap!==It||nt.fog===!0&&Nt.fog!==pt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==ft.numPlanes||Nt.numIntersection!==ft.numIntersection)||Nt.vertexAlphas!==qt||Nt.vertexTangents!==jt||Nt.morphTargets!==Dt||Nt.morphNormals!==se||Nt.morphColors!==ve||Nt.toneMapping!==ye||Nt.morphTargetsCount!==le)&&(ce=!0):(ce=!0,Nt.__version=nt.version);let Mn=Nt.currentProgram;ce===!0&&(Mn=ao(nt,W,q));let xs=!1,rn=!1,dr=!1;const Se=Mn.getUniforms(),Un=Nt.uniforms;if(j.useProgram(Mn.program)&&(xs=!0,rn=!0,dr=!0),nt.id!==w&&(w=nt.id,rn=!0),xs||M!==R){j.buffers.depth.getReversed()?(_t.copy(R.projectionMatrix),G0(_t),W0(_t),Se.setValue(S,"projectionMatrix",_t)):Se.setValue(S,"projectionMatrix",R.projectionMatrix),Se.setValue(S,"viewMatrix",R.matrixWorldInverse);const Ti=Se.map.cameraPosition;Ti!==void 0&&Ti.setValue(S,kt.setFromMatrixPosition(R.matrixWorld)),X.logarithmicDepthBuffer&&Se.setValue(S,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Se.setValue(S,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,rn=!0,dr=!0)}if(q.isSkinnedMesh){Se.setOptional(S,q,"bindMatrix"),Se.setOptional(S,q,"bindMatrixInverse");const pn=q.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Se.setValue(S,"boneTexture",pn.boneTexture,E))}q.isBatchedMesh&&(Se.setOptional(S,q,"batchingTexture"),Se.setValue(S,"batchingTexture",q._matricesTexture,E),Se.setOptional(S,q,"batchingIdTexture"),Se.setValue(S,"batchingIdTexture",q._indirectTexture,E),Se.setOptional(S,q,"batchingColorTexture"),q._colorsTexture!==null&&Se.setValue(S,"batchingColorTexture",q._colorsTexture,E));const pr=et.morphAttributes;if((pr.position!==void 0||pr.normal!==void 0||pr.color!==void 0)&&Ht.update(q,et,Mn),(rn||Nt.receiveShadow!==q.receiveShadow)&&(Nt.receiveShadow=q.receiveShadow,Se.setValue(S,"receiveShadow",q.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(Un.envMap.value=It,Un.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&W.environment!==null&&(Un.envMapIntensity.value=W.environmentIntensity),rn&&(Se.setValue(S,"toneMappingExposure",x.toneMappingExposure),Nt.needsLights&&lm(Un,dr),pt&&nt.fog===!0&&ut.refreshFogUniforms(Un,pt),ut.refreshMaterialUniforms(Un,nt,B,$,p.state.transmissionRenderTarget[R.id]),Qo.upload(S,Cu(Nt),Un,E)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Qo.upload(S,Cu(Nt),Un,E),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Se.setValue(S,"center",q.center),Se.setValue(S,"modelViewMatrix",q.modelViewMatrix),Se.setValue(S,"normalMatrix",q.normalMatrix),Se.setValue(S,"modelMatrix",q.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const pn=nt.uniformsGroups;for(let Ti=0,Ai=pn.length;Ti<Ai;Ti++){const Pu=pn[Ti];H.update(Pu,Mn),H.bind(Pu,Mn)}}return Mn}function lm(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function cm(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(R,W,et){J.get(R.texture).__webglTexture=W,J.get(R.depthTexture).__webglTexture=et;const nt=J.get(R);nt.__hasExternalTextures=!0,nt.__autoAllocateDepthBuffer=et===void 0,nt.__autoAllocateDepthBuffer||G.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,W){const et=J.get(R);et.__webglFramebuffer=W,et.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,et=0){D=R,L=W,P=et;let nt=!0,q=null,pt=!1,wt=!1;if(R){const It=J.get(R);if(It.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(S.FRAMEBUFFER,null),nt=!1;else if(It.__webglFramebuffer===void 0)E.setupRenderTarget(R);else if(It.__hasExternalTextures)E.rebindTextures(R,J.get(R.texture).__webglTexture,J.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Dt=R.depthTexture;if(It.__boundDepthTexture!==Dt){if(Dt!==null&&J.has(Dt)&&(R.width!==Dt.image.width||R.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(R)}}const qt=R.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(wt=!0);const jt=J.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(jt[W])?q=jt[W][et]:q=jt[W],pt=!0):R.samples>0&&E.useMultisampledRTT(R)===!1?q=J.get(R).__webglMultisampledFramebuffer:Array.isArray(jt)?q=jt[et]:q=jt,N.copy(R.viewport),V.copy(R.scissor),U=R.scissorTest}else N.copy(gt).multiplyScalar(B).floor(),V.copy(ht).multiplyScalar(B).floor(),U=Qt;if(j.bindFramebuffer(S.FRAMEBUFFER,q)&&nt&&j.drawBuffers(R,q),j.viewport(N),j.scissor(V),j.setScissorTest(U),pt){const It=J.get(R.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+W,It.__webglTexture,et)}else if(wt){const It=J.get(R.texture),qt=W||0;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,It.__webglTexture,et||0,qt)}w=-1},this.readRenderTargetPixels=function(R,W,et,nt,q,pt,wt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=J.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&wt!==void 0&&(Lt=Lt[wt]),Lt){j.bindFramebuffer(S.FRAMEBUFFER,Lt);try{const It=R.texture,qt=It.format,jt=It.type;if(!X.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!X.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-nt&&et>=0&&et<=R.height-q&&S.readPixels(W,et,nt,q,Xt.convert(qt),Xt.convert(jt),pt)}finally{const It=D!==null?J.get(D).__webglFramebuffer:null;j.bindFramebuffer(S.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(R,W,et,nt,q,pt,wt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=J.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&wt!==void 0&&(Lt=Lt[wt]),Lt){const It=R.texture,qt=It.format,jt=It.type;if(!X.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!X.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=R.width-nt&&et>=0&&et<=R.height-q){j.bindFramebuffer(S.FRAMEBUFFER,Lt);const Dt=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Dt),S.bufferData(S.PIXEL_PACK_BUFFER,pt.byteLength,S.STREAM_READ),S.readPixels(W,et,nt,q,Xt.convert(qt),Xt.convert(jt),0);const se=D!==null?J.get(D).__webglFramebuffer:null;j.bindFramebuffer(S.FRAMEBUFFER,se);const ve=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await H0(S,ve,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Dt),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,pt),S.deleteBuffer(Dt),S.deleteSync(ve),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,W=null,et=0){R.isTexture!==!0&&(Lr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1]);const nt=Math.pow(2,-et),q=Math.floor(R.image.width*nt),pt=Math.floor(R.image.height*nt),wt=W!==null?W.x:0,Lt=W!==null?W.y:0;E.setTexture2D(R,0),S.copyTexSubImage2D(S.TEXTURE_2D,et,0,0,wt,Lt,q,pt),j.unbindTexture()},this.copyTextureToTexture=function(R,W,et=null,nt=null,q=0){R.isTexture!==!0&&(Lr("WebGLRenderer: copyTextureToTexture function signature has changed."),nt=arguments[0]||null,R=arguments[1],W=arguments[2],q=arguments[3]||0,et=null);let pt,wt,Lt,It,qt,jt,Dt,se,ve;const ye=R.isCompressedTexture?R.mipmaps[q]:R.image;et!==null?(pt=et.max.x-et.min.x,wt=et.max.y-et.min.y,Lt=et.isBox3?et.max.z-et.min.z:1,It=et.min.x,qt=et.min.y,jt=et.isBox3?et.min.z:0):(pt=ye.width,wt=ye.height,Lt=ye.depth||1,It=0,qt=0,jt=0),nt!==null?(Dt=nt.x,se=nt.y,ve=nt.z):(Dt=0,se=0,ve=0);const Qe=Xt.convert(W.format),le=Xt.convert(W.type);let Nt;W.isData3DTexture?(E.setTexture3D(W,0),Nt=S.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(E.setTexture2DArray(W,0),Nt=S.TEXTURE_2D_ARRAY):(E.setTexture2D(W,0),Nt=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,W.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,W.unpackAlignment);const Qn=S.getParameter(S.UNPACK_ROW_LENGTH),ce=S.getParameter(S.UNPACK_IMAGE_HEIGHT),Mn=S.getParameter(S.UNPACK_SKIP_PIXELS),xs=S.getParameter(S.UNPACK_SKIP_ROWS),rn=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,ye.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,ye.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,It),S.pixelStorei(S.UNPACK_SKIP_ROWS,qt),S.pixelStorei(S.UNPACK_SKIP_IMAGES,jt);const dr=R.isDataArrayTexture||R.isData3DTexture,Se=W.isDataArrayTexture||W.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const Un=J.get(R),pr=J.get(W),pn=J.get(Un.__renderTarget),Ti=J.get(pr.__renderTarget);j.bindFramebuffer(S.READ_FRAMEBUFFER,pn.__webglFramebuffer),j.bindFramebuffer(S.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Ai=0;Ai<Lt;Ai++)dr&&S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,J.get(R).__webglTexture,q,jt+Ai),R.isDepthTexture?(Se&&S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,J.get(W).__webglTexture,q,ve+Ai),S.blitFramebuffer(It,qt,pt,wt,Dt,se,pt,wt,S.DEPTH_BUFFER_BIT,S.NEAREST)):Se?S.copyTexSubImage3D(Nt,q,Dt,se,ve+Ai,It,qt,pt,wt):S.copyTexSubImage2D(Nt,q,Dt,se,ve+Ai,It,qt,pt,wt);j.bindFramebuffer(S.READ_FRAMEBUFFER,null),j.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else Se?R.isDataTexture||R.isData3DTexture?S.texSubImage3D(Nt,q,Dt,se,ve,pt,wt,Lt,Qe,le,ye.data):W.isCompressedArrayTexture?S.compressedTexSubImage3D(Nt,q,Dt,se,ve,pt,wt,Lt,Qe,ye.data):S.texSubImage3D(Nt,q,Dt,se,ve,pt,wt,Lt,Qe,le,ye):R.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,q,Dt,se,pt,wt,Qe,le,ye.data):R.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,q,Dt,se,ye.width,ye.height,Qe,ye.data):S.texSubImage2D(S.TEXTURE_2D,q,Dt,se,pt,wt,Qe,le,ye);S.pixelStorei(S.UNPACK_ROW_LENGTH,Qn),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,ce),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Mn),S.pixelStorei(S.UNPACK_SKIP_ROWS,xs),S.pixelStorei(S.UNPACK_SKIP_IMAGES,rn),q===0&&W.generateMipmaps&&S.generateMipmap(Nt),j.unbindTexture()},this.copyTextureToTexture3D=function(R,W,et=null,nt=null,q=0){return R.isTexture!==!0&&(Lr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,nt=arguments[1]||null,R=arguments[2],W=arguments[3],q=arguments[4]||0),Lr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,et,nt,q)},this.initRenderTarget=function(R){J.get(R).__webglFramebuffer===void 0&&E.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?E.setTextureCube(R,0):R.isData3DTexture?E.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?E.setTexture2DArray(R,0):E.setTexture2D(R,0),j.unbindTexture()},this.resetState=function(){L=0,P=0,D=null,j.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}class _u{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ee(t),this.near=e,this.far=n}clone(){return new _u(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class tb extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qe,this.environmentIntensity=1,this.environmentRotation=new qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class eb extends Je{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vu extends wi{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new Y,u=new ne;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){const d=n+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new fn(o,3)),this.setAttribute("normal",new fn(a,3)),this.setAttribute("uv",new fn(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vu(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ca extends wi{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let g=0;const _=[],m=n/2;let p=0;v(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new fn(f,3)),this.setAttribute("normal",new fn(h,3)),this.setAttribute("uv",new fn(d,2));function v(){const x=new Y,I=new Y;let L=0;const P=(e-t)/n;for(let D=0;D<=r;D++){const w=[],M=D/r,N=M*(e-t)+t;for(let V=0;V<=s;V++){const U=V/s,z=U*l+a,k=Math.sin(z),F=Math.cos(z);I.x=N*k,I.y=-M*n+m,I.z=N*F,f.push(I.x,I.y,I.z),x.set(k,P,F).normalize(),h.push(x.x,x.y,x.z),d.push(U,1-M),w.push(g++)}_.push(w)}for(let D=0;D<s;D++)for(let w=0;w<r;w++){const M=_[w][D],N=_[w+1][D],V=_[w+1][D+1],U=_[w][D+1];(t>0||w!==0)&&(u.push(M,N,U),L+=3),(e>0||w!==r-1)&&(u.push(N,V,U),L+=3)}c.addGroup(p,L,0),p+=L}function T(x){const I=g,L=new ne,P=new Y;let D=0;const w=x===!0?t:e,M=x===!0?1:-1;for(let V=1;V<=s;V++)f.push(0,m*M,0),h.push(0,M,0),d.push(.5,.5),g++;const N=g;for(let V=0;V<=s;V++){const z=V/s*l+a,k=Math.cos(z),F=Math.sin(z);P.x=w*F,P.y=m*M,P.z=w*k,f.push(P.x,P.y,P.z),h.push(0,M,0),L.x=k*.5+.5,L.y=F*.5*M+.5,d.push(L.x,L.y),g++}for(let V=0;V<s;V++){const U=I+V,z=N+V;x===!0?u.push(z,z+1,U):u.push(z+1,z,U),D+=3}c.addGroup(p,D,x===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ca(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Er extends so{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pp,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class xu extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const bl=new Ee,gf=new Y,_f=new Y;class Kp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mu,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;gf.setFromMatrixPosition(t.matrixWorld),e.position.copy(gf),_f.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_f),e.updateMatrixWorld(),bl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const vf=new Ee,br=new Y,wl=new Y;class nb extends Kp{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new pe(2,1,1,1),new pe(0,1,1,1),new pe(3,1,1,1),new pe(1,1,1,1),new pe(3,0,1,1),new pe(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),br.setFromMatrixPosition(t.matrixWorld),n.position.copy(br),wl.copy(n.position),wl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(wl),n.updateMatrixWorld(),s.makeTranslation(-br.x,-br.y,-br.z),vf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vf)}}class ib extends xu{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new nb}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class sb extends Kp{constructor(){super(new Wp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rb extends xu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new sb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ob extends xu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const xf=new Ee;class ab{constructor(t,e,n=0,s=1/0){this.ray=new Up(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new pu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return xf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xf),this}intersectObject(t,e=!0,n=[]){return Oc(t,this,n,e),n.sort(yf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Oc(t[s],this,n,e);return n.sort(yf),n}}function yf(i,t){return i.distance-t.distance}function Oc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Oc(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ou}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ou);class Pn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new b);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new b);const n=this.elements,s=t.x,r=t.y,o=t.z;return e.x=n[0]*s+n[1]*r+n[2]*o,e.y=n[3]*s+n[4]*r+n[5]*o,e.z=n[6]*s+n[7]*r+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new Pn);const n=this.elements,s=t.elements,r=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],u=n[4],f=n[5],h=n[6],d=n[7],g=n[8],_=s[0],m=s[1],p=s[2],v=s[3],T=s[4],x=s[5],I=s[6],L=s[7],P=s[8];return r[0]=o*_+a*v+l*I,r[1]=o*m+a*T+l*L,r[2]=o*p+a*x+l*P,r[3]=c*_+u*v+f*I,r[4]=c*m+u*T+f*L,r[5]=c*p+u*x+f*P,r[6]=h*_+d*v+g*I,r[7]=h*m+d*T+g*L,r[8]=h*p+d*x+g*P,e}scale(t,e){e===void 0&&(e=new Pn);const n=this.elements,s=e.elements;for(let r=0;r!==3;r++)s[3*r+0]=t.x*n[3*r+0],s[3*r+1]=t.y*n[3*r+1],s[3*r+2]=t.z*n[3*r+2];return e}solve(t,e){e===void 0&&(e=new b);const n=3,s=4,r=[];let o,a;for(o=0;o<n*s;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+s*a]=this.elements[o+3*a];r[3]=t.x,r[7]=t.y,r[11]=t.z;let l=3;const c=l;let u;const f=4;let h;do{if(o=c-l,r[o+s*o]===0){for(a=o+1;a<c;a++)if(r[o+s*a]!==0){u=f;do h=f-u,r[h+s*o]+=r[h+s*a];while(--u);break}}if(r[o+s*o]!==0)for(a=o+1;a<c;a++){const d=r[o+s*a]/r[o+s*o];u=f;do h=f-u,r[h+s*a]=h<=o?0:r[h+s*a]-r[h+s*o]*d;while(--u)}}while(--l);if(e.z=r[2*s+3]/r[2*s+2],e.y=(r[1*s+3]-r[1*s+2]*e.z)/r[1*s+1],e.x=(r[0*s+3]-r[0*s+2]*e.z-r[0*s+1]*e.y)/r[0*s+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";for(let n=0;n<9;n++)t+=this.elements[n]+",";return t}reverse(t){t===void 0&&(t=new Pn);const e=3,n=6,s=lb;let r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+n*o]=this.elements[r+3*o];s[3]=1,s[9]=0,s[15]=0,s[4]=0,s[10]=1,s[16]=0,s[5]=0,s[11]=0,s[17]=1;let a=3;const l=a;let c;const u=n;let f;do{if(r=l-a,s[r+n*r]===0){for(o=r+1;o<l;o++)if(s[r+n*o]!==0){c=u;do f=u-c,s[f+n*r]+=s[f+n*o];while(--c);break}}if(s[r+n*r]!==0)for(o=r+1;o<l;o++){const h=s[r+n*o]/s[r+n*r];c=u;do f=u-c,s[f+n*o]=f<=r?0:s[f+n*o]-s[f+n*r]*h;while(--c)}}while(--a);r=2;do{o=r-1;do{const h=s[r+n*o]/s[r+n*r];c=n;do f=n-c,s[f+n*o]=s[f+n*o]-s[f+n*r]*h;while(--c)}while(o--)}while(--r);r=2;do{const h=1/s[r+n*r];c=n;do f=n-c,s[f+n*r]=s[f+n*r]*h;while(--c)}while(r--);r=2;do{o=2;do{if(f=s[e+o+n*r],isNaN(f)||f===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,f)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,s=t.z,r=t.w,o=e+e,a=n+n,l=s+s,c=e*o,u=e*a,f=e*l,h=n*a,d=n*l,g=s*l,_=r*o,m=r*a,p=r*l,v=this.elements;return v[0]=1-(h+g),v[1]=u-p,v[2]=f+m,v[3]=u+p,v[4]=1-(c+g),v[5]=d-_,v[6]=f-m,v[7]=d+_,v[8]=1-(c+h),this}transpose(t){t===void 0&&(t=new Pn);const e=this.elements,n=t.elements;let s;return n[0]=e[0],n[4]=e[4],n[8]=e[8],s=e[1],n[1]=e[3],n[3]=s,s=e[2],n[2]=e[6],n[6]=s,s=e[5],n[5]=e[7],n[7]=s,t}}const lb=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class b{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new b);const n=t.x,s=t.y,r=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*r-l*s,e.y=l*n-o*r,e.z=o*s-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new b(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new b(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Pn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,s=Math.sqrt(t*t+e*e+n*n);if(s>0){const r=1/s;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return s}unit(t){t===void 0&&(t=new b);const e=this.x,n=this.y,s=this.z;let r=Math.sqrt(e*e+n*n+s*s);return r>0?(r=1/r,t.x=e*r,t.y=n*r,t.z=s*r):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-n)*(o-n)+(a-s)*(a-s))}distanceSquared(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-n)*(o-n)+(a-s)*(a-s)}scale(t,e){e===void 0&&(e=new b);const n=this.x,s=this.y,r=this.z;return e.x=t*n,e.y=t*s,e.z=t*r,e}vmul(t,e){return e===void 0&&(e=new b),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new b),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new b),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const s=cb,r=1/n;s.set(this.x*r,this.y*r,this.z*r);const o=ub;Math.abs(s.x)<.9?(o.set(1,0,0),s.cross(o,t)):(o.set(0,1,0),s.cross(o,t)),s.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const s=this.x,r=this.y,o=this.z;n.x=s+(t.x-s)*e,n.y=r+(t.y-r)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Sf),Sf.almostEquals(t,e)}clone(){return new b(this.x,this.y,this.z)}}b.ZERO=new b(0,0,0);b.UNIT_X=new b(1,0,0);b.UNIT_Y=new b(0,1,0);b.UNIT_Z=new b(0,0,1);const cb=new b,ub=new b,Sf=new b;class dn{constructor(t){t===void 0&&(t={}),this.lowerBound=new b,this.upperBound=new b,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,s){const r=this.lowerBound,o=this.upperBound,a=n;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,Mf),c=Mf),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),s&&(r.x-=s,r.y-=s,r.z-=s,o.x+=s,o.y+=s,o.z+=s),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new dn().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,s=t.lowerBound,r=t.upperBound,o=s.x<=n.x&&n.x<=r.x||e.x<=r.x&&r.x<=n.x,a=s.y<=n.y&&n.y<=r.y||e.y<=r.y&&r.y<=n.y,l=s.z<=n.z&&n.z<=r.z||e.z<=r.z&&r.z<=n.z;return o&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,s=t.lowerBound,r=t.upperBound;return e.x<=s.x&&n.x>=r.x&&e.y<=s.y&&n.y>=r.y&&e.z<=s.z&&n.z>=r.z}getCorners(t,e,n,s,r,o,a,l){const c=this.lowerBound,u=this.upperBound;t.copy(c),e.set(u.x,c.y,c.z),n.set(u.x,u.y,c.z),s.set(c.x,u.y,u.z),r.set(u.x,c.y,u.z),o.set(c.x,u.y,c.z),a.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(t,e){const n=Ef,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7];this.getCorners(s,r,o,a,l,c,u,f);for(let h=0;h!==8;h++){const d=n[h];t.pointToLocal(d,d)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=Ef,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7];this.getCorners(s,r,o,a,l,c,u,f);for(let h=0;h!==8;h++){const d=n[h];t.pointToWorld(d,d)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,s=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*s,l=(this.upperBound.x-n.x)*s,c=(this.lowerBound.y-n.y)*r,u=(this.upperBound.y-n.y)*r,f=(this.lowerBound.z-n.z)*o,h=(this.upperBound.z-n.z)*o,d=Math.max(Math.max(Math.min(a,l),Math.min(c,u)),Math.min(f,h)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,u)),Math.max(f,h));return!(g<0||d>g)}}const Mf=new b,Ef=[new b,new b,new b,new b,new b,new b,new b,new b];class bf{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:s}=e;if(s>n){const r=s;s=n,n=r}return this.matrix[(n*(n+1)>>1)+s-1]}set(t,e,n){let{index:s}=t,{index:r}=e;if(r>s){const o=r;r=s,s=o}this.matrix[(s*(s+1)>>1)+r-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Zp{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const s=n[t].indexOf(e);return s!==-1&&n[t].splice(s,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let s=0,r=n.length;s<r;s++)n[s].call(this,t)}return this}}class Re{constructor(t,e,n,s){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),s===void 0&&(s=1),this.x=t,this.y=e,this.z=n,this.w=s}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new b),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=hb,s=fb;t.tangents(n,s),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Re);const n=this.x,s=this.y,r=this.z,o=this.w,a=t.x,l=t.y,c=t.z,u=t.w;return e.x=n*u+o*a+s*c-r*l,e.y=s*u+o*l+r*a-n*c,e.z=r*u+o*c+n*l-s*a,e.w=o*u-n*a-s*l-r*c,e}inverse(t){t===void 0&&(t=new Re);const e=this.x,n=this.y,s=this.z,r=this.w;this.conjugate(t);const o=1/(e*e+n*n+s*s+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new Re),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new b);const n=t.x,s=t.y,r=t.z,o=this.x,a=this.y,l=this.z,c=this.w,u=c*n+a*r-l*s,f=c*s+l*n-o*r,h=c*r+o*s-a*n,d=-o*n-a*s-l*r;return e.x=u*c+d*-o+f*-l-h*-a,e.y=f*c+d*-a+h*-o-u*-l,e.z=h*c+d*-l+u*-a-f*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,s,r;const o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const u=o*a+l*c;if(u>.499&&(n=2*Math.atan2(o,c),s=Math.PI/2,r=0),u<-.499&&(n=-2*Math.atan2(o,c),s=-Math.PI/2,r=0),n===void 0){const f=o*o,h=a*a,d=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*h-2*d),s=Math.asin(2*u),r=Math.atan2(2*o*c-2*a*l,1-2*f-2*d)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=s,t.x=r}setFromEuler(t,e,n,s){s===void 0&&(s="XYZ");const r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),u=Math.sin(n/2);return s==="XYZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):s==="YXZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):s==="ZXY"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):s==="ZYX"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):s==="YZX"?(this.x=l*o*a+r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a-l*c*u):s==="XZY"&&(this.x=l*o*a-r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a+l*c*u),this}clone(){return new Re(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Re);const s=this.x,r=this.y,o=this.z,a=this.w;let l=t.x,c=t.y,u=t.z,f=t.w,h,d,g,_,m;return d=s*l+r*c+o*u+a*f,d<0&&(d=-d,l=-l,c=-c,u=-u,f=-f),1-d>1e-6?(h=Math.acos(d),g=Math.sin(h),_=Math.sin((1-e)*h)/g,m=Math.sin(e*h)/g):(_=1-e,m=e),n.x=_*s+m*l,n.y=_*r+m*c,n.z=_*o+m*u,n.w=_*a+m*f,n}integrate(t,e,n,s){s===void 0&&(s=new Re);const r=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,u=this.z,f=this.w,h=e*.5;return s.x+=h*(r*f+o*u-a*c),s.y+=h*(o*f+a*l-r*u),s.z+=h*(a*f+r*c-o*l),s.w+=h*(-r*l-o*c-a*u),s}}const hb=new b,fb=new b,db={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Pt{constructor(t){t===void 0&&(t={}),this.id=Pt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Pt.idCounter=0;Pt.types=db;class ae{constructor(t){t===void 0&&(t={}),this.position=new b,this.quaternion=new Re,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return ae.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return ae.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,s){return s===void 0&&(s=new b),n.vsub(t,s),e.conjugate(wf),wf.vmult(s,s),s}static pointToWorldFrame(t,e,n,s){return s===void 0&&(s=new b),e.vmult(n,s),s.vadd(t,s),s}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new b),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,s){return s===void 0&&(s=new b),e.w*=-1,e.vmult(n,s),e.w*=-1,s}}const wf=new Re;class Wr extends Pt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:s=[],axes:r,boundingSphereRadius:o}=t;super({type:Pt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const s=new b;for(let r=0;r!==t.length;r++){const o=t[r],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[o[l]].vsub(e[o[c]],s),s.normalize();let u=!1;for(let f=0;f!==n.length;f++)if(n[f].almostEquals(s)||n[f].almostEquals(s)){u=!0;break}u||n.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let s=0;s<this.faces[t].length;s++)if(!this.vertices[this.faces[t][s]])throw new Error(`Vertex ${this.faces[t][s]} not found!`);const e=this.faceNormals[t]||new b;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[t].length;s++)console.warn(`.vertices[${this.faces[t][s]}] = Vec3(${this.vertices[this.faces[t][s]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],s=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];Wr.computeNormal(s,r,o,e)}static computeNormal(t,e,n,s){const r=new b,o=new b;e.vsub(t,o),n.vsub(e,r),r.cross(o,s),s.isZero()||s.normalize()}clipAgainstHull(t,e,n,s,r,o,a,l,c){const u=new b;let f=-1,h=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){u.copy(n.faceNormals[g]),r.vmult(u,u);const _=u.dot(o);_>h&&(h=_,f=g)}const d=[];for(let g=0;g<n.faces[f].length;g++){const _=n.vertices[n.faces[f][g]],m=new b;m.copy(_),r.vmult(m,m),s.vadd(m,m),d.push(m)}f>=0&&this.clipFaceAgainstHull(o,t,e,d,a,l,c)}findSeparatingAxis(t,e,n,s,r,o,a,l){const c=new b,u=new b,f=new b,h=new b,d=new b,g=new b;let _=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let p=0;p!==m.uniqueAxes.length;p++){n.vmult(m.uniqueAxes[p],c);const v=m.testSepAxis(c,t,e,n,s,r);if(v===!1)return!1;v<_&&(_=v,o.copy(c))}else{const p=a?a.length:m.faces.length;for(let v=0;v<p;v++){const T=a?a[v]:v;c.copy(m.faceNormals[T]),n.vmult(c,c);const x=m.testSepAxis(c,t,e,n,s,r);if(x===!1)return!1;x<_&&(_=x,o.copy(c))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){r.vmult(t.uniqueAxes[p],u);const v=m.testSepAxis(u,t,e,n,s,r);if(v===!1)return!1;v<_&&(_=v,o.copy(u))}else{const p=l?l.length:t.faces.length;for(let v=0;v<p;v++){const T=l?l[v]:v;u.copy(t.faceNormals[T]),r.vmult(u,u);const x=m.testSepAxis(u,t,e,n,s,r);if(x===!1)return!1;x<_&&(_=x,o.copy(u))}}for(let p=0;p!==m.uniqueEdges.length;p++){n.vmult(m.uniqueEdges[p],h);for(let v=0;v!==t.uniqueEdges.length;v++)if(r.vmult(t.uniqueEdges[v],d),h.cross(d,g),!g.almostZero()){g.normalize();const T=m.testSepAxis(g,t,e,n,s,r);if(T===!1)return!1;T<_&&(_=T,o.copy(g))}}return s.vsub(e,f),f.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,s,r,o){const a=this;Wr.project(a,t,n,s,Tl),Wr.project(e,t,r,o,Al);const l=Tl[0],c=Tl[1],u=Al[0],f=Al[1];if(l<f||u<c)return!1;const h=l-f,d=u-c;return h<d?h:d}calculateLocalInertia(t,e){const n=new b,s=new b;this.computeLocalAABB(s,n);const r=n.x-s.x,o=n.y-s.y,a=n.z-s.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*r*2*r+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],s=this.vertices[e[0]];return-n.dot(s)}clipFaceAgainstHull(t,e,n,s,r,o,a){const l=new b,c=new b,u=new b,f=new b,h=new b,d=new b,g=new b,_=new b,m=this,p=[],v=s,T=p;let x=-1,I=Number.MAX_VALUE;for(let M=0;M<m.faces.length;M++){l.copy(m.faceNormals[M]),n.vmult(l,l);const N=l.dot(t);N<I&&(I=N,x=M)}if(x<0)return;const L=m.faces[x];L.connectedFaces=[];for(let M=0;M<m.faces.length;M++)for(let N=0;N<m.faces[M].length;N++)L.indexOf(m.faces[M][N])!==-1&&M!==x&&L.connectedFaces.indexOf(M)===-1&&L.connectedFaces.push(M);const P=L.length;for(let M=0;M<P;M++){const N=m.vertices[L[M]],V=m.vertices[L[(M+1)%P]];N.vsub(V,c),u.copy(c),n.vmult(u,u),e.vadd(u,u),f.copy(this.faceNormals[x]),n.vmult(f,f),e.vadd(f,f),u.cross(f,h),h.negate(h),d.copy(N),n.vmult(d,d),e.vadd(d,d);const U=L.connectedFaces[M];g.copy(this.faceNormals[U]);const z=this.getPlaneConstantOfFace(U);_.copy(g),n.vmult(_,_);const k=z-_.dot(e);for(this.clipFaceAgainstPlane(v,T,_,k);v.length;)v.shift();for(;T.length;)v.push(T.shift())}g.copy(this.faceNormals[x]);const D=this.getPlaneConstantOfFace(x);_.copy(g),n.vmult(_,_);const w=D-_.dot(e);for(let M=0;M<v.length;M++){let N=_.dot(v[M])+w;if(N<=r&&(console.log(`clamped: depth=${N} to minDist=${r}`),N=r),N<=o){const V=v[M];if(N<=1e-6){const U={point:V,normal:_,depth:N};a.push(U)}}}}clipFaceAgainstPlane(t,e,n,s){let r,o;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];r=n.dot(l)+s;for(let u=0;u<a;u++){if(c=t[u],o=n.dot(c)+s,r<0)if(o<0){const f=new b;f.copy(c),e.push(f)}else{const f=new b;l.lerp(c,r/(r-o),f),e.push(f)}else if(o<0){const f=new b;l.lerp(c,r/(r-o),f),e.push(f),e.push(c)}l=c,r=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new b);const n=this.vertices,s=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)e.vmult(n[r],s[r]),t.vadd(s[r],s[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){const r=n[s];r.x<t.x?t.x=r.x:r.x>e.x&&(e.x=r.x),r.y<t.y?t.y=r.y:r.y>e.y&&(e.y=r.y),r.z<t.z?t.z=r.z:r.z>e.z&&(e.z=r.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new b);const n=this.faceNormals,s=this.worldFaceNormals;for(let r=0;r!==e;r++)t.vmult(n[r],s[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const s=e[n].lengthSquared();s>t&&(t=s)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,s){const r=this.vertices;let o,a,l,c,u,f,h=new b;for(let d=0;d<r.length;d++){h.copy(r[d]),e.vmult(h,h),t.vadd(h,h);const g=h;(o===void 0||g.x<o)&&(o=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(u===void 0||g.y>u)&&(u=g.y),(l===void 0||g.z<l)&&(l=g.z),(f===void 0||g.z>f)&&(f=g.z)}n.set(o,a,l),s.set(c,u,f)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new b);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,s=this.vertices;if(e){for(let r=0;r<n;r++){const o=s[r];e.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){const o=this.faceNormals[r];e.vmult(o,o)}}if(t)for(let r=0;r<n;r++){const o=s[r];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,s=this.faceNormals,r=new b;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let a=s[o];const l=e[n[o][0]],c=new b;t.vsub(l,c);const u=a.dot(c),f=new b;r.vsub(l,f);const h=a.dot(f);if(u<0&&h>0||u>0&&h<0)return!1}return-1}static project(t,e,n,s,r){const o=t.vertices.length,a=pb;let l=0,c=0;const u=mb,f=t.vertices;u.setZero(),ae.vectorToLocalFrame(n,s,e,a),ae.pointToLocalFrame(n,s,u,u);const h=u.dot(a);c=l=f[0].dot(a);for(let d=1;d<o;d++){const g=f[d].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=h,l-=h,c>l){const d=c;c=l,l=d}r[0]=l,r[1]=c}}const Tl=[],Al=[];new b;const pb=new b,mb=new b;class fs extends Pt{constructor(t){super({type:Pt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,s=b,r=[new s(-t,-e,-n),new s(t,-e,-n),new s(t,e,-n),new s(-t,e,-n),new s(-t,-e,n),new s(t,-e,n),new s(t,e,n),new s(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],l=new Wr({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new b),fs.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const s=t;n.x=1/12*e*(2*s.y*2*s.y+2*s.z*2*s.z),n.y=1/12*e*(2*s.x*2*s.x+2*s.z*2*s.z),n.z=1/12*e*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(t,e){const n=t,s=this.halfExtents;if(n[0].set(s.x,0,0),n[1].set(0,s.y,0),n[2].set(0,0,s.z),n[3].set(-s.x,0,0),n[4].set(0,-s.y,0),n[5].set(0,0,-s.z),e!==void 0)for(let r=0;r!==n.length;r++)e.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const s=this.halfExtents,r=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let o=0;o<r.length;o++)Ni.set(r[o][0],r[o][1],r[o][2]),e.vmult(Ni,Ni),t.vadd(Ni,Ni),n(Ni.x,Ni.y,Ni.z)}calculateWorldAABB(t,e,n,s){const r=this.halfExtents;On[0].set(r.x,r.y,r.z),On[1].set(-r.x,r.y,r.z),On[2].set(-r.x,-r.y,r.z),On[3].set(-r.x,-r.y,-r.z),On[4].set(r.x,-r.y,-r.z),On[5].set(r.x,r.y,-r.z),On[6].set(-r.x,r.y,-r.z),On[7].set(r.x,-r.y,r.z);const o=On[0];e.vmult(o,o),t.vadd(o,o),s.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=On[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,u=l.y,f=l.z;c>s.x&&(s.x=c),u>s.y&&(s.y=u),f>s.z&&(s.z=f),c<n.x&&(n.x=c),u<n.y&&(n.y=u),f<n.z&&(n.z=f)}}}const Ni=new b,On=[new b,new b,new b,new b,new b,new b,new b,new b],yu={DYNAMIC:1,STATIC:2,KINEMATIC:4},Su={AWAKE:0,SLEEPY:1,SLEEPING:2};class yt extends Zp{constructor(t){t===void 0&&(t={}),super(),this.id=yt.idCounter++,this.index=-1,this.world=null,this.vlambda=new b,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new b,this.previousPosition=new b,this.interpolatedPosition=new b,this.initPosition=new b,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new b,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new b,this.force=new b;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?yt.STATIC:yt.DYNAMIC,typeof t.type==typeof yt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=yt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new b,this.quaternion=new Re,this.initQuaternion=new Re,this.previousQuaternion=new Re,this.interpolatedQuaternion=new Re,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new b,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new b,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new b,this.invInertia=new b,this.invInertiaWorld=new Pn,this.invMassSolve=0,this.invInertiaSolve=new b,this.invInertiaWorldSolve=new Pn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new b(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new b(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new dn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new b,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=yt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===yt.SLEEPING&&this.dispatchEvent(yt.wakeupEvent)}sleep(){this.sleepState=yt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;e===yt.AWAKE&&n<s?(this.sleepState=yt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(yt.sleepyEvent)):e===yt.SLEEPY&&n>s?this.wakeUp():e===yt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(yt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===yt.SLEEPING||this.type===yt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new b),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new b),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e}addShape(t,e,n){const s=new b,r=new Re;return e&&s.copy(e),n&&r.copy(n),this.shapes.push(t),this.shapeOffsets.push(s),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let s=0;for(let r=0;r!==n;r++){const o=t[r];o.updateBoundingSphereRadius();const a=e[r].length(),l=o.boundingSphereRadius;a+l>s&&(s=a+l)}this.boundingRadius=s}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,s=t.length,r=gb,o=_b,a=this.quaternion,l=this.aabb,c=vb;for(let u=0;u!==s;u++){const f=t[u];a.vmult(e[u],r),r.vadd(this.position,r),a.mult(n[u],o),f.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),u===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=xb,s=yb;n.setRotationFromQuaternion(this.quaternion),n.transpose(s),n.scale(e,n),n.mmult(s,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new b),this.type!==yt.DYNAMIC)return;this.sleepState===yt.SLEEPING&&this.wakeUp();const n=Sb;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new b),this.type!==yt.DYNAMIC)return;const n=Mb,s=Eb;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyForce(n,s)}applyTorque(t){this.type===yt.DYNAMIC&&(this.sleepState===yt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new b),this.type!==yt.DYNAMIC)return;this.sleepState===yt.SLEEPING&&this.wakeUp();const n=e,s=bb;s.copy(t),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);const r=wb;n.cross(t,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new b),this.type!==yt.DYNAMIC)return;const n=Tb,s=Ab;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyImpulse(n,s)}updateMassProperties(){const t=Cb;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),fs.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new b;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===yt.DYNAMIC||this.type===yt.KINEMATIC)||this.sleepState===yt.SLEEPING)return;const s=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,u=this.invMass,f=this.invInertiaWorld,h=this.linearFactor,d=u*t;s.x+=a.x*d*h.x,s.y+=a.y*d*h.y,s.z+=a.z*d*h.z;const g=f.elements,_=this.angularFactor,m=l.x*_.x,p=l.y*_.y,v=l.z*_.z;r.x+=t*(g[0]*m+g[1]*p+g[2]*v),r.y+=t*(g[3]*m+g[4]*p+g[5]*v),r.z+=t*(g[6]*m+g[7]*p+g[8]*v),o.x+=s.x*t,o.y+=s.y*t,o.z+=s.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}yt.idCounter=0;yt.COLLIDE_EVENT_NAME="collide";yt.DYNAMIC=yu.DYNAMIC;yt.STATIC=yu.STATIC;yt.KINEMATIC=yu.KINEMATIC;yt.AWAKE=Su.AWAKE;yt.SLEEPY=Su.SLEEPY;yt.SLEEPING=Su.SLEEPING;yt.wakeupEvent={type:"wakeup"};yt.sleepyEvent={type:"sleepy"};yt.sleepEvent={type:"sleep"};const gb=new b,_b=new Re,vb=new dn,xb=new Pn,yb=new Pn;new Pn;const Sb=new b,Mb=new b,Eb=new b,bb=new b,wb=new b,Tb=new b,Ab=new b,Cb=new b;class Jp{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&yt.STATIC)!==0||t.sleepState===yt.SLEEPING)&&((e.type&yt.STATIC)!==0||e.sleepState===yt.SLEEPING))}intersectionTest(t,e,n,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,s):this.doBoundingSphereBroadphase(t,e,n,s)}doBoundingSphereBroadphase(t,e,n,s){const r=Rb;e.position.vsub(t.position,r);const o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(n.push(t),s.push(e))}doBoundingBoxBroadphase(t,e,n,s){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),s.push(e))}makePairsUnique(t,e){const n=Pb,s=Lb,r=Ib,o=t.length;for(let a=0;a!==o;a++)s[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const l=s[a].id,c=r[a].id,u=l<c?`${l},${c}`:`${c},${l}`;n[u]=a,n.keys.push(u)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(s[c]),e.push(r[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new b;t.position.vsub(e.position,n);const s=t.shapes[0],r=e.shapes[0];return Math.pow(s.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Rb=new b;new b;new Re;new b;const Pb={keys:[]},Lb=[],Ib=[];new b;new b;new b;class Db extends Jp{constructor(){super()}collisionPairs(t,e,n){const s=t.bodies,r=s.length;let o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=s[l],a=s[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let s=0;s<t.bodies.length;s++){const r=t.bodies[s];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&n.push(r)}return n}}class ua{constructor(){this.rayFromWorld=new b,this.rayToWorld=new b,this.hitNormalWorld=new b,this.hitPointWorld=new b,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,s,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(s),this.shape=r,this.body=o,this.distance=a}}let Qp,tm,em,nm,im,sm,rm;const Mu={CLOSEST:1,ANY:2,ALL:4};Qp=Pt.types.SPHERE;tm=Pt.types.PLANE;em=Pt.types.BOX;nm=Pt.types.CYLINDER;im=Pt.types.CONVEXPOLYHEDRON;sm=Pt.types.HEIGHTFIELD;rm=Pt.types.TRIMESH;class Ce{get[Qp](){return this._intersectSphere}get[tm](){return this._intersectPlane}get[em](){return this._intersectBox}get[nm](){return this._intersectConvex}get[im](){return this._intersectConvex}get[sm](){return this._intersectHeightfield}get[rm](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new b),e===void 0&&(e=new b),this.from=t.clone(),this.to=e.clone(),this.direction=new b,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Ce.ANY,this.result=new ua,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Ce.ANY,this.result=e.result||new ua,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Tf),Cl.length=0,t.broadphase.aabbQuery(t,Tf,Cl),this.intersectBodies(Cl),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;const s=Nb,r=Ub;for(let o=0,a=t.shapes.length;o<a;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],s),s.vadd(t.position,s),this.intersectShape(l,r,s,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,s=t.length;!this.result.shouldStop&&n<s;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,s){const r=this.from;if(jb(r,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,s,t)}_intersectBox(t,e,n,s,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,s,r)}_intersectPlane(t,e,n,s,r){const o=this.from,a=this.to,l=this.direction,c=new b(0,0,1);e.vmult(c,c);const u=new b;o.vsub(n,u);const f=u.dot(c);a.vsub(n,u);const h=u.dot(c);if(f*h>0||o.distanceTo(a)<f)return;const d=c.dot(l);if(Math.abs(d)<this.precision)return;const g=new b,_=new b,m=new b;o.vsub(n,g);const p=-c.dot(g)/d;l.scale(p,_),o.vadd(_,m),this.reportIntersection(c,m,r,s,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,s=this.to,r=this.from;e.x=Math.min(s.x,r.x),e.y=Math.min(s.y,r.y),e.z=Math.min(s.z,r.z),n.x=Math.max(s.x,r.x),n.y=Math.max(s.y,r.y),n.z=Math.max(s.z,r.z)}_intersectHeightfield(t,e,n,s,r){t.data,t.elementSize;const o=Fb;o.from.copy(this.from),o.to.copy(this.to),ae.pointToLocalFrame(n,e,o.from,o.from),ae.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=Ob;let l,c,u,f;l=c=0,u=f=t.data.length-1;const h=new dn;o.getAABB(h),t.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),u=Math.min(u,a[0]+1),f=Math.min(f,a[1]+1);for(let d=l;d<u;d++)for(let g=c;g<f;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(d,g,h),!!h.overlapsRay(o)){if(t.getConvexTrianglePillar(d,g,!1),ae.pointToWorldFrame(n,e,t.pillarOffset,Uo),this._intersectConvex(t.pillarConvex,e,Uo,s,r,Af),this.result.shouldStop)return;t.getConvexTrianglePillar(d,g,!0),ae.pointToWorldFrame(n,e,t.pillarOffset,Uo),this._intersectConvex(t.pillarConvex,e,Uo,s,r,Af)}}}_intersectSphere(t,e,n,s,r){const o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,u=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),f=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,h=u**2-4*c*f,d=Bb,g=zb;if(!(h<0))if(h===0)o.lerp(a,h,d),d.vsub(n,g),g.normalize(),this.reportIntersection(g,d,r,s,-1);else{const _=(-u-Math.sqrt(h))/(2*c),m=(-u+Math.sqrt(h))/(2*c);if(_>=0&&_<=1&&(o.lerp(a,_,d),d.vsub(n,g),g.normalize(),this.reportIntersection(g,d,r,s,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,d),d.vsub(n,g),g.normalize(),this.reportIntersection(g,d,r,s,-1))}}_intersectConvex(t,e,n,s,r,o){const a=kb,l=Cf,c=o&&o.faceList||null,u=t.faces,f=t.vertices,h=t.faceNormals,d=this.direction,g=this.from,_=this.to,m=g.distanceTo(_),p=c?c.length:u.length,v=this.result;for(let T=0;!v.shouldStop&&T<p;T++){const x=c?c[T]:T,I=u[x],L=h[x],P=e,D=n;l.copy(f[I[0]]),P.vmult(l,l),l.vadd(D,l),l.vsub(g,l),P.vmult(L,a);const w=d.dot(a);if(Math.abs(w)<this.precision)continue;const M=a.dot(l)/w;if(!(M<0)){d.scale(M,en),en.vadd(g,en),Tn.copy(f[I[0]]),P.vmult(Tn,Tn),D.vadd(Tn,Tn);for(let N=1;!v.shouldStop&&N<I.length-1;N++){Bn.copy(f[I[N]]),zn.copy(f[I[N+1]]),P.vmult(Bn,Bn),P.vmult(zn,zn),D.vadd(Bn,Bn),D.vadd(zn,zn);const V=en.distanceTo(g);!(Ce.pointInTriangle(en,Tn,Bn,zn)||Ce.pointInTriangle(en,Bn,Tn,zn))||V>m||this.reportIntersection(a,en,r,s,x)}}}}_intersectTrimesh(t,e,n,s,r,o){const a=Vb,l=Yb,c=$b,u=Cf,f=Hb,h=Gb,d=Wb,g=Xb,_=qb,m=t.indices;t.vertices;const p=this.from,v=this.to,T=this.direction;c.position.copy(n),c.quaternion.copy(e),ae.vectorToLocalFrame(n,e,T,f),ae.pointToLocalFrame(n,e,p,h),ae.pointToLocalFrame(n,e,v,d),d.x*=t.scale.x,d.y*=t.scale.y,d.z*=t.scale.z,h.x*=t.scale.x,h.y*=t.scale.y,h.z*=t.scale.z,d.vsub(h,f),f.normalize();const x=h.distanceSquared(d);t.tree.rayQuery(this,c,l);for(let I=0,L=l.length;!this.result.shouldStop&&I!==L;I++){const P=l[I];t.getNormal(P,a),t.getVertex(m[P*3],Tn),Tn.vsub(h,u);const D=f.dot(a),w=a.dot(u)/D;if(w<0)continue;f.scale(w,en),en.vadd(h,en),t.getVertex(m[P*3+1],Bn),t.getVertex(m[P*3+2],zn);const M=en.distanceSquared(h);!(Ce.pointInTriangle(en,Bn,Tn,zn)||Ce.pointInTriangle(en,Tn,Bn,zn))||M>x||(ae.vectorToWorldFrame(e,a,_),ae.pointToWorldFrame(n,e,en,g),this.reportIntersection(_,g,r,s,P))}l.length=0}reportIntersection(t,e,n,s,r){const o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case Ce.ALL:this.hasHit=!0,c.set(o,a,t,e,n,s,l),c.hasHit=!0,this.callback(c);break;case Ce.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,s,l));break;case Ce.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,s,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,s){s.vsub(e,cs),n.vsub(e,wr),t.vsub(e,Rl);const r=cs.dot(cs),o=cs.dot(wr),a=cs.dot(Rl),l=wr.dot(wr),c=wr.dot(Rl);let u,f;return(u=l*a-o*c)>=0&&(f=r*c-o*a)>=0&&u+f<r*l-o*o}}Ce.CLOSEST=Mu.CLOSEST;Ce.ANY=Mu.ANY;Ce.ALL=Mu.ALL;const Tf=new dn,Cl=[],wr=new b,Rl=new b,Nb=new b,Ub=new Re,en=new b,Tn=new b,Bn=new b,zn=new b;new b;new ua;const Af={faceList:[0]},Uo=new b,Fb=new Ce,Ob=[],Bb=new b,zb=new b,kb=new b;new b;new b;const Cf=new b,Vb=new b,Hb=new b,Gb=new b,Wb=new b,qb=new b,Xb=new b;new dn;const Yb=[],$b=new ae,cs=new b,Fo=new b;function jb(i,t,e){e.vsub(i,cs);const n=cs.dot(t);return t.scale(n,Fo),Fo.vadd(i,Fo),e.distanceTo(Fo)}class Vs extends Jp{static checkBounds(t,e,n){let s,r;n===0?(s=t.position.x,r=e.position.x):n===1?(s=t.position.y,r=e.position.y):n===2&&(s=t.position.z,r=e.position.z);const o=t.boundingRadius,a=e.boundingRadius,l=s+o;return r-a<l}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const s=t[e];let r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.x<=s.aabb.lowerBound.x);r--)t[r+1]=t[r];t[r+1]=s}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const s=t[e];let r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.y<=s.aabb.lowerBound.y);r--)t[r+1]=t[r];t[r+1]=s}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const s=t[e];let r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.z<=s.aabb.lowerBound.z);r--)t[r+1]=t[r];t[r+1]=s}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const s=e.indexOf(n.body);s!==-1&&e.splice(s,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const s=this.axisList,r=s.length,o=this.axisIndex;let a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==r;a++){const c=s[a];for(l=a+1;l<r;l++){const u=s[l];if(this.needBroadphaseCollision(c,u)){if(!Vs.checkBounds(c,u,o))break;this.intersectionTest(c,u,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let s=0;s!==n;s++){const r=t[s];r.aabbNeedsUpdate&&r.updateAABB()}e===0?Vs.insertionSortX(t):e===1?Vs.insertionSortY(t):e===2&&Vs.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,s=0,r=0,o=0;const a=this.axisList,l=a.length,c=1/l;for(let d=0;d!==l;d++){const g=a[d],_=g.position.x;t+=_,e+=_*_;const m=g.position.y;n+=m,s+=m*m;const p=g.position.z;r+=p,o+=p*p}const u=e-t*t*c,f=s-n*n*c,h=o-r*r*c;u>f?u>h?this.axisIndex=0:this.axisIndex=2:f>h?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const s=this.axisIndex;let r="x";s===1&&(r="y"),s===2&&(r="z");const o=this.axisList;e.lowerBound[r],e.upperBound[r];for(let a=0;a<o.length;a++){const l=o[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(e)&&n.push(l)}return n}}class Kb{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class Rf{constructor(){this.spatial=new b,this.rotational=new b}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class ro{constructor(t,e,n,s){n===void 0&&(n=-1e6),s===void 0&&(s=1e6),this.id=ro.idCounter++,this.minForce=n,this.maxForce=s,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Rf,this.jacobianElementB=new Rf,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const s=e,r=t,o=n;this.a=4/(o*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(o*o*r*(1+4*s))}computeB(t,e,n){const s=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-s*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.position,o=s.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.velocity,o=s.velocity,a=n.angularVelocity,l=s.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.vlambda,o=s.vlambda,a=n.wlambda,l=s.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.force,o=n.torque,a=s.force,l=s.torque,c=n.invMassSolve,u=s.invMassSolve;return r.scale(c,Pf),a.scale(u,Lf),n.invInertiaWorldSolve.vmult(o,If),s.invInertiaWorldSolve.vmult(l,Df),t.multiplyVectors(Pf,If)+e.multiplyVectors(Lf,Df)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.invMassSolve,o=s.invMassSolve,a=n.invInertiaWorldSolve,l=s.invInertiaWorldSolve;let c=r+o;return a.vmult(t.rotational,Oo),c+=Oo.dot(t.rotational),l.vmult(e.rotational,Oo),c+=Oo.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,s=this.bi,r=this.bj,o=Zb;s.vlambda.addScaledVector(s.invMassSolve*t,e.spatial,s.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),s.invInertiaWorldSolve.vmult(e.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}ro.idCounter=0;const Pf=new b,Lf=new b,If=new b,Df=new b,Oo=new b,Zb=new b;class Jb extends ro{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new b,this.rj=new b,this.ni=new b}computeB(t){const e=this.a,n=this.b,s=this.bi,r=this.bj,o=this.ri,a=this.rj,l=Qb,c=tw,u=s.velocity,f=s.angularVelocity;s.force,s.torque;const h=r.velocity,d=r.angularVelocity;r.force,r.torque;const g=ew,_=this.jacobianElementA,m=this.jacobianElementB,p=this.ni;o.cross(p,l),a.cross(p,c),p.negate(_.spatial),l.negate(_.rotational),m.spatial.copy(p),m.rotational.copy(c),g.copy(r.position),g.vadd(a,g),g.vsub(s.position,g),g.vsub(o,g);const v=p.dot(g),T=this.restitution+1,x=T*h.dot(p)-T*u.dot(p)+d.dot(c)-f.dot(l),I=this.computeGiMf();return-v*e-x*n-t*I}getImpactVelocityAlongNormal(){const t=nw,e=iw,n=sw,s=rw,r=ow;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(s,e),t.vsub(e,r),this.ni.dot(r)}}const Qb=new b,tw=new b,ew=new b,nw=new b,iw=new b,sw=new b,rw=new b,ow=new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;class Nf extends ro{constructor(t,e,n){super(t,e,-n,n),this.ri=new b,this.rj=new b,this.t=new b}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,s=this.rj,r=aw,o=lw,a=this.t;n.cross(a,r),s.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const u=this.computeGW(),f=this.computeGiMf();return-u*e-t*f}}const aw=new b,lw=new b;class ir{constructor(t,e,n){n=Kb.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=ir.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}ir.idCounter=0;class sr{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=sr.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}sr.idCounter=0;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new Ce;new b;new b;new b;new b(1,0,0),new b(0,1,0),new b(0,0,1);new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new dn;new b;new dn;new b;new b;new b;new b;new b;new b;new b;new dn;new b;new ae;new dn;class cw{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class uw extends cw{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const s=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,u=t;let f,h,d,g,_,m;if(a!==0)for(let x=0;x!==c;x++)l[x].updateSolveMassProperties();const p=fw,v=dw,T=hw;p.length=a,v.length=a,T.length=a;for(let x=0;x!==a;x++){const I=o[x];T[x]=0,v[x]=I.computeB(u),p[x]=1/I.computeC()}if(a!==0){for(let L=0;L!==c;L++){const P=l[L],D=P.vlambda,w=P.wlambda;D.set(0,0,0),w.set(0,0,0)}for(n=0;n!==s;n++){g=0;for(let L=0;L!==a;L++){const P=o[L];f=v[L],h=p[L],m=T[L],_=P.computeGWlambda(),d=h*(f-_-P.eps*m),m+d<P.minForce?d=P.minForce-m:m+d>P.maxForce&&(d=P.maxForce-m),T[L]+=d,g+=d>0?d:-d,P.addToWlambda(d)}if(g*g<r)break}for(let L=0;L!==c;L++){const P=l[L],D=P.velocity,w=P.angularVelocity;P.vlambda.vmul(P.linearFactor,P.vlambda),D.vadd(P.vlambda,D),P.wlambda.vmul(P.angularFactor,P.wlambda),w.vadd(P.wlambda,w)}let x=o.length;const I=1/u;for(;x--;)o[x].multiplier=T[x]*I}return n}}const hw=[],fw=[],dw=[];class pw{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class mw extends pw{constructor(){super(...arguments),this.type=b}constructObject(){return new b}}const Me={sphereSphere:Pt.types.SPHERE,spherePlane:Pt.types.SPHERE|Pt.types.PLANE,boxBox:Pt.types.BOX|Pt.types.BOX,sphereBox:Pt.types.SPHERE|Pt.types.BOX,planeBox:Pt.types.PLANE|Pt.types.BOX,convexConvex:Pt.types.CONVEXPOLYHEDRON,sphereConvex:Pt.types.SPHERE|Pt.types.CONVEXPOLYHEDRON,planeConvex:Pt.types.PLANE|Pt.types.CONVEXPOLYHEDRON,boxConvex:Pt.types.BOX|Pt.types.CONVEXPOLYHEDRON,sphereHeightfield:Pt.types.SPHERE|Pt.types.HEIGHTFIELD,boxHeightfield:Pt.types.BOX|Pt.types.HEIGHTFIELD,convexHeightfield:Pt.types.CONVEXPOLYHEDRON|Pt.types.HEIGHTFIELD,sphereParticle:Pt.types.PARTICLE|Pt.types.SPHERE,planeParticle:Pt.types.PLANE|Pt.types.PARTICLE,boxParticle:Pt.types.BOX|Pt.types.PARTICLE,convexParticle:Pt.types.PARTICLE|Pt.types.CONVEXPOLYHEDRON,cylinderCylinder:Pt.types.CYLINDER,sphereCylinder:Pt.types.SPHERE|Pt.types.CYLINDER,planeCylinder:Pt.types.PLANE|Pt.types.CYLINDER,boxCylinder:Pt.types.BOX|Pt.types.CYLINDER,convexCylinder:Pt.types.CONVEXPOLYHEDRON|Pt.types.CYLINDER,heightfieldCylinder:Pt.types.HEIGHTFIELD|Pt.types.CYLINDER,particleCylinder:Pt.types.PARTICLE|Pt.types.CYLINDER,sphereTrimesh:Pt.types.SPHERE|Pt.types.TRIMESH,planeTrimesh:Pt.types.PLANE|Pt.types.TRIMESH};class gw{get[Me.sphereSphere](){return this.sphereSphere}get[Me.spherePlane](){return this.spherePlane}get[Me.boxBox](){return this.boxBox}get[Me.sphereBox](){return this.sphereBox}get[Me.planeBox](){return this.planeBox}get[Me.convexConvex](){return this.convexConvex}get[Me.sphereConvex](){return this.sphereConvex}get[Me.planeConvex](){return this.planeConvex}get[Me.boxConvex](){return this.boxConvex}get[Me.sphereHeightfield](){return this.sphereHeightfield}get[Me.boxHeightfield](){return this.boxHeightfield}get[Me.convexHeightfield](){return this.convexHeightfield}get[Me.sphereParticle](){return this.sphereParticle}get[Me.planeParticle](){return this.planeParticle}get[Me.boxParticle](){return this.boxParticle}get[Me.convexParticle](){return this.convexParticle}get[Me.cylinderCylinder](){return this.convexConvex}get[Me.sphereCylinder](){return this.sphereConvex}get[Me.planeCylinder](){return this.planeConvex}get[Me.boxCylinder](){return this.boxConvex}get[Me.convexCylinder](){return this.convexConvex}get[Me.heightfieldCylinder](){return this.heightfieldCylinder}get[Me.particleCylinder](){return this.particleCylinder}get[Me.sphereTrimesh](){return this.sphereTrimesh}get[Me.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new mw,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,s,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new Jb(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&s.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,u=s.material||e.material;return c&&u&&c.restitution>=0&&u.restitution>=0&&(a.restitution=c.restitution*u.restitution),a.si=r||n,a.sj=o||s,a}createFrictionEquationsFromContact(t,e){const n=t.bi,s=t.bj,r=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const u=r.material||n.material,f=o.material||s.material;if(u&&f&&u.friction>=0&&f.friction>=0&&(c=u.friction*f.friction),c>0){const h=c*(a.frictionGravity||a.gravity).length();let d=n.invMass+s.invMass;d>0&&(d=1/d);const g=this.frictionEquationPool,_=g.length?g.pop():new Nf(n,s,h*d),m=g.length?g.pop():new Nf(n,s,h*d);return _.bi=m.bi=n,_.bj=m.bj=s,_.minForce=m.minForce=-h*d,_.maxForce=m.maxForce=h*d,_.ri.copy(t.ri),_.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(_.t,m.t),_.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),_.enabled=m.enabled=t.enabled,e.push(_,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];is.setZero(),Fs.setZero(),Os.setZero();const r=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==r?(is.vadd(e.ni,is),Fs.vadd(e.ri,Fs),Os.vadd(e.rj,Os)):(is.vsub(e.ni,is),Fs.vadd(e.rj,Fs),Os.vadd(e.ri,Os));const o=1/t;Fs.scale(o,n.ri),Os.scale(o,n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj),is.normalize(),is.tangents(n.t,s.t)}getContacts(t,e,n,s,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=s,this.frictionResult=o;const l=xw,c=yw,u=_w,f=vw;for(let h=0,d=t.length;h!==d;h++){const g=t[h],_=e[h];let m=null;g.material&&_.material&&(m=n.getContactMaterial(g.material,_.material)||null);const p=g.type&yt.KINEMATIC&&_.type&yt.STATIC||g.type&yt.STATIC&&_.type&yt.KINEMATIC||g.type&yt.KINEMATIC&&_.type&yt.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],l),g.quaternion.vmult(g.shapeOffsets[v],u),u.vadd(g.position,u);const T=g.shapes[v];for(let x=0;x<_.shapes.length;x++){_.quaternion.mult(_.shapeOrientations[x],c),_.quaternion.vmult(_.shapeOffsets[x],f),f.vadd(_.position,f);const I=_.shapes[x];if(!(T.collisionFilterMask&I.collisionFilterGroup&&I.collisionFilterMask&T.collisionFilterGroup)||u.distanceTo(f)>T.boundingSphereRadius+I.boundingSphereRadius)continue;let L=null;T.material&&I.material&&(L=n.getContactMaterial(T.material,I.material)||null),this.currentContactMaterial=L||m||n.defaultContactMaterial;const P=T.type|I.type,D=this[P];if(D){let w=!1;T.type<I.type?w=D.call(this,T,I,u,f,l,c,g,_,T,I,p):w=D.call(this,I,T,f,u,c,l,_,g,T,I,p),w&&p&&(n.shapeOverlapKeeper.set(T.id,I.id),n.bodyOverlapKeeper.set(g.id,_.id))}}}}}sphereSphere(t,e,n,s,r,o,a,l,c,u,f){if(f)return n.distanceSquared(s)<(t.radius+e.radius)**2;const h=this.createContactEquation(a,l,t,e,c,u);s.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(t.radius,h.ri),h.rj.scale(-e.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(s,h.rj),h.rj.vsub(l.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(t,e,n,s,r,o,a,l,c,u,f){const h=this.createContactEquation(a,l,t,e,c,u);if(h.ni.set(0,0,1),o.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(t.radius,h.ri),n.vsub(s,Bo),h.ni.scale(h.ni.dot(Bo),Uf),Bo.vsub(Uf,h.rj),-Bo.dot(h.ni)<=t.radius){if(f)return!0;const d=h.ri,g=h.rj;d.vadd(n,d),d.vsub(a.position,d),g.vadd(s,g),g.vsub(l.position,g),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(t,e,n,s,r,o,a,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,s,r,o,a,l,t,e,f)}sphereBox(t,e,n,s,r,o,a,l,c,u,f){const h=this.v3pool,d=Xw;n.vsub(s,zo),e.getSideNormals(d,o);const g=t.radius;let _=!1;const m=$w,p=jw,v=Kw;let T=null,x=0,I=0,L=0,P=null;for(let F=0,$=d.length;F!==$&&_===!1;F++){const B=Gw;B.copy(d[F]);const lt=B.length();B.normalize();const st=zo.dot(B);if(st<lt+g&&st>0){const gt=Ww,ht=qw;gt.copy(d[(F+1)%3]),ht.copy(d[(F+2)%3]);const Qt=gt.length(),at=ht.length();gt.normalize(),ht.normalize();const dt=zo.dot(gt),Tt=zo.dot(ht);if(dt<Qt&&dt>-Qt&&Tt<at&&Tt>-at){const _t=Math.abs(st-lt-g);if((P===null||_t<P)&&(P=_t,I=dt,L=Tt,T=lt,m.copy(B),p.copy(gt),v.copy(ht),x++,f))return!0}}}if(x){_=!0;const F=this.createContactEquation(a,l,t,e,c,u);m.scale(-g,F.ri),F.ni.copy(m),F.ni.negate(F.ni),m.scale(T,m),p.scale(I,p),m.vadd(p,m),v.scale(L,v),m.vadd(v,F.rj),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),F.rj.vadd(s,F.rj),F.rj.vsub(l.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}let D=h.get();const w=Yw;for(let F=0;F!==2&&!_;F++)for(let $=0;$!==2&&!_;$++)for(let B=0;B!==2&&!_;B++)if(D.set(0,0,0),F?D.vadd(d[0],D):D.vsub(d[0],D),$?D.vadd(d[1],D):D.vsub(d[1],D),B?D.vadd(d[2],D):D.vsub(d[2],D),s.vadd(D,w),w.vsub(n,w),w.lengthSquared()<g*g){if(f)return!0;_=!0;const lt=this.createContactEquation(a,l,t,e,c,u);lt.ri.copy(w),lt.ri.normalize(),lt.ni.copy(lt.ri),lt.ri.scale(g,lt.ri),lt.rj.copy(D),lt.ri.vadd(n,lt.ri),lt.ri.vsub(a.position,lt.ri),lt.rj.vadd(s,lt.rj),lt.rj.vsub(l.position,lt.rj),this.result.push(lt),this.createFrictionEquationsFromContact(lt,this.frictionResult)}h.release(D),D=null;const M=h.get(),N=h.get(),V=h.get(),U=h.get(),z=h.get(),k=d.length;for(let F=0;F!==k&&!_;F++)for(let $=0;$!==k&&!_;$++)if(F%3!==$%3){d[$].cross(d[F],M),M.normalize(),d[F].vadd(d[$],N),V.copy(n),V.vsub(N,V),V.vsub(s,V);const B=V.dot(M);M.scale(B,U);let lt=0;for(;lt===F%3||lt===$%3;)lt++;z.copy(n),z.vsub(U,z),z.vsub(N,z),z.vsub(s,z);const st=Math.abs(B),gt=z.length();if(st<d[lt].length()&&gt<g){if(f)return!0;_=!0;const ht=this.createContactEquation(a,l,t,e,c,u);N.vadd(U,ht.rj),ht.rj.copy(ht.rj),z.negate(ht.ni),ht.ni.normalize(),ht.ri.copy(ht.rj),ht.ri.vadd(s,ht.ri),ht.ri.vsub(n,ht.ri),ht.ri.normalize(),ht.ri.scale(g,ht.ri),ht.ri.vadd(n,ht.ri),ht.ri.vsub(a.position,ht.ri),ht.rj.vadd(s,ht.rj),ht.rj.vsub(l.position,ht.rj),this.result.push(ht),this.createFrictionEquationsFromContact(ht,this.frictionResult)}}h.release(M,N,V,U,z)}planeBox(t,e,n,s,r,o,a,l,c,u,f){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,s,r,o,a,l,t,e,f)}convexConvex(t,e,n,s,r,o,a,l,c,u,f,h,d){const g=hT;if(!(n.distanceTo(s)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,r,s,o,g,h,d)){const _=[],m=fT;t.clipAgainstHull(n,r,e,s,o,g,-100,100,_);let p=0;for(let v=0;v!==_.length;v++){if(f)return!0;const T=this.createContactEquation(a,l,t,e,c,u),x=T.ri,I=T.rj;g.negate(T.ni),_[v].normal.negate(m),m.scale(_[v].depth,m),_[v].point.vadd(m,x),I.copy(_[v].point),x.vsub(n,x),I.vsub(s,I),x.vadd(n,x),x.vsub(a.position,x),I.vadd(s,I),I.vsub(l.position,I),this.result.push(T),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(T,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,s,r,o,a,l,c,u,f){const h=this.v3pool;n.vsub(s,Zw);const d=e.faceNormals,g=e.faces,_=e.vertices,m=t.radius;let p=!1;for(let v=0;v!==_.length;v++){const T=_[v],x=eT;o.vmult(T,x),s.vadd(x,x);const I=tT;if(x.vsub(n,I),I.lengthSquared()<m*m){if(f)return!0;p=!0;const L=this.createContactEquation(a,l,t,e,c,u);L.ri.copy(I),L.ri.normalize(),L.ni.copy(L.ri),L.ri.scale(m,L.ri),x.vsub(s,L.rj),L.ri.vadd(n,L.ri),L.ri.vsub(a.position,L.ri),L.rj.vadd(s,L.rj),L.rj.vsub(l.position,L.rj),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult);return}}for(let v=0,T=g.length;v!==T&&p===!1;v++){const x=d[v],I=g[v],L=nT;o.vmult(x,L);const P=iT;o.vmult(_[I[0]],P),P.vadd(s,P);const D=sT;L.scale(-m,D),n.vadd(D,D);const w=rT;D.vsub(P,w);const M=w.dot(L),N=oT;if(n.vsub(P,N),M<0&&N.dot(L)>0){const V=[];for(let U=0,z=I.length;U!==z;U++){const k=h.get();o.vmult(_[I[U]],k),s.vadd(k,k),V.push(k)}if(Hw(V,L,n)){if(f)return!0;p=!0;const U=this.createContactEquation(a,l,t,e,c,u);L.scale(-m,U.ri),L.negate(U.ni);const z=h.get();L.scale(-M,z);const k=h.get();L.scale(-m,k),n.vsub(s,U.rj),U.rj.vadd(k,U.rj),U.rj.vadd(z,U.rj),U.rj.vadd(s,U.rj),U.rj.vsub(l.position,U.rj),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),h.release(z),h.release(k),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult);for(let F=0,$=V.length;F!==$;F++)h.release(V[F]);return}else for(let U=0;U!==I.length;U++){const z=h.get(),k=h.get();o.vmult(_[I[(U+1)%I.length]],z),o.vmult(_[I[(U+2)%I.length]],k),s.vadd(z,z),s.vadd(k,k);const F=Jw;k.vsub(z,F);const $=Qw;F.unit($);const B=h.get(),lt=h.get();n.vsub(z,lt);const st=lt.dot($);$.scale(st,B),B.vadd(z,B);const gt=h.get();if(B.vsub(n,gt),st>0&&st*st<F.lengthSquared()&&gt.lengthSquared()<m*m){if(f)return!0;const ht=this.createContactEquation(a,l,t,e,c,u);B.vsub(s,ht.rj),B.vsub(n,ht.ni),ht.ni.normalize(),ht.ni.scale(m,ht.ri),ht.rj.vadd(s,ht.rj),ht.rj.vsub(l.position,ht.rj),ht.ri.vadd(n,ht.ri),ht.ri.vsub(a.position,ht.ri),this.result.push(ht),this.createFrictionEquationsFromContact(ht,this.frictionResult);for(let Qt=0,at=V.length;Qt!==at;Qt++)h.release(V[Qt]);h.release(z),h.release(k),h.release(B),h.release(gt),h.release(lt);return}h.release(z),h.release(k),h.release(B),h.release(gt),h.release(lt)}for(let U=0,z=V.length;U!==z;U++)h.release(V[U])}}}planeConvex(t,e,n,s,r,o,a,l,c,u,f){const h=aT,d=lT;d.set(0,0,1),r.vmult(d,d);let g=0;const _=cT;for(let m=0;m!==e.vertices.length;m++)if(h.copy(e.vertices[m]),o.vmult(h,h),s.vadd(h,h),h.vsub(n,_),d.dot(_)<=0){if(f)return!0;const v=this.createContactEquation(a,l,t,e,c,u),T=uT;d.scale(d.dot(_),T),h.vsub(T,T),T.vsub(n,v.ri),v.ni.copy(d),h.vsub(s,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(s,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,s,r,o,a,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,s,r,o,a,l,t,e,f)}sphereHeightfield(t,e,n,s,r,o,a,l,c,u,f){const h=e.data,d=t.radius,g=e.elementSize,_=bT,m=ET;ae.pointToLocalFrame(s,o,n,m);let p=Math.floor((m.x-d)/g)-1,v=Math.ceil((m.x+d)/g)+1,T=Math.floor((m.y-d)/g)-1,x=Math.ceil((m.y+d)/g)+1;if(v<0||x<0||p>h.length||T>h[0].length)return;p<0&&(p=0),v<0&&(v=0),T<0&&(T=0),x<0&&(x=0),p>=h.length&&(p=h.length-1),v>=h.length&&(v=h.length-1),x>=h[0].length&&(x=h[0].length-1),T>=h[0].length&&(T=h[0].length-1);const I=[];e.getRectMinMax(p,T,v,x,I);const L=I[0],P=I[1];if(m.z-d>P||m.z+d<L)return;const D=this.result;for(let w=p;w<v;w++)for(let M=T;M<x;M++){const N=D.length;let V=!1;if(e.getConvexTrianglePillar(w,M,!1),ae.pointToWorldFrame(s,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(V=this.sphereConvex(t,e.pillarConvex,n,_,r,o,a,l,t,e,f)),f&&V||(e.getConvexTrianglePillar(w,M,!0),ae.pointToWorldFrame(s,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(V=this.sphereConvex(t,e.pillarConvex,n,_,r,o,a,l,t,e,f)),f&&V))return!0;if(D.length-N>2)return}}boxHeightfield(t,e,n,s,r,o,a,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,s,r,o,a,l,t,e,f)}convexHeightfield(t,e,n,s,r,o,a,l,c,u,f){const h=e.data,d=e.elementSize,g=t.boundingSphereRadius,_=ST,m=MT,p=yT;ae.pointToLocalFrame(s,o,n,p);let v=Math.floor((p.x-g)/d)-1,T=Math.ceil((p.x+g)/d)+1,x=Math.floor((p.y-g)/d)-1,I=Math.ceil((p.y+g)/d)+1;if(T<0||I<0||v>h.length||x>h[0].length)return;v<0&&(v=0),T<0&&(T=0),x<0&&(x=0),I<0&&(I=0),v>=h.length&&(v=h.length-1),T>=h.length&&(T=h.length-1),I>=h[0].length&&(I=h[0].length-1),x>=h[0].length&&(x=h[0].length-1);const L=[];e.getRectMinMax(v,x,T,I,L);const P=L[0],D=L[1];if(!(p.z-g>D||p.z+g<P))for(let w=v;w<T;w++)for(let M=x;M<I;M++){let N=!1;if(e.getConvexTrianglePillar(w,M,!1),ae.pointToWorldFrame(s,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(N=this.convexConvex(t,e.pillarConvex,n,_,r,o,a,l,null,null,f,m,null)),f&&N||(e.getConvexTrianglePillar(w,M,!0),ae.pointToWorldFrame(s,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(N=this.convexConvex(t,e.pillarConvex,n,_,r,o,a,l,null,null,f,m,null)),f&&N))return!0}}sphereParticle(t,e,n,s,r,o,a,l,c,u,f){const h=gT;if(h.set(0,0,1),s.vsub(n,h),h.lengthSquared()<=t.radius*t.radius){if(f)return!0;const g=this.createContactEquation(l,a,e,t,c,u);h.normalize(),g.rj.copy(h),g.rj.scale(t.radius,g.rj),g.ni.copy(h),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,s,r,o,a,l,c,u,f){const h=dT;h.set(0,0,1),a.quaternion.vmult(h,h);const d=pT;if(s.vsub(a.position,d),h.dot(d)<=0){if(f)return!0;const _=this.createContactEquation(l,a,e,t,c,u);_.ni.copy(h),_.ni.negate(_.ni),_.ri.set(0,0,0);const m=mT;h.scale(h.dot(s),m),s.vsub(m,m),_.rj.copy(m),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(t,e,n,s,r,o,a,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,s,r,o,a,l,t,e,f)}convexParticle(t,e,n,s,r,o,a,l,c,u,f){let h=-1;const d=vT,g=xT;let _=null;const m=_T;if(m.copy(s),m.vsub(n,m),r.conjugate(Ff),Ff.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let p=0,v=t.faces.length;p!==v;p++){const T=[t.worldVertices[t.faces[p][0]]],x=t.worldFaceNormals[p];s.vsub(T[0],Of);const I=-x.dot(Of);if(_===null||Math.abs(I)<Math.abs(_)){if(f)return!0;_=I,h=p,d.copy(x)}}if(h!==-1){const p=this.createContactEquation(l,a,e,t,c,u);d.scale(_,g),g.vadd(s,g),g.vsub(n,g),p.rj.copy(g),d.negate(p.ni),p.ri.set(0,0,0);const v=p.ri,T=p.rj;v.vadd(s,v),v.vsub(l.position,v),T.vadd(n,T),T.vsub(a.position,T),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,s,r,o,a,l,c,u,f){return this.convexHeightfield(e,t,s,n,o,r,l,a,c,u,f)}particleCylinder(t,e,n,s,r,o,a,l,c,u,f){return this.convexParticle(e,t,s,n,o,r,l,a,c,u,f)}sphereTrimesh(t,e,n,s,r,o,a,l,c,u,f){const h=Cw,d=Rw,g=Pw,_=Lw,m=Iw,p=Dw,v=Ow,T=Aw,x=ww,I=Bw;ae.pointToLocalFrame(s,o,n,m);const L=t.radius;v.lowerBound.set(m.x-L,m.y-L,m.z-L),v.upperBound.set(m.x+L,m.y+L,m.z+L),e.getTrianglesInAABB(v,I);const P=Tw,D=t.radius*t.radius;for(let U=0;U<I.length;U++)for(let z=0;z<3;z++)if(e.getVertex(e.indices[I[U]*3+z],P),P.vsub(m,x),x.lengthSquared()<=D){if(T.copy(P),ae.pointToWorldFrame(s,o,T,P),P.vsub(n,x),f)return!0;let k=this.createContactEquation(a,l,t,e,c,u);k.ni.copy(x),k.ni.normalize(),k.ri.copy(k.ni),k.ri.scale(t.radius,k.ri),k.ri.vadd(n,k.ri),k.ri.vsub(a.position,k.ri),k.rj.copy(P),k.rj.vsub(l.position,k.rj),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}for(let U=0;U<I.length;U++)for(let z=0;z<3;z++){e.getVertex(e.indices[I[U]*3+z],h),e.getVertex(e.indices[I[U]*3+(z+1)%3],d),d.vsub(h,g),m.vsub(d,p);const k=p.dot(g);m.vsub(h,p);let F=p.dot(g);if(F>0&&k<0&&(m.vsub(h,p),_.copy(g),_.normalize(),F=p.dot(_),_.scale(F,p),p.vadd(h,p),p.distanceTo(m)<t.radius)){if(f)return!0;const B=this.createContactEquation(a,l,t,e,c,u);p.vsub(m,B.ni),B.ni.normalize(),B.ni.scale(t.radius,B.ri),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),ae.pointToWorldFrame(s,o,p,p),p.vsub(l.position,B.rj),ae.vectorToWorldFrame(o,B.ni,B.ni),ae.vectorToWorldFrame(o,B.ri,B.ri),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}}const w=Nw,M=Uw,N=Fw,V=bw;for(let U=0,z=I.length;U!==z;U++){e.getTriangleVertices(I[U],w,M,N),e.getNormal(I[U],V),m.vsub(w,p);let k=p.dot(V);if(V.scale(k,p),m.vsub(p,p),k=p.distanceTo(m),Ce.pointInTriangle(p,w,M,N)&&k<t.radius){if(f)return!0;let F=this.createContactEquation(a,l,t,e,c,u);p.vsub(m,F.ni),F.ni.normalize(),F.ni.scale(t.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),ae.pointToWorldFrame(s,o,p,p),p.vsub(l.position,F.rj),ae.vectorToWorldFrame(o,F.ni,F.ni),ae.vectorToWorldFrame(o,F.ri,F.ri),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}}I.length=0}planeTrimesh(t,e,n,s,r,o,a,l,c,u,f){const h=new b,d=Sw;d.set(0,0,1),r.vmult(d,d);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,h);const _=new b;_.copy(h),ae.pointToWorldFrame(s,o,_,h);const m=Mw;if(h.vsub(n,m),d.dot(m)<=0){if(f)return!0;const v=this.createContactEquation(a,l,t,e,c,u);v.ni.copy(d);const T=Ew;d.scale(m.dot(d),T),h.vsub(T,T),v.ri.copy(T),v.ri.vsub(a.position,v.ri),v.rj.copy(h),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const is=new b,Fs=new b,Os=new b,_w=new b,vw=new b,xw=new Re,yw=new Re,Sw=new b,Mw=new b,Ew=new b,bw=new b,ww=new b;new b;const Tw=new b,Aw=new b,Cw=new b,Rw=new b,Pw=new b,Lw=new b,Iw=new b,Dw=new b,Nw=new b,Uw=new b,Fw=new b,Ow=new dn,Bw=[],Bo=new b,Uf=new b,zw=new b,kw=new b,Vw=new b;function Hw(i,t,e){let n=null;const s=i.length;for(let r=0;r!==s;r++){const o=i[r],a=zw;i[(r+1)%s].vsub(o,a);const l=kw;a.cross(t,l);const c=Vw;e.vsub(o,c);const u=l.dot(c);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}const zo=new b,Gw=new b,Ww=new b,qw=new b,Xw=[new b,new b,new b,new b,new b,new b],Yw=new b,$w=new b,jw=new b,Kw=new b,Zw=new b,Jw=new b,Qw=new b,tT=new b,eT=new b,nT=new b,iT=new b,sT=new b,rT=new b,oT=new b;new b;new b;const aT=new b,lT=new b,cT=new b,uT=new b,hT=new b,fT=new b,dT=new b,pT=new b,mT=new b,gT=new b,Ff=new Re,_T=new b;new b;const vT=new b,Of=new b,xT=new b,yT=new b,ST=new b,MT=[0],ET=new b,bT=new b;class Bf{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),s=this.current;let r=0;for(;n>s[r];)r++;if(n!==s[r]){for(let o=s.length-1;o>=r;o--)s[o+1]=s[o];s[r]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,s=this.previous,r=n.length,o=s.length;let a=0;for(let l=0;l<r;l++){let c=!1;const u=n[l];for(;u>s[a];)a++;c=u===s[a],c||zf(t,u)}a=0;for(let l=0;l<o;l++){let c=!1;const u=s[l];for(;u>n[a];)a++;c=n[a]===u,c||zf(e,u)}}}function zf(i,t){i.push((t&4294901760)>>16,t&65535)}const Pl=(i,t)=>i<t?`${i}-${t}`:`${t}-${i}`;class wT{constructor(){this.data={keys:[]}}get(t,e){const n=Pl(t,e);return this.data[n]}set(t,e,n){const s=Pl(t,e);this.get(t,e)||this.data.keys.push(s),this.data[s]=n}delete(t,e){const n=Pl(t,e),s=this.data.keys.indexOf(n);s!==-1&&this.data.keys.splice(s,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class TT extends Zp{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new b,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new b,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Db,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new uw,this.constraints=[],this.narrowphase=new gw(this),this.collisionMatrix=new bf,this.collisionMatrixPrevious=new bf,this.bodyOverlapKeeper=new Bf,this.shapeOverlapKeeper=new Bf,this.contactmaterials=[],this.contactMaterialTable=new wT,this.defaultMaterial=new sr("default"),this.defaultContactMaterial=new ir(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof ua?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,s){return n===void 0&&(n={}),n.mode=Ce.ALL,n.from=t,n.to=e,n.callback=s,Ll.intersectWorld(this,n)}raycastAny(t,e,n,s){return n===void 0&&(n={}),n.mode=Ce.ANY,n.from=t,n.to=e,n.result=s,Ll.intersectWorld(this,n)}raycastClosest(t,e,n,s){return n===void 0&&(n={}),n.mode=Ce.CLOSEST,n.from=t,n.to=e,n.result=s,Ll.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof yt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,s=n.indexOf(t);if(s!==-1){n.splice(s,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const s=e[n].shapes;for(let r=0;r<s.length;r++){const o=s[r];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=Ie.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const s=n-this.lastCallTime;this.step(t,s,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const s=Ie.now();let r=0;for(;this.accumulator>=t&&r<n&&(this.internalStep(t),this.accumulator-=t,r++,!(Ie.now()-s>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=LT,s=IT,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,u=this.profile,f=yt.DYNAMIC;let h=-1/0;const d=this.constraints,g=PT;l.length();const _=l.x,m=l.y,p=l.z;let v=0;for(c&&(h=Ie.now()),v=0;v!==r;v++){const U=o[v];if(U.type===f){const z=U.force,k=U.mass;z.x+=k*_,z.y+=k*m,z.z+=k*p}}for(let U=0,z=this.subsystems.length;U!==z;U++)this.subsystems[U].update();c&&(h=Ie.now()),n.length=0,s.length=0,this.broadphase.collisionPairs(this,n,s),c&&(u.broadphase=Ie.now()-h);let T=d.length;for(v=0;v!==T;v++){const U=d[v];if(!U.collideConnected)for(let z=n.length-1;z>=0;z-=1)(U.bodyA===n[z]&&U.bodyB===s[z]||U.bodyB===n[z]&&U.bodyA===s[z])&&(n.splice(z,1),s.splice(z,1))}this.collisionMatrixTick(),c&&(h=Ie.now());const x=RT,I=e.length;for(v=0;v!==I;v++)x.push(e[v]);e.length=0;const L=this.frictionEquations.length;for(v=0;v!==L;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,s,this,e,x,this.frictionEquations,g),c&&(u.narrowphase=Ie.now()-h),c&&(h=Ie.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const P=e.length;for(let U=0;U!==P;U++){const z=e[U],k=z.bi,F=z.bj,$=z.si,B=z.sj;let lt;if(k.material&&F.material?lt=this.getContactMaterial(k.material,F.material)||this.defaultContactMaterial:lt=this.defaultContactMaterial,lt.friction,k.material&&F.material&&(k.material.friction>=0&&F.material.friction>=0&&k.material.friction*F.material.friction,k.material.restitution>=0&&F.material.restitution>=0&&(z.restitution=k.material.restitution*F.material.restitution)),a.addEquation(z),k.allowSleep&&k.type===yt.DYNAMIC&&k.sleepState===yt.SLEEPING&&F.sleepState===yt.AWAKE&&F.type!==yt.STATIC){const st=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),gt=F.sleepSpeedLimit**2;st>=gt*2&&(k.wakeUpAfterNarrowphase=!0)}if(F.allowSleep&&F.type===yt.DYNAMIC&&F.sleepState===yt.SLEEPING&&k.sleepState===yt.AWAKE&&k.type!==yt.STATIC){const st=k.velocity.lengthSquared()+k.angularVelocity.lengthSquared(),gt=k.sleepSpeedLimit**2;st>=gt*2&&(F.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(k,F,!0),this.collisionMatrixPrevious.get(k,F)||(Tr.body=F,Tr.contact=z,k.dispatchEvent(Tr),Tr.body=k,F.dispatchEvent(Tr)),this.bodyOverlapKeeper.set(k.id,F.id),this.shapeOverlapKeeper.set($.id,B.id)}for(this.emitContactEvents(),c&&(u.makeContactConstraints=Ie.now()-h,h=Ie.now()),v=0;v!==r;v++){const U=o[v];U.wakeUpAfterNarrowphase&&(U.wakeUp(),U.wakeUpAfterNarrowphase=!1)}for(T=d.length,v=0;v!==T;v++){const U=d[v];U.update();for(let z=0,k=U.equations.length;z!==k;z++){const F=U.equations[z];a.addEquation(F)}}a.solve(t,this),c&&(u.solve=Ie.now()-h),a.removeAllEquations();const D=Math.pow;for(v=0;v!==r;v++){const U=o[v];if(U.type&f){const z=D(1-U.linearDamping,t),k=U.velocity;k.scale(z,k);const F=U.angularVelocity;if(F){const $=D(1-U.angularDamping,t);F.scale($,F)}}}this.dispatchEvent(CT),c&&(h=Ie.now());const M=this.stepnumber%(this.quatNormalizeSkip+1)===0,N=this.quatNormalizeFast;for(v=0;v!==r;v++)o[v].integrate(t,M,N);this.clearForces(),this.broadphase.dirty=!0,c&&(u.integrate=Ie.now()-h),this.stepnumber+=1,this.dispatchEvent(AT);let V=!0;if(this.allowSleep)for(V=!1,v=0;v!==r;v++){const U=o[v];U.sleepTick(this.time),U.sleepState!==yt.SLEEPING&&(V=!0)}this.hasActiveBodies=V}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(oi,ai),t){for(let r=0,o=oi.length;r<o;r+=2)Ar.bodyA=this.getBodyById(oi[r]),Ar.bodyB=this.getBodyById(oi[r+1]),this.dispatchEvent(Ar);Ar.bodyA=Ar.bodyB=null}if(e){for(let r=0,o=ai.length;r<o;r+=2)Cr.bodyA=this.getBodyById(ai[r]),Cr.bodyB=this.getBodyById(ai[r+1]),this.dispatchEvent(Cr);Cr.bodyA=Cr.bodyB=null}oi.length=ai.length=0;const n=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((n||s)&&this.shapeOverlapKeeper.getDiff(oi,ai),n){for(let r=0,o=oi.length;r<o;r+=2){const a=this.getShapeById(oi[r]),l=this.getShapeById(oi[r+1]);li.shapeA=a,li.shapeB=l,a&&(li.bodyA=a.body),l&&(li.bodyB=l.body),this.dispatchEvent(li)}li.bodyA=li.bodyB=li.shapeA=li.shapeB=null}if(s){for(let r=0,o=ai.length;r<o;r+=2){const a=this.getShapeById(ai[r]),l=this.getShapeById(ai[r+1]);ci.shapeA=a,ci.shapeB=l,a&&(ci.bodyA=a.body),l&&(ci.bodyB=l.body),this.dispatchEvent(ci)}ci.bodyA=ci.bodyB=ci.shapeA=ci.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const s=t[n];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}}new dn;const Ll=new Ce,Ie=globalThis.performance||{};if(!Ie.now){let i=Date.now();Ie.timing&&Ie.timing.navigationStart&&(i=Ie.timing.navigationStart),Ie.now=()=>Date.now()-i}new b;const AT={type:"postStep"},CT={type:"preStep"},Tr={type:yt.COLLIDE_EVENT_NAME,body:null,contact:null},RT=[],PT=[],LT=[],IT=[],oi=[],ai=[],Ar={type:"beginContact",bodyA:null,bodyB:null},Cr={type:"endContact",bodyA:null,bodyB:null},li={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},ci={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},DT=33,ko=.5,NT=-.5,UT=2,FT=_s({__name:"GameScene",setup(i){const t=vs(),e=to(),n=Te(null);let s,r,o,a,l;const c=[],u=[];let f=0,h=!1,d=0,g,_=!1,m,p,v;function T(A){const S=document.createElement("canvas");S.width=256,S.height=256;const Z=S.getContext("2d");Z.fillStyle="#f8f8f8",Z.fillRect(0,0,256,256);const G=256*.07,X={1:[[.5,.5]],2:[[.28,.28],[.72,.72]],3:[[.28,.28],[.5,.5],[.72,.72]],4:[[.28,.28],[.72,.28],[.28,.72],[.72,.72]],5:[[.28,.28],[.72,.28],[.5,.5],[.28,.72],[.72,.72]],6:[[.28,.25],[.72,.25],[.28,.5],[.72,.5],[.28,.75],[.72,.75]]};Z.fillStyle="#1a1a2e";for(const[rt,J]of X[A])Z.beginPath(),Z.arc(rt*256,J*256,G,0,Math.PI*2),Z.fill();const j=new eb(S);return j.needsUpdate=!0,j}const x=[3,4,1,6,2,5];function I(){return x.map(A=>{const C=T(A);return new Er({map:C,roughness:.3,metalness:0})})}const L={1:new Y(0,1,0),6:new Y(0,-1,0),2:new Y(0,0,1),5:new Y(0,0,-1),3:new Y(1,0,0),4:new Y(-1,0,0)};function P(A){const C=new Y(0,1,0);let S=-1/0,Z=1;for(const[G,X]of Object.entries(L)){const rt=X.clone().applyQuaternion(A).dot(C);rt>S&&(S=rt,Z=parseInt(G))}return Z}function D(A){const C=new hr;switch(A){case 1:C.setFromEuler(new qe(0,0,0));break;case 6:C.setFromEuler(new qe(Math.PI,0,0));break;case 2:C.setFromEuler(new qe(Math.PI/2,0,0));break;case 5:C.setFromEuler(new qe(-Math.PI/2,0,0));break;case 3:C.setFromEuler(new qe(0,0,-Math.PI/2));break;case 4:C.setFromEuler(new qe(0,0,Math.PI/2));break}return C}function w(){if(!n.value)return;s=new QE({canvas:n.value,antialias:!0,alpha:!1}),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.shadowMap.enabled=!0,s.shadowMap.type=gp,s.toneMapping=vp,s.toneMappingExposure=1.2,kt(),r=new tb,r.background=new ee("#0d0d14"),r.fog=new _u("#0d0d14",15,30),o=new cn(45,Ot(),.1,100),o.position.set(0,12,.01),o.lookAt(0,0,0);const A=new ob(16777215,.4);r.add(A);const C=new rb(16777215,1);C.position.set(3,12,3),C.castShadow=!0,C.shadow.mapSize.width=2048,C.shadow.mapSize.height=2048,C.shadow.camera.near=.5,C.shadow.camera.far=30,C.shadow.camera.left=-8,C.shadow.camera.right=8,C.shadow.camera.top=8,C.shadow.camera.bottom=-8,r.add(C);const S=new ib(16766617,.6,20);S.position.set(0,6,0),r.add(S),a=new TT({gravity:new b(0,-15,0)}),a.broadphase=new Vs(a),a.solver.iterations=10,a.allowSleep=!0,a.defaultContactMaterial.contactEquationStiffness=1e8,a.defaultContactMaterial.contactEquationRelaxation=3,p=new sr("dice"),v=new sr("table"),a.addContactMaterial(new ir(p,v,{friction:.4,restitution:.3})),a.addContactMaterial(new ir(p,p,{friction:.3,restitution:.4})),M(),N(),U(),z()}function M(){const A=new _i(8,.3,6),C=new Er({color:"#1a5c2a",roughness:.8,metalness:0}),S=new Fe(A,C);S.position.y=-.15,S.receiveShadow=!0,r.add(S);const Z=new Er({color:"#4a3020",roughness:.6,metalness:.1}),G=new _i(8.4,.4,.2),X=new _i(.2,.4,6.4),j=new Fe(G,Z);j.position.set(0,0,3.1),j.castShadow=!0,r.add(j);const rt=new Fe(G,Z);rt.position.set(0,0,-3.1),rt.castShadow=!0,r.add(rt);const J=new Fe(X,Z);J.position.set(-4.1,0,0),J.castShadow=!0,r.add(J);const E=new Fe(X,Z);E.position.set(4.1,0,0),E.castShadow=!0,r.add(E),m=new yt({type:yt.STATIC,material:v}),m.addShape(new fs(new b(4,1,3)),new b(0,-1,0)),a.addBody(m)}function N(){const A=new fs(new b(4,2,.1)),C=v,S=[new b(0,1,3),new b(0,1,-3)],Z=new fs(new b(.1,2,3)),G=[new b(4,1,0),new b(-4,1,0)];for(const X of S){const j=new yt({type:yt.STATIC,material:C});j.addShape(A),j.position.copy(X),a.addBody(j)}for(const X of G){const j=new yt({type:yt.STATIC,material:C});j.addShape(Z),j.position.copy(X),a.addBody(j)}}const V=ko/2;function U(){for(let A=0;A<5;A++){const C=new _i(ko,ko,ko),S=I(),Z=new Fe(C,S);Z.castShadow=!0,Z.receiveShadow=!0,Z.position.set(-10,-10,-10),Z.visible=!1,r.add(Z),c.push(Z);const G=new yt({mass:.3,material:p,shape:new fs(new b(V,V,V)),allowSleep:!0,sleepSpeedLimit:.1,sleepTimeLimit:1,linearDamping:.1,angularDamping:.1});G.position.set(-10,-10,-10),a.addBody(G),u.push(G)}}function z(){g=new Dr;const A=1,C=1.8,S=.08,Z=new ca(A,A*.9,C,32,1,!0),G=new Er({color:"#8B4513",roughness:.7,metalness:.1,side:Gn}),X=new Fe(Z,G);X.castShadow=!0,g.add(X);const j=new vu(A*.9,32),rt=new Fe(j,G);rt.rotation.x=-Math.PI/2,rt.position.y=-C/2,g.add(rt);const J=new ca(A-S,A*.9-S,C-.05,32,1,!0),E=new Er({color:"#3a1f0d",roughness:.9,side:Ze}),y=new Fe(J,E);g.add(y),g.position.set(3,C/2+.01,0),g.visible=!1,r.add(g)}async function k(){if(_)return;_=!0,h=!1,f=performance.now(),d=0;const A=[],C=[];for(let S=0;S<5;S++)t.turnState.kept[S]?A.push(S):C.push(S);A.forEach((S,Z)=>{const G=-2+Z*.8,X=c[S],j=u[S];j.type=yt.STATIC,j.position.set(G,V+.01,2),j.velocity.setZero(),j.angularVelocity.setZero(),X.visible=!0,X.position.set(G,V+.01,2);const rt=t.turnState.dice[S];if(rt>0){const J=D(rt);X.quaternion.copy(J),j.quaternion.set(J.x,J.y,J.z,J.w)}}),g.visible=!0,g.position.set(0,1.5,-1),g.rotation.set(0,0,0),await F(),await $();for(let S=0;S<C.length;S++){const Z=C[S],G=u[Z],X=c[Z];G.type=yt.DYNAMIC,G.wakeUp();const j=(Math.random()-.5)*1.5,rt=(Math.random()-.5)*.5;G.position.set(j,3+Math.random()*1,-.5+rt),G.quaternion.setFromEuler(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),G.velocity.set((Math.random()-.5)*5,-2+Math.random()*2,(Math.random()-.5)*4),G.angularVelocity.set((Math.random()-.5)*20,(Math.random()-.5)*20,(Math.random()-.5)*20),X.visible=!0}await B(),_=!1}function F(){return new Promise(A=>{const C=performance.now(),S=500;function Z(){const G=performance.now()-C,X=Math.min(G/S,1),j=Math.sin(X*Math.PI*6)*.15*(1-X);g.rotation.z=j,g.position.y=1.5+Math.abs(Math.sin(X*Math.PI*3))*.2,X<1?requestAnimationFrame(Z):A()}Z()})}function $(){return new Promise(A=>{const C=performance.now(),S=400;function Z(){const G=performance.now()-C,X=Math.min(G/S,1),j=X*X*(3-2*X);g.rotation.x=-j*1.8,g.position.y=1.5+j*2,g.position.z=-1+j*1,X<1?requestAnimationFrame(Z):A()}Z()})}function B(){return new Promise(A=>{const C=performance.now(),S=300;function Z(){const G=performance.now()-C,X=Math.min(G/S,1);g.position.x=5*X,g.position.y=3.5-X*2,X<1?requestAnimationFrame(Z):(g.visible=!1,A())}Z()})}function lt(){for(let A=0;A<5;A++){if(t.turnState.kept[A])continue;const C=u[A];if(C.type!==yt.STATIC&&C.position.y<NT){const S=(Math.random()-.5)*2,Z=(Math.random()-.5)*2;C.position.set(S,UT,Z),C.velocity.set(0,-1,0),C.angularVelocity.set((Math.random()-.5)*5,(Math.random()-.5)*5,(Math.random()-.5)*5),C.wakeUp(),console.warn(`[Physics] 주사위 ${A}이(가) 낙하하여 복구됨`)}}}function st(){for(let C=0;C<5;C++){if(t.turnState.kept[C])continue;const S=u[C];if(S.type===yt.STATIC)continue;const Z=S.velocity,G=S.angularVelocity;if(Z.length()>.05||G.length()>.05)return!1}return!0}function gt(){const A=performance.now();if(A-d<DT)return;d=A;const C={dice:c.map(S=>({p:[Math.round(S.position.x*1e3)/1e3,Math.round(S.position.y*1e3)/1e3,Math.round(S.position.z*1e3)/1e3],q:[Math.round(S.quaternion.x*1e3)/1e3,Math.round(S.quaternion.y*1e3)/1e3,Math.round(S.quaternion.z*1e3)/1e3,Math.round(S.quaternion.w*1e3)/1e3],v:S.visible})),cup:{p:[Math.round(g.position.x*1e3)/1e3,Math.round(g.position.y*1e3)/1e3,Math.round(g.position.z*1e3)/1e3],r:[Math.round(g.rotation.x*1e3)/1e3,Math.round(g.rotation.y*1e3)/1e3,Math.round(g.rotation.z*1e3)/1e3],v:g.visible}};e.sendPhysicsStream(C)}function ht(){const A=t.physicsStreamData;if(A){if(A.dice)for(let C=0;C<5;C++){const S=A.dice[C];S&&S.v&&(c[C].visible=!0,c[C].position.set(S.p[0],S.p[1],S.p[2]),c[C].quaternion.set(S.q[0],S.q[1],S.q[2],S.q[3]),u[C].position.set(S.p[0],S.p[1],S.p[2]),u[C].quaternion.set(S.q[0],S.q[1],S.q[2],S.q[3]))}A.cup&&(g.visible=A.cup.v,A.cup.v&&(g.position.set(A.cup.p[0],A.cup.p[1],A.cup.p[2]),g.rotation.set(A.cup.r[0],A.cup.r[1],A.cup.r[2])))}}function Qt(){const A=t.turnState.dice;for(let C=0;C<5;C++){if(A[C]<=0)continue;const S=c[C];if(!S.visible)continue;if(P(S.quaternion)!==A[C]){let G=function(){const E=performance.now()-rt,y=Math.min(E/J,1),O=y*y*(3-2*y);S.quaternion.slerpQuaternions(j,X,O),u[C].quaternion.set(S.quaternion.x,S.quaternion.y,S.quaternion.z,S.quaternion.w),y<1&&requestAnimationFrame(G)};const X=D(A[C]),j=S.quaternion.clone(),rt=performance.now(),J=200;G()}u[C].type=yt.STATIC,u[C].velocity.setZero(),u[C].angularVelocity.setZero()}}function at(){h=!1,f=performance.now(),t.physicsStreamData=null;for(let A=0;A<5;A++)u[A].type=yt.STATIC,u[A].velocity.setZero(),u[A].angularVelocity.setZero()}function dt(){if(h)return;h=!0;const A=[];for(let C=0;C<5;C++)t.turnState.kept[C]?A.push(t.turnState.dice[C]||P(c[C].quaternion)):A.push(P(c[C].quaternion));for(let C=0;C<5;C++)t.turnState.kept[C]||(u[C].type=yt.STATIC,u[C].velocity.setZero(),u[C].angularVelocity.setZero());console.log("[Roller] 물리 결과 전송:",A),e.submitDiceResult(A)}function Tt(){for(let A=0;A<5;A++){const C=c[A];if(!C.visible)continue;const S=C.material,Z=t.turnState.kept[A];S.forEach(G=>{G.emissive=Z?new ee("#2244aa"):new ee("#000000"),G.emissiveIntensity=Z?.3:0})}}function _t(){l=requestAnimationFrame(_t);const A=t.isRolling&&!t.isMyRolling;if(a&&!A&&(a.step(1/120,1/60,5),lt()),!A)for(let C=0;C<5;C++)c[C].visible&&u[C].type===yt.DYNAMIC&&(c[C].position.copy(u[C].position),c[C].quaternion.copy(u[C].quaternion));if(t.isRolling&&t.isMyRolling&&gt(),A&&ht(),t.isRolling&&t.isMyRolling&&!_&&!h){const C=performance.now()-f;if(C>1500&&st()&&dt(),C>1e4){for(let S=0;S<5;S++)t.turnState.kept[S]||(u[S].velocity.setZero(),u[S].angularVelocity.setZero());dt()}}if(Tt(),o){const C=performance.now()*1e-4;o.position.x=Math.sin(C)*.05,o.position.z=.01+Math.cos(C)*.05}s&&r&&o&&s.render(r,o)}function Ot(){return n.value?n.value.clientWidth/n.value.clientHeight:16/9}function kt(){if(!n.value||!s)return;const A=n.value.clientWidth,C=n.value.clientHeight;s.setSize(A,C,!1),o&&(o.aspect=A/C,o.updateProjectionMatrix())}let zt=null;function _e(A){if(!n.value||!o||!t.isMyTurn||t.turnState.rollCount===0||t.turnState.rollCount>=3||t.isRolling)return;const C=n.value.getBoundingClientRect(),S=new ne((A.clientX-C.left)/C.width*2-1,-((A.clientY-C.top)/C.height)*2+1),Z=new ab;Z.setFromCamera(S,o);const G=Z.intersectObjects(c);if(G.length>0){const X=G[0].object,j=c.indexOf(X);j>=0&&t.toggleKeep(j)}}return qs(()=>t.isRolling,(A,C)=>{A&&!C?t.isMyRolling?k():at():!A&&C&&(t.isMyRolling||Qt())}),qs(()=>t.turnState.rollCount,A=>{A===0&&c.forEach(C=>{C.visible=!1})}),ya(()=>{w(),_t(),zt=new ResizeObserver(()=>{kt()}),n.value&&zt.observe(n.value.parentElement)}),Td(()=>{cancelAnimationFrame(l),zt==null||zt.disconnect(),s==null||s.dispose()}),(A,C)=>(Ct(),Rt("canvas",{ref_key:"canvasRef",ref:n,class:"game-canvas",onClick:_e},null,512))}}),OT=lr(FT,[["__scopeId","data-v-7a0ce17d"]]),rr=["ones","twos","threes","fours","fives","sixes"],La=["choice","fourOfAKind","fullHouse","smallStraight","largeStraight","yacht"];[...rr,...La];const or={ones:"Ones (1)",twos:"Twos (2)",threes:"Threes (3)",fours:"Fours (4)",fives:"Fives (5)",sixes:"Sixes (6)",choice:"Choice",fourOfAKind:"Four of a Kind",fullHouse:"Full House",smallStraight:"Small Straight",largeStraight:"Large Straight",yacht:"Yacht!"},BT={class:"score-card"},zT={class:"section"},kT=["onClick"],VT={class:"cat-label"},HT={class:"cat-score"},GT={key:1,class:"preview"},WT={class:"score-row subtotal"},qT={class:"cat-label"},XT={key:0,class:"bonus-achieved"},YT={class:"cat-score"},$T={class:"score-row bonus"},jT={class:"cat-score"},KT={class:"section"},ZT=["onClick"],JT={class:"cat-label"},QT={class:"cat-score"},tA={key:1,class:"preview"},eA={class:"total-row"},nA={class:"total-score"},iA=_s({__name:"ScoreCard",setup(i){const t=vs(),e=to(),n=Ge(()=>{let a=0;for(const l of rr){const c=t.myScores[l];c!==null&&(a+=c)}return a});function s(a){return t.canSelectScore&&t.myScores[a]===null}function r(a){return t.myScores[a]!==null||!t.canSelectScore?null:t.possibleScores[a]??null}function o(a){s(a)&&e.selectCategory(a)}return(a,l)=>(Ct(),Rt("div",BT,[l[5]||(l[5]=ot("h3",{class:"card-title"},"MY SCORE",-1)),ot("div",zT,[l[2]||(l[2]=ot("div",{class:"section-header"},"UPPER",-1)),(Ct(!0),Rt(oe,null,Oe(Ut(rr),c=>(Ct(),Rt("div",{key:c,class:jn(["score-row",{filled:Ut(t).myScores[c]!==null,selectable:s(c),"has-preview":r(c)!==null}]),onClick:u=>o(c)},[ot("span",VT,Jt(Ut(or)[c]),1),ot("span",HT,[Ut(t).myScores[c]!==null?(Ct(),Rt(oe,{key:0},[vn(Jt(Ut(t).myScores[c]),1)],64)):r(c)!==null?(Ct(),Rt("span",GT,Jt(r(c)),1)):(Ct(),Rt(oe,{key:2},[vn(" - ")],64))])],10,kT))),128)),ot("div",WT,[ot("span",qT,[l[0]||(l[0]=vn(" Subtotal ",-1)),n.value>=63?(Ct(),Rt("span",XT,"+35")):yn("",!0)]),ot("span",YT,Jt(n.value)+" / 63",1)]),ot("div",$T,[l[1]||(l[1]=ot("span",{class:"cat-label"},"Bonus",-1)),ot("span",jT,Jt(Ut(t).myBonus),1)])]),ot("div",KT,[l[3]||(l[3]=ot("div",{class:"section-header"},"LOWER",-1)),(Ct(!0),Rt(oe,null,Oe(Ut(La),c=>(Ct(),Rt("div",{key:c,class:jn(["score-row",{filled:Ut(t).myScores[c]!==null,selectable:s(c),"has-preview":r(c)!==null,yacht:c==="yacht"&&r(c)===50}]),onClick:u=>o(c)},[ot("span",JT,Jt(Ut(or)[c]),1),ot("span",QT,[Ut(t).myScores[c]!==null?(Ct(),Rt(oe,{key:0},[vn(Jt(Ut(t).myScores[c]),1)],64)):r(c)!==null?(Ct(),Rt("span",tA,Jt(r(c)),1)):(Ct(),Rt(oe,{key:2},[vn(" - ")],64))])],10,ZT))),128))]),ot("div",eA,[l[4]||(l[4]=ot("span",null,"TOTAL",-1)),ot("span",nA,Jt(Ut(t).myTotal),1)])]))}}),sA=lr(iA,[["__scopeId","data-v-8814a682"]]),rA={class:"popup-card"},oA={key:0,class:"loading"},aA={class:"popup-header"},lA={class:"player-info"},cA={class:"player-name"},uA={class:"popup-body"},hA={class:"section"},fA={class:"cat-label"},dA={class:"cat-score"},pA={class:"score-row subtotal"},mA={class:"cat-label"},gA={key:0,class:"bonus-tag"},_A={class:"cat-score"},vA={class:"score-row bonus-row"},xA={class:"cat-score"},yA={class:"section"},SA={class:"cat-label"},MA={class:"cat-score"},EA={class:"total-row"},bA={class:"total-score"},wA=_s({__name:"PlayerScorePopup",props:{data:{}},emits:["close"],setup(i,{emit:t}){const e=i,n=t;function s(){if(!e.data)return 0;let o=0;for(const a of rr){const l=e.data.scores[a];l!==null&&(o+=l)}return o}function r(o){o.target.classList.contains("popup-overlay")&&n("close")}return(o,a)=>(Ct(),Rt("div",{class:"popup-overlay",onClick:r},[ot("div",rA,[i.data?(Ct(),Rt(oe,{key:1},[ot("div",aA,[ot("div",lA,[ot("span",{class:"player-dot",style:ln({background:i.data.color})},null,4),ot("span",cA,Jt(i.data.name),1)]),ot("button",{class:"close-btn",onClick:a[0]||(a[0]=l=>n("close"))},"✕")]),ot("div",uA,[ot("div",hA,[a[4]||(a[4]=ot("div",{class:"section-header"},"UPPER",-1)),(Ct(!0),Rt(oe,null,Oe(Ut(rr),l=>(Ct(),Rt("div",{key:l,class:jn(["score-row",{filled:i.data.scores[l]!==null}])},[ot("span",fA,Jt(Ut(or)[l]),1),ot("span",dA,Jt(i.data.scores[l]!==null?i.data.scores[l]:"-"),1)],2))),128)),ot("div",pA,[ot("span",mA,[a[2]||(a[2]=vn(" Subtotal ",-1)),s()>=63?(Ct(),Rt("span",gA,"+35")):yn("",!0)]),ot("span",_A,Jt(s())+" / 63",1)]),ot("div",vA,[a[3]||(a[3]=ot("span",{class:"cat-label"},"Bonus",-1)),ot("span",xA,Jt(i.data.bonus),1)])]),ot("div",yA,[a[5]||(a[5]=ot("div",{class:"section-header"},"LOWER",-1)),(Ct(!0),Rt(oe,null,Oe(Ut(La),l=>(Ct(),Rt("div",{key:l,class:jn(["score-row",{filled:i.data.scores[l]!==null}])},[ot("span",SA,Jt(Ut(or)[l]),1),ot("span",MA,Jt(i.data.scores[l]!==null?i.data.scores[l]:"-"),1)],2))),128))]),ot("div",EA,[a[6]||(a[6]=ot("span",null,"TOTAL",-1)),ot("span",bA,Jt(i.data.total),1)])])],64)):(Ct(),Rt("div",oA,[...a[1]||(a[1]=[ot("span",{class:"loading-spinner"},null,-1),ot("span",null,"불러오는 중...",-1)])]))])]))}}),TA=lr(wA,[["__scopeId","data-v-a96b7ade"]]),AA={class:"game-view"},CA={class:"top-bar"},RA={class:"turn-info"},PA={class:"turn-text"},LA={class:"game-info"},IA={class:"info-item"},DA={class:"value"},NA={class:"info-item"},UA={class:"value"},FA={class:"player-badges"},OA=["onClick"],BA={class:"badge-name"},zA={class:"main-area"},kA={class:"scene-container"},VA={class:"side-panel"},HA={class:"controls-area"},GA={key:0,class:"dice-results"},WA=["onClick"],qA={class:"dice-number"},XA={key:0,class:"kept-dot"},YA={class:"dice-sum"},$A={class:"sum-value"},jA=["disabled"],KA={class:"scorecard-wrapper"},ZA=_s({__name:"GameView",setup(i){const t=vs(),e=to(),n=Te(!1);function s(h){h!==t.mySocketId&&(e.requestPlayerScore(h),n.value=!0)}function r(){n.value=!1,t.clearViewingPlayerScore()}const o=Ge(()=>{const h=t.currentPlayer;return h?`${h.id===t.mySocketId?"나":h.name}의 차례`:""}),a=Ge(()=>t.isRolling?"굴리는 중...":t.turnState.rollCount===0?"주사위 굴리기":t.turnState.rollCount>=3?"점수를 선택하세요":`다시 굴리기 (${t.turnState.rollCount}/3)`);function l(){t.turnState.rollCount>0&&e.setKept(t.turnState.kept),setTimeout(()=>{e.rollDice()},t.turnState.rollCount>0?50:0)}function c(h){!t.isMyTurn||t.turnState.rollCount===0||t.turnState.rollCount>=3||t.isRolling||(t.toggleKeep(h),e.setKept(t.turnState.kept))}const u=Ge(()=>t.turnState.dice.map((h,d)=>({value:h,kept:t.turnState.kept[d]}))),f=Ge(()=>t.turnState.dice.reduce((h,d)=>h+d,0));return(h,d)=>{var g;return Ct(),Rt("div",AA,[ot("div",CA,[ot("div",RA,[ot("span",{class:"turn-dot",style:ln({background:((g=Ut(t).currentPlayer)==null?void 0:g.color)||"#666"})},null,4),ot("span",PA,Jt(o.value),1)]),ot("div",LA,[ot("div",IA,[d[0]||(d[0]=ot("span",{class:"label"},"라운드",-1)),ot("span",DA,Jt(Ut(t).currentRound)+" / 12",1)]),ot("div",NA,[d[1]||(d[1]=ot("span",{class:"label"},"굴림",-1)),ot("span",UA,Jt(Ut(t).turnState.rollCount)+" / 3",1)])]),ot("div",FA,[(Ct(!0),Rt(oe,null,Oe(Ut(t).players,_=>{var m;return Ct(),Rt("div",{key:_.id,class:jn(["player-badge",{"is-current":_.id===((m=Ut(t).currentPlayer)==null?void 0:m.id),"is-me":_.id===Ut(t).mySocketId,clickable:_.id!==Ut(t).mySocketId}]),onClick:p=>s(_.id)},[ot("span",{class:"badge-dot",style:ln({background:_.color})},null,4),ot("span",BA,[vn(Jt(_.name)+" ",1),_.id===Ut(t).mySocketId?(Ct(),Rt(oe,{key:0},[vn("(나)")],64)):yn("",!0)])],10,OA)}),128))])]),ot("div",zA,[ot("div",kA,[In(OT)]),ot("div",VA,[ot("div",HA,[Ut(t).turnState.rollCount>0?(Ct(),Rt("div",GA,[(Ct(!0),Rt(oe,null,Oe(u.value,(_,m)=>(Ct(),Rt("div",{key:m,class:jn(["dice-chip",{kept:_.kept,clickable:Ut(t).isMyTurn&&Ut(t).turnState.rollCount>0&&Ut(t).turnState.rollCount<3&&!Ut(t).isRolling}]),onClick:p=>c(m)},[ot("span",qA,Jt(_.value>0?_.value:"?"),1),_.kept?(Ct(),Rt("span",XA)):yn("",!0)],10,WA))),128)),ot("div",YA,[d[2]||(d[2]=ot("span",{class:"sum-label"},"합계",-1)),ot("span",$A,Jt(f.value),1)])])):yn("",!0),ot("button",{class:"btn btn-primary roll-btn",disabled:!Ut(t).canRoll,onClick:l},Jt(a.value),9,jA)]),ot("div",KA,[In(sA)])])]),n.value?(Ct(),Hr(TA,{key:0,data:Ut(t).viewingPlayerScore,onClose:r},null,8,["data"])):yn("",!0)])}}}),JA=lr(ZA,[["__scopeId","data-v-fe1cc534"]]),QA={class:"result-view"},t1={key:0,class:"confetti-container"},e1={class:"result-container"},n1={key:0,class:"winner-card"},i1={class:"winner-score"},s1={class:"rankings-table"},r1={class:"rank-player"},o1={class:"rank-name"},a1={key:0,class:"me-tag"},l1={class:"rank-total"},c1={class:"detail-table-wrap"},u1={class:"detail-table"},h1={class:"section-label"},f1=["colspan"],d1={class:"bonus-row"},p1={class:"section-label"},m1=["colspan"],g1={class:"total-row"},_1={class:"result-actions"},v1={key:1,class:"wait-text"},x1=_s({__name:"ResultView",setup(i){const t=vs(),e=to(),n=Te(!1),s=Ge(()=>t.rankings[0]);function r(){e.restartGame()}ya(()=>{n.value=!0,setTimeout(()=>{n.value=!1},5e3)});function o(l){return l===1?"1st":l===2?"2nd":l===3?"3rd":`${l}th`}function a(l){return l===1?"var(--gold)":l===2?"var(--silver)":l===3?"var(--bronze)":"var(--text-muted)"}return(l,c)=>(Ct(),Rt("div",QA,[n.value?(Ct(),Rt("div",t1,[(Ct(),Rt(oe,null,Oe(60,u=>ot("div",{key:u,class:"confetti-piece",style:ln({left:Math.random()*100+"%",animationDelay:Math.random()*3+"s",animationDuration:2+Math.random()*3+"s",background:["#ef4444","#3b82f6","#22c55e","#eab308","#a855f7","#ec4899"][u%6]})},null,4)),64))])):yn("",!0),ot("div",e1,[c[4]||(c[4]=ot("h1",{class:"result-title"},"GAME OVER",-1)),s.value?(Ct(),Rt("div",n1,[c[0]||(c[0]=ot("div",{class:"crown"},"♔",-1)),ot("div",{class:"winner-name",style:ln({color:s.value.color})},Jt(s.value.name),5),ot("div",i1,Jt(s.value.totalScore)+" pts",1)])):yn("",!0),ot("div",s1,[(Ct(!0),Rt(oe,null,Oe(Ut(t).rankings,u=>(Ct(),Rt("div",{key:u.playerId,class:jn(["rank-row",{"is-me":u.playerId===Ut(t).mySocketId,"is-winner":u.rank===1}])},[ot("div",{class:"rank-medal",style:ln({color:a(u.rank)})},Jt(o(u.rank)),5),ot("div",r1,[ot("span",{class:"rank-dot",style:ln({background:u.color})},null,4),ot("span",o1,[vn(Jt(u.name)+" ",1),u.playerId===Ut(t).mySocketId?(Ct(),Rt("span",a1,"(나)")):yn("",!0)])]),ot("div",l1,Jt(u.totalScore),1)],2))),128))]),ot("div",c1,[ot("table",u1,[ot("thead",null,[ot("tr",null,[c[1]||(c[1]=ot("th",null,"카테고리",-1)),(Ct(!0),Rt(oe,null,Oe(Ut(t).rankings,u=>(Ct(),Rt("th",{key:u.playerId,style:ln({color:u.color})},Jt(u.name),5))),128))])]),ot("tbody",null,[ot("tr",h1,[ot("td",{colspan:Ut(t).rankings.length+1},"Upper Section",8,f1)]),(Ct(!0),Rt(oe,null,Oe(Ut(rr),u=>(Ct(),Rt("tr",{key:u},[ot("td",null,Jt(Ut(or)[u]),1),(Ct(!0),Rt(oe,null,Oe(Ut(t).rankings,f=>(Ct(),Rt("td",{key:f.playerId},Jt(f.scores[u]??"-"),1))),128))]))),128)),ot("tr",d1,[c[2]||(c[2]=ot("td",null,"Bonus (+35)",-1)),(Ct(!0),Rt(oe,null,Oe(Ut(t).rankings,u=>(Ct(),Rt("td",{key:u.playerId},Jt(u.upperBonus),1))),128))]),ot("tr",p1,[ot("td",{colspan:Ut(t).rankings.length+1},"Lower Section",8,m1)]),(Ct(!0),Rt(oe,null,Oe(Ut(La),u=>(Ct(),Rt("tr",{key:u},[ot("td",null,Jt(Ut(or)[u]),1),(Ct(!0),Rt(oe,null,Oe(Ut(t).rankings,f=>(Ct(),Rt("td",{key:f.playerId},Jt(f.scores[u]??"-"),1))),128))]))),128)),ot("tr",g1,[c[3]||(c[3]=ot("td",null,"TOTAL",-1)),(Ct(!0),Rt(oe,null,Oe(Ut(t).rankings,u=>(Ct(),Rt("td",{key:u.playerId,style:ln({color:u.color})},[ot("strong",null,Jt(u.totalScore),1)],4))),128))])])])]),ot("div",_1,[Ut(t).isHost?(Ct(),Rt("button",{key:0,class:"btn btn-primary btn-lg",onClick:r}," 다시 하기 ")):(Ct(),Rt("p",v1,"호스트가 다시 시작할 때까지 대기 중..."))])])]))}}),y1=lr(x1,[["__scopeId","data-v-41e99f8f"]]),S1={class:"app"},M1=_s({__name:"App",setup(i){const t=vs();return(e,n)=>(Ct(),Rt("div",S1,[Ut(t).phase==="waiting"?(Ct(),Hr(t0,{key:0})):Ut(t).phase==="playing"?(Ct(),Hr(JA,{key:1})):Ut(t).phase==="finished"?(Ct(),Hr(y1,{key:2})):yn("",!0)]))}}),om=I_(M1);om.use(U_());om.mount("#app");
