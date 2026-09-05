(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const El="169",Rp=0,uu=1,Cp=2,Pd=1,Ld=2,Hn=3,di=0,Fe=1,he=2,ci=0,mr=1,mc=2,hu=3,du=4,Pp=5,Ci=100,Lp=101,Ip=102,Dp=103,Up=104,Np=200,Fp=201,Op=202,Bp=203,gc=204,_c=205,zp=206,kp=207,Gp=208,Hp=209,Vp=210,Wp=211,Xp=212,Yp=213,qp=214,xc=0,vc=1,Mc=2,Sr=3,Sc=4,yc=5,Ec=6,bc=7,Id=0,$p=1,Kp=2,li=0,jp=1,Zp=2,Jp=3,Dd=4,Qp=5,tm=6,em=7,Ud=300,yr=301,Er=302,Tc=303,wc=304,Xo=306,Do=1e3,Di=1001,Ac=1002,qe=1003,nm=1004,ws=1005,Sn=1006,aa=1007,Ui=1008,qn=1009,Nd=1010,Fd=1011,cs=1012,bl=1013,zi=1014,Un=1015,hs=1016,Tl=1017,wl=1018,br=1020,Od=35902,Bd=1021,zd=1022,bn=1023,kd=1024,Gd=1025,gr=1026,Tr=1027,Al=1028,Rl=1029,Hd=1030,Cl=1031,Pl=1033,uo=33776,ho=33777,fo=33778,po=33779,Rc=35840,Cc=35841,Pc=35842,Lc=35843,Ic=36196,Dc=37492,Uc=37496,Nc=37808,Fc=37809,Oc=37810,Bc=37811,zc=37812,kc=37813,Gc=37814,Hc=37815,Vc=37816,Wc=37817,Xc=37818,Yc=37819,qc=37820,$c=37821,mo=36492,Kc=36494,jc=36495,Vd=36283,Zc=36284,Jc=36285,Qc=36286,im=3200,Wd=3201,Xd=0,rm=1,ai="",ln="srgb",mi="srgb-linear",Ll="display-p3",Yo="display-p3-linear",Uo="linear",ue="srgb",No="rec709",Fo="p3",qi=7680,fu=519,sm=512,om=513,am=514,Yd=515,cm=516,lm=517,um=518,hm=519,pu=35044,dm=35048,mu="300 es",Wn=2e3,Oo=2001;class Ir{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ca=Math.PI/180,tl=180/Math.PI;function ds(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]).toLowerCase()}function Xe(n,t,e){return Math.max(t,Math.min(e,n))}function fm(n,t){return(n%t+t)%t}function la(n,t,e){return(1-e)*n+e*t}function zr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function He(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class $t{constructor(t=0,e=0){$t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Xe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,i,r,s,o,a,c,l){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l)}set(t,e,i,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],p=i[5],g=i[8],x=r[0],m=r[3],f=r[6],T=r[1],y=r[4],b=r[7],S=r[2],E=r[5],v=r[8];return s[0]=o*x+a*T+c*S,s[3]=o*m+a*y+c*E,s[6]=o*f+a*b+c*v,s[1]=l*x+u*T+h*S,s[4]=l*m+u*y+h*E,s[7]=l*f+u*b+h*v,s[2]=d*x+p*T+g*S,s[5]=d*m+p*y+g*E,s[8]=d*f+p*b+g*v,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,d=a*c-u*s,p=l*s-o*c,g=e*h+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=h*x,t[1]=(r*l-u*i)*x,t[2]=(a*i-r*o)*x,t[3]=d*x,t[4]=(u*e-r*c)*x,t[5]=(r*s-a*e)*x,t[6]=p*x,t[7]=(i*c-l*e)*x,t[8]=(o*e-i*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ua.makeScale(t,e)),this}rotate(t){return this.premultiply(ua.makeRotation(-t)),this}translate(t,e){return this.premultiply(ua.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ua=new Nt;function qd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ls(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pm(){const n=ls("canvas");return n.style.display="block",n}const gu={};function go(n){n in gu||(gu[n]=!0,console.warn(n))}function mm(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function gm(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function _m(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const _u=new Nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xu=new Nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),kr={[mi]:{transfer:Uo,primaries:No,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[ln]:{transfer:ue,primaries:No,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Yo]:{transfer:Uo,primaries:Fo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(xu),fromReference:n=>n.applyMatrix3(_u)},[Ll]:{transfer:ue,primaries:Fo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(xu),fromReference:n=>n.applyMatrix3(_u).convertLinearToSRGB()}},xm=new Set([mi,Yo]),Zt={enabled:!0,_workingColorSpace:mi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!xm.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=kr[t].toReference,r=kr[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return kr[n].primaries},getTransfer:function(n){return n===ai?Uo:kr[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(kr[t].luminanceCoefficients)}};function _r(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ha(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let $i;class vm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$i===void 0&&($i=ls("canvas")),$i.width=t.width,$i.height=t.height;const i=$i.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=$i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ls("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=_r(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(_r(e[i]/255)*255):e[i]=_r(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Mm=0;class $d{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=ds(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(da(r[o].image)):s.push(da(r[o]))}else s=da(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function da(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?vm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sm=0;class Le extends Ir{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,i=Di,r=Di,s=Sn,o=Ui,a=bn,c=qn,l=Le.DEFAULT_ANISOTROPY,u=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=ds(),this.name="",this.source=new $d(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ud)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Do:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case Ac:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Do:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case Ac:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=Ud;Le.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,i=0,r=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],g=c[9],x=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,b=(p+1)/2,S=(f+1)/2,E=(u+d)/4,v=(h+x)/4,A=(g+m)/4;return y>b&&y>S?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=E/i,s=v/i):b>S?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=E/r,s=A/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=v/s,r=A/s),this.set(i,r,s,e),this}let T=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-x)/T,this.z=(d-u)/T,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ym extends Ir{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Le(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new $d(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends ym{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Kd extends Le{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=qe,this.minFilter=qe,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Em extends Le{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=qe,this.minFilter=qe,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dr{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(h!==x||c!==d||l!==p||u!==g){let m=1-a;const f=c*d+l*p+u*g+h*x,T=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const S=Math.sqrt(y),E=Math.atan2(S,f*T);m=Math.sin(m*E)/S,a=Math.sin(a*E)/S}const b=a*T;if(c=c*m+d*b,l=l*m+p*b,u=u*m+g*b,h=h*m+x*b,m===1-a){const S=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=S,l*=S,u*=S,h*=S}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+u*h+c*p-l*d,t[e+1]=c*g+u*d+l*h-a*p,t[e+2]=l*g+u*p+a*d-c*h,t[e+3]=u*g-a*h-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),d=c(i/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"YZX":this._x=d*u*h+l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h-d*p*g;break;case"XZY":this._x=d*u*h-l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,i=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*i),u=2*(a*e-s*r),h=2*(s*i-o*e);return this.x=e+c*l+o*h-a*u,this.y=i+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return fa.copy(this).projectOnVector(t),this.sub(fa)}reflect(t){return this.sub(fa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Xe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fa=new k,vu=new Dr;class Wi{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,_n):_n.fromBufferAttribute(s,o),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),As.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),As.copy(i.boundingBox)),As.applyMatrix4(t.matrixWorld),this.union(As)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gr),Rs.subVectors(this.max,Gr),Ki.subVectors(t.a,Gr),ji.subVectors(t.b,Gr),Zi.subVectors(t.c,Gr),Qn.subVectors(ji,Ki),ti.subVectors(Zi,ji),vi.subVectors(Ki,Zi);let e=[0,-Qn.z,Qn.y,0,-ti.z,ti.y,0,-vi.z,vi.y,Qn.z,0,-Qn.x,ti.z,0,-ti.x,vi.z,0,-vi.x,-Qn.y,Qn.x,0,-ti.y,ti.x,0,-vi.y,vi.x,0];return!pa(e,Ki,ji,Zi,Rs)||(e=[1,0,0,0,1,0,0,0,1],!pa(e,Ki,ji,Zi,Rs))?!1:(Cs.crossVectors(Qn,ti),e=[Cs.x,Cs.y,Cs.z],pa(e,Ki,ji,Zi,Rs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Fn=[new k,new k,new k,new k,new k,new k,new k,new k],_n=new k,As=new Wi,Ki=new k,ji=new k,Zi=new k,Qn=new k,ti=new k,vi=new k,Gr=new k,Rs=new k,Cs=new k,Mi=new k;function pa(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Mi.fromArray(n,s);const a=r.x*Math.abs(Mi.x)+r.y*Math.abs(Mi.y)+r.z*Math.abs(Mi.z),c=t.dot(Mi),l=e.dot(Mi),u=i.dot(Mi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const bm=new Wi,Hr=new k,ma=new k;class Ur{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):bm.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Hr.subVectors(t,this.center);const e=Hr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Hr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ma.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Hr.copy(t.center).add(ma)),this.expandByPoint(Hr.copy(t.center).sub(ma))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new k,ga=new k,Ps=new k,ei=new k,_a=new k,Ls=new k,xa=new k;class Tm{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){ga.copy(t).add(e).multiplyScalar(.5),Ps.copy(e).sub(t).normalize(),ei.copy(this.origin).sub(ga);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ps),a=ei.dot(this.direction),c=-ei.dot(Ps),l=ei.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*c-a,d=o*a-c,g=s*u,h>=0)if(d>=-g)if(d<=g){const x=1/u;h*=x,d*=x,p=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ga).addScaledVector(Ps,d),p}intersectSphere(t,e){On.subVectors(t.center,this.origin);const i=On.dot(this.direction),r=On.dot(On)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,i,r,s){_a.subVectors(e,t),Ls.subVectors(i,t),xa.crossVectors(_a,Ls);let o=this.direction.dot(xa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ei.subVectors(this.origin,t);const c=a*this.direction.dot(Ls.crossVectors(ei,Ls));if(c<0)return null;const l=a*this.direction.dot(_a.cross(ei));if(l<0||c+l>o)return null;const u=-a*ei.dot(xa);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(t,e,i,r,s,o,a,c,l,u,h,d,p,g,x,m){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l,u,h,d,p,g,x,m)}set(t,e,i,r,s,o,a,c,l,u,h,d,p,g,x,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Ji.setFromMatrixColumn(t,0).length(),s=1/Ji.setFromMatrixColumn(t,1).length(),o=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=o*u,p=o*h,g=a*u,x=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+g*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,p=c*h,g=l*u,x=l*h;e[0]=d+x*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,p=c*h,g=l*u,x=l*h;e[0]=d-x*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,p=o*h,g=a*u,x=a*h;e[0]=c*u,e[4]=g*l-p,e[8]=d*l+x,e[1]=c*h,e[5]=x*l+d,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-d*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*h+g,e[10]=d-x*h}else if(t.order==="XZY"){const d=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+x,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=x*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wm,t,Am)}lookAt(t,e,i){const r=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),ni.crossVectors(i,tn),ni.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),ni.crossVectors(i,tn)),ni.normalize(),Is.crossVectors(tn,ni),r[0]=ni.x,r[4]=Is.x,r[8]=tn.x,r[1]=ni.y,r[5]=Is.y,r[9]=tn.y,r[2]=ni.z,r[6]=Is.z,r[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],p=i[13],g=i[2],x=i[6],m=i[10],f=i[14],T=i[3],y=i[7],b=i[11],S=i[15],E=r[0],v=r[4],A=r[8],R=r[12],_=r[1],M=r[5],P=r[9],I=r[13],U=r[2],V=r[6],B=r[10],Y=r[14],N=r[3],q=r[7],nt=r[11],ot=r[15];return s[0]=o*E+a*_+c*U+l*N,s[4]=o*v+a*M+c*V+l*q,s[8]=o*A+a*P+c*B+l*nt,s[12]=o*R+a*I+c*Y+l*ot,s[1]=u*E+h*_+d*U+p*N,s[5]=u*v+h*M+d*V+p*q,s[9]=u*A+h*P+d*B+p*nt,s[13]=u*R+h*I+d*Y+p*ot,s[2]=g*E+x*_+m*U+f*N,s[6]=g*v+x*M+m*V+f*q,s[10]=g*A+x*P+m*B+f*nt,s[14]=g*R+x*I+m*Y+f*ot,s[3]=T*E+y*_+b*U+S*N,s[7]=T*v+y*M+b*V+S*q,s[11]=T*A+y*P+b*B+S*nt,s[15]=T*R+y*I+b*Y+S*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+s*c*h-r*l*h-s*a*d+i*l*d+r*a*p-i*c*p)+x*(+e*c*p-e*l*d+s*o*d-r*o*p+r*l*u-s*c*u)+m*(+e*l*h-e*a*p-s*o*h+i*o*p+s*a*u-i*l*u)+f*(-r*a*u-e*c*h+e*a*d+r*o*h-i*o*d+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],T=h*m*l-x*d*l+x*c*p-a*m*p-h*c*f+a*d*f,y=g*d*l-u*m*l-g*c*p+o*m*p+u*c*f-o*d*f,b=u*x*l-g*h*l+g*a*p-o*x*p-u*a*f+o*h*f,S=g*h*c-u*x*c-g*a*d+o*x*d+u*a*m-o*h*m,E=e*T+i*y+r*b+s*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const v=1/E;return t[0]=T*v,t[1]=(x*d*s-h*m*s-x*r*p+i*m*p+h*r*f-i*d*f)*v,t[2]=(a*m*s-x*c*s+x*r*l-i*m*l-a*r*f+i*c*f)*v,t[3]=(h*c*s-a*d*s-h*r*l+i*d*l+a*r*p-i*c*p)*v,t[4]=y*v,t[5]=(u*m*s-g*d*s+g*r*p-e*m*p-u*r*f+e*d*f)*v,t[6]=(g*c*s-o*m*s-g*r*l+e*m*l+o*r*f-e*c*f)*v,t[7]=(o*d*s-u*c*s+u*r*l-e*d*l-o*r*p+e*c*p)*v,t[8]=b*v,t[9]=(g*h*s-u*x*s-g*i*p+e*x*p+u*i*f-e*h*f)*v,t[10]=(o*x*s-g*a*s+g*i*l-e*x*l-o*i*f+e*a*f)*v,t[11]=(u*a*s-o*h*s-u*i*l+e*h*l+o*i*p-e*a*p)*v,t[12]=S*v,t[13]=(u*x*r-g*h*r+g*i*d-e*x*d-u*i*m+e*h*m)*v,t[14]=(g*a*r-o*x*r-g*i*c+e*x*c+o*i*m-e*a*m)*v,t[15]=(o*h*r-u*a*r+u*i*c-e*h*c-o*i*d+e*a*d)*v,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,h=a+a,d=s*l,p=s*u,g=s*h,x=o*u,m=o*h,f=a*h,T=c*l,y=c*u,b=c*h,S=i.x,E=i.y,v=i.z;return r[0]=(1-(x+f))*S,r[1]=(p+b)*S,r[2]=(g-y)*S,r[3]=0,r[4]=(p-b)*E,r[5]=(1-(d+f))*E,r[6]=(m+T)*E,r[7]=0,r[8]=(g+y)*v,r[9]=(m-T)*v,r[10]=(1-(d+x))*v,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Ji.set(r[0],r[1],r[2]).length();const o=Ji.set(r[4],r[5],r[6]).length(),a=Ji.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],xn.copy(this);const l=1/s,u=1/o,h=1/a;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=h,xn.elements[9]*=h,xn.elements[10]*=h,e.setFromRotationMatrix(xn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=Wn){const c=this.elements,l=2*s/(e-t),u=2*s/(i-r),h=(e+t)/(e-t),d=(i+r)/(i-r);let p,g;if(a===Wn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Oo)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Wn){const c=this.elements,l=1/(e-t),u=1/(i-r),h=1/(o-s),d=(e+t)*l,p=(i+r)*u;let g,x;if(a===Wn)g=(o+s)*h,x=-2*h;else if(a===Oo)g=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ji=new k,xn=new Qt,wm=new k(0,0,0),Am=new k(1,1,1),ni=new k,Is=new k,tn=new k,Mu=new Qt,Su=new Dr;class An{constructor(t=0,e=0,i=0,r=An.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Mu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Su.setFromEuler(this),this.setFromQuaternion(Su,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class jd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Rm=0;const yu=new k,Qi=new Dr,Bn=new Qt,Ds=new k,Vr=new k,Cm=new k,Pm=new Dr,Eu=new k(1,0,0),bu=new k(0,1,0),Tu=new k(0,0,1),wu={type:"added"},Lm={type:"removed"},tr={type:"childadded",child:null},va={type:"childremoved",child:null};class Ae extends Ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new k,e=new An,i=new Dr,r=new k(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Nt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.premultiply(Qi),this}rotateX(t){return this.rotateOnAxis(Eu,t)}rotateY(t){return this.rotateOnAxis(bu,t)}rotateZ(t){return this.rotateOnAxis(Tu,t)}translateOnAxis(t,e){return yu.copy(t).applyQuaternion(this.quaternion),this.position.add(yu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Eu,t)}translateY(t){return this.translateOnAxis(bu,t)}translateZ(t){return this.translateOnAxis(Tu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ds.copy(t):Ds.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Vr,Ds,this.up):Bn.lookAt(Ds,Vr,this.up),this.quaternion.setFromRotationMatrix(Bn),r&&(Bn.extractRotation(r.matrixWorld),Qi.setFromRotationMatrix(Bn),this.quaternion.premultiply(Qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wu),tr.child=t,this.dispatchEvent(tr),tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lm),va.child=t,this.dispatchEvent(va),va.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wu),tr.child=t,this.dispatchEvent(tr),tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,t,Cm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,Pm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(t.shapes,h)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Ae.DEFAULT_UP=new k(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new k,zn=new k,Ma=new k,kn=new k,er=new k,nr=new k,Au=new k,Sa=new k,ya=new k,Ea=new k,ba=new fe,Ta=new fe,wa=new fe;class yn{constructor(t=new k,e=new k,i=new k){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),vn.subVectors(t,e),r.cross(vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){vn.subVectors(r,e),zn.subVectors(i,e),Ma.subVectors(t,e);const o=vn.dot(vn),a=vn.dot(zn),c=vn.dot(Ma),l=zn.dot(zn),u=zn.dot(Ma),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(l*c-a*u)*d,g=(o*u-a*c)*d;return s.set(1-p-g,g,p)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(t,e,i,r,s,o,a,c){return this.getBarycoord(t,e,i,r,kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,kn.x),c.addScaledVector(o,kn.y),c.addScaledVector(a,kn.z),c)}static getInterpolatedAttribute(t,e,i,r,s,o){return ba.setScalar(0),Ta.setScalar(0),wa.setScalar(0),ba.fromBufferAttribute(t,e),Ta.fromBufferAttribute(t,i),wa.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(ba,s.x),o.addScaledVector(Ta,s.y),o.addScaledVector(wa,s.z),o}static isFrontFacing(t,e,i,r){return vn.subVectors(i,e),zn.subVectors(t,e),vn.cross(zn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),vn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return yn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;er.subVectors(r,i),nr.subVectors(s,i),Sa.subVectors(t,i);const c=er.dot(Sa),l=nr.dot(Sa);if(c<=0&&l<=0)return e.copy(i);ya.subVectors(t,r);const u=er.dot(ya),h=nr.dot(ya);if(u>=0&&h<=u)return e.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(er,o);Ea.subVectors(t,s);const p=er.dot(Ea),g=nr.dot(Ea);if(g>=0&&p<=g)return e.copy(s);const x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(nr,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Au.subVectors(s,r),a=(h-u)/(h-u+(p-g)),e.copy(r).addScaledVector(Au,a);const f=1/(m+x+d);return o=x*f,a=d*f,e.copy(i).addScaledVector(er,o).addScaledVector(nr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Zd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Us={h:0,s:0,l:0};function Aa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Z{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Zt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Zt.workingColorSpace){if(t=fm(t,1),e=Xe(e,0,1),i=Xe(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Aa(o,s,t+1/3),this.g=Aa(o,s,t),this.b=Aa(o,s,t-1/3)}return Zt.toWorkingColorSpace(this,r),this}setStyle(t,e=ln){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){const i=Zd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_r(t.r),this.g=_r(t.g),this.b=_r(t.b),this}copyLinearToSRGB(t){return this.r=ha(t.r),this.g=ha(t.g),this.b=ha(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return Zt.fromWorkingColorSpace(Ce.copy(this),t),Math.round(Xe(Ce.r*255,0,255))*65536+Math.round(Xe(Ce.g*255,0,255))*256+Math.round(Xe(Ce.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Ce.copy(this),e);const i=Ce.r,r=Ce.g,s=Ce.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=ln){Zt.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,i=Ce.g,r=Ce.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(Us);const i=la(ii.h,Us.h,e),r=la(ii.s,Us.s,e),s=la(ii.l,Us.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new Z;Z.NAMES=Zd;let Im=0;class fs extends Ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=ds(),this.name="",this.type="Material",this.blending=mr,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gc,this.blendDst=_c,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Z(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(i.blending=this.blending),this.side!==di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gc&&(i.blendSrc=this.blendSrc),this.blendDst!==_c&&(i.blendDst=this.blendDst),this.blendEquation!==Ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Sr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qo extends fs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Z(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new k,Ns=new $t;class Tn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=pu,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ns.fromBufferAttribute(this,e),Ns.applyMatrix3(t),this.setXY(e,Ns.x,Ns.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=zr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=He(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zr(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zr(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zr(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),i=He(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),i=He(i,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),i=He(i,this.array),r=He(r,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==pu&&(t.usage=this.usage),t}}class Jd extends Tn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Qd extends Tn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ve extends Tn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Dm=0;const an=new Qt,Ra=new Ae,ir=new k,en=new Wi,Wr=new Wi,be=new k;class mn extends Ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=ds(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qd(t)?Qd:Jd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Nt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,i){return an.makeTranslation(t,e,i),this.applyMatrix4(an),this}scale(t,e,i){return an.makeScale(t,e,i),this.applyMatrix4(an),this}lookAt(t){return Ra.lookAt(t),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ve(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];en.setFromBufferAttribute(s),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ur);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Wr.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors(en.min,Wr.min),en.expandByPoint(be),be.addVectors(en.max,Wr.max),en.expandByPoint(be)):(en.expandByPoint(Wr.min),en.expandByPoint(Wr.max))}en.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)be.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(be));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)be.fromBufferAttribute(a,l),c&&(ir.fromBufferAttribute(t,l),be.add(ir)),r=Math.max(r,i.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<i.count;A++)a[A]=new k,c[A]=new k;const l=new k,u=new k,h=new k,d=new $t,p=new $t,g=new $t,x=new k,m=new k;function f(A,R,_){l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,_),d.fromBufferAttribute(s,A),p.fromBufferAttribute(s,R),g.fromBufferAttribute(s,_),u.sub(l),h.sub(l),p.sub(d),g.sub(d);const M=1/(p.x*g.y-g.x*p.y);isFinite(M)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(M),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(M),a[A].add(x),a[R].add(x),a[_].add(x),c[A].add(m),c[R].add(m),c[_].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let A=0,R=T.length;A<R;++A){const _=T[A],M=_.start,P=_.count;for(let I=M,U=M+P;I<U;I+=3)f(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const y=new k,b=new k,S=new k,E=new k;function v(A){S.fromBufferAttribute(r,A),E.copy(S);const R=a[A];y.copy(R),y.sub(S.multiplyScalar(S.dot(R))).normalize(),b.crossVectors(E,R);const M=b.dot(c[A])<0?-1:1;o.setXYZW(A,y.x,y.y,y.z,M)}for(let A=0,R=T.length;A<R;++A){const _=T[A],M=_.start,P=_.count;for(let I=M,U=M+P;I<U;I+=3)v(t.getX(I+0)),v(t.getX(I+1)),v(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new k,s=new k,o=new k,a=new k,c=new k,l=new k,u=new k,h=new k;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*u;for(let f=0;f<u;f++)d[g++]=l[p++]}return new Tn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new mn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=t(d,i);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ru=new Qt,Si=new Tm,Fs=new Ur,Cu=new k,Os=new k,Bs=new k,zs=new k,Ca=new k,ks=new k,Pu=new k,Gs=new k;class Ot extends Ae{constructor(t=new mn,e=new qo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){ks.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(Ca.fromBufferAttribute(h,t),o?ks.addScaledVector(Ca,u):ks.addScaledVector(Ca.sub(e),u))}e.add(ks)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fs.copy(i.boundingSphere),Fs.applyMatrix4(s),Si.copy(t.ray).recast(t.near),!(Fs.containsPoint(Si.origin)===!1&&(Si.intersectSphere(Fs,Cu)===null||Si.origin.distanceToSquared(Cu)>(t.far-t.near)**2))&&(Ru.copy(s).invert(),Si.copy(t.ray).applyMatrix4(Ru),!(i.boundingBox!==null&&Si.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Si)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=o[m.materialIndex],T=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=T,S=y;b<S;b+=3){const E=a.getX(b),v=a.getX(b+1),A=a.getX(b+2);r=Hs(this,f,t,i,l,u,h,E,v,A),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const T=a.getX(m),y=a.getX(m+1),b=a.getX(m+2);r=Hs(this,o,t,i,l,u,h,T,y,b),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=o[m.materialIndex],T=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let b=T,S=y;b<S;b+=3){const E=b,v=b+1,A=b+2;r=Hs(this,f,t,i,l,u,h,E,v,A),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const T=m,y=m+1,b=m+2;r=Hs(this,o,t,i,l,u,h,T,y,b),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Um(n,t,e,i,r,s,o,a){let c;if(t.side===Fe?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===di,a),c===null)return null;Gs.copy(a),Gs.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Gs);return l<e.near||l>e.far?null:{distance:l,point:Gs.clone(),object:n}}function Hs(n,t,e,i,r,s,o,a,c,l){n.getVertexPosition(a,Os),n.getVertexPosition(c,Bs),n.getVertexPosition(l,zs);const u=Um(n,t,e,i,Os,Bs,zs,Pu);if(u){const h=new k;yn.getBarycoord(Pu,Os,Bs,zs,h),r&&(u.uv=yn.getInterpolatedAttribute(r,a,c,l,h,new $t)),s&&(u.uv1=yn.getInterpolatedAttribute(s,a,c,l,h,new $t)),o&&(u.normal=yn.getInterpolatedAttribute(o,a,c,l,h,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new k,materialIndex:0};yn.getNormal(Os,Bs,zs,d.normal),u.face=d,u.barycoord=h}return u}class ps extends mn{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ve(l,3)),this.setAttribute("normal",new ve(u,3)),this.setAttribute("uv",new ve(h,2));function g(x,m,f,T,y,b,S,E,v,A,R){const _=b/v,M=S/A,P=b/2,I=S/2,U=E/2,V=v+1,B=A+1;let Y=0,N=0;const q=new k;for(let nt=0;nt<B;nt++){const ot=nt*M-I;for(let Dt=0;Dt<V;Dt++){const zt=Dt*_-P;q[x]=zt*T,q[m]=ot*y,q[f]=U,l.push(q.x,q.y,q.z),q[x]=0,q[m]=0,q[f]=E>0?1:-1,u.push(q.x,q.y,q.z),h.push(Dt/v),h.push(1-nt/A),Y+=1}}for(let nt=0;nt<A;nt++)for(let ot=0;ot<v;ot++){const Dt=d+ot+V*nt,zt=d+ot+V*(nt+1),$=d+(ot+1)+V*(nt+1),et=d+(ot+1)+V*nt;c.push(Dt,zt,et),c.push(zt,$,et),N+=6}a.addGroup(p,N,R),p+=N,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ps(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function wr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ue(n){const t={};for(let e=0;e<n.length;e++){const i=wr(n[e]);for(const r in i)t[r]=i[r]}return t}function Nm(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function tf(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const Fm={clone:wr,merge:Ue};var Om=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends fs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Om,this.fragmentShader=Bm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wr(t.uniforms),this.uniformsGroups=Nm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class ef extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new k,Lu=new $t,Iu=new $t;class un extends ef{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=tl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ca*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return tl*2*Math.atan(Math.tan(ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,Lu,Iu),e.subVectors(Iu,Lu)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ca*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const rr=-90,sr=1;class zm extends Ae{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(rr,sr,t,e);r.layers=this.layers,this.add(r);const s=new un(rr,sr,t,e);s.layers=this.layers,this.add(s);const o=new un(rr,sr,t,e);o.layers=this.layers,this.add(o);const a=new un(rr,sr,t,e);a.layers=this.layers,this.add(a);const c=new un(rr,sr,t,e);c.layers=this.layers,this.add(c);const l=new un(rr,sr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===Wn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Oo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class nf extends Le{constructor(t,e,i,r,s,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:yr,super(t,e,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class km extends ki{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new nf(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ps(5,5,5),s=new $n({name:"CubemapFromEquirect",uniforms:wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fe,blending:ci});s.uniforms.tEquirect.value=e;const o=new Ot(r,s),a=e.minFilter;return e.minFilter===Ui&&(e.minFilter=Sn),new zm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const Pa=new k,Gm=new k,Hm=new Nt;class Ti{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Pa.subVectors(i,e).cross(Gm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Pa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Hm.getNormalMatrix(t),r=this.coplanarPoint(Pa).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new Ur,Vs=new k;class Il{constructor(t=new Ti,e=new Ti,i=new Ti,r=new Ti,s=new Ti,o=new Ti){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Wn){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],h=r[6],d=r[7],p=r[8],g=r[9],x=r[10],m=r[11],f=r[12],T=r[13],y=r[14],b=r[15];if(i[0].setComponents(c-s,d-l,m-p,b-f).normalize(),i[1].setComponents(c+s,d+l,m+p,b+f).normalize(),i[2].setComponents(c+o,d+u,m+g,b+T).normalize(),i[3].setComponents(c-o,d-u,m-g,b-T).normalize(),i[4].setComponents(c-a,d-h,m-x,b-y).normalize(),e===Wn)i[5].setComponents(c+a,d+h,m+x,b+y).normalize();else if(e===Oo)i[5].setComponents(a,h,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(t){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Vs.x=r.normal.x>0?t.max.x:t.min.x,Vs.y=r.normal.y>0?t.max.y:t.min.y,Vs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Vs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rf(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Vm(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const x=h[p];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class ms extends mn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=t/a,d=e/c,p=[],g=[],x=[],m=[];for(let f=0;f<u;f++){const T=f*d-o;for(let y=0;y<l;y++){const b=y*h-s;g.push(b,-T,0),x.push(0,0,1),m.push(y/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let T=0;T<a;T++){const y=T+l*f,b=T+l*(f+1),S=T+1+l*(f+1),E=T+1+l*f;p.push(y,b,E),p.push(b,S,E)}this.setIndex(p),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(x,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ms(t.width,t.height,t.widthSegments,t.heightSegments)}}var Wm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xm=`#ifdef USE_ALPHAHASH
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
#endif`,Ym=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$m=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Km=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jm=`#ifdef USE_AOMAP
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
#endif`,Zm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jm=`#ifdef USE_BATCHING
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
#endif`,Qm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,t0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,e0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,i0=`#ifdef USE_IRIDESCENCE
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
#endif`,r0=`#ifdef USE_BUMPMAP
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
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,u0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,h0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,d0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,f0=`#define PI 3.141592653589793
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
} // validated`,p0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,m0=`vec3 transformedNormal = objectNormal;
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
#endif`,g0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,x0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,M0="gl_FragColor = linearToOutputTexel( gl_FragColor );",S0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,y0=`#ifdef USE_ENVMAP
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
#endif`,E0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,b0=`#ifdef USE_ENVMAP
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
#endif`,T0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,w0=`#ifdef USE_ENVMAP
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
#endif`,A0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,R0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,C0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,L0=`#ifdef USE_GRADIENTMAP
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
}`,I0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,U0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N0=`uniform bool receiveShadow;
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
#endif`,F0=`#ifdef USE_ENVMAP
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
#endif`,O0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,B0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,z0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,G0=`PhysicalMaterial material;
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
#endif`,H0=`struct PhysicalMaterial {
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
}`,V0=`
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
#endif`,W0=`#if defined( RE_IndirectDiffuse )
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
#endif`,X0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Y0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,j0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Q0=`#if defined( USE_POINTS_UV )
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
#endif`,tg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ng=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ig=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sg=`#ifdef USE_MORPHTARGETS
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
#endif`,og=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dg=`#ifdef USE_NORMALMAP
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
#endif`,fg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_g=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Eg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ag=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rg=`float getShadowMask() {
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
}`,Cg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pg=`#ifdef USE_SKINNING
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
#endif`,Lg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ig=`#ifdef USE_SKINNING
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
#endif`,Dg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ug=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ng=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Og=`#ifdef USE_TRANSMISSION
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
#endif`,Bg=`#ifdef USE_TRANSMISSION
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
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wg=`uniform sampler2D t2D;
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$g=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`#include <common>
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
}`,jg=`#if DEPTH_PACKING == 3200
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
}`,Zg=`#define DISTANCE
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
}`,Jg=`#define DISTANCE
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
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e_=`uniform float scale;
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
}`,n_=`uniform vec3 diffuse;
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
}`,i_=`#include <common>
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
}`,r_=`uniform vec3 diffuse;
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
}`,s_=`#define LAMBERT
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
}`,o_=`#define LAMBERT
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
}`,a_=`#define MATCAP
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
}`,c_=`#define MATCAP
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
}`,l_=`#define NORMAL
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
}`,u_=`#define NORMAL
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
}`,h_=`#define PHONG
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
}`,d_=`#define PHONG
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
}`,f_=`#define STANDARD
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
}`,p_=`#define STANDARD
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
}`,m_=`#define TOON
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
}`,g_=`#define TOON
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
}`,__=`uniform float size;
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
}`,x_=`uniform vec3 diffuse;
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
}`,v_=`#include <common>
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
}`,M_=`uniform vec3 color;
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
}`,S_=`uniform float rotation;
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
}`,y_=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:Wm,alphahash_pars_fragment:Xm,alphamap_fragment:Ym,alphamap_pars_fragment:qm,alphatest_fragment:$m,alphatest_pars_fragment:Km,aomap_fragment:jm,aomap_pars_fragment:Zm,batching_pars_vertex:Jm,batching_vertex:Qm,begin_vertex:t0,beginnormal_vertex:e0,bsdfs:n0,iridescence_fragment:i0,bumpmap_pars_fragment:r0,clipping_planes_fragment:s0,clipping_planes_pars_fragment:o0,clipping_planes_pars_vertex:a0,clipping_planes_vertex:c0,color_fragment:l0,color_pars_fragment:u0,color_pars_vertex:h0,color_vertex:d0,common:f0,cube_uv_reflection_fragment:p0,defaultnormal_vertex:m0,displacementmap_pars_vertex:g0,displacementmap_vertex:_0,emissivemap_fragment:x0,emissivemap_pars_fragment:v0,colorspace_fragment:M0,colorspace_pars_fragment:S0,envmap_fragment:y0,envmap_common_pars_fragment:E0,envmap_pars_fragment:b0,envmap_pars_vertex:T0,envmap_physical_pars_fragment:F0,envmap_vertex:w0,fog_vertex:A0,fog_pars_vertex:R0,fog_fragment:C0,fog_pars_fragment:P0,gradientmap_pars_fragment:L0,lightmap_pars_fragment:I0,lights_lambert_fragment:D0,lights_lambert_pars_fragment:U0,lights_pars_begin:N0,lights_toon_fragment:O0,lights_toon_pars_fragment:B0,lights_phong_fragment:z0,lights_phong_pars_fragment:k0,lights_physical_fragment:G0,lights_physical_pars_fragment:H0,lights_fragment_begin:V0,lights_fragment_maps:W0,lights_fragment_end:X0,logdepthbuf_fragment:Y0,logdepthbuf_pars_fragment:q0,logdepthbuf_pars_vertex:$0,logdepthbuf_vertex:K0,map_fragment:j0,map_pars_fragment:Z0,map_particle_fragment:J0,map_particle_pars_fragment:Q0,metalnessmap_fragment:tg,metalnessmap_pars_fragment:eg,morphinstance_vertex:ng,morphcolor_vertex:ig,morphnormal_vertex:rg,morphtarget_pars_vertex:sg,morphtarget_vertex:og,normal_fragment_begin:ag,normal_fragment_maps:cg,normal_pars_fragment:lg,normal_pars_vertex:ug,normal_vertex:hg,normalmap_pars_fragment:dg,clearcoat_normal_fragment_begin:fg,clearcoat_normal_fragment_maps:pg,clearcoat_pars_fragment:mg,iridescence_pars_fragment:gg,opaque_fragment:_g,packing:xg,premultiplied_alpha_fragment:vg,project_vertex:Mg,dithering_fragment:Sg,dithering_pars_fragment:yg,roughnessmap_fragment:Eg,roughnessmap_pars_fragment:bg,shadowmap_pars_fragment:Tg,shadowmap_pars_vertex:wg,shadowmap_vertex:Ag,shadowmask_pars_fragment:Rg,skinbase_vertex:Cg,skinning_pars_vertex:Pg,skinning_vertex:Lg,skinnormal_vertex:Ig,specularmap_fragment:Dg,specularmap_pars_fragment:Ug,tonemapping_fragment:Ng,tonemapping_pars_fragment:Fg,transmission_fragment:Og,transmission_pars_fragment:Bg,uv_pars_fragment:zg,uv_pars_vertex:kg,uv_vertex:Gg,worldpos_vertex:Hg,background_vert:Vg,background_frag:Wg,backgroundCube_vert:Xg,backgroundCube_frag:Yg,cube_vert:qg,cube_frag:$g,depth_vert:Kg,depth_frag:jg,distanceRGBA_vert:Zg,distanceRGBA_frag:Jg,equirect_vert:Qg,equirect_frag:t_,linedashed_vert:e_,linedashed_frag:n_,meshbasic_vert:i_,meshbasic_frag:r_,meshlambert_vert:s_,meshlambert_frag:o_,meshmatcap_vert:a_,meshmatcap_frag:c_,meshnormal_vert:l_,meshnormal_frag:u_,meshphong_vert:h_,meshphong_frag:d_,meshphysical_vert:f_,meshphysical_frag:p_,meshtoon_vert:m_,meshtoon_frag:g_,points_vert:__,points_frag:x_,shadow_vert:v_,shadow_frag:M_,sprite_vert:S_,sprite_frag:y_},st={common:{diffuse:{value:new Z(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Z(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Z(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Z(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},Pn={basic:{uniforms:Ue([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Ue([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Z(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Ue([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Z(0)},specular:{value:new Z(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Ue([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Z(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Ue([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Z(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Ue([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Ue([st.points,st.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Ue([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Ue([st.common,st.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Ue([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Ue([st.sprite,st.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Ue([st.common,st.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Ue([st.lights,st.fog,{color:{value:new Z(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};Pn.physical={uniforms:Ue([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Z(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Z(0)},specularColor:{value:new Z(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const Ws={r:0,b:0,g:0},Ei=new An,E_=new Qt;function b_(n,t,e,i,r,s,o){const a=new Z(0);let c=s===!0?0:1,l,u,h=null,d=0,p=null;function g(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?e:t).get(y)),y}function x(T){let y=!1;const b=g(T);b===null?f(a,c):b&&b.isColor&&(f(b,1),y=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,y){const b=g(y);b&&(b.isCubeTexture||b.mapping===Xo)?(u===void 0&&(u=new Ot(new ps(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:wr(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,E,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ei.copy(y.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(E_.makeRotationFromEuler(Ei)),u.material.toneMapped=Zt.getTransfer(b.colorSpace)!==ue,(h!==b||d!==b.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=b,d=b.version,p=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Ot(new ms(2,2),new $n({name:"BackgroundMaterial",uniforms:wr(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(b.colorSpace)!==ue,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,p=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function f(T,y){T.getRGB(Ws,tf(n)),i.buffers.color.setClear(Ws.r,Ws.g,Ws.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(T,y=1){a.set(T),c=y,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,f(a,c)},render:x,addToRenderList:m}}function T_(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(_,M,P,I,U){let V=!1;const B=h(I,P,M);s!==B&&(s=B,l(s.object)),V=p(_,I,P,U),V&&g(_,I,P,U),U!==null&&t.update(U,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,b(_,M,P,I),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return n.createVertexArray()}function l(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function h(_,M,P){const I=P.wireframe===!0;let U=i[_.id];U===void 0&&(U={},i[_.id]=U);let V=U[M.id];V===void 0&&(V={},U[M.id]=V);let B=V[I];return B===void 0&&(B=d(c()),V[I]=B),B}function d(_){const M=[],P=[],I=[];for(let U=0;U<e;U++)M[U]=0,P[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:P,attributeDivisors:I,object:_,attributes:{},index:null}}function p(_,M,P,I){const U=s.attributes,V=M.attributes;let B=0;const Y=P.getAttributes();for(const N in Y)if(Y[N].location>=0){const nt=U[N];let ot=V[N];if(ot===void 0&&(N==="instanceMatrix"&&_.instanceMatrix&&(ot=_.instanceMatrix),N==="instanceColor"&&_.instanceColor&&(ot=_.instanceColor)),nt===void 0||nt.attribute!==ot||ot&&nt.data!==ot.data)return!0;B++}return s.attributesNum!==B||s.index!==I}function g(_,M,P,I){const U={},V=M.attributes;let B=0;const Y=P.getAttributes();for(const N in Y)if(Y[N].location>=0){let nt=V[N];nt===void 0&&(N==="instanceMatrix"&&_.instanceMatrix&&(nt=_.instanceMatrix),N==="instanceColor"&&_.instanceColor&&(nt=_.instanceColor));const ot={};ot.attribute=nt,nt&&nt.data&&(ot.data=nt.data),U[N]=ot,B++}s.attributes=U,s.attributesNum=B,s.index=I}function x(){const _=s.newAttributes;for(let M=0,P=_.length;M<P;M++)_[M]=0}function m(_){f(_,0)}function f(_,M){const P=s.newAttributes,I=s.enabledAttributes,U=s.attributeDivisors;P[_]=1,I[_]===0&&(n.enableVertexAttribArray(_),I[_]=1),U[_]!==M&&(n.vertexAttribDivisor(_,M),U[_]=M)}function T(){const _=s.newAttributes,M=s.enabledAttributes;for(let P=0,I=M.length;P<I;P++)M[P]!==_[P]&&(n.disableVertexAttribArray(P),M[P]=0)}function y(_,M,P,I,U,V,B){B===!0?n.vertexAttribIPointer(_,M,P,U,V):n.vertexAttribPointer(_,M,P,I,U,V)}function b(_,M,P,I){x();const U=I.attributes,V=P.getAttributes(),B=M.defaultAttributeValues;for(const Y in V){const N=V[Y];if(N.location>=0){let q=U[Y];if(q===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(q=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(q=_.instanceColor)),q!==void 0){const nt=q.normalized,ot=q.itemSize,Dt=t.get(q);if(Dt===void 0)continue;const zt=Dt.buffer,$=Dt.type,et=Dt.bytesPerElement,gt=$===n.INT||$===n.UNSIGNED_INT||q.gpuType===bl;if(q.isInterleavedBufferAttribute){const ut=q.data,At=ut.stride,yt=q.offset;if(ut.isInstancedInterleavedBuffer){for(let Bt=0;Bt<N.locationSize;Bt++)f(N.location+Bt,ut.meshPerAttribute);_.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Bt=0;Bt<N.locationSize;Bt++)m(N.location+Bt);n.bindBuffer(n.ARRAY_BUFFER,zt);for(let Bt=0;Bt<N.locationSize;Bt++)y(N.location+Bt,ot/N.locationSize,$,nt,At*et,(yt+ot/N.locationSize*Bt)*et,gt)}else{if(q.isInstancedBufferAttribute){for(let ut=0;ut<N.locationSize;ut++)f(N.location+ut,q.meshPerAttribute);_.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ut=0;ut<N.locationSize;ut++)m(N.location+ut);n.bindBuffer(n.ARRAY_BUFFER,zt);for(let ut=0;ut<N.locationSize;ut++)y(N.location+ut,ot/N.locationSize,$,nt,ot*et,ot/N.locationSize*ut*et,gt)}}else if(B!==void 0){const nt=B[Y];if(nt!==void 0)switch(nt.length){case 2:n.vertexAttrib2fv(N.location,nt);break;case 3:n.vertexAttrib3fv(N.location,nt);break;case 4:n.vertexAttrib4fv(N.location,nt);break;default:n.vertexAttrib1fv(N.location,nt)}}}}T()}function S(){A();for(const _ in i){const M=i[_];for(const P in M){const I=M[P];for(const U in I)u(I[U].object),delete I[U];delete M[P]}delete i[_]}}function E(_){if(i[_.id]===void 0)return;const M=i[_.id];for(const P in M){const I=M[P];for(const U in I)u(I[U].object),delete I[U];delete M[P]}delete i[_.id]}function v(_){for(const M in i){const P=i[M];if(P[_.id]===void 0)continue;const I=P[_.id];for(const U in I)u(I[U].object),delete I[U];delete P[_.id]}}function A(){R(),o=!0,s!==r&&(s=r,l(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function w_(n,t,e){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),e.update(u,i,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,i,1)}function c(l,u,h,d){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x];for(let x=0;x<d.length;x++)e.update(g,i,d[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function A_(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const v=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(v){return!(v!==bn&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){const A=v===hs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==qn&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&v!==Un&&!A)}function c(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const v=t.get("EXT_clip_control");v.clipControlEXT(v.LOWER_LEFT_EXT,v.ZERO_TO_ONE_EXT)}const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:S,maxSamples:E}}function R_(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new Ti,a=new Nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const T=s?0:i,y=T*4;let b=f.clippingState||null;c.value=b,b=u(g,d,y,p);for(let S=0;S!==y;++S)b[S]=e[S];f.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,p,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const f=p+x*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,b=p;y!==x;++y,b+=4)o.copy(h[y]).applyMatrix4(T,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function C_(n){let t=new WeakMap;function e(o,a){return a===Tc?o.mapping=yr:a===wc&&(o.mapping=Er),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Tc||a===wc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new km(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class sf extends ef{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const hr=4,Du=[.125,.215,.35,.446,.526,.582],Pi=20,La=new sf,Uu=new Z;let Ia=null,Da=0,Ua=0,Na=!1;const wi=(1+Math.sqrt(5))/2,or=1/wi,Nu=[new k(-wi,or,0),new k(wi,or,0),new k(-or,0,wi),new k(or,0,wi),new k(0,wi,-or),new k(0,wi,or),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class Fu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Ia=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ia,Da,Ua),this._renderer.xr.enabled=Na,t.scissorTest=!1,Xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===yr||t.mapping===Er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ia=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:hs,format:bn,colorSpace:mi,depthBuffer:!1},r=Ou(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ou(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=P_(s)),this._blurMaterial=L_(s,t,e)}return r}_compileMaterial(t){const e=new Ot(this._lodPlanes[0],t);this._renderer.compile(e,La)}_sceneToCubeUV(t,e,i,r){const a=new un(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Uu),u.toneMapping=li,u.autoClear=!1;const p=new qo({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),g=new Ot(new ps,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(Uu),x=!0);for(let f=0;f<6;f++){const T=f%3;T===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):T===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const y=this._cubeSize;Xs(r,T*y,f>2?y:0,y,y),u.setRenderTarget(r),x&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===yr||t.mapping===Er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ot(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Xs(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,La)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Nu[(r-s-1)%Nu.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ot(this._lodPlanes[r],l),d=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Pi-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):Pi;m>Pi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Pi}`);const f=[];let T=0;for(let v=0;v<Pi;++v){const A=v/x,R=Math.exp(-A*A/2);f.push(R),v===0?T+=R:v<m&&(T+=2*R)}for(let v=0;v<f.length;v++)f[v]=f[v]/T;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const b=this._sizeLods[r],S=3*b*(r>y-hr?r-y+hr:0),E=4*(this._cubeSize-b);Xs(e,S,E,3*b,2*b),c.setRenderTarget(e),c.render(h,La)}}function P_(n){const t=[],e=[],i=[];let r=n;const s=n-hr+1+Du.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>n-hr?c=Du[o-n+hr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,x=3,m=2,f=1,T=new Float32Array(x*g*p),y=new Float32Array(m*g*p),b=new Float32Array(f*g*p);for(let E=0;E<p;E++){const v=E%3*2/3-1,A=E>2?0:-1,R=[v,A,0,v+2/3,A,0,v+2/3,A+1,0,v,A,0,v+2/3,A+1,0,v,A+1,0];T.set(R,x*g*E),y.set(d,m*g*E);const _=[E,E,E,E,E,E];b.set(_,f*g*E)}const S=new mn;S.setAttribute("position",new Tn(T,x)),S.setAttribute("uv",new Tn(y,m)),S.setAttribute("faceIndex",new Tn(b,f)),t.push(S),r>hr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Ou(n,t,e){const i=new ki(n,t,e);return i.texture.mapping=Xo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xs(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function L_(n,t,e){const i=new Float32Array(Pi),r=new k(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Bu(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function zu(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Dl(){return`

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
	`}function I_(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Tc||c===wc,u=c===yr||c===Er;if(l||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Fu(n)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&r(p)?(e===null&&(e=new Fu(n)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function D_(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&go("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function U_(n,t,e,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)t.update(d[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const x=p[g];for(let m=0,f=x.length;m<f;m++)t.update(x[m],n.ARRAY_BUFFER)}}function l(h){const d=[],p=h.index,g=h.attributes.position;let x=0;if(p!==null){const T=p.array;x=p.version;for(let y=0,b=T.length;y<b;y+=3){const S=T[y+0],E=T[y+1],v=T[y+2];d.push(S,E,E,v,v,S)}}else if(g!==void 0){const T=g.array;x=g.version;for(let y=0,b=T.length/3-1;y<b;y+=3){const S=y+0,E=y+1,v=y+2;d.push(S,E,E,v,v,S)}}else return;const m=new(qd(d)?Qd:Jd)(d,1);m.version=x;const f=s.get(h);f&&t.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function N_(n,t,e){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,p){n.drawElements(i,p,s,d*o),e.update(p,i,1)}function l(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,d*o,g),e.update(p,i,g))}function u(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,i,1)}function h(d,p,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,x,0,g);let f=0;for(let T=0;T<g;T++)f+=p[T];for(let T=0;T<x.length;T++)e.update(f,i,x[T])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function F_(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function O_(n,t,e){const i=new WeakMap,r=new fe;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let R=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",R)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let b=a.attributes.position.count*y,S=1;b>t.maxTextureSize&&(S=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const E=new Float32Array(b*S*4*h),v=new Kd(E,b,S,h);v.type=Un,v.needsUpdate=!0;const A=y*4;for(let _=0;_<h;_++){const M=m[_],P=f[_],I=T[_],U=b*S*4*_;for(let V=0;V<M.count;V++){const B=V*A;p===!0&&(r.fromBufferAttribute(M,V),E[U+B+0]=r.x,E[U+B+1]=r.y,E[U+B+2]=r.z,E[U+B+3]=0),g===!0&&(r.fromBufferAttribute(P,V),E[U+B+4]=r.x,E[U+B+5]=r.y,E[U+B+6]=r.z,E[U+B+7]=0),x===!0&&(r.fromBufferAttribute(I,V),E[U+B+8]=r.x,E[U+B+9]=r.y,E[U+B+10]=r.z,E[U+B+11]=I.itemSize===4?r.w:1)}}d={count:h,texture:v,size:new $t(b,S)},i.set(a,d),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];const g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function B_(n,t,e,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=t.get(c,u);if(r.get(h)!==l&&(t.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class of extends Le{constructor(t,e,i,r,s,o,a,c,l,u=gr){if(u!==gr&&u!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===gr&&(i=zi),i===void 0&&u===Tr&&(i=br),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:qe,this.minFilter=c!==void 0?c:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const af=new Le,ku=new of(1,1),cf=new Kd,lf=new Em,uf=new nf,Gu=[],Hu=[],Vu=new Float32Array(16),Wu=new Float32Array(9),Xu=new Float32Array(4);function Nr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Gu[r];if(s===void 0&&(s=new Float32Array(r),Gu[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function ye(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ee(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function $o(n,t){let e=Hu[t];e===void 0&&(e=new Int32Array(t),Hu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function z_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function k_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;n.uniform2fv(this.addr,t),Ee(e,t)}}function G_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;n.uniform3fv(this.addr,t),Ee(e,t)}}function H_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;n.uniform4fv(this.addr,t),Ee(e,t)}}function V_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,i))return;Xu.set(i),n.uniformMatrix2fv(this.addr,!1,Xu),Ee(e,i)}}function W_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,i))return;Wu.set(i),n.uniformMatrix3fv(this.addr,!1,Wu),Ee(e,i)}}function X_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,i))return;Vu.set(i),n.uniformMatrix4fv(this.addr,!1,Vu),Ee(e,i)}}function Y_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function q_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;n.uniform2iv(this.addr,t),Ee(e,t)}}function $_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;n.uniform3iv(this.addr,t),Ee(e,t)}}function K_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;n.uniform4iv(this.addr,t),Ee(e,t)}}function j_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Z_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;n.uniform2uiv(this.addr,t),Ee(e,t)}}function J_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;n.uniform3uiv(this.addr,t),Ee(e,t)}}function Q_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;n.uniform4uiv(this.addr,t),Ee(e,t)}}function tx(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(ku.compareFunction=Yd,s=ku):s=af,e.setTexture2D(t||s,r)}function ex(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||lf,r)}function nx(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||uf,r)}function ix(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||cf,r)}function rx(n){switch(n){case 5126:return z_;case 35664:return k_;case 35665:return G_;case 35666:return H_;case 35674:return V_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return Y_;case 35667:case 35671:return q_;case 35668:case 35672:return $_;case 35669:case 35673:return K_;case 5125:return j_;case 36294:return Z_;case 36295:return J_;case 36296:return Q_;case 35678:case 36198:case 36298:case 36306:case 35682:return tx;case 35679:case 36299:case 36307:return ex;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return ix}}function sx(n,t){n.uniform1fv(this.addr,t)}function ox(n,t){const e=Nr(t,this.size,2);n.uniform2fv(this.addr,e)}function ax(n,t){const e=Nr(t,this.size,3);n.uniform3fv(this.addr,e)}function cx(n,t){const e=Nr(t,this.size,4);n.uniform4fv(this.addr,e)}function lx(n,t){const e=Nr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function ux(n,t){const e=Nr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function hx(n,t){const e=Nr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function dx(n,t){n.uniform1iv(this.addr,t)}function fx(n,t){n.uniform2iv(this.addr,t)}function px(n,t){n.uniform3iv(this.addr,t)}function mx(n,t){n.uniform4iv(this.addr,t)}function gx(n,t){n.uniform1uiv(this.addr,t)}function _x(n,t){n.uniform2uiv(this.addr,t)}function xx(n,t){n.uniform3uiv(this.addr,t)}function vx(n,t){n.uniform4uiv(this.addr,t)}function Mx(n,t,e){const i=this.cache,r=t.length,s=$o(e,r);ye(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||af,s[o])}function Sx(n,t,e){const i=this.cache,r=t.length,s=$o(e,r);ye(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||lf,s[o])}function yx(n,t,e){const i=this.cache,r=t.length,s=$o(e,r);ye(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||uf,s[o])}function Ex(n,t,e){const i=this.cache,r=t.length,s=$o(e,r);ye(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||cf,s[o])}function bx(n){switch(n){case 5126:return sx;case 35664:return ox;case 35665:return ax;case 35666:return cx;case 35674:return lx;case 35675:return ux;case 35676:return hx;case 5124:case 35670:return dx;case 35667:case 35671:return fx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return gx;case 36294:return _x;case 36295:return xx;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return Mx;case 35679:case 36299:case 36307:return Sx;case 35680:case 36300:case 36308:case 36293:return yx;case 36289:case 36303:case 36311:case 36292:return Ex}}class Tx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=rx(e.type)}}class wx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=bx(e.type)}}class Ax{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const Fa=/(\w+)(\])?(\[|\.)?/g;function Yu(n,t){n.seq.push(t),n.map[t.id]=t}function Rx(n,t,e){const i=n.name,r=i.length;for(Fa.lastIndex=0;;){const s=Fa.exec(i),o=Fa.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Yu(e,l===void 0?new Tx(a,n,t):new wx(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new Ax(a),Yu(e,h)),e=h}}}class _o{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Rx(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function qu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Cx=37297;let Px=0;function Lx(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function Ix(n){const t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(n);let i;switch(t===e?i="":t===Fo&&e===No?i="LinearDisplayP3ToLinearSRGB":t===No&&e===Fo&&(i="LinearSRGBToLinearDisplayP3"),n){case mi:case Yo:return[i,"LinearTransferOETF"];case ln:case Ll:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function $u(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Lx(n.getShaderSource(t),o)}else return r}function Dx(n,t){const e=Ix(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Ux(n,t){let e;switch(t){case jp:e="Linear";break;case Zp:e="Reinhard";break;case Jp:e="Cineon";break;case Dd:e="ACESFilmic";break;case tm:e="AgX";break;case em:e="Neutral";break;case Qp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ys=new k;function Nx(){Zt.getLuminanceCoefficients(Ys);const n=Ys.x.toFixed(4),t=Ys.y.toFixed(4),e=Ys.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zr).join(`
`)}function Ox(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Bx(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Zr(n){return n!==""}function Ku(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ju(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zx=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(n){return n.replace(zx,Gx)}const kx=new Map;function Gx(n,t){let e=Ut[t];if(e===void 0){const i=kx.get(t);if(i!==void 0)e=Ut[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return el(e)}const Hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zu(n){return n.replace(Hx,Vx)}function Vx(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ju(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Wx(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Pd?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ld?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Hn&&(t="SHADOWMAP_TYPE_VSM"),t}function Xx(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case yr:case Er:t="ENVMAP_TYPE_CUBE";break;case Xo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Yx(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Er:t="ENVMAP_MODE_REFRACTION";break}return t}function qx(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Id:t="ENVMAP_BLENDING_MULTIPLY";break;case $p:t="ENVMAP_BLENDING_MIX";break;case Kp:t="ENVMAP_BLENDING_ADD";break}return t}function $x(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Kx(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Wx(e),l=Xx(e),u=Yx(e),h=qx(e),d=$x(e),p=Fx(e),g=Ox(s),x=r.createProgram();let m,f,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zr).join(`
`),f.length>0&&(f+=`
`)):(m=[Ju(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zr).join(`
`),f=[Ju(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?Ut.tonemapping_pars_fragment:"",e.toneMapping!==li?Ux("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,Dx("linearToOutputTexel",e.outputColorSpace),Nx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zr).join(`
`)),o=el(o),o=Ku(o,e),o=ju(o,e),a=el(a),a=Ku(a,e),a=ju(a,e),o=Zu(o),a=Zu(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===mu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=T+m+o,b=T+f+a,S=qu(r,r.VERTEX_SHADER,y),E=qu(r,r.FRAGMENT_SHADER,b);r.attachShader(x,S),r.attachShader(x,E),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function v(M){if(n.debug.checkShaderErrors){const P=r.getProgramInfoLog(x).trim(),I=r.getShaderInfoLog(S).trim(),U=r.getShaderInfoLog(E).trim();let V=!0,B=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,S,E);else{const Y=$u(r,S,"vertex"),N=$u(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+P+`
`+Y+`
`+N)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(I===""||U==="")&&(B=!1);B&&(M.diagnostics={runnable:V,programLog:P,vertexShader:{log:I,prefix:m},fragmentShader:{log:U,prefix:f}})}r.deleteShader(S),r.deleteShader(E),A=new _o(r,x),R=Bx(r,x)}let A;this.getUniforms=function(){return A===void 0&&v(this),A};let R;this.getAttributes=function(){return R===void 0&&v(this),R};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(x,Cx)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Px++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=E,this}let jx=0;class Zx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Jx(t),e.set(t,i)),i}}class Jx{constructor(t){this.id=jx++,this.code=t,this.usedTimes=0}}function Qx(n,t,e,i,r,s,o){const a=new jd,c=new Zx,l=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,p=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function f(_,M,P,I,U){const V=I.fog,B=U.geometry,Y=_.isMeshStandardMaterial?I.environment:null,N=(_.isMeshStandardMaterial?e:t).get(_.envMap||Y),q=N&&N.mapping===Xo?N.image.height:null,nt=x[_.type];_.precision!==null&&(g=r.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const ot=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Dt=ot!==void 0?ot.length:0;let zt=0;B.morphAttributes.position!==void 0&&(zt=1),B.morphAttributes.normal!==void 0&&(zt=2),B.morphAttributes.color!==void 0&&(zt=3);let $,et,gt,ut;if(nt){const Ge=Pn[nt];$=Ge.vertexShader,et=Ge.fragmentShader}else $=_.vertexShader,et=_.fragmentShader,c.update(_),gt=c.getVertexShaderID(_),ut=c.getFragmentShaderID(_);const At=n.getRenderTarget(),yt=U.isInstancedMesh===!0,Bt=U.isBatchedMesh===!0,ee=!!_.map,Vt=!!_.matcap,D=!!N,Ze=!!_.aoMap,kt=!!_.lightMap,Xt=!!_.bumpMap,Rt=!!_.normalMap,ce=!!_.displacementMap,Lt=!!_.emissiveMap,L=!!_.metalnessMap,w=!!_.roughnessMap,G=_.anisotropy>0,j=_.clearcoat>0,tt=_.dispersion>0,K=_.iridescence>0,vt=_.sheen>0,at=_.transmission>0,ft=G&&!!_.anisotropyMap,Yt=j&&!!_.clearcoatMap,it=j&&!!_.clearcoatNormalMap,pt=j&&!!_.clearcoatRoughnessMap,Ct=K&&!!_.iridescenceMap,Pt=K&&!!_.iridescenceThicknessMap,mt=vt&&!!_.sheenColorMap,Gt=vt&&!!_.sheenRoughnessMap,It=!!_.specularMap,se=!!_.specularColorMap,F=!!_.specularIntensityMap,ht=at&&!!_.transmissionMap,X=at&&!!_.thicknessMap,J=!!_.gradientMap,ct=!!_.alphaMap,dt=_.alphaTest>0,Wt=!!_.alphaHash,_e=!!_.extensions;let ke=li;_.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(ke=n.toneMapping);const qt={shaderID:nt,shaderType:_.type,shaderName:_.name,vertexShader:$,fragmentShader:et,defines:_.defines,customVertexShaderID:gt,customFragmentShaderID:ut,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Bt,batchingColor:Bt&&U._colorsTexture!==null,instancing:yt,instancingColor:yt&&U.instanceColor!==null,instancingMorph:yt&&U.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:At===null?n.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:mi,alphaToCoverage:!!_.alphaToCoverage,map:ee,matcap:Vt,envMap:D,envMapMode:D&&N.mapping,envMapCubeUVHeight:q,aoMap:Ze,lightMap:kt,bumpMap:Xt,normalMap:Rt,displacementMap:p&&ce,emissiveMap:Lt,normalMapObjectSpace:Rt&&_.normalMapType===rm,normalMapTangentSpace:Rt&&_.normalMapType===Xd,metalnessMap:L,roughnessMap:w,anisotropy:G,anisotropyMap:ft,clearcoat:j,clearcoatMap:Yt,clearcoatNormalMap:it,clearcoatRoughnessMap:pt,dispersion:tt,iridescence:K,iridescenceMap:Ct,iridescenceThicknessMap:Pt,sheen:vt,sheenColorMap:mt,sheenRoughnessMap:Gt,specularMap:It,specularColorMap:se,specularIntensityMap:F,transmission:at,transmissionMap:ht,thicknessMap:X,gradientMap:J,opaque:_.transparent===!1&&_.blending===mr&&_.alphaToCoverage===!1,alphaMap:ct,alphaTest:dt,alphaHash:Wt,combine:_.combine,mapUv:ee&&m(_.map.channel),aoMapUv:Ze&&m(_.aoMap.channel),lightMapUv:kt&&m(_.lightMap.channel),bumpMapUv:Xt&&m(_.bumpMap.channel),normalMapUv:Rt&&m(_.normalMap.channel),displacementMapUv:ce&&m(_.displacementMap.channel),emissiveMapUv:Lt&&m(_.emissiveMap.channel),metalnessMapUv:L&&m(_.metalnessMap.channel),roughnessMapUv:w&&m(_.roughnessMap.channel),anisotropyMapUv:ft&&m(_.anisotropyMap.channel),clearcoatMapUv:Yt&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:it&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&m(_.sheenRoughnessMap.channel),specularMapUv:It&&m(_.specularMap.channel),specularColorMapUv:se&&m(_.specularColorMap.channel),specularIntensityMapUv:F&&m(_.specularIntensityMap.channel),transmissionMapUv:ht&&m(_.transmissionMap.channel),thicknessMapUv:X&&m(_.thicknessMap.channel),alphaMapUv:ct&&m(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Rt||G),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(ee||ct),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Dt,morphTextureStride:zt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ke,decodeVideoTexture:ee&&_.map.isVideoTexture===!0&&Zt.getTransfer(_.map.colorSpace)===ue,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===he,flipSided:_.side===Fe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:_e&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&_.extensions.multiDraw===!0||Bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return qt.vertexUv1s=l.has(1),qt.vertexUv2s=l.has(2),qt.vertexUv3s=l.has(3),l.clear(),qt}function T(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)M.push(P),M.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(y(M,_),b(M,_),M.push(n.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function y(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function b(_,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),_.push(a.mask)}function S(_){const M=x[_.type];let P;if(M){const I=Pn[M];P=Fm.clone(I.uniforms)}else P=_.uniforms;return P}function E(_,M){let P;for(let I=0,U=u.length;I<U;I++){const V=u[I];if(V.cacheKey===M){P=V,++P.usedTimes;break}}return P===void 0&&(P=new Kx(n,M,_,s),u.push(P)),P}function v(_){if(--_.usedTimes===0){const M=u.indexOf(_);u[M]=u[u.length-1],u.pop(),_.destroy()}}function A(_){c.remove(_)}function R(){c.dispose()}return{getParameters:f,getProgramCacheKey:T,getUniforms:S,acquireProgram:E,releaseProgram:v,releaseShaderCache:A,programs:u,dispose:R}}function tv(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function ev(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Qu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function th(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(h,d,p,g,x,m){let f=n[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},n[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=x,f.group=m),t++,f}function a(h,d,p,g,x,m){const f=o(h,d,p,g,x,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):e.push(f)}function c(h,d,p,g,x,m){const f=o(h,d,p,g,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):e.unshift(f)}function l(h,d){e.length>1&&e.sort(h||ev),i.length>1&&i.sort(d||Qu),r.length>1&&r.sort(d||Qu)}function u(){for(let h=t,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function nv(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new th,n.set(i,[o])):r>=s.length?(o=new th,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function iv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Z};break;case"SpotLight":e={position:new k,direction:new k,color:new Z,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Z,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Z,groundColor:new Z};break;case"RectAreaLight":e={color:new Z,position:new k,halfWidth:new k,halfHeight:new k};break}return n[t.id]=e,e}}}function rv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let sv=0;function ov(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function av(n){const t=new iv,e=rv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new k);const r=new k,s=new Qt,o=new Qt;function a(l){let u=0,h=0,d=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,T=0,y=0,b=0,S=0,E=0,v=0;l.sort(ov);for(let R=0,_=l.length;R<_;R++){const M=l[R],P=M.color,I=M.intensity,U=M.distance,V=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)u+=P.r*I,h+=P.g*I,d+=P.b*I;else if(M.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(M.sh.coefficients[B],I);v++}else if(M.isDirectionalLight){const B=t.get(M);if(B.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const Y=M.shadow,N=e.get(M);N.shadowIntensity=Y.intensity,N.shadowBias=Y.bias,N.shadowNormalBias=Y.normalBias,N.shadowRadius=Y.radius,N.shadowMapSize=Y.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=V,i.directionalShadowMatrix[p]=M.shadow.matrix,T++}i.directional[p]=B,p++}else if(M.isSpotLight){const B=t.get(M);B.position.setFromMatrixPosition(M.matrixWorld),B.color.copy(P).multiplyScalar(I),B.distance=U,B.coneCos=Math.cos(M.angle),B.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),B.decay=M.decay,i.spot[x]=B;const Y=M.shadow;if(M.map&&(i.spotLightMap[S]=M.map,S++,Y.updateMatrices(M),M.castShadow&&E++),i.spotLightMatrix[x]=Y.matrix,M.castShadow){const N=e.get(M);N.shadowIntensity=Y.intensity,N.shadowBias=Y.bias,N.shadowNormalBias=Y.normalBias,N.shadowRadius=Y.radius,N.shadowMapSize=Y.mapSize,i.spotShadow[x]=N,i.spotShadowMap[x]=V,b++}x++}else if(M.isRectAreaLight){const B=t.get(M);B.color.copy(P).multiplyScalar(I),B.halfWidth.set(M.width*.5,0,0),B.halfHeight.set(0,M.height*.5,0),i.rectArea[m]=B,m++}else if(M.isPointLight){const B=t.get(M);if(B.color.copy(M.color).multiplyScalar(M.intensity),B.distance=M.distance,B.decay=M.decay,M.castShadow){const Y=M.shadow,N=e.get(M);N.shadowIntensity=Y.intensity,N.shadowBias=Y.bias,N.shadowNormalBias=Y.normalBias,N.shadowRadius=Y.radius,N.shadowMapSize=Y.mapSize,N.shadowCameraNear=Y.camera.near,N.shadowCameraFar=Y.camera.far,i.pointShadow[g]=N,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=M.shadow.matrix,y++}i.point[g]=B,g++}else if(M.isHemisphereLight){const B=t.get(M);B.skyColor.copy(M.color).multiplyScalar(I),B.groundColor.copy(M.groundColor).multiplyScalar(I),i.hemi[f]=B,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const A=i.hash;(A.directionalLength!==p||A.pointLength!==g||A.spotLength!==x||A.rectAreaLength!==m||A.hemiLength!==f||A.numDirectionalShadows!==T||A.numPointShadows!==y||A.numSpotShadows!==b||A.numSpotMaps!==S||A.numLightProbes!==v)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=b+S-E,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=v,A.directionalLength=p,A.pointLength=g,A.spotLength=x,A.rectAreaLength=m,A.hemiLength=f,A.numDirectionalShadows=T,A.numPointShadows=y,A.numSpotShadows=b,A.numSpotMaps=S,A.numLightProbes=v,i.version=sv++)}function c(l,u){let h=0,d=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let f=0,T=l.length;f<T;f++){const y=l[f];if(y.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),h++}else if(y.isSpotLight){const b=i.spot[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const b=i.hemi[x];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:i}}function eh(n){const t=new av(n),e=[],i=[];function r(u){l.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function cv(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new eh(n),t.set(r,[a])):s>=o.length?(a=new eh(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class hf extends fs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=im,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class lv extends fs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const uv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hv=`uniform sampler2D shadow_pass;
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
}`;function dv(n,t,e){let i=new Il;const r=new $t,s=new $t,o=new fe,a=new hf({depthPacking:Wd}),c=new lv,l={},u=e.maxTextureSize,h={[di]:Fe,[Fe]:di,[he]:he},d=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:uv,fragmentShader:hv}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new mn;g.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ot(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pd;let f=this.type;this.render=function(E,v,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const R=n.getRenderTarget(),_=n.getActiveCubeFace(),M=n.getActiveMipmapLevel(),P=n.state;P.setBlending(ci),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const I=f!==Hn&&this.type===Hn,U=f===Hn&&this.type!==Hn;for(let V=0,B=E.length;V<B;V++){const Y=E[V],N=Y.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const q=N.getFrameExtents();if(r.multiply(q),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,N.mapSize.y=s.y)),N.map===null||I===!0||U===!0){const ot=this.type!==Hn?{minFilter:qe,magFilter:qe}:{};N.map!==null&&N.map.dispose(),N.map=new ki(r.x,r.y,ot),N.map.texture.name=Y.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const nt=N.getViewportCount();for(let ot=0;ot<nt;ot++){const Dt=N.getViewport(ot);o.set(s.x*Dt.x,s.y*Dt.y,s.x*Dt.z,s.y*Dt.w),P.viewport(o),N.updateMatrices(Y,ot),i=N.getFrustum(),b(v,A,N.camera,Y,this.type)}N.isPointLightShadow!==!0&&this.type===Hn&&T(N,A),N.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(R,_,M)};function T(E,v){const A=t.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ki(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(v,null,A,d,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(v,null,A,p,x,null)}function y(E,v,A,R){let _=null;const M=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(M!==void 0)_=M;else if(_=A.isPointLight===!0?c:a,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){const P=_.uuid,I=v.uuid;let U=l[P];U===void 0&&(U={},l[P]=U);let V=U[I];V===void 0&&(V=_.clone(),U[I]=V,v.addEventListener("dispose",S)),_=V}if(_.visible=v.visible,_.wireframe=v.wireframe,R===Hn?_.side=v.shadowSide!==null?v.shadowSide:v.side:_.side=v.shadowSide!==null?v.shadowSide:h[v.side],_.alphaMap=v.alphaMap,_.alphaTest=v.alphaTest,_.map=v.map,_.clipShadows=v.clipShadows,_.clippingPlanes=v.clippingPlanes,_.clipIntersection=v.clipIntersection,_.displacementMap=v.displacementMap,_.displacementScale=v.displacementScale,_.displacementBias=v.displacementBias,_.wireframeLinewidth=v.wireframeLinewidth,_.linewidth=v.linewidth,A.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const P=n.properties.get(_);P.light=A}return _}function b(E,v,A,R,_){if(E.visible===!1)return;if(E.layers.test(v.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===Hn)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);const I=t.update(E),U=E.material;if(Array.isArray(U)){const V=I.groups;for(let B=0,Y=V.length;B<Y;B++){const N=V[B],q=U[N.materialIndex];if(q&&q.visible){const nt=y(E,q,R,_);E.onBeforeShadow(n,E,v,A,I,nt,N),n.renderBufferDirect(A,null,I,nt,E,N),E.onAfterShadow(n,E,v,A,I,nt,N)}}}else if(U.visible){const V=y(E,U,R,_);E.onBeforeShadow(n,E,v,A,I,V,null),n.renderBufferDirect(A,null,I,V,E,null),E.onAfterShadow(n,E,v,A,I,V,null)}}const P=E.children;for(let I=0,U=P.length;I<U;I++)b(P[I],v,A,R,_)}function S(E){E.target.removeEventListener("dispose",S);for(const A in l){const R=l[A],_=E.target.uuid;_ in R&&(R[_].dispose(),delete R[_])}}}const fv={[xc]:vc,[Mc]:Ec,[Sc]:bc,[Sr]:yc,[vc]:xc,[Ec]:Mc,[bc]:Sc,[yc]:Sr};function pv(n){function t(){let F=!1;const ht=new fe;let X=null;const J=new fe(0,0,0,0);return{setMask:function(ct){X!==ct&&!F&&(n.colorMask(ct,ct,ct,ct),X=ct)},setLocked:function(ct){F=ct},setClear:function(ct,dt,Wt,_e,ke){ke===!0&&(ct*=_e,dt*=_e,Wt*=_e),ht.set(ct,dt,Wt,_e),J.equals(ht)===!1&&(n.clearColor(ct,dt,Wt,_e),J.copy(ht))},reset:function(){F=!1,X=null,J.set(-1,0,0,0)}}}function e(){let F=!1,ht=!1,X=null,J=null,ct=null;return{setReversed:function(dt){ht=dt},setTest:function(dt){dt?gt(n.DEPTH_TEST):ut(n.DEPTH_TEST)},setMask:function(dt){X!==dt&&!F&&(n.depthMask(dt),X=dt)},setFunc:function(dt){if(ht&&(dt=fv[dt]),J!==dt){switch(dt){case xc:n.depthFunc(n.NEVER);break;case vc:n.depthFunc(n.ALWAYS);break;case Mc:n.depthFunc(n.LESS);break;case Sr:n.depthFunc(n.LEQUAL);break;case Sc:n.depthFunc(n.EQUAL);break;case yc:n.depthFunc(n.GEQUAL);break;case Ec:n.depthFunc(n.GREATER);break;case bc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=dt}},setLocked:function(dt){F=dt},setClear:function(dt){ct!==dt&&(n.clearDepth(dt),ct=dt)},reset:function(){F=!1,X=null,J=null,ct=null}}}function i(){let F=!1,ht=null,X=null,J=null,ct=null,dt=null,Wt=null,_e=null,ke=null;return{setTest:function(qt){F||(qt?gt(n.STENCIL_TEST):ut(n.STENCIL_TEST))},setMask:function(qt){ht!==qt&&!F&&(n.stencilMask(qt),ht=qt)},setFunc:function(qt,Ge,Nn){(X!==qt||J!==Ge||ct!==Nn)&&(n.stencilFunc(qt,Ge,Nn),X=qt,J=Ge,ct=Nn)},setOp:function(qt,Ge,Nn){(dt!==qt||Wt!==Ge||_e!==Nn)&&(n.stencilOp(qt,Ge,Nn),dt=qt,Wt=Ge,_e=Nn)},setLocked:function(qt){F=qt},setClear:function(qt){ke!==qt&&(n.clearStencil(qt),ke=qt)},reset:function(){F=!1,ht=null,X=null,J=null,ct=null,dt=null,Wt=null,_e=null,ke=null}}}const r=new t,s=new e,o=new i,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],p=null,g=!1,x=null,m=null,f=null,T=null,y=null,b=null,S=null,E=new Z(0,0,0),v=0,A=!1,R=null,_=null,M=null,P=null,I=null;const U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,B=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Y)[1]),V=B>=1):Y.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),V=B>=2);let N=null,q={};const nt=n.getParameter(n.SCISSOR_BOX),ot=n.getParameter(n.VIEWPORT),Dt=new fe().fromArray(nt),zt=new fe().fromArray(ot);function $(F,ht,X,J){const ct=new Uint8Array(4),dt=n.createTexture();n.bindTexture(F,dt),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Wt=0;Wt<X;Wt++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ht,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,ct):n.texImage2D(ht+Wt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ct);return dt}const et={};et[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),et[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),et[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),gt(n.DEPTH_TEST),s.setFunc(Sr),kt(!1),Xt(uu),gt(n.CULL_FACE),D(ci);function gt(F){l[F]!==!0&&(n.enable(F),l[F]=!0)}function ut(F){l[F]!==!1&&(n.disable(F),l[F]=!1)}function At(F,ht){return u[F]!==ht?(n.bindFramebuffer(F,ht),u[F]=ht,F===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ht),F===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ht),!0):!1}function yt(F,ht){let X=d,J=!1;if(F){X=h.get(ht),X===void 0&&(X=[],h.set(ht,X));const ct=F.textures;if(X.length!==ct.length||X[0]!==n.COLOR_ATTACHMENT0){for(let dt=0,Wt=ct.length;dt<Wt;dt++)X[dt]=n.COLOR_ATTACHMENT0+dt;X.length=ct.length,J=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,J=!0);J&&n.drawBuffers(X)}function Bt(F){return p!==F?(n.useProgram(F),p=F,!0):!1}const ee={[Ci]:n.FUNC_ADD,[Lp]:n.FUNC_SUBTRACT,[Ip]:n.FUNC_REVERSE_SUBTRACT};ee[Dp]=n.MIN,ee[Up]=n.MAX;const Vt={[Np]:n.ZERO,[Fp]:n.ONE,[Op]:n.SRC_COLOR,[gc]:n.SRC_ALPHA,[Vp]:n.SRC_ALPHA_SATURATE,[Gp]:n.DST_COLOR,[zp]:n.DST_ALPHA,[Bp]:n.ONE_MINUS_SRC_COLOR,[_c]:n.ONE_MINUS_SRC_ALPHA,[Hp]:n.ONE_MINUS_DST_COLOR,[kp]:n.ONE_MINUS_DST_ALPHA,[Wp]:n.CONSTANT_COLOR,[Xp]:n.ONE_MINUS_CONSTANT_COLOR,[Yp]:n.CONSTANT_ALPHA,[qp]:n.ONE_MINUS_CONSTANT_ALPHA};function D(F,ht,X,J,ct,dt,Wt,_e,ke,qt){if(F===ci){g===!0&&(ut(n.BLEND),g=!1);return}if(g===!1&&(gt(n.BLEND),g=!0),F!==Pp){if(F!==x||qt!==A){if((m!==Ci||y!==Ci)&&(n.blendEquation(n.FUNC_ADD),m=Ci,y=Ci),qt)switch(F){case mr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mc:n.blendFunc(n.ONE,n.ONE);break;case hu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case du:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case mr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case hu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case du:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}f=null,T=null,b=null,S=null,E.set(0,0,0),v=0,x=F,A=qt}return}ct=ct||ht,dt=dt||X,Wt=Wt||J,(ht!==m||ct!==y)&&(n.blendEquationSeparate(ee[ht],ee[ct]),m=ht,y=ct),(X!==f||J!==T||dt!==b||Wt!==S)&&(n.blendFuncSeparate(Vt[X],Vt[J],Vt[dt],Vt[Wt]),f=X,T=J,b=dt,S=Wt),(_e.equals(E)===!1||ke!==v)&&(n.blendColor(_e.r,_e.g,_e.b,ke),E.copy(_e),v=ke),x=F,A=!1}function Ze(F,ht){F.side===he?ut(n.CULL_FACE):gt(n.CULL_FACE);let X=F.side===Fe;ht&&(X=!X),kt(X),F.blending===mr&&F.transparent===!1?D(ci):D(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),r.setMask(F.colorWrite);const J=F.stencilWrite;o.setTest(J),J&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ce(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?gt(n.SAMPLE_ALPHA_TO_COVERAGE):ut(n.SAMPLE_ALPHA_TO_COVERAGE)}function kt(F){R!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),R=F)}function Xt(F){F!==Rp?(gt(n.CULL_FACE),F!==_&&(F===uu?n.cullFace(n.BACK):F===Cp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ut(n.CULL_FACE),_=F}function Rt(F){F!==M&&(V&&n.lineWidth(F),M=F)}function ce(F,ht,X){F?(gt(n.POLYGON_OFFSET_FILL),(P!==ht||I!==X)&&(n.polygonOffset(ht,X),P=ht,I=X)):ut(n.POLYGON_OFFSET_FILL)}function Lt(F){F?gt(n.SCISSOR_TEST):ut(n.SCISSOR_TEST)}function L(F){F===void 0&&(F=n.TEXTURE0+U-1),N!==F&&(n.activeTexture(F),N=F)}function w(F,ht,X){X===void 0&&(N===null?X=n.TEXTURE0+U-1:X=N);let J=q[X];J===void 0&&(J={type:void 0,texture:void 0},q[X]=J),(J.type!==F||J.texture!==ht)&&(N!==X&&(n.activeTexture(X),N=X),n.bindTexture(F,ht||et[F]),J.type=F,J.texture=ht)}function G(){const F=q[N];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function tt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function vt(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function at(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Yt(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pt(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ct(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pt(F){Dt.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Dt.copy(F))}function mt(F){zt.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),zt.copy(F))}function Gt(F,ht){let X=c.get(ht);X===void 0&&(X=new WeakMap,c.set(ht,X));let J=X.get(F);J===void 0&&(J=n.getUniformBlockIndex(ht,F.name),X.set(F,J))}function It(F,ht){const J=c.get(ht).get(F);a.get(ht)!==J&&(n.uniformBlockBinding(ht,J,F.__bindingPointIndex),a.set(ht,J))}function se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},N=null,q={},u={},h=new WeakMap,d=[],p=null,g=!1,x=null,m=null,f=null,T=null,y=null,b=null,S=null,E=new Z(0,0,0),v=0,A=!1,R=null,_=null,M=null,P=null,I=null,Dt.set(0,0,n.canvas.width,n.canvas.height),zt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:gt,disable:ut,bindFramebuffer:At,drawBuffers:yt,useProgram:Bt,setBlending:D,setMaterial:Ze,setFlipSided:kt,setCullFace:Xt,setLineWidth:Rt,setPolygonOffset:ce,setScissorTest:Lt,activeTexture:L,bindTexture:w,unbindTexture:G,compressedTexImage2D:j,compressedTexImage3D:tt,texImage2D:pt,texImage3D:Ct,updateUBOMapping:Gt,uniformBlockBinding:It,texStorage2D:Yt,texStorage3D:it,texSubImage2D:K,texSubImage3D:vt,compressedTexSubImage2D:at,compressedTexSubImage3D:ft,scissor:Pt,viewport:mt,reset:se}}function nh(n,t,e,i){const r=mv(i);switch(e){case Bd:return n*t;case kd:return n*t;case Gd:return n*t*2;case Al:return n*t/r.components*r.byteLength;case Rl:return n*t/r.components*r.byteLength;case Hd:return n*t*2/r.components*r.byteLength;case Cl:return n*t*2/r.components*r.byteLength;case zd:return n*t*3/r.components*r.byteLength;case bn:return n*t*4/r.components*r.byteLength;case Pl:return n*t*4/r.components*r.byteLength;case uo:case ho:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case fo:case po:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Cc:case Lc:return Math.max(n,16)*Math.max(t,8)/4;case Rc:case Pc:return Math.max(n,8)*Math.max(t,8)/2;case Ic:case Dc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Uc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Nc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Fc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Oc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Bc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case zc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case kc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Gc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Hc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Vc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Wc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Xc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Yc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case qc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case $c:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case mo:case Kc:case jc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Vd:case Zc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Jc:case Qc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mv(n){switch(n){case qn:case Nd:return{byteLength:1,components:1};case cs:case Fd:case hs:return{byteLength:2,components:1};case Tl:case wl:return{byteLength:2,components:4};case zi:case bl:case Un:return{byteLength:4,components:1};case Od:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function gv(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $t,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,w){return p?new OffscreenCanvas(L,w):ls("canvas")}function x(L,w,G){let j=1;const tt=Lt(L);if((tt.width>G||tt.height>G)&&(j=G/Math.max(tt.width,tt.height)),j<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const K=Math.floor(j*tt.width),vt=Math.floor(j*tt.height);h===void 0&&(h=g(K,vt));const at=w?g(K,vt):h;return at.width=K,at.height=vt,at.getContext("2d").drawImage(L,0,0,K,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+K+"x"+vt+")."),at}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),L;return L}function m(L){return L.generateMipmaps&&L.minFilter!==qe&&L.minFilter!==Sn}function f(L){n.generateMipmap(L)}function T(L,w,G,j,tt=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let K=w;if(w===n.RED&&(G===n.FLOAT&&(K=n.R32F),G===n.HALF_FLOAT&&(K=n.R16F),G===n.UNSIGNED_BYTE&&(K=n.R8)),w===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.R8UI),G===n.UNSIGNED_SHORT&&(K=n.R16UI),G===n.UNSIGNED_INT&&(K=n.R32UI),G===n.BYTE&&(K=n.R8I),G===n.SHORT&&(K=n.R16I),G===n.INT&&(K=n.R32I)),w===n.RG&&(G===n.FLOAT&&(K=n.RG32F),G===n.HALF_FLOAT&&(K=n.RG16F),G===n.UNSIGNED_BYTE&&(K=n.RG8)),w===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RG8UI),G===n.UNSIGNED_SHORT&&(K=n.RG16UI),G===n.UNSIGNED_INT&&(K=n.RG32UI),G===n.BYTE&&(K=n.RG8I),G===n.SHORT&&(K=n.RG16I),G===n.INT&&(K=n.RG32I)),w===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RGB8UI),G===n.UNSIGNED_SHORT&&(K=n.RGB16UI),G===n.UNSIGNED_INT&&(K=n.RGB32UI),G===n.BYTE&&(K=n.RGB8I),G===n.SHORT&&(K=n.RGB16I),G===n.INT&&(K=n.RGB32I)),w===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),G===n.UNSIGNED_INT&&(K=n.RGBA32UI),G===n.BYTE&&(K=n.RGBA8I),G===n.SHORT&&(K=n.RGBA16I),G===n.INT&&(K=n.RGBA32I)),w===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),w===n.RGBA){const vt=tt?Uo:Zt.getTransfer(j);G===n.FLOAT&&(K=n.RGBA32F),G===n.HALF_FLOAT&&(K=n.RGBA16F),G===n.UNSIGNED_BYTE&&(K=vt===ue?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function y(L,w){let G;return L?w===null||w===zi||w===br?G=n.DEPTH24_STENCIL8:w===Un?G=n.DEPTH32F_STENCIL8:w===cs&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===zi||w===br?G=n.DEPTH_COMPONENT24:w===Un?G=n.DEPTH_COMPONENT32F:w===cs&&(G=n.DEPTH_COMPONENT16),G}function b(L,w){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==qe&&L.minFilter!==Sn?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function S(L){const w=L.target;w.removeEventListener("dispose",S),v(w),w.isVideoTexture&&u.delete(w)}function E(L){const w=L.target;w.removeEventListener("dispose",E),R(w)}function v(L){const w=i.get(L);if(w.__webglInit===void 0)return;const G=L.source,j=d.get(G);if(j){const tt=j[w.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&A(L),Object.keys(j).length===0&&d.delete(G)}i.remove(L)}function A(L){const w=i.get(L);n.deleteTexture(w.__webglTexture);const G=L.source,j=d.get(G);delete j[w.__cacheKey],o.memory.textures--}function R(L){const w=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(w.__webglFramebuffer[j]))for(let tt=0;tt<w.__webglFramebuffer[j].length;tt++)n.deleteFramebuffer(w.__webglFramebuffer[j][tt]);else n.deleteFramebuffer(w.__webglFramebuffer[j]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[j])}else{if(Array.isArray(w.__webglFramebuffer))for(let j=0;j<w.__webglFramebuffer.length;j++)n.deleteFramebuffer(w.__webglFramebuffer[j]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let j=0;j<w.__webglColorRenderbuffer.length;j++)w.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[j]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const G=L.textures;for(let j=0,tt=G.length;j<tt;j++){const K=i.get(G[j]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(G[j])}i.remove(L)}let _=0;function M(){_=0}function P(){const L=_;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),_+=1,L}function I(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function U(L,w){const G=i.get(L);if(L.isVideoTexture&&Rt(L),L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){const j=L.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{zt(G,L,w);return}}e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+w)}function V(L,w){const G=i.get(L);if(L.version>0&&G.__version!==L.version){zt(G,L,w);return}e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+w)}function B(L,w){const G=i.get(L);if(L.version>0&&G.__version!==L.version){zt(G,L,w);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+w)}function Y(L,w){const G=i.get(L);if(L.version>0&&G.__version!==L.version){$(G,L,w);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+w)}const N={[Do]:n.REPEAT,[Di]:n.CLAMP_TO_EDGE,[Ac]:n.MIRRORED_REPEAT},q={[qe]:n.NEAREST,[nm]:n.NEAREST_MIPMAP_NEAREST,[ws]:n.NEAREST_MIPMAP_LINEAR,[Sn]:n.LINEAR,[aa]:n.LINEAR_MIPMAP_NEAREST,[Ui]:n.LINEAR_MIPMAP_LINEAR},nt={[sm]:n.NEVER,[hm]:n.ALWAYS,[om]:n.LESS,[Yd]:n.LEQUAL,[am]:n.EQUAL,[um]:n.GEQUAL,[cm]:n.GREATER,[lm]:n.NOTEQUAL};function ot(L,w){if(w.type===Un&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Sn||w.magFilter===aa||w.magFilter===ws||w.magFilter===Ui||w.minFilter===Sn||w.minFilter===aa||w.minFilter===ws||w.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,N[w.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,N[w.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,N[w.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,q[w.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,q[w.minFilter]),w.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,nt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===qe||w.minFilter!==ws&&w.minFilter!==Ui||w.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(L,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Dt(L,w){let G=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",S));const j=w.source;let tt=d.get(j);tt===void 0&&(tt={},d.set(j,tt));const K=I(w);if(K!==L.__cacheKey){tt[K]===void 0&&(tt[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),tt[K].usedTimes++;const vt=tt[L.__cacheKey];vt!==void 0&&(tt[L.__cacheKey].usedTimes--,vt.usedTimes===0&&A(w)),L.__cacheKey=K,L.__webglTexture=tt[K].texture}return G}function zt(L,w,G){let j=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(j=n.TEXTURE_3D);const tt=Dt(L,w),K=w.source;e.bindTexture(j,L.__webglTexture,n.TEXTURE0+G);const vt=i.get(K);if(K.version!==vt.__version||tt===!0){e.activeTexture(n.TEXTURE0+G);const at=Zt.getPrimaries(Zt.workingColorSpace),ft=w.colorSpace===ai?null:Zt.getPrimaries(w.colorSpace),Yt=w.colorSpace===ai||at===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let it=x(w.image,!1,r.maxTextureSize);it=ce(w,it);const pt=s.convert(w.format,w.colorSpace),Ct=s.convert(w.type);let Pt=T(w.internalFormat,pt,Ct,w.colorSpace,w.isVideoTexture);ot(j,w);let mt;const Gt=w.mipmaps,It=w.isVideoTexture!==!0,se=vt.__version===void 0||tt===!0,F=K.dataReady,ht=b(w,it);if(w.isDepthTexture)Pt=y(w.format===Tr,w.type),se&&(It?e.texStorage2D(n.TEXTURE_2D,1,Pt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,Pt,it.width,it.height,0,pt,Ct,null));else if(w.isDataTexture)if(Gt.length>0){It&&se&&e.texStorage2D(n.TEXTURE_2D,ht,Pt,Gt[0].width,Gt[0].height);for(let X=0,J=Gt.length;X<J;X++)mt=Gt[X],It?F&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,mt.width,mt.height,pt,Ct,mt.data):e.texImage2D(n.TEXTURE_2D,X,Pt,mt.width,mt.height,0,pt,Ct,mt.data);w.generateMipmaps=!1}else It?(se&&e.texStorage2D(n.TEXTURE_2D,ht,Pt,it.width,it.height),F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,it.width,it.height,pt,Ct,it.data)):e.texImage2D(n.TEXTURE_2D,0,Pt,it.width,it.height,0,pt,Ct,it.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){It&&se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ht,Pt,Gt[0].width,Gt[0].height,it.depth);for(let X=0,J=Gt.length;X<J;X++)if(mt=Gt[X],w.format!==bn)if(pt!==null)if(It){if(F)if(w.layerUpdates.size>0){const ct=nh(mt.width,mt.height,w.format,w.type);for(const dt of w.layerUpdates){const Wt=mt.data.subarray(dt*ct/mt.data.BYTES_PER_ELEMENT,(dt+1)*ct/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,dt,mt.width,mt.height,1,pt,Wt,0,0)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,mt.width,mt.height,it.depth,pt,mt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Pt,mt.width,mt.height,it.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?F&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,mt.width,mt.height,it.depth,pt,Ct,mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,X,Pt,mt.width,mt.height,it.depth,0,pt,Ct,mt.data)}else{It&&se&&e.texStorage2D(n.TEXTURE_2D,ht,Pt,Gt[0].width,Gt[0].height);for(let X=0,J=Gt.length;X<J;X++)mt=Gt[X],w.format!==bn?pt!==null?It?F&&e.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(n.TEXTURE_2D,X,Pt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?F&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,mt.width,mt.height,pt,Ct,mt.data):e.texImage2D(n.TEXTURE_2D,X,Pt,mt.width,mt.height,0,pt,Ct,mt.data)}else if(w.isDataArrayTexture)if(It){if(se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ht,Pt,it.width,it.height,it.depth),F)if(w.layerUpdates.size>0){const X=nh(it.width,it.height,w.format,w.type);for(const J of w.layerUpdates){const ct=it.data.subarray(J*X/it.data.BYTES_PER_ELEMENT,(J+1)*X/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,it.width,it.height,1,pt,Ct,ct)}w.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,pt,Ct,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Pt,it.width,it.height,it.depth,0,pt,Ct,it.data);else if(w.isData3DTexture)It?(se&&e.texStorage3D(n.TEXTURE_3D,ht,Pt,it.width,it.height,it.depth),F&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,pt,Ct,it.data)):e.texImage3D(n.TEXTURE_3D,0,Pt,it.width,it.height,it.depth,0,pt,Ct,it.data);else if(w.isFramebufferTexture){if(se)if(It)e.texStorage2D(n.TEXTURE_2D,ht,Pt,it.width,it.height);else{let X=it.width,J=it.height;for(let ct=0;ct<ht;ct++)e.texImage2D(n.TEXTURE_2D,ct,Pt,X,J,0,pt,Ct,null),X>>=1,J>>=1}}else if(Gt.length>0){if(It&&se){const X=Lt(Gt[0]);e.texStorage2D(n.TEXTURE_2D,ht,Pt,X.width,X.height)}for(let X=0,J=Gt.length;X<J;X++)mt=Gt[X],It?F&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,pt,Ct,mt):e.texImage2D(n.TEXTURE_2D,X,Pt,pt,Ct,mt);w.generateMipmaps=!1}else if(It){if(se){const X=Lt(it);e.texStorage2D(n.TEXTURE_2D,ht,Pt,X.width,X.height)}F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt,Ct,it)}else e.texImage2D(n.TEXTURE_2D,0,Pt,pt,Ct,it);m(w)&&f(j),vt.__version=K.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function $(L,w,G){if(w.image.length!==6)return;const j=Dt(L,w),tt=w.source;e.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+G);const K=i.get(tt);if(tt.version!==K.__version||j===!0){e.activeTexture(n.TEXTURE0+G);const vt=Zt.getPrimaries(Zt.workingColorSpace),at=w.colorSpace===ai?null:Zt.getPrimaries(w.colorSpace),ft=w.colorSpace===ai||vt===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Yt=w.isCompressedTexture||w.image[0].isCompressedTexture,it=w.image[0]&&w.image[0].isDataTexture,pt=[];for(let J=0;J<6;J++)!Yt&&!it?pt[J]=x(w.image[J],!0,r.maxCubemapSize):pt[J]=it?w.image[J].image:w.image[J],pt[J]=ce(w,pt[J]);const Ct=pt[0],Pt=s.convert(w.format,w.colorSpace),mt=s.convert(w.type),Gt=T(w.internalFormat,Pt,mt,w.colorSpace),It=w.isVideoTexture!==!0,se=K.__version===void 0||j===!0,F=tt.dataReady;let ht=b(w,Ct);ot(n.TEXTURE_CUBE_MAP,w);let X;if(Yt){It&&se&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ht,Gt,Ct.width,Ct.height);for(let J=0;J<6;J++){X=pt[J].mipmaps;for(let ct=0;ct<X.length;ct++){const dt=X[ct];w.format!==bn?Pt!==null?It?F&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,0,0,dt.width,dt.height,Pt,dt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,Gt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,0,0,dt.width,dt.height,Pt,mt,dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,Gt,dt.width,dt.height,0,Pt,mt,dt.data)}}}else{if(X=w.mipmaps,It&&se){X.length>0&&ht++;const J=Lt(pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ht,Gt,J.width,J.height)}for(let J=0;J<6;J++)if(it){It?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,pt[J].width,pt[J].height,Pt,mt,pt[J].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Gt,pt[J].width,pt[J].height,0,Pt,mt,pt[J].data);for(let ct=0;ct<X.length;ct++){const Wt=X[ct].image[J].image;It?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,0,0,Wt.width,Wt.height,Pt,mt,Wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,Gt,Wt.width,Wt.height,0,Pt,mt,Wt.data)}}else{It?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Pt,mt,pt[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Gt,Pt,mt,pt[J]);for(let ct=0;ct<X.length;ct++){const dt=X[ct];It?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,0,0,Pt,mt,dt.image[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,Gt,Pt,mt,dt.image[J])}}}m(w)&&f(n.TEXTURE_CUBE_MAP),K.__version=tt.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function et(L,w,G,j,tt,K){const vt=s.convert(G.format,G.colorSpace),at=s.convert(G.type),ft=T(G.internalFormat,vt,at,G.colorSpace);if(!i.get(w).__hasExternalTextures){const it=Math.max(1,w.width>>K),pt=Math.max(1,w.height>>K);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,K,ft,it,pt,w.depth,0,vt,at,null):e.texImage2D(tt,K,ft,it,pt,0,vt,at,null)}e.bindFramebuffer(n.FRAMEBUFFER,L),Xt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,tt,i.get(G).__webglTexture,0,kt(w)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,tt,i.get(G).__webglTexture,K),e.bindFramebuffer(n.FRAMEBUFFER,null)}function gt(L,w,G){if(n.bindRenderbuffer(n.RENDERBUFFER,L),w.depthBuffer){const j=w.depthTexture,tt=j&&j.isDepthTexture?j.type:null,K=y(w.stencilBuffer,tt),vt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=kt(w);Xt(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at,K,w.width,w.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,at,K,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,K,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,vt,n.RENDERBUFFER,L)}else{const j=w.textures;for(let tt=0;tt<j.length;tt++){const K=j[tt],vt=s.convert(K.format,K.colorSpace),at=s.convert(K.type),ft=T(K.internalFormat,vt,at,K.colorSpace),Yt=kt(w);G&&Xt(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Yt,ft,w.width,w.height):Xt(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Yt,ft,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ft,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ut(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),U(w.depthTexture,0);const j=i.get(w.depthTexture).__webglTexture,tt=kt(w);if(w.depthTexture.format===gr)Xt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(w.depthTexture.format===Tr)Xt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function At(L){const w=i.get(L),G=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const j=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),j){const tt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,j.removeEventListener("dispose",tt)};j.addEventListener("dispose",tt),w.__depthDisposeCallback=tt}w.__boundDepthTexture=j}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ut(w.__webglFramebuffer,L)}else if(G){w.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[j]),w.__webglDepthbuffer[j]===void 0)w.__webglDepthbuffer[j]=n.createRenderbuffer(),gt(w.__webglDepthbuffer[j],L,!1);else{const tt=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=w.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,K)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),gt(w.__webglDepthbuffer,L,!1);else{const j=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,tt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function yt(L,w,G){const j=i.get(L);w!==void 0&&et(j.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&At(L)}function Bt(L){const w=L.texture,G=i.get(L),j=i.get(w);L.addEventListener("dispose",E);const tt=L.textures,K=L.isWebGLCubeRenderTarget===!0,vt=tt.length>1;if(vt||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=w.version,o.memory.textures++),K){G.__webglFramebuffer=[];for(let at=0;at<6;at++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[at]=[];for(let ft=0;ft<w.mipmaps.length;ft++)G.__webglFramebuffer[at][ft]=n.createFramebuffer()}else G.__webglFramebuffer[at]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let at=0;at<w.mipmaps.length;at++)G.__webglFramebuffer[at]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(vt)for(let at=0,ft=tt.length;at<ft;at++){const Yt=i.get(tt[at]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&Xt(L)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let at=0;at<tt.length;at++){const ft=tt[at];G.__webglColorRenderbuffer[at]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[at]);const Yt=s.convert(ft.format,ft.colorSpace),it=s.convert(ft.type),pt=T(ft.internalFormat,Yt,it,ft.colorSpace,L.isXRRenderTarget===!0),Ct=kt(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct,pt,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,G.__webglColorRenderbuffer[at])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),gt(G.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),ot(n.TEXTURE_CUBE_MAP,w);for(let at=0;at<6;at++)if(w.mipmaps&&w.mipmaps.length>0)for(let ft=0;ft<w.mipmaps.length;ft++)et(G.__webglFramebuffer[at][ft],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,ft);else et(G.__webglFramebuffer[at],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(w)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let at=0,ft=tt.length;at<ft;at++){const Yt=tt[at],it=i.get(Yt);e.bindTexture(n.TEXTURE_2D,it.__webglTexture),ot(n.TEXTURE_2D,Yt),et(G.__webglFramebuffer,L,Yt,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,0),m(Yt)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let at=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(at=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(at,j.__webglTexture),ot(at,w),w.mipmaps&&w.mipmaps.length>0)for(let ft=0;ft<w.mipmaps.length;ft++)et(G.__webglFramebuffer[ft],L,w,n.COLOR_ATTACHMENT0,at,ft);else et(G.__webglFramebuffer,L,w,n.COLOR_ATTACHMENT0,at,0);m(w)&&f(at),e.unbindTexture()}L.depthBuffer&&At(L)}function ee(L){const w=L.textures;for(let G=0,j=w.length;G<j;G++){const tt=w[G];if(m(tt)){const K=L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,vt=i.get(tt).__webglTexture;e.bindTexture(K,vt),f(K),e.unbindTexture()}}}const Vt=[],D=[];function Ze(L){if(L.samples>0){if(Xt(L)===!1){const w=L.textures,G=L.width,j=L.height;let tt=n.COLOR_BUFFER_BIT;const K=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,vt=i.get(L),at=w.length>1;if(at)for(let ft=0;ft<w.length;ft++)e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ft=0;ft<w.length;ft++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),at){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,vt.__webglColorRenderbuffer[ft]);const Yt=i.get(w[ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Yt,0)}n.blitFramebuffer(0,0,G,j,0,0,G,j,tt,n.NEAREST),c===!0&&(Vt.length=0,D.length=0,Vt.push(n.COLOR_ATTACHMENT0+ft),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Vt.push(K),D.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Vt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),at)for(let ft=0;ft<w.length;ft++){e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,vt.__webglColorRenderbuffer[ft]);const Yt=i.get(w[ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,Yt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const w=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function kt(L){return Math.min(r.maxSamples,L.samples)}function Xt(L){const w=i.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Rt(L){const w=o.render.frame;u.get(L)!==w&&(u.set(L,w),L.update())}function ce(L,w){const G=L.colorSpace,j=L.format,tt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||G!==mi&&G!==ai&&(Zt.getTransfer(G)===ue?(j!==bn||tt!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function Lt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=P,this.resetTextureUnits=M,this.setTexture2D=U,this.setTexture2DArray=V,this.setTexture3D=B,this.setTextureCube=Y,this.rebindTextures=yt,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=et,this.useMultisampledRTT=Xt}function _v(n,t){function e(i,r=ai){let s;const o=Zt.getTransfer(r);if(i===qn)return n.UNSIGNED_BYTE;if(i===Tl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Od)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Nd)return n.BYTE;if(i===Fd)return n.SHORT;if(i===cs)return n.UNSIGNED_SHORT;if(i===bl)return n.INT;if(i===zi)return n.UNSIGNED_INT;if(i===Un)return n.FLOAT;if(i===hs)return n.HALF_FLOAT;if(i===Bd)return n.ALPHA;if(i===zd)return n.RGB;if(i===bn)return n.RGBA;if(i===kd)return n.LUMINANCE;if(i===Gd)return n.LUMINANCE_ALPHA;if(i===gr)return n.DEPTH_COMPONENT;if(i===Tr)return n.DEPTH_STENCIL;if(i===Al)return n.RED;if(i===Rl)return n.RED_INTEGER;if(i===Hd)return n.RG;if(i===Cl)return n.RG_INTEGER;if(i===Pl)return n.RGBA_INTEGER;if(i===uo||i===ho||i===fo||i===po)if(o===ue)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===uo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===uo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ho)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===po)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Rc||i===Cc||i===Pc||i===Lc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Rc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Lc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ic||i===Dc||i===Uc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ic||i===Dc)return o===ue?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Uc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Nc||i===Fc||i===Oc||i===Bc||i===zc||i===kc||i===Gc||i===Hc||i===Vc||i===Wc||i===Xc||i===Yc||i===qc||i===$c)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Nc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Oc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===kc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$c)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mo||i===Kc||i===jc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===mo)return o===ue?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Kc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===jc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vd||i===Zc||i===Jc||i===Qc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===mo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Zc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===br?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class xv extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Me extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vv={type:"move"};class Oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),f=this._getHandJoint(l,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vv)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Me;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Mv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sv=`
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

}`;class yv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Le,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new $n({vertexShader:Mv,fragmentShader:Sv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ot(new ms(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ev extends Ir{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,g=null;const x=new yv,m=e.getContextAttributes();let f=null,T=null;const y=[],b=[],S=new $t;let E=null;const v=new un;v.layers.enable(1),v.viewport=new fe;const A=new un;A.layers.enable(2),A.viewport=new fe;const R=[v,A],_=new xv;_.layers.enable(1),_.layers.enable(2);let M=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let et=y[$];return et===void 0&&(et=new Oa,y[$]=et),et.getTargetRaySpace()},this.getControllerGrip=function($){let et=y[$];return et===void 0&&(et=new Oa,y[$]=et),et.getGripSpace()},this.getHand=function($){let et=y[$];return et===void 0&&(et=new Oa,y[$]=et),et.getHandSpace()};function I($){const et=b.indexOf($.inputSource);if(et===-1)return;const gt=y[et];gt!==void 0&&(gt.update($.inputSource,$.frame,l||o),gt.dispatchEvent({type:$.type,data:$.inputSource}))}function U(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",V);for(let $=0;$<y.length;$++){const et=b[$];et!==null&&(b[$]=null,y[$].disconnect(et))}M=null,P=null,x.reset(),t.setRenderTarget(f),p=null,d=null,h=null,r=null,T=null,zt.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",U),r.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(S),r.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,et),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new ki(p.framebufferWidth,p.framebufferHeight,{format:bn,type:qn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,gt=null,ut=null;m.depth&&(ut=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?Tr:gr,gt=m.stencil?br:zi);const At={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:s};h=new XRWebGLBinding(r,e),d=h.createProjectionLayer(At),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new ki(d.textureWidth,d.textureHeight,{format:bn,type:qn,depthTexture:new of(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),zt.setContext(r),zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function V($){for(let et=0;et<$.removed.length;et++){const gt=$.removed[et],ut=b.indexOf(gt);ut>=0&&(b[ut]=null,y[ut].disconnect(gt))}for(let et=0;et<$.added.length;et++){const gt=$.added[et];let ut=b.indexOf(gt);if(ut===-1){for(let yt=0;yt<y.length;yt++)if(yt>=b.length){b.push(gt),ut=yt;break}else if(b[yt]===null){b[yt]=gt,ut=yt;break}if(ut===-1)break}const At=y[ut];At&&At.connect(gt)}}const B=new k,Y=new k;function N($,et,gt){B.setFromMatrixPosition(et.matrixWorld),Y.setFromMatrixPosition(gt.matrixWorld);const ut=B.distanceTo(Y),At=et.projectionMatrix.elements,yt=gt.projectionMatrix.elements,Bt=At[14]/(At[10]-1),ee=At[14]/(At[10]+1),Vt=(At[9]+1)/At[5],D=(At[9]-1)/At[5],Ze=(At[8]-1)/At[0],kt=(yt[8]+1)/yt[0],Xt=Bt*Ze,Rt=Bt*kt,ce=ut/(-Ze+kt),Lt=ce*-Ze;if(et.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Lt),$.translateZ(ce),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),At[10]===-1)$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const L=Bt+ce,w=ee+ce,G=Xt-Lt,j=Rt+(ut-Lt),tt=Vt*ee/w*L,K=D*ee/w*L;$.projectionMatrix.makePerspective(G,j,tt,K,L,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function q($,et){et===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(et.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let et=$.near,gt=$.far;x.texture!==null&&(x.depthNear>0&&(et=x.depthNear),x.depthFar>0&&(gt=x.depthFar)),_.near=A.near=v.near=et,_.far=A.far=v.far=gt,(M!==_.near||P!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),M=_.near,P=_.far);const ut=$.parent,At=_.cameras;q(_,ut);for(let yt=0;yt<At.length;yt++)q(At[yt],ut);At.length===2?N(_,v,A):_.projectionMatrix.copy(v.projectionMatrix),nt($,_,ut)};function nt($,et,gt){gt===null?$.matrix.copy(et.matrixWorld):($.matrix.copy(gt.matrixWorld),$.matrix.invert(),$.matrix.multiply(et.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=tl*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let ot=null;function Dt($,et){if(u=et.getViewerPose(l||o),g=et,u!==null){const gt=u.views;p!==null&&(t.setRenderTargetFramebuffer(T,p.framebuffer),t.setRenderTarget(T));let ut=!1;gt.length!==_.cameras.length&&(_.cameras.length=0,ut=!0);for(let yt=0;yt<gt.length;yt++){const Bt=gt[yt];let ee=null;if(p!==null)ee=p.getViewport(Bt);else{const D=h.getViewSubImage(d,Bt);ee=D.viewport,yt===0&&(t.setRenderTargetTextures(T,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(T))}let Vt=R[yt];Vt===void 0&&(Vt=new un,Vt.layers.enable(yt),Vt.viewport=new fe,R[yt]=Vt),Vt.matrix.fromArray(Bt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Bt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(ee.x,ee.y,ee.width,ee.height),yt===0&&(_.matrix.copy(Vt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ut===!0&&_.cameras.push(Vt)}const At=r.enabledFeatures;if(At&&At.includes("depth-sensing")){const yt=h.getDepthInformation(gt[0]);yt&&yt.isValid&&yt.texture&&x.init(t,yt,r.renderState)}}for(let gt=0;gt<y.length;gt++){const ut=b[gt],At=y[gt];ut!==null&&At!==void 0&&At.update(ut,et,l||o)}ot&&ot($,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),g=null}const zt=new rf;zt.setAnimationLoop(Dt),this.setAnimationLoop=function($){ot=$},this.dispose=function(){}}}const bi=new An,bv=new Qt;function Tv(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,tf(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,T,y,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,T,y):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Fe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Fe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=t.get(f),y=T.envMap,b=T.envMapRotation;y&&(m.envMap.value=y,bi.copy(b),bi.x*=-1,bi.y*=-1,bi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),m.envMapRotation.value.setFromMatrix4(bv.makeRotationFromEuler(bi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,T,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=y*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Fe&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const T=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function wv(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,y){const b=y.program;i.uniformBlockBinding(T,b)}function l(T,y){let b=r[T.id];b===void 0&&(g(T),b=u(T),r[T.id]=b,T.addEventListener("dispose",m));const S=y.program;i.updateUBOMapping(T,S);const E=t.render.frame;s[T.id]!==E&&(d(T),s[T.id]=E)}function u(T){const y=h();T.__bindingPointIndex=y;const b=n.createBuffer(),S=T.__size,E=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,S,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,b),b}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const y=r[T.id],b=T.uniforms,S=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let E=0,v=b.length;E<v;E++){const A=Array.isArray(b[E])?b[E]:[b[E]];for(let R=0,_=A.length;R<_;R++){const M=A[R];if(p(M,E,R,S)===!0){const P=M.__offset,I=Array.isArray(M.value)?M.value:[M.value];let U=0;for(let V=0;V<I.length;V++){const B=I[V],Y=x(B);typeof B=="number"||typeof B=="boolean"?(M.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,P+U,M.__data)):B.isMatrix3?(M.__data[0]=B.elements[0],M.__data[1]=B.elements[1],M.__data[2]=B.elements[2],M.__data[3]=0,M.__data[4]=B.elements[3],M.__data[5]=B.elements[4],M.__data[6]=B.elements[5],M.__data[7]=0,M.__data[8]=B.elements[6],M.__data[9]=B.elements[7],M.__data[10]=B.elements[8],M.__data[11]=0):(B.toArray(M.__data,U),U+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,P,M.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(T,y,b,S){const E=T.value,v=y+"_"+b;if(S[v]===void 0)return typeof E=="number"||typeof E=="boolean"?S[v]=E:S[v]=E.clone(),!0;{const A=S[v];if(typeof E=="number"||typeof E=="boolean"){if(A!==E)return S[v]=E,!0}else if(A.equals(E)===!1)return A.copy(E),!0}return!1}function g(T){const y=T.uniforms;let b=0;const S=16;for(let v=0,A=y.length;v<A;v++){const R=Array.isArray(y[v])?y[v]:[y[v]];for(let _=0,M=R.length;_<M;_++){const P=R[_],I=Array.isArray(P.value)?P.value:[P.value];for(let U=0,V=I.length;U<V;U++){const B=I[U],Y=x(B),N=b%S,q=N%Y.boundary,nt=N+q;b+=q,nt!==0&&S-nt<Y.storage&&(b+=S-nt),P.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=b,b+=Y.storage}}}const E=b%S;return E>0&&(b+=S-E),T.__size=b,T.__cache={},this}function x(T){const y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function m(T){const y=T.target;y.removeEventListener("dispose",m);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function f(){for(const T in r)n.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}class Av{constructor(t={}){const{canvas:e=pm(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const f=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=li,this.toneMappingExposure=1;const y=this;let b=!1,S=0,E=0,v=null,A=-1,R=null;const _=new fe,M=new fe;let P=null;const I=new Z(0);let U=0,V=e.width,B=e.height,Y=1,N=null,q=null;const nt=new fe(0,0,V,B),ot=new fe(0,0,V,B);let Dt=!1;const zt=new Il;let $=!1,et=!1;const gt=new Qt,ut=new Qt,At=new k,yt=new fe,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function Vt(){return v===null?Y:1}let D=i;function Ze(C,O){return e.getContext(C,O)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${El}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",dt,!1),D===null){const O="webgl2";if(D=Ze(O,C),D===null)throw Ze(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let kt,Xt,Rt,ce,Lt,L,w,G,j,tt,K,vt,at,ft,Yt,it,pt,Ct,Pt,mt,Gt,It,se,F;function ht(){kt=new D_(D),kt.init(),It=new _v(D,kt),Xt=new A_(D,kt,t,It),Rt=new pv(D),Xt.reverseDepthBuffer&&Rt.buffers.depth.setReversed(!0),ce=new F_(D),Lt=new tv,L=new gv(D,kt,Rt,Lt,Xt,It,ce),w=new C_(y),G=new I_(y),j=new Vm(D),se=new T_(D,j),tt=new U_(D,j,ce,se),K=new B_(D,tt,j,ce),Pt=new O_(D,Xt,L),it=new R_(Lt),vt=new Qx(y,w,G,kt,Xt,se,it),at=new Tv(y,Lt),ft=new nv,Yt=new cv(kt),Ct=new b_(y,w,G,Rt,K,d,c),pt=new dv(y,K,Xt),F=new wv(D,ce,Xt,Rt),mt=new w_(D,kt,ce),Gt=new N_(D,kt,ce),ce.programs=vt.programs,y.capabilities=Xt,y.extensions=kt,y.properties=Lt,y.renderLists=ft,y.shadowMap=pt,y.state=Rt,y.info=ce}ht();const X=new Ev(y,D);this.xr=X,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const C=kt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=kt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(C){C!==void 0&&(Y=C,this.setSize(V,B,!1))},this.getSize=function(C){return C.set(V,B)},this.setSize=function(C,O,H=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=C,B=O,e.width=Math.floor(C*Y),e.height=Math.floor(O*Y),H===!0&&(e.style.width=C+"px",e.style.height=O+"px"),this.setViewport(0,0,C,O)},this.getDrawingBufferSize=function(C){return C.set(V*Y,B*Y).floor()},this.setDrawingBufferSize=function(C,O,H){V=C,B=O,Y=H,e.width=Math.floor(C*H),e.height=Math.floor(O*H),this.setViewport(0,0,C,O)},this.getCurrentViewport=function(C){return C.copy(_)},this.getViewport=function(C){return C.copy(nt)},this.setViewport=function(C,O,H,W){C.isVector4?nt.set(C.x,C.y,C.z,C.w):nt.set(C,O,H,W),Rt.viewport(_.copy(nt).multiplyScalar(Y).round())},this.getScissor=function(C){return C.copy(ot)},this.setScissor=function(C,O,H,W){C.isVector4?ot.set(C.x,C.y,C.z,C.w):ot.set(C,O,H,W),Rt.scissor(M.copy(ot).multiplyScalar(Y).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(C){Rt.setScissorTest(Dt=C)},this.setOpaqueSort=function(C){N=C},this.setTransparentSort=function(C){q=C},this.getClearColor=function(C){return C.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(C=!0,O=!0,H=!0){let W=0;if(C){let z=!1;if(v!==null){const rt=v.texture.format;z=rt===Pl||rt===Cl||rt===Rl}if(z){const rt=v.texture.type,lt=rt===qn||rt===zi||rt===cs||rt===br||rt===Tl||rt===wl,_t=Ct.getClearColor(),xt=Ct.getClearAlpha(),Et=_t.r,Tt=_t.g,Mt=_t.b;lt?(p[0]=Et,p[1]=Tt,p[2]=Mt,p[3]=xt,D.clearBufferuiv(D.COLOR,0,p)):(g[0]=Et,g[1]=Tt,g[2]=Mt,g[3]=xt,D.clearBufferiv(D.COLOR,0,g))}else W|=D.COLOR_BUFFER_BIT}O&&(W|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),ft.dispose(),Yt.dispose(),Lt.dispose(),w.dispose(),G.dispose(),K.dispose(),se.dispose(),F.dispose(),vt.dispose(),X.dispose(),X.removeEventListener("sessionstart",nu),X.removeEventListener("sessionend",iu),xi.stop()};function J(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const C=ce.autoReset,O=pt.enabled,H=pt.autoUpdate,W=pt.needsUpdate,z=pt.type;ht(),ce.autoReset=C,pt.enabled=O,pt.autoUpdate=H,pt.needsUpdate=W,pt.type=z}function dt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Wt(C){const O=C.target;O.removeEventListener("dispose",Wt),_e(O)}function _e(C){ke(C),Lt.remove(C)}function ke(C){const O=Lt.get(C).programs;O!==void 0&&(O.forEach(function(H){vt.releaseProgram(H)}),C.isShaderMaterial&&vt.releaseShaderCache(C))}this.renderBufferDirect=function(C,O,H,W,z,rt){O===null&&(O=Bt);const lt=z.isMesh&&z.matrixWorld.determinant()<0,_t=bp(C,O,H,W,z);Rt.setMaterial(W,lt);let xt=H.index,Et=1;if(W.wireframe===!0){if(xt=tt.getWireframeAttribute(H),xt===void 0)return;Et=2}const Tt=H.drawRange,Mt=H.attributes.position;let te=Tt.start*Et,le=(Tt.start+Tt.count)*Et;rt!==null&&(te=Math.max(te,rt.start*Et),le=Math.min(le,(rt.start+rt.count)*Et)),xt!==null?(te=Math.max(te,0),le=Math.min(le,xt.count)):Mt!=null&&(te=Math.max(te,0),le=Math.min(le,Mt.count));const pe=le-te;if(pe<0||pe===1/0)return;se.setup(z,W,_t,H,xt);let Je,Kt=mt;if(xt!==null&&(Je=j.get(xt),Kt=Gt,Kt.setIndex(Je)),z.isMesh)W.wireframe===!0?(Rt.setLineWidth(W.wireframeLinewidth*Vt()),Kt.setMode(D.LINES)):Kt.setMode(D.TRIANGLES);else if(z.isLine){let St=W.linewidth;St===void 0&&(St=1),Rt.setLineWidth(St*Vt()),z.isLineSegments?Kt.setMode(D.LINES):z.isLineLoop?Kt.setMode(D.LINE_LOOP):Kt.setMode(D.LINE_STRIP)}else z.isPoints?Kt.setMode(D.POINTS):z.isSprite&&Kt.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Kt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const St=z._multiDrawStarts,we=z._multiDrawCounts,jt=z._multiDrawCount,gn=xt?j.get(xt).bytesPerElement:1,Yi=Lt.get(W).currentProgram.getUniforms();for(let Qe=0;Qe<jt;Qe++)Yi.setValue(D,"_gl_DrawID",Qe),Kt.render(St[Qe]/gn,we[Qe])}else if(z.isInstancedMesh)Kt.renderInstances(te,pe,z.count);else if(H.isInstancedBufferGeometry){const St=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,we=Math.min(H.instanceCount,St);Kt.renderInstances(te,pe,we)}else Kt.render(te,pe)};function qt(C,O,H){C.transparent===!0&&C.side===he&&C.forceSinglePass===!1?(C.side=Fe,C.needsUpdate=!0,Ts(C,O,H),C.side=di,C.needsUpdate=!0,Ts(C,O,H),C.side=he):Ts(C,O,H)}this.compile=function(C,O,H=null){H===null&&(H=C),m=Yt.get(H),m.init(O),T.push(m),H.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),C!==H&&C.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();const W=new Set;return C.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const rt=z.material;if(rt)if(Array.isArray(rt))for(let lt=0;lt<rt.length;lt++){const _t=rt[lt];qt(_t,H,z),W.add(_t)}else qt(rt,H,z),W.add(rt)}),T.pop(),m=null,W},this.compileAsync=function(C,O,H=null){const W=this.compile(C,O,H);return new Promise(z=>{function rt(){if(W.forEach(function(lt){Lt.get(lt).currentProgram.isReady()&&W.delete(lt)}),W.size===0){z(C);return}setTimeout(rt,10)}kt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Ge=null;function Nn(C){Ge&&Ge(C)}function nu(){xi.stop()}function iu(){xi.start()}const xi=new rf;xi.setAnimationLoop(Nn),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(C){Ge=C,X.setAnimationLoop(C),C===null?xi.stop():xi.start()},X.addEventListener("sessionstart",nu),X.addEventListener("sessionend",iu),this.render=function(C,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(O),O=X.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,O,v),m=Yt.get(C,T.length),m.init(O),T.push(m),ut.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),zt.setFromProjectionMatrix(ut),et=this.localClippingEnabled,$=it.init(this.clippingPlanes,et),x=ft.get(C,f.length),x.init(),f.push(x),X.enabled===!0&&X.isPresenting===!0){const rt=y.xr.getDepthSensingMesh();rt!==null&&ia(rt,O,-1/0,y.sortObjects)}ia(C,O,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(N,q),ee=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,ee&&Ct.addToRenderList(x,C),this.info.render.frame++,$===!0&&it.beginShadows();const H=m.state.shadowsArray;pt.render(H,C,O),$===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=x.opaque,z=x.transmissive;if(m.setupLights(),O.isArrayCamera){const rt=O.cameras;if(z.length>0)for(let lt=0,_t=rt.length;lt<_t;lt++){const xt=rt[lt];su(W,z,C,xt)}ee&&Ct.render(C);for(let lt=0,_t=rt.length;lt<_t;lt++){const xt=rt[lt];ru(x,C,xt,xt.viewport)}}else z.length>0&&su(W,z,C,O),ee&&Ct.render(C),ru(x,C,O);v!==null&&(L.updateMultisampleRenderTarget(v),L.updateRenderTargetMipmap(v)),C.isScene===!0&&C.onAfterRender(y,C,O),se.resetDefaultState(),A=-1,R=null,T.pop(),T.length>0?(m=T[T.length-1],$===!0&&it.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function ia(C,O,H,W){if(C.visible===!1)return;if(C.layers.test(O.layers)){if(C.isGroup)H=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(O);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||zt.intersectsSprite(C)){W&&yt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ut);const lt=K.update(C),_t=C.material;_t.visible&&x.push(C,lt,_t,H,yt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||zt.intersectsObject(C))){const lt=K.update(C),_t=C.material;if(W&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),yt.copy(C.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),yt.copy(lt.boundingSphere.center)),yt.applyMatrix4(C.matrixWorld).applyMatrix4(ut)),Array.isArray(_t)){const xt=lt.groups;for(let Et=0,Tt=xt.length;Et<Tt;Et++){const Mt=xt[Et],te=_t[Mt.materialIndex];te&&te.visible&&x.push(C,lt,te,H,yt.z,Mt)}}else _t.visible&&x.push(C,lt,_t,H,yt.z,null)}}const rt=C.children;for(let lt=0,_t=rt.length;lt<_t;lt++)ia(rt[lt],O,H,W)}function ru(C,O,H,W){const z=C.opaque,rt=C.transmissive,lt=C.transparent;m.setupLightsView(H),$===!0&&it.setGlobalState(y.clippingPlanes,H),W&&Rt.viewport(_.copy(W)),z.length>0&&bs(z,O,H),rt.length>0&&bs(rt,O,H),lt.length>0&&bs(lt,O,H),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function su(C,O,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new ki(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?hs:qn,minFilter:Ui,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const rt=m.state.transmissionRenderTarget[W.id],lt=W.viewport||_;rt.setSize(lt.z,lt.w);const _t=y.getRenderTarget();y.setRenderTarget(rt),y.getClearColor(I),U=y.getClearAlpha(),U<1&&y.setClearColor(16777215,.5),y.clear(),ee&&Ct.render(H);const xt=y.toneMapping;y.toneMapping=li;const Et=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),$===!0&&it.setGlobalState(y.clippingPlanes,W),bs(C,H,W),L.updateMultisampleRenderTarget(rt),L.updateRenderTargetMipmap(rt),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let Mt=0,te=O.length;Mt<te;Mt++){const le=O[Mt],pe=le.object,Je=le.geometry,Kt=le.material,St=le.group;if(Kt.side===he&&pe.layers.test(W.layers)){const we=Kt.side;Kt.side=Fe,Kt.needsUpdate=!0,ou(pe,H,W,Je,Kt,St),Kt.side=we,Kt.needsUpdate=!0,Tt=!0}}Tt===!0&&(L.updateMultisampleRenderTarget(rt),L.updateRenderTargetMipmap(rt))}y.setRenderTarget(_t),y.setClearColor(I,U),Et!==void 0&&(W.viewport=Et),y.toneMapping=xt}function bs(C,O,H){const W=O.isScene===!0?O.overrideMaterial:null;for(let z=0,rt=C.length;z<rt;z++){const lt=C[z],_t=lt.object,xt=lt.geometry,Et=W===null?lt.material:W,Tt=lt.group;_t.layers.test(H.layers)&&ou(_t,O,H,xt,Et,Tt)}}function ou(C,O,H,W,z,rt){C.onBeforeRender(y,O,H,W,z,rt),C.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),z.onBeforeRender(y,O,H,W,C,rt),z.transparent===!0&&z.side===he&&z.forceSinglePass===!1?(z.side=Fe,z.needsUpdate=!0,y.renderBufferDirect(H,O,W,z,C,rt),z.side=di,z.needsUpdate=!0,y.renderBufferDirect(H,O,W,z,C,rt),z.side=he):y.renderBufferDirect(H,O,W,z,C,rt),C.onAfterRender(y,O,H,W,z,rt)}function Ts(C,O,H){O.isScene!==!0&&(O=Bt);const W=Lt.get(C),z=m.state.lights,rt=m.state.shadowsArray,lt=z.state.version,_t=vt.getParameters(C,z.state,rt,O,H),xt=vt.getProgramCacheKey(_t);let Et=W.programs;W.environment=C.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(C.isMeshStandardMaterial?G:w).get(C.envMap||W.environment),W.envMapRotation=W.environment!==null&&C.envMap===null?O.environmentRotation:C.envMapRotation,Et===void 0&&(C.addEventListener("dispose",Wt),Et=new Map,W.programs=Et);let Tt=Et.get(xt);if(Tt!==void 0){if(W.currentProgram===Tt&&W.lightsStateVersion===lt)return cu(C,_t),Tt}else _t.uniforms=vt.getUniforms(C),C.onBeforeCompile(_t,y),Tt=vt.acquireProgram(_t,xt),Et.set(xt,Tt),W.uniforms=_t.uniforms;const Mt=W.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Mt.clippingPlanes=it.uniform),cu(C,_t),W.needsLights=wp(C),W.lightsStateVersion=lt,W.needsLights&&(Mt.ambientLightColor.value=z.state.ambient,Mt.lightProbe.value=z.state.probe,Mt.directionalLights.value=z.state.directional,Mt.directionalLightShadows.value=z.state.directionalShadow,Mt.spotLights.value=z.state.spot,Mt.spotLightShadows.value=z.state.spotShadow,Mt.rectAreaLights.value=z.state.rectArea,Mt.ltc_1.value=z.state.rectAreaLTC1,Mt.ltc_2.value=z.state.rectAreaLTC2,Mt.pointLights.value=z.state.point,Mt.pointLightShadows.value=z.state.pointShadow,Mt.hemisphereLights.value=z.state.hemi,Mt.directionalShadowMap.value=z.state.directionalShadowMap,Mt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Mt.spotShadowMap.value=z.state.spotShadowMap,Mt.spotLightMatrix.value=z.state.spotLightMatrix,Mt.spotLightMap.value=z.state.spotLightMap,Mt.pointShadowMap.value=z.state.pointShadowMap,Mt.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=Tt,W.uniformsList=null,Tt}function au(C){if(C.uniformsList===null){const O=C.currentProgram.getUniforms();C.uniformsList=_o.seqWithValue(O.seq,C.uniforms)}return C.uniformsList}function cu(C,O){const H=Lt.get(C);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function bp(C,O,H,W,z){O.isScene!==!0&&(O=Bt),L.resetTextureUnits();const rt=O.fog,lt=W.isMeshStandardMaterial?O.environment:null,_t=v===null?y.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:mi,xt=(W.isMeshStandardMaterial?G:w).get(W.envMap||lt),Et=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Tt=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Mt=!!H.morphAttributes.position,te=!!H.morphAttributes.normal,le=!!H.morphAttributes.color;let pe=li;W.toneMapped&&(v===null||v.isXRRenderTarget===!0)&&(pe=y.toneMapping);const Je=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Kt=Je!==void 0?Je.length:0,St=Lt.get(W),we=m.state.lights;if($===!0&&(et===!0||C!==R)){const on=C===R&&W.id===A;it.setState(W,C,on)}let jt=!1;W.version===St.__version?(St.needsLights&&St.lightsStateVersion!==we.state.version||St.outputColorSpace!==_t||z.isBatchedMesh&&St.batching===!1||!z.isBatchedMesh&&St.batching===!0||z.isBatchedMesh&&St.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&St.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&St.instancing===!1||!z.isInstancedMesh&&St.instancing===!0||z.isSkinnedMesh&&St.skinning===!1||!z.isSkinnedMesh&&St.skinning===!0||z.isInstancedMesh&&St.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&St.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&St.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&St.instancingMorph===!1&&z.morphTexture!==null||St.envMap!==xt||W.fog===!0&&St.fog!==rt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==it.numPlanes||St.numIntersection!==it.numIntersection)||St.vertexAlphas!==Et||St.vertexTangents!==Tt||St.morphTargets!==Mt||St.morphNormals!==te||St.morphColors!==le||St.toneMapping!==pe||St.morphTargetsCount!==Kt)&&(jt=!0):(jt=!0,St.__version=W.version);let gn=St.currentProgram;jt===!0&&(gn=Ts(W,O,z));let Yi=!1,Qe=!1,ra=!1;const me=gn.getUniforms(),Jn=St.uniforms;if(Rt.useProgram(gn.program)&&(Yi=!0,Qe=!0,ra=!0),W.id!==A&&(A=W.id,Qe=!0),Yi||R!==C){Xt.reverseDepthBuffer?(gt.copy(C.projectionMatrix),gm(gt),_m(gt),me.setValue(D,"projectionMatrix",gt)):me.setValue(D,"projectionMatrix",C.projectionMatrix),me.setValue(D,"viewMatrix",C.matrixWorldInverse);const on=me.map.cameraPosition;on!==void 0&&on.setValue(D,At.setFromMatrixPosition(C.matrixWorld)),Xt.logarithmicDepthBuffer&&me.setValue(D,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&me.setValue(D,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,Qe=!0,ra=!0)}if(z.isSkinnedMesh){me.setOptional(D,z,"bindMatrix"),me.setOptional(D,z,"bindMatrixInverse");const on=z.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),me.setValue(D,"boneTexture",on.boneTexture,L))}z.isBatchedMesh&&(me.setOptional(D,z,"batchingTexture"),me.setValue(D,"batchingTexture",z._matricesTexture,L),me.setOptional(D,z,"batchingIdTexture"),me.setValue(D,"batchingIdTexture",z._indirectTexture,L),me.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&me.setValue(D,"batchingColorTexture",z._colorsTexture,L));const sa=H.morphAttributes;if((sa.position!==void 0||sa.normal!==void 0||sa.color!==void 0)&&Pt.update(z,H,gn),(Qe||St.receiveShadow!==z.receiveShadow)&&(St.receiveShadow=z.receiveShadow,me.setValue(D,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Jn.envMap.value=xt,Jn.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(Jn.envMapIntensity.value=O.environmentIntensity),Qe&&(me.setValue(D,"toneMappingExposure",y.toneMappingExposure),St.needsLights&&Tp(Jn,ra),rt&&W.fog===!0&&at.refreshFogUniforms(Jn,rt),at.refreshMaterialUniforms(Jn,W,Y,B,m.state.transmissionRenderTarget[C.id]),_o.upload(D,au(St),Jn,L)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(_o.upload(D,au(St),Jn,L),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&me.setValue(D,"center",z.center),me.setValue(D,"modelViewMatrix",z.modelViewMatrix),me.setValue(D,"normalMatrix",z.normalMatrix),me.setValue(D,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const on=W.uniformsGroups;for(let oa=0,Ap=on.length;oa<Ap;oa++){const lu=on[oa];F.update(lu,gn),F.bind(lu,gn)}}return gn}function Tp(C,O){C.ambientLightColor.needsUpdate=O,C.lightProbe.needsUpdate=O,C.directionalLights.needsUpdate=O,C.directionalLightShadows.needsUpdate=O,C.pointLights.needsUpdate=O,C.pointLightShadows.needsUpdate=O,C.spotLights.needsUpdate=O,C.spotLightShadows.needsUpdate=O,C.rectAreaLights.needsUpdate=O,C.hemisphereLights.needsUpdate=O}function wp(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(C,O,H){Lt.get(C.texture).__webglTexture=O,Lt.get(C.depthTexture).__webglTexture=H;const W=Lt.get(C);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,O){const H=Lt.get(C);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(C,O=0,H=0){v=C,S=O,E=H;let W=!0,z=null,rt=!1,lt=!1;if(C){const xt=Lt.get(C);if(xt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(xt.__webglFramebuffer===void 0)L.setupRenderTarget(C);else if(xt.__hasExternalTextures)L.rebindTextures(C,Lt.get(C.texture).__webglTexture,Lt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Mt=C.depthTexture;if(xt.__boundDepthTexture!==Mt){if(Mt!==null&&Lt.has(Mt)&&(C.width!==Mt.image.width||C.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(C)}}const Et=C.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(lt=!0);const Tt=Lt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Tt[O])?z=Tt[O][H]:z=Tt[O],rt=!0):C.samples>0&&L.useMultisampledRTT(C)===!1?z=Lt.get(C).__webglMultisampledFramebuffer:Array.isArray(Tt)?z=Tt[H]:z=Tt,_.copy(C.viewport),M.copy(C.scissor),P=C.scissorTest}else _.copy(nt).multiplyScalar(Y).floor(),M.copy(ot).multiplyScalar(Y).floor(),P=Dt;if(Rt.bindFramebuffer(D.FRAMEBUFFER,z)&&W&&Rt.drawBuffers(C,z),Rt.viewport(_),Rt.scissor(M),Rt.setScissorTest(P),rt){const xt=Lt.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,xt.__webglTexture,H)}else if(lt){const xt=Lt.get(C.texture),Et=O||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,xt.__webglTexture,H||0,Et)}A=-1},this.readRenderTargetPixels=function(C,O,H,W,z,rt,lt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Lt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&lt!==void 0&&(_t=_t[lt]),_t){Rt.bindFramebuffer(D.FRAMEBUFFER,_t);try{const xt=C.texture,Et=xt.format,Tt=xt.type;if(!Xt.textureFormatReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=C.width-W&&H>=0&&H<=C.height-z&&D.readPixels(O,H,W,z,It.convert(Et),It.convert(Tt),rt)}finally{const xt=v!==null?Lt.get(v).__webglFramebuffer:null;Rt.bindFramebuffer(D.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(C,O,H,W,z,rt,lt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Lt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&lt!==void 0&&(_t=_t[lt]),_t){const xt=C.texture,Et=xt.format,Tt=xt.type;if(!Xt.textureFormatReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=C.width-W&&H>=0&&H<=C.height-z){Rt.bindFramebuffer(D.FRAMEBUFFER,_t);const Mt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Mt),D.bufferData(D.PIXEL_PACK_BUFFER,rt.byteLength,D.STREAM_READ),D.readPixels(O,H,W,z,It.convert(Et),It.convert(Tt),0);const te=v!==null?Lt.get(v).__webglFramebuffer:null;Rt.bindFramebuffer(D.FRAMEBUFFER,te);const le=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await mm(D,le,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Mt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,rt),D.deleteBuffer(Mt),D.deleteSync(le),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,O=null,H=0){C.isTexture!==!0&&(go("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,C=arguments[1]);const W=Math.pow(2,-H),z=Math.floor(C.image.width*W),rt=Math.floor(C.image.height*W),lt=O!==null?O.x:0,_t=O!==null?O.y:0;L.setTexture2D(C,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,lt,_t,z,rt),Rt.unbindTexture()},this.copyTextureToTexture=function(C,O,H=null,W=null,z=0){C.isTexture!==!0&&(go("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1],O=arguments[2],z=arguments[3]||0,H=null);let rt,lt,_t,xt,Et,Tt;H!==null?(rt=H.max.x-H.min.x,lt=H.max.y-H.min.y,_t=H.min.x,xt=H.min.y):(rt=C.image.width,lt=C.image.height,_t=0,xt=0),W!==null?(Et=W.x,Tt=W.y):(Et=0,Tt=0);const Mt=It.convert(O.format),te=It.convert(O.type);L.setTexture2D(O,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const le=D.getParameter(D.UNPACK_ROW_LENGTH),pe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Je=D.getParameter(D.UNPACK_SKIP_PIXELS),Kt=D.getParameter(D.UNPACK_SKIP_ROWS),St=D.getParameter(D.UNPACK_SKIP_IMAGES),we=C.isCompressedTexture?C.mipmaps[z]:C.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,we.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,we.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,_t),D.pixelStorei(D.UNPACK_SKIP_ROWS,xt),C.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,z,Et,Tt,rt,lt,Mt,te,we.data):C.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,z,Et,Tt,we.width,we.height,Mt,we.data):D.texSubImage2D(D.TEXTURE_2D,z,Et,Tt,rt,lt,Mt,te,we),D.pixelStorei(D.UNPACK_ROW_LENGTH,le),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Je),D.pixelStorei(D.UNPACK_SKIP_ROWS,Kt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,St),z===0&&O.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Rt.unbindTexture()},this.copyTextureToTexture3D=function(C,O,H=null,W=null,z=0){C.isTexture!==!0&&(go("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,W=arguments[1]||null,C=arguments[2],O=arguments[3],z=arguments[4]||0);let rt,lt,_t,xt,Et,Tt,Mt,te,le;const pe=C.isCompressedTexture?C.mipmaps[z]:C.image;H!==null?(rt=H.max.x-H.min.x,lt=H.max.y-H.min.y,_t=H.max.z-H.min.z,xt=H.min.x,Et=H.min.y,Tt=H.min.z):(rt=pe.width,lt=pe.height,_t=pe.depth,xt=0,Et=0,Tt=0),W!==null?(Mt=W.x,te=W.y,le=W.z):(Mt=0,te=0,le=0);const Je=It.convert(O.format),Kt=It.convert(O.type);let St;if(O.isData3DTexture)L.setTexture3D(O,0),St=D.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)L.setTexture2DArray(O,0),St=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const we=D.getParameter(D.UNPACK_ROW_LENGTH),jt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),gn=D.getParameter(D.UNPACK_SKIP_PIXELS),Yi=D.getParameter(D.UNPACK_SKIP_ROWS),Qe=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,pe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Et),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Tt),C.isDataTexture||C.isData3DTexture?D.texSubImage3D(St,z,Mt,te,le,rt,lt,_t,Je,Kt,pe.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(St,z,Mt,te,le,rt,lt,_t,Je,pe.data):D.texSubImage3D(St,z,Mt,te,le,rt,lt,_t,Je,Kt,pe),D.pixelStorei(D.UNPACK_ROW_LENGTH,we),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,jt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,gn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Yi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Qe),z===0&&O.generateMipmaps&&D.generateMipmap(St),Rt.unbindTexture()},this.initRenderTarget=function(C){Lt.get(C).__webglFramebuffer===void 0&&L.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),Rt.unbindTexture()},this.resetState=function(){S=0,E=0,v=null,Rt.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ll?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===Yo?"display-p3":"srgb"}}class Ul{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Z(t),this.near=e,this.far=i}clone(){return new Ul(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Rv extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Cv extends Le{constructor(t=null,e=1,i=1,r,s,o,a,c,l=qe,u=qe,h,d){super(null,o,a,c,l,u,r,s,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cn extends Tn{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ar=new Qt,ih=new Qt,qs=[],rh=new Wi,Pv=new Qt,Xr=new Ot,Yr=new Ur;class Nl extends Ot{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Cn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Pv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ar),rh.copy(t.boundingBox).applyMatrix4(ar),this.boundingBox.union(rh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ur),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ar),Yr.copy(t.boundingSphere).applyMatrix4(ar),this.boundingSphere.union(Yr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(t,e){const i=this.matrixWorld,r=this.count;if(Xr.geometry=this.geometry,Xr.material=this.material,Xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yr.copy(this.boundingSphere),Yr.applyMatrix4(i),t.ray.intersectsSphere(Yr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ar),ih.multiplyMatrices(i,ar),Xr.matrixWorld=ih,Xr.raycast(t,qs);for(let o=0,a=qs.length;o<a;o++){const c=qs[o];c.instanceId=s,c.object=this,e.push(c)}qs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Cn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Cv(new Float32Array(r*this.count),r,this.count,Al,Un));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*t;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Fl extends mn{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],p=[];let g=0;const x=[],m=i/2;let f=0;T(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new ve(h,3)),this.setAttribute("normal",new ve(d,3)),this.setAttribute("uv",new ve(p,2));function T(){const b=new k,S=new k;let E=0;const v=(e-t)/i;for(let A=0;A<=s;A++){const R=[],_=A/s,M=_*(e-t)+t;for(let P=0;P<=r;P++){const I=P/r,U=I*c+a,V=Math.sin(U),B=Math.cos(U);S.x=M*V,S.y=-_*i+m,S.z=M*B,h.push(S.x,S.y,S.z),b.set(V,v,B).normalize(),d.push(b.x,b.y,b.z),p.push(I,1-_),R.push(g++)}x.push(R)}for(let A=0;A<r;A++)for(let R=0;R<s;R++){const _=x[R][A],M=x[R+1][A],P=x[R+1][A+1],I=x[R][A+1];t>0&&(u.push(_,M,I),E+=3),e>0&&(u.push(M,P,I),E+=3)}l.addGroup(f,E,0),f+=E}function y(b){const S=g,E=new $t,v=new k;let A=0;const R=b===!0?t:e,_=b===!0?1:-1;for(let P=1;P<=r;P++)h.push(0,m*_,0),d.push(0,_,0),p.push(.5,.5),g++;const M=g;for(let P=0;P<=r;P++){const U=P/r*c+a,V=Math.cos(U),B=Math.sin(U);v.x=R*B,v.y=m*_,v.z=R*V,h.push(v.x,v.y,v.z),d.push(0,_,0),E.x=V*.5+.5,E.y=B*.5*_+.5,p.push(E.x,E.y),g++}for(let P=0;P<r;P++){const I=S+P,U=M+P;b===!0?u.push(U,U+1,I):u.push(U+1,U,I),A+=3}l.addGroup(f,A,b===!0?1:2),f+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ko extends mn{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new k,d=new k,p=[],g=[],x=[],m=[];for(let f=0;f<=i;f++){const T=[],y=f/i;let b=0;f===0&&o===0?b=.5/e:f===i&&c===Math.PI&&(b=-.5/e);for(let S=0;S<=e;S++){const E=S/e;h.x=-t*Math.cos(r+E*s)*Math.sin(o+y*a),h.y=t*Math.cos(o+y*a),h.z=t*Math.sin(r+E*s)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(E+b,1-y),T.push(l++)}u.push(T)}for(let f=0;f<i;f++)for(let T=0;T<e;T++){const y=u[f][T+1],b=u[f][T],S=u[f+1][T],E=u[f+1][T+1];(f!==0||o>0)&&p.push(y,b,E),(f!==i-1||c<Math.PI)&&p.push(b,S,E)}this.setIndex(p),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(x,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ko(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ke extends fs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Z(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Z(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xd,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const sh={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Lv{constructor(t,e,i){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const Iv=new Lv;class Ol{constructor(t){this.manager=t!==void 0?t:Iv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ol.DEFAULT_MATERIAL_NAME="__DEFAULT";class Dv extends Ol{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=sh.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=ls("img");function c(){u(),sh.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(h){u(),r&&r(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Uv extends Ol{constructor(t){super(t)}load(t,e,i,r){const s=new Le,o=new Dv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},i,r),s}}class df extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Z(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Nv extends df{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Z(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ba=new Qt,oh=new k,ah=new k;class Fv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Il,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;oh.setFromMatrixPosition(t.matrixWorld),e.position.copy(oh),ah.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ah),e.updateMatrixWorld(),Ba.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ba),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ba)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ov extends Fv{constructor(){super(new sf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bv extends df{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new Ov}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class zv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ch(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ch();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ch(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:El}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=El);const kv=1.5;function Gv(n){const t=new Av({antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio,kv)),t.setSize(window.innerWidth,window.innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=Ld,t.toneMapping=Dd,t.toneMappingExposure=1.05,t.outputColorSpace=ln,n.appendChild(t.domElement);let e=null;return t.setResizeCallback=i=>{e=i},window.addEventListener("resize",()=>{t.setSize(window.innerWidth,window.innerHeight),e?.(window.innerWidth/window.innerHeight)}),t}function Hv(){const n=new un(50,window.innerWidth/window.innerHeight,.1,500);return n.position.set(0,20,36),n}function $s(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function ie(n,t){const e=Math.floor(n),i=Math.floor(t),r=n-e,s=t-i,o=r*r*(3-2*r),a=s*s*(3-2*s),c=$s(e,i),l=$s(e+1,i),u=$s(e,i+1),h=$s(e+1,i+1);return c*(1-o)*(1-a)+l*o*(1-a)+u*(1-o)*a+h*o*a}function gs(n){let t=n>>>0;return function(){t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Q(n,t,e){return n<t?t:n>e?e:n}function bt(n,t,e){return n+(t-n)*e}function ui(n,t,e,i){return bt(n,t,1-Math.exp(-e*i))}function re(n){const t=Math.hypot(n[0],n[1],n[2])||1;return[n[0]/t,n[1]/t,n[2]/t]}function je(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function wt(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function ae(n,t){return[n[0]+t[0],n[1]+t[1],n[2]+t[2]]}function Kn(n,t){return[n[0]-t[0],n[1]-t[1],n[2]-t[2]]}function Oi(n,t,e,i){return{x:n,y:t,z:e,p:i}}function ff(n,t){const[e,i,r]=t;return[n.x[0]*e+n.y[0]*i+n.z[0]*r+n.p[0],n.x[1]*e+n.y[1]*i+n.z[1]*r+n.p[1],n.x[2]*e+n.y[2]*i+n.z[2]*r+n.p[2]]}function Ye(n,t,e){const i=Kn(t,n),r=Math.hypot(i[0],i[1],i[2])||1e-4,s=[i[0]/r,i[1]/r,i[2]/r],o=Math.abs(s[1])<.97?[0,1,0]:[1,0,0],a=re(je(o,s)),c=je(a,s);return Oi(wt(a,e),wt(s,r),wt(c,e),n)}class Se{constructor(){this.positions=[],this.colors=[],this.indices=[]}addVertex(t,e,i,r){return this.positions.push(t,e,i),this.colors.push(r[0],r[1],r[2]),this.positions.length/3-1}addTri(t,e,i){this.indices.push(t,e,i)}addQuad(t,e,i,r){this.addTri(t,e,i),this.addTri(t,i,r)}bake(t,e,i){const r=this.positions.length/3;for(let s=0;s<t.p.length;s+=3){const o=ff(e,[t.p[s],t.p[s+1],t.p[s+2]]),a=i(o[0],o[1],o[2]);this.positions.push(o[0],o[1],o[2]),this.colors.push(a[0],a[1],a[2])}for(let s=0;s<t.i.length;s++)this.indices.push(r+t.i[s])}toBufferGeometry(){const t=new mn;return t.setAttribute("position",new ve(this.positions,3)),t.setAttribute("color",new ve(this.colors,3)),t.setIndex(this.indices),t.computeVertexNormals(),t}}function Ar(n,t){const e=[],i=[],r=[];for(let s=0;s<=t;s++){const o=Math.PI*s/t,a=Math.sin(o),c=Math.cos(o);for(let l=0;l<=n;l++){const u=2*Math.PI*l/n,h=a*Math.cos(u),d=c,p=a*Math.sin(u);e.push(h,d,p),i.push(h,d,p)}}for(let s=0;s<t;s++)for(let o=0;o<n;o++){const a=s*(n+1)+o,c=a+n+1;r.push(a,a+1,c,a+1,c+1,c)}return{p:e,n:i,i:r}}function jo(n){const t=[],e=[],i=[];for(let s=0;s<=n;s++){const o=2*Math.PI*s/n,a=Math.cos(o),c=Math.sin(o);t.push(a,0,c),e.push(a,0,c),t.push(a,1,c),e.push(a,0,c)}for(let s=0;s<n;s++){const o=s*2;i.push(o,o+1,o+2,o+1,o+3,o+2)}const r=t.length/3;t.push(0,0,0),e.push(0,-1,0),t.push(0,1,0),e.push(0,1,0);for(let s=0;s<n;s++){const o=2*Math.PI*s/n,a=2*Math.PI*(s+1)/n,c=t.length/3;t.push(Math.cos(o),0,Math.sin(o)),e.push(0,-1,0),t.push(Math.cos(a),0,Math.sin(a)),e.push(0,-1,0),i.push(r,c+1,c);const l=t.length/3;t.push(Math.cos(o),1,Math.sin(o)),e.push(0,1,0),t.push(Math.cos(a),1,Math.sin(a)),e.push(0,1,0),i.push(r+1,l,l+1)}return{p:t,n:e,i}}const Vv=""+new URL("bark_albedo-DReMtPgm.png",import.meta.url).href,Wv=""+new URL("tunnel-dirt_albedo-DgMZYBLi.png",import.meta.url).href,Xv=""+new URL("lawn-soil_albedo-mTvxXfeR.png",import.meta.url).href,Yv=""+new URL("stone_albedo-CltKTJgX.png",import.meta.url).href,qv=""+new URL("mushroom-cap_albedo-CRHQ2riL.png",import.meta.url).href,xo=new Float32Array(256);for(let n=0;n<256;n++){const t=n/255;xo[n]=t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function $v(n,t){const e=document.createElement("canvas");e.width=n.width,e.height=n.height;const i=e.getContext("2d",{willReadFrequently:!0});i.drawImage(n,0,0);const r=i.getImageData(0,0,e.width,e.height).data;let s=0,o=0,a=0;const c=e.width*e.height;for(let l=0;l<r.length;l+=4)s+=xo[r[l]],o+=xo[r[l+1]],a+=xo[r[l+2]];t.set(Math.max(s/c,.001),Math.max(o/c,.001),Math.max(a/c,.001))}const Kv=new Uv;function _s(n,t){const e=new k(.5,.5,.5),i=Kv.load(n,r=>{try{$v(r.image,e)}catch(s){console.warn("albedo mean unavailable",s)}});return i.colorSpace=ln,i.wrapS=i.wrapT=Do,i.repeat.set(1/t,1/t),i.anisotropy=4,i.userData.meanLinear=e,i}const jv=5,Zv=16,Jv=45,Qv=12,tM=2.5;let eM=null,nM=null,iM=null,rM=null,sM=null;function Bl(){return eM||(eM=_s(Wv,jv))}function oM(){return nM||(nM=_s(Vv,Zv))}function aM(){return iM||(iM=_s(Xv,Jv))}function cM(){return rM||(rM=_s(Yv,Qv))}function pf(){return sM||(sM=_s(qv,tM))}const lM=`
uniform vec3 uTexMid;
uniform vec2 uTexRepeat;
uniform float uTexStrength;
varying vec3 vTexWorld;
varying vec3 vTexNormal;
vec3 gTriTex = vec3(1.0);   // filled by the <map_fragment> injection below,
                            // reused by the emissive one (which runs later)
`,uM=4,hM=`
{
  vec3 tn = normalize(vTexNormal);
  vec3 bw = pow(abs(tn), vec3(${uM.toFixed(1)}));
  bw /= max(bw.x + bw.y + bw.z, 1e-4);
  vec3 wp = vTexWorld;
  vec3 tex = texture2D(map, wp.zy * uTexRepeat).rgb * bw.x
           + texture2D(map, wp.xz * uTexRepeat).rgb * bw.y
           + texture2D(map, wp.xy * uTexRepeat).rgb * bw.z;
  // pow, not mix(1, ratio): the sample is linear, so a highlight sits 3x
  // above the mean where perceptually it is barely twice as bright, and a
  // linear blend toward white keeps those highlights while flattening the
  // darks. A gamma on the ratio compresses both sides by the same factor and
  // leaves 1.0 (the mean) fixed, so uTexStrength really is "how much grain",
  // with the vertex colour untouched at the average.
  gTriTex = pow(max(tex / uTexMid, vec3(1e-3)), vec3(uTexStrength));
  diffuseColor.rgb *= gTriTex;
}
`;function mf(n,t){Object.assign(n.uniforms,t),n.vertexShader=n.vertexShader.replace("#include <common>",`varying vec3 vTexWorld;
varying vec3 vTexNormal;
#include <common>`).replace("#include <project_vertex>",`#include <project_vertex>
      vec4 texLocal = vec4(transformed, 1.0);
      vec3 texNrm = objectNormal;
      #ifdef USE_INSTANCING
        texLocal = instanceMatrix * texLocal;
        texNrm = mat3(instanceMatrix) * texNrm;
      #endif
      vTexWorld = (modelMatrix * texLocal).xyz;
      vTexNormal = mat3(modelMatrix) * texNrm;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",lM+`
#include <common>`).replace("#include <map_fragment>",hM)}function gf(n,t){return{uTexMid:{value:n.userData.meanLinear},uTexRepeat:{value:n.repeat},uTexStrength:{value:t}}}function Fr({map:n,strength:t=1,...e}){const i=new Ke({vertexColors:!0,roughness:.95,metalness:0,map:n,...e}),r=gf(n,t);return i.userData.texUniforms=r,i.onBeforeCompile=s=>mf(s,r),i.userData.shaderTag="triplanar-albedo",i.customProgramCacheKey=()=>"triplanar-albedo",i}function _f({map:n,strength:t=1,emissive:e=1.6,...i}){const r=new Ke({vertexColors:!0,roughness:.6,metalness:0,map:n,...i}),s=gf(n,t);return r.userData.texUniforms=s,r.onBeforeCompile=o=>{mf(o,s),o.fragmentShader=o.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
       totalEmissiveRadiance += vColor * gTriTex * ${e.toFixed(2)};`)},r.userData.shaderTag="triplanar-emissive",r.customProgramCacheKey=()=>"triplanar-emissive",r}const vo=2.2,ge=-166,Be=0,xr=7.2*vo,zl=-132,Bo=32,nl=[-9,-140],ne=[13,0,-124],il=15,dM=2.6;function Oe(n){const t=(n-zl)/Bo;return t>-1&&t<1?xr+(Bo-xr)*Math.pow(Math.sqrt(1-t*t),.72):xr}function oe(n,t){let e=.22*ie(n*.11+11,t*.11+5);const i=Math.hypot(n-ne[0],t-ne[2]);if(i<il){const r=1-i/il;e+=dM*r*r*(3-2*r)}return e}const rl=[],dr=[],xf=[];function kl(n,t){for(let e=0;e<rl.length;e++){const i=rl[e],s=Math.atan2(Math.sin(n-i.th),Math.cos(n-i.th))/i.rTh,o=(t-i.z)/i.rZ;if(s*s+o*o<1)return!0}return!1}function fM(n,t){return kl(t,n)?1/0:Oe(n)}function Gl(){const n={};for(const t of dr)n[t.name]=t;return n}function Zo(n,t){for(let s=0;s<dr.length;s++){const o=dr[s],a=n-o.origin[0],c=t-o.origin[2],l=a*o.dir[0]+c*o.dir[2];if(l<=-.5||l>=o.uMax+1)continue;const u=a*o.side[0]+c*o.side[2],h=Math.max(o.profR(Q(l,0,o.uMax))*.82-1.2,2.2);if(Math.abs(u)>=h+3)continue;const d=Q(l,-.5,o.uMax-1.2),p=Q(u,-h,h);return[o.origin[0]+o.dir[0]*d+o.side[0]*p,o.origin[2]+o.dir[2]*d+o.side[2]*p]}const e=Math.max(Oe(t)*.82-1.6,3);let i=e,r=e;for(let s=0;s<dr.length;s++){const o=dr[s],a=Q(1-Math.abs(t-o.origin[2])/o.doorFalloff,0,1);if(a<=0)continue;const c=bt(e,Math.abs(o.origin[0])+1.5,a);o.dir[0]>0?c>i&&(i=c):c>r&&(r=c)}return[Q(n,-r,i),Math.max(t,ge+5)]}const Hl=new Z("#6d5130"),xs=new Z("#5a4226"),Gi=new Z("#332412"),pM=new Z("#4c5f2f"),mM=new Z(pM).lerp(Gi,.62).multiplyScalar(.58);function jn(n,t,e){return new Z(n).lerp(t,Q(e,0,1))}function Mo(n,t,e,i){return ie(Math.cos(n)*e+t*i+37,Math.sin(n)*e+t*i*.7+91)}function Vl(n){return .86*Math.pow(xr/n,.35)}function Jr(n){const t=Oe(n);return 1.2+t*Vl(t)*.62}function Ni(n,t,e){const i=Oe(t),r=Vl(i),s=.84+.2*Mo(n,t,1.6,.1)+.1*Mo(n,t,4.1,.29)+.05*Mo(n,t,9.3,.62),o=i*s*(1-(e||0)),a=Math.cos(n)*o,c=Math.sin(n)*o*r+Jr(t),l=oe(a,t);return[a,Math.max(c,l),t,s]}function gM(n,t){const e=jn(Gi,xs,n*.8+.12);return jn(e,Hl,t)}function _M(n){const t=jn(Gi,xs,n*.8+.12);return jn(t,Hl,.28+n*.18)}function xM(n){const t=jn(Gi,xs,n*.75+.15);return jn(t,Hl,.55)}function vM(n){const t=jn(Gi,xs,n*.6+.08);return jn(t,mM,.3+n*.3)}function za(n,t,e,i,r,s,o,a,c,l,u,h){const d=Ni(t,e,0),p=[d[0],oe(d[0],d[2]),d[2]],g=re([Math.cos(t),0,1e-4]),x=re(je([0,1,0],g)),m=r+o,f=r+o*2;function T(N){const q=(N-m)/o;return q>-1&&q<1?i+(s-i)*Math.pow(Math.sqrt(1-q*q),.72):i}function y(N){return .86*Math.pow(i/N,.35)}function b(N){const q=T(N);return 1.1+q*y(q)*.6}function S(N,q,nt,ot){return ie(Math.cos(N)*nt+q*ot+c+37,Math.sin(N)*nt+q*ot*.7+c+91)}function E(N,q,nt){const ot=T(q),Dt=y(ot),zt=.84+.2*S(N,q,1.6,.1)+.1*S(N,q,4.1,.29)+.05*S(N,q,9.3,.62),$=ot*zt*(1-(nt||0)),et=Math.cos(N)*$,gt=Math.sin(N)*$*Dt+b(q),ut=p[0]+g[0]*q+x[0]*et,At=p[2]+g[2]*q+x[2]*et,yt=p[1]+gt,Bt=oe(ut,At);return[ut,Math.max(yt,Bt),At,zt]}{const N=Oe(e),q=Vl(N),nt=Math.asin(Q((p[1]+b(0)-Jr(e))/(N*q),-.92,.92)),ot=t+(Math.cos(t)>=0?nt:-nt);rl.push({th:ot,z:e,rTh:Math.max(.16,i*1.8/Oe(e)),rZ:i*1.7})}if(h){const N=p[0]+g[0]*1.2,q=p[2]+g[2]*1.2;xf.push({p:[N,oe(N,q)+2.1,q],c:h,name:n})}const v=new Se,A=1.5,R=[];for(let N=0;N<=f+1e-4;N+=A){const q=[];for(let nt=0;nt<a;nt++){const ot=2*Math.PI*nt/a,Dt=E(ot,N,0),zt=Q((Dt[3]-.84)/.34+.45,0,1);q.push(v.addVertex(Dt[0],Dt[1],Dt[2],u(zt,Dt[0],Dt[1],Dt[2]).multiplyScalar(l).toArray()))}R.push(q)}for(let N=0;N<R.length-1;N++)for(let q=0;q<a;q++){const nt=(q+1)%a;v.addQuad(R[N][q],R[N][nt],R[N+1][nt],R[N+1][q])}const _=p[0]+g[0]*f,M=p[2]+g[2]*f,P=p[1]+b(f)*.6,I=v.addVertex(_,P,M,u(.2,_,P,M).multiplyScalar(l).toArray()),U=R[R.length-1];for(let N=0;N<a;N++)v.addTri(I,U[N],U[(N+1)%a]);const V={name:n,origin:p,dir:g,side:x,uMax:f,uEnd:m,profR:T,pointAt:E,doorFalloff:i*2.2};dr.push(V);const B=p[0]+g[0]*m,Y=p[2]+g[2]*m;return V.center=[B,oe(B,Y),Y],{geometry:v.toBufferGeometry(),branch:V}}function MM(){const n=new Me;n.name="underground";const t=za("granary",Math.PI,-70,3.3*vo,9,13*1.5,10,30,4001,1,u=>_M(u),[.55,.4,.2]),e=za("brood",0,-120,4.2*vo,8,17*1.5,13,34,5117,1,u=>xM(u),[.68,.5,.25]),i=za("midden",0,-40,2.9*vo,7,10*1.5,8,26,6229,.46,u=>vM(u),[.3,.44,.28]);n.add(new Ot(t.geometry,Ks())),n.add(new Ot(e.geometry,Ks())),n.add(new Ot(i.geometry,Ks()));const r=new Se,s=44,o=1.7,a=[];for(let u=ge;u<=3.0001;u+=o){const h=[];for(let d=0;d<s;d++){const p=2*Math.PI*d/s,g=Ni(p,u,0),x=u>-14?1+Math.pow((u+14)/17,2)*.9:1;h.push([g[0]*x,Math.max(g[1]*(x*.5+.5),oe(g[0]*x,u)),u,g[3]])}a.push(h)}for(let u=0;u<a.length;u++){const h=[];for(let d=0;d<s;d++){const p=a[u][d],g=Q(1-Math.abs(p[2]-zl)/(Bo*1.6),0,1),x=Q((p[3]-.84)/.34+.45,0,1),m=ie(p[0]*.13+3,p[2]*.13+8),f=gM(x,g*.45+m*.2);h.push(r.addVertex(p[0],p[1],p[2],f.toArray()))}a[u].idx=h}for(let u=0;u<a.length-1;u++)for(let h=0;h<s;h++){const d=(h+1)%s;kl(2*Math.PI*h/s,a[u][h][2])||r.addQuad(a[u].idx[h],a[u].idx[d],a[u+1].idx[d],a[u+1].idx[h])}{let u=a[0].idx;const h=4;for(let p=1;p<=h;p++){const g=Math.cos(p/h*Math.PI*.5),x=ge-Math.sin(p/h*Math.PI*.5)*9,m=[];for(let f=0;f<s;f++){const T=2*Math.PI*f/s,y=a[0][f],b=.86+.28*Mo(T,x*1.7,2.3,.2),S=y[0]*g*b,E=Jr(ge)+(y[1]-Jr(ge))*g*b,v=jn(Gi,xs,.15+b*.4).multiplyScalar(.35+.3*b);m.push(r.addVertex(S,Math.max(E,oe(S,x)),x,v.toArray()))}for(let f=0;f<s;f++){const T=(f+1)%s;r.addQuad(u[f],u[T],m[T],m[f])}u=m}const d=r.addVertex(0,Jr(ge)*.6,ge-10,Gi.clone().multiplyScalar(.3).toArray());for(let p=0;p<s;p++)r.addTri(d,u[p],u[(p+1)%s])}const c=new Ot(r.toBufferGeometry(),Ks());c.name="tunnel",n.add(c);const l=xf.slice();return l.push({p:[0,5,3],c:[1.15,1.2,1.35],name:"mouth"}),{group:n,doorLights:l,rooms:{granary:t.branch,brood:e.branch,midden:i.branch}}}let ka=null;function Ks(){return ka||(ka=Fr({map:Bl(),strength:.62,side:he})),ka}const Te={x0:-208,x1:400,z0:0,z1:460},Xn={x0:-300,x1:470,z0:0,z1:540},hi=-4.5,pn=n=>{const t=Q(n,0,1);return t*t*(3-2*t)},cn={edgeX:-196,bankTop:2,bankRun:15,depth:5,bedRun:30,farBankAt:68,farBankRun:46,farBankTop:24,blendRun:36};function Xi(n){return cn.edgeX+2*Math.sin(n*.021)+1*Math.sin(n*.047+1.3)}const de={x:332,z:112,r:31,y:-7.2,depth:3.6,bedRun:24,bankTop:-5,bankRun:14,blendRun:20};function Jo(n,t){return Math.hypot(n-de.x,t-de.z)-de.r}function SM(n){return n<=0?de.y+(de.bankTop-de.y)*pn(-n/de.bankRun):de.y-de.depth*pn(n/de.bedRun)}function Zn(n,t){return Math.min(n-Xi(t),Jo(n,t))}function yM(n,t){return t<Be?null:n-Xi(t)<0?cn:Jo(n,t)<0?de:null}function EM(n,t){const e=yM(n,t);return e?e===de?de.y:hi:null}function bM(n,t){return Jo(n,t)<n-Xi(t)?de.y:hi}function TM(n){if(n<=0)return hi+(cn.bankTop-hi)*pn(-n/cn.bankRun);let t=hi-cn.depth*pn(n/cn.bedRun);return n>cn.farBankAt&&(t+=cn.farBankTop*pn((n-cn.farBankAt)/cn.farBankRun)),t}const lh=[{x:0,z:20,r:64,amp:-3.5},{x:62,z:78,r:62,amp:16},{x:96,z:44,r:40,amp:9},{x:88,z:168,r:78,amp:-14},{x:88,z:168,r:30,amp:4},{x:-85,z:95,r:46,amp:6},{x:-85,z:95,r:26,amp:1.5},{x:-150,z:150,r:66,amp:13},{x:-132,z:44,r:50,amp:8},{x:24,z:128,r:44,amp:-8},{x:236,z:300,r:118,amp:26},{x:300,z:214,r:88,amp:18},{x:40,z:330,r:120,amp:-5},{x:96,z:386,r:70,amp:4},{x:340,z:118,r:76,amp:-16},{x:340,z:118,r:26,amp:5},{x:384,z:328,r:92,amp:21},{x:-40,z:520,r:190,amp:38},{x:190,z:512,r:175,amp:34},{x:468,z:190,r:165,amp:34},{x:440,z:420,r:130,amp:26}];function uh(n,t){let e=(ie(n*.012,t*.012)-.5)*4.2+(ie(n*.052,t*.052)-.5)*1.3;for(let i=0;i<lh.length;i++){const r=lh[i],s=Math.hypot(n-r.x,t-r.z);s>=r.r||(e+=r.amp*pn(1-s/r.r))}return e}function Ft(n,t){if(t<Be)return oe(n,t);const e=n-Xi(t),i=1-pn(e/cn.blendRun);let r=i>0?bt(uh(n,t),TM(-e),i):uh(n,t);const s=Jo(n,t);if(s<de.blendRun){const a=1-pn(s/de.blendRun);a>0&&(r=bt(r,SM(-s),a))}const o=(1-pn(t/26))*Q(1-Math.abs(n)/40,0,1);return o>0?bt(r,oe(n,0),o):r}function vs(n,t){return re([Ft(n-1.4,t)-Ft(n+1.4,t),2*1.4,Ft(n,t-1.4)-Ft(n,t+1.4)])}function Or(n,t){const i=(Ft(n+1.5,t)-Ft(n-1.5,t))/3,r=(Ft(n,t+1.5)-Ft(n,t-1.5))/(2*1.5);return Math.hypot(i,r)}function gi(n,t){const e=EM(n,t);return e===null?0:Math.max(0,e-Ft(n,t))}const vf=.62;function Wl(n,t){const e=ie(n*.006,t*.006),i=Q(ie(n*.018,t*.018)*2.3-.55+(e-.5)*.6,0,1)*(.55+.45*ie(n*.07,t*.07)),r=gi(n,t),s=Zn(n,t),o=Or(n,t);let a="soil";return r>0?a="water":s<14?a="sand":o>vf?a="rock":i>.5&&(a="moss"),{kind:a,moss:i,slope:o,depth:r,toWater:s}}function wM(n,t){const e=Wl(n,t);return{y:Ft(n,t),normal:vs(n,t),slope:e.slope,soil:e.kind,moss:e.moss,waterDepth:e.depth,distToWater:e.toWater,diggable:e.depth===0&&e.slope<=vf&&e.toWater>10}}function sl(n,t){const e=Xi(t)+1;return[Q(Math.max(n,e),Te.x0,Te.x1),Q(t,Te.z0,Te.z1)]}const AM=new Z("#86673B"),RM=new Z("#5A4529"),CM=new Z("#5F8034"),PM=new Z("#9DBE58"),LM=new Z("#A79463"),IM=new Z("#4A5540"),DM=new Z("#7C7566");function hn(n,t,e){return new Z(n).lerp(t,Q(e,0,1))}const js=6;function UM(){const{x0:n,x1:t,z0:e,z1:i}=Xn,r=Math.floor((t-n)/js)+1,s=Math.floor((i-e)/js)+1,o=new Se;for(let c=0;c<r;c++)for(let l=0;l<s;l++){const u=n+c*js,h=e+l*js,d=Ft(u,h),p=ie(u*.006,h*.006),g=Q(ie(u*.018,h*.018)*2.3-.55+(p-.5)*.6,0,1)*(.55+.45*ie(u*.07,h*.07));let x=hn(hn(AM,RM,ie(u*.09,h*.09)),hn(CM,PM,ie(u*.05,h*.05)),g);const m=Zn(u,h);if(m<30){x=hn(x,LM,pn((30-m)/26));const T=bM(u,h);d<T+.6&&(x=hn(x,IM,pn((T+.6-d)/3.5)))}const f=Or(u,h);f>.45&&(x=hn(x,DM,pn((f-.45)/.5)*.75)),o.addVertex(u,d,h,x.toArray())}for(let c=0;c<r-1;c++)for(let l=0;l<s-1;l++){const u=c*s+l,h=(c+1)*s+l,d=(c+1)*s+l+1,p=c*s+l+1;o.addQuad(u,h,d,p)}const a=new Ot(o.toBufferGeometry(),Fr({map:aM(),strength:.8,side:he}));return a.name="lawn",a.receiveShadow=!0,a}const NM=new Z("#9CC6E4"),FM=`
uniform float uWaveTime;
vec2 waterWaveGrad(vec3 p, out float h) {
  float a = p.x * 0.085 + uWaveTime * 1.05;
  float b = p.z * 0.115 - uWaveTime * 0.77 + p.x * 0.04;
  float c = p.z * 0.031 + uWaveTime * 0.31;
  h = sin(a) * 0.24 + sin(b) * 0.17 + sin(c) * 0.30;
  return vec2(cos(a) * 0.24 * 0.085 + cos(b) * 0.17 * 0.04,
              cos(b) * 0.17 * 0.115 + cos(c) * 0.30 * 0.031);
}
`;function OM(){const{x0:n,z0:t,z1:e}=Xn,i=56,r=14,s=new Se,o=new Z("#3E6B7A"),a=new Z("#22414F");for(let f=0;f<=i;f++){const T=t+(e-t)*(f/i),y=Xi(T)+1.2;for(let b=0;b<=r;b++){const S=bt(n,y,b/r),E=Q((hi-Ft(S,T))/6,0,1);s.addVertex(S,hi,T,hn(o,a,E).toArray())}}for(let f=0;f<i;f++)for(let T=0;T<r;T++){const y=f*(r+1)+T;s.addQuad(y+r+1,y+r+2,y+1,y)}const c=new Ke({vertexColors:!0,roughness:.16,metalness:0,transparent:!0,opacity:.86,side:he}),l={uWaveTime:{value:0},uSkyCol:{value:NM}};c.userData.waterUniforms=l,c.userData.shaderTag="water-ripple",c.onBeforeCompile=f=>{Object.assign(f.uniforms,l),f.vertexShader=f.vertexShader.replace("#include <common>",FM+`
#include <common>`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        float wh; vec2 wg = waterWaveGrad(position, wh);
        objectNormal = normalize(vec3(-wg.x, 1.0, -wg.y));`).replace("#include <begin_vertex>",`#include <begin_vertex>
        transformed.y += wh;`),f.fragmentShader=f.fragmentShader.replace("#include <common>",`uniform vec3 uSkyCol;
#include <common>`).replace("#include <tonemapping_fragment>",`
        {
          float fres = pow(1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0), 3.0);
          gl_FragColor.rgb = mix(gl_FragColor.rgb, uSkyCol, 0.13 + 0.72 * fres);
        }
        #include <tonemapping_fragment>`)},c.customProgramCacheKey=()=>"water-ripple";const u=new Se,h=6,d=26,p=.9,g=u.addVertex(de.x,de.y,de.z,a.toArray()),x=[];for(let f=1;f<=h;f++){const T=(de.r+p)*(f/h),y=[];for(let b=0;b<d;b++){const S=2*Math.PI*b/d,E=de.x+Math.cos(S)*T,v=de.z+Math.sin(S)*T,A=Q((de.y-Ft(E,v))/4,0,1);y.push(u.addVertex(E,de.y,v,hn(o,a,A).toArray()))}x.push(y)}for(let f=0;f<d;f++){const T=(f+1)%d;u.addTri(g,x[0][T],x[0][f]);for(let y=0;y<h-1;y++)u.addQuad(x[y][f],x[y][T],x[y+1][T],x[y+1][f])}const m=new Me;m.name="water";for(const f of[s.toBufferGeometry(),u.toBufferGeometry()]){const T=new Ot(f,c);T.receiveShadow=!1,m.add(T)}return{mesh:m,update(f){l.uWaveTime.value=f}}}const BM=[{r:442,segs:96,base:-120,peak:165,seed:3.1,rough:.55,haze:.72,tint:"#8FA6C4"},{r:384,segs:96,base:-120,peak:118,seed:11.7,rough:.75,haze:.5,tint:"#6E86A6"}];function hh(n,t,e){const i=ie(Math.cos(n)*2.1+t,Math.sin(n)*2.1+t),r=ie(Math.cos(n)*5.3+t*2,Math.sin(n)*5.3+t*2),s=ie(Math.cos(n)*11+t*3,Math.sin(n)*11+t*3);return Q(.3+(i-.5)*1.5+(r-.5)*e+(s-.5)*e*.45,.05,1)}function zM(n="#8B8399",t="#AFC8D8"){const e=new Z(n),i=new Z(t),r=new Me;r.name="horizon";const s=[];for(const a of BM){const c=new Se,l=[],u=new Z(a.tint),h=[],d=[],p=[];for(let x=0;x<=a.segs;x++){const m=x/a.segs*Math.PI*2,f=hh(m,a.seed,a.rough),T=a.base+(a.peak-a.base)*f,y=Math.cos(m)*a.r,b=Math.sin(m)*a.r,S=hh(m-.04,a.seed,a.rough),E=Q(.5+(f-S)*6,0,1),v=hn(u.clone().multiplyScalar(.72),u.clone().multiplyScalar(1.16),E),A=M=>{const P=hn(v,M,a.haze*.75),I=hn(v.clone().multiplyScalar(.85),M,Math.min(1,a.haze+.22));return[P,hn(P,I,.6),I]},R=A(e),_=A(i);h.push(c.addVertex(y,T,b,R[0].toArray())),d.push(c.addVertex(y,bt(a.base,T,.45),b,R[1].toArray())),p.push(c.addVertex(y,a.base,b,R[2].toArray()));for(const M of _)l.push(M.r,M.g,M.b)}for(let x=0;x<a.segs;x++)c.addQuad(h[x],h[x+1],d[x+1],d[x]),c.addQuad(d[x],d[x+1],p[x+1],p[x]);const g=new Ot(c.toBufferGeometry(),new qo({vertexColors:!0,fog:!1,side:he,depthTest:!1,depthWrite:!1}));g.renderOrder=-1e3,g.frustumCulled=!1,r.add(g),s.push({mesh:g,base:g.geometry.attributes.color.array.slice(),alt:new Float32Array(l)})}let o=-1;return{group:r,update(a,c=0){if(r.position.set(a.position.x,0,a.position.z),!(Math.abs(c-o)<.002)){o=c;for(const l of s){const u=l.mesh.geometry.attributes.color;for(let h=0;h<u.array.length;h++)u.array[h]=l.base[h]+(l.alt[h]-l.base[h])*c;u.needsUpdate=!0}}}}}const Qr={position:new k(0,0,0),radius:.9};function Mf(n){return n<42?Math.min(Math.max(n/40,.55),1.45):Math.min(Math.max(2.1+(n-42)*.038,2.1),4.4)}function kM(n){return Mf(n)*.5}function fi(n,t){const e=Math.cos(n.ang),i=Math.sin(n.ang),r=t*t*n.h*.26;return[n.x+e*r,n.baseY+n.h*t*(1-t*.13),n.z+i*r]}function zo(n,t){const e=fi(n,t),i=fi(n,Math.min(t+.01,1)),r=re(Kn(i,e)),s=[-Math.sin(n.ang),0,Math.cos(n.ang)],o=re(je(r,s));return{pos:e,tangent:r,width:s,normal:o}}const Ga=6;function GM(){const n=[],t=[],e=[],i=[];for(let s=0;s<=Ga;s++){const o=s/Ga;n.push(-.5,o,0,.5,o,0),t.push(o,o),e.push(-1,1)}for(let s=1;s<=Ga;s++){const o=(s-1)*2,a=o+1,c=s*2,l=c+1;i.push(o,a,l,o,l,c)}const r=new mn;return r.setAttribute("position",new ve(n,3)),r.setAttribute("aT",new ve(t,1)),r.setAttribute("aSide",new ve(e,1)),r.setIndex(i),r}const HM=new Z("#5A7331"),VM=new Z("#8FB055"),WM=new Z("#C6DC82"),dh=`
attribute float aT;
attribute float aSide;
attribute vec3 aBase;
attribute float aH;
attribute float aAng;
attribute float aPhase;
attribute vec3 aTip;
attribute float aWidth;
attribute float aTwist;
uniform float uTime;
uniform float uWind;
uniform vec3 uAntPos;
uniform float uAntRadius;
uniform vec3 uBaseColor;

/* Fills pos with the displaced vertex, nrm with its normal, in object
   space. Both passes call this; only the visible one uses nrm. */
void grassShape(out vec3 pos, out vec3 nrm) {
  float gT = aT;
  float dirX = cos(aAng), dirZ = sin(aAng);
  vec3 perp = vec3(-dirZ, 0.0, dirX);
  float dBend = 0.52 * aH * gT;
  vec3 tangentDir = normalize(vec3(dirX * dBend, aH * (1.0 - 0.26 * gT), dirZ * dBend));
  vec3 n0 = normalize(cross(tangentDir, perp));

  /* A twist along the blade (herbe-brins 5b). perp used to be fixed, so every
     ribbon faced one direction over its whole length and the field read as
     cards all hung the same way. One float per instance: some blades now
     present their edge and some their face, and each changes along itself. */
  float roll = aTwist * gT;
  float cr = cos(roll), sr = sin(roll);
  vec3 perpRolled = perp * cr + n0 * sr;
  vec3 nRolled    = n0   * cr - perp * sr;

  /* A keel in the NORMAL, not in the geometry (5a). A real blade is folded in
     a V across its section, and that fold is what gives it a light side and a
     dark side. Tilting the normal across the ribbon puts the two edges 63
     degrees apart for zero extra vertices. */
  nrm = normalize(nRolled - perpRolled * (aSide * 0.62));

  float bend = gT * gT * aH * 0.26;
  /* Holds its width for the first 60% and then points, instead of narrowing
     from the base (2). It reaches exactly zero, so the old + 0.05 goes: a tip
     cut off square is the loudest geometric tell in the set. The 0.02 floor
     only avoids a degenerate normal exactly at the tip. */
  float taperK = pow(1.0 - pow(gT, 2.6), 0.55);
  float width = aWidth * 0.5 * taperK + 0.02;
  vec3 curvePos = aBase + vec3(dirX * bend, aH * gT * (1.0 - gT * 0.13), dirZ * bend);
  pos = curvePos + perpRolled * (width * aSide);

  // idle wind sway, phase-desynced per instance so the field doesn't move as
  // one rigid sheet
  float ph = aBase.x * 0.07 + aBase.z * 0.05 + aPhase;
  float amp = gT * gT * uWind;
  pos.x += sin(uTime * 1.35 + ph) * amp + sin(uTime * 3.1 + ph * 2.3) * amp * 0.3;
  pos.z += cos(uTime * 1.05 + ph * 1.4) * amp * 0.75;

  // contact bend: push away from the ant, stronger near the tip and within
  // uAntRadius -- see core/antState.js for the contract
  vec2 toBlade = pos.xz - uAntPos.xz;
  float bladeDist = length(toBlade);
  float influence = clamp(1.0 - bladeDist / max(uAntRadius, 0.001), 0.0, 1.0);
  influence = influence * influence * gT;
  vec2 pushDir = bladeDist > 0.0001 ? toBlade / bladeDist : vec2(1.0, 0.0);
  pos.xz += pushDir * influence * aH * 0.22;
}
`;function Sf({count:n=1800,seed:t=7}={}){const e=gs(t),i=GM(),r=new Float32Array(n*3),s=new Float32Array(n),o=new Float32Array(n),a=new Float32Array(n),c=new Float32Array(n*3),l=new Float32Array(n),u=new Float32Array(n),h=[];let d=0,p=0;for(;d<n&&p<n*8;){p++;const R=bt(Xn.x0+8,Te.x1-4,e()),_=6+e()*(Te.z1-6);if(gi(R,_)>0||Math.abs(R)<16&&_<34&&e()<.82)continue;const P=.72+.28*ie(R*.01,_*.01),I=e()<.22?48+e()*60*P:(14+e()*26)*P,U=e()*Math.PI*2,V=Ft(R,_),B=new Z(VM).lerp(WM,e());r[d*3]=R,r[d*3+1]=V,r[d*3+2]=_,s[d]=I,o[d]=U,a[d]=e()*Math.PI*2,c[d*3]=B.r,c[d*3+1]=B.g,c[d*3+2]=B.b,l[d]=Mf(I),u[d]=(e()*2-1)*.85,h.push({i:d,x:R,z:_,h:I,baseY:V,w:kM(I),ang:U}),d++}const g=d;i.setAttribute("aBase",new Cn(r.subarray(0,g*3),3)),i.setAttribute("aH",new Cn(s.subarray(0,g),1)),i.setAttribute("aAng",new Cn(o.subarray(0,g),1)),i.setAttribute("aPhase",new Cn(a.subarray(0,g),1)),i.setAttribute("aTip",new Cn(c.subarray(0,g*3),3)),i.setAttribute("aWidth",new Cn(l.subarray(0,g),1)),i.setAttribute("aTwist",new Cn(u.subarray(0,g),1));const x=(Xn.x0+Te.x1)/2,m=(Te.z0+Te.z1)/2,f=Math.hypot(Te.x1-x,Te.z1-m)+120;i.boundingSphere=new Ur(new k(x,40,m),f);const T={uTime:{value:0},uWind:{value:.55},uAntPos:{value:new k(0,0,-9999)},uAntRadius:{value:.9},uBaseColor:{value:new Z(HM)},uOccNear:{value:5},uOccFar:{value:16},uTransl:{value:.16},uCastA:{value:new k(0,0,0)},uCastB:{value:new k(0,0,0)},uCastRadius:{value:46}},y=new Ke({roughness:.85,metalness:0,side:he});y.extensions={derivatives:!0},y.onBeforeCompile=R=>{Object.assign(R.uniforms,T),R.vertexShader=R.vertexShader.replace("#include <common>",dh+`
        varying vec3 vGrassColor;
        varying float vGrassDist;
        varying vec3 vGrassRay; // x: distance along the camera->ant ray, y: perpendicular distance from it, z: camera->ant distance
        #include <common>
      `).replace("#include <beginnormal_vertex>",`
        vec3 gPos, gNrm;
        grassShape(gPos, gNrm);
        vec3 objectNormal = gNrm;
      `).replace("#include <begin_vertex>",`
        vec3 transformed = gPos;

        vGrassColor = mix(uBaseColor, aTip, aT) * (0.52 + 0.48 * aT);
        vec3 grassWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vGrassDist = distance(grassWorld, cameraPosition);
        // where this blade sits relative to the line of sight from the
        // camera to the ant — see the fragment side for what it's for
        vec3 toAnt = uAntPos - cameraPosition;
        float antDist = length(toAnt);
        vec3 sightDir = toAnt / max(antDist, 0.001);
        vec3 rel = grassWorld - cameraPosition;
        float along = dot(rel, sightDir);
        vGrassRay = vec3(along, length(rel - sightDir * along), antDist);
      `),R.fragmentShader=R.fragmentShader.replace("#include <common>",`
        varying vec3 vGrassColor;
        varying float vGrassDist;
        varying vec3 vGrassRay;
        uniform float uOccNear;
        uniform float uOccFar;
        uniform float uTransl;
        #include <common>
      `).replace("#include <clipping_planes_fragment>",`
        #include <clipping_planes_fragment>
        // Two reasons a blade gets dissolved. Near-camera: anything within
        // arm's reach of the eye is a slab across the whole screen and tells
        // the player nothing. In the line of sight: blades standing between
        // the camera and the ant hide the character outright — at ant scale,
        // with a 36-unit boom, a normal clump of grass is a wall. The old
        // prototype handled the second case camera-side, raycasting GRASS[]
        // (unoccludedFraction(), section 7); doing it here instead clears
        // exactly the blades that are in the way and leaves the rest of the
        // field standing, rather than yanking the whole camera in.
        float cone = 1.0 - smoothstep(4.0, 7.5, vGrassRay.y);
        float inFront = smoothstep(0.5, 3.0, vGrassRay.x)
                      * (1.0 - smoothstep(vGrassRay.z - 4.0, vGrassRay.z - 1.0, vGrassRay.x));
        float occFade = min(smoothstep(uOccNear, uOccFar, vGrassDist), 1.0 - cone * inFront);
        if (occFade < 0.999) {
          // 4x4 ordered Bayer threshold, computed rather than table-indexed
          // (dynamic indexing into a local array is not portable GLSL). A
          // fixed screen-space pattern, not noise, so the dissolve doesn't
          // crawl or shimmer as the camera moves.
          vec2 b1 = mod(gl_FragCoord.xy, 2.0);
          vec2 b2 = floor(0.5 * mod(gl_FragCoord.xy, 4.0));
          float th = (4.0 * mix(mix(0.0, 2.0, b1.y), mix(3.0, 1.0, b1.y), b1.x)
                          + mix(mix(0.0, 2.0, b2.y), mix(3.0, 1.0, b2.y), b2.x) + 0.5) / 16.0;
          if (occFade < th) discard;
        }
      `).replace("#include <color_fragment>",`
        #include <color_fragment>
        diffuseColor.rgb *= vGrassColor;
      `).replace("#include <tonemapping_fragment>",`
        gl_FragColor.rgb += vGrassColor * uTransl;
        #include <tonemapping_fragment>
      `)};const b=new hf({depthPacking:Wd,side:he});b.onBeforeCompile=R=>{Object.assign(R.uniforms,T),R.vertexShader=R.vertexShader.replace("#include <common>",dh+`
        uniform vec3 uCastA;
        uniform vec3 uCastB;
        uniform float uCastRadius;
        #include <common>
      `).replace("#include <begin_vertex>",`
        vec3 gPos, gNrm;
        grassShape(gPos, gNrm);
        vec3 transformed = gPos;
      `).replace("#include <project_vertex>",`
        #include <project_vertex>
        {
          float dA = distance(aBase.xz, uCastA.xz);
          float dB = distance(aBase.xz, uCastB.xz);
          if (min(dA, dB) > uCastRadius) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
        }
      `)},b.customProgramCacheKey=()=>"grass-depth";const S=new Nl(i,y,g);S.name="grass",S.castShadow=!0,S.receiveShadow=!0,S.customDepthMaterial=b;const E=new Qt;for(let R=0;R<g;R++)S.setMatrixAt(R,E);S.instanceMatrix.needsUpdate=!0;function v(R,_,M){T.uTime.value=_,T.uAntPos.value.copy(Qr.position),T.uAntRadius.value=Qr.radius,T.uCastA.value.copy(Qr.position),M&&T.uCastB.value.copy(M.position)}function A(R){T.uCastRadius.value=R}return{mesh:S,footprints:h,update:v,setCastRadius:A}}const Ht={x:-85,z:95,h:340,ang:Math.PI/2,w:22};Ht.baseY=Ft(Ht.x,Ht.z);const XM=new Z("#5a4226"),YM=new Z("#332412"),yf=new Z("#4a3418"),Ha=new Z(XM).lerp(yf,.3),Va=new Z(YM).lerp(yf,.55),fh=new Z("#6C8E3C"),ph=new Z("#AECB6E");function Zs(n,t,e){return new Z(n).lerp(t,Q(e,0,1))}const Ln=.8,qM=6.2;function Fi(n){return fi(Ht,n)}function ol(n){const t=Fi(n),e=Fi(Math.min(n+.01,1)),i=re(Kn(e,t)),r=Math.abs(i[1])<.97?[0,1,0]:[1,0,0],s=re(je(r,i));return{p:t,x:s,z:je(s,i)}}function Hi(n){return bt(Ht.w,qM,Math.pow(Q(n,0,Ln)/Ln,.7))}const Xl=Ln*.55,mh=Math.PI*1.511,$M=98,KM=36,jM=9.6,Ef=5,al=ol(Xl),bf=re(ae(wt(al.x,Math.cos(mh)),wt(al.z,Math.sin(mh)))),ZM=ae(al.p,wt(bf,Hi(Xl)*.7));function ts(n){const t=1-(1-n)*(1-n);return ae(ZM,ae(wt(bf,n*$M),[0,t*KM,0]))}function Tf(n){return bt(jM,Ef,Q(n,0,1))}function wf(n){const t=ts(Q(n-.005,0,1)),e=ts(Q(n+.005,0,1)),i=re(Kn(e,t)),r=re(je(i,[0,1,0])),s=re(je(r,i));return{pos:ts(n),fwd:i,side:r,up:s}}const In={splitT:Xl,point:ts,radius:Tf,basis:wf,tipPos:ts(1),tipRadius:Ef};Ht.walkBranch=In;function gh(n){const t=new Se,e=new Se,i=gs(n?481001:481002),r=n?20:4,s=n?16:6,o=[];for(let g=0;g<=r;g++){const x=g/r*Ln,m=ol(x),f=Hi(x),T=[];for(let y=0;y<s;y++){const b=2*Math.PI*y/s,S=n?.86+.1*ie(Math.cos(b)*2.2+x*13,Math.sin(b)*2.2+x*13+30)+.06*ie(Math.cos(b)*6.4+x*29+8,Math.sin(b)*6.4+x*29+51):1,E=f*S,v=ae(m.p,ae(wt(m.x,Math.cos(b)*E),wt(m.z,Math.sin(b)*E))),A=Q((S-.86)/.2+.4,0,1),R=Zs(Va,Ha,A);T.push(t.addVertex(v[0],v[1],v[2],R.toArray()))}o.push(T)}for(let g=0;g<o.length-1;g++)for(let x=0;x<s;x++){const m=(x+1)%s;t.addQuad(o[g][x],o[g][m],o[g+1][m],o[g+1][x])}const a=jo(n?7:5),c=Ar(n?8:6,n?5:4),l=Zs(fh,ph,.42);function u(g,x,m){const f=x*(.9+i()*.3),T=x*(.75+i()*.25),y={x:[f,0,0],y:[0,T,0],z:[0,0,f],p:g};e.bake(c,y,()=>(n?Zs(fh,ph,m):l).toArray())}const h=n?10:3,d=n?10:5,p=[];for(let g=0;g<=h;g++){const x=g/h,m=wf(x),f=Tf(x),T=[];for(let y=0;y<d;y++){const b=2*Math.PI*y/d,S=n?.9+.1*ie(Math.cos(b)*2.4+x*11+100,Math.sin(b)*2.4+x*11+44):1,E=f*S,v=ae(m.pos,ae(wt(m.side,Math.cos(b)*E),wt(m.up,Math.sin(b)*E))),A=Zs(Va,Ha,Q((S-.9)/.1,0,1));T.push(t.addVertex(v[0],v[1],v[2],A.toArray()))}p.push(T)}for(let g=0;g<p.length-1;g++)for(let x=0;x<d;x++){const m=(x+1)%d;t.addQuad(p[g][x],p[g][m],p[g+1][m],p[g+1][x])}if(n){const g=Fi(0),x=Ht.w;for(let f=0;f<4;f++){const T=f/4*Math.PI*2+i()*.5,y=x*1.6+i()*3,b=[g[0],g[1]+x*.7,g[2]],S=[g[0]+Math.cos(T)*y,g[1]-1.6,g[2]+Math.sin(T)*y],E=Ye(b,S,x*.5);t.bake(a,E,()=>Va.toArray())}const m=5;for(let f=0;f<m;f++){const T=Ln*(.6+f/m*.35+i()*.03),y=ol(T),b=f/m*Math.PI*2+i()*.7,S=re(ae(wt(y.x,Math.cos(b)),wt(y.z,Math.sin(b)))),E=re(ae(wt(S,.7),[0,.7,0])),v=ae(y.p,wt(S,Hi(T)*.7)),A=34+i()*22,R=ae(v,wt(E,A)),_=3.4+i()*1.4,M=Ye(v,R,_),P=new Z(Ha).multiplyScalar(.9);t.bake(a,M,()=>P.toArray()),u(R,30+i()*13,i()),u(ae(v,wt(Kn(R,v),.55)),22+i()*9,i())}u(ae(Fi(Ln),[0,12,0]),34,.5)}else u(ae(Fi(Ln),[-14,14,6]),55,.5),u(ae(Fi(Ln),[18,22,-8]),48,.5);return{bark:t.toBufferGeometry(),leaf:e.toBufferGeometry()}}const JM=130,QM=170;function tS(){const n=Fr({map:oM(),strength:1,roughness:.92,side:he}),t=new Ke({vertexColors:!0,roughness:.92,metalness:0,side:he}),e=gh(!0),i=gh(!1),r=new Me;r.add(new Ot(e.bark,n),new Ot(e.leaf,t));const s=new Me;s.add(new Ot(i.bark,n),new Ot(i.leaf,t));for(const l of r.children)l.castShadow=!0,l.receiveShadow=!0;for(const l of s.children)l.castShadow=!0;s.visible=!1;const o=new Me;o.name="tree",o.add(r,s);let a=!0;function c(l){const u=Math.hypot(l.position.x-Ht.x,l.position.z-Ht.z);a&&u>QM?a=!1:!a&&u<JM&&(a=!0),r.visible=a,s.visible=!a}return{group:o,update:c}}const Rr=8,eS=.3,So=[];function dn(n,t){const e={p:[n[0],n[1],n[2]],c:[t[0],t[1],t[2]],_d:0};return So.push(e),e}const Ai=new Float32Array(Rr*3),Ri=new Float32Array(Rr*3),Li=new fe(0,0,0,1),ko=new fe(0,1,0,0),nS={uLightPos:{value:Ai},uLightCol:{value:Ri},uPitA:{value:Li},uPitB:{value:ko}};function iS(n,t,e,i,r){Li.set(n,t,e,Math.max(i,.001)),ko.set(1,Math.max(r,.001),0,0)}function cl(n,t,e){if(ko.x<.5)return 0;const i=a=>{const c=Math.min(1,Math.max(0,a));return c*c*(3-2*c)},r=Math.hypot(n-Li.x,e-Li.z),s=1-i((r-Li.w*.9)/(Li.w*.8)),o=Math.min(1,Math.max(0,(Li.y-t)/ko.y));return s*i((o-.04)/.46)}function rS(n){const t=n.x,e=n.y,i=n.z;for(let s=0;s<So.length;s++){const o=So[s],a=o.p[0]-t,c=o.p[1]-e,l=o.p[2]-i;o._d=a*a+c*c+l*l}const r=So.slice().sort((s,o)=>s._d-o._d);for(let s=0;s<Rr;s++){const o=r[s];o?(Ai[s*3]=o.p[0],Ai[s*3+1]=o.p[1],Ai[s*3+2]=o.p[2],Ri[s*3]=o.c[0],Ri[s*3+1]=o.c[1],Ri[s*3+2]=o.c[2]):(Ai[s*3]=Ai[s*3+1]=Ai[s*3+2]=0,Ri[s*3]=Ri[s*3+1]=Ri[s*3+2]=0)}}function sS(n,t,e){if(e>=Be)return .9;const i=Math.max(0,Math.min(1,(e-ge)/(Be-ge)));return .12+.88*Math.pow(i,1.6)}const oS=`
uniform vec3 uLightPos[${Rr}];
uniform vec3 uLightCol[${Rr}];
varying vec3 vNestWorld;
float nestHash2(vec2 p) { return fract(sin(p.x * 127.1 + p.y * 311.7) * 43758.5453); }
float nestNoise(vec2 p) {
  vec2 i = floor(p), f = p - i;
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = nestHash2(i), b = nestHash2(i + vec2(1.0, 0.0));
  float c = nestHash2(i + vec2(0.0, 1.0)), d = nestHash2(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
uniform vec4 uPitA;   // (x, rim y, z, radius) of the run-time-dug nest
uniform vec4 uPitB;   // (on, depth, -, -)
float nestPitDark(vec3 w) {
  if (uPitB.x < 0.5) return 1.0;
  float hd = length(w.xz - uPitA.xz);
  float inside = 1.0 - smoothstep(uPitA.w * 0.9, uPitA.w * 1.7, hd);
  float dep = clamp((uPitA.y - w.y) / uPitB.y, 0.0, 1.0);
  return mix(1.0, 0.10, inside * smoothstep(0.04, 0.50, dep));
}
float nestDaylight(vec3 w) {
  float pit = nestPitDark(w);
  if (w.z >= ${Be.toFixed(1)}) return (0.82 + 0.18 * nestNoise(w.xz * 0.015)) * pit;
  float t = clamp((w.z - (${ge.toFixed(1)})) / (${(Be-ge).toFixed(1)}), 0.0, 1.0);
  return (0.12 + 0.88 * pow(t, 1.6)) * pit;
}
`;function Ms(n){if(!n||n.userData.nestShaded)return n;n.userData.nestShaded=!0;const t=n.onBeforeCompile;n.onBeforeCompile=function(i,r){t&&t.call(this,i,r),Object.assign(i.uniforms,nS),i.vertexShader=i.vertexShader.replace("#include <common>",`varying vec3 vNestWorld;
#include <common>`).replace("#include <project_vertex>",`#include <project_vertex>
  vec4 nestLocal = vec4(transformed, 1.0);
  #ifdef USE_INSTANCING
    nestLocal = instanceMatrix * nestLocal;
  #endif
  vNestWorld = (modelMatrix * nestLocal).xyz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",oS+`
#include <common>`).replace("#include <lights_fragment_end>",`
        #include <lights_fragment_end>
        {
          float nestDay = nestDaylight(vNestWorld);
          reflectedLight.directDiffuse *= nestDay;
          reflectedLight.directSpecular *= nestDay;
          reflectedLight.indirectSpecular *= nestDay;
          // The ambient/hemisphere term keeps a floor underground instead of
          // being attenuated to nothing with the sun. Without it the nest is
          // lit by warm point lamps alone and every surface out of their reach
          // falls to black — the single most expensive defect for a stylised
          // look (design/charte-stylisation.md §1c: a shadow is a colour, not
          // an absence). The floor is what makes the hemisphere's cavern
          // blue-violet actually reach the walls. Outdoors nestDay is already
          // 0.82-1.0, so max() leaves the lawn untouched.
          reflectedLight.indirectDiffuse *= max(nestDay, ${eS.toFixed(2)});
          vec3 nestSum = vec3(0.0);
          for (int i = 0; i < ${Rr}; i++) {
            vec3 Ld = uLightPos[i] - vNestWorld;
            float d = length(Ld);
            float att = 1.0 / (1.0 + d * d * 0.017);
            nestSum += uLightCol[i] * max(dot(normal, Ld / max(d, 0.001)), 0.0) * att;
          }
          reflectedLight.directDiffuse += diffuseColor.rgb * nestSum;
        }
      `)};const e=n.userData.shaderTag||"";return n.customProgramCacheKey=()=>"nest-shading|"+e,n.needsUpdate=!0,n}const ze=n=>new Z(n).toArray(),nn=(n,t)=>[n[0]*t,n[1]*t,n[2]*t],si=(n,t,e,i)=>[n[0]*t,n[1]*e,n[2]*i],oi=(n,t,e)=>[bt(n[0],t[0],e),bt(n[1],t[1],e),bt(n[2],t[2],e)],aS=ze("#6d5130"),cS=ze("#5a4226"),es=ze("#332412"),yo=ze("#4c5f2f"),Wa=ze("#6a6154"),lS="#5E4526",uS=ze("#4a3418"),_h=ze(lS),xh=ze("#efdcb0"),vh=ze("#7a6040"),hS=ze("#ffc46a"),Xa=ze("#c497d9"),dS=ze("#e0a752"),Mh=oi(ze("#e07356"),ze("#e6b558"),.5),fS=ze("#9db0d8"),pS=nn(oi(yo,es,.62),.58),mS=nn(es,.7),Ya=[.72,.48,1.75],gS=[1.95,1.2,.52],En=[],Yn=[];function Af(n){return n.r*.65}function _S(n){const t=new Se,e=new Se,i=new Se,r=gs(20260812),s=Ar(10,7),o=Ar(6,4),a=jo(8),c=(S,E,v,A)=>Oi([S,0,0],[0,E,0],[0,0,v],A);{const v=[];for(let A=0;A<=9;A++){const R=[];for(let _=0;_<=30;_++){const M=2*Math.PI*_/30,P=il*1.02*A/9,I=ne[0]+Math.cos(M)*P,U=ne[2]+Math.sin(M)*P,V=oe(I,U)+.08,B=oi(aS,cS,Q(.3+ie(I*.2,U*.2)*.5,0,1));R.push(t.addVertex(I,V,U,nn(B,.65+.35*(1-A/9))))}v.push(R)}for(let A=0;A<9;A++)for(let R=0;R<30;R++)t.addQuad(v[A][R],v[A][R+1],v[A+1][R+1],v[A+1][R])}const l=nn(uS,.8);function u(S,E,v,A,R,_){let P=null;for(let I=0;I<=8;I++){const U=I/8,V=Math.sin(U*Math.PI),B=bt(E,v,U),Y=Ni(B,S+_*V,R*V);P&&t.bake(a,Ye(P,Y,A*(.65+.5*V)),()=>l),P=Y}}for(let S=0;S<30;S++){const E=ge+8+r()*(Math.abs(ge)-16),v=Math.PI*(.15+r()*.7);u(E,v,v+.5+r()*1.3,.5+r()*.9,.06+r()*.16,(r()-.5)*9)}const h=nn(_h,.55);for(let S=0;S<150;S++){const E=ge+5+r()*(Math.abs(ge)-10),v=Math.PI*(.18+r()*.64),A=Ni(v,E,.02),R=1.2+r()*(Oe(E)>16?7:3),_=[A[0]+(r()-.5)*.8,A[1]-R,A[2]+(r()-.5)*.8];t.bake(a,Ye(A,_,.09+r()*.1),()=>h)}for(let S=0;S<520;S++){const E=ge+3+r()*(Math.abs(ge)-5),v=r()*Math.PI*2,A=Ni(v,E,.01),R=.22+r()*.55,_=nn(vh,(.7+r()*.7)*(.5+r()*.5));t.bake(o,c(R,R*.8,R,A),()=>_)}for(let S=0;S<120;S++){const E=ge+5+r()*(Math.abs(ge)-8),v=Oe(E)*.7,A=(r()-.5)*2*v,R=.3+r()*.9,_=nn(Wa,(.6+r()*.8)*.8);i.bake(o,c(R*1.3,R*.7,R*1.1,[A,oe(A,E)+R*.3,E]),()=>_)}function d(S,E,v,A,R,_,M){if(Math.hypot(S-nl[0],E-nl[1])<15)return;const P=si(R,.3,.28,.4),I=M||si(R,.95,.62,1.15);for(let U=0;U<v;U++){const V=S+(r()-.5)*7,B=E+(r()-.5)*7,Y=A*(.45+r()*.9),N=oe(V,B),q=[V,N+1.7*Y,B];t.bake(a,Ye([V,N,B],q,.22*Y),()=>P),e.bake(s,c(1.15*Y,.8*Y,1.15*Y,q),()=>I),En.push({x:V,z:B,r:1.15*Y+.5})}dn([S,oe(S,E)+2.4,E],_)}for(let S=0;S<9;S++){const E=-14-S*10.5;d((S%2?1:-1)*(3.5+r()*1.8),E,4+Math.floor(r()*4),1.3,Xa,Ya)}for(let S=0;S<8;S++){const E=r()*Math.PI*2,v=17+r()*9;let A=ne[0]+Math.cos(E)*v;const R=ne[2]+Math.sin(E)*v,_=Oe(R)*.72;Math.abs(A)>_&&(A=Math.sign(A)*_),d(A,R,5+Math.floor(r()*5),1.9,Xa,Ya)}const p=nn(_h,.36),g=si(hS,1.25,1.15,1.4);for(let S=0;S<26;S++){const E=Math.PI*(.2+r()*.6),v=zl+(r()-.5)*Bo*1.5,A=Ni(E,v,.03),R=[A[0],A[1]-(3+r()*11),A[2]];t.bake(a,Ye(A,R,.07),()=>p);const _=.55+r()*.75;e.bake(s,c(_,_*1.25,_,R),()=>g),S%3===0&&dn(R,gS)}const x=si(xh,.76,.7,.58);for(let S=0;S<5;S++){const E=Math.PI*(.15+S*.42),v=8+r()*5,A=ne[0]+Math.cos(E)*v,R=ne[2]+Math.sin(E)*v;for(let _=0;_<22;_++){const M=A+(r()-.5)*5.5,P=R+(r()-.5)*5.5,I=.5+r()*.35;t.bake(s,c(I*.72,I*.72,I*1.5,[M,oe(M,P)+I*.6,P]),()=>x)}dn([A,oe(A,R)+1.5,R],[.55,.42,.22])}if(dn([ne[0],oe(ne[0],ne[2])+9,ne[2]],[1.5,1.05,.5]),n&&n.granary){const S=n.granary;for(let v=0;v<5;v++){const A=(r()-.5)*Math.PI*1.6,R=Q(S.uEnd+(r()-.5)*S.uMax*.5,S.uMax*.42,S.uMax*.96),_=S.pointAt(A,R,.12);for(let M=0;M<26;M++){const P=_[0]+(r()-.5)*4.5,I=_[2]+(r()-.5)*4.5,U=.5+r()*1.3,V=Q(1-Math.hypot(P-_[0],I-_[2])/4.5,0,1),B=nn(oi(oi(dS,Mh,r()*.4),es,V*.5),.55+.35*(1-V));t.bake(o,c(U,U*.85,U,[P,oe(P,I)+U*.4,I]),()=>B)}}const E=si(Mh,.94,.81,.51);for(let v=0;v<10;v++){const A=(r()-.5)*Math.PI*1.5,R=Q(S.uEnd+(r()-.5)*S.uMax*.55,4,S.uMax-2),_=r()<.5,M=S.pointAt(A,R,_?.85:.06),P=.5+r()*.7,I=_?M[1]-P*(.6+r()*1.6):oe(M[0],M[2])+P*.55;t.bake(s,c(P*.8,P*1.3,P*.8,[M[0],I,M[2]]),()=>E)}for(let v=0;v<2;v++){const A=S.pointAt(0,2+r()*4,.3);dn([A[0],oe(A[0],A[2])+2.2,A[2]],[.42,.3,.14])}}if(n&&n.brood){const S=n.brood,E=[.34,.5,.68],v=[1,1.55,1.15],A=si(fS,.42,.4,.46);for(let R=0;R<7;R++){const _=(r()-.5)*Math.PI*1.7,M=Q(S.uEnd+(r()-.5)*S.uMax*.6,S.uMax*.32,S.uMax*.97),P=S.pointAt(_,M,.1),I=oe(P[0],P[2]),U=14+Math.floor(r()*14);for(let V=0;V<U;V++){const B=Math.floor(r()*3),Y=E[B]+r()*.22,N=P[0]+(r()-.5)*4.6,q=P[2]+(r()-.5)*4.6,nt=(.85+r()*.25)*.85,ot=si(xh,nt,nt*.94,nt*.8);t.bake(s,c(Y*.75,Y*.75,Y*1.5*v[B],[N,oe(N,q)+Y*.6,q]),()=>ot)}if(R%2===0){const V=4+Math.floor(r()*3);for(let B=0;B<V;B++){const Y=r()*Math.PI*2,N=Y+1.4+r()*1.2,q=2.2+r()*1.2,nt=[P[0]+Math.cos(Y)*q,I+.5+r()*1,P[2]+Math.sin(Y)*q],ot=[P[0]+Math.cos(N)*q,I+.5+r()*1,P[2]+Math.sin(N)*q];t.bake(a,Ye(nt,ot,.03),()=>A)}}dn([P[0],I+1.6,P[2]],[.62,.46,.24])}for(let R=0;R<2;R++){const _=(r()-.5)*Math.PI*1.4,M=Q(S.uEnd+(r()-.5)*S.uMax*.4,4,S.uMax-2),P=S.pointAt(_,M,.1);d(P[0],P[2],2+Math.floor(r()*2),1.1,Xa,Ya)}}if(n&&n.midden){const S=n.midden,E=oi(yo,es,.5),v=nn(oi(yo,es,.3),3.5),A=[.3,.46,.3];for(let M=0;M<3;M++){const P=(r()-.5)*Math.PI*1.6,I=Q(S.uEnd+(r()-.5)*S.uMax*.5,4,S.uMax-2),U=S.pointAt(P,I,.08);d(U[0],U[2],3+Math.floor(r()*3),1,E,A,v)}for(let M=0;M<4;M++){const P=(r()-.5)*Math.PI*1.7,I=Q(S.uEnd+(r()-.5)*S.uMax*.55,3,S.uMax-1.5),U=S.pointAt(P,I,.1);for(let V=0;V<20;V++){const B=U[0]+(r()-.5)*5,Y=U[2]+(r()-.5)*5,N=.4+r()*1.1,q=nn(r()<.5?Wa:vh,(.3+r()*.35)*.55);i.bake(o,c(N*1.2,N*.7,N,[B,oe(B,Y)+N*.3,Y]),()=>q)}}const R=nn(mS,.5);for(let M=0;M<5;M++){const P=(r()-.5)*Math.PI*1.6,I=Q(S.uEnd+(r()-.5)*S.uMax*.5,3,S.uMax-1.5),U=S.pointAt(P,I,.12),V=oe(U[0],U[2]),B=2.2+r()*2.2,Y=r()*Math.PI*2;t.bake(a,Ye([U[0],V+.35,U[2]],[U[0]+Math.cos(Y)*B,V+.3,U[2]+Math.sin(Y)*B],.55+r()*.35),()=>R)}const _=si(pS,.3,.36,.3);for(let M=0;M<6;M++){const P=(r()-.5)*Math.PI*1.6,I=Q(S.uEnd+(r()-.5)*S.uMax*.55,3,S.uMax-1.5),U=S.pointAt(P,I,.05),V=1+r()*1.6;t.bake(s,c(V,.12,V,[U[0],oe(U[0],U[2])+.03,U[2]]),()=>_)}}for(let S=0;S<42;S++){const E=-200+r()*380,v=8+r()*250;if(gi(E,v)>0||Zn(E,v)<4)continue;const A=2+r()*6,R=1.5+r()*4,_=2+r()*6,M=Ft(E,v)+R*.35,P=.75+r()*.5,I=r()*40,U=r()<.6?.5+r()*.5:0;i.bake(s,c(A,R,_,[E,M,v]),(V,B,Y)=>{const N=nn(Wa,P);if(U<=0)return N;const q=Q((B-M)/R+.15*ie(V*.3+I,Y*.3+I),0,1);return oi(N,yo,q*q*U)}),Yn.push({x:E,z:v,r:(A+_)*.5+1})}const m=new Me;m.name="nest-decor";const f=new Ot(t.toBufferGeometry(),new Ke({vertexColors:!0,roughness:.92,metalness:0,side:he}));f.name="nest-decor-matte",m.add(f);const T=new Ot(i.toBufferGeometry(),Fr({map:cM(),strength:1,roughness:.92,side:he}));T.name="nest-decor-stone",T.castShadow=!0,T.receiveShadow=!0,m.add(T);const y=_f({map:pf(),strength:.7,emissive:.95,color:7829367,side:he}),b=new Ot(e.toBufferGeometry(),y);return b.name="nest-decor-glow",m.add(b),{group:m,mushrooms:En,rocks:Yn}}const qa=new Z("#b07226").toArray(),qr=new Z("#5e3d16").toArray(),Sh=new Z("#100c06").toArray(),De=2.4,xS=2.7,vS=2.9;function MS(n,t,e,i,r){const s=Kn(t,n),o=Math.hypot(s[0],s[1],s[2]),a=Q(o,.05,e+i-.02),c=wt(s,1/(o||1)),l=(e*e-i*i+a*a)/(2*a),u=Math.sqrt(Math.max(e*e-l*l,0)),h=r[0]*c[0]+r[1]*c[1]+r[2]*c[2],d=re(Kn(r,wt(c,h)));return ae(ae(n,wt(c,l)),wt(d,u))}function yh(n){const t=new mn;return t.setAttribute("position",new ve(n.p,3)),t.setAttribute("normal",new ve(n.n,3)),t.setIndex(n.i),t}function Eh(n,t){n.matrix.set(t.x[0],t.y[0],t.z[0],t.p[0],t.x[1],t.y[1],t.z[1],t.p[1],t.x[2],t.y[2],t.z[2],t.p[2],0,0,0,1),n.matrixWorldNeedsUpdate=!0}function SS(){const n=new Me;n.name="queen";const t=[ne[0],oe(ne[0],ne[2]),ne[2]],e=Math.PI,i=[Math.sin(e),0,Math.cos(e)],r=[0,1,0],s=re(je(r,i)),o=Oi(s,r,i,[t[0],t[1]+1.05*De,t[2]]),a=A=>ff(o,wt(A,De)),c=Ar(12,9),l=jo(8),u=new Se,h=(A,R,_,M)=>Oi(wt(s,R*De),wt(r,_*De),wt(i,M*De),a(A)),d=(A,R,_,M,P)=>u.bake(c,h(A,R,_,M),()=>P),p=(A,R,_,M)=>u.bake(l,Ye(A,R,_),()=>M);d([0,1.5,-1.2],.5,.5,.62,qr),d([0,1.62,.5],1.06,1.02,1.75,qa),d([0,1.66,2.7],1.18,1.02,1.12,qa),d([.76,2.12,3.1],.3,.26,.3,Sh),d([-.76,2.12,3.1],.3,.26,.3,Sh);for(let A=-1;A<=1;A+=2)p(a([A*.55,1.45,3.5]),a([A*.34,1.2,4.8]),.17*De,qa);const g=[[.92,1.5,1.7],[-.92,1.5,1.7],[1.02,1.4,.4],[-1.02,1.4,.4],[.92,1.4,-1.15],[-.92,1.4,-1.15]],x=[[4.1,0,3.9],[-4.1,0,3.9],[4.9,0,.3],[-4.9,0,.3],[4.5,0,-3.5],[-4.5,0,-3.5]];for(let A=0;A<6;A++){const R=a(g[A]),_=a(x[A]);_[1]=oe(_[0],_[2]);const M=g[A][0]>0?s:wt(s,-1),P=MS(R,_,xS*De,vS*De,re(ae(r,wt(M,.75))));p(R,P,.2*De,qr),p(P,_,.14*De,qr),u.bake(c,Oi([.3*De,0,0],[0,.3*De,0],[0,0,.3*De],P),()=>qr)}const m=new Ke({vertexColors:!0,roughness:.45,metalness:.05}),f=new Ot(u.toBufferGeometry(),m);f.name="queen-body",f.castShadow=!0,n.add(f);const T=yh(c),y=yh(l),b=new Ke({color:new Z().fromArray(qr),roughness:.45,metalness:.05}),S=[{local:[0,1.5,-5.4],rx:1.34,ry:1.3,rz:1.9},{local:[0,1.55,-3.2],rx:1.6,ry:1.54,rz:2.1}].map(A=>{const R=new Ot(T,b);return R.matrixAutoUpdate=!1,R.castShadow=!0,n.add(R),{mesh:R,...A}}),E=[];for(let A=-1;A<=1;A+=2)for(let R=0;R<2;R++){const _=new Ot(y,b);_.matrixAutoUpdate=!1,n.add(_),E.push({mesh:_,sA:A,seg:R})}function v(A){const R=1+Math.sin(A*.55)*.04;for(const _ of S)Eh(_.mesh,h(_.local,_.rx*R,_.ry*R,_.rz));for(const _ of E){const M=Math.sin(A*1.1+(_.sA>0?0:1.3))*.35,P=a([_.sA*.58,2.1,3.2]),I=a([_.sA*(1.4+M*.3),3.3,4.2]),U=a([_.sA*(1.85+M),3.2+M*.4,6.1]);Eh(_.mesh,_.seg===0?Ye(P,I,.14*De):Ye(I,U,.11*De))}}return v(0),{group:n,update:v}}const Yl={sunDir:re([-300,120,195]),sunColor:15251852,sunIntensity:5.4,hemiSky:7241640,hemiGround:4867376,hemiIntensity:1.15,fog:8221832,fogNear:95,fogFar:420,sky:10130344,exposure:1.3},ql={sunDir:re([30,45,20]),sunColor:16767370,sunIntensity:2.5,hemiSky:12572917,hemiGround:7236152,hemiIntensity:.85,fog:11520216,fogNear:90,fogFar:420,sky:10274532,exposure:1.15};let ns=0;function Ss(){return ns}function Rf(n){ns=n<0?0:n>1?1:n}const Rn=[0,1,0];function Qo(){const n=Yl.sunDir,t=ql.sunDir;Rn[0]=n[0]+(t[0]-n[0])*ns,Rn[1]=n[1]+(t[1]-n[1])*ns,Rn[2]=n[2]+(t[2]-n[2])*ns;const e=Math.hypot(Rn[0],Rn[1],Rn[2])||1;return Rn[0]/=e,Rn[1]/=e,Rn[2]/=e,Rn}const yS=56;function bh(n,t,e,i,r,s,o,a){const c=i-n,l=r-t,u=s-e,h=c*a[0]+l*a[1]+u*a[2];if(h<=0)return 0;const d=c*c+l*l+u*u-h*h,p=Math.sqrt(d>0?d:0),g=o*.35+h*.06,x=Q((o+g-p)/g,0,1);return x*x*(3-2*x)}function ES(n,t,e,i){const r=Math.hypot(i[0],i[2]);if(r<1e-4)return 0;const s=i[0]/r,o=i[2]/r,a=Ht.x-n,c=Ht.z-e,l=a*s+c*o;if(l<=0)return 0;const u=Math.abs(a*o-c*s);if(t+i[1]/r*l>Ht.baseY+Ht.h*Ln)return 0;const d=Ht.w*.4+l*.05,p=Q((Ht.w+d-u)/d,0,1);return p*p*(3-2*p)}function bS(n,t,e,i){const r=Math.hypot(i[0],i[2]);if(r<1e-4)return 0;const s=i[0]/r,o=i[2]/r,a=i[1]/r,c=Math.min(170,34/a+14);let l=0;for(let u=2.5;u<c;u*=1.38){const d=Ft(n+s*u,e+o*u)-(t+a*u+.5);if(d<=0)continue;const p=1.2+u*.05,g=Q(d/p,0,1);if(g>l&&(l=g),l>=1)break}return l}function Cf(n,t){if(t<Be)return 1;const e=Qo(),i=Ft(n,t),r=vs(n,t),s=Q((r[0]*e[0]+r[1]*e[1]+r[2]*e[2])/Math.max(e[1],.001),0,1);let o=bS(n,i,t,e);if(o<1){const a=i+1.2;o=Math.max(o,ES(n,a,t,e));const c=Fi(Ln);o=Math.max(o,bh(n,a,t,c[0],c[1]+14,c[2],yS,e));for(let l=0;l<Yn.length&&o<1;l++){const u=Yn[l],h=u.r*.8;o=Math.max(o,bh(n,a,t,u.x,Ft(u.x,u.z)+h*.45,u.z,h,e))}}return Q(1-s*(1-o),0,1)}const wn=[],Pf=new Map,TS=["graine","brindille","miellat"],wS={graine:4,brindille:3,miellat:5},AS={graine:5,brindille:6,miellat:5},RS=[.88,.66,.32],CS=[.55,.38,.18],PS=[.42,.32,.19],Th=[.24,.18,.1],LS=[.94,.74,.36],IS=[.78,.5,.2],DS=new Z("#4A4438"),$l=(n,t,e)=>[bt(n[0],t[0],e),bt(n[1],t[1],e),bt(n[2],t[2],e)];function US(n,t,e,i,r){const s=new Se,o=[];for(let a=0;a<=i;a++){const c=a/i,l=[],u=t(c);for(let h=0;h<e;h++){const d=2*Math.PI*h/e;l.push(s.addVertex(Math.cos(d)*u,c*n,Math.sin(d)*u,r(c,d)))}o.push(l)}for(let a=0;a<i;a++)for(let c=0;c<e;c++){const l=(c+1)%e;s.addQuad(o[a][c],o[a][l],o[a+1][l],o[a+1][c])}return s}function NS(){return US(7,t=>Math.pow(Math.sin(Math.PI*t),.62)*2*(1-.3*t),7,5,(t,e)=>$l(CS,RS,Q(.25+.75*Math.pow(Math.abs(Math.cos(e*.5)),1.5)*(.4+.6*t),0,1))).toBufferGeometry()}function FS(){const n=new Se,t=jo(5),e=[[0,0,0],[.6,5.5,.4],[2.4,10.6,.2]];for(let i=0;i<2;i++)n.bake(t,Ye(e[i],e[i+1],.62-i*.16),(r,s)=>$l(Th,PS,Q(.55+.25*Math.sin(s*1.7),0,1)));return n.bake(t,Ye([.6,5.5,.4],[-2.6,8.2,-1.1],.33),()=>Th),n.toBufferGeometry()}function OS(){const n=new Se,t=Ar(6,3),e=[[0,.9,0,2.6,1.5,2.2],[2.4,.6,1.1,1.7,1,1.5],[-1.6,.7,1.6,1.9,1.2,1.7]];for(const i of e)n.bake(t,Oi([i[3],0,0],[0,i[4],0],[0,0,i[5]],[i[0],i[1],i[2]]),(r,s)=>$l(IS,LS,Q((s-i[1])/(i[4]*2)+.55,0,1)));return n.toBufferGeometry()}const is=(n,t)=>n>=t?0:Math.pow(1-n/t,1.5);function BS(n,t){if(gi(n,t)>0||Zn(n,t)<10)return 0;let e=.16;return e+=1.05*is(Math.hypot(n-Ht.x,t-Ht.z),78),e+=.85*is(Math.hypot(n-88,t-168),74),e+=.7*is(Math.hypot(n-24,t-128),46),e*Q(1-(Or(n,t)-.16)/.5,.12,1)}const zS=2;function kS(n,t,e){const i=Math.hypot(n-Ht.x,t-Ht.z)<85,r=e();return i?r<.55?"brindille":r<.85?"miellat":"graine":is(Math.hypot(n-88,t-168),74)+is(Math.hypot(n-24,t-128),46)>.25?r<.6?"graine":r<.85?"miellat":"brindille":r<.5?"graine":r<.8?"brindille":"miellat"}const wh=32;function GS(n=90210){const t=gs(n),e=Te;let i=0,r=0,s=1;for(;i<wh&&r++<wh*200;){const o=bt(e.x0+14,e.x1-14,t()),a=bt(e.z0+16,e.z1-14,t());if(t()*zS>BS(o,a))continue;const c=kS(o,a,t),l=3+Math.floor(t()*4);let u=0;for(let h=0;h<l*3&&u<l;h++){const d=t()*Math.PI*2,p=Math.sqrt(t())*12,g=o+Math.cos(d)*p,x=a+Math.sin(d)*p;if(gi(g,x)>0||Zn(g,x)<10||Or(g,x)>.7)continue;const m=Math.max(1,wS[c]+Math.round((t()-.5)*2)),f={id:s++,x:g,z:x,kind:c,amount:m,r:AS[c],amount0:m,yaw:t()*Math.PI*2,tilt:(t()-.5)*.5,size:.75+t()*.5,_slot:-1};wn.push(f),Pf.set(f.id,f),u++}u&&i++}}const Lf={},Ah=new Qt,Rh=new Dr,Ch=new An,Ph=new k,Lh=new k,Ih=new Z;function If(n){const t=Lf[n.kind];if(!t||n._slot<0)return;const e=n.amount0>0?n.amount/n.amount0:0,i=n.size*bt(.45,1,Math.pow(e,.6)),r=vs(n.x,n.z);Ch.set(n.tilt-Math.atan2(r[2],r[1])*.6,n.yaw,n.tilt+Math.atan2(r[0],r[1])*.6),Rh.setFromEuler(Ch),Ph.set(n.x,Ft(n.x,n.z)-.35*i,n.z),Lh.set(i,i,i),Ah.compose(Ph,Rh,Lh),t.setMatrixAt(n._slot,Ah),Ih.set(1,1,1).lerp(DS,(1-e)*.8),t.setColorAt(n._slot,Ih),t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0)}function Kl(n,t=1){const e=Pf.get(n);if(!e||e.amount<=0||!(t>0))return 0;const i=Math.min(t,e.amount);return e.amount-=i,If(e),i}function HS(n,t,e=12,i=!1){const r=[];for(const s of wn)!i&&s.amount<=0||Math.hypot(s.x-n,s.z-t)<=e&&r.push(s);return r}function VS(){const n=new Me;n.name="resources",wn.length===0&&GS();const t={graine:NS(),brindille:FS(),miellat:OS()},e=new Ke({vertexColors:!0,roughness:.9,metalness:0}),i=new Ke({vertexColors:!0,roughness:.22,metalness:0});for(const r of TS){const s=wn.filter(c=>c.kind===r),o=Math.max(s.length,1),a=new Nl(t[r],r==="miellat"?i:e,o);a.name="resource-"+r,a.castShadow=!0,a.receiveShadow=!0,a.count=s.length,a.instanceColor=new Cn(new Float32Array(o*3).fill(1),3),a.frustumCulled=!1,Lf[r]=a,s.forEach((c,l)=>{c._slot=l,If(c)}),n.add(a)}return{group:n,nodes:wn}}const rs=4.2,Ii=15,us=14,Vn=8,Dh=.22,fr=1.6,Eo=17,WS=18,XS=.62,ss=new Z("#6d5130"),Df=new Z("#5a4226"),bo=new Z("#332412"),YS=new Z("#e0a752"),qS=new Z("#efdcb0"),$S=new Z("#ffc46a"),To=[.55,.62,.82],Uf=[1.05,.62,.24],$a=[.85,.55,.22],Ka=[1.95,1.2,.52],ll=6;let ul=null,Jt=null;const pr=(n,t,e)=>new Z(n).lerp(t,Q(e,0,1));function KS(n){ul=n}function vr(){return Jt?{x:Jt.x,z:Jt.z}:null}function Nf(){return Jt}function jl(n,t){if(Jt)return{ok:!1,reason:"already-founded"};if(t<Be)return{ok:!1,reason:"underground"};const e=Te;return n<e.x0+Eo||n>e.x1-Eo||t>e.z1-Eo?{ok:!1,reason:"bounds"}:Math.abs(n)<34&&t<34?{ok:!1,reason:"occupied"}:gi(n,t)>0?{ok:!1,reason:"water"}:Zn(n,t)<WS?{ok:!1,reason:"water"}:Or(n,t)>XS?{ok:!1,reason:"slope"}:Wl(n,t).kind==="rock"?{ok:!1,reason:"rock"}:{ok:!0}}function jS(n,t,e){const i=(r,s)=>ie(Math.cos(n)*r+t*s+e+37,Math.sin(n)*r+t*s*.7+e+91);return .84+.2*i(1.6,.1)+.1*i(4.1,.29)+.05*i(9.3,.62)}function ZS(n){const t=Ii+Vn,e=(n-t)/Vn;return e>-1&&e<1?rs+(us-rs)*Math.pow(Math.sqrt(1-e*e),.72):rs}function JS(n,t,e){const i=Ft(n,t),r=(ie(n*.07,t*.07)-.5)*Math.PI*2,s=re([Math.cos(r)*Dh,-1,Math.sin(r)*Dh]),o=re(je(s,[0,0,1])),a=re(je(s,o)),c=[n,i+fr,t],l=Ii+2*Vn,u=i+fr-(Ii+Vn*.92),h=22;function d(b,S){const E=jS(b,S,e),v=ZS(S)*E,A=c[0]+s[0]*S,R=c[1]+s[1]*S,_=c[2]+s[2]*S,M=A+(o[0]*Math.cos(b)+a[0]*Math.sin(b))*v,P=R+(o[1]*Math.cos(b)+a[1]*Math.sin(b))*v,I=_+(o[2]*Math.cos(b)+a[2]*Math.sin(b))*v;return[M,Math.max(P,u),I,E]}const p=new Se,g=[];for(let b=0;b<=l+1e-4;b+=1.5){const S=[];for(let E=0;E<h;E++){const v=2*Math.PI*E/h,A=d(v,b),R=Q((A[3]-.84)/.34+.45,0,1),_=pr(bo,Df,R*.8+.1).lerp(ss,.18+R*.14).multiplyScalar(.88);S.push(p.addVertex(A[0],A[1],A[2],_.toArray()))}g.push(S)}for(let b=0;b<g.length-1;b++)for(let S=0;S<h;S++){const E=(S+1)%h;p.addQuad(g[b][S],g[b][E],g[b+1][E],g[b+1][S])}const x=g[g.length-1],m=p.addVertex(c[0]+s[0]*l,u,c[2]+s[2]*l,pr(bo,ss,.35).toArray());for(let b=0;b<h;b++)p.addTri(m,x[b],x[(b+1)%h]);const f=8,T=[];for(let b=0;b<=f;b++){const S=b/f,E=bt(rs*1.02,Eo,S),v=[];for(let A=0;A<=h;A++){const R=2*Math.PI*(A%h)/h,_=n+Math.cos(R)*E,M=t+Math.sin(R)*E,P=.75+.5*ie(_*.16+e,M*.16+e),I=fr*Math.pow(1-S,1.5)*P+.9*Math.sin(Math.PI*Math.min(1,S*1.35))*P,U=bt(i+fr,Ft(_,M),Math.pow(S,.7))+(S>0?I*.75:0),V=pr(pr(ss,bo,.35+.3*(1-S)),YS,.12).multiplyScalar(.82+.25*P);v.push(p.addVertex(_,U,M,V.toArray()))}T.push(v)}for(let b=0;b<f;b++)for(let S=0;S<h;S++)p.addQuad(T[b][S],T[b][S+1],T[b+1][S+1],T[b+1][S]);const y=c[1]+s[1]*(Ii+Vn);return{geometry:p.toBufferGeometry(),mouthY:i,floorY:u,origin:c,dir:s,uMax:l,chamber:{x:c[0]+s[0]*(Ii+Vn),y:u,z:c[2]+s[2]*(Ii+Vn),ceilY:y+Vn*.55,r:us}}}function QS(n,t){const e=gs(t^23505),i=Ar(8,5),r=(g,x,m,f)=>Oi([g,0,0],[0,x,0],[0,0,m],f),s=n.chamber,o=[],a=Ms(new Ke({vertexColors:!0,roughness:.85,metalness:0,side:he}));for(let g=0;g<ll;g++){const x=g/ll*Math.PI*2+e()*.5,m=s.r*(.28+e()*.34),f=s.x+Math.cos(x)*m,T=s.z+Math.sin(x)*m,y=new Se,b=5+Math.floor(e()*5);for(let v=0;v<b;v++){const A=e()*Math.PI*2,R=Math.sqrt(e())*2.6,_=f+Math.cos(A)*R,M=T+Math.sin(A)*R,P=.75+e()*.45;y.bake(i,r(P*1.25,P*.85,P,[_,s.y+P*.7,M]),(I,U)=>pr(qS,ss,Q(.55-(U-s.y)*.25,0,1)).toArray())}const S=new Ot(y.toBufferGeometry(),a);S.name="nest-brood-"+g,S.visible=!1,S.castShadow=!1;const E=dn([f,s.y+2.2,T],[0,0,0]);o.push({mesh:S,lamp:E,on:!1})}const c=new Se,l=s.x+(e()-.5)*6,u=s.z+(e()-.5)*6,h=s.ceilY-3.2;c.bake(i,r(1.5,1.8,1.5,[l,h,u]),()=>$S.toArray());const d=new Ot(c.toBufferGeometry(),_f({map:pf(),strength:.7,emissive:.95,color:7829367,side:he}));d.name="nest-glow-bead",d.visible=!1;const p=dn([l,h,u],[0,0,0]);return{piles:o,bead:{mesh:d,lamp:p,on:!1}}}function Ff(n,t){const e=jl(n,t);if(!e.ok)return e;const i=Math.floor(Math.abs(n)*131+Math.abs(t)*977)%9973,r=JS(n,t,i),s=new Me;s.name="founded-nest";const o=new Ot(r.geometry,Ms(Fr({map:Bl(),strength:.62,side:he})));o.name="founded-nest-shell",o.receiveShadow=!0,s.add(o);const a=QS(r,i);for(const u of a.piles)s.add(u.mesh);s.add(a.bead.mesh),ul&&ul.add(s);const c=dn([n,r.mouthY-4,t],To),l=dn([n,r.mouthY+1,t],Uf);return Jt={x:n,z:t,group:s,mouth:{x:n,y:r.mouthY+fr,z:t,r:rs},chamber:r.chamber,floorY:r.floorY,axis:{origin:r.origin,dir:r.dir,length:r.uMax},brood:0,sealed:!1,_furnishing:a,_coldLight:c,_warmLight:l,_coldFade:1},iS(n,r.mouthY+fr,t,us,Ii+Vn),{ok:!0}}const Uh=5,ja=46,Za=26,Js=20;function ty(n,t){const e=n.chamber,i=n.axis.dir[0],r=n.axis.dir[2],s=Math.hypot(i,r)||1,o=i/s,a=r/s,c=e.x+o*(us*.55),l=e.z+a*(us*.55),u=-a,h=o,d=new Se,p=[];for(let g=0;g<=Za;g++){const x=g/Za,m=x*ja,f=Math.sin(x*2.4+t*.017)*5*x,T=c+o*m+u*f,y=l+a*m+h*f,b=Uh*(1-.45*Math.pow(x,3)),S=[];for(let E=0;E<Js;E++){const v=2*Math.PI*E/Js,A=.88+.24*ie(v*1.7+m*.09,m*.13+t),R=b*A,_=e.y+Uh*.55+Math.sin(v)*R;S.push(d.addVertex(T+u*Math.cos(v)*R,Math.max(_,e.y+.15),y+h*Math.cos(v)*R,pr(bo,Df,Q((A-.84)/.34+.45,0,1)*.8+.1).lerp(ss,.22).multiplyScalar(.86).toArray()))}p.push(S)}for(let g=0;g<Za;g++)for(let x=0;x<Js;x++){const m=(x+1)%Js;d.addQuad(p[g][x],p[g][m],p[g+1][m],p[g+1][x])}return{geometry:d.toBufferGeometry(),end:{x:c+o*ja,y:e.y,z:l+a*ja},heading:[o,a],start:{x:c,z:l}}}function Zl(){return Jt&&Jt.gallery?Jt.gallery:null}function Of(){if(!Jt)return{ok:!1,reason:"no-nest"};if(Jt.gallery)return{ok:!0,already:!0};const n=Math.floor(Math.abs(Jt.x)*73+Math.abs(Jt.z)*149)%9973,t=ty(Jt,n),e=new Ot(t.geometry,Ms(Fr({map:Bl(),strength:.62,side:he})));return e.name="first-gallery",e.receiveShadow=!0,Jt.group.add(e),dn([t.end.x,t.end.y+3,t.end.z],Uf),Jt.gallery={...t,mesh:e},{ok:!0}}function Bf(n){if(!Jt)return 0;const t=Math.round(Q(n,0,ll));Jt.brood=t,Jt._furnishing.piles.forEach((i,r)=>{const s=r<t;i.mesh.visible=s,i.on=s,i.lamp.c[0]=s?$a[0]:0,i.lamp.c[1]=s?$a[1]:0,i.lamp.c[2]=s?$a[2]:0});const e=Jt._furnishing.bead;return e.on=t>=4,e.mesh.visible=e.on,e.lamp.c[0]=e.on?Ka[0]:0,e.lamp.c[1]=e.on?Ka[1]:0,e.lamp.c[2]=e.on?Ka[2]:0,t}function zf(n=!0){Jt&&(Jt.sealed=n)}function ey(n){if(!Jt)return;const t=Jt.sealed?0:1,e=Math.min(1,n/3);Jt._coldFade+=(t-Jt._coldFade)*e*3;const i=Q(Jt._coldFade,0,1);Jt._coldLight.c[0]=To[0]*i,Jt._coldLight.c[1]=To[1]*i,Jt._coldLight.c[2]=To[2]*i}function kf(){const n=new Me;n.name="world";const t=MM();for(const d of t.doorLights)dn(d.p,d.c);const e=_S(t.rooms),i=SS(),r=UM();n.add(r);const s=OM();n.add(s.mesh);const o=zM();n.add(o.group);const a=Sf({});n.add(a.mesh);const c=tS();n.add(c.group);const l=VS();n.add(l.group);const u=new Me;u.name="dug",n.add(u),KS(u);function h(d,p,g){a.update(d,p,g),ey(d),i.update(p),s.update(p),g&&(c.update(g),o.update(g,Ss()),rS(g.position))}return{group:n,update:h,grassFootprints:a.footprints,grass:a,resources:l.nodes,rooms:t.rooms,doorLights:t.doorLights,mushrooms:e.mushrooms,rocks:e.rocks}}const ta=Object.freeze(Object.defineProperty({__proto__:null,LAWN_BOUNDS:Te,MUSHROOMS:En,QUEEN:ne,RESOURCE_NODES:wn,RIG_FOUNDED:ql,RIG_PROLOGUE:Yl,RIVER:cn,ROCKS:Yn,START:nl,TERRAIN_BOUNDS:Xn,TREE:Ht,TUNNEL_BACK:ge,TUNNEL_MOUTH:Be,TUNNEL_R:xr,WATER_Y:hi,applyNestShading:Ms,canFoundAt:jl,containSurface:sl,containUnderground:Zo,createWorld:kf,daylightAt:sS,digGallery:Of,distanceToWater:Zn,foundNest:Ff,foundedMix:Ss,getFoundedNest:Nf,getGallery:Zl,getRoomBranches:Gl,getUndergroundRadius:fM,getWallHoleAt:kl,groundNormal:vs,groundSlope:Or,groundY:Ft,harvestNode:Kl,mushroomCollideR:Af,nestOrigin:vr,nodesNear:HS,pitFactorAt:cl,populateNest:Bf,profileR:Oe,riverEdgeAt:Xi,sampleTerrain:wM,sealNest:zf,setFoundedMix:Rf,shadeAt:Cf,soilAt:Wl,sunDir:Qo,treeTrunkRadius:Hi,treeWalkBranch:In,waterDepthAt:gi},Symbol.toStringTag,{value:"Module"})),ny=[{hip:[.85,1.5,1.5],rest:[3.6,0,3.4],phase:0},{hip:[-.85,1.5,1.5],rest:[-3.6,0,3.4],phase:.5},{hip:[.95,1.4,.3],rest:[4.3,0,.2],phase:.5},{hip:[-.95,1.4,.3],rest:[-4.3,0,.2],phase:0},{hip:[.85,1.4,-1],rest:[4,0,-3.2],phase:0},{hip:[-.85,1.4,-1],rest:[-4,0,-3.2],phase:.5}],iy=[{hip:[.92,1.5,1.7],rest:[4.1,0,3.9],phase:0},{hip:[-.92,1.5,1.7],rest:[-4.1,0,3.9],phase:.5},{hip:[1.02,1.4,.4],rest:[4.9,0,.3],phase:.5},{hip:[-1.02,1.4,.4],rest:[-4.9,0,.3],phase:0},{hip:[.92,1.4,-1.15],rest:[4.5,0,-3.5],phase:0},{hip:[-.92,1.4,-1.15],rest:[-4.5,0,-3.5],phase:.5}],Gf={petiole:{at:[0,1.5,-1.25],r:[.42,.42,.42]},thorax:{at:[0,1.6,.35],r:[.95,.92,1.55]},head:{at:[0,1.62,2.55],r:[1.12,.98,1.05]},eye:{at:[.72,2.05,2.95],r:[.3,.26,.3]},gaster:[{at:[0,1.55,-3.1],r:[1.35,1.3,1.95]}],mandible:{root:[.52,1.42,3.35],tip:[.3,1.22,4.55],gape:.22,r:.15},antenna:{root:[.55,2.05,3.05],elbow:[1.35,3.15,4],tip:[1.75,3.05,5.9],r1:.13,r2:.1},legR:{thigh:.19,shin:.13,knee:.24,foot:.17}},ry={petiole:{at:[0,1.5,-1.2],r:[.5,.5,.62]},thorax:{at:[0,1.62,.5],r:[1.06,1.02,1.75]},head:{at:[0,1.66,2.7],r:[1.18,1.02,1.12]},eye:{at:[.76,2.12,3.1],r:[.3,.26,.3]},gaster:[{at:[0,1.55,-3.2],r:[1.6,1.54,2.1]},{at:[0,1.5,-5.4],r:[1.34,1.3,1.9]}],mandible:{root:[.55,1.45,3.5],tip:[.34,1.2,4.8],gape:.2,r:.17},antenna:{root:[.58,2.1,3.2],elbow:[1.4,3.3,4.2],tip:[1.85,3.2,6.1],r1:.14,r2:.11},legR:{thigh:.2,shin:.14,knee:.3,foot:.19}},Cr={id:"worker",label:"ouvrière",scale:1,legs:ny,body:Gf,breathes:!1,colors:{chitinA:9132580,chitinB:4402453,limb:7029792,mandible:13209663,eye:1051654},maxSpeed:15,sprint:1.75,turnRate:9,legLen:[2.7,2.9],stride:7,climbSpeed:20,bodyR:1.5,cam:{dist:36,min:10,max:85}},Hf={id:"queen",label:"reine fondatrice",scale:2.2,legs:iy,body:ry,breathes:!0,colors:{chitinA:11563558,chitinB:6176022,limb:6176022,mandible:11563558,eye:1051654},maxSpeed:12.5,sprint:1.5,turnRate:4.2,legLen:[2.7,2.9],stride:7,climbSpeed:12,bodyR:1.5,cam:{dist:58,min:16,max:140}},sy={...Gf,mandible:{root:[.56,1.4,3.35],tip:[.3,1.14,5.05],gape:.3,r:.23}},Vf={...Cr,id:"digger",label:"creuseuse",body:sy,colors:{chitinA:7161120,chitinB:3088400,limb:4861718,mandible:14197326,eye:1051654},maxSpeed:12,turnRate:7},sn=Hf;function oy(n){return[n.legLen[0]*n.scale,n.legLen[1]*n.scale]}function Go(n){return n.stride*n.scale}function pi(n){return n.bodyR*n.scale}const ay={worker:Cr,queen:Hf,digger:Vf};function cy(n){return ay[n]||Cr}const Wf=new Z("#393741"),ly=new Z("#241D22"),ea=new qo({color:Wf.clone(),side:Fe,depthWrite:!1});ea.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`
    #include <begin_vertex>
    float oDist = -(modelViewMatrix * vec4(position, 1.0)).z;
    transformed += normal * clamp(0.0017 * oDist, 0.06, 0.16);
  `)};ea.customProgramCacheKey=()=>"inverted-hull";function uy(n){ea.color.copy(ly).lerp(Wf,n)}function hy(n){const t=new Me;return t.name="outline-hull",n.traverse(e=>{if(!e.isMesh||!e.geometry)return;const i=new Ot(e.geometry,ea);i.castShadow=!1,i.receiveShadow=!1,i.frustumCulled=!1,t.add(i)}),t.renderOrder=-1,t}const Ne=Sf({}).footprints,na=42,dy=4.5,fy=20,py=.93;function my(n){return dy*(n.scale||1)}function Qs(n){const t=n.profile||sn;return(t.climbSpeed!==void 0?t.climbSpeed:fy)*(n.scale||1)}const gy=6,Xf=.05,_y=(()=>{const n=In.point(0),t=In.tipPos;return Math.hypot(t[0]-n[0],t[1]-n[1],t[2]-n[2])})();function xy(n){let t=null,e=my(n);for(let r=0;r<Ne.length;r++){const s=Ne[r];if(s.h<na)continue;const o=Math.hypot(s.x-n.x,s.z-n.z);o<e&&(e=o,t={kind:"grass",i:r})}const i=Math.hypot(Ht.x-n.x,Ht.z-n.z)-Ht.w;return i<gy*(n.scale||1)&&i<e&&(t={kind:"tree"}),t}function vy(n,t){n.climb=t.kind==="tree"?{kind:"tree",seg:"trunk",t:.02}:{kind:"grass",i:t.i,t:.03},n.speed=0}function hl(n){let t;if(n.climb.kind==="tree"){const e=zo(Ht,n.climb.t);t=ae(fi(Ht,n.climb.t),wt(e.normal,Hi(n.climb.t)))}else t=fi(Ne[n.climb.i],n.climb.t);n.climb=null,n.x=t[0],n.z=t[2],n.y=Ft(t[0],t[2]),n.speed=0}function My(n,t){if(n.climb){if(n.climb.kind==="grass"){hl(n);return}n.climb.seg==="trunk"&&n.climb.t<=Xf&&hl(n);return}t&&vy(n,t)}function Sy(n,t){return n.climb?n.climb.kind==="tree"?n.climb.seg==="trunk"&&n.climb.t<=Xf?"redescendre du tronc":"reculer pour redescendre":"redescendre du brin":t?t.kind==="tree"?"grimper au tronc":"grimper au brin d'herbe":null}function yy(n,t,e){let i=!1,r=null;if(n.climb.kind==="tree")if(n.climb.seg==="trunk"){n.climb.t=Q(n.climb.t+t*(Qs(n)/Ht.h)*e,0,In.splitT);const o=zo(Ht,n.climb.t),a=ae(fi(Ht,n.climb.t),wt(o.normal,Hi(n.climb.t)));n.x=a[0],n.y=a[1],n.z=a[2],n.climb.t<=5e-4&&t<0?i=!0:n.climb.t>=In.splitT&&t>0&&(r="branch")}else{n.climb.u=Q(n.climb.u+t*(Qs(n)/_y)*e,0,1);const o=In.basis(n.climb.u),a=ae(o.pos,wt(o.up,In.radius(n.climb.u)));n.x=a[0],n.y=a[1],n.z=a[2],n.climb.u<=5e-4&&t<0&&(r="trunk")}else{const o=Ne[n.climb.i];n.climb.t=Q(n.climb.t+t*(Qs(n)/o.h)*e,0,py);const a=fi(o,n.climb.t);n.x=a[0],n.y=a[1],n.z=a[2],n.climb.t<=5e-4&&t<0&&(i=!0)}const s=Qs(n);n.speed=ui(n.speed,Math.abs(t)*s,7,e),n.travel+=Math.abs(t)*s*e,i?hl(n):r==="branch"?(n.climb.seg="branch",n.climb.u=0):r==="trunk"&&(n.climb.seg="trunk",n.climb.t=In.splitT)}function Ho(n,t,e){return n.floorY===null||n.floorY===void 0?Ft(t,e):n.floorY}function Yf(n,t,e,i=sn){return{x:n,y:t,z:e,yaw:0,speed:0,travel:0,bob:0,floorY:null,climb:null,legsInit:!1,profile:i,scale:i.scale}}function qf(n=sn){return n.legs.map(()=>({planted:[0,0,0],from:[0,0,0],to:[0,0,0],swinging:!1,prevP:0}))}function Ey(n){if(n.climb){if(n.climb.kind==="tree"){if(n.climb.seg==="trunk"){const c=zo(Ht,n.climb.t);return{side:c.width,up:c.normal,fwd:c.tangent}}const a=In.basis(n.climb.u);return{side:a.side,up:a.up,fwd:a.fwd}}const o=zo(Ne[n.climb.i],n.climb.t);return{side:o.width,up:o.normal,fwd:o.tangent}}const t=n.floorY===null||n.floorY===void 0?vs(n.x,n.z):[0,1,0],e=re([t[0]*.7,1,t[2]*.7]),i=[Math.sin(n.yaw),0,Math.cos(n.yaw)],r=re(je(e,i)),s=je(r,e);return{side:r,up:e,fwd:s}}function Jl(n){const t=Ey(n),e=n.scale||1,i=1.05*e+n.bob,r=n.climb?ae([n.x,n.y,n.z],wt(t.up,i)):[n.x,Ho(n,n.x,n.z)+i,n.z];return{side:wt(t.side,e),up:wt(t.up,e),fwd:wt(t.fwd,e),p:r,basis:t,scale:e}}function Mn(n,t){const[e,i,r]=t;return[n.side[0]*e+n.up[0]*i+n.fwd[0]*r+n.p[0],n.side[1]*e+n.up[1]*i+n.fwd[1]*r+n.p[1],n.side[2]*e+n.up[2]*i+n.fwd[2]*r+n.p[2]]}function by(n,t,e,i,r){const s=Kn(t,n),o=Math.hypot(s[0],s[1],s[2])||1,a=Q(o,.05,e+i-.02),c=wt(s,1/o),l=(e*e-i*i+a*a)/(2*a),u=Math.sqrt(Math.max(e*e-l*l,0)),h=r[0]*c[0]+r[1]*c[1]+r[2]*c[2],d=re(Kn(r,wt(c,h)));return ae(ae(n,wt(c,l)),wt(d,u))}function wo(n,t,e){const i=Jl(n),r=i.basis,s=n.profile||sn,o=n.scale||1,a=Go(s),c=n.travel/a,l=!!n.climb;for(let u=0;u<s.legs.length;u++){const h=s.legs[u],d=t[u],p=Mn(i,h.rest);l||(p[1]=Ho(n,p[0],p[2])),n.legsInit||(d.planted=p.slice(),d.from=p.slice(),d.to=p.slice());let g=(c+h.phase)%1;if(g<0&&(g+=1),g>=.5&&d.prevP<.5){d.swinging=!0,d.from=d.planted.slice();const x=ae(p,wt(r.fwd,a*.38*Q(n.speed/(16*o),0,1.4)));l||(x[1]=Ho(n,x[0],x[2])),d.to=x}if(g<.5&&d.prevP>=.5&&(d.swinging=!1,d.planted=d.to.slice()),d.prevP=g,d.swinging){const x=(g-.5)*2,m=Math.sin(x*Math.PI)*1.5*o;d.planted=[bt(d.from[0],d.to[0],x),bt(d.from[1],d.to[1],x)+m,bt(d.from[2],d.to[2],x)]}n.speed<.4*o&&!d.swinging&&(d.planted[0]=ui(d.planted[0],p[0],4,e),d.planted[1]=ui(d.planted[1],p[1],4,e),d.planted[2]=ui(d.planted[2],p[2],4,e))}n.legsInit=!0}const os=0,Ty=1;function Nh(n){const t=n.legs.length;return{sphere:n.body.gaster.length+4+t*2,cyl:6+t*2}}function to(n){return[-n[0],n[1],n[2]]}function $f(n,t,e,i,r){const s=n.body,o=n.colors,[a,c]=oy(n),l=Jl(t),u=l.basis,h=l.scale,d=(b,S,E,v=1)=>r(os,Mn(l,b),wt(u.side,S[0]*h*v),wt(u.up,S[1]*h*v),wt(u.fwd,S[2]*h*v),E),p=(b,S,E,v)=>{const A=Ye(b,S,E);r(Ty,A.p,A.x,A.y,A.z,v)},g=n.breathes?1+Math.sin(i*.55)*.04:1;for(let b=0;b<s.gaster.length;b++)d(s.gaster[b].at,s.gaster[b].r,o.chitinB,g);d(s.petiole.at,s.petiole.r,o.chitinB),d(s.thorax.at,s.thorax.r,o.chitinA),d(s.head.at,s.head.r,o.chitinA),d(s.eye.at,s.eye.r,o.eye),d(to(s.eye.at),s.eye.r,o.eye);const x=s.mandible,m=x.gape+Math.sin(i*3.1)*.06+Math.max(0,Math.min(t.speed,14))*.012,f=[x.tip[0]+m,x.tip[1],x.tip[2]];p(Mn(l,x.root),Mn(l,f),x.r*h,o.mandible),p(Mn(l,to(x.root)),Mn(l,to(f)),x.r*h,o.mandible);const T=s.antenna;for(const b of[1,-1]){const S=Math.sin(i*2.4+(b>0?0:1.1))*.42,E=Math.cos(i*1.7+(b>0?.4:1.9))*.3,v=M=>b>0?M:to(M),A=Mn(l,v(T.root)),R=Mn(l,v([T.elbow[0]+S*.25,T.elbow[1]+E*.3,T.elbow[2]])),_=Mn(l,v([T.tip[0]+S,T.tip[1]+E,T.tip[2]]));p(A,R,T.r1*h,o.limb),p(R,_,T.r2*h,o.limb)}const y=s.legR;for(let b=0;b<n.legs.length;b++){const S=n.legs[b],E=e[b],v=Mn(l,S.hip),A=E.planted,R=S.hip[0]>0?u.side:wt(u.side,-1),_=re([u.up[0]+R[0]*.75,u.up[1]+R[1]*.75,u.up[2]+R[2]*.75]),M=by(v,A,a,c,_);p(v,M,y.thigh*h,o.limb),p(M,A,y.shin*h,o.limb);const P=y.knee*h,I=y.foot*h;r(os,M,[P,0,0],[0,P,0],[0,0,P],o.limb),r(os,A,[I,0,0],[0,I,0],[0,0,I],o.limb)}}let Ja=null,Fh=null;function Kf(){return Ja||(Ja=new Ko(1,12,8),Fh=new Fl(1,1,1,7).translate(0,.5,0)),{sphere:Ja,cyl:Fh}}const Oh=new Map;function wy(n){let t=Oh.get(n);return t||(t=new Ke({color:n,roughness:.55,metalness:.05}),Oh.set(n,t)),t}const Qa=new Qt,Bh=new k,zh=new k,kh=new k,Gh=new k;function jf(n,t,e,i){return Bh.set(t[0],t[1],t[2]),zh.set(e[0],e[1],e[2]),kh.set(i[0],i[1],i[2]),Qa.makeBasis(Bh,zh,kh),Gh.set(n[0],n[1],n[2]),Qa.setPosition(Gh),Qa}function Ay(n=sn){const t=Kf(),e=new Me;e.name="ant";const i=[];function r(s,o,a){let c=0;$f(n,s,o,a,(l,u,h,d,p,g)=>{let x=i[c];x||(x=new Ot(l===os?t.sphere:t.cyl,wy(g)),x.matrixAutoUpdate=!1,x.castShadow=!0,i[c]=x,e.add(x)),x.matrix.copy(jf(u,h,d,p)),c++})}return{group:e,updatePose:r}}function Ry(n,t=sn){const e={},i={camYaw:0,wantPitch:-.19,camDist:t.cam.dist,dragging:!1},r={active:!1,id:-1,ox:0,oy:0,dx:0,dy:0};let s=-1,o=0,a=0,c=!1,l=!1,u=null;function h(R){for(let _=0;_<R.length;_++)if(e[R[_]])return!0;return!1}function d(R){e[R.code]=!0,R.code==="KeyE"&&(c=!0),R.code==="KeyH"&&(l=!0),R.code==="Digit5"&&(u="worker"),R.code==="Digit6"&&(u="digger"),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].indexOf(R.code)>=0&&R.preventDefault()}function p(R){e[R.code]=!1}function g(){for(const R in e)e[R]=!1}function x(R){n.setPointerCapture(R.pointerId),R.pointerType==="touch"&&R.clientX<window.innerWidth*.5?(r.active=!0,r.id=R.pointerId,r.ox=R.clientX,r.oy=R.clientY):(i.dragging=!0,s=R.pointerId,o=R.clientX,a=R.clientY)}function m(R){if(r.active&&R.pointerId===r.id){const _=Q(R.clientX-r.ox,-46,46),M=Q(R.clientY-r.oy,-46,46);r.dx=_/46,r.dy=M/46;return}i.dragging&&R.pointerId===s&&(i.camYaw-=(R.clientX-o)*.006,i.wantPitch=Q(i.wantPitch-(R.clientY-a)*.004,-.85,.55),o=R.clientX,a=R.clientY)}function f(R){r.active&&R.pointerId===r.id&&(r.active=!1,r.dx=0,r.dy=0),R.pointerId===s&&(i.dragging=!1,s=-1)}function T(R){i.camDist=Q(i.camDist+R.deltaY*.03*t.scale,t.cam.min,t.cam.max),R.preventDefault()}window.addEventListener("keydown",d),window.addEventListener("keyup",p),window.addEventListener("blur",g),n.addEventListener("pointerdown",x),n.addEventListener("pointermove",m),n.addEventListener("pointerup",f),n.addEventListener("pointercancel",f),n.addEventListener("wheel",T,{passive:!1});function y(){let R=0,_=0;h(["KeyW","KeyZ","ArrowUp"])&&(_+=1),h(["KeyS","ArrowDown"])&&(_-=1),h(["KeyA","KeyQ","ArrowLeft"])&&(R-=1),h(["KeyD","ArrowRight"])&&(R+=1),r.active&&(R+=r.dx,_-=r.dy);const M=Math.min(Math.hypot(R,_),1),P=!!(e.ShiftLeft||e.ShiftRight);return{ix:R,iy:_,mag:M,sprint:P}}function b(){const R=c;return c=!1,R}function S(){const R=l;return l=!1,R}function E(){const R=u;return u=null,R}function v(){return!!e.KeyE}function A(){window.removeEventListener("keydown",d),window.removeEventListener("keyup",p),window.removeEventListener("blur",g),n.removeEventListener("pointerdown",x),n.removeEventListener("pointermove",m),n.removeEventListener("pointerup",f),n.removeEventListener("pointercancel",f),n.removeEventListener("wheel",T)}return{state:i,readMoveIntent:y,consumeInteract:b,consumeHelp:S,consumeCaste:E,isInteractHeld:v,dispose:A}}let tc=null;function Zf(){return tc||(tc=Gl()),tc}function Jf(n,t){const e=Zf();for(const i in e){const r=e[i],s=n-r.origin[0],o=t-r.origin[2],a=s*r.dir[0]+o*r.dir[2];if(a<=-.5||a>=r.uMax+1)continue;const c=s*r.side[0]+o*r.side[2],l=r.profR(Q(a,0,r.uMax));if(!(Math.abs(c)>=l*.82+2))return r}return null}function Qf(n,t,e){return(t-n.origin[0])*n.dir[0]+(e-n.origin[2])*n.dir[2]}function Cy(n){return 2*n.uEnd-n.uMax}function Py(n,t){const e=Jf(n,t);return e?e.profR(Q(Qf(e,n,t),0,e.uMax)):Oe(t)}function Ly(n,t){let e=t,i=t;const r=Zf();for(const s in r){const o=r[s],a=Q(1-Math.abs(n-o.origin[2])/o.doorFalloff,0,1);if(a<=0)continue;const c=bt(t,Math.abs(o.origin[0])+1.5,a);o.dir[0]>0?c>e&&(e=c):c>i&&(i=c)}return{limPos:e,limNeg:i}}const tp=.14;function ep(n){const t=n(0),e=n(Math.PI),i=n(Math.PI*.5);return{aPos:Math.max(Math.abs(t[0]),1.5),aNeg:Math.max(Math.abs(e[0]),1.5),cy:t[1],b:Math.max(i[1]-t[1],.8)}}function Iy(n){return ep(t=>{const e=Ni(t,n,tp);return[e[0],e[1]]})}function Dy(n,t){return ep(e=>{const i=n.pointAt(e,t,tp);return[(i[0]-n.origin[0])*n.side[0]+(i[2]-n.origin[2])*n.side[2],i[1]]})}function Hh(n,t,e){const i=t>=0?n.aPos:n.aNeg,r=Math.min(Math.abs(t)/i,1),s=n.b*Math.max(Math.sqrt(Math.max(0,1-r*r)),.3),o=Math.max(n.cy-s,e+1.6);return{yMin:o,yMax:Math.max(n.cy+s,o+.6)}}function Uy(n,t){if(t.br){const u=t.br,h=n[0]-u.origin[0],d=n[2]-u.origin[2],p=h*u.dir[0]+d*u.dir[2],g=h*u.side[0]+d*u.side[2],x=t.uAnt>t.corridorLen?t.corridorLen-1:-.3,m=Q(p,x,u.uMax-.3),f=Dy(u,Q(m,0,u.uMax)),T=Q(g,-f.aNeg,f.aPos);n[0]=u.origin[0]+u.dir[0]*m+u.side[0]*T,n[2]=u.origin[2]+u.dir[2]*m+u.side[2]*T;const y=Hh(f,T,Ft(n[0],n[2]));return n[1]=Q(n[1],y.yMin,y.yMax),Math.hypot(m-p,T-g)}const e=n[2],i=n[0],r=Q(e,ge+5,Be+3);if(r>-14){const u=Oe(r)*.82*(1+Math.pow((r+14)/17,2)*.9),h=Q(i,-u,u);return n[0]=h,n[2]=r,n[1]=Math.max(n[1],Ft(h,r)+2.2),Math.hypot(h-i,r-e)}const s=Iy(r),{limPos:o,limNeg:a}=Ly(r,Math.max(Oe(r)*.82-1.6,3)),c=Q(i,-Math.max(a,s.aNeg),Math.max(o,s.aPos));n[0]=c,n[2]=r;const l=Hh(s,c,Ft(c,r));return n[1]=Q(n[1],l.yMin,l.yMax),Math.hypot(c-i,r-e)}const eo=10.5;function Ny(n){const t=Ft(ne[0],ne[2]);if(n[1]>t+8.5)return;const e=n[0]-ne[0],i=n[2]-ne[2],r=Math.hypot(e,i);if(!(r>=eo)){if(r<.001){n[0]+=eo;return}n[0]=ne[0]+e/r*eo,n[2]=ne[2]+i/r*eo}}function np(n){const t=Jf(n.x,n.z);if(!t)return{br:null};const e=Qf(t,n.x,n.z);return{br:t,uAnt:e,corridorLen:Cy(t)}}function Ql(n,t,e){return t.z<Be-2?(Ny(n),Uy(n,e||np(t))):(n[1]=Math.max(n[1],Ft(n[0],n[2])+2.2),0)}function ip(n,t,e,i,r=1){return[n[0]-Math.sin(t)*Math.cos(e)*i,n[1]-Math.sin(e)*i+3.4*r,n[2]-Math.cos(t)*Math.cos(e)*i]}const Vh=8,Fy=6,rp=.9,Oy=[0,.25,.5,.8],Wh=-1.25;function By(n,t,e,i,r,s){let o=i,a=1/0;const c=Math.min(Fy*(r.scale||1),i);for(let l=0;l<=Vh;l++){const u=bt(i,c,l/Vh),h=Ql(ip(n,t,e,u,r.scale||1),r,s);if(h<=rp)return{d:u,err:h};h<a&&(a=h,o=u)}return{d:o,err:a}}function zy(n,t,e,i,r,s){let o=null;for(const a of Oy){const c=Math.max(e-a,Wh),l=By(n,t,c,i,r,s);if(l.err<=rp)return{pitch:c,d:l.d};if((!o||l.err<o.err)&&(o={pitch:c,d:l.d,err:l.err}),c<=Wh)break}return o}function ky(n,t,e,i){const r=n.scale||1,s=n.climb?[n.x,n.y+2*r,n.z]:[n.x,Ho(n,n.x,n.z)+2.6*r,n.z],o=n.z<Be-2,a=o?np(n):null,c=o?Py(n.x,n.z):xr,l=o?Math.min(i,Math.max(13.5*r,c*1.5)):i,u=o?zy(s,t,e,l,n,a):{pitch:e,d:l},h=ip(s,t,u.pitch,u.d,r);Ql(h,n,a);const d=[s[0]+Math.sin(n.yaw)*3*r,s[1]+.4*r,s[2]+Math.cos(n.yaw)*3*r];return{eye:h,aim:d}}function Gy(n){const t={eye:null,aim:null};function e(i,r,s,o,a,c){const l=c||ky(i,r,s,o);(!t.eye||c&&c.cut)&&(t.eye=l.eye.slice(),t.aim=l.aim.slice());const u=c?5:6.5;for(let h=0;h<3;h++)t.eye[h]=ui(t.eye[h],l.eye[h],u,a),t.aim[h]=ui(t.aim[h],l.aim[h],u*1.4,a);c||Ql(t.eye,i),n.position.set(t.eye[0],t.eye[1],t.eye[2]),n.lookAt(new k(t.aim[0],t.aim[1],t.aim[2]))}return t.update=e,t}function as(n,t,e,i){const r=(t-n+Math.PI*3)%(Math.PI*2)-Math.PI;return n+r*(1-Math.exp(-e*i))}const ec={GRASS:"grass",ROCKS:"rocks",MUSHROOMS:"mushrooms"};let Pr=null,dl="linear";function sp(n,t="external"){const e={...n||{}};return typeof e.queryDisc!="function"?(Pr=null,dl="linear",!1):(Pr=e,dl=t,!0)}function op(){if(Pr)return;const n=typeof globalThis<"u"?globalThis:null;if(!n)return;const t=n.__spatialIndex||n.__spatial||null;t&&sp(t,"global")}function nc(n,t,e,i,r,s){if(op(),Pr)return Pr.queryDisc(n,t,e,i,s),!0;for(let o=0;o<r.length;o++)s(r[o],o);return!1}function Hy(){return op(),{indexed:!!Pr,source:dl}}function Vy(n){return n.w*.75}const ap=.01,Xh=fi(Ht,ap),Wy=Hi(ap)*.88,cp=pi(sn)*2+.6,Xy=cp+.2,Yy=14;function qy(n,t,e,i){for(let r=.3;r<=Yy;r+=.3){const s=n+e*r,o=t+i*r,a=Zo(s,o);if(Math.hypot(a[0]-s,a[1]-o)>.05)return r}return 1/0}const lp=[];for(let n=0;n<8;n++)lp.push([Math.cos(n*Math.PI/4),Math.sin(n*Math.PI/4)]);function $y(n,t,e){let i=0,r=1/0;const s=lp.map(([c,l],u)=>{const h=qy(n,t,c,l);return h<r&&(r=h,i=u),h});if(r===1/0||r-e>=Xy)return e;const o=Math.max(e,r+.3);return s[(i+4)%8]-o<cp?0:o}const Ky=1;let ic=null;function jy(){return ic||(ic=Object.values(Gl())),ic}function Zy(n,t){for(const e of jy()){const i=n-e.origin[0],r=t-e.origin[2],s=i*e.dir[0]+r*e.dir[2];if(s<=-.5||s>=e.uMax+1)continue;const o=i*e.side[0]+r*e.side[2],a=Math.max(e.profR(Q(s,0,e.uMax))*.82-1.2,2.2);if(!(Math.abs(o)>=a+3))return a}return Math.max(Oe(t)*.82-1.6,3)}function Jy(n,t,e,i){return 2*Zy(n,t)>=2*i+2*e+Ky}let no=null,Yh=null;function up(n=pi(sn)){return(!no||no.length!==En.length||Yh!==n)&&(Yh=n,no=En.map(t=>{const e=$y(t.x,t.z,Af(t));return e>0&&Jy(t.x,t.z,e,n)?e:0})),no}let $r=null,qh=-1;function Qy(){if(!$r||qh!==Ne.length){qh=Ne.length,$r=[];for(let n=0;n<Ne.length;n++){const t=Ne[n];t.h>=na&&$r.push({x:t.x,z:t.z,r:Vy(t)})}$r.push({x:Xh[0],z:Xh[2],r:Wy})}return $r}let io=null,$h=-1;function t1(){const n=up();if(!io||$h!==En.length){$h=En.length,io=[];for(let t=0;t<En.length;t++)n[t]>0&&io.push({x:En[t].x,z:En[t].z,r:n[t]})}return io}let rc=null,Kh=-1;function e1(){return(!rc||Kh!==Yn.length)&&(Kh=Yn.length,rc=Yn.map(n=>({x:n.x,z:n.z,r:n.r}))),rc}function sc(n){let t=0;for(let e=0;e<n.length;e++)n[e].r>t&&(t=n[e].r);return t}function hp(n,t,e,i=0){const r=s=>e(s.x,s.z,s.r);if(t<Be+6){const s=t1();nc(ec.MUSHROOMS,n,t,i+sc(s),s,r)}if(t>Be-6){const s=e1(),o=Qy();nc(ec.ROCKS,n,t,i+sc(s),s,r),nc(ec.GRASS,n,t,i+sc(o),o,r)}}function n1(n,t,e=0){let i=0;return hp(n,t,(r,s,o)=>{const a=o+e-Math.hypot(n-r,t-s);a>i&&(i=a)},e),i}function jh(n){const t={x:0,z:0,n:0},e=pi(n.profile||sn);return hp(n.x,n.z,(i,r,s)=>{const o=s+e,a=n.x-i,c=n.z-r,l=Math.hypot(a,c);if(l>=o||l<.001)return;const u=o-l;t.x+=a/l*u,t.z+=c/l*u,t.n++},e),t}function fl(n,t){const e=jh(n);if(e.n===0)return;const i=e.x/e.n,r=e.z/e.n;n.x+=i,n.z+=r;const s=Math.hypot(i,r);if(s>5e-4){const a=i/s,l=-(r/s),u=a,h=Math.sin(n.yaw)*l+Math.cos(n.yaw)*u,d=t*.6*(h>=0?1:-1);n.x+=l*d,n.z+=u*d}const o=jh(n);o.n>0&&(n.x+=o.x/o.n,n.z+=o.z/o.n)}const i1=11;function r1(n,t,e){const i=re([e[0]-t[0],0,e[2]-t[2]]),r=je(i,[0,1,0]);return{wishX:i[0]*n.iy+r[0]*n.ix,wishZ:i[2]*n.iy+r[2]*n.ix}}function s1(n,t,e,i){const r=n.profile||sn,s=n.scale||1,o=pi(r),a=r.maxSpeed*(e.sprint?r.sprint:1);e.mag>.02?(n.yaw=as(n.yaw,Math.atan2(t.wishX,t.wishZ),r.turnRate,i),n.speed=ui(n.speed,a*e.mag,7,i)):n.speed=ui(n.speed,0,9,i);const c=n.speed*i;if(n.x+=Math.sin(n.yaw)*c,n.z+=Math.cos(n.yaw)*c,n.travel+=c,fl(n,c),n.z<Be){const[l,u]=Zo(n.x,n.z);n.x=l,n.z=u;const h=i1+o,d=n.x-ne[0],p=n.z-ne[2],g=Math.hypot(d,p);if(g<h&&g>.001){const x=d/g,m=p/g;n.x=ne[0]+x*h,n.z=ne[2]+m*h;const f=-m,T=x,y=Math.sin(n.yaw)*f+Math.cos(n.yaw)*T,b=c*.75*(y>=0?1:-1);n.x+=f*b,n.z+=T*b}}else{const l=Q(n.z,Te.z0,Te.z1);n.x=Math.max(sl(n.x,l)[0],sl(n.x-o,l)[0]+o),n.x=Math.min(n.x,Te.x1-o*2),n.z=Math.min(n.z,Te.z1-o*2)}n.y=Ft(n.x,n.z),n.bob=Math.sin(n.travel*(Math.PI*2/Go(r))*2)*.13*s*Q(n.speed/(8*s),0,1)}const $e={...ta},Zh={terre:{label:"terre meuble",diggable:!0,quality:.9},argile:{label:"argile",diggable:!0,quality:.72},litiere:{label:"litière de feuilles",diggable:!0,quality:.66},sable:{label:"sable",diggable:!0,quality:.38},roche:{label:"roche",diggable:!1,quality:0},boue:{label:"boue détrempée",diggable:!1,quality:0}},pl=32,ro=9,Ao=18,so=55,o1=190,oo=55,ml=14,a1={soil:.28,slope:.16,water:.2,shade:.18,food:.18},c1={soil:"terre",moss:"litiere",sand:"sable",rock:"roche",water:"boue",terre:"terre",argile:"argile",litiere:"litiere",sable:"sable",roche:"roche",boue:"boue"};function l1(n,t){if(typeof $e.soilAt=="function"){const e=$e.soilAt(n,t),i=c1[typeof e=="string"?e:e&&e.kind],r=Zh[i];if(r)return{...r,kind:i,assumed:!1}}return{...Zh.terre,kind:"terre",assumed:!0}}function u1(n,t){if(typeof $e.slopeAt=="function")return{deg:$e.slopeAt(n,t),assumed:!1};const e=$e.groundNormal(n,t);return{deg:Math.acos(Q(e[1],-1,1))*180/Math.PI,assumed:!1}}function h1(n,t){return typeof $e.waterDistance=="function"?{d:$e.waterDistance(n,t),assumed:!1}:typeof $e.distanceToWater=="function"?{d:$e.distanceToWater(n,t),assumed:!1}:{d:null,assumed:!0}}function d1(n,t){if(typeof $e.shadeAt=="function")return{v:Q($e.shadeAt(n,t),0,1),assumed:!1};const e=$e.TREE,i=e?Q(1-Math.hypot(n-e.x,t-e.z)/90,0,1):0;let r=0;for(let s=0;s<Ne.length;s++){const o=Ne[s];o.h<na||Math.abs(o.x-n)>26||Math.abs(o.z-t)>26||Math.hypot(o.x-n,o.z-t)<26&&r++}return{v:Q(i*.8+Math.min(r,8)/8*.5,0,1),assumed:!0}}function f1(n,t){const e=$e.RESOURCE_NODES;if(Array.isArray(e)){let r=0;for(const s of e)Math.hypot(s.x-n,s.z-t)<oo&&r++;return{n:r,assumed:!1}}let i=0;for(let r=0;r<Ne.length;r++){const s=Ne[r];s.h<na||Math.abs(s.x-n)>oo||Math.abs(s.z-t)>oo||Math.hypot(s.x-n,s.z-t)<oo&&i++}return{n:i,assumed:!0}}function p1(n){if(n>=pl)return 0;const t=n<=ro?.78+.22*(n/ro):1-Math.pow((n-ro)/(pl-ro),1.4);return Q(t,0,1)}function m1(n){return n===null?.5:n<=Ao?0:n<=so?Q((n-Ao)/(so-Ao),0,1):Q(1-(n-so)/(o1-so),.15,1)}const g1=[{min:78,key:"excellent",label:"excellent"},{min:60,key:"bon",label:"bon"},{min:42,key:"moyen",label:"moyen"},{min:0,key:"ingrat",label:"ingrat"}];function _1(n){return g1.find(t=>n>=t.min)}function x1(n){return n>.66?"à l'ombre":n>.3?"mi-ombre":"plein soleil"}function v1(n){return n>=ml?"ressources abondantes":n>=ml*.4?"quelques ressources":"peu de ressources"}function Ro(n,t){const e=l1(n,t),i=u1(n,t),r=h1(n,t),s=d1(n,t),o=f1(n,t),a=[{key:"soil",label:e.label,value:e.quality,assumed:e.assumed},{key:"slope",label:`pente ${i.deg.toFixed(0)}°`,value:p1(i.deg),assumed:i.assumed},{key:"water",label:r.d===null?"eau inconnue":`eau à ${r.d.toFixed(0)}`,value:m1(r.d),assumed:r.assumed},{key:"shade",label:x1(s.v),value:Q(s.v*1.25,0,1),assumed:s.assumed},{key:"food",label:v1(o.n),value:Q(o.n/ml,0,1),assumed:o.assumed}];let c=null;t<$e.TUNNEL_MOUTH?c={key:"underground",text:"sous terre — rien à fonder ici"}:e.diggable?r.d!==null&&r.d<=Ao?c={key:"water",text:"trop près de l'eau — la galerie serait inondée"}:i.deg>=pl&&(c={key:"slope",text:`pente ${i.deg.toFixed(0)}° — le sol s'effondrerait`}):c={key:"soil",text:`${e.label} — impossible de creuser`};let l=0;for(const h of a)l+=h.value*a1[h.key];const u=Math.round(Q(l,0,1)*100);return{x:n,z:t,diggable:!c,blocker:c,score:u,grade:_1(u),factors:a,assumed:a.some(h=>h.assumed)}}function M1(n){return n.diggable?`Site : ${n.grade.label} (${n.score}/100)`:`Site : impossible — ${n.blocker.text}`}function Jh(n){return n.factors.slice().sort((t,e)=>t.value-e.value).map(t=>t.assumed?`${t.label} ?`:t.label).join(" · ")}const dp="myrmidia.testPace",S1=.12,y1=.2;let Lr=!0;try{const n=localStorage.getItem(dp);n!==null&&(Lr=n==="1")}catch{}function Qh(){return Lr}function E1(n){Lr=!!n;try{localStorage.setItem(dp,Lr?"1":"0")}catch{}}function oc(n){return Lr?n*S1:n}function fp(n){return Lr?Math.max(1,Math.round(n*y1)):n}const Vo={...ta},lr={graine:"graine",brindille:"brindille",miellat:"miellat"},b1={graine:["graine","graines"],brindille:["brindille","brindilles"],miellat:["dose de miellat","doses de miellat"]};function T1(n,t){const e=b1[n]||[n,n];return`${t} ${t>1?e[1]:e[0]}`}const w1=[{x:60,z:110,kind:"graine",amount:3},{x:95,z:105,kind:"brindille",amount:3},{x:55,z:120,kind:"miellat",amount:2},{x:100,z:125,kind:"graine",amount:2},{x:45,z:115,kind:"brindille",amount:2},{x:85,z:135,kind:"miellat",amount:2},{x:110,z:110,kind:"graine",amount:2},{x:65,z:135,kind:"brindille",amount:2},{x:40,z:128,kind:"graine",amount:2}].map((n,t)=>({id:9e3+t,r:10,...n}));let pp=!1;function ys(){return Array.isArray(Vo.RESOURCE_NODES)?Vo.RESOURCE_NODES:(pp=!0,w1)}function mp(){return ys(),pp}function A1(n,t){if(!n)return 0;if(typeof Vo.harvestNode=="function")return Vo.harvestNode(n.id,t)||0;const e=Math.max(0,Math.min(t,n.amount));return n.amount-=e,e}function R1(n,t,e=0){const i=ys();let r=null,s=1/0;for(let o=0;o<i.length;o++){const a=i[o];if(a.amount<=0)continue;const c=Math.hypot(a.x-n,a.z-t);c<=a.r+e*.6&&c<s&&(s=c,r=a)}return r}const td=1.8,gp=16,gl=5,C1=.5;function P1(){const n={carrying:null,cache:null,progress:0,activeId:null,justTook:null,justDropped:null};function t(){n.progress=0,n.activeId=null}function e(g,x){if(n.activeId!==null){const m=ys();for(let f=0;f<m.length;f++){const T=m[f];if(T.id===n.activeId){if(T.amount>0&&Math.hypot(T.x-g.x,T.z-g.z)<=T.r+x*.6)return T;break}}}return R1(g.x,g.z,x)}function i(g,x){if(n.carrying)return"full";if(!g)return r(x),"idle";if(n.activeId!==g.id&&(n.activeId=g.id,n.progress=0),n.progress+=x/td,n.progress<1)return"progress";const m=A1(g,1);return t(),m<=0?"empty":(n.carrying={kind:g.kind},n.justTook={kind:g.kind,qty:m,node:g},"taken")}function r(g){if(n.progress<=0){n.activeId=null;return}n.progress=Math.max(0,n.progress-g*C1/td),n.progress===0&&(n.activeId=null)}function s(g){return n.cache?Math.hypot(n.cache.x-g.x,n.cache.z-g.z):1/0}function o(g){return n.carrying?!n.cache||s(g)<=gp:!1}function a(g){if(!o(g))return!1;n.cache||(n.cache={x:g.x,y:Ft(g.x,g.z),z:g.z,items:{},total:0});const x=n.carrying.kind;return n.cache.items[x]=(n.cache.items[x]||0)+1,n.cache.total+=1,n.carrying=null,n.justDropped={kind:x,cache:n.cache},!0}function c(g){if(!n.cache)return 0;let x=g,m=0;for(;x>0;){const f=Object.entries(n.cache.items).filter(([,T])=>T>0).sort((T,y)=>y[1]-T[1])[0];if(!f)break;n.cache.items[f[0]]-=1,n.cache.total-=1,x-=1,m+=1}return m}function l(){n.justTook=null,n.justDropped=null}function u(){return n.cache?n.cache.total:0}function h(){return u()>=fp(gl)}function d(){return!n.cache||n.cache.total===0?null:Object.entries(n.cache.items).filter(([,g])=>g>0).map(([g,x])=>T1(g,x)).join(" · ")}function p(){const g=n.carrying?`Porte : ${lr[n.carrying.kind]}`:"Porte : rien",x=d();return`${g} · Réserve : ${u()}/${gl}${x?` (${x})`:""}`}return{state:n,target:e,hold:i,release:r,canDrop:o,drop:a,cacheDistance:s,spend:c,stock:u,enough:h,stockDetail:d,inventoryLine:p,endFrame:l}}const Vi={...ta},ed=4,L1={rock:"la roche ne se creuse pas",soil:"ce sol ne se creuse pas",water:"trop près de l'eau — la galerie serait inondée",slope:"la pente s'effondrerait",underground:"on ne fonde pas dans une galerie déjà creusée",bounds:"le bord du monde — il faut revenir vers le pré",occupied:"une galerie passe déjà sous ce sol","already-founded":"la colonie est déjà fondée"};function _l(n){return n?L1[n]||`impossible de creuser ici (${n})`:"impossible de creuser ici"}let xl=null,_p=!1;function ac(){return typeof Vi.foundNest!="function"||_p}function Mr(){if(typeof Vi.nestOrigin=="function"){const n=Vi.nestOrigin();if(n)return n}return xl}function Co(){return!!Mr()}function tu(n,t){if(Co())return{ok:!1,reason:"already-founded"};if(typeof Vi.canFoundAt=="function"){const i=Vi.canFoundAt(n,t)||{};return{ok:!!i.ok,reason:i.reason,assumed:!1}}const e=Ro(n,t);return e.diggable?{ok:!0,assumed:!0}:{ok:!1,reason:e.blocker.key,assumed:!0}}function xp(n,t){const e=tu(n,t);if(!e.ok)return e;if(typeof Vi.foundNest=="function"){const i=Vi.foundNest(n,t)||{};return i.ok&&(xl={x:n,z:t}),{ok:!!i.ok,reason:i.reason,assumed:!1}}return _p=!0,xl={x:n,z:t},{ok:!0,assumed:!0}}function nd(n,t,e,i){const r=e-n,s=i-t;if(Math.hypot(r,s)<1)return"ici";const o=s>8?"nord":s<-8?"sud":"",a=r>8?"est":r<-8?"ouest":"";return o&&a?`au ${o}-${a}`:a?`à l'${a}`:`au ${o}`}const Ve={...ta},id=[{k:"descend",s:3.2},{k:"dark",s:2.6},{k:"lay",s:3.4},{k:"rest",s:2.6},{k:"ascend",s:3.2}],rd=6,sd=6,od=8,I1=5.2,D1=1.8,U1=5.5,ad=26,N1=15,cd=(n,t,e)=>[bt(n[0],t[0],e),bt(n[1],t[1],e),bt(n[2],t[2],e)],ao=n=>n*n*(3-2*n);function F1(n){const t=n._furnishing&&n._furnishing.piles&&n._furnishing.piles[0],e=t&&t.lamp&&t.lamp.p;return e?[e[0],e[2]]:[n.chamber.x,n.chamber.z]}function O1(){const n={phase:null,i:0,t:0,brood:0,mixT:null,justEnded:!1,justLaid:!1};let t=null,e=null,i=null,r=null,s=null,o=null,a=0,c=null,l=null,u=0,h=!1;function d(){return n.phase!==null}function p(v){if(d())return!1;const A=typeof Ve.getFoundedNest=="function"?Ve.getFoundedNest():null;if(!A||!A.chamber)return!1;t=A,i=[t.mouth.x,t.mouth.y,t.mouth.z],e={x:v.x,y:v.y,z:v.z,yaw:v.yaw};const R=t.chamber;o=F1(t);let _=R.x-o[0],M=R.z-o[1];const P=Math.hypot(_,M);P<.5?(_=0,M=1):(_/=P,M/=P);const I=Math.min(U1,P);r=[o[0]+_*I,t.floorY,o[1]+M*I],a=Math.atan2(_,M),u=Math.atan2(-_,-M);let U=i[0]-R.x,V=i[2]-R.z;const B=Math.hypot(U,V);return B<.01?(U=0,V=1):(U/=B,V/=B),s=[i[0]+U*21,0,i[2]+V*21],s[1]=Ve.groundY(s[0],s[2]),c=[i[0]-Math.sin(e.yaw)*ad,i[1]+N1,i[2]-Math.cos(e.yaw)*ad],l=[i[0],i[1]+1,i[2]],n.phase="descend",n.i=0,n.t=0,n.justEnded=!1,h=!1,!0}function g(v,A,R){if(A<.34){const I=ao(A/.34);v.x=bt(e.x,i[0],I),v.z=bt(e.z,i[2],I),v.y=bt(e.y,i[1],I),v.speed=6,v.travel+=6*R,v.yaw=e.yaw,v.floorY=v.y;return}const M=ao((A-.34)/(1-.34)),P=cd([i[0],i[1],i[2]],r,M);v.x=P[0],v.y=P[1],v.z=P[2],v.floorY=v.y,v.speed=0,v.yaw=bt(e.yaw,u,M)}function x(v){v.x=r[0],v.y=r[1],v.z=r[2],v.floorY=t.floorY,v.yaw=u,v.speed=0}function m(v,A,R){if(A<.66){const P=ao(A/.66),I=cd(r,[i[0],i[1],i[2]],P);v.x=I[0],v.y=I[1],v.z=I[2],v.floorY=v.y,v.yaw=bt(u,Math.atan2(s[0]-i[0],s[2]-i[2]),P),v.speed=0;return}const M=ao((A-.66)/(1-.66));v.x=bt(i[0],s[0],M),v.z=bt(i[2],s[2],M),v.y=bt(i[1],s[1],M),v.floorY=v.y,v.speed=7,v.travel+=7*R}function f(v){if(!d())return null;const A=h;if(h=!1,!(n.phase==="dark"||n.phase==="lay"||n.phase==="rest"||n.phase==="ascend"&&n.t<.45))return{eye:c,aim:n.phase==="ascend"?[v.x,v.y+3,v.z]:l,cut:A};const _=t.chamber;return{eye:[_.x+Math.sin(a)*od,t.floorY+I1,_.z+Math.cos(a)*od],aim:[(v.x+o[0])*.5,t.floorY+D1,(v.z+o[1])*.5],cut:A}}function T(v,A){if(n.justEnded=!1,n.justLaid=!1,n.mixT!==null&&typeof Ve.setFoundedMix=="function"&&(n.mixT+=A,Ve.setFoundedMix(Q(n.mixT/rd,0,1)),n.mixT>=rd&&(n.mixT=null)),!d())return null;const R=id[n.i];switch(n.t=Q(n.t+A/R.s,0,1),R.k){case"descend":g(v,n.t,A);break;case"ascend":m(v,n.t,A);break;default:x(v);break}if(n.t>=1){n.i++,n.t=0;const _=id[n.i];n.phase=_?_.k:null,_?y(_.k):(v.floorY=null,v.y=Ve.groundY(v.x,v.z),v.speed=0,n.justEnded=!0,t=null)}return n.phase}function y(v){if(v==="dark"){typeof Ve.sealNest=="function"&&Ve.sealNest(!0),h=!0;return}if(v==="lay"){n.brood=Math.min(n.brood+1,sd),typeof Ve.populateNest=="function"&&Ve.populateNest(n.brood),n.justLaid=!0,n.mixT===null&&typeof Ve.foundedMix=="function"&&Ve.foundedMix()<1&&(n.mixT=0);return}v==="ascend"&&(typeof Ve.sealNest=="function"&&Ve.sealNest(!1),h=!0)}const b={descend:"Elle descend dans la chambre.",dark:"Elle referme l'entrée derrière elle.",rest:"Le couvain éclaire la chambre.",ascend:"Elle remonte au jour."};function S(){return d()?n.phase==="lay"?n.brood===1?"Première ponte.":"Elle pond.":b[n.phase]||null:null}function E(){return n.justLaid?n.brood===1?"Première ponte — la colonie existe.":`Ponte : ${n.brood}ᵉ couvée.`:null}return{state:n,begin:p,update:T,shot:f,promptText:S,eventText:E,active:d,brood:()=>n.brood,canLayMore:()=>n.brood<sd}}const B1={harvest:!0,found:!0,lay:!0},ld=2.2,z1=15;function k1({profile:n=sn}={}){const t=P1(),e=pi(n),i=O1();let r=0,s=0,o=null,a=0;function c(S){const E=Mr();return E?Math.hypot(E.x-S.x,E.z-S.z):1/0}function l(){return fp(gl)}function u(S){return Co()&&!ac()&&i.canLayMore()&&t.stock()>=l()&&c(S)<=z1}function h(S,E=3.2){o=S,a=E}function d(S){if(i.active())return{kind:"sequence"};if(S.climb)return{kind:"climb",climbTarget:null};if(t.state.carrying){const R=t.state.carrying.kind;if(t.canDrop(S))return{kind:"drop",label:t.state.cache?"ajouter au dépôt":"poser ici — ce sera le dépôt"};const _=t.cacheDistance(S),M=t.state.cache;return{kind:"return",label:`rapporter ${lr[R]} au dépôt (${_.toFixed(0)} u ${nd(S.x,S.z,M.x,M.z)})`}}if(t.state.cache&&!Co()&&t.enough()&&t.cacheDistance(S)<=gp){const R=tu(S.x,S.z);return{kind:"found",ok:R.ok,reason:R.reason,assumed:R.assumed}}if(u(S))return{kind:"lay"};const v=t.target(S,e);if(v)return{kind:"harvest",node:v};const A=xy(S);return A?{kind:"climb",climbTarget:A}:{kind:"none"}}function p(S,E,v,A){i.update(S,A);const R=i.eventText();R&&h(R,6);const _=d(S);switch(a>0&&(a-=A,a<=0&&(o=null)),(_.kind!=="harvest"||!v)&&t.release(A),(_.kind!=="found"||!v||!_.ok)&&(r=Math.max(0,r-A/ed)),(_.kind!=="lay"||!v)&&(s=Math.max(0,s-A/ld)),_.kind){case"harvest":{if(v){const M=t.hold(_.node,A);M==="taken"?h(`elle emporte ${lr[t.state.carrying.kind]}`):M==="empty"&&h("plus rien à prendre ici")}break}case"found":{if(v&&_.ok&&(r+=A/ed,r>=1)){r=0;const M=xp(S.x,S.z);h(M.ok?ac()?"Colonie fondée ici. (le monde ne creuse pas encore la chambre)":"Colonie fondée ici.":`impossible : ${_l(M.reason)}`,6),M.ok&&(t.spend(l()),i.begin(S))}break}case"lay":{v&&(s+=A/ld,s>=1&&(s=0,i.begin(S)&&t.spend(l())));break}case"drop":if(E){const M=t.state.carrying.kind;t.drop(S)&&h(t.stock()===1?`dépôt ouvert ici — ${lr[M]} posée`:`${lr[M]} ajoutée au dépôt (${t.stock()}/${l()})`)}break;case"climb":E&&My(S,_.climbTarget);break}return _}function g(S){return`${Math.round(S*100)}%`}function x(S,E){if(E.kind==="sequence")return i.promptText();if(E.kind==="lay")return s>0?`Ponte… ${g(s)}`:`E (maintenir) — descendre pondre (${l()} unité${l()>1?"s":""} du dépôt)`;if(E.kind==="climb")return Sy(S,E.climbTarget);if(E.kind==="return")return E.label;if(E.kind==="drop")return`E — ${E.label}`;if(E.kind==="harvest"){const v=E.node;return t.state.progress>0?`Récolte… ${g(t.state.progress)}`:`E (maintenir) — récolter ${lr[v.kind]}`}return E.kind==="found"?E.ok?r>0?`Creusement… ${g(r)}`:"E (maintenir) — fonder la colonie ici":`Fonder ici : ${_l(E.reason)}`:null}function m(S){if(i.active())return"La fondation : elle descend pondre.";if(Co()){const A=Mr(),R=Math.hypot(A.x-S.x,A.z-S.z),_=R<12?"ici":`à ${R.toFixed(0)} u ${nd(S.x,S.z,A.x,A.z)}`,M=ac()?" [chambre non creusée]":"",P=i.brood();if(P===0)return`Colonie fondée ${_}. Objectif : descendre pondre.${M}`;if(!i.canLayMore())return`${P} couvées — la chambre est pleine. Suite : les ouvrières.${M}`;const I=l()-t.stock();return I>0?`${P} couvée${P>1?"s":""}. Objectif : ${I} unité${I>1?"s":""} de plus pour la suivante.${M}`:`${P} couvée${P>1?"s":""}. Objectif : rentrer pondre — le nid est ${_}.${M}`}const E=l()-t.stock();if(t.state.carrying)return t.state.cache?`Objectif : rapporter au dépôt — encore ${E} pour fonder`:"Objectif : poser ce fardeau — le premier dépôt fixe le site de la colonie";if(t.enough())return"Objectif : fonder la colonie sur le dépôt";const v=mp()?" [nœuds provisoires]":"";return`Objectif : récolter ${E} unité${E>1?"s":""} de plus${v}`}function f(){return t.inventoryLine()}function T(){return o}function y(S){return S.kind==="harvest"&&t.state.progress>0?t.state.progress:S.kind==="found"&&r>0?r:S.kind==="lay"&&s>0?s:null}function b(S,E){switch(E.kind){case"harvest":return{x:E.node.x,z:E.node.z,radius:Math.max(E.node.r,6),blocked:!1};case"found":{const v=t.state.cache;return v?{x:v.x,z:v.z,radius:11,blocked:!E.ok}:null}case"drop":{const v=t.state.cache;return{x:v?v.x:S.x,z:v?v.z:S.z,radius:v?11:7,blocked:!1}}case"return":{const v=t.state.cache;return v?{x:v.x,z:v.z,radius:11,blocked:!1}:null}case"lay":{const v=Mr();return v?{x:v.x,z:v.z,radius:9,blocked:!1}:null}case"climb":{const v=E.climbTarget;if(!v)return null;if(v.kind==="tree")return{x:Ht.x,z:Ht.z,radius:Ht.w+5,blocked:!1};const A=Ne[v.i];return A?{x:A.x,z:A.z,radius:5,blocked:!1}:null}default:return null}}return{harvest:t,laying:i,update:p,resolve:d,promptText:x,objectiveText:m,inventoryText:f,message:T,holdProgress:y,targetMark:b,busy:()=>i.active(),shot:S=>i.shot(S),isHold:S=>!!B1[S.kind],endFrame:()=>t.endFrame()}}const Wo={graine:{r:[.95,.78,1.3],color:14270852,emissive:0},brindille:{r:[2.9,.26,.26],color:8016424,emissive:0},miellat:{r:[.9,.88,.9],color:15247420,emissive:3810309}},G1=2,H1=12;let cc=null;function V1(){return cc||(cc=new Ko(1,10,7)),cc}const ud=new Map;function vp(n){let t=ud.get(n);if(!t){const e=Wo[n];t=new Ke({color:e.color,emissive:e.emissive,roughness:.7,metalness:.02}),ud.set(n,t)}return t}const lc=new Qt,hd=new k,dd=new k,fd=new k,pd=new k;function Mp(n,t,e,i,r){hd.set(e[0],e[1],e[2]),dd.set(i[0],i[1],i[2]),fd.set(r[0],r[1],r[2]),lc.makeBasis(hd,dd,fd),pd.set(t[0],t[1],t[2]),lc.setPosition(pd),n.matrix.copy(lc)}function uc(n){const t=new Ot(V1(),vp(n));return t.matrixAutoUpdate=!1,t.castShadow=!0,t.visible=!1,t}function md(n,t,e,i,r,s=0){const o=Wo[t].r.map(l=>l*G1),a=Math.cos(r),c=Math.sin(r);Mp(n,[e,Ft(e,i)+o[1]*.9+s,i],[a*o[0],0,c*o[0]],[0,o[1],0],[-c*o[2],0,a*o[2]]),n.visible=!0}function W1({scene:n,profile:t=sn}){const e=new Me;e.name="gameplay-props",n.add(e);const i={};for(const p of Object.keys(Wo))i[p]=uc(p),e.add(i[p]);const r=[];for(let p=0;p<H1;p++){const g=uc("graine");r.push(g),e.add(g)}let s=-1;const o=mp(),a=[];if(o)for(const p of ys()){const g=[];for(let x=0;x<3;x++){const m=uc(p.kind);e.add(m),g.push(m)}a.push({node:p,clutch:g,drawn:-1})}function c(){for(const p of a){const g=p.node,x=Math.max(0,Math.min(p.clutch.length,g.amount));if(x!==p.drawn){p.drawn=x;for(let m=0;m<p.clutch.length;m++)if(m<x){const f=m/p.clutch.length*Math.PI*2+g.id;md(p.clutch[m],g.kind,g.x+Math.cos(f)*3.2,g.z+Math.sin(f)*3.2,f)}else p.clutch[m].visible=!1}}}function l(p){if(!p||p.total===s)return;s=p.total;let g=0;for(const[x,m]of Object.entries(p.items))for(let f=0;f<m&&g<r.length;f++,g++){const T=g*2.399,y=1.6+g*1.15,b=r[g];b.material=vp(x),md(b,x,p.x+Math.cos(T)*y,p.z+Math.sin(T)*y,T*1.7)}for(;g<r.length;g++)r[g].visible=!1}function u(p,g){for(const E of Object.keys(i))i[E].visible=!1;if(!g)return;const x=i[g.kind];if(!x)return;const m=Jl(p),f=m.basis,T=m.scale,y=(p.profile||t).body.mandible,b=[0,y.tip[1]-.15,y.tip[2]+.55],S=Wo[g.kind].r;Mp(x,Mn(m,b),wt(f.side,S[0]*T),wt(f.up,S[1]*T),wt(f.fwd,S[2]*T)),x.visible=!0}function h(p,g){u(p,g.carrying),l(g.cache),o&&c()}function d(){n.remove(e)}return{group:e,update:h,dispose:d,provisional:o}}const X1="position:fixed;color:#e6d3ab;font:13px/1.5 monospace;pointer-events:none;text-shadow:0 1px 3px rgba(0,0,0,0.9);z-index:5;";function Gn(n,t){const e=document.createElement("div");return e.id=n,e.style.cssText=X1+t,document.body.appendChild(e),e}function Y1(){return{setSite(){},setPrompt(){},setObjective(){},setStock(){},setEvent(){},setHold(){},setDig(){},setEventNow(){},toggleControls(){},closeControls(){},dispose(){}}}const q1=[["ZQSD / WASD","se déplacer"],["Maj","courir"],["Souris (glisser)","tourner la caméra"],["Molette","reculer / rapprocher la vue"],["E","action — appui court, ou maintenu quand la barre apparaît"],["5 / 6","prochaine ponte : ouvrières / creuseuses"],["P","graphismes — et la cadence de test (raccourcit les attentes)"],["H","afficher / masquer cette aide"]];function $1(){if(typeof document>"u")return Y1();const n=Gn("event","left:12px;bottom:142px;color:#cfe0a8;"),t=Gn("prompt","left:12px;bottom:122px;font-size:14px;color:#ffe6b0;"),e=Gn("objective","left:12px;bottom:88px;color:#f0dfb8;"),i=Gn("stock","left:12px;bottom:70px;opacity:0.85;"),r=Gn("siteinfo","left:12px;bottom:52px;"),s=Gn("sitedetail","left:12px;bottom:34px;opacity:0.62;font-size:12px;"),o=Gn("hold","left:12px;bottom:112px;width:190px;height:5px;background:rgba(0,0,0,0.45);border-radius:3px;overflow:hidden;"),a=document.createElement("div");a.style.cssText="height:100%;width:0%;background:#ffc46a;border-radius:3px;",o.appendChild(a),o.style.display="none";const c=Gn("controls","right:12px;top:12px;padding:10px 14px;background:rgba(12,10,8,0.62);border-radius:5px;line-height:1.8;");c.innerHTML='<div style="opacity:0.75;margin-bottom:4px">Commandes</div>'+q1.map(([S,E])=>`<div><span style="color:#ffe6b0">${S}</span><span style="opacity:0.72"> — ${E}</span></div>`).join("");let l=!0;const u=Gn("digbar","left:50%;transform:translateX(-50%);bottom:18px;width:280px;text-align:center;"),h=document.createElement("div");h.style.cssText="font:12px/1.6 monospace;color:#e6d3ab;opacity:0.85;";const d=document.createElement("div");d.style.cssText="height:6px;background:rgba(0,0,0,0.5);border-radius:3px;overflow:hidden;";const p=document.createElement("div");p.style.cssText="height:100%;width:0%;background:#d8a24e;border-radius:3px;",d.appendChild(p),u.appendChild(h),u.appendChild(d),u.style.display="none";let g=null,x=null,m=null,f=null,T=null,y=null;const b=(S,E,v)=>E===v?v:(S.textContent=E||"",E);return{setSite(S,E,v){S!==g&&(r.textContent=S,r.style.color=v?"#e6d3ab":"#d98b6a",g=S),E!==x&&(s.textContent=E,x=E)},setPrompt(S){m=b(t,S,m)},setDig(S,E){const v=S!=null;if(v!==(u.style.display==="block")&&(u.style.display=v?"block":"none"),!v)return;p.style.width=`${Math.min(100,S*100)}%`;const A=Math.round(S*100);h.textContent=`Creusement de la première galerie — ${A} %`+(E==="digger"?"":"  (6 : pondre des creuseuses)")},setEventNow(S){y=b(n,S,null)},setObjective(S){f=b(e,S,f)},setStock(S){T=b(i,S,T)},setEvent(S){y=b(n,S,y)},setHold(S){const E=S!==null&&S>.001;E!==(o.style.display==="block")&&(o.style.display=E?"block":"none"),E&&(a.style.width=`${Math.min(100,S*100)}%`)},toggleControls(){l=!l,c.style.display=l?"block":"none"},closeControls(){l&&(l=!1,c.style.display="none")},dispose(){for(const S of[e,i,r,s,t,n,o,c,u])S.parentNode&&S.parentNode.removeChild(S)}}}const gd=new Z("#FFB03A").multiplyScalar(1.5),K1=new Z("#E8663A").multiplyScalar(1.4),_d=.72,j1=.2,Z1=`
uniform vec3 uColor;
uniform float uTime;
uniform float uOpacity;
varying vec2 vMarkerUv;

void main() {
  vec2 p = vMarkerUv * 2.0 - 1.0;
  float r = length(p);
  if (r > 1.0) discard;

  // the soft band: fades to nothing on both sides, so there is no edge
  float band = 1.0 - smoothstep(0.0, ${j1.toFixed(2)}, abs(r - ${_d.toFixed(2)}));
  band = pow(band, 1.6);

  // a bright arc sweeping around it, so the ring reads as alive without
  // changing size — three lobes, because one reads as a bug and many read
  // as a texture
  float a = atan(p.y, p.x);
  float sweep = 0.55 + 0.45 * sin(a * 3.0 - uTime * 1.9);

  // a faint wash inside the band, which is what stops the middle of a large
  // ring from looking empty on open ground
  float fill = (1.0 - smoothstep(0.0, ${_d.toFixed(2)}, r)) * 0.14;

  float alpha = (band * sweep + fill) * uOpacity;
  gl_FragColor = vec4(uColor * (0.75 + 0.55 * band), alpha);
}
`;function J1(n){const t={uColor:{value:gd.clone()},uTime:{value:0},uOpacity:{value:1}},e=new $n({uniforms:t,vertexShader:`
      varying vec2 vMarkerUv;
      void main() {
        vMarkerUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:Z1,transparent:!0,blending:mc,depthTest:!1,depthWrite:!1,side:he}),i=new Ot(new ms(2,2),e);return i.rotation.x=-Math.PI/2,i.name="target-marker",i.renderOrder=900,i.frustumCulled=!1,i.visible=!1,n.add(i),{show(r,s,o,a){if(!r){i.visible=!1;return}i.visible=!0,i.position.set(r.x,Ft(r.x,r.z)+.35,r.z),i.scale.setScalar(s),t.uTime.value=a,t.uColor.value.copy(o?K1:gd),t.uOpacity.value=o?.95:.8+.2*Math.sin(a*3.4)},dispose(){n.remove(i),i.geometry.dispose(),e.dispose()}}}const Q1=22,xd=1,vd=75,tE=10,eE=6,nE=.6,Md=11;let Sd=1;function iE(n,t){let e=null,i=1/0;for(let r=0;r<wn.length;r++){const s=wn[r];if(s.amount<=0)continue;const o=Math.hypot(s.x-n,s.z-t);o<i&&(i=o,e=s)}return e}function rE(){const n={eggs:[],workers:[],delivered:0,dig:0,digging:0,galleryOpen:!1};function t(l,u,h="worker"){const d=cy(h),p=Yf(l,0,u,d);return p.y=Ft(l,u),p.yaw=Math.random()*Math.PI*2,{id:Sd++,profileId:h,profile:d,ant:p,legState:qf(d),carrying:null,targetId:null,repath:0}}function e(l,u="worker"){for(let h=0;h<l;h++)n.eggs.push({id:Sd++,age:0,profileId:u})}function i(l,u){const h=l.ant,d=vr(),p=d.x-h.x,g=d.z-h.z;if(Math.hypot(p,g)<=tE)h.speed=0,h.yaw=as(h.yaw,Math.atan2(p,g),4,u),l.atFace=!0;else{l.atFace=!1,h.yaw=as(h.yaw,Math.atan2(p,g),6,u),h.speed=Md*.9;const m=h.speed*u;h.x+=Math.sin(h.yaw)*m,h.z+=Math.cos(h.yaw)*m,h.travel+=m}h.y=Ft(h.x,h.z),h.bob=Math.sin(h.travel*(Math.PI*2/Go(Vf))*2)*.13*Math.min(1,h.speed/8),wo(h,l.legState,u)}function r(l,u){const h=l.ant,d=vr();l.repath-=u;let p=null;if(l.carrying)p=d;else{if(l.repath<=0||l.targetId===null){const T=iE(h.x,h.z);l.targetId=T?T.id:null,l.repath=nE}const f=l.targetId!==null?wn.find(T=>T.id===l.targetId):null;p=f&&f.amount>0?f:null,p||(l.targetId=null)}if(!p){h.speed=0,wo(h,l.legState,u);return}const g=p.x-h.x,x=p.z-h.z;if(Math.hypot(g,x)<=eE)h.speed=0,l.carrying?(n.delivered+=xd,l.carrying=null):(Kl(l.targetId,xd)>0&&(l.carrying=p.kind),l.targetId=null);else{h.yaw=as(h.yaw,Math.atan2(g,x),6,u);const f=Math.cos(h.yaw-Math.atan2(g,x));h.speed=Md*Math.max(.25,f);const T=h.speed*u;h.x+=Math.sin(h.yaw)*T,h.z+=Math.cos(h.yaw)*T,h.travel+=T}h.y=Ft(h.x,h.z),h.bob=Math.sin(h.travel*(Math.PI*2/Go(Cr))*2)*.13*Math.min(1,h.speed/8),wo(h,l.legState,u)}function s(l){const u=vr();if(u){for(let h=n.eggs.length-1;h>=0;h--){const d=n.eggs[h];if(d.age+=l,d.age>=oc(Q1)){n.eggs.splice(h,1);const p=Math.random()*Math.PI*2;n.workers.push(t(u.x+Math.cos(p)*9,u.z+Math.sin(p)*9,d.profileId))}}n.digging=0;for(const h of n.workers)h.profileId==="digger"?(i(h,l),h.atFace&&n.digging++):r(h,l);if(!n.galleryOpen&&n.digging>0){const h=oc(vd);n.dig=Math.min(h,n.dig+n.digging*l),n.dig>=h&&Of().ok&&(n.galleryOpen=!0)}!n.galleryOpen&&Zl()&&(n.galleryOpen=!0)}}function o(){return n.galleryOpen||!n.dig&&!n.digging?null:n.dig/oc(vd)}function a(){if(!n.workers.length&&!n.eggs.length)return null;const l=[],u=n.workers.filter(d=>d.profileId!=="digger").length,h=n.workers.length-u;return u&&l.push(`${u} ouvrière${u>1?"s":""}`),h&&l.push(`${h} creuseuse${h>1?"s":""}`),n.eggs.length&&l.push(`${n.eggs.length} œuf${n.eggs.length>1?"s":""}`),n.delivered&&l.push(`${n.delivered} rapporté${n.delivered>1?"s":""}`),`Colonie : ${l.join(" · ")}`}function c(){return{delivered:n.delivered,eggs:n.eggs.map(l=>({id:l.id,age:l.age})),dig:n.dig,galleryOpen:n.galleryOpen,workers:n.workers.map(l=>({id:l.id,profileId:l.profileId,carrying:l.carrying,x:l.ant.x,z:l.ant.z,yaw:l.ant.yaw}))}}return{state:n,addEggs:e,update:s,statusText:a,digProgress:o,serialise:c,collideRadius:()=>pi(Cr)}}const hc=64,dc=new Z,cr=new Qt().makeScale(0,0,0);function sE(n,t){const e=Kf(),i=Nh(t),r=new Ke({color:16777215,roughness:.55,metalness:.05,vertexColors:!1});function s(l,u){const h=new Nl(l,r,u);return h.instanceMatrix.setUsage(dm),h.setColorAt(0,dc.set(16777215)),h.castShadow=!0,h.receiveShadow=!0,h.frustumCulled=!1,h.count=0,h}const o=s(e.sphere,hc*i.sphere),a=s(e.cyl,hc*i.cyl);o.name="crowd-spheres",a.name="crowd-cyls",n.add(o,a);for(let l=0;l<o.instanceMatrix.count;l++)o.setMatrixAt(l,cr);for(let l=0;l<a.instanceMatrix.count;l++)a.setMatrixAt(l,cr);let c=0;return{render(l,u){const h=Math.min(l.length,hc);for(let d=0;d<h;d++){const p=l[d];Nh(p.profile);let g=d*i.sphere,x=d*i.cyl;$f(p.profile,p.ant,p.legState,u,(m,f,T,y,b,S)=>{const E=jf(f,T,y,b);m===os?(o.setMatrixAt(g,E),o.setColorAt(g,dc.set(S)),g++):(a.setMatrixAt(x,E),a.setColorAt(x,dc.set(S)),x++)});for(let m=g;m<(d+1)*i.sphere;m++)o.setMatrixAt(m,cr);for(let m=x;m<(d+1)*i.cyl;m++)a.setMatrixAt(m,cr)}for(let d=h;d<c;d++){for(let p=d*i.sphere;p<(d+1)*i.sphere;p++)o.setMatrixAt(p,cr);for(let p=d*i.cyl;p<(d+1)*i.cyl;p++)a.setMatrixAt(p,cr)}c=h,o.count=Math.max(h,0)*i.sphere,a.count=Math.max(h,0)*i.cyl,o.instanceMatrix.needsUpdate=!0,a.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0),a.instanceColor&&(a.instanceColor.needsUpdate=!0)},dispose(){n.remove(o,a),o.dispose(),a.dispose(),r.dispose()}}}const yd=[140,170],Ed=-Math.PI/2,oE=.25,aE=3;function cE({scene:n,camera:t,domElement:e,profile:i=sn}){const r=Yf(yd[0],0,yd[1],i);r.yaw=Ed,r.y=Ft(r.x,r.z),fl(r,0),fl(r,0),r.y=Ft(r.x,r.z);const s=qf(i),{group:o,updatePose:a}=Ay(i);n.add(o),n.add(hy(o));const c=Ry(e,i);c.state.camYaw=Ed;const l=Gy(t),u=$1(),h=J1(n),d=rE();let p="worker";const g={worker:0,digger:1};let x=null,m=0;function f(P){return y.laying.brood()>=g[P]}const T=sE(n,Cr),y=k1({profile:i}),b=W1({scene:n,profile:i});l.update(r,c.state.camYaw,c.state.wantPitch,c.state.camDist,0);let S=0,E=null,v=null,A=null;function R(P){S-=P;const I=E?Math.hypot(r.x-E[0],r.z-E[1]):1/0;if((v||A)&&S>0&&I<aE)return;S=oE,E=[r.x,r.z];const U=Mr();if(U){A||(A=Ro(U.x,U.z)),u.setSite(`Nid fondé — site ${A.grade.label} (${A.score}/100)`,Jh(A),!0);return}v=Ro(r.x,r.z),u.setSite(M1(v),Jh(v),v.diggable)}function _(P,I){const U=c.readMoveIntent();c.consumeHelp()&&u.toggleControls();const V=c.consumeCaste();V&&(f(V)?(p=V,x=`Prochaine ponte : ${V==="digger"?"creuseuses":"ouvrières"}`):x="Creuseuses : à débloquer à la deuxième ponte",m=3.5),f(p)||(p="worker");const B=y.update(r,c.consumeInteract(),c.isInteractHeld(),P);if(!y.busy())if(r.climb)yy(r,Q(U.iy,-1,1),P);else{const q=r1(U,l.eye,l.aim);s1(r,q,U,P)}wo(r,s,P),a(r,s,I),o.position.set(0,0,0),Qr.position.set(r.x,r.y,r.z),Qr.radius=pi(i),b.update(r,y.harvest.state),y.laying.state.justLaid&&d.addEggs(3,p),d.update(P),T.render(d.state.workers,I),R(P),u.setPrompt(y.promptText(r,B)),u.setObjective(y.objectiveText(r));const Y=d.statusText();u.setStock(Y?`${y.inventoryText()}  |  ${Y}`:y.inventoryText()),m>0&&(m-=P,m<=0&&(x=null)),u.setEvent(x||y.message()),u.setHold(y.holdProgress(B)),u.setDig(d.digProgress(),p);const N=y.targetMark(r,B);h.show(N,N?N.radius:0,N?N.blocked:!1,I),y.harvest.state.carrying&&u.closeControls(),y.endFrame(),!c.state.dragging&&!r.climb&&!y.busy()&&U.mag>.02&&(c.state.camYaw=as(c.state.camYaw,r.yaw,2.2,P)),y.laying.state.justEnded&&(c.state.camYaw=r.yaw),l.update(r,c.state.camYaw,c.state.wantPitch,c.state.camDist,P,y.shot(r))}typeof window<"u"&&(window.__decorPenetration=n1,window.__antRadius=pi(i),window.__site=(P,I)=>Ro(P,I),window.__avatar=i,window.__mushroomRadii=up,window.__grass=Ne,window.__nodes=ys,window.__harvest=()=>y.harvest.state,window.__nestOrigin=Mr,window.__colony=()=>d,window.__foundNest=(P,I)=>xp(P,I),window.__gallery=()=>Zl(),window.__caste=()=>({caste:p,msg:x,unlocked:f("digger")}),window.__canFound=(P,I)=>{const U=tu(P,I);return{...U,text:_l(U.reason)}},window.__toWater=Zn,window.__laying=()=>{const P=y.laying.state;return{phase:P.phase,t:+P.t.toFixed(3),brood:P.brood,mix:Ss()}});function M(){c.dispose(),u.dispose(),h.dispose(),T.dispose(),b.dispose()}return{ant:r,group:o,update:_,dispose:M}}const Bi={resolution:[{label:"50 %",value:.5},{label:"75 %",value:.75},{label:"100 %",value:1},{label:"150 % (net)",value:1.5}],shadows:[{label:"aucune",value:0},{label:"basses (1024)",value:1024},{label:"normales (2048)",value:2048}],grass:[{label:"clairsemée",value:.35},{label:"moyenne",value:.65},{label:"dense",value:1}]},Sp="myrmidia.quality";function lE(){const n={resolution:2,shadows:2,grass:2,textures:!0};try{const t=localStorage.getItem(Sp);return t?{...n,...JSON.parse(t)}:n}catch{return n}}function uE(){try{localStorage.setItem(Sp,JSON.stringify(We))}catch{}}const We=lE(),hE=[];function dE(){for(const n of hE)n(Po())}function Po(){return{resolution:Bi.resolution[We.resolution].value,shadowMap:Bi.shadows[We.shadows].value,grassFraction:Bi.grass[We.grass].value,textures:We.textures}}function fc(n){We[n]=(We[n]+1)%Bi[n].length}function fE({renderer:n,sun:t,scene:e}){const i=Math.min(window.devicePixelRatio||1,2);function r(){n.setPixelRatio(i*Po().resolution),n.setSize(window.innerWidth,window.innerHeight)}function s(){const y=Po().shadowMap;n.shadowMap.enabled=y>0,y>0&&(t.shadow.mapSize.set(y,y),t.shadow.map?.dispose(),t.shadow.map=null),n.shadowMap.needsUpdate=!0}function o(){const y=We.textures;e.traverse(b=>{const S=Array.isArray(b.material)?b.material:b.material?[b.material]:[];for(const E of S){if(y)E.userData.savedMap!==void 0&&(E.map=E.userData.savedMap,E.userData.savedMap=void 0);else if(E.map)E.userData.savedMap=E.map,E.map=null;else continue;E.needsUpdate=!0}})}let a=null,c=0;function l(){if(!a){if(e.traverse(y=>{y.name==="grass"&&(a=y)}),!a)return;c=a.count}a.count=Math.max(1,Math.round(c*Po().grassFraction))}if(r(),s(),typeof document>"u")return{update(){},toggle(){},dispose(){}};const u=document.createElement("div");u.id="quality",u.style.cssText="position:fixed;right:12px;bottom:12px;padding:9px 12px;background:rgba(12,10,8,0.68);border-radius:5px;color:#e6d3ab;font:12px/1.7 monospace;pointer-events:none;z-index:6;text-shadow:0 1px 3px rgba(0,0,0,0.9);display:none;",document.body.appendChild(u);const h=document.createElement("div");h.id="fps",h.style.cssText="position:fixed;right:12px;bottom:12px;padding:4px 8px;background:rgba(12,10,8,0.55);border-radius:4px;color:#cfe0a8;font:12px/1.4 monospace;pointer-events:none;z-index:6;text-shadow:0 1px 3px rgba(0,0,0,0.9);",document.body.appendChild(h);let d=!1;function p(){const y=[["1","Résolution",Bi.resolution[We.resolution].label],["2","Ombres",Bi.shadows[We.shadows].label],["3","Herbe",Bi.grass[We.grass].label+" (au prochain chargement)"],["4","Textures",We.textures?"oui":"non"],["5","Cadence de test",Qh()?"ON — attentes /8, coûts /5":"off (cadence réelle)"]];u.innerHTML='<div style="opacity:0.75;margin-bottom:3px">Graphismes — P pour fermer</div>'+y.map(([b,S,E])=>`<div><span style="color:#ffe6b0">${b}</span><span style="opacity:0.7"> ${S} : </span><span style="color:#cfe0a8">${E}</span></div>`).join("")}p();let g=0,x=0,m=0;function f(y){T.key(y.code)&&y.preventDefault()}window.addEventListener("keydown",f),l(),o();const T={update(y){if(g++,x+=y,x>=.5){m=Math.round(g/x),g=0,x=0;const b=n.getContext();h.textContent=d?`${m} i/s · ${b.drawingBufferWidth}x${b.drawingBufferHeight} · ${n.info.render.calls} appels`:`${m} i/s · P : graphismes`}},key(y){if(y==="KeyP")return d=!d,u.style.display=d?"block":"none",h.style.bottom=d?"104px":"12px",!0;if(!d)return!1;if(y==="Digit1")fc("resolution"),r();else if(y==="Digit2")fc("shadows"),s();else if(y==="Digit3")fc("grass"),l();else if(y==="Digit4")We.textures=!We.textures,o();else if(y==="Digit5")E1(!Qh());else return!1;return p(),uE(),dE(),!0},dispose(){window.removeEventListener("keydown",f),u.remove(),h.remove()}};return T}const pE=16,mE={x0:-400,x1:600,z0:-300,z1:700};let vl=null,Ml=0,Sl=0;function gE(n,t){t<Ml&&(Ml=t,vl=n)}function _E(){Sl++}class xE{constructor(t={}){this.reset(t)}reset({x0:t,x1:e,z0:i,z1:r,cell:s=pE,pad:o=64}={}){const a=t===void 0?mE:{x0:t,x1:e,z0:i,z1:r};this.cell=s,this.inv=1/s,this.x0=a.x0-o,this.z0=a.z0-o,this.cols=Math.max(1,Math.ceil((a.x1+o-this.x0)*this.inv)),this.rows=Math.max(1,Math.ceil((a.z1+o-this.z0)*this.inv)),this.cells=new Array(this.cols*this.rows).fill(null),this.cellR=new Float32Array(this.cols*this.rows),this.maxR=0,this.n=0}_cellOf(t,e){let i=Math.floor((t-this.x0)*this.inv),r=Math.floor((e-this.z0)*this.inv);return i<0?i=0:i>=this.cols&&(i=this.cols-1),r<0?r=0:r>=this.rows&&(r=this.rows-1),r*this.cols+i}_place(t){const e=this._cellOf(t.x,t.z);let i=this.cells[e];i||(i=[],this.cells[e]=i),t._c=e,t._i=i.length,i.push(t),t.r>this.cellR[e]&&(this.cellR[e]=t.r),t.r>this.maxR&&(this.maxR=t.r)}_unplace(t){const e=this.cells[t._c],i=e.pop();i!==t&&(e[t._i]=i,i._i=t._i),t._c=-1}add(t,e,i,r=0,s=null){const o={type:t,x:e,z:i,r,data:s,_c:-1,_i:-1};return this._place(o),this.n++,o}move(t,e,i){const r=this._cellOf(e,i);return t.x=e,t.z=i,r===t._c||(this._unplace(t),this._place(t)),t}setRadius(t,e){return t.r=e,e>this.cellR[t._c]&&(this.cellR[t._c]=e),e>this.maxR&&(this.maxR=e),t}remove(t){t._c<0||(this._unplace(t),this.n--)}get size(){return this.n}stats(){let t=0,e=0;for(const i of this.cells)i&&i.length&&(t++,i.length>e&&(e=i.length));return{cell:this.cell,cells:this.cells.length,entries:this.n,occupied:t,fill:t?this.n/t:0,most:e,maxR:this.maxR}}_scan(t,e,i,r,s){const o=r&&r.type,a=r&&r.where,c=!!(r&&r.reach),l=i+(c?this.maxR:0),u=this.cell;let h=Math.floor((t-l-this.x0)*this.inv),d=Math.floor((t+l-this.x0)*this.inv),p=Math.floor((e-l-this.z0)*this.inv),g=Math.floor((e+l-this.z0)*this.inv);h<0&&(h=0),d>=this.cols&&(d=this.cols-1),p<0&&(p=0),g>=this.rows&&(g=this.rows-1);for(let x=p;x<=g;x++){const m=this.z0+x*u,f=e<m?m-e:e>m+u?e-m-u:0,T=x*this.cols;for(let y=h;y<=d;y++){const b=T+y,S=this.cells[b];if(!(S===null||S.length===0)){if(c){const E=this.x0+y*u,v=t<E?E-t:t>E+u?t-E-u:0,A=i+this.cellR[b];if(v*v+f*f>A*A)continue}for(let E=0;E<S.length;E++){const v=S[E];if(o!==void 0&&v.type!==o)continue;const A=v.x-t,R=v.z-e,_=A*A+R*R,M=c?i+v.r:i;_>M*M||a!==void 0&&!a(v)||s(v,_)}}}}}forEachNear(t,e,i,r,s){this._scan(t,e,i,s,r)}nearest(t,e,i,r){return vl=null,Ml=1/0,this._scan(t,e,i,r,gE),vl}countNear(t,e,i,r){return Sl=0,this._scan(t,e,i,r,_E),Sl}}const ur=new xE,vE={queryDisc(n,t,e,i,r){ur.forEachNear(t,e,i,r,{type:n,reach:!0})}};function ME({grassFootprints:n,mushrooms:t,rocks:e,bounds:i}){if(ur.reset(i),n)for(let r=0;r<n.length;r++){const s=n[r];ur.add("grass",s.x,s.z,s.w,s)}if(t)for(const r of t)ur.add("mushrooms",r.x,r.z,r.r||0,r);if(e)for(const r of e)ur.add("rocks",r.x,r.z,r.r||0,r);return ur.stats()}const SE=document.getElementById("app"),_i=Gv(SE),rn=Hv(),Pe=new Rv;Pe.background=new Z(1709584);Pe.fog=new Ul(1709584,40,220);const Lo=new Nv(12572917,7236152,.85);Pe.add(Lo);const pc={sky:new Z(4873350),ground:new Z(2367283),intensity:.55},fn=Yl,Dn=ql,bd=new Z,Td=new Z,wd=new Z,Ad=new Z,Kr={sky:new Z(fn.hemiSky),ground:new Z(fn.hemiGround),fog:new Z(fn.fog),bg:new Z(fn.sky),sun:new Z(fn.sunColor)},jr={sky:new Z(Dn.hemiSky),ground:new Z(Dn.hemiGround),fog:new Z(Dn.fog),bg:new Z(Dn.sky),sun:new Z(Dn.sunColor)},Ie=new Bv(fn.sunColor,fn.sunIntensity);Ie.castShadow=!0;const Es=110,yl=2048,Io=220,co=2*Es/yl;Ie.shadow.mapSize.set(yl,yl);Ie.shadow.camera.left=-Es;Ie.shadow.camera.right=Es;Ie.shadow.camera.top=Es;Ie.shadow.camera.bottom=-Es;Ie.shadow.camera.near=1;Ie.shadow.camera.far=Io*2.4;Ie.shadow.bias=-.0015;Pe.add(Ie);Pe.add(Ie.target);function yE(n){const t=Math.round(n.position.x/co)*co,e=Math.round(n.position.z/co)*co,i=Qo();Ie.target.position.set(t,0,e),Ie.position.set(t+i[0]*Io,i[1]*Io,e+i[2]*Io)}const EE=new Z(1645102),bE=new Z(789270),Br=kf();Pe.add(Br.group);const eu=cE({scene:Pe,camera:rn,domElement:_i.domElement});Pe.traverse(n=>{const t=Array.isArray(n.material)?n.material:n.material?[n.material]:[];for(const e of t)e.isMeshStandardMaterial&&Ms(e)});window.__renderer=_i;window.__ant=eu.ant;window.__rooms=Br.rooms;window.__camera=rn;window.__scene=Pe;window.__nodes=wn;window.__world=Br;window.__contain=Zo;window.__profileR=Oe;window.__groundY=Ft;window.__tree=Ht;window.__world6={shadeAt:Cf,canFoundAt:jl,foundNest:Ff,nestOrigin:vr,getFoundedNest:Nf,populateNest:Bf,sealNest:zf,harvestNode:Kl,get nodes(){return wn},foundedMix:Ss,sunDir:Qo,waterDepthAt:gi,distanceToWater:Zn};_i.setResizeCallback(n=>{rn.aspect=n,rn.updateProjectionMatrix()});const Rd=new zv;function yp(){const n=Math.min(Rd.getDelta(),.05),t=Rd.elapsedTime;Br.update(n,t,rn),eu.update(n,t),Ep(),_i.render(Pe,rn),IE.update(n)}const TE=52,wE=26;function Cd(n,t,e){const i=1-Q((e+24)/40,0,1),r=Q(1-(Math.abs(n)-TE)/30,0,1),s=Q(1-(t-wE)/30,0,1);return i*r*s}function AE(n,t){const e=Math.min(Cd(n.x,n.y,n.z),Cd(t.x,t.y,t.z)),i=Math.min(cl(n.x,n.y,n.z),cl(t.x,t.y,t.z));return Math.max(e,i)}const RE=6;let lo=null;function CE(){const n=performance.now()/1e3;lo===null&&vr()&&(lo=n),lo!==null&&Rf(Q((n-lo)/RE,0,1))}function Ep(){CE();const n=Ss();bd.copy(Kr.sky).lerp(jr.sky,n),Td.copy(Kr.ground).lerp(jr.ground,n),wd.copy(Kr.fog).lerp(jr.fog,n),Ad.copy(Kr.bg).lerp(jr.bg,n),Ie.color.copy(Kr.sun).lerp(jr.sun,n),Ie.intensity=bt(fn.sunIntensity,Dn.sunIntensity,n);const t=1-AE(rn.position,eu.ant);Pe.fog.color.copy(EE).lerp(wd,t),Pe.fog.near=bt(6,bt(fn.fogNear,Dn.fogNear,n),t),Pe.fog.far=bt(135,bt(fn.fogFar,Dn.fogFar,n),t),Pe.background.copy(bE).lerp(Ad,t),_i.toneMappingExposure=bt(1.28,bt(fn.exposure,Dn.exposure,n),t),Lo.color.copy(pc.sky).lerp(bd,t),Lo.groundColor.copy(pc.ground).lerp(Td,t),Lo.intensity=bt(pc.intensity,bt(fn.hemiIntensity,Dn.hemiIntensity,n),t),uy(t),yE(rn)}const PE=ME({grassFootprints:Br.grassFootprints,mushrooms:En,rocks:Yn,bounds:{x0:Xn.x0,x1:Xn.x1,z0:Xn.z0,z1:Xn.z1}}),LE=typeof location<"u"&&/[?&]nospatial=1/.test(location.search);LE||sp(vE,"world");window.__spatial=()=>({...Hy(),...PE});const IE=fE({renderer:_i,sun:Ie,scene:Pe});_i.setAnimationLoop(yp);window.__frame=yp;window.__renderView=(n,t,e=0)=>{rn.position.set(n[0],n[1],n[2]),rn.lookAt(t[0],t[1],t[2]),rn.updateMatrixWorld(),Br.update(1/60,e,rn),Ep(),_i.render(Pe,rn)};
