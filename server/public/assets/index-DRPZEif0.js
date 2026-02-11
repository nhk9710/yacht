(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Oc(i){const t=Object.create(null);for(const e of i.split(","))t[e]=1;return e=>e in t}const _e={},Hs=[],Wn=()=>{},kf=()=>!1,ua=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),Bc=i=>i.startsWith("onUpdate:"),Oe=Object.assign,zc=(i,t)=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)},cm=Object.prototype.hasOwnProperty,ue=(i,t)=>cm.call(i,t),Gt=Array.isArray,Vs=i=>Yr(i)==="[object Map]",Hf=i=>Yr(i)==="[object Set]",Lu=i=>Yr(i)==="[object Date]",Yt=i=>typeof i=="function",Pe=i=>typeof i=="string",$n=i=>typeof i=="symbol",ge=i=>i!==null&&typeof i=="object",Vf=i=>(ge(i)||Yt(i))&&Yt(i.then)&&Yt(i.catch),Gf=Object.prototype.toString,Yr=i=>Gf.call(i),um=i=>Yr(i).slice(8,-1),Wf=i=>Yr(i)==="[object Object]",ha=i=>Pe(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Lr=Oc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fa=i=>{const t=Object.create(null);return(e=>t[e]||(t[e]=i(e)))},hm=/-\w/g,Gi=fa(i=>i.replace(hm,t=>t.slice(1).toUpperCase())),fm=/\B([A-Z])/g,Yi=fa(i=>i.replace(fm,"-$1").toLowerCase()),qf=fa(i=>i.charAt(0).toUpperCase()+i.slice(1)),Ia=fa(i=>i?`on${qf(i)}`:""),zi=(i,t)=>!Object.is(i,t),Oo=(i,...t)=>{for(let e=0;e<i.length;e++)i[e](...t)},Xf=(i,t,e,n=!1)=>{Object.defineProperty(i,t,{configurable:!0,enumerable:!1,writable:n,value:e})},kc=i=>{const t=parseFloat(i);return isNaN(t)?i:t};let Iu;const da=()=>Iu||(Iu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ln(i){if(Gt(i)){const t={};for(let e=0;e<i.length;e++){const n=i[e],s=Pe(n)?gm(n):ln(n);if(s)for(const r in s)t[r]=s[r]}return t}else if(Pe(i)||ge(i))return i}const dm=/;(?![^(]*\))/g,pm=/:([^]+)/,mm=/\/\*[^]*?\*\//g;function gm(i){const t={};return i.replace(mm,"").split(dm).forEach(e=>{if(e){const n=e.split(pm);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function _i(i){let t="";if(Pe(i))t=i;else if(Gt(i))for(let e=0;e<i.length;e++){const n=_i(i[e]);n&&(t+=n+" ")}else if(ge(i))for(const e in i)i[e]&&(t+=e+" ");return t.trim()}const _m="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vm=Oc(_m);function Yf(i){return!!i||i===""}function xm(i,t){if(i.length!==t.length)return!1;let e=!0;for(let n=0;e&&n<i.length;n++)e=Hc(i[n],t[n]);return e}function Hc(i,t){if(i===t)return!0;let e=Lu(i),n=Lu(t);if(e||n)return e&&n?i.getTime()===t.getTime():!1;if(e=$n(i),n=$n(t),e||n)return i===t;if(e=Gt(i),n=Gt(t),e||n)return e&&n?xm(i,t):!1;if(e=ge(i),n=ge(t),e||n){if(!e||!n)return!1;const s=Object.keys(i).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in i){const a=i.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!Hc(i[o],t[o]))return!1}}return String(i)===String(t)}const $f=i=>!!(i&&i.__v_isRef===!0),ae=i=>Pe(i)?i:i==null?"":Gt(i)||ge(i)&&(i.toString===Gf||!Yt(i.toString))?$f(i)?ae(i.value):JSON.stringify(i,jf,2):String(i),jf=(i,t)=>$f(t)?jf(i,t.value):Vs(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[n,s],r)=>(e[Da(n,r)+" =>"]=s,e),{})}:Hf(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Da(e))}:$n(t)?Da(t):ge(t)&&!Gt(t)&&!Wf(t)?String(t):t,Da=(i,t="")=>{var e;return $n(i)?`Symbol(${(e=i.description)!=null?e:t})`:i};/**
* @vue/reactivity v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let He;class Kf{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=He,!t&&He&&(this.index=(He.scopes||(He.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=He;try{return He=this,t()}finally{He=e}}}on(){++this._on===1&&(this.prevScope=He,He=this)}off(){this._on>0&&--this._on===0&&(He=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(this.effects.length=0,e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Zf(i){return new Kf(i)}function Jf(){return He}function ym(i,t=!1){He&&He.cleanups.push(i)}let xe;const Na=new WeakSet;class Qf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,He&&He.active&&He.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Na.has(this)&&(Na.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ed(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Du(this),nd(this);const t=xe,e=Pn;xe=this,Pn=!0;try{return this.fn()}finally{id(this),xe=t,Pn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Wc(t);this.deps=this.depsTail=void 0,Du(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Na.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ll(this)&&this.run()}get dirty(){return Ll(this)}}let td=0,Ir,Dr;function ed(i,t=!1){if(i.flags|=8,t){i.next=Dr,Dr=i;return}i.next=Ir,Ir=i}function Vc(){td++}function Gc(){if(--td>0)return;if(Dr){let t=Dr;for(Dr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let i;for(;Ir;){let t=Ir;for(Ir=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){i||(i=n)}t=e}}if(i)throw i}function nd(i){for(let t=i.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function id(i){let t,e=i.depsTail,n=e;for(;n;){const s=n.prevDep;n.version===-1?(n===e&&(e=s),Wc(n),Sm(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=s}i.deps=t,i.depsTail=e}function Ll(i){for(let t=i.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(sd(t.dep.computed)||t.dep.version!==t.version))return!0;return!!i._dirty}function sd(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===Hr)||(i.globalVersion=Hr,!i.isSSR&&i.flags&128&&(!i.deps&&!i._dirty||!Ll(i))))return;i.flags|=2;const t=i.dep,e=xe,n=Pn;xe=i,Pn=!0;try{nd(i);const s=i.fn(i._value);(t.version===0||zi(s,i._value))&&(i.flags|=128,i._value=s,t.version++)}catch(s){throw t.version++,s}finally{xe=e,Pn=n,id(i),i.flags&=-3}}function Wc(i,t=!1){const{dep:e,prevSub:n,nextSub:s}=i;if(n&&(n.nextSub=s,i.prevSub=void 0),s&&(s.prevSub=n,i.nextSub=void 0),e.subs===i&&(e.subs=n,!n&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Wc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Sm(i){const{prevDep:t,nextDep:e}=i;t&&(t.nextDep=e,i.prevDep=void 0),e&&(e.prevDep=t,i.nextDep=void 0)}let Pn=!0;const rd=[];function yi(){rd.push(Pn),Pn=!1}function Si(){const i=rd.pop();Pn=i===void 0?!0:i}function Du(i){const{cleanup:t}=i;if(i.cleanup=void 0,t){const e=xe;xe=void 0;try{t()}finally{xe=e}}}let Hr=0;class Mm{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class qc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!xe||!Pn||xe===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==xe)e=this.activeLink=new Mm(xe,this),xe.deps?(e.prevDep=xe.depsTail,xe.depsTail.nextDep=e,xe.depsTail=e):xe.deps=xe.depsTail=e,od(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const n=e.nextDep;n.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=n),e.prevDep=xe.depsTail,e.nextDep=void 0,xe.depsTail.nextDep=e,xe.depsTail=e,xe.deps===e&&(xe.deps=n)}return e}trigger(t){this.version++,Hr++,this.notify(t)}notify(t){Vc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Gc()}}}function od(i){if(i.dep.sc++,i.sub.flags&4){const t=i.dep.computed;if(t&&!i.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)od(n)}const e=i.dep.subs;e!==i&&(i.prevSub=e,e&&(e.nextSub=i)),i.dep.subs=i}}const Zo=new WeakMap,ds=Symbol(""),Il=Symbol(""),Vr=Symbol("");function Ge(i,t,e){if(Pn&&xe){let n=Zo.get(i);n||Zo.set(i,n=new Map);let s=n.get(e);s||(n.set(e,s=new qc),s.map=n,s.key=e),s.track()}}function fi(i,t,e,n,s,r){const o=Zo.get(i);if(!o){Hr++;return}const a=l=>{l&&l.trigger()};if(Vc(),t==="clear")o.forEach(a);else{const l=Gt(i),c=l&&ha(e);if(l&&e==="length"){const u=Number(n);o.forEach((f,h)=>{(h==="length"||h===Vr||!$n(h)&&h>=u)&&a(f)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Vr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(ds)),Vs(i)&&a(o.get(Il)));break;case"delete":l||(a(o.get(ds)),Vs(i)&&a(o.get(Il)));break;case"set":Vs(i)&&a(o.get(ds));break}}Gc()}function Em(i,t){const e=Zo.get(i);return e&&e.get(t)}function xs(i){const t=re(i);return t===i?t:(Ge(t,"iterate",Vr),hn(i)?t:t.map(Dn))}function pa(i){return Ge(i=re(i),"iterate",Vr),i}function Fi(i,t){return Mi(i)?$s(vi(i)?Dn(t):t):Dn(t)}const bm={__proto__:null,[Symbol.iterator](){return Ua(this,Symbol.iterator,i=>Fi(this,i))},concat(...i){return xs(this).concat(...i.map(t=>Gt(t)?xs(t):t))},entries(){return Ua(this,"entries",i=>(i[1]=Fi(this,i[1]),i))},every(i,t){return Qn(this,"every",i,t,void 0,arguments)},filter(i,t){return Qn(this,"filter",i,t,e=>e.map(n=>Fi(this,n)),arguments)},find(i,t){return Qn(this,"find",i,t,e=>Fi(this,e),arguments)},findIndex(i,t){return Qn(this,"findIndex",i,t,void 0,arguments)},findLast(i,t){return Qn(this,"findLast",i,t,e=>Fi(this,e),arguments)},findLastIndex(i,t){return Qn(this,"findLastIndex",i,t,void 0,arguments)},forEach(i,t){return Qn(this,"forEach",i,t,void 0,arguments)},includes(...i){return Fa(this,"includes",i)},indexOf(...i){return Fa(this,"indexOf",i)},join(i){return xs(this).join(i)},lastIndexOf(...i){return Fa(this,"lastIndexOf",i)},map(i,t){return Qn(this,"map",i,t,void 0,arguments)},pop(){return fr(this,"pop")},push(...i){return fr(this,"push",i)},reduce(i,...t){return Nu(this,"reduce",i,t)},reduceRight(i,...t){return Nu(this,"reduceRight",i,t)},shift(){return fr(this,"shift")},some(i,t){return Qn(this,"some",i,t,void 0,arguments)},splice(...i){return fr(this,"splice",i)},toReversed(){return xs(this).toReversed()},toSorted(i){return xs(this).toSorted(i)},toSpliced(...i){return xs(this).toSpliced(...i)},unshift(...i){return fr(this,"unshift",i)},values(){return Ua(this,"values",i=>Fi(this,i))}};function Ua(i,t,e){const n=pa(i),s=n[t]();return n!==i&&!hn(i)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const wm=Array.prototype;function Qn(i,t,e,n,s,r){const o=pa(i),a=o!==i&&!hn(i),l=o[t];if(l!==wm[t]){const f=l.apply(i,r);return a?Dn(f):f}let c=e;o!==i&&(a?c=function(f,h){return e.call(this,Fi(i,f),h,i)}:e.length>2&&(c=function(f,h){return e.call(this,f,h,i)}));const u=l.call(o,c,n);return a&&s?s(u):u}function Nu(i,t,e,n){const s=pa(i);let r=e;return s!==i&&(hn(i)?e.length>3&&(r=function(o,a,l){return e.call(this,o,a,l,i)}):r=function(o,a,l){return e.call(this,o,Fi(i,a),l,i)}),s[t](r,...n)}function Fa(i,t,e){const n=re(i);Ge(n,"iterate",Vr);const s=n[t](...e);return(s===-1||s===!1)&&ga(e[0])?(e[0]=re(e[0]),n[t](...e)):s}function fr(i,t,e=[]){yi(),Vc();const n=re(i)[t].apply(i,e);return Gc(),Si(),n}const Tm=Oc("__proto__,__v_isRef,__isVue"),ad=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter($n));function Am(i){$n(i)||(i=String(i));const t=re(this);return Ge(t,"has",i),t.hasOwnProperty(i)}class ld{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,n){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return n===(s?r?Om:fd:r?hd:ud).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=Gt(t);if(!s){let l;if(o&&(l=bm[e]))return l;if(e==="hasOwnProperty")return Am}const a=Reflect.get(t,e,we(t)?t:n);if(($n(e)?ad.has(e):Tm(e))||(s||Ge(t,"get",e),r))return a;if(we(a)){const l=o&&ha(e)?a:a.value;return s&&ge(l)?Nl(l):l}return ge(a)?s?Nl(a):ma(a):a}}class cd extends ld{constructor(t=!1){super(!1,t)}set(t,e,n,s){let r=t[e];const o=Gt(t)&&ha(e);if(!this._isShallow){const c=Mi(r);if(!hn(n)&&!Mi(n)&&(r=re(r),n=re(n)),!o&&we(r)&&!we(n))return c||(r.value=n),!0}const a=o?Number(e)<t.length:ue(t,e),l=Reflect.set(t,e,n,we(t)?t:s);return t===re(s)&&(a?zi(n,r)&&fi(t,"set",e,n):fi(t,"add",e,n)),l}deleteProperty(t,e){const n=ue(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&fi(t,"delete",e,void 0),s}has(t,e){const n=Reflect.has(t,e);return(!$n(e)||!ad.has(e))&&Ge(t,"has",e),n}ownKeys(t){return Ge(t,"iterate",Gt(t)?"length":ds),Reflect.ownKeys(t)}}class Cm extends ld{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Rm=new cd,Pm=new Cm,Lm=new cd(!0);const Dl=i=>i,so=i=>Reflect.getPrototypeOf(i);function Im(i,t,e){return function(...n){const s=this.__v_raw,r=re(s),o=Vs(r),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=s[i](...n),u=e?Dl:t?$s:Dn;return!t&&Ge(r,"iterate",l?Il:ds),Oe(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function ro(i){return function(...t){return i==="delete"?!1:i==="clear"?void 0:this}}function Dm(i,t){const e={get(s){const r=this.__v_raw,o=re(r),a=re(s);i||(zi(s,a)&&Ge(o,"get",s),Ge(o,"get",a));const{has:l}=so(o),c=t?Dl:i?$s:Dn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!i&&Ge(re(s),"iterate",ds),s.size},has(s){const r=this.__v_raw,o=re(r),a=re(s);return i||(zi(s,a)&&Ge(o,"has",s),Ge(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=re(a),c=t?Dl:i?$s:Dn;return!i&&Ge(l,"iterate",ds),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return Oe(e,i?{add:ro("add"),set:ro("set"),delete:ro("delete"),clear:ro("clear")}:{add(s){!t&&!hn(s)&&!Mi(s)&&(s=re(s));const r=re(this);return so(r).has.call(r,s)||(r.add(s),fi(r,"add",s,s)),this},set(s,r){!t&&!hn(r)&&!Mi(r)&&(r=re(r));const o=re(this),{has:a,get:l}=so(o);let c=a.call(o,s);c||(s=re(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?zi(r,u)&&fi(o,"set",s,r):fi(o,"add",s,r),this},delete(s){const r=re(this),{has:o,get:a}=so(r);let l=o.call(r,s);l||(s=re(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&fi(r,"delete",s,void 0),c},clear(){const s=re(this),r=s.size!==0,o=s.clear();return r&&fi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Im(s,i,t)}),e}function Xc(i,t){const e=Dm(i,t);return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(ue(e,s)&&s in n?e:n,s,r)}const Nm={get:Xc(!1,!1)},Um={get:Xc(!1,!0)},Fm={get:Xc(!0,!1)};const ud=new WeakMap,hd=new WeakMap,fd=new WeakMap,Om=new WeakMap;function Bm(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zm(i){return i.__v_skip||!Object.isExtensible(i)?0:Bm(um(i))}function ma(i){return Mi(i)?i:Yc(i,!1,Rm,Nm,ud)}function km(i){return Yc(i,!1,Lm,Um,hd)}function Nl(i){return Yc(i,!0,Pm,Fm,fd)}function Yc(i,t,e,n,s){if(!ge(i)||i.__v_raw&&!(t&&i.__v_isReactive))return i;const r=zm(i);if(r===0)return i;const o=s.get(i);if(o)return o;const a=new Proxy(i,r===2?n:e);return s.set(i,a),a}function vi(i){return Mi(i)?vi(i.__v_raw):!!(i&&i.__v_isReactive)}function Mi(i){return!!(i&&i.__v_isReadonly)}function hn(i){return!!(i&&i.__v_isShallow)}function ga(i){return i?!!i.__v_raw:!1}function re(i){const t=i&&i.__v_raw;return t?re(t):i}function $c(i){return!ue(i,"__v_skip")&&Object.isExtensible(i)&&Xf(i,"__v_skip",!0),i}const Dn=i=>ge(i)?ma(i):i,$s=i=>ge(i)?Nl(i):i;function we(i){return i?i.__v_isRef===!0:!1}function Ue(i){return Hm(i,!1)}function Hm(i,t){return we(i)?i:new Vm(i,t)}class Vm{constructor(t,e){this.dep=new qc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:re(t),this._value=e?t:Dn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,n=this.__v_isShallow||hn(t)||Mi(t);t=n?t:re(t),zi(t,e)&&(this._rawValue=t,this._value=n?t:Dn(t),this.dep.trigger())}}function kt(i){return we(i)?i.value:i}const Gm={get:(i,t,e)=>t==="__v_raw"?i:kt(Reflect.get(i,t,e)),set:(i,t,e,n)=>{const s=i[t];return we(s)&&!we(e)?(s.value=e,!0):Reflect.set(i,t,e,n)}};function dd(i){return vi(i)?i:new Proxy(i,Gm)}function Wm(i){const t=Gt(i)?new Array(i.length):{};for(const e in i)t[e]=Xm(i,e);return t}class qm{constructor(t,e,n){this._object=t,this._key=e,this._defaultValue=n,this.__v_isRef=!0,this._value=void 0,this._raw=re(t);let s=!0,r=t;if(!Gt(t)||!ha(String(e)))do s=!ga(r)||hn(r);while(s&&(r=r.__v_raw));this._shallow=s}get value(){let t=this._object[this._key];return this._shallow&&(t=kt(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&we(this._raw[this._key])){const e=this._object[this._key];if(we(e)){e.value=t;return}}this._object[this._key]=t}get dep(){return Em(this._raw,this._key)}}function Xm(i,t,e){return new qm(i,t,e)}class Ym{constructor(t,e,n){this.fn=t,this.setter=e,this._value=void 0,this.dep=new qc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Hr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&xe!==this)return ed(this,!0),!0}get value(){const t=this.dep.track();return sd(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function $m(i,t,e=!1){let n,s;return Yt(i)?n=i:(n=i.get,s=i.set),new Ym(n,s,e)}const oo={},Jo=new WeakMap;let ss;function jm(i,t=!1,e=ss){if(e){let n=Jo.get(e);n||Jo.set(e,n=[]),n.push(i)}}function Km(i,t,e=_e){const{immediate:n,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=x=>s?x:hn(x)||s===!1||s===0?di(x,1):di(x);let u,f,h,d,g=!1,_=!1;if(we(i)?(f=()=>i.value,g=hn(i)):vi(i)?(f=()=>c(i),g=!0):Gt(i)?(_=!0,g=i.some(x=>vi(x)||hn(x)),f=()=>i.map(x=>{if(we(x))return x.value;if(vi(x))return c(x);if(Yt(x))return l?l(x,2):x()})):Yt(i)?t?f=l?()=>l(i,2):i:f=()=>{if(h){yi();try{h()}finally{Si()}}const x=ss;ss=u;try{return l?l(i,3,[d]):i(d)}finally{ss=x}}:f=Wn,t&&s){const x=f,L=s===!0?1/0:s;f=()=>di(x(),L)}const m=Jf(),p=()=>{u.stop(),m&&m.active&&zc(m.effects,u)};if(r&&t){const x=t;t=(...L)=>{x(...L),p()}}let v=_?new Array(i.length).fill(oo):oo;const w=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(t){const L=u.run();if(s||g||(_?L.some((P,R)=>zi(P,v[R])):zi(L,v))){h&&h();const P=ss;ss=u;try{const R=[L,v===oo?void 0:_&&v[0]===oo?[]:v,d];v=L,l?l(t,3,R):t(...R)}finally{ss=P}}}else u.run()};return a&&a(w),u=new Qf(f),u.scheduler=o?()=>o(w,!1):w,d=x=>jm(x,!1,u),h=u.onStop=()=>{const x=Jo.get(u);if(x){if(l)l(x,4);else for(const L of x)L();Jo.delete(u)}},t?n?w(!0):v=u.run():o?o(w.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function di(i,t=1/0,e){if(t<=0||!ge(i)||i.__v_skip||(e=e||new Map,(e.get(i)||0)>=t))return i;if(e.set(i,t),t--,we(i))di(i.value,t,e);else if(Gt(i))for(let n=0;n<i.length;n++)di(i[n],t,e);else if(Hf(i)||Vs(i))i.forEach(n=>{di(n,t,e)});else if(Wf(i)){for(const n in i)di(i[n],t,e);for(const n of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,n)&&di(i[n],t,e)}return i}/**
* @vue/runtime-core v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $r(i,t,e,n){try{return n?i(...n):i()}catch(s){_a(s,t,e)}}function jn(i,t,e,n){if(Yt(i)){const s=$r(i,t,e,n);return s&&Vf(s)&&s.catch(r=>{_a(r,t,e)}),s}if(Gt(i)){const s=[];for(let r=0;r<i.length;r++)s.push(jn(i[r],t,e,n));return s}}function _a(i,t,e,n=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||_e;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](i,l,c)===!1)return}a=a.parent}if(r){yi(),$r(r,null,10,[i,l,c]),Si();return}}Zm(i,e,s,n,o)}function Zm(i,t,e,n=!0,s=!1){if(s)throw i;console.error(i)}const $e=[];let zn=-1;const Gs=[];let Oi=null,Os=0;const pd=Promise.resolve();let Qo=null;function md(i){const t=Qo||pd;return i?t.then(this?i.bind(this):i):t}function Jm(i){let t=zn+1,e=$e.length;for(;t<e;){const n=t+e>>>1,s=$e[n],r=Gr(s);r<i||r===i&&s.flags&2?t=n+1:e=n}return t}function jc(i){if(!(i.flags&1)){const t=Gr(i),e=$e[$e.length-1];!e||!(i.flags&2)&&t>=Gr(e)?$e.push(i):$e.splice(Jm(t),0,i),i.flags|=1,gd()}}function gd(){Qo||(Qo=pd.then(vd))}function Qm(i){Gt(i)?Gs.push(...i):Oi&&i.id===-1?Oi.splice(Os+1,0,i):i.flags&1||(Gs.push(i),i.flags|=1),gd()}function Uu(i,t,e=zn+1){for(;e<$e.length;e++){const n=$e[e];if(n&&n.flags&2){if(i&&n.id!==i.uid)continue;$e.splice(e,1),e--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function _d(i){if(Gs.length){const t=[...new Set(Gs)].sort((e,n)=>Gr(e)-Gr(n));if(Gs.length=0,Oi){Oi.push(...t);return}for(Oi=t,Os=0;Os<Oi.length;Os++){const e=Oi[Os];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Oi=null,Os=0}}const Gr=i=>i.id==null?i.flags&2?-1:1/0:i.id;function vd(i){try{for(zn=0;zn<$e.length;zn++){const t=$e[zn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),$r(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;zn<$e.length;zn++){const t=$e[zn];t&&(t.flags&=-2)}zn=-1,$e.length=0,_d(),Qo=null,($e.length||Gs.length)&&vd()}}let vn=null,xd=null;function ta(i){const t=vn;return vn=i,xd=i&&i.type.__scopeId||null,t}function tg(i,t=vn,e){if(!t||i._n)return i;const n=(...s)=>{n._d&&Xu(-1);const r=ta(t);let o;try{o=i(...s)}finally{ta(r),n._d&&Xu(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function eg(i,t){if(vn===null)return i;const e=Ma(vn),n=i.dirs||(i.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=_e]=t[s];r&&(Yt(r)&&(r={mounted:r,updated:r}),r.deep&&di(o),n.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return i}function ji(i,t,e,n){const s=i.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[n];l&&(yi(),jn(l,e,8,[i.el,a,i,t]),Si())}}function ng(i,t){if(je){let e=je.provides;const n=je.parent&&je.parent.provides;n===e&&(e=je.provides=Object.create(n)),e[i]=t}}function Nr(i,t,e=!1){const n=Yd();if(n||ps){let s=ps?ps._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(s&&i in s)return s[i];if(arguments.length>1)return e&&Yt(t)?t.call(n&&n.proxy):t}}function ig(){return!!(Yd()||ps)}const sg=Symbol.for("v-scx"),rg=()=>Nr(sg);function Ws(i,t,e){return yd(i,t,e)}function yd(i,t,e=_e){const{immediate:n,deep:s,flush:r,once:o}=e,a=Oe({},e),l=t&&n||!t&&r!=="post";let c;if(qr){if(r==="sync"){const d=rg();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Wn,d.resume=Wn,d.pause=Wn,d}}const u=je;a.call=(d,g,_)=>jn(d,u,g,_);let f=!1;r==="post"?a.scheduler=d=>{en(d,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():jc(d)}),a.augmentJob=d=>{t&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=Km(i,t,a);return qr&&(c?c.push(h):l&&h()),h}function og(i,t,e){const n=this.proxy,s=Pe(i)?i.includes(".")?Sd(n,i):()=>n[i]:i.bind(n,n);let r;Yt(t)?r=t:(r=t.handler,e=t);const o=jr(this),a=yd(s,r.bind(n),e);return o(),a}function Sd(i,t){const e=t.split(".");return()=>{let n=i;for(let s=0;s<e.length&&n;s++)n=n[e[s]];return n}}const ag=Symbol("_vte"),lg=i=>i.__isTeleport,cg=Symbol("_leaveCb");function Kc(i,t){i.shapeFlag&6&&i.component?(i.transition=t,Kc(i.component.subTree,t)):i.shapeFlag&128?(i.ssContent.transition=t.clone(i.ssContent),i.ssFallback.transition=t.clone(i.ssFallback)):i.transition=t}function sr(i,t){return Yt(i)?Oe({name:i.name},t,{setup:i}):i}function Md(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}function Fu(i,t){let e;return!!((e=Object.getOwnPropertyDescriptor(i,t))&&!e.configurable)}const ea=new WeakMap;function Ur(i,t,e,n,s=!1){if(Gt(i)){i.forEach((_,m)=>Ur(_,t&&(Gt(t)?t[m]:t),e,n,s));return}if(Fr(n)&&!s){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Ur(i,t,e,n.component.subTree);return}const r=n.shapeFlag&4?Ma(n.component):n.el,o=s?null:r,{i:a,r:l}=i,c=t&&t.r,u=a.refs===_e?a.refs={}:a.refs,f=a.setupState,h=re(f),d=f===_e?kf:_=>Fu(u,_)?!1:ue(h,_),g=(_,m)=>!(m&&Fu(u,m));if(c!=null&&c!==l){if(Ou(t),Pe(c))u[c]=null,d(c)&&(f[c]=null);else if(we(c)){const _=t;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(Yt(l))$r(l,a,12,[o,u]);else{const _=Pe(l),m=we(l);if(_||m){const p=()=>{if(i.f){const v=_?d(l)?f[l]:u[l]:g()||!i.k?l.value:u[i.k];if(s)Gt(v)&&zc(v,r);else if(Gt(v))v.includes(r)||v.push(r);else if(_)u[l]=[r],d(l)&&(f[l]=u[l]);else{const w=[r];g(l,i.k)&&(l.value=w),i.k&&(u[i.k]=w)}}else _?(u[l]=o,d(l)&&(f[l]=o)):m&&(g(l,i.k)&&(l.value=o),i.k&&(u[i.k]=o))};if(o){const v=()=>{p(),ea.delete(i)};v.id=-1,ea.set(i,v),en(v,e)}else Ou(i),p()}}}function Ou(i){const t=ea.get(i);t&&(t.flags|=8,ea.delete(i))}da().requestIdleCallback;da().cancelIdleCallback;const Fr=i=>!!i.type.__asyncLoader,Ed=i=>i.type.__isKeepAlive;function ug(i,t){bd(i,"a",t)}function hg(i,t){bd(i,"da",t)}function bd(i,t,e=je){const n=i.__wdc||(i.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(va(t,n,e),e){let s=e.parent;for(;s&&s.parent;)Ed(s.parent.vnode)&&fg(n,t,e,s),s=s.parent}}function fg(i,t,e,n){const s=va(t,i,n,!0);Td(()=>{zc(n[t],s)},e)}function va(i,t,e=je,n=!1){if(e){const s=e[i]||(e[i]=[]),r=t.__weh||(t.__weh=(...o)=>{yi();const a=jr(e),l=jn(t,e,i,o);return a(),Si(),l});return n?s.unshift(r):s.push(r),r}}const bi=i=>(t,e=je)=>{(!qr||i==="sp")&&va(i,(...n)=>t(...n),e)},dg=bi("bm"),xa=bi("m"),pg=bi("bu"),mg=bi("u"),wd=bi("bum"),Td=bi("um"),gg=bi("sp"),_g=bi("rtg"),vg=bi("rtc");function xg(i,t=je){va("ec",i,t)}const yg=Symbol.for("v-ndc");function Ve(i,t,e,n){let s;const r=e,o=Gt(i);if(o||Pe(i)){const a=o&&vi(i);let l=!1,c=!1;a&&(l=!hn(i),c=Mi(i),i=pa(i)),s=new Array(i.length);for(let u=0,f=i.length;u<f;u++)s[u]=t(l?c?$s(Dn(i[u])):Dn(i[u]):i[u],u,void 0,r)}else if(typeof i=="number"){s=new Array(i);for(let a=0;a<i;a++)s[a]=t(a+1,a,void 0,r)}else if(ge(i))if(i[Symbol.iterator])s=Array.from(i,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(i);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(i[u],u,l,r)}}else s=[];return s}const Ul=i=>i?$d(i)?Ma(i):Ul(i.parent):null,Or=Oe(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Ul(i.parent),$root:i=>Ul(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>Cd(i),$forceUpdate:i=>i.f||(i.f=()=>{jc(i.update)}),$nextTick:i=>i.n||(i.n=md.bind(i.proxy)),$watch:i=>og.bind(i)}),Oa=(i,t)=>i!==_e&&!i.__isScriptSetup&&ue(i,t),Sg={get({_:i},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:n,data:s,props:r,accessCache:o,type:a,appContext:l}=i;if(t[0]!=="$"){const h=o[t];if(h!==void 0)switch(h){case 1:return n[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Oa(n,t))return o[t]=1,n[t];if(s!==_e&&ue(s,t))return o[t]=2,s[t];if(ue(r,t))return o[t]=3,r[t];if(e!==_e&&ue(e,t))return o[t]=4,e[t];Fl&&(o[t]=0)}}const c=Or[t];let u,f;if(c)return t==="$attrs"&&Ge(i.attrs,"get",""),c(i);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==_e&&ue(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,ue(f,t))return f[t]},set({_:i},t,e){const{data:n,setupState:s,ctx:r}=i;return Oa(s,t)?(s[t]=e,!0):n!==_e&&ue(n,t)?(n[t]=e,!0):ue(i.props,t)||t[0]==="$"&&t.slice(1)in i?!1:(r[t]=e,!0)},has({_:{data:i,setupState:t,accessCache:e,ctx:n,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||i!==_e&&a[0]!=="$"&&ue(i,a)||Oa(t,a)||ue(r,a)||ue(n,a)||ue(Or,a)||ue(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(i,t,e){return e.get!=null?i._.accessCache[t]=0:ue(e,"value")&&this.set(i,t,e.value,null),Reflect.defineProperty(i,t,e)}};function Bu(i){return Gt(i)?i.reduce((t,e)=>(t[e]=null,t),{}):i}let Fl=!0;function Mg(i){const t=Cd(i),e=i.proxy,n=i.ctx;Fl=!1,t.beforeCreate&&zu(t.beforeCreate,i,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:v,destroyed:w,unmounted:x,render:L,renderTracked:P,renderTriggered:R,errorCaptured:I,serverPrefetch:b,expose:S,inheritAttrs:D,components:B,directives:N,filters:k}=t;if(c&&Eg(c,n,null),o)for(const Y in o){const z=o[Y];Yt(z)&&(n[Y]=z.bind(e))}if(s){const Y=s.call(e,e);ge(Y)&&(i.data=ma(Y))}if(Fl=!0,r)for(const Y in r){const z=r[Y],ot=Yt(z)?z.bind(e,e):Yt(z.get)?z.get.bind(e,e):Wn,_t=!Yt(z)&&Yt(z.set)?z.set.bind(e):Wn,yt=nn({get:ot,set:_t});Object.defineProperty(n,Y,{enumerable:!0,configurable:!0,get:()=>yt.value,set:dt=>yt.value=dt})}if(a)for(const Y in a)Ad(a[Y],n,e,Y);if(l){const Y=Yt(l)?l.call(e):l;Reflect.ownKeys(Y).forEach(z=>{ng(z,Y[z])})}u&&zu(u,i,"c");function F(Y,z){Gt(z)?z.forEach(ot=>Y(ot.bind(e))):z&&Y(z.bind(e))}if(F(dg,f),F(xa,h),F(pg,d),F(mg,g),F(ug,_),F(hg,m),F(xg,I),F(vg,P),F(_g,R),F(wd,v),F(Td,x),F(gg,b),Gt(S))if(S.length){const Y=i.exposed||(i.exposed={});S.forEach(z=>{Object.defineProperty(Y,z,{get:()=>e[z],set:ot=>e[z]=ot,enumerable:!0})})}else i.exposed||(i.exposed={});L&&i.render===Wn&&(i.render=L),D!=null&&(i.inheritAttrs=D),B&&(i.components=B),N&&(i.directives=N),b&&Md(i)}function Eg(i,t,e=Wn){Gt(i)&&(i=Ol(i));for(const n in i){const s=i[n];let r;ge(s)?"default"in s?r=Nr(s.from||n,s.default,!0):r=Nr(s.from||n):r=Nr(s),we(r)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[n]=r}}function zu(i,t,e){jn(Gt(i)?i.map(n=>n.bind(t.proxy)):i.bind(t.proxy),t,e)}function Ad(i,t,e,n){let s=n.includes(".")?Sd(e,n):()=>e[n];if(Pe(i)){const r=t[i];Yt(r)&&Ws(s,r)}else if(Yt(i))Ws(s,i.bind(e));else if(ge(i))if(Gt(i))i.forEach(r=>Ad(r,t,e,n));else{const r=Yt(i.handler)?i.handler.bind(e):t[i.handler];Yt(r)&&Ws(s,r,i)}}function Cd(i){const t=i.type,{mixins:e,extends:n}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=i.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!n?l=t:(l={},s.length&&s.forEach(c=>na(l,c,o,!0)),na(l,t,o)),ge(t)&&r.set(t,l),l}function na(i,t,e,n=!1){const{mixins:s,extends:r}=t;r&&na(i,r,e,!0),s&&s.forEach(o=>na(i,o,e,!0));for(const o in t)if(!(n&&o==="expose")){const a=bg[o]||e&&e[o];i[o]=a?a(i[o],t[o]):t[o]}return i}const bg={data:ku,props:Hu,emits:Hu,methods:Tr,computed:Tr,beforeCreate:Xe,created:Xe,beforeMount:Xe,mounted:Xe,beforeUpdate:Xe,updated:Xe,beforeDestroy:Xe,beforeUnmount:Xe,destroyed:Xe,unmounted:Xe,activated:Xe,deactivated:Xe,errorCaptured:Xe,serverPrefetch:Xe,components:Tr,directives:Tr,watch:Tg,provide:ku,inject:wg};function ku(i,t){return t?i?function(){return Oe(Yt(i)?i.call(this,this):i,Yt(t)?t.call(this,this):t)}:t:i}function wg(i,t){return Tr(Ol(i),Ol(t))}function Ol(i){if(Gt(i)){const t={};for(let e=0;e<i.length;e++)t[i[e]]=i[e];return t}return i}function Xe(i,t){return i?[...new Set([].concat(i,t))]:t}function Tr(i,t){return i?Oe(Object.create(null),i,t):t}function Hu(i,t){return i?Gt(i)&&Gt(t)?[...new Set([...i,...t])]:Oe(Object.create(null),Bu(i),Bu(t??{})):t}function Tg(i,t){if(!i)return t;if(!t)return i;const e=Oe(Object.create(null),i);for(const n in t)e[n]=Xe(i[n],t[n]);return e}function Rd(){return{app:null,config:{isNativeTag:kf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ag=0;function Cg(i,t){return function(n,s=null){Yt(n)||(n=Oe({},n)),s!=null&&!ge(s)&&(s=null);const r=Rd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Ag++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:r_,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&Yt(u.install)?(o.add(u),u.install(c,...f)):Yt(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Ln(n,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),i(d,u,h),l=!0,c._container=u,u.__vue_app__=c,Ma(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(jn(a,c._instance,16),i(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=ps;ps=c;try{return u()}finally{ps=f}}};return c}}let ps=null;const Rg=(i,t)=>t==="modelValue"||t==="model-value"?i.modelModifiers:i[`${t}Modifiers`]||i[`${Gi(t)}Modifiers`]||i[`${Yi(t)}Modifiers`];function Pg(i,t,...e){if(i.isUnmounted)return;const n=i.vnode.props||_e;let s=e;const r=t.startsWith("update:"),o=r&&Rg(n,t.slice(7));o&&(o.trim&&(s=e.map(u=>Pe(u)?u.trim():u)),o.number&&(s=e.map(kc)));let a,l=n[a=Ia(t)]||n[a=Ia(Gi(t))];!l&&r&&(l=n[a=Ia(Yi(t))]),l&&jn(l,i,6,s);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,jn(c,i,6,s)}}const Lg=new WeakMap;function Pd(i,t,e=!1){const n=e?Lg:t.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let o={},a=!1;if(!Yt(i)){const l=c=>{const u=Pd(c,t,!0);u&&(a=!0,Oe(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!r&&!a?(ge(i)&&n.set(i,null),null):(Gt(r)?r.forEach(l=>o[l]=null):Oe(o,r),ge(i)&&n.set(i,o),o)}function ya(i,t){return!i||!ua(t)?!1:(t=t.slice(2).replace(/Once$/,""),ue(i,t[0].toLowerCase()+t.slice(1))||ue(i,Yi(t))||ue(i,t))}function Vu(i){const{type:t,vnode:e,proxy:n,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=i,m=ta(i);let p,v;try{if(e.shapeFlag&4){const x=s||n,L=x;p=kn(c.call(L,x,u,f,d,h,g)),v=a}else{const x=t;p=kn(x.length>1?x(f,{attrs:a,slots:o,emit:l}):x(f,null)),v=t.props?a:Ig(a)}}catch(x){Br.length=0,_a(x,i,1),p=Ln(Wi)}let w=p;if(v&&_!==!1){const x=Object.keys(v),{shapeFlag:L}=w;x.length&&L&7&&(r&&x.some(Bc)&&(v=Dg(v,r)),w=js(w,v,!1,!0))}return e.dirs&&(w=js(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(e.dirs):e.dirs),e.transition&&Kc(w,e.transition),p=w,ta(m),p}const Ig=i=>{let t;for(const e in i)(e==="class"||e==="style"||ua(e))&&((t||(t={}))[e]=i[e]);return t},Dg=(i,t)=>{const e={};for(const n in i)(!Bc(n)||!(n.slice(9)in t))&&(e[n]=i[n]);return e};function Ng(i,t,e){const{props:n,children:s,component:r}=i,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return n?Gu(n,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(Ld(o,n,h)&&!ya(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Gu(n,o,c):!0:!!o;return!1}function Gu(i,t,e){const n=Object.keys(t);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(Ld(t,i,r)&&!ya(e,r))return!0}return!1}function Ld(i,t,e){const n=i[e],s=t[e];return e==="style"&&ge(n)&&ge(s)?!Hc(n,s):n!==s}function Ug({vnode:i,parent:t},e){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=t.vnode).el=e,t=t.parent;else break}}const Id={},Dd=()=>Object.create(Id),Nd=i=>Object.getPrototypeOf(i)===Id;function Fg(i,t,e,n=!1){const s={},r=Dd();i.propsDefaults=Object.create(null),Ud(i,t,s,r);for(const o in i.propsOptions[0])o in s||(s[o]=void 0);e?i.props=n?s:km(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function Og(i,t,e,n){const{props:s,attrs:r,vnode:{patchFlag:o}}=i,a=re(s),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ya(i.emitsOptions,h))continue;const d=t[h];if(l)if(ue(r,h))d!==r[h]&&(r[h]=d,c=!0);else{const g=Gi(h);s[g]=Bl(l,a,g,d,i,!1)}else d!==r[h]&&(r[h]=d,c=!0)}}}else{Ud(i,t,s,r)&&(c=!0);let u;for(const f in a)(!t||!ue(t,f)&&((u=Yi(f))===f||!ue(t,u)))&&(l?e&&(e[f]!==void 0||e[u]!==void 0)&&(s[f]=Bl(l,a,f,void 0,i,!0)):delete s[f]);if(r!==a)for(const f in r)(!t||!ue(t,f))&&(delete r[f],c=!0)}c&&fi(i.attrs,"set","")}function Ud(i,t,e,n){const[s,r]=i.propsOptions;let o=!1,a;if(t)for(let l in t){if(Lr(l))continue;const c=t[l];let u;s&&ue(s,u=Gi(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:ya(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=re(e),c=a||_e;for(let u=0;u<r.length;u++){const f=r[u];e[f]=Bl(s,l,f,c[f],i,!ue(c,f))}}return o}function Bl(i,t,e,n,s,r){const o=i[e];if(o!=null){const a=ue(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Yt(l)){const{propsDefaults:c}=s;if(e in c)n=c[e];else{const u=jr(s);n=c[e]=l.call(null,t),u()}}else n=l;s.ce&&s.ce._setProp(e,n)}o[0]&&(r&&!a?n=!1:o[1]&&(n===""||n===Yi(e))&&(n=!0))}return n}const Bg=new WeakMap;function Fd(i,t,e=!1){const n=e?Bg:t.propsCache,s=n.get(i);if(s)return s;const r=i.props,o={},a=[];let l=!1;if(!Yt(i)){const u=f=>{l=!0;const[h,d]=Fd(f,t,!0);Oe(o,h),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!r&&!l)return ge(i)&&n.set(i,Hs),Hs;if(Gt(r))for(let u=0;u<r.length;u++){const f=Gi(r[u]);Wu(f)&&(o[f]=_e)}else if(r)for(const u in r){const f=Gi(u);if(Wu(f)){const h=r[u],d=o[f]=Gt(h)||Yt(h)?{type:h}:Oe({},h),g=d.type;let _=!1,m=!0;if(Gt(g))for(let p=0;p<g.length;++p){const v=g[p],w=Yt(v)&&v.name;if(w==="Boolean"){_=!0;break}else w==="String"&&(m=!1)}else _=Yt(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||ue(d,"default"))&&a.push(f)}}const c=[o,a];return ge(i)&&n.set(i,c),c}function Wu(i){return i[0]!=="$"&&!Lr(i)}const Zc=i=>i==="_"||i==="_ctx"||i==="$stable",Jc=i=>Gt(i)?i.map(kn):[kn(i)],zg=(i,t,e)=>{if(t._n)return t;const n=tg((...s)=>Jc(t(...s)),e);return n._c=!1,n},Od=(i,t,e)=>{const n=i._ctx;for(const s in i){if(Zc(s))continue;const r=i[s];if(Yt(r))t[s]=zg(s,r,n);else if(r!=null){const o=Jc(r);t[s]=()=>o}}},Bd=(i,t)=>{const e=Jc(t);i.slots.default=()=>e},zd=(i,t,e)=>{for(const n in t)(e||!Zc(n))&&(i[n]=t[n])},kg=(i,t,e)=>{const n=i.slots=Dd();if(i.vnode.shapeFlag&32){const s=t._;s?(zd(n,t,e),e&&Xf(n,"_",s,!0)):Od(t,n)}else t&&Bd(i,t)},Hg=(i,t,e)=>{const{vnode:n,slots:s}=i;let r=!0,o=_e;if(n.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:zd(s,t,e):(r=!t.$stable,Od(t,s)),o=t}else t&&(Bd(i,t),o={default:1});if(r)for(const a in s)!Zc(a)&&o[a]==null&&delete s[a]},en=Xg;function Vg(i){return Gg(i)}function Gg(i,t){const e=da();e.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Wn,insertStaticContent:g}=i,_=(C,U,A,at=null,Q=null,tt=null,st=void 0,ut=null,nt=!!U.dynamicChildren)=>{if(C===U)return;C&&!dr(C,U)&&(at=$(C),dt(C,Q,tt,!0),C=null),U.patchFlag===-2&&(nt=!1,U.dynamicChildren=null);const{type:M,ref:y,shapeFlag:O}=U;switch(M){case Sa:m(C,U,A,at);break;case Wi:p(C,U,A,at);break;case za:C==null&&v(U,A,at,st);break;case he:B(C,U,A,at,Q,tt,st,ut,nt);break;default:O&1?L(C,U,A,at,Q,tt,st,ut,nt):O&6?N(C,U,A,at,Q,tt,st,ut,nt):(O&64||O&128)&&M.process(C,U,A,at,Q,tt,st,ut,nt,St)}y!=null&&Q?Ur(y,C&&C.ref,tt,U||C,!U):y==null&&C&&C.ref!=null&&Ur(C.ref,null,tt,C,!0)},m=(C,U,A,at)=>{if(C==null)n(U.el=a(U.children),A,at);else{const Q=U.el=C.el;U.children!==C.children&&c(Q,U.children)}},p=(C,U,A,at)=>{C==null?n(U.el=l(U.children||""),A,at):U.el=C.el},v=(C,U,A,at)=>{[C.el,C.anchor]=g(C.children,U,A,at,C.el,C.anchor)},w=({el:C,anchor:U},A,at)=>{let Q;for(;C&&C!==U;)Q=h(C),n(C,A,at),C=Q;n(U,A,at)},x=({el:C,anchor:U})=>{let A;for(;C&&C!==U;)A=h(C),s(C),C=A;s(U)},L=(C,U,A,at,Q,tt,st,ut,nt)=>{if(U.type==="svg"?st="svg":U.type==="math"&&(st="mathml"),C==null)P(U,A,at,Q,tt,st,ut,nt);else{const M=C.el&&C.el._isVueCE?C.el:null;try{M&&M._beginPatch(),b(C,U,Q,tt,st,ut,nt)}finally{M&&M._endPatch()}}},P=(C,U,A,at,Q,tt,st,ut)=>{let nt,M;const{props:y,shapeFlag:O,transition:X,dirs:K}=C;if(nt=C.el=o(C.type,tt,y&&y.is,y),O&8?u(nt,C.children):O&16&&I(C.children,nt,null,at,Q,Ba(C,tt),st,ut),K&&ji(C,null,at,"created"),R(nt,C,C.scopeId,st,at),y){for(const xt in y)xt!=="value"&&!Lr(xt)&&r(nt,xt,null,y[xt],tt,at);"value"in y&&r(nt,"value",null,y.value,tt),(M=y.onVnodeBeforeMount)&&Un(M,at,C)}K&&ji(C,null,at,"beforeMount");const j=Wg(Q,X);j&&X.beforeEnter(nt),n(nt,U,A),((M=y&&y.onVnodeMounted)||j||K)&&en(()=>{M&&Un(M,at,C),j&&X.enter(nt),K&&ji(C,null,at,"mounted")},Q)},R=(C,U,A,at,Q)=>{if(A&&d(C,A),at)for(let tt=0;tt<at.length;tt++)d(C,at[tt]);if(Q){let tt=Q.subTree;if(U===tt||Gd(tt.type)&&(tt.ssContent===U||tt.ssFallback===U)){const st=Q.vnode;R(C,st,st.scopeId,st.slotScopeIds,Q.parent)}}},I=(C,U,A,at,Q,tt,st,ut,nt=0)=>{for(let M=nt;M<C.length;M++){const y=C[M]=ut?hi(C[M]):kn(C[M]);_(null,y,U,A,at,Q,tt,st,ut)}},b=(C,U,A,at,Q,tt,st)=>{const ut=U.el=C.el;let{patchFlag:nt,dynamicChildren:M,dirs:y}=U;nt|=C.patchFlag&16;const O=C.props||_e,X=U.props||_e;let K;if(A&&Ki(A,!1),(K=X.onVnodeBeforeUpdate)&&Un(K,A,U,C),y&&ji(U,C,A,"beforeUpdate"),A&&Ki(A,!0),(O.innerHTML&&X.innerHTML==null||O.textContent&&X.textContent==null)&&u(ut,""),M?S(C.dynamicChildren,M,ut,A,at,Ba(U,Q),tt):st||z(C,U,ut,null,A,at,Ba(U,Q),tt,!1),nt>0){if(nt&16)D(ut,O,X,A,Q);else if(nt&2&&O.class!==X.class&&r(ut,"class",null,X.class,Q),nt&4&&r(ut,"style",O.style,X.style,Q),nt&8){const j=U.dynamicProps;for(let xt=0;xt<j.length;xt++){const ht=j[xt],Mt=O[ht],Ht=X[ht];(Ht!==Mt||ht==="value")&&r(ut,ht,Mt,Ht,Q,A)}}nt&1&&C.children!==U.children&&u(ut,U.children)}else!st&&M==null&&D(ut,O,X,A,Q);((K=X.onVnodeUpdated)||y)&&en(()=>{K&&Un(K,A,U,C),y&&ji(U,C,A,"updated")},at)},S=(C,U,A,at,Q,tt,st)=>{for(let ut=0;ut<U.length;ut++){const nt=C[ut],M=U[ut],y=nt.el&&(nt.type===he||!dr(nt,M)||nt.shapeFlag&198)?f(nt.el):A;_(nt,M,y,null,at,Q,tt,st,!0)}},D=(C,U,A,at,Q)=>{if(U!==A){if(U!==_e)for(const tt in U)!Lr(tt)&&!(tt in A)&&r(C,tt,U[tt],null,Q,at);for(const tt in A){if(Lr(tt))continue;const st=A[tt],ut=U[tt];st!==ut&&tt!=="value"&&r(C,tt,ut,st,Q,at)}"value"in A&&r(C,"value",U.value,A.value,Q)}},B=(C,U,A,at,Q,tt,st,ut,nt)=>{const M=U.el=C?C.el:a(""),y=U.anchor=C?C.anchor:a("");let{patchFlag:O,dynamicChildren:X,slotScopeIds:K}=U;K&&(ut=ut?ut.concat(K):K),C==null?(n(M,A,at),n(y,A,at),I(U.children||[],A,y,Q,tt,st,ut,nt)):O>0&&O&64&&X&&C.dynamicChildren&&C.dynamicChildren.length===X.length?(S(C.dynamicChildren,X,A,Q,tt,st,ut),(U.key!=null||Q&&U===Q.subTree)&&kd(C,U,!0)):z(C,U,A,y,Q,tt,st,ut,nt)},N=(C,U,A,at,Q,tt,st,ut,nt)=>{U.slotScopeIds=ut,C==null?U.shapeFlag&512?Q.ctx.activate(U,A,at,st,nt):k(U,A,at,Q,tt,st,nt):H(C,U,nt)},k=(C,U,A,at,Q,tt,st)=>{const ut=C.component=Qg(C,at,Q);if(Ed(C)&&(ut.ctx.renderer=St),t_(ut,!1,st),ut.asyncDep){if(Q&&Q.registerDep(ut,F,st),!C.el){const nt=ut.subTree=Ln(Wi);p(null,nt,U,A),C.placeholder=nt.el}}else F(ut,C,U,A,Q,tt,st)},H=(C,U,A)=>{const at=U.component=C.component;if(Ng(C,U,A))if(at.asyncDep&&!at.asyncResolved){Y(at,U,A);return}else at.next=U,at.update();else U.el=C.el,at.vnode=U},F=(C,U,A,at,Q,tt,st)=>{const ut=()=>{if(C.isMounted){let{next:O,bu:X,u:K,parent:j,vnode:xt}=C;{const Tt=Hd(C);if(Tt){O&&(O.el=xt.el,Y(C,O,st)),Tt.asyncDep.then(()=>{en(()=>{C.isUnmounted||M()},Q)});return}}let ht=O,Mt;Ki(C,!1),O?(O.el=xt.el,Y(C,O,st)):O=xt,X&&Oo(X),(Mt=O.props&&O.props.onVnodeBeforeUpdate)&&Un(Mt,j,O,xt),Ki(C,!0);const Ht=Vu(C),pt=C.subTree;C.subTree=Ht,_(pt,Ht,f(pt.el),$(pt),C,Q,tt),O.el=Ht.el,ht===null&&Ug(C,Ht.el),K&&en(K,Q),(Mt=O.props&&O.props.onVnodeUpdated)&&en(()=>Un(Mt,j,O,xt),Q)}else{let O;const{el:X,props:K}=U,{bm:j,m:xt,parent:ht,root:Mt,type:Ht}=C,pt=Fr(U);Ki(C,!1),j&&Oo(j),!pt&&(O=K&&K.onVnodeBeforeMount)&&Un(O,ht,U),Ki(C,!0);{Mt.ce&&Mt.ce._hasShadowRoot()&&Mt.ce._injectChildStyle(Ht);const Tt=C.subTree=Vu(C);_(null,Tt,A,at,C,Q,tt),U.el=Tt.el}if(xt&&en(xt,Q),!pt&&(O=K&&K.onVnodeMounted)){const Tt=U;en(()=>Un(O,ht,Tt),Q)}(U.shapeFlag&256||ht&&Fr(ht.vnode)&&ht.vnode.shapeFlag&256)&&C.a&&en(C.a,Q),C.isMounted=!0,U=A=at=null}};C.scope.on();const nt=C.effect=new Qf(ut);C.scope.off();const M=C.update=nt.run.bind(nt),y=C.job=nt.runIfDirty.bind(nt);y.i=C,y.id=C.uid,nt.scheduler=()=>jc(y),Ki(C,!0),M()},Y=(C,U,A)=>{U.component=C;const at=C.vnode.props;C.vnode=U,C.next=null,Og(C,U.props,at,A),Hg(C,U.children,A),yi(),Uu(C),Si()},z=(C,U,A,at,Q,tt,st,ut,nt=!1)=>{const M=C&&C.children,y=C?C.shapeFlag:0,O=U.children,{patchFlag:X,shapeFlag:K}=U;if(X>0){if(X&128){_t(M,O,A,at,Q,tt,st,ut,nt);return}else if(X&256){ot(M,O,A,at,Q,tt,st,ut,nt);return}}K&8?(y&16&&et(M,Q,tt),O!==M&&u(A,O)):y&16?K&16?_t(M,O,A,at,Q,tt,st,ut,nt):et(M,Q,tt,!0):(y&8&&u(A,""),K&16&&I(O,A,at,Q,tt,st,ut,nt))},ot=(C,U,A,at,Q,tt,st,ut,nt)=>{C=C||Hs,U=U||Hs;const M=C.length,y=U.length,O=Math.min(M,y);let X;for(X=0;X<O;X++){const K=U[X]=nt?hi(U[X]):kn(U[X]);_(C[X],K,A,null,Q,tt,st,ut,nt)}M>y?et(C,Q,tt,!0,!1,O):I(U,A,at,Q,tt,st,ut,nt,O)},_t=(C,U,A,at,Q,tt,st,ut,nt)=>{let M=0;const y=U.length;let O=C.length-1,X=y-1;for(;M<=O&&M<=X;){const K=C[M],j=U[M]=nt?hi(U[M]):kn(U[M]);if(dr(K,j))_(K,j,A,null,Q,tt,st,ut,nt);else break;M++}for(;M<=O&&M<=X;){const K=C[O],j=U[X]=nt?hi(U[X]):kn(U[X]);if(dr(K,j))_(K,j,A,null,Q,tt,st,ut,nt);else break;O--,X--}if(M>O){if(M<=X){const K=X+1,j=K<y?U[K].el:at;for(;M<=X;)_(null,U[M]=nt?hi(U[M]):kn(U[M]),A,j,Q,tt,st,ut,nt),M++}}else if(M>X)for(;M<=O;)dt(C[M],Q,tt,!0),M++;else{const K=M,j=M,xt=new Map;for(M=j;M<=X;M++){const Et=U[M]=nt?hi(U[M]):kn(U[M]);Et.key!=null&&xt.set(Et.key,M)}let ht,Mt=0;const Ht=X-j+1;let pt=!1,Tt=0;const zt=new Array(Ht);for(M=0;M<Ht;M++)zt[M]=0;for(M=K;M<=O;M++){const Et=C[M];if(Mt>=Ht){dt(Et,Q,tt,!0);continue}let Wt;if(Et.key!=null)Wt=xt.get(Et.key);else for(ht=j;ht<=X;ht++)if(zt[ht-j]===0&&dr(Et,U[ht])){Wt=ht;break}Wt===void 0?dt(Et,Q,tt,!0):(zt[Wt-j]=M+1,Wt>=Tt?Tt=Wt:pt=!0,_(Et,U[Wt],A,null,Q,tt,st,ut,nt),Mt++)}const Vt=pt?qg(zt):Hs;for(ht=Vt.length-1,M=Ht-1;M>=0;M--){const Et=j+M,Wt=U[Et],Xt=U[Et+1],fe=Et+1<y?Xt.el||Vd(Xt):at;zt[M]===0?_(null,Wt,A,fe,Q,tt,st,ut,nt):pt&&(ht<0||M!==Vt[ht]?yt(Wt,A,fe,2):ht--)}}},yt=(C,U,A,at,Q=null)=>{const{el:tt,type:st,transition:ut,children:nt,shapeFlag:M}=C;if(M&6){yt(C.component.subTree,U,A,at);return}if(M&128){C.suspense.move(U,A,at);return}if(M&64){st.move(C,U,A,St);return}if(st===he){n(tt,U,A);for(let O=0;O<nt.length;O++)yt(nt[O],U,A,at);n(C.anchor,U,A);return}if(st===za){w(C,U,A);return}if(at!==2&&M&1&&ut)if(at===0)ut.beforeEnter(tt),n(tt,U,A),en(()=>ut.enter(tt),Q);else{const{leave:O,delayLeave:X,afterLeave:K}=ut,j=()=>{C.ctx.isUnmounted?s(tt):n(tt,U,A)},xt=()=>{tt._isLeaving&&tt[cg](!0),O(tt,()=>{j(),K&&K()})};X?X(tt,j,xt):xt()}else n(tt,U,A)},dt=(C,U,A,at=!1,Q=!1)=>{const{type:tt,props:st,ref:ut,children:nt,dynamicChildren:M,shapeFlag:y,patchFlag:O,dirs:X,cacheIndex:K}=C;if(O===-2&&(Q=!1),ut!=null&&(yi(),Ur(ut,null,A,C,!0),Si()),K!=null&&(U.renderCache[K]=void 0),y&256){U.ctx.deactivate(C);return}const j=y&1&&X,xt=!Fr(C);let ht;if(xt&&(ht=st&&st.onVnodeBeforeUnmount)&&Un(ht,U,C),y&6)gt(C.component,A,at);else{if(y&128){C.suspense.unmount(A,at);return}j&&ji(C,null,U,"beforeUnmount"),y&64?C.type.remove(C,U,A,St,at):M&&!M.hasOnce&&(tt!==he||O>0&&O&64)?et(M,U,A,!1,!0):(tt===he&&O&384||!Q&&y&16)&&et(nt,U,A),at&&Zt(C)}(xt&&(ht=st&&st.onVnodeUnmounted)||j)&&en(()=>{ht&&Un(ht,U,C),j&&ji(C,null,U,"unmounted")},A)},Zt=C=>{const{type:U,el:A,anchor:at,transition:Q}=C;if(U===he){rt(A,at);return}if(U===za){x(C);return}const tt=()=>{s(A),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(C.shapeFlag&1&&Q&&!Q.persisted){const{leave:st,delayLeave:ut}=Q,nt=()=>st(A,tt);ut?ut(C.el,tt,nt):nt()}else tt()},rt=(C,U)=>{let A;for(;C!==U;)A=h(C),s(C),C=A;s(U)},gt=(C,U,A)=>{const{bum:at,scope:Q,job:tt,subTree:st,um:ut,m:nt,a:M}=C;qu(nt),qu(M),at&&Oo(at),Q.stop(),tt&&(tt.flags|=8,dt(st,C,U,A)),ut&&en(ut,U),en(()=>{C.isUnmounted=!0},U)},et=(C,U,A,at=!1,Q=!1,tt=0)=>{for(let st=tt;st<C.length;st++)dt(C[st],U,A,at,Q)},$=C=>{if(C.shapeFlag&6)return $(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const U=h(C.anchor||C.el),A=U&&U[ag];return A?h(A):U};let ft=!1;const lt=(C,U,A)=>{let at;C==null?U._vnode&&(dt(U._vnode,null,null,!0),at=U._vnode.component):_(U._vnode||null,C,U,null,null,null,A),U._vnode=C,ft||(ft=!0,Uu(at),_d(),ft=!1)},St={p:_,um:dt,m:yt,r:Zt,mt:k,mc:I,pc:z,pbc:S,n:$,o:i};return{render:lt,hydrate:void 0,createApp:Cg(lt)}}function Ba({type:i,props:t},e){return e==="svg"&&i==="foreignObject"||e==="mathml"&&i==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Ki({effect:i,job:t},e){e?(i.flags|=32,t.flags|=4):(i.flags&=-33,t.flags&=-5)}function Wg(i,t){return(!i||i&&!i.pendingBranch)&&t&&!t.persisted}function kd(i,t,e=!1){const n=i.children,s=t.children;if(Gt(n)&&Gt(s))for(let r=0;r<n.length;r++){const o=n[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=hi(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&kd(o,a)),a.type===Sa&&(a.patchFlag===-1&&(a=s[r]=hi(a)),a.el=o.el),a.type===Wi&&!a.el&&(a.el=o.el)}}function qg(i){const t=i.slice(),e=[0];let n,s,r,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(s=e[e.length-1],i[s]<c){t[n]=s,e.push(n);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,i[e[a]]<c?r=a+1:o=a;c<i[e[r]]&&(r>0&&(t[n]=e[r-1]),e[r]=n)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function Hd(i){const t=i.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Hd(t)}function qu(i){if(i)for(let t=0;t<i.length;t++)i[t].flags|=8}function Vd(i){if(i.placeholder)return i.placeholder;const t=i.component;return t?Vd(t.subTree):null}const Gd=i=>i.__isSuspense;function Xg(i,t){t&&t.pendingBranch?Gt(i)?t.effects.push(...i):t.effects.push(i):Qm(i)}const he=Symbol.for("v-fgt"),Sa=Symbol.for("v-txt"),Wi=Symbol.for("v-cmt"),za=Symbol.for("v-stc"),Br=[];let un=null;function Dt(i=!1){Br.push(un=i?null:[])}function Yg(){Br.pop(),un=Br[Br.length-1]||null}let Wr=1;function Xu(i,t=!1){Wr+=i,i<0&&un&&t&&(un.hasOnce=!0)}function Wd(i){return i.dynamicChildren=Wr>0?un||Hs:null,Yg(),Wr>0&&un&&un.push(i),i}function Ot(i,t,e,n,s,r){return Wd(mt(i,t,e,n,s,r,!0))}function Bo(i,t,e,n,s){return Wd(Ln(i,t,e,n,s,!0))}function qd(i){return i?i.__v_isVNode===!0:!1}function dr(i,t){return i.type===t.type&&i.key===t.key}const Xd=({key:i})=>i??null,zo=({ref:i,ref_key:t,ref_for:e})=>(typeof i=="number"&&(i=""+i),i!=null?Pe(i)||we(i)||Yt(i)?{i:vn,r:i,k:t,f:!!e}:i:null);function mt(i,t=null,e=null,n=0,s=null,r=i===he?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:t,key:t&&Xd(t),ref:t&&zo(t),scopeId:xd,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:vn};return a?(Qc(l,e),r&128&&i.normalize(l)):e&&(l.shapeFlag|=Pe(e)?8:16),Wr>0&&!o&&un&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&un.push(l),l}const Ln=$g;function $g(i,t=null,e=null,n=0,s=null,r=!1){if((!i||i===yg)&&(i=Wi),qd(i)){const a=js(i,t,!0);return e&&Qc(a,e),Wr>0&&!r&&un&&(a.shapeFlag&6?un[un.indexOf(i)]=a:un.push(a)),a.patchFlag=-2,a}if(s_(i)&&(i=i.__vccOpts),t){t=jg(t);let{class:a,style:l}=t;a&&!Pe(a)&&(t.class=_i(a)),ge(l)&&(ga(l)&&!Gt(l)&&(l=Oe({},l)),t.style=ln(l))}const o=Pe(i)?1:Gd(i)?128:lg(i)?64:ge(i)?4:Yt(i)?2:0;return mt(i,t,e,n,s,o,r,!0)}function jg(i){return i?ga(i)||Nd(i)?Oe({},i):i:null}function js(i,t,e=!1,n=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=i,c=t?Kg(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&Xd(c),ref:t&&t.ref?e&&r?Gt(r)?r.concat(zo(t)):[r,zo(t)]:zo(t):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:t&&i.type!==he?o===-1?16:o|16:o,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&js(i.ssContent),ssFallback:i.ssFallback&&js(i.ssFallback),placeholder:i.placeholder,el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&n&&Kc(u,l.clone(u)),u}function Tn(i=" ",t=0){return Ln(Sa,null,i,t)}function qn(i="",t=!1){return t?(Dt(),Bo(Wi,null,i)):Ln(Wi,null,i)}function kn(i){return i==null||typeof i=="boolean"?Ln(Wi):Gt(i)?Ln(he,null,i.slice()):qd(i)?hi(i):Ln(Sa,null,String(i))}function hi(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:js(i)}function Qc(i,t){let e=0;const{shapeFlag:n}=i;if(t==null)t=null;else if(Gt(t))e=16;else if(typeof t=="object")if(n&65){const s=t.default;s&&(s._c&&(s._d=!1),Qc(i,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Nd(t)?t._ctx=vn:s===3&&vn&&(vn.slots._===1?t._=1:(t._=2,i.patchFlag|=1024))}else Yt(t)?(t={default:t,_ctx:vn},e=32):(t=String(t),n&64?(e=16,t=[Tn(t)]):e=8);i.children=t,i.shapeFlag|=e}function Kg(...i){const t={};for(let e=0;e<i.length;e++){const n=i[e];for(const s in n)if(s==="class")t.class!==n.class&&(t.class=_i([t.class,n.class]));else if(s==="style")t.style=ln([t.style,n.style]);else if(ua(s)){const r=t[s],o=n[s];o&&r!==o&&!(Gt(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=n[s])}return t}function Un(i,t,e,n=null){jn(i,t,7,[e,n])}const Zg=Rd();let Jg=0;function Qg(i,t,e){const n=i.type,s=(t?t.appContext:i.appContext)||Zg,r={uid:Jg++,vnode:i,type:n,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Kf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fd(n,s),emitsOptions:Pd(n,s),emit:null,emitted:null,propsDefaults:_e,inheritAttrs:n.inheritAttrs,ctx:_e,data:_e,props:_e,attrs:_e,slots:_e,refs:_e,setupState:_e,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Pg.bind(null,r),i.ce&&i.ce(r),r}let je=null;const Yd=()=>je||vn;let ia,zl;{const i=da(),t=(e,n)=>{let s;return(s=i[e])||(s=i[e]=[]),s.push(n),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ia=t("__VUE_INSTANCE_SETTERS__",e=>je=e),zl=t("__VUE_SSR_SETTERS__",e=>qr=e)}const jr=i=>{const t=je;return ia(i),i.scope.on(),()=>{i.scope.off(),ia(t)}},Yu=()=>{je&&je.scope.off(),ia(null)};function $d(i){return i.vnode.shapeFlag&4}let qr=!1;function t_(i,t=!1,e=!1){t&&zl(t);const{props:n,children:s}=i.vnode,r=$d(i);Fg(i,n,r,t),kg(i,s,e||t);const o=r?e_(i,t):void 0;return t&&zl(!1),o}function e_(i,t){const e=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,Sg);const{setup:n}=e;if(n){yi();const s=i.setupContext=n.length>1?i_(i):null,r=jr(i),o=$r(n,i,0,[i.props,s]),a=Vf(o);if(Si(),r(),(a||i.sp)&&!Fr(i)&&Md(i),a){if(o.then(Yu,Yu),t)return o.then(l=>{$u(i,l)}).catch(l=>{_a(l,i,0)});i.asyncDep=o}else $u(i,o)}else jd(i)}function $u(i,t,e){Yt(t)?i.type.__ssrInlineRender?i.ssrRender=t:i.render=t:ge(t)&&(i.setupState=dd(t)),jd(i)}function jd(i,t,e){const n=i.type;i.render||(i.render=n.render||Wn);{const s=jr(i);yi();try{Mg(i)}finally{Si(),s()}}}const n_={get(i,t){return Ge(i,"get",""),i[t]}};function i_(i){const t=e=>{i.exposed=e||{}};return{attrs:new Proxy(i.attrs,n_),slots:i.slots,emit:i.emit,expose:t}}function Ma(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(dd($c(i.exposed)),{get(t,e){if(e in t)return t[e];if(e in Or)return Or[e](i)},has(t,e){return e in t||e in Or}})):i.proxy}function s_(i){return Yt(i)&&"__vccOpts"in i}const nn=(i,t)=>$m(i,t,qr),r_="3.5.28";/**
* @vue/runtime-dom v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kl;const ju=typeof window<"u"&&window.trustedTypes;if(ju)try{kl=ju.createPolicy("vue",{createHTML:i=>i})}catch{}const Kd=kl?i=>kl.createHTML(i):i=>i,o_="http://www.w3.org/2000/svg",a_="http://www.w3.org/1998/Math/MathML",ui=typeof document<"u"?document:null,Ku=ui&&ui.createElement("template"),l_={insert:(i,t,e)=>{t.insertBefore(i,e||null)},remove:i=>{const t=i.parentNode;t&&t.removeChild(i)},createElement:(i,t,e,n)=>{const s=t==="svg"?ui.createElementNS(o_,i):t==="mathml"?ui.createElementNS(a_,i):e?ui.createElement(i,{is:e}):ui.createElement(i);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>ui.createTextNode(i),createComment:i=>ui.createComment(i),setText:(i,t)=>{i.nodeValue=t},setElementText:(i,t)=>{i.textContent=t},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>ui.querySelector(i),setScopeId(i,t){i.setAttribute(t,"")},insertStaticContent(i,t,e,n,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Ku.innerHTML=Kd(n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i);const a=Ku.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},c_=Symbol("_vtc");function u_(i,t,e){const n=i[c_];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?i.removeAttribute("class"):e?i.setAttribute("class",t):i.className=t}const Zu=Symbol("_vod"),h_=Symbol("_vsh"),f_=Symbol(""),d_=/(?:^|;)\s*display\s*:/;function p_(i,t,e){const n=i.style,s=Pe(e);let r=!1;if(e&&!s){if(t)if(Pe(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&ko(n,a,"")}else for(const o in t)e[o]==null&&ko(n,o,"");for(const o in e)o==="display"&&(r=!0),ko(n,o,e[o])}else if(s){if(t!==e){const o=n[f_];o&&(e+=";"+o),n.cssText=e,r=d_.test(e)}}else t&&i.removeAttribute("style");Zu in i&&(i[Zu]=r?n.display:"",i[h_]&&(n.display="none"))}const Ju=/\s*!important$/;function ko(i,t,e){if(Gt(e))e.forEach(n=>ko(i,t,n));else if(e==null&&(e=""),t.startsWith("--"))i.setProperty(t,e);else{const n=m_(i,t);Ju.test(e)?i.setProperty(Yi(n),e.replace(Ju,""),"important"):i[n]=e}}const Qu=["Webkit","Moz","ms"],ka={};function m_(i,t){const e=ka[t];if(e)return e;let n=Gi(t);if(n!=="filter"&&n in i)return ka[t]=n;n=qf(n);for(let s=0;s<Qu.length;s++){const r=Qu[s]+n;if(r in i)return ka[t]=r}return t}const th="http://www.w3.org/1999/xlink";function eh(i,t,e,n,s,r=vm(t)){n&&t.startsWith("xlink:")?e==null?i.removeAttributeNS(th,t.slice(6,t.length)):i.setAttributeNS(th,t,e):e==null||r&&!Yf(e)?i.removeAttribute(t):i.setAttribute(t,r?"":$n(e)?String(e):e)}function nh(i,t,e,n,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(i[t]=t==="innerHTML"?Kd(e):e);return}const r=i.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?i.getAttribute("value")||"":i.value,l=e==null?i.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in i))&&(i.value=l),e==null&&i.removeAttribute(t),i._value=e;return}let o=!1;if(e===""||e==null){const a=typeof i[t];a==="boolean"?e=Yf(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{i[t]=e}catch{}o&&i.removeAttribute(s||t)}function Bs(i,t,e,n){i.addEventListener(t,e,n)}function g_(i,t,e,n){i.removeEventListener(t,e,n)}const ih=Symbol("_vei");function __(i,t,e,n,s=null){const r=i[ih]||(i[ih]={}),o=r[t];if(n&&o)o.value=n;else{const[a,l]=v_(t);if(n){const c=r[t]=S_(n,s);Bs(i,a,c,l)}else o&&(g_(i,a,o,l),r[t]=void 0)}}const sh=/(?:Once|Passive|Capture)$/;function v_(i){let t;if(sh.test(i)){t={};let n;for(;n=i.match(sh);)i=i.slice(0,i.length-n[0].length),t[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Yi(i.slice(2)),t]}let Ha=0;const x_=Promise.resolve(),y_=()=>Ha||(x_.then(()=>Ha=0),Ha=Date.now());function S_(i,t){const e=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=e.attached)return;jn(M_(n,e.value),t,5,[n])};return e.value=i,e.attached=y_(),e}function M_(i,t){if(Gt(t)){const e=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{e.call(i),i._stopped=!0},t.map(n=>s=>!s._stopped&&n&&n(s))}else return t}const rh=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,E_=(i,t,e,n,s,r)=>{const o=s==="svg";t==="class"?u_(i,n,o):t==="style"?p_(i,e,n):ua(t)?Bc(t)||__(i,t,e,n,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):b_(i,t,n,o))?(nh(i,t,n),!i.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&eh(i,t,n,o,r,t!=="value")):i._isVueCE&&(/[A-Z]/.test(t)||!Pe(n))?nh(i,Gi(t),n,r,t):(t==="true-value"?i._trueValue=n:t==="false-value"&&(i._falseValue=n),eh(i,t,n,o))};function b_(i,t,e,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in i&&rh(t)&&Yt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&i.tagName==="IFRAME"||t==="form"||t==="list"&&i.tagName==="INPUT"||t==="type"&&i.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=i.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return rh(t)&&Pe(e)?!1:t in i}const oh=i=>{const t=i.props["onUpdate:modelValue"]||!1;return Gt(t)?e=>Oo(t,e):t};function w_(i){i.target.composing=!0}function ah(i){const t=i.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Va=Symbol("_assign");function lh(i,t,e){return t&&(i=i.trim()),e&&(i=kc(i)),i}const T_={created(i,{modifiers:{lazy:t,trim:e,number:n}},s){i[Va]=oh(s);const r=n||s.props&&s.props.type==="number";Bs(i,t?"change":"input",o=>{o.target.composing||i[Va](lh(i.value,e,r))}),(e||r)&&Bs(i,"change",()=>{i.value=lh(i.value,e,r)}),t||(Bs(i,"compositionstart",w_),Bs(i,"compositionend",ah),Bs(i,"change",ah))},mounted(i,{value:t}){i.value=t??""},beforeUpdate(i,{value:t,oldValue:e,modifiers:{lazy:n,trim:s,number:r}},o){if(i[Va]=oh(o),i.composing)return;const a=(r||i.type==="number")&&!/^0\d/.test(i.value)?kc(i.value):i.value,l=t??"";a!==l&&(document.activeElement===i&&i.type!=="range"&&(n&&t===e||s&&i.value.trim()===l)||(i.value=l))}},A_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},C_=(i,t)=>{const e=i._withKeys||(i._withKeys={}),n=t.join(".");return e[n]||(e[n]=(s=>{if(!("key"in s))return;const r=Yi(s.key);if(t.some(o=>o===r||A_[o]===r))return i(s)}))},R_=Oe({patchProp:E_},l_);let ch;function P_(){return ch||(ch=Vg(R_))}const L_=((...i)=>{const t=P_().createApp(...i),{mount:e}=t;return t.mount=n=>{const s=D_(n);if(!s)return;const r=t._component;!Yt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,I_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function I_(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function D_(i){return Pe(i)?document.querySelector(i):i}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Zd;const Ea=i=>Zd=i,Jd=Symbol();function Hl(i){return i&&typeof i=="object"&&Object.prototype.toString.call(i)==="[object Object]"&&typeof i.toJSON!="function"}var zr;(function(i){i.direct="direct",i.patchObject="patch object",i.patchFunction="patch function"})(zr||(zr={}));function N_(){const i=Zf(!0),t=i.run(()=>Ue({}));let e=[],n=[];const s=$c({install(r){Ea(s),s._a=r,r.provide(Jd,s),r.config.globalProperties.$pinia=s,n.forEach(o=>e.push(o)),n=[]},use(r){return this._a?e.push(r):n.push(r),this},_p:e,_a:null,_e:i,_s:new Map,state:t});return s}const Qd=()=>{};function uh(i,t,e,n=Qd){i.push(t);const s=()=>{const r=i.indexOf(t);r>-1&&(i.splice(r,1),n())};return!e&&Jf()&&ym(s),s}function ys(i,...t){i.slice().forEach(e=>{e(...t)})}const U_=i=>i(),hh=Symbol(),Ga=Symbol();function Vl(i,t){i instanceof Map&&t instanceof Map?t.forEach((e,n)=>i.set(n,e)):i instanceof Set&&t instanceof Set&&t.forEach(i.add,i);for(const e in t){if(!t.hasOwnProperty(e))continue;const n=t[e],s=i[e];Hl(s)&&Hl(n)&&i.hasOwnProperty(e)&&!we(n)&&!vi(n)?i[e]=Vl(s,n):i[e]=n}return i}const F_=Symbol();function O_(i){return!Hl(i)||!i.hasOwnProperty(F_)}const{assign:Ui}=Object;function B_(i){return!!(we(i)&&i.effect)}function z_(i,t,e,n){const{state:s,actions:r,getters:o}=t,a=e.state.value[i];let l;function c(){a||(e.state.value[i]=s?s():{});const u=Wm(e.state.value[i]);return Ui(u,r,Object.keys(o||{}).reduce((f,h)=>(f[h]=$c(nn(()=>{Ea(e);const d=e._s.get(i);return o[h].call(d,d)})),f),{}))}return l=tp(i,c,t,e,n,!0),l}function tp(i,t,e={},n,s,r){let o;const a=Ui({actions:{}},e),l={deep:!0};let c,u,f=[],h=[],d;const g=n.state.value[i];!r&&!g&&(n.state.value[i]={});let _;function m(I){let b;c=u=!1,typeof I=="function"?(I(n.state.value[i]),b={type:zr.patchFunction,storeId:i,events:d}):(Vl(n.state.value[i],I),b={type:zr.patchObject,payload:I,storeId:i,events:d});const S=_=Symbol();md().then(()=>{_===S&&(c=!0)}),u=!0,ys(f,b,n.state.value[i])}const p=r?function(){const{state:b}=e,S=b?b():{};this.$patch(D=>{Ui(D,S)})}:Qd;function v(){o.stop(),f=[],h=[],n._s.delete(i)}const w=(I,b="")=>{if(hh in I)return I[Ga]=b,I;const S=function(){Ea(n);const D=Array.from(arguments),B=[],N=[];function k(Y){B.push(Y)}function H(Y){N.push(Y)}ys(h,{args:D,name:S[Ga],store:L,after:k,onError:H});let F;try{F=I.apply(this&&this.$id===i?this:L,D)}catch(Y){throw ys(N,Y),Y}return F instanceof Promise?F.then(Y=>(ys(B,Y),Y)).catch(Y=>(ys(N,Y),Promise.reject(Y))):(ys(B,F),F)};return S[hh]=!0,S[Ga]=b,S},x={_p:n,$id:i,$onAction:uh.bind(null,h),$patch:m,$reset:p,$subscribe(I,b={}){const S=uh(f,I,b.detached,()=>D()),D=o.run(()=>Ws(()=>n.state.value[i],B=>{(b.flush==="sync"?u:c)&&I({storeId:i,type:zr.direct,events:d},B)},Ui({},l,b)));return S},$dispose:v},L=ma(x);n._s.set(i,L);const R=(n._a&&n._a.runWithContext||U_)(()=>n._e.run(()=>(o=Zf()).run(()=>t({action:w}))));for(const I in R){const b=R[I];if(we(b)&&!B_(b)||vi(b))r||(g&&O_(b)&&(we(b)?b.value=g[I]:Vl(b,g[I])),n.state.value[i][I]=b);else if(typeof b=="function"){const S=w(b,I);R[I]=S,a.actions[I]=b}}return Ui(L,R),Ui(re(L),R),Object.defineProperty(L,"$state",{get:()=>n.state.value[i],set:I=>{m(b=>{Ui(b,I)})}}),n._p.forEach(I=>{Ui(L,o.run(()=>I({store:L,app:n._a,pinia:n,options:a})))}),g&&r&&e.hydrate&&e.hydrate(L.$state,g),c=!0,u=!0,L}/*! #__NO_SIDE_EFFECTS__ */function k_(i,t,e){let n,s;const r=typeof t=="function";n=i,s=r?e:t;function o(a,l){const c=ig();return a=a||(c?Nr(Jd,null):null),a&&Ea(a),a=Zd,a._s.has(n)||(r?tp(n,t,s,a):z_(n,s,a)),a._s.get(n)}return o.$id=n,o}const _s=k_("game",()=>{const i=Ue(""),t=Ue(!1),e=Ue("waiting"),n=Ue([]),s=Ue(0),r=Ue(1),o=Ue({rollCount:0,dice:[0,0,0,0,0],kept:[!1,!1,!1,!1,!1]}),a=Ue({ones:null,twos:null,threes:null,fours:null,fives:null,sixes:null,choice:null,fourOfAKind:null,fullHouse:null,smallStraight:null,largeStraight:null,yacht:null}),l=Ue(0),c=Ue(0),u=Ue({}),f=Ue([]),h=Ue(!1),d=nn(()=>n.value.find(B=>B.id===i.value)),g=nn(()=>{const B=n.value[s.value];return(B==null?void 0:B.id)===i.value}),_=nn(()=>n.value[s.value]),m=nn(()=>g.value&&o.value.rollCount<3&&!h.value&&e.value==="playing"),p=nn(()=>g.value&&o.value.rollCount>0&&!h.value&&e.value==="playing"),v=nn(()=>{var B;return((B=d.value)==null?void 0:B.isHost)??!1});function w(B){e.value=B.phase,n.value=B.players,s.value=B.currentPlayerIndex,r.value=B.currentRound,B.turnState&&(o.value=B.turnState)}function x(B){a.value=B.scores,l.value=B.bonus,c.value=B.total}function L(B){u.value=B}function P(B){o.value.dice=B.dice,o.value.rollCount=B.rollCount,o.value.kept=B.kept,h.value=!0}function R(){h.value=!1}function I(B){o.value.kept=B}function b(B){f.value=B,e.value="finished"}function S(B){!g.value||o.value.rollCount===0||o.value.rollCount>=3||(o.value.kept[B]=!o.value.kept[B])}function D(){e.value="waiting",n.value=[],s.value=0,r.value=1,o.value={rollCount:0,dice:[0,0,0,0,0],kept:[!1,!1,!1,!1,!1]},a.value={ones:null,twos:null,threes:null,fours:null,fives:null,sixes:null,choice:null,fourOfAKind:null,fullHouse:null,smallStraight:null,largeStraight:null,yacht:null},l.value=0,c.value=0,u.value={},f.value=[]}return{mySocketId:i,connected:t,phase:e,players:n,currentPlayerIndex:s,currentRound:r,turnState:o,myScores:a,myBonus:l,myTotal:c,possibleScores:u,rankings:f,isRolling:h,myPlayer:d,isMyTurn:g,currentPlayer:_,canRoll:m,canSelectScore:p,isHost:v,updateRoomState:w,updateScoreCard:x,updatePossibleScores:L,updateDiceRolled:P,onPhysicsComplete:R,updateKept:I,setRankings:b,toggleKeep:S,reset:D}}),Kn=Object.create(null);Kn.open="0";Kn.close="1";Kn.ping="2";Kn.pong="3";Kn.message="4";Kn.upgrade="5";Kn.noop="6";const Ho=Object.create(null);Object.keys(Kn).forEach(i=>{Ho[Kn[i]]=i});const Gl={type:"error",data:"parser error"},ep=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",np=typeof ArrayBuffer=="function",ip=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i&&i.buffer instanceof ArrayBuffer,tu=({type:i,data:t},e,n)=>ep&&t instanceof Blob?e?n(t):fh(t,n):np&&(t instanceof ArrayBuffer||ip(t))?e?n(t):fh(new Blob([t]),n):n(Kn[i]+(t||"")),fh=(i,t)=>{const e=new FileReader;return e.onload=function(){const n=e.result.split(",")[1];t("b"+(n||""))},e.readAsDataURL(i)};function dh(i){return i instanceof Uint8Array?i:i instanceof ArrayBuffer?new Uint8Array(i):new Uint8Array(i.buffer,i.byteOffset,i.byteLength)}let Wa;function H_(i,t){if(ep&&i.data instanceof Blob)return i.data.arrayBuffer().then(dh).then(t);if(np&&(i.data instanceof ArrayBuffer||ip(i.data)))return t(dh(i.data));tu(i,!1,e=>{Wa||(Wa=new TextEncoder),t(Wa.encode(e))})}const ph="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ar=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let i=0;i<ph.length;i++)Ar[ph.charCodeAt(i)]=i;const V_=i=>{let t=i.length*.75,e=i.length,n,s=0,r,o,a,l;i[i.length-1]==="="&&(t--,i[i.length-2]==="="&&t--);const c=new ArrayBuffer(t),u=new Uint8Array(c);for(n=0;n<e;n+=4)r=Ar[i.charCodeAt(n)],o=Ar[i.charCodeAt(n+1)],a=Ar[i.charCodeAt(n+2)],l=Ar[i.charCodeAt(n+3)],u[s++]=r<<2|o>>4,u[s++]=(o&15)<<4|a>>2,u[s++]=(a&3)<<6|l&63;return c},G_=typeof ArrayBuffer=="function",eu=(i,t)=>{if(typeof i!="string")return{type:"message",data:sp(i,t)};const e=i.charAt(0);return e==="b"?{type:"message",data:W_(i.substring(1),t)}:Ho[e]?i.length>1?{type:Ho[e],data:i.substring(1)}:{type:Ho[e]}:Gl},W_=(i,t)=>{if(G_){const e=V_(i);return sp(e,t)}else return{base64:!0,data:i}},sp=(i,t)=>{switch(t){case"blob":return i instanceof Blob?i:new Blob([i]);case"arraybuffer":default:return i instanceof ArrayBuffer?i:i.buffer}},rp="",q_=(i,t)=>{const e=i.length,n=new Array(e);let s=0;i.forEach((r,o)=>{tu(r,!1,a=>{n[o]=a,++s===e&&t(n.join(rp))})})},X_=(i,t)=>{const e=i.split(rp),n=[];for(let s=0;s<e.length;s++){const r=eu(e[s],t);if(n.push(r),r.type==="error")break}return n};function Y_(){return new TransformStream({transform(i,t){H_(i,e=>{const n=e.length;let s;if(n<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,n);else if(n<65536){s=new Uint8Array(3);const r=new DataView(s.buffer);r.setUint8(0,126),r.setUint16(1,n)}else{s=new Uint8Array(9);const r=new DataView(s.buffer);r.setUint8(0,127),r.setBigUint64(1,BigInt(n))}i.data&&typeof i.data!="string"&&(s[0]|=128),t.enqueue(s),t.enqueue(e)})}})}let qa;function ao(i){return i.reduce((t,e)=>t+e.length,0)}function lo(i,t){if(i[0].length===t)return i.shift();const e=new Uint8Array(t);let n=0;for(let s=0;s<t;s++)e[s]=i[0][n++],n===i[0].length&&(i.shift(),n=0);return i.length&&n<i[0].length&&(i[0]=i[0].slice(n)),e}function $_(i,t){qa||(qa=new TextDecoder);const e=[];let n=0,s=-1,r=!1;return new TransformStream({transform(o,a){for(e.push(o);;){if(n===0){if(ao(e)<1)break;const l=lo(e,1);r=(l[0]&128)===128,s=l[0]&127,s<126?n=3:s===126?n=1:n=2}else if(n===1){if(ao(e)<2)break;const l=lo(e,2);s=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),n=3}else if(n===2){if(ao(e)<8)break;const l=lo(e,8),c=new DataView(l.buffer,l.byteOffset,l.length),u=c.getUint32(0);if(u>Math.pow(2,21)-1){a.enqueue(Gl);break}s=u*Math.pow(2,32)+c.getUint32(4),n=3}else{if(ao(e)<s)break;const l=lo(e,s);a.enqueue(eu(r?l:qa.decode(l),t)),n=0}if(s===0||s>i){a.enqueue(Gl);break}}}})}const op=4;function Re(i){if(i)return j_(i)}function j_(i){for(var t in Re.prototype)i[t]=Re.prototype[t];return i}Re.prototype.on=Re.prototype.addEventListener=function(i,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+i]=this._callbacks["$"+i]||[]).push(t),this};Re.prototype.once=function(i,t){function e(){this.off(i,e),t.apply(this,arguments)}return e.fn=t,this.on(i,e),this};Re.prototype.off=Re.prototype.removeListener=Re.prototype.removeAllListeners=Re.prototype.removeEventListener=function(i,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var e=this._callbacks["$"+i];if(!e)return this;if(arguments.length==1)return delete this._callbacks["$"+i],this;for(var n,s=0;s<e.length;s++)if(n=e[s],n===t||n.fn===t){e.splice(s,1);break}return e.length===0&&delete this._callbacks["$"+i],this};Re.prototype.emit=function(i){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),e=this._callbacks["$"+i],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(e){e=e.slice(0);for(var n=0,s=e.length;n<s;++n)e[n].apply(this,t)}return this};Re.prototype.emitReserved=Re.prototype.emit;Re.prototype.listeners=function(i){return this._callbacks=this._callbacks||{},this._callbacks["$"+i]||[]};Re.prototype.hasListeners=function(i){return!!this.listeners(i).length};const ba=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,e)=>e(t,0),_n=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),K_="arraybuffer";function ap(i,...t){return t.reduce((e,n)=>(i.hasOwnProperty(n)&&(e[n]=i[n]),e),{})}const Z_=_n.setTimeout,J_=_n.clearTimeout;function wa(i,t){t.useNativeTimers?(i.setTimeoutFn=Z_.bind(_n),i.clearTimeoutFn=J_.bind(_n)):(i.setTimeoutFn=_n.setTimeout.bind(_n),i.clearTimeoutFn=_n.clearTimeout.bind(_n))}const Q_=1.33;function tv(i){return typeof i=="string"?ev(i):Math.ceil((i.byteLength||i.size)*Q_)}function ev(i){let t=0,e=0;for(let n=0,s=i.length;n<s;n++)t=i.charCodeAt(n),t<128?e+=1:t<2048?e+=2:t<55296||t>=57344?e+=3:(n++,e+=4);return e}function lp(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function nv(i){let t="";for(let e in i)i.hasOwnProperty(e)&&(t.length&&(t+="&"),t+=encodeURIComponent(e)+"="+encodeURIComponent(i[e]));return t}function iv(i){let t={},e=i.split("&");for(let n=0,s=e.length;n<s;n++){let r=e[n].split("=");t[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return t}class sv extends Error{constructor(t,e,n){super(t),this.description=e,this.context=n,this.type="TransportError"}}class nu extends Re{constructor(t){super(),this.writable=!1,wa(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,e,n){return super.emitReserved("error",new sv(t,e,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const e=eu(t,this.socket.binaryType);this.onPacket(e)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,e={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(e)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const e=nv(t);return e.length?"?"+e:""}}class rv extends nu{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const e=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||e()})),this.writable||(n++,this.once("drain",function(){--n||e()}))}else e()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const e=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};X_(t,this.socket.binaryType).forEach(e),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,q_(t,e=>{this.doWrite(e,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",e=this.query||{};return this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=lp()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.createUri(t,e)}}let cp=!1;try{cp=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const ov=cp;function av(){}class lv extends rv{constructor(t){if(super(t),typeof location<"u"){const e=location.protocol==="https:";let n=location.port;n||(n=e?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||n!==t.port}}doWrite(t,e){const n=this.request({method:"POST",data:t});n.on("success",e),n.on("error",(s,r)=>{this.onError("xhr post error",s,r)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(e,n)=>{this.onError("xhr poll error",e,n)}),this.pollXhr=t}}class Xn extends Re{constructor(t,e,n){super(),this.createRequest=t,wa(this,n),this._opts=n,this._method=n.method||"GET",this._uri=e,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var t;const e=ap(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(e);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let s in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(s)&&n.setRequestHeader(s,this._opts.extraHeaders[s])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var s;n.readyState===3&&((s=this._opts.cookieJar)===null||s===void 0||s.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(s){this.setTimeoutFn(()=>{this._onError(s)},0);return}typeof document<"u"&&(this._index=Xn.requestsCount++,Xn.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=av,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Xn.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}Xn.requestsCount=0;Xn.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",mh);else if(typeof addEventListener=="function"){const i="onpagehide"in _n?"pagehide":"unload";addEventListener(i,mh,!1)}}function mh(){for(let i in Xn.requests)Xn.requests.hasOwnProperty(i)&&Xn.requests[i].abort()}const cv=(function(){const i=up({xdomain:!1});return i&&i.responseType!==null})();class uv extends lv{constructor(t){super(t);const e=t&&t.forceBase64;this.supportsBinary=cv&&!e}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new Xn(up,this.uri(),t)}}function up(i){const t=i.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||ov))return new XMLHttpRequest}catch{}if(!t)try{return new _n[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const hp=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class hv extends nu{get name(){return"websocket"}doOpen(){const t=this.uri(),e=this.opts.protocols,n=hp?{}:ap(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,e,n)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const n=t[e],s=e===t.length-1;tu(n,this.supportsBinary,r=>{try{this.doWrite(n,r)}catch{}s&&ba(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",e=this.query||{};return this.opts.timestampRequests&&(e[this.opts.timestampParam]=lp()),this.supportsBinary||(e.b64=1),this.createUri(t,e)}}const Xa=_n.WebSocket||_n.MozWebSocket;class fv extends hv{createSocket(t,e,n){return hp?new Xa(t,e,n):e?new Xa(t,e):new Xa(t)}doWrite(t,e){this.ws.send(e)}}class dv extends nu{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const e=$_(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=t.readable.pipeThrough(e).getReader(),s=Y_();s.readable.pipeTo(t.writable),this._writer=s.writable.getWriter();const r=()=>{n.read().then(({done:a,value:l})=>{a||(this.onPacket(l),r())}).catch(a=>{})};r();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const n=t[e],s=e===t.length-1;this._writer.write(n).then(()=>{s&&ba(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const pv={websocket:fv,webtransport:dv,polling:uv},mv=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,gv=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Wl(i){if(i.length>8e3)throw"URI too long";const t=i,e=i.indexOf("["),n=i.indexOf("]");e!=-1&&n!=-1&&(i=i.substring(0,e)+i.substring(e,n).replace(/:/g,";")+i.substring(n,i.length));let s=mv.exec(i||""),r={},o=14;for(;o--;)r[gv[o]]=s[o]||"";return e!=-1&&n!=-1&&(r.source=t,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=_v(r,r.path),r.queryKey=vv(r,r.query),r}function _v(i,t){const e=/\/{2,9}/g,n=t.replace(e,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&n.splice(0,1),t.slice(-1)=="/"&&n.splice(n.length-1,1),n}function vv(i,t){const e={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,s,r){s&&(e[s]=r)}),e}const ql=typeof addEventListener=="function"&&typeof removeEventListener=="function",Vo=[];ql&&addEventListener("offline",()=>{Vo.forEach(i=>i())},!1);class ki extends Re{constructor(t,e){if(super(),this.binaryType=K_,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(e=t,t=null),t){const n=Wl(t);e.hostname=n.host,e.secure=n.protocol==="https"||n.protocol==="wss",e.port=n.port,n.query&&(e.query=n.query)}else e.host&&(e.hostname=Wl(e.host).host);wa(this,e),this.secure=e.secure!=null?e.secure:typeof location<"u"&&location.protocol==="https:",e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.hostname=e.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=e.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},e.transports.forEach(n=>{const s=n.prototype.name;this.transports.push(s),this._transportsByName[s]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},e),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=iv(this.opts.query)),ql&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Vo.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const e=Object.assign({},this.opts.query);e.EIO=op,e.transport=t,this.id&&(e.sid=this.id);const n=Object.assign({},this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&ki.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const e=this.createTransport(t);e.open(),this.setTransport(e)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",e=>this._onClose("transport close",e))}onOpen(){this.readyState="open",ki.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const e=new Error("server error");e.code=t.data,this._onError(e);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let e=1;for(let n=0;n<this.writeBuffer.length;n++){const s=this.writeBuffer[n].data;if(s&&(e+=tv(s)),n>0&&e>this._maxPayload)return this.writeBuffer.slice(0,n);e+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,ba(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,e,n){return this._sendPacket("message",t,e,n),this}send(t,e,n){return this._sendPacket("message",t,e,n),this}_sendPacket(t,e,n,s){if(typeof e=="function"&&(s=e,e=void 0),typeof n=="function"&&(s=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const r={type:t,data:e,options:n};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),s&&this.once("flush",s),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},e=()=>{this.off("upgrade",e),this.off("upgradeError",e),t()},n=()=>{this.once("upgrade",e),this.once("upgradeError",e)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():t()}):this.upgrading?n():t()),this}_onError(t){if(ki.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),ql&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=Vo.indexOf(this._offlineEventListener);n!==-1&&Vo.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,e),this.writeBuffer=[],this._prevBufferLen=0}}}ki.protocol=op;class xv extends ki{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let e=this.createTransport(t),n=!1;ki.priorWebsocketSuccess=!1;const s=()=>{n||(e.send([{type:"ping",data:"probe"}]),e.once("packet",f=>{if(!n)if(f.type==="pong"&&f.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",e),!e)return;ki.priorWebsocketSuccess=e.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(u(),this.setTransport(e),e.send([{type:"upgrade"}]),this.emitReserved("upgrade",e),e=null,this.upgrading=!1,this.flush())})}else{const h=new Error("probe error");h.transport=e.name,this.emitReserved("upgradeError",h)}}))};function r(){n||(n=!0,u(),e.close(),e=null)}const o=f=>{const h=new Error("probe error: "+f);h.transport=e.name,r(),this.emitReserved("upgradeError",h)};function a(){o("transport closed")}function l(){o("socket closed")}function c(f){e&&f.name!==e.name&&r()}const u=()=>{e.removeListener("open",s),e.removeListener("error",o),e.removeListener("close",a),this.off("close",l),this.off("upgrading",c)};e.once("open",s),e.once("error",o),e.once("close",a),this.once("close",l),this.once("upgrading",c),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{n||e.open()},200):e.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const e=[];for(let n=0;n<t.length;n++)~this.transports.indexOf(t[n])&&e.push(t[n]);return e}}let yv=class extends xv{constructor(t,e={}){const n=typeof t=="object"?t:e;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(s=>pv[s]).filter(s=>!!s)),super(t,n)}};function Sv(i,t="",e){let n=i;e=e||typeof location<"u"&&location,i==null&&(i=e.protocol+"//"+e.host),typeof i=="string"&&(i.charAt(0)==="/"&&(i.charAt(1)==="/"?i=e.protocol+i:i=e.host+i),/^(https?|wss?):\/\//.test(i)||(typeof e<"u"?i=e.protocol+"//"+i:i="https://"+i),n=Wl(i)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const r=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+r+":"+n.port+t,n.href=n.protocol+"://"+r+(e&&e.port===n.port?"":":"+n.port),n}const Mv=typeof ArrayBuffer=="function",Ev=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i.buffer instanceof ArrayBuffer,fp=Object.prototype.toString,bv=typeof Blob=="function"||typeof Blob<"u"&&fp.call(Blob)==="[object BlobConstructor]",wv=typeof File=="function"||typeof File<"u"&&fp.call(File)==="[object FileConstructor]";function iu(i){return Mv&&(i instanceof ArrayBuffer||Ev(i))||bv&&i instanceof Blob||wv&&i instanceof File}function Go(i,t){if(!i||typeof i!="object")return!1;if(Array.isArray(i)){for(let e=0,n=i.length;e<n;e++)if(Go(i[e]))return!0;return!1}if(iu(i))return!0;if(i.toJSON&&typeof i.toJSON=="function"&&arguments.length===1)return Go(i.toJSON(),!0);for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e)&&Go(i[e]))return!0;return!1}function Tv(i){const t=[],e=i.data,n=i;return n.data=Xl(e,t),n.attachments=t.length,{packet:n,buffers:t}}function Xl(i,t){if(!i)return i;if(iu(i)){const e={_placeholder:!0,num:t.length};return t.push(i),e}else if(Array.isArray(i)){const e=new Array(i.length);for(let n=0;n<i.length;n++)e[n]=Xl(i[n],t);return e}else if(typeof i=="object"&&!(i instanceof Date)){const e={};for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=Xl(i[n],t));return e}return i}function Av(i,t){return i.data=Yl(i.data,t),delete i.attachments,i}function Yl(i,t){if(!i)return i;if(i&&i._placeholder===!0){if(typeof i.num=="number"&&i.num>=0&&i.num<t.length)return t[i.num];throw new Error("illegal attachments")}else if(Array.isArray(i))for(let e=0;e<i.length;e++)i[e]=Yl(i[e],t);else if(typeof i=="object")for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&(i[e]=Yl(i[e],t));return i}const Cv=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var te;(function(i){i[i.CONNECT=0]="CONNECT",i[i.DISCONNECT=1]="DISCONNECT",i[i.EVENT=2]="EVENT",i[i.ACK=3]="ACK",i[i.CONNECT_ERROR=4]="CONNECT_ERROR",i[i.BINARY_EVENT=5]="BINARY_EVENT",i[i.BINARY_ACK=6]="BINARY_ACK"})(te||(te={}));class Rv{constructor(t){this.replacer=t}encode(t){return(t.type===te.EVENT||t.type===te.ACK)&&Go(t)?this.encodeAsBinary({type:t.type===te.EVENT?te.BINARY_EVENT:te.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let e=""+t.type;return(t.type===te.BINARY_EVENT||t.type===te.BINARY_ACK)&&(e+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(e+=t.nsp+","),t.id!=null&&(e+=t.id),t.data!=null&&(e+=JSON.stringify(t.data,this.replacer)),e}encodeAsBinary(t){const e=Tv(t),n=this.encodeAsString(e.packet),s=e.buffers;return s.unshift(n),s}}class su extends Re{constructor(t){super(),this.reviver=t}add(t){let e;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");e=this.decodeString(t);const n=e.type===te.BINARY_EVENT;n||e.type===te.BINARY_ACK?(e.type=n?te.EVENT:te.ACK,this.reconstructor=new Pv(e),e.attachments===0&&super.emitReserved("decoded",e)):super.emitReserved("decoded",e)}else if(iu(t)||t.base64)if(this.reconstructor)e=this.reconstructor.takeBinaryData(t),e&&(this.reconstructor=null,super.emitReserved("decoded",e));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let e=0;const n={type:Number(t.charAt(0))};if(te[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===te.BINARY_EVENT||n.type===te.BINARY_ACK){const r=e+1;for(;t.charAt(++e)!=="-"&&e!=t.length;);const o=t.substring(r,e);if(o!=Number(o)||t.charAt(e)!=="-")throw new Error("Illegal attachments");n.attachments=Number(o)}if(t.charAt(e+1)==="/"){const r=e+1;for(;++e&&!(t.charAt(e)===","||e===t.length););n.nsp=t.substring(r,e)}else n.nsp="/";const s=t.charAt(e+1);if(s!==""&&Number(s)==s){const r=e+1;for(;++e;){const o=t.charAt(e);if(o==null||Number(o)!=o){--e;break}if(e===t.length)break}n.id=Number(t.substring(r,e+1))}if(t.charAt(++e)){const r=this.tryParse(t.substr(e));if(su.isPayloadValid(n.type,r))n.data=r;else throw new Error("invalid payload")}return n}tryParse(t){try{return JSON.parse(t,this.reviver)}catch{return!1}}static isPayloadValid(t,e){switch(t){case te.CONNECT:return gh(e);case te.DISCONNECT:return e===void 0;case te.CONNECT_ERROR:return typeof e=="string"||gh(e);case te.EVENT:case te.BINARY_EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&Cv.indexOf(e[0])===-1);case te.ACK:case te.BINARY_ACK:return Array.isArray(e)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Pv{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const e=Av(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function gh(i){return Object.prototype.toString.call(i)==="[object Object]"}const Lv=Object.freeze(Object.defineProperty({__proto__:null,Decoder:su,Encoder:Rv,get PacketType(){return te}},Symbol.toStringTag,{value:"Module"}));function wn(i,t,e){return i.on(t,e),function(){i.off(t,e)}}const Iv=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class dp extends Re{constructor(t,e,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=e,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[wn(t,"open",this.onopen.bind(this)),wn(t,"packet",this.onpacket.bind(this)),wn(t,"error",this.onerror.bind(this)),wn(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...e){var n,s,r;if(Iv.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(e.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(e),this;const o={type:te.EVENT,data:e};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof e[e.length-1]=="function"){const u=this.ids++,f=e.pop();this._registerAckCallback(u,f),o.id=u}const a=(s=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||s===void 0?void 0:s.writable,l=this.connected&&!(!((r=this.io.engine)===null||r===void 0)&&r._hasPingExpired());return this.flags.volatile&&!a||(l?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(t,e){var n;const s=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(s===void 0){this.acks[t]=e;return}const r=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===t&&this.sendBuffer.splice(a,1);e.call(this,new Error("operation has timed out"))},s),o=(...a)=>{this.io.clearTimeoutFn(r),e.apply(this,a)};o.withError=!0,this.acks[t]=o}emitWithAck(t,...e){return new Promise((n,s)=>{const r=(o,a)=>o?s(o):n(a);r.withError=!0,e.push(r),this.emit(t,...e)})}_addToQueue(t){let e;typeof t[t.length-1]=="function"&&(e=t.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((s,...r)=>(this._queue[0],s!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),e&&e(s)):(this._queue.shift(),e&&e(null,...r)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const e=this._queue[0];e.pending&&!t||(e.pending=!0,e.tryCount++,this.flags=e.flags,this.emit.apply(this,e.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:te.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,e){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,e),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(n=>String(n.id)===t)){const n=this.acks[t];delete this.acks[t],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case te.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case te.EVENT:case te.BINARY_EVENT:this.onevent(t);break;case te.ACK:case te.BINARY_ACK:this.onack(t);break;case te.DISCONNECT:this.ondisconnect();break;case te.CONNECT_ERROR:this.destroy();const n=new Error(t.data.message);n.data=t.data.data,this.emitReserved("connect_error",n);break}}onevent(t){const e=t.data||[];t.id!=null&&e.push(this.ack(t.id)),this.connected?this.emitEvent(e):this.receiveBuffer.push(Object.freeze(e))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const e=this._anyListeners.slice();for(const n of e)n.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const e=this;let n=!1;return function(...s){n||(n=!0,e.packet({type:te.ACK,id:t,data:s}))}}onack(t){const e=this.acks[t.id];typeof e=="function"&&(delete this.acks[t.id],e.withError&&t.data.unshift(null),e.apply(this,t.data))}onconnect(t,e){this.id=t,this.recovered=e&&this._pid===e,this._pid=e,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:te.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const e=this._anyListeners;for(let n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const e=this._anyOutgoingListeners;for(let n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const e=this._anyOutgoingListeners.slice();for(const n of e)n.apply(this,t.data)}}}function rr(i){i=i||{},this.ms=i.min||100,this.max=i.max||1e4,this.factor=i.factor||2,this.jitter=i.jitter>0&&i.jitter<=1?i.jitter:0,this.attempts=0}rr.prototype.duration=function(){var i=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),e=Math.floor(t*this.jitter*i);i=(Math.floor(t*10)&1)==0?i-e:i+e}return Math.min(i,this.max)|0};rr.prototype.reset=function(){this.attempts=0};rr.prototype.setMin=function(i){this.ms=i};rr.prototype.setMax=function(i){this.max=i};rr.prototype.setJitter=function(i){this.jitter=i};class $l extends Re{constructor(t,e){var n;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.opts=e,wa(this,e),this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor((n=e.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new rr({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(e.timeout==null?2e4:e.timeout),this._readyState="closed",this.uri=t;const s=e.parser||Lv;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=e.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var e;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(e=this.backoff)===null||e===void 0||e.setMin(t),this)}randomizationFactor(t){var e;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(e=this.backoff)===null||e===void 0||e.setJitter(t),this)}reconnectionDelayMax(t){var e;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(e=this.backoff)===null||e===void 0||e.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new yv(this.uri,this.opts);const e=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const s=wn(e,"open",function(){n.onopen(),t&&t()}),r=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),t?t(a):this.maybeReconnectOnOpen()},o=wn(e,"error",r);if(this._timeout!==!1){const a=this._timeout,l=this.setTimeoutFn(()=>{s(),r(new Error("timeout")),e.close()},a);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(s),this.subs.push(o),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(wn(t,"ping",this.onping.bind(this)),wn(t,"data",this.ondata.bind(this)),wn(t,"error",this.onerror.bind(this)),wn(t,"close",this.onclose.bind(this)),wn(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(e){this.onclose("parse error",e)}}ondecoded(t){ba(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,e){let n=this.nsps[t];return n?this._autoConnect&&!n.active&&n.connect():(n=new dp(this,t,e),this.nsps[t]=n),n}_destroy(t){const e=Object.keys(this.nsps);for(const n of e)if(this.nsps[n].active)return;this._close()}_packet(t){const e=this.encoder.encode(t);for(let n=0;n<e.length;n++)this.engine.write(e[n],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,e){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,e),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const e=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(s=>{s?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",s)):t.onreconnect()}))},e);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const pr={};function Wo(i,t){typeof i=="object"&&(t=i,i=void 0),t=t||{};const e=Sv(i,t.path||"/socket.io"),n=e.source,s=e.id,r=e.path,o=pr[s]&&r in pr[s].nsps,a=t.forceNew||t["force new connection"]||t.multiplex===!1||o;let l;return a?l=new $l(n,t):(pr[s]||(pr[s]=new $l(n,t)),l=pr[s]),e.query&&!t.query&&(t.query=e.queryKey),l.socket(e.path,t)}Object.assign(Wo,{Manager:$l,Socket:dp,io:Wo,connect:Wo});let Jt=null;function Ta(){const i=_s();function t(){Jt!=null&&Jt.connected||(Jt=Wo(window.location.origin,{transports:["websocket","polling"]}),Jt.on("connect",()=>{i.mySocketId=Jt.id,i.connected=!0,console.log("[Socket] 연결됨:",Jt.id)}),Jt.on("disconnect",()=>{i.connected=!1,console.log("[Socket] 연결 끊김")}),Jt.on("room:state",c=>{i.updateRoomState(c)}),Jt.on("game:started",c=>{i.updateRoomState(c)}),Jt.on("turn:begin",c=>{i.turnState.rollCount=0,i.turnState.dice=[0,0,0,0,0],i.turnState.kept=[!1,!1,!1,!1,!1],i.possibleScores={}}),Jt.on("dice:rolled",c=>{i.updateDiceRolled(c)}),Jt.on("dice:kept",({kept:c})=>{i.updateKept(c)}),Jt.on("score:card",c=>{i.updateScoreCard(c)}),Jt.on("score:possible",({possible:c})=>{i.updatePossibleScores(c)}),Jt.on("score:updated",({playerId:c,category:u})=>{const f=i.players.find(h=>h.id===c);f&&(f.usedCategories[u]=!0)}),Jt.on("game:finished",({rankings:c})=>{i.setRankings(c)}),Jt.on("error",({message:c})=>{console.error("[Server Error]",c)}))}function e(c){Jt==null||Jt.emit("player:join",{name:c})}function n(){Jt==null||Jt.emit("game:start")}function s(){Jt==null||Jt.emit("dice:roll")}function r(c){Jt==null||Jt.emit("dice:keep",{kept:c})}function o(c){Jt==null||Jt.emit("score:select",{category:c})}function a(){Jt==null||Jt.emit("game:restart")}function l(){Jt==null||Jt.disconnect(),Jt=null}return{connect:t,joinGame:e,startGame:n,rollDice:s,setKept:r,selectCategory:o,restartGame:a,disconnect:l}}const Dv={class:"lobby"},Nv={class:"lobby-container"},Uv={key:0,class:"join-section"},Fv={class:"input-group"},Ov=["disabled"],Bv={key:1,class:"waiting-section"},zv={class:"players-panel"},kv={class:"panel-title"},Hv={class:"player-count"},Vv={class:"player-list"},Gv={class:"player-name"},Wv={key:0,class:"host-badge"},qv={key:1,class:"me-badge"},Xv={class:"actions"},Yv=["disabled"],$v={key:1,class:"waiting-text"},jv={class:"connection-info"},Kv={class:"address"},Zv={computed:{window(){return window}}},Jv=sr({...Zv,__name:"LobbyView",setup(i){const t=_s(),e=Ta(),n=Ue(""),s=Ue(!1),r=nn(()=>t.isHost&&t.players.length>=1);function o(){n.value.trim()&&(e.connect(),setTimeout(()=>{e.joinGame(n.value.trim()),s.value=!0},300))}function a(){e.startGame()}return xa(()=>{t.connected&&(s.value=!0)}),(l,c)=>(Dt(),Ot("div",Dv,[mt("div",Nv,[c[4]||(c[4]=mt("div",{class:"lobby-header"},[mt("h1",{class:"title"},"YACHT"),mt("p",{class:"subtitle"},"Dice Game")],-1)),s.value?(Dt(),Ot("div",Bv,[mt("div",zv,[mt("h3",kv,[c[1]||(c[1]=Tn(" 대기실 ",-1)),mt("span",Hv,ae(kt(t).players.length)+" / 5",1)]),mt("div",Vv,[(Dt(!0),Ot(he,null,Ve(kt(t).players,u=>(Dt(),Ot("div",{key:u.id,class:"player-card"},[mt("span",{class:"player-dot",style:ln({background:u.color})},null,4),mt("span",Gv,[Tn(ae(u.name)+" ",1),u.isHost?(Dt(),Ot("span",Wv,"HOST")):qn("",!0),u.id===kt(t).mySocketId?(Dt(),Ot("span",qv,"ME")):qn("",!0)])]))),128)),(Dt(!0),Ot(he,null,Ve(5-kt(t).players.length,u=>(Dt(),Ot("div",{key:"empty-"+u,class:"player-card empty"},[...c[2]||(c[2]=[mt("span",{class:"player-dot empty-dot"},null,-1),mt("span",{class:"player-name empty-name"},"대기 중...",-1)])]))),128))])]),mt("div",Xv,[kt(t).isHost?(Dt(),Ot("button",{key:0,class:"btn btn-success btn-lg start-btn",disabled:!r.value,onClick:a}," 게임 시작 ",8,Yv)):(Dt(),Ot("p",$v," 호스트가 게임을 시작할 때까지 대기 중... "))]),mt("div",jv,[c[3]||(c[3]=mt("p",null,"같은 네트워크에서 아래 주소로 접속하세요:",-1)),mt("code",Kv,ae(l.window.location.origin),1)])])):(Dt(),Ot("div",Uv,[mt("div",Fv,[eg(mt("input",{"onUpdate:modelValue":c[0]||(c[0]=u=>n.value=u),class:"name-input",placeholder:"닉네임을 입력하세요",maxlength:"12",onKeyup:C_(o,["enter"]),autofocus:""},null,544),[[T_,n.value]]),mt("button",{class:"btn btn-primary btn-lg",disabled:!n.value.trim(),onClick:o}," 참가하기 ",8,Ov)])]))]),c[5]||(c[5]=mt("div",{class:"bg-dice dice-1"},"⚀",-1)),c[6]||(c[6]=mt("div",{class:"bg-dice dice-2"},"⚅",-1)),c[7]||(c[7]=mt("div",{class:"bg-dice dice-3"},"⚃",-1))]))}}),Kr=(i,t)=>{const e=i.__vccOpts||i;for(const[n,s]of t)e[n]=s;return e},Qv=Kr(Jv,[["__scopeId","data-v-b0beeabe"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ru="170",t0=0,_h=1,e0=2,pp=1,mp=2,ci=3,qi=0,Ke=1,Vn=2,Hi=0,qs=1,vh=2,xh=3,yh=4,n0=5,as=100,i0=101,s0=102,r0=103,o0=104,a0=200,l0=201,c0=202,u0=203,jl=204,Kl=205,h0=206,f0=207,d0=208,p0=209,m0=210,g0=211,_0=212,v0=213,x0=214,Zl=0,Jl=1,Ql=2,Ks=3,tc=4,ec=5,nc=6,ic=7,gp=0,y0=1,S0=2,Vi=0,M0=1,E0=2,b0=3,_p=4,w0=5,T0=6,A0=7,vp=300,Zs=301,Js=302,sc=303,rc=304,Aa=306,oc=1e3,us=1001,ac=1002,In=1003,C0=1004,co=1005,Gn=1006,Ya=1007,hs=1008,Ei=1009,xp=1010,yp=1011,Xr=1012,ou=1013,ms=1014,pi=1015,Zr=1016,au=1017,lu=1018,Qs=1020,Sp=35902,Mp=1021,Ep=1022,Cn=1023,bp=1024,wp=1025,Xs=1026,tr=1027,Tp=1028,cu=1029,Ap=1030,uu=1031,hu=1033,qo=33776,Xo=33777,Yo=33778,$o=33779,lc=35840,cc=35841,uc=35842,hc=35843,fc=36196,dc=37492,pc=37496,mc=37808,gc=37809,_c=37810,vc=37811,xc=37812,yc=37813,Sc=37814,Mc=37815,Ec=37816,bc=37817,wc=37818,Tc=37819,Ac=37820,Cc=37821,jo=36492,Rc=36494,Pc=36495,Cp=36283,Lc=36284,Ic=36285,Dc=36286,R0=3200,P0=3201,Rp=0,L0=1,Bi="",gn="srgb",or="srgb-linear",Ca="linear",pe="srgb",Ss=7680,Sh=519,I0=512,D0=513,N0=514,Pp=515,U0=516,F0=517,O0=518,B0=519,Mh=35044,Eh="300 es",mi=2e3,sa=2001;class ar{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$a=Math.PI/180,Nc=180/Math.PI;function Jr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function sn(i,t,e){return Math.max(t,Math.min(e,i))}function z0(i,t){return(i%t+t)%t}function ja(i,t,e){return(1-e)*i+e*t}function mr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ne{constructor(t=0,e=0){ne.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(sn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,n,s,r,o,a,l,c){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],v=s[1],w=s[4],x=s[7],L=s[2],P=s[5],R=s[8];return r[0]=o*_+a*v+l*L,r[3]=o*m+a*w+l*P,r[6]=o*p+a*x+l*R,r[1]=c*_+u*v+f*L,r[4]=c*m+u*w+f*P,r[7]=c*p+u*x+f*R,r[2]=h*_+d*v+g*L,r[5]=h*m+d*w+g*P,r[8]=h*p+d*x+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,g=e*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(s*c-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=h*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ka.makeScale(t,e)),this}rotate(t){return this.premultiply(Ka.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ka.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ka=new Kt;function Lp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ra(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function k0(){const i=ra("canvas");return i.style.display="block",i}const bh={};function Cr(i){i in bh||(bh[i]=!0,console.warn(i))}function H0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function V0(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function G0(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ie={enabled:!0,workingColorSpace:or,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===pe&&(i.r=xi(i.r),i.g=xi(i.g),i.b=xi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===pe&&(i.r=Ys(i.r),i.g=Ys(i.g),i.b=Ys(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Bi?Ca:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const wh=[.64,.33,.3,.6,.15,.06],Th=[.2126,.7152,.0722],Ah=[.3127,.329],Ch=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rh=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[or]:{primaries:wh,whitePoint:Ah,transfer:Ca,toXYZ:Ch,fromXYZ:Rh,luminanceCoefficients:Th,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:wh,whitePoint:Ah,transfer:pe,toXYZ:Ch,fromXYZ:Rh,luminanceCoefficients:Th,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}});let Ms;class W0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ms===void 0&&(Ms=ra("canvas")),Ms.width=t.width,Ms.height=t.height;const n=Ms.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ms}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ra("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xi(e[n]/255)*255):e[n]=xi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let q0=0;class Ip{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=Jr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Za(s[o].image)):r.push(Za(s[o]))}else r=Za(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Za(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?W0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let X0=0;class Ze extends ar{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,n=us,s=us,r=Gn,o=hs,a=Cn,l=Ei,c=Ze.DEFAULT_ANISOTROPY,u=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=Jr(),this.name="",this.source=new Ip(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oc:t.x=t.x-Math.floor(t.x);break;case us:t.x=t.x<0?0:1;break;case ac:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oc:t.y=t.y-Math.floor(t.y);break;case us:t.y=t.y<0?0:1;break;case ac:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=vp;Ze.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,s=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,x=(d+1)/2,L=(p+1)/2,P=(u+h)/4,R=(f+_)/4,I=(g+m)/4;return w>x&&w>L?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=P/n,r=R/n):x>L?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=P/s,r=I/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=R/r,s=I/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-_)/v,this.z=(h-u)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Y0 extends ar{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ze(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ip(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gs extends Y0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Dp extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $0 extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let lr=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3];const h=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*_,v=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const L=Math.sqrt(w),P=Math.atan2(L,p*v);m=Math.sin(m*P)/L,a=Math.sin(a*P)/L}const x=a*v;if(l=l*m+h*x,c=c*m+d*x,u=u*m+g*x,f=f*m+_*x,m===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=L,c*=L,u*=L,f*=L}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*f+l*d-c*h,t[e+1]=l*g+u*h+c*f-a*d,t[e+2]=c*g+u*d+a*h-l*f,t[e+3]=u*g-a*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(r/2),h=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(sn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class q{constructor(t=0,e=0,n=0){q.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ph.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ph.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*u,this.y=n+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ja.copy(this).projectOnVector(t),this.sub(Ja)}reflect(t){return this.sub(Ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(sn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ja=new q,Ph=new lr;class Qr{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),uo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),uo.copy(n.boundingBox)),uo.applyMatrix4(t.matrixWorld),this.union(uo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gr),ho.subVectors(this.max,gr),Es.subVectors(t.a,gr),bs.subVectors(t.b,gr),ws.subVectors(t.c,gr),Ci.subVectors(bs,Es),Ri.subVectors(ws,bs),Zi.subVectors(Es,ws);let e=[0,-Ci.z,Ci.y,0,-Ri.z,Ri.y,0,-Zi.z,Zi.y,Ci.z,0,-Ci.x,Ri.z,0,-Ri.x,Zi.z,0,-Zi.x,-Ci.y,Ci.x,0,-Ri.y,Ri.x,0,-Zi.y,Zi.x,0];return!Qa(e,Es,bs,ws,ho)||(e=[1,0,0,0,1,0,0,0,1],!Qa(e,Es,bs,ws,ho))?!1:(fo.crossVectors(Ci,Ri),e=[fo.x,fo.y,fo.z],Qa(e,Es,bs,ws,ho))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ti=[new q,new q,new q,new q,new q,new q,new q,new q],Sn=new q,uo=new Qr,Es=new q,bs=new q,ws=new q,Ci=new q,Ri=new q,Zi=new q,gr=new q,ho=new q,fo=new q,Ji=new q;function Qa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ji.fromArray(i,r);const a=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),l=t.dot(Ji),c=e.dot(Ji),u=n.dot(Ji);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const j0=new Qr,_r=new q,tl=new q;class fu{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):j0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_r.subVectors(t,this.center);const e=_r.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(_r,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_r.copy(t.center).add(tl)),this.expandByPoint(_r.copy(t.center).sub(tl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new q,el=new q,po=new q,Pi=new q,nl=new q,mo=new q,il=new q;let Np=class{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){el.copy(t).add(e).multiplyScalar(.5),po.copy(e).sub(t).normalize(),Pi.copy(this.origin).sub(el);const r=t.distanceTo(e)*.5,o=-this.direction.dot(po),a=Pi.dot(this.direction),l=-Pi.dot(po),c=Pi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(el).addScaledVector(po,h),d}intersectSphere(t,e){ei.subVectors(t.center,this.origin);const n=ei.dot(this.direction),s=ei.dot(ei)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,n,s,r){nl.subVectors(e,t),mo.subVectors(n,t),il.crossVectors(nl,mo);let o=this.direction.dot(il),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,t);const l=a*this.direction.dot(mo.crossVectors(Pi,mo));if(l<0)return null;const c=a*this.direction.dot(nl.cross(Pi));if(c<0||l+c>o)return null;const u=-a*Pi.dot(il);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Ee{constructor(t,e,n,s,r,o,a,l,c,u,f,h,d,g,_,m){Ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,f,h,d,g,_,m)}set(t,e,n,s,r,o,a,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ts.setFromMatrixColumn(t,0).length(),r=1/Ts.setFromMatrixColumn(t,1).length(),o=1/Ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=h-_*c,e[9]=-a*l,e[2]=_-h*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;e[0]=h+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;e[0]=h-_*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=g*c-d,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*f+g,e[10]=h-_*f}else if(t.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+_,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(K0,t,Z0)}lookAt(t,e,n){const s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),Li.crossVectors(n,on),Li.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Li.crossVectors(n,on)),Li.normalize(),go.crossVectors(on,Li),s[0]=Li.x,s[4]=go.x,s[8]=on.x,s[1]=Li.y,s[5]=go.y,s[9]=on.y,s[2]=Li.z,s[6]=go.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],w=n[7],x=n[11],L=n[15],P=s[0],R=s[4],I=s[8],b=s[12],S=s[1],D=s[5],B=s[9],N=s[13],k=s[2],H=s[6],F=s[10],Y=s[14],z=s[3],ot=s[7],_t=s[11],yt=s[15];return r[0]=o*P+a*S+l*k+c*z,r[4]=o*R+a*D+l*H+c*ot,r[8]=o*I+a*B+l*F+c*_t,r[12]=o*b+a*N+l*Y+c*yt,r[1]=u*P+f*S+h*k+d*z,r[5]=u*R+f*D+h*H+d*ot,r[9]=u*I+f*B+h*F+d*_t,r[13]=u*b+f*N+h*Y+d*yt,r[2]=g*P+_*S+m*k+p*z,r[6]=g*R+_*D+m*H+p*ot,r[10]=g*I+_*B+m*F+p*_t,r[14]=g*b+_*N+m*Y+p*yt,r[3]=v*P+w*S+x*k+L*z,r[7]=v*R+w*D+x*H+L*ot,r[11]=v*I+w*B+x*F+L*_t,r[15]=v*b+w*N+x*Y+L*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*f-s*c*f-r*a*h+n*c*h+s*a*d-n*l*d)+_*(+e*l*d-e*c*h+r*o*h-s*o*d+s*c*u-r*l*u)+m*(+e*c*f-e*a*d-r*o*f+n*o*d+r*a*u-n*c*u)+p*(-s*a*u-e*l*f+e*a*h+s*o*f-n*o*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],v=f*m*c-_*h*c+_*l*d-a*m*d-f*l*p+a*h*p,w=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,x=u*_*c-g*f*c+g*a*d-o*_*d-u*a*p+o*f*p,L=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,P=e*v+n*w+s*x+r*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return t[0]=v*R,t[1]=(_*h*r-f*m*r-_*s*d+n*m*d+f*s*p-n*h*p)*R,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*R,t[3]=(f*l*r-a*h*r-f*s*c+n*h*c+a*s*d-n*l*d)*R,t[4]=w*R,t[5]=(u*m*r-g*h*r+g*s*d-e*m*d-u*s*p+e*h*p)*R,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*R,t[7]=(o*h*r-u*l*r+u*s*c-e*h*c-o*s*d+e*l*d)*R,t[8]=x*R,t[9]=(g*f*r-u*_*r-g*n*d+e*_*d+u*n*p-e*f*p)*R,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*R,t[11]=(u*a*r-o*f*r-u*n*c+e*f*c+o*n*d-e*a*d)*R,t[12]=L*R,t[13]=(u*_*s-g*f*s+g*n*h-e*_*h-u*n*m+e*f*m)*R,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*R,t[15]=(o*f*s-u*a*s+u*n*l-e*f*l-o*n*h+e*a*h)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,g=r*f,_=o*u,m=o*f,p=a*f,v=l*c,w=l*u,x=l*f,L=n.x,P=n.y,R=n.z;return s[0]=(1-(_+p))*L,s[1]=(d+x)*L,s[2]=(g-w)*L,s[3]=0,s[4]=(d-x)*P,s[5]=(1-(h+p))*P,s[6]=(m+v)*P,s[7]=0,s[8]=(g+w)*R,s[9]=(m-v)*R,s[10]=(1-(h+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ts.set(s[0],s[1],s[2]).length();const o=Ts.set(s[4],s[5],s[6]).length(),a=Ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Mn.copy(this);const c=1/r,u=1/o,f=1/a;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=f,Mn.elements[9]*=f,Mn.elements[10]*=f,e.setFromRotationMatrix(Mn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=mi){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),h=(n+s)/(n-s);let d,g;if(a===mi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===sa)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=mi){const l=this.elements,c=1/(e-t),u=1/(n-s),f=1/(o-r),h=(e+t)*c,d=(n+s)*u;let g,_;if(a===mi)g=(o+r)*f,_=-2*f;else if(a===sa)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ts=new q,Mn=new Ee,K0=new q(0,0,0),Z0=new q(1,1,1),Li=new q,go=new q,on=new q,Lh=new Ee,Ih=new lr;class We{constructor(t=0,e=0,n=0,s=We.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-sn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Lh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ih.setFromEuler(this),this.setFromQuaternion(Ih,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}We.DEFAULT_ORDER="XYZ";class du{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let J0=0;const Dh=new q,As=new lr,ni=new Ee,_o=new q,vr=new q,Q0=new q,tx=new lr,Nh=new q(1,0,0),Uh=new q(0,1,0),Fh=new q(0,0,1),Oh={type:"added"},ex={type:"removed"},Cs={type:"childadded",child:null},sl={type:"childremoved",child:null};class qe extends ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=Jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DEFAULT_UP.clone();const t=new q,e=new We,n=new lr,s=new q(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ee},normalMatrix:{value:new Kt}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new du,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return As.setFromAxisAngle(t,e),this.quaternion.multiply(As),this}rotateOnWorldAxis(t,e){return As.setFromAxisAngle(t,e),this.quaternion.premultiply(As),this}rotateX(t){return this.rotateOnAxis(Nh,t)}rotateY(t){return this.rotateOnAxis(Uh,t)}rotateZ(t){return this.rotateOnAxis(Fh,t)}translateOnAxis(t,e){return Dh.copy(t).applyQuaternion(this.quaternion),this.position.add(Dh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nh,t)}translateY(t){return this.translateOnAxis(Uh,t)}translateZ(t){return this.translateOnAxis(Fh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_o.copy(t):_o.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(vr,_o,this.up):ni.lookAt(_o,vr,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),As.setFromRotationMatrix(ni),this.quaternion.premultiply(As.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Oh),Cs.child=t,this.dispatchEvent(Cs),Cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ex),sl.child=t,this.dispatchEvent(sl),sl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Oh),Cs.child=t,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,t,Q0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,tx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}qe.DEFAULT_UP=new q(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new q,ii=new q,rl=new q,si=new q,Rs=new q,Ps=new q,Bh=new q,ol=new q,al=new q,ll=new q,cl=new me,ul=new me,hl=new me;class An{constructor(t=new q,e=new q,n=new q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),En.subVectors(t,e),s.cross(En);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){En.subVectors(s,e),ii.subVectors(n,e),rl.subVectors(t,e);const o=En.dot(En),a=En.dot(ii),l=En.dot(rl),c=ii.dot(ii),u=ii.dot(rl),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,si.x),l.addScaledVector(o,si.y),l.addScaledVector(a,si.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return cl.setScalar(0),ul.setScalar(0),hl.setScalar(0),cl.fromBufferAttribute(t,e),ul.fromBufferAttribute(t,n),hl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(cl,r.x),o.addScaledVector(ul,r.y),o.addScaledVector(hl,r.z),o}static isFrontFacing(t,e,n,s){return En.subVectors(n,e),ii.subVectors(t,e),En.cross(ii).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),En.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return An.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return An.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return An.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return An.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return An.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Rs.subVectors(s,n),Ps.subVectors(r,n),ol.subVectors(t,n);const l=Rs.dot(ol),c=Ps.dot(ol);if(l<=0&&c<=0)return e.copy(n);al.subVectors(t,s);const u=Rs.dot(al),f=Ps.dot(al);if(u>=0&&f<=u)return e.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Rs,o);ll.subVectors(t,r);const d=Rs.dot(ll),g=Ps.dot(ll);if(g>=0&&d<=g)return e.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ps,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Bh.subVectors(r,s),a=(f-u)/(f-u+(d-g)),e.copy(s).addScaledVector(Bh,a);const p=1/(m+_+h);return o=_*p,a=h*p,e.copy(n).addScaledVector(Rs,o).addScaledVector(Ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Up={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},vo={h:0,s:0,l:0};function fl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ee{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=z0(t,1),e=sn(e,0,1),n=sn(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=fl(o,r,t+1/3),this.g=fl(o,r,t),this.b=fl(o,r,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=gn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gn){const n=Up[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xi(t.r),this.g=xi(t.g),this.b=xi(t.b),this}copyLinearToSRGB(t){return this.r=Ys(t.r),this.g=Ys(t.g),this.b=Ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return ie.fromWorkingColorSpace(ke.copy(this),t),Math.round(sn(ke.r*255,0,255))*65536+Math.round(sn(ke.g*255,0,255))*256+Math.round(sn(ke.b*255,0,255))}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(ke.copy(this),e);const n=ke.r,s=ke.g,r=ke.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=gn){ie.fromWorkingColorSpace(ke.copy(this),t);const e=ke.r,n=ke.g,s=ke.b;return t!==gn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ii),this.setHSL(Ii.h+t,Ii.s+e,Ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ii),t.getHSL(vo);const n=ja(Ii.h,vo.h,e),s=ja(Ii.s,vo.s,e),r=ja(Ii.l,vo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new ee;ee.NAMES=Up;let nx=0,to=class extends ar{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=Jr(),this.name="",this.blending=qs,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jl,this.blendDst=Kl,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(n.blending=this.blending),this.side!==qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jl&&(n.blendSrc=this.blendSrc),this.blendDst!==Kl&&(n.blendDst=this.blendDst),this.blendEquation!==as&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}};class Fp extends to{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.combine=gp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new q,xo=new ne;class Yn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Mh,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xo.fromBufferAttribute(this,e),xo.applyMatrix3(t),this.setXY(e,xo.x,xo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array),s=Qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Mh&&(t.usage=this.usage),t}}class Op extends Yn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Bp extends Yn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fn extends Yn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ix=0;const mn=new Ee,dl=new qe,Ls=new q,an=new Qr,xr=new Qr,Ne=new q;class wi extends ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=Jr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lp(t)?Bp:Op)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return dl.lookAt(t),dl.updateMatrix(),this.applyMatrix4(dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fn(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fu);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];xr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(an.min,xr.min),an.expandByPoint(Ne),Ne.addVectors(an.max,xr.max),an.expandByPoint(Ne)):(an.expandByPoint(xr.min),an.expandByPoint(xr.max))}an.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ne));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ne.fromBufferAttribute(a,c),l&&(Ls.fromBufferAttribute(t,c),Ne.add(Ls)),s=Math.max(s,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new q,l[I]=new q;const c=new q,u=new q,f=new q,h=new ne,d=new ne,g=new ne,_=new q,m=new q;function p(I,b,S){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,b),f.fromBufferAttribute(n,S),h.fromBufferAttribute(r,I),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(D),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),a[I].add(_),a[b].add(_),a[S].add(_),l[I].add(m),l[b].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let I=0,b=v.length;I<b;++I){const S=v[I],D=S.start,B=S.count;for(let N=D,k=D+B;N<k;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const w=new q,x=new q,L=new q,P=new q;function R(I){L.fromBufferAttribute(s,I),P.copy(L);const b=a[I];w.copy(b),w.sub(L.multiplyScalar(L.dot(b))).normalize(),x.crossVectors(P,b);const D=x.dot(l[I])<0?-1:1;o.setXYZW(I,w.x,w.y,w.z,D)}for(let I=0,b=v.length;I<b;++I){const S=v[I],D=S.start,B=S.count;for(let N=D,k=D+B;N<k;N+=3)R(t.getX(N+0)),R(t.getX(N+1)),R(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new q,r=new q,o=new q,a=new q,l=new q,c=new q,u=new q,f=new q;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Yn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new wi,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zh=new Ee,Qi=new Np,yo=new fu,kh=new q,So=new q,Mo=new q,Eo=new q,pl=new q,bo=new q,Hh=new q,wo=new q;class Fe extends qe{constructor(t=new wi,e=new Fp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){bo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(pl.fromBufferAttribute(f,t),o?bo.addScaledVector(pl,u):bo.addScaledVector(pl.sub(e),u))}e.add(bo)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(r),Qi.copy(t.ray).recast(t.near),!(yo.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(yo,kh)===null||Qi.origin.distanceToSquared(kh)>(t.far-t.near)**2))&&(zh.copy(r).invert(),Qi.copy(t.ray).applyMatrix4(zh),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),w=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,L=w;x<L;x+=3){const P=a.getX(x),R=a.getX(x+1),I=a.getX(x+2);s=To(this,p,t,n,c,u,f,P,R,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),w=a.getX(m+1),x=a.getX(m+2);s=To(this,o,t,n,c,u,f,v,w,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),w=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,L=w;x<L;x+=3){const P=x,R=x+1,I=x+2;s=To(this,p,t,n,c,u,f,P,R,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=m,w=m+1,x=m+2;s=To(this,o,t,n,c,u,f,v,w,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function sx(i,t,e,n,s,r,o,a){let l;if(t.side===Ke?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===qi,a),l===null)return null;wo.copy(a),wo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(wo);return c<e.near||c>e.far?null:{distance:c,point:wo.clone(),object:i}}function To(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,So),i.getVertexPosition(l,Mo),i.getVertexPosition(c,Eo);const u=sx(i,t,e,n,So,Mo,Eo,Hh);if(u){const f=new q;An.getBarycoord(Hh,So,Mo,Eo,f),s&&(u.uv=An.getInterpolatedAttribute(s,a,l,c,f,new ne)),r&&(u.uv1=An.getInterpolatedAttribute(r,a,l,c,f,new ne)),o&&(u.normal=An.getInterpolatedAttribute(o,a,l,c,f,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new q,materialIndex:0};An.getNormal(So,Mo,Eo,h.normal),u.face=h,u.barycoord=f}return u}class gi extends wi{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new fn(c,3)),this.setAttribute("normal",new fn(u,3)),this.setAttribute("uv",new fn(f,2));function g(_,m,p,v,w,x,L,P,R,I,b){const S=x/R,D=L/I,B=x/2,N=L/2,k=P/2,H=R+1,F=I+1;let Y=0,z=0;const ot=new q;for(let _t=0;_t<F;_t++){const yt=_t*D-N;for(let dt=0;dt<H;dt++){const Zt=dt*S-B;ot[_]=Zt*v,ot[m]=yt*w,ot[p]=k,c.push(ot.x,ot.y,ot.z),ot[_]=0,ot[m]=0,ot[p]=P>0?1:-1,u.push(ot.x,ot.y,ot.z),f.push(dt/R),f.push(1-_t/I),Y+=1}}for(let _t=0;_t<I;_t++)for(let yt=0;yt<R;yt++){const dt=h+yt+H*_t,Zt=h+yt+H*(_t+1),rt=h+(yt+1)+H*(_t+1),gt=h+(yt+1)+H*_t;l.push(dt,Zt,gt),l.push(Zt,rt,gt),z+=6}a.addGroup(d,z,b),d+=z,h+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function er(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ye(i){const t={};for(let e=0;e<i.length;e++){const n=er(i[e]);for(const s in n)t[s]=n[s]}return t}function rx(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function zp(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const ox={clone:er,merge:Ye};var ax=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends to{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ax,this.fragmentShader=lx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=er(t.uniforms),this.uniformsGroups=rx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class kp extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=mi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Di=new q,Vh=new ne,Gh=new ne;class cn extends kp{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Nc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($a*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Nc*2*Math.atan(Math.tan($a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Di.x,Di.y).multiplyScalar(-t/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-t/Di.z)}getViewSize(t,e){return this.getViewBounds(t,Vh,Gh),e.subVectors(Gh,Vh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($a*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Is=-90,Ds=1;class cx extends qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new cn(Is,Ds,t,e);s.layers=this.layers,this.add(s);const r=new cn(Is,Ds,t,e);r.layers=this.layers,this.add(r);const o=new cn(Is,Ds,t,e);o.layers=this.layers,this.add(o);const a=new cn(Is,Ds,t,e);a.layers=this.layers,this.add(a);const l=new cn(Is,Ds,t,e);l.layers=this.layers,this.add(l);const c=new cn(Is,Ds,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===mi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Hp extends Ze{constructor(t,e,n,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Zs,super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ux extends gs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Hp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gi(5,5,5),r=new Xi({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:Hi});r.uniforms.tEquirect.value=e;const o=new Fe(s,r),a=e.minFilter;return e.minFilter===hs&&(e.minFilter=Gn),new cx(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const ml=new q,hx=new q,fx=new Kt;class rs{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ml.subVectors(n,e).cross(hx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ml),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||fx.getNormalMatrix(t),s=this.coplanarPoint(ml).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new fu,Ao=new q;class pu{constructor(t=new rs,e=new rs,n=new rs,s=new rs,r=new rs,o=new rs){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mi){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],v=s[13],w=s[14],x=s[15];if(n[0].setComponents(l-r,h-c,m-d,x-p).normalize(),n[1].setComponents(l+r,h+c,m+d,x+p).normalize(),n[2].setComponents(l+o,h+u,m+g,x+v).normalize(),n[3].setComponents(l-o,h-u,m-g,x-v).normalize(),n[4].setComponents(l-a,h-f,m-_,x-w).normalize(),e===mi)n[5].setComponents(l+a,h+f,m+_,x+w).normalize();else if(e===sa)n[5].setComponents(a,f,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(t){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ao.x=s.normal.x>0?t.max.x:t.min.x,Ao.y=s.normal.y>0?t.max.y:t.min.y,Ao.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vp(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function dx(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Ra extends wi{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=t/a,h=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const v=p*h-o;for(let w=0;w<c;w++){const x=w*f-r;g.push(x,-v,0),_.push(0,0,1),m.push(w/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const w=v+c*p,x=v+c*(p+1),L=v+1+c*(p+1),P=v+1+c*p;d.push(w,x,P),d.push(x,L,P)}this.setIndex(d),this.setAttribute("position",new fn(g,3)),this.setAttribute("normal",new fn(_,3)),this.setAttribute("uv",new fn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ra(t.width,t.height,t.widthSegments,t.heightSegments)}}var px=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mx=`#ifdef USE_ALPHAHASH
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
#endif`,gx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_x=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yx=`#ifdef USE_AOMAP
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
#endif`,Sx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mx=`#ifdef USE_BATCHING
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
#endif`,Ex=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ax=`#ifdef USE_IRIDESCENCE
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
#endif`,Cx=`#ifdef USE_BUMPMAP
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
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ux=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ox=`#define PI 3.141592653589793
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
} // validated`,Bx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zx=`vec3 transformedNormal = objectNormal;
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
#endif`,kx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wx="gl_FragColor = linearToOutputTexel( gl_FragColor );",qx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xx=`#ifdef USE_ENVMAP
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
#endif`,Yx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$x=`#ifdef USE_ENVMAP
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
#endif`,jx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kx=`#ifdef USE_ENVMAP
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
#endif`,Zx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ty=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ey=`#ifdef USE_GRADIENTMAP
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
}`,ny=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ry=`uniform bool receiveShadow;
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
#endif`,oy=`#ifdef USE_ENVMAP
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
#endif`,ay=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ly=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hy=`PhysicalMaterial material;
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
#endif`,fy=`struct PhysicalMaterial {
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
}`,dy=`
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
#endif`,py=`#if defined( RE_IndirectDiffuse )
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
#endif`,my=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_y=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,My=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ey=`#if defined( USE_POINTS_UV )
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
#endif`,by=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ty=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ay=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ry=`#ifdef USE_MORPHTARGETS
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
#endif`,Py=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ly=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Iy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ny=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fy=`#ifdef USE_NORMALMAP
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
#endif`,Oy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,By=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ky=`#ifdef USE_IRIDESCENCEMAP
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$y=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ky=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jy=`float getShadowMask() {
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
}`,Qy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tS=`#ifdef USE_SKINNING
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
#endif`,eS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nS=`#ifdef USE_SKINNING
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
#endif`,iS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aS=`#ifdef USE_TRANSMISSION
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
#endif`,lS=`#ifdef USE_TRANSMISSION
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
#endif`,cS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pS=`uniform sampler2D t2D;
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
}`,mS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xS=`#include <common>
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
}`,yS=`#if DEPTH_PACKING == 3200
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
}`,SS=`#define DISTANCE
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
}`,MS=`#define DISTANCE
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
}`,ES=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wS=`uniform float scale;
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
}`,TS=`uniform vec3 diffuse;
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
}`,AS=`#include <common>
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
}`,CS=`uniform vec3 diffuse;
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
}`,RS=`#define LAMBERT
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
}`,PS=`#define LAMBERT
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
}`,LS=`#define MATCAP
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
}`,IS=`#define MATCAP
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
}`,DS=`#define NORMAL
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
}`,NS=`#define NORMAL
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
}`,US=`#define PHONG
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
}`,FS=`#define PHONG
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
}`,OS=`#define STANDARD
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
}`,BS=`#define STANDARD
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
}`,zS=`#define TOON
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
}`,kS=`#define TOON
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
}`,VS=`uniform vec3 diffuse;
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
}`,GS=`#include <common>
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
}`,WS=`uniform vec3 color;
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
}`,qS=`uniform float rotation;
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
}`,XS=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:px,alphahash_pars_fragment:mx,alphamap_fragment:gx,alphamap_pars_fragment:_x,alphatest_fragment:vx,alphatest_pars_fragment:xx,aomap_fragment:yx,aomap_pars_fragment:Sx,batching_pars_vertex:Mx,batching_vertex:Ex,begin_vertex:bx,beginnormal_vertex:wx,bsdfs:Tx,iridescence_fragment:Ax,bumpmap_pars_fragment:Cx,clipping_planes_fragment:Rx,clipping_planes_pars_fragment:Px,clipping_planes_pars_vertex:Lx,clipping_planes_vertex:Ix,color_fragment:Dx,color_pars_fragment:Nx,color_pars_vertex:Ux,color_vertex:Fx,common:Ox,cube_uv_reflection_fragment:Bx,defaultnormal_vertex:zx,displacementmap_pars_vertex:kx,displacementmap_vertex:Hx,emissivemap_fragment:Vx,emissivemap_pars_fragment:Gx,colorspace_fragment:Wx,colorspace_pars_fragment:qx,envmap_fragment:Xx,envmap_common_pars_fragment:Yx,envmap_pars_fragment:$x,envmap_pars_vertex:jx,envmap_physical_pars_fragment:oy,envmap_vertex:Kx,fog_vertex:Zx,fog_pars_vertex:Jx,fog_fragment:Qx,fog_pars_fragment:ty,gradientmap_pars_fragment:ey,lightmap_pars_fragment:ny,lights_lambert_fragment:iy,lights_lambert_pars_fragment:sy,lights_pars_begin:ry,lights_toon_fragment:ay,lights_toon_pars_fragment:ly,lights_phong_fragment:cy,lights_phong_pars_fragment:uy,lights_physical_fragment:hy,lights_physical_pars_fragment:fy,lights_fragment_begin:dy,lights_fragment_maps:py,lights_fragment_end:my,logdepthbuf_fragment:gy,logdepthbuf_pars_fragment:_y,logdepthbuf_pars_vertex:vy,logdepthbuf_vertex:xy,map_fragment:yy,map_pars_fragment:Sy,map_particle_fragment:My,map_particle_pars_fragment:Ey,metalnessmap_fragment:by,metalnessmap_pars_fragment:wy,morphinstance_vertex:Ty,morphcolor_vertex:Ay,morphnormal_vertex:Cy,morphtarget_pars_vertex:Ry,morphtarget_vertex:Py,normal_fragment_begin:Ly,normal_fragment_maps:Iy,normal_pars_fragment:Dy,normal_pars_vertex:Ny,normal_vertex:Uy,normalmap_pars_fragment:Fy,clearcoat_normal_fragment_begin:Oy,clearcoat_normal_fragment_maps:By,clearcoat_pars_fragment:zy,iridescence_pars_fragment:ky,opaque_fragment:Hy,packing:Vy,premultiplied_alpha_fragment:Gy,project_vertex:Wy,dithering_fragment:qy,dithering_pars_fragment:Xy,roughnessmap_fragment:Yy,roughnessmap_pars_fragment:$y,shadowmap_pars_fragment:jy,shadowmap_pars_vertex:Ky,shadowmap_vertex:Zy,shadowmask_pars_fragment:Jy,skinbase_vertex:Qy,skinning_pars_vertex:tS,skinning_vertex:eS,skinnormal_vertex:nS,specularmap_fragment:iS,specularmap_pars_fragment:sS,tonemapping_fragment:rS,tonemapping_pars_fragment:oS,transmission_fragment:aS,transmission_pars_fragment:lS,uv_pars_fragment:cS,uv_pars_vertex:uS,uv_vertex:hS,worldpos_vertex:fS,background_vert:dS,background_frag:pS,backgroundCube_vert:mS,backgroundCube_frag:gS,cube_vert:_S,cube_frag:vS,depth_vert:xS,depth_frag:yS,distanceRGBA_vert:SS,distanceRGBA_frag:MS,equirect_vert:ES,equirect_frag:bS,linedashed_vert:wS,linedashed_frag:TS,meshbasic_vert:AS,meshbasic_frag:CS,meshlambert_vert:RS,meshlambert_frag:PS,meshmatcap_vert:LS,meshmatcap_frag:IS,meshnormal_vert:DS,meshnormal_frag:NS,meshphong_vert:US,meshphong_frag:FS,meshphysical_vert:OS,meshphysical_frag:BS,meshtoon_vert:zS,meshtoon_frag:kS,points_vert:HS,points_frag:VS,shadow_vert:GS,shadow_frag:WS,sprite_vert:qS,sprite_frag:XS},bt={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Hn={basic:{uniforms:Ye([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Ye([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new ee(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Ye([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Ye([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Ye([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new ee(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Ye([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Ye([bt.points,bt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Ye([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Ye([bt.common,bt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Ye([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Ye([bt.sprite,bt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:Ye([bt.common,bt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:Ye([bt.lights,bt.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Hn.physical={uniforms:Ye([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const Co={r:0,b:0,g:0},es=new We,YS=new Ee;function $S(i,t,e,n,s,r,o){const a=new ee(0);let l=r===!0?0:1,c,u,f=null,h=0,d=null;function g(v){let w=v.isScene===!0?v.background:null;return w&&w.isTexture&&(w=(v.backgroundBlurriness>0?e:t).get(w)),w}function _(v){let w=!1;const x=g(v);x===null?p(a,l):x&&x.isColor&&(p(x,1),w=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,w){const x=g(w);x&&(x.isCubeTexture||x.mapping===Aa)?(u===void 0&&(u=new Fe(new gi(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:er(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),es.copy(w.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(YS.makeRotationFromEuler(es)),u.material.toneMapped=ie.getTransfer(x.colorSpace)!==pe,(f!==x||h!==x.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,d=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Fe(new Ra(2,2),new Xi({name:"BackgroundMaterial",uniforms:er(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=ie.getTransfer(x.colorSpace)!==pe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,w){v.getRGB(Co,zp(i)),n.buffers.color.setClear(Co.r,Co.g,Co.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(v,w=1){a.set(v),l=w,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:_,addToRenderList:m}}function jS(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(S,D,B,N,k){let H=!1;const F=f(N,B,D);r!==F&&(r=F,c(r.object)),H=d(S,N,B,k),H&&g(S,N,B,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,x(S,D,B,N),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function f(S,D,B){const N=B.wireframe===!0;let k=n[S.id];k===void 0&&(k={},n[S.id]=k);let H=k[D.id];H===void 0&&(H={},k[D.id]=H);let F=H[N];return F===void 0&&(F=h(l()),H[N]=F),F}function h(S){const D=[],B=[],N=[];for(let k=0;k<e;k++)D[k]=0,B[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:N,object:S,attributes:{},index:null}}function d(S,D,B,N){const k=r.attributes,H=D.attributes;let F=0;const Y=B.getAttributes();for(const z in Y)if(Y[z].location>=0){const _t=k[z];let yt=H[z];if(yt===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(yt=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(yt=S.instanceColor)),_t===void 0||_t.attribute!==yt||yt&&_t.data!==yt.data)return!0;F++}return r.attributesNum!==F||r.index!==N}function g(S,D,B,N){const k={},H=D.attributes;let F=0;const Y=B.getAttributes();for(const z in Y)if(Y[z].location>=0){let _t=H[z];_t===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(_t=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(_t=S.instanceColor));const yt={};yt.attribute=_t,_t&&_t.data&&(yt.data=_t.data),k[z]=yt,F++}r.attributes=k,r.attributesNum=F,r.index=N}function _(){const S=r.newAttributes;for(let D=0,B=S.length;D<B;D++)S[D]=0}function m(S){p(S,0)}function p(S,D){const B=r.newAttributes,N=r.enabledAttributes,k=r.attributeDivisors;B[S]=1,N[S]===0&&(i.enableVertexAttribArray(S),N[S]=1),k[S]!==D&&(i.vertexAttribDivisor(S,D),k[S]=D)}function v(){const S=r.newAttributes,D=r.enabledAttributes;for(let B=0,N=D.length;B<N;B++)D[B]!==S[B]&&(i.disableVertexAttribArray(B),D[B]=0)}function w(S,D,B,N,k,H,F){F===!0?i.vertexAttribIPointer(S,D,B,k,H):i.vertexAttribPointer(S,D,B,N,k,H)}function x(S,D,B,N){_();const k=N.attributes,H=B.getAttributes(),F=D.defaultAttributeValues;for(const Y in H){const z=H[Y];if(z.location>=0){let ot=k[Y];if(ot===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(ot=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(ot=S.instanceColor)),ot!==void 0){const _t=ot.normalized,yt=ot.itemSize,dt=t.get(ot);if(dt===void 0)continue;const Zt=dt.buffer,rt=dt.type,gt=dt.bytesPerElement,et=rt===i.INT||rt===i.UNSIGNED_INT||ot.gpuType===ou;if(ot.isInterleavedBufferAttribute){const $=ot.data,ft=$.stride,lt=ot.offset;if($.isInstancedInterleavedBuffer){for(let St=0;St<z.locationSize;St++)p(z.location+St,$.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let St=0;St<z.locationSize;St++)m(z.location+St);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let St=0;St<z.locationSize;St++)w(z.location+St,yt/z.locationSize,rt,_t,ft*gt,(lt+yt/z.locationSize*St)*gt,et)}else{if(ot.isInstancedBufferAttribute){for(let $=0;$<z.locationSize;$++)p(z.location+$,ot.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let $=0;$<z.locationSize;$++)m(z.location+$);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let $=0;$<z.locationSize;$++)w(z.location+$,yt/z.locationSize,rt,_t,yt*gt,yt/z.locationSize*$*gt,et)}}else if(F!==void 0){const _t=F[Y];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(z.location,_t);break;case 3:i.vertexAttrib3fv(z.location,_t);break;case 4:i.vertexAttrib4fv(z.location,_t);break;default:i.vertexAttrib1fv(z.location,_t)}}}}v()}function L(){I();for(const S in n){const D=n[S];for(const B in D){const N=D[B];for(const k in N)u(N[k].object),delete N[k];delete D[B]}delete n[S]}}function P(S){if(n[S.id]===void 0)return;const D=n[S.id];for(const B in D){const N=D[B];for(const k in N)u(N[k].object),delete N[k];delete D[B]}delete n[S.id]}function R(S){for(const D in n){const B=n[D];if(B[S.id]===void 0)continue;const N=B[S.id];for(const k in N)u(N[k].object),delete N[k];delete B[S.id]}}function I(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function KS(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];e.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ZS(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Cn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const I=R===Zr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Ei&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==pi&&!I)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:x,vertexTextures:L,maxSamples:P}}function JS(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new rs,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const v=r?0:n,w=v*4;let x=p.clippingState||null;l.value=x,x=u(g,h,w,d);for(let L=0;L!==w;++L)x[L]=e[L];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,x=d;w!==_;++w,x+=4)o.copy(f[w]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function QS(i){let t=new WeakMap;function e(o,a){return a===sc?o.mapping=Zs:a===rc&&(o.mapping=Js),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===sc||a===rc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ux(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Gp extends kp{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const zs=4,Wh=[.125,.215,.35,.446,.526,.582],ls=20,gl=new Gp,qh=new ee;let _l=null,vl=0,xl=0,yl=!1;const os=(1+Math.sqrt(5))/2,Ns=1/os,Xh=[new q(-os,Ns,0),new q(os,Ns,0),new q(-Ns,0,os),new q(Ns,0,os),new q(0,os,-Ns),new q(0,os,Ns),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class Yh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){_l=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_l,vl,xl),this._renderer.xr.enabled=yl,t.scissorTest=!1,Ro(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zs||t.mapping===Js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_l=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Zr,format:Cn,colorSpace:or,depthBuffer:!1},s=$h(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$h(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tM(r)),this._blurMaterial=eM(r,t,e)}return s}_compileMaterial(t){const e=new Fe(this._lodPlanes[0],t);this._renderer.compile(e,gl)}_sceneToCubeUV(t,e,n,s){const a=new cn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(qh),u.toneMapping=Vi,u.autoClear=!1;const d=new Fp({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1}),g=new Fe(new gi,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(qh),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const w=this._cubeSize;Ro(s,v*w,p>2?w:0,w,w),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Zs||t.mapping===Js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Fe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ro(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,gl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Xh[(s-r-1)%Xh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Fe(this._lodPlanes[s],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ls-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):ls;m>ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ls}`);const p=[];let v=0;for(let R=0;R<ls;++R){const I=R/_,b=Math.exp(-I*I/2);p.push(b),R===0?v+=b:R<m&&(v+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:w}=this;h.dTheta.value=g,h.mipInt.value=w-n;const x=this._sizeLods[s],L=3*x*(s>w-zs?s-w+zs:0),P=4*(this._cubeSize-x);Ro(e,L,P,3*x,2*x),l.setRenderTarget(e),l.render(f,gl)}}function tM(i){const t=[],e=[],n=[];let s=i;const r=i-zs+1+Wh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-zs?l=Wh[o-i+zs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*d),w=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let P=0;P<d;P++){const R=P%3*2/3-1,I=P>2?0:-1,b=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];v.set(b,_*g*P),w.set(h,m*g*P);const S=[P,P,P,P,P,P];x.set(S,p*g*P)}const L=new wi;L.setAttribute("position",new Yn(v,_)),L.setAttribute("uv",new Yn(w,m)),L.setAttribute("faceIndex",new Yn(x,p)),t.push(L),s>zs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $h(i,t,e){const n=new gs(i,t,e);return n.texture.mapping=Aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ro(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function eM(i,t,e){const n=new Float32Array(ls),s=new q(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:mu(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function jh(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mu(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Kh(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function mu(){return`

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
	`}function nM(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===sc||l===rc,u=l===Zs||l===Js;if(c||u){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Yh(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new Yh(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function iM(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Cr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function sM(i,t,e,n){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)t.update(h[g],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const v=d.array;_=d.version;for(let w=0,x=v.length;w<x;w+=3){const L=v[w+0],P=v[w+1],R=v[w+2];h.push(L,P,P,R,R,L)}}else if(g!==void 0){const v=g.array;_=g.version;for(let w=0,x=v.length/3-1;w<x;w+=3){const L=w+0,P=w+1,R=w+2;h.push(L,P,P,R,R,L)}}else return;const m=new(Lp(h)?Bp:Op)(h,1);m.version=_;const p=r.get(f);p&&t.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function rM(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){i.drawElements(n,d,r,h*o),e.update(d,n,1)}function c(h,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,h*o,g),e.update(d,n,g))}function u(h,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function f(h,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,h,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=d[v]*_[v];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function oM(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function aM(i,t,e){const n=new WeakMap,s=new me;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let S=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var d=S;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let L=a.attributes.position.count*x,P=1;L>t.maxTextureSize&&(P=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const R=new Float32Array(L*P*4*f),I=new Dp(R,L,P,f);I.type=pi,I.needsUpdate=!0;const b=x*4;for(let D=0;D<f;D++){const B=p[D],N=v[D],k=w[D],H=L*P*4*D;for(let F=0;F<B.count;F++){const Y=F*b;g===!0&&(s.fromBufferAttribute(B,F),R[H+Y+0]=s.x,R[H+Y+1]=s.y,R[H+Y+2]=s.z,R[H+Y+3]=0),_===!0&&(s.fromBufferAttribute(N,F),R[H+Y+4]=s.x,R[H+Y+5]=s.y,R[H+Y+6]=s.z,R[H+Y+7]=0),m===!0&&(s.fromBufferAttribute(k,F),R[H+Y+8]=s.x,R[H+Y+9]=s.y,R[H+Y+10]=s.z,R[H+Y+11]=k.itemSize===4?s.w:1)}}h={count:f,texture:I,size:new ne(L,P)},n.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function lM(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Wp extends Ze{constructor(t,e,n,s,r,o,a,l,c,u=Xs){if(u!==Xs&&u!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Xs&&(n=ms),n===void 0&&u===tr&&(n=Qs),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:In,this.minFilter=l!==void 0?l:In,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const qp=new Ze,Zh=new Wp(1,1),Xp=new Dp,Yp=new $0,$p=new Hp,Jh=[],Qh=[],tf=new Float32Array(16),ef=new Float32Array(9),nf=new Float32Array(4);function cr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Jh[s];if(r===void 0&&(r=new Float32Array(s),Jh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Pa(i,t){let e=Qh[t];e===void 0&&(e=new Int32Array(t),Qh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function cM(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function uM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function hM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function fM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function dM(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;nf.set(n),i.uniformMatrix2fv(this.addr,!1,nf),De(e,n)}}function pM(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;ef.set(n),i.uniformMatrix3fv(this.addr,!1,ef),De(e,n)}}function mM(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;tf.set(n),i.uniformMatrix4fv(this.addr,!1,tf),De(e,n)}}function gM(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _M(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function vM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function xM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function yM(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function SM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function MM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function EM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function bM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Zh.compareFunction=Pp,r=Zh):r=qp,e.setTexture2D(t||r,s)}function wM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Yp,s)}function TM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$p,s)}function AM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Xp,s)}function CM(i){switch(i){case 5126:return cM;case 35664:return uM;case 35665:return hM;case 35666:return fM;case 35674:return dM;case 35675:return pM;case 35676:return mM;case 5124:case 35670:return gM;case 35667:case 35671:return _M;case 35668:case 35672:return vM;case 35669:case 35673:return xM;case 5125:return yM;case 36294:return SM;case 36295:return MM;case 36296:return EM;case 35678:case 36198:case 36298:case 36306:case 35682:return bM;case 35679:case 36299:case 36307:return wM;case 35680:case 36300:case 36308:case 36293:return TM;case 36289:case 36303:case 36311:case 36292:return AM}}function RM(i,t){i.uniform1fv(this.addr,t)}function PM(i,t){const e=cr(t,this.size,2);i.uniform2fv(this.addr,e)}function LM(i,t){const e=cr(t,this.size,3);i.uniform3fv(this.addr,e)}function IM(i,t){const e=cr(t,this.size,4);i.uniform4fv(this.addr,e)}function DM(i,t){const e=cr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function NM(i,t){const e=cr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function UM(i,t){const e=cr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function FM(i,t){i.uniform1iv(this.addr,t)}function OM(i,t){i.uniform2iv(this.addr,t)}function BM(i,t){i.uniform3iv(this.addr,t)}function zM(i,t){i.uniform4iv(this.addr,t)}function kM(i,t){i.uniform1uiv(this.addr,t)}function HM(i,t){i.uniform2uiv(this.addr,t)}function VM(i,t){i.uniform3uiv(this.addr,t)}function GM(i,t){i.uniform4uiv(this.addr,t)}function WM(i,t,e){const n=this.cache,s=t.length,r=Pa(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||qp,r[o])}function qM(i,t,e){const n=this.cache,s=t.length,r=Pa(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Yp,r[o])}function XM(i,t,e){const n=this.cache,s=t.length,r=Pa(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||$p,r[o])}function YM(i,t,e){const n=this.cache,s=t.length,r=Pa(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Xp,r[o])}function $M(i){switch(i){case 5126:return RM;case 35664:return PM;case 35665:return LM;case 35666:return IM;case 35674:return DM;case 35675:return NM;case 35676:return UM;case 5124:case 35670:return FM;case 35667:case 35671:return OM;case 35668:case 35672:return BM;case 35669:case 35673:return zM;case 5125:return kM;case 36294:return HM;case 36295:return VM;case 36296:return GM;case 35678:case 36198:case 36298:case 36306:case 35682:return WM;case 35679:case 36299:case 36307:return qM;case 35680:case 36300:case 36308:case 36293:return XM;case 36289:case 36303:case 36311:case 36292:return YM}}class jM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=CM(e.type)}}class KM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$M(e.type)}}class ZM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Sl=/(\w+)(\])?(\[|\.)?/g;function sf(i,t){i.seq.push(t),i.map[t.id]=t}function JM(i,t,e){const n=i.name,s=n.length;for(Sl.lastIndex=0;;){const r=Sl.exec(n),o=Sl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){sf(e,c===void 0?new jM(a,i,t):new KM(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new ZM(a),sf(e,f)),e=f}}}class Ko{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);JM(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function rf(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const QM=37297;let tE=0;function eE(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const of=new Kt;function nE(i){ie._getMatrix(of,ie.workingColorSpace,i);const t=`mat3( ${of.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case Ca:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function af(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+eE(i.getShaderSource(t),o)}else return s}function iE(i,t){const e=nE(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function sE(i,t){let e;switch(t){case M0:e="Linear";break;case E0:e="Reinhard";break;case b0:e="Cineon";break;case _p:e="ACESFilmic";break;case T0:e="AgX";break;case A0:e="Neutral";break;case w0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Po=new q;function rE(){ie.getLuminanceCoefficients(Po);const i=Po.x.toFixed(4),t=Po.y.toFixed(4),e=Po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function aE(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function lE(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Rr(i){return i!==""}function lf(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uc(i){return i.replace(cE,hE)}const uE=new Map;function hE(i,t){let e=Qt[t];if(e===void 0){const n=uE.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Uc(e)}const fE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uf(i){return i.replace(fE,dE)}function dE(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function pE(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===pp?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===mp?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ci&&(t="SHADOWMAP_TYPE_VSM"),t}function mE(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zs:case Js:t="ENVMAP_TYPE_CUBE";break;case Aa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gE(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Js:t="ENVMAP_MODE_REFRACTION";break}return t}function _E(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case gp:t="ENVMAP_BLENDING_MULTIPLY";break;case y0:t="ENVMAP_BLENDING_MIX";break;case S0:t="ENVMAP_BLENDING_ADD";break}return t}function vE(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function xE(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=pE(e),c=mE(e),u=gE(e),f=_E(e),h=vE(e),d=oE(e),g=aE(r),_=s.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rr).join(`
`),p.length>0&&(p+=`
`)):(m=[hf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),p=[hf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vi?"#define TONE_MAPPING":"",e.toneMapping!==Vi?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Vi?sE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,iE("linearToOutputTexel",e.outputColorSpace),rE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rr).join(`
`)),o=Uc(o),o=lf(o,e),o=cf(o,e),a=Uc(a),a=lf(a,e),a=cf(a,e),o=uf(o),a=uf(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=v+m+o,x=v+p+a,L=rf(s,s.VERTEX_SHADER,w),P=rf(s,s.FRAGMENT_SHADER,x);s.attachShader(_,L),s.attachShader(_,P),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(D){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(_).trim(),N=s.getShaderInfoLog(L).trim(),k=s.getShaderInfoLog(P).trim();let H=!0,F=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,L,P);else{const Y=af(s,L,"vertex"),z=af(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+Y+`
`+z)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(N===""||k==="")&&(F=!1);F&&(D.diagnostics={runnable:H,programLog:B,vertexShader:{log:N,prefix:m},fragmentShader:{log:k,prefix:p}})}s.deleteShader(L),s.deleteShader(P),I=new Ko(s,_),b=lE(s,_)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,QM)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tE++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=P,this}let yE=0;class SE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ME(t),e.set(t,n)),n}}class ME{constructor(t){this.id=yE++,this.code=t,this.usedTimes=0}}function EE(i,t,e,n,s,r,o){const a=new du,l=new SE,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,S,D,B,N){const k=B.fog,H=N.geometry,F=b.isMeshStandardMaterial?B.environment:null,Y=(b.isMeshStandardMaterial?e:t).get(b.envMap||F),z=Y&&Y.mapping===Aa?Y.image.height:null,ot=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const _t=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,yt=_t!==void 0?_t.length:0;let dt=0;H.morphAttributes.position!==void 0&&(dt=1),H.morphAttributes.normal!==void 0&&(dt=2),H.morphAttributes.color!==void 0&&(dt=3);let Zt,rt,gt,et;if(ot){const de=Hn[ot];Zt=de.vertexShader,rt=de.fragmentShader}else Zt=b.vertexShader,rt=b.fragmentShader,l.update(b),gt=l.getVertexShaderID(b),et=l.getFragmentShaderID(b);const $=i.getRenderTarget(),ft=i.state.buffers.depth.getReversed(),lt=N.isInstancedMesh===!0,St=N.isBatchedMesh===!0,Lt=!!b.map,C=!!b.matcap,U=!!Y,A=!!b.aoMap,at=!!b.lightMap,Q=!!b.bumpMap,tt=!!b.normalMap,st=!!b.displacementMap,ut=!!b.emissiveMap,nt=!!b.metalnessMap,M=!!b.roughnessMap,y=b.anisotropy>0,O=b.clearcoat>0,X=b.dispersion>0,K=b.iridescence>0,j=b.sheen>0,xt=b.transmission>0,ht=y&&!!b.anisotropyMap,Mt=O&&!!b.clearcoatMap,Ht=O&&!!b.clearcoatNormalMap,pt=O&&!!b.clearcoatRoughnessMap,Tt=K&&!!b.iridescenceMap,zt=K&&!!b.iridescenceThicknessMap,Vt=j&&!!b.sheenColorMap,Et=j&&!!b.sheenRoughnessMap,Wt=!!b.specularMap,Xt=!!b.specularColorMap,fe=!!b.specularIntensityMap,V=xt&&!!b.transmissionMap,At=xt&&!!b.thicknessMap,it=!!b.gradientMap,ct=!!b.alphaMap,Pt=b.alphaTest>0,Ct=!!b.alphaHash,$t=!!b.extensions;let be=Vi;b.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(be=i.toneMapping);const Be={shaderID:ot,shaderType:b.type,shaderName:b.name,vertexShader:Zt,fragmentShader:rt,defines:b.defines,customVertexShaderID:gt,customFragmentShaderID:et,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:St,batchingColor:St&&N._colorsTexture!==null,instancing:lt,instancingColor:lt&&N.instanceColor!==null,instancingMorph:lt&&N.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:or,alphaToCoverage:!!b.alphaToCoverage,map:Lt,matcap:C,envMap:U,envMapMode:U&&Y.mapping,envMapCubeUVHeight:z,aoMap:A,lightMap:at,bumpMap:Q,normalMap:tt,displacementMap:h&&st,emissiveMap:ut,normalMapObjectSpace:tt&&b.normalMapType===L0,normalMapTangentSpace:tt&&b.normalMapType===Rp,metalnessMap:nt,roughnessMap:M,anisotropy:y,anisotropyMap:ht,clearcoat:O,clearcoatMap:Mt,clearcoatNormalMap:Ht,clearcoatRoughnessMap:pt,dispersion:X,iridescence:K,iridescenceMap:Tt,iridescenceThicknessMap:zt,sheen:j,sheenColorMap:Vt,sheenRoughnessMap:Et,specularMap:Wt,specularColorMap:Xt,specularIntensityMap:fe,transmission:xt,transmissionMap:V,thicknessMap:At,gradientMap:it,opaque:b.transparent===!1&&b.blending===qs&&b.alphaToCoverage===!1,alphaMap:ct,alphaTest:Pt,alphaHash:Ct,combine:b.combine,mapUv:Lt&&_(b.map.channel),aoMapUv:A&&_(b.aoMap.channel),lightMapUv:at&&_(b.lightMap.channel),bumpMapUv:Q&&_(b.bumpMap.channel),normalMapUv:tt&&_(b.normalMap.channel),displacementMapUv:st&&_(b.displacementMap.channel),emissiveMapUv:ut&&_(b.emissiveMap.channel),metalnessMapUv:nt&&_(b.metalnessMap.channel),roughnessMapUv:M&&_(b.roughnessMap.channel),anisotropyMapUv:ht&&_(b.anisotropyMap.channel),clearcoatMapUv:Mt&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Et&&_(b.sheenRoughnessMap.channel),specularMapUv:Wt&&_(b.specularMap.channel),specularColorMapUv:Xt&&_(b.specularColorMap.channel),specularIntensityMapUv:fe&&_(b.specularIntensityMap.channel),transmissionMapUv:V&&_(b.transmissionMap.channel),thicknessMapUv:At&&_(b.thicknessMap.channel),alphaMapUv:ct&&_(b.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(tt||y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!H.attributes.uv&&(Lt||ct),fog:!!k,useFog:b.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ft,skinning:N.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:dt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:be,decodeVideoTexture:Lt&&b.map.isVideoTexture===!0&&ie.getTransfer(b.map.colorSpace)===pe,decodeVideoTextureEmissive:ut&&b.emissiveMap.isVideoTexture===!0&&ie.getTransfer(b.emissiveMap.colorSpace)===pe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Vn,flipSided:b.side===Ke,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:$t&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&b.extensions.multiDraw===!0||St)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)S.push(D),S.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(v(S,b),w(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function v(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function w(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){const S=g[b.type];let D;if(S){const B=Hn[S];D=ox.clone(B.uniforms)}else D=b.uniforms;return D}function L(b,S){let D;for(let B=0,N=u.length;B<N;B++){const k=u[B];if(k.cacheKey===S){D=k,++D.usedTimes;break}}return D===void 0&&(D=new xE(i,S,b,r),u.push(D)),D}function P(b){if(--b.usedTimes===0){const S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function R(b){l.remove(b)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:L,releaseProgram:P,releaseShaderCache:R,programs:u,dispose:I}}function bE(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function wE(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ff(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function df(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,h,d,g,_,m){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[t]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),t++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(f,h){e.length>1&&e.sort(f||wE),n.length>1&&n.sort(h||ff),s.length>1&&s.sort(h||ff)}function u(){for(let f=t,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function TE(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new df,i.set(n,[o])):s>=r.length?(o=new df,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function AE(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new q,color:new ee};break;case"SpotLight":e={position:new q,direction:new q,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new q,halfWidth:new q,halfHeight:new q};break}return i[t.id]=e,e}}}function CE(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let RE=0;function PE(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function LE(i){const t=new AE,e=CE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);const s=new q,r=new Ee,o=new Ee;function a(c){let u=0,f=0,h=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,v=0,w=0,x=0,L=0,P=0,R=0;c.sort(PE);for(let b=0,S=c.length;b<S;b++){const D=c[b],B=D.color,N=D.intensity,k=D.distance,H=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=B.r*N,f+=B.g*N,h+=B.b*N;else if(D.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(D.sh.coefficients[F],N);R++}else if(D.isDirectionalLight){const F=t.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Y=D.shadow,z=e.get(D);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,n.directionalShadow[d]=z,n.directionalShadowMap[d]=H,n.directionalShadowMatrix[d]=D.shadow.matrix,v++}n.directional[d]=F,d++}else if(D.isSpotLight){const F=t.get(D);F.position.setFromMatrixPosition(D.matrixWorld),F.color.copy(B).multiplyScalar(N),F.distance=k,F.coneCos=Math.cos(D.angle),F.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),F.decay=D.decay,n.spot[_]=F;const Y=D.shadow;if(D.map&&(n.spotLightMap[L]=D.map,L++,Y.updateMatrices(D),D.castShadow&&P++),n.spotLightMatrix[_]=Y.matrix,D.castShadow){const z=e.get(D);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=H,x++}_++}else if(D.isRectAreaLight){const F=t.get(D);F.color.copy(B).multiplyScalar(N),F.halfWidth.set(D.width*.5,0,0),F.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=F,m++}else if(D.isPointLight){const F=t.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity),F.distance=D.distance,F.decay=D.decay,D.castShadow){const Y=D.shadow,z=e.get(D);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,z.shadowCameraNear=Y.camera.near,z.shadowCameraFar=Y.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=D.shadow.matrix,w++}n.point[g]=F,g++}else if(D.isHemisphereLight){const F=t.get(D);F.skyColor.copy(D.color).multiplyScalar(N),F.groundColor.copy(D.groundColor).multiplyScalar(N),n.hemi[p]=F,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const I=n.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==v||I.numPointShadows!==w||I.numSpotShadows!==x||I.numSpotMaps!==L||I.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=x+L-P,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=R,I.directionalLength=d,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=v,I.numPointShadows=w,I.numSpotShadows=x,I.numSpotMaps=L,I.numLightProbes=R,n.version=RE++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const w=c[p];if(w.isDirectionalLight){const x=n.directional[f];x.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(w.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(w.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(w.width*.5,0,0),x.halfHeight.set(0,w.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),h++}else if(w.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(w.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function pf(i){const t=new LE(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function IE(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new pf(i),t.set(s,[a])):r>=o.length?(a=new pf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class DE extends to{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=R0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class NE extends to{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const UE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FE=`uniform sampler2D shadow_pass;
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
}`;function OE(i,t,e){let n=new pu;const s=new ne,r=new ne,o=new me,a=new DE({depthPacking:P0}),l=new NE,c={},u=e.maxTextureSize,f={[qi]:Ke,[Ke]:qi,[Vn]:Vn},h=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:UE,fragmentShader:FE}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new wi;g.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Fe(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pp;let p=this.type;this.render=function(P,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const b=i.getRenderTarget(),S=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Hi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const N=p!==ci&&this.type===ci,k=p===ci&&this.type!==ci;for(let H=0,F=P.length;H<F;H++){const Y=P[H],z=Y.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const ot=z.getFrameExtents();if(s.multiply(ot),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ot.x),s.x=r.x*ot.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ot.y),s.y=r.y*ot.y,z.mapSize.y=r.y)),z.map===null||N===!0||k===!0){const yt=this.type!==ci?{minFilter:In,magFilter:In}:{};z.map!==null&&z.map.dispose(),z.map=new gs(s.x,s.y,yt),z.map.texture.name=Y.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const _t=z.getViewportCount();for(let yt=0;yt<_t;yt++){const dt=z.getViewport(yt);o.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),B.viewport(o),z.updateMatrices(Y,yt),n=z.getFrustum(),x(R,I,z.camera,Y,this.type)}z.isPointLightShadow!==!0&&this.type===ci&&v(z,I),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,D)};function v(P,R){const I=t.update(_);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new gs(s.x,s.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(R,null,I,h,_,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(R,null,I,d,_,null)}function w(P,R,I,b){let S=null;const D=I.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(D!==void 0)S=D;else if(S=I.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const B=S.uuid,N=R.uuid;let k=c[B];k===void 0&&(k={},c[B]=k);let H=k[N];H===void 0&&(H=S.clone(),k[N]=H,R.addEventListener("dispose",L)),S=H}if(S.visible=R.visible,S.wireframe=R.wireframe,b===ci?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:f[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=i.properties.get(S);B.light=I}return S}function x(P,R,I,b,S){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===ci)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,P.matrixWorld);const N=t.update(P),k=P.material;if(Array.isArray(k)){const H=N.groups;for(let F=0,Y=H.length;F<Y;F++){const z=H[F],ot=k[z.materialIndex];if(ot&&ot.visible){const _t=w(P,ot,b,S);P.onBeforeShadow(i,P,R,I,N,_t,z),i.renderBufferDirect(I,null,N,_t,P,z),P.onAfterShadow(i,P,R,I,N,_t,z)}}}else if(k.visible){const H=w(P,k,b,S);P.onBeforeShadow(i,P,R,I,N,H,null),i.renderBufferDirect(I,null,N,H,P,null),P.onAfterShadow(i,P,R,I,N,H,null)}}const B=P.children;for(let N=0,k=B.length;N<k;N++)x(B[N],R,I,b,S)}function L(P){P.target.removeEventListener("dispose",L);for(const I in c){const b=c[I],S=P.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const BE={[Zl]:Jl,[Ql]:nc,[tc]:ic,[Ks]:ec,[Jl]:Zl,[nc]:Ql,[ic]:tc,[ec]:Ks};function zE(i,t){function e(){let V=!1;const At=new me;let it=null;const ct=new me(0,0,0,0);return{setMask:function(Pt){it!==Pt&&!V&&(i.colorMask(Pt,Pt,Pt,Pt),it=Pt)},setLocked:function(Pt){V=Pt},setClear:function(Pt,Ct,$t,be,Be){Be===!0&&(Pt*=be,Ct*=be,$t*=be),At.set(Pt,Ct,$t,be),ct.equals(At)===!1&&(i.clearColor(Pt,Ct,$t,be),ct.copy(At))},reset:function(){V=!1,it=null,ct.set(-1,0,0,0)}}}function n(){let V=!1,At=!1,it=null,ct=null,Pt=null;return{setReversed:function(Ct){if(At!==Ct){const $t=t.get("EXT_clip_control");At?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);const be=Pt;Pt=null,this.setClear(be)}At=Ct},getReversed:function(){return At},setTest:function(Ct){Ct?$(i.DEPTH_TEST):ft(i.DEPTH_TEST)},setMask:function(Ct){it!==Ct&&!V&&(i.depthMask(Ct),it=Ct)},setFunc:function(Ct){if(At&&(Ct=BE[Ct]),ct!==Ct){switch(Ct){case Zl:i.depthFunc(i.NEVER);break;case Jl:i.depthFunc(i.ALWAYS);break;case Ql:i.depthFunc(i.LESS);break;case Ks:i.depthFunc(i.LEQUAL);break;case tc:i.depthFunc(i.EQUAL);break;case ec:i.depthFunc(i.GEQUAL);break;case nc:i.depthFunc(i.GREATER);break;case ic:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=Ct}},setLocked:function(Ct){V=Ct},setClear:function(Ct){Pt!==Ct&&(At&&(Ct=1-Ct),i.clearDepth(Ct),Pt=Ct)},reset:function(){V=!1,it=null,ct=null,Pt=null,At=!1}}}function s(){let V=!1,At=null,it=null,ct=null,Pt=null,Ct=null,$t=null,be=null,Be=null;return{setTest:function(de){V||(de?$(i.STENCIL_TEST):ft(i.STENCIL_TEST))},setMask:function(de){At!==de&&!V&&(i.stencilMask(de),At=de)},setFunc:function(de,xn,Zn){(it!==de||ct!==xn||Pt!==Zn)&&(i.stencilFunc(de,xn,Zn),it=de,ct=xn,Pt=Zn)},setOp:function(de,xn,Zn){(Ct!==de||$t!==xn||be!==Zn)&&(i.stencilOp(de,xn,Zn),Ct=de,$t=xn,be=Zn)},setLocked:function(de){V=de},setClear:function(de){Be!==de&&(i.clearStencil(de),Be=de)},reset:function(){V=!1,At=null,it=null,ct=null,Pt=null,Ct=null,$t=null,be=null,Be=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,v=null,w=null,x=null,L=null,P=null,R=new ee(0,0,0),I=0,b=!1,S=null,D=null,B=null,N=null,k=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,Y=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(z)[1]),F=Y>=1):z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),F=Y>=2);let ot=null,_t={};const yt=i.getParameter(i.SCISSOR_BOX),dt=i.getParameter(i.VIEWPORT),Zt=new me().fromArray(yt),rt=new me().fromArray(dt);function gt(V,At,it,ct){const Pt=new Uint8Array(4),Ct=i.createTexture();i.bindTexture(V,Ct),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<it;$t++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(At,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(At+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return Ct}const et={};et[i.TEXTURE_2D]=gt(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=gt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[i.TEXTURE_2D_ARRAY]=gt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=gt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(i.DEPTH_TEST),o.setFunc(Ks),Q(!1),tt(_h),$(i.CULL_FACE),A(Hi);function $(V){u[V]!==!0&&(i.enable(V),u[V]=!0)}function ft(V){u[V]!==!1&&(i.disable(V),u[V]=!1)}function lt(V,At){return f[V]!==At?(i.bindFramebuffer(V,At),f[V]=At,V===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=At),V===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=At),!0):!1}function St(V,At){let it=d,ct=!1;if(V){it=h.get(At),it===void 0&&(it=[],h.set(At,it));const Pt=V.textures;if(it.length!==Pt.length||it[0]!==i.COLOR_ATTACHMENT0){for(let Ct=0,$t=Pt.length;Ct<$t;Ct++)it[Ct]=i.COLOR_ATTACHMENT0+Ct;it.length=Pt.length,ct=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,ct=!0);ct&&i.drawBuffers(it)}function Lt(V){return g!==V?(i.useProgram(V),g=V,!0):!1}const C={[as]:i.FUNC_ADD,[i0]:i.FUNC_SUBTRACT,[s0]:i.FUNC_REVERSE_SUBTRACT};C[r0]=i.MIN,C[o0]=i.MAX;const U={[a0]:i.ZERO,[l0]:i.ONE,[c0]:i.SRC_COLOR,[jl]:i.SRC_ALPHA,[m0]:i.SRC_ALPHA_SATURATE,[d0]:i.DST_COLOR,[h0]:i.DST_ALPHA,[u0]:i.ONE_MINUS_SRC_COLOR,[Kl]:i.ONE_MINUS_SRC_ALPHA,[p0]:i.ONE_MINUS_DST_COLOR,[f0]:i.ONE_MINUS_DST_ALPHA,[g0]:i.CONSTANT_COLOR,[_0]:i.ONE_MINUS_CONSTANT_COLOR,[v0]:i.CONSTANT_ALPHA,[x0]:i.ONE_MINUS_CONSTANT_ALPHA};function A(V,At,it,ct,Pt,Ct,$t,be,Be,de){if(V===Hi){_===!0&&(ft(i.BLEND),_=!1);return}if(_===!1&&($(i.BLEND),_=!0),V!==n0){if(V!==m||de!==b){if((p!==as||x!==as)&&(i.blendEquation(i.FUNC_ADD),p=as,x=as),de)switch(V){case qs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vh:i.blendFunc(i.ONE,i.ONE);break;case xh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case qs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case xh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}v=null,w=null,L=null,P=null,R.set(0,0,0),I=0,m=V,b=de}return}Pt=Pt||At,Ct=Ct||it,$t=$t||ct,(At!==p||Pt!==x)&&(i.blendEquationSeparate(C[At],C[Pt]),p=At,x=Pt),(it!==v||ct!==w||Ct!==L||$t!==P)&&(i.blendFuncSeparate(U[it],U[ct],U[Ct],U[$t]),v=it,w=ct,L=Ct,P=$t),(be.equals(R)===!1||Be!==I)&&(i.blendColor(be.r,be.g,be.b,Be),R.copy(be),I=Be),m=V,b=!1}function at(V,At){V.side===Vn?ft(i.CULL_FACE):$(i.CULL_FACE);let it=V.side===Ke;At&&(it=!it),Q(it),V.blending===qs&&V.transparent===!1?A(Hi):A(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);const ct=V.stencilWrite;a.setTest(ct),ct&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ut(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function Q(V){S!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),S=V)}function tt(V){V!==t0?($(i.CULL_FACE),V!==D&&(V===_h?i.cullFace(i.BACK):V===e0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ft(i.CULL_FACE),D=V}function st(V){V!==B&&(F&&i.lineWidth(V),B=V)}function ut(V,At,it){V?($(i.POLYGON_OFFSET_FILL),(N!==At||k!==it)&&(i.polygonOffset(At,it),N=At,k=it)):ft(i.POLYGON_OFFSET_FILL)}function nt(V){V?$(i.SCISSOR_TEST):ft(i.SCISSOR_TEST)}function M(V){V===void 0&&(V=i.TEXTURE0+H-1),ot!==V&&(i.activeTexture(V),ot=V)}function y(V,At,it){it===void 0&&(ot===null?it=i.TEXTURE0+H-1:it=ot);let ct=_t[it];ct===void 0&&(ct={type:void 0,texture:void 0},_t[it]=ct),(ct.type!==V||ct.texture!==At)&&(ot!==it&&(i.activeTexture(it),ot=it),i.bindTexture(V,At||et[V]),ct.type=V,ct.texture=At)}function O(){const V=_t[ot];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function X(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xt(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ht(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ht(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pt(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Tt(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function zt(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Vt(V){Zt.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Zt.copy(V))}function Et(V){rt.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),rt.copy(V))}function Wt(V,At){let it=c.get(At);it===void 0&&(it=new WeakMap,c.set(At,it));let ct=it.get(V);ct===void 0&&(ct=i.getUniformBlockIndex(At,V.name),it.set(V,ct))}function Xt(V,At){const ct=c.get(At).get(V);l.get(At)!==ct&&(i.uniformBlockBinding(At,ct,V.__bindingPointIndex),l.set(At,ct))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ot=null,_t={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,v=null,w=null,x=null,L=null,P=null,R=new ee(0,0,0),I=0,b=!1,S=null,D=null,B=null,N=null,k=null,Zt.set(0,0,i.canvas.width,i.canvas.height),rt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:$,disable:ft,bindFramebuffer:lt,drawBuffers:St,useProgram:Lt,setBlending:A,setMaterial:at,setFlipSided:Q,setCullFace:tt,setLineWidth:st,setPolygonOffset:ut,setScissorTest:nt,activeTexture:M,bindTexture:y,unbindTexture:O,compressedTexImage2D:X,compressedTexImage3D:K,texImage2D:Tt,texImage3D:zt,updateUBOMapping:Wt,uniformBlockBinding:Xt,texStorage2D:Ht,texStorage3D:pt,texSubImage2D:j,texSubImage3D:xt,compressedTexSubImage2D:ht,compressedTexSubImage3D:Mt,scissor:Vt,viewport:Et,reset:fe}}function mf(i,t,e,n){const s=kE(n);switch(e){case Mp:return i*t;case bp:return i*t;case wp:return i*t*2;case Tp:return i*t/s.components*s.byteLength;case cu:return i*t/s.components*s.byteLength;case Ap:return i*t*2/s.components*s.byteLength;case uu:return i*t*2/s.components*s.byteLength;case Ep:return i*t*3/s.components*s.byteLength;case Cn:return i*t*4/s.components*s.byteLength;case hu:return i*t*4/s.components*s.byteLength;case qo:case Xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Yo:case $o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cc:case hc:return Math.max(i,16)*Math.max(t,8)/4;case lc:case uc:return Math.max(i,8)*Math.max(t,8)/2;case fc:case dc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case _c:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case vc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case xc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case yc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Sc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case bc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case wc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ac:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Cc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case jo:case Rc:case Pc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Cp:case Lc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ic:case Dc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kE(i){switch(i){case Ei:case xp:return{byteLength:1,components:1};case Xr:case yp:case Zr:return{byteLength:2,components:1};case au:case lu:return{byteLength:2,components:4};case ms:case ou:case pi:return{byteLength:4,components:1};case Sp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function HE(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,y){return d?new OffscreenCanvas(M,y):ra("canvas")}function _(M,y,O){let X=1;const K=nt(M);if((K.width>O||K.height>O)&&(X=O/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const j=Math.floor(X*K.width),xt=Math.floor(X*K.height);f===void 0&&(f=g(j,xt));const ht=y?g(j,xt):f;return ht.width=j,ht.height=xt,ht.getContext("2d").drawImage(M,0,0,j,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+j+"x"+xt+")."),ht}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),M;return M}function m(M){return M.generateMipmaps}function p(M){i.generateMipmap(M)}function v(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(M,y,O,X,K=!1){if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let j=y;if(y===i.RED&&(O===i.FLOAT&&(j=i.R32F),O===i.HALF_FLOAT&&(j=i.R16F),O===i.UNSIGNED_BYTE&&(j=i.R8)),y===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(j=i.R8UI),O===i.UNSIGNED_SHORT&&(j=i.R16UI),O===i.UNSIGNED_INT&&(j=i.R32UI),O===i.BYTE&&(j=i.R8I),O===i.SHORT&&(j=i.R16I),O===i.INT&&(j=i.R32I)),y===i.RG&&(O===i.FLOAT&&(j=i.RG32F),O===i.HALF_FLOAT&&(j=i.RG16F),O===i.UNSIGNED_BYTE&&(j=i.RG8)),y===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(j=i.RG8UI),O===i.UNSIGNED_SHORT&&(j=i.RG16UI),O===i.UNSIGNED_INT&&(j=i.RG32UI),O===i.BYTE&&(j=i.RG8I),O===i.SHORT&&(j=i.RG16I),O===i.INT&&(j=i.RG32I)),y===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(j=i.RGB8UI),O===i.UNSIGNED_SHORT&&(j=i.RGB16UI),O===i.UNSIGNED_INT&&(j=i.RGB32UI),O===i.BYTE&&(j=i.RGB8I),O===i.SHORT&&(j=i.RGB16I),O===i.INT&&(j=i.RGB32I)),y===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),O===i.UNSIGNED_INT&&(j=i.RGBA32UI),O===i.BYTE&&(j=i.RGBA8I),O===i.SHORT&&(j=i.RGBA16I),O===i.INT&&(j=i.RGBA32I)),y===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),y===i.RGBA){const xt=K?Ca:ie.getTransfer(X);O===i.FLOAT&&(j=i.RGBA32F),O===i.HALF_FLOAT&&(j=i.RGBA16F),O===i.UNSIGNED_BYTE&&(j=xt===pe?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function x(M,y){let O;return M?y===null||y===ms||y===Qs?O=i.DEPTH24_STENCIL8:y===pi?O=i.DEPTH32F_STENCIL8:y===Xr&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ms||y===Qs?O=i.DEPTH_COMPONENT24:y===pi?O=i.DEPTH_COMPONENT32F:y===Xr&&(O=i.DEPTH_COMPONENT16),O}function L(M,y){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==In&&M.minFilter!==Gn?Math.log2(Math.max(y.width,y.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?y.mipmaps.length:1}function P(M){const y=M.target;y.removeEventListener("dispose",P),I(y),y.isVideoTexture&&u.delete(y)}function R(M){const y=M.target;y.removeEventListener("dispose",R),S(y)}function I(M){const y=n.get(M);if(y.__webglInit===void 0)return;const O=M.source,X=h.get(O);if(X){const K=X[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&b(M),Object.keys(X).length===0&&h.delete(O)}n.remove(M)}function b(M){const y=n.get(M);i.deleteTexture(y.__webglTexture);const O=M.source,X=h.get(O);delete X[y.__cacheKey],o.memory.textures--}function S(M){const y=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(y.__webglFramebuffer[X]))for(let K=0;K<y.__webglFramebuffer[X].length;K++)i.deleteFramebuffer(y.__webglFramebuffer[X][K]);else i.deleteFramebuffer(y.__webglFramebuffer[X]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[X])}else{if(Array.isArray(y.__webglFramebuffer))for(let X=0;X<y.__webglFramebuffer.length;X++)i.deleteFramebuffer(y.__webglFramebuffer[X]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let X=0;X<y.__webglColorRenderbuffer.length;X++)y.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[X]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=M.textures;for(let X=0,K=O.length;X<K;X++){const j=n.get(O[X]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(O[X])}n.remove(M)}let D=0;function B(){D=0}function N(){const M=D;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),D+=1,M}function k(M){const y=[];return y.push(M.wrapS),y.push(M.wrapT),y.push(M.wrapR||0),y.push(M.magFilter),y.push(M.minFilter),y.push(M.anisotropy),y.push(M.internalFormat),y.push(M.format),y.push(M.type),y.push(M.generateMipmaps),y.push(M.premultiplyAlpha),y.push(M.flipY),y.push(M.unpackAlignment),y.push(M.colorSpace),y.join()}function H(M,y){const O=n.get(M);if(M.isVideoTexture&&st(M),M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){const X=M.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(O,M,y);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+y)}function F(M,y){const O=n.get(M);if(M.version>0&&O.__version!==M.version){rt(O,M,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+y)}function Y(M,y){const O=n.get(M);if(M.version>0&&O.__version!==M.version){rt(O,M,y);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+y)}function z(M,y){const O=n.get(M);if(M.version>0&&O.__version!==M.version){gt(O,M,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+y)}const ot={[oc]:i.REPEAT,[us]:i.CLAMP_TO_EDGE,[ac]:i.MIRRORED_REPEAT},_t={[In]:i.NEAREST,[C0]:i.NEAREST_MIPMAP_NEAREST,[co]:i.NEAREST_MIPMAP_LINEAR,[Gn]:i.LINEAR,[Ya]:i.LINEAR_MIPMAP_NEAREST,[hs]:i.LINEAR_MIPMAP_LINEAR},yt={[I0]:i.NEVER,[B0]:i.ALWAYS,[D0]:i.LESS,[Pp]:i.LEQUAL,[N0]:i.EQUAL,[O0]:i.GEQUAL,[U0]:i.GREATER,[F0]:i.NOTEQUAL};function dt(M,y){if(y.type===pi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Gn||y.magFilter===Ya||y.magFilter===co||y.magFilter===hs||y.minFilter===Gn||y.minFilter===Ya||y.minFilter===co||y.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,ot[y.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,ot[y.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,ot[y.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,_t[y.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,_t[y.minFilter]),y.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,yt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===In||y.minFilter!==co&&y.minFilter!==hs||y.type===pi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(M,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Zt(M,y){let O=!1;M.__webglInit===void 0&&(M.__webglInit=!0,y.addEventListener("dispose",P));const X=y.source;let K=h.get(X);K===void 0&&(K={},h.set(X,K));const j=k(y);if(j!==M.__cacheKey){K[j]===void 0&&(K[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),K[j].usedTimes++;const xt=K[M.__cacheKey];xt!==void 0&&(K[M.__cacheKey].usedTimes--,xt.usedTimes===0&&b(y)),M.__cacheKey=j,M.__webglTexture=K[j].texture}return O}function rt(M,y,O){let X=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(X=i.TEXTURE_3D);const K=Zt(M,y),j=y.source;e.bindTexture(X,M.__webglTexture,i.TEXTURE0+O);const xt=n.get(j);if(j.version!==xt.__version||K===!0){e.activeTexture(i.TEXTURE0+O);const ht=ie.getPrimaries(ie.workingColorSpace),Mt=y.colorSpace===Bi?null:ie.getPrimaries(y.colorSpace),Ht=y.colorSpace===Bi||ht===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let pt=_(y.image,!1,s.maxTextureSize);pt=ut(y,pt);const Tt=r.convert(y.format,y.colorSpace),zt=r.convert(y.type);let Vt=w(y.internalFormat,Tt,zt,y.colorSpace,y.isVideoTexture);dt(X,y);let Et;const Wt=y.mipmaps,Xt=y.isVideoTexture!==!0,fe=xt.__version===void 0||K===!0,V=j.dataReady,At=L(y,pt);if(y.isDepthTexture)Vt=x(y.format===tr,y.type),fe&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,Vt,pt.width,pt.height):e.texImage2D(i.TEXTURE_2D,0,Vt,pt.width,pt.height,0,Tt,zt,null));else if(y.isDataTexture)if(Wt.length>0){Xt&&fe&&e.texStorage2D(i.TEXTURE_2D,At,Vt,Wt[0].width,Wt[0].height);for(let it=0,ct=Wt.length;it<ct;it++)Et=Wt[it],Xt?V&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Et.width,Et.height,Tt,zt,Et.data):e.texImage2D(i.TEXTURE_2D,it,Vt,Et.width,Et.height,0,Tt,zt,Et.data);y.generateMipmaps=!1}else Xt?(fe&&e.texStorage2D(i.TEXTURE_2D,At,Vt,pt.width,pt.height),V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt.width,pt.height,Tt,zt,pt.data)):e.texImage2D(i.TEXTURE_2D,0,Vt,pt.width,pt.height,0,Tt,zt,pt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Xt&&fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Vt,Wt[0].width,Wt[0].height,pt.depth);for(let it=0,ct=Wt.length;it<ct;it++)if(Et=Wt[it],y.format!==Cn)if(Tt!==null)if(Xt){if(V)if(y.layerUpdates.size>0){const Pt=mf(Et.width,Et.height,y.format,y.type);for(const Ct of y.layerUpdates){const $t=Et.data.subarray(Ct*Pt/Et.data.BYTES_PER_ELEMENT,(Ct+1)*Pt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,Ct,Et.width,Et.height,1,Tt,$t)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,Et.width,Et.height,pt.depth,Tt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,Vt,Et.width,Et.height,pt.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,Et.width,Et.height,pt.depth,Tt,zt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,Vt,Et.width,Et.height,pt.depth,0,Tt,zt,Et.data)}else{Xt&&fe&&e.texStorage2D(i.TEXTURE_2D,At,Vt,Wt[0].width,Wt[0].height);for(let it=0,ct=Wt.length;it<ct;it++)Et=Wt[it],y.format!==Cn?Tt!==null?Xt?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,Et.width,Et.height,Tt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,it,Vt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?V&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Et.width,Et.height,Tt,zt,Et.data):e.texImage2D(i.TEXTURE_2D,it,Vt,Et.width,Et.height,0,Tt,zt,Et.data)}else if(y.isDataArrayTexture)if(Xt){if(fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Vt,pt.width,pt.height,pt.depth),V)if(y.layerUpdates.size>0){const it=mf(pt.width,pt.height,y.format,y.type);for(const ct of y.layerUpdates){const Pt=pt.data.subarray(ct*it/pt.data.BYTES_PER_ELEMENT,(ct+1)*it/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ct,pt.width,pt.height,1,Tt,zt,Pt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Tt,zt,pt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Vt,pt.width,pt.height,pt.depth,0,Tt,zt,pt.data);else if(y.isData3DTexture)Xt?(fe&&e.texStorage3D(i.TEXTURE_3D,At,Vt,pt.width,pt.height,pt.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Tt,zt,pt.data)):e.texImage3D(i.TEXTURE_3D,0,Vt,pt.width,pt.height,pt.depth,0,Tt,zt,pt.data);else if(y.isFramebufferTexture){if(fe)if(Xt)e.texStorage2D(i.TEXTURE_2D,At,Vt,pt.width,pt.height);else{let it=pt.width,ct=pt.height;for(let Pt=0;Pt<At;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,Vt,it,ct,0,Tt,zt,null),it>>=1,ct>>=1}}else if(Wt.length>0){if(Xt&&fe){const it=nt(Wt[0]);e.texStorage2D(i.TEXTURE_2D,At,Vt,it.width,it.height)}for(let it=0,ct=Wt.length;it<ct;it++)Et=Wt[it],Xt?V&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Tt,zt,Et):e.texImage2D(i.TEXTURE_2D,it,Vt,Tt,zt,Et);y.generateMipmaps=!1}else if(Xt){if(fe){const it=nt(pt);e.texStorage2D(i.TEXTURE_2D,At,Vt,it.width,it.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,zt,pt)}else e.texImage2D(i.TEXTURE_2D,0,Vt,Tt,zt,pt);m(y)&&p(X),xt.__version=j.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function gt(M,y,O){if(y.image.length!==6)return;const X=Zt(M,y),K=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+O);const j=n.get(K);if(K.version!==j.__version||X===!0){e.activeTexture(i.TEXTURE0+O);const xt=ie.getPrimaries(ie.workingColorSpace),ht=y.colorSpace===Bi?null:ie.getPrimaries(y.colorSpace),Mt=y.colorSpace===Bi||xt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const Ht=y.isCompressedTexture||y.image[0].isCompressedTexture,pt=y.image[0]&&y.image[0].isDataTexture,Tt=[];for(let ct=0;ct<6;ct++)!Ht&&!pt?Tt[ct]=_(y.image[ct],!0,s.maxCubemapSize):Tt[ct]=pt?y.image[ct].image:y.image[ct],Tt[ct]=ut(y,Tt[ct]);const zt=Tt[0],Vt=r.convert(y.format,y.colorSpace),Et=r.convert(y.type),Wt=w(y.internalFormat,Vt,Et,y.colorSpace),Xt=y.isVideoTexture!==!0,fe=j.__version===void 0||X===!0,V=K.dataReady;let At=L(y,zt);dt(i.TEXTURE_CUBE_MAP,y);let it;if(Ht){Xt&&fe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,Wt,zt.width,zt.height);for(let ct=0;ct<6;ct++){it=Tt[ct].mipmaps;for(let Pt=0;Pt<it.length;Pt++){const Ct=it[Pt];y.format!==Cn?Vt!==null?Xt?V&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Pt,0,0,Ct.width,Ct.height,Vt,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Pt,Wt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Pt,0,0,Ct.width,Ct.height,Vt,Et,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Pt,Wt,Ct.width,Ct.height,0,Vt,Et,Ct.data)}}}else{if(it=y.mipmaps,Xt&&fe){it.length>0&&At++;const ct=nt(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,At,Wt,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(pt){Xt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Tt[ct].width,Tt[ct].height,Vt,Et,Tt[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Wt,Tt[ct].width,Tt[ct].height,0,Vt,Et,Tt[ct].data);for(let Pt=0;Pt<it.length;Pt++){const $t=it[Pt].image[ct].image;Xt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Pt+1,0,0,$t.width,$t.height,Vt,Et,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Pt+1,Wt,$t.width,$t.height,0,Vt,Et,$t.data)}}else{Xt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Vt,Et,Tt[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Wt,Vt,Et,Tt[ct]);for(let Pt=0;Pt<it.length;Pt++){const Ct=it[Pt];Xt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Pt+1,0,0,Vt,Et,Ct.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Pt+1,Wt,Vt,Et,Ct.image[ct])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),j.__version=K.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function et(M,y,O,X,K,j){const xt=r.convert(O.format,O.colorSpace),ht=r.convert(O.type),Mt=w(O.internalFormat,xt,ht,O.colorSpace),Ht=n.get(y),pt=n.get(O);if(pt.__renderTarget=y,!Ht.__hasExternalTextures){const Tt=Math.max(1,y.width>>j),zt=Math.max(1,y.height>>j);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,j,Mt,Tt,zt,y.depth,0,xt,ht,null):e.texImage2D(K,j,Mt,Tt,zt,0,xt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,M),tt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,K,pt.__webglTexture,0,Q(y)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,K,pt.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function $(M,y,O){if(i.bindRenderbuffer(i.RENDERBUFFER,M),y.depthBuffer){const X=y.depthTexture,K=X&&X.isDepthTexture?X.type:null,j=x(y.stencilBuffer,K),xt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=Q(y);tt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,j,y.width,y.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,j,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,j,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,M)}else{const X=y.textures;for(let K=0;K<X.length;K++){const j=X[K],xt=r.convert(j.format,j.colorSpace),ht=r.convert(j.type),Mt=w(j.internalFormat,xt,ht,j.colorSpace),Ht=Q(y);O&&tt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,Mt,y.width,y.height):tt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht,Mt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ft(M,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,M),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(y.depthTexture);X.__renderTarget=y,(!X.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),H(y.depthTexture,0);const K=X.__webglTexture,j=Q(y);if(y.depthTexture.format===Xs)tt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(y.depthTexture.format===tr)tt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function lt(M){const y=n.get(M),O=M.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==M.depthTexture){const X=M.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),X){const K=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),y.__depthDisposeCallback=K}y.__boundDepthTexture=X}if(M.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ft(y.__webglFramebuffer,M)}else if(O){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]===void 0)y.__webglDepthbuffer[X]=i.createRenderbuffer(),$(y.__webglDepthbuffer[X],M,!1);else{const K=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),$(y.__webglDepthbuffer,M,!1);else{const X=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,K)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(M,y,O){const X=n.get(M);y!==void 0&&et(X.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&lt(M)}function Lt(M){const y=M.texture,O=n.get(M),X=n.get(y);M.addEventListener("dispose",R);const K=M.textures,j=M.isWebGLCubeRenderTarget===!0,xt=K.length>1;if(xt||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=y.version,o.memory.textures++),j){O.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[ht]=[];for(let Mt=0;Mt<y.mipmaps.length;Mt++)O.__webglFramebuffer[ht][Mt]=i.createFramebuffer()}else O.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let ht=0;ht<y.mipmaps.length;ht++)O.__webglFramebuffer[ht]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(xt)for(let ht=0,Mt=K.length;ht<Mt;ht++){const Ht=n.get(K[ht]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=i.createTexture(),o.memory.textures++)}if(M.samples>0&&tt(M)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ht=0;ht<K.length;ht++){const Mt=K[ht];O.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ht]);const Ht=r.convert(Mt.format,Mt.colorSpace),pt=r.convert(Mt.type),Tt=w(Mt.internalFormat,Ht,pt,Mt.colorSpace,M.isXRRenderTarget===!0),zt=Q(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,Tt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,O.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),$(O.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),dt(i.TEXTURE_CUBE_MAP,y);for(let ht=0;ht<6;ht++)if(y.mipmaps&&y.mipmaps.length>0)for(let Mt=0;Mt<y.mipmaps.length;Mt++)et(O.__webglFramebuffer[ht][Mt],M,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Mt);else et(O.__webglFramebuffer[ht],M,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let ht=0,Mt=K.length;ht<Mt;ht++){const Ht=K[ht],pt=n.get(Ht);e.bindTexture(i.TEXTURE_2D,pt.__webglTexture),dt(i.TEXTURE_2D,Ht),et(O.__webglFramebuffer,M,Ht,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),m(Ht)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ht=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,X.__webglTexture),dt(ht,y),y.mipmaps&&y.mipmaps.length>0)for(let Mt=0;Mt<y.mipmaps.length;Mt++)et(O.__webglFramebuffer[Mt],M,y,i.COLOR_ATTACHMENT0,ht,Mt);else et(O.__webglFramebuffer,M,y,i.COLOR_ATTACHMENT0,ht,0);m(y)&&p(ht),e.unbindTexture()}M.depthBuffer&&lt(M)}function C(M){const y=M.textures;for(let O=0,X=y.length;O<X;O++){const K=y[O];if(m(K)){const j=v(M),xt=n.get(K).__webglTexture;e.bindTexture(j,xt),p(j),e.unbindTexture()}}}const U=[],A=[];function at(M){if(M.samples>0){if(tt(M)===!1){const y=M.textures,O=M.width,X=M.height;let K=i.COLOR_BUFFER_BIT;const j=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(M),ht=y.length>1;if(ht)for(let Mt=0;Mt<y.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Mt=0;Mt<y.length;Mt++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[Mt]);const Ht=n.get(y[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ht,0)}i.blitFramebuffer(0,0,O,X,0,0,O,X,K,i.NEAREST),l===!0&&(U.length=0,A.length=0,U.push(i.COLOR_ATTACHMENT0+Mt),M.depthBuffer&&M.resolveDepthBuffer===!1&&(U.push(j),A.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,A)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,U))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let Mt=0;Mt<y.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[Mt]);const Ht=n.get(y[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,Ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const y=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Q(M){return Math.min(s.maxSamples,M.samples)}function tt(M){const y=n.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function st(M){const y=o.render.frame;u.get(M)!==y&&(u.set(M,y),M.update())}function ut(M,y){const O=M.colorSpace,X=M.format,K=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||O!==or&&O!==Bi&&(ie.getTransfer(O)===pe?(X!==Cn||K!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function nt(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=B,this.setTexture2D=H,this.setTexture2DArray=F,this.setTexture3D=Y,this.setTextureCube=z,this.rebindTextures=St,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=tt}function VE(i,t){function e(n,s=Bi){let r;const o=ie.getTransfer(s);if(n===Ei)return i.UNSIGNED_BYTE;if(n===au)return i.UNSIGNED_SHORT_4_4_4_4;if(n===lu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Sp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xp)return i.BYTE;if(n===yp)return i.SHORT;if(n===Xr)return i.UNSIGNED_SHORT;if(n===ou)return i.INT;if(n===ms)return i.UNSIGNED_INT;if(n===pi)return i.FLOAT;if(n===Zr)return i.HALF_FLOAT;if(n===Mp)return i.ALPHA;if(n===Ep)return i.RGB;if(n===Cn)return i.RGBA;if(n===bp)return i.LUMINANCE;if(n===wp)return i.LUMINANCE_ALPHA;if(n===Xs)return i.DEPTH_COMPONENT;if(n===tr)return i.DEPTH_STENCIL;if(n===Tp)return i.RED;if(n===cu)return i.RED_INTEGER;if(n===Ap)return i.RG;if(n===uu)return i.RG_INTEGER;if(n===hu)return i.RGBA_INTEGER;if(n===qo||n===Xo||n===Yo||n===$o)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lc||n===cc||n===uc||n===hc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===lc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fc||n===dc||n===pc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fc||n===dc)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===mc||n===gc||n===_c||n===vc||n===xc||n===yc||n===Sc||n===Mc||n===Ec||n===bc||n===wc||n===Tc||n===Ac||n===Cc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===mc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_c)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ec)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ac)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jo||n===Rc||n===Pc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===jo)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cp||n===Lc||n===Ic||n===Dc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===jo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ic)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class GE extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Pr extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WE={type:"move"};class Ml{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(WE)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Pr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const qE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XE=`
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

}`;class YE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ze,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Xi({vertexShader:qE,fragmentShader:XE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Fe(new Ra(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $E extends ar{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new YE,m=e.getContextAttributes();let p=null,v=null;const w=[],x=[],L=new ne;let P=null;const R=new cn;R.viewport=new me;const I=new cn;I.viewport=new me;const b=[R,I],S=new GE;let D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let gt=w[rt];return gt===void 0&&(gt=new Ml,w[rt]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(rt){let gt=w[rt];return gt===void 0&&(gt=new Ml,w[rt]=gt),gt.getGripSpace()},this.getHand=function(rt){let gt=w[rt];return gt===void 0&&(gt=new Ml,w[rt]=gt),gt.getHandSpace()};function N(rt){const gt=x.indexOf(rt.inputSource);if(gt===-1)return;const et=w[gt];et!==void 0&&(et.update(rt.inputSource,rt.frame,c||o),et.dispatchEvent({type:rt.type,data:rt.inputSource}))}function k(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",H);for(let rt=0;rt<w.length;rt++){const gt=x[rt];gt!==null&&(x[rt]=null,w[rt].disconnect(gt))}D=null,B=null,_.reset(),t.setRenderTarget(p),d=null,h=null,f=null,s=null,v=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){r=rt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){a=rt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(rt){c=rt},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(rt){if(s=rt,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",k),s.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const gt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,gt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new gs(d.framebufferWidth,d.framebufferHeight,{format:Cn,type:Ei,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let gt=null,et=null,$=null;m.depth&&($=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=m.stencil?tr:Xs,et=m.stencil?Qs:ms);const ft={colorFormat:e.RGBA8,depthFormat:$,scaleFactor:r};f=new XRWebGLBinding(s,e),h=f.createProjectionLayer(ft),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new gs(h.textureWidth,h.textureHeight,{format:Cn,type:Ei,depthTexture:new Wp(h.textureWidth,h.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Zt.setContext(s),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function H(rt){for(let gt=0;gt<rt.removed.length;gt++){const et=rt.removed[gt],$=x.indexOf(et);$>=0&&(x[$]=null,w[$].disconnect(et))}for(let gt=0;gt<rt.added.length;gt++){const et=rt.added[gt];let $=x.indexOf(et);if($===-1){for(let lt=0;lt<w.length;lt++)if(lt>=x.length){x.push(et),$=lt;break}else if(x[lt]===null){x[lt]=et,$=lt;break}if($===-1)break}const ft=w[$];ft&&ft.connect(et)}}const F=new q,Y=new q;function z(rt,gt,et){F.setFromMatrixPosition(gt.matrixWorld),Y.setFromMatrixPosition(et.matrixWorld);const $=F.distanceTo(Y),ft=gt.projectionMatrix.elements,lt=et.projectionMatrix.elements,St=ft[14]/(ft[10]-1),Lt=ft[14]/(ft[10]+1),C=(ft[9]+1)/ft[5],U=(ft[9]-1)/ft[5],A=(ft[8]-1)/ft[0],at=(lt[8]+1)/lt[0],Q=St*A,tt=St*at,st=$/(-A+at),ut=st*-A;if(gt.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(ut),rt.translateZ(st),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),ft[10]===-1)rt.projectionMatrix.copy(gt.projectionMatrix),rt.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const nt=St+st,M=Lt+st,y=Q-ut,O=tt+($-ut),X=C*Lt/M*nt,K=U*Lt/M*nt;rt.projectionMatrix.makePerspective(y,O,X,K,nt,M),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function ot(rt,gt){gt===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(gt.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(s===null)return;let gt=rt.near,et=rt.far;_.texture!==null&&(_.depthNear>0&&(gt=_.depthNear),_.depthFar>0&&(et=_.depthFar)),S.near=I.near=R.near=gt,S.far=I.far=R.far=et,(D!==S.near||B!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,B=S.far),R.layers.mask=rt.layers.mask|2,I.layers.mask=rt.layers.mask|4,S.layers.mask=R.layers.mask|I.layers.mask;const $=rt.parent,ft=S.cameras;ot(S,$);for(let lt=0;lt<ft.length;lt++)ot(ft[lt],$);ft.length===2?z(S,R,I):S.projectionMatrix.copy(R.projectionMatrix),_t(rt,S,$)};function _t(rt,gt,et){et===null?rt.matrix.copy(gt.matrixWorld):(rt.matrix.copy(et.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(gt.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(gt.projectionMatrix),rt.projectionMatrixInverse.copy(gt.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=Nc*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(rt){l=rt,h!==null&&(h.fixedFoveation=rt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=rt)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let yt=null;function dt(rt,gt){if(u=gt.getViewerPose(c||o),g=gt,u!==null){const et=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let $=!1;et.length!==S.cameras.length&&(S.cameras.length=0,$=!0);for(let lt=0;lt<et.length;lt++){const St=et[lt];let Lt=null;if(d!==null)Lt=d.getViewport(St);else{const U=f.getViewSubImage(h,St);Lt=U.viewport,lt===0&&(t.setRenderTargetTextures(v,U.colorTexture,h.ignoreDepthValues?void 0:U.depthStencilTexture),t.setRenderTarget(v))}let C=b[lt];C===void 0&&(C=new cn,C.layers.enable(lt),C.viewport=new me,b[lt]=C),C.matrix.fromArray(St.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(St.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),lt===0&&(S.matrix.copy(C.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),$===!0&&S.cameras.push(C)}const ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")){const lt=f.getDepthInformation(et[0]);lt&&lt.isValid&&lt.texture&&_.init(t,lt,s.renderState)}}for(let et=0;et<w.length;et++){const $=x[et],ft=w[et];$!==null&&ft!==void 0&&ft.update($,gt,c||o)}yt&&yt(rt,gt),gt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:gt}),g=null}const Zt=new Vp;Zt.setAnimationLoop(dt),this.setAnimationLoop=function(rt){yt=rt},this.dispose=function(){}}}const ns=new We,jE=new Ee;function KE(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,zp(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,w,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ke&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ke&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),w=v.envMap,x=v.envMapRotation;w&&(m.envMap.value=w,ns.copy(x),ns.x*=-1,ns.y*=-1,ns.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),m.envMapRotation.value.setFromMatrix4(jE.makeRotationFromEuler(ns)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ke&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ZE(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,w){const x=w.program;n.uniformBlockBinding(v,x)}function c(v,w){let x=s[v.id];x===void 0&&(g(v),x=u(v),s[v.id]=x,v.addEventListener("dispose",m));const L=w.program;n.updateUBOMapping(v,L);const P=t.render.frame;r[v.id]!==P&&(h(v),r[v.id]=P)}function u(v){const w=f();v.__bindingPointIndex=w;const x=i.createBuffer(),L=v.__size,P=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,L,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,x),x}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const w=s[v.id],x=v.uniforms,L=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let P=0,R=x.length;P<R;P++){const I=Array.isArray(x[P])?x[P]:[x[P]];for(let b=0,S=I.length;b<S;b++){const D=I[b];if(d(D,P,b,L)===!0){const B=D.__offset,N=Array.isArray(D.value)?D.value:[D.value];let k=0;for(let H=0;H<N.length;H++){const F=N[H],Y=_(F);typeof F=="number"||typeof F=="boolean"?(D.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,B+k,D.__data)):F.isMatrix3?(D.__data[0]=F.elements[0],D.__data[1]=F.elements[1],D.__data[2]=F.elements[2],D.__data[3]=0,D.__data[4]=F.elements[3],D.__data[5]=F.elements[4],D.__data[6]=F.elements[5],D.__data[7]=0,D.__data[8]=F.elements[6],D.__data[9]=F.elements[7],D.__data[10]=F.elements[8],D.__data[11]=0):(F.toArray(D.__data,k),k+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,w,x,L){const P=v.value,R=w+"_"+x;if(L[R]===void 0)return typeof P=="number"||typeof P=="boolean"?L[R]=P:L[R]=P.clone(),!0;{const I=L[R];if(typeof P=="number"||typeof P=="boolean"){if(I!==P)return L[R]=P,!0}else if(I.equals(P)===!1)return I.copy(P),!0}return!1}function g(v){const w=v.uniforms;let x=0;const L=16;for(let R=0,I=w.length;R<I;R++){const b=Array.isArray(w[R])?w[R]:[w[R]];for(let S=0,D=b.length;S<D;S++){const B=b[S],N=Array.isArray(B.value)?B.value:[B.value];for(let k=0,H=N.length;k<H;k++){const F=N[k],Y=_(F),z=x%L,ot=z%Y.boundary,_t=z+ot;x+=ot,_t!==0&&L-_t<Y.storage&&(x+=L-_t),B.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=Y.storage}}}const P=x%L;return P>0&&(x+=L-P),v.__size=x,v.__cache={},this}function _(v){const w={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(w.boundary=4,w.storage=4):v.isVector2?(w.boundary=8,w.storage=8):v.isVector3||v.isColor?(w.boundary=16,w.storage=12):v.isVector4?(w.boundary=16,w.storage=16):v.isMatrix3?(w.boundary=48,w.storage=48):v.isMatrix4?(w.boundary=64,w.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),w}function m(v){const w=v.target;w.removeEventListener("dispose",m);const x=o.indexOf(w.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class JE{constructor(t={}){const{canvas:e=k0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const v=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gn,this.toneMapping=Vi,this.toneMappingExposure=1;const x=this;let L=!1,P=0,R=0,I=null,b=-1,S=null;const D=new me,B=new me;let N=null;const k=new ee(0);let H=0,F=e.width,Y=e.height,z=1,ot=null,_t=null;const yt=new me(0,0,F,Y),dt=new me(0,0,F,Y);let Zt=!1;const rt=new pu;let gt=!1,et=!1;const $=new Ee,ft=new Ee,lt=new q,St=new me,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let C=!1;function U(){return I===null?z:1}let A=n;function at(T,G){return e.getContext(T,G)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ru}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),A===null){const G="webgl2";if(A=at(G,T),A===null)throw at(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Q,tt,st,ut,nt,M,y,O,X,K,j,xt,ht,Mt,Ht,pt,Tt,zt,Vt,Et,Wt,Xt,fe,V;function At(){Q=new iM(A),Q.init(),Xt=new VE(A,Q),tt=new ZS(A,Q,t,Xt),st=new zE(A,Q),tt.reverseDepthBuffer&&h&&st.buffers.depth.setReversed(!0),ut=new oM(A),nt=new bE,M=new HE(A,Q,st,nt,tt,Xt,ut),y=new QS(x),O=new nM(x),X=new dx(A),fe=new jS(A,X),K=new sM(A,X,ut,fe),j=new lM(A,K,X,ut),Vt=new aM(A,tt,M),pt=new JS(nt),xt=new EE(x,y,O,Q,tt,fe,pt),ht=new KE(x,nt),Mt=new TE,Ht=new IE(Q),zt=new $S(x,y,O,st,j,d,l),Tt=new OE(x,j,tt),V=new ZE(A,ut,tt,st),Et=new KS(A,Q,ut),Wt=new rM(A,Q,ut),ut.programs=xt.programs,x.capabilities=tt,x.extensions=Q,x.properties=nt,x.renderLists=Mt,x.shadowMap=Tt,x.state=st,x.info=ut}At();const it=new $E(x,A);this.xr=it,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const T=Q.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Q.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(T){T!==void 0&&(z=T,this.setSize(F,Y,!1))},this.getSize=function(T){return T.set(F,Y)},this.setSize=function(T,G,Z=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=T,Y=G,e.width=Math.floor(T*z),e.height=Math.floor(G*z),Z===!0&&(e.style.width=T+"px",e.style.height=G+"px"),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(F*z,Y*z).floor()},this.setDrawingBufferSize=function(T,G,Z){F=T,Y=G,z=Z,e.width=Math.floor(T*Z),e.height=Math.floor(G*Z),this.setViewport(0,0,T,G)},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy(yt)},this.setViewport=function(T,G,Z,J){T.isVector4?yt.set(T.x,T.y,T.z,T.w):yt.set(T,G,Z,J),st.viewport(D.copy(yt).multiplyScalar(z).round())},this.getScissor=function(T){return T.copy(dt)},this.setScissor=function(T,G,Z,J){T.isVector4?dt.set(T.x,T.y,T.z,T.w):dt.set(T,G,Z,J),st.scissor(B.copy(dt).multiplyScalar(z).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(T){st.setScissorTest(Zt=T)},this.setOpaqueSort=function(T){ot=T},this.setTransparentSort=function(T){_t=T},this.getClearColor=function(T){return T.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(T=!0,G=!0,Z=!0){let J=0;if(T){let W=!1;if(I!==null){const vt=I.texture.format;W=vt===hu||vt===uu||vt===cu}if(W){const vt=I.texture.type,Rt=vt===Ei||vt===ms||vt===Xr||vt===Qs||vt===au||vt===lu,Nt=zt.getClearColor(),Ut=zt.getClearAlpha(),qt=Nt.r,jt=Nt.g,Ft=Nt.b;Rt?(g[0]=qt,g[1]=jt,g[2]=Ft,g[3]=Ut,A.clearBufferuiv(A.COLOR,0,g)):(_[0]=qt,_[1]=jt,_[2]=Ft,_[3]=Ut,A.clearBufferiv(A.COLOR,0,_))}else J|=A.COLOR_BUFFER_BIT}G&&(J|=A.DEPTH_BUFFER_BIT),Z&&(J|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),Mt.dispose(),Ht.dispose(),nt.dispose(),y.dispose(),O.dispose(),j.dispose(),fe.dispose(),V.dispose(),xt.dispose(),it.dispose(),it.removeEventListener("sessionstart",Eu),it.removeEventListener("sessionend",bu),$i.stop()};function ct(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const T=ut.autoReset,G=Tt.enabled,Z=Tt.autoUpdate,J=Tt.needsUpdate,W=Tt.type;At(),ut.autoReset=T,Tt.enabled=G,Tt.autoUpdate=Z,Tt.needsUpdate=J,Tt.type=W}function Ct(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function $t(T){const G=T.target;G.removeEventListener("dispose",$t),be(G)}function be(T){Be(T),nt.remove(T)}function Be(T){const G=nt.get(T).programs;G!==void 0&&(G.forEach(function(Z){xt.releaseProgram(Z)}),T.isShaderMaterial&&xt.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,Z,J,W,vt){G===null&&(G=Lt);const Rt=W.isMesh&&W.matrixWorld.determinant()<0,Nt=om(T,G,Z,J,W);st.setMaterial(J,Rt);let Ut=Z.index,qt=1;if(J.wireframe===!0){if(Ut=K.getWireframeAttribute(Z),Ut===void 0)return;qt=2}const jt=Z.drawRange,Ft=Z.attributes.position;let se=jt.start*qt,ve=(jt.start+jt.count)*qt;vt!==null&&(se=Math.max(se,vt.start*qt),ve=Math.min(ve,(vt.start+vt.count)*qt)),Ut!==null?(se=Math.max(se,0),ve=Math.min(ve,Ut.count)):Ft!=null&&(se=Math.max(se,0),ve=Math.min(ve,Ft.count));const ye=ve-se;if(ye<0||ye===1/0)return;fe.setup(W,J,Nt,Z,Ut);let Je,le=Et;if(Ut!==null&&(Je=X.get(Ut),le=Wt,le.setIndex(Je)),W.isMesh)J.wireframe===!0?(st.setLineWidth(J.wireframeLinewidth*U()),le.setMode(A.LINES)):le.setMode(A.TRIANGLES);else if(W.isLine){let Bt=J.linewidth;Bt===void 0&&(Bt=1),st.setLineWidth(Bt*U()),W.isLineSegments?le.setMode(A.LINES):W.isLineLoop?le.setMode(A.LINE_LOOP):le.setMode(A.LINE_STRIP)}else W.isPoints?le.setMode(A.POINTS):W.isSprite&&le.setMode(A.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)le.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))le.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Bt=W._multiDrawStarts,Jn=W._multiDrawCounts,ce=W._multiDrawCount,yn=Ut?X.get(Ut).bytesPerElement:1,vs=nt.get(J).currentProgram.getUniforms();for(let rn=0;rn<ce;rn++)vs.setValue(A,"_gl_DrawID",rn),le.render(Bt[rn]/yn,Jn[rn])}else if(W.isInstancedMesh)le.renderInstances(se,ye,W.count);else if(Z.isInstancedBufferGeometry){const Bt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Jn=Math.min(Z.instanceCount,Bt);le.renderInstances(se,ye,Jn)}else le.render(se,ye)};function de(T,G,Z){T.transparent===!0&&T.side===Vn&&T.forceSinglePass===!1?(T.side=Ke,T.needsUpdate=!0,io(T,G,Z),T.side=qi,T.needsUpdate=!0,io(T,G,Z),T.side=Vn):io(T,G,Z)}this.compile=function(T,G,Z=null){Z===null&&(Z=T),p=Ht.get(Z),p.init(G),w.push(p),Z.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),T!==Z&&T.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();const J=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const vt=W.material;if(vt)if(Array.isArray(vt))for(let Rt=0;Rt<vt.length;Rt++){const Nt=vt[Rt];de(Nt,Z,W),J.add(Nt)}else de(vt,Z,W),J.add(vt)}),w.pop(),p=null,J},this.compileAsync=function(T,G,Z=null){const J=this.compile(T,G,Z);return new Promise(W=>{function vt(){if(J.forEach(function(Rt){nt.get(Rt).currentProgram.isReady()&&J.delete(Rt)}),J.size===0){W(T);return}setTimeout(vt,10)}Q.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let xn=null;function Zn(T){xn&&xn(T)}function Eu(){$i.stop()}function bu(){$i.start()}const $i=new Vp;$i.setAnimationLoop(Zn),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(T){xn=T,it.setAnimationLoop(T),T===null?$i.stop():$i.start()},it.addEventListener("sessionstart",Eu),it.addEventListener("sessionend",bu),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(G),G=it.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,G,I),p=Ht.get(T,w.length),p.init(G),w.push(p),ft.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),rt.setFromProjectionMatrix(ft),et=this.localClippingEnabled,gt=pt.init(this.clippingPlanes,et),m=Mt.get(T,v.length),m.init(),v.push(m),it.enabled===!0&&it.isPresenting===!0){const vt=x.xr.getDepthSensingMesh();vt!==null&&La(vt,G,-1/0,x.sortObjects)}La(T,G,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ot,_t),C=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,C&&zt.addToRenderList(m,T),this.info.render.frame++,gt===!0&&pt.beginShadows();const Z=p.state.shadowsArray;Tt.render(Z,T,G),gt===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,W=m.transmissive;if(p.setupLights(),G.isArrayCamera){const vt=G.cameras;if(W.length>0)for(let Rt=0,Nt=vt.length;Rt<Nt;Rt++){const Ut=vt[Rt];Tu(J,W,T,Ut)}C&&zt.render(T);for(let Rt=0,Nt=vt.length;Rt<Nt;Rt++){const Ut=vt[Rt];wu(m,T,Ut,Ut.viewport)}}else W.length>0&&Tu(J,W,T,G),C&&zt.render(T),wu(m,T,G);I!==null&&(M.updateMultisampleRenderTarget(I),M.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(x,T,G),fe.resetDefaultState(),b=-1,S=null,w.pop(),w.length>0?(p=w[w.length-1],gt===!0&&pt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function La(T,G,Z,J){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||rt.intersectsSprite(T)){J&&St.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ft);const Rt=j.update(T),Nt=T.material;Nt.visible&&m.push(T,Rt,Nt,Z,St.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||rt.intersectsObject(T))){const Rt=j.update(T),Nt=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),St.copy(T.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),St.copy(Rt.boundingSphere.center)),St.applyMatrix4(T.matrixWorld).applyMatrix4(ft)),Array.isArray(Nt)){const Ut=Rt.groups;for(let qt=0,jt=Ut.length;qt<jt;qt++){const Ft=Ut[qt],se=Nt[Ft.materialIndex];se&&se.visible&&m.push(T,Rt,se,Z,St.z,Ft)}}else Nt.visible&&m.push(T,Rt,Nt,Z,St.z,null)}}const vt=T.children;for(let Rt=0,Nt=vt.length;Rt<Nt;Rt++)La(vt[Rt],G,Z,J)}function wu(T,G,Z,J){const W=T.opaque,vt=T.transmissive,Rt=T.transparent;p.setupLightsView(Z),gt===!0&&pt.setGlobalState(x.clippingPlanes,Z),J&&st.viewport(D.copy(J)),W.length>0&&no(W,G,Z),vt.length>0&&no(vt,G,Z),Rt.length>0&&no(Rt,G,Z),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function Tu(T,G,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new gs(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?Zr:Ei,minFilter:hs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const vt=p.state.transmissionRenderTarget[J.id],Rt=J.viewport||D;vt.setSize(Rt.z,Rt.w);const Nt=x.getRenderTarget();x.setRenderTarget(vt),x.getClearColor(k),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),C&&zt.render(Z);const Ut=x.toneMapping;x.toneMapping=Vi;const qt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),gt===!0&&pt.setGlobalState(x.clippingPlanes,J),no(T,Z,J),M.updateMultisampleRenderTarget(vt),M.updateRenderTargetMipmap(vt),Q.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Ft=0,se=G.length;Ft<se;Ft++){const ve=G[Ft],ye=ve.object,Je=ve.geometry,le=ve.material,Bt=ve.group;if(le.side===Vn&&ye.layers.test(J.layers)){const Jn=le.side;le.side=Ke,le.needsUpdate=!0,Au(ye,Z,J,Je,le,Bt),le.side=Jn,le.needsUpdate=!0,jt=!0}}jt===!0&&(M.updateMultisampleRenderTarget(vt),M.updateRenderTargetMipmap(vt))}x.setRenderTarget(Nt),x.setClearColor(k,H),qt!==void 0&&(J.viewport=qt),x.toneMapping=Ut}function no(T,G,Z){const J=G.isScene===!0?G.overrideMaterial:null;for(let W=0,vt=T.length;W<vt;W++){const Rt=T[W],Nt=Rt.object,Ut=Rt.geometry,qt=J===null?Rt.material:J,jt=Rt.group;Nt.layers.test(Z.layers)&&Au(Nt,G,Z,Ut,qt,jt)}}function Au(T,G,Z,J,W,vt){T.onBeforeRender(x,G,Z,J,W,vt),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(x,G,Z,J,T,vt),W.transparent===!0&&W.side===Vn&&W.forceSinglePass===!1?(W.side=Ke,W.needsUpdate=!0,x.renderBufferDirect(Z,G,J,W,T,vt),W.side=qi,W.needsUpdate=!0,x.renderBufferDirect(Z,G,J,W,T,vt),W.side=Vn):x.renderBufferDirect(Z,G,J,W,T,vt),T.onAfterRender(x,G,Z,J,W,vt)}function io(T,G,Z){G.isScene!==!0&&(G=Lt);const J=nt.get(T),W=p.state.lights,vt=p.state.shadowsArray,Rt=W.state.version,Nt=xt.getParameters(T,W.state,vt,G,Z),Ut=xt.getProgramCacheKey(Nt);let qt=J.programs;J.environment=T.isMeshStandardMaterial?G.environment:null,J.fog=G.fog,J.envMap=(T.isMeshStandardMaterial?O:y).get(T.envMap||J.environment),J.envMapRotation=J.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,qt===void 0&&(T.addEventListener("dispose",$t),qt=new Map,J.programs=qt);let jt=qt.get(Ut);if(jt!==void 0){if(J.currentProgram===jt&&J.lightsStateVersion===Rt)return Ru(T,Nt),jt}else Nt.uniforms=xt.getUniforms(T),T.onBeforeCompile(Nt,x),jt=xt.acquireProgram(Nt,Ut),qt.set(Ut,jt),J.uniforms=Nt.uniforms;const Ft=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ft.clippingPlanes=pt.uniform),Ru(T,Nt),J.needsLights=lm(T),J.lightsStateVersion=Rt,J.needsLights&&(Ft.ambientLightColor.value=W.state.ambient,Ft.lightProbe.value=W.state.probe,Ft.directionalLights.value=W.state.directional,Ft.directionalLightShadows.value=W.state.directionalShadow,Ft.spotLights.value=W.state.spot,Ft.spotLightShadows.value=W.state.spotShadow,Ft.rectAreaLights.value=W.state.rectArea,Ft.ltc_1.value=W.state.rectAreaLTC1,Ft.ltc_2.value=W.state.rectAreaLTC2,Ft.pointLights.value=W.state.point,Ft.pointLightShadows.value=W.state.pointShadow,Ft.hemisphereLights.value=W.state.hemi,Ft.directionalShadowMap.value=W.state.directionalShadowMap,Ft.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ft.spotShadowMap.value=W.state.spotShadowMap,Ft.spotLightMatrix.value=W.state.spotLightMatrix,Ft.spotLightMap.value=W.state.spotLightMap,Ft.pointShadowMap.value=W.state.pointShadowMap,Ft.pointShadowMatrix.value=W.state.pointShadowMatrix),J.currentProgram=jt,J.uniformsList=null,jt}function Cu(T){if(T.uniformsList===null){const G=T.currentProgram.getUniforms();T.uniformsList=Ko.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function Ru(T,G){const Z=nt.get(T);Z.outputColorSpace=G.outputColorSpace,Z.batching=G.batching,Z.batchingColor=G.batchingColor,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.instancingMorph=G.instancingMorph,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function om(T,G,Z,J,W){G.isScene!==!0&&(G=Lt),M.resetTextureUnits();const vt=G.fog,Rt=J.isMeshStandardMaterial?G.environment:null,Nt=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:or,Ut=(J.isMeshStandardMaterial?O:y).get(J.envMap||Rt),qt=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,jt=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ft=!!Z.morphAttributes.position,se=!!Z.morphAttributes.normal,ve=!!Z.morphAttributes.color;let ye=Vi;J.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ye=x.toneMapping);const Je=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,le=Je!==void 0?Je.length:0,Bt=nt.get(J),Jn=p.state.lights;if(gt===!0&&(et===!0||T!==S)){const pn=T===S&&J.id===b;pt.setState(J,T,pn)}let ce=!1;J.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Jn.state.version||Bt.outputColorSpace!==Nt||W.isBatchedMesh&&Bt.batching===!1||!W.isBatchedMesh&&Bt.batching===!0||W.isBatchedMesh&&Bt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Bt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Bt.instancing===!1||!W.isInstancedMesh&&Bt.instancing===!0||W.isSkinnedMesh&&Bt.skinning===!1||!W.isSkinnedMesh&&Bt.skinning===!0||W.isInstancedMesh&&Bt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Bt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Bt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Bt.instancingMorph===!1&&W.morphTexture!==null||Bt.envMap!==Ut||J.fog===!0&&Bt.fog!==vt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==pt.numPlanes||Bt.numIntersection!==pt.numIntersection)||Bt.vertexAlphas!==qt||Bt.vertexTangents!==jt||Bt.morphTargets!==Ft||Bt.morphNormals!==se||Bt.morphColors!==ve||Bt.toneMapping!==ye||Bt.morphTargetsCount!==le)&&(ce=!0):(ce=!0,Bt.__version=J.version);let yn=Bt.currentProgram;ce===!0&&(yn=io(J,G,W));let vs=!1,rn=!1,ur=!1;const Se=yn.getUniforms(),Nn=Bt.uniforms;if(st.useProgram(yn.program)&&(vs=!0,rn=!0,ur=!0),J.id!==b&&(b=J.id,rn=!0),vs||S!==T){st.buffers.depth.getReversed()?($.copy(T.projectionMatrix),V0($),G0($),Se.setValue(A,"projectionMatrix",$)):Se.setValue(A,"projectionMatrix",T.projectionMatrix),Se.setValue(A,"viewMatrix",T.matrixWorldInverse);const Ti=Se.map.cameraPosition;Ti!==void 0&&Ti.setValue(A,lt.setFromMatrixPosition(T.matrixWorld)),tt.logarithmicDepthBuffer&&Se.setValue(A,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Se.setValue(A,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,rn=!0,ur=!0)}if(W.isSkinnedMesh){Se.setOptional(A,W,"bindMatrix"),Se.setOptional(A,W,"bindMatrixInverse");const pn=W.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Se.setValue(A,"boneTexture",pn.boneTexture,M))}W.isBatchedMesh&&(Se.setOptional(A,W,"batchingTexture"),Se.setValue(A,"batchingTexture",W._matricesTexture,M),Se.setOptional(A,W,"batchingIdTexture"),Se.setValue(A,"batchingIdTexture",W._indirectTexture,M),Se.setOptional(A,W,"batchingColorTexture"),W._colorsTexture!==null&&Se.setValue(A,"batchingColorTexture",W._colorsTexture,M));const hr=Z.morphAttributes;if((hr.position!==void 0||hr.normal!==void 0||hr.color!==void 0)&&Vt.update(W,Z,yn),(rn||Bt.receiveShadow!==W.receiveShadow)&&(Bt.receiveShadow=W.receiveShadow,Se.setValue(A,"receiveShadow",W.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Nn.envMap.value=Ut,Nn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&G.environment!==null&&(Nn.envMapIntensity.value=G.environmentIntensity),rn&&(Se.setValue(A,"toneMappingExposure",x.toneMappingExposure),Bt.needsLights&&am(Nn,ur),vt&&J.fog===!0&&ht.refreshFogUniforms(Nn,vt),ht.refreshMaterialUniforms(Nn,J,z,Y,p.state.transmissionRenderTarget[T.id]),Ko.upload(A,Cu(Bt),Nn,M)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ko.upload(A,Cu(Bt),Nn,M),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Se.setValue(A,"center",W.center),Se.setValue(A,"modelViewMatrix",W.modelViewMatrix),Se.setValue(A,"normalMatrix",W.normalMatrix),Se.setValue(A,"modelMatrix",W.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const pn=J.uniformsGroups;for(let Ti=0,Ai=pn.length;Ti<Ai;Ti++){const Pu=pn[Ti];V.update(Pu,yn),V.bind(Pu,yn)}}return yn}function am(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function lm(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,G,Z){nt.get(T.texture).__webglTexture=G,nt.get(T.depthTexture).__webglTexture=Z;const J=nt.get(T);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,G){const Z=nt.get(T);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(T,G=0,Z=0){I=T,P=G,R=Z;let J=!0,W=null,vt=!1,Rt=!1;if(T){const Ut=nt.get(T);if(Ut.__useDefaultFramebuffer!==void 0)st.bindFramebuffer(A.FRAMEBUFFER,null),J=!1;else if(Ut.__webglFramebuffer===void 0)M.setupRenderTarget(T);else if(Ut.__hasExternalTextures)M.rebindTextures(T,nt.get(T.texture).__webglTexture,nt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ft=T.depthTexture;if(Ut.__boundDepthTexture!==Ft){if(Ft!==null&&nt.has(Ft)&&(T.width!==Ft.image.width||T.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(T)}}const qt=T.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Rt=!0);const jt=nt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(jt[G])?W=jt[G][Z]:W=jt[G],vt=!0):T.samples>0&&M.useMultisampledRTT(T)===!1?W=nt.get(T).__webglMultisampledFramebuffer:Array.isArray(jt)?W=jt[Z]:W=jt,D.copy(T.viewport),B.copy(T.scissor),N=T.scissorTest}else D.copy(yt).multiplyScalar(z).floor(),B.copy(dt).multiplyScalar(z).floor(),N=Zt;if(st.bindFramebuffer(A.FRAMEBUFFER,W)&&J&&st.drawBuffers(T,W),st.viewport(D),st.scissor(B),st.setScissorTest(N),vt){const Ut=nt.get(T.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ut.__webglTexture,Z)}else if(Rt){const Ut=nt.get(T.texture),qt=G||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ut.__webglTexture,Z||0,qt)}b=-1},this.readRenderTargetPixels=function(T,G,Z,J,W,vt,Rt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=nt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(Nt=Nt[Rt]),Nt){st.bindFramebuffer(A.FRAMEBUFFER,Nt);try{const Ut=T.texture,qt=Ut.format,jt=Ut.type;if(!tt.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-J&&Z>=0&&Z<=T.height-W&&A.readPixels(G,Z,J,W,Xt.convert(qt),Xt.convert(jt),vt)}finally{const Ut=I!==null?nt.get(I).__webglFramebuffer:null;st.bindFramebuffer(A.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(T,G,Z,J,W,vt,Rt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=nt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(Nt=Nt[Rt]),Nt){const Ut=T.texture,qt=Ut.format,jt=Ut.type;if(!tt.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=T.width-J&&Z>=0&&Z<=T.height-W){st.bindFramebuffer(A.FRAMEBUFFER,Nt);const Ft=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Ft),A.bufferData(A.PIXEL_PACK_BUFFER,vt.byteLength,A.STREAM_READ),A.readPixels(G,Z,J,W,Xt.convert(qt),Xt.convert(jt),0);const se=I!==null?nt.get(I).__webglFramebuffer:null;st.bindFramebuffer(A.FRAMEBUFFER,se);const ve=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await H0(A,ve,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Ft),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,vt),A.deleteBuffer(Ft),A.deleteSync(ve),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,G=null,Z=0){T.isTexture!==!0&&(Cr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1]);const J=Math.pow(2,-Z),W=Math.floor(T.image.width*J),vt=Math.floor(T.image.height*J),Rt=G!==null?G.x:0,Nt=G!==null?G.y:0;M.setTexture2D(T,0),A.copyTexSubImage2D(A.TEXTURE_2D,Z,0,0,Rt,Nt,W,vt),st.unbindTexture()},this.copyTextureToTexture=function(T,G,Z=null,J=null,W=0){T.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,T=arguments[1],G=arguments[2],W=arguments[3]||0,Z=null);let vt,Rt,Nt,Ut,qt,jt,Ft,se,ve;const ye=T.isCompressedTexture?T.mipmaps[W]:T.image;Z!==null?(vt=Z.max.x-Z.min.x,Rt=Z.max.y-Z.min.y,Nt=Z.isBox3?Z.max.z-Z.min.z:1,Ut=Z.min.x,qt=Z.min.y,jt=Z.isBox3?Z.min.z:0):(vt=ye.width,Rt=ye.height,Nt=ye.depth||1,Ut=0,qt=0,jt=0),J!==null?(Ft=J.x,se=J.y,ve=J.z):(Ft=0,se=0,ve=0);const Je=Xt.convert(G.format),le=Xt.convert(G.type);let Bt;G.isData3DTexture?(M.setTexture3D(G,0),Bt=A.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(M.setTexture2DArray(G,0),Bt=A.TEXTURE_2D_ARRAY):(M.setTexture2D(G,0),Bt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,G.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,G.unpackAlignment);const Jn=A.getParameter(A.UNPACK_ROW_LENGTH),ce=A.getParameter(A.UNPACK_IMAGE_HEIGHT),yn=A.getParameter(A.UNPACK_SKIP_PIXELS),vs=A.getParameter(A.UNPACK_SKIP_ROWS),rn=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,ye.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ye.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ut),A.pixelStorei(A.UNPACK_SKIP_ROWS,qt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,jt);const ur=T.isDataArrayTexture||T.isData3DTexture,Se=G.isDataArrayTexture||G.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Nn=nt.get(T),hr=nt.get(G),pn=nt.get(Nn.__renderTarget),Ti=nt.get(hr.__renderTarget);st.bindFramebuffer(A.READ_FRAMEBUFFER,pn.__webglFramebuffer),st.bindFramebuffer(A.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Ai=0;Ai<Nt;Ai++)ur&&A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,nt.get(T).__webglTexture,W,jt+Ai),T.isDepthTexture?(Se&&A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,nt.get(G).__webglTexture,W,ve+Ai),A.blitFramebuffer(Ut,qt,vt,Rt,Ft,se,vt,Rt,A.DEPTH_BUFFER_BIT,A.NEAREST)):Se?A.copyTexSubImage3D(Bt,W,Ft,se,ve+Ai,Ut,qt,vt,Rt):A.copyTexSubImage2D(Bt,W,Ft,se,ve+Ai,Ut,qt,vt,Rt);st.bindFramebuffer(A.READ_FRAMEBUFFER,null),st.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Se?T.isDataTexture||T.isData3DTexture?A.texSubImage3D(Bt,W,Ft,se,ve,vt,Rt,Nt,Je,le,ye.data):G.isCompressedArrayTexture?A.compressedTexSubImage3D(Bt,W,Ft,se,ve,vt,Rt,Nt,Je,ye.data):A.texSubImage3D(Bt,W,Ft,se,ve,vt,Rt,Nt,Je,le,ye):T.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,W,Ft,se,vt,Rt,Je,le,ye.data):T.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,W,Ft,se,ye.width,ye.height,Je,ye.data):A.texSubImage2D(A.TEXTURE_2D,W,Ft,se,vt,Rt,Je,le,ye);A.pixelStorei(A.UNPACK_ROW_LENGTH,Jn),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ce),A.pixelStorei(A.UNPACK_SKIP_PIXELS,yn),A.pixelStorei(A.UNPACK_SKIP_ROWS,vs),A.pixelStorei(A.UNPACK_SKIP_IMAGES,rn),W===0&&G.generateMipmaps&&A.generateMipmap(Bt),st.unbindTexture()},this.copyTextureToTexture3D=function(T,G,Z=null,J=null,W=0){return T.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,J=arguments[1]||null,T=arguments[2],G=arguments[3],W=arguments[4]||0),Cr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,G,Z,J,W)},this.initRenderTarget=function(T){nt.get(T).__webglFramebuffer===void 0&&M.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?M.setTextureCube(T,0):T.isData3DTexture?M.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?M.setTexture2DArray(T,0):M.setTexture2D(T,0),st.unbindTexture()},this.resetState=function(){P=0,R=0,I=null,st.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}class gu{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ee(t),this.near=e,this.far=n}clone(){return new gu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class QE extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new We,this.environmentIntensity=1,this.environmentRotation=new We,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class tb extends Ze{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _u extends wi{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new q,u=new ne;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){const d=n+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new fn(o,3)),this.setAttribute("normal",new fn(a,3)),this.setAttribute("uv",new fn(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _u(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class oa extends wi{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let g=0;const _=[],m=n/2;let p=0;v(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new fn(f,3)),this.setAttribute("normal",new fn(h,3)),this.setAttribute("uv",new fn(d,2));function v(){const x=new q,L=new q;let P=0;const R=(e-t)/n;for(let I=0;I<=r;I++){const b=[],S=I/r,D=S*(e-t)+t;for(let B=0;B<=s;B++){const N=B/s,k=N*l+a,H=Math.sin(k),F=Math.cos(k);L.x=D*H,L.y=-S*n+m,L.z=D*F,f.push(L.x,L.y,L.z),x.set(H,R,F).normalize(),h.push(x.x,x.y,x.z),d.push(N,1-S),b.push(g++)}_.push(b)}for(let I=0;I<s;I++)for(let b=0;b<r;b++){const S=_[b][I],D=_[b+1][I],B=_[b+1][I+1],N=_[b][I+1];(t>0||b!==0)&&(u.push(S,D,N),P+=3),(e>0||b!==r-1)&&(u.push(D,B,N),P+=3)}c.addGroup(p,P,0),p+=P}function w(x){const L=g,P=new ne,R=new q;let I=0;const b=x===!0?t:e,S=x===!0?1:-1;for(let B=1;B<=s;B++)f.push(0,m*S,0),h.push(0,S,0),d.push(.5,.5),g++;const D=g;for(let B=0;B<=s;B++){const k=B/s*l+a,H=Math.cos(k),F=Math.sin(k);R.x=b*F,R.y=m*S,R.z=b*H,f.push(R.x,R.y,R.z),h.push(0,S,0),P.x=H*.5+.5,P.y=F*.5*S+.5,d.push(P.x,P.y),g++}for(let B=0;B<s;B++){const N=L+B,k=D+B;x===!0?u.push(k,k+1,N):u.push(k+1,k,N),I+=3}c.addGroup(p,I,x===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oa(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class yr extends to{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rp,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vu extends qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const El=new Ee,gf=new q,_f=new q;class jp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pu,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;gf.setFromMatrixPosition(t.matrixWorld),e.position.copy(gf),_f.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_f),e.updateMatrixWorld(),El.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(El),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(El)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const vf=new Ee,Sr=new q,bl=new q;class eb extends jp{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new me(2,1,1,1),new me(0,1,1,1),new me(3,1,1,1),new me(1,1,1,1),new me(3,0,1,1),new me(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Sr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Sr),bl.copy(n.position),bl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(bl),n.updateMatrixWorld(),s.makeTranslation(-Sr.x,-Sr.y,-Sr.z),vf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vf)}}class nb extends vu{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new eb}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ib extends jp{constructor(){super(new Gp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sb extends vu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new ib}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class rb extends vu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const xf=new Ee;class ob{constructor(t,e,n=0,s=1/0){this.ray=new Np(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new du,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return xf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xf),this}intersectObject(t,e=!0,n=[]){return Fc(t,this,n,e),n.sort(yf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Fc(t[s],this,n,e);return n.sort(yf),n}}function yf(i,t){return i.distance-t.distance}function Fc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Fc(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ru}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ru);class Rn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new E);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new E);const n=this.elements,s=t.x,r=t.y,o=t.z;return e.x=n[0]*s+n[1]*r+n[2]*o,e.y=n[3]*s+n[4]*r+n[5]*o,e.z=n[6]*s+n[7]*r+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new Rn);const n=this.elements,s=t.elements,r=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],u=n[4],f=n[5],h=n[6],d=n[7],g=n[8],_=s[0],m=s[1],p=s[2],v=s[3],w=s[4],x=s[5],L=s[6],P=s[7],R=s[8];return r[0]=o*_+a*v+l*L,r[1]=o*m+a*w+l*P,r[2]=o*p+a*x+l*R,r[3]=c*_+u*v+f*L,r[4]=c*m+u*w+f*P,r[5]=c*p+u*x+f*R,r[6]=h*_+d*v+g*L,r[7]=h*m+d*w+g*P,r[8]=h*p+d*x+g*R,e}scale(t,e){e===void 0&&(e=new Rn);const n=this.elements,s=e.elements;for(let r=0;r!==3;r++)s[3*r+0]=t.x*n[3*r+0],s[3*r+1]=t.y*n[3*r+1],s[3*r+2]=t.z*n[3*r+2];return e}solve(t,e){e===void 0&&(e=new E);const n=3,s=4,r=[];let o,a;for(o=0;o<n*s;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+s*a]=this.elements[o+3*a];r[3]=t.x,r[7]=t.y,r[11]=t.z;let l=3;const c=l;let u;const f=4;let h;do{if(o=c-l,r[o+s*o]===0){for(a=o+1;a<c;a++)if(r[o+s*a]!==0){u=f;do h=f-u,r[h+s*o]+=r[h+s*a];while(--u);break}}if(r[o+s*o]!==0)for(a=o+1;a<c;a++){const d=r[o+s*a]/r[o+s*o];u=f;do h=f-u,r[h+s*a]=h<=o?0:r[h+s*a]-r[h+s*o]*d;while(--u)}}while(--l);if(e.z=r[2*s+3]/r[2*s+2],e.y=(r[1*s+3]-r[1*s+2]*e.z)/r[1*s+1],e.x=(r[0*s+3]-r[0*s+2]*e.z-r[0*s+1]*e.y)/r[0*s+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";for(let n=0;n<9;n++)t+=this.elements[n]+",";return t}reverse(t){t===void 0&&(t=new Rn);const e=3,n=6,s=ab;let r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+n*o]=this.elements[r+3*o];s[3]=1,s[9]=0,s[15]=0,s[4]=0,s[10]=1,s[16]=0,s[5]=0,s[11]=0,s[17]=1;let a=3;const l=a;let c;const u=n;let f;do{if(r=l-a,s[r+n*r]===0){for(o=r+1;o<l;o++)if(s[r+n*o]!==0){c=u;do f=u-c,s[f+n*r]+=s[f+n*o];while(--c);break}}if(s[r+n*r]!==0)for(o=r+1;o<l;o++){const h=s[r+n*o]/s[r+n*r];c=u;do f=u-c,s[f+n*o]=f<=r?0:s[f+n*o]-s[f+n*r]*h;while(--c)}}while(--a);r=2;do{o=r-1;do{const h=s[r+n*o]/s[r+n*r];c=n;do f=n-c,s[f+n*o]=s[f+n*o]-s[f+n*r]*h;while(--c)}while(o--)}while(--r);r=2;do{const h=1/s[r+n*r];c=n;do f=n-c,s[f+n*r]=s[f+n*r]*h;while(--c)}while(r--);r=2;do{o=2;do{if(f=s[e+o+n*r],isNaN(f)||f===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,f)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,s=t.z,r=t.w,o=e+e,a=n+n,l=s+s,c=e*o,u=e*a,f=e*l,h=n*a,d=n*l,g=s*l,_=r*o,m=r*a,p=r*l,v=this.elements;return v[0]=1-(h+g),v[1]=u-p,v[2]=f+m,v[3]=u+p,v[4]=1-(c+g),v[5]=d-_,v[6]=f-m,v[7]=d+_,v[8]=1-(c+h),this}transpose(t){t===void 0&&(t=new Rn);const e=this.elements,n=t.elements;let s;return n[0]=e[0],n[4]=e[4],n[8]=e[8],s=e[1],n[1]=e[3],n[3]=s,s=e[2],n[2]=e[6],n[6]=s,s=e[5],n[5]=e[7],n[7]=s,t}}const ab=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class E{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new E);const n=t.x,s=t.y,r=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*r-l*s,e.y=l*n-o*r,e.z=o*s-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new E(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new E(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Rn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,s=Math.sqrt(t*t+e*e+n*n);if(s>0){const r=1/s;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return s}unit(t){t===void 0&&(t=new E);const e=this.x,n=this.y,s=this.z;let r=Math.sqrt(e*e+n*n+s*s);return r>0?(r=1/r,t.x=e*r,t.y=n*r,t.z=s*r):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-n)*(o-n)+(a-s)*(a-s))}distanceSquared(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-n)*(o-n)+(a-s)*(a-s)}scale(t,e){e===void 0&&(e=new E);const n=this.x,s=this.y,r=this.z;return e.x=t*n,e.y=t*s,e.z=t*r,e}vmul(t,e){return e===void 0&&(e=new E),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new E),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new E),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const s=lb,r=1/n;s.set(this.x*r,this.y*r,this.z*r);const o=cb;Math.abs(s.x)<.9?(o.set(1,0,0),s.cross(o,t)):(o.set(0,1,0),s.cross(o,t)),s.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const s=this.x,r=this.y,o=this.z;n.x=s+(t.x-s)*e,n.y=r+(t.y-r)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Sf),Sf.almostEquals(t,e)}clone(){return new E(this.x,this.y,this.z)}}E.ZERO=new E(0,0,0);E.UNIT_X=new E(1,0,0);E.UNIT_Y=new E(0,1,0);E.UNIT_Z=new E(0,0,1);const lb=new E,cb=new E,Sf=new E;class dn{constructor(t){t===void 0&&(t={}),this.lowerBound=new E,this.upperBound=new E,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,s){const r=this.lowerBound,o=this.upperBound,a=n;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,Mf),c=Mf),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),s&&(r.x-=s,r.y-=s,r.z-=s,o.x+=s,o.y+=s,o.z+=s),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new dn().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,s=t.lowerBound,r=t.upperBound,o=s.x<=n.x&&n.x<=r.x||e.x<=r.x&&r.x<=n.x,a=s.y<=n.y&&n.y<=r.y||e.y<=r.y&&r.y<=n.y,l=s.z<=n.z&&n.z<=r.z||e.z<=r.z&&r.z<=n.z;return o&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,s=t.lowerBound,r=t.upperBound;return e.x<=s.x&&n.x>=r.x&&e.y<=s.y&&n.y>=r.y&&e.z<=s.z&&n.z>=r.z}getCorners(t,e,n,s,r,o,a,l){const c=this.lowerBound,u=this.upperBound;t.copy(c),e.set(u.x,c.y,c.z),n.set(u.x,u.y,c.z),s.set(c.x,u.y,u.z),r.set(u.x,c.y,u.z),o.set(c.x,u.y,c.z),a.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(t,e){const n=Ef,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7];this.getCorners(s,r,o,a,l,c,u,f);for(let h=0;h!==8;h++){const d=n[h];t.pointToLocal(d,d)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=Ef,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7];this.getCorners(s,r,o,a,l,c,u,f);for(let h=0;h!==8;h++){const d=n[h];t.pointToWorld(d,d)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,s=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*s,l=(this.upperBound.x-n.x)*s,c=(this.lowerBound.y-n.y)*r,u=(this.upperBound.y-n.y)*r,f=(this.lowerBound.z-n.z)*o,h=(this.upperBound.z-n.z)*o,d=Math.max(Math.max(Math.min(a,l),Math.min(c,u)),Math.min(f,h)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,u)),Math.max(f,h));return!(g<0||d>g)}}const Mf=new E,Ef=[new E,new E,new E,new E,new E,new E,new E,new E];class bf{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:s}=e;if(s>n){const r=s;s=n,n=r}return this.matrix[(n*(n+1)>>1)+s-1]}set(t,e,n){let{index:s}=t,{index:r}=e;if(r>s){const o=r;r=s,s=o}this.matrix[(s*(s+1)>>1)+r-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Kp{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const s=n[t].indexOf(e);return s!==-1&&n[t].splice(s,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let s=0,r=n.length;s<r;s++)n[s].call(this,t)}return this}}class Ce{constructor(t,e,n,s){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),s===void 0&&(s=1),this.x=t,this.y=e,this.z=n,this.w=s}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new E),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=ub,s=hb;t.tangents(n,s),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Ce);const n=this.x,s=this.y,r=this.z,o=this.w,a=t.x,l=t.y,c=t.z,u=t.w;return e.x=n*u+o*a+s*c-r*l,e.y=s*u+o*l+r*a-n*c,e.z=r*u+o*c+n*l-s*a,e.w=o*u-n*a-s*l-r*c,e}inverse(t){t===void 0&&(t=new Ce);const e=this.x,n=this.y,s=this.z,r=this.w;this.conjugate(t);const o=1/(e*e+n*n+s*s+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new Ce),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new E);const n=t.x,s=t.y,r=t.z,o=this.x,a=this.y,l=this.z,c=this.w,u=c*n+a*r-l*s,f=c*s+l*n-o*r,h=c*r+o*s-a*n,d=-o*n-a*s-l*r;return e.x=u*c+d*-o+f*-l-h*-a,e.y=f*c+d*-a+h*-o-u*-l,e.z=h*c+d*-l+u*-a-f*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,s,r;const o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const u=o*a+l*c;if(u>.499&&(n=2*Math.atan2(o,c),s=Math.PI/2,r=0),u<-.499&&(n=-2*Math.atan2(o,c),s=-Math.PI/2,r=0),n===void 0){const f=o*o,h=a*a,d=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*h-2*d),s=Math.asin(2*u),r=Math.atan2(2*o*c-2*a*l,1-2*f-2*d)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=s,t.x=r}setFromEuler(t,e,n,s){s===void 0&&(s="XYZ");const r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),u=Math.sin(n/2);return s==="XYZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):s==="YXZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):s==="ZXY"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):s==="ZYX"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):s==="YZX"?(this.x=l*o*a+r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a-l*c*u):s==="XZY"&&(this.x=l*o*a-r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a+l*c*u),this}clone(){return new Ce(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Ce);const s=this.x,r=this.y,o=this.z,a=this.w;let l=t.x,c=t.y,u=t.z,f=t.w,h,d,g,_,m;return d=s*l+r*c+o*u+a*f,d<0&&(d=-d,l=-l,c=-c,u=-u,f=-f),1-d>1e-6?(h=Math.acos(d),g=Math.sin(h),_=Math.sin((1-e)*h)/g,m=Math.sin(e*h)/g):(_=1-e,m=e),n.x=_*s+m*l,n.y=_*r+m*c,n.z=_*o+m*u,n.w=_*a+m*f,n}integrate(t,e,n,s){s===void 0&&(s=new Ce);const r=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,u=this.z,f=this.w,h=e*.5;return s.x+=h*(r*f+o*u-a*c),s.y+=h*(o*f+a*l-r*u),s.z+=h*(a*f+r*c-o*l),s.w+=h*(-r*l-o*c-a*u),s}}const ub=new E,hb=new E,fb={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class It{constructor(t){t===void 0&&(t={}),this.id=It.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}It.idCounter=0;It.types=fb;class oe{constructor(t){t===void 0&&(t={}),this.position=new E,this.quaternion=new Ce,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return oe.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return oe.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,s){return s===void 0&&(s=new E),n.vsub(t,s),e.conjugate(wf),wf.vmult(s,s),s}static pointToWorldFrame(t,e,n,s){return s===void 0&&(s=new E),e.vmult(n,s),s.vadd(t,s),s}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new E),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,s){return s===void 0&&(s=new E),e.w*=-1,e.vmult(n,s),e.w*=-1,s}}const wf=new Ce;class kr extends It{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:s=[],axes:r,boundingSphereRadius:o}=t;super({type:It.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const s=new E;for(let r=0;r!==t.length;r++){const o=t[r],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[o[l]].vsub(e[o[c]],s),s.normalize();let u=!1;for(let f=0;f!==n.length;f++)if(n[f].almostEquals(s)||n[f].almostEquals(s)){u=!0;break}u||n.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let s=0;s<this.faces[t].length;s++)if(!this.vertices[this.faces[t][s]])throw new Error(`Vertex ${this.faces[t][s]} not found!`);const e=this.faceNormals[t]||new E;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[t].length;s++)console.warn(`.vertices[${this.faces[t][s]}] = Vec3(${this.vertices[this.faces[t][s]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],s=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];kr.computeNormal(s,r,o,e)}static computeNormal(t,e,n,s){const r=new E,o=new E;e.vsub(t,o),n.vsub(e,r),r.cross(o,s),s.isZero()||s.normalize()}clipAgainstHull(t,e,n,s,r,o,a,l,c){const u=new E;let f=-1,h=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){u.copy(n.faceNormals[g]),r.vmult(u,u);const _=u.dot(o);_>h&&(h=_,f=g)}const d=[];for(let g=0;g<n.faces[f].length;g++){const _=n.vertices[n.faces[f][g]],m=new E;m.copy(_),r.vmult(m,m),s.vadd(m,m),d.push(m)}f>=0&&this.clipFaceAgainstHull(o,t,e,d,a,l,c)}findSeparatingAxis(t,e,n,s,r,o,a,l){const c=new E,u=new E,f=new E,h=new E,d=new E,g=new E;let _=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let p=0;p!==m.uniqueAxes.length;p++){n.vmult(m.uniqueAxes[p],c);const v=m.testSepAxis(c,t,e,n,s,r);if(v===!1)return!1;v<_&&(_=v,o.copy(c))}else{const p=a?a.length:m.faces.length;for(let v=0;v<p;v++){const w=a?a[v]:v;c.copy(m.faceNormals[w]),n.vmult(c,c);const x=m.testSepAxis(c,t,e,n,s,r);if(x===!1)return!1;x<_&&(_=x,o.copy(c))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){r.vmult(t.uniqueAxes[p],u);const v=m.testSepAxis(u,t,e,n,s,r);if(v===!1)return!1;v<_&&(_=v,o.copy(u))}else{const p=l?l.length:t.faces.length;for(let v=0;v<p;v++){const w=l?l[v]:v;u.copy(t.faceNormals[w]),r.vmult(u,u);const x=m.testSepAxis(u,t,e,n,s,r);if(x===!1)return!1;x<_&&(_=x,o.copy(u))}}for(let p=0;p!==m.uniqueEdges.length;p++){n.vmult(m.uniqueEdges[p],h);for(let v=0;v!==t.uniqueEdges.length;v++)if(r.vmult(t.uniqueEdges[v],d),h.cross(d,g),!g.almostZero()){g.normalize();const w=m.testSepAxis(g,t,e,n,s,r);if(w===!1)return!1;w<_&&(_=w,o.copy(g))}}return s.vsub(e,f),f.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,s,r,o){const a=this;kr.project(a,t,n,s,wl),kr.project(e,t,r,o,Tl);const l=wl[0],c=wl[1],u=Tl[0],f=Tl[1];if(l<f||u<c)return!1;const h=l-f,d=u-c;return h<d?h:d}calculateLocalInertia(t,e){const n=new E,s=new E;this.computeLocalAABB(s,n);const r=n.x-s.x,o=n.y-s.y,a=n.z-s.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*r*2*r+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],s=this.vertices[e[0]];return-n.dot(s)}clipFaceAgainstHull(t,e,n,s,r,o,a){const l=new E,c=new E,u=new E,f=new E,h=new E,d=new E,g=new E,_=new E,m=this,p=[],v=s,w=p;let x=-1,L=Number.MAX_VALUE;for(let S=0;S<m.faces.length;S++){l.copy(m.faceNormals[S]),n.vmult(l,l);const D=l.dot(t);D<L&&(L=D,x=S)}if(x<0)return;const P=m.faces[x];P.connectedFaces=[];for(let S=0;S<m.faces.length;S++)for(let D=0;D<m.faces[S].length;D++)P.indexOf(m.faces[S][D])!==-1&&S!==x&&P.connectedFaces.indexOf(S)===-1&&P.connectedFaces.push(S);const R=P.length;for(let S=0;S<R;S++){const D=m.vertices[P[S]],B=m.vertices[P[(S+1)%R]];D.vsub(B,c),u.copy(c),n.vmult(u,u),e.vadd(u,u),f.copy(this.faceNormals[x]),n.vmult(f,f),e.vadd(f,f),u.cross(f,h),h.negate(h),d.copy(D),n.vmult(d,d),e.vadd(d,d);const N=P.connectedFaces[S];g.copy(this.faceNormals[N]);const k=this.getPlaneConstantOfFace(N);_.copy(g),n.vmult(_,_);const H=k-_.dot(e);for(this.clipFaceAgainstPlane(v,w,_,H);v.length;)v.shift();for(;w.length;)v.push(w.shift())}g.copy(this.faceNormals[x]);const I=this.getPlaneConstantOfFace(x);_.copy(g),n.vmult(_,_);const b=I-_.dot(e);for(let S=0;S<v.length;S++){let D=_.dot(v[S])+b;if(D<=r&&(console.log(`clamped: depth=${D} to minDist=${r}`),D=r),D<=o){const B=v[S];if(D<=1e-6){const N={point:B,normal:_,depth:D};a.push(N)}}}}clipFaceAgainstPlane(t,e,n,s){let r,o;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];r=n.dot(l)+s;for(let u=0;u<a;u++){if(c=t[u],o=n.dot(c)+s,r<0)if(o<0){const f=new E;f.copy(c),e.push(f)}else{const f=new E;l.lerp(c,r/(r-o),f),e.push(f)}else if(o<0){const f=new E;l.lerp(c,r/(r-o),f),e.push(f),e.push(c)}l=c,r=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new E);const n=this.vertices,s=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)e.vmult(n[r],s[r]),t.vadd(s[r],s[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){const r=n[s];r.x<t.x?t.x=r.x:r.x>e.x&&(e.x=r.x),r.y<t.y?t.y=r.y:r.y>e.y&&(e.y=r.y),r.z<t.z?t.z=r.z:r.z>e.z&&(e.z=r.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new E);const n=this.faceNormals,s=this.worldFaceNormals;for(let r=0;r!==e;r++)t.vmult(n[r],s[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const s=e[n].lengthSquared();s>t&&(t=s)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,s){const r=this.vertices;let o,a,l,c,u,f,h=new E;for(let d=0;d<r.length;d++){h.copy(r[d]),e.vmult(h,h),t.vadd(h,h);const g=h;(o===void 0||g.x<o)&&(o=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(u===void 0||g.y>u)&&(u=g.y),(l===void 0||g.z<l)&&(l=g.z),(f===void 0||g.z>f)&&(f=g.z)}n.set(o,a,l),s.set(c,u,f)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new E);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,s=this.vertices;if(e){for(let r=0;r<n;r++){const o=s[r];e.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){const o=this.faceNormals[r];e.vmult(o,o)}}if(t)for(let r=0;r<n;r++){const o=s[r];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,s=this.faceNormals,r=new E;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let a=s[o];const l=e[n[o][0]],c=new E;t.vsub(l,c);const u=a.dot(c),f=new E;r.vsub(l,f);const h=a.dot(f);if(u<0&&h>0||u>0&&h<0)return!1}return-1}static project(t,e,n,s,r){const o=t.vertices.length,a=db;let l=0,c=0;const u=pb,f=t.vertices;u.setZero(),oe.vectorToLocalFrame(n,s,e,a),oe.pointToLocalFrame(n,s,u,u);const h=u.dot(a);c=l=f[0].dot(a);for(let d=1;d<o;d++){const g=f[d].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=h,l-=h,c>l){const d=c;c=l,l=d}r[0]=l,r[1]=c}}const wl=[],Tl=[];new E;const db=new E,pb=new E;class fs extends It{constructor(t){super({type:It.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,s=E,r=[new s(-t,-e,-n),new s(t,-e,-n),new s(t,e,-n),new s(-t,e,-n),new s(-t,-e,n),new s(t,-e,n),new s(t,e,n),new s(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],l=new kr({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new E),fs.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const s=t;n.x=1/12*e*(2*s.y*2*s.y+2*s.z*2*s.z),n.y=1/12*e*(2*s.x*2*s.x+2*s.z*2*s.z),n.z=1/12*e*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(t,e){const n=t,s=this.halfExtents;if(n[0].set(s.x,0,0),n[1].set(0,s.y,0),n[2].set(0,0,s.z),n[3].set(-s.x,0,0),n[4].set(0,-s.y,0),n[5].set(0,0,-s.z),e!==void 0)for(let r=0;r!==n.length;r++)e.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const s=this.halfExtents,r=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let o=0;o<r.length;o++)Ni.set(r[o][0],r[o][1],r[o][2]),e.vmult(Ni,Ni),t.vadd(Ni,Ni),n(Ni.x,Ni.y,Ni.z)}calculateWorldAABB(t,e,n,s){const r=this.halfExtents;Fn[0].set(r.x,r.y,r.z),Fn[1].set(-r.x,r.y,r.z),Fn[2].set(-r.x,-r.y,r.z),Fn[3].set(-r.x,-r.y,-r.z),Fn[4].set(r.x,-r.y,-r.z),Fn[5].set(r.x,r.y,-r.z),Fn[6].set(-r.x,r.y,-r.z),Fn[7].set(r.x,-r.y,r.z);const o=Fn[0];e.vmult(o,o),t.vadd(o,o),s.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=Fn[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,u=l.y,f=l.z;c>s.x&&(s.x=c),u>s.y&&(s.y=u),f>s.z&&(s.z=f),c<n.x&&(n.x=c),u<n.y&&(n.y=u),f<n.z&&(n.z=f)}}}const Ni=new E,Fn=[new E,new E,new E,new E,new E,new E,new E,new E],xu={DYNAMIC:1,STATIC:2,KINEMATIC:4},yu={AWAKE:0,SLEEPY:1,SLEEPING:2};class wt extends Kp{constructor(t){t===void 0&&(t={}),super(),this.id=wt.idCounter++,this.index=-1,this.world=null,this.vlambda=new E,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new E,this.previousPosition=new E,this.interpolatedPosition=new E,this.initPosition=new E,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new E,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new E,this.force=new E;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?wt.STATIC:wt.DYNAMIC,typeof t.type==typeof wt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=wt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new E,this.quaternion=new Ce,this.initQuaternion=new Ce,this.previousQuaternion=new Ce,this.interpolatedQuaternion=new Ce,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new E,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new E,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new E,this.invInertia=new E,this.invInertiaWorld=new Rn,this.invMassSolve=0,this.invInertiaSolve=new E,this.invInertiaWorldSolve=new Rn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new E(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new E(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new dn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new E,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=wt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===wt.SLEEPING&&this.dispatchEvent(wt.wakeupEvent)}sleep(){this.sleepState=wt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;e===wt.AWAKE&&n<s?(this.sleepState=wt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(wt.sleepyEvent)):e===wt.SLEEPY&&n>s?this.wakeUp():e===wt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(wt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===wt.SLEEPING||this.type===wt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new E),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new E),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e}addShape(t,e,n){const s=new E,r=new Ce;return e&&s.copy(e),n&&r.copy(n),this.shapes.push(t),this.shapeOffsets.push(s),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let s=0;for(let r=0;r!==n;r++){const o=t[r];o.updateBoundingSphereRadius();const a=e[r].length(),l=o.boundingSphereRadius;a+l>s&&(s=a+l)}this.boundingRadius=s}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,s=t.length,r=mb,o=gb,a=this.quaternion,l=this.aabb,c=_b;for(let u=0;u!==s;u++){const f=t[u];a.vmult(e[u],r),r.vadd(this.position,r),a.mult(n[u],o),f.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),u===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=vb,s=xb;n.setRotationFromQuaternion(this.quaternion),n.transpose(s),n.scale(e,n),n.mmult(s,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new E),this.type!==wt.DYNAMIC)return;this.sleepState===wt.SLEEPING&&this.wakeUp();const n=yb;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new E),this.type!==wt.DYNAMIC)return;const n=Sb,s=Mb;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyForce(n,s)}applyTorque(t){this.type===wt.DYNAMIC&&(this.sleepState===wt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new E),this.type!==wt.DYNAMIC)return;this.sleepState===wt.SLEEPING&&this.wakeUp();const n=e,s=Eb;s.copy(t),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);const r=bb;n.cross(t,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new E),this.type!==wt.DYNAMIC)return;const n=wb,s=Tb;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyImpulse(n,s)}updateMassProperties(){const t=Ab;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),fs.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new E;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===wt.DYNAMIC||this.type===wt.KINEMATIC)||this.sleepState===wt.SLEEPING)return;const s=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,u=this.invMass,f=this.invInertiaWorld,h=this.linearFactor,d=u*t;s.x+=a.x*d*h.x,s.y+=a.y*d*h.y,s.z+=a.z*d*h.z;const g=f.elements,_=this.angularFactor,m=l.x*_.x,p=l.y*_.y,v=l.z*_.z;r.x+=t*(g[0]*m+g[1]*p+g[2]*v),r.y+=t*(g[3]*m+g[4]*p+g[5]*v),r.z+=t*(g[6]*m+g[7]*p+g[8]*v),o.x+=s.x*t,o.y+=s.y*t,o.z+=s.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}wt.idCounter=0;wt.COLLIDE_EVENT_NAME="collide";wt.DYNAMIC=xu.DYNAMIC;wt.STATIC=xu.STATIC;wt.KINEMATIC=xu.KINEMATIC;wt.AWAKE=yu.AWAKE;wt.SLEEPY=yu.SLEEPY;wt.SLEEPING=yu.SLEEPING;wt.wakeupEvent={type:"wakeup"};wt.sleepyEvent={type:"sleepy"};wt.sleepEvent={type:"sleep"};const mb=new E,gb=new Ce,_b=new dn,vb=new Rn,xb=new Rn;new Rn;const yb=new E,Sb=new E,Mb=new E,Eb=new E,bb=new E,wb=new E,Tb=new E,Ab=new E;class Zp{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&wt.STATIC)!==0||t.sleepState===wt.SLEEPING)&&((e.type&wt.STATIC)!==0||e.sleepState===wt.SLEEPING))}intersectionTest(t,e,n,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,s):this.doBoundingSphereBroadphase(t,e,n,s)}doBoundingSphereBroadphase(t,e,n,s){const r=Cb;e.position.vsub(t.position,r);const o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(n.push(t),s.push(e))}doBoundingBoxBroadphase(t,e,n,s){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),s.push(e))}makePairsUnique(t,e){const n=Rb,s=Pb,r=Lb,o=t.length;for(let a=0;a!==o;a++)s[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const l=s[a].id,c=r[a].id,u=l<c?`${l},${c}`:`${c},${l}`;n[u]=a,n.keys.push(u)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(s[c]),e.push(r[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new E;t.position.vsub(e.position,n);const s=t.shapes[0],r=e.shapes[0];return Math.pow(s.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Cb=new E;new E;new Ce;new E;const Rb={keys:[]},Pb=[],Lb=[];new E;new E;new E;class Ib extends Zp{constructor(){super()}collisionPairs(t,e,n){const s=t.bodies,r=s.length;let o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=s[l],a=s[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let s=0;s<t.bodies.length;s++){const r=t.bodies[s];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&n.push(r)}return n}}class aa{constructor(){this.rayFromWorld=new E,this.rayToWorld=new E,this.hitNormalWorld=new E,this.hitPointWorld=new E,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,s,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(s),this.shape=r,this.body=o,this.distance=a}}let Jp,Qp,tm,em,nm,im,sm;const Su={CLOSEST:1,ANY:2,ALL:4};Jp=It.types.SPHERE;Qp=It.types.PLANE;tm=It.types.BOX;em=It.types.CYLINDER;nm=It.types.CONVEXPOLYHEDRON;im=It.types.HEIGHTFIELD;sm=It.types.TRIMESH;class Ae{get[Jp](){return this._intersectSphere}get[Qp](){return this._intersectPlane}get[tm](){return this._intersectBox}get[em](){return this._intersectConvex}get[nm](){return this._intersectConvex}get[im](){return this._intersectHeightfield}get[sm](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new E),e===void 0&&(e=new E),this.from=t.clone(),this.to=e.clone(),this.direction=new E,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Ae.ANY,this.result=new aa,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Ae.ANY,this.result=e.result||new aa,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Tf),Al.length=0,t.broadphase.aabbQuery(t,Tf,Al),this.intersectBodies(Al),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;const s=Db,r=Nb;for(let o=0,a=t.shapes.length;o<a;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],s),s.vadd(t.position,s),this.intersectShape(l,r,s,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,s=t.length;!this.result.shouldStop&&n<s;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,s){const r=this.from;if($b(r,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,s,t)}_intersectBox(t,e,n,s,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,s,r)}_intersectPlane(t,e,n,s,r){const o=this.from,a=this.to,l=this.direction,c=new E(0,0,1);e.vmult(c,c);const u=new E;o.vsub(n,u);const f=u.dot(c);a.vsub(n,u);const h=u.dot(c);if(f*h>0||o.distanceTo(a)<f)return;const d=c.dot(l);if(Math.abs(d)<this.precision)return;const g=new E,_=new E,m=new E;o.vsub(n,g);const p=-c.dot(g)/d;l.scale(p,_),o.vadd(_,m),this.reportIntersection(c,m,r,s,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,s=this.to,r=this.from;e.x=Math.min(s.x,r.x),e.y=Math.min(s.y,r.y),e.z=Math.min(s.z,r.z),n.x=Math.max(s.x,r.x),n.y=Math.max(s.y,r.y),n.z=Math.max(s.z,r.z)}_intersectHeightfield(t,e,n,s,r){t.data,t.elementSize;const o=Ub;o.from.copy(this.from),o.to.copy(this.to),oe.pointToLocalFrame(n,e,o.from,o.from),oe.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=Fb;let l,c,u,f;l=c=0,u=f=t.data.length-1;const h=new dn;o.getAABB(h),t.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),u=Math.min(u,a[0]+1),f=Math.min(f,a[1]+1);for(let d=l;d<u;d++)for(let g=c;g<f;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(d,g,h),!!h.overlapsRay(o)){if(t.getConvexTrianglePillar(d,g,!1),oe.pointToWorldFrame(n,e,t.pillarOffset,Lo),this._intersectConvex(t.pillarConvex,e,Lo,s,r,Af),this.result.shouldStop)return;t.getConvexTrianglePillar(d,g,!0),oe.pointToWorldFrame(n,e,t.pillarOffset,Lo),this._intersectConvex(t.pillarConvex,e,Lo,s,r,Af)}}}_intersectSphere(t,e,n,s,r){const o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,u=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),f=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,h=u**2-4*c*f,d=Ob,g=Bb;if(!(h<0))if(h===0)o.lerp(a,h,d),d.vsub(n,g),g.normalize(),this.reportIntersection(g,d,r,s,-1);else{const _=(-u-Math.sqrt(h))/(2*c),m=(-u+Math.sqrt(h))/(2*c);if(_>=0&&_<=1&&(o.lerp(a,_,d),d.vsub(n,g),g.normalize(),this.reportIntersection(g,d,r,s,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,d),d.vsub(n,g),g.normalize(),this.reportIntersection(g,d,r,s,-1))}}_intersectConvex(t,e,n,s,r,o){const a=zb,l=Cf,c=o&&o.faceList||null,u=t.faces,f=t.vertices,h=t.faceNormals,d=this.direction,g=this.from,_=this.to,m=g.distanceTo(_),p=c?c.length:u.length,v=this.result;for(let w=0;!v.shouldStop&&w<p;w++){const x=c?c[w]:w,L=u[x],P=h[x],R=e,I=n;l.copy(f[L[0]]),R.vmult(l,l),l.vadd(I,l),l.vsub(g,l),R.vmult(P,a);const b=d.dot(a);if(Math.abs(b)<this.precision)continue;const S=a.dot(l)/b;if(!(S<0)){d.scale(S,tn),tn.vadd(g,tn),bn.copy(f[L[0]]),R.vmult(bn,bn),I.vadd(bn,bn);for(let D=1;!v.shouldStop&&D<L.length-1;D++){On.copy(f[L[D]]),Bn.copy(f[L[D+1]]),R.vmult(On,On),R.vmult(Bn,Bn),I.vadd(On,On),I.vadd(Bn,Bn);const B=tn.distanceTo(g);!(Ae.pointInTriangle(tn,bn,On,Bn)||Ae.pointInTriangle(tn,On,bn,Bn))||B>m||this.reportIntersection(a,tn,r,s,x)}}}}_intersectTrimesh(t,e,n,s,r,o){const a=kb,l=Xb,c=Yb,u=Cf,f=Hb,h=Vb,d=Gb,g=qb,_=Wb,m=t.indices;t.vertices;const p=this.from,v=this.to,w=this.direction;c.position.copy(n),c.quaternion.copy(e),oe.vectorToLocalFrame(n,e,w,f),oe.pointToLocalFrame(n,e,p,h),oe.pointToLocalFrame(n,e,v,d),d.x*=t.scale.x,d.y*=t.scale.y,d.z*=t.scale.z,h.x*=t.scale.x,h.y*=t.scale.y,h.z*=t.scale.z,d.vsub(h,f),f.normalize();const x=h.distanceSquared(d);t.tree.rayQuery(this,c,l);for(let L=0,P=l.length;!this.result.shouldStop&&L!==P;L++){const R=l[L];t.getNormal(R,a),t.getVertex(m[R*3],bn),bn.vsub(h,u);const I=f.dot(a),b=a.dot(u)/I;if(b<0)continue;f.scale(b,tn),tn.vadd(h,tn),t.getVertex(m[R*3+1],On),t.getVertex(m[R*3+2],Bn);const S=tn.distanceSquared(h);!(Ae.pointInTriangle(tn,On,bn,Bn)||Ae.pointInTriangle(tn,bn,On,Bn))||S>x||(oe.vectorToWorldFrame(e,a,_),oe.pointToWorldFrame(n,e,tn,g),this.reportIntersection(_,g,r,s,R))}l.length=0}reportIntersection(t,e,n,s,r){const o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case Ae.ALL:this.hasHit=!0,c.set(o,a,t,e,n,s,l),c.hasHit=!0,this.callback(c);break;case Ae.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,s,l));break;case Ae.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,s,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,s){s.vsub(e,cs),n.vsub(e,Mr),t.vsub(e,Cl);const r=cs.dot(cs),o=cs.dot(Mr),a=cs.dot(Cl),l=Mr.dot(Mr),c=Mr.dot(Cl);let u,f;return(u=l*a-o*c)>=0&&(f=r*c-o*a)>=0&&u+f<r*l-o*o}}Ae.CLOSEST=Su.CLOSEST;Ae.ANY=Su.ANY;Ae.ALL=Su.ALL;const Tf=new dn,Al=[],Mr=new E,Cl=new E,Db=new E,Nb=new Ce,tn=new E,bn=new E,On=new E,Bn=new E;new E;new aa;const Af={faceList:[0]},Lo=new E,Ub=new Ae,Fb=[],Ob=new E,Bb=new E,zb=new E;new E;new E;const Cf=new E,kb=new E,Hb=new E,Vb=new E,Gb=new E,Wb=new E,qb=new E;new dn;const Xb=[],Yb=new oe,cs=new E,Io=new E;function $b(i,t,e){e.vsub(i,cs);const n=cs.dot(t);return t.scale(n,Io),Io.vadd(i,Io),e.distanceTo(Io)}class ks extends Zp{static checkBounds(t,e,n){let s,r;n===0?(s=t.position.x,r=e.position.x):n===1?(s=t.position.y,r=e.position.y):n===2&&(s=t.position.z,r=e.position.z);const o=t.boundingRadius,a=e.boundingRadius,l=s+o;return r-a<l}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const s=t[e];let r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.x<=s.aabb.lowerBound.x);r--)t[r+1]=t[r];t[r+1]=s}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const s=t[e];let r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.y<=s.aabb.lowerBound.y);r--)t[r+1]=t[r];t[r+1]=s}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const s=t[e];let r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.z<=s.aabb.lowerBound.z);r--)t[r+1]=t[r];t[r+1]=s}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const s=e.indexOf(n.body);s!==-1&&e.splice(s,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const s=this.axisList,r=s.length,o=this.axisIndex;let a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==r;a++){const c=s[a];for(l=a+1;l<r;l++){const u=s[l];if(this.needBroadphaseCollision(c,u)){if(!ks.checkBounds(c,u,o))break;this.intersectionTest(c,u,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let s=0;s!==n;s++){const r=t[s];r.aabbNeedsUpdate&&r.updateAABB()}e===0?ks.insertionSortX(t):e===1?ks.insertionSortY(t):e===2&&ks.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,s=0,r=0,o=0;const a=this.axisList,l=a.length,c=1/l;for(let d=0;d!==l;d++){const g=a[d],_=g.position.x;t+=_,e+=_*_;const m=g.position.y;n+=m,s+=m*m;const p=g.position.z;r+=p,o+=p*p}const u=e-t*t*c,f=s-n*n*c,h=o-r*r*c;u>f?u>h?this.axisIndex=0:this.axisIndex=2:f>h?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const s=this.axisIndex;let r="x";s===1&&(r="y"),s===2&&(r="z");const o=this.axisList;e.lowerBound[r],e.upperBound[r];for(let a=0;a<o.length;a++){const l=o[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(e)&&n.push(l)}return n}}class jb{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class Rf{constructor(){this.spatial=new E,this.rotational=new E}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class eo{constructor(t,e,n,s){n===void 0&&(n=-1e6),s===void 0&&(s=1e6),this.id=eo.idCounter++,this.minForce=n,this.maxForce=s,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Rf,this.jacobianElementB=new Rf,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const s=e,r=t,o=n;this.a=4/(o*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(o*o*r*(1+4*s))}computeB(t,e,n){const s=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-s*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.position,o=s.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.velocity,o=s.velocity,a=n.angularVelocity,l=s.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.vlambda,o=s.vlambda,a=n.wlambda,l=s.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.force,o=n.torque,a=s.force,l=s.torque,c=n.invMassSolve,u=s.invMassSolve;return r.scale(c,Pf),a.scale(u,Lf),n.invInertiaWorldSolve.vmult(o,If),s.invInertiaWorldSolve.vmult(l,Df),t.multiplyVectors(Pf,If)+e.multiplyVectors(Lf,Df)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.invMassSolve,o=s.invMassSolve,a=n.invInertiaWorldSolve,l=s.invInertiaWorldSolve;let c=r+o;return a.vmult(t.rotational,Do),c+=Do.dot(t.rotational),l.vmult(e.rotational,Do),c+=Do.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,s=this.bi,r=this.bj,o=Kb;s.vlambda.addScaledVector(s.invMassSolve*t,e.spatial,s.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),s.invInertiaWorldSolve.vmult(e.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}eo.idCounter=0;const Pf=new E,Lf=new E,If=new E,Df=new E,Do=new E,Kb=new E;class Zb extends eo{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new E,this.rj=new E,this.ni=new E}computeB(t){const e=this.a,n=this.b,s=this.bi,r=this.bj,o=this.ri,a=this.rj,l=Jb,c=Qb,u=s.velocity,f=s.angularVelocity;s.force,s.torque;const h=r.velocity,d=r.angularVelocity;r.force,r.torque;const g=tw,_=this.jacobianElementA,m=this.jacobianElementB,p=this.ni;o.cross(p,l),a.cross(p,c),p.negate(_.spatial),l.negate(_.rotational),m.spatial.copy(p),m.rotational.copy(c),g.copy(r.position),g.vadd(a,g),g.vsub(s.position,g),g.vsub(o,g);const v=p.dot(g),w=this.restitution+1,x=w*h.dot(p)-w*u.dot(p)+d.dot(c)-f.dot(l),L=this.computeGiMf();return-v*e-x*n-t*L}getImpactVelocityAlongNormal(){const t=ew,e=nw,n=iw,s=sw,r=rw;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(s,e),t.vsub(e,r),this.ni.dot(r)}}const Jb=new E,Qb=new E,tw=new E,ew=new E,nw=new E,iw=new E,sw=new E,rw=new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;class Nf extends eo{constructor(t,e,n){super(t,e,-n,n),this.ri=new E,this.rj=new E,this.t=new E}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,s=this.rj,r=ow,o=aw,a=this.t;n.cross(a,r),s.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const u=this.computeGW(),f=this.computeGiMf();return-u*e-t*f}}const ow=new E,aw=new E;class nr{constructor(t,e,n){n=jb.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=nr.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}nr.idCounter=0;class ir{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=ir.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}ir.idCounter=0;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new Ae;new E;new E;new E;new E(1,0,0),new E(0,1,0),new E(0,0,1);new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new dn;new E;new dn;new E;new E;new E;new E;new E;new E;new E;new dn;new E;new oe;new dn;class lw{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class cw extends lw{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const s=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,u=t;let f,h,d,g,_,m;if(a!==0)for(let x=0;x!==c;x++)l[x].updateSolveMassProperties();const p=hw,v=fw,w=uw;p.length=a,v.length=a,w.length=a;for(let x=0;x!==a;x++){const L=o[x];w[x]=0,v[x]=L.computeB(u),p[x]=1/L.computeC()}if(a!==0){for(let P=0;P!==c;P++){const R=l[P],I=R.vlambda,b=R.wlambda;I.set(0,0,0),b.set(0,0,0)}for(n=0;n!==s;n++){g=0;for(let P=0;P!==a;P++){const R=o[P];f=v[P],h=p[P],m=w[P],_=R.computeGWlambda(),d=h*(f-_-R.eps*m),m+d<R.minForce?d=R.minForce-m:m+d>R.maxForce&&(d=R.maxForce-m),w[P]+=d,g+=d>0?d:-d,R.addToWlambda(d)}if(g*g<r)break}for(let P=0;P!==c;P++){const R=l[P],I=R.velocity,b=R.angularVelocity;R.vlambda.vmul(R.linearFactor,R.vlambda),I.vadd(R.vlambda,I),R.wlambda.vmul(R.angularFactor,R.wlambda),b.vadd(R.wlambda,b)}let x=o.length;const L=1/u;for(;x--;)o[x].multiplier=w[x]*L}return n}}const uw=[],hw=[],fw=[];class dw{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class pw extends dw{constructor(){super(...arguments),this.type=E}constructObject(){return new E}}const Me={sphereSphere:It.types.SPHERE,spherePlane:It.types.SPHERE|It.types.PLANE,boxBox:It.types.BOX|It.types.BOX,sphereBox:It.types.SPHERE|It.types.BOX,planeBox:It.types.PLANE|It.types.BOX,convexConvex:It.types.CONVEXPOLYHEDRON,sphereConvex:It.types.SPHERE|It.types.CONVEXPOLYHEDRON,planeConvex:It.types.PLANE|It.types.CONVEXPOLYHEDRON,boxConvex:It.types.BOX|It.types.CONVEXPOLYHEDRON,sphereHeightfield:It.types.SPHERE|It.types.HEIGHTFIELD,boxHeightfield:It.types.BOX|It.types.HEIGHTFIELD,convexHeightfield:It.types.CONVEXPOLYHEDRON|It.types.HEIGHTFIELD,sphereParticle:It.types.PARTICLE|It.types.SPHERE,planeParticle:It.types.PLANE|It.types.PARTICLE,boxParticle:It.types.BOX|It.types.PARTICLE,convexParticle:It.types.PARTICLE|It.types.CONVEXPOLYHEDRON,cylinderCylinder:It.types.CYLINDER,sphereCylinder:It.types.SPHERE|It.types.CYLINDER,planeCylinder:It.types.PLANE|It.types.CYLINDER,boxCylinder:It.types.BOX|It.types.CYLINDER,convexCylinder:It.types.CONVEXPOLYHEDRON|It.types.CYLINDER,heightfieldCylinder:It.types.HEIGHTFIELD|It.types.CYLINDER,particleCylinder:It.types.PARTICLE|It.types.CYLINDER,sphereTrimesh:It.types.SPHERE|It.types.TRIMESH,planeTrimesh:It.types.PLANE|It.types.TRIMESH};class mw{get[Me.sphereSphere](){return this.sphereSphere}get[Me.spherePlane](){return this.spherePlane}get[Me.boxBox](){return this.boxBox}get[Me.sphereBox](){return this.sphereBox}get[Me.planeBox](){return this.planeBox}get[Me.convexConvex](){return this.convexConvex}get[Me.sphereConvex](){return this.sphereConvex}get[Me.planeConvex](){return this.planeConvex}get[Me.boxConvex](){return this.boxConvex}get[Me.sphereHeightfield](){return this.sphereHeightfield}get[Me.boxHeightfield](){return this.boxHeightfield}get[Me.convexHeightfield](){return this.convexHeightfield}get[Me.sphereParticle](){return this.sphereParticle}get[Me.planeParticle](){return this.planeParticle}get[Me.boxParticle](){return this.boxParticle}get[Me.convexParticle](){return this.convexParticle}get[Me.cylinderCylinder](){return this.convexConvex}get[Me.sphereCylinder](){return this.sphereConvex}get[Me.planeCylinder](){return this.planeConvex}get[Me.boxCylinder](){return this.boxConvex}get[Me.convexCylinder](){return this.convexConvex}get[Me.heightfieldCylinder](){return this.heightfieldCylinder}get[Me.particleCylinder](){return this.particleCylinder}get[Me.sphereTrimesh](){return this.sphereTrimesh}get[Me.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new pw,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,s,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new Zb(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&s.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,u=s.material||e.material;return c&&u&&c.restitution>=0&&u.restitution>=0&&(a.restitution=c.restitution*u.restitution),a.si=r||n,a.sj=o||s,a}createFrictionEquationsFromContact(t,e){const n=t.bi,s=t.bj,r=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const u=r.material||n.material,f=o.material||s.material;if(u&&f&&u.friction>=0&&f.friction>=0&&(c=u.friction*f.friction),c>0){const h=c*(a.frictionGravity||a.gravity).length();let d=n.invMass+s.invMass;d>0&&(d=1/d);const g=this.frictionEquationPool,_=g.length?g.pop():new Nf(n,s,h*d),m=g.length?g.pop():new Nf(n,s,h*d);return _.bi=m.bi=n,_.bj=m.bj=s,_.minForce=m.minForce=-h*d,_.maxForce=m.maxForce=h*d,_.ri.copy(t.ri),_.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(_.t,m.t),_.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),_.enabled=m.enabled=t.enabled,e.push(_,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];is.setZero(),Us.setZero(),Fs.setZero();const r=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==r?(is.vadd(e.ni,is),Us.vadd(e.ri,Us),Fs.vadd(e.rj,Fs)):(is.vsub(e.ni,is),Us.vadd(e.rj,Us),Fs.vadd(e.ri,Fs));const o=1/t;Us.scale(o,n.ri),Fs.scale(o,n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj),is.normalize(),is.tangents(n.t,s.t)}getContacts(t,e,n,s,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=s,this.frictionResult=o;const l=vw,c=xw,u=gw,f=_w;for(let h=0,d=t.length;h!==d;h++){const g=t[h],_=e[h];let m=null;g.material&&_.material&&(m=n.getContactMaterial(g.material,_.material)||null);const p=g.type&wt.KINEMATIC&&_.type&wt.STATIC||g.type&wt.STATIC&&_.type&wt.KINEMATIC||g.type&wt.KINEMATIC&&_.type&wt.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],l),g.quaternion.vmult(g.shapeOffsets[v],u),u.vadd(g.position,u);const w=g.shapes[v];for(let x=0;x<_.shapes.length;x++){_.quaternion.mult(_.shapeOrientations[x],c),_.quaternion.vmult(_.shapeOffsets[x],f),f.vadd(_.position,f);const L=_.shapes[x];if(!(w.collisionFilterMask&L.collisionFilterGroup&&L.collisionFilterMask&w.collisionFilterGroup)||u.distanceTo(f)>w.boundingSphereRadius+L.boundingSphereRadius)continue;let P=null;w.material&&L.material&&(P=n.getContactMaterial(w.material,L.material)||null),this.currentContactMaterial=P||m||n.defaultContactMaterial;const R=w.type|L.type,I=this[R];if(I){let b=!1;w.type<L.type?b=I.call(this,w,L,u,f,l,c,g,_,w,L,p):b=I.call(this,L,w,f,u,c,l,_,g,w,L,p),b&&p&&(n.shapeOverlapKeeper.set(w.id,L.id),n.bodyOverlapKeeper.set(g.id,_.id))}}}}}sphereSphere(t,e,n,s,r,o,a,l,c,u,f){if(f)return n.distanceSquared(s)<(t.radius+e.radius)**2;const h=this.createContactEquation(a,l,t,e,c,u);s.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(t.radius,h.ri),h.rj.scale(-e.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(s,h.rj),h.rj.vsub(l.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(t,e,n,s,r,o,a,l,c,u,f){const h=this.createContactEquation(a,l,t,e,c,u);if(h.ni.set(0,0,1),o.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(t.radius,h.ri),n.vsub(s,No),h.ni.scale(h.ni.dot(No),Uf),No.vsub(Uf,h.rj),-No.dot(h.ni)<=t.radius){if(f)return!0;const d=h.ri,g=h.rj;d.vadd(n,d),d.vsub(a.position,d),g.vadd(s,g),g.vsub(l.position,g),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(t,e,n,s,r,o,a,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,s,r,o,a,l,t,e,f)}sphereBox(t,e,n,s,r,o,a,l,c,u,f){const h=this.v3pool,d=qw;n.vsub(s,Uo),e.getSideNormals(d,o);const g=t.radius;let _=!1;const m=Yw,p=$w,v=jw;let w=null,x=0,L=0,P=0,R=null;for(let F=0,Y=d.length;F!==Y&&_===!1;F++){const z=Vw;z.copy(d[F]);const ot=z.length();z.normalize();const _t=Uo.dot(z);if(_t<ot+g&&_t>0){const yt=Gw,dt=Ww;yt.copy(d[(F+1)%3]),dt.copy(d[(F+2)%3]);const Zt=yt.length(),rt=dt.length();yt.normalize(),dt.normalize();const gt=Uo.dot(yt),et=Uo.dot(dt);if(gt<Zt&&gt>-Zt&&et<rt&&et>-rt){const $=Math.abs(_t-ot-g);if((R===null||$<R)&&(R=$,L=gt,P=et,w=ot,m.copy(z),p.copy(yt),v.copy(dt),x++,f))return!0}}}if(x){_=!0;const F=this.createContactEquation(a,l,t,e,c,u);m.scale(-g,F.ri),F.ni.copy(m),F.ni.negate(F.ni),m.scale(w,m),p.scale(L,p),m.vadd(p,m),v.scale(P,v),m.vadd(v,F.rj),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),F.rj.vadd(s,F.rj),F.rj.vsub(l.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}let I=h.get();const b=Xw;for(let F=0;F!==2&&!_;F++)for(let Y=0;Y!==2&&!_;Y++)for(let z=0;z!==2&&!_;z++)if(I.set(0,0,0),F?I.vadd(d[0],I):I.vsub(d[0],I),Y?I.vadd(d[1],I):I.vsub(d[1],I),z?I.vadd(d[2],I):I.vsub(d[2],I),s.vadd(I,b),b.vsub(n,b),b.lengthSquared()<g*g){if(f)return!0;_=!0;const ot=this.createContactEquation(a,l,t,e,c,u);ot.ri.copy(b),ot.ri.normalize(),ot.ni.copy(ot.ri),ot.ri.scale(g,ot.ri),ot.rj.copy(I),ot.ri.vadd(n,ot.ri),ot.ri.vsub(a.position,ot.ri),ot.rj.vadd(s,ot.rj),ot.rj.vsub(l.position,ot.rj),this.result.push(ot),this.createFrictionEquationsFromContact(ot,this.frictionResult)}h.release(I),I=null;const S=h.get(),D=h.get(),B=h.get(),N=h.get(),k=h.get(),H=d.length;for(let F=0;F!==H&&!_;F++)for(let Y=0;Y!==H&&!_;Y++)if(F%3!==Y%3){d[Y].cross(d[F],S),S.normalize(),d[F].vadd(d[Y],D),B.copy(n),B.vsub(D,B),B.vsub(s,B);const z=B.dot(S);S.scale(z,N);let ot=0;for(;ot===F%3||ot===Y%3;)ot++;k.copy(n),k.vsub(N,k),k.vsub(D,k),k.vsub(s,k);const _t=Math.abs(z),yt=k.length();if(_t<d[ot].length()&&yt<g){if(f)return!0;_=!0;const dt=this.createContactEquation(a,l,t,e,c,u);D.vadd(N,dt.rj),dt.rj.copy(dt.rj),k.negate(dt.ni),dt.ni.normalize(),dt.ri.copy(dt.rj),dt.ri.vadd(s,dt.ri),dt.ri.vsub(n,dt.ri),dt.ri.normalize(),dt.ri.scale(g,dt.ri),dt.ri.vadd(n,dt.ri),dt.ri.vsub(a.position,dt.ri),dt.rj.vadd(s,dt.rj),dt.rj.vsub(l.position,dt.rj),this.result.push(dt),this.createFrictionEquationsFromContact(dt,this.frictionResult)}}h.release(S,D,B,N,k)}planeBox(t,e,n,s,r,o,a,l,c,u,f){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,s,r,o,a,l,t,e,f)}convexConvex(t,e,n,s,r,o,a,l,c,u,f,h,d){const g=uT;if(!(n.distanceTo(s)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,r,s,o,g,h,d)){const _=[],m=hT;t.clipAgainstHull(n,r,e,s,o,g,-100,100,_);let p=0;for(let v=0;v!==_.length;v++){if(f)return!0;const w=this.createContactEquation(a,l,t,e,c,u),x=w.ri,L=w.rj;g.negate(w.ni),_[v].normal.negate(m),m.scale(_[v].depth,m),_[v].point.vadd(m,x),L.copy(_[v].point),x.vsub(n,x),L.vsub(s,L),x.vadd(n,x),x.vsub(a.position,x),L.vadd(s,L),L.vsub(l.position,L),this.result.push(w),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(w,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,s,r,o,a,l,c,u,f){const h=this.v3pool;n.vsub(s,Kw);const d=e.faceNormals,g=e.faces,_=e.vertices,m=t.radius;let p=!1;for(let v=0;v!==_.length;v++){const w=_[v],x=tT;o.vmult(w,x),s.vadd(x,x);const L=Qw;if(x.vsub(n,L),L.lengthSquared()<m*m){if(f)return!0;p=!0;const P=this.createContactEquation(a,l,t,e,c,u);P.ri.copy(L),P.ri.normalize(),P.ni.copy(P.ri),P.ri.scale(m,P.ri),x.vsub(s,P.rj),P.ri.vadd(n,P.ri),P.ri.vsub(a.position,P.ri),P.rj.vadd(s,P.rj),P.rj.vsub(l.position,P.rj),this.result.push(P),this.createFrictionEquationsFromContact(P,this.frictionResult);return}}for(let v=0,w=g.length;v!==w&&p===!1;v++){const x=d[v],L=g[v],P=eT;o.vmult(x,P);const R=nT;o.vmult(_[L[0]],R),R.vadd(s,R);const I=iT;P.scale(-m,I),n.vadd(I,I);const b=sT;I.vsub(R,b);const S=b.dot(P),D=rT;if(n.vsub(R,D),S<0&&D.dot(P)>0){const B=[];for(let N=0,k=L.length;N!==k;N++){const H=h.get();o.vmult(_[L[N]],H),s.vadd(H,H),B.push(H)}if(Hw(B,P,n)){if(f)return!0;p=!0;const N=this.createContactEquation(a,l,t,e,c,u);P.scale(-m,N.ri),P.negate(N.ni);const k=h.get();P.scale(-S,k);const H=h.get();P.scale(-m,H),n.vsub(s,N.rj),N.rj.vadd(H,N.rj),N.rj.vadd(k,N.rj),N.rj.vadd(s,N.rj),N.rj.vsub(l.position,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),h.release(k),h.release(H),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult);for(let F=0,Y=B.length;F!==Y;F++)h.release(B[F]);return}else for(let N=0;N!==L.length;N++){const k=h.get(),H=h.get();o.vmult(_[L[(N+1)%L.length]],k),o.vmult(_[L[(N+2)%L.length]],H),s.vadd(k,k),s.vadd(H,H);const F=Zw;H.vsub(k,F);const Y=Jw;F.unit(Y);const z=h.get(),ot=h.get();n.vsub(k,ot);const _t=ot.dot(Y);Y.scale(_t,z),z.vadd(k,z);const yt=h.get();if(z.vsub(n,yt),_t>0&&_t*_t<F.lengthSquared()&&yt.lengthSquared()<m*m){if(f)return!0;const dt=this.createContactEquation(a,l,t,e,c,u);z.vsub(s,dt.rj),z.vsub(n,dt.ni),dt.ni.normalize(),dt.ni.scale(m,dt.ri),dt.rj.vadd(s,dt.rj),dt.rj.vsub(l.position,dt.rj),dt.ri.vadd(n,dt.ri),dt.ri.vsub(a.position,dt.ri),this.result.push(dt),this.createFrictionEquationsFromContact(dt,this.frictionResult);for(let Zt=0,rt=B.length;Zt!==rt;Zt++)h.release(B[Zt]);h.release(k),h.release(H),h.release(z),h.release(yt),h.release(ot);return}h.release(k),h.release(H),h.release(z),h.release(yt),h.release(ot)}for(let N=0,k=B.length;N!==k;N++)h.release(B[N])}}}planeConvex(t,e,n,s,r,o,a,l,c,u,f){const h=oT,d=aT;d.set(0,0,1),r.vmult(d,d);let g=0;const _=lT;for(let m=0;m!==e.vertices.length;m++)if(h.copy(e.vertices[m]),o.vmult(h,h),s.vadd(h,h),h.vsub(n,_),d.dot(_)<=0){if(f)return!0;const v=this.createContactEquation(a,l,t,e,c,u),w=cT;d.scale(d.dot(_),w),h.vsub(w,w),w.vsub(n,v.ri),v.ni.copy(d),h.vsub(s,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(s,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,s,r,o,a,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,s,r,o,a,l,t,e,f)}sphereHeightfield(t,e,n,s,r,o,a,l,c,u,f){const h=e.data,d=t.radius,g=e.elementSize,_=ET,m=MT;oe.pointToLocalFrame(s,o,n,m);let p=Math.floor((m.x-d)/g)-1,v=Math.ceil((m.x+d)/g)+1,w=Math.floor((m.y-d)/g)-1,x=Math.ceil((m.y+d)/g)+1;if(v<0||x<0||p>h.length||w>h[0].length)return;p<0&&(p=0),v<0&&(v=0),w<0&&(w=0),x<0&&(x=0),p>=h.length&&(p=h.length-1),v>=h.length&&(v=h.length-1),x>=h[0].length&&(x=h[0].length-1),w>=h[0].length&&(w=h[0].length-1);const L=[];e.getRectMinMax(p,w,v,x,L);const P=L[0],R=L[1];if(m.z-d>R||m.z+d<P)return;const I=this.result;for(let b=p;b<v;b++)for(let S=w;S<x;S++){const D=I.length;let B=!1;if(e.getConvexTrianglePillar(b,S,!1),oe.pointToWorldFrame(s,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(B=this.sphereConvex(t,e.pillarConvex,n,_,r,o,a,l,t,e,f)),f&&B||(e.getConvexTrianglePillar(b,S,!0),oe.pointToWorldFrame(s,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(B=this.sphereConvex(t,e.pillarConvex,n,_,r,o,a,l,t,e,f)),f&&B))return!0;if(I.length-D>2)return}}boxHeightfield(t,e,n,s,r,o,a,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,s,r,o,a,l,t,e,f)}convexHeightfield(t,e,n,s,r,o,a,l,c,u,f){const h=e.data,d=e.elementSize,g=t.boundingSphereRadius,_=yT,m=ST,p=xT;oe.pointToLocalFrame(s,o,n,p);let v=Math.floor((p.x-g)/d)-1,w=Math.ceil((p.x+g)/d)+1,x=Math.floor((p.y-g)/d)-1,L=Math.ceil((p.y+g)/d)+1;if(w<0||L<0||v>h.length||x>h[0].length)return;v<0&&(v=0),w<0&&(w=0),x<0&&(x=0),L<0&&(L=0),v>=h.length&&(v=h.length-1),w>=h.length&&(w=h.length-1),L>=h[0].length&&(L=h[0].length-1),x>=h[0].length&&(x=h[0].length-1);const P=[];e.getRectMinMax(v,x,w,L,P);const R=P[0],I=P[1];if(!(p.z-g>I||p.z+g<R))for(let b=v;b<w;b++)for(let S=x;S<L;S++){let D=!1;if(e.getConvexTrianglePillar(b,S,!1),oe.pointToWorldFrame(s,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(D=this.convexConvex(t,e.pillarConvex,n,_,r,o,a,l,null,null,f,m,null)),f&&D||(e.getConvexTrianglePillar(b,S,!0),oe.pointToWorldFrame(s,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(D=this.convexConvex(t,e.pillarConvex,n,_,r,o,a,l,null,null,f,m,null)),f&&D))return!0}}sphereParticle(t,e,n,s,r,o,a,l,c,u,f){const h=mT;if(h.set(0,0,1),s.vsub(n,h),h.lengthSquared()<=t.radius*t.radius){if(f)return!0;const g=this.createContactEquation(l,a,e,t,c,u);h.normalize(),g.rj.copy(h),g.rj.scale(t.radius,g.rj),g.ni.copy(h),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,s,r,o,a,l,c,u,f){const h=fT;h.set(0,0,1),a.quaternion.vmult(h,h);const d=dT;if(s.vsub(a.position,d),h.dot(d)<=0){if(f)return!0;const _=this.createContactEquation(l,a,e,t,c,u);_.ni.copy(h),_.ni.negate(_.ni),_.ri.set(0,0,0);const m=pT;h.scale(h.dot(s),m),s.vsub(m,m),_.rj.copy(m),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(t,e,n,s,r,o,a,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,s,r,o,a,l,t,e,f)}convexParticle(t,e,n,s,r,o,a,l,c,u,f){let h=-1;const d=_T,g=vT;let _=null;const m=gT;if(m.copy(s),m.vsub(n,m),r.conjugate(Ff),Ff.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let p=0,v=t.faces.length;p!==v;p++){const w=[t.worldVertices[t.faces[p][0]]],x=t.worldFaceNormals[p];s.vsub(w[0],Of);const L=-x.dot(Of);if(_===null||Math.abs(L)<Math.abs(_)){if(f)return!0;_=L,h=p,d.copy(x)}}if(h!==-1){const p=this.createContactEquation(l,a,e,t,c,u);d.scale(_,g),g.vadd(s,g),g.vsub(n,g),p.rj.copy(g),d.negate(p.ni),p.ri.set(0,0,0);const v=p.ri,w=p.rj;v.vadd(s,v),v.vsub(l.position,v),w.vadd(n,w),w.vsub(a.position,w),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,s,r,o,a,l,c,u,f){return this.convexHeightfield(e,t,s,n,o,r,l,a,c,u,f)}particleCylinder(t,e,n,s,r,o,a,l,c,u,f){return this.convexParticle(e,t,s,n,o,r,l,a,c,u,f)}sphereTrimesh(t,e,n,s,r,o,a,l,c,u,f){const h=Aw,d=Cw,g=Rw,_=Pw,m=Lw,p=Iw,v=Fw,w=Tw,x=bw,L=Ow;oe.pointToLocalFrame(s,o,n,m);const P=t.radius;v.lowerBound.set(m.x-P,m.y-P,m.z-P),v.upperBound.set(m.x+P,m.y+P,m.z+P),e.getTrianglesInAABB(v,L);const R=ww,I=t.radius*t.radius;for(let N=0;N<L.length;N++)for(let k=0;k<3;k++)if(e.getVertex(e.indices[L[N]*3+k],R),R.vsub(m,x),x.lengthSquared()<=I){if(w.copy(R),oe.pointToWorldFrame(s,o,w,R),R.vsub(n,x),f)return!0;let H=this.createContactEquation(a,l,t,e,c,u);H.ni.copy(x),H.ni.normalize(),H.ri.copy(H.ni),H.ri.scale(t.radius,H.ri),H.ri.vadd(n,H.ri),H.ri.vsub(a.position,H.ri),H.rj.copy(R),H.rj.vsub(l.position,H.rj),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult)}for(let N=0;N<L.length;N++)for(let k=0;k<3;k++){e.getVertex(e.indices[L[N]*3+k],h),e.getVertex(e.indices[L[N]*3+(k+1)%3],d),d.vsub(h,g),m.vsub(d,p);const H=p.dot(g);m.vsub(h,p);let F=p.dot(g);if(F>0&&H<0&&(m.vsub(h,p),_.copy(g),_.normalize(),F=p.dot(_),_.scale(F,p),p.vadd(h,p),p.distanceTo(m)<t.radius)){if(f)return!0;const z=this.createContactEquation(a,l,t,e,c,u);p.vsub(m,z.ni),z.ni.normalize(),z.ni.scale(t.radius,z.ri),z.ri.vadd(n,z.ri),z.ri.vsub(a.position,z.ri),oe.pointToWorldFrame(s,o,p,p),p.vsub(l.position,z.rj),oe.vectorToWorldFrame(o,z.ni,z.ni),oe.vectorToWorldFrame(o,z.ri,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}}const b=Dw,S=Nw,D=Uw,B=Ew;for(let N=0,k=L.length;N!==k;N++){e.getTriangleVertices(L[N],b,S,D),e.getNormal(L[N],B),m.vsub(b,p);let H=p.dot(B);if(B.scale(H,p),m.vsub(p,p),H=p.distanceTo(m),Ae.pointInTriangle(p,b,S,D)&&H<t.radius){if(f)return!0;let F=this.createContactEquation(a,l,t,e,c,u);p.vsub(m,F.ni),F.ni.normalize(),F.ni.scale(t.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),oe.pointToWorldFrame(s,o,p,p),p.vsub(l.position,F.rj),oe.vectorToWorldFrame(o,F.ni,F.ni),oe.vectorToWorldFrame(o,F.ri,F.ri),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}}L.length=0}planeTrimesh(t,e,n,s,r,o,a,l,c,u,f){const h=new E,d=yw;d.set(0,0,1),r.vmult(d,d);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,h);const _=new E;_.copy(h),oe.pointToWorldFrame(s,o,_,h);const m=Sw;if(h.vsub(n,m),d.dot(m)<=0){if(f)return!0;const v=this.createContactEquation(a,l,t,e,c,u);v.ni.copy(d);const w=Mw;d.scale(m.dot(d),w),h.vsub(w,w),v.ri.copy(w),v.ri.vsub(a.position,v.ri),v.rj.copy(h),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const is=new E,Us=new E,Fs=new E,gw=new E,_w=new E,vw=new Ce,xw=new Ce,yw=new E,Sw=new E,Mw=new E,Ew=new E,bw=new E;new E;const ww=new E,Tw=new E,Aw=new E,Cw=new E,Rw=new E,Pw=new E,Lw=new E,Iw=new E,Dw=new E,Nw=new E,Uw=new E,Fw=new dn,Ow=[],No=new E,Uf=new E,Bw=new E,zw=new E,kw=new E;function Hw(i,t,e){let n=null;const s=i.length;for(let r=0;r!==s;r++){const o=i[r],a=Bw;i[(r+1)%s].vsub(o,a);const l=zw;a.cross(t,l);const c=kw;e.vsub(o,c);const u=l.dot(c);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}const Uo=new E,Vw=new E,Gw=new E,Ww=new E,qw=[new E,new E,new E,new E,new E,new E],Xw=new E,Yw=new E,$w=new E,jw=new E,Kw=new E,Zw=new E,Jw=new E,Qw=new E,tT=new E,eT=new E,nT=new E,iT=new E,sT=new E,rT=new E;new E;new E;const oT=new E,aT=new E,lT=new E,cT=new E,uT=new E,hT=new E,fT=new E,dT=new E,pT=new E,mT=new E,Ff=new Ce,gT=new E;new E;const _T=new E,Of=new E,vT=new E,xT=new E,yT=new E,ST=[0],MT=new E,ET=new E;class Bf{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),s=this.current;let r=0;for(;n>s[r];)r++;if(n!==s[r]){for(let o=s.length-1;o>=r;o--)s[o+1]=s[o];s[r]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,s=this.previous,r=n.length,o=s.length;let a=0;for(let l=0;l<r;l++){let c=!1;const u=n[l];for(;u>s[a];)a++;c=u===s[a],c||zf(t,u)}a=0;for(let l=0;l<o;l++){let c=!1;const u=s[l];for(;u>n[a];)a++;c=n[a]===u,c||zf(e,u)}}}function zf(i,t){i.push((t&4294901760)>>16,t&65535)}const Rl=(i,t)=>i<t?`${i}-${t}`:`${t}-${i}`;class bT{constructor(){this.data={keys:[]}}get(t,e){const n=Rl(t,e);return this.data[n]}set(t,e,n){const s=Rl(t,e);this.get(t,e)||this.data.keys.push(s),this.data[s]=n}delete(t,e){const n=Rl(t,e),s=this.data.keys.indexOf(n);s!==-1&&this.data.keys.splice(s,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class wT extends Kp{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new E,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new E,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Ib,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new cw,this.constraints=[],this.narrowphase=new mw(this),this.collisionMatrix=new bf,this.collisionMatrixPrevious=new bf,this.bodyOverlapKeeper=new Bf,this.shapeOverlapKeeper=new Bf,this.contactmaterials=[],this.contactMaterialTable=new bT,this.defaultMaterial=new ir("default"),this.defaultContactMaterial=new nr(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof aa?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,s){return n===void 0&&(n={}),n.mode=Ae.ALL,n.from=t,n.to=e,n.callback=s,Pl.intersectWorld(this,n)}raycastAny(t,e,n,s){return n===void 0&&(n={}),n.mode=Ae.ANY,n.from=t,n.to=e,n.result=s,Pl.intersectWorld(this,n)}raycastClosest(t,e,n,s){return n===void 0&&(n={}),n.mode=Ae.CLOSEST,n.from=t,n.to=e,n.result=s,Pl.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof wt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,s=n.indexOf(t);if(s!==-1){n.splice(s,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const s=e[n].shapes;for(let r=0;r<s.length;r++){const o=s[r];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=Le.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const s=n-this.lastCallTime;this.step(t,s,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const s=Le.now();let r=0;for(;this.accumulator>=t&&r<n&&(this.internalStep(t),this.accumulator-=t,r++,!(Le.now()-s>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=PT,s=LT,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,u=this.profile,f=wt.DYNAMIC;let h=-1/0;const d=this.constraints,g=RT;l.length();const _=l.x,m=l.y,p=l.z;let v=0;for(c&&(h=Le.now()),v=0;v!==r;v++){const N=o[v];if(N.type===f){const k=N.force,H=N.mass;k.x+=H*_,k.y+=H*m,k.z+=H*p}}for(let N=0,k=this.subsystems.length;N!==k;N++)this.subsystems[N].update();c&&(h=Le.now()),n.length=0,s.length=0,this.broadphase.collisionPairs(this,n,s),c&&(u.broadphase=Le.now()-h);let w=d.length;for(v=0;v!==w;v++){const N=d[v];if(!N.collideConnected)for(let k=n.length-1;k>=0;k-=1)(N.bodyA===n[k]&&N.bodyB===s[k]||N.bodyB===n[k]&&N.bodyA===s[k])&&(n.splice(k,1),s.splice(k,1))}this.collisionMatrixTick(),c&&(h=Le.now());const x=CT,L=e.length;for(v=0;v!==L;v++)x.push(e[v]);e.length=0;const P=this.frictionEquations.length;for(v=0;v!==P;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,s,this,e,x,this.frictionEquations,g),c&&(u.narrowphase=Le.now()-h),c&&(h=Le.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const R=e.length;for(let N=0;N!==R;N++){const k=e[N],H=k.bi,F=k.bj,Y=k.si,z=k.sj;let ot;if(H.material&&F.material?ot=this.getContactMaterial(H.material,F.material)||this.defaultContactMaterial:ot=this.defaultContactMaterial,ot.friction,H.material&&F.material&&(H.material.friction>=0&&F.material.friction>=0&&H.material.friction*F.material.friction,H.material.restitution>=0&&F.material.restitution>=0&&(k.restitution=H.material.restitution*F.material.restitution)),a.addEquation(k),H.allowSleep&&H.type===wt.DYNAMIC&&H.sleepState===wt.SLEEPING&&F.sleepState===wt.AWAKE&&F.type!==wt.STATIC){const _t=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),yt=F.sleepSpeedLimit**2;_t>=yt*2&&(H.wakeUpAfterNarrowphase=!0)}if(F.allowSleep&&F.type===wt.DYNAMIC&&F.sleepState===wt.SLEEPING&&H.sleepState===wt.AWAKE&&H.type!==wt.STATIC){const _t=H.velocity.lengthSquared()+H.angularVelocity.lengthSquared(),yt=H.sleepSpeedLimit**2;_t>=yt*2&&(F.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(H,F,!0),this.collisionMatrixPrevious.get(H,F)||(Er.body=F,Er.contact=k,H.dispatchEvent(Er),Er.body=H,F.dispatchEvent(Er)),this.bodyOverlapKeeper.set(H.id,F.id),this.shapeOverlapKeeper.set(Y.id,z.id)}for(this.emitContactEvents(),c&&(u.makeContactConstraints=Le.now()-h,h=Le.now()),v=0;v!==r;v++){const N=o[v];N.wakeUpAfterNarrowphase&&(N.wakeUp(),N.wakeUpAfterNarrowphase=!1)}for(w=d.length,v=0;v!==w;v++){const N=d[v];N.update();for(let k=0,H=N.equations.length;k!==H;k++){const F=N.equations[k];a.addEquation(F)}}a.solve(t,this),c&&(u.solve=Le.now()-h),a.removeAllEquations();const I=Math.pow;for(v=0;v!==r;v++){const N=o[v];if(N.type&f){const k=I(1-N.linearDamping,t),H=N.velocity;H.scale(k,H);const F=N.angularVelocity;if(F){const Y=I(1-N.angularDamping,t);F.scale(Y,F)}}}this.dispatchEvent(AT),c&&(h=Le.now());const S=this.stepnumber%(this.quatNormalizeSkip+1)===0,D=this.quatNormalizeFast;for(v=0;v!==r;v++)o[v].integrate(t,S,D);this.clearForces(),this.broadphase.dirty=!0,c&&(u.integrate=Le.now()-h),this.stepnumber+=1,this.dispatchEvent(TT);let B=!0;if(this.allowSleep)for(B=!1,v=0;v!==r;v++){const N=o[v];N.sleepTick(this.time),N.sleepState!==wt.SLEEPING&&(B=!0)}this.hasActiveBodies=B}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(ri,oi),t){for(let r=0,o=ri.length;r<o;r+=2)br.bodyA=this.getBodyById(ri[r]),br.bodyB=this.getBodyById(ri[r+1]),this.dispatchEvent(br);br.bodyA=br.bodyB=null}if(e){for(let r=0,o=oi.length;r<o;r+=2)wr.bodyA=this.getBodyById(oi[r]),wr.bodyB=this.getBodyById(oi[r+1]),this.dispatchEvent(wr);wr.bodyA=wr.bodyB=null}ri.length=oi.length=0;const n=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((n||s)&&this.shapeOverlapKeeper.getDiff(ri,oi),n){for(let r=0,o=ri.length;r<o;r+=2){const a=this.getShapeById(ri[r]),l=this.getShapeById(ri[r+1]);ai.shapeA=a,ai.shapeB=l,a&&(ai.bodyA=a.body),l&&(ai.bodyB=l.body),this.dispatchEvent(ai)}ai.bodyA=ai.bodyB=ai.shapeA=ai.shapeB=null}if(s){for(let r=0,o=oi.length;r<o;r+=2){const a=this.getShapeById(oi[r]),l=this.getShapeById(oi[r+1]);li.shapeA=a,li.shapeB=l,a&&(li.bodyA=a.body),l&&(li.bodyB=l.body),this.dispatchEvent(li)}li.bodyA=li.bodyB=li.shapeA=li.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const s=t[n];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}}new dn;const Pl=new Ae,Le=globalThis.performance||{};if(!Le.now){let i=Date.now();Le.timing&&Le.timing.navigationStart&&(i=Le.timing.navigationStart),Le.now=()=>Date.now()-i}new E;const TT={type:"postStep"},AT={type:"preStep"},Er={type:wt.COLLIDE_EVENT_NAME,body:null,contact:null},CT=[],RT=[],PT=[],LT=[],ri=[],oi=[],br={type:"beginContact",bodyA:null,bodyB:null},wr={type:"endContact",bodyA:null,bodyB:null},ai={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},li={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Fo=.5,IT=sr({__name:"GameScene",setup(i){const t=_s(),e=Ue(null);let n,s,r,o,a;const l=[],c=[],u=[0,0,0,0,0];let f=!1,h=0,d,g=!1,_,m,p;function v(et){const ft=document.createElement("canvas");ft.width=256,ft.height=256;const lt=ft.getContext("2d");lt.fillStyle="#f8f8f8",lt.fillRect(0,0,256,256);const St=256*.07,Lt={1:[[.5,.5]],2:[[.28,.28],[.72,.72]],3:[[.28,.28],[.5,.5],[.72,.72]],4:[[.28,.28],[.72,.28],[.28,.72],[.72,.72]],5:[[.28,.28],[.72,.28],[.5,.5],[.28,.72],[.72,.72]],6:[[.28,.25],[.72,.25],[.28,.5],[.72,.5],[.28,.75],[.72,.75]]};lt.fillStyle="#1a1a2e";for(const[U,A]of Lt[et])lt.beginPath(),lt.arc(U*256,A*256,St,0,Math.PI*2),lt.fill();const C=new tb(ft);return C.needsUpdate=!0,C}const w=[3,4,1,6,2,5];function x(){return w.map(et=>{const $=v(et);return new yr({map:$,roughness:.3,metalness:0})})}const L={1:new q(0,1,0),6:new q(0,-1,0),2:new q(0,0,1),5:new q(0,0,-1),3:new q(1,0,0),4:new q(-1,0,0)};function P(et){const $=new q(0,1,0);let ft=-1/0,lt=1;for(const[St,Lt]of Object.entries(L)){const U=Lt.clone().applyQuaternion(et).dot($);U>ft&&(ft=U,lt=parseInt(St))}return lt}function R(et){const $=new lr;switch(et){case 1:$.setFromEuler(new We(0,0,0));break;case 6:$.setFromEuler(new We(Math.PI,0,0));break;case 2:$.setFromEuler(new We(Math.PI/2,0,0));break;case 5:$.setFromEuler(new We(-Math.PI/2,0,0));break;case 3:$.setFromEuler(new We(0,0,-Math.PI/2));break;case 4:$.setFromEuler(new We(0,0,Math.PI/2));break}return $}function I(){if(!e.value)return;n=new JE({canvas:e.value,antialias:!0,alpha:!1}),n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.shadowMap.enabled=!0,n.shadowMap.type=mp,n.toneMapping=_p,n.toneMappingExposure=1.2,Zt(),s=new QE,s.background=new ee("#0d0d14"),s.fog=new gu("#0d0d14",15,30),r=new cn(45,dt(),.1,100),r.position.set(0,8,8),r.lookAt(0,0,0);const et=new rb(16777215,.4);s.add(et);const $=new sb(16777215,1);$.position.set(5,10,5),$.castShadow=!0,$.shadow.mapSize.width=2048,$.shadow.mapSize.height=2048,$.shadow.camera.near=.5,$.shadow.camera.far=30,$.shadow.camera.left=-8,$.shadow.camera.right=8,$.shadow.camera.top=8,$.shadow.camera.bottom=-8,s.add($);const ft=new nb(16766617,.6,20);ft.position.set(0,6,0),s.add(ft),o=new wT({gravity:new E(0,-15,0)}),o.broadphase=new ks(o),o.solver.iterations=10,o.allowSleep=!0,m=new ir("dice"),p=new ir("table"),o.addContactMaterial(new nr(m,p,{friction:.4,restitution:.3})),o.addContactMaterial(new nr(m,m,{friction:.3,restitution:.4})),b(),S(),B(),N()}function b(){const et=new gi(8,.3,6),$=new yr({color:"#1a5c2a",roughness:.8,metalness:0}),ft=new Fe(et,$);ft.position.y=-.15,ft.receiveShadow=!0,s.add(ft);const lt=new yr({color:"#4a3020",roughness:.6,metalness:.1}),St=new gi(8.4,.4,.2),Lt=new gi(.2,.4,6.4),C=new Fe(St,lt);C.position.set(0,0,3.1),C.castShadow=!0,s.add(C);const U=new Fe(St,lt);U.position.set(0,0,-3.1),U.castShadow=!0,s.add(U);const A=new Fe(Lt,lt);A.position.set(-4.1,0,0),A.castShadow=!0,s.add(A);const at=new Fe(Lt,lt);at.position.set(4.1,0,0),at.castShadow=!0,s.add(at),_=new wt({type:wt.STATIC,material:p}),_.addShape(new fs(new E(4,.15,3)),new E(0,-.15,0)),o.addBody(_)}function S(){const et=new fs(new E(4,2,.1)),$=p,ft=[new E(0,1,3),new E(0,1,-3)],lt=new fs(new E(.1,2,3)),St=[new E(4,1,0),new E(-4,1,0)];for(const Lt of ft){const C=new wt({type:wt.STATIC,material:$});C.addShape(et),C.position.copy(Lt),o.addBody(C)}for(const Lt of St){const C=new wt({type:wt.STATIC,material:$});C.addShape(lt),C.position.copy(Lt),o.addBody(C)}}const D=Fo/2;function B(){for(let et=0;et<5;et++){const $=new gi(Fo,Fo,Fo),ft=x(),lt=new Fe($,ft);lt.castShadow=!0,lt.receiveShadow=!0,lt.position.set(-10,-10,-10),lt.visible=!1,s.add(lt),l.push(lt);const St=new wt({mass:.3,material:m,shape:new fs(new E(D,D,D)),allowSleep:!0,sleepSpeedLimit:.1,sleepTimeLimit:1});St.position.set(-10,-10,-10),o.addBody(St),c.push(St)}}function N(){d=new Pr;const et=1,$=1.8,ft=.08,lt=new oa(et,et*.9,$,32,1,!0),St=new yr({color:"#8B4513",roughness:.7,metalness:.1,side:Vn}),Lt=new Fe(lt,St);Lt.castShadow=!0,d.add(Lt);const C=new _u(et*.9,32),U=new Fe(C,St);U.rotation.x=-Math.PI/2,U.position.y=-$/2,d.add(U);const A=new oa(et-ft,et*.9-ft,$-.05,32,1,!0),at=new yr({color:"#3a1f0d",roughness:.9,side:Ke}),Q=new Fe(A,at);d.add(Q),d.position.set(3,$/2+.01,0),d.visible=!1,s.add(d)}async function k(et){if(g)return;g=!0,f=!1,h=performance.now();for(let lt=0;lt<5;lt++)u[lt]=et[lt];const $=[],ft=[];for(let lt=0;lt<5;lt++)t.turnState.kept[lt]?$.push(lt):ft.push(lt);$.forEach((lt,St)=>{const Lt=-2+St*.8,C=l[lt],U=c[lt];U.type=wt.STATIC,U.position.set(Lt,D+.01,2),U.velocity.setZero(),U.angularVelocity.setZero(),C.visible=!0,C.position.set(Lt,D+.01,2);const A=R(et[lt]);C.quaternion.copy(A),U.quaternion.set(A.x,A.y,A.z,A.w)}),d.visible=!0,d.position.set(0,1.5,-1),d.rotation.set(0,0,0),await H(),await F();for(let lt=0;lt<ft.length;lt++){const St=ft[lt],Lt=c[St],C=l[St];Lt.type=wt.DYNAMIC,Lt.wakeUp();const U=(Math.random()-.5)*1.5,A=(Math.random()-.5)*.5;Lt.position.set(U,3+Math.random()*1,-.5+A),Lt.quaternion.setFromEuler(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),Lt.velocity.set((Math.random()-.5)*5,-2+Math.random()*2,(Math.random()-.5)*4),Lt.angularVelocity.set((Math.random()-.5)*20,(Math.random()-.5)*20,(Math.random()-.5)*20),C.visible=!0}await Y(),g=!1}function H(){return new Promise(et=>{const $=performance.now(),ft=500;function lt(){const St=performance.now()-$,Lt=Math.min(St/ft,1),C=Math.sin(Lt*Math.PI*6)*.15*(1-Lt);d.rotation.z=C,d.position.y=1.5+Math.abs(Math.sin(Lt*Math.PI*3))*.2,Lt<1?requestAnimationFrame(lt):et()}lt()})}function F(){return new Promise(et=>{const $=performance.now(),ft=400;function lt(){const St=performance.now()-$,Lt=Math.min(St/ft,1),C=Lt*Lt*(3-2*Lt);d.rotation.x=-C*1.8,d.position.y=1.5+C*2,d.position.z=-1+C*1,Lt<1?requestAnimationFrame(lt):et()}lt()})}function Y(){return new Promise(et=>{const $=performance.now(),ft=300;function lt(){const St=performance.now()-$,Lt=Math.min(St/ft,1);d.position.x=5*Lt,d.position.y=3.5-Lt*2,Lt<1?requestAnimationFrame(lt):(d.visible=!1,et())}lt()})}function z(){for(let $=0;$<5;$++){if(t.turnState.kept[$])continue;const ft=c[$];if(ft.type===wt.STATIC)continue;const lt=ft.velocity,St=ft.angularVelocity;if(lt.length()>.05||St.length()>.05)return!1}return!0}function ot(){if(!f){f=!0;for(let et=0;et<5;et++){if(t.turnState.kept[et])continue;const $=u[et];if($===0)continue;const ft=l[et],lt=c[et];if(P(ft.quaternion)!==$){let Lt=function(){const Q=performance.now()-A,tt=Math.min(Q/at,1),st=tt*tt*(3-2*tt);ft.quaternion.slerpQuaternions(U,C,st),lt.quaternion.set(ft.quaternion.x,ft.quaternion.y,ft.quaternion.z,ft.quaternion.w),tt<1&&requestAnimationFrame(Lt)};lt.type=wt.STATIC,lt.velocity.setZero(),lt.angularVelocity.setZero();const C=R($),U=ft.quaternion.clone(),A=performance.now(),at=250;Lt()}else lt.type=wt.STATIC,lt.velocity.setZero(),lt.angularVelocity.setZero()}setTimeout(()=>{t.onPhysicsComplete()},300)}}function _t(){for(let et=0;et<5;et++){const $=l[et];if(!$.visible)continue;const ft=$.material,lt=t.turnState.kept[et];ft.forEach(St=>{St.emissive=lt?new ee("#2244aa"):new ee("#000000"),St.emissiveIntensity=lt?.3:0})}}function yt(){a=requestAnimationFrame(yt),o&&o.step(1/60);for(let et=0;et<5;et++)l[et].visible&&c[et].type===wt.DYNAMIC&&(l[et].position.copy(c[et].position),l[et].quaternion.copy(c[et].quaternion));if(t.isRolling&&!g&&!f){const et=performance.now()-h;et>1500&&z()&&ot(),et>5e3&&!f&&ot()}if(_t(),r){const et=performance.now()*1e-4;r.position.x=Math.sin(et)*.1}n&&s&&r&&n.render(s,r)}function dt(){return e.value?e.value.clientWidth/e.value.clientHeight:16/9}function Zt(){if(!e.value||!n)return;const et=e.value.clientWidth,$=e.value.clientHeight;n.setSize(et,$,!1),r&&(r.aspect=et/$,r.updateProjectionMatrix())}let rt=null;function gt(et){if(!e.value||!r||!t.isMyTurn||t.turnState.rollCount===0||t.turnState.rollCount>=3||t.isRolling)return;const $=e.value.getBoundingClientRect(),ft=new ne((et.clientX-$.left)/$.width*2-1,-((et.clientY-$.top)/$.height)*2+1),lt=new ob;lt.setFromCamera(ft,r);const St=lt.intersectObjects(l);if(St.length>0){const Lt=St[0].object,C=l.indexOf(Lt);C>=0&&t.toggleKeep(C)}}return Ws(()=>t.isRolling,et=>{et&&t.turnState.dice.some($=>$>0)&&k(t.turnState.dice)}),Ws(()=>t.turnState.rollCount,et=>{et===0&&l.forEach($=>{$.visible=!1})}),xa(()=>{I(),yt(),rt=new ResizeObserver(()=>{Zt()}),e.value&&rt.observe(e.value.parentElement)}),wd(()=>{cancelAnimationFrame(a),rt==null||rt.disconnect(),n==null||n.dispose()}),(et,$)=>(Dt(),Ot("canvas",{ref_key:"canvasRef",ref:e,class:"game-canvas",onClick:gt},null,512))}}),DT=Kr(IT,[["__scopeId","data-v-0a855143"]]),la=["ones","twos","threes","fours","fives","sixes"],Mu=["choice","fourOfAKind","fullHouse","smallStraight","largeStraight","yacht"];[...la,...Mu];const ca={ones:"Ones (1)",twos:"Twos (2)",threes:"Threes (3)",fours:"Fours (4)",fives:"Fives (5)",sixes:"Sixes (6)",choice:"Choice",fourOfAKind:"Four of a Kind",fullHouse:"Full House",smallStraight:"Small Straight",largeStraight:"Large Straight",yacht:"Yacht!"},NT={class:"score-card"},UT={class:"section"},FT=["onClick"],OT={class:"cat-label"},BT={class:"cat-score"},zT={key:1,class:"preview"},kT={class:"score-row subtotal"},HT={class:"cat-label"},VT={key:0,class:"bonus-achieved"},GT={class:"cat-score"},WT={class:"score-row bonus"},qT={class:"cat-score"},XT={class:"section"},YT=["onClick"],$T={class:"cat-label"},jT={class:"cat-score"},KT={key:1,class:"preview"},ZT={class:"total-row"},JT={class:"total-score"},QT=sr({__name:"ScoreCard",setup(i){const t=_s(),e=Ta(),n=nn(()=>{let a=0;for(const l of la){const c=t.myScores[l];c!==null&&(a+=c)}return a});function s(a){return t.canSelectScore&&t.myScores[a]===null}function r(a){return t.myScores[a]!==null||!t.canSelectScore?null:t.possibleScores[a]??null}function o(a){s(a)&&e.selectCategory(a)}return(a,l)=>(Dt(),Ot("div",NT,[l[5]||(l[5]=mt("h3",{class:"card-title"},"MY SCORE",-1)),mt("div",UT,[l[2]||(l[2]=mt("div",{class:"section-header"},"UPPER",-1)),(Dt(!0),Ot(he,null,Ve(kt(la),c=>(Dt(),Ot("div",{key:c,class:_i(["score-row",{filled:kt(t).myScores[c]!==null,selectable:s(c),"has-preview":r(c)!==null}]),onClick:u=>o(c)},[mt("span",OT,ae(kt(ca)[c]),1),mt("span",BT,[kt(t).myScores[c]!==null?(Dt(),Ot(he,{key:0},[Tn(ae(kt(t).myScores[c]),1)],64)):r(c)!==null?(Dt(),Ot("span",zT,ae(r(c)),1)):(Dt(),Ot(he,{key:2},[Tn(" - ")],64))])],10,FT))),128)),mt("div",kT,[mt("span",HT,[l[0]||(l[0]=Tn(" Subtotal ",-1)),n.value>=63?(Dt(),Ot("span",VT,"+35")):qn("",!0)]),mt("span",GT,ae(n.value)+" / 63",1)]),mt("div",WT,[l[1]||(l[1]=mt("span",{class:"cat-label"},"Bonus",-1)),mt("span",qT,ae(kt(t).myBonus),1)])]),mt("div",XT,[l[3]||(l[3]=mt("div",{class:"section-header"},"LOWER",-1)),(Dt(!0),Ot(he,null,Ve(kt(Mu),c=>(Dt(),Ot("div",{key:c,class:_i(["score-row",{filled:kt(t).myScores[c]!==null,selectable:s(c),"has-preview":r(c)!==null,yacht:c==="yacht"&&r(c)===50}]),onClick:u=>o(c)},[mt("span",$T,ae(kt(ca)[c]),1),mt("span",jT,[kt(t).myScores[c]!==null?(Dt(),Ot(he,{key:0},[Tn(ae(kt(t).myScores[c]),1)],64)):r(c)!==null?(Dt(),Ot("span",KT,ae(r(c)),1)):(Dt(),Ot(he,{key:2},[Tn(" - ")],64))])],10,YT))),128))]),mt("div",ZT,[l[4]||(l[4]=mt("span",null,"TOTAL",-1)),mt("span",JT,ae(kt(t).myTotal),1)])]))}}),tA=Kr(QT,[["__scopeId","data-v-8814a682"]]),eA={class:"game-view"},nA={class:"top-bar"},iA={class:"turn-info"},sA={class:"turn-text"},rA={class:"round-info"},oA={class:"value"},aA={class:"roll-info"},lA={class:"value"},cA={class:"players-mini"},uA=["title"],hA={class:"main-area"},fA={class:"scene-container"},dA={class:"side-panel"},pA={class:"bottom-bar"},mA={key:0,class:"dice-selector"},gA=["onClick"],_A={class:"dice-face"},vA={key:0,class:"kept-label"},xA={class:"roll-section"},yA=["disabled"],SA={class:"player-bar"},MA={class:"chip-name"},EA=sr({__name:"GameView",setup(i){const t=_s(),e=Ta(),n=nn(()=>{const l=t.currentPlayer;return l?`${l.id===t.mySocketId?"나":l.name}의 차례`:""}),s=nn(()=>t.isRolling?"굴리는 중...":t.turnState.rollCount===0?"주사위 굴리기":t.turnState.rollCount>=3?"점수를 선택하세요":`다시 굴리기 (${t.turnState.rollCount}/3)`);function r(){t.turnState.rollCount>0&&e.setKept(t.turnState.kept),setTimeout(()=>{e.rollDice()},t.turnState.rollCount>0?50:0)}function o(l){!t.isMyTurn||t.turnState.rollCount===0||t.turnState.rollCount>=3||t.isRolling||(t.toggleKeep(l),e.setKept(t.turnState.kept))}const a=nn(()=>{const l=["","⚀","⚁","⚂","⚃","⚄","⚅"];return t.turnState.dice.map((c,u)=>({value:c,face:c>0?l[c]:"?",kept:t.turnState.kept[u]}))});return(l,c)=>{var u;return Dt(),Ot("div",eA,[mt("div",nA,[mt("div",iA,[mt("span",{class:"turn-dot",style:ln({background:((u=kt(t).currentPlayer)==null?void 0:u.color)||"#666"})},null,4),mt("span",sA,ae(n.value),1)]),mt("div",rA,[c[0]||(c[0]=mt("span",{class:"label"},"라운드",-1)),mt("span",oA,ae(kt(t).currentRound)+" / 12",1)]),mt("div",aA,[c[1]||(c[1]=mt("span",{class:"label"},"굴림",-1)),mt("span",lA,ae(kt(t).turnState.rollCount)+" / 3",1)]),mt("div",cA,[(Dt(!0),Ot(he,null,Ve(kt(t).players,f=>{var h;return Dt(),Ot("span",{key:f.id,class:_i(["mini-dot",{active:f.id===((h=kt(t).currentPlayer)==null?void 0:h.id)}]),style:ln({background:f.color}),title:f.name},null,14,uA)}),128))])]),mt("div",hA,[mt("div",fA,[Ln(DT)]),mt("div",dA,[Ln(tA)])]),mt("div",pA,[kt(t).turnState.rollCount>0?(Dt(),Ot("div",mA,[(Dt(!0),Ot(he,null,Ve(a.value,(f,h)=>(Dt(),Ot("div",{key:h,class:_i(["dice-btn",{kept:f.kept,clickable:kt(t).isMyTurn&&kt(t).turnState.rollCount>0&&kt(t).turnState.rollCount<3&&!kt(t).isRolling}]),onClick:d=>o(h)},[mt("span",_A,ae(f.face),1),f.kept?(Dt(),Ot("span",vA,"KEEP")):qn("",!0)],10,gA))),128))])):qn("",!0),mt("div",xA,[mt("button",{class:"btn btn-primary btn-lg roll-btn",disabled:!kt(t).canRoll,onClick:r},ae(s.value),9,yA)]),mt("div",SA,[(Dt(!0),Ot(he,null,Ve(kt(t).players,f=>{var h;return Dt(),Ot("div",{key:f.id,class:_i(["player-chip",{"is-current":f.id===((h=kt(t).currentPlayer)==null?void 0:h.id)}])},[mt("span",{class:"chip-dot",style:ln({background:f.color})},null,4),mt("span",MA,[Tn(ae(f.name)+" ",1),f.id===kt(t).mySocketId?(Dt(),Ot(he,{key:0},[Tn("(나)")],64)):qn("",!0)])],2)}),128))])])])}}}),bA=Kr(EA,[["__scopeId","data-v-696c1bc1"]]),wA={class:"result-view"},TA={key:0,class:"confetti-container"},AA={class:"result-container"},CA={key:0,class:"winner-card"},RA={class:"winner-score"},PA={class:"rankings-table"},LA={class:"rank-player"},IA={class:"rank-name"},DA={key:0,class:"me-tag"},NA={class:"rank-total"},UA={class:"detail-table-wrap"},FA={class:"detail-table"},OA={class:"section-label"},BA=["colspan"],zA={class:"bonus-row"},kA={class:"section-label"},HA=["colspan"],VA={class:"total-row"},GA={class:"result-actions"},WA={key:1,class:"wait-text"},qA=sr({__name:"ResultView",setup(i){const t=_s(),e=Ta(),n=Ue(!1),s=nn(()=>t.rankings[0]);function r(){e.restartGame()}xa(()=>{n.value=!0,setTimeout(()=>{n.value=!1},5e3)});function o(l){return l===1?"1st":l===2?"2nd":l===3?"3rd":`${l}th`}function a(l){return l===1?"var(--gold)":l===2?"var(--silver)":l===3?"var(--bronze)":"var(--text-muted)"}return(l,c)=>(Dt(),Ot("div",wA,[n.value?(Dt(),Ot("div",TA,[(Dt(),Ot(he,null,Ve(60,u=>mt("div",{key:u,class:"confetti-piece",style:ln({left:Math.random()*100+"%",animationDelay:Math.random()*3+"s",animationDuration:2+Math.random()*3+"s",background:["#ef4444","#3b82f6","#22c55e","#eab308","#a855f7","#ec4899"][u%6]})},null,4)),64))])):qn("",!0),mt("div",AA,[c[4]||(c[4]=mt("h1",{class:"result-title"},"GAME OVER",-1)),s.value?(Dt(),Ot("div",CA,[c[0]||(c[0]=mt("div",{class:"crown"},"♔",-1)),mt("div",{class:"winner-name",style:ln({color:s.value.color})},ae(s.value.name),5),mt("div",RA,ae(s.value.totalScore)+" pts",1)])):qn("",!0),mt("div",PA,[(Dt(!0),Ot(he,null,Ve(kt(t).rankings,u=>(Dt(),Ot("div",{key:u.playerId,class:_i(["rank-row",{"is-me":u.playerId===kt(t).mySocketId,"is-winner":u.rank===1}])},[mt("div",{class:"rank-medal",style:ln({color:a(u.rank)})},ae(o(u.rank)),5),mt("div",LA,[mt("span",{class:"rank-dot",style:ln({background:u.color})},null,4),mt("span",IA,[Tn(ae(u.name)+" ",1),u.playerId===kt(t).mySocketId?(Dt(),Ot("span",DA,"(나)")):qn("",!0)])]),mt("div",NA,ae(u.totalScore),1)],2))),128))]),mt("div",UA,[mt("table",FA,[mt("thead",null,[mt("tr",null,[c[1]||(c[1]=mt("th",null,"카테고리",-1)),(Dt(!0),Ot(he,null,Ve(kt(t).rankings,u=>(Dt(),Ot("th",{key:u.playerId,style:ln({color:u.color})},ae(u.name),5))),128))])]),mt("tbody",null,[mt("tr",OA,[mt("td",{colspan:kt(t).rankings.length+1},"Upper Section",8,BA)]),(Dt(!0),Ot(he,null,Ve(kt(la),u=>(Dt(),Ot("tr",{key:u},[mt("td",null,ae(kt(ca)[u]),1),(Dt(!0),Ot(he,null,Ve(kt(t).rankings,f=>(Dt(),Ot("td",{key:f.playerId},ae(f.scores[u]??"-"),1))),128))]))),128)),mt("tr",zA,[c[2]||(c[2]=mt("td",null,"Bonus (+35)",-1)),(Dt(!0),Ot(he,null,Ve(kt(t).rankings,u=>(Dt(),Ot("td",{key:u.playerId},ae(u.upperBonus),1))),128))]),mt("tr",kA,[mt("td",{colspan:kt(t).rankings.length+1},"Lower Section",8,HA)]),(Dt(!0),Ot(he,null,Ve(kt(Mu),u=>(Dt(),Ot("tr",{key:u},[mt("td",null,ae(kt(ca)[u]),1),(Dt(!0),Ot(he,null,Ve(kt(t).rankings,f=>(Dt(),Ot("td",{key:f.playerId},ae(f.scores[u]??"-"),1))),128))]))),128)),mt("tr",VA,[c[3]||(c[3]=mt("td",null,"TOTAL",-1)),(Dt(!0),Ot(he,null,Ve(kt(t).rankings,u=>(Dt(),Ot("td",{key:u.playerId,style:ln({color:u.color})},[mt("strong",null,ae(u.totalScore),1)],4))),128))])])])]),mt("div",GA,[kt(t).isHost?(Dt(),Ot("button",{key:0,class:"btn btn-primary btn-lg",onClick:r}," 다시 하기 ")):(Dt(),Ot("p",WA,"호스트가 다시 시작할 때까지 대기 중..."))])])]))}}),XA=Kr(qA,[["__scopeId","data-v-41e99f8f"]]),YA={class:"app"},$A=sr({__name:"App",setup(i){const t=_s();return(e,n)=>(Dt(),Ot("div",YA,[kt(t).phase==="waiting"?(Dt(),Bo(Qv,{key:0})):kt(t).phase==="playing"?(Dt(),Bo(bA,{key:1})):kt(t).phase==="finished"?(Dt(),Bo(XA,{key:2})):qn("",!0)]))}}),rm=L_($A);rm.use(N_());rm.mount("#app");
