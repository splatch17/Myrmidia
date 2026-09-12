(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nl="169",jf=0,Vl=1,Zf=2,id=1,rd=2,Vn=3,di=0,Fe=1,ue=2,li=0,gr=1,Wl=2,Xl=3,ql=4,Jf=5,Pi=100,Qf=101,tp=102,ep=103,np=104,ip=200,rp=201,sp=202,op=203,tc=204,ec=205,ap=206,cp=207,lp=208,up=209,hp=210,dp=211,fp=212,pp=213,mp=214,nc=0,ic=1,rc=2,Sr=3,sc=4,oc=5,ac=6,cc=7,sd=0,gp=1,_p=2,ui=0,xp=1,vp=2,Mp=3,od=4,Sp=5,yp=6,Ep=7,ad=300,yr=301,Er=302,lc=303,uc=304,zo=306,Ao=1e3,Ui=1001,hc=1002,qe=1003,bp=1004,As=1005,yn=1006,ea=1007,Ni=1008,$n=1009,cd=1010,ld=1011,ss=1012,il=1013,zi=1014,Un=1015,ds=1016,rl=1017,sl=1018,br=1020,ud=35902,hd=1021,dd=1022,bn=1023,fd=1024,pd=1025,_r=1026,Tr=1027,ol=1028,al=1029,md=1030,cl=1031,ll=1033,oo=33776,ao=33777,co=33778,lo=33779,dc=35840,fc=35841,pc=35842,mc=35843,gc=36196,_c=37492,xc=37496,vc=37808,Mc=37809,Sc=37810,yc=37811,Ec=37812,bc=37813,Tc=37814,wc=37815,Ac=37816,Rc=37817,Cc=37818,Pc=37819,Lc=37820,Ic=37821,uo=36492,Dc=36494,Uc=36495,gd=36283,Nc=36284,Fc=36285,Oc=36286,Tp=3200,_d=3201,xd=0,wp=1,ai="",cn="srgb",gi="srgb-linear",ul="display-p3",ko="display-p3-linear",Ro="linear",le="srgb",Co="rec709",Po="p3",Ki=7680,Yl=519,Ap=512,Rp=513,Cp=514,vd=515,Pp=516,Lp=517,Ip=518,Dp=519,$l=35044,Up=35048,Kl="300 es",Xn=2e3,Lo=2001;class Pr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],na=Math.PI/180,Bc=180/Math.PI;function fs(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]).toLowerCase()}function We(n,t,e){return Math.max(t,Math.min(e,n))}function Np(n,t){return(n%t+t)%t}function ia(n,t,e){return(1-e)*n+e*t}function Fr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ve(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Kt{constructor(t=0,e=0){Kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(We(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,i,r,s,o,a,c,l){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l)}set(t,e,i,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],x=r[0],m=r[3],p=r[6],b=r[1],M=r[4],S=r[7],T=r[2],R=r[5],y=r[8];return s[0]=o*x+a*b+c*T,s[3]=o*m+a*M+c*R,s[6]=o*p+a*S+c*y,s[1]=l*x+u*b+h*T,s[4]=l*m+u*M+h*R,s[7]=l*p+u*S+h*y,s[2]=d*x+f*b+g*T,s[5]=d*m+f*M+g*R,s[8]=d*p+f*S+g*y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,d=a*c-u*s,f=l*s-o*c,g=e*h+i*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=h*x,t[1]=(r*l-u*i)*x,t[2]=(a*i-r*o)*x,t[3]=d*x,t[4]=(u*e-r*c)*x,t[5]=(r*s-a*e)*x,t[6]=f*x,t[7]=(i*c-l*e)*x,t[8]=(o*e-i*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ra.makeScale(t,e)),this}rotate(t){return this.premultiply(ra.makeRotation(-t)),this}translate(t,e){return this.premultiply(ra.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ra=new zt;function Md(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function os(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Fp(){const n=os("canvas");return n.style.display="block",n}const jl={};function ho(n){n in jl||(jl[n]=!0,console.warn(n))}function Op(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function Bp(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function zp(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Zl=new zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jl=new zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Or={[gi]:{transfer:Ro,primaries:Co,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[cn]:{transfer:le,primaries:Co,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ko]:{transfer:Ro,primaries:Po,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Jl),fromReference:n=>n.applyMatrix3(Zl)},[ul]:{transfer:le,primaries:Po,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Jl),fromReference:n=>n.applyMatrix3(Zl).convertLinearToSRGB()}},kp=new Set([gi,ko]),Jt={enabled:!0,_workingColorSpace:gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!kp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Or[t].toReference,r=Or[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Or[n].primaries},getTransfer:function(n){return n===ai?Ro:Or[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Or[t].luminanceCoefficients)}};function xr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function sa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ji;class Gp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ji===void 0&&(ji=os("canvas")),ji.width=t.width,ji.height=t.height;const i=ji.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=os("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=xr(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(xr(e[i]/255)*255):e[i]=xr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Hp=0;class Sd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=fs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(oa(r[o].image)):s.push(oa(r[o]))}else s=oa(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function oa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Gp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vp=0;class Ie extends Pr{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,i=Ui,r=Ui,s=yn,o=Ni,a=bn,c=$n,l=Ie.DEFAULT_ANISOTROPY,u=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=fs(),this.name="",this.source=new Sd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ad)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ao:t.x=t.x-Math.floor(t.x);break;case Ui:t.x=t.x<0?0:1;break;case hc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ao:t.y=t.y-Math.floor(t.y);break;case Ui:t.y=t.y<0?0:1;break;case hc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=ad;Ie.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,i=0,r=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,S=(f+1)/2,T=(p+1)/2,R=(u+d)/4,y=(h+x)/4,A=(g+m)/4;return M>S&&M>T?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=R/i,s=y/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=R/r,s=A/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=y/s,r=A/s),this.set(i,r,s,e),this}let b=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-x)/b,this.z=(d-u)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wp extends Pr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ie(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Sd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends Wp{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class yd extends Ie{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=qe,this.minFilter=qe,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xp extends Ie{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=qe,this.minFilter=qe,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lr{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],f=s[o+1],g=s[o+2],x=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(h!==x||c!==d||l!==f||u!==g){let m=1-a;const p=c*d+l*f+u*g+h*x,b=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const T=Math.sqrt(M),R=Math.atan2(T,p*b);m=Math.sin(m*R)/T,a=Math.sin(a*R)/T}const S=a*b;if(c=c*m+d*S,l=l*m+f*S,u=u*m+g*S,h=h*m+x*S,m===1-a){const T=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=T,l*=T,u*=T,h*=T}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+u*h+c*f-l*d,t[e+1]=c*g+u*d+l*h-a*f,t[e+2]=l*g+u*f+a*d-c*h,t[e+3]=u*g-a*h-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),d=c(i/2),f=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*r+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,e=0,i=0){V.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ql.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ql.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*i),u=2*(a*e-s*r),h=2*(s*i-o*e);return this.x=e+c*l+o*h-a*u,this.y=i+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return aa.copy(this).projectOnVector(t),this.sub(aa)}reflect(t){return this.sub(aa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(We(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const aa=new V,Ql=new Lr;class qi{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,fn):fn.fromBufferAttribute(s,o),fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rs.copy(i.boundingBox)),Rs.applyMatrix4(t.matrixWorld),this.union(Rs)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Br),Cs.subVectors(this.max,Br),Zi.subVectors(t.a,Br),Ji.subVectors(t.b,Br),Qi.subVectors(t.c,Br),Qn.subVectors(Ji,Zi),ti.subVectors(Qi,Ji),Mi.subVectors(Zi,Qi);let e=[0,-Qn.z,Qn.y,0,-ti.z,ti.y,0,-Mi.z,Mi.y,Qn.z,0,-Qn.x,ti.z,0,-ti.x,Mi.z,0,-Mi.x,-Qn.y,Qn.x,0,-ti.y,ti.x,0,-Mi.y,Mi.x,0];return!ca(e,Zi,Ji,Qi,Cs)||(e=[1,0,0,0,1,0,0,0,1],!ca(e,Zi,Ji,Qi,Cs))?!1:(Ps.crossVectors(Qn,ti),e=[Ps.x,Ps.y,Ps.z],ca(e,Zi,Ji,Qi,Cs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const On=[new V,new V,new V,new V,new V,new V,new V,new V],fn=new V,Rs=new qi,Zi=new V,Ji=new V,Qi=new V,Qn=new V,ti=new V,Mi=new V,Br=new V,Cs=new V,Ps=new V,Si=new V;function ca(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Si.fromArray(n,s);const a=r.x*Math.abs(Si.x)+r.y*Math.abs(Si.y)+r.z*Math.abs(Si.z),c=t.dot(Si),l=e.dot(Si),u=i.dot(Si);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const qp=new qi,zr=new V,la=new V;class Ir{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):qp.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zr.subVectors(t,this.center);const e=zr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(zr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(la.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zr.copy(t.center).add(la)),this.expandByPoint(zr.copy(t.center).sub(la))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new V,ua=new V,Ls=new V,ei=new V,ha=new V,Is=new V,da=new V;class Yp{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.origin).addScaledVector(this.direction,e),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){ua.copy(t).add(e).multiplyScalar(.5),Ls.copy(e).sub(t).normalize(),ei.copy(this.origin).sub(ua);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ls),a=ei.dot(this.direction),c=-ei.dot(Ls),l=ei.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=s*u,h>=0)if(d>=-g)if(d<=g){const x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ua).addScaledVector(Ls,d),f}intersectSphere(t,e){Bn.subVectors(t.center,this.origin);const i=Bn.dot(this.direction),r=Bn.dot(Bn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,i,r,s){ha.subVectors(e,t),Is.subVectors(i,t),da.crossVectors(ha,Is);let o=this.direction.dot(da),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ei.subVectors(this.origin,t);const c=a*this.direction.dot(Is.crossVectors(ei,Is));if(c<0)return null;const l=a*this.direction.dot(ha.cross(ei));if(l<0||c+l>o)return null;const u=-a*ei.dot(da);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(t,e,i,r,s,o,a,c,l,u,h,d,f,g,x,m){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l,u,h,d,f,g,x,m)}set(t,e,i,r,s,o,a,c,l,u,h,d,f,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/tr.setFromMatrixColumn(t,0).length(),s=1/tr.setFromMatrixColumn(t,1).length(),o=1/tr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=o*u,f=o*h,g=a*u,x=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=f+g*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,f=c*h,g=l*u,x=l*h;e[0]=d+x*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,f=c*h,g=l*u,x=l*h;e[0]=d-x*a,e[4]=-o*h,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,f=o*h,g=a*u,x=a*h;e[0]=c*u,e[4]=g*l-f,e[8]=d*l+x,e[1]=c*h,e[5]=x*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-d*h,e[8]=g*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*h+g,e[10]=d-x*h}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+x,e[5]=o*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=a*u,e[10]=x*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($p,t,Kp)}lookAt(t,e,i){const r=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),ni.crossVectors(i,je),ni.lengthSq()===0&&(Math.abs(i.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),ni.crossVectors(i,je)),ni.normalize(),Ds.crossVectors(je,ni),r[0]=ni.x,r[4]=Ds.x,r[8]=je.x,r[1]=ni.y,r[5]=Ds.y,r[9]=je.y,r[2]=ni.z,r[6]=Ds.z,r[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],b=i[3],M=i[7],S=i[11],T=i[15],R=r[0],y=r[4],A=r[8],L=r[12],_=r[1],v=r[5],I=r[9],F=r[13],D=r[2],H=r[6],N=r[10],O=r[14],P=r[3],z=r[7],K=r[11],J=r[15];return s[0]=o*R+a*_+c*D+l*P,s[4]=o*y+a*v+c*H+l*z,s[8]=o*A+a*I+c*N+l*K,s[12]=o*L+a*F+c*O+l*J,s[1]=u*R+h*_+d*D+f*P,s[5]=u*y+h*v+d*H+f*z,s[9]=u*A+h*I+d*N+f*K,s[13]=u*L+h*F+d*O+f*J,s[2]=g*R+x*_+m*D+p*P,s[6]=g*y+x*v+m*H+p*z,s[10]=g*A+x*I+m*N+p*K,s[14]=g*L+x*F+m*O+p*J,s[3]=b*R+M*_+S*D+T*P,s[7]=b*y+M*v+S*H+T*z,s[11]=b*A+M*I+S*N+T*K,s[15]=b*L+M*F+S*O+T*J,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+s*c*h-r*l*h-s*a*d+i*l*d+r*a*f-i*c*f)+x*(+e*c*f-e*l*d+s*o*d-r*o*f+r*l*u-s*c*u)+m*(+e*l*h-e*a*f-s*o*h+i*o*f+s*a*u-i*l*u)+p*(-r*a*u-e*c*h+e*a*d+r*o*h-i*o*d+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],b=h*m*l-x*d*l+x*c*f-a*m*f-h*c*p+a*d*p,M=g*d*l-u*m*l-g*c*f+o*m*f+u*c*p-o*d*p,S=u*x*l-g*h*l+g*a*f-o*x*f-u*a*p+o*h*p,T=g*h*c-u*x*c-g*a*d+o*x*d+u*a*m-o*h*m,R=e*b+i*M+r*S+s*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/R;return t[0]=b*y,t[1]=(x*d*s-h*m*s-x*r*f+i*m*f+h*r*p-i*d*p)*y,t[2]=(a*m*s-x*c*s+x*r*l-i*m*l-a*r*p+i*c*p)*y,t[3]=(h*c*s-a*d*s-h*r*l+i*d*l+a*r*f-i*c*f)*y,t[4]=M*y,t[5]=(u*m*s-g*d*s+g*r*f-e*m*f-u*r*p+e*d*p)*y,t[6]=(g*c*s-o*m*s-g*r*l+e*m*l+o*r*p-e*c*p)*y,t[7]=(o*d*s-u*c*s+u*r*l-e*d*l-o*r*f+e*c*f)*y,t[8]=S*y,t[9]=(g*h*s-u*x*s-g*i*f+e*x*f+u*i*p-e*h*p)*y,t[10]=(o*x*s-g*a*s+g*i*l-e*x*l-o*i*p+e*a*p)*y,t[11]=(u*a*s-o*h*s-u*i*l+e*h*l+o*i*f-e*a*f)*y,t[12]=T*y,t[13]=(u*x*r-g*h*r+g*i*d-e*x*d-u*i*m+e*h*m)*y,t[14]=(g*a*r-o*x*r-g*i*c+e*x*c+o*i*m-e*a*m)*y,t[15]=(o*h*r-u*a*r+u*i*c-e*h*c-o*i*d+e*a*d)*y,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,h=a+a,d=s*l,f=s*u,g=s*h,x=o*u,m=o*h,p=a*h,b=c*l,M=c*u,S=c*h,T=i.x,R=i.y,y=i.z;return r[0]=(1-(x+p))*T,r[1]=(f+S)*T,r[2]=(g-M)*T,r[3]=0,r[4]=(f-S)*R,r[5]=(1-(d+p))*R,r[6]=(m+b)*R,r[7]=0,r[8]=(g+M)*y,r[9]=(m-b)*y,r[10]=(1-(d+x))*y,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=tr.set(r[0],r[1],r[2]).length();const o=tr.set(r[4],r[5],r[6]).length(),a=tr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],pn.copy(this);const l=1/s,u=1/o,h=1/a;return pn.elements[0]*=l,pn.elements[1]*=l,pn.elements[2]*=l,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=h,pn.elements[9]*=h,pn.elements[10]*=h,e.setFromRotationMatrix(pn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=Xn){const c=this.elements,l=2*s/(e-t),u=2*s/(i-r),h=(e+t)/(e-t),d=(i+r)/(i-r);let f,g;if(a===Xn)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Lo)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Xn){const c=this.elements,l=1/(e-t),u=1/(i-r),h=1/(o-s),d=(e+t)*l,f=(i+r)*u;let g,x;if(a===Xn)g=(o+s)*h,x=-2*h;else if(a===Lo)g=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const tr=new V,pn=new te,$p=new V(0,0,0),Kp=new V(1,1,1),ni=new V,Ds=new V,je=new V,tu=new te,eu=new Lr;class wn{constructor(t=0,e=0,i=0,r=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(e){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return tu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return eu.setFromEuler(this),this.setFromQuaternion(eu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class Ed{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jp=0;const nu=new V,er=new Lr,zn=new te,Us=new V,kr=new V,Zp=new V,Jp=new Lr,iu=new V(1,0,0),ru=new V(0,1,0),su=new V(0,0,1),ou={type:"added"},Qp={type:"removed"},nr={type:"childadded",child:null},fa={type:"childremoved",child:null};class we extends Pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const t=new V,e=new wn,i=new Lr,r=new V(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new te},normalMatrix:{value:new zt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ed,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return er.setFromAxisAngle(t,e),this.quaternion.multiply(er),this}rotateOnWorldAxis(t,e){return er.setFromAxisAngle(t,e),this.quaternion.premultiply(er),this}rotateX(t){return this.rotateOnAxis(iu,t)}rotateY(t){return this.rotateOnAxis(ru,t)}rotateZ(t){return this.rotateOnAxis(su,t)}translateOnAxis(t,e){return nu.copy(t).applyQuaternion(this.quaternion),this.position.add(nu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(iu,t)}translateY(t){return this.translateOnAxis(ru,t)}translateZ(t){return this.translateOnAxis(su,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Us.copy(t):Us.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(kr,Us,this.up):zn.lookAt(Us,kr,this.up),this.quaternion.setFromRotationMatrix(zn),r&&(zn.extractRotation(r.matrixWorld),er.setFromRotationMatrix(zn),this.quaternion.premultiply(er.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ou),nr.child=t,this.dispatchEvent(nr),nr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qp),fa.child=t,this.dispatchEvent(fa),fa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ou),nr.child=t,this.dispatchEvent(nr),nr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,t,Zp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,Jp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(t.shapes,h)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}we.DEFAULT_UP=new V(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new V,kn=new V,pa=new V,Gn=new V,ir=new V,rr=new V,au=new V,ma=new V,ga=new V,_a=new V,xa=new he,va=new he,Ma=new he;class En{constructor(t=new V,e=new V,i=new V){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),mn.subVectors(t,e),r.cross(mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){mn.subVectors(r,e),kn.subVectors(i,e),pa.subVectors(t,e);const o=mn.dot(mn),a=mn.dot(kn),c=mn.dot(pa),l=kn.dot(kn),u=kn.dot(pa),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,i,r,s,o,a,c){return this.getBarycoord(t,e,i,r,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Gn.x),c.addScaledVector(o,Gn.y),c.addScaledVector(a,Gn.z),c)}static getInterpolatedAttribute(t,e,i,r,s,o){return xa.setScalar(0),va.setScalar(0),Ma.setScalar(0),xa.fromBufferAttribute(t,e),va.fromBufferAttribute(t,i),Ma.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(xa,s.x),o.addScaledVector(va,s.y),o.addScaledVector(Ma,s.z),o}static isFrontFacing(t,e,i,r){return mn.subVectors(i,e),kn.subVectors(t,e),mn.cross(kn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),mn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return En.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return En.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return En.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return En.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return En.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;ir.subVectors(r,i),rr.subVectors(s,i),ma.subVectors(t,i);const c=ir.dot(ma),l=rr.dot(ma);if(c<=0&&l<=0)return e.copy(i);ga.subVectors(t,r);const u=ir.dot(ga),h=rr.dot(ga);if(u>=0&&h<=u)return e.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(ir,o);_a.subVectors(t,s);const f=ir.dot(_a),g=rr.dot(_a);if(g>=0&&f<=g)return e.copy(s);const x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(rr,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return au.subVectors(s,r),a=(h-u)/(h-u+(f-g)),e.copy(r).addScaledVector(au,a);const p=1/(m+x+d);return o=x*p,a=d*p,e.copy(i).addScaledVector(ir,o).addScaledVector(rr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Ns={h:0,s:0,l:0};function Sa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Q{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Jt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Jt.workingColorSpace){if(t=Np(t,1),e=We(e,0,1),i=We(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Sa(o,s,t+1/3),this.g=Sa(o,s,t),this.b=Sa(o,s,t-1/3)}return Jt.toWorkingColorSpace(this,r),this}setStyle(t,e=cn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=cn){const i=bd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xr(t.r),this.g=xr(t.g),this.b=xr(t.b),this}copyLinearToSRGB(t){return this.r=sa(t.r),this.g=sa(t.g),this.b=sa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=cn){return Jt.fromWorkingColorSpace(Ce.copy(this),t),Math.round(We(Ce.r*255,0,255))*65536+Math.round(We(Ce.g*255,0,255))*256+Math.round(We(Ce.b*255,0,255))}getHexString(t=cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Ce.copy(this),e);const i=Ce.r,r=Ce.g,s=Ce.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=cn){Jt.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,i=Ce.g,r=Ce.b;return t!==cn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(Ns);const i=ia(ii.h,Ns.h,e),r=ia(ii.s,Ns.s,e),s=ia(ii.l,Ns.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new Q;Q.NAMES=bd;let tm=0;class ps extends Pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=gr,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tc,this.blendDst=ec,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Q(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(i.blending=this.blending),this.side!==di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==tc&&(i.blendSrc=this.blendSrc),this.blendDst!==ec&&(i.blendDst=this.blendDst),this.blendEquation!==Pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Sr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ms extends ps{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=sd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new V,Fs=new Kt;class Tn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=$l,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Fs.fromBufferAttribute(this,e),Fs.applyMatrix3(t),this.setXY(e,Fs.x,Fs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Fr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array),r=Ve(r,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$l&&(t.usage=this.usage),t}}class Td extends Tn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class wd extends Tn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class me extends Tn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let em=0;const on=new te,ya=new we,sr=new V,Ze=new qi,Gr=new qi,ye=new V;class rn extends Pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Md(t)?wd:Td)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new zt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,i){return on.makeTranslation(t,e,i),this.applyMatrix4(on),this}scale(t,e,i){return on.makeScale(t,e,i),this.applyMatrix4(on),this}lookAt(t){return ya.lookAt(t),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new me(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Ze.setFromBufferAttribute(s),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ir);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const i=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Gr.setFromBufferAttribute(a),this.morphTargetsRelative?(ye.addVectors(Ze.min,Gr.min),Ze.expandByPoint(ye),ye.addVectors(Ze.max,Gr.max),Ze.expandByPoint(ye)):(Ze.expandByPoint(Gr.min),Ze.expandByPoint(Gr.max))}Ze.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)ye.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(ye));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ye.fromBufferAttribute(a,l),c&&(sr.fromBufferAttribute(t,l),ye.add(sr)),r=Math.max(r,i.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<i.count;A++)a[A]=new V,c[A]=new V;const l=new V,u=new V,h=new V,d=new Kt,f=new Kt,g=new Kt,x=new V,m=new V;function p(A,L,_){l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,L),h.fromBufferAttribute(i,_),d.fromBufferAttribute(s,A),f.fromBufferAttribute(s,L),g.fromBufferAttribute(s,_),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const v=1/(f.x*g.y-g.x*f.y);isFinite(v)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(v),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(v),a[A].add(x),a[L].add(x),a[_].add(x),c[A].add(m),c[L].add(m),c[_].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let A=0,L=b.length;A<L;++A){const _=b[A],v=_.start,I=_.count;for(let F=v,D=v+I;F<D;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const M=new V,S=new V,T=new V,R=new V;function y(A){T.fromBufferAttribute(r,A),R.copy(T);const L=a[A];M.copy(L),M.sub(T.multiplyScalar(T.dot(L))).normalize(),S.crossVectors(R,L);const v=S.dot(c[A])<0?-1:1;o.setXYZW(A,M.x,M.y,M.z,v)}for(let A=0,L=b.length;A<L;++A){const _=b[A],v=_.start,I=_.count;for(let F=v,D=v+I;F<D;F+=3)y(t.getX(F+0)),y(t.getX(F+1)),y(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new V,s=new V,o=new V,a=new V,c=new V,l=new V,u=new V,h=new V;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new Tn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new rn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=t(d,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cu=new te,yi=new Yp,Os=new Ir,lu=new V,Bs=new V,zs=new V,ks=new V,Ea=new V,Gs=new V,uu=new V,Hs=new V;class Xt extends we{constructor(t=new rn,e=new ms){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Gs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(Ea.fromBufferAttribute(h,t),o?Gs.addScaledVector(Ea,u):Gs.addScaledVector(Ea.sub(e),u))}e.add(Gs)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Os.copy(i.boundingSphere),Os.applyMatrix4(s),yi.copy(t.ray).recast(t.near),!(Os.containsPoint(yi.origin)===!1&&(yi.intersectSphere(Os,lu)===null||yi.origin.distanceToSquared(lu)>(t.far-t.near)**2))&&(cu.copy(s).invert(),yi.copy(t.ray).applyMatrix4(cu),!(i.boundingBox!==null&&yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,yi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=b,T=M;S<T;S+=3){const R=a.getX(S),y=a.getX(S+1),A=a.getX(S+2);r=Vs(this,p,t,i,l,u,h,R,y,A),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const b=a.getX(m),M=a.getX(m+1),S=a.getX(m+2);r=Vs(this,o,t,i,l,u,h,b,M,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let S=b,T=M;S<T;S+=3){const R=S,y=S+1,A=S+2;r=Vs(this,p,t,i,l,u,h,R,y,A),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const b=m,M=m+1,S=m+2;r=Vs(this,o,t,i,l,u,h,b,M,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function nm(n,t,e,i,r,s,o,a){let c;if(t.side===Fe?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===di,a),c===null)return null;Hs.copy(a),Hs.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Hs);return l<e.near||l>e.far?null:{distance:l,point:Hs.clone(),object:n}}function Vs(n,t,e,i,r,s,o,a,c,l){n.getVertexPosition(a,Bs),n.getVertexPosition(c,zs),n.getVertexPosition(l,ks);const u=nm(n,t,e,i,Bs,zs,ks,uu);if(u){const h=new V;En.getBarycoord(uu,Bs,zs,ks,h),r&&(u.uv=En.getInterpolatedAttribute(r,a,c,l,h,new Kt)),s&&(u.uv1=En.getInterpolatedAttribute(s,a,c,l,h,new Kt)),o&&(u.normal=En.getInterpolatedAttribute(o,a,c,l,h,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new V,materialIndex:0};En.getNormal(Bs,zs,ks,d.normal),u.face=d,u.barycoord=h}return u}class gs extends rn{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(u,3)),this.setAttribute("uv",new me(h,2));function g(x,m,p,b,M,S,T,R,y,A,L){const _=S/y,v=T/A,I=S/2,F=T/2,D=R/2,H=y+1,N=A+1;let O=0,P=0;const z=new V;for(let K=0;K<N;K++){const J=K*v-F;for(let lt=0;lt<H;lt++){const vt=lt*_-I;z[x]=vt*b,z[m]=J*M,z[p]=D,l.push(z.x,z.y,z.z),z[x]=0,z[m]=0,z[p]=R>0?1:-1,u.push(z.x,z.y,z.z),h.push(lt/y),h.push(1-K/A),O+=1}}for(let K=0;K<A;K++)for(let J=0;J<y;J++){const lt=d+J+H*K,vt=d+J+H*(K+1),Y=d+(J+1)+H*(K+1),tt=d+(J+1)+H*K;c.push(lt,vt,tt),c.push(vt,Y,tt),P+=6}a.addGroup(f,P,L),f+=P,d+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function wr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ue(n){const t={};for(let e=0;e<n.length;e++){const i=wr(n[e]);for(const r in i)t[r]=i[r]}return t}function im(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Ad(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const rm={clone:wr,merge:Ue};var sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,om=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends ps{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sm,this.fragmentShader=om,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wr(t.uniforms),this.uniformsGroups=im(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Rd extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=Xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new V,hu=new Kt,du=new Kt;class ln extends Rd{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Bc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bc*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,hu,du),e.subVectors(du,hu)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(na*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const or=-90,ar=1;class am extends we{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ln(or,ar,t,e);r.layers=this.layers,this.add(r);const s=new ln(or,ar,t,e);s.layers=this.layers,this.add(s);const o=new ln(or,ar,t,e);o.layers=this.layers,this.add(o);const a=new ln(or,ar,t,e);a.layers=this.layers,this.add(a);const c=new ln(or,ar,t,e);c.layers=this.layers,this.add(c);const l=new ln(or,ar,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===Xn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Lo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Cd extends Ie{constructor(t,e,i,r,s,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:yr,super(t,e,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class cm extends ki{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Cd(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new gs(5,5,5),s=new fi({name:"CubemapFromEquirect",uniforms:wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fe,blending:li});s.uniforms.tEquirect.value=e;const o=new Xt(r,s),a=e.minFilter;return e.minFilter===Ni&&(e.minFilter=yn),new am(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const ba=new V,lm=new V,um=new zt;class wi{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=ba.subVectors(i,e).cross(lm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ba),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||um.getNormalMatrix(t),r=this.coplanarPoint(ba).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new Ir,Ws=new V;class hl{constructor(t=new wi,e=new wi,i=new wi,r=new wi,s=new wi,o=new wi){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Xn){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],h=r[6],d=r[7],f=r[8],g=r[9],x=r[10],m=r[11],p=r[12],b=r[13],M=r[14],S=r[15];if(i[0].setComponents(c-s,d-l,m-f,S-p).normalize(),i[1].setComponents(c+s,d+l,m+f,S+p).normalize(),i[2].setComponents(c+o,d+u,m+g,S+b).normalize(),i[3].setComponents(c-o,d-u,m-g,S-b).normalize(),i[4].setComponents(c-a,d-h,m-x,S-M).normalize(),e===Xn)i[5].setComponents(c+a,d+h,m+x,S+M).normalize();else if(e===Lo)i[5].setComponents(a,h,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(t){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Ws.x=r.normal.x>0?t.max.x:t.min.x,Ws.y=r.normal.y>0?t.max.y:t.min.y,Ws.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ws)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pd(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function hm(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const x=h[f];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class Go extends rn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=t/a,d=e/c,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const b=p*d-o;for(let M=0;M<l;M++){const S=M*h-s;g.push(S,-b,0),x.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){const M=b+l*p,S=b+l*(p+1),T=b+1+l*(p+1),R=b+1+l*p;f.push(M,S,R),f.push(S,T,R)}this.setIndex(f),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(x,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Go(t.width,t.height,t.widthSegments,t.heightSegments)}}var dm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fm=`#ifdef USE_ALPHAHASH
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
#endif`,pm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_m=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xm=`#ifdef USE_AOMAP
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
#endif`,vm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mm=`#ifdef USE_BATCHING
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
#endif`,Sm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ym=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Em=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tm=`#ifdef USE_IRIDESCENCE
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
#endif`,wm=`#ifdef USE_BUMPMAP
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
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Um=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Nm=`#define PI 3.141592653589793
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
} // validated`,Fm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Om=`vec3 transformedNormal = objectNormal;
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
#endif`,Bm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,km=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vm=`
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
}`,Wm=`#ifdef USE_ENVMAP
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
#endif`,Xm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qm=`#ifdef USE_ENVMAP
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
#endif`,Ym=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$m=`#ifdef USE_ENVMAP
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
#endif`,Km=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qm=`#ifdef USE_GRADIENTMAP
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
}`,t0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,n0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i0=`uniform bool receiveShadow;
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
#endif`,r0=`#ifdef USE_ENVMAP
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
#endif`,s0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l0=`PhysicalMaterial material;
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
#endif`,u0=`struct PhysicalMaterial {
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
}`,h0=`
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
#endif`,d0=`#if defined( RE_IndirectDiffuse )
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
#endif`,f0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,p0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,x0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,S0=`#if defined( USE_POINTS_UV )
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
#endif`,y0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,w0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A0=`#ifdef USE_MORPHTARGETS
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
#endif`,R0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,P0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,L0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,U0=`#ifdef USE_NORMALMAP
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
#endif`,N0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,F0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,k0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,G0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,W0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,X0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,j0=`float getShadowMask() {
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
}`,Z0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J0=`#ifdef USE_SKINNING
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
#endif`,Q0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tg=`#ifdef USE_SKINNING
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
#endif`,eg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ng=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ig=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sg=`#ifdef USE_TRANSMISSION
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
#endif`,og=`#ifdef USE_TRANSMISSION
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
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ug=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dg=`uniform sampler2D t2D;
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
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`#include <common>
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
}`,xg=`#if DEPTH_PACKING == 3200
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
}`,vg=`#define DISTANCE
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
}`,Mg=`#define DISTANCE
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
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`uniform float scale;
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
}`,bg=`uniform vec3 diffuse;
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
}`,Tg=`#include <common>
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
}`,wg=`uniform vec3 diffuse;
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
}`,Ag=`#define LAMBERT
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
}`,Rg=`#define LAMBERT
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
}`,Cg=`#define MATCAP
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
}`,Pg=`#define MATCAP
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
}`,Lg=`#define NORMAL
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
}`,Ig=`#define NORMAL
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
}`,Dg=`#define PHONG
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
}`,Ug=`#define PHONG
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
}`,Ng=`#define STANDARD
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
}`,Fg=`#define STANDARD
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
}`,Og=`#define TOON
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
}`,Bg=`#define TOON
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
}`,zg=`uniform float size;
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
}`,kg=`uniform vec3 diffuse;
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
}`,Gg=`#include <common>
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
}`,Hg=`uniform vec3 color;
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
}`,Vg=`uniform float rotation;
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
}`,Wg=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:dm,alphahash_pars_fragment:fm,alphamap_fragment:pm,alphamap_pars_fragment:mm,alphatest_fragment:gm,alphatest_pars_fragment:_m,aomap_fragment:xm,aomap_pars_fragment:vm,batching_pars_vertex:Mm,batching_vertex:Sm,begin_vertex:ym,beginnormal_vertex:Em,bsdfs:bm,iridescence_fragment:Tm,bumpmap_pars_fragment:wm,clipping_planes_fragment:Am,clipping_planes_pars_fragment:Rm,clipping_planes_pars_vertex:Cm,clipping_planes_vertex:Pm,color_fragment:Lm,color_pars_fragment:Im,color_pars_vertex:Dm,color_vertex:Um,common:Nm,cube_uv_reflection_fragment:Fm,defaultnormal_vertex:Om,displacementmap_pars_vertex:Bm,displacementmap_vertex:zm,emissivemap_fragment:km,emissivemap_pars_fragment:Gm,colorspace_fragment:Hm,colorspace_pars_fragment:Vm,envmap_fragment:Wm,envmap_common_pars_fragment:Xm,envmap_pars_fragment:qm,envmap_pars_vertex:Ym,envmap_physical_pars_fragment:r0,envmap_vertex:$m,fog_vertex:Km,fog_pars_vertex:jm,fog_fragment:Zm,fog_pars_fragment:Jm,gradientmap_pars_fragment:Qm,lightmap_pars_fragment:t0,lights_lambert_fragment:e0,lights_lambert_pars_fragment:n0,lights_pars_begin:i0,lights_toon_fragment:s0,lights_toon_pars_fragment:o0,lights_phong_fragment:a0,lights_phong_pars_fragment:c0,lights_physical_fragment:l0,lights_physical_pars_fragment:u0,lights_fragment_begin:h0,lights_fragment_maps:d0,lights_fragment_end:f0,logdepthbuf_fragment:p0,logdepthbuf_pars_fragment:m0,logdepthbuf_pars_vertex:g0,logdepthbuf_vertex:_0,map_fragment:x0,map_pars_fragment:v0,map_particle_fragment:M0,map_particle_pars_fragment:S0,metalnessmap_fragment:y0,metalnessmap_pars_fragment:E0,morphinstance_vertex:b0,morphcolor_vertex:T0,morphnormal_vertex:w0,morphtarget_pars_vertex:A0,morphtarget_vertex:R0,normal_fragment_begin:C0,normal_fragment_maps:P0,normal_pars_fragment:L0,normal_pars_vertex:I0,normal_vertex:D0,normalmap_pars_fragment:U0,clearcoat_normal_fragment_begin:N0,clearcoat_normal_fragment_maps:F0,clearcoat_pars_fragment:O0,iridescence_pars_fragment:B0,opaque_fragment:z0,packing:k0,premultiplied_alpha_fragment:G0,project_vertex:H0,dithering_fragment:V0,dithering_pars_fragment:W0,roughnessmap_fragment:X0,roughnessmap_pars_fragment:q0,shadowmap_pars_fragment:Y0,shadowmap_pars_vertex:$0,shadowmap_vertex:K0,shadowmask_pars_fragment:j0,skinbase_vertex:Z0,skinning_pars_vertex:J0,skinning_vertex:Q0,skinnormal_vertex:tg,specularmap_fragment:eg,specularmap_pars_fragment:ng,tonemapping_fragment:ig,tonemapping_pars_fragment:rg,transmission_fragment:sg,transmission_pars_fragment:og,uv_pars_fragment:ag,uv_pars_vertex:cg,uv_vertex:lg,worldpos_vertex:ug,background_vert:hg,background_frag:dg,backgroundCube_vert:fg,backgroundCube_frag:pg,cube_vert:mg,cube_frag:gg,depth_vert:_g,depth_frag:xg,distanceRGBA_vert:vg,distanceRGBA_frag:Mg,equirect_vert:Sg,equirect_frag:yg,linedashed_vert:Eg,linedashed_frag:bg,meshbasic_vert:Tg,meshbasic_frag:wg,meshlambert_vert:Ag,meshlambert_frag:Rg,meshmatcap_vert:Cg,meshmatcap_frag:Pg,meshnormal_vert:Lg,meshnormal_frag:Ig,meshphong_vert:Dg,meshphong_frag:Ug,meshphysical_vert:Ng,meshphysical_frag:Fg,meshtoon_vert:Og,meshtoon_frag:Bg,points_vert:zg,points_frag:kg,shadow_vert:Gg,shadow_frag:Hg,sprite_vert:Vg,sprite_frag:Wg},ct={common:{diffuse:{value:new Q(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Q(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Q(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Q(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Pn={basic:{uniforms:Ue([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Ue([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Q(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Ue([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Q(0)},specular:{value:new Q(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Ue([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Q(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Ue([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Q(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Ue([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Ue([ct.points,ct.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Ue([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Ue([ct.common,ct.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Ue([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Ue([ct.sprite,ct.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Ue([ct.common,ct.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Ue([ct.lights,ct.fog,{color:{value:new Q(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};Pn.physical={uniforms:Ue([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Q(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Q(0)},specularColor:{value:new Q(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Xs={r:0,b:0,g:0},bi=new wn,Xg=new te;function qg(n,t,e,i,r,s,o){const a=new Q(0);let c=s===!0?0:1,l,u,h=null,d=0,f=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function x(b){let M=!1;const S=g(b);S===null?p(a,c):S&&S.isColor&&(p(S,1),M=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,M){const S=g(M);S&&(S.isCubeTexture||S.mapping===zo)?(u===void 0&&(u=new Xt(new gs(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:wr(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,R,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),bi.copy(M.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Xg.makeRotationFromEuler(bi)),u.material.toneMapped=Jt.getTransfer(S.colorSpace)!==le,(h!==S||d!==S.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,f=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Xt(new Go(2,2),new fi({name:"BackgroundMaterial",uniforms:wr(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(S.colorSpace)!==le,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,f=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,M){b.getRGB(Xs,Ad(n)),i.buffers.color.setClear(Xs.r,Xs.g,Xs.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(a,c)},render:x,addToRenderList:m}}function Yg(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(_,v,I,F,D){let H=!1;const N=h(F,I,v);s!==N&&(s=N,l(s.object)),H=f(_,F,I,D),H&&g(_,F,I,D),D!==null&&t.update(D,n.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,S(_,v,I,F),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function c(){return n.createVertexArray()}function l(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function h(_,v,I){const F=I.wireframe===!0;let D=i[_.id];D===void 0&&(D={},i[_.id]=D);let H=D[v.id];H===void 0&&(H={},D[v.id]=H);let N=H[F];return N===void 0&&(N=d(c()),H[F]=N),N}function d(_){const v=[],I=[],F=[];for(let D=0;D<e;D++)v[D]=0,I[D]=0,F[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:I,attributeDivisors:F,object:_,attributes:{},index:null}}function f(_,v,I,F){const D=s.attributes,H=v.attributes;let N=0;const O=I.getAttributes();for(const P in O)if(O[P].location>=0){const K=D[P];let J=H[P];if(J===void 0&&(P==="instanceMatrix"&&_.instanceMatrix&&(J=_.instanceMatrix),P==="instanceColor"&&_.instanceColor&&(J=_.instanceColor)),K===void 0||K.attribute!==J||J&&K.data!==J.data)return!0;N++}return s.attributesNum!==N||s.index!==F}function g(_,v,I,F){const D={},H=v.attributes;let N=0;const O=I.getAttributes();for(const P in O)if(O[P].location>=0){let K=H[P];K===void 0&&(P==="instanceMatrix"&&_.instanceMatrix&&(K=_.instanceMatrix),P==="instanceColor"&&_.instanceColor&&(K=_.instanceColor));const J={};J.attribute=K,K&&K.data&&(J.data=K.data),D[P]=J,N++}s.attributes=D,s.attributesNum=N,s.index=F}function x(){const _=s.newAttributes;for(let v=0,I=_.length;v<I;v++)_[v]=0}function m(_){p(_,0)}function p(_,v){const I=s.newAttributes,F=s.enabledAttributes,D=s.attributeDivisors;I[_]=1,F[_]===0&&(n.enableVertexAttribArray(_),F[_]=1),D[_]!==v&&(n.vertexAttribDivisor(_,v),D[_]=v)}function b(){const _=s.newAttributes,v=s.enabledAttributes;for(let I=0,F=v.length;I<F;I++)v[I]!==_[I]&&(n.disableVertexAttribArray(I),v[I]=0)}function M(_,v,I,F,D,H,N){N===!0?n.vertexAttribIPointer(_,v,I,D,H):n.vertexAttribPointer(_,v,I,F,D,H)}function S(_,v,I,F){x();const D=F.attributes,H=I.getAttributes(),N=v.defaultAttributeValues;for(const O in H){const P=H[O];if(P.location>=0){let z=D[O];if(z===void 0&&(O==="instanceMatrix"&&_.instanceMatrix&&(z=_.instanceMatrix),O==="instanceColor"&&_.instanceColor&&(z=_.instanceColor)),z!==void 0){const K=z.normalized,J=z.itemSize,lt=t.get(z);if(lt===void 0)continue;const vt=lt.buffer,Y=lt.type,tt=lt.bytesPerElement,at=Y===n.INT||Y===n.UNSIGNED_INT||z.gpuType===il;if(z.isInterleavedBufferAttribute){const ot=z.data,Tt=ot.stride,St=z.offset;if(ot.isInstancedInterleavedBuffer){for(let Dt=0;Dt<P.locationSize;Dt++)p(P.location+Dt,ot.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Dt=0;Dt<P.locationSize;Dt++)m(P.location+Dt);n.bindBuffer(n.ARRAY_BUFFER,vt);for(let Dt=0;Dt<P.locationSize;Dt++)M(P.location+Dt,J/P.locationSize,Y,K,Tt*tt,(St+J/P.locationSize*Dt)*tt,at)}else{if(z.isInstancedBufferAttribute){for(let ot=0;ot<P.locationSize;ot++)p(P.location+ot,z.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let ot=0;ot<P.locationSize;ot++)m(P.location+ot);n.bindBuffer(n.ARRAY_BUFFER,vt);for(let ot=0;ot<P.locationSize;ot++)M(P.location+ot,J/P.locationSize,Y,K,J*tt,J/P.locationSize*ot*tt,at)}}else if(N!==void 0){const K=N[O];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(P.location,K);break;case 3:n.vertexAttrib3fv(P.location,K);break;case 4:n.vertexAttrib4fv(P.location,K);break;default:n.vertexAttrib1fv(P.location,K)}}}}b()}function T(){A();for(const _ in i){const v=i[_];for(const I in v){const F=v[I];for(const D in F)u(F[D].object),delete F[D];delete v[I]}delete i[_]}}function R(_){if(i[_.id]===void 0)return;const v=i[_.id];for(const I in v){const F=v[I];for(const D in F)u(F[D].object),delete F[D];delete v[I]}delete i[_.id]}function y(_){for(const v in i){const I=i[v];if(I[_.id]===void 0)continue;const F=I[_.id];for(const D in F)u(F[D].object),delete F[D];delete I[_.id]}}function A(){L(),o=!0,s!==r&&(s=r,l(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:L,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function $g(n,t,e){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),e.update(u,i,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,i,1)}function c(l,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x];for(let x=0;x<d.length;x++)e.update(g,i,d[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Kg(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const y=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(y){return!(y!==bn&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){const A=y===ds&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==$n&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==Un&&!A)}function c(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const y=t.get("EXT_clip_control");y.clipControlEXT(y.LOWER_LEFT_EXT,y.ZERO_TO_ONE_EXT)}const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:T,maxSamples:R}}function jg(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new wi,a=new zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const b=s?0:i,M=b*4;let S=p.clippingState||null;c.value=S,S=u(g,d,M,f);for(let T=0;T!==M;++T)S[T]=e[T];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,f,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=f+x*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,S=f;M!==x;++M,S+=4)o.copy(h[M]).applyMatrix4(b,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Zg(n){let t=new WeakMap;function e(o,a){return a===lc?o.mapping=yr:a===uc&&(o.mapping=Er),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===lc||a===uc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new cm(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class Ld extends Rd{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const fr=4,fu=[.125,.215,.35,.446,.526,.582],Li=20,Ta=new Ld,pu=new Q;let wa=null,Aa=0,Ra=0,Ca=!1;const Ai=(1+Math.sqrt(5))/2,cr=1/Ai,mu=[new V(-Ai,cr,0),new V(Ai,cr,0),new V(-cr,0,Ai),new V(cr,0,Ai),new V(0,Ai,-cr),new V(0,Ai,cr),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class gu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){wa=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wa,Aa,Ra),this._renderer.xr.enabled=Ca,t.scissorTest=!1,qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===yr||t.mapping===Er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wa=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:ds,format:bn,colorSpace:gi,depthBuffer:!1},r=_u(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_u(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jg(s)),this._blurMaterial=Qg(s,t,e)}return r}_compileMaterial(t){const e=new Xt(this._lodPlanes[0],t);this._renderer.compile(e,Ta)}_sceneToCubeUV(t,e,i,r){const a=new ln(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(pu),u.toneMapping=ui,u.autoClear=!1;const f=new ms({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),g=new Xt(new gs,f);let x=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(pu),x=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):b===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const M=this._cubeSize;qs(r,b*M,p>2?M:0,M,M),u.setRenderTarget(r),x&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===yr||t.mapping===Er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Xt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;qs(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Ta)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=mu[(r-s-1)%mu.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Xt(this._lodPlanes[r],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Li-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):Li;m>Li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Li}`);const p=[];let b=0;for(let y=0;y<Li;++y){const A=y/x,L=Math.exp(-A*A/2);p.push(L),y===0?b+=L:y<m&&(b+=2*L)}for(let y=0;y<p.length;y++)p[y]=p[y]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;const S=this._sizeLods[r],T=3*S*(r>M-fr?r-M+fr:0),R=4*(this._cubeSize-S);qs(e,T,R,3*S,2*S),c.setRenderTarget(e),c.render(h,Ta)}}function Jg(n){const t=[],e=[],i=[];let r=n;const s=n-fr+1+fu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>n-fr?c=fu[o-n+fr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,m=2,p=1,b=new Float32Array(x*g*f),M=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let R=0;R<f;R++){const y=R%3*2/3-1,A=R>2?0:-1,L=[y,A,0,y+2/3,A,0,y+2/3,A+1,0,y,A,0,y+2/3,A+1,0,y,A+1,0];b.set(L,x*g*R),M.set(d,m*g*R);const _=[R,R,R,R,R,R];S.set(_,p*g*R)}const T=new rn;T.setAttribute("position",new Tn(b,x)),T.setAttribute("uv",new Tn(M,m)),T.setAttribute("faceIndex",new Tn(S,p)),t.push(T),r>fr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function _u(n,t,e){const i=new ki(n,t,e);return i.texture.mapping=zo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qs(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Qg(n,t,e){const i=new Float32Array(Li),r=new V(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:dl(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function xu(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dl(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function vu(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function dl(){return`

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
	`}function t_(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===lc||c===uc,u=c===yr||c===Er;if(l||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new gu(n)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&r(f)?(e===null&&(e=new gu(n)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function e_(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&ho("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function n_(n,t,e,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)t.update(d[g],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],n.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let x=0;if(f!==null){const b=f.array;x=f.version;for(let M=0,S=b.length;M<S;M+=3){const T=b[M+0],R=b[M+1],y=b[M+2];d.push(T,R,R,y,y,T)}}else if(g!==void 0){const b=g.array;x=g.version;for(let M=0,S=b.length/3-1;M<S;M+=3){const T=M+0,R=M+1,y=M+2;d.push(T,R,R,y,y,T)}}else return;const m=new(Md(d)?wd:Td)(d,1);m.version=x;const p=s.get(h);p&&t.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function i_(n,t,e){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,f){n.drawElements(i,f,s,d*o),e.update(f,i,1)}function l(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,d*o,g),e.update(f,i,g))}function u(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function h(d,f,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,x,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b];for(let b=0;b<x.length;b++)e.update(p,i,x[b])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function r_(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function s_(n,t,e){const i=new WeakMap,r=new he;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let L=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",L)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let M=0;f===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let S=a.attributes.position.count*M,T=1;S>t.maxTextureSize&&(T=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const R=new Float32Array(S*T*4*h),y=new yd(R,S,T,h);y.type=Un,y.needsUpdate=!0;const A=M*4;for(let _=0;_<h;_++){const v=m[_],I=p[_],F=b[_],D=S*T*4*_;for(let H=0;H<v.count;H++){const N=H*A;f===!0&&(r.fromBufferAttribute(v,H),R[D+N+0]=r.x,R[D+N+1]=r.y,R[D+N+2]=r.z,R[D+N+3]=0),g===!0&&(r.fromBufferAttribute(I,H),R[D+N+4]=r.x,R[D+N+5]=r.y,R[D+N+6]=r.z,R[D+N+7]=0),x===!0&&(r.fromBufferAttribute(F,H),R[D+N+8]=r.x,R[D+N+9]=r.y,R[D+N+10]=r.z,R[D+N+11]=F.itemSize===4?r.w:1)}}d={count:h,texture:y,size:new Kt(S,T)},i.set(a,d),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function o_(n,t,e,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=t.get(c,u);if(r.get(h)!==l&&(t.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class Id extends Ie{constructor(t,e,i,r,s,o,a,c,l,u=_r){if(u!==_r&&u!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===_r&&(i=zi),i===void 0&&u===Tr&&(i=br),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:qe,this.minFilter=c!==void 0?c:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Dd=new Ie,Mu=new Id(1,1),Ud=new yd,Nd=new Xp,Fd=new Cd,Su=[],yu=[],Eu=new Float32Array(16),bu=new Float32Array(9),Tu=new Float32Array(4);function Dr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Su[r];if(s===void 0&&(s=new Float32Array(r),Su[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Me(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Se(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ho(n,t){let e=yu[t];e===void 0&&(e=new Int32Array(t),yu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function a_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function c_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;n.uniform2fv(this.addr,t),Se(e,t)}}function l_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;n.uniform3fv(this.addr,t),Se(e,t)}}function u_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;n.uniform4fv(this.addr,t),Se(e,t)}}function h_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Me(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,i))return;Tu.set(i),n.uniformMatrix2fv(this.addr,!1,Tu),Se(e,i)}}function d_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Me(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,i))return;bu.set(i),n.uniformMatrix3fv(this.addr,!1,bu),Se(e,i)}}function f_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Me(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,i))return;Eu.set(i),n.uniformMatrix4fv(this.addr,!1,Eu),Se(e,i)}}function p_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function m_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;n.uniform2iv(this.addr,t),Se(e,t)}}function g_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;n.uniform3iv(this.addr,t),Se(e,t)}}function __(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;n.uniform4iv(this.addr,t),Se(e,t)}}function x_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function v_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;n.uniform2uiv(this.addr,t),Se(e,t)}}function M_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;n.uniform3uiv(this.addr,t),Se(e,t)}}function S_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;n.uniform4uiv(this.addr,t),Se(e,t)}}function y_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Mu.compareFunction=vd,s=Mu):s=Dd,e.setTexture2D(t||s,r)}function E_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Nd,r)}function b_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Fd,r)}function T_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Ud,r)}function w_(n){switch(n){case 5126:return a_;case 35664:return c_;case 35665:return l_;case 35666:return u_;case 35674:return h_;case 35675:return d_;case 35676:return f_;case 5124:case 35670:return p_;case 35667:case 35671:return m_;case 35668:case 35672:return g_;case 35669:case 35673:return __;case 5125:return x_;case 36294:return v_;case 36295:return M_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return y_;case 35679:case 36299:case 36307:return E_;case 35680:case 36300:case 36308:case 36293:return b_;case 36289:case 36303:case 36311:case 36292:return T_}}function A_(n,t){n.uniform1fv(this.addr,t)}function R_(n,t){const e=Dr(t,this.size,2);n.uniform2fv(this.addr,e)}function C_(n,t){const e=Dr(t,this.size,3);n.uniform3fv(this.addr,e)}function P_(n,t){const e=Dr(t,this.size,4);n.uniform4fv(this.addr,e)}function L_(n,t){const e=Dr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function I_(n,t){const e=Dr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function D_(n,t){const e=Dr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function U_(n,t){n.uniform1iv(this.addr,t)}function N_(n,t){n.uniform2iv(this.addr,t)}function F_(n,t){n.uniform3iv(this.addr,t)}function O_(n,t){n.uniform4iv(this.addr,t)}function B_(n,t){n.uniform1uiv(this.addr,t)}function z_(n,t){n.uniform2uiv(this.addr,t)}function k_(n,t){n.uniform3uiv(this.addr,t)}function G_(n,t){n.uniform4uiv(this.addr,t)}function H_(n,t,e){const i=this.cache,r=t.length,s=Ho(e,r);Me(i,s)||(n.uniform1iv(this.addr,s),Se(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Dd,s[o])}function V_(n,t,e){const i=this.cache,r=t.length,s=Ho(e,r);Me(i,s)||(n.uniform1iv(this.addr,s),Se(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Nd,s[o])}function W_(n,t,e){const i=this.cache,r=t.length,s=Ho(e,r);Me(i,s)||(n.uniform1iv(this.addr,s),Se(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Fd,s[o])}function X_(n,t,e){const i=this.cache,r=t.length,s=Ho(e,r);Me(i,s)||(n.uniform1iv(this.addr,s),Se(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Ud,s[o])}function q_(n){switch(n){case 5126:return A_;case 35664:return R_;case 35665:return C_;case 35666:return P_;case 35674:return L_;case 35675:return I_;case 35676:return D_;case 5124:case 35670:return U_;case 35667:case 35671:return N_;case 35668:case 35672:return F_;case 35669:case 35673:return O_;case 5125:return B_;case 36294:return z_;case 36295:return k_;case 36296:return G_;case 35678:case 36198:case 36298:case 36306:case 35682:return H_;case 35679:case 36299:case 36307:return V_;case 35680:case 36300:case 36308:case 36293:return W_;case 36289:case 36303:case 36311:case 36292:return X_}}class Y_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=w_(e.type)}}class $_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=q_(e.type)}}class K_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const Pa=/(\w+)(\])?(\[|\.)?/g;function wu(n,t){n.seq.push(t),n.map[t.id]=t}function j_(n,t,e){const i=n.name,r=i.length;for(Pa.lastIndex=0;;){const s=Pa.exec(i),o=Pa.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){wu(e,l===void 0?new Y_(a,n,t):new $_(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new K_(a),wu(e,h)),e=h}}}class fo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);j_(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Au(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Z_=37297;let J_=0;function Q_(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function tx(n){const t=Jt.getPrimaries(Jt.workingColorSpace),e=Jt.getPrimaries(n);let i;switch(t===e?i="":t===Po&&e===Co?i="LinearDisplayP3ToLinearSRGB":t===Co&&e===Po&&(i="LinearSRGBToLinearDisplayP3"),n){case gi:case ko:return[i,"LinearTransferOETF"];case cn:case ul:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Ru(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Q_(n.getShaderSource(t),o)}else return r}function ex(n,t){const e=tx(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function nx(n,t){let e;switch(t){case xp:e="Linear";break;case vp:e="Reinhard";break;case Mp:e="Cineon";break;case od:e="ACESFilmic";break;case yp:e="AgX";break;case Ep:e="Neutral";break;case Sp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ys=new V;function ix(){Jt.getLuminanceCoefficients(Ys);const n=Ys.x.toFixed(4),t=Ys.y.toFixed(4),e=Ys.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($r).join(`
`)}function sx(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function ox(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function $r(n){return n!==""}function Cu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ax=/^[ \t]*#include +<([\w\d./]+)>/gm;function zc(n){return n.replace(ax,lx)}const cx=new Map;function lx(n,t){let e=Bt[t];if(e===void 0){const i=cx.get(t);if(i!==void 0)e=Bt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return zc(e)}const ux=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lu(n){return n.replace(ux,hx)}function hx(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Iu(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function dx(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===id?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===rd?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Vn&&(t="SHADOWMAP_TYPE_VSM"),t}function fx(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case yr:case Er:t="ENVMAP_TYPE_CUBE";break;case zo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function px(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Er:t="ENVMAP_MODE_REFRACTION";break}return t}function mx(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case sd:t="ENVMAP_BLENDING_MULTIPLY";break;case gp:t="ENVMAP_BLENDING_MIX";break;case _p:t="ENVMAP_BLENDING_ADD";break}return t}function gx(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function _x(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=dx(e),l=fx(e),u=px(e),h=mx(e),d=gx(e),f=rx(e),g=sx(s),x=r.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($r).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($r).join(`
`),p.length>0&&(p+=`
`)):(m=[Iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),p=[Iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ui?"#define TONE_MAPPING":"",e.toneMapping!==ui?Bt.tonemapping_pars_fragment:"",e.toneMapping!==ui?nx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,ex("linearToOutputTexel",e.outputColorSpace),ix(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($r).join(`
`)),o=zc(o),o=Cu(o,e),o=Pu(o,e),a=zc(a),a=Cu(a,e),a=Pu(a,e),o=Lu(o),a=Lu(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=b+m+o,S=b+p+a,T=Au(r,r.VERTEX_SHADER,M),R=Au(r,r.FRAGMENT_SHADER,S);r.attachShader(x,T),r.attachShader(x,R),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function y(v){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(x).trim(),F=r.getShaderInfoLog(T).trim(),D=r.getShaderInfoLog(R).trim();let H=!0,N=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,T,R);else{const O=Ru(r,T,"vertex"),P=Ru(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+v.name+`
Material Type: `+v.type+`

Program Info Log: `+I+`
`+O+`
`+P)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(F===""||D==="")&&(N=!1);N&&(v.diagnostics={runnable:H,programLog:I,vertexShader:{log:F,prefix:m},fragmentShader:{log:D,prefix:p}})}r.deleteShader(T),r.deleteShader(R),A=new fo(r,x),L=ox(r,x)}let A;this.getUniforms=function(){return A===void 0&&y(this),A};let L;this.getAttributes=function(){return L===void 0&&y(this),L};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(x,Z_)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=J_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=R,this}let xx=0;class vx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Mx(t),e.set(t,i)),i}}class Mx{constructor(t){this.id=xx++,this.code=t,this.usedTimes=0}}function Sx(n,t,e,i,r,s,o){const a=new Ed,c=new vx,l=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,f=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,v,I,F,D){const H=F.fog,N=D.geometry,O=_.isMeshStandardMaterial?F.environment:null,P=(_.isMeshStandardMaterial?e:t).get(_.envMap||O),z=P&&P.mapping===zo?P.image.height:null,K=x[_.type];_.precision!==null&&(g=r.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const J=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,lt=J!==void 0?J.length:0;let vt=0;N.morphAttributes.position!==void 0&&(vt=1),N.morphAttributes.normal!==void 0&&(vt=2),N.morphAttributes.color!==void 0&&(vt=3);let Y,tt,at,ot;if(K){const He=Pn[K];Y=He.vertexShader,tt=He.fragmentShader}else Y=_.vertexShader,tt=_.fragmentShader,c.update(_),at=c.getVertexShaderID(_),ot=c.getFragmentShaderID(_);const Tt=n.getRenderTarget(),St=D.isInstancedMesh===!0,Dt=D.isBatchedMesh===!0,Ft=!!_.map,Ot=!!_.matcap,U=!!P,ve=!!_.aoMap,kt=!!_.lightMap,Gt=!!_.bumpMap,wt=!!_.normalMap,ae=!!_.displacementMap,It=!!_.emissiveMap,C=!!_.metalnessMap,E=!!_.roughnessMap,W=_.anisotropy>0,Z=_.clearcoat>0,nt=_.dispersion>0,j=_.iridescence>0,yt=_.sheen>0,ut=_.transmission>0,mt=W&&!!_.anisotropyMap,Yt=Z&&!!_.clearcoatMap,rt=Z&&!!_.clearcoatNormalMap,gt=Z&&!!_.clearcoatRoughnessMap,Pt=j&&!!_.iridescenceMap,Lt=j&&!!_.iridescenceThicknessMap,_t=yt&&!!_.sheenColorMap,Vt=yt&&!!_.sheenRoughnessMap,Ut=!!_.specularMap,ie=!!_.specularColorMap,B=!!_.specularIntensityMap,ft=ut&&!!_.transmissionMap,$=ut&&!!_.thicknessMap,et=!!_.gradientMap,ht=!!_.alphaMap,pt=_.alphaTest>0,qt=!!_.alphaHash,ge=!!_.extensions;let Ge=ui;_.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(Ge=n.toneMapping);const $t={shaderID:K,shaderType:_.type,shaderName:_.name,vertexShader:Y,fragmentShader:tt,defines:_.defines,customVertexShaderID:at,customFragmentShaderID:ot,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Dt,batchingColor:Dt&&D._colorsTexture!==null,instancing:St,instancingColor:St&&D.instanceColor!==null,instancingMorph:St&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Tt===null?n.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:gi,alphaToCoverage:!!_.alphaToCoverage,map:Ft,matcap:Ot,envMap:U,envMapMode:U&&P.mapping,envMapCubeUVHeight:z,aoMap:ve,lightMap:kt,bumpMap:Gt,normalMap:wt,displacementMap:f&&ae,emissiveMap:It,normalMapObjectSpace:wt&&_.normalMapType===wp,normalMapTangentSpace:wt&&_.normalMapType===xd,metalnessMap:C,roughnessMap:E,anisotropy:W,anisotropyMap:mt,clearcoat:Z,clearcoatMap:Yt,clearcoatNormalMap:rt,clearcoatRoughnessMap:gt,dispersion:nt,iridescence:j,iridescenceMap:Pt,iridescenceThicknessMap:Lt,sheen:yt,sheenColorMap:_t,sheenRoughnessMap:Vt,specularMap:Ut,specularColorMap:ie,specularIntensityMap:B,transmission:ut,transmissionMap:ft,thicknessMap:$,gradientMap:et,opaque:_.transparent===!1&&_.blending===gr&&_.alphaToCoverage===!1,alphaMap:ht,alphaTest:pt,alphaHash:qt,combine:_.combine,mapUv:Ft&&m(_.map.channel),aoMapUv:ve&&m(_.aoMap.channel),lightMapUv:kt&&m(_.lightMap.channel),bumpMapUv:Gt&&m(_.bumpMap.channel),normalMapUv:wt&&m(_.normalMap.channel),displacementMapUv:ae&&m(_.displacementMap.channel),emissiveMapUv:It&&m(_.emissiveMap.channel),metalnessMapUv:C&&m(_.metalnessMap.channel),roughnessMapUv:E&&m(_.roughnessMap.channel),anisotropyMapUv:mt&&m(_.anisotropyMap.channel),clearcoatMapUv:Yt&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:rt&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&m(_.sheenRoughnessMap.channel),specularMapUv:Ut&&m(_.specularMap.channel),specularColorMapUv:ie&&m(_.specularColorMap.channel),specularIntensityMapUv:B&&m(_.specularIntensityMap.channel),transmissionMapUv:ft&&m(_.transmissionMap.channel),thicknessMapUv:$&&m(_.thicknessMap.channel),alphaMapUv:ht&&m(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(wt||W),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!N.attributes.uv&&(Ft||ht),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:D.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:vt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Ft&&_.map.isVideoTexture===!0&&Jt.getTransfer(_.map.colorSpace)===le,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ue,flipSided:_.side===Fe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ge&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&_.extensions.multiDraw===!0||Dt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return $t.vertexUv1s=l.has(1),$t.vertexUv2s=l.has(2),$t.vertexUv3s=l.has(3),l.clear(),$t}function b(_){const v=[];if(_.shaderID?v.push(_.shaderID):(v.push(_.customVertexShaderID),v.push(_.customFragmentShaderID)),_.defines!==void 0)for(const I in _.defines)v.push(I),v.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(M(v,_),S(v,_),v.push(n.outputColorSpace)),v.push(_.customProgramCacheKey),v.join()}function M(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapCubeUVHeight),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.morphAttributeCount),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)}function S(_,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.alphaToCoverage&&a.enable(20),_.push(a.mask)}function T(_){const v=x[_.type];let I;if(v){const F=Pn[v];I=rm.clone(F.uniforms)}else I=_.uniforms;return I}function R(_,v){let I;for(let F=0,D=u.length;F<D;F++){const H=u[F];if(H.cacheKey===v){I=H,++I.usedTimes;break}}return I===void 0&&(I=new _x(n,v,_,s),u.push(I)),I}function y(_){if(--_.usedTimes===0){const v=u.indexOf(_);u[v]=u[u.length-1],u.pop(),_.destroy()}}function A(_){c.remove(_)}function L(){c.dispose()}return{getParameters:p,getProgramCacheKey:b,getUniforms:T,acquireProgram:R,releaseProgram:y,releaseShaderCache:A,programs:u,dispose:L}}function yx(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function Ex(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Du(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Uu(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(h,d,f,g,x,m){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},n[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),t++,p}function a(h,d,f,g,x,m){const p=o(h,d,f,g,x,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):e.push(p)}function c(h,d,f,g,x,m){const p=o(h,d,f,g,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):e.unshift(p)}function l(h,d){e.length>1&&e.sort(h||Ex),i.length>1&&i.sort(d||Du),r.length>1&&r.sort(d||Du)}function u(){for(let h=t,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function bx(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Uu,n.set(i,[o])):r>=s.length?(o=new Uu,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Tx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new Q};break;case"SpotLight":e={position:new V,direction:new V,color:new Q,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Q,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Q,groundColor:new Q};break;case"RectAreaLight":e={color:new Q,position:new V,halfWidth:new V,halfHeight:new V};break}return n[t.id]=e,e}}}function wx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Ax=0;function Rx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Cx(n){const t=new Tx,e=wx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new V);const r=new V,s=new te,o=new te;function a(l){let u=0,h=0,d=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,b=0,M=0,S=0,T=0,R=0,y=0;l.sort(Rx);for(let L=0,_=l.length;L<_;L++){const v=l[L],I=v.color,F=v.intensity,D=v.distance,H=v.shadow&&v.shadow.map?v.shadow.map.texture:null;if(v.isAmbientLight)u+=I.r*F,h+=I.g*F,d+=I.b*F;else if(v.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(v.sh.coefficients[N],F);y++}else if(v.isDirectionalLight){const N=t.get(v);if(N.color.copy(v.color).multiplyScalar(v.intensity),v.castShadow){const O=v.shadow,P=e.get(v);P.shadowIntensity=O.intensity,P.shadowBias=O.bias,P.shadowNormalBias=O.normalBias,P.shadowRadius=O.radius,P.shadowMapSize=O.mapSize,i.directionalShadow[f]=P,i.directionalShadowMap[f]=H,i.directionalShadowMatrix[f]=v.shadow.matrix,b++}i.directional[f]=N,f++}else if(v.isSpotLight){const N=t.get(v);N.position.setFromMatrixPosition(v.matrixWorld),N.color.copy(I).multiplyScalar(F),N.distance=D,N.coneCos=Math.cos(v.angle),N.penumbraCos=Math.cos(v.angle*(1-v.penumbra)),N.decay=v.decay,i.spot[x]=N;const O=v.shadow;if(v.map&&(i.spotLightMap[T]=v.map,T++,O.updateMatrices(v),v.castShadow&&R++),i.spotLightMatrix[x]=O.matrix,v.castShadow){const P=e.get(v);P.shadowIntensity=O.intensity,P.shadowBias=O.bias,P.shadowNormalBias=O.normalBias,P.shadowRadius=O.radius,P.shadowMapSize=O.mapSize,i.spotShadow[x]=P,i.spotShadowMap[x]=H,S++}x++}else if(v.isRectAreaLight){const N=t.get(v);N.color.copy(I).multiplyScalar(F),N.halfWidth.set(v.width*.5,0,0),N.halfHeight.set(0,v.height*.5,0),i.rectArea[m]=N,m++}else if(v.isPointLight){const N=t.get(v);if(N.color.copy(v.color).multiplyScalar(v.intensity),N.distance=v.distance,N.decay=v.decay,v.castShadow){const O=v.shadow,P=e.get(v);P.shadowIntensity=O.intensity,P.shadowBias=O.bias,P.shadowNormalBias=O.normalBias,P.shadowRadius=O.radius,P.shadowMapSize=O.mapSize,P.shadowCameraNear=O.camera.near,P.shadowCameraFar=O.camera.far,i.pointShadow[g]=P,i.pointShadowMap[g]=H,i.pointShadowMatrix[g]=v.shadow.matrix,M++}i.point[g]=N,g++}else if(v.isHemisphereLight){const N=t.get(v);N.skyColor.copy(v.color).multiplyScalar(F),N.groundColor.copy(v.groundColor).multiplyScalar(F),i.hemi[p]=N,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_FLOAT_1,i.rectAreaLTC2=ct.LTC_FLOAT_2):(i.rectAreaLTC1=ct.LTC_HALF_1,i.rectAreaLTC2=ct.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const A=i.hash;(A.directionalLength!==f||A.pointLength!==g||A.spotLength!==x||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==b||A.numPointShadows!==M||A.numSpotShadows!==S||A.numSpotMaps!==T||A.numLightProbes!==y)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+T-R,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=y,A.directionalLength=f,A.pointLength=g,A.spotLength=x,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=b,A.numPointShadows=M,A.numSpotShadows=S,A.numSpotMaps=T,A.numLightProbes=y,i.version=Ax++)}function c(l,u){let h=0,d=0,f=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){const M=l[p];if(M.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(M.isSpotLight){const S=i.spot[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:i}}function Nu(n){const t=new Cx(n),e=[],i=[];function r(u){l.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Px(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Nu(n),t.set(r,[a])):s>=o.length?(a=new Nu(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class Od extends ps{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Lx extends ps{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ix=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dx=`uniform sampler2D shadow_pass;
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
}`;function Ux(n,t,e){let i=new hl;const r=new Kt,s=new Kt,o=new he,a=new Od({depthPacking:_d}),c=new Lx,l={},u=e.maxTextureSize,h={[di]:Fe,[Fe]:di,[ue]:ue},d=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:Ix,fragmentShader:Dx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new rn;g.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Xt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=id;let p=this.type;this.render=function(R,y,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const L=n.getRenderTarget(),_=n.getActiveCubeFace(),v=n.getActiveMipmapLevel(),I=n.state;I.setBlending(li),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=p!==Vn&&this.type===Vn,D=p===Vn&&this.type!==Vn;for(let H=0,N=R.length;H<N;H++){const O=R[H],P=O.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const z=P.getFrameExtents();if(r.multiply(z),s.copy(P.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/z.x),r.x=s.x*z.x,P.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/z.y),r.y=s.y*z.y,P.mapSize.y=s.y)),P.map===null||F===!0||D===!0){const J=this.type!==Vn?{minFilter:qe,magFilter:qe}:{};P.map!==null&&P.map.dispose(),P.map=new ki(r.x,r.y,J),P.map.texture.name=O.name+".shadowMap",P.camera.updateProjectionMatrix()}n.setRenderTarget(P.map),n.clear();const K=P.getViewportCount();for(let J=0;J<K;J++){const lt=P.getViewport(J);o.set(s.x*lt.x,s.y*lt.y,s.x*lt.z,s.y*lt.w),I.viewport(o),P.updateMatrices(O,J),i=P.getFrustum(),S(y,A,P.camera,O,this.type)}P.isPointLightShadow!==!0&&this.type===Vn&&b(P,A),P.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(L,_,v)};function b(R,y){const A=t.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ki(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(y,null,A,d,x,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(y,null,A,f,x,null)}function M(R,y,A,L){let _=null;const v=A.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(v!==void 0)_=v;else if(_=A.isPointLight===!0?c:a,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const I=_.uuid,F=y.uuid;let D=l[I];D===void 0&&(D={},l[I]=D);let H=D[F];H===void 0&&(H=_.clone(),D[F]=H,y.addEventListener("dispose",T)),_=H}if(_.visible=y.visible,_.wireframe=y.wireframe,L===Vn?_.side=y.shadowSide!==null?y.shadowSide:y.side:_.side=y.shadowSide!==null?y.shadowSide:h[y.side],_.alphaMap=y.alphaMap,_.alphaTest=y.alphaTest,_.map=y.map,_.clipShadows=y.clipShadows,_.clippingPlanes=y.clippingPlanes,_.clipIntersection=y.clipIntersection,_.displacementMap=y.displacementMap,_.displacementScale=y.displacementScale,_.displacementBias=y.displacementBias,_.wireframeLinewidth=y.wireframeLinewidth,_.linewidth=y.linewidth,A.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const I=n.properties.get(_);I.light=A}return _}function S(R,y,A,L,_){if(R.visible===!1)return;if(R.layers.test(y.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===Vn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,R.matrixWorld);const F=t.update(R),D=R.material;if(Array.isArray(D)){const H=F.groups;for(let N=0,O=H.length;N<O;N++){const P=H[N],z=D[P.materialIndex];if(z&&z.visible){const K=M(R,z,L,_);R.onBeforeShadow(n,R,y,A,F,K,P),n.renderBufferDirect(A,null,F,K,R,P),R.onAfterShadow(n,R,y,A,F,K,P)}}}else if(D.visible){const H=M(R,D,L,_);R.onBeforeShadow(n,R,y,A,F,H,null),n.renderBufferDirect(A,null,F,H,R,null),R.onAfterShadow(n,R,y,A,F,H,null)}}const I=R.children;for(let F=0,D=I.length;F<D;F++)S(I[F],y,A,L,_)}function T(R){R.target.removeEventListener("dispose",T);for(const A in l){const L=l[A],_=R.target.uuid;_ in L&&(L[_].dispose(),delete L[_])}}}const Nx={[nc]:ic,[rc]:ac,[sc]:cc,[Sr]:oc,[ic]:nc,[ac]:rc,[cc]:sc,[oc]:Sr};function Fx(n){function t(){let B=!1;const ft=new he;let $=null;const et=new he(0,0,0,0);return{setMask:function(ht){$!==ht&&!B&&(n.colorMask(ht,ht,ht,ht),$=ht)},setLocked:function(ht){B=ht},setClear:function(ht,pt,qt,ge,Ge){Ge===!0&&(ht*=ge,pt*=ge,qt*=ge),ft.set(ht,pt,qt,ge),et.equals(ft)===!1&&(n.clearColor(ht,pt,qt,ge),et.copy(ft))},reset:function(){B=!1,$=null,et.set(-1,0,0,0)}}}function e(){let B=!1,ft=!1,$=null,et=null,ht=null;return{setReversed:function(pt){ft=pt},setTest:function(pt){pt?at(n.DEPTH_TEST):ot(n.DEPTH_TEST)},setMask:function(pt){$!==pt&&!B&&(n.depthMask(pt),$=pt)},setFunc:function(pt){if(ft&&(pt=Nx[pt]),et!==pt){switch(pt){case nc:n.depthFunc(n.NEVER);break;case ic:n.depthFunc(n.ALWAYS);break;case rc:n.depthFunc(n.LESS);break;case Sr:n.depthFunc(n.LEQUAL);break;case sc:n.depthFunc(n.EQUAL);break;case oc:n.depthFunc(n.GEQUAL);break;case ac:n.depthFunc(n.GREATER);break;case cc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}et=pt}},setLocked:function(pt){B=pt},setClear:function(pt){ht!==pt&&(n.clearDepth(pt),ht=pt)},reset:function(){B=!1,$=null,et=null,ht=null}}}function i(){let B=!1,ft=null,$=null,et=null,ht=null,pt=null,qt=null,ge=null,Ge=null;return{setTest:function($t){B||($t?at(n.STENCIL_TEST):ot(n.STENCIL_TEST))},setMask:function($t){ft!==$t&&!B&&(n.stencilMask($t),ft=$t)},setFunc:function($t,He,Fn){($!==$t||et!==He||ht!==Fn)&&(n.stencilFunc($t,He,Fn),$=$t,et=He,ht=Fn)},setOp:function($t,He,Fn){(pt!==$t||qt!==He||ge!==Fn)&&(n.stencilOp($t,He,Fn),pt=$t,qt=He,ge=Fn)},setLocked:function($t){B=$t},setClear:function($t){Ge!==$t&&(n.clearStencil($t),Ge=$t)},reset:function(){B=!1,ft=null,$=null,et=null,ht=null,pt=null,qt=null,ge=null,Ge=null}}}const r=new t,s=new e,o=new i,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],f=null,g=!1,x=null,m=null,p=null,b=null,M=null,S=null,T=null,R=new Q(0,0,0),y=0,A=!1,L=null,_=null,v=null,I=null,F=null;const D=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,N=0;const O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(O)[1]),H=N>=1):O.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),H=N>=2);let P=null,z={};const K=n.getParameter(n.SCISSOR_BOX),J=n.getParameter(n.VIEWPORT),lt=new he().fromArray(K),vt=new he().fromArray(J);function Y(B,ft,$,et){const ht=new Uint8Array(4),pt=n.createTexture();n.bindTexture(B,pt),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qt=0;qt<$;qt++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(ft,0,n.RGBA,1,1,et,0,n.RGBA,n.UNSIGNED_BYTE,ht):n.texImage2D(ft+qt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ht);return pt}const tt={};tt[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),tt[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),tt[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),at(n.DEPTH_TEST),s.setFunc(Sr),kt(!1),Gt(Vl),at(n.CULL_FACE),U(li);function at(B){l[B]!==!0&&(n.enable(B),l[B]=!0)}function ot(B){l[B]!==!1&&(n.disable(B),l[B]=!1)}function Tt(B,ft){return u[B]!==ft?(n.bindFramebuffer(B,ft),u[B]=ft,B===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ft),B===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ft),!0):!1}function St(B,ft){let $=d,et=!1;if(B){$=h.get(ft),$===void 0&&($=[],h.set(ft,$));const ht=B.textures;if($.length!==ht.length||$[0]!==n.COLOR_ATTACHMENT0){for(let pt=0,qt=ht.length;pt<qt;pt++)$[pt]=n.COLOR_ATTACHMENT0+pt;$.length=ht.length,et=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,et=!0);et&&n.drawBuffers($)}function Dt(B){return f!==B?(n.useProgram(B),f=B,!0):!1}const Ft={[Pi]:n.FUNC_ADD,[Qf]:n.FUNC_SUBTRACT,[tp]:n.FUNC_REVERSE_SUBTRACT};Ft[ep]=n.MIN,Ft[np]=n.MAX;const Ot={[ip]:n.ZERO,[rp]:n.ONE,[sp]:n.SRC_COLOR,[tc]:n.SRC_ALPHA,[hp]:n.SRC_ALPHA_SATURATE,[lp]:n.DST_COLOR,[ap]:n.DST_ALPHA,[op]:n.ONE_MINUS_SRC_COLOR,[ec]:n.ONE_MINUS_SRC_ALPHA,[up]:n.ONE_MINUS_DST_COLOR,[cp]:n.ONE_MINUS_DST_ALPHA,[dp]:n.CONSTANT_COLOR,[fp]:n.ONE_MINUS_CONSTANT_COLOR,[pp]:n.CONSTANT_ALPHA,[mp]:n.ONE_MINUS_CONSTANT_ALPHA};function U(B,ft,$,et,ht,pt,qt,ge,Ge,$t){if(B===li){g===!0&&(ot(n.BLEND),g=!1);return}if(g===!1&&(at(n.BLEND),g=!0),B!==Jf){if(B!==x||$t!==A){if((m!==Pi||M!==Pi)&&(n.blendEquation(n.FUNC_ADD),m=Pi,M=Pi),$t)switch(B){case gr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wl:n.blendFunc(n.ONE,n.ONE);break;case Xl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ql:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case gr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Xl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ql:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}p=null,b=null,S=null,T=null,R.set(0,0,0),y=0,x=B,A=$t}return}ht=ht||ft,pt=pt||$,qt=qt||et,(ft!==m||ht!==M)&&(n.blendEquationSeparate(Ft[ft],Ft[ht]),m=ft,M=ht),($!==p||et!==b||pt!==S||qt!==T)&&(n.blendFuncSeparate(Ot[$],Ot[et],Ot[pt],Ot[qt]),p=$,b=et,S=pt,T=qt),(ge.equals(R)===!1||Ge!==y)&&(n.blendColor(ge.r,ge.g,ge.b,Ge),R.copy(ge),y=Ge),x=B,A=!1}function ve(B,ft){B.side===ue?ot(n.CULL_FACE):at(n.CULL_FACE);let $=B.side===Fe;ft&&($=!$),kt($),B.blending===gr&&B.transparent===!1?U(li):U(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),s.setFunc(B.depthFunc),s.setTest(B.depthTest),s.setMask(B.depthWrite),r.setMask(B.colorWrite);const et=B.stencilWrite;o.setTest(et),et&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ae(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?at(n.SAMPLE_ALPHA_TO_COVERAGE):ot(n.SAMPLE_ALPHA_TO_COVERAGE)}function kt(B){L!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),L=B)}function Gt(B){B!==jf?(at(n.CULL_FACE),B!==_&&(B===Vl?n.cullFace(n.BACK):B===Zf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ot(n.CULL_FACE),_=B}function wt(B){B!==v&&(H&&n.lineWidth(B),v=B)}function ae(B,ft,$){B?(at(n.POLYGON_OFFSET_FILL),(I!==ft||F!==$)&&(n.polygonOffset(ft,$),I=ft,F=$)):ot(n.POLYGON_OFFSET_FILL)}function It(B){B?at(n.SCISSOR_TEST):ot(n.SCISSOR_TEST)}function C(B){B===void 0&&(B=n.TEXTURE0+D-1),P!==B&&(n.activeTexture(B),P=B)}function E(B,ft,$){$===void 0&&(P===null?$=n.TEXTURE0+D-1:$=P);let et=z[$];et===void 0&&(et={type:void 0,texture:void 0},z[$]=et),(et.type!==B||et.texture!==ft)&&(P!==$&&(n.activeTexture($),P=$),n.bindTexture(B,ft||tt[B]),et.type=B,et.texture=ft)}function W(){const B=z[P];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function nt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function yt(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ut(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Yt(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function rt(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function gt(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pt(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Lt(B){lt.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),lt.copy(B))}function _t(B){vt.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),vt.copy(B))}function Vt(B,ft){let $=c.get(ft);$===void 0&&($=new WeakMap,c.set(ft,$));let et=$.get(B);et===void 0&&(et=n.getUniformBlockIndex(ft,B.name),$.set(B,et))}function Ut(B,ft){const et=c.get(ft).get(B);a.get(ft)!==et&&(n.uniformBlockBinding(ft,et,B.__bindingPointIndex),a.set(ft,et))}function ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},P=null,z={},u={},h=new WeakMap,d=[],f=null,g=!1,x=null,m=null,p=null,b=null,M=null,S=null,T=null,R=new Q(0,0,0),y=0,A=!1,L=null,_=null,v=null,I=null,F=null,lt.set(0,0,n.canvas.width,n.canvas.height),vt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:at,disable:ot,bindFramebuffer:Tt,drawBuffers:St,useProgram:Dt,setBlending:U,setMaterial:ve,setFlipSided:kt,setCullFace:Gt,setLineWidth:wt,setPolygonOffset:ae,setScissorTest:It,activeTexture:C,bindTexture:E,unbindTexture:W,compressedTexImage2D:Z,compressedTexImage3D:nt,texImage2D:gt,texImage3D:Pt,updateUBOMapping:Vt,uniformBlockBinding:Ut,texStorage2D:Yt,texStorage3D:rt,texSubImage2D:j,texSubImage3D:yt,compressedTexSubImage2D:ut,compressedTexSubImage3D:mt,scissor:Lt,viewport:_t,reset:ie}}function Fu(n,t,e,i){const r=Ox(i);switch(e){case hd:return n*t;case fd:return n*t;case pd:return n*t*2;case ol:return n*t/r.components*r.byteLength;case al:return n*t/r.components*r.byteLength;case md:return n*t*2/r.components*r.byteLength;case cl:return n*t*2/r.components*r.byteLength;case dd:return n*t*3/r.components*r.byteLength;case bn:return n*t*4/r.components*r.byteLength;case ll:return n*t*4/r.components*r.byteLength;case oo:case ao:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case co:case lo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fc:case mc:return Math.max(n,16)*Math.max(t,8)/4;case dc:case pc:return Math.max(n,8)*Math.max(t,8)/2;case gc:case _c:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case xc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case vc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Mc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Sc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case yc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case bc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case wc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ac:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Rc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Cc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Pc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Lc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ic:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case uo:case Dc:case Uc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case gd:case Nc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Fc:case Oc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ox(n){switch(n){case $n:case cd:return{byteLength:1,components:1};case ss:case ld:case ds:return{byteLength:2,components:1};case rl:case sl:return{byteLength:2,components:4};case zi:case il:case Un:return{byteLength:4,components:1};case ud:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Bx(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Kt,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,E){return f?new OffscreenCanvas(C,E):os("canvas")}function x(C,E,W){let Z=1;const nt=It(C);if((nt.width>W||nt.height>W)&&(Z=W/Math.max(nt.width,nt.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const j=Math.floor(Z*nt.width),yt=Math.floor(Z*nt.height);h===void 0&&(h=g(j,yt));const ut=E?g(j,yt):h;return ut.width=j,ut.height=yt,ut.getContext("2d").drawImage(C,0,0,j,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+j+"x"+yt+")."),ut}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==qe&&C.minFilter!==yn}function p(C){n.generateMipmap(C)}function b(C,E,W,Z,nt=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j=E;if(E===n.RED&&(W===n.FLOAT&&(j=n.R32F),W===n.HALF_FLOAT&&(j=n.R16F),W===n.UNSIGNED_BYTE&&(j=n.R8)),E===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(j=n.R8UI),W===n.UNSIGNED_SHORT&&(j=n.R16UI),W===n.UNSIGNED_INT&&(j=n.R32UI),W===n.BYTE&&(j=n.R8I),W===n.SHORT&&(j=n.R16I),W===n.INT&&(j=n.R32I)),E===n.RG&&(W===n.FLOAT&&(j=n.RG32F),W===n.HALF_FLOAT&&(j=n.RG16F),W===n.UNSIGNED_BYTE&&(j=n.RG8)),E===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(j=n.RG8UI),W===n.UNSIGNED_SHORT&&(j=n.RG16UI),W===n.UNSIGNED_INT&&(j=n.RG32UI),W===n.BYTE&&(j=n.RG8I),W===n.SHORT&&(j=n.RG16I),W===n.INT&&(j=n.RG32I)),E===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(j=n.RGB8UI),W===n.UNSIGNED_SHORT&&(j=n.RGB16UI),W===n.UNSIGNED_INT&&(j=n.RGB32UI),W===n.BYTE&&(j=n.RGB8I),W===n.SHORT&&(j=n.RGB16I),W===n.INT&&(j=n.RGB32I)),E===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),W===n.UNSIGNED_INT&&(j=n.RGBA32UI),W===n.BYTE&&(j=n.RGBA8I),W===n.SHORT&&(j=n.RGBA16I),W===n.INT&&(j=n.RGBA32I)),E===n.RGB&&W===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),E===n.RGBA){const yt=nt?Ro:Jt.getTransfer(Z);W===n.FLOAT&&(j=n.RGBA32F),W===n.HALF_FLOAT&&(j=n.RGBA16F),W===n.UNSIGNED_BYTE&&(j=yt===le?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function M(C,E){let W;return C?E===null||E===zi||E===br?W=n.DEPTH24_STENCIL8:E===Un?W=n.DEPTH32F_STENCIL8:E===ss&&(W=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===zi||E===br?W=n.DEPTH_COMPONENT24:E===Un?W=n.DEPTH_COMPONENT32F:E===ss&&(W=n.DEPTH_COMPONENT16),W}function S(C,E){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==qe&&C.minFilter!==yn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function T(C){const E=C.target;E.removeEventListener("dispose",T),y(E),E.isVideoTexture&&u.delete(E)}function R(C){const E=C.target;E.removeEventListener("dispose",R),L(E)}function y(C){const E=i.get(C);if(E.__webglInit===void 0)return;const W=C.source,Z=d.get(W);if(Z){const nt=Z[E.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&A(C),Object.keys(Z).length===0&&d.delete(W)}i.remove(C)}function A(C){const E=i.get(C);n.deleteTexture(E.__webglTexture);const W=C.source,Z=d.get(W);delete Z[E.__cacheKey],o.memory.textures--}function L(C){const E=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let nt=0;nt<E.__webglFramebuffer[Z].length;nt++)n.deleteFramebuffer(E.__webglFramebuffer[Z][nt]);else n.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)n.deleteFramebuffer(E.__webglFramebuffer[Z]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=C.textures;for(let Z=0,nt=W.length;Z<nt;Z++){const j=i.get(W[Z]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(W[Z])}i.remove(C)}let _=0;function v(){_=0}function I(){const C=_;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),_+=1,C}function F(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function D(C,E){const W=i.get(C);if(C.isVideoTexture&&wt(C),C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){const Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{vt(W,C,E);return}}e.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+E)}function H(C,E){const W=i.get(C);if(C.version>0&&W.__version!==C.version){vt(W,C,E);return}e.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+E)}function N(C,E){const W=i.get(C);if(C.version>0&&W.__version!==C.version){vt(W,C,E);return}e.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+E)}function O(C,E){const W=i.get(C);if(C.version>0&&W.__version!==C.version){Y(W,C,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+E)}const P={[Ao]:n.REPEAT,[Ui]:n.CLAMP_TO_EDGE,[hc]:n.MIRRORED_REPEAT},z={[qe]:n.NEAREST,[bp]:n.NEAREST_MIPMAP_NEAREST,[As]:n.NEAREST_MIPMAP_LINEAR,[yn]:n.LINEAR,[ea]:n.LINEAR_MIPMAP_NEAREST,[Ni]:n.LINEAR_MIPMAP_LINEAR},K={[Ap]:n.NEVER,[Dp]:n.ALWAYS,[Rp]:n.LESS,[vd]:n.LEQUAL,[Cp]:n.EQUAL,[Ip]:n.GEQUAL,[Pp]:n.GREATER,[Lp]:n.NOTEQUAL};function J(C,E){if(E.type===Un&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===yn||E.magFilter===ea||E.magFilter===As||E.magFilter===Ni||E.minFilter===yn||E.minFilter===ea||E.minFilter===As||E.minFilter===Ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,P[E.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,P[E.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,P[E.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,z[E.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,z[E.minFilter]),E.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,K[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===qe||E.minFilter!==As&&E.minFilter!==Ni||E.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function lt(C,E){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",T));const Z=E.source;let nt=d.get(Z);nt===void 0&&(nt={},d.set(Z,nt));const j=F(E);if(j!==C.__cacheKey){nt[j]===void 0&&(nt[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),nt[j].usedTimes++;const yt=nt[C.__cacheKey];yt!==void 0&&(nt[C.__cacheKey].usedTimes--,yt.usedTimes===0&&A(E)),C.__cacheKey=j,C.__webglTexture=nt[j].texture}return W}function vt(C,E,W){let Z=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=n.TEXTURE_3D);const nt=lt(C,E),j=E.source;e.bindTexture(Z,C.__webglTexture,n.TEXTURE0+W);const yt=i.get(j);if(j.version!==yt.__version||nt===!0){e.activeTexture(n.TEXTURE0+W);const ut=Jt.getPrimaries(Jt.workingColorSpace),mt=E.colorSpace===ai?null:Jt.getPrimaries(E.colorSpace),Yt=E.colorSpace===ai||ut===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let rt=x(E.image,!1,r.maxTextureSize);rt=ae(E,rt);const gt=s.convert(E.format,E.colorSpace),Pt=s.convert(E.type);let Lt=b(E.internalFormat,gt,Pt,E.colorSpace,E.isVideoTexture);J(Z,E);let _t;const Vt=E.mipmaps,Ut=E.isVideoTexture!==!0,ie=yt.__version===void 0||nt===!0,B=j.dataReady,ft=S(E,rt);if(E.isDepthTexture)Lt=M(E.format===Tr,E.type),ie&&(Ut?e.texStorage2D(n.TEXTURE_2D,1,Lt,rt.width,rt.height):e.texImage2D(n.TEXTURE_2D,0,Lt,rt.width,rt.height,0,gt,Pt,null));else if(E.isDataTexture)if(Vt.length>0){Ut&&ie&&e.texStorage2D(n.TEXTURE_2D,ft,Lt,Vt[0].width,Vt[0].height);for(let $=0,et=Vt.length;$<et;$++)_t=Vt[$],Ut?B&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,_t.width,_t.height,gt,Pt,_t.data):e.texImage2D(n.TEXTURE_2D,$,Lt,_t.width,_t.height,0,gt,Pt,_t.data);E.generateMipmaps=!1}else Ut?(ie&&e.texStorage2D(n.TEXTURE_2D,ft,Lt,rt.width,rt.height),B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,rt.width,rt.height,gt,Pt,rt.data)):e.texImage2D(n.TEXTURE_2D,0,Lt,rt.width,rt.height,0,gt,Pt,rt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ut&&ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,Lt,Vt[0].width,Vt[0].height,rt.depth);for(let $=0,et=Vt.length;$<et;$++)if(_t=Vt[$],E.format!==bn)if(gt!==null)if(Ut){if(B)if(E.layerUpdates.size>0){const ht=Fu(_t.width,_t.height,E.format,E.type);for(const pt of E.layerUpdates){const qt=_t.data.subarray(pt*ht/_t.data.BYTES_PER_ELEMENT,(pt+1)*ht/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,pt,_t.width,_t.height,1,gt,qt,0,0)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,_t.width,_t.height,rt.depth,gt,_t.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Lt,_t.width,_t.height,rt.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?B&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,_t.width,_t.height,rt.depth,gt,Pt,_t.data):e.texImage3D(n.TEXTURE_2D_ARRAY,$,Lt,_t.width,_t.height,rt.depth,0,gt,Pt,_t.data)}else{Ut&&ie&&e.texStorage2D(n.TEXTURE_2D,ft,Lt,Vt[0].width,Vt[0].height);for(let $=0,et=Vt.length;$<et;$++)_t=Vt[$],E.format!==bn?gt!==null?Ut?B&&e.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,_t.width,_t.height,gt,_t.data):e.compressedTexImage2D(n.TEXTURE_2D,$,Lt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?B&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,_t.width,_t.height,gt,Pt,_t.data):e.texImage2D(n.TEXTURE_2D,$,Lt,_t.width,_t.height,0,gt,Pt,_t.data)}else if(E.isDataArrayTexture)if(Ut){if(ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,Lt,rt.width,rt.height,rt.depth),B)if(E.layerUpdates.size>0){const $=Fu(rt.width,rt.height,E.format,E.type);for(const et of E.layerUpdates){const ht=rt.data.subarray(et*$/rt.data.BYTES_PER_ELEMENT,(et+1)*$/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,et,rt.width,rt.height,1,gt,Pt,ht)}E.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,gt,Pt,rt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Lt,rt.width,rt.height,rt.depth,0,gt,Pt,rt.data);else if(E.isData3DTexture)Ut?(ie&&e.texStorage3D(n.TEXTURE_3D,ft,Lt,rt.width,rt.height,rt.depth),B&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,gt,Pt,rt.data)):e.texImage3D(n.TEXTURE_3D,0,Lt,rt.width,rt.height,rt.depth,0,gt,Pt,rt.data);else if(E.isFramebufferTexture){if(ie)if(Ut)e.texStorage2D(n.TEXTURE_2D,ft,Lt,rt.width,rt.height);else{let $=rt.width,et=rt.height;for(let ht=0;ht<ft;ht++)e.texImage2D(n.TEXTURE_2D,ht,Lt,$,et,0,gt,Pt,null),$>>=1,et>>=1}}else if(Vt.length>0){if(Ut&&ie){const $=It(Vt[0]);e.texStorage2D(n.TEXTURE_2D,ft,Lt,$.width,$.height)}for(let $=0,et=Vt.length;$<et;$++)_t=Vt[$],Ut?B&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,gt,Pt,_t):e.texImage2D(n.TEXTURE_2D,$,Lt,gt,Pt,_t);E.generateMipmaps=!1}else if(Ut){if(ie){const $=It(rt);e.texStorage2D(n.TEXTURE_2D,ft,Lt,$.width,$.height)}B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,gt,Pt,rt)}else e.texImage2D(n.TEXTURE_2D,0,Lt,gt,Pt,rt);m(E)&&p(Z),yt.__version=j.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Y(C,E,W){if(E.image.length!==6)return;const Z=lt(C,E),nt=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+W);const j=i.get(nt);if(nt.version!==j.__version||Z===!0){e.activeTexture(n.TEXTURE0+W);const yt=Jt.getPrimaries(Jt.workingColorSpace),ut=E.colorSpace===ai?null:Jt.getPrimaries(E.colorSpace),mt=E.colorSpace===ai||yt===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Yt=E.isCompressedTexture||E.image[0].isCompressedTexture,rt=E.image[0]&&E.image[0].isDataTexture,gt=[];for(let et=0;et<6;et++)!Yt&&!rt?gt[et]=x(E.image[et],!0,r.maxCubemapSize):gt[et]=rt?E.image[et].image:E.image[et],gt[et]=ae(E,gt[et]);const Pt=gt[0],Lt=s.convert(E.format,E.colorSpace),_t=s.convert(E.type),Vt=b(E.internalFormat,Lt,_t,E.colorSpace),Ut=E.isVideoTexture!==!0,ie=j.__version===void 0||Z===!0,B=nt.dataReady;let ft=S(E,Pt);J(n.TEXTURE_CUBE_MAP,E);let $;if(Yt){Ut&&ie&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Vt,Pt.width,Pt.height);for(let et=0;et<6;et++){$=gt[et].mipmaps;for(let ht=0;ht<$.length;ht++){const pt=$[ht];E.format!==bn?Lt!==null?Ut?B&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,ht,0,0,pt.width,pt.height,Lt,pt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,ht,Vt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,ht,0,0,pt.width,pt.height,Lt,_t,pt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,ht,Vt,pt.width,pt.height,0,Lt,_t,pt.data)}}}else{if($=E.mipmaps,Ut&&ie){$.length>0&&ft++;const et=It(gt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Vt,et.width,et.height)}for(let et=0;et<6;et++)if(rt){Ut?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,gt[et].width,gt[et].height,Lt,_t,gt[et].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Vt,gt[et].width,gt[et].height,0,Lt,_t,gt[et].data);for(let ht=0;ht<$.length;ht++){const qt=$[ht].image[et].image;Ut?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,ht+1,0,0,qt.width,qt.height,Lt,_t,qt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,ht+1,Vt,qt.width,qt.height,0,Lt,_t,qt.data)}}else{Ut?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Lt,_t,gt[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Vt,Lt,_t,gt[et]);for(let ht=0;ht<$.length;ht++){const pt=$[ht];Ut?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,ht+1,0,0,Lt,_t,pt.image[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,ht+1,Vt,Lt,_t,pt.image[et])}}}m(E)&&p(n.TEXTURE_CUBE_MAP),j.__version=nt.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function tt(C,E,W,Z,nt,j){const yt=s.convert(W.format,W.colorSpace),ut=s.convert(W.type),mt=b(W.internalFormat,yt,ut,W.colorSpace);if(!i.get(E).__hasExternalTextures){const rt=Math.max(1,E.width>>j),gt=Math.max(1,E.height>>j);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,j,mt,rt,gt,E.depth,0,yt,ut,null):e.texImage2D(nt,j,mt,rt,gt,0,yt,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),Gt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,nt,i.get(W).__webglTexture,0,kt(E)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,nt,i.get(W).__webglTexture,j),e.bindFramebuffer(n.FRAMEBUFFER,null)}function at(C,E,W){if(n.bindRenderbuffer(n.RENDERBUFFER,C),E.depthBuffer){const Z=E.depthTexture,nt=Z&&Z.isDepthTexture?Z.type:null,j=M(E.stencilBuffer,nt),yt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=kt(E);Gt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,j,E.width,E.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,j,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,j,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,yt,n.RENDERBUFFER,C)}else{const Z=E.textures;for(let nt=0;nt<Z.length;nt++){const j=Z[nt],yt=s.convert(j.format,j.colorSpace),ut=s.convert(j.type),mt=b(j.internalFormat,yt,ut,j.colorSpace),Yt=kt(E);W&&Gt(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Yt,mt,E.width,E.height):Gt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Yt,mt,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,mt,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ot(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),D(E.depthTexture,0);const Z=i.get(E.depthTexture).__webglTexture,nt=kt(E);if(E.depthTexture.format===_r)Gt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,nt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(E.depthTexture.format===Tr)Gt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,nt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Tt(C){const E=i.get(C),W=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const Z=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){const nt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",nt)};Z.addEventListener("dispose",nt),E.__depthDisposeCallback=nt}E.__boundDepthTexture=Z}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");ot(E.__webglFramebuffer,C)}else if(W){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=n.createRenderbuffer(),at(E.__webglDepthbuffer[Z],C,!1);else{const nt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=E.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,j)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),at(E.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,nt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,nt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function St(C,E,W){const Z=i.get(C);E!==void 0&&tt(Z.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&Tt(C)}function Dt(C){const E=C.texture,W=i.get(C),Z=i.get(E);C.addEventListener("dispose",R);const nt=C.textures,j=C.isWebGLCubeRenderTarget===!0,yt=nt.length>1;if(yt||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=E.version,o.memory.textures++),j){W.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[ut]=[];for(let mt=0;mt<E.mipmaps.length;mt++)W.__webglFramebuffer[ut][mt]=n.createFramebuffer()}else W.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let ut=0;ut<E.mipmaps.length;ut++)W.__webglFramebuffer[ut]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(yt)for(let ut=0,mt=nt.length;ut<mt;ut++){const Yt=i.get(nt[ut]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&Gt(C)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ut=0;ut<nt.length;ut++){const mt=nt[ut];W.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[ut]);const Yt=s.convert(mt.format,mt.colorSpace),rt=s.convert(mt.type),gt=b(mt.internalFormat,Yt,rt,mt.colorSpace,C.isXRRenderTarget===!0),Pt=kt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,gt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,W.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),at(W.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),J(n.TEXTURE_CUBE_MAP,E);for(let ut=0;ut<6;ut++)if(E.mipmaps&&E.mipmaps.length>0)for(let mt=0;mt<E.mipmaps.length;mt++)tt(W.__webglFramebuffer[ut][mt],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,mt);else tt(W.__webglFramebuffer[ut],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(E)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let ut=0,mt=nt.length;ut<mt;ut++){const Yt=nt[ut],rt=i.get(Yt);e.bindTexture(n.TEXTURE_2D,rt.__webglTexture),J(n.TEXTURE_2D,Yt),tt(W.__webglFramebuffer,C,Yt,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,0),m(Yt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ut=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,Z.__webglTexture),J(ut,E),E.mipmaps&&E.mipmaps.length>0)for(let mt=0;mt<E.mipmaps.length;mt++)tt(W.__webglFramebuffer[mt],C,E,n.COLOR_ATTACHMENT0,ut,mt);else tt(W.__webglFramebuffer,C,E,n.COLOR_ATTACHMENT0,ut,0);m(E)&&p(ut),e.unbindTexture()}C.depthBuffer&&Tt(C)}function Ft(C){const E=C.textures;for(let W=0,Z=E.length;W<Z;W++){const nt=E[W];if(m(nt)){const j=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,yt=i.get(nt).__webglTexture;e.bindTexture(j,yt),p(j),e.unbindTexture()}}}const Ot=[],U=[];function ve(C){if(C.samples>0){if(Gt(C)===!1){const E=C.textures,W=C.width,Z=C.height;let nt=n.COLOR_BUFFER_BIT;const j=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,yt=i.get(C),ut=E.length>1;if(ut)for(let mt=0;mt<E.length;mt++)e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let mt=0;mt<E.length;mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),ut){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,yt.__webglColorRenderbuffer[mt]);const Yt=i.get(E[mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Yt,0)}n.blitFramebuffer(0,0,W,Z,0,0,W,Z,nt,n.NEAREST),c===!0&&(Ot.length=0,U.length=0,Ot.push(n.COLOR_ATTACHMENT0+mt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ot.push(j),U.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,U)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ot))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let mt=0;mt<E.length;mt++){e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,yt.__webglColorRenderbuffer[mt]);const Yt=i.get(E[mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,Yt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const E=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function kt(C){return Math.min(r.maxSamples,C.samples)}function Gt(C){const E=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function wt(C){const E=o.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function ae(C,E){const W=C.colorSpace,Z=C.format,nt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==gi&&W!==ai&&(Jt.getTransfer(W)===le?(Z!==bn||nt!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function It(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=v,this.setTexture2D=D,this.setTexture2DArray=H,this.setTexture3D=N,this.setTextureCube=O,this.rebindTextures=St,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=Gt}function zx(n,t){function e(i,r=ai){let s;const o=Jt.getTransfer(r);if(i===$n)return n.UNSIGNED_BYTE;if(i===rl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===sl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ud)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===cd)return n.BYTE;if(i===ld)return n.SHORT;if(i===ss)return n.UNSIGNED_SHORT;if(i===il)return n.INT;if(i===zi)return n.UNSIGNED_INT;if(i===Un)return n.FLOAT;if(i===ds)return n.HALF_FLOAT;if(i===hd)return n.ALPHA;if(i===dd)return n.RGB;if(i===bn)return n.RGBA;if(i===fd)return n.LUMINANCE;if(i===pd)return n.LUMINANCE_ALPHA;if(i===_r)return n.DEPTH_COMPONENT;if(i===Tr)return n.DEPTH_STENCIL;if(i===ol)return n.RED;if(i===al)return n.RED_INTEGER;if(i===md)return n.RG;if(i===cl)return n.RG_INTEGER;if(i===ll)return n.RGBA_INTEGER;if(i===oo||i===ao||i===co||i===lo)if(o===le)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===oo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===oo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ao)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===co)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===lo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dc||i===fc||i===pc||i===mc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===dc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gc||i===_c||i===xc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===gc||i===_c)return o===le?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===xc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===vc||i===Mc||i===Sc||i===yc||i===Ec||i===bc||i===Tc||i===wc||i===Ac||i===Rc||i===Cc||i===Pc||i===Lc||i===Ic)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===vc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ec)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Tc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ac)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Lc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ic)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===uo||i===Dc||i===Uc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===uo)return o===le?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Dc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Uc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gd||i===Nc||i===Fc||i===Oc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===uo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Nc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Oc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===br?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class kx extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class be extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gx={type:"move"};class La{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gx)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new be;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Hx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vx=`
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

}`;class Wx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Ie,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new fi({vertexShader:Hx,fragmentShader:Vx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xt(new Go(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xx extends Pr{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const x=new Wx,m=e.getContextAttributes();let p=null,b=null;const M=[],S=[],T=new Kt;let R=null;const y=new ln;y.layers.enable(1),y.viewport=new he;const A=new ln;A.layers.enable(2),A.viewport=new he;const L=[y,A],_=new kx;_.layers.enable(1),_.layers.enable(2);let v=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let tt=M[Y];return tt===void 0&&(tt=new La,M[Y]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Y){let tt=M[Y];return tt===void 0&&(tt=new La,M[Y]=tt),tt.getGripSpace()},this.getHand=function(Y){let tt=M[Y];return tt===void 0&&(tt=new La,M[Y]=tt),tt.getHandSpace()};function F(Y){const tt=S.indexOf(Y.inputSource);if(tt===-1)return;const at=M[tt];at!==void 0&&(at.update(Y.inputSource,Y.frame,l||o),at.dispatchEvent({type:Y.type,data:Y.inputSource}))}function D(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",H);for(let Y=0;Y<M.length;Y++){const tt=S[Y];tt!==null&&(S[Y]=null,M[Y].disconnect(tt))}v=null,I=null,x.reset(),t.setRenderTarget(p),f=null,d=null,h=null,r=null,b=null,vt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",D),r.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(T),r.renderState.layers===void 0){const tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,e,tt),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new ki(f.framebufferWidth,f.framebufferHeight,{format:bn,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,at=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?Tr:_r,at=m.stencil?br:zi);const Tt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:s};h=new XRWebGLBinding(r,e),d=h.createProjectionLayer(Tt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new ki(d.textureWidth,d.textureHeight,{format:bn,type:$n,depthTexture:new Id(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),vt.setContext(r),vt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(Y){for(let tt=0;tt<Y.removed.length;tt++){const at=Y.removed[tt],ot=S.indexOf(at);ot>=0&&(S[ot]=null,M[ot].disconnect(at))}for(let tt=0;tt<Y.added.length;tt++){const at=Y.added[tt];let ot=S.indexOf(at);if(ot===-1){for(let St=0;St<M.length;St++)if(St>=S.length){S.push(at),ot=St;break}else if(S[St]===null){S[St]=at,ot=St;break}if(ot===-1)break}const Tt=M[ot];Tt&&Tt.connect(at)}}const N=new V,O=new V;function P(Y,tt,at){N.setFromMatrixPosition(tt.matrixWorld),O.setFromMatrixPosition(at.matrixWorld);const ot=N.distanceTo(O),Tt=tt.projectionMatrix.elements,St=at.projectionMatrix.elements,Dt=Tt[14]/(Tt[10]-1),Ft=Tt[14]/(Tt[10]+1),Ot=(Tt[9]+1)/Tt[5],U=(Tt[9]-1)/Tt[5],ve=(Tt[8]-1)/Tt[0],kt=(St[8]+1)/St[0],Gt=Dt*ve,wt=Dt*kt,ae=ot/(-ve+kt),It=ae*-ve;if(tt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(It),Y.translateZ(ae),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Tt[10]===-1)Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const C=Dt+ae,E=Ft+ae,W=Gt-It,Z=wt+(ot-It),nt=Ot*Ft/E*C,j=U*Ft/E*C;Y.projectionMatrix.makePerspective(W,Z,nt,j,C,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function z(Y,tt){tt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(tt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let tt=Y.near,at=Y.far;x.texture!==null&&(x.depthNear>0&&(tt=x.depthNear),x.depthFar>0&&(at=x.depthFar)),_.near=A.near=y.near=tt,_.far=A.far=y.far=at,(v!==_.near||I!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),v=_.near,I=_.far);const ot=Y.parent,Tt=_.cameras;z(_,ot);for(let St=0;St<Tt.length;St++)z(Tt[St],ot);Tt.length===2?P(_,y,A):_.projectionMatrix.copy(y.projectionMatrix),K(Y,_,ot)};function K(Y,tt,at){at===null?Y.matrix.copy(tt.matrixWorld):(Y.matrix.copy(at.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(tt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Bc*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let J=null;function lt(Y,tt){if(u=tt.getViewerPose(l||o),g=tt,u!==null){const at=u.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let ot=!1;at.length!==_.cameras.length&&(_.cameras.length=0,ot=!0);for(let St=0;St<at.length;St++){const Dt=at[St];let Ft=null;if(f!==null)Ft=f.getViewport(Dt);else{const U=h.getViewSubImage(d,Dt);Ft=U.viewport,St===0&&(t.setRenderTargetTextures(b,U.colorTexture,d.ignoreDepthValues?void 0:U.depthStencilTexture),t.setRenderTarget(b))}let Ot=L[St];Ot===void 0&&(Ot=new ln,Ot.layers.enable(St),Ot.viewport=new he,L[St]=Ot),Ot.matrix.fromArray(Dt.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(Dt.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),St===0&&(_.matrix.copy(Ot.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ot===!0&&_.cameras.push(Ot)}const Tt=r.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){const St=h.getDepthInformation(at[0]);St&&St.isValid&&St.texture&&x.init(t,St,r.renderState)}}for(let at=0;at<M.length;at++){const ot=S[at],Tt=M[at];ot!==null&&Tt!==void 0&&Tt.update(ot,tt,l||o)}J&&J(Y,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),g=null}const vt=new Pd;vt.setAnimationLoop(lt),this.setAnimationLoop=function(Y){J=Y},this.dispose=function(){}}}const Ti=new wn,qx=new te;function Yx(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ad(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,M,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,b,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Fe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Fe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),M=b.envMap,S=b.envMapRotation;M&&(m.envMap.value=M,Ti.copy(S),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),m.envMapRotation.value.setFromMatrix4(qx.makeRotationFromEuler(Ti)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function $x(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,M){const S=M.program;i.uniformBlockBinding(b,S)}function l(b,M){let S=r[b.id];S===void 0&&(g(b),S=u(b),r[b.id]=S,b.addEventListener("dispose",m));const T=M.program;i.updateUBOMapping(b,T);const R=t.render.frame;s[b.id]!==R&&(d(b),s[b.id]=R)}function u(b){const M=h();b.__bindingPointIndex=M;const S=n.createBuffer(),T=b.__size,R=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,T,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,S),S}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const M=r[b.id],S=b.uniforms,T=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let R=0,y=S.length;R<y;R++){const A=Array.isArray(S[R])?S[R]:[S[R]];for(let L=0,_=A.length;L<_;L++){const v=A[L];if(f(v,R,L,T)===!0){const I=v.__offset,F=Array.isArray(v.value)?v.value:[v.value];let D=0;for(let H=0;H<F.length;H++){const N=F[H],O=x(N);typeof N=="number"||typeof N=="boolean"?(v.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,I+D,v.__data)):N.isMatrix3?(v.__data[0]=N.elements[0],v.__data[1]=N.elements[1],v.__data[2]=N.elements[2],v.__data[3]=0,v.__data[4]=N.elements[3],v.__data[5]=N.elements[4],v.__data[6]=N.elements[5],v.__data[7]=0,v.__data[8]=N.elements[6],v.__data[9]=N.elements[7],v.__data[10]=N.elements[8],v.__data[11]=0):(N.toArray(v.__data,D),D+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,v.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,M,S,T){const R=b.value,y=M+"_"+S;if(T[y]===void 0)return typeof R=="number"||typeof R=="boolean"?T[y]=R:T[y]=R.clone(),!0;{const A=T[y];if(typeof R=="number"||typeof R=="boolean"){if(A!==R)return T[y]=R,!0}else if(A.equals(R)===!1)return A.copy(R),!0}return!1}function g(b){const M=b.uniforms;let S=0;const T=16;for(let y=0,A=M.length;y<A;y++){const L=Array.isArray(M[y])?M[y]:[M[y]];for(let _=0,v=L.length;_<v;_++){const I=L[_],F=Array.isArray(I.value)?I.value:[I.value];for(let D=0,H=F.length;D<H;D++){const N=F[D],O=x(N),P=S%T,z=P%O.boundary,K=P+z;S+=z,K!==0&&T-K<O.storage&&(S+=T-K),I.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=O.storage}}}const R=S%T;return R>0&&(S+=T-R),b.__size=S,b.__cache={},this}function x(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){const M=b.target;M.removeEventListener("dispose",m);const S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class Kx{constructor(t={}){const{canvas:e=Fp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const p=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this.toneMapping=ui,this.toneMappingExposure=1;const M=this;let S=!1,T=0,R=0,y=null,A=-1,L=null;const _=new he,v=new he;let I=null;const F=new Q(0);let D=0,H=e.width,N=e.height,O=1,P=null,z=null;const K=new he(0,0,H,N),J=new he(0,0,H,N);let lt=!1;const vt=new hl;let Y=!1,tt=!1;const at=new te,ot=new te,Tt=new V,St=new he,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function Ot(){return y===null?O:1}let U=i;function ve(w,k){return e.getContext(w,k)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nl}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",pt,!1),U===null){const k="webgl2";if(U=ve(k,w),U===null)throw ve(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let kt,Gt,wt,ae,It,C,E,W,Z,nt,j,yt,ut,mt,Yt,rt,gt,Pt,Lt,_t,Vt,Ut,ie,B;function ft(){kt=new e_(U),kt.init(),Ut=new zx(U,kt),Gt=new Kg(U,kt,t,Ut),wt=new Fx(U),Gt.reverseDepthBuffer&&wt.buffers.depth.setReversed(!0),ae=new r_(U),It=new yx,C=new Bx(U,kt,wt,It,Gt,Ut,ae),E=new Zg(M),W=new t_(M),Z=new hm(U),ie=new Yg(U,Z),nt=new n_(U,Z,ae,ie),j=new o_(U,nt,Z,ae),Lt=new s_(U,Gt,C),rt=new jg(It),yt=new Sx(M,E,W,kt,Gt,ie,rt),ut=new Yx(M,It),mt=new bx,Yt=new Px(kt),Pt=new qg(M,E,W,wt,j,d,c),gt=new Ux(M,j,Gt),B=new $x(U,ae,Gt,wt),_t=new $g(U,kt,ae),Vt=new i_(U,kt,ae),ae.programs=yt.programs,M.capabilities=Gt,M.extensions=kt,M.properties=It,M.renderLists=mt,M.shadowMap=gt,M.state=wt,M.info=ae}ft();const $=new Xx(M,U);this.xr=$,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=kt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=kt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(w){w!==void 0&&(O=w,this.setSize(H,N,!1))},this.getSize=function(w){return w.set(H,N)},this.setSize=function(w,k,X=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,N=k,e.width=Math.floor(w*O),e.height=Math.floor(k*O),X===!0&&(e.style.width=w+"px",e.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(H*O,N*O).floor()},this.setDrawingBufferSize=function(w,k,X){H=w,N=k,O=X,e.width=Math.floor(w*X),e.height=Math.floor(k*X),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(_)},this.getViewport=function(w){return w.copy(K)},this.setViewport=function(w,k,X,q){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,k,X,q),wt.viewport(_.copy(K).multiplyScalar(O).round())},this.getScissor=function(w){return w.copy(J)},this.setScissor=function(w,k,X,q){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,k,X,q),wt.scissor(v.copy(J).multiplyScalar(O).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(w){wt.setScissorTest(lt=w)},this.setOpaqueSort=function(w){P=w},this.setTransparentSort=function(w){z=w},this.getClearColor=function(w){return w.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(w=!0,k=!0,X=!0){let q=0;if(w){let G=!1;if(y!==null){const st=y.texture.format;G=st===ll||st===cl||st===al}if(G){const st=y.texture.type,dt=st===$n||st===zi||st===ss||st===br||st===rl||st===sl,xt=Pt.getClearColor(),Mt=Pt.getClearAlpha(),At=xt.r,Rt=xt.g,Et=xt.b;dt?(f[0]=At,f[1]=Rt,f[2]=Et,f[3]=Mt,U.clearBufferuiv(U.COLOR,0,f)):(g[0]=At,g[1]=Rt,g[2]=Et,g[3]=Mt,U.clearBufferiv(U.COLOR,0,g))}else q|=U.COLOR_BUFFER_BIT}k&&(q|=U.DEPTH_BUFFER_BIT,U.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),X&&(q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),mt.dispose(),Yt.dispose(),It.dispose(),E.dispose(),W.dispose(),j.dispose(),ie.dispose(),B.dispose(),yt.dispose(),$.dispose(),$.removeEventListener("sessionstart",Nl),$.removeEventListener("sessionend",Fl),vi.stop()};function et(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=ae.autoReset,k=gt.enabled,X=gt.autoUpdate,q=gt.needsUpdate,G=gt.type;ft(),ae.autoReset=w,gt.enabled=k,gt.autoUpdate=X,gt.needsUpdate=q,gt.type=G}function pt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function qt(w){const k=w.target;k.removeEventListener("dispose",qt),ge(k)}function ge(w){Ge(w),It.remove(w)}function Ge(w){const k=It.get(w).programs;k!==void 0&&(k.forEach(function(X){yt.releaseProgram(X)}),w.isShaderMaterial&&yt.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,X,q,G,st){k===null&&(k=Dt);const dt=G.isMesh&&G.matrixWorld.determinant()<0,xt=qf(w,k,X,q,G);wt.setMaterial(q,dt);let Mt=X.index,At=1;if(q.wireframe===!0){if(Mt=nt.getWireframeAttribute(X),Mt===void 0)return;At=2}const Rt=X.drawRange,Et=X.attributes.position;let Qt=Rt.start*At,ce=(Rt.start+Rt.count)*At;st!==null&&(Qt=Math.max(Qt,st.start*At),ce=Math.min(ce,(st.start+st.count)*At)),Mt!==null?(Qt=Math.max(Qt,0),ce=Math.min(ce,Mt.count)):Et!=null&&(Qt=Math.max(Qt,0),ce=Math.min(ce,Et.count));const de=ce-Qt;if(de<0||de===1/0)return;ie.setup(G,q,xt,X,Mt);let $e,jt=_t;if(Mt!==null&&($e=Z.get(Mt),jt=Vt,jt.setIndex($e)),G.isMesh)q.wireframe===!0?(wt.setLineWidth(q.wireframeLinewidth*Ot()),jt.setMode(U.LINES)):jt.setMode(U.TRIANGLES);else if(G.isLine){let bt=q.linewidth;bt===void 0&&(bt=1),wt.setLineWidth(bt*Ot()),G.isLineSegments?jt.setMode(U.LINES):G.isLineLoop?jt.setMode(U.LINE_LOOP):jt.setMode(U.LINE_STRIP)}else G.isPoints?jt.setMode(U.POINTS):G.isSprite&&jt.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)jt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))jt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const bt=G._multiDrawStarts,Te=G._multiDrawCounts,Zt=G._multiDrawCount,dn=Mt?Z.get(Mt).bytesPerElement:1,$i=It.get(q).currentProgram.getUniforms();for(let Ke=0;Ke<Zt;Ke++)$i.setValue(U,"_gl_DrawID",Ke),jt.render(bt[Ke]/dn,Te[Ke])}else if(G.isInstancedMesh)jt.renderInstances(Qt,de,G.count);else if(X.isInstancedBufferGeometry){const bt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Te=Math.min(X.instanceCount,bt);jt.renderInstances(Qt,de,Te)}else jt.render(Qt,de)};function $t(w,k,X){w.transparent===!0&&w.side===ue&&w.forceSinglePass===!1?(w.side=Fe,w.needsUpdate=!0,ws(w,k,X),w.side=di,w.needsUpdate=!0,ws(w,k,X),w.side=ue):ws(w,k,X)}this.compile=function(w,k,X=null){X===null&&(X=w),m=Yt.get(X),m.init(k),b.push(m),X.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),w!==X&&w.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();const q=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const st=G.material;if(st)if(Array.isArray(st))for(let dt=0;dt<st.length;dt++){const xt=st[dt];$t(xt,X,G),q.add(xt)}else $t(st,X,G),q.add(st)}),b.pop(),m=null,q},this.compileAsync=function(w,k,X=null){const q=this.compile(w,k,X);return new Promise(G=>{function st(){if(q.forEach(function(dt){It.get(dt).currentProgram.isReady()&&q.delete(dt)}),q.size===0){G(w);return}setTimeout(st,10)}kt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let He=null;function Fn(w){He&&He(w)}function Nl(){vi.stop()}function Fl(){vi.start()}const vi=new Pd;vi.setAnimationLoop(Fn),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(w){He=w,$.setAnimationLoop(w),w===null?vi.stop():vi.start()},$.addEventListener("sessionstart",Nl),$.addEventListener("sessionend",Fl),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(k),k=$.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,k,y),m=Yt.get(w,b.length),m.init(k),b.push(m),ot.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),vt.setFromProjectionMatrix(ot),tt=this.localClippingEnabled,Y=rt.init(this.clippingPlanes,tt),x=mt.get(w,p.length),x.init(),p.push(x),$.enabled===!0&&$.isPresenting===!0){const st=M.xr.getDepthSensingMesh();st!==null&&Zo(st,k,-1/0,M.sortObjects)}Zo(w,k,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(P,z),Ft=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Ft&&Pt.addToRenderList(x,w),this.info.render.frame++,Y===!0&&rt.beginShadows();const X=m.state.shadowsArray;gt.render(X,w,k),Y===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=x.opaque,G=x.transmissive;if(m.setupLights(),k.isArrayCamera){const st=k.cameras;if(G.length>0)for(let dt=0,xt=st.length;dt<xt;dt++){const Mt=st[dt];Bl(q,G,w,Mt)}Ft&&Pt.render(w);for(let dt=0,xt=st.length;dt<xt;dt++){const Mt=st[dt];Ol(x,w,Mt,Mt.viewport)}}else G.length>0&&Bl(q,G,w,k),Ft&&Pt.render(w),Ol(x,w,k);y!==null&&(C.updateMultisampleRenderTarget(y),C.updateRenderTargetMipmap(y)),w.isScene===!0&&w.onAfterRender(M,w,k),ie.resetDefaultState(),A=-1,L=null,b.pop(),b.length>0?(m=b[b.length-1],Y===!0&&rt.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Zo(w,k,X,q){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||vt.intersectsSprite(w)){q&&St.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ot);const dt=j.update(w),xt=w.material;xt.visible&&x.push(w,dt,xt,X,St.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||vt.intersectsObject(w))){const dt=j.update(w),xt=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),St.copy(w.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),St.copy(dt.boundingSphere.center)),St.applyMatrix4(w.matrixWorld).applyMatrix4(ot)),Array.isArray(xt)){const Mt=dt.groups;for(let At=0,Rt=Mt.length;At<Rt;At++){const Et=Mt[At],Qt=xt[Et.materialIndex];Qt&&Qt.visible&&x.push(w,dt,Qt,X,St.z,Et)}}else xt.visible&&x.push(w,dt,xt,X,St.z,null)}}const st=w.children;for(let dt=0,xt=st.length;dt<xt;dt++)Zo(st[dt],k,X,q)}function Ol(w,k,X,q){const G=w.opaque,st=w.transmissive,dt=w.transparent;m.setupLightsView(X),Y===!0&&rt.setGlobalState(M.clippingPlanes,X),q&&wt.viewport(_.copy(q)),G.length>0&&Ts(G,k,X),st.length>0&&Ts(st,k,X),dt.length>0&&Ts(dt,k,X),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function Bl(w,k,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new ki(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?ds:$n,minFilter:Ni,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const st=m.state.transmissionRenderTarget[q.id],dt=q.viewport||_;st.setSize(dt.z,dt.w);const xt=M.getRenderTarget();M.setRenderTarget(st),M.getClearColor(F),D=M.getClearAlpha(),D<1&&M.setClearColor(16777215,.5),M.clear(),Ft&&Pt.render(X);const Mt=M.toneMapping;M.toneMapping=ui;const At=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),Y===!0&&rt.setGlobalState(M.clippingPlanes,q),Ts(w,X,q),C.updateMultisampleRenderTarget(st),C.updateRenderTargetMipmap(st),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let Et=0,Qt=k.length;Et<Qt;Et++){const ce=k[Et],de=ce.object,$e=ce.geometry,jt=ce.material,bt=ce.group;if(jt.side===ue&&de.layers.test(q.layers)){const Te=jt.side;jt.side=Fe,jt.needsUpdate=!0,zl(de,X,q,$e,jt,bt),jt.side=Te,jt.needsUpdate=!0,Rt=!0}}Rt===!0&&(C.updateMultisampleRenderTarget(st),C.updateRenderTargetMipmap(st))}M.setRenderTarget(xt),M.setClearColor(F,D),At!==void 0&&(q.viewport=At),M.toneMapping=Mt}function Ts(w,k,X){const q=k.isScene===!0?k.overrideMaterial:null;for(let G=0,st=w.length;G<st;G++){const dt=w[G],xt=dt.object,Mt=dt.geometry,At=q===null?dt.material:q,Rt=dt.group;xt.layers.test(X.layers)&&zl(xt,k,X,Mt,At,Rt)}}function zl(w,k,X,q,G,st){w.onBeforeRender(M,k,X,q,G,st),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(M,k,X,q,w,st),G.transparent===!0&&G.side===ue&&G.forceSinglePass===!1?(G.side=Fe,G.needsUpdate=!0,M.renderBufferDirect(X,k,q,G,w,st),G.side=di,G.needsUpdate=!0,M.renderBufferDirect(X,k,q,G,w,st),G.side=ue):M.renderBufferDirect(X,k,q,G,w,st),w.onAfterRender(M,k,X,q,G,st)}function ws(w,k,X){k.isScene!==!0&&(k=Dt);const q=It.get(w),G=m.state.lights,st=m.state.shadowsArray,dt=G.state.version,xt=yt.getParameters(w,G.state,st,k,X),Mt=yt.getProgramCacheKey(xt);let At=q.programs;q.environment=w.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(w.isMeshStandardMaterial?W:E).get(w.envMap||q.environment),q.envMapRotation=q.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,At===void 0&&(w.addEventListener("dispose",qt),At=new Map,q.programs=At);let Rt=At.get(Mt);if(Rt!==void 0){if(q.currentProgram===Rt&&q.lightsStateVersion===dt)return Gl(w,xt),Rt}else xt.uniforms=yt.getUniforms(w),w.onBeforeCompile(xt,M),Rt=yt.acquireProgram(xt,Mt),At.set(Mt,Rt),q.uniforms=xt.uniforms;const Et=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Et.clippingPlanes=rt.uniform),Gl(w,xt),q.needsLights=$f(w),q.lightsStateVersion=dt,q.needsLights&&(Et.ambientLightColor.value=G.state.ambient,Et.lightProbe.value=G.state.probe,Et.directionalLights.value=G.state.directional,Et.directionalLightShadows.value=G.state.directionalShadow,Et.spotLights.value=G.state.spot,Et.spotLightShadows.value=G.state.spotShadow,Et.rectAreaLights.value=G.state.rectArea,Et.ltc_1.value=G.state.rectAreaLTC1,Et.ltc_2.value=G.state.rectAreaLTC2,Et.pointLights.value=G.state.point,Et.pointLightShadows.value=G.state.pointShadow,Et.hemisphereLights.value=G.state.hemi,Et.directionalShadowMap.value=G.state.directionalShadowMap,Et.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Et.spotShadowMap.value=G.state.spotShadowMap,Et.spotLightMatrix.value=G.state.spotLightMatrix,Et.spotLightMap.value=G.state.spotLightMap,Et.pointShadowMap.value=G.state.pointShadowMap,Et.pointShadowMatrix.value=G.state.pointShadowMatrix),q.currentProgram=Rt,q.uniformsList=null,Rt}function kl(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=fo.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function Gl(w,k){const X=It.get(w);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function qf(w,k,X,q,G){k.isScene!==!0&&(k=Dt),C.resetTextureUnits();const st=k.fog,dt=q.isMeshStandardMaterial?k.environment:null,xt=y===null?M.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:gi,Mt=(q.isMeshStandardMaterial?W:E).get(q.envMap||dt),At=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Rt=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Et=!!X.morphAttributes.position,Qt=!!X.morphAttributes.normal,ce=!!X.morphAttributes.color;let de=ui;q.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(de=M.toneMapping);const $e=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,jt=$e!==void 0?$e.length:0,bt=It.get(q),Te=m.state.lights;if(Y===!0&&(tt===!0||w!==L)){const sn=w===L&&q.id===A;rt.setState(q,w,sn)}let Zt=!1;q.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Te.state.version||bt.outputColorSpace!==xt||G.isBatchedMesh&&bt.batching===!1||!G.isBatchedMesh&&bt.batching===!0||G.isBatchedMesh&&bt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&bt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&bt.instancing===!1||!G.isInstancedMesh&&bt.instancing===!0||G.isSkinnedMesh&&bt.skinning===!1||!G.isSkinnedMesh&&bt.skinning===!0||G.isInstancedMesh&&bt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&bt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&bt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&bt.instancingMorph===!1&&G.morphTexture!==null||bt.envMap!==Mt||q.fog===!0&&bt.fog!==st||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==rt.numPlanes||bt.numIntersection!==rt.numIntersection)||bt.vertexAlphas!==At||bt.vertexTangents!==Rt||bt.morphTargets!==Et||bt.morphNormals!==Qt||bt.morphColors!==ce||bt.toneMapping!==de||bt.morphTargetsCount!==jt)&&(Zt=!0):(Zt=!0,bt.__version=q.version);let dn=bt.currentProgram;Zt===!0&&(dn=ws(q,k,G));let $i=!1,Ke=!1,Jo=!1;const fe=dn.getUniforms(),Jn=bt.uniforms;if(wt.useProgram(dn.program)&&($i=!0,Ke=!0,Jo=!0),q.id!==A&&(A=q.id,Ke=!0),$i||L!==w){Gt.reverseDepthBuffer?(at.copy(w.projectionMatrix),Bp(at),zp(at),fe.setValue(U,"projectionMatrix",at)):fe.setValue(U,"projectionMatrix",w.projectionMatrix),fe.setValue(U,"viewMatrix",w.matrixWorldInverse);const sn=fe.map.cameraPosition;sn!==void 0&&sn.setValue(U,Tt.setFromMatrixPosition(w.matrixWorld)),Gt.logarithmicDepthBuffer&&fe.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&fe.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),L!==w&&(L=w,Ke=!0,Jo=!0)}if(G.isSkinnedMesh){fe.setOptional(U,G,"bindMatrix"),fe.setOptional(U,G,"bindMatrixInverse");const sn=G.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),fe.setValue(U,"boneTexture",sn.boneTexture,C))}G.isBatchedMesh&&(fe.setOptional(U,G,"batchingTexture"),fe.setValue(U,"batchingTexture",G._matricesTexture,C),fe.setOptional(U,G,"batchingIdTexture"),fe.setValue(U,"batchingIdTexture",G._indirectTexture,C),fe.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&fe.setValue(U,"batchingColorTexture",G._colorsTexture,C));const Qo=X.morphAttributes;if((Qo.position!==void 0||Qo.normal!==void 0||Qo.color!==void 0)&&Lt.update(G,X,dn),(Ke||bt.receiveShadow!==G.receiveShadow)&&(bt.receiveShadow=G.receiveShadow,fe.setValue(U,"receiveShadow",G.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Jn.envMap.value=Mt,Jn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(Jn.envMapIntensity.value=k.environmentIntensity),Ke&&(fe.setValue(U,"toneMappingExposure",M.toneMappingExposure),bt.needsLights&&Yf(Jn,Jo),st&&q.fog===!0&&ut.refreshFogUniforms(Jn,st),ut.refreshMaterialUniforms(Jn,q,O,N,m.state.transmissionRenderTarget[w.id]),fo.upload(U,kl(bt),Jn,C)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(fo.upload(U,kl(bt),Jn,C),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&fe.setValue(U,"center",G.center),fe.setValue(U,"modelViewMatrix",G.modelViewMatrix),fe.setValue(U,"normalMatrix",G.normalMatrix),fe.setValue(U,"modelMatrix",G.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const sn=q.uniformsGroups;for(let ta=0,Kf=sn.length;ta<Kf;ta++){const Hl=sn[ta];B.update(Hl,dn),B.bind(Hl,dn)}}return dn}function Yf(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function $f(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(w,k,X){It.get(w.texture).__webglTexture=k,It.get(w.depthTexture).__webglTexture=X;const q=It.get(w);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,k){const X=It.get(w);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,X=0){y=w,T=k,R=X;let q=!0,G=null,st=!1,dt=!1;if(w){const Mt=It.get(w);if(Mt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(U.FRAMEBUFFER,null),q=!1;else if(Mt.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(Mt.__hasExternalTextures)C.rebindTextures(w,It.get(w.texture).__webglTexture,It.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Et=w.depthTexture;if(Mt.__boundDepthTexture!==Et){if(Et!==null&&It.has(Et)&&(w.width!==Et.image.width||w.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const At=w.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(dt=!0);const Rt=It.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Rt[k])?G=Rt[k][X]:G=Rt[k],st=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?G=It.get(w).__webglMultisampledFramebuffer:Array.isArray(Rt)?G=Rt[X]:G=Rt,_.copy(w.viewport),v.copy(w.scissor),I=w.scissorTest}else _.copy(K).multiplyScalar(O).floor(),v.copy(J).multiplyScalar(O).floor(),I=lt;if(wt.bindFramebuffer(U.FRAMEBUFFER,G)&&q&&wt.drawBuffers(w,G),wt.viewport(_),wt.scissor(v),wt.setScissorTest(I),st){const Mt=It.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,Mt.__webglTexture,X)}else if(dt){const Mt=It.get(w.texture),At=k||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mt.__webglTexture,X||0,At)}A=-1},this.readRenderTargetPixels=function(w,k,X,q,G,st,dt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=It.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&dt!==void 0&&(xt=xt[dt]),xt){wt.bindFramebuffer(U.FRAMEBUFFER,xt);try{const Mt=w.texture,At=Mt.format,Rt=Mt.type;if(!Gt.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-q&&X>=0&&X<=w.height-G&&U.readPixels(k,X,q,G,Ut.convert(At),Ut.convert(Rt),st)}finally{const Mt=y!==null?It.get(y).__webglFramebuffer:null;wt.bindFramebuffer(U.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(w,k,X,q,G,st,dt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=It.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&dt!==void 0&&(xt=xt[dt]),xt){const Mt=w.texture,At=Mt.format,Rt=Mt.type;if(!Gt.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=w.width-q&&X>=0&&X<=w.height-G){wt.bindFramebuffer(U.FRAMEBUFFER,xt);const Et=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Et),U.bufferData(U.PIXEL_PACK_BUFFER,st.byteLength,U.STREAM_READ),U.readPixels(k,X,q,G,Ut.convert(At),Ut.convert(Rt),0);const Qt=y!==null?It.get(y).__webglFramebuffer:null;wt.bindFramebuffer(U.FRAMEBUFFER,Qt);const ce=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Op(U,ce,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Et),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,st),U.deleteBuffer(Et),U.deleteSync(ce),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,k=null,X=0){w.isTexture!==!0&&(ho("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1]);const q=Math.pow(2,-X),G=Math.floor(w.image.width*q),st=Math.floor(w.image.height*q),dt=k!==null?k.x:0,xt=k!==null?k.y:0;C.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,dt,xt,G,st),wt.unbindTexture()},this.copyTextureToTexture=function(w,k,X=null,q=null,G=0){w.isTexture!==!0&&(ho("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,w=arguments[1],k=arguments[2],G=arguments[3]||0,X=null);let st,dt,xt,Mt,At,Rt;X!==null?(st=X.max.x-X.min.x,dt=X.max.y-X.min.y,xt=X.min.x,Mt=X.min.y):(st=w.image.width,dt=w.image.height,xt=0,Mt=0),q!==null?(At=q.x,Rt=q.y):(At=0,Rt=0);const Et=Ut.convert(k.format),Qt=Ut.convert(k.type);C.setTexture2D(k,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);const ce=U.getParameter(U.UNPACK_ROW_LENGTH),de=U.getParameter(U.UNPACK_IMAGE_HEIGHT),$e=U.getParameter(U.UNPACK_SKIP_PIXELS),jt=U.getParameter(U.UNPACK_SKIP_ROWS),bt=U.getParameter(U.UNPACK_SKIP_IMAGES),Te=w.isCompressedTexture?w.mipmaps[G]:w.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Te.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Te.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,xt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Mt),w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,G,At,Rt,st,dt,Et,Qt,Te.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,G,At,Rt,Te.width,Te.height,Et,Te.data):U.texSubImage2D(U.TEXTURE_2D,G,At,Rt,st,dt,Et,Qt,Te),U.pixelStorei(U.UNPACK_ROW_LENGTH,ce),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,de),U.pixelStorei(U.UNPACK_SKIP_PIXELS,$e),U.pixelStorei(U.UNPACK_SKIP_ROWS,jt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,bt),G===0&&k.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),wt.unbindTexture()},this.copyTextureToTexture3D=function(w,k,X=null,q=null,G=0){w.isTexture!==!0&&(ho("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,w=arguments[2],k=arguments[3],G=arguments[4]||0);let st,dt,xt,Mt,At,Rt,Et,Qt,ce;const de=w.isCompressedTexture?w.mipmaps[G]:w.image;X!==null?(st=X.max.x-X.min.x,dt=X.max.y-X.min.y,xt=X.max.z-X.min.z,Mt=X.min.x,At=X.min.y,Rt=X.min.z):(st=de.width,dt=de.height,xt=de.depth,Mt=0,At=0,Rt=0),q!==null?(Et=q.x,Qt=q.y,ce=q.z):(Et=0,Qt=0,ce=0);const $e=Ut.convert(k.format),jt=Ut.convert(k.type);let bt;if(k.isData3DTexture)C.setTexture3D(k,0),bt=U.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)C.setTexture2DArray(k,0),bt=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);const Te=U.getParameter(U.UNPACK_ROW_LENGTH),Zt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),dn=U.getParameter(U.UNPACK_SKIP_PIXELS),$i=U.getParameter(U.UNPACK_SKIP_ROWS),Ke=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,de.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,de.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Mt),U.pixelStorei(U.UNPACK_SKIP_ROWS,At),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Rt),w.isDataTexture||w.isData3DTexture?U.texSubImage3D(bt,G,Et,Qt,ce,st,dt,xt,$e,jt,de.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(bt,G,Et,Qt,ce,st,dt,xt,$e,de.data):U.texSubImage3D(bt,G,Et,Qt,ce,st,dt,xt,$e,jt,de),U.pixelStorei(U.UNPACK_ROW_LENGTH,Te),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Zt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,dn),U.pixelStorei(U.UNPACK_SKIP_ROWS,$i),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ke),G===0&&k.generateMipmaps&&U.generateMipmap(bt),wt.unbindTexture()},this.initRenderTarget=function(w){It.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),wt.unbindTexture()},this.resetState=function(){T=0,R=0,y=null,wt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ul?"display-p3":"srgb",e.unpackColorSpace=Jt.workingColorSpace===ko?"display-p3":"srgb"}}class fl{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Q(t),this.near=e,this.far=i}clone(){return new fl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class jx extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Zx extends Ie{constructor(t=null,e=1,i=1,r,s,o,a,c,l=qe,u=qe,h,d){super(null,o,a,c,l,u,r,s,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cn extends Tn{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const lr=new te,Ou=new te,$s=[],Bu=new qi,Jx=new te,Hr=new Xt,Vr=new Ir;class Vo extends Xt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Cn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Jx)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,lr),Bu.copy(t.boundingBox).applyMatrix4(lr),this.boundingBox.union(Bu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ir),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,lr),Vr.copy(t.boundingSphere).applyMatrix4(lr),this.boundingSphere.union(Vr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(t,e){const i=this.matrixWorld,r=this.count;if(Hr.geometry=this.geometry,Hr.material=this.material,Hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vr.copy(this.boundingSphere),Vr.applyMatrix4(i),t.ray.intersectsSphere(Vr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,lr),Ou.multiplyMatrices(i,lr),Hr.matrixWorld=Ou,Hr.raycast(t,$s);for(let o=0,a=$s.length;o<a;o++){const c=$s[o];c.instanceId=s,c.object=this,e.push(c)}$s.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Cn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Zx(new Float32Array(r*this.count),r,this.count,ol,Un));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*t;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class pl extends rn{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],f=[];let g=0;const x=[],m=i/2;let p=0;b(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new me(h,3)),this.setAttribute("normal",new me(d,3)),this.setAttribute("uv",new me(f,2));function b(){const S=new V,T=new V;let R=0;const y=(e-t)/i;for(let A=0;A<=s;A++){const L=[],_=A/s,v=_*(e-t)+t;for(let I=0;I<=r;I++){const F=I/r,D=F*c+a,H=Math.sin(D),N=Math.cos(D);T.x=v*H,T.y=-_*i+m,T.z=v*N,h.push(T.x,T.y,T.z),S.set(H,y,N).normalize(),d.push(S.x,S.y,S.z),f.push(F,1-_),L.push(g++)}x.push(L)}for(let A=0;A<r;A++)for(let L=0;L<s;L++){const _=x[L][A],v=x[L+1][A],I=x[L+1][A+1],F=x[L][A+1];t>0&&(u.push(_,v,F),R+=3),e>0&&(u.push(v,I,F),R+=3)}l.addGroup(p,R,0),p+=R}function M(S){const T=g,R=new Kt,y=new V;let A=0;const L=S===!0?t:e,_=S===!0?1:-1;for(let I=1;I<=r;I++)h.push(0,m*_,0),d.push(0,_,0),f.push(.5,.5),g++;const v=g;for(let I=0;I<=r;I++){const D=I/r*c+a,H=Math.cos(D),N=Math.sin(D);y.x=L*N,y.y=m*_,y.z=L*H,h.push(y.x,y.y,y.z),d.push(0,_,0),R.x=H*.5+.5,R.y=N*.5*_+.5,f.push(R.x,R.y),g++}for(let I=0;I<r;I++){const F=T+I,D=v+I;S===!0?u.push(D,D+1,F):u.push(D+1,D,F),A+=3}l.addGroup(p,A,S===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wo extends rn{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new V,d=new V,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){const b=[],M=p/i;let S=0;p===0&&o===0?S=.5/e:p===i&&c===Math.PI&&(S=-.5/e);for(let T=0;T<=e;T++){const R=T/e;h.x=-t*Math.cos(r+R*s)*Math.sin(o+M*a),h.y=t*Math.cos(o+M*a),h.z=t*Math.sin(r+R*s)*Math.sin(o+M*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(R+S,1-M),b.push(l++)}u.push(b)}for(let p=0;p<i;p++)for(let b=0;b<e;b++){const M=u[p][b+1],S=u[p][b],T=u[p+1][b],R=u[p+1][b+1];(p!==0||o>0)&&f.push(M,S,R),(p!==i-1||c<Math.PI)&&f.push(S,T,R)}this.setIndex(f),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(x,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class nn extends ps{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Q(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xd,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const zu={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Qx{constructor(t,e,i){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const tv=new Qx;class ml{constructor(t){this.manager=t!==void 0?t:tv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ml.DEFAULT_MATERIAL_NAME="__DEFAULT";class ev extends ml{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=zu.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=os("img");function c(){u(),zu.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(h){u(),r&&r(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class nv extends ml{constructor(t){super(t)}load(t,e,i,r){const s=new Ie,o=new ev(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},i,r),s}}class Bd extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Q(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class iv extends Bd{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Q(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ia=new te,ku=new V,Gu=new V;class rv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Kt(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hl,this._frameExtents=new Kt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;ku.setFromMatrixPosition(t.matrixWorld),e.position.copy(ku),Gu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gu),e.updateMatrixWorld(),Ia.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ia),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ia)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class sv extends rv{constructor(){super(new Ld(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ov extends Bd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new sv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class av{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Hu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Hu(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nl);const cv=1.5;function lv(n){const t=new Kx({antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio,cv)),t.setSize(window.innerWidth,window.innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=rd,t.toneMapping=od,t.toneMappingExposure=1.05,t.outputColorSpace=cn,n.appendChild(t.domElement);let e=null;return t.setResizeCallback=i=>{e=i},window.addEventListener("resize",()=>{t.setSize(window.innerWidth,window.innerHeight),e?.(window.innerWidth/window.innerHeight)}),t}function uv(){const n=new ln(50,window.innerWidth/window.innerHeight,.1,500);return n.position.set(0,20,36),n}function Ks(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function oe(n,t){const e=Math.floor(n),i=Math.floor(t),r=n-e,s=t-i,o=r*r*(3-2*r),a=s*s*(3-2*s),c=Ks(e,i),l=Ks(e+1,i),u=Ks(e,i+1),h=Ks(e+1,i+1);return c*(1-o)*(1-a)+l*o*(1-a)+u*(1-o)*a+h*o*a}function _s(n){let t=n>>>0;return function(){t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function it(n,t,e){return n<t?t:n>e?e:n}function Ht(n,t,e){return n+(t-n)*e}function hi(n,t,e,i){return Ht(n,t,1-Math.exp(-e*i))}function ne(n){const t=Math.hypot(n[0],n[1],n[2])||1;return[n[0]/t,n[1]/t,n[2]/t]}function Ye(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function Ct(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function se(n,t){return[n[0]+t[0],n[1]+t[1],n[2]+t[2]]}function Kn(n,t){return[n[0]-t[0],n[1]-t[1],n[2]-t[2]]}function Bi(n,t,e,i){return{x:n,y:t,z:e,p:i}}function zd(n,t){const[e,i,r]=t;return[n.x[0]*e+n.y[0]*i+n.z[0]*r+n.p[0],n.x[1]*e+n.y[1]*i+n.z[1]*r+n.p[1],n.x[2]*e+n.y[2]*i+n.z[2]*r+n.p[2]]}function Xe(n,t,e){const i=Kn(t,n),r=Math.hypot(i[0],i[1],i[2])||1e-4,s=[i[0]/r,i[1]/r,i[2]/r],o=Math.abs(s[1])<.97?[0,1,0]:[1,0,0],a=ne(Ye(o,s)),c=Ye(a,s);return Bi(Ct(a,e),Ct(s,r),Ct(c,e),n)}class Ae{constructor(){this.positions=[],this.colors=[],this.indices=[]}addVertex(t,e,i,r){return this.positions.push(t,e,i),this.colors.push(r[0],r[1],r[2]),this.positions.length/3-1}addTri(t,e,i){this.indices.push(t,e,i)}addQuad(t,e,i,r){this.addTri(t,e,i),this.addTri(t,i,r)}bake(t,e,i){const r=this.positions.length/3;for(let s=0;s<t.p.length;s+=3){const o=zd(e,[t.p[s],t.p[s+1],t.p[s+2]]),a=i(o[0],o[1],o[2]);this.positions.push(o[0],o[1],o[2]),this.colors.push(a[0],a[1],a[2])}for(let s=0;s<t.i.length;s++)this.indices.push(r+t.i[s])}toBufferGeometry(){const t=new rn;return t.setAttribute("position",new me(this.positions,3)),t.setAttribute("color",new me(this.colors,3)),t.setIndex(this.indices),t.computeVertexNormals(),t}}function Ar(n,t){const e=[],i=[],r=[];for(let s=0;s<=t;s++){const o=Math.PI*s/t,a=Math.sin(o),c=Math.cos(o);for(let l=0;l<=n;l++){const u=2*Math.PI*l/n,h=a*Math.cos(u),d=c,f=a*Math.sin(u);e.push(h,d,f),i.push(h,d,f)}}for(let s=0;s<t;s++)for(let o=0;o<n;o++){const a=s*(n+1)+o,c=a+n+1;r.push(a,a+1,c,a+1,c+1,c)}return{p:e,n:i,i:r}}function Xo(n){const t=[],e=[],i=[];for(let s=0;s<=n;s++){const o=2*Math.PI*s/n,a=Math.cos(o),c=Math.sin(o);t.push(a,0,c),e.push(a,0,c),t.push(a,1,c),e.push(a,0,c)}for(let s=0;s<n;s++){const o=s*2;i.push(o,o+1,o+2,o+1,o+3,o+2)}const r=t.length/3;t.push(0,0,0),e.push(0,-1,0),t.push(0,1,0),e.push(0,1,0);for(let s=0;s<n;s++){const o=2*Math.PI*s/n,a=2*Math.PI*(s+1)/n,c=t.length/3;t.push(Math.cos(o),0,Math.sin(o)),e.push(0,-1,0),t.push(Math.cos(a),0,Math.sin(a)),e.push(0,-1,0),i.push(r,c+1,c);const l=t.length/3;t.push(Math.cos(o),1,Math.sin(o)),e.push(0,1,0),t.push(Math.cos(a),1,Math.sin(a)),e.push(0,1,0),i.push(r+1,l,l+1)}return{p:t,n:e,i}}const hv=""+new URL("bark_albedo-DReMtPgm.png",import.meta.url).href,dv=""+new URL("tunnel-dirt_albedo-DgMZYBLi.png",import.meta.url).href,fv=""+new URL("lawn-soil_albedo-mTvxXfeR.png",import.meta.url).href,pv=""+new URL("stone_albedo-CltKTJgX.png",import.meta.url).href,mv=""+new URL("mushroom-cap_albedo-CRHQ2riL.png",import.meta.url).href,po=new Float32Array(256);for(let n=0;n<256;n++){const t=n/255;po[n]=t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function gv(n,t){const e=document.createElement("canvas");e.width=n.width,e.height=n.height;const i=e.getContext("2d",{willReadFrequently:!0});i.drawImage(n,0,0);const r=i.getImageData(0,0,e.width,e.height).data;let s=0,o=0,a=0;const c=e.width*e.height;for(let l=0;l<r.length;l+=4)s+=po[r[l]],o+=po[r[l+1]],a+=po[r[l+2]];t.set(Math.max(s/c,.001),Math.max(o/c,.001),Math.max(a/c,.001))}const _v=new nv;function xs(n,t){const e=new V(.5,.5,.5),i=_v.load(n,r=>{try{gv(r.image,e)}catch(s){console.warn("albedo mean unavailable",s)}});return i.colorSpace=cn,i.wrapS=i.wrapT=Ao,i.repeat.set(1/t,1/t),i.anisotropy=4,i.userData.meanLinear=e,i}const xv=5,vv=16,Mv=45,Sv=12,yv=2.5;let Ev=null,bv=null,Tv=null,wv=null,Av=null;function kd(){return Ev||(Ev=xs(dv,xv))}function Rv(){return bv||(bv=xs(hv,vv))}function Cv(){return Tv||(Tv=xs(fv,Mv))}function Pv(){return wv||(wv=xs(pv,Sv))}function Gd(){return Av||(Av=xs(mv,yv))}const Lv=`
uniform vec3 uTexMid;
uniform vec2 uTexRepeat;
uniform float uTexStrength;
varying vec3 vTexWorld;
varying vec3 vTexNormal;
vec3 gTriTex = vec3(1.0);   // filled by the <map_fragment> injection below,
                            // reused by the emissive one (which runs later)
`,Iv=4,Dv=`
{
  vec3 tn = normalize(vTexNormal);
  vec3 bw = pow(abs(tn), vec3(${Iv.toFixed(1)}));
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
`;function Hd(n,t){Object.assign(n.uniforms,t),n.vertexShader=n.vertexShader.replace("#include <common>",`varying vec3 vTexWorld;
varying vec3 vTexNormal;
#include <common>`).replace("#include <project_vertex>",`#include <project_vertex>
      vec4 texLocal = vec4(transformed, 1.0);
      vec3 texNrm = objectNormal;
      #ifdef USE_INSTANCING
        texLocal = instanceMatrix * texLocal;
        texNrm = mat3(instanceMatrix) * texNrm;
      #endif
      vTexWorld = (modelMatrix * texLocal).xyz;
      vTexNormal = mat3(modelMatrix) * texNrm;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",Lv+`
#include <common>`).replace("#include <map_fragment>",Dv)}function Vd(n,t){return{uTexMid:{value:n.userData.meanLinear},uTexRepeat:{value:n.repeat},uTexStrength:{value:t}}}function vs({map:n,strength:t=1,...e}){const i=new nn({vertexColors:!0,roughness:.95,metalness:0,map:n,...e}),r=Vd(n,t);return i.userData.texUniforms=r,i.onBeforeCompile=s=>Hd(s,r),i.userData.shaderTag="triplanar-albedo",i.customProgramCacheKey=()=>"triplanar-albedo",i}function Wd({map:n,strength:t=1,emissive:e=1.6,...i}){const r=new nn({vertexColors:!0,roughness:.6,metalness:0,map:n,...i}),s=Vd(n,t);return r.userData.texUniforms=s,r.onBeforeCompile=o=>{Hd(o,s),o.fragmentShader=o.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
       totalEmissiveRadiance += vColor * gTriTex * ${e.toFixed(2)};`)},r.userData.shaderTag="triplanar-emissive",r.customProgramCacheKey=()=>"triplanar-emissive",r}const mo=2.2,pe=-166,Be=0,vr=7.2*mo,gl=-132,Io=32,kc=[-9,-140],ee=[13,0,-124],Gc=15,Uv=2.6;function Oe(n){const t=(n-gl)/Io;return t>-1&&t<1?vr+(Io-vr)*Math.pow(Math.sqrt(1-t*t),.72):vr}function re(n,t){let e=.22*oe(n*.11+11,t*.11+5);const i=Math.hypot(n-ee[0],t-ee[2]);if(i<Gc){const r=1-i/Gc;e+=Uv*r*r*(3-2*r)}return e}const Hc=[],pr=[],Xd=[];function _l(n,t){for(let e=0;e<Hc.length;e++){const i=Hc[e],s=Math.atan2(Math.sin(n-i.th),Math.cos(n-i.th))/i.rTh,o=(t-i.z)/i.rZ;if(s*s+o*o<1)return!0}return!1}function Nv(n,t){return _l(t,n)?1/0:Oe(n)}function xl(){const n={};for(const t of pr)n[t.name]=t;return n}function qo(n,t){for(let s=0;s<pr.length;s++){const o=pr[s],a=n-o.origin[0],c=t-o.origin[2],l=a*o.dir[0]+c*o.dir[2];if(l<=-.5||l>=o.uMax+1)continue;const u=a*o.side[0]+c*o.side[2],h=Math.max(o.profR(it(l,0,o.uMax))*.82-1.2,2.2);if(Math.abs(u)>=h+3)continue;const d=it(l,-.5,o.uMax-1.2),f=it(u,-h,h);return[o.origin[0]+o.dir[0]*d+o.side[0]*f,o.origin[2]+o.dir[2]*d+o.side[2]*f]}const e=Math.max(Oe(t)*.82-1.6,3);let i=e,r=e;for(let s=0;s<pr.length;s++){const o=pr[s],a=it(1-Math.abs(t-o.origin[2])/o.doorFalloff,0,1);if(a<=0)continue;const c=Ht(e,Math.abs(o.origin[0])+1.5,a);o.dir[0]>0?c>i&&(i=c):c>r&&(r=c)}return[it(n,-r,i),Math.max(t,pe+5)]}const vl=new Q("#6d5130"),Ms=new Q("#5a4226"),Gi=new Q("#332412"),Fv=new Q("#4c5f2f"),Ov=new Q(Fv).lerp(Gi,.62).multiplyScalar(.58);function jn(n,t,e){return new Q(n).lerp(t,it(e,0,1))}function go(n,t,e,i){return oe(Math.cos(n)*e+t*i+37,Math.sin(n)*e+t*i*.7+91)}function Ml(n){return .86*Math.pow(vr/n,.35)}function Jr(n){const t=Oe(n);return 1.2+t*Ml(t)*.62}function Fi(n,t,e){const i=Oe(t),r=Ml(i),s=.84+.2*go(n,t,1.6,.1)+.1*go(n,t,4.1,.29)+.05*go(n,t,9.3,.62),o=i*s*(1-(e||0)),a=Math.cos(n)*o,c=Math.sin(n)*o*r+Jr(t),l=re(a,t);return[a,Math.max(c,l),t,s]}function Bv(n,t){const e=jn(Gi,Ms,n*.8+.12);return jn(e,vl,t)}function zv(n){const t=jn(Gi,Ms,n*.8+.12);return jn(t,vl,.28+n*.18)}function kv(n){const t=jn(Gi,Ms,n*.75+.15);return jn(t,vl,.55)}function Gv(n){const t=jn(Gi,Ms,n*.6+.08);return jn(t,Ov,.3+n*.3)}function Da(n,t,e,i,r,s,o,a,c,l,u,h){const d=Fi(t,e,0),f=[d[0],re(d[0],d[2]),d[2]],g=ne([Math.cos(t),0,1e-4]),x=ne(Ye([0,1,0],g)),m=r+o,p=r+o*2;function b(P){const z=(P-m)/o;return z>-1&&z<1?i+(s-i)*Math.pow(Math.sqrt(1-z*z),.72):i}function M(P){return .86*Math.pow(i/P,.35)}function S(P){const z=b(P);return 1.1+z*M(z)*.6}function T(P,z,K,J){return oe(Math.cos(P)*K+z*J+c+37,Math.sin(P)*K+z*J*.7+c+91)}function R(P,z,K){const J=b(z),lt=M(J),vt=.84+.2*T(P,z,1.6,.1)+.1*T(P,z,4.1,.29)+.05*T(P,z,9.3,.62),Y=J*vt*(1-(K||0)),tt=Math.cos(P)*Y,at=Math.sin(P)*Y*lt+S(z),ot=f[0]+g[0]*z+x[0]*tt,Tt=f[2]+g[2]*z+x[2]*tt,St=f[1]+at,Dt=re(ot,Tt);return[ot,Math.max(St,Dt),Tt,vt]}{const P=Oe(e),z=Ml(P),K=Math.asin(it((f[1]+S(0)-Jr(e))/(P*z),-.92,.92)),J=t+(Math.cos(t)>=0?K:-K);Hc.push({th:J,z:e,rTh:Math.max(.16,i*1.8/Oe(e)),rZ:i*1.7})}if(h){const P=f[0]+g[0]*1.2,z=f[2]+g[2]*1.2;Xd.push({p:[P,re(P,z)+2.1,z],c:h,name:n})}const y=new Ae,A=1.5,L=[];for(let P=0;P<=p+1e-4;P+=A){const z=[];for(let K=0;K<a;K++){const J=2*Math.PI*K/a,lt=R(J,P,0),vt=it((lt[3]-.84)/.34+.45,0,1);z.push(y.addVertex(lt[0],lt[1],lt[2],u(vt,lt[0],lt[1],lt[2]).multiplyScalar(l).toArray()))}L.push(z)}for(let P=0;P<L.length-1;P++)for(let z=0;z<a;z++){const K=(z+1)%a;y.addQuad(L[P][z],L[P][K],L[P+1][K],L[P+1][z])}const _=f[0]+g[0]*p,v=f[2]+g[2]*p,I=f[1]+S(p)*.6,F=y.addVertex(_,I,v,u(.2,_,I,v).multiplyScalar(l).toArray()),D=L[L.length-1];for(let P=0;P<a;P++)y.addTri(F,D[P],D[(P+1)%a]);const H={name:n,origin:f,dir:g,side:x,uMax:p,uEnd:m,profR:b,pointAt:R,doorFalloff:i*2.2};pr.push(H);const N=f[0]+g[0]*m,O=f[2]+g[2]*m;return H.center=[N,re(N,O),O],{geometry:y.toBufferGeometry(),branch:H}}function Hv(){const n=new be;n.name="underground";const t=Da("granary",Math.PI,-70,3.3*mo,9,13*1.5,10,30,4001,1,u=>zv(u),[.55,.4,.2]),e=Da("brood",0,-120,4.2*mo,8,17*1.5,13,34,5117,1,u=>kv(u),[.68,.5,.25]),i=Da("midden",0,-40,2.9*mo,7,10*1.5,8,26,6229,.46,u=>Gv(u),[.3,.44,.28]);n.add(new Xt(t.geometry,js())),n.add(new Xt(e.geometry,js())),n.add(new Xt(i.geometry,js()));const r=new Ae,s=44,o=1.7,a=[];for(let u=pe;u<=3.0001;u+=o){const h=[];for(let d=0;d<s;d++){const f=2*Math.PI*d/s,g=Fi(f,u,0),x=u>-14?1+Math.pow((u+14)/17,2)*.9:1;h.push([g[0]*x,Math.max(g[1]*(x*.5+.5),re(g[0]*x,u)),u,g[3]])}a.push(h)}for(let u=0;u<a.length;u++){const h=[];for(let d=0;d<s;d++){const f=a[u][d],g=it(1-Math.abs(f[2]-gl)/(Io*1.6),0,1),x=it((f[3]-.84)/.34+.45,0,1),m=oe(f[0]*.13+3,f[2]*.13+8),p=Bv(x,g*.45+m*.2);h.push(r.addVertex(f[0],f[1],f[2],p.toArray()))}a[u].idx=h}for(let u=0;u<a.length-1;u++)for(let h=0;h<s;h++){const d=(h+1)%s;_l(2*Math.PI*h/s,a[u][h][2])||r.addQuad(a[u].idx[h],a[u].idx[d],a[u+1].idx[d],a[u+1].idx[h])}{let u=a[0].idx;const h=4;for(let f=1;f<=h;f++){const g=Math.cos(f/h*Math.PI*.5),x=pe-Math.sin(f/h*Math.PI*.5)*9,m=[];for(let p=0;p<s;p++){const b=2*Math.PI*p/s,M=a[0][p],S=.86+.28*go(b,x*1.7,2.3,.2),T=M[0]*g*S,R=Jr(pe)+(M[1]-Jr(pe))*g*S,y=jn(Gi,Ms,.15+S*.4).multiplyScalar(.35+.3*S);m.push(r.addVertex(T,Math.max(R,re(T,x)),x,y.toArray()))}for(let p=0;p<s;p++){const b=(p+1)%s;r.addQuad(u[p],u[b],m[b],m[p])}u=m}const d=r.addVertex(0,Jr(pe)*.6,pe-10,Gi.clone().multiplyScalar(.3).toArray());for(let f=0;f<s;f++)r.addTri(d,u[f],u[(f+1)%s])}const c=new Xt(r.toBufferGeometry(),js());c.name="tunnel",n.add(c);const l=Xd.slice();return l.push({p:[0,5,3],c:[1.15,1.2,1.35],name:"mouth"}),{group:n,doorLights:l,rooms:{granary:t.branch,brood:e.branch,midden:i.branch}}}let Ua=null;function js(){return Ua||(Ua=vs({map:kd(),strength:.62,side:ue})),Ua}const Ee={x0:-208,x1:190,z0:0,z1:250},as={x0:-300,x1:252,z0:0,z1:322},qn=-4.5,Yn=n=>{const t=it(n,0,1);return t*t*(3-2*t)},_n={edgeX:-196,bankTop:2,bankRun:15,depth:5,bedRun:30,farBankAt:68,farBankRun:46,farBankTop:24,blendRun:36};function Ss(n){return _n.edgeX+2*Math.sin(n*.021)+1*Math.sin(n*.047+1.3)}function Zn(n,t){return n-Ss(t)}function Vv(n){if(n<=0)return qn+(_n.bankTop-qn)*Yn(-n/_n.bankRun);let t=qn-_n.depth*Yn(n/_n.bedRun);return n>_n.farBankAt&&(t+=_n.farBankTop*Yn((n-_n.farBankAt)/_n.farBankRun)),t}const Vu=[{x:0,z:20,r:64,amp:-3.5},{x:62,z:78,r:62,amp:16},{x:96,z:44,r:40,amp:9},{x:88,z:168,r:78,amp:-14},{x:88,z:168,r:30,amp:4},{x:-85,z:95,r:46,amp:6},{x:-85,z:95,r:26,amp:1.5},{x:-150,z:150,r:66,amp:13},{x:-132,z:44,r:50,amp:8},{x:24,z:128,r:44,amp:-8},{x:-40,z:300,r:150,amp:34},{x:130,z:296,r:140,amp:30},{x:250,z:120,r:130,amp:30},{x:218,z:232,r:100,amp:22}];function Wu(n,t){let e=(oe(n*.012,t*.012)-.5)*4.2+(oe(n*.052,t*.052)-.5)*1.3;for(let i=0;i<Vu.length;i++){const r=Vu[i],s=Math.hypot(n-r.x,t-r.z);s>=r.r||(e+=r.amp*Yn(1-s/r.r))}return e}function Nt(n,t){if(t<Be)return re(n,t);const e=n-Ss(t),i=1-Yn(e/_n.blendRun),r=i>0?Ht(Wu(n,t),Vv(-e),i):Wu(n,t),s=(1-Yn(t/26))*it(1-Math.abs(n)/40,0,1);return s>0?Ht(r,re(n,0),s):r}function ys(n,t){return ne([Nt(n-1.4,t)-Nt(n+1.4,t),2*1.4,Nt(n,t-1.4)-Nt(n,t+1.4)])}function Ur(n,t){const i=(Nt(n+1.5,t)-Nt(n-1.5,t))/3,r=(Nt(n,t+1.5)-Nt(n,t-1.5))/(2*1.5);return Math.hypot(i,r)}function _i(n,t){return t<Be?0:Math.max(0,qn-Nt(n,t))}const qd=.62;function Sl(n,t){const e=oe(n*.006,t*.006),i=it(oe(n*.018,t*.018)*2.3-.55+(e-.5)*.6,0,1)*(.55+.45*oe(n*.07,t*.07)),r=_i(n,t),s=Zn(n,t),o=Ur(n,t);let a="soil";return r>0?a="water":s<14?a="sand":o>qd?a="rock":i>.5&&(a="moss"),{kind:a,moss:i,slope:o,depth:r,toWater:s}}function Wv(n,t){const e=Sl(n,t);return{y:Nt(n,t),normal:ys(n,t),slope:e.slope,soil:e.kind,moss:e.moss,waterDepth:e.depth,distToWater:e.toWater,diggable:e.depth===0&&e.slope<=qd&&e.toWater>10}}function Vc(n,t){const e=Ss(t)+1;return[it(Math.max(n,e),Ee.x0,Ee.x1),it(t,Ee.z0,Ee.z1)]}const Xv=new Q("#86673B"),qv=new Q("#5A4529"),Yv=new Q("#5F8034"),$v=new Q("#9DBE58"),Kv=new Q("#A79463"),jv=new Q("#4A5540"),Zv=new Q("#7C7566");function Mn(n,t,e){return new Q(n).lerp(t,it(e,0,1))}const Zs=6;function Jv(){const{x0:n,x1:t,z0:e,z1:i}=as,r=Math.floor((t-n)/Zs)+1,s=Math.floor((i-e)/Zs)+1,o=new Ae;for(let c=0;c<r;c++)for(let l=0;l<s;l++){const u=n+c*Zs,h=e+l*Zs,d=Nt(u,h),f=oe(u*.006,h*.006),g=it(oe(u*.018,h*.018)*2.3-.55+(f-.5)*.6,0,1)*(.55+.45*oe(u*.07,h*.07));let x=Mn(Mn(Xv,qv,oe(u*.09,h*.09)),Mn(Yv,$v,oe(u*.05,h*.05)),g);const m=Zn(u,h);m<30&&(x=Mn(x,Kv,Yn((30-m)/26)),d<qn+.6&&(x=Mn(x,jv,Yn((qn+.6-d)/3.5))));const p=Ur(u,h);p>.45&&(x=Mn(x,Zv,Yn((p-.45)/.5)*.75)),o.addVertex(u,d,h,x.toArray())}for(let c=0;c<r-1;c++)for(let l=0;l<s-1;l++){const u=c*s+l,h=(c+1)*s+l,d=(c+1)*s+l+1,f=c*s+l+1;o.addQuad(u,h,d,f)}const a=new Xt(o.toBufferGeometry(),vs({map:Cv(),strength:.8,side:ue}));return a.name="lawn",a.receiveShadow=!0,a}const Qv=new Q("#9CC6E4"),tM=`
uniform float uWaveTime;
vec2 waterWaveGrad(vec3 p, out float h) {
  float a = p.x * 0.085 + uWaveTime * 1.05;
  float b = p.z * 0.115 - uWaveTime * 0.77 + p.x * 0.04;
  float c = p.z * 0.031 + uWaveTime * 0.31;
  h = sin(a) * 0.24 + sin(b) * 0.17 + sin(c) * 0.30;
  return vec2(cos(a) * 0.24 * 0.085 + cos(b) * 0.17 * 0.04,
              cos(b) * 0.17 * 0.115 + cos(c) * 0.30 * 0.031);
}
`;function eM(){const{x0:n,z0:t,z1:e}=as,i=56,r=14,s=new Ae,o=new Q("#3E6B7A"),a=new Q("#22414F");for(let h=0;h<=i;h++){const d=t+(e-t)*(h/i),f=Ss(d)+1.2;for(let g=0;g<=r;g++){const x=Ht(n,f,g/r),m=it((qn-Nt(x,d))/6,0,1);s.addVertex(x,qn,d,Mn(o,a,m).toArray())}}for(let h=0;h<i;h++)for(let d=0;d<r;d++){const f=h*(r+1)+d;s.addQuad(f+r+1,f+r+2,f+1,f)}const c=new nn({vertexColors:!0,roughness:.16,metalness:0,transparent:!0,opacity:.86,side:ue}),l={uWaveTime:{value:0},uSkyCol:{value:Qv}};c.userData.waterUniforms=l,c.userData.shaderTag="water-ripple",c.onBeforeCompile=h=>{Object.assign(h.uniforms,l),h.vertexShader=h.vertexShader.replace("#include <common>",tM+`
#include <common>`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        float wh; vec2 wg = waterWaveGrad(position, wh);
        objectNormal = normalize(vec3(-wg.x, 1.0, -wg.y));`).replace("#include <begin_vertex>",`#include <begin_vertex>
        transformed.y += wh;`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`uniform vec3 uSkyCol;
#include <common>`).replace("#include <tonemapping_fragment>",`
        {
          float fres = pow(1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0), 3.0);
          gl_FragColor.rgb = mix(gl_FragColor.rgb, uSkyCol, 0.13 + 0.72 * fres);
        }
        #include <tonemapping_fragment>`)},c.customProgramCacheKey=()=>"water-ripple";const u=new Xt(s.toBufferGeometry(),c);return u.name="water",u.receiveShadow=!1,{mesh:u,update(h){l.uWaveTime.value=h}}}const nM=[{r:442,segs:96,base:-120,peak:165,seed:3.1,rough:.55,haze:.72,tint:"#8FA6C4"},{r:384,segs:96,base:-120,peak:118,seed:11.7,rough:.75,haze:.5,tint:"#6E86A6"}];function Xu(n,t,e){const i=oe(Math.cos(n)*2.1+t,Math.sin(n)*2.1+t),r=oe(Math.cos(n)*5.3+t*2,Math.sin(n)*5.3+t*2),s=oe(Math.cos(n)*11+t*3,Math.sin(n)*11+t*3);return it(.3+(i-.5)*1.5+(r-.5)*e+(s-.5)*e*.45,.05,1)}function iM(n="#8B8399",t="#AFC8D8"){const e=new Q(n),i=new Q(t),r=new be;r.name="horizon";const s=[];for(const a of nM){const c=new Ae,l=[],u=new Q(a.tint),h=[],d=[],f=[];for(let x=0;x<=a.segs;x++){const m=x/a.segs*Math.PI*2,p=Xu(m,a.seed,a.rough),b=a.base+(a.peak-a.base)*p,M=Math.cos(m)*a.r,S=Math.sin(m)*a.r,T=Xu(m-.04,a.seed,a.rough),R=it(.5+(p-T)*6,0,1),y=Mn(u.clone().multiplyScalar(.72),u.clone().multiplyScalar(1.16),R),A=v=>{const I=Mn(y,v,a.haze*.75),F=Mn(y.clone().multiplyScalar(.85),v,Math.min(1,a.haze+.22));return[I,Mn(I,F,.6),F]},L=A(e),_=A(i);h.push(c.addVertex(M,b,S,L[0].toArray())),d.push(c.addVertex(M,Ht(a.base,b,.45),S,L[1].toArray())),f.push(c.addVertex(M,a.base,S,L[2].toArray()));for(const v of _)l.push(v.r,v.g,v.b)}for(let x=0;x<a.segs;x++)c.addQuad(h[x],h[x+1],d[x+1],d[x]),c.addQuad(d[x],d[x+1],f[x+1],f[x]);const g=new Xt(c.toBufferGeometry(),new ms({vertexColors:!0,fog:!1,side:ue,depthTest:!1,depthWrite:!1}));g.renderOrder=-1e3,g.frustumCulled=!1,r.add(g),s.push({mesh:g,base:g.geometry.attributes.color.array.slice(),alt:new Float32Array(l)})}let o=-1;return{group:r,update(a,c=0){if(r.position.set(a.position.x,0,a.position.z),!(Math.abs(c-o)<.002)){o=c;for(const l of s){const u=l.mesh.geometry.attributes.color;for(let h=0;h<u.array.length;h++)u.array[h]=l.base[h]+(l.alt[h]-l.base[h])*c;u.needsUpdate=!0}}}}}const Do={position:new V(0,0,0),radius:.9};function Yd(n){return n<42?Math.min(Math.max(n/40,.55),1.45):Math.min(Math.max(2.1+(n-42)*.038,2.1),4.4)}function rM(n){return Yd(n)*.5}function pi(n,t){const e=Math.cos(n.ang),i=Math.sin(n.ang),r=t*t*n.h*.26;return[n.x+e*r,n.baseY+n.h*t*(1-t*.13),n.z+i*r]}function Uo(n,t){const e=pi(n,t),i=pi(n,Math.min(t+.01,1)),r=ne(Kn(i,e)),s=[-Math.sin(n.ang),0,Math.cos(n.ang)],o=ne(Ye(r,s));return{pos:e,tangent:r,width:s,normal:o}}const Na=6;function sM(){const n=[],t=[],e=[],i=[];for(let s=0;s<=Na;s++){const o=s/Na;n.push(-.5,o,0,.5,o,0),t.push(o,o),e.push(-1,1)}for(let s=1;s<=Na;s++){const o=(s-1)*2,a=o+1,c=s*2,l=c+1;i.push(o,a,l,o,l,c)}const r=new rn;return r.setAttribute("position",new me(n,3)),r.setAttribute("aT",new me(t,1)),r.setAttribute("aSide",new me(e,1)),r.setIndex(i),r}const oM=new Q("#5A7331"),aM=new Q("#8FB055"),cM=new Q("#C6DC82"),qu=`
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
`;function lM({count:n=1600,seed:t=7}={}){const e=_s(t),i=sM(),r=new Float32Array(n*3),s=new Float32Array(n),o=new Float32Array(n),a=new Float32Array(n),c=new Float32Array(n*3),l=new Float32Array(n),u=new Float32Array(n),h=[];let d=0,f=0;for(;d<n&&f<n*8;){f++;const A=Ht(as.x0+8,Ee.x1-4,e()),L=6+e()*(Ee.z1-6);if(_i(A,L)>0||Math.abs(A)<16&&L<34&&e()<.82)continue;const v=.72+.28*oe(A*.01,L*.01),I=e()<.22?48+e()*60*v:(14+e()*26)*v,F=e()*Math.PI*2,D=Nt(A,L),H=new Q(aM).lerp(cM,e());r[d*3]=A,r[d*3+1]=D,r[d*3+2]=L,s[d]=I,o[d]=F,a[d]=e()*Math.PI*2,c[d*3]=H.r,c[d*3+1]=H.g,c[d*3+2]=H.b,l[d]=Yd(I),u[d]=(e()*2-1)*.85,h.push({x:A,z:L,h:I,baseY:D,w:rM(I),ang:F}),d++}const g=d;i.setAttribute("aBase",new Cn(r.subarray(0,g*3),3)),i.setAttribute("aH",new Cn(s.subarray(0,g),1)),i.setAttribute("aAng",new Cn(o.subarray(0,g),1)),i.setAttribute("aPhase",new Cn(a.subarray(0,g),1)),i.setAttribute("aTip",new Cn(c.subarray(0,g*3),3)),i.setAttribute("aWidth",new Cn(l.subarray(0,g),1)),i.setAttribute("aTwist",new Cn(u.subarray(0,g),1));const x=(as.x0+Ee.x1)/2,m=(Ee.z0+Ee.z1)/2,p=Math.hypot(Ee.x1-x,Ee.z1-m)+120;i.boundingSphere=new Ir(new V(x,40,m),p);const b={uTime:{value:0},uWind:{value:.55},uAntPos:{value:new V(0,0,-9999)},uAntRadius:{value:.9},uBaseColor:{value:new Q(oM)},uOccNear:{value:5},uOccFar:{value:16},uTransl:{value:.16}},M=new nn({roughness:.85,metalness:0,side:ue});M.extensions={derivatives:!0},M.onBeforeCompile=A=>{Object.assign(A.uniforms,b),A.vertexShader=A.vertexShader.replace("#include <common>",qu+`
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
      `)};const S=new Od({depthPacking:_d,side:ue});S.onBeforeCompile=A=>{Object.assign(A.uniforms,b),A.vertexShader=A.vertexShader.replace("#include <common>",qu+`
#include <common>`).replace("#include <begin_vertex>",`
        vec3 gPos, gNrm;
        grassShape(gPos, gNrm);
        vec3 transformed = gPos;
      `)},S.customProgramCacheKey=()=>"grass-depth";const T=new Vo(i,M,g);T.name="grass",T.castShadow=!0,T.receiveShadow=!0,T.customDepthMaterial=S;const R=new te;for(let A=0;A<g;A++)T.setMatrixAt(A,R);T.instanceMatrix.needsUpdate=!0;function y(A,L){b.uTime.value=L,b.uAntPos.value.copy(Do.position),b.uAntRadius.value=Do.radius}return{mesh:T,footprints:h,update:y}}const Wt={x:-85,z:95,h:340,ang:Math.PI/2,w:22};Wt.baseY=Nt(Wt.x,Wt.z);const uM=new Q("#5a4226"),hM=new Q("#332412"),$d=new Q("#4a3418"),Fa=new Q(uM).lerp($d,.3),Oa=new Q(hM).lerp($d,.55),Yu=new Q("#6C8E3C"),$u=new Q("#AECB6E");function Js(n,t,e){return new Q(n).lerp(t,it(e,0,1))}const Ln=.8,dM=6.2;function Oi(n){return pi(Wt,n)}function Wc(n){const t=Oi(n),e=Oi(Math.min(n+.01,1)),i=ne(Kn(e,t)),r=Math.abs(i[1])<.97?[0,1,0]:[1,0,0],s=ne(Ye(r,i));return{p:t,x:s,z:Ye(s,i)}}function Hi(n){return Ht(Wt.w,dM,Math.pow(it(n,0,Ln)/Ln,.7))}const yl=Ln*.55,Ku=Math.PI*1.511,fM=98,pM=36,mM=9.6,Kd=5,Xc=Wc(yl),jd=ne(se(Ct(Xc.x,Math.cos(Ku)),Ct(Xc.z,Math.sin(Ku)))),gM=se(Xc.p,Ct(jd,Hi(yl)*.7));function Qr(n){const t=1-(1-n)*(1-n);return se(gM,se(Ct(jd,n*fM),[0,t*pM,0]))}function Zd(n){return Ht(mM,Kd,it(n,0,1))}function Jd(n){const t=Qr(it(n-.005,0,1)),e=Qr(it(n+.005,0,1)),i=ne(Kn(e,t)),r=ne(Ye(i,[0,1,0])),s=ne(Ye(r,i));return{pos:Qr(n),fwd:i,side:r,up:s}}const In={splitT:yl,point:Qr,radius:Zd,basis:Jd,tipPos:Qr(1),tipRadius:Kd};Wt.walkBranch=In;function ju(n){const t=new Ae,e=new Ae,i=_s(n?481001:481002),r=n?20:4,s=n?16:6,o=[];for(let g=0;g<=r;g++){const x=g/r*Ln,m=Wc(x),p=Hi(x),b=[];for(let M=0;M<s;M++){const S=2*Math.PI*M/s,T=n?.86+.1*oe(Math.cos(S)*2.2+x*13,Math.sin(S)*2.2+x*13+30)+.06*oe(Math.cos(S)*6.4+x*29+8,Math.sin(S)*6.4+x*29+51):1,R=p*T,y=se(m.p,se(Ct(m.x,Math.cos(S)*R),Ct(m.z,Math.sin(S)*R))),A=it((T-.86)/.2+.4,0,1),L=Js(Oa,Fa,A);b.push(t.addVertex(y[0],y[1],y[2],L.toArray()))}o.push(b)}for(let g=0;g<o.length-1;g++)for(let x=0;x<s;x++){const m=(x+1)%s;t.addQuad(o[g][x],o[g][m],o[g+1][m],o[g+1][x])}const a=Xo(n?7:5),c=Ar(n?8:6,n?5:4),l=Js(Yu,$u,.42);function u(g,x,m){const p=x*(.9+i()*.3),b=x*(.75+i()*.25),M={x:[p,0,0],y:[0,b,0],z:[0,0,p],p:g};e.bake(c,M,()=>(n?Js(Yu,$u,m):l).toArray())}const h=n?10:3,d=n?10:5,f=[];for(let g=0;g<=h;g++){const x=g/h,m=Jd(x),p=Zd(x),b=[];for(let M=0;M<d;M++){const S=2*Math.PI*M/d,T=n?.9+.1*oe(Math.cos(S)*2.4+x*11+100,Math.sin(S)*2.4+x*11+44):1,R=p*T,y=se(m.pos,se(Ct(m.side,Math.cos(S)*R),Ct(m.up,Math.sin(S)*R))),A=Js(Oa,Fa,it((T-.9)/.1,0,1));b.push(t.addVertex(y[0],y[1],y[2],A.toArray()))}f.push(b)}for(let g=0;g<f.length-1;g++)for(let x=0;x<d;x++){const m=(x+1)%d;t.addQuad(f[g][x],f[g][m],f[g+1][m],f[g+1][x])}if(n){const g=Oi(0),x=Wt.w;for(let p=0;p<4;p++){const b=p/4*Math.PI*2+i()*.5,M=x*1.6+i()*3,S=[g[0],g[1]+x*.7,g[2]],T=[g[0]+Math.cos(b)*M,g[1]-1.6,g[2]+Math.sin(b)*M],R=Xe(S,T,x*.5);t.bake(a,R,()=>Oa.toArray())}const m=5;for(let p=0;p<m;p++){const b=Ln*(.6+p/m*.35+i()*.03),M=Wc(b),S=p/m*Math.PI*2+i()*.7,T=ne(se(Ct(M.x,Math.cos(S)),Ct(M.z,Math.sin(S)))),R=ne(se(Ct(T,.7),[0,.7,0])),y=se(M.p,Ct(T,Hi(b)*.7)),A=34+i()*22,L=se(y,Ct(R,A)),_=3.4+i()*1.4,v=Xe(y,L,_),I=new Q(Fa).multiplyScalar(.9);t.bake(a,v,()=>I.toArray()),u(L,30+i()*13,i()),u(se(y,Ct(Kn(L,y),.55)),22+i()*9,i())}u(se(Oi(Ln),[0,12,0]),34,.5)}else u(se(Oi(Ln),[-14,14,6]),55,.5),u(se(Oi(Ln),[18,22,-8]),48,.5);return{bark:t.toBufferGeometry(),leaf:e.toBufferGeometry()}}const _M=130,xM=170;function vM(){const n=vs({map:Rv(),strength:1,roughness:.92,side:ue}),t=new nn({vertexColors:!0,roughness:.92,metalness:0,side:ue}),e=ju(!0),i=ju(!1),r=new be;r.add(new Xt(e.bark,n),new Xt(e.leaf,t));const s=new be;s.add(new Xt(i.bark,n),new Xt(i.leaf,t));for(const l of r.children)l.castShadow=!0,l.receiveShadow=!0;for(const l of s.children)l.castShadow=!0;s.visible=!1;const o=new be;o.name="tree",o.add(r,s);let a=!0;function c(l){const u=Math.hypot(l.position.x-Wt.x,l.position.z-Wt.z);a&&u>xM?a=!1:!a&&u<_M&&(a=!0),r.visible=a,s.visible=!a}return{group:o,update:c}}const Rr=8,MM=.3,_o=[];function Sn(n,t){const e={p:[n[0],n[1],n[2]],c:[t[0],t[1],t[2]],_d:0};return _o.push(e),e}const Ri=new Float32Array(Rr*3),Ci=new Float32Array(Rr*3),Ii=new he(0,0,0,1),No=new he(0,1,0,0),SM={uLightPos:{value:Ri},uLightCol:{value:Ci},uPitA:{value:Ii},uPitB:{value:No}};function yM(n,t,e,i,r){Ii.set(n,t,e,Math.max(i,.001)),No.set(1,Math.max(r,.001),0,0)}function qc(n,t,e){if(No.x<.5)return 0;const i=a=>{const c=Math.min(1,Math.max(0,a));return c*c*(3-2*c)},r=Math.hypot(n-Ii.x,e-Ii.z),s=1-i((r-Ii.w*.9)/(Ii.w*.8)),o=Math.min(1,Math.max(0,(Ii.y-t)/No.y));return s*i((o-.04)/.46)}function EM(n){const t=n.x,e=n.y,i=n.z;for(let s=0;s<_o.length;s++){const o=_o[s],a=o.p[0]-t,c=o.p[1]-e,l=o.p[2]-i;o._d=a*a+c*c+l*l}const r=_o.slice().sort((s,o)=>s._d-o._d);for(let s=0;s<Rr;s++){const o=r[s];o?(Ri[s*3]=o.p[0],Ri[s*3+1]=o.p[1],Ri[s*3+2]=o.p[2],Ci[s*3]=o.c[0],Ci[s*3+1]=o.c[1],Ci[s*3+2]=o.c[2]):(Ri[s*3]=Ri[s*3+1]=Ri[s*3+2]=0,Ci[s*3]=Ci[s*3+1]=Ci[s*3+2]=0)}}function bM(n,t,e){if(e>=Be)return .9;const i=Math.max(0,Math.min(1,(e-pe)/(Be-pe)));return .12+.88*Math.pow(i,1.6)}const TM=`
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
  float t = clamp((w.z - (${pe.toFixed(1)})) / (${(Be-pe).toFixed(1)}), 0.0, 1.0);
  return (0.12 + 0.88 * pow(t, 1.6)) * pit;
}
`;function Yo(n){if(!n||n.userData.nestShaded)return n;n.userData.nestShaded=!0;const t=n.onBeforeCompile;n.onBeforeCompile=function(i,r){t&&t.call(this,i,r),Object.assign(i.uniforms,SM),i.vertexShader=i.vertexShader.replace("#include <common>",`varying vec3 vNestWorld;
#include <common>`).replace("#include <project_vertex>",`#include <project_vertex>
  vec4 nestLocal = vec4(transformed, 1.0);
  #ifdef USE_INSTANCING
    nestLocal = instanceMatrix * nestLocal;
  #endif
  vNestWorld = (modelMatrix * nestLocal).xyz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",TM+`
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
          reflectedLight.indirectDiffuse *= max(nestDay, ${MM.toFixed(2)});
          vec3 nestSum = vec3(0.0);
          for (int i = 0; i < ${Rr}; i++) {
            vec3 Ld = uLightPos[i] - vNestWorld;
            float d = length(Ld);
            float att = 1.0 / (1.0 + d * d * 0.017);
            nestSum += uLightCol[i] * max(dot(normal, Ld / max(d, 0.001)), 0.0) * att;
          }
          reflectedLight.directDiffuse += diffuseColor.rgb * nestSum;
        }
      `)};const e=n.userData.shaderTag||"";return n.customProgramCacheKey=()=>"nest-shading|"+e,n.needsUpdate=!0,n}const ze=n=>new Q(n).toArray(),Qe=(n,t)=>[n[0]*t,n[1]*t,n[2]*t],si=(n,t,e,i)=>[n[0]*t,n[1]*e,n[2]*i],oi=(n,t,e)=>[Ht(n[0],t[0],e),Ht(n[1],t[1],e),Ht(n[2],t[2],e)],wM=ze("#6d5130"),AM=ze("#5a4226"),ts=ze("#332412"),xo=ze("#4c5f2f"),Ba=ze("#6a6154"),RM="#5E4526",CM=ze("#4a3418"),Zu=ze(RM),Ju=ze("#efdcb0"),Qu=ze("#7a6040"),PM=ze("#ffc46a"),za=ze("#c497d9"),LM=ze("#e0a752"),th=oi(ze("#e07356"),ze("#e6b558"),.5),IM=ze("#9db0d8"),DM=Qe(oi(xo,ts,.62),.58),UM=Qe(ts,.7),ka=[.72,.48,1.75],NM=[1.95,1.2,.52],Vi=[],Wi=[];function El(n){return n.r*.65}function FM(n){const t=new Ae,e=new Ae,i=new Ae,r=_s(20260812),s=Ar(10,7),o=Ar(6,4),a=Xo(8),c=(T,R,y,A)=>Bi([T,0,0],[0,R,0],[0,0,y],A);{const y=[];for(let A=0;A<=9;A++){const L=[];for(let _=0;_<=30;_++){const v=2*Math.PI*_/30,I=Gc*1.02*A/9,F=ee[0]+Math.cos(v)*I,D=ee[2]+Math.sin(v)*I,H=re(F,D)+.08,N=oi(wM,AM,it(.3+oe(F*.2,D*.2)*.5,0,1));L.push(t.addVertex(F,H,D,Qe(N,.65+.35*(1-A/9))))}y.push(L)}for(let A=0;A<9;A++)for(let L=0;L<30;L++)t.addQuad(y[A][L],y[A][L+1],y[A+1][L+1],y[A+1][L])}const l=Qe(CM,.8);function u(T,R,y,A,L,_){let I=null;for(let F=0;F<=8;F++){const D=F/8,H=Math.sin(D*Math.PI),N=Ht(R,y,D),O=Fi(N,T+_*H,L*H);I&&t.bake(a,Xe(I,O,A*(.65+.5*H)),()=>l),I=O}}for(let T=0;T<30;T++){const R=pe+8+r()*(Math.abs(pe)-16),y=Math.PI*(.15+r()*.7);u(R,y,y+.5+r()*1.3,.5+r()*.9,.06+r()*.16,(r()-.5)*9)}const h=Qe(Zu,.55);for(let T=0;T<150;T++){const R=pe+5+r()*(Math.abs(pe)-10),y=Math.PI*(.18+r()*.64),A=Fi(y,R,.02),L=1.2+r()*(Oe(R)>16?7:3),_=[A[0]+(r()-.5)*.8,A[1]-L,A[2]+(r()-.5)*.8];t.bake(a,Xe(A,_,.09+r()*.1),()=>h)}for(let T=0;T<520;T++){const R=pe+3+r()*(Math.abs(pe)-5),y=r()*Math.PI*2,A=Fi(y,R,.01),L=.22+r()*.55,_=Qe(Qu,(.7+r()*.7)*(.5+r()*.5));t.bake(o,c(L,L*.8,L,A),()=>_)}for(let T=0;T<120;T++){const R=pe+5+r()*(Math.abs(pe)-8),y=Oe(R)*.7,A=(r()-.5)*2*y,L=.3+r()*.9,_=Qe(Ba,(.6+r()*.8)*.8);i.bake(o,c(L*1.3,L*.7,L*1.1,[A,re(A,R)+L*.3,R]),()=>_)}function d(T,R,y,A,L,_,v){if(Math.hypot(T-kc[0],R-kc[1])<15)return;const I=si(L,.3,.28,.4),F=v||si(L,.95,.62,1.15);for(let D=0;D<y;D++){const H=T+(r()-.5)*7,N=R+(r()-.5)*7,O=A*(.45+r()*.9),P=re(H,N),z=[H,P+1.7*O,N];t.bake(a,Xe([H,P,N],z,.22*O),()=>I),e.bake(s,c(1.15*O,.8*O,1.15*O,z),()=>F),Vi.push({x:H,z:N,r:1.15*O+.5})}Sn([T,re(T,R)+2.4,R],_)}for(let T=0;T<9;T++){const R=-14-T*10.5;d((T%2?1:-1)*(3.5+r()*1.8),R,4+Math.floor(r()*4),1.3,za,ka)}for(let T=0;T<8;T++){const R=r()*Math.PI*2,y=17+r()*9;let A=ee[0]+Math.cos(R)*y;const L=ee[2]+Math.sin(R)*y,_=Oe(L)*.72;Math.abs(A)>_&&(A=Math.sign(A)*_),d(A,L,5+Math.floor(r()*5),1.9,za,ka)}const f=Qe(Zu,.36),g=si(PM,1.25,1.15,1.4);for(let T=0;T<26;T++){const R=Math.PI*(.2+r()*.6),y=gl+(r()-.5)*Io*1.5,A=Fi(R,y,.03),L=[A[0],A[1]-(3+r()*11),A[2]];t.bake(a,Xe(A,L,.07),()=>f);const _=.55+r()*.75;e.bake(s,c(_,_*1.25,_,L),()=>g),T%3===0&&Sn(L,NM)}const x=si(Ju,.76,.7,.58);for(let T=0;T<5;T++){const R=Math.PI*(.15+T*.42),y=8+r()*5,A=ee[0]+Math.cos(R)*y,L=ee[2]+Math.sin(R)*y;for(let _=0;_<22;_++){const v=A+(r()-.5)*5.5,I=L+(r()-.5)*5.5,F=.5+r()*.35;t.bake(s,c(F*.72,F*.72,F*1.5,[v,re(v,I)+F*.6,I]),()=>x)}Sn([A,re(A,L)+1.5,L],[.55,.42,.22])}if(Sn([ee[0],re(ee[0],ee[2])+9,ee[2]],[1.5,1.05,.5]),n&&n.granary){const T=n.granary;for(let y=0;y<5;y++){const A=(r()-.5)*Math.PI*1.6,L=it(T.uEnd+(r()-.5)*T.uMax*.5,T.uMax*.42,T.uMax*.96),_=T.pointAt(A,L,.12);for(let v=0;v<26;v++){const I=_[0]+(r()-.5)*4.5,F=_[2]+(r()-.5)*4.5,D=.5+r()*1.3,H=it(1-Math.hypot(I-_[0],F-_[2])/4.5,0,1),N=Qe(oi(oi(LM,th,r()*.4),ts,H*.5),.55+.35*(1-H));t.bake(o,c(D,D*.85,D,[I,re(I,F)+D*.4,F]),()=>N)}}const R=si(th,.94,.81,.51);for(let y=0;y<10;y++){const A=(r()-.5)*Math.PI*1.5,L=it(T.uEnd+(r()-.5)*T.uMax*.55,4,T.uMax-2),_=r()<.5,v=T.pointAt(A,L,_?.85:.06),I=.5+r()*.7,F=_?v[1]-I*(.6+r()*1.6):re(v[0],v[2])+I*.55;t.bake(s,c(I*.8,I*1.3,I*.8,[v[0],F,v[2]]),()=>R)}for(let y=0;y<2;y++){const A=T.pointAt(0,2+r()*4,.3);Sn([A[0],re(A[0],A[2])+2.2,A[2]],[.42,.3,.14])}}if(n&&n.brood){const T=n.brood,R=[.34,.5,.68],y=[1,1.55,1.15],A=si(IM,.42,.4,.46);for(let L=0;L<7;L++){const _=(r()-.5)*Math.PI*1.7,v=it(T.uEnd+(r()-.5)*T.uMax*.6,T.uMax*.32,T.uMax*.97),I=T.pointAt(_,v,.1),F=re(I[0],I[2]),D=14+Math.floor(r()*14);for(let H=0;H<D;H++){const N=Math.floor(r()*3),O=R[N]+r()*.22,P=I[0]+(r()-.5)*4.6,z=I[2]+(r()-.5)*4.6,K=(.85+r()*.25)*.85,J=si(Ju,K,K*.94,K*.8);t.bake(s,c(O*.75,O*.75,O*1.5*y[N],[P,re(P,z)+O*.6,z]),()=>J)}if(L%2===0){const H=4+Math.floor(r()*3);for(let N=0;N<H;N++){const O=r()*Math.PI*2,P=O+1.4+r()*1.2,z=2.2+r()*1.2,K=[I[0]+Math.cos(O)*z,F+.5+r()*1,I[2]+Math.sin(O)*z],J=[I[0]+Math.cos(P)*z,F+.5+r()*1,I[2]+Math.sin(P)*z];t.bake(a,Xe(K,J,.03),()=>A)}}Sn([I[0],F+1.6,I[2]],[.62,.46,.24])}for(let L=0;L<2;L++){const _=(r()-.5)*Math.PI*1.4,v=it(T.uEnd+(r()-.5)*T.uMax*.4,4,T.uMax-2),I=T.pointAt(_,v,.1);d(I[0],I[2],2+Math.floor(r()*2),1.1,za,ka)}}if(n&&n.midden){const T=n.midden,R=oi(xo,ts,.5),y=Qe(oi(xo,ts,.3),3.5),A=[.3,.46,.3];for(let v=0;v<3;v++){const I=(r()-.5)*Math.PI*1.6,F=it(T.uEnd+(r()-.5)*T.uMax*.5,4,T.uMax-2),D=T.pointAt(I,F,.08);d(D[0],D[2],3+Math.floor(r()*3),1,R,A,y)}for(let v=0;v<4;v++){const I=(r()-.5)*Math.PI*1.7,F=it(T.uEnd+(r()-.5)*T.uMax*.55,3,T.uMax-1.5),D=T.pointAt(I,F,.1);for(let H=0;H<20;H++){const N=D[0]+(r()-.5)*5,O=D[2]+(r()-.5)*5,P=.4+r()*1.1,z=Qe(r()<.5?Ba:Qu,(.3+r()*.35)*.55);i.bake(o,c(P*1.2,P*.7,P,[N,re(N,O)+P*.3,O]),()=>z)}}const L=Qe(UM,.5);for(let v=0;v<5;v++){const I=(r()-.5)*Math.PI*1.6,F=it(T.uEnd+(r()-.5)*T.uMax*.5,3,T.uMax-1.5),D=T.pointAt(I,F,.12),H=re(D[0],D[2]),N=2.2+r()*2.2,O=r()*Math.PI*2;t.bake(a,Xe([D[0],H+.35,D[2]],[D[0]+Math.cos(O)*N,H+.3,D[2]+Math.sin(O)*N],.55+r()*.35),()=>L)}const _=si(DM,.3,.36,.3);for(let v=0;v<6;v++){const I=(r()-.5)*Math.PI*1.6,F=it(T.uEnd+(r()-.5)*T.uMax*.55,3,T.uMax-1.5),D=T.pointAt(I,F,.05),H=1+r()*1.6;t.bake(s,c(H,.12,H,[D[0],re(D[0],D[2])+.03,D[2]]),()=>_)}}for(let T=0;T<42;T++){const R=-200+r()*380,y=8+r()*250;if(_i(R,y)>0||Zn(R,y)<4)continue;const A=2+r()*6,L=1.5+r()*4,_=2+r()*6,v=Nt(R,y)+L*.35,I=.75+r()*.5,F=r()*40,D=r()<.6?.5+r()*.5:0;i.bake(s,c(A,L,_,[R,v,y]),(H,N,O)=>{const P=Qe(Ba,I);if(D<=0)return P;const z=it((N-v)/L+.15*oe(H*.3+F,O*.3+F),0,1);return oi(P,xo,z*z*D)}),Wi.push({x:R,z:y,r:(A+_)*.5+1})}const m=new be;m.name="nest-decor";const p=new Xt(t.toBufferGeometry(),new nn({vertexColors:!0,roughness:.92,metalness:0,side:ue}));p.name="nest-decor-matte",m.add(p);const b=new Xt(i.toBufferGeometry(),vs({map:Pv(),strength:1,roughness:.92,side:ue}));b.name="nest-decor-stone",b.castShadow=!0,b.receiveShadow=!0,m.add(b);const M=Wd({map:Gd(),strength:.7,emissive:.95,color:7829367,side:ue}),S=new Xt(e.toBufferGeometry(),M);return S.name="nest-decor-glow",m.add(S),{group:m,mushrooms:Vi,rocks:Wi}}const Ga=new Q("#b07226").toArray(),Wr=new Q("#5e3d16").toArray(),eh=new Q("#100c06").toArray(),De=2.4,OM=2.7,BM=2.9;function zM(n,t,e,i,r){const s=Kn(t,n),o=Math.hypot(s[0],s[1],s[2]),a=it(o,.05,e+i-.02),c=Ct(s,1/(o||1)),l=(e*e-i*i+a*a)/(2*a),u=Math.sqrt(Math.max(e*e-l*l,0)),h=r[0]*c[0]+r[1]*c[1]+r[2]*c[2],d=ne(Kn(r,Ct(c,h)));return se(se(n,Ct(c,l)),Ct(d,u))}function nh(n){const t=new rn;return t.setAttribute("position",new me(n.p,3)),t.setAttribute("normal",new me(n.n,3)),t.setIndex(n.i),t}function ih(n,t){n.matrix.set(t.x[0],t.y[0],t.z[0],t.p[0],t.x[1],t.y[1],t.z[1],t.p[1],t.x[2],t.y[2],t.z[2],t.p[2],0,0,0,1),n.matrixWorldNeedsUpdate=!0}function kM(){const n=new be;n.name="queen";const t=[ee[0],re(ee[0],ee[2]),ee[2]],e=Math.PI,i=[Math.sin(e),0,Math.cos(e)],r=[0,1,0],s=ne(Ye(r,i)),o=Bi(s,r,i,[t[0],t[1]+1.05*De,t[2]]),a=A=>zd(o,Ct(A,De)),c=Ar(12,9),l=Xo(8),u=new Ae,h=(A,L,_,v)=>Bi(Ct(s,L*De),Ct(r,_*De),Ct(i,v*De),a(A)),d=(A,L,_,v,I)=>u.bake(c,h(A,L,_,v),()=>I),f=(A,L,_,v)=>u.bake(l,Xe(A,L,_),()=>v);d([0,1.5,-1.2],.5,.5,.62,Wr),d([0,1.62,.5],1.06,1.02,1.75,Ga),d([0,1.66,2.7],1.18,1.02,1.12,Ga),d([.76,2.12,3.1],.3,.26,.3,eh),d([-.76,2.12,3.1],.3,.26,.3,eh);for(let A=-1;A<=1;A+=2)f(a([A*.55,1.45,3.5]),a([A*.34,1.2,4.8]),.17*De,Ga);const g=[[.92,1.5,1.7],[-.92,1.5,1.7],[1.02,1.4,.4],[-1.02,1.4,.4],[.92,1.4,-1.15],[-.92,1.4,-1.15]],x=[[4.1,0,3.9],[-4.1,0,3.9],[4.9,0,.3],[-4.9,0,.3],[4.5,0,-3.5],[-4.5,0,-3.5]];for(let A=0;A<6;A++){const L=a(g[A]),_=a(x[A]);_[1]=re(_[0],_[2]);const v=g[A][0]>0?s:Ct(s,-1),I=zM(L,_,OM*De,BM*De,ne(se(r,Ct(v,.75))));f(L,I,.2*De,Wr),f(I,_,.14*De,Wr),u.bake(c,Bi([.3*De,0,0],[0,.3*De,0],[0,0,.3*De],I),()=>Wr)}const m=new nn({vertexColors:!0,roughness:.45,metalness:.05}),p=new Xt(u.toBufferGeometry(),m);p.name="queen-body",p.castShadow=!0,n.add(p);const b=nh(c),M=nh(l),S=new nn({color:new Q().fromArray(Wr),roughness:.45,metalness:.05}),T=[{local:[0,1.5,-5.4],rx:1.34,ry:1.3,rz:1.9},{local:[0,1.55,-3.2],rx:1.6,ry:1.54,rz:2.1}].map(A=>{const L=new Xt(b,S);return L.matrixAutoUpdate=!1,L.castShadow=!0,n.add(L),{mesh:L,...A}}),R=[];for(let A=-1;A<=1;A+=2)for(let L=0;L<2;L++){const _=new Xt(M,S);_.matrixAutoUpdate=!1,n.add(_),R.push({mesh:_,sA:A,seg:L})}function y(A){const L=1+Math.sin(A*.55)*.04;for(const _ of T)ih(_.mesh,h(_.local,_.rx*L,_.ry*L,_.rz));for(const _ of R){const v=Math.sin(A*1.1+(_.sA>0?0:1.3))*.35,I=a([_.sA*.58,2.1,3.2]),F=a([_.sA*(1.4+v*.3),3.3,4.2]),D=a([_.sA*(1.85+v),3.2+v*.4,6.1]);ih(_.mesh,_.seg===0?Xe(I,F,.14*De):Xe(F,D,.11*De))}}return y(0),{group:n,update:y}}const bl={sunDir:ne([-300,120,195]),sunColor:15251852,sunIntensity:5.4,hemiSky:7241640,hemiGround:4867376,hemiIntensity:1.15,fog:8221832,fogNear:95,fogFar:420,sky:10130344,exposure:1.3},Tl={sunDir:ne([30,45,20]),sunColor:16767370,sunIntensity:2.5,hemiSky:12572917,hemiGround:7236152,hemiIntensity:.85,fog:11520216,fogNear:90,fogFar:420,sky:10274532,exposure:1.15};let es=0;function $o(){return es}function GM(n){es=n<0?0:n>1?1:n}const Rn=[0,1,0];function Ko(){const n=bl.sunDir,t=Tl.sunDir;Rn[0]=n[0]+(t[0]-n[0])*es,Rn[1]=n[1]+(t[1]-n[1])*es,Rn[2]=n[2]+(t[2]-n[2])*es;const e=Math.hypot(Rn[0],Rn[1],Rn[2])||1;return Rn[0]/=e,Rn[1]/=e,Rn[2]/=e,Rn}const HM=56;function rh(n,t,e,i,r,s,o,a){const c=i-n,l=r-t,u=s-e,h=c*a[0]+l*a[1]+u*a[2];if(h<=0)return 0;const d=c*c+l*l+u*u-h*h,f=Math.sqrt(d>0?d:0),g=o*.35+h*.06,x=it((o+g-f)/g,0,1);return x*x*(3-2*x)}function VM(n,t,e,i){const r=Math.hypot(i[0],i[2]);if(r<1e-4)return 0;const s=i[0]/r,o=i[2]/r,a=Wt.x-n,c=Wt.z-e,l=a*s+c*o;if(l<=0)return 0;const u=Math.abs(a*o-c*s);if(t+i[1]/r*l>Wt.baseY+Wt.h*Ln)return 0;const d=Wt.w*.4+l*.05,f=it((Wt.w+d-u)/d,0,1);return f*f*(3-2*f)}function WM(n,t,e,i){const r=Math.hypot(i[0],i[2]);if(r<1e-4)return 0;const s=i[0]/r,o=i[2]/r,a=i[1]/r,c=Math.min(170,34/a+14);let l=0;for(let u=2.5;u<c;u*=1.38){const d=Nt(n+s*u,e+o*u)-(t+a*u+.5);if(d<=0)continue;const f=1.2+u*.05,g=it(d/f,0,1);if(g>l&&(l=g),l>=1)break}return l}function Qd(n,t){if(t<Be)return 1;const e=Ko(),i=Nt(n,t),r=ys(n,t),s=it((r[0]*e[0]+r[1]*e[1]+r[2]*e[2])/Math.max(e[1],.001),0,1);let o=WM(n,i,t,e);if(o<1){const a=i+1.2;o=Math.max(o,VM(n,a,t,e));const c=Oi(Ln);o=Math.max(o,rh(n,a,t,c[0],c[1]+14,c[2],HM,e));for(let l=0;l<Wi.length&&o<1;l++){const u=Wi[l],h=u.r*.8;o=Math.max(o,rh(n,a,t,u.x,Nt(u.x,u.z)+h*.45,u.z,h,e))}}return it(1-s*(1-o),0,1)}const Nn=[],tf=new Map,XM=["graine","brindille","miellat"],qM={graine:4,brindille:3,miellat:5},YM={graine:5,brindille:6,miellat:5},$M=[.88,.66,.32],KM=[.55,.38,.18],jM=[.42,.32,.19],sh=[.24,.18,.1],ZM=[.94,.74,.36],JM=[.78,.5,.2],QM=new Q("#4A4438"),wl=(n,t,e)=>[Ht(n[0],t[0],e),Ht(n[1],t[1],e),Ht(n[2],t[2],e)];function tS(n,t,e,i,r){const s=new Ae,o=[];for(let a=0;a<=i;a++){const c=a/i,l=[],u=t(c);for(let h=0;h<e;h++){const d=2*Math.PI*h/e;l.push(s.addVertex(Math.cos(d)*u,c*n,Math.sin(d)*u,r(c,d)))}o.push(l)}for(let a=0;a<i;a++)for(let c=0;c<e;c++){const l=(c+1)%e;s.addQuad(o[a][c],o[a][l],o[a+1][l],o[a+1][c])}return s}function eS(){return tS(7,t=>Math.pow(Math.sin(Math.PI*t),.62)*2*(1-.3*t),7,5,(t,e)=>wl(KM,$M,it(.25+.75*Math.pow(Math.abs(Math.cos(e*.5)),1.5)*(.4+.6*t),0,1))).toBufferGeometry()}function nS(){const n=new Ae,t=Xo(5),e=[[0,0,0],[.6,5.5,.4],[2.4,10.6,.2]];for(let i=0;i<2;i++)n.bake(t,Xe(e[i],e[i+1],.62-i*.16),(r,s)=>wl(sh,jM,it(.55+.25*Math.sin(s*1.7),0,1)));return n.bake(t,Xe([.6,5.5,.4],[-2.6,8.2,-1.1],.33),()=>sh),n.toBufferGeometry()}function iS(){const n=new Ae,t=Ar(6,3),e=[[0,.9,0,2.6,1.5,2.2],[2.4,.6,1.1,1.7,1,1.5],[-1.6,.7,1.6,1.9,1.2,1.7]];for(const i of e)n.bake(t,Bi([i[3],0,0],[0,i[4],0],[0,0,i[5]],[i[0],i[1],i[2]]),(r,s)=>wl(JM,ZM,it((s-i[1])/(i[4]*2)+.55,0,1)));return n.toBufferGeometry()}const ns=(n,t)=>n>=t?0:Math.pow(1-n/t,1.5);function rS(n,t){if(_i(n,t)>0||Zn(n,t)<10)return 0;let e=.16;return e+=1.05*ns(Math.hypot(n-Wt.x,t-Wt.z),78),e+=.85*ns(Math.hypot(n-88,t-168),74),e+=.7*ns(Math.hypot(n-24,t-128),46),e*it(1-(Ur(n,t)-.16)/.5,.12,1)}const sS=2;function oS(n,t,e){const i=Math.hypot(n-Wt.x,t-Wt.z)<85,r=e();return i?r<.55?"brindille":r<.85?"miellat":"graine":ns(Math.hypot(n-88,t-168),74)+ns(Math.hypot(n-24,t-128),46)>.25?r<.6?"graine":r<.85?"miellat":"brindille":r<.5?"graine":r<.8?"brindille":"miellat"}const oh=32;function aS(n=90210){const t=_s(n),e=Ee;let i=0,r=0,s=1;for(;i<oh&&r++<oh*200;){const o=Ht(e.x0+14,e.x1-14,t()),a=Ht(e.z0+16,e.z1-14,t());if(t()*sS>rS(o,a))continue;const c=oS(o,a,t),l=3+Math.floor(t()*4);let u=0;for(let h=0;h<l*3&&u<l;h++){const d=t()*Math.PI*2,f=Math.sqrt(t())*12,g=o+Math.cos(d)*f,x=a+Math.sin(d)*f;if(_i(g,x)>0||Zn(g,x)<10||Ur(g,x)>.7)continue;const m=Math.max(1,qM[c]+Math.round((t()-.5)*2)),p={id:s++,x:g,z:x,kind:c,amount:m,r:YM[c],amount0:m,yaw:t()*Math.PI*2,tilt:(t()-.5)*.5,size:.75+t()*.5,_slot:-1};Nn.push(p),tf.set(p.id,p),u++}u&&i++}}const ef={},ah=new te,ch=new Lr,lh=new wn,uh=new V,hh=new V,dh=new Q;function nf(n){const t=ef[n.kind];if(!t||n._slot<0)return;const e=n.amount0>0?n.amount/n.amount0:0,i=n.size*Ht(.45,1,Math.pow(e,.6)),r=ys(n.x,n.z);lh.set(n.tilt-Math.atan2(r[2],r[1])*.6,n.yaw,n.tilt+Math.atan2(r[0],r[1])*.6),ch.setFromEuler(lh),uh.set(n.x,Nt(n.x,n.z)-.35*i,n.z),hh.set(i,i,i),ah.compose(uh,ch,hh),t.setMatrixAt(n._slot,ah),dh.set(1,1,1).lerp(QM,(1-e)*.8),t.setColorAt(n._slot,dh),t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0)}function rf(n,t=1){const e=tf.get(n);if(!e||e.amount<=0||!(t>0))return 0;const i=Math.min(t,e.amount);return e.amount-=i,nf(e),i}function cS(n,t,e=12,i=!1){const r=[];for(const s of Nn)!i&&s.amount<=0||Math.hypot(s.x-n,s.z-t)<=e&&r.push(s);return r}function lS(){const n=new be;n.name="resources",Nn.length===0&&aS();const t={graine:eS(),brindille:nS(),miellat:iS()},e=new nn({vertexColors:!0,roughness:.9,metalness:0}),i=new nn({vertexColors:!0,roughness:.22,metalness:0});for(const r of XM){const s=Nn.filter(c=>c.kind===r),o=Math.max(s.length,1),a=new Vo(t[r],r==="miellat"?i:e,o);a.name="resource-"+r,a.castShadow=!0,a.receiveShadow=!0,a.count=s.length,a.instanceColor=new Cn(new Float32Array(o*3).fill(1),3),a.frustumCulled=!1,ef[r]=a,s.forEach((c,l)=>{c._slot=l,nf(c)}),n.add(a)}return{group:n,nodes:Nn}}const is=4.2,Di=15,Al=14,Wn=8,fh=.22,mr=1.6,vo=17,uS=18,hS=.62,Mo=new Q("#6d5130"),dS=new Q("#5a4226"),Ha=new Q("#332412"),fS=new Q("#e0a752"),pS=new Q("#efdcb0"),mS=new Q("#ffc46a"),So=[.55,.62,.82],gS=[1.05,.62,.24],Va=[.85,.55,.22],Wa=[1.95,1.2,.52],cs=6;let Yc=null,xe=null;const Kr=(n,t,e)=>new Q(n).lerp(t,it(e,0,1));function _S(n){Yc=n}function sf(){return xe?{x:xe.x,z:xe.z}:null}function of(){return xe}function Rl(n,t){if(xe)return{ok:!1,reason:"already-founded"};if(t<Be)return{ok:!1,reason:"underground"};const e=Ee;return n<e.x0+vo||n>e.x1-vo||t>e.z1-vo?{ok:!1,reason:"bounds"}:Math.abs(n)<34&&t<34?{ok:!1,reason:"occupied"}:_i(n,t)>0?{ok:!1,reason:"water"}:Zn(n,t)<uS?{ok:!1,reason:"water"}:Ur(n,t)>hS?{ok:!1,reason:"slope"}:Sl(n,t).kind==="rock"?{ok:!1,reason:"rock"}:{ok:!0}}function xS(n,t,e){const i=(r,s)=>oe(Math.cos(n)*r+t*s+e+37,Math.sin(n)*r+t*s*.7+e+91);return .84+.2*i(1.6,.1)+.1*i(4.1,.29)+.05*i(9.3,.62)}function vS(n){const t=Di+Wn,e=(n-t)/Wn;return e>-1&&e<1?is+(Al-is)*Math.pow(Math.sqrt(1-e*e),.72):is}function MS(n,t,e){const i=Nt(n,t),r=(oe(n*.07,t*.07)-.5)*Math.PI*2,s=ne([Math.cos(r)*fh,-1,Math.sin(r)*fh]),o=ne(Ye(s,[0,0,1])),a=ne(Ye(s,o)),c=[n,i+mr,t],l=Di+2*Wn,u=i+mr-(Di+Wn*.92),h=22;function d(S,T){const R=xS(S,T,e),y=vS(T)*R,A=c[0]+s[0]*T,L=c[1]+s[1]*T,_=c[2]+s[2]*T,v=A+(o[0]*Math.cos(S)+a[0]*Math.sin(S))*y,I=L+(o[1]*Math.cos(S)+a[1]*Math.sin(S))*y,F=_+(o[2]*Math.cos(S)+a[2]*Math.sin(S))*y;return[v,Math.max(I,u),F,R]}const f=new Ae,g=[];for(let S=0;S<=l+1e-4;S+=1.5){const T=[];for(let R=0;R<h;R++){const y=2*Math.PI*R/h,A=d(y,S),L=it((A[3]-.84)/.34+.45,0,1),_=Kr(Ha,dS,L*.8+.1).lerp(Mo,.18+L*.14).multiplyScalar(.88);T.push(f.addVertex(A[0],A[1],A[2],_.toArray()))}g.push(T)}for(let S=0;S<g.length-1;S++)for(let T=0;T<h;T++){const R=(T+1)%h;f.addQuad(g[S][T],g[S][R],g[S+1][R],g[S+1][T])}const x=g[g.length-1],m=f.addVertex(c[0]+s[0]*l,u,c[2]+s[2]*l,Kr(Ha,Mo,.35).toArray());for(let S=0;S<h;S++)f.addTri(m,x[S],x[(S+1)%h]);const p=8,b=[];for(let S=0;S<=p;S++){const T=S/p,R=Ht(is*1.02,vo,T),y=[];for(let A=0;A<=h;A++){const L=2*Math.PI*(A%h)/h,_=n+Math.cos(L)*R,v=t+Math.sin(L)*R,I=.75+.5*oe(_*.16+e,v*.16+e),F=mr*Math.pow(1-T,1.5)*I+.9*Math.sin(Math.PI*Math.min(1,T*1.35))*I,D=Ht(i+mr,Nt(_,v),Math.pow(T,.7))+(T>0?F*.75:0),H=Kr(Kr(Mo,Ha,.35+.3*(1-T)),fS,.12).multiplyScalar(.82+.25*I);y.push(f.addVertex(_,D,v,H.toArray()))}b.push(y)}for(let S=0;S<p;S++)for(let T=0;T<h;T++)f.addQuad(b[S][T],b[S][T+1],b[S+1][T+1],b[S+1][T]);const M=c[1]+s[1]*(Di+Wn);return{geometry:f.toBufferGeometry(),mouthY:i,floorY:u,origin:c,dir:s,uMax:l,chamber:{x:c[0]+s[0]*(Di+Wn),y:u,z:c[2]+s[2]*(Di+Wn),ceilY:M+Wn*.55,r:Al}}}function SS(n,t){const e=_s(t^23505),i=Ar(8,5),r=(g,x,m,p)=>Bi([g,0,0],[0,x,0],[0,0,m],p),s=n.chamber,o=[],a=Yo(new nn({vertexColors:!0,roughness:.85,metalness:0,side:ue}));for(let g=0;g<cs;g++){const x=g/cs*Math.PI*2+e()*.5,m=s.r*(.28+e()*.34),p=s.x+Math.cos(x)*m,b=s.z+Math.sin(x)*m,M=new Ae,S=5+Math.floor(e()*5);for(let y=0;y<S;y++){const A=e()*Math.PI*2,L=Math.sqrt(e())*2.6,_=p+Math.cos(A)*L,v=b+Math.sin(A)*L,I=.75+e()*.45;M.bake(i,r(I*1.25,I*.85,I,[_,s.y+I*.7,v]),(F,D)=>Kr(pS,Mo,it(.55-(D-s.y)*.25,0,1)).toArray())}const T=new Xt(M.toBufferGeometry(),a);T.name="nest-brood-"+g,T.visible=!1,T.castShadow=!1;const R=Sn([p,s.y+2.2,b],[0,0,0]);o.push({mesh:T,lamp:R,on:!1})}const c=new Ae,l=s.x+(e()-.5)*6,u=s.z+(e()-.5)*6,h=s.ceilY-3.2;c.bake(i,r(1.5,1.8,1.5,[l,h,u]),()=>mS.toArray());const d=new Xt(c.toBufferGeometry(),Wd({map:Gd(),strength:.7,emissive:.95,color:7829367,side:ue}));d.name="nest-glow-bead",d.visible=!1;const f=Sn([l,h,u],[0,0,0]);return{piles:o,bead:{mesh:d,lamp:f,on:!1}}}function af(n,t){const e=Rl(n,t);if(!e.ok)return e;const i=Math.floor(Math.abs(n)*131+Math.abs(t)*977)%9973,r=MS(n,t,i),s=new be;s.name="founded-nest";const o=new Xt(r.geometry,Yo(vs({map:kd(),strength:.62,side:ue})));o.name="founded-nest-shell",o.receiveShadow=!0,s.add(o);const a=SS(r,i);for(const u of a.piles)s.add(u.mesh);s.add(a.bead.mesh),Yc&&Yc.add(s);const c=Sn([n,r.mouthY-4,t],So),l=Sn([n,r.mouthY+1,t],gS);return xe={x:n,z:t,group:s,mouth:{x:n,y:r.mouthY+mr,z:t,r:is},chamber:r.chamber,floorY:r.floorY,axis:{origin:r.origin,dir:r.dir,length:r.uMax},brood:0,sealed:!1,_furnishing:a,_coldLight:c,_warmLight:l,_coldFade:1},yM(n,r.mouthY+mr,t,Al,Di+Wn),{ok:!0}}function cf(n){if(!xe)return 0;const t=Math.round(it(n,0,cs));xe.brood=t,xe._furnishing.piles.forEach((i,r)=>{const s=r<t;i.mesh.visible=s,i.on=s,i.lamp.c[0]=s?Va[0]:0,i.lamp.c[1]=s?Va[1]:0,i.lamp.c[2]=s?Va[2]:0});const e=xe._furnishing.bead;return e.on=t>=4,e.mesh.visible=e.on,e.lamp.c[0]=e.on?Wa[0]:0,e.lamp.c[1]=e.on?Wa[1]:0,e.lamp.c[2]=e.on?Wa[2]:0,t}function lf(n=!0){xe&&(xe.sealed=n)}function yS(n){if(!xe)return;const t=xe.sealed?0:1,e=Math.min(1,n/3);xe._coldFade+=(t-xe._coldFade)*e*3;const i=it(xe._coldFade,0,1);xe._coldLight.c[0]=So[0]*i,xe._coldLight.c[1]=So[1]*i,xe._coldLight.c[2]=So[2]*i}const ES=12,jr=16384,ph=jr-1,bS=32768;function mh(n,t){if(t==null)return!0;if(typeof t=="string")return n===t;for(let e=0;e<t.length;e++)if(t[e]===n)return!0;return!1}function TS({cellSize:n=ES}={}){if(!(n>0))throw new Error("spatialIndex: cellSize must be > 0");const t=1/n,e=[],i=[],r=[],s=[],o=[],a=[],c=[],l=new Map,u=new Map,h=new Map;let d=0,f=0;const g=O=>O<-jr?-jr:O>ph?ph:O,x=(O,P)=>(O+jr)*bS+(P+jr),m=(O,P)=>x(g(Math.floor(O*t)),g(Math.floor(P*t)));function p(O,P){const z=u.get(P);z?z.push(O):u.set(P,[O]),a[O]=P}function b(O){const P=u.get(a[O]);if(!P)return;const z=P.indexOf(O);z>=0&&(P[z]=P[P.length-1],P.pop(),P.length===0&&u.delete(a[O]))}function M(O,P){P>d&&(d=P);const z=h.get(O);(z===void 0||P>z)&&h.set(O,P)}function S(O,P,z,K,J=0){const lt=O+"#"+P;if(l.get(lt)!==void 0)return T(O,P,z,K,J);const Y=c.length?c.pop():e.length;return e[Y]=O,i[Y]=P,r[Y]=z,s[Y]=K,o[Y]=J,p(Y,m(z,K)),l.set(lt,Y),M(O,J),f++,Y}function T(O,P,z,K,J){const lt=l.get(O+"#"+P);if(lt===void 0)return!1;r[lt]=z,s[lt]=K,J!==void 0&&J!==o[lt]&&(o[lt]=J,M(O,J));const vt=m(z,K);return vt!==a[lt]&&(b(lt),p(lt,vt)),!0}function R(O,P){const z=O+"#"+P,K=l.get(z);return K===void 0?!1:(b(K),l.delete(z),e[K]=null,i[K]=null,c.push(K),f--,!0)}function y(O,P){return l.has(O+"#"+P)}function A(){u.clear(),l.clear(),e.length=i.length=r.length=s.length=o.length=a.length=0,c.length=0,h.clear(),d=0,f=0}function L(O){if(O==null)return d;if(typeof O=="string")return h.get(O)||0;let P=0;for(const z of O){const K=h.get(z)||0;K>P&&(P=K)}return P}function _(O,P,z,K,J){if(!(z>=0))return;const lt=z*z,vt=g(Math.floor((O-z)*t)),Y=g(Math.floor((O+z)*t)),tt=g(Math.floor((P-z)*t)),at=g(Math.floor((P+z)*t));for(let ot=vt;ot<=Y;ot++)for(let Tt=tt;Tt<=at;Tt++){const St=u.get(x(ot,Tt));if(St!==void 0)for(let Dt=0;Dt<St.length;Dt++){const Ft=St[Dt];if(!mh(e[Ft],K))continue;const Ot=r[Ft]-O,U=s[Ft]-P,ve=Ot*Ot+U*U;ve>lt||J(i[Ft],Math.sqrt(ve),r[Ft],s[Ft],o[Ft])}}}function v(O,P,z,K,J){const lt=z+L(K);_(O,P,lt,K,(vt,Y,tt,at,ot)=>{Y<=ot+z&&J(vt,Y,tt,at,ot)})}function I(O,P,z,K,J){const lt=z*z;let vt=-1,Y=1/0;const tt=g(Math.floor((O-z)*t)),at=g(Math.floor((O+z)*t)),ot=g(Math.floor((P-z)*t)),Tt=g(Math.floor((P+z)*t));for(let St=tt;St<=at;St++)for(let Dt=ot;Dt<=Tt;Dt++){const Ft=u.get(x(St,Dt));if(Ft!==void 0)for(let Ot=0;Ot<Ft.length;Ot++){const U=Ft[Ot];if(!mh(e[U],K))continue;const ve=r[U]-O,kt=s[U]-P,Gt=ve*ve+kt*kt;if(Gt>lt||Gt>=Y)continue;const wt=Math.sqrt(Gt);J&&!J(i[U],wt,r[U],s[U],o[U])||(vt=U,Y=Gt)}}return vt<0?null:{type:e[vt],id:i[vt],x:r[vt],z:s[vt],extent:o[vt],dist:Math.sqrt(Y)}}function F(O,P,z,K,J){return I(O,P,z+L(K),K,(lt,vt,Y,tt,at)=>vt<=at+z&&(!J||J(lt,vt,Y,tt,at)))}function D(O,P,z,K,J){let lt=0;return _(O,P,z,K,(vt,Y,tt,at,ot)=>{(!J||J(vt,Y,tt,at,ot))&&lt++}),lt}function H(O,P,z,K,J=[]){return J.length=0,_(O,P,z,K,lt=>{J.push(lt)}),J}function N(){let O=0,P=0;for(const z of u.values())P+=z.length,z.length>O&&(O=z.length);return{entries:f,cells:u.size,cellSize:n,maxBucket:O,meanBucket:u.size?P/u.size:0}}return{cellSize:n,insert:S,move:T,remove:R,has:y,clear:A,maxExtent:L,forEachInRadius:_,forEachWithin:v,nearest:I,nearestWithin:F,countInRadius:D,collectInRadius:H,stats:N,get size(){return f}}}const tn=TS();let $c=[];function uf(){return $c}function wS(n){tn.clear();for(let t=0;t<n.length;t++){const e=n[t];tn.insert("grass",t,e.x,e.z,e.w)}for(let t=0;t<Vi.length;t++){const e=Vi[t];tn.insert("mushroom",t,e.x,e.z,El(e))}for(let t=0;t<Wi.length;t++){const e=Wi[t];tn.insert("rock",t,e.x,e.z,e.r)}for(let t=0;t<Nn.length;t++){const e=Nn[t];tn.insert("resource",t,e.x,e.z,e.r)}}function hf(){const n=new be;n.name="world";const t=Hv();for(const d of t.doorLights)Sn(d.p,d.c);const e=FM(t.rooms),i=kM(),r=Jv();n.add(r);const s=eM();n.add(s.mesh);const o=iM();n.add(o.group);const a=lM({});n.add(a.mesh);const c=vM();n.add(c.group);const l=lS();n.add(l.group);const u=new be;u.name="dug",n.add(u),_S(u),$c=a.footprints,wS($c);function h(d,f,g){a.update(d,f),yS(d),i.update(f),s.update(f),g&&(c.update(g),o.update(g,$o()),EM(g.position))}return{group:n,update:h,grassFootprints:a.footprints,resources:l.nodes,rooms:t.rooms,doorLights:t.doorLights,mushrooms:e.mushrooms,rocks:e.rocks}}const jo=Object.freeze(Object.defineProperty({__proto__:null,LAWN_BOUNDS:Ee,MAX_BROOD:cs,MUSHROOMS:Vi,QUEEN:ee,RESOURCE_NODES:Nn,RIG_FOUNDED:Tl,RIG_PROLOGUE:bl,RIVER:_n,ROCKS:Wi,START:kc,TERRAIN_BOUNDS:as,TREE:Wt,TUNNEL_BACK:pe,TUNNEL_MOUTH:Be,TUNNEL_R:vr,WATER_Y:qn,applyNestShading:Yo,canFoundAt:Rl,containSurface:Vc,containUnderground:qo,createWorld:hf,daylightAt:bM,distanceToWater:Zn,foundNest:af,foundedMix:$o,getFoundedNest:of,getGrassFootprints:uf,getRoomBranches:xl,getUndergroundRadius:Nv,getWallHoleAt:_l,groundNormal:ys,groundSlope:Ur,groundY:Nt,harvestNode:rf,mushroomCollideR:El,nestOrigin:sf,nodesNear:cS,pitFactorAt:qc,populateNest:cf,profileR:Oe,riverEdgeAt:Ss,sampleTerrain:Wv,sealNest:lf,setFoundedMix:GM,shadeAt:Qd,soilAt:Sl,sunDir:Ko,treeTrunkRadius:Hi,treeWalkBranch:In,waterDepthAt:_i,worldIndex:tn},Symbol.toStringTag,{value:"Module"})),AS=[{hip:[.85,1.5,1.5],rest:[3.6,0,3.4],phase:0},{hip:[-.85,1.5,1.5],rest:[-3.6,0,3.4],phase:.5},{hip:[.95,1.4,.3],rest:[4.3,0,.2],phase:.5},{hip:[-.95,1.4,.3],rest:[-4.3,0,.2],phase:0},{hip:[.85,1.4,-1],rest:[4,0,-3.2],phase:0},{hip:[-.85,1.4,-1],rest:[-4,0,-3.2],phase:.5}],RS=[{hip:[.92,1.5,1.7],rest:[4.1,0,3.9],phase:0},{hip:[-.92,1.5,1.7],rest:[-4.1,0,3.9],phase:.5},{hip:[1.02,1.4,.4],rest:[4.9,0,.3],phase:.5},{hip:[-1.02,1.4,.4],rest:[-4.9,0,.3],phase:0},{hip:[.92,1.4,-1.15],rest:[4.5,0,-3.5],phase:0},{hip:[-.92,1.4,-1.15],rest:[-4.5,0,-3.5],phase:.5}],CS={petiole:{at:[0,1.5,-1.25],r:[.42,.42,.42]},thorax:{at:[0,1.6,.35],r:[.95,.92,1.55]},head:{at:[0,1.62,2.55],r:[1.12,.98,1.05]},eye:{at:[.72,2.05,2.95],r:[.3,.26,.3]},gaster:[{at:[0,1.55,-3.1],r:[1.35,1.3,1.95]}],mandible:{root:[.52,1.42,3.35],tip:[.3,1.22,4.55],gape:.22,r:.15},antenna:{root:[.55,2.05,3.05],elbow:[1.35,3.15,4],tip:[1.75,3.05,5.9],r1:.13,r2:.1},legR:{thigh:.19,shin:.13,knee:.24,foot:.17}},PS={petiole:{at:[0,1.5,-1.2],r:[.5,.5,.62]},thorax:{at:[0,1.62,.5],r:[1.06,1.02,1.75]},head:{at:[0,1.66,2.7],r:[1.18,1.02,1.12]},eye:{at:[.76,2.12,3.1],r:[.3,.26,.3]},gaster:[{at:[0,1.55,-3.2],r:[1.6,1.54,2.1]},{at:[0,1.5,-5.4],r:[1.34,1.3,1.9]}],mandible:{root:[.55,1.45,3.5],tip:[.34,1.2,4.8],gape:.2,r:.17},antenna:{root:[.58,2.1,3.2],elbow:[1.4,3.3,4.2],tip:[1.85,3.2,6.1],r1:.14,r2:.11},legR:{thigh:.2,shin:.14,knee:.3,foot:.19}},Cr={id:"worker",label:"ouvrière",scale:1,legs:AS,body:CS,breathes:!1,colors:{chitinA:9132580,chitinB:4402453,limb:7029792,mandible:13209663,eye:1051654},maxSpeed:15,sprint:1.75,turnRate:9,legLen:[2.7,2.9],stride:7,climbSpeed:20,bodyR:1.5,cam:{dist:36,min:10,max:85}},Fo={id:"queen",label:"reine fondatrice",scale:2.2,legs:RS,body:PS,breathes:!0,colors:{chitinA:11563558,chitinB:6176022,limb:6176022,mandible:11563558,eye:1051654},maxSpeed:12.5,sprint:1.5,turnRate:4.2,legLen:[2.7,2.9],stride:7,climbSpeed:12,bodyR:1.5,cam:{dist:58,min:16,max:140}},hn=Fo;function LS(n){return[n.legLen[0]*n.scale,n.legLen[1]*n.scale]}function df(n){return n.stride*n.scale}function An(n){return n.bodyR*n.scale}const ff=new Q("#393741"),IS=new Q("#241D22"),ls=new ms({color:ff.clone(),side:Fe,depthWrite:!1});ls.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`
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
  `)};ls.customProgramCacheKey=()=>"inverted-hull";function DS(n){ls.color.copy(IS).lerp(ff,n)}const gh=new WeakSet;function pf(n){const t=new be;return t.name="outline-hull",n.traverse(e=>{if(!e.isMesh||!e.geometry||gh.has(e))return;gh.add(e);let i;e.isInstancedMesh?(i=new Vo(e.geometry,ls,e.instanceMatrix.count),i.instanceMatrix=e.instanceMatrix,Object.defineProperty(i,"count",{get:()=>e.count})):i=new Xt(e.geometry,ls),i.castShadow=!1,i.receiveShadow=!1,i.frustumCulled=!1,t.add(i)}),t.renderOrder=-1,t}const xi=uf,Cl=42,US=4.5,NS=20,FS=.93;function OS(n){return US*(n.scale||1)}function Qs(n){const t=n.profile||hn;return(t.climbSpeed!==void 0?t.climbSpeed:NS)*(n.scale||1)}const BS=6,mf=.05,zS=(()=>{const n=In.point(0),t=In.tipPos;return Math.hypot(t[0]-n[0],t[1]-n[1],t[2]-n[2])})();function kS(n){const t=OS(n),e=xi(),i=tn.nearest(n.x,n.z,t,"grass",(a,c)=>c<t&&e[a].h>=Cl);let r=i?{kind:"grass",i:i.id}:null;const s=i?i.dist:t,o=Math.hypot(Wt.x-n.x,Wt.z-n.z)-Wt.w;return o<BS*(n.scale||1)&&o<s&&(r={kind:"tree"}),r}function GS(n,t){n.climb=t.kind==="tree"?{kind:"tree",seg:"trunk",t:.02}:{kind:"grass",i:t.i,t:.03},n.speed=0}function Kc(n){let t;if(n.climb.kind==="tree"){const e=Uo(Wt,n.climb.t);t=se(pi(Wt,n.climb.t),Ct(e.normal,Hi(n.climb.t)))}else t=pi(xi()[n.climb.i],n.climb.t);n.climb=null,n.x=t[0],n.z=t[2],n.y=Nt(t[0],t[2]),n.speed=0}function HS(n,t){if(n.climb){if(n.climb.kind==="grass"){Kc(n);return}n.climb.seg==="trunk"&&n.climb.t<=mf&&Kc(n);return}t&&GS(n,t)}function VS(n,t){return n.climb?n.climb.kind==="tree"?n.climb.seg==="trunk"&&n.climb.t<=mf?"redescendre du tronc":"reculer pour redescendre":"redescendre du brin":t?t.kind==="tree"?"grimper au tronc":"grimper au brin d'herbe":null}function WS(n,t,e){let i=!1,r=null;if(n.climb.kind==="tree")if(n.climb.seg==="trunk"){n.climb.t=it(n.climb.t+t*(Qs(n)/Wt.h)*e,0,In.splitT);const o=Uo(Wt,n.climb.t),a=se(pi(Wt,n.climb.t),Ct(o.normal,Hi(n.climb.t)));n.x=a[0],n.y=a[1],n.z=a[2],n.climb.t<=5e-4&&t<0?i=!0:n.climb.t>=In.splitT&&t>0&&(r="branch")}else{n.climb.u=it(n.climb.u+t*(Qs(n)/zS)*e,0,1);const o=In.basis(n.climb.u),a=se(o.pos,Ct(o.up,In.radius(n.climb.u)));n.x=a[0],n.y=a[1],n.z=a[2],n.climb.u<=5e-4&&t<0&&(r="trunk")}else{const o=xi()[n.climb.i];n.climb.t=it(n.climb.t+t*(Qs(n)/o.h)*e,0,FS);const a=pi(o,n.climb.t);n.x=a[0],n.y=a[1],n.z=a[2],n.climb.t<=5e-4&&t<0&&(i=!0)}const s=Qs(n);n.speed=hi(n.speed,Math.abs(t)*s,7,e),n.travel+=Math.abs(t)*s*e,i?Kc(n):r==="branch"?(n.climb.seg="branch",n.climb.u=0):r==="trunk"&&(n.climb.seg="trunk",n.climb.t=In.splitT)}function XS(n=hn){return n.legs.map(()=>({planted:[0,0,0],from:[0,0,0],to:[0,0,0],swinging:!1,prevP:0}))}function qS(n){if(n.climb){if(n.climb.kind==="tree"){if(n.climb.seg==="trunk"){const c=Uo(Wt,n.climb.t);return{side:c.width,up:c.normal,fwd:c.tangent}}const a=In.basis(n.climb.u);return{side:a.side,up:a.up,fwd:a.fwd}}const o=Uo(xi()[n.climb.i],n.climb.t);return{side:o.width,up:o.normal,fwd:o.tangent}}const t=ys(n.x,n.z),e=ne([t[0]*.7,1,t[2]*.7]),i=[Math.sin(n.yaw),0,Math.cos(n.yaw)],r=ne(Ye(e,i)),s=Ye(r,e);return{side:r,up:e,fwd:s}}function Pl(n){const t=qS(n),e=n.scale||1,i=1.05*e+n.bob,r=n.climb?se([n.x,n.y,n.z],Ct(t.up,i)):[n.x,Nt(n.x,n.z)+i,n.z];return{side:Ct(t.side,e),up:Ct(t.up,e),fwd:Ct(t.fwd,e),p:r,basis:t,scale:e}}function gn(n,t){const[e,i,r]=t;return[n.side[0]*e+n.up[0]*i+n.fwd[0]*r+n.p[0],n.side[1]*e+n.up[1]*i+n.fwd[1]*r+n.p[1],n.side[2]*e+n.up[2]*i+n.fwd[2]*r+n.p[2]]}function YS(n,t,e,i,r){const s=Kn(t,n),o=Math.hypot(s[0],s[1],s[2])||1,a=it(o,.05,e+i-.02),c=Ct(s,1/o),l=(e*e-i*i+a*a)/(2*a),u=Math.sqrt(Math.max(e*e-l*l,0)),h=r[0]*c[0]+r[1]*c[1]+r[2]*c[2],d=ne(Kn(r,Ct(c,h)));return se(se(n,Ct(c,l)),Ct(d,u))}function $S(n,t,e){const i=Pl(n),r=i.basis,s=n.profile||hn,o=n.scale||1,a=df(s),c=n.travel/a,l=!!n.climb;for(let u=0;u<s.legs.length;u++){const h=s.legs[u],d=t[u],f=gn(i,h.rest);l||(f[1]=Nt(f[0],f[2])),n.legsInit||(d.planted=f.slice(),d.from=f.slice(),d.to=f.slice());let g=(c+h.phase)%1;if(g<0&&(g+=1),g>=.5&&d.prevP<.5){d.swinging=!0,d.from=d.planted.slice();const x=se(f,Ct(r.fwd,a*.38*it(n.speed/(16*o),0,1.4)));l||(x[1]=Nt(x[0],x[2])),d.to=x}if(g<.5&&d.prevP>=.5&&(d.swinging=!1,d.planted=d.to.slice()),d.prevP=g,d.swinging){const x=(g-.5)*2,m=Math.sin(x*Math.PI)*1.5*o;d.planted=[Ht(d.from[0],d.to[0],x),Ht(d.from[1],d.to[1],x)+m,Ht(d.from[2],d.to[2],x)]}n.speed<.4*o&&!d.swinging&&(d.planted[0]=hi(d.planted[0],f[0],4,e),d.planted[1]=hi(d.planted[1],f[1],4,e),d.planted[2]=hi(d.planted[2],f[2],4,e))}n.legsInit=!0}function _h(n,t,e){const i=new Vo(n,t,e);i.instanceMatrix.setUsage(Up),i.count=0,i.frustumCulled=!1;let r=0;return{mesh:i,get used(){return r},get capacity(){return e},allocate(s){if(r+s>e)throw new Error(`instanced pool exhausted: asked for ${s} more slot(s), ${e-r} left of ${e} — bump the capacity this pool was created with (see MAX_ANTS in player/antMesh.js) and re-run scripts/bench-antmesh.mjs`);const o=r;return r+=s,i.count=r,o},setMatrix(s,o){i.setMatrixAt(s,o),i.instanceMatrix.needsUpdate=!0},setColor(s,o){i.setColorAt(s,o),i.instanceColor&&(i.instanceColor.needsUpdate=!0)}}}const xh=32;function KS(n){const t=n.legs.length;return{sphere:n.body.gaster.length+5+t*2,cyl:6+t*2}}let xn=null,vn=null,Zr=null;function jS(){if(Zr)return;const n=new Wo(1,12,8),t=new pl(1,1,1,7).translate(0,.5,0),e=new nn({color:16777215,vertexColors:!0,roughness:.55,metalness:.05}),i=[Cr,Fo].reduce((r,s)=>{const o=KS(s);return{sphere:Math.max(r.sphere,o.sphere),cyl:Math.max(r.cyl,o.cyl)}},{sphere:0,cyl:0});xn=_h(n,e,xh*i.sphere),vn=_h(t,e,xh*i.cyl),xn.mesh.castShadow=!0,vn.mesh.castShadow=!0,Zr=new be,Zr.name="ant-part-pools",Zr.add(xn.mesh,vn.mesh)}function Pe(n,t){const e=n.allocate(1);return n.setColor(e,ZS.set(t)),{pool:n,index:e}}const ZS=new Q,Xa=new te,vh=new V,Mh=new V,Sh=new V,yh=new V;function yo(n,t,e,i,r){vh.set(e[0],e[1],e[2]),Mh.set(i[0],i[1],i[2]),Sh.set(r[0],r[1],r[2]),Xa.makeBasis(vh,Mh,Sh),yh.set(t[0],t[1],t[2]),Xa.setPosition(yh),n.pool.setMatrix(n.index,Xa)}function ur(n,t,e,i){const r=Xe(t,e,i);yo(n,r.p,r.x,r.y,r.z)}function to(n){return[-n[0],n[1],n[2]]}function gf(n=hn){jS();const t=n.body,e=n.colors,[i,r]=LS(n),s=t.gaster.map(()=>Pe(xn,e.chitinB)),o=Pe(xn,e.chitinB),a=Pe(xn,e.chitinA),c=Pe(xn,e.chitinA),l=Pe(xn,e.eye),u=Pe(xn,e.eye),h=Pe(vn,e.mandible),d=Pe(vn,e.mandible),f=Pe(vn,e.limb),g=Pe(vn,e.limb),x=Pe(vn,e.limb),m=Pe(vn,e.limb),p=n.legs.map(()=>({thigh:Pe(vn,e.limb),shin:Pe(vn,e.limb),knee:Pe(xn,e.limb),foot:Pe(xn,e.limb)}));function b(M,S,T){const R=Pl(M),y=R.basis,A=R.scale,L=(N,O,P,z=1)=>yo(N,gn(R,O),Ct(y.side,P[0]*A*z),Ct(y.up,P[1]*A*z),Ct(y.fwd,P[2]*A*z)),_=n.breathes?1+Math.sin(T*.55)*.04:1;for(let N=0;N<s.length;N++)L(s[N],t.gaster[N].at,t.gaster[N].r,_);L(o,t.petiole.at,t.petiole.r),L(a,t.thorax.at,t.thorax.r),L(c,t.head.at,t.head.r),L(l,t.eye.at,t.eye.r),L(u,to(t.eye.at),t.eye.r);const v=t.mandible,I=v.gape+Math.sin(T*3.1)*.06+Math.max(0,Math.min(M.speed,14))*.012,F=[v.tip[0]+I,v.tip[1],v.tip[2]];ur(h,gn(R,v.root),gn(R,F),v.r*A),ur(d,gn(R,to(v.root)),gn(R,to(F)),v.r*A);const D=t.antenna;for(const N of[1,-1]){const O=Math.sin(T*2.4+(N>0?0:1.1))*.42,P=Math.cos(T*1.7+(N>0?.4:1.9))*.3,z=vt=>N>0?vt:to(vt),K=gn(R,z(D.root)),J=gn(R,z([D.elbow[0]+O*.25,D.elbow[1]+P*.3,D.elbow[2]])),lt=gn(R,z([D.tip[0]+O,D.tip[1]+P,D.tip[2]]));ur(N>0?f:x,K,J,D.r1*A),ur(N>0?g:m,J,lt,D.r2*A)}const H=t.legR;for(let N=0;N<n.legs.length;N++){const O=n.legs[N],P=S[N],z=p[N],K=gn(R,O.hip),J=P.planted,lt=O.hip[0]>0?y.side:Ct(y.side,-1),vt=ne([y.up[0]+lt[0]*.75,y.up[1]+lt[1]*.75,y.up[2]+lt[2]*.75]),Y=YS(K,J,i,r,vt);ur(z.thigh,K,Y,H.thigh*A),ur(z.shin,Y,J,H.shin*A);const tt=H.knee*A,at=H.foot*A;yo(z.knee,Y,[tt,0,0],[0,tt,0],[0,0,tt]),yo(z.foot,J,[at,0,0],[0,at,0],[0,0,at])}}return{group:Zr,updatePose:b}}function JS(n,t=hn){const e={},i={camYaw:0,wantPitch:-.19,camDist:t.cam.dist,dragging:!1},r={active:!1,id:-1,ox:0,oy:0,dx:0,dy:0};let s=-1,o=0,a=0,c=!1,l=!1;function u(y){for(let A=0;A<y.length;A++)if(e[y[A]])return!0;return!1}function h(y){e[y.code]=!0,y.code==="KeyE"&&(c=!0),y.code==="KeyH"&&(l=!0),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].indexOf(y.code)>=0&&y.preventDefault()}function d(y){e[y.code]=!1}function f(){for(const y in e)e[y]=!1}function g(y){n.setPointerCapture(y.pointerId),y.pointerType==="touch"&&y.clientX<window.innerWidth*.5?(r.active=!0,r.id=y.pointerId,r.ox=y.clientX,r.oy=y.clientY):(i.dragging=!0,s=y.pointerId,o=y.clientX,a=y.clientY)}function x(y){if(r.active&&y.pointerId===r.id){const A=it(y.clientX-r.ox,-46,46),L=it(y.clientY-r.oy,-46,46);r.dx=A/46,r.dy=L/46;return}i.dragging&&y.pointerId===s&&(i.camYaw-=(y.clientX-o)*.006,i.wantPitch=it(i.wantPitch-(y.clientY-a)*.004,-.85,.55),o=y.clientX,a=y.clientY)}function m(y){r.active&&y.pointerId===r.id&&(r.active=!1,r.dx=0,r.dy=0),y.pointerId===s&&(i.dragging=!1,s=-1)}function p(y){i.camDist=it(i.camDist+y.deltaY*.03*t.scale,t.cam.min,t.cam.max),y.preventDefault()}window.addEventListener("keydown",h),window.addEventListener("keyup",d),window.addEventListener("blur",f),n.addEventListener("pointerdown",g),n.addEventListener("pointermove",x),n.addEventListener("pointerup",m),n.addEventListener("pointercancel",m),n.addEventListener("wheel",p,{passive:!1});function b(){let y=0,A=0;u(["KeyW","KeyZ","ArrowUp"])&&(A+=1),u(["KeyS","ArrowDown"])&&(A-=1),u(["KeyA","KeyQ","ArrowLeft"])&&(y-=1),u(["KeyD","ArrowRight"])&&(y+=1),r.active&&(y+=r.dx,A-=r.dy);const L=Math.min(Math.hypot(y,A),1),_=!!(e.ShiftLeft||e.ShiftRight);return{ix:y,iy:A,mag:L,sprint:_}}function M(){const y=c;return c=!1,y}function S(){const y=l;return l=!1,y}function T(){return!!e.KeyE}function R(){window.removeEventListener("keydown",h),window.removeEventListener("keyup",d),window.removeEventListener("blur",f),n.removeEventListener("pointerdown",g),n.removeEventListener("pointermove",x),n.removeEventListener("pointerup",m),n.removeEventListener("pointercancel",m),n.removeEventListener("wheel",p)}return{state:i,readMoveIntent:b,consumeInteract:M,consumeHelp:S,isInteractHeld:T,dispose:R}}let qa=null;function _f(){return qa||(qa=xl()),qa}function xf(n,t){const e=_f();for(const i in e){const r=e[i],s=n-r.origin[0],o=t-r.origin[2],a=s*r.dir[0]+o*r.dir[2];if(a<=-.5||a>=r.uMax+1)continue;const c=s*r.side[0]+o*r.side[2],l=r.profR(it(a,0,r.uMax));if(!(Math.abs(c)>=l*.82+2))return r}return null}function vf(n,t,e){return(t-n.origin[0])*n.dir[0]+(e-n.origin[2])*n.dir[2]}function QS(n){return 2*n.uEnd-n.uMax}function ty(n,t){const e=xf(n,t);return e?e.profR(it(vf(e,n,t),0,e.uMax)):Oe(t)}function ey(n,t){let e=t,i=t;const r=_f();for(const s in r){const o=r[s],a=it(1-Math.abs(n-o.origin[2])/o.doorFalloff,0,1);if(a<=0)continue;const c=Ht(t,Math.abs(o.origin[0])+1.5,a);o.dir[0]>0?c>e&&(e=c):c>i&&(i=c)}return{limPos:e,limNeg:i}}const Mf=.14;function Sf(n){const t=n(0),e=n(Math.PI),i=n(Math.PI*.5);return{aPos:Math.max(Math.abs(t[0]),1.5),aNeg:Math.max(Math.abs(e[0]),1.5),cy:t[1],b:Math.max(i[1]-t[1],.8)}}function ny(n){return Sf(t=>{const e=Fi(t,n,Mf);return[e[0],e[1]]})}function iy(n,t){return Sf(e=>{const i=n.pointAt(e,t,Mf);return[(i[0]-n.origin[0])*n.side[0]+(i[2]-n.origin[2])*n.side[2],i[1]]})}function Eh(n,t,e){const i=t>=0?n.aPos:n.aNeg,r=Math.min(Math.abs(t)/i,1),s=n.b*Math.max(Math.sqrt(Math.max(0,1-r*r)),.3),o=Math.max(n.cy-s,e+1.6);return{yMin:o,yMax:Math.max(n.cy+s,o+.6)}}function ry(n,t){if(t.br){const u=t.br,h=n[0]-u.origin[0],d=n[2]-u.origin[2],f=h*u.dir[0]+d*u.dir[2],g=h*u.side[0]+d*u.side[2],x=t.uAnt>t.corridorLen?t.corridorLen-1:-.3,m=it(f,x,u.uMax-.3),p=iy(u,it(m,0,u.uMax)),b=it(g,-p.aNeg,p.aPos);n[0]=u.origin[0]+u.dir[0]*m+u.side[0]*b,n[2]=u.origin[2]+u.dir[2]*m+u.side[2]*b;const M=Eh(p,b,Nt(n[0],n[2]));return n[1]=it(n[1],M.yMin,M.yMax),Math.hypot(m-f,b-g)}const e=n[2],i=n[0],r=it(e,pe+5,Be+3);if(r>-14){const u=Oe(r)*.82*(1+Math.pow((r+14)/17,2)*.9),h=it(i,-u,u);return n[0]=h,n[2]=r,n[1]=Math.max(n[1],Nt(h,r)+2.2),Math.hypot(h-i,r-e)}const s=ny(r),{limPos:o,limNeg:a}=ey(r,Math.max(Oe(r)*.82-1.6,3)),c=it(i,-Math.max(a,s.aNeg),Math.max(o,s.aPos));n[0]=c,n[2]=r;const l=Eh(s,c,Nt(c,r));return n[1]=it(n[1],l.yMin,l.yMax),Math.hypot(c-i,r-e)}const eo=10.5;function sy(n){const t=Nt(ee[0],ee[2]);if(n[1]>t+8.5)return;const e=n[0]-ee[0],i=n[2]-ee[2],r=Math.hypot(e,i);if(!(r>=eo)){if(r<.001){n[0]+=eo;return}n[0]=ee[0]+e/r*eo,n[2]=ee[2]+i/r*eo}}function yf(n){const t=xf(n.x,n.z);if(!t)return{br:null};const e=vf(t,n.x,n.z);return{br:t,uAnt:e,corridorLen:QS(t)}}function Ll(n,t,e){return t.z<Be-2?(sy(n),ry(n,e||yf(t))):(n[1]=Math.max(n[1],Nt(n[0],n[2])+2.2),0)}function Ef(n,t,e,i,r=1){return[n[0]-Math.sin(t)*Math.cos(e)*i,n[1]-Math.sin(e)*i+3.4*r,n[2]-Math.cos(t)*Math.cos(e)*i]}const bh=8,oy=6,bf=.9,ay=[0,.25,.5,.8],Th=-1.25;function cy(n,t,e,i,r,s){let o=i,a=1/0;const c=Math.min(oy*(r.scale||1),i);for(let l=0;l<=bh;l++){const u=Ht(i,c,l/bh),h=Ll(Ef(n,t,e,u,r.scale||1),r,s);if(h<=bf)return{d:u,err:h};h<a&&(a=h,o=u)}return{d:o,err:a}}function ly(n,t,e,i,r,s){let o=null;for(const a of ay){const c=Math.max(e-a,Th),l=cy(n,t,c,i,r,s);if(l.err<=bf)return{pitch:c,d:l.d};if((!o||l.err<o.err)&&(o={pitch:c,d:l.d,err:l.err}),c<=Th)break}return o}function uy(n,t,e,i){const r=n.scale||1,s=n.climb?[n.x,n.y+2*r,n.z]:[n.x,Nt(n.x,n.z)+2.6*r,n.z],o=n.z<Be-2,a=o?yf(n):null,c=o?ty(n.x,n.z):vr,l=o?Math.min(i,Math.max(13.5*r,c*1.5)):i,u=o?ly(s,t,e,l,n,a):{pitch:e,d:l},h=Ef(s,t,u.pitch,u.d,r);Ll(h,n,a);const d=[s[0]+Math.sin(n.yaw)*3*r,s[1]+.4*r,s[2]+Math.cos(n.yaw)*3*r];return{eye:h,aim:d}}function hy(n){const t={eye:null,aim:null};function e(i,r,s,o,a){const c=uy(i,r,s,o);t.eye||(t.eye=c.eye.slice(),t.aim=c.aim.slice());const l=6.5;for(let u=0;u<3;u++)t.eye[u]=hi(t.eye[u],c.eye[u],l,a),t.aim[u]=hi(t.aim[u],c.aim[u],l*1.4,a);Ll(t.eye,i),n.position.set(t.eye[0],t.eye[1],t.eye[2]),n.lookAt(new V(t.aim[0],t.aim[1],t.aim[2]))}return t.update=e,t}let dy=1;function fy(){return dy++}function py(n,t,e,i,r={}){return{id:r.id??fy(),profileId:n,x:t,y:e,z:i,yaw:r.yaw??0,speed:0,travel:0,bob:0,climb:null,legsInit:!1,scale:r.scale??1,controlled:!!r.controlled,goal:r.goal??null}}const Ya=Object.freeze({wishX:0,wishZ:0,mag:0,sprint:!1});function my(n,t,e,i){if(!e||e.type!=="patrol")return Ya;if(e.waitT>0)return e.waitT=Math.max(0,e.waitT-i),Ya;const r=e.target==="a"?e.a:e.b,s=r[0]-n,o=r[1]-t,a=Math.hypot(s,o);return a<=e.arriveR?(e.target=e.target==="a"?"b":"a",e.waitT=e.waitFor,Ya):{wishX:s/a,wishZ:o/a,mag:1,sprint:!1}}function Tf(n,t,e,i){const r=(t-n+Math.PI*3)%(Math.PI*2)-Math.PI;return n+r*(1-Math.exp(-e*i))}function gy(n){return n.w*.75}const wf=.01,wh=pi(Wt,wf),_y=Hi(wf)*.88,Af=An(hn)*2+.6,xy=Af+.2,vy=14;function My(n,t,e,i){for(let r=.3;r<=vy;r+=.3){const s=n+e*r,o=t+i*r,a=qo(s,o);if(Math.hypot(a[0]-s,a[1]-o)>.05)return r}return 1/0}const Rf=[];for(let n=0;n<8;n++)Rf.push([Math.cos(n*Math.PI/4),Math.sin(n*Math.PI/4)]);function Sy(n,t,e){let i=0,r=1/0;const s=Rf.map(([c,l],u)=>{const h=My(n,t,c,l);return h<r&&(r=h,i=u),h});if(r===1/0||r-e>=xy)return e;const o=Math.max(e,r+.3);return s[(i+4)%8]-o<Af?0:o}const yy=1;let $a=null;function Ey(){return $a||($a=Object.values(xl())),$a}function by(n,t){for(const e of Ey()){const i=n-e.origin[0],r=t-e.origin[2],s=i*e.dir[0]+r*e.dir[2];if(s<=-.5||s>=e.uMax+1)continue;const o=i*e.side[0]+r*e.side[2],a=Math.max(e.profR(it(s,0,e.uMax))*.82-1.2,2.2);if(!(Math.abs(o)>=a+3))return a}return Math.max(Oe(t)*.82-1.6,3)}function Ty(n,t,e,i){return 2*by(n,t)>=2*i+2*e+yy}let Xr=null,Ah=null,Cf=0;function Pf(n=An(hn)){return(!Xr||Xr.length!==Vi.length||Ah!==n)&&(Ah=n,Xr=Vi.map(t=>{const e=Sy(t.x,t.z,El(t));return e>0&&Ty(t.x,t.z,e,n)?e:0}),Cf=Xr.reduce((t,e)=>e>t?e:t,0)),Xr}function Lf(n,t,e,i){if(t<Be+6){const r=Pf();tn.forEachInRadius(n,t,e+Cf,"mushroom",(s,o,a,c)=>{r[s]>0&&i(a,c,r[s])})}if(t>Be-6){tn.forEachWithin(n,t,e,"rock",(s,o,a,c,l)=>i(a,c,l));const r=xi();tn.forEachWithin(n,t,e,"grass",(s,o,a,c)=>{const l=r[s];l.h>=Cl&&i(a,c,gy(l))}),i(wh[0],wh[2],_y)}}function wy(n,t,e=0){let i=0;return Lf(n,t,e,(r,s,o)=>{const a=o+e-Math.hypot(n-r,t-s);a>i&&(i=a)}),i}function Rh(n){const t={x:0,z:0,n:0},e=An(n.profile||hn);return Lf(n.x,n.z,e,(i,r,s)=>{const o=s+e,a=n.x-i,c=n.z-r,l=Math.hypot(a,c);if(l>=o||l<.001)return;const u=o-l;t.x+=a/l*u,t.z+=c/l*u,t.n++}),t}function us(n,t){const e=Rh(n);if(e.n===0)return;const i=e.x/e.n,r=e.z/e.n;n.x+=i,n.z+=r;const s=Math.hypot(i,r);if(s>5e-4){const a=i/s,l=-(r/s),u=a,h=Math.sin(n.yaw)*l+Math.cos(n.yaw)*u,d=t*.6*(h>=0?1:-1);n.x+=l*d,n.z+=u*d}const o=Rh(n);o.n>0&&(n.x+=o.x/o.n,n.z+=o.z/o.n)}const Ay=11;function Ry(n,t,e){const i=ne([e[0]-t[0],0,e[2]-t[2]]),r=Ye(i,[0,1,0]);return{wishX:i[0]*n.iy+r[0]*n.ix,wishZ:i[2]*n.iy+r[2]*n.ix}}function Cy(n,t,e,i){const r=n.profile||hn,s=n.scale||1,o=An(r),a=r.maxSpeed*(e.sprint?r.sprint:1);e.mag>.02?(n.yaw=Tf(n.yaw,Math.atan2(t.wishX,t.wishZ),r.turnRate,i),n.speed=hi(n.speed,a*e.mag,7,i)):n.speed=hi(n.speed,0,9,i);const c=n.speed*i;if(n.x+=Math.sin(n.yaw)*c,n.z+=Math.cos(n.yaw)*c,n.travel+=c,us(n,c),n.z<Be){const[l,u]=qo(n.x,n.z);n.x=l,n.z=u;const h=Ay+o,d=n.x-ee[0],f=n.z-ee[2],g=Math.hypot(d,f);if(g<h&&g>.001){const x=d/g,m=f/g;n.x=ee[0]+x*h,n.z=ee[2]+m*h;const p=-m,b=x,M=Math.sin(n.yaw)*p+Math.cos(n.yaw)*b,S=c*.75*(M>=0?1:-1);n.x+=p*S,n.z+=b*S}}else{const l=it(n.z,Ee.z0,Ee.z1);n.x=Math.max(Vc(n.x,l)[0],Vc(n.x-o,l)[0]+o),n.x=Math.min(n.x,Ee.x1-o*2),n.z=Math.min(n.z,Ee.z1-o*2)}n.y=Nt(n.x,n.z),n.bob=Math.sin(n.travel*(Math.PI*2/df(r))*2)*.13*s*it(n.speed/(8*s),0,1)}Cr.id+"",Fo.id+"";function If(n,t,e,i,r={}){const s=py(n.id,t,e,i,{...r,scale:r.scale??n.scale});return s.profile=n,s.legState=XS(n),tn.insert("ant",s.id,t,i,An(n)),s}function Df(n){tn.remove("ant",n.id)}function Uf(n,t,e){const i=n.controlled&&e;if(n.climb)WS(n,i?e.climbAxis:0,t);else{const r=i?e.wish:my(n.x,n.z,n.goal,t),s=i?e.intent:r;Cy(n,r,s,t)}$S(n,n.legState,t),tn.move("ant",n.id,n.x,n.z,An(n.profile))}function Py(n,t,e){return{wish:Ry(n,t,e),intent:n,climbAxis:it(n.iy,-1,1)}}const Le={...jo},Ch={terre:{label:"terre meuble",diggable:!0,quality:.9},argile:{label:"argile",diggable:!0,quality:.72},litiere:{label:"litière de feuilles",diggable:!0,quality:.66},sable:{label:"sable",diggable:!0,quality:.38},roche:{label:"roche",diggable:!1,quality:0},boue:{label:"boue détrempée",diggable:!1,quality:0}},jc=32,no=9,Eo=18,io=55,Ly=190,Iy=26,Ph=55,Zc=14,Dy={soil:.28,slope:.16,water:.2,shade:.18,food:.18};function Nf(n,t,e){const i=xi();return Le.worldIndex.countInRadius(n,t,e,"grass",(r,s)=>s<e&&i[r].h>=Cl)}function Uy(n,t,e){return Le.worldIndex.countInRadius(n,t,e,"resource",(i,r)=>r<e)}const Ny={soil:"terre",moss:"litiere",sand:"sable",rock:"roche",water:"boue",terre:"terre",argile:"argile",litiere:"litiere",sable:"sable",roche:"roche",boue:"boue"};function Fy(n,t){if(typeof Le.soilAt=="function"){const e=Le.soilAt(n,t),i=Ny[typeof e=="string"?e:e&&e.kind],r=Ch[i];if(r)return{...r,kind:i,assumed:!1}}return{...Ch.terre,kind:"terre",assumed:!0}}function Oy(n,t){if(typeof Le.slopeAt=="function")return{deg:Le.slopeAt(n,t),assumed:!1};const e=Le.groundNormal(n,t);return{deg:Math.acos(it(e[1],-1,1))*180/Math.PI,assumed:!1}}function By(n,t){return typeof Le.waterDistance=="function"?{d:Le.waterDistance(n,t),assumed:!1}:typeof Le.distanceToWater=="function"?{d:Le.distanceToWater(n,t),assumed:!1}:{d:null,assumed:!0}}function zy(n,t){if(typeof Le.shadeAt=="function")return{v:it(Le.shadeAt(n,t),0,1),assumed:!1};const e=Le.TREE,i=e?it(1-Math.hypot(n-e.x,t-e.z)/90,0,1):0,r=Nf(n,t,Iy);return{v:it(i*.8+Math.min(r,8)/8*.5,0,1),assumed:!0}}function ky(n,t){return Array.isArray(Le.RESOURCE_NODES)?{n:Uy(n,t,Ph),assumed:!1}:{n:Nf(n,t,Ph),assumed:!0}}function Gy(n){if(n>=jc)return 0;const t=n<=no?.78+.22*(n/no):1-Math.pow((n-no)/(jc-no),1.4);return it(t,0,1)}function Hy(n){return n===null?.5:n<=Eo?0:n<=io?it((n-Eo)/(io-Eo),0,1):it(1-(n-io)/(Ly-io),.15,1)}const Vy=[{min:78,key:"excellent",label:"excellent"},{min:60,key:"bon",label:"bon"},{min:42,key:"moyen",label:"moyen"},{min:0,key:"ingrat",label:"ingrat"}];function Wy(n){return Vy.find(t=>n>=t.min)}function Xy(n){return n>.66?"à l'ombre":n>.3?"mi-ombre":"plein soleil"}function qy(n){return n>=Zc?"ressources abondantes":n>=Zc*.4?"quelques ressources":"peu de ressources"}function bo(n,t){const e=Fy(n,t),i=Oy(n,t),r=By(n,t),s=zy(n,t),o=ky(n,t),a=[{key:"soil",label:e.label,value:e.quality,assumed:e.assumed},{key:"slope",label:`pente ${i.deg.toFixed(0)}°`,value:Gy(i.deg),assumed:i.assumed},{key:"water",label:r.d===null?"eau inconnue":`eau à ${r.d.toFixed(0)}`,value:Hy(r.d),assumed:r.assumed},{key:"shade",label:Xy(s.v),value:it(s.v*1.25,0,1),assumed:s.assumed},{key:"food",label:qy(o.n),value:it(o.n/Zc,0,1),assumed:o.assumed}];let c=null;t<Le.TUNNEL_MOUTH?c={key:"underground",text:"sous terre — rien à fonder ici"}:e.diggable?r.d!==null&&r.d<=Eo?c={key:"water",text:"trop près de l'eau — la galerie serait inondée"}:i.deg>=jc&&(c={key:"slope",text:`pente ${i.deg.toFixed(0)}° — le sol s'effondrerait`}):c={key:"soil",text:`${e.label} — impossible de creuser`};let l=0;for(const h of a)l+=h.value*Dy[h.key];const u=Math.round(it(l,0,1)*100);return{x:n,z:t,diggable:!c,blocker:c,score:u,grade:Wy(u),factors:a,assumed:a.some(h=>h.assumed)}}function Yy(n){return n.diggable?`Site : ${n.grade.label} (${n.score}/100)`:`Site : impossible — ${n.blocker.text}`}function Lh(n){return n.factors.slice().sort((t,e)=>t.value-e.value).map(t=>t.assumed?`${t.label} ?`:t.label).join(" · ")}const mi={...jo},dr={graine:"graine",brindille:"brindille",miellat:"miellat"},$y={graine:["graine","graines"],brindille:["brindille","brindilles"],miellat:["dose de miellat","doses de miellat"]};function Ky(n,t){const e=$y[n]||[n,n];return`${t} ${t>1?e[1]:e[0]}`}const jy=[{x:60,z:110,kind:"graine",amount:3},{x:95,z:105,kind:"brindille",amount:3},{x:55,z:120,kind:"miellat",amount:2},{x:100,z:125,kind:"graine",amount:2},{x:45,z:115,kind:"brindille",amount:2},{x:85,z:135,kind:"miellat",amount:2},{x:110,z:110,kind:"graine",amount:2},{x:65,z:135,kind:"brindille",amount:2},{x:40,z:128,kind:"graine",amount:2}].map((n,t)=>({id:9e3+t,r:10,...n}));let Ff=!1;function Nr(){return Array.isArray(mi.RESOURCE_NODES)?mi.RESOURCE_NODES:(Ff=!0,jy)}function Of(){return Nr(),Ff}function Bf(n,t){if(!n)return 0;if(typeof mi.harvestNode=="function")return mi.harvestNode(n.id,t)||0;const e=Math.max(0,Math.min(t,n.amount));return n.amount-=e,e}function Zy(n,t,e=0){const i=Nr();if(i!==mi.RESOURCE_NODES)return Jy(i,n,t,e);const r=mi.worldIndex.nearestWithin(n,t,e*.6,"resource",s=>i[s].amount>0);return r?i[r.id]:null}function Jy(n,t,e,i){let r=null,s=1/0;for(let o=0;o<n.length;o++){const a=n[o];if(a.amount<=0)continue;const c=Math.hypot(a.x-t,a.z-e);c<=a.r+i*.6&&c<s&&(s=c,r=a)}return r}const Qy=32,Ih=600;function tE(n,t,e){let i=null,r=1/0;for(let s=0;s<n.length;s++){const o=n[s];if(o.amount<=0)continue;const a=Math.hypot(o.x-t,o.z-e);a<r&&(r=a,i=o)}return i}function eE(n,t){const e=Nr();if(e!==mi.RESOURCE_NODES)return tE(e,n,t);let i=Qy;for(;;){const r=mi.worldIndex.nearest(n,t,i,"resource",s=>e[s].amount>0);if(r)return e[r.id];if(i>=Ih)return null;i=Math.min(i*2,Ih)}}const ro=new Map;let Dh=null;function zf(n){const t=Nr();if(Dh!==t||ro.size!==t.length){Dh=t,ro.clear();for(const e of t)ro.set(e.id,e)}return ro.get(n)||null}const Jc=1.8,Il=16,Oo=5,nE=.5;function iE(){const n={carrying:null,cache:null,progress:0,activeId:null,justTook:null,justDropped:null};function t(){n.progress=0,n.activeId=null}function e(f,g){if(n.activeId!==null){const x=zf(n.activeId);if(x&&x.amount>0&&Math.hypot(x.x-f.x,x.z-f.z)<=x.r+g*.6)return x}return Zy(f.x,f.z,g)}function i(f,g){if(n.carrying)return"full";if(!f)return r(g),"idle";if(n.activeId!==f.id&&(n.activeId=f.id,n.progress=0),n.progress+=g/Jc,n.progress<1)return"progress";const x=Bf(f,1);return t(),x<=0?"empty":(n.carrying={kind:f.kind},n.justTook={kind:f.kind,qty:x,node:f},"taken")}function r(f){if(n.progress<=0){n.activeId=null;return}n.progress=Math.max(0,n.progress-f*nE/Jc),n.progress===0&&(n.activeId=null)}function s(f){return n.cache?Math.hypot(n.cache.x-f.x,n.cache.z-f.z):1/0}function o(f){return n.carrying?!n.cache||s(f)<=Il:!1}function a(f){if(!o(f))return!1;n.cache||(n.cache={x:f.x,y:Nt(f.x,f.z),z:f.z,items:{},total:0});const g=n.carrying.kind;return n.cache.items[g]=(n.cache.items[g]||0)+1,n.cache.total+=1,n.carrying=null,n.justDropped={kind:g,cache:n.cache},!0}function c(){n.justTook=null,n.justDropped=null}function l(){return n.cache?n.cache.total:0}function u(){return l()>=Oo}function h(){return!n.cache||n.cache.total===0?null:Object.entries(n.cache.items).filter(([,f])=>f>0).map(([f,g])=>Ky(f,g)).join(" · ")}function d(){const f=n.carrying?`Porte : ${dr[n.carrying.kind]}`:"Porte : rien",g=h();return`${f} · Réserve : ${l()}/${Oo}${g?` (${g})`:""}`}return{state:n,target:e,hold:i,release:r,canDrop:o,drop:a,cacheDistance:s,stock:l,enough:u,stockDetail:h,inventoryLine:d,endFrame:c}}const Xi={...jo},Uh=4,rE={rock:"la roche ne se creuse pas",soil:"ce sol ne se creuse pas",water:"trop près de l'eau — la galerie serait inondée",slope:"la pente s'effondrerait",underground:"on ne fonde pas dans une galerie déjà creusée",bounds:"le bord du monde — il faut revenir vers le pré",occupied:"une galerie passe déjà sous ce sol","already-founded":"la colonie est déjà fondée"};function Qc(n){return n?rE[n]||`impossible de creuser ici (${n})`:"impossible de creuser ici"}let tl=null,kf=!1;function Nh(){return typeof Xi.foundNest!="function"||kf}function rs(){if(typeof Xi.nestOrigin=="function"){const n=Xi.nestOrigin();if(n)return n}return tl}function Mr(){return!!rs()}function Dl(n,t){if(Mr())return{ok:!1,reason:"already-founded"};if(typeof Xi.canFoundAt=="function"){const i=Xi.canFoundAt(n,t)||{};return{ok:!!i.ok,reason:i.reason,assumed:!1}}const e=bo(n,t);return e.diggable?{ok:!0,assumed:!0}:{ok:!1,reason:e.blocker.key,assumed:!0}}function sE(n,t){const e=Dl(n,t);if(!e.ok)return e;if(typeof Xi.foundNest=="function"){const i=Xi.foundNest(n,t)||{};return i.ok&&(tl={x:n,z:t}),{ok:!!i.ok,reason:i.reason,assumed:!1}}return kf=!0,tl={x:n,z:t},{ok:!0,assumed:!0}}function Fh(n,t,e,i){const r=e-n,s=i-t;if(Math.hypot(r,s)<1)return"ici";const o=s>8?"nord":s<-8?"sud":"",a=r>8?"est":r<-8?"ouest":"";return o&&a?`au ${o}-${a}`:a?`à l'${a}`:`au ${o}`}const hs=3,oE=25,aE=6,ci={NO_NEST:"no-nest",TOO_FAR:"too-far",BROOD_FULL:"brood-full",NOT_ENOUGH_FOOD:"not-enough-food"},cE={[ci.NO_NEST]:"pas encore de colonie fondée",[ci.TOO_FAR]:"trop loin du couvoir",[ci.BROOD_FULL]:"couvain plein — attendre une éclosion",[ci.NOT_ENOUGH_FOOD]:`pas assez de réserve (il faut ${hs})`};function lE(n){return n?cE[n]||`impossible de pondre (${n})`:"impossible de pondre"}function uE(n=aE){return{capacity:n,clutches:[],laidTotal:0,workersAvailable:0,hatchedTotal:0}}function hE(n,t){if(!n||n.total<t)return!1;let e=t;for(const i of Object.keys(n.items)){if(e<=0)break;const r=n.items[i]||0;if(r<=0)continue;const s=Math.min(r,e);n.items[i]=r-s,e-=s}return n.total-=t,!0}function Oh(n,t,e={}){const{founded:i=!1,inChamber:r=!1}=e;return i?r?n.clutches.length>=n.capacity?{ok:!1,reason:ci.BROOD_FULL}:hE(t,hs)?(n.clutches.push({remaining:oE}),n.laidTotal++,{ok:!0}):{ok:!1,reason:ci.NOT_ENOUGH_FOOD}:{ok:!1,reason:ci.TOO_FAR}:{ok:!1,reason:ci.NO_NEST}}function dE(n,t){let e=0;const i=[];for(const r of n.clutches)r.remaining-=t,r.remaining>0?i.push(r):e++;return n.clutches=i,e>0&&(n.workersAvailable+=e,n.hatchedTotal+=e),e}function fE(n){if(n.clutches.length===0)return null;let t=1/0;for(const e of n.clutches)e.remaining<t&&(t=e.remaining);return Math.max(0,t)}function pE(n){return n.clutches.length}const mE={harvest:!0,found:!0};function gE({profile:n=hn}={}){const t=iE(),e=An(n);let i=0,r=null,s=0;function o(m,p=3.2){r=m,s=p}function a(m){if(m.climb)return{kind:"climb",climbTarget:null};if(t.state.carrying){const S=t.state.carrying.kind;if(t.canDrop(m))return{kind:"drop",label:t.state.cache?"ajouter au dépôt":"poser ici — ce sera le dépôt"};const T=t.cacheDistance(m),R=t.state.cache;return{kind:"return",label:`rapporter ${dr[S]} au dépôt (${T.toFixed(0)} u ${Fh(m.x,m.z,R.x,R.z)})`}}if(t.state.cache&&!Mr()&&t.enough()&&t.cacheDistance(m)<=Il){const S=Dl(m.x,m.z);return{kind:"found",ok:S.ok,reason:S.reason,assumed:S.assumed}}const b=t.target(m,e);if(b)return{kind:"harvest",node:b};const M=kS(m);return M?{kind:"climb",climbTarget:M}:{kind:"none"}}function c(m,p,b,M){const S=a(m);switch(s>0&&(s-=M,s<=0&&(r=null)),(S.kind!=="harvest"||!b)&&t.release(M),(S.kind!=="found"||!b||!S.ok)&&(i=Math.max(0,i-M/Uh)),S.kind){case"harvest":{if(b){const T=t.hold(S.node,M);T==="taken"?o(`elle emporte ${dr[t.state.carrying.kind]}`):T==="empty"&&o("plus rien à prendre ici")}break}case"found":{if(b&&S.ok&&(i+=M/Uh,i>=1)){i=0;const T=sE(m.x,m.z);o(T.ok?Nh()?"Colonie fondée ici. (le monde ne creuse pas encore la chambre)":"Colonie fondée ici.":`impossible : ${Qc(T.reason)}`,6)}break}case"drop":if(p){const T=t.state.carrying.kind;t.drop(m)&&o(t.stock()===1?`dépôt ouvert ici — ${dr[T]} posée`:`${dr[T]} ajoutée au dépôt (${t.stock()}/${Oo})`)}break;case"climb":p&&HS(m,S.climbTarget);break}return S}function l(m){return`${Math.round(m*100)}%`}function u(m,p){if(p.kind==="climb")return VS(m,p.climbTarget);if(p.kind==="return")return p.label;if(p.kind==="drop")return`E — ${p.label}`;if(p.kind==="harvest"){const b=p.node;return t.state.progress>0?`Récolte… ${l(t.state.progress)}`:`E (maintenir) — récolter ${dr[b.kind]}`}return p.kind==="found"?p.ok?i>0?`Creusement… ${l(i)}`:"E (maintenir) — fonder la colonie ici":`Fonder ici : ${Qc(p.reason)}`:null}function h(m){if(Mr()){const M=rs(),S=Math.hypot(M.x-m.x,M.z-m.z),T=S<12?"ici":`à ${S.toFixed(0)} u ${Fh(m.x,m.z,M.x,M.z)}`,R=Math.max(0,hs-t.stock()),y=R>0?`encore ${R} unité${R>1?"s":""} de réserve avant de pouvoir pondre`:"la réserve suffit pour pondre";return`Colonie fondée ${T}. Suite : pondre (P) dans le couvoir — ${y}.`+(Nh()?" [chambre non creusée]":"")}const p=Oo-t.stock();if(t.state.carrying)return t.state.cache?`Objectif : rapporter au dépôt — encore ${p} pour fonder`:"Objectif : poser ce fardeau — le premier dépôt fixe le site de la colonie";if(t.enough())return"Objectif : fonder la colonie sur le dépôt";const b=Of()?" [nœuds provisoires]":"";return`Objectif : récolter ${p} unité${p>1?"s":""} de plus${b}`}function d(){return t.inventoryLine()}function f(){return r}function g(m){return m.kind==="harvest"&&t.state.progress>0?t.state.progress:m.kind==="found"&&i>0?i:null}function x(m,p){switch(p.kind){case"harvest":return{x:p.node.x,z:p.node.z,radius:Math.max(p.node.r,6),blocked:!1};case"found":{const b=t.state.cache;return b?{x:b.x,z:b.z,radius:11,blocked:!p.ok}:null}case"drop":{const b=t.state.cache;return{x:b?b.x:m.x,z:b?b.z:m.z,radius:b?11:7,blocked:!1}}case"return":{const b=t.state.cache;return b?{x:b.x,z:b.z,radius:11,blocked:!1}:null}case"climb":{const b=p.climbTarget;if(!b)return null;if(b.kind==="tree")return{x:Wt.x,z:Wt.z,radius:Wt.w+5,blocked:!1};const M=xi()[b.i];return M?{x:M.x,z:M.z,radius:5,blocked:!1}:null}default:return null}}return{harvest:t,update:c,resolve:a,promptText:u,objectiveText:h,inventoryText:d,message:f,holdProgress:g,targetMark:x,isHold:m=>!!mE[m.kind],endFrame:()=>t.endFrame()}}const Bo={graine:{r:[.95,.78,1.3],color:14270852,emissive:0},brindille:{r:[2.9,.26,.26],color:8016424,emissive:0},miellat:{r:[.9,.88,.9],color:15247420,emissive:3810309}},_E=2,xE=12;let Ka=null;function vE(){return Ka||(Ka=new Wo(1,10,7)),Ka}const Bh=new Map;function Gf(n){let t=Bh.get(n);if(!t){const e=Bo[n];t=new nn({color:e.color,emissive:e.emissive,roughness:.7,metalness:.02}),Bh.set(n,t)}return t}const ja=new te,zh=new V,kh=new V,Gh=new V,Hh=new V;function Hf(n,t,e,i,r){zh.set(e[0],e[1],e[2]),kh.set(i[0],i[1],i[2]),Gh.set(r[0],r[1],r[2]),ja.makeBasis(zh,kh,Gh),Hh.set(t[0],t[1],t[2]),ja.setPosition(Hh),n.matrix.copy(ja)}function Za(n){const t=new Xt(vE(),Gf(n));return t.matrixAutoUpdate=!1,t.castShadow=!0,t.visible=!1,t}function Vh(n,t,e,i,r,s=0){const o=Bo[t].r.map(l=>l*_E),a=Math.cos(r),c=Math.sin(r);Hf(n,[e,Nt(e,i)+o[1]*.9+s,i],[a*o[0],0,c*o[0]],[0,o[1],0],[-c*o[2],0,a*o[2]]),n.visible=!0}function ME({scene:n,profile:t=hn}){const e=new be;e.name="gameplay-props",n.add(e);const i={};for(const f of Object.keys(Bo))i[f]=Za(f),e.add(i[f]);const r=[];for(let f=0;f<xE;f++){const g=Za("graine");r.push(g),e.add(g)}let s=-1;const o=Of(),a=[];if(o)for(const f of Nr()){const g=[];for(let x=0;x<3;x++){const m=Za(f.kind);e.add(m),g.push(m)}a.push({node:f,clutch:g,drawn:-1})}function c(){for(const f of a){const g=f.node,x=Math.max(0,Math.min(f.clutch.length,g.amount));if(x!==f.drawn){f.drawn=x;for(let m=0;m<f.clutch.length;m++)if(m<x){const p=m/f.clutch.length*Math.PI*2+g.id;Vh(f.clutch[m],g.kind,g.x+Math.cos(p)*3.2,g.z+Math.sin(p)*3.2,p)}else f.clutch[m].visible=!1}}}function l(f){if(!f||f.total===s)return;s=f.total;let g=0;for(const[x,m]of Object.entries(f.items))for(let p=0;p<m&&g<r.length;p++,g++){const b=g*2.399,M=1.6+g*1.15,S=r[g];S.material=Gf(x),Vh(S,x,f.x+Math.cos(b)*M,f.z+Math.sin(b)*M,b*1.7)}for(;g<r.length;g++)r[g].visible=!1}function u(f,g){for(const R of Object.keys(i))i[R].visible=!1;if(!g)return;const x=i[g.kind];if(!x)return;const m=Pl(f),p=m.basis,b=m.scale,M=(f.profile||t).body.mandible,S=[0,M.tip[1]-.15,M.tip[2]+.55],T=Bo[g.kind].r;Hf(x,gn(m,S),Ct(p.side,T[0]*b),Ct(p.up,T[1]*b),Ct(p.fwd,T[2]*b)),x.visible=!0}function h(f,g){u(f,g.carrying),l(g.cache),o&&c()}function d(){n.remove(e)}return{group:e,update:h,dispose:d,provisional:o}}const SE="position:fixed;color:#e6d3ab;font:13px/1.5 monospace;pointer-events:none;text-shadow:0 1px 3px rgba(0,0,0,0.9);z-index:5;";function Hn(n,t){const e=document.createElement("div");return e.id=n,e.style.cssText=SE+t,document.body.appendChild(e),e}function yE(){return{setSite(){},setPrompt(){},setObjective(){},setStock(){},setEvent(){},setHold(){},setBrood(){},toggleControls(){},closeControls(){},dispose(){}}}const EE=[["ZQSD / WASD","se déplacer"],["Maj","courir"],["Souris (glisser)","tourner la caméra"],["Molette","reculer / rapprocher la vue"],["E","action — appui court, ou maintenu quand la barre apparaît"],["P","pondre (dans le couvoir, une fois la colonie fondée)"],["H","afficher / masquer cette aide"]];function bE(){if(typeof document>"u")return yE();const n=Hn("event","left:12px;bottom:142px;color:#cfe0a8;"),t=Hn("prompt","left:12px;bottom:122px;font-size:14px;color:#ffe6b0;"),e=Hn("objective","left:12px;bottom:88px;color:#f0dfb8;"),i=Hn("stock","left:12px;bottom:70px;opacity:0.85;"),r=Hn("siteinfo","left:12px;bottom:52px;"),s=Hn("sitedetail","left:12px;bottom:34px;opacity:0.62;font-size:12px;"),o=Hn("broodinfo","left:12px;bottom:14px;font-size:12px;color:#e8c98f;"),a=Hn("hold","left:12px;bottom:112px;width:190px;height:5px;background:rgba(0,0,0,0.45);border-radius:3px;overflow:hidden;"),c=document.createElement("div");c.style.cssText="height:100%;width:0%;background:#ffc46a;border-radius:3px;",a.appendChild(c),a.style.display="none";const l=Hn("controls","right:12px;top:12px;padding:10px 14px;background:rgba(12,10,8,0.62);border-radius:5px;line-height:1.8;");l.innerHTML='<div style="opacity:0.75;margin-bottom:4px">Commandes</div>'+EE.map(([M,S])=>`<div><span style="color:#ffe6b0">${M}</span><span style="opacity:0.72"> — ${S}</span></div>`).join("");let u=!0,h=null,d=null,f=null,g=null,x=null,m=null,p=null;const b=(M,S,T)=>S===T?T:(M.textContent=S||"",S);return{setSite(M,S,T){M!==h&&(r.textContent=M,r.style.color=T?"#e6d3ab":"#d98b6a",h=M),S!==d&&(s.textContent=S,d=S)},setPrompt(M){f=b(t,M,f)},setObjective(M){g=b(e,M,g)},setStock(M){x=b(i,M,x)},setEvent(M){m=b(n,M,m)},setBrood(M){p=b(o,M,p)},setHold(M){const S=M!==null&&M>.001;S!==(a.style.display==="block")&&(a.style.display=S?"block":"none"),S&&(c.style.width=`${Math.min(100,M*100)}%`)},toggleControls(){u=!u,l.style.display=u?"block":"none"},closeControls(){u&&(u=!1,l.style.display="none")},dispose(){for(const M of[e,i,r,s,t,n,o,a,l])M.parentNode&&M.parentNode.removeChild(M)}}}const Wh=.8,Xh=1,Ja=40,qh=new Q("#FFB03A").multiplyScalar(1.45),TE=new Q("#E8663A").multiplyScalar(1.35);function wE(){const n=[],t=[];for(let i=0;i<=Ja;i++){const r=i/Ja*Math.PI*2,s=Math.cos(r),o=Math.sin(r);n.push(s*Wh,0,o*Wh,s*Xh,0,o*Xh)}for(let i=0;i<Ja;i++){const r=i*2,s=r+1,o=r+2,a=r+3;t.push(r,s,a,r,a,o)}const e=new rn;return e.setAttribute("position",new me(n,3)),e.setIndex(t),e}function AE(n){const t=new ms({color:qh.clone(),transparent:!0,opacity:.85,side:ue,depthTest:!1,depthWrite:!1,fog:!1}),e=new Xt(wE(),t);return e.name="target-marker",e.renderOrder=900,e.frustumCulled=!1,e.visible=!1,n.add(e),{show(i,r,s,o){if(!i){e.visible=!1;return}e.visible=!0,e.position.set(i.x,Nt(i.x,i.z)+.35,i.z);const a=1+.045*Math.sin(o*4.2);e.scale.setScalar(r*a),t.color.copy(s?TE:qh),t.opacity=s?.92:.82+.14*Math.sin(o*4.2)},dispose(){n.remove(e),e.geometry.dispose(),t.dispose()}}}const Je={SEEK:"seek",HARVEST:"harvest",RETURN:"return",DEPOSIT:"deposit"},RE=1.8;function CE(){return{state:Je.SEEK,targetNodeId:null,progress:0,carrying:null,justTook:null,justDropped:null}}const an=Object.freeze({wishX:0,wishZ:0,mag:0,sprint:!1});function Yh(n,t,e,i){const r=n-e,s=t-i,o=Math.hypot(r,s);return o<1e-6?an:{wishX:r/o,wishZ:s/o,mag:1,sprint:!1}}function PE(n,t,e){n.justTook=null,n.justDropped=null;const i=t.bodyR??0,r=t.harvestSeconds??RE;switch(n.state){case Je.SEEK:{let s=n.targetNodeId!=null?t.nodeById(n.targetNodeId):null;return(!s||s.amount<=0)&&(s=t.findNode(t.x,t.z)),n.targetNodeId=s?s.id:null,s?Math.hypot(s.x-t.x,s.z-t.z)<=s.r+i*.6?(n.state=Je.HARVEST,n.progress=0,an):Yh(s.x,s.z,t.x,t.z):an}case Je.HARVEST:{const s=t.nodeById(n.targetNodeId);if(!s||s.amount<=0)return n.state=Je.SEEK,n.targetNodeId=null,n.progress=0,an;if(n.progress+=e/r,n.progress<1)return an;const o=t.takeFromNode(s,1);return n.progress=0,o<=0?(n.state=Je.SEEK,n.targetNodeId=null,an):(n.carrying={kind:s.kind},n.justTook={kind:s.kind,nodeId:s.id},n.state=Je.RETURN,an)}case Je.RETURN:return t.depot?Math.hypot(t.depot.x-t.x,t.depot.z-t.z)<=(t.depotRadius??0)?(n.state=Je.DEPOSIT,an):Yh(t.depot.x,t.depot.z,t.x,t.z):an;case Je.DEPOSIT:return n.carrying?(t.deposit(n.carrying.kind),n.justDropped={kind:n.carrying.kind},n.carrying=null,n.state=Je.SEEK,n.targetNodeId=null,an):(n.state=Je.SEEK,an);default:return n.state=Je.SEEK,an}}const Vf=An(Cr),LE=Vf*3,IE=Vf*7,DE=Math.PI*(3-Math.sqrt(5));function UE({scene:n}){const t=[];function e(a,c,l){const u=Nt(a,c),h=If(Cr,a,u,c,{controlled:!0,yaw:l});us(h,0),us(h,0),h.y=Nt(h.x,h.z);const{group:d,updatePose:f}=gf(Cr);return n.add(d),n.add(pf(d)),t.push({entity:h,forage:CE(),updatePose:f,group:d}),h}function i(a,c,l){const u=a.workersAvailable;a.workersAvailable=0;for(let h=0;h<u;h++){const d=t.length,f=d*DE,g=LE+d%5/5*IE;e(c+Math.cos(f)*g,l+Math.sin(f)*g,f)}return u}function r(a,c,l){const u=l?{x:l.x,z:l.z}:null;for(const h of t){const d=An(h.entity.profile),f={x:h.entity.x,z:h.entity.z,bodyR:d,findNode:eE,nodeById:zf,takeFromNode:Bf,depot:u,depotRadius:Il,deposit(x){l.items[x]=(l.items[x]||0)+1,l.total+=1},harvestSeconds:Jc},g=PE(h.forage,f,a);Uf(h.entity,a,{wish:{wishX:g.wishX,wishZ:g.wishZ},intent:{mag:g.mag,sprint:g.sprint},climbAxis:0}),h.updatePose(h.entity,h.entity.legState,c),h.group.position.set(0,0,0)}}function s(){return t.length}function o(){for(const a of t)Df(a.entity);t.length=0}return{spawnFromBrood:i,update:r,count:s,dispose:o,workers:t}}const hr={...jo},$h=[140,170],Kh=-Math.PI/2,NE=.25,FE=3,OE=cs,jh=6;function BE({scene:n,camera:t,domElement:e,profile:i=hn}){const r=If(i,$h[0],0,$h[1],{id:"player",controlled:!0,yaw:Kh});r.y=Nt(r.x,r.z),us(r,0),us(r,0),r.y=Nt(r.x,r.z);const{group:s,updatePose:o}=gf(i);n.add(s),n.add(pf(s));const a=JS(e,i);a.state.camYaw=Kh;const c=hy(t),l=bE(),u=AE(n),h=gE({profile:i}),d=ME({scene:n,profile:i});c.update(r,a.state.camYaw,a.state.wantPitch,a.state.camDist,0);const f=uE(OE),g=UE({scene:n});let x=!1;function m(D){D.code==="KeyP"&&(x=!0)}window.addEventListener("keydown",m);function p(){const D=x;return x=!1,D}let b=null,M=0,S=null;function T(D){const H=typeof hr.getFoundedNest=="function"?hr.getFoundedNest():null;return H?Math.hypot(D.x-H.chamber.x,D.z-H.chamber.z)<=H.chamber.r:!1}function R(){const D=fE(f),H=D===null?"":` · prochaine éclosion : ${Math.ceil(D)} s`,N=`Couvain : ${pE(f)}/${f.capacity}${H} · ouvrières écloses : ${f.workersAvailable}`;return M>0?`${N} — ${b}`:`${N} · P (dans le couvoir) — pondre, coûte ${hs}`}let y=0,A=null,L=null,_=null;function v(D){y-=D;const H=A?Math.hypot(r.x-A[0],r.z-A[1]):1/0;if((L||_)&&y>0&&H<FE)return;y=NE,A=[r.x,r.z];const N=rs();if(N){_||(_=bo(N.x,N.z)),l.setSite(`Nid fondé — site ${_.grade.label} (${_.score}/100)`,Lh(_),!0);return}L=bo(r.x,r.z),l.setSite(Yy(L),Lh(L),L.diggable)}function I(D,H){const N=a.readMoveIntent();a.consumeHelp()&&l.toggleControls();const O=h.update(r,a.consumeInteract(),a.isInteractHeld(),D);if(Uf(r,D,Py(N,c.eye,c.aim)),o(r,r.legState,H),s.position.set(0,0,0),Do.position.set(r.x,r.y,r.z),Do.radius=An(i),d.update(r,h.harvest.state),p()){const J=Oh(f,h.harvest.state.cache,{founded:Mr(),inChamber:T(r)});M=3.2,J.ok?(b=`Un œuf est pondu (${hs} unités prélevées sur la réserve).`,S===null&&(S=0)):b=`Pondre : ${lE(J.reason)}`}const P=dE(f,D);P>0&&M<=0&&(b=P===1?"Un œuf a éclos : une ouvrière est prête.":`${P} œufs ont éclos : autant d'ouvrières prêtes.`,M=3.2),M>0&&(M-=D);const z=rs();z&&g.spawnFromBrood(f,z.x,z.z),g.update(D,H,h.harvest.state.cache),typeof hr.populateNest=="function"&&hr.populateNest(Math.min(f.laidTotal,f.capacity)),S!==null&&(S=Math.min(jh,S+D),typeof hr.setFoundedMix=="function"&&hr.setFoundedMix(S/jh)),v(D),l.setPrompt(h.promptText(r,O)),l.setObjective(h.objectiveText(r)),l.setStock(h.inventoryText()),l.setEvent(h.message()),l.setHold(h.holdProgress(O)),l.setBrood(Mr()?R():null);const K=h.targetMark(r,O);u.show(K,K?K.radius:0,K?K.blocked:!1,H),h.harvest.state.carrying&&l.closeControls(),h.endFrame(),!a.state.dragging&&!r.climb&&N.mag>.02&&(a.state.camYaw=Tf(a.state.camYaw,r.yaw,2.2,D)),c.update(r,a.state.camYaw,a.state.wantPitch,a.state.camDist,D)}typeof window<"u"&&(window.__decorPenetration=wy,window.__antRadius=An(i),window.__site=(D,H)=>bo(D,H),window.__avatar=i,window.__mushroomRadii=Pf,window.__grass=xi(),window.__nodes=Nr,window.__harvest=()=>h.harvest.state,window.__nestOrigin=rs,window.__canFound=(D,H)=>{const N=Dl(D,H);return{...N,text:Qc(N.reason)}},window.__toWater=Zn,window.__brood=f,window.__lay=()=>Oh(f,h.harvest.state.cache,{founded:Mr(),inChamber:T(r)}),window.__inBroodChamber=()=>T(r),window.__workers=g);function F(){window.removeEventListener("keydown",m),a.dispose(),l.dispose(),u.dispose(),d.dispose(),g.dispose(),Df(r)}return{ant:r,group:s,update:I,dispose:F}}const zE=document.getElementById("app"),Yi=lv(zE),en=uv(),Ne=new jx;Ne.background=new Q(1709584);Ne.fog=new fl(1709584,40,220);const To=new iv(12572917,7236152,.85);Ne.add(To);const Qa={sky:new Q(4873350),ground:new Q(2367283),intensity:.55},un=bl,Dn=Tl,Zh=new Q,Jh=new Q,Qh=new Q,td=new Q,qr={sky:new Q(un.hemiSky),ground:new Q(un.hemiGround),fog:new Q(un.fog),bg:new Q(un.sky),sun:new Q(un.sunColor)},Yr={sky:new Q(Dn.hemiSky),ground:new Q(Dn.hemiGround),fog:new Q(Dn.fog),bg:new Q(Dn.sky),sun:new Q(Dn.sunColor)},ke=new ov(un.sunColor,un.sunIntensity);ke.castShadow=!0;const Es=110,el=2048,wo=220,so=2*Es/el;ke.shadow.mapSize.set(el,el);ke.shadow.camera.left=-Es;ke.shadow.camera.right=Es;ke.shadow.camera.top=Es;ke.shadow.camera.bottom=-Es;ke.shadow.camera.near=1;ke.shadow.camera.far=wo*2.4;ke.shadow.bias=-.0015;Ne.add(ke);Ne.add(ke.target);function kE(n){const t=Math.round(n.position.x/so)*so,e=Math.round(n.position.z/so)*so,i=Ko();ke.target.position.set(t,0,e),ke.position.set(t+i[0]*wo,i[1]*wo,e+i[2]*wo)}const GE=new Q(1645102),HE=new Q(789270),bs=hf();Ne.add(bs.group);const Ul=BE({scene:Ne,camera:en,domElement:Yi.domElement});Ne.traverse(n=>{const t=Array.isArray(n.material)?n.material:n.material?[n.material]:[];for(const e of t)e.isMeshStandardMaterial&&Yo(e)});window.__renderer=Yi;window.__ant=Ul.ant;window.__rooms=bs.rooms;window.__camera=en;window.__scene=Ne;window.__nodes=Nn;window.__world=bs;window.__contain=qo;window.__profileR=Oe;window.__groundY=Nt;window.__tree=Wt;window.__world6={shadeAt:Qd,canFoundAt:Rl,foundNest:af,nestOrigin:sf,getFoundedNest:of,populateNest:cf,sealNest:lf,harvestNode:rf,get nodes(){return Nn},foundedMix:$o,sunDir:Ko,waterDepthAt:_i,distanceToWater:Zn};Yi.setResizeCallback(n=>{en.aspect=n,en.updateProjectionMatrix()});const ed=new av;function Wf(){const n=Math.min(ed.getDelta(),.05),t=ed.elapsedTime;bs.update(n,t,en),Ul.update(n,t),Xf(),Yi.render(Ne,en)}const VE=52,WE=26;function nd(n,t,e){const i=1-it((e+24)/40,0,1),r=it(1-(Math.abs(n)-VE)/30,0,1),s=it(1-(t-WE)/30,0,1);return i*r*s}function XE(n,t){const e=Math.min(nd(n.x,n.y,n.z),nd(t.x,t.y,t.z)),i=Math.min(qc(n.x,n.y,n.z),qc(t.x,t.y,t.z));return Math.max(e,i)}function Xf(){const n=$o();Zh.copy(qr.sky).lerp(Yr.sky,n),Jh.copy(qr.ground).lerp(Yr.ground,n),Qh.copy(qr.fog).lerp(Yr.fog,n),td.copy(qr.bg).lerp(Yr.bg,n),ke.color.copy(qr.sun).lerp(Yr.sun,n),ke.intensity=Ht(un.sunIntensity,Dn.sunIntensity,n);const t=1-XE(en.position,Ul.ant);Ne.fog.color.copy(GE).lerp(Qh,t),Ne.fog.near=Ht(6,Ht(un.fogNear,Dn.fogNear,n),t),Ne.fog.far=Ht(135,Ht(un.fogFar,Dn.fogFar,n),t),Ne.background.copy(HE).lerp(td,t),Yi.toneMappingExposure=Ht(1.28,Ht(un.exposure,Dn.exposure,n),t),To.color.copy(Qa.sky).lerp(Zh,t),To.groundColor.copy(Qa.ground).lerp(Jh,t),To.intensity=Ht(Qa.intensity,Ht(un.hemiIntensity,Dn.hemiIntensity,n),t),DS(t),kE(en)}Yi.setAnimationLoop(Wf);window.__frame=Wf;window.__renderView=(n,t,e=0)=>{en.position.set(n[0],n[1],n[2]),en.lookAt(t[0],t[1],t[2]),en.updateMatrixWorld(),bs.update(1/60,e,en),Xf(),Yi.render(Ne,en)};
