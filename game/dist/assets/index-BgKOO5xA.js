(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qc="169",Ef=0,Il=1,bf=2,Fh=1,Oh=2,On=3,ui=0,Ne=1,ue=2,si=0,ur=1,Ha=2,Dl=3,Ul=4,Tf=5,wi=100,wf=101,Af=102,Rf=103,Cf=104,Pf=200,Lf=201,If=202,Df=203,Va=204,Wa=205,Uf=206,Nf=207,Ff=208,Of=209,Bf=210,zf=211,kf=212,Gf=213,Hf=214,Xa=0,qa=1,Ya=2,pr=3,$a=4,Ka=5,ja=6,Za=7,Bh=0,Vf=1,Wf=2,oi=0,Xf=1,qf=2,Yf=3,zh=4,$f=5,Kf=6,jf=7,kh=300,mr=301,gr=302,Ja=303,Qa=304,Ao=306,po=1e3,Pi=1001,tc=1002,Xe=1003,Zf=1004,hs=1005,vn=1006,Vo=1007,Li=1008,Vn=1009,Gh=1010,Hh=1011,qr=1012,Yc=1013,Fi=1014,Pn=1015,Kr=1016,$c=1017,Kc=1018,_r=1020,Vh=35902,Wh=1021,Xh=1022,Sn=1023,qh=1024,Yh=1025,hr=1026,xr=1027,jc=1028,Zc=1029,$h=1030,Jc=1031,Qc=1033,qs=33776,Ys=33777,$s=33778,Ks=33779,ec=35840,nc=35841,ic=35842,rc=35843,sc=36196,oc=37492,ac=37496,cc=37808,lc=37809,uc=37810,hc=37811,dc=37812,fc=37813,pc=37814,mc=37815,gc=37816,_c=37817,xc=37818,vc=37819,Mc=37820,Sc=37821,js=36492,yc=36494,Ec=36495,Kh=36283,bc=36284,Tc=36285,wc=36286,Jf=3200,jh=3201,Zh=0,Qf=1,ri="",an="srgb",di="srgb-linear",tl="display-p3",Ro="display-p3-linear",mo="linear",le="srgb",go="rec709",_o="p3",Wi=7680,Nl=519,tp=512,ep=513,np=514,Jh=515,ip=516,rp=517,sp=518,op=519,Fl=35044,Ol="300 es",zn=2e3,xo=2001;class yr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wo=Math.PI/180,Ac=180/Math.PI;function jr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[i&255]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]).toLowerCase()}function Ve(n,t,e){return Math.max(t,Math.min(e,n))}function ap(n,t){return(n%t+t)%t}function Xo(n,t,e){return(1-e)*n+e*t}function Ar(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ge(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class $t{constructor(t=0,e=0){$t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ve(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(t,e,i,r,s,o,a,c,l){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l)}set(t,e,i,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],m=i[5],g=i[8],x=r[0],p=r[3],h=r[6],E=r[1],M=r[4],y=r[7],T=r[2],A=r[5],S=r[8];return s[0]=o*x+a*E+c*T,s[3]=o*p+a*M+c*A,s[6]=o*h+a*y+c*S,s[1]=l*x+u*E+d*T,s[4]=l*p+u*M+d*A,s[7]=l*h+u*y+d*S,s[2]=f*x+m*E+g*T,s[5]=f*p+m*M+g*A,s[8]=f*h+m*y+g*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,f=a*c-u*s,m=l*s-o*c,g=e*d+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=d*x,t[1]=(r*l-u*i)*x,t[2]=(a*i-r*o)*x,t[3]=f*x,t[4]=(u*e-r*c)*x,t[5]=(r*s-a*e)*x,t[6]=m*x,t[7]=(i*c-l*e)*x,t[8]=(o*e-i*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(qo.makeScale(t,e)),this}rotate(t){return this.premultiply(qo.makeRotation(-t)),this}translate(t,e){return this.premultiply(qo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qo=new Ut;function Qh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Yr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cp(){const n=Yr("canvas");return n.style.display="block",n}const Bl={};function Zs(n){n in Bl||(Bl[n]=!0,console.warn(n))}function lp(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function up(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function hp(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const zl=new Ut().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kl=new Ut().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Rr={[di]:{transfer:mo,primaries:go,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[an]:{transfer:le,primaries:go,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ro]:{transfer:mo,primaries:_o,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(kl),fromReference:n=>n.applyMatrix3(zl)},[tl]:{transfer:le,primaries:_o,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(kl),fromReference:n=>n.applyMatrix3(zl).convertLinearToSRGB()}},dp=new Set([di,Ro]),Zt={enabled:!0,_workingColorSpace:di,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!dp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Rr[t].toReference,r=Rr[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Rr[n].primaries},getTransfer:function(n){return n===ri?mo:Rr[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Rr[t].luminanceCoefficients)}};function dr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Yo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Xi;class fp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xi===void 0&&(Xi=Yr("canvas")),Xi.width=t.width,Xi.height=t.height;const i=Xi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Xi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Yr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=dr(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(dr(e[i]/255)*255):e[i]=dr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let pp=0;class td{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=jr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push($o(r[o].image)):s.push($o(r[o]))}else s=$o(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function $o(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mp=0;class Le extends yr{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,i=Pi,r=Pi,s=vn,o=Li,a=Sn,c=Vn,l=Le.DEFAULT_ANISOTROPY,u=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=jr(),this.name="",this.source=new td(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case po:t.x=t.x-Math.floor(t.x);break;case Pi:t.x=t.x<0?0:1;break;case tc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case po:t.y=t.y-Math.floor(t.y);break;case Pi:t.y=t.y<0?0:1;break;case tc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=kh;Le.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,i=0,r=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],u=c[4],d=c[8],f=c[1],m=c[5],g=c[9],x=c[2],p=c[6],h=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,y=(m+1)/2,T=(h+1)/2,A=(u+f)/4,S=(d+x)/4,R=(g+p)/4;return M>y&&M>T?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=A/i,s=S/i):y>T?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=R/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=S/s,r=R/s),this.set(i,r,s,e),this}let E=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(d-x)/E,this.z=(f-u)/E,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gp extends yr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Le(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new td(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends gp{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class ed extends Le{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _p extends Le{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Er{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],m=s[o+1],g=s[o+2],x=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=x;return}if(d!==x||c!==f||l!==m||u!==g){let p=1-a;const h=c*f+l*m+u*g+d*x,E=h>=0?1:-1,M=1-h*h;if(M>Number.EPSILON){const T=Math.sqrt(M),A=Math.atan2(T,h*E);p=Math.sin(p*A)/T,a=Math.sin(a*A)/T}const y=a*E;if(c=c*p+f*y,l=l*p+m*y,u=u*p+g*y,d=d*p+x*y,p===1-a){const T=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=T,l*=T,u*=T,d*=T}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return t[e]=a*g+u*d+c*m-l*f,t[e+1]=c*g+u*f+l*d-a*m,t[e+2]=l*g+u*m+a*f-c*d,t[e+3]=u*g-a*d-c*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),f=c(i/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*d+l*m*g,this._y=l*m*d-f*u*g,this._z=l*u*g+f*m*d,this._w=l*u*d-f*m*g;break;case"YXZ":this._x=f*u*d+l*m*g,this._y=l*m*d-f*u*g,this._z=l*u*g-f*m*d,this._w=l*u*d+f*m*g;break;case"ZXY":this._x=f*u*d-l*m*g,this._y=l*m*d+f*u*g,this._z=l*u*g+f*m*d,this._w=l*u*d-f*m*g;break;case"ZYX":this._x=f*u*d-l*m*g,this._y=l*m*d+f*u*g,this._z=l*u*g-f*m*d,this._w=l*u*d+f*m*g;break;case"YZX":this._x=f*u*d+l*m*g,this._y=l*m*d+f*u*g,this._z=l*u*g-f*m*d,this._w=l*u*d-f*m*g;break;case"XZY":this._x=f*u*d-l*m*g,this._y=l*m*d-f*u*g,this._z=l*u*g+f*m*d,this._w=l*u*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],f=i+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ve(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,i=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*i),u=2*(a*e-s*r),d=2*(s*i-o*e);return this.x=e+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ko.copy(this).projectOnVector(t),this.sub(Ko)}reflect(t){return this.sub(Ko.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ve(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ko=new k,Gl=new Er;class Hi{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,dn):dn.fromBufferAttribute(s,o),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ds.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ds.copy(i.boundingBox)),ds.applyMatrix4(t.matrixWorld),this.union(ds)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cr),fs.subVectors(this.max,Cr),qi.subVectors(t.a,Cr),Yi.subVectors(t.b,Cr),$i.subVectors(t.c,Cr),Kn.subVectors(Yi,qi),jn.subVectors($i,Yi),gi.subVectors(qi,$i);let e=[0,-Kn.z,Kn.y,0,-jn.z,jn.y,0,-gi.z,gi.y,Kn.z,0,-Kn.x,jn.z,0,-jn.x,gi.z,0,-gi.x,-Kn.y,Kn.x,0,-jn.y,jn.x,0,-gi.y,gi.x,0];return!jo(e,qi,Yi,$i,fs)||(e=[1,0,0,0,1,0,0,0,1],!jo(e,qi,Yi,$i,fs))?!1:(ps.crossVectors(Kn,jn),e=[ps.x,ps.y,ps.z],jo(e,qi,Yi,$i,fs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const In=[new k,new k,new k,new k,new k,new k,new k,new k],dn=new k,ds=new Hi,qi=new k,Yi=new k,$i=new k,Kn=new k,jn=new k,gi=new k,Cr=new k,fs=new k,ps=new k,_i=new k;function jo(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){_i.fromArray(n,s);const a=r.x*Math.abs(_i.x)+r.y*Math.abs(_i.y)+r.z*Math.abs(_i.z),c=t.dot(_i),l=e.dot(_i),u=i.dot(_i);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const xp=new Hi,Pr=new k,Zo=new k;class br{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):xp.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Pr.subVectors(t,this.center);const e=Pr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Pr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Pr.copy(t.center).add(Zo)),this.expandByPoint(Pr.copy(t.center).sub(Zo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new k,Jo=new k,ms=new k,Zn=new k,Qo=new k,gs=new k,ta=new k;class vp{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Jo.copy(t).add(e).multiplyScalar(.5),ms.copy(e).sub(t).normalize(),Zn.copy(this.origin).sub(Jo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(ms),a=Zn.dot(this.direction),c=-Zn.dot(ms),l=Zn.lengthSq(),u=Math.abs(1-o*o);let d,f,m,g;if(u>0)if(d=o*c-a,f=o*a-c,g=s*u,d>=0)if(f>=-g)if(f<=g){const x=1/u;d*=x,f*=x,m=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Jo).addScaledVector(ms,f),m}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);const i=Dn.dot(this.direction),r=Dn.dot(Dn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,r=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,r=(t.min.x-f.x)*l),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,i,r,s){Qo.subVectors(e,t),gs.subVectors(i,t),ta.crossVectors(Qo,gs);let o=this.direction.dot(ta),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zn.subVectors(this.origin,t);const c=a*this.direction.dot(gs.crossVectors(Zn,gs));if(c<0)return null;const l=a*this.direction.dot(Qo.cross(Zn));if(l<0||c+l>o)return null;const u=-a*Zn.dot(ta);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(t,e,i,r,s,o,a,c,l,u,d,f,m,g,x,p){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l,u,d,f,m,g,x,p)}set(t,e,i,r,s,o,a,c,l,u,d,f,m,g,x,p){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=g,h[11]=x,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Ki.setFromMatrixColumn(t,0).length(),s=1/Ki.setFromMatrixColumn(t,1).length(),o=1/Ki.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const f=o*u,m=o*d,g=a*u,x=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=m+g*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,m=c*d,g=l*u,x=l*d;e[0]=f+x*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=m*a-g,e[6]=x+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,m=c*d,g=l*u,x=l*d;e[0]=f-x*a,e[4]=-o*d,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*u,e[9]=x-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,m=o*d,g=a*u,x=a*d;e[0]=c*u,e[4]=g*l-m,e[8]=f*l+x,e[1]=c*d,e[5]=x*l+f,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,m=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-f*d,e[8]=g*d+m,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=m*d+g,e[10]=f-x*d}else if(t.order==="XZY"){const f=o*c,m=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=f*d+x,e[5]=o*u,e[9]=m*d-g,e[2]=g*d-m,e[6]=a*u,e[10]=x*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mp,t,Sp)}lookAt(t,e,i){const r=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),Jn.crossVectors(i,Ze),Jn.lengthSq()===0&&(Math.abs(i.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),Jn.crossVectors(i,Ze)),Jn.normalize(),_s.crossVectors(Ze,Jn),r[0]=Jn.x,r[4]=_s.x,r[8]=Ze.x,r[1]=Jn.y,r[5]=_s.y,r[9]=Ze.y,r[2]=Jn.z,r[6]=_s.z,r[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],m=i[13],g=i[2],x=i[6],p=i[10],h=i[14],E=i[3],M=i[7],y=i[11],T=i[15],A=r[0],S=r[4],R=r[8],P=r[12],_=r[1],v=r[5],L=r[9],D=r[13],U=r[2],W=r[6],z=r[10],Y=r[14],N=r[3],X=r[7],et=r[11],st=r[15];return s[0]=o*A+a*_+c*U+l*N,s[4]=o*S+a*v+c*W+l*X,s[8]=o*R+a*L+c*z+l*et,s[12]=o*P+a*D+c*Y+l*st,s[1]=u*A+d*_+f*U+m*N,s[5]=u*S+d*v+f*W+m*X,s[9]=u*R+d*L+f*z+m*et,s[13]=u*P+d*D+f*Y+m*st,s[2]=g*A+x*_+p*U+h*N,s[6]=g*S+x*v+p*W+h*X,s[10]=g*R+x*L+p*z+h*et,s[14]=g*P+x*D+p*Y+h*st,s[3]=E*A+M*_+y*U+T*N,s[7]=E*S+M*v+y*W+T*X,s[11]=E*R+M*L+y*z+T*et,s[15]=E*P+M*D+y*Y+T*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],f=t[10],m=t[14],g=t[3],x=t[7],p=t[11],h=t[15];return g*(+s*c*d-r*l*d-s*a*f+i*l*f+r*a*m-i*c*m)+x*(+e*c*m-e*l*f+s*o*f-r*o*m+r*l*u-s*c*u)+p*(+e*l*d-e*a*m-s*o*d+i*o*m+s*a*u-i*l*u)+h*(-r*a*u-e*c*d+e*a*f+r*o*d-i*o*f+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],f=t[10],m=t[11],g=t[12],x=t[13],p=t[14],h=t[15],E=d*p*l-x*f*l+x*c*m-a*p*m-d*c*h+a*f*h,M=g*f*l-u*p*l-g*c*m+o*p*m+u*c*h-o*f*h,y=u*x*l-g*d*l+g*a*m-o*x*m-u*a*h+o*d*h,T=g*d*c-u*x*c-g*a*f+o*x*f+u*a*p-o*d*p,A=e*E+i*M+r*y+s*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/A;return t[0]=E*S,t[1]=(x*f*s-d*p*s-x*r*m+i*p*m+d*r*h-i*f*h)*S,t[2]=(a*p*s-x*c*s+x*r*l-i*p*l-a*r*h+i*c*h)*S,t[3]=(d*c*s-a*f*s-d*r*l+i*f*l+a*r*m-i*c*m)*S,t[4]=M*S,t[5]=(u*p*s-g*f*s+g*r*m-e*p*m-u*r*h+e*f*h)*S,t[6]=(g*c*s-o*p*s-g*r*l+e*p*l+o*r*h-e*c*h)*S,t[7]=(o*f*s-u*c*s+u*r*l-e*f*l-o*r*m+e*c*m)*S,t[8]=y*S,t[9]=(g*d*s-u*x*s-g*i*m+e*x*m+u*i*h-e*d*h)*S,t[10]=(o*x*s-g*a*s+g*i*l-e*x*l-o*i*h+e*a*h)*S,t[11]=(u*a*s-o*d*s-u*i*l+e*d*l+o*i*m-e*a*m)*S,t[12]=T*S,t[13]=(u*x*r-g*d*r+g*i*f-e*x*f-u*i*p+e*d*p)*S,t[14]=(g*a*r-o*x*r-g*i*c+e*x*c+o*i*p-e*a*p)*S,t[15]=(o*d*r-u*a*r+u*i*c-e*d*c-o*i*f+e*a*f)*S,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,d=a+a,f=s*l,m=s*u,g=s*d,x=o*u,p=o*d,h=a*d,E=c*l,M=c*u,y=c*d,T=i.x,A=i.y,S=i.z;return r[0]=(1-(x+h))*T,r[1]=(m+y)*T,r[2]=(g-M)*T,r[3]=0,r[4]=(m-y)*A,r[5]=(1-(f+h))*A,r[6]=(p+E)*A,r[7]=0,r[8]=(g+M)*S,r[9]=(p-E)*S,r[10]=(1-(f+x))*S,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Ki.set(r[0],r[1],r[2]).length();const o=Ki.set(r[4],r[5],r[6]).length(),a=Ki.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],fn.copy(this);const l=1/s,u=1/o,d=1/a;return fn.elements[0]*=l,fn.elements[1]*=l,fn.elements[2]*=l,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=d,fn.elements[9]*=d,fn.elements[10]*=d,e.setFromRotationMatrix(fn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=zn){const c=this.elements,l=2*s/(e-t),u=2*s/(i-r),d=(e+t)/(e-t),f=(i+r)/(i-r);let m,g;if(a===zn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===xo)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=zn){const c=this.elements,l=1/(e-t),u=1/(i-r),d=1/(o-s),f=(e+t)*l,m=(i+r)*u;let g,x;if(a===zn)g=(o+s)*d,x=-2*d;else if(a===xo)g=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ki=new k,fn=new Qt,Mp=new k(0,0,0),Sp=new k(1,1,1),Jn=new k,_s=new k,Ze=new k,Hl=new Qt,Vl=new Er;class En{constructor(t=0,e=0,i=0,r=En.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Hl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vl.setFromEuler(this),this.setFromQuaternion(Vl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class nd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let yp=0;const Wl=new k,ji=new Er,Un=new Qt,xs=new k,Lr=new k,Ep=new k,bp=new Er,Xl=new k(1,0,0),ql=new k(0,1,0),Yl=new k(0,0,1),$l={type:"added"},Tp={type:"removed"},Zi={type:"childadded",child:null},ea={type:"childremoved",child:null};class Te extends yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new k,e=new En,i=new Er,r=new k(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Ut}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(Xl,t)}rotateY(t){return this.rotateOnAxis(ql,t)}rotateZ(t){return this.rotateOnAxis(Yl,t)}translateOnAxis(t,e){return Wl.copy(t).applyQuaternion(this.quaternion),this.position.add(Wl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xl,t)}translateY(t){return this.translateOnAxis(ql,t)}translateZ(t){return this.translateOnAxis(Yl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?xs.copy(t):xs.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Lr,xs,this.up):Un.lookAt(xs,Lr,this.up),this.quaternion.setFromRotationMatrix(Un),r&&(Un.extractRotation(r.matrixWorld),ji.setFromRotationMatrix(Un),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($l),Zi.child=t,this.dispatchEvent(Zi),Zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tp),ea.child=t,this.dispatchEvent(ea),ea.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($l),Zi.child=t,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,t,Ep),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,bp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Te.DEFAULT_UP=new k(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new k,Nn=new k,na=new k,Fn=new k,Ji=new k,Qi=new k,Kl=new k,ia=new k,ra=new k,sa=new k,oa=new he,aa=new he,ca=new he;class Mn{constructor(t=new k,e=new k,i=new k){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),pn.subVectors(t,e),r.cross(pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){pn.subVectors(r,e),Nn.subVectors(i,e),na.subVectors(t,e);const o=pn.dot(pn),a=pn.dot(Nn),c=pn.dot(na),l=Nn.dot(Nn),u=Nn.dot(na),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-m-g,g,m)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,i,r,s,o,a,c){return this.getBarycoord(t,e,i,r,Fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Fn.x),c.addScaledVector(o,Fn.y),c.addScaledVector(a,Fn.z),c)}static getInterpolatedAttribute(t,e,i,r,s,o){return oa.setScalar(0),aa.setScalar(0),ca.setScalar(0),oa.fromBufferAttribute(t,e),aa.fromBufferAttribute(t,i),ca.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(oa,s.x),o.addScaledVector(aa,s.y),o.addScaledVector(ca,s.z),o}static isFrontFacing(t,e,i,r){return pn.subVectors(i,e),Nn.subVectors(t,e),pn.cross(Nn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),pn.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Mn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;Ji.subVectors(r,i),Qi.subVectors(s,i),ia.subVectors(t,i);const c=Ji.dot(ia),l=Qi.dot(ia);if(c<=0&&l<=0)return e.copy(i);ra.subVectors(t,r);const u=Ji.dot(ra),d=Qi.dot(ra);if(u>=0&&d<=u)return e.copy(r);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(Ji,o);sa.subVectors(t,s);const m=Ji.dot(sa),g=Qi.dot(sa);if(g>=0&&m<=g)return e.copy(s);const x=m*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(Qi,a);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return Kl.subVectors(s,r),a=(d-u)/(d-u+(m-g)),e.copy(r).addScaledVector(Kl,a);const h=1/(p+x+f);return o=x*h,a=f*h,e.copy(i).addScaledVector(Ji,o).addScaledVector(Qi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},vs={h:0,s:0,l:0};function la(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class J{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=an){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Zt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Zt.workingColorSpace){if(t=ap(t,1),e=Ve(e,0,1),i=Ve(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=la(o,s,t+1/3),this.g=la(o,s,t),this.b=la(o,s,t-1/3)}return Zt.toWorkingColorSpace(this,r),this}setStyle(t,e=an){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=an){const i=id[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=dr(t.r),this.g=dr(t.g),this.b=dr(t.b),this}copyLinearToSRGB(t){return this.r=Yo(t.r),this.g=Yo(t.g),this.b=Yo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=an){return Zt.fromWorkingColorSpace(Re.copy(this),t),Math.round(Ve(Re.r*255,0,255))*65536+Math.round(Ve(Re.g*255,0,255))*256+Math.round(Ve(Re.b*255,0,255))}getHexString(t=an){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Re.copy(this),e);const i=Re.r,r=Re.g,s=Re.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=an){Zt.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,i=Re.g,r=Re.b;return t!==an?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(vs);const i=Xo(Qn.h,vs.h,e),r=Xo(Qn.s,vs.s,e),s=Xo(Qn.l,vs.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new J;J.NAMES=id;let wp=0;class Zr extends yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=jr(),this.name="",this.type="Material",this.blending=ur,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Va,this.blendDst=Wa,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new J(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ur&&(i.blending=this.blending),this.side!==ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Va&&(i.blendSrc=this.blendSrc),this.blendDst!==Wa&&(i.blendDst=this.blendDst),this.blendEquation!==wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==pr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Co extends Zr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new J(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new k,Ms=new $t;class yn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Fl,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ms.fromBufferAttribute(this,e),Ms.applyMatrix3(t),this.setXY(e,Ms.x,Ms.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ar(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ge(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ar(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ar(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ar(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ar(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),r=Ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),r=Ge(r,this.array),s=Ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fl&&(t.usage=this.usage),t}}class rd extends yn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class sd extends yn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class xe extends yn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Ap=0;const on=new Qt,ua=new Te,tr=new k,Je=new Hi,Ir=new Hi,Se=new k;class un extends yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=jr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qh(t)?sd:rd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ut().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,i){return on.makeTranslation(t,e,i),this.applyMatrix4(on),this}scale(t,e,i){return on.makeScale(t,e,i),this.applyMatrix4(on),this}lookAt(t){return ua.lookAt(t),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new xe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Je.setFromBufferAttribute(s),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const i=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Ir.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(Je.min,Ir.min),Je.expandByPoint(Se),Se.addVectors(Je.max,Ir.max),Je.expandByPoint(Se)):(Je.expandByPoint(Ir.min),Je.expandByPoint(Ir.max))}Je.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Se.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Se));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Se.fromBufferAttribute(a,l),c&&(tr.fromBufferAttribute(t,l),Se.add(tr)),r=Math.max(r,i.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<i.count;R++)a[R]=new k,c[R]=new k;const l=new k,u=new k,d=new k,f=new $t,m=new $t,g=new $t,x=new k,p=new k;function h(R,P,_){l.fromBufferAttribute(i,R),u.fromBufferAttribute(i,P),d.fromBufferAttribute(i,_),f.fromBufferAttribute(s,R),m.fromBufferAttribute(s,P),g.fromBufferAttribute(s,_),u.sub(l),d.sub(l),m.sub(f),g.sub(f);const v=1/(m.x*g.y-g.x*m.y);isFinite(v)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(v),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(v),a[R].add(x),a[P].add(x),a[_].add(x),c[R].add(p),c[P].add(p),c[_].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let R=0,P=E.length;R<P;++R){const _=E[R],v=_.start,L=_.count;for(let D=v,U=v+L;D<U;D+=3)h(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const M=new k,y=new k,T=new k,A=new k;function S(R){T.fromBufferAttribute(r,R),A.copy(T);const P=a[R];M.copy(P),M.sub(T.multiplyScalar(T.dot(P))).normalize(),y.crossVectors(A,P);const v=y.dot(c[R])<0?-1:1;o.setXYZW(R,M.x,M.y,M.z,v)}for(let R=0,P=E.length;R<P;++R){const _=E[R],v=_.start,L=_.count;for(let D=v,U=v+L;D<U;D+=3)S(t.getX(D+0)),S(t.getX(D+1)),S(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new k,s=new k,o=new k,a=new k,c=new k,l=new k,u=new k,d=new k;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),x=t.getX(f+1),p=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u);let m=0,g=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?m=c[x]*a.data.stride+a.offset:m=c[x]*u;for(let h=0;h<u;h++)f[g++]=l[m++]}return new yn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new un,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){const f=l[u],m=t(f,i);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];u.push(m.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],d=s[l];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jl=new Qt,xi=new vp,Ss=new br,Zl=new k,ys=new k,Es=new k,bs=new k,ha=new k,Ts=new k,Jl=new k,ws=new k;class zt extends Te{constructor(t=new un,e=new Co){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Ts.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],d=s[c];u!==0&&(ha.fromBufferAttribute(d,t),o?Ts.addScaledVector(ha,u):Ts.addScaledVector(ha.sub(e),u))}e.add(Ts)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ss.copy(i.boundingSphere),Ss.applyMatrix4(s),xi.copy(t.ray).recast(t.near),!(Ss.containsPoint(xi.origin)===!1&&(xi.intersectSphere(Ss,Zl)===null||xi.origin.distanceToSquared(Zl)>(t.far-t.near)**2))&&(jl.copy(s).invert(),xi.copy(t.ray).applyMatrix4(jl),!(i.boundingBox!==null&&xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,xi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const p=f[g],h=o[p.materialIndex],E=Math.max(p.start,m.start),M=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let y=E,T=M;y<T;y+=3){const A=a.getX(y),S=a.getX(y+1),R=a.getX(y+2);r=As(this,h,t,i,l,u,d,A,S,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=g,h=x;p<h;p+=3){const E=a.getX(p),M=a.getX(p+1),y=a.getX(p+2);r=As(this,o,t,i,l,u,d,E,M,y),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const p=f[g],h=o[p.materialIndex],E=Math.max(p.start,m.start),M=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let y=E,T=M;y<T;y+=3){const A=y,S=y+1,R=y+2;r=As(this,h,t,i,l,u,d,A,S,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let p=g,h=x;p<h;p+=3){const E=p,M=p+1,y=p+2;r=As(this,o,t,i,l,u,d,E,M,y),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function Rp(n,t,e,i,r,s,o,a){let c;if(t.side===Ne?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===ui,a),c===null)return null;ws.copy(a),ws.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ws);return l<e.near||l>e.far?null:{distance:l,point:ws.clone(),object:n}}function As(n,t,e,i,r,s,o,a,c,l){n.getVertexPosition(a,ys),n.getVertexPosition(c,Es),n.getVertexPosition(l,bs);const u=Rp(n,t,e,i,ys,Es,bs,Jl);if(u){const d=new k;Mn.getBarycoord(Jl,ys,Es,bs,d),r&&(u.uv=Mn.getInterpolatedAttribute(r,a,c,l,d,new $t)),s&&(u.uv1=Mn.getInterpolatedAttribute(s,a,c,l,d,new $t)),o&&(u.normal=Mn.getInterpolatedAttribute(o,a,c,l,d,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new k,materialIndex:0};Mn.getNormal(ys,Es,bs,f.normal),u.face=f,u.barycoord=d}return u}class Jr extends un{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(u,3)),this.setAttribute("uv",new xe(d,2));function g(x,p,h,E,M,y,T,A,S,R,P){const _=y/S,v=T/R,L=y/2,D=T/2,U=A/2,W=S+1,z=R+1;let Y=0,N=0;const X=new k;for(let et=0;et<z;et++){const st=et*v-D;for(let yt=0;yt<W;yt++){const Nt=yt*_-L;X[x]=Nt*E,X[p]=st*M,X[h]=U,l.push(X.x,X.y,X.z),X[x]=0,X[p]=0,X[h]=A>0?1:-1,u.push(X.x,X.y,X.z),d.push(yt/S),d.push(1-et/R),Y+=1}}for(let et=0;et<R;et++)for(let st=0;st<S;st++){const yt=f+st+W*et,Nt=f+st+W*(et+1),$=f+(st+1)+W*(et+1),Q=f+(st+1)+W*et;c.push(yt,Nt,Q),c.push(Nt,$,Q),N+=6}a.addGroup(m,N,P),m+=N,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function vr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ue(n){const t={};for(let e=0;e<n.length;e++){const i=vr(n[e]);for(const r in i)t[r]=i[r]}return t}function Cp(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function od(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const Pp={clone:vr,merge:Ue};var Lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends Zr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lp,this.fragmentShader=Ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vr(t.uniforms),this.uniformsGroups=Cp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class ad extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new k,Ql=new $t,tu=new $t;class cn extends ad{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ac*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ac*2*Math.atan(Math.tan(Wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ti.x,ti.y).multiplyScalar(-t/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ti.x,ti.y).multiplyScalar(-t/ti.z)}getViewSize(t,e){return this.getViewBounds(t,Ql,tu),e.subVectors(tu,Ql)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Wo*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const er=-90,nr=1;class Dp extends Te{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new cn(er,nr,t,e);r.layers=this.layers,this.add(r);const s=new cn(er,nr,t,e);s.layers=this.layers,this.add(s);const o=new cn(er,nr,t,e);o.layers=this.layers,this.add(o);const a=new cn(er,nr,t,e);a.layers=this.layers,this.add(a);const c=new cn(er,nr,t,e);c.layers=this.layers,this.add(c);const l=new cn(er,nr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===zn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===xo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(d,f,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class cd extends Le{constructor(t,e,i,r,s,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:mr,super(t,e,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Up extends Oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new cd(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:vn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Jr(5,5,5),s=new Wn({name:"CubemapFromEquirect",uniforms:vr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ne,blending:si});s.uniforms.tEquirect.value=e;const o=new zt(r,s),a=e.minFilter;return e.minFilter===Li&&(e.minFilter=vn),new Dp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const da=new k,Np=new k,Fp=new Ut;class yi{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=da.subVectors(i,e).cross(Np.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(da),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Fp.getNormalMatrix(t),r=this.coplanarPoint(da).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new br,Rs=new k;class el{constructor(t=new yi,e=new yi,i=new yi,r=new yi,s=new yi,o=new yi){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=zn){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],f=r[7],m=r[8],g=r[9],x=r[10],p=r[11],h=r[12],E=r[13],M=r[14],y=r[15];if(i[0].setComponents(c-s,f-l,p-m,y-h).normalize(),i[1].setComponents(c+s,f+l,p+m,y+h).normalize(),i[2].setComponents(c+o,f+u,p+g,y+E).normalize(),i[3].setComponents(c-o,f-u,p-g,y-E).normalize(),i[4].setComponents(c-a,f-d,p-x,y-M).normalize(),e===zn)i[5].setComponents(c+a,f+d,p+x,y+M).normalize();else if(e===xo)i[5].setComponents(a,d,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Rs.x=r.normal.x>0?t.max.x:t.min.x,Rs.y=r.normal.y>0?t.max.y:t.min.y,Rs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ld(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Op(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){const g=d[f],x=d[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){const x=d[m];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class Qr extends un{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=t/a,f=e/c,m=[],g=[],x=[],p=[];for(let h=0;h<u;h++){const E=h*f-o;for(let M=0;M<l;M++){const y=M*d-s;g.push(y,-E,0),x.push(0,0,1),p.push(M/a),p.push(1-h/c)}}for(let h=0;h<c;h++)for(let E=0;E<a;E++){const M=E+l*h,y=E+l*(h+1),T=E+1+l*(h+1),A=E+1+l*h;m.push(M,y,A),m.push(y,T,A)}this.setIndex(m),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(x,3)),this.setAttribute("uv",new xe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Bp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zp=`#ifdef USE_ALPHAHASH
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
#endif`,kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wp=`#ifdef USE_AOMAP
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
#endif`,Xp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qp=`#ifdef USE_BATCHING
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
#endif`,Yp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$p=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zp=`#ifdef USE_IRIDESCENCE
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
#endif`,Jp=`#ifdef USE_BUMPMAP
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
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,im=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
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
#endif`,am=`#define PI 3.141592653589793
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
} // validated`,cm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lm=`vec3 transformedNormal = objectNormal;
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
#endif`,um=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pm="gl_FragColor = linearToOutputTexel( gl_FragColor );",mm=`
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
}`,gm=`#ifdef USE_ENVMAP
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
#endif`,_m=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xm=`#ifdef USE_ENVMAP
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
#endif`,vm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ym=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Em=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tm=`#ifdef USE_GRADIENTMAP
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
}`,wm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Am=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cm=`uniform bool receiveShadow;
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
#endif`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Lm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nm=`PhysicalMaterial material;
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
#endif`,Fm=`struct PhysicalMaterial {
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
}`,Om=`
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
#endif`,Bm=`#if defined( RE_IndirectDiffuse )
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
#endif`,zm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,km=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ym=`#if defined( USE_POINTS_UV )
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
#endif`,$m=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Km=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qm=`#ifdef USE_MORPHTARGETS
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
#endif`,t0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,n0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,i0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,o0=`#ifdef USE_NORMALMAP
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
#endif`,a0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,h0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,f0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,y0=`float getShadowMask() {
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
}`,E0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,b0=`#ifdef USE_SKINNING
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
#endif`,T0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w0=`#ifdef USE_SKINNING
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
#endif`,A0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,L0=`#ifdef USE_TRANSMISSION
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
#endif`,I0=`#ifdef USE_TRANSMISSION
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
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const O0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B0=`uniform sampler2D t2D;
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
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V0=`#include <common>
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
}`,W0=`#if DEPTH_PACKING == 3200
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
}`,X0=`#define DISTANCE
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
}`,q0=`#define DISTANCE
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`uniform float scale;
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
}`,j0=`uniform vec3 diffuse;
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
}`,Z0=`#include <common>
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
}`,J0=`uniform vec3 diffuse;
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
}`,Q0=`#define LAMBERT
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
}`,tg=`#define LAMBERT
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
}`,eg=`#define MATCAP
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
}`,ng=`#define MATCAP
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
}`,ig=`#define NORMAL
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
}`,rg=`#define NORMAL
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
}`,sg=`#define PHONG
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
}`,og=`#define PHONG
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
}`,ag=`#define STANDARD
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
}`,cg=`#define STANDARD
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
}`,lg=`#define TOON
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
}`,ug=`#define TOON
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
}`,hg=`uniform float size;
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
}`,dg=`uniform vec3 diffuse;
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
}`,fg=`#include <common>
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
}`,pg=`uniform vec3 color;
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
}`,mg=`uniform float rotation;
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
}`,gg=`uniform vec3 diffuse;
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
}`,Dt={alphahash_fragment:Bp,alphahash_pars_fragment:zp,alphamap_fragment:kp,alphamap_pars_fragment:Gp,alphatest_fragment:Hp,alphatest_pars_fragment:Vp,aomap_fragment:Wp,aomap_pars_fragment:Xp,batching_pars_vertex:qp,batching_vertex:Yp,begin_vertex:$p,beginnormal_vertex:Kp,bsdfs:jp,iridescence_fragment:Zp,bumpmap_pars_fragment:Jp,clipping_planes_fragment:Qp,clipping_planes_pars_fragment:tm,clipping_planes_pars_vertex:em,clipping_planes_vertex:nm,color_fragment:im,color_pars_fragment:rm,color_pars_vertex:sm,color_vertex:om,common:am,cube_uv_reflection_fragment:cm,defaultnormal_vertex:lm,displacementmap_pars_vertex:um,displacementmap_vertex:hm,emissivemap_fragment:dm,emissivemap_pars_fragment:fm,colorspace_fragment:pm,colorspace_pars_fragment:mm,envmap_fragment:gm,envmap_common_pars_fragment:_m,envmap_pars_fragment:xm,envmap_pars_vertex:vm,envmap_physical_pars_fragment:Pm,envmap_vertex:Mm,fog_vertex:Sm,fog_pars_vertex:ym,fog_fragment:Em,fog_pars_fragment:bm,gradientmap_pars_fragment:Tm,lightmap_pars_fragment:wm,lights_lambert_fragment:Am,lights_lambert_pars_fragment:Rm,lights_pars_begin:Cm,lights_toon_fragment:Lm,lights_toon_pars_fragment:Im,lights_phong_fragment:Dm,lights_phong_pars_fragment:Um,lights_physical_fragment:Nm,lights_physical_pars_fragment:Fm,lights_fragment_begin:Om,lights_fragment_maps:Bm,lights_fragment_end:zm,logdepthbuf_fragment:km,logdepthbuf_pars_fragment:Gm,logdepthbuf_pars_vertex:Hm,logdepthbuf_vertex:Vm,map_fragment:Wm,map_pars_fragment:Xm,map_particle_fragment:qm,map_particle_pars_fragment:Ym,metalnessmap_fragment:$m,metalnessmap_pars_fragment:Km,morphinstance_vertex:jm,morphcolor_vertex:Zm,morphnormal_vertex:Jm,morphtarget_pars_vertex:Qm,morphtarget_vertex:t0,normal_fragment_begin:e0,normal_fragment_maps:n0,normal_pars_fragment:i0,normal_pars_vertex:r0,normal_vertex:s0,normalmap_pars_fragment:o0,clearcoat_normal_fragment_begin:a0,clearcoat_normal_fragment_maps:c0,clearcoat_pars_fragment:l0,iridescence_pars_fragment:u0,opaque_fragment:h0,packing:d0,premultiplied_alpha_fragment:f0,project_vertex:p0,dithering_fragment:m0,dithering_pars_fragment:g0,roughnessmap_fragment:_0,roughnessmap_pars_fragment:x0,shadowmap_pars_fragment:v0,shadowmap_pars_vertex:M0,shadowmap_vertex:S0,shadowmask_pars_fragment:y0,skinbase_vertex:E0,skinning_pars_vertex:b0,skinning_vertex:T0,skinnormal_vertex:w0,specularmap_fragment:A0,specularmap_pars_fragment:R0,tonemapping_fragment:C0,tonemapping_pars_fragment:P0,transmission_fragment:L0,transmission_pars_fragment:I0,uv_pars_fragment:D0,uv_pars_vertex:U0,uv_vertex:N0,worldpos_vertex:F0,background_vert:O0,background_frag:B0,backgroundCube_vert:z0,backgroundCube_frag:k0,cube_vert:G0,cube_frag:H0,depth_vert:V0,depth_frag:W0,distanceRGBA_vert:X0,distanceRGBA_frag:q0,equirect_vert:Y0,equirect_frag:$0,linedashed_vert:K0,linedashed_frag:j0,meshbasic_vert:Z0,meshbasic_frag:J0,meshlambert_vert:Q0,meshlambert_frag:tg,meshmatcap_vert:eg,meshmatcap_frag:ng,meshnormal_vert:ig,meshnormal_frag:rg,meshphong_vert:sg,meshphong_frag:og,meshphysical_vert:ag,meshphysical_frag:cg,meshtoon_vert:lg,meshtoon_frag:ug,points_vert:hg,points_frag:dg,shadow_vert:fg,shadow_frag:pg,sprite_vert:mg,sprite_frag:gg},ot={common:{diffuse:{value:new J(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new J(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new J(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new J(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},wn={basic:{uniforms:Ue([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:Ue([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new J(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:Ue([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new J(0)},specular:{value:new J(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:Ue([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new J(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:Ue([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new J(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:Ue([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:Ue([ot.points,ot.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:Ue([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:Ue([ot.common,ot.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:Ue([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:Ue([ot.sprite,ot.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:Ue([ot.common,ot.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:Ue([ot.lights,ot.fog,{color:{value:new J(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};wn.physical={uniforms:Ue([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new J(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new J(0)},specularColor:{value:new J(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const Cs={r:0,b:0,g:0},Mi=new En,_g=new Qt;function xg(n,t,e,i,r,s,o){const a=new J(0);let c=s===!0?0:1,l,u,d=null,f=0,m=null;function g(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?e:t).get(M)),M}function x(E){let M=!1;const y=g(E);y===null?h(a,c):y&&y.isColor&&(h(y,1),M=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(E,M){const y=g(M);y&&(y.isCubeTexture||y.mapping===Ao)?(u===void 0&&(u=new zt(new Jr(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:vr(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,A,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Mi.copy(M.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(_g.makeRotationFromEuler(Mi)),u.material.toneMapped=Zt.getTransfer(y.colorSpace)!==le,(d!==y||f!==y.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,m=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new zt(new Qr(2,2),new Wn({name:"BackgroundMaterial",uniforms:vr(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(y.colorSpace)!==le,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,d=y,f=y.version,m=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function h(E,M){E.getRGB(Cs,od(n)),i.buffers.color.setClear(Cs.r,Cs.g,Cs.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(E,M=1){a.set(E),c=M,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,h(a,c)},render:x,addToRenderList:p}}function vg(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(_,v,L,D,U){let W=!1;const z=d(D,L,v);s!==z&&(s=z,l(s.object)),W=m(_,D,L,U),W&&g(_,D,L,U),U!==null&&t.update(U,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,y(_,v,L,D),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return n.createVertexArray()}function l(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function d(_,v,L){const D=L.wireframe===!0;let U=i[_.id];U===void 0&&(U={},i[_.id]=U);let W=U[v.id];W===void 0&&(W={},U[v.id]=W);let z=W[D];return z===void 0&&(z=f(c()),W[D]=z),z}function f(_){const v=[],L=[],D=[];for(let U=0;U<e;U++)v[U]=0,L[U]=0,D[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:L,attributeDivisors:D,object:_,attributes:{},index:null}}function m(_,v,L,D){const U=s.attributes,W=v.attributes;let z=0;const Y=L.getAttributes();for(const N in Y)if(Y[N].location>=0){const et=U[N];let st=W[N];if(st===void 0&&(N==="instanceMatrix"&&_.instanceMatrix&&(st=_.instanceMatrix),N==="instanceColor"&&_.instanceColor&&(st=_.instanceColor)),et===void 0||et.attribute!==st||st&&et.data!==st.data)return!0;z++}return s.attributesNum!==z||s.index!==D}function g(_,v,L,D){const U={},W=v.attributes;let z=0;const Y=L.getAttributes();for(const N in Y)if(Y[N].location>=0){let et=W[N];et===void 0&&(N==="instanceMatrix"&&_.instanceMatrix&&(et=_.instanceMatrix),N==="instanceColor"&&_.instanceColor&&(et=_.instanceColor));const st={};st.attribute=et,et&&et.data&&(st.data=et.data),U[N]=st,z++}s.attributes=U,s.attributesNum=z,s.index=D}function x(){const _=s.newAttributes;for(let v=0,L=_.length;v<L;v++)_[v]=0}function p(_){h(_,0)}function h(_,v){const L=s.newAttributes,D=s.enabledAttributes,U=s.attributeDivisors;L[_]=1,D[_]===0&&(n.enableVertexAttribArray(_),D[_]=1),U[_]!==v&&(n.vertexAttribDivisor(_,v),U[_]=v)}function E(){const _=s.newAttributes,v=s.enabledAttributes;for(let L=0,D=v.length;L<D;L++)v[L]!==_[L]&&(n.disableVertexAttribArray(L),v[L]=0)}function M(_,v,L,D,U,W,z){z===!0?n.vertexAttribIPointer(_,v,L,U,W):n.vertexAttribPointer(_,v,L,D,U,W)}function y(_,v,L,D){x();const U=D.attributes,W=L.getAttributes(),z=v.defaultAttributeValues;for(const Y in W){const N=W[Y];if(N.location>=0){let X=U[Y];if(X===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(X=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(X=_.instanceColor)),X!==void 0){const et=X.normalized,st=X.itemSize,yt=t.get(X);if(yt===void 0)continue;const Nt=yt.buffer,$=yt.type,Q=yt.bytesPerElement,ht=$===n.INT||$===n.UNSIGNED_INT||X.gpuType===Yc;if(X.isInterleavedBufferAttribute){const ct=X.data,bt=ct.stride,Et=X.offset;if(ct.isInstancedInterleavedBuffer){for(let Ot=0;Ot<N.locationSize;Ot++)h(N.location+Ot,ct.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Ot=0;Ot<N.locationSize;Ot++)p(N.location+Ot);n.bindBuffer(n.ARRAY_BUFFER,Nt);for(let Ot=0;Ot<N.locationSize;Ot++)M(N.location+Ot,st/N.locationSize,$,et,bt*Q,(Et+st/N.locationSize*Ot)*Q,ht)}else{if(X.isInstancedBufferAttribute){for(let ct=0;ct<N.locationSize;ct++)h(N.location+ct,X.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ct=0;ct<N.locationSize;ct++)p(N.location+ct);n.bindBuffer(n.ARRAY_BUFFER,Nt);for(let ct=0;ct<N.locationSize;ct++)M(N.location+ct,st/N.locationSize,$,et,st*Q,st/N.locationSize*ct*Q,ht)}}else if(z!==void 0){const et=z[Y];if(et!==void 0)switch(et.length){case 2:n.vertexAttrib2fv(N.location,et);break;case 3:n.vertexAttrib3fv(N.location,et);break;case 4:n.vertexAttrib4fv(N.location,et);break;default:n.vertexAttrib1fv(N.location,et)}}}}E()}function T(){R();for(const _ in i){const v=i[_];for(const L in v){const D=v[L];for(const U in D)u(D[U].object),delete D[U];delete v[L]}delete i[_]}}function A(_){if(i[_.id]===void 0)return;const v=i[_.id];for(const L in v){const D=v[L];for(const U in D)u(D[U].object),delete D[U];delete v[L]}delete i[_.id]}function S(_){for(const v in i){const L=i[v];if(L[_.id]===void 0)continue;const D=L[_.id];for(const U in D)u(D[U].object),delete D[U];delete L[_.id]}}function R(){P(),o=!0,s!==r&&(s=r,l(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:S,initAttributes:x,enableAttribute:p,disableUnusedAttributes:E}}function Mg(n,t,e){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),e.update(u,i,d))}function a(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];e.update(m,i,1)}function c(l,u,d,f){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];for(let x=0;x<f.length;x++)e.update(g,i,f[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Sg(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(S){return!(S!==Sn&&i.convert(S)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const R=S===Kr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==Vn&&i.convert(S)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Pn&&!R)}function c(S){if(S==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const S=t.get("EXT_clip_control");S.clipControlEXT(S.LOWER_LEFT_EXT,S.ZERO_TO_ONE_EXT)}const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:T,maxSamples:A}}function yg(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new yi,a=new Ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,h=n.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{const E=s?0:i,M=E*4;let y=h.clippingState||null;c.value=y,y=u(g,f,M,m);for(let T=0;T!==M;++T)y[T]=e[T];h.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,f,m,g){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=c.value,g!==!0||p===null){const h=m+x*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<h)&&(p=new Float32Array(h));for(let M=0,y=m;M!==x;++M,y+=4)o.copy(d[M]).applyMatrix4(E,a),o.normal.toArray(p,y),p[y+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function Eg(n){let t=new WeakMap;function e(o,a){return a===Ja?o.mapping=mr:a===Qa&&(o.mapping=gr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ja||a===Qa)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Up(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class ud extends ad{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ar=4,eu=[.125,.215,.35,.446,.526,.582],Ai=20,fa=new ud,nu=new J;let pa=null,ma=0,ga=0,_a=!1;const Ei=(1+Math.sqrt(5))/2,ir=1/Ei,iu=[new k(-Ei,ir,0),new k(Ei,ir,0),new k(-ir,0,Ei),new k(ir,0,Ei),new k(0,Ei,-ir),new k(0,Ei,ir),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class ru{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pa,ma,ga),this._renderer.xr.enabled=_a,t.scissorTest=!1,Ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===mr||t.mapping===gr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Kr,format:Sn,colorSpace:di,depthBuffer:!1},r=su(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=su(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bg(s)),this._blurMaterial=Tg(s,t,e)}return r}_compileMaterial(t){const e=new zt(this._lodPlanes[0],t);this._renderer.compile(e,fa)}_sceneToCubeUV(t,e,i,r){const a=new cn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(nu),u.toneMapping=oi,u.autoClear=!1;const m=new Co({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),g=new zt(new Jr,m);let x=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,x=!0):(m.color.copy(nu),x=!0);for(let h=0;h<6;h++){const E=h%3;E===0?(a.up.set(0,c[h],0),a.lookAt(l[h],0,0)):E===1?(a.up.set(0,0,c[h]),a.lookAt(0,l[h],0)):(a.up.set(0,c[h],0),a.lookAt(0,0,l[h]));const M=this._cubeSize;Ps(r,E*M,h>2?M:0,M,M),u.setRenderTarget(r),x&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===mr||t.mapping===gr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=au()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ou());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new zt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Ps(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,fa)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=iu[(r-s-1)%iu.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new zt(this._lodPlanes[r],l),f=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ai-1),x=s/g,p=isFinite(s)?1+Math.floor(u*x):Ai;p>Ai&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ai}`);const h=[];let E=0;for(let S=0;S<Ai;++S){const R=S/x,P=Math.exp(-R*R/2);h.push(P),S===0?E+=P:S<p&&(E+=2*P)}for(let S=0;S<h.length;S++)h[S]=h[S]/E;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-i;const y=this._sizeLods[r],T=3*y*(r>M-ar?r-M+ar:0),A=4*(this._cubeSize-y);Ps(e,T,A,3*y,2*y),c.setRenderTarget(e),c.render(d,fa)}}function bg(n){const t=[],e=[],i=[];let r=n;const s=n-ar+1+eu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>n-ar?c=eu[o-n+ar-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,x=3,p=2,h=1,E=new Float32Array(x*g*m),M=new Float32Array(p*g*m),y=new Float32Array(h*g*m);for(let A=0;A<m;A++){const S=A%3*2/3-1,R=A>2?0:-1,P=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];E.set(P,x*g*A),M.set(f,p*g*A);const _=[A,A,A,A,A,A];y.set(_,h*g*A)}const T=new un;T.setAttribute("position",new yn(E,x)),T.setAttribute("uv",new yn(M,p)),T.setAttribute("faceIndex",new yn(y,h)),t.push(T),r>ar&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function su(n,t,e){const i=new Oi(n,t,e);return i.texture.mapping=Ao,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ps(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Tg(n,t,e){const i=new Float32Array(Ai),r=new k(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:nl(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function ou(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nl(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function au(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function nl(){return`

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
	`}function wg(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ja||c===Qa,u=c===mr||c===gr;if(l||u){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new ru(n)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return l&&m&&m.height>0||u&&m&&r(m)?(e===null&&(e=new ru(n)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Ag(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Zs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Rg(n,t,e,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let p=0,h=x.length;p<h;p++)t.remove(x[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(t.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function c(d){const f=d.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const x=m[g];for(let p=0,h=x.length;p<h;p++)t.update(x[p],n.ARRAY_BUFFER)}}function l(d){const f=[],m=d.index,g=d.attributes.position;let x=0;if(m!==null){const E=m.array;x=m.version;for(let M=0,y=E.length;M<y;M+=3){const T=E[M+0],A=E[M+1],S=E[M+2];f.push(T,A,A,S,S,T)}}else if(g!==void 0){const E=g.array;x=g.version;for(let M=0,y=E.length/3-1;M<y;M+=3){const T=M+0,A=M+1,S=M+2;f.push(T,A,A,S,S,T)}}else return;const p=new(Qh(f)?sd:rd)(f,1);p.version=x;const h=s.get(d);h&&t.remove(h),s.set(d,p)}function u(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Cg(n,t,e){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,m){n.drawElements(i,m,s,f*o),e.update(m,i,1)}function l(f,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,f*o,g),e.update(m,i,g))}function u(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,g);let p=0;for(let h=0;h<g;h++)p+=m[h];e.update(p,i,1)}function d(f,m,g,x){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<f.length;h++)l(f[h]/o,m[h],x[h]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,x,0,g);let h=0;for(let E=0;E<g;E++)h+=m[E];for(let E=0;E<x.length;E++)e.update(h,i,x[E])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Pg(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Lg(n,t,e){const i=new WeakMap,r=new he;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let P=function(){S.dispose(),i.delete(a),a.removeEventListener("dispose",P)};f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let M=0;m===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let y=a.attributes.position.count*M,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const A=new Float32Array(y*T*4*d),S=new ed(A,y,T,d);S.type=Pn,S.needsUpdate=!0;const R=M*4;for(let _=0;_<d;_++){const v=p[_],L=h[_],D=E[_],U=y*T*4*_;for(let W=0;W<v.count;W++){const z=W*R;m===!0&&(r.fromBufferAttribute(v,W),A[U+z+0]=r.x,A[U+z+1]=r.y,A[U+z+2]=r.z,A[U+z+3]=0),g===!0&&(r.fromBufferAttribute(L,W),A[U+z+4]=r.x,A[U+z+5]=r.y,A[U+z+6]=r.z,A[U+z+7]=0),x===!0&&(r.fromBufferAttribute(D,W),A[U+z+8]=r.x,A[U+z+9]=r.y,A[U+z+10]=r.z,A[U+z+11]=D.itemSize===4?r.w:1)}}f={count:d,texture:S,size:new $t(y,T)},i.set(a,f),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let m=0;for(let x=0;x<l.length;x++)m+=l[x];const g=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Ig(n,t,e,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==l&&(t.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class hd extends Le{constructor(t,e,i,r,s,o,a,c,l,u=hr){if(u!==hr&&u!==xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===hr&&(i=Fi),i===void 0&&u===xr&&(i=_r),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Xe,this.minFilter=c!==void 0?c:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const dd=new Le,cu=new hd(1,1),fd=new ed,pd=new _p,md=new cd,lu=[],uu=[],hu=new Float32Array(16),du=new Float32Array(9),fu=new Float32Array(4);function Tr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=lu[r];if(s===void 0&&(s=new Float32Array(r),lu[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function ve(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Me(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Po(n,t){let e=uu[t];e===void 0&&(e=new Int32Array(t),uu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Dg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Ug(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2fv(this.addr,t),Me(e,t)}}function Ng(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;n.uniform3fv(this.addr,t),Me(e,t)}}function Fg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4fv(this.addr,t),Me(e,t)}}function Og(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,i))return;fu.set(i),n.uniformMatrix2fv(this.addr,!1,fu),Me(e,i)}}function Bg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,i))return;du.set(i),n.uniformMatrix3fv(this.addr,!1,du),Me(e,i)}}function zg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,i))return;hu.set(i),n.uniformMatrix4fv(this.addr,!1,hu),Me(e,i)}}function kg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Gg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2iv(this.addr,t),Me(e,t)}}function Hg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;n.uniform3iv(this.addr,t),Me(e,t)}}function Vg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4iv(this.addr,t),Me(e,t)}}function Wg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Xg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2uiv(this.addr,t),Me(e,t)}}function qg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;n.uniform3uiv(this.addr,t),Me(e,t)}}function Yg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4uiv(this.addr,t),Me(e,t)}}function $g(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(cu.compareFunction=Jh,s=cu):s=dd,e.setTexture2D(t||s,r)}function Kg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||pd,r)}function jg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||md,r)}function Zg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||fd,r)}function Jg(n){switch(n){case 5126:return Dg;case 35664:return Ug;case 35665:return Ng;case 35666:return Fg;case 35674:return Og;case 35675:return Bg;case 35676:return zg;case 5124:case 35670:return kg;case 35667:case 35671:return Gg;case 35668:case 35672:return Hg;case 35669:case 35673:return Vg;case 5125:return Wg;case 36294:return Xg;case 36295:return qg;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return $g;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return jg;case 36289:case 36303:case 36311:case 36292:return Zg}}function Qg(n,t){n.uniform1fv(this.addr,t)}function t_(n,t){const e=Tr(t,this.size,2);n.uniform2fv(this.addr,e)}function e_(n,t){const e=Tr(t,this.size,3);n.uniform3fv(this.addr,e)}function n_(n,t){const e=Tr(t,this.size,4);n.uniform4fv(this.addr,e)}function i_(n,t){const e=Tr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function r_(n,t){const e=Tr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function s_(n,t){const e=Tr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function o_(n,t){n.uniform1iv(this.addr,t)}function a_(n,t){n.uniform2iv(this.addr,t)}function c_(n,t){n.uniform3iv(this.addr,t)}function l_(n,t){n.uniform4iv(this.addr,t)}function u_(n,t){n.uniform1uiv(this.addr,t)}function h_(n,t){n.uniform2uiv(this.addr,t)}function d_(n,t){n.uniform3uiv(this.addr,t)}function f_(n,t){n.uniform4uiv(this.addr,t)}function p_(n,t,e){const i=this.cache,r=t.length,s=Po(e,r);ve(i,s)||(n.uniform1iv(this.addr,s),Me(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||dd,s[o])}function m_(n,t,e){const i=this.cache,r=t.length,s=Po(e,r);ve(i,s)||(n.uniform1iv(this.addr,s),Me(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||pd,s[o])}function g_(n,t,e){const i=this.cache,r=t.length,s=Po(e,r);ve(i,s)||(n.uniform1iv(this.addr,s),Me(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||md,s[o])}function __(n,t,e){const i=this.cache,r=t.length,s=Po(e,r);ve(i,s)||(n.uniform1iv(this.addr,s),Me(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||fd,s[o])}function x_(n){switch(n){case 5126:return Qg;case 35664:return t_;case 35665:return e_;case 35666:return n_;case 35674:return i_;case 35675:return r_;case 35676:return s_;case 5124:case 35670:return o_;case 35667:case 35671:return a_;case 35668:case 35672:return c_;case 35669:case 35673:return l_;case 5125:return u_;case 36294:return h_;case 36295:return d_;case 36296:return f_;case 35678:case 36198:case 36298:case 36306:case 35682:return p_;case 35679:case 36299:case 36307:return m_;case 35680:case 36300:case 36308:case 36293:return g_;case 36289:case 36303:case 36311:case 36292:return __}}class v_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Jg(e.type)}}class M_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=x_(e.type)}}class S_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const xa=/(\w+)(\])?(\[|\.)?/g;function pu(n,t){n.seq.push(t),n.map[t.id]=t}function y_(n,t,e){const i=n.name,r=i.length;for(xa.lastIndex=0;;){const s=xa.exec(i),o=xa.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){pu(e,l===void 0?new v_(a,n,t):new M_(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new S_(a),pu(e,d)),e=d}}}class Js{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);y_(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function mu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const E_=37297;let b_=0;function T_(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function w_(n){const t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(n);let i;switch(t===e?i="":t===_o&&e===go?i="LinearDisplayP3ToLinearSRGB":t===go&&e===_o&&(i="LinearSRGBToLinearDisplayP3"),n){case di:case Ro:return[i,"LinearTransferOETF"];case an:case tl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function gu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+T_(n.getShaderSource(t),o)}else return r}function A_(n,t){const e=w_(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function R_(n,t){let e;switch(t){case Xf:e="Linear";break;case qf:e="Reinhard";break;case Yf:e="Cineon";break;case zh:e="ACESFilmic";break;case Kf:e="AgX";break;case jf:e="Neutral";break;case $f:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ls=new k;function C_(){Zt.getLuminanceCoefficients(Ls);const n=Ls.x.toFixed(4),t=Ls.y.toFixed(4),e=Ls.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function P_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function L_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function I_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Br(n){return n!==""}function _u(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const D_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(n){return n.replace(D_,N_)}const U_=new Map;function N_(n,t){let e=Dt[t];if(e===void 0){const i=U_.get(t);if(i!==void 0)e=Dt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Rc(e)}const F_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vu(n){return n.replace(F_,O_)}function O_(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Mu(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function B_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Fh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Oh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function z_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case mr:case gr:t="ENVMAP_TYPE_CUBE";break;case Ao:t="ENVMAP_TYPE_CUBE_UV";break}return t}function k_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case gr:t="ENVMAP_MODE_REFRACTION";break}return t}function G_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Bh:t="ENVMAP_BLENDING_MULTIPLY";break;case Vf:t="ENVMAP_BLENDING_MIX";break;case Wf:t="ENVMAP_BLENDING_ADD";break}return t}function H_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function V_(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=B_(e),l=z_(e),u=k_(e),d=G_(e),f=H_(e),m=P_(e),g=L_(s),x=r.createProgram();let p,h,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Br).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Br).join(`
`),h.length>0&&(h+=`
`)):(p=[Mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),h=[Mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?Dt.tonemapping_pars_fragment:"",e.toneMapping!==oi?R_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,A_("linearToOutputTexel",e.outputColorSpace),C_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Br).join(`
`)),o=Rc(o),o=_u(o,e),o=xu(o,e),a=Rc(a),a=_u(a,e),a=xu(a,e),o=vu(o),a=vu(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",e.glslVersion===Ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const M=E+p+o,y=E+h+a,T=mu(r,r.VERTEX_SHADER,M),A=mu(r,r.FRAGMENT_SHADER,y);r.attachShader(x,T),r.attachShader(x,A),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function S(v){if(n.debug.checkShaderErrors){const L=r.getProgramInfoLog(x).trim(),D=r.getShaderInfoLog(T).trim(),U=r.getShaderInfoLog(A).trim();let W=!0,z=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,T,A);else{const Y=gu(r,T,"vertex"),N=gu(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+v.name+`
Material Type: `+v.type+`

Program Info Log: `+L+`
`+Y+`
`+N)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(D===""||U==="")&&(z=!1);z&&(v.diagnostics={runnable:W,programLog:L,vertexShader:{log:D,prefix:p},fragmentShader:{log:U,prefix:h}})}r.deleteShader(T),r.deleteShader(A),R=new Js(r,x),P=I_(r,x)}let R;this.getUniforms=function(){return R===void 0&&S(this),R};let P;this.getAttributes=function(){return P===void 0&&S(this),P};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(x,E_)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=b_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=A,this}let W_=0;class X_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new q_(t),e.set(t,i)),i}}class q_{constructor(t){this.id=W_++,this.code=t,this.usedTimes=0}}function Y_(n,t,e,i,r,s,o){const a=new nd,c=new X_,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,m=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function h(_,v,L,D,U){const W=D.fog,z=U.geometry,Y=_.isMeshStandardMaterial?D.environment:null,N=(_.isMeshStandardMaterial?e:t).get(_.envMap||Y),X=N&&N.mapping===Ao?N.image.height:null,et=x[_.type];_.precision!==null&&(g=r.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const st=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,yt=st!==void 0?st.length:0;let Nt=0;z.morphAttributes.position!==void 0&&(Nt=1),z.morphAttributes.normal!==void 0&&(Nt=2),z.morphAttributes.color!==void 0&&(Nt=3);let $,Q,ht,ct;if(et){const ke=wn[et];$=ke.vertexShader,Q=ke.fragmentShader}else $=_.vertexShader,Q=_.fragmentShader,c.update(_),ht=c.getVertexShaderID(_),ct=c.getFragmentShaderID(_);const bt=n.getRenderTarget(),Et=U.isInstancedMesh===!0,Ot=U.isBatchedMesh===!0,te=!!_.map,Vt=!!_.matcap,I=!!N,$e=!!_.aoMap,kt=!!_.lightMap,Xt=!!_.bumpMap,Rt=!!_.normalMap,ae=!!_.displacementMap,Lt=!!_.emissiveMap,C=!!_.metalnessMap,b=!!_.roughnessMap,G=_.anisotropy>0,j=_.clearcoat>0,tt=_.dispersion>0,K=_.iridescence>0,vt=_.sheen>0,at=_.transmission>0,pt=G&&!!_.anisotropyMap,qt=j&&!!_.clearcoatMap,it=j&&!!_.clearcoatNormalMap,mt=j&&!!_.clearcoatRoughnessMap,Ct=K&&!!_.iridescenceMap,Pt=K&&!!_.iridescenceThicknessMap,gt=vt&&!!_.sheenColorMap,Gt=vt&&!!_.sheenRoughnessMap,It=!!_.specularMap,ie=!!_.specularColorMap,F=!!_.specularIntensityMap,dt=at&&!!_.transmissionMap,q=at&&!!_.thicknessMap,Z=!!_.gradientMap,lt=!!_.alphaMap,ft=_.alphaTest>0,Wt=!!_.alphaHash,me=!!_.extensions;let ze=oi;_.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(ze=n.toneMapping);const Yt={shaderID:et,shaderType:_.type,shaderName:_.name,vertexShader:$,fragmentShader:Q,defines:_.defines,customVertexShaderID:ht,customFragmentShaderID:ct,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Ot,batchingColor:Ot&&U._colorsTexture!==null,instancing:Et,instancingColor:Et&&U.instanceColor!==null,instancingMorph:Et&&U.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:bt===null?n.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:di,alphaToCoverage:!!_.alphaToCoverage,map:te,matcap:Vt,envMap:I,envMapMode:I&&N.mapping,envMapCubeUVHeight:X,aoMap:$e,lightMap:kt,bumpMap:Xt,normalMap:Rt,displacementMap:m&&ae,emissiveMap:Lt,normalMapObjectSpace:Rt&&_.normalMapType===Qf,normalMapTangentSpace:Rt&&_.normalMapType===Zh,metalnessMap:C,roughnessMap:b,anisotropy:G,anisotropyMap:pt,clearcoat:j,clearcoatMap:qt,clearcoatNormalMap:it,clearcoatRoughnessMap:mt,dispersion:tt,iridescence:K,iridescenceMap:Ct,iridescenceThicknessMap:Pt,sheen:vt,sheenColorMap:gt,sheenRoughnessMap:Gt,specularMap:It,specularColorMap:ie,specularIntensityMap:F,transmission:at,transmissionMap:dt,thicknessMap:q,gradientMap:Z,opaque:_.transparent===!1&&_.blending===ur&&_.alphaToCoverage===!1,alphaMap:lt,alphaTest:ft,alphaHash:Wt,combine:_.combine,mapUv:te&&p(_.map.channel),aoMapUv:$e&&p(_.aoMap.channel),lightMapUv:kt&&p(_.lightMap.channel),bumpMapUv:Xt&&p(_.bumpMap.channel),normalMapUv:Rt&&p(_.normalMap.channel),displacementMapUv:ae&&p(_.displacementMap.channel),emissiveMapUv:Lt&&p(_.emissiveMap.channel),metalnessMapUv:C&&p(_.metalnessMap.channel),roughnessMapUv:b&&p(_.roughnessMap.channel),anisotropyMapUv:pt&&p(_.anisotropyMap.channel),clearcoatMapUv:qt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:it&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&p(_.sheenRoughnessMap.channel),specularMapUv:It&&p(_.specularMap.channel),specularColorMapUv:ie&&p(_.specularColorMap.channel),specularIntensityMapUv:F&&p(_.specularIntensityMap.channel),transmissionMapUv:dt&&p(_.transmissionMap.channel),thicknessMapUv:q&&p(_.thicknessMap.channel),alphaMapUv:lt&&p(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Rt||G),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!z.attributes.uv&&(te||lt),fog:!!W,useFog:_.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:U.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Nt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:ze,decodeVideoTexture:te&&_.map.isVideoTexture===!0&&Zt.getTransfer(_.map.colorSpace)===le,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ue,flipSided:_.side===Ne,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:me&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&_.extensions.multiDraw===!0||Ot)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Yt.vertexUv1s=l.has(1),Yt.vertexUv2s=l.has(2),Yt.vertexUv3s=l.has(3),l.clear(),Yt}function E(_){const v=[];if(_.shaderID?v.push(_.shaderID):(v.push(_.customVertexShaderID),v.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)v.push(L),v.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(M(v,_),y(v,_),v.push(n.outputColorSpace)),v.push(_.customProgramCacheKey),v.join()}function M(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapCubeUVHeight),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.morphAttributeCount),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)}function y(_,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.alphaToCoverage&&a.enable(20),_.push(a.mask)}function T(_){const v=x[_.type];let L;if(v){const D=wn[v];L=Pp.clone(D.uniforms)}else L=_.uniforms;return L}function A(_,v){let L;for(let D=0,U=u.length;D<U;D++){const W=u[D];if(W.cacheKey===v){L=W,++L.usedTimes;break}}return L===void 0&&(L=new V_(n,v,_,s),u.push(L)),L}function S(_){if(--_.usedTimes===0){const v=u.indexOf(_);u[v]=u[u.length-1],u.pop(),_.destroy()}}function R(_){c.remove(_)}function P(){c.dispose()}return{getParameters:h,getProgramCacheKey:E,getUniforms:T,acquireProgram:A,releaseProgram:S,releaseShaderCache:R,programs:u,dispose:P}}function $_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function K_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Su(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function yu(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(d,f,m,g,x,p){let h=n[t];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:x,group:p},n[t]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=x,h.group=p),t++,h}function a(d,f,m,g,x,p){const h=o(d,f,m,g,x,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):e.push(h)}function c(d,f,m,g,x,p){const h=o(d,f,m,g,x,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):e.unshift(h)}function l(d,f){e.length>1&&e.sort(d||K_),i.length>1&&i.sort(f||Su),r.length>1&&r.sort(f||Su)}function u(){for(let d=t,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function j_(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new yu,n.set(i,[o])):r>=s.length?(o=new yu,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Z_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new J};break;case"SpotLight":e={position:new k,direction:new k,color:new J,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new J,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new J,groundColor:new J};break;case"RectAreaLight":e={color:new J,position:new k,halfWidth:new k,halfHeight:new k};break}return n[t.id]=e,e}}}function J_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Q_=0;function tx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function ex(n){const t=new Z_,e=J_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new k);const r=new k,s=new Qt,o=new Qt;function a(l){let u=0,d=0,f=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let m=0,g=0,x=0,p=0,h=0,E=0,M=0,y=0,T=0,A=0,S=0;l.sort(tx);for(let P=0,_=l.length;P<_;P++){const v=l[P],L=v.color,D=v.intensity,U=v.distance,W=v.shadow&&v.shadow.map?v.shadow.map.texture:null;if(v.isAmbientLight)u+=L.r*D,d+=L.g*D,f+=L.b*D;else if(v.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(v.sh.coefficients[z],D);S++}else if(v.isDirectionalLight){const z=t.get(v);if(z.color.copy(v.color).multiplyScalar(v.intensity),v.castShadow){const Y=v.shadow,N=e.get(v);N.shadowIntensity=Y.intensity,N.shadowBias=Y.bias,N.shadowNormalBias=Y.normalBias,N.shadowRadius=Y.radius,N.shadowMapSize=Y.mapSize,i.directionalShadow[m]=N,i.directionalShadowMap[m]=W,i.directionalShadowMatrix[m]=v.shadow.matrix,E++}i.directional[m]=z,m++}else if(v.isSpotLight){const z=t.get(v);z.position.setFromMatrixPosition(v.matrixWorld),z.color.copy(L).multiplyScalar(D),z.distance=U,z.coneCos=Math.cos(v.angle),z.penumbraCos=Math.cos(v.angle*(1-v.penumbra)),z.decay=v.decay,i.spot[x]=z;const Y=v.shadow;if(v.map&&(i.spotLightMap[T]=v.map,T++,Y.updateMatrices(v),v.castShadow&&A++),i.spotLightMatrix[x]=Y.matrix,v.castShadow){const N=e.get(v);N.shadowIntensity=Y.intensity,N.shadowBias=Y.bias,N.shadowNormalBias=Y.normalBias,N.shadowRadius=Y.radius,N.shadowMapSize=Y.mapSize,i.spotShadow[x]=N,i.spotShadowMap[x]=W,y++}x++}else if(v.isRectAreaLight){const z=t.get(v);z.color.copy(L).multiplyScalar(D),z.halfWidth.set(v.width*.5,0,0),z.halfHeight.set(0,v.height*.5,0),i.rectArea[p]=z,p++}else if(v.isPointLight){const z=t.get(v);if(z.color.copy(v.color).multiplyScalar(v.intensity),z.distance=v.distance,z.decay=v.decay,v.castShadow){const Y=v.shadow,N=e.get(v);N.shadowIntensity=Y.intensity,N.shadowBias=Y.bias,N.shadowNormalBias=Y.normalBias,N.shadowRadius=Y.radius,N.shadowMapSize=Y.mapSize,N.shadowCameraNear=Y.camera.near,N.shadowCameraFar=Y.camera.far,i.pointShadow[g]=N,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=v.shadow.matrix,M++}i.point[g]=z,g++}else if(v.isHemisphereLight){const z=t.get(v);z.skyColor.copy(v.color).multiplyScalar(D),z.groundColor.copy(v.groundColor).multiplyScalar(D),i.hemi[h]=z,h++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==m||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==p||R.hemiLength!==h||R.numDirectionalShadows!==E||R.numPointShadows!==M||R.numSpotShadows!==y||R.numSpotMaps!==T||R.numLightProbes!==S)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=y+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=S,R.directionalLength=m,R.pointLength=g,R.spotLength=x,R.rectAreaLength=p,R.hemiLength=h,R.numDirectionalShadows=E,R.numPointShadows=M,R.numSpotShadows=y,R.numSpotMaps=T,R.numLightProbes=S,i.version=Q_++)}function c(l,u){let d=0,f=0,m=0,g=0,x=0;const p=u.matrixWorldInverse;for(let h=0,E=l.length;h<E;h++){const M=l[h];if(M.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),d++}else if(M.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),m++}else if(M.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),o.identity(),s.copy(M.matrixWorld),s.premultiply(p),o.extractRotation(s),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(p),x++}}}return{setup:a,setupView:c,state:i}}function Eu(n){const t=new ex(n),e=[],i=[];function r(u){l.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function nx(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Eu(n),t.set(r,[a])):s>=o.length?(a=new Eu(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class gd extends Zr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ix extends Zr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sx=`uniform sampler2D shadow_pass;
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
}`;function ox(n,t,e){let i=new el;const r=new $t,s=new $t,o=new he,a=new gd({depthPacking:jh}),c=new ix,l={},u=e.maxTextureSize,d={[ui]:Ne,[Ne]:ui,[ue]:ue},f=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:rx,fragmentShader:sx}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new un;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new zt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fh;let h=this.type;this.render=function(A,S,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const P=n.getRenderTarget(),_=n.getActiveCubeFace(),v=n.getActiveMipmapLevel(),L=n.state;L.setBlending(si),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const D=h!==On&&this.type===On,U=h===On&&this.type!==On;for(let W=0,z=A.length;W<z;W++){const Y=A[W],N=Y.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const X=N.getFrameExtents();if(r.multiply(X),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/X.x),r.x=s.x*X.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/X.y),r.y=s.y*X.y,N.mapSize.y=s.y)),N.map===null||D===!0||U===!0){const st=this.type!==On?{minFilter:Xe,magFilter:Xe}:{};N.map!==null&&N.map.dispose(),N.map=new Oi(r.x,r.y,st),N.map.texture.name=Y.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const et=N.getViewportCount();for(let st=0;st<et;st++){const yt=N.getViewport(st);o.set(s.x*yt.x,s.y*yt.y,s.x*yt.z,s.y*yt.w),L.viewport(o),N.updateMatrices(Y,st),i=N.getFrustum(),y(S,R,N.camera,Y,this.type)}N.isPointLightShadow!==!0&&this.type===On&&E(N,R),N.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(P,_,v)};function E(A,S){const R=t.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Oi(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(S,null,R,f,x,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(S,null,R,m,x,null)}function M(A,S,R,P){let _=null;const v=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(v!==void 0)_=v;else if(_=R.isPointLight===!0?c:a,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const L=_.uuid,D=S.uuid;let U=l[L];U===void 0&&(U={},l[L]=U);let W=U[D];W===void 0&&(W=_.clone(),U[D]=W,S.addEventListener("dispose",T)),_=W}if(_.visible=S.visible,_.wireframe=S.wireframe,P===On?_.side=S.shadowSide!==null?S.shadowSide:S.side:_.side=S.shadowSide!==null?S.shadowSide:d[S.side],_.alphaMap=S.alphaMap,_.alphaTest=S.alphaTest,_.map=S.map,_.clipShadows=S.clipShadows,_.clippingPlanes=S.clippingPlanes,_.clipIntersection=S.clipIntersection,_.displacementMap=S.displacementMap,_.displacementScale=S.displacementScale,_.displacementBias=S.displacementBias,_.wireframeLinewidth=S.wireframeLinewidth,_.linewidth=S.linewidth,R.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const L=n.properties.get(_);L.light=R}return _}function y(A,S,R,P,_){if(A.visible===!1)return;if(A.layers.test(S.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===On)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const D=t.update(A),U=A.material;if(Array.isArray(U)){const W=D.groups;for(let z=0,Y=W.length;z<Y;z++){const N=W[z],X=U[N.materialIndex];if(X&&X.visible){const et=M(A,X,P,_);A.onBeforeShadow(n,A,S,R,D,et,N),n.renderBufferDirect(R,null,D,et,A,N),A.onAfterShadow(n,A,S,R,D,et,N)}}}else if(U.visible){const W=M(A,U,P,_);A.onBeforeShadow(n,A,S,R,D,W,null),n.renderBufferDirect(R,null,D,W,A,null),A.onAfterShadow(n,A,S,R,D,W,null)}}const L=A.children;for(let D=0,U=L.length;D<U;D++)y(L[D],S,R,P,_)}function T(A){A.target.removeEventListener("dispose",T);for(const R in l){const P=l[R],_=A.target.uuid;_ in P&&(P[_].dispose(),delete P[_])}}}const ax={[Xa]:qa,[Ya]:ja,[$a]:Za,[pr]:Ka,[qa]:Xa,[ja]:Ya,[Za]:$a,[Ka]:pr};function cx(n){function t(){let F=!1;const dt=new he;let q=null;const Z=new he(0,0,0,0);return{setMask:function(lt){q!==lt&&!F&&(n.colorMask(lt,lt,lt,lt),q=lt)},setLocked:function(lt){F=lt},setClear:function(lt,ft,Wt,me,ze){ze===!0&&(lt*=me,ft*=me,Wt*=me),dt.set(lt,ft,Wt,me),Z.equals(dt)===!1&&(n.clearColor(lt,ft,Wt,me),Z.copy(dt))},reset:function(){F=!1,q=null,Z.set(-1,0,0,0)}}}function e(){let F=!1,dt=!1,q=null,Z=null,lt=null;return{setReversed:function(ft){dt=ft},setTest:function(ft){ft?ht(n.DEPTH_TEST):ct(n.DEPTH_TEST)},setMask:function(ft){q!==ft&&!F&&(n.depthMask(ft),q=ft)},setFunc:function(ft){if(dt&&(ft=ax[ft]),Z!==ft){switch(ft){case Xa:n.depthFunc(n.NEVER);break;case qa:n.depthFunc(n.ALWAYS);break;case Ya:n.depthFunc(n.LESS);break;case pr:n.depthFunc(n.LEQUAL);break;case $a:n.depthFunc(n.EQUAL);break;case Ka:n.depthFunc(n.GEQUAL);break;case ja:n.depthFunc(n.GREATER);break;case Za:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=ft}},setLocked:function(ft){F=ft},setClear:function(ft){lt!==ft&&(n.clearDepth(ft),lt=ft)},reset:function(){F=!1,q=null,Z=null,lt=null}}}function i(){let F=!1,dt=null,q=null,Z=null,lt=null,ft=null,Wt=null,me=null,ze=null;return{setTest:function(Yt){F||(Yt?ht(n.STENCIL_TEST):ct(n.STENCIL_TEST))},setMask:function(Yt){dt!==Yt&&!F&&(n.stencilMask(Yt),dt=Yt)},setFunc:function(Yt,ke,Ln){(q!==Yt||Z!==ke||lt!==Ln)&&(n.stencilFunc(Yt,ke,Ln),q=Yt,Z=ke,lt=Ln)},setOp:function(Yt,ke,Ln){(ft!==Yt||Wt!==ke||me!==Ln)&&(n.stencilOp(Yt,ke,Ln),ft=Yt,Wt=ke,me=Ln)},setLocked:function(Yt){F=Yt},setClear:function(Yt){ze!==Yt&&(n.clearStencil(Yt),ze=Yt)},reset:function(){F=!1,dt=null,q=null,Z=null,lt=null,ft=null,Wt=null,me=null,ze=null}}}const r=new t,s=new e,o=new i,a=new WeakMap,c=new WeakMap;let l={},u={},d=new WeakMap,f=[],m=null,g=!1,x=null,p=null,h=null,E=null,M=null,y=null,T=null,A=new J(0,0,0),S=0,R=!1,P=null,_=null,v=null,L=null,D=null;const U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,z=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=z>=1):Y.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=z>=2);let N=null,X={};const et=n.getParameter(n.SCISSOR_BOX),st=n.getParameter(n.VIEWPORT),yt=new he().fromArray(et),Nt=new he().fromArray(st);function $(F,dt,q,Z){const lt=new Uint8Array(4),ft=n.createTexture();n.bindTexture(F,ft),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Wt=0;Wt<q;Wt++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(dt,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,lt):n.texImage2D(dt+Wt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,lt);return ft}const Q={};Q[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ht(n.DEPTH_TEST),s.setFunc(pr),kt(!1),Xt(Il),ht(n.CULL_FACE),I(si);function ht(F){l[F]!==!0&&(n.enable(F),l[F]=!0)}function ct(F){l[F]!==!1&&(n.disable(F),l[F]=!1)}function bt(F,dt){return u[F]!==dt?(n.bindFramebuffer(F,dt),u[F]=dt,F===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=dt),F===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=dt),!0):!1}function Et(F,dt){let q=f,Z=!1;if(F){q=d.get(dt),q===void 0&&(q=[],d.set(dt,q));const lt=F.textures;if(q.length!==lt.length||q[0]!==n.COLOR_ATTACHMENT0){for(let ft=0,Wt=lt.length;ft<Wt;ft++)q[ft]=n.COLOR_ATTACHMENT0+ft;q.length=lt.length,Z=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,Z=!0);Z&&n.drawBuffers(q)}function Ot(F){return m!==F?(n.useProgram(F),m=F,!0):!1}const te={[wi]:n.FUNC_ADD,[wf]:n.FUNC_SUBTRACT,[Af]:n.FUNC_REVERSE_SUBTRACT};te[Rf]=n.MIN,te[Cf]=n.MAX;const Vt={[Pf]:n.ZERO,[Lf]:n.ONE,[If]:n.SRC_COLOR,[Va]:n.SRC_ALPHA,[Bf]:n.SRC_ALPHA_SATURATE,[Ff]:n.DST_COLOR,[Uf]:n.DST_ALPHA,[Df]:n.ONE_MINUS_SRC_COLOR,[Wa]:n.ONE_MINUS_SRC_ALPHA,[Of]:n.ONE_MINUS_DST_COLOR,[Nf]:n.ONE_MINUS_DST_ALPHA,[zf]:n.CONSTANT_COLOR,[kf]:n.ONE_MINUS_CONSTANT_COLOR,[Gf]:n.CONSTANT_ALPHA,[Hf]:n.ONE_MINUS_CONSTANT_ALPHA};function I(F,dt,q,Z,lt,ft,Wt,me,ze,Yt){if(F===si){g===!0&&(ct(n.BLEND),g=!1);return}if(g===!1&&(ht(n.BLEND),g=!0),F!==Tf){if(F!==x||Yt!==R){if((p!==wi||M!==wi)&&(n.blendEquation(n.FUNC_ADD),p=wi,M=wi),Yt)switch(F){case ur:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ha:n.blendFunc(n.ONE,n.ONE);break;case Dl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ul:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ur:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ha:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Dl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ul:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}h=null,E=null,y=null,T=null,A.set(0,0,0),S=0,x=F,R=Yt}return}lt=lt||dt,ft=ft||q,Wt=Wt||Z,(dt!==p||lt!==M)&&(n.blendEquationSeparate(te[dt],te[lt]),p=dt,M=lt),(q!==h||Z!==E||ft!==y||Wt!==T)&&(n.blendFuncSeparate(Vt[q],Vt[Z],Vt[ft],Vt[Wt]),h=q,E=Z,y=ft,T=Wt),(me.equals(A)===!1||ze!==S)&&(n.blendColor(me.r,me.g,me.b,ze),A.copy(me),S=ze),x=F,R=!1}function $e(F,dt){F.side===ue?ct(n.CULL_FACE):ht(n.CULL_FACE);let q=F.side===Ne;dt&&(q=!q),kt(q),F.blending===ur&&F.transparent===!1?I(si):I(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),r.setMask(F.colorWrite);const Z=F.stencilWrite;o.setTest(Z),Z&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ae(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ht(n.SAMPLE_ALPHA_TO_COVERAGE):ct(n.SAMPLE_ALPHA_TO_COVERAGE)}function kt(F){P!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),P=F)}function Xt(F){F!==Ef?(ht(n.CULL_FACE),F!==_&&(F===Il?n.cullFace(n.BACK):F===bf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ct(n.CULL_FACE),_=F}function Rt(F){F!==v&&(W&&n.lineWidth(F),v=F)}function ae(F,dt,q){F?(ht(n.POLYGON_OFFSET_FILL),(L!==dt||D!==q)&&(n.polygonOffset(dt,q),L=dt,D=q)):ct(n.POLYGON_OFFSET_FILL)}function Lt(F){F?ht(n.SCISSOR_TEST):ct(n.SCISSOR_TEST)}function C(F){F===void 0&&(F=n.TEXTURE0+U-1),N!==F&&(n.activeTexture(F),N=F)}function b(F,dt,q){q===void 0&&(N===null?q=n.TEXTURE0+U-1:q=N);let Z=X[q];Z===void 0&&(Z={type:void 0,texture:void 0},X[q]=Z),(Z.type!==F||Z.texture!==dt)&&(N!==q&&(n.activeTexture(q),N=q),n.bindTexture(F,dt||Q[F]),Z.type=F,Z.texture=dt)}function G(){const F=X[N];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function tt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function vt(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function at(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function qt(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function mt(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ct(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pt(F){yt.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),yt.copy(F))}function gt(F){Nt.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Nt.copy(F))}function Gt(F,dt){let q=c.get(dt);q===void 0&&(q=new WeakMap,c.set(dt,q));let Z=q.get(F);Z===void 0&&(Z=n.getUniformBlockIndex(dt,F.name),q.set(F,Z))}function It(F,dt){const Z=c.get(dt).get(F);a.get(dt)!==Z&&(n.uniformBlockBinding(dt,Z,F.__bindingPointIndex),a.set(dt,Z))}function ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},N=null,X={},u={},d=new WeakMap,f=[],m=null,g=!1,x=null,p=null,h=null,E=null,M=null,y=null,T=null,A=new J(0,0,0),S=0,R=!1,P=null,_=null,v=null,L=null,D=null,yt.set(0,0,n.canvas.width,n.canvas.height),Nt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ht,disable:ct,bindFramebuffer:bt,drawBuffers:Et,useProgram:Ot,setBlending:I,setMaterial:$e,setFlipSided:kt,setCullFace:Xt,setLineWidth:Rt,setPolygonOffset:ae,setScissorTest:Lt,activeTexture:C,bindTexture:b,unbindTexture:G,compressedTexImage2D:j,compressedTexImage3D:tt,texImage2D:mt,texImage3D:Ct,updateUBOMapping:Gt,uniformBlockBinding:It,texStorage2D:qt,texStorage3D:it,texSubImage2D:K,texSubImage3D:vt,compressedTexSubImage2D:at,compressedTexSubImage3D:pt,scissor:Pt,viewport:gt,reset:ie}}function bu(n,t,e,i){const r=lx(i);switch(e){case Wh:return n*t;case qh:return n*t;case Yh:return n*t*2;case jc:return n*t/r.components*r.byteLength;case Zc:return n*t/r.components*r.byteLength;case $h:return n*t*2/r.components*r.byteLength;case Jc:return n*t*2/r.components*r.byteLength;case Xh:return n*t*3/r.components*r.byteLength;case Sn:return n*t*4/r.components*r.byteLength;case Qc:return n*t*4/r.components*r.byteLength;case qs:case Ys:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case $s:case Ks:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case nc:case rc:return Math.max(n,16)*Math.max(t,8)/4;case ec:case ic:return Math.max(n,8)*Math.max(t,8)/2;case sc:case oc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ac:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case cc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case lc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case uc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case hc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case dc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case fc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case pc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case mc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case gc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case _c:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case xc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case vc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Mc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Sc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case js:case yc:case Ec:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Kh:case bc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Tc:case wc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function lx(n){switch(n){case Vn:case Gh:return{byteLength:1,components:1};case qr:case Hh:case Kr:return{byteLength:2,components:1};case $c:case Kc:return{byteLength:2,components:4};case Fi:case Yc:case Pn:return{byteLength:4,components:1};case Vh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function ux(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $t,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return m?new OffscreenCanvas(C,b):Yr("canvas")}function x(C,b,G){let j=1;const tt=Lt(C);if((tt.width>G||tt.height>G)&&(j=G/Math.max(tt.width,tt.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const K=Math.floor(j*tt.width),vt=Math.floor(j*tt.height);d===void 0&&(d=g(K,vt));const at=b?g(K,vt):d;return at.width=K,at.height=vt,at.getContext("2d").drawImage(C,0,0,K,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+K+"x"+vt+")."),at}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==Xe&&C.minFilter!==vn}function h(C){n.generateMipmap(C)}function E(C,b,G,j,tt=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let K=b;if(b===n.RED&&(G===n.FLOAT&&(K=n.R32F),G===n.HALF_FLOAT&&(K=n.R16F),G===n.UNSIGNED_BYTE&&(K=n.R8)),b===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.R8UI),G===n.UNSIGNED_SHORT&&(K=n.R16UI),G===n.UNSIGNED_INT&&(K=n.R32UI),G===n.BYTE&&(K=n.R8I),G===n.SHORT&&(K=n.R16I),G===n.INT&&(K=n.R32I)),b===n.RG&&(G===n.FLOAT&&(K=n.RG32F),G===n.HALF_FLOAT&&(K=n.RG16F),G===n.UNSIGNED_BYTE&&(K=n.RG8)),b===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RG8UI),G===n.UNSIGNED_SHORT&&(K=n.RG16UI),G===n.UNSIGNED_INT&&(K=n.RG32UI),G===n.BYTE&&(K=n.RG8I),G===n.SHORT&&(K=n.RG16I),G===n.INT&&(K=n.RG32I)),b===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RGB8UI),G===n.UNSIGNED_SHORT&&(K=n.RGB16UI),G===n.UNSIGNED_INT&&(K=n.RGB32UI),G===n.BYTE&&(K=n.RGB8I),G===n.SHORT&&(K=n.RGB16I),G===n.INT&&(K=n.RGB32I)),b===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),G===n.UNSIGNED_INT&&(K=n.RGBA32UI),G===n.BYTE&&(K=n.RGBA8I),G===n.SHORT&&(K=n.RGBA16I),G===n.INT&&(K=n.RGBA32I)),b===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),b===n.RGBA){const vt=tt?mo:Zt.getTransfer(j);G===n.FLOAT&&(K=n.RGBA32F),G===n.HALF_FLOAT&&(K=n.RGBA16F),G===n.UNSIGNED_BYTE&&(K=vt===le?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function M(C,b){let G;return C?b===null||b===Fi||b===_r?G=n.DEPTH24_STENCIL8:b===Pn?G=n.DEPTH32F_STENCIL8:b===qr&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Fi||b===_r?G=n.DEPTH_COMPONENT24:b===Pn?G=n.DEPTH_COMPONENT32F:b===qr&&(G=n.DEPTH_COMPONENT16),G}function y(C,b){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Xe&&C.minFilter!==vn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function T(C){const b=C.target;b.removeEventListener("dispose",T),S(b),b.isVideoTexture&&u.delete(b)}function A(C){const b=C.target;b.removeEventListener("dispose",A),P(b)}function S(C){const b=i.get(C);if(b.__webglInit===void 0)return;const G=C.source,j=f.get(G);if(j){const tt=j[b.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&R(C),Object.keys(j).length===0&&f.delete(G)}i.remove(C)}function R(C){const b=i.get(C);n.deleteTexture(b.__webglTexture);const G=C.source,j=f.get(G);delete j[b.__cacheKey],o.memory.textures--}function P(C){const b=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let tt=0;tt<b.__webglFramebuffer[j].length;tt++)n.deleteFramebuffer(b.__webglFramebuffer[j][tt]);else n.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)n.deleteFramebuffer(b.__webglFramebuffer[j]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=C.textures;for(let j=0,tt=G.length;j<tt;j++){const K=i.get(G[j]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(G[j])}i.remove(C)}let _=0;function v(){_=0}function L(){const C=_;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),_+=1,C}function D(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function U(C,b){const G=i.get(C);if(C.isVideoTexture&&Rt(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Nt(G,C,b);return}}e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+b)}function W(C,b){const G=i.get(C);if(C.version>0&&G.__version!==C.version){Nt(G,C,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+b)}function z(C,b){const G=i.get(C);if(C.version>0&&G.__version!==C.version){Nt(G,C,b);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+b)}function Y(C,b){const G=i.get(C);if(C.version>0&&G.__version!==C.version){$(G,C,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+b)}const N={[po]:n.REPEAT,[Pi]:n.CLAMP_TO_EDGE,[tc]:n.MIRRORED_REPEAT},X={[Xe]:n.NEAREST,[Zf]:n.NEAREST_MIPMAP_NEAREST,[hs]:n.NEAREST_MIPMAP_LINEAR,[vn]:n.LINEAR,[Vo]:n.LINEAR_MIPMAP_NEAREST,[Li]:n.LINEAR_MIPMAP_LINEAR},et={[tp]:n.NEVER,[op]:n.ALWAYS,[ep]:n.LESS,[Jh]:n.LEQUAL,[np]:n.EQUAL,[sp]:n.GEQUAL,[ip]:n.GREATER,[rp]:n.NOTEQUAL};function st(C,b){if(b.type===Pn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===vn||b.magFilter===Vo||b.magFilter===hs||b.magFilter===Li||b.minFilter===vn||b.minFilter===Vo||b.minFilter===hs||b.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,N[b.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,N[b.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,N[b.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,X[b.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,X[b.minFilter]),b.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,et[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Xe||b.minFilter!==hs&&b.minFilter!==Li||b.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function yt(C,b){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",T));const j=b.source;let tt=f.get(j);tt===void 0&&(tt={},f.set(j,tt));const K=D(b);if(K!==C.__cacheKey){tt[K]===void 0&&(tt[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),tt[K].usedTimes++;const vt=tt[C.__cacheKey];vt!==void 0&&(tt[C.__cacheKey].usedTimes--,vt.usedTimes===0&&R(b)),C.__cacheKey=K,C.__webglTexture=tt[K].texture}return G}function Nt(C,b,G){let j=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=n.TEXTURE_3D);const tt=yt(C,b),K=b.source;e.bindTexture(j,C.__webglTexture,n.TEXTURE0+G);const vt=i.get(K);if(K.version!==vt.__version||tt===!0){e.activeTexture(n.TEXTURE0+G);const at=Zt.getPrimaries(Zt.workingColorSpace),pt=b.colorSpace===ri?null:Zt.getPrimaries(b.colorSpace),qt=b.colorSpace===ri||at===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let it=x(b.image,!1,r.maxTextureSize);it=ae(b,it);const mt=s.convert(b.format,b.colorSpace),Ct=s.convert(b.type);let Pt=E(b.internalFormat,mt,Ct,b.colorSpace,b.isVideoTexture);st(j,b);let gt;const Gt=b.mipmaps,It=b.isVideoTexture!==!0,ie=vt.__version===void 0||tt===!0,F=K.dataReady,dt=y(b,it);if(b.isDepthTexture)Pt=M(b.format===xr,b.type),ie&&(It?e.texStorage2D(n.TEXTURE_2D,1,Pt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,Pt,it.width,it.height,0,mt,Ct,null));else if(b.isDataTexture)if(Gt.length>0){It&&ie&&e.texStorage2D(n.TEXTURE_2D,dt,Pt,Gt[0].width,Gt[0].height);for(let q=0,Z=Gt.length;q<Z;q++)gt=Gt[q],It?F&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,gt.width,gt.height,mt,Ct,gt.data):e.texImage2D(n.TEXTURE_2D,q,Pt,gt.width,gt.height,0,mt,Ct,gt.data);b.generateMipmaps=!1}else It?(ie&&e.texStorage2D(n.TEXTURE_2D,dt,Pt,it.width,it.height),F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,it.width,it.height,mt,Ct,it.data)):e.texImage2D(n.TEXTURE_2D,0,Pt,it.width,it.height,0,mt,Ct,it.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){It&&ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,Pt,Gt[0].width,Gt[0].height,it.depth);for(let q=0,Z=Gt.length;q<Z;q++)if(gt=Gt[q],b.format!==Sn)if(mt!==null)if(It){if(F)if(b.layerUpdates.size>0){const lt=bu(gt.width,gt.height,b.format,b.type);for(const ft of b.layerUpdates){const Wt=gt.data.subarray(ft*lt/gt.data.BYTES_PER_ELEMENT,(ft+1)*lt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,ft,gt.width,gt.height,1,mt,Wt,0,0)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,gt.width,gt.height,it.depth,mt,gt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Pt,gt.width,gt.height,it.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?F&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,gt.width,gt.height,it.depth,mt,Ct,gt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,q,Pt,gt.width,gt.height,it.depth,0,mt,Ct,gt.data)}else{It&&ie&&e.texStorage2D(n.TEXTURE_2D,dt,Pt,Gt[0].width,Gt[0].height);for(let q=0,Z=Gt.length;q<Z;q++)gt=Gt[q],b.format!==Sn?mt!==null?It?F&&e.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(n.TEXTURE_2D,q,Pt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?F&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,gt.width,gt.height,mt,Ct,gt.data):e.texImage2D(n.TEXTURE_2D,q,Pt,gt.width,gt.height,0,mt,Ct,gt.data)}else if(b.isDataArrayTexture)if(It){if(ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,Pt,it.width,it.height,it.depth),F)if(b.layerUpdates.size>0){const q=bu(it.width,it.height,b.format,b.type);for(const Z of b.layerUpdates){const lt=it.data.subarray(Z*q/it.data.BYTES_PER_ELEMENT,(Z+1)*q/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,it.width,it.height,1,mt,Ct,lt)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,mt,Ct,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Pt,it.width,it.height,it.depth,0,mt,Ct,it.data);else if(b.isData3DTexture)It?(ie&&e.texStorage3D(n.TEXTURE_3D,dt,Pt,it.width,it.height,it.depth),F&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,mt,Ct,it.data)):e.texImage3D(n.TEXTURE_3D,0,Pt,it.width,it.height,it.depth,0,mt,Ct,it.data);else if(b.isFramebufferTexture){if(ie)if(It)e.texStorage2D(n.TEXTURE_2D,dt,Pt,it.width,it.height);else{let q=it.width,Z=it.height;for(let lt=0;lt<dt;lt++)e.texImage2D(n.TEXTURE_2D,lt,Pt,q,Z,0,mt,Ct,null),q>>=1,Z>>=1}}else if(Gt.length>0){if(It&&ie){const q=Lt(Gt[0]);e.texStorage2D(n.TEXTURE_2D,dt,Pt,q.width,q.height)}for(let q=0,Z=Gt.length;q<Z;q++)gt=Gt[q],It?F&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,mt,Ct,gt):e.texImage2D(n.TEXTURE_2D,q,Pt,mt,Ct,gt);b.generateMipmaps=!1}else if(It){if(ie){const q=Lt(it);e.texStorage2D(n.TEXTURE_2D,dt,Pt,q.width,q.height)}F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,mt,Ct,it)}else e.texImage2D(n.TEXTURE_2D,0,Pt,mt,Ct,it);p(b)&&h(j),vt.__version=K.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function $(C,b,G){if(b.image.length!==6)return;const j=yt(C,b),tt=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+G);const K=i.get(tt);if(tt.version!==K.__version||j===!0){e.activeTexture(n.TEXTURE0+G);const vt=Zt.getPrimaries(Zt.workingColorSpace),at=b.colorSpace===ri?null:Zt.getPrimaries(b.colorSpace),pt=b.colorSpace===ri||vt===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const qt=b.isCompressedTexture||b.image[0].isCompressedTexture,it=b.image[0]&&b.image[0].isDataTexture,mt=[];for(let Z=0;Z<6;Z++)!qt&&!it?mt[Z]=x(b.image[Z],!0,r.maxCubemapSize):mt[Z]=it?b.image[Z].image:b.image[Z],mt[Z]=ae(b,mt[Z]);const Ct=mt[0],Pt=s.convert(b.format,b.colorSpace),gt=s.convert(b.type),Gt=E(b.internalFormat,Pt,gt,b.colorSpace),It=b.isVideoTexture!==!0,ie=K.__version===void 0||j===!0,F=tt.dataReady;let dt=y(b,Ct);st(n.TEXTURE_CUBE_MAP,b);let q;if(qt){It&&ie&&e.texStorage2D(n.TEXTURE_CUBE_MAP,dt,Gt,Ct.width,Ct.height);for(let Z=0;Z<6;Z++){q=mt[Z].mipmaps;for(let lt=0;lt<q.length;lt++){const ft=q[lt];b.format!==Sn?Pt!==null?It?F&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,ft.width,ft.height,Pt,ft.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,Gt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,ft.width,ft.height,Pt,gt,ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,Gt,ft.width,ft.height,0,Pt,gt,ft.data)}}}else{if(q=b.mipmaps,It&&ie){q.length>0&&dt++;const Z=Lt(mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,dt,Gt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(it){It?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,mt[Z].width,mt[Z].height,Pt,gt,mt[Z].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Gt,mt[Z].width,mt[Z].height,0,Pt,gt,mt[Z].data);for(let lt=0;lt<q.length;lt++){const Wt=q[lt].image[Z].image;It?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,Wt.width,Wt.height,Pt,gt,Wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,Gt,Wt.width,Wt.height,0,Pt,gt,Wt.data)}}else{It?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Pt,gt,mt[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Gt,Pt,gt,mt[Z]);for(let lt=0;lt<q.length;lt++){const ft=q[lt];It?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,Pt,gt,ft.image[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,Gt,Pt,gt,ft.image[Z])}}}p(b)&&h(n.TEXTURE_CUBE_MAP),K.__version=tt.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Q(C,b,G,j,tt,K){const vt=s.convert(G.format,G.colorSpace),at=s.convert(G.type),pt=E(G.internalFormat,vt,at,G.colorSpace);if(!i.get(b).__hasExternalTextures){const it=Math.max(1,b.width>>K),mt=Math.max(1,b.height>>K);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,K,pt,it,mt,b.depth,0,vt,at,null):e.texImage2D(tt,K,pt,it,mt,0,vt,at,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),Xt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,tt,i.get(G).__webglTexture,0,kt(b)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,tt,i.get(G).__webglTexture,K),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ht(C,b,G){if(n.bindRenderbuffer(n.RENDERBUFFER,C),b.depthBuffer){const j=b.depthTexture,tt=j&&j.isDepthTexture?j.type:null,K=M(b.stencilBuffer,tt),vt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=kt(b);Xt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at,K,b.width,b.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,at,K,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,K,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,vt,n.RENDERBUFFER,C)}else{const j=b.textures;for(let tt=0;tt<j.length;tt++){const K=j[tt],vt=s.convert(K.format,K.colorSpace),at=s.convert(K.type),pt=E(K.internalFormat,vt,at,K.colorSpace),qt=kt(b);G&&Xt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,qt,pt,b.width,b.height):Xt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qt,pt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,pt,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ct(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),U(b.depthTexture,0);const j=i.get(b.depthTexture).__webglTexture,tt=kt(b);if(b.depthTexture.format===hr)Xt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(b.depthTexture.format===xr)Xt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function bt(C){const b=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const j=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),j){const tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,j.removeEventListener("dispose",tt)};j.addEventListener("dispose",tt),b.__depthDisposeCallback=tt}b.__boundDepthTexture=j}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ct(b.__webglFramebuffer,C)}else if(G){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]===void 0)b.__webglDepthbuffer[j]=n.createRenderbuffer(),ht(b.__webglDepthbuffer[j],C,!1);else{const tt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,K)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),ht(b.__webglDepthbuffer,C,!1);else{const j=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,tt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Et(C,b,G){const j=i.get(C);b!==void 0&&Q(j.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&bt(C)}function Ot(C){const b=C.texture,G=i.get(C),j=i.get(b);C.addEventListener("dispose",A);const tt=C.textures,K=C.isWebGLCubeRenderTarget===!0,vt=tt.length>1;if(vt||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=b.version,o.memory.textures++),K){G.__webglFramebuffer=[];for(let at=0;at<6;at++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[at]=[];for(let pt=0;pt<b.mipmaps.length;pt++)G.__webglFramebuffer[at][pt]=n.createFramebuffer()}else G.__webglFramebuffer[at]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let at=0;at<b.mipmaps.length;at++)G.__webglFramebuffer[at]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(vt)for(let at=0,pt=tt.length;at<pt;at++){const qt=i.get(tt[at]);qt.__webglTexture===void 0&&(qt.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&Xt(C)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let at=0;at<tt.length;at++){const pt=tt[at];G.__webglColorRenderbuffer[at]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[at]);const qt=s.convert(pt.format,pt.colorSpace),it=s.convert(pt.type),mt=E(pt.internalFormat,qt,it,pt.colorSpace,C.isXRRenderTarget===!0),Ct=kt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct,mt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,G.__webglColorRenderbuffer[at])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),ht(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),st(n.TEXTURE_CUBE_MAP,b);for(let at=0;at<6;at++)if(b.mipmaps&&b.mipmaps.length>0)for(let pt=0;pt<b.mipmaps.length;pt++)Q(G.__webglFramebuffer[at][pt],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,pt);else Q(G.__webglFramebuffer[at],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(b)&&h(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let at=0,pt=tt.length;at<pt;at++){const qt=tt[at],it=i.get(qt);e.bindTexture(n.TEXTURE_2D,it.__webglTexture),st(n.TEXTURE_2D,qt),Q(G.__webglFramebuffer,C,qt,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,0),p(qt)&&h(n.TEXTURE_2D)}e.unbindTexture()}else{let at=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(at=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(at,j.__webglTexture),st(at,b),b.mipmaps&&b.mipmaps.length>0)for(let pt=0;pt<b.mipmaps.length;pt++)Q(G.__webglFramebuffer[pt],C,b,n.COLOR_ATTACHMENT0,at,pt);else Q(G.__webglFramebuffer,C,b,n.COLOR_ATTACHMENT0,at,0);p(b)&&h(at),e.unbindTexture()}C.depthBuffer&&bt(C)}function te(C){const b=C.textures;for(let G=0,j=b.length;G<j;G++){const tt=b[G];if(p(tt)){const K=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,vt=i.get(tt).__webglTexture;e.bindTexture(K,vt),h(K),e.unbindTexture()}}}const Vt=[],I=[];function $e(C){if(C.samples>0){if(Xt(C)===!1){const b=C.textures,G=C.width,j=C.height;let tt=n.COLOR_BUFFER_BIT;const K=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,vt=i.get(C),at=b.length>1;if(at)for(let pt=0;pt<b.length;pt++)e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let pt=0;pt<b.length;pt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),at){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,vt.__webglColorRenderbuffer[pt]);const qt=i.get(b[pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,qt,0)}n.blitFramebuffer(0,0,G,j,0,0,G,j,tt,n.NEAREST),c===!0&&(Vt.length=0,I.length=0,Vt.push(n.COLOR_ATTACHMENT0+pt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Vt.push(K),I.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,I)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Vt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),at)for(let pt=0;pt<b.length;pt++){e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,vt.__webglColorRenderbuffer[pt]);const qt=i.get(b[pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,qt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const b=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function kt(C){return Math.min(r.maxSamples,C.samples)}function Xt(C){const b=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Rt(C){const b=o.render.frame;u.get(C)!==b&&(u.set(C,b),C.update())}function ae(C,b){const G=C.colorSpace,j=C.format,tt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==di&&G!==ri&&(Zt.getTransfer(G)===le?(j!==Sn||tt!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function Lt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=v,this.setTexture2D=U,this.setTexture2DArray=W,this.setTexture3D=z,this.setTextureCube=Y,this.rebindTextures=Et,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Xt}function hx(n,t){function e(i,r=ri){let s;const o=Zt.getTransfer(r);if(i===Vn)return n.UNSIGNED_BYTE;if(i===$c)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Kc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Vh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Gh)return n.BYTE;if(i===Hh)return n.SHORT;if(i===qr)return n.UNSIGNED_SHORT;if(i===Yc)return n.INT;if(i===Fi)return n.UNSIGNED_INT;if(i===Pn)return n.FLOAT;if(i===Kr)return n.HALF_FLOAT;if(i===Wh)return n.ALPHA;if(i===Xh)return n.RGB;if(i===Sn)return n.RGBA;if(i===qh)return n.LUMINANCE;if(i===Yh)return n.LUMINANCE_ALPHA;if(i===hr)return n.DEPTH_COMPONENT;if(i===xr)return n.DEPTH_STENCIL;if(i===jc)return n.RED;if(i===Zc)return n.RED_INTEGER;if(i===$h)return n.RG;if(i===Jc)return n.RG_INTEGER;if(i===Qc)return n.RGBA_INTEGER;if(i===qs||i===Ys||i===$s||i===Ks)if(o===le)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===qs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===qs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ys)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$s)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ks)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ec||i===nc||i===ic||i===rc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ec)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ic)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sc||i===oc||i===ac)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===sc||i===oc)return o===le?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ac)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===cc||i===lc||i===uc||i===hc||i===dc||i===fc||i===pc||i===mc||i===gc||i===_c||i===xc||i===vc||i===Mc||i===Sc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===cc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===lc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===mc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_c)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===js||i===yc||i===Ec)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===js)return o===le?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ec)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kh||i===bc||i===Tc||i===wc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===js)return s.COMPRESSED_RED_RGTC1_EXT;if(i===bc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Tc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_r?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class dx extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ee extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fx={type:"move"};class va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,i),h=this._getHandJoint(l,x);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fx)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ee;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const px=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mx=`
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

}`;class gx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Le,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Wn({vertexShader:px,fragmentShader:mx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new zt(new Qr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _x extends yr{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,m=null,g=null;const x=new gx,p=e.getContextAttributes();let h=null,E=null;const M=[],y=[],T=new $t;let A=null;const S=new cn;S.layers.enable(1),S.viewport=new he;const R=new cn;R.layers.enable(2),R.viewport=new he;const P=[S,R],_=new dx;_.layers.enable(1),_.layers.enable(2);let v=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Q=M[$];return Q===void 0&&(Q=new va,M[$]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function($){let Q=M[$];return Q===void 0&&(Q=new va,M[$]=Q),Q.getGripSpace()},this.getHand=function($){let Q=M[$];return Q===void 0&&(Q=new va,M[$]=Q),Q.getHandSpace()};function D($){const Q=y.indexOf($.inputSource);if(Q===-1)return;const ht=M[Q];ht!==void 0&&(ht.update($.inputSource,$.frame,l||o),ht.dispatchEvent({type:$.type,data:$.inputSource}))}function U(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",W);for(let $=0;$<M.length;$++){const Q=y[$];Q!==null&&(y[$]=null,M[$].disconnect(Q))}v=null,L=null,x.reset(),t.setRenderTarget(h),m=null,f=null,d=null,r=null,E=null,Nt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(h=t.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",U),r.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(T),r.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,Q),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Oi(m.framebufferWidth,m.framebufferHeight,{format:Sn,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,ht=null,ct=null;p.depth&&(ct=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=p.stencil?xr:hr,ht=p.stencil?_r:Fi);const bt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:s};d=new XRWebGLBinding(r,e),f=d.createProjectionLayer(bt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new Oi(f.textureWidth,f.textureHeight,{format:Sn,type:Vn,depthTexture:new hd(f.textureWidth,f.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Nt.setContext(r),Nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function W($){for(let Q=0;Q<$.removed.length;Q++){const ht=$.removed[Q],ct=y.indexOf(ht);ct>=0&&(y[ct]=null,M[ct].disconnect(ht))}for(let Q=0;Q<$.added.length;Q++){const ht=$.added[Q];let ct=y.indexOf(ht);if(ct===-1){for(let Et=0;Et<M.length;Et++)if(Et>=y.length){y.push(ht),ct=Et;break}else if(y[Et]===null){y[Et]=ht,ct=Et;break}if(ct===-1)break}const bt=M[ct];bt&&bt.connect(ht)}}const z=new k,Y=new k;function N($,Q,ht){z.setFromMatrixPosition(Q.matrixWorld),Y.setFromMatrixPosition(ht.matrixWorld);const ct=z.distanceTo(Y),bt=Q.projectionMatrix.elements,Et=ht.projectionMatrix.elements,Ot=bt[14]/(bt[10]-1),te=bt[14]/(bt[10]+1),Vt=(bt[9]+1)/bt[5],I=(bt[9]-1)/bt[5],$e=(bt[8]-1)/bt[0],kt=(Et[8]+1)/Et[0],Xt=Ot*$e,Rt=Ot*kt,ae=ct/(-$e+kt),Lt=ae*-$e;if(Q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Lt),$.translateZ(ae),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),bt[10]===-1)$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const C=Ot+ae,b=te+ae,G=Xt-Lt,j=Rt+(ct-Lt),tt=Vt*te/b*C,K=I*te/b*C;$.projectionMatrix.makePerspective(G,j,tt,K,C,b),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function X($,Q){Q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let Q=$.near,ht=$.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(ht=x.depthFar)),_.near=R.near=S.near=Q,_.far=R.far=S.far=ht,(v!==_.near||L!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),v=_.near,L=_.far);const ct=$.parent,bt=_.cameras;X(_,ct);for(let Et=0;Et<bt.length;Et++)X(bt[Et],ct);bt.length===2?N(_,S,R):_.projectionMatrix.copy(S.projectionMatrix),et($,_,ct)};function et($,Q,ht){ht===null?$.matrix.copy(Q.matrixWorld):($.matrix.copy(ht.matrixWorld),$.matrix.invert(),$.matrix.multiply(Q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ac*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let st=null;function yt($,Q){if(u=Q.getViewerPose(l||o),g=Q,u!==null){const ht=u.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let ct=!1;ht.length!==_.cameras.length&&(_.cameras.length=0,ct=!0);for(let Et=0;Et<ht.length;Et++){const Ot=ht[Et];let te=null;if(m!==null)te=m.getViewport(Ot);else{const I=d.getViewSubImage(f,Ot);te=I.viewport,Et===0&&(t.setRenderTargetTextures(E,I.colorTexture,f.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(E))}let Vt=P[Et];Vt===void 0&&(Vt=new cn,Vt.layers.enable(Et),Vt.viewport=new he,P[Et]=Vt),Vt.matrix.fromArray(Ot.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Ot.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(te.x,te.y,te.width,te.height),Et===0&&(_.matrix.copy(Vt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ct===!0&&_.cameras.push(Vt)}const bt=r.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const Et=d.getDepthInformation(ht[0]);Et&&Et.isValid&&Et.texture&&x.init(t,Et,r.renderState)}}for(let ht=0;ht<M.length;ht++){const ct=y[ht],bt=M[ht];ct!==null&&bt!==void 0&&bt.update(ct,Q,l||o)}st&&st($,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Nt=new ld;Nt.setAnimationLoop(yt),this.setAnimationLoop=function($){st=$},this.dispose=function(){}}}const Si=new En,xx=new Qt;function vx(n,t){function e(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,od(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,E,M,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),d(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,y)):h.isMeshMatcapMaterial?(s(p,h),g(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),x(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?c(p,h,E,M):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,e(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Ne&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,e(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Ne&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,e(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,e(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const E=t.get(h),M=E.envMap,y=E.envMapRotation;M&&(p.envMap.value=M,Si.copy(y),Si.x*=-1,Si.y*=-1,Si.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),p.envMapRotation.value.setFromMatrix4(xx.makeRotationFromEuler(Si)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function c(p,h,E,M){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*E,p.scale.value=M*.5,h.map&&(p.map.value=h.map,e(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,E){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ne&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function x(p,h){const E=t.get(h).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Mx(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,M){const y=M.program;i.uniformBlockBinding(E,y)}function l(E,M){let y=r[E.id];y===void 0&&(g(E),y=u(E),r[E.id]=y,E.addEventListener("dispose",p));const T=M.program;i.updateUBOMapping(E,T);const A=t.render.frame;s[E.id]!==A&&(f(E),s[E.id]=A)}function u(E){const M=d();E.__bindingPointIndex=M;const y=n.createBuffer(),T=E.__size,A=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,T,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,y),y}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const M=r[E.id],y=E.uniforms,T=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let A=0,S=y.length;A<S;A++){const R=Array.isArray(y[A])?y[A]:[y[A]];for(let P=0,_=R.length;P<_;P++){const v=R[P];if(m(v,A,P,T)===!0){const L=v.__offset,D=Array.isArray(v.value)?v.value:[v.value];let U=0;for(let W=0;W<D.length;W++){const z=D[W],Y=x(z);typeof z=="number"||typeof z=="boolean"?(v.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,L+U,v.__data)):z.isMatrix3?(v.__data[0]=z.elements[0],v.__data[1]=z.elements[1],v.__data[2]=z.elements[2],v.__data[3]=0,v.__data[4]=z.elements[3],v.__data[5]=z.elements[4],v.__data[6]=z.elements[5],v.__data[7]=0,v.__data[8]=z.elements[6],v.__data[9]=z.elements[7],v.__data[10]=z.elements[8],v.__data[11]=0):(z.toArray(v.__data,U),U+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,v.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,M,y,T){const A=E.value,S=M+"_"+y;if(T[S]===void 0)return typeof A=="number"||typeof A=="boolean"?T[S]=A:T[S]=A.clone(),!0;{const R=T[S];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return T[S]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(E){const M=E.uniforms;let y=0;const T=16;for(let S=0,R=M.length;S<R;S++){const P=Array.isArray(M[S])?M[S]:[M[S]];for(let _=0,v=P.length;_<v;_++){const L=P[_],D=Array.isArray(L.value)?L.value:[L.value];for(let U=0,W=D.length;U<W;U++){const z=D[U],Y=x(z),N=y%T,X=N%Y.boundary,et=N+X;y+=X,et!==0&&T-et<Y.storage&&(y+=T-et),L.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=Y.storage}}}const A=y%T;return A>0&&(y+=T-A),E.__size=y,E.__cache={},this}function x(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function p(E){const M=E.target;M.removeEventListener("dispose",p);const y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function h(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:c,update:l,dispose:h}}class Sx{constructor(t={}){const{canvas:e=cp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),g=new Int32Array(4);let x=null,p=null;const h=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=an,this.toneMapping=oi,this.toneMappingExposure=1;const M=this;let y=!1,T=0,A=0,S=null,R=-1,P=null;const _=new he,v=new he;let L=null;const D=new J(0);let U=0,W=e.width,z=e.height,Y=1,N=null,X=null;const et=new he(0,0,W,z),st=new he(0,0,W,z);let yt=!1;const Nt=new el;let $=!1,Q=!1;const ht=new Qt,ct=new Qt,bt=new k,Et=new he,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function Vt(){return S===null?Y:1}let I=i;function $e(w,O){return e.getContext(w,O)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qc}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),I===null){const O="webgl2";if(I=$e(O,w),I===null)throw $e(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let kt,Xt,Rt,ae,Lt,C,b,G,j,tt,K,vt,at,pt,qt,it,mt,Ct,Pt,gt,Gt,It,ie,F;function dt(){kt=new Ag(I),kt.init(),It=new hx(I,kt),Xt=new Sg(I,kt,t,It),Rt=new cx(I),Xt.reverseDepthBuffer&&Rt.buffers.depth.setReversed(!0),ae=new Pg(I),Lt=new $_,C=new ux(I,kt,Rt,Lt,Xt,It,ae),b=new Eg(M),G=new wg(M),j=new Op(I),ie=new vg(I,j),tt=new Rg(I,j,ae,ie),K=new Ig(I,tt,j,ae),Pt=new Lg(I,Xt,C),it=new yg(Lt),vt=new Y_(M,b,G,kt,Xt,ie,it),at=new vx(M,Lt),pt=new j_,qt=new nx(kt),Ct=new xg(M,b,G,Rt,K,f,c),mt=new ox(M,K,Xt),F=new Mx(I,ae,Xt,Rt),gt=new Mg(I,kt,ae),Gt=new Cg(I,kt,ae),ae.programs=vt.programs,M.capabilities=Xt,M.extensions=kt,M.properties=Lt,M.renderLists=pt,M.shadowMap=mt,M.state=Rt,M.info=ae}dt();const q=new _x(M,I);this.xr=q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=kt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=kt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(W,z,!1))},this.getSize=function(w){return w.set(W,z)},this.setSize=function(w,O,H=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,z=O,e.width=Math.floor(w*Y),e.height=Math.floor(O*Y),H===!0&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(W*Y,z*Y).floor()},this.setDrawingBufferSize=function(w,O,H){W=w,z=O,Y=H,e.width=Math.floor(w*H),e.height=Math.floor(O*H),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(_)},this.getViewport=function(w){return w.copy(et)},this.setViewport=function(w,O,H,V){w.isVector4?et.set(w.x,w.y,w.z,w.w):et.set(w,O,H,V),Rt.viewport(_.copy(et).multiplyScalar(Y).round())},this.getScissor=function(w){return w.copy(st)},this.setScissor=function(w,O,H,V){w.isVector4?st.set(w.x,w.y,w.z,w.w):st.set(w,O,H,V),Rt.scissor(v.copy(st).multiplyScalar(Y).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(w){Rt.setScissorTest(yt=w)},this.setOpaqueSort=function(w){N=w},this.setTransparentSort=function(w){X=w},this.getClearColor=function(w){return w.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(w=!0,O=!0,H=!0){let V=0;if(w){let B=!1;if(S!==null){const rt=S.texture.format;B=rt===Qc||rt===Jc||rt===Zc}if(B){const rt=S.texture.type,ut=rt===Vn||rt===Fi||rt===qr||rt===_r||rt===$c||rt===Kc,_t=Ct.getClearColor(),xt=Ct.getClearAlpha(),Tt=_t.r,wt=_t.g,Mt=_t.b;ut?(m[0]=Tt,m[1]=wt,m[2]=Mt,m[3]=xt,I.clearBufferuiv(I.COLOR,0,m)):(g[0]=Tt,g[1]=wt,g[2]=Mt,g[3]=xt,I.clearBufferiv(I.COLOR,0,g))}else V|=I.COLOR_BUFFER_BIT}O&&(V|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),pt.dispose(),qt.dispose(),Lt.dispose(),b.dispose(),G.dispose(),K.dispose(),ie.dispose(),F.dispose(),vt.dispose(),q.dispose(),q.removeEventListener("sessionstart",bl),q.removeEventListener("sessionend",Tl),mi.stop()};function Z(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=ae.autoReset,O=mt.enabled,H=mt.autoUpdate,V=mt.needsUpdate,B=mt.type;dt(),ae.autoReset=w,mt.enabled=O,mt.autoUpdate=H,mt.needsUpdate=V,mt.type=B}function ft(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Wt(w){const O=w.target;O.removeEventListener("dispose",Wt),me(O)}function me(w){ze(w),Lt.remove(w)}function ze(w){const O=Lt.get(w).programs;O!==void 0&&(O.forEach(function(H){vt.releaseProgram(H)}),w.isShaderMaterial&&vt.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,H,V,B,rt){O===null&&(O=Ot);const ut=B.isMesh&&B.matrixWorld.determinant()<0,_t=vf(w,O,H,V,B);Rt.setMaterial(V,ut);let xt=H.index,Tt=1;if(V.wireframe===!0){if(xt=tt.getWireframeAttribute(H),xt===void 0)return;Tt=2}const wt=H.drawRange,Mt=H.attributes.position;let Jt=wt.start*Tt,ce=(wt.start+wt.count)*Tt;rt!==null&&(Jt=Math.max(Jt,rt.start*Tt),ce=Math.min(ce,(rt.start+rt.count)*Tt)),xt!==null?(Jt=Math.max(Jt,0),ce=Math.min(ce,xt.count)):Mt!=null&&(Jt=Math.max(Jt,0),ce=Math.min(ce,Mt.count));const de=ce-Jt;if(de<0||de===1/0)return;ie.setup(B,V,_t,H,xt);let Ke,Kt=gt;if(xt!==null&&(Ke=j.get(xt),Kt=Gt,Kt.setIndex(Ke)),B.isMesh)V.wireframe===!0?(Rt.setLineWidth(V.wireframeLinewidth*Vt()),Kt.setMode(I.LINES)):Kt.setMode(I.TRIANGLES);else if(B.isLine){let St=V.linewidth;St===void 0&&(St=1),Rt.setLineWidth(St*Vt()),B.isLineSegments?Kt.setMode(I.LINES):B.isLineLoop?Kt.setMode(I.LINE_LOOP):Kt.setMode(I.LINE_STRIP)}else B.isPoints?Kt.setMode(I.POINTS):B.isSprite&&Kt.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Kt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const St=B._multiDrawStarts,be=B._multiDrawCounts,jt=B._multiDrawCount,hn=xt?j.get(xt).bytesPerElement:1,Vi=Lt.get(V).currentProgram.getUniforms();for(let je=0;je<jt;je++)Vi.setValue(I,"_gl_DrawID",je),Kt.render(St[je]/hn,be[je])}else if(B.isInstancedMesh)Kt.renderInstances(Jt,de,B.count);else if(H.isInstancedBufferGeometry){const St=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,be=Math.min(H.instanceCount,St);Kt.renderInstances(Jt,de,be)}else Kt.render(Jt,de)};function Yt(w,O,H){w.transparent===!0&&w.side===ue&&w.forceSinglePass===!1?(w.side=Ne,w.needsUpdate=!0,us(w,O,H),w.side=ui,w.needsUpdate=!0,us(w,O,H),w.side=ue):us(w,O,H)}this.compile=function(w,O,H=null){H===null&&(H=w),p=qt.get(H),p.init(O),E.push(p),H.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),w!==H&&w.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const V=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const rt=B.material;if(rt)if(Array.isArray(rt))for(let ut=0;ut<rt.length;ut++){const _t=rt[ut];Yt(_t,H,B),V.add(_t)}else Yt(rt,H,B),V.add(rt)}),E.pop(),p=null,V},this.compileAsync=function(w,O,H=null){const V=this.compile(w,O,H);return new Promise(B=>{function rt(){if(V.forEach(function(ut){Lt.get(ut).currentProgram.isReady()&&V.delete(ut)}),V.size===0){B(w);return}setTimeout(rt,10)}kt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let ke=null;function Ln(w){ke&&ke(w)}function bl(){mi.stop()}function Tl(){mi.start()}const mi=new ld;mi.setAnimationLoop(Ln),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(w){ke=w,q.setAnimationLoop(w),w===null?mi.stop():mi.start()},q.addEventListener("sessionstart",bl),q.addEventListener("sessionend",Tl),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(O),O=q.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,O,S),p=qt.get(w,E.length),p.init(O),E.push(p),ct.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Nt.setFromProjectionMatrix(ct),Q=this.localClippingEnabled,$=it.init(this.clippingPlanes,Q),x=pt.get(w,h.length),x.init(),h.push(x),q.enabled===!0&&q.isPresenting===!0){const rt=M.xr.getDepthSensingMesh();rt!==null&&zo(rt,O,-1/0,M.sortObjects)}zo(w,O,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(N,X),te=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,te&&Ct.addToRenderList(x,w),this.info.render.frame++,$===!0&&it.beginShadows();const H=p.state.shadowsArray;mt.render(H,w,O),$===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=x.opaque,B=x.transmissive;if(p.setupLights(),O.isArrayCamera){const rt=O.cameras;if(B.length>0)for(let ut=0,_t=rt.length;ut<_t;ut++){const xt=rt[ut];Al(V,B,w,xt)}te&&Ct.render(w);for(let ut=0,_t=rt.length;ut<_t;ut++){const xt=rt[ut];wl(x,w,xt,xt.viewport)}}else B.length>0&&Al(V,B,w,O),te&&Ct.render(w),wl(x,w,O);S!==null&&(C.updateMultisampleRenderTarget(S),C.updateRenderTargetMipmap(S)),w.isScene===!0&&w.onAfterRender(M,w,O),ie.resetDefaultState(),R=-1,P=null,E.pop(),E.length>0?(p=E[E.length-1],$===!0&&it.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function zo(w,O,H,V){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Nt.intersectsSprite(w)){V&&Et.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ct);const ut=K.update(w),_t=w.material;_t.visible&&x.push(w,ut,_t,H,Et.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Nt.intersectsObject(w))){const ut=K.update(w),_t=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Et.copy(w.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Et.copy(ut.boundingSphere.center)),Et.applyMatrix4(w.matrixWorld).applyMatrix4(ct)),Array.isArray(_t)){const xt=ut.groups;for(let Tt=0,wt=xt.length;Tt<wt;Tt++){const Mt=xt[Tt],Jt=_t[Mt.materialIndex];Jt&&Jt.visible&&x.push(w,ut,Jt,H,Et.z,Mt)}}else _t.visible&&x.push(w,ut,_t,H,Et.z,null)}}const rt=w.children;for(let ut=0,_t=rt.length;ut<_t;ut++)zo(rt[ut],O,H,V)}function wl(w,O,H,V){const B=w.opaque,rt=w.transmissive,ut=w.transparent;p.setupLightsView(H),$===!0&&it.setGlobalState(M.clippingPlanes,H),V&&Rt.viewport(_.copy(V)),B.length>0&&ls(B,O,H),rt.length>0&&ls(rt,O,H),ut.length>0&&ls(ut,O,H),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Al(w,O,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Oi(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?Kr:Vn,minFilter:Li,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const rt=p.state.transmissionRenderTarget[V.id],ut=V.viewport||_;rt.setSize(ut.z,ut.w);const _t=M.getRenderTarget();M.setRenderTarget(rt),M.getClearColor(D),U=M.getClearAlpha(),U<1&&M.setClearColor(16777215,.5),M.clear(),te&&Ct.render(H);const xt=M.toneMapping;M.toneMapping=oi;const Tt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),$===!0&&it.setGlobalState(M.clippingPlanes,V),ls(w,H,V),C.updateMultisampleRenderTarget(rt),C.updateRenderTargetMipmap(rt),kt.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let Mt=0,Jt=O.length;Mt<Jt;Mt++){const ce=O[Mt],de=ce.object,Ke=ce.geometry,Kt=ce.material,St=ce.group;if(Kt.side===ue&&de.layers.test(V.layers)){const be=Kt.side;Kt.side=Ne,Kt.needsUpdate=!0,Rl(de,H,V,Ke,Kt,St),Kt.side=be,Kt.needsUpdate=!0,wt=!0}}wt===!0&&(C.updateMultisampleRenderTarget(rt),C.updateRenderTargetMipmap(rt))}M.setRenderTarget(_t),M.setClearColor(D,U),Tt!==void 0&&(V.viewport=Tt),M.toneMapping=xt}function ls(w,O,H){const V=O.isScene===!0?O.overrideMaterial:null;for(let B=0,rt=w.length;B<rt;B++){const ut=w[B],_t=ut.object,xt=ut.geometry,Tt=V===null?ut.material:V,wt=ut.group;_t.layers.test(H.layers)&&Rl(_t,O,H,xt,Tt,wt)}}function Rl(w,O,H,V,B,rt){w.onBeforeRender(M,O,H,V,B,rt),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(M,O,H,V,w,rt),B.transparent===!0&&B.side===ue&&B.forceSinglePass===!1?(B.side=Ne,B.needsUpdate=!0,M.renderBufferDirect(H,O,V,B,w,rt),B.side=ui,B.needsUpdate=!0,M.renderBufferDirect(H,O,V,B,w,rt),B.side=ue):M.renderBufferDirect(H,O,V,B,w,rt),w.onAfterRender(M,O,H,V,B,rt)}function us(w,O,H){O.isScene!==!0&&(O=Ot);const V=Lt.get(w),B=p.state.lights,rt=p.state.shadowsArray,ut=B.state.version,_t=vt.getParameters(w,B.state,rt,O,H),xt=vt.getProgramCacheKey(_t);let Tt=V.programs;V.environment=w.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(w.isMeshStandardMaterial?G:b).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Tt===void 0&&(w.addEventListener("dispose",Wt),Tt=new Map,V.programs=Tt);let wt=Tt.get(xt);if(wt!==void 0){if(V.currentProgram===wt&&V.lightsStateVersion===ut)return Pl(w,_t),wt}else _t.uniforms=vt.getUniforms(w),w.onBeforeCompile(_t,M),wt=vt.acquireProgram(_t,xt),Tt.set(xt,wt),V.uniforms=_t.uniforms;const Mt=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Mt.clippingPlanes=it.uniform),Pl(w,_t),V.needsLights=Sf(w),V.lightsStateVersion=ut,V.needsLights&&(Mt.ambientLightColor.value=B.state.ambient,Mt.lightProbe.value=B.state.probe,Mt.directionalLights.value=B.state.directional,Mt.directionalLightShadows.value=B.state.directionalShadow,Mt.spotLights.value=B.state.spot,Mt.spotLightShadows.value=B.state.spotShadow,Mt.rectAreaLights.value=B.state.rectArea,Mt.ltc_1.value=B.state.rectAreaLTC1,Mt.ltc_2.value=B.state.rectAreaLTC2,Mt.pointLights.value=B.state.point,Mt.pointLightShadows.value=B.state.pointShadow,Mt.hemisphereLights.value=B.state.hemi,Mt.directionalShadowMap.value=B.state.directionalShadowMap,Mt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Mt.spotShadowMap.value=B.state.spotShadowMap,Mt.spotLightMatrix.value=B.state.spotLightMatrix,Mt.spotLightMap.value=B.state.spotLightMap,Mt.pointShadowMap.value=B.state.pointShadowMap,Mt.pointShadowMatrix.value=B.state.pointShadowMatrix),V.currentProgram=wt,V.uniformsList=null,wt}function Cl(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=Js.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Pl(w,O){const H=Lt.get(w);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function vf(w,O,H,V,B){O.isScene!==!0&&(O=Ot),C.resetTextureUnits();const rt=O.fog,ut=V.isMeshStandardMaterial?O.environment:null,_t=S===null?M.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:di,xt=(V.isMeshStandardMaterial?G:b).get(V.envMap||ut),Tt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,wt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Mt=!!H.morphAttributes.position,Jt=!!H.morphAttributes.normal,ce=!!H.morphAttributes.color;let de=oi;V.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(de=M.toneMapping);const Ke=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Kt=Ke!==void 0?Ke.length:0,St=Lt.get(V),be=p.state.lights;if($===!0&&(Q===!0||w!==P)){const sn=w===P&&V.id===R;it.setState(V,w,sn)}let jt=!1;V.version===St.__version?(St.needsLights&&St.lightsStateVersion!==be.state.version||St.outputColorSpace!==_t||B.isBatchedMesh&&St.batching===!1||!B.isBatchedMesh&&St.batching===!0||B.isBatchedMesh&&St.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&St.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&St.instancing===!1||!B.isInstancedMesh&&St.instancing===!0||B.isSkinnedMesh&&St.skinning===!1||!B.isSkinnedMesh&&St.skinning===!0||B.isInstancedMesh&&St.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&St.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&St.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&St.instancingMorph===!1&&B.morphTexture!==null||St.envMap!==xt||V.fog===!0&&St.fog!==rt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==it.numPlanes||St.numIntersection!==it.numIntersection)||St.vertexAlphas!==Tt||St.vertexTangents!==wt||St.morphTargets!==Mt||St.morphNormals!==Jt||St.morphColors!==ce||St.toneMapping!==de||St.morphTargetsCount!==Kt)&&(jt=!0):(jt=!0,St.__version=V.version);let hn=St.currentProgram;jt===!0&&(hn=us(V,O,B));let Vi=!1,je=!1,ko=!1;const fe=hn.getUniforms(),$n=St.uniforms;if(Rt.useProgram(hn.program)&&(Vi=!0,je=!0,ko=!0),V.id!==R&&(R=V.id,je=!0),Vi||P!==w){Xt.reverseDepthBuffer?(ht.copy(w.projectionMatrix),up(ht),hp(ht),fe.setValue(I,"projectionMatrix",ht)):fe.setValue(I,"projectionMatrix",w.projectionMatrix),fe.setValue(I,"viewMatrix",w.matrixWorldInverse);const sn=fe.map.cameraPosition;sn!==void 0&&sn.setValue(I,bt.setFromMatrixPosition(w.matrixWorld)),Xt.logarithmicDepthBuffer&&fe.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&fe.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),P!==w&&(P=w,je=!0,ko=!0)}if(B.isSkinnedMesh){fe.setOptional(I,B,"bindMatrix"),fe.setOptional(I,B,"bindMatrixInverse");const sn=B.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),fe.setValue(I,"boneTexture",sn.boneTexture,C))}B.isBatchedMesh&&(fe.setOptional(I,B,"batchingTexture"),fe.setValue(I,"batchingTexture",B._matricesTexture,C),fe.setOptional(I,B,"batchingIdTexture"),fe.setValue(I,"batchingIdTexture",B._indirectTexture,C),fe.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&fe.setValue(I,"batchingColorTexture",B._colorsTexture,C));const Go=H.morphAttributes;if((Go.position!==void 0||Go.normal!==void 0||Go.color!==void 0)&&Pt.update(B,H,hn),(je||St.receiveShadow!==B.receiveShadow)&&(St.receiveShadow=B.receiveShadow,fe.setValue(I,"receiveShadow",B.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&($n.envMap.value=xt,$n.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&O.environment!==null&&($n.envMapIntensity.value=O.environmentIntensity),je&&(fe.setValue(I,"toneMappingExposure",M.toneMappingExposure),St.needsLights&&Mf($n,ko),rt&&V.fog===!0&&at.refreshFogUniforms($n,rt),at.refreshMaterialUniforms($n,V,Y,z,p.state.transmissionRenderTarget[w.id]),Js.upload(I,Cl(St),$n,C)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Js.upload(I,Cl(St),$n,C),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&fe.setValue(I,"center",B.center),fe.setValue(I,"modelViewMatrix",B.modelViewMatrix),fe.setValue(I,"normalMatrix",B.normalMatrix),fe.setValue(I,"modelMatrix",B.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const sn=V.uniformsGroups;for(let Ho=0,yf=sn.length;Ho<yf;Ho++){const Ll=sn[Ho];F.update(Ll,hn),F.bind(Ll,hn)}}return hn}function Mf(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Sf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(w,O,H){Lt.get(w.texture).__webglTexture=O,Lt.get(w.depthTexture).__webglTexture=H;const V=Lt.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){const H=Lt.get(w);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,H=0){S=w,T=O,A=H;let V=!0,B=null,rt=!1,ut=!1;if(w){const xt=Lt.get(w);if(xt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(I.FRAMEBUFFER,null),V=!1;else if(xt.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(xt.__hasExternalTextures)C.rebindTextures(w,Lt.get(w.texture).__webglTexture,Lt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Mt=w.depthTexture;if(xt.__boundDepthTexture!==Mt){if(Mt!==null&&Lt.has(Mt)&&(w.width!==Mt.image.width||w.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const Tt=w.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(ut=!0);const wt=Lt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(wt[O])?B=wt[O][H]:B=wt[O],rt=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?B=Lt.get(w).__webglMultisampledFramebuffer:Array.isArray(wt)?B=wt[H]:B=wt,_.copy(w.viewport),v.copy(w.scissor),L=w.scissorTest}else _.copy(et).multiplyScalar(Y).floor(),v.copy(st).multiplyScalar(Y).floor(),L=yt;if(Rt.bindFramebuffer(I.FRAMEBUFFER,B)&&V&&Rt.drawBuffers(w,B),Rt.viewport(_),Rt.scissor(v),Rt.setScissorTest(L),rt){const xt=Lt.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,xt.__webglTexture,H)}else if(ut){const xt=Lt.get(w.texture),Tt=O||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,xt.__webglTexture,H||0,Tt)}R=-1},this.readRenderTargetPixels=function(w,O,H,V,B,rt,ut){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Lt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(_t=_t[ut]),_t){Rt.bindFramebuffer(I.FRAMEBUFFER,_t);try{const xt=w.texture,Tt=xt.format,wt=xt.type;if(!Xt.textureFormatReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-V&&H>=0&&H<=w.height-B&&I.readPixels(O,H,V,B,It.convert(Tt),It.convert(wt),rt)}finally{const xt=S!==null?Lt.get(S).__webglFramebuffer:null;Rt.bindFramebuffer(I.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(w,O,H,V,B,rt,ut){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Lt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(_t=_t[ut]),_t){const xt=w.texture,Tt=xt.format,wt=xt.type;if(!Xt.textureFormatReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-V&&H>=0&&H<=w.height-B){Rt.bindFramebuffer(I.FRAMEBUFFER,_t);const Mt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Mt),I.bufferData(I.PIXEL_PACK_BUFFER,rt.byteLength,I.STREAM_READ),I.readPixels(O,H,V,B,It.convert(Tt),It.convert(wt),0);const Jt=S!==null?Lt.get(S).__webglFramebuffer:null;Rt.bindFramebuffer(I.FRAMEBUFFER,Jt);const ce=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await lp(I,ce,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Mt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,rt),I.deleteBuffer(Mt),I.deleteSync(ce),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,O=null,H=0){w.isTexture!==!0&&(Zs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);const V=Math.pow(2,-H),B=Math.floor(w.image.width*V),rt=Math.floor(w.image.height*V),ut=O!==null?O.x:0,_t=O!==null?O.y:0;C.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,ut,_t,B,rt),Rt.unbindTexture()},this.copyTextureToTexture=function(w,O,H=null,V=null,B=0){w.isTexture!==!0&&(Zs("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],O=arguments[2],B=arguments[3]||0,H=null);let rt,ut,_t,xt,Tt,wt;H!==null?(rt=H.max.x-H.min.x,ut=H.max.y-H.min.y,_t=H.min.x,xt=H.min.y):(rt=w.image.width,ut=w.image.height,_t=0,xt=0),V!==null?(Tt=V.x,wt=V.y):(Tt=0,wt=0);const Mt=It.convert(O.format),Jt=It.convert(O.type);C.setTexture2D(O,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const ce=I.getParameter(I.UNPACK_ROW_LENGTH),de=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ke=I.getParameter(I.UNPACK_SKIP_PIXELS),Kt=I.getParameter(I.UNPACK_SKIP_ROWS),St=I.getParameter(I.UNPACK_SKIP_IMAGES),be=w.isCompressedTexture?w.mipmaps[B]:w.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,be.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,be.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,_t),I.pixelStorei(I.UNPACK_SKIP_ROWS,xt),w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,B,Tt,wt,rt,ut,Mt,Jt,be.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,B,Tt,wt,be.width,be.height,Mt,be.data):I.texSubImage2D(I.TEXTURE_2D,B,Tt,wt,rt,ut,Mt,Jt,be),I.pixelStorei(I.UNPACK_ROW_LENGTH,ce),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,de),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ke),I.pixelStorei(I.UNPACK_SKIP_ROWS,Kt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,St),B===0&&O.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Rt.unbindTexture()},this.copyTextureToTexture3D=function(w,O,H=null,V=null,B=0){w.isTexture!==!0&&(Zs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,w=arguments[2],O=arguments[3],B=arguments[4]||0);let rt,ut,_t,xt,Tt,wt,Mt,Jt,ce;const de=w.isCompressedTexture?w.mipmaps[B]:w.image;H!==null?(rt=H.max.x-H.min.x,ut=H.max.y-H.min.y,_t=H.max.z-H.min.z,xt=H.min.x,Tt=H.min.y,wt=H.min.z):(rt=de.width,ut=de.height,_t=de.depth,xt=0,Tt=0,wt=0),V!==null?(Mt=V.x,Jt=V.y,ce=V.z):(Mt=0,Jt=0,ce=0);const Ke=It.convert(O.format),Kt=It.convert(O.type);let St;if(O.isData3DTexture)C.setTexture3D(O,0),St=I.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)C.setTexture2DArray(O,0),St=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const be=I.getParameter(I.UNPACK_ROW_LENGTH),jt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),hn=I.getParameter(I.UNPACK_SKIP_PIXELS),Vi=I.getParameter(I.UNPACK_SKIP_ROWS),je=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,de.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,de.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,xt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Tt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,wt),w.isDataTexture||w.isData3DTexture?I.texSubImage3D(St,B,Mt,Jt,ce,rt,ut,_t,Ke,Kt,de.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(St,B,Mt,Jt,ce,rt,ut,_t,Ke,de.data):I.texSubImage3D(St,B,Mt,Jt,ce,rt,ut,_t,Ke,Kt,de),I.pixelStorei(I.UNPACK_ROW_LENGTH,be),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,jt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,hn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Vi),I.pixelStorei(I.UNPACK_SKIP_IMAGES,je),B===0&&O.generateMipmaps&&I.generateMipmap(St),Rt.unbindTexture()},this.initRenderTarget=function(w){Lt.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),Rt.unbindTexture()},this.resetState=function(){T=0,A=0,S=null,Rt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===tl?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===Ro?"display-p3":"srgb"}}class il{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new J(t),this.near=e,this.far=i}clone(){return new il(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class yx extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ex extends Le{constructor(t=null,e=1,i=1,r,s,o,a,c,l=Xe,u=Xe,d,f){super(null,o,a,c,l,u,r,s,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tn extends yn{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const rr=new Qt,Tu=new Qt,Is=[],wu=new Hi,bx=new Qt,Dr=new zt,Ur=new br;class _d extends zt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Tn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,bx)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,rr),wu.copy(t.boundingBox).applyMatrix4(rr),this.boundingBox.union(wu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new br),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,rr),Ur.copy(t.boundingSphere).applyMatrix4(rr),this.boundingSphere.union(Ur)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(t,e){const i=this.matrixWorld,r=this.count;if(Dr.geometry=this.geometry,Dr.material=this.material,Dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ur.copy(this.boundingSphere),Ur.applyMatrix4(i),t.ray.intersectsSphere(Ur)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,rr),Tu.multiplyMatrices(i,rr),Dr.matrixWorld=Tu,Dr.raycast(t,Is);for(let o=0,a=Is.length;o<a;o++){const c=Is[o];c.instanceId=s,c.object=this,e.push(c)}Is.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Tn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ex(new Float32Array(r*this.count),r,this.count,jc,Pn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*t;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class rl extends un{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],f=[],m=[];let g=0;const x=[],p=i/2;let h=0;E(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new xe(d,3)),this.setAttribute("normal",new xe(f,3)),this.setAttribute("uv",new xe(m,2));function E(){const y=new k,T=new k;let A=0;const S=(e-t)/i;for(let R=0;R<=s;R++){const P=[],_=R/s,v=_*(e-t)+t;for(let L=0;L<=r;L++){const D=L/r,U=D*c+a,W=Math.sin(U),z=Math.cos(U);T.x=v*W,T.y=-_*i+p,T.z=v*z,d.push(T.x,T.y,T.z),y.set(W,S,z).normalize(),f.push(y.x,y.y,y.z),m.push(D,1-_),P.push(g++)}x.push(P)}for(let R=0;R<r;R++)for(let P=0;P<s;P++){const _=x[P][R],v=x[P+1][R],L=x[P+1][R+1],D=x[P][R+1];t>0&&(u.push(_,v,D),A+=3),e>0&&(u.push(v,L,D),A+=3)}l.addGroup(h,A,0),h+=A}function M(y){const T=g,A=new $t,S=new k;let R=0;const P=y===!0?t:e,_=y===!0?1:-1;for(let L=1;L<=r;L++)d.push(0,p*_,0),f.push(0,_,0),m.push(.5,.5),g++;const v=g;for(let L=0;L<=r;L++){const U=L/r*c+a,W=Math.cos(U),z=Math.sin(U);S.x=P*z,S.y=p*_,S.z=P*W,d.push(S.x,S.y,S.z),f.push(0,_,0),A.x=W*.5+.5,A.y=z*.5*_+.5,m.push(A.x,A.y),g++}for(let L=0;L<r;L++){const D=T+L,U=v+L;y===!0?u.push(U,U+1,D):u.push(U+1,U,D),R+=3}l.addGroup(h,R,y===!0?1:2),h+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Lo extends un{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new k,f=new k,m=[],g=[],x=[],p=[];for(let h=0;h<=i;h++){const E=[],M=h/i;let y=0;h===0&&o===0?y=.5/e:h===i&&c===Math.PI&&(y=-.5/e);for(let T=0;T<=e;T++){const A=T/e;d.x=-t*Math.cos(r+A*s)*Math.sin(o+M*a),d.y=t*Math.cos(o+M*a),d.z=t*Math.sin(r+A*s)*Math.sin(o+M*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),p.push(A+y,1-M),E.push(l++)}u.push(E)}for(let h=0;h<i;h++)for(let E=0;E<e;E++){const M=u[h][E+1],y=u[h][E],T=u[h+1][E],A=u[h+1][E+1];(h!==0||o>0)&&m.push(M,y,A),(h!==i-1||c<Math.PI)&&m.push(y,T,A)}this.setIndex(m),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(x,3)),this.setAttribute("uv",new xe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class en extends Zr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new J(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new J(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zh,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Au={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Tx{constructor(t,e,i){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){const m=l[d],g=l[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const wx=new Tx;class sl{constructor(t){this.manager=t!==void 0?t:wx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}sl.DEFAULT_MATERIAL_NAME="__DEFAULT";class Ax extends sl{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Au.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Yr("img");function c(){u(),Au.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(d){u(),r&&r(d),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Rx extends sl{constructor(t){super(t)}load(t,e,i,r){const s=new Le,o=new Ax(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},i,r),s}}class xd extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new J(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Cx extends xd{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new J(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ma=new Qt,Ru=new k,Cu=new k;class Px{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new el,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Ru.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ru),Cu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cu),e.updateMatrixWorld(),Ma.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ma),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ma)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Lx extends Px{constructor(){super(new ud(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ix extends xd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new Lx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Dx{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Pu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Pu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Pu(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qc);const Ux=1.5;function Nx(n){const t=new Sx({antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio,Ux)),t.setSize(window.innerWidth,window.innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=Oh,t.toneMapping=zh,t.toneMappingExposure=1.05,t.outputColorSpace=an,n.appendChild(t.domElement);let e=null;return t.setResizeCallback=i=>{e=i},window.addEventListener("resize",()=>{t.setSize(window.innerWidth,window.innerHeight),e?.(window.innerWidth/window.innerHeight)}),t}function Fx(){const n=new cn(50,window.innerWidth/window.innerHeight,.1,500);return n.position.set(0,20,36),n}function Ds(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function oe(n,t){const e=Math.floor(n),i=Math.floor(t),r=n-e,s=t-i,o=r*r*(3-2*r),a=s*s*(3-2*s),c=Ds(e,i),l=Ds(e+1,i),u=Ds(e,i+1),d=Ds(e+1,i+1);return c*(1-o)*(1-a)+l*o*(1-a)+u*(1-o)*a+d*o*a}function ts(n){let t=n>>>0;return function(){t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function nt(n,t,e){return n<t?t:n>e?e:n}function Bt(n,t,e){return n+(t-n)*e}function ai(n,t,e,i){return Bt(n,t,1-Math.exp(-e*i))}function ne(n){const t=Math.hypot(n[0],n[1],n[2])||1;return[n[0]/t,n[1]/t,n[2]/t]}function Ye(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function At(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function se(n,t){return[n[0]+t[0],n[1]+t[1],n[2]+t[2]]}function Xn(n,t){return[n[0]-t[0],n[1]-t[1],n[2]-t[2]]}function Ui(n,t,e,i){return{x:n,y:t,z:e,p:i}}function vd(n,t){const[e,i,r]=t;return[n.x[0]*e+n.y[0]*i+n.z[0]*r+n.p[0],n.x[1]*e+n.y[1]*i+n.z[1]*r+n.p[1],n.x[2]*e+n.y[2]*i+n.z[2]*r+n.p[2]]}function We(n,t,e){const i=Xn(t,n),r=Math.hypot(i[0],i[1],i[2])||1e-4,s=[i[0]/r,i[1]/r,i[2]/r],o=Math.abs(s[1])<.97?[0,1,0]:[1,0,0],a=ne(Ye(o,s)),c=Ye(a,s);return Ui(At(a,e),At(s,r),At(c,e),n)}class we{constructor(){this.positions=[],this.colors=[],this.indices=[]}addVertex(t,e,i,r){return this.positions.push(t,e,i),this.colors.push(r[0],r[1],r[2]),this.positions.length/3-1}addTri(t,e,i){this.indices.push(t,e,i)}addQuad(t,e,i,r){this.addTri(t,e,i),this.addTri(t,i,r)}bake(t,e,i){const r=this.positions.length/3;for(let s=0;s<t.p.length;s+=3){const o=vd(e,[t.p[s],t.p[s+1],t.p[s+2]]),a=i(o[0],o[1],o[2]);this.positions.push(o[0],o[1],o[2]),this.colors.push(a[0],a[1],a[2])}for(let s=0;s<t.i.length;s++)this.indices.push(r+t.i[s])}toBufferGeometry(){const t=new un;return t.setAttribute("position",new xe(this.positions,3)),t.setAttribute("color",new xe(this.colors,3)),t.setIndex(this.indices),t.computeVertexNormals(),t}}function Mr(n,t){const e=[],i=[],r=[];for(let s=0;s<=t;s++){const o=Math.PI*s/t,a=Math.sin(o),c=Math.cos(o);for(let l=0;l<=n;l++){const u=2*Math.PI*l/n,d=a*Math.cos(u),f=c,m=a*Math.sin(u);e.push(d,f,m),i.push(d,f,m)}}for(let s=0;s<t;s++)for(let o=0;o<n;o++){const a=s*(n+1)+o,c=a+n+1;r.push(a,a+1,c,a+1,c+1,c)}return{p:e,n:i,i:r}}function Io(n){const t=[],e=[],i=[];for(let s=0;s<=n;s++){const o=2*Math.PI*s/n,a=Math.cos(o),c=Math.sin(o);t.push(a,0,c),e.push(a,0,c),t.push(a,1,c),e.push(a,0,c)}for(let s=0;s<n;s++){const o=s*2;i.push(o,o+1,o+2,o+1,o+3,o+2)}const r=t.length/3;t.push(0,0,0),e.push(0,-1,0),t.push(0,1,0),e.push(0,1,0);for(let s=0;s<n;s++){const o=2*Math.PI*s/n,a=2*Math.PI*(s+1)/n,c=t.length/3;t.push(Math.cos(o),0,Math.sin(o)),e.push(0,-1,0),t.push(Math.cos(a),0,Math.sin(a)),e.push(0,-1,0),i.push(r,c+1,c);const l=t.length/3;t.push(Math.cos(o),1,Math.sin(o)),e.push(0,1,0),t.push(Math.cos(a),1,Math.sin(a)),e.push(0,1,0),i.push(r+1,l,l+1)}return{p:t,n:e,i}}const Ox=""+new URL("bark_albedo-DReMtPgm.png",import.meta.url).href,Bx=""+new URL("tunnel-dirt_albedo-DgMZYBLi.png",import.meta.url).href,zx=""+new URL("lawn-soil_albedo-mTvxXfeR.png",import.meta.url).href,kx=""+new URL("stone_albedo-CltKTJgX.png",import.meta.url).href,Gx=""+new URL("mushroom-cap_albedo-CRHQ2riL.png",import.meta.url).href,Qs=new Float32Array(256);for(let n=0;n<256;n++){const t=n/255;Qs[n]=t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function Hx(n,t){const e=document.createElement("canvas");e.width=n.width,e.height=n.height;const i=e.getContext("2d",{willReadFrequently:!0});i.drawImage(n,0,0);const r=i.getImageData(0,0,e.width,e.height).data;let s=0,o=0,a=0;const c=e.width*e.height;for(let l=0;l<r.length;l+=4)s+=Qs[r[l]],o+=Qs[r[l+1]],a+=Qs[r[l+2]];t.set(Math.max(s/c,.001),Math.max(o/c,.001),Math.max(a/c,.001))}const Vx=new Rx;function es(n,t){const e=new k(.5,.5,.5),i=Vx.load(n,r=>{try{Hx(r.image,e)}catch(s){console.warn("albedo mean unavailable",s)}});return i.colorSpace=an,i.wrapS=i.wrapT=po,i.repeat.set(1/t,1/t),i.anisotropy=4,i.userData.meanLinear=e,i}const Wx=5,Xx=16,qx=45,Yx=12,$x=2.5;let Kx=null,jx=null,Zx=null,Jx=null,Qx=null;function Md(){return Kx||(Kx=es(Bx,Wx))}function tv(){return jx||(jx=es(Ox,Xx))}function ev(){return Zx||(Zx=es(zx,qx))}function nv(){return Jx||(Jx=es(kx,Yx))}function Sd(){return Qx||(Qx=es(Gx,$x))}const iv=`
uniform vec3 uTexMid;
uniform vec2 uTexRepeat;
uniform float uTexStrength;
varying vec3 vTexWorld;
varying vec3 vTexNormal;
vec3 gTriTex = vec3(1.0);   // filled by the <map_fragment> injection below,
                            // reused by the emissive one (which runs later)
`,rv=4,sv=`
{
  vec3 tn = normalize(vTexNormal);
  vec3 bw = pow(abs(tn), vec3(${rv.toFixed(1)}));
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
`;function yd(n,t){Object.assign(n.uniforms,t),n.vertexShader=n.vertexShader.replace("#include <common>",`varying vec3 vTexWorld;
varying vec3 vTexNormal;
#include <common>`).replace("#include <project_vertex>",`#include <project_vertex>
      vec4 texLocal = vec4(transformed, 1.0);
      vec3 texNrm = objectNormal;
      #ifdef USE_INSTANCING
        texLocal = instanceMatrix * texLocal;
        texNrm = mat3(instanceMatrix) * texNrm;
      #endif
      vTexWorld = (modelMatrix * texLocal).xyz;
      vTexNormal = mat3(modelMatrix) * texNrm;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",iv+`
#include <common>`).replace("#include <map_fragment>",sv)}function Ed(n,t){return{uTexMid:{value:n.userData.meanLinear},uTexRepeat:{value:n.repeat},uTexStrength:{value:t}}}function ns({map:n,strength:t=1,...e}){const i=new en({vertexColors:!0,roughness:.95,metalness:0,map:n,...e}),r=Ed(n,t);return i.userData.texUniforms=r,i.onBeforeCompile=s=>yd(s,r),i.userData.shaderTag="triplanar-albedo",i.customProgramCacheKey=()=>"triplanar-albedo",i}function bd({map:n,strength:t=1,emissive:e=1.6,...i}){const r=new en({vertexColors:!0,roughness:.6,metalness:0,map:n,...i}),s=Ed(n,t);return r.userData.texUniforms=s,r.onBeforeCompile=o=>{yd(o,s),o.fragmentShader=o.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
       totalEmissiveRadiance += vColor * gTriTex * ${e.toFixed(2)};`)},r.userData.shaderTag="triplanar-emissive",r.customProgramCacheKey=()=>"triplanar-emissive",r}const to=2.2,pe=-166,Oe=0,fr=7.2*to,ol=-132,vo=32,Cc=[-9,-140],ee=[13,0,-124],Pc=15,ov=2.6;function Fe(n){const t=(n-ol)/vo;return t>-1&&t<1?fr+(vo-fr)*Math.pow(Math.sqrt(1-t*t),.72):fr}function re(n,t){let e=.22*oe(n*.11+11,t*.11+5);const i=Math.hypot(n-ee[0],t-ee[2]);if(i<Pc){const r=1-i/Pc;e+=ov*r*r*(3-2*r)}return e}const Lc=[],cr=[],Td=[];function al(n,t){for(let e=0;e<Lc.length;e++){const i=Lc[e],s=Math.atan2(Math.sin(n-i.th),Math.cos(n-i.th))/i.rTh,o=(t-i.z)/i.rZ;if(s*s+o*o<1)return!0}return!1}function av(n,t){return al(t,n)?1/0:Fe(n)}function cl(){const n={};for(const t of cr)n[t.name]=t;return n}function Do(n,t){for(let s=0;s<cr.length;s++){const o=cr[s],a=n-o.origin[0],c=t-o.origin[2],l=a*o.dir[0]+c*o.dir[2];if(l<=-.5||l>=o.uMax+1)continue;const u=a*o.side[0]+c*o.side[2],d=Math.max(o.profR(nt(l,0,o.uMax))*.82-1.2,2.2);if(Math.abs(u)>=d+3)continue;const f=nt(l,-.5,o.uMax-1.2),m=nt(u,-d,d);return[o.origin[0]+o.dir[0]*f+o.side[0]*m,o.origin[2]+o.dir[2]*f+o.side[2]*m]}const e=Math.max(Fe(t)*.82-1.6,3);let i=e,r=e;for(let s=0;s<cr.length;s++){const o=cr[s],a=nt(1-Math.abs(t-o.origin[2])/o.doorFalloff,0,1);if(a<=0)continue;const c=Bt(e,Math.abs(o.origin[0])+1.5,a);o.dir[0]>0?c>i&&(i=c):c>r&&(r=c)}return[nt(n,-r,i),Math.max(t,pe+5)]}const ll=new J("#6d5130"),is=new J("#5a4226"),Bi=new J("#332412"),cv=new J("#4c5f2f"),lv=new J(cv).lerp(Bi,.62).multiplyScalar(.58);function qn(n,t,e){return new J(n).lerp(t,nt(e,0,1))}function eo(n,t,e,i){return oe(Math.cos(n)*e+t*i+37,Math.sin(n)*e+t*i*.7+91)}function ul(n){return .86*Math.pow(fr/n,.35)}function kr(n){const t=Fe(n);return 1.2+t*ul(t)*.62}function Ii(n,t,e){const i=Fe(t),r=ul(i),s=.84+.2*eo(n,t,1.6,.1)+.1*eo(n,t,4.1,.29)+.05*eo(n,t,9.3,.62),o=i*s*(1-(e||0)),a=Math.cos(n)*o,c=Math.sin(n)*o*r+kr(t),l=re(a,t);return[a,Math.max(c,l),t,s]}function uv(n,t){const e=qn(Bi,is,n*.8+.12);return qn(e,ll,t)}function hv(n){const t=qn(Bi,is,n*.8+.12);return qn(t,ll,.28+n*.18)}function dv(n){const t=qn(Bi,is,n*.75+.15);return qn(t,ll,.55)}function fv(n){const t=qn(Bi,is,n*.6+.08);return qn(t,lv,.3+n*.3)}function Sa(n,t,e,i,r,s,o,a,c,l,u,d){const f=Ii(t,e,0),m=[f[0],re(f[0],f[2]),f[2]],g=ne([Math.cos(t),0,1e-4]),x=ne(Ye([0,1,0],g)),p=r+o,h=r+o*2;function E(N){const X=(N-p)/o;return X>-1&&X<1?i+(s-i)*Math.pow(Math.sqrt(1-X*X),.72):i}function M(N){return .86*Math.pow(i/N,.35)}function y(N){const X=E(N);return 1.1+X*M(X)*.6}function T(N,X,et,st){return oe(Math.cos(N)*et+X*st+c+37,Math.sin(N)*et+X*st*.7+c+91)}function A(N,X,et){const st=E(X),yt=M(st),Nt=.84+.2*T(N,X,1.6,.1)+.1*T(N,X,4.1,.29)+.05*T(N,X,9.3,.62),$=st*Nt*(1-(et||0)),Q=Math.cos(N)*$,ht=Math.sin(N)*$*yt+y(X),ct=m[0]+g[0]*X+x[0]*Q,bt=m[2]+g[2]*X+x[2]*Q,Et=m[1]+ht,Ot=re(ct,bt);return[ct,Math.max(Et,Ot),bt,Nt]}{const N=Fe(e),X=ul(N),et=Math.asin(nt((m[1]+y(0)-kr(e))/(N*X),-.92,.92)),st=t+(Math.cos(t)>=0?et:-et);Lc.push({th:st,z:e,rTh:Math.max(.16,i*1.8/Fe(e)),rZ:i*1.7})}if(d){const N=m[0]+g[0]*1.2,X=m[2]+g[2]*1.2;Td.push({p:[N,re(N,X)+2.1,X],c:d,name:n})}const S=new we,R=1.5,P=[];for(let N=0;N<=h+1e-4;N+=R){const X=[];for(let et=0;et<a;et++){const st=2*Math.PI*et/a,yt=A(st,N,0),Nt=nt((yt[3]-.84)/.34+.45,0,1);X.push(S.addVertex(yt[0],yt[1],yt[2],u(Nt,yt[0],yt[1],yt[2]).multiplyScalar(l).toArray()))}P.push(X)}for(let N=0;N<P.length-1;N++)for(let X=0;X<a;X++){const et=(X+1)%a;S.addQuad(P[N][X],P[N][et],P[N+1][et],P[N+1][X])}const _=m[0]+g[0]*h,v=m[2]+g[2]*h,L=m[1]+y(h)*.6,D=S.addVertex(_,L,v,u(.2,_,L,v).multiplyScalar(l).toArray()),U=P[P.length-1];for(let N=0;N<a;N++)S.addTri(D,U[N],U[(N+1)%a]);const W={name:n,origin:m,dir:g,side:x,uMax:h,uEnd:p,profR:E,pointAt:A,doorFalloff:i*2.2};cr.push(W);const z=m[0]+g[0]*p,Y=m[2]+g[2]*p;return W.center=[z,re(z,Y),Y],{geometry:S.toBufferGeometry(),branch:W}}function pv(){const n=new Ee;n.name="underground";const t=Sa("granary",Math.PI,-70,3.3*to,9,13*1.5,10,30,4001,1,u=>hv(u),[.55,.4,.2]),e=Sa("brood",0,-120,4.2*to,8,17*1.5,13,34,5117,1,u=>dv(u),[.68,.5,.25]),i=Sa("midden",0,-40,2.9*to,7,10*1.5,8,26,6229,.46,u=>fv(u),[.3,.44,.28]);n.add(new zt(t.geometry,Us())),n.add(new zt(e.geometry,Us())),n.add(new zt(i.geometry,Us()));const r=new we,s=44,o=1.7,a=[];for(let u=pe;u<=3.0001;u+=o){const d=[];for(let f=0;f<s;f++){const m=2*Math.PI*f/s,g=Ii(m,u,0),x=u>-14?1+Math.pow((u+14)/17,2)*.9:1;d.push([g[0]*x,Math.max(g[1]*(x*.5+.5),re(g[0]*x,u)),u,g[3]])}a.push(d)}for(let u=0;u<a.length;u++){const d=[];for(let f=0;f<s;f++){const m=a[u][f],g=nt(1-Math.abs(m[2]-ol)/(vo*1.6),0,1),x=nt((m[3]-.84)/.34+.45,0,1),p=oe(m[0]*.13+3,m[2]*.13+8),h=uv(x,g*.45+p*.2);d.push(r.addVertex(m[0],m[1],m[2],h.toArray()))}a[u].idx=d}for(let u=0;u<a.length-1;u++)for(let d=0;d<s;d++){const f=(d+1)%s;al(2*Math.PI*d/s,a[u][d][2])||r.addQuad(a[u].idx[d],a[u].idx[f],a[u+1].idx[f],a[u+1].idx[d])}{let u=a[0].idx;const d=4;for(let m=1;m<=d;m++){const g=Math.cos(m/d*Math.PI*.5),x=pe-Math.sin(m/d*Math.PI*.5)*9,p=[];for(let h=0;h<s;h++){const E=2*Math.PI*h/s,M=a[0][h],y=.86+.28*eo(E,x*1.7,2.3,.2),T=M[0]*g*y,A=kr(pe)+(M[1]-kr(pe))*g*y,S=qn(Bi,is,.15+y*.4).multiplyScalar(.35+.3*y);p.push(r.addVertex(T,Math.max(A,re(T,x)),x,S.toArray()))}for(let h=0;h<s;h++){const E=(h+1)%s;r.addQuad(u[h],u[E],p[E],p[h])}u=p}const f=r.addVertex(0,kr(pe)*.6,pe-10,Bi.clone().multiplyScalar(.3).toArray());for(let m=0;m<s;m++)r.addTri(f,u[m],u[(m+1)%s])}const c=new zt(r.toBufferGeometry(),Us());c.name="tunnel",n.add(c);const l=Td.slice();return l.push({p:[0,5,3],c:[1.15,1.2,1.35],name:"mouth"}),{group:n,doorLights:l,rooms:{granary:t.branch,brood:e.branch,midden:i.branch}}}let ya=null;function Us(){return ya||(ya=ns({map:Md(),strength:.62,side:ue})),ya}const ye={x0:-208,x1:400,z0:0,z1:460},$r={x0:-300,x1:470,z0:0,z1:540},Gn=-4.5,Hn=n=>{const t=nt(n,0,1);return t*t*(3-2*t)},gn={edgeX:-196,bankTop:2,bankRun:15,depth:5,bedRun:30,farBankAt:68,farBankRun:46,farBankTop:24,blendRun:36};function rs(n){return gn.edgeX+2*Math.sin(n*.021)+1*Math.sin(n*.047+1.3)}function Yn(n,t){return n-rs(t)}function mv(n){if(n<=0)return Gn+(gn.bankTop-Gn)*Hn(-n/gn.bankRun);let t=Gn-gn.depth*Hn(n/gn.bedRun);return n>gn.farBankAt&&(t+=gn.farBankTop*Hn((n-gn.farBankAt)/gn.farBankRun)),t}const Lu=[{x:0,z:20,r:64,amp:-3.5},{x:62,z:78,r:62,amp:16},{x:96,z:44,r:40,amp:9},{x:88,z:168,r:78,amp:-14},{x:88,z:168,r:30,amp:4},{x:-85,z:95,r:46,amp:6},{x:-85,z:95,r:26,amp:1.5},{x:-150,z:150,r:66,amp:13},{x:-132,z:44,r:50,amp:8},{x:24,z:128,r:44,amp:-8},{x:236,z:300,r:118,amp:26},{x:300,z:214,r:88,amp:18},{x:40,z:330,r:120,amp:-5},{x:96,z:386,r:70,amp:4},{x:340,z:118,r:76,amp:-16},{x:340,z:118,r:26,amp:5},{x:384,z:328,r:92,amp:21},{x:-40,z:520,r:190,amp:38},{x:190,z:512,r:175,amp:34},{x:468,z:190,r:165,amp:34},{x:440,z:420,r:130,amp:26}];function Iu(n,t){let e=(oe(n*.012,t*.012)-.5)*4.2+(oe(n*.052,t*.052)-.5)*1.3;for(let i=0;i<Lu.length;i++){const r=Lu[i],s=Math.hypot(n-r.x,t-r.z);s>=r.r||(e+=r.amp*Hn(1-s/r.r))}return e}function Ft(n,t){if(t<Oe)return re(n,t);const e=n-rs(t),i=1-Hn(e/gn.blendRun),r=i>0?Bt(Iu(n,t),mv(-e),i):Iu(n,t),s=(1-Hn(t/26))*nt(1-Math.abs(n)/40,0,1);return s>0?Bt(r,re(n,0),s):r}function ss(n,t){return ne([Ft(n-1.4,t)-Ft(n+1.4,t),2*1.4,Ft(n,t-1.4)-Ft(n,t+1.4)])}function wr(n,t){const i=(Ft(n+1.5,t)-Ft(n-1.5,t))/3,r=(Ft(n,t+1.5)-Ft(n,t-1.5))/(2*1.5);return Math.hypot(i,r)}function fi(n,t){return t<Oe?0:Math.max(0,Gn-Ft(n,t))}const wd=.62;function hl(n,t){const e=oe(n*.006,t*.006),i=nt(oe(n*.018,t*.018)*2.3-.55+(e-.5)*.6,0,1)*(.55+.45*oe(n*.07,t*.07)),r=fi(n,t),s=Yn(n,t),o=wr(n,t);let a="soil";return r>0?a="water":s<14?a="sand":o>wd?a="rock":i>.5&&(a="moss"),{kind:a,moss:i,slope:o,depth:r,toWater:s}}function gv(n,t){const e=hl(n,t);return{y:Ft(n,t),normal:ss(n,t),slope:e.slope,soil:e.kind,moss:e.moss,waterDepth:e.depth,distToWater:e.toWater,diggable:e.depth===0&&e.slope<=wd&&e.toWater>10}}function Ic(n,t){const e=rs(t)+1;return[nt(Math.max(n,e),ye.x0,ye.x1),nt(t,ye.z0,ye.z1)]}const _v=new J("#86673B"),xv=new J("#5A4529"),vv=new J("#5F8034"),Mv=new J("#9DBE58"),Sv=new J("#A79463"),yv=new J("#4A5540"),Ev=new J("#7C7566");function _n(n,t,e){return new J(n).lerp(t,nt(e,0,1))}const Ns=6;function bv(){const{x0:n,x1:t,z0:e,z1:i}=$r,r=Math.floor((t-n)/Ns)+1,s=Math.floor((i-e)/Ns)+1,o=new we;for(let c=0;c<r;c++)for(let l=0;l<s;l++){const u=n+c*Ns,d=e+l*Ns,f=Ft(u,d),m=oe(u*.006,d*.006),g=nt(oe(u*.018,d*.018)*2.3-.55+(m-.5)*.6,0,1)*(.55+.45*oe(u*.07,d*.07));let x=_n(_n(_v,xv,oe(u*.09,d*.09)),_n(vv,Mv,oe(u*.05,d*.05)),g);const p=Yn(u,d);p<30&&(x=_n(x,Sv,Hn((30-p)/26)),f<Gn+.6&&(x=_n(x,yv,Hn((Gn+.6-f)/3.5))));const h=wr(u,d);h>.45&&(x=_n(x,Ev,Hn((h-.45)/.5)*.75)),o.addVertex(u,f,d,x.toArray())}for(let c=0;c<r-1;c++)for(let l=0;l<s-1;l++){const u=c*s+l,d=(c+1)*s+l,f=(c+1)*s+l+1,m=c*s+l+1;o.addQuad(u,d,f,m)}const a=new zt(o.toBufferGeometry(),ns({map:ev(),strength:.8,side:ue}));return a.name="lawn",a.receiveShadow=!0,a}const Tv=new J("#9CC6E4"),wv=`
uniform float uWaveTime;
vec2 waterWaveGrad(vec3 p, out float h) {
  float a = p.x * 0.085 + uWaveTime * 1.05;
  float b = p.z * 0.115 - uWaveTime * 0.77 + p.x * 0.04;
  float c = p.z * 0.031 + uWaveTime * 0.31;
  h = sin(a) * 0.24 + sin(b) * 0.17 + sin(c) * 0.30;
  return vec2(cos(a) * 0.24 * 0.085 + cos(b) * 0.17 * 0.04,
              cos(b) * 0.17 * 0.115 + cos(c) * 0.30 * 0.031);
}
`;function Av(){const{x0:n,z0:t,z1:e}=$r,i=56,r=14,s=new we,o=new J("#3E6B7A"),a=new J("#22414F");for(let d=0;d<=i;d++){const f=t+(e-t)*(d/i),m=rs(f)+1.2;for(let g=0;g<=r;g++){const x=Bt(n,m,g/r),p=nt((Gn-Ft(x,f))/6,0,1);s.addVertex(x,Gn,f,_n(o,a,p).toArray())}}for(let d=0;d<i;d++)for(let f=0;f<r;f++){const m=d*(r+1)+f;s.addQuad(m+r+1,m+r+2,m+1,m)}const c=new en({vertexColors:!0,roughness:.16,metalness:0,transparent:!0,opacity:.86,side:ue}),l={uWaveTime:{value:0},uSkyCol:{value:Tv}};c.userData.waterUniforms=l,c.userData.shaderTag="water-ripple",c.onBeforeCompile=d=>{Object.assign(d.uniforms,l),d.vertexShader=d.vertexShader.replace("#include <common>",wv+`
#include <common>`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        float wh; vec2 wg = waterWaveGrad(position, wh);
        objectNormal = normalize(vec3(-wg.x, 1.0, -wg.y));`).replace("#include <begin_vertex>",`#include <begin_vertex>
        transformed.y += wh;`),d.fragmentShader=d.fragmentShader.replace("#include <common>",`uniform vec3 uSkyCol;
#include <common>`).replace("#include <tonemapping_fragment>",`
        {
          float fres = pow(1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0), 3.0);
          gl_FragColor.rgb = mix(gl_FragColor.rgb, uSkyCol, 0.13 + 0.72 * fres);
        }
        #include <tonemapping_fragment>`)},c.customProgramCacheKey=()=>"water-ripple";const u=new zt(s.toBufferGeometry(),c);return u.name="water",u.receiveShadow=!1,{mesh:u,update(d){l.uWaveTime.value=d}}}const Rv=[{r:442,segs:96,base:-120,peak:165,seed:3.1,rough:.55,haze:.72,tint:"#8FA6C4"},{r:384,segs:96,base:-120,peak:118,seed:11.7,rough:.75,haze:.5,tint:"#6E86A6"}];function Du(n,t,e){const i=oe(Math.cos(n)*2.1+t,Math.sin(n)*2.1+t),r=oe(Math.cos(n)*5.3+t*2,Math.sin(n)*5.3+t*2),s=oe(Math.cos(n)*11+t*3,Math.sin(n)*11+t*3);return nt(.3+(i-.5)*1.5+(r-.5)*e+(s-.5)*e*.45,.05,1)}function Cv(n="#8B8399",t="#AFC8D8"){const e=new J(n),i=new J(t),r=new Ee;r.name="horizon";const s=[];for(const a of Rv){const c=new we,l=[],u=new J(a.tint),d=[],f=[],m=[];for(let x=0;x<=a.segs;x++){const p=x/a.segs*Math.PI*2,h=Du(p,a.seed,a.rough),E=a.base+(a.peak-a.base)*h,M=Math.cos(p)*a.r,y=Math.sin(p)*a.r,T=Du(p-.04,a.seed,a.rough),A=nt(.5+(h-T)*6,0,1),S=_n(u.clone().multiplyScalar(.72),u.clone().multiplyScalar(1.16),A),R=v=>{const L=_n(S,v,a.haze*.75),D=_n(S.clone().multiplyScalar(.85),v,Math.min(1,a.haze+.22));return[L,_n(L,D,.6),D]},P=R(e),_=R(i);d.push(c.addVertex(M,E,y,P[0].toArray())),f.push(c.addVertex(M,Bt(a.base,E,.45),y,P[1].toArray())),m.push(c.addVertex(M,a.base,y,P[2].toArray()));for(const v of _)l.push(v.r,v.g,v.b)}for(let x=0;x<a.segs;x++)c.addQuad(d[x],d[x+1],f[x+1],f[x]),c.addQuad(f[x],f[x+1],m[x+1],m[x]);const g=new zt(c.toBufferGeometry(),new Co({vertexColors:!0,fog:!1,side:ue,depthTest:!1,depthWrite:!1}));g.renderOrder=-1e3,g.frustumCulled=!1,r.add(g),s.push({mesh:g,base:g.geometry.attributes.color.array.slice(),alt:new Float32Array(l)})}let o=-1;return{group:r,update(a,c=0){if(r.position.set(a.position.x,0,a.position.z),!(Math.abs(c-o)<.002)){o=c;for(const l of s){const u=l.mesh.geometry.attributes.color;for(let d=0;d<u.array.length;d++)u.array[d]=l.base[d]+(l.alt[d]-l.base[d])*c;u.needsUpdate=!0}}}}}const Mo={position:new k(0,0,0),radius:.9};function Ad(n){return n<42?Math.min(Math.max(n/40,.55),1.45):Math.min(Math.max(2.1+(n-42)*.038,2.1),4.4)}function Pv(n){return Ad(n)*.5}function hi(n,t){const e=Math.cos(n.ang),i=Math.sin(n.ang),r=t*t*n.h*.26;return[n.x+e*r,n.baseY+n.h*t*(1-t*.13),n.z+i*r]}function So(n,t){const e=hi(n,t),i=hi(n,Math.min(t+.01,1)),r=ne(Xn(i,e)),s=[-Math.sin(n.ang),0,Math.cos(n.ang)],o=ne(Ye(r,s));return{pos:e,tangent:r,width:s,normal:o}}const Ea=6;function Lv(){const n=[],t=[],e=[],i=[];for(let s=0;s<=Ea;s++){const o=s/Ea;n.push(-.5,o,0,.5,o,0),t.push(o,o),e.push(-1,1)}for(let s=1;s<=Ea;s++){const o=(s-1)*2,a=o+1,c=s*2,l=c+1;i.push(o,a,l,o,l,c)}const r=new un;return r.setAttribute("position",new xe(n,3)),r.setAttribute("aT",new xe(t,1)),r.setAttribute("aSide",new xe(e,1)),r.setIndex(i),r}const Iv=new J("#5A7331"),Dv=new J("#8FB055"),Uv=new J("#C6DC82"),Uu=`
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
`;function Rd({count:n=3400,seed:t=7}={}){const e=ts(t),i=Lv(),r=new Float32Array(n*3),s=new Float32Array(n),o=new Float32Array(n),a=new Float32Array(n),c=new Float32Array(n*3),l=new Float32Array(n),u=new Float32Array(n),d=[];let f=0,m=0;for(;f<n&&m<n*8;){m++;const R=Bt($r.x0+8,ye.x1-4,e()),P=6+e()*(ye.z1-6);if(fi(R,P)>0||Math.abs(R)<16&&P<34&&e()<.82)continue;const v=.72+.28*oe(R*.01,P*.01),L=e()<.22?48+e()*60*v:(14+e()*26)*v,D=e()*Math.PI*2,U=Ft(R,P),W=new J(Dv).lerp(Uv,e());r[f*3]=R,r[f*3+1]=U,r[f*3+2]=P,s[f]=L,o[f]=D,a[f]=e()*Math.PI*2,c[f*3]=W.r,c[f*3+1]=W.g,c[f*3+2]=W.b,l[f]=Ad(L),u[f]=(e()*2-1)*.85,d.push({x:R,z:P,h:L,baseY:U,w:Pv(L),ang:D}),f++}const g=f;i.setAttribute("aBase",new Tn(r.subarray(0,g*3),3)),i.setAttribute("aH",new Tn(s.subarray(0,g),1)),i.setAttribute("aAng",new Tn(o.subarray(0,g),1)),i.setAttribute("aPhase",new Tn(a.subarray(0,g),1)),i.setAttribute("aTip",new Tn(c.subarray(0,g*3),3)),i.setAttribute("aWidth",new Tn(l.subarray(0,g),1)),i.setAttribute("aTwist",new Tn(u.subarray(0,g),1));const x=($r.x0+ye.x1)/2,p=(ye.z0+ye.z1)/2,h=Math.hypot(ye.x1-x,ye.z1-p)+120;i.boundingSphere=new br(new k(x,40,p),h);const E={uTime:{value:0},uWind:{value:.55},uAntPos:{value:new k(0,0,-9999)},uAntRadius:{value:.9},uBaseColor:{value:new J(Iv)},uOccNear:{value:5},uOccFar:{value:16},uTransl:{value:.16}},M=new en({roughness:.85,metalness:0,side:ue});M.extensions={derivatives:!0},M.onBeforeCompile=R=>{Object.assign(R.uniforms,E),R.vertexShader=R.vertexShader.replace("#include <common>",Uu+`
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
      `)};const y=new gd({depthPacking:jh,side:ue});y.onBeforeCompile=R=>{Object.assign(R.uniforms,E),R.vertexShader=R.vertexShader.replace("#include <common>",Uu+`
#include <common>`).replace("#include <begin_vertex>",`
        vec3 gPos, gNrm;
        grassShape(gPos, gNrm);
        vec3 transformed = gPos;
      `)},y.customProgramCacheKey=()=>"grass-depth";const T=new _d(i,M,g);T.name="grass",T.castShadow=!0,T.receiveShadow=!0,T.customDepthMaterial=y;const A=new Qt;for(let R=0;R<g;R++)T.setMatrixAt(R,A);T.instanceMatrix.needsUpdate=!0;function S(R,P){E.uTime.value=P,E.uAntPos.value.copy(Mo.position),E.uAntRadius.value=Mo.radius}return{mesh:T,footprints:d,update:S}}const Ht={x:-85,z:95,h:340,ang:Math.PI/2,w:22};Ht.baseY=Ft(Ht.x,Ht.z);const Nv=new J("#5a4226"),Fv=new J("#332412"),Cd=new J("#4a3418"),ba=new J(Nv).lerp(Cd,.3),Ta=new J(Fv).lerp(Cd,.55),Nu=new J("#6C8E3C"),Fu=new J("#AECB6E");function Fs(n,t,e){return new J(n).lerp(t,nt(e,0,1))}const An=.8,Ov=6.2;function Di(n){return hi(Ht,n)}function Dc(n){const t=Di(n),e=Di(Math.min(n+.01,1)),i=ne(Xn(e,t)),r=Math.abs(i[1])<.97?[0,1,0]:[1,0,0],s=ne(Ye(r,i));return{p:t,x:s,z:Ye(s,i)}}function zi(n){return Bt(Ht.w,Ov,Math.pow(nt(n,0,An)/An,.7))}const dl=An*.55,Ou=Math.PI*1.511,Bv=98,zv=36,kv=9.6,Pd=5,Uc=Dc(dl),Ld=ne(se(At(Uc.x,Math.cos(Ou)),At(Uc.z,Math.sin(Ou)))),Gv=se(Uc.p,At(Ld,zi(dl)*.7));function Gr(n){const t=1-(1-n)*(1-n);return se(Gv,se(At(Ld,n*Bv),[0,t*zv,0]))}function Id(n){return Bt(kv,Pd,nt(n,0,1))}function Dd(n){const t=Gr(nt(n-.005,0,1)),e=Gr(nt(n+.005,0,1)),i=ne(Xn(e,t)),r=ne(Ye(i,[0,1,0])),s=ne(Ye(r,i));return{pos:Gr(n),fwd:i,side:r,up:s}}const Rn={splitT:dl,point:Gr,radius:Id,basis:Dd,tipPos:Gr(1),tipRadius:Pd};Ht.walkBranch=Rn;function Bu(n){const t=new we,e=new we,i=ts(n?481001:481002),r=n?20:4,s=n?16:6,o=[];for(let g=0;g<=r;g++){const x=g/r*An,p=Dc(x),h=zi(x),E=[];for(let M=0;M<s;M++){const y=2*Math.PI*M/s,T=n?.86+.1*oe(Math.cos(y)*2.2+x*13,Math.sin(y)*2.2+x*13+30)+.06*oe(Math.cos(y)*6.4+x*29+8,Math.sin(y)*6.4+x*29+51):1,A=h*T,S=se(p.p,se(At(p.x,Math.cos(y)*A),At(p.z,Math.sin(y)*A))),R=nt((T-.86)/.2+.4,0,1),P=Fs(Ta,ba,R);E.push(t.addVertex(S[0],S[1],S[2],P.toArray()))}o.push(E)}for(let g=0;g<o.length-1;g++)for(let x=0;x<s;x++){const p=(x+1)%s;t.addQuad(o[g][x],o[g][p],o[g+1][p],o[g+1][x])}const a=Io(n?7:5),c=Mr(n?8:6,n?5:4),l=Fs(Nu,Fu,.42);function u(g,x,p){const h=x*(.9+i()*.3),E=x*(.75+i()*.25),M={x:[h,0,0],y:[0,E,0],z:[0,0,h],p:g};e.bake(c,M,()=>(n?Fs(Nu,Fu,p):l).toArray())}const d=n?10:3,f=n?10:5,m=[];for(let g=0;g<=d;g++){const x=g/d,p=Dd(x),h=Id(x),E=[];for(let M=0;M<f;M++){const y=2*Math.PI*M/f,T=n?.9+.1*oe(Math.cos(y)*2.4+x*11+100,Math.sin(y)*2.4+x*11+44):1,A=h*T,S=se(p.pos,se(At(p.side,Math.cos(y)*A),At(p.up,Math.sin(y)*A))),R=Fs(Ta,ba,nt((T-.9)/.1,0,1));E.push(t.addVertex(S[0],S[1],S[2],R.toArray()))}m.push(E)}for(let g=0;g<m.length-1;g++)for(let x=0;x<f;x++){const p=(x+1)%f;t.addQuad(m[g][x],m[g][p],m[g+1][p],m[g+1][x])}if(n){const g=Di(0),x=Ht.w;for(let h=0;h<4;h++){const E=h/4*Math.PI*2+i()*.5,M=x*1.6+i()*3,y=[g[0],g[1]+x*.7,g[2]],T=[g[0]+Math.cos(E)*M,g[1]-1.6,g[2]+Math.sin(E)*M],A=We(y,T,x*.5);t.bake(a,A,()=>Ta.toArray())}const p=5;for(let h=0;h<p;h++){const E=An*(.6+h/p*.35+i()*.03),M=Dc(E),y=h/p*Math.PI*2+i()*.7,T=ne(se(At(M.x,Math.cos(y)),At(M.z,Math.sin(y)))),A=ne(se(At(T,.7),[0,.7,0])),S=se(M.p,At(T,zi(E)*.7)),R=34+i()*22,P=se(S,At(A,R)),_=3.4+i()*1.4,v=We(S,P,_),L=new J(ba).multiplyScalar(.9);t.bake(a,v,()=>L.toArray()),u(P,30+i()*13,i()),u(se(S,At(Xn(P,S),.55)),22+i()*9,i())}u(se(Di(An),[0,12,0]),34,.5)}else u(se(Di(An),[-14,14,6]),55,.5),u(se(Di(An),[18,22,-8]),48,.5);return{bark:t.toBufferGeometry(),leaf:e.toBufferGeometry()}}const Hv=130,Vv=170;function Wv(){const n=ns({map:tv(),strength:1,roughness:.92,side:ue}),t=new en({vertexColors:!0,roughness:.92,metalness:0,side:ue}),e=Bu(!0),i=Bu(!1),r=new Ee;r.add(new zt(e.bark,n),new zt(e.leaf,t));const s=new Ee;s.add(new zt(i.bark,n),new zt(i.leaf,t));for(const l of r.children)l.castShadow=!0,l.receiveShadow=!0;for(const l of s.children)l.castShadow=!0;s.visible=!1;const o=new Ee;o.name="tree",o.add(r,s);let a=!0;function c(l){const u=Math.hypot(l.position.x-Ht.x,l.position.z-Ht.z);a&&u>Vv?a=!1:!a&&u<Hv&&(a=!0),r.visible=a,s.visible=!a}return{group:o,update:c}}const Sr=8,Xv=.3,no=[];function xn(n,t){const e={p:[n[0],n[1],n[2]],c:[t[0],t[1],t[2]],_d:0};return no.push(e),e}const bi=new Float32Array(Sr*3),Ti=new Float32Array(Sr*3),Ri=new he(0,0,0,1),yo=new he(0,1,0,0),qv={uLightPos:{value:bi},uLightCol:{value:Ti},uPitA:{value:Ri},uPitB:{value:yo}};function Yv(n,t,e,i,r){Ri.set(n,t,e,Math.max(i,.001)),yo.set(1,Math.max(r,.001),0,0)}function Nc(n,t,e){if(yo.x<.5)return 0;const i=a=>{const c=Math.min(1,Math.max(0,a));return c*c*(3-2*c)},r=Math.hypot(n-Ri.x,e-Ri.z),s=1-i((r-Ri.w*.9)/(Ri.w*.8)),o=Math.min(1,Math.max(0,(Ri.y-t)/yo.y));return s*i((o-.04)/.46)}function $v(n){const t=n.x,e=n.y,i=n.z;for(let s=0;s<no.length;s++){const o=no[s],a=o.p[0]-t,c=o.p[1]-e,l=o.p[2]-i;o._d=a*a+c*c+l*l}const r=no.slice().sort((s,o)=>s._d-o._d);for(let s=0;s<Sr;s++){const o=r[s];o?(bi[s*3]=o.p[0],bi[s*3+1]=o.p[1],bi[s*3+2]=o.p[2],Ti[s*3]=o.c[0],Ti[s*3+1]=o.c[1],Ti[s*3+2]=o.c[2]):(bi[s*3]=bi[s*3+1]=bi[s*3+2]=0,Ti[s*3]=Ti[s*3+1]=Ti[s*3+2]=0)}}function Kv(n,t,e){if(e>=Oe)return .9;const i=Math.max(0,Math.min(1,(e-pe)/(Oe-pe)));return .12+.88*Math.pow(i,1.6)}const jv=`
uniform vec3 uLightPos[${Sr}];
uniform vec3 uLightCol[${Sr}];
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
  if (w.z >= ${Oe.toFixed(1)}) return (0.82 + 0.18 * nestNoise(w.xz * 0.015)) * pit;
  float t = clamp((w.z - (${pe.toFixed(1)})) / (${(Oe-pe).toFixed(1)}), 0.0, 1.0);
  return (0.12 + 0.88 * pow(t, 1.6)) * pit;
}
`;function Uo(n){if(!n||n.userData.nestShaded)return n;n.userData.nestShaded=!0;const t=n.onBeforeCompile;n.onBeforeCompile=function(i,r){t&&t.call(this,i,r),Object.assign(i.uniforms,qv),i.vertexShader=i.vertexShader.replace("#include <common>",`varying vec3 vNestWorld;
#include <common>`).replace("#include <project_vertex>",`#include <project_vertex>
  vec4 nestLocal = vec4(transformed, 1.0);
  #ifdef USE_INSTANCING
    nestLocal = instanceMatrix * nestLocal;
  #endif
  vNestWorld = (modelMatrix * nestLocal).xyz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",jv+`
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
          reflectedLight.indirectDiffuse *= max(nestDay, ${Xv.toFixed(2)});
          vec3 nestSum = vec3(0.0);
          for (int i = 0; i < ${Sr}; i++) {
            vec3 Ld = uLightPos[i] - vNestWorld;
            float d = length(Ld);
            float att = 1.0 / (1.0 + d * d * 0.017);
            nestSum += uLightCol[i] * max(dot(normal, Ld / max(d, 0.001)), 0.0) * att;
          }
          reflectedLight.directDiffuse += diffuseColor.rgb * nestSum;
        }
      `)};const e=n.userData.shaderTag||"";return n.customProgramCacheKey=()=>"nest-shading|"+e,n.needsUpdate=!0,n}const Be=n=>new J(n).toArray(),Qe=(n,t)=>[n[0]*t,n[1]*t,n[2]*t],ei=(n,t,e,i)=>[n[0]*t,n[1]*e,n[2]*i],ii=(n,t,e)=>[Bt(n[0],t[0],e),Bt(n[1],t[1],e),Bt(n[2],t[2],e)],Zv=Be("#6d5130"),Jv=Be("#5a4226"),Hr=Be("#332412"),io=Be("#4c5f2f"),wa=Be("#6a6154"),Qv="#5E4526",tM=Be("#4a3418"),zu=Be(Qv),ku=Be("#efdcb0"),Gu=Be("#7a6040"),eM=Be("#ffc46a"),Aa=Be("#c497d9"),nM=Be("#e0a752"),Hu=ii(Be("#e07356"),Be("#e6b558"),.5),iM=Be("#9db0d8"),rM=Qe(ii(io,Hr,.62),.58),sM=Qe(Hr,.7),Ra=[.72,.48,1.75],oM=[1.95,1.2,.52],ci=[],kn=[];function Ud(n){return n.r*.65}function aM(n){const t=new we,e=new we,i=new we,r=ts(20260812),s=Mr(10,7),o=Mr(6,4),a=Io(8),c=(T,A,S,R)=>Ui([T,0,0],[0,A,0],[0,0,S],R);{const S=[];for(let R=0;R<=9;R++){const P=[];for(let _=0;_<=30;_++){const v=2*Math.PI*_/30,L=Pc*1.02*R/9,D=ee[0]+Math.cos(v)*L,U=ee[2]+Math.sin(v)*L,W=re(D,U)+.08,z=ii(Zv,Jv,nt(.3+oe(D*.2,U*.2)*.5,0,1));P.push(t.addVertex(D,W,U,Qe(z,.65+.35*(1-R/9))))}S.push(P)}for(let R=0;R<9;R++)for(let P=0;P<30;P++)t.addQuad(S[R][P],S[R][P+1],S[R+1][P+1],S[R+1][P])}const l=Qe(tM,.8);function u(T,A,S,R,P,_){let L=null;for(let D=0;D<=8;D++){const U=D/8,W=Math.sin(U*Math.PI),z=Bt(A,S,U),Y=Ii(z,T+_*W,P*W);L&&t.bake(a,We(L,Y,R*(.65+.5*W)),()=>l),L=Y}}for(let T=0;T<30;T++){const A=pe+8+r()*(Math.abs(pe)-16),S=Math.PI*(.15+r()*.7);u(A,S,S+.5+r()*1.3,.5+r()*.9,.06+r()*.16,(r()-.5)*9)}const d=Qe(zu,.55);for(let T=0;T<150;T++){const A=pe+5+r()*(Math.abs(pe)-10),S=Math.PI*(.18+r()*.64),R=Ii(S,A,.02),P=1.2+r()*(Fe(A)>16?7:3),_=[R[0]+(r()-.5)*.8,R[1]-P,R[2]+(r()-.5)*.8];t.bake(a,We(R,_,.09+r()*.1),()=>d)}for(let T=0;T<520;T++){const A=pe+3+r()*(Math.abs(pe)-5),S=r()*Math.PI*2,R=Ii(S,A,.01),P=.22+r()*.55,_=Qe(Gu,(.7+r()*.7)*(.5+r()*.5));t.bake(o,c(P,P*.8,P,R),()=>_)}for(let T=0;T<120;T++){const A=pe+5+r()*(Math.abs(pe)-8),S=Fe(A)*.7,R=(r()-.5)*2*S,P=.3+r()*.9,_=Qe(wa,(.6+r()*.8)*.8);i.bake(o,c(P*1.3,P*.7,P*1.1,[R,re(R,A)+P*.3,A]),()=>_)}function f(T,A,S,R,P,_,v){if(Math.hypot(T-Cc[0],A-Cc[1])<15)return;const L=ei(P,.3,.28,.4),D=v||ei(P,.95,.62,1.15);for(let U=0;U<S;U++){const W=T+(r()-.5)*7,z=A+(r()-.5)*7,Y=R*(.45+r()*.9),N=re(W,z),X=[W,N+1.7*Y,z];t.bake(a,We([W,N,z],X,.22*Y),()=>L),e.bake(s,c(1.15*Y,.8*Y,1.15*Y,X),()=>D),ci.push({x:W,z,r:1.15*Y+.5})}xn([T,re(T,A)+2.4,A],_)}for(let T=0;T<9;T++){const A=-14-T*10.5;f((T%2?1:-1)*(3.5+r()*1.8),A,4+Math.floor(r()*4),1.3,Aa,Ra)}for(let T=0;T<8;T++){const A=r()*Math.PI*2,S=17+r()*9;let R=ee[0]+Math.cos(A)*S;const P=ee[2]+Math.sin(A)*S,_=Fe(P)*.72;Math.abs(R)>_&&(R=Math.sign(R)*_),f(R,P,5+Math.floor(r()*5),1.9,Aa,Ra)}const m=Qe(zu,.36),g=ei(eM,1.25,1.15,1.4);for(let T=0;T<26;T++){const A=Math.PI*(.2+r()*.6),S=ol+(r()-.5)*vo*1.5,R=Ii(A,S,.03),P=[R[0],R[1]-(3+r()*11),R[2]];t.bake(a,We(R,P,.07),()=>m);const _=.55+r()*.75;e.bake(s,c(_,_*1.25,_,P),()=>g),T%3===0&&xn(P,oM)}const x=ei(ku,.76,.7,.58);for(let T=0;T<5;T++){const A=Math.PI*(.15+T*.42),S=8+r()*5,R=ee[0]+Math.cos(A)*S,P=ee[2]+Math.sin(A)*S;for(let _=0;_<22;_++){const v=R+(r()-.5)*5.5,L=P+(r()-.5)*5.5,D=.5+r()*.35;t.bake(s,c(D*.72,D*.72,D*1.5,[v,re(v,L)+D*.6,L]),()=>x)}xn([R,re(R,P)+1.5,P],[.55,.42,.22])}if(xn([ee[0],re(ee[0],ee[2])+9,ee[2]],[1.5,1.05,.5]),n&&n.granary){const T=n.granary;for(let S=0;S<5;S++){const R=(r()-.5)*Math.PI*1.6,P=nt(T.uEnd+(r()-.5)*T.uMax*.5,T.uMax*.42,T.uMax*.96),_=T.pointAt(R,P,.12);for(let v=0;v<26;v++){const L=_[0]+(r()-.5)*4.5,D=_[2]+(r()-.5)*4.5,U=.5+r()*1.3,W=nt(1-Math.hypot(L-_[0],D-_[2])/4.5,0,1),z=Qe(ii(ii(nM,Hu,r()*.4),Hr,W*.5),.55+.35*(1-W));t.bake(o,c(U,U*.85,U,[L,re(L,D)+U*.4,D]),()=>z)}}const A=ei(Hu,.94,.81,.51);for(let S=0;S<10;S++){const R=(r()-.5)*Math.PI*1.5,P=nt(T.uEnd+(r()-.5)*T.uMax*.55,4,T.uMax-2),_=r()<.5,v=T.pointAt(R,P,_?.85:.06),L=.5+r()*.7,D=_?v[1]-L*(.6+r()*1.6):re(v[0],v[2])+L*.55;t.bake(s,c(L*.8,L*1.3,L*.8,[v[0],D,v[2]]),()=>A)}for(let S=0;S<2;S++){const R=T.pointAt(0,2+r()*4,.3);xn([R[0],re(R[0],R[2])+2.2,R[2]],[.42,.3,.14])}}if(n&&n.brood){const T=n.brood,A=[.34,.5,.68],S=[1,1.55,1.15],R=ei(iM,.42,.4,.46);for(let P=0;P<7;P++){const _=(r()-.5)*Math.PI*1.7,v=nt(T.uEnd+(r()-.5)*T.uMax*.6,T.uMax*.32,T.uMax*.97),L=T.pointAt(_,v,.1),D=re(L[0],L[2]),U=14+Math.floor(r()*14);for(let W=0;W<U;W++){const z=Math.floor(r()*3),Y=A[z]+r()*.22,N=L[0]+(r()-.5)*4.6,X=L[2]+(r()-.5)*4.6,et=(.85+r()*.25)*.85,st=ei(ku,et,et*.94,et*.8);t.bake(s,c(Y*.75,Y*.75,Y*1.5*S[z],[N,re(N,X)+Y*.6,X]),()=>st)}if(P%2===0){const W=4+Math.floor(r()*3);for(let z=0;z<W;z++){const Y=r()*Math.PI*2,N=Y+1.4+r()*1.2,X=2.2+r()*1.2,et=[L[0]+Math.cos(Y)*X,D+.5+r()*1,L[2]+Math.sin(Y)*X],st=[L[0]+Math.cos(N)*X,D+.5+r()*1,L[2]+Math.sin(N)*X];t.bake(a,We(et,st,.03),()=>R)}}xn([L[0],D+1.6,L[2]],[.62,.46,.24])}for(let P=0;P<2;P++){const _=(r()-.5)*Math.PI*1.4,v=nt(T.uEnd+(r()-.5)*T.uMax*.4,4,T.uMax-2),L=T.pointAt(_,v,.1);f(L[0],L[2],2+Math.floor(r()*2),1.1,Aa,Ra)}}if(n&&n.midden){const T=n.midden,A=ii(io,Hr,.5),S=Qe(ii(io,Hr,.3),3.5),R=[.3,.46,.3];for(let v=0;v<3;v++){const L=(r()-.5)*Math.PI*1.6,D=nt(T.uEnd+(r()-.5)*T.uMax*.5,4,T.uMax-2),U=T.pointAt(L,D,.08);f(U[0],U[2],3+Math.floor(r()*3),1,A,R,S)}for(let v=0;v<4;v++){const L=(r()-.5)*Math.PI*1.7,D=nt(T.uEnd+(r()-.5)*T.uMax*.55,3,T.uMax-1.5),U=T.pointAt(L,D,.1);for(let W=0;W<20;W++){const z=U[0]+(r()-.5)*5,Y=U[2]+(r()-.5)*5,N=.4+r()*1.1,X=Qe(r()<.5?wa:Gu,(.3+r()*.35)*.55);i.bake(o,c(N*1.2,N*.7,N,[z,re(z,Y)+N*.3,Y]),()=>X)}}const P=Qe(sM,.5);for(let v=0;v<5;v++){const L=(r()-.5)*Math.PI*1.6,D=nt(T.uEnd+(r()-.5)*T.uMax*.5,3,T.uMax-1.5),U=T.pointAt(L,D,.12),W=re(U[0],U[2]),z=2.2+r()*2.2,Y=r()*Math.PI*2;t.bake(a,We([U[0],W+.35,U[2]],[U[0]+Math.cos(Y)*z,W+.3,U[2]+Math.sin(Y)*z],.55+r()*.35),()=>P)}const _=ei(rM,.3,.36,.3);for(let v=0;v<6;v++){const L=(r()-.5)*Math.PI*1.6,D=nt(T.uEnd+(r()-.5)*T.uMax*.55,3,T.uMax-1.5),U=T.pointAt(L,D,.05),W=1+r()*1.6;t.bake(s,c(W,.12,W,[U[0],re(U[0],U[2])+.03,U[2]]),()=>_)}}for(let T=0;T<42;T++){const A=-200+r()*380,S=8+r()*250;if(fi(A,S)>0||Yn(A,S)<4)continue;const R=2+r()*6,P=1.5+r()*4,_=2+r()*6,v=Ft(A,S)+P*.35,L=.75+r()*.5,D=r()*40,U=r()<.6?.5+r()*.5:0;i.bake(s,c(R,P,_,[A,v,S]),(W,z,Y)=>{const N=Qe(wa,L);if(U<=0)return N;const X=nt((z-v)/P+.15*oe(W*.3+D,Y*.3+D),0,1);return ii(N,io,X*X*U)}),kn.push({x:A,z:S,r:(R+_)*.5+1})}const p=new Ee;p.name="nest-decor";const h=new zt(t.toBufferGeometry(),new en({vertexColors:!0,roughness:.92,metalness:0,side:ue}));h.name="nest-decor-matte",p.add(h);const E=new zt(i.toBufferGeometry(),ns({map:nv(),strength:1,roughness:.92,side:ue}));E.name="nest-decor-stone",E.castShadow=!0,E.receiveShadow=!0,p.add(E);const M=bd({map:Sd(),strength:.7,emissive:.95,color:7829367,side:ue}),y=new zt(e.toBufferGeometry(),M);return y.name="nest-decor-glow",p.add(y),{group:p,mushrooms:ci,rocks:kn}}const Ca=new J("#b07226").toArray(),Nr=new J("#5e3d16").toArray(),Vu=new J("#100c06").toArray(),De=2.4,cM=2.7,lM=2.9;function uM(n,t,e,i,r){const s=Xn(t,n),o=Math.hypot(s[0],s[1],s[2]),a=nt(o,.05,e+i-.02),c=At(s,1/(o||1)),l=(e*e-i*i+a*a)/(2*a),u=Math.sqrt(Math.max(e*e-l*l,0)),d=r[0]*c[0]+r[1]*c[1]+r[2]*c[2],f=ne(Xn(r,At(c,d)));return se(se(n,At(c,l)),At(f,u))}function Wu(n){const t=new un;return t.setAttribute("position",new xe(n.p,3)),t.setAttribute("normal",new xe(n.n,3)),t.setIndex(n.i),t}function Xu(n,t){n.matrix.set(t.x[0],t.y[0],t.z[0],t.p[0],t.x[1],t.y[1],t.z[1],t.p[1],t.x[2],t.y[2],t.z[2],t.p[2],0,0,0,1),n.matrixWorldNeedsUpdate=!0}function hM(){const n=new Ee;n.name="queen";const t=[ee[0],re(ee[0],ee[2]),ee[2]],e=Math.PI,i=[Math.sin(e),0,Math.cos(e)],r=[0,1,0],s=ne(Ye(r,i)),o=Ui(s,r,i,[t[0],t[1]+1.05*De,t[2]]),a=R=>vd(o,At(R,De)),c=Mr(12,9),l=Io(8),u=new we,d=(R,P,_,v)=>Ui(At(s,P*De),At(r,_*De),At(i,v*De),a(R)),f=(R,P,_,v,L)=>u.bake(c,d(R,P,_,v),()=>L),m=(R,P,_,v)=>u.bake(l,We(R,P,_),()=>v);f([0,1.5,-1.2],.5,.5,.62,Nr),f([0,1.62,.5],1.06,1.02,1.75,Ca),f([0,1.66,2.7],1.18,1.02,1.12,Ca),f([.76,2.12,3.1],.3,.26,.3,Vu),f([-.76,2.12,3.1],.3,.26,.3,Vu);for(let R=-1;R<=1;R+=2)m(a([R*.55,1.45,3.5]),a([R*.34,1.2,4.8]),.17*De,Ca);const g=[[.92,1.5,1.7],[-.92,1.5,1.7],[1.02,1.4,.4],[-1.02,1.4,.4],[.92,1.4,-1.15],[-.92,1.4,-1.15]],x=[[4.1,0,3.9],[-4.1,0,3.9],[4.9,0,.3],[-4.9,0,.3],[4.5,0,-3.5],[-4.5,0,-3.5]];for(let R=0;R<6;R++){const P=a(g[R]),_=a(x[R]);_[1]=re(_[0],_[2]);const v=g[R][0]>0?s:At(s,-1),L=uM(P,_,cM*De,lM*De,ne(se(r,At(v,.75))));m(P,L,.2*De,Nr),m(L,_,.14*De,Nr),u.bake(c,Ui([.3*De,0,0],[0,.3*De,0],[0,0,.3*De],L),()=>Nr)}const p=new en({vertexColors:!0,roughness:.45,metalness:.05}),h=new zt(u.toBufferGeometry(),p);h.name="queen-body",h.castShadow=!0,n.add(h);const E=Wu(c),M=Wu(l),y=new en({color:new J().fromArray(Nr),roughness:.45,metalness:.05}),T=[{local:[0,1.5,-5.4],rx:1.34,ry:1.3,rz:1.9},{local:[0,1.55,-3.2],rx:1.6,ry:1.54,rz:2.1}].map(R=>{const P=new zt(E,y);return P.matrixAutoUpdate=!1,P.castShadow=!0,n.add(P),{mesh:P,...R}}),A=[];for(let R=-1;R<=1;R+=2)for(let P=0;P<2;P++){const _=new zt(M,y);_.matrixAutoUpdate=!1,n.add(_),A.push({mesh:_,sA:R,seg:P})}function S(R){const P=1+Math.sin(R*.55)*.04;for(const _ of T)Xu(_.mesh,d(_.local,_.rx*P,_.ry*P,_.rz));for(const _ of A){const v=Math.sin(R*1.1+(_.sA>0?0:1.3))*.35,L=a([_.sA*.58,2.1,3.2]),D=a([_.sA*(1.4+v*.3),3.3,4.2]),U=a([_.sA*(1.85+v),3.2+v*.4,6.1]);Xu(_.mesh,_.seg===0?We(L,D,.14*De):We(D,U,.11*De))}}return S(0),{group:n,update:S}}const fl={sunDir:ne([-300,120,195]),sunColor:15251852,sunIntensity:5.4,hemiSky:7241640,hemiGround:4867376,hemiIntensity:1.15,fog:8221832,fogNear:95,fogFar:420,sky:10130344,exposure:1.3},pl={sunDir:ne([30,45,20]),sunColor:16767370,sunIntensity:2.5,hemiSky:12572917,hemiGround:7236152,hemiIntensity:.85,fog:11520216,fogNear:90,fogFar:420,sky:10274532,exposure:1.15};let Vr=0;function No(){return Vr}function Nd(n){Vr=n<0?0:n>1?1:n}const bn=[0,1,0];function Fo(){const n=fl.sunDir,t=pl.sunDir;bn[0]=n[0]+(t[0]-n[0])*Vr,bn[1]=n[1]+(t[1]-n[1])*Vr,bn[2]=n[2]+(t[2]-n[2])*Vr;const e=Math.hypot(bn[0],bn[1],bn[2])||1;return bn[0]/=e,bn[1]/=e,bn[2]/=e,bn}const dM=56;function qu(n,t,e,i,r,s,o,a){const c=i-n,l=r-t,u=s-e,d=c*a[0]+l*a[1]+u*a[2];if(d<=0)return 0;const f=c*c+l*l+u*u-d*d,m=Math.sqrt(f>0?f:0),g=o*.35+d*.06,x=nt((o+g-m)/g,0,1);return x*x*(3-2*x)}function fM(n,t,e,i){const r=Math.hypot(i[0],i[2]);if(r<1e-4)return 0;const s=i[0]/r,o=i[2]/r,a=Ht.x-n,c=Ht.z-e,l=a*s+c*o;if(l<=0)return 0;const u=Math.abs(a*o-c*s);if(t+i[1]/r*l>Ht.baseY+Ht.h*An)return 0;const f=Ht.w*.4+l*.05,m=nt((Ht.w+f-u)/f,0,1);return m*m*(3-2*m)}function pM(n,t,e,i){const r=Math.hypot(i[0],i[2]);if(r<1e-4)return 0;const s=i[0]/r,o=i[2]/r,a=i[1]/r,c=Math.min(170,34/a+14);let l=0;for(let u=2.5;u<c;u*=1.38){const f=Ft(n+s*u,e+o*u)-(t+a*u+.5);if(f<=0)continue;const m=1.2+u*.05,g=nt(f/m,0,1);if(g>l&&(l=g),l>=1)break}return l}function Fd(n,t){if(t<Oe)return 1;const e=Fo(),i=Ft(n,t),r=ss(n,t),s=nt((r[0]*e[0]+r[1]*e[1]+r[2]*e[2])/Math.max(e[1],.001),0,1);let o=pM(n,i,t,e);if(o<1){const a=i+1.2;o=Math.max(o,fM(n,a,t,e));const c=Di(An);o=Math.max(o,qu(n,a,t,c[0],c[1]+14,c[2],dM,e));for(let l=0;l<kn.length&&o<1;l++){const u=kn[l],d=u.r*.8;o=Math.max(o,qu(n,a,t,u.x,Ft(u.x,u.z)+d*.45,u.z,d,e))}}return nt(1-s*(1-o),0,1)}const li=[],Od=new Map,mM=["graine","brindille","miellat"],gM={graine:4,brindille:3,miellat:5},_M={graine:5,brindille:6,miellat:5},xM=[.88,.66,.32],vM=[.55,.38,.18],MM=[.42,.32,.19],Yu=[.24,.18,.1],SM=[.94,.74,.36],yM=[.78,.5,.2],EM=new J("#4A4438"),ml=(n,t,e)=>[Bt(n[0],t[0],e),Bt(n[1],t[1],e),Bt(n[2],t[2],e)];function bM(n,t,e,i,r){const s=new we,o=[];for(let a=0;a<=i;a++){const c=a/i,l=[],u=t(c);for(let d=0;d<e;d++){const f=2*Math.PI*d/e;l.push(s.addVertex(Math.cos(f)*u,c*n,Math.sin(f)*u,r(c,f)))}o.push(l)}for(let a=0;a<i;a++)for(let c=0;c<e;c++){const l=(c+1)%e;s.addQuad(o[a][c],o[a][l],o[a+1][l],o[a+1][c])}return s}function TM(){return bM(7,t=>Math.pow(Math.sin(Math.PI*t),.62)*2*(1-.3*t),7,5,(t,e)=>ml(vM,xM,nt(.25+.75*Math.pow(Math.abs(Math.cos(e*.5)),1.5)*(.4+.6*t),0,1))).toBufferGeometry()}function wM(){const n=new we,t=Io(5),e=[[0,0,0],[.6,5.5,.4],[2.4,10.6,.2]];for(let i=0;i<2;i++)n.bake(t,We(e[i],e[i+1],.62-i*.16),(r,s)=>ml(Yu,MM,nt(.55+.25*Math.sin(s*1.7),0,1)));return n.bake(t,We([.6,5.5,.4],[-2.6,8.2,-1.1],.33),()=>Yu),n.toBufferGeometry()}function AM(){const n=new we,t=Mr(6,3),e=[[0,.9,0,2.6,1.5,2.2],[2.4,.6,1.1,1.7,1,1.5],[-1.6,.7,1.6,1.9,1.2,1.7]];for(const i of e)n.bake(t,Ui([i[3],0,0],[0,i[4],0],[0,0,i[5]],[i[0],i[1],i[2]]),(r,s)=>ml(yM,SM,nt((s-i[1])/(i[4]*2)+.55,0,1)));return n.toBufferGeometry()}const Wr=(n,t)=>n>=t?0:Math.pow(1-n/t,1.5);function RM(n,t){if(fi(n,t)>0||Yn(n,t)<10)return 0;let e=.16;return e+=1.05*Wr(Math.hypot(n-Ht.x,t-Ht.z),78),e+=.85*Wr(Math.hypot(n-88,t-168),74),e+=.7*Wr(Math.hypot(n-24,t-128),46),e*nt(1-(wr(n,t)-.16)/.5,.12,1)}const CM=2;function PM(n,t,e){const i=Math.hypot(n-Ht.x,t-Ht.z)<85,r=e();return i?r<.55?"brindille":r<.85?"miellat":"graine":Wr(Math.hypot(n-88,t-168),74)+Wr(Math.hypot(n-24,t-128),46)>.25?r<.6?"graine":r<.85?"miellat":"brindille":r<.5?"graine":r<.8?"brindille":"miellat"}const $u=32;function LM(n=90210){const t=ts(n),e=ye;let i=0,r=0,s=1;for(;i<$u&&r++<$u*200;){const o=Bt(e.x0+14,e.x1-14,t()),a=Bt(e.z0+16,e.z1-14,t());if(t()*CM>RM(o,a))continue;const c=PM(o,a,t),l=3+Math.floor(t()*4);let u=0;for(let d=0;d<l*3&&u<l;d++){const f=t()*Math.PI*2,m=Math.sqrt(t())*12,g=o+Math.cos(f)*m,x=a+Math.sin(f)*m;if(fi(g,x)>0||Yn(g,x)<10||wr(g,x)>.7)continue;const p=Math.max(1,gM[c]+Math.round((t()-.5)*2)),h={id:s++,x:g,z:x,kind:c,amount:p,r:_M[c],amount0:p,yaw:t()*Math.PI*2,tilt:(t()-.5)*.5,size:.75+t()*.5,_slot:-1};li.push(h),Od.set(h.id,h),u++}u&&i++}}const Bd={},Ku=new Qt,ju=new Er,Zu=new En,Ju=new k,Qu=new k,th=new J;function zd(n){const t=Bd[n.kind];if(!t||n._slot<0)return;const e=n.amount0>0?n.amount/n.amount0:0,i=n.size*Bt(.45,1,Math.pow(e,.6)),r=ss(n.x,n.z);Zu.set(n.tilt-Math.atan2(r[2],r[1])*.6,n.yaw,n.tilt+Math.atan2(r[0],r[1])*.6),ju.setFromEuler(Zu),Ju.set(n.x,Ft(n.x,n.z)-.35*i,n.z),Qu.set(i,i,i),Ku.compose(Ju,ju,Qu),t.setMatrixAt(n._slot,Ku),th.set(1,1,1).lerp(EM,(1-e)*.8),t.setColorAt(n._slot,th),t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0)}function kd(n,t=1){const e=Od.get(n);if(!e||e.amount<=0||!(t>0))return 0;const i=Math.min(t,e.amount);return e.amount-=i,zd(e),i}function IM(n,t,e=12,i=!1){const r=[];for(const s of li)!i&&s.amount<=0||Math.hypot(s.x-n,s.z-t)<=e&&r.push(s);return r}function DM(){const n=new Ee;n.name="resources",li.length===0&&LM();const t={graine:TM(),brindille:wM(),miellat:AM()},e=new en({vertexColors:!0,roughness:.9,metalness:0}),i=new en({vertexColors:!0,roughness:.22,metalness:0});for(const r of mM){const s=li.filter(c=>c.kind===r),o=Math.max(s.length,1),a=new _d(t[r],r==="miellat"?i:e,o);a.name="resource-"+r,a.castShadow=!0,a.receiveShadow=!0,a.count=s.length,a.instanceColor=new Tn(new Float32Array(o*3).fill(1),3),a.frustumCulled=!1,Bd[r]=a,s.forEach((c,l)=>{c._slot=l,zd(c)}),n.add(a)}return{group:n,nodes:li}}const Xr=4.2,Ci=15,gl=14,Bn=8,eh=.22,lr=1.6,ro=17,UM=18,NM=.62,so=new J("#6d5130"),FM=new J("#5a4226"),Pa=new J("#332412"),OM=new J("#e0a752"),BM=new J("#efdcb0"),zM=new J("#ffc46a"),oo=[.55,.62,.82],kM=[1.05,.62,.24],La=[.85,.55,.22],Ia=[1.95,1.2,.52],Fc=6;let Oc=null,_e=null;const zr=(n,t,e)=>new J(n).lerp(t,nt(e,0,1));function GM(n){Oc=n}function _l(){return _e?{x:_e.x,z:_e.z}:null}function Gd(){return _e}function xl(n,t){if(_e)return{ok:!1,reason:"already-founded"};if(t<Oe)return{ok:!1,reason:"underground"};const e=ye;return n<e.x0+ro||n>e.x1-ro||t>e.z1-ro?{ok:!1,reason:"bounds"}:Math.abs(n)<34&&t<34?{ok:!1,reason:"occupied"}:fi(n,t)>0?{ok:!1,reason:"water"}:Yn(n,t)<UM?{ok:!1,reason:"water"}:wr(n,t)>NM?{ok:!1,reason:"slope"}:hl(n,t).kind==="rock"?{ok:!1,reason:"rock"}:{ok:!0}}function HM(n,t,e){const i=(r,s)=>oe(Math.cos(n)*r+t*s+e+37,Math.sin(n)*r+t*s*.7+e+91);return .84+.2*i(1.6,.1)+.1*i(4.1,.29)+.05*i(9.3,.62)}function VM(n){const t=Ci+Bn,e=(n-t)/Bn;return e>-1&&e<1?Xr+(gl-Xr)*Math.pow(Math.sqrt(1-e*e),.72):Xr}function WM(n,t,e){const i=Ft(n,t),r=(oe(n*.07,t*.07)-.5)*Math.PI*2,s=ne([Math.cos(r)*eh,-1,Math.sin(r)*eh]),o=ne(Ye(s,[0,0,1])),a=ne(Ye(s,o)),c=[n,i+lr,t],l=Ci+2*Bn,u=i+lr-(Ci+Bn*.92),d=22;function f(y,T){const A=HM(y,T,e),S=VM(T)*A,R=c[0]+s[0]*T,P=c[1]+s[1]*T,_=c[2]+s[2]*T,v=R+(o[0]*Math.cos(y)+a[0]*Math.sin(y))*S,L=P+(o[1]*Math.cos(y)+a[1]*Math.sin(y))*S,D=_+(o[2]*Math.cos(y)+a[2]*Math.sin(y))*S;return[v,Math.max(L,u),D,A]}const m=new we,g=[];for(let y=0;y<=l+1e-4;y+=1.5){const T=[];for(let A=0;A<d;A++){const S=2*Math.PI*A/d,R=f(S,y),P=nt((R[3]-.84)/.34+.45,0,1),_=zr(Pa,FM,P*.8+.1).lerp(so,.18+P*.14).multiplyScalar(.88);T.push(m.addVertex(R[0],R[1],R[2],_.toArray()))}g.push(T)}for(let y=0;y<g.length-1;y++)for(let T=0;T<d;T++){const A=(T+1)%d;m.addQuad(g[y][T],g[y][A],g[y+1][A],g[y+1][T])}const x=g[g.length-1],p=m.addVertex(c[0]+s[0]*l,u,c[2]+s[2]*l,zr(Pa,so,.35).toArray());for(let y=0;y<d;y++)m.addTri(p,x[y],x[(y+1)%d]);const h=8,E=[];for(let y=0;y<=h;y++){const T=y/h,A=Bt(Xr*1.02,ro,T),S=[];for(let R=0;R<=d;R++){const P=2*Math.PI*(R%d)/d,_=n+Math.cos(P)*A,v=t+Math.sin(P)*A,L=.75+.5*oe(_*.16+e,v*.16+e),D=lr*Math.pow(1-T,1.5)*L+.9*Math.sin(Math.PI*Math.min(1,T*1.35))*L,U=Bt(i+lr,Ft(_,v),Math.pow(T,.7))+(T>0?D*.75:0),W=zr(zr(so,Pa,.35+.3*(1-T)),OM,.12).multiplyScalar(.82+.25*L);S.push(m.addVertex(_,U,v,W.toArray()))}E.push(S)}for(let y=0;y<h;y++)for(let T=0;T<d;T++)m.addQuad(E[y][T],E[y][T+1],E[y+1][T+1],E[y+1][T]);const M=c[1]+s[1]*(Ci+Bn);return{geometry:m.toBufferGeometry(),mouthY:i,floorY:u,origin:c,dir:s,uMax:l,chamber:{x:c[0]+s[0]*(Ci+Bn),y:u,z:c[2]+s[2]*(Ci+Bn),ceilY:M+Bn*.55,r:gl}}}function XM(n,t){const e=ts(t^23505),i=Mr(8,5),r=(g,x,p,h)=>Ui([g,0,0],[0,x,0],[0,0,p],h),s=n.chamber,o=[],a=Uo(new en({vertexColors:!0,roughness:.85,metalness:0,side:ue}));for(let g=0;g<Fc;g++){const x=g/Fc*Math.PI*2+e()*.5,p=s.r*(.28+e()*.34),h=s.x+Math.cos(x)*p,E=s.z+Math.sin(x)*p,M=new we,y=5+Math.floor(e()*5);for(let S=0;S<y;S++){const R=e()*Math.PI*2,P=Math.sqrt(e())*2.6,_=h+Math.cos(R)*P,v=E+Math.sin(R)*P,L=.75+e()*.45;M.bake(i,r(L*1.25,L*.85,L,[_,s.y+L*.7,v]),(D,U)=>zr(BM,so,nt(.55-(U-s.y)*.25,0,1)).toArray())}const T=new zt(M.toBufferGeometry(),a);T.name="nest-brood-"+g,T.visible=!1,T.castShadow=!1;const A=xn([h,s.y+2.2,E],[0,0,0]);o.push({mesh:T,lamp:A,on:!1})}const c=new we,l=s.x+(e()-.5)*6,u=s.z+(e()-.5)*6,d=s.ceilY-3.2;c.bake(i,r(1.5,1.8,1.5,[l,d,u]),()=>zM.toArray());const f=new zt(c.toBufferGeometry(),bd({map:Sd(),strength:.7,emissive:.95,color:7829367,side:ue}));f.name="nest-glow-bead",f.visible=!1;const m=xn([l,d,u],[0,0,0]);return{piles:o,bead:{mesh:f,lamp:m,on:!1}}}function Hd(n,t){const e=xl(n,t);if(!e.ok)return e;const i=Math.floor(Math.abs(n)*131+Math.abs(t)*977)%9973,r=WM(n,t,i),s=new Ee;s.name="founded-nest";const o=new zt(r.geometry,Uo(ns({map:Md(),strength:.62,side:ue})));o.name="founded-nest-shell",o.receiveShadow=!0,s.add(o);const a=XM(r,i);for(const u of a.piles)s.add(u.mesh);s.add(a.bead.mesh),Oc&&Oc.add(s);const c=xn([n,r.mouthY-4,t],oo),l=xn([n,r.mouthY+1,t],kM);return _e={x:n,z:t,group:s,mouth:{x:n,y:r.mouthY+lr,z:t,r:Xr},chamber:r.chamber,floorY:r.floorY,axis:{origin:r.origin,dir:r.dir,length:r.uMax},brood:0,sealed:!1,_furnishing:a,_coldLight:c,_warmLight:l,_coldFade:1},Yv(n,r.mouthY+lr,t,gl,Ci+Bn),{ok:!0}}function Vd(n){if(!_e)return 0;const t=Math.round(nt(n,0,Fc));_e.brood=t,_e._furnishing.piles.forEach((i,r)=>{const s=r<t;i.mesh.visible=s,i.on=s,i.lamp.c[0]=s?La[0]:0,i.lamp.c[1]=s?La[1]:0,i.lamp.c[2]=s?La[2]:0});const e=_e._furnishing.bead;return e.on=t>=4,e.mesh.visible=e.on,e.lamp.c[0]=e.on?Ia[0]:0,e.lamp.c[1]=e.on?Ia[1]:0,e.lamp.c[2]=e.on?Ia[2]:0,t}function Wd(n=!0){_e&&(_e.sealed=n)}function qM(n){if(!_e)return;const t=_e.sealed?0:1,e=Math.min(1,n/3);_e._coldFade+=(t-_e._coldFade)*e*3;const i=nt(_e._coldFade,0,1);_e._coldLight.c[0]=oo[0]*i,_e._coldLight.c[1]=oo[1]*i,_e._coldLight.c[2]=oo[2]*i}function Xd(){const n=new Ee;n.name="world";const t=pv();for(const f of t.doorLights)xn(f.p,f.c);const e=aM(t.rooms),i=hM(),r=bv();n.add(r);const s=Av();n.add(s.mesh);const o=Cv();n.add(o.group);const a=Rd({});n.add(a.mesh);const c=Wv();n.add(c.group);const l=DM();n.add(l.group);const u=new Ee;u.name="dug",n.add(u),GM(u);function d(f,m,g){a.update(f,m),qM(f),i.update(m),s.update(m),g&&(c.update(g),o.update(g,No()),$v(g.position))}return{group:n,update:d,grassFootprints:a.footprints,resources:l.nodes,rooms:t.rooms,doorLights:t.doorLights,mushrooms:e.mushrooms,rocks:e.rocks}}const vl=Object.freeze(Object.defineProperty({__proto__:null,LAWN_BOUNDS:ye,MUSHROOMS:ci,QUEEN:ee,RESOURCE_NODES:li,RIG_FOUNDED:pl,RIG_PROLOGUE:fl,RIVER:gn,ROCKS:kn,START:Cc,TERRAIN_BOUNDS:$r,TREE:Ht,TUNNEL_BACK:pe,TUNNEL_MOUTH:Oe,TUNNEL_R:fr,WATER_Y:Gn,applyNestShading:Uo,canFoundAt:xl,containSurface:Ic,containUnderground:Do,createWorld:Xd,daylightAt:Kv,distanceToWater:Yn,foundNest:Hd,foundedMix:No,getFoundedNest:Gd,getRoomBranches:cl,getUndergroundRadius:av,getWallHoleAt:al,groundNormal:ss,groundSlope:wr,groundY:Ft,harvestNode:kd,mushroomCollideR:Ud,nestOrigin:_l,nodesNear:IM,pitFactorAt:Nc,populateNest:Vd,profileR:Fe,riverEdgeAt:rs,sampleTerrain:gv,sealNest:Wd,setFoundedMix:Nd,shadeAt:Fd,soilAt:hl,sunDir:Fo,treeTrunkRadius:zi,treeWalkBranch:Rn,waterDepthAt:fi},Symbol.toStringTag,{value:"Module"})),YM=[{hip:[.92,1.5,1.7],rest:[4.1,0,3.9],phase:0},{hip:[-.92,1.5,1.7],rest:[-4.1,0,3.9],phase:.5},{hip:[1.02,1.4,.4],rest:[4.9,0,.3],phase:.5},{hip:[-1.02,1.4,.4],rest:[-4.9,0,.3],phase:0},{hip:[.92,1.4,-1.15],rest:[4.5,0,-3.5],phase:0},{hip:[-.92,1.4,-1.15],rest:[-4.5,0,-3.5],phase:.5}],$M={petiole:{at:[0,1.5,-1.2],r:[.5,.5,.62]},thorax:{at:[0,1.62,.5],r:[1.06,1.02,1.75]},head:{at:[0,1.66,2.7],r:[1.18,1.02,1.12]},eye:{at:[.76,2.12,3.1],r:[.3,.26,.3]},gaster:[{at:[0,1.55,-3.2],r:[1.6,1.54,2.1]},{at:[0,1.5,-5.4],r:[1.34,1.3,1.9]}],mandible:{root:[.55,1.45,3.5],tip:[.34,1.2,4.8],gape:.2,r:.17},antenna:{root:[.58,2.1,3.2],elbow:[1.4,3.3,4.2],tip:[1.85,3.2,6.1],r1:.14,r2:.11},legR:{thigh:.2,shin:.14,knee:.3,foot:.19}},KM={id:"queen",label:"reine fondatrice",scale:2.2,legs:YM,body:$M,breathes:!0,colors:{chitinA:11563558,chitinB:6176022,limb:6176022,mandible:11563558,eye:1051654},maxSpeed:12.5,sprint:1.5,turnRate:4.2,legLen:[2.7,2.9],stride:7,climbSpeed:12,bodyR:1.5,cam:{dist:58,min:16,max:140}},rn=KM;function jM(n){return[n.legLen[0]*n.scale,n.legLen[1]*n.scale]}function qd(n){return n.stride*n.scale}function ki(n){return n.bodyR*n.scale}const Yd=new J("#393741"),ZM=new J("#241D22"),Oo=new Co({color:Yd.clone(),side:Ne,depthWrite:!1});Oo.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`
    #include <begin_vertex>
    float oDist = -(modelViewMatrix * vec4(position, 1.0)).z;
    transformed += normal * clamp(0.0017 * oDist, 0.06, 0.16);
  `)};Oo.customProgramCacheKey=()=>"inverted-hull";function JM(n){Oo.color.copy(ZM).lerp(Yd,n)}function QM(n){const t=new Ee;return t.name="outline-hull",n.traverse(e=>{if(!e.isMesh||!e.geometry)return;const i=new zt(e.geometry,Oo);i.castShadow=!1,i.receiveShadow=!1,i.frustumCulled=!1,t.add(i)}),t.renderOrder=-1,t}const nn=Rd({}).footprints,Bo=42,tS=4.5,eS=20,nS=.93;function iS(n){return tS*(n.scale||1)}function Os(n){const t=n.profile||rn;return(t.climbSpeed!==void 0?t.climbSpeed:eS)*(n.scale||1)}const rS=6,$d=.05,sS=(()=>{const n=Rn.point(0),t=Rn.tipPos;return Math.hypot(t[0]-n[0],t[1]-n[1],t[2]-n[2])})();function oS(n){let t=null,e=iS(n);for(let r=0;r<nn.length;r++){const s=nn[r];if(s.h<Bo)continue;const o=Math.hypot(s.x-n.x,s.z-n.z);o<e&&(e=o,t={kind:"grass",i:r})}const i=Math.hypot(Ht.x-n.x,Ht.z-n.z)-Ht.w;return i<rS*(n.scale||1)&&i<e&&(t={kind:"tree"}),t}function aS(n,t){n.climb=t.kind==="tree"?{kind:"tree",seg:"trunk",t:.02}:{kind:"grass",i:t.i,t:.03},n.speed=0}function Bc(n){let t;if(n.climb.kind==="tree"){const e=So(Ht,n.climb.t);t=se(hi(Ht,n.climb.t),At(e.normal,zi(n.climb.t)))}else t=hi(nn[n.climb.i],n.climb.t);n.climb=null,n.x=t[0],n.z=t[2],n.y=Ft(t[0],t[2]),n.speed=0}function cS(n,t){if(n.climb){if(n.climb.kind==="grass"){Bc(n);return}n.climb.seg==="trunk"&&n.climb.t<=$d&&Bc(n);return}t&&aS(n,t)}function lS(n,t){return n.climb?n.climb.kind==="tree"?n.climb.seg==="trunk"&&n.climb.t<=$d?"redescendre du tronc":"reculer pour redescendre":"redescendre du brin":t?t.kind==="tree"?"grimper au tronc":"grimper au brin d'herbe":null}function uS(n,t,e){let i=!1,r=null;if(n.climb.kind==="tree")if(n.climb.seg==="trunk"){n.climb.t=nt(n.climb.t+t*(Os(n)/Ht.h)*e,0,Rn.splitT);const o=So(Ht,n.climb.t),a=se(hi(Ht,n.climb.t),At(o.normal,zi(n.climb.t)));n.x=a[0],n.y=a[1],n.z=a[2],n.climb.t<=5e-4&&t<0?i=!0:n.climb.t>=Rn.splitT&&t>0&&(r="branch")}else{n.climb.u=nt(n.climb.u+t*(Os(n)/sS)*e,0,1);const o=Rn.basis(n.climb.u),a=se(o.pos,At(o.up,Rn.radius(n.climb.u)));n.x=a[0],n.y=a[1],n.z=a[2],n.climb.u<=5e-4&&t<0&&(r="trunk")}else{const o=nn[n.climb.i];n.climb.t=nt(n.climb.t+t*(Os(n)/o.h)*e,0,nS);const a=hi(o,n.climb.t);n.x=a[0],n.y=a[1],n.z=a[2],n.climb.t<=5e-4&&t<0&&(i=!0)}const s=Os(n);n.speed=ai(n.speed,Math.abs(t)*s,7,e),n.travel+=Math.abs(t)*s*e,i?Bc(n):r==="branch"?(n.climb.seg="branch",n.climb.u=0):r==="trunk"&&(n.climb.seg="trunk",n.climb.t=Rn.splitT)}function hS(n,t,e,i=rn){return{x:n,y:t,z:e,yaw:0,speed:0,travel:0,bob:0,climb:null,legsInit:!1,profile:i,scale:i.scale}}function dS(n=rn){return n.legs.map(()=>({planted:[0,0,0],from:[0,0,0],to:[0,0,0],swinging:!1,prevP:0}))}function fS(n){if(n.climb){if(n.climb.kind==="tree"){if(n.climb.seg==="trunk"){const c=So(Ht,n.climb.t);return{side:c.width,up:c.normal,fwd:c.tangent}}const a=Rn.basis(n.climb.u);return{side:a.side,up:a.up,fwd:a.fwd}}const o=So(nn[n.climb.i],n.climb.t);return{side:o.width,up:o.normal,fwd:o.tangent}}const t=ss(n.x,n.z),e=ne([t[0]*.7,1,t[2]*.7]),i=[Math.sin(n.yaw),0,Math.cos(n.yaw)],r=ne(Ye(e,i)),s=Ye(r,e);return{side:r,up:e,fwd:s}}function Ml(n){const t=fS(n),e=n.scale||1,i=1.05*e+n.bob,r=n.climb?se([n.x,n.y,n.z],At(t.up,i)):[n.x,Ft(n.x,n.z)+i,n.z];return{side:At(t.side,e),up:At(t.up,e),fwd:At(t.fwd,e),p:r,basis:t,scale:e}}function mn(n,t){const[e,i,r]=t;return[n.side[0]*e+n.up[0]*i+n.fwd[0]*r+n.p[0],n.side[1]*e+n.up[1]*i+n.fwd[1]*r+n.p[1],n.side[2]*e+n.up[2]*i+n.fwd[2]*r+n.p[2]]}function pS(n,t,e,i,r){const s=Xn(t,n),o=Math.hypot(s[0],s[1],s[2])||1,a=nt(o,.05,e+i-.02),c=At(s,1/o),l=(e*e-i*i+a*a)/(2*a),u=Math.sqrt(Math.max(e*e-l*l,0)),d=r[0]*c[0]+r[1]*c[1]+r[2]*c[2],f=ne(Xn(r,At(c,d)));return se(se(n,At(c,l)),At(f,u))}function mS(n,t,e){const i=Ml(n),r=i.basis,s=n.profile||rn,o=n.scale||1,a=qd(s),c=n.travel/a,l=!!n.climb;for(let u=0;u<s.legs.length;u++){const d=s.legs[u],f=t[u],m=mn(i,d.rest);l||(m[1]=Ft(m[0],m[2])),n.legsInit||(f.planted=m.slice(),f.from=m.slice(),f.to=m.slice());let g=(c+d.phase)%1;if(g<0&&(g+=1),g>=.5&&f.prevP<.5){f.swinging=!0,f.from=f.planted.slice();const x=se(m,At(r.fwd,a*.38*nt(n.speed/(16*o),0,1.4)));l||(x[1]=Ft(x[0],x[2])),f.to=x}if(g<.5&&f.prevP>=.5&&(f.swinging=!1,f.planted=f.to.slice()),f.prevP=g,f.swinging){const x=(g-.5)*2,p=Math.sin(x*Math.PI)*1.5*o;f.planted=[Bt(f.from[0],f.to[0],x),Bt(f.from[1],f.to[1],x)+p,Bt(f.from[2],f.to[2],x)]}n.speed<.4*o&&!f.swinging&&(f.planted[0]=ai(f.planted[0],m[0],4,e),f.planted[1]=ai(f.planted[1],m[1],4,e),f.planted[2]=ai(f.planted[2],m[2],4,e))}n.legsInit=!0}let Da=null,nh=null;function gS(){return Da||(Da=new Lo(1,12,8),nh=new rl(1,1,1,7).translate(0,.5,0)),{sphereGeo:Da,cylGeo:nh}}const ih=new Map;function _S(n){let t=ih.get(n);return t||(t=new en({color:n,roughness:.55,metalness:.05}),ih.set(n,t)),t}function Ce(n,t){const e=new zt(n,_S(t));return e.matrixAutoUpdate=!1,e.castShadow=!0,e}const Ua=new Qt,rh=new k,sh=new k,oh=new k,ah=new k;function ao(n,t,e,i,r){rh.set(e[0],e[1],e[2]),sh.set(i[0],i[1],i[2]),oh.set(r[0],r[1],r[2]),Ua.makeBasis(rh,sh,oh),ah.set(t[0],t[1],t[2]),Ua.setPosition(ah),n.matrix.copy(Ua)}function sr(n,t,e,i){const r=We(t,e,i);ao(n,r.p,r.x,r.y,r.z)}function Bs(n){return[-n[0],n[1],n[2]]}function xS(n=rn){const{sphereGeo:t,cylGeo:e}=gS(),i=n.body,r=n.colors,[s,o]=jM(n),a=new Ee;a.name="ant";const c=i.gaster.map(()=>Ce(t,r.chitinB)),l=Ce(t,r.chitinB),u=Ce(t,r.chitinA),d=Ce(t,r.chitinA),f=Ce(t,r.eye),m=Ce(t,r.eye);a.add(...c,l,u,d,f,m);const g=Ce(e,r.mandible),x=Ce(e,r.mandible);a.add(g,x);const p=Ce(e,r.limb),h=Ce(e,r.limb),E=Ce(e,r.limb),M=Ce(e,r.limb);a.add(p,h,E,M);const y=n.legs.map(()=>({thigh:Ce(e,r.limb),shin:Ce(e,r.limb),knee:Ce(t,r.limb),foot:Ce(t,r.limb)}));for(const A of y)a.add(A.thigh,A.shin,A.knee,A.foot);function T(A,S,R){const P=Ml(A),_=P.basis,v=P.scale,L=(X,et,st,yt=1)=>ao(X,mn(P,et),At(_.side,st[0]*v*yt),At(_.up,st[1]*v*yt),At(_.fwd,st[2]*v*yt)),D=n.breathes?1+Math.sin(R*.55)*.04:1;for(let X=0;X<c.length;X++)L(c[X],i.gaster[X].at,i.gaster[X].r,D);L(l,i.petiole.at,i.petiole.r),L(u,i.thorax.at,i.thorax.r),L(d,i.head.at,i.head.r),L(f,i.eye.at,i.eye.r),L(m,Bs(i.eye.at),i.eye.r);const U=i.mandible,W=U.gape+Math.sin(R*3.1)*.06+Math.max(0,Math.min(A.speed,14))*.012,z=[U.tip[0]+W,U.tip[1],U.tip[2]];sr(g,mn(P,U.root),mn(P,z),U.r*v),sr(x,mn(P,Bs(U.root)),mn(P,Bs(z)),U.r*v);const Y=i.antenna;for(const X of[1,-1]){const et=Math.sin(R*2.4+(X>0?0:1.1))*.42,st=Math.cos(R*1.7+(X>0?.4:1.9))*.3,yt=ht=>X>0?ht:Bs(ht),Nt=mn(P,yt(Y.root)),$=mn(P,yt([Y.elbow[0]+et*.25,Y.elbow[1]+st*.3,Y.elbow[2]])),Q=mn(P,yt([Y.tip[0]+et,Y.tip[1]+st,Y.tip[2]]));sr(X>0?p:E,Nt,$,Y.r1*v),sr(X>0?h:M,$,Q,Y.r2*v)}const N=i.legR;for(let X=0;X<n.legs.length;X++){const et=n.legs[X],st=S[X],yt=y[X],Nt=mn(P,et.hip),$=st.planted,Q=et.hip[0]>0?_.side:At(_.side,-1),ht=ne([_.up[0]+Q[0]*.75,_.up[1]+Q[1]*.75,_.up[2]+Q[2]*.75]),ct=pS(Nt,$,s,o,ht);sr(yt.thigh,Nt,ct,N.thigh*v),sr(yt.shin,ct,$,N.shin*v);const bt=N.knee*v,Et=N.foot*v;ao(yt.knee,ct,[bt,0,0],[0,bt,0],[0,0,bt]),ao(yt.foot,$,[Et,0,0],[0,Et,0],[0,0,Et])}}return{group:a,updatePose:T}}function vS(n,t=rn){const e={},i={camYaw:0,wantPitch:-.19,camDist:t.cam.dist,dragging:!1},r={active:!1,id:-1,ox:0,oy:0,dx:0,dy:0};let s=-1,o=0,a=0,c=!1,l=!1;function u(S){for(let R=0;R<S.length;R++)if(e[S[R]])return!0;return!1}function d(S){e[S.code]=!0,S.code==="KeyE"&&(c=!0),S.code==="KeyH"&&(l=!0),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].indexOf(S.code)>=0&&S.preventDefault()}function f(S){e[S.code]=!1}function m(){for(const S in e)e[S]=!1}function g(S){n.setPointerCapture(S.pointerId),S.pointerType==="touch"&&S.clientX<window.innerWidth*.5?(r.active=!0,r.id=S.pointerId,r.ox=S.clientX,r.oy=S.clientY):(i.dragging=!0,s=S.pointerId,o=S.clientX,a=S.clientY)}function x(S){if(r.active&&S.pointerId===r.id){const R=nt(S.clientX-r.ox,-46,46),P=nt(S.clientY-r.oy,-46,46);r.dx=R/46,r.dy=P/46;return}i.dragging&&S.pointerId===s&&(i.camYaw-=(S.clientX-o)*.006,i.wantPitch=nt(i.wantPitch-(S.clientY-a)*.004,-.85,.55),o=S.clientX,a=S.clientY)}function p(S){r.active&&S.pointerId===r.id&&(r.active=!1,r.dx=0,r.dy=0),S.pointerId===s&&(i.dragging=!1,s=-1)}function h(S){i.camDist=nt(i.camDist+S.deltaY*.03*t.scale,t.cam.min,t.cam.max),S.preventDefault()}window.addEventListener("keydown",d),window.addEventListener("keyup",f),window.addEventListener("blur",m),n.addEventListener("pointerdown",g),n.addEventListener("pointermove",x),n.addEventListener("pointerup",p),n.addEventListener("pointercancel",p),n.addEventListener("wheel",h,{passive:!1});function E(){let S=0,R=0;u(["KeyW","KeyZ","ArrowUp"])&&(R+=1),u(["KeyS","ArrowDown"])&&(R-=1),u(["KeyA","KeyQ","ArrowLeft"])&&(S-=1),u(["KeyD","ArrowRight"])&&(S+=1),r.active&&(S+=r.dx,R-=r.dy);const P=Math.min(Math.hypot(S,R),1),_=!!(e.ShiftLeft||e.ShiftRight);return{ix:S,iy:R,mag:P,sprint:_}}function M(){const S=c;return c=!1,S}function y(){const S=l;return l=!1,S}function T(){return!!e.KeyE}function A(){window.removeEventListener("keydown",d),window.removeEventListener("keyup",f),window.removeEventListener("blur",m),n.removeEventListener("pointerdown",g),n.removeEventListener("pointermove",x),n.removeEventListener("pointerup",p),n.removeEventListener("pointercancel",p),n.removeEventListener("wheel",h)}return{state:i,readMoveIntent:E,consumeInteract:M,consumeHelp:y,isInteractHeld:T,dispose:A}}let Na=null;function Kd(){return Na||(Na=cl()),Na}function jd(n,t){const e=Kd();for(const i in e){const r=e[i],s=n-r.origin[0],o=t-r.origin[2],a=s*r.dir[0]+o*r.dir[2];if(a<=-.5||a>=r.uMax+1)continue;const c=s*r.side[0]+o*r.side[2],l=r.profR(nt(a,0,r.uMax));if(!(Math.abs(c)>=l*.82+2))return r}return null}function Zd(n,t,e){return(t-n.origin[0])*n.dir[0]+(e-n.origin[2])*n.dir[2]}function MS(n){return 2*n.uEnd-n.uMax}function SS(n,t){const e=jd(n,t);return e?e.profR(nt(Zd(e,n,t),0,e.uMax)):Fe(t)}function yS(n,t){let e=t,i=t;const r=Kd();for(const s in r){const o=r[s],a=nt(1-Math.abs(n-o.origin[2])/o.doorFalloff,0,1);if(a<=0)continue;const c=Bt(t,Math.abs(o.origin[0])+1.5,a);o.dir[0]>0?c>e&&(e=c):c>i&&(i=c)}return{limPos:e,limNeg:i}}const Jd=.14;function Qd(n){const t=n(0),e=n(Math.PI),i=n(Math.PI*.5);return{aPos:Math.max(Math.abs(t[0]),1.5),aNeg:Math.max(Math.abs(e[0]),1.5),cy:t[1],b:Math.max(i[1]-t[1],.8)}}function ES(n){return Qd(t=>{const e=Ii(t,n,Jd);return[e[0],e[1]]})}function bS(n,t){return Qd(e=>{const i=n.pointAt(e,t,Jd);return[(i[0]-n.origin[0])*n.side[0]+(i[2]-n.origin[2])*n.side[2],i[1]]})}function ch(n,t,e){const i=t>=0?n.aPos:n.aNeg,r=Math.min(Math.abs(t)/i,1),s=n.b*Math.max(Math.sqrt(Math.max(0,1-r*r)),.3),o=Math.max(n.cy-s,e+1.6);return{yMin:o,yMax:Math.max(n.cy+s,o+.6)}}function TS(n,t){if(t.br){const u=t.br,d=n[0]-u.origin[0],f=n[2]-u.origin[2],m=d*u.dir[0]+f*u.dir[2],g=d*u.side[0]+f*u.side[2],x=t.uAnt>t.corridorLen?t.corridorLen-1:-.3,p=nt(m,x,u.uMax-.3),h=bS(u,nt(p,0,u.uMax)),E=nt(g,-h.aNeg,h.aPos);n[0]=u.origin[0]+u.dir[0]*p+u.side[0]*E,n[2]=u.origin[2]+u.dir[2]*p+u.side[2]*E;const M=ch(h,E,Ft(n[0],n[2]));return n[1]=nt(n[1],M.yMin,M.yMax),Math.hypot(p-m,E-g)}const e=n[2],i=n[0],r=nt(e,pe+5,Oe+3);if(r>-14){const u=Fe(r)*.82*(1+Math.pow((r+14)/17,2)*.9),d=nt(i,-u,u);return n[0]=d,n[2]=r,n[1]=Math.max(n[1],Ft(d,r)+2.2),Math.hypot(d-i,r-e)}const s=ES(r),{limPos:o,limNeg:a}=yS(r,Math.max(Fe(r)*.82-1.6,3)),c=nt(i,-Math.max(a,s.aNeg),Math.max(o,s.aPos));n[0]=c,n[2]=r;const l=ch(s,c,Ft(c,r));return n[1]=nt(n[1],l.yMin,l.yMax),Math.hypot(c-i,r-e)}const zs=10.5;function wS(n){const t=Ft(ee[0],ee[2]);if(n[1]>t+8.5)return;const e=n[0]-ee[0],i=n[2]-ee[2],r=Math.hypot(e,i);if(!(r>=zs)){if(r<.001){n[0]+=zs;return}n[0]=ee[0]+e/r*zs,n[2]=ee[2]+i/r*zs}}function tf(n){const t=jd(n.x,n.z);if(!t)return{br:null};const e=Zd(t,n.x,n.z);return{br:t,uAnt:e,corridorLen:MS(t)}}function Sl(n,t,e){return t.z<Oe-2?(wS(n),TS(n,e||tf(t))):(n[1]=Math.max(n[1],Ft(n[0],n[2])+2.2),0)}function ef(n,t,e,i,r=1){return[n[0]-Math.sin(t)*Math.cos(e)*i,n[1]-Math.sin(e)*i+3.4*r,n[2]-Math.cos(t)*Math.cos(e)*i]}const lh=8,AS=6,nf=.9,RS=[0,.25,.5,.8],uh=-1.25;function CS(n,t,e,i,r,s){let o=i,a=1/0;const c=Math.min(AS*(r.scale||1),i);for(let l=0;l<=lh;l++){const u=Bt(i,c,l/lh),d=Sl(ef(n,t,e,u,r.scale||1),r,s);if(d<=nf)return{d:u,err:d};d<a&&(a=d,o=u)}return{d:o,err:a}}function PS(n,t,e,i,r,s){let o=null;for(const a of RS){const c=Math.max(e-a,uh),l=CS(n,t,c,i,r,s);if(l.err<=nf)return{pitch:c,d:l.d};if((!o||l.err<o.err)&&(o={pitch:c,d:l.d,err:l.err}),c<=uh)break}return o}function LS(n,t,e,i){const r=n.scale||1,s=n.climb?[n.x,n.y+2*r,n.z]:[n.x,Ft(n.x,n.z)+2.6*r,n.z],o=n.z<Oe-2,a=o?tf(n):null,c=o?SS(n.x,n.z):fr,l=o?Math.min(i,Math.max(13.5*r,c*1.5)):i,u=o?PS(s,t,e,l,n,a):{pitch:e,d:l},d=ef(s,t,u.pitch,u.d,r);Sl(d,n,a);const f=[s[0]+Math.sin(n.yaw)*3*r,s[1]+.4*r,s[2]+Math.cos(n.yaw)*3*r];return{eye:d,aim:f}}function IS(n){const t={eye:null,aim:null};function e(i,r,s,o,a){const c=LS(i,r,s,o);t.eye||(t.eye=c.eye.slice(),t.aim=c.aim.slice());const l=6.5;for(let u=0;u<3;u++)t.eye[u]=ai(t.eye[u],c.eye[u],l,a),t.aim[u]=ai(t.aim[u],c.aim[u],l*1.4,a);Sl(t.eye,i),n.position.set(t.eye[0],t.eye[1],t.eye[2]),n.lookAt(new k(t.aim[0],t.aim[1],t.aim[2]))}return t.update=e,t}function rf(n,t,e,i){const r=(t-n+Math.PI*3)%(Math.PI*2)-Math.PI;return n+r*(1-Math.exp(-e*i))}function DS(n){return n.w*.75}const sf=.01,hh=hi(Ht,sf),US=zi(sf)*.88,of=ki(rn)*2+.6,NS=of+.2,FS=14;function OS(n,t,e,i){for(let r=.3;r<=FS;r+=.3){const s=n+e*r,o=t+i*r,a=Do(s,o);if(Math.hypot(a[0]-s,a[1]-o)>.05)return r}return 1/0}const af=[];for(let n=0;n<8;n++)af.push([Math.cos(n*Math.PI/4),Math.sin(n*Math.PI/4)]);function BS(n,t,e){let i=0,r=1/0;const s=af.map(([c,l],u)=>{const d=OS(n,t,c,l);return d<r&&(r=d,i=u),d});if(r===1/0||r-e>=NS)return e;const o=Math.max(e,r+.3);return s[(i+4)%8]-o<of?0:o}const zS=1;let Fa=null;function kS(){return Fa||(Fa=Object.values(cl())),Fa}function GS(n,t){for(const e of kS()){const i=n-e.origin[0],r=t-e.origin[2],s=i*e.dir[0]+r*e.dir[2];if(s<=-.5||s>=e.uMax+1)continue;const o=i*e.side[0]+r*e.side[2],a=Math.max(e.profR(nt(s,0,e.uMax))*.82-1.2,2.2);if(!(Math.abs(o)>=a+3))return a}return Math.max(Fe(t)*.82-1.6,3)}function HS(n,t,e,i){return 2*GS(n,t)>=2*i+2*e+zS}let ks=null,dh=null;function cf(n=ki(rn)){return(!ks||ks.length!==ci.length||dh!==n)&&(dh=n,ks=ci.map(t=>{const e=BS(t.x,t.z,Ud(t));return e>0&&HS(t.x,t.z,e,n)?e:0})),ks}function lf(n,t,e){if(t<Oe+6){const i=cf();for(let r=0;r<ci.length;r++)i[r]>0&&e(ci[r].x,ci[r].z,i[r])}if(t>Oe-6){for(let i=0;i<kn.length;i++)e(kn[i].x,kn[i].z,kn[i].r);for(let i=0;i<nn.length;i++){const r=nn[i];r.h>=Bo&&e(r.x,r.z,DS(r))}e(hh[0],hh[2],US)}}function VS(n,t,e=0){let i=0;return lf(n,t,(r,s,o)=>{const a=o+e-Math.hypot(n-r,t-s);a>i&&(i=a)}),i}function fh(n){const t={x:0,z:0,n:0},e=ki(n.profile||rn);return lf(n.x,n.z,(i,r,s)=>{const o=s+e,a=n.x-i,c=n.z-r,l=Math.hypot(a,c);if(l>=o||l<.001)return;const u=o-l;t.x+=a/l*u,t.z+=c/l*u,t.n++}),t}function zc(n,t){const e=fh(n);if(e.n===0)return;const i=e.x/e.n,r=e.z/e.n;n.x+=i,n.z+=r;const s=Math.hypot(i,r);if(s>5e-4){const a=i/s,l=-(r/s),u=a,d=Math.sin(n.yaw)*l+Math.cos(n.yaw)*u,f=t*.6*(d>=0?1:-1);n.x+=l*f,n.z+=u*f}const o=fh(n);o.n>0&&(n.x+=o.x/o.n,n.z+=o.z/o.n)}const WS=11;function XS(n,t,e){const i=ne([e[0]-t[0],0,e[2]-t[2]]),r=Ye(i,[0,1,0]);return{wishX:i[0]*n.iy+r[0]*n.ix,wishZ:i[2]*n.iy+r[2]*n.ix}}function qS(n,t,e,i){const r=n.profile||rn,s=n.scale||1,o=ki(r),a=r.maxSpeed*(e.sprint?r.sprint:1);e.mag>.02?(n.yaw=rf(n.yaw,Math.atan2(t.wishX,t.wishZ),r.turnRate,i),n.speed=ai(n.speed,a*e.mag,7,i)):n.speed=ai(n.speed,0,9,i);const c=n.speed*i;if(n.x+=Math.sin(n.yaw)*c,n.z+=Math.cos(n.yaw)*c,n.travel+=c,zc(n,c),n.z<Oe){const[l,u]=Do(n.x,n.z);n.x=l,n.z=u;const d=WS+o,f=n.x-ee[0],m=n.z-ee[2],g=Math.hypot(f,m);if(g<d&&g>.001){const x=f/g,p=m/g;n.x=ee[0]+x*d,n.z=ee[2]+p*d;const h=-p,E=x,M=Math.sin(n.yaw)*h+Math.cos(n.yaw)*E,y=c*.75*(M>=0?1:-1);n.x+=h*y,n.z+=E*y}}else{const l=nt(n.z,ye.z0,ye.z1);n.x=Math.max(Ic(n.x,l)[0],Ic(n.x-o,l)[0]+o),n.x=Math.min(n.x,ye.x1-o*2),n.z=Math.min(n.z,ye.z1-o*2)}n.y=Ft(n.x,n.z),n.bob=Math.sin(n.travel*(Math.PI*2/qd(r))*2)*.13*s*nt(n.speed/(8*s),0,1)}const qe={...vl},ph={terre:{label:"terre meuble",diggable:!0,quality:.9},argile:{label:"argile",diggable:!0,quality:.72},litiere:{label:"litière de feuilles",diggable:!0,quality:.66},sable:{label:"sable",diggable:!0,quality:.38},roche:{label:"roche",diggable:!1,quality:0},boue:{label:"boue détrempée",diggable:!1,quality:0}},kc=32,Gs=9,co=18,Hs=55,YS=190,Vs=55,Gc=14,$S={soil:.28,slope:.16,water:.2,shade:.18,food:.18},KS={soil:"terre",moss:"litiere",sand:"sable",rock:"roche",water:"boue",terre:"terre",argile:"argile",litiere:"litiere",sable:"sable",roche:"roche",boue:"boue"};function jS(n,t){if(typeof qe.soilAt=="function"){const e=qe.soilAt(n,t),i=KS[typeof e=="string"?e:e&&e.kind],r=ph[i];if(r)return{...r,kind:i,assumed:!1}}return{...ph.terre,kind:"terre",assumed:!0}}function ZS(n,t){if(typeof qe.slopeAt=="function")return{deg:qe.slopeAt(n,t),assumed:!1};const e=qe.groundNormal(n,t);return{deg:Math.acos(nt(e[1],-1,1))*180/Math.PI,assumed:!1}}function JS(n,t){return typeof qe.waterDistance=="function"?{d:qe.waterDistance(n,t),assumed:!1}:typeof qe.distanceToWater=="function"?{d:qe.distanceToWater(n,t),assumed:!1}:{d:null,assumed:!0}}function QS(n,t){if(typeof qe.shadeAt=="function")return{v:nt(qe.shadeAt(n,t),0,1),assumed:!1};const e=qe.TREE,i=e?nt(1-Math.hypot(n-e.x,t-e.z)/90,0,1):0;let r=0;for(let s=0;s<nn.length;s++){const o=nn[s];o.h<Bo||Math.abs(o.x-n)>26||Math.abs(o.z-t)>26||Math.hypot(o.x-n,o.z-t)<26&&r++}return{v:nt(i*.8+Math.min(r,8)/8*.5,0,1),assumed:!0}}function ty(n,t){const e=qe.RESOURCE_NODES;if(Array.isArray(e)){let r=0;for(const s of e)Math.hypot(s.x-n,s.z-t)<Vs&&r++;return{n:r,assumed:!1}}let i=0;for(let r=0;r<nn.length;r++){const s=nn[r];s.h<Bo||Math.abs(s.x-n)>Vs||Math.abs(s.z-t)>Vs||Math.hypot(s.x-n,s.z-t)<Vs&&i++}return{n:i,assumed:!0}}function ey(n){if(n>=kc)return 0;const t=n<=Gs?.78+.22*(n/Gs):1-Math.pow((n-Gs)/(kc-Gs),1.4);return nt(t,0,1)}function ny(n){return n===null?.5:n<=co?0:n<=Hs?nt((n-co)/(Hs-co),0,1):nt(1-(n-Hs)/(YS-Hs),.15,1)}const iy=[{min:78,key:"excellent",label:"excellent"},{min:60,key:"bon",label:"bon"},{min:42,key:"moyen",label:"moyen"},{min:0,key:"ingrat",label:"ingrat"}];function ry(n){return iy.find(t=>n>=t.min)}function sy(n){return n>.66?"à l'ombre":n>.3?"mi-ombre":"plein soleil"}function oy(n){return n>=Gc?"ressources abondantes":n>=Gc*.4?"quelques ressources":"peu de ressources"}function lo(n,t){const e=jS(n,t),i=ZS(n,t),r=JS(n,t),s=QS(n,t),o=ty(n,t),a=[{key:"soil",label:e.label,value:e.quality,assumed:e.assumed},{key:"slope",label:`pente ${i.deg.toFixed(0)}°`,value:ey(i.deg),assumed:i.assumed},{key:"water",label:r.d===null?"eau inconnue":`eau à ${r.d.toFixed(0)}`,value:ny(r.d),assumed:r.assumed},{key:"shade",label:sy(s.v),value:nt(s.v*1.25,0,1),assumed:s.assumed},{key:"food",label:oy(o.n),value:nt(o.n/Gc,0,1),assumed:o.assumed}];let c=null;t<qe.TUNNEL_MOUTH?c={key:"underground",text:"sous terre — rien à fonder ici"}:e.diggable?r.d!==null&&r.d<=co?c={key:"water",text:"trop près de l'eau — la galerie serait inondée"}:i.deg>=kc&&(c={key:"slope",text:`pente ${i.deg.toFixed(0)}° — le sol s'effondrerait`}):c={key:"soil",text:`${e.label} — impossible de creuser`};let l=0;for(const d of a)l+=d.value*$S[d.key];const u=Math.round(nt(l,0,1)*100);return{x:n,z:t,diggable:!c,blocker:c,score:u,grade:ry(u),factors:a,assumed:a.some(d=>d.assumed)}}function ay(n){return n.diggable?`Site : ${n.grade.label} (${n.score}/100)`:`Site : impossible — ${n.blocker.text}`}function mh(n){return n.factors.slice().sort((t,e)=>t.value-e.value).map(t=>t.assumed?`${t.label} ?`:t.label).join(" · ")}const Eo={...vl},or={graine:"graine",brindille:"brindille",miellat:"miellat"},cy={graine:["graine","graines"],brindille:["brindille","brindilles"],miellat:["dose de miellat","doses de miellat"]};function ly(n,t){const e=cy[n]||[n,n];return`${t} ${t>1?e[1]:e[0]}`}const uy=[{x:60,z:110,kind:"graine",amount:3},{x:95,z:105,kind:"brindille",amount:3},{x:55,z:120,kind:"miellat",amount:2},{x:100,z:125,kind:"graine",amount:2},{x:45,z:115,kind:"brindille",amount:2},{x:85,z:135,kind:"miellat",amount:2},{x:110,z:110,kind:"graine",amount:2},{x:65,z:135,kind:"brindille",amount:2},{x:40,z:128,kind:"graine",amount:2}].map((n,t)=>({id:9e3+t,r:10,...n}));let uf=!1;function os(){return Array.isArray(Eo.RESOURCE_NODES)?Eo.RESOURCE_NODES:(uf=!0,uy)}function hf(){return os(),uf}function hy(n,t){if(!n)return 0;if(typeof Eo.harvestNode=="function")return Eo.harvestNode(n.id,t)||0;const e=Math.max(0,Math.min(t,n.amount));return n.amount-=e,e}function dy(n,t,e=0){const i=os();let r=null,s=1/0;for(let o=0;o<i.length;o++){const a=i[o];if(a.amount<=0)continue;const c=Math.hypot(a.x-n,a.z-t);c<=a.r+e*.6&&c<s&&(s=c,r=a)}return r}const gh=1.8,df=16,bo=5,fy=.5;function py(){const n={carrying:null,cache:null,progress:0,activeId:null,justTook:null,justDropped:null};function t(){n.progress=0,n.activeId=null}function e(m,g){if(n.activeId!==null){const x=os();for(let p=0;p<x.length;p++){const h=x[p];if(h.id===n.activeId){if(h.amount>0&&Math.hypot(h.x-m.x,h.z-m.z)<=h.r+g*.6)return h;break}}}return dy(m.x,m.z,g)}function i(m,g){if(n.carrying)return"full";if(!m)return r(g),"idle";if(n.activeId!==m.id&&(n.activeId=m.id,n.progress=0),n.progress+=g/gh,n.progress<1)return"progress";const x=hy(m,1);return t(),x<=0?"empty":(n.carrying={kind:m.kind},n.justTook={kind:m.kind,qty:x,node:m},"taken")}function r(m){if(n.progress<=0){n.activeId=null;return}n.progress=Math.max(0,n.progress-m*fy/gh),n.progress===0&&(n.activeId=null)}function s(m){return n.cache?Math.hypot(n.cache.x-m.x,n.cache.z-m.z):1/0}function o(m){return n.carrying?!n.cache||s(m)<=df:!1}function a(m){if(!o(m))return!1;n.cache||(n.cache={x:m.x,y:Ft(m.x,m.z),z:m.z,items:{},total:0});const g=n.carrying.kind;return n.cache.items[g]=(n.cache.items[g]||0)+1,n.cache.total+=1,n.carrying=null,n.justDropped={kind:g,cache:n.cache},!0}function c(){n.justTook=null,n.justDropped=null}function l(){return n.cache?n.cache.total:0}function u(){return l()>=bo}function d(){return!n.cache||n.cache.total===0?null:Object.entries(n.cache.items).filter(([,m])=>m>0).map(([m,g])=>ly(m,g)).join(" · ")}function f(){const m=n.carrying?`Porte : ${or[n.carrying.kind]}`:"Porte : rien",g=d();return`${m} · Réserve : ${l()}/${bo}${g?` (${g})`:""}`}return{state:n,target:e,hold:i,release:r,canDrop:o,drop:a,cacheDistance:s,stock:l,enough:u,stockDetail:d,inventoryLine:f,endFrame:c}}const Gi={...vl},_h=4,my={rock:"la roche ne se creuse pas",soil:"ce sol ne se creuse pas",water:"trop près de l'eau — la galerie serait inondée",slope:"la pente s'effondrerait",underground:"on ne fonde pas dans une galerie déjà creusée",bounds:"le bord du monde — il faut revenir vers le pré",occupied:"une galerie passe déjà sous ce sol","already-founded":"la colonie est déjà fondée"};function Hc(n){return n?my[n]||`impossible de creuser ici (${n})`:"impossible de creuser ici"}let Vc=null,ff=!1;function xh(){return typeof Gi.foundNest!="function"||ff}function To(){if(typeof Gi.nestOrigin=="function"){const n=Gi.nestOrigin();if(n)return n}return Vc}function Wc(){return!!To()}function yl(n,t){if(Wc())return{ok:!1,reason:"already-founded"};if(typeof Gi.canFoundAt=="function"){const i=Gi.canFoundAt(n,t)||{};return{ok:!!i.ok,reason:i.reason,assumed:!1}}const e=lo(n,t);return e.diggable?{ok:!0,assumed:!0}:{ok:!1,reason:e.blocker.key,assumed:!0}}function gy(n,t){const e=yl(n,t);if(!e.ok)return e;if(typeof Gi.foundNest=="function"){const i=Gi.foundNest(n,t)||{};return i.ok&&(Vc={x:n,z:t}),{ok:!!i.ok,reason:i.reason,assumed:!1}}return ff=!0,Vc={x:n,z:t},{ok:!0,assumed:!0}}function vh(n,t,e,i){const r=e-n,s=i-t;if(Math.hypot(r,s)<1)return"ici";const o=s>8?"nord":s<-8?"sud":"",a=r>8?"est":r<-8?"ouest":"";return o&&a?`au ${o}-${a}`:a?`à l'${a}`:`au ${o}`}const _y={harvest:!0,found:!0};function xy({profile:n=rn}={}){const t=py(),e=ki(n);let i=0,r=null,s=0;function o(p,h=3.2){r=p,s=h}function a(p){if(p.climb)return{kind:"climb",climbTarget:null};if(t.state.carrying){const y=t.state.carrying.kind;if(t.canDrop(p))return{kind:"drop",label:t.state.cache?"ajouter au dépôt":"poser ici — ce sera le dépôt"};const T=t.cacheDistance(p),A=t.state.cache;return{kind:"return",label:`rapporter ${or[y]} au dépôt (${T.toFixed(0)} u ${vh(p.x,p.z,A.x,A.z)})`}}if(t.state.cache&&!Wc()&&t.enough()&&t.cacheDistance(p)<=df){const y=yl(p.x,p.z);return{kind:"found",ok:y.ok,reason:y.reason,assumed:y.assumed}}const E=t.target(p,e);if(E)return{kind:"harvest",node:E};const M=oS(p);return M?{kind:"climb",climbTarget:M}:{kind:"none"}}function c(p,h,E,M){const y=a(p);switch(s>0&&(s-=M,s<=0&&(r=null)),(y.kind!=="harvest"||!E)&&t.release(M),(y.kind!=="found"||!E||!y.ok)&&(i=Math.max(0,i-M/_h)),y.kind){case"harvest":{if(E){const T=t.hold(y.node,M);T==="taken"?o(`elle emporte ${or[t.state.carrying.kind]}`):T==="empty"&&o("plus rien à prendre ici")}break}case"found":{if(E&&y.ok&&(i+=M/_h,i>=1)){i=0;const T=gy(p.x,p.z);o(T.ok?xh()?"Colonie fondée ici. (le monde ne creuse pas encore la chambre)":"Colonie fondée ici.":`impossible : ${Hc(T.reason)}`,6)}break}case"drop":if(h){const T=t.state.carrying.kind;t.drop(p)&&o(t.stock()===1?`dépôt ouvert ici — ${or[T]} posée`:`${or[T]} ajoutée au dépôt (${t.stock()}/${bo})`)}break;case"climb":h&&cS(p,y.climbTarget);break}return y}function l(p){return`${Math.round(p*100)}%`}function u(p,h){if(h.kind==="climb")return lS(p,h.climbTarget);if(h.kind==="return")return h.label;if(h.kind==="drop")return`E — ${h.label}`;if(h.kind==="harvest"){const E=h.node;return t.state.progress>0?`Récolte… ${l(t.state.progress)}`:`E (maintenir) — récolter ${or[E.kind]}`}return h.kind==="found"?h.ok?i>0?`Creusement… ${l(i)}`:"E (maintenir) — fonder la colonie ici":`Fonder ici : ${Hc(h.reason)}`:null}function d(p){if(Wc()){const M=To(),y=Math.hypot(M.x-p.x,M.z-p.z);return`Colonie fondée ${y<12?"ici":`à ${y.toFixed(0)} u ${vh(p.x,p.z,M.x,M.z)}`}. Suite : la ponte (pas encore implémentée).`+(xh()?" [chambre non creusée]":"")}const h=bo-t.stock();if(t.state.carrying)return t.state.cache?`Objectif : rapporter au dépôt — encore ${h} pour fonder`:"Objectif : poser ce fardeau — le premier dépôt fixe le site de la colonie";if(t.enough())return"Objectif : fonder la colonie sur le dépôt";const E=hf()?" [nœuds provisoires]":"";return`Objectif : récolter ${h} unité${h>1?"s":""} de plus${E}`}function f(){return t.inventoryLine()}function m(){return r}function g(p){return p.kind==="harvest"&&t.state.progress>0?t.state.progress:p.kind==="found"&&i>0?i:null}function x(p,h){switch(h.kind){case"harvest":return{x:h.node.x,z:h.node.z,radius:Math.max(h.node.r,6),blocked:!1};case"found":{const E=t.state.cache;return E?{x:E.x,z:E.z,radius:11,blocked:!h.ok}:null}case"drop":{const E=t.state.cache;return{x:E?E.x:p.x,z:E?E.z:p.z,radius:E?11:7,blocked:!1}}case"return":{const E=t.state.cache;return E?{x:E.x,z:E.z,radius:11,blocked:!1}:null}case"climb":{const E=h.climbTarget;if(!E)return null;if(E.kind==="tree")return{x:Ht.x,z:Ht.z,radius:Ht.w+5,blocked:!1};const M=nn[E.i];return M?{x:M.x,z:M.z,radius:5,blocked:!1}:null}default:return null}}return{harvest:t,update:c,resolve:a,promptText:u,objectiveText:d,inventoryText:f,message:m,holdProgress:g,targetMark:x,isHold:p=>!!_y[p.kind],endFrame:()=>t.endFrame()}}const wo={graine:{r:[.95,.78,1.3],color:14270852,emissive:0},brindille:{r:[2.9,.26,.26],color:8016424,emissive:0},miellat:{r:[.9,.88,.9],color:15247420,emissive:3810309}},vy=2,My=12;let Oa=null;function Sy(){return Oa||(Oa=new Lo(1,10,7)),Oa}const Mh=new Map;function pf(n){let t=Mh.get(n);if(!t){const e=wo[n];t=new en({color:e.color,emissive:e.emissive,roughness:.7,metalness:.02}),Mh.set(n,t)}return t}const Ba=new Qt,Sh=new k,yh=new k,Eh=new k,bh=new k;function mf(n,t,e,i,r){Sh.set(e[0],e[1],e[2]),yh.set(i[0],i[1],i[2]),Eh.set(r[0],r[1],r[2]),Ba.makeBasis(Sh,yh,Eh),bh.set(t[0],t[1],t[2]),Ba.setPosition(bh),n.matrix.copy(Ba)}function za(n){const t=new zt(Sy(),pf(n));return t.matrixAutoUpdate=!1,t.castShadow=!0,t.visible=!1,t}function Th(n,t,e,i,r,s=0){const o=wo[t].r.map(l=>l*vy),a=Math.cos(r),c=Math.sin(r);mf(n,[e,Ft(e,i)+o[1]*.9+s,i],[a*o[0],0,c*o[0]],[0,o[1],0],[-c*o[2],0,a*o[2]]),n.visible=!0}function yy({scene:n,profile:t=rn}){const e=new Ee;e.name="gameplay-props",n.add(e);const i={};for(const m of Object.keys(wo))i[m]=za(m),e.add(i[m]);const r=[];for(let m=0;m<My;m++){const g=za("graine");r.push(g),e.add(g)}let s=-1;const o=hf(),a=[];if(o)for(const m of os()){const g=[];for(let x=0;x<3;x++){const p=za(m.kind);e.add(p),g.push(p)}a.push({node:m,clutch:g,drawn:-1})}function c(){for(const m of a){const g=m.node,x=Math.max(0,Math.min(m.clutch.length,g.amount));if(x!==m.drawn){m.drawn=x;for(let p=0;p<m.clutch.length;p++)if(p<x){const h=p/m.clutch.length*Math.PI*2+g.id;Th(m.clutch[p],g.kind,g.x+Math.cos(h)*3.2,g.z+Math.sin(h)*3.2,h)}else m.clutch[p].visible=!1}}}function l(m){if(!m||m.total===s)return;s=m.total;let g=0;for(const[x,p]of Object.entries(m.items))for(let h=0;h<p&&g<r.length;h++,g++){const E=g*2.399,M=1.6+g*1.15,y=r[g];y.material=pf(x),Th(y,x,m.x+Math.cos(E)*M,m.z+Math.sin(E)*M,E*1.7)}for(;g<r.length;g++)r[g].visible=!1}function u(m,g){for(const A of Object.keys(i))i[A].visible=!1;if(!g)return;const x=i[g.kind];if(!x)return;const p=Ml(m),h=p.basis,E=p.scale,M=(m.profile||t).body.mandible,y=[0,M.tip[1]-.15,M.tip[2]+.55],T=wo[g.kind].r;mf(x,mn(p,y),At(h.side,T[0]*E),At(h.up,T[1]*E),At(h.fwd,T[2]*E)),x.visible=!0}function d(m,g){u(m,g.carrying),l(g.cache),o&&c()}function f(){n.remove(e)}return{group:e,update:d,dispose:f,provisional:o}}const Ey="position:fixed;color:#e6d3ab;font:13px/1.5 monospace;pointer-events:none;text-shadow:0 1px 3px rgba(0,0,0,0.9);z-index:5;";function ni(n,t){const e=document.createElement("div");return e.id=n,e.style.cssText=Ey+t,document.body.appendChild(e),e}function by(){return{setSite(){},setPrompt(){},setObjective(){},setStock(){},setEvent(){},setHold(){},toggleControls(){},closeControls(){},dispose(){}}}const Ty=[["ZQSD / WASD","se déplacer"],["Maj","courir"],["Souris (glisser)","tourner la caméra"],["Molette","reculer / rapprocher la vue"],["E","action — appui court, ou maintenu quand la barre apparaît"],["H","afficher / masquer cette aide"]];function wy(){if(typeof document>"u")return by();const n=ni("event","left:12px;bottom:142px;color:#cfe0a8;"),t=ni("prompt","left:12px;bottom:122px;font-size:14px;color:#ffe6b0;"),e=ni("objective","left:12px;bottom:88px;color:#f0dfb8;"),i=ni("stock","left:12px;bottom:70px;opacity:0.85;"),r=ni("siteinfo","left:12px;bottom:52px;"),s=ni("sitedetail","left:12px;bottom:34px;opacity:0.62;font-size:12px;"),o=ni("hold","left:12px;bottom:112px;width:190px;height:5px;background:rgba(0,0,0,0.45);border-radius:3px;overflow:hidden;"),a=document.createElement("div");a.style.cssText="height:100%;width:0%;background:#ffc46a;border-radius:3px;",o.appendChild(a),o.style.display="none";const c=ni("controls","right:12px;top:12px;padding:10px 14px;background:rgba(12,10,8,0.62);border-radius:5px;line-height:1.8;");c.innerHTML='<div style="opacity:0.75;margin-bottom:4px">Commandes</div>'+Ty.map(([h,E])=>`<div><span style="color:#ffe6b0">${h}</span><span style="opacity:0.72"> — ${E}</span></div>`).join("");let l=!0,u=null,d=null,f=null,m=null,g=null,x=null;const p=(h,E,M)=>E===M?M:(h.textContent=E||"",E);return{setSite(h,E,M){h!==u&&(r.textContent=h,r.style.color=M?"#e6d3ab":"#d98b6a",u=h),E!==d&&(s.textContent=E,d=E)},setPrompt(h){f=p(t,h,f)},setObjective(h){m=p(e,h,m)},setStock(h){g=p(i,h,g)},setEvent(h){x=p(n,h,x)},setHold(h){const E=h!==null&&h>.001;E!==(o.style.display==="block")&&(o.style.display=E?"block":"none"),E&&(a.style.width=`${Math.min(100,h*100)}%`)},toggleControls(){l=!l,c.style.display=l?"block":"none"},closeControls(){l&&(l=!1,c.style.display="none")},dispose(){for(const h of[e,i,r,s,t,n,o,c])h.parentNode&&h.parentNode.removeChild(h)}}}const wh=new J("#FFB03A").multiplyScalar(1.5),Ay=new J("#E8663A").multiplyScalar(1.4),Ah=.72,Ry=.2,Cy=`
uniform vec3 uColor;
uniform float uTime;
uniform float uOpacity;
varying vec2 vMarkerUv;

void main() {
  vec2 p = vMarkerUv * 2.0 - 1.0;
  float r = length(p);
  if (r > 1.0) discard;

  // the soft band: fades to nothing on both sides, so there is no edge
  float band = 1.0 - smoothstep(0.0, ${Ry.toFixed(2)}, abs(r - ${Ah.toFixed(2)}));
  band = pow(band, 1.6);

  // a bright arc sweeping around it, so the ring reads as alive without
  // changing size — three lobes, because one reads as a bug and many read
  // as a texture
  float a = atan(p.y, p.x);
  float sweep = 0.55 + 0.45 * sin(a * 3.0 - uTime * 1.9);

  // a faint wash inside the band, which is what stops the middle of a large
  // ring from looking empty on open ground
  float fill = (1.0 - smoothstep(0.0, ${Ah.toFixed(2)}, r)) * 0.14;

  float alpha = (band * sweep + fill) * uOpacity;
  gl_FragColor = vec4(uColor * (0.75 + 0.55 * band), alpha);
}
`;function Py(n){const t={uColor:{value:wh.clone()},uTime:{value:0},uOpacity:{value:1}},e=new Wn({uniforms:t,vertexShader:`
      varying vec2 vMarkerUv;
      void main() {
        vMarkerUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:Cy,transparent:!0,blending:Ha,depthTest:!1,depthWrite:!1,side:ue}),i=new zt(new Qr(2,2),e);return i.rotation.x=-Math.PI/2,i.name="target-marker",i.renderOrder=900,i.frustumCulled=!1,i.visible=!1,n.add(i),{show(r,s,o,a){if(!r){i.visible=!1;return}i.visible=!0,i.position.set(r.x,Ft(r.x,r.z)+.35,r.z),i.scale.setScalar(s),t.uTime.value=a,t.uColor.value.copy(o?Ay:wh),t.uOpacity.value=o?.95:.8+.2*Math.sin(a*3.4)},dispose(){n.remove(i),i.geometry.dispose(),e.dispose()}}}const Rh=[140,170],Ch=-Math.PI/2,Ly=.25,Iy=3;function Dy({scene:n,camera:t,domElement:e,profile:i=rn}){const r=hS(Rh[0],0,Rh[1],i);r.yaw=Ch,r.y=Ft(r.x,r.z),zc(r,0),zc(r,0),r.y=Ft(r.x,r.z);const s=dS(i),{group:o,updatePose:a}=xS(i);n.add(o),n.add(QM(o));const c=vS(e,i);c.state.camYaw=Ch;const l=IS(t),u=wy(),d=Py(n),f=xy({profile:i}),m=yy({scene:n,profile:i});l.update(r,c.state.camYaw,c.state.wantPitch,c.state.camDist,0);let g=0,x=null,p=null,h=null;function E(T){g-=T;const A=x?Math.hypot(r.x-x[0],r.z-x[1]):1/0;if((p||h)&&g>0&&A<Iy)return;g=Ly,x=[r.x,r.z];const S=To();if(S){h||(h=lo(S.x,S.z)),u.setSite(`Nid fondé — site ${h.grade.label} (${h.score}/100)`,mh(h),!0);return}p=lo(r.x,r.z),u.setSite(ay(p),mh(p),p.diggable)}function M(T,A){const S=c.readMoveIntent();c.consumeHelp()&&u.toggleControls();const R=f.update(r,c.consumeInteract(),c.isInteractHeld(),T);if(r.climb)uS(r,nt(S.iy,-1,1),T);else{const _=XS(S,l.eye,l.aim);qS(r,_,S,T)}mS(r,s,T),a(r,s,A),o.position.set(0,0,0),Mo.position.set(r.x,r.y,r.z),Mo.radius=ki(i),m.update(r,f.harvest.state),E(T),u.setPrompt(f.promptText(r,R)),u.setObjective(f.objectiveText(r)),u.setStock(f.inventoryText()),u.setEvent(f.message()),u.setHold(f.holdProgress(R));const P=f.targetMark(r,R);d.show(P,P?P.radius:0,P?P.blocked:!1,A),f.harvest.state.carrying&&u.closeControls(),f.endFrame(),!c.state.dragging&&!r.climb&&S.mag>.02&&(c.state.camYaw=rf(c.state.camYaw,r.yaw,2.2,T)),l.update(r,c.state.camYaw,c.state.wantPitch,c.state.camDist,T)}typeof window<"u"&&(window.__decorPenetration=VS,window.__antRadius=ki(i),window.__site=(T,A)=>lo(T,A),window.__avatar=i,window.__mushroomRadii=cf,window.__grass=nn,window.__nodes=os,window.__harvest=()=>f.harvest.state,window.__nestOrigin=To,window.__canFound=(T,A)=>{const S=yl(T,A);return{...S,text:Hc(S.reason)}},window.__toWater=Yn);function y(){c.dispose(),u.dispose(),d.dispose(),m.dispose()}return{ant:r,group:o,update:M,dispose:y}}const Ni={resolution:[{label:"50 %",value:.5},{label:"75 %",value:.75},{label:"100 %",value:1},{label:"150 % (net)",value:1.5}],shadows:[{label:"aucune",value:0},{label:"basses (1024)",value:1024},{label:"normales (2048)",value:2048}],grass:[{label:"clairsemée",value:.35},{label:"moyenne",value:.65},{label:"dense",value:1}]},gf="myrmidia.quality";function Uy(){const n={resolution:2,shadows:2,grass:2,textures:!0};try{const t=localStorage.getItem(gf);return t?{...n,...JSON.parse(t)}:n}catch{return n}}function Ny(){try{localStorage.setItem(gf,JSON.stringify(He))}catch{}}const He=Uy(),Fy=[];function Oy(){for(const n of Fy)n(uo())}function uo(){return{resolution:Ni.resolution[He.resolution].value,shadowMap:Ni.shadows[He.shadows].value,grassFraction:Ni.grass[He.grass].value,textures:He.textures}}function ka(n){He[n]=(He[n]+1)%Ni[n].length}function By({renderer:n,sun:t,scene:e}){const i=Math.min(window.devicePixelRatio||1,2);function r(){n.setPixelRatio(i*uo().resolution),n.setSize(window.innerWidth,window.innerHeight)}function s(){const M=uo().shadowMap;n.shadowMap.enabled=M>0,M>0&&(t.shadow.mapSize.set(M,M),t.shadow.map?.dispose(),t.shadow.map=null),n.shadowMap.needsUpdate=!0}function o(){const M=He.textures;e.traverse(y=>{const T=Array.isArray(y.material)?y.material:y.material?[y.material]:[];for(const A of T){if(M)A.userData.savedMap!==void 0&&(A.map=A.userData.savedMap,A.userData.savedMap=void 0);else if(A.map)A.userData.savedMap=A.map,A.map=null;else continue;A.needsUpdate=!0}})}let a=null,c=0;function l(){if(!a){if(e.traverse(M=>{M.name==="grass"&&(a=M)}),!a)return;c=a.count}a.count=Math.max(1,Math.round(c*uo().grassFraction))}if(r(),s(),typeof document>"u")return{update(){},toggle(){},dispose(){}};const u=document.createElement("div");u.id="quality",u.style.cssText="position:fixed;right:12px;bottom:12px;padding:9px 12px;background:rgba(12,10,8,0.68);border-radius:5px;color:#e6d3ab;font:12px/1.7 monospace;pointer-events:none;z-index:6;text-shadow:0 1px 3px rgba(0,0,0,0.9);display:none;",document.body.appendChild(u);const d=document.createElement("div");d.id="fps",d.style.cssText="position:fixed;right:12px;bottom:12px;padding:4px 8px;background:rgba(12,10,8,0.55);border-radius:4px;color:#cfe0a8;font:12px/1.4 monospace;pointer-events:none;z-index:6;text-shadow:0 1px 3px rgba(0,0,0,0.9);",document.body.appendChild(d);let f=!1;function m(){const M=[["1","Résolution",Ni.resolution[He.resolution].label],["2","Ombres",Ni.shadows[He.shadows].label],["3","Herbe",Ni.grass[He.grass].label+" (au prochain chargement)"],["4","Textures",He.textures?"oui":"non"]];u.innerHTML='<div style="opacity:0.75;margin-bottom:3px">Graphismes — P pour fermer</div>'+M.map(([y,T,A])=>`<div><span style="color:#ffe6b0">${y}</span><span style="opacity:0.7"> ${T} : </span><span style="color:#cfe0a8">${A}</span></div>`).join("")}m();let g=0,x=0,p=0;function h(M){E.key(M.code)&&M.preventDefault()}window.addEventListener("keydown",h),l(),o();const E={update(M){if(g++,x+=M,x>=.5){p=Math.round(g/x),g=0,x=0;const y=n.getContext();d.textContent=f?`${p} i/s · ${y.drawingBufferWidth}x${y.drawingBufferHeight} · ${n.info.render.calls} appels`:`${p} i/s · P : graphismes`}},key(M){if(M==="KeyP")return f=!f,u.style.display=f?"block":"none",d.style.bottom=f?"104px":"12px",!0;if(!f)return!1;if(M==="Digit1")ka("resolution"),r();else if(M==="Digit2")ka("shadows"),s();else if(M==="Digit3")ka("grass"),l();else if(M==="Digit4")He.textures=!He.textures,o();else return!1;return m(),Ny(),Oy(),!0},dispose(){window.removeEventListener("keydown",h),u.remove(),d.remove()}};return E}const zy=document.getElementById("app"),pi=Nx(zy),tn=Fx(),Pe=new yx;Pe.background=new J(1709584);Pe.fog=new il(1709584,40,220);const ho=new Cx(12572917,7236152,.85);Pe.add(ho);const Ga={sky:new J(4873350),ground:new J(2367283),intensity:.55},ln=fl,Cn=pl,Ph=new J,Lh=new J,Ih=new J,Dh=new J,Fr={sky:new J(ln.hemiSky),ground:new J(ln.hemiGround),fog:new J(ln.fog),bg:new J(ln.sky),sun:new J(ln.sunColor)},Or={sky:new J(Cn.hemiSky),ground:new J(Cn.hemiGround),fog:new J(Cn.fog),bg:new J(Cn.sky),sun:new J(Cn.sunColor)},Ie=new Ix(ln.sunColor,ln.sunIntensity);Ie.castShadow=!0;const as=110,Xc=2048,fo=220,Ws=2*as/Xc;Ie.shadow.mapSize.set(Xc,Xc);Ie.shadow.camera.left=-as;Ie.shadow.camera.right=as;Ie.shadow.camera.top=as;Ie.shadow.camera.bottom=-as;Ie.shadow.camera.near=1;Ie.shadow.camera.far=fo*2.4;Ie.shadow.bias=-.0015;Pe.add(Ie);Pe.add(Ie.target);function ky(n){const t=Math.round(n.position.x/Ws)*Ws,e=Math.round(n.position.z/Ws)*Ws,i=Fo();Ie.target.position.set(t,0,e),Ie.position.set(t+i[0]*fo,i[1]*fo,e+i[2]*fo)}const Gy=new J(1645102),Hy=new J(789270),cs=Xd();Pe.add(cs.group);const El=Dy({scene:Pe,camera:tn,domElement:pi.domElement});Pe.traverse(n=>{const t=Array.isArray(n.material)?n.material:n.material?[n.material]:[];for(const e of t)e.isMeshStandardMaterial&&Uo(e)});window.__renderer=pi;window.__ant=El.ant;window.__rooms=cs.rooms;window.__camera=tn;window.__scene=Pe;window.__nodes=li;window.__world=cs;window.__contain=Do;window.__profileR=Fe;window.__groundY=Ft;window.__tree=Ht;window.__world6={shadeAt:Fd,canFoundAt:xl,foundNest:Hd,nestOrigin:_l,getFoundedNest:Gd,populateNest:Vd,sealNest:Wd,harvestNode:kd,get nodes(){return li},foundedMix:No,sunDir:Fo,waterDepthAt:fi,distanceToWater:Yn};pi.setResizeCallback(n=>{tn.aspect=n,tn.updateProjectionMatrix()});const Uh=new Dx;function _f(){const n=Math.min(Uh.getDelta(),.05),t=Uh.elapsedTime;cs.update(n,t,tn),El.update(n,t),xf(),pi.render(Pe,tn),$y.update(n)}const Vy=52,Wy=26;function Nh(n,t,e){const i=1-nt((e+24)/40,0,1),r=nt(1-(Math.abs(n)-Vy)/30,0,1),s=nt(1-(t-Wy)/30,0,1);return i*r*s}function Xy(n,t){const e=Math.min(Nh(n.x,n.y,n.z),Nh(t.x,t.y,t.z)),i=Math.min(Nc(n.x,n.y,n.z),Nc(t.x,t.y,t.z));return Math.max(e,i)}const qy=6;let Xs=null;function Yy(){const n=performance.now()/1e3;Xs===null&&_l()&&(Xs=n),Xs!==null&&Nd(nt((n-Xs)/qy,0,1))}function xf(){Yy();const n=No();Ph.copy(Fr.sky).lerp(Or.sky,n),Lh.copy(Fr.ground).lerp(Or.ground,n),Ih.copy(Fr.fog).lerp(Or.fog,n),Dh.copy(Fr.bg).lerp(Or.bg,n),Ie.color.copy(Fr.sun).lerp(Or.sun,n),Ie.intensity=Bt(ln.sunIntensity,Cn.sunIntensity,n);const t=1-Xy(tn.position,El.ant);Pe.fog.color.copy(Gy).lerp(Ih,t),Pe.fog.near=Bt(6,Bt(ln.fogNear,Cn.fogNear,n),t),Pe.fog.far=Bt(135,Bt(ln.fogFar,Cn.fogFar,n),t),Pe.background.copy(Hy).lerp(Dh,t),pi.toneMappingExposure=Bt(1.28,Bt(ln.exposure,Cn.exposure,n),t),ho.color.copy(Ga.sky).lerp(Ph,t),ho.groundColor.copy(Ga.ground).lerp(Lh,t),ho.intensity=Bt(Ga.intensity,Bt(ln.hemiIntensity,Cn.hemiIntensity,n),t),JM(t),ky(tn)}const $y=By({renderer:pi,sun:Ie,scene:Pe});pi.setAnimationLoop(_f);window.__frame=_f;window.__renderView=(n,t,e=0)=>{tn.position.set(n[0],n[1],n[2]),tn.lookAt(t[0],t[1],t[2]),tn.updateMatrixWorld(),cs.update(1/60,e,tn),xf(),pi.render(Pe,tn)};
