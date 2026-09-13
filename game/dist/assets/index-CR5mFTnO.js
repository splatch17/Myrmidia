(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fl="169",Rp=0,iu=1,Cp=2,yd=1,bd=2,Yn=3,gi=0,Be=1,de=2,fi=0,Er=1,ru=2,su=3,ou=4,Pp=5,Ui=100,Lp=101,Ip=102,Dp=103,Up=104,Np=200,Fp=201,Op=202,Bp=203,ac=204,cc=205,zp=206,kp=207,Gp=208,Hp=209,Vp=210,Wp=211,Xp=212,Yp=213,qp=214,lc=0,uc=1,hc=2,Cr=3,dc=4,fc=5,pc=6,mc=7,Td=0,$p=1,Kp=2,pi=0,jp=1,Zp=2,Jp=3,wd=4,Qp=5,tm=6,em=7,Ad=300,Pr=301,Lr=302,gc=303,_c=304,$o=306,Oo=1e3,Bi=1001,xc=1002,qe=1003,nm=1004,Fs=1005,bn=1006,la=1007,zi=1008,Jn=1009,Rd=1010,Cd=1011,fs=1012,pl=1013,Wi=1014,Bn=1015,Ms=1016,ml=1017,gl=1018,Ir=1020,Pd=35902,Ld=1021,Id=1022,wn=1023,Dd=1024,Ud=1025,yr=1026,Dr=1027,_l=1028,xl=1029,Nd=1030,vl=1031,Ml=1033,go=33776,_o=33777,xo=33778,vo=33779,vc=35840,Mc=35841,Sc=35842,Ec=35843,yc=36196,bc=37492,Tc=37496,wc=37808,Ac=37809,Rc=37810,Cc=37811,Pc=37812,Lc=37813,Ic=37814,Dc=37815,Uc=37816,Nc=37817,Fc=37818,Oc=37819,Bc=37820,zc=37821,Mo=36492,kc=36494,Gc=36495,Fd=36283,Hc=36284,Vc=36285,Wc=36286,im=3200,Od=3201,Bd=0,rm=1,hi="",ln="srgb",Mi="srgb-linear",Sl="display-p3",Ko="display-p3-linear",Bo="linear",ue="srgb",zo="rec709",ko="p3",tr=7680,au=519,sm=512,om=513,am=514,zd=515,cm=516,lm=517,um=518,hm=519,cu=35044,dm=35048,lu="300 es",$n=2e3,Go=2001;class Or{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ua=Math.PI/180,Xc=180/Math.PI;function Ss(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]).toLowerCase()}function Xe(n,t,e){return Math.max(t,Math.min(e,n))}function fm(n,t){return(n%t+t)%t}function ha(n,t,e){return(1-e)*n+e*t}function Xr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function We(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class jt{constructor(t=0,e=0){jt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Xe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,i,r,s,o,a,c,l){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l)}set(t,e,i,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],x=r[0],p=r[3],m=r[6],b=r[1],E=r[4],S=r[7],y=r[2],w=r[5],M=r[8];return s[0]=o*x+a*b+c*y,s[3]=o*p+a*E+c*w,s[6]=o*m+a*S+c*M,s[1]=l*x+u*b+h*y,s[4]=l*p+u*E+h*w,s[7]=l*m+u*S+h*M,s[2]=d*x+f*b+g*y,s[5]=d*p+f*E+g*w,s[8]=d*m+f*S+g*M,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,d=a*c-u*s,f=l*s-o*c,g=e*h+i*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=h*x,t[1]=(r*l-u*i)*x,t[2]=(a*i-r*o)*x,t[3]=d*x,t[4]=(u*e-r*c)*x,t[5]=(r*s-a*e)*x,t[6]=f*x,t[7]=(i*c-l*e)*x,t[8]=(o*e-i*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(da.makeScale(t,e)),this}rotate(t){return this.premultiply(da.makeRotation(-t)),this}translate(t,e){return this.premultiply(da.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const da=new zt;function kd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ps(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pm(){const n=ps("canvas");return n.style.display="block",n}const uu={};function So(n){n in uu||(uu[n]=!0,console.warn(n))}function mm(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function gm(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function _m(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const hu=new zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),du=new zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Yr={[Mi]:{transfer:Bo,primaries:zo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[ln]:{transfer:ue,primaries:zo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ko]:{transfer:Bo,primaries:ko,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(du),fromReference:n=>n.applyMatrix3(hu)},[Sl]:{transfer:ue,primaries:ko,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(du),fromReference:n=>n.applyMatrix3(hu).convertLinearToSRGB()}},xm=new Set([Mi,Ko]),Qt={enabled:!0,_workingColorSpace:Mi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!xm.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Yr[t].toReference,r=Yr[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Yr[n].primaries},getTransfer:function(n){return n===hi?Bo:Yr[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Yr[t].luminanceCoefficients)}};function br(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function fa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let er;class vm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{er===void 0&&(er=ps("canvas")),er.width=t.width,er.height=t.height;const i=er.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=er}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ps("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=br(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(br(e[i]/255)*255):e[i]=br(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Mm=0;class Gd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=Ss(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(pa(r[o].image)):s.push(pa(r[o]))}else s=pa(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function pa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?vm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sm=0;class De extends Or{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,i=Bi,r=Bi,s=bn,o=zi,a=wn,c=Jn,l=De.DEFAULT_ANISOTROPY,u=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=Ss(),this.name="",this.source=new Gd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ad)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Oo:t.x=t.x-Math.floor(t.x);break;case Bi:t.x=t.x<0?0:1;break;case xc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Oo:t.y=t.y-Math.floor(t.y);break;case Bi:t.y=t.y<0?0:1;break;case xc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=Ad;De.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,i=0,r=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],x=c[2],p=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,S=(f+1)/2,y=(m+1)/2,w=(u+d)/4,M=(h+x)/4,A=(g+p)/4;return E>S&&E>y?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=w/i,s=M/i):S>y?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=A/r):y<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),i=M/s,r=A/s),this.set(i,r,s,e),this}let b=Math.sqrt((p-g)*(p-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(h-x)/b,this.z=(d-u)/b,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Em extends Or{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new De(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Gd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends Em{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Hd extends De{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=qe,this.minFilter=qe,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ym extends De{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=qe,this.minFilter=qe,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Br{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],f=s[o+1],g=s[o+2],x=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(h!==x||c!==d||l!==f||u!==g){let p=1-a;const m=c*d+l*f+u*g+h*x,b=m>=0?1:-1,E=1-m*m;if(E>Number.EPSILON){const y=Math.sqrt(E),w=Math.atan2(y,m*b);p=Math.sin(p*w)/y,a=Math.sin(a*w)/y}const S=a*b;if(c=c*p+d*S,l=l*p+f*S,u=u*p+g*S,h=h*p+x*S,p===1-a){const y=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=y,l*=y,u*=y,h*=y}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+u*h+c*f-l*d,t[e+1]=c*g+u*d+l*h-a*f,t[e+2]=l*g+u*f+a*d-c*h,t[e+3]=u*g-a*h-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),d=c(i/2),f=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*r+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,e=0,i=0){V.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*i),u=2*(a*e-s*r),h=2*(s*i-o*e);return this.x=e+c*l+o*h-a*u,this.y=i+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ma.copy(this).projectOnVector(t),this.sub(ma)}reflect(t){return this.sub(ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Xe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ma=new V,fu=new Br;class Zi{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,mn):mn.fromBufferAttribute(s,o),mn.applyMatrix4(t.matrixWorld),this.expandByPoint(mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Os.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Os.copy(i.boundingBox)),Os.applyMatrix4(t.matrixWorld),this.union(Os)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mn),mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qr),Bs.subVectors(this.max,qr),nr.subVectors(t.a,qr),ir.subVectors(t.b,qr),rr.subVectors(t.c,qr),ii.subVectors(ir,nr),ri.subVectors(rr,ir),bi.subVectors(nr,rr);let e=[0,-ii.z,ii.y,0,-ri.z,ri.y,0,-bi.z,bi.y,ii.z,0,-ii.x,ri.z,0,-ri.x,bi.z,0,-bi.x,-ii.y,ii.x,0,-ri.y,ri.x,0,-bi.y,bi.x,0];return!ga(e,nr,ir,rr,Bs)||(e=[1,0,0,0,1,0,0,0,1],!ga(e,nr,ir,rr,Bs))?!1:(zs.crossVectors(ii,ri),e=[zs.x,zs.y,zs.z],ga(e,nr,ir,rr,Bs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Gn=[new V,new V,new V,new V,new V,new V,new V,new V],mn=new V,Os=new Zi,nr=new V,ir=new V,rr=new V,ii=new V,ri=new V,bi=new V,qr=new V,Bs=new V,zs=new V,Ti=new V;function ga(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ti.fromArray(n,s);const a=r.x*Math.abs(Ti.x)+r.y*Math.abs(Ti.y)+r.z*Math.abs(Ti.z),c=t.dot(Ti),l=e.dot(Ti),u=i.dot(Ti);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const bm=new Zi,$r=new V,_a=new V;class zr{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):bm.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$r.subVectors(t,this.center);const e=$r.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector($r,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_a.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($r.copy(t.center).add(_a)),this.expandByPoint($r.copy(t.center).sub(_a))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hn=new V,xa=new V,ks=new V,si=new V,va=new V,Gs=new V,Ma=new V;class Tm{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){xa.copy(t).add(e).multiplyScalar(.5),ks.copy(e).sub(t).normalize(),si.copy(this.origin).sub(xa);const s=t.distanceTo(e)*.5,o=-this.direction.dot(ks),a=si.dot(this.direction),c=-si.dot(ks),l=si.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=s*u,h>=0)if(d>=-g)if(d<=g){const x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(xa).addScaledVector(ks,d),f}intersectSphere(t,e){Hn.subVectors(t.center,this.origin);const i=Hn.dot(this.direction),r=Hn.dot(Hn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,i,r,s){va.subVectors(e,t),Gs.subVectors(i,t),Ma.crossVectors(va,Gs);let o=this.direction.dot(Ma),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;si.subVectors(this.origin,t);const c=a*this.direction.dot(Gs.crossVectors(si,Gs));if(c<0)return null;const l=a*this.direction.dot(va.cross(si));if(l<0||c+l>o)return null;const u=-a*si.dot(Ma);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,i,r,s,o,a,c,l,u,h,d,f,g,x,p){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l,u,h,d,f,g,x,p)}set(t,e,i,r,s,o,a,c,l,u,h,d,f,g,x,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/sr.setFromMatrixColumn(t,0).length(),s=1/sr.setFromMatrixColumn(t,1).length(),o=1/sr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=o*u,f=o*h,g=a*u,x=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=f+g*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,f=c*h,g=l*u,x=l*h;e[0]=d+x*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,f=c*h,g=l*u,x=l*h;e[0]=d-x*a,e[4]=-o*h,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,f=o*h,g=a*u,x=a*h;e[0]=c*u,e[4]=g*l-f,e[8]=d*l+x,e[1]=c*h,e[5]=x*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-d*h,e[8]=g*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*h+g,e[10]=d-x*h}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+x,e[5]=o*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=a*u,e[10]=x*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wm,t,Am)}lookAt(t,e,i){const r=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),oi.crossVectors(i,Ze),oi.lengthSq()===0&&(Math.abs(i.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),oi.crossVectors(i,Ze)),oi.normalize(),Hs.crossVectors(Ze,oi),r[0]=oi.x,r[4]=Hs.x,r[8]=Ze.x,r[1]=oi.y,r[5]=Hs.y,r[9]=Ze.y,r[2]=oi.z,r[6]=Hs.z,r[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],x=i[6],p=i[10],m=i[14],b=i[3],E=i[7],S=i[11],y=i[15],w=r[0],M=r[4],A=r[8],L=r[12],_=r[1],v=r[5],I=r[9],U=r[13],N=r[2],W=r[6],F=r[10],B=r[14],P=r[3],z=r[7],H=r[11],j=r[15];return s[0]=o*w+a*_+c*N+l*P,s[4]=o*M+a*v+c*W+l*z,s[8]=o*A+a*I+c*F+l*H,s[12]=o*L+a*U+c*B+l*j,s[1]=u*w+h*_+d*N+f*P,s[5]=u*M+h*v+d*W+f*z,s[9]=u*A+h*I+d*F+f*H,s[13]=u*L+h*U+d*B+f*j,s[2]=g*w+x*_+p*N+m*P,s[6]=g*M+x*v+p*W+m*z,s[10]=g*A+x*I+p*F+m*H,s[14]=g*L+x*U+p*B+m*j,s[3]=b*w+E*_+S*N+y*P,s[7]=b*M+E*v+S*W+y*z,s[11]=b*A+E*I+S*F+y*H,s[15]=b*L+E*U+S*B+y*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],x=t[7],p=t[11],m=t[15];return g*(+s*c*h-r*l*h-s*a*d+i*l*d+r*a*f-i*c*f)+x*(+e*c*f-e*l*d+s*o*d-r*o*f+r*l*u-s*c*u)+p*(+e*l*h-e*a*f-s*o*h+i*o*f+s*a*u-i*l*u)+m*(-r*a*u-e*c*h+e*a*d+r*o*h-i*o*d+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],x=t[13],p=t[14],m=t[15],b=h*p*l-x*d*l+x*c*f-a*p*f-h*c*m+a*d*m,E=g*d*l-u*p*l-g*c*f+o*p*f+u*c*m-o*d*m,S=u*x*l-g*h*l+g*a*f-o*x*f-u*a*m+o*h*m,y=g*h*c-u*x*c-g*a*d+o*x*d+u*a*p-o*h*p,w=e*b+i*E+r*S+s*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/w;return t[0]=b*M,t[1]=(x*d*s-h*p*s-x*r*f+i*p*f+h*r*m-i*d*m)*M,t[2]=(a*p*s-x*c*s+x*r*l-i*p*l-a*r*m+i*c*m)*M,t[3]=(h*c*s-a*d*s-h*r*l+i*d*l+a*r*f-i*c*f)*M,t[4]=E*M,t[5]=(u*p*s-g*d*s+g*r*f-e*p*f-u*r*m+e*d*m)*M,t[6]=(g*c*s-o*p*s-g*r*l+e*p*l+o*r*m-e*c*m)*M,t[7]=(o*d*s-u*c*s+u*r*l-e*d*l-o*r*f+e*c*f)*M,t[8]=S*M,t[9]=(g*h*s-u*x*s-g*i*f+e*x*f+u*i*m-e*h*m)*M,t[10]=(o*x*s-g*a*s+g*i*l-e*x*l-o*i*m+e*a*m)*M,t[11]=(u*a*s-o*h*s-u*i*l+e*h*l+o*i*f-e*a*f)*M,t[12]=y*M,t[13]=(u*x*r-g*h*r+g*i*d-e*x*d-u*i*p+e*h*p)*M,t[14]=(g*a*r-o*x*r-g*i*c+e*x*c+o*i*p-e*a*p)*M,t[15]=(o*h*r-u*a*r+u*i*c-e*h*c-o*i*d+e*a*d)*M,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,h=a+a,d=s*l,f=s*u,g=s*h,x=o*u,p=o*h,m=a*h,b=c*l,E=c*u,S=c*h,y=i.x,w=i.y,M=i.z;return r[0]=(1-(x+m))*y,r[1]=(f+S)*y,r[2]=(g-E)*y,r[3]=0,r[4]=(f-S)*w,r[5]=(1-(d+m))*w,r[6]=(p+b)*w,r[7]=0,r[8]=(g+E)*M,r[9]=(p-b)*M,r[10]=(1-(d+x))*M,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=sr.set(r[0],r[1],r[2]).length();const o=sr.set(r[4],r[5],r[6]).length(),a=sr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],gn.copy(this);const l=1/s,u=1/o,h=1/a;return gn.elements[0]*=l,gn.elements[1]*=l,gn.elements[2]*=l,gn.elements[4]*=u,gn.elements[5]*=u,gn.elements[6]*=u,gn.elements[8]*=h,gn.elements[9]*=h,gn.elements[10]*=h,e.setFromRotationMatrix(gn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=$n){const c=this.elements,l=2*s/(e-t),u=2*s/(i-r),h=(e+t)/(e-t),d=(i+r)/(i-r);let f,g;if(a===$n)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Go)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=$n){const c=this.elements,l=1/(e-t),u=1/(i-r),h=1/(o-s),d=(e+t)*l,f=(i+r)*u;let g,x;if(a===$n)g=(o+s)*h,x=-2*h;else if(a===Go)g=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const sr=new V,gn=new ee,wm=new V(0,0,0),Am=new V(1,1,1),oi=new V,Hs=new V,Ze=new V,pu=new ee,mu=new Br;class Rn{constructor(t=0,e=0,i=0,r=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(e){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return pu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mu.setFromEuler(this),this.setFromQuaternion(mu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class Vd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Rm=0;const gu=new V,or=new Br,Vn=new ee,Vs=new V,Kr=new V,Cm=new V,Pm=new Br,_u=new V(1,0,0),xu=new V(0,1,0),vu=new V(0,0,1),Mu={type:"added"},Lm={type:"removed"},ar={type:"childadded",child:null},Sa={type:"childremoved",child:null};class Re extends Or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=Ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new V,e=new Rn,i=new Br,r=new V(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ee},normalMatrix:{value:new zt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return or.setFromAxisAngle(t,e),this.quaternion.multiply(or),this}rotateOnWorldAxis(t,e){return or.setFromAxisAngle(t,e),this.quaternion.premultiply(or),this}rotateX(t){return this.rotateOnAxis(_u,t)}rotateY(t){return this.rotateOnAxis(xu,t)}rotateZ(t){return this.rotateOnAxis(vu,t)}translateOnAxis(t,e){return gu.copy(t).applyQuaternion(this.quaternion),this.position.add(gu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_u,t)}translateY(t){return this.translateOnAxis(xu,t)}translateZ(t){return this.translateOnAxis(vu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Vs.copy(t):Vs.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Kr,Vs,this.up):Vn.lookAt(Vs,Kr,this.up),this.quaternion.setFromRotationMatrix(Vn),r&&(Vn.extractRotation(r.matrixWorld),or.setFromRotationMatrix(Vn),this.quaternion.premultiply(or.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Mu),ar.child=t,this.dispatchEvent(ar),ar.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lm),Sa.child=t,this.dispatchEvent(Sa),Sa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Mu),ar.child=t,this.dispatchEvent(ar),ar.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,t,Cm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,Pm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(t.shapes,h)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Re.DEFAULT_UP=new V(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new V,Wn=new V,Ea=new V,Xn=new V,cr=new V,lr=new V,Su=new V,ya=new V,ba=new V,Ta=new V,wa=new fe,Aa=new fe,Ra=new fe;class Tn{constructor(t=new V,e=new V,i=new V){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),_n.subVectors(t,e),r.cross(_n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){_n.subVectors(r,e),Wn.subVectors(i,e),Ea.subVectors(t,e);const o=_n.dot(_n),a=_n.dot(Wn),c=_n.dot(Ea),l=Wn.dot(Wn),u=Wn.dot(Ea),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,i,r,s,o,a,c){return this.getBarycoord(t,e,i,r,Xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Xn.x),c.addScaledVector(o,Xn.y),c.addScaledVector(a,Xn.z),c)}static getInterpolatedAttribute(t,e,i,r,s,o){return wa.setScalar(0),Aa.setScalar(0),Ra.setScalar(0),wa.fromBufferAttribute(t,e),Aa.fromBufferAttribute(t,i),Ra.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(wa,s.x),o.addScaledVector(Aa,s.y),o.addScaledVector(Ra,s.z),o}static isFrontFacing(t,e,i,r){return _n.subVectors(i,e),Wn.subVectors(t,e),_n.cross(Wn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),_n.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Tn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;cr.subVectors(r,i),lr.subVectors(s,i),ya.subVectors(t,i);const c=cr.dot(ya),l=lr.dot(ya);if(c<=0&&l<=0)return e.copy(i);ba.subVectors(t,r);const u=cr.dot(ba),h=lr.dot(ba);if(u>=0&&h<=u)return e.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(cr,o);Ta.subVectors(t,s);const f=cr.dot(Ta),g=lr.dot(Ta);if(g>=0&&f<=g)return e.copy(s);const x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(lr,a);const p=u*g-f*h;if(p<=0&&h-u>=0&&f-g>=0)return Su.subVectors(s,r),a=(h-u)/(h-u+(f-g)),e.copy(r).addScaledVector(Su,a);const m=1/(p+x+d);return o=x*m,a=d*m,e.copy(i).addScaledVector(cr,o).addScaledVector(lr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Ws={h:0,s:0,l:0};function Ca(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class tt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Qt.workingColorSpace){if(t=fm(t,1),e=Xe(e,0,1),i=Xe(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Ca(o,s,t+1/3),this.g=Ca(o,s,t),this.b=Ca(o,s,t-1/3)}return Qt.toWorkingColorSpace(this,r),this}setStyle(t,e=ln){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){const i=Wd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=br(t.r),this.g=br(t.g),this.b=br(t.b),this}copyLinearToSRGB(t){return this.r=fa(t.r),this.g=fa(t.g),this.b=fa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return Qt.fromWorkingColorSpace(Pe.copy(this),t),Math.round(Xe(Pe.r*255,0,255))*65536+Math.round(Xe(Pe.g*255,0,255))*256+Math.round(Xe(Pe.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Pe.copy(this),e);const i=Pe.r,r=Pe.g,s=Pe.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=ln){Qt.fromWorkingColorSpace(Pe.copy(this),t);const e=Pe.r,i=Pe.g,r=Pe.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(Ws);const i=ha(ai.h,Ws.h,e),r=ha(ai.s,Ws.s,e),s=ha(ai.l,Ws.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new tt;tt.NAMES=Wd;let Im=0;class Es extends Or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=Ss(),this.name="",this.type="Material",this.blending=Er,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ac,this.blendDst=cc,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tr,this.stencilZFail=tr,this.stencilZPass=tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Er&&(i.blending=this.blending),this.side!==gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ac&&(i.blendSrc=this.blendSrc),this.blendDst!==cc&&(i.blendDst=this.blendDst),this.blendEquation!==Ui&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==au&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==tr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==tr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ys extends Es{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Td,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new V,Xs=new jt;class An{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=cu,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Xs.fromBufferAttribute(this,e),Xs.applyMatrix3(t),this.setXY(e,Xs.x,Xs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Xr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xr(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xr(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xr(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),i=We(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),i=We(i,this.array),r=We(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),i=We(i,this.array),r=We(r,this.array),s=We(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cu&&(t.usage=this.usage),t}}class Xd extends An{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Yd extends An{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class _e extends An{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Dm=0;const an=new ee,Pa=new Re,ur=new V,Je=new Zi,jr=new Zi,ye=new V;class sn extends Or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=Ss(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kd(t)?Yd:Xd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new zt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,i){return an.makeTranslation(t,e,i),this.applyMatrix4(an),this}scale(t,e,i){return an.makeScale(t,e,i),this.applyMatrix4(an),this}lookAt(t){return Pa.lookAt(t),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new _e(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Je.setFromBufferAttribute(s),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const i=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];jr.setFromBufferAttribute(a),this.morphTargetsRelative?(ye.addVectors(Je.min,jr.min),Je.expandByPoint(ye),ye.addVectors(Je.max,jr.max),Je.expandByPoint(ye)):(Je.expandByPoint(jr.min),Je.expandByPoint(jr.max))}Je.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)ye.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(ye));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ye.fromBufferAttribute(a,l),c&&(ur.fromBufferAttribute(t,l),ye.add(ur)),r=Math.max(r,i.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<i.count;A++)a[A]=new V,c[A]=new V;const l=new V,u=new V,h=new V,d=new jt,f=new jt,g=new jt,x=new V,p=new V;function m(A,L,_){l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,L),h.fromBufferAttribute(i,_),d.fromBufferAttribute(s,A),f.fromBufferAttribute(s,L),g.fromBufferAttribute(s,_),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const v=1/(f.x*g.y-g.x*f.y);isFinite(v)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(v),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(v),a[A].add(x),a[L].add(x),a[_].add(x),c[A].add(p),c[L].add(p),c[_].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let A=0,L=b.length;A<L;++A){const _=b[A],v=_.start,I=_.count;for(let U=v,N=v+I;U<N;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const E=new V,S=new V,y=new V,w=new V;function M(A){y.fromBufferAttribute(r,A),w.copy(y);const L=a[A];E.copy(L),E.sub(y.multiplyScalar(y.dot(L))).normalize(),S.crossVectors(w,L);const v=S.dot(c[A])<0?-1:1;o.setXYZW(A,E.x,E.y,E.z,v)}for(let A=0,L=b.length;A<L;++A){const _=b[A],v=_.start,I=_.count;for(let U=v,N=v+I;U<N;U+=3)M(t.getX(U+0)),M(t.getX(U+1)),M(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new An(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new V,s=new V,o=new V,a=new V,c=new V,l=new V,u=new V,h=new V;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let m=0;m<u;m++)d[g++]=l[f++]}return new An(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new sn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=t(d,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eu=new ee,wi=new Tm,Ys=new zr,yu=new V,qs=new V,$s=new V,Ks=new V,La=new V,js=new V,bu=new V,Zs=new V;class Vt extends Re{constructor(t=new sn,e=new ys){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){js.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(La.fromBufferAttribute(h,t),o?js.addScaledVector(La,u):js.addScaledVector(La.sub(e),u))}e.add(js)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ys.copy(i.boundingSphere),Ys.applyMatrix4(s),wi.copy(t.ray).recast(t.near),!(Ys.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Ys,yu)===null||wi.origin.distanceToSquared(yu)>(t.far-t.near)**2))&&(Eu.copy(s).invert(),wi.copy(t.ray).applyMatrix4(Eu),!(i.boundingBox!==null&&wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const p=d[g],m=o[p.materialIndex],b=Math.max(p.start,f.start),E=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let S=b,y=E;S<y;S+=3){const w=a.getX(S),M=a.getX(S+1),A=a.getX(S+2);r=Js(this,m,t,i,l,u,h,w,M,A),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){const b=a.getX(p),E=a.getX(p+1),S=a.getX(p+2);r=Js(this,o,t,i,l,u,h,b,E,S),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const p=d[g],m=o[p.materialIndex],b=Math.max(p.start,f.start),E=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let S=b,y=E;S<y;S+=3){const w=S,M=S+1,A=S+2;r=Js(this,m,t,i,l,u,h,w,M,A),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){const b=p,E=p+1,S=p+2;r=Js(this,o,t,i,l,u,h,b,E,S),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function Um(n,t,e,i,r,s,o,a){let c;if(t.side===Be?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===gi,a),c===null)return null;Zs.copy(a),Zs.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Zs);return l<e.near||l>e.far?null:{distance:l,point:Zs.clone(),object:n}}function Js(n,t,e,i,r,s,o,a,c,l){n.getVertexPosition(a,qs),n.getVertexPosition(c,$s),n.getVertexPosition(l,Ks);const u=Um(n,t,e,i,qs,$s,Ks,bu);if(u){const h=new V;Tn.getBarycoord(bu,qs,$s,Ks,h),r&&(u.uv=Tn.getInterpolatedAttribute(r,a,c,l,h,new jt)),s&&(u.uv1=Tn.getInterpolatedAttribute(s,a,c,l,h,new jt)),o&&(u.normal=Tn.getInterpolatedAttribute(o,a,c,l,h,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new V,materialIndex:0};Tn.getNormal(qs,$s,Ks,d.normal),u.face=d,u.barycoord=h}return u}class bs extends sn{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(h,2));function g(x,p,m,b,E,S,y,w,M,A,L){const _=S/M,v=y/A,I=S/2,U=y/2,N=w/2,W=M+1,F=A+1;let B=0,P=0;const z=new V;for(let H=0;H<F;H++){const j=H*v-U;for(let rt=0;rt<W;rt++){const ht=rt*_-I;z[x]=ht*b,z[p]=j*E,z[m]=N,l.push(z.x,z.y,z.z),z[x]=0,z[p]=0,z[m]=w>0?1:-1,u.push(z.x,z.y,z.z),h.push(rt/M),h.push(1-H/A),B+=1}}for(let H=0;H<A;H++)for(let j=0;j<M;j++){const rt=d+j+W*H,ht=d+j+W*(H+1),Y=d+(j+1)+W*(H+1),Z=d+(j+1)+W*H;c.push(rt,ht,Z),c.push(ht,Y,Z),P+=6}a.addGroup(f,P,L),f+=P,d+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ur(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Fe(n){const t={};for(let e=0;e<n.length;e++){const i=Ur(n[e]);for(const r in i)t[r]=i[r]}return t}function Nm(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function qd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const Fm={clone:Ur,merge:Fe};var Om=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends Es{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Om,this.fragmentShader=Bm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ur(t.uniforms),this.uniformsGroups=Nm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class $d extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=$n}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new V,Tu=new jt,wu=new jt;class un extends $d{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Xc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xc*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,Tu,wu),e.subVectors(wu,Tu)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ua*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const hr=-90,dr=1;class zm extends Re{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(hr,dr,t,e);r.layers=this.layers,this.add(r);const s=new un(hr,dr,t,e);s.layers=this.layers,this.add(s);const o=new un(hr,dr,t,e);o.layers=this.layers,this.add(o);const a=new un(hr,dr,t,e);a.layers=this.layers,this.add(a);const c=new un(hr,dr,t,e);c.layers=this.layers,this.add(c);const l=new un(hr,dr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===$n)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Go)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Kd extends De{constructor(t,e,i,r,s,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Pr,super(t,e,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class km extends Xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Kd(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new bs(5,5,5),s=new _i({name:"CubemapFromEquirect",uniforms:Ur(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Be,blending:fi});s.uniforms.tEquirect.value=e;const o=new Vt(r,s),a=e.minFilter;return e.minFilter===zi&&(e.minFilter=bn),new zm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const Ia=new V,Gm=new V,Hm=new zt;class Pi{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Ia.subVectors(i,e).cross(Gm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ia),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Hm.getNormalMatrix(t),r=this.coplanarPoint(Ia).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new zr,Qs=new V;class El{constructor(t=new Pi,e=new Pi,i=new Pi,r=new Pi,s=new Pi,o=new Pi){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=$n){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],h=r[6],d=r[7],f=r[8],g=r[9],x=r[10],p=r[11],m=r[12],b=r[13],E=r[14],S=r[15];if(i[0].setComponents(c-s,d-l,p-f,S-m).normalize(),i[1].setComponents(c+s,d+l,p+f,S+m).normalize(),i[2].setComponents(c+o,d+u,p+g,S+b).normalize(),i[3].setComponents(c-o,d-u,p-g,S-b).normalize(),i[4].setComponents(c-a,d-h,p-x,S-E).normalize(),e===$n)i[5].setComponents(c+a,d+h,p+x,S+E).normalize();else if(e===Go)i[5].setComponents(a,h,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Qs.x=r.normal.x>0?t.max.x:t.min.x,Qs.y=r.normal.y>0?t.max.y:t.min.y,Qs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jd(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Vm(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const x=h[f];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class jo extends sn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=t/a,d=e/c,f=[],g=[],x=[],p=[];for(let m=0;m<u;m++){const b=m*d-o;for(let E=0;E<l;E++){const S=E*h-s;g.push(S,-b,0),x.push(0,0,1),p.push(E/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let b=0;b<a;b++){const E=b+l*m,S=b+l*(m+1),y=b+1+l*(m+1),w=b+1+l*m;f.push(E,S,w),f.push(S,y,w)}this.setIndex(f),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(x,3)),this.setAttribute("uv",new _e(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.width,t.height,t.widthSegments,t.heightSegments)}}var Wm=`#ifdef USE_ALPHAHASH
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
}`,E0=`#ifdef USE_ENVMAP
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
#endif`,y0=`#ifdef USE_ENVMAP
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
#endif`,Eg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yg=`float roughnessFactor = roughness;
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
}`,E_=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:Wm,alphahash_pars_fragment:Xm,alphamap_fragment:Ym,alphamap_pars_fragment:qm,alphatest_fragment:$m,alphatest_pars_fragment:Km,aomap_fragment:jm,aomap_pars_fragment:Zm,batching_pars_vertex:Jm,batching_vertex:Qm,begin_vertex:t0,beginnormal_vertex:e0,bsdfs:n0,iridescence_fragment:i0,bumpmap_pars_fragment:r0,clipping_planes_fragment:s0,clipping_planes_pars_fragment:o0,clipping_planes_pars_vertex:a0,clipping_planes_vertex:c0,color_fragment:l0,color_pars_fragment:u0,color_pars_vertex:h0,color_vertex:d0,common:f0,cube_uv_reflection_fragment:p0,defaultnormal_vertex:m0,displacementmap_pars_vertex:g0,displacementmap_vertex:_0,emissivemap_fragment:x0,emissivemap_pars_fragment:v0,colorspace_fragment:M0,colorspace_pars_fragment:S0,envmap_fragment:E0,envmap_common_pars_fragment:y0,envmap_pars_fragment:b0,envmap_pars_vertex:T0,envmap_physical_pars_fragment:F0,envmap_vertex:w0,fog_vertex:A0,fog_pars_vertex:R0,fog_fragment:C0,fog_pars_fragment:P0,gradientmap_pars_fragment:L0,lightmap_pars_fragment:I0,lights_lambert_fragment:D0,lights_lambert_pars_fragment:U0,lights_pars_begin:N0,lights_toon_fragment:O0,lights_toon_pars_fragment:B0,lights_phong_fragment:z0,lights_phong_pars_fragment:k0,lights_physical_fragment:G0,lights_physical_pars_fragment:H0,lights_fragment_begin:V0,lights_fragment_maps:W0,lights_fragment_end:X0,logdepthbuf_fragment:Y0,logdepthbuf_pars_fragment:q0,logdepthbuf_pars_vertex:$0,logdepthbuf_vertex:K0,map_fragment:j0,map_pars_fragment:Z0,map_particle_fragment:J0,map_particle_pars_fragment:Q0,metalnessmap_fragment:tg,metalnessmap_pars_fragment:eg,morphinstance_vertex:ng,morphcolor_vertex:ig,morphnormal_vertex:rg,morphtarget_pars_vertex:sg,morphtarget_vertex:og,normal_fragment_begin:ag,normal_fragment_maps:cg,normal_pars_fragment:lg,normal_pars_vertex:ug,normal_vertex:hg,normalmap_pars_fragment:dg,clearcoat_normal_fragment_begin:fg,clearcoat_normal_fragment_maps:pg,clearcoat_pars_fragment:mg,iridescence_pars_fragment:gg,opaque_fragment:_g,packing:xg,premultiplied_alpha_fragment:vg,project_vertex:Mg,dithering_fragment:Sg,dithering_pars_fragment:Eg,roughnessmap_fragment:yg,roughnessmap_pars_fragment:bg,shadowmap_pars_fragment:Tg,shadowmap_pars_vertex:wg,shadowmap_vertex:Ag,shadowmask_pars_fragment:Rg,skinbase_vertex:Cg,skinning_pars_vertex:Pg,skinning_vertex:Lg,skinnormal_vertex:Ig,specularmap_fragment:Dg,specularmap_pars_fragment:Ug,tonemapping_fragment:Ng,tonemapping_pars_fragment:Fg,transmission_fragment:Og,transmission_pars_fragment:Bg,uv_pars_fragment:zg,uv_pars_vertex:kg,uv_vertex:Gg,worldpos_vertex:Hg,background_vert:Vg,background_frag:Wg,backgroundCube_vert:Xg,backgroundCube_frag:Yg,cube_vert:qg,cube_frag:$g,depth_vert:Kg,depth_frag:jg,distanceRGBA_vert:Zg,distanceRGBA_frag:Jg,equirect_vert:Qg,equirect_frag:t_,linedashed_vert:e_,linedashed_frag:n_,meshbasic_vert:i_,meshbasic_frag:r_,meshlambert_vert:s_,meshlambert_frag:o_,meshmatcap_vert:a_,meshmatcap_frag:c_,meshnormal_vert:l_,meshnormal_frag:u_,meshphong_vert:h_,meshphong_frag:d_,meshphysical_vert:f_,meshphysical_frag:p_,meshtoon_vert:m_,meshtoon_frag:g_,points_vert:__,points_frag:x_,shadow_vert:v_,shadow_frag:M_,sprite_vert:S_,sprite_frag:E_},lt={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Un={basic:{uniforms:Fe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Fe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new tt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Fe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Fe([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Fe([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new tt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Fe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Fe([lt.points,lt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Fe([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Fe([lt.common,lt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Fe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Fe([lt.sprite,lt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Fe([lt.common,lt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Fe([lt.lights,lt.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};Un.physical={uniforms:Fe([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const to={r:0,b:0,g:0},Ri=new Rn,y_=new ee;function b_(n,t,e,i,r,s,o){const a=new tt(0);let c=s===!0?0:1,l,u,h=null,d=0,f=null;function g(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?e:t).get(E)),E}function x(b){let E=!1;const S=g(b);S===null?m(a,c):S&&S.isColor&&(m(S,1),E=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(b,E){const S=g(E);S&&(S.isCubeTexture||S.mapping===$o)?(u===void 0&&(u=new Vt(new bs(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:Ur(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(y,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ri.copy(E.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(y_.makeRotationFromEuler(Ri)),u.material.toneMapped=Qt.getTransfer(S.colorSpace)!==ue,(h!==S||d!==S.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,f=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Vt(new jo(2,2),new _i({name:"BackgroundMaterial",uniforms:Ur(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(S.colorSpace)!==ue,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,f=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,E){b.getRGB(to,qd(n)),i.buffers.color.setClear(to.r,to.g,to.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),c=E,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,m(a,c)},render:x,addToRenderList:p}}function T_(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(_,v,I,U,N){let W=!1;const F=h(U,I,v);s!==F&&(s=F,l(s.object)),W=f(_,U,I,N),W&&g(_,U,I,N),N!==null&&t.update(N,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,S(_,v,I,U),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function c(){return n.createVertexArray()}function l(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function h(_,v,I){const U=I.wireframe===!0;let N=i[_.id];N===void 0&&(N={},i[_.id]=N);let W=N[v.id];W===void 0&&(W={},N[v.id]=W);let F=W[U];return F===void 0&&(F=d(c()),W[U]=F),F}function d(_){const v=[],I=[],U=[];for(let N=0;N<e;N++)v[N]=0,I[N]=0,U[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:I,attributeDivisors:U,object:_,attributes:{},index:null}}function f(_,v,I,U){const N=s.attributes,W=v.attributes;let F=0;const B=I.getAttributes();for(const P in B)if(B[P].location>=0){const H=N[P];let j=W[P];if(j===void 0&&(P==="instanceMatrix"&&_.instanceMatrix&&(j=_.instanceMatrix),P==="instanceColor"&&_.instanceColor&&(j=_.instanceColor)),H===void 0||H.attribute!==j||j&&H.data!==j.data)return!0;F++}return s.attributesNum!==F||s.index!==U}function g(_,v,I,U){const N={},W=v.attributes;let F=0;const B=I.getAttributes();for(const P in B)if(B[P].location>=0){let H=W[P];H===void 0&&(P==="instanceMatrix"&&_.instanceMatrix&&(H=_.instanceMatrix),P==="instanceColor"&&_.instanceColor&&(H=_.instanceColor));const j={};j.attribute=H,H&&H.data&&(j.data=H.data),N[P]=j,F++}s.attributes=N,s.attributesNum=F,s.index=U}function x(){const _=s.newAttributes;for(let v=0,I=_.length;v<I;v++)_[v]=0}function p(_){m(_,0)}function m(_,v){const I=s.newAttributes,U=s.enabledAttributes,N=s.attributeDivisors;I[_]=1,U[_]===0&&(n.enableVertexAttribArray(_),U[_]=1),N[_]!==v&&(n.vertexAttribDivisor(_,v),N[_]=v)}function b(){const _=s.newAttributes,v=s.enabledAttributes;for(let I=0,U=v.length;I<U;I++)v[I]!==_[I]&&(n.disableVertexAttribArray(I),v[I]=0)}function E(_,v,I,U,N,W,F){F===!0?n.vertexAttribIPointer(_,v,I,N,W):n.vertexAttribPointer(_,v,I,U,N,W)}function S(_,v,I,U){x();const N=U.attributes,W=I.getAttributes(),F=v.defaultAttributeValues;for(const B in W){const P=W[B];if(P.location>=0){let z=N[B];if(z===void 0&&(B==="instanceMatrix"&&_.instanceMatrix&&(z=_.instanceMatrix),B==="instanceColor"&&_.instanceColor&&(z=_.instanceColor)),z!==void 0){const H=z.normalized,j=z.itemSize,rt=t.get(z);if(rt===void 0)continue;const ht=rt.buffer,Y=rt.type,Z=rt.bytesPerElement,ct=Y===n.INT||Y===n.UNSIGNED_INT||z.gpuType===pl;if(z.isInterleavedBufferAttribute){const st=z.data,bt=st.stride,St=z.offset;if(st.isInstancedInterleavedBuffer){for(let Dt=0;Dt<P.locationSize;Dt++)m(P.location+Dt,st.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Dt=0;Dt<P.locationSize;Dt++)p(P.location+Dt);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let Dt=0;Dt<P.locationSize;Dt++)E(P.location+Dt,j/P.locationSize,Y,H,bt*Z,(St+j/P.locationSize*Dt)*Z,ct)}else{if(z.isInstancedBufferAttribute){for(let st=0;st<P.locationSize;st++)m(P.location+st,z.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let st=0;st<P.locationSize;st++)p(P.location+st);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let st=0;st<P.locationSize;st++)E(P.location+st,j/P.locationSize,Y,H,j*Z,j/P.locationSize*st*Z,ct)}}else if(F!==void 0){const H=F[B];if(H!==void 0)switch(H.length){case 2:n.vertexAttrib2fv(P.location,H);break;case 3:n.vertexAttrib3fv(P.location,H);break;case 4:n.vertexAttrib4fv(P.location,H);break;default:n.vertexAttrib1fv(P.location,H)}}}}b()}function y(){A();for(const _ in i){const v=i[_];for(const I in v){const U=v[I];for(const N in U)u(U[N].object),delete U[N];delete v[I]}delete i[_]}}function w(_){if(i[_.id]===void 0)return;const v=i[_.id];for(const I in v){const U=v[I];for(const N in U)u(U[N].object),delete U[N];delete v[I]}delete i[_.id]}function M(_){for(const v in i){const I=i[v];if(I[_.id]===void 0)continue;const U=I[_.id];for(const N in U)u(U[N].object),delete U[N];delete I[_.id]}}function A(){L(),o=!0,s!==r&&(s=r,l(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:L,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:M,initAttributes:x,enableAttribute:p,disableUnusedAttributes:b}}function w_(n,t,e){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),e.update(u,i,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,i,1)}function c(l,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x];for(let x=0;x<d.length;x++)e.update(g,i,d[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function A_(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const M=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(M){return!(M!==wn&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const A=M===Ms&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(M!==Jn&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==Bn&&!A)}function c(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const M=t.get("EXT_clip_control");M.clipControlEXT(M.LOWER_LEFT_EXT,M.ZERO_TO_ONE_EXT)}const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:y,maxSamples:w}}function R_(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new Pi,a=new zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,m=n.get(h);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{const b=s?0:i,E=b*4;let S=m.clippingState||null;c.value=S,S=u(g,d,E,f);for(let y=0;y!==E;++y)S[y]=e[y];m.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,f,g){const x=h!==null?h.length:0;let p=null;if(x!==0){if(p=c.value,g!==!0||p===null){const m=f+x*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,S=f;E!==x;++E,S+=4)o.copy(h[E]).applyMatrix4(b,a),o.normal.toArray(p,S),p[S+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function C_(n){let t=new WeakMap;function e(o,a){return a===gc?o.mapping=Pr:a===_c&&(o.mapping=Lr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===gc||a===_c)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new km(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class Zd extends $d{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const vr=4,Au=[.125,.215,.35,.446,.526,.582],Ni=20,Da=new Zd,Ru=new tt;let Ua=null,Na=0,Fa=0,Oa=!1;const Li=(1+Math.sqrt(5))/2,fr=1/Li,Cu=[new V(-Li,fr,0),new V(Li,fr,0),new V(-fr,0,Li),new V(fr,0,Li),new V(0,Li,-fr),new V(0,Li,fr),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class Pu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ua,Na,Fa),this._renderer.xr.enabled=Oa,t.scissorTest=!1,eo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Pr||t.mapping===Lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Ms,format:wn,colorSpace:Mi,depthBuffer:!1},r=Lu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lu(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=P_(s)),this._blurMaterial=L_(s,t,e)}return r}_compileMaterial(t){const e=new Vt(this._lodPlanes[0],t);this._renderer.compile(e,Da)}_sceneToCubeUV(t,e,i,r){const a=new un(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Ru),u.toneMapping=pi,u.autoClear=!1;const f=new ys({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),g=new Vt(new bs,f);let x=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,x=!0):(f.color.copy(Ru),x=!0);for(let m=0;m<6;m++){const b=m%3;b===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):b===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const E=this._cubeSize;eo(r,b*E,m>2?E:0,E,E),u.setRenderTarget(r),x&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Pr||t.mapping===Lr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Du()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Vt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;eo(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Da)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Cu[(r-s-1)%Cu.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Vt(this._lodPlanes[r],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ni-1),x=s/g,p=isFinite(s)?1+Math.floor(u*x):Ni;p>Ni&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ni}`);const m=[];let b=0;for(let M=0;M<Ni;++M){const A=M/x,L=Math.exp(-A*A/2);m.push(L),M===0?b+=L:M<p&&(b+=2*L)}for(let M=0;M<m.length;M++)m[M]=m[M]/b;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-i;const S=this._sizeLods[r],y=3*S*(r>E-vr?r-E+vr:0),w=4*(this._cubeSize-S);eo(e,y,w,3*S,2*S),c.setRenderTarget(e),c.render(h,Da)}}function P_(n){const t=[],e=[],i=[];let r=n;const s=n-vr+1+Au.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>n-vr?c=Au[o-n+vr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,p=2,m=1,b=new Float32Array(x*g*f),E=new Float32Array(p*g*f),S=new Float32Array(m*g*f);for(let w=0;w<f;w++){const M=w%3*2/3-1,A=w>2?0:-1,L=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];b.set(L,x*g*w),E.set(d,p*g*w);const _=[w,w,w,w,w,w];S.set(_,m*g*w)}const y=new sn;y.setAttribute("position",new An(b,x)),y.setAttribute("uv",new An(E,p)),y.setAttribute("faceIndex",new An(S,m)),t.push(y),r>vr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Lu(n,t,e){const i=new Xi(n,t,e);return i.texture.mapping=$o,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function eo(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function L_(n,t,e){const i=new Float32Array(Ni),r=new V(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yl(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Iu(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yl(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Du(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function yl(){return`

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
	`}function I_(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===gc||c===_c,u=c===Pr||c===Lr;if(l||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Pu(n)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&r(f)?(e===null&&(e=new Pu(n)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function D_(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&So("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function U_(n,t,e,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)t.remove(x[p])}d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)t.update(d[g],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const x=f[g];for(let p=0,m=x.length;p<m;p++)t.update(x[p],n.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let x=0;if(f!==null){const b=f.array;x=f.version;for(let E=0,S=b.length;E<S;E+=3){const y=b[E+0],w=b[E+1],M=b[E+2];d.push(y,w,w,M,M,y)}}else if(g!==void 0){const b=g.array;x=g.version;for(let E=0,S=b.length/3-1;E<S;E+=3){const y=E+0,w=E+1,M=E+2;d.push(y,w,w,M,M,y)}}else return;const p=new(kd(d)?Yd:Xd)(d,1);p.version=x;const m=s.get(h);m&&t.remove(m),s.set(h,p)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function N_(n,t,e){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,f){n.drawElements(i,f,s,d*o),e.update(f,i,1)}function l(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,d*o,g),e.update(f,i,g))}function u(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,i,1)}function h(d,f,g,x){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)l(d[m]/o,f[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,x,0,g);let m=0;for(let b=0;b<g;b++)m+=f[b];for(let b=0;b<x.length;b++)e.update(m,i,x[b])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function F_(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function O_(n,t,e){const i=new WeakMap,r=new fe;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let L=function(){M.dispose(),i.delete(a),a.removeEventListener("dispose",L)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let E=0;f===!0&&(E=1),g===!0&&(E=2),x===!0&&(E=3);let S=a.attributes.position.count*E,y=1;S>t.maxTextureSize&&(y=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const w=new Float32Array(S*y*4*h),M=new Hd(w,S,y,h);M.type=Bn,M.needsUpdate=!0;const A=E*4;for(let _=0;_<h;_++){const v=p[_],I=m[_],U=b[_],N=S*y*4*_;for(let W=0;W<v.count;W++){const F=W*A;f===!0&&(r.fromBufferAttribute(v,W),w[N+F+0]=r.x,w[N+F+1]=r.y,w[N+F+2]=r.z,w[N+F+3]=0),g===!0&&(r.fromBufferAttribute(I,W),w[N+F+4]=r.x,w[N+F+5]=r.y,w[N+F+6]=r.z,w[N+F+7]=0),x===!0&&(r.fromBufferAttribute(U,W),w[N+F+8]=r.x,w[N+F+9]=r.y,w[N+F+10]=r.z,w[N+F+11]=U.itemSize===4?r.w:1)}}d={count:h,texture:M,size:new jt(S,y)},i.set(a,d),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function B_(n,t,e,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=t.get(c,u);if(r.get(h)!==l&&(t.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class Jd extends De{constructor(t,e,i,r,s,o,a,c,l,u=yr){if(u!==yr&&u!==Dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===yr&&(i=Wi),i===void 0&&u===Dr&&(i=Ir),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:qe,this.minFilter=c!==void 0?c:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Qd=new De,Uu=new Jd(1,1),tf=new Hd,ef=new ym,nf=new Kd,Nu=[],Fu=[],Ou=new Float32Array(16),Bu=new Float32Array(9),zu=new Float32Array(4);function kr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Nu[r];if(s===void 0&&(s=new Float32Array(r),Nu[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Se(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ee(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Zo(n,t){let e=Fu[t];e===void 0&&(e=new Int32Array(t),Fu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function z_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function k_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2fv(this.addr,t),Ee(e,t)}}function G_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;n.uniform3fv(this.addr,t),Ee(e,t)}}function H_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4fv(this.addr,t),Ee(e,t)}}function V_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,i))return;zu.set(i),n.uniformMatrix2fv(this.addr,!1,zu),Ee(e,i)}}function W_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,i))return;Bu.set(i),n.uniformMatrix3fv(this.addr,!1,Bu),Ee(e,i)}}function X_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,i))return;Ou.set(i),n.uniformMatrix4fv(this.addr,!1,Ou),Ee(e,i)}}function Y_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function q_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2iv(this.addr,t),Ee(e,t)}}function $_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3iv(this.addr,t),Ee(e,t)}}function K_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4iv(this.addr,t),Ee(e,t)}}function j_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Z_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2uiv(this.addr,t),Ee(e,t)}}function J_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3uiv(this.addr,t),Ee(e,t)}}function Q_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4uiv(this.addr,t),Ee(e,t)}}function tx(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Uu.compareFunction=zd,s=Uu):s=Qd,e.setTexture2D(t||s,r)}function ex(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||ef,r)}function nx(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||nf,r)}function ix(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||tf,r)}function rx(n){switch(n){case 5126:return z_;case 35664:return k_;case 35665:return G_;case 35666:return H_;case 35674:return V_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return Y_;case 35667:case 35671:return q_;case 35668:case 35672:return $_;case 35669:case 35673:return K_;case 5125:return j_;case 36294:return Z_;case 36295:return J_;case 36296:return Q_;case 35678:case 36198:case 36298:case 36306:case 35682:return tx;case 35679:case 36299:case 36307:return ex;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return ix}}function sx(n,t){n.uniform1fv(this.addr,t)}function ox(n,t){const e=kr(t,this.size,2);n.uniform2fv(this.addr,e)}function ax(n,t){const e=kr(t,this.size,3);n.uniform3fv(this.addr,e)}function cx(n,t){const e=kr(t,this.size,4);n.uniform4fv(this.addr,e)}function lx(n,t){const e=kr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function ux(n,t){const e=kr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function hx(n,t){const e=kr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function dx(n,t){n.uniform1iv(this.addr,t)}function fx(n,t){n.uniform2iv(this.addr,t)}function px(n,t){n.uniform3iv(this.addr,t)}function mx(n,t){n.uniform4iv(this.addr,t)}function gx(n,t){n.uniform1uiv(this.addr,t)}function _x(n,t){n.uniform2uiv(this.addr,t)}function xx(n,t){n.uniform3uiv(this.addr,t)}function vx(n,t){n.uniform4uiv(this.addr,t)}function Mx(n,t,e){const i=this.cache,r=t.length,s=Zo(e,r);Se(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Qd,s[o])}function Sx(n,t,e){const i=this.cache,r=t.length,s=Zo(e,r);Se(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||ef,s[o])}function Ex(n,t,e){const i=this.cache,r=t.length,s=Zo(e,r);Se(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||nf,s[o])}function yx(n,t,e){const i=this.cache,r=t.length,s=Zo(e,r);Se(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||tf,s[o])}function bx(n){switch(n){case 5126:return sx;case 35664:return ox;case 35665:return ax;case 35666:return cx;case 35674:return lx;case 35675:return ux;case 35676:return hx;case 5124:case 35670:return dx;case 35667:case 35671:return fx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return gx;case 36294:return _x;case 36295:return xx;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return Mx;case 35679:case 36299:case 36307:return Sx;case 35680:case 36300:case 36308:case 36293:return Ex;case 36289:case 36303:case 36311:case 36292:return yx}}class Tx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=rx(e.type)}}class wx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=bx(e.type)}}class Ax{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const Ba=/(\w+)(\])?(\[|\.)?/g;function ku(n,t){n.seq.push(t),n.map[t.id]=t}function Rx(n,t,e){const i=n.name,r=i.length;for(Ba.lastIndex=0;;){const s=Ba.exec(i),o=Ba.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){ku(e,l===void 0?new Tx(a,n,t):new wx(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new Ax(a),ku(e,h)),e=h}}}class Eo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Rx(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Gu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Cx=37297;let Px=0;function Lx(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function Ix(n){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(n);let i;switch(t===e?i="":t===ko&&e===zo?i="LinearDisplayP3ToLinearSRGB":t===zo&&e===ko&&(i="LinearSRGBToLinearDisplayP3"),n){case Mi:case Ko:return[i,"LinearTransferOETF"];case ln:case Sl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Hu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Lx(n.getShaderSource(t),o)}else return r}function Dx(n,t){const e=Ix(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Ux(n,t){let e;switch(t){case jp:e="Linear";break;case Zp:e="Reinhard";break;case Jp:e="Cineon";break;case wd:e="ACESFilmic";break;case tm:e="AgX";break;case em:e="Neutral";break;case Qp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const no=new V;function Nx(){Qt.getLuminanceCoefficients(no);const n=no.x.toFixed(4),t=no.y.toFixed(4),e=no.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(is).join(`
`)}function Ox(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Bx(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function is(n){return n!==""}function Vu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yc(n){return n.replace(zx,Gx)}const kx=new Map;function Gx(n,t){let e=Bt[t];if(e===void 0){const i=kx.get(t);if(i!==void 0)e=Bt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Yc(e)}const Hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xu(n){return n.replace(Hx,Vx)}function Vx(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Yu(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Wx(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===yd?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===bd?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Yn&&(t="SHADOWMAP_TYPE_VSM"),t}function Xx(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Pr:case Lr:t="ENVMAP_TYPE_CUBE";break;case $o:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Yx(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Lr:t="ENVMAP_MODE_REFRACTION";break}return t}function qx(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Td:t="ENVMAP_BLENDING_MULTIPLY";break;case $p:t="ENVMAP_BLENDING_MIX";break;case Kp:t="ENVMAP_BLENDING_ADD";break}return t}function $x(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Kx(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Wx(e),l=Xx(e),u=Yx(e),h=qx(e),d=$x(e),f=Fx(e),g=Ox(s),x=r.createProgram();let p,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(is).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(is).join(`
`),m.length>0&&(m+=`
`)):(p=[Yu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),m=[Yu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pi?"#define TONE_MAPPING":"",e.toneMapping!==pi?Bt.tonemapping_pars_fragment:"",e.toneMapping!==pi?Ux("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,Dx("linearToOutputTexel",e.outputColorSpace),Nx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(is).join(`
`)),o=Yc(o),o=Vu(o,e),o=Wu(o,e),a=Yc(a),a=Vu(a,e),a=Wu(a,e),o=Xu(o),a=Xu(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=b+p+o,S=b+m+a,y=Gu(r,r.VERTEX_SHADER,E),w=Gu(r,r.FRAGMENT_SHADER,S);r.attachShader(x,y),r.attachShader(x,w),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function M(v){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(x).trim(),U=r.getShaderInfoLog(y).trim(),N=r.getShaderInfoLog(w).trim();let W=!0,F=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,y,w);else{const B=Hu(r,y,"vertex"),P=Hu(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+v.name+`
Material Type: `+v.type+`

Program Info Log: `+I+`
`+B+`
`+P)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(U===""||N==="")&&(F=!1);F&&(v.diagnostics={runnable:W,programLog:I,vertexShader:{log:U,prefix:p},fragmentShader:{log:N,prefix:m}})}r.deleteShader(y),r.deleteShader(w),A=new Eo(r,x),L=Bx(r,x)}let A;this.getUniforms=function(){return A===void 0&&M(this),A};let L;this.getAttributes=function(){return L===void 0&&M(this),L};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(x,Cx)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Px++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=y,this.fragmentShader=w,this}let jx=0;class Zx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Jx(t),e.set(t,i)),i}}class Jx{constructor(t){this.id=jx++,this.code=t,this.usedTimes=0}}function Qx(n,t,e,i,r,s,o){const a=new Vd,c=new Zx,l=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,f=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,v,I,U,N){const W=U.fog,F=N.geometry,B=_.isMeshStandardMaterial?U.environment:null,P=(_.isMeshStandardMaterial?e:t).get(_.envMap||B),z=P&&P.mapping===$o?P.image.height:null,H=x[_.type];_.precision!==null&&(g=r.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const j=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,rt=j!==void 0?j.length:0;let ht=0;F.morphAttributes.position!==void 0&&(ht=1),F.morphAttributes.normal!==void 0&&(ht=2),F.morphAttributes.color!==void 0&&(ht=3);let Y,Z,ct,st;if(H){const Ve=Un[H];Y=Ve.vertexShader,Z=Ve.fragmentShader}else Y=_.vertexShader,Z=_.fragmentShader,c.update(_),ct=c.getVertexShaderID(_),st=c.getFragmentShaderID(_);const bt=n.getRenderTarget(),St=N.isInstancedMesh===!0,Dt=N.isBatchedMesh===!0,Ft=!!_.map,Ot=!!_.matcap,D=!!P,Me=!!_.aoMap,kt=!!_.lightMap,Gt=!!_.bumpMap,wt=!!_.normalMap,ce=!!_.displacementMap,It=!!_.emissiveMap,C=!!_.metalnessMap,T=!!_.roughnessMap,X=_.anisotropy>0,Q=_.clearcoat>0,it=_.dispersion>0,J=_.iridescence>0,Et=_.sheen>0,ut=_.transmission>0,gt=X&&!!_.anisotropyMap,$t=Q&&!!_.clearcoatMap,ot=Q&&!!_.clearcoatNormalMap,_t=Q&&!!_.clearcoatRoughnessMap,Pt=J&&!!_.iridescenceMap,Lt=J&&!!_.iridescenceThicknessMap,xt=Et&&!!_.sheenColorMap,Wt=Et&&!!_.sheenRoughnessMap,Nt=!!_.specularMap,re=!!_.specularColorMap,O=!!_.specularIntensityMap,pt=ut&&!!_.transmissionMap,K=ut&&!!_.thicknessMap,et=!!_.gradientMap,dt=!!_.alphaMap,mt=_.alphaTest>0,qt=!!_.alphaHash,xe=!!_.extensions;let He=pi;_.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(He=n.toneMapping);const Kt={shaderID:H,shaderType:_.type,shaderName:_.name,vertexShader:Y,fragmentShader:Z,defines:_.defines,customVertexShaderID:ct,customFragmentShaderID:st,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Dt,batchingColor:Dt&&N._colorsTexture!==null,instancing:St,instancingColor:St&&N.instanceColor!==null,instancingMorph:St&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:bt===null?n.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Mi,alphaToCoverage:!!_.alphaToCoverage,map:Ft,matcap:Ot,envMap:D,envMapMode:D&&P.mapping,envMapCubeUVHeight:z,aoMap:Me,lightMap:kt,bumpMap:Gt,normalMap:wt,displacementMap:f&&ce,emissiveMap:It,normalMapObjectSpace:wt&&_.normalMapType===rm,normalMapTangentSpace:wt&&_.normalMapType===Bd,metalnessMap:C,roughnessMap:T,anisotropy:X,anisotropyMap:gt,clearcoat:Q,clearcoatMap:$t,clearcoatNormalMap:ot,clearcoatRoughnessMap:_t,dispersion:it,iridescence:J,iridescenceMap:Pt,iridescenceThicknessMap:Lt,sheen:Et,sheenColorMap:xt,sheenRoughnessMap:Wt,specularMap:Nt,specularColorMap:re,specularIntensityMap:O,transmission:ut,transmissionMap:pt,thicknessMap:K,gradientMap:et,opaque:_.transparent===!1&&_.blending===Er&&_.alphaToCoverage===!1,alphaMap:dt,alphaTest:mt,alphaHash:qt,combine:_.combine,mapUv:Ft&&p(_.map.channel),aoMapUv:Me&&p(_.aoMap.channel),lightMapUv:kt&&p(_.lightMap.channel),bumpMapUv:Gt&&p(_.bumpMap.channel),normalMapUv:wt&&p(_.normalMap.channel),displacementMapUv:ce&&p(_.displacementMap.channel),emissiveMapUv:It&&p(_.emissiveMap.channel),metalnessMapUv:C&&p(_.metalnessMap.channel),roughnessMapUv:T&&p(_.roughnessMap.channel),anisotropyMapUv:gt&&p(_.anisotropyMap.channel),clearcoatMapUv:$t&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:ot&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&p(_.sheenRoughnessMap.channel),specularMapUv:Nt&&p(_.specularMap.channel),specularColorMapUv:re&&p(_.specularColorMap.channel),specularIntensityMapUv:O&&p(_.specularIntensityMap.channel),transmissionMapUv:pt&&p(_.transmissionMap.channel),thicknessMapUv:K&&p(_.thicknessMap.channel),alphaMapUv:dt&&p(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(wt||X),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!F.attributes.uv&&(Ft||dt),fog:!!W,useFog:_.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:N.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:ht,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:He,decodeVideoTexture:Ft&&_.map.isVideoTexture===!0&&Qt.getTransfer(_.map.colorSpace)===ue,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===de,flipSided:_.side===Be,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:xe&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&_.extensions.multiDraw===!0||Dt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Kt.vertexUv1s=l.has(1),Kt.vertexUv2s=l.has(2),Kt.vertexUv3s=l.has(3),l.clear(),Kt}function b(_){const v=[];if(_.shaderID?v.push(_.shaderID):(v.push(_.customVertexShaderID),v.push(_.customFragmentShaderID)),_.defines!==void 0)for(const I in _.defines)v.push(I),v.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(E(v,_),S(v,_),v.push(n.outputColorSpace)),v.push(_.customProgramCacheKey),v.join()}function E(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapCubeUVHeight),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.morphAttributeCount),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)}function S(_,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.alphaToCoverage&&a.enable(20),_.push(a.mask)}function y(_){const v=x[_.type];let I;if(v){const U=Un[v];I=Fm.clone(U.uniforms)}else I=_.uniforms;return I}function w(_,v){let I;for(let U=0,N=u.length;U<N;U++){const W=u[U];if(W.cacheKey===v){I=W,++I.usedTimes;break}}return I===void 0&&(I=new Kx(n,v,_,s),u.push(I)),I}function M(_){if(--_.usedTimes===0){const v=u.indexOf(_);u[v]=u[u.length-1],u.pop(),_.destroy()}}function A(_){c.remove(_)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:y,acquireProgram:w,releaseProgram:M,releaseShaderCache:A,programs:u,dispose:L}}function tv(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function ev(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function qu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function $u(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(h,d,f,g,x,p){let m=n[t];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:p},n[t]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=x,m.group=p),t++,m}function a(h,d,f,g,x,p){const m=o(h,d,f,g,x,p);f.transmission>0?i.push(m):f.transparent===!0?r.push(m):e.push(m)}function c(h,d,f,g,x,p){const m=o(h,d,f,g,x,p);f.transmission>0?i.unshift(m):f.transparent===!0?r.unshift(m):e.unshift(m)}function l(h,d){e.length>1&&e.sort(h||ev),i.length>1&&i.sort(d||qu),r.length>1&&r.sort(d||qu)}function u(){for(let h=t,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function nv(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new $u,n.set(i,[o])):r>=s.length?(o=new $u,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function iv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new tt};break;case"SpotLight":e={position:new V,direction:new V,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":e={color:new tt,position:new V,halfWidth:new V,halfHeight:new V};break}return n[t.id]=e,e}}}function rv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let sv=0;function ov(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function av(n){const t=new iv,e=rv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new V);const r=new V,s=new ee,o=new ee;function a(l){let u=0,h=0,d=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,b=0,E=0,S=0,y=0,w=0,M=0;l.sort(ov);for(let L=0,_=l.length;L<_;L++){const v=l[L],I=v.color,U=v.intensity,N=v.distance,W=v.shadow&&v.shadow.map?v.shadow.map.texture:null;if(v.isAmbientLight)u+=I.r*U,h+=I.g*U,d+=I.b*U;else if(v.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(v.sh.coefficients[F],U);M++}else if(v.isDirectionalLight){const F=t.get(v);if(F.color.copy(v.color).multiplyScalar(v.intensity),v.castShadow){const B=v.shadow,P=e.get(v);P.shadowIntensity=B.intensity,P.shadowBias=B.bias,P.shadowNormalBias=B.normalBias,P.shadowRadius=B.radius,P.shadowMapSize=B.mapSize,i.directionalShadow[f]=P,i.directionalShadowMap[f]=W,i.directionalShadowMatrix[f]=v.shadow.matrix,b++}i.directional[f]=F,f++}else if(v.isSpotLight){const F=t.get(v);F.position.setFromMatrixPosition(v.matrixWorld),F.color.copy(I).multiplyScalar(U),F.distance=N,F.coneCos=Math.cos(v.angle),F.penumbraCos=Math.cos(v.angle*(1-v.penumbra)),F.decay=v.decay,i.spot[x]=F;const B=v.shadow;if(v.map&&(i.spotLightMap[y]=v.map,y++,B.updateMatrices(v),v.castShadow&&w++),i.spotLightMatrix[x]=B.matrix,v.castShadow){const P=e.get(v);P.shadowIntensity=B.intensity,P.shadowBias=B.bias,P.shadowNormalBias=B.normalBias,P.shadowRadius=B.radius,P.shadowMapSize=B.mapSize,i.spotShadow[x]=P,i.spotShadowMap[x]=W,S++}x++}else if(v.isRectAreaLight){const F=t.get(v);F.color.copy(I).multiplyScalar(U),F.halfWidth.set(v.width*.5,0,0),F.halfHeight.set(0,v.height*.5,0),i.rectArea[p]=F,p++}else if(v.isPointLight){const F=t.get(v);if(F.color.copy(v.color).multiplyScalar(v.intensity),F.distance=v.distance,F.decay=v.decay,v.castShadow){const B=v.shadow,P=e.get(v);P.shadowIntensity=B.intensity,P.shadowBias=B.bias,P.shadowNormalBias=B.normalBias,P.shadowRadius=B.radius,P.shadowMapSize=B.mapSize,P.shadowCameraNear=B.camera.near,P.shadowCameraFar=B.camera.far,i.pointShadow[g]=P,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=v.shadow.matrix,E++}i.point[g]=F,g++}else if(v.isHemisphereLight){const F=t.get(v);F.skyColor.copy(v.color).multiplyScalar(U),F.groundColor.copy(v.groundColor).multiplyScalar(U),i.hemi[m]=F,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const A=i.hash;(A.directionalLength!==f||A.pointLength!==g||A.spotLength!==x||A.rectAreaLength!==p||A.hemiLength!==m||A.numDirectionalShadows!==b||A.numPointShadows!==E||A.numSpotShadows!==S||A.numSpotMaps!==y||A.numLightProbes!==M)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=S+y-w,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=M,A.directionalLength=f,A.pointLength=g,A.spotLength=x,A.rectAreaLength=p,A.hemiLength=m,A.numDirectionalShadows=b,A.numPointShadows=E,A.numSpotShadows=S,A.numSpotMaps=y,A.numLightProbes=M,i.version=sv++)}function c(l,u){let h=0,d=0,f=0,g=0,x=0;const p=u.matrixWorldInverse;for(let m=0,b=l.length;m<b;m++){const E=l[m];if(E.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),h++}else if(E.isSpotLight){const S=i.spot[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),f++}else if(E.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(E.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),d++}else if(E.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(p),x++}}}return{setup:a,setupView:c,state:i}}function Ku(n){const t=new av(n),e=[],i=[];function r(u){l.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function cv(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Ku(n),t.set(r,[a])):s>=o.length?(a=new Ku(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class rf extends Es{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=im,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class lv extends Es{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const uv=`void main() {
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
}`;function dv(n,t,e){let i=new El;const r=new jt,s=new jt,o=new fe,a=new rf({depthPacking:Od}),c=new lv,l={},u=e.maxTextureSize,h={[gi]:Be,[Be]:gi,[de]:de},d=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:uv,fragmentShader:hv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new sn;g.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Vt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yd;let m=this.type;this.render=function(w,M,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const L=n.getRenderTarget(),_=n.getActiveCubeFace(),v=n.getActiveMipmapLevel(),I=n.state;I.setBlending(fi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const U=m!==Yn&&this.type===Yn,N=m===Yn&&this.type!==Yn;for(let W=0,F=w.length;W<F;W++){const B=w[W],P=B.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const z=P.getFrameExtents();if(r.multiply(z),s.copy(P.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/z.x),r.x=s.x*z.x,P.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/z.y),r.y=s.y*z.y,P.mapSize.y=s.y)),P.map===null||U===!0||N===!0){const j=this.type!==Yn?{minFilter:qe,magFilter:qe}:{};P.map!==null&&P.map.dispose(),P.map=new Xi(r.x,r.y,j),P.map.texture.name=B.name+".shadowMap",P.camera.updateProjectionMatrix()}n.setRenderTarget(P.map),n.clear();const H=P.getViewportCount();for(let j=0;j<H;j++){const rt=P.getViewport(j);o.set(s.x*rt.x,s.y*rt.y,s.x*rt.z,s.y*rt.w),I.viewport(o),P.updateMatrices(B,j),i=P.getFrustum(),S(M,A,P.camera,B,this.type)}P.isPointLightShadow!==!0&&this.type===Yn&&b(P,A),P.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(L,_,v)};function b(w,M){const A=t.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Xi(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(M,null,A,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(M,null,A,f,x,null)}function E(w,M,A,L){let _=null;const v=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(v!==void 0)_=v;else if(_=A.isPointLight===!0?c:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const I=_.uuid,U=M.uuid;let N=l[I];N===void 0&&(N={},l[I]=N);let W=N[U];W===void 0&&(W=_.clone(),N[U]=W,M.addEventListener("dispose",y)),_=W}if(_.visible=M.visible,_.wireframe=M.wireframe,L===Yn?_.side=M.shadowSide!==null?M.shadowSide:M.side:_.side=M.shadowSide!==null?M.shadowSide:h[M.side],_.alphaMap=M.alphaMap,_.alphaTest=M.alphaTest,_.map=M.map,_.clipShadows=M.clipShadows,_.clippingPlanes=M.clippingPlanes,_.clipIntersection=M.clipIntersection,_.displacementMap=M.displacementMap,_.displacementScale=M.displacementScale,_.displacementBias=M.displacementBias,_.wireframeLinewidth=M.wireframeLinewidth,_.linewidth=M.linewidth,A.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const I=n.properties.get(_);I.light=A}return _}function S(w,M,A,L,_){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&_===Yn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const U=t.update(w),N=w.material;if(Array.isArray(N)){const W=U.groups;for(let F=0,B=W.length;F<B;F++){const P=W[F],z=N[P.materialIndex];if(z&&z.visible){const H=E(w,z,L,_);w.onBeforeShadow(n,w,M,A,U,H,P),n.renderBufferDirect(A,null,U,H,w,P),w.onAfterShadow(n,w,M,A,U,H,P)}}}else if(N.visible){const W=E(w,N,L,_);w.onBeforeShadow(n,w,M,A,U,W,null),n.renderBufferDirect(A,null,U,W,w,null),w.onAfterShadow(n,w,M,A,U,W,null)}}const I=w.children;for(let U=0,N=I.length;U<N;U++)S(I[U],M,A,L,_)}function y(w){w.target.removeEventListener("dispose",y);for(const A in l){const L=l[A],_=w.target.uuid;_ in L&&(L[_].dispose(),delete L[_])}}}const fv={[lc]:uc,[hc]:pc,[dc]:mc,[Cr]:fc,[uc]:lc,[pc]:hc,[mc]:dc,[fc]:Cr};function pv(n){function t(){let O=!1;const pt=new fe;let K=null;const et=new fe(0,0,0,0);return{setMask:function(dt){K!==dt&&!O&&(n.colorMask(dt,dt,dt,dt),K=dt)},setLocked:function(dt){O=dt},setClear:function(dt,mt,qt,xe,He){He===!0&&(dt*=xe,mt*=xe,qt*=xe),pt.set(dt,mt,qt,xe),et.equals(pt)===!1&&(n.clearColor(dt,mt,qt,xe),et.copy(pt))},reset:function(){O=!1,K=null,et.set(-1,0,0,0)}}}function e(){let O=!1,pt=!1,K=null,et=null,dt=null;return{setReversed:function(mt){pt=mt},setTest:function(mt){mt?ct(n.DEPTH_TEST):st(n.DEPTH_TEST)},setMask:function(mt){K!==mt&&!O&&(n.depthMask(mt),K=mt)},setFunc:function(mt){if(pt&&(mt=fv[mt]),et!==mt){switch(mt){case lc:n.depthFunc(n.NEVER);break;case uc:n.depthFunc(n.ALWAYS);break;case hc:n.depthFunc(n.LESS);break;case Cr:n.depthFunc(n.LEQUAL);break;case dc:n.depthFunc(n.EQUAL);break;case fc:n.depthFunc(n.GEQUAL);break;case pc:n.depthFunc(n.GREATER);break;case mc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}et=mt}},setLocked:function(mt){O=mt},setClear:function(mt){dt!==mt&&(n.clearDepth(mt),dt=mt)},reset:function(){O=!1,K=null,et=null,dt=null}}}function i(){let O=!1,pt=null,K=null,et=null,dt=null,mt=null,qt=null,xe=null,He=null;return{setTest:function(Kt){O||(Kt?ct(n.STENCIL_TEST):st(n.STENCIL_TEST))},setMask:function(Kt){pt!==Kt&&!O&&(n.stencilMask(Kt),pt=Kt)},setFunc:function(Kt,Ve,kn){(K!==Kt||et!==Ve||dt!==kn)&&(n.stencilFunc(Kt,Ve,kn),K=Kt,et=Ve,dt=kn)},setOp:function(Kt,Ve,kn){(mt!==Kt||qt!==Ve||xe!==kn)&&(n.stencilOp(Kt,Ve,kn),mt=Kt,qt=Ve,xe=kn)},setLocked:function(Kt){O=Kt},setClear:function(Kt){He!==Kt&&(n.clearStencil(Kt),He=Kt)},reset:function(){O=!1,pt=null,K=null,et=null,dt=null,mt=null,qt=null,xe=null,He=null}}}const r=new t,s=new e,o=new i,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],f=null,g=!1,x=null,p=null,m=null,b=null,E=null,S=null,y=null,w=new tt(0,0,0),M=0,A=!1,L=null,_=null,v=null,I=null,U=null;const N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,F=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(B)[1]),W=F>=1):B.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),W=F>=2);let P=null,z={};const H=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),rt=new fe().fromArray(H),ht=new fe().fromArray(j);function Y(O,pt,K,et){const dt=new Uint8Array(4),mt=n.createTexture();n.bindTexture(O,mt),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qt=0;qt<K;qt++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(pt,0,n.RGBA,1,1,et,0,n.RGBA,n.UNSIGNED_BYTE,dt):n.texImage2D(pt+qt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,dt);return mt}const Z={};Z[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ct(n.DEPTH_TEST),s.setFunc(Cr),kt(!1),Gt(iu),ct(n.CULL_FACE),D(fi);function ct(O){l[O]!==!0&&(n.enable(O),l[O]=!0)}function st(O){l[O]!==!1&&(n.disable(O),l[O]=!1)}function bt(O,pt){return u[O]!==pt?(n.bindFramebuffer(O,pt),u[O]=pt,O===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=pt),O===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=pt),!0):!1}function St(O,pt){let K=d,et=!1;if(O){K=h.get(pt),K===void 0&&(K=[],h.set(pt,K));const dt=O.textures;if(K.length!==dt.length||K[0]!==n.COLOR_ATTACHMENT0){for(let mt=0,qt=dt.length;mt<qt;mt++)K[mt]=n.COLOR_ATTACHMENT0+mt;K.length=dt.length,et=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,et=!0);et&&n.drawBuffers(K)}function Dt(O){return f!==O?(n.useProgram(O),f=O,!0):!1}const Ft={[Ui]:n.FUNC_ADD,[Lp]:n.FUNC_SUBTRACT,[Ip]:n.FUNC_REVERSE_SUBTRACT};Ft[Dp]=n.MIN,Ft[Up]=n.MAX;const Ot={[Np]:n.ZERO,[Fp]:n.ONE,[Op]:n.SRC_COLOR,[ac]:n.SRC_ALPHA,[Vp]:n.SRC_ALPHA_SATURATE,[Gp]:n.DST_COLOR,[zp]:n.DST_ALPHA,[Bp]:n.ONE_MINUS_SRC_COLOR,[cc]:n.ONE_MINUS_SRC_ALPHA,[Hp]:n.ONE_MINUS_DST_COLOR,[kp]:n.ONE_MINUS_DST_ALPHA,[Wp]:n.CONSTANT_COLOR,[Xp]:n.ONE_MINUS_CONSTANT_COLOR,[Yp]:n.CONSTANT_ALPHA,[qp]:n.ONE_MINUS_CONSTANT_ALPHA};function D(O,pt,K,et,dt,mt,qt,xe,He,Kt){if(O===fi){g===!0&&(st(n.BLEND),g=!1);return}if(g===!1&&(ct(n.BLEND),g=!0),O!==Pp){if(O!==x||Kt!==A){if((p!==Ui||E!==Ui)&&(n.blendEquation(n.FUNC_ADD),p=Ui,E=Ui),Kt)switch(O){case Er:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ru:n.blendFunc(n.ONE,n.ONE);break;case su:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ou:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ru:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case su:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ou:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}m=null,b=null,S=null,y=null,w.set(0,0,0),M=0,x=O,A=Kt}return}dt=dt||pt,mt=mt||K,qt=qt||et,(pt!==p||dt!==E)&&(n.blendEquationSeparate(Ft[pt],Ft[dt]),p=pt,E=dt),(K!==m||et!==b||mt!==S||qt!==y)&&(n.blendFuncSeparate(Ot[K],Ot[et],Ot[mt],Ot[qt]),m=K,b=et,S=mt,y=qt),(xe.equals(w)===!1||He!==M)&&(n.blendColor(xe.r,xe.g,xe.b,He),w.copy(xe),M=He),x=O,A=!1}function Me(O,pt){O.side===de?st(n.CULL_FACE):ct(n.CULL_FACE);let K=O.side===Be;pt&&(K=!K),kt(K),O.blending===Er&&O.transparent===!1?D(fi):D(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),r.setMask(O.colorWrite);const et=O.stencilWrite;o.setTest(et),et&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ce(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ct(n.SAMPLE_ALPHA_TO_COVERAGE):st(n.SAMPLE_ALPHA_TO_COVERAGE)}function kt(O){L!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),L=O)}function Gt(O){O!==Rp?(ct(n.CULL_FACE),O!==_&&(O===iu?n.cullFace(n.BACK):O===Cp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):st(n.CULL_FACE),_=O}function wt(O){O!==v&&(W&&n.lineWidth(O),v=O)}function ce(O,pt,K){O?(ct(n.POLYGON_OFFSET_FILL),(I!==pt||U!==K)&&(n.polygonOffset(pt,K),I=pt,U=K)):st(n.POLYGON_OFFSET_FILL)}function It(O){O?ct(n.SCISSOR_TEST):st(n.SCISSOR_TEST)}function C(O){O===void 0&&(O=n.TEXTURE0+N-1),P!==O&&(n.activeTexture(O),P=O)}function T(O,pt,K){K===void 0&&(P===null?K=n.TEXTURE0+N-1:K=P);let et=z[K];et===void 0&&(et={type:void 0,texture:void 0},z[K]=et),(et.type!==O||et.texture!==pt)&&(P!==K&&(n.activeTexture(K),P=K),n.bindTexture(O,pt||Z[O]),et.type=O,et.texture=pt)}function X(){const O=z[P];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Et(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ut(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function gt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $t(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _t(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pt(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Lt(O){rt.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),rt.copy(O))}function xt(O){ht.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),ht.copy(O))}function Wt(O,pt){let K=c.get(pt);K===void 0&&(K=new WeakMap,c.set(pt,K));let et=K.get(O);et===void 0&&(et=n.getUniformBlockIndex(pt,O.name),K.set(O,et))}function Nt(O,pt){const et=c.get(pt).get(O);a.get(pt)!==et&&(n.uniformBlockBinding(pt,et,O.__bindingPointIndex),a.set(pt,et))}function re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},P=null,z={},u={},h=new WeakMap,d=[],f=null,g=!1,x=null,p=null,m=null,b=null,E=null,S=null,y=null,w=new tt(0,0,0),M=0,A=!1,L=null,_=null,v=null,I=null,U=null,rt.set(0,0,n.canvas.width,n.canvas.height),ht.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ct,disable:st,bindFramebuffer:bt,drawBuffers:St,useProgram:Dt,setBlending:D,setMaterial:Me,setFlipSided:kt,setCullFace:Gt,setLineWidth:wt,setPolygonOffset:ce,setScissorTest:It,activeTexture:C,bindTexture:T,unbindTexture:X,compressedTexImage2D:Q,compressedTexImage3D:it,texImage2D:_t,texImage3D:Pt,updateUBOMapping:Wt,uniformBlockBinding:Nt,texStorage2D:$t,texStorage3D:ot,texSubImage2D:J,texSubImage3D:Et,compressedTexSubImage2D:ut,compressedTexSubImage3D:gt,scissor:Lt,viewport:xt,reset:re}}function ju(n,t,e,i){const r=mv(i);switch(e){case Ld:return n*t;case Dd:return n*t;case Ud:return n*t*2;case _l:return n*t/r.components*r.byteLength;case xl:return n*t/r.components*r.byteLength;case Nd:return n*t*2/r.components*r.byteLength;case vl:return n*t*2/r.components*r.byteLength;case Id:return n*t*3/r.components*r.byteLength;case wn:return n*t*4/r.components*r.byteLength;case Ml:return n*t*4/r.components*r.byteLength;case go:case _o:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case xo:case vo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Mc:case Ec:return Math.max(n,16)*Math.max(t,8)/4;case vc:case Sc:return Math.max(n,8)*Math.max(t,8)/2;case yc:case bc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Tc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case wc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ac:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Rc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Cc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Pc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Lc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ic:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Dc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Uc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Nc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Fc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Oc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Bc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case zc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Mo:case kc:case Gc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Fd:case Hc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Vc:case Wc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mv(n){switch(n){case Jn:case Rd:return{byteLength:1,components:1};case fs:case Cd:case Ms:return{byteLength:2,components:1};case ml:case gl:return{byteLength:2,components:4};case Wi:case pl:case Bn:return{byteLength:4,components:1};case Pd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function gv(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new jt,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,T){return f?new OffscreenCanvas(C,T):ps("canvas")}function x(C,T,X){let Q=1;const it=It(C);if((it.width>X||it.height>X)&&(Q=X/Math.max(it.width,it.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(Q*it.width),Et=Math.floor(Q*it.height);h===void 0&&(h=g(J,Et));const ut=T?g(J,Et):h;return ut.width=J,ut.height=Et,ut.getContext("2d").drawImage(C,0,0,J,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+J+"x"+Et+")."),ut}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==qe&&C.minFilter!==bn}function m(C){n.generateMipmap(C)}function b(C,T,X,Q,it=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=T;if(T===n.RED&&(X===n.FLOAT&&(J=n.R32F),X===n.HALF_FLOAT&&(J=n.R16F),X===n.UNSIGNED_BYTE&&(J=n.R8)),T===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(J=n.R8UI),X===n.UNSIGNED_SHORT&&(J=n.R16UI),X===n.UNSIGNED_INT&&(J=n.R32UI),X===n.BYTE&&(J=n.R8I),X===n.SHORT&&(J=n.R16I),X===n.INT&&(J=n.R32I)),T===n.RG&&(X===n.FLOAT&&(J=n.RG32F),X===n.HALF_FLOAT&&(J=n.RG16F),X===n.UNSIGNED_BYTE&&(J=n.RG8)),T===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(J=n.RG8UI),X===n.UNSIGNED_SHORT&&(J=n.RG16UI),X===n.UNSIGNED_INT&&(J=n.RG32UI),X===n.BYTE&&(J=n.RG8I),X===n.SHORT&&(J=n.RG16I),X===n.INT&&(J=n.RG32I)),T===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(J=n.RGB8UI),X===n.UNSIGNED_SHORT&&(J=n.RGB16UI),X===n.UNSIGNED_INT&&(J=n.RGB32UI),X===n.BYTE&&(J=n.RGB8I),X===n.SHORT&&(J=n.RGB16I),X===n.INT&&(J=n.RGB32I)),T===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),X===n.UNSIGNED_INT&&(J=n.RGBA32UI),X===n.BYTE&&(J=n.RGBA8I),X===n.SHORT&&(J=n.RGBA16I),X===n.INT&&(J=n.RGBA32I)),T===n.RGB&&X===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),T===n.RGBA){const Et=it?Bo:Qt.getTransfer(Q);X===n.FLOAT&&(J=n.RGBA32F),X===n.HALF_FLOAT&&(J=n.RGBA16F),X===n.UNSIGNED_BYTE&&(J=Et===ue?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function E(C,T){let X;return C?T===null||T===Wi||T===Ir?X=n.DEPTH24_STENCIL8:T===Bn?X=n.DEPTH32F_STENCIL8:T===fs&&(X=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Wi||T===Ir?X=n.DEPTH_COMPONENT24:T===Bn?X=n.DEPTH_COMPONENT32F:T===fs&&(X=n.DEPTH_COMPONENT16),X}function S(C,T){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==qe&&C.minFilter!==bn?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function y(C){const T=C.target;T.removeEventListener("dispose",y),M(T),T.isVideoTexture&&u.delete(T)}function w(C){const T=C.target;T.removeEventListener("dispose",w),L(T)}function M(C){const T=i.get(C);if(T.__webglInit===void 0)return;const X=C.source,Q=d.get(X);if(Q){const it=Q[T.__cacheKey];it.usedTimes--,it.usedTimes===0&&A(C),Object.keys(Q).length===0&&d.delete(X)}i.remove(C)}function A(C){const T=i.get(C);n.deleteTexture(T.__webglTexture);const X=C.source,Q=d.get(X);delete Q[T.__cacheKey],o.memory.textures--}function L(C){const T=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(T.__webglFramebuffer[Q]))for(let it=0;it<T.__webglFramebuffer[Q].length;it++)n.deleteFramebuffer(T.__webglFramebuffer[Q][it]);else n.deleteFramebuffer(T.__webglFramebuffer[Q]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[Q])}else{if(Array.isArray(T.__webglFramebuffer))for(let Q=0;Q<T.__webglFramebuffer.length;Q++)n.deleteFramebuffer(T.__webglFramebuffer[Q]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Q=0;Q<T.__webglColorRenderbuffer.length;Q++)T.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[Q]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const X=C.textures;for(let Q=0,it=X.length;Q<it;Q++){const J=i.get(X[Q]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(X[Q])}i.remove(C)}let _=0;function v(){_=0}function I(){const C=_;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),_+=1,C}function U(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function N(C,T){const X=i.get(C);if(C.isVideoTexture&&wt(C),C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(X,C,T);return}}e.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+T)}function W(C,T){const X=i.get(C);if(C.version>0&&X.__version!==C.version){ht(X,C,T);return}e.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+T)}function F(C,T){const X=i.get(C);if(C.version>0&&X.__version!==C.version){ht(X,C,T);return}e.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+T)}function B(C,T){const X=i.get(C);if(C.version>0&&X.__version!==C.version){Y(X,C,T);return}e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+T)}const P={[Oo]:n.REPEAT,[Bi]:n.CLAMP_TO_EDGE,[xc]:n.MIRRORED_REPEAT},z={[qe]:n.NEAREST,[nm]:n.NEAREST_MIPMAP_NEAREST,[Fs]:n.NEAREST_MIPMAP_LINEAR,[bn]:n.LINEAR,[la]:n.LINEAR_MIPMAP_NEAREST,[zi]:n.LINEAR_MIPMAP_LINEAR},H={[sm]:n.NEVER,[hm]:n.ALWAYS,[om]:n.LESS,[zd]:n.LEQUAL,[am]:n.EQUAL,[um]:n.GEQUAL,[cm]:n.GREATER,[lm]:n.NOTEQUAL};function j(C,T){if(T.type===Bn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===bn||T.magFilter===la||T.magFilter===Fs||T.magFilter===zi||T.minFilter===bn||T.minFilter===la||T.minFilter===Fs||T.minFilter===zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,P[T.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,P[T.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,P[T.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,z[T.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,z[T.minFilter]),T.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,H[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===qe||T.minFilter!==Fs&&T.minFilter!==zi||T.type===Bn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function rt(C,T){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",y));const Q=T.source;let it=d.get(Q);it===void 0&&(it={},d.set(Q,it));const J=U(T);if(J!==C.__cacheKey){it[J]===void 0&&(it[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),it[J].usedTimes++;const Et=it[C.__cacheKey];Et!==void 0&&(it[C.__cacheKey].usedTimes--,Et.usedTimes===0&&A(T)),C.__cacheKey=J,C.__webglTexture=it[J].texture}return X}function ht(C,T,X){let Q=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Q=n.TEXTURE_3D);const it=rt(C,T),J=T.source;e.bindTexture(Q,C.__webglTexture,n.TEXTURE0+X);const Et=i.get(J);if(J.version!==Et.__version||it===!0){e.activeTexture(n.TEXTURE0+X);const ut=Qt.getPrimaries(Qt.workingColorSpace),gt=T.colorSpace===hi?null:Qt.getPrimaries(T.colorSpace),$t=T.colorSpace===hi||ut===gt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let ot=x(T.image,!1,r.maxTextureSize);ot=ce(T,ot);const _t=s.convert(T.format,T.colorSpace),Pt=s.convert(T.type);let Lt=b(T.internalFormat,_t,Pt,T.colorSpace,T.isVideoTexture);j(Q,T);let xt;const Wt=T.mipmaps,Nt=T.isVideoTexture!==!0,re=Et.__version===void 0||it===!0,O=J.dataReady,pt=S(T,ot);if(T.isDepthTexture)Lt=E(T.format===Dr,T.type),re&&(Nt?e.texStorage2D(n.TEXTURE_2D,1,Lt,ot.width,ot.height):e.texImage2D(n.TEXTURE_2D,0,Lt,ot.width,ot.height,0,_t,Pt,null));else if(T.isDataTexture)if(Wt.length>0){Nt&&re&&e.texStorage2D(n.TEXTURE_2D,pt,Lt,Wt[0].width,Wt[0].height);for(let K=0,et=Wt.length;K<et;K++)xt=Wt[K],Nt?O&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,xt.width,xt.height,_t,Pt,xt.data):e.texImage2D(n.TEXTURE_2D,K,Lt,xt.width,xt.height,0,_t,Pt,xt.data);T.generateMipmaps=!1}else Nt?(re&&e.texStorage2D(n.TEXTURE_2D,pt,Lt,ot.width,ot.height),O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ot.width,ot.height,_t,Pt,ot.data)):e.texImage2D(n.TEXTURE_2D,0,Lt,ot.width,ot.height,0,_t,Pt,ot.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Nt&&re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,pt,Lt,Wt[0].width,Wt[0].height,ot.depth);for(let K=0,et=Wt.length;K<et;K++)if(xt=Wt[K],T.format!==wn)if(_t!==null)if(Nt){if(O)if(T.layerUpdates.size>0){const dt=ju(xt.width,xt.height,T.format,T.type);for(const mt of T.layerUpdates){const qt=xt.data.subarray(mt*dt/xt.data.BYTES_PER_ELEMENT,(mt+1)*dt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,mt,xt.width,xt.height,1,_t,qt,0,0)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,xt.width,xt.height,ot.depth,_t,xt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,Lt,xt.width,xt.height,ot.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?O&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,xt.width,xt.height,ot.depth,_t,Pt,xt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,K,Lt,xt.width,xt.height,ot.depth,0,_t,Pt,xt.data)}else{Nt&&re&&e.texStorage2D(n.TEXTURE_2D,pt,Lt,Wt[0].width,Wt[0].height);for(let K=0,et=Wt.length;K<et;K++)xt=Wt[K],T.format!==wn?_t!==null?Nt?O&&e.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,xt.width,xt.height,_t,xt.data):e.compressedTexImage2D(n.TEXTURE_2D,K,Lt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?O&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,xt.width,xt.height,_t,Pt,xt.data):e.texImage2D(n.TEXTURE_2D,K,Lt,xt.width,xt.height,0,_t,Pt,xt.data)}else if(T.isDataArrayTexture)if(Nt){if(re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,pt,Lt,ot.width,ot.height,ot.depth),O)if(T.layerUpdates.size>0){const K=ju(ot.width,ot.height,T.format,T.type);for(const et of T.layerUpdates){const dt=ot.data.subarray(et*K/ot.data.BYTES_PER_ELEMENT,(et+1)*K/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,et,ot.width,ot.height,1,_t,Pt,dt)}T.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,_t,Pt,ot.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Lt,ot.width,ot.height,ot.depth,0,_t,Pt,ot.data);else if(T.isData3DTexture)Nt?(re&&e.texStorage3D(n.TEXTURE_3D,pt,Lt,ot.width,ot.height,ot.depth),O&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,_t,Pt,ot.data)):e.texImage3D(n.TEXTURE_3D,0,Lt,ot.width,ot.height,ot.depth,0,_t,Pt,ot.data);else if(T.isFramebufferTexture){if(re)if(Nt)e.texStorage2D(n.TEXTURE_2D,pt,Lt,ot.width,ot.height);else{let K=ot.width,et=ot.height;for(let dt=0;dt<pt;dt++)e.texImage2D(n.TEXTURE_2D,dt,Lt,K,et,0,_t,Pt,null),K>>=1,et>>=1}}else if(Wt.length>0){if(Nt&&re){const K=It(Wt[0]);e.texStorage2D(n.TEXTURE_2D,pt,Lt,K.width,K.height)}for(let K=0,et=Wt.length;K<et;K++)xt=Wt[K],Nt?O&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,_t,Pt,xt):e.texImage2D(n.TEXTURE_2D,K,Lt,_t,Pt,xt);T.generateMipmaps=!1}else if(Nt){if(re){const K=It(ot);e.texStorage2D(n.TEXTURE_2D,pt,Lt,K.width,K.height)}O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,_t,Pt,ot)}else e.texImage2D(n.TEXTURE_2D,0,Lt,_t,Pt,ot);p(T)&&m(Q),Et.__version=J.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function Y(C,T,X){if(T.image.length!==6)return;const Q=rt(C,T),it=T.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+X);const J=i.get(it);if(it.version!==J.__version||Q===!0){e.activeTexture(n.TEXTURE0+X);const Et=Qt.getPrimaries(Qt.workingColorSpace),ut=T.colorSpace===hi?null:Qt.getPrimaries(T.colorSpace),gt=T.colorSpace===hi||Et===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const $t=T.isCompressedTexture||T.image[0].isCompressedTexture,ot=T.image[0]&&T.image[0].isDataTexture,_t=[];for(let et=0;et<6;et++)!$t&&!ot?_t[et]=x(T.image[et],!0,r.maxCubemapSize):_t[et]=ot?T.image[et].image:T.image[et],_t[et]=ce(T,_t[et]);const Pt=_t[0],Lt=s.convert(T.format,T.colorSpace),xt=s.convert(T.type),Wt=b(T.internalFormat,Lt,xt,T.colorSpace),Nt=T.isVideoTexture!==!0,re=J.__version===void 0||Q===!0,O=it.dataReady;let pt=S(T,Pt);j(n.TEXTURE_CUBE_MAP,T);let K;if($t){Nt&&re&&e.texStorage2D(n.TEXTURE_CUBE_MAP,pt,Wt,Pt.width,Pt.height);for(let et=0;et<6;et++){K=_t[et].mipmaps;for(let dt=0;dt<K.length;dt++){const mt=K[dt];T.format!==wn?Lt!==null?Nt?O&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,dt,0,0,mt.width,mt.height,Lt,mt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,dt,Wt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,dt,0,0,mt.width,mt.height,Lt,xt,mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,dt,Wt,mt.width,mt.height,0,Lt,xt,mt.data)}}}else{if(K=T.mipmaps,Nt&&re){K.length>0&&pt++;const et=It(_t[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,pt,Wt,et.width,et.height)}for(let et=0;et<6;et++)if(ot){Nt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,_t[et].width,_t[et].height,Lt,xt,_t[et].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Wt,_t[et].width,_t[et].height,0,Lt,xt,_t[et].data);for(let dt=0;dt<K.length;dt++){const qt=K[dt].image[et].image;Nt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,dt+1,0,0,qt.width,qt.height,Lt,xt,qt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,dt+1,Wt,qt.width,qt.height,0,Lt,xt,qt.data)}}else{Nt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Lt,xt,_t[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Wt,Lt,xt,_t[et]);for(let dt=0;dt<K.length;dt++){const mt=K[dt];Nt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,dt+1,0,0,Lt,xt,mt.image[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,dt+1,Wt,Lt,xt,mt.image[et])}}}p(T)&&m(n.TEXTURE_CUBE_MAP),J.__version=it.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function Z(C,T,X,Q,it,J){const Et=s.convert(X.format,X.colorSpace),ut=s.convert(X.type),gt=b(X.internalFormat,Et,ut,X.colorSpace);if(!i.get(T).__hasExternalTextures){const ot=Math.max(1,T.width>>J),_t=Math.max(1,T.height>>J);it===n.TEXTURE_3D||it===n.TEXTURE_2D_ARRAY?e.texImage3D(it,J,gt,ot,_t,T.depth,0,Et,ut,null):e.texImage2D(it,J,gt,ot,_t,0,Et,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),Gt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,it,i.get(X).__webglTexture,0,kt(T)):(it===n.TEXTURE_2D||it>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,it,i.get(X).__webglTexture,J),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ct(C,T,X){if(n.bindRenderbuffer(n.RENDERBUFFER,C),T.depthBuffer){const Q=T.depthTexture,it=Q&&Q.isDepthTexture?Q.type:null,J=E(T.stencilBuffer,it),Et=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=kt(T);Gt(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,J,T.width,T.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,J,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,J,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Et,n.RENDERBUFFER,C)}else{const Q=T.textures;for(let it=0;it<Q.length;it++){const J=Q[it],Et=s.convert(J.format,J.colorSpace),ut=s.convert(J.type),gt=b(J.internalFormat,Et,ut,J.colorSpace),$t=kt(T);X&&Gt(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,$t,gt,T.width,T.height):Gt(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$t,gt,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,gt,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function st(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),N(T.depthTexture,0);const Q=i.get(T.depthTexture).__webglTexture,it=kt(T);if(T.depthTexture.format===yr)Gt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(T.depthTexture.format===Dr)Gt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function bt(C){const T=i.get(C),X=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){const Q=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Q){const it=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Q.removeEventListener("dispose",it)};Q.addEventListener("dispose",it),T.__depthDisposeCallback=it}T.__boundDepthTexture=Q}if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");st(T.__webglFramebuffer,C)}else if(X){T.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[Q]),T.__webglDepthbuffer[Q]===void 0)T.__webglDepthbuffer[Q]=n.createRenderbuffer(),ct(T.__webglDepthbuffer[Q],C,!1);else{const it=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=T.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,J)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),ct(T.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,it),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,it)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function St(C,T,X){const Q=i.get(C);T!==void 0&&Z(Q.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&bt(C)}function Dt(C){const T=C.texture,X=i.get(C),Q=i.get(T);C.addEventListener("dispose",w);const it=C.textures,J=C.isWebGLCubeRenderTarget===!0,Et=it.length>1;if(Et||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=T.version,o.memory.textures++),J){X.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer[ut]=[];for(let gt=0;gt<T.mipmaps.length;gt++)X.__webglFramebuffer[ut][gt]=n.createFramebuffer()}else X.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer=[];for(let ut=0;ut<T.mipmaps.length;ut++)X.__webglFramebuffer[ut]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(Et)for(let ut=0,gt=it.length;ut<gt;ut++){const $t=i.get(it[ut]);$t.__webglTexture===void 0&&($t.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&Gt(C)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ut=0;ut<it.length;ut++){const gt=it[ut];X.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[ut]);const $t=s.convert(gt.format,gt.colorSpace),ot=s.convert(gt.type),_t=b(gt.internalFormat,$t,ot,gt.colorSpace,C.isXRRenderTarget===!0),Pt=kt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,_t,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,X.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),ct(X.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),j(n.TEXTURE_CUBE_MAP,T);for(let ut=0;ut<6;ut++)if(T.mipmaps&&T.mipmaps.length>0)for(let gt=0;gt<T.mipmaps.length;gt++)Z(X.__webglFramebuffer[ut][gt],C,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,gt);else Z(X.__webglFramebuffer[ut],C,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);p(T)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ut=0,gt=it.length;ut<gt;ut++){const $t=it[ut],ot=i.get($t);e.bindTexture(n.TEXTURE_2D,ot.__webglTexture),j(n.TEXTURE_2D,$t),Z(X.__webglFramebuffer,C,$t,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,0),p($t)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ut=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,Q.__webglTexture),j(ut,T),T.mipmaps&&T.mipmaps.length>0)for(let gt=0;gt<T.mipmaps.length;gt++)Z(X.__webglFramebuffer[gt],C,T,n.COLOR_ATTACHMENT0,ut,gt);else Z(X.__webglFramebuffer,C,T,n.COLOR_ATTACHMENT0,ut,0);p(T)&&m(ut),e.unbindTexture()}C.depthBuffer&&bt(C)}function Ft(C){const T=C.textures;for(let X=0,Q=T.length;X<Q;X++){const it=T[X];if(p(it)){const J=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Et=i.get(it).__webglTexture;e.bindTexture(J,Et),m(J),e.unbindTexture()}}}const Ot=[],D=[];function Me(C){if(C.samples>0){if(Gt(C)===!1){const T=C.textures,X=C.width,Q=C.height;let it=n.COLOR_BUFFER_BIT;const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=i.get(C),ut=T.length>1;if(ut)for(let gt=0;gt<T.length;gt++)e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let gt=0;gt<T.length;gt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(it|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(it|=n.STENCIL_BUFFER_BIT)),ut){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Et.__webglColorRenderbuffer[gt]);const $t=i.get(T[gt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$t,0)}n.blitFramebuffer(0,0,X,Q,0,0,X,Q,it,n.NEAREST),c===!0&&(Ot.length=0,D.length=0,Ot.push(n.COLOR_ATTACHMENT0+gt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ot.push(J),D.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ot))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let gt=0;gt<T.length;gt++){e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,Et.__webglColorRenderbuffer[gt]);const $t=i.get(T[gt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,$t,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const T=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function kt(C){return Math.min(r.maxSamples,C.samples)}function Gt(C){const T=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function wt(C){const T=o.render.frame;u.get(C)!==T&&(u.set(C,T),C.update())}function ce(C,T){const X=C.colorSpace,Q=C.format,it=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||X!==Mi&&X!==hi&&(Qt.getTransfer(X)===ue?(Q!==wn||it!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),T}function It(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=v,this.setTexture2D=N,this.setTexture2DArray=W,this.setTexture3D=F,this.setTextureCube=B,this.rebindTextures=St,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=Gt}function _v(n,t){function e(i,r=hi){let s;const o=Qt.getTransfer(r);if(i===Jn)return n.UNSIGNED_BYTE;if(i===ml)return n.UNSIGNED_SHORT_4_4_4_4;if(i===gl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Pd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Rd)return n.BYTE;if(i===Cd)return n.SHORT;if(i===fs)return n.UNSIGNED_SHORT;if(i===pl)return n.INT;if(i===Wi)return n.UNSIGNED_INT;if(i===Bn)return n.FLOAT;if(i===Ms)return n.HALF_FLOAT;if(i===Ld)return n.ALPHA;if(i===Id)return n.RGB;if(i===wn)return n.RGBA;if(i===Dd)return n.LUMINANCE;if(i===Ud)return n.LUMINANCE_ALPHA;if(i===yr)return n.DEPTH_COMPONENT;if(i===Dr)return n.DEPTH_STENCIL;if(i===_l)return n.RED;if(i===xl)return n.RED_INTEGER;if(i===Nd)return n.RG;if(i===vl)return n.RG_INTEGER;if(i===Ml)return n.RGBA_INTEGER;if(i===go||i===_o||i===xo||i===vo)if(o===ue)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===go)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===go)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_o)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vc||i===Mc||i===Sc||i===Ec)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===vc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Mc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ec)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yc||i===bc||i===Tc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===yc||i===bc)return o===ue?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Tc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===wc||i===Ac||i===Rc||i===Cc||i===Pc||i===Lc||i===Ic||i===Dc||i===Uc||i===Nc||i===Fc||i===Oc||i===Bc||i===zc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===wc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ac)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Cc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Lc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ic)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Uc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Nc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Oc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Mo||i===kc||i===Gc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Mo)return o===ue?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===kc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fd||i===Hc||i===Vc||i===Wc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Mo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Hc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ir?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class xv extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Te extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vv={type:"move"};class za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,i),m=this._getHandJoint(l,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vv)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Te;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Mv=`
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

}`;class Ev{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new De,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new _i({vertexShader:Mv,fragmentShader:Sv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Vt(new jo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yv extends Or{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const x=new Ev,p=e.getContextAttributes();let m=null,b=null;const E=[],S=[],y=new jt;let w=null;const M=new un;M.layers.enable(1),M.viewport=new fe;const A=new un;A.layers.enable(2),A.viewport=new fe;const L=[M,A],_=new xv;_.layers.enable(1),_.layers.enable(2);let v=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=E[Y];return Z===void 0&&(Z=new za,E[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=E[Y];return Z===void 0&&(Z=new za,E[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=E[Y];return Z===void 0&&(Z=new za,E[Y]=Z),Z.getHandSpace()};function U(Y){const Z=S.indexOf(Y.inputSource);if(Z===-1)return;const ct=E[Z];ct!==void 0&&(ct.update(Y.inputSource,Y.frame,l||o),ct.dispatchEvent({type:Y.type,data:Y.inputSource}))}function N(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",W);for(let Y=0;Y<E.length;Y++){const Z=S[Y];Z!==null&&(S[Y]=null,E[Y].disconnect(Z))}v=null,I=null,x.reset(),t.setRenderTarget(m),f=null,d=null,h=null,r=null,b=null,ht.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",N),r.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(y),r.renderState.layers===void 0){const Z={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,e,Z),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Xi(f.framebufferWidth,f.framebufferHeight,{format:wn,type:Jn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Z=null,ct=null,st=null;p.depth&&(st=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=p.stencil?Dr:yr,ct=p.stencil?Ir:Wi);const bt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:s};h=new XRWebGLBinding(r,e),d=h.createProjectionLayer(bt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Xi(d.textureWidth,d.textureHeight,{format:wn,type:Jn,depthTexture:new Jd(d.textureWidth,d.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),ht.setContext(r),ht.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function W(Y){for(let Z=0;Z<Y.removed.length;Z++){const ct=Y.removed[Z],st=S.indexOf(ct);st>=0&&(S[st]=null,E[st].disconnect(ct))}for(let Z=0;Z<Y.added.length;Z++){const ct=Y.added[Z];let st=S.indexOf(ct);if(st===-1){for(let St=0;St<E.length;St++)if(St>=S.length){S.push(ct),st=St;break}else if(S[St]===null){S[St]=ct,st=St;break}if(st===-1)break}const bt=E[st];bt&&bt.connect(ct)}}const F=new V,B=new V;function P(Y,Z,ct){F.setFromMatrixPosition(Z.matrixWorld),B.setFromMatrixPosition(ct.matrixWorld);const st=F.distanceTo(B),bt=Z.projectionMatrix.elements,St=ct.projectionMatrix.elements,Dt=bt[14]/(bt[10]-1),Ft=bt[14]/(bt[10]+1),Ot=(bt[9]+1)/bt[5],D=(bt[9]-1)/bt[5],Me=(bt[8]-1)/bt[0],kt=(St[8]+1)/St[0],Gt=Dt*Me,wt=Dt*kt,ce=st/(-Me+kt),It=ce*-Me;if(Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(It),Y.translateZ(ce),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),bt[10]===-1)Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const C=Dt+ce,T=Ft+ce,X=Gt-It,Q=wt+(st-It),it=Ot*Ft/T*C,J=D*Ft/T*C;Y.projectionMatrix.makePerspective(X,Q,it,J,C,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function z(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let Z=Y.near,ct=Y.far;x.texture!==null&&(x.depthNear>0&&(Z=x.depthNear),x.depthFar>0&&(ct=x.depthFar)),_.near=A.near=M.near=Z,_.far=A.far=M.far=ct,(v!==_.near||I!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),v=_.near,I=_.far);const st=Y.parent,bt=_.cameras;z(_,st);for(let St=0;St<bt.length;St++)z(bt[St],st);bt.length===2?P(_,M,A):_.projectionMatrix.copy(M.projectionMatrix),H(Y,_,st)};function H(Y,Z,ct){ct===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(ct.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Xc*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let j=null;function rt(Y,Z){if(u=Z.getViewerPose(l||o),g=Z,u!==null){const ct=u.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let st=!1;ct.length!==_.cameras.length&&(_.cameras.length=0,st=!0);for(let St=0;St<ct.length;St++){const Dt=ct[St];let Ft=null;if(f!==null)Ft=f.getViewport(Dt);else{const D=h.getViewSubImage(d,Dt);Ft=D.viewport,St===0&&(t.setRenderTargetTextures(b,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(b))}let Ot=L[St];Ot===void 0&&(Ot=new un,Ot.layers.enable(St),Ot.viewport=new fe,L[St]=Ot),Ot.matrix.fromArray(Dt.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(Dt.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),St===0&&(_.matrix.copy(Ot.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),st===!0&&_.cameras.push(Ot)}const bt=r.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const St=h.getDepthInformation(ct[0]);St&&St.isValid&&St.texture&&x.init(t,St,r.renderState)}}for(let ct=0;ct<E.length;ct++){const st=S[ct],bt=E[ct];st!==null&&bt!==void 0&&bt.update(st,Z,l||o)}j&&j(Y,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const ht=new jd;ht.setAnimationLoop(rt),this.setAnimationLoop=function(Y){j=Y},this.dispose=function(){}}}const Ci=new Rn,bv=new ee;function Tv(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,qd(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,b,E,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,S)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),x(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,b,E):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Be&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Be&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const b=t.get(m),E=b.envMap,S=b.envMapRotation;E&&(p.envMap.value=E,Ci.copy(S),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),p.envMapRotation.value.setFromMatrix4(bv.makeRotationFromEuler(Ci)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,b,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=E*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Be&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const b=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function wv(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,E){const S=E.program;i.uniformBlockBinding(b,S)}function l(b,E){let S=r[b.id];S===void 0&&(g(b),S=u(b),r[b.id]=S,b.addEventListener("dispose",p));const y=E.program;i.updateUBOMapping(b,y);const w=t.render.frame;s[b.id]!==w&&(d(b),s[b.id]=w)}function u(b){const E=h();b.__bindingPointIndex=E;const S=n.createBuffer(),y=b.__size,w=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,y,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,S),S}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const E=r[b.id],S=b.uniforms,y=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let w=0,M=S.length;w<M;w++){const A=Array.isArray(S[w])?S[w]:[S[w]];for(let L=0,_=A.length;L<_;L++){const v=A[L];if(f(v,w,L,y)===!0){const I=v.__offset,U=Array.isArray(v.value)?v.value:[v.value];let N=0;for(let W=0;W<U.length;W++){const F=U[W],B=x(F);typeof F=="number"||typeof F=="boolean"?(v.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,I+N,v.__data)):F.isMatrix3?(v.__data[0]=F.elements[0],v.__data[1]=F.elements[1],v.__data[2]=F.elements[2],v.__data[3]=0,v.__data[4]=F.elements[3],v.__data[5]=F.elements[4],v.__data[6]=F.elements[5],v.__data[7]=0,v.__data[8]=F.elements[6],v.__data[9]=F.elements[7],v.__data[10]=F.elements[8],v.__data[11]=0):(F.toArray(v.__data,N),N+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,v.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,E,S,y){const w=b.value,M=E+"_"+S;if(y[M]===void 0)return typeof w=="number"||typeof w=="boolean"?y[M]=w:y[M]=w.clone(),!0;{const A=y[M];if(typeof w=="number"||typeof w=="boolean"){if(A!==w)return y[M]=w,!0}else if(A.equals(w)===!1)return A.copy(w),!0}return!1}function g(b){const E=b.uniforms;let S=0;const y=16;for(let M=0,A=E.length;M<A;M++){const L=Array.isArray(E[M])?E[M]:[E[M]];for(let _=0,v=L.length;_<v;_++){const I=L[_],U=Array.isArray(I.value)?I.value:[I.value];for(let N=0,W=U.length;N<W;N++){const F=U[N],B=x(F),P=S%y,z=P%B.boundary,H=P+z;S+=z,H!==0&&y-H<B.storage&&(S+=y-H),I.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=B.storage}}}const w=S%y;return w>0&&(S+=y-w),b.__size=S,b.__cache={},this}function x(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function p(b){const E=b.target;E.removeEventListener("dispose",p);const S=o.indexOf(E.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function m(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:c,update:l,dispose:m}}class Av{constructor(t={}){const{canvas:e=pm(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let x=null,p=null;const m=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=pi,this.toneMappingExposure=1;const E=this;let S=!1,y=0,w=0,M=null,A=-1,L=null;const _=new fe,v=new fe;let I=null;const U=new tt(0);let N=0,W=e.width,F=e.height,B=1,P=null,z=null;const H=new fe(0,0,W,F),j=new fe(0,0,W,F);let rt=!1;const ht=new El;let Y=!1,Z=!1;const ct=new ee,st=new ee,bt=new V,St=new fe,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function Ot(){return M===null?B:1}let D=i;function Me(R,k){return e.getContext(R,k)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fl}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),D===null){const k="webgl2";if(D=Me(k,R),D===null)throw Me(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let kt,Gt,wt,ce,It,C,T,X,Q,it,J,Et,ut,gt,$t,ot,_t,Pt,Lt,xt,Wt,Nt,re,O;function pt(){kt=new D_(D),kt.init(),Nt=new _v(D,kt),Gt=new A_(D,kt,t,Nt),wt=new pv(D),Gt.reverseDepthBuffer&&wt.buffers.depth.setReversed(!0),ce=new F_(D),It=new tv,C=new gv(D,kt,wt,It,Gt,Nt,ce),T=new C_(E),X=new I_(E),Q=new Vm(D),re=new T_(D,Q),it=new U_(D,Q,ce,re),J=new B_(D,it,Q,ce),Lt=new O_(D,Gt,C),ot=new R_(It),Et=new Qx(E,T,X,kt,Gt,re,ot),ut=new Tv(E,It),gt=new nv,$t=new cv(kt),Pt=new b_(E,T,X,wt,J,d,c),_t=new dv(E,J,Gt),O=new wv(D,ce,Gt,wt),xt=new w_(D,kt,ce),Wt=new N_(D,kt,ce),ce.programs=Et.programs,E.capabilities=Gt,E.extensions=kt,E.properties=It,E.renderLists=gt,E.shadowMap=_t,E.state=wt,E.info=ce}pt();const K=new yv(E,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const R=kt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=kt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(R){R!==void 0&&(B=R,this.setSize(W,F,!1))},this.getSize=function(R){return R.set(W,F)},this.setSize=function(R,k,q=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=R,F=k,e.width=Math.floor(R*B),e.height=Math.floor(k*B),q===!0&&(e.style.width=R+"px",e.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(W*B,F*B).floor()},this.setDrawingBufferSize=function(R,k,q){W=R,F=k,B=q,e.width=Math.floor(R*q),e.height=Math.floor(k*q),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(_)},this.getViewport=function(R){return R.copy(H)},this.setViewport=function(R,k,q,$){R.isVector4?H.set(R.x,R.y,R.z,R.w):H.set(R,k,q,$),wt.viewport(_.copy(H).multiplyScalar(B).round())},this.getScissor=function(R){return R.copy(j)},this.setScissor=function(R,k,q,$){R.isVector4?j.set(R.x,R.y,R.z,R.w):j.set(R,k,q,$),wt.scissor(v.copy(j).multiplyScalar(B).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(R){wt.setScissorTest(rt=R)},this.setOpaqueSort=function(R){P=R},this.setTransparentSort=function(R){z=R},this.getClearColor=function(R){return R.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(R=!0,k=!0,q=!0){let $=0;if(R){let G=!1;if(M!==null){const at=M.texture.format;G=at===Ml||at===vl||at===xl}if(G){const at=M.texture.type,ft=at===Jn||at===Wi||at===fs||at===Ir||at===ml||at===gl,vt=Pt.getClearColor(),Mt=Pt.getClearAlpha(),At=vt.r,Rt=vt.g,yt=vt.b;ft?(f[0]=At,f[1]=Rt,f[2]=yt,f[3]=Mt,D.clearBufferuiv(D.COLOR,0,f)):(g[0]=At,g[1]=Rt,g[2]=yt,g[3]=Mt,D.clearBufferiv(D.COLOR,0,g))}else $|=D.COLOR_BUFFER_BIT}k&&($|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),q&&($|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),gt.dispose(),$t.dispose(),It.dispose(),T.dispose(),X.dispose(),J.dispose(),re.dispose(),O.dispose(),Et.dispose(),K.dispose(),K.removeEventListener("sessionstart",Kl),K.removeEventListener("sessionend",jl),yi.stop()};function et(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=ce.autoReset,k=_t.enabled,q=_t.autoUpdate,$=_t.needsUpdate,G=_t.type;pt(),ce.autoReset=R,_t.enabled=k,_t.autoUpdate=q,_t.needsUpdate=$,_t.type=G}function mt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function qt(R){const k=R.target;k.removeEventListener("dispose",qt),xe(k)}function xe(R){He(R),It.remove(R)}function He(R){const k=It.get(R).programs;k!==void 0&&(k.forEach(function(q){Et.releaseProgram(q)}),R.isShaderMaterial&&Et.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,q,$,G,at){k===null&&(k=Dt);const ft=G.isMesh&&G.matrixWorld.determinant()<0,vt=bp(R,k,q,$,G);wt.setMaterial($,ft);let Mt=q.index,At=1;if($.wireframe===!0){if(Mt=it.getWireframeAttribute(q),Mt===void 0)return;At=2}const Rt=q.drawRange,yt=q.attributes.position;let te=Rt.start*At,le=(Rt.start+Rt.count)*At;at!==null&&(te=Math.max(te,at.start*At),le=Math.min(le,(at.start+at.count)*At)),Mt!==null?(te=Math.max(te,0),le=Math.min(le,Mt.count)):yt!=null&&(te=Math.max(te,0),le=Math.min(le,yt.count));const pe=le-te;if(pe<0||pe===1/0)return;re.setup(G,$,vt,q,Mt);let Ke,Zt=xt;if(Mt!==null&&(Ke=Q.get(Mt),Zt=Wt,Zt.setIndex(Ke)),G.isMesh)$.wireframe===!0?(wt.setLineWidth($.wireframeLinewidth*Ot()),Zt.setMode(D.LINES)):Zt.setMode(D.TRIANGLES);else if(G.isLine){let Tt=$.linewidth;Tt===void 0&&(Tt=1),wt.setLineWidth(Tt*Ot()),G.isLineSegments?Zt.setMode(D.LINES):G.isLineLoop?Zt.setMode(D.LINE_LOOP):Zt.setMode(D.LINE_STRIP)}else G.isPoints?Zt.setMode(D.POINTS):G.isSprite&&Zt.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Zt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Tt=G._multiDrawStarts,Ae=G._multiDrawCounts,Jt=G._multiDrawCount,pn=Mt?Q.get(Mt).bytesPerElement:1,Qi=It.get($).currentProgram.getUniforms();for(let je=0;je<Jt;je++)Qi.setValue(D,"_gl_DrawID",je),Zt.render(Tt[je]/pn,Ae[je])}else if(G.isInstancedMesh)Zt.renderInstances(te,pe,G.count);else if(q.isInstancedBufferGeometry){const Tt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ae=Math.min(q.instanceCount,Tt);Zt.renderInstances(te,pe,Ae)}else Zt.render(te,pe)};function Kt(R,k,q){R.transparent===!0&&R.side===de&&R.forceSinglePass===!1?(R.side=Be,R.needsUpdate=!0,Ns(R,k,q),R.side=gi,R.needsUpdate=!0,Ns(R,k,q),R.side=de):Ns(R,k,q)}this.compile=function(R,k,q=null){q===null&&(q=R),p=$t.get(q),p.init(k),b.push(p),q.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),R!==q&&R.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const $=new Set;return R.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const at=G.material;if(at)if(Array.isArray(at))for(let ft=0;ft<at.length;ft++){const vt=at[ft];Kt(vt,q,G),$.add(vt)}else Kt(at,q,G),$.add(at)}),b.pop(),p=null,$},this.compileAsync=function(R,k,q=null){const $=this.compile(R,k,q);return new Promise(G=>{function at(){if($.forEach(function(ft){It.get(ft).currentProgram.isReady()&&$.delete(ft)}),$.size===0){G(R);return}setTimeout(at,10)}kt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Ve=null;function kn(R){Ve&&Ve(R)}function Kl(){yi.stop()}function jl(){yi.start()}const yi=new jd;yi.setAnimationLoop(kn),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(R){Ve=R,K.setAnimationLoop(R),R===null?yi.stop():yi.start()},K.addEventListener("sessionstart",Kl),K.addEventListener("sessionend",jl),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(k),k=K.getCamera()),R.isScene===!0&&R.onBeforeRender(E,R,k,M),p=$t.get(R,b.length),p.init(k),b.push(p),st.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ht.setFromProjectionMatrix(st),Z=this.localClippingEnabled,Y=ot.init(this.clippingPlanes,Z),x=gt.get(R,m.length),x.init(),m.push(x),K.enabled===!0&&K.isPresenting===!0){const at=E.xr.getDepthSensingMesh();at!==null&&sa(at,k,-1/0,E.sortObjects)}sa(R,k,0,E.sortObjects),x.finish(),E.sortObjects===!0&&x.sort(P,z),Ft=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Ft&&Pt.addToRenderList(x,R),this.info.render.frame++,Y===!0&&ot.beginShadows();const q=p.state.shadowsArray;_t.render(q,R,k),Y===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=x.opaque,G=x.transmissive;if(p.setupLights(),k.isArrayCamera){const at=k.cameras;if(G.length>0)for(let ft=0,vt=at.length;ft<vt;ft++){const Mt=at[ft];Jl($,G,R,Mt)}Ft&&Pt.render(R);for(let ft=0,vt=at.length;ft<vt;ft++){const Mt=at[ft];Zl(x,R,Mt,Mt.viewport)}}else G.length>0&&Jl($,G,R,k),Ft&&Pt.render(R),Zl(x,R,k);M!==null&&(C.updateMultisampleRenderTarget(M),C.updateRenderTargetMipmap(M)),R.isScene===!0&&R.onAfterRender(E,R,k),re.resetDefaultState(),A=-1,L=null,b.pop(),b.length>0?(p=b[b.length-1],Y===!0&&ot.setGlobalState(E.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function sa(R,k,q,$){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ht.intersectsSprite(R)){$&&St.setFromMatrixPosition(R.matrixWorld).applyMatrix4(st);const ft=J.update(R),vt=R.material;vt.visible&&x.push(R,ft,vt,q,St.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ht.intersectsObject(R))){const ft=J.update(R),vt=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),St.copy(R.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),St.copy(ft.boundingSphere.center)),St.applyMatrix4(R.matrixWorld).applyMatrix4(st)),Array.isArray(vt)){const Mt=ft.groups;for(let At=0,Rt=Mt.length;At<Rt;At++){const yt=Mt[At],te=vt[yt.materialIndex];te&&te.visible&&x.push(R,ft,te,q,St.z,yt)}}else vt.visible&&x.push(R,ft,vt,q,St.z,null)}}const at=R.children;for(let ft=0,vt=at.length;ft<vt;ft++)sa(at[ft],k,q,$)}function Zl(R,k,q,$){const G=R.opaque,at=R.transmissive,ft=R.transparent;p.setupLightsView(q),Y===!0&&ot.setGlobalState(E.clippingPlanes,q),$&&wt.viewport(_.copy($)),G.length>0&&Us(G,k,q),at.length>0&&Us(at,k,q),ft.length>0&&Us(ft,k,q),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function Jl(R,k,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new Xi(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?Ms:Jn,minFilter:zi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const at=p.state.transmissionRenderTarget[$.id],ft=$.viewport||_;at.setSize(ft.z,ft.w);const vt=E.getRenderTarget();E.setRenderTarget(at),E.getClearColor(U),N=E.getClearAlpha(),N<1&&E.setClearColor(16777215,.5),E.clear(),Ft&&Pt.render(q);const Mt=E.toneMapping;E.toneMapping=pi;const At=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),Y===!0&&ot.setGlobalState(E.clippingPlanes,$),Us(R,q,$),C.updateMultisampleRenderTarget(at),C.updateRenderTargetMipmap(at),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let yt=0,te=k.length;yt<te;yt++){const le=k[yt],pe=le.object,Ke=le.geometry,Zt=le.material,Tt=le.group;if(Zt.side===de&&pe.layers.test($.layers)){const Ae=Zt.side;Zt.side=Be,Zt.needsUpdate=!0,Ql(pe,q,$,Ke,Zt,Tt),Zt.side=Ae,Zt.needsUpdate=!0,Rt=!0}}Rt===!0&&(C.updateMultisampleRenderTarget(at),C.updateRenderTargetMipmap(at))}E.setRenderTarget(vt),E.setClearColor(U,N),At!==void 0&&($.viewport=At),E.toneMapping=Mt}function Us(R,k,q){const $=k.isScene===!0?k.overrideMaterial:null;for(let G=0,at=R.length;G<at;G++){const ft=R[G],vt=ft.object,Mt=ft.geometry,At=$===null?ft.material:$,Rt=ft.group;vt.layers.test(q.layers)&&Ql(vt,k,q,Mt,At,Rt)}}function Ql(R,k,q,$,G,at){R.onBeforeRender(E,k,q,$,G,at),R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),G.onBeforeRender(E,k,q,$,R,at),G.transparent===!0&&G.side===de&&G.forceSinglePass===!1?(G.side=Be,G.needsUpdate=!0,E.renderBufferDirect(q,k,$,G,R,at),G.side=gi,G.needsUpdate=!0,E.renderBufferDirect(q,k,$,G,R,at),G.side=de):E.renderBufferDirect(q,k,$,G,R,at),R.onAfterRender(E,k,q,$,G,at)}function Ns(R,k,q){k.isScene!==!0&&(k=Dt);const $=It.get(R),G=p.state.lights,at=p.state.shadowsArray,ft=G.state.version,vt=Et.getParameters(R,G.state,at,k,q),Mt=Et.getProgramCacheKey(vt);let At=$.programs;$.environment=R.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(R.isMeshStandardMaterial?X:T).get(R.envMap||$.environment),$.envMapRotation=$.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,At===void 0&&(R.addEventListener("dispose",qt),At=new Map,$.programs=At);let Rt=At.get(Mt);if(Rt!==void 0){if($.currentProgram===Rt&&$.lightsStateVersion===ft)return eu(R,vt),Rt}else vt.uniforms=Et.getUniforms(R),R.onBeforeCompile(vt,E),Rt=Et.acquireProgram(vt,Mt),At.set(Mt,Rt),$.uniforms=vt.uniforms;const yt=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(yt.clippingPlanes=ot.uniform),eu(R,vt),$.needsLights=wp(R),$.lightsStateVersion=ft,$.needsLights&&(yt.ambientLightColor.value=G.state.ambient,yt.lightProbe.value=G.state.probe,yt.directionalLights.value=G.state.directional,yt.directionalLightShadows.value=G.state.directionalShadow,yt.spotLights.value=G.state.spot,yt.spotLightShadows.value=G.state.spotShadow,yt.rectAreaLights.value=G.state.rectArea,yt.ltc_1.value=G.state.rectAreaLTC1,yt.ltc_2.value=G.state.rectAreaLTC2,yt.pointLights.value=G.state.point,yt.pointLightShadows.value=G.state.pointShadow,yt.hemisphereLights.value=G.state.hemi,yt.directionalShadowMap.value=G.state.directionalShadowMap,yt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,yt.spotShadowMap.value=G.state.spotShadowMap,yt.spotLightMatrix.value=G.state.spotLightMatrix,yt.spotLightMap.value=G.state.spotLightMap,yt.pointShadowMap.value=G.state.pointShadowMap,yt.pointShadowMatrix.value=G.state.pointShadowMatrix),$.currentProgram=Rt,$.uniformsList=null,Rt}function tu(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=Eo.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function eu(R,k){const q=It.get(R);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function bp(R,k,q,$,G){k.isScene!==!0&&(k=Dt),C.resetTextureUnits();const at=k.fog,ft=$.isMeshStandardMaterial?k.environment:null,vt=M===null?E.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Mi,Mt=($.isMeshStandardMaterial?X:T).get($.envMap||ft),At=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Rt=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),yt=!!q.morphAttributes.position,te=!!q.morphAttributes.normal,le=!!q.morphAttributes.color;let pe=pi;$.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(pe=E.toneMapping);const Ke=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Zt=Ke!==void 0?Ke.length:0,Tt=It.get($),Ae=p.state.lights;if(Y===!0&&(Z===!0||R!==L)){const on=R===L&&$.id===A;ot.setState($,R,on)}let Jt=!1;$.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Ae.state.version||Tt.outputColorSpace!==vt||G.isBatchedMesh&&Tt.batching===!1||!G.isBatchedMesh&&Tt.batching===!0||G.isBatchedMesh&&Tt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Tt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Tt.instancing===!1||!G.isInstancedMesh&&Tt.instancing===!0||G.isSkinnedMesh&&Tt.skinning===!1||!G.isSkinnedMesh&&Tt.skinning===!0||G.isInstancedMesh&&Tt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Tt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Tt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Tt.instancingMorph===!1&&G.morphTexture!==null||Tt.envMap!==Mt||$.fog===!0&&Tt.fog!==at||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==ot.numPlanes||Tt.numIntersection!==ot.numIntersection)||Tt.vertexAlphas!==At||Tt.vertexTangents!==Rt||Tt.morphTargets!==yt||Tt.morphNormals!==te||Tt.morphColors!==le||Tt.toneMapping!==pe||Tt.morphTargetsCount!==Zt)&&(Jt=!0):(Jt=!0,Tt.__version=$.version);let pn=Tt.currentProgram;Jt===!0&&(pn=Ns($,k,G));let Qi=!1,je=!1,oa=!1;const me=pn.getUniforms(),ni=Tt.uniforms;if(wt.useProgram(pn.program)&&(Qi=!0,je=!0,oa=!0),$.id!==A&&(A=$.id,je=!0),Qi||L!==R){Gt.reverseDepthBuffer?(ct.copy(R.projectionMatrix),gm(ct),_m(ct),me.setValue(D,"projectionMatrix",ct)):me.setValue(D,"projectionMatrix",R.projectionMatrix),me.setValue(D,"viewMatrix",R.matrixWorldInverse);const on=me.map.cameraPosition;on!==void 0&&on.setValue(D,bt.setFromMatrixPosition(R.matrixWorld)),Gt.logarithmicDepthBuffer&&me.setValue(D,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&me.setValue(D,"isOrthographic",R.isOrthographicCamera===!0),L!==R&&(L=R,je=!0,oa=!0)}if(G.isSkinnedMesh){me.setOptional(D,G,"bindMatrix"),me.setOptional(D,G,"bindMatrixInverse");const on=G.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),me.setValue(D,"boneTexture",on.boneTexture,C))}G.isBatchedMesh&&(me.setOptional(D,G,"batchingTexture"),me.setValue(D,"batchingTexture",G._matricesTexture,C),me.setOptional(D,G,"batchingIdTexture"),me.setValue(D,"batchingIdTexture",G._indirectTexture,C),me.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&me.setValue(D,"batchingColorTexture",G._colorsTexture,C));const aa=q.morphAttributes;if((aa.position!==void 0||aa.normal!==void 0||aa.color!==void 0)&&Lt.update(G,q,pn),(je||Tt.receiveShadow!==G.receiveShadow)&&(Tt.receiveShadow=G.receiveShadow,me.setValue(D,"receiveShadow",G.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(ni.envMap.value=Mt,ni.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&k.environment!==null&&(ni.envMapIntensity.value=k.environmentIntensity),je&&(me.setValue(D,"toneMappingExposure",E.toneMappingExposure),Tt.needsLights&&Tp(ni,oa),at&&$.fog===!0&&ut.refreshFogUniforms(ni,at),ut.refreshMaterialUniforms(ni,$,B,F,p.state.transmissionRenderTarget[R.id]),Eo.upload(D,tu(Tt),ni,C)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Eo.upload(D,tu(Tt),ni,C),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&me.setValue(D,"center",G.center),me.setValue(D,"modelViewMatrix",G.modelViewMatrix),me.setValue(D,"normalMatrix",G.normalMatrix),me.setValue(D,"modelMatrix",G.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const on=$.uniformsGroups;for(let ca=0,Ap=on.length;ca<Ap;ca++){const nu=on[ca];O.update(nu,pn),O.bind(nu,pn)}}return pn}function Tp(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function wp(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(R,k,q){It.get(R.texture).__webglTexture=k,It.get(R.depthTexture).__webglTexture=q;const $=It.get(R);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=q===void 0,$.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,k){const q=It.get(R);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,q=0){M=R,y=k,w=q;let $=!0,G=null,at=!1,ft=!1;if(R){const Mt=It.get(R);if(Mt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(D.FRAMEBUFFER,null),$=!1;else if(Mt.__webglFramebuffer===void 0)C.setupRenderTarget(R);else if(Mt.__hasExternalTextures)C.rebindTextures(R,It.get(R.texture).__webglTexture,It.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const yt=R.depthTexture;if(Mt.__boundDepthTexture!==yt){if(yt!==null&&It.has(yt)&&(R.width!==yt.image.width||R.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(R)}}const At=R.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(ft=!0);const Rt=It.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Rt[k])?G=Rt[k][q]:G=Rt[k],at=!0):R.samples>0&&C.useMultisampledRTT(R)===!1?G=It.get(R).__webglMultisampledFramebuffer:Array.isArray(Rt)?G=Rt[q]:G=Rt,_.copy(R.viewport),v.copy(R.scissor),I=R.scissorTest}else _.copy(H).multiplyScalar(B).floor(),v.copy(j).multiplyScalar(B).floor(),I=rt;if(wt.bindFramebuffer(D.FRAMEBUFFER,G)&&$&&wt.drawBuffers(R,G),wt.viewport(_),wt.scissor(v),wt.setScissorTest(I),at){const Mt=It.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,Mt.__webglTexture,q)}else if(ft){const Mt=It.get(R.texture),At=k||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mt.__webglTexture,q||0,At)}A=-1},this.readRenderTargetPixels=function(R,k,q,$,G,at,ft){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=It.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ft!==void 0&&(vt=vt[ft]),vt){wt.bindFramebuffer(D.FRAMEBUFFER,vt);try{const Mt=R.texture,At=Mt.format,Rt=Mt.type;if(!Gt.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-$&&q>=0&&q<=R.height-G&&D.readPixels(k,q,$,G,Nt.convert(At),Nt.convert(Rt),at)}finally{const Mt=M!==null?It.get(M).__webglFramebuffer:null;wt.bindFramebuffer(D.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(R,k,q,$,G,at,ft){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=It.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ft!==void 0&&(vt=vt[ft]),vt){const Mt=R.texture,At=Mt.format,Rt=Mt.type;if(!Gt.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=R.width-$&&q>=0&&q<=R.height-G){wt.bindFramebuffer(D.FRAMEBUFFER,vt);const yt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,yt),D.bufferData(D.PIXEL_PACK_BUFFER,at.byteLength,D.STREAM_READ),D.readPixels(k,q,$,G,Nt.convert(At),Nt.convert(Rt),0);const te=M!==null?It.get(M).__webglFramebuffer:null;wt.bindFramebuffer(D.FRAMEBUFFER,te);const le=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await mm(D,le,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,yt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,at),D.deleteBuffer(yt),D.deleteSync(le),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,k=null,q=0){R.isTexture!==!0&&(So("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,R=arguments[1]);const $=Math.pow(2,-q),G=Math.floor(R.image.width*$),at=Math.floor(R.image.height*$),ft=k!==null?k.x:0,vt=k!==null?k.y:0;C.setTexture2D(R,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,ft,vt,G,at),wt.unbindTexture()},this.copyTextureToTexture=function(R,k,q=null,$=null,G=0){R.isTexture!==!0&&(So("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,R=arguments[1],k=arguments[2],G=arguments[3]||0,q=null);let at,ft,vt,Mt,At,Rt;q!==null?(at=q.max.x-q.min.x,ft=q.max.y-q.min.y,vt=q.min.x,Mt=q.min.y):(at=R.image.width,ft=R.image.height,vt=0,Mt=0),$!==null?(At=$.x,Rt=$.y):(At=0,Rt=0);const yt=Nt.convert(k.format),te=Nt.convert(k.type);C.setTexture2D(k,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const le=D.getParameter(D.UNPACK_ROW_LENGTH),pe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ke=D.getParameter(D.UNPACK_SKIP_PIXELS),Zt=D.getParameter(D.UNPACK_SKIP_ROWS),Tt=D.getParameter(D.UNPACK_SKIP_IMAGES),Ae=R.isCompressedTexture?R.mipmaps[G]:R.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Ae.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ae.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,vt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Mt),R.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,G,At,Rt,at,ft,yt,te,Ae.data):R.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,G,At,Rt,Ae.width,Ae.height,yt,Ae.data):D.texSubImage2D(D.TEXTURE_2D,G,At,Rt,at,ft,yt,te,Ae),D.pixelStorei(D.UNPACK_ROW_LENGTH,le),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ke),D.pixelStorei(D.UNPACK_SKIP_ROWS,Zt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Tt),G===0&&k.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),wt.unbindTexture()},this.copyTextureToTexture3D=function(R,k,q=null,$=null,G=0){R.isTexture!==!0&&(So("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,$=arguments[1]||null,R=arguments[2],k=arguments[3],G=arguments[4]||0);let at,ft,vt,Mt,At,Rt,yt,te,le;const pe=R.isCompressedTexture?R.mipmaps[G]:R.image;q!==null?(at=q.max.x-q.min.x,ft=q.max.y-q.min.y,vt=q.max.z-q.min.z,Mt=q.min.x,At=q.min.y,Rt=q.min.z):(at=pe.width,ft=pe.height,vt=pe.depth,Mt=0,At=0,Rt=0),$!==null?(yt=$.x,te=$.y,le=$.z):(yt=0,te=0,le=0);const Ke=Nt.convert(k.format),Zt=Nt.convert(k.type);let Tt;if(k.isData3DTexture)C.setTexture3D(k,0),Tt=D.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)C.setTexture2DArray(k,0),Tt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const Ae=D.getParameter(D.UNPACK_ROW_LENGTH),Jt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),pn=D.getParameter(D.UNPACK_SKIP_PIXELS),Qi=D.getParameter(D.UNPACK_SKIP_ROWS),je=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,pe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Mt),D.pixelStorei(D.UNPACK_SKIP_ROWS,At),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Rt),R.isDataTexture||R.isData3DTexture?D.texSubImage3D(Tt,G,yt,te,le,at,ft,vt,Ke,Zt,pe.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(Tt,G,yt,te,le,at,ft,vt,Ke,pe.data):D.texSubImage3D(Tt,G,yt,te,le,at,ft,vt,Ke,Zt,pe),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ae),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Jt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,pn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Qi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,je),G===0&&k.generateMipmaps&&D.generateMipmap(Tt),wt.unbindTexture()},this.initRenderTarget=function(R){It.get(R).__webglFramebuffer===void 0&&C.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?C.setTextureCube(R,0):R.isData3DTexture?C.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?C.setTexture2DArray(R,0):C.setTexture2D(R,0),wt.unbindTexture()},this.resetState=function(){y=0,w=0,M=null,wt.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Sl?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===Ko?"display-p3":"srgb"}}class bl{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new tt(t),this.near=e,this.far=i}clone(){return new bl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Rv extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Cv extends De{constructor(t=null,e=1,i=1,r,s,o,a,c,l=qe,u=qe,h,d){super(null,o,a,c,l,u,r,s,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dn extends An{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const pr=new ee,Zu=new ee,io=[],Ju=new Zi,Pv=new ee,Zr=new Vt,Jr=new zr;class Jo extends Vt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Dn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Pv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Zi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,pr),Ju.copy(t.boundingBox).applyMatrix4(pr),this.boundingBox.union(Ju)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,pr),Jr.copy(t.boundingSphere).applyMatrix4(pr),this.boundingSphere.union(Jr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(t,e){const i=this.matrixWorld,r=this.count;if(Zr.geometry=this.geometry,Zr.material=this.material,Zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jr.copy(this.boundingSphere),Jr.applyMatrix4(i),t.ray.intersectsSphere(Jr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,pr),Zu.multiplyMatrices(i,pr),Zr.matrixWorld=Zu,Zr.raycast(t,io);for(let o=0,a=io.length;o<a;o++){const c=io[o];c.instanceId=s,c.object=this,e.push(c)}io.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Dn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Cv(new Float32Array(r*this.count),r,this.count,_l,Bn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*t;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Tl extends sn{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],f=[];let g=0;const x=[],p=i/2;let m=0;b(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new _e(h,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(f,2));function b(){const S=new V,y=new V;let w=0;const M=(e-t)/i;for(let A=0;A<=s;A++){const L=[],_=A/s,v=_*(e-t)+t;for(let I=0;I<=r;I++){const U=I/r,N=U*c+a,W=Math.sin(N),F=Math.cos(N);y.x=v*W,y.y=-_*i+p,y.z=v*F,h.push(y.x,y.y,y.z),S.set(W,M,F).normalize(),d.push(S.x,S.y,S.z),f.push(U,1-_),L.push(g++)}x.push(L)}for(let A=0;A<r;A++)for(let L=0;L<s;L++){const _=x[L][A],v=x[L+1][A],I=x[L+1][A+1],U=x[L][A+1];t>0&&(u.push(_,v,U),w+=3),e>0&&(u.push(v,I,U),w+=3)}l.addGroup(m,w,0),m+=w}function E(S){const y=g,w=new jt,M=new V;let A=0;const L=S===!0?t:e,_=S===!0?1:-1;for(let I=1;I<=r;I++)h.push(0,p*_,0),d.push(0,_,0),f.push(.5,.5),g++;const v=g;for(let I=0;I<=r;I++){const N=I/r*c+a,W=Math.cos(N),F=Math.sin(N);M.x=L*F,M.y=p*_,M.z=L*W,h.push(M.x,M.y,M.z),d.push(0,_,0),w.x=W*.5+.5,w.y=F*.5*_+.5,f.push(w.x,w.y),g++}for(let I=0;I<r;I++){const U=y+I,N=v+I;S===!0?u.push(N,N+1,U):u.push(N+1,N,U),A+=3}l.addGroup(m,A,S===!0?1:2),m+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qo extends sn{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new V,d=new V,f=[],g=[],x=[],p=[];for(let m=0;m<=i;m++){const b=[],E=m/i;let S=0;m===0&&o===0?S=.5/e:m===i&&c===Math.PI&&(S=-.5/e);for(let y=0;y<=e;y++){const w=y/e;h.x=-t*Math.cos(r+w*s)*Math.sin(o+E*a),h.y=t*Math.cos(o+E*a),h.z=t*Math.sin(r+w*s)*Math.sin(o+E*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),p.push(w+S,1-E),b.push(l++)}u.push(b)}for(let m=0;m<i;m++)for(let b=0;b<e;b++){const E=u[m][b+1],S=u[m][b],y=u[m+1][b],w=u[m+1][b+1];(m!==0||o>0)&&f.push(E,S,w),(m!==i-1||c<Math.PI)&&f.push(S,y,w)}this.setIndex(f),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(x,3)),this.setAttribute("uv",new _e(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class rn extends Es{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bd,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Qu={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Lv{constructor(t,e,i){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const Iv=new Lv;class wl{constructor(t){this.manager=t!==void 0?t:Iv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}wl.DEFAULT_MATERIAL_NAME="__DEFAULT";class Dv extends wl{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Qu.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=ps("img");function c(){u(),Qu.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(h){u(),r&&r(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Uv extends wl{constructor(t){super(t)}load(t,e,i,r){const s=new De,o=new Dv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},i,r),s}}class sf extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Nv extends sf{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ka=new ee,th=new V,eh=new V;class Fv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new jt(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new El,this._frameExtents=new jt(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;th.setFromMatrixPosition(t.matrixWorld),e.position.copy(th),eh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(eh),e.updateMatrixWorld(),ka.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ka),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ka)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ov extends Fv{constructor(){super(new Zd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bv extends sf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new Ov}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class zv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=nh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function nh(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fl);const kv=1.5;function Gv(n){const t=new Av({antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio,kv)),t.setSize(window.innerWidth,window.innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=bd,t.toneMapping=wd,t.toneMappingExposure=1.05,t.outputColorSpace=ln,n.appendChild(t.domElement);let e=null;return t.setResizeCallback=i=>{e=i},window.addEventListener("resize",()=>{t.setSize(window.innerWidth,window.innerHeight),e?.(window.innerWidth/window.innerHeight)}),t}function Hv(){const n=new un(50,window.innerWidth/window.innerHeight,.1,500);return n.position.set(0,20,36),n}function ro(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function ae(n,t){const e=Math.floor(n),i=Math.floor(t),r=n-e,s=t-i,o=r*r*(3-2*r),a=s*s*(3-2*s),c=ro(e,i),l=ro(e+1,i),u=ro(e,i+1),h=ro(e+1,i+1);return c*(1-o)*(1-a)+l*o*(1-a)+u*(1-o)*a+h*o*a}function Ts(n){let t=n>>>0;return function(){t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function nt(n,t,e){return n<t?t:n>e?e:n}function Ht(n,t,e){return n+(t-n)*e}function mi(n,t,e,i){return Ht(n,t,1-Math.exp(-e*i))}function ie(n){const t=Math.hypot(n[0],n[1],n[2])||1;return[n[0]/t,n[1]/t,n[2]/t]}function $e(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function Ct(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function oe(n,t){return[n[0]+t[0],n[1]+t[1],n[2]+t[2]]}function Qn(n,t){return[n[0]-t[0],n[1]-t[1],n[2]-t[2]]}function Vi(n,t,e,i){return{x:n,y:t,z:e,p:i}}function of(n,t){const[e,i,r]=t;return[n.x[0]*e+n.y[0]*i+n.z[0]*r+n.p[0],n.x[1]*e+n.y[1]*i+n.z[1]*r+n.p[1],n.x[2]*e+n.y[2]*i+n.z[2]*r+n.p[2]]}function Ye(n,t,e){const i=Qn(t,n),r=Math.hypot(i[0],i[1],i[2])||1e-4,s=[i[0]/r,i[1]/r,i[2]/r],o=Math.abs(s[1])<.97?[0,1,0]:[1,0,0],a=ie($e(o,s)),c=$e(a,s);return Vi(Ct(a,e),Ct(s,r),Ct(c,e),n)}class we{constructor(){this.positions=[],this.colors=[],this.indices=[]}addVertex(t,e,i,r){return this.positions.push(t,e,i),this.colors.push(r[0],r[1],r[2]),this.positions.length/3-1}addTri(t,e,i){this.indices.push(t,e,i)}addQuad(t,e,i,r){this.addTri(t,e,i),this.addTri(t,i,r)}bake(t,e,i){const r=this.positions.length/3;for(let s=0;s<t.p.length;s+=3){const o=of(e,[t.p[s],t.p[s+1],t.p[s+2]]),a=i(o[0],o[1],o[2]);this.positions.push(o[0],o[1],o[2]),this.colors.push(a[0],a[1],a[2])}for(let s=0;s<t.i.length;s++)this.indices.push(r+t.i[s])}toBufferGeometry(){const t=new sn;return t.setAttribute("position",new _e(this.positions,3)),t.setAttribute("color",new _e(this.colors,3)),t.setIndex(this.indices),t.computeVertexNormals(),t}}function Nr(n,t){const e=[],i=[],r=[];for(let s=0;s<=t;s++){const o=Math.PI*s/t,a=Math.sin(o),c=Math.cos(o);for(let l=0;l<=n;l++){const u=2*Math.PI*l/n,h=a*Math.cos(u),d=c,f=a*Math.sin(u);e.push(h,d,f),i.push(h,d,f)}}for(let s=0;s<t;s++)for(let o=0;o<n;o++){const a=s*(n+1)+o,c=a+n+1;r.push(a,a+1,c,a+1,c+1,c)}return{p:e,n:i,i:r}}function ta(n){const t=[],e=[],i=[];for(let s=0;s<=n;s++){const o=2*Math.PI*s/n,a=Math.cos(o),c=Math.sin(o);t.push(a,0,c),e.push(a,0,c),t.push(a,1,c),e.push(a,0,c)}for(let s=0;s<n;s++){const o=s*2;i.push(o,o+1,o+2,o+1,o+3,o+2)}const r=t.length/3;t.push(0,0,0),e.push(0,-1,0),t.push(0,1,0),e.push(0,1,0);for(let s=0;s<n;s++){const o=2*Math.PI*s/n,a=2*Math.PI*(s+1)/n,c=t.length/3;t.push(Math.cos(o),0,Math.sin(o)),e.push(0,-1,0),t.push(Math.cos(a),0,Math.sin(a)),e.push(0,-1,0),i.push(r,c+1,c);const l=t.length/3;t.push(Math.cos(o),1,Math.sin(o)),e.push(0,1,0),t.push(Math.cos(a),1,Math.sin(a)),e.push(0,1,0),i.push(r+1,l,l+1)}return{p:t,n:e,i}}const Vv=""+new URL("bark_albedo-DReMtPgm.png",import.meta.url).href,Wv=""+new URL("tunnel-dirt_albedo-DgMZYBLi.png",import.meta.url).href,Xv=""+new URL("lawn-soil_albedo-mTvxXfeR.png",import.meta.url).href,Yv=""+new URL("stone_albedo-CltKTJgX.png",import.meta.url).href,qv=""+new URL("mushroom-cap_albedo-CRHQ2riL.png",import.meta.url).href,yo=new Float32Array(256);for(let n=0;n<256;n++){const t=n/255;yo[n]=t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function $v(n,t){const e=document.createElement("canvas");e.width=n.width,e.height=n.height;const i=e.getContext("2d",{willReadFrequently:!0});i.drawImage(n,0,0);const r=i.getImageData(0,0,e.width,e.height).data;let s=0,o=0,a=0;const c=e.width*e.height;for(let l=0;l<r.length;l+=4)s+=yo[r[l]],o+=yo[r[l+1]],a+=yo[r[l+2]];t.set(Math.max(s/c,.001),Math.max(o/c,.001),Math.max(a/c,.001))}const Kv=new Uv;function ws(n,t){const e=new V(.5,.5,.5),i=Kv.load(n,r=>{try{$v(r.image,e)}catch(s){console.warn("albedo mean unavailable",s)}});return i.colorSpace=ln,i.wrapS=i.wrapT=Oo,i.repeat.set(1/t,1/t),i.anisotropy=4,i.userData.meanLinear=e,i}const jv=5,Zv=16,Jv=45,Qv=12,tM=2.5;let eM=null,nM=null,iM=null,rM=null,sM=null;function Al(){return eM||(eM=ws(Wv,jv))}function oM(){return nM||(nM=ws(Vv,Zv))}function aM(){return iM||(iM=ws(Xv,Jv))}function cM(){return rM||(rM=ws(Yv,Qv))}function af(){return sM||(sM=ws(qv,tM))}const lM=`
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
`;function cf(n,t){Object.assign(n.uniforms,t),n.vertexShader=n.vertexShader.replace("#include <common>",`varying vec3 vTexWorld;
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
#include <common>`).replace("#include <map_fragment>",hM)}function lf(n,t){return{uTexMid:{value:n.userData.meanLinear},uTexRepeat:{value:n.repeat},uTexStrength:{value:t}}}function Gr({map:n,strength:t=1,...e}){const i=new rn({vertexColors:!0,roughness:.95,metalness:0,map:n,...e}),r=lf(n,t);return i.userData.texUniforms=r,i.onBeforeCompile=s=>cf(s,r),i.userData.shaderTag="triplanar-albedo",i.customProgramCacheKey=()=>"triplanar-albedo",i}function uf({map:n,strength:t=1,emissive:e=1.6,...i}){const r=new rn({vertexColors:!0,roughness:.6,metalness:0,map:n,...i}),s=lf(n,t);return r.userData.texUniforms=s,r.onBeforeCompile=o=>{cf(o,s),o.fragmentShader=o.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
       totalEmissiveRadiance += vColor * gTriTex * ${e.toFixed(2)};`)},r.userData.shaderTag="triplanar-emissive",r.customProgramCacheKey=()=>"triplanar-emissive",r}const bo=2.2,ge=-166,Ue=0,Tr=7.2*bo,Rl=-132,Ho=32,qc=[-9,-140],ne=[13,0,-124],$c=15,dM=2.6;function ze(n){const t=(n-Rl)/Ho;return t>-1&&t<1?Tr+(Ho-Tr)*Math.pow(Math.sqrt(1-t*t),.72):Tr}function se(n,t){let e=.22*ae(n*.11+11,t*.11+5);const i=Math.hypot(n-ne[0],t-ne[2]);if(i<$c){const r=1-i/$c;e+=dM*r*r*(3-2*r)}return e}const Kc=[],Mr=[],hf=[];function Cl(n,t){for(let e=0;e<Kc.length;e++){const i=Kc[e],s=Math.atan2(Math.sin(n-i.th),Math.cos(n-i.th))/i.rTh,o=(t-i.z)/i.rZ;if(s*s+o*o<1)return!0}return!1}function fM(n,t){return Cl(t,n)?1/0:ze(n)}function Pl(){const n={};for(const t of Mr)n[t.name]=t;return n}function ea(n,t){for(let s=0;s<Mr.length;s++){const o=Mr[s],a=n-o.origin[0],c=t-o.origin[2],l=a*o.dir[0]+c*o.dir[2];if(l<=-.5||l>=o.uMax+1)continue;const u=a*o.side[0]+c*o.side[2],h=Math.max(o.profR(nt(l,0,o.uMax))*.82-1.2,2.2);if(Math.abs(u)>=h+3)continue;const d=nt(l,-.5,o.uMax-1.2),f=nt(u,-h,h);return[o.origin[0]+o.dir[0]*d+o.side[0]*f,o.origin[2]+o.dir[2]*d+o.side[2]*f]}const e=Math.max(ze(t)*.82-1.6,3);let i=e,r=e;for(let s=0;s<Mr.length;s++){const o=Mr[s],a=nt(1-Math.abs(t-o.origin[2])/o.doorFalloff,0,1);if(a<=0)continue;const c=Ht(e,Math.abs(o.origin[0])+1.5,a);o.dir[0]>0?c>i&&(i=c):c>r&&(r=c)}return[nt(n,-r,i),Math.max(t,ge+5)]}const Ll=new tt("#6d5130"),As=new tt("#5a4226"),Yi=new tt("#332412"),pM=new tt("#4c5f2f"),mM=new tt(pM).lerp(Yi,.62).multiplyScalar(.58);function ti(n,t,e){return new tt(n).lerp(t,nt(e,0,1))}function To(n,t,e,i){return ae(Math.cos(n)*e+t*i+37,Math.sin(n)*e+t*i*.7+91)}function Il(n){return .86*Math.pow(Tr/n,.35)}function os(n){const t=ze(n);return 1.2+t*Il(t)*.62}function ki(n,t,e){const i=ze(t),r=Il(i),s=.84+.2*To(n,t,1.6,.1)+.1*To(n,t,4.1,.29)+.05*To(n,t,9.3,.62),o=i*s*(1-(e||0)),a=Math.cos(n)*o,c=Math.sin(n)*o*r+os(t),l=se(a,t);return[a,Math.max(c,l),t,s]}function gM(n,t){const e=ti(Yi,As,n*.8+.12);return ti(e,Ll,t)}function _M(n){const t=ti(Yi,As,n*.8+.12);return ti(t,Ll,.28+n*.18)}function xM(n){const t=ti(Yi,As,n*.75+.15);return ti(t,Ll,.55)}function vM(n){const t=ti(Yi,As,n*.6+.08);return ti(t,mM,.3+n*.3)}function Ga(n,t,e,i,r,s,o,a,c,l,u,h){const d=ki(t,e,0),f=[d[0],se(d[0],d[2]),d[2]],g=ie([Math.cos(t),0,1e-4]),x=ie($e([0,1,0],g)),p=r+o,m=r+o*2;function b(P){const z=(P-p)/o;return z>-1&&z<1?i+(s-i)*Math.pow(Math.sqrt(1-z*z),.72):i}function E(P){return .86*Math.pow(i/P,.35)}function S(P){const z=b(P);return 1.1+z*E(z)*.6}function y(P,z,H,j){return ae(Math.cos(P)*H+z*j+c+37,Math.sin(P)*H+z*j*.7+c+91)}function w(P,z,H){const j=b(z),rt=E(j),ht=.84+.2*y(P,z,1.6,.1)+.1*y(P,z,4.1,.29)+.05*y(P,z,9.3,.62),Y=j*ht*(1-(H||0)),Z=Math.cos(P)*Y,ct=Math.sin(P)*Y*rt+S(z),st=f[0]+g[0]*z+x[0]*Z,bt=f[2]+g[2]*z+x[2]*Z,St=f[1]+ct,Dt=se(st,bt);return[st,Math.max(St,Dt),bt,ht]}{const P=ze(e),z=Il(P),H=Math.asin(nt((f[1]+S(0)-os(e))/(P*z),-.92,.92)),j=t+(Math.cos(t)>=0?H:-H);Kc.push({th:j,z:e,rTh:Math.max(.16,i*1.8/ze(e)),rZ:i*1.7})}if(h){const P=f[0]+g[0]*1.2,z=f[2]+g[2]*1.2;hf.push({p:[P,se(P,z)+2.1,z],c:h,name:n})}const M=new we,A=1.5,L=[];for(let P=0;P<=m+1e-4;P+=A){const z=[];for(let H=0;H<a;H++){const j=2*Math.PI*H/a,rt=w(j,P,0),ht=nt((rt[3]-.84)/.34+.45,0,1);z.push(M.addVertex(rt[0],rt[1],rt[2],u(ht,rt[0],rt[1],rt[2]).multiplyScalar(l).toArray()))}L.push(z)}for(let P=0;P<L.length-1;P++)for(let z=0;z<a;z++){const H=(z+1)%a;M.addQuad(L[P][z],L[P][H],L[P+1][H],L[P+1][z])}const _=f[0]+g[0]*m,v=f[2]+g[2]*m,I=f[1]+S(m)*.6,U=M.addVertex(_,I,v,u(.2,_,I,v).multiplyScalar(l).toArray()),N=L[L.length-1];for(let P=0;P<a;P++)M.addTri(U,N[P],N[(P+1)%a]);const W={name:n,origin:f,dir:g,side:x,uMax:m,uEnd:p,profR:b,pointAt:w,doorFalloff:i*2.2};Mr.push(W);const F=f[0]+g[0]*p,B=f[2]+g[2]*p;return W.center=[F,se(F,B),B],{geometry:M.toBufferGeometry(),branch:W}}function MM(){const n=new Te;n.name="underground";const t=Ga("granary",Math.PI,-70,3.3*bo,9,13*1.5,10,30,4001,1,u=>_M(u),[.55,.4,.2]),e=Ga("brood",0,-120,4.2*bo,8,17*1.5,13,34,5117,1,u=>xM(u),[.68,.5,.25]),i=Ga("midden",0,-40,2.9*bo,7,10*1.5,8,26,6229,.46,u=>vM(u),[.3,.44,.28]);n.add(new Vt(t.geometry,so())),n.add(new Vt(e.geometry,so())),n.add(new Vt(i.geometry,so()));const r=new we,s=44,o=1.7,a=[];for(let u=ge;u<=3.0001;u+=o){const h=[];for(let d=0;d<s;d++){const f=2*Math.PI*d/s,g=ki(f,u,0),x=u>-14?1+Math.pow((u+14)/17,2)*.9:1;h.push([g[0]*x,Math.max(g[1]*(x*.5+.5),se(g[0]*x,u)),u,g[3]])}a.push(h)}for(let u=0;u<a.length;u++){const h=[];for(let d=0;d<s;d++){const f=a[u][d],g=nt(1-Math.abs(f[2]-Rl)/(Ho*1.6),0,1),x=nt((f[3]-.84)/.34+.45,0,1),p=ae(f[0]*.13+3,f[2]*.13+8),m=gM(x,g*.45+p*.2);h.push(r.addVertex(f[0],f[1],f[2],m.toArray()))}a[u].idx=h}for(let u=0;u<a.length-1;u++)for(let h=0;h<s;h++){const d=(h+1)%s;Cl(2*Math.PI*h/s,a[u][h][2])||r.addQuad(a[u].idx[h],a[u].idx[d],a[u+1].idx[d],a[u+1].idx[h])}{let u=a[0].idx;const h=4;for(let f=1;f<=h;f++){const g=Math.cos(f/h*Math.PI*.5),x=ge-Math.sin(f/h*Math.PI*.5)*9,p=[];for(let m=0;m<s;m++){const b=2*Math.PI*m/s,E=a[0][m],S=.86+.28*To(b,x*1.7,2.3,.2),y=E[0]*g*S,w=os(ge)+(E[1]-os(ge))*g*S,M=ti(Yi,As,.15+S*.4).multiplyScalar(.35+.3*S);p.push(r.addVertex(y,Math.max(w,se(y,x)),x,M.toArray()))}for(let m=0;m<s;m++){const b=(m+1)%s;r.addQuad(u[m],u[b],p[b],p[m])}u=p}const d=r.addVertex(0,os(ge)*.6,ge-10,Yi.clone().multiplyScalar(.3).toArray());for(let f=0;f<s;f++)r.addTri(d,u[f],u[(f+1)%s])}const c=new Vt(r.toBufferGeometry(),so());c.name="tunnel",n.add(c);const l=hf.slice();return l.push({p:[0,5,3],c:[1.15,1.2,1.35],name:"mouth"}),{group:n,doorLights:l,rooms:{granary:t.branch,brood:e.branch,midden:i.branch}}}let Ha=null;function so(){return Ha||(Ha=Gr({map:Al(),strength:.62,side:de})),Ha}const be={x0:-208,x1:190,z0:0,z1:250},ms={x0:-300,x1:252,z0:0,z1:322},Kn=-4.5,jn=n=>{const t=nt(n,0,1);return t*t*(3-2*t)},vn={edgeX:-196,bankTop:2,bankRun:15,depth:5,bedRun:30,farBankAt:68,farBankRun:46,farBankTop:24,blendRun:36};function Rs(n){return vn.edgeX+2*Math.sin(n*.021)+1*Math.sin(n*.047+1.3)}function ei(n,t){return n-Rs(t)}function SM(n){if(n<=0)return Kn+(vn.bankTop-Kn)*jn(-n/vn.bankRun);let t=Kn-vn.depth*jn(n/vn.bedRun);return n>vn.farBankAt&&(t+=vn.farBankTop*jn((n-vn.farBankAt)/vn.farBankRun)),t}const ih=[{x:0,z:20,r:64,amp:-3.5},{x:62,z:78,r:62,amp:16},{x:96,z:44,r:40,amp:9},{x:88,z:168,r:78,amp:-14},{x:88,z:168,r:30,amp:4},{x:-85,z:95,r:46,amp:6},{x:-85,z:95,r:26,amp:1.5},{x:-150,z:150,r:66,amp:13},{x:-132,z:44,r:50,amp:8},{x:24,z:128,r:44,amp:-8},{x:-40,z:300,r:150,amp:34},{x:130,z:296,r:140,amp:30},{x:250,z:120,r:130,amp:30},{x:218,z:232,r:100,amp:22}];function rh(n,t){let e=(ae(n*.012,t*.012)-.5)*4.2+(ae(n*.052,t*.052)-.5)*1.3;for(let i=0;i<ih.length;i++){const r=ih[i],s=Math.hypot(n-r.x,t-r.z);s>=r.r||(e+=r.amp*jn(1-s/r.r))}return e}function Ut(n,t){if(t<Ue)return se(n,t);const e=n-Rs(t),i=1-jn(e/vn.blendRun),r=i>0?Ht(rh(n,t),SM(-e),i):rh(n,t),s=(1-jn(t/26))*nt(1-Math.abs(n)/40,0,1);return s>0?Ht(r,se(n,0),s):r}function Cs(n,t){return ie([Ut(n-1.4,t)-Ut(n+1.4,t),2*1.4,Ut(n,t-1.4)-Ut(n,t+1.4)])}function Hr(n,t){const i=(Ut(n+1.5,t)-Ut(n-1.5,t))/3,r=(Ut(n,t+1.5)-Ut(n,t-1.5))/(2*1.5);return Math.hypot(i,r)}function Si(n,t){return t<Ue?0:Math.max(0,Kn-Ut(n,t))}const df=.62;function Dl(n,t){const e=ae(n*.006,t*.006),i=nt(ae(n*.018,t*.018)*2.3-.55+(e-.5)*.6,0,1)*(.55+.45*ae(n*.07,t*.07)),r=Si(n,t),s=ei(n,t),o=Hr(n,t);let a="soil";return r>0?a="water":s<14?a="sand":o>df?a="rock":i>.5&&(a="moss"),{kind:a,moss:i,slope:o,depth:r,toWater:s}}function EM(n,t){const e=Dl(n,t);return{y:Ut(n,t),normal:Cs(n,t),slope:e.slope,soil:e.kind,moss:e.moss,waterDepth:e.depth,distToWater:e.toWater,diggable:e.depth===0&&e.slope<=df&&e.toWater>10}}function jc(n,t){const e=Rs(t)+1;return[nt(Math.max(n,e),be.x0,be.x1),nt(t,be.z0,be.z1)]}const yM=new tt("#86673B"),bM=new tt("#5A4529"),TM=new tt("#5F8034"),wM=new tt("#9DBE58"),AM=new tt("#A79463"),RM=new tt("#4A5540"),CM=new tt("#7C7566");function En(n,t,e){return new tt(n).lerp(t,nt(e,0,1))}const oo=6;function PM(){const{x0:n,x1:t,z0:e,z1:i}=ms,r=Math.floor((t-n)/oo)+1,s=Math.floor((i-e)/oo)+1,o=new we;for(let c=0;c<r;c++)for(let l=0;l<s;l++){const u=n+c*oo,h=e+l*oo,d=Ut(u,h),f=ae(u*.006,h*.006),g=nt(ae(u*.018,h*.018)*2.3-.55+(f-.5)*.6,0,1)*(.55+.45*ae(u*.07,h*.07));let x=En(En(yM,bM,ae(u*.09,h*.09)),En(TM,wM,ae(u*.05,h*.05)),g);const p=ei(u,h);p<30&&(x=En(x,AM,jn((30-p)/26)),d<Kn+.6&&(x=En(x,RM,jn((Kn+.6-d)/3.5))));const m=Hr(u,h);m>.45&&(x=En(x,CM,jn((m-.45)/.5)*.75)),o.addVertex(u,d,h,x.toArray())}for(let c=0;c<r-1;c++)for(let l=0;l<s-1;l++){const u=c*s+l,h=(c+1)*s+l,d=(c+1)*s+l+1,f=c*s+l+1;o.addQuad(u,h,d,f)}const a=new Vt(o.toBufferGeometry(),Gr({map:aM(),strength:.8,side:de}));return a.name="lawn",a.receiveShadow=!0,a}const LM=new tt("#9CC6E4"),IM=`
uniform float uWaveTime;
vec2 waterWaveGrad(vec3 p, out float h) {
  float a = p.x * 0.085 + uWaveTime * 1.05;
  float b = p.z * 0.115 - uWaveTime * 0.77 + p.x * 0.04;
  float c = p.z * 0.031 + uWaveTime * 0.31;
  h = sin(a) * 0.24 + sin(b) * 0.17 + sin(c) * 0.30;
  return vec2(cos(a) * 0.24 * 0.085 + cos(b) * 0.17 * 0.04,
              cos(b) * 0.17 * 0.115 + cos(c) * 0.30 * 0.031);
}
`;function DM(){const{x0:n,z0:t,z1:e}=ms,i=56,r=14,s=new we,o=new tt("#3E6B7A"),a=new tt("#22414F");for(let h=0;h<=i;h++){const d=t+(e-t)*(h/i),f=Rs(d)+1.2;for(let g=0;g<=r;g++){const x=Ht(n,f,g/r),p=nt((Kn-Ut(x,d))/6,0,1);s.addVertex(x,Kn,d,En(o,a,p).toArray())}}for(let h=0;h<i;h++)for(let d=0;d<r;d++){const f=h*(r+1)+d;s.addQuad(f+r+1,f+r+2,f+1,f)}const c=new rn({vertexColors:!0,roughness:.16,metalness:0,transparent:!0,opacity:.86,side:de}),l={uWaveTime:{value:0},uSkyCol:{value:LM}};c.userData.waterUniforms=l,c.userData.shaderTag="water-ripple",c.onBeforeCompile=h=>{Object.assign(h.uniforms,l),h.vertexShader=h.vertexShader.replace("#include <common>",IM+`
#include <common>`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        float wh; vec2 wg = waterWaveGrad(position, wh);
        objectNormal = normalize(vec3(-wg.x, 1.0, -wg.y));`).replace("#include <begin_vertex>",`#include <begin_vertex>
        transformed.y += wh;`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`uniform vec3 uSkyCol;
#include <common>`).replace("#include <tonemapping_fragment>",`
        {
          float fres = pow(1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0), 3.0);
          gl_FragColor.rgb = mix(gl_FragColor.rgb, uSkyCol, 0.13 + 0.72 * fres);
        }
        #include <tonemapping_fragment>`)},c.customProgramCacheKey=()=>"water-ripple";const u=new Vt(s.toBufferGeometry(),c);return u.name="water",u.receiveShadow=!1,{mesh:u,update(h){l.uWaveTime.value=h}}}const UM=[{r:442,segs:96,base:-120,peak:165,seed:3.1,rough:.55,haze:.72,tint:"#8FA6C4"},{r:384,segs:96,base:-120,peak:118,seed:11.7,rough:.75,haze:.5,tint:"#6E86A6"}];function sh(n,t,e){const i=ae(Math.cos(n)*2.1+t,Math.sin(n)*2.1+t),r=ae(Math.cos(n)*5.3+t*2,Math.sin(n)*5.3+t*2),s=ae(Math.cos(n)*11+t*3,Math.sin(n)*11+t*3);return nt(.3+(i-.5)*1.5+(r-.5)*e+(s-.5)*e*.45,.05,1)}function NM(n="#8B8399",t="#AFC8D8"){const e=new tt(n),i=new tt(t),r=new Te;r.name="horizon";const s=[];for(const a of UM){const c=new we,l=[],u=new tt(a.tint),h=[],d=[],f=[];for(let x=0;x<=a.segs;x++){const p=x/a.segs*Math.PI*2,m=sh(p,a.seed,a.rough),b=a.base+(a.peak-a.base)*m,E=Math.cos(p)*a.r,S=Math.sin(p)*a.r,y=sh(p-.04,a.seed,a.rough),w=nt(.5+(m-y)*6,0,1),M=En(u.clone().multiplyScalar(.72),u.clone().multiplyScalar(1.16),w),A=v=>{const I=En(M,v,a.haze*.75),U=En(M.clone().multiplyScalar(.85),v,Math.min(1,a.haze+.22));return[I,En(I,U,.6),U]},L=A(e),_=A(i);h.push(c.addVertex(E,b,S,L[0].toArray())),d.push(c.addVertex(E,Ht(a.base,b,.45),S,L[1].toArray())),f.push(c.addVertex(E,a.base,S,L[2].toArray()));for(const v of _)l.push(v.r,v.g,v.b)}for(let x=0;x<a.segs;x++)c.addQuad(h[x],h[x+1],d[x+1],d[x]),c.addQuad(d[x],d[x+1],f[x+1],f[x]);const g=new Vt(c.toBufferGeometry(),new ys({vertexColors:!0,fog:!1,side:de,depthTest:!1,depthWrite:!1}));g.renderOrder=-1e3,g.frustumCulled=!1,r.add(g),s.push({mesh:g,base:g.geometry.attributes.color.array.slice(),alt:new Float32Array(l)})}let o=-1;return{group:r,update(a,c=0){if(r.position.set(a.position.x,0,a.position.z),!(Math.abs(c-o)<.002)){o=c;for(const l of s){const u=l.mesh.geometry.attributes.color;for(let h=0;h<u.array.length;h++)u.array[h]=l.base[h]+(l.alt[h]-l.base[h])*c;u.needsUpdate=!0}}}}}const Vo={position:new V(0,0,0),radius:.9};function ff(n){return n<42?Math.min(Math.max(n/40,.55),1.45):Math.min(Math.max(2.1+(n-42)*.038,2.1),4.4)}function FM(n){return ff(n)*.5}function xi(n,t){const e=Math.cos(n.ang),i=Math.sin(n.ang),r=t*t*n.h*.26;return[n.x+e*r,n.baseY+n.h*t*(1-t*.13),n.z+i*r]}function Wo(n,t){const e=xi(n,t),i=xi(n,Math.min(t+.01,1)),r=ie(Qn(i,e)),s=[-Math.sin(n.ang),0,Math.cos(n.ang)],o=ie($e(r,s));return{pos:e,tangent:r,width:s,normal:o}}const Va=6;function OM(){const n=[],t=[],e=[],i=[];for(let s=0;s<=Va;s++){const o=s/Va;n.push(-.5,o,0,.5,o,0),t.push(o,o),e.push(-1,1)}for(let s=1;s<=Va;s++){const o=(s-1)*2,a=o+1,c=s*2,l=c+1;i.push(o,a,l,o,l,c)}const r=new sn;return r.setAttribute("position",new _e(n,3)),r.setAttribute("aT",new _e(t,1)),r.setAttribute("aSide",new _e(e,1)),r.setIndex(i),r}const BM=new tt("#5A7331"),zM=new tt("#8FB055"),kM=new tt("#C6DC82"),oh=`
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
`;function GM({count:n=1600,seed:t=7}={}){const e=Ts(t),i=OM(),r=new Float32Array(n*3),s=new Float32Array(n),o=new Float32Array(n),a=new Float32Array(n),c=new Float32Array(n*3),l=new Float32Array(n),u=new Float32Array(n),h=[];let d=0,f=0;for(;d<n&&f<n*8;){f++;const A=Ht(ms.x0+8,be.x1-4,e()),L=6+e()*(be.z1-6);if(Si(A,L)>0||Math.abs(A)<16&&L<34&&e()<.82)continue;const v=.72+.28*ae(A*.01,L*.01),I=e()<.22?48+e()*60*v:(14+e()*26)*v,U=e()*Math.PI*2,N=Ut(A,L),W=new tt(zM).lerp(kM,e());r[d*3]=A,r[d*3+1]=N,r[d*3+2]=L,s[d]=I,o[d]=U,a[d]=e()*Math.PI*2,c[d*3]=W.r,c[d*3+1]=W.g,c[d*3+2]=W.b,l[d]=ff(I),u[d]=(e()*2-1)*.85,h.push({x:A,z:L,h:I,baseY:N,w:FM(I),ang:U}),d++}const g=d;i.setAttribute("aBase",new Dn(r.subarray(0,g*3),3)),i.setAttribute("aH",new Dn(s.subarray(0,g),1)),i.setAttribute("aAng",new Dn(o.subarray(0,g),1)),i.setAttribute("aPhase",new Dn(a.subarray(0,g),1)),i.setAttribute("aTip",new Dn(c.subarray(0,g*3),3)),i.setAttribute("aWidth",new Dn(l.subarray(0,g),1)),i.setAttribute("aTwist",new Dn(u.subarray(0,g),1));const x=(ms.x0+be.x1)/2,p=(be.z0+be.z1)/2,m=Math.hypot(be.x1-x,be.z1-p)+120;i.boundingSphere=new zr(new V(x,40,p),m);const b={uTime:{value:0},uWind:{value:.55},uAntPos:{value:new V(0,0,-9999)},uAntRadius:{value:.9},uBaseColor:{value:new tt(BM)},uOccNear:{value:5},uOccFar:{value:16},uTransl:{value:.16}},E=new rn({roughness:.85,metalness:0,side:de});E.extensions={derivatives:!0},E.onBeforeCompile=A=>{Object.assign(A.uniforms,b),A.vertexShader=A.vertexShader.replace("#include <common>",oh+`
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
      `)};const S=new rf({depthPacking:Od,side:de});S.onBeforeCompile=A=>{Object.assign(A.uniforms,b),A.vertexShader=A.vertexShader.replace("#include <common>",oh+`
#include <common>`).replace("#include <begin_vertex>",`
        vec3 gPos, gNrm;
        grassShape(gPos, gNrm);
        vec3 transformed = gPos;
      `)},S.customProgramCacheKey=()=>"grass-depth";const y=new Jo(i,E,g);y.name="grass",y.castShadow=!0,y.receiveShadow=!0,y.customDepthMaterial=S;const w=new ee;for(let A=0;A<g;A++)y.setMatrixAt(A,w);y.instanceMatrix.needsUpdate=!0;function M(A,L){b.uTime.value=L,b.uAntPos.value.copy(Vo.position),b.uAntRadius.value=Vo.radius}return{mesh:y,footprints:h,update:M}}const Yt={x:-85,z:95,h:340,ang:Math.PI/2,w:22};Yt.baseY=Ut(Yt.x,Yt.z);const HM=new tt("#5a4226"),VM=new tt("#332412"),pf=new tt("#4a3418"),Wa=new tt(HM).lerp(pf,.3),Xa=new tt(VM).lerp(pf,.55),ah=new tt("#6C8E3C"),ch=new tt("#AECB6E");function ao(n,t,e){return new tt(n).lerp(t,nt(e,0,1))}const Nn=.8,WM=6.2;function Gi(n){return xi(Yt,n)}function Zc(n){const t=Gi(n),e=Gi(Math.min(n+.01,1)),i=ie(Qn(e,t)),r=Math.abs(i[1])<.97?[0,1,0]:[1,0,0],s=ie($e(r,i));return{p:t,x:s,z:$e(s,i)}}function qi(n){return Ht(Yt.w,WM,Math.pow(nt(n,0,Nn)/Nn,.7))}const Ul=Nn*.55,lh=Math.PI*1.511,XM=98,YM=36,qM=9.6,mf=5,Jc=Zc(Ul),gf=ie(oe(Ct(Jc.x,Math.cos(lh)),Ct(Jc.z,Math.sin(lh)))),$M=oe(Jc.p,Ct(gf,qi(Ul)*.7));function as(n){const t=1-(1-n)*(1-n);return oe($M,oe(Ct(gf,n*XM),[0,t*YM,0]))}function _f(n){return Ht(qM,mf,nt(n,0,1))}function xf(n){const t=as(nt(n-.005,0,1)),e=as(nt(n+.005,0,1)),i=ie(Qn(e,t)),r=ie($e(i,[0,1,0])),s=ie($e(r,i));return{pos:as(n),fwd:i,side:r,up:s}}const Fn={splitT:Ul,point:as,radius:_f,basis:xf,tipPos:as(1),tipRadius:mf};Yt.walkBranch=Fn;function uh(n){const t=new we,e=new we,i=Ts(n?481001:481002),r=n?20:4,s=n?16:6,o=[];for(let g=0;g<=r;g++){const x=g/r*Nn,p=Zc(x),m=qi(x),b=[];for(let E=0;E<s;E++){const S=2*Math.PI*E/s,y=n?.86+.1*ae(Math.cos(S)*2.2+x*13,Math.sin(S)*2.2+x*13+30)+.06*ae(Math.cos(S)*6.4+x*29+8,Math.sin(S)*6.4+x*29+51):1,w=m*y,M=oe(p.p,oe(Ct(p.x,Math.cos(S)*w),Ct(p.z,Math.sin(S)*w))),A=nt((y-.86)/.2+.4,0,1),L=ao(Xa,Wa,A);b.push(t.addVertex(M[0],M[1],M[2],L.toArray()))}o.push(b)}for(let g=0;g<o.length-1;g++)for(let x=0;x<s;x++){const p=(x+1)%s;t.addQuad(o[g][x],o[g][p],o[g+1][p],o[g+1][x])}const a=ta(n?7:5),c=Nr(n?8:6,n?5:4),l=ao(ah,ch,.42);function u(g,x,p){const m=x*(.9+i()*.3),b=x*(.75+i()*.25),E={x:[m,0,0],y:[0,b,0],z:[0,0,m],p:g};e.bake(c,E,()=>(n?ao(ah,ch,p):l).toArray())}const h=n?10:3,d=n?10:5,f=[];for(let g=0;g<=h;g++){const x=g/h,p=xf(x),m=_f(x),b=[];for(let E=0;E<d;E++){const S=2*Math.PI*E/d,y=n?.9+.1*ae(Math.cos(S)*2.4+x*11+100,Math.sin(S)*2.4+x*11+44):1,w=m*y,M=oe(p.pos,oe(Ct(p.side,Math.cos(S)*w),Ct(p.up,Math.sin(S)*w))),A=ao(Xa,Wa,nt((y-.9)/.1,0,1));b.push(t.addVertex(M[0],M[1],M[2],A.toArray()))}f.push(b)}for(let g=0;g<f.length-1;g++)for(let x=0;x<d;x++){const p=(x+1)%d;t.addQuad(f[g][x],f[g][p],f[g+1][p],f[g+1][x])}if(n){const g=Gi(0),x=Yt.w;for(let m=0;m<4;m++){const b=m/4*Math.PI*2+i()*.5,E=x*1.6+i()*3,S=[g[0],g[1]+x*.7,g[2]],y=[g[0]+Math.cos(b)*E,g[1]-1.6,g[2]+Math.sin(b)*E],w=Ye(S,y,x*.5);t.bake(a,w,()=>Xa.toArray())}const p=5;for(let m=0;m<p;m++){const b=Nn*(.6+m/p*.35+i()*.03),E=Zc(b),S=m/p*Math.PI*2+i()*.7,y=ie(oe(Ct(E.x,Math.cos(S)),Ct(E.z,Math.sin(S)))),w=ie(oe(Ct(y,.7),[0,.7,0])),M=oe(E.p,Ct(y,qi(b)*.7)),A=34+i()*22,L=oe(M,Ct(w,A)),_=3.4+i()*1.4,v=Ye(M,L,_),I=new tt(Wa).multiplyScalar(.9);t.bake(a,v,()=>I.toArray()),u(L,30+i()*13,i()),u(oe(M,Ct(Qn(L,M),.55)),22+i()*9,i())}u(oe(Gi(Nn),[0,12,0]),34,.5)}else u(oe(Gi(Nn),[-14,14,6]),55,.5),u(oe(Gi(Nn),[18,22,-8]),48,.5);return{bark:t.toBufferGeometry(),leaf:e.toBufferGeometry()}}const KM=130,jM=170;function ZM(){const n=Gr({map:oM(),strength:1,roughness:.92,side:de}),t=new rn({vertexColors:!0,roughness:.92,metalness:0,side:de}),e=uh(!0),i=uh(!1),r=new Te;r.add(new Vt(e.bark,n),new Vt(e.leaf,t));const s=new Te;s.add(new Vt(i.bark,n),new Vt(i.leaf,t));for(const l of r.children)l.castShadow=!0,l.receiveShadow=!0;for(const l of s.children)l.castShadow=!0;s.visible=!1;const o=new Te;o.name="tree",o.add(r,s);let a=!0;function c(l){const u=Math.hypot(l.position.x-Yt.x,l.position.z-Yt.z);a&&u>jM?a=!1:!a&&u<KM&&(a=!0),r.visible=a,s.visible=!a}return{group:o,update:c}}const Fr=8,JM=.3,wo=[];function yn(n,t){const e={p:[n[0],n[1],n[2]],c:[t[0],t[1],t[2]],_d:0};return wo.push(e),e}const Ii=new Float32Array(Fr*3),Di=new Float32Array(Fr*3),Fi=new fe(0,0,0,1),Xo=new fe(0,1,0,0),QM={uLightPos:{value:Ii},uLightCol:{value:Di},uPitA:{value:Fi},uPitB:{value:Xo}};function tS(n,t,e,i,r){Fi.set(n,t,e,Math.max(i,.001)),Xo.set(1,Math.max(r,.001),0,0)}function Qc(n,t,e){if(Xo.x<.5)return 0;const i=a=>{const c=Math.min(1,Math.max(0,a));return c*c*(3-2*c)},r=Math.hypot(n-Fi.x,e-Fi.z),s=1-i((r-Fi.w*.9)/(Fi.w*.8)),o=Math.min(1,Math.max(0,(Fi.y-t)/Xo.y));return s*i((o-.04)/.46)}function eS(n){const t=n.x,e=n.y,i=n.z;for(let s=0;s<wo.length;s++){const o=wo[s],a=o.p[0]-t,c=o.p[1]-e,l=o.p[2]-i;o._d=a*a+c*c+l*l}const r=wo.slice().sort((s,o)=>s._d-o._d);for(let s=0;s<Fr;s++){const o=r[s];o?(Ii[s*3]=o.p[0],Ii[s*3+1]=o.p[1],Ii[s*3+2]=o.p[2],Di[s*3]=o.c[0],Di[s*3+1]=o.c[1],Di[s*3+2]=o.c[2]):(Ii[s*3]=Ii[s*3+1]=Ii[s*3+2]=0,Di[s*3]=Di[s*3+1]=Di[s*3+2]=0)}}function nS(n,t,e){if(e>=Ue)return .9;const i=Math.max(0,Math.min(1,(e-ge)/(Ue-ge)));return .12+.88*Math.pow(i,1.6)}const iS=`
uniform vec3 uLightPos[${Fr}];
uniform vec3 uLightCol[${Fr}];
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
  if (w.z >= ${Ue.toFixed(1)}) return (0.82 + 0.18 * nestNoise(w.xz * 0.015)) * pit;
  float t = clamp((w.z - (${ge.toFixed(1)})) / (${(Ue-ge).toFixed(1)}), 0.0, 1.0);
  return (0.12 + 0.88 * pow(t, 1.6)) * pit;
}
`;function Ps(n){if(!n||n.userData.nestShaded)return n;n.userData.nestShaded=!0;const t=n.onBeforeCompile;n.onBeforeCompile=function(i,r){t&&t.call(this,i,r),Object.assign(i.uniforms,QM),i.vertexShader=i.vertexShader.replace("#include <common>",`varying vec3 vNestWorld;
#include <common>`).replace("#include <project_vertex>",`#include <project_vertex>
  vec4 nestLocal = vec4(transformed, 1.0);
  #ifdef USE_INSTANCING
    nestLocal = instanceMatrix * nestLocal;
  #endif
  vNestWorld = (modelMatrix * nestLocal).xyz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",iS+`
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
          reflectedLight.indirectDiffuse *= max(nestDay, ${JM.toFixed(2)});
          vec3 nestSum = vec3(0.0);
          for (int i = 0; i < ${Fr}; i++) {
            vec3 Ld = uLightPos[i] - vNestWorld;
            float d = length(Ld);
            float att = 1.0 / (1.0 + d * d * 0.017);
            nestSum += uLightCol[i] * max(dot(normal, Ld / max(d, 0.001)), 0.0) * att;
          }
          reflectedLight.directDiffuse += diffuseColor.rgb * nestSum;
        }
      `)};const e=n.userData.shaderTag||"";return n.customProgramCacheKey=()=>"nest-shading|"+e,n.needsUpdate=!0,n}const ke=n=>new tt(n).toArray(),tn=(n,t)=>[n[0]*t,n[1]*t,n[2]*t],li=(n,t,e,i)=>[n[0]*t,n[1]*e,n[2]*i],ui=(n,t,e)=>[Ht(n[0],t[0],e),Ht(n[1],t[1],e),Ht(n[2],t[2],e)],rS=ke("#6d5130"),sS=ke("#5a4226"),cs=ke("#332412"),Ao=ke("#4c5f2f"),Ya=ke("#6a6154"),oS="#5E4526",aS=ke("#4a3418"),hh=ke(oS),dh=ke("#efdcb0"),fh=ke("#7a6040"),cS=ke("#ffc46a"),qa=ke("#c497d9"),lS=ke("#e0a752"),ph=ui(ke("#e07356"),ke("#e6b558"),.5),uS=ke("#9db0d8"),hS=tn(ui(Ao,cs,.62),.58),dS=tn(cs,.7),$a=[.72,.48,1.75],fS=[1.95,1.2,.52],$i=[],Ki=[];function Nl(n){return n.r*.65}function pS(n){const t=new we,e=new we,i=new we,r=Ts(20260812),s=Nr(10,7),o=Nr(6,4),a=ta(8),c=(y,w,M,A)=>Vi([y,0,0],[0,w,0],[0,0,M],A);{const M=[];for(let A=0;A<=9;A++){const L=[];for(let _=0;_<=30;_++){const v=2*Math.PI*_/30,I=$c*1.02*A/9,U=ne[0]+Math.cos(v)*I,N=ne[2]+Math.sin(v)*I,W=se(U,N)+.08,F=ui(rS,sS,nt(.3+ae(U*.2,N*.2)*.5,0,1));L.push(t.addVertex(U,W,N,tn(F,.65+.35*(1-A/9))))}M.push(L)}for(let A=0;A<9;A++)for(let L=0;L<30;L++)t.addQuad(M[A][L],M[A][L+1],M[A+1][L+1],M[A+1][L])}const l=tn(aS,.8);function u(y,w,M,A,L,_){let I=null;for(let U=0;U<=8;U++){const N=U/8,W=Math.sin(N*Math.PI),F=Ht(w,M,N),B=ki(F,y+_*W,L*W);I&&t.bake(a,Ye(I,B,A*(.65+.5*W)),()=>l),I=B}}for(let y=0;y<30;y++){const w=ge+8+r()*(Math.abs(ge)-16),M=Math.PI*(.15+r()*.7);u(w,M,M+.5+r()*1.3,.5+r()*.9,.06+r()*.16,(r()-.5)*9)}const h=tn(hh,.55);for(let y=0;y<150;y++){const w=ge+5+r()*(Math.abs(ge)-10),M=Math.PI*(.18+r()*.64),A=ki(M,w,.02),L=1.2+r()*(ze(w)>16?7:3),_=[A[0]+(r()-.5)*.8,A[1]-L,A[2]+(r()-.5)*.8];t.bake(a,Ye(A,_,.09+r()*.1),()=>h)}for(let y=0;y<520;y++){const w=ge+3+r()*(Math.abs(ge)-5),M=r()*Math.PI*2,A=ki(M,w,.01),L=.22+r()*.55,_=tn(fh,(.7+r()*.7)*(.5+r()*.5));t.bake(o,c(L,L*.8,L,A),()=>_)}for(let y=0;y<120;y++){const w=ge+5+r()*(Math.abs(ge)-8),M=ze(w)*.7,A=(r()-.5)*2*M,L=.3+r()*.9,_=tn(Ya,(.6+r()*.8)*.8);i.bake(o,c(L*1.3,L*.7,L*1.1,[A,se(A,w)+L*.3,w]),()=>_)}function d(y,w,M,A,L,_,v){if(Math.hypot(y-qc[0],w-qc[1])<15)return;const I=li(L,.3,.28,.4),U=v||li(L,.95,.62,1.15);for(let N=0;N<M;N++){const W=y+(r()-.5)*7,F=w+(r()-.5)*7,B=A*(.45+r()*.9),P=se(W,F),z=[W,P+1.7*B,F];t.bake(a,Ye([W,P,F],z,.22*B),()=>I),e.bake(s,c(1.15*B,.8*B,1.15*B,z),()=>U),$i.push({x:W,z:F,r:1.15*B+.5})}yn([y,se(y,w)+2.4,w],_)}for(let y=0;y<9;y++){const w=-14-y*10.5;d((y%2?1:-1)*(3.5+r()*1.8),w,4+Math.floor(r()*4),1.3,qa,$a)}for(let y=0;y<8;y++){const w=r()*Math.PI*2,M=17+r()*9;let A=ne[0]+Math.cos(w)*M;const L=ne[2]+Math.sin(w)*M,_=ze(L)*.72;Math.abs(A)>_&&(A=Math.sign(A)*_),d(A,L,5+Math.floor(r()*5),1.9,qa,$a)}const f=tn(hh,.36),g=li(cS,1.25,1.15,1.4);for(let y=0;y<26;y++){const w=Math.PI*(.2+r()*.6),M=Rl+(r()-.5)*Ho*1.5,A=ki(w,M,.03),L=[A[0],A[1]-(3+r()*11),A[2]];t.bake(a,Ye(A,L,.07),()=>f);const _=.55+r()*.75;e.bake(s,c(_,_*1.25,_,L),()=>g),y%3===0&&yn(L,fS)}const x=li(dh,.76,.7,.58);for(let y=0;y<5;y++){const w=Math.PI*(.15+y*.42),M=8+r()*5,A=ne[0]+Math.cos(w)*M,L=ne[2]+Math.sin(w)*M;for(let _=0;_<22;_++){const v=A+(r()-.5)*5.5,I=L+(r()-.5)*5.5,U=.5+r()*.35;t.bake(s,c(U*.72,U*.72,U*1.5,[v,se(v,I)+U*.6,I]),()=>x)}yn([A,se(A,L)+1.5,L],[.55,.42,.22])}if(yn([ne[0],se(ne[0],ne[2])+9,ne[2]],[1.5,1.05,.5]),n&&n.granary){const y=n.granary;for(let M=0;M<5;M++){const A=(r()-.5)*Math.PI*1.6,L=nt(y.uEnd+(r()-.5)*y.uMax*.5,y.uMax*.42,y.uMax*.96),_=y.pointAt(A,L,.12);for(let v=0;v<26;v++){const I=_[0]+(r()-.5)*4.5,U=_[2]+(r()-.5)*4.5,N=.5+r()*1.3,W=nt(1-Math.hypot(I-_[0],U-_[2])/4.5,0,1),F=tn(ui(ui(lS,ph,r()*.4),cs,W*.5),.55+.35*(1-W));t.bake(o,c(N,N*.85,N,[I,se(I,U)+N*.4,U]),()=>F)}}const w=li(ph,.94,.81,.51);for(let M=0;M<10;M++){const A=(r()-.5)*Math.PI*1.5,L=nt(y.uEnd+(r()-.5)*y.uMax*.55,4,y.uMax-2),_=r()<.5,v=y.pointAt(A,L,_?.85:.06),I=.5+r()*.7,U=_?v[1]-I*(.6+r()*1.6):se(v[0],v[2])+I*.55;t.bake(s,c(I*.8,I*1.3,I*.8,[v[0],U,v[2]]),()=>w)}for(let M=0;M<2;M++){const A=y.pointAt(0,2+r()*4,.3);yn([A[0],se(A[0],A[2])+2.2,A[2]],[.42,.3,.14])}}if(n&&n.brood){const y=n.brood,w=[.34,.5,.68],M=[1,1.55,1.15],A=li(uS,.42,.4,.46);for(let L=0;L<7;L++){const _=(r()-.5)*Math.PI*1.7,v=nt(y.uEnd+(r()-.5)*y.uMax*.6,y.uMax*.32,y.uMax*.97),I=y.pointAt(_,v,.1),U=se(I[0],I[2]),N=14+Math.floor(r()*14);for(let W=0;W<N;W++){const F=Math.floor(r()*3),B=w[F]+r()*.22,P=I[0]+(r()-.5)*4.6,z=I[2]+(r()-.5)*4.6,H=(.85+r()*.25)*.85,j=li(dh,H,H*.94,H*.8);t.bake(s,c(B*.75,B*.75,B*1.5*M[F],[P,se(P,z)+B*.6,z]),()=>j)}if(L%2===0){const W=4+Math.floor(r()*3);for(let F=0;F<W;F++){const B=r()*Math.PI*2,P=B+1.4+r()*1.2,z=2.2+r()*1.2,H=[I[0]+Math.cos(B)*z,U+.5+r()*1,I[2]+Math.sin(B)*z],j=[I[0]+Math.cos(P)*z,U+.5+r()*1,I[2]+Math.sin(P)*z];t.bake(a,Ye(H,j,.03),()=>A)}}yn([I[0],U+1.6,I[2]],[.62,.46,.24])}for(let L=0;L<2;L++){const _=(r()-.5)*Math.PI*1.4,v=nt(y.uEnd+(r()-.5)*y.uMax*.4,4,y.uMax-2),I=y.pointAt(_,v,.1);d(I[0],I[2],2+Math.floor(r()*2),1.1,qa,$a)}}if(n&&n.midden){const y=n.midden,w=ui(Ao,cs,.5),M=tn(ui(Ao,cs,.3),3.5),A=[.3,.46,.3];for(let v=0;v<3;v++){const I=(r()-.5)*Math.PI*1.6,U=nt(y.uEnd+(r()-.5)*y.uMax*.5,4,y.uMax-2),N=y.pointAt(I,U,.08);d(N[0],N[2],3+Math.floor(r()*3),1,w,A,M)}for(let v=0;v<4;v++){const I=(r()-.5)*Math.PI*1.7,U=nt(y.uEnd+(r()-.5)*y.uMax*.55,3,y.uMax-1.5),N=y.pointAt(I,U,.1);for(let W=0;W<20;W++){const F=N[0]+(r()-.5)*5,B=N[2]+(r()-.5)*5,P=.4+r()*1.1,z=tn(r()<.5?Ya:fh,(.3+r()*.35)*.55);i.bake(o,c(P*1.2,P*.7,P,[F,se(F,B)+P*.3,B]),()=>z)}}const L=tn(dS,.5);for(let v=0;v<5;v++){const I=(r()-.5)*Math.PI*1.6,U=nt(y.uEnd+(r()-.5)*y.uMax*.5,3,y.uMax-1.5),N=y.pointAt(I,U,.12),W=se(N[0],N[2]),F=2.2+r()*2.2,B=r()*Math.PI*2;t.bake(a,Ye([N[0],W+.35,N[2]],[N[0]+Math.cos(B)*F,W+.3,N[2]+Math.sin(B)*F],.55+r()*.35),()=>L)}const _=li(hS,.3,.36,.3);for(let v=0;v<6;v++){const I=(r()-.5)*Math.PI*1.6,U=nt(y.uEnd+(r()-.5)*y.uMax*.55,3,y.uMax-1.5),N=y.pointAt(I,U,.05),W=1+r()*1.6;t.bake(s,c(W,.12,W,[N[0],se(N[0],N[2])+.03,N[2]]),()=>_)}}for(let y=0;y<42;y++){const w=-200+r()*380,M=8+r()*250;if(Si(w,M)>0||ei(w,M)<4)continue;const A=2+r()*6,L=1.5+r()*4,_=2+r()*6,v=Ut(w,M)+L*.35,I=.75+r()*.5,U=r()*40,N=r()<.6?.5+r()*.5:0;i.bake(s,c(A,L,_,[w,v,M]),(W,F,B)=>{const P=tn(Ya,I);if(N<=0)return P;const z=nt((F-v)/L+.15*ae(W*.3+U,B*.3+U),0,1);return ui(P,Ao,z*z*N)}),Ki.push({x:w,z:M,r:(A+_)*.5+1})}const p=new Te;p.name="nest-decor";const m=new Vt(t.toBufferGeometry(),new rn({vertexColors:!0,roughness:.92,metalness:0,side:de}));m.name="nest-decor-matte",p.add(m);const b=new Vt(i.toBufferGeometry(),Gr({map:cM(),strength:1,roughness:.92,side:de}));b.name="nest-decor-stone",b.castShadow=!0,b.receiveShadow=!0,p.add(b);const E=uf({map:af(),strength:.7,emissive:.95,color:7829367,side:de}),S=new Vt(e.toBufferGeometry(),E);return S.name="nest-decor-glow",p.add(S),{group:p,mushrooms:$i,rocks:Ki}}const Ka=new tt("#b07226").toArray(),Qr=new tt("#5e3d16").toArray(),mh=new tt("#100c06").toArray(),Ne=2.4,mS=2.7,gS=2.9;function _S(n,t,e,i,r){const s=Qn(t,n),o=Math.hypot(s[0],s[1],s[2]),a=nt(o,.05,e+i-.02),c=Ct(s,1/(o||1)),l=(e*e-i*i+a*a)/(2*a),u=Math.sqrt(Math.max(e*e-l*l,0)),h=r[0]*c[0]+r[1]*c[1]+r[2]*c[2],d=ie(Qn(r,Ct(c,h)));return oe(oe(n,Ct(c,l)),Ct(d,u))}function gh(n){const t=new sn;return t.setAttribute("position",new _e(n.p,3)),t.setAttribute("normal",new _e(n.n,3)),t.setIndex(n.i),t}function _h(n,t){n.matrix.set(t.x[0],t.y[0],t.z[0],t.p[0],t.x[1],t.y[1],t.z[1],t.p[1],t.x[2],t.y[2],t.z[2],t.p[2],0,0,0,1),n.matrixWorldNeedsUpdate=!0}function xS(){const n=new Te;n.name="queen";const t=[ne[0],se(ne[0],ne[2]),ne[2]],e=Math.PI,i=[Math.sin(e),0,Math.cos(e)],r=[0,1,0],s=ie($e(r,i)),o=Vi(s,r,i,[t[0],t[1]+1.05*Ne,t[2]]),a=A=>of(o,Ct(A,Ne)),c=Nr(12,9),l=ta(8),u=new we,h=(A,L,_,v)=>Vi(Ct(s,L*Ne),Ct(r,_*Ne),Ct(i,v*Ne),a(A)),d=(A,L,_,v,I)=>u.bake(c,h(A,L,_,v),()=>I),f=(A,L,_,v)=>u.bake(l,Ye(A,L,_),()=>v);d([0,1.5,-1.2],.5,.5,.62,Qr),d([0,1.62,.5],1.06,1.02,1.75,Ka),d([0,1.66,2.7],1.18,1.02,1.12,Ka),d([.76,2.12,3.1],.3,.26,.3,mh),d([-.76,2.12,3.1],.3,.26,.3,mh);for(let A=-1;A<=1;A+=2)f(a([A*.55,1.45,3.5]),a([A*.34,1.2,4.8]),.17*Ne,Ka);const g=[[.92,1.5,1.7],[-.92,1.5,1.7],[1.02,1.4,.4],[-1.02,1.4,.4],[.92,1.4,-1.15],[-.92,1.4,-1.15]],x=[[4.1,0,3.9],[-4.1,0,3.9],[4.9,0,.3],[-4.9,0,.3],[4.5,0,-3.5],[-4.5,0,-3.5]];for(let A=0;A<6;A++){const L=a(g[A]),_=a(x[A]);_[1]=se(_[0],_[2]);const v=g[A][0]>0?s:Ct(s,-1),I=_S(L,_,mS*Ne,gS*Ne,ie(oe(r,Ct(v,.75))));f(L,I,.2*Ne,Qr),f(I,_,.14*Ne,Qr),u.bake(c,Vi([.3*Ne,0,0],[0,.3*Ne,0],[0,0,.3*Ne],I),()=>Qr)}const p=new rn({vertexColors:!0,roughness:.45,metalness:.05}),m=new Vt(u.toBufferGeometry(),p);m.name="queen-body",m.castShadow=!0,n.add(m);const b=gh(c),E=gh(l),S=new rn({color:new tt().fromArray(Qr),roughness:.45,metalness:.05}),y=[{local:[0,1.5,-5.4],rx:1.34,ry:1.3,rz:1.9},{local:[0,1.55,-3.2],rx:1.6,ry:1.54,rz:2.1}].map(A=>{const L=new Vt(b,S);return L.matrixAutoUpdate=!1,L.castShadow=!0,n.add(L),{mesh:L,...A}}),w=[];for(let A=-1;A<=1;A+=2)for(let L=0;L<2;L++){const _=new Vt(E,S);_.matrixAutoUpdate=!1,n.add(_),w.push({mesh:_,sA:A,seg:L})}function M(A){const L=1+Math.sin(A*.55)*.04;for(const _ of y)_h(_.mesh,h(_.local,_.rx*L,_.ry*L,_.rz));for(const _ of w){const v=Math.sin(A*1.1+(_.sA>0?0:1.3))*.35,I=a([_.sA*.58,2.1,3.2]),U=a([_.sA*(1.4+v*.3),3.3,4.2]),N=a([_.sA*(1.85+v),3.2+v*.4,6.1]);_h(_.mesh,_.seg===0?Ye(I,U,.14*Ne):Ye(U,N,.11*Ne))}}return M(0),{group:n,update:M}}const Fl={sunDir:ie([-300,120,195]),sunColor:15251852,sunIntensity:5.4,hemiSky:7241640,hemiGround:4867376,hemiIntensity:1.15,fog:8221832,fogNear:95,fogFar:420,sky:10130344,exposure:1.3},Ol={sunDir:ie([30,45,20]),sunColor:16767370,sunIntensity:2.5,hemiSky:12572917,hemiGround:7236152,hemiIntensity:.85,fog:11520216,fogNear:90,fogFar:420,sky:10274532,exposure:1.15};let ls=0;function na(){return ls}function vS(n){ls=n<0?0:n>1?1:n}const Cn=[0,1,0];function ia(){const n=Fl.sunDir,t=Ol.sunDir;Cn[0]=n[0]+(t[0]-n[0])*ls,Cn[1]=n[1]+(t[1]-n[1])*ls,Cn[2]=n[2]+(t[2]-n[2])*ls;const e=Math.hypot(Cn[0],Cn[1],Cn[2])||1;return Cn[0]/=e,Cn[1]/=e,Cn[2]/=e,Cn}const MS=56;function xh(n,t,e,i,r,s,o,a){const c=i-n,l=r-t,u=s-e,h=c*a[0]+l*a[1]+u*a[2];if(h<=0)return 0;const d=c*c+l*l+u*u-h*h,f=Math.sqrt(d>0?d:0),g=o*.35+h*.06,x=nt((o+g-f)/g,0,1);return x*x*(3-2*x)}function SS(n,t,e,i){const r=Math.hypot(i[0],i[2]);if(r<1e-4)return 0;const s=i[0]/r,o=i[2]/r,a=Yt.x-n,c=Yt.z-e,l=a*s+c*o;if(l<=0)return 0;const u=Math.abs(a*o-c*s);if(t+i[1]/r*l>Yt.baseY+Yt.h*Nn)return 0;const d=Yt.w*.4+l*.05,f=nt((Yt.w+d-u)/d,0,1);return f*f*(3-2*f)}function ES(n,t,e,i){const r=Math.hypot(i[0],i[2]);if(r<1e-4)return 0;const s=i[0]/r,o=i[2]/r,a=i[1]/r,c=Math.min(170,34/a+14);let l=0;for(let u=2.5;u<c;u*=1.38){const d=Ut(n+s*u,e+o*u)-(t+a*u+.5);if(d<=0)continue;const f=1.2+u*.05,g=nt(d/f,0,1);if(g>l&&(l=g),l>=1)break}return l}function vf(n,t){if(t<Ue)return 1;const e=ia(),i=Ut(n,t),r=Cs(n,t),s=nt((r[0]*e[0]+r[1]*e[1]+r[2]*e[2])/Math.max(e[1],.001),0,1);let o=ES(n,i,t,e);if(o<1){const a=i+1.2;o=Math.max(o,SS(n,a,t,e));const c=Gi(Nn);o=Math.max(o,xh(n,a,t,c[0],c[1]+14,c[2],MS,e));for(let l=0;l<Ki.length&&o<1;l++){const u=Ki[l],h=u.r*.8;o=Math.max(o,xh(n,a,t,u.x,Ut(u.x,u.z)+h*.45,u.z,h,e))}}return nt(1-s*(1-o),0,1)}const zn=[],Mf=new Map,yS=["graine","brindille","miellat"],bS={graine:4,brindille:3,miellat:5},TS={graine:5,brindille:6,miellat:5},wS=[.88,.66,.32],AS=[.55,.38,.18],RS=[.42,.32,.19],vh=[.24,.18,.1],CS=[.94,.74,.36],PS=[.78,.5,.2],LS=new tt("#4A4438"),Bl=(n,t,e)=>[Ht(n[0],t[0],e),Ht(n[1],t[1],e),Ht(n[2],t[2],e)];function IS(n,t,e,i,r){const s=new we,o=[];for(let a=0;a<=i;a++){const c=a/i,l=[],u=t(c);for(let h=0;h<e;h++){const d=2*Math.PI*h/e;l.push(s.addVertex(Math.cos(d)*u,c*n,Math.sin(d)*u,r(c,d)))}o.push(l)}for(let a=0;a<i;a++)for(let c=0;c<e;c++){const l=(c+1)%e;s.addQuad(o[a][c],o[a][l],o[a+1][l],o[a+1][c])}return s}function DS(){return IS(7,t=>Math.pow(Math.sin(Math.PI*t),.62)*2*(1-.3*t),7,5,(t,e)=>Bl(AS,wS,nt(.25+.75*Math.pow(Math.abs(Math.cos(e*.5)),1.5)*(.4+.6*t),0,1))).toBufferGeometry()}function US(){const n=new we,t=ta(5),e=[[0,0,0],[.6,5.5,.4],[2.4,10.6,.2]];for(let i=0;i<2;i++)n.bake(t,Ye(e[i],e[i+1],.62-i*.16),(r,s)=>Bl(vh,RS,nt(.55+.25*Math.sin(s*1.7),0,1)));return n.bake(t,Ye([.6,5.5,.4],[-2.6,8.2,-1.1],.33),()=>vh),n.toBufferGeometry()}function NS(){const n=new we,t=Nr(6,3),e=[[0,.9,0,2.6,1.5,2.2],[2.4,.6,1.1,1.7,1,1.5],[-1.6,.7,1.6,1.9,1.2,1.7]];for(const i of e)n.bake(t,Vi([i[3],0,0],[0,i[4],0],[0,0,i[5]],[i[0],i[1],i[2]]),(r,s)=>Bl(PS,CS,nt((s-i[1])/(i[4]*2)+.55,0,1)));return n.toBufferGeometry()}const us=(n,t)=>n>=t?0:Math.pow(1-n/t,1.5);function FS(n,t){if(Si(n,t)>0||ei(n,t)<10)return 0;let e=.16;return e+=1.05*us(Math.hypot(n-Yt.x,t-Yt.z),78),e+=.85*us(Math.hypot(n-88,t-168),74),e+=.7*us(Math.hypot(n-24,t-128),46),e*nt(1-(Hr(n,t)-.16)/.5,.12,1)}const OS=2;function BS(n,t,e){const i=Math.hypot(n-Yt.x,t-Yt.z)<85,r=e();return i?r<.55?"brindille":r<.85?"miellat":"graine":us(Math.hypot(n-88,t-168),74)+us(Math.hypot(n-24,t-128),46)>.25?r<.6?"graine":r<.85?"miellat":"brindille":r<.5?"graine":r<.8?"brindille":"miellat"}const Mh=32;function zS(n=90210){const t=Ts(n),e=be;let i=0,r=0,s=1;for(;i<Mh&&r++<Mh*200;){const o=Ht(e.x0+14,e.x1-14,t()),a=Ht(e.z0+16,e.z1-14,t());if(t()*OS>FS(o,a))continue;const c=BS(o,a,t),l=3+Math.floor(t()*4);let u=0;for(let h=0;h<l*3&&u<l;h++){const d=t()*Math.PI*2,f=Math.sqrt(t())*12,g=o+Math.cos(d)*f,x=a+Math.sin(d)*f;if(Si(g,x)>0||ei(g,x)<10||Hr(g,x)>.7)continue;const p=Math.max(1,bS[c]+Math.round((t()-.5)*2)),m={id:s++,x:g,z:x,kind:c,amount:p,r:TS[c],amount0:p,yaw:t()*Math.PI*2,tilt:(t()-.5)*.5,size:.75+t()*.5,_slot:-1};zn.push(m),Mf.set(m.id,m),u++}u&&i++}}const Sf={},Sh=new ee,Eh=new Br,yh=new Rn,bh=new V,Th=new V,wh=new tt;function Ef(n){const t=Sf[n.kind];if(!t||n._slot<0)return;const e=n.amount0>0?n.amount/n.amount0:0,i=n.size*Ht(.45,1,Math.pow(e,.6)),r=Cs(n.x,n.z);yh.set(n.tilt-Math.atan2(r[2],r[1])*.6,n.yaw,n.tilt+Math.atan2(r[0],r[1])*.6),Eh.setFromEuler(yh),bh.set(n.x,Ut(n.x,n.z)-.35*i,n.z),Th.set(i,i,i),Sh.compose(bh,Eh,Th),t.setMatrixAt(n._slot,Sh),wh.set(1,1,1).lerp(LS,(1-e)*.8),t.setColorAt(n._slot,wh),t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0)}function yf(n,t=1){const e=Mf.get(n);if(!e||e.amount<=0||!(t>0))return 0;const i=Math.min(t,e.amount);return e.amount-=i,Ef(e),i}function kS(n,t,e=12,i=!1){const r=[];for(const s of zn)!i&&s.amount<=0||Math.hypot(s.x-n,s.z-t)<=e&&r.push(s);return r}function GS(){const n=new Te;n.name="resources",zn.length===0&&zS();const t={graine:DS(),brindille:US(),miellat:NS()},e=new rn({vertexColors:!0,roughness:.9,metalness:0}),i=new rn({vertexColors:!0,roughness:.22,metalness:0});for(const r of yS){const s=zn.filter(c=>c.kind===r),o=Math.max(s.length,1),a=new Jo(t[r],r==="miellat"?i:e,o);a.name="resource-"+r,a.castShadow=!0,a.receiveShadow=!0,a.count=s.length,a.instanceColor=new Dn(new Float32Array(o*3).fill(1),3),a.frustumCulled=!1,Sf[r]=a,s.forEach((c,l)=>{c._slot=l,Ef(c)}),n.add(a)}return{group:n,nodes:zn}}const wr=4.2,HS=.6,Oi=15,zl=14,qn=8,Ah=.22,Sr=1.6,Ro=17,VS=18,WS=.62,Ar=new tt("#6d5130"),bf=new tt("#5a4226"),hs=new tt("#332412"),XS=new tt("#e0a752"),YS=new tt("#efdcb0"),qS=new tt("#ffc46a"),Co=[.55,.62,.82],$S=[1.05,.62,.24],ja=[.85,.55,.22],Za=[1.95,1.2,.52],Vr=4,Tf=48,wf=7.5,Rh=24;function KS(n){return Math.min(Rh,Math.floor(nt(n,0,1)*Rh+1e-9))}const gs=6;let tl=null,Xt=null,Zn=new Array(Vr).fill(null);const Hi=(n,t,e)=>new tt(n).lerp(t,nt(e,0,1));function jS(n){tl=n}function Af(){return Xt?{x:Xt.x,z:Xt.z}:null}function Rf(){return Xt}function kl(n,t){if(Xt)return{ok:!1,reason:"already-founded"};if(t<Ue)return{ok:!1,reason:"underground"};const e=be;return n<e.x0+Ro||n>e.x1-Ro||t>e.z1-Ro?{ok:!1,reason:"bounds"}:Math.abs(n)<34&&t<34?{ok:!1,reason:"occupied"}:Si(n,t)>0?{ok:!1,reason:"water"}:ei(n,t)<VS?{ok:!1,reason:"water"}:Hr(n,t)>WS?{ok:!1,reason:"slope"}:Dl(n,t).kind==="rock"?{ok:!1,reason:"rock"}:{ok:!0}}function Cf(n,t,e){const i=(r,s)=>ae(Math.cos(n)*r+t*s+e+37,Math.sin(n)*r+t*s*.7+e+91);return .84+.2*i(1.6,.1)+.1*i(4.1,.29)+.05*i(9.3,.62)}function ZS(n){const t=Oi+qn,e=(n-t)/qn;return e>-1&&e<1?wr+(zl-wr)*Math.pow(Math.sqrt(1-e*e),.72):wr}function JS(n,t,e){const i=Ut(n,t),r=(ae(n*.07,t*.07)-.5)*Math.PI*2,s=ie([Math.cos(r)*Ah,-1,Math.sin(r)*Ah]),o=ie($e(s,[0,0,1])),a=ie($e(s,o)),c=[n,i+Sr,t],l=Oi+2*qn,u=i+Sr-(Oi+qn*.92),h=22;function d(S,y){const w=Cf(S,y,e),M=ZS(y)*w,A=c[0]+s[0]*y,L=c[1]+s[1]*y,_=c[2]+s[2]*y,v=A+(o[0]*Math.cos(S)+a[0]*Math.sin(S))*M,I=L+(o[1]*Math.cos(S)+a[1]*Math.sin(S))*M,U=_+(o[2]*Math.cos(S)+a[2]*Math.sin(S))*M;return[v,Math.max(I,u),U,w]}const f=new we,g=[];for(let S=0;S<=l+1e-4;S+=1.5){const y=[];for(let w=0;w<h;w++){const M=2*Math.PI*w/h,A=d(M,S),L=nt((A[3]-.84)/.34+.45,0,1),_=Hi(hs,bf,L*.8+.1).lerp(Ar,.18+L*.14).multiplyScalar(.88);y.push(f.addVertex(A[0],A[1],A[2],_.toArray()))}g.push(y)}for(let S=0;S<g.length-1;S++)for(let y=0;y<h;y++){const w=(y+1)%h;f.addQuad(g[S][y],g[S][w],g[S+1][w],g[S+1][y])}const x=g[g.length-1],p=f.addVertex(c[0]+s[0]*l,u,c[2]+s[2]*l,Hi(hs,Ar,.35).toArray());for(let S=0;S<h;S++)f.addTri(p,x[S],x[(S+1)%h]);const m=8,b=[];for(let S=0;S<=m;S++){const y=S/m,w=Ht(wr*1.02,Ro,y),M=[];for(let A=0;A<=h;A++){const L=2*Math.PI*(A%h)/h,_=n+Math.cos(L)*w,v=t+Math.sin(L)*w,I=.75+.5*ae(_*.16+e,v*.16+e),U=Sr*Math.pow(1-y,1.5)*I+.9*Math.sin(Math.PI*Math.min(1,y*1.35))*I,N=Ht(i+Sr,Ut(_,v),Math.pow(y,.7))+(y>0?U*.75:0),W=Hi(Hi(Ar,hs,.35+.3*(1-y)),XS,.12).multiplyScalar(.82+.25*I);M.push(f.addVertex(_,N,v,W.toArray()))}b.push(M)}for(let S=0;S<m;S++)for(let y=0;y<h;y++)f.addQuad(b[S][y],b[S][y+1],b[S+1][y+1],b[S+1][y]);const E=c[1]+s[1]*(Oi+qn);return{geometry:f.toBufferGeometry(),mouthY:i,floorY:u,origin:c,dir:s,uMax:l,chamber:{x:c[0]+s[0]*(Oi+qn),y:u,z:c[2]+s[2]*(Oi+qn),ceilY:E+qn*.55,r:zl}}}function QS(n,t){const e=Ts(t^23505),i=Nr(8,5),r=(g,x,p,m)=>Vi([g,0,0],[0,x,0],[0,0,p],m),s=n.chamber,o=[],a=Ps(new rn({vertexColors:!0,roughness:.85,metalness:0,side:de}));for(let g=0;g<gs;g++){const x=g/gs*Math.PI*2+e()*.5,p=s.r*(.28+e()*.34),m=s.x+Math.cos(x)*p,b=s.z+Math.sin(x)*p,E=new we,S=5+Math.floor(e()*5);for(let M=0;M<S;M++){const A=e()*Math.PI*2,L=Math.sqrt(e())*2.6,_=m+Math.cos(A)*L,v=b+Math.sin(A)*L,I=.75+e()*.45;E.bake(i,r(I*1.25,I*.85,I,[_,s.y+I*.7,v]),(U,N)=>Hi(YS,Ar,nt(.55-(N-s.y)*.25,0,1)).toArray())}const y=new Vt(E.toBufferGeometry(),a);y.name="nest-brood-"+g,y.visible=!1,y.castShadow=!1;const w=yn([m,s.y+2.2,b],[0,0,0]);o.push({mesh:y,lamp:w,on:!1})}const c=new we,l=s.x+(e()-.5)*6,u=s.z+(e()-.5)*6,h=s.ceilY-3.2;c.bake(i,r(1.5,1.8,1.5,[l,h,u]),()=>qS.toArray());const d=new Vt(c.toBufferGeometry(),uf({map:af(),strength:.7,emissive:.95,color:7829367,side:de}));d.name="nest-glow-bead",d.visible=!1;const f=yn([l,h,u],[0,0,0]);return{piles:o,bead:{mesh:d,lamp:f,on:!1}}}function Pf(n,t){const e=kl(n,t);if(!e.ok)return e;const i=Math.floor(Math.abs(n)*131+Math.abs(t)*977)%9973,r=JS(n,t,i),s=new Te;s.name="founded-nest";const o=new Vt(r.geometry,Ps(Gr({map:Al(),strength:.62,side:de})));o.name="founded-nest-shell",o.receiveShadow=!0,s.add(o);const a=QS(r,i);for(const u of a.piles)s.add(u.mesh);s.add(a.bead.mesh),tl&&tl.add(s);const c=yn([n,r.mouthY-4,t],Co),l=yn([n,r.mouthY+1,t],$S);return Xt={x:n,z:t,group:s,mouth:{x:n,y:r.mouthY+Sr,z:t,r:wr},chamber:r.chamber,floorY:r.floorY,axis:{origin:r.origin,dir:r.dir,length:r.uMax},brood:0,sealed:!1,_furnishing:a,_coldLight:c,_warmLight:l,_coldFade:1},tS(n,r.mouthY+Sr,t,zl,Oi+qn),{ok:!0}}function Lf(n){if(!Xt)return 0;const t=Math.round(nt(n,0,gs));Xt.brood=t,Xt._furnishing.piles.forEach((i,r)=>{const s=r<t;i.mesh.visible=s,i.on=s,i.lamp.c[0]=s?ja[0]:0,i.lamp.c[1]=s?ja[1]:0,i.lamp.c[2]=s?ja[2]:0});const e=Xt._furnishing.bead;return e.on=t>=4,e.mesh.visible=e.on,e.lamp.c[0]=e.on?Za[0]:0,e.lamp.c[1]=e.on?Za[1]:0,e.lamp.c[2]=e.on?Za[2]:0,t}function If(n=!0){Xt&&(Xt.sealed=n)}function tE(n){if(!Xt)return;const t=Xt.sealed?0:1,e=Math.min(1,n/3);Xt._coldFade+=(t-Xt._coldFade)*e*3;const i=nt(Xt._coldFade,0,1);Xt._coldLight.c[0]=Co[0]*i,Xt._coldLight.c[1]=Co[1]*i,Xt._coldLight.c[2]=Co[2]*i}function eE(n){return 2*Math.PI*n/Vr+Math.PI/4}function Df(n){const t=Xt.chamber,e=eE(n),i={x:Math.cos(e),z:Math.sin(e)};return{id:`dig-${n}`,mouth:{x:t.x+i.x*t.r,y:Xt.floorY,z:t.z+i.z*t.r},dir:i,length:Tf,r:wf}}function nE(n){return!Xt||!Number.isInteger(n)||n<0||n>=Vr?null:{...Df(n),progress:0}}function el(n){return{id:n.id,mouth:n.mouth,dir:n.dir,length:n.length,r:n.r,progress:n.progress}}function iE(){return Zn.filter(Boolean).map(el)}function Uf(n){if(!Xt)return{ok:!1,reason:"not-founded"};if(!Number.isInteger(n)||n<0||n>=Vr)return{ok:!1,reason:"bad-index"};if(Zn[n])return{ok:!0,site:el(Zn[n])};const e={...Df(n),index:n,progress:0,seed:Math.floor(Math.abs(Xt.x)*131+Math.abs(Xt.z)*977+n*613)%9973,mesh:null,_meshStep:-1};return Zn[n]=e,{ok:!0,site:el(e)}}function Nf(n){return Zn.find(t=>t&&t.id===n)||null}function Ff(n,t){const e=Nf(n);if(!e)return{ok:!1,progress:0,done:!1,reason:"unknown-site"};const i=Number.isFinite(t)?t:0;e.progress=nt(e.progress+i,0,1);const r=KS(e.progress);return r!==e._meshStep&&(e._meshStep=r,oE(e)),{ok:!0,progress:e.progress,done:e.progress>=1}}function rE(n){const t=Nf(n);return t?t.progress:0}function sE(n,t){const e=[n.dir.x,0,n.dir.z],i=[e[2],0,-e[0]],r=[0,1,0],s=n.mouth.y,o=s+n.r*.85,a=16,c=new we,l=[];for(let d=0;;d+=1.5){const f=Math.min(d,t),g=[],x=n.mouth.x+e[0]*f,p=n.mouth.z+e[2]*f;for(let m=0;m<a;m++){const b=2*Math.PI*m/a,E=Cf(b,f,n.seed),S=n.r*E,y=x+(i[0]*Math.cos(b)+r[0]*Math.sin(b))*S,w=o+(i[1]*Math.cos(b)+r[1]*Math.sin(b))*S,M=p+(i[2]*Math.cos(b)+r[2]*Math.sin(b))*S,A=Hi(hs,bf,.5).lerp(Ar,.18).multiplyScalar(.88);g.push(c.addVertex(y,Math.max(w,s),M,A.toArray()))}if(l.push(g),f>=t)break}for(let d=0;d<l.length-1;d++)for(let f=0;f<a;f++){const g=(f+1)%a;c.addQuad(l[d][f],l[d][g],l[d+1][g],l[d+1][f])}const u=l[l.length-1],h=c.addVertex(n.mouth.x+e[0]*t,s,n.mouth.z+e[2]*t,Hi(hs,Ar,.35).toArray());for(let d=0;d<a;d++)c.addTri(h,u[d],u[(d+1)%a]);return c.toBufferGeometry()}function oE(n){const t=n.progress*n.length;if(t<.001){n.mesh&&(n.mesh.visible=!1);return}const e=sE(n,t);if(n.mesh)n.mesh.geometry.dispose(),n.mesh.geometry=e,n.mesh.visible=!0;else{const i=Ps(Gr({map:Al(),strength:.62,side:de}));n.mesh=new Vt(e,i),n.mesh.name="dig-gallery-"+n.index,n.mesh.receiveShadow=!0,Xt.group.add(n.mesh)}}function nl(n,t){if(!Xt)return null;for(let l=0;l<Zn.length;l++){const u=Zn[l];if(!u)continue;const h=u.progress*u.length,d=n-u.mouth.x,f=t-u.mouth.z,g=d*u.dir.x+f*u.dir.z;if(g<=-.5||g>=h+1)continue;const x=d*-u.dir.z+f*u.dir.x,p=Math.max(u.r*.82-1.2,2.2);if(Math.abs(x)>=p+3)continue;const m=nt(g,-.5,h-.2),b=nt(x,-p,p);return[u.mouth.x+u.dir.x*m-u.dir.z*b,u.mouth.z+u.dir.z*m+u.dir.x*b]}const e=Xt.chamber,i=n-e.x,r=t-e.z,s=Math.hypot(i,r),o=Math.atan2(r,i);let a=Math.max(e.r*.82-1.6,3);for(const l of Zn){if(!l)continue;const u=Math.atan2(l.dir.z,l.dir.x);let h=Math.abs(o-u)%(Math.PI*2);h>Math.PI&&(h=Math.PI*2-h);const d=h*e.r,f=nt(1-d/(l.r*2.2),0,1);if(f<=0)continue;const g=Ht(a,e.r+1.5,f);g>a&&(a=g)}const c=nt(s,0,a);return[e.x+Math.cos(o)*c,e.z+Math.sin(o)*c]}function il(){if(!Xt)return null;const{origin:n,dir:t}=Xt.axis,e=Xt.floorY,i=(e-n[1])/t[1];return{top:{x:n[0],y:n[1],z:n[2]},bottom:{x:n[0]+t[0]*i,y:e,z:n[2]+t[2]*i},r:Math.max(wr-HS,.5)}}function rl(n,t){if(!Xt)return null;for(const e of Zn){if(!e)continue;const i=n-e.mouth.x,r=t-e.mouth.z,s=i*e.dir.x+r*e.dir.z,o=e.progress*e.length;if(s<=-.5||s>=o+1)continue;const a=i*-e.dir.z+r*e.dir.x;if(!(Math.abs(a)>=e.r*.82-1.2+3))return e.mouth.y}return Xt.floorY}const aE=12,rs=16384,Ch=rs-1,cE=32768;function Ph(n,t){if(t==null)return!0;if(typeof t=="string")return n===t;for(let e=0;e<t.length;e++)if(t[e]===n)return!0;return!1}function lE({cellSize:n=aE}={}){if(!(n>0))throw new Error("spatialIndex: cellSize must be > 0");const t=1/n,e=[],i=[],r=[],s=[],o=[],a=[],c=[],l=new Map,u=new Map,h=new Map;let d=0,f=0;const g=B=>B<-rs?-rs:B>Ch?Ch:B,x=(B,P)=>(B+rs)*cE+(P+rs),p=(B,P)=>x(g(Math.floor(B*t)),g(Math.floor(P*t)));function m(B,P){const z=u.get(P);z?z.push(B):u.set(P,[B]),a[B]=P}function b(B){const P=u.get(a[B]);if(!P)return;const z=P.indexOf(B);z>=0&&(P[z]=P[P.length-1],P.pop(),P.length===0&&u.delete(a[B]))}function E(B,P){P>d&&(d=P);const z=h.get(B);(z===void 0||P>z)&&h.set(B,P)}function S(B,P,z,H,j=0){const rt=B+"#"+P;if(l.get(rt)!==void 0)return y(B,P,z,H,j);const Y=c.length?c.pop():e.length;return e[Y]=B,i[Y]=P,r[Y]=z,s[Y]=H,o[Y]=j,m(Y,p(z,H)),l.set(rt,Y),E(B,j),f++,Y}function y(B,P,z,H,j){const rt=l.get(B+"#"+P);if(rt===void 0)return!1;r[rt]=z,s[rt]=H,j!==void 0&&j!==o[rt]&&(o[rt]=j,E(B,j));const ht=p(z,H);return ht!==a[rt]&&(b(rt),m(rt,ht)),!0}function w(B,P){const z=B+"#"+P,H=l.get(z);return H===void 0?!1:(b(H),l.delete(z),e[H]=null,i[H]=null,c.push(H),f--,!0)}function M(B,P){return l.has(B+"#"+P)}function A(){u.clear(),l.clear(),e.length=i.length=r.length=s.length=o.length=a.length=0,c.length=0,h.clear(),d=0,f=0}function L(B){if(B==null)return d;if(typeof B=="string")return h.get(B)||0;let P=0;for(const z of B){const H=h.get(z)||0;H>P&&(P=H)}return P}function _(B,P,z,H,j){if(!(z>=0))return;const rt=z*z,ht=g(Math.floor((B-z)*t)),Y=g(Math.floor((B+z)*t)),Z=g(Math.floor((P-z)*t)),ct=g(Math.floor((P+z)*t));for(let st=ht;st<=Y;st++)for(let bt=Z;bt<=ct;bt++){const St=u.get(x(st,bt));if(St!==void 0)for(let Dt=0;Dt<St.length;Dt++){const Ft=St[Dt];if(!Ph(e[Ft],H))continue;const Ot=r[Ft]-B,D=s[Ft]-P,Me=Ot*Ot+D*D;Me>rt||j(i[Ft],Math.sqrt(Me),r[Ft],s[Ft],o[Ft])}}}function v(B,P,z,H,j){const rt=z+L(H);_(B,P,rt,H,(ht,Y,Z,ct,st)=>{Y<=st+z&&j(ht,Y,Z,ct,st)})}function I(B,P,z,H,j){const rt=z*z;let ht=-1,Y=1/0;const Z=g(Math.floor((B-z)*t)),ct=g(Math.floor((B+z)*t)),st=g(Math.floor((P-z)*t)),bt=g(Math.floor((P+z)*t));for(let St=Z;St<=ct;St++)for(let Dt=st;Dt<=bt;Dt++){const Ft=u.get(x(St,Dt));if(Ft!==void 0)for(let Ot=0;Ot<Ft.length;Ot++){const D=Ft[Ot];if(!Ph(e[D],H))continue;const Me=r[D]-B,kt=s[D]-P,Gt=Me*Me+kt*kt;if(Gt>rt||Gt>=Y)continue;const wt=Math.sqrt(Gt);j&&!j(i[D],wt,r[D],s[D],o[D])||(ht=D,Y=Gt)}}return ht<0?null:{type:e[ht],id:i[ht],x:r[ht],z:s[ht],extent:o[ht],dist:Math.sqrt(Y)}}function U(B,P,z,H,j){return I(B,P,z+L(H),H,(rt,ht,Y,Z,ct)=>ht<=ct+z&&(!j||j(rt,ht,Y,Z,ct)))}function N(B,P,z,H,j){let rt=0;return _(B,P,z,H,(ht,Y,Z,ct,st)=>{(!j||j(ht,Y,Z,ct,st))&&rt++}),rt}function W(B,P,z,H,j=[]){return j.length=0,_(B,P,z,H,rt=>{j.push(rt)}),j}function F(){let B=0,P=0;for(const z of u.values())P+=z.length,z.length>B&&(B=z.length);return{entries:f,cells:u.size,cellSize:n,maxBucket:B,meanBucket:u.size?P/u.size:0}}return{cellSize:n,insert:S,move:y,remove:w,has:M,clear:A,maxExtent:L,forEachInRadius:_,forEachWithin:v,nearest:I,nearestWithin:U,countInRadius:N,collectInRadius:W,stats:F,get size(){return f}}}const en=lE();let sl=[];function Of(){return sl}function uE(n){en.clear();for(let t=0;t<n.length;t++){const e=n[t];en.insert("grass",t,e.x,e.z,e.w)}for(let t=0;t<$i.length;t++){const e=$i[t];en.insert("mushroom",t,e.x,e.z,Nl(e))}for(let t=0;t<Ki.length;t++){const e=Ki[t];en.insert("rock",t,e.x,e.z,e.r)}for(let t=0;t<zn.length;t++){const e=zn[t];en.insert("resource",t,e.x,e.z,e.r)}}function Bf(){const n=new Te;n.name="world";const t=MM();for(const d of t.doorLights)yn(d.p,d.c);const e=pS(t.rooms),i=xS(),r=PM();n.add(r);const s=DM();n.add(s.mesh);const o=NM();n.add(o.group);const a=GM({});n.add(a.mesh);const c=ZM();n.add(c.group);const l=GS();n.add(l.group);const u=new Te;u.name="dug",n.add(u),jS(u),sl=a.footprints,uE(sl);function h(d,f,g){a.update(d,f),tE(d),i.update(f),s.update(f),g&&(c.update(g),o.update(g,na()),eS(g.position))}return{group:n,update:h,grassFootprints:a.footprints,resources:l.nodes,rooms:t.rooms,doorLights:t.doorLights,mushrooms:e.mushrooms,rocks:e.rocks}}const ra=Object.freeze(Object.defineProperty({__proto__:null,DIG_GALLERY_LEN:Tf,DIG_GALLERY_R:wf,DIG_SITES_MAX:Vr,LAWN_BOUNDS:be,MAX_BROOD:gs,MUSHROOMS:$i,QUEEN:ne,RESOURCE_NODES:zn,RIG_FOUNDED:Ol,RIG_PROLOGUE:Fl,RIVER:vn,ROCKS:Ki,START:qc,TERRAIN_BOUNDS:ms,TREE:Yt,TUNNEL_BACK:ge,TUNNEL_MOUTH:Ue,TUNNEL_R:Tr,WATER_Y:Kn,advanceDig:Ff,applyNestShading:Ps,canFoundAt:kl,containFoundedNest:nl,containSurface:jc,containUnderground:ea,createWorld:Bf,daylightAt:nS,digProgress:rE,digSites:iE,distanceToWater:ei,foundNest:Pf,foundedMix:na,foundedNestEntry:il,foundedNestFloorY:rl,getFoundedNest:Rf,getGrassFootprints:Of,getRoomBranches:Pl,getUndergroundRadius:fM,getWallHoleAt:Cl,groundNormal:Cs,groundSlope:Hr,groundY:Ut,harvestNode:yf,mushroomCollideR:Nl,nestOrigin:Af,nodesNear:kS,openDigSite:Uf,pitFactorAt:Qc,planDigSite:nE,populateNest:Lf,profileR:ze,riverEdgeAt:Rs,sampleTerrain:EM,sealNest:If,setFoundedMix:vS,shadeAt:vf,soilAt:Dl,sunDir:ia,treeTrunkRadius:qi,treeWalkBranch:Fn,waterDepthAt:Si,worldIndex:en},Symbol.toStringTag,{value:"Module"})),zf=[{hip:[.85,1.5,1.5],rest:[3.6,0,3.4],phase:0},{hip:[-.85,1.5,1.5],rest:[-3.6,0,3.4],phase:.5},{hip:[.95,1.4,.3],rest:[4.3,0,.2],phase:.5},{hip:[-.95,1.4,.3],rest:[-4.3,0,.2],phase:0},{hip:[.85,1.4,-1],rest:[4,0,-3.2],phase:0},{hip:[-.85,1.4,-1],rest:[-4,0,-3.2],phase:.5}],hE=[{hip:[.92,1.5,1.7],rest:[4.1,0,3.9],phase:0},{hip:[-.92,1.5,1.7],rest:[-4.1,0,3.9],phase:.5},{hip:[1.02,1.4,.4],rest:[4.9,0,.3],phase:.5},{hip:[-1.02,1.4,.4],rest:[-4.9,0,.3],phase:0},{hip:[.92,1.4,-1.15],rest:[4.5,0,-3.5],phase:0},{hip:[-.92,1.4,-1.15],rest:[-4.5,0,-3.5],phase:.5}],kf={petiole:{at:[0,1.5,-1.25],r:[.42,.42,.42]},thorax:{at:[0,1.6,.35],r:[.95,.92,1.55]},head:{at:[0,1.62,2.55],r:[1.12,.98,1.05]},eye:{at:[.72,2.05,2.95],r:[.3,.26,.3]},gaster:[{at:[0,1.55,-3.1],r:[1.35,1.3,1.95]}],mandible:{root:[.52,1.42,3.35],tip:[.3,1.22,4.55],gape:.22,r:.15},antenna:{root:[.55,2.05,3.05],elbow:[1.35,3.15,4],tip:[1.75,3.05,5.9],r1:.13,r2:.1},legR:{thigh:.19,shin:.13,knee:.24,foot:.17}},dE={petiole:{at:[0,1.5,-1.2],r:[.5,.5,.62]},thorax:{at:[0,1.62,.5],r:[1.06,1.02,1.75]},head:{at:[0,1.66,2.7],r:[1.18,1.02,1.12]},eye:{at:[.76,2.12,3.1],r:[.3,.26,.3]},gaster:[{at:[0,1.55,-3.2],r:[1.6,1.54,2.1]},{at:[0,1.5,-5.4],r:[1.34,1.3,1.9]}],mandible:{root:[.55,1.45,3.5],tip:[.34,1.2,4.8],gape:.2,r:.17},antenna:{root:[.58,2.1,3.2],elbow:[1.4,3.3,4.2],tip:[1.85,3.2,6.1],r1:.14,r2:.11},legR:{thigh:.2,shin:.14,knee:.3,foot:.19}},Ls={id:"worker",label:"ouvrière",scale:1,legs:zf,body:kf,breathes:!1,colors:{chitinA:9132580,chitinB:4402453,limb:7029792,mandible:13209663,eye:1051654},maxSpeed:15,sprint:1.75,turnRate:9,legLen:[2.7,2.9],stride:7,climbSpeed:20,bodyR:1.5,cam:{dist:36,min:10,max:85}},Gl={id:"digger",label:"creuseuse",scale:1.08,legs:zf,body:{...kf,mandible:{root:[.52,1.42,3.35],tip:[.34,1.1,4.3],gape:.32,r:.27}},breathes:!1,colors:{chitinA:6044440,chitinB:2891278,limb:4664597,mandible:8740650,eye:1051654},maxSpeed:12.5,sprint:1.75,turnRate:6.5,legLen:[2.7,2.9],stride:6,climbSpeed:20,bodyR:1.5,cam:{dist:36,min:10,max:85},digSpeed:.8},Gf={id:"queen",label:"reine fondatrice",scale:2.2,legs:hE,body:dE,breathes:!0,colors:{chitinA:11563558,chitinB:6176022,limb:6176022,mandible:11563558,eye:1051654},maxSpeed:12.5,sprint:1.5,turnRate:4.2,legLen:[2.7,2.9],stride:7,climbSpeed:12,bodyR:1.5,cam:{dist:58,min:16,max:140},nestDescentSpeed:5},fn=Gf,Hl=[Ls,Gf,Gl];function fE(n){return[n.legLen[0]*n.scale,n.legLen[1]*n.scale]}function Hf(n){return n.stride*n.scale}function dn(n){return n.bodyR*n.scale}const Vf=new tt("#393741"),pE=new tt("#241D22"),_s=new ys({color:Vf.clone(),side:Be,depthWrite:!1});_s.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`
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
  `)};_s.customProgramCacheKey=()=>"inverted-hull";function mE(n){_s.color.copy(pE).lerp(Vf,n)}const Lh=new WeakSet;function Wf(n){const t=new Te;return t.name="outline-hull",n.traverse(e=>{if(!e.isMesh||!e.geometry||Lh.has(e))return;Lh.add(e);let i;e.isInstancedMesh?(i=new Jo(e.geometry,_s,e.instanceMatrix.count),i.instanceMatrix=e.instanceMatrix,Object.defineProperty(i,"count",{get:()=>e.count})):i=new Vt(e.geometry,_s),i.castShadow=!1,i.receiveShadow=!1,i.frustumCulled=!1,t.add(i)}),t.renderOrder=-1,t}const Ei=Of,Vl=42,gE=4.5,_E=20,xE=.93;function vE(n){return gE*(n.scale||1)}function co(n){const t=n.profile||fn;return(t.climbSpeed!==void 0?t.climbSpeed:_E)*(n.scale||1)}const ME=6,Xf=.05,SE=(()=>{const n=Fn.point(0),t=Fn.tipPos;return Math.hypot(t[0]-n[0],t[1]-n[1],t[2]-n[2])})();function EE(n){const t=vE(n),e=Ei(),i=en.nearest(n.x,n.z,t,"grass",(a,c)=>c<t&&e[a].h>=Vl);let r=i?{kind:"grass",i:i.id}:null;const s=i?i.dist:t,o=Math.hypot(Yt.x-n.x,Yt.z-n.z)-Yt.w;return o<ME*(n.scale||1)&&o<s&&(r={kind:"tree"}),r}function yE(n,t){n.climb=t.kind==="tree"?{kind:"tree",seg:"trunk",t:.02}:{kind:"grass",i:t.i,t:.03},n.speed=0}function ol(n){let t;if(n.climb.kind==="tree"){const e=Wo(Yt,n.climb.t);t=oe(xi(Yt,n.climb.t),Ct(e.normal,qi(n.climb.t)))}else t=xi(Ei()[n.climb.i],n.climb.t);n.climb=null,n.x=t[0],n.z=t[2],n.y=Ut(t[0],t[2]),n.speed=0}function bE(n,t){if(n.climb){if(n.climb.kind==="grass"){ol(n);return}n.climb.seg==="trunk"&&n.climb.t<=Xf&&ol(n);return}t&&yE(n,t)}function TE(n,t){return n.climb?n.climb.kind==="tree"?n.climb.seg==="trunk"&&n.climb.t<=Xf?"redescendre du tronc":"reculer pour redescendre":"redescendre du brin":t?t.kind==="tree"?"grimper au tronc":"grimper au brin d'herbe":null}function wE(n,t,e){let i=!1,r=null;if(n.climb.kind==="tree")if(n.climb.seg==="trunk"){n.climb.t=nt(n.climb.t+t*(co(n)/Yt.h)*e,0,Fn.splitT);const o=Wo(Yt,n.climb.t),a=oe(xi(Yt,n.climb.t),Ct(o.normal,qi(n.climb.t)));n.x=a[0],n.y=a[1],n.z=a[2],n.climb.t<=5e-4&&t<0?i=!0:n.climb.t>=Fn.splitT&&t>0&&(r="branch")}else{n.climb.u=nt(n.climb.u+t*(co(n)/SE)*e,0,1);const o=Fn.basis(n.climb.u),a=oe(o.pos,Ct(o.up,Fn.radius(n.climb.u)));n.x=a[0],n.y=a[1],n.z=a[2],n.climb.u<=5e-4&&t<0&&(r="trunk")}else{const o=Ei()[n.climb.i];n.climb.t=nt(n.climb.t+t*(co(n)/o.h)*e,0,xE);const a=xi(o,n.climb.t);n.x=a[0],n.y=a[1],n.z=a[2],n.climb.t<=5e-4&&t<0&&(i=!0)}const s=co(n);n.speed=mi(n.speed,Math.abs(t)*s,7,e),n.travel+=Math.abs(t)*s*e,i?ol(n):r==="branch"?(n.climb.seg="branch",n.climb.u=0):r==="trunk"&&(n.climb.seg="trunk",n.climb.t=Fn.splitT)}function AE(n=fn){return n.legs.map(()=>({planted:[0,0,0],from:[0,0,0],to:[0,0,0],swinging:!1,prevP:0}))}function RE(n){if(n.climb){if(n.climb.kind==="tree"){if(n.climb.seg==="trunk"){const c=Wo(Yt,n.climb.t);return{side:c.width,up:c.normal,fwd:c.tangent}}const a=Fn.basis(n.climb.u);return{side:a.side,up:a.up,fwd:a.fwd}}const o=Wo(Ei()[n.climb.i],n.climb.t);return{side:o.width,up:o.normal,fwd:o.tangent}}const t=Cs(n.x,n.z),e=ie([t[0]*.7,1,t[2]*.7]),i=[Math.sin(n.yaw),0,Math.cos(n.yaw)],r=ie($e(e,i)),s=$e(r,e);return{side:r,up:e,fwd:s}}function Wl(n){const t=RE(n),e=n.scale||1,i=1.05*e+n.bob,r=n.climb?oe([n.x,n.y,n.z],Ct(t.up,i)):[n.x,Ut(n.x,n.z)+i,n.z];return{side:Ct(t.side,e),up:Ct(t.up,e),fwd:Ct(t.fwd,e),p:r,basis:t,scale:e}}function xn(n,t){const[e,i,r]=t;return[n.side[0]*e+n.up[0]*i+n.fwd[0]*r+n.p[0],n.side[1]*e+n.up[1]*i+n.fwd[1]*r+n.p[1],n.side[2]*e+n.up[2]*i+n.fwd[2]*r+n.p[2]]}function CE(n,t,e,i,r){const s=Qn(t,n),o=Math.hypot(s[0],s[1],s[2])||1,a=nt(o,.05,e+i-.02),c=Ct(s,1/o),l=(e*e-i*i+a*a)/(2*a),u=Math.sqrt(Math.max(e*e-l*l,0)),h=r[0]*c[0]+r[1]*c[1]+r[2]*c[2],d=ie(Qn(r,Ct(c,h)));return oe(oe(n,Ct(c,l)),Ct(d,u))}function PE(n,t,e){const i=Wl(n),r=i.basis,s=n.profile||fn,o=n.scale||1,a=Hf(s),c=n.travel/a,l=!!n.climb;for(let u=0;u<s.legs.length;u++){const h=s.legs[u],d=t[u],f=xn(i,h.rest);l||(f[1]=Ut(f[0],f[2])),n.legsInit||(d.planted=f.slice(),d.from=f.slice(),d.to=f.slice());let g=(c+h.phase)%1;if(g<0&&(g+=1),g>=.5&&d.prevP<.5){d.swinging=!0,d.from=d.planted.slice();const x=oe(f,Ct(r.fwd,a*.38*nt(n.speed/(16*o),0,1.4)));l||(x[1]=Ut(x[0],x[2])),d.to=x}if(g<.5&&d.prevP>=.5&&(d.swinging=!1,d.planted=d.to.slice()),d.prevP=g,d.swinging){const x=(g-.5)*2,p=Math.sin(x*Math.PI)*1.5*o;d.planted=[Ht(d.from[0],d.to[0],x),Ht(d.from[1],d.to[1],x)+p,Ht(d.from[2],d.to[2],x)]}n.speed<.4*o&&!d.swinging&&(d.planted[0]=mi(d.planted[0],f[0],4,e),d.planted[1]=mi(d.planted[1],f[1],4,e),d.planted[2]=mi(d.planted[2],f[2],4,e))}n.legsInit=!0}function Ih(n,t,e){const i=new Jo(n,t,e);i.instanceMatrix.setUsage(dm),i.count=0,i.frustumCulled=!1;let r=0;return{mesh:i,get used(){return r},get capacity(){return e},allocate(s){if(r+s>e)throw new Error(`instanced pool exhausted: asked for ${s} more slot(s), ${e-r} left of ${e} — bump the capacity this pool was created with (see MAX_ANTS in player/antMesh.js) and re-run scripts/bench-antmesh.mjs`);const o=r;return r+=s,i.count=r,o},setMatrix(s,o){i.setMatrixAt(s,o),i.instanceMatrix.needsUpdate=!0},setColor(s,o){i.setColorAt(s,o),i.instanceColor&&(i.instanceColor.needsUpdate=!0)}}}const Dh=32;function LE(n){const t=n.legs.length;return{sphere:n.body.gaster.length+5+t*2,cyl:6+t*2}}let Mn=null,Sn=null,ss=null;function IE(){if(ss)return;const n=new Qo(1,12,8),t=new Tl(1,1,1,7).translate(0,.5,0),e=new rn({color:16777215,vertexColors:!0,roughness:.55,metalness:.05}),i=Hl.reduce((r,s)=>{const o=LE(s);return{sphere:Math.max(r.sphere,o.sphere),cyl:Math.max(r.cyl,o.cyl)}},{sphere:0,cyl:0});Mn=Ih(n,e,Dh*i.sphere),Sn=Ih(t,e,Dh*i.cyl),Mn.mesh.castShadow=!0,Sn.mesh.castShadow=!0,ss=new Te,ss.name="ant-part-pools",ss.add(Mn.mesh,Sn.mesh)}function Le(n,t){const e=n.allocate(1);return n.setColor(e,DE.set(t)),{pool:n,index:e}}const DE=new tt,Ja=new ee,Uh=new V,Nh=new V,Fh=new V,Oh=new V;function Po(n,t,e,i,r){Uh.set(e[0],e[1],e[2]),Nh.set(i[0],i[1],i[2]),Fh.set(r[0],r[1],r[2]),Ja.makeBasis(Uh,Nh,Fh),Oh.set(t[0],t[1],t[2]),Ja.setPosition(Oh),n.pool.setMatrix(n.index,Ja)}function mr(n,t,e,i){const r=Ye(t,e,i);Po(n,r.p,r.x,r.y,r.z)}function lo(n){return[-n[0],n[1],n[2]]}function Yf(n=fn){IE();const t=n.body,e=n.colors,[i,r]=fE(n),s=t.gaster.map(()=>Le(Mn,e.chitinB)),o=Le(Mn,e.chitinB),a=Le(Mn,e.chitinA),c=Le(Mn,e.chitinA),l=Le(Mn,e.eye),u=Le(Mn,e.eye),h=Le(Sn,e.mandible),d=Le(Sn,e.mandible),f=Le(Sn,e.limb),g=Le(Sn,e.limb),x=Le(Sn,e.limb),p=Le(Sn,e.limb),m=n.legs.map(()=>({thigh:Le(Sn,e.limb),shin:Le(Sn,e.limb),knee:Le(Mn,e.limb),foot:Le(Mn,e.limb)}));function b(E,S,y){const w=Wl(E),M=w.basis,A=w.scale,L=(F,B,P,z=1)=>Po(F,xn(w,B),Ct(M.side,P[0]*A*z),Ct(M.up,P[1]*A*z),Ct(M.fwd,P[2]*A*z)),_=n.breathes?1+Math.sin(y*.55)*.04:1;for(let F=0;F<s.length;F++)L(s[F],t.gaster[F].at,t.gaster[F].r,_);L(o,t.petiole.at,t.petiole.r),L(a,t.thorax.at,t.thorax.r),L(c,t.head.at,t.head.r),L(l,t.eye.at,t.eye.r),L(u,lo(t.eye.at),t.eye.r);const v=t.mandible,I=v.gape+Math.sin(y*3.1)*.06+Math.max(0,Math.min(E.speed,14))*.012,U=[v.tip[0]+I,v.tip[1],v.tip[2]];mr(h,xn(w,v.root),xn(w,U),v.r*A),mr(d,xn(w,lo(v.root)),xn(w,lo(U)),v.r*A);const N=t.antenna;for(const F of[1,-1]){const B=Math.sin(y*2.4+(F>0?0:1.1))*.42,P=Math.cos(y*1.7+(F>0?.4:1.9))*.3,z=ht=>F>0?ht:lo(ht),H=xn(w,z(N.root)),j=xn(w,z([N.elbow[0]+B*.25,N.elbow[1]+P*.3,N.elbow[2]])),rt=xn(w,z([N.tip[0]+B,N.tip[1]+P,N.tip[2]]));mr(F>0?f:x,H,j,N.r1*A),mr(F>0?g:p,j,rt,N.r2*A)}const W=t.legR;for(let F=0;F<n.legs.length;F++){const B=n.legs[F],P=S[F],z=m[F],H=xn(w,B.hip),j=P.planted,rt=B.hip[0]>0?M.side:Ct(M.side,-1),ht=ie([M.up[0]+rt[0]*.75,M.up[1]+rt[1]*.75,M.up[2]+rt[2]*.75]),Y=CE(H,j,i,r,ht);mr(z.thigh,H,Y,W.thigh*A),mr(z.shin,Y,j,W.shin*A);const Z=W.knee*A,ct=W.foot*A;Po(z.knee,Y,[Z,0,0],[0,Z,0],[0,0,Z]),Po(z.foot,j,[ct,0,0],[0,ct,0],[0,0,ct])}}return{group:ss,updatePose:b}}function UE(n,t=fn){const e={},i={camYaw:0,wantPitch:-.19,camDist:t.cam.dist,dragging:!1},r={active:!1,id:-1,ox:0,oy:0,dx:0,dy:0};let s=-1,o=0,a=0,c=!1,l=!1;function u(M){for(let A=0;A<M.length;A++)if(e[M[A]])return!0;return!1}function h(M){e[M.code]=!0,M.code==="KeyE"&&(c=!0),M.code==="KeyH"&&(l=!0),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].indexOf(M.code)>=0&&M.preventDefault()}function d(M){e[M.code]=!1}function f(){for(const M in e)e[M]=!1}function g(M){n.setPointerCapture(M.pointerId),M.pointerType==="touch"&&M.clientX<window.innerWidth*.5?(r.active=!0,r.id=M.pointerId,r.ox=M.clientX,r.oy=M.clientY):(i.dragging=!0,s=M.pointerId,o=M.clientX,a=M.clientY)}function x(M){if(r.active&&M.pointerId===r.id){const A=nt(M.clientX-r.ox,-46,46),L=nt(M.clientY-r.oy,-46,46);r.dx=A/46,r.dy=L/46;return}i.dragging&&M.pointerId===s&&(i.camYaw-=(M.clientX-o)*.006,i.wantPitch=nt(i.wantPitch-(M.clientY-a)*.004,-.85,.55),o=M.clientX,a=M.clientY)}function p(M){r.active&&M.pointerId===r.id&&(r.active=!1,r.dx=0,r.dy=0),M.pointerId===s&&(i.dragging=!1,s=-1)}function m(M){i.camDist=nt(i.camDist+M.deltaY*.03*t.scale,t.cam.min,t.cam.max),M.preventDefault()}window.addEventListener("keydown",h),window.addEventListener("keyup",d),window.addEventListener("blur",f),n.addEventListener("pointerdown",g),n.addEventListener("pointermove",x),n.addEventListener("pointerup",p),n.addEventListener("pointercancel",p),n.addEventListener("wheel",m,{passive:!1});function b(){let M=0,A=0;u(["KeyW","KeyZ","ArrowUp"])&&(A+=1),u(["KeyS","ArrowDown"])&&(A-=1),u(["KeyA","KeyQ","ArrowLeft"])&&(M-=1),u(["KeyD","ArrowRight"])&&(M+=1),r.active&&(M+=r.dx,A-=r.dy);const L=Math.min(Math.hypot(M,A),1),_=!!(e.ShiftLeft||e.ShiftRight);return{ix:M,iy:A,mag:L,sprint:_}}function E(){const M=c;return c=!1,M}function S(){const M=l;return l=!1,M}function y(){return!!e.KeyE}function w(){window.removeEventListener("keydown",h),window.removeEventListener("keyup",d),window.removeEventListener("blur",f),n.removeEventListener("pointerdown",g),n.removeEventListener("pointermove",x),n.removeEventListener("pointerup",p),n.removeEventListener("pointercancel",p),n.removeEventListener("wheel",m)}return{state:i,readMoveIntent:b,consumeInteract:E,consumeHelp:S,isInteractHeld:y,dispose:w}}let Qa=null;function qf(){return Qa||(Qa=Pl()),Qa}function $f(n,t){const e=qf();for(const i in e){const r=e[i],s=n-r.origin[0],o=t-r.origin[2],a=s*r.dir[0]+o*r.dir[2];if(a<=-.5||a>=r.uMax+1)continue;const c=s*r.side[0]+o*r.side[2],l=r.profR(nt(a,0,r.uMax));if(!(Math.abs(c)>=l*.82+2))return r}return null}function Kf(n,t,e){return(t-n.origin[0])*n.dir[0]+(e-n.origin[2])*n.dir[2]}function NE(n){return 2*n.uEnd-n.uMax}function FE(n,t){const e=$f(n,t);return e?e.profR(nt(Kf(e,n,t),0,e.uMax)):ze(t)}function OE(n,t){let e=t,i=t;const r=qf();for(const s in r){const o=r[s],a=nt(1-Math.abs(n-o.origin[2])/o.doorFalloff,0,1);if(a<=0)continue;const c=Ht(t,Math.abs(o.origin[0])+1.5,a);o.dir[0]>0?c>e&&(e=c):c>i&&(i=c)}return{limPos:e,limNeg:i}}const jf=.14;function Zf(n){const t=n(0),e=n(Math.PI),i=n(Math.PI*.5);return{aPos:Math.max(Math.abs(t[0]),1.5),aNeg:Math.max(Math.abs(e[0]),1.5),cy:t[1],b:Math.max(i[1]-t[1],.8)}}function BE(n){return Zf(t=>{const e=ki(t,n,jf);return[e[0],e[1]]})}function zE(n,t){return Zf(e=>{const i=n.pointAt(e,t,jf);return[(i[0]-n.origin[0])*n.side[0]+(i[2]-n.origin[2])*n.side[2],i[1]]})}function Bh(n,t,e){const i=t>=0?n.aPos:n.aNeg,r=Math.min(Math.abs(t)/i,1),s=n.b*Math.max(Math.sqrt(Math.max(0,1-r*r)),.3),o=Math.max(n.cy-s,e+1.6);return{yMin:o,yMax:Math.max(n.cy+s,o+.6)}}function kE(n,t){if(t.br){const u=t.br,h=n[0]-u.origin[0],d=n[2]-u.origin[2],f=h*u.dir[0]+d*u.dir[2],g=h*u.side[0]+d*u.side[2],x=t.uAnt>t.corridorLen?t.corridorLen-1:-.3,p=nt(f,x,u.uMax-.3),m=zE(u,nt(p,0,u.uMax)),b=nt(g,-m.aNeg,m.aPos);n[0]=u.origin[0]+u.dir[0]*p+u.side[0]*b,n[2]=u.origin[2]+u.dir[2]*p+u.side[2]*b;const E=Bh(m,b,Ut(n[0],n[2]));return n[1]=nt(n[1],E.yMin,E.yMax),Math.hypot(p-f,b-g)}const e=n[2],i=n[0],r=nt(e,ge+5,Ue+3);if(r>-14){const u=ze(r)*.82*(1+Math.pow((r+14)/17,2)*.9),h=nt(i,-u,u);return n[0]=h,n[2]=r,n[1]=Math.max(n[1],Ut(h,r)+2.2),Math.hypot(h-i,r-e)}const s=BE(r),{limPos:o,limNeg:a}=OE(r,Math.max(ze(r)*.82-1.6,3)),c=nt(i,-Math.max(a,s.aNeg),Math.max(o,s.aPos));n[0]=c,n[2]=r;const l=Bh(s,c,Ut(c,r));return n[1]=nt(n[1],l.yMin,l.yMax),Math.hypot(c-i,r-e)}const uo=10.5;function GE(n){const t=Ut(ne[0],ne[2]);if(n[1]>t+8.5)return;const e=n[0]-ne[0],i=n[2]-ne[2],r=Math.hypot(e,i);if(!(r>=uo)){if(r<.001){n[0]+=uo;return}n[0]=ne[0]+e/r*uo,n[2]=ne[2]+i/r*uo}}function Jf(n){const t=$f(n.x,n.z);if(!t)return{br:null};const e=Kf(t,n.x,n.z);return{br:t,uAnt:e,corridorLen:NE(t)}}function Xl(n,t,e){return t.z<Ue-2?(GE(n),kE(n,e||Jf(t))):(n[1]=Math.max(n[1],Ut(n[0],n[2])+2.2),0)}function Qf(n,t,e,i,r=1){return[n[0]-Math.sin(t)*Math.cos(e)*i,n[1]-Math.sin(e)*i+3.4*r,n[2]-Math.cos(t)*Math.cos(e)*i]}const zh=8,HE=6,tp=.9,VE=[0,.25,.5,.8],kh=-1.25;function WE(n,t,e,i,r,s){let o=i,a=1/0;const c=Math.min(HE*(r.scale||1),i);for(let l=0;l<=zh;l++){const u=Ht(i,c,l/zh),h=Xl(Qf(n,t,e,u,r.scale||1),r,s);if(h<=tp)return{d:u,err:h};h<a&&(a=h,o=u)}return{d:o,err:a}}function XE(n,t,e,i,r,s){let o=null;for(const a of VE){const c=Math.max(e-a,kh),l=WE(n,t,c,i,r,s);if(l.err<=tp)return{pitch:c,d:l.d};if((!o||l.err<o.err)&&(o={pitch:c,d:l.d,err:l.err}),c<=kh)break}return o}function YE(n,t,e,i){const r=n.scale||1,s=n.climb?[n.x,n.y+2*r,n.z]:[n.x,Ut(n.x,n.z)+2.6*r,n.z],o=n.z<Ue-2,a=o?Jf(n):null,c=o?FE(n.x,n.z):Tr,l=o?Math.min(i,Math.max(13.5*r,c*1.5)):i,u=o?XE(s,t,e,l,n,a):{pitch:e,d:l},h=Qf(s,t,u.pitch,u.d,r);Xl(h,n,a);const d=[s[0]+Math.sin(n.yaw)*3*r,s[1]+.4*r,s[2]+Math.cos(n.yaw)*3*r];return{eye:h,aim:d}}function qE(n){const t={eye:null,aim:null};function e(i,r,s,o,a){const c=YE(i,r,s,o);t.eye||(t.eye=c.eye.slice(),t.aim=c.aim.slice());const l=6.5;for(let u=0;u<3;u++)t.eye[u]=mi(t.eye[u],c.eye[u],l,a),t.aim[u]=mi(t.aim[u],c.aim[u],l*1.4,a);Xl(t.eye,i),n.position.set(t.eye[0],t.eye[1],t.eye[2]),n.lookAt(new V(t.aim[0],t.aim[1],t.aim[2]))}return t.update=e,t}let $E=1;function KE(){return $E++}function jE(n,t,e,i,r={}){return{id:r.id??KE(),profileId:n,x:t,y:e,z:i,yaw:r.yaw??0,speed:0,travel:0,bob:0,climb:null,legsInit:!1,scale:r.scale??1,controlled:!!r.controlled,goal:r.goal??null}}const tc=Object.freeze({wishX:0,wishZ:0,mag:0,sprint:!1});function ZE(n,t,e,i){if(!e||e.type!=="patrol")return tc;if(e.waitT>0)return e.waitT=Math.max(0,e.waitT-i),tc;const r=e.target==="a"?e.a:e.b,s=r[0]-n,o=r[1]-t,a=Math.hypot(s,o);return a<=e.arriveR?(e.target=e.target==="a"?"b":"a",e.waitT=e.waitFor,tc):{wishX:s/a,wishZ:o/a,mag:1,sprint:!1}}function ep(n,t,e,i){const r=(t-n+Math.PI*3)%(Math.PI*2)-Math.PI;return n+r*(1-Math.exp(-e*i))}function JE(n){return n.w*.75}const np=.01,Gh=xi(Yt,np),QE=qi(np)*.88,ip=dn(fn)*2+.6,ty=ip+.2,ey=14;function ny(n,t,e,i){for(let r=.3;r<=ey;r+=.3){const s=n+e*r,o=t+i*r,a=ea(s,o);if(Math.hypot(a[0]-s,a[1]-o)>.05)return r}return 1/0}const rp=[];for(let n=0;n<8;n++)rp.push([Math.cos(n*Math.PI/4),Math.sin(n*Math.PI/4)]);function iy(n,t,e){let i=0,r=1/0;const s=rp.map(([c,l],u)=>{const h=ny(n,t,c,l);return h<r&&(r=h,i=u),h});if(r===1/0||r-e>=ty)return e;const o=Math.max(e,r+.3);return s[(i+4)%8]-o<ip?0:o}const ry=1;let ec=null;function sy(){return ec||(ec=Object.values(Pl())),ec}function oy(n,t){for(const e of sy()){const i=n-e.origin[0],r=t-e.origin[2],s=i*e.dir[0]+r*e.dir[2];if(s<=-.5||s>=e.uMax+1)continue;const o=i*e.side[0]+r*e.side[2],a=Math.max(e.profR(nt(s,0,e.uMax))*.82-1.2,2.2);if(!(Math.abs(o)>=a+3))return a}return Math.max(ze(t)*.82-1.6,3)}function ay(n,t,e,i){return 2*oy(n,t)>=2*i+2*e+ry}let ts=null,Hh=null,sp=0;function op(n=dn(fn)){return(!ts||ts.length!==$i.length||Hh!==n)&&(Hh=n,ts=$i.map(t=>{const e=iy(t.x,t.z,Nl(t));return e>0&&ay(t.x,t.z,e,n)?e:0}),sp=ts.reduce((t,e)=>e>t?e:t,0)),ts}function ap(n,t,e,i){if(t<Ue+6){const r=op();en.forEachInRadius(n,t,e+sp,"mushroom",(s,o,a,c)=>{r[s]>0&&i(a,c,r[s])})}if(t>Ue-6){en.forEachWithin(n,t,e,"rock",(s,o,a,c,l)=>i(a,c,l));const r=Ei();en.forEachWithin(n,t,e,"grass",(s,o,a,c)=>{const l=r[s];l.h>=Vl&&i(a,c,JE(l))}),i(Gh[0],Gh[2],QE)}}function cy(n,t,e=0){let i=0;return ap(n,t,e,(r,s,o)=>{const a=o+e-Math.hypot(n-r,t-s);a>i&&(i=a)}),i}function Vh(n){const t={x:0,z:0,n:0},e=dn(n.profile||fn);return ap(n.x,n.z,e,(i,r,s)=>{const o=s+e,a=n.x-i,c=n.z-r,l=Math.hypot(a,c);if(l>=o||l<.001)return;const u=o-l;t.x+=a/l*u,t.z+=c/l*u,t.n++}),t}function xs(n,t){const e=Vh(n);if(e.n===0)return;const i=e.x/e.n,r=e.z/e.n;n.x+=i,n.z+=r;const s=Math.hypot(i,r);if(s>5e-4){const a=i/s,l=-(r/s),u=a,h=Math.sin(n.yaw)*l+Math.cos(n.yaw)*u,d=t*.6*(h>=0?1:-1);n.x+=l*d,n.z+=u*d}const o=Vh(n);o.n>0&&(n.x+=o.x/o.n,n.z+=o.z/o.n)}const he={OUTSIDE:"outside",DESCENDING:"descending",INSIDE:"inside",ASCENDING:"ascending"},ly=1;function uy(){return{state:he.OUTSIDE,t:0,armed:!0}}function cp(n,t){return{x:n.top.x+(n.bottom.x-n.top.x)*t,y:n.top.y+(n.bottom.y-n.top.y)*t,z:n.top.z+(n.bottom.z-n.top.z)*t}}function hy(n){return Math.hypot(n.bottom.x-n.top.x,n.bottom.y-n.top.y,n.bottom.z-n.top.z)}function lp(n,t,e){return!(n>1e-6)||!(t>0)?1:t*e/n}function Wh(n,t,e,i,r){n.t=Math.min(1,n.t+lp(e,i,r));const s=cp(t,n.t);return n.t>=1&&(n.state=he.INSIDE,n.armed=!1),{state:n.state,pos:s}}function Xh(n,t,e,i,r,s){n.t=Math.max(0,n.t-lp(e,i,r));let o=cp(t,n.t);if(n.t<=0&&(n.state=he.OUTSIDE,n.armed=!1,s&&typeof s.surfaceY=="function")){const a=s.surfaceY(o.x,o.z);Number.isFinite(a)&&(o={x:o.x,y:a,z:o.z})}return{state:n.state,pos:o}}function Yh(n,t,e){const i=t.entry?t.entry():null;if(!i)return n.state=he.OUTSIDE,n.t=0,n.armed=!0,{state:he.OUTSIDE,pos:null};const r=hy(i),s=t.descentSpeed??0,o=t.bodyR??0,a=i.r,c=a+o*(t.armMarginFactor??ly);switch(n.state){case he.OUTSIDE:{const l=Math.hypot(t.x-i.top.x,t.z-i.top.z);return n.armed?l>a?{state:he.OUTSIDE,pos:null}:(n.state=he.DESCENDING,n.t=0,Wh(n,i,r,s,e)):(l>c&&(n.armed=!0),{state:he.OUTSIDE,pos:null})}case he.DESCENDING:return Wh(n,i,r,s,e);case he.INSIDE:{if(typeof t.contain!="function"||typeof t.floorAt!="function")return n.state=he.OUTSIDE,n.armed=!0,{state:he.OUTSIDE,pos:null};const l=t.contain(t.x,t.z);if(!l)return n.state=he.OUTSIDE,n.armed=!0,{state:he.OUTSIDE,pos:null};const[u,h]=l,d=t.floorAt(u,h),f=Math.hypot(u-i.bottom.x,h-i.bottom.z);if(!n.armed)f>c&&(n.armed=!0);else if(f<=a)return n.state=he.ASCENDING,n.t=1,n.armed=!1,Xh(n,i,r,s,e,t);return{state:he.INSIDE,pos:{x:u,y:d,z:h}}}case he.ASCENDING:return Xh(n,i,r,s,e,t);default:return n.state=he.OUTSIDE,n.armed=!0,{state:he.OUTSIDE,pos:null}}}const dy=11;function fy(n,t,e){const i=ie([e[0]-t[0],0,e[2]-t[2]]),r=$e(i,[0,1,0]);return{wishX:i[0]*n.iy+r[0]*n.ix,wishZ:i[2]*n.iy+r[2]*n.ix}}function qh(n,t,e){n.bob=Math.sin(n.travel*(Math.PI*2/Hf(t))*2)*.13*e*nt(n.speed/(8*e),0,1)}function py(n,t,e,i){const r=n.profile||fn,s=n.scale||1,o=dn(r),a=r.maxSpeed*(e.sprint?r.sprint:1),c=r.nestDescentSpeed!=null;if(c&&!n.nestEntry&&(n.nestEntry=uy()),c&&(n.nestEntry.state===he.DESCENDING||n.nestEntry.state===he.ASCENDING)){const u=Yh(n.nestEntry,{x:n.x,z:n.z,entry:il,contain:nl,floorAt:rl,surfaceY:Ut,descentSpeed:r.nestDescentSpeed,bodyR:o},i);n.x=u.pos.x,n.y=u.pos.y,n.z=u.pos.z,n.speed=0,n.bob=0;return}e.mag>.02?(n.yaw=ep(n.yaw,Math.atan2(t.wishX,t.wishZ),r.turnRate,i),n.speed=mi(n.speed,a*e.mag,7,i)):n.speed=mi(n.speed,0,9,i);const l=n.speed*i;if(n.x+=Math.sin(n.yaw)*l,n.z+=Math.cos(n.yaw)*l,n.travel+=l,c&&n.z>=Ue&&(n.nestEntry.state===he.OUTSIDE||n.nestEntry.state===he.INSIDE)){const u=Yh(n.nestEntry,{x:n.x,z:n.z,entry:il,contain:nl,floorAt:rl,surfaceY:Ut,descentSpeed:r.nestDescentSpeed,bodyR:o},i);if(u.pos){n.x=u.pos.x,n.y=u.pos.y,n.z=u.pos.z,u.state===he.INSIDE?qh(n,r,s):(n.speed=0,n.bob=0);return}}if(xs(n,l),n.z<Ue){const[u,h]=ea(n.x,n.z);n.x=u,n.z=h;const d=dy+o,f=n.x-ne[0],g=n.z-ne[2],x=Math.hypot(f,g);if(x<d&&x>.001){const p=f/x,m=g/x;n.x=ne[0]+p*d,n.z=ne[2]+m*d;const b=-m,E=p,S=Math.sin(n.yaw)*b+Math.cos(n.yaw)*E,y=l*.75*(S>=0?1:-1);n.x+=b*y,n.z+=E*y}}else{const u=nt(n.z,be.z0,be.z1);n.x=Math.max(jc(n.x,u)[0],jc(n.x-o,u)[0]+o),n.x=Math.min(n.x,be.x1-o*2),n.z=Math.min(n.z,be.z1-o*2)}n.y=Ut(n.x,n.z),qh(n,r,s)}const my=Object.fromEntries(Hl.map(n=>[n.id,n]));function Lo(n){return my[n]||Hl[0]}function up(n,t,e,i,r={}){const s=jE(n.id,t,e,i,{...r,scale:r.scale??n.scale});return s.profile=n,s.legState=AE(n),en.insert("ant",s.id,t,i,dn(n)),s}function hp(n){en.remove("ant",n.id)}function Io(n,t,e){const i=n.controlled&&e;if(n.climb)wE(n,i?e.climbAxis:0,t);else{const r=i?e.wish:ZE(n.x,n.z,n.goal,t),s=i?e.intent:r;py(n,r,s,t)}PE(n,n.legState,t),en.move("ant",n.id,n.x,n.z,dn(n.profile))}function gy(n,t,e){return{wish:fy(n,t,e),intent:n,climbAxis:nt(n.iy,-1,1)}}const Ie={...ra},$h={terre:{label:"terre meuble",diggable:!0,quality:.9},argile:{label:"argile",diggable:!0,quality:.72},litiere:{label:"litière de feuilles",diggable:!0,quality:.66},sable:{label:"sable",diggable:!0,quality:.38},roche:{label:"roche",diggable:!1,quality:0},boue:{label:"boue détrempée",diggable:!1,quality:0}},al=32,ho=9,Do=18,fo=55,_y=190,xy=26,Kh=55,cl=14,vy={soil:.28,slope:.16,water:.2,shade:.18,food:.18};function dp(n,t,e){const i=Ei();return Ie.worldIndex.countInRadius(n,t,e,"grass",(r,s)=>s<e&&i[r].h>=Vl)}function My(n,t,e){return Ie.worldIndex.countInRadius(n,t,e,"resource",(i,r)=>r<e)}const Sy={soil:"terre",moss:"litiere",sand:"sable",rock:"roche",water:"boue",terre:"terre",argile:"argile",litiere:"litiere",sable:"sable",roche:"roche",boue:"boue"};function Ey(n,t){if(typeof Ie.soilAt=="function"){const e=Ie.soilAt(n,t),i=Sy[typeof e=="string"?e:e&&e.kind],r=$h[i];if(r)return{...r,kind:i,assumed:!1}}return{...$h.terre,kind:"terre",assumed:!0}}function yy(n,t){if(typeof Ie.slopeAt=="function")return{deg:Ie.slopeAt(n,t),assumed:!1};const e=Ie.groundNormal(n,t);return{deg:Math.acos(nt(e[1],-1,1))*180/Math.PI,assumed:!1}}function by(n,t){return typeof Ie.waterDistance=="function"?{d:Ie.waterDistance(n,t),assumed:!1}:typeof Ie.distanceToWater=="function"?{d:Ie.distanceToWater(n,t),assumed:!1}:{d:null,assumed:!0}}function Ty(n,t){if(typeof Ie.shadeAt=="function")return{v:nt(Ie.shadeAt(n,t),0,1),assumed:!1};const e=Ie.TREE,i=e?nt(1-Math.hypot(n-e.x,t-e.z)/90,0,1):0,r=dp(n,t,xy);return{v:nt(i*.8+Math.min(r,8)/8*.5,0,1),assumed:!0}}function wy(n,t){return Array.isArray(Ie.RESOURCE_NODES)?{n:My(n,t,Kh),assumed:!1}:{n:dp(n,t,Kh),assumed:!0}}function Ay(n){if(n>=al)return 0;const t=n<=ho?.78+.22*(n/ho):1-Math.pow((n-ho)/(al-ho),1.4);return nt(t,0,1)}function Ry(n){return n===null?.5:n<=Do?0:n<=fo?nt((n-Do)/(fo-Do),0,1):nt(1-(n-fo)/(_y-fo),.15,1)}const Cy=[{min:78,key:"excellent",label:"excellent"},{min:60,key:"bon",label:"bon"},{min:42,key:"moyen",label:"moyen"},{min:0,key:"ingrat",label:"ingrat"}];function Py(n){return Cy.find(t=>n>=t.min)}function Ly(n){return n>.66?"à l'ombre":n>.3?"mi-ombre":"plein soleil"}function Iy(n){return n>=cl?"ressources abondantes":n>=cl*.4?"quelques ressources":"peu de ressources"}function Uo(n,t){const e=Ey(n,t),i=yy(n,t),r=by(n,t),s=Ty(n,t),o=wy(n,t),a=[{key:"soil",label:e.label,value:e.quality,assumed:e.assumed},{key:"slope",label:`pente ${i.deg.toFixed(0)}°`,value:Ay(i.deg),assumed:i.assumed},{key:"water",label:r.d===null?"eau inconnue":`eau à ${r.d.toFixed(0)}`,value:Ry(r.d),assumed:r.assumed},{key:"shade",label:Ly(s.v),value:nt(s.v*1.25,0,1),assumed:s.assumed},{key:"food",label:Iy(o.n),value:nt(o.n/cl,0,1),assumed:o.assumed}];let c=null;t<Ie.TUNNEL_MOUTH?c={key:"underground",text:"sous terre — rien à fonder ici"}:e.diggable?r.d!==null&&r.d<=Do?c={key:"water",text:"trop près de l'eau — la galerie serait inondée"}:i.deg>=al&&(c={key:"slope",text:`pente ${i.deg.toFixed(0)}° — le sol s'effondrerait`}):c={key:"soil",text:`${e.label} — impossible de creuser`};let l=0;for(const h of a)l+=h.value*vy[h.key];const u=Math.round(nt(l,0,1)*100);return{x:n,z:t,diggable:!c,blocker:c,score:u,grade:Py(u),factors:a,assumed:a.some(h=>h.assumed)}}function Dy(n){return n.diggable?`Site : ${n.grade.label} (${n.score}/100)`:`Site : impossible — ${n.blocker.text}`}function jh(n){return n.factors.slice().sort((t,e)=>t.value-e.value).map(t=>t.assumed?`${t.label} ?`:t.label).join(" · ")}const vi={...ra},xr={graine:"graine",brindille:"brindille",miellat:"miellat"},Uy={graine:["graine","graines"],brindille:["brindille","brindilles"],miellat:["dose de miellat","doses de miellat"]};function Ny(n,t){const e=Uy[n]||[n,n];return`${t} ${t>1?e[1]:e[0]}`}const Fy=[{x:60,z:110,kind:"graine",amount:3},{x:95,z:105,kind:"brindille",amount:3},{x:55,z:120,kind:"miellat",amount:2},{x:100,z:125,kind:"graine",amount:2},{x:45,z:115,kind:"brindille",amount:2},{x:85,z:135,kind:"miellat",amount:2},{x:110,z:110,kind:"graine",amount:2},{x:65,z:135,kind:"brindille",amount:2},{x:40,z:128,kind:"graine",amount:2}].map((n,t)=>({id:9e3+t,r:10,...n}));let fp=!1;function Wr(){return Array.isArray(vi.RESOURCE_NODES)?vi.RESOURCE_NODES:(fp=!0,Fy)}function pp(){return Wr(),fp}function mp(n,t){if(!n)return 0;if(typeof vi.harvestNode=="function")return vi.harvestNode(n.id,t)||0;const e=Math.max(0,Math.min(t,n.amount));return n.amount-=e,e}function Oy(n,t,e=0){const i=Wr();if(i!==vi.RESOURCE_NODES)return By(i,n,t,e);const r=vi.worldIndex.nearestWithin(n,t,e*.6,"resource",s=>i[s].amount>0);return r?i[r.id]:null}function By(n,t,e,i){let r=null,s=1/0;for(let o=0;o<n.length;o++){const a=n[o];if(a.amount<=0)continue;const c=Math.hypot(a.x-t,a.z-e);c<=a.r+i*.6&&c<s&&(s=c,r=a)}return r}const zy=32,Zh=600;function ky(n,t,e){let i=null,r=1/0;for(let s=0;s<n.length;s++){const o=n[s];if(o.amount<=0)continue;const a=Math.hypot(o.x-t,o.z-e);a<r&&(r=a,i=o)}return i}function Gy(n,t){const e=Wr();if(e!==vi.RESOURCE_NODES)return ky(e,n,t);let i=zy;for(;;){const r=vi.worldIndex.nearest(n,t,i,"resource",s=>e[s].amount>0);if(r)return e[r.id];if(i>=Zh)return null;i=Math.min(i*2,Zh)}}const po=new Map;let Jh=null;function gp(n){const t=Wr();if(Jh!==t||po.size!==t.length){Jh=t,po.clear();for(const e of t)po.set(e.id,e)}return po.get(n)||null}const ll=1.8,Yl=16,Yo=5,Hy=.5;function Vy(){const n={carrying:null,cache:null,progress:0,activeId:null,justTook:null,justDropped:null};function t(){n.progress=0,n.activeId=null}function e(f,g){if(n.activeId!==null){const x=gp(n.activeId);if(x&&x.amount>0&&Math.hypot(x.x-f.x,x.z-f.z)<=x.r+g*.6)return x}return Oy(f.x,f.z,g)}function i(f,g){if(n.carrying)return"full";if(!f)return r(g),"idle";if(n.activeId!==f.id&&(n.activeId=f.id,n.progress=0),n.progress+=g/ll,n.progress<1)return"progress";const x=mp(f,1);return t(),x<=0?"empty":(n.carrying={kind:f.kind},n.justTook={kind:f.kind,qty:x,node:f},"taken")}function r(f){if(n.progress<=0){n.activeId=null;return}n.progress=Math.max(0,n.progress-f*Hy/ll),n.progress===0&&(n.activeId=null)}function s(f){return n.cache?Math.hypot(n.cache.x-f.x,n.cache.z-f.z):1/0}function o(f){return n.carrying?!n.cache||s(f)<=Yl:!1}function a(f){if(!o(f))return!1;n.cache||(n.cache={x:f.x,y:Ut(f.x,f.z),z:f.z,items:{},total:0});const g=n.carrying.kind;return n.cache.items[g]=(n.cache.items[g]||0)+1,n.cache.total+=1,n.carrying=null,n.justDropped={kind:g,cache:n.cache},!0}function c(){n.justTook=null,n.justDropped=null}function l(){return n.cache?n.cache.total:0}function u(){return l()>=Yo}function h(){return!n.cache||n.cache.total===0?null:Object.entries(n.cache.items).filter(([,f])=>f>0).map(([f,g])=>Ny(f,g)).join(" · ")}function d(){const f=n.carrying?`Porte : ${xr[n.carrying.kind]}`:"Porte : rien",g=h();return`${f} · Réserve : ${l()}/${Yo}${g?` (${g})`:""}`}return{state:n,target:e,hold:i,release:r,canDrop:o,drop:a,cacheDistance:s,stock:l,enough:u,stockDetail:h,inventoryLine:d,endFrame:c}}const ji={...ra},Qh=4,Wy={rock:"la roche ne se creuse pas",soil:"ce sol ne se creuse pas",water:"trop près de l'eau — la galerie serait inondée",slope:"la pente s'effondrerait",underground:"on ne fonde pas dans une galerie déjà creusée",bounds:"le bord du monde — il faut revenir vers le pré",occupied:"une galerie passe déjà sous ce sol","already-founded":"la colonie est déjà fondée"};function ul(n){return n?Wy[n]||`impossible de creuser ici (${n})`:"impossible de creuser ici"}let hl=null,_p=!1;function td(){return typeof ji.foundNest!="function"||_p}function ds(){if(typeof ji.nestOrigin=="function"){const n=ji.nestOrigin();if(n)return n}return hl}function Rr(){return!!ds()}function ql(n,t){if(Rr())return{ok:!1,reason:"already-founded"};if(typeof ji.canFoundAt=="function"){const i=ji.canFoundAt(n,t)||{};return{ok:!!i.ok,reason:i.reason,assumed:!1}}const e=Uo(n,t);return e.diggable?{ok:!0,assumed:!0}:{ok:!1,reason:e.blocker.key,assumed:!0}}function Xy(n,t){const e=ql(n,t);if(!e.ok)return e;if(typeof ji.foundNest=="function"){const i=ji.foundNest(n,t)||{};return i.ok&&(hl={x:n,z:t}),{ok:!!i.ok,reason:i.reason,assumed:!1}}return _p=!0,hl={x:n,z:t},{ok:!0,assumed:!0}}function ed(n,t,e,i){const r=e-n,s=i-t;if(Math.hypot(r,s)<1)return"ici";const o=s>8?"nord":s<-8?"sud":"",a=r>8?"est":r<-8?"ouest":"";return o&&a?`au ${o}-${a}`:a?`à l'${a}`:`au ${o}`}const vs=3,Yy=25,qy=6,di={NO_NEST:"no-nest",TOO_FAR:"too-far",BROOD_FULL:"brood-full",NOT_ENOUGH_FOOD:"not-enough-food"},$y={[di.NO_NEST]:"pas encore de colonie fondée",[di.TOO_FAR]:"trop loin du couvoir",[di.BROOD_FULL]:"couvain plein — attendre une éclosion",[di.NOT_ENOUGH_FOOD]:`pas assez de réserve (il faut ${vs})`};function Ky(n){return n?$y[n]||`impossible de pondre (${n})`:"impossible de pondre"}function jy(n=qy){return{capacity:n,clutches:[],laidTotal:0,workersAvailable:{},hatchedTotal:0}}const xp="worker";function Zy(n){const t=n.workersAvailable;return n.workersAvailable={},t}function Jy(n,t){if(!n||n.total<t)return!1;let e=t;for(const i of Object.keys(n.items)){if(e<=0)break;const r=n.items[i]||0;if(r<=0)continue;const s=Math.min(r,e);n.items[i]=r-s,e-=s}return n.total-=t,!0}function nd(n,t,e={},i=xp){const{founded:r=!1,inChamber:s=!1}=e;return r?s?n.clutches.length>=n.capacity?{ok:!1,reason:di.BROOD_FULL}:Jy(t,vs)?(n.clutches.push({remaining:Yy,caste:i}),n.laidTotal++,{ok:!0}):{ok:!1,reason:di.NOT_ENOUGH_FOOD}:{ok:!1,reason:di.TOO_FAR}:{ok:!1,reason:di.NO_NEST}}function Qy(n,t){let e=0;const i=[];for(const r of n.clutches){if(r.remaining-=t,r.remaining>0){i.push(r);continue}e++;const s=r.caste||xp;n.workersAvailable[s]=(n.workersAvailable[s]||0)+1}return n.clutches=i,e>0&&(n.hatchedTotal+=e),e}function t1(n){if(n.clutches.length===0)return null;let t=1/0;for(const e of n.clutches)e.remaining<t&&(t=e.remaining);return Math.max(0,t)}function e1(n){return n.clutches.length}const n1={harvest:!0,found:!0};function i1({profile:n=fn}={}){const t=Vy(),e=dn(n);let i=0,r=null,s=0;function o(p,m=3.2){r=p,s=m}function a(p){if(p.climb)return{kind:"climb",climbTarget:null};if(t.state.carrying){const S=t.state.carrying.kind;if(t.canDrop(p))return{kind:"drop",label:t.state.cache?"ajouter au dépôt":"poser ici — ce sera le dépôt"};const y=t.cacheDistance(p),w=t.state.cache;return{kind:"return",label:`rapporter ${xr[S]} au dépôt (${y.toFixed(0)} u ${ed(p.x,p.z,w.x,w.z)})`}}if(t.state.cache&&!Rr()&&t.enough()&&t.cacheDistance(p)<=Yl){const S=ql(p.x,p.z);return{kind:"found",ok:S.ok,reason:S.reason,assumed:S.assumed}}const b=t.target(p,e);if(b)return{kind:"harvest",node:b};const E=EE(p);return E?{kind:"climb",climbTarget:E}:{kind:"none"}}function c(p,m,b,E){const S=a(p);switch(s>0&&(s-=E,s<=0&&(r=null)),(S.kind!=="harvest"||!b)&&t.release(E),(S.kind!=="found"||!b||!S.ok)&&(i=Math.max(0,i-E/Qh)),S.kind){case"harvest":{if(b){const y=t.hold(S.node,E);y==="taken"?o(`elle emporte ${xr[t.state.carrying.kind]}`):y==="empty"&&o("plus rien à prendre ici")}break}case"found":{if(b&&S.ok&&(i+=E/Qh,i>=1)){i=0;const y=Xy(p.x,p.z);o(y.ok?td()?"Colonie fondée ici. (le monde ne creuse pas encore la chambre)":"Colonie fondée ici.":`impossible : ${ul(y.reason)}`,6)}break}case"drop":if(m){const y=t.state.carrying.kind;t.drop(p)&&o(t.stock()===1?`dépôt ouvert ici — ${xr[y]} posée`:`${xr[y]} ajoutée au dépôt (${t.stock()}/${Yo})`)}break;case"climb":m&&bE(p,S.climbTarget);break}return S}function l(p){return`${Math.round(p*100)}%`}function u(p,m){if(m.kind==="climb")return TE(p,m.climbTarget);if(m.kind==="return")return m.label;if(m.kind==="drop")return`E — ${m.label}`;if(m.kind==="harvest"){const b=m.node;return t.state.progress>0?`Récolte… ${l(t.state.progress)}`:`E (maintenir) — récolter ${xr[b.kind]}`}return m.kind==="found"?m.ok?i>0?`Creusement… ${l(i)}`:"E (maintenir) — fonder la colonie ici":`Fonder ici : ${ul(m.reason)}`:null}function h(p){if(Rr()){const E=ds(),S=Math.hypot(E.x-p.x,E.z-p.z),y=S<12?"ici":`à ${S.toFixed(0)} u ${ed(p.x,p.z,E.x,E.z)}`,w=Math.max(0,vs-t.stock()),M=w>0?`encore ${w} unité${w>1?"s":""} de réserve avant de pouvoir pondre`:"la réserve suffit pour pondre";return`Colonie fondée ${y}. Suite : pondre (P) dans le couvoir — ${M}.`+(td()?" [chambre non creusée]":"")}const m=Yo-t.stock();if(t.state.carrying)return t.state.cache?`Objectif : rapporter au dépôt — encore ${m} pour fonder`:"Objectif : poser ce fardeau — le premier dépôt fixe le site de la colonie";if(t.enough())return"Objectif : fonder la colonie sur le dépôt";const b=pp()?" [nœuds provisoires]":"";return`Objectif : récolter ${m} unité${m>1?"s":""} de plus${b}`}function d(){return t.inventoryLine()}function f(){return r}function g(p){return p.kind==="harvest"&&t.state.progress>0?t.state.progress:p.kind==="found"&&i>0?i:null}function x(p,m){switch(m.kind){case"harvest":return{x:m.node.x,z:m.node.z,radius:Math.max(m.node.r,6),blocked:!1};case"found":{const b=t.state.cache;return b?{x:b.x,z:b.z,radius:11,blocked:!m.ok}:null}case"drop":{const b=t.state.cache;return{x:b?b.x:p.x,z:b?b.z:p.z,radius:b?11:7,blocked:!1}}case"return":{const b=t.state.cache;return b?{x:b.x,z:b.z,radius:11,blocked:!1}:null}case"climb":{const b=m.climbTarget;if(!b)return null;if(b.kind==="tree")return{x:Yt.x,z:Yt.z,radius:Yt.w+5,blocked:!1};const E=Ei()[b.i];return E?{x:E.x,z:E.z,radius:5,blocked:!1}:null}default:return null}}return{harvest:t,update:c,resolve:a,promptText:u,objectiveText:h,inventoryText:d,message:f,holdProgress:g,targetMark:x,isHold:p=>!!n1[p.kind],endFrame:()=>t.endFrame()}}const qo={graine:{r:[.95,.78,1.3],color:14270852,emissive:0},brindille:{r:[2.9,.26,.26],color:8016424,emissive:0},miellat:{r:[.9,.88,.9],color:15247420,emissive:3810309}},r1=2,s1=12;let nc=null;function o1(){return nc||(nc=new Qo(1,10,7)),nc}const id=new Map;function vp(n){let t=id.get(n);if(!t){const e=qo[n];t=new rn({color:e.color,emissive:e.emissive,roughness:.7,metalness:.02}),id.set(n,t)}return t}const ic=new ee,rd=new V,sd=new V,od=new V,ad=new V;function Mp(n,t,e,i,r){rd.set(e[0],e[1],e[2]),sd.set(i[0],i[1],i[2]),od.set(r[0],r[1],r[2]),ic.makeBasis(rd,sd,od),ad.set(t[0],t[1],t[2]),ic.setPosition(ad),n.matrix.copy(ic)}function rc(n){const t=new Vt(o1(),vp(n));return t.matrixAutoUpdate=!1,t.castShadow=!0,t.visible=!1,t}function cd(n,t,e,i,r,s=0){const o=qo[t].r.map(l=>l*r1),a=Math.cos(r),c=Math.sin(r);Mp(n,[e,Ut(e,i)+o[1]*.9+s,i],[a*o[0],0,c*o[0]],[0,o[1],0],[-c*o[2],0,a*o[2]]),n.visible=!0}function a1({scene:n,profile:t=fn}){const e=new Te;e.name="gameplay-props",n.add(e);const i={};for(const f of Object.keys(qo))i[f]=rc(f),e.add(i[f]);const r=[];for(let f=0;f<s1;f++){const g=rc("graine");r.push(g),e.add(g)}let s=-1;const o=pp(),a=[];if(o)for(const f of Wr()){const g=[];for(let x=0;x<3;x++){const p=rc(f.kind);e.add(p),g.push(p)}a.push({node:f,clutch:g,drawn:-1})}function c(){for(const f of a){const g=f.node,x=Math.max(0,Math.min(f.clutch.length,g.amount));if(x!==f.drawn){f.drawn=x;for(let p=0;p<f.clutch.length;p++)if(p<x){const m=p/f.clutch.length*Math.PI*2+g.id;cd(f.clutch[p],g.kind,g.x+Math.cos(m)*3.2,g.z+Math.sin(m)*3.2,m)}else f.clutch[p].visible=!1}}}function l(f){if(!f||f.total===s)return;s=f.total;let g=0;for(const[x,p]of Object.entries(f.items))for(let m=0;m<p&&g<r.length;m++,g++){const b=g*2.399,E=1.6+g*1.15,S=r[g];S.material=vp(x),cd(S,x,f.x+Math.cos(b)*E,f.z+Math.sin(b)*E,b*1.7)}for(;g<r.length;g++)r[g].visible=!1}function u(f,g){for(const w of Object.keys(i))i[w].visible=!1;if(!g)return;const x=i[g.kind];if(!x)return;const p=Wl(f),m=p.basis,b=p.scale,E=(f.profile||t).body.mandible,S=[0,E.tip[1]-.15,E.tip[2]+.55],y=qo[g.kind].r;Mp(x,xn(p,S),Ct(m.side,y[0]*b),Ct(m.up,y[1]*b),Ct(m.fwd,y[2]*b)),x.visible=!0}function h(f,g){u(f,g.carrying),l(g.cache),o&&c()}function d(){n.remove(e)}return{group:e,update:h,dispose:d,provisional:o}}const c1="position:fixed;color:#e6d3ab;font:13px/1.5 monospace;pointer-events:none;text-shadow:0 1px 3px rgba(0,0,0,0.9);z-index:5;";function Pn(n,t){const e=document.createElement("div");return e.id=n,e.style.cssText=c1+t,document.body.appendChild(e),e}function l1(){return{setSite(){},setPrompt(){},setObjective(){},setStock(){},setEvent(){},setHold(){},setBrood(){},setDig(){},toggleControls(){},closeControls(){},dispose(){}}}const u1=[["ZQSD / WASD","se déplacer"],["Maj","courir"],["Souris (glisser)","tourner la caméra"],["Molette","reculer / rapprocher la vue"],["E","action — appui court, ou maintenu quand la barre apparaît"],["C","choisir la caste à pondre (ouvrière / creuseuse)"],["P","pondre (dans le couvoir, une fois la colonie fondée)"],["H","afficher / masquer cette aide"]];function h1(){if(typeof document>"u")return l1();const n=Pn("diginfo","left:12px;bottom:162px;font-size:12px;color:#e8c98f;"),t=Pn("event","left:12px;bottom:142px;color:#cfe0a8;"),e=Pn("prompt","left:12px;bottom:122px;font-size:14px;color:#ffe6b0;"),i=Pn("objective","left:12px;bottom:88px;color:#f0dfb8;"),r=Pn("stock","left:12px;bottom:70px;opacity:0.85;"),s=Pn("siteinfo","left:12px;bottom:52px;"),o=Pn("sitedetail","left:12px;bottom:34px;opacity:0.62;font-size:12px;"),a=Pn("broodinfo","left:12px;bottom:14px;font-size:12px;color:#e8c98f;"),c=Pn("hold","left:12px;bottom:112px;width:190px;height:5px;background:rgba(0,0,0,0.45);border-radius:3px;overflow:hidden;"),l=document.createElement("div");l.style.cssText="height:100%;width:0%;background:#ffc46a;border-radius:3px;",c.appendChild(l),c.style.display="none";const u=Pn("controls","right:12px;top:12px;padding:10px 14px;background:rgba(12,10,8,0.62);border-radius:5px;line-height:1.8;");u.innerHTML='<div style="opacity:0.75;margin-bottom:4px">Commandes</div>'+u1.map(([y,w])=>`<div><span style="color:#ffe6b0">${y}</span><span style="opacity:0.72"> — ${w}</span></div>`).join("");let h=!0,d=null,f=null,g=null,x=null,p=null,m=null,b=null,E=null;const S=(y,w,M)=>w===M?M:(y.textContent=w||"",w);return{setSite(y,w,M){y!==d&&(s.textContent=y,s.style.color=M?"#e6d3ab":"#d98b6a",d=y),w!==f&&(o.textContent=w,f=w)},setPrompt(y){g=S(e,y,g)},setObjective(y){x=S(i,y,x)},setStock(y){p=S(r,y,p)},setEvent(y){m=S(t,y,m)},setBrood(y){b=S(a,y,b)},setDig(y){E=S(n,y,E)},setHold(y){const w=y!==null&&y>.001;w!==(c.style.display==="block")&&(c.style.display=w?"block":"none"),w&&(l.style.width=`${Math.min(100,y*100)}%`)},toggleControls(){h=!h,u.style.display=h?"block":"none"},closeControls(){h&&(h=!1,u.style.display="none")},dispose(){for(const y of[i,r,s,o,e,t,a,n,c,u])y.parentNode&&y.parentNode.removeChild(y)}}}const ld=.8,ud=1,sc=40,hd=new tt("#FFB03A").multiplyScalar(1.45),d1=new tt("#E8663A").multiplyScalar(1.35);function f1(){const n=[],t=[];for(let i=0;i<=sc;i++){const r=i/sc*Math.PI*2,s=Math.cos(r),o=Math.sin(r);n.push(s*ld,0,o*ld,s*ud,0,o*ud)}for(let i=0;i<sc;i++){const r=i*2,s=r+1,o=r+2,a=r+3;t.push(r,s,a,r,a,o)}const e=new sn;return e.setAttribute("position",new _e(n,3)),e.setIndex(t),e}function p1(n){const t=new ys({color:hd.clone(),transparent:!0,opacity:.85,side:de,depthTest:!1,depthWrite:!1,fog:!1}),e=new Vt(f1(),t);return e.name="target-marker",e.renderOrder=900,e.frustumCulled=!1,e.visible=!1,n.add(e),{show(i,r,s,o){if(!i){e.visible=!1;return}e.visible=!0,e.position.set(i.x,Ut(i.x,i.z)+.35,i.z);const a=1+.045*Math.sin(o*4.2);e.scale.setScalar(r*a),t.color.copy(s?d1:hd),t.opacity=s?.92:.82+.14*Math.sin(o*4.2)},dispose(){n.remove(e),e.geometry.dispose(),t.dispose()}}}const Qe={SEEK:"seek",HARVEST:"harvest",RETURN:"return",DEPOSIT:"deposit"},m1=1.8;function g1(){return{state:Qe.SEEK,targetNodeId:null,progress:0,carrying:null,justTook:null,justDropped:null}}const cn=Object.freeze({wishX:0,wishZ:0,mag:0,sprint:!1});function dd(n,t,e,i){const r=n-e,s=t-i,o=Math.hypot(r,s);return o<1e-6?cn:{wishX:r/o,wishZ:s/o,mag:1,sprint:!1}}function _1(n,t,e){n.justTook=null,n.justDropped=null;const i=t.bodyR??0,r=t.harvestSeconds??m1;switch(n.state){case Qe.SEEK:{let s=n.targetNodeId!=null?t.nodeById(n.targetNodeId):null;return(!s||s.amount<=0)&&(s=t.findNode(t.x,t.z)),n.targetNodeId=s?s.id:null,s?Math.hypot(s.x-t.x,s.z-t.z)<=s.r+i*.6?(n.state=Qe.HARVEST,n.progress=0,cn):dd(s.x,s.z,t.x,t.z):cn}case Qe.HARVEST:{const s=t.nodeById(n.targetNodeId);if(!s||s.amount<=0)return n.state=Qe.SEEK,n.targetNodeId=null,n.progress=0,cn;if(n.progress+=e/r,n.progress<1)return cn;const o=t.takeFromNode(s,1);return n.progress=0,o<=0?(n.state=Qe.SEEK,n.targetNodeId=null,cn):(n.carrying={kind:s.kind},n.justTook={kind:s.kind,nodeId:s.id},n.state=Qe.RETURN,cn)}case Qe.RETURN:return t.depot?Math.hypot(t.depot.x-t.x,t.depot.z-t.z)<=(t.depotRadius??0)?(n.state=Qe.DEPOSIT,cn):dd(t.depot.x,t.depot.z,t.x,t.z):cn;case Qe.DEPOSIT:return n.carrying?(t.deposit(n.carrying.kind),n.justDropped={kind:n.carrying.kind},n.carrying=null,n.state=Qe.SEEK,n.targetNodeId=null,cn):(n.state=Qe.SEEK,cn);default:return n.state=Qe.SEEK,cn}}const Ln={SEEK_SITE:"seek_site",DIG:"dig",DONE:"done"},x1=1.4;function v1(){return{state:Ln.SEEK_SITE,justArrived:null,justFinished:null}}const In=Object.freeze({wishX:0,wishZ:0,mag:0,sprint:!1});function M1(n,t,e,i){const r=n-e,s=t-i,o=Math.hypot(r,s);return o<1e-6?In:{wishX:r/o,wishZ:s/o,mag:1,sprint:!1}}function fd(n){const t=Math.max(0,Math.min(1,n.progress))*n.length;return{x:n.mouth.x+n.dir.x*t,z:n.mouth.z+n.dir.z*t}}function S1(n,t,e){n.justArrived=null,n.justFinished=null;const r=(t.bodyR??0)*(t.arriveFactor??x1);switch(n.state){case Ln.SEEK_SITE:{if(!t.site)return In;const s=fd(t.site);return Math.hypot(s.x-t.x,s.z-t.z)<=r?(n.state=Ln.DIG,n.justArrived={siteId:t.site.id},In):M1(s.x,s.z,t.x,t.z)}case Ln.DIG:{if(!t.site)return n.state=Ln.SEEK_SITE,In;if(t.site.progress>=1)return n.state=Ln.DONE,n.justFinished={siteId:t.site.id},In;const s=fd(t.site);if(Math.hypot(s.x-t.x,s.z-t.z)>r)return n.state=Ln.SEEK_SITE,In;const a=t.digSpeed??0;if(a<=0)return In;const c=a*e/t.site.length,l=t.advanceDig(t.site.id,c);return l&&l.done&&(n.state=Ln.DONE,n.justFinished={siteId:t.site.id}),In}case Ln.DONE:return In;default:return n.state=Ln.SEEK_SITE,In}}const Sp=dn(Ls),E1=Sp*3,y1=Sp*7,b1=Math.PI*(3-Math.sqrt(5));function T1({scene:n}){const t=[];let e=0;function i(h,d,f,g,x,p){const m=Ut(d,f),b=h.id===Ls.id,E=h.id===Gl.id,S=up(h,d,m,f,{controlled:b||E,yaw:g});xs(S,0),xs(S,0),S.y=Ut(S.x,S.z);const{group:y,updatePose:w}=Yf(h);n.add(y),n.add(Wf(y));const M=E?e++%Vr:null;return t.push({entity:S,caste:h.id,forage:b?g1():null,dig:E?v1():null,digSiteIndex:M,updatePose:w,group:y}),S}function r(h,d,f){const g=Zy(h);let x=0;for(const p of Object.keys(g)){const m=g[p]||0,b=Lo(p);for(let E=0;E<m;E++){const S=t.length,y=S*b1,w=E1+S%5/5*y1;i(b,d+Math.cos(y)*w,f+Math.sin(y)*w,y),x++}}return x}let s=[];function o(h,d,f){const g=f?{x:f.x,z:f.z}:null,x=new Map;for(const p of t){if(p.forage){const m=dn(p.entity.profile),b={x:p.entity.x,z:p.entity.z,bodyR:m,findNode:Gy,nodeById:gp,takeFromNode:mp,depot:g,depotRadius:Yl,deposit(S){f.items[S]=(f.items[S]||0)+1,f.total+=1},harvestSeconds:ll},E=_1(p.forage,b,h);Io(p.entity,h,{wish:{wishX:E.wishX,wishZ:E.wishZ},intent:{mag:E.mag,sprint:E.sprint},climbAxis:0})}else if(p.dig){const m=dn(p.entity.profile),b=Uf(p.digSiteIndex),E=b.ok?b.site:null;if(E){const w=x.get(p.digSiteIndex)||{progress:E.progress,diggers:0};w.progress=E.progress,w.diggers+=1,x.set(p.digSiteIndex,w)}const S={x:p.entity.x,z:p.entity.z,bodyR:m,site:E,digSpeed:p.entity.profile.digSpeed??0,advanceDig:Ff},y=S1(p.dig,S,h);Io(p.entity,h,{wish:{wishX:y.wishX,wishZ:y.wishZ},intent:{mag:y.mag,sprint:y.sprint},climbAxis:0})}else Io(p.entity,h,null);p.updatePose(p.entity,p.entity.legState,d),p.group.position.set(0,0,0)}s=Array.from(x.entries()).map(([p,m])=>({index:p,progress:m.progress,diggers:m.diggers})).sort((p,m)=>p.index-m.index)}function a(){return t.length}function c(){return s}function l(){const h={};for(const d of t)h[d.caste]=(h[d.caste]||0)+1;return h}function u(){for(const h of t)hp(h.entity);t.length=0}return{spawnFromBrood:r,update:o,count:a,countByCaste:l,digSummary:c,dispose:u,workers:t}}const gr=[Ls.id,Gl.id],_r={...ra},pd=[140,170],md=-Math.PI/2,w1=.25,A1=3,R1=gs,gd=6;function C1({scene:n,camera:t,domElement:e,profile:i=fn}){const r=up(i,pd[0],0,pd[1],{id:"player",controlled:!0,yaw:md});r.y=Ut(r.x,r.z),xs(r,0),xs(r,0),r.y=Ut(r.x,r.z);const{group:s,updatePose:o}=Yf(i);n.add(s),n.add(Wf(s));const a=UE(e,i);a.state.camYaw=md;const c=qE(t),l=h1(),u=p1(n),h=i1({profile:i}),d=a1({scene:n,profile:i});c.update(r,a.state.camYaw,a.state.wantPitch,a.state.camDist,0);const f=jy(R1),g=T1({scene:n});let x=!1;function p(H){H.code==="KeyP"&&(x=!0)}window.addEventListener("keydown",p);function m(){const H=x;return x=!1,H}let b=Ls.id,E=!1;function S(H){H.code==="KeyC"&&(E=!0)}window.addEventListener("keydown",S);function y(){const H=E;return E=!1,H}let w=null,M=0,A=null;function L(H){const j=typeof _r.getFoundedNest=="function"?_r.getFoundedNest():null;return j?Math.hypot(H.x-j.chamber.x,H.z-j.chamber.z)<=j.chamber.r:!1}function _(H,j){const rt=Lo(H).label;return j===1?rt:`${rt}s`}function v(){const H=t1(f),j=H===null?"":` · prochaine éclosion : ${Math.ceil(H)} s`,rt=g.countByCaste(),ht=gr.map(Z=>`${rt[Z]||0} ${_(Z,rt[Z]||0)}`).join(", "),Y=`Couvain : ${e1(f)}/${f.capacity}${j} · population : ${ht} · à pondre : ${Lo(b).label} (C pour changer)`;return M>0?`${Y} — ${w}`:`${Y} · P (dans le couvoir) — pondre, coûte ${vs}`}function I(){const H=g.digSummary();return H.length?`Creusement — ${H.map(rt=>{const ht=rt.diggers;return`chantier ${rt.index+1} : ${Math.round(rt.progress*100)}% (${ht} creuseuse${ht===1?"":"s"})`}).join(" · ")}`:null}let U=0,N=null,W=null,F=null;function B(H){U-=H;const j=N?Math.hypot(r.x-N[0],r.z-N[1]):1/0;if((W||F)&&U>0&&j<A1)return;U=w1,N=[r.x,r.z];const rt=ds();if(rt){F||(F=Uo(rt.x,rt.z)),l.setSite(`Nid fondé — site ${F.grade.label} (${F.score}/100)`,jh(F),!0);return}W=Uo(r.x,r.z),l.setSite(Dy(W),jh(W),W.diggable)}function P(H,j){const rt=a.readMoveIntent();a.consumeHelp()&&l.toggleControls();const ht=h.update(r,a.consumeInteract(),a.isInteractHeld(),H);if(Io(r,H,gy(rt,c.eye,c.aim)),o(r,r.legState,j),s.position.set(0,0,0),Vo.position.set(r.x,r.y,r.z),Vo.radius=dn(i),d.update(r,h.harvest.state),y()){const st=gr.indexOf(b);b=gr[(st+1)%gr.length]}if(m()){const st=nd(f,h.harvest.state.cache,{founded:Rr(),inChamber:L(r)},b);M=3.2,st.ok?(w=`Un œuf est pondu — caste : ${Lo(b).label} (${vs} unités prélevées sur la réserve).`,A===null&&(A=0)):w=`Pondre : ${Ky(st.reason)}`}const Y=Qy(f,H);if(Y>0&&M<=0){const st=Object.keys(f.workersAvailable).map(bt=>`${f.workersAvailable[bt]} ${_(bt,f.workersAvailable[bt])}`).join(", ");w=Y===1?`Un œuf a éclos : ${st} prête.`:`${Y} œufs ont éclos : ${st} prêtes.`,M=3.2}M>0&&(M-=H);const Z=ds();Z&&g.spawnFromBrood(f,Z.x,Z.z),g.update(H,j,h.harvest.state.cache),typeof _r.populateNest=="function"&&_r.populateNest(Math.min(f.laidTotal,f.capacity)),A!==null&&(A=Math.min(gd,A+H),typeof _r.setFoundedMix=="function"&&_r.setFoundedMix(A/gd)),B(H),l.setPrompt(h.promptText(r,ht)),l.setObjective(h.objectiveText(r)),l.setStock(h.inventoryText()),l.setEvent(h.message()),l.setHold(h.holdProgress(ht)),l.setBrood(Rr()?v():null),l.setDig(I());const ct=h.targetMark(r,ht);u.show(ct,ct?ct.radius:0,ct?ct.blocked:!1,j),h.harvest.state.carrying&&l.closeControls(),h.endFrame(),!a.state.dragging&&!r.climb&&rt.mag>.02&&(a.state.camYaw=ep(a.state.camYaw,r.yaw,2.2,H)),c.update(r,a.state.camYaw,a.state.wantPitch,a.state.camDist,H)}typeof window<"u"&&(window.__decorPenetration=cy,window.__antRadius=dn(i),window.__site=(H,j)=>Uo(H,j),window.__avatar=i,window.__mushroomRadii=op,window.__grass=Ei(),window.__nodes=Wr,window.__harvest=()=>h.harvest.state,window.__nestOrigin=ds,window.__canFound=(H,j)=>{const rt=ql(H,j);return{...rt,text:ul(rt.reason)}},window.__toWater=ei,window.__brood=f,window.__lay=(H=b)=>nd(f,h.harvest.state.cache,{founded:Rr(),inChamber:L(r)},H),window.__inBroodChamber=()=>L(r),window.__selectedCaste=()=>b,window.__setSelectedCaste=H=>{gr.includes(H)&&(b=H)},window.__selectableCastes=gr,window.__workers=g);function z(){window.removeEventListener("keydown",p),window.removeEventListener("keydown",S),a.dispose(),l.dispose(),u.dispose(),d.dispose(),g.dispose(),hp(r)}return{ant:r,group:s,update:P,dispose:z}}const P1=document.getElementById("app"),Ji=Gv(P1),nn=Hv(),Oe=new Rv;Oe.background=new tt(1709584);Oe.fog=new bl(1709584,40,220);const No=new Nv(12572917,7236152,.85);Oe.add(No);const oc={sky:new tt(4873350),ground:new tt(2367283),intensity:.55},hn=Fl,On=Ol,_d=new tt,xd=new tt,vd=new tt,Md=new tt,es={sky:new tt(hn.hemiSky),ground:new tt(hn.hemiGround),fog:new tt(hn.fog),bg:new tt(hn.sky),sun:new tt(hn.sunColor)},ns={sky:new tt(On.hemiSky),ground:new tt(On.hemiGround),fog:new tt(On.fog),bg:new tt(On.sky),sun:new tt(On.sunColor)},Ge=new Bv(hn.sunColor,hn.sunIntensity);Ge.castShadow=!0;const Is=110,dl=2048,Fo=220,mo=2*Is/dl;Ge.shadow.mapSize.set(dl,dl);Ge.shadow.camera.left=-Is;Ge.shadow.camera.right=Is;Ge.shadow.camera.top=Is;Ge.shadow.camera.bottom=-Is;Ge.shadow.camera.near=1;Ge.shadow.camera.far=Fo*2.4;Ge.shadow.bias=-.0015;Oe.add(Ge);Oe.add(Ge.target);function L1(n){const t=Math.round(n.position.x/mo)*mo,e=Math.round(n.position.z/mo)*mo,i=ia();Ge.target.position.set(t,0,e),Ge.position.set(t+i[0]*Fo,i[1]*Fo,e+i[2]*Fo)}const I1=new tt(1645102),D1=new tt(789270),Ds=Bf();Oe.add(Ds.group);const $l=C1({scene:Oe,camera:nn,domElement:Ji.domElement});Oe.traverse(n=>{const t=Array.isArray(n.material)?n.material:n.material?[n.material]:[];for(const e of t)e.isMeshStandardMaterial&&Ps(e)});window.__renderer=Ji;window.__ant=$l.ant;window.__rooms=Ds.rooms;window.__camera=nn;window.__scene=Oe;window.__nodes=zn;window.__world=Ds;window.__contain=ea;window.__profileR=ze;window.__groundY=Ut;window.__tree=Yt;window.__world6={shadeAt:vf,canFoundAt:kl,foundNest:Pf,nestOrigin:Af,getFoundedNest:Rf,populateNest:Lf,sealNest:If,harvestNode:yf,get nodes(){return zn},foundedMix:na,sunDir:ia,waterDepthAt:Si,distanceToWater:ei};Ji.setResizeCallback(n=>{nn.aspect=n,nn.updateProjectionMatrix()});const Sd=new zv;function Ep(){const n=Math.min(Sd.getDelta(),.05),t=Sd.elapsedTime;Ds.update(n,t,nn),$l.update(n,t),yp(),Ji.render(Oe,nn)}const U1=52,N1=26;function Ed(n,t,e){const i=1-nt((e+24)/40,0,1),r=nt(1-(Math.abs(n)-U1)/30,0,1),s=nt(1-(t-N1)/30,0,1);return i*r*s}function F1(n,t){const e=Math.min(Ed(n.x,n.y,n.z),Ed(t.x,t.y,t.z)),i=Math.min(Qc(n.x,n.y,n.z),Qc(t.x,t.y,t.z));return Math.max(e,i)}function yp(){const n=na();_d.copy(es.sky).lerp(ns.sky,n),xd.copy(es.ground).lerp(ns.ground,n),vd.copy(es.fog).lerp(ns.fog,n),Md.copy(es.bg).lerp(ns.bg,n),Ge.color.copy(es.sun).lerp(ns.sun,n),Ge.intensity=Ht(hn.sunIntensity,On.sunIntensity,n);const t=1-F1(nn.position,$l.ant);Oe.fog.color.copy(I1).lerp(vd,t),Oe.fog.near=Ht(6,Ht(hn.fogNear,On.fogNear,n),t),Oe.fog.far=Ht(135,Ht(hn.fogFar,On.fogFar,n),t),Oe.background.copy(D1).lerp(Md,t),Ji.toneMappingExposure=Ht(1.28,Ht(hn.exposure,On.exposure,n),t),No.color.copy(oc.sky).lerp(_d,t),No.groundColor.copy(oc.ground).lerp(xd,t),No.intensity=Ht(oc.intensity,Ht(hn.hemiIntensity,On.hemiIntensity,n),t),mE(t),L1(nn)}Ji.setAnimationLoop(Ep);window.__frame=Ep;window.__renderView=(n,t,e=0)=>{nn.position.set(n[0],n[1],n[2]),nn.lookAt(t[0],t[1],t[2]),nn.updateMatrixWorld(),Ds.update(1/60,e,nn),yp(),Ji.render(Oe,nn)};
