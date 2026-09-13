(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ll="169",xp=0,Ql=1,vp=2,md=1,gd=2,Xn=3,mi=0,Fe=1,he=2,hi=0,Sr=1,tu=2,eu=3,nu=4,Mp=5,Di=100,Sp=101,yp=102,Ep=103,bp=104,Tp=200,wp=201,Ap=202,Rp=203,oc=204,ac=205,Cp=206,Pp=207,Lp=208,Ip=209,Dp=210,Up=211,Np=212,Fp=213,Op=214,cc=0,lc=1,uc=2,Ar=3,hc=4,dc=5,fc=6,pc=7,_d=0,Bp=1,zp=2,di=0,kp=1,Gp=2,Hp=3,xd=4,Vp=5,Wp=6,Xp=7,vd=300,Rr=301,Cr=302,mc=303,gc=304,Yo=306,Fo=1e3,Oi=1001,_c=1002,qe=1003,qp=1004,Ns=1005,En=1006,ca=1007,Bi=1008,jn=1009,Md=1010,Sd=1011,ds=1012,ul=1013,Vi=1014,On=1015,vs=1016,hl=1017,dl=1018,Pr=1020,yd=35902,Ed=1021,bd=1022,Tn=1023,Td=1024,wd=1025,yr=1026,Lr=1027,fl=1028,pl=1029,Ad=1030,ml=1031,gl=1033,mo=33776,go=33777,_o=33778,xo=33779,xc=35840,vc=35841,Mc=35842,Sc=35843,yc=36196,Ec=37492,bc=37496,Tc=37808,wc=37809,Ac=37810,Rc=37811,Cc=37812,Pc=37813,Lc=37814,Ic=37815,Dc=37816,Uc=37817,Nc=37818,Fc=37819,Oc=37820,Bc=37821,vo=36492,zc=36494,kc=36495,Rd=36283,Gc=36284,Hc=36285,Vc=36286,Yp=3200,Cd=3201,Pd=0,$p=1,li="",cn="srgb",vi="srgb-linear",_l="display-p3",$o="display-p3-linear",Oo="linear",ue="srgb",Bo="rec709",zo="p3",Qi=7680,iu=519,Kp=512,jp=513,Zp=514,Ld=515,Jp=516,Qp=517,tm=518,em=519,ru=35044,nm=35048,su="300 es",Yn=2e3,ko=2001;class Nr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],la=Math.PI/180,Wc=180/Math.PI;function Ms(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]).toLowerCase()}function We(n,t,e){return Math.max(t,Math.min(e,n))}function im(n,t){return(n%t+t)%t}function ua(n,t,e){return(1-e)*n+e*t}function Vr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ve(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Kt{constructor(t=0,e=0){Kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(We(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,i,r,s,o,a,c,l){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l)}set(t,e,i,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],x=r[0],d=r[3],m=r[6],b=r[1],S=r[4],y=r[7],E=r[2],w=r[5],M=r[8];return s[0]=o*x+a*b+c*E,s[3]=o*d+a*S+c*w,s[6]=o*m+a*y+c*M,s[1]=l*x+u*b+h*E,s[4]=l*d+u*S+h*w,s[7]=l*m+u*y+h*M,s[2]=f*x+p*b+g*E,s[5]=f*d+p*S+g*w,s[8]=f*m+p*y+g*M,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*s,p=l*s-o*c,g=e*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=h*x,t[1]=(r*l-u*i)*x,t[2]=(a*i-r*o)*x,t[3]=f*x,t[4]=(u*e-r*c)*x,t[5]=(r*s-a*e)*x,t[6]=p*x,t[7]=(i*c-l*e)*x,t[8]=(o*e-i*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ha.makeScale(t,e)),this}rotate(t){return this.premultiply(ha.makeRotation(-t)),this}translate(t,e){return this.premultiply(ha.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ha=new zt;function Id(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function fs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function rm(){const n=fs("canvas");return n.style.display="block",n}const ou={};function Mo(n){n in ou||(ou[n]=!0,console.warn(n))}function sm(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function om(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function am(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const au=new zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),cu=new zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wr={[vi]:{transfer:Oo,primaries:Bo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[cn]:{transfer:ue,primaries:Bo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[$o]:{transfer:Oo,primaries:zo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(cu),fromReference:n=>n.applyMatrix3(au)},[_l]:{transfer:ue,primaries:zo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(cu),fromReference:n=>n.applyMatrix3(au).convertLinearToSRGB()}},cm=new Set([vi,$o]),Jt={enabled:!0,_workingColorSpace:vi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!cm.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Wr[t].toReference,r=Wr[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Wr[n].primaries},getTransfer:function(n){return n===li?Oo:Wr[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Wr[t].luminanceCoefficients)}};function Er(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function da(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let tr;class lm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{tr===void 0&&(tr=fs("canvas")),tr.width=t.width,tr.height=t.height;const i=tr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=tr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=fs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Er(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Er(e[i]/255)*255):e[i]=Er(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let um=0;class Dd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=Ms(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(fa(r[o].image)):s.push(fa(r[o]))}else s=fa(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function fa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?lm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hm=0;class Ie extends Nr{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,i=Oi,r=Oi,s=En,o=Bi,a=Tn,c=jn,l=Ie.DEFAULT_ANISOTROPY,u=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=Ms(),this.name="",this.source=new Dd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fo:t.x=t.x-Math.floor(t.x);break;case Oi:t.x=t.x<0?0:1;break;case _c:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fo:t.y=t.y-Math.floor(t.y);break;case Oi:t.y=t.y<0?0:1;break;case _c:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=vd;Ie.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,i=0,r=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],g=c[9],x=c[2],d=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+d)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,y=(p+1)/2,E=(m+1)/2,w=(u+f)/4,M=(h+x)/4,A=(g+d)/4;return S>y&&S>E?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=w/i,s=M/i):y>E?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=A/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=M/s,r=A/s),this.set(i,r,s,e),this}let b=Math.sqrt((d-g)*(d-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(d-g)/b,this.y=(h-x)/b,this.z=(f-u)/b,this.w=Math.acos((l+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dm extends Nr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ie(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Dd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends dm{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ud extends Ie{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=qe,this.minFilter=qe,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class fm extends Ie{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=qe,this.minFilter=qe,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fr{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(h!==x||c!==f||l!==p||u!==g){let d=1-a;const m=c*f+l*p+u*g+h*x,b=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const E=Math.sqrt(S),w=Math.atan2(E,m*b);d=Math.sin(d*w)/E,a=Math.sin(a*w)/E}const y=a*b;if(c=c*d+f*y,l=l*d+p*y,u=u*d+g*y,h=h*d+x*y,d===1-a){const E=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=E,l*=E,u*=E,h*=E}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+u*h+c*p-l*f,t[e+1]=c*g+u*f+l*h-a*p,t[e+2]=l*g+u*p+a*f-c*h,t[e+3]=u*g-a*h-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),f=c(i/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"YZX":this._x=f*u*h+l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h-f*p*g;break;case"XZY":this._x=f*u*h-l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,e=0,i=0){V.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*i),u=2*(a*e-s*r),h=2*(s*i-o*e);return this.x=e+c*l+o*h-a*u,this.y=i+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return pa.copy(this).projectOnVector(t),this.sub(pa)}reflect(t){return this.sub(pa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(We(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pa=new V,lu=new Fr;class ji{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,pn):pn.fromBufferAttribute(s,o),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fs.copy(i.boundingBox)),Fs.applyMatrix4(t.matrixWorld),this.union(Fs)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xr),Os.subVectors(this.max,Xr),er.subVectors(t.a,Xr),nr.subVectors(t.b,Xr),ir.subVectors(t.c,Xr),ei.subVectors(nr,er),ni.subVectors(ir,nr),Ei.subVectors(er,ir);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-Ei.z,Ei.y,ei.z,0,-ei.x,ni.z,0,-ni.x,Ei.z,0,-Ei.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-Ei.y,Ei.x,0];return!ma(e,er,nr,ir,Os)||(e=[1,0,0,0,1,0,0,0,1],!ma(e,er,nr,ir,Os))?!1:(Bs.crossVectors(ei,ni),e=[Bs.x,Bs.y,Bs.z],ma(e,er,nr,ir,Os))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const kn=[new V,new V,new V,new V,new V,new V,new V,new V],pn=new V,Fs=new ji,er=new V,nr=new V,ir=new V,ei=new V,ni=new V,Ei=new V,Xr=new V,Os=new V,Bs=new V,bi=new V;function ma(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){bi.fromArray(n,s);const a=r.x*Math.abs(bi.x)+r.y*Math.abs(bi.y)+r.z*Math.abs(bi.z),c=t.dot(bi),l=e.dot(bi),u=i.dot(bi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const pm=new ji,qr=new V,ga=new V;class Or{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):pm.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qr.subVectors(t,this.center);const e=qr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(qr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ga.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qr.copy(t.center).add(ga)),this.expandByPoint(qr.copy(t.center).sub(ga))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new V,_a=new V,zs=new V,ii=new V,xa=new V,ks=new V,va=new V;class mm{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){_a.copy(t).add(e).multiplyScalar(.5),zs.copy(e).sub(t).normalize(),ii.copy(this.origin).sub(_a);const s=t.distanceTo(e)*.5,o=-this.direction.dot(zs),a=ii.dot(this.direction),c=-ii.dot(zs),l=ii.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*c-a,f=o*a-c,g=s*u,h>=0)if(f>=-g)if(f<=g){const x=1/u;h*=x,f*=x,p=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(_a).addScaledVector(zs,f),p}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);const i=Gn.dot(this.direction),r=Gn.dot(Gn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,r=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,r=(t.min.x-f.x)*l),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,i,r,s){xa.subVectors(e,t),ks.subVectors(i,t),va.crossVectors(xa,ks);let o=this.direction.dot(va),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,t);const c=a*this.direction.dot(ks.crossVectors(ii,ks));if(c<0)return null;const l=a*this.direction.dot(xa.cross(ii));if(l<0||c+l>o)return null;const u=-a*ii.dot(va);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,i,r,s,o,a,c,l,u,h,f,p,g,x,d){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l,u,h,f,p,g,x,d)}set(t,e,i,r,s,o,a,c,l,u,h,f,p,g,x,d){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=f,m[3]=p,m[7]=g,m[11]=x,m[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/rr.setFromMatrixColumn(t,0).length(),s=1/rr.setFromMatrixColumn(t,1).length(),o=1/rr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,p=o*h,g=a*u,x=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+g*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,p=c*h,g=l*u,x=l*h;e[0]=f+x*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=x+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,p=c*h,g=l*u,x=l*h;e[0]=f-x*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=x-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,p=o*h,g=a*u,x=a*h;e[0]=c*u,e[4]=g*l-p,e[8]=f*l+x,e[1]=c*h,e[5]=x*l+f,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-f*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*h+g,e[10]=f-x*h}else if(t.order==="XZY"){const f=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+x,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gm,t,_m)}lookAt(t,e,i){const r=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),ri.crossVectors(i,je),ri.lengthSq()===0&&(Math.abs(i.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),ri.crossVectors(i,je)),ri.normalize(),Gs.crossVectors(je,ri),r[0]=ri.x,r[4]=Gs.x,r[8]=je.x,r[1]=ri.y,r[5]=Gs.y,r[9]=je.y,r[2]=ri.z,r[6]=Gs.z,r[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],x=i[6],d=i[10],m=i[14],b=i[3],S=i[7],y=i[11],E=i[15],w=r[0],M=r[4],A=r[8],L=r[12],_=r[1],v=r[5],I=r[9],U=r[13],N=r[2],W=r[6],F=r[10],B=r[14],P=r[3],z=r[7],H=r[11],j=r[15];return s[0]=o*w+a*_+c*N+l*P,s[4]=o*M+a*v+c*W+l*z,s[8]=o*A+a*I+c*F+l*H,s[12]=o*L+a*U+c*B+l*j,s[1]=u*w+h*_+f*N+p*P,s[5]=u*M+h*v+f*W+p*z,s[9]=u*A+h*I+f*F+p*H,s[13]=u*L+h*U+f*B+p*j,s[2]=g*w+x*_+d*N+m*P,s[6]=g*M+x*v+d*W+m*z,s[10]=g*A+x*I+d*F+m*H,s[14]=g*L+x*U+d*B+m*j,s[3]=b*w+S*_+y*N+E*P,s[7]=b*M+S*v+y*W+E*z,s[11]=b*A+S*I+y*F+E*H,s[15]=b*L+S*U+y*B+E*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],x=t[7],d=t[11],m=t[15];return g*(+s*c*h-r*l*h-s*a*f+i*l*f+r*a*p-i*c*p)+x*(+e*c*p-e*l*f+s*o*f-r*o*p+r*l*u-s*c*u)+d*(+e*l*h-e*a*p-s*o*h+i*o*p+s*a*u-i*l*u)+m*(-r*a*u-e*c*h+e*a*f+r*o*h-i*o*f+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],x=t[13],d=t[14],m=t[15],b=h*d*l-x*f*l+x*c*p-a*d*p-h*c*m+a*f*m,S=g*f*l-u*d*l-g*c*p+o*d*p+u*c*m-o*f*m,y=u*x*l-g*h*l+g*a*p-o*x*p-u*a*m+o*h*m,E=g*h*c-u*x*c-g*a*f+o*x*f+u*a*d-o*h*d,w=e*b+i*S+r*y+s*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/w;return t[0]=b*M,t[1]=(x*f*s-h*d*s-x*r*p+i*d*p+h*r*m-i*f*m)*M,t[2]=(a*d*s-x*c*s+x*r*l-i*d*l-a*r*m+i*c*m)*M,t[3]=(h*c*s-a*f*s-h*r*l+i*f*l+a*r*p-i*c*p)*M,t[4]=S*M,t[5]=(u*d*s-g*f*s+g*r*p-e*d*p-u*r*m+e*f*m)*M,t[6]=(g*c*s-o*d*s-g*r*l+e*d*l+o*r*m-e*c*m)*M,t[7]=(o*f*s-u*c*s+u*r*l-e*f*l-o*r*p+e*c*p)*M,t[8]=y*M,t[9]=(g*h*s-u*x*s-g*i*p+e*x*p+u*i*m-e*h*m)*M,t[10]=(o*x*s-g*a*s+g*i*l-e*x*l-o*i*m+e*a*m)*M,t[11]=(u*a*s-o*h*s-u*i*l+e*h*l+o*i*p-e*a*p)*M,t[12]=E*M,t[13]=(u*x*r-g*h*r+g*i*f-e*x*f-u*i*d+e*h*d)*M,t[14]=(g*a*r-o*x*r-g*i*c+e*x*c+o*i*d-e*a*d)*M,t[15]=(o*h*r-u*a*r+u*i*c-e*h*c-o*i*f+e*a*f)*M,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,h=a+a,f=s*l,p=s*u,g=s*h,x=o*u,d=o*h,m=a*h,b=c*l,S=c*u,y=c*h,E=i.x,w=i.y,M=i.z;return r[0]=(1-(x+m))*E,r[1]=(p+y)*E,r[2]=(g-S)*E,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(f+m))*w,r[6]=(d+b)*w,r[7]=0,r[8]=(g+S)*M,r[9]=(d-b)*M,r[10]=(1-(f+x))*M,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=rr.set(r[0],r[1],r[2]).length();const o=rr.set(r[4],r[5],r[6]).length(),a=rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],mn.copy(this);const l=1/s,u=1/o,h=1/a;return mn.elements[0]*=l,mn.elements[1]*=l,mn.elements[2]*=l,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=h,mn.elements[9]*=h,mn.elements[10]*=h,e.setFromRotationMatrix(mn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=Yn){const c=this.elements,l=2*s/(e-t),u=2*s/(i-r),h=(e+t)/(e-t),f=(i+r)/(i-r);let p,g;if(a===Yn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ko)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Yn){const c=this.elements,l=1/(e-t),u=1/(i-r),h=1/(o-s),f=(e+t)*l,p=(i+r)*u;let g,x;if(a===Yn)g=(o+s)*h,x=-2*h;else if(a===ko)g=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const rr=new V,mn=new ee,gm=new V(0,0,0),_m=new V(1,1,1),ri=new V,Gs=new V,je=new V,uu=new ee,hu=new Fr;class An{constructor(t=0,e=0,i=0,r=An.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return uu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hu.setFromEuler(this),this.setFromQuaternion(hu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class Nd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xm=0;const du=new V,sr=new Fr,Hn=new ee,Hs=new V,Yr=new V,vm=new V,Mm=new Fr,fu=new V(1,0,0),pu=new V(0,1,0),mu=new V(0,0,1),gu={type:"added"},Sm={type:"removed"},or={type:"childadded",child:null},Ma={type:"childremoved",child:null};class Ae extends Nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=Ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new V,e=new An,i=new Fr,r=new V(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ee},normalMatrix:{value:new zt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return sr.setFromAxisAngle(t,e),this.quaternion.multiply(sr),this}rotateOnWorldAxis(t,e){return sr.setFromAxisAngle(t,e),this.quaternion.premultiply(sr),this}rotateX(t){return this.rotateOnAxis(fu,t)}rotateY(t){return this.rotateOnAxis(pu,t)}rotateZ(t){return this.rotateOnAxis(mu,t)}translateOnAxis(t,e){return du.copy(t).applyQuaternion(this.quaternion),this.position.add(du.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fu,t)}translateY(t){return this.translateOnAxis(pu,t)}translateZ(t){return this.translateOnAxis(mu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Hs.copy(t):Hs.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Yr,Hs,this.up):Hn.lookAt(Hs,Yr,this.up),this.quaternion.setFromRotationMatrix(Hn),r&&(Hn.extractRotation(r.matrixWorld),sr.setFromRotationMatrix(Hn),this.quaternion.premultiply(sr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gu),or.child=t,this.dispatchEvent(or),or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sm),Ma.child=t,this.dispatchEvent(Ma),Ma.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gu),or.child=t,this.dispatchEvent(or),or.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,t,vm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,Mm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(t.shapes,h)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Ae.DEFAULT_UP=new V(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new V,Vn=new V,Sa=new V,Wn=new V,ar=new V,cr=new V,_u=new V,ya=new V,Ea=new V,ba=new V,Ta=new de,wa=new de,Aa=new de;class bn{constructor(t=new V,e=new V,i=new V){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),gn.subVectors(t,e),r.cross(gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){gn.subVectors(r,e),Vn.subVectors(i,e),Sa.subVectors(t,e);const o=gn.dot(gn),a=gn.dot(Vn),c=gn.dot(Sa),l=Vn.dot(Vn),u=Vn.dot(Sa),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-p-g,g,p)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(t,e,i,r,s,o,a,c){return this.getBarycoord(t,e,i,r,Wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Wn.x),c.addScaledVector(o,Wn.y),c.addScaledVector(a,Wn.z),c)}static getInterpolatedAttribute(t,e,i,r,s,o){return Ta.setScalar(0),wa.setScalar(0),Aa.setScalar(0),Ta.fromBufferAttribute(t,e),wa.fromBufferAttribute(t,i),Aa.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Ta,s.x),o.addScaledVector(wa,s.y),o.addScaledVector(Aa,s.z),o}static isFrontFacing(t,e,i,r){return gn.subVectors(i,e),Vn.subVectors(t,e),gn.cross(Vn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),gn.cross(Vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return bn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return bn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;ar.subVectors(r,i),cr.subVectors(s,i),ya.subVectors(t,i);const c=ar.dot(ya),l=cr.dot(ya);if(c<=0&&l<=0)return e.copy(i);Ea.subVectors(t,r);const u=ar.dot(Ea),h=cr.dot(Ea);if(u>=0&&h<=u)return e.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(ar,o);ba.subVectors(t,s);const p=ar.dot(ba),g=cr.dot(ba);if(g>=0&&p<=g)return e.copy(s);const x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(cr,a);const d=u*g-p*h;if(d<=0&&h-u>=0&&p-g>=0)return _u.subVectors(s,r),a=(h-u)/(h-u+(p-g)),e.copy(r).addScaledVector(_u,a);const m=1/(d+x+f);return o=x*m,a=f*m,e.copy(i).addScaledVector(ar,o).addScaledVector(cr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function Ra(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class tt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Jt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Jt.workingColorSpace){if(t=im(t,1),e=We(e,0,1),i=We(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Ra(o,s,t+1/3),this.g=Ra(o,s,t),this.b=Ra(o,s,t-1/3)}return Jt.toWorkingColorSpace(this,r),this}setStyle(t,e=cn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=cn){const i=Fd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Er(t.r),this.g=Er(t.g),this.b=Er(t.b),this}copyLinearToSRGB(t){return this.r=da(t.r),this.g=da(t.g),this.b=da(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=cn){return Jt.fromWorkingColorSpace(Ce.copy(this),t),Math.round(We(Ce.r*255,0,255))*65536+Math.round(We(Ce.g*255,0,255))*256+Math.round(We(Ce.b*255,0,255))}getHexString(t=cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Ce.copy(this),e);const i=Ce.r,r=Ce.g,s=Ce.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=cn){Jt.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,i=Ce.g,r=Ce.b;return t!==cn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(Vs);const i=ua(si.h,Vs.h,e),r=ua(si.s,Vs.s,e),s=ua(si.l,Vs.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new tt;tt.NAMES=Fd;let ym=0;class Ss extends Nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=Ms(),this.name="",this.type="Material",this.blending=Sr,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oc,this.blendDst=ac,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(i.blending=this.blending),this.side!==mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==oc&&(i.blendSrc=this.blendSrc),this.blendDst!==ac&&(i.blendDst=this.blendDst),this.blendEquation!==Di&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==iu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ys extends Ss{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=_d,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new V,Ws=new Kt;class wn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ru,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ws.fromBufferAttribute(this,e),Ws.applyMatrix3(t),this.setXY(e,Ws.x,Ws.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Vr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array),r=Ve(r,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ru&&(t.usage=this.usage),t}}class Od extends wn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Bd extends wn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ge extends wn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Em=0;const on=new ee,Ca=new Ae,lr=new V,Ze=new ji,$r=new ji,ye=new V;class rn extends Nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=Ms(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Id(t)?Bd:Od)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new zt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,i){return on.makeTranslation(t,e,i),this.applyMatrix4(on),this}scale(t,e,i){return on.makeScale(t,e,i),this.applyMatrix4(on),this}lookAt(t){return Ca.lookAt(t),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ge(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Ze.setFromBufferAttribute(s),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Or);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const i=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];$r.setFromBufferAttribute(a),this.morphTargetsRelative?(ye.addVectors(Ze.min,$r.min),Ze.expandByPoint(ye),ye.addVectors(Ze.max,$r.max),Ze.expandByPoint(ye)):(Ze.expandByPoint($r.min),Ze.expandByPoint($r.max))}Ze.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)ye.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(ye));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ye.fromBufferAttribute(a,l),c&&(lr.fromBufferAttribute(t,l),ye.add(lr)),r=Math.max(r,i.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<i.count;A++)a[A]=new V,c[A]=new V;const l=new V,u=new V,h=new V,f=new Kt,p=new Kt,g=new Kt,x=new V,d=new V;function m(A,L,_){l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,L),h.fromBufferAttribute(i,_),f.fromBufferAttribute(s,A),p.fromBufferAttribute(s,L),g.fromBufferAttribute(s,_),u.sub(l),h.sub(l),p.sub(f),g.sub(f);const v=1/(p.x*g.y-g.x*p.y);isFinite(v)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(v),d.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(v),a[A].add(x),a[L].add(x),a[_].add(x),c[A].add(d),c[L].add(d),c[_].add(d))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let A=0,L=b.length;A<L;++A){const _=b[A],v=_.start,I=_.count;for(let U=v,N=v+I;U<N;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const S=new V,y=new V,E=new V,w=new V;function M(A){E.fromBufferAttribute(r,A),w.copy(E);const L=a[A];S.copy(L),S.sub(E.multiplyScalar(E.dot(L))).normalize(),y.crossVectors(w,L);const v=y.dot(c[A])<0?-1:1;o.setXYZW(A,S.x,S.y,S.z,v)}for(let A=0,L=b.length;A<L;++A){const _=b[A],v=_.start,I=_.count;for(let U=v,N=v+I;U<N;U+=3)M(t.getX(U+0)),M(t.getX(U+1)),M(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new V,s=new V,o=new V,a=new V,c=new V,l=new V,u=new V,h=new V;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),x=t.getX(f+1),d=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,d),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,d),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(d,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let p=0,g=0;for(let x=0,d=c.length;x<d;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*u;for(let m=0;m<u;m++)f[g++]=l[p++]}return new wn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new rn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],p=t(f,i);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xu=new ee,Ti=new mm,Xs=new Or,vu=new V,qs=new V,Ys=new V,$s=new V,Pa=new V,Ks=new V,Mu=new V,js=new V;class Vt extends Ae{constructor(t=new rn,e=new ys){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Ks.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(Pa.fromBufferAttribute(h,t),o?Ks.addScaledVector(Pa,u):Ks.addScaledVector(Pa.sub(e),u))}e.add(Ks)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere),Xs.applyMatrix4(s),Ti.copy(t.ray).recast(t.near),!(Xs.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Xs,vu)===null||Ti.origin.distanceToSquared(vu)>(t.far-t.near)**2))&&(xu.copy(s).invert(),Ti.copy(t.ray).applyMatrix4(xu),!(i.boundingBox!==null&&Ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ti)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const d=f[g],m=o[d.materialIndex],b=Math.max(d.start,p.start),S=Math.min(a.count,Math.min(d.start+d.count,p.start+p.count));for(let y=b,E=S;y<E;y+=3){const w=a.getX(y),M=a.getX(y+1),A=a.getX(y+2);r=Zs(this,m,t,i,l,u,h,w,M,A),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let d=g,m=x;d<m;d+=3){const b=a.getX(d),S=a.getX(d+1),y=a.getX(d+2);r=Zs(this,o,t,i,l,u,h,b,S,y),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const d=f[g],m=o[d.materialIndex],b=Math.max(d.start,p.start),S=Math.min(c.count,Math.min(d.start+d.count,p.start+p.count));for(let y=b,E=S;y<E;y+=3){const w=y,M=y+1,A=y+2;r=Zs(this,m,t,i,l,u,h,w,M,A),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let d=g,m=x;d<m;d+=3){const b=d,S=d+1,y=d+2;r=Zs(this,o,t,i,l,u,h,b,S,y),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}}}function bm(n,t,e,i,r,s,o,a){let c;if(t.side===Fe?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===mi,a),c===null)return null;js.copy(a),js.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(js);return l<e.near||l>e.far?null:{distance:l,point:js.clone(),object:n}}function Zs(n,t,e,i,r,s,o,a,c,l){n.getVertexPosition(a,qs),n.getVertexPosition(c,Ys),n.getVertexPosition(l,$s);const u=bm(n,t,e,i,qs,Ys,$s,Mu);if(u){const h=new V;bn.getBarycoord(Mu,qs,Ys,$s,h),r&&(u.uv=bn.getInterpolatedAttribute(r,a,c,l,h,new Kt)),s&&(u.uv1=bn.getInterpolatedAttribute(s,a,c,l,h,new Kt)),o&&(u.normal=bn.getInterpolatedAttribute(o,a,c,l,h,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new V,materialIndex:0};bn.getNormal(qs,Ys,$s,f.normal),u.face=f,u.barycoord=h}return u}class Es extends rn{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ge(l,3)),this.setAttribute("normal",new ge(u,3)),this.setAttribute("uv",new ge(h,2));function g(x,d,m,b,S,y,E,w,M,A,L){const _=y/M,v=E/A,I=y/2,U=E/2,N=w/2,W=M+1,F=A+1;let B=0,P=0;const z=new V;for(let H=0;H<F;H++){const j=H*v-U;for(let rt=0;rt<W;rt++){const ht=rt*_-I;z[x]=ht*b,z[d]=j*S,z[m]=N,l.push(z.x,z.y,z.z),z[x]=0,z[d]=0,z[m]=w>0?1:-1,u.push(z.x,z.y,z.z),h.push(rt/M),h.push(1-H/A),B+=1}}for(let H=0;H<A;H++)for(let j=0;j<M;j++){const rt=f+j+W*H,ht=f+j+W*(H+1),q=f+(j+1)+W*(H+1),Z=f+(j+1)+W*H;c.push(rt,ht,Z),c.push(ht,q,Z),P+=6}a.addGroup(p,P,L),p+=P,f+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Es(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ir(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ue(n){const t={};for(let e=0;e<n.length;e++){const i=Ir(n[e]);for(const r in i)t[r]=i[r]}return t}function Tm(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function zd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const wm={clone:Ir,merge:Ue};var Am=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends Ss{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Am,this.fragmentShader=Rm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ir(t.uniforms),this.uniformsGroups=Tm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class kd extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=Yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new V,Su=new Kt,yu=new Kt;class ln extends kd{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Wc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(la*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wc*2*Math.atan(Math.tan(la*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,Su,yu),e.subVectors(yu,Su)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(la*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ur=-90,hr=1;class Cm extends Ae{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ln(ur,hr,t,e);r.layers=this.layers,this.add(r);const s=new ln(ur,hr,t,e);s.layers=this.layers,this.add(s);const o=new ln(ur,hr,t,e);o.layers=this.layers,this.add(o);const a=new ln(ur,hr,t,e);a.layers=this.layers,this.add(a);const c=new ln(ur,hr,t,e);c.layers=this.layers,this.add(c);const l=new ln(ur,hr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===Yn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ko)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Gd extends Ie{constructor(t,e,i,r,s,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Rr,super(t,e,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Pm extends Wi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Gd(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:En}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Es(5,5,5),s=new gi({name:"CubemapFromEquirect",uniforms:Ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fe,blending:hi});s.uniforms.tEquirect.value=e;const o=new Vt(r,s),a=e.minFilter;return e.minFilter===Bi&&(e.minFilter=En),new Cm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const La=new V,Lm=new V,Im=new zt;class Ci{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=La.subVectors(i,e).cross(Lm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(La),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Im.getNormalMatrix(t),r=this.coplanarPoint(La).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new Or,Js=new V;class xl{constructor(t=new Ci,e=new Ci,i=new Ci,r=new Ci,s=new Ci,o=new Ci){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Yn){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],h=r[6],f=r[7],p=r[8],g=r[9],x=r[10],d=r[11],m=r[12],b=r[13],S=r[14],y=r[15];if(i[0].setComponents(c-s,f-l,d-p,y-m).normalize(),i[1].setComponents(c+s,f+l,d+p,y+m).normalize(),i[2].setComponents(c+o,f+u,d+g,y+b).normalize(),i[3].setComponents(c-o,f-u,d-g,y-b).normalize(),i[4].setComponents(c-a,f-h,d-x,y-S).normalize(),e===Yn)i[5].setComponents(c+a,f+h,d+x,y+S).normalize();else if(e===ko)i[5].setComponents(a,h,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(t){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Js.x=r.normal.x>0?t.max.x:t.min.x,Js.y=r.normal.y>0?t.max.y:t.min.y,Js.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hd(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Dm(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const x=h[p];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class Ko extends rn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=t/a,f=e/c,p=[],g=[],x=[],d=[];for(let m=0;m<u;m++){const b=m*f-o;for(let S=0;S<l;S++){const y=S*h-s;g.push(y,-b,0),x.push(0,0,1),d.push(S/a),d.push(1-m/c)}}for(let m=0;m<c;m++)for(let b=0;b<a;b++){const S=b+l*m,y=b+l*(m+1),E=b+1+l*(m+1),w=b+1+l*m;p.push(S,y,w),p.push(y,E,w)}this.setIndex(p),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(x,3)),this.setAttribute("uv",new ge(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ko(t.width,t.height,t.widthSegments,t.heightSegments)}}var Um=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nm=`#ifdef USE_ALPHAHASH
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
#endif`,Fm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Om=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,km=`#ifdef USE_AOMAP
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
#endif`,Gm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hm=`#ifdef USE_BATCHING
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
#endif`,Vm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ym=`#ifdef USE_IRIDESCENCE
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
#endif`,$m=`#ifdef USE_BUMPMAP
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
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,t0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,e0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,i0=`#define PI 3.141592653589793
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
} // validated`,r0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,s0=`vec3 transformedNormal = objectNormal;
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
#endif`,o0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,c0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,l0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,u0="gl_FragColor = linearToOutputTexel( gl_FragColor );",h0=`
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
}`,d0=`#ifdef USE_ENVMAP
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
#endif`,f0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
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
#endif`,_0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,v0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,M0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S0=`#ifdef USE_GRADIENTMAP
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
}`,y0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,E0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,b0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,T0=`uniform bool receiveShadow;
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
#endif`,w0=`#ifdef USE_ENVMAP
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
#endif`,A0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,C0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,P0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,L0=`PhysicalMaterial material;
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
#endif`,I0=`struct PhysicalMaterial {
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
}`,D0=`
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
#endif`,U0=`#if defined( RE_IndirectDiffuse )
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
#endif`,N0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,F0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,O0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,k0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,H0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,V0=`#if defined( USE_POINTS_UV )
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
#endif`,W0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Y0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K0=`#ifdef USE_MORPHTARGETS
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
#endif`,j0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,J0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ng=`#ifdef USE_NORMALMAP
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
#endif`,ig=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,og=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ag=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ug=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_g=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xg=`float getShadowMask() {
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
}`,vg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mg=`#ifdef USE_SKINNING
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
#endif`,Sg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yg=`#ifdef USE_SKINNING
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
#endif`,Eg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ag=`#ifdef USE_TRANSMISSION
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
#endif`,Rg=`#ifdef USE_TRANSMISSION
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
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ig=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ug=`uniform sampler2D t2D;
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
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`#include <common>
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
}`,kg=`#if DEPTH_PACKING == 3200
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
}`,Gg=`#define DISTANCE
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
}`,Hg=`#define DISTANCE
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
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xg=`uniform float scale;
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
}`,qg=`uniform vec3 diffuse;
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
}`,Yg=`#include <common>
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
}`,$g=`uniform vec3 diffuse;
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
}`,Kg=`#define LAMBERT
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
}`,jg=`#define LAMBERT
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
}`,Zg=`#define MATCAP
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
}`,Jg=`#define MATCAP
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
}`,Qg=`#define NORMAL
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
}`,t_=`#define NORMAL
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
}`,e_=`#define PHONG
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
}`,n_=`#define PHONG
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
}`,i_=`#define STANDARD
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
}`,r_=`#define STANDARD
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
}`,s_=`#define TOON
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
}`,o_=`#define TOON
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
}`,a_=`uniform float size;
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
}`,c_=`uniform vec3 diffuse;
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
}`,l_=`#include <common>
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
}`,u_=`uniform vec3 color;
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
}`,h_=`uniform float rotation;
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
}`,d_=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:Um,alphahash_pars_fragment:Nm,alphamap_fragment:Fm,alphamap_pars_fragment:Om,alphatest_fragment:Bm,alphatest_pars_fragment:zm,aomap_fragment:km,aomap_pars_fragment:Gm,batching_pars_vertex:Hm,batching_vertex:Vm,begin_vertex:Wm,beginnormal_vertex:Xm,bsdfs:qm,iridescence_fragment:Ym,bumpmap_pars_fragment:$m,clipping_planes_fragment:Km,clipping_planes_pars_fragment:jm,clipping_planes_pars_vertex:Zm,clipping_planes_vertex:Jm,color_fragment:Qm,color_pars_fragment:t0,color_pars_vertex:e0,color_vertex:n0,common:i0,cube_uv_reflection_fragment:r0,defaultnormal_vertex:s0,displacementmap_pars_vertex:o0,displacementmap_vertex:a0,emissivemap_fragment:c0,emissivemap_pars_fragment:l0,colorspace_fragment:u0,colorspace_pars_fragment:h0,envmap_fragment:d0,envmap_common_pars_fragment:f0,envmap_pars_fragment:p0,envmap_pars_vertex:m0,envmap_physical_pars_fragment:w0,envmap_vertex:g0,fog_vertex:_0,fog_pars_vertex:x0,fog_fragment:v0,fog_pars_fragment:M0,gradientmap_pars_fragment:S0,lightmap_pars_fragment:y0,lights_lambert_fragment:E0,lights_lambert_pars_fragment:b0,lights_pars_begin:T0,lights_toon_fragment:A0,lights_toon_pars_fragment:R0,lights_phong_fragment:C0,lights_phong_pars_fragment:P0,lights_physical_fragment:L0,lights_physical_pars_fragment:I0,lights_fragment_begin:D0,lights_fragment_maps:U0,lights_fragment_end:N0,logdepthbuf_fragment:F0,logdepthbuf_pars_fragment:O0,logdepthbuf_pars_vertex:B0,logdepthbuf_vertex:z0,map_fragment:k0,map_pars_fragment:G0,map_particle_fragment:H0,map_particle_pars_fragment:V0,metalnessmap_fragment:W0,metalnessmap_pars_fragment:X0,morphinstance_vertex:q0,morphcolor_vertex:Y0,morphnormal_vertex:$0,morphtarget_pars_vertex:K0,morphtarget_vertex:j0,normal_fragment_begin:Z0,normal_fragment_maps:J0,normal_pars_fragment:Q0,normal_pars_vertex:tg,normal_vertex:eg,normalmap_pars_fragment:ng,clearcoat_normal_fragment_begin:ig,clearcoat_normal_fragment_maps:rg,clearcoat_pars_fragment:sg,iridescence_pars_fragment:og,opaque_fragment:ag,packing:cg,premultiplied_alpha_fragment:lg,project_vertex:ug,dithering_fragment:hg,dithering_pars_fragment:dg,roughnessmap_fragment:fg,roughnessmap_pars_fragment:pg,shadowmap_pars_fragment:mg,shadowmap_pars_vertex:gg,shadowmap_vertex:_g,shadowmask_pars_fragment:xg,skinbase_vertex:vg,skinning_pars_vertex:Mg,skinning_vertex:Sg,skinnormal_vertex:yg,specularmap_fragment:Eg,specularmap_pars_fragment:bg,tonemapping_fragment:Tg,tonemapping_pars_fragment:wg,transmission_fragment:Ag,transmission_pars_fragment:Rg,uv_pars_fragment:Cg,uv_pars_vertex:Pg,uv_vertex:Lg,worldpos_vertex:Ig,background_vert:Dg,background_frag:Ug,backgroundCube_vert:Ng,backgroundCube_frag:Fg,cube_vert:Og,cube_frag:Bg,depth_vert:zg,depth_frag:kg,distanceRGBA_vert:Gg,distanceRGBA_frag:Hg,equirect_vert:Vg,equirect_frag:Wg,linedashed_vert:Xg,linedashed_frag:qg,meshbasic_vert:Yg,meshbasic_frag:$g,meshlambert_vert:Kg,meshlambert_frag:jg,meshmatcap_vert:Zg,meshmatcap_frag:Jg,meshnormal_vert:Qg,meshnormal_frag:t_,meshphong_vert:e_,meshphong_frag:n_,meshphysical_vert:i_,meshphysical_frag:r_,meshtoon_vert:s_,meshtoon_frag:o_,points_vert:a_,points_frag:c_,shadow_vert:l_,shadow_frag:u_,sprite_vert:h_,sprite_frag:d_},lt={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Dn={basic:{uniforms:Ue([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Ue([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new tt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Ue([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Ue([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Ue([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new tt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Ue([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Ue([lt.points,lt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Ue([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Ue([lt.common,lt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Ue([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Ue([lt.sprite,lt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Ue([lt.common,lt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Ue([lt.lights,lt.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};Dn.physical={uniforms:Ue([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Qs={r:0,b:0,g:0},Ai=new An,f_=new ee;function p_(n,t,e,i,r,s,o){const a=new tt(0);let c=s===!0?0:1,l,u,h=null,f=0,p=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?e:t).get(S)),S}function x(b){let S=!1;const y=g(b);y===null?m(a,c):y&&y.isColor&&(m(y,1),S=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function d(b,S){const y=g(S);y&&(y.isCubeTexture||y.mapping===Yo)?(u===void 0&&(u=new Vt(new Es(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Ir(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ai.copy(S.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(f_.makeRotationFromEuler(Ai)),u.material.toneMapped=Jt.getTransfer(y.colorSpace)!==ue,(h!==y||f!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Vt(new Ko(2,2),new gi({name:"BackgroundMaterial",uniforms:Ir(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(y.colorSpace)!==ue,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,p=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,S){b.getRGB(Qs,zd(n)),i.buffers.color.setClear(Qs.r,Qs.g,Qs.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),c=S,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,m(a,c)},render:x,addToRenderList:d}}function m_(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(_,v,I,U,N){let W=!1;const F=h(U,I,v);s!==F&&(s=F,l(s.object)),W=p(_,U,I,N),W&&g(_,U,I,N),N!==null&&t.update(N,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,y(_,v,I,U),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function c(){return n.createVertexArray()}function l(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function h(_,v,I){const U=I.wireframe===!0;let N=i[_.id];N===void 0&&(N={},i[_.id]=N);let W=N[v.id];W===void 0&&(W={},N[v.id]=W);let F=W[U];return F===void 0&&(F=f(c()),W[U]=F),F}function f(_){const v=[],I=[],U=[];for(let N=0;N<e;N++)v[N]=0,I[N]=0,U[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:I,attributeDivisors:U,object:_,attributes:{},index:null}}function p(_,v,I,U){const N=s.attributes,W=v.attributes;let F=0;const B=I.getAttributes();for(const P in B)if(B[P].location>=0){const H=N[P];let j=W[P];if(j===void 0&&(P==="instanceMatrix"&&_.instanceMatrix&&(j=_.instanceMatrix),P==="instanceColor"&&_.instanceColor&&(j=_.instanceColor)),H===void 0||H.attribute!==j||j&&H.data!==j.data)return!0;F++}return s.attributesNum!==F||s.index!==U}function g(_,v,I,U){const N={},W=v.attributes;let F=0;const B=I.getAttributes();for(const P in B)if(B[P].location>=0){let H=W[P];H===void 0&&(P==="instanceMatrix"&&_.instanceMatrix&&(H=_.instanceMatrix),P==="instanceColor"&&_.instanceColor&&(H=_.instanceColor));const j={};j.attribute=H,H&&H.data&&(j.data=H.data),N[P]=j,F++}s.attributes=N,s.attributesNum=F,s.index=U}function x(){const _=s.newAttributes;for(let v=0,I=_.length;v<I;v++)_[v]=0}function d(_){m(_,0)}function m(_,v){const I=s.newAttributes,U=s.enabledAttributes,N=s.attributeDivisors;I[_]=1,U[_]===0&&(n.enableVertexAttribArray(_),U[_]=1),N[_]!==v&&(n.vertexAttribDivisor(_,v),N[_]=v)}function b(){const _=s.newAttributes,v=s.enabledAttributes;for(let I=0,U=v.length;I<U;I++)v[I]!==_[I]&&(n.disableVertexAttribArray(I),v[I]=0)}function S(_,v,I,U,N,W,F){F===!0?n.vertexAttribIPointer(_,v,I,N,W):n.vertexAttribPointer(_,v,I,U,N,W)}function y(_,v,I,U){x();const N=U.attributes,W=I.getAttributes(),F=v.defaultAttributeValues;for(const B in W){const P=W[B];if(P.location>=0){let z=N[B];if(z===void 0&&(B==="instanceMatrix"&&_.instanceMatrix&&(z=_.instanceMatrix),B==="instanceColor"&&_.instanceColor&&(z=_.instanceColor)),z!==void 0){const H=z.normalized,j=z.itemSize,rt=t.get(z);if(rt===void 0)continue;const ht=rt.buffer,q=rt.type,Z=rt.bytesPerElement,ct=q===n.INT||q===n.UNSIGNED_INT||z.gpuType===ul;if(z.isInterleavedBufferAttribute){const st=z.data,bt=st.stride,St=z.offset;if(st.isInstancedInterleavedBuffer){for(let Dt=0;Dt<P.locationSize;Dt++)m(P.location+Dt,st.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Dt=0;Dt<P.locationSize;Dt++)d(P.location+Dt);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let Dt=0;Dt<P.locationSize;Dt++)S(P.location+Dt,j/P.locationSize,q,H,bt*Z,(St+j/P.locationSize*Dt)*Z,ct)}else{if(z.isInstancedBufferAttribute){for(let st=0;st<P.locationSize;st++)m(P.location+st,z.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let st=0;st<P.locationSize;st++)d(P.location+st);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let st=0;st<P.locationSize;st++)S(P.location+st,j/P.locationSize,q,H,j*Z,j/P.locationSize*st*Z,ct)}}else if(F!==void 0){const H=F[B];if(H!==void 0)switch(H.length){case 2:n.vertexAttrib2fv(P.location,H);break;case 3:n.vertexAttrib3fv(P.location,H);break;case 4:n.vertexAttrib4fv(P.location,H);break;default:n.vertexAttrib1fv(P.location,H)}}}}b()}function E(){A();for(const _ in i){const v=i[_];for(const I in v){const U=v[I];for(const N in U)u(U[N].object),delete U[N];delete v[I]}delete i[_]}}function w(_){if(i[_.id]===void 0)return;const v=i[_.id];for(const I in v){const U=v[I];for(const N in U)u(U[N].object),delete U[N];delete v[I]}delete i[_.id]}function M(_){for(const v in i){const I=i[v];if(I[_.id]===void 0)continue;const U=I[_.id];for(const N in U)u(U[N].object),delete U[N];delete I[_.id]}}function A(){L(),o=!0,s!==r&&(s=r,l(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:M,initAttributes:x,enableAttribute:d,disableUnusedAttributes:b}}function g_(n,t,e){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),e.update(u,i,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,i,1)}function c(l,u,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x];for(let x=0;x<f.length;x++)e.update(g,i,f[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function __(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const M=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(M){return!(M!==Tn&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const A=M===vs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(M!==jn&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==On&&!A)}function c(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const M=t.get("EXT_clip_control");M.clipControlEXT(M.LOWER_LEFT_EXT,M.ZERO_TO_ONE_EXT)}const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:E,maxSamples:w}}function x_(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new Ci,a=new zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,x=h.clipIntersection,d=h.clipShadows,m=n.get(h);if(!r||g===null||g.length===0||s&&!d)s?u(null):l();else{const b=s?0:i,S=b*4;let y=m.clippingState||null;c.value=y,y=u(g,f,S,p);for(let E=0;E!==S;++E)y[E]=e[E];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,p,g){const x=h!==null?h.length:0;let d=null;if(x!==0){if(d=c.value,g!==!0||d===null){const m=p+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(d===null||d.length<m)&&(d=new Float32Array(m));for(let S=0,y=p;S!==x;++S,y+=4)o.copy(h[S]).applyMatrix4(b,a),o.normal.toArray(d,y),d[y+3]=o.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,d}}function v_(n){let t=new WeakMap;function e(o,a){return a===mc?o.mapping=Rr:a===gc&&(o.mapping=Cr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===mc||a===gc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Pm(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class Vd extends kd{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const xr=4,Eu=[.125,.215,.35,.446,.526,.582],Ui=20,Ia=new Vd,bu=new tt;let Da=null,Ua=0,Na=0,Fa=!1;const Pi=(1+Math.sqrt(5))/2,dr=1/Pi,Tu=[new V(-Pi,dr,0),new V(Pi,dr,0),new V(-dr,0,Pi),new V(dr,0,Pi),new V(0,Pi,-dr),new V(0,Pi,dr),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class wu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Da=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Da,Ua,Na),this._renderer.xr.enabled=Fa,t.scissorTest=!1,to(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Rr||t.mapping===Cr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Da=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:vs,format:Tn,colorSpace:vi,depthBuffer:!1},r=Au(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Au(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=M_(s)),this._blurMaterial=S_(s,t,e)}return r}_compileMaterial(t){const e=new Vt(this._lodPlanes[0],t);this._renderer.compile(e,Ia)}_sceneToCubeUV(t,e,i,r){const a=new ln(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(bu),u.toneMapping=di,u.autoClear=!1;const p=new ys({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),g=new Vt(new Es,p);let x=!1;const d=t.background;d?d.isColor&&(p.color.copy(d),t.background=null,x=!0):(p.color.copy(bu),x=!0);for(let m=0;m<6;m++){const b=m%3;b===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):b===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const S=this._cubeSize;to(r,b*S,m>2?S:0,S,S),u.setRenderTarget(r),x&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=d}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Rr||t.mapping===Cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ru());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Vt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;to(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Ia)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Tu[(r-s-1)%Tu.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Vt(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ui-1),x=s/g,d=isFinite(s)?1+Math.floor(u*x):Ui;d>Ui&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Ui}`);const m=[];let b=0;for(let M=0;M<Ui;++M){const A=M/x,L=Math.exp(-A*A/2);m.push(L),M===0?b+=L:M<d&&(b+=2*L)}for(let M=0;M<m.length;M++)m[M]=m[M]/b;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-i;const y=this._sizeLods[r],E=3*y*(r>S-xr?r-S+xr:0),w=4*(this._cubeSize-y);to(e,E,w,3*y,2*y),c.setRenderTarget(e),c.render(h,Ia)}}function M_(n){const t=[],e=[],i=[];let r=n;const s=n-xr+1+Eu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>n-xr?c=Eu[o-n+xr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,x=3,d=2,m=1,b=new Float32Array(x*g*p),S=new Float32Array(d*g*p),y=new Float32Array(m*g*p);for(let w=0;w<p;w++){const M=w%3*2/3-1,A=w>2?0:-1,L=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];b.set(L,x*g*w),S.set(f,d*g*w);const _=[w,w,w,w,w,w];y.set(_,m*g*w)}const E=new rn;E.setAttribute("position",new wn(b,x)),E.setAttribute("uv",new wn(S,d)),E.setAttribute("faceIndex",new wn(y,m)),t.push(E),r>xr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Au(n,t,e){const i=new Wi(n,t,e);return i.texture.mapping=Yo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function to(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function S_(n,t,e){const i=new Float32Array(Ui),r=new V(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:vl(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Ru(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Cu(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function vl(){return`

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
	`}function y_(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===mc||c===gc,u=c===Rr||c===Cr;if(l||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new wu(n)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&r(p)?(e===null&&(e=new wu(n)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function E_(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Mo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function b_(n,t,e,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let d=0,m=x.length;d<m;d++)t.remove(x[d])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(t.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const x=p[g];for(let d=0,m=x.length;d<m;d++)t.update(x[d],n.ARRAY_BUFFER)}}function l(h){const f=[],p=h.index,g=h.attributes.position;let x=0;if(p!==null){const b=p.array;x=p.version;for(let S=0,y=b.length;S<y;S+=3){const E=b[S+0],w=b[S+1],M=b[S+2];f.push(E,w,w,M,M,E)}}else if(g!==void 0){const b=g.array;x=g.version;for(let S=0,y=b.length/3-1;S<y;S+=3){const E=S+0,w=S+1,M=S+2;f.push(E,w,w,M,M,E)}}else return;const d=new(Id(f)?Bd:Od)(f,1);d.version=x;const m=s.get(h);m&&t.remove(m),s.set(h,d)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function T_(n,t,e){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,p){n.drawElements(i,p,s,f*o),e.update(p,i,1)}function l(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*o,g),e.update(p,i,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let d=0;for(let m=0;m<g;m++)d+=p[m];e.update(d,i,1)}function h(f,p,g,x){if(g===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<f.length;m++)l(f[m]/o,p[m],x[m]);else{d.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,x,0,g);let m=0;for(let b=0;b<g;b++)m+=p[b];for(let b=0;b<x.length;b++)e.update(m,i,x[b])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function w_(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function A_(n,t,e){const i=new WeakMap,r=new de;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let L=function(){M.dispose(),i.delete(a),a.removeEventListener("dispose",L)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let S=0;p===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let y=a.attributes.position.count*S,E=1;y>t.maxTextureSize&&(E=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const w=new Float32Array(y*E*4*h),M=new Ud(w,y,E,h);M.type=On,M.needsUpdate=!0;const A=S*4;for(let _=0;_<h;_++){const v=d[_],I=m[_],U=b[_],N=y*E*4*_;for(let W=0;W<v.count;W++){const F=W*A;p===!0&&(r.fromBufferAttribute(v,W),w[N+F+0]=r.x,w[N+F+1]=r.y,w[N+F+2]=r.z,w[N+F+3]=0),g===!0&&(r.fromBufferAttribute(I,W),w[N+F+4]=r.x,w[N+F+5]=r.y,w[N+F+6]=r.z,w[N+F+7]=0),x===!0&&(r.fromBufferAttribute(U,W),w[N+F+8]=r.x,w[N+F+9]=r.y,w[N+F+10]=r.z,w[N+F+11]=U.itemSize===4?r.w:1)}}f={count:h,texture:M,size:new Kt(y,E)},i.set(a,f),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];const g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function R_(n,t,e,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=t.get(c,u);if(r.get(h)!==l&&(t.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class Wd extends Ie{constructor(t,e,i,r,s,o,a,c,l,u=yr){if(u!==yr&&u!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===yr&&(i=Vi),i===void 0&&u===Lr&&(i=Pr),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:qe,this.minFilter=c!==void 0?c:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Xd=new Ie,Pu=new Wd(1,1),qd=new Ud,Yd=new fm,$d=new Gd,Lu=[],Iu=[],Du=new Float32Array(16),Uu=new Float32Array(9),Nu=new Float32Array(4);function Br(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Lu[r];if(s===void 0&&(s=new Float32Array(r),Lu[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Me(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Se(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function jo(n,t){let e=Iu[t];e===void 0&&(e=new Int32Array(t),Iu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function C_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function P_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;n.uniform2fv(this.addr,t),Se(e,t)}}function L_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;n.uniform3fv(this.addr,t),Se(e,t)}}function I_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;n.uniform4fv(this.addr,t),Se(e,t)}}function D_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Me(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,i))return;Nu.set(i),n.uniformMatrix2fv(this.addr,!1,Nu),Se(e,i)}}function U_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Me(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,i))return;Uu.set(i),n.uniformMatrix3fv(this.addr,!1,Uu),Se(e,i)}}function N_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Me(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,i))return;Du.set(i),n.uniformMatrix4fv(this.addr,!1,Du),Se(e,i)}}function F_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function O_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;n.uniform2iv(this.addr,t),Se(e,t)}}function B_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;n.uniform3iv(this.addr,t),Se(e,t)}}function z_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;n.uniform4iv(this.addr,t),Se(e,t)}}function k_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function G_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;n.uniform2uiv(this.addr,t),Se(e,t)}}function H_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;n.uniform3uiv(this.addr,t),Se(e,t)}}function V_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;n.uniform4uiv(this.addr,t),Se(e,t)}}function W_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Pu.compareFunction=Ld,s=Pu):s=Xd,e.setTexture2D(t||s,r)}function X_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Yd,r)}function q_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||$d,r)}function Y_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||qd,r)}function $_(n){switch(n){case 5126:return C_;case 35664:return P_;case 35665:return L_;case 35666:return I_;case 35674:return D_;case 35675:return U_;case 35676:return N_;case 5124:case 35670:return F_;case 35667:case 35671:return O_;case 35668:case 35672:return B_;case 35669:case 35673:return z_;case 5125:return k_;case 36294:return G_;case 36295:return H_;case 36296:return V_;case 35678:case 36198:case 36298:case 36306:case 35682:return W_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return q_;case 36289:case 36303:case 36311:case 36292:return Y_}}function K_(n,t){n.uniform1fv(this.addr,t)}function j_(n,t){const e=Br(t,this.size,2);n.uniform2fv(this.addr,e)}function Z_(n,t){const e=Br(t,this.size,3);n.uniform3fv(this.addr,e)}function J_(n,t){const e=Br(t,this.size,4);n.uniform4fv(this.addr,e)}function Q_(n,t){const e=Br(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function tx(n,t){const e=Br(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function ex(n,t){const e=Br(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function nx(n,t){n.uniform1iv(this.addr,t)}function ix(n,t){n.uniform2iv(this.addr,t)}function rx(n,t){n.uniform3iv(this.addr,t)}function sx(n,t){n.uniform4iv(this.addr,t)}function ox(n,t){n.uniform1uiv(this.addr,t)}function ax(n,t){n.uniform2uiv(this.addr,t)}function cx(n,t){n.uniform3uiv(this.addr,t)}function lx(n,t){n.uniform4uiv(this.addr,t)}function ux(n,t,e){const i=this.cache,r=t.length,s=jo(e,r);Me(i,s)||(n.uniform1iv(this.addr,s),Se(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Xd,s[o])}function hx(n,t,e){const i=this.cache,r=t.length,s=jo(e,r);Me(i,s)||(n.uniform1iv(this.addr,s),Se(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Yd,s[o])}function dx(n,t,e){const i=this.cache,r=t.length,s=jo(e,r);Me(i,s)||(n.uniform1iv(this.addr,s),Se(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||$d,s[o])}function fx(n,t,e){const i=this.cache,r=t.length,s=jo(e,r);Me(i,s)||(n.uniform1iv(this.addr,s),Se(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||qd,s[o])}function px(n){switch(n){case 5126:return K_;case 35664:return j_;case 35665:return Z_;case 35666:return J_;case 35674:return Q_;case 35675:return tx;case 35676:return ex;case 5124:case 35670:return nx;case 35667:case 35671:return ix;case 35668:case 35672:return rx;case 35669:case 35673:return sx;case 5125:return ox;case 36294:return ax;case 36295:return cx;case 36296:return lx;case 35678:case 36198:case 36298:case 36306:case 35682:return ux;case 35679:case 36299:case 36307:return hx;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return fx}}class mx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=$_(e.type)}}class gx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=px(e.type)}}class _x{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const Oa=/(\w+)(\])?(\[|\.)?/g;function Fu(n,t){n.seq.push(t),n.map[t.id]=t}function xx(n,t,e){const i=n.name,r=i.length;for(Oa.lastIndex=0;;){const s=Oa.exec(i),o=Oa.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Fu(e,l===void 0?new mx(a,n,t):new gx(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new _x(a),Fu(e,h)),e=h}}}class So{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);xx(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Ou(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const vx=37297;let Mx=0;function Sx(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function yx(n){const t=Jt.getPrimaries(Jt.workingColorSpace),e=Jt.getPrimaries(n);let i;switch(t===e?i="":t===zo&&e===Bo?i="LinearDisplayP3ToLinearSRGB":t===Bo&&e===zo&&(i="LinearSRGBToLinearDisplayP3"),n){case vi:case $o:return[i,"LinearTransferOETF"];case cn:case _l:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Bu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Sx(n.getShaderSource(t),o)}else return r}function Ex(n,t){const e=yx(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function bx(n,t){let e;switch(t){case kp:e="Linear";break;case Gp:e="Reinhard";break;case Hp:e="Cineon";break;case xd:e="ACESFilmic";break;case Wp:e="AgX";break;case Xp:e="Neutral";break;case Vp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const eo=new V;function Tx(){Jt.getLuminanceCoefficients(eo);const n=eo.x.toFixed(4),t=eo.y.toFixed(4),e=eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function Ax(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Rx(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function es(n){return n!==""}function zu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ku(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Cx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xc(n){return n.replace(Cx,Lx)}const Px=new Map;function Lx(n,t){let e=Bt[t];if(e===void 0){const i=Px.get(t);if(i!==void 0)e=Bt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Xc(e)}const Ix=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gu(n){return n.replace(Ix,Dx)}function Dx(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hu(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Ux(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===md?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===gd?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Xn&&(t="SHADOWMAP_TYPE_VSM"),t}function Nx(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Rr:case Cr:t="ENVMAP_TYPE_CUBE";break;case Yo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Fx(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Cr:t="ENVMAP_MODE_REFRACTION";break}return t}function Ox(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case _d:t="ENVMAP_BLENDING_MULTIPLY";break;case Bp:t="ENVMAP_BLENDING_MIX";break;case zp:t="ENVMAP_BLENDING_ADD";break}return t}function Bx(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function zx(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Ux(e),l=Nx(e),u=Fx(e),h=Ox(e),f=Bx(e),p=wx(e),g=Ax(s),x=r.createProgram();let d,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(es).join(`
`),d.length>0&&(d+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(es).join(`
`),m.length>0&&(m+=`
`)):(d=[Hu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),m=[Hu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?Bt.tonemapping_pars_fragment:"",e.toneMapping!==di?bx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,Ex("linearToOutputTexel",e.outputColorSpace),Tx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(es).join(`
`)),o=Xc(o),o=zu(o,e),o=ku(o,e),a=Xc(a),a=zu(a,e),a=ku(a,e),o=Gu(o),a=Gu(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,d=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,m=["#define varying in",e.glslVersion===su?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=b+d+o,y=b+m+a,E=Ou(r,r.VERTEX_SHADER,S),w=Ou(r,r.FRAGMENT_SHADER,y);r.attachShader(x,E),r.attachShader(x,w),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function M(v){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(x).trim(),U=r.getShaderInfoLog(E).trim(),N=r.getShaderInfoLog(w).trim();let W=!0,F=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,E,w);else{const B=Bu(r,E,"vertex"),P=Bu(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+v.name+`
Material Type: `+v.type+`

Program Info Log: `+I+`
`+B+`
`+P)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(U===""||N==="")&&(F=!1);F&&(v.diagnostics={runnable:W,programLog:I,vertexShader:{log:U,prefix:d},fragmentShader:{log:N,prefix:m}})}r.deleteShader(E),r.deleteShader(w),A=new So(r,x),L=Rx(r,x)}let A;this.getUniforms=function(){return A===void 0&&M(this),A};let L;this.getAttributes=function(){return L===void 0&&M(this),L};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(x,vx)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Mx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=w,this}let kx=0;class Gx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Hx(t),e.set(t,i)),i}}class Hx{constructor(t){this.id=kx++,this.code=t,this.usedTimes=0}}function Vx(n,t,e,i,r,s,o){const a=new Nd,c=new Gx,l=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,p=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,v,I,U,N){const W=U.fog,F=N.geometry,B=_.isMeshStandardMaterial?U.environment:null,P=(_.isMeshStandardMaterial?e:t).get(_.envMap||B),z=P&&P.mapping===Yo?P.image.height:null,H=x[_.type];_.precision!==null&&(g=r.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const j=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,rt=j!==void 0?j.length:0;let ht=0;F.morphAttributes.position!==void 0&&(ht=1),F.morphAttributes.normal!==void 0&&(ht=2),F.morphAttributes.color!==void 0&&(ht=3);let q,Z,ct,st;if(H){const He=Dn[H];q=He.vertexShader,Z=He.fragmentShader}else q=_.vertexShader,Z=_.fragmentShader,c.update(_),ct=c.getVertexShaderID(_),st=c.getFragmentShaderID(_);const bt=n.getRenderTarget(),St=N.isInstancedMesh===!0,Dt=N.isBatchedMesh===!0,Ft=!!_.map,Ot=!!_.matcap,D=!!P,ve=!!_.aoMap,kt=!!_.lightMap,Gt=!!_.bumpMap,wt=!!_.normalMap,ce=!!_.displacementMap,It=!!_.emissiveMap,C=!!_.metalnessMap,T=!!_.roughnessMap,X=_.anisotropy>0,Q=_.clearcoat>0,it=_.dispersion>0,J=_.iridescence>0,yt=_.sheen>0,ut=_.transmission>0,gt=X&&!!_.anisotropyMap,Yt=Q&&!!_.clearcoatMap,ot=Q&&!!_.clearcoatNormalMap,_t=Q&&!!_.clearcoatRoughnessMap,Pt=J&&!!_.iridescenceMap,Lt=J&&!!_.iridescenceThicknessMap,xt=yt&&!!_.sheenColorMap,Wt=yt&&!!_.sheenRoughnessMap,Ut=!!_.specularMap,re=!!_.specularColorMap,O=!!_.specularIntensityMap,pt=ut&&!!_.transmissionMap,K=ut&&!!_.thicknessMap,et=!!_.gradientMap,dt=!!_.alphaMap,mt=_.alphaTest>0,qt=!!_.alphaHash,_e=!!_.extensions;let Ge=di;_.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Ge=n.toneMapping);const $t={shaderID:H,shaderType:_.type,shaderName:_.name,vertexShader:q,fragmentShader:Z,defines:_.defines,customVertexShaderID:ct,customFragmentShaderID:st,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Dt,batchingColor:Dt&&N._colorsTexture!==null,instancing:St,instancingColor:St&&N.instanceColor!==null,instancingMorph:St&&N.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:bt===null?n.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:vi,alphaToCoverage:!!_.alphaToCoverage,map:Ft,matcap:Ot,envMap:D,envMapMode:D&&P.mapping,envMapCubeUVHeight:z,aoMap:ve,lightMap:kt,bumpMap:Gt,normalMap:wt,displacementMap:p&&ce,emissiveMap:It,normalMapObjectSpace:wt&&_.normalMapType===$p,normalMapTangentSpace:wt&&_.normalMapType===Pd,metalnessMap:C,roughnessMap:T,anisotropy:X,anisotropyMap:gt,clearcoat:Q,clearcoatMap:Yt,clearcoatNormalMap:ot,clearcoatRoughnessMap:_t,dispersion:it,iridescence:J,iridescenceMap:Pt,iridescenceThicknessMap:Lt,sheen:yt,sheenColorMap:xt,sheenRoughnessMap:Wt,specularMap:Ut,specularColorMap:re,specularIntensityMap:O,transmission:ut,transmissionMap:pt,thicknessMap:K,gradientMap:et,opaque:_.transparent===!1&&_.blending===Sr&&_.alphaToCoverage===!1,alphaMap:dt,alphaTest:mt,alphaHash:qt,combine:_.combine,mapUv:Ft&&d(_.map.channel),aoMapUv:ve&&d(_.aoMap.channel),lightMapUv:kt&&d(_.lightMap.channel),bumpMapUv:Gt&&d(_.bumpMap.channel),normalMapUv:wt&&d(_.normalMap.channel),displacementMapUv:ce&&d(_.displacementMap.channel),emissiveMapUv:It&&d(_.emissiveMap.channel),metalnessMapUv:C&&d(_.metalnessMap.channel),roughnessMapUv:T&&d(_.roughnessMap.channel),anisotropyMapUv:gt&&d(_.anisotropyMap.channel),clearcoatMapUv:Yt&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:ot&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&d(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&d(_.sheenRoughnessMap.channel),specularMapUv:Ut&&d(_.specularMap.channel),specularColorMapUv:re&&d(_.specularColorMap.channel),specularIntensityMapUv:O&&d(_.specularIntensityMap.channel),transmissionMapUv:pt&&d(_.transmissionMap.channel),thicknessMapUv:K&&d(_.thicknessMap.channel),alphaMapUv:dt&&d(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(wt||X),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!F.attributes.uv&&(Ft||dt),fog:!!W,useFog:_.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:N.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:ht,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Ft&&_.map.isVideoTexture===!0&&Jt.getTransfer(_.map.colorSpace)===ue,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===he,flipSided:_.side===Fe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:_e&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&_.extensions.multiDraw===!0||Dt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return $t.vertexUv1s=l.has(1),$t.vertexUv2s=l.has(2),$t.vertexUv3s=l.has(3),l.clear(),$t}function b(_){const v=[];if(_.shaderID?v.push(_.shaderID):(v.push(_.customVertexShaderID),v.push(_.customFragmentShaderID)),_.defines!==void 0)for(const I in _.defines)v.push(I),v.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(S(v,_),y(v,_),v.push(n.outputColorSpace)),v.push(_.customProgramCacheKey),v.join()}function S(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapCubeUVHeight),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.morphAttributeCount),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)}function y(_,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.alphaToCoverage&&a.enable(20),_.push(a.mask)}function E(_){const v=x[_.type];let I;if(v){const U=Dn[v];I=wm.clone(U.uniforms)}else I=_.uniforms;return I}function w(_,v){let I;for(let U=0,N=u.length;U<N;U++){const W=u[U];if(W.cacheKey===v){I=W,++I.usedTimes;break}}return I===void 0&&(I=new zx(n,v,_,s),u.push(I)),I}function M(_){if(--_.usedTimes===0){const v=u.indexOf(_);u[v]=u[u.length-1],u.pop(),_.destroy()}}function A(_){c.remove(_)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:E,acquireProgram:w,releaseProgram:M,releaseShaderCache:A,programs:u,dispose:L}}function Wx(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function Xx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Vu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Wu(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(h,f,p,g,x,d){let m=n[t];return m===void 0?(m={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:d},n[t]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=p,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=x,m.group=d),t++,m}function a(h,f,p,g,x,d){const m=o(h,f,p,g,x,d);p.transmission>0?i.push(m):p.transparent===!0?r.push(m):e.push(m)}function c(h,f,p,g,x,d){const m=o(h,f,p,g,x,d);p.transmission>0?i.unshift(m):p.transparent===!0?r.unshift(m):e.unshift(m)}function l(h,f){e.length>1&&e.sort(h||Xx),i.length>1&&i.sort(f||Vu),r.length>1&&r.sort(f||Vu)}function u(){for(let h=t,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function qx(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Wu,n.set(i,[o])):r>=s.length?(o=new Wu,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Yx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new tt};break;case"SpotLight":e={position:new V,direction:new V,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":e={color:new tt,position:new V,halfWidth:new V,halfHeight:new V};break}return n[t.id]=e,e}}}function $x(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Kx=0;function jx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Zx(n){const t=new Yx,e=$x(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new V);const r=new V,s=new ee,o=new ee;function a(l){let u=0,h=0,f=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let p=0,g=0,x=0,d=0,m=0,b=0,S=0,y=0,E=0,w=0,M=0;l.sort(jx);for(let L=0,_=l.length;L<_;L++){const v=l[L],I=v.color,U=v.intensity,N=v.distance,W=v.shadow&&v.shadow.map?v.shadow.map.texture:null;if(v.isAmbientLight)u+=I.r*U,h+=I.g*U,f+=I.b*U;else if(v.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(v.sh.coefficients[F],U);M++}else if(v.isDirectionalLight){const F=t.get(v);if(F.color.copy(v.color).multiplyScalar(v.intensity),v.castShadow){const B=v.shadow,P=e.get(v);P.shadowIntensity=B.intensity,P.shadowBias=B.bias,P.shadowNormalBias=B.normalBias,P.shadowRadius=B.radius,P.shadowMapSize=B.mapSize,i.directionalShadow[p]=P,i.directionalShadowMap[p]=W,i.directionalShadowMatrix[p]=v.shadow.matrix,b++}i.directional[p]=F,p++}else if(v.isSpotLight){const F=t.get(v);F.position.setFromMatrixPosition(v.matrixWorld),F.color.copy(I).multiplyScalar(U),F.distance=N,F.coneCos=Math.cos(v.angle),F.penumbraCos=Math.cos(v.angle*(1-v.penumbra)),F.decay=v.decay,i.spot[x]=F;const B=v.shadow;if(v.map&&(i.spotLightMap[E]=v.map,E++,B.updateMatrices(v),v.castShadow&&w++),i.spotLightMatrix[x]=B.matrix,v.castShadow){const P=e.get(v);P.shadowIntensity=B.intensity,P.shadowBias=B.bias,P.shadowNormalBias=B.normalBias,P.shadowRadius=B.radius,P.shadowMapSize=B.mapSize,i.spotShadow[x]=P,i.spotShadowMap[x]=W,y++}x++}else if(v.isRectAreaLight){const F=t.get(v);F.color.copy(I).multiplyScalar(U),F.halfWidth.set(v.width*.5,0,0),F.halfHeight.set(0,v.height*.5,0),i.rectArea[d]=F,d++}else if(v.isPointLight){const F=t.get(v);if(F.color.copy(v.color).multiplyScalar(v.intensity),F.distance=v.distance,F.decay=v.decay,v.castShadow){const B=v.shadow,P=e.get(v);P.shadowIntensity=B.intensity,P.shadowBias=B.bias,P.shadowNormalBias=B.normalBias,P.shadowRadius=B.radius,P.shadowMapSize=B.mapSize,P.shadowCameraNear=B.camera.near,P.shadowCameraFar=B.camera.far,i.pointShadow[g]=P,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=v.shadow.matrix,S++}i.point[g]=F,g++}else if(v.isHemisphereLight){const F=t.get(v);F.skyColor.copy(v.color).multiplyScalar(U),F.groundColor.copy(v.groundColor).multiplyScalar(U),i.hemi[m]=F,m++}}d>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const A=i.hash;(A.directionalLength!==p||A.pointLength!==g||A.spotLength!==x||A.rectAreaLength!==d||A.hemiLength!==m||A.numDirectionalShadows!==b||A.numPointShadows!==S||A.numSpotShadows!==y||A.numSpotMaps!==E||A.numLightProbes!==M)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=d,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=y+E-w,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=M,A.directionalLength=p,A.pointLength=g,A.spotLength=x,A.rectAreaLength=d,A.hemiLength=m,A.numDirectionalShadows=b,A.numPointShadows=S,A.numSpotShadows=y,A.numSpotMaps=E,A.numLightProbes=M,i.version=Kx++)}function c(l,u){let h=0,f=0,p=0,g=0,x=0;const d=u.matrixWorldInverse;for(let m=0,b=l.length;m<b;m++){const S=l[m];if(S.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(d),h++}else if(S.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(d),y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(d),p++}else if(S.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(d),o.identity(),s.copy(S.matrixWorld),s.premultiply(d),o.extractRotation(s),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(d),f++}else if(S.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(d),x++}}}return{setup:a,setupView:c,state:i}}function Xu(n){const t=new Zx(n),e=[],i=[];function r(u){l.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Jx(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Xu(n),t.set(r,[a])):s>=o.length?(a=new Xu(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class Kd extends Ss{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Qx extends Ss{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const tv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ev=`uniform sampler2D shadow_pass;
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
}`;function nv(n,t,e){let i=new xl;const r=new Kt,s=new Kt,o=new de,a=new Kd({depthPacking:Cd}),c=new Qx,l={},u=e.maxTextureSize,h={[mi]:Fe,[Fe]:mi,[he]:he},f=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:tv,fragmentShader:ev}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new rn;g.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Vt(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=md;let m=this.type;this.render=function(w,M,A){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||w.length===0)return;const L=n.getRenderTarget(),_=n.getActiveCubeFace(),v=n.getActiveMipmapLevel(),I=n.state;I.setBlending(hi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const U=m!==Xn&&this.type===Xn,N=m===Xn&&this.type!==Xn;for(let W=0,F=w.length;W<F;W++){const B=w[W],P=B.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const z=P.getFrameExtents();if(r.multiply(z),s.copy(P.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/z.x),r.x=s.x*z.x,P.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/z.y),r.y=s.y*z.y,P.mapSize.y=s.y)),P.map===null||U===!0||N===!0){const j=this.type!==Xn?{minFilter:qe,magFilter:qe}:{};P.map!==null&&P.map.dispose(),P.map=new Wi(r.x,r.y,j),P.map.texture.name=B.name+".shadowMap",P.camera.updateProjectionMatrix()}n.setRenderTarget(P.map),n.clear();const H=P.getViewportCount();for(let j=0;j<H;j++){const rt=P.getViewport(j);o.set(s.x*rt.x,s.y*rt.y,s.x*rt.z,s.y*rt.w),I.viewport(o),P.updateMatrices(B,j),i=P.getFrustum(),y(M,A,P.camera,B,this.type)}P.isPointLightShadow!==!0&&this.type===Xn&&b(P,A),P.needsUpdate=!1}m=this.type,d.needsUpdate=!1,n.setRenderTarget(L,_,v)};function b(w,M){const A=t.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Wi(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(M,null,A,f,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(M,null,A,p,x,null)}function S(w,M,A,L){let _=null;const v=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(v!==void 0)_=v;else if(_=A.isPointLight===!0?c:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const I=_.uuid,U=M.uuid;let N=l[I];N===void 0&&(N={},l[I]=N);let W=N[U];W===void 0&&(W=_.clone(),N[U]=W,M.addEventListener("dispose",E)),_=W}if(_.visible=M.visible,_.wireframe=M.wireframe,L===Xn?_.side=M.shadowSide!==null?M.shadowSide:M.side:_.side=M.shadowSide!==null?M.shadowSide:h[M.side],_.alphaMap=M.alphaMap,_.alphaTest=M.alphaTest,_.map=M.map,_.clipShadows=M.clipShadows,_.clippingPlanes=M.clippingPlanes,_.clipIntersection=M.clipIntersection,_.displacementMap=M.displacementMap,_.displacementScale=M.displacementScale,_.displacementBias=M.displacementBias,_.wireframeLinewidth=M.wireframeLinewidth,_.linewidth=M.linewidth,A.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const I=n.properties.get(_);I.light=A}return _}function y(w,M,A,L,_){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&_===Xn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const U=t.update(w),N=w.material;if(Array.isArray(N)){const W=U.groups;for(let F=0,B=W.length;F<B;F++){const P=W[F],z=N[P.materialIndex];if(z&&z.visible){const H=S(w,z,L,_);w.onBeforeShadow(n,w,M,A,U,H,P),n.renderBufferDirect(A,null,U,H,w,P),w.onAfterShadow(n,w,M,A,U,H,P)}}}else if(N.visible){const W=S(w,N,L,_);w.onBeforeShadow(n,w,M,A,U,W,null),n.renderBufferDirect(A,null,U,W,w,null),w.onAfterShadow(n,w,M,A,U,W,null)}}const I=w.children;for(let U=0,N=I.length;U<N;U++)y(I[U],M,A,L,_)}function E(w){w.target.removeEventListener("dispose",E);for(const A in l){const L=l[A],_=w.target.uuid;_ in L&&(L[_].dispose(),delete L[_])}}}const iv={[cc]:lc,[uc]:fc,[hc]:pc,[Ar]:dc,[lc]:cc,[fc]:uc,[pc]:hc,[dc]:Ar};function rv(n){function t(){let O=!1;const pt=new de;let K=null;const et=new de(0,0,0,0);return{setMask:function(dt){K!==dt&&!O&&(n.colorMask(dt,dt,dt,dt),K=dt)},setLocked:function(dt){O=dt},setClear:function(dt,mt,qt,_e,Ge){Ge===!0&&(dt*=_e,mt*=_e,qt*=_e),pt.set(dt,mt,qt,_e),et.equals(pt)===!1&&(n.clearColor(dt,mt,qt,_e),et.copy(pt))},reset:function(){O=!1,K=null,et.set(-1,0,0,0)}}}function e(){let O=!1,pt=!1,K=null,et=null,dt=null;return{setReversed:function(mt){pt=mt},setTest:function(mt){mt?ct(n.DEPTH_TEST):st(n.DEPTH_TEST)},setMask:function(mt){K!==mt&&!O&&(n.depthMask(mt),K=mt)},setFunc:function(mt){if(pt&&(mt=iv[mt]),et!==mt){switch(mt){case cc:n.depthFunc(n.NEVER);break;case lc:n.depthFunc(n.ALWAYS);break;case uc:n.depthFunc(n.LESS);break;case Ar:n.depthFunc(n.LEQUAL);break;case hc:n.depthFunc(n.EQUAL);break;case dc:n.depthFunc(n.GEQUAL);break;case fc:n.depthFunc(n.GREATER);break;case pc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}et=mt}},setLocked:function(mt){O=mt},setClear:function(mt){dt!==mt&&(n.clearDepth(mt),dt=mt)},reset:function(){O=!1,K=null,et=null,dt=null}}}function i(){let O=!1,pt=null,K=null,et=null,dt=null,mt=null,qt=null,_e=null,Ge=null;return{setTest:function($t){O||($t?ct(n.STENCIL_TEST):st(n.STENCIL_TEST))},setMask:function($t){pt!==$t&&!O&&(n.stencilMask($t),pt=$t)},setFunc:function($t,He,zn){(K!==$t||et!==He||dt!==zn)&&(n.stencilFunc($t,He,zn),K=$t,et=He,dt=zn)},setOp:function($t,He,zn){(mt!==$t||qt!==He||_e!==zn)&&(n.stencilOp($t,He,zn),mt=$t,qt=He,_e=zn)},setLocked:function($t){O=$t},setClear:function($t){Ge!==$t&&(n.clearStencil($t),Ge=$t)},reset:function(){O=!1,pt=null,K=null,et=null,dt=null,mt=null,qt=null,_e=null,Ge=null}}}const r=new t,s=new e,o=new i,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,f=[],p=null,g=!1,x=null,d=null,m=null,b=null,S=null,y=null,E=null,w=new tt(0,0,0),M=0,A=!1,L=null,_=null,v=null,I=null,U=null;const N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,F=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(B)[1]),W=F>=1):B.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),W=F>=2);let P=null,z={};const H=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),rt=new de().fromArray(H),ht=new de().fromArray(j);function q(O,pt,K,et){const dt=new Uint8Array(4),mt=n.createTexture();n.bindTexture(O,mt),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qt=0;qt<K;qt++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(pt,0,n.RGBA,1,1,et,0,n.RGBA,n.UNSIGNED_BYTE,dt):n.texImage2D(pt+qt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,dt);return mt}const Z={};Z[n.TEXTURE_2D]=q(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ct(n.DEPTH_TEST),s.setFunc(Ar),kt(!1),Gt(Ql),ct(n.CULL_FACE),D(hi);function ct(O){l[O]!==!0&&(n.enable(O),l[O]=!0)}function st(O){l[O]!==!1&&(n.disable(O),l[O]=!1)}function bt(O,pt){return u[O]!==pt?(n.bindFramebuffer(O,pt),u[O]=pt,O===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=pt),O===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=pt),!0):!1}function St(O,pt){let K=f,et=!1;if(O){K=h.get(pt),K===void 0&&(K=[],h.set(pt,K));const dt=O.textures;if(K.length!==dt.length||K[0]!==n.COLOR_ATTACHMENT0){for(let mt=0,qt=dt.length;mt<qt;mt++)K[mt]=n.COLOR_ATTACHMENT0+mt;K.length=dt.length,et=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,et=!0);et&&n.drawBuffers(K)}function Dt(O){return p!==O?(n.useProgram(O),p=O,!0):!1}const Ft={[Di]:n.FUNC_ADD,[Sp]:n.FUNC_SUBTRACT,[yp]:n.FUNC_REVERSE_SUBTRACT};Ft[Ep]=n.MIN,Ft[bp]=n.MAX;const Ot={[Tp]:n.ZERO,[wp]:n.ONE,[Ap]:n.SRC_COLOR,[oc]:n.SRC_ALPHA,[Dp]:n.SRC_ALPHA_SATURATE,[Lp]:n.DST_COLOR,[Cp]:n.DST_ALPHA,[Rp]:n.ONE_MINUS_SRC_COLOR,[ac]:n.ONE_MINUS_SRC_ALPHA,[Ip]:n.ONE_MINUS_DST_COLOR,[Pp]:n.ONE_MINUS_DST_ALPHA,[Up]:n.CONSTANT_COLOR,[Np]:n.ONE_MINUS_CONSTANT_COLOR,[Fp]:n.CONSTANT_ALPHA,[Op]:n.ONE_MINUS_CONSTANT_ALPHA};function D(O,pt,K,et,dt,mt,qt,_e,Ge,$t){if(O===hi){g===!0&&(st(n.BLEND),g=!1);return}if(g===!1&&(ct(n.BLEND),g=!0),O!==Mp){if(O!==x||$t!==A){if((d!==Di||S!==Di)&&(n.blendEquation(n.FUNC_ADD),d=Di,S=Di),$t)switch(O){case Sr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case tu:n.blendFunc(n.ONE,n.ONE);break;case eu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Sr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case tu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case eu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}m=null,b=null,y=null,E=null,w.set(0,0,0),M=0,x=O,A=$t}return}dt=dt||pt,mt=mt||K,qt=qt||et,(pt!==d||dt!==S)&&(n.blendEquationSeparate(Ft[pt],Ft[dt]),d=pt,S=dt),(K!==m||et!==b||mt!==y||qt!==E)&&(n.blendFuncSeparate(Ot[K],Ot[et],Ot[mt],Ot[qt]),m=K,b=et,y=mt,E=qt),(_e.equals(w)===!1||Ge!==M)&&(n.blendColor(_e.r,_e.g,_e.b,Ge),w.copy(_e),M=Ge),x=O,A=!1}function ve(O,pt){O.side===he?st(n.CULL_FACE):ct(n.CULL_FACE);let K=O.side===Fe;pt&&(K=!K),kt(K),O.blending===Sr&&O.transparent===!1?D(hi):D(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),r.setMask(O.colorWrite);const et=O.stencilWrite;o.setTest(et),et&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ce(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ct(n.SAMPLE_ALPHA_TO_COVERAGE):st(n.SAMPLE_ALPHA_TO_COVERAGE)}function kt(O){L!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),L=O)}function Gt(O){O!==xp?(ct(n.CULL_FACE),O!==_&&(O===Ql?n.cullFace(n.BACK):O===vp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):st(n.CULL_FACE),_=O}function wt(O){O!==v&&(W&&n.lineWidth(O),v=O)}function ce(O,pt,K){O?(ct(n.POLYGON_OFFSET_FILL),(I!==pt||U!==K)&&(n.polygonOffset(pt,K),I=pt,U=K)):st(n.POLYGON_OFFSET_FILL)}function It(O){O?ct(n.SCISSOR_TEST):st(n.SCISSOR_TEST)}function C(O){O===void 0&&(O=n.TEXTURE0+N-1),P!==O&&(n.activeTexture(O),P=O)}function T(O,pt,K){K===void 0&&(P===null?K=n.TEXTURE0+N-1:K=P);let et=z[K];et===void 0&&(et={type:void 0,texture:void 0},z[K]=et),(et.type!==O||et.texture!==pt)&&(P!==K&&(n.activeTexture(K),P=K),n.bindTexture(O,pt||Z[O]),et.type=O,et.texture=pt)}function X(){const O=z[P];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function yt(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ut(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function gt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Yt(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _t(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pt(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Lt(O){rt.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),rt.copy(O))}function xt(O){ht.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),ht.copy(O))}function Wt(O,pt){let K=c.get(pt);K===void 0&&(K=new WeakMap,c.set(pt,K));let et=K.get(O);et===void 0&&(et=n.getUniformBlockIndex(pt,O.name),K.set(O,et))}function Ut(O,pt){const et=c.get(pt).get(O);a.get(pt)!==et&&(n.uniformBlockBinding(pt,et,O.__bindingPointIndex),a.set(pt,et))}function re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},P=null,z={},u={},h=new WeakMap,f=[],p=null,g=!1,x=null,d=null,m=null,b=null,S=null,y=null,E=null,w=new tt(0,0,0),M=0,A=!1,L=null,_=null,v=null,I=null,U=null,rt.set(0,0,n.canvas.width,n.canvas.height),ht.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ct,disable:st,bindFramebuffer:bt,drawBuffers:St,useProgram:Dt,setBlending:D,setMaterial:ve,setFlipSided:kt,setCullFace:Gt,setLineWidth:wt,setPolygonOffset:ce,setScissorTest:It,activeTexture:C,bindTexture:T,unbindTexture:X,compressedTexImage2D:Q,compressedTexImage3D:it,texImage2D:_t,texImage3D:Pt,updateUBOMapping:Wt,uniformBlockBinding:Ut,texStorage2D:Yt,texStorage3D:ot,texSubImage2D:J,texSubImage3D:yt,compressedTexSubImage2D:ut,compressedTexSubImage3D:gt,scissor:Lt,viewport:xt,reset:re}}function qu(n,t,e,i){const r=sv(i);switch(e){case Ed:return n*t;case Td:return n*t;case wd:return n*t*2;case fl:return n*t/r.components*r.byteLength;case pl:return n*t/r.components*r.byteLength;case Ad:return n*t*2/r.components*r.byteLength;case ml:return n*t*2/r.components*r.byteLength;case bd:return n*t*3/r.components*r.byteLength;case Tn:return n*t*4/r.components*r.byteLength;case gl:return n*t*4/r.components*r.byteLength;case mo:case go:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case _o:case xo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case vc:case Sc:return Math.max(n,16)*Math.max(t,8)/4;case xc:case Mc:return Math.max(n,8)*Math.max(t,8)/2;case yc:case Ec:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case bc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Tc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case wc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ac:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Rc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Cc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Pc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Lc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ic:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Dc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Nc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Fc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Oc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Bc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case vo:case zc:case kc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Rd:case Gc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Hc:case Vc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sv(n){switch(n){case jn:case Md:return{byteLength:1,components:1};case ds:case Sd:case vs:return{byteLength:2,components:1};case hl:case dl:return{byteLength:2,components:4};case Vi:case ul:case On:return{byteLength:4,components:1};case yd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function ov(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Kt,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,T){return p?new OffscreenCanvas(C,T):fs("canvas")}function x(C,T,X){let Q=1;const it=It(C);if((it.width>X||it.height>X)&&(Q=X/Math.max(it.width,it.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(Q*it.width),yt=Math.floor(Q*it.height);h===void 0&&(h=g(J,yt));const ut=T?g(J,yt):h;return ut.width=J,ut.height=yt,ut.getContext("2d").drawImage(C,0,0,J,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+J+"x"+yt+")."),ut}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),C;return C}function d(C){return C.generateMipmaps&&C.minFilter!==qe&&C.minFilter!==En}function m(C){n.generateMipmap(C)}function b(C,T,X,Q,it=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=T;if(T===n.RED&&(X===n.FLOAT&&(J=n.R32F),X===n.HALF_FLOAT&&(J=n.R16F),X===n.UNSIGNED_BYTE&&(J=n.R8)),T===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(J=n.R8UI),X===n.UNSIGNED_SHORT&&(J=n.R16UI),X===n.UNSIGNED_INT&&(J=n.R32UI),X===n.BYTE&&(J=n.R8I),X===n.SHORT&&(J=n.R16I),X===n.INT&&(J=n.R32I)),T===n.RG&&(X===n.FLOAT&&(J=n.RG32F),X===n.HALF_FLOAT&&(J=n.RG16F),X===n.UNSIGNED_BYTE&&(J=n.RG8)),T===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(J=n.RG8UI),X===n.UNSIGNED_SHORT&&(J=n.RG16UI),X===n.UNSIGNED_INT&&(J=n.RG32UI),X===n.BYTE&&(J=n.RG8I),X===n.SHORT&&(J=n.RG16I),X===n.INT&&(J=n.RG32I)),T===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(J=n.RGB8UI),X===n.UNSIGNED_SHORT&&(J=n.RGB16UI),X===n.UNSIGNED_INT&&(J=n.RGB32UI),X===n.BYTE&&(J=n.RGB8I),X===n.SHORT&&(J=n.RGB16I),X===n.INT&&(J=n.RGB32I)),T===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),X===n.UNSIGNED_INT&&(J=n.RGBA32UI),X===n.BYTE&&(J=n.RGBA8I),X===n.SHORT&&(J=n.RGBA16I),X===n.INT&&(J=n.RGBA32I)),T===n.RGB&&X===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),T===n.RGBA){const yt=it?Oo:Jt.getTransfer(Q);X===n.FLOAT&&(J=n.RGBA32F),X===n.HALF_FLOAT&&(J=n.RGBA16F),X===n.UNSIGNED_BYTE&&(J=yt===ue?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function S(C,T){let X;return C?T===null||T===Vi||T===Pr?X=n.DEPTH24_STENCIL8:T===On?X=n.DEPTH32F_STENCIL8:T===ds&&(X=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Vi||T===Pr?X=n.DEPTH_COMPONENT24:T===On?X=n.DEPTH_COMPONENT32F:T===ds&&(X=n.DEPTH_COMPONENT16),X}function y(C,T){return d(C)===!0||C.isFramebufferTexture&&C.minFilter!==qe&&C.minFilter!==En?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function E(C){const T=C.target;T.removeEventListener("dispose",E),M(T),T.isVideoTexture&&u.delete(T)}function w(C){const T=C.target;T.removeEventListener("dispose",w),L(T)}function M(C){const T=i.get(C);if(T.__webglInit===void 0)return;const X=C.source,Q=f.get(X);if(Q){const it=Q[T.__cacheKey];it.usedTimes--,it.usedTimes===0&&A(C),Object.keys(Q).length===0&&f.delete(X)}i.remove(C)}function A(C){const T=i.get(C);n.deleteTexture(T.__webglTexture);const X=C.source,Q=f.get(X);delete Q[T.__cacheKey],o.memory.textures--}function L(C){const T=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(T.__webglFramebuffer[Q]))for(let it=0;it<T.__webglFramebuffer[Q].length;it++)n.deleteFramebuffer(T.__webglFramebuffer[Q][it]);else n.deleteFramebuffer(T.__webglFramebuffer[Q]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[Q])}else{if(Array.isArray(T.__webglFramebuffer))for(let Q=0;Q<T.__webglFramebuffer.length;Q++)n.deleteFramebuffer(T.__webglFramebuffer[Q]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Q=0;Q<T.__webglColorRenderbuffer.length;Q++)T.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[Q]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const X=C.textures;for(let Q=0,it=X.length;Q<it;Q++){const J=i.get(X[Q]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(X[Q])}i.remove(C)}let _=0;function v(){_=0}function I(){const C=_;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),_+=1,C}function U(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function N(C,T){const X=i.get(C);if(C.isVideoTexture&&wt(C),C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(X,C,T);return}}e.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+T)}function W(C,T){const X=i.get(C);if(C.version>0&&X.__version!==C.version){ht(X,C,T);return}e.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+T)}function F(C,T){const X=i.get(C);if(C.version>0&&X.__version!==C.version){ht(X,C,T);return}e.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+T)}function B(C,T){const X=i.get(C);if(C.version>0&&X.__version!==C.version){q(X,C,T);return}e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+T)}const P={[Fo]:n.REPEAT,[Oi]:n.CLAMP_TO_EDGE,[_c]:n.MIRRORED_REPEAT},z={[qe]:n.NEAREST,[qp]:n.NEAREST_MIPMAP_NEAREST,[Ns]:n.NEAREST_MIPMAP_LINEAR,[En]:n.LINEAR,[ca]:n.LINEAR_MIPMAP_NEAREST,[Bi]:n.LINEAR_MIPMAP_LINEAR},H={[Kp]:n.NEVER,[em]:n.ALWAYS,[jp]:n.LESS,[Ld]:n.LEQUAL,[Zp]:n.EQUAL,[tm]:n.GEQUAL,[Jp]:n.GREATER,[Qp]:n.NOTEQUAL};function j(C,T){if(T.type===On&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===En||T.magFilter===ca||T.magFilter===Ns||T.magFilter===Bi||T.minFilter===En||T.minFilter===ca||T.minFilter===Ns||T.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,P[T.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,P[T.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,P[T.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,z[T.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,z[T.minFilter]),T.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,H[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===qe||T.minFilter!==Ns&&T.minFilter!==Bi||T.type===On&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function rt(C,T){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",E));const Q=T.source;let it=f.get(Q);it===void 0&&(it={},f.set(Q,it));const J=U(T);if(J!==C.__cacheKey){it[J]===void 0&&(it[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),it[J].usedTimes++;const yt=it[C.__cacheKey];yt!==void 0&&(it[C.__cacheKey].usedTimes--,yt.usedTimes===0&&A(T)),C.__cacheKey=J,C.__webglTexture=it[J].texture}return X}function ht(C,T,X){let Q=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Q=n.TEXTURE_3D);const it=rt(C,T),J=T.source;e.bindTexture(Q,C.__webglTexture,n.TEXTURE0+X);const yt=i.get(J);if(J.version!==yt.__version||it===!0){e.activeTexture(n.TEXTURE0+X);const ut=Jt.getPrimaries(Jt.workingColorSpace),gt=T.colorSpace===li?null:Jt.getPrimaries(T.colorSpace),Yt=T.colorSpace===li||ut===gt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let ot=x(T.image,!1,r.maxTextureSize);ot=ce(T,ot);const _t=s.convert(T.format,T.colorSpace),Pt=s.convert(T.type);let Lt=b(T.internalFormat,_t,Pt,T.colorSpace,T.isVideoTexture);j(Q,T);let xt;const Wt=T.mipmaps,Ut=T.isVideoTexture!==!0,re=yt.__version===void 0||it===!0,O=J.dataReady,pt=y(T,ot);if(T.isDepthTexture)Lt=S(T.format===Lr,T.type),re&&(Ut?e.texStorage2D(n.TEXTURE_2D,1,Lt,ot.width,ot.height):e.texImage2D(n.TEXTURE_2D,0,Lt,ot.width,ot.height,0,_t,Pt,null));else if(T.isDataTexture)if(Wt.length>0){Ut&&re&&e.texStorage2D(n.TEXTURE_2D,pt,Lt,Wt[0].width,Wt[0].height);for(let K=0,et=Wt.length;K<et;K++)xt=Wt[K],Ut?O&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,xt.width,xt.height,_t,Pt,xt.data):e.texImage2D(n.TEXTURE_2D,K,Lt,xt.width,xt.height,0,_t,Pt,xt.data);T.generateMipmaps=!1}else Ut?(re&&e.texStorage2D(n.TEXTURE_2D,pt,Lt,ot.width,ot.height),O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ot.width,ot.height,_t,Pt,ot.data)):e.texImage2D(n.TEXTURE_2D,0,Lt,ot.width,ot.height,0,_t,Pt,ot.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ut&&re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,pt,Lt,Wt[0].width,Wt[0].height,ot.depth);for(let K=0,et=Wt.length;K<et;K++)if(xt=Wt[K],T.format!==Tn)if(_t!==null)if(Ut){if(O)if(T.layerUpdates.size>0){const dt=qu(xt.width,xt.height,T.format,T.type);for(const mt of T.layerUpdates){const qt=xt.data.subarray(mt*dt/xt.data.BYTES_PER_ELEMENT,(mt+1)*dt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,mt,xt.width,xt.height,1,_t,qt,0,0)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,xt.width,xt.height,ot.depth,_t,xt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,Lt,xt.width,xt.height,ot.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?O&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,xt.width,xt.height,ot.depth,_t,Pt,xt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,K,Lt,xt.width,xt.height,ot.depth,0,_t,Pt,xt.data)}else{Ut&&re&&e.texStorage2D(n.TEXTURE_2D,pt,Lt,Wt[0].width,Wt[0].height);for(let K=0,et=Wt.length;K<et;K++)xt=Wt[K],T.format!==Tn?_t!==null?Ut?O&&e.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,xt.width,xt.height,_t,xt.data):e.compressedTexImage2D(n.TEXTURE_2D,K,Lt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?O&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,xt.width,xt.height,_t,Pt,xt.data):e.texImage2D(n.TEXTURE_2D,K,Lt,xt.width,xt.height,0,_t,Pt,xt.data)}else if(T.isDataArrayTexture)if(Ut){if(re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,pt,Lt,ot.width,ot.height,ot.depth),O)if(T.layerUpdates.size>0){const K=qu(ot.width,ot.height,T.format,T.type);for(const et of T.layerUpdates){const dt=ot.data.subarray(et*K/ot.data.BYTES_PER_ELEMENT,(et+1)*K/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,et,ot.width,ot.height,1,_t,Pt,dt)}T.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,_t,Pt,ot.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Lt,ot.width,ot.height,ot.depth,0,_t,Pt,ot.data);else if(T.isData3DTexture)Ut?(re&&e.texStorage3D(n.TEXTURE_3D,pt,Lt,ot.width,ot.height,ot.depth),O&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,_t,Pt,ot.data)):e.texImage3D(n.TEXTURE_3D,0,Lt,ot.width,ot.height,ot.depth,0,_t,Pt,ot.data);else if(T.isFramebufferTexture){if(re)if(Ut)e.texStorage2D(n.TEXTURE_2D,pt,Lt,ot.width,ot.height);else{let K=ot.width,et=ot.height;for(let dt=0;dt<pt;dt++)e.texImage2D(n.TEXTURE_2D,dt,Lt,K,et,0,_t,Pt,null),K>>=1,et>>=1}}else if(Wt.length>0){if(Ut&&re){const K=It(Wt[0]);e.texStorage2D(n.TEXTURE_2D,pt,Lt,K.width,K.height)}for(let K=0,et=Wt.length;K<et;K++)xt=Wt[K],Ut?O&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,_t,Pt,xt):e.texImage2D(n.TEXTURE_2D,K,Lt,_t,Pt,xt);T.generateMipmaps=!1}else if(Ut){if(re){const K=It(ot);e.texStorage2D(n.TEXTURE_2D,pt,Lt,K.width,K.height)}O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,_t,Pt,ot)}else e.texImage2D(n.TEXTURE_2D,0,Lt,_t,Pt,ot);d(T)&&m(Q),yt.__version=J.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function q(C,T,X){if(T.image.length!==6)return;const Q=rt(C,T),it=T.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+X);const J=i.get(it);if(it.version!==J.__version||Q===!0){e.activeTexture(n.TEXTURE0+X);const yt=Jt.getPrimaries(Jt.workingColorSpace),ut=T.colorSpace===li?null:Jt.getPrimaries(T.colorSpace),gt=T.colorSpace===li||yt===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Yt=T.isCompressedTexture||T.image[0].isCompressedTexture,ot=T.image[0]&&T.image[0].isDataTexture,_t=[];for(let et=0;et<6;et++)!Yt&&!ot?_t[et]=x(T.image[et],!0,r.maxCubemapSize):_t[et]=ot?T.image[et].image:T.image[et],_t[et]=ce(T,_t[et]);const Pt=_t[0],Lt=s.convert(T.format,T.colorSpace),xt=s.convert(T.type),Wt=b(T.internalFormat,Lt,xt,T.colorSpace),Ut=T.isVideoTexture!==!0,re=J.__version===void 0||Q===!0,O=it.dataReady;let pt=y(T,Pt);j(n.TEXTURE_CUBE_MAP,T);let K;if(Yt){Ut&&re&&e.texStorage2D(n.TEXTURE_CUBE_MAP,pt,Wt,Pt.width,Pt.height);for(let et=0;et<6;et++){K=_t[et].mipmaps;for(let dt=0;dt<K.length;dt++){const mt=K[dt];T.format!==Tn?Lt!==null?Ut?O&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,dt,0,0,mt.width,mt.height,Lt,mt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,dt,Wt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,dt,0,0,mt.width,mt.height,Lt,xt,mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,dt,Wt,mt.width,mt.height,0,Lt,xt,mt.data)}}}else{if(K=T.mipmaps,Ut&&re){K.length>0&&pt++;const et=It(_t[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,pt,Wt,et.width,et.height)}for(let et=0;et<6;et++)if(ot){Ut?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,_t[et].width,_t[et].height,Lt,xt,_t[et].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Wt,_t[et].width,_t[et].height,0,Lt,xt,_t[et].data);for(let dt=0;dt<K.length;dt++){const qt=K[dt].image[et].image;Ut?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,dt+1,0,0,qt.width,qt.height,Lt,xt,qt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,dt+1,Wt,qt.width,qt.height,0,Lt,xt,qt.data)}}else{Ut?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Lt,xt,_t[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Wt,Lt,xt,_t[et]);for(let dt=0;dt<K.length;dt++){const mt=K[dt];Ut?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,dt+1,0,0,Lt,xt,mt.image[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,dt+1,Wt,Lt,xt,mt.image[et])}}}d(T)&&m(n.TEXTURE_CUBE_MAP),J.__version=it.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function Z(C,T,X,Q,it,J){const yt=s.convert(X.format,X.colorSpace),ut=s.convert(X.type),gt=b(X.internalFormat,yt,ut,X.colorSpace);if(!i.get(T).__hasExternalTextures){const ot=Math.max(1,T.width>>J),_t=Math.max(1,T.height>>J);it===n.TEXTURE_3D||it===n.TEXTURE_2D_ARRAY?e.texImage3D(it,J,gt,ot,_t,T.depth,0,yt,ut,null):e.texImage2D(it,J,gt,ot,_t,0,yt,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),Gt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,it,i.get(X).__webglTexture,0,kt(T)):(it===n.TEXTURE_2D||it>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,it,i.get(X).__webglTexture,J),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ct(C,T,X){if(n.bindRenderbuffer(n.RENDERBUFFER,C),T.depthBuffer){const Q=T.depthTexture,it=Q&&Q.isDepthTexture?Q.type:null,J=S(T.stencilBuffer,it),yt=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=kt(T);Gt(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,J,T.width,T.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,J,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,J,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,yt,n.RENDERBUFFER,C)}else{const Q=T.textures;for(let it=0;it<Q.length;it++){const J=Q[it],yt=s.convert(J.format,J.colorSpace),ut=s.convert(J.type),gt=b(J.internalFormat,yt,ut,J.colorSpace),Yt=kt(T);X&&Gt(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Yt,gt,T.width,T.height):Gt(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Yt,gt,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,gt,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function st(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),N(T.depthTexture,0);const Q=i.get(T.depthTexture).__webglTexture,it=kt(T);if(T.depthTexture.format===yr)Gt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(T.depthTexture.format===Lr)Gt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function bt(C){const T=i.get(C),X=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){const Q=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Q){const it=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Q.removeEventListener("dispose",it)};Q.addEventListener("dispose",it),T.__depthDisposeCallback=it}T.__boundDepthTexture=Q}if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");st(T.__webglFramebuffer,C)}else if(X){T.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[Q]),T.__webglDepthbuffer[Q]===void 0)T.__webglDepthbuffer[Q]=n.createRenderbuffer(),ct(T.__webglDepthbuffer[Q],C,!1);else{const it=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=T.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,J)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),ct(T.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,it),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,it)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function St(C,T,X){const Q=i.get(C);T!==void 0&&Z(Q.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&bt(C)}function Dt(C){const T=C.texture,X=i.get(C),Q=i.get(T);C.addEventListener("dispose",w);const it=C.textures,J=C.isWebGLCubeRenderTarget===!0,yt=it.length>1;if(yt||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=T.version,o.memory.textures++),J){X.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer[ut]=[];for(let gt=0;gt<T.mipmaps.length;gt++)X.__webglFramebuffer[ut][gt]=n.createFramebuffer()}else X.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer=[];for(let ut=0;ut<T.mipmaps.length;ut++)X.__webglFramebuffer[ut]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(yt)for(let ut=0,gt=it.length;ut<gt;ut++){const Yt=i.get(it[ut]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&Gt(C)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ut=0;ut<it.length;ut++){const gt=it[ut];X.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[ut]);const Yt=s.convert(gt.format,gt.colorSpace),ot=s.convert(gt.type),_t=b(gt.internalFormat,Yt,ot,gt.colorSpace,C.isXRRenderTarget===!0),Pt=kt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,_t,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,X.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),ct(X.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),j(n.TEXTURE_CUBE_MAP,T);for(let ut=0;ut<6;ut++)if(T.mipmaps&&T.mipmaps.length>0)for(let gt=0;gt<T.mipmaps.length;gt++)Z(X.__webglFramebuffer[ut][gt],C,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,gt);else Z(X.__webglFramebuffer[ut],C,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);d(T)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let ut=0,gt=it.length;ut<gt;ut++){const Yt=it[ut],ot=i.get(Yt);e.bindTexture(n.TEXTURE_2D,ot.__webglTexture),j(n.TEXTURE_2D,Yt),Z(X.__webglFramebuffer,C,Yt,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,0),d(Yt)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ut=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,Q.__webglTexture),j(ut,T),T.mipmaps&&T.mipmaps.length>0)for(let gt=0;gt<T.mipmaps.length;gt++)Z(X.__webglFramebuffer[gt],C,T,n.COLOR_ATTACHMENT0,ut,gt);else Z(X.__webglFramebuffer,C,T,n.COLOR_ATTACHMENT0,ut,0);d(T)&&m(ut),e.unbindTexture()}C.depthBuffer&&bt(C)}function Ft(C){const T=C.textures;for(let X=0,Q=T.length;X<Q;X++){const it=T[X];if(d(it)){const J=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,yt=i.get(it).__webglTexture;e.bindTexture(J,yt),m(J),e.unbindTexture()}}}const Ot=[],D=[];function ve(C){if(C.samples>0){if(Gt(C)===!1){const T=C.textures,X=C.width,Q=C.height;let it=n.COLOR_BUFFER_BIT;const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,yt=i.get(C),ut=T.length>1;if(ut)for(let gt=0;gt<T.length;gt++)e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let gt=0;gt<T.length;gt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(it|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(it|=n.STENCIL_BUFFER_BIT)),ut){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,yt.__webglColorRenderbuffer[gt]);const Yt=i.get(T[gt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Yt,0)}n.blitFramebuffer(0,0,X,Q,0,0,X,Q,it,n.NEAREST),c===!0&&(Ot.length=0,D.length=0,Ot.push(n.COLOR_ATTACHMENT0+gt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ot.push(J),D.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ot))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let gt=0;gt<T.length;gt++){e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,yt.__webglColorRenderbuffer[gt]);const Yt=i.get(T[gt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,Yt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const T=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function kt(C){return Math.min(r.maxSamples,C.samples)}function Gt(C){const T=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function wt(C){const T=o.render.frame;u.get(C)!==T&&(u.set(C,T),C.update())}function ce(C,T){const X=C.colorSpace,Q=C.format,it=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||X!==vi&&X!==li&&(Jt.getTransfer(X)===ue?(Q!==Tn||it!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),T}function It(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=v,this.setTexture2D=N,this.setTexture2DArray=W,this.setTexture3D=F,this.setTextureCube=B,this.rebindTextures=St,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=Gt}function av(n,t){function e(i,r=li){let s;const o=Jt.getTransfer(r);if(i===jn)return n.UNSIGNED_BYTE;if(i===hl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===dl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===yd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Md)return n.BYTE;if(i===Sd)return n.SHORT;if(i===ds)return n.UNSIGNED_SHORT;if(i===ul)return n.INT;if(i===Vi)return n.UNSIGNED_INT;if(i===On)return n.FLOAT;if(i===vs)return n.HALF_FLOAT;if(i===Ed)return n.ALPHA;if(i===bd)return n.RGB;if(i===Tn)return n.RGBA;if(i===Td)return n.LUMINANCE;if(i===wd)return n.LUMINANCE_ALPHA;if(i===yr)return n.DEPTH_COMPONENT;if(i===Lr)return n.DEPTH_STENCIL;if(i===fl)return n.RED;if(i===pl)return n.RED_INTEGER;if(i===Ad)return n.RG;if(i===ml)return n.RG_INTEGER;if(i===gl)return n.RGBA_INTEGER;if(i===mo||i===go||i===_o||i===xo)if(o===ue)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===mo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===mo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===go)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_o)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xc||i===vc||i===Mc||i===Sc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===xc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yc||i===Ec||i===bc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===yc||i===Ec)return o===ue?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===bc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Tc||i===wc||i===Ac||i===Rc||i===Cc||i===Pc||i===Lc||i===Ic||i===Dc||i===Uc||i===Nc||i===Fc||i===Oc||i===Bc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Tc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ac)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ic)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Dc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Oc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vo||i===zc||i===kc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===vo)return o===ue?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rd||i===Gc||i===Hc||i===Vc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===vo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Gc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class cv extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class be extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lv={type:"move"};class Ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const d=e.getJointPose(x,i),m=this._getHandJoint(l,x);d!==null&&(m.matrix.fromArray(d.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=d.radius),m.visible=d!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lv)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new be;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const uv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hv=`
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

}`;class dv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Ie,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new gi({vertexShader:uv,fragmentShader:hv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Vt(new Ko(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fv extends Nr{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,g=null;const x=new dv,d=e.getContextAttributes();let m=null,b=null;const S=[],y=[],E=new Kt;let w=null;const M=new ln;M.layers.enable(1),M.viewport=new de;const A=new ln;A.layers.enable(2),A.viewport=new de;const L=[M,A],_=new cv;_.layers.enable(1),_.layers.enable(2);let v=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=S[q];return Z===void 0&&(Z=new Ba,S[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=S[q];return Z===void 0&&(Z=new Ba,S[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=S[q];return Z===void 0&&(Z=new Ba,S[q]=Z),Z.getHandSpace()};function U(q){const Z=y.indexOf(q.inputSource);if(Z===-1)return;const ct=S[Z];ct!==void 0&&(ct.update(q.inputSource,q.frame,l||o),ct.dispatchEvent({type:q.type,data:q.inputSource}))}function N(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",W);for(let q=0;q<S.length;q++){const Z=y[q];Z!==null&&(y[q]=null,S[q].disconnect(Z))}v=null,I=null,x.reset(),t.setRenderTarget(m),p=null,f=null,h=null,r=null,b=null,ht.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",N),r.addEventListener("inputsourceschange",W),d.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(E),r.renderState.layers===void 0){const Z={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,Z),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Wi(p.framebufferWidth,p.framebufferHeight,{format:Tn,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let Z=null,ct=null,st=null;d.depth&&(st=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=d.stencil?Lr:yr,ct=d.stencil?Pr:Vi);const bt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:s};h=new XRWebGLBinding(r,e),f=h.createProjectionLayer(bt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new Wi(f.textureWidth,f.textureHeight,{format:Tn,type:jn,depthTexture:new Wd(f.textureWidth,f.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),ht.setContext(r),ht.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function W(q){for(let Z=0;Z<q.removed.length;Z++){const ct=q.removed[Z],st=y.indexOf(ct);st>=0&&(y[st]=null,S[st].disconnect(ct))}for(let Z=0;Z<q.added.length;Z++){const ct=q.added[Z];let st=y.indexOf(ct);if(st===-1){for(let St=0;St<S.length;St++)if(St>=y.length){y.push(ct),st=St;break}else if(y[St]===null){y[St]=ct,st=St;break}if(st===-1)break}const bt=S[st];bt&&bt.connect(ct)}}const F=new V,B=new V;function P(q,Z,ct){F.setFromMatrixPosition(Z.matrixWorld),B.setFromMatrixPosition(ct.matrixWorld);const st=F.distanceTo(B),bt=Z.projectionMatrix.elements,St=ct.projectionMatrix.elements,Dt=bt[14]/(bt[10]-1),Ft=bt[14]/(bt[10]+1),Ot=(bt[9]+1)/bt[5],D=(bt[9]-1)/bt[5],ve=(bt[8]-1)/bt[0],kt=(St[8]+1)/St[0],Gt=Dt*ve,wt=Dt*kt,ce=st/(-ve+kt),It=ce*-ve;if(Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(It),q.translateZ(ce),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),bt[10]===-1)q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const C=Dt+ce,T=Ft+ce,X=Gt-It,Q=wt+(st-It),it=Ot*Ft/T*C,J=D*Ft/T*C;q.projectionMatrix.makePerspective(X,Q,it,J,C,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function z(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let Z=q.near,ct=q.far;x.texture!==null&&(x.depthNear>0&&(Z=x.depthNear),x.depthFar>0&&(ct=x.depthFar)),_.near=A.near=M.near=Z,_.far=A.far=M.far=ct,(v!==_.near||I!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),v=_.near,I=_.far);const st=q.parent,bt=_.cameras;z(_,st);for(let St=0;St<bt.length;St++)z(bt[St],st);bt.length===2?P(_,M,A):_.projectionMatrix.copy(M.projectionMatrix),H(q,_,st)};function H(q,Z,ct){ct===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(ct.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Wc*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let j=null;function rt(q,Z){if(u=Z.getViewerPose(l||o),g=Z,u!==null){const ct=u.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let st=!1;ct.length!==_.cameras.length&&(_.cameras.length=0,st=!0);for(let St=0;St<ct.length;St++){const Dt=ct[St];let Ft=null;if(p!==null)Ft=p.getViewport(Dt);else{const D=h.getViewSubImage(f,Dt);Ft=D.viewport,St===0&&(t.setRenderTargetTextures(b,D.colorTexture,f.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(b))}let Ot=L[St];Ot===void 0&&(Ot=new ln,Ot.layers.enable(St),Ot.viewport=new de,L[St]=Ot),Ot.matrix.fromArray(Dt.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(Dt.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),St===0&&(_.matrix.copy(Ot.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),st===!0&&_.cameras.push(Ot)}const bt=r.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const St=h.getDepthInformation(ct[0]);St&&St.isValid&&St.texture&&x.init(t,St,r.renderState)}}for(let ct=0;ct<S.length;ct++){const st=y[ct],bt=S[ct];st!==null&&bt!==void 0&&bt.update(st,Z,l||o)}j&&j(q,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const ht=new Hd;ht.setAnimationLoop(rt),this.setAnimationLoop=function(q){j=q},this.dispose=function(){}}}const Ri=new An,pv=new ee;function mv(n,t){function e(d,m){d.matrixAutoUpdate===!0&&d.updateMatrix(),m.value.copy(d.matrix)}function i(d,m){m.color.getRGB(d.fogColor.value,zd(n)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function r(d,m,b,S,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(d,m):m.isMeshToonMaterial?(s(d,m),h(d,m)):m.isMeshPhongMaterial?(s(d,m),u(d,m)):m.isMeshStandardMaterial?(s(d,m),f(d,m),m.isMeshPhysicalMaterial&&p(d,m,y)):m.isMeshMatcapMaterial?(s(d,m),g(d,m)):m.isMeshDepthMaterial?s(d,m):m.isMeshDistanceMaterial?(s(d,m),x(d,m)):m.isMeshNormalMaterial?s(d,m):m.isLineBasicMaterial?(o(d,m),m.isLineDashedMaterial&&a(d,m)):m.isPointsMaterial?c(d,m,b,S):m.isSpriteMaterial?l(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map,e(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.bumpMap&&(d.bumpMap.value=m.bumpMap,e(m.bumpMap,d.bumpMapTransform),d.bumpScale.value=m.bumpScale,m.side===Fe&&(d.bumpScale.value*=-1)),m.normalMap&&(d.normalMap.value=m.normalMap,e(m.normalMap,d.normalMapTransform),d.normalScale.value.copy(m.normalScale),m.side===Fe&&d.normalScale.value.negate()),m.displacementMap&&(d.displacementMap.value=m.displacementMap,e(m.displacementMap,d.displacementMapTransform),d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,d.emissiveMapTransform)),m.specularMap&&(d.specularMap.value=m.specularMap,e(m.specularMap,d.specularMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const b=t.get(m),S=b.envMap,y=b.envMapRotation;S&&(d.envMap.value=S,Ri.copy(y),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),d.envMapRotation.value.setFromMatrix4(pv.makeRotationFromEuler(Ri)),d.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap&&(d.lightMap.value=m.lightMap,d.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,d.lightMapTransform)),m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,d.aoMapTransform))}function o(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map&&(d.map.value=m.map,e(m.map,d.mapTransform))}function a(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function c(d,m,b,S){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*b,d.scale.value=S*.5,m.map&&(d.map.value=m.map,e(m.map,d.uvTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function l(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map,e(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function u(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function h(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function f(d,m){d.metalness.value=m.metalness,m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,d.metalnessMapTransform)),d.roughness.value=m.roughness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,d.roughnessMapTransform)),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function p(d,m,b){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,d.sheenColorMapTransform)),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,d.sheenRoughnessMapTransform))),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,d.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(d.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Fe&&d.clearcoatNormalScale.value.negate())),m.dispersion>0&&(d.dispersion.value=m.dispersion),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,d.iridescenceMapTransform)),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=b.texture,d.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,d.transmissionMapTransform)),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(d.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,d.specularColorMapTransform)),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,m){m.matcap&&(d.matcap.value=m.matcap)}function x(d,m){const b=t.get(m).light;d.referencePosition.value.setFromMatrixPosition(b.matrixWorld),d.nearDistance.value=b.shadow.camera.near,d.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function gv(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,S){const y=S.program;i.uniformBlockBinding(b,y)}function l(b,S){let y=r[b.id];y===void 0&&(g(b),y=u(b),r[b.id]=y,b.addEventListener("dispose",d));const E=S.program;i.updateUBOMapping(b,E);const w=t.render.frame;s[b.id]!==w&&(f(b),s[b.id]=w)}function u(b){const S=h();b.__bindingPointIndex=S;const y=n.createBuffer(),E=b.__size,w=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,E,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,y),y}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const S=r[b.id],y=b.uniforms,E=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let w=0,M=y.length;w<M;w++){const A=Array.isArray(y[w])?y[w]:[y[w]];for(let L=0,_=A.length;L<_;L++){const v=A[L];if(p(v,w,L,E)===!0){const I=v.__offset,U=Array.isArray(v.value)?v.value:[v.value];let N=0;for(let W=0;W<U.length;W++){const F=U[W],B=x(F);typeof F=="number"||typeof F=="boolean"?(v.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,I+N,v.__data)):F.isMatrix3?(v.__data[0]=F.elements[0],v.__data[1]=F.elements[1],v.__data[2]=F.elements[2],v.__data[3]=0,v.__data[4]=F.elements[3],v.__data[5]=F.elements[4],v.__data[6]=F.elements[5],v.__data[7]=0,v.__data[8]=F.elements[6],v.__data[9]=F.elements[7],v.__data[10]=F.elements[8],v.__data[11]=0):(F.toArray(v.__data,N),N+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,v.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,S,y,E){const w=b.value,M=S+"_"+y;if(E[M]===void 0)return typeof w=="number"||typeof w=="boolean"?E[M]=w:E[M]=w.clone(),!0;{const A=E[M];if(typeof w=="number"||typeof w=="boolean"){if(A!==w)return E[M]=w,!0}else if(A.equals(w)===!1)return A.copy(w),!0}return!1}function g(b){const S=b.uniforms;let y=0;const E=16;for(let M=0,A=S.length;M<A;M++){const L=Array.isArray(S[M])?S[M]:[S[M]];for(let _=0,v=L.length;_<v;_++){const I=L[_],U=Array.isArray(I.value)?I.value:[I.value];for(let N=0,W=U.length;N<W;N++){const F=U[N],B=x(F),P=y%E,z=P%B.boundary,H=P+z;y+=z,H!==0&&E-H<B.storage&&(y+=E-H),I.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=B.storage}}}const w=y%E;return w>0&&(y+=E-w),b.__size=y,b.__cache={},this}function x(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function d(b){const S=b.target;S.removeEventListener("dispose",d);const y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function m(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:c,update:l,dispose:m}}class _v{constructor(t={}){const{canvas:e=rm(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),g=new Int32Array(4);let x=null,d=null;const m=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this.toneMapping=di,this.toneMappingExposure=1;const S=this;let y=!1,E=0,w=0,M=null,A=-1,L=null;const _=new de,v=new de;let I=null;const U=new tt(0);let N=0,W=e.width,F=e.height,B=1,P=null,z=null;const H=new de(0,0,W,F),j=new de(0,0,W,F);let rt=!1;const ht=new xl;let q=!1,Z=!1;const ct=new ee,st=new ee,bt=new V,St=new de,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function Ot(){return M===null?B:1}let D=i;function ve(R,k){return e.getContext(R,k)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ll}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),D===null){const k="webgl2";if(D=ve(k,R),D===null)throw ve(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let kt,Gt,wt,ce,It,C,T,X,Q,it,J,yt,ut,gt,Yt,ot,_t,Pt,Lt,xt,Wt,Ut,re,O;function pt(){kt=new E_(D),kt.init(),Ut=new av(D,kt),Gt=new __(D,kt,t,Ut),wt=new rv(D),Gt.reverseDepthBuffer&&wt.buffers.depth.setReversed(!0),ce=new w_(D),It=new Wx,C=new ov(D,kt,wt,It,Gt,Ut,ce),T=new v_(S),X=new y_(S),Q=new Dm(D),re=new m_(D,Q),it=new b_(D,Q,ce,re),J=new R_(D,it,Q,ce),Lt=new A_(D,Gt,C),ot=new x_(It),yt=new Vx(S,T,X,kt,Gt,re,ot),ut=new mv(S,It),gt=new qx,Yt=new Jx(kt),Pt=new p_(S,T,X,wt,J,f,c),_t=new nv(S,J,Gt),O=new gv(D,ce,Gt,wt),xt=new g_(D,kt,ce),Wt=new T_(D,kt,ce),ce.programs=yt.programs,S.capabilities=Gt,S.extensions=kt,S.properties=It,S.renderLists=gt,S.shadowMap=_t,S.state=wt,S.info=ce}pt();const K=new fv(S,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const R=kt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=kt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(R){R!==void 0&&(B=R,this.setSize(W,F,!1))},this.getSize=function(R){return R.set(W,F)},this.setSize=function(R,k,Y=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=R,F=k,e.width=Math.floor(R*B),e.height=Math.floor(k*B),Y===!0&&(e.style.width=R+"px",e.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(W*B,F*B).floor()},this.setDrawingBufferSize=function(R,k,Y){W=R,F=k,B=Y,e.width=Math.floor(R*Y),e.height=Math.floor(k*Y),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(_)},this.getViewport=function(R){return R.copy(H)},this.setViewport=function(R,k,Y,$){R.isVector4?H.set(R.x,R.y,R.z,R.w):H.set(R,k,Y,$),wt.viewport(_.copy(H).multiplyScalar(B).round())},this.getScissor=function(R){return R.copy(j)},this.setScissor=function(R,k,Y,$){R.isVector4?j.set(R.x,R.y,R.z,R.w):j.set(R,k,Y,$),wt.scissor(v.copy(j).multiplyScalar(B).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(R){wt.setScissorTest(rt=R)},this.setOpaqueSort=function(R){P=R},this.setTransparentSort=function(R){z=R},this.getClearColor=function(R){return R.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(R=!0,k=!0,Y=!0){let $=0;if(R){let G=!1;if(M!==null){const at=M.texture.format;G=at===gl||at===ml||at===pl}if(G){const at=M.texture.type,ft=at===jn||at===Vi||at===ds||at===Pr||at===hl||at===dl,vt=Pt.getClearColor(),Mt=Pt.getClearAlpha(),At=vt.r,Rt=vt.g,Et=vt.b;ft?(p[0]=At,p[1]=Rt,p[2]=Et,p[3]=Mt,D.clearBufferuiv(D.COLOR,0,p)):(g[0]=At,g[1]=Rt,g[2]=Et,g[3]=Mt,D.clearBufferiv(D.COLOR,0,g))}else $|=D.COLOR_BUFFER_BIT}k&&($|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Y&&($|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),gt.dispose(),Yt.dispose(),It.dispose(),T.dispose(),X.dispose(),J.dispose(),re.dispose(),O.dispose(),yt.dispose(),K.dispose(),K.removeEventListener("sessionstart",Xl),K.removeEventListener("sessionend",ql),yi.stop()};function et(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=ce.autoReset,k=_t.enabled,Y=_t.autoUpdate,$=_t.needsUpdate,G=_t.type;pt(),ce.autoReset=R,_t.enabled=k,_t.autoUpdate=Y,_t.needsUpdate=$,_t.type=G}function mt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function qt(R){const k=R.target;k.removeEventListener("dispose",qt),_e(k)}function _e(R){Ge(R),It.remove(R)}function Ge(R){const k=It.get(R).programs;k!==void 0&&(k.forEach(function(Y){yt.releaseProgram(Y)}),R.isShaderMaterial&&yt.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,Y,$,G,at){k===null&&(k=Dt);const ft=G.isMesh&&G.matrixWorld.determinant()<0,vt=pp(R,k,Y,$,G);wt.setMaterial($,ft);let Mt=Y.index,At=1;if($.wireframe===!0){if(Mt=it.getWireframeAttribute(Y),Mt===void 0)return;At=2}const Rt=Y.drawRange,Et=Y.attributes.position;let Qt=Rt.start*At,le=(Rt.start+Rt.count)*At;at!==null&&(Qt=Math.max(Qt,at.start*At),le=Math.min(le,(at.start+at.count)*At)),Mt!==null?(Qt=Math.max(Qt,0),le=Math.min(le,Mt.count)):Et!=null&&(Qt=Math.max(Qt,0),le=Math.min(le,Et.count));const fe=le-Qt;if(fe<0||fe===1/0)return;re.setup(G,$,vt,Y,Mt);let $e,jt=xt;if(Mt!==null&&($e=Q.get(Mt),jt=Wt,jt.setIndex($e)),G.isMesh)$.wireframe===!0?(wt.setLineWidth($.wireframeLinewidth*Ot()),jt.setMode(D.LINES)):jt.setMode(D.TRIANGLES);else if(G.isLine){let Tt=$.linewidth;Tt===void 0&&(Tt=1),wt.setLineWidth(Tt*Ot()),G.isLineSegments?jt.setMode(D.LINES):G.isLineLoop?jt.setMode(D.LINE_LOOP):jt.setMode(D.LINE_STRIP)}else G.isPoints?jt.setMode(D.POINTS):G.isSprite&&jt.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)jt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))jt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Tt=G._multiDrawStarts,we=G._multiDrawCounts,Zt=G._multiDrawCount,fn=Mt?Q.get(Mt).bytesPerElement:1,Ji=It.get($).currentProgram.getUniforms();for(let Ke=0;Ke<Zt;Ke++)Ji.setValue(D,"_gl_DrawID",Ke),jt.render(Tt[Ke]/fn,we[Ke])}else if(G.isInstancedMesh)jt.renderInstances(Qt,fe,G.count);else if(Y.isInstancedBufferGeometry){const Tt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,we=Math.min(Y.instanceCount,Tt);jt.renderInstances(Qt,fe,we)}else jt.render(Qt,fe)};function $t(R,k,Y){R.transparent===!0&&R.side===he&&R.forceSinglePass===!1?(R.side=Fe,R.needsUpdate=!0,Us(R,k,Y),R.side=mi,R.needsUpdate=!0,Us(R,k,Y),R.side=he):Us(R,k,Y)}this.compile=function(R,k,Y=null){Y===null&&(Y=R),d=Yt.get(Y),d.init(k),b.push(d),Y.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),R!==Y&&R.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),d.setupLights();const $=new Set;return R.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const at=G.material;if(at)if(Array.isArray(at))for(let ft=0;ft<at.length;ft++){const vt=at[ft];$t(vt,Y,G),$.add(vt)}else $t(at,Y,G),$.add(at)}),b.pop(),d=null,$},this.compileAsync=function(R,k,Y=null){const $=this.compile(R,k,Y);return new Promise(G=>{function at(){if($.forEach(function(ft){It.get(ft).currentProgram.isReady()&&$.delete(ft)}),$.size===0){G(R);return}setTimeout(at,10)}kt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let He=null;function zn(R){He&&He(R)}function Xl(){yi.stop()}function ql(){yi.start()}const yi=new Hd;yi.setAnimationLoop(zn),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(R){He=R,K.setAnimationLoop(R),R===null?yi.stop():yi.start()},K.addEventListener("sessionstart",Xl),K.addEventListener("sessionend",ql),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(k),k=K.getCamera()),R.isScene===!0&&R.onBeforeRender(S,R,k,M),d=Yt.get(R,b.length),d.init(k),b.push(d),st.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ht.setFromProjectionMatrix(st),Z=this.localClippingEnabled,q=ot.init(this.clippingPlanes,Z),x=gt.get(R,m.length),x.init(),m.push(x),K.enabled===!0&&K.isPresenting===!0){const at=S.xr.getDepthSensingMesh();at!==null&&ra(at,k,-1/0,S.sortObjects)}ra(R,k,0,S.sortObjects),x.finish(),S.sortObjects===!0&&x.sort(P,z),Ft=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Ft&&Pt.addToRenderList(x,R),this.info.render.frame++,q===!0&&ot.beginShadows();const Y=d.state.shadowsArray;_t.render(Y,R,k),q===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=x.opaque,G=x.transmissive;if(d.setupLights(),k.isArrayCamera){const at=k.cameras;if(G.length>0)for(let ft=0,vt=at.length;ft<vt;ft++){const Mt=at[ft];$l($,G,R,Mt)}Ft&&Pt.render(R);for(let ft=0,vt=at.length;ft<vt;ft++){const Mt=at[ft];Yl(x,R,Mt,Mt.viewport)}}else G.length>0&&$l($,G,R,k),Ft&&Pt.render(R),Yl(x,R,k);M!==null&&(C.updateMultisampleRenderTarget(M),C.updateRenderTargetMipmap(M)),R.isScene===!0&&R.onAfterRender(S,R,k),re.resetDefaultState(),A=-1,L=null,b.pop(),b.length>0?(d=b[b.length-1],q===!0&&ot.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function ra(R,k,Y,$){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)Y=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)d.pushLight(R),R.castShadow&&d.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ht.intersectsSprite(R)){$&&St.setFromMatrixPosition(R.matrixWorld).applyMatrix4(st);const ft=J.update(R),vt=R.material;vt.visible&&x.push(R,ft,vt,Y,St.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ht.intersectsObject(R))){const ft=J.update(R),vt=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),St.copy(R.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),St.copy(ft.boundingSphere.center)),St.applyMatrix4(R.matrixWorld).applyMatrix4(st)),Array.isArray(vt)){const Mt=ft.groups;for(let At=0,Rt=Mt.length;At<Rt;At++){const Et=Mt[At],Qt=vt[Et.materialIndex];Qt&&Qt.visible&&x.push(R,ft,Qt,Y,St.z,Et)}}else vt.visible&&x.push(R,ft,vt,Y,St.z,null)}}const at=R.children;for(let ft=0,vt=at.length;ft<vt;ft++)ra(at[ft],k,Y,$)}function Yl(R,k,Y,$){const G=R.opaque,at=R.transmissive,ft=R.transparent;d.setupLightsView(Y),q===!0&&ot.setGlobalState(S.clippingPlanes,Y),$&&wt.viewport(_.copy($)),G.length>0&&Ds(G,k,Y),at.length>0&&Ds(at,k,Y),ft.length>0&&Ds(ft,k,Y),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function $l(R,k,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[$.id]===void 0&&(d.state.transmissionRenderTarget[$.id]=new Wi(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?vs:jn,minFilter:Bi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const at=d.state.transmissionRenderTarget[$.id],ft=$.viewport||_;at.setSize(ft.z,ft.w);const vt=S.getRenderTarget();S.setRenderTarget(at),S.getClearColor(U),N=S.getClearAlpha(),N<1&&S.setClearColor(16777215,.5),S.clear(),Ft&&Pt.render(Y);const Mt=S.toneMapping;S.toneMapping=di;const At=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),d.setupLightsView($),q===!0&&ot.setGlobalState(S.clippingPlanes,$),Ds(R,Y,$),C.updateMultisampleRenderTarget(at),C.updateRenderTargetMipmap(at),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let Et=0,Qt=k.length;Et<Qt;Et++){const le=k[Et],fe=le.object,$e=le.geometry,jt=le.material,Tt=le.group;if(jt.side===he&&fe.layers.test($.layers)){const we=jt.side;jt.side=Fe,jt.needsUpdate=!0,Kl(fe,Y,$,$e,jt,Tt),jt.side=we,jt.needsUpdate=!0,Rt=!0}}Rt===!0&&(C.updateMultisampleRenderTarget(at),C.updateRenderTargetMipmap(at))}S.setRenderTarget(vt),S.setClearColor(U,N),At!==void 0&&($.viewport=At),S.toneMapping=Mt}function Ds(R,k,Y){const $=k.isScene===!0?k.overrideMaterial:null;for(let G=0,at=R.length;G<at;G++){const ft=R[G],vt=ft.object,Mt=ft.geometry,At=$===null?ft.material:$,Rt=ft.group;vt.layers.test(Y.layers)&&Kl(vt,k,Y,Mt,At,Rt)}}function Kl(R,k,Y,$,G,at){R.onBeforeRender(S,k,Y,$,G,at),R.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),G.onBeforeRender(S,k,Y,$,R,at),G.transparent===!0&&G.side===he&&G.forceSinglePass===!1?(G.side=Fe,G.needsUpdate=!0,S.renderBufferDirect(Y,k,$,G,R,at),G.side=mi,G.needsUpdate=!0,S.renderBufferDirect(Y,k,$,G,R,at),G.side=he):S.renderBufferDirect(Y,k,$,G,R,at),R.onAfterRender(S,k,Y,$,G,at)}function Us(R,k,Y){k.isScene!==!0&&(k=Dt);const $=It.get(R),G=d.state.lights,at=d.state.shadowsArray,ft=G.state.version,vt=yt.getParameters(R,G.state,at,k,Y),Mt=yt.getProgramCacheKey(vt);let At=$.programs;$.environment=R.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(R.isMeshStandardMaterial?X:T).get(R.envMap||$.environment),$.envMapRotation=$.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,At===void 0&&(R.addEventListener("dispose",qt),At=new Map,$.programs=At);let Rt=At.get(Mt);if(Rt!==void 0){if($.currentProgram===Rt&&$.lightsStateVersion===ft)return Zl(R,vt),Rt}else vt.uniforms=yt.getUniforms(R),R.onBeforeCompile(vt,S),Rt=yt.acquireProgram(vt,Mt),At.set(Mt,Rt),$.uniforms=vt.uniforms;const Et=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Et.clippingPlanes=ot.uniform),Zl(R,vt),$.needsLights=gp(R),$.lightsStateVersion=ft,$.needsLights&&(Et.ambientLightColor.value=G.state.ambient,Et.lightProbe.value=G.state.probe,Et.directionalLights.value=G.state.directional,Et.directionalLightShadows.value=G.state.directionalShadow,Et.spotLights.value=G.state.spot,Et.spotLightShadows.value=G.state.spotShadow,Et.rectAreaLights.value=G.state.rectArea,Et.ltc_1.value=G.state.rectAreaLTC1,Et.ltc_2.value=G.state.rectAreaLTC2,Et.pointLights.value=G.state.point,Et.pointLightShadows.value=G.state.pointShadow,Et.hemisphereLights.value=G.state.hemi,Et.directionalShadowMap.value=G.state.directionalShadowMap,Et.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Et.spotShadowMap.value=G.state.spotShadowMap,Et.spotLightMatrix.value=G.state.spotLightMatrix,Et.spotLightMap.value=G.state.spotLightMap,Et.pointShadowMap.value=G.state.pointShadowMap,Et.pointShadowMatrix.value=G.state.pointShadowMatrix),$.currentProgram=Rt,$.uniformsList=null,Rt}function jl(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=So.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function Zl(R,k){const Y=It.get(R);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function pp(R,k,Y,$,G){k.isScene!==!0&&(k=Dt),C.resetTextureUnits();const at=k.fog,ft=$.isMeshStandardMaterial?k.environment:null,vt=M===null?S.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:vi,Mt=($.isMeshStandardMaterial?X:T).get($.envMap||ft),At=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Rt=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Et=!!Y.morphAttributes.position,Qt=!!Y.morphAttributes.normal,le=!!Y.morphAttributes.color;let fe=di;$.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(fe=S.toneMapping);const $e=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,jt=$e!==void 0?$e.length:0,Tt=It.get($),we=d.state.lights;if(q===!0&&(Z===!0||R!==L)){const sn=R===L&&$.id===A;ot.setState($,R,sn)}let Zt=!1;$.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==we.state.version||Tt.outputColorSpace!==vt||G.isBatchedMesh&&Tt.batching===!1||!G.isBatchedMesh&&Tt.batching===!0||G.isBatchedMesh&&Tt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Tt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Tt.instancing===!1||!G.isInstancedMesh&&Tt.instancing===!0||G.isSkinnedMesh&&Tt.skinning===!1||!G.isSkinnedMesh&&Tt.skinning===!0||G.isInstancedMesh&&Tt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Tt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Tt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Tt.instancingMorph===!1&&G.morphTexture!==null||Tt.envMap!==Mt||$.fog===!0&&Tt.fog!==at||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==ot.numPlanes||Tt.numIntersection!==ot.numIntersection)||Tt.vertexAlphas!==At||Tt.vertexTangents!==Rt||Tt.morphTargets!==Et||Tt.morphNormals!==Qt||Tt.morphColors!==le||Tt.toneMapping!==fe||Tt.morphTargetsCount!==jt)&&(Zt=!0):(Zt=!0,Tt.__version=$.version);let fn=Tt.currentProgram;Zt===!0&&(fn=Us($,k,G));let Ji=!1,Ke=!1,sa=!1;const pe=fn.getUniforms(),ti=Tt.uniforms;if(wt.useProgram(fn.program)&&(Ji=!0,Ke=!0,sa=!0),$.id!==A&&(A=$.id,Ke=!0),Ji||L!==R){Gt.reverseDepthBuffer?(ct.copy(R.projectionMatrix),om(ct),am(ct),pe.setValue(D,"projectionMatrix",ct)):pe.setValue(D,"projectionMatrix",R.projectionMatrix),pe.setValue(D,"viewMatrix",R.matrixWorldInverse);const sn=pe.map.cameraPosition;sn!==void 0&&sn.setValue(D,bt.setFromMatrixPosition(R.matrixWorld)),Gt.logarithmicDepthBuffer&&pe.setValue(D,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&pe.setValue(D,"isOrthographic",R.isOrthographicCamera===!0),L!==R&&(L=R,Ke=!0,sa=!0)}if(G.isSkinnedMesh){pe.setOptional(D,G,"bindMatrix"),pe.setOptional(D,G,"bindMatrixInverse");const sn=G.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),pe.setValue(D,"boneTexture",sn.boneTexture,C))}G.isBatchedMesh&&(pe.setOptional(D,G,"batchingTexture"),pe.setValue(D,"batchingTexture",G._matricesTexture,C),pe.setOptional(D,G,"batchingIdTexture"),pe.setValue(D,"batchingIdTexture",G._indirectTexture,C),pe.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&pe.setValue(D,"batchingColorTexture",G._colorsTexture,C));const oa=Y.morphAttributes;if((oa.position!==void 0||oa.normal!==void 0||oa.color!==void 0)&&Lt.update(G,Y,fn),(Ke||Tt.receiveShadow!==G.receiveShadow)&&(Tt.receiveShadow=G.receiveShadow,pe.setValue(D,"receiveShadow",G.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(ti.envMap.value=Mt,ti.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&k.environment!==null&&(ti.envMapIntensity.value=k.environmentIntensity),Ke&&(pe.setValue(D,"toneMappingExposure",S.toneMappingExposure),Tt.needsLights&&mp(ti,sa),at&&$.fog===!0&&ut.refreshFogUniforms(ti,at),ut.refreshMaterialUniforms(ti,$,B,F,d.state.transmissionRenderTarget[R.id]),So.upload(D,jl(Tt),ti,C)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(So.upload(D,jl(Tt),ti,C),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&pe.setValue(D,"center",G.center),pe.setValue(D,"modelViewMatrix",G.modelViewMatrix),pe.setValue(D,"normalMatrix",G.normalMatrix),pe.setValue(D,"modelMatrix",G.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const sn=$.uniformsGroups;for(let aa=0,_p=sn.length;aa<_p;aa++){const Jl=sn[aa];O.update(Jl,fn),O.bind(Jl,fn)}}return fn}function mp(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function gp(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(R,k,Y){It.get(R.texture).__webglTexture=k,It.get(R.depthTexture).__webglTexture=Y;const $=It.get(R);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Y===void 0,$.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,k){const Y=It.get(R);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,Y=0){M=R,E=k,w=Y;let $=!0,G=null,at=!1,ft=!1;if(R){const Mt=It.get(R);if(Mt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(D.FRAMEBUFFER,null),$=!1;else if(Mt.__webglFramebuffer===void 0)C.setupRenderTarget(R);else if(Mt.__hasExternalTextures)C.rebindTextures(R,It.get(R.texture).__webglTexture,It.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Et=R.depthTexture;if(Mt.__boundDepthTexture!==Et){if(Et!==null&&It.has(Et)&&(R.width!==Et.image.width||R.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(R)}}const At=R.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(ft=!0);const Rt=It.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Rt[k])?G=Rt[k][Y]:G=Rt[k],at=!0):R.samples>0&&C.useMultisampledRTT(R)===!1?G=It.get(R).__webglMultisampledFramebuffer:Array.isArray(Rt)?G=Rt[Y]:G=Rt,_.copy(R.viewport),v.copy(R.scissor),I=R.scissorTest}else _.copy(H).multiplyScalar(B).floor(),v.copy(j).multiplyScalar(B).floor(),I=rt;if(wt.bindFramebuffer(D.FRAMEBUFFER,G)&&$&&wt.drawBuffers(R,G),wt.viewport(_),wt.scissor(v),wt.setScissorTest(I),at){const Mt=It.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,Mt.__webglTexture,Y)}else if(ft){const Mt=It.get(R.texture),At=k||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mt.__webglTexture,Y||0,At)}A=-1},this.readRenderTargetPixels=function(R,k,Y,$,G,at,ft){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=It.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ft!==void 0&&(vt=vt[ft]),vt){wt.bindFramebuffer(D.FRAMEBUFFER,vt);try{const Mt=R.texture,At=Mt.format,Rt=Mt.type;if(!Gt.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-$&&Y>=0&&Y<=R.height-G&&D.readPixels(k,Y,$,G,Ut.convert(At),Ut.convert(Rt),at)}finally{const Mt=M!==null?It.get(M).__webglFramebuffer:null;wt.bindFramebuffer(D.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(R,k,Y,$,G,at,ft){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=It.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ft!==void 0&&(vt=vt[ft]),vt){const Mt=R.texture,At=Mt.format,Rt=Mt.type;if(!Gt.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=R.width-$&&Y>=0&&Y<=R.height-G){wt.bindFramebuffer(D.FRAMEBUFFER,vt);const Et=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Et),D.bufferData(D.PIXEL_PACK_BUFFER,at.byteLength,D.STREAM_READ),D.readPixels(k,Y,$,G,Ut.convert(At),Ut.convert(Rt),0);const Qt=M!==null?It.get(M).__webglFramebuffer:null;wt.bindFramebuffer(D.FRAMEBUFFER,Qt);const le=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await sm(D,le,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Et),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,at),D.deleteBuffer(Et),D.deleteSync(le),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,k=null,Y=0){R.isTexture!==!0&&(Mo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,R=arguments[1]);const $=Math.pow(2,-Y),G=Math.floor(R.image.width*$),at=Math.floor(R.image.height*$),ft=k!==null?k.x:0,vt=k!==null?k.y:0;C.setTexture2D(R,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,ft,vt,G,at),wt.unbindTexture()},this.copyTextureToTexture=function(R,k,Y=null,$=null,G=0){R.isTexture!==!0&&(Mo("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,R=arguments[1],k=arguments[2],G=arguments[3]||0,Y=null);let at,ft,vt,Mt,At,Rt;Y!==null?(at=Y.max.x-Y.min.x,ft=Y.max.y-Y.min.y,vt=Y.min.x,Mt=Y.min.y):(at=R.image.width,ft=R.image.height,vt=0,Mt=0),$!==null?(At=$.x,Rt=$.y):(At=0,Rt=0);const Et=Ut.convert(k.format),Qt=Ut.convert(k.type);C.setTexture2D(k,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const le=D.getParameter(D.UNPACK_ROW_LENGTH),fe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),$e=D.getParameter(D.UNPACK_SKIP_PIXELS),jt=D.getParameter(D.UNPACK_SKIP_ROWS),Tt=D.getParameter(D.UNPACK_SKIP_IMAGES),we=R.isCompressedTexture?R.mipmaps[G]:R.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,we.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,we.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,vt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Mt),R.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,G,At,Rt,at,ft,Et,Qt,we.data):R.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,G,At,Rt,we.width,we.height,Et,we.data):D.texSubImage2D(D.TEXTURE_2D,G,At,Rt,at,ft,Et,Qt,we),D.pixelStorei(D.UNPACK_ROW_LENGTH,le),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,fe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,$e),D.pixelStorei(D.UNPACK_SKIP_ROWS,jt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Tt),G===0&&k.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),wt.unbindTexture()},this.copyTextureToTexture3D=function(R,k,Y=null,$=null,G=0){R.isTexture!==!0&&(Mo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,$=arguments[1]||null,R=arguments[2],k=arguments[3],G=arguments[4]||0);let at,ft,vt,Mt,At,Rt,Et,Qt,le;const fe=R.isCompressedTexture?R.mipmaps[G]:R.image;Y!==null?(at=Y.max.x-Y.min.x,ft=Y.max.y-Y.min.y,vt=Y.max.z-Y.min.z,Mt=Y.min.x,At=Y.min.y,Rt=Y.min.z):(at=fe.width,ft=fe.height,vt=fe.depth,Mt=0,At=0,Rt=0),$!==null?(Et=$.x,Qt=$.y,le=$.z):(Et=0,Qt=0,le=0);const $e=Ut.convert(k.format),jt=Ut.convert(k.type);let Tt;if(k.isData3DTexture)C.setTexture3D(k,0),Tt=D.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)C.setTexture2DArray(k,0),Tt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const we=D.getParameter(D.UNPACK_ROW_LENGTH),Zt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),fn=D.getParameter(D.UNPACK_SKIP_PIXELS),Ji=D.getParameter(D.UNPACK_SKIP_ROWS),Ke=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,fe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,fe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Mt),D.pixelStorei(D.UNPACK_SKIP_ROWS,At),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Rt),R.isDataTexture||R.isData3DTexture?D.texSubImage3D(Tt,G,Et,Qt,le,at,ft,vt,$e,jt,fe.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(Tt,G,Et,Qt,le,at,ft,vt,$e,fe.data):D.texSubImage3D(Tt,G,Et,Qt,le,at,ft,vt,$e,jt,fe),D.pixelStorei(D.UNPACK_ROW_LENGTH,we),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Zt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,fn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ji),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ke),G===0&&k.generateMipmaps&&D.generateMipmap(Tt),wt.unbindTexture()},this.initRenderTarget=function(R){It.get(R).__webglFramebuffer===void 0&&C.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?C.setTextureCube(R,0):R.isData3DTexture?C.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?C.setTexture2DArray(R,0):C.setTexture2D(R,0),wt.unbindTexture()},this.resetState=function(){E=0,w=0,M=null,wt.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===_l?"display-p3":"srgb",e.unpackColorSpace=Jt.workingColorSpace===$o?"display-p3":"srgb"}}class Ml{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new tt(t),this.near=e,this.far=i}clone(){return new Ml(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class xv extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class vv extends Ie{constructor(t=null,e=1,i=1,r,s,o,a,c,l=qe,u=qe,h,f){super(null,o,a,c,l,u,r,s,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class In extends wn{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const fr=new ee,Yu=new ee,no=[],$u=new ji,Mv=new ee,Kr=new Vt,jr=new Or;class Zo extends Vt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new In(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Mv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ji),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,fr),$u.copy(t.boundingBox).applyMatrix4(fr),this.boundingBox.union($u)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Or),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,fr),jr.copy(t.boundingSphere).applyMatrix4(fr),this.boundingSphere.union(jr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(t,e){const i=this.matrixWorld,r=this.count;if(Kr.geometry=this.geometry,Kr.material=this.material,Kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jr.copy(this.boundingSphere),jr.applyMatrix4(i),t.ray.intersectsSphere(jr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,fr),Yu.multiplyMatrices(i,fr),Kr.matrixWorld=Yu,Kr.raycast(t,no);for(let o=0,a=no.length;o<a;o++){const c=no[o];c.instanceId=s,c.object=this,e.push(c)}no.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new In(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new vv(new Float32Array(r*this.count),r,this.count,fl,On));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*t;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Sl extends rn{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],p=[];let g=0;const x=[],d=i/2;let m=0;b(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new ge(h,3)),this.setAttribute("normal",new ge(f,3)),this.setAttribute("uv",new ge(p,2));function b(){const y=new V,E=new V;let w=0;const M=(e-t)/i;for(let A=0;A<=s;A++){const L=[],_=A/s,v=_*(e-t)+t;for(let I=0;I<=r;I++){const U=I/r,N=U*c+a,W=Math.sin(N),F=Math.cos(N);E.x=v*W,E.y=-_*i+d,E.z=v*F,h.push(E.x,E.y,E.z),y.set(W,M,F).normalize(),f.push(y.x,y.y,y.z),p.push(U,1-_),L.push(g++)}x.push(L)}for(let A=0;A<r;A++)for(let L=0;L<s;L++){const _=x[L][A],v=x[L+1][A],I=x[L+1][A+1],U=x[L][A+1];t>0&&(u.push(_,v,U),w+=3),e>0&&(u.push(v,I,U),w+=3)}l.addGroup(m,w,0),m+=w}function S(y){const E=g,w=new Kt,M=new V;let A=0;const L=y===!0?t:e,_=y===!0?1:-1;for(let I=1;I<=r;I++)h.push(0,d*_,0),f.push(0,_,0),p.push(.5,.5),g++;const v=g;for(let I=0;I<=r;I++){const N=I/r*c+a,W=Math.cos(N),F=Math.sin(N);M.x=L*F,M.y=d*_,M.z=L*W,h.push(M.x,M.y,M.z),f.push(0,_,0),w.x=W*.5+.5,w.y=F*.5*_+.5,p.push(w.x,w.y),g++}for(let I=0;I<r;I++){const U=E+I,N=v+I;y===!0?u.push(N,N+1,U):u.push(N+1,N,U),A+=3}l.addGroup(m,A,y===!0?1:2),m+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Jo extends rn{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new V,f=new V,p=[],g=[],x=[],d=[];for(let m=0;m<=i;m++){const b=[],S=m/i;let y=0;m===0&&o===0?y=.5/e:m===i&&c===Math.PI&&(y=-.5/e);for(let E=0;E<=e;E++){const w=E/e;h.x=-t*Math.cos(r+w*s)*Math.sin(o+S*a),h.y=t*Math.cos(o+S*a),h.z=t*Math.sin(r+w*s)*Math.sin(o+S*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),d.push(w+y,1-S),b.push(l++)}u.push(b)}for(let m=0;m<i;m++)for(let b=0;b<e;b++){const S=u[m][b+1],y=u[m][b],E=u[m+1][b],w=u[m+1][b+1];(m!==0||o>0)&&p.push(S,y,w),(m!==i-1||c<Math.PI)&&p.push(y,E,w)}this.setIndex(p),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(x,3)),this.setAttribute("uv",new ge(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class nn extends Ss{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pd,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Ku={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Sv{constructor(t,e,i){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const yv=new Sv;class yl{constructor(t){this.manager=t!==void 0?t:yv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}yl.DEFAULT_MATERIAL_NAME="__DEFAULT";class Ev extends yl{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Ku.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=fs("img");function c(){u(),Ku.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(h){u(),r&&r(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class bv extends yl{constructor(t){super(t)}load(t,e,i,r){const s=new Ie,o=new Ev(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},i,r),s}}class jd extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Tv extends jd{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const za=new ee,ju=new V,Zu=new V;class wv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Kt(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xl,this._frameExtents=new Kt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;ju.setFromMatrixPosition(t.matrixWorld),e.position.copy(ju),Zu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zu),e.updateMatrixWorld(),za.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(za),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(za)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Av extends wv{constructor(){super(new Vd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rv extends jd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new Av}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Cv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ju(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ju();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ju(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ll}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ll);const Pv=1.5;function Lv(n){const t=new _v({antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio,Pv)),t.setSize(window.innerWidth,window.innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=gd,t.toneMapping=xd,t.toneMappingExposure=1.05,t.outputColorSpace=cn,n.appendChild(t.domElement);let e=null;return t.setResizeCallback=i=>{e=i},window.addEventListener("resize",()=>{t.setSize(window.innerWidth,window.innerHeight),e?.(window.innerWidth/window.innerHeight)}),t}function Iv(){const n=new ln(50,window.innerWidth/window.innerHeight,.1,500);return n.position.set(0,20,36),n}function io(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function ae(n,t){const e=Math.floor(n),i=Math.floor(t),r=n-e,s=t-i,o=r*r*(3-2*r),a=s*s*(3-2*s),c=io(e,i),l=io(e+1,i),u=io(e,i+1),h=io(e+1,i+1);return c*(1-o)*(1-a)+l*o*(1-a)+u*(1-o)*a+h*o*a}function bs(n){let t=n>>>0;return function(){t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function nt(n,t,e){return n<t?t:n>e?e:n}function Ht(n,t,e){return n+(t-n)*e}function fi(n,t,e,i){return Ht(n,t,1-Math.exp(-e*i))}function ie(n){const t=Math.hypot(n[0],n[1],n[2])||1;return[n[0]/t,n[1]/t,n[2]/t]}function Ye(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function Ct(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function oe(n,t){return[n[0]+t[0],n[1]+t[1],n[2]+t[2]]}function Zn(n,t){return[n[0]-t[0],n[1]-t[1],n[2]-t[2]]}function Hi(n,t,e,i){return{x:n,y:t,z:e,p:i}}function Zd(n,t){const[e,i,r]=t;return[n.x[0]*e+n.y[0]*i+n.z[0]*r+n.p[0],n.x[1]*e+n.y[1]*i+n.z[1]*r+n.p[1],n.x[2]*e+n.y[2]*i+n.z[2]*r+n.p[2]]}function Xe(n,t,e){const i=Zn(t,n),r=Math.hypot(i[0],i[1],i[2])||1e-4,s=[i[0]/r,i[1]/r,i[2]/r],o=Math.abs(s[1])<.97?[0,1,0]:[1,0,0],a=ie(Ye(o,s)),c=Ye(a,s);return Hi(Ct(a,e),Ct(s,r),Ct(c,e),n)}class Te{constructor(){this.positions=[],this.colors=[],this.indices=[]}addVertex(t,e,i,r){return this.positions.push(t,e,i),this.colors.push(r[0],r[1],r[2]),this.positions.length/3-1}addTri(t,e,i){this.indices.push(t,e,i)}addQuad(t,e,i,r){this.addTri(t,e,i),this.addTri(t,i,r)}bake(t,e,i){const r=this.positions.length/3;for(let s=0;s<t.p.length;s+=3){const o=Zd(e,[t.p[s],t.p[s+1],t.p[s+2]]),a=i(o[0],o[1],o[2]);this.positions.push(o[0],o[1],o[2]),this.colors.push(a[0],a[1],a[2])}for(let s=0;s<t.i.length;s++)this.indices.push(r+t.i[s])}toBufferGeometry(){const t=new rn;return t.setAttribute("position",new ge(this.positions,3)),t.setAttribute("color",new ge(this.colors,3)),t.setIndex(this.indices),t.computeVertexNormals(),t}}function Dr(n,t){const e=[],i=[],r=[];for(let s=0;s<=t;s++){const o=Math.PI*s/t,a=Math.sin(o),c=Math.cos(o);for(let l=0;l<=n;l++){const u=2*Math.PI*l/n,h=a*Math.cos(u),f=c,p=a*Math.sin(u);e.push(h,f,p),i.push(h,f,p)}}for(let s=0;s<t;s++)for(let o=0;o<n;o++){const a=s*(n+1)+o,c=a+n+1;r.push(a,a+1,c,a+1,c+1,c)}return{p:e,n:i,i:r}}function Qo(n){const t=[],e=[],i=[];for(let s=0;s<=n;s++){const o=2*Math.PI*s/n,a=Math.cos(o),c=Math.sin(o);t.push(a,0,c),e.push(a,0,c),t.push(a,1,c),e.push(a,0,c)}for(let s=0;s<n;s++){const o=s*2;i.push(o,o+1,o+2,o+1,o+3,o+2)}const r=t.length/3;t.push(0,0,0),e.push(0,-1,0),t.push(0,1,0),e.push(0,1,0);for(let s=0;s<n;s++){const o=2*Math.PI*s/n,a=2*Math.PI*(s+1)/n,c=t.length/3;t.push(Math.cos(o),0,Math.sin(o)),e.push(0,-1,0),t.push(Math.cos(a),0,Math.sin(a)),e.push(0,-1,0),i.push(r,c+1,c);const l=t.length/3;t.push(Math.cos(o),1,Math.sin(o)),e.push(0,1,0),t.push(Math.cos(a),1,Math.sin(a)),e.push(0,1,0),i.push(r+1,l,l+1)}return{p:t,n:e,i}}const Dv=""+new URL("bark_albedo-DReMtPgm.png",import.meta.url).href,Uv=""+new URL("tunnel-dirt_albedo-DgMZYBLi.png",import.meta.url).href,Nv=""+new URL("lawn-soil_albedo-mTvxXfeR.png",import.meta.url).href,Fv=""+new URL("stone_albedo-CltKTJgX.png",import.meta.url).href,Ov=""+new URL("mushroom-cap_albedo-CRHQ2riL.png",import.meta.url).href,yo=new Float32Array(256);for(let n=0;n<256;n++){const t=n/255;yo[n]=t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function Bv(n,t){const e=document.createElement("canvas");e.width=n.width,e.height=n.height;const i=e.getContext("2d",{willReadFrequently:!0});i.drawImage(n,0,0);const r=i.getImageData(0,0,e.width,e.height).data;let s=0,o=0,a=0;const c=e.width*e.height;for(let l=0;l<r.length;l+=4)s+=yo[r[l]],o+=yo[r[l+1]],a+=yo[r[l+2]];t.set(Math.max(s/c,.001),Math.max(o/c,.001),Math.max(a/c,.001))}const zv=new bv;function Ts(n,t){const e=new V(.5,.5,.5),i=zv.load(n,r=>{try{Bv(r.image,e)}catch(s){console.warn("albedo mean unavailable",s)}});return i.colorSpace=cn,i.wrapS=i.wrapT=Fo,i.repeat.set(1/t,1/t),i.anisotropy=4,i.userData.meanLinear=e,i}const kv=5,Gv=16,Hv=45,Vv=12,Wv=2.5;let Xv=null,qv=null,Yv=null,$v=null,Kv=null;function El(){return Xv||(Xv=Ts(Uv,kv))}function jv(){return qv||(qv=Ts(Dv,Gv))}function Zv(){return Yv||(Yv=Ts(Nv,Hv))}function Jv(){return $v||($v=Ts(Fv,Vv))}function Jd(){return Kv||(Kv=Ts(Ov,Wv))}const Qv=`
uniform vec3 uTexMid;
uniform vec2 uTexRepeat;
uniform float uTexStrength;
varying vec3 vTexWorld;
varying vec3 vTexNormal;
vec3 gTriTex = vec3(1.0);   // filled by the <map_fragment> injection below,
                            // reused by the emissive one (which runs later)
`,tM=4,eM=`
{
  vec3 tn = normalize(vTexNormal);
  vec3 bw = pow(abs(tn), vec3(${tM.toFixed(1)}));
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
`;function Qd(n,t){Object.assign(n.uniforms,t),n.vertexShader=n.vertexShader.replace("#include <common>",`varying vec3 vTexWorld;
varying vec3 vTexNormal;
#include <common>`).replace("#include <project_vertex>",`#include <project_vertex>
      vec4 texLocal = vec4(transformed, 1.0);
      vec3 texNrm = objectNormal;
      #ifdef USE_INSTANCING
        texLocal = instanceMatrix * texLocal;
        texNrm = mat3(instanceMatrix) * texNrm;
      #endif
      vTexWorld = (modelMatrix * texLocal).xyz;
      vTexNormal = mat3(modelMatrix) * texNrm;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",Qv+`
#include <common>`).replace("#include <map_fragment>",eM)}function tf(n,t){return{uTexMid:{value:n.userData.meanLinear},uTexRepeat:{value:n.repeat},uTexStrength:{value:t}}}function zr({map:n,strength:t=1,...e}){const i=new nn({vertexColors:!0,roughness:.95,metalness:0,map:n,...e}),r=tf(n,t);return i.userData.texUniforms=r,i.onBeforeCompile=s=>Qd(s,r),i.userData.shaderTag="triplanar-albedo",i.customProgramCacheKey=()=>"triplanar-albedo",i}function ef({map:n,strength:t=1,emissive:e=1.6,...i}){const r=new nn({vertexColors:!0,roughness:.6,metalness:0,map:n,...i}),s=tf(n,t);return r.userData.texUniforms=s,r.onBeforeCompile=o=>{Qd(o,s),o.fragmentShader=o.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
       totalEmissiveRadiance += vColor * gTriTex * ${e.toFixed(2)};`)},r.userData.shaderTag="triplanar-emissive",r.customProgramCacheKey=()=>"triplanar-emissive",r}const Eo=2.2,me=-166,Be=0,br=7.2*Eo,bl=-132,Go=32,qc=[-9,-140],ne=[13,0,-124],Yc=15,nM=2.6;function Oe(n){const t=(n-bl)/Go;return t>-1&&t<1?br+(Go-br)*Math.pow(Math.sqrt(1-t*t),.72):br}function se(n,t){let e=.22*ae(n*.11+11,t*.11+5);const i=Math.hypot(n-ne[0],t-ne[2]);if(i<Yc){const r=1-i/Yc;e+=nM*r*r*(3-2*r)}return e}const $c=[],vr=[],nf=[];function Tl(n,t){for(let e=0;e<$c.length;e++){const i=$c[e],s=Math.atan2(Math.sin(n-i.th),Math.cos(n-i.th))/i.rTh,o=(t-i.z)/i.rZ;if(s*s+o*o<1)return!0}return!1}function iM(n,t){return Tl(t,n)?1/0:Oe(n)}function wl(){const n={};for(const t of vr)n[t.name]=t;return n}function ta(n,t){for(let s=0;s<vr.length;s++){const o=vr[s],a=n-o.origin[0],c=t-o.origin[2],l=a*o.dir[0]+c*o.dir[2];if(l<=-.5||l>=o.uMax+1)continue;const u=a*o.side[0]+c*o.side[2],h=Math.max(o.profR(nt(l,0,o.uMax))*.82-1.2,2.2);if(Math.abs(u)>=h+3)continue;const f=nt(l,-.5,o.uMax-1.2),p=nt(u,-h,h);return[o.origin[0]+o.dir[0]*f+o.side[0]*p,o.origin[2]+o.dir[2]*f+o.side[2]*p]}const e=Math.max(Oe(t)*.82-1.6,3);let i=e,r=e;for(let s=0;s<vr.length;s++){const o=vr[s],a=nt(1-Math.abs(t-o.origin[2])/o.doorFalloff,0,1);if(a<=0)continue;const c=Ht(e,Math.abs(o.origin[0])+1.5,a);o.dir[0]>0?c>i&&(i=c):c>r&&(r=c)}return[nt(n,-r,i),Math.max(t,me+5)]}const Al=new tt("#6d5130"),ws=new tt("#5a4226"),Xi=new tt("#332412"),rM=new tt("#4c5f2f"),sM=new tt(rM).lerp(Xi,.62).multiplyScalar(.58);function Jn(n,t,e){return new tt(n).lerp(t,nt(e,0,1))}function bo(n,t,e,i){return ae(Math.cos(n)*e+t*i+37,Math.sin(n)*e+t*i*.7+91)}function Rl(n){return .86*Math.pow(br/n,.35)}function rs(n){const t=Oe(n);return 1.2+t*Rl(t)*.62}function zi(n,t,e){const i=Oe(t),r=Rl(i),s=.84+.2*bo(n,t,1.6,.1)+.1*bo(n,t,4.1,.29)+.05*bo(n,t,9.3,.62),o=i*s*(1-(e||0)),a=Math.cos(n)*o,c=Math.sin(n)*o*r+rs(t),l=se(a,t);return[a,Math.max(c,l),t,s]}function oM(n,t){const e=Jn(Xi,ws,n*.8+.12);return Jn(e,Al,t)}function aM(n){const t=Jn(Xi,ws,n*.8+.12);return Jn(t,Al,.28+n*.18)}function cM(n){const t=Jn(Xi,ws,n*.75+.15);return Jn(t,Al,.55)}function lM(n){const t=Jn(Xi,ws,n*.6+.08);return Jn(t,sM,.3+n*.3)}function ka(n,t,e,i,r,s,o,a,c,l,u,h){const f=zi(t,e,0),p=[f[0],se(f[0],f[2]),f[2]],g=ie([Math.cos(t),0,1e-4]),x=ie(Ye([0,1,0],g)),d=r+o,m=r+o*2;function b(P){const z=(P-d)/o;return z>-1&&z<1?i+(s-i)*Math.pow(Math.sqrt(1-z*z),.72):i}function S(P){return .86*Math.pow(i/P,.35)}function y(P){const z=b(P);return 1.1+z*S(z)*.6}function E(P,z,H,j){return ae(Math.cos(P)*H+z*j+c+37,Math.sin(P)*H+z*j*.7+c+91)}function w(P,z,H){const j=b(z),rt=S(j),ht=.84+.2*E(P,z,1.6,.1)+.1*E(P,z,4.1,.29)+.05*E(P,z,9.3,.62),q=j*ht*(1-(H||0)),Z=Math.cos(P)*q,ct=Math.sin(P)*q*rt+y(z),st=p[0]+g[0]*z+x[0]*Z,bt=p[2]+g[2]*z+x[2]*Z,St=p[1]+ct,Dt=se(st,bt);return[st,Math.max(St,Dt),bt,ht]}{const P=Oe(e),z=Rl(P),H=Math.asin(nt((p[1]+y(0)-rs(e))/(P*z),-.92,.92)),j=t+(Math.cos(t)>=0?H:-H);$c.push({th:j,z:e,rTh:Math.max(.16,i*1.8/Oe(e)),rZ:i*1.7})}if(h){const P=p[0]+g[0]*1.2,z=p[2]+g[2]*1.2;nf.push({p:[P,se(P,z)+2.1,z],c:h,name:n})}const M=new Te,A=1.5,L=[];for(let P=0;P<=m+1e-4;P+=A){const z=[];for(let H=0;H<a;H++){const j=2*Math.PI*H/a,rt=w(j,P,0),ht=nt((rt[3]-.84)/.34+.45,0,1);z.push(M.addVertex(rt[0],rt[1],rt[2],u(ht,rt[0],rt[1],rt[2]).multiplyScalar(l).toArray()))}L.push(z)}for(let P=0;P<L.length-1;P++)for(let z=0;z<a;z++){const H=(z+1)%a;M.addQuad(L[P][z],L[P][H],L[P+1][H],L[P+1][z])}const _=p[0]+g[0]*m,v=p[2]+g[2]*m,I=p[1]+y(m)*.6,U=M.addVertex(_,I,v,u(.2,_,I,v).multiplyScalar(l).toArray()),N=L[L.length-1];for(let P=0;P<a;P++)M.addTri(U,N[P],N[(P+1)%a]);const W={name:n,origin:p,dir:g,side:x,uMax:m,uEnd:d,profR:b,pointAt:w,doorFalloff:i*2.2};vr.push(W);const F=p[0]+g[0]*d,B=p[2]+g[2]*d;return W.center=[F,se(F,B),B],{geometry:M.toBufferGeometry(),branch:W}}function uM(){const n=new be;n.name="underground";const t=ka("granary",Math.PI,-70,3.3*Eo,9,13*1.5,10,30,4001,1,u=>aM(u),[.55,.4,.2]),e=ka("brood",0,-120,4.2*Eo,8,17*1.5,13,34,5117,1,u=>cM(u),[.68,.5,.25]),i=ka("midden",0,-40,2.9*Eo,7,10*1.5,8,26,6229,.46,u=>lM(u),[.3,.44,.28]);n.add(new Vt(t.geometry,ro())),n.add(new Vt(e.geometry,ro())),n.add(new Vt(i.geometry,ro()));const r=new Te,s=44,o=1.7,a=[];for(let u=me;u<=3.0001;u+=o){const h=[];for(let f=0;f<s;f++){const p=2*Math.PI*f/s,g=zi(p,u,0),x=u>-14?1+Math.pow((u+14)/17,2)*.9:1;h.push([g[0]*x,Math.max(g[1]*(x*.5+.5),se(g[0]*x,u)),u,g[3]])}a.push(h)}for(let u=0;u<a.length;u++){const h=[];for(let f=0;f<s;f++){const p=a[u][f],g=nt(1-Math.abs(p[2]-bl)/(Go*1.6),0,1),x=nt((p[3]-.84)/.34+.45,0,1),d=ae(p[0]*.13+3,p[2]*.13+8),m=oM(x,g*.45+d*.2);h.push(r.addVertex(p[0],p[1],p[2],m.toArray()))}a[u].idx=h}for(let u=0;u<a.length-1;u++)for(let h=0;h<s;h++){const f=(h+1)%s;Tl(2*Math.PI*h/s,a[u][h][2])||r.addQuad(a[u].idx[h],a[u].idx[f],a[u+1].idx[f],a[u+1].idx[h])}{let u=a[0].idx;const h=4;for(let p=1;p<=h;p++){const g=Math.cos(p/h*Math.PI*.5),x=me-Math.sin(p/h*Math.PI*.5)*9,d=[];for(let m=0;m<s;m++){const b=2*Math.PI*m/s,S=a[0][m],y=.86+.28*bo(b,x*1.7,2.3,.2),E=S[0]*g*y,w=rs(me)+(S[1]-rs(me))*g*y,M=Jn(Xi,ws,.15+y*.4).multiplyScalar(.35+.3*y);d.push(r.addVertex(E,Math.max(w,se(E,x)),x,M.toArray()))}for(let m=0;m<s;m++){const b=(m+1)%s;r.addQuad(u[m],u[b],d[b],d[m])}u=d}const f=r.addVertex(0,rs(me)*.6,me-10,Xi.clone().multiplyScalar(.3).toArray());for(let p=0;p<s;p++)r.addTri(f,u[p],u[(p+1)%s])}const c=new Vt(r.toBufferGeometry(),ro());c.name="tunnel",n.add(c);const l=nf.slice();return l.push({p:[0,5,3],c:[1.15,1.2,1.35],name:"mouth"}),{group:n,doorLights:l,rooms:{granary:t.branch,brood:e.branch,midden:i.branch}}}let Ga=null;function ro(){return Ga||(Ga=zr({map:El(),strength:.62,side:he})),Ga}const Ee={x0:-208,x1:190,z0:0,z1:250},ps={x0:-300,x1:252,z0:0,z1:322},$n=-4.5,Kn=n=>{const t=nt(n,0,1);return t*t*(3-2*t)},xn={edgeX:-196,bankTop:2,bankRun:15,depth:5,bedRun:30,farBankAt:68,farBankRun:46,farBankTop:24,blendRun:36};function As(n){return xn.edgeX+2*Math.sin(n*.021)+1*Math.sin(n*.047+1.3)}function Qn(n,t){return n-As(t)}function hM(n){if(n<=0)return $n+(xn.bankTop-$n)*Kn(-n/xn.bankRun);let t=$n-xn.depth*Kn(n/xn.bedRun);return n>xn.farBankAt&&(t+=xn.farBankTop*Kn((n-xn.farBankAt)/xn.farBankRun)),t}const Qu=[{x:0,z:20,r:64,amp:-3.5},{x:62,z:78,r:62,amp:16},{x:96,z:44,r:40,amp:9},{x:88,z:168,r:78,amp:-14},{x:88,z:168,r:30,amp:4},{x:-85,z:95,r:46,amp:6},{x:-85,z:95,r:26,amp:1.5},{x:-150,z:150,r:66,amp:13},{x:-132,z:44,r:50,amp:8},{x:24,z:128,r:44,amp:-8},{x:-40,z:300,r:150,amp:34},{x:130,z:296,r:140,amp:30},{x:250,z:120,r:130,amp:30},{x:218,z:232,r:100,amp:22}];function th(n,t){let e=(ae(n*.012,t*.012)-.5)*4.2+(ae(n*.052,t*.052)-.5)*1.3;for(let i=0;i<Qu.length;i++){const r=Qu[i],s=Math.hypot(n-r.x,t-r.z);s>=r.r||(e+=r.amp*Kn(1-s/r.r))}return e}function Nt(n,t){if(t<Be)return se(n,t);const e=n-As(t),i=1-Kn(e/xn.blendRun),r=i>0?Ht(th(n,t),hM(-e),i):th(n,t),s=(1-Kn(t/26))*nt(1-Math.abs(n)/40,0,1);return s>0?Ht(r,se(n,0),s):r}function Rs(n,t){return ie([Nt(n-1.4,t)-Nt(n+1.4,t),2*1.4,Nt(n,t-1.4)-Nt(n,t+1.4)])}function kr(n,t){const i=(Nt(n+1.5,t)-Nt(n-1.5,t))/3,r=(Nt(n,t+1.5)-Nt(n,t-1.5))/(2*1.5);return Math.hypot(i,r)}function Mi(n,t){return t<Be?0:Math.max(0,$n-Nt(n,t))}const rf=.62;function Cl(n,t){const e=ae(n*.006,t*.006),i=nt(ae(n*.018,t*.018)*2.3-.55+(e-.5)*.6,0,1)*(.55+.45*ae(n*.07,t*.07)),r=Mi(n,t),s=Qn(n,t),o=kr(n,t);let a="soil";return r>0?a="water":s<14?a="sand":o>rf?a="rock":i>.5&&(a="moss"),{kind:a,moss:i,slope:o,depth:r,toWater:s}}function dM(n,t){const e=Cl(n,t);return{y:Nt(n,t),normal:Rs(n,t),slope:e.slope,soil:e.kind,moss:e.moss,waterDepth:e.depth,distToWater:e.toWater,diggable:e.depth===0&&e.slope<=rf&&e.toWater>10}}function Kc(n,t){const e=As(t)+1;return[nt(Math.max(n,e),Ee.x0,Ee.x1),nt(t,Ee.z0,Ee.z1)]}const fM=new tt("#86673B"),pM=new tt("#5A4529"),mM=new tt("#5F8034"),gM=new tt("#9DBE58"),_M=new tt("#A79463"),xM=new tt("#4A5540"),vM=new tt("#7C7566");function Sn(n,t,e){return new tt(n).lerp(t,nt(e,0,1))}const so=6;function MM(){const{x0:n,x1:t,z0:e,z1:i}=ps,r=Math.floor((t-n)/so)+1,s=Math.floor((i-e)/so)+1,o=new Te;for(let c=0;c<r;c++)for(let l=0;l<s;l++){const u=n+c*so,h=e+l*so,f=Nt(u,h),p=ae(u*.006,h*.006),g=nt(ae(u*.018,h*.018)*2.3-.55+(p-.5)*.6,0,1)*(.55+.45*ae(u*.07,h*.07));let x=Sn(Sn(fM,pM,ae(u*.09,h*.09)),Sn(mM,gM,ae(u*.05,h*.05)),g);const d=Qn(u,h);d<30&&(x=Sn(x,_M,Kn((30-d)/26)),f<$n+.6&&(x=Sn(x,xM,Kn(($n+.6-f)/3.5))));const m=kr(u,h);m>.45&&(x=Sn(x,vM,Kn((m-.45)/.5)*.75)),o.addVertex(u,f,h,x.toArray())}for(let c=0;c<r-1;c++)for(let l=0;l<s-1;l++){const u=c*s+l,h=(c+1)*s+l,f=(c+1)*s+l+1,p=c*s+l+1;o.addQuad(u,h,f,p)}const a=new Vt(o.toBufferGeometry(),zr({map:Zv(),strength:.8,side:he}));return a.name="lawn",a.receiveShadow=!0,a}const SM=new tt("#9CC6E4"),yM=`
uniform float uWaveTime;
vec2 waterWaveGrad(vec3 p, out float h) {
  float a = p.x * 0.085 + uWaveTime * 1.05;
  float b = p.z * 0.115 - uWaveTime * 0.77 + p.x * 0.04;
  float c = p.z * 0.031 + uWaveTime * 0.31;
  h = sin(a) * 0.24 + sin(b) * 0.17 + sin(c) * 0.30;
  return vec2(cos(a) * 0.24 * 0.085 + cos(b) * 0.17 * 0.04,
              cos(b) * 0.17 * 0.115 + cos(c) * 0.30 * 0.031);
}
`;function EM(){const{x0:n,z0:t,z1:e}=ps,i=56,r=14,s=new Te,o=new tt("#3E6B7A"),a=new tt("#22414F");for(let h=0;h<=i;h++){const f=t+(e-t)*(h/i),p=As(f)+1.2;for(let g=0;g<=r;g++){const x=Ht(n,p,g/r),d=nt(($n-Nt(x,f))/6,0,1);s.addVertex(x,$n,f,Sn(o,a,d).toArray())}}for(let h=0;h<i;h++)for(let f=0;f<r;f++){const p=h*(r+1)+f;s.addQuad(p+r+1,p+r+2,p+1,p)}const c=new nn({vertexColors:!0,roughness:.16,metalness:0,transparent:!0,opacity:.86,side:he}),l={uWaveTime:{value:0},uSkyCol:{value:SM}};c.userData.waterUniforms=l,c.userData.shaderTag="water-ripple",c.onBeforeCompile=h=>{Object.assign(h.uniforms,l),h.vertexShader=h.vertexShader.replace("#include <common>",yM+`
#include <common>`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        float wh; vec2 wg = waterWaveGrad(position, wh);
        objectNormal = normalize(vec3(-wg.x, 1.0, -wg.y));`).replace("#include <begin_vertex>",`#include <begin_vertex>
        transformed.y += wh;`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`uniform vec3 uSkyCol;
#include <common>`).replace("#include <tonemapping_fragment>",`
        {
          float fres = pow(1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0), 3.0);
          gl_FragColor.rgb = mix(gl_FragColor.rgb, uSkyCol, 0.13 + 0.72 * fres);
        }
        #include <tonemapping_fragment>`)},c.customProgramCacheKey=()=>"water-ripple";const u=new Vt(s.toBufferGeometry(),c);return u.name="water",u.receiveShadow=!1,{mesh:u,update(h){l.uWaveTime.value=h}}}const bM=[{r:442,segs:96,base:-120,peak:165,seed:3.1,rough:.55,haze:.72,tint:"#8FA6C4"},{r:384,segs:96,base:-120,peak:118,seed:11.7,rough:.75,haze:.5,tint:"#6E86A6"}];function eh(n,t,e){const i=ae(Math.cos(n)*2.1+t,Math.sin(n)*2.1+t),r=ae(Math.cos(n)*5.3+t*2,Math.sin(n)*5.3+t*2),s=ae(Math.cos(n)*11+t*3,Math.sin(n)*11+t*3);return nt(.3+(i-.5)*1.5+(r-.5)*e+(s-.5)*e*.45,.05,1)}function TM(n="#8B8399",t="#AFC8D8"){const e=new tt(n),i=new tt(t),r=new be;r.name="horizon";const s=[];for(const a of bM){const c=new Te,l=[],u=new tt(a.tint),h=[],f=[],p=[];for(let x=0;x<=a.segs;x++){const d=x/a.segs*Math.PI*2,m=eh(d,a.seed,a.rough),b=a.base+(a.peak-a.base)*m,S=Math.cos(d)*a.r,y=Math.sin(d)*a.r,E=eh(d-.04,a.seed,a.rough),w=nt(.5+(m-E)*6,0,1),M=Sn(u.clone().multiplyScalar(.72),u.clone().multiplyScalar(1.16),w),A=v=>{const I=Sn(M,v,a.haze*.75),U=Sn(M.clone().multiplyScalar(.85),v,Math.min(1,a.haze+.22));return[I,Sn(I,U,.6),U]},L=A(e),_=A(i);h.push(c.addVertex(S,b,y,L[0].toArray())),f.push(c.addVertex(S,Ht(a.base,b,.45),y,L[1].toArray())),p.push(c.addVertex(S,a.base,y,L[2].toArray()));for(const v of _)l.push(v.r,v.g,v.b)}for(let x=0;x<a.segs;x++)c.addQuad(h[x],h[x+1],f[x+1],f[x]),c.addQuad(f[x],f[x+1],p[x+1],p[x]);const g=new Vt(c.toBufferGeometry(),new ys({vertexColors:!0,fog:!1,side:he,depthTest:!1,depthWrite:!1}));g.renderOrder=-1e3,g.frustumCulled=!1,r.add(g),s.push({mesh:g,base:g.geometry.attributes.color.array.slice(),alt:new Float32Array(l)})}let o=-1;return{group:r,update(a,c=0){if(r.position.set(a.position.x,0,a.position.z),!(Math.abs(c-o)<.002)){o=c;for(const l of s){const u=l.mesh.geometry.attributes.color;for(let h=0;h<u.array.length;h++)u.array[h]=l.base[h]+(l.alt[h]-l.base[h])*c;u.needsUpdate=!0}}}}}const Ho={position:new V(0,0,0),radius:.9};function sf(n){return n<42?Math.min(Math.max(n/40,.55),1.45):Math.min(Math.max(2.1+(n-42)*.038,2.1),4.4)}function wM(n){return sf(n)*.5}function _i(n,t){const e=Math.cos(n.ang),i=Math.sin(n.ang),r=t*t*n.h*.26;return[n.x+e*r,n.baseY+n.h*t*(1-t*.13),n.z+i*r]}function Vo(n,t){const e=_i(n,t),i=_i(n,Math.min(t+.01,1)),r=ie(Zn(i,e)),s=[-Math.sin(n.ang),0,Math.cos(n.ang)],o=ie(Ye(r,s));return{pos:e,tangent:r,width:s,normal:o}}const Ha=6;function AM(){const n=[],t=[],e=[],i=[];for(let s=0;s<=Ha;s++){const o=s/Ha;n.push(-.5,o,0,.5,o,0),t.push(o,o),e.push(-1,1)}for(let s=1;s<=Ha;s++){const o=(s-1)*2,a=o+1,c=s*2,l=c+1;i.push(o,a,l,o,l,c)}const r=new rn;return r.setAttribute("position",new ge(n,3)),r.setAttribute("aT",new ge(t,1)),r.setAttribute("aSide",new ge(e,1)),r.setIndex(i),r}const RM=new tt("#5A7331"),CM=new tt("#8FB055"),PM=new tt("#C6DC82"),nh=`
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
`;function LM({count:n=1600,seed:t=7}={}){const e=bs(t),i=AM(),r=new Float32Array(n*3),s=new Float32Array(n),o=new Float32Array(n),a=new Float32Array(n),c=new Float32Array(n*3),l=new Float32Array(n),u=new Float32Array(n),h=[];let f=0,p=0;for(;f<n&&p<n*8;){p++;const A=Ht(ps.x0+8,Ee.x1-4,e()),L=6+e()*(Ee.z1-6);if(Mi(A,L)>0||Math.abs(A)<16&&L<34&&e()<.82)continue;const v=.72+.28*ae(A*.01,L*.01),I=e()<.22?48+e()*60*v:(14+e()*26)*v,U=e()*Math.PI*2,N=Nt(A,L),W=new tt(CM).lerp(PM,e());r[f*3]=A,r[f*3+1]=N,r[f*3+2]=L,s[f]=I,o[f]=U,a[f]=e()*Math.PI*2,c[f*3]=W.r,c[f*3+1]=W.g,c[f*3+2]=W.b,l[f]=sf(I),u[f]=(e()*2-1)*.85,h.push({x:A,z:L,h:I,baseY:N,w:wM(I),ang:U}),f++}const g=f;i.setAttribute("aBase",new In(r.subarray(0,g*3),3)),i.setAttribute("aH",new In(s.subarray(0,g),1)),i.setAttribute("aAng",new In(o.subarray(0,g),1)),i.setAttribute("aPhase",new In(a.subarray(0,g),1)),i.setAttribute("aTip",new In(c.subarray(0,g*3),3)),i.setAttribute("aWidth",new In(l.subarray(0,g),1)),i.setAttribute("aTwist",new In(u.subarray(0,g),1));const x=(ps.x0+Ee.x1)/2,d=(Ee.z0+Ee.z1)/2,m=Math.hypot(Ee.x1-x,Ee.z1-d)+120;i.boundingSphere=new Or(new V(x,40,d),m);const b={uTime:{value:0},uWind:{value:.55},uAntPos:{value:new V(0,0,-9999)},uAntRadius:{value:.9},uBaseColor:{value:new tt(RM)},uOccNear:{value:5},uOccFar:{value:16},uTransl:{value:.16}},S=new nn({roughness:.85,metalness:0,side:he});S.extensions={derivatives:!0},S.onBeforeCompile=A=>{Object.assign(A.uniforms,b),A.vertexShader=A.vertexShader.replace("#include <common>",nh+`
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
      `),A.fragmentShader=A.fragmentShader.replace("#include <common>",`
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
      `)};const y=new Kd({depthPacking:Cd,side:he});y.onBeforeCompile=A=>{Object.assign(A.uniforms,b),A.vertexShader=A.vertexShader.replace("#include <common>",nh+`
#include <common>`).replace("#include <begin_vertex>",`
        vec3 gPos, gNrm;
        grassShape(gPos, gNrm);
        vec3 transformed = gPos;
      `)},y.customProgramCacheKey=()=>"grass-depth";const E=new Zo(i,S,g);E.name="grass",E.castShadow=!0,E.receiveShadow=!0,E.customDepthMaterial=y;const w=new ee;for(let A=0;A<g;A++)E.setMatrixAt(A,w);E.instanceMatrix.needsUpdate=!0;function M(A,L){b.uTime.value=L,b.uAntPos.value.copy(Ho.position),b.uAntRadius.value=Ho.radius}return{mesh:E,footprints:h,update:M}}const Xt={x:-85,z:95,h:340,ang:Math.PI/2,w:22};Xt.baseY=Nt(Xt.x,Xt.z);const IM=new tt("#5a4226"),DM=new tt("#332412"),of=new tt("#4a3418"),Va=new tt(IM).lerp(of,.3),Wa=new tt(DM).lerp(of,.55),ih=new tt("#6C8E3C"),rh=new tt("#AECB6E");function oo(n,t,e){return new tt(n).lerp(t,nt(e,0,1))}const Un=.8,UM=6.2;function ki(n){return _i(Xt,n)}function jc(n){const t=ki(n),e=ki(Math.min(n+.01,1)),i=ie(Zn(e,t)),r=Math.abs(i[1])<.97?[0,1,0]:[1,0,0],s=ie(Ye(r,i));return{p:t,x:s,z:Ye(s,i)}}function qi(n){return Ht(Xt.w,UM,Math.pow(nt(n,0,Un)/Un,.7))}const Pl=Un*.55,sh=Math.PI*1.511,NM=98,FM=36,OM=9.6,af=5,Zc=jc(Pl),cf=ie(oe(Ct(Zc.x,Math.cos(sh)),Ct(Zc.z,Math.sin(sh)))),BM=oe(Zc.p,Ct(cf,qi(Pl)*.7));function ss(n){const t=1-(1-n)*(1-n);return oe(BM,oe(Ct(cf,n*NM),[0,t*FM,0]))}function lf(n){return Ht(OM,af,nt(n,0,1))}function uf(n){const t=ss(nt(n-.005,0,1)),e=ss(nt(n+.005,0,1)),i=ie(Zn(e,t)),r=ie(Ye(i,[0,1,0])),s=ie(Ye(r,i));return{pos:ss(n),fwd:i,side:r,up:s}}const Nn={splitT:Pl,point:ss,radius:lf,basis:uf,tipPos:ss(1),tipRadius:af};Xt.walkBranch=Nn;function oh(n){const t=new Te,e=new Te,i=bs(n?481001:481002),r=n?20:4,s=n?16:6,o=[];for(let g=0;g<=r;g++){const x=g/r*Un,d=jc(x),m=qi(x),b=[];for(let S=0;S<s;S++){const y=2*Math.PI*S/s,E=n?.86+.1*ae(Math.cos(y)*2.2+x*13,Math.sin(y)*2.2+x*13+30)+.06*ae(Math.cos(y)*6.4+x*29+8,Math.sin(y)*6.4+x*29+51):1,w=m*E,M=oe(d.p,oe(Ct(d.x,Math.cos(y)*w),Ct(d.z,Math.sin(y)*w))),A=nt((E-.86)/.2+.4,0,1),L=oo(Wa,Va,A);b.push(t.addVertex(M[0],M[1],M[2],L.toArray()))}o.push(b)}for(let g=0;g<o.length-1;g++)for(let x=0;x<s;x++){const d=(x+1)%s;t.addQuad(o[g][x],o[g][d],o[g+1][d],o[g+1][x])}const a=Qo(n?7:5),c=Dr(n?8:6,n?5:4),l=oo(ih,rh,.42);function u(g,x,d){const m=x*(.9+i()*.3),b=x*(.75+i()*.25),S={x:[m,0,0],y:[0,b,0],z:[0,0,m],p:g};e.bake(c,S,()=>(n?oo(ih,rh,d):l).toArray())}const h=n?10:3,f=n?10:5,p=[];for(let g=0;g<=h;g++){const x=g/h,d=uf(x),m=lf(x),b=[];for(let S=0;S<f;S++){const y=2*Math.PI*S/f,E=n?.9+.1*ae(Math.cos(y)*2.4+x*11+100,Math.sin(y)*2.4+x*11+44):1,w=m*E,M=oe(d.pos,oe(Ct(d.side,Math.cos(y)*w),Ct(d.up,Math.sin(y)*w))),A=oo(Wa,Va,nt((E-.9)/.1,0,1));b.push(t.addVertex(M[0],M[1],M[2],A.toArray()))}p.push(b)}for(let g=0;g<p.length-1;g++)for(let x=0;x<f;x++){const d=(x+1)%f;t.addQuad(p[g][x],p[g][d],p[g+1][d],p[g+1][x])}if(n){const g=ki(0),x=Xt.w;for(let m=0;m<4;m++){const b=m/4*Math.PI*2+i()*.5,S=x*1.6+i()*3,y=[g[0],g[1]+x*.7,g[2]],E=[g[0]+Math.cos(b)*S,g[1]-1.6,g[2]+Math.sin(b)*S],w=Xe(y,E,x*.5);t.bake(a,w,()=>Wa.toArray())}const d=5;for(let m=0;m<d;m++){const b=Un*(.6+m/d*.35+i()*.03),S=jc(b),y=m/d*Math.PI*2+i()*.7,E=ie(oe(Ct(S.x,Math.cos(y)),Ct(S.z,Math.sin(y)))),w=ie(oe(Ct(E,.7),[0,.7,0])),M=oe(S.p,Ct(E,qi(b)*.7)),A=34+i()*22,L=oe(M,Ct(w,A)),_=3.4+i()*1.4,v=Xe(M,L,_),I=new tt(Va).multiplyScalar(.9);t.bake(a,v,()=>I.toArray()),u(L,30+i()*13,i()),u(oe(M,Ct(Zn(L,M),.55)),22+i()*9,i())}u(oe(ki(Un),[0,12,0]),34,.5)}else u(oe(ki(Un),[-14,14,6]),55,.5),u(oe(ki(Un),[18,22,-8]),48,.5);return{bark:t.toBufferGeometry(),leaf:e.toBufferGeometry()}}const zM=130,kM=170;function GM(){const n=zr({map:jv(),strength:1,roughness:.92,side:he}),t=new nn({vertexColors:!0,roughness:.92,metalness:0,side:he}),e=oh(!0),i=oh(!1),r=new be;r.add(new Vt(e.bark,n),new Vt(e.leaf,t));const s=new be;s.add(new Vt(i.bark,n),new Vt(i.leaf,t));for(const l of r.children)l.castShadow=!0,l.receiveShadow=!0;for(const l of s.children)l.castShadow=!0;s.visible=!1;const o=new be;o.name="tree",o.add(r,s);let a=!0;function c(l){const u=Math.hypot(l.position.x-Xt.x,l.position.z-Xt.z);a&&u>kM?a=!1:!a&&u<zM&&(a=!0),r.visible=a,s.visible=!a}return{group:o,update:c}}const Ur=8,HM=.3,To=[];function yn(n,t){const e={p:[n[0],n[1],n[2]],c:[t[0],t[1],t[2]],_d:0};return To.push(e),e}const Li=new Float32Array(Ur*3),Ii=new Float32Array(Ur*3),Ni=new de(0,0,0,1),Wo=new de(0,1,0,0),VM={uLightPos:{value:Li},uLightCol:{value:Ii},uPitA:{value:Ni},uPitB:{value:Wo}};function WM(n,t,e,i,r){Ni.set(n,t,e,Math.max(i,.001)),Wo.set(1,Math.max(r,.001),0,0)}function Jc(n,t,e){if(Wo.x<.5)return 0;const i=a=>{const c=Math.min(1,Math.max(0,a));return c*c*(3-2*c)},r=Math.hypot(n-Ni.x,e-Ni.z),s=1-i((r-Ni.w*.9)/(Ni.w*.8)),o=Math.min(1,Math.max(0,(Ni.y-t)/Wo.y));return s*i((o-.04)/.46)}function XM(n){const t=n.x,e=n.y,i=n.z;for(let s=0;s<To.length;s++){const o=To[s],a=o.p[0]-t,c=o.p[1]-e,l=o.p[2]-i;o._d=a*a+c*c+l*l}const r=To.slice().sort((s,o)=>s._d-o._d);for(let s=0;s<Ur;s++){const o=r[s];o?(Li[s*3]=o.p[0],Li[s*3+1]=o.p[1],Li[s*3+2]=o.p[2],Ii[s*3]=o.c[0],Ii[s*3+1]=o.c[1],Ii[s*3+2]=o.c[2]):(Li[s*3]=Li[s*3+1]=Li[s*3+2]=0,Ii[s*3]=Ii[s*3+1]=Ii[s*3+2]=0)}}function qM(n,t,e){if(e>=Be)return .9;const i=Math.max(0,Math.min(1,(e-me)/(Be-me)));return .12+.88*Math.pow(i,1.6)}const YM=`
uniform vec3 uLightPos[${Ur}];
uniform vec3 uLightCol[${Ur}];
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
  float t = clamp((w.z - (${me.toFixed(1)})) / (${(Be-me).toFixed(1)}), 0.0, 1.0);
  return (0.12 + 0.88 * pow(t, 1.6)) * pit;
}
`;function Cs(n){if(!n||n.userData.nestShaded)return n;n.userData.nestShaded=!0;const t=n.onBeforeCompile;n.onBeforeCompile=function(i,r){t&&t.call(this,i,r),Object.assign(i.uniforms,VM),i.vertexShader=i.vertexShader.replace("#include <common>",`varying vec3 vNestWorld;
#include <common>`).replace("#include <project_vertex>",`#include <project_vertex>
  vec4 nestLocal = vec4(transformed, 1.0);
  #ifdef USE_INSTANCING
    nestLocal = instanceMatrix * nestLocal;
  #endif
  vNestWorld = (modelMatrix * nestLocal).xyz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",YM+`
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
          reflectedLight.indirectDiffuse *= max(nestDay, ${HM.toFixed(2)});
          vec3 nestSum = vec3(0.0);
          for (int i = 0; i < ${Ur}; i++) {
            vec3 Ld = uLightPos[i] - vNestWorld;
            float d = length(Ld);
            float att = 1.0 / (1.0 + d * d * 0.017);
            nestSum += uLightCol[i] * max(dot(normal, Ld / max(d, 0.001)), 0.0) * att;
          }
          reflectedLight.directDiffuse += diffuseColor.rgb * nestSum;
        }
      `)};const e=n.userData.shaderTag||"";return n.customProgramCacheKey=()=>"nest-shading|"+e,n.needsUpdate=!0,n}const ze=n=>new tt(n).toArray(),Qe=(n,t)=>[n[0]*t,n[1]*t,n[2]*t],ai=(n,t,e,i)=>[n[0]*t,n[1]*e,n[2]*i],ci=(n,t,e)=>[Ht(n[0],t[0],e),Ht(n[1],t[1],e),Ht(n[2],t[2],e)],$M=ze("#6d5130"),KM=ze("#5a4226"),os=ze("#332412"),wo=ze("#4c5f2f"),Xa=ze("#6a6154"),jM="#5E4526",ZM=ze("#4a3418"),ah=ze(jM),ch=ze("#efdcb0"),lh=ze("#7a6040"),JM=ze("#ffc46a"),qa=ze("#c497d9"),QM=ze("#e0a752"),uh=ci(ze("#e07356"),ze("#e6b558"),.5),tS=ze("#9db0d8"),eS=Qe(ci(wo,os,.62),.58),nS=Qe(os,.7),Ya=[.72,.48,1.75],iS=[1.95,1.2,.52],Yi=[],$i=[];function Ll(n){return n.r*.65}function rS(n){const t=new Te,e=new Te,i=new Te,r=bs(20260812),s=Dr(10,7),o=Dr(6,4),a=Qo(8),c=(E,w,M,A)=>Hi([E,0,0],[0,w,0],[0,0,M],A);{const M=[];for(let A=0;A<=9;A++){const L=[];for(let _=0;_<=30;_++){const v=2*Math.PI*_/30,I=Yc*1.02*A/9,U=ne[0]+Math.cos(v)*I,N=ne[2]+Math.sin(v)*I,W=se(U,N)+.08,F=ci($M,KM,nt(.3+ae(U*.2,N*.2)*.5,0,1));L.push(t.addVertex(U,W,N,Qe(F,.65+.35*(1-A/9))))}M.push(L)}for(let A=0;A<9;A++)for(let L=0;L<30;L++)t.addQuad(M[A][L],M[A][L+1],M[A+1][L+1],M[A+1][L])}const l=Qe(ZM,.8);function u(E,w,M,A,L,_){let I=null;for(let U=0;U<=8;U++){const N=U/8,W=Math.sin(N*Math.PI),F=Ht(w,M,N),B=zi(F,E+_*W,L*W);I&&t.bake(a,Xe(I,B,A*(.65+.5*W)),()=>l),I=B}}for(let E=0;E<30;E++){const w=me+8+r()*(Math.abs(me)-16),M=Math.PI*(.15+r()*.7);u(w,M,M+.5+r()*1.3,.5+r()*.9,.06+r()*.16,(r()-.5)*9)}const h=Qe(ah,.55);for(let E=0;E<150;E++){const w=me+5+r()*(Math.abs(me)-10),M=Math.PI*(.18+r()*.64),A=zi(M,w,.02),L=1.2+r()*(Oe(w)>16?7:3),_=[A[0]+(r()-.5)*.8,A[1]-L,A[2]+(r()-.5)*.8];t.bake(a,Xe(A,_,.09+r()*.1),()=>h)}for(let E=0;E<520;E++){const w=me+3+r()*(Math.abs(me)-5),M=r()*Math.PI*2,A=zi(M,w,.01),L=.22+r()*.55,_=Qe(lh,(.7+r()*.7)*(.5+r()*.5));t.bake(o,c(L,L*.8,L,A),()=>_)}for(let E=0;E<120;E++){const w=me+5+r()*(Math.abs(me)-8),M=Oe(w)*.7,A=(r()-.5)*2*M,L=.3+r()*.9,_=Qe(Xa,(.6+r()*.8)*.8);i.bake(o,c(L*1.3,L*.7,L*1.1,[A,se(A,w)+L*.3,w]),()=>_)}function f(E,w,M,A,L,_,v){if(Math.hypot(E-qc[0],w-qc[1])<15)return;const I=ai(L,.3,.28,.4),U=v||ai(L,.95,.62,1.15);for(let N=0;N<M;N++){const W=E+(r()-.5)*7,F=w+(r()-.5)*7,B=A*(.45+r()*.9),P=se(W,F),z=[W,P+1.7*B,F];t.bake(a,Xe([W,P,F],z,.22*B),()=>I),e.bake(s,c(1.15*B,.8*B,1.15*B,z),()=>U),Yi.push({x:W,z:F,r:1.15*B+.5})}yn([E,se(E,w)+2.4,w],_)}for(let E=0;E<9;E++){const w=-14-E*10.5;f((E%2?1:-1)*(3.5+r()*1.8),w,4+Math.floor(r()*4),1.3,qa,Ya)}for(let E=0;E<8;E++){const w=r()*Math.PI*2,M=17+r()*9;let A=ne[0]+Math.cos(w)*M;const L=ne[2]+Math.sin(w)*M,_=Oe(L)*.72;Math.abs(A)>_&&(A=Math.sign(A)*_),f(A,L,5+Math.floor(r()*5),1.9,qa,Ya)}const p=Qe(ah,.36),g=ai(JM,1.25,1.15,1.4);for(let E=0;E<26;E++){const w=Math.PI*(.2+r()*.6),M=bl+(r()-.5)*Go*1.5,A=zi(w,M,.03),L=[A[0],A[1]-(3+r()*11),A[2]];t.bake(a,Xe(A,L,.07),()=>p);const _=.55+r()*.75;e.bake(s,c(_,_*1.25,_,L),()=>g),E%3===0&&yn(L,iS)}const x=ai(ch,.76,.7,.58);for(let E=0;E<5;E++){const w=Math.PI*(.15+E*.42),M=8+r()*5,A=ne[0]+Math.cos(w)*M,L=ne[2]+Math.sin(w)*M;for(let _=0;_<22;_++){const v=A+(r()-.5)*5.5,I=L+(r()-.5)*5.5,U=.5+r()*.35;t.bake(s,c(U*.72,U*.72,U*1.5,[v,se(v,I)+U*.6,I]),()=>x)}yn([A,se(A,L)+1.5,L],[.55,.42,.22])}if(yn([ne[0],se(ne[0],ne[2])+9,ne[2]],[1.5,1.05,.5]),n&&n.granary){const E=n.granary;for(let M=0;M<5;M++){const A=(r()-.5)*Math.PI*1.6,L=nt(E.uEnd+(r()-.5)*E.uMax*.5,E.uMax*.42,E.uMax*.96),_=E.pointAt(A,L,.12);for(let v=0;v<26;v++){const I=_[0]+(r()-.5)*4.5,U=_[2]+(r()-.5)*4.5,N=.5+r()*1.3,W=nt(1-Math.hypot(I-_[0],U-_[2])/4.5,0,1),F=Qe(ci(ci(QM,uh,r()*.4),os,W*.5),.55+.35*(1-W));t.bake(o,c(N,N*.85,N,[I,se(I,U)+N*.4,U]),()=>F)}}const w=ai(uh,.94,.81,.51);for(let M=0;M<10;M++){const A=(r()-.5)*Math.PI*1.5,L=nt(E.uEnd+(r()-.5)*E.uMax*.55,4,E.uMax-2),_=r()<.5,v=E.pointAt(A,L,_?.85:.06),I=.5+r()*.7,U=_?v[1]-I*(.6+r()*1.6):se(v[0],v[2])+I*.55;t.bake(s,c(I*.8,I*1.3,I*.8,[v[0],U,v[2]]),()=>w)}for(let M=0;M<2;M++){const A=E.pointAt(0,2+r()*4,.3);yn([A[0],se(A[0],A[2])+2.2,A[2]],[.42,.3,.14])}}if(n&&n.brood){const E=n.brood,w=[.34,.5,.68],M=[1,1.55,1.15],A=ai(tS,.42,.4,.46);for(let L=0;L<7;L++){const _=(r()-.5)*Math.PI*1.7,v=nt(E.uEnd+(r()-.5)*E.uMax*.6,E.uMax*.32,E.uMax*.97),I=E.pointAt(_,v,.1),U=se(I[0],I[2]),N=14+Math.floor(r()*14);for(let W=0;W<N;W++){const F=Math.floor(r()*3),B=w[F]+r()*.22,P=I[0]+(r()-.5)*4.6,z=I[2]+(r()-.5)*4.6,H=(.85+r()*.25)*.85,j=ai(ch,H,H*.94,H*.8);t.bake(s,c(B*.75,B*.75,B*1.5*M[F],[P,se(P,z)+B*.6,z]),()=>j)}if(L%2===0){const W=4+Math.floor(r()*3);for(let F=0;F<W;F++){const B=r()*Math.PI*2,P=B+1.4+r()*1.2,z=2.2+r()*1.2,H=[I[0]+Math.cos(B)*z,U+.5+r()*1,I[2]+Math.sin(B)*z],j=[I[0]+Math.cos(P)*z,U+.5+r()*1,I[2]+Math.sin(P)*z];t.bake(a,Xe(H,j,.03),()=>A)}}yn([I[0],U+1.6,I[2]],[.62,.46,.24])}for(let L=0;L<2;L++){const _=(r()-.5)*Math.PI*1.4,v=nt(E.uEnd+(r()-.5)*E.uMax*.4,4,E.uMax-2),I=E.pointAt(_,v,.1);f(I[0],I[2],2+Math.floor(r()*2),1.1,qa,Ya)}}if(n&&n.midden){const E=n.midden,w=ci(wo,os,.5),M=Qe(ci(wo,os,.3),3.5),A=[.3,.46,.3];for(let v=0;v<3;v++){const I=(r()-.5)*Math.PI*1.6,U=nt(E.uEnd+(r()-.5)*E.uMax*.5,4,E.uMax-2),N=E.pointAt(I,U,.08);f(N[0],N[2],3+Math.floor(r()*3),1,w,A,M)}for(let v=0;v<4;v++){const I=(r()-.5)*Math.PI*1.7,U=nt(E.uEnd+(r()-.5)*E.uMax*.55,3,E.uMax-1.5),N=E.pointAt(I,U,.1);for(let W=0;W<20;W++){const F=N[0]+(r()-.5)*5,B=N[2]+(r()-.5)*5,P=.4+r()*1.1,z=Qe(r()<.5?Xa:lh,(.3+r()*.35)*.55);i.bake(o,c(P*1.2,P*.7,P,[F,se(F,B)+P*.3,B]),()=>z)}}const L=Qe(nS,.5);for(let v=0;v<5;v++){const I=(r()-.5)*Math.PI*1.6,U=nt(E.uEnd+(r()-.5)*E.uMax*.5,3,E.uMax-1.5),N=E.pointAt(I,U,.12),W=se(N[0],N[2]),F=2.2+r()*2.2,B=r()*Math.PI*2;t.bake(a,Xe([N[0],W+.35,N[2]],[N[0]+Math.cos(B)*F,W+.3,N[2]+Math.sin(B)*F],.55+r()*.35),()=>L)}const _=ai(eS,.3,.36,.3);for(let v=0;v<6;v++){const I=(r()-.5)*Math.PI*1.6,U=nt(E.uEnd+(r()-.5)*E.uMax*.55,3,E.uMax-1.5),N=E.pointAt(I,U,.05),W=1+r()*1.6;t.bake(s,c(W,.12,W,[N[0],se(N[0],N[2])+.03,N[2]]),()=>_)}}for(let E=0;E<42;E++){const w=-200+r()*380,M=8+r()*250;if(Mi(w,M)>0||Qn(w,M)<4)continue;const A=2+r()*6,L=1.5+r()*4,_=2+r()*6,v=Nt(w,M)+L*.35,I=.75+r()*.5,U=r()*40,N=r()<.6?.5+r()*.5:0;i.bake(s,c(A,L,_,[w,v,M]),(W,F,B)=>{const P=Qe(Xa,I);if(N<=0)return P;const z=nt((F-v)/L+.15*ae(W*.3+U,B*.3+U),0,1);return ci(P,wo,z*z*N)}),$i.push({x:w,z:M,r:(A+_)*.5+1})}const d=new be;d.name="nest-decor";const m=new Vt(t.toBufferGeometry(),new nn({vertexColors:!0,roughness:.92,metalness:0,side:he}));m.name="nest-decor-matte",d.add(m);const b=new Vt(i.toBufferGeometry(),zr({map:Jv(),strength:1,roughness:.92,side:he}));b.name="nest-decor-stone",b.castShadow=!0,b.receiveShadow=!0,d.add(b);const S=ef({map:Jd(),strength:.7,emissive:.95,color:7829367,side:he}),y=new Vt(e.toBufferGeometry(),S);return y.name="nest-decor-glow",d.add(y),{group:d,mushrooms:Yi,rocks:$i}}const $a=new tt("#b07226").toArray(),Zr=new tt("#5e3d16").toArray(),hh=new tt("#100c06").toArray(),De=2.4,sS=2.7,oS=2.9;function aS(n,t,e,i,r){const s=Zn(t,n),o=Math.hypot(s[0],s[1],s[2]),a=nt(o,.05,e+i-.02),c=Ct(s,1/(o||1)),l=(e*e-i*i+a*a)/(2*a),u=Math.sqrt(Math.max(e*e-l*l,0)),h=r[0]*c[0]+r[1]*c[1]+r[2]*c[2],f=ie(Zn(r,Ct(c,h)));return oe(oe(n,Ct(c,l)),Ct(f,u))}function dh(n){const t=new rn;return t.setAttribute("position",new ge(n.p,3)),t.setAttribute("normal",new ge(n.n,3)),t.setIndex(n.i),t}function fh(n,t){n.matrix.set(t.x[0],t.y[0],t.z[0],t.p[0],t.x[1],t.y[1],t.z[1],t.p[1],t.x[2],t.y[2],t.z[2],t.p[2],0,0,0,1),n.matrixWorldNeedsUpdate=!0}function cS(){const n=new be;n.name="queen";const t=[ne[0],se(ne[0],ne[2]),ne[2]],e=Math.PI,i=[Math.sin(e),0,Math.cos(e)],r=[0,1,0],s=ie(Ye(r,i)),o=Hi(s,r,i,[t[0],t[1]+1.05*De,t[2]]),a=A=>Zd(o,Ct(A,De)),c=Dr(12,9),l=Qo(8),u=new Te,h=(A,L,_,v)=>Hi(Ct(s,L*De),Ct(r,_*De),Ct(i,v*De),a(A)),f=(A,L,_,v,I)=>u.bake(c,h(A,L,_,v),()=>I),p=(A,L,_,v)=>u.bake(l,Xe(A,L,_),()=>v);f([0,1.5,-1.2],.5,.5,.62,Zr),f([0,1.62,.5],1.06,1.02,1.75,$a),f([0,1.66,2.7],1.18,1.02,1.12,$a),f([.76,2.12,3.1],.3,.26,.3,hh),f([-.76,2.12,3.1],.3,.26,.3,hh);for(let A=-1;A<=1;A+=2)p(a([A*.55,1.45,3.5]),a([A*.34,1.2,4.8]),.17*De,$a);const g=[[.92,1.5,1.7],[-.92,1.5,1.7],[1.02,1.4,.4],[-1.02,1.4,.4],[.92,1.4,-1.15],[-.92,1.4,-1.15]],x=[[4.1,0,3.9],[-4.1,0,3.9],[4.9,0,.3],[-4.9,0,.3],[4.5,0,-3.5],[-4.5,0,-3.5]];for(let A=0;A<6;A++){const L=a(g[A]),_=a(x[A]);_[1]=se(_[0],_[2]);const v=g[A][0]>0?s:Ct(s,-1),I=aS(L,_,sS*De,oS*De,ie(oe(r,Ct(v,.75))));p(L,I,.2*De,Zr),p(I,_,.14*De,Zr),u.bake(c,Hi([.3*De,0,0],[0,.3*De,0],[0,0,.3*De],I),()=>Zr)}const d=new nn({vertexColors:!0,roughness:.45,metalness:.05}),m=new Vt(u.toBufferGeometry(),d);m.name="queen-body",m.castShadow=!0,n.add(m);const b=dh(c),S=dh(l),y=new nn({color:new tt().fromArray(Zr),roughness:.45,metalness:.05}),E=[{local:[0,1.5,-5.4],rx:1.34,ry:1.3,rz:1.9},{local:[0,1.55,-3.2],rx:1.6,ry:1.54,rz:2.1}].map(A=>{const L=new Vt(b,y);return L.matrixAutoUpdate=!1,L.castShadow=!0,n.add(L),{mesh:L,...A}}),w=[];for(let A=-1;A<=1;A+=2)for(let L=0;L<2;L++){const _=new Vt(S,y);_.matrixAutoUpdate=!1,n.add(_),w.push({mesh:_,sA:A,seg:L})}function M(A){const L=1+Math.sin(A*.55)*.04;for(const _ of E)fh(_.mesh,h(_.local,_.rx*L,_.ry*L,_.rz));for(const _ of w){const v=Math.sin(A*1.1+(_.sA>0?0:1.3))*.35,I=a([_.sA*.58,2.1,3.2]),U=a([_.sA*(1.4+v*.3),3.3,4.2]),N=a([_.sA*(1.85+v),3.2+v*.4,6.1]);fh(_.mesh,_.seg===0?Xe(I,U,.14*De):Xe(U,N,.11*De))}}return M(0),{group:n,update:M}}const Il={sunDir:ie([-300,120,195]),sunColor:15251852,sunIntensity:5.4,hemiSky:7241640,hemiGround:4867376,hemiIntensity:1.15,fog:8221832,fogNear:95,fogFar:420,sky:10130344,exposure:1.3},Dl={sunDir:ie([30,45,20]),sunColor:16767370,sunIntensity:2.5,hemiSky:12572917,hemiGround:7236152,hemiIntensity:.85,fog:11520216,fogNear:90,fogFar:420,sky:10274532,exposure:1.15};let as=0;function ea(){return as}function lS(n){as=n<0?0:n>1?1:n}const Rn=[0,1,0];function na(){const n=Il.sunDir,t=Dl.sunDir;Rn[0]=n[0]+(t[0]-n[0])*as,Rn[1]=n[1]+(t[1]-n[1])*as,Rn[2]=n[2]+(t[2]-n[2])*as;const e=Math.hypot(Rn[0],Rn[1],Rn[2])||1;return Rn[0]/=e,Rn[1]/=e,Rn[2]/=e,Rn}const uS=56;function ph(n,t,e,i,r,s,o,a){const c=i-n,l=r-t,u=s-e,h=c*a[0]+l*a[1]+u*a[2];if(h<=0)return 0;const f=c*c+l*l+u*u-h*h,p=Math.sqrt(f>0?f:0),g=o*.35+h*.06,x=nt((o+g-p)/g,0,1);return x*x*(3-2*x)}function hS(n,t,e,i){const r=Math.hypot(i[0],i[2]);if(r<1e-4)return 0;const s=i[0]/r,o=i[2]/r,a=Xt.x-n,c=Xt.z-e,l=a*s+c*o;if(l<=0)return 0;const u=Math.abs(a*o-c*s);if(t+i[1]/r*l>Xt.baseY+Xt.h*Un)return 0;const f=Xt.w*.4+l*.05,p=nt((Xt.w+f-u)/f,0,1);return p*p*(3-2*p)}function dS(n,t,e,i){const r=Math.hypot(i[0],i[2]);if(r<1e-4)return 0;const s=i[0]/r,o=i[2]/r,a=i[1]/r,c=Math.min(170,34/a+14);let l=0;for(let u=2.5;u<c;u*=1.38){const f=Nt(n+s*u,e+o*u)-(t+a*u+.5);if(f<=0)continue;const p=1.2+u*.05,g=nt(f/p,0,1);if(g>l&&(l=g),l>=1)break}return l}function hf(n,t){if(t<Be)return 1;const e=na(),i=Nt(n,t),r=Rs(n,t),s=nt((r[0]*e[0]+r[1]*e[1]+r[2]*e[2])/Math.max(e[1],.001),0,1);let o=dS(n,i,t,e);if(o<1){const a=i+1.2;o=Math.max(o,hS(n,a,t,e));const c=ki(Un);o=Math.max(o,ph(n,a,t,c[0],c[1]+14,c[2],uS,e));for(let l=0;l<$i.length&&o<1;l++){const u=$i[l],h=u.r*.8;o=Math.max(o,ph(n,a,t,u.x,Nt(u.x,u.z)+h*.45,u.z,h,e))}}return nt(1-s*(1-o),0,1)}const Bn=[],df=new Map,fS=["graine","brindille","miellat"],pS={graine:4,brindille:3,miellat:5},mS={graine:5,brindille:6,miellat:5},gS=[.88,.66,.32],_S=[.55,.38,.18],xS=[.42,.32,.19],mh=[.24,.18,.1],vS=[.94,.74,.36],MS=[.78,.5,.2],SS=new tt("#4A4438"),Ul=(n,t,e)=>[Ht(n[0],t[0],e),Ht(n[1],t[1],e),Ht(n[2],t[2],e)];function yS(n,t,e,i,r){const s=new Te,o=[];for(let a=0;a<=i;a++){const c=a/i,l=[],u=t(c);for(let h=0;h<e;h++){const f=2*Math.PI*h/e;l.push(s.addVertex(Math.cos(f)*u,c*n,Math.sin(f)*u,r(c,f)))}o.push(l)}for(let a=0;a<i;a++)for(let c=0;c<e;c++){const l=(c+1)%e;s.addQuad(o[a][c],o[a][l],o[a+1][l],o[a+1][c])}return s}function ES(){return yS(7,t=>Math.pow(Math.sin(Math.PI*t),.62)*2*(1-.3*t),7,5,(t,e)=>Ul(_S,gS,nt(.25+.75*Math.pow(Math.abs(Math.cos(e*.5)),1.5)*(.4+.6*t),0,1))).toBufferGeometry()}function bS(){const n=new Te,t=Qo(5),e=[[0,0,0],[.6,5.5,.4],[2.4,10.6,.2]];for(let i=0;i<2;i++)n.bake(t,Xe(e[i],e[i+1],.62-i*.16),(r,s)=>Ul(mh,xS,nt(.55+.25*Math.sin(s*1.7),0,1)));return n.bake(t,Xe([.6,5.5,.4],[-2.6,8.2,-1.1],.33),()=>mh),n.toBufferGeometry()}function TS(){const n=new Te,t=Dr(6,3),e=[[0,.9,0,2.6,1.5,2.2],[2.4,.6,1.1,1.7,1,1.5],[-1.6,.7,1.6,1.9,1.2,1.7]];for(const i of e)n.bake(t,Hi([i[3],0,0],[0,i[4],0],[0,0,i[5]],[i[0],i[1],i[2]]),(r,s)=>Ul(MS,vS,nt((s-i[1])/(i[4]*2)+.55,0,1)));return n.toBufferGeometry()}const cs=(n,t)=>n>=t?0:Math.pow(1-n/t,1.5);function wS(n,t){if(Mi(n,t)>0||Qn(n,t)<10)return 0;let e=.16;return e+=1.05*cs(Math.hypot(n-Xt.x,t-Xt.z),78),e+=.85*cs(Math.hypot(n-88,t-168),74),e+=.7*cs(Math.hypot(n-24,t-128),46),e*nt(1-(kr(n,t)-.16)/.5,.12,1)}const AS=2;function RS(n,t,e){const i=Math.hypot(n-Xt.x,t-Xt.z)<85,r=e();return i?r<.55?"brindille":r<.85?"miellat":"graine":cs(Math.hypot(n-88,t-168),74)+cs(Math.hypot(n-24,t-128),46)>.25?r<.6?"graine":r<.85?"miellat":"brindille":r<.5?"graine":r<.8?"brindille":"miellat"}const gh=32;function CS(n=90210){const t=bs(n),e=Ee;let i=0,r=0,s=1;for(;i<gh&&r++<gh*200;){const o=Ht(e.x0+14,e.x1-14,t()),a=Ht(e.z0+16,e.z1-14,t());if(t()*AS>wS(o,a))continue;const c=RS(o,a,t),l=3+Math.floor(t()*4);let u=0;for(let h=0;h<l*3&&u<l;h++){const f=t()*Math.PI*2,p=Math.sqrt(t())*12,g=o+Math.cos(f)*p,x=a+Math.sin(f)*p;if(Mi(g,x)>0||Qn(g,x)<10||kr(g,x)>.7)continue;const d=Math.max(1,pS[c]+Math.round((t()-.5)*2)),m={id:s++,x:g,z:x,kind:c,amount:d,r:mS[c],amount0:d,yaw:t()*Math.PI*2,tilt:(t()-.5)*.5,size:.75+t()*.5,_slot:-1};Bn.push(m),df.set(m.id,m),u++}u&&i++}}const ff={},_h=new ee,xh=new Fr,vh=new An,Mh=new V,Sh=new V,yh=new tt;function pf(n){const t=ff[n.kind];if(!t||n._slot<0)return;const e=n.amount0>0?n.amount/n.amount0:0,i=n.size*Ht(.45,1,Math.pow(e,.6)),r=Rs(n.x,n.z);vh.set(n.tilt-Math.atan2(r[2],r[1])*.6,n.yaw,n.tilt+Math.atan2(r[0],r[1])*.6),xh.setFromEuler(vh),Mh.set(n.x,Nt(n.x,n.z)-.35*i,n.z),Sh.set(i,i,i),_h.compose(Mh,xh,Sh),t.setMatrixAt(n._slot,_h),yh.set(1,1,1).lerp(SS,(1-e)*.8),t.setColorAt(n._slot,yh),t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0)}function mf(n,t=1){const e=df.get(n);if(!e||e.amount<=0||!(t>0))return 0;const i=Math.min(t,e.amount);return e.amount-=i,pf(e),i}function PS(n,t,e=12,i=!1){const r=[];for(const s of Bn)!i&&s.amount<=0||Math.hypot(s.x-n,s.z-t)<=e&&r.push(s);return r}function LS(){const n=new be;n.name="resources",Bn.length===0&&CS();const t={graine:ES(),brindille:bS(),miellat:TS()},e=new nn({vertexColors:!0,roughness:.9,metalness:0}),i=new nn({vertexColors:!0,roughness:.22,metalness:0});for(const r of fS){const s=Bn.filter(c=>c.kind===r),o=Math.max(s.length,1),a=new Zo(t[r],r==="miellat"?i:e,o);a.name="resource-"+r,a.castShadow=!0,a.receiveShadow=!0,a.count=s.length,a.instanceColor=new In(new Float32Array(o*3).fill(1),3),a.frustumCulled=!1,ff[r]=a,s.forEach((c,l)=>{c._slot=l,pf(c)}),n.add(a)}return{group:n,nodes:Bn}}const ls=4.2,Fi=15,Nl=14,qn=8,Eh=.22,Mr=1.6,Ao=17,IS=18,DS=.62,Tr=new tt("#6d5130"),gf=new tt("#5a4226"),us=new tt("#332412"),US=new tt("#e0a752"),NS=new tt("#efdcb0"),FS=new tt("#ffc46a"),Ro=[.55,.62,.82],OS=[1.05,.62,.24],Ka=[.85,.55,.22],ja=[1.95,1.2,.52],Gr=4,_f=48,xf=7.5,bh=24;function BS(n){return Math.min(bh,Math.floor(nt(n,0,1)*bh+1e-9))}const ms=6;let Qc=null,te=null,pi=new Array(Gr).fill(null);const Gi=(n,t,e)=>new tt(n).lerp(t,nt(e,0,1));function zS(n){Qc=n}function vf(){return te?{x:te.x,z:te.z}:null}function Mf(){return te}function Fl(n,t){if(te)return{ok:!1,reason:"already-founded"};if(t<Be)return{ok:!1,reason:"underground"};const e=Ee;return n<e.x0+Ao||n>e.x1-Ao||t>e.z1-Ao?{ok:!1,reason:"bounds"}:Math.abs(n)<34&&t<34?{ok:!1,reason:"occupied"}:Mi(n,t)>0?{ok:!1,reason:"water"}:Qn(n,t)<IS?{ok:!1,reason:"water"}:kr(n,t)>DS?{ok:!1,reason:"slope"}:Cl(n,t).kind==="rock"?{ok:!1,reason:"rock"}:{ok:!0}}function Sf(n,t,e){const i=(r,s)=>ae(Math.cos(n)*r+t*s+e+37,Math.sin(n)*r+t*s*.7+e+91);return .84+.2*i(1.6,.1)+.1*i(4.1,.29)+.05*i(9.3,.62)}function kS(n){const t=Fi+qn,e=(n-t)/qn;return e>-1&&e<1?ls+(Nl-ls)*Math.pow(Math.sqrt(1-e*e),.72):ls}function GS(n,t,e){const i=Nt(n,t),r=(ae(n*.07,t*.07)-.5)*Math.PI*2,s=ie([Math.cos(r)*Eh,-1,Math.sin(r)*Eh]),o=ie(Ye(s,[0,0,1])),a=ie(Ye(s,o)),c=[n,i+Mr,t],l=Fi+2*qn,u=i+Mr-(Fi+qn*.92),h=22;function f(y,E){const w=Sf(y,E,e),M=kS(E)*w,A=c[0]+s[0]*E,L=c[1]+s[1]*E,_=c[2]+s[2]*E,v=A+(o[0]*Math.cos(y)+a[0]*Math.sin(y))*M,I=L+(o[1]*Math.cos(y)+a[1]*Math.sin(y))*M,U=_+(o[2]*Math.cos(y)+a[2]*Math.sin(y))*M;return[v,Math.max(I,u),U,w]}const p=new Te,g=[];for(let y=0;y<=l+1e-4;y+=1.5){const E=[];for(let w=0;w<h;w++){const M=2*Math.PI*w/h,A=f(M,y),L=nt((A[3]-.84)/.34+.45,0,1),_=Gi(us,gf,L*.8+.1).lerp(Tr,.18+L*.14).multiplyScalar(.88);E.push(p.addVertex(A[0],A[1],A[2],_.toArray()))}g.push(E)}for(let y=0;y<g.length-1;y++)for(let E=0;E<h;E++){const w=(E+1)%h;p.addQuad(g[y][E],g[y][w],g[y+1][w],g[y+1][E])}const x=g[g.length-1],d=p.addVertex(c[0]+s[0]*l,u,c[2]+s[2]*l,Gi(us,Tr,.35).toArray());for(let y=0;y<h;y++)p.addTri(d,x[y],x[(y+1)%h]);const m=8,b=[];for(let y=0;y<=m;y++){const E=y/m,w=Ht(ls*1.02,Ao,E),M=[];for(let A=0;A<=h;A++){const L=2*Math.PI*(A%h)/h,_=n+Math.cos(L)*w,v=t+Math.sin(L)*w,I=.75+.5*ae(_*.16+e,v*.16+e),U=Mr*Math.pow(1-E,1.5)*I+.9*Math.sin(Math.PI*Math.min(1,E*1.35))*I,N=Ht(i+Mr,Nt(_,v),Math.pow(E,.7))+(E>0?U*.75:0),W=Gi(Gi(Tr,us,.35+.3*(1-E)),US,.12).multiplyScalar(.82+.25*I);M.push(p.addVertex(_,N,v,W.toArray()))}b.push(M)}for(let y=0;y<m;y++)for(let E=0;E<h;E++)p.addQuad(b[y][E],b[y][E+1],b[y+1][E+1],b[y+1][E]);const S=c[1]+s[1]*(Fi+qn);return{geometry:p.toBufferGeometry(),mouthY:i,floorY:u,origin:c,dir:s,uMax:l,chamber:{x:c[0]+s[0]*(Fi+qn),y:u,z:c[2]+s[2]*(Fi+qn),ceilY:S+qn*.55,r:Nl}}}function HS(n,t){const e=bs(t^23505),i=Dr(8,5),r=(g,x,d,m)=>Hi([g,0,0],[0,x,0],[0,0,d],m),s=n.chamber,o=[],a=Cs(new nn({vertexColors:!0,roughness:.85,metalness:0,side:he}));for(let g=0;g<ms;g++){const x=g/ms*Math.PI*2+e()*.5,d=s.r*(.28+e()*.34),m=s.x+Math.cos(x)*d,b=s.z+Math.sin(x)*d,S=new Te,y=5+Math.floor(e()*5);for(let M=0;M<y;M++){const A=e()*Math.PI*2,L=Math.sqrt(e())*2.6,_=m+Math.cos(A)*L,v=b+Math.sin(A)*L,I=.75+e()*.45;S.bake(i,r(I*1.25,I*.85,I,[_,s.y+I*.7,v]),(U,N)=>Gi(NS,Tr,nt(.55-(N-s.y)*.25,0,1)).toArray())}const E=new Vt(S.toBufferGeometry(),a);E.name="nest-brood-"+g,E.visible=!1,E.castShadow=!1;const w=yn([m,s.y+2.2,b],[0,0,0]);o.push({mesh:E,lamp:w,on:!1})}const c=new Te,l=s.x+(e()-.5)*6,u=s.z+(e()-.5)*6,h=s.ceilY-3.2;c.bake(i,r(1.5,1.8,1.5,[l,h,u]),()=>FS.toArray());const f=new Vt(c.toBufferGeometry(),ef({map:Jd(),strength:.7,emissive:.95,color:7829367,side:he}));f.name="nest-glow-bead",f.visible=!1;const p=yn([l,h,u],[0,0,0]);return{piles:o,bead:{mesh:f,lamp:p,on:!1}}}function yf(n,t){const e=Fl(n,t);if(!e.ok)return e;const i=Math.floor(Math.abs(n)*131+Math.abs(t)*977)%9973,r=GS(n,t,i),s=new be;s.name="founded-nest";const o=new Vt(r.geometry,Cs(zr({map:El(),strength:.62,side:he})));o.name="founded-nest-shell",o.receiveShadow=!0,s.add(o);const a=HS(r,i);for(const u of a.piles)s.add(u.mesh);s.add(a.bead.mesh),Qc&&Qc.add(s);const c=yn([n,r.mouthY-4,t],Ro),l=yn([n,r.mouthY+1,t],OS);return te={x:n,z:t,group:s,mouth:{x:n,y:r.mouthY+Mr,z:t,r:ls},chamber:r.chamber,floorY:r.floorY,axis:{origin:r.origin,dir:r.dir,length:r.uMax},brood:0,sealed:!1,_furnishing:a,_coldLight:c,_warmLight:l,_coldFade:1},WM(n,r.mouthY+Mr,t,Nl,Fi+qn),{ok:!0}}function Ef(n){if(!te)return 0;const t=Math.round(nt(n,0,ms));te.brood=t,te._furnishing.piles.forEach((i,r)=>{const s=r<t;i.mesh.visible=s,i.on=s,i.lamp.c[0]=s?Ka[0]:0,i.lamp.c[1]=s?Ka[1]:0,i.lamp.c[2]=s?Ka[2]:0});const e=te._furnishing.bead;return e.on=t>=4,e.mesh.visible=e.on,e.lamp.c[0]=e.on?ja[0]:0,e.lamp.c[1]=e.on?ja[1]:0,e.lamp.c[2]=e.on?ja[2]:0,t}function bf(n=!0){te&&(te.sealed=n)}function VS(n){if(!te)return;const t=te.sealed?0:1,e=Math.min(1,n/3);te._coldFade+=(t-te._coldFade)*e*3;const i=nt(te._coldFade,0,1);te._coldLight.c[0]=Ro[0]*i,te._coldLight.c[1]=Ro[1]*i,te._coldLight.c[2]=Ro[2]*i}function WS(n){return 2*Math.PI*n/Gr+Math.PI/4}function Tf(n){const t=te.chamber,e=WS(n),i={x:Math.cos(e),z:Math.sin(e)};return{id:`dig-${n}`,mouth:{x:t.x+i.x*t.r,y:te.floorY,z:t.z+i.z*t.r},dir:i,length:_f,r:xf}}function XS(n){return!te||!Number.isInteger(n)||n<0||n>=Gr?null:{...Tf(n),progress:0}}function tl(n){return{id:n.id,mouth:n.mouth,dir:n.dir,length:n.length,r:n.r,progress:n.progress}}function qS(){return pi.filter(Boolean).map(tl)}function wf(n){if(!te)return{ok:!1,reason:"not-founded"};if(!Number.isInteger(n)||n<0||n>=Gr)return{ok:!1,reason:"bad-index"};if(pi[n])return{ok:!0,site:tl(pi[n])};const e={...Tf(n),index:n,progress:0,seed:Math.floor(Math.abs(te.x)*131+Math.abs(te.z)*977+n*613)%9973,mesh:null,_meshStep:-1};return pi[n]=e,{ok:!0,site:tl(e)}}function Af(n){return pi.find(t=>t&&t.id===n)||null}function Rf(n,t){const e=Af(n);if(!e)return{ok:!1,progress:0,done:!1,reason:"unknown-site"};const i=Number.isFinite(t)?t:0;e.progress=nt(e.progress+i,0,1);const r=BS(e.progress);return r!==e._meshStep&&(e._meshStep=r,KS(e)),{ok:!0,progress:e.progress,done:e.progress>=1}}function YS(n){const t=Af(n);return t?t.progress:0}function $S(n,t){const e=[n.dir.x,0,n.dir.z],i=[e[2],0,-e[0]],r=[0,1,0],s=n.mouth.y-n.r*.85,o=16,a=new Te,c=[];for(let h=0;;h+=1.5){const f=Math.min(h,t),p=[],g=n.mouth.x+e[0]*f,x=n.mouth.z+e[2]*f;for(let d=0;d<o;d++){const m=2*Math.PI*d/o,b=Sf(m,f,n.seed),S=n.r*b,y=g+(i[0]*Math.cos(m)+r[0]*Math.sin(m))*S,E=n.mouth.y+(i[1]*Math.cos(m)+r[1]*Math.sin(m))*S,w=x+(i[2]*Math.cos(m)+r[2]*Math.sin(m))*S,M=Gi(us,gf,.5).lerp(Tr,.18).multiplyScalar(.88);p.push(a.addVertex(y,Math.max(E,s),w,M.toArray()))}if(c.push(p),f>=t)break}for(let h=0;h<c.length-1;h++)for(let f=0;f<o;f++){const p=(f+1)%o;a.addQuad(c[h][f],c[h][p],c[h+1][p],c[h+1][f])}const l=c[c.length-1],u=a.addVertex(n.mouth.x+e[0]*t,s,n.mouth.z+e[2]*t,Gi(us,Tr,.35).toArray());for(let h=0;h<o;h++)a.addTri(u,l[h],l[(h+1)%o]);return a.toBufferGeometry()}function KS(n){const t=n.progress*n.length;if(t<.001){n.mesh&&(n.mesh.visible=!1);return}const e=$S(n,t);if(n.mesh)n.mesh.geometry.dispose(),n.mesh.geometry=e,n.mesh.visible=!0;else{const i=Cs(zr({map:El(),strength:.62,side:he}));n.mesh=new Vt(e,i),n.mesh.name="dig-gallery-"+n.index,n.mesh.receiveShadow=!0,te.group.add(n.mesh)}}function jS(n,t){if(!te)return null;for(let l=0;l<pi.length;l++){const u=pi[l];if(!u)continue;const h=u.progress*u.length,f=n-u.mouth.x,p=t-u.mouth.z,g=f*u.dir.x+p*u.dir.z;if(g<=-.5||g>=h+1)continue;const x=f*-u.dir.z+p*u.dir.x,d=Math.max(u.r*.82-1.2,2.2);if(Math.abs(x)>=d+3)continue;const m=nt(g,-.5,h-.2),b=nt(x,-d,d);return[u.mouth.x+u.dir.x*m-u.dir.z*b,u.mouth.z+u.dir.z*m+u.dir.x*b]}const e=te.chamber,i=n-e.x,r=t-e.z,s=Math.hypot(i,r),o=Math.atan2(r,i);let a=Math.max(e.r*.82-1.6,3);for(const l of pi){if(!l)continue;const u=Math.atan2(l.dir.z,l.dir.x);let h=Math.abs(o-u)%(Math.PI*2);h>Math.PI&&(h=Math.PI*2-h);const f=h*e.r,p=nt(1-f/(l.r*2.2),0,1);if(p<=0)continue;const g=Ht(a,e.r+1.5,p);g>a&&(a=g)}const c=nt(s,0,a);return[e.x+Math.cos(o)*c,e.z+Math.sin(o)*c]}const ZS=12,ns=16384,Th=ns-1,JS=32768;function wh(n,t){if(t==null)return!0;if(typeof t=="string")return n===t;for(let e=0;e<t.length;e++)if(t[e]===n)return!0;return!1}function QS({cellSize:n=ZS}={}){if(!(n>0))throw new Error("spatialIndex: cellSize must be > 0");const t=1/n,e=[],i=[],r=[],s=[],o=[],a=[],c=[],l=new Map,u=new Map,h=new Map;let f=0,p=0;const g=B=>B<-ns?-ns:B>Th?Th:B,x=(B,P)=>(B+ns)*JS+(P+ns),d=(B,P)=>x(g(Math.floor(B*t)),g(Math.floor(P*t)));function m(B,P){const z=u.get(P);z?z.push(B):u.set(P,[B]),a[B]=P}function b(B){const P=u.get(a[B]);if(!P)return;const z=P.indexOf(B);z>=0&&(P[z]=P[P.length-1],P.pop(),P.length===0&&u.delete(a[B]))}function S(B,P){P>f&&(f=P);const z=h.get(B);(z===void 0||P>z)&&h.set(B,P)}function y(B,P,z,H,j=0){const rt=B+"#"+P;if(l.get(rt)!==void 0)return E(B,P,z,H,j);const q=c.length?c.pop():e.length;return e[q]=B,i[q]=P,r[q]=z,s[q]=H,o[q]=j,m(q,d(z,H)),l.set(rt,q),S(B,j),p++,q}function E(B,P,z,H,j){const rt=l.get(B+"#"+P);if(rt===void 0)return!1;r[rt]=z,s[rt]=H,j!==void 0&&j!==o[rt]&&(o[rt]=j,S(B,j));const ht=d(z,H);return ht!==a[rt]&&(b(rt),m(rt,ht)),!0}function w(B,P){const z=B+"#"+P,H=l.get(z);return H===void 0?!1:(b(H),l.delete(z),e[H]=null,i[H]=null,c.push(H),p--,!0)}function M(B,P){return l.has(B+"#"+P)}function A(){u.clear(),l.clear(),e.length=i.length=r.length=s.length=o.length=a.length=0,c.length=0,h.clear(),f=0,p=0}function L(B){if(B==null)return f;if(typeof B=="string")return h.get(B)||0;let P=0;for(const z of B){const H=h.get(z)||0;H>P&&(P=H)}return P}function _(B,P,z,H,j){if(!(z>=0))return;const rt=z*z,ht=g(Math.floor((B-z)*t)),q=g(Math.floor((B+z)*t)),Z=g(Math.floor((P-z)*t)),ct=g(Math.floor((P+z)*t));for(let st=ht;st<=q;st++)for(let bt=Z;bt<=ct;bt++){const St=u.get(x(st,bt));if(St!==void 0)for(let Dt=0;Dt<St.length;Dt++){const Ft=St[Dt];if(!wh(e[Ft],H))continue;const Ot=r[Ft]-B,D=s[Ft]-P,ve=Ot*Ot+D*D;ve>rt||j(i[Ft],Math.sqrt(ve),r[Ft],s[Ft],o[Ft])}}}function v(B,P,z,H,j){const rt=z+L(H);_(B,P,rt,H,(ht,q,Z,ct,st)=>{q<=st+z&&j(ht,q,Z,ct,st)})}function I(B,P,z,H,j){const rt=z*z;let ht=-1,q=1/0;const Z=g(Math.floor((B-z)*t)),ct=g(Math.floor((B+z)*t)),st=g(Math.floor((P-z)*t)),bt=g(Math.floor((P+z)*t));for(let St=Z;St<=ct;St++)for(let Dt=st;Dt<=bt;Dt++){const Ft=u.get(x(St,Dt));if(Ft!==void 0)for(let Ot=0;Ot<Ft.length;Ot++){const D=Ft[Ot];if(!wh(e[D],H))continue;const ve=r[D]-B,kt=s[D]-P,Gt=ve*ve+kt*kt;if(Gt>rt||Gt>=q)continue;const wt=Math.sqrt(Gt);j&&!j(i[D],wt,r[D],s[D],o[D])||(ht=D,q=Gt)}}return ht<0?null:{type:e[ht],id:i[ht],x:r[ht],z:s[ht],extent:o[ht],dist:Math.sqrt(q)}}function U(B,P,z,H,j){return I(B,P,z+L(H),H,(rt,ht,q,Z,ct)=>ht<=ct+z&&(!j||j(rt,ht,q,Z,ct)))}function N(B,P,z,H,j){let rt=0;return _(B,P,z,H,(ht,q,Z,ct,st)=>{(!j||j(ht,q,Z,ct,st))&&rt++}),rt}function W(B,P,z,H,j=[]){return j.length=0,_(B,P,z,H,rt=>{j.push(rt)}),j}function F(){let B=0,P=0;for(const z of u.values())P+=z.length,z.length>B&&(B=z.length);return{entries:p,cells:u.size,cellSize:n,maxBucket:B,meanBucket:u.size?P/u.size:0}}return{cellSize:n,insert:y,move:E,remove:w,has:M,clear:A,maxExtent:L,forEachInRadius:_,forEachWithin:v,nearest:I,nearestWithin:U,countInRadius:N,collectInRadius:W,stats:F,get size(){return p}}}const tn=QS();let el=[];function Cf(){return el}function ty(n){tn.clear();for(let t=0;t<n.length;t++){const e=n[t];tn.insert("grass",t,e.x,e.z,e.w)}for(let t=0;t<Yi.length;t++){const e=Yi[t];tn.insert("mushroom",t,e.x,e.z,Ll(e))}for(let t=0;t<$i.length;t++){const e=$i[t];tn.insert("rock",t,e.x,e.z,e.r)}for(let t=0;t<Bn.length;t++){const e=Bn[t];tn.insert("resource",t,e.x,e.z,e.r)}}function Pf(){const n=new be;n.name="world";const t=uM();for(const f of t.doorLights)yn(f.p,f.c);const e=rS(t.rooms),i=cS(),r=MM();n.add(r);const s=EM();n.add(s.mesh);const o=TM();n.add(o.group);const a=LM({});n.add(a.mesh);const c=GM();n.add(c.group);const l=LS();n.add(l.group);const u=new be;u.name="dug",n.add(u),zS(u),el=a.footprints,ty(el);function h(f,p,g){a.update(f,p),VS(f),i.update(p),s.update(p),g&&(c.update(g),o.update(g,ea()),XM(g.position))}return{group:n,update:h,grassFootprints:a.footprints,resources:l.nodes,rooms:t.rooms,doorLights:t.doorLights,mushrooms:e.mushrooms,rocks:e.rocks}}const ia=Object.freeze(Object.defineProperty({__proto__:null,DIG_GALLERY_LEN:_f,DIG_GALLERY_R:xf,DIG_SITES_MAX:Gr,LAWN_BOUNDS:Ee,MAX_BROOD:ms,MUSHROOMS:Yi,QUEEN:ne,RESOURCE_NODES:Bn,RIG_FOUNDED:Dl,RIG_PROLOGUE:Il,RIVER:xn,ROCKS:$i,START:qc,TERRAIN_BOUNDS:ps,TREE:Xt,TUNNEL_BACK:me,TUNNEL_MOUTH:Be,TUNNEL_R:br,WATER_Y:$n,advanceDig:Rf,applyNestShading:Cs,canFoundAt:Fl,containFoundedNest:jS,containSurface:Kc,containUnderground:ta,createWorld:Pf,daylightAt:qM,digProgress:YS,digSites:qS,distanceToWater:Qn,foundNest:yf,foundedMix:ea,getFoundedNest:Mf,getGrassFootprints:Cf,getRoomBranches:wl,getUndergroundRadius:iM,getWallHoleAt:Tl,groundNormal:Rs,groundSlope:kr,groundY:Nt,harvestNode:mf,mushroomCollideR:Ll,nestOrigin:vf,nodesNear:PS,openDigSite:wf,pitFactorAt:Jc,planDigSite:XS,populateNest:Ef,profileR:Oe,riverEdgeAt:As,sampleTerrain:dM,sealNest:bf,setFoundedMix:lS,shadeAt:hf,soilAt:Cl,sunDir:na,treeTrunkRadius:qi,treeWalkBranch:Nn,waterDepthAt:Mi,worldIndex:tn},Symbol.toStringTag,{value:"Module"})),Lf=[{hip:[.85,1.5,1.5],rest:[3.6,0,3.4],phase:0},{hip:[-.85,1.5,1.5],rest:[-3.6,0,3.4],phase:.5},{hip:[.95,1.4,.3],rest:[4.3,0,.2],phase:.5},{hip:[-.95,1.4,.3],rest:[-4.3,0,.2],phase:0},{hip:[.85,1.4,-1],rest:[4,0,-3.2],phase:0},{hip:[-.85,1.4,-1],rest:[-4,0,-3.2],phase:.5}],ey=[{hip:[.92,1.5,1.7],rest:[4.1,0,3.9],phase:0},{hip:[-.92,1.5,1.7],rest:[-4.1,0,3.9],phase:.5},{hip:[1.02,1.4,.4],rest:[4.9,0,.3],phase:.5},{hip:[-1.02,1.4,.4],rest:[-4.9,0,.3],phase:0},{hip:[.92,1.4,-1.15],rest:[4.5,0,-3.5],phase:0},{hip:[-.92,1.4,-1.15],rest:[-4.5,0,-3.5],phase:.5}],If={petiole:{at:[0,1.5,-1.25],r:[.42,.42,.42]},thorax:{at:[0,1.6,.35],r:[.95,.92,1.55]},head:{at:[0,1.62,2.55],r:[1.12,.98,1.05]},eye:{at:[.72,2.05,2.95],r:[.3,.26,.3]},gaster:[{at:[0,1.55,-3.1],r:[1.35,1.3,1.95]}],mandible:{root:[.52,1.42,3.35],tip:[.3,1.22,4.55],gape:.22,r:.15},antenna:{root:[.55,2.05,3.05],elbow:[1.35,3.15,4],tip:[1.75,3.05,5.9],r1:.13,r2:.1},legR:{thigh:.19,shin:.13,knee:.24,foot:.17}},ny={petiole:{at:[0,1.5,-1.2],r:[.5,.5,.62]},thorax:{at:[0,1.62,.5],r:[1.06,1.02,1.75]},head:{at:[0,1.66,2.7],r:[1.18,1.02,1.12]},eye:{at:[.76,2.12,3.1],r:[.3,.26,.3]},gaster:[{at:[0,1.55,-3.2],r:[1.6,1.54,2.1]},{at:[0,1.5,-5.4],r:[1.34,1.3,1.9]}],mandible:{root:[.55,1.45,3.5],tip:[.34,1.2,4.8],gape:.2,r:.17},antenna:{root:[.58,2.1,3.2],elbow:[1.4,3.3,4.2],tip:[1.85,3.2,6.1],r1:.14,r2:.11},legR:{thigh:.2,shin:.14,knee:.3,foot:.19}},Ps={id:"worker",label:"ouvrière",scale:1,legs:Lf,body:If,breathes:!1,colors:{chitinA:9132580,chitinB:4402453,limb:7029792,mandible:13209663,eye:1051654},maxSpeed:15,sprint:1.75,turnRate:9,legLen:[2.7,2.9],stride:7,climbSpeed:20,bodyR:1.5,cam:{dist:36,min:10,max:85}},Ol={id:"digger",label:"creuseuse",scale:1.08,legs:Lf,body:{...If,mandible:{root:[.52,1.42,3.35],tip:[.34,1.1,4.3],gape:.32,r:.27}},breathes:!1,colors:{chitinA:6044440,chitinB:2891278,limb:4664597,mandible:8740650,eye:1051654},maxSpeed:12.5,sprint:1.75,turnRate:6.5,legLen:[2.7,2.9],stride:6,climbSpeed:20,bodyR:1.5,cam:{dist:36,min:10,max:85},digSpeed:.8},Df={id:"queen",label:"reine fondatrice",scale:2.2,legs:ey,body:ny,breathes:!0,colors:{chitinA:11563558,chitinB:6176022,limb:6176022,mandible:11563558,eye:1051654},maxSpeed:12.5,sprint:1.5,turnRate:4.2,legLen:[2.7,2.9],stride:7,climbSpeed:12,bodyR:1.5,cam:{dist:58,min:16,max:140}},dn=Df,Bl=[Ps,Df,Ol];function iy(n){return[n.legLen[0]*n.scale,n.legLen[1]*n.scale]}function Uf(n){return n.stride*n.scale}function hn(n){return n.bodyR*n.scale}const Nf=new tt("#393741"),ry=new tt("#241D22"),gs=new ys({color:Nf.clone(),side:Fe,depthWrite:!1});gs.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`
    #include <begin_vertex>
    // #36: an instanced ant-part pool's object matrix/matrixWorld is the
    // identity (the pool sits at the scene root) — the actual per-part
    // basis (position AND orientation, since a limb segment is rotated, not
    // just translated) lives in the instanceMatrix attribute instead, right
    // where the old per-Mesh code kept it in that mesh's own matrix/
    // matrixWorld. Folding it in by hand here (Three's own project_vertex
    // chunk, which does this automatically, runs AFTER this chunk) keeps
    // oDist — and so the push amount, which depends on true camera distance
    // — correct per instance instead of measuring every instance from the
    // pool's own origin.
    #ifdef USE_INSTANCING
      vec4 oLocal = instanceMatrix * vec4(position, 1.0);
    #else
      vec4 oLocal = vec4(position, 1.0);
    #endif
    float oDist = -(modelViewMatrix * oLocal).z;
    transformed += normal * clamp(0.0017 * oDist, 0.06, 0.16);
  `)};gs.customProgramCacheKey=()=>"inverted-hull";function sy(n){gs.color.copy(ry).lerp(Nf,n)}const Ah=new WeakSet;function Ff(n){const t=new be;return t.name="outline-hull",n.traverse(e=>{if(!e.isMesh||!e.geometry||Ah.has(e))return;Ah.add(e);let i;e.isInstancedMesh?(i=new Zo(e.geometry,gs,e.instanceMatrix.count),i.instanceMatrix=e.instanceMatrix,Object.defineProperty(i,"count",{get:()=>e.count})):i=new Vt(e.geometry,gs),i.castShadow=!1,i.receiveShadow=!1,i.frustumCulled=!1,t.add(i)}),t.renderOrder=-1,t}const Si=Cf,zl=42,oy=4.5,ay=20,cy=.93;function ly(n){return oy*(n.scale||1)}function ao(n){const t=n.profile||dn;return(t.climbSpeed!==void 0?t.climbSpeed:ay)*(n.scale||1)}const uy=6,Of=.05,hy=(()=>{const n=Nn.point(0),t=Nn.tipPos;return Math.hypot(t[0]-n[0],t[1]-n[1],t[2]-n[2])})();function dy(n){const t=ly(n),e=Si(),i=tn.nearest(n.x,n.z,t,"grass",(a,c)=>c<t&&e[a].h>=zl);let r=i?{kind:"grass",i:i.id}:null;const s=i?i.dist:t,o=Math.hypot(Xt.x-n.x,Xt.z-n.z)-Xt.w;return o<uy*(n.scale||1)&&o<s&&(r={kind:"tree"}),r}function fy(n,t){n.climb=t.kind==="tree"?{kind:"tree",seg:"trunk",t:.02}:{kind:"grass",i:t.i,t:.03},n.speed=0}function nl(n){let t;if(n.climb.kind==="tree"){const e=Vo(Xt,n.climb.t);t=oe(_i(Xt,n.climb.t),Ct(e.normal,qi(n.climb.t)))}else t=_i(Si()[n.climb.i],n.climb.t);n.climb=null,n.x=t[0],n.z=t[2],n.y=Nt(t[0],t[2]),n.speed=0}function py(n,t){if(n.climb){if(n.climb.kind==="grass"){nl(n);return}n.climb.seg==="trunk"&&n.climb.t<=Of&&nl(n);return}t&&fy(n,t)}function my(n,t){return n.climb?n.climb.kind==="tree"?n.climb.seg==="trunk"&&n.climb.t<=Of?"redescendre du tronc":"reculer pour redescendre":"redescendre du brin":t?t.kind==="tree"?"grimper au tronc":"grimper au brin d'herbe":null}function gy(n,t,e){let i=!1,r=null;if(n.climb.kind==="tree")if(n.climb.seg==="trunk"){n.climb.t=nt(n.climb.t+t*(ao(n)/Xt.h)*e,0,Nn.splitT);const o=Vo(Xt,n.climb.t),a=oe(_i(Xt,n.climb.t),Ct(o.normal,qi(n.climb.t)));n.x=a[0],n.y=a[1],n.z=a[2],n.climb.t<=5e-4&&t<0?i=!0:n.climb.t>=Nn.splitT&&t>0&&(r="branch")}else{n.climb.u=nt(n.climb.u+t*(ao(n)/hy)*e,0,1);const o=Nn.basis(n.climb.u),a=oe(o.pos,Ct(o.up,Nn.radius(n.climb.u)));n.x=a[0],n.y=a[1],n.z=a[2],n.climb.u<=5e-4&&t<0&&(r="trunk")}else{const o=Si()[n.climb.i];n.climb.t=nt(n.climb.t+t*(ao(n)/o.h)*e,0,cy);const a=_i(o,n.climb.t);n.x=a[0],n.y=a[1],n.z=a[2],n.climb.t<=5e-4&&t<0&&(i=!0)}const s=ao(n);n.speed=fi(n.speed,Math.abs(t)*s,7,e),n.travel+=Math.abs(t)*s*e,i?nl(n):r==="branch"?(n.climb.seg="branch",n.climb.u=0):r==="trunk"&&(n.climb.seg="trunk",n.climb.t=Nn.splitT)}function _y(n=dn){return n.legs.map(()=>({planted:[0,0,0],from:[0,0,0],to:[0,0,0],swinging:!1,prevP:0}))}function xy(n){if(n.climb){if(n.climb.kind==="tree"){if(n.climb.seg==="trunk"){const c=Vo(Xt,n.climb.t);return{side:c.width,up:c.normal,fwd:c.tangent}}const a=Nn.basis(n.climb.u);return{side:a.side,up:a.up,fwd:a.fwd}}const o=Vo(Si()[n.climb.i],n.climb.t);return{side:o.width,up:o.normal,fwd:o.tangent}}const t=Rs(n.x,n.z),e=ie([t[0]*.7,1,t[2]*.7]),i=[Math.sin(n.yaw),0,Math.cos(n.yaw)],r=ie(Ye(e,i)),s=Ye(r,e);return{side:r,up:e,fwd:s}}function kl(n){const t=xy(n),e=n.scale||1,i=1.05*e+n.bob,r=n.climb?oe([n.x,n.y,n.z],Ct(t.up,i)):[n.x,Nt(n.x,n.z)+i,n.z];return{side:Ct(t.side,e),up:Ct(t.up,e),fwd:Ct(t.fwd,e),p:r,basis:t,scale:e}}function _n(n,t){const[e,i,r]=t;return[n.side[0]*e+n.up[0]*i+n.fwd[0]*r+n.p[0],n.side[1]*e+n.up[1]*i+n.fwd[1]*r+n.p[1],n.side[2]*e+n.up[2]*i+n.fwd[2]*r+n.p[2]]}function vy(n,t,e,i,r){const s=Zn(t,n),o=Math.hypot(s[0],s[1],s[2])||1,a=nt(o,.05,e+i-.02),c=Ct(s,1/o),l=(e*e-i*i+a*a)/(2*a),u=Math.sqrt(Math.max(e*e-l*l,0)),h=r[0]*c[0]+r[1]*c[1]+r[2]*c[2],f=ie(Zn(r,Ct(c,h)));return oe(oe(n,Ct(c,l)),Ct(f,u))}function My(n,t,e){const i=kl(n),r=i.basis,s=n.profile||dn,o=n.scale||1,a=Uf(s),c=n.travel/a,l=!!n.climb;for(let u=0;u<s.legs.length;u++){const h=s.legs[u],f=t[u],p=_n(i,h.rest);l||(p[1]=Nt(p[0],p[2])),n.legsInit||(f.planted=p.slice(),f.from=p.slice(),f.to=p.slice());let g=(c+h.phase)%1;if(g<0&&(g+=1),g>=.5&&f.prevP<.5){f.swinging=!0,f.from=f.planted.slice();const x=oe(p,Ct(r.fwd,a*.38*nt(n.speed/(16*o),0,1.4)));l||(x[1]=Nt(x[0],x[2])),f.to=x}if(g<.5&&f.prevP>=.5&&(f.swinging=!1,f.planted=f.to.slice()),f.prevP=g,f.swinging){const x=(g-.5)*2,d=Math.sin(x*Math.PI)*1.5*o;f.planted=[Ht(f.from[0],f.to[0],x),Ht(f.from[1],f.to[1],x)+d,Ht(f.from[2],f.to[2],x)]}n.speed<.4*o&&!f.swinging&&(f.planted[0]=fi(f.planted[0],p[0],4,e),f.planted[1]=fi(f.planted[1],p[1],4,e),f.planted[2]=fi(f.planted[2],p[2],4,e))}n.legsInit=!0}function Rh(n,t,e){const i=new Zo(n,t,e);i.instanceMatrix.setUsage(nm),i.count=0,i.frustumCulled=!1;let r=0;return{mesh:i,get used(){return r},get capacity(){return e},allocate(s){if(r+s>e)throw new Error(`instanced pool exhausted: asked for ${s} more slot(s), ${e-r} left of ${e} — bump the capacity this pool was created with (see MAX_ANTS in player/antMesh.js) and re-run scripts/bench-antmesh.mjs`);const o=r;return r+=s,i.count=r,o},setMatrix(s,o){i.setMatrixAt(s,o),i.instanceMatrix.needsUpdate=!0},setColor(s,o){i.setColorAt(s,o),i.instanceColor&&(i.instanceColor.needsUpdate=!0)}}}const Ch=32;function Sy(n){const t=n.legs.length;return{sphere:n.body.gaster.length+5+t*2,cyl:6+t*2}}let vn=null,Mn=null,is=null;function yy(){if(is)return;const n=new Jo(1,12,8),t=new Sl(1,1,1,7).translate(0,.5,0),e=new nn({color:16777215,vertexColors:!0,roughness:.55,metalness:.05}),i=Bl.reduce((r,s)=>{const o=Sy(s);return{sphere:Math.max(r.sphere,o.sphere),cyl:Math.max(r.cyl,o.cyl)}},{sphere:0,cyl:0});vn=Rh(n,e,Ch*i.sphere),Mn=Rh(t,e,Ch*i.cyl),vn.mesh.castShadow=!0,Mn.mesh.castShadow=!0,is=new be,is.name="ant-part-pools",is.add(vn.mesh,Mn.mesh)}function Pe(n,t){const e=n.allocate(1);return n.setColor(e,Ey.set(t)),{pool:n,index:e}}const Ey=new tt,Za=new ee,Ph=new V,Lh=new V,Ih=new V,Dh=new V;function Co(n,t,e,i,r){Ph.set(e[0],e[1],e[2]),Lh.set(i[0],i[1],i[2]),Ih.set(r[0],r[1],r[2]),Za.makeBasis(Ph,Lh,Ih),Dh.set(t[0],t[1],t[2]),Za.setPosition(Dh),n.pool.setMatrix(n.index,Za)}function pr(n,t,e,i){const r=Xe(t,e,i);Co(n,r.p,r.x,r.y,r.z)}function co(n){return[-n[0],n[1],n[2]]}function Bf(n=dn){yy();const t=n.body,e=n.colors,[i,r]=iy(n),s=t.gaster.map(()=>Pe(vn,e.chitinB)),o=Pe(vn,e.chitinB),a=Pe(vn,e.chitinA),c=Pe(vn,e.chitinA),l=Pe(vn,e.eye),u=Pe(vn,e.eye),h=Pe(Mn,e.mandible),f=Pe(Mn,e.mandible),p=Pe(Mn,e.limb),g=Pe(Mn,e.limb),x=Pe(Mn,e.limb),d=Pe(Mn,e.limb),m=n.legs.map(()=>({thigh:Pe(Mn,e.limb),shin:Pe(Mn,e.limb),knee:Pe(vn,e.limb),foot:Pe(vn,e.limb)}));function b(S,y,E){const w=kl(S),M=w.basis,A=w.scale,L=(F,B,P,z=1)=>Co(F,_n(w,B),Ct(M.side,P[0]*A*z),Ct(M.up,P[1]*A*z),Ct(M.fwd,P[2]*A*z)),_=n.breathes?1+Math.sin(E*.55)*.04:1;for(let F=0;F<s.length;F++)L(s[F],t.gaster[F].at,t.gaster[F].r,_);L(o,t.petiole.at,t.petiole.r),L(a,t.thorax.at,t.thorax.r),L(c,t.head.at,t.head.r),L(l,t.eye.at,t.eye.r),L(u,co(t.eye.at),t.eye.r);const v=t.mandible,I=v.gape+Math.sin(E*3.1)*.06+Math.max(0,Math.min(S.speed,14))*.012,U=[v.tip[0]+I,v.tip[1],v.tip[2]];pr(h,_n(w,v.root),_n(w,U),v.r*A),pr(f,_n(w,co(v.root)),_n(w,co(U)),v.r*A);const N=t.antenna;for(const F of[1,-1]){const B=Math.sin(E*2.4+(F>0?0:1.1))*.42,P=Math.cos(E*1.7+(F>0?.4:1.9))*.3,z=ht=>F>0?ht:co(ht),H=_n(w,z(N.root)),j=_n(w,z([N.elbow[0]+B*.25,N.elbow[1]+P*.3,N.elbow[2]])),rt=_n(w,z([N.tip[0]+B,N.tip[1]+P,N.tip[2]]));pr(F>0?p:x,H,j,N.r1*A),pr(F>0?g:d,j,rt,N.r2*A)}const W=t.legR;for(let F=0;F<n.legs.length;F++){const B=n.legs[F],P=y[F],z=m[F],H=_n(w,B.hip),j=P.planted,rt=B.hip[0]>0?M.side:Ct(M.side,-1),ht=ie([M.up[0]+rt[0]*.75,M.up[1]+rt[1]*.75,M.up[2]+rt[2]*.75]),q=vy(H,j,i,r,ht);pr(z.thigh,H,q,W.thigh*A),pr(z.shin,q,j,W.shin*A);const Z=W.knee*A,ct=W.foot*A;Co(z.knee,q,[Z,0,0],[0,Z,0],[0,0,Z]),Co(z.foot,j,[ct,0,0],[0,ct,0],[0,0,ct])}}return{group:is,updatePose:b}}function by(n,t=dn){const e={},i={camYaw:0,wantPitch:-.19,camDist:t.cam.dist,dragging:!1},r={active:!1,id:-1,ox:0,oy:0,dx:0,dy:0};let s=-1,o=0,a=0,c=!1,l=!1;function u(M){for(let A=0;A<M.length;A++)if(e[M[A]])return!0;return!1}function h(M){e[M.code]=!0,M.code==="KeyE"&&(c=!0),M.code==="KeyH"&&(l=!0),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].indexOf(M.code)>=0&&M.preventDefault()}function f(M){e[M.code]=!1}function p(){for(const M in e)e[M]=!1}function g(M){n.setPointerCapture(M.pointerId),M.pointerType==="touch"&&M.clientX<window.innerWidth*.5?(r.active=!0,r.id=M.pointerId,r.ox=M.clientX,r.oy=M.clientY):(i.dragging=!0,s=M.pointerId,o=M.clientX,a=M.clientY)}function x(M){if(r.active&&M.pointerId===r.id){const A=nt(M.clientX-r.ox,-46,46),L=nt(M.clientY-r.oy,-46,46);r.dx=A/46,r.dy=L/46;return}i.dragging&&M.pointerId===s&&(i.camYaw-=(M.clientX-o)*.006,i.wantPitch=nt(i.wantPitch-(M.clientY-a)*.004,-.85,.55),o=M.clientX,a=M.clientY)}function d(M){r.active&&M.pointerId===r.id&&(r.active=!1,r.dx=0,r.dy=0),M.pointerId===s&&(i.dragging=!1,s=-1)}function m(M){i.camDist=nt(i.camDist+M.deltaY*.03*t.scale,t.cam.min,t.cam.max),M.preventDefault()}window.addEventListener("keydown",h),window.addEventListener("keyup",f),window.addEventListener("blur",p),n.addEventListener("pointerdown",g),n.addEventListener("pointermove",x),n.addEventListener("pointerup",d),n.addEventListener("pointercancel",d),n.addEventListener("wheel",m,{passive:!1});function b(){let M=0,A=0;u(["KeyW","KeyZ","ArrowUp"])&&(A+=1),u(["KeyS","ArrowDown"])&&(A-=1),u(["KeyA","KeyQ","ArrowLeft"])&&(M-=1),u(["KeyD","ArrowRight"])&&(M+=1),r.active&&(M+=r.dx,A-=r.dy);const L=Math.min(Math.hypot(M,A),1),_=!!(e.ShiftLeft||e.ShiftRight);return{ix:M,iy:A,mag:L,sprint:_}}function S(){const M=c;return c=!1,M}function y(){const M=l;return l=!1,M}function E(){return!!e.KeyE}function w(){window.removeEventListener("keydown",h),window.removeEventListener("keyup",f),window.removeEventListener("blur",p),n.removeEventListener("pointerdown",g),n.removeEventListener("pointermove",x),n.removeEventListener("pointerup",d),n.removeEventListener("pointercancel",d),n.removeEventListener("wheel",m)}return{state:i,readMoveIntent:b,consumeInteract:S,consumeHelp:y,isInteractHeld:E,dispose:w}}let Ja=null;function zf(){return Ja||(Ja=wl()),Ja}function kf(n,t){const e=zf();for(const i in e){const r=e[i],s=n-r.origin[0],o=t-r.origin[2],a=s*r.dir[0]+o*r.dir[2];if(a<=-.5||a>=r.uMax+1)continue;const c=s*r.side[0]+o*r.side[2],l=r.profR(nt(a,0,r.uMax));if(!(Math.abs(c)>=l*.82+2))return r}return null}function Gf(n,t,e){return(t-n.origin[0])*n.dir[0]+(e-n.origin[2])*n.dir[2]}function Ty(n){return 2*n.uEnd-n.uMax}function wy(n,t){const e=kf(n,t);return e?e.profR(nt(Gf(e,n,t),0,e.uMax)):Oe(t)}function Ay(n,t){let e=t,i=t;const r=zf();for(const s in r){const o=r[s],a=nt(1-Math.abs(n-o.origin[2])/o.doorFalloff,0,1);if(a<=0)continue;const c=Ht(t,Math.abs(o.origin[0])+1.5,a);o.dir[0]>0?c>e&&(e=c):c>i&&(i=c)}return{limPos:e,limNeg:i}}const Hf=.14;function Vf(n){const t=n(0),e=n(Math.PI),i=n(Math.PI*.5);return{aPos:Math.max(Math.abs(t[0]),1.5),aNeg:Math.max(Math.abs(e[0]),1.5),cy:t[1],b:Math.max(i[1]-t[1],.8)}}function Ry(n){return Vf(t=>{const e=zi(t,n,Hf);return[e[0],e[1]]})}function Cy(n,t){return Vf(e=>{const i=n.pointAt(e,t,Hf);return[(i[0]-n.origin[0])*n.side[0]+(i[2]-n.origin[2])*n.side[2],i[1]]})}function Uh(n,t,e){const i=t>=0?n.aPos:n.aNeg,r=Math.min(Math.abs(t)/i,1),s=n.b*Math.max(Math.sqrt(Math.max(0,1-r*r)),.3),o=Math.max(n.cy-s,e+1.6);return{yMin:o,yMax:Math.max(n.cy+s,o+.6)}}function Py(n,t){if(t.br){const u=t.br,h=n[0]-u.origin[0],f=n[2]-u.origin[2],p=h*u.dir[0]+f*u.dir[2],g=h*u.side[0]+f*u.side[2],x=t.uAnt>t.corridorLen?t.corridorLen-1:-.3,d=nt(p,x,u.uMax-.3),m=Cy(u,nt(d,0,u.uMax)),b=nt(g,-m.aNeg,m.aPos);n[0]=u.origin[0]+u.dir[0]*d+u.side[0]*b,n[2]=u.origin[2]+u.dir[2]*d+u.side[2]*b;const S=Uh(m,b,Nt(n[0],n[2]));return n[1]=nt(n[1],S.yMin,S.yMax),Math.hypot(d-p,b-g)}const e=n[2],i=n[0],r=nt(e,me+5,Be+3);if(r>-14){const u=Oe(r)*.82*(1+Math.pow((r+14)/17,2)*.9),h=nt(i,-u,u);return n[0]=h,n[2]=r,n[1]=Math.max(n[1],Nt(h,r)+2.2),Math.hypot(h-i,r-e)}const s=Ry(r),{limPos:o,limNeg:a}=Ay(r,Math.max(Oe(r)*.82-1.6,3)),c=nt(i,-Math.max(a,s.aNeg),Math.max(o,s.aPos));n[0]=c,n[2]=r;const l=Uh(s,c,Nt(c,r));return n[1]=nt(n[1],l.yMin,l.yMax),Math.hypot(c-i,r-e)}const lo=10.5;function Ly(n){const t=Nt(ne[0],ne[2]);if(n[1]>t+8.5)return;const e=n[0]-ne[0],i=n[2]-ne[2],r=Math.hypot(e,i);if(!(r>=lo)){if(r<.001){n[0]+=lo;return}n[0]=ne[0]+e/r*lo,n[2]=ne[2]+i/r*lo}}function Wf(n){const t=kf(n.x,n.z);if(!t)return{br:null};const e=Gf(t,n.x,n.z);return{br:t,uAnt:e,corridorLen:Ty(t)}}function Gl(n,t,e){return t.z<Be-2?(Ly(n),Py(n,e||Wf(t))):(n[1]=Math.max(n[1],Nt(n[0],n[2])+2.2),0)}function Xf(n,t,e,i,r=1){return[n[0]-Math.sin(t)*Math.cos(e)*i,n[1]-Math.sin(e)*i+3.4*r,n[2]-Math.cos(t)*Math.cos(e)*i]}const Nh=8,Iy=6,qf=.9,Dy=[0,.25,.5,.8],Fh=-1.25;function Uy(n,t,e,i,r,s){let o=i,a=1/0;const c=Math.min(Iy*(r.scale||1),i);for(let l=0;l<=Nh;l++){const u=Ht(i,c,l/Nh),h=Gl(Xf(n,t,e,u,r.scale||1),r,s);if(h<=qf)return{d:u,err:h};h<a&&(a=h,o=u)}return{d:o,err:a}}function Ny(n,t,e,i,r,s){let o=null;for(const a of Dy){const c=Math.max(e-a,Fh),l=Uy(n,t,c,i,r,s);if(l.err<=qf)return{pitch:c,d:l.d};if((!o||l.err<o.err)&&(o={pitch:c,d:l.d,err:l.err}),c<=Fh)break}return o}function Fy(n,t,e,i){const r=n.scale||1,s=n.climb?[n.x,n.y+2*r,n.z]:[n.x,Nt(n.x,n.z)+2.6*r,n.z],o=n.z<Be-2,a=o?Wf(n):null,c=o?wy(n.x,n.z):br,l=o?Math.min(i,Math.max(13.5*r,c*1.5)):i,u=o?Ny(s,t,e,l,n,a):{pitch:e,d:l},h=Xf(s,t,u.pitch,u.d,r);Gl(h,n,a);const f=[s[0]+Math.sin(n.yaw)*3*r,s[1]+.4*r,s[2]+Math.cos(n.yaw)*3*r];return{eye:h,aim:f}}function Oy(n){const t={eye:null,aim:null};function e(i,r,s,o,a){const c=Fy(i,r,s,o);t.eye||(t.eye=c.eye.slice(),t.aim=c.aim.slice());const l=6.5;for(let u=0;u<3;u++)t.eye[u]=fi(t.eye[u],c.eye[u],l,a),t.aim[u]=fi(t.aim[u],c.aim[u],l*1.4,a);Gl(t.eye,i),n.position.set(t.eye[0],t.eye[1],t.eye[2]),n.lookAt(new V(t.aim[0],t.aim[1],t.aim[2]))}return t.update=e,t}let By=1;function zy(){return By++}function ky(n,t,e,i,r={}){return{id:r.id??zy(),profileId:n,x:t,y:e,z:i,yaw:r.yaw??0,speed:0,travel:0,bob:0,climb:null,legsInit:!1,scale:r.scale??1,controlled:!!r.controlled,goal:r.goal??null}}const Qa=Object.freeze({wishX:0,wishZ:0,mag:0,sprint:!1});function Gy(n,t,e,i){if(!e||e.type!=="patrol")return Qa;if(e.waitT>0)return e.waitT=Math.max(0,e.waitT-i),Qa;const r=e.target==="a"?e.a:e.b,s=r[0]-n,o=r[1]-t,a=Math.hypot(s,o);return a<=e.arriveR?(e.target=e.target==="a"?"b":"a",e.waitT=e.waitFor,Qa):{wishX:s/a,wishZ:o/a,mag:1,sprint:!1}}function Yf(n,t,e,i){const r=(t-n+Math.PI*3)%(Math.PI*2)-Math.PI;return n+r*(1-Math.exp(-e*i))}function Hy(n){return n.w*.75}const $f=.01,Oh=_i(Xt,$f),Vy=qi($f)*.88,Kf=hn(dn)*2+.6,Wy=Kf+.2,Xy=14;function qy(n,t,e,i){for(let r=.3;r<=Xy;r+=.3){const s=n+e*r,o=t+i*r,a=ta(s,o);if(Math.hypot(a[0]-s,a[1]-o)>.05)return r}return 1/0}const jf=[];for(let n=0;n<8;n++)jf.push([Math.cos(n*Math.PI/4),Math.sin(n*Math.PI/4)]);function Yy(n,t,e){let i=0,r=1/0;const s=jf.map(([c,l],u)=>{const h=qy(n,t,c,l);return h<r&&(r=h,i=u),h});if(r===1/0||r-e>=Wy)return e;const o=Math.max(e,r+.3);return s[(i+4)%8]-o<Kf?0:o}const $y=1;let tc=null;function Ky(){return tc||(tc=Object.values(wl())),tc}function jy(n,t){for(const e of Ky()){const i=n-e.origin[0],r=t-e.origin[2],s=i*e.dir[0]+r*e.dir[2];if(s<=-.5||s>=e.uMax+1)continue;const o=i*e.side[0]+r*e.side[2],a=Math.max(e.profR(nt(s,0,e.uMax))*.82-1.2,2.2);if(!(Math.abs(o)>=a+3))return a}return Math.max(Oe(t)*.82-1.6,3)}function Zy(n,t,e,i){return 2*jy(n,t)>=2*i+2*e+$y}let Jr=null,Bh=null,Zf=0;function Jf(n=hn(dn)){return(!Jr||Jr.length!==Yi.length||Bh!==n)&&(Bh=n,Jr=Yi.map(t=>{const e=Yy(t.x,t.z,Ll(t));return e>0&&Zy(t.x,t.z,e,n)?e:0}),Zf=Jr.reduce((t,e)=>e>t?e:t,0)),Jr}function Qf(n,t,e,i){if(t<Be+6){const r=Jf();tn.forEachInRadius(n,t,e+Zf,"mushroom",(s,o,a,c)=>{r[s]>0&&i(a,c,r[s])})}if(t>Be-6){tn.forEachWithin(n,t,e,"rock",(s,o,a,c,l)=>i(a,c,l));const r=Si();tn.forEachWithin(n,t,e,"grass",(s,o,a,c)=>{const l=r[s];l.h>=zl&&i(a,c,Hy(l))}),i(Oh[0],Oh[2],Vy)}}function Jy(n,t,e=0){let i=0;return Qf(n,t,e,(r,s,o)=>{const a=o+e-Math.hypot(n-r,t-s);a>i&&(i=a)}),i}function zh(n){const t={x:0,z:0,n:0},e=hn(n.profile||dn);return Qf(n.x,n.z,e,(i,r,s)=>{const o=s+e,a=n.x-i,c=n.z-r,l=Math.hypot(a,c);if(l>=o||l<.001)return;const u=o-l;t.x+=a/l*u,t.z+=c/l*u,t.n++}),t}function _s(n,t){const e=zh(n);if(e.n===0)return;const i=e.x/e.n,r=e.z/e.n;n.x+=i,n.z+=r;const s=Math.hypot(i,r);if(s>5e-4){const a=i/s,l=-(r/s),u=a,h=Math.sin(n.yaw)*l+Math.cos(n.yaw)*u,f=t*.6*(h>=0?1:-1);n.x+=l*f,n.z+=u*f}const o=zh(n);o.n>0&&(n.x+=o.x/o.n,n.z+=o.z/o.n)}const Qy=11;function tE(n,t,e){const i=ie([e[0]-t[0],0,e[2]-t[2]]),r=Ye(i,[0,1,0]);return{wishX:i[0]*n.iy+r[0]*n.ix,wishZ:i[2]*n.iy+r[2]*n.ix}}function eE(n,t,e,i){const r=n.profile||dn,s=n.scale||1,o=hn(r),a=r.maxSpeed*(e.sprint?r.sprint:1);e.mag>.02?(n.yaw=Yf(n.yaw,Math.atan2(t.wishX,t.wishZ),r.turnRate,i),n.speed=fi(n.speed,a*e.mag,7,i)):n.speed=fi(n.speed,0,9,i);const c=n.speed*i;if(n.x+=Math.sin(n.yaw)*c,n.z+=Math.cos(n.yaw)*c,n.travel+=c,_s(n,c),n.z<Be){const[l,u]=ta(n.x,n.z);n.x=l,n.z=u;const h=Qy+o,f=n.x-ne[0],p=n.z-ne[2],g=Math.hypot(f,p);if(g<h&&g>.001){const x=f/g,d=p/g;n.x=ne[0]+x*h,n.z=ne[2]+d*h;const m=-d,b=x,S=Math.sin(n.yaw)*m+Math.cos(n.yaw)*b,y=c*.75*(S>=0?1:-1);n.x+=m*y,n.z+=b*y}}else{const l=nt(n.z,Ee.z0,Ee.z1);n.x=Math.max(Kc(n.x,l)[0],Kc(n.x-o,l)[0]+o),n.x=Math.min(n.x,Ee.x1-o*2),n.z=Math.min(n.z,Ee.z1-o*2)}n.y=Nt(n.x,n.z),n.bob=Math.sin(n.travel*(Math.PI*2/Uf(r))*2)*.13*s*nt(n.speed/(8*s),0,1)}const nE=Object.fromEntries(Bl.map(n=>[n.id,n]));function Po(n){return nE[n]||Bl[0]}function tp(n,t,e,i,r={}){const s=ky(n.id,t,e,i,{...r,scale:r.scale??n.scale});return s.profile=n,s.legState=_y(n),tn.insert("ant",s.id,t,i,hn(n)),s}function ep(n){tn.remove("ant",n.id)}function Lo(n,t,e){const i=n.controlled&&e;if(n.climb)gy(n,i?e.climbAxis:0,t);else{const r=i?e.wish:Gy(n.x,n.z,n.goal,t),s=i?e.intent:r;eE(n,r,s,t)}My(n,n.legState,t),tn.move("ant",n.id,n.x,n.z,hn(n.profile))}function iE(n,t,e){return{wish:tE(n,t,e),intent:n,climbAxis:nt(n.iy,-1,1)}}const Le={...ia},kh={terre:{label:"terre meuble",diggable:!0,quality:.9},argile:{label:"argile",diggable:!0,quality:.72},litiere:{label:"litière de feuilles",diggable:!0,quality:.66},sable:{label:"sable",diggable:!0,quality:.38},roche:{label:"roche",diggable:!1,quality:0},boue:{label:"boue détrempée",diggable:!1,quality:0}},il=32,uo=9,Io=18,ho=55,rE=190,sE=26,Gh=55,rl=14,oE={soil:.28,slope:.16,water:.2,shade:.18,food:.18};function np(n,t,e){const i=Si();return Le.worldIndex.countInRadius(n,t,e,"grass",(r,s)=>s<e&&i[r].h>=zl)}function aE(n,t,e){return Le.worldIndex.countInRadius(n,t,e,"resource",(i,r)=>r<e)}const cE={soil:"terre",moss:"litiere",sand:"sable",rock:"roche",water:"boue",terre:"terre",argile:"argile",litiere:"litiere",sable:"sable",roche:"roche",boue:"boue"};function lE(n,t){if(typeof Le.soilAt=="function"){const e=Le.soilAt(n,t),i=cE[typeof e=="string"?e:e&&e.kind],r=kh[i];if(r)return{...r,kind:i,assumed:!1}}return{...kh.terre,kind:"terre",assumed:!0}}function uE(n,t){if(typeof Le.slopeAt=="function")return{deg:Le.slopeAt(n,t),assumed:!1};const e=Le.groundNormal(n,t);return{deg:Math.acos(nt(e[1],-1,1))*180/Math.PI,assumed:!1}}function hE(n,t){return typeof Le.waterDistance=="function"?{d:Le.waterDistance(n,t),assumed:!1}:typeof Le.distanceToWater=="function"?{d:Le.distanceToWater(n,t),assumed:!1}:{d:null,assumed:!0}}function dE(n,t){if(typeof Le.shadeAt=="function")return{v:nt(Le.shadeAt(n,t),0,1),assumed:!1};const e=Le.TREE,i=e?nt(1-Math.hypot(n-e.x,t-e.z)/90,0,1):0,r=np(n,t,sE);return{v:nt(i*.8+Math.min(r,8)/8*.5,0,1),assumed:!0}}function fE(n,t){return Array.isArray(Le.RESOURCE_NODES)?{n:aE(n,t,Gh),assumed:!1}:{n:np(n,t,Gh),assumed:!0}}function pE(n){if(n>=il)return 0;const t=n<=uo?.78+.22*(n/uo):1-Math.pow((n-uo)/(il-uo),1.4);return nt(t,0,1)}function mE(n){return n===null?.5:n<=Io?0:n<=ho?nt((n-Io)/(ho-Io),0,1):nt(1-(n-ho)/(rE-ho),.15,1)}const gE=[{min:78,key:"excellent",label:"excellent"},{min:60,key:"bon",label:"bon"},{min:42,key:"moyen",label:"moyen"},{min:0,key:"ingrat",label:"ingrat"}];function _E(n){return gE.find(t=>n>=t.min)}function xE(n){return n>.66?"à l'ombre":n>.3?"mi-ombre":"plein soleil"}function vE(n){return n>=rl?"ressources abondantes":n>=rl*.4?"quelques ressources":"peu de ressources"}function Do(n,t){const e=lE(n,t),i=uE(n,t),r=hE(n,t),s=dE(n,t),o=fE(n,t),a=[{key:"soil",label:e.label,value:e.quality,assumed:e.assumed},{key:"slope",label:`pente ${i.deg.toFixed(0)}°`,value:pE(i.deg),assumed:i.assumed},{key:"water",label:r.d===null?"eau inconnue":`eau à ${r.d.toFixed(0)}`,value:mE(r.d),assumed:r.assumed},{key:"shade",label:xE(s.v),value:nt(s.v*1.25,0,1),assumed:s.assumed},{key:"food",label:vE(o.n),value:nt(o.n/rl,0,1),assumed:o.assumed}];let c=null;t<Le.TUNNEL_MOUTH?c={key:"underground",text:"sous terre — rien à fonder ici"}:e.diggable?r.d!==null&&r.d<=Io?c={key:"water",text:"trop près de l'eau — la galerie serait inondée"}:i.deg>=il&&(c={key:"slope",text:`pente ${i.deg.toFixed(0)}° — le sol s'effondrerait`}):c={key:"soil",text:`${e.label} — impossible de creuser`};let l=0;for(const h of a)l+=h.value*oE[h.key];const u=Math.round(nt(l,0,1)*100);return{x:n,z:t,diggable:!c,blocker:c,score:u,grade:_E(u),factors:a,assumed:a.some(h=>h.assumed)}}function ME(n){return n.diggable?`Site : ${n.grade.label} (${n.score}/100)`:`Site : impossible — ${n.blocker.text}`}function Hh(n){return n.factors.slice().sort((t,e)=>t.value-e.value).map(t=>t.assumed?`${t.label} ?`:t.label).join(" · ")}const xi={...ia},_r={graine:"graine",brindille:"brindille",miellat:"miellat"},SE={graine:["graine","graines"],brindille:["brindille","brindilles"],miellat:["dose de miellat","doses de miellat"]};function yE(n,t){const e=SE[n]||[n,n];return`${t} ${t>1?e[1]:e[0]}`}const EE=[{x:60,z:110,kind:"graine",amount:3},{x:95,z:105,kind:"brindille",amount:3},{x:55,z:120,kind:"miellat",amount:2},{x:100,z:125,kind:"graine",amount:2},{x:45,z:115,kind:"brindille",amount:2},{x:85,z:135,kind:"miellat",amount:2},{x:110,z:110,kind:"graine",amount:2},{x:65,z:135,kind:"brindille",amount:2},{x:40,z:128,kind:"graine",amount:2}].map((n,t)=>({id:9e3+t,r:10,...n}));let ip=!1;function Hr(){return Array.isArray(xi.RESOURCE_NODES)?xi.RESOURCE_NODES:(ip=!0,EE)}function rp(){return Hr(),ip}function sp(n,t){if(!n)return 0;if(typeof xi.harvestNode=="function")return xi.harvestNode(n.id,t)||0;const e=Math.max(0,Math.min(t,n.amount));return n.amount-=e,e}function bE(n,t,e=0){const i=Hr();if(i!==xi.RESOURCE_NODES)return TE(i,n,t,e);const r=xi.worldIndex.nearestWithin(n,t,e*.6,"resource",s=>i[s].amount>0);return r?i[r.id]:null}function TE(n,t,e,i){let r=null,s=1/0;for(let o=0;o<n.length;o++){const a=n[o];if(a.amount<=0)continue;const c=Math.hypot(a.x-t,a.z-e);c<=a.r+i*.6&&c<s&&(s=c,r=a)}return r}const wE=32,Vh=600;function AE(n,t,e){let i=null,r=1/0;for(let s=0;s<n.length;s++){const o=n[s];if(o.amount<=0)continue;const a=Math.hypot(o.x-t,o.z-e);a<r&&(r=a,i=o)}return i}function RE(n,t){const e=Hr();if(e!==xi.RESOURCE_NODES)return AE(e,n,t);let i=wE;for(;;){const r=xi.worldIndex.nearest(n,t,i,"resource",s=>e[s].amount>0);if(r)return e[r.id];if(i>=Vh)return null;i=Math.min(i*2,Vh)}}const fo=new Map;let Wh=null;function op(n){const t=Hr();if(Wh!==t||fo.size!==t.length){Wh=t,fo.clear();for(const e of t)fo.set(e.id,e)}return fo.get(n)||null}const sl=1.8,Hl=16,Xo=5,CE=.5;function PE(){const n={carrying:null,cache:null,progress:0,activeId:null,justTook:null,justDropped:null};function t(){n.progress=0,n.activeId=null}function e(p,g){if(n.activeId!==null){const x=op(n.activeId);if(x&&x.amount>0&&Math.hypot(x.x-p.x,x.z-p.z)<=x.r+g*.6)return x}return bE(p.x,p.z,g)}function i(p,g){if(n.carrying)return"full";if(!p)return r(g),"idle";if(n.activeId!==p.id&&(n.activeId=p.id,n.progress=0),n.progress+=g/sl,n.progress<1)return"progress";const x=sp(p,1);return t(),x<=0?"empty":(n.carrying={kind:p.kind},n.justTook={kind:p.kind,qty:x,node:p},"taken")}function r(p){if(n.progress<=0){n.activeId=null;return}n.progress=Math.max(0,n.progress-p*CE/sl),n.progress===0&&(n.activeId=null)}function s(p){return n.cache?Math.hypot(n.cache.x-p.x,n.cache.z-p.z):1/0}function o(p){return n.carrying?!n.cache||s(p)<=Hl:!1}function a(p){if(!o(p))return!1;n.cache||(n.cache={x:p.x,y:Nt(p.x,p.z),z:p.z,items:{},total:0});const g=n.carrying.kind;return n.cache.items[g]=(n.cache.items[g]||0)+1,n.cache.total+=1,n.carrying=null,n.justDropped={kind:g,cache:n.cache},!0}function c(){n.justTook=null,n.justDropped=null}function l(){return n.cache?n.cache.total:0}function u(){return l()>=Xo}function h(){return!n.cache||n.cache.total===0?null:Object.entries(n.cache.items).filter(([,p])=>p>0).map(([p,g])=>yE(p,g)).join(" · ")}function f(){const p=n.carrying?`Porte : ${_r[n.carrying.kind]}`:"Porte : rien",g=h();return`${p} · Réserve : ${l()}/${Xo}${g?` (${g})`:""}`}return{state:n,target:e,hold:i,release:r,canDrop:o,drop:a,cacheDistance:s,stock:l,enough:u,stockDetail:h,inventoryLine:f,endFrame:c}}const Ki={...ia},Xh=4,LE={rock:"la roche ne se creuse pas",soil:"ce sol ne se creuse pas",water:"trop près de l'eau — la galerie serait inondée",slope:"la pente s'effondrerait",underground:"on ne fonde pas dans une galerie déjà creusée",bounds:"le bord du monde — il faut revenir vers le pré",occupied:"une galerie passe déjà sous ce sol","already-founded":"la colonie est déjà fondée"};function ol(n){return n?LE[n]||`impossible de creuser ici (${n})`:"impossible de creuser ici"}let al=null,ap=!1;function qh(){return typeof Ki.foundNest!="function"||ap}function hs(){if(typeof Ki.nestOrigin=="function"){const n=Ki.nestOrigin();if(n)return n}return al}function wr(){return!!hs()}function Vl(n,t){if(wr())return{ok:!1,reason:"already-founded"};if(typeof Ki.canFoundAt=="function"){const i=Ki.canFoundAt(n,t)||{};return{ok:!!i.ok,reason:i.reason,assumed:!1}}const e=Do(n,t);return e.diggable?{ok:!0,assumed:!0}:{ok:!1,reason:e.blocker.key,assumed:!0}}function IE(n,t){const e=Vl(n,t);if(!e.ok)return e;if(typeof Ki.foundNest=="function"){const i=Ki.foundNest(n,t)||{};return i.ok&&(al={x:n,z:t}),{ok:!!i.ok,reason:i.reason,assumed:!1}}return ap=!0,al={x:n,z:t},{ok:!0,assumed:!0}}function Yh(n,t,e,i){const r=e-n,s=i-t;if(Math.hypot(r,s)<1)return"ici";const o=s>8?"nord":s<-8?"sud":"",a=r>8?"est":r<-8?"ouest":"";return o&&a?`au ${o}-${a}`:a?`à l'${a}`:`au ${o}`}const xs=3,DE=25,UE=6,ui={NO_NEST:"no-nest",TOO_FAR:"too-far",BROOD_FULL:"brood-full",NOT_ENOUGH_FOOD:"not-enough-food"},NE={[ui.NO_NEST]:"pas encore de colonie fondée",[ui.TOO_FAR]:"trop loin du couvoir",[ui.BROOD_FULL]:"couvain plein — attendre une éclosion",[ui.NOT_ENOUGH_FOOD]:`pas assez de réserve (il faut ${xs})`};function FE(n){return n?NE[n]||`impossible de pondre (${n})`:"impossible de pondre"}function OE(n=UE){return{capacity:n,clutches:[],laidTotal:0,workersAvailable:{},hatchedTotal:0}}const cp="worker";function BE(n){const t=n.workersAvailable;return n.workersAvailable={},t}function zE(n,t){if(!n||n.total<t)return!1;let e=t;for(const i of Object.keys(n.items)){if(e<=0)break;const r=n.items[i]||0;if(r<=0)continue;const s=Math.min(r,e);n.items[i]=r-s,e-=s}return n.total-=t,!0}function $h(n,t,e={},i=cp){const{founded:r=!1,inChamber:s=!1}=e;return r?s?n.clutches.length>=n.capacity?{ok:!1,reason:ui.BROOD_FULL}:zE(t,xs)?(n.clutches.push({remaining:DE,caste:i}),n.laidTotal++,{ok:!0}):{ok:!1,reason:ui.NOT_ENOUGH_FOOD}:{ok:!1,reason:ui.TOO_FAR}:{ok:!1,reason:ui.NO_NEST}}function kE(n,t){let e=0;const i=[];for(const r of n.clutches){if(r.remaining-=t,r.remaining>0){i.push(r);continue}e++;const s=r.caste||cp;n.workersAvailable[s]=(n.workersAvailable[s]||0)+1}return n.clutches=i,e>0&&(n.hatchedTotal+=e),e}function GE(n){if(n.clutches.length===0)return null;let t=1/0;for(const e of n.clutches)e.remaining<t&&(t=e.remaining);return Math.max(0,t)}function HE(n){return n.clutches.length}const VE={harvest:!0,found:!0};function WE({profile:n=dn}={}){const t=PE(),e=hn(n);let i=0,r=null,s=0;function o(d,m=3.2){r=d,s=m}function a(d){if(d.climb)return{kind:"climb",climbTarget:null};if(t.state.carrying){const y=t.state.carrying.kind;if(t.canDrop(d))return{kind:"drop",label:t.state.cache?"ajouter au dépôt":"poser ici — ce sera le dépôt"};const E=t.cacheDistance(d),w=t.state.cache;return{kind:"return",label:`rapporter ${_r[y]} au dépôt (${E.toFixed(0)} u ${Yh(d.x,d.z,w.x,w.z)})`}}if(t.state.cache&&!wr()&&t.enough()&&t.cacheDistance(d)<=Hl){const y=Vl(d.x,d.z);return{kind:"found",ok:y.ok,reason:y.reason,assumed:y.assumed}}const b=t.target(d,e);if(b)return{kind:"harvest",node:b};const S=dy(d);return S?{kind:"climb",climbTarget:S}:{kind:"none"}}function c(d,m,b,S){const y=a(d);switch(s>0&&(s-=S,s<=0&&(r=null)),(y.kind!=="harvest"||!b)&&t.release(S),(y.kind!=="found"||!b||!y.ok)&&(i=Math.max(0,i-S/Xh)),y.kind){case"harvest":{if(b){const E=t.hold(y.node,S);E==="taken"?o(`elle emporte ${_r[t.state.carrying.kind]}`):E==="empty"&&o("plus rien à prendre ici")}break}case"found":{if(b&&y.ok&&(i+=S/Xh,i>=1)){i=0;const E=IE(d.x,d.z);o(E.ok?qh()?"Colonie fondée ici. (le monde ne creuse pas encore la chambre)":"Colonie fondée ici.":`impossible : ${ol(E.reason)}`,6)}break}case"drop":if(m){const E=t.state.carrying.kind;t.drop(d)&&o(t.stock()===1?`dépôt ouvert ici — ${_r[E]} posée`:`${_r[E]} ajoutée au dépôt (${t.stock()}/${Xo})`)}break;case"climb":m&&py(d,y.climbTarget);break}return y}function l(d){return`${Math.round(d*100)}%`}function u(d,m){if(m.kind==="climb")return my(d,m.climbTarget);if(m.kind==="return")return m.label;if(m.kind==="drop")return`E — ${m.label}`;if(m.kind==="harvest"){const b=m.node;return t.state.progress>0?`Récolte… ${l(t.state.progress)}`:`E (maintenir) — récolter ${_r[b.kind]}`}return m.kind==="found"?m.ok?i>0?`Creusement… ${l(i)}`:"E (maintenir) — fonder la colonie ici":`Fonder ici : ${ol(m.reason)}`:null}function h(d){if(wr()){const S=hs(),y=Math.hypot(S.x-d.x,S.z-d.z),E=y<12?"ici":`à ${y.toFixed(0)} u ${Yh(d.x,d.z,S.x,S.z)}`,w=Math.max(0,xs-t.stock()),M=w>0?`encore ${w} unité${w>1?"s":""} de réserve avant de pouvoir pondre`:"la réserve suffit pour pondre";return`Colonie fondée ${E}. Suite : pondre (P) dans le couvoir — ${M}.`+(qh()?" [chambre non creusée]":"")}const m=Xo-t.stock();if(t.state.carrying)return t.state.cache?`Objectif : rapporter au dépôt — encore ${m} pour fonder`:"Objectif : poser ce fardeau — le premier dépôt fixe le site de la colonie";if(t.enough())return"Objectif : fonder la colonie sur le dépôt";const b=rp()?" [nœuds provisoires]":"";return`Objectif : récolter ${m} unité${m>1?"s":""} de plus${b}`}function f(){return t.inventoryLine()}function p(){return r}function g(d){return d.kind==="harvest"&&t.state.progress>0?t.state.progress:d.kind==="found"&&i>0?i:null}function x(d,m){switch(m.kind){case"harvest":return{x:m.node.x,z:m.node.z,radius:Math.max(m.node.r,6),blocked:!1};case"found":{const b=t.state.cache;return b?{x:b.x,z:b.z,radius:11,blocked:!m.ok}:null}case"drop":{const b=t.state.cache;return{x:b?b.x:d.x,z:b?b.z:d.z,radius:b?11:7,blocked:!1}}case"return":{const b=t.state.cache;return b?{x:b.x,z:b.z,radius:11,blocked:!1}:null}case"climb":{const b=m.climbTarget;if(!b)return null;if(b.kind==="tree")return{x:Xt.x,z:Xt.z,radius:Xt.w+5,blocked:!1};const S=Si()[b.i];return S?{x:S.x,z:S.z,radius:5,blocked:!1}:null}default:return null}}return{harvest:t,update:c,resolve:a,promptText:u,objectiveText:h,inventoryText:f,message:p,holdProgress:g,targetMark:x,isHold:d=>!!VE[d.kind],endFrame:()=>t.endFrame()}}const qo={graine:{r:[.95,.78,1.3],color:14270852,emissive:0},brindille:{r:[2.9,.26,.26],color:8016424,emissive:0},miellat:{r:[.9,.88,.9],color:15247420,emissive:3810309}},XE=2,qE=12;let ec=null;function YE(){return ec||(ec=new Jo(1,10,7)),ec}const Kh=new Map;function lp(n){let t=Kh.get(n);if(!t){const e=qo[n];t=new nn({color:e.color,emissive:e.emissive,roughness:.7,metalness:.02}),Kh.set(n,t)}return t}const nc=new ee,jh=new V,Zh=new V,Jh=new V,Qh=new V;function up(n,t,e,i,r){jh.set(e[0],e[1],e[2]),Zh.set(i[0],i[1],i[2]),Jh.set(r[0],r[1],r[2]),nc.makeBasis(jh,Zh,Jh),Qh.set(t[0],t[1],t[2]),nc.setPosition(Qh),n.matrix.copy(nc)}function ic(n){const t=new Vt(YE(),lp(n));return t.matrixAutoUpdate=!1,t.castShadow=!0,t.visible=!1,t}function td(n,t,e,i,r,s=0){const o=qo[t].r.map(l=>l*XE),a=Math.cos(r),c=Math.sin(r);up(n,[e,Nt(e,i)+o[1]*.9+s,i],[a*o[0],0,c*o[0]],[0,o[1],0],[-c*o[2],0,a*o[2]]),n.visible=!0}function $E({scene:n,profile:t=dn}){const e=new be;e.name="gameplay-props",n.add(e);const i={};for(const p of Object.keys(qo))i[p]=ic(p),e.add(i[p]);const r=[];for(let p=0;p<qE;p++){const g=ic("graine");r.push(g),e.add(g)}let s=-1;const o=rp(),a=[];if(o)for(const p of Hr()){const g=[];for(let x=0;x<3;x++){const d=ic(p.kind);e.add(d),g.push(d)}a.push({node:p,clutch:g,drawn:-1})}function c(){for(const p of a){const g=p.node,x=Math.max(0,Math.min(p.clutch.length,g.amount));if(x!==p.drawn){p.drawn=x;for(let d=0;d<p.clutch.length;d++)if(d<x){const m=d/p.clutch.length*Math.PI*2+g.id;td(p.clutch[d],g.kind,g.x+Math.cos(m)*3.2,g.z+Math.sin(m)*3.2,m)}else p.clutch[d].visible=!1}}}function l(p){if(!p||p.total===s)return;s=p.total;let g=0;for(const[x,d]of Object.entries(p.items))for(let m=0;m<d&&g<r.length;m++,g++){const b=g*2.399,S=1.6+g*1.15,y=r[g];y.material=lp(x),td(y,x,p.x+Math.cos(b)*S,p.z+Math.sin(b)*S,b*1.7)}for(;g<r.length;g++)r[g].visible=!1}function u(p,g){for(const w of Object.keys(i))i[w].visible=!1;if(!g)return;const x=i[g.kind];if(!x)return;const d=kl(p),m=d.basis,b=d.scale,S=(p.profile||t).body.mandible,y=[0,S.tip[1]-.15,S.tip[2]+.55],E=qo[g.kind].r;up(x,_n(d,y),Ct(m.side,E[0]*b),Ct(m.up,E[1]*b),Ct(m.fwd,E[2]*b)),x.visible=!0}function h(p,g){u(p,g.carrying),l(g.cache),o&&c()}function f(){n.remove(e)}return{group:e,update:h,dispose:f,provisional:o}}const KE="position:fixed;color:#e6d3ab;font:13px/1.5 monospace;pointer-events:none;text-shadow:0 1px 3px rgba(0,0,0,0.9);z-index:5;";function Cn(n,t){const e=document.createElement("div");return e.id=n,e.style.cssText=KE+t,document.body.appendChild(e),e}function jE(){return{setSite(){},setPrompt(){},setObjective(){},setStock(){},setEvent(){},setHold(){},setBrood(){},setDig(){},toggleControls(){},closeControls(){},dispose(){}}}const ZE=[["ZQSD / WASD","se déplacer"],["Maj","courir"],["Souris (glisser)","tourner la caméra"],["Molette","reculer / rapprocher la vue"],["E","action — appui court, ou maintenu quand la barre apparaît"],["C","choisir la caste à pondre (ouvrière / creuseuse)"],["P","pondre (dans le couvoir, une fois la colonie fondée)"],["H","afficher / masquer cette aide"]];function JE(){if(typeof document>"u")return jE();const n=Cn("diginfo","left:12px;bottom:162px;font-size:12px;color:#e8c98f;"),t=Cn("event","left:12px;bottom:142px;color:#cfe0a8;"),e=Cn("prompt","left:12px;bottom:122px;font-size:14px;color:#ffe6b0;"),i=Cn("objective","left:12px;bottom:88px;color:#f0dfb8;"),r=Cn("stock","left:12px;bottom:70px;opacity:0.85;"),s=Cn("siteinfo","left:12px;bottom:52px;"),o=Cn("sitedetail","left:12px;bottom:34px;opacity:0.62;font-size:12px;"),a=Cn("broodinfo","left:12px;bottom:14px;font-size:12px;color:#e8c98f;"),c=Cn("hold","left:12px;bottom:112px;width:190px;height:5px;background:rgba(0,0,0,0.45);border-radius:3px;overflow:hidden;"),l=document.createElement("div");l.style.cssText="height:100%;width:0%;background:#ffc46a;border-radius:3px;",c.appendChild(l),c.style.display="none";const u=Cn("controls","right:12px;top:12px;padding:10px 14px;background:rgba(12,10,8,0.62);border-radius:5px;line-height:1.8;");u.innerHTML='<div style="opacity:0.75;margin-bottom:4px">Commandes</div>'+ZE.map(([E,w])=>`<div><span style="color:#ffe6b0">${E}</span><span style="opacity:0.72"> — ${w}</span></div>`).join("");let h=!0,f=null,p=null,g=null,x=null,d=null,m=null,b=null,S=null;const y=(E,w,M)=>w===M?M:(E.textContent=w||"",w);return{setSite(E,w,M){E!==f&&(s.textContent=E,s.style.color=M?"#e6d3ab":"#d98b6a",f=E),w!==p&&(o.textContent=w,p=w)},setPrompt(E){g=y(e,E,g)},setObjective(E){x=y(i,E,x)},setStock(E){d=y(r,E,d)},setEvent(E){m=y(t,E,m)},setBrood(E){b=y(a,E,b)},setDig(E){S=y(n,E,S)},setHold(E){const w=E!==null&&E>.001;w!==(c.style.display==="block")&&(c.style.display=w?"block":"none"),w&&(l.style.width=`${Math.min(100,E*100)}%`)},toggleControls(){h=!h,u.style.display=h?"block":"none"},closeControls(){h&&(h=!1,u.style.display="none")},dispose(){for(const E of[i,r,s,o,e,t,a,n,c,u])E.parentNode&&E.parentNode.removeChild(E)}}}const ed=.8,nd=1,rc=40,id=new tt("#FFB03A").multiplyScalar(1.45),QE=new tt("#E8663A").multiplyScalar(1.35);function t1(){const n=[],t=[];for(let i=0;i<=rc;i++){const r=i/rc*Math.PI*2,s=Math.cos(r),o=Math.sin(r);n.push(s*ed,0,o*ed,s*nd,0,o*nd)}for(let i=0;i<rc;i++){const r=i*2,s=r+1,o=r+2,a=r+3;t.push(r,s,a,r,a,o)}const e=new rn;return e.setAttribute("position",new ge(n,3)),e.setIndex(t),e}function e1(n){const t=new ys({color:id.clone(),transparent:!0,opacity:.85,side:he,depthTest:!1,depthWrite:!1,fog:!1}),e=new Vt(t1(),t);return e.name="target-marker",e.renderOrder=900,e.frustumCulled=!1,e.visible=!1,n.add(e),{show(i,r,s,o){if(!i){e.visible=!1;return}e.visible=!0,e.position.set(i.x,Nt(i.x,i.z)+.35,i.z);const a=1+.045*Math.sin(o*4.2);e.scale.setScalar(r*a),t.color.copy(s?QE:id),t.opacity=s?.92:.82+.14*Math.sin(o*4.2)},dispose(){n.remove(e),e.geometry.dispose(),t.dispose()}}}const Je={SEEK:"seek",HARVEST:"harvest",RETURN:"return",DEPOSIT:"deposit"},n1=1.8;function i1(){return{state:Je.SEEK,targetNodeId:null,progress:0,carrying:null,justTook:null,justDropped:null}}const an=Object.freeze({wishX:0,wishZ:0,mag:0,sprint:!1});function rd(n,t,e,i){const r=n-e,s=t-i,o=Math.hypot(r,s);return o<1e-6?an:{wishX:r/o,wishZ:s/o,mag:1,sprint:!1}}function r1(n,t,e){n.justTook=null,n.justDropped=null;const i=t.bodyR??0,r=t.harvestSeconds??n1;switch(n.state){case Je.SEEK:{let s=n.targetNodeId!=null?t.nodeById(n.targetNodeId):null;return(!s||s.amount<=0)&&(s=t.findNode(t.x,t.z)),n.targetNodeId=s?s.id:null,s?Math.hypot(s.x-t.x,s.z-t.z)<=s.r+i*.6?(n.state=Je.HARVEST,n.progress=0,an):rd(s.x,s.z,t.x,t.z):an}case Je.HARVEST:{const s=t.nodeById(n.targetNodeId);if(!s||s.amount<=0)return n.state=Je.SEEK,n.targetNodeId=null,n.progress=0,an;if(n.progress+=e/r,n.progress<1)return an;const o=t.takeFromNode(s,1);return n.progress=0,o<=0?(n.state=Je.SEEK,n.targetNodeId=null,an):(n.carrying={kind:s.kind},n.justTook={kind:s.kind,nodeId:s.id},n.state=Je.RETURN,an)}case Je.RETURN:return t.depot?Math.hypot(t.depot.x-t.x,t.depot.z-t.z)<=(t.depotRadius??0)?(n.state=Je.DEPOSIT,an):rd(t.depot.x,t.depot.z,t.x,t.z):an;case Je.DEPOSIT:return n.carrying?(t.deposit(n.carrying.kind),n.justDropped={kind:n.carrying.kind},n.carrying=null,n.state=Je.SEEK,n.targetNodeId=null,an):(n.state=Je.SEEK,an);default:return n.state=Je.SEEK,an}}const Pn={SEEK_SITE:"seek_site",DIG:"dig",DONE:"done"},s1=1.4;function o1(){return{state:Pn.SEEK_SITE,justArrived:null,justFinished:null}}const Ln=Object.freeze({wishX:0,wishZ:0,mag:0,sprint:!1});function a1(n,t,e,i){const r=n-e,s=t-i,o=Math.hypot(r,s);return o<1e-6?Ln:{wishX:r/o,wishZ:s/o,mag:1,sprint:!1}}function sd(n){const t=Math.max(0,Math.min(1,n.progress))*n.length;return{x:n.mouth.x+n.dir.x*t,z:n.mouth.z+n.dir.z*t}}function c1(n,t,e){n.justArrived=null,n.justFinished=null;const r=(t.bodyR??0)*(t.arriveFactor??s1);switch(n.state){case Pn.SEEK_SITE:{if(!t.site)return Ln;const s=sd(t.site);return Math.hypot(s.x-t.x,s.z-t.z)<=r?(n.state=Pn.DIG,n.justArrived={siteId:t.site.id},Ln):a1(s.x,s.z,t.x,t.z)}case Pn.DIG:{if(!t.site)return n.state=Pn.SEEK_SITE,Ln;if(t.site.progress>=1)return n.state=Pn.DONE,n.justFinished={siteId:t.site.id},Ln;const s=sd(t.site);if(Math.hypot(s.x-t.x,s.z-t.z)>r)return n.state=Pn.SEEK_SITE,Ln;const a=t.digSpeed??0;if(a<=0)return Ln;const c=a*e/t.site.length,l=t.advanceDig(t.site.id,c);return l&&l.done&&(n.state=Pn.DONE,n.justFinished={siteId:t.site.id}),Ln}case Pn.DONE:return Ln;default:return n.state=Pn.SEEK_SITE,Ln}}const hp=hn(Ps),l1=hp*3,u1=hp*7,h1=Math.PI*(3-Math.sqrt(5));function d1({scene:n}){const t=[];let e=0;function i(h,f,p,g,x,d){const m=Nt(f,p),b=h.id===Ps.id,S=h.id===Ol.id,y=tp(h,f,m,p,{controlled:b||S,yaw:g});_s(y,0),_s(y,0),y.y=Nt(y.x,y.z);const{group:E,updatePose:w}=Bf(h);n.add(E),n.add(Ff(E));const M=S?e++%Gr:null;return t.push({entity:y,caste:h.id,forage:b?i1():null,dig:S?o1():null,digSiteIndex:M,updatePose:w,group:E}),y}function r(h,f,p){const g=BE(h);let x=0;for(const d of Object.keys(g)){const m=g[d]||0,b=Po(d);for(let S=0;S<m;S++){const y=t.length,E=y*h1,w=l1+y%5/5*u1;i(b,f+Math.cos(E)*w,p+Math.sin(E)*w,E),x++}}return x}let s=[];function o(h,f,p){const g=p?{x:p.x,z:p.z}:null,x=new Map;for(const d of t){if(d.forage){const m=hn(d.entity.profile),b={x:d.entity.x,z:d.entity.z,bodyR:m,findNode:RE,nodeById:op,takeFromNode:sp,depot:g,depotRadius:Hl,deposit(y){p.items[y]=(p.items[y]||0)+1,p.total+=1},harvestSeconds:sl},S=r1(d.forage,b,h);Lo(d.entity,h,{wish:{wishX:S.wishX,wishZ:S.wishZ},intent:{mag:S.mag,sprint:S.sprint},climbAxis:0})}else if(d.dig){const m=hn(d.entity.profile),b=wf(d.digSiteIndex),S=b.ok?b.site:null;if(S){const w=x.get(d.digSiteIndex)||{progress:S.progress,diggers:0};w.progress=S.progress,w.diggers+=1,x.set(d.digSiteIndex,w)}const y={x:d.entity.x,z:d.entity.z,bodyR:m,site:S,digSpeed:d.entity.profile.digSpeed??0,advanceDig:Rf},E=c1(d.dig,y,h);Lo(d.entity,h,{wish:{wishX:E.wishX,wishZ:E.wishZ},intent:{mag:E.mag,sprint:E.sprint},climbAxis:0})}else Lo(d.entity,h,null);d.updatePose(d.entity,d.entity.legState,f),d.group.position.set(0,0,0)}s=Array.from(x.entries()).map(([d,m])=>({index:d,progress:m.progress,diggers:m.diggers})).sort((d,m)=>d.index-m.index)}function a(){return t.length}function c(){return s}function l(){const h={};for(const f of t)h[f.caste]=(h[f.caste]||0)+1;return h}function u(){for(const h of t)ep(h.entity);t.length=0}return{spawnFromBrood:r,update:o,count:a,countByCaste:l,digSummary:c,dispose:u,workers:t}}const mr=[Ps.id,Ol.id],gr={...ia},od=[140,170],ad=-Math.PI/2,f1=.25,p1=3,m1=ms,cd=6;function g1({scene:n,camera:t,domElement:e,profile:i=dn}){const r=tp(i,od[0],0,od[1],{id:"player",controlled:!0,yaw:ad});r.y=Nt(r.x,r.z),_s(r,0),_s(r,0),r.y=Nt(r.x,r.z);const{group:s,updatePose:o}=Bf(i);n.add(s),n.add(Ff(s));const a=by(e,i);a.state.camYaw=ad;const c=Oy(t),l=JE(),u=e1(n),h=WE({profile:i}),f=$E({scene:n,profile:i});c.update(r,a.state.camYaw,a.state.wantPitch,a.state.camDist,0);const p=OE(m1),g=d1({scene:n});let x=!1;function d(H){H.code==="KeyP"&&(x=!0)}window.addEventListener("keydown",d);function m(){const H=x;return x=!1,H}let b=Ps.id,S=!1;function y(H){H.code==="KeyC"&&(S=!0)}window.addEventListener("keydown",y);function E(){const H=S;return S=!1,H}let w=null,M=0,A=null;function L(H){const j=typeof gr.getFoundedNest=="function"?gr.getFoundedNest():null;return j?Math.hypot(H.x-j.chamber.x,H.z-j.chamber.z)<=j.chamber.r:!1}function _(H,j){const rt=Po(H).label;return j===1?rt:`${rt}s`}function v(){const H=GE(p),j=H===null?"":` · prochaine éclosion : ${Math.ceil(H)} s`,rt=g.countByCaste(),ht=mr.map(Z=>`${rt[Z]||0} ${_(Z,rt[Z]||0)}`).join(", "),q=`Couvain : ${HE(p)}/${p.capacity}${j} · population : ${ht} · à pondre : ${Po(b).label} (C pour changer)`;return M>0?`${q} — ${w}`:`${q} · P (dans le couvoir) — pondre, coûte ${xs}`}function I(){const H=g.digSummary();return H.length?`Creusement — ${H.map(rt=>{const ht=rt.diggers;return`chantier ${rt.index+1} : ${Math.round(rt.progress*100)}% (${ht} creuseuse${ht===1?"":"s"})`}).join(" · ")}`:null}let U=0,N=null,W=null,F=null;function B(H){U-=H;const j=N?Math.hypot(r.x-N[0],r.z-N[1]):1/0;if((W||F)&&U>0&&j<p1)return;U=f1,N=[r.x,r.z];const rt=hs();if(rt){F||(F=Do(rt.x,rt.z)),l.setSite(`Nid fondé — site ${F.grade.label} (${F.score}/100)`,Hh(F),!0);return}W=Do(r.x,r.z),l.setSite(ME(W),Hh(W),W.diggable)}function P(H,j){const rt=a.readMoveIntent();a.consumeHelp()&&l.toggleControls();const ht=h.update(r,a.consumeInteract(),a.isInteractHeld(),H);if(Lo(r,H,iE(rt,c.eye,c.aim)),o(r,r.legState,j),s.position.set(0,0,0),Ho.position.set(r.x,r.y,r.z),Ho.radius=hn(i),f.update(r,h.harvest.state),E()){const st=mr.indexOf(b);b=mr[(st+1)%mr.length]}if(m()){const st=$h(p,h.harvest.state.cache,{founded:wr(),inChamber:L(r)},b);M=3.2,st.ok?(w=`Un œuf est pondu — caste : ${Po(b).label} (${xs} unités prélevées sur la réserve).`,A===null&&(A=0)):w=`Pondre : ${FE(st.reason)}`}const q=kE(p,H);if(q>0&&M<=0){const st=Object.keys(p.workersAvailable).map(bt=>`${p.workersAvailable[bt]} ${_(bt,p.workersAvailable[bt])}`).join(", ");w=q===1?`Un œuf a éclos : ${st} prête.`:`${q} œufs ont éclos : ${st} prêtes.`,M=3.2}M>0&&(M-=H);const Z=hs();Z&&g.spawnFromBrood(p,Z.x,Z.z),g.update(H,j,h.harvest.state.cache),typeof gr.populateNest=="function"&&gr.populateNest(Math.min(p.laidTotal,p.capacity)),A!==null&&(A=Math.min(cd,A+H),typeof gr.setFoundedMix=="function"&&gr.setFoundedMix(A/cd)),B(H),l.setPrompt(h.promptText(r,ht)),l.setObjective(h.objectiveText(r)),l.setStock(h.inventoryText()),l.setEvent(h.message()),l.setHold(h.holdProgress(ht)),l.setBrood(wr()?v():null),l.setDig(I());const ct=h.targetMark(r,ht);u.show(ct,ct?ct.radius:0,ct?ct.blocked:!1,j),h.harvest.state.carrying&&l.closeControls(),h.endFrame(),!a.state.dragging&&!r.climb&&rt.mag>.02&&(a.state.camYaw=Yf(a.state.camYaw,r.yaw,2.2,H)),c.update(r,a.state.camYaw,a.state.wantPitch,a.state.camDist,H)}typeof window<"u"&&(window.__decorPenetration=Jy,window.__antRadius=hn(i),window.__site=(H,j)=>Do(H,j),window.__avatar=i,window.__mushroomRadii=Jf,window.__grass=Si(),window.__nodes=Hr,window.__harvest=()=>h.harvest.state,window.__nestOrigin=hs,window.__canFound=(H,j)=>{const rt=Vl(H,j);return{...rt,text:ol(rt.reason)}},window.__toWater=Qn,window.__brood=p,window.__lay=(H=b)=>$h(p,h.harvest.state.cache,{founded:wr(),inChamber:L(r)},H),window.__inBroodChamber=()=>L(r),window.__selectedCaste=()=>b,window.__setSelectedCaste=H=>{mr.includes(H)&&(b=H)},window.__selectableCastes=mr,window.__workers=g);function z(){window.removeEventListener("keydown",d),window.removeEventListener("keydown",y),a.dispose(),l.dispose(),u.dispose(),f.dispose(),g.dispose(),ep(r)}return{ant:r,group:s,update:P,dispose:z}}const _1=document.getElementById("app"),Zi=Lv(_1),en=Iv(),Ne=new xv;Ne.background=new tt(1709584);Ne.fog=new Ml(1709584,40,220);const Uo=new Tv(12572917,7236152,.85);Ne.add(Uo);const sc={sky:new tt(4873350),ground:new tt(2367283),intensity:.55},un=Il,Fn=Dl,ld=new tt,ud=new tt,hd=new tt,dd=new tt,Qr={sky:new tt(un.hemiSky),ground:new tt(un.hemiGround),fog:new tt(un.fog),bg:new tt(un.sky),sun:new tt(un.sunColor)},ts={sky:new tt(Fn.hemiSky),ground:new tt(Fn.hemiGround),fog:new tt(Fn.fog),bg:new tt(Fn.sky),sun:new tt(Fn.sunColor)},ke=new Rv(un.sunColor,un.sunIntensity);ke.castShadow=!0;const Ls=110,cl=2048,No=220,po=2*Ls/cl;ke.shadow.mapSize.set(cl,cl);ke.shadow.camera.left=-Ls;ke.shadow.camera.right=Ls;ke.shadow.camera.top=Ls;ke.shadow.camera.bottom=-Ls;ke.shadow.camera.near=1;ke.shadow.camera.far=No*2.4;ke.shadow.bias=-.0015;Ne.add(ke);Ne.add(ke.target);function x1(n){const t=Math.round(n.position.x/po)*po,e=Math.round(n.position.z/po)*po,i=na();ke.target.position.set(t,0,e),ke.position.set(t+i[0]*No,i[1]*No,e+i[2]*No)}const v1=new tt(1645102),M1=new tt(789270),Is=Pf();Ne.add(Is.group);const Wl=g1({scene:Ne,camera:en,domElement:Zi.domElement});Ne.traverse(n=>{const t=Array.isArray(n.material)?n.material:n.material?[n.material]:[];for(const e of t)e.isMeshStandardMaterial&&Cs(e)});window.__renderer=Zi;window.__ant=Wl.ant;window.__rooms=Is.rooms;window.__camera=en;window.__scene=Ne;window.__nodes=Bn;window.__world=Is;window.__contain=ta;window.__profileR=Oe;window.__groundY=Nt;window.__tree=Xt;window.__world6={shadeAt:hf,canFoundAt:Fl,foundNest:yf,nestOrigin:vf,getFoundedNest:Mf,populateNest:Ef,sealNest:bf,harvestNode:mf,get nodes(){return Bn},foundedMix:ea,sunDir:na,waterDepthAt:Mi,distanceToWater:Qn};Zi.setResizeCallback(n=>{en.aspect=n,en.updateProjectionMatrix()});const fd=new Cv;function dp(){const n=Math.min(fd.getDelta(),.05),t=fd.elapsedTime;Is.update(n,t,en),Wl.update(n,t),fp(),Zi.render(Ne,en)}const S1=52,y1=26;function pd(n,t,e){const i=1-nt((e+24)/40,0,1),r=nt(1-(Math.abs(n)-S1)/30,0,1),s=nt(1-(t-y1)/30,0,1);return i*r*s}function E1(n,t){const e=Math.min(pd(n.x,n.y,n.z),pd(t.x,t.y,t.z)),i=Math.min(Jc(n.x,n.y,n.z),Jc(t.x,t.y,t.z));return Math.max(e,i)}function fp(){const n=ea();ld.copy(Qr.sky).lerp(ts.sky,n),ud.copy(Qr.ground).lerp(ts.ground,n),hd.copy(Qr.fog).lerp(ts.fog,n),dd.copy(Qr.bg).lerp(ts.bg,n),ke.color.copy(Qr.sun).lerp(ts.sun,n),ke.intensity=Ht(un.sunIntensity,Fn.sunIntensity,n);const t=1-E1(en.position,Wl.ant);Ne.fog.color.copy(v1).lerp(hd,t),Ne.fog.near=Ht(6,Ht(un.fogNear,Fn.fogNear,n),t),Ne.fog.far=Ht(135,Ht(un.fogFar,Fn.fogFar,n),t),Ne.background.copy(M1).lerp(dd,t),Zi.toneMappingExposure=Ht(1.28,Ht(un.exposure,Fn.exposure,n),t),Uo.color.copy(sc.sky).lerp(ld,t),Uo.groundColor.copy(sc.ground).lerp(ud,t),Uo.intensity=Ht(sc.intensity,Ht(un.hemiIntensity,Fn.hemiIntensity,n),t),sy(t),x1(en)}Zi.setAnimationLoop(dp);window.__frame=dp;window.__renderView=(n,t,e=0)=>{en.position.set(n[0],n[1],n[2]),en.lookAt(t[0],t[1],t[2]),en.updateMatrixWorld(),Is.update(1/60,e,en),fp(),Zi.render(Ne,en)};
