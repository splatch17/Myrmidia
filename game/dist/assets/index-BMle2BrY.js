(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ml="169",up=0,iu=1,hp=2,vd=1,Md=2,Hn=3,fi=0,Fe=1,he=2,li=0,gr=1,ac=2,ru=3,su=4,dp=5,Pi=100,fp=101,pp=102,mp=103,gp=104,_p=200,xp=201,vp=202,Mp=203,cc=204,lc=205,Sp=206,yp=207,Ep=208,bp=209,Tp=210,wp=211,Ap=212,Rp=213,Cp=214,uc=0,hc=1,dc=2,Sr=3,fc=4,pc=5,mc=6,gc=7,Sd=0,Pp=1,Lp=2,ui=0,Ip=1,Dp=2,Up=3,yd=4,Np=5,Fp=6,Op=7,Ed=300,yr=301,Er=302,_c=303,xc=304,Bo=306,Ao=1e3,Ui=1001,vc=1002,qe=1003,Bp=1004,ys=1005,Sn=1006,ea=1007,Ni=1008,qn=1009,bd=1010,Td=1011,rs=1012,gl=1013,ki=1014,Un=1015,as=1016,_l=1017,xl=1018,br=1020,wd=35902,Ad=1021,Rd=1022,bn=1023,Cd=1024,Pd=1025,_r=1026,Tr=1027,vl=1028,Ml=1029,Ld=1030,Sl=1031,yl=1033,so=33776,oo=33777,ao=33778,co=33779,Mc=35840,Sc=35841,yc=35842,Ec=35843,bc=36196,Tc=37492,wc=37496,Ac=37808,Rc=37809,Cc=37810,Pc=37811,Lc=37812,Ic=37813,Dc=37814,Uc=37815,Nc=37816,Fc=37817,Oc=37818,Bc=37819,zc=37820,kc=37821,lo=36492,Hc=36494,Gc=36495,Id=36283,Vc=36284,Wc=36285,Xc=36286,zp=3200,Dd=3201,Ud=0,kp=1,ci="",ln="srgb",gi="srgb-linear",El="display-p3",zo="display-p3-linear",Ro="linear",le="srgb",Co="rec709",Po="p3",$i=7680,ou=519,Hp=512,Gp=513,Vp=514,Nd=515,Wp=516,Xp=517,Yp=518,qp=519,au=35044,$p=35048,cu="300 es",Wn=2e3,Lo=2001;class Pr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],na=Math.PI/180,Yc=180/Math.PI;function cs(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]).toLowerCase()}function Xe(n,t,e){return Math.max(t,Math.min(e,n))}function Kp(n,t){return(n%t+t)%t}function ia(n,t,e){return(1-e)*n+e*t}function Fr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ge(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class $t{constructor(t=0,e=0){$t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Xe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,i,r,s,o,a,c,l){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l)}set(t,e,i,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],m=i[5],g=i[8],x=r[0],p=r[3],f=r[6],E=r[1],y=r[4],M=r[7],b=r[2],T=r[5],v=r[8];return s[0]=o*x+a*E+c*b,s[3]=o*p+a*y+c*T,s[6]=o*f+a*M+c*v,s[1]=l*x+u*E+h*b,s[4]=l*p+u*y+h*T,s[7]=l*f+u*M+h*v,s[2]=d*x+m*E+g*b,s[5]=d*p+m*y+g*T,s[8]=d*f+m*M+g*v,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,d=a*c-u*s,m=l*s-o*c,g=e*h+i*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=h*x,t[1]=(r*l-u*i)*x,t[2]=(a*i-r*o)*x,t[3]=d*x,t[4]=(u*e-r*c)*x,t[5]=(r*s-a*e)*x,t[6]=m*x,t[7]=(i*c-l*e)*x,t[8]=(o*e-i*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ra.makeScale(t,e)),this}rotate(t){return this.premultiply(ra.makeRotation(-t)),this}translate(t,e){return this.premultiply(ra.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ra=new Nt;function Fd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ss(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function jp(){const n=ss("canvas");return n.style.display="block",n}const lu={};function uo(n){n in lu||(lu[n]=!0,console.warn(n))}function Zp(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function Jp(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Qp(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const uu=new Nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hu=new Nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Or={[gi]:{transfer:Ro,primaries:Co,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[ln]:{transfer:le,primaries:Co,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[zo]:{transfer:Ro,primaries:Po,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(hu),fromReference:n=>n.applyMatrix3(uu)},[El]:{transfer:le,primaries:Po,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(hu),fromReference:n=>n.applyMatrix3(uu).convertLinearToSRGB()}},tm=new Set([gi,zo]),Zt={enabled:!0,_workingColorSpace:gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!tm.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Or[t].toReference,r=Or[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Or[n].primaries},getTransfer:function(n){return n===ci?Ro:Or[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Or[t].luminanceCoefficients)}};function xr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function sa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ki;class em{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ki===void 0&&(Ki=ss("canvas")),Ki.width=t.width,Ki.height=t.height;const i=Ki.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ss("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=xr(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(xr(e[i]/255)*255):e[i]=xr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let nm=0;class Od{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=cs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(oa(r[o].image)):s.push(oa(r[o]))}else s=oa(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function oa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?em.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let im=0;class Le extends Pr{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,i=Ui,r=Ui,s=Sn,o=Ni,a=bn,c=qn,l=Le.DEFAULT_ANISOTROPY,u=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=cs(),this.name="",this.source=new Od(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ed)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ao:t.x=t.x-Math.floor(t.x);break;case Ui:t.x=t.x<0?0:1;break;case vc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ao:t.y=t.y-Math.floor(t.y);break;case Ui:t.y=t.y<0?0:1;break;case vc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=Ed;Le.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,i=0,r=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],m=c[5],g=c[9],x=c[2],p=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,M=(m+1)/2,b=(f+1)/2,T=(u+d)/4,v=(h+x)/4,A=(g+p)/4;return y>M&&y>b?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=v/i):M>b?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=A/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=v/s,r=A/s),this.set(i,r,s,e),this}let E=Math.sqrt((p-g)*(p-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(h-x)/E,this.z=(d-u)/E,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rm extends Pr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Le(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Od(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends rm{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Bd extends Le{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=qe,this.minFilter=qe,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class sm extends Le{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=qe,this.minFilter=qe,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lr{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],m=s[o+1],g=s[o+2],x=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=x;return}if(h!==x||c!==d||l!==m||u!==g){let p=1-a;const f=c*d+l*m+u*g+h*x,E=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const b=Math.sqrt(y),T=Math.atan2(b,f*E);p=Math.sin(p*T)/b,a=Math.sin(a*T)/b}const M=a*E;if(c=c*p+d*M,l=l*p+m*M,u=u*p+g*M,h=h*p+x*M,p===1-a){const b=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=b,l*=b,u*=b,h*=b}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return t[e]=a*g+u*h+c*m-l*d,t[e+1]=c*g+u*d+l*h-a*m,t[e+2]=l*g+u*m+a*d-c*h,t[e+3]=u*g-a*h-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),d=c(i/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"YZX":this._x=d*u*h+l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h-d*m*g;break;case"XZY":this._x=d*u*h-l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,i=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(du.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(du.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*i),u=2*(a*e-s*r),h=2*(s*i-o*e);return this.x=e+c*l+o*h-a*u,this.y=i+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return aa.copy(this).projectOnVector(t),this.sub(aa)}reflect(t){return this.sub(aa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Xe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const aa=new k,du=new Lr;class Xi{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,gn):gn.fromBufferAttribute(s,o),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Es.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Es.copy(i.boundingBox)),Es.applyMatrix4(t.matrixWorld),this.union(Es)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Br),bs.subVectors(this.max,Br),ji.subVectors(t.a,Br),Zi.subVectors(t.b,Br),Ji.subVectors(t.c,Br),Qn.subVectors(Zi,ji),ti.subVectors(Ji,Zi),Mi.subVectors(ji,Ji);let e=[0,-Qn.z,Qn.y,0,-ti.z,ti.y,0,-Mi.z,Mi.y,Qn.z,0,-Qn.x,ti.z,0,-ti.x,Mi.z,0,-Mi.x,-Qn.y,Qn.x,0,-ti.y,ti.x,0,-Mi.y,Mi.x,0];return!ca(e,ji,Zi,Ji,bs)||(e=[1,0,0,0,1,0,0,0,1],!ca(e,ji,Zi,Ji,bs))?!1:(Ts.crossVectors(Qn,ti),e=[Ts.x,Ts.y,Ts.z],ca(e,ji,Zi,Ji,bs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Fn=[new k,new k,new k,new k,new k,new k,new k,new k],gn=new k,Es=new Xi,ji=new k,Zi=new k,Ji=new k,Qn=new k,ti=new k,Mi=new k,Br=new k,bs=new k,Ts=new k,Si=new k;function ca(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Si.fromArray(n,s);const a=r.x*Math.abs(Si.x)+r.y*Math.abs(Si.y)+r.z*Math.abs(Si.z),c=t.dot(Si),l=e.dot(Si),u=i.dot(Si);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const om=new Xi,zr=new k,la=new k;class Ir{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):om.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zr.subVectors(t,this.center);const e=zr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(zr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(la.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zr.copy(t.center).add(la)),this.expandByPoint(zr.copy(t.center).sub(la))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new k,ua=new k,ws=new k,ei=new k,ha=new k,As=new k,da=new k;class am{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){ua.copy(t).add(e).multiplyScalar(.5),ws.copy(e).sub(t).normalize(),ei.copy(this.origin).sub(ua);const s=t.distanceTo(e)*.5,o=-this.direction.dot(ws),a=ei.dot(this.direction),c=-ei.dot(ws),l=ei.lengthSq(),u=Math.abs(1-o*o);let h,d,m,g;if(u>0)if(h=o*c-a,d=o*a-c,g=s*u,h>=0)if(d>=-g)if(d<=g){const x=1/u;h*=x,d*=x,m=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),m=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),m=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ua).addScaledVector(ws,d),m}intersectSphere(t,e){On.subVectors(t.center,this.origin);const i=On.dot(this.direction),r=On.dot(On)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,i,r,s){ha.subVectors(e,t),As.subVectors(i,t),da.crossVectors(ha,As);let o=this.direction.dot(da),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ei.subVectors(this.origin,t);const c=a*this.direction.dot(As.crossVectors(ei,As));if(c<0)return null;const l=a*this.direction.dot(ha.cross(ei));if(l<0||c+l>o)return null;const u=-a*ei.dot(da);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(t,e,i,r,s,o,a,c,l,u,h,d,m,g,x,p){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l,u,h,d,m,g,x,p)}set(t,e,i,r,s,o,a,c,l,u,h,d,m,g,x,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=g,f[11]=x,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Qi.setFromMatrixColumn(t,0).length(),s=1/Qi.setFromMatrixColumn(t,1).length(),o=1/Qi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=o*u,m=o*h,g=a*u,x=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=m+g*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,m=c*h,g=l*u,x=l*h;e[0]=d+x*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=m*a-g,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,m=c*h,g=l*u,x=l*h;e[0]=d-x*a,e[4]=-o*h,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*u,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,m=o*h,g=a*u,x=a*h;e[0]=c*u,e[4]=g*l-m,e[8]=d*l+x,e[1]=c*h,e[5]=x*l+d,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,m=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-d*h,e[8]=g*h+m,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=m*h+g,e[10]=d-x*h}else if(t.order==="XZY"){const d=o*c,m=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+x,e[5]=o*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=a*u,e[10]=x*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cm,t,lm)}lookAt(t,e,i){const r=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),ni.crossVectors(i,tn),ni.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),ni.crossVectors(i,tn)),ni.normalize(),Rs.crossVectors(tn,ni),r[0]=ni.x,r[4]=Rs.x,r[8]=tn.x,r[1]=ni.y,r[5]=Rs.y,r[9]=tn.y,r[2]=ni.z,r[6]=Rs.z,r[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],m=i[13],g=i[2],x=i[6],p=i[10],f=i[14],E=i[3],y=i[7],M=i[11],b=i[15],T=r[0],v=r[4],A=r[8],C=r[12],_=r[1],S=r[5],L=r[9],I=r[13],U=r[2],W=r[6],z=r[10],q=r[14],F=r[3],$=r[7],nt=r[11],ot=r[15];return s[0]=o*T+a*_+c*U+l*F,s[4]=o*v+a*S+c*W+l*$,s[8]=o*A+a*L+c*z+l*nt,s[12]=o*C+a*I+c*q+l*ot,s[1]=u*T+h*_+d*U+m*F,s[5]=u*v+h*S+d*W+m*$,s[9]=u*A+h*L+d*z+m*nt,s[13]=u*C+h*I+d*q+m*ot,s[2]=g*T+x*_+p*U+f*F,s[6]=g*v+x*S+p*W+f*$,s[10]=g*A+x*L+p*z+f*nt,s[14]=g*C+x*I+p*q+f*ot,s[3]=E*T+y*_+M*U+b*F,s[7]=E*v+y*S+M*W+b*$,s[11]=E*A+y*L+M*z+b*nt,s[15]=E*C+y*I+M*q+b*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],m=t[14],g=t[3],x=t[7],p=t[11],f=t[15];return g*(+s*c*h-r*l*h-s*a*d+i*l*d+r*a*m-i*c*m)+x*(+e*c*m-e*l*d+s*o*d-r*o*m+r*l*u-s*c*u)+p*(+e*l*h-e*a*m-s*o*h+i*o*m+s*a*u-i*l*u)+f*(-r*a*u-e*c*h+e*a*d+r*o*h-i*o*d+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],m=t[11],g=t[12],x=t[13],p=t[14],f=t[15],E=h*p*l-x*d*l+x*c*m-a*p*m-h*c*f+a*d*f,y=g*d*l-u*p*l-g*c*m+o*p*m+u*c*f-o*d*f,M=u*x*l-g*h*l+g*a*m-o*x*m-u*a*f+o*h*f,b=g*h*c-u*x*c-g*a*d+o*x*d+u*a*p-o*h*p,T=e*E+i*y+r*M+s*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const v=1/T;return t[0]=E*v,t[1]=(x*d*s-h*p*s-x*r*m+i*p*m+h*r*f-i*d*f)*v,t[2]=(a*p*s-x*c*s+x*r*l-i*p*l-a*r*f+i*c*f)*v,t[3]=(h*c*s-a*d*s-h*r*l+i*d*l+a*r*m-i*c*m)*v,t[4]=y*v,t[5]=(u*p*s-g*d*s+g*r*m-e*p*m-u*r*f+e*d*f)*v,t[6]=(g*c*s-o*p*s-g*r*l+e*p*l+o*r*f-e*c*f)*v,t[7]=(o*d*s-u*c*s+u*r*l-e*d*l-o*r*m+e*c*m)*v,t[8]=M*v,t[9]=(g*h*s-u*x*s-g*i*m+e*x*m+u*i*f-e*h*f)*v,t[10]=(o*x*s-g*a*s+g*i*l-e*x*l-o*i*f+e*a*f)*v,t[11]=(u*a*s-o*h*s-u*i*l+e*h*l+o*i*m-e*a*m)*v,t[12]=b*v,t[13]=(u*x*r-g*h*r+g*i*d-e*x*d-u*i*p+e*h*p)*v,t[14]=(g*a*r-o*x*r-g*i*c+e*x*c+o*i*p-e*a*p)*v,t[15]=(o*h*r-u*a*r+u*i*c-e*h*c-o*i*d+e*a*d)*v,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,h=a+a,d=s*l,m=s*u,g=s*h,x=o*u,p=o*h,f=a*h,E=c*l,y=c*u,M=c*h,b=i.x,T=i.y,v=i.z;return r[0]=(1-(x+f))*b,r[1]=(m+M)*b,r[2]=(g-y)*b,r[3]=0,r[4]=(m-M)*T,r[5]=(1-(d+f))*T,r[6]=(p+E)*T,r[7]=0,r[8]=(g+y)*v,r[9]=(p-E)*v,r[10]=(1-(d+x))*v,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Qi.set(r[0],r[1],r[2]).length();const o=Qi.set(r[4],r[5],r[6]).length(),a=Qi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],_n.copy(this);const l=1/s,u=1/o,h=1/a;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=h,_n.elements[9]*=h,_n.elements[10]*=h,e.setFromRotationMatrix(_n),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=Wn){const c=this.elements,l=2*s/(e-t),u=2*s/(i-r),h=(e+t)/(e-t),d=(i+r)/(i-r);let m,g;if(a===Wn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Lo)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Wn){const c=this.elements,l=1/(e-t),u=1/(i-r),h=1/(o-s),d=(e+t)*l,m=(i+r)*u;let g,x;if(a===Wn)g=(o+s)*h,x=-2*h;else if(a===Lo)g=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Qi=new k,_n=new Jt,cm=new k(0,0,0),lm=new k(1,1,1),ni=new k,Rs=new k,tn=new k,fu=new Jt,pu=new Lr;class An{constructor(t=0,e=0,i=0,r=An.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return fu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pu.setFromEuler(this),this.setFromQuaternion(pu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class zd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let um=0;const mu=new k,tr=new Lr,Bn=new Jt,Cs=new k,kr=new k,hm=new k,dm=new Lr,gu=new k(1,0,0),_u=new k(0,1,0),xu=new k(0,0,1),vu={type:"added"},fm={type:"removed"},er={type:"childadded",child:null},fa={type:"childremoved",child:null};class Ae extends Pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new k,e=new An,i=new Lr,r=new k(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Nt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.multiply(tr),this}rotateOnWorldAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.premultiply(tr),this}rotateX(t){return this.rotateOnAxis(gu,t)}rotateY(t){return this.rotateOnAxis(_u,t)}rotateZ(t){return this.rotateOnAxis(xu,t)}translateOnAxis(t,e){return mu.copy(t).applyQuaternion(this.quaternion),this.position.add(mu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gu,t)}translateY(t){return this.translateOnAxis(_u,t)}translateZ(t){return this.translateOnAxis(xu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Cs.copy(t):Cs.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(kr,Cs,this.up):Bn.lookAt(Cs,kr,this.up),this.quaternion.setFromRotationMatrix(Bn),r&&(Bn.extractRotation(r.matrixWorld),tr.setFromRotationMatrix(Bn),this.quaternion.premultiply(tr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vu),er.child=t,this.dispatchEvent(er),er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fm),fa.child=t,this.dispatchEvent(fa),fa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vu),er.child=t,this.dispatchEvent(er),er.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,t,hm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,dm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(t.shapes,h)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Ae.DEFAULT_UP=new k(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new k,zn=new k,pa=new k,kn=new k,nr=new k,ir=new k,Mu=new k,ma=new k,ga=new k,_a=new k,xa=new de,va=new de,Ma=new de;class yn{constructor(t=new k,e=new k,i=new k){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),xn.subVectors(t,e),r.cross(xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){xn.subVectors(r,e),zn.subVectors(i,e),pa.subVectors(t,e);const o=xn.dot(xn),a=xn.dot(zn),c=xn.dot(pa),l=zn.dot(zn),u=zn.dot(pa),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(l*c-a*u)*d,g=(o*u-a*c)*d;return s.set(1-m-g,g,m)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(t,e,i,r,s,o,a,c){return this.getBarycoord(t,e,i,r,kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,kn.x),c.addScaledVector(o,kn.y),c.addScaledVector(a,kn.z),c)}static getInterpolatedAttribute(t,e,i,r,s,o){return xa.setScalar(0),va.setScalar(0),Ma.setScalar(0),xa.fromBufferAttribute(t,e),va.fromBufferAttribute(t,i),Ma.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(xa,s.x),o.addScaledVector(va,s.y),o.addScaledVector(Ma,s.z),o}static isFrontFacing(t,e,i,r){return xn.subVectors(i,e),zn.subVectors(t,e),xn.cross(zn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),xn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return yn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;nr.subVectors(r,i),ir.subVectors(s,i),ma.subVectors(t,i);const c=nr.dot(ma),l=ir.dot(ma);if(c<=0&&l<=0)return e.copy(i);ga.subVectors(t,r);const u=nr.dot(ga),h=ir.dot(ga);if(u>=0&&h<=u)return e.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(nr,o);_a.subVectors(t,s);const m=nr.dot(_a),g=ir.dot(_a);if(g>=0&&m<=g)return e.copy(s);const x=m*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(ir,a);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return Mu.subVectors(s,r),a=(h-u)/(h-u+(m-g)),e.copy(r).addScaledVector(Mu,a);const f=1/(p+x+d);return o=x*f,a=d*f,e.copy(i).addScaledVector(nr,o).addScaledVector(ir,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Ps={h:0,s:0,l:0};function Sa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Z{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Zt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Zt.workingColorSpace){if(t=Kp(t,1),e=Xe(e,0,1),i=Xe(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Sa(o,s,t+1/3),this.g=Sa(o,s,t),this.b=Sa(o,s,t-1/3)}return Zt.toWorkingColorSpace(this,r),this}setStyle(t,e=ln){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){const i=kd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xr(t.r),this.g=xr(t.g),this.b=xr(t.b),this}copyLinearToSRGB(t){return this.r=sa(t.r),this.g=sa(t.g),this.b=sa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return Zt.fromWorkingColorSpace(Ce.copy(this),t),Math.round(Xe(Ce.r*255,0,255))*65536+Math.round(Xe(Ce.g*255,0,255))*256+Math.round(Xe(Ce.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Ce.copy(this),e);const i=Ce.r,r=Ce.g,s=Ce.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=ln){Zt.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,i=Ce.g,r=Ce.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(Ps);const i=ia(ii.h,Ps.h,e),r=ia(ii.s,Ps.s,e),s=ia(ii.l,Ps.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new Z;Z.NAMES=kd;let pm=0;class ls extends Pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=cs(),this.name="",this.type="Material",this.blending=gr,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cc,this.blendDst=lc,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Z(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ou,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(i.blending=this.blending),this.side!==fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cc&&(i.blendSrc=this.blendSrc),this.blendDst!==lc&&(i.blendDst=this.blendDst),this.blendEquation!==Pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Sr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ou&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ko extends ls{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Z(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Sd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new k,Ls=new $t;class Tn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=au,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ls.fromBufferAttribute(this,e),Ls.applyMatrix3(t),this.setXY(e,Ls.x,Ls.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Fr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ge(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),r=Ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),r=Ge(r,this.array),s=Ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==au&&(t.usage=this.usage),t}}class Hd extends Tn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Gd extends Tn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ve extends Tn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let mm=0;const an=new Jt,ya=new Ae,rr=new k,en=new Xi,Hr=new Xi,Ee=new k;class pn extends Pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fd(t)?Gd:Hd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Nt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,i){return an.makeTranslation(t,e,i),this.applyMatrix4(an),this}scale(t,e,i){return an.makeScale(t,e,i),this.applyMatrix4(an),this}lookAt(t){return ya.lookAt(t),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ve(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];en.setFromBufferAttribute(s),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ir);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Hr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors(en.min,Hr.min),en.expandByPoint(Ee),Ee.addVectors(en.max,Hr.max),en.expandByPoint(Ee)):(en.expandByPoint(Hr.min),en.expandByPoint(Hr.max))}en.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Ee.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ee));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ee.fromBufferAttribute(a,l),c&&(rr.fromBufferAttribute(t,l),Ee.add(rr)),r=Math.max(r,i.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<i.count;A++)a[A]=new k,c[A]=new k;const l=new k,u=new k,h=new k,d=new $t,m=new $t,g=new $t,x=new k,p=new k;function f(A,C,_){l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,_),d.fromBufferAttribute(s,A),m.fromBufferAttribute(s,C),g.fromBufferAttribute(s,_),u.sub(l),h.sub(l),m.sub(d),g.sub(d);const S=1/(m.x*g.y-g.x*m.y);isFinite(S)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(S),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(S),a[A].add(x),a[C].add(x),a[_].add(x),c[A].add(p),c[C].add(p),c[_].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let A=0,C=E.length;A<C;++A){const _=E[A],S=_.start,L=_.count;for(let I=S,U=S+L;I<U;I+=3)f(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const y=new k,M=new k,b=new k,T=new k;function v(A){b.fromBufferAttribute(r,A),T.copy(b);const C=a[A];y.copy(C),y.sub(b.multiplyScalar(b.dot(C))).normalize(),M.crossVectors(T,C);const S=M.dot(c[A])<0?-1:1;o.setXYZW(A,y.x,y.y,y.z,S)}for(let A=0,C=E.length;A<C;++A){const _=E[A],S=_.start,L=_.count;for(let I=S,U=S+L;I<U;I+=3)v(t.getX(I+0)),v(t.getX(I+1)),v(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new k,s=new k,o=new k,a=new k,c=new k,l=new k,u=new k,h=new k;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let m=0,g=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?m=c[x]*a.data.stride+a.offset:m=c[x]*u;for(let f=0;f<u;f++)d[g++]=l[m++]}return new Tn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],m=t(d,i);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const m=l[h];u.push(m.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Su=new Jt,yi=new am,Is=new Ir,yu=new k,Ds=new k,Us=new k,Ns=new k,Ea=new k,Fs=new k,Eu=new k,Os=new k;class Bt extends Ae{constructor(t=new pn,e=new ko){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Fs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(Ea.fromBufferAttribute(h,t),o?Fs.addScaledVector(Ea,u):Fs.addScaledVector(Ea.sub(e),u))}e.add(Fs)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Is.copy(i.boundingSphere),Is.applyMatrix4(s),yi.copy(t.ray).recast(t.near),!(Is.containsPoint(yi.origin)===!1&&(yi.intersectSphere(Is,yu)===null||yi.origin.distanceToSquared(yu)>(t.far-t.near)**2))&&(Su.copy(s).invert(),yi.copy(t.ray).applyMatrix4(Su),!(i.boundingBox!==null&&yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,yi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const p=d[g],f=o[p.materialIndex],E=Math.max(p.start,m.start),y=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=E,b=y;M<b;M+=3){const T=a.getX(M),v=a.getX(M+1),A=a.getX(M+2);r=Bs(this,f,t,i,l,u,h,T,v,A),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=g,f=x;p<f;p+=3){const E=a.getX(p),y=a.getX(p+1),M=a.getX(p+2);r=Bs(this,o,t,i,l,u,h,E,y,M),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const p=d[g],f=o[p.materialIndex],E=Math.max(p.start,m.start),y=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let M=E,b=y;M<b;M+=3){const T=M,v=M+1,A=M+2;r=Bs(this,f,t,i,l,u,h,T,v,A),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let p=g,f=x;p<f;p+=3){const E=p,y=p+1,M=p+2;r=Bs(this,o,t,i,l,u,h,E,y,M),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function gm(n,t,e,i,r,s,o,a){let c;if(t.side===Fe?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===fi,a),c===null)return null;Os.copy(a),Os.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Os);return l<e.near||l>e.far?null:{distance:l,point:Os.clone(),object:n}}function Bs(n,t,e,i,r,s,o,a,c,l){n.getVertexPosition(a,Ds),n.getVertexPosition(c,Us),n.getVertexPosition(l,Ns);const u=gm(n,t,e,i,Ds,Us,Ns,Eu);if(u){const h=new k;yn.getBarycoord(Eu,Ds,Us,Ns,h),r&&(u.uv=yn.getInterpolatedAttribute(r,a,c,l,h,new $t)),s&&(u.uv1=yn.getInterpolatedAttribute(s,a,c,l,h,new $t)),o&&(u.normal=yn.getInterpolatedAttribute(o,a,c,l,h,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new k,materialIndex:0};yn.getNormal(Ds,Us,Ns,d.normal),u.face=d,u.barycoord=h}return u}class us extends pn{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ve(l,3)),this.setAttribute("normal",new ve(u,3)),this.setAttribute("uv",new ve(h,2));function g(x,p,f,E,y,M,b,T,v,A,C){const _=M/v,S=b/A,L=M/2,I=b/2,U=T/2,W=v+1,z=A+1;let q=0,F=0;const $=new k;for(let nt=0;nt<z;nt++){const ot=nt*S-I;for(let Dt=0;Dt<W;Dt++){const zt=Dt*_-L;$[x]=zt*E,$[p]=ot*y,$[f]=U,l.push($.x,$.y,$.z),$[x]=0,$[p]=0,$[f]=T>0?1:-1,u.push($.x,$.y,$.z),h.push(Dt/v),h.push(1-nt/A),q+=1}}for(let nt=0;nt<A;nt++)for(let ot=0;ot<v;ot++){const Dt=d+ot+W*nt,zt=d+ot+W*(nt+1),Y=d+(ot+1)+W*(nt+1),et=d+(ot+1)+W*nt;c.push(Dt,zt,et),c.push(zt,Y,et),F+=6}a.addGroup(m,F,C),m+=F,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new us(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function wr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ue(n){const t={};for(let e=0;e<n.length;e++){const i=wr(n[e]);for(const r in i)t[r]=i[r]}return t}function _m(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Vd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const xm={clone:wr,merge:Ue};var vm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends ls{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vm,this.fragmentShader=Mm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wr(t.uniforms),this.uniformsGroups=_m(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Wd extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new k,bu=new $t,Tu=new $t;class un extends Wd{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Yc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yc*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,bu,Tu),e.subVectors(Tu,bu)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(na*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const sr=-90,or=1;class Sm extends Ae{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(sr,or,t,e);r.layers=this.layers,this.add(r);const s=new un(sr,or,t,e);s.layers=this.layers,this.add(s);const o=new un(sr,or,t,e);o.layers=this.layers,this.add(o);const a=new un(sr,or,t,e);a.layers=this.layers,this.add(a);const c=new un(sr,or,t,e);c.layers=this.layers,this.add(c);const l=new un(sr,or,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===Wn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Lo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(h,d,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Xd extends Le{constructor(t,e,i,r,s,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:yr,super(t,e,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ym extends Hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Xd(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new us(5,5,5),s=new $n({name:"CubemapFromEquirect",uniforms:wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fe,blending:li});s.uniforms.tEquirect.value=e;const o=new Bt(r,s),a=e.minFilter;return e.minFilter===Ni&&(e.minFilter=Sn),new Sm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const ba=new k,Em=new k,bm=new Nt;class wi{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=ba.subVectors(i,e).cross(Em.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ba),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||bm.getNormalMatrix(t),r=this.coplanarPoint(ba).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new Ir,zs=new k;class bl{constructor(t=new wi,e=new wi,i=new wi,r=new wi,s=new wi,o=new wi){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Wn){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],h=r[6],d=r[7],m=r[8],g=r[9],x=r[10],p=r[11],f=r[12],E=r[13],y=r[14],M=r[15];if(i[0].setComponents(c-s,d-l,p-m,M-f).normalize(),i[1].setComponents(c+s,d+l,p+m,M+f).normalize(),i[2].setComponents(c+o,d+u,p+g,M+E).normalize(),i[3].setComponents(c-o,d-u,p-g,M-E).normalize(),i[4].setComponents(c-a,d-h,p-x,M-y).normalize(),e===Wn)i[5].setComponents(c+a,d+h,p+x,M+y).normalize();else if(e===Lo)i[5].setComponents(a,h,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(t){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(zs.x=r.normal.x>0?t.max.x:t.min.x,zs.y=r.normal.y>0?t.max.y:t.min.y,zs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(zs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yd(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Tm(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<h.length;m++){const g=h[d],x=h[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let m=0,g=h.length;m<g;m++){const x=h[m];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class hs extends pn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=t/a,d=e/c,m=[],g=[],x=[],p=[];for(let f=0;f<u;f++){const E=f*d-o;for(let y=0;y<l;y++){const M=y*h-s;g.push(M,-E,0),x.push(0,0,1),p.push(y/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<a;E++){const y=E+l*f,M=E+l*(f+1),b=E+1+l*(f+1),T=E+1+l*f;m.push(y,M,T),m.push(M,b,T)}this.setIndex(m),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(x,3)),this.setAttribute("uv",new ve(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hs(t.width,t.height,t.widthSegments,t.heightSegments)}}var wm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Am=`#ifdef USE_ALPHAHASH
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
#endif`,Rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Im=`#ifdef USE_AOMAP
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
#endif`,Dm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Um=`#ifdef USE_BATCHING
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
#endif`,Nm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Om=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zm=`#ifdef USE_IRIDESCENCE
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
#endif`,km=`#ifdef USE_BUMPMAP
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
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ym=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$m=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Km=`#define PI 3.141592653589793
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
} // validated`,jm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zm=`vec3 transformedNormal = objectNormal;
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
#endif`,Jm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,t0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,n0="gl_FragColor = linearToOutputTexel( gl_FragColor );",i0=`
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
}`,r0=`#ifdef USE_ENVMAP
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
#endif`,s0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,o0=`#ifdef USE_ENVMAP
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
#endif`,a0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,c0=`#ifdef USE_ENVMAP
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
#endif`,l0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,u0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,d0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f0=`#ifdef USE_GRADIENTMAP
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
}`,p0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_0=`uniform bool receiveShadow;
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
#endif`,x0=`#ifdef USE_ENVMAP
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
#endif`,v0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,M0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,S0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E0=`PhysicalMaterial material;
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
#endif`,b0=`struct PhysicalMaterial {
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
}`,T0=`
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
#endif`,w0=`#if defined( RE_IndirectDiffuse )
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
#endif`,A0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,R0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,I0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,U0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,N0=`#if defined( USE_POINTS_UV )
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
#endif`,F0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,B0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,z0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H0=`#ifdef USE_MORPHTARGETS
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
#endif`,G0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,W0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,X0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$0=`#ifdef USE_NORMALMAP
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
#endif`,K0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ng=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ig=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,og=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ug=`float getShadowMask() {
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
}`,hg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dg=`#ifdef USE_SKINNING
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
#endif`,fg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pg=`#ifdef USE_SKINNING
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
#endif`,mg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_g=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vg=`#ifdef USE_TRANSMISSION
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
#endif`,Mg=`#ifdef USE_TRANSMISSION
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wg=`uniform sampler2D t2D;
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
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lg=`#include <common>
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
}`,Ig=`#if DEPTH_PACKING == 3200
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
}`,Dg=`#define DISTANCE
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
}`,Ug=`#define DISTANCE
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
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`uniform float scale;
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
}`,Bg=`uniform vec3 diffuse;
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
}`,zg=`#include <common>
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
}`,kg=`uniform vec3 diffuse;
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
}`,Hg=`#define LAMBERT
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
}`,Gg=`#define LAMBERT
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
}`,Vg=`#define MATCAP
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
}`,Wg=`#define MATCAP
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
}`,Xg=`#define NORMAL
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
}`,Yg=`#define NORMAL
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
}`,qg=`#define PHONG
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
}`,$g=`#define PHONG
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
}`,Kg=`#define STANDARD
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
}`,jg=`#define STANDARD
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
}`,Zg=`#define TOON
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
}`,Jg=`#define TOON
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
}`,Qg=`uniform float size;
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
}`,t_=`uniform vec3 diffuse;
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
}`,e_=`#include <common>
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
}`,n_=`uniform vec3 color;
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
}`,i_=`uniform float rotation;
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
}`,r_=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:wm,alphahash_pars_fragment:Am,alphamap_fragment:Rm,alphamap_pars_fragment:Cm,alphatest_fragment:Pm,alphatest_pars_fragment:Lm,aomap_fragment:Im,aomap_pars_fragment:Dm,batching_pars_vertex:Um,batching_vertex:Nm,begin_vertex:Fm,beginnormal_vertex:Om,bsdfs:Bm,iridescence_fragment:zm,bumpmap_pars_fragment:km,clipping_planes_fragment:Hm,clipping_planes_pars_fragment:Gm,clipping_planes_pars_vertex:Vm,clipping_planes_vertex:Wm,color_fragment:Xm,color_pars_fragment:Ym,color_pars_vertex:qm,color_vertex:$m,common:Km,cube_uv_reflection_fragment:jm,defaultnormal_vertex:Zm,displacementmap_pars_vertex:Jm,displacementmap_vertex:Qm,emissivemap_fragment:t0,emissivemap_pars_fragment:e0,colorspace_fragment:n0,colorspace_pars_fragment:i0,envmap_fragment:r0,envmap_common_pars_fragment:s0,envmap_pars_fragment:o0,envmap_pars_vertex:a0,envmap_physical_pars_fragment:x0,envmap_vertex:c0,fog_vertex:l0,fog_pars_vertex:u0,fog_fragment:h0,fog_pars_fragment:d0,gradientmap_pars_fragment:f0,lightmap_pars_fragment:p0,lights_lambert_fragment:m0,lights_lambert_pars_fragment:g0,lights_pars_begin:_0,lights_toon_fragment:v0,lights_toon_pars_fragment:M0,lights_phong_fragment:S0,lights_phong_pars_fragment:y0,lights_physical_fragment:E0,lights_physical_pars_fragment:b0,lights_fragment_begin:T0,lights_fragment_maps:w0,lights_fragment_end:A0,logdepthbuf_fragment:R0,logdepthbuf_pars_fragment:C0,logdepthbuf_pars_vertex:P0,logdepthbuf_vertex:L0,map_fragment:I0,map_pars_fragment:D0,map_particle_fragment:U0,map_particle_pars_fragment:N0,metalnessmap_fragment:F0,metalnessmap_pars_fragment:O0,morphinstance_vertex:B0,morphcolor_vertex:z0,morphnormal_vertex:k0,morphtarget_pars_vertex:H0,morphtarget_vertex:G0,normal_fragment_begin:V0,normal_fragment_maps:W0,normal_pars_fragment:X0,normal_pars_vertex:Y0,normal_vertex:q0,normalmap_pars_fragment:$0,clearcoat_normal_fragment_begin:K0,clearcoat_normal_fragment_maps:j0,clearcoat_pars_fragment:Z0,iridescence_pars_fragment:J0,opaque_fragment:Q0,packing:tg,premultiplied_alpha_fragment:eg,project_vertex:ng,dithering_fragment:ig,dithering_pars_fragment:rg,roughnessmap_fragment:sg,roughnessmap_pars_fragment:og,shadowmap_pars_fragment:ag,shadowmap_pars_vertex:cg,shadowmap_vertex:lg,shadowmask_pars_fragment:ug,skinbase_vertex:hg,skinning_pars_vertex:dg,skinning_vertex:fg,skinnormal_vertex:pg,specularmap_fragment:mg,specularmap_pars_fragment:gg,tonemapping_fragment:_g,tonemapping_pars_fragment:xg,transmission_fragment:vg,transmission_pars_fragment:Mg,uv_pars_fragment:Sg,uv_pars_vertex:yg,uv_vertex:Eg,worldpos_vertex:bg,background_vert:Tg,background_frag:wg,backgroundCube_vert:Ag,backgroundCube_frag:Rg,cube_vert:Cg,cube_frag:Pg,depth_vert:Lg,depth_frag:Ig,distanceRGBA_vert:Dg,distanceRGBA_frag:Ug,equirect_vert:Ng,equirect_frag:Fg,linedashed_vert:Og,linedashed_frag:Bg,meshbasic_vert:zg,meshbasic_frag:kg,meshlambert_vert:Hg,meshlambert_frag:Gg,meshmatcap_vert:Vg,meshmatcap_frag:Wg,meshnormal_vert:Xg,meshnormal_frag:Yg,meshphong_vert:qg,meshphong_frag:$g,meshphysical_vert:Kg,meshphysical_frag:jg,meshtoon_vert:Zg,meshtoon_frag:Jg,points_vert:Qg,points_frag:t_,shadow_vert:e_,shadow_frag:n_,sprite_vert:i_,sprite_frag:r_},st={common:{diffuse:{value:new Z(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Z(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Z(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Z(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},Pn={basic:{uniforms:Ue([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Ue([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Z(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Ue([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Z(0)},specular:{value:new Z(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Ue([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Z(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Ue([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Z(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Ue([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Ue([st.points,st.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Ue([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Ue([st.common,st.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Ue([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Ue([st.sprite,st.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Ue([st.common,st.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Ue([st.lights,st.fog,{color:{value:new Z(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};Pn.physical={uniforms:Ue([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Z(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Z(0)},specularColor:{value:new Z(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const ks={r:0,b:0,g:0},bi=new An,s_=new Jt;function o_(n,t,e,i,r,s,o){const a=new Z(0);let c=s===!0?0:1,l,u,h=null,d=0,m=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?e:t).get(y)),y}function x(E){let y=!1;const M=g(E);M===null?f(a,c):M&&M.isColor&&(f(M,1),y=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(E,y){const M=g(y);M&&(M.isCubeTexture||M.mapping===Bo)?(u===void 0&&(u=new Bt(new us(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:wr(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,T,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),bi.copy(y.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(s_.makeRotationFromEuler(bi)),u.material.toneMapped=Zt.getTransfer(M.colorSpace)!==le,(h!==M||d!==M.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,m=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Bt(new hs(2,2),new $n({name:"BackgroundMaterial",uniforms:wr(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(M.colorSpace)!==le,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,m=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function f(E,y){E.getRGB(ks,Vd(n)),i.buffers.color.setClear(ks.r,ks.g,ks.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),c=y,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,f(a,c)},render:x,addToRenderList:p}}function a_(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(_,S,L,I,U){let W=!1;const z=h(I,L,S);s!==z&&(s=z,l(s.object)),W=m(_,I,L,U),W&&g(_,I,L,U),U!==null&&t.update(U,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,M(_,S,L,I),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return n.createVertexArray()}function l(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function h(_,S,L){const I=L.wireframe===!0;let U=i[_.id];U===void 0&&(U={},i[_.id]=U);let W=U[S.id];W===void 0&&(W={},U[S.id]=W);let z=W[I];return z===void 0&&(z=d(c()),W[I]=z),z}function d(_){const S=[],L=[],I=[];for(let U=0;U<e;U++)S[U]=0,L[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:L,attributeDivisors:I,object:_,attributes:{},index:null}}function m(_,S,L,I){const U=s.attributes,W=S.attributes;let z=0;const q=L.getAttributes();for(const F in q)if(q[F].location>=0){const nt=U[F];let ot=W[F];if(ot===void 0&&(F==="instanceMatrix"&&_.instanceMatrix&&(ot=_.instanceMatrix),F==="instanceColor"&&_.instanceColor&&(ot=_.instanceColor)),nt===void 0||nt.attribute!==ot||ot&&nt.data!==ot.data)return!0;z++}return s.attributesNum!==z||s.index!==I}function g(_,S,L,I){const U={},W=S.attributes;let z=0;const q=L.getAttributes();for(const F in q)if(q[F].location>=0){let nt=W[F];nt===void 0&&(F==="instanceMatrix"&&_.instanceMatrix&&(nt=_.instanceMatrix),F==="instanceColor"&&_.instanceColor&&(nt=_.instanceColor));const ot={};ot.attribute=nt,nt&&nt.data&&(ot.data=nt.data),U[F]=ot,z++}s.attributes=U,s.attributesNum=z,s.index=I}function x(){const _=s.newAttributes;for(let S=0,L=_.length;S<L;S++)_[S]=0}function p(_){f(_,0)}function f(_,S){const L=s.newAttributes,I=s.enabledAttributes,U=s.attributeDivisors;L[_]=1,I[_]===0&&(n.enableVertexAttribArray(_),I[_]=1),U[_]!==S&&(n.vertexAttribDivisor(_,S),U[_]=S)}function E(){const _=s.newAttributes,S=s.enabledAttributes;for(let L=0,I=S.length;L<I;L++)S[L]!==_[L]&&(n.disableVertexAttribArray(L),S[L]=0)}function y(_,S,L,I,U,W,z){z===!0?n.vertexAttribIPointer(_,S,L,U,W):n.vertexAttribPointer(_,S,L,I,U,W)}function M(_,S,L,I){x();const U=I.attributes,W=L.getAttributes(),z=S.defaultAttributeValues;for(const q in W){const F=W[q];if(F.location>=0){let $=U[q];if($===void 0&&(q==="instanceMatrix"&&_.instanceMatrix&&($=_.instanceMatrix),q==="instanceColor"&&_.instanceColor&&($=_.instanceColor)),$!==void 0){const nt=$.normalized,ot=$.itemSize,Dt=t.get($);if(Dt===void 0)continue;const zt=Dt.buffer,Y=Dt.type,et=Dt.bytesPerElement,gt=Y===n.INT||Y===n.UNSIGNED_INT||$.gpuType===gl;if($.isInterleavedBufferAttribute){const ut=$.data,At=ut.stride,yt=$.offset;if(ut.isInstancedInterleavedBuffer){for(let Ot=0;Ot<F.locationSize;Ot++)f(F.location+Ot,ut.meshPerAttribute);_.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Ot=0;Ot<F.locationSize;Ot++)p(F.location+Ot);n.bindBuffer(n.ARRAY_BUFFER,zt);for(let Ot=0;Ot<F.locationSize;Ot++)y(F.location+Ot,ot/F.locationSize,Y,nt,At*et,(yt+ot/F.locationSize*Ot)*et,gt)}else{if($.isInstancedBufferAttribute){for(let ut=0;ut<F.locationSize;ut++)f(F.location+ut,$.meshPerAttribute);_.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ut=0;ut<F.locationSize;ut++)p(F.location+ut);n.bindBuffer(n.ARRAY_BUFFER,zt);for(let ut=0;ut<F.locationSize;ut++)y(F.location+ut,ot/F.locationSize,Y,nt,ot*et,ot/F.locationSize*ut*et,gt)}}else if(z!==void 0){const nt=z[q];if(nt!==void 0)switch(nt.length){case 2:n.vertexAttrib2fv(F.location,nt);break;case 3:n.vertexAttrib3fv(F.location,nt);break;case 4:n.vertexAttrib4fv(F.location,nt);break;default:n.vertexAttrib1fv(F.location,nt)}}}}E()}function b(){A();for(const _ in i){const S=i[_];for(const L in S){const I=S[L];for(const U in I)u(I[U].object),delete I[U];delete S[L]}delete i[_]}}function T(_){if(i[_.id]===void 0)return;const S=i[_.id];for(const L in S){const I=S[L];for(const U in I)u(I[U].object),delete I[U];delete S[L]}delete i[_.id]}function v(_){for(const S in i){const L=i[S];if(L[_.id]===void 0)continue;const I=L[_.id];for(const U in I)u(I[U].object),delete I[U];delete L[_.id]}}function A(){C(),o=!0,s!==r&&(s=r,l(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:p,disableUnusedAttributes:E}}function c_(n,t,e){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),e.update(u,i,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];e.update(m,i,1)}function c(l,u,h,d){if(h===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x];for(let x=0;x<d.length;x++)e.update(g,i,d[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function l_(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const v=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(v){return!(v!==bn&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){const A=v===as&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==qn&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&v!==Un&&!A)}function c(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const v=t.get("EXT_clip_control");v.clipControlEXT(v.LOWER_LEFT_EXT,v.ZERO_TO_ONE_EXT)}const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:b,maxSamples:T}}function u_(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new wi,a=new Nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,f=n.get(h);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{const E=s?0:i,y=E*4;let M=f.clippingState||null;c.value=M,M=u(g,d,y,m);for(let b=0;b!==y;++b)M[b]=e[b];f.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,m,g){const x=h!==null?h.length:0;let p=null;if(x!==0){if(p=c.value,g!==!0||p===null){const f=m+x*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let y=0,M=m;y!==x;++y,M+=4)o.copy(h[y]).applyMatrix4(E,a),o.normal.toArray(p,M),p[M+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function h_(n){let t=new WeakMap;function e(o,a){return a===_c?o.mapping=yr:a===xc&&(o.mapping=Er),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===_c||a===xc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new ym(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class qd extends Wd{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const fr=4,wu=[.125,.215,.35,.446,.526,.582],Li=20,Ta=new qd,Au=new Z;let wa=null,Aa=0,Ra=0,Ca=!1;const Ai=(1+Math.sqrt(5))/2,ar=1/Ai,Ru=[new k(-Ai,ar,0),new k(Ai,ar,0),new k(-ar,0,Ai),new k(ar,0,Ai),new k(0,Ai,-ar),new k(0,Ai,ar),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class Cu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){wa=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wa,Aa,Ra),this._renderer.xr.enabled=Ca,t.scissorTest=!1,Hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===yr||t.mapping===Er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wa=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:as,format:bn,colorSpace:gi,depthBuffer:!1},r=Pu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pu(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=d_(s)),this._blurMaterial=f_(s,t,e)}return r}_compileMaterial(t){const e=new Bt(this._lodPlanes[0],t);this._renderer.compile(e,Ta)}_sceneToCubeUV(t,e,i,r){const a=new un(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Au),u.toneMapping=ui,u.autoClear=!1;const m=new ko({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),g=new Bt(new us,m);let x=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,x=!0):(m.color.copy(Au),x=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):E===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const y=this._cubeSize;Hs(r,E*y,f>2?y:0,y,y),u.setRenderTarget(r),x&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===yr||t.mapping===Er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Iu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Bt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Hs(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Ta)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ru[(r-s-1)%Ru.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Bt(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Li-1),x=s/g,p=isFinite(s)?1+Math.floor(u*x):Li;p>Li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Li}`);const f=[];let E=0;for(let v=0;v<Li;++v){const A=v/x,C=Math.exp(-A*A/2);f.push(C),v===0?E+=C:v<p&&(E+=2*C)}for(let v=0;v<f.length;v++)f[v]=f[v]/E;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const M=this._sizeLods[r],b=3*M*(r>y-fr?r-y+fr:0),T=4*(this._cubeSize-M);Hs(e,b,T,3*M,2*M),c.setRenderTarget(e),c.render(h,Ta)}}function d_(n){const t=[],e=[],i=[];let r=n;const s=n-fr+1+wu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>n-fr?c=wu[o-n+fr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,x=3,p=2,f=1,E=new Float32Array(x*g*m),y=new Float32Array(p*g*m),M=new Float32Array(f*g*m);for(let T=0;T<m;T++){const v=T%3*2/3-1,A=T>2?0:-1,C=[v,A,0,v+2/3,A,0,v+2/3,A+1,0,v,A,0,v+2/3,A+1,0,v,A+1,0];E.set(C,x*g*T),y.set(d,p*g*T);const _=[T,T,T,T,T,T];M.set(_,f*g*T)}const b=new pn;b.setAttribute("position",new Tn(E,x)),b.setAttribute("uv",new Tn(y,p)),b.setAttribute("faceIndex",new Tn(M,f)),t.push(b),r>fr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Pu(n,t,e){const i=new Hi(n,t,e);return i.texture.mapping=Bo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hs(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function f_(n,t,e){const i=new Float32Array(Li),r=new k(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Lu(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Iu(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Tl(){return`

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
	`}function p_(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===_c||c===xc,u=c===yr||c===Er;if(l||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Cu(n)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return l&&m&&m.height>0||u&&m&&r(m)?(e===null&&(e=new Cu(n)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function m_(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&uo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function g_(n,t,e,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let p=0,f=x.length;p<f;p++)t.remove(x[p])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)t.update(d[g],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const x=m[g];for(let p=0,f=x.length;p<f;p++)t.update(x[p],n.ARRAY_BUFFER)}}function l(h){const d=[],m=h.index,g=h.attributes.position;let x=0;if(m!==null){const E=m.array;x=m.version;for(let y=0,M=E.length;y<M;y+=3){const b=E[y+0],T=E[y+1],v=E[y+2];d.push(b,T,T,v,v,b)}}else if(g!==void 0){const E=g.array;x=g.version;for(let y=0,M=E.length/3-1;y<M;y+=3){const b=y+0,T=y+1,v=y+2;d.push(b,T,T,v,v,b)}}else return;const p=new(Fd(d)?Gd:Hd)(d,1);p.version=x;const f=s.get(h);f&&t.remove(f),s.set(h,p)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function __(n,t,e){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,m){n.drawElements(i,m,s,d*o),e.update(m,i,1)}function l(d,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,d*o,g),e.update(m,i,g))}function u(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];e.update(p,i,1)}function h(d,m,g,x){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)l(d[f]/o,m[f],x[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,x,0,g);let f=0;for(let E=0;E<g;E++)f+=m[E];for(let E=0;E<x.length;E++)e.update(f,i,x[E])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function x_(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function v_(n,t,e){const i=new WeakMap,r=new de;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let C=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",C)};d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;m===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let M=a.attributes.position.count*y,b=1;M>t.maxTextureSize&&(b=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const T=new Float32Array(M*b*4*h),v=new Bd(T,M,b,h);v.type=Un,v.needsUpdate=!0;const A=y*4;for(let _=0;_<h;_++){const S=p[_],L=f[_],I=E[_],U=M*b*4*_;for(let W=0;W<S.count;W++){const z=W*A;m===!0&&(r.fromBufferAttribute(S,W),T[U+z+0]=r.x,T[U+z+1]=r.y,T[U+z+2]=r.z,T[U+z+3]=0),g===!0&&(r.fromBufferAttribute(L,W),T[U+z+4]=r.x,T[U+z+5]=r.y,T[U+z+6]=r.z,T[U+z+7]=0),x===!0&&(r.fromBufferAttribute(I,W),T[U+z+8]=r.x,T[U+z+9]=r.y,T[U+z+10]=r.z,T[U+z+11]=I.itemSize===4?r.w:1)}}d={count:h,texture:v,size:new $t(M,b)},i.set(a,d),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let m=0;for(let x=0;x<l.length;x++)m+=l[x];const g=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function M_(n,t,e,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=t.get(c,u);if(r.get(h)!==l&&(t.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class $d extends Le{constructor(t,e,i,r,s,o,a,c,l,u=_r){if(u!==_r&&u!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===_r&&(i=ki),i===void 0&&u===Tr&&(i=br),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:qe,this.minFilter=c!==void 0?c:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Kd=new Le,Du=new $d(1,1),jd=new Bd,Zd=new sm,Jd=new Xd,Uu=[],Nu=[],Fu=new Float32Array(16),Ou=new Float32Array(9),Bu=new Float32Array(4);function Dr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Uu[r];if(s===void 0&&(s=new Float32Array(r),Uu[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Se(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ye(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ho(n,t){let e=Nu[t];e===void 0&&(e=new Int32Array(t),Nu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function S_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function y_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2fv(this.addr,t),ye(e,t)}}function E_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;n.uniform3fv(this.addr,t),ye(e,t)}}function b_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4fv(this.addr,t),ye(e,t)}}function T_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,i))return;Bu.set(i),n.uniformMatrix2fv(this.addr,!1,Bu),ye(e,i)}}function w_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,i))return;Ou.set(i),n.uniformMatrix3fv(this.addr,!1,Ou),ye(e,i)}}function A_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,i))return;Fu.set(i),n.uniformMatrix4fv(this.addr,!1,Fu),ye(e,i)}}function R_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function C_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2iv(this.addr,t),ye(e,t)}}function P_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3iv(this.addr,t),ye(e,t)}}function L_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4iv(this.addr,t),ye(e,t)}}function I_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function D_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2uiv(this.addr,t),ye(e,t)}}function U_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3uiv(this.addr,t),ye(e,t)}}function N_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4uiv(this.addr,t),ye(e,t)}}function F_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Du.compareFunction=Nd,s=Du):s=Kd,e.setTexture2D(t||s,r)}function O_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Zd,r)}function B_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Jd,r)}function z_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||jd,r)}function k_(n){switch(n){case 5126:return S_;case 35664:return y_;case 35665:return E_;case 35666:return b_;case 35674:return T_;case 35675:return w_;case 35676:return A_;case 5124:case 35670:return R_;case 35667:case 35671:return C_;case 35668:case 35672:return P_;case 35669:case 35673:return L_;case 5125:return I_;case 36294:return D_;case 36295:return U_;case 36296:return N_;case 35678:case 36198:case 36298:case 36306:case 35682:return F_;case 35679:case 36299:case 36307:return O_;case 35680:case 36300:case 36308:case 36293:return B_;case 36289:case 36303:case 36311:case 36292:return z_}}function H_(n,t){n.uniform1fv(this.addr,t)}function G_(n,t){const e=Dr(t,this.size,2);n.uniform2fv(this.addr,e)}function V_(n,t){const e=Dr(t,this.size,3);n.uniform3fv(this.addr,e)}function W_(n,t){const e=Dr(t,this.size,4);n.uniform4fv(this.addr,e)}function X_(n,t){const e=Dr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Y_(n,t){const e=Dr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function q_(n,t){const e=Dr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function $_(n,t){n.uniform1iv(this.addr,t)}function K_(n,t){n.uniform2iv(this.addr,t)}function j_(n,t){n.uniform3iv(this.addr,t)}function Z_(n,t){n.uniform4iv(this.addr,t)}function J_(n,t){n.uniform1uiv(this.addr,t)}function Q_(n,t){n.uniform2uiv(this.addr,t)}function tx(n,t){n.uniform3uiv(this.addr,t)}function ex(n,t){n.uniform4uiv(this.addr,t)}function nx(n,t,e){const i=this.cache,r=t.length,s=Ho(e,r);Se(i,s)||(n.uniform1iv(this.addr,s),ye(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Kd,s[o])}function ix(n,t,e){const i=this.cache,r=t.length,s=Ho(e,r);Se(i,s)||(n.uniform1iv(this.addr,s),ye(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Zd,s[o])}function rx(n,t,e){const i=this.cache,r=t.length,s=Ho(e,r);Se(i,s)||(n.uniform1iv(this.addr,s),ye(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Jd,s[o])}function sx(n,t,e){const i=this.cache,r=t.length,s=Ho(e,r);Se(i,s)||(n.uniform1iv(this.addr,s),ye(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||jd,s[o])}function ox(n){switch(n){case 5126:return H_;case 35664:return G_;case 35665:return V_;case 35666:return W_;case 35674:return X_;case 35675:return Y_;case 35676:return q_;case 5124:case 35670:return $_;case 35667:case 35671:return K_;case 35668:case 35672:return j_;case 35669:case 35673:return Z_;case 5125:return J_;case 36294:return Q_;case 36295:return tx;case 36296:return ex;case 35678:case 36198:case 36298:case 36306:case 35682:return nx;case 35679:case 36299:case 36307:return ix;case 35680:case 36300:case 36308:case 36293:return rx;case 36289:case 36303:case 36311:case 36292:return sx}}class ax{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=k_(e.type)}}class cx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ox(e.type)}}class lx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const Pa=/(\w+)(\])?(\[|\.)?/g;function zu(n,t){n.seq.push(t),n.map[t.id]=t}function ux(n,t,e){const i=n.name,r=i.length;for(Pa.lastIndex=0;;){const s=Pa.exec(i),o=Pa.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){zu(e,l===void 0?new ax(a,n,t):new cx(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new lx(a),zu(e,h)),e=h}}}class ho{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);ux(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function ku(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const hx=37297;let dx=0;function fx(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function px(n){const t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(n);let i;switch(t===e?i="":t===Po&&e===Co?i="LinearDisplayP3ToLinearSRGB":t===Co&&e===Po&&(i="LinearSRGBToLinearDisplayP3"),n){case gi:case zo:return[i,"LinearTransferOETF"];case ln:case El:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Hu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+fx(n.getShaderSource(t),o)}else return r}function mx(n,t){const e=px(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function gx(n,t){let e;switch(t){case Ip:e="Linear";break;case Dp:e="Reinhard";break;case Up:e="Cineon";break;case yd:e="ACESFilmic";break;case Fp:e="AgX";break;case Op:e="Neutral";break;case Np:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Gs=new k;function _x(){Zt.getLuminanceCoefficients(Gs);const n=Gs.x.toFixed(4),t=Gs.y.toFixed(4),e=Gs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($r).join(`
`)}function vx(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Mx(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function $r(n){return n!==""}function Gu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Sx=/^[ \t]*#include +<([\w\d./]+)>/gm;function qc(n){return n.replace(Sx,Ex)}const yx=new Map;function Ex(n,t){let e=Ut[t];if(e===void 0){const i=yx.get(t);if(i!==void 0)e=Ut[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return qc(e)}const bx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wu(n){return n.replace(bx,Tx)}function Tx(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xu(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function wx(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vd?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Md?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Hn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ax(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case yr:case Er:t="ENVMAP_TYPE_CUBE";break;case Bo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Rx(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Er:t="ENVMAP_MODE_REFRACTION";break}return t}function Cx(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Sd:t="ENVMAP_BLENDING_MULTIPLY";break;case Pp:t="ENVMAP_BLENDING_MIX";break;case Lp:t="ENVMAP_BLENDING_ADD";break}return t}function Px(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Lx(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=wx(e),l=Ax(e),u=Rx(e),h=Cx(e),d=Px(e),m=xx(e),g=vx(s),x=r.createProgram();let p,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($r).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($r).join(`
`),f.length>0&&(f+=`
`)):(p=[Xu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),f=[Xu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ui?"#define TONE_MAPPING":"",e.toneMapping!==ui?Ut.tonemapping_pars_fragment:"",e.toneMapping!==ui?gx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,mx("linearToOutputTexel",e.outputColorSpace),_x(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($r).join(`
`)),o=qc(o),o=Gu(o,e),o=Vu(o,e),a=qc(a),a=Gu(a,e),a=Vu(a,e),o=Wu(o),a=Wu(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=E+p+o,M=E+f+a,b=ku(r,r.VERTEX_SHADER,y),T=ku(r,r.FRAGMENT_SHADER,M);r.attachShader(x,b),r.attachShader(x,T),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function v(S){if(n.debug.checkShaderErrors){const L=r.getProgramInfoLog(x).trim(),I=r.getShaderInfoLog(b).trim(),U=r.getShaderInfoLog(T).trim();let W=!0,z=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,b,T);else{const q=Hu(r,b,"vertex"),F=Hu(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+L+`
`+q+`
`+F)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(I===""||U==="")&&(z=!1);z&&(S.diagnostics={runnable:W,programLog:L,vertexShader:{log:I,prefix:p},fragmentShader:{log:U,prefix:f}})}r.deleteShader(b),r.deleteShader(T),A=new ho(r,x),C=Mx(r,x)}let A;this.getUniforms=function(){return A===void 0&&v(this),A};let C;this.getAttributes=function(){return C===void 0&&v(this),C};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(x,hx)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=T,this}let Ix=0;class Dx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Ux(t),e.set(t,i)),i}}class Ux{constructor(t){this.id=Ix++,this.code=t,this.usedTimes=0}}function Nx(n,t,e,i,r,s,o){const a=new zd,c=new Dx,l=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,m=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function f(_,S,L,I,U){const W=I.fog,z=U.geometry,q=_.isMeshStandardMaterial?I.environment:null,F=(_.isMeshStandardMaterial?e:t).get(_.envMap||q),$=F&&F.mapping===Bo?F.image.height:null,nt=x[_.type];_.precision!==null&&(g=r.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const ot=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Dt=ot!==void 0?ot.length:0;let zt=0;z.morphAttributes.position!==void 0&&(zt=1),z.morphAttributes.normal!==void 0&&(zt=2),z.morphAttributes.color!==void 0&&(zt=3);let Y,et,gt,ut;if(nt){const He=Pn[nt];Y=He.vertexShader,et=He.fragmentShader}else Y=_.vertexShader,et=_.fragmentShader,c.update(_),gt=c.getVertexShaderID(_),ut=c.getFragmentShaderID(_);const At=n.getRenderTarget(),yt=U.isInstancedMesh===!0,Ot=U.isBatchedMesh===!0,te=!!_.map,Vt=!!_.matcap,D=!!F,Ze=!!_.aoMap,kt=!!_.lightMap,Xt=!!_.bumpMap,Rt=!!_.normalMap,ae=!!_.displacementMap,Lt=!!_.emissiveMap,P=!!_.metalnessMap,w=!!_.roughnessMap,H=_.anisotropy>0,j=_.clearcoat>0,Q=_.dispersion>0,K=_.iridescence>0,vt=_.sheen>0,at=_.transmission>0,ft=H&&!!_.anisotropyMap,Yt=j&&!!_.clearcoatMap,it=j&&!!_.clearcoatNormalMap,pt=j&&!!_.clearcoatRoughnessMap,Ct=K&&!!_.iridescenceMap,Pt=K&&!!_.iridescenceThicknessMap,mt=vt&&!!_.sheenColorMap,Ht=vt&&!!_.sheenRoughnessMap,It=!!_.specularMap,ie=!!_.specularColorMap,N=!!_.specularIntensityMap,ht=at&&!!_.transmissionMap,X=at&&!!_.thicknessMap,J=!!_.gradientMap,ct=!!_.alphaMap,dt=_.alphaTest>0,Wt=!!_.alphaHash,ge=!!_.extensions;let ke=ui;_.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(ke=n.toneMapping);const qt={shaderID:nt,shaderType:_.type,shaderName:_.name,vertexShader:Y,fragmentShader:et,defines:_.defines,customVertexShaderID:gt,customFragmentShaderID:ut,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Ot,batchingColor:Ot&&U._colorsTexture!==null,instancing:yt,instancingColor:yt&&U.instanceColor!==null,instancingMorph:yt&&U.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:At===null?n.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:gi,alphaToCoverage:!!_.alphaToCoverage,map:te,matcap:Vt,envMap:D,envMapMode:D&&F.mapping,envMapCubeUVHeight:$,aoMap:Ze,lightMap:kt,bumpMap:Xt,normalMap:Rt,displacementMap:m&&ae,emissiveMap:Lt,normalMapObjectSpace:Rt&&_.normalMapType===kp,normalMapTangentSpace:Rt&&_.normalMapType===Ud,metalnessMap:P,roughnessMap:w,anisotropy:H,anisotropyMap:ft,clearcoat:j,clearcoatMap:Yt,clearcoatNormalMap:it,clearcoatRoughnessMap:pt,dispersion:Q,iridescence:K,iridescenceMap:Ct,iridescenceThicknessMap:Pt,sheen:vt,sheenColorMap:mt,sheenRoughnessMap:Ht,specularMap:It,specularColorMap:ie,specularIntensityMap:N,transmission:at,transmissionMap:ht,thicknessMap:X,gradientMap:J,opaque:_.transparent===!1&&_.blending===gr&&_.alphaToCoverage===!1,alphaMap:ct,alphaTest:dt,alphaHash:Wt,combine:_.combine,mapUv:te&&p(_.map.channel),aoMapUv:Ze&&p(_.aoMap.channel),lightMapUv:kt&&p(_.lightMap.channel),bumpMapUv:Xt&&p(_.bumpMap.channel),normalMapUv:Rt&&p(_.normalMap.channel),displacementMapUv:ae&&p(_.displacementMap.channel),emissiveMapUv:Lt&&p(_.emissiveMap.channel),metalnessMapUv:P&&p(_.metalnessMap.channel),roughnessMapUv:w&&p(_.roughnessMap.channel),anisotropyMapUv:ft&&p(_.anisotropyMap.channel),clearcoatMapUv:Yt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:it&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&p(_.sheenRoughnessMap.channel),specularMapUv:It&&p(_.specularMap.channel),specularColorMapUv:ie&&p(_.specularColorMap.channel),specularIntensityMapUv:N&&p(_.specularIntensityMap.channel),transmissionMapUv:ht&&p(_.transmissionMap.channel),thicknessMapUv:X&&p(_.thicknessMap.channel),alphaMapUv:ct&&p(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Rt||H),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!z.attributes.uv&&(te||ct),fog:!!W,useFog:_.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Dt,morphTextureStride:zt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:ke,decodeVideoTexture:te&&_.map.isVideoTexture===!0&&Zt.getTransfer(_.map.colorSpace)===le,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===he,flipSided:_.side===Fe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ge&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&_.extensions.multiDraw===!0||Ot)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return qt.vertexUv1s=l.has(1),qt.vertexUv2s=l.has(2),qt.vertexUv3s=l.has(3),l.clear(),qt}function E(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)S.push(L),S.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(y(S,_),M(S,_),S.push(n.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function y(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function M(_,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),_.push(a.mask)}function b(_){const S=x[_.type];let L;if(S){const I=Pn[S];L=xm.clone(I.uniforms)}else L=_.uniforms;return L}function T(_,S){let L;for(let I=0,U=u.length;I<U;I++){const W=u[I];if(W.cacheKey===S){L=W,++L.usedTimes;break}}return L===void 0&&(L=new Lx(n,S,_,s),u.push(L)),L}function v(_){if(--_.usedTimes===0){const S=u.indexOf(_);u[S]=u[u.length-1],u.pop(),_.destroy()}}function A(_){c.remove(_)}function C(){c.dispose()}return{getParameters:f,getProgramCacheKey:E,getUniforms:b,acquireProgram:T,releaseProgram:v,releaseShaderCache:A,programs:u,dispose:C}}function Fx(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function Ox(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Yu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function qu(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(h,d,m,g,x,p){let f=n[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:x,group:p},n[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=x,f.group=p),t++,f}function a(h,d,m,g,x,p){const f=o(h,d,m,g,x,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):e.push(f)}function c(h,d,m,g,x,p){const f=o(h,d,m,g,x,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):e.unshift(f)}function l(h,d){e.length>1&&e.sort(h||Ox),i.length>1&&i.sort(d||Yu),r.length>1&&r.sort(d||Yu)}function u(){for(let h=t,d=n.length;h<d;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function Bx(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new qu,n.set(i,[o])):r>=s.length?(o=new qu,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function zx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Z};break;case"SpotLight":e={position:new k,direction:new k,color:new Z,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Z,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Z,groundColor:new Z};break;case"RectAreaLight":e={color:new Z,position:new k,halfWidth:new k,halfHeight:new k};break}return n[t.id]=e,e}}}function kx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Hx=0;function Gx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Vx(n){const t=new zx,e=kx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new k);const r=new k,s=new Jt,o=new Jt;function a(l){let u=0,h=0,d=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let m=0,g=0,x=0,p=0,f=0,E=0,y=0,M=0,b=0,T=0,v=0;l.sort(Gx);for(let C=0,_=l.length;C<_;C++){const S=l[C],L=S.color,I=S.intensity,U=S.distance,W=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)u+=L.r*I,h+=L.g*I,d+=L.b*I;else if(S.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(S.sh.coefficients[z],I);v++}else if(S.isDirectionalLight){const z=t.get(S);if(z.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const q=S.shadow,F=e.get(S);F.shadowIntensity=q.intensity,F.shadowBias=q.bias,F.shadowNormalBias=q.normalBias,F.shadowRadius=q.radius,F.shadowMapSize=q.mapSize,i.directionalShadow[m]=F,i.directionalShadowMap[m]=W,i.directionalShadowMatrix[m]=S.shadow.matrix,E++}i.directional[m]=z,m++}else if(S.isSpotLight){const z=t.get(S);z.position.setFromMatrixPosition(S.matrixWorld),z.color.copy(L).multiplyScalar(I),z.distance=U,z.coneCos=Math.cos(S.angle),z.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),z.decay=S.decay,i.spot[x]=z;const q=S.shadow;if(S.map&&(i.spotLightMap[b]=S.map,b++,q.updateMatrices(S),S.castShadow&&T++),i.spotLightMatrix[x]=q.matrix,S.castShadow){const F=e.get(S);F.shadowIntensity=q.intensity,F.shadowBias=q.bias,F.shadowNormalBias=q.normalBias,F.shadowRadius=q.radius,F.shadowMapSize=q.mapSize,i.spotShadow[x]=F,i.spotShadowMap[x]=W,M++}x++}else if(S.isRectAreaLight){const z=t.get(S);z.color.copy(L).multiplyScalar(I),z.halfWidth.set(S.width*.5,0,0),z.halfHeight.set(0,S.height*.5,0),i.rectArea[p]=z,p++}else if(S.isPointLight){const z=t.get(S);if(z.color.copy(S.color).multiplyScalar(S.intensity),z.distance=S.distance,z.decay=S.decay,S.castShadow){const q=S.shadow,F=e.get(S);F.shadowIntensity=q.intensity,F.shadowBias=q.bias,F.shadowNormalBias=q.normalBias,F.shadowRadius=q.radius,F.shadowMapSize=q.mapSize,F.shadowCameraNear=q.camera.near,F.shadowCameraFar=q.camera.far,i.pointShadow[g]=F,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=S.shadow.matrix,y++}i.point[g]=z,g++}else if(S.isHemisphereLight){const z=t.get(S);z.skyColor.copy(S.color).multiplyScalar(I),z.groundColor.copy(S.groundColor).multiplyScalar(I),i.hemi[f]=z,f++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const A=i.hash;(A.directionalLength!==m||A.pointLength!==g||A.spotLength!==x||A.rectAreaLength!==p||A.hemiLength!==f||A.numDirectionalShadows!==E||A.numPointShadows!==y||A.numSpotShadows!==M||A.numSpotMaps!==b||A.numLightProbes!==v)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=M+b-T,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=v,A.directionalLength=m,A.pointLength=g,A.spotLength=x,A.rectAreaLength=p,A.hemiLength=f,A.numDirectionalShadows=E,A.numPointShadows=y,A.numSpotShadows=M,A.numSpotMaps=b,A.numLightProbes=v,i.version=Hx++)}function c(l,u){let h=0,d=0,m=0,g=0,x=0;const p=u.matrixWorldInverse;for(let f=0,E=l.length;f<E;f++){const y=l[f];if(y.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),h++}else if(y.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(y.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),x++}}}return{setup:a,setupView:c,state:i}}function $u(n){const t=new Vx(n),e=[],i=[];function r(u){l.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Wx(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new $u(n),t.set(r,[a])):s>=o.length?(a=new $u(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class Qd extends ls{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Xx extends ls{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Yx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qx=`uniform sampler2D shadow_pass;
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
}`;function $x(n,t,e){let i=new bl;const r=new $t,s=new $t,o=new de,a=new Qd({depthPacking:Dd}),c=new Xx,l={},u=e.maxTextureSize,h={[fi]:Fe,[Fe]:fi,[he]:he},d=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:Yx,fragmentShader:qx}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new pn;g.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Bt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vd;let f=this.type;this.render=function(T,v,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const C=n.getRenderTarget(),_=n.getActiveCubeFace(),S=n.getActiveMipmapLevel(),L=n.state;L.setBlending(li),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const I=f!==Hn&&this.type===Hn,U=f===Hn&&this.type!==Hn;for(let W=0,z=T.length;W<z;W++){const q=T[W],F=q.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const $=F.getFrameExtents();if(r.multiply($),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/$.x),r.x=s.x*$.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/$.y),r.y=s.y*$.y,F.mapSize.y=s.y)),F.map===null||I===!0||U===!0){const ot=this.type!==Hn?{minFilter:qe,magFilter:qe}:{};F.map!==null&&F.map.dispose(),F.map=new Hi(r.x,r.y,ot),F.map.texture.name=q.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const nt=F.getViewportCount();for(let ot=0;ot<nt;ot++){const Dt=F.getViewport(ot);o.set(s.x*Dt.x,s.y*Dt.y,s.x*Dt.z,s.y*Dt.w),L.viewport(o),F.updateMatrices(q,ot),i=F.getFrustum(),M(v,A,F.camera,q,this.type)}F.isPointLightShadow!==!0&&this.type===Hn&&E(F,A),F.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(C,_,S)};function E(T,v){const A=t.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Hi(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(v,null,A,d,x,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(v,null,A,m,x,null)}function y(T,v,A,C){let _=null;const S=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(S!==void 0)_=S;else if(_=A.isPointLight===!0?c:a,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){const L=_.uuid,I=v.uuid;let U=l[L];U===void 0&&(U={},l[L]=U);let W=U[I];W===void 0&&(W=_.clone(),U[I]=W,v.addEventListener("dispose",b)),_=W}if(_.visible=v.visible,_.wireframe=v.wireframe,C===Hn?_.side=v.shadowSide!==null?v.shadowSide:v.side:_.side=v.shadowSide!==null?v.shadowSide:h[v.side],_.alphaMap=v.alphaMap,_.alphaTest=v.alphaTest,_.map=v.map,_.clipShadows=v.clipShadows,_.clippingPlanes=v.clippingPlanes,_.clipIntersection=v.clipIntersection,_.displacementMap=v.displacementMap,_.displacementScale=v.displacementScale,_.displacementBias=v.displacementBias,_.wireframeLinewidth=v.wireframeLinewidth,_.linewidth=v.linewidth,A.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const L=n.properties.get(_);L.light=A}return _}function M(T,v,A,C,_){if(T.visible===!1)return;if(T.layers.test(v.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===Hn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);const I=t.update(T),U=T.material;if(Array.isArray(U)){const W=I.groups;for(let z=0,q=W.length;z<q;z++){const F=W[z],$=U[F.materialIndex];if($&&$.visible){const nt=y(T,$,C,_);T.onBeforeShadow(n,T,v,A,I,nt,F),n.renderBufferDirect(A,null,I,nt,T,F),T.onAfterShadow(n,T,v,A,I,nt,F)}}}else if(U.visible){const W=y(T,U,C,_);T.onBeforeShadow(n,T,v,A,I,W,null),n.renderBufferDirect(A,null,I,W,T,null),T.onAfterShadow(n,T,v,A,I,W,null)}}const L=T.children;for(let I=0,U=L.length;I<U;I++)M(L[I],v,A,C,_)}function b(T){T.target.removeEventListener("dispose",b);for(const A in l){const C=l[A],_=T.target.uuid;_ in C&&(C[_].dispose(),delete C[_])}}}const Kx={[uc]:hc,[dc]:mc,[fc]:gc,[Sr]:pc,[hc]:uc,[mc]:dc,[gc]:fc,[pc]:Sr};function jx(n){function t(){let N=!1;const ht=new de;let X=null;const J=new de(0,0,0,0);return{setMask:function(ct){X!==ct&&!N&&(n.colorMask(ct,ct,ct,ct),X=ct)},setLocked:function(ct){N=ct},setClear:function(ct,dt,Wt,ge,ke){ke===!0&&(ct*=ge,dt*=ge,Wt*=ge),ht.set(ct,dt,Wt,ge),J.equals(ht)===!1&&(n.clearColor(ct,dt,Wt,ge),J.copy(ht))},reset:function(){N=!1,X=null,J.set(-1,0,0,0)}}}function e(){let N=!1,ht=!1,X=null,J=null,ct=null;return{setReversed:function(dt){ht=dt},setTest:function(dt){dt?gt(n.DEPTH_TEST):ut(n.DEPTH_TEST)},setMask:function(dt){X!==dt&&!N&&(n.depthMask(dt),X=dt)},setFunc:function(dt){if(ht&&(dt=Kx[dt]),J!==dt){switch(dt){case uc:n.depthFunc(n.NEVER);break;case hc:n.depthFunc(n.ALWAYS);break;case dc:n.depthFunc(n.LESS);break;case Sr:n.depthFunc(n.LEQUAL);break;case fc:n.depthFunc(n.EQUAL);break;case pc:n.depthFunc(n.GEQUAL);break;case mc:n.depthFunc(n.GREATER);break;case gc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=dt}},setLocked:function(dt){N=dt},setClear:function(dt){ct!==dt&&(n.clearDepth(dt),ct=dt)},reset:function(){N=!1,X=null,J=null,ct=null}}}function i(){let N=!1,ht=null,X=null,J=null,ct=null,dt=null,Wt=null,ge=null,ke=null;return{setTest:function(qt){N||(qt?gt(n.STENCIL_TEST):ut(n.STENCIL_TEST))},setMask:function(qt){ht!==qt&&!N&&(n.stencilMask(qt),ht=qt)},setFunc:function(qt,He,Nn){(X!==qt||J!==He||ct!==Nn)&&(n.stencilFunc(qt,He,Nn),X=qt,J=He,ct=Nn)},setOp:function(qt,He,Nn){(dt!==qt||Wt!==He||ge!==Nn)&&(n.stencilOp(qt,He,Nn),dt=qt,Wt=He,ge=Nn)},setLocked:function(qt){N=qt},setClear:function(qt){ke!==qt&&(n.clearStencil(qt),ke=qt)},reset:function(){N=!1,ht=null,X=null,J=null,ct=null,dt=null,Wt=null,ge=null,ke=null}}}const r=new t,s=new e,o=new i,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],m=null,g=!1,x=null,p=null,f=null,E=null,y=null,M=null,b=null,T=new Z(0,0,0),v=0,A=!1,C=null,_=null,S=null,L=null,I=null;const U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,z=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=z>=1):q.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=z>=2);let F=null,$={};const nt=n.getParameter(n.SCISSOR_BOX),ot=n.getParameter(n.VIEWPORT),Dt=new de().fromArray(nt),zt=new de().fromArray(ot);function Y(N,ht,X,J){const ct=new Uint8Array(4),dt=n.createTexture();n.bindTexture(N,dt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Wt=0;Wt<X;Wt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ht,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,ct):n.texImage2D(ht+Wt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ct);return dt}const et={};et[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),et[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),et[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),gt(n.DEPTH_TEST),s.setFunc(Sr),kt(!1),Xt(iu),gt(n.CULL_FACE),D(li);function gt(N){l[N]!==!0&&(n.enable(N),l[N]=!0)}function ut(N){l[N]!==!1&&(n.disable(N),l[N]=!1)}function At(N,ht){return u[N]!==ht?(n.bindFramebuffer(N,ht),u[N]=ht,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ht),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ht),!0):!1}function yt(N,ht){let X=d,J=!1;if(N){X=h.get(ht),X===void 0&&(X=[],h.set(ht,X));const ct=N.textures;if(X.length!==ct.length||X[0]!==n.COLOR_ATTACHMENT0){for(let dt=0,Wt=ct.length;dt<Wt;dt++)X[dt]=n.COLOR_ATTACHMENT0+dt;X.length=ct.length,J=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,J=!0);J&&n.drawBuffers(X)}function Ot(N){return m!==N?(n.useProgram(N),m=N,!0):!1}const te={[Pi]:n.FUNC_ADD,[fp]:n.FUNC_SUBTRACT,[pp]:n.FUNC_REVERSE_SUBTRACT};te[mp]=n.MIN,te[gp]=n.MAX;const Vt={[_p]:n.ZERO,[xp]:n.ONE,[vp]:n.SRC_COLOR,[cc]:n.SRC_ALPHA,[Tp]:n.SRC_ALPHA_SATURATE,[Ep]:n.DST_COLOR,[Sp]:n.DST_ALPHA,[Mp]:n.ONE_MINUS_SRC_COLOR,[lc]:n.ONE_MINUS_SRC_ALPHA,[bp]:n.ONE_MINUS_DST_COLOR,[yp]:n.ONE_MINUS_DST_ALPHA,[wp]:n.CONSTANT_COLOR,[Ap]:n.ONE_MINUS_CONSTANT_COLOR,[Rp]:n.CONSTANT_ALPHA,[Cp]:n.ONE_MINUS_CONSTANT_ALPHA};function D(N,ht,X,J,ct,dt,Wt,ge,ke,qt){if(N===li){g===!0&&(ut(n.BLEND),g=!1);return}if(g===!1&&(gt(n.BLEND),g=!0),N!==dp){if(N!==x||qt!==A){if((p!==Pi||y!==Pi)&&(n.blendEquation(n.FUNC_ADD),p=Pi,y=Pi),qt)switch(N){case gr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ac:n.blendFunc(n.ONE,n.ONE);break;case ru:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case su:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case gr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ac:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ru:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case su:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}f=null,E=null,M=null,b=null,T.set(0,0,0),v=0,x=N,A=qt}return}ct=ct||ht,dt=dt||X,Wt=Wt||J,(ht!==p||ct!==y)&&(n.blendEquationSeparate(te[ht],te[ct]),p=ht,y=ct),(X!==f||J!==E||dt!==M||Wt!==b)&&(n.blendFuncSeparate(Vt[X],Vt[J],Vt[dt],Vt[Wt]),f=X,E=J,M=dt,b=Wt),(ge.equals(T)===!1||ke!==v)&&(n.blendColor(ge.r,ge.g,ge.b,ke),T.copy(ge),v=ke),x=N,A=!1}function Ze(N,ht){N.side===he?ut(n.CULL_FACE):gt(n.CULL_FACE);let X=N.side===Fe;ht&&(X=!X),kt(X),N.blending===gr&&N.transparent===!1?D(li):D(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const J=N.stencilWrite;o.setTest(J),J&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ae(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?gt(n.SAMPLE_ALPHA_TO_COVERAGE):ut(n.SAMPLE_ALPHA_TO_COVERAGE)}function kt(N){C!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),C=N)}function Xt(N){N!==up?(gt(n.CULL_FACE),N!==_&&(N===iu?n.cullFace(n.BACK):N===hp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ut(n.CULL_FACE),_=N}function Rt(N){N!==S&&(W&&n.lineWidth(N),S=N)}function ae(N,ht,X){N?(gt(n.POLYGON_OFFSET_FILL),(L!==ht||I!==X)&&(n.polygonOffset(ht,X),L=ht,I=X)):ut(n.POLYGON_OFFSET_FILL)}function Lt(N){N?gt(n.SCISSOR_TEST):ut(n.SCISSOR_TEST)}function P(N){N===void 0&&(N=n.TEXTURE0+U-1),F!==N&&(n.activeTexture(N),F=N)}function w(N,ht,X){X===void 0&&(F===null?X=n.TEXTURE0+U-1:X=F);let J=$[X];J===void 0&&(J={type:void 0,texture:void 0},$[X]=J),(J.type!==N||J.texture!==ht)&&(F!==X&&(n.activeTexture(X),F=X),n.bindTexture(N,ht||et[N]),J.type=N,J.texture=ht)}function H(){const N=$[F];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Yt(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pt(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ct(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(N){Dt.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Dt.copy(N))}function mt(N){zt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),zt.copy(N))}function Ht(N,ht){let X=c.get(ht);X===void 0&&(X=new WeakMap,c.set(ht,X));let J=X.get(N);J===void 0&&(J=n.getUniformBlockIndex(ht,N.name),X.set(N,J))}function It(N,ht){const J=c.get(ht).get(N);a.get(ht)!==J&&(n.uniformBlockBinding(ht,J,N.__bindingPointIndex),a.set(ht,J))}function ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},F=null,$={},u={},h=new WeakMap,d=[],m=null,g=!1,x=null,p=null,f=null,E=null,y=null,M=null,b=null,T=new Z(0,0,0),v=0,A=!1,C=null,_=null,S=null,L=null,I=null,Dt.set(0,0,n.canvas.width,n.canvas.height),zt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:gt,disable:ut,bindFramebuffer:At,drawBuffers:yt,useProgram:Ot,setBlending:D,setMaterial:Ze,setFlipSided:kt,setCullFace:Xt,setLineWidth:Rt,setPolygonOffset:ae,setScissorTest:Lt,activeTexture:P,bindTexture:w,unbindTexture:H,compressedTexImage2D:j,compressedTexImage3D:Q,texImage2D:pt,texImage3D:Ct,updateUBOMapping:Ht,uniformBlockBinding:It,texStorage2D:Yt,texStorage3D:it,texSubImage2D:K,texSubImage3D:vt,compressedTexSubImage2D:at,compressedTexSubImage3D:ft,scissor:Pt,viewport:mt,reset:ie}}function Ku(n,t,e,i){const r=Zx(i);switch(e){case Ad:return n*t;case Cd:return n*t;case Pd:return n*t*2;case vl:return n*t/r.components*r.byteLength;case Ml:return n*t/r.components*r.byteLength;case Ld:return n*t*2/r.components*r.byteLength;case Sl:return n*t*2/r.components*r.byteLength;case Rd:return n*t*3/r.components*r.byteLength;case bn:return n*t*4/r.components*r.byteLength;case yl:return n*t*4/r.components*r.byteLength;case so:case oo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ao:case co:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Sc:case Ec:return Math.max(n,16)*Math.max(t,8)/4;case Mc:case yc:return Math.max(n,8)*Math.max(t,8)/2;case bc:case Tc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case wc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ac:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Rc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Cc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Pc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Lc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ic:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Dc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Uc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Nc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Oc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Bc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case zc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case kc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case lo:case Hc:case Gc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Id:case Vc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Wc:case Xc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zx(n){switch(n){case qn:case bd:return{byteLength:1,components:1};case rs:case Td:case as:return{byteLength:2,components:1};case _l:case xl:return{byteLength:2,components:4};case ki:case gl:case Un:return{byteLength:4,components:1};case wd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Jx(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $t,u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,w){return m?new OffscreenCanvas(P,w):ss("canvas")}function x(P,w,H){let j=1;const Q=Lt(P);if((Q.width>H||Q.height>H)&&(j=H/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const K=Math.floor(j*Q.width),vt=Math.floor(j*Q.height);h===void 0&&(h=g(K,vt));const at=w?g(K,vt):h;return at.width=K,at.height=vt,at.getContext("2d").drawImage(P,0,0,K,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+vt+")."),at}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function p(P){return P.generateMipmaps&&P.minFilter!==qe&&P.minFilter!==Sn}function f(P){n.generateMipmap(P)}function E(P,w,H,j,Q=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let K=w;if(w===n.RED&&(H===n.FLOAT&&(K=n.R32F),H===n.HALF_FLOAT&&(K=n.R16F),H===n.UNSIGNED_BYTE&&(K=n.R8)),w===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.R8UI),H===n.UNSIGNED_SHORT&&(K=n.R16UI),H===n.UNSIGNED_INT&&(K=n.R32UI),H===n.BYTE&&(K=n.R8I),H===n.SHORT&&(K=n.R16I),H===n.INT&&(K=n.R32I)),w===n.RG&&(H===n.FLOAT&&(K=n.RG32F),H===n.HALF_FLOAT&&(K=n.RG16F),H===n.UNSIGNED_BYTE&&(K=n.RG8)),w===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RG8UI),H===n.UNSIGNED_SHORT&&(K=n.RG16UI),H===n.UNSIGNED_INT&&(K=n.RG32UI),H===n.BYTE&&(K=n.RG8I),H===n.SHORT&&(K=n.RG16I),H===n.INT&&(K=n.RG32I)),w===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RGB8UI),H===n.UNSIGNED_SHORT&&(K=n.RGB16UI),H===n.UNSIGNED_INT&&(K=n.RGB32UI),H===n.BYTE&&(K=n.RGB8I),H===n.SHORT&&(K=n.RGB16I),H===n.INT&&(K=n.RGB32I)),w===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),H===n.UNSIGNED_INT&&(K=n.RGBA32UI),H===n.BYTE&&(K=n.RGBA8I),H===n.SHORT&&(K=n.RGBA16I),H===n.INT&&(K=n.RGBA32I)),w===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),w===n.RGBA){const vt=Q?Ro:Zt.getTransfer(j);H===n.FLOAT&&(K=n.RGBA32F),H===n.HALF_FLOAT&&(K=n.RGBA16F),H===n.UNSIGNED_BYTE&&(K=vt===le?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function y(P,w){let H;return P?w===null||w===ki||w===br?H=n.DEPTH24_STENCIL8:w===Un?H=n.DEPTH32F_STENCIL8:w===rs&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ki||w===br?H=n.DEPTH_COMPONENT24:w===Un?H=n.DEPTH_COMPONENT32F:w===rs&&(H=n.DEPTH_COMPONENT16),H}function M(P,w){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==qe&&P.minFilter!==Sn?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function b(P){const w=P.target;w.removeEventListener("dispose",b),v(w),w.isVideoTexture&&u.delete(w)}function T(P){const w=P.target;w.removeEventListener("dispose",T),C(w)}function v(P){const w=i.get(P);if(w.__webglInit===void 0)return;const H=P.source,j=d.get(H);if(j){const Q=j[w.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&A(P),Object.keys(j).length===0&&d.delete(H)}i.remove(P)}function A(P){const w=i.get(P);n.deleteTexture(w.__webglTexture);const H=P.source,j=d.get(H);delete j[w.__cacheKey],o.memory.textures--}function C(P){const w=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(w.__webglFramebuffer[j]))for(let Q=0;Q<w.__webglFramebuffer[j].length;Q++)n.deleteFramebuffer(w.__webglFramebuffer[j][Q]);else n.deleteFramebuffer(w.__webglFramebuffer[j]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[j])}else{if(Array.isArray(w.__webglFramebuffer))for(let j=0;j<w.__webglFramebuffer.length;j++)n.deleteFramebuffer(w.__webglFramebuffer[j]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let j=0;j<w.__webglColorRenderbuffer.length;j++)w.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[j]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const H=P.textures;for(let j=0,Q=H.length;j<Q;j++){const K=i.get(H[j]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(H[j])}i.remove(P)}let _=0;function S(){_=0}function L(){const P=_;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),_+=1,P}function I(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function U(P,w){const H=i.get(P);if(P.isVideoTexture&&Rt(P),P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){const j=P.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{zt(H,P,w);return}}e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+w)}function W(P,w){const H=i.get(P);if(P.version>0&&H.__version!==P.version){zt(H,P,w);return}e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+w)}function z(P,w){const H=i.get(P);if(P.version>0&&H.__version!==P.version){zt(H,P,w);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+w)}function q(P,w){const H=i.get(P);if(P.version>0&&H.__version!==P.version){Y(H,P,w);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+w)}const F={[Ao]:n.REPEAT,[Ui]:n.CLAMP_TO_EDGE,[vc]:n.MIRRORED_REPEAT},$={[qe]:n.NEAREST,[Bp]:n.NEAREST_MIPMAP_NEAREST,[ys]:n.NEAREST_MIPMAP_LINEAR,[Sn]:n.LINEAR,[ea]:n.LINEAR_MIPMAP_NEAREST,[Ni]:n.LINEAR_MIPMAP_LINEAR},nt={[Hp]:n.NEVER,[qp]:n.ALWAYS,[Gp]:n.LESS,[Nd]:n.LEQUAL,[Vp]:n.EQUAL,[Yp]:n.GEQUAL,[Wp]:n.GREATER,[Xp]:n.NOTEQUAL};function ot(P,w){if(w.type===Un&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Sn||w.magFilter===ea||w.magFilter===ys||w.magFilter===Ni||w.minFilter===Sn||w.minFilter===ea||w.minFilter===ys||w.minFilter===Ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,F[w.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,F[w.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,F[w.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,$[w.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,$[w.minFilter]),w.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,nt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===qe||w.minFilter!==ys&&w.minFilter!==Ni||w.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Dt(P,w){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",b));const j=w.source;let Q=d.get(j);Q===void 0&&(Q={},d.set(j,Q));const K=I(w);if(K!==P.__cacheKey){Q[K]===void 0&&(Q[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),Q[K].usedTimes++;const vt=Q[P.__cacheKey];vt!==void 0&&(Q[P.__cacheKey].usedTimes--,vt.usedTimes===0&&A(w)),P.__cacheKey=K,P.__webglTexture=Q[K].texture}return H}function zt(P,w,H){let j=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(j=n.TEXTURE_3D);const Q=Dt(P,w),K=w.source;e.bindTexture(j,P.__webglTexture,n.TEXTURE0+H);const vt=i.get(K);if(K.version!==vt.__version||Q===!0){e.activeTexture(n.TEXTURE0+H);const at=Zt.getPrimaries(Zt.workingColorSpace),ft=w.colorSpace===ci?null:Zt.getPrimaries(w.colorSpace),Yt=w.colorSpace===ci||at===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let it=x(w.image,!1,r.maxTextureSize);it=ae(w,it);const pt=s.convert(w.format,w.colorSpace),Ct=s.convert(w.type);let Pt=E(w.internalFormat,pt,Ct,w.colorSpace,w.isVideoTexture);ot(j,w);let mt;const Ht=w.mipmaps,It=w.isVideoTexture!==!0,ie=vt.__version===void 0||Q===!0,N=K.dataReady,ht=M(w,it);if(w.isDepthTexture)Pt=y(w.format===Tr,w.type),ie&&(It?e.texStorage2D(n.TEXTURE_2D,1,Pt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,Pt,it.width,it.height,0,pt,Ct,null));else if(w.isDataTexture)if(Ht.length>0){It&&ie&&e.texStorage2D(n.TEXTURE_2D,ht,Pt,Ht[0].width,Ht[0].height);for(let X=0,J=Ht.length;X<J;X++)mt=Ht[X],It?N&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,mt.width,mt.height,pt,Ct,mt.data):e.texImage2D(n.TEXTURE_2D,X,Pt,mt.width,mt.height,0,pt,Ct,mt.data);w.generateMipmaps=!1}else It?(ie&&e.texStorage2D(n.TEXTURE_2D,ht,Pt,it.width,it.height),N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,it.width,it.height,pt,Ct,it.data)):e.texImage2D(n.TEXTURE_2D,0,Pt,it.width,it.height,0,pt,Ct,it.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){It&&ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ht,Pt,Ht[0].width,Ht[0].height,it.depth);for(let X=0,J=Ht.length;X<J;X++)if(mt=Ht[X],w.format!==bn)if(pt!==null)if(It){if(N)if(w.layerUpdates.size>0){const ct=Ku(mt.width,mt.height,w.format,w.type);for(const dt of w.layerUpdates){const Wt=mt.data.subarray(dt*ct/mt.data.BYTES_PER_ELEMENT,(dt+1)*ct/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,dt,mt.width,mt.height,1,pt,Wt,0,0)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,mt.width,mt.height,it.depth,pt,mt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Pt,mt.width,mt.height,it.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,mt.width,mt.height,it.depth,pt,Ct,mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,X,Pt,mt.width,mt.height,it.depth,0,pt,Ct,mt.data)}else{It&&ie&&e.texStorage2D(n.TEXTURE_2D,ht,Pt,Ht[0].width,Ht[0].height);for(let X=0,J=Ht.length;X<J;X++)mt=Ht[X],w.format!==bn?pt!==null?It?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(n.TEXTURE_2D,X,Pt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?N&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,mt.width,mt.height,pt,Ct,mt.data):e.texImage2D(n.TEXTURE_2D,X,Pt,mt.width,mt.height,0,pt,Ct,mt.data)}else if(w.isDataArrayTexture)if(It){if(ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ht,Pt,it.width,it.height,it.depth),N)if(w.layerUpdates.size>0){const X=Ku(it.width,it.height,w.format,w.type);for(const J of w.layerUpdates){const ct=it.data.subarray(J*X/it.data.BYTES_PER_ELEMENT,(J+1)*X/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,it.width,it.height,1,pt,Ct,ct)}w.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,pt,Ct,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Pt,it.width,it.height,it.depth,0,pt,Ct,it.data);else if(w.isData3DTexture)It?(ie&&e.texStorage3D(n.TEXTURE_3D,ht,Pt,it.width,it.height,it.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,pt,Ct,it.data)):e.texImage3D(n.TEXTURE_3D,0,Pt,it.width,it.height,it.depth,0,pt,Ct,it.data);else if(w.isFramebufferTexture){if(ie)if(It)e.texStorage2D(n.TEXTURE_2D,ht,Pt,it.width,it.height);else{let X=it.width,J=it.height;for(let ct=0;ct<ht;ct++)e.texImage2D(n.TEXTURE_2D,ct,Pt,X,J,0,pt,Ct,null),X>>=1,J>>=1}}else if(Ht.length>0){if(It&&ie){const X=Lt(Ht[0]);e.texStorage2D(n.TEXTURE_2D,ht,Pt,X.width,X.height)}for(let X=0,J=Ht.length;X<J;X++)mt=Ht[X],It?N&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,pt,Ct,mt):e.texImage2D(n.TEXTURE_2D,X,Pt,pt,Ct,mt);w.generateMipmaps=!1}else if(It){if(ie){const X=Lt(it);e.texStorage2D(n.TEXTURE_2D,ht,Pt,X.width,X.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt,Ct,it)}else e.texImage2D(n.TEXTURE_2D,0,Pt,pt,Ct,it);p(w)&&f(j),vt.__version=K.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Y(P,w,H){if(w.image.length!==6)return;const j=Dt(P,w),Q=w.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+H);const K=i.get(Q);if(Q.version!==K.__version||j===!0){e.activeTexture(n.TEXTURE0+H);const vt=Zt.getPrimaries(Zt.workingColorSpace),at=w.colorSpace===ci?null:Zt.getPrimaries(w.colorSpace),ft=w.colorSpace===ci||vt===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Yt=w.isCompressedTexture||w.image[0].isCompressedTexture,it=w.image[0]&&w.image[0].isDataTexture,pt=[];for(let J=0;J<6;J++)!Yt&&!it?pt[J]=x(w.image[J],!0,r.maxCubemapSize):pt[J]=it?w.image[J].image:w.image[J],pt[J]=ae(w,pt[J]);const Ct=pt[0],Pt=s.convert(w.format,w.colorSpace),mt=s.convert(w.type),Ht=E(w.internalFormat,Pt,mt,w.colorSpace),It=w.isVideoTexture!==!0,ie=K.__version===void 0||j===!0,N=Q.dataReady;let ht=M(w,Ct);ot(n.TEXTURE_CUBE_MAP,w);let X;if(Yt){It&&ie&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ht,Ht,Ct.width,Ct.height);for(let J=0;J<6;J++){X=pt[J].mipmaps;for(let ct=0;ct<X.length;ct++){const dt=X[ct];w.format!==bn?Pt!==null?It?N&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,0,0,dt.width,dt.height,Pt,dt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,Ht,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,0,0,dt.width,dt.height,Pt,mt,dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,Ht,dt.width,dt.height,0,Pt,mt,dt.data)}}}else{if(X=w.mipmaps,It&&ie){X.length>0&&ht++;const J=Lt(pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ht,Ht,J.width,J.height)}for(let J=0;J<6;J++)if(it){It?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,pt[J].width,pt[J].height,Pt,mt,pt[J].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ht,pt[J].width,pt[J].height,0,Pt,mt,pt[J].data);for(let ct=0;ct<X.length;ct++){const Wt=X[ct].image[J].image;It?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,0,0,Wt.width,Wt.height,Pt,mt,Wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,Ht,Wt.width,Wt.height,0,Pt,mt,Wt.data)}}else{It?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Pt,mt,pt[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ht,Pt,mt,pt[J]);for(let ct=0;ct<X.length;ct++){const dt=X[ct];It?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,0,0,Pt,mt,dt.image[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,Ht,Pt,mt,dt.image[J])}}}p(w)&&f(n.TEXTURE_CUBE_MAP),K.__version=Q.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function et(P,w,H,j,Q,K){const vt=s.convert(H.format,H.colorSpace),at=s.convert(H.type),ft=E(H.internalFormat,vt,at,H.colorSpace);if(!i.get(w).__hasExternalTextures){const it=Math.max(1,w.width>>K),pt=Math.max(1,w.height>>K);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,K,ft,it,pt,w.depth,0,vt,at,null):e.texImage2D(Q,K,ft,it,pt,0,vt,at,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),Xt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,Q,i.get(H).__webglTexture,0,kt(w)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,Q,i.get(H).__webglTexture,K),e.bindFramebuffer(n.FRAMEBUFFER,null)}function gt(P,w,H){if(n.bindRenderbuffer(n.RENDERBUFFER,P),w.depthBuffer){const j=w.depthTexture,Q=j&&j.isDepthTexture?j.type:null,K=y(w.stencilBuffer,Q),vt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=kt(w);Xt(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at,K,w.width,w.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,at,K,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,K,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,vt,n.RENDERBUFFER,P)}else{const j=w.textures;for(let Q=0;Q<j.length;Q++){const K=j[Q],vt=s.convert(K.format,K.colorSpace),at=s.convert(K.type),ft=E(K.internalFormat,vt,at,K.colorSpace),Yt=kt(w);H&&Xt(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Yt,ft,w.width,w.height):Xt(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Yt,ft,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ft,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ut(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),U(w.depthTexture,0);const j=i.get(w.depthTexture).__webglTexture,Q=kt(w);if(w.depthTexture.format===_r)Xt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(w.depthTexture.format===Tr)Xt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function At(P){const w=i.get(P),H=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const j=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),j){const Q=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),w.__depthDisposeCallback=Q}w.__boundDepthTexture=j}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ut(w.__webglFramebuffer,P)}else if(H){w.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[j]),w.__webglDepthbuffer[j]===void 0)w.__webglDepthbuffer[j]=n.createRenderbuffer(),gt(w.__webglDepthbuffer[j],P,!1);else{const Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=w.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,K)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),gt(w.__webglDepthbuffer,P,!1);else{const j=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,Q)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function yt(P,w,H){const j=i.get(P);w!==void 0&&et(j.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&At(P)}function Ot(P){const w=P.texture,H=i.get(P),j=i.get(w);P.addEventListener("dispose",T);const Q=P.textures,K=P.isWebGLCubeRenderTarget===!0,vt=Q.length>1;if(vt||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=w.version,o.memory.textures++),K){H.__webglFramebuffer=[];for(let at=0;at<6;at++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[at]=[];for(let ft=0;ft<w.mipmaps.length;ft++)H.__webglFramebuffer[at][ft]=n.createFramebuffer()}else H.__webglFramebuffer[at]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let at=0;at<w.mipmaps.length;at++)H.__webglFramebuffer[at]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(vt)for(let at=0,ft=Q.length;at<ft;at++){const Yt=i.get(Q[at]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&Xt(P)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let at=0;at<Q.length;at++){const ft=Q[at];H.__webglColorRenderbuffer[at]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[at]);const Yt=s.convert(ft.format,ft.colorSpace),it=s.convert(ft.type),pt=E(ft.internalFormat,Yt,it,ft.colorSpace,P.isXRRenderTarget===!0),Ct=kt(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct,pt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,H.__webglColorRenderbuffer[at])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),gt(H.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),ot(n.TEXTURE_CUBE_MAP,w);for(let at=0;at<6;at++)if(w.mipmaps&&w.mipmaps.length>0)for(let ft=0;ft<w.mipmaps.length;ft++)et(H.__webglFramebuffer[at][ft],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,ft);else et(H.__webglFramebuffer[at],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(w)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let at=0,ft=Q.length;at<ft;at++){const Yt=Q[at],it=i.get(Yt);e.bindTexture(n.TEXTURE_2D,it.__webglTexture),ot(n.TEXTURE_2D,Yt),et(H.__webglFramebuffer,P,Yt,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,0),p(Yt)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let at=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(at=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(at,j.__webglTexture),ot(at,w),w.mipmaps&&w.mipmaps.length>0)for(let ft=0;ft<w.mipmaps.length;ft++)et(H.__webglFramebuffer[ft],P,w,n.COLOR_ATTACHMENT0,at,ft);else et(H.__webglFramebuffer,P,w,n.COLOR_ATTACHMENT0,at,0);p(w)&&f(at),e.unbindTexture()}P.depthBuffer&&At(P)}function te(P){const w=P.textures;for(let H=0,j=w.length;H<j;H++){const Q=w[H];if(p(Q)){const K=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,vt=i.get(Q).__webglTexture;e.bindTexture(K,vt),f(K),e.unbindTexture()}}}const Vt=[],D=[];function Ze(P){if(P.samples>0){if(Xt(P)===!1){const w=P.textures,H=P.width,j=P.height;let Q=n.COLOR_BUFFER_BIT;const K=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,vt=i.get(P),at=w.length>1;if(at)for(let ft=0;ft<w.length;ft++)e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ft=0;ft<w.length;ft++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),at){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,vt.__webglColorRenderbuffer[ft]);const Yt=i.get(w[ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Yt,0)}n.blitFramebuffer(0,0,H,j,0,0,H,j,Q,n.NEAREST),c===!0&&(Vt.length=0,D.length=0,Vt.push(n.COLOR_ATTACHMENT0+ft),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Vt.push(K),D.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Vt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),at)for(let ft=0;ft<w.length;ft++){e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,vt.__webglColorRenderbuffer[ft]);const Yt=i.get(w[ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,Yt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const w=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function kt(P){return Math.min(r.maxSamples,P.samples)}function Xt(P){const w=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Rt(P){const w=o.render.frame;u.get(P)!==w&&(u.set(P,w),P.update())}function ae(P,w){const H=P.colorSpace,j=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==gi&&H!==ci&&(Zt.getTransfer(H)===le?(j!==bn||Q!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}function Lt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=S,this.setTexture2D=U,this.setTexture2DArray=W,this.setTexture3D=z,this.setTextureCube=q,this.rebindTextures=yt,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=et,this.useMultisampledRTT=Xt}function Qx(n,t){function e(i,r=ci){let s;const o=Zt.getTransfer(r);if(i===qn)return n.UNSIGNED_BYTE;if(i===_l)return n.UNSIGNED_SHORT_4_4_4_4;if(i===xl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===wd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bd)return n.BYTE;if(i===Td)return n.SHORT;if(i===rs)return n.UNSIGNED_SHORT;if(i===gl)return n.INT;if(i===ki)return n.UNSIGNED_INT;if(i===Un)return n.FLOAT;if(i===as)return n.HALF_FLOAT;if(i===Ad)return n.ALPHA;if(i===Rd)return n.RGB;if(i===bn)return n.RGBA;if(i===Cd)return n.LUMINANCE;if(i===Pd)return n.LUMINANCE_ALPHA;if(i===_r)return n.DEPTH_COMPONENT;if(i===Tr)return n.DEPTH_STENCIL;if(i===vl)return n.RED;if(i===Ml)return n.RED_INTEGER;if(i===Ld)return n.RG;if(i===Sl)return n.RG_INTEGER;if(i===yl)return n.RGBA_INTEGER;if(i===so||i===oo||i===ao||i===co)if(o===le)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===so)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===so)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===oo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ao)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===co)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mc||i===Sc||i===yc||i===Ec)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Mc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ec)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bc||i===Tc||i===wc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===bc||i===Tc)return o===le?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===wc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ac||i===Rc||i===Cc||i===Pc||i===Lc||i===Ic||i===Dc||i===Uc||i===Nc||i===Fc||i===Oc||i===Bc||i===zc||i===kc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ac)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Lc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ic)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Oc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lo||i===Hc||i===Gc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===lo)return o===le?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Id||i===Vc||i===Wc||i===Xc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===lo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Vc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===br?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class tv extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Me extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ev={type:"move"};class La{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,i),f=this._getHandJoint(l,x);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ev)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Me;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const nv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iv=`
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

}`;class rv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Le,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new $n({vertexShader:nv,fragmentShader:iv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Bt(new hs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sv extends Pr{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,m=null,g=null;const x=new rv,p=e.getContextAttributes();let f=null,E=null;const y=[],M=[],b=new $t;let T=null;const v=new un;v.layers.enable(1),v.viewport=new de;const A=new un;A.layers.enable(2),A.viewport=new de;const C=[v,A],_=new tv;_.layers.enable(1),_.layers.enable(2);let S=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=y[Y];return et===void 0&&(et=new La,y[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=y[Y];return et===void 0&&(et=new La,y[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=y[Y];return et===void 0&&(et=new La,y[Y]=et),et.getHandSpace()};function I(Y){const et=M.indexOf(Y.inputSource);if(et===-1)return;const gt=y[et];gt!==void 0&&(gt.update(Y.inputSource,Y.frame,l||o),gt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function U(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",W);for(let Y=0;Y<y.length;Y++){const et=M[Y];et!==null&&(M[Y]=null,y[Y].disconnect(et))}S=null,L=null,x.reset(),t.setRenderTarget(f),m=null,d=null,h=null,r=null,E=null,zt.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",U),r.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(b),r.renderState.layers===void 0){const et={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,et),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Hi(m.framebufferWidth,m.framebufferHeight,{format:bn,type:qn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let et=null,gt=null,ut=null;p.depth&&(ut=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=p.stencil?Tr:_r,gt=p.stencil?br:ki);const At={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:s};h=new XRWebGLBinding(r,e),d=h.createProjectionLayer(At),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Hi(d.textureWidth,d.textureHeight,{format:bn,type:qn,depthTexture:new $d(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),zt.setContext(r),zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function W(Y){for(let et=0;et<Y.removed.length;et++){const gt=Y.removed[et],ut=M.indexOf(gt);ut>=0&&(M[ut]=null,y[ut].disconnect(gt))}for(let et=0;et<Y.added.length;et++){const gt=Y.added[et];let ut=M.indexOf(gt);if(ut===-1){for(let yt=0;yt<y.length;yt++)if(yt>=M.length){M.push(gt),ut=yt;break}else if(M[yt]===null){M[yt]=gt,ut=yt;break}if(ut===-1)break}const At=y[ut];At&&At.connect(gt)}}const z=new k,q=new k;function F(Y,et,gt){z.setFromMatrixPosition(et.matrixWorld),q.setFromMatrixPosition(gt.matrixWorld);const ut=z.distanceTo(q),At=et.projectionMatrix.elements,yt=gt.projectionMatrix.elements,Ot=At[14]/(At[10]-1),te=At[14]/(At[10]+1),Vt=(At[9]+1)/At[5],D=(At[9]-1)/At[5],Ze=(At[8]-1)/At[0],kt=(yt[8]+1)/yt[0],Xt=Ot*Ze,Rt=Ot*kt,ae=ut/(-Ze+kt),Lt=ae*-Ze;if(et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Lt),Y.translateZ(ae),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),At[10]===-1)Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const P=Ot+ae,w=te+ae,H=Xt-Lt,j=Rt+(ut-Lt),Q=Vt*te/w*P,K=D*te/w*P;Y.projectionMatrix.makePerspective(H,j,Q,K,P,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function $(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let et=Y.near,gt=Y.far;x.texture!==null&&(x.depthNear>0&&(et=x.depthNear),x.depthFar>0&&(gt=x.depthFar)),_.near=A.near=v.near=et,_.far=A.far=v.far=gt,(S!==_.near||L!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),S=_.near,L=_.far);const ut=Y.parent,At=_.cameras;$(_,ut);for(let yt=0;yt<At.length;yt++)$(At[yt],ut);At.length===2?F(_,v,A):_.projectionMatrix.copy(v.projectionMatrix),nt(Y,_,ut)};function nt(Y,et,gt){gt===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(gt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Yc*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let ot=null;function Dt(Y,et){if(u=et.getViewerPose(l||o),g=et,u!==null){const gt=u.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let ut=!1;gt.length!==_.cameras.length&&(_.cameras.length=0,ut=!0);for(let yt=0;yt<gt.length;yt++){const Ot=gt[yt];let te=null;if(m!==null)te=m.getViewport(Ot);else{const D=h.getViewSubImage(d,Ot);te=D.viewport,yt===0&&(t.setRenderTargetTextures(E,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(E))}let Vt=C[yt];Vt===void 0&&(Vt=new un,Vt.layers.enable(yt),Vt.viewport=new de,C[yt]=Vt),Vt.matrix.fromArray(Ot.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Ot.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(te.x,te.y,te.width,te.height),yt===0&&(_.matrix.copy(Vt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ut===!0&&_.cameras.push(Vt)}const At=r.enabledFeatures;if(At&&At.includes("depth-sensing")){const yt=h.getDepthInformation(gt[0]);yt&&yt.isValid&&yt.texture&&x.init(t,yt,r.renderState)}}for(let gt=0;gt<y.length;gt++){const ut=M[gt],At=y[gt];ut!==null&&At!==void 0&&At.update(ut,et,l||o)}ot&&ot(Y,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),g=null}const zt=new Yd;zt.setAnimationLoop(Dt),this.setAnimationLoop=function(Y){ot=Y},this.dispose=function(){}}}const Ti=new An,ov=new Jt;function av(n,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,Vd(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,E,y,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),h(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),x(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,E,y):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Fe&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Fe&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const E=t.get(f),y=E.envMap,M=E.envMapRotation;y&&(p.envMap.value=y,Ti.copy(M),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),p.envMapRotation.value.setFromMatrix4(ov.makeRotationFromEuler(Ti)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,E,y){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=y*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Fe&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function x(p,f){const E=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function cv(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,y){const M=y.program;i.uniformBlockBinding(E,M)}function l(E,y){let M=r[E.id];M===void 0&&(g(E),M=u(E),r[E.id]=M,E.addEventListener("dispose",p));const b=y.program;i.updateUBOMapping(E,b);const T=t.render.frame;s[E.id]!==T&&(d(E),s[E.id]=T)}function u(E){const y=h();E.__bindingPointIndex=y;const M=n.createBuffer(),b=E.__size,T=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,b,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,M),M}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const y=r[E.id],M=E.uniforms,b=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let T=0,v=M.length;T<v;T++){const A=Array.isArray(M[T])?M[T]:[M[T]];for(let C=0,_=A.length;C<_;C++){const S=A[C];if(m(S,T,C,b)===!0){const L=S.__offset,I=Array.isArray(S.value)?S.value:[S.value];let U=0;for(let W=0;W<I.length;W++){const z=I[W],q=x(z);typeof z=="number"||typeof z=="boolean"?(S.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,L+U,S.__data)):z.isMatrix3?(S.__data[0]=z.elements[0],S.__data[1]=z.elements[1],S.__data[2]=z.elements[2],S.__data[3]=0,S.__data[4]=z.elements[3],S.__data[5]=z.elements[4],S.__data[6]=z.elements[5],S.__data[7]=0,S.__data[8]=z.elements[6],S.__data[9]=z.elements[7],S.__data[10]=z.elements[8],S.__data[11]=0):(z.toArray(S.__data,U),U+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,S.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,y,M,b){const T=E.value,v=y+"_"+M;if(b[v]===void 0)return typeof T=="number"||typeof T=="boolean"?b[v]=T:b[v]=T.clone(),!0;{const A=b[v];if(typeof T=="number"||typeof T=="boolean"){if(A!==T)return b[v]=T,!0}else if(A.equals(T)===!1)return A.copy(T),!0}return!1}function g(E){const y=E.uniforms;let M=0;const b=16;for(let v=0,A=y.length;v<A;v++){const C=Array.isArray(y[v])?y[v]:[y[v]];for(let _=0,S=C.length;_<S;_++){const L=C[_],I=Array.isArray(L.value)?L.value:[L.value];for(let U=0,W=I.length;U<W;U++){const z=I[U],q=x(z),F=M%b,$=F%q.boundary,nt=F+$;M+=$,nt!==0&&b-nt<q.storage&&(M+=b-nt),L.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=M,M+=q.storage}}}const T=M%b;return T>0&&(M+=b-T),E.__size=M,E.__cache={},this}function x(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function p(E){const y=E.target;y.removeEventListener("dispose",p);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function f(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}class lv{constructor(t={}){const{canvas:e=jp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),g=new Int32Array(4);let x=null,p=null;const f=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=ui,this.toneMappingExposure=1;const y=this;let M=!1,b=0,T=0,v=null,A=-1,C=null;const _=new de,S=new de;let L=null;const I=new Z(0);let U=0,W=e.width,z=e.height,q=1,F=null,$=null;const nt=new de(0,0,W,z),ot=new de(0,0,W,z);let Dt=!1;const zt=new bl;let Y=!1,et=!1;const gt=new Jt,ut=new Jt,At=new k,yt=new de,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function Vt(){return v===null?q:1}let D=i;function Ze(R,O){return e.getContext(R,O)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ml}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",dt,!1),D===null){const O="webgl2";if(D=Ze(O,R),D===null)throw Ze(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let kt,Xt,Rt,ae,Lt,P,w,H,j,Q,K,vt,at,ft,Yt,it,pt,Ct,Pt,mt,Ht,It,ie,N;function ht(){kt=new m_(D),kt.init(),It=new Qx(D,kt),Xt=new l_(D,kt,t,It),Rt=new jx(D),Xt.reverseDepthBuffer&&Rt.buffers.depth.setReversed(!0),ae=new x_(D),Lt=new Fx,P=new Jx(D,kt,Rt,Lt,Xt,It,ae),w=new h_(y),H=new p_(y),j=new Tm(D),ie=new a_(D,j),Q=new g_(D,j,ae,ie),K=new M_(D,Q,j,ae),Pt=new v_(D,Xt,P),it=new u_(Lt),vt=new Nx(y,w,H,kt,Xt,ie,it),at=new av(y,Lt),ft=new Bx,Yt=new Wx(kt),Ct=new o_(y,w,H,Rt,K,d,c),pt=new $x(y,K,Xt),N=new cv(D,ae,Xt,Rt),mt=new c_(D,kt,ae),Ht=new __(D,kt,ae),ae.programs=vt.programs,y.capabilities=Xt,y.extensions=kt,y.properties=Lt,y.renderLists=ft,y.shadowMap=pt,y.state=Rt,y.info=ae}ht();const X=new sv(y,D);this.xr=X,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const R=kt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=kt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(W,z,!1))},this.getSize=function(R){return R.set(W,z)},this.setSize=function(R,O,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=R,z=O,e.width=Math.floor(R*q),e.height=Math.floor(O*q),G===!0&&(e.style.width=R+"px",e.style.height=O+"px"),this.setViewport(0,0,R,O)},this.getDrawingBufferSize=function(R){return R.set(W*q,z*q).floor()},this.setDrawingBufferSize=function(R,O,G){W=R,z=O,q=G,e.width=Math.floor(R*G),e.height=Math.floor(O*G),this.setViewport(0,0,R,O)},this.getCurrentViewport=function(R){return R.copy(_)},this.getViewport=function(R){return R.copy(nt)},this.setViewport=function(R,O,G,V){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,O,G,V),Rt.viewport(_.copy(nt).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy(ot)},this.setScissor=function(R,O,G,V){R.isVector4?ot.set(R.x,R.y,R.z,R.w):ot.set(R,O,G,V),Rt.scissor(S.copy(ot).multiplyScalar(q).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(R){Rt.setScissorTest(Dt=R)},this.setOpaqueSort=function(R){F=R},this.setTransparentSort=function(R){$=R},this.getClearColor=function(R){return R.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(R=!0,O=!0,G=!0){let V=0;if(R){let B=!1;if(v!==null){const rt=v.texture.format;B=rt===yl||rt===Sl||rt===Ml}if(B){const rt=v.texture.type,lt=rt===qn||rt===ki||rt===rs||rt===br||rt===_l||rt===xl,_t=Ct.getClearColor(),xt=Ct.getClearAlpha(),Et=_t.r,Tt=_t.g,Mt=_t.b;lt?(m[0]=Et,m[1]=Tt,m[2]=Mt,m[3]=xt,D.clearBufferuiv(D.COLOR,0,m)):(g[0]=Et,g[1]=Tt,g[2]=Mt,g[3]=xt,D.clearBufferiv(D.COLOR,0,g))}else V|=D.COLOR_BUFFER_BIT}O&&(V|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),ft.dispose(),Yt.dispose(),Lt.dispose(),w.dispose(),H.dispose(),K.dispose(),ie.dispose(),N.dispose(),vt.dispose(),X.dispose(),X.removeEventListener("sessionstart",Kl),X.removeEventListener("sessionend",jl),vi.stop()};function J(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const R=ae.autoReset,O=pt.enabled,G=pt.autoUpdate,V=pt.needsUpdate,B=pt.type;ht(),ae.autoReset=R,pt.enabled=O,pt.autoUpdate=G,pt.needsUpdate=V,pt.type=B}function dt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Wt(R){const O=R.target;O.removeEventListener("dispose",Wt),ge(O)}function ge(R){ke(R),Lt.remove(R)}function ke(R){const O=Lt.get(R).programs;O!==void 0&&(O.forEach(function(G){vt.releaseProgram(G)}),R.isShaderMaterial&&vt.releaseShaderCache(R))}this.renderBufferDirect=function(R,O,G,V,B,rt){O===null&&(O=Ot);const lt=B.isMesh&&B.matrixWorld.determinant()<0,_t=op(R,O,G,V,B);Rt.setMaterial(V,lt);let xt=G.index,Et=1;if(V.wireframe===!0){if(xt=Q.getWireframeAttribute(G),xt===void 0)return;Et=2}const Tt=G.drawRange,Mt=G.attributes.position;let Qt=Tt.start*Et,ce=(Tt.start+Tt.count)*Et;rt!==null&&(Qt=Math.max(Qt,rt.start*Et),ce=Math.min(ce,(rt.start+rt.count)*Et)),xt!==null?(Qt=Math.max(Qt,0),ce=Math.min(ce,xt.count)):Mt!=null&&(Qt=Math.max(Qt,0),ce=Math.min(ce,Mt.count));const fe=ce-Qt;if(fe<0||fe===1/0)return;ie.setup(B,V,_t,G,xt);let Je,Kt=mt;if(xt!==null&&(Je=j.get(xt),Kt=Ht,Kt.setIndex(Je)),B.isMesh)V.wireframe===!0?(Rt.setLineWidth(V.wireframeLinewidth*Vt()),Kt.setMode(D.LINES)):Kt.setMode(D.TRIANGLES);else if(B.isLine){let St=V.linewidth;St===void 0&&(St=1),Rt.setLineWidth(St*Vt()),B.isLineSegments?Kt.setMode(D.LINES):B.isLineLoop?Kt.setMode(D.LINE_LOOP):Kt.setMode(D.LINE_STRIP)}else B.isPoints?Kt.setMode(D.POINTS):B.isSprite&&Kt.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Kt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const St=B._multiDrawStarts,we=B._multiDrawCounts,jt=B._multiDrawCount,mn=xt?j.get(xt).bytesPerElement:1,qi=Lt.get(V).currentProgram.getUniforms();for(let Qe=0;Qe<jt;Qe++)qi.setValue(D,"_gl_DrawID",Qe),Kt.render(St[Qe]/mn,we[Qe])}else if(B.isInstancedMesh)Kt.renderInstances(Qt,fe,B.count);else if(G.isInstancedBufferGeometry){const St=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,we=Math.min(G.instanceCount,St);Kt.renderInstances(Qt,fe,we)}else Kt.render(Qt,fe)};function qt(R,O,G){R.transparent===!0&&R.side===he&&R.forceSinglePass===!1?(R.side=Fe,R.needsUpdate=!0,Ss(R,O,G),R.side=fi,R.needsUpdate=!0,Ss(R,O,G),R.side=he):Ss(R,O,G)}this.compile=function(R,O,G=null){G===null&&(G=R),p=Yt.get(G),p.init(O),E.push(p),G.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),R!==G&&R.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const V=new Set;return R.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const rt=B.material;if(rt)if(Array.isArray(rt))for(let lt=0;lt<rt.length;lt++){const _t=rt[lt];qt(_t,G,B),V.add(_t)}else qt(rt,G,B),V.add(rt)}),E.pop(),p=null,V},this.compileAsync=function(R,O,G=null){const V=this.compile(R,O,G);return new Promise(B=>{function rt(){if(V.forEach(function(lt){Lt.get(lt).currentProgram.isReady()&&V.delete(lt)}),V.size===0){B(R);return}setTimeout(rt,10)}kt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let He=null;function Nn(R){He&&He(R)}function Kl(){vi.stop()}function jl(){vi.start()}const vi=new Yd;vi.setAnimationLoop(Nn),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(R){He=R,X.setAnimationLoop(R),R===null?vi.stop():vi.start()},X.addEventListener("sessionstart",Kl),X.addEventListener("sessionend",jl),this.render=function(R,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(O),O=X.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,O,v),p=Yt.get(R,E.length),p.init(O),E.push(p),ut.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),zt.setFromProjectionMatrix(ut),et=this.localClippingEnabled,Y=it.init(this.clippingPlanes,et),x=ft.get(R,f.length),x.init(),f.push(x),X.enabled===!0&&X.isPresenting===!0){const rt=y.xr.getDepthSensingMesh();rt!==null&&Zo(rt,O,-1/0,y.sortObjects)}Zo(R,O,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(F,$),te=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,te&&Ct.addToRenderList(x,R),this.info.render.frame++,Y===!0&&it.beginShadows();const G=p.state.shadowsArray;pt.render(G,R,O),Y===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=x.opaque,B=x.transmissive;if(p.setupLights(),O.isArrayCamera){const rt=O.cameras;if(B.length>0)for(let lt=0,_t=rt.length;lt<_t;lt++){const xt=rt[lt];Jl(V,B,R,xt)}te&&Ct.render(R);for(let lt=0,_t=rt.length;lt<_t;lt++){const xt=rt[lt];Zl(x,R,xt,xt.viewport)}}else B.length>0&&Jl(V,B,R,O),te&&Ct.render(R),Zl(x,R,O);v!==null&&(P.updateMultisampleRenderTarget(v),P.updateRenderTargetMipmap(v)),R.isScene===!0&&R.onAfterRender(y,R,O),ie.resetDefaultState(),A=-1,C=null,E.pop(),E.length>0?(p=E[E.length-1],Y===!0&&it.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Zo(R,O,G,V){if(R.visible===!1)return;if(R.layers.test(O.layers)){if(R.isGroup)G=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(O);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||zt.intersectsSprite(R)){V&&yt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ut);const lt=K.update(R),_t=R.material;_t.visible&&x.push(R,lt,_t,G,yt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||zt.intersectsObject(R))){const lt=K.update(R),_t=R.material;if(V&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),yt.copy(R.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),yt.copy(lt.boundingSphere.center)),yt.applyMatrix4(R.matrixWorld).applyMatrix4(ut)),Array.isArray(_t)){const xt=lt.groups;for(let Et=0,Tt=xt.length;Et<Tt;Et++){const Mt=xt[Et],Qt=_t[Mt.materialIndex];Qt&&Qt.visible&&x.push(R,lt,Qt,G,yt.z,Mt)}}else _t.visible&&x.push(R,lt,_t,G,yt.z,null)}}const rt=R.children;for(let lt=0,_t=rt.length;lt<_t;lt++)Zo(rt[lt],O,G,V)}function Zl(R,O,G,V){const B=R.opaque,rt=R.transmissive,lt=R.transparent;p.setupLightsView(G),Y===!0&&it.setGlobalState(y.clippingPlanes,G),V&&Rt.viewport(_.copy(V)),B.length>0&&Ms(B,O,G),rt.length>0&&Ms(rt,O,G),lt.length>0&&Ms(lt,O,G),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Jl(R,O,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Hi(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?as:qn,minFilter:Ni,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const rt=p.state.transmissionRenderTarget[V.id],lt=V.viewport||_;rt.setSize(lt.z,lt.w);const _t=y.getRenderTarget();y.setRenderTarget(rt),y.getClearColor(I),U=y.getClearAlpha(),U<1&&y.setClearColor(16777215,.5),y.clear(),te&&Ct.render(G);const xt=y.toneMapping;y.toneMapping=ui;const Et=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),Y===!0&&it.setGlobalState(y.clippingPlanes,V),Ms(R,G,V),P.updateMultisampleRenderTarget(rt),P.updateRenderTargetMipmap(rt),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let Mt=0,Qt=O.length;Mt<Qt;Mt++){const ce=O[Mt],fe=ce.object,Je=ce.geometry,Kt=ce.material,St=ce.group;if(Kt.side===he&&fe.layers.test(V.layers)){const we=Kt.side;Kt.side=Fe,Kt.needsUpdate=!0,Ql(fe,G,V,Je,Kt,St),Kt.side=we,Kt.needsUpdate=!0,Tt=!0}}Tt===!0&&(P.updateMultisampleRenderTarget(rt),P.updateRenderTargetMipmap(rt))}y.setRenderTarget(_t),y.setClearColor(I,U),Et!==void 0&&(V.viewport=Et),y.toneMapping=xt}function Ms(R,O,G){const V=O.isScene===!0?O.overrideMaterial:null;for(let B=0,rt=R.length;B<rt;B++){const lt=R[B],_t=lt.object,xt=lt.geometry,Et=V===null?lt.material:V,Tt=lt.group;_t.layers.test(G.layers)&&Ql(_t,O,G,xt,Et,Tt)}}function Ql(R,O,G,V,B,rt){R.onBeforeRender(y,O,G,V,B,rt),R.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),B.onBeforeRender(y,O,G,V,R,rt),B.transparent===!0&&B.side===he&&B.forceSinglePass===!1?(B.side=Fe,B.needsUpdate=!0,y.renderBufferDirect(G,O,V,B,R,rt),B.side=fi,B.needsUpdate=!0,y.renderBufferDirect(G,O,V,B,R,rt),B.side=he):y.renderBufferDirect(G,O,V,B,R,rt),R.onAfterRender(y,O,G,V,B,rt)}function Ss(R,O,G){O.isScene!==!0&&(O=Ot);const V=Lt.get(R),B=p.state.lights,rt=p.state.shadowsArray,lt=B.state.version,_t=vt.getParameters(R,B.state,rt,O,G),xt=vt.getProgramCacheKey(_t);let Et=V.programs;V.environment=R.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(R.isMeshStandardMaterial?H:w).get(R.envMap||V.environment),V.envMapRotation=V.environment!==null&&R.envMap===null?O.environmentRotation:R.envMapRotation,Et===void 0&&(R.addEventListener("dispose",Wt),Et=new Map,V.programs=Et);let Tt=Et.get(xt);if(Tt!==void 0){if(V.currentProgram===Tt&&V.lightsStateVersion===lt)return eu(R,_t),Tt}else _t.uniforms=vt.getUniforms(R),R.onBeforeCompile(_t,y),Tt=vt.acquireProgram(_t,xt),Et.set(xt,Tt),V.uniforms=_t.uniforms;const Mt=V.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Mt.clippingPlanes=it.uniform),eu(R,_t),V.needsLights=cp(R),V.lightsStateVersion=lt,V.needsLights&&(Mt.ambientLightColor.value=B.state.ambient,Mt.lightProbe.value=B.state.probe,Mt.directionalLights.value=B.state.directional,Mt.directionalLightShadows.value=B.state.directionalShadow,Mt.spotLights.value=B.state.spot,Mt.spotLightShadows.value=B.state.spotShadow,Mt.rectAreaLights.value=B.state.rectArea,Mt.ltc_1.value=B.state.rectAreaLTC1,Mt.ltc_2.value=B.state.rectAreaLTC2,Mt.pointLights.value=B.state.point,Mt.pointLightShadows.value=B.state.pointShadow,Mt.hemisphereLights.value=B.state.hemi,Mt.directionalShadowMap.value=B.state.directionalShadowMap,Mt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Mt.spotShadowMap.value=B.state.spotShadowMap,Mt.spotLightMatrix.value=B.state.spotLightMatrix,Mt.spotLightMap.value=B.state.spotLightMap,Mt.pointShadowMap.value=B.state.pointShadowMap,Mt.pointShadowMatrix.value=B.state.pointShadowMatrix),V.currentProgram=Tt,V.uniformsList=null,Tt}function tu(R){if(R.uniformsList===null){const O=R.currentProgram.getUniforms();R.uniformsList=ho.seqWithValue(O.seq,R.uniforms)}return R.uniformsList}function eu(R,O){const G=Lt.get(R);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function op(R,O,G,V,B){O.isScene!==!0&&(O=Ot),P.resetTextureUnits();const rt=O.fog,lt=V.isMeshStandardMaterial?O.environment:null,_t=v===null?y.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:gi,xt=(V.isMeshStandardMaterial?H:w).get(V.envMap||lt),Et=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Tt=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Mt=!!G.morphAttributes.position,Qt=!!G.morphAttributes.normal,ce=!!G.morphAttributes.color;let fe=ui;V.toneMapped&&(v===null||v.isXRRenderTarget===!0)&&(fe=y.toneMapping);const Je=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Kt=Je!==void 0?Je.length:0,St=Lt.get(V),we=p.state.lights;if(Y===!0&&(et===!0||R!==C)){const on=R===C&&V.id===A;it.setState(V,R,on)}let jt=!1;V.version===St.__version?(St.needsLights&&St.lightsStateVersion!==we.state.version||St.outputColorSpace!==_t||B.isBatchedMesh&&St.batching===!1||!B.isBatchedMesh&&St.batching===!0||B.isBatchedMesh&&St.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&St.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&St.instancing===!1||!B.isInstancedMesh&&St.instancing===!0||B.isSkinnedMesh&&St.skinning===!1||!B.isSkinnedMesh&&St.skinning===!0||B.isInstancedMesh&&St.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&St.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&St.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&St.instancingMorph===!1&&B.morphTexture!==null||St.envMap!==xt||V.fog===!0&&St.fog!==rt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==it.numPlanes||St.numIntersection!==it.numIntersection)||St.vertexAlphas!==Et||St.vertexTangents!==Tt||St.morphTargets!==Mt||St.morphNormals!==Qt||St.morphColors!==ce||St.toneMapping!==fe||St.morphTargetsCount!==Kt)&&(jt=!0):(jt=!0,St.__version=V.version);let mn=St.currentProgram;jt===!0&&(mn=Ss(V,O,B));let qi=!1,Qe=!1,Jo=!1;const pe=mn.getUniforms(),Jn=St.uniforms;if(Rt.useProgram(mn.program)&&(qi=!0,Qe=!0,Jo=!0),V.id!==A&&(A=V.id,Qe=!0),qi||C!==R){Xt.reverseDepthBuffer?(gt.copy(R.projectionMatrix),Jp(gt),Qp(gt),pe.setValue(D,"projectionMatrix",gt)):pe.setValue(D,"projectionMatrix",R.projectionMatrix),pe.setValue(D,"viewMatrix",R.matrixWorldInverse);const on=pe.map.cameraPosition;on!==void 0&&on.setValue(D,At.setFromMatrixPosition(R.matrixWorld)),Xt.logarithmicDepthBuffer&&pe.setValue(D,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&pe.setValue(D,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,Qe=!0,Jo=!0)}if(B.isSkinnedMesh){pe.setOptional(D,B,"bindMatrix"),pe.setOptional(D,B,"bindMatrixInverse");const on=B.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),pe.setValue(D,"boneTexture",on.boneTexture,P))}B.isBatchedMesh&&(pe.setOptional(D,B,"batchingTexture"),pe.setValue(D,"batchingTexture",B._matricesTexture,P),pe.setOptional(D,B,"batchingIdTexture"),pe.setValue(D,"batchingIdTexture",B._indirectTexture,P),pe.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&pe.setValue(D,"batchingColorTexture",B._colorsTexture,P));const Qo=G.morphAttributes;if((Qo.position!==void 0||Qo.normal!==void 0||Qo.color!==void 0)&&Pt.update(B,G,mn),(Qe||St.receiveShadow!==B.receiveShadow)&&(St.receiveShadow=B.receiveShadow,pe.setValue(D,"receiveShadow",B.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Jn.envMap.value=xt,Jn.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&O.environment!==null&&(Jn.envMapIntensity.value=O.environmentIntensity),Qe&&(pe.setValue(D,"toneMappingExposure",y.toneMappingExposure),St.needsLights&&ap(Jn,Jo),rt&&V.fog===!0&&at.refreshFogUniforms(Jn,rt),at.refreshMaterialUniforms(Jn,V,q,z,p.state.transmissionRenderTarget[R.id]),ho.upload(D,tu(St),Jn,P)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ho.upload(D,tu(St),Jn,P),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&pe.setValue(D,"center",B.center),pe.setValue(D,"modelViewMatrix",B.modelViewMatrix),pe.setValue(D,"normalMatrix",B.normalMatrix),pe.setValue(D,"modelMatrix",B.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const on=V.uniformsGroups;for(let ta=0,lp=on.length;ta<lp;ta++){const nu=on[ta];N.update(nu,mn),N.bind(nu,mn)}}return mn}function ap(R,O){R.ambientLightColor.needsUpdate=O,R.lightProbe.needsUpdate=O,R.directionalLights.needsUpdate=O,R.directionalLightShadows.needsUpdate=O,R.pointLights.needsUpdate=O,R.pointLightShadows.needsUpdate=O,R.spotLights.needsUpdate=O,R.spotLightShadows.needsUpdate=O,R.rectAreaLights.needsUpdate=O,R.hemisphereLights.needsUpdate=O}function cp(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(R,O,G){Lt.get(R.texture).__webglTexture=O,Lt.get(R.depthTexture).__webglTexture=G;const V=Lt.get(R);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,O){const G=Lt.get(R);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(R,O=0,G=0){v=R,b=O,T=G;let V=!0,B=null,rt=!1,lt=!1;if(R){const xt=Lt.get(R);if(xt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(D.FRAMEBUFFER,null),V=!1;else if(xt.__webglFramebuffer===void 0)P.setupRenderTarget(R);else if(xt.__hasExternalTextures)P.rebindTextures(R,Lt.get(R.texture).__webglTexture,Lt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Mt=R.depthTexture;if(xt.__boundDepthTexture!==Mt){if(Mt!==null&&Lt.has(Mt)&&(R.width!==Mt.image.width||R.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(R)}}const Et=R.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(lt=!0);const Tt=Lt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Tt[O])?B=Tt[O][G]:B=Tt[O],rt=!0):R.samples>0&&P.useMultisampledRTT(R)===!1?B=Lt.get(R).__webglMultisampledFramebuffer:Array.isArray(Tt)?B=Tt[G]:B=Tt,_.copy(R.viewport),S.copy(R.scissor),L=R.scissorTest}else _.copy(nt).multiplyScalar(q).floor(),S.copy(ot).multiplyScalar(q).floor(),L=Dt;if(Rt.bindFramebuffer(D.FRAMEBUFFER,B)&&V&&Rt.drawBuffers(R,B),Rt.viewport(_),Rt.scissor(S),Rt.setScissorTest(L),rt){const xt=Lt.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,xt.__webglTexture,G)}else if(lt){const xt=Lt.get(R.texture),Et=O||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,xt.__webglTexture,G||0,Et)}A=-1},this.readRenderTargetPixels=function(R,O,G,V,B,rt,lt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Lt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&lt!==void 0&&(_t=_t[lt]),_t){Rt.bindFramebuffer(D.FRAMEBUFFER,_t);try{const xt=R.texture,Et=xt.format,Tt=xt.type;if(!Xt.textureFormatReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=R.width-V&&G>=0&&G<=R.height-B&&D.readPixels(O,G,V,B,It.convert(Et),It.convert(Tt),rt)}finally{const xt=v!==null?Lt.get(v).__webglFramebuffer:null;Rt.bindFramebuffer(D.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(R,O,G,V,B,rt,lt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Lt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&lt!==void 0&&(_t=_t[lt]),_t){const xt=R.texture,Et=xt.format,Tt=xt.type;if(!Xt.textureFormatReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=R.width-V&&G>=0&&G<=R.height-B){Rt.bindFramebuffer(D.FRAMEBUFFER,_t);const Mt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Mt),D.bufferData(D.PIXEL_PACK_BUFFER,rt.byteLength,D.STREAM_READ),D.readPixels(O,G,V,B,It.convert(Et),It.convert(Tt),0);const Qt=v!==null?Lt.get(v).__webglFramebuffer:null;Rt.bindFramebuffer(D.FRAMEBUFFER,Qt);const ce=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Zp(D,ce,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Mt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,rt),D.deleteBuffer(Mt),D.deleteSync(ce),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,O=null,G=0){R.isTexture!==!0&&(uo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,R=arguments[1]);const V=Math.pow(2,-G),B=Math.floor(R.image.width*V),rt=Math.floor(R.image.height*V),lt=O!==null?O.x:0,_t=O!==null?O.y:0;P.setTexture2D(R,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,lt,_t,B,rt),Rt.unbindTexture()},this.copyTextureToTexture=function(R,O,G=null,V=null,B=0){R.isTexture!==!0&&(uo("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,R=arguments[1],O=arguments[2],B=arguments[3]||0,G=null);let rt,lt,_t,xt,Et,Tt;G!==null?(rt=G.max.x-G.min.x,lt=G.max.y-G.min.y,_t=G.min.x,xt=G.min.y):(rt=R.image.width,lt=R.image.height,_t=0,xt=0),V!==null?(Et=V.x,Tt=V.y):(Et=0,Tt=0);const Mt=It.convert(O.format),Qt=It.convert(O.type);P.setTexture2D(O,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const ce=D.getParameter(D.UNPACK_ROW_LENGTH),fe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Je=D.getParameter(D.UNPACK_SKIP_PIXELS),Kt=D.getParameter(D.UNPACK_SKIP_ROWS),St=D.getParameter(D.UNPACK_SKIP_IMAGES),we=R.isCompressedTexture?R.mipmaps[B]:R.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,we.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,we.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,_t),D.pixelStorei(D.UNPACK_SKIP_ROWS,xt),R.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,B,Et,Tt,rt,lt,Mt,Qt,we.data):R.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,B,Et,Tt,we.width,we.height,Mt,we.data):D.texSubImage2D(D.TEXTURE_2D,B,Et,Tt,rt,lt,Mt,Qt,we),D.pixelStorei(D.UNPACK_ROW_LENGTH,ce),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,fe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Je),D.pixelStorei(D.UNPACK_SKIP_ROWS,Kt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,St),B===0&&O.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Rt.unbindTexture()},this.copyTextureToTexture3D=function(R,O,G=null,V=null,B=0){R.isTexture!==!0&&(uo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,R=arguments[2],O=arguments[3],B=arguments[4]||0);let rt,lt,_t,xt,Et,Tt,Mt,Qt,ce;const fe=R.isCompressedTexture?R.mipmaps[B]:R.image;G!==null?(rt=G.max.x-G.min.x,lt=G.max.y-G.min.y,_t=G.max.z-G.min.z,xt=G.min.x,Et=G.min.y,Tt=G.min.z):(rt=fe.width,lt=fe.height,_t=fe.depth,xt=0,Et=0,Tt=0),V!==null?(Mt=V.x,Qt=V.y,ce=V.z):(Mt=0,Qt=0,ce=0);const Je=It.convert(O.format),Kt=It.convert(O.type);let St;if(O.isData3DTexture)P.setTexture3D(O,0),St=D.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)P.setTexture2DArray(O,0),St=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const we=D.getParameter(D.UNPACK_ROW_LENGTH),jt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),mn=D.getParameter(D.UNPACK_SKIP_PIXELS),qi=D.getParameter(D.UNPACK_SKIP_ROWS),Qe=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,fe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,fe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Et),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Tt),R.isDataTexture||R.isData3DTexture?D.texSubImage3D(St,B,Mt,Qt,ce,rt,lt,_t,Je,Kt,fe.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(St,B,Mt,Qt,ce,rt,lt,_t,Je,fe.data):D.texSubImage3D(St,B,Mt,Qt,ce,rt,lt,_t,Je,Kt,fe),D.pixelStorei(D.UNPACK_ROW_LENGTH,we),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,jt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,mn),D.pixelStorei(D.UNPACK_SKIP_ROWS,qi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Qe),B===0&&O.generateMipmaps&&D.generateMipmap(St),Rt.unbindTexture()},this.initRenderTarget=function(R){Lt.get(R).__webglFramebuffer===void 0&&P.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),Rt.unbindTexture()},this.resetState=function(){b=0,T=0,v=null,Rt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===El?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===zo?"display-p3":"srgb"}}class wl{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Z(t),this.near=e,this.far=i}clone(){return new wl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class uv extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class hv extends Le{constructor(t=null,e=1,i=1,r,s,o,a,c,l=qe,u=qe,h,d){super(null,o,a,c,l,u,r,s,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cn extends Tn{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const cr=new Jt,ju=new Jt,Vs=[],Zu=new Xi,dv=new Jt,Gr=new Bt,Vr=new Ir;class Al extends Bt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Cn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,dv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,cr),Zu.copy(t.boundingBox).applyMatrix4(cr),this.boundingBox.union(Zu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ir),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,cr),Vr.copy(t.boundingSphere).applyMatrix4(cr),this.boundingSphere.union(Vr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(t,e){const i=this.matrixWorld,r=this.count;if(Gr.geometry=this.geometry,Gr.material=this.material,Gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vr.copy(this.boundingSphere),Vr.applyMatrix4(i),t.ray.intersectsSphere(Vr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,cr),ju.multiplyMatrices(i,cr),Gr.matrixWorld=ju,Gr.raycast(t,Vs);for(let o=0,a=Vs.length;o<a;o++){const c=Vs[o];c.instanceId=s,c.object=this,e.push(c)}Vs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Cn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new hv(new Float32Array(r*this.count),r,this.count,vl,Un));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*t;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Rl extends pn{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],m=[];let g=0;const x=[],p=i/2;let f=0;E(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new ve(h,3)),this.setAttribute("normal",new ve(d,3)),this.setAttribute("uv",new ve(m,2));function E(){const M=new k,b=new k;let T=0;const v=(e-t)/i;for(let A=0;A<=s;A++){const C=[],_=A/s,S=_*(e-t)+t;for(let L=0;L<=r;L++){const I=L/r,U=I*c+a,W=Math.sin(U),z=Math.cos(U);b.x=S*W,b.y=-_*i+p,b.z=S*z,h.push(b.x,b.y,b.z),M.set(W,v,z).normalize(),d.push(M.x,M.y,M.z),m.push(I,1-_),C.push(g++)}x.push(C)}for(let A=0;A<r;A++)for(let C=0;C<s;C++){const _=x[C][A],S=x[C+1][A],L=x[C+1][A+1],I=x[C][A+1];t>0&&(u.push(_,S,I),T+=3),e>0&&(u.push(S,L,I),T+=3)}l.addGroup(f,T,0),f+=T}function y(M){const b=g,T=new $t,v=new k;let A=0;const C=M===!0?t:e,_=M===!0?1:-1;for(let L=1;L<=r;L++)h.push(0,p*_,0),d.push(0,_,0),m.push(.5,.5),g++;const S=g;for(let L=0;L<=r;L++){const U=L/r*c+a,W=Math.cos(U),z=Math.sin(U);v.x=C*z,v.y=p*_,v.z=C*W,h.push(v.x,v.y,v.z),d.push(0,_,0),T.x=W*.5+.5,T.y=z*.5*_+.5,m.push(T.x,T.y),g++}for(let L=0;L<r;L++){const I=b+L,U=S+L;M===!0?u.push(U,U+1,I):u.push(U+1,U,I),A+=3}l.addGroup(f,A,M===!0?1:2),f+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Go extends pn{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new k,d=new k,m=[],g=[],x=[],p=[];for(let f=0;f<=i;f++){const E=[],y=f/i;let M=0;f===0&&o===0?M=.5/e:f===i&&c===Math.PI&&(M=-.5/e);for(let b=0;b<=e;b++){const T=b/e;h.x=-t*Math.cos(r+T*s)*Math.sin(o+y*a),h.y=t*Math.cos(o+y*a),h.z=t*Math.sin(r+T*s)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),p.push(T+M,1-y),E.push(l++)}u.push(E)}for(let f=0;f<i;f++)for(let E=0;E<e;E++){const y=u[f][E+1],M=u[f][E],b=u[f+1][E],T=u[f+1][E+1];(f!==0||o>0)&&m.push(y,M,T),(f!==i-1||c<Math.PI)&&m.push(M,b,T)}this.setIndex(m),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(x,3)),this.setAttribute("uv",new ve(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Go(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ke extends ls{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Z(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Z(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ud,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Ju={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class fv{constructor(t,e,i){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const m=l[h],g=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const pv=new fv;class Cl{constructor(t){this.manager=t!==void 0?t:pv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Cl.DEFAULT_MATERIAL_NAME="__DEFAULT";class mv extends Cl{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Ju.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=ss("img");function c(){u(),Ju.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(h){u(),r&&r(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class gv extends Cl{constructor(t){super(t)}load(t,e,i,r){const s=new Le,o=new mv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},i,r),s}}class tf extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Z(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class _v extends tf{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Z(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ia=new Jt,Qu=new k,th=new k;class xv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bl,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Qu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qu),th.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(th),e.updateMatrixWorld(),Ia.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ia),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ia)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class vv extends xv{constructor(){super(new qd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mv extends tf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new vv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Sv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=eh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=eh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function eh(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ml}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ml);const yv=1.5;function Ev(n){const t=new lv({antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio,yv)),t.setSize(window.innerWidth,window.innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=Md,t.toneMapping=yd,t.toneMappingExposure=1.05,t.outputColorSpace=ln,n.appendChild(t.domElement);let e=null;return t.setResizeCallback=i=>{e=i},window.addEventListener("resize",()=>{t.setSize(window.innerWidth,window.innerHeight),e?.(window.innerWidth/window.innerHeight)}),t}function bv(){const n=new un(50,window.innerWidth/window.innerHeight,.1,500);return n.position.set(0,20,36),n}function Ws(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function oe(n,t){const e=Math.floor(n),i=Math.floor(t),r=n-e,s=t-i,o=r*r*(3-2*r),a=s*s*(3-2*s),c=Ws(e,i),l=Ws(e+1,i),u=Ws(e,i+1),h=Ws(e+1,i+1);return c*(1-o)*(1-a)+l*o*(1-a)+u*(1-o)*a+h*o*a}function ds(n){let t=n>>>0;return function(){t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function tt(n,t,e){return n<t?t:n>e?e:n}function bt(n,t,e){return n+(t-n)*e}function hi(n,t,e,i){return bt(n,t,1-Math.exp(-e*i))}function ne(n){const t=Math.hypot(n[0],n[1],n[2])||1;return[n[0]/t,n[1]/t,n[2]/t]}function je(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function wt(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function se(n,t){return[n[0]+t[0],n[1]+t[1],n[2]+t[2]]}function Kn(n,t){return[n[0]-t[0],n[1]-t[1],n[2]-t[2]]}function Bi(n,t,e,i){return{x:n,y:t,z:e,p:i}}function ef(n,t){const[e,i,r]=t;return[n.x[0]*e+n.y[0]*i+n.z[0]*r+n.p[0],n.x[1]*e+n.y[1]*i+n.z[1]*r+n.p[1],n.x[2]*e+n.y[2]*i+n.z[2]*r+n.p[2]]}function Ye(n,t,e){const i=Kn(t,n),r=Math.hypot(i[0],i[1],i[2])||1e-4,s=[i[0]/r,i[1]/r,i[2]/r],o=Math.abs(s[1])<.97?[0,1,0]:[1,0,0],a=ne(je(o,s)),c=je(a,s);return Bi(wt(a,e),wt(s,r),wt(c,e),n)}class Te{constructor(){this.positions=[],this.colors=[],this.indices=[]}addVertex(t,e,i,r){return this.positions.push(t,e,i),this.colors.push(r[0],r[1],r[2]),this.positions.length/3-1}addTri(t,e,i){this.indices.push(t,e,i)}addQuad(t,e,i,r){this.addTri(t,e,i),this.addTri(t,i,r)}bake(t,e,i){const r=this.positions.length/3;for(let s=0;s<t.p.length;s+=3){const o=ef(e,[t.p[s],t.p[s+1],t.p[s+2]]),a=i(o[0],o[1],o[2]);this.positions.push(o[0],o[1],o[2]),this.colors.push(a[0],a[1],a[2])}for(let s=0;s<t.i.length;s++)this.indices.push(r+t.i[s])}toBufferGeometry(){const t=new pn;return t.setAttribute("position",new ve(this.positions,3)),t.setAttribute("color",new ve(this.colors,3)),t.setIndex(this.indices),t.computeVertexNormals(),t}}function Ar(n,t){const e=[],i=[],r=[];for(let s=0;s<=t;s++){const o=Math.PI*s/t,a=Math.sin(o),c=Math.cos(o);for(let l=0;l<=n;l++){const u=2*Math.PI*l/n,h=a*Math.cos(u),d=c,m=a*Math.sin(u);e.push(h,d,m),i.push(h,d,m)}}for(let s=0;s<t;s++)for(let o=0;o<n;o++){const a=s*(n+1)+o,c=a+n+1;r.push(a,a+1,c,a+1,c+1,c)}return{p:e,n:i,i:r}}function Vo(n){const t=[],e=[],i=[];for(let s=0;s<=n;s++){const o=2*Math.PI*s/n,a=Math.cos(o),c=Math.sin(o);t.push(a,0,c),e.push(a,0,c),t.push(a,1,c),e.push(a,0,c)}for(let s=0;s<n;s++){const o=s*2;i.push(o,o+1,o+2,o+1,o+3,o+2)}const r=t.length/3;t.push(0,0,0),e.push(0,-1,0),t.push(0,1,0),e.push(0,1,0);for(let s=0;s<n;s++){const o=2*Math.PI*s/n,a=2*Math.PI*(s+1)/n,c=t.length/3;t.push(Math.cos(o),0,Math.sin(o)),e.push(0,-1,0),t.push(Math.cos(a),0,Math.sin(a)),e.push(0,-1,0),i.push(r,c+1,c);const l=t.length/3;t.push(Math.cos(o),1,Math.sin(o)),e.push(0,1,0),t.push(Math.cos(a),1,Math.sin(a)),e.push(0,1,0),i.push(r+1,l,l+1)}return{p:t,n:e,i}}const Tv=""+new URL("bark_albedo-DReMtPgm.png",import.meta.url).href,wv=""+new URL("tunnel-dirt_albedo-DgMZYBLi.png",import.meta.url).href,Av=""+new URL("lawn-soil_albedo-mTvxXfeR.png",import.meta.url).href,Rv=""+new URL("stone_albedo-CltKTJgX.png",import.meta.url).href,Cv=""+new URL("mushroom-cap_albedo-CRHQ2riL.png",import.meta.url).href,fo=new Float32Array(256);for(let n=0;n<256;n++){const t=n/255;fo[n]=t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function Pv(n,t){const e=document.createElement("canvas");e.width=n.width,e.height=n.height;const i=e.getContext("2d",{willReadFrequently:!0});i.drawImage(n,0,0);const r=i.getImageData(0,0,e.width,e.height).data;let s=0,o=0,a=0;const c=e.width*e.height;for(let l=0;l<r.length;l+=4)s+=fo[r[l]],o+=fo[r[l+1]],a+=fo[r[l+2]];t.set(Math.max(s/c,.001),Math.max(o/c,.001),Math.max(a/c,.001))}const Lv=new gv;function fs(n,t){const e=new k(.5,.5,.5),i=Lv.load(n,r=>{try{Pv(r.image,e)}catch(s){console.warn("albedo mean unavailable",s)}});return i.colorSpace=ln,i.wrapS=i.wrapT=Ao,i.repeat.set(1/t,1/t),i.anisotropy=4,i.userData.meanLinear=e,i}const Iv=5,Dv=16,Uv=45,Nv=12,Fv=2.5;let Ov=null,Bv=null,zv=null,kv=null,Hv=null;function nf(){return Ov||(Ov=fs(wv,Iv))}function Gv(){return Bv||(Bv=fs(Tv,Dv))}function Vv(){return zv||(zv=fs(Av,Uv))}function Wv(){return kv||(kv=fs(Rv,Nv))}function rf(){return Hv||(Hv=fs(Cv,Fv))}const Xv=`
uniform vec3 uTexMid;
uniform vec2 uTexRepeat;
uniform float uTexStrength;
varying vec3 vTexWorld;
varying vec3 vTexNormal;
vec3 gTriTex = vec3(1.0);   // filled by the <map_fragment> injection below,
                            // reused by the emissive one (which runs later)
`,Yv=4,qv=`
{
  vec3 tn = normalize(vTexNormal);
  vec3 bw = pow(abs(tn), vec3(${Yv.toFixed(1)}));
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
`;function sf(n,t){Object.assign(n.uniforms,t),n.vertexShader=n.vertexShader.replace("#include <common>",`varying vec3 vTexWorld;
varying vec3 vTexNormal;
#include <common>`).replace("#include <project_vertex>",`#include <project_vertex>
      vec4 texLocal = vec4(transformed, 1.0);
      vec3 texNrm = objectNormal;
      #ifdef USE_INSTANCING
        texLocal = instanceMatrix * texLocal;
        texNrm = mat3(instanceMatrix) * texNrm;
      #endif
      vTexWorld = (modelMatrix * texLocal).xyz;
      vTexNormal = mat3(modelMatrix) * texNrm;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",Xv+`
#include <common>`).replace("#include <map_fragment>",qv)}function of(n,t){return{uTexMid:{value:n.userData.meanLinear},uTexRepeat:{value:n.repeat},uTexStrength:{value:t}}}function ps({map:n,strength:t=1,...e}){const i=new Ke({vertexColors:!0,roughness:.95,metalness:0,map:n,...e}),r=of(n,t);return i.userData.texUniforms=r,i.onBeforeCompile=s=>sf(s,r),i.userData.shaderTag="triplanar-albedo",i.customProgramCacheKey=()=>"triplanar-albedo",i}function af({map:n,strength:t=1,emissive:e=1.6,...i}){const r=new Ke({vertexColors:!0,roughness:.6,metalness:0,map:n,...i}),s=of(n,t);return r.userData.texUniforms=s,r.onBeforeCompile=o=>{sf(o,s),o.fragmentShader=o.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
       totalEmissiveRadiance += vColor * gTriTex * ${e.toFixed(2)};`)},r.userData.shaderTag="triplanar-emissive",r.customProgramCacheKey=()=>"triplanar-emissive",r}const po=2.2,me=-166,Be=0,vr=7.2*po,Pl=-132,Io=32,$c=[-9,-140],ee=[13,0,-124],Kc=15,$v=2.6;function Oe(n){const t=(n-Pl)/Io;return t>-1&&t<1?vr+(Io-vr)*Math.pow(Math.sqrt(1-t*t),.72):vr}function re(n,t){let e=.22*oe(n*.11+11,t*.11+5);const i=Math.hypot(n-ee[0],t-ee[2]);if(i<Kc){const r=1-i/Kc;e+=$v*r*r*(3-2*r)}return e}const jc=[],pr=[],cf=[];function Ll(n,t){for(let e=0;e<jc.length;e++){const i=jc[e],s=Math.atan2(Math.sin(n-i.th),Math.cos(n-i.th))/i.rTh,o=(t-i.z)/i.rZ;if(s*s+o*o<1)return!0}return!1}function Kv(n,t){return Ll(t,n)?1/0:Oe(n)}function Il(){const n={};for(const t of pr)n[t.name]=t;return n}function Wo(n,t){for(let s=0;s<pr.length;s++){const o=pr[s],a=n-o.origin[0],c=t-o.origin[2],l=a*o.dir[0]+c*o.dir[2];if(l<=-.5||l>=o.uMax+1)continue;const u=a*o.side[0]+c*o.side[2],h=Math.max(o.profR(tt(l,0,o.uMax))*.82-1.2,2.2);if(Math.abs(u)>=h+3)continue;const d=tt(l,-.5,o.uMax-1.2),m=tt(u,-h,h);return[o.origin[0]+o.dir[0]*d+o.side[0]*m,o.origin[2]+o.dir[2]*d+o.side[2]*m]}const e=Math.max(Oe(t)*.82-1.6,3);let i=e,r=e;for(let s=0;s<pr.length;s++){const o=pr[s],a=tt(1-Math.abs(t-o.origin[2])/o.doorFalloff,0,1);if(a<=0)continue;const c=bt(e,Math.abs(o.origin[0])+1.5,a);o.dir[0]>0?c>i&&(i=c):c>r&&(r=c)}return[tt(n,-r,i),Math.max(t,me+5)]}const Dl=new Z("#6d5130"),ms=new Z("#5a4226"),Gi=new Z("#332412"),jv=new Z("#4c5f2f"),Zv=new Z(jv).lerp(Gi,.62).multiplyScalar(.58);function jn(n,t,e){return new Z(n).lerp(t,tt(e,0,1))}function mo(n,t,e,i){return oe(Math.cos(n)*e+t*i+37,Math.sin(n)*e+t*i*.7+91)}function Ul(n){return .86*Math.pow(vr/n,.35)}function jr(n){const t=Oe(n);return 1.2+t*Ul(t)*.62}function Fi(n,t,e){const i=Oe(t),r=Ul(i),s=.84+.2*mo(n,t,1.6,.1)+.1*mo(n,t,4.1,.29)+.05*mo(n,t,9.3,.62),o=i*s*(1-(e||0)),a=Math.cos(n)*o,c=Math.sin(n)*o*r+jr(t),l=re(a,t);return[a,Math.max(c,l),t,s]}function Jv(n,t){const e=jn(Gi,ms,n*.8+.12);return jn(e,Dl,t)}function Qv(n){const t=jn(Gi,ms,n*.8+.12);return jn(t,Dl,.28+n*.18)}function tM(n){const t=jn(Gi,ms,n*.75+.15);return jn(t,Dl,.55)}function eM(n){const t=jn(Gi,ms,n*.6+.08);return jn(t,Zv,.3+n*.3)}function Da(n,t,e,i,r,s,o,a,c,l,u,h){const d=Fi(t,e,0),m=[d[0],re(d[0],d[2]),d[2]],g=ne([Math.cos(t),0,1e-4]),x=ne(je([0,1,0],g)),p=r+o,f=r+o*2;function E(F){const $=(F-p)/o;return $>-1&&$<1?i+(s-i)*Math.pow(Math.sqrt(1-$*$),.72):i}function y(F){return .86*Math.pow(i/F,.35)}function M(F){const $=E(F);return 1.1+$*y($)*.6}function b(F,$,nt,ot){return oe(Math.cos(F)*nt+$*ot+c+37,Math.sin(F)*nt+$*ot*.7+c+91)}function T(F,$,nt){const ot=E($),Dt=y(ot),zt=.84+.2*b(F,$,1.6,.1)+.1*b(F,$,4.1,.29)+.05*b(F,$,9.3,.62),Y=ot*zt*(1-(nt||0)),et=Math.cos(F)*Y,gt=Math.sin(F)*Y*Dt+M($),ut=m[0]+g[0]*$+x[0]*et,At=m[2]+g[2]*$+x[2]*et,yt=m[1]+gt,Ot=re(ut,At);return[ut,Math.max(yt,Ot),At,zt]}{const F=Oe(e),$=Ul(F),nt=Math.asin(tt((m[1]+M(0)-jr(e))/(F*$),-.92,.92)),ot=t+(Math.cos(t)>=0?nt:-nt);jc.push({th:ot,z:e,rTh:Math.max(.16,i*1.8/Oe(e)),rZ:i*1.7})}if(h){const F=m[0]+g[0]*1.2,$=m[2]+g[2]*1.2;cf.push({p:[F,re(F,$)+2.1,$],c:h,name:n})}const v=new Te,A=1.5,C=[];for(let F=0;F<=f+1e-4;F+=A){const $=[];for(let nt=0;nt<a;nt++){const ot=2*Math.PI*nt/a,Dt=T(ot,F,0),zt=tt((Dt[3]-.84)/.34+.45,0,1);$.push(v.addVertex(Dt[0],Dt[1],Dt[2],u(zt,Dt[0],Dt[1],Dt[2]).multiplyScalar(l).toArray()))}C.push($)}for(let F=0;F<C.length-1;F++)for(let $=0;$<a;$++){const nt=($+1)%a;v.addQuad(C[F][$],C[F][nt],C[F+1][nt],C[F+1][$])}const _=m[0]+g[0]*f,S=m[2]+g[2]*f,L=m[1]+M(f)*.6,I=v.addVertex(_,L,S,u(.2,_,L,S).multiplyScalar(l).toArray()),U=C[C.length-1];for(let F=0;F<a;F++)v.addTri(I,U[F],U[(F+1)%a]);const W={name:n,origin:m,dir:g,side:x,uMax:f,uEnd:p,profR:E,pointAt:T,doorFalloff:i*2.2};pr.push(W);const z=m[0]+g[0]*p,q=m[2]+g[2]*p;return W.center=[z,re(z,q),q],{geometry:v.toBufferGeometry(),branch:W}}function nM(){const n=new Me;n.name="underground";const t=Da("granary",Math.PI,-70,3.3*po,9,13*1.5,10,30,4001,1,u=>Qv(u),[.55,.4,.2]),e=Da("brood",0,-120,4.2*po,8,17*1.5,13,34,5117,1,u=>tM(u),[.68,.5,.25]),i=Da("midden",0,-40,2.9*po,7,10*1.5,8,26,6229,.46,u=>eM(u),[.3,.44,.28]);n.add(new Bt(t.geometry,Xs())),n.add(new Bt(e.geometry,Xs())),n.add(new Bt(i.geometry,Xs()));const r=new Te,s=44,o=1.7,a=[];for(let u=me;u<=3.0001;u+=o){const h=[];for(let d=0;d<s;d++){const m=2*Math.PI*d/s,g=Fi(m,u,0),x=u>-14?1+Math.pow((u+14)/17,2)*.9:1;h.push([g[0]*x,Math.max(g[1]*(x*.5+.5),re(g[0]*x,u)),u,g[3]])}a.push(h)}for(let u=0;u<a.length;u++){const h=[];for(let d=0;d<s;d++){const m=a[u][d],g=tt(1-Math.abs(m[2]-Pl)/(Io*1.6),0,1),x=tt((m[3]-.84)/.34+.45,0,1),p=oe(m[0]*.13+3,m[2]*.13+8),f=Jv(x,g*.45+p*.2);h.push(r.addVertex(m[0],m[1],m[2],f.toArray()))}a[u].idx=h}for(let u=0;u<a.length-1;u++)for(let h=0;h<s;h++){const d=(h+1)%s;Ll(2*Math.PI*h/s,a[u][h][2])||r.addQuad(a[u].idx[h],a[u].idx[d],a[u+1].idx[d],a[u+1].idx[h])}{let u=a[0].idx;const h=4;for(let m=1;m<=h;m++){const g=Math.cos(m/h*Math.PI*.5),x=me-Math.sin(m/h*Math.PI*.5)*9,p=[];for(let f=0;f<s;f++){const E=2*Math.PI*f/s,y=a[0][f],M=.86+.28*mo(E,x*1.7,2.3,.2),b=y[0]*g*M,T=jr(me)+(y[1]-jr(me))*g*M,v=jn(Gi,ms,.15+M*.4).multiplyScalar(.35+.3*M);p.push(r.addVertex(b,Math.max(T,re(b,x)),x,v.toArray()))}for(let f=0;f<s;f++){const E=(f+1)%s;r.addQuad(u[f],u[E],p[E],p[f])}u=p}const d=r.addVertex(0,jr(me)*.6,me-10,Gi.clone().multiplyScalar(.3).toArray());for(let m=0;m<s;m++)r.addTri(d,u[m],u[(m+1)%s])}const c=new Bt(r.toBufferGeometry(),Xs());c.name="tunnel",n.add(c);const l=cf.slice();return l.push({p:[0,5,3],c:[1.15,1.2,1.35],name:"mouth"}),{group:n,doorLights:l,rooms:{granary:t.branch,brood:e.branch,midden:i.branch}}}let Ua=null;function Xs(){return Ua||(Ua=ps({map:nf(),strength:.62,side:he})),Ua}const be={x0:-208,x1:400,z0:0,z1:460},Xn={x0:-300,x1:470,z0:0,z1:540},di=-4.5,fn=n=>{const t=tt(n,0,1);return t*t*(3-2*t)},cn={edgeX:-196,bankTop:2,bankRun:15,depth:5,bedRun:30,farBankAt:68,farBankRun:46,farBankTop:24,blendRun:36};function Yi(n){return cn.edgeX+2*Math.sin(n*.021)+1*Math.sin(n*.047+1.3)}const ue={x:332,z:112,r:31,y:-7.2,depth:3.6,bedRun:24,bankTop:-5,bankRun:14,blendRun:20};function Xo(n,t){return Math.hypot(n-ue.x,t-ue.z)-ue.r}function iM(n){return n<=0?ue.y+(ue.bankTop-ue.y)*fn(-n/ue.bankRun):ue.y-ue.depth*fn(n/ue.bedRun)}function Zn(n,t){return Math.min(n-Yi(t),Xo(n,t))}function rM(n,t){return t<Be?null:n-Yi(t)<0?cn:Xo(n,t)<0?ue:null}function sM(n,t){const e=rM(n,t);return e?e===ue?ue.y:di:null}function oM(n,t){return Xo(n,t)<n-Yi(t)?ue.y:di}function aM(n){if(n<=0)return di+(cn.bankTop-di)*fn(-n/cn.bankRun);let t=di-cn.depth*fn(n/cn.bedRun);return n>cn.farBankAt&&(t+=cn.farBankTop*fn((n-cn.farBankAt)/cn.farBankRun)),t}const nh=[{x:0,z:20,r:64,amp:-3.5},{x:62,z:78,r:62,amp:16},{x:96,z:44,r:40,amp:9},{x:88,z:168,r:78,amp:-14},{x:88,z:168,r:30,amp:4},{x:-85,z:95,r:46,amp:6},{x:-85,z:95,r:26,amp:1.5},{x:-150,z:150,r:66,amp:13},{x:-132,z:44,r:50,amp:8},{x:24,z:128,r:44,amp:-8},{x:236,z:300,r:118,amp:26},{x:300,z:214,r:88,amp:18},{x:40,z:330,r:120,amp:-5},{x:96,z:386,r:70,amp:4},{x:340,z:118,r:76,amp:-16},{x:340,z:118,r:26,amp:5},{x:384,z:328,r:92,amp:21},{x:-40,z:520,r:190,amp:38},{x:190,z:512,r:175,amp:34},{x:468,z:190,r:165,amp:34},{x:440,z:420,r:130,amp:26}];function ih(n,t){let e=(oe(n*.012,t*.012)-.5)*4.2+(oe(n*.052,t*.052)-.5)*1.3;for(let i=0;i<nh.length;i++){const r=nh[i],s=Math.hypot(n-r.x,t-r.z);s>=r.r||(e+=r.amp*fn(1-s/r.r))}return e}function Ft(n,t){if(t<Be)return re(n,t);const e=n-Yi(t),i=1-fn(e/cn.blendRun);let r=i>0?bt(ih(n,t),aM(-e),i):ih(n,t);const s=Xo(n,t);if(s<ue.blendRun){const a=1-fn(s/ue.blendRun);a>0&&(r=bt(r,iM(-s),a))}const o=(1-fn(t/26))*tt(1-Math.abs(n)/40,0,1);return o>0?bt(r,re(n,0),o):r}function gs(n,t){return ne([Ft(n-1.4,t)-Ft(n+1.4,t),2*1.4,Ft(n,t-1.4)-Ft(n,t+1.4)])}function Ur(n,t){const i=(Ft(n+1.5,t)-Ft(n-1.5,t))/3,r=(Ft(n,t+1.5)-Ft(n,t-1.5))/(2*1.5);return Math.hypot(i,r)}function _i(n,t){const e=sM(n,t);return e===null?0:Math.max(0,e-Ft(n,t))}const lf=.62;function Nl(n,t){const e=oe(n*.006,t*.006),i=tt(oe(n*.018,t*.018)*2.3-.55+(e-.5)*.6,0,1)*(.55+.45*oe(n*.07,t*.07)),r=_i(n,t),s=Zn(n,t),o=Ur(n,t);let a="soil";return r>0?a="water":s<14?a="sand":o>lf?a="rock":i>.5&&(a="moss"),{kind:a,moss:i,slope:o,depth:r,toWater:s}}function cM(n,t){const e=Nl(n,t);return{y:Ft(n,t),normal:gs(n,t),slope:e.slope,soil:e.kind,moss:e.moss,waterDepth:e.depth,distToWater:e.toWater,diggable:e.depth===0&&e.slope<=lf&&e.toWater>10}}function Zc(n,t){const e=Yi(t)+1;return[tt(Math.max(n,e),be.x0,be.x1),tt(t,be.z0,be.z1)]}const lM=new Z("#86673B"),uM=new Z("#5A4529"),hM=new Z("#5F8034"),dM=new Z("#9DBE58"),fM=new Z("#A79463"),pM=new Z("#4A5540"),mM=new Z("#7C7566");function hn(n,t,e){return new Z(n).lerp(t,tt(e,0,1))}const Ys=6;function gM(){const{x0:n,x1:t,z0:e,z1:i}=Xn,r=Math.floor((t-n)/Ys)+1,s=Math.floor((i-e)/Ys)+1,o=new Te;for(let c=0;c<r;c++)for(let l=0;l<s;l++){const u=n+c*Ys,h=e+l*Ys,d=Ft(u,h),m=oe(u*.006,h*.006),g=tt(oe(u*.018,h*.018)*2.3-.55+(m-.5)*.6,0,1)*(.55+.45*oe(u*.07,h*.07));let x=hn(hn(lM,uM,oe(u*.09,h*.09)),hn(hM,dM,oe(u*.05,h*.05)),g);const p=Zn(u,h);if(p<30){x=hn(x,fM,fn((30-p)/26));const E=oM(u,h);d<E+.6&&(x=hn(x,pM,fn((E+.6-d)/3.5)))}const f=Ur(u,h);f>.45&&(x=hn(x,mM,fn((f-.45)/.5)*.75)),o.addVertex(u,d,h,x.toArray())}for(let c=0;c<r-1;c++)for(let l=0;l<s-1;l++){const u=c*s+l,h=(c+1)*s+l,d=(c+1)*s+l+1,m=c*s+l+1;o.addQuad(u,h,d,m)}const a=new Bt(o.toBufferGeometry(),ps({map:Vv(),strength:.8,side:he}));return a.name="lawn",a.receiveShadow=!0,a}const _M=new Z("#9CC6E4"),xM=`
uniform float uWaveTime;
vec2 waterWaveGrad(vec3 p, out float h) {
  float a = p.x * 0.085 + uWaveTime * 1.05;
  float b = p.z * 0.115 - uWaveTime * 0.77 + p.x * 0.04;
  float c = p.z * 0.031 + uWaveTime * 0.31;
  h = sin(a) * 0.24 + sin(b) * 0.17 + sin(c) * 0.30;
  return vec2(cos(a) * 0.24 * 0.085 + cos(b) * 0.17 * 0.04,
              cos(b) * 0.17 * 0.115 + cos(c) * 0.30 * 0.031);
}
`;function vM(){const{x0:n,z0:t,z1:e}=Xn,i=56,r=14,s=new Te,o=new Z("#3E6B7A"),a=new Z("#22414F");for(let f=0;f<=i;f++){const E=t+(e-t)*(f/i),y=Yi(E)+1.2;for(let M=0;M<=r;M++){const b=bt(n,y,M/r),T=tt((di-Ft(b,E))/6,0,1);s.addVertex(b,di,E,hn(o,a,T).toArray())}}for(let f=0;f<i;f++)for(let E=0;E<r;E++){const y=f*(r+1)+E;s.addQuad(y+r+1,y+r+2,y+1,y)}const c=new Ke({vertexColors:!0,roughness:.16,metalness:0,transparent:!0,opacity:.86,side:he}),l={uWaveTime:{value:0},uSkyCol:{value:_M}};c.userData.waterUniforms=l,c.userData.shaderTag="water-ripple",c.onBeforeCompile=f=>{Object.assign(f.uniforms,l),f.vertexShader=f.vertexShader.replace("#include <common>",xM+`
#include <common>`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        float wh; vec2 wg = waterWaveGrad(position, wh);
        objectNormal = normalize(vec3(-wg.x, 1.0, -wg.y));`).replace("#include <begin_vertex>",`#include <begin_vertex>
        transformed.y += wh;`),f.fragmentShader=f.fragmentShader.replace("#include <common>",`uniform vec3 uSkyCol;
#include <common>`).replace("#include <tonemapping_fragment>",`
        {
          float fres = pow(1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0), 3.0);
          gl_FragColor.rgb = mix(gl_FragColor.rgb, uSkyCol, 0.13 + 0.72 * fres);
        }
        #include <tonemapping_fragment>`)},c.customProgramCacheKey=()=>"water-ripple";const u=new Te,h=6,d=26,m=.9,g=u.addVertex(ue.x,ue.y,ue.z,a.toArray()),x=[];for(let f=1;f<=h;f++){const E=(ue.r+m)*(f/h),y=[];for(let M=0;M<d;M++){const b=2*Math.PI*M/d,T=ue.x+Math.cos(b)*E,v=ue.z+Math.sin(b)*E,A=tt((ue.y-Ft(T,v))/4,0,1);y.push(u.addVertex(T,ue.y,v,hn(o,a,A).toArray()))}x.push(y)}for(let f=0;f<d;f++){const E=(f+1)%d;u.addTri(g,x[0][E],x[0][f]);for(let y=0;y<h-1;y++)u.addQuad(x[y][f],x[y][E],x[y+1][E],x[y+1][f])}const p=new Me;p.name="water";for(const f of[s.toBufferGeometry(),u.toBufferGeometry()]){const E=new Bt(f,c);E.receiveShadow=!1,p.add(E)}return{mesh:p,update(f){l.uWaveTime.value=f}}}const MM=[{r:442,segs:96,base:-120,peak:165,seed:3.1,rough:.55,haze:.72,tint:"#8FA6C4"},{r:384,segs:96,base:-120,peak:118,seed:11.7,rough:.75,haze:.5,tint:"#6E86A6"}];function rh(n,t,e){const i=oe(Math.cos(n)*2.1+t,Math.sin(n)*2.1+t),r=oe(Math.cos(n)*5.3+t*2,Math.sin(n)*5.3+t*2),s=oe(Math.cos(n)*11+t*3,Math.sin(n)*11+t*3);return tt(.3+(i-.5)*1.5+(r-.5)*e+(s-.5)*e*.45,.05,1)}function SM(n="#8B8399",t="#AFC8D8"){const e=new Z(n),i=new Z(t),r=new Me;r.name="horizon";const s=[];for(const a of MM){const c=new Te,l=[],u=new Z(a.tint),h=[],d=[],m=[];for(let x=0;x<=a.segs;x++){const p=x/a.segs*Math.PI*2,f=rh(p,a.seed,a.rough),E=a.base+(a.peak-a.base)*f,y=Math.cos(p)*a.r,M=Math.sin(p)*a.r,b=rh(p-.04,a.seed,a.rough),T=tt(.5+(f-b)*6,0,1),v=hn(u.clone().multiplyScalar(.72),u.clone().multiplyScalar(1.16),T),A=S=>{const L=hn(v,S,a.haze*.75),I=hn(v.clone().multiplyScalar(.85),S,Math.min(1,a.haze+.22));return[L,hn(L,I,.6),I]},C=A(e),_=A(i);h.push(c.addVertex(y,E,M,C[0].toArray())),d.push(c.addVertex(y,bt(a.base,E,.45),M,C[1].toArray())),m.push(c.addVertex(y,a.base,M,C[2].toArray()));for(const S of _)l.push(S.r,S.g,S.b)}for(let x=0;x<a.segs;x++)c.addQuad(h[x],h[x+1],d[x+1],d[x]),c.addQuad(d[x],d[x+1],m[x+1],m[x]);const g=new Bt(c.toBufferGeometry(),new ko({vertexColors:!0,fog:!1,side:he,depthTest:!1,depthWrite:!1}));g.renderOrder=-1e3,g.frustumCulled=!1,r.add(g),s.push({mesh:g,base:g.geometry.attributes.color.array.slice(),alt:new Float32Array(l)})}let o=-1;return{group:r,update(a,c=0){if(r.position.set(a.position.x,0,a.position.z),!(Math.abs(c-o)<.002)){o=c;for(const l of s){const u=l.mesh.geometry.attributes.color;for(let h=0;h<u.array.length;h++)u.array[h]=l.base[h]+(l.alt[h]-l.base[h])*c;u.needsUpdate=!0}}}}}const Zr={position:new k(0,0,0),radius:.9};function uf(n){return n<42?Math.min(Math.max(n/40,.55),1.45):Math.min(Math.max(2.1+(n-42)*.038,2.1),4.4)}function yM(n){return uf(n)*.5}function pi(n,t){const e=Math.cos(n.ang),i=Math.sin(n.ang),r=t*t*n.h*.26;return[n.x+e*r,n.baseY+n.h*t*(1-t*.13),n.z+i*r]}function Do(n,t){const e=pi(n,t),i=pi(n,Math.min(t+.01,1)),r=ne(Kn(i,e)),s=[-Math.sin(n.ang),0,Math.cos(n.ang)],o=ne(je(r,s));return{pos:e,tangent:r,width:s,normal:o}}const Na=6;function EM(){const n=[],t=[],e=[],i=[];for(let s=0;s<=Na;s++){const o=s/Na;n.push(-.5,o,0,.5,o,0),t.push(o,o),e.push(-1,1)}for(let s=1;s<=Na;s++){const o=(s-1)*2,a=o+1,c=s*2,l=c+1;i.push(o,a,l,o,l,c)}const r=new pn;return r.setAttribute("position",new ve(n,3)),r.setAttribute("aT",new ve(t,1)),r.setAttribute("aSide",new ve(e,1)),r.setIndex(i),r}const bM=new Z("#5A7331"),TM=new Z("#8FB055"),wM=new Z("#C6DC82"),sh=`
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
`;function hf({count:n=1800,seed:t=7}={}){const e=ds(t),i=EM(),r=new Float32Array(n*3),s=new Float32Array(n),o=new Float32Array(n),a=new Float32Array(n),c=new Float32Array(n*3),l=new Float32Array(n),u=new Float32Array(n),h=[];let d=0,m=0;for(;d<n&&m<n*8;){m++;const C=bt(Xn.x0+8,be.x1-4,e()),_=6+e()*(be.z1-6);if(_i(C,_)>0||Math.abs(C)<16&&_<34&&e()<.82)continue;const L=.72+.28*oe(C*.01,_*.01),I=e()<.22?48+e()*60*L:(14+e()*26)*L,U=e()*Math.PI*2,W=Ft(C,_),z=new Z(TM).lerp(wM,e());r[d*3]=C,r[d*3+1]=W,r[d*3+2]=_,s[d]=I,o[d]=U,a[d]=e()*Math.PI*2,c[d*3]=z.r,c[d*3+1]=z.g,c[d*3+2]=z.b,l[d]=uf(I),u[d]=(e()*2-1)*.85,h.push({i:d,x:C,z:_,h:I,baseY:W,w:yM(I),ang:U}),d++}const g=d;i.setAttribute("aBase",new Cn(r.subarray(0,g*3),3)),i.setAttribute("aH",new Cn(s.subarray(0,g),1)),i.setAttribute("aAng",new Cn(o.subarray(0,g),1)),i.setAttribute("aPhase",new Cn(a.subarray(0,g),1)),i.setAttribute("aTip",new Cn(c.subarray(0,g*3),3)),i.setAttribute("aWidth",new Cn(l.subarray(0,g),1)),i.setAttribute("aTwist",new Cn(u.subarray(0,g),1));const x=(Xn.x0+be.x1)/2,p=(be.z0+be.z1)/2,f=Math.hypot(be.x1-x,be.z1-p)+120;i.boundingSphere=new Ir(new k(x,40,p),f);const E={uTime:{value:0},uWind:{value:.55},uAntPos:{value:new k(0,0,-9999)},uAntRadius:{value:.9},uBaseColor:{value:new Z(bM)},uOccNear:{value:5},uOccFar:{value:16},uTransl:{value:.16},uCastA:{value:new k(0,0,0)},uCastB:{value:new k(0,0,0)},uCastRadius:{value:46}},y=new Ke({roughness:.85,metalness:0,side:he});y.extensions={derivatives:!0},y.onBeforeCompile=C=>{Object.assign(C.uniforms,E),C.vertexShader=C.vertexShader.replace("#include <common>",sh+`
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
      `)};const M=new Qd({depthPacking:Dd,side:he});M.onBeforeCompile=C=>{Object.assign(C.uniforms,E),C.vertexShader=C.vertexShader.replace("#include <common>",sh+`
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
      `)},M.customProgramCacheKey=()=>"grass-depth";const b=new Al(i,y,g);b.name="grass",b.castShadow=!0,b.receiveShadow=!0,b.customDepthMaterial=M;const T=new Jt;for(let C=0;C<g;C++)b.setMatrixAt(C,T);b.instanceMatrix.needsUpdate=!0;function v(C,_,S){E.uTime.value=_,E.uAntPos.value.copy(Zr.position),E.uAntRadius.value=Zr.radius,E.uCastA.value.copy(Zr.position),S&&E.uCastB.value.copy(S.position)}function A(C){E.uCastRadius.value=C}return{mesh:b,footprints:h,update:v,setCastRadius:A}}const Gt={x:-85,z:95,h:340,ang:Math.PI/2,w:22};Gt.baseY=Ft(Gt.x,Gt.z);const AM=new Z("#5a4226"),RM=new Z("#332412"),df=new Z("#4a3418"),Fa=new Z(AM).lerp(df,.3),Oa=new Z(RM).lerp(df,.55),oh=new Z("#6C8E3C"),ah=new Z("#AECB6E");function qs(n,t,e){return new Z(n).lerp(t,tt(e,0,1))}const Ln=.8,CM=6.2;function Oi(n){return pi(Gt,n)}function Jc(n){const t=Oi(n),e=Oi(Math.min(n+.01,1)),i=ne(Kn(e,t)),r=Math.abs(i[1])<.97?[0,1,0]:[1,0,0],s=ne(je(r,i));return{p:t,x:s,z:je(s,i)}}function Vi(n){return bt(Gt.w,CM,Math.pow(tt(n,0,Ln)/Ln,.7))}const Fl=Ln*.55,ch=Math.PI*1.511,PM=98,LM=36,IM=9.6,ff=5,Qc=Jc(Fl),pf=ne(se(wt(Qc.x,Math.cos(ch)),wt(Qc.z,Math.sin(ch)))),DM=se(Qc.p,wt(pf,Vi(Fl)*.7));function Jr(n){const t=1-(1-n)*(1-n);return se(DM,se(wt(pf,n*PM),[0,t*LM,0]))}function mf(n){return bt(IM,ff,tt(n,0,1))}function gf(n){const t=Jr(tt(n-.005,0,1)),e=Jr(tt(n+.005,0,1)),i=ne(Kn(e,t)),r=ne(je(i,[0,1,0])),s=ne(je(r,i));return{pos:Jr(n),fwd:i,side:r,up:s}}const In={splitT:Fl,point:Jr,radius:mf,basis:gf,tipPos:Jr(1),tipRadius:ff};Gt.walkBranch=In;function lh(n){const t=new Te,e=new Te,i=ds(n?481001:481002),r=n?20:4,s=n?16:6,o=[];for(let g=0;g<=r;g++){const x=g/r*Ln,p=Jc(x),f=Vi(x),E=[];for(let y=0;y<s;y++){const M=2*Math.PI*y/s,b=n?.86+.1*oe(Math.cos(M)*2.2+x*13,Math.sin(M)*2.2+x*13+30)+.06*oe(Math.cos(M)*6.4+x*29+8,Math.sin(M)*6.4+x*29+51):1,T=f*b,v=se(p.p,se(wt(p.x,Math.cos(M)*T),wt(p.z,Math.sin(M)*T))),A=tt((b-.86)/.2+.4,0,1),C=qs(Oa,Fa,A);E.push(t.addVertex(v[0],v[1],v[2],C.toArray()))}o.push(E)}for(let g=0;g<o.length-1;g++)for(let x=0;x<s;x++){const p=(x+1)%s;t.addQuad(o[g][x],o[g][p],o[g+1][p],o[g+1][x])}const a=Vo(n?7:5),c=Ar(n?8:6,n?5:4),l=qs(oh,ah,.42);function u(g,x,p){const f=x*(.9+i()*.3),E=x*(.75+i()*.25),y={x:[f,0,0],y:[0,E,0],z:[0,0,f],p:g};e.bake(c,y,()=>(n?qs(oh,ah,p):l).toArray())}const h=n?10:3,d=n?10:5,m=[];for(let g=0;g<=h;g++){const x=g/h,p=gf(x),f=mf(x),E=[];for(let y=0;y<d;y++){const M=2*Math.PI*y/d,b=n?.9+.1*oe(Math.cos(M)*2.4+x*11+100,Math.sin(M)*2.4+x*11+44):1,T=f*b,v=se(p.pos,se(wt(p.side,Math.cos(M)*T),wt(p.up,Math.sin(M)*T))),A=qs(Oa,Fa,tt((b-.9)/.1,0,1));E.push(t.addVertex(v[0],v[1],v[2],A.toArray()))}m.push(E)}for(let g=0;g<m.length-1;g++)for(let x=0;x<d;x++){const p=(x+1)%d;t.addQuad(m[g][x],m[g][p],m[g+1][p],m[g+1][x])}if(n){const g=Oi(0),x=Gt.w;for(let f=0;f<4;f++){const E=f/4*Math.PI*2+i()*.5,y=x*1.6+i()*3,M=[g[0],g[1]+x*.7,g[2]],b=[g[0]+Math.cos(E)*y,g[1]-1.6,g[2]+Math.sin(E)*y],T=Ye(M,b,x*.5);t.bake(a,T,()=>Oa.toArray())}const p=5;for(let f=0;f<p;f++){const E=Ln*(.6+f/p*.35+i()*.03),y=Jc(E),M=f/p*Math.PI*2+i()*.7,b=ne(se(wt(y.x,Math.cos(M)),wt(y.z,Math.sin(M)))),T=ne(se(wt(b,.7),[0,.7,0])),v=se(y.p,wt(b,Vi(E)*.7)),A=34+i()*22,C=se(v,wt(T,A)),_=3.4+i()*1.4,S=Ye(v,C,_),L=new Z(Fa).multiplyScalar(.9);t.bake(a,S,()=>L.toArray()),u(C,30+i()*13,i()),u(se(v,wt(Kn(C,v),.55)),22+i()*9,i())}u(se(Oi(Ln),[0,12,0]),34,.5)}else u(se(Oi(Ln),[-14,14,6]),55,.5),u(se(Oi(Ln),[18,22,-8]),48,.5);return{bark:t.toBufferGeometry(),leaf:e.toBufferGeometry()}}const UM=130,NM=170;function FM(){const n=ps({map:Gv(),strength:1,roughness:.92,side:he}),t=new Ke({vertexColors:!0,roughness:.92,metalness:0,side:he}),e=lh(!0),i=lh(!1),r=new Me;r.add(new Bt(e.bark,n),new Bt(e.leaf,t));const s=new Me;s.add(new Bt(i.bark,n),new Bt(i.leaf,t));for(const l of r.children)l.castShadow=!0,l.receiveShadow=!0;for(const l of s.children)l.castShadow=!0;s.visible=!1;const o=new Me;o.name="tree",o.add(r,s);let a=!0;function c(l){const u=Math.hypot(l.position.x-Gt.x,l.position.z-Gt.z);a&&u>NM?a=!1:!a&&u<UM&&(a=!0),r.visible=a,s.visible=!a}return{group:o,update:c}}const Rr=8,OM=.3,go=[];function Mn(n,t){const e={p:[n[0],n[1],n[2]],c:[t[0],t[1],t[2]],_d:0};return go.push(e),e}const Ri=new Float32Array(Rr*3),Ci=new Float32Array(Rr*3),Ii=new de(0,0,0,1),Uo=new de(0,1,0,0),BM={uLightPos:{value:Ri},uLightCol:{value:Ci},uPitA:{value:Ii},uPitB:{value:Uo}};function zM(n,t,e,i,r){Ii.set(n,t,e,Math.max(i,.001)),Uo.set(1,Math.max(r,.001),0,0)}function tl(n,t,e){if(Uo.x<.5)return 0;const i=a=>{const c=Math.min(1,Math.max(0,a));return c*c*(3-2*c)},r=Math.hypot(n-Ii.x,e-Ii.z),s=1-i((r-Ii.w*.9)/(Ii.w*.8)),o=Math.min(1,Math.max(0,(Ii.y-t)/Uo.y));return s*i((o-.04)/.46)}function kM(n){const t=n.x,e=n.y,i=n.z;for(let s=0;s<go.length;s++){const o=go[s],a=o.p[0]-t,c=o.p[1]-e,l=o.p[2]-i;o._d=a*a+c*c+l*l}const r=go.slice().sort((s,o)=>s._d-o._d);for(let s=0;s<Rr;s++){const o=r[s];o?(Ri[s*3]=o.p[0],Ri[s*3+1]=o.p[1],Ri[s*3+2]=o.p[2],Ci[s*3]=o.c[0],Ci[s*3+1]=o.c[1],Ci[s*3+2]=o.c[2]):(Ri[s*3]=Ri[s*3+1]=Ri[s*3+2]=0,Ci[s*3]=Ci[s*3+1]=Ci[s*3+2]=0)}}function HM(n,t,e){if(e>=Be)return .9;const i=Math.max(0,Math.min(1,(e-me)/(Be-me)));return .12+.88*Math.pow(i,1.6)}const GM=`
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
  float t = clamp((w.z - (${me.toFixed(1)})) / (${(Be-me).toFixed(1)}), 0.0, 1.0);
  return (0.12 + 0.88 * pow(t, 1.6)) * pit;
}
`;function Yo(n){if(!n||n.userData.nestShaded)return n;n.userData.nestShaded=!0;const t=n.onBeforeCompile;n.onBeforeCompile=function(i,r){t&&t.call(this,i,r),Object.assign(i.uniforms,BM),i.vertexShader=i.vertexShader.replace("#include <common>",`varying vec3 vNestWorld;
#include <common>`).replace("#include <project_vertex>",`#include <project_vertex>
  vec4 nestLocal = vec4(transformed, 1.0);
  #ifdef USE_INSTANCING
    nestLocal = instanceMatrix * nestLocal;
  #endif
  vNestWorld = (modelMatrix * nestLocal).xyz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",GM+`
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
          reflectedLight.indirectDiffuse *= max(nestDay, ${OM.toFixed(2)});
          vec3 nestSum = vec3(0.0);
          for (int i = 0; i < ${Rr}; i++) {
            vec3 Ld = uLightPos[i] - vNestWorld;
            float d = length(Ld);
            float att = 1.0 / (1.0 + d * d * 0.017);
            nestSum += uLightCol[i] * max(dot(normal, Ld / max(d, 0.001)), 0.0) * att;
          }
          reflectedLight.directDiffuse += diffuseColor.rgb * nestSum;
        }
      `)};const e=n.userData.shaderTag||"";return n.customProgramCacheKey=()=>"nest-shading|"+e,n.needsUpdate=!0,n}const ze=n=>new Z(n).toArray(),nn=(n,t)=>[n[0]*t,n[1]*t,n[2]*t],si=(n,t,e,i)=>[n[0]*t,n[1]*e,n[2]*i],ai=(n,t,e)=>[bt(n[0],t[0],e),bt(n[1],t[1],e),bt(n[2],t[2],e)],VM=ze("#6d5130"),WM=ze("#5a4226"),Qr=ze("#332412"),_o=ze("#4c5f2f"),Ba=ze("#6a6154"),XM="#5E4526",YM=ze("#4a3418"),uh=ze(XM),hh=ze("#efdcb0"),dh=ze("#7a6040"),qM=ze("#ffc46a"),za=ze("#c497d9"),$M=ze("#e0a752"),fh=ai(ze("#e07356"),ze("#e6b558"),.5),KM=ze("#9db0d8"),jM=nn(ai(_o,Qr,.62),.58),ZM=nn(Qr,.7),ka=[.72,.48,1.75],JM=[1.95,1.2,.52],En=[],Yn=[];function _f(n){return n.r*.65}function QM(n){const t=new Te,e=new Te,i=new Te,r=ds(20260812),s=Ar(10,7),o=Ar(6,4),a=Vo(8),c=(b,T,v,A)=>Bi([b,0,0],[0,T,0],[0,0,v],A);{const v=[];for(let A=0;A<=9;A++){const C=[];for(let _=0;_<=30;_++){const S=2*Math.PI*_/30,L=Kc*1.02*A/9,I=ee[0]+Math.cos(S)*L,U=ee[2]+Math.sin(S)*L,W=re(I,U)+.08,z=ai(VM,WM,tt(.3+oe(I*.2,U*.2)*.5,0,1));C.push(t.addVertex(I,W,U,nn(z,.65+.35*(1-A/9))))}v.push(C)}for(let A=0;A<9;A++)for(let C=0;C<30;C++)t.addQuad(v[A][C],v[A][C+1],v[A+1][C+1],v[A+1][C])}const l=nn(YM,.8);function u(b,T,v,A,C,_){let L=null;for(let I=0;I<=8;I++){const U=I/8,W=Math.sin(U*Math.PI),z=bt(T,v,U),q=Fi(z,b+_*W,C*W);L&&t.bake(a,Ye(L,q,A*(.65+.5*W)),()=>l),L=q}}for(let b=0;b<30;b++){const T=me+8+r()*(Math.abs(me)-16),v=Math.PI*(.15+r()*.7);u(T,v,v+.5+r()*1.3,.5+r()*.9,.06+r()*.16,(r()-.5)*9)}const h=nn(uh,.55);for(let b=0;b<150;b++){const T=me+5+r()*(Math.abs(me)-10),v=Math.PI*(.18+r()*.64),A=Fi(v,T,.02),C=1.2+r()*(Oe(T)>16?7:3),_=[A[0]+(r()-.5)*.8,A[1]-C,A[2]+(r()-.5)*.8];t.bake(a,Ye(A,_,.09+r()*.1),()=>h)}for(let b=0;b<520;b++){const T=me+3+r()*(Math.abs(me)-5),v=r()*Math.PI*2,A=Fi(v,T,.01),C=.22+r()*.55,_=nn(dh,(.7+r()*.7)*(.5+r()*.5));t.bake(o,c(C,C*.8,C,A),()=>_)}for(let b=0;b<120;b++){const T=me+5+r()*(Math.abs(me)-8),v=Oe(T)*.7,A=(r()-.5)*2*v,C=.3+r()*.9,_=nn(Ba,(.6+r()*.8)*.8);i.bake(o,c(C*1.3,C*.7,C*1.1,[A,re(A,T)+C*.3,T]),()=>_)}function d(b,T,v,A,C,_,S){if(Math.hypot(b-$c[0],T-$c[1])<15)return;const L=si(C,.3,.28,.4),I=S||si(C,.95,.62,1.15);for(let U=0;U<v;U++){const W=b+(r()-.5)*7,z=T+(r()-.5)*7,q=A*(.45+r()*.9),F=re(W,z),$=[W,F+1.7*q,z];t.bake(a,Ye([W,F,z],$,.22*q),()=>L),e.bake(s,c(1.15*q,.8*q,1.15*q,$),()=>I),En.push({x:W,z,r:1.15*q+.5})}Mn([b,re(b,T)+2.4,T],_)}for(let b=0;b<9;b++){const T=-14-b*10.5;d((b%2?1:-1)*(3.5+r()*1.8),T,4+Math.floor(r()*4),1.3,za,ka)}for(let b=0;b<8;b++){const T=r()*Math.PI*2,v=17+r()*9;let A=ee[0]+Math.cos(T)*v;const C=ee[2]+Math.sin(T)*v,_=Oe(C)*.72;Math.abs(A)>_&&(A=Math.sign(A)*_),d(A,C,5+Math.floor(r()*5),1.9,za,ka)}const m=nn(uh,.36),g=si(qM,1.25,1.15,1.4);for(let b=0;b<26;b++){const T=Math.PI*(.2+r()*.6),v=Pl+(r()-.5)*Io*1.5,A=Fi(T,v,.03),C=[A[0],A[1]-(3+r()*11),A[2]];t.bake(a,Ye(A,C,.07),()=>m);const _=.55+r()*.75;e.bake(s,c(_,_*1.25,_,C),()=>g),b%3===0&&Mn(C,JM)}const x=si(hh,.76,.7,.58);for(let b=0;b<5;b++){const T=Math.PI*(.15+b*.42),v=8+r()*5,A=ee[0]+Math.cos(T)*v,C=ee[2]+Math.sin(T)*v;for(let _=0;_<22;_++){const S=A+(r()-.5)*5.5,L=C+(r()-.5)*5.5,I=.5+r()*.35;t.bake(s,c(I*.72,I*.72,I*1.5,[S,re(S,L)+I*.6,L]),()=>x)}Mn([A,re(A,C)+1.5,C],[.55,.42,.22])}if(Mn([ee[0],re(ee[0],ee[2])+9,ee[2]],[1.5,1.05,.5]),n&&n.granary){const b=n.granary;for(let v=0;v<5;v++){const A=(r()-.5)*Math.PI*1.6,C=tt(b.uEnd+(r()-.5)*b.uMax*.5,b.uMax*.42,b.uMax*.96),_=b.pointAt(A,C,.12);for(let S=0;S<26;S++){const L=_[0]+(r()-.5)*4.5,I=_[2]+(r()-.5)*4.5,U=.5+r()*1.3,W=tt(1-Math.hypot(L-_[0],I-_[2])/4.5,0,1),z=nn(ai(ai($M,fh,r()*.4),Qr,W*.5),.55+.35*(1-W));t.bake(o,c(U,U*.85,U,[L,re(L,I)+U*.4,I]),()=>z)}}const T=si(fh,.94,.81,.51);for(let v=0;v<10;v++){const A=(r()-.5)*Math.PI*1.5,C=tt(b.uEnd+(r()-.5)*b.uMax*.55,4,b.uMax-2),_=r()<.5,S=b.pointAt(A,C,_?.85:.06),L=.5+r()*.7,I=_?S[1]-L*(.6+r()*1.6):re(S[0],S[2])+L*.55;t.bake(s,c(L*.8,L*1.3,L*.8,[S[0],I,S[2]]),()=>T)}for(let v=0;v<2;v++){const A=b.pointAt(0,2+r()*4,.3);Mn([A[0],re(A[0],A[2])+2.2,A[2]],[.42,.3,.14])}}if(n&&n.brood){const b=n.brood,T=[.34,.5,.68],v=[1,1.55,1.15],A=si(KM,.42,.4,.46);for(let C=0;C<7;C++){const _=(r()-.5)*Math.PI*1.7,S=tt(b.uEnd+(r()-.5)*b.uMax*.6,b.uMax*.32,b.uMax*.97),L=b.pointAt(_,S,.1),I=re(L[0],L[2]),U=14+Math.floor(r()*14);for(let W=0;W<U;W++){const z=Math.floor(r()*3),q=T[z]+r()*.22,F=L[0]+(r()-.5)*4.6,$=L[2]+(r()-.5)*4.6,nt=(.85+r()*.25)*.85,ot=si(hh,nt,nt*.94,nt*.8);t.bake(s,c(q*.75,q*.75,q*1.5*v[z],[F,re(F,$)+q*.6,$]),()=>ot)}if(C%2===0){const W=4+Math.floor(r()*3);for(let z=0;z<W;z++){const q=r()*Math.PI*2,F=q+1.4+r()*1.2,$=2.2+r()*1.2,nt=[L[0]+Math.cos(q)*$,I+.5+r()*1,L[2]+Math.sin(q)*$],ot=[L[0]+Math.cos(F)*$,I+.5+r()*1,L[2]+Math.sin(F)*$];t.bake(a,Ye(nt,ot,.03),()=>A)}}Mn([L[0],I+1.6,L[2]],[.62,.46,.24])}for(let C=0;C<2;C++){const _=(r()-.5)*Math.PI*1.4,S=tt(b.uEnd+(r()-.5)*b.uMax*.4,4,b.uMax-2),L=b.pointAt(_,S,.1);d(L[0],L[2],2+Math.floor(r()*2),1.1,za,ka)}}if(n&&n.midden){const b=n.midden,T=ai(_o,Qr,.5),v=nn(ai(_o,Qr,.3),3.5),A=[.3,.46,.3];for(let S=0;S<3;S++){const L=(r()-.5)*Math.PI*1.6,I=tt(b.uEnd+(r()-.5)*b.uMax*.5,4,b.uMax-2),U=b.pointAt(L,I,.08);d(U[0],U[2],3+Math.floor(r()*3),1,T,A,v)}for(let S=0;S<4;S++){const L=(r()-.5)*Math.PI*1.7,I=tt(b.uEnd+(r()-.5)*b.uMax*.55,3,b.uMax-1.5),U=b.pointAt(L,I,.1);for(let W=0;W<20;W++){const z=U[0]+(r()-.5)*5,q=U[2]+(r()-.5)*5,F=.4+r()*1.1,$=nn(r()<.5?Ba:dh,(.3+r()*.35)*.55);i.bake(o,c(F*1.2,F*.7,F,[z,re(z,q)+F*.3,q]),()=>$)}}const C=nn(ZM,.5);for(let S=0;S<5;S++){const L=(r()-.5)*Math.PI*1.6,I=tt(b.uEnd+(r()-.5)*b.uMax*.5,3,b.uMax-1.5),U=b.pointAt(L,I,.12),W=re(U[0],U[2]),z=2.2+r()*2.2,q=r()*Math.PI*2;t.bake(a,Ye([U[0],W+.35,U[2]],[U[0]+Math.cos(q)*z,W+.3,U[2]+Math.sin(q)*z],.55+r()*.35),()=>C)}const _=si(jM,.3,.36,.3);for(let S=0;S<6;S++){const L=(r()-.5)*Math.PI*1.6,I=tt(b.uEnd+(r()-.5)*b.uMax*.55,3,b.uMax-1.5),U=b.pointAt(L,I,.05),W=1+r()*1.6;t.bake(s,c(W,.12,W,[U[0],re(U[0],U[2])+.03,U[2]]),()=>_)}}for(let b=0;b<42;b++){const T=-200+r()*380,v=8+r()*250;if(_i(T,v)>0||Zn(T,v)<4)continue;const A=2+r()*6,C=1.5+r()*4,_=2+r()*6,S=Ft(T,v)+C*.35,L=.75+r()*.5,I=r()*40,U=r()<.6?.5+r()*.5:0;i.bake(s,c(A,C,_,[T,S,v]),(W,z,q)=>{const F=nn(Ba,L);if(U<=0)return F;const $=tt((z-S)/C+.15*oe(W*.3+I,q*.3+I),0,1);return ai(F,_o,$*$*U)}),Yn.push({x:T,z:v,r:(A+_)*.5+1})}const p=new Me;p.name="nest-decor";const f=new Bt(t.toBufferGeometry(),new Ke({vertexColors:!0,roughness:.92,metalness:0,side:he}));f.name="nest-decor-matte",p.add(f);const E=new Bt(i.toBufferGeometry(),ps({map:Wv(),strength:1,roughness:.92,side:he}));E.name="nest-decor-stone",E.castShadow=!0,E.receiveShadow=!0,p.add(E);const y=af({map:rf(),strength:.7,emissive:.95,color:7829367,side:he}),M=new Bt(e.toBufferGeometry(),y);return M.name="nest-decor-glow",p.add(M),{group:p,mushrooms:En,rocks:Yn}}const Ha=new Z("#b07226").toArray(),Wr=new Z("#5e3d16").toArray(),ph=new Z("#100c06").toArray(),De=2.4,tS=2.7,eS=2.9;function nS(n,t,e,i,r){const s=Kn(t,n),o=Math.hypot(s[0],s[1],s[2]),a=tt(o,.05,e+i-.02),c=wt(s,1/(o||1)),l=(e*e-i*i+a*a)/(2*a),u=Math.sqrt(Math.max(e*e-l*l,0)),h=r[0]*c[0]+r[1]*c[1]+r[2]*c[2],d=ne(Kn(r,wt(c,h)));return se(se(n,wt(c,l)),wt(d,u))}function mh(n){const t=new pn;return t.setAttribute("position",new ve(n.p,3)),t.setAttribute("normal",new ve(n.n,3)),t.setIndex(n.i),t}function gh(n,t){n.matrix.set(t.x[0],t.y[0],t.z[0],t.p[0],t.x[1],t.y[1],t.z[1],t.p[1],t.x[2],t.y[2],t.z[2],t.p[2],0,0,0,1),n.matrixWorldNeedsUpdate=!0}function iS(){const n=new Me;n.name="queen";const t=[ee[0],re(ee[0],ee[2]),ee[2]],e=Math.PI,i=[Math.sin(e),0,Math.cos(e)],r=[0,1,0],s=ne(je(r,i)),o=Bi(s,r,i,[t[0],t[1]+1.05*De,t[2]]),a=A=>ef(o,wt(A,De)),c=Ar(12,9),l=Vo(8),u=new Te,h=(A,C,_,S)=>Bi(wt(s,C*De),wt(r,_*De),wt(i,S*De),a(A)),d=(A,C,_,S,L)=>u.bake(c,h(A,C,_,S),()=>L),m=(A,C,_,S)=>u.bake(l,Ye(A,C,_),()=>S);d([0,1.5,-1.2],.5,.5,.62,Wr),d([0,1.62,.5],1.06,1.02,1.75,Ha),d([0,1.66,2.7],1.18,1.02,1.12,Ha),d([.76,2.12,3.1],.3,.26,.3,ph),d([-.76,2.12,3.1],.3,.26,.3,ph);for(let A=-1;A<=1;A+=2)m(a([A*.55,1.45,3.5]),a([A*.34,1.2,4.8]),.17*De,Ha);const g=[[.92,1.5,1.7],[-.92,1.5,1.7],[1.02,1.4,.4],[-1.02,1.4,.4],[.92,1.4,-1.15],[-.92,1.4,-1.15]],x=[[4.1,0,3.9],[-4.1,0,3.9],[4.9,0,.3],[-4.9,0,.3],[4.5,0,-3.5],[-4.5,0,-3.5]];for(let A=0;A<6;A++){const C=a(g[A]),_=a(x[A]);_[1]=re(_[0],_[2]);const S=g[A][0]>0?s:wt(s,-1),L=nS(C,_,tS*De,eS*De,ne(se(r,wt(S,.75))));m(C,L,.2*De,Wr),m(L,_,.14*De,Wr),u.bake(c,Bi([.3*De,0,0],[0,.3*De,0],[0,0,.3*De],L),()=>Wr)}const p=new Ke({vertexColors:!0,roughness:.45,metalness:.05}),f=new Bt(u.toBufferGeometry(),p);f.name="queen-body",f.castShadow=!0,n.add(f);const E=mh(c),y=mh(l),M=new Ke({color:new Z().fromArray(Wr),roughness:.45,metalness:.05}),b=[{local:[0,1.5,-5.4],rx:1.34,ry:1.3,rz:1.9},{local:[0,1.55,-3.2],rx:1.6,ry:1.54,rz:2.1}].map(A=>{const C=new Bt(E,M);return C.matrixAutoUpdate=!1,C.castShadow=!0,n.add(C),{mesh:C,...A}}),T=[];for(let A=-1;A<=1;A+=2)for(let C=0;C<2;C++){const _=new Bt(y,M);_.matrixAutoUpdate=!1,n.add(_),T.push({mesh:_,sA:A,seg:C})}function v(A){const C=1+Math.sin(A*.55)*.04;for(const _ of b)gh(_.mesh,h(_.local,_.rx*C,_.ry*C,_.rz));for(const _ of T){const S=Math.sin(A*1.1+(_.sA>0?0:1.3))*.35,L=a([_.sA*.58,2.1,3.2]),I=a([_.sA*(1.4+S*.3),3.3,4.2]),U=a([_.sA*(1.85+S),3.2+S*.4,6.1]);gh(_.mesh,_.seg===0?Ye(L,I,.14*De):Ye(I,U,.11*De))}}return v(0),{group:n,update:v}}const Ol={sunDir:ne([-300,120,195]),sunColor:15251852,sunIntensity:5.4,hemiSky:7241640,hemiGround:4867376,hemiIntensity:1.15,fog:8221832,fogNear:95,fogFar:420,sky:10130344,exposure:1.3},Bl={sunDir:ne([30,45,20]),sunColor:16767370,sunIntensity:2.5,hemiSky:12572917,hemiGround:7236152,hemiIntensity:.85,fog:11520216,fogNear:90,fogFar:420,sky:10274532,exposure:1.15};let ts=0;function _s(){return ts}function xf(n){ts=n<0?0:n>1?1:n}const Rn=[0,1,0];function qo(){const n=Ol.sunDir,t=Bl.sunDir;Rn[0]=n[0]+(t[0]-n[0])*ts,Rn[1]=n[1]+(t[1]-n[1])*ts,Rn[2]=n[2]+(t[2]-n[2])*ts;const e=Math.hypot(Rn[0],Rn[1],Rn[2])||1;return Rn[0]/=e,Rn[1]/=e,Rn[2]/=e,Rn}const rS=56;function _h(n,t,e,i,r,s,o,a){const c=i-n,l=r-t,u=s-e,h=c*a[0]+l*a[1]+u*a[2];if(h<=0)return 0;const d=c*c+l*l+u*u-h*h,m=Math.sqrt(d>0?d:0),g=o*.35+h*.06,x=tt((o+g-m)/g,0,1);return x*x*(3-2*x)}function sS(n,t,e,i){const r=Math.hypot(i[0],i[2]);if(r<1e-4)return 0;const s=i[0]/r,o=i[2]/r,a=Gt.x-n,c=Gt.z-e,l=a*s+c*o;if(l<=0)return 0;const u=Math.abs(a*o-c*s);if(t+i[1]/r*l>Gt.baseY+Gt.h*Ln)return 0;const d=Gt.w*.4+l*.05,m=tt((Gt.w+d-u)/d,0,1);return m*m*(3-2*m)}function oS(n,t,e,i){const r=Math.hypot(i[0],i[2]);if(r<1e-4)return 0;const s=i[0]/r,o=i[2]/r,a=i[1]/r,c=Math.min(170,34/a+14);let l=0;for(let u=2.5;u<c;u*=1.38){const d=Ft(n+s*u,e+o*u)-(t+a*u+.5);if(d<=0)continue;const m=1.2+u*.05,g=tt(d/m,0,1);if(g>l&&(l=g),l>=1)break}return l}function vf(n,t){if(t<Be)return 1;const e=qo(),i=Ft(n,t),r=gs(n,t),s=tt((r[0]*e[0]+r[1]*e[1]+r[2]*e[2])/Math.max(e[1],.001),0,1);let o=oS(n,i,t,e);if(o<1){const a=i+1.2;o=Math.max(o,sS(n,a,t,e));const c=Oi(Ln);o=Math.max(o,_h(n,a,t,c[0],c[1]+14,c[2],rS,e));for(let l=0;l<Yn.length&&o<1;l++){const u=Yn[l],h=u.r*.8;o=Math.max(o,_h(n,a,t,u.x,Ft(u.x,u.z)+h*.45,u.z,h,e))}}return tt(1-s*(1-o),0,1)}const wn=[],Mf=new Map,aS=["graine","brindille","miellat"],cS={graine:4,brindille:3,miellat:5},lS={graine:5,brindille:6,miellat:5},uS=[.88,.66,.32],hS=[.55,.38,.18],dS=[.42,.32,.19],xh=[.24,.18,.1],fS=[.94,.74,.36],pS=[.78,.5,.2],mS=new Z("#4A4438"),zl=(n,t,e)=>[bt(n[0],t[0],e),bt(n[1],t[1],e),bt(n[2],t[2],e)];function gS(n,t,e,i,r){const s=new Te,o=[];for(let a=0;a<=i;a++){const c=a/i,l=[],u=t(c);for(let h=0;h<e;h++){const d=2*Math.PI*h/e;l.push(s.addVertex(Math.cos(d)*u,c*n,Math.sin(d)*u,r(c,d)))}o.push(l)}for(let a=0;a<i;a++)for(let c=0;c<e;c++){const l=(c+1)%e;s.addQuad(o[a][c],o[a][l],o[a+1][l],o[a+1][c])}return s}function _S(){return gS(7,t=>Math.pow(Math.sin(Math.PI*t),.62)*2*(1-.3*t),7,5,(t,e)=>zl(hS,uS,tt(.25+.75*Math.pow(Math.abs(Math.cos(e*.5)),1.5)*(.4+.6*t),0,1))).toBufferGeometry()}function xS(){const n=new Te,t=Vo(5),e=[[0,0,0],[.6,5.5,.4],[2.4,10.6,.2]];for(let i=0;i<2;i++)n.bake(t,Ye(e[i],e[i+1],.62-i*.16),(r,s)=>zl(xh,dS,tt(.55+.25*Math.sin(s*1.7),0,1)));return n.bake(t,Ye([.6,5.5,.4],[-2.6,8.2,-1.1],.33),()=>xh),n.toBufferGeometry()}function vS(){const n=new Te,t=Ar(6,3),e=[[0,.9,0,2.6,1.5,2.2],[2.4,.6,1.1,1.7,1,1.5],[-1.6,.7,1.6,1.9,1.2,1.7]];for(const i of e)n.bake(t,Bi([i[3],0,0],[0,i[4],0],[0,0,i[5]],[i[0],i[1],i[2]]),(r,s)=>zl(pS,fS,tt((s-i[1])/(i[4]*2)+.55,0,1)));return n.toBufferGeometry()}const es=(n,t)=>n>=t?0:Math.pow(1-n/t,1.5);function MS(n,t){if(_i(n,t)>0||Zn(n,t)<10)return 0;let e=.16;return e+=1.05*es(Math.hypot(n-Gt.x,t-Gt.z),78),e+=.85*es(Math.hypot(n-88,t-168),74),e+=.7*es(Math.hypot(n-24,t-128),46),e*tt(1-(Ur(n,t)-.16)/.5,.12,1)}const SS=2;function yS(n,t,e){const i=Math.hypot(n-Gt.x,t-Gt.z)<85,r=e();return i?r<.55?"brindille":r<.85?"miellat":"graine":es(Math.hypot(n-88,t-168),74)+es(Math.hypot(n-24,t-128),46)>.25?r<.6?"graine":r<.85?"miellat":"brindille":r<.5?"graine":r<.8?"brindille":"miellat"}const vh=32;function ES(n=90210){const t=ds(n),e=be;let i=0,r=0,s=1;for(;i<vh&&r++<vh*200;){const o=bt(e.x0+14,e.x1-14,t()),a=bt(e.z0+16,e.z1-14,t());if(t()*SS>MS(o,a))continue;const c=yS(o,a,t),l=3+Math.floor(t()*4);let u=0;for(let h=0;h<l*3&&u<l;h++){const d=t()*Math.PI*2,m=Math.sqrt(t())*12,g=o+Math.cos(d)*m,x=a+Math.sin(d)*m;if(_i(g,x)>0||Zn(g,x)<10||Ur(g,x)>.7)continue;const p=Math.max(1,cS[c]+Math.round((t()-.5)*2)),f={id:s++,x:g,z:x,kind:c,amount:p,r:lS[c],amount0:p,yaw:t()*Math.PI*2,tilt:(t()-.5)*.5,size:.75+t()*.5,_slot:-1};wn.push(f),Mf.set(f.id,f),u++}u&&i++}}const Sf={},Mh=new Jt,Sh=new Lr,yh=new An,Eh=new k,bh=new k,Th=new Z;function yf(n){const t=Sf[n.kind];if(!t||n._slot<0)return;const e=n.amount0>0?n.amount/n.amount0:0,i=n.size*bt(.45,1,Math.pow(e,.6)),r=gs(n.x,n.z);yh.set(n.tilt-Math.atan2(r[2],r[1])*.6,n.yaw,n.tilt+Math.atan2(r[0],r[1])*.6),Sh.setFromEuler(yh),Eh.set(n.x,Ft(n.x,n.z)-.35*i,n.z),bh.set(i,i,i),Mh.compose(Eh,Sh,bh),t.setMatrixAt(n._slot,Mh),Th.set(1,1,1).lerp(mS,(1-e)*.8),t.setColorAt(n._slot,Th),t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0)}function kl(n,t=1){const e=Mf.get(n);if(!e||e.amount<=0||!(t>0))return 0;const i=Math.min(t,e.amount);return e.amount-=i,yf(e),i}function bS(n,t,e=12,i=!1){const r=[];for(const s of wn)!i&&s.amount<=0||Math.hypot(s.x-n,s.z-t)<=e&&r.push(s);return r}function TS(){const n=new Me;n.name="resources",wn.length===0&&ES();const t={graine:_S(),brindille:xS(),miellat:vS()},e=new Ke({vertexColors:!0,roughness:.9,metalness:0}),i=new Ke({vertexColors:!0,roughness:.22,metalness:0});for(const r of aS){const s=wn.filter(c=>c.kind===r),o=Math.max(s.length,1),a=new Al(t[r],r==="miellat"?i:e,o);a.name="resource-"+r,a.castShadow=!0,a.receiveShadow=!0,a.count=s.length,a.instanceColor=new Cn(new Float32Array(o*3).fill(1),3),a.frustumCulled=!1,Sf[r]=a,s.forEach((c,l)=>{c._slot=l,yf(c)}),n.add(a)}return{group:n,nodes:wn}}const ns=4.2,Di=15,Hl=14,Vn=8,wh=.22,mr=1.6,xo=17,wS=18,AS=.62,vo=new Z("#6d5130"),RS=new Z("#5a4226"),Ga=new Z("#332412"),CS=new Z("#e0a752"),PS=new Z("#efdcb0"),LS=new Z("#ffc46a"),Mo=[.55,.62,.82],IS=[1.05,.62,.24],Va=[.85,.55,.22],Wa=[1.95,1.2,.52],el=6;let nl=null,xe=null;const Kr=(n,t,e)=>new Z(n).lerp(t,tt(e,0,1));function DS(n){nl=n}function os(){return xe?{x:xe.x,z:xe.z}:null}function Ef(){return xe}function Gl(n,t){if(xe)return{ok:!1,reason:"already-founded"};if(t<Be)return{ok:!1,reason:"underground"};const e=be;return n<e.x0+xo||n>e.x1-xo||t>e.z1-xo?{ok:!1,reason:"bounds"}:Math.abs(n)<34&&t<34?{ok:!1,reason:"occupied"}:_i(n,t)>0?{ok:!1,reason:"water"}:Zn(n,t)<wS?{ok:!1,reason:"water"}:Ur(n,t)>AS?{ok:!1,reason:"slope"}:Nl(n,t).kind==="rock"?{ok:!1,reason:"rock"}:{ok:!0}}function US(n,t,e){const i=(r,s)=>oe(Math.cos(n)*r+t*s+e+37,Math.sin(n)*r+t*s*.7+e+91);return .84+.2*i(1.6,.1)+.1*i(4.1,.29)+.05*i(9.3,.62)}function NS(n){const t=Di+Vn,e=(n-t)/Vn;return e>-1&&e<1?ns+(Hl-ns)*Math.pow(Math.sqrt(1-e*e),.72):ns}function FS(n,t,e){const i=Ft(n,t),r=(oe(n*.07,t*.07)-.5)*Math.PI*2,s=ne([Math.cos(r)*wh,-1,Math.sin(r)*wh]),o=ne(je(s,[0,0,1])),a=ne(je(s,o)),c=[n,i+mr,t],l=Di+2*Vn,u=i+mr-(Di+Vn*.92),h=22;function d(M,b){const T=US(M,b,e),v=NS(b)*T,A=c[0]+s[0]*b,C=c[1]+s[1]*b,_=c[2]+s[2]*b,S=A+(o[0]*Math.cos(M)+a[0]*Math.sin(M))*v,L=C+(o[1]*Math.cos(M)+a[1]*Math.sin(M))*v,I=_+(o[2]*Math.cos(M)+a[2]*Math.sin(M))*v;return[S,Math.max(L,u),I,T]}const m=new Te,g=[];for(let M=0;M<=l+1e-4;M+=1.5){const b=[];for(let T=0;T<h;T++){const v=2*Math.PI*T/h,A=d(v,M),C=tt((A[3]-.84)/.34+.45,0,1),_=Kr(Ga,RS,C*.8+.1).lerp(vo,.18+C*.14).multiplyScalar(.88);b.push(m.addVertex(A[0],A[1],A[2],_.toArray()))}g.push(b)}for(let M=0;M<g.length-1;M++)for(let b=0;b<h;b++){const T=(b+1)%h;m.addQuad(g[M][b],g[M][T],g[M+1][T],g[M+1][b])}const x=g[g.length-1],p=m.addVertex(c[0]+s[0]*l,u,c[2]+s[2]*l,Kr(Ga,vo,.35).toArray());for(let M=0;M<h;M++)m.addTri(p,x[M],x[(M+1)%h]);const f=8,E=[];for(let M=0;M<=f;M++){const b=M/f,T=bt(ns*1.02,xo,b),v=[];for(let A=0;A<=h;A++){const C=2*Math.PI*(A%h)/h,_=n+Math.cos(C)*T,S=t+Math.sin(C)*T,L=.75+.5*oe(_*.16+e,S*.16+e),I=mr*Math.pow(1-b,1.5)*L+.9*Math.sin(Math.PI*Math.min(1,b*1.35))*L,U=bt(i+mr,Ft(_,S),Math.pow(b,.7))+(b>0?I*.75:0),W=Kr(Kr(vo,Ga,.35+.3*(1-b)),CS,.12).multiplyScalar(.82+.25*L);v.push(m.addVertex(_,U,S,W.toArray()))}E.push(v)}for(let M=0;M<f;M++)for(let b=0;b<h;b++)m.addQuad(E[M][b],E[M][b+1],E[M+1][b+1],E[M+1][b]);const y=c[1]+s[1]*(Di+Vn);return{geometry:m.toBufferGeometry(),mouthY:i,floorY:u,origin:c,dir:s,uMax:l,chamber:{x:c[0]+s[0]*(Di+Vn),y:u,z:c[2]+s[2]*(Di+Vn),ceilY:y+Vn*.55,r:Hl}}}function OS(n,t){const e=ds(t^23505),i=Ar(8,5),r=(g,x,p,f)=>Bi([g,0,0],[0,x,0],[0,0,p],f),s=n.chamber,o=[],a=Yo(new Ke({vertexColors:!0,roughness:.85,metalness:0,side:he}));for(let g=0;g<el;g++){const x=g/el*Math.PI*2+e()*.5,p=s.r*(.28+e()*.34),f=s.x+Math.cos(x)*p,E=s.z+Math.sin(x)*p,y=new Te,M=5+Math.floor(e()*5);for(let v=0;v<M;v++){const A=e()*Math.PI*2,C=Math.sqrt(e())*2.6,_=f+Math.cos(A)*C,S=E+Math.sin(A)*C,L=.75+e()*.45;y.bake(i,r(L*1.25,L*.85,L,[_,s.y+L*.7,S]),(I,U)=>Kr(PS,vo,tt(.55-(U-s.y)*.25,0,1)).toArray())}const b=new Bt(y.toBufferGeometry(),a);b.name="nest-brood-"+g,b.visible=!1,b.castShadow=!1;const T=Mn([f,s.y+2.2,E],[0,0,0]);o.push({mesh:b,lamp:T,on:!1})}const c=new Te,l=s.x+(e()-.5)*6,u=s.z+(e()-.5)*6,h=s.ceilY-3.2;c.bake(i,r(1.5,1.8,1.5,[l,h,u]),()=>LS.toArray());const d=new Bt(c.toBufferGeometry(),af({map:rf(),strength:.7,emissive:.95,color:7829367,side:he}));d.name="nest-glow-bead",d.visible=!1;const m=Mn([l,h,u],[0,0,0]);return{piles:o,bead:{mesh:d,lamp:m,on:!1}}}function bf(n,t){const e=Gl(n,t);if(!e.ok)return e;const i=Math.floor(Math.abs(n)*131+Math.abs(t)*977)%9973,r=FS(n,t,i),s=new Me;s.name="founded-nest";const o=new Bt(r.geometry,Yo(ps({map:nf(),strength:.62,side:he})));o.name="founded-nest-shell",o.receiveShadow=!0,s.add(o);const a=OS(r,i);for(const u of a.piles)s.add(u.mesh);s.add(a.bead.mesh),nl&&nl.add(s);const c=Mn([n,r.mouthY-4,t],Mo),l=Mn([n,r.mouthY+1,t],IS);return xe={x:n,z:t,group:s,mouth:{x:n,y:r.mouthY+mr,z:t,r:ns},chamber:r.chamber,floorY:r.floorY,axis:{origin:r.origin,dir:r.dir,length:r.uMax},brood:0,sealed:!1,_furnishing:a,_coldLight:c,_warmLight:l,_coldFade:1},zM(n,r.mouthY+mr,t,Hl,Di+Vn),{ok:!0}}function Tf(n){if(!xe)return 0;const t=Math.round(tt(n,0,el));xe.brood=t,xe._furnishing.piles.forEach((i,r)=>{const s=r<t;i.mesh.visible=s,i.on=s,i.lamp.c[0]=s?Va[0]:0,i.lamp.c[1]=s?Va[1]:0,i.lamp.c[2]=s?Va[2]:0});const e=xe._furnishing.bead;return e.on=t>=4,e.mesh.visible=e.on,e.lamp.c[0]=e.on?Wa[0]:0,e.lamp.c[1]=e.on?Wa[1]:0,e.lamp.c[2]=e.on?Wa[2]:0,t}function wf(n=!0){xe&&(xe.sealed=n)}function BS(n){if(!xe)return;const t=xe.sealed?0:1,e=Math.min(1,n/3);xe._coldFade+=(t-xe._coldFade)*e*3;const i=tt(xe._coldFade,0,1);xe._coldLight.c[0]=Mo[0]*i,xe._coldLight.c[1]=Mo[1]*i,xe._coldLight.c[2]=Mo[2]*i}function Af(){const n=new Me;n.name="world";const t=nM();for(const d of t.doorLights)Mn(d.p,d.c);const e=QM(t.rooms),i=iS(),r=gM();n.add(r);const s=vM();n.add(s.mesh);const o=SM();n.add(o.group);const a=hf({});n.add(a.mesh);const c=FM();n.add(c.group);const l=TS();n.add(l.group);const u=new Me;u.name="dug",n.add(u),DS(u);function h(d,m,g){a.update(d,m,g),BS(d),i.update(m),s.update(m),g&&(c.update(g),o.update(g,_s()),kM(g.position))}return{group:n,update:h,grassFootprints:a.footprints,grass:a,resources:l.nodes,rooms:t.rooms,doorLights:t.doorLights,mushrooms:e.mushrooms,rocks:e.rocks}}const $o=Object.freeze(Object.defineProperty({__proto__:null,LAWN_BOUNDS:be,MUSHROOMS:En,QUEEN:ee,RESOURCE_NODES:wn,RIG_FOUNDED:Bl,RIG_PROLOGUE:Ol,RIVER:cn,ROCKS:Yn,START:$c,TERRAIN_BOUNDS:Xn,TREE:Gt,TUNNEL_BACK:me,TUNNEL_MOUTH:Be,TUNNEL_R:vr,WATER_Y:di,applyNestShading:Yo,canFoundAt:Gl,containSurface:Zc,containUnderground:Wo,createWorld:Af,daylightAt:HM,distanceToWater:Zn,foundNest:bf,foundedMix:_s,getFoundedNest:Ef,getRoomBranches:Il,getUndergroundRadius:Kv,getWallHoleAt:Ll,groundNormal:gs,groundSlope:Ur,groundY:Ft,harvestNode:kl,mushroomCollideR:_f,nestOrigin:os,nodesNear:bS,pitFactorAt:tl,populateNest:Tf,profileR:Oe,riverEdgeAt:Yi,sampleTerrain:cM,sealNest:wf,setFoundedMix:xf,shadeAt:vf,soilAt:Nl,sunDir:qo,treeTrunkRadius:Vi,treeWalkBranch:In,waterDepthAt:_i},Symbol.toStringTag,{value:"Module"})),zS=[{hip:[.85,1.5,1.5],rest:[3.6,0,3.4],phase:0},{hip:[-.85,1.5,1.5],rest:[-3.6,0,3.4],phase:.5},{hip:[.95,1.4,.3],rest:[4.3,0,.2],phase:.5},{hip:[-.95,1.4,.3],rest:[-4.3,0,.2],phase:0},{hip:[.85,1.4,-1],rest:[4,0,-3.2],phase:0},{hip:[-.85,1.4,-1],rest:[-4,0,-3.2],phase:.5}],kS=[{hip:[.92,1.5,1.7],rest:[4.1,0,3.9],phase:0},{hip:[-.92,1.5,1.7],rest:[-4.1,0,3.9],phase:.5},{hip:[1.02,1.4,.4],rest:[4.9,0,.3],phase:.5},{hip:[-1.02,1.4,.4],rest:[-4.9,0,.3],phase:0},{hip:[.92,1.4,-1.15],rest:[4.5,0,-3.5],phase:0},{hip:[-.92,1.4,-1.15],rest:[-4.5,0,-3.5],phase:.5}],HS={petiole:{at:[0,1.5,-1.25],r:[.42,.42,.42]},thorax:{at:[0,1.6,.35],r:[.95,.92,1.55]},head:{at:[0,1.62,2.55],r:[1.12,.98,1.05]},eye:{at:[.72,2.05,2.95],r:[.3,.26,.3]},gaster:[{at:[0,1.55,-3.1],r:[1.35,1.3,1.95]}],mandible:{root:[.52,1.42,3.35],tip:[.3,1.22,4.55],gape:.22,r:.15},antenna:{root:[.55,2.05,3.05],elbow:[1.35,3.15,4],tip:[1.75,3.05,5.9],r1:.13,r2:.1},legR:{thigh:.19,shin:.13,knee:.24,foot:.17}},GS={petiole:{at:[0,1.5,-1.2],r:[.5,.5,.62]},thorax:{at:[0,1.62,.5],r:[1.06,1.02,1.75]},head:{at:[0,1.66,2.7],r:[1.18,1.02,1.12]},eye:{at:[.76,2.12,3.1],r:[.3,.26,.3]},gaster:[{at:[0,1.55,-3.2],r:[1.6,1.54,2.1]},{at:[0,1.5,-5.4],r:[1.34,1.3,1.9]}],mandible:{root:[.55,1.45,3.5],tip:[.34,1.2,4.8],gape:.2,r:.17},antenna:{root:[.58,2.1,3.2],elbow:[1.4,3.3,4.2],tip:[1.85,3.2,6.1],r1:.14,r2:.11},legR:{thigh:.2,shin:.14,knee:.3,foot:.19}},ur={id:"worker",label:"ouvrière",scale:1,legs:zS,body:HS,breathes:!1,colors:{chitinA:9132580,chitinB:4402453,limb:7029792,mandible:13209663,eye:1051654},maxSpeed:15,sprint:1.75,turnRate:9,legLen:[2.7,2.9],stride:7,climbSpeed:20,bodyR:1.5,cam:{dist:36,min:10,max:85}},VS={id:"queen",label:"reine fondatrice",scale:2.2,legs:kS,body:GS,breathes:!0,colors:{chitinA:11563558,chitinB:6176022,limb:6176022,mandible:11563558,eye:1051654},maxSpeed:12.5,sprint:1.5,turnRate:4.2,legLen:[2.7,2.9],stride:7,climbSpeed:12,bodyR:1.5,cam:{dist:58,min:16,max:140}},sn=VS;function WS(n){return[n.legLen[0]*n.scale,n.legLen[1]*n.scale]}function Vl(n){return n.stride*n.scale}function mi(n){return n.bodyR*n.scale}const Rf=new Z("#393741"),XS=new Z("#241D22"),Ko=new ko({color:Rf.clone(),side:Fe,depthWrite:!1});Ko.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`
    #include <begin_vertex>
    float oDist = -(modelViewMatrix * vec4(position, 1.0)).z;
    transformed += normal * clamp(0.0017 * oDist, 0.06, 0.16);
  `)};Ko.customProgramCacheKey=()=>"inverted-hull";function YS(n){Ko.color.copy(XS).lerp(Rf,n)}function qS(n){const t=new Me;return t.name="outline-hull",n.traverse(e=>{if(!e.isMesh||!e.geometry)return;const i=new Bt(e.geometry,Ko);i.castShadow=!1,i.receiveShadow=!1,i.frustumCulled=!1,t.add(i)}),t.renderOrder=-1,t}const Ne=hf({}).footprints,jo=42,$S=4.5,KS=20,jS=.93;function ZS(n){return $S*(n.scale||1)}function $s(n){const t=n.profile||sn;return(t.climbSpeed!==void 0?t.climbSpeed:KS)*(n.scale||1)}const JS=6,Cf=.05,QS=(()=>{const n=In.point(0),t=In.tipPos;return Math.hypot(t[0]-n[0],t[1]-n[1],t[2]-n[2])})();function ty(n){let t=null,e=ZS(n);for(let r=0;r<Ne.length;r++){const s=Ne[r];if(s.h<jo)continue;const o=Math.hypot(s.x-n.x,s.z-n.z);o<e&&(e=o,t={kind:"grass",i:r})}const i=Math.hypot(Gt.x-n.x,Gt.z-n.z)-Gt.w;return i<JS*(n.scale||1)&&i<e&&(t={kind:"tree"}),t}function ey(n,t){n.climb=t.kind==="tree"?{kind:"tree",seg:"trunk",t:.02}:{kind:"grass",i:t.i,t:.03},n.speed=0}function il(n){let t;if(n.climb.kind==="tree"){const e=Do(Gt,n.climb.t);t=se(pi(Gt,n.climb.t),wt(e.normal,Vi(n.climb.t)))}else t=pi(Ne[n.climb.i],n.climb.t);n.climb=null,n.x=t[0],n.z=t[2],n.y=Ft(t[0],t[2]),n.speed=0}function ny(n,t){if(n.climb){if(n.climb.kind==="grass"){il(n);return}n.climb.seg==="trunk"&&n.climb.t<=Cf&&il(n);return}t&&ey(n,t)}function iy(n,t){return n.climb?n.climb.kind==="tree"?n.climb.seg==="trunk"&&n.climb.t<=Cf?"redescendre du tronc":"reculer pour redescendre":"redescendre du brin":t?t.kind==="tree"?"grimper au tronc":"grimper au brin d'herbe":null}function ry(n,t,e){let i=!1,r=null;if(n.climb.kind==="tree")if(n.climb.seg==="trunk"){n.climb.t=tt(n.climb.t+t*($s(n)/Gt.h)*e,0,In.splitT);const o=Do(Gt,n.climb.t),a=se(pi(Gt,n.climb.t),wt(o.normal,Vi(n.climb.t)));n.x=a[0],n.y=a[1],n.z=a[2],n.climb.t<=5e-4&&t<0?i=!0:n.climb.t>=In.splitT&&t>0&&(r="branch")}else{n.climb.u=tt(n.climb.u+t*($s(n)/QS)*e,0,1);const o=In.basis(n.climb.u),a=se(o.pos,wt(o.up,In.radius(n.climb.u)));n.x=a[0],n.y=a[1],n.z=a[2],n.climb.u<=5e-4&&t<0&&(r="trunk")}else{const o=Ne[n.climb.i];n.climb.t=tt(n.climb.t+t*($s(n)/o.h)*e,0,jS);const a=pi(o,n.climb.t);n.x=a[0],n.y=a[1],n.z=a[2],n.climb.t<=5e-4&&t<0&&(i=!0)}const s=$s(n);n.speed=hi(n.speed,Math.abs(t)*s,7,e),n.travel+=Math.abs(t)*s*e,i?il(n):r==="branch"?(n.climb.seg="branch",n.climb.u=0):r==="trunk"&&(n.climb.seg="trunk",n.climb.t=In.splitT)}function No(n,t,e){return n.floorY===null||n.floorY===void 0?Ft(t,e):n.floorY}function Pf(n,t,e,i=sn){return{x:n,y:t,z:e,yaw:0,speed:0,travel:0,bob:0,floorY:null,climb:null,legsInit:!1,profile:i,scale:i.scale}}function Lf(n=sn){return n.legs.map(()=>({planted:[0,0,0],from:[0,0,0],to:[0,0,0],swinging:!1,prevP:0}))}function sy(n){if(n.climb){if(n.climb.kind==="tree"){if(n.climb.seg==="trunk"){const c=Do(Gt,n.climb.t);return{side:c.width,up:c.normal,fwd:c.tangent}}const a=In.basis(n.climb.u);return{side:a.side,up:a.up,fwd:a.fwd}}const o=Do(Ne[n.climb.i],n.climb.t);return{side:o.width,up:o.normal,fwd:o.tangent}}const t=n.floorY===null||n.floorY===void 0?gs(n.x,n.z):[0,1,0],e=ne([t[0]*.7,1,t[2]*.7]),i=[Math.sin(n.yaw),0,Math.cos(n.yaw)],r=ne(je(e,i)),s=je(r,e);return{side:r,up:e,fwd:s}}function Wl(n){const t=sy(n),e=n.scale||1,i=1.05*e+n.bob,r=n.climb?se([n.x,n.y,n.z],wt(t.up,i)):[n.x,No(n,n.x,n.z)+i,n.z];return{side:wt(t.side,e),up:wt(t.up,e),fwd:wt(t.fwd,e),p:r,basis:t,scale:e}}function vn(n,t){const[e,i,r]=t;return[n.side[0]*e+n.up[0]*i+n.fwd[0]*r+n.p[0],n.side[1]*e+n.up[1]*i+n.fwd[1]*r+n.p[1],n.side[2]*e+n.up[2]*i+n.fwd[2]*r+n.p[2]]}function oy(n,t,e,i,r){const s=Kn(t,n),o=Math.hypot(s[0],s[1],s[2])||1,a=tt(o,.05,e+i-.02),c=wt(s,1/o),l=(e*e-i*i+a*a)/(2*a),u=Math.sqrt(Math.max(e*e-l*l,0)),h=r[0]*c[0]+r[1]*c[1]+r[2]*c[2],d=ne(Kn(r,wt(c,h)));return se(se(n,wt(c,l)),wt(d,u))}function rl(n,t,e){const i=Wl(n),r=i.basis,s=n.profile||sn,o=n.scale||1,a=Vl(s),c=n.travel/a,l=!!n.climb;for(let u=0;u<s.legs.length;u++){const h=s.legs[u],d=t[u],m=vn(i,h.rest);l||(m[1]=No(n,m[0],m[2])),n.legsInit||(d.planted=m.slice(),d.from=m.slice(),d.to=m.slice());let g=(c+h.phase)%1;if(g<0&&(g+=1),g>=.5&&d.prevP<.5){d.swinging=!0,d.from=d.planted.slice();const x=se(m,wt(r.fwd,a*.38*tt(n.speed/(16*o),0,1.4)));l||(x[1]=No(n,x[0],x[2])),d.to=x}if(g<.5&&d.prevP>=.5&&(d.swinging=!1,d.planted=d.to.slice()),d.prevP=g,d.swinging){const x=(g-.5)*2,p=Math.sin(x*Math.PI)*1.5*o;d.planted=[bt(d.from[0],d.to[0],x),bt(d.from[1],d.to[1],x)+p,bt(d.from[2],d.to[2],x)]}n.speed<.4*o&&!d.swinging&&(d.planted[0]=hi(d.planted[0],m[0],4,e),d.planted[1]=hi(d.planted[1],m[1],4,e),d.planted[2]=hi(d.planted[2],m[2],4,e))}n.legsInit=!0}const is=0,ay=1;function Ah(n){const t=n.legs.length;return{sphere:n.body.gaster.length+4+t*2,cyl:6+t*2}}function Ks(n){return[-n[0],n[1],n[2]]}function If(n,t,e,i,r){const s=n.body,o=n.colors,[a,c]=WS(n),l=Wl(t),u=l.basis,h=l.scale,d=(M,b,T,v=1)=>r(is,vn(l,M),wt(u.side,b[0]*h*v),wt(u.up,b[1]*h*v),wt(u.fwd,b[2]*h*v),T),m=(M,b,T,v)=>{const A=Ye(M,b,T);r(ay,A.p,A.x,A.y,A.z,v)},g=n.breathes?1+Math.sin(i*.55)*.04:1;for(let M=0;M<s.gaster.length;M++)d(s.gaster[M].at,s.gaster[M].r,o.chitinB,g);d(s.petiole.at,s.petiole.r,o.chitinB),d(s.thorax.at,s.thorax.r,o.chitinA),d(s.head.at,s.head.r,o.chitinA),d(s.eye.at,s.eye.r,o.eye),d(Ks(s.eye.at),s.eye.r,o.eye);const x=s.mandible,p=x.gape+Math.sin(i*3.1)*.06+Math.max(0,Math.min(t.speed,14))*.012,f=[x.tip[0]+p,x.tip[1],x.tip[2]];m(vn(l,x.root),vn(l,f),x.r*h,o.mandible),m(vn(l,Ks(x.root)),vn(l,Ks(f)),x.r*h,o.mandible);const E=s.antenna;for(const M of[1,-1]){const b=Math.sin(i*2.4+(M>0?0:1.1))*.42,T=Math.cos(i*1.7+(M>0?.4:1.9))*.3,v=S=>M>0?S:Ks(S),A=vn(l,v(E.root)),C=vn(l,v([E.elbow[0]+b*.25,E.elbow[1]+T*.3,E.elbow[2]])),_=vn(l,v([E.tip[0]+b,E.tip[1]+T,E.tip[2]]));m(A,C,E.r1*h,o.limb),m(C,_,E.r2*h,o.limb)}const y=s.legR;for(let M=0;M<n.legs.length;M++){const b=n.legs[M],T=e[M],v=vn(l,b.hip),A=T.planted,C=b.hip[0]>0?u.side:wt(u.side,-1),_=ne([u.up[0]+C[0]*.75,u.up[1]+C[1]*.75,u.up[2]+C[2]*.75]),S=oy(v,A,a,c,_);m(v,S,y.thigh*h,o.limb),m(S,A,y.shin*h,o.limb);const L=y.knee*h,I=y.foot*h;r(is,S,[L,0,0],[0,L,0],[0,0,L],o.limb),r(is,A,[I,0,0],[0,I,0],[0,0,I],o.limb)}}let Xa=null,Rh=null;function Df(){return Xa||(Xa=new Go(1,12,8),Rh=new Rl(1,1,1,7).translate(0,.5,0)),{sphere:Xa,cyl:Rh}}const Ch=new Map;function cy(n){let t=Ch.get(n);return t||(t=new Ke({color:n,roughness:.55,metalness:.05}),Ch.set(n,t)),t}const Ya=new Jt,Ph=new k,Lh=new k,Ih=new k,Dh=new k;function Uf(n,t,e,i){return Ph.set(t[0],t[1],t[2]),Lh.set(e[0],e[1],e[2]),Ih.set(i[0],i[1],i[2]),Ya.makeBasis(Ph,Lh,Ih),Dh.set(n[0],n[1],n[2]),Ya.setPosition(Dh),Ya}function ly(n=sn){const t=Df(),e=new Me;e.name="ant";const i=[];function r(s,o,a){let c=0;If(n,s,o,a,(l,u,h,d,m,g)=>{let x=i[c];x||(x=new Bt(l===is?t.sphere:t.cyl,cy(g)),x.matrixAutoUpdate=!1,x.castShadow=!0,i[c]=x,e.add(x)),x.matrix.copy(Uf(u,h,d,m)),c++})}return{group:e,updatePose:r}}function uy(n,t=sn){const e={},i={camYaw:0,wantPitch:-.19,camDist:t.cam.dist,dragging:!1},r={active:!1,id:-1,ox:0,oy:0,dx:0,dy:0};let s=-1,o=0,a=0,c=!1,l=!1;function u(v){for(let A=0;A<v.length;A++)if(e[v[A]])return!0;return!1}function h(v){e[v.code]=!0,v.code==="KeyE"&&(c=!0),v.code==="KeyH"&&(l=!0),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].indexOf(v.code)>=0&&v.preventDefault()}function d(v){e[v.code]=!1}function m(){for(const v in e)e[v]=!1}function g(v){n.setPointerCapture(v.pointerId),v.pointerType==="touch"&&v.clientX<window.innerWidth*.5?(r.active=!0,r.id=v.pointerId,r.ox=v.clientX,r.oy=v.clientY):(i.dragging=!0,s=v.pointerId,o=v.clientX,a=v.clientY)}function x(v){if(r.active&&v.pointerId===r.id){const A=tt(v.clientX-r.ox,-46,46),C=tt(v.clientY-r.oy,-46,46);r.dx=A/46,r.dy=C/46;return}i.dragging&&v.pointerId===s&&(i.camYaw-=(v.clientX-o)*.006,i.wantPitch=tt(i.wantPitch-(v.clientY-a)*.004,-.85,.55),o=v.clientX,a=v.clientY)}function p(v){r.active&&v.pointerId===r.id&&(r.active=!1,r.dx=0,r.dy=0),v.pointerId===s&&(i.dragging=!1,s=-1)}function f(v){i.camDist=tt(i.camDist+v.deltaY*.03*t.scale,t.cam.min,t.cam.max),v.preventDefault()}window.addEventListener("keydown",h),window.addEventListener("keyup",d),window.addEventListener("blur",m),n.addEventListener("pointerdown",g),n.addEventListener("pointermove",x),n.addEventListener("pointerup",p),n.addEventListener("pointercancel",p),n.addEventListener("wheel",f,{passive:!1});function E(){let v=0,A=0;u(["KeyW","KeyZ","ArrowUp"])&&(A+=1),u(["KeyS","ArrowDown"])&&(A-=1),u(["KeyA","KeyQ","ArrowLeft"])&&(v-=1),u(["KeyD","ArrowRight"])&&(v+=1),r.active&&(v+=r.dx,A-=r.dy);const C=Math.min(Math.hypot(v,A),1),_=!!(e.ShiftLeft||e.ShiftRight);return{ix:v,iy:A,mag:C,sprint:_}}function y(){const v=c;return c=!1,v}function M(){const v=l;return l=!1,v}function b(){return!!e.KeyE}function T(){window.removeEventListener("keydown",h),window.removeEventListener("keyup",d),window.removeEventListener("blur",m),n.removeEventListener("pointerdown",g),n.removeEventListener("pointermove",x),n.removeEventListener("pointerup",p),n.removeEventListener("pointercancel",p),n.removeEventListener("wheel",f)}return{state:i,readMoveIntent:E,consumeInteract:y,consumeHelp:M,isInteractHeld:b,dispose:T}}let qa=null;function Nf(){return qa||(qa=Il()),qa}function Ff(n,t){const e=Nf();for(const i in e){const r=e[i],s=n-r.origin[0],o=t-r.origin[2],a=s*r.dir[0]+o*r.dir[2];if(a<=-.5||a>=r.uMax+1)continue;const c=s*r.side[0]+o*r.side[2],l=r.profR(tt(a,0,r.uMax));if(!(Math.abs(c)>=l*.82+2))return r}return null}function Of(n,t,e){return(t-n.origin[0])*n.dir[0]+(e-n.origin[2])*n.dir[2]}function hy(n){return 2*n.uEnd-n.uMax}function dy(n,t){const e=Ff(n,t);return e?e.profR(tt(Of(e,n,t),0,e.uMax)):Oe(t)}function fy(n,t){let e=t,i=t;const r=Nf();for(const s in r){const o=r[s],a=tt(1-Math.abs(n-o.origin[2])/o.doorFalloff,0,1);if(a<=0)continue;const c=bt(t,Math.abs(o.origin[0])+1.5,a);o.dir[0]>0?c>e&&(e=c):c>i&&(i=c)}return{limPos:e,limNeg:i}}const Bf=.14;function zf(n){const t=n(0),e=n(Math.PI),i=n(Math.PI*.5);return{aPos:Math.max(Math.abs(t[0]),1.5),aNeg:Math.max(Math.abs(e[0]),1.5),cy:t[1],b:Math.max(i[1]-t[1],.8)}}function py(n){return zf(t=>{const e=Fi(t,n,Bf);return[e[0],e[1]]})}function my(n,t){return zf(e=>{const i=n.pointAt(e,t,Bf);return[(i[0]-n.origin[0])*n.side[0]+(i[2]-n.origin[2])*n.side[2],i[1]]})}function Uh(n,t,e){const i=t>=0?n.aPos:n.aNeg,r=Math.min(Math.abs(t)/i,1),s=n.b*Math.max(Math.sqrt(Math.max(0,1-r*r)),.3),o=Math.max(n.cy-s,e+1.6);return{yMin:o,yMax:Math.max(n.cy+s,o+.6)}}function gy(n,t){if(t.br){const u=t.br,h=n[0]-u.origin[0],d=n[2]-u.origin[2],m=h*u.dir[0]+d*u.dir[2],g=h*u.side[0]+d*u.side[2],x=t.uAnt>t.corridorLen?t.corridorLen-1:-.3,p=tt(m,x,u.uMax-.3),f=my(u,tt(p,0,u.uMax)),E=tt(g,-f.aNeg,f.aPos);n[0]=u.origin[0]+u.dir[0]*p+u.side[0]*E,n[2]=u.origin[2]+u.dir[2]*p+u.side[2]*E;const y=Uh(f,E,Ft(n[0],n[2]));return n[1]=tt(n[1],y.yMin,y.yMax),Math.hypot(p-m,E-g)}const e=n[2],i=n[0],r=tt(e,me+5,Be+3);if(r>-14){const u=Oe(r)*.82*(1+Math.pow((r+14)/17,2)*.9),h=tt(i,-u,u);return n[0]=h,n[2]=r,n[1]=Math.max(n[1],Ft(h,r)+2.2),Math.hypot(h-i,r-e)}const s=py(r),{limPos:o,limNeg:a}=fy(r,Math.max(Oe(r)*.82-1.6,3)),c=tt(i,-Math.max(a,s.aNeg),Math.max(o,s.aPos));n[0]=c,n[2]=r;const l=Uh(s,c,Ft(c,r));return n[1]=tt(n[1],l.yMin,l.yMax),Math.hypot(c-i,r-e)}const js=10.5;function _y(n){const t=Ft(ee[0],ee[2]);if(n[1]>t+8.5)return;const e=n[0]-ee[0],i=n[2]-ee[2],r=Math.hypot(e,i);if(!(r>=js)){if(r<.001){n[0]+=js;return}n[0]=ee[0]+e/r*js,n[2]=ee[2]+i/r*js}}function kf(n){const t=Ff(n.x,n.z);if(!t)return{br:null};const e=Of(t,n.x,n.z);return{br:t,uAnt:e,corridorLen:hy(t)}}function Xl(n,t,e){return t.z<Be-2?(_y(n),gy(n,e||kf(t))):(n[1]=Math.max(n[1],Ft(n[0],n[2])+2.2),0)}function Hf(n,t,e,i,r=1){return[n[0]-Math.sin(t)*Math.cos(e)*i,n[1]-Math.sin(e)*i+3.4*r,n[2]-Math.cos(t)*Math.cos(e)*i]}const Nh=8,xy=6,Gf=.9,vy=[0,.25,.5,.8],Fh=-1.25;function My(n,t,e,i,r,s){let o=i,a=1/0;const c=Math.min(xy*(r.scale||1),i);for(let l=0;l<=Nh;l++){const u=bt(i,c,l/Nh),h=Xl(Hf(n,t,e,u,r.scale||1),r,s);if(h<=Gf)return{d:u,err:h};h<a&&(a=h,o=u)}return{d:o,err:a}}function Sy(n,t,e,i,r,s){let o=null;for(const a of vy){const c=Math.max(e-a,Fh),l=My(n,t,c,i,r,s);if(l.err<=Gf)return{pitch:c,d:l.d};if((!o||l.err<o.err)&&(o={pitch:c,d:l.d,err:l.err}),c<=Fh)break}return o}function yy(n,t,e,i){const r=n.scale||1,s=n.climb?[n.x,n.y+2*r,n.z]:[n.x,No(n,n.x,n.z)+2.6*r,n.z],o=n.z<Be-2,a=o?kf(n):null,c=o?dy(n.x,n.z):vr,l=o?Math.min(i,Math.max(13.5*r,c*1.5)):i,u=o?Sy(s,t,e,l,n,a):{pitch:e,d:l},h=Hf(s,t,u.pitch,u.d,r);Xl(h,n,a);const d=[s[0]+Math.sin(n.yaw)*3*r,s[1]+.4*r,s[2]+Math.cos(n.yaw)*3*r];return{eye:h,aim:d}}function Ey(n){const t={eye:null,aim:null};function e(i,r,s,o,a,c){const l=c||yy(i,r,s,o);(!t.eye||c&&c.cut)&&(t.eye=l.eye.slice(),t.aim=l.aim.slice());const u=c?5:6.5;for(let h=0;h<3;h++)t.eye[h]=hi(t.eye[h],l.eye[h],u,a),t.aim[h]=hi(t.aim[h],l.aim[h],u*1.4,a);c||Xl(t.eye,i),n.position.set(t.eye[0],t.eye[1],t.eye[2]),n.lookAt(new k(t.aim[0],t.aim[1],t.aim[2]))}return t.update=e,t}function Yl(n,t,e,i){const r=(t-n+Math.PI*3)%(Math.PI*2)-Math.PI;return n+r*(1-Math.exp(-e*i))}const $a={GRASS:"grass",ROCKS:"rocks",MUSHROOMS:"mushrooms"};let Cr=null,sl="linear";function Vf(n,t="external"){const e={...n||{}};return typeof e.queryDisc!="function"?(Cr=null,sl="linear",!1):(Cr=e,sl=t,!0)}function Wf(){if(Cr)return;const n=typeof globalThis<"u"?globalThis:null;if(!n)return;const t=n.__spatialIndex||n.__spatial||null;t&&Vf(t,"global")}function Ka(n,t,e,i,r,s){if(Wf(),Cr)return Cr.queryDisc(n,t,e,i,s),!0;for(let o=0;o<r.length;o++)s(r[o],o);return!1}function by(){return Wf(),{indexed:!!Cr,source:sl}}function Ty(n){return n.w*.75}const Xf=.01,Oh=pi(Gt,Xf),wy=Vi(Xf)*.88,Yf=mi(sn)*2+.6,Ay=Yf+.2,Ry=14;function Cy(n,t,e,i){for(let r=.3;r<=Ry;r+=.3){const s=n+e*r,o=t+i*r,a=Wo(s,o);if(Math.hypot(a[0]-s,a[1]-o)>.05)return r}return 1/0}const qf=[];for(let n=0;n<8;n++)qf.push([Math.cos(n*Math.PI/4),Math.sin(n*Math.PI/4)]);function Py(n,t,e){let i=0,r=1/0;const s=qf.map(([c,l],u)=>{const h=Cy(n,t,c,l);return h<r&&(r=h,i=u),h});if(r===1/0||r-e>=Ay)return e;const o=Math.max(e,r+.3);return s[(i+4)%8]-o<Yf?0:o}const Ly=1;let ja=null;function Iy(){return ja||(ja=Object.values(Il())),ja}function Dy(n,t){for(const e of Iy()){const i=n-e.origin[0],r=t-e.origin[2],s=i*e.dir[0]+r*e.dir[2];if(s<=-.5||s>=e.uMax+1)continue;const o=i*e.side[0]+r*e.side[2],a=Math.max(e.profR(tt(s,0,e.uMax))*.82-1.2,2.2);if(!(Math.abs(o)>=a+3))return a}return Math.max(Oe(t)*.82-1.6,3)}function Uy(n,t,e,i){return 2*Dy(n,t)>=2*i+2*e+Ly}let Zs=null,Bh=null;function $f(n=mi(sn)){return(!Zs||Zs.length!==En.length||Bh!==n)&&(Bh=n,Zs=En.map(t=>{const e=Py(t.x,t.z,_f(t));return e>0&&Uy(t.x,t.z,e,n)?e:0})),Zs}let Xr=null,zh=-1;function Ny(){if(!Xr||zh!==Ne.length){zh=Ne.length,Xr=[];for(let n=0;n<Ne.length;n++){const t=Ne[n];t.h>=jo&&Xr.push({x:t.x,z:t.z,r:Ty(t)})}Xr.push({x:Oh[0],z:Oh[2],r:wy})}return Xr}let Js=null,kh=-1;function Fy(){const n=$f();if(!Js||kh!==En.length){kh=En.length,Js=[];for(let t=0;t<En.length;t++)n[t]>0&&Js.push({x:En[t].x,z:En[t].z,r:n[t]})}return Js}let Za=null,Hh=-1;function Oy(){return(!Za||Hh!==Yn.length)&&(Hh=Yn.length,Za=Yn.map(n=>({x:n.x,z:n.z,r:n.r}))),Za}function Ja(n){let t=0;for(let e=0;e<n.length;e++)n[e].r>t&&(t=n[e].r);return t}function Kf(n,t,e,i=0){const r=s=>e(s.x,s.z,s.r);if(t<Be+6){const s=Fy();Ka($a.MUSHROOMS,n,t,i+Ja(s),s,r)}if(t>Be-6){const s=Oy(),o=Ny();Ka($a.ROCKS,n,t,i+Ja(s),s,r),Ka($a.GRASS,n,t,i+Ja(o),o,r)}}function By(n,t,e=0){let i=0;return Kf(n,t,(r,s,o)=>{const a=o+e-Math.hypot(n-r,t-s);a>i&&(i=a)},e),i}function Gh(n){const t={x:0,z:0,n:0},e=mi(n.profile||sn);return Kf(n.x,n.z,(i,r,s)=>{const o=s+e,a=n.x-i,c=n.z-r,l=Math.hypot(a,c);if(l>=o||l<.001)return;const u=o-l;t.x+=a/l*u,t.z+=c/l*u,t.n++},e),t}function ol(n,t){const e=Gh(n);if(e.n===0)return;const i=e.x/e.n,r=e.z/e.n;n.x+=i,n.z+=r;const s=Math.hypot(i,r);if(s>5e-4){const a=i/s,l=-(r/s),u=a,h=Math.sin(n.yaw)*l+Math.cos(n.yaw)*u,d=t*.6*(h>=0?1:-1);n.x+=l*d,n.z+=u*d}const o=Gh(n);o.n>0&&(n.x+=o.x/o.n,n.z+=o.z/o.n)}const zy=11;function ky(n,t,e){const i=ne([e[0]-t[0],0,e[2]-t[2]]),r=je(i,[0,1,0]);return{wishX:i[0]*n.iy+r[0]*n.ix,wishZ:i[2]*n.iy+r[2]*n.ix}}function Hy(n,t,e,i){const r=n.profile||sn,s=n.scale||1,o=mi(r),a=r.maxSpeed*(e.sprint?r.sprint:1);e.mag>.02?(n.yaw=Yl(n.yaw,Math.atan2(t.wishX,t.wishZ),r.turnRate,i),n.speed=hi(n.speed,a*e.mag,7,i)):n.speed=hi(n.speed,0,9,i);const c=n.speed*i;if(n.x+=Math.sin(n.yaw)*c,n.z+=Math.cos(n.yaw)*c,n.travel+=c,ol(n,c),n.z<Be){const[l,u]=Wo(n.x,n.z);n.x=l,n.z=u;const h=zy+o,d=n.x-ee[0],m=n.z-ee[2],g=Math.hypot(d,m);if(g<h&&g>.001){const x=d/g,p=m/g;n.x=ee[0]+x*h,n.z=ee[2]+p*h;const f=-p,E=x,y=Math.sin(n.yaw)*f+Math.cos(n.yaw)*E,M=c*.75*(y>=0?1:-1);n.x+=f*M,n.z+=E*M}}else{const l=tt(n.z,be.z0,be.z1);n.x=Math.max(Zc(n.x,l)[0],Zc(n.x-o,l)[0]+o),n.x=Math.min(n.x,be.x1-o*2),n.z=Math.min(n.z,be.z1-o*2)}n.y=Ft(n.x,n.z),n.bob=Math.sin(n.travel*(Math.PI*2/Vl(r))*2)*.13*s*tt(n.speed/(8*s),0,1)}const $e={...$o},Vh={terre:{label:"terre meuble",diggable:!0,quality:.9},argile:{label:"argile",diggable:!0,quality:.72},litiere:{label:"litière de feuilles",diggable:!0,quality:.66},sable:{label:"sable",diggable:!0,quality:.38},roche:{label:"roche",diggable:!1,quality:0},boue:{label:"boue détrempée",diggable:!1,quality:0}},al=32,Qs=9,So=18,to=55,Gy=190,eo=55,cl=14,Vy={soil:.28,slope:.16,water:.2,shade:.18,food:.18},Wy={soil:"terre",moss:"litiere",sand:"sable",rock:"roche",water:"boue",terre:"terre",argile:"argile",litiere:"litiere",sable:"sable",roche:"roche",boue:"boue"};function Xy(n,t){if(typeof $e.soilAt=="function"){const e=$e.soilAt(n,t),i=Wy[typeof e=="string"?e:e&&e.kind],r=Vh[i];if(r)return{...r,kind:i,assumed:!1}}return{...Vh.terre,kind:"terre",assumed:!0}}function Yy(n,t){if(typeof $e.slopeAt=="function")return{deg:$e.slopeAt(n,t),assumed:!1};const e=$e.groundNormal(n,t);return{deg:Math.acos(tt(e[1],-1,1))*180/Math.PI,assumed:!1}}function qy(n,t){return typeof $e.waterDistance=="function"?{d:$e.waterDistance(n,t),assumed:!1}:typeof $e.distanceToWater=="function"?{d:$e.distanceToWater(n,t),assumed:!1}:{d:null,assumed:!0}}function $y(n,t){if(typeof $e.shadeAt=="function")return{v:tt($e.shadeAt(n,t),0,1),assumed:!1};const e=$e.TREE,i=e?tt(1-Math.hypot(n-e.x,t-e.z)/90,0,1):0;let r=0;for(let s=0;s<Ne.length;s++){const o=Ne[s];o.h<jo||Math.abs(o.x-n)>26||Math.abs(o.z-t)>26||Math.hypot(o.x-n,o.z-t)<26&&r++}return{v:tt(i*.8+Math.min(r,8)/8*.5,0,1),assumed:!0}}function Ky(n,t){const e=$e.RESOURCE_NODES;if(Array.isArray(e)){let r=0;for(const s of e)Math.hypot(s.x-n,s.z-t)<eo&&r++;return{n:r,assumed:!1}}let i=0;for(let r=0;r<Ne.length;r++){const s=Ne[r];s.h<jo||Math.abs(s.x-n)>eo||Math.abs(s.z-t)>eo||Math.hypot(s.x-n,s.z-t)<eo&&i++}return{n:i,assumed:!0}}function jy(n){if(n>=al)return 0;const t=n<=Qs?.78+.22*(n/Qs):1-Math.pow((n-Qs)/(al-Qs),1.4);return tt(t,0,1)}function Zy(n){return n===null?.5:n<=So?0:n<=to?tt((n-So)/(to-So),0,1):tt(1-(n-to)/(Gy-to),.15,1)}const Jy=[{min:78,key:"excellent",label:"excellent"},{min:60,key:"bon",label:"bon"},{min:42,key:"moyen",label:"moyen"},{min:0,key:"ingrat",label:"ingrat"}];function Qy(n){return Jy.find(t=>n>=t.min)}function t1(n){return n>.66?"à l'ombre":n>.3?"mi-ombre":"plein soleil"}function e1(n){return n>=cl?"ressources abondantes":n>=cl*.4?"quelques ressources":"peu de ressources"}function yo(n,t){const e=Xy(n,t),i=Yy(n,t),r=qy(n,t),s=$y(n,t),o=Ky(n,t),a=[{key:"soil",label:e.label,value:e.quality,assumed:e.assumed},{key:"slope",label:`pente ${i.deg.toFixed(0)}°`,value:jy(i.deg),assumed:i.assumed},{key:"water",label:r.d===null?"eau inconnue":`eau à ${r.d.toFixed(0)}`,value:Zy(r.d),assumed:r.assumed},{key:"shade",label:t1(s.v),value:tt(s.v*1.25,0,1),assumed:s.assumed},{key:"food",label:e1(o.n),value:tt(o.n/cl,0,1),assumed:o.assumed}];let c=null;t<$e.TUNNEL_MOUTH?c={key:"underground",text:"sous terre — rien à fonder ici"}:e.diggable?r.d!==null&&r.d<=So?c={key:"water",text:"trop près de l'eau — la galerie serait inondée"}:i.deg>=al&&(c={key:"slope",text:`pente ${i.deg.toFixed(0)}° — le sol s'effondrerait`}):c={key:"soil",text:`${e.label} — impossible de creuser`};let l=0;for(const h of a)l+=h.value*Vy[h.key];const u=Math.round(tt(l,0,1)*100);return{x:n,z:t,diggable:!c,blocker:c,score:u,grade:Qy(u),factors:a,assumed:a.some(h=>h.assumed)}}function n1(n){return n.diggable?`Site : ${n.grade.label} (${n.score}/100)`:`Site : impossible — ${n.blocker.text}`}function Wh(n){return n.factors.slice().sort((t,e)=>t.value-e.value).map(t=>t.assumed?`${t.label} ?`:t.label).join(" · ")}const Fo={...$o},hr={graine:"graine",brindille:"brindille",miellat:"miellat"},i1={graine:["graine","graines"],brindille:["brindille","brindilles"],miellat:["dose de miellat","doses de miellat"]};function r1(n,t){const e=i1[n]||[n,n];return`${t} ${t>1?e[1]:e[0]}`}const s1=[{x:60,z:110,kind:"graine",amount:3},{x:95,z:105,kind:"brindille",amount:3},{x:55,z:120,kind:"miellat",amount:2},{x:100,z:125,kind:"graine",amount:2},{x:45,z:115,kind:"brindille",amount:2},{x:85,z:135,kind:"miellat",amount:2},{x:110,z:110,kind:"graine",amount:2},{x:65,z:135,kind:"brindille",amount:2},{x:40,z:128,kind:"graine",amount:2}].map((n,t)=>({id:9e3+t,r:10,...n}));let jf=!1;function xs(){return Array.isArray(Fo.RESOURCE_NODES)?Fo.RESOURCE_NODES:(jf=!0,s1)}function Zf(){return xs(),jf}function o1(n,t){if(!n)return 0;if(typeof Fo.harvestNode=="function")return Fo.harvestNode(n.id,t)||0;const e=Math.max(0,Math.min(t,n.amount));return n.amount-=e,e}function a1(n,t,e=0){const i=xs();let r=null,s=1/0;for(let o=0;o<i.length;o++){const a=i[o];if(a.amount<=0)continue;const c=Math.hypot(a.x-n,a.z-t);c<=a.r+e*.6&&c<s&&(s=c,r=a)}return r}const Xh=1.8,Jf=16,Gn=5,c1=.5;function l1(){const n={carrying:null,cache:null,progress:0,activeId:null,justTook:null,justDropped:null};function t(){n.progress=0,n.activeId=null}function e(g,x){if(n.activeId!==null){const p=xs();for(let f=0;f<p.length;f++){const E=p[f];if(E.id===n.activeId){if(E.amount>0&&Math.hypot(E.x-g.x,E.z-g.z)<=E.r+x*.6)return E;break}}}return a1(g.x,g.z,x)}function i(g,x){if(n.carrying)return"full";if(!g)return r(x),"idle";if(n.activeId!==g.id&&(n.activeId=g.id,n.progress=0),n.progress+=x/Xh,n.progress<1)return"progress";const p=o1(g,1);return t(),p<=0?"empty":(n.carrying={kind:g.kind},n.justTook={kind:g.kind,qty:p,node:g},"taken")}function r(g){if(n.progress<=0){n.activeId=null;return}n.progress=Math.max(0,n.progress-g*c1/Xh),n.progress===0&&(n.activeId=null)}function s(g){return n.cache?Math.hypot(n.cache.x-g.x,n.cache.z-g.z):1/0}function o(g){return n.carrying?!n.cache||s(g)<=Jf:!1}function a(g){if(!o(g))return!1;n.cache||(n.cache={x:g.x,y:Ft(g.x,g.z),z:g.z,items:{},total:0});const x=n.carrying.kind;return n.cache.items[x]=(n.cache.items[x]||0)+1,n.cache.total+=1,n.carrying=null,n.justDropped={kind:x,cache:n.cache},!0}function c(g){if(!n.cache)return 0;let x=g,p=0;for(;x>0;){const f=Object.entries(n.cache.items).filter(([,E])=>E>0).sort((E,y)=>y[1]-E[1])[0];if(!f)break;n.cache.items[f[0]]-=1,n.cache.total-=1,x-=1,p+=1}return p}function l(){n.justTook=null,n.justDropped=null}function u(){return n.cache?n.cache.total:0}function h(){return u()>=Gn}function d(){return!n.cache||n.cache.total===0?null:Object.entries(n.cache.items).filter(([,g])=>g>0).map(([g,x])=>r1(g,x)).join(" · ")}function m(){const g=n.carrying?`Porte : ${hr[n.carrying.kind]}`:"Porte : rien",x=d();return`${g} · Réserve : ${u()}/${Gn}${x?` (${x})`:""}`}return{state:n,target:e,hold:i,release:r,canDrop:o,drop:a,cacheDistance:s,spend:c,stock:u,enough:h,stockDetail:d,inventoryLine:m,endFrame:l}}const Wi={...$o},Yh=4,u1={rock:"la roche ne se creuse pas",soil:"ce sol ne se creuse pas",water:"trop près de l'eau — la galerie serait inondée",slope:"la pente s'effondrerait",underground:"on ne fonde pas dans une galerie déjà creusée",bounds:"le bord du monde — il faut revenir vers le pré",occupied:"une galerie passe déjà sous ce sol","already-founded":"la colonie est déjà fondée"};function ll(n){return n?u1[n]||`impossible de creuser ici (${n})`:"impossible de creuser ici"}let ul=null,Qf=!1;function Qa(){return typeof Wi.foundNest!="function"||Qf}function Mr(){if(typeof Wi.nestOrigin=="function"){const n=Wi.nestOrigin();if(n)return n}return ul}function Eo(){return!!Mr()}function ql(n,t){if(Eo())return{ok:!1,reason:"already-founded"};if(typeof Wi.canFoundAt=="function"){const i=Wi.canFoundAt(n,t)||{};return{ok:!!i.ok,reason:i.reason,assumed:!1}}const e=yo(n,t);return e.diggable?{ok:!0,assumed:!0}:{ok:!1,reason:e.blocker.key,assumed:!0}}function tp(n,t){const e=ql(n,t);if(!e.ok)return e;if(typeof Wi.foundNest=="function"){const i=Wi.foundNest(n,t)||{};return i.ok&&(ul={x:n,z:t}),{ok:!!i.ok,reason:i.reason,assumed:!1}}return Qf=!0,ul={x:n,z:t},{ok:!0,assumed:!0}}function qh(n,t,e,i){const r=e-n,s=i-t;if(Math.hypot(r,s)<1)return"ici";const o=s>8?"nord":s<-8?"sud":"",a=r>8?"est":r<-8?"ouest":"";return o&&a?`au ${o}-${a}`:a?`à l'${a}`:`au ${o}`}const Ve={...$o},$h=[{k:"descend",s:3.2},{k:"dark",s:2.6},{k:"lay",s:3.4},{k:"rest",s:2.6},{k:"ascend",s:3.2}],Kh=6,jh=6,Zh=8,h1=5.2,d1=1.8,f1=5.5,Jh=26,p1=15,Qh=(n,t,e)=>[bt(n[0],t[0],e),bt(n[1],t[1],e),bt(n[2],t[2],e)],no=n=>n*n*(3-2*n);function m1(n){const t=n._furnishing&&n._furnishing.piles&&n._furnishing.piles[0],e=t&&t.lamp&&t.lamp.p;return e?[e[0],e[2]]:[n.chamber.x,n.chamber.z]}function g1(){const n={phase:null,i:0,t:0,brood:0,mixT:null,justEnded:!1,justLaid:!1};let t=null,e=null,i=null,r=null,s=null,o=null,a=0,c=null,l=null,u=0,h=!1;function d(){return n.phase!==null}function m(v){if(d())return!1;const A=typeof Ve.getFoundedNest=="function"?Ve.getFoundedNest():null;if(!A||!A.chamber)return!1;t=A,i=[t.mouth.x,t.mouth.y,t.mouth.z],e={x:v.x,y:v.y,z:v.z,yaw:v.yaw};const C=t.chamber;o=m1(t);let _=C.x-o[0],S=C.z-o[1];const L=Math.hypot(_,S);L<.5?(_=0,S=1):(_/=L,S/=L);const I=Math.min(f1,L);r=[o[0]+_*I,t.floorY,o[1]+S*I],a=Math.atan2(_,S),u=Math.atan2(-_,-S);let U=i[0]-C.x,W=i[2]-C.z;const z=Math.hypot(U,W);return z<.01?(U=0,W=1):(U/=z,W/=z),s=[i[0]+U*21,0,i[2]+W*21],s[1]=Ve.groundY(s[0],s[2]),c=[i[0]-Math.sin(e.yaw)*Jh,i[1]+p1,i[2]-Math.cos(e.yaw)*Jh],l=[i[0],i[1]+1,i[2]],n.phase="descend",n.i=0,n.t=0,n.justEnded=!1,h=!1,!0}function g(v,A,C){if(A<.34){const I=no(A/.34);v.x=bt(e.x,i[0],I),v.z=bt(e.z,i[2],I),v.y=bt(e.y,i[1],I),v.speed=6,v.travel+=6*C,v.yaw=e.yaw,v.floorY=v.y;return}const S=no((A-.34)/(1-.34)),L=Qh([i[0],i[1],i[2]],r,S);v.x=L[0],v.y=L[1],v.z=L[2],v.floorY=v.y,v.speed=0,v.yaw=bt(e.yaw,u,S)}function x(v){v.x=r[0],v.y=r[1],v.z=r[2],v.floorY=t.floorY,v.yaw=u,v.speed=0}function p(v,A,C){if(A<.66){const L=no(A/.66),I=Qh(r,[i[0],i[1],i[2]],L);v.x=I[0],v.y=I[1],v.z=I[2],v.floorY=v.y,v.yaw=bt(u,Math.atan2(s[0]-i[0],s[2]-i[2]),L),v.speed=0;return}const S=no((A-.66)/(1-.66));v.x=bt(i[0],s[0],S),v.z=bt(i[2],s[2],S),v.y=bt(i[1],s[1],S),v.floorY=v.y,v.speed=7,v.travel+=7*C}function f(v){if(!d())return null;const A=h;if(h=!1,!(n.phase==="dark"||n.phase==="lay"||n.phase==="rest"||n.phase==="ascend"&&n.t<.45))return{eye:c,aim:n.phase==="ascend"?[v.x,v.y+3,v.z]:l,cut:A};const _=t.chamber;return{eye:[_.x+Math.sin(a)*Zh,t.floorY+h1,_.z+Math.cos(a)*Zh],aim:[(v.x+o[0])*.5,t.floorY+d1,(v.z+o[1])*.5],cut:A}}function E(v,A){if(n.justEnded=!1,n.justLaid=!1,n.mixT!==null&&typeof Ve.setFoundedMix=="function"&&(n.mixT+=A,Ve.setFoundedMix(tt(n.mixT/Kh,0,1)),n.mixT>=Kh&&(n.mixT=null)),!d())return null;const C=$h[n.i];switch(n.t=tt(n.t+A/C.s,0,1),C.k){case"descend":g(v,n.t,A);break;case"ascend":p(v,n.t,A);break;default:x(v);break}if(n.t>=1){n.i++,n.t=0;const _=$h[n.i];n.phase=_?_.k:null,_?y(_.k):(v.floorY=null,v.y=Ve.groundY(v.x,v.z),v.speed=0,n.justEnded=!0,t=null)}return n.phase}function y(v){if(v==="dark"){typeof Ve.sealNest=="function"&&Ve.sealNest(!0),h=!0;return}if(v==="lay"){n.brood=Math.min(n.brood+1,jh),typeof Ve.populateNest=="function"&&Ve.populateNest(n.brood),n.justLaid=!0,n.mixT===null&&typeof Ve.foundedMix=="function"&&Ve.foundedMix()<1&&(n.mixT=0);return}v==="ascend"&&(typeof Ve.sealNest=="function"&&Ve.sealNest(!1),h=!0)}const M={descend:"Elle descend dans la chambre.",dark:"Elle referme l'entrée derrière elle.",rest:"Le couvain éclaire la chambre.",ascend:"Elle remonte au jour."};function b(){return d()?n.phase==="lay"?n.brood===1?"Première ponte.":"Elle pond.":M[n.phase]||null:null}function T(){return n.justLaid?n.brood===1?"Première ponte — la colonie existe.":`Ponte : ${n.brood}ᵉ couvée.`:null}return{state:n,begin:m,update:E,shot:f,promptText:b,eventText:T,active:d,brood:()=>n.brood,canLayMore:()=>n.brood<jh}}const _1={harvest:!0,found:!0,lay:!0},td=2.2,x1=15;function v1({profile:n=sn}={}){const t=l1(),e=mi(n),i=g1();let r=0,s=0,o=null,a=0;function c(M){const b=Mr();return b?Math.hypot(b.x-M.x,b.z-M.z):1/0}function l(M){return Eo()&&!Qa()&&i.canLayMore()&&t.stock()>=Gn&&c(M)<=x1}function u(M,b=3.2){o=M,a=b}function h(M){if(i.active())return{kind:"sequence"};if(M.climb)return{kind:"climb",climbTarget:null};if(t.state.carrying){const A=t.state.carrying.kind;if(t.canDrop(M))return{kind:"drop",label:t.state.cache?"ajouter au dépôt":"poser ici — ce sera le dépôt"};const C=t.cacheDistance(M),_=t.state.cache;return{kind:"return",label:`rapporter ${hr[A]} au dépôt (${C.toFixed(0)} u ${qh(M.x,M.z,_.x,_.z)})`}}if(t.state.cache&&!Eo()&&t.enough()&&t.cacheDistance(M)<=Jf){const A=ql(M.x,M.z);return{kind:"found",ok:A.ok,reason:A.reason,assumed:A.assumed}}if(l(M))return{kind:"lay"};const T=t.target(M,e);if(T)return{kind:"harvest",node:T};const v=ty(M);return v?{kind:"climb",climbTarget:v}:{kind:"none"}}function d(M,b,T,v){i.update(M,v);const A=i.eventText();A&&u(A,6);const C=h(M);switch(a>0&&(a-=v,a<=0&&(o=null)),(C.kind!=="harvest"||!T)&&t.release(v),(C.kind!=="found"||!T||!C.ok)&&(r=Math.max(0,r-v/Yh)),(C.kind!=="lay"||!T)&&(s=Math.max(0,s-v/td)),C.kind){case"harvest":{if(T){const _=t.hold(C.node,v);_==="taken"?u(`elle emporte ${hr[t.state.carrying.kind]}`):_==="empty"&&u("plus rien à prendre ici")}break}case"found":{if(T&&C.ok&&(r+=v/Yh,r>=1)){r=0;const _=tp(M.x,M.z);u(_.ok?Qa()?"Colonie fondée ici. (le monde ne creuse pas encore la chambre)":"Colonie fondée ici.":`impossible : ${ll(_.reason)}`,6),_.ok&&(t.spend(Gn),i.begin(M))}break}case"lay":{T&&(s+=v/td,s>=1&&(s=0,i.begin(M)&&t.spend(Gn)));break}case"drop":if(b){const _=t.state.carrying.kind;t.drop(M)&&u(t.stock()===1?`dépôt ouvert ici — ${hr[_]} posée`:`${hr[_]} ajoutée au dépôt (${t.stock()}/${Gn})`)}break;case"climb":b&&ny(M,C.climbTarget);break}return C}function m(M){return`${Math.round(M*100)}%`}function g(M,b){if(b.kind==="sequence")return i.promptText();if(b.kind==="lay")return s>0?`Ponte… ${m(s)}`:`E (maintenir) — descendre pondre (${Gn} unités du dépôt)`;if(b.kind==="climb")return iy(M,b.climbTarget);if(b.kind==="return")return b.label;if(b.kind==="drop")return`E — ${b.label}`;if(b.kind==="harvest"){const T=b.node;return t.state.progress>0?`Récolte… ${m(t.state.progress)}`:`E (maintenir) — récolter ${hr[T.kind]}`}return b.kind==="found"?b.ok?r>0?`Creusement… ${m(r)}`:"E (maintenir) — fonder la colonie ici":`Fonder ici : ${ll(b.reason)}`:null}function x(M){if(i.active())return"La fondation : elle descend pondre.";if(Eo()){const v=Mr(),A=Math.hypot(v.x-M.x,v.z-M.z),C=A<12?"ici":`à ${A.toFixed(0)} u ${qh(M.x,M.z,v.x,v.z)}`,_=Qa()?" [chambre non creusée]":"",S=i.brood();if(S===0)return`Colonie fondée ${C}. Objectif : descendre pondre.${_}`;if(!i.canLayMore())return`${S} couvées — la chambre est pleine. Suite : les ouvrières.${_}`;const L=Gn-t.stock();return L>0?`${S} couvée${S>1?"s":""}. Objectif : ${L} unité${L>1?"s":""} de plus pour la suivante.${_}`:`${S} couvée${S>1?"s":""}. Objectif : rentrer pondre — le nid est ${C}.${_}`}const b=Gn-t.stock();if(t.state.carrying)return t.state.cache?`Objectif : rapporter au dépôt — encore ${b} pour fonder`:"Objectif : poser ce fardeau — le premier dépôt fixe le site de la colonie";if(t.enough())return"Objectif : fonder la colonie sur le dépôt";const T=Zf()?" [nœuds provisoires]":"";return`Objectif : récolter ${b} unité${b>1?"s":""} de plus${T}`}function p(){return t.inventoryLine()}function f(){return o}function E(M){return M.kind==="harvest"&&t.state.progress>0?t.state.progress:M.kind==="found"&&r>0?r:M.kind==="lay"&&s>0?s:null}function y(M,b){switch(b.kind){case"harvest":return{x:b.node.x,z:b.node.z,radius:Math.max(b.node.r,6),blocked:!1};case"found":{const T=t.state.cache;return T?{x:T.x,z:T.z,radius:11,blocked:!b.ok}:null}case"drop":{const T=t.state.cache;return{x:T?T.x:M.x,z:T?T.z:M.z,radius:T?11:7,blocked:!1}}case"return":{const T=t.state.cache;return T?{x:T.x,z:T.z,radius:11,blocked:!1}:null}case"lay":{const T=Mr();return T?{x:T.x,z:T.z,radius:9,blocked:!1}:null}case"climb":{const T=b.climbTarget;if(!T)return null;if(T.kind==="tree")return{x:Gt.x,z:Gt.z,radius:Gt.w+5,blocked:!1};const v=Ne[T.i];return v?{x:v.x,z:v.z,radius:5,blocked:!1}:null}default:return null}}return{harvest:t,laying:i,update:d,resolve:h,promptText:g,objectiveText:x,inventoryText:p,message:f,holdProgress:E,targetMark:y,busy:()=>i.active(),shot:M=>i.shot(M),isHold:M=>!!_1[M.kind],endFrame:()=>t.endFrame()}}const Oo={graine:{r:[.95,.78,1.3],color:14270852,emissive:0},brindille:{r:[2.9,.26,.26],color:8016424,emissive:0},miellat:{r:[.9,.88,.9],color:15247420,emissive:3810309}},M1=2,S1=12;let tc=null;function y1(){return tc||(tc=new Go(1,10,7)),tc}const ed=new Map;function ep(n){let t=ed.get(n);if(!t){const e=Oo[n];t=new Ke({color:e.color,emissive:e.emissive,roughness:.7,metalness:.02}),ed.set(n,t)}return t}const ec=new Jt,nd=new k,id=new k,rd=new k,sd=new k;function np(n,t,e,i,r){nd.set(e[0],e[1],e[2]),id.set(i[0],i[1],i[2]),rd.set(r[0],r[1],r[2]),ec.makeBasis(nd,id,rd),sd.set(t[0],t[1],t[2]),ec.setPosition(sd),n.matrix.copy(ec)}function nc(n){const t=new Bt(y1(),ep(n));return t.matrixAutoUpdate=!1,t.castShadow=!0,t.visible=!1,t}function od(n,t,e,i,r,s=0){const o=Oo[t].r.map(l=>l*M1),a=Math.cos(r),c=Math.sin(r);np(n,[e,Ft(e,i)+o[1]*.9+s,i],[a*o[0],0,c*o[0]],[0,o[1],0],[-c*o[2],0,a*o[2]]),n.visible=!0}function E1({scene:n,profile:t=sn}){const e=new Me;e.name="gameplay-props",n.add(e);const i={};for(const m of Object.keys(Oo))i[m]=nc(m),e.add(i[m]);const r=[];for(let m=0;m<S1;m++){const g=nc("graine");r.push(g),e.add(g)}let s=-1;const o=Zf(),a=[];if(o)for(const m of xs()){const g=[];for(let x=0;x<3;x++){const p=nc(m.kind);e.add(p),g.push(p)}a.push({node:m,clutch:g,drawn:-1})}function c(){for(const m of a){const g=m.node,x=Math.max(0,Math.min(m.clutch.length,g.amount));if(x!==m.drawn){m.drawn=x;for(let p=0;p<m.clutch.length;p++)if(p<x){const f=p/m.clutch.length*Math.PI*2+g.id;od(m.clutch[p],g.kind,g.x+Math.cos(f)*3.2,g.z+Math.sin(f)*3.2,f)}else m.clutch[p].visible=!1}}}function l(m){if(!m||m.total===s)return;s=m.total;let g=0;for(const[x,p]of Object.entries(m.items))for(let f=0;f<p&&g<r.length;f++,g++){const E=g*2.399,y=1.6+g*1.15,M=r[g];M.material=ep(x),od(M,x,m.x+Math.cos(E)*y,m.z+Math.sin(E)*y,E*1.7)}for(;g<r.length;g++)r[g].visible=!1}function u(m,g){for(const T of Object.keys(i))i[T].visible=!1;if(!g)return;const x=i[g.kind];if(!x)return;const p=Wl(m),f=p.basis,E=p.scale,y=(m.profile||t).body.mandible,M=[0,y.tip[1]-.15,y.tip[2]+.55],b=Oo[g.kind].r;np(x,vn(p,M),wt(f.side,b[0]*E),wt(f.up,b[1]*E),wt(f.fwd,b[2]*E)),x.visible=!0}function h(m,g){u(m,g.carrying),l(g.cache),o&&c()}function d(){n.remove(e)}return{group:e,update:h,dispose:d,provisional:o}}const b1="position:fixed;color:#e6d3ab;font:13px/1.5 monospace;pointer-events:none;text-shadow:0 1px 3px rgba(0,0,0,0.9);z-index:5;";function oi(n,t){const e=document.createElement("div");return e.id=n,e.style.cssText=b1+t,document.body.appendChild(e),e}function T1(){return{setSite(){},setPrompt(){},setObjective(){},setStock(){},setEvent(){},setHold(){},toggleControls(){},closeControls(){},dispose(){}}}const w1=[["ZQSD / WASD","se déplacer"],["Maj","courir"],["Souris (glisser)","tourner la caméra"],["Molette","reculer / rapprocher la vue"],["E","action — appui court, ou maintenu quand la barre apparaît"],["H","afficher / masquer cette aide"]];function A1(){if(typeof document>"u")return T1();const n=oi("event","left:12px;bottom:142px;color:#cfe0a8;"),t=oi("prompt","left:12px;bottom:122px;font-size:14px;color:#ffe6b0;"),e=oi("objective","left:12px;bottom:88px;color:#f0dfb8;"),i=oi("stock","left:12px;bottom:70px;opacity:0.85;"),r=oi("siteinfo","left:12px;bottom:52px;"),s=oi("sitedetail","left:12px;bottom:34px;opacity:0.62;font-size:12px;"),o=oi("hold","left:12px;bottom:112px;width:190px;height:5px;background:rgba(0,0,0,0.45);border-radius:3px;overflow:hidden;"),a=document.createElement("div");a.style.cssText="height:100%;width:0%;background:#ffc46a;border-radius:3px;",o.appendChild(a),o.style.display="none";const c=oi("controls","right:12px;top:12px;padding:10px 14px;background:rgba(12,10,8,0.62);border-radius:5px;line-height:1.8;");c.innerHTML='<div style="opacity:0.75;margin-bottom:4px">Commandes</div>'+w1.map(([f,E])=>`<div><span style="color:#ffe6b0">${f}</span><span style="opacity:0.72"> — ${E}</span></div>`).join("");let l=!0,u=null,h=null,d=null,m=null,g=null,x=null;const p=(f,E,y)=>E===y?y:(f.textContent=E||"",E);return{setSite(f,E,y){f!==u&&(r.textContent=f,r.style.color=y?"#e6d3ab":"#d98b6a",u=f),E!==h&&(s.textContent=E,h=E)},setPrompt(f){d=p(t,f,d)},setObjective(f){m=p(e,f,m)},setStock(f){g=p(i,f,g)},setEvent(f){x=p(n,f,x)},setHold(f){const E=f!==null&&f>.001;E!==(o.style.display==="block")&&(o.style.display=E?"block":"none"),E&&(a.style.width=`${Math.min(100,f*100)}%`)},toggleControls(){l=!l,c.style.display=l?"block":"none"},closeControls(){l&&(l=!1,c.style.display="none")},dispose(){for(const f of[e,i,r,s,t,n,o,c])f.parentNode&&f.parentNode.removeChild(f)}}}const ad=new Z("#FFB03A").multiplyScalar(1.5),R1=new Z("#E8663A").multiplyScalar(1.4),cd=.72,C1=.2,P1=`
uniform vec3 uColor;
uniform float uTime;
uniform float uOpacity;
varying vec2 vMarkerUv;

void main() {
  vec2 p = vMarkerUv * 2.0 - 1.0;
  float r = length(p);
  if (r > 1.0) discard;

  // the soft band: fades to nothing on both sides, so there is no edge
  float band = 1.0 - smoothstep(0.0, ${C1.toFixed(2)}, abs(r - ${cd.toFixed(2)}));
  band = pow(band, 1.6);

  // a bright arc sweeping around it, so the ring reads as alive without
  // changing size — three lobes, because one reads as a bug and many read
  // as a texture
  float a = atan(p.y, p.x);
  float sweep = 0.55 + 0.45 * sin(a * 3.0 - uTime * 1.9);

  // a faint wash inside the band, which is what stops the middle of a large
  // ring from looking empty on open ground
  float fill = (1.0 - smoothstep(0.0, ${cd.toFixed(2)}, r)) * 0.14;

  float alpha = (band * sweep + fill) * uOpacity;
  gl_FragColor = vec4(uColor * (0.75 + 0.55 * band), alpha);
}
`;function L1(n){const t={uColor:{value:ad.clone()},uTime:{value:0},uOpacity:{value:1}},e=new $n({uniforms:t,vertexShader:`
      varying vec2 vMarkerUv;
      void main() {
        vMarkerUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:P1,transparent:!0,blending:ac,depthTest:!1,depthWrite:!1,side:he}),i=new Bt(new hs(2,2),e);return i.rotation.x=-Math.PI/2,i.name="target-marker",i.renderOrder=900,i.frustumCulled=!1,i.visible=!1,n.add(i),{show(r,s,o,a){if(!r){i.visible=!1;return}i.visible=!0,i.position.set(r.x,Ft(r.x,r.z)+.35,r.z),i.scale.setScalar(s),t.uTime.value=a,t.uColor.value.copy(o?R1:ad),t.uOpacity.value=o?.95:.8+.2*Math.sin(a*3.4)},dispose(){n.remove(i),i.geometry.dispose(),e.dispose()}}}const I1=22,ld=1,D1=6,U1=.6,N1=11;let ud=1;function F1(n,t){let e=null,i=1/0;for(let r=0;r<wn.length;r++){const s=wn[r];if(s.amount<=0)continue;const o=Math.hypot(s.x-n,s.z-t);o<i&&(i=o,e=s)}return e}function O1(){const n={eggs:[],workers:[],delivered:0};function t(a,c){const l=Pf(a,0,c,ur);return l.y=Ft(a,c),l.yaw=Math.random()*Math.PI*2,{id:ud++,profileId:"worker",profile:ur,ant:l,legState:Lf(ur),carrying:null,targetId:null,repath:0}}function e(a){for(let c=0;c<a;c++)n.eggs.push({id:ud++,age:0})}function i(a,c){const l=a.ant,u=os();a.repath-=c;let h=null;if(a.carrying)h=u;else{if(a.repath<=0||a.targetId===null){const p=F1(l.x,l.z);a.targetId=p?p.id:null,a.repath=U1}const x=a.targetId!==null?wn.find(p=>p.id===a.targetId):null;h=x&&x.amount>0?x:null,h||(a.targetId=null)}if(!h){l.speed=0,rl(l,a.legState,c);return}const d=h.x-l.x,m=h.z-l.z;if(Math.hypot(d,m)<=D1)l.speed=0,a.carrying?(n.delivered+=ld,a.carrying=null):(kl(a.targetId,ld)>0&&(a.carrying=h.kind),a.targetId=null);else{l.yaw=Yl(l.yaw,Math.atan2(d,m),6,c);const x=Math.cos(l.yaw-Math.atan2(d,m));l.speed=N1*Math.max(.25,x);const p=l.speed*c;l.x+=Math.sin(l.yaw)*p,l.z+=Math.cos(l.yaw)*p,l.travel+=p}l.y=Ft(l.x,l.z),l.bob=Math.sin(l.travel*(Math.PI*2/Vl(ur))*2)*.13*Math.min(1,l.speed/8),rl(l,a.legState,c)}function r(a){const c=os();if(c){for(let l=n.eggs.length-1;l>=0;l--){const u=n.eggs[l];if(u.age+=a,u.age>=I1){n.eggs.splice(l,1);const h=Math.random()*Math.PI*2;n.workers.push(t(c.x+Math.cos(h)*9,c.z+Math.sin(h)*9))}}for(const l of n.workers)i(l,a)}}function s(){if(!n.workers.length&&!n.eggs.length)return null;const a=[];return n.workers.length&&a.push(`${n.workers.length} ouvrière${n.workers.length>1?"s":""}`),n.eggs.length&&a.push(`${n.eggs.length} œuf${n.eggs.length>1?"s":""}`),n.delivered&&a.push(`${n.delivered} rapporté${n.delivered>1?"s":""}`),`Colonie : ${a.join(" · ")}`}function o(){return{delivered:n.delivered,eggs:n.eggs.map(a=>({id:a.id,age:a.age})),workers:n.workers.map(a=>({id:a.id,profileId:a.profileId,carrying:a.carrying,x:a.ant.x,z:a.ant.z,yaw:a.ant.yaw}))}}return{state:n,addEggs:e,update:r,statusText:s,serialise:o,collideRadius:()=>mi(ur)}}const ic=64,rc=new Z,lr=new Jt().makeScale(0,0,0);function B1(n,t){const e=Df(),i=Ah(t),r=new Ke({color:16777215,roughness:.55,metalness:.05,vertexColors:!1});function s(l,u){const h=new Al(l,r,u);return h.instanceMatrix.setUsage($p),h.setColorAt(0,rc.set(16777215)),h.castShadow=!0,h.receiveShadow=!0,h.frustumCulled=!1,h.count=0,h}const o=s(e.sphere,ic*i.sphere),a=s(e.cyl,ic*i.cyl);o.name="crowd-spheres",a.name="crowd-cyls",n.add(o,a);for(let l=0;l<o.instanceMatrix.count;l++)o.setMatrixAt(l,lr);for(let l=0;l<a.instanceMatrix.count;l++)a.setMatrixAt(l,lr);let c=0;return{render(l,u){const h=Math.min(l.length,ic);for(let d=0;d<h;d++){const m=l[d];Ah(m.profile);let g=d*i.sphere,x=d*i.cyl;If(m.profile,m.ant,m.legState,u,(p,f,E,y,M,b)=>{const T=Uf(f,E,y,M);p===is?(o.setMatrixAt(g,T),o.setColorAt(g,rc.set(b)),g++):(a.setMatrixAt(x,T),a.setColorAt(x,rc.set(b)),x++)});for(let p=g;p<(d+1)*i.sphere;p++)o.setMatrixAt(p,lr);for(let p=x;p<(d+1)*i.cyl;p++)a.setMatrixAt(p,lr)}for(let d=h;d<c;d++){for(let m=d*i.sphere;m<(d+1)*i.sphere;m++)o.setMatrixAt(m,lr);for(let m=d*i.cyl;m<(d+1)*i.cyl;m++)a.setMatrixAt(m,lr)}c=h,o.count=Math.max(h,0)*i.sphere,a.count=Math.max(h,0)*i.cyl,o.instanceMatrix.needsUpdate=!0,a.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0),a.instanceColor&&(a.instanceColor.needsUpdate=!0)},dispose(){n.remove(o,a),o.dispose(),a.dispose(),r.dispose()}}}const hd=[140,170],dd=-Math.PI/2,z1=.25,k1=3;function H1({scene:n,camera:t,domElement:e,profile:i=sn}){const r=Pf(hd[0],0,hd[1],i);r.yaw=dd,r.y=Ft(r.x,r.z),ol(r,0),ol(r,0),r.y=Ft(r.x,r.z);const s=Lf(i),{group:o,updatePose:a}=ly(i);n.add(o),n.add(qS(o));const c=uy(e,i);c.state.camYaw=dd;const l=Ey(t),u=A1(),h=L1(n),d=O1(),m=B1(n,ur),g=v1({profile:i}),x=E1({scene:n,profile:i});l.update(r,c.state.camYaw,c.state.wantPitch,c.state.camDist,0);let p=0,f=null,E=null,y=null;function M(v){p-=v;const A=f?Math.hypot(r.x-f[0],r.z-f[1]):1/0;if((E||y)&&p>0&&A<k1)return;p=z1,f=[r.x,r.z];const C=Mr();if(C){y||(y=yo(C.x,C.z)),u.setSite(`Nid fondé — site ${y.grade.label} (${y.score}/100)`,Wh(y),!0);return}E=yo(r.x,r.z),u.setSite(n1(E),Wh(E),E.diggable)}function b(v,A){const C=c.readMoveIntent();c.consumeHelp()&&u.toggleControls();const _=g.update(r,c.consumeInteract(),c.isInteractHeld(),v);if(!g.busy())if(r.climb)ry(r,tt(C.iy,-1,1),v);else{const I=ky(C,l.eye,l.aim);Hy(r,I,C,v)}rl(r,s,v),a(r,s,A),o.position.set(0,0,0),Zr.position.set(r.x,r.y,r.z),Zr.radius=mi(i),x.update(r,g.harvest.state),g.laying.state.justLaid&&d.addEggs(3),d.update(v),m.render(d.state.workers,A),M(v),u.setPrompt(g.promptText(r,_)),u.setObjective(g.objectiveText(r));const S=d.statusText();u.setStock(S?`${g.inventoryText()}  |  ${S}`:g.inventoryText()),u.setEvent(g.message()),u.setHold(g.holdProgress(_));const L=g.targetMark(r,_);h.show(L,L?L.radius:0,L?L.blocked:!1,A),g.harvest.state.carrying&&u.closeControls(),g.endFrame(),!c.state.dragging&&!r.climb&&!g.busy()&&C.mag>.02&&(c.state.camYaw=Yl(c.state.camYaw,r.yaw,2.2,v)),g.laying.state.justEnded&&(c.state.camYaw=r.yaw),l.update(r,c.state.camYaw,c.state.wantPitch,c.state.camDist,v,g.shot(r))}typeof window<"u"&&(window.__decorPenetration=By,window.__antRadius=mi(i),window.__site=(v,A)=>yo(v,A),window.__avatar=i,window.__mushroomRadii=$f,window.__grass=Ne,window.__nodes=xs,window.__harvest=()=>g.harvest.state,window.__nestOrigin=Mr,window.__colony=()=>d,window.__foundNest=(v,A)=>tp(v,A),window.__canFound=(v,A)=>{const C=ql(v,A);return{...C,text:ll(C.reason)}},window.__toWater=Zn,window.__laying=()=>{const v=g.laying.state;return{phase:v.phase,t:+v.t.toFixed(3),brood:v.brood,mix:_s()}});function T(){c.dispose(),u.dispose(),h.dispose(),m.dispose(),x.dispose()}return{ant:r,group:o,update:b,dispose:T}}const zi={resolution:[{label:"50 %",value:.5},{label:"75 %",value:.75},{label:"100 %",value:1},{label:"150 % (net)",value:1.5}],shadows:[{label:"aucune",value:0},{label:"basses (1024)",value:1024},{label:"normales (2048)",value:2048}],grass:[{label:"clairsemée",value:.35},{label:"moyenne",value:.65},{label:"dense",value:1}]},ip="myrmidia.quality";function G1(){const n={resolution:2,shadows:2,grass:2,textures:!0};try{const t=localStorage.getItem(ip);return t?{...n,...JSON.parse(t)}:n}catch{return n}}function V1(){try{localStorage.setItem(ip,JSON.stringify(We))}catch{}}const We=G1(),W1=[];function X1(){for(const n of W1)n(bo())}function bo(){return{resolution:zi.resolution[We.resolution].value,shadowMap:zi.shadows[We.shadows].value,grassFraction:zi.grass[We.grass].value,textures:We.textures}}function sc(n){We[n]=(We[n]+1)%zi[n].length}function Y1({renderer:n,sun:t,scene:e}){const i=Math.min(window.devicePixelRatio||1,2);function r(){n.setPixelRatio(i*bo().resolution),n.setSize(window.innerWidth,window.innerHeight)}function s(){const y=bo().shadowMap;n.shadowMap.enabled=y>0,y>0&&(t.shadow.mapSize.set(y,y),t.shadow.map?.dispose(),t.shadow.map=null),n.shadowMap.needsUpdate=!0}function o(){const y=We.textures;e.traverse(M=>{const b=Array.isArray(M.material)?M.material:M.material?[M.material]:[];for(const T of b){if(y)T.userData.savedMap!==void 0&&(T.map=T.userData.savedMap,T.userData.savedMap=void 0);else if(T.map)T.userData.savedMap=T.map,T.map=null;else continue;T.needsUpdate=!0}})}let a=null,c=0;function l(){if(!a){if(e.traverse(y=>{y.name==="grass"&&(a=y)}),!a)return;c=a.count}a.count=Math.max(1,Math.round(c*bo().grassFraction))}if(r(),s(),typeof document>"u")return{update(){},toggle(){},dispose(){}};const u=document.createElement("div");u.id="quality",u.style.cssText="position:fixed;right:12px;bottom:12px;padding:9px 12px;background:rgba(12,10,8,0.68);border-radius:5px;color:#e6d3ab;font:12px/1.7 monospace;pointer-events:none;z-index:6;text-shadow:0 1px 3px rgba(0,0,0,0.9);display:none;",document.body.appendChild(u);const h=document.createElement("div");h.id="fps",h.style.cssText="position:fixed;right:12px;bottom:12px;padding:4px 8px;background:rgba(12,10,8,0.55);border-radius:4px;color:#cfe0a8;font:12px/1.4 monospace;pointer-events:none;z-index:6;text-shadow:0 1px 3px rgba(0,0,0,0.9);",document.body.appendChild(h);let d=!1;function m(){const y=[["1","Résolution",zi.resolution[We.resolution].label],["2","Ombres",zi.shadows[We.shadows].label],["3","Herbe",zi.grass[We.grass].label+" (au prochain chargement)"],["4","Textures",We.textures?"oui":"non"]];u.innerHTML='<div style="opacity:0.75;margin-bottom:3px">Graphismes — P pour fermer</div>'+y.map(([M,b,T])=>`<div><span style="color:#ffe6b0">${M}</span><span style="opacity:0.7"> ${b} : </span><span style="color:#cfe0a8">${T}</span></div>`).join("")}m();let g=0,x=0,p=0;function f(y){E.key(y.code)&&y.preventDefault()}window.addEventListener("keydown",f),l(),o();const E={update(y){if(g++,x+=y,x>=.5){p=Math.round(g/x),g=0,x=0;const M=n.getContext();h.textContent=d?`${p} i/s · ${M.drawingBufferWidth}x${M.drawingBufferHeight} · ${n.info.render.calls} appels`:`${p} i/s · P : graphismes`}},key(y){if(y==="KeyP")return d=!d,u.style.display=d?"block":"none",h.style.bottom=d?"104px":"12px",!0;if(!d)return!1;if(y==="Digit1")sc("resolution"),r();else if(y==="Digit2")sc("shadows"),s();else if(y==="Digit3")sc("grass"),l();else if(y==="Digit4")We.textures=!We.textures,o();else return!1;return m(),V1(),X1(),!0},dispose(){window.removeEventListener("keydown",f),u.remove(),h.remove()}};return E}const q1=16,$1={x0:-400,x1:600,z0:-300,z1:700};let hl=null,dl=0,fl=0;function K1(n,t){t<dl&&(dl=t,hl=n)}function j1(){fl++}class Z1{constructor(t={}){this.reset(t)}reset({x0:t,x1:e,z0:i,z1:r,cell:s=q1,pad:o=64}={}){const a=t===void 0?$1:{x0:t,x1:e,z0:i,z1:r};this.cell=s,this.inv=1/s,this.x0=a.x0-o,this.z0=a.z0-o,this.cols=Math.max(1,Math.ceil((a.x1+o-this.x0)*this.inv)),this.rows=Math.max(1,Math.ceil((a.z1+o-this.z0)*this.inv)),this.cells=new Array(this.cols*this.rows).fill(null),this.cellR=new Float32Array(this.cols*this.rows),this.maxR=0,this.n=0}_cellOf(t,e){let i=Math.floor((t-this.x0)*this.inv),r=Math.floor((e-this.z0)*this.inv);return i<0?i=0:i>=this.cols&&(i=this.cols-1),r<0?r=0:r>=this.rows&&(r=this.rows-1),r*this.cols+i}_place(t){const e=this._cellOf(t.x,t.z);let i=this.cells[e];i||(i=[],this.cells[e]=i),t._c=e,t._i=i.length,i.push(t),t.r>this.cellR[e]&&(this.cellR[e]=t.r),t.r>this.maxR&&(this.maxR=t.r)}_unplace(t){const e=this.cells[t._c],i=e.pop();i!==t&&(e[t._i]=i,i._i=t._i),t._c=-1}add(t,e,i,r=0,s=null){const o={type:t,x:e,z:i,r,data:s,_c:-1,_i:-1};return this._place(o),this.n++,o}move(t,e,i){const r=this._cellOf(e,i);return t.x=e,t.z=i,r===t._c||(this._unplace(t),this._place(t)),t}setRadius(t,e){return t.r=e,e>this.cellR[t._c]&&(this.cellR[t._c]=e),e>this.maxR&&(this.maxR=e),t}remove(t){t._c<0||(this._unplace(t),this.n--)}get size(){return this.n}stats(){let t=0,e=0;for(const i of this.cells)i&&i.length&&(t++,i.length>e&&(e=i.length));return{cell:this.cell,cells:this.cells.length,entries:this.n,occupied:t,fill:t?this.n/t:0,most:e,maxR:this.maxR}}_scan(t,e,i,r,s){const o=r&&r.type,a=r&&r.where,c=!!(r&&r.reach),l=i+(c?this.maxR:0),u=this.cell;let h=Math.floor((t-l-this.x0)*this.inv),d=Math.floor((t+l-this.x0)*this.inv),m=Math.floor((e-l-this.z0)*this.inv),g=Math.floor((e+l-this.z0)*this.inv);h<0&&(h=0),d>=this.cols&&(d=this.cols-1),m<0&&(m=0),g>=this.rows&&(g=this.rows-1);for(let x=m;x<=g;x++){const p=this.z0+x*u,f=e<p?p-e:e>p+u?e-p-u:0,E=x*this.cols;for(let y=h;y<=d;y++){const M=E+y,b=this.cells[M];if(!(b===null||b.length===0)){if(c){const T=this.x0+y*u,v=t<T?T-t:t>T+u?t-T-u:0,A=i+this.cellR[M];if(v*v+f*f>A*A)continue}for(let T=0;T<b.length;T++){const v=b[T];if(o!==void 0&&v.type!==o)continue;const A=v.x-t,C=v.z-e,_=A*A+C*C,S=c?i+v.r:i;_>S*S||a!==void 0&&!a(v)||s(v,_)}}}}}forEachNear(t,e,i,r,s){this._scan(t,e,i,s,r)}nearest(t,e,i,r){return hl=null,dl=1/0,this._scan(t,e,i,r,K1),hl}countNear(t,e,i,r){return fl=0,this._scan(t,e,i,r,j1),fl}}const dr=new Z1,J1={queryDisc(n,t,e,i,r){dr.forEachNear(t,e,i,r,{type:n,reach:!0})}};function Q1({grassFootprints:n,mushrooms:t,rocks:e,bounds:i}){if(dr.reset(i),n)for(let r=0;r<n.length;r++){const s=n[r];dr.add("grass",s.x,s.z,s.w,s)}if(t)for(const r of t)dr.add("mushrooms",r.x,r.z,r.r||0,r);if(e)for(const r of e)dr.add("rocks",r.x,r.z,r.r||0,r);return dr.stats()}const tE=document.getElementById("app"),xi=Ev(tE),rn=bv(),Pe=new uv;Pe.background=new Z(1709584);Pe.fog=new wl(1709584,40,220);const To=new _v(12572917,7236152,.85);Pe.add(To);const oc={sky:new Z(4873350),ground:new Z(2367283),intensity:.55},dn=Ol,Dn=Bl,fd=new Z,pd=new Z,md=new Z,gd=new Z,Yr={sky:new Z(dn.hemiSky),ground:new Z(dn.hemiGround),fog:new Z(dn.fog),bg:new Z(dn.sky),sun:new Z(dn.sunColor)},qr={sky:new Z(Dn.hemiSky),ground:new Z(Dn.hemiGround),fog:new Z(Dn.fog),bg:new Z(Dn.sky),sun:new Z(Dn.sunColor)},Ie=new Mv(dn.sunColor,dn.sunIntensity);Ie.castShadow=!0;const vs=110,pl=2048,wo=220,io=2*vs/pl;Ie.shadow.mapSize.set(pl,pl);Ie.shadow.camera.left=-vs;Ie.shadow.camera.right=vs;Ie.shadow.camera.top=vs;Ie.shadow.camera.bottom=-vs;Ie.shadow.camera.near=1;Ie.shadow.camera.far=wo*2.4;Ie.shadow.bias=-.0015;Pe.add(Ie);Pe.add(Ie.target);function eE(n){const t=Math.round(n.position.x/io)*io,e=Math.round(n.position.z/io)*io,i=qo();Ie.target.position.set(t,0,e),Ie.position.set(t+i[0]*wo,i[1]*wo,e+i[2]*wo)}const nE=new Z(1645102),iE=new Z(789270),Nr=Af();Pe.add(Nr.group);const $l=H1({scene:Pe,camera:rn,domElement:xi.domElement});Pe.traverse(n=>{const t=Array.isArray(n.material)?n.material:n.material?[n.material]:[];for(const e of t)e.isMeshStandardMaterial&&Yo(e)});window.__renderer=xi;window.__ant=$l.ant;window.__rooms=Nr.rooms;window.__camera=rn;window.__scene=Pe;window.__nodes=wn;window.__world=Nr;window.__contain=Wo;window.__profileR=Oe;window.__groundY=Ft;window.__tree=Gt;window.__world6={shadeAt:vf,canFoundAt:Gl,foundNest:bf,nestOrigin:os,getFoundedNest:Ef,populateNest:Tf,sealNest:wf,harvestNode:kl,get nodes(){return wn},foundedMix:_s,sunDir:qo,waterDepthAt:_i,distanceToWater:Zn};xi.setResizeCallback(n=>{rn.aspect=n,rn.updateProjectionMatrix()});const _d=new Sv;function rp(){const n=Math.min(_d.getDelta(),.05),t=_d.elapsedTime;Nr.update(n,t,rn),$l.update(n,t),sp(),xi.render(Pe,rn),hE.update(n)}const rE=52,sE=26;function xd(n,t,e){const i=1-tt((e+24)/40,0,1),r=tt(1-(Math.abs(n)-rE)/30,0,1),s=tt(1-(t-sE)/30,0,1);return i*r*s}function oE(n,t){const e=Math.min(xd(n.x,n.y,n.z),xd(t.x,t.y,t.z)),i=Math.min(tl(n.x,n.y,n.z),tl(t.x,t.y,t.z));return Math.max(e,i)}const aE=6;let ro=null;function cE(){const n=performance.now()/1e3;ro===null&&os()&&(ro=n),ro!==null&&xf(tt((n-ro)/aE,0,1))}function sp(){cE();const n=_s();fd.copy(Yr.sky).lerp(qr.sky,n),pd.copy(Yr.ground).lerp(qr.ground,n),md.copy(Yr.fog).lerp(qr.fog,n),gd.copy(Yr.bg).lerp(qr.bg,n),Ie.color.copy(Yr.sun).lerp(qr.sun,n),Ie.intensity=bt(dn.sunIntensity,Dn.sunIntensity,n);const t=1-oE(rn.position,$l.ant);Pe.fog.color.copy(nE).lerp(md,t),Pe.fog.near=bt(6,bt(dn.fogNear,Dn.fogNear,n),t),Pe.fog.far=bt(135,bt(dn.fogFar,Dn.fogFar,n),t),Pe.background.copy(iE).lerp(gd,t),xi.toneMappingExposure=bt(1.28,bt(dn.exposure,Dn.exposure,n),t),To.color.copy(oc.sky).lerp(fd,t),To.groundColor.copy(oc.ground).lerp(pd,t),To.intensity=bt(oc.intensity,bt(dn.hemiIntensity,Dn.hemiIntensity,n),t),YS(t),eE(rn)}const lE=Q1({grassFootprints:Nr.grassFootprints,mushrooms:En,rocks:Yn,bounds:{x0:Xn.x0,x1:Xn.x1,z0:Xn.z0,z1:Xn.z1}}),uE=typeof location<"u"&&/[?&]nospatial=1/.test(location.search);uE||Vf(J1,"world");window.__spatial=()=>({...by(),...lE});const hE=Y1({renderer:xi,sun:Ie,scene:Pe});xi.setAnimationLoop(rp);window.__frame=rp;window.__renderView=(n,t,e=0)=>{rn.position.set(n[0],n[1],n[2]),rn.lookAt(t[0],t[1],t[2]),rn.updateMatrixWorld(),Nr.update(1/60,e,rn),sp(),xi.render(Pe,rn)};
