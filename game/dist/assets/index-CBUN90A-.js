(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qc="169",Nf=0,Bl=1,Ff=2,$h=1,Kh=2,kn=3,fi=0,Fe=1,he=2,ai=0,pr=1,ja=2,zl=3,kl=4,Of=5,Ci=100,Bf=101,zf=102,kf=103,Hf=104,Gf=200,Vf=201,Wf=202,Xf=203,Za=204,Ja=205,Yf=206,qf=207,$f=208,Kf=209,jf=210,Zf=211,Jf=212,Qf=213,tp=214,Qa=0,tc=1,ec=2,vr=3,nc=4,ic=5,rc=6,sc=7,jh=0,ep=1,np=2,ci=0,ip=1,rp=2,sp=3,Zh=4,op=5,ap=6,cp=7,Jh=300,Mr=301,Sr=302,oc=303,ac=304,Do=306,yo=1e3,Di=1001,cc=1002,qe=1003,lp=1004,_s=1005,yn=1006,jo=1007,Ui=1008,Xn=1009,Qh=1010,td=1011,Jr=1012,tl=1013,zi=1014,Dn=1015,es=1016,el=1017,nl=1018,yr=1020,ed=35902,nd=1021,id=1022,bn=1023,rd=1024,sd=1025,mr=1026,Er=1027,il=1028,rl=1029,od=1030,sl=1031,ol=1033,Qs=33776,to=33777,eo=33778,no=33779,lc=35840,uc=35841,hc=35842,dc=35843,fc=36196,pc=37492,mc=37496,gc=37808,_c=37809,xc=37810,vc=37811,Mc=37812,Sc=37813,yc=37814,Ec=37815,bc=37816,Tc=37817,wc=37818,Ac=37819,Rc=37820,Cc=37821,io=36492,Pc=36494,Lc=36495,ad=36283,Ic=36284,Dc=36285,Uc=36286,up=3200,cd=3201,ld=0,hp=1,oi="",un="srgb",mi="srgb-linear",al="display-p3",Uo="display-p3-linear",Eo="linear",le="srgb",bo="rec709",To="p3",$i=7680,Hl=519,dp=512,fp=513,pp=514,ud=515,mp=516,gp=517,_p=518,xp=519,Gl=35044,Vl="300 es",Vn=2e3,wo=2001;class Ar{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zo=Math.PI/180,Nc=180/Math.PI;function ns(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]).toLowerCase()}function Xe(n,t,e){return Math.max(t,Math.min(e,n))}function vp(n,t){return(n%t+t)%t}function Jo(n,t,e){return(1-e)*n+e*t}function Ir(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ge(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class $t{constructor(t=0,e=0){$t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Xe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,i,r,s,o,a,c,l){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l)}set(t,e,i,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],d=i[2],m=i[5],g=i[8],x=r[0],p=r[3],h=r[6],b=r[1],y=r[4],S=r[7],E=r[2],T=r[5],v=r[8];return s[0]=o*x+a*b+c*E,s[3]=o*p+a*y+c*T,s[6]=o*h+a*S+c*v,s[1]=l*x+u*b+f*E,s[4]=l*p+u*y+f*T,s[7]=l*h+u*S+f*v,s[2]=d*x+m*b+g*E,s[5]=d*p+m*y+g*T,s[8]=d*h+m*S+g*v,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,d=a*c-u*s,m=l*s-o*c,g=e*f+i*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=f*x,t[1]=(r*l-u*i)*x,t[2]=(a*i-r*o)*x,t[3]=d*x,t[4]=(u*e-r*c)*x,t[5]=(r*s-a*e)*x,t[6]=m*x,t[7]=(i*c-l*e)*x,t[8]=(o*e-i*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Qo.makeScale(t,e)),this}rotate(t){return this.premultiply(Qo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qo=new Nt;function hd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Qr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Mp(){const n=Qr("canvas");return n.style.display="block",n}const Wl={};function ro(n){n in Wl||(Wl[n]=!0,console.warn(n))}function Sp(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function yp(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ep(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Xl=new Nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Yl=new Nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Dr={[mi]:{transfer:Eo,primaries:bo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[un]:{transfer:le,primaries:bo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Uo]:{transfer:Eo,primaries:To,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Yl),fromReference:n=>n.applyMatrix3(Xl)},[al]:{transfer:le,primaries:To,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Yl),fromReference:n=>n.applyMatrix3(Xl).convertLinearToSRGB()}},bp=new Set([mi,Uo]),Zt={enabled:!0,_workingColorSpace:mi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!bp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Dr[t].toReference,r=Dr[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Dr[n].primaries},getTransfer:function(n){return n===oi?Eo:Dr[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Dr[t].luminanceCoefficients)}};function gr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ta(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ki;class Tp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ki===void 0&&(Ki=Qr("canvas")),Ki.width=t.width,Ki.height=t.height;const i=Ki.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=gr(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(gr(e[i]/255)*255):e[i]=gr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wp=0;class dd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=ns(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ea(r[o].image)):s.push(ea(r[o]))}else s=ea(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function ea(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Tp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ap=0;class Ie extends Ar{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,i=Di,r=Di,s=yn,o=Ui,a=bn,c=Xn,l=Ie.DEFAULT_ANISOTROPY,u=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=ns(),this.name="",this.source=new dd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yo:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case cc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yo:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case cc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=Jh;Ie.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,i=0,r=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],u=c[4],f=c[8],d=c[1],m=c[5],g=c[9],x=c[2],p=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,S=(m+1)/2,E=(h+1)/2,T=(u+d)/4,v=(f+x)/4,A=(g+p)/4;return y>S&&y>E?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=v/i):S>E?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=A/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=v/s,r=A/s),this.set(i,r,s,e),this}let b=Math.sqrt((p-g)*(p-g)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(f-x)/b,this.z=(d-u)/b,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rp extends Ar{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ie(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new dd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends Rp{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class fd extends Ie{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=qe,this.minFilter=qe,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cp extends Ie{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=qe,this.minFilter=qe,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rr{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],m=s[o+1],g=s[o+2],x=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=x;return}if(f!==x||c!==d||l!==m||u!==g){let p=1-a;const h=c*d+l*m+u*g+f*x,b=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const E=Math.sqrt(y),T=Math.atan2(E,h*b);p=Math.sin(p*T)/E,a=Math.sin(a*T)/E}const S=a*b;if(c=c*p+d*S,l=l*p+m*S,u=u*p+g*S,f=f*p+x*S,p===1-a){const E=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=E,l*=E,u*=E,f*=E}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return t[e]=a*g+u*f+c*m-l*d,t[e+1]=c*g+u*d+l*f-a*m,t[e+2]=l*g+u*m+a*d-c*f,t[e+3]=u*g-a*f-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),f=a(s/2),d=c(i/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*u*f+l*m*g,this._y=l*m*f-d*u*g,this._z=l*u*g+d*m*f,this._w=l*u*f-d*m*g;break;case"YXZ":this._x=d*u*f+l*m*g,this._y=l*m*f-d*u*g,this._z=l*u*g-d*m*f,this._w=l*u*f+d*m*g;break;case"ZXY":this._x=d*u*f-l*m*g,this._y=l*m*f+d*u*g,this._z=l*u*g+d*m*f,this._w=l*u*f-d*m*g;break;case"ZYX":this._x=d*u*f-l*m*g,this._y=l*m*f+d*u*g,this._z=l*u*g-d*m*f,this._w=l*u*f+d*m*g;break;case"YZX":this._x=d*u*f+l*m*g,this._y=l*m*f+d*u*g,this._z=l*u*g-d*m*f,this._w=l*u*f-d*m*g;break;case"XZY":this._x=d*u*f-l*m*g,this._y=l*m*f-d*u*g,this._z=l*u*g+d*m*f,this._w=l*u*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],d=i+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,i=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ql.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ql.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*i),u=2*(a*e-s*r),f=2*(s*i-o*e);return this.x=e+c*l+o*f-a*u,this.y=i+c*u+a*l-s*f,this.z=r+c*f+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return na.copy(this).projectOnVector(t),this.sub(na)}reflect(t){return this.sub(na.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Xe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const na=new k,ql=new Rr;class Xi{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,_n):_n.fromBufferAttribute(s,o),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xs.copy(i.boundingBox)),xs.applyMatrix4(t.matrixWorld),this.union(xs)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ur),vs.subVectors(this.max,Ur),ji.subVectors(t.a,Ur),Zi.subVectors(t.b,Ur),Ji.subVectors(t.c,Ur),Zn.subVectors(Zi,ji),Jn.subVectors(Ji,Zi),vi.subVectors(ji,Ji);let e=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-vi.z,vi.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,vi.z,0,-vi.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-vi.y,vi.x,0];return!ia(e,ji,Zi,Ji,vs)||(e=[1,0,0,0,1,0,0,0,1],!ia(e,ji,Zi,Ji,vs))?!1:(Ms.crossVectors(Zn,Jn),e=[Ms.x,Ms.y,Ms.z],ia(e,ji,Zi,Ji,vs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Nn=[new k,new k,new k,new k,new k,new k,new k,new k],_n=new k,xs=new Xi,ji=new k,Zi=new k,Ji=new k,Zn=new k,Jn=new k,vi=new k,Ur=new k,vs=new k,Ms=new k,Mi=new k;function ia(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Mi.fromArray(n,s);const a=r.x*Math.abs(Mi.x)+r.y*Math.abs(Mi.y)+r.z*Math.abs(Mi.z),c=t.dot(Mi),l=e.dot(Mi),u=i.dot(Mi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Pp=new Xi,Nr=new k,ra=new k;class Cr{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Pp.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Nr.subVectors(t,this.center);const e=Nr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Nr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ra.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Nr.copy(t.center).add(ra)),this.expandByPoint(Nr.copy(t.center).sub(ra))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new k,sa=new k,Ss=new k,Qn=new k,oa=new k,ys=new k,aa=new k;class Lp{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){sa.copy(t).add(e).multiplyScalar(.5),Ss.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub(sa);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ss),a=Qn.dot(this.direction),c=-Qn.dot(Ss),l=Qn.lengthSq(),u=Math.abs(1-o*o);let f,d,m,g;if(u>0)if(f=o*c-a,d=o*a-c,g=s*u,f>=0)if(d>=-g)if(d<=g){const x=1/u;f*=x,d*=x,m=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(sa).addScaledVector(Ss,d),m}intersectSphere(t,e){Fn.subVectors(t.center,this.origin);const i=Fn.dot(this.direction),r=Fn.dot(Fn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,i,r,s){oa.subVectors(e,t),ys.subVectors(i,t),aa.crossVectors(oa,ys);let o=this.direction.dot(aa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qn.subVectors(this.origin,t);const c=a*this.direction.dot(ys.crossVectors(Qn,ys));if(c<0)return null;const l=a*this.direction.dot(oa.cross(Qn));if(l<0||c+l>o)return null;const u=-a*Qn.dot(aa);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(t,e,i,r,s,o,a,c,l,u,f,d,m,g,x,p){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l,u,f,d,m,g,x,p)}set(t,e,i,r,s,o,a,c,l,u,f,d,m,g,x,p){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=g,h[11]=x,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Qi.setFromMatrixColumn(t,0).length(),s=1/Qi.setFromMatrixColumn(t,1).length(),o=1/Qi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=o*u,m=o*f,g=a*u,x=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=m+g*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,m=c*f,g=l*u,x=l*f;e[0]=d+x*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=m*a-g,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,m=c*f,g=l*u,x=l*f;e[0]=d-x*a,e[4]=-o*f,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*u,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,m=o*f,g=a*u,x=a*f;e[0]=c*u,e[4]=g*l-m,e[8]=d*l+x,e[1]=c*f,e[5]=x*l+d,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,m=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-d*f,e[8]=g*f+m,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=m*f+g,e[10]=d-x*f}else if(t.order==="XZY"){const d=o*c,m=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=d*f+x,e[5]=o*u,e[9]=m*f-g,e[2]=g*f-m,e[6]=a*u,e[10]=x*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ip,t,Dp)}lookAt(t,e,i){const r=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),ti.crossVectors(i,Qe),ti.lengthSq()===0&&(Math.abs(i.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),ti.crossVectors(i,Qe)),ti.normalize(),Es.crossVectors(Qe,ti),r[0]=ti.x,r[4]=Es.x,r[8]=Qe.x,r[1]=ti.y,r[5]=Es.y,r[9]=Qe.y,r[2]=ti.z,r[6]=Es.z,r[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],d=i[9],m=i[13],g=i[2],x=i[6],p=i[10],h=i[14],b=i[3],y=i[7],S=i[11],E=i[15],T=r[0],v=r[4],A=r[8],C=r[12],_=r[1],M=r[5],L=r[9],I=r[13],U=r[2],W=r[6],B=r[10],q=r[14],N=r[3],X=r[7],nt=r[11],st=r[15];return s[0]=o*T+a*_+c*U+l*N,s[4]=o*v+a*M+c*W+l*X,s[8]=o*A+a*L+c*B+l*nt,s[12]=o*C+a*I+c*q+l*st,s[1]=u*T+f*_+d*U+m*N,s[5]=u*v+f*M+d*W+m*X,s[9]=u*A+f*L+d*B+m*nt,s[13]=u*C+f*I+d*q+m*st,s[2]=g*T+x*_+p*U+h*N,s[6]=g*v+x*M+p*W+h*X,s[10]=g*A+x*L+p*B+h*nt,s[14]=g*C+x*I+p*q+h*st,s[3]=b*T+y*_+S*U+E*N,s[7]=b*v+y*M+S*W+E*X,s[11]=b*A+y*L+S*B+E*nt,s[15]=b*C+y*I+S*q+E*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],d=t[10],m=t[14],g=t[3],x=t[7],p=t[11],h=t[15];return g*(+s*c*f-r*l*f-s*a*d+i*l*d+r*a*m-i*c*m)+x*(+e*c*m-e*l*d+s*o*d-r*o*m+r*l*u-s*c*u)+p*(+e*l*f-e*a*m-s*o*f+i*o*m+s*a*u-i*l*u)+h*(-r*a*u-e*c*f+e*a*d+r*o*f-i*o*d+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],d=t[10],m=t[11],g=t[12],x=t[13],p=t[14],h=t[15],b=f*p*l-x*d*l+x*c*m-a*p*m-f*c*h+a*d*h,y=g*d*l-u*p*l-g*c*m+o*p*m+u*c*h-o*d*h,S=u*x*l-g*f*l+g*a*m-o*x*m-u*a*h+o*f*h,E=g*f*c-u*x*c-g*a*d+o*x*d+u*a*p-o*f*p,T=e*b+i*y+r*S+s*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const v=1/T;return t[0]=b*v,t[1]=(x*d*s-f*p*s-x*r*m+i*p*m+f*r*h-i*d*h)*v,t[2]=(a*p*s-x*c*s+x*r*l-i*p*l-a*r*h+i*c*h)*v,t[3]=(f*c*s-a*d*s-f*r*l+i*d*l+a*r*m-i*c*m)*v,t[4]=y*v,t[5]=(u*p*s-g*d*s+g*r*m-e*p*m-u*r*h+e*d*h)*v,t[6]=(g*c*s-o*p*s-g*r*l+e*p*l+o*r*h-e*c*h)*v,t[7]=(o*d*s-u*c*s+u*r*l-e*d*l-o*r*m+e*c*m)*v,t[8]=S*v,t[9]=(g*f*s-u*x*s-g*i*m+e*x*m+u*i*h-e*f*h)*v,t[10]=(o*x*s-g*a*s+g*i*l-e*x*l-o*i*h+e*a*h)*v,t[11]=(u*a*s-o*f*s-u*i*l+e*f*l+o*i*m-e*a*m)*v,t[12]=E*v,t[13]=(u*x*r-g*f*r+g*i*d-e*x*d-u*i*p+e*f*p)*v,t[14]=(g*a*r-o*x*r-g*i*c+e*x*c+o*i*p-e*a*p)*v,t[15]=(o*f*r-u*a*r+u*i*c-e*f*c-o*i*d+e*a*d)*v,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,f=a+a,d=s*l,m=s*u,g=s*f,x=o*u,p=o*f,h=a*f,b=c*l,y=c*u,S=c*f,E=i.x,T=i.y,v=i.z;return r[0]=(1-(x+h))*E,r[1]=(m+S)*E,r[2]=(g-y)*E,r[3]=0,r[4]=(m-S)*T,r[5]=(1-(d+h))*T,r[6]=(p+b)*T,r[7]=0,r[8]=(g+y)*v,r[9]=(p-b)*v,r[10]=(1-(d+x))*v,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Qi.set(r[0],r[1],r[2]).length();const o=Qi.set(r[4],r[5],r[6]).length(),a=Qi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],xn.copy(this);const l=1/s,u=1/o,f=1/a;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=f,xn.elements[9]*=f,xn.elements[10]*=f,e.setFromRotationMatrix(xn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=Vn){const c=this.elements,l=2*s/(e-t),u=2*s/(i-r),f=(e+t)/(e-t),d=(i+r)/(i-r);let m,g;if(a===Vn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===wo)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Vn){const c=this.elements,l=1/(e-t),u=1/(i-r),f=1/(o-s),d=(e+t)*l,m=(i+r)*u;let g,x;if(a===Vn)g=(o+s)*f,x=-2*f;else if(a===wo)g=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Qi=new k,xn=new Qt,Ip=new k(0,0,0),Dp=new k(1,1,1),ti=new k,Es=new k,Qe=new k,$l=new Qt,Kl=new Rr;class wn{constructor(t=0,e=0,i=0,r=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return $l.makeRotationFromQuaternion(t),this.setFromRotationMatrix($l,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kl.setFromEuler(this),this.setFromQuaternion(Kl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class pd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Up=0;const jl=new k,tr=new Rr,On=new Qt,bs=new k,Fr=new k,Np=new k,Fp=new Rr,Zl=new k(1,0,0),Jl=new k(0,1,0),Ql=new k(0,0,1),tu={type:"added"},Op={type:"removed"},er={type:"childadded",child:null},ca={type:"childremoved",child:null};class Ae extends Ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new k,e=new wn,i=new Rr,r=new k(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Nt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.multiply(tr),this}rotateOnWorldAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.premultiply(tr),this}rotateX(t){return this.rotateOnAxis(Zl,t)}rotateY(t){return this.rotateOnAxis(Jl,t)}rotateZ(t){return this.rotateOnAxis(Ql,t)}translateOnAxis(t,e){return jl.copy(t).applyQuaternion(this.quaternion),this.position.add(jl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zl,t)}translateY(t){return this.translateOnAxis(Jl,t)}translateZ(t){return this.translateOnAxis(Ql,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?bs.copy(t):bs.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Fr,bs,this.up):On.lookAt(bs,Fr,this.up),this.quaternion.setFromRotationMatrix(On),r&&(On.extractRotation(r.matrixWorld),tr.setFromRotationMatrix(On),this.quaternion.premultiply(tr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tu),er.child=t,this.dispatchEvent(er),er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Op),ca.child=t,this.dispatchEvent(ca),ca.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tu),er.child=t,this.dispatchEvent(er),er.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,t,Np),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,Fp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Ae.DEFAULT_UP=new k(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new k,Bn=new k,la=new k,zn=new k,nr=new k,ir=new k,eu=new k,ua=new k,ha=new k,da=new k,fa=new de,pa=new de,ma=new de;class En{constructor(t=new k,e=new k,i=new k){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),vn.subVectors(t,e),r.cross(vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){vn.subVectors(r,e),Bn.subVectors(i,e),la.subVectors(t,e);const o=vn.dot(vn),a=vn.dot(Bn),c=vn.dot(la),l=Bn.dot(Bn),u=Bn.dot(la),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(l*c-a*u)*d,g=(o*u-a*c)*d;return s.set(1-m-g,g,m)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,i,r,s,o,a,c){return this.getBarycoord(t,e,i,r,zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,zn.x),c.addScaledVector(o,zn.y),c.addScaledVector(a,zn.z),c)}static getInterpolatedAttribute(t,e,i,r,s,o){return fa.setScalar(0),pa.setScalar(0),ma.setScalar(0),fa.fromBufferAttribute(t,e),pa.fromBufferAttribute(t,i),ma.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(fa,s.x),o.addScaledVector(pa,s.y),o.addScaledVector(ma,s.z),o}static isFrontFacing(t,e,i,r){return vn.subVectors(i,e),Bn.subVectors(t,e),vn.cross(Bn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),vn.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return En.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return En.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return En.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return En.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return En.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;nr.subVectors(r,i),ir.subVectors(s,i),ua.subVectors(t,i);const c=nr.dot(ua),l=ir.dot(ua);if(c<=0&&l<=0)return e.copy(i);ha.subVectors(t,r);const u=nr.dot(ha),f=ir.dot(ha);if(u>=0&&f<=u)return e.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(nr,o);da.subVectors(t,s);const m=nr.dot(da),g=ir.dot(da);if(g>=0&&m<=g)return e.copy(s);const x=m*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(ir,a);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return eu.subVectors(s,r),a=(f-u)/(f-u+(m-g)),e.copy(r).addScaledVector(eu,a);const h=1/(p+x+d);return o=x*h,a=d*h,e.copy(i).addScaledVector(nr,o).addScaledVector(ir,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Ts={h:0,s:0,l:0};function ga(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class J{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Zt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Zt.workingColorSpace){if(t=vp(t,1),e=Xe(e,0,1),i=Xe(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=ga(o,s,t+1/3),this.g=ga(o,s,t),this.b=ga(o,s,t-1/3)}return Zt.toWorkingColorSpace(this,r),this}setStyle(t,e=un){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=un){const i=md[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gr(t.r),this.g=gr(t.g),this.b=gr(t.b),this}copyLinearToSRGB(t){return this.r=ta(t.r),this.g=ta(t.g),this.b=ta(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=un){return Zt.fromWorkingColorSpace(Ce.copy(this),t),Math.round(Xe(Ce.r*255,0,255))*65536+Math.round(Xe(Ce.g*255,0,255))*256+Math.round(Xe(Ce.b*255,0,255))}getHexString(t=un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Ce.copy(this),e);const i=Ce.r,r=Ce.g,s=Ce.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=un){Zt.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,i=Ce.g,r=Ce.b;return t!==un?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(Ts);const i=Jo(ei.h,Ts.h,e),r=Jo(ei.s,Ts.s,e),s=Jo(ei.l,Ts.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new J;J.NAMES=md;let Bp=0;class is extends Ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=ns(),this.name="",this.type="Material",this.blending=pr,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Za,this.blendDst=Ja,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new J(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==pr&&(i.blending=this.blending),this.side!==fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Za&&(i.blendSrc=this.blendSrc),this.blendDst!==Ja&&(i.blendDst=this.blendDst),this.blendEquation!==Ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class No extends is{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new J(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new k,ws=new $t;class Tn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Gl,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ws.fromBufferAttribute(this,e),ws.applyMatrix3(t),this.setXY(e,ws.x,ws.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ir(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ge(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ir(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ir(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ir(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ir(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),r=Ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),r=Ge(r,this.array),s=Ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gl&&(t.usage=this.usage),t}}class gd extends Tn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class _d extends Tn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ve extends Tn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let zp=0;const cn=new Qt,_a=new Ae,rr=new k,tn=new Xi,Or=new Xi,Ee=new k;class mn extends Ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hd(t)?_d:gd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Nt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,i){return cn.makeTranslation(t,e,i),this.applyMatrix4(cn),this}scale(t,e,i){return cn.makeScale(t,e,i),this.applyMatrix4(cn),this}lookAt(t){return _a.lookAt(t),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ve(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Or.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors(tn.min,Or.min),tn.expandByPoint(Ee),Ee.addVectors(tn.max,Or.max),tn.expandByPoint(Ee)):(tn.expandByPoint(Or.min),tn.expandByPoint(Or.max))}tn.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Ee.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ee));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ee.fromBufferAttribute(a,l),c&&(rr.fromBufferAttribute(t,l),Ee.add(rr)),r=Math.max(r,i.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<i.count;A++)a[A]=new k,c[A]=new k;const l=new k,u=new k,f=new k,d=new $t,m=new $t,g=new $t,x=new k,p=new k;function h(A,C,_){l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,C),f.fromBufferAttribute(i,_),d.fromBufferAttribute(s,A),m.fromBufferAttribute(s,C),g.fromBufferAttribute(s,_),u.sub(l),f.sub(l),m.sub(d),g.sub(d);const M=1/(m.x*g.y-g.x*m.y);isFinite(M)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(M),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(M),a[A].add(x),a[C].add(x),a[_].add(x),c[A].add(p),c[C].add(p),c[_].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let A=0,C=b.length;A<C;++A){const _=b[A],M=_.start,L=_.count;for(let I=M,U=M+L;I<U;I+=3)h(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const y=new k,S=new k,E=new k,T=new k;function v(A){E.fromBufferAttribute(r,A),T.copy(E);const C=a[A];y.copy(C),y.sub(E.multiplyScalar(E.dot(C))).normalize(),S.crossVectors(T,C);const M=S.dot(c[A])<0?-1:1;o.setXYZW(A,y.x,y.y,y.z,M)}for(let A=0,C=b.length;A<C;++A){const _=b[A],M=_.start,L=_.count;for(let I=M,U=M+L;I<U;I+=3)v(t.getX(I+0)),v(t.getX(I+1)),v(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new k,s=new k,o=new k,a=new k,c=new k,l=new k,u=new k,f=new k;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,f=a.normalized,d=new l.constructor(c.length*u);let m=0,g=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?m=c[x]*a.data.stride+a.offset:m=c[x]*u;for(let h=0;h<u;h++)d[g++]=l[m++]}return new Tn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new mn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const d=l[u],m=t(d,i);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const m=l[f];u.push(m.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nu=new Qt,Si=new Lp,As=new Cr,iu=new k,Rs=new k,Cs=new k,Ps=new k,xa=new k,Ls=new k,ru=new k,Is=new k;class zt extends Ae{constructor(t=new mn,e=new No){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Ls.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],f=s[c];u!==0&&(xa.fromBufferAttribute(f,t),o?Ls.addScaledVector(xa,u):Ls.addScaledVector(xa.sub(e),u))}e.add(Ls)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),As.copy(i.boundingSphere),As.applyMatrix4(s),Si.copy(t.ray).recast(t.near),!(As.containsPoint(Si.origin)===!1&&(Si.intersectSphere(As,iu)===null||Si.origin.distanceToSquared(iu)>(t.far-t.near)**2))&&(nu.copy(s).invert(),Si.copy(t.ray).applyMatrix4(nu),!(i.boundingBox!==null&&Si.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Si)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const p=d[g],h=o[p.materialIndex],b=Math.max(p.start,m.start),y=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=b,E=y;S<E;S+=3){const T=a.getX(S),v=a.getX(S+1),A=a.getX(S+2);r=Ds(this,h,t,i,l,u,f,T,v,A),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=g,h=x;p<h;p+=3){const b=a.getX(p),y=a.getX(p+1),S=a.getX(p+2);r=Ds(this,o,t,i,l,u,f,b,y,S),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const p=d[g],h=o[p.materialIndex],b=Math.max(p.start,m.start),y=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let S=b,E=y;S<E;S+=3){const T=S,v=S+1,A=S+2;r=Ds(this,h,t,i,l,u,f,T,v,A),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let p=g,h=x;p<h;p+=3){const b=p,y=p+1,S=p+2;r=Ds(this,o,t,i,l,u,f,b,y,S),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function kp(n,t,e,i,r,s,o,a){let c;if(t.side===Fe?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===fi,a),c===null)return null;Is.copy(a),Is.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Is);return l<e.near||l>e.far?null:{distance:l,point:Is.clone(),object:n}}function Ds(n,t,e,i,r,s,o,a,c,l){n.getVertexPosition(a,Rs),n.getVertexPosition(c,Cs),n.getVertexPosition(l,Ps);const u=kp(n,t,e,i,Rs,Cs,Ps,ru);if(u){const f=new k;En.getBarycoord(ru,Rs,Cs,Ps,f),r&&(u.uv=En.getInterpolatedAttribute(r,a,c,l,f,new $t)),s&&(u.uv1=En.getInterpolatedAttribute(s,a,c,l,f,new $t)),o&&(u.normal=En.getInterpolatedAttribute(o,a,c,l,f,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new k,materialIndex:0};En.getNormal(Rs,Cs,Ps,d.normal),u.face=d,u.barycoord=f}return u}class rs extends mn{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let d=0,m=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ve(l,3)),this.setAttribute("normal",new ve(u,3)),this.setAttribute("uv",new ve(f,2));function g(x,p,h,b,y,S,E,T,v,A,C){const _=S/v,M=E/A,L=S/2,I=E/2,U=T/2,W=v+1,B=A+1;let q=0,N=0;const X=new k;for(let nt=0;nt<B;nt++){const st=nt*M-I;for(let yt=0;yt<W;yt++){const Ft=yt*_-L;X[x]=Ft*b,X[p]=st*y,X[h]=U,l.push(X.x,X.y,X.z),X[x]=0,X[p]=0,X[h]=T>0?1:-1,u.push(X.x,X.y,X.z),f.push(yt/v),f.push(1-nt/A),q+=1}}for(let nt=0;nt<A;nt++)for(let st=0;st<v;st++){const yt=d+st+W*nt,Ft=d+st+W*(nt+1),$=d+(st+1)+W*(nt+1),Q=d+(st+1)+W*nt;c.push(yt,Ft,Q),c.push(Ft,$,Q),N+=6}a.addGroup(m,N,C),m+=N,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function br(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ne(n){const t={};for(let e=0;e<n.length;e++){const i=br(n[e]);for(const r in i)t[r]=i[r]}return t}function Hp(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function xd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const Gp={clone:br,merge:Ne};var Vp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends is{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vp,this.fragmentShader=Wp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=br(t.uniforms),this.uniformsGroups=Hp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class vd extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ni=new k,su=new $t,ou=new $t;class hn extends vd{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Nc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Nc*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,su,ou),e.subVectors(ou,su)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zo*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const sr=-90,or=1;class Xp extends Ae{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new hn(sr,or,t,e);r.layers=this.layers,this.add(r);const s=new hn(sr,or,t,e);s.layers=this.layers,this.add(s);const o=new hn(sr,or,t,e);o.layers=this.layers,this.add(o);const a=new hn(sr,or,t,e);a.layers=this.layers,this.add(a);const c=new hn(sr,or,t,e);c.layers=this.layers,this.add(c);const l=new hn(sr,or,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===Vn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===wo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(f,d,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Md extends Ie{constructor(t,e,i,r,s,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Mr,super(t,e,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yp extends ki{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Md(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new rs(5,5,5),s=new Yn({name:"CubemapFromEquirect",uniforms:br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fe,blending:ai});s.uniforms.tEquirect.value=e;const o=new zt(r,s),a=e.minFilter;return e.minFilter===Ui&&(e.minFilter=yn),new Xp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const va=new k,qp=new k,$p=new Nt;class Ti{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=va.subVectors(i,e).cross(qp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(va),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||$p.getNormalMatrix(t),r=this.coplanarPoint(va).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new Cr,Us=new k;class cl{constructor(t=new Ti,e=new Ti,i=new Ti,r=new Ti,s=new Ti,o=new Ti){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Vn){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],f=r[6],d=r[7],m=r[8],g=r[9],x=r[10],p=r[11],h=r[12],b=r[13],y=r[14],S=r[15];if(i[0].setComponents(c-s,d-l,p-m,S-h).normalize(),i[1].setComponents(c+s,d+l,p+m,S+h).normalize(),i[2].setComponents(c+o,d+u,p+g,S+b).normalize(),i[3].setComponents(c-o,d-u,p-g,S-b).normalize(),i[4].setComponents(c-a,d-f,p-x,S-y).normalize(),e===Vn)i[5].setComponents(c+a,d+f,p+x,S+y).normalize();else if(e===wo)i[5].setComponents(a,f,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(t){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Us.x=r.normal.x>0?t.max.x:t.min.x,Us.y=r.normal.y>0?t.max.y:t.min.y,Us.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Us)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sd(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Kp(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,f=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){const u=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,u);else{f.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<f.length;m++){const g=f[d],x=f[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let m=0,g=f.length;m<g;m++){const x=f[m];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class ss extends mn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,f=t/a,d=e/c,m=[],g=[],x=[],p=[];for(let h=0;h<u;h++){const b=h*d-o;for(let y=0;y<l;y++){const S=y*f-s;g.push(S,-b,0),x.push(0,0,1),p.push(y/a),p.push(1-h/c)}}for(let h=0;h<c;h++)for(let b=0;b<a;b++){const y=b+l*h,S=b+l*(h+1),E=b+1+l*(h+1),T=b+1+l*h;m.push(y,S,T),m.push(S,E,T)}this.setIndex(m),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(x,3)),this.setAttribute("uv",new ve(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ss(t.width,t.height,t.widthSegments,t.heightSegments)}}var jp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zp=`#ifdef USE_ALPHAHASH
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
#endif`,Jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,em=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nm=`#ifdef USE_AOMAP
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
#endif`,im=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rm=`#ifdef USE_BATCHING
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
#endif`,sm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,om=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,am=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lm=`#ifdef USE_IRIDESCENCE
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
#endif`,um=`#ifdef USE_BUMPMAP
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
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,vm=`#define PI 3.141592653589793
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
} // validated`,Mm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sm=`vec3 transformedNormal = objectNormal;
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
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Am=`
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
}`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Lm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
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
#endif`,Dm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Um=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Om=`#ifdef USE_GRADIENTMAP
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
}`,Bm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hm=`uniform bool receiveShadow;
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
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Vm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qm=`PhysicalMaterial material;
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
#endif`,$m=`struct PhysicalMaterial {
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
}`,Km=`
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
#endif`,jm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,n0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,i0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,s0=`#if defined( USE_POINTS_UV )
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
#endif`,o0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h0=`#ifdef USE_MORPHTARGETS
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
#endif`,d0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,p0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,m0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,x0=`#ifdef USE_NORMALMAP
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
#endif`,v0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,T0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,U0=`float getShadowMask() {
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
}`,N0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F0=`#ifdef USE_SKINNING
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
#endif`,O0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B0=`#ifdef USE_SKINNING
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
#endif`,z0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,V0=`#ifdef USE_TRANSMISSION
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
#endif`,W0=`#ifdef USE_TRANSMISSION
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
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const K0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j0=`uniform sampler2D t2D;
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
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`#include <common>
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
}`,ng=`#if DEPTH_PACKING == 3200
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
}`,ig=`#define DISTANCE
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
}`,rg=`#define DISTANCE
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
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`uniform float scale;
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
}`,cg=`uniform vec3 diffuse;
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
}`,lg=`#include <common>
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
}`,ug=`uniform vec3 diffuse;
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
}`,hg=`#define LAMBERT
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
}`,dg=`#define LAMBERT
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
}`,fg=`#define MATCAP
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
}`,pg=`#define MATCAP
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
}`,mg=`#define NORMAL
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
}`,gg=`#define NORMAL
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
}`,_g=`#define PHONG
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
}`,xg=`#define PHONG
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
}`,vg=`#define STANDARD
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
}`,Mg=`#define STANDARD
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
}`,Sg=`#define TOON
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
}`,yg=`#define TOON
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
}`,Eg=`uniform float size;
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
}`,bg=`uniform vec3 diffuse;
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
}`,Tg=`#include <common>
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
}`,wg=`uniform vec3 color;
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
}`,Ag=`uniform float rotation;
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:jp,alphahash_pars_fragment:Zp,alphamap_fragment:Jp,alphamap_pars_fragment:Qp,alphatest_fragment:tm,alphatest_pars_fragment:em,aomap_fragment:nm,aomap_pars_fragment:im,batching_pars_vertex:rm,batching_vertex:sm,begin_vertex:om,beginnormal_vertex:am,bsdfs:cm,iridescence_fragment:lm,bumpmap_pars_fragment:um,clipping_planes_fragment:hm,clipping_planes_pars_fragment:dm,clipping_planes_pars_vertex:fm,clipping_planes_vertex:pm,color_fragment:mm,color_pars_fragment:gm,color_pars_vertex:_m,color_vertex:xm,common:vm,cube_uv_reflection_fragment:Mm,defaultnormal_vertex:Sm,displacementmap_pars_vertex:ym,displacementmap_vertex:Em,emissivemap_fragment:bm,emissivemap_pars_fragment:Tm,colorspace_fragment:wm,colorspace_pars_fragment:Am,envmap_fragment:Rm,envmap_common_pars_fragment:Cm,envmap_pars_fragment:Pm,envmap_pars_vertex:Lm,envmap_physical_pars_fragment:Gm,envmap_vertex:Im,fog_vertex:Dm,fog_pars_vertex:Um,fog_fragment:Nm,fog_pars_fragment:Fm,gradientmap_pars_fragment:Om,lightmap_pars_fragment:Bm,lights_lambert_fragment:zm,lights_lambert_pars_fragment:km,lights_pars_begin:Hm,lights_toon_fragment:Vm,lights_toon_pars_fragment:Wm,lights_phong_fragment:Xm,lights_phong_pars_fragment:Ym,lights_physical_fragment:qm,lights_physical_pars_fragment:$m,lights_fragment_begin:Km,lights_fragment_maps:jm,lights_fragment_end:Zm,logdepthbuf_fragment:Jm,logdepthbuf_pars_fragment:Qm,logdepthbuf_pars_vertex:t0,logdepthbuf_vertex:e0,map_fragment:n0,map_pars_fragment:i0,map_particle_fragment:r0,map_particle_pars_fragment:s0,metalnessmap_fragment:o0,metalnessmap_pars_fragment:a0,morphinstance_vertex:c0,morphcolor_vertex:l0,morphnormal_vertex:u0,morphtarget_pars_vertex:h0,morphtarget_vertex:d0,normal_fragment_begin:f0,normal_fragment_maps:p0,normal_pars_fragment:m0,normal_pars_vertex:g0,normal_vertex:_0,normalmap_pars_fragment:x0,clearcoat_normal_fragment_begin:v0,clearcoat_normal_fragment_maps:M0,clearcoat_pars_fragment:S0,iridescence_pars_fragment:y0,opaque_fragment:E0,packing:b0,premultiplied_alpha_fragment:T0,project_vertex:w0,dithering_fragment:A0,dithering_pars_fragment:R0,roughnessmap_fragment:C0,roughnessmap_pars_fragment:P0,shadowmap_pars_fragment:L0,shadowmap_pars_vertex:I0,shadowmap_vertex:D0,shadowmask_pars_fragment:U0,skinbase_vertex:N0,skinning_pars_vertex:F0,skinning_vertex:O0,skinnormal_vertex:B0,specularmap_fragment:z0,specularmap_pars_fragment:k0,tonemapping_fragment:H0,tonemapping_pars_fragment:G0,transmission_fragment:V0,transmission_pars_fragment:W0,uv_pars_fragment:X0,uv_pars_vertex:Y0,uv_vertex:q0,worldpos_vertex:$0,background_vert:K0,background_frag:j0,backgroundCube_vert:Z0,backgroundCube_frag:J0,cube_vert:Q0,cube_frag:tg,depth_vert:eg,depth_frag:ng,distanceRGBA_vert:ig,distanceRGBA_frag:rg,equirect_vert:sg,equirect_frag:og,linedashed_vert:ag,linedashed_frag:cg,meshbasic_vert:lg,meshbasic_frag:ug,meshlambert_vert:hg,meshlambert_frag:dg,meshmatcap_vert:fg,meshmatcap_frag:pg,meshnormal_vert:mg,meshnormal_frag:gg,meshphong_vert:_g,meshphong_frag:xg,meshphysical_vert:vg,meshphysical_frag:Mg,meshtoon_vert:Sg,meshtoon_frag:yg,points_vert:Eg,points_frag:bg,shadow_vert:Tg,shadow_frag:wg,sprite_vert:Ag,sprite_frag:Rg},ot={common:{diffuse:{value:new J(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new J(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new J(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new J(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},Cn={basic:{uniforms:Ne([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Ne([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new J(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Ne([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new J(0)},specular:{value:new J(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Ne([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new J(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Ne([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new J(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Ne([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Ne([ot.points,ot.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Ne([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Ne([ot.common,ot.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Ne([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Ne([ot.sprite,ot.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Ne([ot.common,ot.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Ne([ot.lights,ot.fog,{color:{value:new J(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};Cn.physical={uniforms:Ne([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new J(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new J(0)},specularColor:{value:new J(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const Ns={r:0,b:0,g:0},Ei=new wn,Cg=new Qt;function Pg(n,t,e,i,r,s,o){const a=new J(0);let c=s===!0?0:1,l,u,f=null,d=0,m=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?e:t).get(y)),y}function x(b){let y=!1;const S=g(b);S===null?h(a,c):S&&S.isColor&&(h(S,1),y=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(b,y){const S=g(y);S&&(S.isCubeTexture||S.mapping===Do)?(u===void 0&&(u=new zt(new rs(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:br(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,T,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ei.copy(y.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Cg.makeRotationFromEuler(Ei)),u.material.toneMapped=Zt.getTransfer(S.colorSpace)!==le,(f!==S||d!==S.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,m=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new zt(new ss(2,2),new Yn({name:"BackgroundMaterial",uniforms:br(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(S.colorSpace)!==le,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,f=S,d=S.version,m=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function h(b,y){b.getRGB(Ns,xd(n)),i.buffers.color.setClear(Ns.r,Ns.g,Ns.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),c=y,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,h(a,c)},render:x,addToRenderList:p}}function Lg(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(_,M,L,I,U){let W=!1;const B=f(I,L,M);s!==B&&(s=B,l(s.object)),W=m(_,I,L,U),W&&g(_,I,L,U),U!==null&&t.update(U,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,S(_,M,L,I),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return n.createVertexArray()}function l(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function f(_,M,L){const I=L.wireframe===!0;let U=i[_.id];U===void 0&&(U={},i[_.id]=U);let W=U[M.id];W===void 0&&(W={},U[M.id]=W);let B=W[I];return B===void 0&&(B=d(c()),W[I]=B),B}function d(_){const M=[],L=[],I=[];for(let U=0;U<e;U++)M[U]=0,L[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:L,attributeDivisors:I,object:_,attributes:{},index:null}}function m(_,M,L,I){const U=s.attributes,W=M.attributes;let B=0;const q=L.getAttributes();for(const N in q)if(q[N].location>=0){const nt=U[N];let st=W[N];if(st===void 0&&(N==="instanceMatrix"&&_.instanceMatrix&&(st=_.instanceMatrix),N==="instanceColor"&&_.instanceColor&&(st=_.instanceColor)),nt===void 0||nt.attribute!==st||st&&nt.data!==st.data)return!0;B++}return s.attributesNum!==B||s.index!==I}function g(_,M,L,I){const U={},W=M.attributes;let B=0;const q=L.getAttributes();for(const N in q)if(q[N].location>=0){let nt=W[N];nt===void 0&&(N==="instanceMatrix"&&_.instanceMatrix&&(nt=_.instanceMatrix),N==="instanceColor"&&_.instanceColor&&(nt=_.instanceColor));const st={};st.attribute=nt,nt&&nt.data&&(st.data=nt.data),U[N]=st,B++}s.attributes=U,s.attributesNum=B,s.index=I}function x(){const _=s.newAttributes;for(let M=0,L=_.length;M<L;M++)_[M]=0}function p(_){h(_,0)}function h(_,M){const L=s.newAttributes,I=s.enabledAttributes,U=s.attributeDivisors;L[_]=1,I[_]===0&&(n.enableVertexAttribArray(_),I[_]=1),U[_]!==M&&(n.vertexAttribDivisor(_,M),U[_]=M)}function b(){const _=s.newAttributes,M=s.enabledAttributes;for(let L=0,I=M.length;L<I;L++)M[L]!==_[L]&&(n.disableVertexAttribArray(L),M[L]=0)}function y(_,M,L,I,U,W,B){B===!0?n.vertexAttribIPointer(_,M,L,U,W):n.vertexAttribPointer(_,M,L,I,U,W)}function S(_,M,L,I){x();const U=I.attributes,W=L.getAttributes(),B=M.defaultAttributeValues;for(const q in W){const N=W[q];if(N.location>=0){let X=U[q];if(X===void 0&&(q==="instanceMatrix"&&_.instanceMatrix&&(X=_.instanceMatrix),q==="instanceColor"&&_.instanceColor&&(X=_.instanceColor)),X!==void 0){const nt=X.normalized,st=X.itemSize,yt=t.get(X);if(yt===void 0)continue;const Ft=yt.buffer,$=yt.type,Q=yt.bytesPerElement,ht=$===n.INT||$===n.UNSIGNED_INT||X.gpuType===tl;if(X.isInterleavedBufferAttribute){const ct=X.data,bt=ct.stride,Et=X.offset;if(ct.isInstancedInterleavedBuffer){for(let Bt=0;Bt<N.locationSize;Bt++)h(N.location+Bt,ct.meshPerAttribute);_.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Bt=0;Bt<N.locationSize;Bt++)p(N.location+Bt);n.bindBuffer(n.ARRAY_BUFFER,Ft);for(let Bt=0;Bt<N.locationSize;Bt++)y(N.location+Bt,st/N.locationSize,$,nt,bt*Q,(Et+st/N.locationSize*Bt)*Q,ht)}else{if(X.isInstancedBufferAttribute){for(let ct=0;ct<N.locationSize;ct++)h(N.location+ct,X.meshPerAttribute);_.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ct=0;ct<N.locationSize;ct++)p(N.location+ct);n.bindBuffer(n.ARRAY_BUFFER,Ft);for(let ct=0;ct<N.locationSize;ct++)y(N.location+ct,st/N.locationSize,$,nt,st*Q,st/N.locationSize*ct*Q,ht)}}else if(B!==void 0){const nt=B[q];if(nt!==void 0)switch(nt.length){case 2:n.vertexAttrib2fv(N.location,nt);break;case 3:n.vertexAttrib3fv(N.location,nt);break;case 4:n.vertexAttrib4fv(N.location,nt);break;default:n.vertexAttrib1fv(N.location,nt)}}}}b()}function E(){A();for(const _ in i){const M=i[_];for(const L in M){const I=M[L];for(const U in I)u(I[U].object),delete I[U];delete M[L]}delete i[_]}}function T(_){if(i[_.id]===void 0)return;const M=i[_.id];for(const L in M){const I=M[L];for(const U in I)u(I[U].object),delete I[U];delete M[L]}delete i[_.id]}function v(_){for(const M in i){const L=i[M];if(L[_.id]===void 0)continue;const I=L[_.id];for(const U in I)u(I[U].object),delete I[U];delete L[_.id]}}function A(){C(),o=!0,s!==r&&(s=r,l(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:p,disableUnusedAttributes:b}}function Ig(n,t,e){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function o(l,u,f){f!==0&&(n.drawArraysInstanced(i,l,u,f),e.update(u,i,f))}function a(l,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,f);let m=0;for(let g=0;g<f;g++)m+=u[g];e.update(m,i,1)}function c(l,u,f,d){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x];for(let x=0;x<d.length;x++)e.update(g,i,d[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Dg(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const v=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(v){return!(v!==bn&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){const A=v===es&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==Xn&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&v!==Dn&&!A)}function c(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const v=t.get("EXT_clip_control");v.clipControlEXT(v.LOWER_LEFT_EXT,v.ZERO_TO_ONE_EXT)}const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:E,maxSamples:T}}function Ug(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new Ti,a=new Nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,m){const g=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{const b=s?0:i,y=b*4;let S=h.clippingState||null;c.value=S,S=u(g,d,y,m);for(let E=0;E!==y;++E)S[E]=e[E];h.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,d,m,g){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=c.value,g!==!0||p===null){const h=m+x*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<h)&&(p=new Float32Array(h));for(let y=0,S=m;y!==x;++y,S+=4)o.copy(f[y]).applyMatrix4(b,a),o.normal.toArray(p,S),p[S+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function Ng(n){let t=new WeakMap;function e(o,a){return a===oc?o.mapping=Mr:a===ac&&(o.mapping=Sr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===oc||a===ac)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Yp(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class yd extends vd{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const hr=4,au=[.125,.215,.35,.446,.526,.582],Pi=20,Ma=new yd,cu=new J;let Sa=null,ya=0,Ea=0,ba=!1;const wi=(1+Math.sqrt(5))/2,ar=1/wi,lu=[new k(-wi,ar,0),new k(wi,ar,0),new k(-ar,0,wi),new k(ar,0,wi),new k(0,wi,-ar),new k(0,wi,ar),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class uu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Sa=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=du(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sa,ya,Ea),this._renderer.xr.enabled=ba,t.scissorTest=!1,Fs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Mr||t.mapping===Sr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sa=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:es,format:bn,colorSpace:mi,depthBuffer:!1},r=hu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hu(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fg(s)),this._blurMaterial=Og(s,t,e)}return r}_compileMaterial(t){const e=new zt(this._lodPlanes[0],t);this._renderer.compile(e,Ma)}_sceneToCubeUV(t,e,i,r){const a=new hn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(cu),u.toneMapping=ci,u.autoClear=!1;const m=new No({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),g=new zt(new rs,m);let x=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,x=!0):(m.color.copy(cu),x=!0);for(let h=0;h<6;h++){const b=h%3;b===0?(a.up.set(0,c[h],0),a.lookAt(l[h],0,0)):b===1?(a.up.set(0,0,c[h]),a.lookAt(0,l[h],0)):(a.up.set(0,c[h],0),a.lookAt(0,0,l[h]));const y=this._cubeSize;Fs(r,b*y,h>2?y:0,y,y),u.setRenderTarget(r),x&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Mr||t.mapping===Sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=du());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new zt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Fs(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Ma)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=lu[(r-s-1)%lu.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new zt(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Pi-1),x=s/g,p=isFinite(s)?1+Math.floor(u*x):Pi;p>Pi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Pi}`);const h=[];let b=0;for(let v=0;v<Pi;++v){const A=v/x,C=Math.exp(-A*A/2);h.push(C),v===0?b+=C:v<p&&(b+=2*C)}for(let v=0;v<h.length;v++)h[v]=h[v]/b;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const S=this._sizeLods[r],E=3*S*(r>y-hr?r-y+hr:0),T=4*(this._cubeSize-S);Fs(e,E,T,3*S,2*S),c.setRenderTarget(e),c.render(f,Ma)}}function Fg(n){const t=[],e=[],i=[];let r=n;const s=n-hr+1+au.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>n-hr?c=au[o-n+hr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,x=3,p=2,h=1,b=new Float32Array(x*g*m),y=new Float32Array(p*g*m),S=new Float32Array(h*g*m);for(let T=0;T<m;T++){const v=T%3*2/3-1,A=T>2?0:-1,C=[v,A,0,v+2/3,A,0,v+2/3,A+1,0,v,A,0,v+2/3,A+1,0,v,A+1,0];b.set(C,x*g*T),y.set(d,p*g*T);const _=[T,T,T,T,T,T];S.set(_,h*g*T)}const E=new mn;E.setAttribute("position",new Tn(b,x)),E.setAttribute("uv",new Tn(y,p)),E.setAttribute("faceIndex",new Tn(S,h)),t.push(E),r>hr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function hu(n,t,e){const i=new ki(n,t,e);return i.texture.mapping=Do,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fs(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Og(n,t,e){const i=new Float32Array(Pi),r=new k(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ll(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function du(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ll(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function fu(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function ll(){return`

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
	`}function Bg(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===oc||c===ac,u=c===Mr||c===Sr;if(l||u){let f=t.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new uu(n)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return l&&m&&m.height>0||u&&m&&r(m)?(e===null&&(e=new uu(n)),f=l?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function zg(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&ro("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function kg(n,t,e,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let p=0,h=x.length;p<h;p++)t.remove(x[p])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function c(f){const d=f.attributes;for(const g in d)t.update(d[g],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const x=m[g];for(let p=0,h=x.length;p<h;p++)t.update(x[p],n.ARRAY_BUFFER)}}function l(f){const d=[],m=f.index,g=f.attributes.position;let x=0;if(m!==null){const b=m.array;x=m.version;for(let y=0,S=b.length;y<S;y+=3){const E=b[y+0],T=b[y+1],v=b[y+2];d.push(E,T,T,v,v,E)}}else if(g!==void 0){const b=g.array;x=g.version;for(let y=0,S=b.length/3-1;y<S;y+=3){const E=y+0,T=y+1,v=y+2;d.push(E,T,T,v,v,E)}}else return;const p=new(hd(d)?_d:gd)(d,1);p.version=x;const h=s.get(f);h&&t.remove(h),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function Hg(n,t,e){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,m){n.drawElements(i,m,s,d*o),e.update(m,i,1)}function l(d,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,d*o,g),e.update(m,i,g))}function u(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,g);let p=0;for(let h=0;h<g;h++)p+=m[h];e.update(p,i,1)}function f(d,m,g,x){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)l(d[h]/o,m[h],x[h]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,x,0,g);let h=0;for(let b=0;b<g;b++)h+=m[b];for(let b=0;b<x.length;b++)e.update(h,i,x[b])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Gg(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Vg(n,t,e){const i=new WeakMap,r=new de;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let C=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",C)};d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let y=0;m===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let S=a.attributes.position.count*y,E=1;S>t.maxTextureSize&&(E=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const T=new Float32Array(S*E*4*f),v=new fd(T,S,E,f);v.type=Dn,v.needsUpdate=!0;const A=y*4;for(let _=0;_<f;_++){const M=p[_],L=h[_],I=b[_],U=S*E*4*_;for(let W=0;W<M.count;W++){const B=W*A;m===!0&&(r.fromBufferAttribute(M,W),T[U+B+0]=r.x,T[U+B+1]=r.y,T[U+B+2]=r.z,T[U+B+3]=0),g===!0&&(r.fromBufferAttribute(L,W),T[U+B+4]=r.x,T[U+B+5]=r.y,T[U+B+6]=r.z,T[U+B+7]=0),x===!0&&(r.fromBufferAttribute(I,W),T[U+B+8]=r.x,T[U+B+9]=r.y,T[U+B+10]=r.z,T[U+B+11]=I.itemSize===4?r.w:1)}}d={count:f,texture:v,size:new $t(S,E)},i.set(a,d),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let m=0;for(let x=0;x<l.length;x++)m+=l[x];const g=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Wg(n,t,e,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==l&&(t.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class Ed extends Ie{constructor(t,e,i,r,s,o,a,c,l,u=mr){if(u!==mr&&u!==Er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===mr&&(i=zi),i===void 0&&u===Er&&(i=yr),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:qe,this.minFilter=c!==void 0?c:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const bd=new Ie,pu=new Ed(1,1),Td=new fd,wd=new Cp,Ad=new Md,mu=[],gu=[],_u=new Float32Array(16),xu=new Float32Array(9),vu=new Float32Array(4);function Pr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=mu[r];if(s===void 0&&(s=new Float32Array(r),mu[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Se(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ye(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Fo(n,t){let e=gu[t];e===void 0&&(e=new Int32Array(t),gu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Xg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Yg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2fv(this.addr,t),ye(e,t)}}function qg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;n.uniform3fv(this.addr,t),ye(e,t)}}function $g(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4fv(this.addr,t),ye(e,t)}}function Kg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,i))return;vu.set(i),n.uniformMatrix2fv(this.addr,!1,vu),ye(e,i)}}function jg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,i))return;xu.set(i),n.uniformMatrix3fv(this.addr,!1,xu),ye(e,i)}}function Zg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,i))return;_u.set(i),n.uniformMatrix4fv(this.addr,!1,_u),ye(e,i)}}function Jg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Qg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2iv(this.addr,t),ye(e,t)}}function t_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3iv(this.addr,t),ye(e,t)}}function e_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4iv(this.addr,t),ye(e,t)}}function n_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function i_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2uiv(this.addr,t),ye(e,t)}}function r_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3uiv(this.addr,t),ye(e,t)}}function s_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4uiv(this.addr,t),ye(e,t)}}function o_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(pu.compareFunction=ud,s=pu):s=bd,e.setTexture2D(t||s,r)}function a_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||wd,r)}function c_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Ad,r)}function l_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Td,r)}function u_(n){switch(n){case 5126:return Xg;case 35664:return Yg;case 35665:return qg;case 35666:return $g;case 35674:return Kg;case 35675:return jg;case 35676:return Zg;case 5124:case 35670:return Jg;case 35667:case 35671:return Qg;case 35668:case 35672:return t_;case 35669:case 35673:return e_;case 5125:return n_;case 36294:return i_;case 36295:return r_;case 36296:return s_;case 35678:case 36198:case 36298:case 36306:case 35682:return o_;case 35679:case 36299:case 36307:return a_;case 35680:case 36300:case 36308:case 36293:return c_;case 36289:case 36303:case 36311:case 36292:return l_}}function h_(n,t){n.uniform1fv(this.addr,t)}function d_(n,t){const e=Pr(t,this.size,2);n.uniform2fv(this.addr,e)}function f_(n,t){const e=Pr(t,this.size,3);n.uniform3fv(this.addr,e)}function p_(n,t){const e=Pr(t,this.size,4);n.uniform4fv(this.addr,e)}function m_(n,t){const e=Pr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function g_(n,t){const e=Pr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function __(n,t){const e=Pr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function x_(n,t){n.uniform1iv(this.addr,t)}function v_(n,t){n.uniform2iv(this.addr,t)}function M_(n,t){n.uniform3iv(this.addr,t)}function S_(n,t){n.uniform4iv(this.addr,t)}function y_(n,t){n.uniform1uiv(this.addr,t)}function E_(n,t){n.uniform2uiv(this.addr,t)}function b_(n,t){n.uniform3uiv(this.addr,t)}function T_(n,t){n.uniform4uiv(this.addr,t)}function w_(n,t,e){const i=this.cache,r=t.length,s=Fo(e,r);Se(i,s)||(n.uniform1iv(this.addr,s),ye(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||bd,s[o])}function A_(n,t,e){const i=this.cache,r=t.length,s=Fo(e,r);Se(i,s)||(n.uniform1iv(this.addr,s),ye(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||wd,s[o])}function R_(n,t,e){const i=this.cache,r=t.length,s=Fo(e,r);Se(i,s)||(n.uniform1iv(this.addr,s),ye(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Ad,s[o])}function C_(n,t,e){const i=this.cache,r=t.length,s=Fo(e,r);Se(i,s)||(n.uniform1iv(this.addr,s),ye(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Td,s[o])}function P_(n){switch(n){case 5126:return h_;case 35664:return d_;case 35665:return f_;case 35666:return p_;case 35674:return m_;case 35675:return g_;case 35676:return __;case 5124:case 35670:return x_;case 35667:case 35671:return v_;case 35668:case 35672:return M_;case 35669:case 35673:return S_;case 5125:return y_;case 36294:return E_;case 36295:return b_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return w_;case 35679:case 36299:case 36307:return A_;case 35680:case 36300:case 36308:case 36293:return R_;case 36289:case 36303:case 36311:case 36292:return C_}}class L_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=u_(e.type)}}class I_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=P_(e.type)}}class D_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const Ta=/(\w+)(\])?(\[|\.)?/g;function Mu(n,t){n.seq.push(t),n.map[t.id]=t}function U_(n,t,e){const i=n.name,r=i.length;for(Ta.lastIndex=0;;){const s=Ta.exec(i),o=Ta.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Mu(e,l===void 0?new L_(a,n,t):new I_(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new D_(a),Mu(e,f)),e=f}}}class so{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);U_(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Su(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const N_=37297;let F_=0;function O_(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function B_(n){const t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(n);let i;switch(t===e?i="":t===To&&e===bo?i="LinearDisplayP3ToLinearSRGB":t===bo&&e===To&&(i="LinearSRGBToLinearDisplayP3"),n){case mi:case Uo:return[i,"LinearTransferOETF"];case un:case al:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function yu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+O_(n.getShaderSource(t),o)}else return r}function z_(n,t){const e=B_(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function k_(n,t){let e;switch(t){case ip:e="Linear";break;case rp:e="Reinhard";break;case sp:e="Cineon";break;case Zh:e="ACESFilmic";break;case ap:e="AgX";break;case cp:e="Neutral";break;case op:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Os=new k;function H_(){Zt.getLuminanceCoefficients(Os);const n=Os.x.toFixed(4),t=Os.y.toFixed(4),e=Os.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vr).join(`
`)}function V_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function W_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Vr(n){return n!==""}function Eu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const X_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fc(n){return n.replace(X_,q_)}const Y_=new Map;function q_(n,t){let e=Ut[t];if(e===void 0){const i=Y_.get(t);if(i!==void 0)e=Ut[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Fc(e)}const $_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tu(n){return n.replace($_,K_)}function K_(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wu(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function j_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$h?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Kh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function Z_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Mr:case Sr:t="ENVMAP_TYPE_CUBE";break;case Do:t="ENVMAP_TYPE_CUBE_UV";break}return t}function J_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Sr:t="ENVMAP_MODE_REFRACTION";break}return t}function Q_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case jh:t="ENVMAP_BLENDING_MULTIPLY";break;case ep:t="ENVMAP_BLENDING_MIX";break;case np:t="ENVMAP_BLENDING_ADD";break}return t}function tx(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function ex(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=j_(e),l=Z_(e),u=J_(e),f=Q_(e),d=tx(e),m=G_(e),g=V_(s),x=r.createProgram();let p,h,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vr).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vr).join(`
`),h.length>0&&(h+=`
`)):(p=[wu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),h=[wu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ci?"#define TONE_MAPPING":"",e.toneMapping!==ci?Ut.tonemapping_pars_fragment:"",e.toneMapping!==ci?k_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,z_("linearToOutputTexel",e.outputColorSpace),H_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vr).join(`
`)),o=Fc(o),o=Eu(o,e),o=bu(o,e),a=Fc(a),a=Eu(a,e),a=bu(a,e),o=Tu(o),a=Tu(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",e.glslVersion===Vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=b+p+o,S=b+h+a,E=Su(r,r.VERTEX_SHADER,y),T=Su(r,r.FRAGMENT_SHADER,S);r.attachShader(x,E),r.attachShader(x,T),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function v(M){if(n.debug.checkShaderErrors){const L=r.getProgramInfoLog(x).trim(),I=r.getShaderInfoLog(E).trim(),U=r.getShaderInfoLog(T).trim();let W=!0,B=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,E,T);else{const q=yu(r,E,"vertex"),N=yu(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+L+`
`+q+`
`+N)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(I===""||U==="")&&(B=!1);B&&(M.diagnostics={runnable:W,programLog:L,vertexShader:{log:I,prefix:p},fragmentShader:{log:U,prefix:h}})}r.deleteShader(E),r.deleteShader(T),A=new so(r,x),C=W_(r,x)}let A;this.getUniforms=function(){return A===void 0&&v(this),A};let C;this.getAttributes=function(){return C===void 0&&v(this),C};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(x,N_)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=F_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=T,this}let nx=0;class ix{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new rx(t),e.set(t,i)),i}}class rx{constructor(t){this.id=nx++,this.code=t,this.usedTimes=0}}function sx(n,t,e,i,r,s,o){const a=new pd,c=new ix,l=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,m=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function h(_,M,L,I,U){const W=I.fog,B=U.geometry,q=_.isMeshStandardMaterial?I.environment:null,N=(_.isMeshStandardMaterial?e:t).get(_.envMap||q),X=N&&N.mapping===Do?N.image.height:null,nt=x[_.type];_.precision!==null&&(g=r.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const st=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,yt=st!==void 0?st.length:0;let Ft=0;B.morphAttributes.position!==void 0&&(Ft=1),B.morphAttributes.normal!==void 0&&(Ft=2),B.morphAttributes.color!==void 0&&(Ft=3);let $,Q,ht,ct;if(nt){const He=Cn[nt];$=He.vertexShader,Q=He.fragmentShader}else $=_.vertexShader,Q=_.fragmentShader,c.update(_),ht=c.getVertexShaderID(_),ct=c.getFragmentShaderID(_);const bt=n.getRenderTarget(),Et=U.isInstancedMesh===!0,Bt=U.isBatchedMesh===!0,te=!!_.map,Vt=!!_.matcap,D=!!N,je=!!_.aoMap,kt=!!_.lightMap,Xt=!!_.bumpMap,Ct=!!_.normalMap,ae=!!_.displacementMap,It=!!_.emissiveMap,P=!!_.metalnessMap,w=!!_.roughnessMap,H=_.anisotropy>0,j=_.clearcoat>0,tt=_.dispersion>0,K=_.iridescence>0,vt=_.sheen>0,at=_.transmission>0,pt=H&&!!_.anisotropyMap,Yt=j&&!!_.clearcoatMap,it=j&&!!_.clearcoatNormalMap,mt=j&&!!_.clearcoatRoughnessMap,Pt=K&&!!_.iridescenceMap,Lt=K&&!!_.iridescenceThicknessMap,gt=vt&&!!_.sheenColorMap,Ht=vt&&!!_.sheenRoughnessMap,Dt=!!_.specularMap,ie=!!_.specularColorMap,F=!!_.specularIntensityMap,dt=at&&!!_.transmissionMap,Y=at&&!!_.thicknessMap,Z=!!_.gradientMap,lt=!!_.alphaMap,ft=_.alphaTest>0,Wt=!!_.alphaHash,ge=!!_.extensions;let ke=ci;_.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(ke=n.toneMapping);const qt={shaderID:nt,shaderType:_.type,shaderName:_.name,vertexShader:$,fragmentShader:Q,defines:_.defines,customVertexShaderID:ht,customFragmentShaderID:ct,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Bt,batchingColor:Bt&&U._colorsTexture!==null,instancing:Et,instancingColor:Et&&U.instanceColor!==null,instancingMorph:Et&&U.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:bt===null?n.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:mi,alphaToCoverage:!!_.alphaToCoverage,map:te,matcap:Vt,envMap:D,envMapMode:D&&N.mapping,envMapCubeUVHeight:X,aoMap:je,lightMap:kt,bumpMap:Xt,normalMap:Ct,displacementMap:m&&ae,emissiveMap:It,normalMapObjectSpace:Ct&&_.normalMapType===hp,normalMapTangentSpace:Ct&&_.normalMapType===ld,metalnessMap:P,roughnessMap:w,anisotropy:H,anisotropyMap:pt,clearcoat:j,clearcoatMap:Yt,clearcoatNormalMap:it,clearcoatRoughnessMap:mt,dispersion:tt,iridescence:K,iridescenceMap:Pt,iridescenceThicknessMap:Lt,sheen:vt,sheenColorMap:gt,sheenRoughnessMap:Ht,specularMap:Dt,specularColorMap:ie,specularIntensityMap:F,transmission:at,transmissionMap:dt,thicknessMap:Y,gradientMap:Z,opaque:_.transparent===!1&&_.blending===pr&&_.alphaToCoverage===!1,alphaMap:lt,alphaTest:ft,alphaHash:Wt,combine:_.combine,mapUv:te&&p(_.map.channel),aoMapUv:je&&p(_.aoMap.channel),lightMapUv:kt&&p(_.lightMap.channel),bumpMapUv:Xt&&p(_.bumpMap.channel),normalMapUv:Ct&&p(_.normalMap.channel),displacementMapUv:ae&&p(_.displacementMap.channel),emissiveMapUv:It&&p(_.emissiveMap.channel),metalnessMapUv:P&&p(_.metalnessMap.channel),roughnessMapUv:w&&p(_.roughnessMap.channel),anisotropyMapUv:pt&&p(_.anisotropyMap.channel),clearcoatMapUv:Yt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:it&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&p(_.sheenRoughnessMap.channel),specularMapUv:Dt&&p(_.specularMap.channel),specularColorMapUv:ie&&p(_.specularColorMap.channel),specularIntensityMapUv:F&&p(_.specularIntensityMap.channel),transmissionMapUv:dt&&p(_.transmissionMap.channel),thicknessMapUv:Y&&p(_.thicknessMap.channel),alphaMapUv:lt&&p(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ct||H),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(te||lt),fog:!!W,useFog:_.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Ft,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:ke,decodeVideoTexture:te&&_.map.isVideoTexture===!0&&Zt.getTransfer(_.map.colorSpace)===le,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===he,flipSided:_.side===Fe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ge&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&_.extensions.multiDraw===!0||Bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return qt.vertexUv1s=l.has(1),qt.vertexUv2s=l.has(2),qt.vertexUv3s=l.has(3),l.clear(),qt}function b(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)M.push(L),M.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(y(M,_),S(M,_),M.push(n.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function y(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function S(_,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),_.push(a.mask)}function E(_){const M=x[_.type];let L;if(M){const I=Cn[M];L=Gp.clone(I.uniforms)}else L=_.uniforms;return L}function T(_,M){let L;for(let I=0,U=u.length;I<U;I++){const W=u[I];if(W.cacheKey===M){L=W,++L.usedTimes;break}}return L===void 0&&(L=new ex(n,M,_,s),u.push(L)),L}function v(_){if(--_.usedTimes===0){const M=u.indexOf(_);u[M]=u[u.length-1],u.pop(),_.destroy()}}function A(_){c.remove(_)}function C(){c.dispose()}return{getParameters:h,getProgramCacheKey:b,getUniforms:E,acquireProgram:T,releaseProgram:v,releaseShaderCache:A,programs:u,dispose:C}}function ox(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function ax(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Au(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ru(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(f,d,m,g,x,p){let h=n[t];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:x,group:p},n[t]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=x,h.group=p),t++,h}function a(f,d,m,g,x,p){const h=o(f,d,m,g,x,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):e.push(h)}function c(f,d,m,g,x,p){const h=o(f,d,m,g,x,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):e.unshift(h)}function l(f,d){e.length>1&&e.sort(f||ax),i.length>1&&i.sort(d||Au),r.length>1&&r.sort(d||Au)}function u(){for(let f=t,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function cx(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Ru,n.set(i,[o])):r>=s.length?(o=new Ru,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function lx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new J};break;case"SpotLight":e={position:new k,direction:new k,color:new J,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new J,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new J,groundColor:new J};break;case"RectAreaLight":e={color:new J,position:new k,halfWidth:new k,halfHeight:new k};break}return n[t.id]=e,e}}}function ux(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let hx=0;function dx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function fx(n){const t=new lx,e=ux(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new k);const r=new k,s=new Qt,o=new Qt;function a(l){let u=0,f=0,d=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let m=0,g=0,x=0,p=0,h=0,b=0,y=0,S=0,E=0,T=0,v=0;l.sort(dx);for(let C=0,_=l.length;C<_;C++){const M=l[C],L=M.color,I=M.intensity,U=M.distance,W=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)u+=L.r*I,f+=L.g*I,d+=L.b*I;else if(M.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(M.sh.coefficients[B],I);v++}else if(M.isDirectionalLight){const B=t.get(M);if(B.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const q=M.shadow,N=e.get(M);N.shadowIntensity=q.intensity,N.shadowBias=q.bias,N.shadowNormalBias=q.normalBias,N.shadowRadius=q.radius,N.shadowMapSize=q.mapSize,i.directionalShadow[m]=N,i.directionalShadowMap[m]=W,i.directionalShadowMatrix[m]=M.shadow.matrix,b++}i.directional[m]=B,m++}else if(M.isSpotLight){const B=t.get(M);B.position.setFromMatrixPosition(M.matrixWorld),B.color.copy(L).multiplyScalar(I),B.distance=U,B.coneCos=Math.cos(M.angle),B.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),B.decay=M.decay,i.spot[x]=B;const q=M.shadow;if(M.map&&(i.spotLightMap[E]=M.map,E++,q.updateMatrices(M),M.castShadow&&T++),i.spotLightMatrix[x]=q.matrix,M.castShadow){const N=e.get(M);N.shadowIntensity=q.intensity,N.shadowBias=q.bias,N.shadowNormalBias=q.normalBias,N.shadowRadius=q.radius,N.shadowMapSize=q.mapSize,i.spotShadow[x]=N,i.spotShadowMap[x]=W,S++}x++}else if(M.isRectAreaLight){const B=t.get(M);B.color.copy(L).multiplyScalar(I),B.halfWidth.set(M.width*.5,0,0),B.halfHeight.set(0,M.height*.5,0),i.rectArea[p]=B,p++}else if(M.isPointLight){const B=t.get(M);if(B.color.copy(M.color).multiplyScalar(M.intensity),B.distance=M.distance,B.decay=M.decay,M.castShadow){const q=M.shadow,N=e.get(M);N.shadowIntensity=q.intensity,N.shadowBias=q.bias,N.shadowNormalBias=q.normalBias,N.shadowRadius=q.radius,N.shadowMapSize=q.mapSize,N.shadowCameraNear=q.camera.near,N.shadowCameraFar=q.camera.far,i.pointShadow[g]=N,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=M.shadow.matrix,y++}i.point[g]=B,g++}else if(M.isHemisphereLight){const B=t.get(M);B.skyColor.copy(M.color).multiplyScalar(I),B.groundColor.copy(M.groundColor).multiplyScalar(I),i.hemi[h]=B,h++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const A=i.hash;(A.directionalLength!==m||A.pointLength!==g||A.spotLength!==x||A.rectAreaLength!==p||A.hemiLength!==h||A.numDirectionalShadows!==b||A.numPointShadows!==y||A.numSpotShadows!==S||A.numSpotMaps!==E||A.numLightProbes!==v)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=S+E-T,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=v,A.directionalLength=m,A.pointLength=g,A.spotLength=x,A.rectAreaLength=p,A.hemiLength=h,A.numDirectionalShadows=b,A.numPointShadows=y,A.numSpotShadows=S,A.numSpotMaps=E,A.numLightProbes=v,i.version=hx++)}function c(l,u){let f=0,d=0,m=0,g=0,x=0;const p=u.matrixWorldInverse;for(let h=0,b=l.length;h<b;h++){const y=l[h];if(y.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),f++}else if(y.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(y.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),x++}}}return{setup:a,setupView:c,state:i}}function Cu(n){const t=new fx(n),e=[],i=[];function r(u){l.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function px(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Cu(n),t.set(r,[a])):s>=o.length?(a=new Cu(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class Rd extends is{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=up,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class mx extends is{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const gx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_x=`uniform sampler2D shadow_pass;
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
}`;function xx(n,t,e){let i=new cl;const r=new $t,s=new $t,o=new de,a=new Rd({depthPacking:cd}),c=new mx,l={},u=e.maxTextureSize,f={[fi]:Fe,[Fe]:fi,[he]:he},d=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:gx,fragmentShader:_x}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new mn;g.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new zt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$h;let h=this.type;this.render=function(T,v,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const C=n.getRenderTarget(),_=n.getActiveCubeFace(),M=n.getActiveMipmapLevel(),L=n.state;L.setBlending(ai),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const I=h!==kn&&this.type===kn,U=h===kn&&this.type!==kn;for(let W=0,B=T.length;W<B;W++){const q=T[W],N=q.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const X=N.getFrameExtents();if(r.multiply(X),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/X.x),r.x=s.x*X.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/X.y),r.y=s.y*X.y,N.mapSize.y=s.y)),N.map===null||I===!0||U===!0){const st=this.type!==kn?{minFilter:qe,magFilter:qe}:{};N.map!==null&&N.map.dispose(),N.map=new ki(r.x,r.y,st),N.map.texture.name=q.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const nt=N.getViewportCount();for(let st=0;st<nt;st++){const yt=N.getViewport(st);o.set(s.x*yt.x,s.y*yt.y,s.x*yt.z,s.y*yt.w),L.viewport(o),N.updateMatrices(q,st),i=N.getFrustum(),S(v,A,N.camera,q,this.type)}N.isPointLightShadow!==!0&&this.type===kn&&b(N,A),N.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(C,_,M)};function b(T,v){const A=t.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ki(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(v,null,A,d,x,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(v,null,A,m,x,null)}function y(T,v,A,C){let _=null;const M=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(M!==void 0)_=M;else if(_=A.isPointLight===!0?c:a,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){const L=_.uuid,I=v.uuid;let U=l[L];U===void 0&&(U={},l[L]=U);let W=U[I];W===void 0&&(W=_.clone(),U[I]=W,v.addEventListener("dispose",E)),_=W}if(_.visible=v.visible,_.wireframe=v.wireframe,C===kn?_.side=v.shadowSide!==null?v.shadowSide:v.side:_.side=v.shadowSide!==null?v.shadowSide:f[v.side],_.alphaMap=v.alphaMap,_.alphaTest=v.alphaTest,_.map=v.map,_.clipShadows=v.clipShadows,_.clippingPlanes=v.clippingPlanes,_.clipIntersection=v.clipIntersection,_.displacementMap=v.displacementMap,_.displacementScale=v.displacementScale,_.displacementBias=v.displacementBias,_.wireframeLinewidth=v.wireframeLinewidth,_.linewidth=v.linewidth,A.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const L=n.properties.get(_);L.light=A}return _}function S(T,v,A,C,_){if(T.visible===!1)return;if(T.layers.test(v.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===kn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);const I=t.update(T),U=T.material;if(Array.isArray(U)){const W=I.groups;for(let B=0,q=W.length;B<q;B++){const N=W[B],X=U[N.materialIndex];if(X&&X.visible){const nt=y(T,X,C,_);T.onBeforeShadow(n,T,v,A,I,nt,N),n.renderBufferDirect(A,null,I,nt,T,N),T.onAfterShadow(n,T,v,A,I,nt,N)}}}else if(U.visible){const W=y(T,U,C,_);T.onBeforeShadow(n,T,v,A,I,W,null),n.renderBufferDirect(A,null,I,W,T,null),T.onAfterShadow(n,T,v,A,I,W,null)}}const L=T.children;for(let I=0,U=L.length;I<U;I++)S(L[I],v,A,C,_)}function E(T){T.target.removeEventListener("dispose",E);for(const A in l){const C=l[A],_=T.target.uuid;_ in C&&(C[_].dispose(),delete C[_])}}}const vx={[Qa]:tc,[ec]:rc,[nc]:sc,[vr]:ic,[tc]:Qa,[rc]:ec,[sc]:nc,[ic]:vr};function Mx(n){function t(){let F=!1;const dt=new de;let Y=null;const Z=new de(0,0,0,0);return{setMask:function(lt){Y!==lt&&!F&&(n.colorMask(lt,lt,lt,lt),Y=lt)},setLocked:function(lt){F=lt},setClear:function(lt,ft,Wt,ge,ke){ke===!0&&(lt*=ge,ft*=ge,Wt*=ge),dt.set(lt,ft,Wt,ge),Z.equals(dt)===!1&&(n.clearColor(lt,ft,Wt,ge),Z.copy(dt))},reset:function(){F=!1,Y=null,Z.set(-1,0,0,0)}}}function e(){let F=!1,dt=!1,Y=null,Z=null,lt=null;return{setReversed:function(ft){dt=ft},setTest:function(ft){ft?ht(n.DEPTH_TEST):ct(n.DEPTH_TEST)},setMask:function(ft){Y!==ft&&!F&&(n.depthMask(ft),Y=ft)},setFunc:function(ft){if(dt&&(ft=vx[ft]),Z!==ft){switch(ft){case Qa:n.depthFunc(n.NEVER);break;case tc:n.depthFunc(n.ALWAYS);break;case ec:n.depthFunc(n.LESS);break;case vr:n.depthFunc(n.LEQUAL);break;case nc:n.depthFunc(n.EQUAL);break;case ic:n.depthFunc(n.GEQUAL);break;case rc:n.depthFunc(n.GREATER);break;case sc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=ft}},setLocked:function(ft){F=ft},setClear:function(ft){lt!==ft&&(n.clearDepth(ft),lt=ft)},reset:function(){F=!1,Y=null,Z=null,lt=null}}}function i(){let F=!1,dt=null,Y=null,Z=null,lt=null,ft=null,Wt=null,ge=null,ke=null;return{setTest:function(qt){F||(qt?ht(n.STENCIL_TEST):ct(n.STENCIL_TEST))},setMask:function(qt){dt!==qt&&!F&&(n.stencilMask(qt),dt=qt)},setFunc:function(qt,He,Un){(Y!==qt||Z!==He||lt!==Un)&&(n.stencilFunc(qt,He,Un),Y=qt,Z=He,lt=Un)},setOp:function(qt,He,Un){(ft!==qt||Wt!==He||ge!==Un)&&(n.stencilOp(qt,He,Un),ft=qt,Wt=He,ge=Un)},setLocked:function(qt){F=qt},setClear:function(qt){ke!==qt&&(n.clearStencil(qt),ke=qt)},reset:function(){F=!1,dt=null,Y=null,Z=null,lt=null,ft=null,Wt=null,ge=null,ke=null}}}const r=new t,s=new e,o=new i,a=new WeakMap,c=new WeakMap;let l={},u={},f=new WeakMap,d=[],m=null,g=!1,x=null,p=null,h=null,b=null,y=null,S=null,E=null,T=new J(0,0,0),v=0,A=!1,C=null,_=null,M=null,L=null,I=null;const U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,B=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=B>=1):q.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=B>=2);let N=null,X={};const nt=n.getParameter(n.SCISSOR_BOX),st=n.getParameter(n.VIEWPORT),yt=new de().fromArray(nt),Ft=new de().fromArray(st);function $(F,dt,Y,Z){const lt=new Uint8Array(4),ft=n.createTexture();n.bindTexture(F,ft),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Wt=0;Wt<Y;Wt++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(dt,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,lt):n.texImage2D(dt+Wt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,lt);return ft}const Q={};Q[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ht(n.DEPTH_TEST),s.setFunc(vr),kt(!1),Xt(Bl),ht(n.CULL_FACE),D(ai);function ht(F){l[F]!==!0&&(n.enable(F),l[F]=!0)}function ct(F){l[F]!==!1&&(n.disable(F),l[F]=!1)}function bt(F,dt){return u[F]!==dt?(n.bindFramebuffer(F,dt),u[F]=dt,F===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=dt),F===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=dt),!0):!1}function Et(F,dt){let Y=d,Z=!1;if(F){Y=f.get(dt),Y===void 0&&(Y=[],f.set(dt,Y));const lt=F.textures;if(Y.length!==lt.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let ft=0,Wt=lt.length;ft<Wt;ft++)Y[ft]=n.COLOR_ATTACHMENT0+ft;Y.length=lt.length,Z=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,Z=!0);Z&&n.drawBuffers(Y)}function Bt(F){return m!==F?(n.useProgram(F),m=F,!0):!1}const te={[Ci]:n.FUNC_ADD,[Bf]:n.FUNC_SUBTRACT,[zf]:n.FUNC_REVERSE_SUBTRACT};te[kf]=n.MIN,te[Hf]=n.MAX;const Vt={[Gf]:n.ZERO,[Vf]:n.ONE,[Wf]:n.SRC_COLOR,[Za]:n.SRC_ALPHA,[jf]:n.SRC_ALPHA_SATURATE,[$f]:n.DST_COLOR,[Yf]:n.DST_ALPHA,[Xf]:n.ONE_MINUS_SRC_COLOR,[Ja]:n.ONE_MINUS_SRC_ALPHA,[Kf]:n.ONE_MINUS_DST_COLOR,[qf]:n.ONE_MINUS_DST_ALPHA,[Zf]:n.CONSTANT_COLOR,[Jf]:n.ONE_MINUS_CONSTANT_COLOR,[Qf]:n.CONSTANT_ALPHA,[tp]:n.ONE_MINUS_CONSTANT_ALPHA};function D(F,dt,Y,Z,lt,ft,Wt,ge,ke,qt){if(F===ai){g===!0&&(ct(n.BLEND),g=!1);return}if(g===!1&&(ht(n.BLEND),g=!0),F!==Of){if(F!==x||qt!==A){if((p!==Ci||y!==Ci)&&(n.blendEquation(n.FUNC_ADD),p=Ci,y=Ci),qt)switch(F){case pr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ja:n.blendFunc(n.ONE,n.ONE);break;case zl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case pr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ja:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case zl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}h=null,b=null,S=null,E=null,T.set(0,0,0),v=0,x=F,A=qt}return}lt=lt||dt,ft=ft||Y,Wt=Wt||Z,(dt!==p||lt!==y)&&(n.blendEquationSeparate(te[dt],te[lt]),p=dt,y=lt),(Y!==h||Z!==b||ft!==S||Wt!==E)&&(n.blendFuncSeparate(Vt[Y],Vt[Z],Vt[ft],Vt[Wt]),h=Y,b=Z,S=ft,E=Wt),(ge.equals(T)===!1||ke!==v)&&(n.blendColor(ge.r,ge.g,ge.b,ke),T.copy(ge),v=ke),x=F,A=!1}function je(F,dt){F.side===he?ct(n.CULL_FACE):ht(n.CULL_FACE);let Y=F.side===Fe;dt&&(Y=!Y),kt(Y),F.blending===pr&&F.transparent===!1?D(ai):D(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),r.setMask(F.colorWrite);const Z=F.stencilWrite;o.setTest(Z),Z&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ae(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ht(n.SAMPLE_ALPHA_TO_COVERAGE):ct(n.SAMPLE_ALPHA_TO_COVERAGE)}function kt(F){C!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),C=F)}function Xt(F){F!==Nf?(ht(n.CULL_FACE),F!==_&&(F===Bl?n.cullFace(n.BACK):F===Ff?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ct(n.CULL_FACE),_=F}function Ct(F){F!==M&&(W&&n.lineWidth(F),M=F)}function ae(F,dt,Y){F?(ht(n.POLYGON_OFFSET_FILL),(L!==dt||I!==Y)&&(n.polygonOffset(dt,Y),L=dt,I=Y)):ct(n.POLYGON_OFFSET_FILL)}function It(F){F?ht(n.SCISSOR_TEST):ct(n.SCISSOR_TEST)}function P(F){F===void 0&&(F=n.TEXTURE0+U-1),N!==F&&(n.activeTexture(F),N=F)}function w(F,dt,Y){Y===void 0&&(N===null?Y=n.TEXTURE0+U-1:Y=N);let Z=X[Y];Z===void 0&&(Z={type:void 0,texture:void 0},X[Y]=Z),(Z.type!==F||Z.texture!==dt)&&(N!==Y&&(n.activeTexture(Y),N=Y),n.bindTexture(F,dt||Q[F]),Z.type=F,Z.texture=dt)}function H(){const F=X[N];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function tt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function vt(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function at(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Yt(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function mt(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pt(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Lt(F){yt.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),yt.copy(F))}function gt(F){Ft.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Ft.copy(F))}function Ht(F,dt){let Y=c.get(dt);Y===void 0&&(Y=new WeakMap,c.set(dt,Y));let Z=Y.get(F);Z===void 0&&(Z=n.getUniformBlockIndex(dt,F.name),Y.set(F,Z))}function Dt(F,dt){const Z=c.get(dt).get(F);a.get(dt)!==Z&&(n.uniformBlockBinding(dt,Z,F.__bindingPointIndex),a.set(dt,Z))}function ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},N=null,X={},u={},f=new WeakMap,d=[],m=null,g=!1,x=null,p=null,h=null,b=null,y=null,S=null,E=null,T=new J(0,0,0),v=0,A=!1,C=null,_=null,M=null,L=null,I=null,yt.set(0,0,n.canvas.width,n.canvas.height),Ft.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ht,disable:ct,bindFramebuffer:bt,drawBuffers:Et,useProgram:Bt,setBlending:D,setMaterial:je,setFlipSided:kt,setCullFace:Xt,setLineWidth:Ct,setPolygonOffset:ae,setScissorTest:It,activeTexture:P,bindTexture:w,unbindTexture:H,compressedTexImage2D:j,compressedTexImage3D:tt,texImage2D:mt,texImage3D:Pt,updateUBOMapping:Ht,uniformBlockBinding:Dt,texStorage2D:Yt,texStorage3D:it,texSubImage2D:K,texSubImage3D:vt,compressedTexSubImage2D:at,compressedTexSubImage3D:pt,scissor:Lt,viewport:gt,reset:ie}}function Pu(n,t,e,i){const r=Sx(i);switch(e){case nd:return n*t;case rd:return n*t;case sd:return n*t*2;case il:return n*t/r.components*r.byteLength;case rl:return n*t/r.components*r.byteLength;case od:return n*t*2/r.components*r.byteLength;case sl:return n*t*2/r.components*r.byteLength;case id:return n*t*3/r.components*r.byteLength;case bn:return n*t*4/r.components*r.byteLength;case ol:return n*t*4/r.components*r.byteLength;case Qs:case to:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case eo:case no:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case uc:case dc:return Math.max(n,16)*Math.max(t,8)/4;case lc:case hc:return Math.max(n,8)*Math.max(t,8)/2;case fc:case pc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case mc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case gc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _c:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case xc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case vc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Mc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Sc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case yc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ec:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case bc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case wc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ac:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Rc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Cc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case io:case Pc:case Lc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ad:case Ic:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Dc:case Uc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sx(n){switch(n){case Xn:case Qh:return{byteLength:1,components:1};case Jr:case td:case es:return{byteLength:2,components:1};case el:case nl:return{byteLength:2,components:4};case zi:case tl:case Dn:return{byteLength:4,components:1};case ed:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function yx(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $t,u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,w){return m?new OffscreenCanvas(P,w):Qr("canvas")}function x(P,w,H){let j=1;const tt=It(P);if((tt.width>H||tt.height>H)&&(j=H/Math.max(tt.width,tt.height)),j<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const K=Math.floor(j*tt.width),vt=Math.floor(j*tt.height);f===void 0&&(f=g(K,vt));const at=w?g(K,vt):f;return at.width=K,at.height=vt,at.getContext("2d").drawImage(P,0,0,K,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+K+"x"+vt+")."),at}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),P;return P}function p(P){return P.generateMipmaps&&P.minFilter!==qe&&P.minFilter!==yn}function h(P){n.generateMipmap(P)}function b(P,w,H,j,tt=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let K=w;if(w===n.RED&&(H===n.FLOAT&&(K=n.R32F),H===n.HALF_FLOAT&&(K=n.R16F),H===n.UNSIGNED_BYTE&&(K=n.R8)),w===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.R8UI),H===n.UNSIGNED_SHORT&&(K=n.R16UI),H===n.UNSIGNED_INT&&(K=n.R32UI),H===n.BYTE&&(K=n.R8I),H===n.SHORT&&(K=n.R16I),H===n.INT&&(K=n.R32I)),w===n.RG&&(H===n.FLOAT&&(K=n.RG32F),H===n.HALF_FLOAT&&(K=n.RG16F),H===n.UNSIGNED_BYTE&&(K=n.RG8)),w===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RG8UI),H===n.UNSIGNED_SHORT&&(K=n.RG16UI),H===n.UNSIGNED_INT&&(K=n.RG32UI),H===n.BYTE&&(K=n.RG8I),H===n.SHORT&&(K=n.RG16I),H===n.INT&&(K=n.RG32I)),w===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RGB8UI),H===n.UNSIGNED_SHORT&&(K=n.RGB16UI),H===n.UNSIGNED_INT&&(K=n.RGB32UI),H===n.BYTE&&(K=n.RGB8I),H===n.SHORT&&(K=n.RGB16I),H===n.INT&&(K=n.RGB32I)),w===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),H===n.UNSIGNED_INT&&(K=n.RGBA32UI),H===n.BYTE&&(K=n.RGBA8I),H===n.SHORT&&(K=n.RGBA16I),H===n.INT&&(K=n.RGBA32I)),w===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),w===n.RGBA){const vt=tt?Eo:Zt.getTransfer(j);H===n.FLOAT&&(K=n.RGBA32F),H===n.HALF_FLOAT&&(K=n.RGBA16F),H===n.UNSIGNED_BYTE&&(K=vt===le?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function y(P,w){let H;return P?w===null||w===zi||w===yr?H=n.DEPTH24_STENCIL8:w===Dn?H=n.DEPTH32F_STENCIL8:w===Jr&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===zi||w===yr?H=n.DEPTH_COMPONENT24:w===Dn?H=n.DEPTH_COMPONENT32F:w===Jr&&(H=n.DEPTH_COMPONENT16),H}function S(P,w){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==qe&&P.minFilter!==yn?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function E(P){const w=P.target;w.removeEventListener("dispose",E),v(w),w.isVideoTexture&&u.delete(w)}function T(P){const w=P.target;w.removeEventListener("dispose",T),C(w)}function v(P){const w=i.get(P);if(w.__webglInit===void 0)return;const H=P.source,j=d.get(H);if(j){const tt=j[w.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&A(P),Object.keys(j).length===0&&d.delete(H)}i.remove(P)}function A(P){const w=i.get(P);n.deleteTexture(w.__webglTexture);const H=P.source,j=d.get(H);delete j[w.__cacheKey],o.memory.textures--}function C(P){const w=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(w.__webglFramebuffer[j]))for(let tt=0;tt<w.__webglFramebuffer[j].length;tt++)n.deleteFramebuffer(w.__webglFramebuffer[j][tt]);else n.deleteFramebuffer(w.__webglFramebuffer[j]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[j])}else{if(Array.isArray(w.__webglFramebuffer))for(let j=0;j<w.__webglFramebuffer.length;j++)n.deleteFramebuffer(w.__webglFramebuffer[j]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let j=0;j<w.__webglColorRenderbuffer.length;j++)w.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[j]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const H=P.textures;for(let j=0,tt=H.length;j<tt;j++){const K=i.get(H[j]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(H[j])}i.remove(P)}let _=0;function M(){_=0}function L(){const P=_;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),_+=1,P}function I(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function U(P,w){const H=i.get(P);if(P.isVideoTexture&&Ct(P),P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){const j=P.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ft(H,P,w);return}}e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+w)}function W(P,w){const H=i.get(P);if(P.version>0&&H.__version!==P.version){Ft(H,P,w);return}e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+w)}function B(P,w){const H=i.get(P);if(P.version>0&&H.__version!==P.version){Ft(H,P,w);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+w)}function q(P,w){const H=i.get(P);if(P.version>0&&H.__version!==P.version){$(H,P,w);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+w)}const N={[yo]:n.REPEAT,[Di]:n.CLAMP_TO_EDGE,[cc]:n.MIRRORED_REPEAT},X={[qe]:n.NEAREST,[lp]:n.NEAREST_MIPMAP_NEAREST,[_s]:n.NEAREST_MIPMAP_LINEAR,[yn]:n.LINEAR,[jo]:n.LINEAR_MIPMAP_NEAREST,[Ui]:n.LINEAR_MIPMAP_LINEAR},nt={[dp]:n.NEVER,[xp]:n.ALWAYS,[fp]:n.LESS,[ud]:n.LEQUAL,[pp]:n.EQUAL,[_p]:n.GEQUAL,[mp]:n.GREATER,[gp]:n.NOTEQUAL};function st(P,w){if(w.type===Dn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===yn||w.magFilter===jo||w.magFilter===_s||w.magFilter===Ui||w.minFilter===yn||w.minFilter===jo||w.minFilter===_s||w.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,N[w.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,N[w.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,N[w.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,X[w.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,X[w.minFilter]),w.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,nt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===qe||w.minFilter!==_s&&w.minFilter!==Ui||w.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function yt(P,w){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",E));const j=w.source;let tt=d.get(j);tt===void 0&&(tt={},d.set(j,tt));const K=I(w);if(K!==P.__cacheKey){tt[K]===void 0&&(tt[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),tt[K].usedTimes++;const vt=tt[P.__cacheKey];vt!==void 0&&(tt[P.__cacheKey].usedTimes--,vt.usedTimes===0&&A(w)),P.__cacheKey=K,P.__webglTexture=tt[K].texture}return H}function Ft(P,w,H){let j=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(j=n.TEXTURE_3D);const tt=yt(P,w),K=w.source;e.bindTexture(j,P.__webglTexture,n.TEXTURE0+H);const vt=i.get(K);if(K.version!==vt.__version||tt===!0){e.activeTexture(n.TEXTURE0+H);const at=Zt.getPrimaries(Zt.workingColorSpace),pt=w.colorSpace===oi?null:Zt.getPrimaries(w.colorSpace),Yt=w.colorSpace===oi||at===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let it=x(w.image,!1,r.maxTextureSize);it=ae(w,it);const mt=s.convert(w.format,w.colorSpace),Pt=s.convert(w.type);let Lt=b(w.internalFormat,mt,Pt,w.colorSpace,w.isVideoTexture);st(j,w);let gt;const Ht=w.mipmaps,Dt=w.isVideoTexture!==!0,ie=vt.__version===void 0||tt===!0,F=K.dataReady,dt=S(w,it);if(w.isDepthTexture)Lt=y(w.format===Er,w.type),ie&&(Dt?e.texStorage2D(n.TEXTURE_2D,1,Lt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,Lt,it.width,it.height,0,mt,Pt,null));else if(w.isDataTexture)if(Ht.length>0){Dt&&ie&&e.texStorage2D(n.TEXTURE_2D,dt,Lt,Ht[0].width,Ht[0].height);for(let Y=0,Z=Ht.length;Y<Z;Y++)gt=Ht[Y],Dt?F&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,gt.width,gt.height,mt,Pt,gt.data):e.texImage2D(n.TEXTURE_2D,Y,Lt,gt.width,gt.height,0,mt,Pt,gt.data);w.generateMipmaps=!1}else Dt?(ie&&e.texStorage2D(n.TEXTURE_2D,dt,Lt,it.width,it.height),F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,it.width,it.height,mt,Pt,it.data)):e.texImage2D(n.TEXTURE_2D,0,Lt,it.width,it.height,0,mt,Pt,it.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Dt&&ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,Lt,Ht[0].width,Ht[0].height,it.depth);for(let Y=0,Z=Ht.length;Y<Z;Y++)if(gt=Ht[Y],w.format!==bn)if(mt!==null)if(Dt){if(F)if(w.layerUpdates.size>0){const lt=Pu(gt.width,gt.height,w.format,w.type);for(const ft of w.layerUpdates){const Wt=gt.data.subarray(ft*lt/gt.data.BYTES_PER_ELEMENT,(ft+1)*lt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,ft,gt.width,gt.height,1,mt,Wt,0,0)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,gt.width,gt.height,it.depth,mt,gt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,Lt,gt.width,gt.height,it.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?F&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,gt.width,gt.height,it.depth,mt,Pt,gt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Y,Lt,gt.width,gt.height,it.depth,0,mt,Pt,gt.data)}else{Dt&&ie&&e.texStorage2D(n.TEXTURE_2D,dt,Lt,Ht[0].width,Ht[0].height);for(let Y=0,Z=Ht.length;Y<Z;Y++)gt=Ht[Y],w.format!==bn?mt!==null?Dt?F&&e.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(n.TEXTURE_2D,Y,Lt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?F&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,gt.width,gt.height,mt,Pt,gt.data):e.texImage2D(n.TEXTURE_2D,Y,Lt,gt.width,gt.height,0,mt,Pt,gt.data)}else if(w.isDataArrayTexture)if(Dt){if(ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,Lt,it.width,it.height,it.depth),F)if(w.layerUpdates.size>0){const Y=Pu(it.width,it.height,w.format,w.type);for(const Z of w.layerUpdates){const lt=it.data.subarray(Z*Y/it.data.BYTES_PER_ELEMENT,(Z+1)*Y/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,it.width,it.height,1,mt,Pt,lt)}w.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,mt,Pt,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Lt,it.width,it.height,it.depth,0,mt,Pt,it.data);else if(w.isData3DTexture)Dt?(ie&&e.texStorage3D(n.TEXTURE_3D,dt,Lt,it.width,it.height,it.depth),F&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,mt,Pt,it.data)):e.texImage3D(n.TEXTURE_3D,0,Lt,it.width,it.height,it.depth,0,mt,Pt,it.data);else if(w.isFramebufferTexture){if(ie)if(Dt)e.texStorage2D(n.TEXTURE_2D,dt,Lt,it.width,it.height);else{let Y=it.width,Z=it.height;for(let lt=0;lt<dt;lt++)e.texImage2D(n.TEXTURE_2D,lt,Lt,Y,Z,0,mt,Pt,null),Y>>=1,Z>>=1}}else if(Ht.length>0){if(Dt&&ie){const Y=It(Ht[0]);e.texStorage2D(n.TEXTURE_2D,dt,Lt,Y.width,Y.height)}for(let Y=0,Z=Ht.length;Y<Z;Y++)gt=Ht[Y],Dt?F&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,mt,Pt,gt):e.texImage2D(n.TEXTURE_2D,Y,Lt,mt,Pt,gt);w.generateMipmaps=!1}else if(Dt){if(ie){const Y=It(it);e.texStorage2D(n.TEXTURE_2D,dt,Lt,Y.width,Y.height)}F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,mt,Pt,it)}else e.texImage2D(n.TEXTURE_2D,0,Lt,mt,Pt,it);p(w)&&h(j),vt.__version=K.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function $(P,w,H){if(w.image.length!==6)return;const j=yt(P,w),tt=w.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+H);const K=i.get(tt);if(tt.version!==K.__version||j===!0){e.activeTexture(n.TEXTURE0+H);const vt=Zt.getPrimaries(Zt.workingColorSpace),at=w.colorSpace===oi?null:Zt.getPrimaries(w.colorSpace),pt=w.colorSpace===oi||vt===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Yt=w.isCompressedTexture||w.image[0].isCompressedTexture,it=w.image[0]&&w.image[0].isDataTexture,mt=[];for(let Z=0;Z<6;Z++)!Yt&&!it?mt[Z]=x(w.image[Z],!0,r.maxCubemapSize):mt[Z]=it?w.image[Z].image:w.image[Z],mt[Z]=ae(w,mt[Z]);const Pt=mt[0],Lt=s.convert(w.format,w.colorSpace),gt=s.convert(w.type),Ht=b(w.internalFormat,Lt,gt,w.colorSpace),Dt=w.isVideoTexture!==!0,ie=K.__version===void 0||j===!0,F=tt.dataReady;let dt=S(w,Pt);st(n.TEXTURE_CUBE_MAP,w);let Y;if(Yt){Dt&&ie&&e.texStorage2D(n.TEXTURE_CUBE_MAP,dt,Ht,Pt.width,Pt.height);for(let Z=0;Z<6;Z++){Y=mt[Z].mipmaps;for(let lt=0;lt<Y.length;lt++){const ft=Y[lt];w.format!==bn?Lt!==null?Dt?F&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,ft.width,ft.height,Lt,ft.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,Ht,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,ft.width,ft.height,Lt,gt,ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,Ht,ft.width,ft.height,0,Lt,gt,ft.data)}}}else{if(Y=w.mipmaps,Dt&&ie){Y.length>0&&dt++;const Z=It(mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,dt,Ht,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(it){Dt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,mt[Z].width,mt[Z].height,Lt,gt,mt[Z].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ht,mt[Z].width,mt[Z].height,0,Lt,gt,mt[Z].data);for(let lt=0;lt<Y.length;lt++){const Wt=Y[lt].image[Z].image;Dt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,Wt.width,Wt.height,Lt,gt,Wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,Ht,Wt.width,Wt.height,0,Lt,gt,Wt.data)}}else{Dt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Lt,gt,mt[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ht,Lt,gt,mt[Z]);for(let lt=0;lt<Y.length;lt++){const ft=Y[lt];Dt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,Lt,gt,ft.image[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,Ht,Lt,gt,ft.image[Z])}}}p(w)&&h(n.TEXTURE_CUBE_MAP),K.__version=tt.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Q(P,w,H,j,tt,K){const vt=s.convert(H.format,H.colorSpace),at=s.convert(H.type),pt=b(H.internalFormat,vt,at,H.colorSpace);if(!i.get(w).__hasExternalTextures){const it=Math.max(1,w.width>>K),mt=Math.max(1,w.height>>K);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,K,pt,it,mt,w.depth,0,vt,at,null):e.texImage2D(tt,K,pt,it,mt,0,vt,at,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),Xt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,tt,i.get(H).__webglTexture,0,kt(w)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,tt,i.get(H).__webglTexture,K),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ht(P,w,H){if(n.bindRenderbuffer(n.RENDERBUFFER,P),w.depthBuffer){const j=w.depthTexture,tt=j&&j.isDepthTexture?j.type:null,K=y(w.stencilBuffer,tt),vt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=kt(w);Xt(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at,K,w.width,w.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,at,K,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,K,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,vt,n.RENDERBUFFER,P)}else{const j=w.textures;for(let tt=0;tt<j.length;tt++){const K=j[tt],vt=s.convert(K.format,K.colorSpace),at=s.convert(K.type),pt=b(K.internalFormat,vt,at,K.colorSpace),Yt=kt(w);H&&Xt(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Yt,pt,w.width,w.height):Xt(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Yt,pt,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,pt,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ct(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),U(w.depthTexture,0);const j=i.get(w.depthTexture).__webglTexture,tt=kt(w);if(w.depthTexture.format===mr)Xt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(w.depthTexture.format===Er)Xt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function bt(P){const w=i.get(P),H=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const j=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),j){const tt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,j.removeEventListener("dispose",tt)};j.addEventListener("dispose",tt),w.__depthDisposeCallback=tt}w.__boundDepthTexture=j}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ct(w.__webglFramebuffer,P)}else if(H){w.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[j]),w.__webglDepthbuffer[j]===void 0)w.__webglDepthbuffer[j]=n.createRenderbuffer(),ht(w.__webglDepthbuffer[j],P,!1);else{const tt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=w.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,K)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),ht(w.__webglDepthbuffer,P,!1);else{const j=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,tt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Et(P,w,H){const j=i.get(P);w!==void 0&&Q(j.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&bt(P)}function Bt(P){const w=P.texture,H=i.get(P),j=i.get(w);P.addEventListener("dispose",T);const tt=P.textures,K=P.isWebGLCubeRenderTarget===!0,vt=tt.length>1;if(vt||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=w.version,o.memory.textures++),K){H.__webglFramebuffer=[];for(let at=0;at<6;at++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[at]=[];for(let pt=0;pt<w.mipmaps.length;pt++)H.__webglFramebuffer[at][pt]=n.createFramebuffer()}else H.__webglFramebuffer[at]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let at=0;at<w.mipmaps.length;at++)H.__webglFramebuffer[at]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(vt)for(let at=0,pt=tt.length;at<pt;at++){const Yt=i.get(tt[at]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&Xt(P)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let at=0;at<tt.length;at++){const pt=tt[at];H.__webglColorRenderbuffer[at]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[at]);const Yt=s.convert(pt.format,pt.colorSpace),it=s.convert(pt.type),mt=b(pt.internalFormat,Yt,it,pt.colorSpace,P.isXRRenderTarget===!0),Pt=kt(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,mt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,H.__webglColorRenderbuffer[at])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),ht(H.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),st(n.TEXTURE_CUBE_MAP,w);for(let at=0;at<6;at++)if(w.mipmaps&&w.mipmaps.length>0)for(let pt=0;pt<w.mipmaps.length;pt++)Q(H.__webglFramebuffer[at][pt],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,pt);else Q(H.__webglFramebuffer[at],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(w)&&h(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let at=0,pt=tt.length;at<pt;at++){const Yt=tt[at],it=i.get(Yt);e.bindTexture(n.TEXTURE_2D,it.__webglTexture),st(n.TEXTURE_2D,Yt),Q(H.__webglFramebuffer,P,Yt,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,0),p(Yt)&&h(n.TEXTURE_2D)}e.unbindTexture()}else{let at=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(at=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(at,j.__webglTexture),st(at,w),w.mipmaps&&w.mipmaps.length>0)for(let pt=0;pt<w.mipmaps.length;pt++)Q(H.__webglFramebuffer[pt],P,w,n.COLOR_ATTACHMENT0,at,pt);else Q(H.__webglFramebuffer,P,w,n.COLOR_ATTACHMENT0,at,0);p(w)&&h(at),e.unbindTexture()}P.depthBuffer&&bt(P)}function te(P){const w=P.textures;for(let H=0,j=w.length;H<j;H++){const tt=w[H];if(p(tt)){const K=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,vt=i.get(tt).__webglTexture;e.bindTexture(K,vt),h(K),e.unbindTexture()}}}const Vt=[],D=[];function je(P){if(P.samples>0){if(Xt(P)===!1){const w=P.textures,H=P.width,j=P.height;let tt=n.COLOR_BUFFER_BIT;const K=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,vt=i.get(P),at=w.length>1;if(at)for(let pt=0;pt<w.length;pt++)e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let pt=0;pt<w.length;pt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),at){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,vt.__webglColorRenderbuffer[pt]);const Yt=i.get(w[pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Yt,0)}n.blitFramebuffer(0,0,H,j,0,0,H,j,tt,n.NEAREST),c===!0&&(Vt.length=0,D.length=0,Vt.push(n.COLOR_ATTACHMENT0+pt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Vt.push(K),D.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Vt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),at)for(let pt=0;pt<w.length;pt++){e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,vt.__webglColorRenderbuffer[pt]);const Yt=i.get(w[pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,Yt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const w=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function kt(P){return Math.min(r.maxSamples,P.samples)}function Xt(P){const w=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ct(P){const w=o.render.frame;u.get(P)!==w&&(u.set(P,w),P.update())}function ae(P,w){const H=P.colorSpace,j=P.format,tt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==mi&&H!==oi&&(Zt.getTransfer(H)===le?(j!==bn||tt!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}function It(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=M,this.setTexture2D=U,this.setTexture2DArray=W,this.setTexture3D=B,this.setTextureCube=q,this.rebindTextures=Et,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Xt}function Ex(n,t){function e(i,r=oi){let s;const o=Zt.getTransfer(r);if(i===Xn)return n.UNSIGNED_BYTE;if(i===el)return n.UNSIGNED_SHORT_4_4_4_4;if(i===nl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ed)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Qh)return n.BYTE;if(i===td)return n.SHORT;if(i===Jr)return n.UNSIGNED_SHORT;if(i===tl)return n.INT;if(i===zi)return n.UNSIGNED_INT;if(i===Dn)return n.FLOAT;if(i===es)return n.HALF_FLOAT;if(i===nd)return n.ALPHA;if(i===id)return n.RGB;if(i===bn)return n.RGBA;if(i===rd)return n.LUMINANCE;if(i===sd)return n.LUMINANCE_ALPHA;if(i===mr)return n.DEPTH_COMPONENT;if(i===Er)return n.DEPTH_STENCIL;if(i===il)return n.RED;if(i===rl)return n.RED_INTEGER;if(i===od)return n.RG;if(i===sl)return n.RG_INTEGER;if(i===ol)return n.RGBA_INTEGER;if(i===Qs||i===to||i===eo||i===no)if(o===le)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Qs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===to)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===no)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Qs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===to)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===eo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===no)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===lc||i===uc||i===hc||i===dc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===lc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fc||i===pc||i===mc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===fc||i===pc)return o===le?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===mc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===gc||i===_c||i===xc||i===vc||i===Mc||i===Sc||i===yc||i===Ec||i===bc||i===Tc||i===wc||i===Ac||i===Rc||i===Cc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===gc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_c)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Mc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ec)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Tc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ac)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Rc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===io||i===Pc||i===Lc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===io)return o===le?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Lc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ad||i===Ic||i===Dc||i===Uc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===io)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ic)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Dc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===yr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class bx extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Me extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tx={type:"move"};class wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,i),h=this._getHandJoint(l,x);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tx)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Me;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const wx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ax=`
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

}`;class Rx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Ie,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Yn({vertexShader:wx,fragmentShader:Ax,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new zt(new ss(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cx extends Ar{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,d=null,m=null,g=null;const x=new Rx,p=e.getContextAttributes();let h=null,b=null;const y=[],S=[],E=new $t;let T=null;const v=new hn;v.layers.enable(1),v.viewport=new de;const A=new hn;A.layers.enable(2),A.viewport=new de;const C=[v,A],_=new bx;_.layers.enable(1),_.layers.enable(2);let M=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Q=y[$];return Q===void 0&&(Q=new wa,y[$]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function($){let Q=y[$];return Q===void 0&&(Q=new wa,y[$]=Q),Q.getGripSpace()},this.getHand=function($){let Q=y[$];return Q===void 0&&(Q=new wa,y[$]=Q),Q.getHandSpace()};function I($){const Q=S.indexOf($.inputSource);if(Q===-1)return;const ht=y[Q];ht!==void 0&&(ht.update($.inputSource,$.frame,l||o),ht.dispatchEvent({type:$.type,data:$.inputSource}))}function U(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",W);for(let $=0;$<y.length;$++){const Q=S[$];Q!==null&&(S[$]=null,y[$].disconnect(Q))}M=null,L=null,x.reset(),t.setRenderTarget(h),m=null,d=null,f=null,r=null,b=null,Ft.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(h=t.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",U),r.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(E),r.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,Q),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new ki(m.framebufferWidth,m.framebufferHeight,{format:bn,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,ht=null,ct=null;p.depth&&(ct=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=p.stencil?Er:mr,ht=p.stencil?yr:zi);const bt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:s};f=new XRWebGLBinding(r,e),d=f.createProjectionLayer(bt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new ki(d.textureWidth,d.textureHeight,{format:bn,type:Xn,depthTexture:new Ed(d.textureWidth,d.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Ft.setContext(r),Ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function W($){for(let Q=0;Q<$.removed.length;Q++){const ht=$.removed[Q],ct=S.indexOf(ht);ct>=0&&(S[ct]=null,y[ct].disconnect(ht))}for(let Q=0;Q<$.added.length;Q++){const ht=$.added[Q];let ct=S.indexOf(ht);if(ct===-1){for(let Et=0;Et<y.length;Et++)if(Et>=S.length){S.push(ht),ct=Et;break}else if(S[Et]===null){S[Et]=ht,ct=Et;break}if(ct===-1)break}const bt=y[ct];bt&&bt.connect(ht)}}const B=new k,q=new k;function N($,Q,ht){B.setFromMatrixPosition(Q.matrixWorld),q.setFromMatrixPosition(ht.matrixWorld);const ct=B.distanceTo(q),bt=Q.projectionMatrix.elements,Et=ht.projectionMatrix.elements,Bt=bt[14]/(bt[10]-1),te=bt[14]/(bt[10]+1),Vt=(bt[9]+1)/bt[5],D=(bt[9]-1)/bt[5],je=(bt[8]-1)/bt[0],kt=(Et[8]+1)/Et[0],Xt=Bt*je,Ct=Bt*kt,ae=ct/(-je+kt),It=ae*-je;if(Q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(It),$.translateZ(ae),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),bt[10]===-1)$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const P=Bt+ae,w=te+ae,H=Xt-It,j=Ct+(ct-It),tt=Vt*te/w*P,K=D*te/w*P;$.projectionMatrix.makePerspective(H,j,tt,K,P,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function X($,Q){Q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let Q=$.near,ht=$.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(ht=x.depthFar)),_.near=A.near=v.near=Q,_.far=A.far=v.far=ht,(M!==_.near||L!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),M=_.near,L=_.far);const ct=$.parent,bt=_.cameras;X(_,ct);for(let Et=0;Et<bt.length;Et++)X(bt[Et],ct);bt.length===2?N(_,v,A):_.projectionMatrix.copy(v.projectionMatrix),nt($,_,ct)};function nt($,Q,ht){ht===null?$.matrix.copy(Q.matrixWorld):($.matrix.copy(ht.matrixWorld),$.matrix.invert(),$.matrix.multiply(Q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Nc*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let st=null;function yt($,Q){if(u=Q.getViewerPose(l||o),g=Q,u!==null){const ht=u.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let ct=!1;ht.length!==_.cameras.length&&(_.cameras.length=0,ct=!0);for(let Et=0;Et<ht.length;Et++){const Bt=ht[Et];let te=null;if(m!==null)te=m.getViewport(Bt);else{const D=f.getViewSubImage(d,Bt);te=D.viewport,Et===0&&(t.setRenderTargetTextures(b,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(b))}let Vt=C[Et];Vt===void 0&&(Vt=new hn,Vt.layers.enable(Et),Vt.viewport=new de,C[Et]=Vt),Vt.matrix.fromArray(Bt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Bt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(te.x,te.y,te.width,te.height),Et===0&&(_.matrix.copy(Vt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ct===!0&&_.cameras.push(Vt)}const bt=r.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const Et=f.getDepthInformation(ht[0]);Et&&Et.isValid&&Et.texture&&x.init(t,Et,r.renderState)}}for(let ht=0;ht<y.length;ht++){const ct=S[ht],bt=y[ht];ct!==null&&bt!==void 0&&bt.update(ct,Q,l||o)}st&&st($,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Ft=new Sd;Ft.setAnimationLoop(yt),this.setAnimationLoop=function($){st=$},this.dispose=function(){}}}const bi=new wn,Px=new Qt;function Lx(n,t){function e(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,xd(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,b,y,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,S)):h.isMeshMatcapMaterial?(s(p,h),g(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),x(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?c(p,h,b,y):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,e(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Fe&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,e(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Fe&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,e(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,e(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const b=t.get(h),y=b.envMap,S=b.envMapRotation;y&&(p.envMap.value=y,bi.copy(S),bi.x*=-1,bi.y*=-1,bi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),p.envMapRotation.value.setFromMatrix4(Px.makeRotationFromEuler(bi)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function c(p,h,b,y){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*b,p.scale.value=y*.5,h.map&&(p.map.value=h.map,e(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,b){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Fe&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function x(p,h){const b=t.get(h).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Ix(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,y){const S=y.program;i.uniformBlockBinding(b,S)}function l(b,y){let S=r[b.id];S===void 0&&(g(b),S=u(b),r[b.id]=S,b.addEventListener("dispose",p));const E=y.program;i.updateUBOMapping(b,E);const T=t.render.frame;s[b.id]!==T&&(d(b),s[b.id]=T)}function u(b){const y=f();b.__bindingPointIndex=y;const S=n.createBuffer(),E=b.__size,T=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,E,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,S),S}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const y=r[b.id],S=b.uniforms,E=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let T=0,v=S.length;T<v;T++){const A=Array.isArray(S[T])?S[T]:[S[T]];for(let C=0,_=A.length;C<_;C++){const M=A[C];if(m(M,T,C,E)===!0){const L=M.__offset,I=Array.isArray(M.value)?M.value:[M.value];let U=0;for(let W=0;W<I.length;W++){const B=I[W],q=x(B);typeof B=="number"||typeof B=="boolean"?(M.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,L+U,M.__data)):B.isMatrix3?(M.__data[0]=B.elements[0],M.__data[1]=B.elements[1],M.__data[2]=B.elements[2],M.__data[3]=0,M.__data[4]=B.elements[3],M.__data[5]=B.elements[4],M.__data[6]=B.elements[5],M.__data[7]=0,M.__data[8]=B.elements[6],M.__data[9]=B.elements[7],M.__data[10]=B.elements[8],M.__data[11]=0):(B.toArray(M.__data,U),U+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,M.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,y,S,E){const T=b.value,v=y+"_"+S;if(E[v]===void 0)return typeof T=="number"||typeof T=="boolean"?E[v]=T:E[v]=T.clone(),!0;{const A=E[v];if(typeof T=="number"||typeof T=="boolean"){if(A!==T)return E[v]=T,!0}else if(A.equals(T)===!1)return A.copy(T),!0}return!1}function g(b){const y=b.uniforms;let S=0;const E=16;for(let v=0,A=y.length;v<A;v++){const C=Array.isArray(y[v])?y[v]:[y[v]];for(let _=0,M=C.length;_<M;_++){const L=C[_],I=Array.isArray(L.value)?L.value:[L.value];for(let U=0,W=I.length;U<W;U++){const B=I[U],q=x(B),N=S%E,X=N%q.boundary,nt=N+X;S+=X,nt!==0&&E-nt<q.storage&&(S+=E-nt),L.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=q.storage}}}const T=S%E;return T>0&&(S+=E-T),b.__size=S,b.__cache={},this}function x(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function p(b){const y=b.target;y.removeEventListener("dispose",p);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:c,update:l,dispose:h}}class Dx{constructor(t={}){const{canvas:e=Mp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),g=new Int32Array(4);let x=null,p=null;const h=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this.toneMapping=ci,this.toneMappingExposure=1;const y=this;let S=!1,E=0,T=0,v=null,A=-1,C=null;const _=new de,M=new de;let L=null;const I=new J(0);let U=0,W=e.width,B=e.height,q=1,N=null,X=null;const nt=new de(0,0,W,B),st=new de(0,0,W,B);let yt=!1;const Ft=new cl;let $=!1,Q=!1;const ht=new Qt,ct=new Qt,bt=new k,Et=new de,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function Vt(){return v===null?q:1}let D=i;function je(R,O){return e.getContext(R,O)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qc}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),D===null){const O="webgl2";if(D=je(O,R),D===null)throw je(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let kt,Xt,Ct,ae,It,P,w,H,j,tt,K,vt,at,pt,Yt,it,mt,Pt,Lt,gt,Ht,Dt,ie,F;function dt(){kt=new zg(D),kt.init(),Dt=new Ex(D,kt),Xt=new Dg(D,kt,t,Dt),Ct=new Mx(D),Xt.reverseDepthBuffer&&Ct.buffers.depth.setReversed(!0),ae=new Gg(D),It=new ox,P=new yx(D,kt,Ct,It,Xt,Dt,ae),w=new Ng(y),H=new Bg(y),j=new Kp(D),ie=new Lg(D,j),tt=new kg(D,j,ae,ie),K=new Wg(D,tt,j,ae),Lt=new Vg(D,Xt,P),it=new Ug(It),vt=new sx(y,w,H,kt,Xt,ie,it),at=new Lx(y,It),pt=new cx,Yt=new px(kt),Pt=new Pg(y,w,H,Ct,K,d,c),mt=new xx(y,K,Xt),F=new Ix(D,ae,Xt,Ct),gt=new Ig(D,kt,ae),Ht=new Hg(D,kt,ae),ae.programs=vt.programs,y.capabilities=Xt,y.extensions=kt,y.properties=It,y.renderLists=pt,y.shadowMap=mt,y.state=Ct,y.info=ae}dt();const Y=new Cx(y,D);this.xr=Y,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const R=kt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=kt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(W,B,!1))},this.getSize=function(R){return R.set(W,B)},this.setSize=function(R,O,G=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=R,B=O,e.width=Math.floor(R*q),e.height=Math.floor(O*q),G===!0&&(e.style.width=R+"px",e.style.height=O+"px"),this.setViewport(0,0,R,O)},this.getDrawingBufferSize=function(R){return R.set(W*q,B*q).floor()},this.setDrawingBufferSize=function(R,O,G){W=R,B=O,q=G,e.width=Math.floor(R*G),e.height=Math.floor(O*G),this.setViewport(0,0,R,O)},this.getCurrentViewport=function(R){return R.copy(_)},this.getViewport=function(R){return R.copy(nt)},this.setViewport=function(R,O,G,V){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,O,G,V),Ct.viewport(_.copy(nt).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy(st)},this.setScissor=function(R,O,G,V){R.isVector4?st.set(R.x,R.y,R.z,R.w):st.set(R,O,G,V),Ct.scissor(M.copy(st).multiplyScalar(q).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(R){Ct.setScissorTest(yt=R)},this.setOpaqueSort=function(R){N=R},this.setTransparentSort=function(R){X=R},this.getClearColor=function(R){return R.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(R=!0,O=!0,G=!0){let V=0;if(R){let z=!1;if(v!==null){const rt=v.texture.format;z=rt===ol||rt===sl||rt===rl}if(z){const rt=v.texture.type,ut=rt===Xn||rt===zi||rt===Jr||rt===yr||rt===el||rt===nl,_t=Pt.getClearColor(),xt=Pt.getClearAlpha(),Tt=_t.r,At=_t.g,Mt=_t.b;ut?(m[0]=Tt,m[1]=At,m[2]=Mt,m[3]=xt,D.clearBufferuiv(D.COLOR,0,m)):(g[0]=Tt,g[1]=At,g[2]=Mt,g[3]=xt,D.clearBufferiv(D.COLOR,0,g))}else V|=D.COLOR_BUFFER_BIT}O&&(V|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),pt.dispose(),Yt.dispose(),It.dispose(),w.dispose(),H.dispose(),K.dispose(),ie.dispose(),F.dispose(),vt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Pl),Y.removeEventListener("sessionend",Ll),xi.stop()};function Z(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=ae.autoReset,O=mt.enabled,G=mt.autoUpdate,V=mt.needsUpdate,z=mt.type;dt(),ae.autoReset=R,mt.enabled=O,mt.autoUpdate=G,mt.needsUpdate=V,mt.type=z}function ft(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Wt(R){const O=R.target;O.removeEventListener("dispose",Wt),ge(O)}function ge(R){ke(R),It.remove(R)}function ke(R){const O=It.get(R).programs;O!==void 0&&(O.forEach(function(G){vt.releaseProgram(G)}),R.isShaderMaterial&&vt.releaseShaderCache(R))}this.renderBufferDirect=function(R,O,G,V,z,rt){O===null&&(O=Bt);const ut=z.isMesh&&z.matrixWorld.determinant()<0,_t=Lf(R,O,G,V,z);Ct.setMaterial(V,ut);let xt=G.index,Tt=1;if(V.wireframe===!0){if(xt=tt.getWireframeAttribute(G),xt===void 0)return;Tt=2}const At=G.drawRange,Mt=G.attributes.position;let Jt=At.start*Tt,ce=(At.start+At.count)*Tt;rt!==null&&(Jt=Math.max(Jt,rt.start*Tt),ce=Math.min(ce,(rt.start+rt.count)*Tt)),xt!==null?(Jt=Math.max(Jt,0),ce=Math.min(ce,xt.count)):Mt!=null&&(Jt=Math.max(Jt,0),ce=Math.min(ce,Mt.count));const fe=ce-Jt;if(fe<0||fe===1/0)return;ie.setup(z,V,_t,G,xt);let Ze,Kt=gt;if(xt!==null&&(Ze=j.get(xt),Kt=Ht,Kt.setIndex(Ze)),z.isMesh)V.wireframe===!0?(Ct.setLineWidth(V.wireframeLinewidth*Vt()),Kt.setMode(D.LINES)):Kt.setMode(D.TRIANGLES);else if(z.isLine){let St=V.linewidth;St===void 0&&(St=1),Ct.setLineWidth(St*Vt()),z.isLineSegments?Kt.setMode(D.LINES):z.isLineLoop?Kt.setMode(D.LINE_LOOP):Kt.setMode(D.LINE_STRIP)}else z.isPoints?Kt.setMode(D.POINTS):z.isSprite&&Kt.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Kt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const St=z._multiDrawStarts,we=z._multiDrawCounts,jt=z._multiDrawCount,gn=xt?j.get(xt).bytesPerElement:1,qi=It.get(V).currentProgram.getUniforms();for(let Je=0;Je<jt;Je++)qi.setValue(D,"_gl_DrawID",Je),Kt.render(St[Je]/gn,we[Je])}else if(z.isInstancedMesh)Kt.renderInstances(Jt,fe,z.count);else if(G.isInstancedBufferGeometry){const St=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,we=Math.min(G.instanceCount,St);Kt.renderInstances(Jt,fe,we)}else Kt.render(Jt,fe)};function qt(R,O,G){R.transparent===!0&&R.side===he&&R.forceSinglePass===!1?(R.side=Fe,R.needsUpdate=!0,gs(R,O,G),R.side=fi,R.needsUpdate=!0,gs(R,O,G),R.side=he):gs(R,O,G)}this.compile=function(R,O,G=null){G===null&&(G=R),p=Yt.get(G),p.init(O),b.push(p),G.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),R!==G&&R.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const V=new Set;return R.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const rt=z.material;if(rt)if(Array.isArray(rt))for(let ut=0;ut<rt.length;ut++){const _t=rt[ut];qt(_t,G,z),V.add(_t)}else qt(rt,G,z),V.add(rt)}),b.pop(),p=null,V},this.compileAsync=function(R,O,G=null){const V=this.compile(R,O,G);return new Promise(z=>{function rt(){if(V.forEach(function(ut){It.get(ut).currentProgram.isReady()&&V.delete(ut)}),V.size===0){z(R);return}setTimeout(rt,10)}kt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let He=null;function Un(R){He&&He(R)}function Pl(){xi.stop()}function Ll(){xi.start()}const xi=new Sd;xi.setAnimationLoop(Un),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(R){He=R,Y.setAnimationLoop(R),R===null?xi.stop():xi.start()},Y.addEventListener("sessionstart",Pl),Y.addEventListener("sessionend",Ll),this.render=function(R,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(O),O=Y.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,O,v),p=Yt.get(R,b.length),p.init(O),b.push(p),ct.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ft.setFromProjectionMatrix(ct),Q=this.localClippingEnabled,$=it.init(this.clippingPlanes,Q),x=pt.get(R,h.length),x.init(),h.push(x),Y.enabled===!0&&Y.isPresenting===!0){const rt=y.xr.getDepthSensingMesh();rt!==null&&Yo(rt,O,-1/0,y.sortObjects)}Yo(R,O,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(N,X),te=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,te&&Pt.addToRenderList(x,R),this.info.render.frame++,$===!0&&it.beginShadows();const G=p.state.shadowsArray;mt.render(G,R,O),$===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=x.opaque,z=x.transmissive;if(p.setupLights(),O.isArrayCamera){const rt=O.cameras;if(z.length>0)for(let ut=0,_t=rt.length;ut<_t;ut++){const xt=rt[ut];Dl(V,z,R,xt)}te&&Pt.render(R);for(let ut=0,_t=rt.length;ut<_t;ut++){const xt=rt[ut];Il(x,R,xt,xt.viewport)}}else z.length>0&&Dl(V,z,R,O),te&&Pt.render(R),Il(x,R,O);v!==null&&(P.updateMultisampleRenderTarget(v),P.updateRenderTargetMipmap(v)),R.isScene===!0&&R.onAfterRender(y,R,O),ie.resetDefaultState(),A=-1,C=null,b.pop(),b.length>0?(p=b[b.length-1],$===!0&&it.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function Yo(R,O,G,V){if(R.visible===!1)return;if(R.layers.test(O.layers)){if(R.isGroup)G=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(O);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ft.intersectsSprite(R)){V&&Et.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ct);const ut=K.update(R),_t=R.material;_t.visible&&x.push(R,ut,_t,G,Et.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ft.intersectsObject(R))){const ut=K.update(R),_t=R.material;if(V&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Et.copy(R.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Et.copy(ut.boundingSphere.center)),Et.applyMatrix4(R.matrixWorld).applyMatrix4(ct)),Array.isArray(_t)){const xt=ut.groups;for(let Tt=0,At=xt.length;Tt<At;Tt++){const Mt=xt[Tt],Jt=_t[Mt.materialIndex];Jt&&Jt.visible&&x.push(R,ut,Jt,G,Et.z,Mt)}}else _t.visible&&x.push(R,ut,_t,G,Et.z,null)}}const rt=R.children;for(let ut=0,_t=rt.length;ut<_t;ut++)Yo(rt[ut],O,G,V)}function Il(R,O,G,V){const z=R.opaque,rt=R.transmissive,ut=R.transparent;p.setupLightsView(G),$===!0&&it.setGlobalState(y.clippingPlanes,G),V&&Ct.viewport(_.copy(V)),z.length>0&&ms(z,O,G),rt.length>0&&ms(rt,O,G),ut.length>0&&ms(ut,O,G),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function Dl(R,O,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new ki(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?es:Xn,minFilter:Ui,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const rt=p.state.transmissionRenderTarget[V.id],ut=V.viewport||_;rt.setSize(ut.z,ut.w);const _t=y.getRenderTarget();y.setRenderTarget(rt),y.getClearColor(I),U=y.getClearAlpha(),U<1&&y.setClearColor(16777215,.5),y.clear(),te&&Pt.render(G);const xt=y.toneMapping;y.toneMapping=ci;const Tt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),$===!0&&it.setGlobalState(y.clippingPlanes,V),ms(R,G,V),P.updateMultisampleRenderTarget(rt),P.updateRenderTargetMipmap(rt),kt.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let Mt=0,Jt=O.length;Mt<Jt;Mt++){const ce=O[Mt],fe=ce.object,Ze=ce.geometry,Kt=ce.material,St=ce.group;if(Kt.side===he&&fe.layers.test(V.layers)){const we=Kt.side;Kt.side=Fe,Kt.needsUpdate=!0,Ul(fe,G,V,Ze,Kt,St),Kt.side=we,Kt.needsUpdate=!0,At=!0}}At===!0&&(P.updateMultisampleRenderTarget(rt),P.updateRenderTargetMipmap(rt))}y.setRenderTarget(_t),y.setClearColor(I,U),Tt!==void 0&&(V.viewport=Tt),y.toneMapping=xt}function ms(R,O,G){const V=O.isScene===!0?O.overrideMaterial:null;for(let z=0,rt=R.length;z<rt;z++){const ut=R[z],_t=ut.object,xt=ut.geometry,Tt=V===null?ut.material:V,At=ut.group;_t.layers.test(G.layers)&&Ul(_t,O,G,xt,Tt,At)}}function Ul(R,O,G,V,z,rt){R.onBeforeRender(y,O,G,V,z,rt),R.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),z.onBeforeRender(y,O,G,V,R,rt),z.transparent===!0&&z.side===he&&z.forceSinglePass===!1?(z.side=Fe,z.needsUpdate=!0,y.renderBufferDirect(G,O,V,z,R,rt),z.side=fi,z.needsUpdate=!0,y.renderBufferDirect(G,O,V,z,R,rt),z.side=he):y.renderBufferDirect(G,O,V,z,R,rt),R.onAfterRender(y,O,G,V,z,rt)}function gs(R,O,G){O.isScene!==!0&&(O=Bt);const V=It.get(R),z=p.state.lights,rt=p.state.shadowsArray,ut=z.state.version,_t=vt.getParameters(R,z.state,rt,O,G),xt=vt.getProgramCacheKey(_t);let Tt=V.programs;V.environment=R.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(R.isMeshStandardMaterial?H:w).get(R.envMap||V.environment),V.envMapRotation=V.environment!==null&&R.envMap===null?O.environmentRotation:R.envMapRotation,Tt===void 0&&(R.addEventListener("dispose",Wt),Tt=new Map,V.programs=Tt);let At=Tt.get(xt);if(At!==void 0){if(V.currentProgram===At&&V.lightsStateVersion===ut)return Fl(R,_t),At}else _t.uniforms=vt.getUniforms(R),R.onBeforeCompile(_t,y),At=vt.acquireProgram(_t,xt),Tt.set(xt,At),V.uniforms=_t.uniforms;const Mt=V.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Mt.clippingPlanes=it.uniform),Fl(R,_t),V.needsLights=Df(R),V.lightsStateVersion=ut,V.needsLights&&(Mt.ambientLightColor.value=z.state.ambient,Mt.lightProbe.value=z.state.probe,Mt.directionalLights.value=z.state.directional,Mt.directionalLightShadows.value=z.state.directionalShadow,Mt.spotLights.value=z.state.spot,Mt.spotLightShadows.value=z.state.spotShadow,Mt.rectAreaLights.value=z.state.rectArea,Mt.ltc_1.value=z.state.rectAreaLTC1,Mt.ltc_2.value=z.state.rectAreaLTC2,Mt.pointLights.value=z.state.point,Mt.pointLightShadows.value=z.state.pointShadow,Mt.hemisphereLights.value=z.state.hemi,Mt.directionalShadowMap.value=z.state.directionalShadowMap,Mt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Mt.spotShadowMap.value=z.state.spotShadowMap,Mt.spotLightMatrix.value=z.state.spotLightMatrix,Mt.spotLightMap.value=z.state.spotLightMap,Mt.pointShadowMap.value=z.state.pointShadowMap,Mt.pointShadowMatrix.value=z.state.pointShadowMatrix),V.currentProgram=At,V.uniformsList=null,At}function Nl(R){if(R.uniformsList===null){const O=R.currentProgram.getUniforms();R.uniformsList=so.seqWithValue(O.seq,R.uniforms)}return R.uniformsList}function Fl(R,O){const G=It.get(R);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function Lf(R,O,G,V,z){O.isScene!==!0&&(O=Bt),P.resetTextureUnits();const rt=O.fog,ut=V.isMeshStandardMaterial?O.environment:null,_t=v===null?y.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:mi,xt=(V.isMeshStandardMaterial?H:w).get(V.envMap||ut),Tt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,At=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Mt=!!G.morphAttributes.position,Jt=!!G.morphAttributes.normal,ce=!!G.morphAttributes.color;let fe=ci;V.toneMapped&&(v===null||v.isXRRenderTarget===!0)&&(fe=y.toneMapping);const Ze=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Kt=Ze!==void 0?Ze.length:0,St=It.get(V),we=p.state.lights;if($===!0&&(Q===!0||R!==C)){const an=R===C&&V.id===A;it.setState(V,R,an)}let jt=!1;V.version===St.__version?(St.needsLights&&St.lightsStateVersion!==we.state.version||St.outputColorSpace!==_t||z.isBatchedMesh&&St.batching===!1||!z.isBatchedMesh&&St.batching===!0||z.isBatchedMesh&&St.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&St.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&St.instancing===!1||!z.isInstancedMesh&&St.instancing===!0||z.isSkinnedMesh&&St.skinning===!1||!z.isSkinnedMesh&&St.skinning===!0||z.isInstancedMesh&&St.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&St.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&St.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&St.instancingMorph===!1&&z.morphTexture!==null||St.envMap!==xt||V.fog===!0&&St.fog!==rt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==it.numPlanes||St.numIntersection!==it.numIntersection)||St.vertexAlphas!==Tt||St.vertexTangents!==At||St.morphTargets!==Mt||St.morphNormals!==Jt||St.morphColors!==ce||St.toneMapping!==fe||St.morphTargetsCount!==Kt)&&(jt=!0):(jt=!0,St.__version=V.version);let gn=St.currentProgram;jt===!0&&(gn=gs(V,O,z));let qi=!1,Je=!1,qo=!1;const pe=gn.getUniforms(),jn=St.uniforms;if(Ct.useProgram(gn.program)&&(qi=!0,Je=!0,qo=!0),V.id!==A&&(A=V.id,Je=!0),qi||C!==R){Xt.reverseDepthBuffer?(ht.copy(R.projectionMatrix),yp(ht),Ep(ht),pe.setValue(D,"projectionMatrix",ht)):pe.setValue(D,"projectionMatrix",R.projectionMatrix),pe.setValue(D,"viewMatrix",R.matrixWorldInverse);const an=pe.map.cameraPosition;an!==void 0&&an.setValue(D,bt.setFromMatrixPosition(R.matrixWorld)),Xt.logarithmicDepthBuffer&&pe.setValue(D,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&pe.setValue(D,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,Je=!0,qo=!0)}if(z.isSkinnedMesh){pe.setOptional(D,z,"bindMatrix"),pe.setOptional(D,z,"bindMatrixInverse");const an=z.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),pe.setValue(D,"boneTexture",an.boneTexture,P))}z.isBatchedMesh&&(pe.setOptional(D,z,"batchingTexture"),pe.setValue(D,"batchingTexture",z._matricesTexture,P),pe.setOptional(D,z,"batchingIdTexture"),pe.setValue(D,"batchingIdTexture",z._indirectTexture,P),pe.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&pe.setValue(D,"batchingColorTexture",z._colorsTexture,P));const $o=G.morphAttributes;if(($o.position!==void 0||$o.normal!==void 0||$o.color!==void 0)&&Lt.update(z,G,gn),(Je||St.receiveShadow!==z.receiveShadow)&&(St.receiveShadow=z.receiveShadow,pe.setValue(D,"receiveShadow",z.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(jn.envMap.value=xt,jn.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&O.environment!==null&&(jn.envMapIntensity.value=O.environmentIntensity),Je&&(pe.setValue(D,"toneMappingExposure",y.toneMappingExposure),St.needsLights&&If(jn,qo),rt&&V.fog===!0&&at.refreshFogUniforms(jn,rt),at.refreshMaterialUniforms(jn,V,q,B,p.state.transmissionRenderTarget[R.id]),so.upload(D,Nl(St),jn,P)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(so.upload(D,Nl(St),jn,P),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&pe.setValue(D,"center",z.center),pe.setValue(D,"modelViewMatrix",z.modelViewMatrix),pe.setValue(D,"normalMatrix",z.normalMatrix),pe.setValue(D,"modelMatrix",z.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const an=V.uniformsGroups;for(let Ko=0,Uf=an.length;Ko<Uf;Ko++){const Ol=an[Ko];F.update(Ol,gn),F.bind(Ol,gn)}}return gn}function If(R,O){R.ambientLightColor.needsUpdate=O,R.lightProbe.needsUpdate=O,R.directionalLights.needsUpdate=O,R.directionalLightShadows.needsUpdate=O,R.pointLights.needsUpdate=O,R.pointLightShadows.needsUpdate=O,R.spotLights.needsUpdate=O,R.spotLightShadows.needsUpdate=O,R.rectAreaLights.needsUpdate=O,R.hemisphereLights.needsUpdate=O}function Df(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(R,O,G){It.get(R.texture).__webglTexture=O,It.get(R.depthTexture).__webglTexture=G;const V=It.get(R);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,O){const G=It.get(R);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(R,O=0,G=0){v=R,E=O,T=G;let V=!0,z=null,rt=!1,ut=!1;if(R){const xt=It.get(R);if(xt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(D.FRAMEBUFFER,null),V=!1;else if(xt.__webglFramebuffer===void 0)P.setupRenderTarget(R);else if(xt.__hasExternalTextures)P.rebindTextures(R,It.get(R.texture).__webglTexture,It.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Mt=R.depthTexture;if(xt.__boundDepthTexture!==Mt){if(Mt!==null&&It.has(Mt)&&(R.width!==Mt.image.width||R.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(R)}}const Tt=R.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(ut=!0);const At=It.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(At[O])?z=At[O][G]:z=At[O],rt=!0):R.samples>0&&P.useMultisampledRTT(R)===!1?z=It.get(R).__webglMultisampledFramebuffer:Array.isArray(At)?z=At[G]:z=At,_.copy(R.viewport),M.copy(R.scissor),L=R.scissorTest}else _.copy(nt).multiplyScalar(q).floor(),M.copy(st).multiplyScalar(q).floor(),L=yt;if(Ct.bindFramebuffer(D.FRAMEBUFFER,z)&&V&&Ct.drawBuffers(R,z),Ct.viewport(_),Ct.scissor(M),Ct.setScissorTest(L),rt){const xt=It.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,xt.__webglTexture,G)}else if(ut){const xt=It.get(R.texture),Tt=O||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,xt.__webglTexture,G||0,Tt)}A=-1},this.readRenderTargetPixels=function(R,O,G,V,z,rt,ut){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=It.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ut!==void 0&&(_t=_t[ut]),_t){Ct.bindFramebuffer(D.FRAMEBUFFER,_t);try{const xt=R.texture,Tt=xt.format,At=xt.type;if(!Xt.textureFormatReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=R.width-V&&G>=0&&G<=R.height-z&&D.readPixels(O,G,V,z,Dt.convert(Tt),Dt.convert(At),rt)}finally{const xt=v!==null?It.get(v).__webglFramebuffer:null;Ct.bindFramebuffer(D.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(R,O,G,V,z,rt,ut){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=It.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ut!==void 0&&(_t=_t[ut]),_t){const xt=R.texture,Tt=xt.format,At=xt.type;if(!Xt.textureFormatReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=R.width-V&&G>=0&&G<=R.height-z){Ct.bindFramebuffer(D.FRAMEBUFFER,_t);const Mt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Mt),D.bufferData(D.PIXEL_PACK_BUFFER,rt.byteLength,D.STREAM_READ),D.readPixels(O,G,V,z,Dt.convert(Tt),Dt.convert(At),0);const Jt=v!==null?It.get(v).__webglFramebuffer:null;Ct.bindFramebuffer(D.FRAMEBUFFER,Jt);const ce=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Sp(D,ce,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Mt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,rt),D.deleteBuffer(Mt),D.deleteSync(ce),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,O=null,G=0){R.isTexture!==!0&&(ro("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,R=arguments[1]);const V=Math.pow(2,-G),z=Math.floor(R.image.width*V),rt=Math.floor(R.image.height*V),ut=O!==null?O.x:0,_t=O!==null?O.y:0;P.setTexture2D(R,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,ut,_t,z,rt),Ct.unbindTexture()},this.copyTextureToTexture=function(R,O,G=null,V=null,z=0){R.isTexture!==!0&&(ro("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,R=arguments[1],O=arguments[2],z=arguments[3]||0,G=null);let rt,ut,_t,xt,Tt,At;G!==null?(rt=G.max.x-G.min.x,ut=G.max.y-G.min.y,_t=G.min.x,xt=G.min.y):(rt=R.image.width,ut=R.image.height,_t=0,xt=0),V!==null?(Tt=V.x,At=V.y):(Tt=0,At=0);const Mt=Dt.convert(O.format),Jt=Dt.convert(O.type);P.setTexture2D(O,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const ce=D.getParameter(D.UNPACK_ROW_LENGTH),fe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ze=D.getParameter(D.UNPACK_SKIP_PIXELS),Kt=D.getParameter(D.UNPACK_SKIP_ROWS),St=D.getParameter(D.UNPACK_SKIP_IMAGES),we=R.isCompressedTexture?R.mipmaps[z]:R.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,we.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,we.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,_t),D.pixelStorei(D.UNPACK_SKIP_ROWS,xt),R.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,z,Tt,At,rt,ut,Mt,Jt,we.data):R.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,z,Tt,At,we.width,we.height,Mt,we.data):D.texSubImage2D(D.TEXTURE_2D,z,Tt,At,rt,ut,Mt,Jt,we),D.pixelStorei(D.UNPACK_ROW_LENGTH,ce),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,fe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ze),D.pixelStorei(D.UNPACK_SKIP_ROWS,Kt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,St),z===0&&O.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Ct.unbindTexture()},this.copyTextureToTexture3D=function(R,O,G=null,V=null,z=0){R.isTexture!==!0&&(ro("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,R=arguments[2],O=arguments[3],z=arguments[4]||0);let rt,ut,_t,xt,Tt,At,Mt,Jt,ce;const fe=R.isCompressedTexture?R.mipmaps[z]:R.image;G!==null?(rt=G.max.x-G.min.x,ut=G.max.y-G.min.y,_t=G.max.z-G.min.z,xt=G.min.x,Tt=G.min.y,At=G.min.z):(rt=fe.width,ut=fe.height,_t=fe.depth,xt=0,Tt=0,At=0),V!==null?(Mt=V.x,Jt=V.y,ce=V.z):(Mt=0,Jt=0,ce=0);const Ze=Dt.convert(O.format),Kt=Dt.convert(O.type);let St;if(O.isData3DTexture)P.setTexture3D(O,0),St=D.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)P.setTexture2DArray(O,0),St=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const we=D.getParameter(D.UNPACK_ROW_LENGTH),jt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),gn=D.getParameter(D.UNPACK_SKIP_PIXELS),qi=D.getParameter(D.UNPACK_SKIP_ROWS),Je=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,fe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,fe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Tt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,At),R.isDataTexture||R.isData3DTexture?D.texSubImage3D(St,z,Mt,Jt,ce,rt,ut,_t,Ze,Kt,fe.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(St,z,Mt,Jt,ce,rt,ut,_t,Ze,fe.data):D.texSubImage3D(St,z,Mt,Jt,ce,rt,ut,_t,Ze,Kt,fe),D.pixelStorei(D.UNPACK_ROW_LENGTH,we),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,jt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,gn),D.pixelStorei(D.UNPACK_SKIP_ROWS,qi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Je),z===0&&O.generateMipmaps&&D.generateMipmap(St),Ct.unbindTexture()},this.initRenderTarget=function(R){It.get(R).__webglFramebuffer===void 0&&P.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),Ct.unbindTexture()},this.resetState=function(){E=0,T=0,v=null,Ct.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===al?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===Uo?"display-p3":"srgb"}}class ul{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new J(t),this.near=e,this.far=i}clone(){return new ul(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ux extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Nx extends Ie{constructor(t=null,e=1,i=1,r,s,o,a,c,l=qe,u=qe,f,d){super(null,o,a,c,l,u,r,s,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rn extends Tn{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const cr=new Qt,Lu=new Qt,Bs=[],Iu=new Xi,Fx=new Qt,Br=new zt,zr=new Cr;class Cd extends zt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Rn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Fx)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,cr),Iu.copy(t.boundingBox).applyMatrix4(cr),this.boundingBox.union(Iu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,cr),zr.copy(t.boundingSphere).applyMatrix4(cr),this.boundingSphere.union(zr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(t,e){const i=this.matrixWorld,r=this.count;if(Br.geometry=this.geometry,Br.material=this.material,Br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zr.copy(this.boundingSphere),zr.applyMatrix4(i),t.ray.intersectsSphere(zr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,cr),Lu.multiplyMatrices(i,cr),Br.matrixWorld=Lu,Br.raycast(t,Bs);for(let o=0,a=Bs.length;o<a;o++){const c=Bs[o];c.instanceId=s,c.object=this,e.push(c)}Bs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Rn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Nx(new Float32Array(r*this.count),r,this.count,il,Dn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*t;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class hl extends mn{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],m=[];let g=0;const x=[],p=i/2;let h=0;b(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new ve(f,3)),this.setAttribute("normal",new ve(d,3)),this.setAttribute("uv",new ve(m,2));function b(){const S=new k,E=new k;let T=0;const v=(e-t)/i;for(let A=0;A<=s;A++){const C=[],_=A/s,M=_*(e-t)+t;for(let L=0;L<=r;L++){const I=L/r,U=I*c+a,W=Math.sin(U),B=Math.cos(U);E.x=M*W,E.y=-_*i+p,E.z=M*B,f.push(E.x,E.y,E.z),S.set(W,v,B).normalize(),d.push(S.x,S.y,S.z),m.push(I,1-_),C.push(g++)}x.push(C)}for(let A=0;A<r;A++)for(let C=0;C<s;C++){const _=x[C][A],M=x[C+1][A],L=x[C+1][A+1],I=x[C][A+1];t>0&&(u.push(_,M,I),T+=3),e>0&&(u.push(M,L,I),T+=3)}l.addGroup(h,T,0),h+=T}function y(S){const E=g,T=new $t,v=new k;let A=0;const C=S===!0?t:e,_=S===!0?1:-1;for(let L=1;L<=r;L++)f.push(0,p*_,0),d.push(0,_,0),m.push(.5,.5),g++;const M=g;for(let L=0;L<=r;L++){const U=L/r*c+a,W=Math.cos(U),B=Math.sin(U);v.x=C*B,v.y=p*_,v.z=C*W,f.push(v.x,v.y,v.z),d.push(0,_,0),T.x=W*.5+.5,T.y=B*.5*_+.5,m.push(T.x,T.y),g++}for(let L=0;L<r;L++){const I=E+L,U=M+L;S===!0?u.push(U,U+1,I):u.push(U+1,U,I),A+=3}l.addGroup(h,A,S===!0?1:2),h+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Oo extends mn{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new k,d=new k,m=[],g=[],x=[],p=[];for(let h=0;h<=i;h++){const b=[],y=h/i;let S=0;h===0&&o===0?S=.5/e:h===i&&c===Math.PI&&(S=-.5/e);for(let E=0;E<=e;E++){const T=E/e;f.x=-t*Math.cos(r+T*s)*Math.sin(o+y*a),f.y=t*Math.cos(o+y*a),f.z=t*Math.sin(r+T*s)*Math.sin(o+y*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),p.push(T+S,1-y),b.push(l++)}u.push(b)}for(let h=0;h<i;h++)for(let b=0;b<e;b++){const y=u[h][b+1],S=u[h][b],E=u[h+1][b],T=u[h+1][b+1];(h!==0||o>0)&&m.push(y,S,T),(h!==i-1||c<Math.PI)&&m.push(S,E,T)}this.setIndex(m),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(x,3)),this.setAttribute("uv",new ve(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class rn extends is{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new J(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new J(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ld,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Du={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Ox{constructor(t,e,i){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=l.length;f<d;f+=2){const m=l[f],g=l[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const Bx=new Ox;class dl{constructor(t){this.manager=t!==void 0?t:Bx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}dl.DEFAULT_MATERIAL_NAME="__DEFAULT";class zx extends dl{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Du.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Qr("img");function c(){u(),Du.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(f){u(),r&&r(f),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class kx extends dl{constructor(t){super(t)}load(t,e,i,r){const s=new Ie,o=new zx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},i,r),s}}class Pd extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new J(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Hx extends Pd{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new J(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Aa=new Qt,Uu=new k,Nu=new k;class Gx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cl,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Uu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uu),Nu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nu),e.updateMatrixWorld(),Aa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Aa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Aa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Vx extends Gx{constructor(){super(new yd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wx extends Pd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new Vx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Xx{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Fu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Fu(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qc);const Yx=1.5;function qx(n){const t=new Dx({antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio,Yx)),t.setSize(window.innerWidth,window.innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=Kh,t.toneMapping=Zh,t.toneMappingExposure=1.05,t.outputColorSpace=un,n.appendChild(t.domElement);let e=null;return t.setResizeCallback=i=>{e=i},window.addEventListener("resize",()=>{t.setSize(window.innerWidth,window.innerHeight),e?.(window.innerWidth/window.innerHeight)}),t}function $x(){const n=new hn(50,window.innerWidth/window.innerHeight,.1,500);return n.position.set(0,20,36),n}function zs(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function oe(n,t){const e=Math.floor(n),i=Math.floor(t),r=n-e,s=t-i,o=r*r*(3-2*r),a=s*s*(3-2*s),c=zs(e,i),l=zs(e+1,i),u=zs(e,i+1),f=zs(e+1,i+1);return c*(1-o)*(1-a)+l*o*(1-a)+u*(1-o)*a+f*o*a}function os(n){let t=n>>>0;return function(){t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function et(n,t,e){return n<t?t:n>e?e:n}function wt(n,t,e){return n+(t-n)*e}function li(n,t,e,i){return wt(n,t,1-Math.exp(-e*i))}function ne(n){const t=Math.hypot(n[0],n[1],n[2])||1;return[n[0]/t,n[1]/t,n[2]/t]}function Ke(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function Rt(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function se(n,t){return[n[0]+t[0],n[1]+t[1],n[2]+t[2]]}function qn(n,t){return[n[0]-t[0],n[1]-t[1],n[2]-t[2]]}function Oi(n,t,e,i){return{x:n,y:t,z:e,p:i}}function Ld(n,t){const[e,i,r]=t;return[n.x[0]*e+n.y[0]*i+n.z[0]*r+n.p[0],n.x[1]*e+n.y[1]*i+n.z[1]*r+n.p[1],n.x[2]*e+n.y[2]*i+n.z[2]*r+n.p[2]]}function Ye(n,t,e){const i=qn(t,n),r=Math.hypot(i[0],i[1],i[2])||1e-4,s=[i[0]/r,i[1]/r,i[2]/r],o=Math.abs(s[1])<.97?[0,1,0]:[1,0,0],a=ne(Ke(o,s)),c=Ke(a,s);return Oi(Rt(a,e),Rt(s,r),Rt(c,e),n)}class Te{constructor(){this.positions=[],this.colors=[],this.indices=[]}addVertex(t,e,i,r){return this.positions.push(t,e,i),this.colors.push(r[0],r[1],r[2]),this.positions.length/3-1}addTri(t,e,i){this.indices.push(t,e,i)}addQuad(t,e,i,r){this.addTri(t,e,i),this.addTri(t,i,r)}bake(t,e,i){const r=this.positions.length/3;for(let s=0;s<t.p.length;s+=3){const o=Ld(e,[t.p[s],t.p[s+1],t.p[s+2]]),a=i(o[0],o[1],o[2]);this.positions.push(o[0],o[1],o[2]),this.colors.push(a[0],a[1],a[2])}for(let s=0;s<t.i.length;s++)this.indices.push(r+t.i[s])}toBufferGeometry(){const t=new mn;return t.setAttribute("position",new ve(this.positions,3)),t.setAttribute("color",new ve(this.colors,3)),t.setIndex(this.indices),t.computeVertexNormals(),t}}function Tr(n,t){const e=[],i=[],r=[];for(let s=0;s<=t;s++){const o=Math.PI*s/t,a=Math.sin(o),c=Math.cos(o);for(let l=0;l<=n;l++){const u=2*Math.PI*l/n,f=a*Math.cos(u),d=c,m=a*Math.sin(u);e.push(f,d,m),i.push(f,d,m)}}for(let s=0;s<t;s++)for(let o=0;o<n;o++){const a=s*(n+1)+o,c=a+n+1;r.push(a,a+1,c,a+1,c+1,c)}return{p:e,n:i,i:r}}function Bo(n){const t=[],e=[],i=[];for(let s=0;s<=n;s++){const o=2*Math.PI*s/n,a=Math.cos(o),c=Math.sin(o);t.push(a,0,c),e.push(a,0,c),t.push(a,1,c),e.push(a,0,c)}for(let s=0;s<n;s++){const o=s*2;i.push(o,o+1,o+2,o+1,o+3,o+2)}const r=t.length/3;t.push(0,0,0),e.push(0,-1,0),t.push(0,1,0),e.push(0,1,0);for(let s=0;s<n;s++){const o=2*Math.PI*s/n,a=2*Math.PI*(s+1)/n,c=t.length/3;t.push(Math.cos(o),0,Math.sin(o)),e.push(0,-1,0),t.push(Math.cos(a),0,Math.sin(a)),e.push(0,-1,0),i.push(r,c+1,c);const l=t.length/3;t.push(Math.cos(o),1,Math.sin(o)),e.push(0,1,0),t.push(Math.cos(a),1,Math.sin(a)),e.push(0,1,0),i.push(r+1,l,l+1)}return{p:t,n:e,i}}const Kx=""+new URL("bark_albedo-DReMtPgm.png",import.meta.url).href,jx=""+new URL("tunnel-dirt_albedo-DgMZYBLi.png",import.meta.url).href,Zx=""+new URL("lawn-soil_albedo-mTvxXfeR.png",import.meta.url).href,Jx=""+new URL("stone_albedo-CltKTJgX.png",import.meta.url).href,Qx=""+new URL("mushroom-cap_albedo-CRHQ2riL.png",import.meta.url).href,oo=new Float32Array(256);for(let n=0;n<256;n++){const t=n/255;oo[n]=t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function tv(n,t){const e=document.createElement("canvas");e.width=n.width,e.height=n.height;const i=e.getContext("2d",{willReadFrequently:!0});i.drawImage(n,0,0);const r=i.getImageData(0,0,e.width,e.height).data;let s=0,o=0,a=0;const c=e.width*e.height;for(let l=0;l<r.length;l+=4)s+=oo[r[l]],o+=oo[r[l+1]],a+=oo[r[l+2]];t.set(Math.max(s/c,.001),Math.max(o/c,.001),Math.max(a/c,.001))}const ev=new kx;function as(n,t){const e=new k(.5,.5,.5),i=ev.load(n,r=>{try{tv(r.image,e)}catch(s){console.warn("albedo mean unavailable",s)}});return i.colorSpace=un,i.wrapS=i.wrapT=yo,i.repeat.set(1/t,1/t),i.anisotropy=4,i.userData.meanLinear=e,i}const nv=5,iv=16,rv=45,sv=12,ov=2.5;let av=null,cv=null,lv=null,uv=null,hv=null;function Id(){return av||(av=as(jx,nv))}function dv(){return cv||(cv=as(Kx,iv))}function fv(){return lv||(lv=as(Zx,rv))}function pv(){return uv||(uv=as(Jx,sv))}function Dd(){return hv||(hv=as(Qx,ov))}const mv=`
uniform vec3 uTexMid;
uniform vec2 uTexRepeat;
uniform float uTexStrength;
varying vec3 vTexWorld;
varying vec3 vTexNormal;
vec3 gTriTex = vec3(1.0);   // filled by the <map_fragment> injection below,
                            // reused by the emissive one (which runs later)
`,gv=4,_v=`
{
  vec3 tn = normalize(vTexNormal);
  vec3 bw = pow(abs(tn), vec3(${gv.toFixed(1)}));
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
`;function Ud(n,t){Object.assign(n.uniforms,t),n.vertexShader=n.vertexShader.replace("#include <common>",`varying vec3 vTexWorld;
varying vec3 vTexNormal;
#include <common>`).replace("#include <project_vertex>",`#include <project_vertex>
      vec4 texLocal = vec4(transformed, 1.0);
      vec3 texNrm = objectNormal;
      #ifdef USE_INSTANCING
        texLocal = instanceMatrix * texLocal;
        texNrm = mat3(instanceMatrix) * texNrm;
      #endif
      vTexWorld = (modelMatrix * texLocal).xyz;
      vTexNormal = mat3(modelMatrix) * texNrm;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",mv+`
#include <common>`).replace("#include <map_fragment>",_v)}function Nd(n,t){return{uTexMid:{value:n.userData.meanLinear},uTexRepeat:{value:n.repeat},uTexStrength:{value:t}}}function cs({map:n,strength:t=1,...e}){const i=new rn({vertexColors:!0,roughness:.95,metalness:0,map:n,...e}),r=Nd(n,t);return i.userData.texUniforms=r,i.onBeforeCompile=s=>Ud(s,r),i.userData.shaderTag="triplanar-albedo",i.customProgramCacheKey=()=>"triplanar-albedo",i}function Fd({map:n,strength:t=1,emissive:e=1.6,...i}){const r=new rn({vertexColors:!0,roughness:.6,metalness:0,map:n,...i}),s=Nd(n,t);return r.userData.texUniforms=s,r.onBeforeCompile=o=>{Ud(o,s),o.fragmentShader=o.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
       totalEmissiveRadiance += vColor * gTriTex * ${e.toFixed(2)};`)},r.userData.shaderTag="triplanar-emissive",r.customProgramCacheKey=()=>"triplanar-emissive",r}const ao=2.2,me=-166,Be=0,_r=7.2*ao,fl=-132,Ao=32,Oc=[-9,-140],ee=[13,0,-124],Bc=15,xv=2.6;function Oe(n){const t=(n-fl)/Ao;return t>-1&&t<1?_r+(Ao-_r)*Math.pow(Math.sqrt(1-t*t),.72):_r}function re(n,t){let e=.22*oe(n*.11+11,t*.11+5);const i=Math.hypot(n-ee[0],t-ee[2]);if(i<Bc){const r=1-i/Bc;e+=xv*r*r*(3-2*r)}return e}const zc=[],dr=[],Od=[];function pl(n,t){for(let e=0;e<zc.length;e++){const i=zc[e],s=Math.atan2(Math.sin(n-i.th),Math.cos(n-i.th))/i.rTh,o=(t-i.z)/i.rZ;if(s*s+o*o<1)return!0}return!1}function vv(n,t){return pl(t,n)?1/0:Oe(n)}function ml(){const n={};for(const t of dr)n[t.name]=t;return n}function zo(n,t){for(let s=0;s<dr.length;s++){const o=dr[s],a=n-o.origin[0],c=t-o.origin[2],l=a*o.dir[0]+c*o.dir[2];if(l<=-.5||l>=o.uMax+1)continue;const u=a*o.side[0]+c*o.side[2],f=Math.max(o.profR(et(l,0,o.uMax))*.82-1.2,2.2);if(Math.abs(u)>=f+3)continue;const d=et(l,-.5,o.uMax-1.2),m=et(u,-f,f);return[o.origin[0]+o.dir[0]*d+o.side[0]*m,o.origin[2]+o.dir[2]*d+o.side[2]*m]}const e=Math.max(Oe(t)*.82-1.6,3);let i=e,r=e;for(let s=0;s<dr.length;s++){const o=dr[s],a=et(1-Math.abs(t-o.origin[2])/o.doorFalloff,0,1);if(a<=0)continue;const c=wt(e,Math.abs(o.origin[0])+1.5,a);o.dir[0]>0?c>i&&(i=c):c>r&&(r=c)}return[et(n,-r,i),Math.max(t,me+5)]}const gl=new J("#6d5130"),ls=new J("#5a4226"),Hi=new J("#332412"),Mv=new J("#4c5f2f"),Sv=new J(Mv).lerp(Hi,.62).multiplyScalar(.58);function $n(n,t,e){return new J(n).lerp(t,et(e,0,1))}function co(n,t,e,i){return oe(Math.cos(n)*e+t*i+37,Math.sin(n)*e+t*i*.7+91)}function _l(n){return .86*Math.pow(_r/n,.35)}function Xr(n){const t=Oe(n);return 1.2+t*_l(t)*.62}function Ni(n,t,e){const i=Oe(t),r=_l(i),s=.84+.2*co(n,t,1.6,.1)+.1*co(n,t,4.1,.29)+.05*co(n,t,9.3,.62),o=i*s*(1-(e||0)),a=Math.cos(n)*o,c=Math.sin(n)*o*r+Xr(t),l=re(a,t);return[a,Math.max(c,l),t,s]}function yv(n,t){const e=$n(Hi,ls,n*.8+.12);return $n(e,gl,t)}function Ev(n){const t=$n(Hi,ls,n*.8+.12);return $n(t,gl,.28+n*.18)}function bv(n){const t=$n(Hi,ls,n*.75+.15);return $n(t,gl,.55)}function Tv(n){const t=$n(Hi,ls,n*.6+.08);return $n(t,Sv,.3+n*.3)}function Ra(n,t,e,i,r,s,o,a,c,l,u,f){const d=Ni(t,e,0),m=[d[0],re(d[0],d[2]),d[2]],g=ne([Math.cos(t),0,1e-4]),x=ne(Ke([0,1,0],g)),p=r+o,h=r+o*2;function b(N){const X=(N-p)/o;return X>-1&&X<1?i+(s-i)*Math.pow(Math.sqrt(1-X*X),.72):i}function y(N){return .86*Math.pow(i/N,.35)}function S(N){const X=b(N);return 1.1+X*y(X)*.6}function E(N,X,nt,st){return oe(Math.cos(N)*nt+X*st+c+37,Math.sin(N)*nt+X*st*.7+c+91)}function T(N,X,nt){const st=b(X),yt=y(st),Ft=.84+.2*E(N,X,1.6,.1)+.1*E(N,X,4.1,.29)+.05*E(N,X,9.3,.62),$=st*Ft*(1-(nt||0)),Q=Math.cos(N)*$,ht=Math.sin(N)*$*yt+S(X),ct=m[0]+g[0]*X+x[0]*Q,bt=m[2]+g[2]*X+x[2]*Q,Et=m[1]+ht,Bt=re(ct,bt);return[ct,Math.max(Et,Bt),bt,Ft]}{const N=Oe(e),X=_l(N),nt=Math.asin(et((m[1]+S(0)-Xr(e))/(N*X),-.92,.92)),st=t+(Math.cos(t)>=0?nt:-nt);zc.push({th:st,z:e,rTh:Math.max(.16,i*1.8/Oe(e)),rZ:i*1.7})}if(f){const N=m[0]+g[0]*1.2,X=m[2]+g[2]*1.2;Od.push({p:[N,re(N,X)+2.1,X],c:f,name:n})}const v=new Te,A=1.5,C=[];for(let N=0;N<=h+1e-4;N+=A){const X=[];for(let nt=0;nt<a;nt++){const st=2*Math.PI*nt/a,yt=T(st,N,0),Ft=et((yt[3]-.84)/.34+.45,0,1);X.push(v.addVertex(yt[0],yt[1],yt[2],u(Ft,yt[0],yt[1],yt[2]).multiplyScalar(l).toArray()))}C.push(X)}for(let N=0;N<C.length-1;N++)for(let X=0;X<a;X++){const nt=(X+1)%a;v.addQuad(C[N][X],C[N][nt],C[N+1][nt],C[N+1][X])}const _=m[0]+g[0]*h,M=m[2]+g[2]*h,L=m[1]+S(h)*.6,I=v.addVertex(_,L,M,u(.2,_,L,M).multiplyScalar(l).toArray()),U=C[C.length-1];for(let N=0;N<a;N++)v.addTri(I,U[N],U[(N+1)%a]);const W={name:n,origin:m,dir:g,side:x,uMax:h,uEnd:p,profR:b,pointAt:T,doorFalloff:i*2.2};dr.push(W);const B=m[0]+g[0]*p,q=m[2]+g[2]*p;return W.center=[B,re(B,q),q],{geometry:v.toBufferGeometry(),branch:W}}function wv(){const n=new Me;n.name="underground";const t=Ra("granary",Math.PI,-70,3.3*ao,9,13*1.5,10,30,4001,1,u=>Ev(u),[.55,.4,.2]),e=Ra("brood",0,-120,4.2*ao,8,17*1.5,13,34,5117,1,u=>bv(u),[.68,.5,.25]),i=Ra("midden",0,-40,2.9*ao,7,10*1.5,8,26,6229,.46,u=>Tv(u),[.3,.44,.28]);n.add(new zt(t.geometry,ks())),n.add(new zt(e.geometry,ks())),n.add(new zt(i.geometry,ks()));const r=new Te,s=44,o=1.7,a=[];for(let u=me;u<=3.0001;u+=o){const f=[];for(let d=0;d<s;d++){const m=2*Math.PI*d/s,g=Ni(m,u,0),x=u>-14?1+Math.pow((u+14)/17,2)*.9:1;f.push([g[0]*x,Math.max(g[1]*(x*.5+.5),re(g[0]*x,u)),u,g[3]])}a.push(f)}for(let u=0;u<a.length;u++){const f=[];for(let d=0;d<s;d++){const m=a[u][d],g=et(1-Math.abs(m[2]-fl)/(Ao*1.6),0,1),x=et((m[3]-.84)/.34+.45,0,1),p=oe(m[0]*.13+3,m[2]*.13+8),h=yv(x,g*.45+p*.2);f.push(r.addVertex(m[0],m[1],m[2],h.toArray()))}a[u].idx=f}for(let u=0;u<a.length-1;u++)for(let f=0;f<s;f++){const d=(f+1)%s;pl(2*Math.PI*f/s,a[u][f][2])||r.addQuad(a[u].idx[f],a[u].idx[d],a[u+1].idx[d],a[u+1].idx[f])}{let u=a[0].idx;const f=4;for(let m=1;m<=f;m++){const g=Math.cos(m/f*Math.PI*.5),x=me-Math.sin(m/f*Math.PI*.5)*9,p=[];for(let h=0;h<s;h++){const b=2*Math.PI*h/s,y=a[0][h],S=.86+.28*co(b,x*1.7,2.3,.2),E=y[0]*g*S,T=Xr(me)+(y[1]-Xr(me))*g*S,v=$n(Hi,ls,.15+S*.4).multiplyScalar(.35+.3*S);p.push(r.addVertex(E,Math.max(T,re(E,x)),x,v.toArray()))}for(let h=0;h<s;h++){const b=(h+1)%s;r.addQuad(u[h],u[b],p[b],p[h])}u=p}const d=r.addVertex(0,Xr(me)*.6,me-10,Hi.clone().multiplyScalar(.3).toArray());for(let m=0;m<s;m++)r.addTri(d,u[m],u[(m+1)%s])}const c=new zt(r.toBufferGeometry(),ks());c.name="tunnel",n.add(c);const l=Od.slice();return l.push({p:[0,5,3],c:[1.15,1.2,1.35],name:"mouth"}),{group:n,doorLights:l,rooms:{granary:t.branch,brood:e.branch,midden:i.branch}}}let Ca=null;function ks(){return Ca||(Ca=cs({map:Id(),strength:.62,side:he})),Ca}const be={x0:-208,x1:400,z0:0,z1:460},ts={x0:-300,x1:470,z0:0,z1:540},ui=-4.5,pn=n=>{const t=et(n,0,1);return t*t*(3-2*t)},ln={edgeX:-196,bankTop:2,bankRun:15,depth:5,bedRun:30,farBankAt:68,farBankRun:46,farBankTop:24,blendRun:36};function Yi(n){return ln.edgeX+2*Math.sin(n*.021)+1*Math.sin(n*.047+1.3)}const ue={x:332,z:112,r:31,y:-7.2,depth:3.6,bedRun:24,bankTop:-5,bankRun:14,blendRun:20};function ko(n,t){return Math.hypot(n-ue.x,t-ue.z)-ue.r}function Av(n){return n<=0?ue.y+(ue.bankTop-ue.y)*pn(-n/ue.bankRun):ue.y-ue.depth*pn(n/ue.bedRun)}function Kn(n,t){return Math.min(n-Yi(t),ko(n,t))}function Rv(n,t){return t<Be?null:n-Yi(t)<0?ln:ko(n,t)<0?ue:null}function Cv(n,t){const e=Rv(n,t);return e?e===ue?ue.y:ui:null}function Pv(n,t){return ko(n,t)<n-Yi(t)?ue.y:ui}function Lv(n){if(n<=0)return ui+(ln.bankTop-ui)*pn(-n/ln.bankRun);let t=ui-ln.depth*pn(n/ln.bedRun);return n>ln.farBankAt&&(t+=ln.farBankTop*pn((n-ln.farBankAt)/ln.farBankRun)),t}const Ou=[{x:0,z:20,r:64,amp:-3.5},{x:62,z:78,r:62,amp:16},{x:96,z:44,r:40,amp:9},{x:88,z:168,r:78,amp:-14},{x:88,z:168,r:30,amp:4},{x:-85,z:95,r:46,amp:6},{x:-85,z:95,r:26,amp:1.5},{x:-150,z:150,r:66,amp:13},{x:-132,z:44,r:50,amp:8},{x:24,z:128,r:44,amp:-8},{x:236,z:300,r:118,amp:26},{x:300,z:214,r:88,amp:18},{x:40,z:330,r:120,amp:-5},{x:96,z:386,r:70,amp:4},{x:340,z:118,r:76,amp:-16},{x:340,z:118,r:26,amp:5},{x:384,z:328,r:92,amp:21},{x:-40,z:520,r:190,amp:38},{x:190,z:512,r:175,amp:34},{x:468,z:190,r:165,amp:34},{x:440,z:420,r:130,amp:26}];function Bu(n,t){let e=(oe(n*.012,t*.012)-.5)*4.2+(oe(n*.052,t*.052)-.5)*1.3;for(let i=0;i<Ou.length;i++){const r=Ou[i],s=Math.hypot(n-r.x,t-r.z);s>=r.r||(e+=r.amp*pn(1-s/r.r))}return e}function Ot(n,t){if(t<Be)return re(n,t);const e=n-Yi(t),i=1-pn(e/ln.blendRun);let r=i>0?wt(Bu(n,t),Lv(-e),i):Bu(n,t);const s=ko(n,t);if(s<ue.blendRun){const a=1-pn(s/ue.blendRun);a>0&&(r=wt(r,Av(-s),a))}const o=(1-pn(t/26))*et(1-Math.abs(n)/40,0,1);return o>0?wt(r,re(n,0),o):r}function us(n,t){return ne([Ot(n-1.4,t)-Ot(n+1.4,t),2*1.4,Ot(n,t-1.4)-Ot(n,t+1.4)])}function Lr(n,t){const i=(Ot(n+1.5,t)-Ot(n-1.5,t))/3,r=(Ot(n,t+1.5)-Ot(n,t-1.5))/(2*1.5);return Math.hypot(i,r)}function gi(n,t){const e=Cv(n,t);return e===null?0:Math.max(0,e-Ot(n,t))}const Bd=.62;function xl(n,t){const e=oe(n*.006,t*.006),i=et(oe(n*.018,t*.018)*2.3-.55+(e-.5)*.6,0,1)*(.55+.45*oe(n*.07,t*.07)),r=gi(n,t),s=Kn(n,t),o=Lr(n,t);let a="soil";return r>0?a="water":s<14?a="sand":o>Bd?a="rock":i>.5&&(a="moss"),{kind:a,moss:i,slope:o,depth:r,toWater:s}}function Iv(n,t){const e=xl(n,t);return{y:Ot(n,t),normal:us(n,t),slope:e.slope,soil:e.kind,moss:e.moss,waterDepth:e.depth,distToWater:e.toWater,diggable:e.depth===0&&e.slope<=Bd&&e.toWater>10}}function kc(n,t){const e=Yi(t)+1;return[et(Math.max(n,e),be.x0,be.x1),et(t,be.z0,be.z1)]}const Dv=new J("#86673B"),Uv=new J("#5A4529"),Nv=new J("#5F8034"),Fv=new J("#9DBE58"),Ov=new J("#A79463"),Bv=new J("#4A5540"),zv=new J("#7C7566");function dn(n,t,e){return new J(n).lerp(t,et(e,0,1))}const Hs=6;function kv(){const{x0:n,x1:t,z0:e,z1:i}=ts,r=Math.floor((t-n)/Hs)+1,s=Math.floor((i-e)/Hs)+1,o=new Te;for(let c=0;c<r;c++)for(let l=0;l<s;l++){const u=n+c*Hs,f=e+l*Hs,d=Ot(u,f),m=oe(u*.006,f*.006),g=et(oe(u*.018,f*.018)*2.3-.55+(m-.5)*.6,0,1)*(.55+.45*oe(u*.07,f*.07));let x=dn(dn(Dv,Uv,oe(u*.09,f*.09)),dn(Nv,Fv,oe(u*.05,f*.05)),g);const p=Kn(u,f);if(p<30){x=dn(x,Ov,pn((30-p)/26));const b=Pv(u,f);d<b+.6&&(x=dn(x,Bv,pn((b+.6-d)/3.5)))}const h=Lr(u,f);h>.45&&(x=dn(x,zv,pn((h-.45)/.5)*.75)),o.addVertex(u,d,f,x.toArray())}for(let c=0;c<r-1;c++)for(let l=0;l<s-1;l++){const u=c*s+l,f=(c+1)*s+l,d=(c+1)*s+l+1,m=c*s+l+1;o.addQuad(u,f,d,m)}const a=new zt(o.toBufferGeometry(),cs({map:fv(),strength:.8,side:he}));return a.name="lawn",a.receiveShadow=!0,a}const Hv=new J("#9CC6E4"),Gv=`
uniform float uWaveTime;
vec2 waterWaveGrad(vec3 p, out float h) {
  float a = p.x * 0.085 + uWaveTime * 1.05;
  float b = p.z * 0.115 - uWaveTime * 0.77 + p.x * 0.04;
  float c = p.z * 0.031 + uWaveTime * 0.31;
  h = sin(a) * 0.24 + sin(b) * 0.17 + sin(c) * 0.30;
  return vec2(cos(a) * 0.24 * 0.085 + cos(b) * 0.17 * 0.04,
              cos(b) * 0.17 * 0.115 + cos(c) * 0.30 * 0.031);
}
`;function Vv(){const{x0:n,z0:t,z1:e}=ts,i=56,r=14,s=new Te,o=new J("#3E6B7A"),a=new J("#22414F");for(let h=0;h<=i;h++){const b=t+(e-t)*(h/i),y=Yi(b)+1.2;for(let S=0;S<=r;S++){const E=wt(n,y,S/r),T=et((ui-Ot(E,b))/6,0,1);s.addVertex(E,ui,b,dn(o,a,T).toArray())}}for(let h=0;h<i;h++)for(let b=0;b<r;b++){const y=h*(r+1)+b;s.addQuad(y+r+1,y+r+2,y+1,y)}const c=new rn({vertexColors:!0,roughness:.16,metalness:0,transparent:!0,opacity:.86,side:he}),l={uWaveTime:{value:0},uSkyCol:{value:Hv}};c.userData.waterUniforms=l,c.userData.shaderTag="water-ripple",c.onBeforeCompile=h=>{Object.assign(h.uniforms,l),h.vertexShader=h.vertexShader.replace("#include <common>",Gv+`
#include <common>`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        float wh; vec2 wg = waterWaveGrad(position, wh);
        objectNormal = normalize(vec3(-wg.x, 1.0, -wg.y));`).replace("#include <begin_vertex>",`#include <begin_vertex>
        transformed.y += wh;`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`uniform vec3 uSkyCol;
#include <common>`).replace("#include <tonemapping_fragment>",`
        {
          float fres = pow(1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0), 3.0);
          gl_FragColor.rgb = mix(gl_FragColor.rgb, uSkyCol, 0.13 + 0.72 * fres);
        }
        #include <tonemapping_fragment>`)},c.customProgramCacheKey=()=>"water-ripple";const u=new Te,f=6,d=26,m=.9,g=u.addVertex(ue.x,ue.y,ue.z,a.toArray()),x=[];for(let h=1;h<=f;h++){const b=(ue.r+m)*(h/f),y=[];for(let S=0;S<d;S++){const E=2*Math.PI*S/d,T=ue.x+Math.cos(E)*b,v=ue.z+Math.sin(E)*b,A=et((ue.y-Ot(T,v))/4,0,1);y.push(u.addVertex(T,ue.y,v,dn(o,a,A).toArray()))}x.push(y)}for(let h=0;h<d;h++){const b=(h+1)%d;u.addTri(g,x[0][b],x[0][h]);for(let y=0;y<f-1;y++)u.addQuad(x[y][h],x[y][b],x[y+1][b],x[y+1][h])}const p=new Me;p.name="water";for(const h of[s.toBufferGeometry(),u.toBufferGeometry()]){const b=new zt(h,c);b.receiveShadow=!1,p.add(b)}return{mesh:p,update(h){l.uWaveTime.value=h}}}const Wv=[{r:442,segs:96,base:-120,peak:165,seed:3.1,rough:.55,haze:.72,tint:"#8FA6C4"},{r:384,segs:96,base:-120,peak:118,seed:11.7,rough:.75,haze:.5,tint:"#6E86A6"}];function zu(n,t,e){const i=oe(Math.cos(n)*2.1+t,Math.sin(n)*2.1+t),r=oe(Math.cos(n)*5.3+t*2,Math.sin(n)*5.3+t*2),s=oe(Math.cos(n)*11+t*3,Math.sin(n)*11+t*3);return et(.3+(i-.5)*1.5+(r-.5)*e+(s-.5)*e*.45,.05,1)}function Xv(n="#8B8399",t="#AFC8D8"){const e=new J(n),i=new J(t),r=new Me;r.name="horizon";const s=[];for(const a of Wv){const c=new Te,l=[],u=new J(a.tint),f=[],d=[],m=[];for(let x=0;x<=a.segs;x++){const p=x/a.segs*Math.PI*2,h=zu(p,a.seed,a.rough),b=a.base+(a.peak-a.base)*h,y=Math.cos(p)*a.r,S=Math.sin(p)*a.r,E=zu(p-.04,a.seed,a.rough),T=et(.5+(h-E)*6,0,1),v=dn(u.clone().multiplyScalar(.72),u.clone().multiplyScalar(1.16),T),A=M=>{const L=dn(v,M,a.haze*.75),I=dn(v.clone().multiplyScalar(.85),M,Math.min(1,a.haze+.22));return[L,dn(L,I,.6),I]},C=A(e),_=A(i);f.push(c.addVertex(y,b,S,C[0].toArray())),d.push(c.addVertex(y,wt(a.base,b,.45),S,C[1].toArray())),m.push(c.addVertex(y,a.base,S,C[2].toArray()));for(const M of _)l.push(M.r,M.g,M.b)}for(let x=0;x<a.segs;x++)c.addQuad(f[x],f[x+1],d[x+1],d[x]),c.addQuad(d[x],d[x+1],m[x+1],m[x]);const g=new zt(c.toBufferGeometry(),new No({vertexColors:!0,fog:!1,side:he,depthTest:!1,depthWrite:!1}));g.renderOrder=-1e3,g.frustumCulled=!1,r.add(g),s.push({mesh:g,base:g.geometry.attributes.color.array.slice(),alt:new Float32Array(l)})}let o=-1;return{group:r,update(a,c=0){if(r.position.set(a.position.x,0,a.position.z),!(Math.abs(c-o)<.002)){o=c;for(const l of s){const u=l.mesh.geometry.attributes.color;for(let f=0;f<u.array.length;f++)u.array[f]=l.base[f]+(l.alt[f]-l.base[f])*c;u.needsUpdate=!0}}}}}const Yr={position:new k(0,0,0),radius:.9};function zd(n){return n<42?Math.min(Math.max(n/40,.55),1.45):Math.min(Math.max(2.1+(n-42)*.038,2.1),4.4)}function Yv(n){return zd(n)*.5}function pi(n,t){const e=Math.cos(n.ang),i=Math.sin(n.ang),r=t*t*n.h*.26;return[n.x+e*r,n.baseY+n.h*t*(1-t*.13),n.z+i*r]}function Ro(n,t){const e=pi(n,t),i=pi(n,Math.min(t+.01,1)),r=ne(qn(i,e)),s=[-Math.sin(n.ang),0,Math.cos(n.ang)],o=ne(Ke(r,s));return{pos:e,tangent:r,width:s,normal:o}}const Pa=6;function qv(){const n=[],t=[],e=[],i=[];for(let s=0;s<=Pa;s++){const o=s/Pa;n.push(-.5,o,0,.5,o,0),t.push(o,o),e.push(-1,1)}for(let s=1;s<=Pa;s++){const o=(s-1)*2,a=o+1,c=s*2,l=c+1;i.push(o,a,l,o,l,c)}const r=new mn;return r.setAttribute("position",new ve(n,3)),r.setAttribute("aT",new ve(t,1)),r.setAttribute("aSide",new ve(e,1)),r.setIndex(i),r}const $v=new J("#5A7331"),Kv=new J("#8FB055"),jv=new J("#C6DC82"),ku=`
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
`;function kd({count:n=3400,seed:t=7}={}){const e=os(t),i=qv(),r=new Float32Array(n*3),s=new Float32Array(n),o=new Float32Array(n),a=new Float32Array(n),c=new Float32Array(n*3),l=new Float32Array(n),u=new Float32Array(n),f=[];let d=0,m=0;for(;d<n&&m<n*8;){m++;const C=wt(ts.x0+8,be.x1-4,e()),_=6+e()*(be.z1-6);if(gi(C,_)>0||Math.abs(C)<16&&_<34&&e()<.82)continue;const L=.72+.28*oe(C*.01,_*.01),I=e()<.22?48+e()*60*L:(14+e()*26)*L,U=e()*Math.PI*2,W=Ot(C,_),B=new J(Kv).lerp(jv,e());r[d*3]=C,r[d*3+1]=W,r[d*3+2]=_,s[d]=I,o[d]=U,a[d]=e()*Math.PI*2,c[d*3]=B.r,c[d*3+1]=B.g,c[d*3+2]=B.b,l[d]=zd(I),u[d]=(e()*2-1)*.85,f.push({x:C,z:_,h:I,baseY:W,w:Yv(I),ang:U}),d++}const g=d;i.setAttribute("aBase",new Rn(r.subarray(0,g*3),3)),i.setAttribute("aH",new Rn(s.subarray(0,g),1)),i.setAttribute("aAng",new Rn(o.subarray(0,g),1)),i.setAttribute("aPhase",new Rn(a.subarray(0,g),1)),i.setAttribute("aTip",new Rn(c.subarray(0,g*3),3)),i.setAttribute("aWidth",new Rn(l.subarray(0,g),1)),i.setAttribute("aTwist",new Rn(u.subarray(0,g),1));const x=(ts.x0+be.x1)/2,p=(be.z0+be.z1)/2,h=Math.hypot(be.x1-x,be.z1-p)+120;i.boundingSphere=new Cr(new k(x,40,p),h);const b={uTime:{value:0},uWind:{value:.55},uAntPos:{value:new k(0,0,-9999)},uAntRadius:{value:.9},uBaseColor:{value:new J($v)},uOccNear:{value:5},uOccFar:{value:16},uTransl:{value:.16},uCastA:{value:new k(0,0,0)},uCastB:{value:new k(0,0,0)},uCastRadius:{value:46}},y=new rn({roughness:.85,metalness:0,side:he});y.extensions={derivatives:!0},y.onBeforeCompile=C=>{Object.assign(C.uniforms,b),C.vertexShader=C.vertexShader.replace("#include <common>",ku+`
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
      `),C.fragmentShader=C.fragmentShader.replace("#include <common>",`
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
      `)};const S=new Rd({depthPacking:cd,side:he});S.onBeforeCompile=C=>{Object.assign(C.uniforms,b),C.vertexShader=C.vertexShader.replace("#include <common>",ku+`
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
      `)},S.customProgramCacheKey=()=>"grass-depth";const E=new Cd(i,y,g);E.name="grass",E.castShadow=!0,E.receiveShadow=!0,E.customDepthMaterial=S;const T=new Qt;for(let C=0;C<g;C++)E.setMatrixAt(C,T);E.instanceMatrix.needsUpdate=!0;function v(C,_,M){b.uTime.value=_,b.uAntPos.value.copy(Yr.position),b.uAntRadius.value=Yr.radius,b.uCastA.value.copy(Yr.position),M&&b.uCastB.value.copy(M.position)}function A(C){b.uCastRadius.value=C}return{mesh:E,footprints:f,update:v,setCastRadius:A}}const Gt={x:-85,z:95,h:340,ang:Math.PI/2,w:22};Gt.baseY=Ot(Gt.x,Gt.z);const Zv=new J("#5a4226"),Jv=new J("#332412"),Hd=new J("#4a3418"),La=new J(Zv).lerp(Hd,.3),Ia=new J(Jv).lerp(Hd,.55),Hu=new J("#6C8E3C"),Gu=new J("#AECB6E");function Gs(n,t,e){return new J(n).lerp(t,et(e,0,1))}const Pn=.8,Qv=6.2;function Fi(n){return pi(Gt,n)}function Hc(n){const t=Fi(n),e=Fi(Math.min(n+.01,1)),i=ne(qn(e,t)),r=Math.abs(i[1])<.97?[0,1,0]:[1,0,0],s=ne(Ke(r,i));return{p:t,x:s,z:Ke(s,i)}}function Gi(n){return wt(Gt.w,Qv,Math.pow(et(n,0,Pn)/Pn,.7))}const vl=Pn*.55,Vu=Math.PI*1.511,tM=98,eM=36,nM=9.6,Gd=5,Gc=Hc(vl),Vd=ne(se(Rt(Gc.x,Math.cos(Vu)),Rt(Gc.z,Math.sin(Vu)))),iM=se(Gc.p,Rt(Vd,Gi(vl)*.7));function qr(n){const t=1-(1-n)*(1-n);return se(iM,se(Rt(Vd,n*tM),[0,t*eM,0]))}function Wd(n){return wt(nM,Gd,et(n,0,1))}function Xd(n){const t=qr(et(n-.005,0,1)),e=qr(et(n+.005,0,1)),i=ne(qn(e,t)),r=ne(Ke(i,[0,1,0])),s=ne(Ke(r,i));return{pos:qr(n),fwd:i,side:r,up:s}}const Ln={splitT:vl,point:qr,radius:Wd,basis:Xd,tipPos:qr(1),tipRadius:Gd};Gt.walkBranch=Ln;function Wu(n){const t=new Te,e=new Te,i=os(n?481001:481002),r=n?20:4,s=n?16:6,o=[];for(let g=0;g<=r;g++){const x=g/r*Pn,p=Hc(x),h=Gi(x),b=[];for(let y=0;y<s;y++){const S=2*Math.PI*y/s,E=n?.86+.1*oe(Math.cos(S)*2.2+x*13,Math.sin(S)*2.2+x*13+30)+.06*oe(Math.cos(S)*6.4+x*29+8,Math.sin(S)*6.4+x*29+51):1,T=h*E,v=se(p.p,se(Rt(p.x,Math.cos(S)*T),Rt(p.z,Math.sin(S)*T))),A=et((E-.86)/.2+.4,0,1),C=Gs(Ia,La,A);b.push(t.addVertex(v[0],v[1],v[2],C.toArray()))}o.push(b)}for(let g=0;g<o.length-1;g++)for(let x=0;x<s;x++){const p=(x+1)%s;t.addQuad(o[g][x],o[g][p],o[g+1][p],o[g+1][x])}const a=Bo(n?7:5),c=Tr(n?8:6,n?5:4),l=Gs(Hu,Gu,.42);function u(g,x,p){const h=x*(.9+i()*.3),b=x*(.75+i()*.25),y={x:[h,0,0],y:[0,b,0],z:[0,0,h],p:g};e.bake(c,y,()=>(n?Gs(Hu,Gu,p):l).toArray())}const f=n?10:3,d=n?10:5,m=[];for(let g=0;g<=f;g++){const x=g/f,p=Xd(x),h=Wd(x),b=[];for(let y=0;y<d;y++){const S=2*Math.PI*y/d,E=n?.9+.1*oe(Math.cos(S)*2.4+x*11+100,Math.sin(S)*2.4+x*11+44):1,T=h*E,v=se(p.pos,se(Rt(p.side,Math.cos(S)*T),Rt(p.up,Math.sin(S)*T))),A=Gs(Ia,La,et((E-.9)/.1,0,1));b.push(t.addVertex(v[0],v[1],v[2],A.toArray()))}m.push(b)}for(let g=0;g<m.length-1;g++)for(let x=0;x<d;x++){const p=(x+1)%d;t.addQuad(m[g][x],m[g][p],m[g+1][p],m[g+1][x])}if(n){const g=Fi(0),x=Gt.w;for(let h=0;h<4;h++){const b=h/4*Math.PI*2+i()*.5,y=x*1.6+i()*3,S=[g[0],g[1]+x*.7,g[2]],E=[g[0]+Math.cos(b)*y,g[1]-1.6,g[2]+Math.sin(b)*y],T=Ye(S,E,x*.5);t.bake(a,T,()=>Ia.toArray())}const p=5;for(let h=0;h<p;h++){const b=Pn*(.6+h/p*.35+i()*.03),y=Hc(b),S=h/p*Math.PI*2+i()*.7,E=ne(se(Rt(y.x,Math.cos(S)),Rt(y.z,Math.sin(S)))),T=ne(se(Rt(E,.7),[0,.7,0])),v=se(y.p,Rt(E,Gi(b)*.7)),A=34+i()*22,C=se(v,Rt(T,A)),_=3.4+i()*1.4,M=Ye(v,C,_),L=new J(La).multiplyScalar(.9);t.bake(a,M,()=>L.toArray()),u(C,30+i()*13,i()),u(se(v,Rt(qn(C,v),.55)),22+i()*9,i())}u(se(Fi(Pn),[0,12,0]),34,.5)}else u(se(Fi(Pn),[-14,14,6]),55,.5),u(se(Fi(Pn),[18,22,-8]),48,.5);return{bark:t.toBufferGeometry(),leaf:e.toBufferGeometry()}}const rM=130,sM=170;function oM(){const n=cs({map:dv(),strength:1,roughness:.92,side:he}),t=new rn({vertexColors:!0,roughness:.92,metalness:0,side:he}),e=Wu(!0),i=Wu(!1),r=new Me;r.add(new zt(e.bark,n),new zt(e.leaf,t));const s=new Me;s.add(new zt(i.bark,n),new zt(i.leaf,t));for(const l of r.children)l.castShadow=!0,l.receiveShadow=!0;for(const l of s.children)l.castShadow=!0;s.visible=!1;const o=new Me;o.name="tree",o.add(r,s);let a=!0;function c(l){const u=Math.hypot(l.position.x-Gt.x,l.position.z-Gt.z);a&&u>sM?a=!1:!a&&u<rM&&(a=!0),r.visible=a,s.visible=!a}return{group:o,update:c}}const wr=8,aM=.3,lo=[];function Sn(n,t){const e={p:[n[0],n[1],n[2]],c:[t[0],t[1],t[2]],_d:0};return lo.push(e),e}const Ai=new Float32Array(wr*3),Ri=new Float32Array(wr*3),Li=new de(0,0,0,1),Co=new de(0,1,0,0),cM={uLightPos:{value:Ai},uLightCol:{value:Ri},uPitA:{value:Li},uPitB:{value:Co}};function lM(n,t,e,i,r){Li.set(n,t,e,Math.max(i,.001)),Co.set(1,Math.max(r,.001),0,0)}function Vc(n,t,e){if(Co.x<.5)return 0;const i=a=>{const c=Math.min(1,Math.max(0,a));return c*c*(3-2*c)},r=Math.hypot(n-Li.x,e-Li.z),s=1-i((r-Li.w*.9)/(Li.w*.8)),o=Math.min(1,Math.max(0,(Li.y-t)/Co.y));return s*i((o-.04)/.46)}function uM(n){const t=n.x,e=n.y,i=n.z;for(let s=0;s<lo.length;s++){const o=lo[s],a=o.p[0]-t,c=o.p[1]-e,l=o.p[2]-i;o._d=a*a+c*c+l*l}const r=lo.slice().sort((s,o)=>s._d-o._d);for(let s=0;s<wr;s++){const o=r[s];o?(Ai[s*3]=o.p[0],Ai[s*3+1]=o.p[1],Ai[s*3+2]=o.p[2],Ri[s*3]=o.c[0],Ri[s*3+1]=o.c[1],Ri[s*3+2]=o.c[2]):(Ai[s*3]=Ai[s*3+1]=Ai[s*3+2]=0,Ri[s*3]=Ri[s*3+1]=Ri[s*3+2]=0)}}function hM(n,t,e){if(e>=Be)return .9;const i=Math.max(0,Math.min(1,(e-me)/(Be-me)));return .12+.88*Math.pow(i,1.6)}const dM=`
uniform vec3 uLightPos[${wr}];
uniform vec3 uLightCol[${wr}];
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
`;function Ho(n){if(!n||n.userData.nestShaded)return n;n.userData.nestShaded=!0;const t=n.onBeforeCompile;n.onBeforeCompile=function(i,r){t&&t.call(this,i,r),Object.assign(i.uniforms,cM),i.vertexShader=i.vertexShader.replace("#include <common>",`varying vec3 vNestWorld;
#include <common>`).replace("#include <project_vertex>",`#include <project_vertex>
  vec4 nestLocal = vec4(transformed, 1.0);
  #ifdef USE_INSTANCING
    nestLocal = instanceMatrix * nestLocal;
  #endif
  vNestWorld = (modelMatrix * nestLocal).xyz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",dM+`
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
          reflectedLight.indirectDiffuse *= max(nestDay, ${aM.toFixed(2)});
          vec3 nestSum = vec3(0.0);
          for (int i = 0; i < ${wr}; i++) {
            vec3 Ld = uLightPos[i] - vNestWorld;
            float d = length(Ld);
            float att = 1.0 / (1.0 + d * d * 0.017);
            nestSum += uLightCol[i] * max(dot(normal, Ld / max(d, 0.001)), 0.0) * att;
          }
          reflectedLight.directDiffuse += diffuseColor.rgb * nestSum;
        }
      `)};const e=n.userData.shaderTag||"";return n.customProgramCacheKey=()=>"nest-shading|"+e,n.needsUpdate=!0,n}const ze=n=>new J(n).toArray(),en=(n,t)=>[n[0]*t,n[1]*t,n[2]*t],ii=(n,t,e,i)=>[n[0]*t,n[1]*e,n[2]*i],si=(n,t,e)=>[wt(n[0],t[0],e),wt(n[1],t[1],e),wt(n[2],t[2],e)],fM=ze("#6d5130"),pM=ze("#5a4226"),$r=ze("#332412"),uo=ze("#4c5f2f"),Da=ze("#6a6154"),mM="#5E4526",gM=ze("#4a3418"),Xu=ze(mM),Yu=ze("#efdcb0"),qu=ze("#7a6040"),_M=ze("#ffc46a"),Ua=ze("#c497d9"),xM=ze("#e0a752"),$u=si(ze("#e07356"),ze("#e6b558"),.5),vM=ze("#9db0d8"),MM=en(si(uo,$r,.62),.58),SM=en($r,.7),Na=[.72,.48,1.75],yM=[1.95,1.2,.52],hi=[],Wn=[];function Yd(n){return n.r*.65}function EM(n){const t=new Te,e=new Te,i=new Te,r=os(20260812),s=Tr(10,7),o=Tr(6,4),a=Bo(8),c=(E,T,v,A)=>Oi([E,0,0],[0,T,0],[0,0,v],A);{const v=[];for(let A=0;A<=9;A++){const C=[];for(let _=0;_<=30;_++){const M=2*Math.PI*_/30,L=Bc*1.02*A/9,I=ee[0]+Math.cos(M)*L,U=ee[2]+Math.sin(M)*L,W=re(I,U)+.08,B=si(fM,pM,et(.3+oe(I*.2,U*.2)*.5,0,1));C.push(t.addVertex(I,W,U,en(B,.65+.35*(1-A/9))))}v.push(C)}for(let A=0;A<9;A++)for(let C=0;C<30;C++)t.addQuad(v[A][C],v[A][C+1],v[A+1][C+1],v[A+1][C])}const l=en(gM,.8);function u(E,T,v,A,C,_){let L=null;for(let I=0;I<=8;I++){const U=I/8,W=Math.sin(U*Math.PI),B=wt(T,v,U),q=Ni(B,E+_*W,C*W);L&&t.bake(a,Ye(L,q,A*(.65+.5*W)),()=>l),L=q}}for(let E=0;E<30;E++){const T=me+8+r()*(Math.abs(me)-16),v=Math.PI*(.15+r()*.7);u(T,v,v+.5+r()*1.3,.5+r()*.9,.06+r()*.16,(r()-.5)*9)}const f=en(Xu,.55);for(let E=0;E<150;E++){const T=me+5+r()*(Math.abs(me)-10),v=Math.PI*(.18+r()*.64),A=Ni(v,T,.02),C=1.2+r()*(Oe(T)>16?7:3),_=[A[0]+(r()-.5)*.8,A[1]-C,A[2]+(r()-.5)*.8];t.bake(a,Ye(A,_,.09+r()*.1),()=>f)}for(let E=0;E<520;E++){const T=me+3+r()*(Math.abs(me)-5),v=r()*Math.PI*2,A=Ni(v,T,.01),C=.22+r()*.55,_=en(qu,(.7+r()*.7)*(.5+r()*.5));t.bake(o,c(C,C*.8,C,A),()=>_)}for(let E=0;E<120;E++){const T=me+5+r()*(Math.abs(me)-8),v=Oe(T)*.7,A=(r()-.5)*2*v,C=.3+r()*.9,_=en(Da,(.6+r()*.8)*.8);i.bake(o,c(C*1.3,C*.7,C*1.1,[A,re(A,T)+C*.3,T]),()=>_)}function d(E,T,v,A,C,_,M){if(Math.hypot(E-Oc[0],T-Oc[1])<15)return;const L=ii(C,.3,.28,.4),I=M||ii(C,.95,.62,1.15);for(let U=0;U<v;U++){const W=E+(r()-.5)*7,B=T+(r()-.5)*7,q=A*(.45+r()*.9),N=re(W,B),X=[W,N+1.7*q,B];t.bake(a,Ye([W,N,B],X,.22*q),()=>L),e.bake(s,c(1.15*q,.8*q,1.15*q,X),()=>I),hi.push({x:W,z:B,r:1.15*q+.5})}Sn([E,re(E,T)+2.4,T],_)}for(let E=0;E<9;E++){const T=-14-E*10.5;d((E%2?1:-1)*(3.5+r()*1.8),T,4+Math.floor(r()*4),1.3,Ua,Na)}for(let E=0;E<8;E++){const T=r()*Math.PI*2,v=17+r()*9;let A=ee[0]+Math.cos(T)*v;const C=ee[2]+Math.sin(T)*v,_=Oe(C)*.72;Math.abs(A)>_&&(A=Math.sign(A)*_),d(A,C,5+Math.floor(r()*5),1.9,Ua,Na)}const m=en(Xu,.36),g=ii(_M,1.25,1.15,1.4);for(let E=0;E<26;E++){const T=Math.PI*(.2+r()*.6),v=fl+(r()-.5)*Ao*1.5,A=Ni(T,v,.03),C=[A[0],A[1]-(3+r()*11),A[2]];t.bake(a,Ye(A,C,.07),()=>m);const _=.55+r()*.75;e.bake(s,c(_,_*1.25,_,C),()=>g),E%3===0&&Sn(C,yM)}const x=ii(Yu,.76,.7,.58);for(let E=0;E<5;E++){const T=Math.PI*(.15+E*.42),v=8+r()*5,A=ee[0]+Math.cos(T)*v,C=ee[2]+Math.sin(T)*v;for(let _=0;_<22;_++){const M=A+(r()-.5)*5.5,L=C+(r()-.5)*5.5,I=.5+r()*.35;t.bake(s,c(I*.72,I*.72,I*1.5,[M,re(M,L)+I*.6,L]),()=>x)}Sn([A,re(A,C)+1.5,C],[.55,.42,.22])}if(Sn([ee[0],re(ee[0],ee[2])+9,ee[2]],[1.5,1.05,.5]),n&&n.granary){const E=n.granary;for(let v=0;v<5;v++){const A=(r()-.5)*Math.PI*1.6,C=et(E.uEnd+(r()-.5)*E.uMax*.5,E.uMax*.42,E.uMax*.96),_=E.pointAt(A,C,.12);for(let M=0;M<26;M++){const L=_[0]+(r()-.5)*4.5,I=_[2]+(r()-.5)*4.5,U=.5+r()*1.3,W=et(1-Math.hypot(L-_[0],I-_[2])/4.5,0,1),B=en(si(si(xM,$u,r()*.4),$r,W*.5),.55+.35*(1-W));t.bake(o,c(U,U*.85,U,[L,re(L,I)+U*.4,I]),()=>B)}}const T=ii($u,.94,.81,.51);for(let v=0;v<10;v++){const A=(r()-.5)*Math.PI*1.5,C=et(E.uEnd+(r()-.5)*E.uMax*.55,4,E.uMax-2),_=r()<.5,M=E.pointAt(A,C,_?.85:.06),L=.5+r()*.7,I=_?M[1]-L*(.6+r()*1.6):re(M[0],M[2])+L*.55;t.bake(s,c(L*.8,L*1.3,L*.8,[M[0],I,M[2]]),()=>T)}for(let v=0;v<2;v++){const A=E.pointAt(0,2+r()*4,.3);Sn([A[0],re(A[0],A[2])+2.2,A[2]],[.42,.3,.14])}}if(n&&n.brood){const E=n.brood,T=[.34,.5,.68],v=[1,1.55,1.15],A=ii(vM,.42,.4,.46);for(let C=0;C<7;C++){const _=(r()-.5)*Math.PI*1.7,M=et(E.uEnd+(r()-.5)*E.uMax*.6,E.uMax*.32,E.uMax*.97),L=E.pointAt(_,M,.1),I=re(L[0],L[2]),U=14+Math.floor(r()*14);for(let W=0;W<U;W++){const B=Math.floor(r()*3),q=T[B]+r()*.22,N=L[0]+(r()-.5)*4.6,X=L[2]+(r()-.5)*4.6,nt=(.85+r()*.25)*.85,st=ii(Yu,nt,nt*.94,nt*.8);t.bake(s,c(q*.75,q*.75,q*1.5*v[B],[N,re(N,X)+q*.6,X]),()=>st)}if(C%2===0){const W=4+Math.floor(r()*3);for(let B=0;B<W;B++){const q=r()*Math.PI*2,N=q+1.4+r()*1.2,X=2.2+r()*1.2,nt=[L[0]+Math.cos(q)*X,I+.5+r()*1,L[2]+Math.sin(q)*X],st=[L[0]+Math.cos(N)*X,I+.5+r()*1,L[2]+Math.sin(N)*X];t.bake(a,Ye(nt,st,.03),()=>A)}}Sn([L[0],I+1.6,L[2]],[.62,.46,.24])}for(let C=0;C<2;C++){const _=(r()-.5)*Math.PI*1.4,M=et(E.uEnd+(r()-.5)*E.uMax*.4,4,E.uMax-2),L=E.pointAt(_,M,.1);d(L[0],L[2],2+Math.floor(r()*2),1.1,Ua,Na)}}if(n&&n.midden){const E=n.midden,T=si(uo,$r,.5),v=en(si(uo,$r,.3),3.5),A=[.3,.46,.3];for(let M=0;M<3;M++){const L=(r()-.5)*Math.PI*1.6,I=et(E.uEnd+(r()-.5)*E.uMax*.5,4,E.uMax-2),U=E.pointAt(L,I,.08);d(U[0],U[2],3+Math.floor(r()*3),1,T,A,v)}for(let M=0;M<4;M++){const L=(r()-.5)*Math.PI*1.7,I=et(E.uEnd+(r()-.5)*E.uMax*.55,3,E.uMax-1.5),U=E.pointAt(L,I,.1);for(let W=0;W<20;W++){const B=U[0]+(r()-.5)*5,q=U[2]+(r()-.5)*5,N=.4+r()*1.1,X=en(r()<.5?Da:qu,(.3+r()*.35)*.55);i.bake(o,c(N*1.2,N*.7,N,[B,re(B,q)+N*.3,q]),()=>X)}}const C=en(SM,.5);for(let M=0;M<5;M++){const L=(r()-.5)*Math.PI*1.6,I=et(E.uEnd+(r()-.5)*E.uMax*.5,3,E.uMax-1.5),U=E.pointAt(L,I,.12),W=re(U[0],U[2]),B=2.2+r()*2.2,q=r()*Math.PI*2;t.bake(a,Ye([U[0],W+.35,U[2]],[U[0]+Math.cos(q)*B,W+.3,U[2]+Math.sin(q)*B],.55+r()*.35),()=>C)}const _=ii(MM,.3,.36,.3);for(let M=0;M<6;M++){const L=(r()-.5)*Math.PI*1.6,I=et(E.uEnd+(r()-.5)*E.uMax*.55,3,E.uMax-1.5),U=E.pointAt(L,I,.05),W=1+r()*1.6;t.bake(s,c(W,.12,W,[U[0],re(U[0],U[2])+.03,U[2]]),()=>_)}}for(let E=0;E<42;E++){const T=-200+r()*380,v=8+r()*250;if(gi(T,v)>0||Kn(T,v)<4)continue;const A=2+r()*6,C=1.5+r()*4,_=2+r()*6,M=Ot(T,v)+C*.35,L=.75+r()*.5,I=r()*40,U=r()<.6?.5+r()*.5:0;i.bake(s,c(A,C,_,[T,M,v]),(W,B,q)=>{const N=en(Da,L);if(U<=0)return N;const X=et((B-M)/C+.15*oe(W*.3+I,q*.3+I),0,1);return si(N,uo,X*X*U)}),Wn.push({x:T,z:v,r:(A+_)*.5+1})}const p=new Me;p.name="nest-decor";const h=new zt(t.toBufferGeometry(),new rn({vertexColors:!0,roughness:.92,metalness:0,side:he}));h.name="nest-decor-matte",p.add(h);const b=new zt(i.toBufferGeometry(),cs({map:pv(),strength:1,roughness:.92,side:he}));b.name="nest-decor-stone",b.castShadow=!0,b.receiveShadow=!0,p.add(b);const y=Fd({map:Dd(),strength:.7,emissive:.95,color:7829367,side:he}),S=new zt(e.toBufferGeometry(),y);return S.name="nest-decor-glow",p.add(S),{group:p,mushrooms:hi,rocks:Wn}}const Fa=new J("#b07226").toArray(),kr=new J("#5e3d16").toArray(),Ku=new J("#100c06").toArray(),Ue=2.4,bM=2.7,TM=2.9;function wM(n,t,e,i,r){const s=qn(t,n),o=Math.hypot(s[0],s[1],s[2]),a=et(o,.05,e+i-.02),c=Rt(s,1/(o||1)),l=(e*e-i*i+a*a)/(2*a),u=Math.sqrt(Math.max(e*e-l*l,0)),f=r[0]*c[0]+r[1]*c[1]+r[2]*c[2],d=ne(qn(r,Rt(c,f)));return se(se(n,Rt(c,l)),Rt(d,u))}function ju(n){const t=new mn;return t.setAttribute("position",new ve(n.p,3)),t.setAttribute("normal",new ve(n.n,3)),t.setIndex(n.i),t}function Zu(n,t){n.matrix.set(t.x[0],t.y[0],t.z[0],t.p[0],t.x[1],t.y[1],t.z[1],t.p[1],t.x[2],t.y[2],t.z[2],t.p[2],0,0,0,1),n.matrixWorldNeedsUpdate=!0}function AM(){const n=new Me;n.name="queen";const t=[ee[0],re(ee[0],ee[2]),ee[2]],e=Math.PI,i=[Math.sin(e),0,Math.cos(e)],r=[0,1,0],s=ne(Ke(r,i)),o=Oi(s,r,i,[t[0],t[1]+1.05*Ue,t[2]]),a=A=>Ld(o,Rt(A,Ue)),c=Tr(12,9),l=Bo(8),u=new Te,f=(A,C,_,M)=>Oi(Rt(s,C*Ue),Rt(r,_*Ue),Rt(i,M*Ue),a(A)),d=(A,C,_,M,L)=>u.bake(c,f(A,C,_,M),()=>L),m=(A,C,_,M)=>u.bake(l,Ye(A,C,_),()=>M);d([0,1.5,-1.2],.5,.5,.62,kr),d([0,1.62,.5],1.06,1.02,1.75,Fa),d([0,1.66,2.7],1.18,1.02,1.12,Fa),d([.76,2.12,3.1],.3,.26,.3,Ku),d([-.76,2.12,3.1],.3,.26,.3,Ku);for(let A=-1;A<=1;A+=2)m(a([A*.55,1.45,3.5]),a([A*.34,1.2,4.8]),.17*Ue,Fa);const g=[[.92,1.5,1.7],[-.92,1.5,1.7],[1.02,1.4,.4],[-1.02,1.4,.4],[.92,1.4,-1.15],[-.92,1.4,-1.15]],x=[[4.1,0,3.9],[-4.1,0,3.9],[4.9,0,.3],[-4.9,0,.3],[4.5,0,-3.5],[-4.5,0,-3.5]];for(let A=0;A<6;A++){const C=a(g[A]),_=a(x[A]);_[1]=re(_[0],_[2]);const M=g[A][0]>0?s:Rt(s,-1),L=wM(C,_,bM*Ue,TM*Ue,ne(se(r,Rt(M,.75))));m(C,L,.2*Ue,kr),m(L,_,.14*Ue,kr),u.bake(c,Oi([.3*Ue,0,0],[0,.3*Ue,0],[0,0,.3*Ue],L),()=>kr)}const p=new rn({vertexColors:!0,roughness:.45,metalness:.05}),h=new zt(u.toBufferGeometry(),p);h.name="queen-body",h.castShadow=!0,n.add(h);const b=ju(c),y=ju(l),S=new rn({color:new J().fromArray(kr),roughness:.45,metalness:.05}),E=[{local:[0,1.5,-5.4],rx:1.34,ry:1.3,rz:1.9},{local:[0,1.55,-3.2],rx:1.6,ry:1.54,rz:2.1}].map(A=>{const C=new zt(b,S);return C.matrixAutoUpdate=!1,C.castShadow=!0,n.add(C),{mesh:C,...A}}),T=[];for(let A=-1;A<=1;A+=2)for(let C=0;C<2;C++){const _=new zt(y,S);_.matrixAutoUpdate=!1,n.add(_),T.push({mesh:_,sA:A,seg:C})}function v(A){const C=1+Math.sin(A*.55)*.04;for(const _ of E)Zu(_.mesh,f(_.local,_.rx*C,_.ry*C,_.rz));for(const _ of T){const M=Math.sin(A*1.1+(_.sA>0?0:1.3))*.35,L=a([_.sA*.58,2.1,3.2]),I=a([_.sA*(1.4+M*.3),3.3,4.2]),U=a([_.sA*(1.85+M),3.2+M*.4,6.1]);Zu(_.mesh,_.seg===0?Ye(L,I,.14*Ue):Ye(I,U,.11*Ue))}}return v(0),{group:n,update:v}}const Ml={sunDir:ne([-300,120,195]),sunColor:15251852,sunIntensity:5.4,hemiSky:7241640,hemiGround:4867376,hemiIntensity:1.15,fog:8221832,fogNear:95,fogFar:420,sky:10130344,exposure:1.3},Sl={sunDir:ne([30,45,20]),sunColor:16767370,sunIntensity:2.5,hemiSky:12572917,hemiGround:7236152,hemiIntensity:.85,fog:11520216,fogNear:90,fogFar:420,sky:10274532,exposure:1.15};let Kr=0;function hs(){return Kr}function qd(n){Kr=n<0?0:n>1?1:n}const An=[0,1,0];function Go(){const n=Ml.sunDir,t=Sl.sunDir;An[0]=n[0]+(t[0]-n[0])*Kr,An[1]=n[1]+(t[1]-n[1])*Kr,An[2]=n[2]+(t[2]-n[2])*Kr;const e=Math.hypot(An[0],An[1],An[2])||1;return An[0]/=e,An[1]/=e,An[2]/=e,An}const RM=56;function Ju(n,t,e,i,r,s,o,a){const c=i-n,l=r-t,u=s-e,f=c*a[0]+l*a[1]+u*a[2];if(f<=0)return 0;const d=c*c+l*l+u*u-f*f,m=Math.sqrt(d>0?d:0),g=o*.35+f*.06,x=et((o+g-m)/g,0,1);return x*x*(3-2*x)}function CM(n,t,e,i){const r=Math.hypot(i[0],i[2]);if(r<1e-4)return 0;const s=i[0]/r,o=i[2]/r,a=Gt.x-n,c=Gt.z-e,l=a*s+c*o;if(l<=0)return 0;const u=Math.abs(a*o-c*s);if(t+i[1]/r*l>Gt.baseY+Gt.h*Pn)return 0;const d=Gt.w*.4+l*.05,m=et((Gt.w+d-u)/d,0,1);return m*m*(3-2*m)}function PM(n,t,e,i){const r=Math.hypot(i[0],i[2]);if(r<1e-4)return 0;const s=i[0]/r,o=i[2]/r,a=i[1]/r,c=Math.min(170,34/a+14);let l=0;for(let u=2.5;u<c;u*=1.38){const d=Ot(n+s*u,e+o*u)-(t+a*u+.5);if(d<=0)continue;const m=1.2+u*.05,g=et(d/m,0,1);if(g>l&&(l=g),l>=1)break}return l}function $d(n,t){if(t<Be)return 1;const e=Go(),i=Ot(n,t),r=us(n,t),s=et((r[0]*e[0]+r[1]*e[1]+r[2]*e[2])/Math.max(e[1],.001),0,1);let o=PM(n,i,t,e);if(o<1){const a=i+1.2;o=Math.max(o,CM(n,a,t,e));const c=Fi(Pn);o=Math.max(o,Ju(n,a,t,c[0],c[1]+14,c[2],RM,e));for(let l=0;l<Wn.length&&o<1;l++){const u=Wn[l],f=u.r*.8;o=Math.max(o,Ju(n,a,t,u.x,Ot(u.x,u.z)+f*.45,u.z,f,e))}}return et(1-s*(1-o),0,1)}const di=[],Kd=new Map,LM=["graine","brindille","miellat"],IM={graine:4,brindille:3,miellat:5},DM={graine:5,brindille:6,miellat:5},UM=[.88,.66,.32],NM=[.55,.38,.18],FM=[.42,.32,.19],Qu=[.24,.18,.1],OM=[.94,.74,.36],BM=[.78,.5,.2],zM=new J("#4A4438"),yl=(n,t,e)=>[wt(n[0],t[0],e),wt(n[1],t[1],e),wt(n[2],t[2],e)];function kM(n,t,e,i,r){const s=new Te,o=[];for(let a=0;a<=i;a++){const c=a/i,l=[],u=t(c);for(let f=0;f<e;f++){const d=2*Math.PI*f/e;l.push(s.addVertex(Math.cos(d)*u,c*n,Math.sin(d)*u,r(c,d)))}o.push(l)}for(let a=0;a<i;a++)for(let c=0;c<e;c++){const l=(c+1)%e;s.addQuad(o[a][c],o[a][l],o[a+1][l],o[a+1][c])}return s}function HM(){return kM(7,t=>Math.pow(Math.sin(Math.PI*t),.62)*2*(1-.3*t),7,5,(t,e)=>yl(NM,UM,et(.25+.75*Math.pow(Math.abs(Math.cos(e*.5)),1.5)*(.4+.6*t),0,1))).toBufferGeometry()}function GM(){const n=new Te,t=Bo(5),e=[[0,0,0],[.6,5.5,.4],[2.4,10.6,.2]];for(let i=0;i<2;i++)n.bake(t,Ye(e[i],e[i+1],.62-i*.16),(r,s)=>yl(Qu,FM,et(.55+.25*Math.sin(s*1.7),0,1)));return n.bake(t,Ye([.6,5.5,.4],[-2.6,8.2,-1.1],.33),()=>Qu),n.toBufferGeometry()}function VM(){const n=new Te,t=Tr(6,3),e=[[0,.9,0,2.6,1.5,2.2],[2.4,.6,1.1,1.7,1,1.5],[-1.6,.7,1.6,1.9,1.2,1.7]];for(const i of e)n.bake(t,Oi([i[3],0,0],[0,i[4],0],[0,0,i[5]],[i[0],i[1],i[2]]),(r,s)=>yl(BM,OM,et((s-i[1])/(i[4]*2)+.55,0,1)));return n.toBufferGeometry()}const jr=(n,t)=>n>=t?0:Math.pow(1-n/t,1.5);function WM(n,t){if(gi(n,t)>0||Kn(n,t)<10)return 0;let e=.16;return e+=1.05*jr(Math.hypot(n-Gt.x,t-Gt.z),78),e+=.85*jr(Math.hypot(n-88,t-168),74),e+=.7*jr(Math.hypot(n-24,t-128),46),e*et(1-(Lr(n,t)-.16)/.5,.12,1)}const XM=2;function YM(n,t,e){const i=Math.hypot(n-Gt.x,t-Gt.z)<85,r=e();return i?r<.55?"brindille":r<.85?"miellat":"graine":jr(Math.hypot(n-88,t-168),74)+jr(Math.hypot(n-24,t-128),46)>.25?r<.6?"graine":r<.85?"miellat":"brindille":r<.5?"graine":r<.8?"brindille":"miellat"}const th=32;function qM(n=90210){const t=os(n),e=be;let i=0,r=0,s=1;for(;i<th&&r++<th*200;){const o=wt(e.x0+14,e.x1-14,t()),a=wt(e.z0+16,e.z1-14,t());if(t()*XM>WM(o,a))continue;const c=YM(o,a,t),l=3+Math.floor(t()*4);let u=0;for(let f=0;f<l*3&&u<l;f++){const d=t()*Math.PI*2,m=Math.sqrt(t())*12,g=o+Math.cos(d)*m,x=a+Math.sin(d)*m;if(gi(g,x)>0||Kn(g,x)<10||Lr(g,x)>.7)continue;const p=Math.max(1,IM[c]+Math.round((t()-.5)*2)),h={id:s++,x:g,z:x,kind:c,amount:p,r:DM[c],amount0:p,yaw:t()*Math.PI*2,tilt:(t()-.5)*.5,size:.75+t()*.5,_slot:-1};di.push(h),Kd.set(h.id,h),u++}u&&i++}}const jd={},eh=new Qt,nh=new Rr,ih=new wn,rh=new k,sh=new k,oh=new J;function Zd(n){const t=jd[n.kind];if(!t||n._slot<0)return;const e=n.amount0>0?n.amount/n.amount0:0,i=n.size*wt(.45,1,Math.pow(e,.6)),r=us(n.x,n.z);ih.set(n.tilt-Math.atan2(r[2],r[1])*.6,n.yaw,n.tilt+Math.atan2(r[0],r[1])*.6),nh.setFromEuler(ih),rh.set(n.x,Ot(n.x,n.z)-.35*i,n.z),sh.set(i,i,i),eh.compose(rh,nh,sh),t.setMatrixAt(n._slot,eh),oh.set(1,1,1).lerp(zM,(1-e)*.8),t.setColorAt(n._slot,oh),t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0)}function Jd(n,t=1){const e=Kd.get(n);if(!e||e.amount<=0||!(t>0))return 0;const i=Math.min(t,e.amount);return e.amount-=i,Zd(e),i}function $M(n,t,e=12,i=!1){const r=[];for(const s of di)!i&&s.amount<=0||Math.hypot(s.x-n,s.z-t)<=e&&r.push(s);return r}function KM(){const n=new Me;n.name="resources",di.length===0&&qM();const t={graine:HM(),brindille:GM(),miellat:VM()},e=new rn({vertexColors:!0,roughness:.9,metalness:0}),i=new rn({vertexColors:!0,roughness:.22,metalness:0});for(const r of LM){const s=di.filter(c=>c.kind===r),o=Math.max(s.length,1),a=new Cd(t[r],r==="miellat"?i:e,o);a.name="resource-"+r,a.castShadow=!0,a.receiveShadow=!0,a.count=s.length,a.instanceColor=new Rn(new Float32Array(o*3).fill(1),3),a.frustumCulled=!1,jd[r]=a,s.forEach((c,l)=>{c._slot=l,Zd(c)}),n.add(a)}return{group:n,nodes:di}}const Zr=4.2,Ii=15,El=14,Gn=8,ah=.22,fr=1.6,ho=17,jM=18,ZM=.62,fo=new J("#6d5130"),JM=new J("#5a4226"),Oa=new J("#332412"),QM=new J("#e0a752"),tS=new J("#efdcb0"),eS=new J("#ffc46a"),po=[.55,.62,.82],nS=[1.05,.62,.24],Ba=[.85,.55,.22],za=[1.95,1.2,.52],Wc=6;let Xc=null,xe=null;const Wr=(n,t,e)=>new J(n).lerp(t,et(e,0,1));function iS(n){Xc=n}function bl(){return xe?{x:xe.x,z:xe.z}:null}function Qd(){return xe}function Tl(n,t){if(xe)return{ok:!1,reason:"already-founded"};if(t<Be)return{ok:!1,reason:"underground"};const e=be;return n<e.x0+ho||n>e.x1-ho||t>e.z1-ho?{ok:!1,reason:"bounds"}:Math.abs(n)<34&&t<34?{ok:!1,reason:"occupied"}:gi(n,t)>0?{ok:!1,reason:"water"}:Kn(n,t)<jM?{ok:!1,reason:"water"}:Lr(n,t)>ZM?{ok:!1,reason:"slope"}:xl(n,t).kind==="rock"?{ok:!1,reason:"rock"}:{ok:!0}}function rS(n,t,e){const i=(r,s)=>oe(Math.cos(n)*r+t*s+e+37,Math.sin(n)*r+t*s*.7+e+91);return .84+.2*i(1.6,.1)+.1*i(4.1,.29)+.05*i(9.3,.62)}function sS(n){const t=Ii+Gn,e=(n-t)/Gn;return e>-1&&e<1?Zr+(El-Zr)*Math.pow(Math.sqrt(1-e*e),.72):Zr}function oS(n,t,e){const i=Ot(n,t),r=(oe(n*.07,t*.07)-.5)*Math.PI*2,s=ne([Math.cos(r)*ah,-1,Math.sin(r)*ah]),o=ne(Ke(s,[0,0,1])),a=ne(Ke(s,o)),c=[n,i+fr,t],l=Ii+2*Gn,u=i+fr-(Ii+Gn*.92),f=22;function d(S,E){const T=rS(S,E,e),v=sS(E)*T,A=c[0]+s[0]*E,C=c[1]+s[1]*E,_=c[2]+s[2]*E,M=A+(o[0]*Math.cos(S)+a[0]*Math.sin(S))*v,L=C+(o[1]*Math.cos(S)+a[1]*Math.sin(S))*v,I=_+(o[2]*Math.cos(S)+a[2]*Math.sin(S))*v;return[M,Math.max(L,u),I,T]}const m=new Te,g=[];for(let S=0;S<=l+1e-4;S+=1.5){const E=[];for(let T=0;T<f;T++){const v=2*Math.PI*T/f,A=d(v,S),C=et((A[3]-.84)/.34+.45,0,1),_=Wr(Oa,JM,C*.8+.1).lerp(fo,.18+C*.14).multiplyScalar(.88);E.push(m.addVertex(A[0],A[1],A[2],_.toArray()))}g.push(E)}for(let S=0;S<g.length-1;S++)for(let E=0;E<f;E++){const T=(E+1)%f;m.addQuad(g[S][E],g[S][T],g[S+1][T],g[S+1][E])}const x=g[g.length-1],p=m.addVertex(c[0]+s[0]*l,u,c[2]+s[2]*l,Wr(Oa,fo,.35).toArray());for(let S=0;S<f;S++)m.addTri(p,x[S],x[(S+1)%f]);const h=8,b=[];for(let S=0;S<=h;S++){const E=S/h,T=wt(Zr*1.02,ho,E),v=[];for(let A=0;A<=f;A++){const C=2*Math.PI*(A%f)/f,_=n+Math.cos(C)*T,M=t+Math.sin(C)*T,L=.75+.5*oe(_*.16+e,M*.16+e),I=fr*Math.pow(1-E,1.5)*L+.9*Math.sin(Math.PI*Math.min(1,E*1.35))*L,U=wt(i+fr,Ot(_,M),Math.pow(E,.7))+(E>0?I*.75:0),W=Wr(Wr(fo,Oa,.35+.3*(1-E)),QM,.12).multiplyScalar(.82+.25*L);v.push(m.addVertex(_,U,M,W.toArray()))}b.push(v)}for(let S=0;S<h;S++)for(let E=0;E<f;E++)m.addQuad(b[S][E],b[S][E+1],b[S+1][E+1],b[S+1][E]);const y=c[1]+s[1]*(Ii+Gn);return{geometry:m.toBufferGeometry(),mouthY:i,floorY:u,origin:c,dir:s,uMax:l,chamber:{x:c[0]+s[0]*(Ii+Gn),y:u,z:c[2]+s[2]*(Ii+Gn),ceilY:y+Gn*.55,r:El}}}function aS(n,t){const e=os(t^23505),i=Tr(8,5),r=(g,x,p,h)=>Oi([g,0,0],[0,x,0],[0,0,p],h),s=n.chamber,o=[],a=Ho(new rn({vertexColors:!0,roughness:.85,metalness:0,side:he}));for(let g=0;g<Wc;g++){const x=g/Wc*Math.PI*2+e()*.5,p=s.r*(.28+e()*.34),h=s.x+Math.cos(x)*p,b=s.z+Math.sin(x)*p,y=new Te,S=5+Math.floor(e()*5);for(let v=0;v<S;v++){const A=e()*Math.PI*2,C=Math.sqrt(e())*2.6,_=h+Math.cos(A)*C,M=b+Math.sin(A)*C,L=.75+e()*.45;y.bake(i,r(L*1.25,L*.85,L,[_,s.y+L*.7,M]),(I,U)=>Wr(tS,fo,et(.55-(U-s.y)*.25,0,1)).toArray())}const E=new zt(y.toBufferGeometry(),a);E.name="nest-brood-"+g,E.visible=!1,E.castShadow=!1;const T=Sn([h,s.y+2.2,b],[0,0,0]);o.push({mesh:E,lamp:T,on:!1})}const c=new Te,l=s.x+(e()-.5)*6,u=s.z+(e()-.5)*6,f=s.ceilY-3.2;c.bake(i,r(1.5,1.8,1.5,[l,f,u]),()=>eS.toArray());const d=new zt(c.toBufferGeometry(),Fd({map:Dd(),strength:.7,emissive:.95,color:7829367,side:he}));d.name="nest-glow-bead",d.visible=!1;const m=Sn([l,f,u],[0,0,0]);return{piles:o,bead:{mesh:d,lamp:m,on:!1}}}function tf(n,t){const e=Tl(n,t);if(!e.ok)return e;const i=Math.floor(Math.abs(n)*131+Math.abs(t)*977)%9973,r=oS(n,t,i),s=new Me;s.name="founded-nest";const o=new zt(r.geometry,Ho(cs({map:Id(),strength:.62,side:he})));o.name="founded-nest-shell",o.receiveShadow=!0,s.add(o);const a=aS(r,i);for(const u of a.piles)s.add(u.mesh);s.add(a.bead.mesh),Xc&&Xc.add(s);const c=Sn([n,r.mouthY-4,t],po),l=Sn([n,r.mouthY+1,t],nS);return xe={x:n,z:t,group:s,mouth:{x:n,y:r.mouthY+fr,z:t,r:Zr},chamber:r.chamber,floorY:r.floorY,axis:{origin:r.origin,dir:r.dir,length:r.uMax},brood:0,sealed:!1,_furnishing:a,_coldLight:c,_warmLight:l,_coldFade:1},lM(n,r.mouthY+fr,t,El,Ii+Gn),{ok:!0}}function ef(n){if(!xe)return 0;const t=Math.round(et(n,0,Wc));xe.brood=t,xe._furnishing.piles.forEach((i,r)=>{const s=r<t;i.mesh.visible=s,i.on=s,i.lamp.c[0]=s?Ba[0]:0,i.lamp.c[1]=s?Ba[1]:0,i.lamp.c[2]=s?Ba[2]:0});const e=xe._furnishing.bead;return e.on=t>=4,e.mesh.visible=e.on,e.lamp.c[0]=e.on?za[0]:0,e.lamp.c[1]=e.on?za[1]:0,e.lamp.c[2]=e.on?za[2]:0,t}function nf(n=!0){xe&&(xe.sealed=n)}function cS(n){if(!xe)return;const t=xe.sealed?0:1,e=Math.min(1,n/3);xe._coldFade+=(t-xe._coldFade)*e*3;const i=et(xe._coldFade,0,1);xe._coldLight.c[0]=po[0]*i,xe._coldLight.c[1]=po[1]*i,xe._coldLight.c[2]=po[2]*i}function rf(){const n=new Me;n.name="world";const t=wv();for(const d of t.doorLights)Sn(d.p,d.c);const e=EM(t.rooms),i=AM(),r=kv();n.add(r);const s=Vv();n.add(s.mesh);const o=Xv();n.add(o.group);const a=kd({});n.add(a.mesh);const c=oM();n.add(c.group);const l=KM();n.add(l.group);const u=new Me;u.name="dug",n.add(u),iS(u);function f(d,m,g){a.update(d,m,g),cS(d),i.update(m),s.update(m),g&&(c.update(g),o.update(g,hs()),uM(g.position))}return{group:n,update:f,grassFootprints:a.footprints,grass:a,resources:l.nodes,rooms:t.rooms,doorLights:t.doorLights,mushrooms:e.mushrooms,rocks:e.rocks}}const Vo=Object.freeze(Object.defineProperty({__proto__:null,LAWN_BOUNDS:be,MUSHROOMS:hi,QUEEN:ee,RESOURCE_NODES:di,RIG_FOUNDED:Sl,RIG_PROLOGUE:Ml,RIVER:ln,ROCKS:Wn,START:Oc,TERRAIN_BOUNDS:ts,TREE:Gt,TUNNEL_BACK:me,TUNNEL_MOUTH:Be,TUNNEL_R:_r,WATER_Y:ui,applyNestShading:Ho,canFoundAt:Tl,containSurface:kc,containUnderground:zo,createWorld:rf,daylightAt:hM,distanceToWater:Kn,foundNest:tf,foundedMix:hs,getFoundedNest:Qd,getRoomBranches:ml,getUndergroundRadius:vv,getWallHoleAt:pl,groundNormal:us,groundSlope:Lr,groundY:Ot,harvestNode:Jd,mushroomCollideR:Yd,nestOrigin:bl,nodesNear:$M,pitFactorAt:Vc,populateNest:ef,profileR:Oe,riverEdgeAt:Yi,sampleTerrain:Iv,sealNest:nf,setFoundedMix:qd,shadeAt:$d,soilAt:xl,sunDir:Go,treeTrunkRadius:Gi,treeWalkBranch:Ln,waterDepthAt:gi},Symbol.toStringTag,{value:"Module"})),lS=[{hip:[.92,1.5,1.7],rest:[4.1,0,3.9],phase:0},{hip:[-.92,1.5,1.7],rest:[-4.1,0,3.9],phase:.5},{hip:[1.02,1.4,.4],rest:[4.9,0,.3],phase:.5},{hip:[-1.02,1.4,.4],rest:[-4.9,0,.3],phase:0},{hip:[.92,1.4,-1.15],rest:[4.5,0,-3.5],phase:0},{hip:[-.92,1.4,-1.15],rest:[-4.5,0,-3.5],phase:.5}],uS={petiole:{at:[0,1.5,-1.2],r:[.5,.5,.62]},thorax:{at:[0,1.62,.5],r:[1.06,1.02,1.75]},head:{at:[0,1.66,2.7],r:[1.18,1.02,1.12]},eye:{at:[.76,2.12,3.1],r:[.3,.26,.3]},gaster:[{at:[0,1.55,-3.2],r:[1.6,1.54,2.1]},{at:[0,1.5,-5.4],r:[1.34,1.3,1.9]}],mandible:{root:[.55,1.45,3.5],tip:[.34,1.2,4.8],gape:.2,r:.17},antenna:{root:[.58,2.1,3.2],elbow:[1.4,3.3,4.2],tip:[1.85,3.2,6.1],r1:.14,r2:.11},legR:{thigh:.2,shin:.14,knee:.3,foot:.19}},hS={id:"queen",label:"reine fondatrice",scale:2.2,legs:lS,body:uS,breathes:!0,colors:{chitinA:11563558,chitinB:6176022,limb:6176022,mandible:11563558,eye:1051654},maxSpeed:12.5,sprint:1.5,turnRate:4.2,legLen:[2.7,2.9],stride:7,climbSpeed:12,bodyR:1.5,cam:{dist:58,min:16,max:140}},on=hS;function dS(n){return[n.legLen[0]*n.scale,n.legLen[1]*n.scale]}function sf(n){return n.stride*n.scale}function Vi(n){return n.bodyR*n.scale}const of=new J("#393741"),fS=new J("#241D22"),Wo=new No({color:of.clone(),side:Fe,depthWrite:!1});Wo.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`
    #include <begin_vertex>
    float oDist = -(modelViewMatrix * vec4(position, 1.0)).z;
    transformed += normal * clamp(0.0017 * oDist, 0.06, 0.16);
  `)};Wo.customProgramCacheKey=()=>"inverted-hull";function pS(n){Wo.color.copy(fS).lerp(of,n)}function mS(n){const t=new Me;return t.name="outline-hull",n.traverse(e=>{if(!e.isMesh||!e.geometry)return;const i=new zt(e.geometry,Wo);i.castShadow=!1,i.receiveShadow=!1,i.frustumCulled=!1,t.add(i)}),t.renderOrder=-1,t}const sn=kd({}).footprints,Xo=42,gS=4.5,_S=20,xS=.93;function vS(n){return gS*(n.scale||1)}function Vs(n){const t=n.profile||on;return(t.climbSpeed!==void 0?t.climbSpeed:_S)*(n.scale||1)}const MS=6,af=.05,SS=(()=>{const n=Ln.point(0),t=Ln.tipPos;return Math.hypot(t[0]-n[0],t[1]-n[1],t[2]-n[2])})();function yS(n){let t=null,e=vS(n);for(let r=0;r<sn.length;r++){const s=sn[r];if(s.h<Xo)continue;const o=Math.hypot(s.x-n.x,s.z-n.z);o<e&&(e=o,t={kind:"grass",i:r})}const i=Math.hypot(Gt.x-n.x,Gt.z-n.z)-Gt.w;return i<MS*(n.scale||1)&&i<e&&(t={kind:"tree"}),t}function ES(n,t){n.climb=t.kind==="tree"?{kind:"tree",seg:"trunk",t:.02}:{kind:"grass",i:t.i,t:.03},n.speed=0}function Yc(n){let t;if(n.climb.kind==="tree"){const e=Ro(Gt,n.climb.t);t=se(pi(Gt,n.climb.t),Rt(e.normal,Gi(n.climb.t)))}else t=pi(sn[n.climb.i],n.climb.t);n.climb=null,n.x=t[0],n.z=t[2],n.y=Ot(t[0],t[2]),n.speed=0}function bS(n,t){if(n.climb){if(n.climb.kind==="grass"){Yc(n);return}n.climb.seg==="trunk"&&n.climb.t<=af&&Yc(n);return}t&&ES(n,t)}function TS(n,t){return n.climb?n.climb.kind==="tree"?n.climb.seg==="trunk"&&n.climb.t<=af?"redescendre du tronc":"reculer pour redescendre":"redescendre du brin":t?t.kind==="tree"?"grimper au tronc":"grimper au brin d'herbe":null}function wS(n,t,e){let i=!1,r=null;if(n.climb.kind==="tree")if(n.climb.seg==="trunk"){n.climb.t=et(n.climb.t+t*(Vs(n)/Gt.h)*e,0,Ln.splitT);const o=Ro(Gt,n.climb.t),a=se(pi(Gt,n.climb.t),Rt(o.normal,Gi(n.climb.t)));n.x=a[0],n.y=a[1],n.z=a[2],n.climb.t<=5e-4&&t<0?i=!0:n.climb.t>=Ln.splitT&&t>0&&(r="branch")}else{n.climb.u=et(n.climb.u+t*(Vs(n)/SS)*e,0,1);const o=Ln.basis(n.climb.u),a=se(o.pos,Rt(o.up,Ln.radius(n.climb.u)));n.x=a[0],n.y=a[1],n.z=a[2],n.climb.u<=5e-4&&t<0&&(r="trunk")}else{const o=sn[n.climb.i];n.climb.t=et(n.climb.t+t*(Vs(n)/o.h)*e,0,xS);const a=pi(o,n.climb.t);n.x=a[0],n.y=a[1],n.z=a[2],n.climb.t<=5e-4&&t<0&&(i=!0)}const s=Vs(n);n.speed=li(n.speed,Math.abs(t)*s,7,e),n.travel+=Math.abs(t)*s*e,i?Yc(n):r==="branch"?(n.climb.seg="branch",n.climb.u=0):r==="trunk"&&(n.climb.seg="trunk",n.climb.t=Ln.splitT)}function Po(n,t,e){return n.floorY===null||n.floorY===void 0?Ot(t,e):n.floorY}function AS(n,t,e,i=on){return{x:n,y:t,z:e,yaw:0,speed:0,travel:0,bob:0,floorY:null,climb:null,legsInit:!1,profile:i,scale:i.scale}}function RS(n=on){return n.legs.map(()=>({planted:[0,0,0],from:[0,0,0],to:[0,0,0],swinging:!1,prevP:0}))}function CS(n){if(n.climb){if(n.climb.kind==="tree"){if(n.climb.seg==="trunk"){const c=Ro(Gt,n.climb.t);return{side:c.width,up:c.normal,fwd:c.tangent}}const a=Ln.basis(n.climb.u);return{side:a.side,up:a.up,fwd:a.fwd}}const o=Ro(sn[n.climb.i],n.climb.t);return{side:o.width,up:o.normal,fwd:o.tangent}}const t=n.floorY===null||n.floorY===void 0?us(n.x,n.z):[0,1,0],e=ne([t[0]*.7,1,t[2]*.7]),i=[Math.sin(n.yaw),0,Math.cos(n.yaw)],r=ne(Ke(e,i)),s=Ke(r,e);return{side:r,up:e,fwd:s}}function wl(n){const t=CS(n),e=n.scale||1,i=1.05*e+n.bob,r=n.climb?se([n.x,n.y,n.z],Rt(t.up,i)):[n.x,Po(n,n.x,n.z)+i,n.z];return{side:Rt(t.side,e),up:Rt(t.up,e),fwd:Rt(t.fwd,e),p:r,basis:t,scale:e}}function Mn(n,t){const[e,i,r]=t;return[n.side[0]*e+n.up[0]*i+n.fwd[0]*r+n.p[0],n.side[1]*e+n.up[1]*i+n.fwd[1]*r+n.p[1],n.side[2]*e+n.up[2]*i+n.fwd[2]*r+n.p[2]]}function PS(n,t,e,i,r){const s=qn(t,n),o=Math.hypot(s[0],s[1],s[2])||1,a=et(o,.05,e+i-.02),c=Rt(s,1/o),l=(e*e-i*i+a*a)/(2*a),u=Math.sqrt(Math.max(e*e-l*l,0)),f=r[0]*c[0]+r[1]*c[1]+r[2]*c[2],d=ne(qn(r,Rt(c,f)));return se(se(n,Rt(c,l)),Rt(d,u))}function LS(n,t,e){const i=wl(n),r=i.basis,s=n.profile||on,o=n.scale||1,a=sf(s),c=n.travel/a,l=!!n.climb;for(let u=0;u<s.legs.length;u++){const f=s.legs[u],d=t[u],m=Mn(i,f.rest);l||(m[1]=Po(n,m[0],m[2])),n.legsInit||(d.planted=m.slice(),d.from=m.slice(),d.to=m.slice());let g=(c+f.phase)%1;if(g<0&&(g+=1),g>=.5&&d.prevP<.5){d.swinging=!0,d.from=d.planted.slice();const x=se(m,Rt(r.fwd,a*.38*et(n.speed/(16*o),0,1.4)));l||(x[1]=Po(n,x[0],x[2])),d.to=x}if(g<.5&&d.prevP>=.5&&(d.swinging=!1,d.planted=d.to.slice()),d.prevP=g,d.swinging){const x=(g-.5)*2,p=Math.sin(x*Math.PI)*1.5*o;d.planted=[wt(d.from[0],d.to[0],x),wt(d.from[1],d.to[1],x)+p,wt(d.from[2],d.to[2],x)]}n.speed<.4*o&&!d.swinging&&(d.planted[0]=li(d.planted[0],m[0],4,e),d.planted[1]=li(d.planted[1],m[1],4,e),d.planted[2]=li(d.planted[2],m[2],4,e))}n.legsInit=!0}let ka=null,ch=null;function IS(){return ka||(ka=new Oo(1,12,8),ch=new hl(1,1,1,7).translate(0,.5,0)),{sphereGeo:ka,cylGeo:ch}}const lh=new Map;function DS(n){let t=lh.get(n);return t||(t=new rn({color:n,roughness:.55,metalness:.05}),lh.set(n,t)),t}function Pe(n,t){const e=new zt(n,DS(t));return e.matrixAutoUpdate=!1,e.castShadow=!0,e}const Ha=new Qt,uh=new k,hh=new k,dh=new k,fh=new k;function mo(n,t,e,i,r){uh.set(e[0],e[1],e[2]),hh.set(i[0],i[1],i[2]),dh.set(r[0],r[1],r[2]),Ha.makeBasis(uh,hh,dh),fh.set(t[0],t[1],t[2]),Ha.setPosition(fh),n.matrix.copy(Ha)}function lr(n,t,e,i){const r=Ye(t,e,i);mo(n,r.p,r.x,r.y,r.z)}function Ws(n){return[-n[0],n[1],n[2]]}function US(n=on){const{sphereGeo:t,cylGeo:e}=IS(),i=n.body,r=n.colors,[s,o]=dS(n),a=new Me;a.name="ant";const c=i.gaster.map(()=>Pe(t,r.chitinB)),l=Pe(t,r.chitinB),u=Pe(t,r.chitinA),f=Pe(t,r.chitinA),d=Pe(t,r.eye),m=Pe(t,r.eye);a.add(...c,l,u,f,d,m);const g=Pe(e,r.mandible),x=Pe(e,r.mandible);a.add(g,x);const p=Pe(e,r.limb),h=Pe(e,r.limb),b=Pe(e,r.limb),y=Pe(e,r.limb);a.add(p,h,b,y);const S=n.legs.map(()=>({thigh:Pe(e,r.limb),shin:Pe(e,r.limb),knee:Pe(t,r.limb),foot:Pe(t,r.limb)}));for(const T of S)a.add(T.thigh,T.shin,T.knee,T.foot);function E(T,v,A){const C=wl(T),_=C.basis,M=C.scale,L=(X,nt,st,yt=1)=>mo(X,Mn(C,nt),Rt(_.side,st[0]*M*yt),Rt(_.up,st[1]*M*yt),Rt(_.fwd,st[2]*M*yt)),I=n.breathes?1+Math.sin(A*.55)*.04:1;for(let X=0;X<c.length;X++)L(c[X],i.gaster[X].at,i.gaster[X].r,I);L(l,i.petiole.at,i.petiole.r),L(u,i.thorax.at,i.thorax.r),L(f,i.head.at,i.head.r),L(d,i.eye.at,i.eye.r),L(m,Ws(i.eye.at),i.eye.r);const U=i.mandible,W=U.gape+Math.sin(A*3.1)*.06+Math.max(0,Math.min(T.speed,14))*.012,B=[U.tip[0]+W,U.tip[1],U.tip[2]];lr(g,Mn(C,U.root),Mn(C,B),U.r*M),lr(x,Mn(C,Ws(U.root)),Mn(C,Ws(B)),U.r*M);const q=i.antenna;for(const X of[1,-1]){const nt=Math.sin(A*2.4+(X>0?0:1.1))*.42,st=Math.cos(A*1.7+(X>0?.4:1.9))*.3,yt=ht=>X>0?ht:Ws(ht),Ft=Mn(C,yt(q.root)),$=Mn(C,yt([q.elbow[0]+nt*.25,q.elbow[1]+st*.3,q.elbow[2]])),Q=Mn(C,yt([q.tip[0]+nt,q.tip[1]+st,q.tip[2]]));lr(X>0?p:b,Ft,$,q.r1*M),lr(X>0?h:y,$,Q,q.r2*M)}const N=i.legR;for(let X=0;X<n.legs.length;X++){const nt=n.legs[X],st=v[X],yt=S[X],Ft=Mn(C,nt.hip),$=st.planted,Q=nt.hip[0]>0?_.side:Rt(_.side,-1),ht=ne([_.up[0]+Q[0]*.75,_.up[1]+Q[1]*.75,_.up[2]+Q[2]*.75]),ct=PS(Ft,$,s,o,ht);lr(yt.thigh,Ft,ct,N.thigh*M),lr(yt.shin,ct,$,N.shin*M);const bt=N.knee*M,Et=N.foot*M;mo(yt.knee,ct,[bt,0,0],[0,bt,0],[0,0,bt]),mo(yt.foot,$,[Et,0,0],[0,Et,0],[0,0,Et])}}return{group:a,updatePose:E}}function NS(n,t=on){const e={},i={camYaw:0,wantPitch:-.19,camDist:t.cam.dist,dragging:!1},r={active:!1,id:-1,ox:0,oy:0,dx:0,dy:0};let s=-1,o=0,a=0,c=!1,l=!1;function u(v){for(let A=0;A<v.length;A++)if(e[v[A]])return!0;return!1}function f(v){e[v.code]=!0,v.code==="KeyE"&&(c=!0),v.code==="KeyH"&&(l=!0),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].indexOf(v.code)>=0&&v.preventDefault()}function d(v){e[v.code]=!1}function m(){for(const v in e)e[v]=!1}function g(v){n.setPointerCapture(v.pointerId),v.pointerType==="touch"&&v.clientX<window.innerWidth*.5?(r.active=!0,r.id=v.pointerId,r.ox=v.clientX,r.oy=v.clientY):(i.dragging=!0,s=v.pointerId,o=v.clientX,a=v.clientY)}function x(v){if(r.active&&v.pointerId===r.id){const A=et(v.clientX-r.ox,-46,46),C=et(v.clientY-r.oy,-46,46);r.dx=A/46,r.dy=C/46;return}i.dragging&&v.pointerId===s&&(i.camYaw-=(v.clientX-o)*.006,i.wantPitch=et(i.wantPitch-(v.clientY-a)*.004,-.85,.55),o=v.clientX,a=v.clientY)}function p(v){r.active&&v.pointerId===r.id&&(r.active=!1,r.dx=0,r.dy=0),v.pointerId===s&&(i.dragging=!1,s=-1)}function h(v){i.camDist=et(i.camDist+v.deltaY*.03*t.scale,t.cam.min,t.cam.max),v.preventDefault()}window.addEventListener("keydown",f),window.addEventListener("keyup",d),window.addEventListener("blur",m),n.addEventListener("pointerdown",g),n.addEventListener("pointermove",x),n.addEventListener("pointerup",p),n.addEventListener("pointercancel",p),n.addEventListener("wheel",h,{passive:!1});function b(){let v=0,A=0;u(["KeyW","KeyZ","ArrowUp"])&&(A+=1),u(["KeyS","ArrowDown"])&&(A-=1),u(["KeyA","KeyQ","ArrowLeft"])&&(v-=1),u(["KeyD","ArrowRight"])&&(v+=1),r.active&&(v+=r.dx,A-=r.dy);const C=Math.min(Math.hypot(v,A),1),_=!!(e.ShiftLeft||e.ShiftRight);return{ix:v,iy:A,mag:C,sprint:_}}function y(){const v=c;return c=!1,v}function S(){const v=l;return l=!1,v}function E(){return!!e.KeyE}function T(){window.removeEventListener("keydown",f),window.removeEventListener("keyup",d),window.removeEventListener("blur",m),n.removeEventListener("pointerdown",g),n.removeEventListener("pointermove",x),n.removeEventListener("pointerup",p),n.removeEventListener("pointercancel",p),n.removeEventListener("wheel",h)}return{state:i,readMoveIntent:b,consumeInteract:y,consumeHelp:S,isInteractHeld:E,dispose:T}}let Ga=null;function cf(){return Ga||(Ga=ml()),Ga}function lf(n,t){const e=cf();for(const i in e){const r=e[i],s=n-r.origin[0],o=t-r.origin[2],a=s*r.dir[0]+o*r.dir[2];if(a<=-.5||a>=r.uMax+1)continue;const c=s*r.side[0]+o*r.side[2],l=r.profR(et(a,0,r.uMax));if(!(Math.abs(c)>=l*.82+2))return r}return null}function uf(n,t,e){return(t-n.origin[0])*n.dir[0]+(e-n.origin[2])*n.dir[2]}function FS(n){return 2*n.uEnd-n.uMax}function OS(n,t){const e=lf(n,t);return e?e.profR(et(uf(e,n,t),0,e.uMax)):Oe(t)}function BS(n,t){let e=t,i=t;const r=cf();for(const s in r){const o=r[s],a=et(1-Math.abs(n-o.origin[2])/o.doorFalloff,0,1);if(a<=0)continue;const c=wt(t,Math.abs(o.origin[0])+1.5,a);o.dir[0]>0?c>e&&(e=c):c>i&&(i=c)}return{limPos:e,limNeg:i}}const hf=.14;function df(n){const t=n(0),e=n(Math.PI),i=n(Math.PI*.5);return{aPos:Math.max(Math.abs(t[0]),1.5),aNeg:Math.max(Math.abs(e[0]),1.5),cy:t[1],b:Math.max(i[1]-t[1],.8)}}function zS(n){return df(t=>{const e=Ni(t,n,hf);return[e[0],e[1]]})}function kS(n,t){return df(e=>{const i=n.pointAt(e,t,hf);return[(i[0]-n.origin[0])*n.side[0]+(i[2]-n.origin[2])*n.side[2],i[1]]})}function ph(n,t,e){const i=t>=0?n.aPos:n.aNeg,r=Math.min(Math.abs(t)/i,1),s=n.b*Math.max(Math.sqrt(Math.max(0,1-r*r)),.3),o=Math.max(n.cy-s,e+1.6);return{yMin:o,yMax:Math.max(n.cy+s,o+.6)}}function HS(n,t){if(t.br){const u=t.br,f=n[0]-u.origin[0],d=n[2]-u.origin[2],m=f*u.dir[0]+d*u.dir[2],g=f*u.side[0]+d*u.side[2],x=t.uAnt>t.corridorLen?t.corridorLen-1:-.3,p=et(m,x,u.uMax-.3),h=kS(u,et(p,0,u.uMax)),b=et(g,-h.aNeg,h.aPos);n[0]=u.origin[0]+u.dir[0]*p+u.side[0]*b,n[2]=u.origin[2]+u.dir[2]*p+u.side[2]*b;const y=ph(h,b,Ot(n[0],n[2]));return n[1]=et(n[1],y.yMin,y.yMax),Math.hypot(p-m,b-g)}const e=n[2],i=n[0],r=et(e,me+5,Be+3);if(r>-14){const u=Oe(r)*.82*(1+Math.pow((r+14)/17,2)*.9),f=et(i,-u,u);return n[0]=f,n[2]=r,n[1]=Math.max(n[1],Ot(f,r)+2.2),Math.hypot(f-i,r-e)}const s=zS(r),{limPos:o,limNeg:a}=BS(r,Math.max(Oe(r)*.82-1.6,3)),c=et(i,-Math.max(a,s.aNeg),Math.max(o,s.aPos));n[0]=c,n[2]=r;const l=ph(s,c,Ot(c,r));return n[1]=et(n[1],l.yMin,l.yMax),Math.hypot(c-i,r-e)}const Xs=10.5;function GS(n){const t=Ot(ee[0],ee[2]);if(n[1]>t+8.5)return;const e=n[0]-ee[0],i=n[2]-ee[2],r=Math.hypot(e,i);if(!(r>=Xs)){if(r<.001){n[0]+=Xs;return}n[0]=ee[0]+e/r*Xs,n[2]=ee[2]+i/r*Xs}}function ff(n){const t=lf(n.x,n.z);if(!t)return{br:null};const e=uf(t,n.x,n.z);return{br:t,uAnt:e,corridorLen:FS(t)}}function Al(n,t,e){return t.z<Be-2?(GS(n),HS(n,e||ff(t))):(n[1]=Math.max(n[1],Ot(n[0],n[2])+2.2),0)}function pf(n,t,e,i,r=1){return[n[0]-Math.sin(t)*Math.cos(e)*i,n[1]-Math.sin(e)*i+3.4*r,n[2]-Math.cos(t)*Math.cos(e)*i]}const mh=8,VS=6,mf=.9,WS=[0,.25,.5,.8],gh=-1.25;function XS(n,t,e,i,r,s){let o=i,a=1/0;const c=Math.min(VS*(r.scale||1),i);for(let l=0;l<=mh;l++){const u=wt(i,c,l/mh),f=Al(pf(n,t,e,u,r.scale||1),r,s);if(f<=mf)return{d:u,err:f};f<a&&(a=f,o=u)}return{d:o,err:a}}function YS(n,t,e,i,r,s){let o=null;for(const a of WS){const c=Math.max(e-a,gh),l=XS(n,t,c,i,r,s);if(l.err<=mf)return{pitch:c,d:l.d};if((!o||l.err<o.err)&&(o={pitch:c,d:l.d,err:l.err}),c<=gh)break}return o}function qS(n,t,e,i){const r=n.scale||1,s=n.climb?[n.x,n.y+2*r,n.z]:[n.x,Po(n,n.x,n.z)+2.6*r,n.z],o=n.z<Be-2,a=o?ff(n):null,c=o?OS(n.x,n.z):_r,l=o?Math.min(i,Math.max(13.5*r,c*1.5)):i,u=o?YS(s,t,e,l,n,a):{pitch:e,d:l},f=pf(s,t,u.pitch,u.d,r);Al(f,n,a);const d=[s[0]+Math.sin(n.yaw)*3*r,s[1]+.4*r,s[2]+Math.cos(n.yaw)*3*r];return{eye:f,aim:d}}function $S(n){const t={eye:null,aim:null};function e(i,r,s,o,a,c){const l=c||qS(i,r,s,o);(!t.eye||c&&c.cut)&&(t.eye=l.eye.slice(),t.aim=l.aim.slice());const u=c?5:6.5;for(let f=0;f<3;f++)t.eye[f]=li(t.eye[f],l.eye[f],u,a),t.aim[f]=li(t.aim[f],l.aim[f],u*1.4,a);c||Al(t.eye,i),n.position.set(t.eye[0],t.eye[1],t.eye[2]),n.lookAt(new k(t.aim[0],t.aim[1],t.aim[2]))}return t.update=e,t}function gf(n,t,e,i){const r=(t-n+Math.PI*3)%(Math.PI*2)-Math.PI;return n+r*(1-Math.exp(-e*i))}function KS(n){return n.w*.75}const _f=.01,_h=pi(Gt,_f),jS=Gi(_f)*.88,xf=Vi(on)*2+.6,ZS=xf+.2,JS=14;function QS(n,t,e,i){for(let r=.3;r<=JS;r+=.3){const s=n+e*r,o=t+i*r,a=zo(s,o);if(Math.hypot(a[0]-s,a[1]-o)>.05)return r}return 1/0}const vf=[];for(let n=0;n<8;n++)vf.push([Math.cos(n*Math.PI/4),Math.sin(n*Math.PI/4)]);function ty(n,t,e){let i=0,r=1/0;const s=vf.map(([c,l],u)=>{const f=QS(n,t,c,l);return f<r&&(r=f,i=u),f});if(r===1/0||r-e>=ZS)return e;const o=Math.max(e,r+.3);return s[(i+4)%8]-o<xf?0:o}const ey=1;let Va=null;function ny(){return Va||(Va=Object.values(ml())),Va}function iy(n,t){for(const e of ny()){const i=n-e.origin[0],r=t-e.origin[2],s=i*e.dir[0]+r*e.dir[2];if(s<=-.5||s>=e.uMax+1)continue;const o=i*e.side[0]+r*e.side[2],a=Math.max(e.profR(et(s,0,e.uMax))*.82-1.2,2.2);if(!(Math.abs(o)>=a+3))return a}return Math.max(Oe(t)*.82-1.6,3)}function ry(n,t,e,i){return 2*iy(n,t)>=2*i+2*e+ey}let Ys=null,xh=null;function Mf(n=Vi(on)){return(!Ys||Ys.length!==hi.length||xh!==n)&&(xh=n,Ys=hi.map(t=>{const e=ty(t.x,t.z,Yd(t));return e>0&&ry(t.x,t.z,e,n)?e:0})),Ys}function Sf(n,t,e){if(t<Be+6){const i=Mf();for(let r=0;r<hi.length;r++)i[r]>0&&e(hi[r].x,hi[r].z,i[r])}if(t>Be-6){for(let i=0;i<Wn.length;i++)e(Wn[i].x,Wn[i].z,Wn[i].r);for(let i=0;i<sn.length;i++){const r=sn[i];r.h>=Xo&&e(r.x,r.z,KS(r))}e(_h[0],_h[2],jS)}}function sy(n,t,e=0){let i=0;return Sf(n,t,(r,s,o)=>{const a=o+e-Math.hypot(n-r,t-s);a>i&&(i=a)}),i}function vh(n){const t={x:0,z:0,n:0},e=Vi(n.profile||on);return Sf(n.x,n.z,(i,r,s)=>{const o=s+e,a=n.x-i,c=n.z-r,l=Math.hypot(a,c);if(l>=o||l<.001)return;const u=o-l;t.x+=a/l*u,t.z+=c/l*u,t.n++}),t}function qc(n,t){const e=vh(n);if(e.n===0)return;const i=e.x/e.n,r=e.z/e.n;n.x+=i,n.z+=r;const s=Math.hypot(i,r);if(s>5e-4){const a=i/s,l=-(r/s),u=a,f=Math.sin(n.yaw)*l+Math.cos(n.yaw)*u,d=t*.6*(f>=0?1:-1);n.x+=l*d,n.z+=u*d}const o=vh(n);o.n>0&&(n.x+=o.x/o.n,n.z+=o.z/o.n)}const oy=11;function ay(n,t,e){const i=ne([e[0]-t[0],0,e[2]-t[2]]),r=Ke(i,[0,1,0]);return{wishX:i[0]*n.iy+r[0]*n.ix,wishZ:i[2]*n.iy+r[2]*n.ix}}function cy(n,t,e,i){const r=n.profile||on,s=n.scale||1,o=Vi(r),a=r.maxSpeed*(e.sprint?r.sprint:1);e.mag>.02?(n.yaw=gf(n.yaw,Math.atan2(t.wishX,t.wishZ),r.turnRate,i),n.speed=li(n.speed,a*e.mag,7,i)):n.speed=li(n.speed,0,9,i);const c=n.speed*i;if(n.x+=Math.sin(n.yaw)*c,n.z+=Math.cos(n.yaw)*c,n.travel+=c,qc(n,c),n.z<Be){const[l,u]=zo(n.x,n.z);n.x=l,n.z=u;const f=oy+o,d=n.x-ee[0],m=n.z-ee[2],g=Math.hypot(d,m);if(g<f&&g>.001){const x=d/g,p=m/g;n.x=ee[0]+x*f,n.z=ee[2]+p*f;const h=-p,b=x,y=Math.sin(n.yaw)*h+Math.cos(n.yaw)*b,S=c*.75*(y>=0?1:-1);n.x+=h*S,n.z+=b*S}}else{const l=et(n.z,be.z0,be.z1);n.x=Math.max(kc(n.x,l)[0],kc(n.x-o,l)[0]+o),n.x=Math.min(n.x,be.x1-o*2),n.z=Math.min(n.z,be.z1-o*2)}n.y=Ot(n.x,n.z),n.bob=Math.sin(n.travel*(Math.PI*2/sf(r))*2)*.13*s*et(n.speed/(8*s),0,1)}const $e={...Vo},Mh={terre:{label:"terre meuble",diggable:!0,quality:.9},argile:{label:"argile",diggable:!0,quality:.72},litiere:{label:"litière de feuilles",diggable:!0,quality:.66},sable:{label:"sable",diggable:!0,quality:.38},roche:{label:"roche",diggable:!1,quality:0},boue:{label:"boue détrempée",diggable:!1,quality:0}},$c=32,qs=9,go=18,$s=55,ly=190,Ks=55,Kc=14,uy={soil:.28,slope:.16,water:.2,shade:.18,food:.18},hy={soil:"terre",moss:"litiere",sand:"sable",rock:"roche",water:"boue",terre:"terre",argile:"argile",litiere:"litiere",sable:"sable",roche:"roche",boue:"boue"};function dy(n,t){if(typeof $e.soilAt=="function"){const e=$e.soilAt(n,t),i=hy[typeof e=="string"?e:e&&e.kind],r=Mh[i];if(r)return{...r,kind:i,assumed:!1}}return{...Mh.terre,kind:"terre",assumed:!0}}function fy(n,t){if(typeof $e.slopeAt=="function")return{deg:$e.slopeAt(n,t),assumed:!1};const e=$e.groundNormal(n,t);return{deg:Math.acos(et(e[1],-1,1))*180/Math.PI,assumed:!1}}function py(n,t){return typeof $e.waterDistance=="function"?{d:$e.waterDistance(n,t),assumed:!1}:typeof $e.distanceToWater=="function"?{d:$e.distanceToWater(n,t),assumed:!1}:{d:null,assumed:!0}}function my(n,t){if(typeof $e.shadeAt=="function")return{v:et($e.shadeAt(n,t),0,1),assumed:!1};const e=$e.TREE,i=e?et(1-Math.hypot(n-e.x,t-e.z)/90,0,1):0;let r=0;for(let s=0;s<sn.length;s++){const o=sn[s];o.h<Xo||Math.abs(o.x-n)>26||Math.abs(o.z-t)>26||Math.hypot(o.x-n,o.z-t)<26&&r++}return{v:et(i*.8+Math.min(r,8)/8*.5,0,1),assumed:!0}}function gy(n,t){const e=$e.RESOURCE_NODES;if(Array.isArray(e)){let r=0;for(const s of e)Math.hypot(s.x-n,s.z-t)<Ks&&r++;return{n:r,assumed:!1}}let i=0;for(let r=0;r<sn.length;r++){const s=sn[r];s.h<Xo||Math.abs(s.x-n)>Ks||Math.abs(s.z-t)>Ks||Math.hypot(s.x-n,s.z-t)<Ks&&i++}return{n:i,assumed:!0}}function _y(n){if(n>=$c)return 0;const t=n<=qs?.78+.22*(n/qs):1-Math.pow((n-qs)/($c-qs),1.4);return et(t,0,1)}function xy(n){return n===null?.5:n<=go?0:n<=$s?et((n-go)/($s-go),0,1):et(1-(n-$s)/(ly-$s),.15,1)}const vy=[{min:78,key:"excellent",label:"excellent"},{min:60,key:"bon",label:"bon"},{min:42,key:"moyen",label:"moyen"},{min:0,key:"ingrat",label:"ingrat"}];function My(n){return vy.find(t=>n>=t.min)}function Sy(n){return n>.66?"à l'ombre":n>.3?"mi-ombre":"plein soleil"}function yy(n){return n>=Kc?"ressources abondantes":n>=Kc*.4?"quelques ressources":"peu de ressources"}function _o(n,t){const e=dy(n,t),i=fy(n,t),r=py(n,t),s=my(n,t),o=gy(n,t),a=[{key:"soil",label:e.label,value:e.quality,assumed:e.assumed},{key:"slope",label:`pente ${i.deg.toFixed(0)}°`,value:_y(i.deg),assumed:i.assumed},{key:"water",label:r.d===null?"eau inconnue":`eau à ${r.d.toFixed(0)}`,value:xy(r.d),assumed:r.assumed},{key:"shade",label:Sy(s.v),value:et(s.v*1.25,0,1),assumed:s.assumed},{key:"food",label:yy(o.n),value:et(o.n/Kc,0,1),assumed:o.assumed}];let c=null;t<$e.TUNNEL_MOUTH?c={key:"underground",text:"sous terre — rien à fonder ici"}:e.diggable?r.d!==null&&r.d<=go?c={key:"water",text:"trop près de l'eau — la galerie serait inondée"}:i.deg>=$c&&(c={key:"slope",text:`pente ${i.deg.toFixed(0)}° — le sol s'effondrerait`}):c={key:"soil",text:`${e.label} — impossible de creuser`};let l=0;for(const f of a)l+=f.value*uy[f.key];const u=Math.round(et(l,0,1)*100);return{x:n,z:t,diggable:!c,blocker:c,score:u,grade:My(u),factors:a,assumed:a.some(f=>f.assumed)}}function Ey(n){return n.diggable?`Site : ${n.grade.label} (${n.score}/100)`:`Site : impossible — ${n.blocker.text}`}function Sh(n){return n.factors.slice().sort((t,e)=>t.value-e.value).map(t=>t.assumed?`${t.label} ?`:t.label).join(" · ")}const Lo={...Vo},ur={graine:"graine",brindille:"brindille",miellat:"miellat"},by={graine:["graine","graines"],brindille:["brindille","brindilles"],miellat:["dose de miellat","doses de miellat"]};function Ty(n,t){const e=by[n]||[n,n];return`${t} ${t>1?e[1]:e[0]}`}const wy=[{x:60,z:110,kind:"graine",amount:3},{x:95,z:105,kind:"brindille",amount:3},{x:55,z:120,kind:"miellat",amount:2},{x:100,z:125,kind:"graine",amount:2},{x:45,z:115,kind:"brindille",amount:2},{x:85,z:135,kind:"miellat",amount:2},{x:110,z:110,kind:"graine",amount:2},{x:65,z:135,kind:"brindille",amount:2},{x:40,z:128,kind:"graine",amount:2}].map((n,t)=>({id:9e3+t,r:10,...n}));let yf=!1;function ds(){return Array.isArray(Lo.RESOURCE_NODES)?Lo.RESOURCE_NODES:(yf=!0,wy)}function Ef(){return ds(),yf}function Ay(n,t){if(!n)return 0;if(typeof Lo.harvestNode=="function")return Lo.harvestNode(n.id,t)||0;const e=Math.max(0,Math.min(t,n.amount));return n.amount-=e,e}function Ry(n,t,e=0){const i=ds();let r=null,s=1/0;for(let o=0;o<i.length;o++){const a=i[o];if(a.amount<=0)continue;const c=Math.hypot(a.x-n,a.z-t);c<=a.r+e*.6&&c<s&&(s=c,r=a)}return r}const yh=1.8,bf=16,Hn=5,Cy=.5;function Py(){const n={carrying:null,cache:null,progress:0,activeId:null,justTook:null,justDropped:null};function t(){n.progress=0,n.activeId=null}function e(g,x){if(n.activeId!==null){const p=ds();for(let h=0;h<p.length;h++){const b=p[h];if(b.id===n.activeId){if(b.amount>0&&Math.hypot(b.x-g.x,b.z-g.z)<=b.r+x*.6)return b;break}}}return Ry(g.x,g.z,x)}function i(g,x){if(n.carrying)return"full";if(!g)return r(x),"idle";if(n.activeId!==g.id&&(n.activeId=g.id,n.progress=0),n.progress+=x/yh,n.progress<1)return"progress";const p=Ay(g,1);return t(),p<=0?"empty":(n.carrying={kind:g.kind},n.justTook={kind:g.kind,qty:p,node:g},"taken")}function r(g){if(n.progress<=0){n.activeId=null;return}n.progress=Math.max(0,n.progress-g*Cy/yh),n.progress===0&&(n.activeId=null)}function s(g){return n.cache?Math.hypot(n.cache.x-g.x,n.cache.z-g.z):1/0}function o(g){return n.carrying?!n.cache||s(g)<=bf:!1}function a(g){if(!o(g))return!1;n.cache||(n.cache={x:g.x,y:Ot(g.x,g.z),z:g.z,items:{},total:0});const x=n.carrying.kind;return n.cache.items[x]=(n.cache.items[x]||0)+1,n.cache.total+=1,n.carrying=null,n.justDropped={kind:x,cache:n.cache},!0}function c(g){if(!n.cache)return 0;let x=g,p=0;for(;x>0;){const h=Object.entries(n.cache.items).filter(([,b])=>b>0).sort((b,y)=>y[1]-b[1])[0];if(!h)break;n.cache.items[h[0]]-=1,n.cache.total-=1,x-=1,p+=1}return p}function l(){n.justTook=null,n.justDropped=null}function u(){return n.cache?n.cache.total:0}function f(){return u()>=Hn}function d(){return!n.cache||n.cache.total===0?null:Object.entries(n.cache.items).filter(([,g])=>g>0).map(([g,x])=>Ty(g,x)).join(" · ")}function m(){const g=n.carrying?`Porte : ${ur[n.carrying.kind]}`:"Porte : rien",x=d();return`${g} · Réserve : ${u()}/${Hn}${x?` (${x})`:""}`}return{state:n,target:e,hold:i,release:r,canDrop:o,drop:a,cacheDistance:s,spend:c,stock:u,enough:f,stockDetail:d,inventoryLine:m,endFrame:l}}const Wi={...Vo},Eh=4,Ly={rock:"la roche ne se creuse pas",soil:"ce sol ne se creuse pas",water:"trop près de l'eau — la galerie serait inondée",slope:"la pente s'effondrerait",underground:"on ne fonde pas dans une galerie déjà creusée",bounds:"le bord du monde — il faut revenir vers le pré",occupied:"une galerie passe déjà sous ce sol","already-founded":"la colonie est déjà fondée"};function jc(n){return n?Ly[n]||`impossible de creuser ici (${n})`:"impossible de creuser ici"}let Zc=null,Tf=!1;function Wa(){return typeof Wi.foundNest!="function"||Tf}function xr(){if(typeof Wi.nestOrigin=="function"){const n=Wi.nestOrigin();if(n)return n}return Zc}function xo(){return!!xr()}function Rl(n,t){if(xo())return{ok:!1,reason:"already-founded"};if(typeof Wi.canFoundAt=="function"){const i=Wi.canFoundAt(n,t)||{};return{ok:!!i.ok,reason:i.reason,assumed:!1}}const e=_o(n,t);return e.diggable?{ok:!0,assumed:!0}:{ok:!1,reason:e.blocker.key,assumed:!0}}function Iy(n,t){const e=Rl(n,t);if(!e.ok)return e;if(typeof Wi.foundNest=="function"){const i=Wi.foundNest(n,t)||{};return i.ok&&(Zc={x:n,z:t}),{ok:!!i.ok,reason:i.reason,assumed:!1}}return Tf=!0,Zc={x:n,z:t},{ok:!0,assumed:!0}}function bh(n,t,e,i){const r=e-n,s=i-t;if(Math.hypot(r,s)<1)return"ici";const o=s>8?"nord":s<-8?"sud":"",a=r>8?"est":r<-8?"ouest":"";return o&&a?`au ${o}-${a}`:a?`à l'${a}`:`au ${o}`}const Ve={...Vo},Th=[{k:"descend",s:3.2},{k:"dark",s:2.6},{k:"lay",s:3.4},{k:"rest",s:2.6},{k:"ascend",s:3.2}],wh=6,Ah=6,Rh=8,Dy=5.2,Uy=1.8,Ny=5.5,Ch=26,Fy=15,Ph=(n,t,e)=>[wt(n[0],t[0],e),wt(n[1],t[1],e),wt(n[2],t[2],e)],js=n=>n*n*(3-2*n);function Oy(n){const t=n._furnishing&&n._furnishing.piles&&n._furnishing.piles[0],e=t&&t.lamp&&t.lamp.p;return e?[e[0],e[2]]:[n.chamber.x,n.chamber.z]}function By(){const n={phase:null,i:0,t:0,brood:0,mixT:null,justEnded:!1,justLaid:!1};let t=null,e=null,i=null,r=null,s=null,o=null,a=0,c=null,l=null,u=0,f=!1;function d(){return n.phase!==null}function m(v){if(d())return!1;const A=typeof Ve.getFoundedNest=="function"?Ve.getFoundedNest():null;if(!A||!A.chamber)return!1;t=A,i=[t.mouth.x,t.mouth.y,t.mouth.z],e={x:v.x,y:v.y,z:v.z,yaw:v.yaw};const C=t.chamber;o=Oy(t);let _=C.x-o[0],M=C.z-o[1];const L=Math.hypot(_,M);L<.5?(_=0,M=1):(_/=L,M/=L);const I=Math.min(Ny,L);r=[o[0]+_*I,t.floorY,o[1]+M*I],a=Math.atan2(_,M),u=Math.atan2(-_,-M);let U=i[0]-C.x,W=i[2]-C.z;const B=Math.hypot(U,W);return B<.01?(U=0,W=1):(U/=B,W/=B),s=[i[0]+U*21,0,i[2]+W*21],s[1]=Ve.groundY(s[0],s[2]),c=[i[0]-Math.sin(e.yaw)*Ch,i[1]+Fy,i[2]-Math.cos(e.yaw)*Ch],l=[i[0],i[1]+1,i[2]],n.phase="descend",n.i=0,n.t=0,n.justEnded=!1,f=!1,!0}function g(v,A,C){if(A<.34){const I=js(A/.34);v.x=wt(e.x,i[0],I),v.z=wt(e.z,i[2],I),v.y=wt(e.y,i[1],I),v.speed=6,v.travel+=6*C,v.yaw=e.yaw,v.floorY=v.y;return}const M=js((A-.34)/(1-.34)),L=Ph([i[0],i[1],i[2]],r,M);v.x=L[0],v.y=L[1],v.z=L[2],v.floorY=v.y,v.speed=0,v.yaw=wt(e.yaw,u,M)}function x(v){v.x=r[0],v.y=r[1],v.z=r[2],v.floorY=t.floorY,v.yaw=u,v.speed=0}function p(v,A,C){if(A<.66){const L=js(A/.66),I=Ph(r,[i[0],i[1],i[2]],L);v.x=I[0],v.y=I[1],v.z=I[2],v.floorY=v.y,v.yaw=wt(u,Math.atan2(s[0]-i[0],s[2]-i[2]),L),v.speed=0;return}const M=js((A-.66)/(1-.66));v.x=wt(i[0],s[0],M),v.z=wt(i[2],s[2],M),v.y=wt(i[1],s[1],M),v.floorY=v.y,v.speed=7,v.travel+=7*C}function h(v){if(!d())return null;const A=f;if(f=!1,!(n.phase==="dark"||n.phase==="lay"||n.phase==="rest"||n.phase==="ascend"&&n.t<.45))return{eye:c,aim:n.phase==="ascend"?[v.x,v.y+3,v.z]:l,cut:A};const _=t.chamber;return{eye:[_.x+Math.sin(a)*Rh,t.floorY+Dy,_.z+Math.cos(a)*Rh],aim:[(v.x+o[0])*.5,t.floorY+Uy,(v.z+o[1])*.5],cut:A}}function b(v,A){if(n.justEnded=!1,n.justLaid=!1,n.mixT!==null&&typeof Ve.setFoundedMix=="function"&&(n.mixT+=A,Ve.setFoundedMix(et(n.mixT/wh,0,1)),n.mixT>=wh&&(n.mixT=null)),!d())return null;const C=Th[n.i];switch(n.t=et(n.t+A/C.s,0,1),C.k){case"descend":g(v,n.t,A);break;case"ascend":p(v,n.t,A);break;default:x(v);break}if(n.t>=1){n.i++,n.t=0;const _=Th[n.i];n.phase=_?_.k:null,_?y(_.k):(v.floorY=null,v.y=Ve.groundY(v.x,v.z),v.speed=0,n.justEnded=!0,t=null)}return n.phase}function y(v){if(v==="dark"){typeof Ve.sealNest=="function"&&Ve.sealNest(!0),f=!0;return}if(v==="lay"){n.brood=Math.min(n.brood+1,Ah),typeof Ve.populateNest=="function"&&Ve.populateNest(n.brood),n.justLaid=!0,n.mixT===null&&typeof Ve.foundedMix=="function"&&Ve.foundedMix()<1&&(n.mixT=0);return}v==="ascend"&&(typeof Ve.sealNest=="function"&&Ve.sealNest(!1),f=!0)}const S={descend:"Elle descend dans la chambre.",dark:"Elle referme l'entrée derrière elle.",rest:"Le couvain éclaire la chambre.",ascend:"Elle remonte au jour."};function E(){return d()?n.phase==="lay"?n.brood===1?"Première ponte.":"Elle pond.":S[n.phase]||null:null}function T(){return n.justLaid?n.brood===1?"Première ponte — la colonie existe.":`Ponte : ${n.brood}ᵉ couvée.`:null}return{state:n,begin:m,update:b,shot:h,promptText:E,eventText:T,active:d,brood:()=>n.brood,canLayMore:()=>n.brood<Ah}}const zy={harvest:!0,found:!0,lay:!0},Lh=2.2,ky=15;function Hy({profile:n=on}={}){const t=Py(),e=Vi(n),i=By();let r=0,s=0,o=null,a=0;function c(S){const E=xr();return E?Math.hypot(E.x-S.x,E.z-S.z):1/0}function l(S){return xo()&&!Wa()&&i.canLayMore()&&t.stock()>=Hn&&c(S)<=ky}function u(S,E=3.2){o=S,a=E}function f(S){if(i.active())return{kind:"sequence"};if(S.climb)return{kind:"climb",climbTarget:null};if(t.state.carrying){const A=t.state.carrying.kind;if(t.canDrop(S))return{kind:"drop",label:t.state.cache?"ajouter au dépôt":"poser ici — ce sera le dépôt"};const C=t.cacheDistance(S),_=t.state.cache;return{kind:"return",label:`rapporter ${ur[A]} au dépôt (${C.toFixed(0)} u ${bh(S.x,S.z,_.x,_.z)})`}}if(t.state.cache&&!xo()&&t.enough()&&t.cacheDistance(S)<=bf){const A=Rl(S.x,S.z);return{kind:"found",ok:A.ok,reason:A.reason,assumed:A.assumed}}if(l(S))return{kind:"lay"};const T=t.target(S,e);if(T)return{kind:"harvest",node:T};const v=yS(S);return v?{kind:"climb",climbTarget:v}:{kind:"none"}}function d(S,E,T,v){i.update(S,v);const A=i.eventText();A&&u(A,6);const C=f(S);switch(a>0&&(a-=v,a<=0&&(o=null)),(C.kind!=="harvest"||!T)&&t.release(v),(C.kind!=="found"||!T||!C.ok)&&(r=Math.max(0,r-v/Eh)),(C.kind!=="lay"||!T)&&(s=Math.max(0,s-v/Lh)),C.kind){case"harvest":{if(T){const _=t.hold(C.node,v);_==="taken"?u(`elle emporte ${ur[t.state.carrying.kind]}`):_==="empty"&&u("plus rien à prendre ici")}break}case"found":{if(T&&C.ok&&(r+=v/Eh,r>=1)){r=0;const _=Iy(S.x,S.z);u(_.ok?Wa()?"Colonie fondée ici. (le monde ne creuse pas encore la chambre)":"Colonie fondée ici.":`impossible : ${jc(_.reason)}`,6),_.ok&&(t.spend(Hn),i.begin(S))}break}case"lay":{T&&(s+=v/Lh,s>=1&&(s=0,i.begin(S)&&t.spend(Hn)));break}case"drop":if(E){const _=t.state.carrying.kind;t.drop(S)&&u(t.stock()===1?`dépôt ouvert ici — ${ur[_]} posée`:`${ur[_]} ajoutée au dépôt (${t.stock()}/${Hn})`)}break;case"climb":E&&bS(S,C.climbTarget);break}return C}function m(S){return`${Math.round(S*100)}%`}function g(S,E){if(E.kind==="sequence")return i.promptText();if(E.kind==="lay")return s>0?`Ponte… ${m(s)}`:`E (maintenir) — descendre pondre (${Hn} unités du dépôt)`;if(E.kind==="climb")return TS(S,E.climbTarget);if(E.kind==="return")return E.label;if(E.kind==="drop")return`E — ${E.label}`;if(E.kind==="harvest"){const T=E.node;return t.state.progress>0?`Récolte… ${m(t.state.progress)}`:`E (maintenir) — récolter ${ur[T.kind]}`}return E.kind==="found"?E.ok?r>0?`Creusement… ${m(r)}`:"E (maintenir) — fonder la colonie ici":`Fonder ici : ${jc(E.reason)}`:null}function x(S){if(i.active())return"La fondation : elle descend pondre.";if(xo()){const v=xr(),A=Math.hypot(v.x-S.x,v.z-S.z),C=A<12?"ici":`à ${A.toFixed(0)} u ${bh(S.x,S.z,v.x,v.z)}`,_=Wa()?" [chambre non creusée]":"",M=i.brood();if(M===0)return`Colonie fondée ${C}. Objectif : descendre pondre.${_}`;if(!i.canLayMore())return`${M} couvées — la chambre est pleine. Suite : les ouvrières.${_}`;const L=Hn-t.stock();return L>0?`${M} couvée${M>1?"s":""}. Objectif : ${L} unité${L>1?"s":""} de plus pour la suivante.${_}`:`${M} couvée${M>1?"s":""}. Objectif : rentrer pondre — le nid est ${C}.${_}`}const E=Hn-t.stock();if(t.state.carrying)return t.state.cache?`Objectif : rapporter au dépôt — encore ${E} pour fonder`:"Objectif : poser ce fardeau — le premier dépôt fixe le site de la colonie";if(t.enough())return"Objectif : fonder la colonie sur le dépôt";const T=Ef()?" [nœuds provisoires]":"";return`Objectif : récolter ${E} unité${E>1?"s":""} de plus${T}`}function p(){return t.inventoryLine()}function h(){return o}function b(S){return S.kind==="harvest"&&t.state.progress>0?t.state.progress:S.kind==="found"&&r>0?r:S.kind==="lay"&&s>0?s:null}function y(S,E){switch(E.kind){case"harvest":return{x:E.node.x,z:E.node.z,radius:Math.max(E.node.r,6),blocked:!1};case"found":{const T=t.state.cache;return T?{x:T.x,z:T.z,radius:11,blocked:!E.ok}:null}case"drop":{const T=t.state.cache;return{x:T?T.x:S.x,z:T?T.z:S.z,radius:T?11:7,blocked:!1}}case"return":{const T=t.state.cache;return T?{x:T.x,z:T.z,radius:11,blocked:!1}:null}case"lay":{const T=xr();return T?{x:T.x,z:T.z,radius:9,blocked:!1}:null}case"climb":{const T=E.climbTarget;if(!T)return null;if(T.kind==="tree")return{x:Gt.x,z:Gt.z,radius:Gt.w+5,blocked:!1};const v=sn[T.i];return v?{x:v.x,z:v.z,radius:5,blocked:!1}:null}default:return null}}return{harvest:t,laying:i,update:d,resolve:f,promptText:g,objectiveText:x,inventoryText:p,message:h,holdProgress:b,targetMark:y,busy:()=>i.active(),shot:S=>i.shot(S),isHold:S=>!!zy[S.kind],endFrame:()=>t.endFrame()}}const Io={graine:{r:[.95,.78,1.3],color:14270852,emissive:0},brindille:{r:[2.9,.26,.26],color:8016424,emissive:0},miellat:{r:[.9,.88,.9],color:15247420,emissive:3810309}},Gy=2,Vy=12;let Xa=null;function Wy(){return Xa||(Xa=new Oo(1,10,7)),Xa}const Ih=new Map;function wf(n){let t=Ih.get(n);if(!t){const e=Io[n];t=new rn({color:e.color,emissive:e.emissive,roughness:.7,metalness:.02}),Ih.set(n,t)}return t}const Ya=new Qt,Dh=new k,Uh=new k,Nh=new k,Fh=new k;function Af(n,t,e,i,r){Dh.set(e[0],e[1],e[2]),Uh.set(i[0],i[1],i[2]),Nh.set(r[0],r[1],r[2]),Ya.makeBasis(Dh,Uh,Nh),Fh.set(t[0],t[1],t[2]),Ya.setPosition(Fh),n.matrix.copy(Ya)}function qa(n){const t=new zt(Wy(),wf(n));return t.matrixAutoUpdate=!1,t.castShadow=!0,t.visible=!1,t}function Oh(n,t,e,i,r,s=0){const o=Io[t].r.map(l=>l*Gy),a=Math.cos(r),c=Math.sin(r);Af(n,[e,Ot(e,i)+o[1]*.9+s,i],[a*o[0],0,c*o[0]],[0,o[1],0],[-c*o[2],0,a*o[2]]),n.visible=!0}function Xy({scene:n,profile:t=on}){const e=new Me;e.name="gameplay-props",n.add(e);const i={};for(const m of Object.keys(Io))i[m]=qa(m),e.add(i[m]);const r=[];for(let m=0;m<Vy;m++){const g=qa("graine");r.push(g),e.add(g)}let s=-1;const o=Ef(),a=[];if(o)for(const m of ds()){const g=[];for(let x=0;x<3;x++){const p=qa(m.kind);e.add(p),g.push(p)}a.push({node:m,clutch:g,drawn:-1})}function c(){for(const m of a){const g=m.node,x=Math.max(0,Math.min(m.clutch.length,g.amount));if(x!==m.drawn){m.drawn=x;for(let p=0;p<m.clutch.length;p++)if(p<x){const h=p/m.clutch.length*Math.PI*2+g.id;Oh(m.clutch[p],g.kind,g.x+Math.cos(h)*3.2,g.z+Math.sin(h)*3.2,h)}else m.clutch[p].visible=!1}}}function l(m){if(!m||m.total===s)return;s=m.total;let g=0;for(const[x,p]of Object.entries(m.items))for(let h=0;h<p&&g<r.length;h++,g++){const b=g*2.399,y=1.6+g*1.15,S=r[g];S.material=wf(x),Oh(S,x,m.x+Math.cos(b)*y,m.z+Math.sin(b)*y,b*1.7)}for(;g<r.length;g++)r[g].visible=!1}function u(m,g){for(const T of Object.keys(i))i[T].visible=!1;if(!g)return;const x=i[g.kind];if(!x)return;const p=wl(m),h=p.basis,b=p.scale,y=(m.profile||t).body.mandible,S=[0,y.tip[1]-.15,y.tip[2]+.55],E=Io[g.kind].r;Af(x,Mn(p,S),Rt(h.side,E[0]*b),Rt(h.up,E[1]*b),Rt(h.fwd,E[2]*b)),x.visible=!0}function f(m,g){u(m,g.carrying),l(g.cache),o&&c()}function d(){n.remove(e)}return{group:e,update:f,dispose:d,provisional:o}}const Yy="position:fixed;color:#e6d3ab;font:13px/1.5 monospace;pointer-events:none;text-shadow:0 1px 3px rgba(0,0,0,0.9);z-index:5;";function ri(n,t){const e=document.createElement("div");return e.id=n,e.style.cssText=Yy+t,document.body.appendChild(e),e}function qy(){return{setSite(){},setPrompt(){},setObjective(){},setStock(){},setEvent(){},setHold(){},toggleControls(){},closeControls(){},dispose(){}}}const $y=[["ZQSD / WASD","se déplacer"],["Maj","courir"],["Souris (glisser)","tourner la caméra"],["Molette","reculer / rapprocher la vue"],["E","action — appui court, ou maintenu quand la barre apparaît"],["H","afficher / masquer cette aide"]];function Ky(){if(typeof document>"u")return qy();const n=ri("event","left:12px;bottom:142px;color:#cfe0a8;"),t=ri("prompt","left:12px;bottom:122px;font-size:14px;color:#ffe6b0;"),e=ri("objective","left:12px;bottom:88px;color:#f0dfb8;"),i=ri("stock","left:12px;bottom:70px;opacity:0.85;"),r=ri("siteinfo","left:12px;bottom:52px;"),s=ri("sitedetail","left:12px;bottom:34px;opacity:0.62;font-size:12px;"),o=ri("hold","left:12px;bottom:112px;width:190px;height:5px;background:rgba(0,0,0,0.45);border-radius:3px;overflow:hidden;"),a=document.createElement("div");a.style.cssText="height:100%;width:0%;background:#ffc46a;border-radius:3px;",o.appendChild(a),o.style.display="none";const c=ri("controls","right:12px;top:12px;padding:10px 14px;background:rgba(12,10,8,0.62);border-radius:5px;line-height:1.8;");c.innerHTML='<div style="opacity:0.75;margin-bottom:4px">Commandes</div>'+$y.map(([h,b])=>`<div><span style="color:#ffe6b0">${h}</span><span style="opacity:0.72"> — ${b}</span></div>`).join("");let l=!0,u=null,f=null,d=null,m=null,g=null,x=null;const p=(h,b,y)=>b===y?y:(h.textContent=b||"",b);return{setSite(h,b,y){h!==u&&(r.textContent=h,r.style.color=y?"#e6d3ab":"#d98b6a",u=h),b!==f&&(s.textContent=b,f=b)},setPrompt(h){d=p(t,h,d)},setObjective(h){m=p(e,h,m)},setStock(h){g=p(i,h,g)},setEvent(h){x=p(n,h,x)},setHold(h){const b=h!==null&&h>.001;b!==(o.style.display==="block")&&(o.style.display=b?"block":"none"),b&&(a.style.width=`${Math.min(100,h*100)}%`)},toggleControls(){l=!l,c.style.display=l?"block":"none"},closeControls(){l&&(l=!1,c.style.display="none")},dispose(){for(const h of[e,i,r,s,t,n,o,c])h.parentNode&&h.parentNode.removeChild(h)}}}const Bh=new J("#FFB03A").multiplyScalar(1.5),jy=new J("#E8663A").multiplyScalar(1.4),zh=.72,Zy=.2,Jy=`
uniform vec3 uColor;
uniform float uTime;
uniform float uOpacity;
varying vec2 vMarkerUv;

void main() {
  vec2 p = vMarkerUv * 2.0 - 1.0;
  float r = length(p);
  if (r > 1.0) discard;

  // the soft band: fades to nothing on both sides, so there is no edge
  float band = 1.0 - smoothstep(0.0, ${Zy.toFixed(2)}, abs(r - ${zh.toFixed(2)}));
  band = pow(band, 1.6);

  // a bright arc sweeping around it, so the ring reads as alive without
  // changing size — three lobes, because one reads as a bug and many read
  // as a texture
  float a = atan(p.y, p.x);
  float sweep = 0.55 + 0.45 * sin(a * 3.0 - uTime * 1.9);

  // a faint wash inside the band, which is what stops the middle of a large
  // ring from looking empty on open ground
  float fill = (1.0 - smoothstep(0.0, ${zh.toFixed(2)}, r)) * 0.14;

  float alpha = (band * sweep + fill) * uOpacity;
  gl_FragColor = vec4(uColor * (0.75 + 0.55 * band), alpha);
}
`;function Qy(n){const t={uColor:{value:Bh.clone()},uTime:{value:0},uOpacity:{value:1}},e=new Yn({uniforms:t,vertexShader:`
      varying vec2 vMarkerUv;
      void main() {
        vMarkerUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:Jy,transparent:!0,blending:ja,depthTest:!1,depthWrite:!1,side:he}),i=new zt(new ss(2,2),e);return i.rotation.x=-Math.PI/2,i.name="target-marker",i.renderOrder=900,i.frustumCulled=!1,i.visible=!1,n.add(i),{show(r,s,o,a){if(!r){i.visible=!1;return}i.visible=!0,i.position.set(r.x,Ot(r.x,r.z)+.35,r.z),i.scale.setScalar(s),t.uTime.value=a,t.uColor.value.copy(o?jy:Bh),t.uOpacity.value=o?.95:.8+.2*Math.sin(a*3.4)},dispose(){n.remove(i),i.geometry.dispose(),e.dispose()}}}const kh=[140,170],Hh=-Math.PI/2,t1=.25,e1=3;function n1({scene:n,camera:t,domElement:e,profile:i=on}){const r=AS(kh[0],0,kh[1],i);r.yaw=Hh,r.y=Ot(r.x,r.z),qc(r,0),qc(r,0),r.y=Ot(r.x,r.z);const s=RS(i),{group:o,updatePose:a}=US(i);n.add(o),n.add(mS(o));const c=NS(e,i);c.state.camYaw=Hh;const l=$S(t),u=Ky(),f=Qy(n),d=Hy({profile:i}),m=Xy({scene:n,profile:i});l.update(r,c.state.camYaw,c.state.wantPitch,c.state.camDist,0);let g=0,x=null,p=null,h=null;function b(E){g-=E;const T=x?Math.hypot(r.x-x[0],r.z-x[1]):1/0;if((p||h)&&g>0&&T<e1)return;g=t1,x=[r.x,r.z];const v=xr();if(v){h||(h=_o(v.x,v.z)),u.setSite(`Nid fondé — site ${h.grade.label} (${h.score}/100)`,Sh(h),!0);return}p=_o(r.x,r.z),u.setSite(Ey(p),Sh(p),p.diggable)}function y(E,T){const v=c.readMoveIntent();c.consumeHelp()&&u.toggleControls();const A=d.update(r,c.consumeInteract(),c.isInteractHeld(),E);if(!d.busy())if(r.climb)wS(r,et(v.iy,-1,1),E);else{const _=ay(v,l.eye,l.aim);cy(r,_,v,E)}LS(r,s,E),a(r,s,T),o.position.set(0,0,0),Yr.position.set(r.x,r.y,r.z),Yr.radius=Vi(i),m.update(r,d.harvest.state),b(E),u.setPrompt(d.promptText(r,A)),u.setObjective(d.objectiveText(r)),u.setStock(d.inventoryText()),u.setEvent(d.message()),u.setHold(d.holdProgress(A));const C=d.targetMark(r,A);f.show(C,C?C.radius:0,C?C.blocked:!1,T),d.harvest.state.carrying&&u.closeControls(),d.endFrame(),!c.state.dragging&&!r.climb&&!d.busy()&&v.mag>.02&&(c.state.camYaw=gf(c.state.camYaw,r.yaw,2.2,E)),d.laying.state.justEnded&&(c.state.camYaw=r.yaw),l.update(r,c.state.camYaw,c.state.wantPitch,c.state.camDist,E,d.shot(r))}typeof window<"u"&&(window.__decorPenetration=sy,window.__antRadius=Vi(i),window.__site=(E,T)=>_o(E,T),window.__avatar=i,window.__mushroomRadii=Mf,window.__grass=sn,window.__nodes=ds,window.__harvest=()=>d.harvest.state,window.__nestOrigin=xr,window.__canFound=(E,T)=>{const v=Rl(E,T);return{...v,text:jc(v.reason)}},window.__toWater=Kn,window.__laying=()=>{const E=d.laying.state;return{phase:E.phase,t:+E.t.toFixed(3),brood:E.brood,mix:hs()}});function S(){c.dispose(),u.dispose(),f.dispose(),m.dispose()}return{ant:r,group:o,update:y,dispose:S}}const Bi={resolution:[{label:"50 %",value:.5},{label:"75 %",value:.75},{label:"100 %",value:1},{label:"150 % (net)",value:1.5}],shadows:[{label:"aucune",value:0},{label:"basses (1024)",value:1024},{label:"normales (2048)",value:2048}],grass:[{label:"clairsemée",value:.35},{label:"moyenne",value:.65},{label:"dense",value:1}]},Rf="myrmidia.quality";function i1(){const n={resolution:2,shadows:2,grass:2,textures:!0};try{const t=localStorage.getItem(Rf);return t?{...n,...JSON.parse(t)}:n}catch{return n}}function r1(){try{localStorage.setItem(Rf,JSON.stringify(We))}catch{}}const We=i1(),s1=[];function o1(){for(const n of s1)n(vo())}function vo(){return{resolution:Bi.resolution[We.resolution].value,shadowMap:Bi.shadows[We.shadows].value,grassFraction:Bi.grass[We.grass].value,textures:We.textures}}function $a(n){We[n]=(We[n]+1)%Bi[n].length}function a1({renderer:n,sun:t,scene:e}){const i=Math.min(window.devicePixelRatio||1,2);function r(){n.setPixelRatio(i*vo().resolution),n.setSize(window.innerWidth,window.innerHeight)}function s(){const y=vo().shadowMap;n.shadowMap.enabled=y>0,y>0&&(t.shadow.mapSize.set(y,y),t.shadow.map?.dispose(),t.shadow.map=null),n.shadowMap.needsUpdate=!0}function o(){const y=We.textures;e.traverse(S=>{const E=Array.isArray(S.material)?S.material:S.material?[S.material]:[];for(const T of E){if(y)T.userData.savedMap!==void 0&&(T.map=T.userData.savedMap,T.userData.savedMap=void 0);else if(T.map)T.userData.savedMap=T.map,T.map=null;else continue;T.needsUpdate=!0}})}let a=null,c=0;function l(){if(!a){if(e.traverse(y=>{y.name==="grass"&&(a=y)}),!a)return;c=a.count}a.count=Math.max(1,Math.round(c*vo().grassFraction))}if(r(),s(),typeof document>"u")return{update(){},toggle(){},dispose(){}};const u=document.createElement("div");u.id="quality",u.style.cssText="position:fixed;right:12px;bottom:12px;padding:9px 12px;background:rgba(12,10,8,0.68);border-radius:5px;color:#e6d3ab;font:12px/1.7 monospace;pointer-events:none;z-index:6;text-shadow:0 1px 3px rgba(0,0,0,0.9);display:none;",document.body.appendChild(u);const f=document.createElement("div");f.id="fps",f.style.cssText="position:fixed;right:12px;bottom:12px;padding:4px 8px;background:rgba(12,10,8,0.55);border-radius:4px;color:#cfe0a8;font:12px/1.4 monospace;pointer-events:none;z-index:6;text-shadow:0 1px 3px rgba(0,0,0,0.9);",document.body.appendChild(f);let d=!1;function m(){const y=[["1","Résolution",Bi.resolution[We.resolution].label],["2","Ombres",Bi.shadows[We.shadows].label],["3","Herbe",Bi.grass[We.grass].label+" (au prochain chargement)"],["4","Textures",We.textures?"oui":"non"]];u.innerHTML='<div style="opacity:0.75;margin-bottom:3px">Graphismes — P pour fermer</div>'+y.map(([S,E,T])=>`<div><span style="color:#ffe6b0">${S}</span><span style="opacity:0.7"> ${E} : </span><span style="color:#cfe0a8">${T}</span></div>`).join("")}m();let g=0,x=0,p=0;function h(y){b.key(y.code)&&y.preventDefault()}window.addEventListener("keydown",h),l(),o();const b={update(y){if(g++,x+=y,x>=.5){p=Math.round(g/x),g=0,x=0;const S=n.getContext();f.textContent=d?`${p} i/s · ${S.drawingBufferWidth}x${S.drawingBufferHeight} · ${n.info.render.calls} appels`:`${p} i/s · P : graphismes`}},key(y){if(y==="KeyP")return d=!d,u.style.display=d?"block":"none",f.style.bottom=d?"104px":"12px",!0;if(!d)return!1;if(y==="Digit1")$a("resolution"),r();else if(y==="Digit2")$a("shadows"),s();else if(y==="Digit3")$a("grass"),l();else if(y==="Digit4")We.textures=!We.textures,o();else return!1;return m(),r1(),o1(),!0},dispose(){window.removeEventListener("keydown",h),u.remove(),f.remove()}};return b}const c1=document.getElementById("app"),_i=qx(c1),nn=$x(),Le=new Ux;Le.background=new J(1709584);Le.fog=new ul(1709584,40,220);const Mo=new Hx(12572917,7236152,.85);Le.add(Mo);const Ka={sky:new J(4873350),ground:new J(2367283),intensity:.55},fn=Ml,In=Sl,Gh=new J,Vh=new J,Wh=new J,Xh=new J,Hr={sky:new J(fn.hemiSky),ground:new J(fn.hemiGround),fog:new J(fn.fog),bg:new J(fn.sky),sun:new J(fn.sunColor)},Gr={sky:new J(In.hemiSky),ground:new J(In.hemiGround),fog:new J(In.fog),bg:new J(In.sky),sun:new J(In.sunColor)},De=new Wx(fn.sunColor,fn.sunIntensity);De.castShadow=!0;const fs=110,Jc=2048,So=220,Zs=2*fs/Jc;De.shadow.mapSize.set(Jc,Jc);De.shadow.camera.left=-fs;De.shadow.camera.right=fs;De.shadow.camera.top=fs;De.shadow.camera.bottom=-fs;De.shadow.camera.near=1;De.shadow.camera.far=So*2.4;De.shadow.bias=-.0015;Le.add(De);Le.add(De.target);function l1(n){const t=Math.round(n.position.x/Zs)*Zs,e=Math.round(n.position.z/Zs)*Zs,i=Go();De.target.position.set(t,0,e),De.position.set(t+i[0]*So,i[1]*So,e+i[2]*So)}const u1=new J(1645102),h1=new J(789270),ps=rf();Le.add(ps.group);const Cl=n1({scene:Le,camera:nn,domElement:_i.domElement});Le.traverse(n=>{const t=Array.isArray(n.material)?n.material:n.material?[n.material]:[];for(const e of t)e.isMeshStandardMaterial&&Ho(e)});window.__renderer=_i;window.__ant=Cl.ant;window.__rooms=ps.rooms;window.__camera=nn;window.__scene=Le;window.__nodes=di;window.__world=ps;window.__contain=zo;window.__profileR=Oe;window.__groundY=Ot;window.__tree=Gt;window.__world6={shadeAt:$d,canFoundAt:Tl,foundNest:tf,nestOrigin:bl,getFoundedNest:Qd,populateNest:ef,sealNest:nf,harvestNode:Jd,get nodes(){return di},foundedMix:hs,sunDir:Go,waterDepthAt:gi,distanceToWater:Kn};_i.setResizeCallback(n=>{nn.aspect=n,nn.updateProjectionMatrix()});const Yh=new Xx;function Cf(){const n=Math.min(Yh.getDelta(),.05),t=Yh.elapsedTime;ps.update(n,t,nn),Cl.update(n,t),Pf(),_i.render(Le,nn),_1.update(n)}const d1=52,f1=26;function qh(n,t,e){const i=1-et((e+24)/40,0,1),r=et(1-(Math.abs(n)-d1)/30,0,1),s=et(1-(t-f1)/30,0,1);return i*r*s}function p1(n,t){const e=Math.min(qh(n.x,n.y,n.z),qh(t.x,t.y,t.z)),i=Math.min(Vc(n.x,n.y,n.z),Vc(t.x,t.y,t.z));return Math.max(e,i)}const m1=6;let Js=null;function g1(){const n=performance.now()/1e3;Js===null&&bl()&&(Js=n),Js!==null&&qd(et((n-Js)/m1,0,1))}function Pf(){g1();const n=hs();Gh.copy(Hr.sky).lerp(Gr.sky,n),Vh.copy(Hr.ground).lerp(Gr.ground,n),Wh.copy(Hr.fog).lerp(Gr.fog,n),Xh.copy(Hr.bg).lerp(Gr.bg,n),De.color.copy(Hr.sun).lerp(Gr.sun,n),De.intensity=wt(fn.sunIntensity,In.sunIntensity,n);const t=1-p1(nn.position,Cl.ant);Le.fog.color.copy(u1).lerp(Wh,t),Le.fog.near=wt(6,wt(fn.fogNear,In.fogNear,n),t),Le.fog.far=wt(135,wt(fn.fogFar,In.fogFar,n),t),Le.background.copy(h1).lerp(Xh,t),_i.toneMappingExposure=wt(1.28,wt(fn.exposure,In.exposure,n),t),Mo.color.copy(Ka.sky).lerp(Gh,t),Mo.groundColor.copy(Ka.ground).lerp(Vh,t),Mo.intensity=wt(Ka.intensity,wt(fn.hemiIntensity,In.hemiIntensity,n),t),pS(t),l1(nn)}const _1=a1({renderer:_i,sun:De,scene:Le});_i.setAnimationLoop(Cf);window.__frame=Cf;window.__renderView=(n,t,e=0)=>{nn.position.set(n[0],n[1],n[2]),nn.lookAt(t[0],t[1],t[2]),nn.updateMatrixWorld(),ps.update(1/60,e,nn),Pf(),_i.render(Le,nn)};
