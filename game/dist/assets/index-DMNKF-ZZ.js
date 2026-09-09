(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jl="169",Xy={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Yy={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Mg=0,ld=1,bg=2,qy=3,$y=0,Yd=1,qd=2,ni=3,Ii=0,Ke=1,ge=2,Ci=0,zs=1,il=2,ud=3,hd=4,Sg=5,Qi=100,wg=101,Ag=102,Eg=103,Tg=104,Cg=200,Rg=201,Pg=202,Ig=203,sl=204,rl=205,Lg=206,Dg=207,Ng=208,Ug=209,Og=210,Fg=211,zg=212,Bg=213,kg=214,ol=0,al=1,cl=2,Ws=3,ll=4,ul=5,hl=6,dl=7,la=0,Hg=1,Vg=2,Ri=0,Gg=1,Wg=2,Xg=3,$d=4,Yg=5,qg=6,$g=7,dd="attached",Zg="detached",Ql=300,Li=301,ns=302,Ho=303,Vo=304,Zr=306,Br=1e3,kn=1001,Go=1002,He=1003,Zd=1004,Zy=1004,Rr=1005,Ky=1005,Le=1006,So=1007,Jy=1007,oi=1008,Qy=1008,hi=1009,Kd=1010,Jd=1011,kr=1012,jl=1013,Di=1014,Mn=1015,Kr=1016,tu=1017,eu=1018,Xs=1020,Qd=35902,jd=1021,tf=1022,rn=1023,ef=1024,nf=1025,Bs=1026,Ys=1027,nu=1028,ua=1029,sf=1030,iu=1031,jy=1032,su=1033,wo=33776,Ao=33777,Eo=33778,To=33779,fl=35840,pl=35841,ml=35842,gl=35843,xl=36196,_l=37492,yl=37496,vl=37808,Ml=37809,bl=37810,Sl=37811,wl=37812,Al=37813,El=37814,Tl=37815,Cl=37816,Rl=37817,Pl=37818,Il=37819,Ll=37820,Dl=37821,Co=36492,Nl=36494,Ul=36495,rf=36283,Ol=36284,Fl=36285,zl=36286,Kg=2200,Jg=2201,Qg=2202,Wo=2300,Bl=2301,Bc=2302,Is=2400,Ls=2401,Xo=2402,ru=2500,of=2501,tv=0,ev=1,nv=2,jg=3200,af=3201,iv=3202,sv=3203,os=0,tx=1,wi="",mn="srgb",Fi="srgb-linear",ou="display-p3",ha="display-p3-linear",Yo="linear",pe="srgb",qo="rec709",$o="p3",rv=0,Ss=7680,ov=7681,av=7682,cv=7683,lv=34055,uv=34056,hv=5386,dv=512,fv=513,pv=514,mv=515,gv=516,xv=517,_v=518,fd=519,ex=512,nx=513,ix=514,cf=515,sx=516,rx=517,ox=518,ax=519,Zo=35044,cx=35048,yv=35040,vv=35045,Mv=35049,bv=35041,Sv=35046,wv=35050,Av=35042,Ev="100",pd="300 es",ai=2e3,Ko=2001;class di{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pp=1234567;const ks=Math.PI/180,Hr=180/Math.PI;function Dn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function we(i,t,e){return Math.max(t,Math.min(e,i))}function lf(i,t){return(i%t+t)%t}function Tv(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Cv(i,t,e){return i!==t?(e-i)/(t-i):0}function Ro(i,t,e){return(1-e)*i+e*t}function Rv(i,t,e,n){return Ro(i,t,1-Math.exp(-e*n))}function Pv(i,t=1){return t-Math.abs(lf(i,t*2)-t)}function Iv(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Lv(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Dv(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Nv(i,t){return i+Math.random()*(t-i)}function Uv(i){return i*(.5-Math.random())}function Ov(i){i!==void 0&&(pp=i);let t=pp+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Fv(i){return i*ks}function zv(i){return i*Hr}function Bv(i){return(i&i-1)===0&&i!==0}function kv(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hv(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vv(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),d=r((t-n)/2),h=o((t-n)/2),f=r((n-t)/2),p=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*d,c*h,a*l);break;case"YZY":i.set(c*h,a*u,c*d,a*l);break;case"ZXZ":i.set(c*d,c*h,a*u,a*l);break;case"XZX":i.set(a*u,c*p,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*p,a*l);break;case"ZYZ":i.set(c*p,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function sn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $t(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Gv={DEG2RAD:ks,RAD2DEG:Hr,generateUUID:Dn,clamp:we,euclideanModulo:lf,mapLinear:Tv,inverseLerp:Cv,lerp:Ro,damp:Rv,pingpong:Pv,smoothstep:Iv,smootherstep:Lv,randInt:Dv,randFloat:Nv,randFloatSpread:Uv,seededRandom:Ov,degToRad:Fv,radToDeg:zv,isPowerOfTwo:Bv,ceilPowerOfTwo:kv,floorPowerOfTwo:Hv,setQuaternionFromProperEuler:Vv,normalize:$t,denormalize:sn};class it{constructor(t=0,e=0){it.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,n,s,r,o,a,c,l){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],p=n[8],x=s[0],m=s[3],g=s[6],y=s[1],_=s[4],b=s[7],S=s[2],w=s[5],A=s[8];return r[0]=o*x+a*y+c*S,r[3]=o*m+a*_+c*w,r[6]=o*g+a*b+c*A,r[1]=l*x+u*y+d*S,r[4]=l*m+u*_+d*w,r[7]=l*g+u*b+d*A,r[2]=h*x+f*y+p*S,r[5]=h*m+f*_+p*w,r[8]=h*g+f*b+p*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,h=a*c-u*r,f=l*r-o*c,p=e*d+n*h+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return t[0]=d*x,t[1]=(s*l-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=h*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Wu.makeScale(t,e)),this}rotate(t){return this.premultiply(Wu.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Wu=new qt;function lx(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}const Wv={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Pr(i,t){return new Wv[i](t)}function Jo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ux(){const i=Jo("canvas");return i.style.display="block",i}const mp={};function kc(i){i in mp||(mp[i]=!0,console.warn(i))}function Xv(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Yv(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function qv(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const gp=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xp=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),eo={[Fi]:{transfer:Yo,primaries:qo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[mn]:{transfer:pe,primaries:qo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ha]:{transfer:Yo,primaries:$o,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(xp),fromReference:i=>i.applyMatrix3(gp)},[ou]:{transfer:pe,primaries:$o,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(xp),fromReference:i=>i.applyMatrix3(gp).convertLinearToSRGB()}},$v=new Set([Fi,ha]),se={enabled:!0,_workingColorSpace:Fi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!$v.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=eo[t].toReference,s=eo[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return eo[i].primaries},getTransfer:function(i){return i===wi?Yo:eo[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(eo[t].luminanceCoefficients)}};function Ur(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xu(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ar;class hx{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ar===void 0&&(ar=Jo("canvas")),ar.width=t.width,ar.height=t.height;const n=ar.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ar}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Jo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ur(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ur(e[n]/255)*255):e[n]=Ur(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Zv=0;class Ds{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=Dn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Yu(s[o].image)):r.push(Yu(s[o]))}else r=Yu(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Yu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hx.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kv=0;class Ae extends di{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=kn,s=kn,r=Le,o=oi,a=rn,c=hi,l=Ae.DEFAULT_ANISOTROPY,u=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=Dn(),this.name="",this.source=new Ds(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ql)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Br:t.x=t.x-Math.floor(t.x);break;case kn:t.x=t.x<0?0:1;break;case Go:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Br:t.y=t.y-Math.floor(t.y);break;case kn:t.y=t.y<0?0:1;break;case Go:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=Ql;Ae.DEFAULT_ANISOTROPY=1;class Jt{constructor(t=0,e=0,n=0,s=1){Jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],p=c[9],x=c[2],m=c[6],g=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,b=(f+1)/2,S=(g+1)/2,w=(u+h)/4,A=(d+x)/4,E=(p+m)/4;return _>b&&_>S?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=w/n,r=A/n):b>S?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=w/s,r=E/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=A/r,s=E/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(d-x)/y,this.z=(h-u)/y,this.w=Math.acos((l+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dx extends di{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Jt(0,0,t,e),this.scissorTest=!1,this.viewport=new Jt(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Le,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ae(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ds(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends dx{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class au extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jv extends Qn{constructor(t=1,e=1,n=1,s={}){super(t,e,s),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new au(null,t,e,n),this.texture.isRenderTargetTexture=!0}}class uf extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qv extends Qn{constructor(t=1,e=1,n=1,s={}){super(t,e,s),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new uf(null,t,e,n),this.texture.isRenderTargetTexture=!0}}class an{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3];const h=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=h,t[e+1]=f,t[e+2]=p,t[e+3]=x;return}if(d!==x||c!==h||l!==f||u!==p){let m=1-a;const g=c*h+l*f+u*p+d*x,y=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){const S=Math.sqrt(_),w=Math.atan2(S,g*y);m=Math.sin(m*w)/S,a=Math.sin(a*w)/S}const b=a*y;if(c=c*m+h*b,l=l*m+f*b,u=u*m+p*b,d=d*m+x*b,m===1-a){const S=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=S,l*=S,u*=S,d*=S}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[o],h=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+u*d+c*f-l*h,t[e+1]=c*p+u*h+l*d-a*f,t[e+2]=l*p+u*f+a*h-c*d,t[e+3]=u*p-a*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),d=a(r/2),h=c(n/2),f=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=h*u*d+l*f*p,this._y=l*f*d-h*u*p,this._z=l*u*p+h*f*d,this._w=l*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+l*f*p,this._y=l*f*d-h*u*p,this._z=l*u*p-h*f*d,this._w=l*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-l*f*p,this._y=l*f*d+h*u*p,this._z=l*u*p+h*f*d,this._w=l*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-l*f*p,this._y=l*f*d+h*u*p,this._z=l*u*p-h*f*d,this._w=l*u*d+h*f*p;break;case"YZX":this._x=h*u*d+l*f*p,this._y=l*f*d+h*u*p,this._z=l*u*p-h*f*d,this._w=l*u*d-h*f*p;break;case"XZY":this._x=h*u*d-l*f*p,this._y=l*f*d-h*u*p,this._z=l*u*p+h*f*d,this._w=l*u*d+h*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_p.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_p.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*u,this.y=n+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qu.copy(this).projectOnVector(t),this.sub(qu)}reflect(t){return this.sub(qu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qu=new P,_p=new an;class cn{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Xn):Xn.fromBufferAttribute(r,o),Xn.applyMatrix4(t.matrixWorld),this.expandByPoint(Xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ia.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ia.copy(n.boundingBox)),Ia.applyMatrix4(t.matrixWorld),this.union(Ia)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xn),Xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(no),La.subVectors(this.max,no),cr.subVectors(t.a,no),lr.subVectors(t.b,no),ur.subVectors(t.c,no),Hi.subVectors(lr,cr),Vi.subVectors(ur,lr),hs.subVectors(cr,ur);let e=[0,-Hi.z,Hi.y,0,-Vi.z,Vi.y,0,-hs.z,hs.y,Hi.z,0,-Hi.x,Vi.z,0,-Vi.x,hs.z,0,-hs.x,-Hi.y,Hi.x,0,-Vi.y,Vi.x,0,-hs.y,hs.x,0];return!$u(e,cr,lr,ur,La)||(e=[1,0,0,0,1,0,0,0,1],!$u(e,cr,lr,ur,La))?!1:(Da.crossVectors(Hi,Vi),e=[Da.x,Da.y,Da.z],$u(e,cr,lr,ur,La))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xi=[new P,new P,new P,new P,new P,new P,new P,new P],Xn=new P,Ia=new cn,cr=new P,lr=new P,ur=new P,Hi=new P,Vi=new P,hs=new P,no=new P,La=new P,Da=new P,ds=new P;function $u(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ds.fromArray(i,r);const a=s.x*Math.abs(ds.x)+s.y*Math.abs(ds.y)+s.z*Math.abs(ds.z),c=t.dot(ds),l=e.dot(ds),u=n.dot(ds);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const jv=new cn,io=new P,Zu=new P;class Ge{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):jv.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;io.subVectors(t,this.center);const e=io.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(io,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(io.copy(t.center).add(Zu)),this.expandByPoint(io.copy(t.center).sub(Zu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _i=new P,Ku=new P,Na=new P,Gi=new P,Ju=new P,Ua=new P,Qu=new P;class Jr{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_i.copy(this.origin).addScaledVector(this.direction,e),_i.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ku.copy(t).add(e).multiplyScalar(.5),Na.copy(e).sub(t).normalize(),Gi.copy(this.origin).sub(Ku);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Na),a=Gi.dot(this.direction),c=-Gi.dot(Na),l=Gi.lengthSq(),u=Math.abs(1-o*o);let d,h,f,p;if(u>0)if(d=o*c-a,h=o*a-c,p=r*u,d>=0)if(h>=-p)if(h<=p){const x=1/u;d*=x,h*=x,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-p?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=p?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ku).addScaledVector(Na,h),f}intersectSphere(t,e){_i.subVectors(t.center,this.origin);const n=_i.dot(this.direction),s=_i.dot(_i)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,_i)!==null}intersectTriangle(t,e,n,s,r){Ju.subVectors(e,t),Ua.subVectors(n,t),Qu.crossVectors(Ju,Ua);let o=this.direction.dot(Qu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gi.subVectors(this.origin,t);const c=a*this.direction.dot(Ua.crossVectors(Gi,Ua));if(c<0)return null;const l=a*this.direction.dot(Ju.cross(Gi));if(l<0||c+l>o)return null;const u=-a*Gi.dot(Qu);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(t,e,n,s,r,o,a,c,l,u,d,h,f,p,x,m){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,d,h,f,p,x,m)}set(t,e,n,s,r,o,a,c,l,u,d,h,f,p,x,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=u,g[10]=d,g[14]=h,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/hr.setFromMatrixColumn(t,0).length(),r=1/hr.setFromMatrixColumn(t,1).length(),o=1/hr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=o*u,f=o*d,p=a*u,x=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=f+p*l,e[5]=h-x*l,e[9]=-a*c,e[2]=x-h*l,e[6]=p+f*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,f=c*d,p=l*u,x=l*d;e[0]=h+x*a,e[4]=p*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-p,e[6]=x+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,f=c*d,p=l*u,x=l*d;e[0]=h-x*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*u,e[9]=x-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,f=o*d,p=a*u,x=a*d;e[0]=c*u,e[4]=p*l-f,e[8]=h*l+x,e[1]=c*d,e[5]=x*l+h,e[9]=f*l-p,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,f=o*l,p=a*c,x=a*l;e[0]=c*u,e[4]=x-h*d,e[8]=p*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*d+p,e[10]=h-x*d}else if(t.order==="XZY"){const h=o*c,f=o*l,p=a*c,x=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+x,e[5]=o*u,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*u,e[10]=x*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tM,t,eM)}lookAt(t,e,n){const s=this.elements;return Cn.subVectors(t,e),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Wi.crossVectors(n,Cn),Wi.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Wi.crossVectors(n,Cn)),Wi.normalize(),Oa.crossVectors(Cn,Wi),s[0]=Wi.x,s[4]=Oa.x,s[8]=Cn.x,s[1]=Wi.y,s[5]=Oa.y,s[9]=Cn.y,s[2]=Wi.z,s[6]=Oa.z,s[10]=Cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],y=n[3],_=n[7],b=n[11],S=n[15],w=s[0],A=s[4],E=s[8],C=s[12],v=s[1],M=s[5],L=s[9],N=s[13],F=s[2],B=s[6],z=s[10],O=s[14],U=s[3],G=s[7],K=s[11],nt=s[15];return r[0]=o*w+a*v+c*F+l*U,r[4]=o*A+a*M+c*B+l*G,r[8]=o*E+a*L+c*z+l*K,r[12]=o*C+a*N+c*O+l*nt,r[1]=u*w+d*v+h*F+f*U,r[5]=u*A+d*M+h*B+f*G,r[9]=u*E+d*L+h*z+f*K,r[13]=u*C+d*N+h*O+f*nt,r[2]=p*w+x*v+m*F+g*U,r[6]=p*A+x*M+m*B+g*G,r[10]=p*E+x*L+m*z+g*K,r[14]=p*C+x*N+m*O+g*nt,r[3]=y*w+_*v+b*F+S*U,r[7]=y*A+_*M+b*B+S*G,r[11]=y*E+_*L+b*z+S*K,r[15]=y*C+_*N+b*O+S*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],p=t[3],x=t[7],m=t[11],g=t[15];return p*(+r*c*d-s*l*d-r*a*h+n*l*h+s*a*f-n*c*f)+x*(+e*c*f-e*l*h+r*o*h-s*o*f+s*l*u-r*c*u)+m*(+e*l*d-e*a*f-r*o*d+n*o*f+r*a*u-n*l*u)+g*(-s*a*u-e*c*d+e*a*h+s*o*d-n*o*h+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],p=t[12],x=t[13],m=t[14],g=t[15],y=d*m*l-x*h*l+x*c*f-a*m*f-d*c*g+a*h*g,_=p*h*l-u*m*l-p*c*f+o*m*f+u*c*g-o*h*g,b=u*x*l-p*d*l+p*a*f-o*x*f-u*a*g+o*d*g,S=p*d*c-u*x*c-p*a*h+o*x*h+u*a*m-o*d*m,w=e*y+n*_+s*b+r*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=y*A,t[1]=(x*h*r-d*m*r-x*s*f+n*m*f+d*s*g-n*h*g)*A,t[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*g+n*c*g)*A,t[3]=(d*c*r-a*h*r-d*s*l+n*h*l+a*s*f-n*c*f)*A,t[4]=_*A,t[5]=(u*m*r-p*h*r+p*s*f-e*m*f-u*s*g+e*h*g)*A,t[6]=(p*c*r-o*m*r-p*s*l+e*m*l+o*s*g-e*c*g)*A,t[7]=(o*h*r-u*c*r+u*s*l-e*h*l-o*s*f+e*c*f)*A,t[8]=b*A,t[9]=(p*d*r-u*x*r-p*n*f+e*x*f+u*n*g-e*d*g)*A,t[10]=(o*x*r-p*a*r+p*n*l-e*x*l-o*n*g+e*a*g)*A,t[11]=(u*a*r-o*d*r-u*n*l+e*d*l+o*n*f-e*a*f)*A,t[12]=S*A,t[13]=(u*x*s-p*d*s+p*n*h-e*x*h-u*n*m+e*d*m)*A,t[14]=(p*a*s-o*x*s-p*n*c+e*x*c+o*n*m-e*a*m)*A,t[15]=(o*d*s-u*a*s+u*n*c-e*d*c-o*n*h+e*a*h)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,d=a+a,h=r*l,f=r*u,p=r*d,x=o*u,m=o*d,g=a*d,y=c*l,_=c*u,b=c*d,S=n.x,w=n.y,A=n.z;return s[0]=(1-(x+g))*S,s[1]=(f+b)*S,s[2]=(p-_)*S,s[3]=0,s[4]=(f-b)*w,s[5]=(1-(h+g))*w,s[6]=(m+y)*w,s[7]=0,s[8]=(p+_)*A,s[9]=(m-y)*A,s[10]=(1-(h+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=hr.set(s[0],s[1],s[2]).length();const o=hr.set(s[4],s[5],s[6]).length(),a=hr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Yn.copy(this);const l=1/r,u=1/o,d=1/a;return Yn.elements[0]*=l,Yn.elements[1]*=l,Yn.elements[2]*=l,Yn.elements[4]*=u,Yn.elements[5]*=u,Yn.elements[6]*=u,Yn.elements[8]*=d,Yn.elements[9]*=d,Yn.elements[10]*=d,e.setFromRotationMatrix(Yn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ai){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),h=(n+s)/(n-s);let f,p;if(a===ai)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===Ko)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ai){const c=this.elements,l=1/(e-t),u=1/(n-s),d=1/(o-r),h=(e+t)*l,f=(n+s)*u;let p,x;if(a===ai)p=(o+r)*d,x=-2*d;else if(a===Ko)p=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const hr=new P,Yn=new Nt,tM=new P(0,0,0),eM=new P(1,1,1),Wi=new P,Oa=new P,Cn=new P,yp=new Nt,vp=new an;class Sn{constructor(t=0,e=0,n=0,s=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-we(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-we(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(we(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vp.setFromEuler(this),this.setFromQuaternion(vp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class cu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let nM=0;const Mp=new P,dr=new an,yi=new Nt,Fa=new P,so=new P,iM=new P,sM=new an,bp=new P(1,0,0),Sp=new P(0,1,0),wp=new P(0,0,1),Ap={type:"added"},rM={type:"removed"},fr={type:"childadded",child:null},ju={type:"childremoved",child:null};class ie extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ie.DEFAULT_UP.clone();const t=new P,e=new Sn,n=new an,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Nt},normalMatrix:{value:new qt}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return dr.setFromAxisAngle(t,e),this.quaternion.multiply(dr),this}rotateOnWorldAxis(t,e){return dr.setFromAxisAngle(t,e),this.quaternion.premultiply(dr),this}rotateX(t){return this.rotateOnAxis(bp,t)}rotateY(t){return this.rotateOnAxis(Sp,t)}rotateZ(t){return this.rotateOnAxis(wp,t)}translateOnAxis(t,e){return Mp.copy(t).applyQuaternion(this.quaternion),this.position.add(Mp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bp,t)}translateY(t){return this.translateOnAxis(Sp,t)}translateZ(t){return this.translateOnAxis(wp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fa.copy(t):Fa.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),so.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(so,Fa,this.up):yi.lookAt(Fa,so,this.up),this.quaternion.setFromRotationMatrix(yi),s&&(yi.extractRotation(s.matrixWorld),dr.setFromRotationMatrix(yi),this.quaternion.premultiply(dr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ap),fr.child=t,this.dispatchEvent(fr),fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rM),ju.child=t,this.dispatchEvent(ju),ju.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ap),fr.child=t,this.dispatchEvent(fr),fr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,t,iM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,sM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ie.DEFAULT_UP=new P(0,1,0);ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new P,vi=new P,th=new P,Mi=new P,pr=new P,mr=new P,Ep=new P,eh=new P,nh=new P,ih=new P,sh=new Jt,rh=new Jt,oh=new Jt;class vn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),qn.subVectors(t,e),s.cross(qn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){qn.subVectors(s,e),vi.subVectors(n,e),th.subVectors(t,e);const o=qn.dot(qn),a=qn.dot(vi),c=qn.dot(th),l=vi.dot(vi),u=vi.dot(th),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(l*c-a*u)*h,p=(o*u-a*c)*h;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Mi.x),c.addScaledVector(o,Mi.y),c.addScaledVector(a,Mi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return sh.setScalar(0),rh.setScalar(0),oh.setScalar(0),sh.fromBufferAttribute(t,e),rh.fromBufferAttribute(t,n),oh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(sh,r.x),o.addScaledVector(rh,r.y),o.addScaledVector(oh,r.z),o}static isFrontFacing(t,e,n,s){return qn.subVectors(n,e),vi.subVectors(t,e),qn.cross(vi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),qn.cross(vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return vn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;pr.subVectors(s,n),mr.subVectors(r,n),eh.subVectors(t,n);const c=pr.dot(eh),l=mr.dot(eh);if(c<=0&&l<=0)return e.copy(n);nh.subVectors(t,s);const u=pr.dot(nh),d=mr.dot(nh);if(u>=0&&d<=u)return e.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(pr,o);ih.subVectors(t,r);const f=pr.dot(ih),p=mr.dot(ih);if(p>=0&&f<=p)return e.copy(r);const x=f*l-c*p;if(x<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(mr,a);const m=u*p-f*d;if(m<=0&&d-u>=0&&f-p>=0)return Ep.subVectors(r,s),a=(d-u)/(d-u+(f-p)),e.copy(s).addScaledVector(Ep,a);const g=1/(m+x+h);return o=x*g,a=h*g,e.copy(n).addScaledVector(pr,o).addScaledVector(mr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const fx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},za={h:0,s:0,l:0};function ah(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class q{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=lf(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ah(o,r,t+1/3),this.g=ah(o,r,t),this.b=ah(o,r,t-1/3)}return se.toWorkingColorSpace(this,s),this}setStyle(t,e=mn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mn){const n=fx[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ur(t.r),this.g=Ur(t.g),this.b=Ur(t.b),this}copyLinearToSRGB(t){return this.r=Xu(t.r),this.g=Xu(t.g),this.b=Xu(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mn){return se.fromWorkingColorSpace(qe.copy(this),t),Math.round(we(qe.r*255,0,255))*65536+Math.round(we(qe.g*255,0,255))*256+Math.round(we(qe.b*255,0,255))}getHexString(t=mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(qe.copy(this),e);const n=qe.r,s=qe.g,r=qe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=mn){se.fromWorkingColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,s=qe.b;return t!==mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Xi),this.setHSL(Xi.h+t,Xi.s+e,Xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xi),t.getHSL(za);const n=Ro(Xi.h,za.h,e),s=Ro(Xi.s,za.s,e),r=Ro(Xi.l,za.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new q;q.NAMES=fx;let oM=0;class Qe extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=zs,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sl,this.blendDst=rl,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new q(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(n.blending=this.blending),this.side!==Ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sl&&(n.blendSrc=this.blendSrc),this.blendDst!==rl&&(n.blendDst=this.blendDst),this.blendEquation!==Qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fi extends Qe{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=la,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ai=aM();function aM(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;!(l&8388608);)l<<=1,u-=8388608;l&=-8388609,u+=947912704,r[c]=l|u}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function pn(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=we(i,-65504,65504),Ai.floatView[0]=i;const t=Ai.uint32View[0],e=t>>23&511;return Ai.baseTable[e]+((t&8388607)>>Ai.shiftTable[e])}function vo(i){const t=i>>10;return Ai.uint32View[0]=Ai.mantissaTable[Ai.offsetTable[t]+(i&1023)]+Ai.exponentTable[t],Ai.floatView[0]}const cM={toHalfFloat:pn,fromHalfFloat:vo},Ie=new P,Ba=new it;class ue{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zo,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ba.fromBufferAttribute(this,e),Ba.applyMatrix3(t),this.setXY(e,Ba.x,Ba.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$t(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=sn(e,this.array)),e}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=sn(e,this.array)),e}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=sn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=sn(e,this.array)),e}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zo&&(t.usage=this.usage),t}}class lM extends ue{constructor(t,e,n){super(new Int8Array(t),e,n)}}class uM extends ue{constructor(t,e,n){super(new Uint8Array(t),e,n)}}class hM extends ue{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}}class dM extends ue{constructor(t,e,n){super(new Int16Array(t),e,n)}}class hf extends ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class fM extends ue{constructor(t,e,n){super(new Int32Array(t),e,n)}}class df extends ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class pM extends ue{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=vo(this.array[t*this.itemSize]);return this.normalized&&(e=sn(e,this.array)),e}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize]=pn(e),this}getY(t){let e=vo(this.array[t*this.itemSize+1]);return this.normalized&&(e=sn(e,this.array)),e}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+1]=pn(e),this}getZ(t){let e=vo(this.array[t*this.itemSize+2]);return this.normalized&&(e=sn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+2]=pn(e),this}getW(t){let e=vo(this.array[t*this.itemSize+3]);return this.normalized&&(e=sn(e,this.array)),e}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+3]=pn(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.array[t+0]=pn(e),this.array[t+1]=pn(n),this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.array[t+0]=pn(e),this.array[t+1]=pn(n),this.array[t+2]=pn(s),this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.array[t+0]=pn(e),this.array[t+1]=pn(n),this.array[t+2]=pn(s),this.array[t+3]=pn(r),this}}class yt extends ue{constructor(t,e,n){super(new Float32Array(t),e,n)}}let mM=0;const On=new Nt,ch=new ie,gr=new P,Rn=new cn,ro=new cn,ze=new P;class Xt extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lx(t)?df:hf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return On.makeRotationFromQuaternion(t),this.applyMatrix4(On),this}rotateX(t){return On.makeRotationX(t),this.applyMatrix4(On),this}rotateY(t){return On.makeRotationY(t),this.applyMatrix4(On),this}rotateZ(t){return On.makeRotationZ(t),this.applyMatrix4(On),this}translate(t,e,n){return On.makeTranslation(t,e,n),this.applyMatrix4(On),this}scale(t,e,n){return On.makeScale(t,e,n),this.applyMatrix4(On),this}lookAt(t){return ch.lookAt(t),ch.updateMatrix(),this.applyMatrix4(ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new yt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ge);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ro.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(Rn.min,ro.min),Rn.expandByPoint(ze),ze.addVectors(Rn.max,ro.max),Rn.expandByPoint(ze)):(Rn.expandByPoint(ro.min),Rn.expandByPoint(ro.max))}Rn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ze.fromBufferAttribute(a,l),c&&(gr.fromBufferAttribute(t,l),ze.add(gr)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ue(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let E=0;E<n.count;E++)a[E]=new P,c[E]=new P;const l=new P,u=new P,d=new P,h=new it,f=new it,p=new it,x=new P,m=new P;function g(E,C,v){l.fromBufferAttribute(n,E),u.fromBufferAttribute(n,C),d.fromBufferAttribute(n,v),h.fromBufferAttribute(r,E),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,v),u.sub(l),d.sub(l),f.sub(h),p.sub(h);const M=1/(f.x*p.y-p.x*f.y);isFinite(M)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(M),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(M),a[E].add(x),a[C].add(x),a[v].add(x),c[E].add(m),c[C].add(m),c[v].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let E=0,C=y.length;E<C;++E){const v=y[E],M=v.start,L=v.count;for(let N=M,F=M+L;N<F;N+=3)g(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const _=new P,b=new P,S=new P,w=new P;function A(E){S.fromBufferAttribute(s,E),w.copy(S);const C=a[E];_.copy(C),_.sub(S.multiplyScalar(S.dot(C))).normalize(),b.crossVectors(w,C);const M=b.dot(c[E])<0?-1:1;o.setXYZW(E,_.x,_.y,_.z,M)}for(let E=0,C=y.length;E<C;++E){const v=y[E],M=v.start,L=v.count;for(let N=M,F=M+L;N<F;N+=3)A(t.getX(N+0)),A(t.getX(N+1)),A(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,u=new P,d=new P;if(t)for(let h=0,f=t.count;h<f;h+=3){const p=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let f=0,p=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let g=0;g<u;g++)h[p++]=l[f++]}return new ue(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Xt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=t(h,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tp=new Nt,fs=new Jr,ka=new Ge,Cp=new P,Ha=new P,Va=new P,Ga=new P,lh=new P,Wa=new P,Rp=new P,Xa=new P;class Vt extends ie{constructor(t=new Xt,e=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Wa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(lh.fromBufferAttribute(d,t),o?Wa.addScaledVector(lh,u):Wa.addScaledVector(lh.sub(e),u))}e.add(Wa)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(r),fs.copy(t.ray).recast(t.near),!(ka.containsPoint(fs.origin)===!1&&(fs.intersectSphere(ka,Cp)===null||fs.origin.distanceToSquared(Cp)>(t.far-t.near)**2))&&(Tp.copy(r).invert(),fs.copy(t.ray).applyMatrix4(Tp),!(n.boundingBox!==null&&fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fs)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=h.length;p<x;p++){const m=h[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,S=_;b<S;b+=3){const w=a.getX(b),A=a.getX(b+1),E=a.getX(b+2);s=Ya(this,g,t,n,l,u,d,w,A,E),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){const y=a.getX(m),_=a.getX(m+1),b=a.getX(m+2);s=Ya(this,o,t,n,l,u,d,y,_,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,x=h.length;p<x;p++){const m=h[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,S=_;b<S;b+=3){const w=b,A=b+1,E=b+2;s=Ya(this,g,t,n,l,u,d,w,A,E),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){const y=m,_=m+1,b=m+2;s=Ya(this,o,t,n,l,u,d,y,_,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function gM(i,t,e,n,s,r,o,a){let c;if(t.side===Ke?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Ii,a),c===null)return null;Xa.copy(a),Xa.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Xa);return l<e.near||l>e.far?null:{distance:l,point:Xa.clone(),object:i}}function Ya(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Ha),i.getVertexPosition(c,Va),i.getVertexPosition(l,Ga);const u=gM(i,t,e,n,Ha,Va,Ga,Rp);if(u){const d=new P;vn.getBarycoord(Rp,Ha,Va,Ga,d),s&&(u.uv=vn.getInterpolatedAttribute(s,a,c,l,d,new it)),r&&(u.uv1=vn.getInterpolatedAttribute(r,a,c,l,d,new it)),o&&(u.normal=vn.getInterpolatedAttribute(o,a,c,l,d,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new P,materialIndex:0};vn.getNormal(Ha,Va,Ga,h.normal),u.face=h,u.barycoord=d}return u}class Qs extends Xt{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(d,2));function p(x,m,g,y,_,b,S,w,A,E,C){const v=b/A,M=S/E,L=b/2,N=S/2,F=w/2,B=A+1,z=E+1;let O=0,U=0;const G=new P;for(let K=0;K<z;K++){const nt=K*M-N;for(let _t=0;_t<B;_t++){const Rt=_t*v-L;G[x]=Rt*y,G[m]=nt*_,G[g]=F,l.push(G.x,G.y,G.z),G[x]=0,G[m]=0,G[g]=w>0?1:-1,u.push(G.x,G.y,G.z),d.push(_t/A),d.push(1-K/E),O+=1}}for(let K=0;K<E;K++)for(let nt=0;nt<A;nt++){const _t=h+nt+B*K,Rt=h+nt+B*(K+1),$=h+(nt+1)+B*(K+1),tt=h+(nt+1)+B*K;c.push(_t,Rt,tt),c.push(Rt,$,tt),U+=6}a.addGroup(f,U,C),f+=U,h+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function en(i){const t={};for(let e=0;e<i.length;e++){const n=Vr(i[e]);for(const s in n)t[s]=n[s]}return t}function xM(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function px(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const mx={clone:Vr,merge:en};var _M=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends Qe{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_M,this.fragmentShader=yM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vr(t.uniforms),this.uniformsGroups=xM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class lu extends ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=ai}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new P,Pp=new it,Ip=new it;class Be extends lu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Hr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hr*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z)}getViewSize(t,e){return this.getViewBounds(t,Pp,Ip),e.subVectors(Ip,Pp)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ks*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const xr=-90,_r=1;class gx extends ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Be(xr,_r,t,e);s.layers=this.layers,this.add(s);const r=new Be(xr,_r,t,e);r.layers=this.layers,this.add(r);const o=new Be(xr,_r,t,e);o.layers=this.layers,this.add(o);const a=new Be(xr,_r,t,e);a.layers=this.layers,this.add(a);const c=new Be(xr,_r,t,e);c.layers=this.layers,this.add(c);const l=new Be(xr,_r,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===ai)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ko)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class da extends Ae{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Li,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class xx extends Qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new da(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Le}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qs(5,5,5),r=new Vn({name:"CubemapFromEquirect",uniforms:Vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:Ci});r.uniforms.tEquirect.value=e;const o=new Vt(s,r),a=e.minFilter;return e.minFilter===oi&&(e.minFilter=Le),new gx(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const uh=new P,vM=new P,MM=new qt;class Ki{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=uh.subVectors(n,e).cross(vM.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(uh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||MM.getNormalMatrix(t),s=this.coplanarPoint(uh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new Ge,qa=new P;class fa{constructor(t=new Ki,e=new Ki,n=new Ki,s=new Ki,r=new Ki,o=new Ki){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ai){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],d=s[6],h=s[7],f=s[8],p=s[9],x=s[10],m=s[11],g=s[12],y=s[13],_=s[14],b=s[15];if(n[0].setComponents(c-r,h-l,m-f,b-g).normalize(),n[1].setComponents(c+r,h+l,m+f,b+g).normalize(),n[2].setComponents(c+o,h+u,m+p,b+y).normalize(),n[3].setComponents(c-o,h-u,m-p,b-y).normalize(),n[4].setComponents(c-a,h-d,m-x,b-_).normalize(),e===ai)n[5].setComponents(c+a,h+d,m+x,b+_).normalize();else if(e===Ko)n[5].setComponents(a,d,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(t){return ps.center.set(0,0,0),ps.radius=.7071067811865476,ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(qa.x=s.normal.x>0?t.max.x:t.min.x,qa.y=s.normal.y>0?t.max.y:t.min.y,qa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _x(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function bM(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const u=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){const p=d[h],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++h,d[h]=x)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){const x=d[f];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class js extends Xt{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,d=t/a,h=e/c,f=[],p=[],x=[],m=[];for(let g=0;g<u;g++){const y=g*h-o;for(let _=0;_<l;_++){const b=_*d-r;p.push(b,-y,0),x.push(0,0,1),m.push(_/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let y=0;y<a;y++){const _=y+l*g,b=y+l*(g+1),S=y+1+l*(g+1),w=y+1+l*g;f.push(_,b,w),f.push(b,S,w)}this.setIndex(f),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(x,3)),this.setAttribute("uv",new yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new js(t.width,t.height,t.widthSegments,t.heightSegments)}}var SM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wM=`#ifdef USE_ALPHAHASH
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
#endif`,AM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,EM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,CM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RM=`#ifdef USE_AOMAP
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
#endif`,PM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IM=`#ifdef USE_BATCHING
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
#endif`,LM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,DM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,OM=`#ifdef USE_IRIDESCENCE
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
#endif`,FM=`#ifdef USE_BUMPMAP
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
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,GM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,WM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,XM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,YM=`#define PI 3.141592653589793
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
} // validated`,qM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$M=`vec3 transformedNormal = objectNormal;
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
#endif`,ZM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,QM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jM="gl_FragColor = linearToOutputTexel( gl_FragColor );",t1=`
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
}`,e1=`#ifdef USE_ENVMAP
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
#endif`,n1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,i1=`#ifdef USE_ENVMAP
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
#endif`,s1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r1=`#ifdef USE_ENVMAP
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
#endif`,o1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,c1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,u1=`#ifdef USE_GRADIENTMAP
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
}`,h1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,d1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,f1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,p1=`uniform bool receiveShadow;
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
#endif`,m1=`#ifdef USE_ENVMAP
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
#endif`,g1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,x1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,y1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v1=`PhysicalMaterial material;
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
#endif`,M1=`struct PhysicalMaterial {
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
}`,b1=`
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
#endif`,S1=`#if defined( RE_IndirectDiffuse )
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
#endif`,w1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,A1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,E1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,R1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,P1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,I1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,L1=`#if defined( USE_POINTS_UV )
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
#endif`,D1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,N1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,U1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,O1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,F1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z1=`#ifdef USE_MORPHTARGETS
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
#endif`,B1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,H1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,V1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,X1=`#ifdef USE_NORMALMAP
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
#endif`,Y1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,q1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Z1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,K1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,J1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Q1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ib=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ob=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ab=`float getShadowMask() {
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
}`,cb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lb=`#ifdef USE_SKINNING
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
#endif`,ub=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hb=`#ifdef USE_SKINNING
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
#endif`,db=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gb=`#ifdef USE_TRANSMISSION
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
#endif`,xb=`#ifdef USE_TRANSMISSION
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
#endif`,_b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sb=`uniform sampler2D t2D;
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
}`,wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ab=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cb=`#include <common>
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
}`,Rb=`#if DEPTH_PACKING == 3200
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
}`,Pb=`#define DISTANCE
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
}`,Ib=`#define DISTANCE
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
}`,Lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Db=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nb=`uniform float scale;
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
}`,Ub=`uniform vec3 diffuse;
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
}`,Ob=`#include <common>
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
}`,Fb=`uniform vec3 diffuse;
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
}`,zb=`#define LAMBERT
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
}`,Bb=`#define LAMBERT
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
}`,kb=`#define MATCAP
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
}`,Hb=`#define MATCAP
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
}`,Vb=`#define NORMAL
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
}`,Gb=`#define NORMAL
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
}`,Wb=`#define PHONG
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
}`,Xb=`#define PHONG
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
}`,Yb=`#define STANDARD
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
}`,qb=`#define STANDARD
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
}`,$b=`#define TOON
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
}`,Zb=`#define TOON
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
}`,Kb=`uniform float size;
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
}`,Jb=`uniform vec3 diffuse;
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
}`,Qb=`#include <common>
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
}`,jb=`uniform vec3 color;
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
}`,tS=`uniform float rotation;
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
}`,eS=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:SM,alphahash_pars_fragment:wM,alphamap_fragment:AM,alphamap_pars_fragment:EM,alphatest_fragment:TM,alphatest_pars_fragment:CM,aomap_fragment:RM,aomap_pars_fragment:PM,batching_pars_vertex:IM,batching_vertex:LM,begin_vertex:DM,beginnormal_vertex:NM,bsdfs:UM,iridescence_fragment:OM,bumpmap_pars_fragment:FM,clipping_planes_fragment:zM,clipping_planes_pars_fragment:BM,clipping_planes_pars_vertex:kM,clipping_planes_vertex:HM,color_fragment:VM,color_pars_fragment:GM,color_pars_vertex:WM,color_vertex:XM,common:YM,cube_uv_reflection_fragment:qM,defaultnormal_vertex:$M,displacementmap_pars_vertex:ZM,displacementmap_vertex:KM,emissivemap_fragment:JM,emissivemap_pars_fragment:QM,colorspace_fragment:jM,colorspace_pars_fragment:t1,envmap_fragment:e1,envmap_common_pars_fragment:n1,envmap_pars_fragment:i1,envmap_pars_vertex:s1,envmap_physical_pars_fragment:m1,envmap_vertex:r1,fog_vertex:o1,fog_pars_vertex:a1,fog_fragment:c1,fog_pars_fragment:l1,gradientmap_pars_fragment:u1,lightmap_pars_fragment:h1,lights_lambert_fragment:d1,lights_lambert_pars_fragment:f1,lights_pars_begin:p1,lights_toon_fragment:g1,lights_toon_pars_fragment:x1,lights_phong_fragment:_1,lights_phong_pars_fragment:y1,lights_physical_fragment:v1,lights_physical_pars_fragment:M1,lights_fragment_begin:b1,lights_fragment_maps:S1,lights_fragment_end:w1,logdepthbuf_fragment:A1,logdepthbuf_pars_fragment:E1,logdepthbuf_pars_vertex:T1,logdepthbuf_vertex:C1,map_fragment:R1,map_pars_fragment:P1,map_particle_fragment:I1,map_particle_pars_fragment:L1,metalnessmap_fragment:D1,metalnessmap_pars_fragment:N1,morphinstance_vertex:U1,morphcolor_vertex:O1,morphnormal_vertex:F1,morphtarget_pars_vertex:z1,morphtarget_vertex:B1,normal_fragment_begin:k1,normal_fragment_maps:H1,normal_pars_fragment:V1,normal_pars_vertex:G1,normal_vertex:W1,normalmap_pars_fragment:X1,clearcoat_normal_fragment_begin:Y1,clearcoat_normal_fragment_maps:q1,clearcoat_pars_fragment:$1,iridescence_pars_fragment:Z1,opaque_fragment:K1,packing:J1,premultiplied_alpha_fragment:Q1,project_vertex:j1,dithering_fragment:tb,dithering_pars_fragment:eb,roughnessmap_fragment:nb,roughnessmap_pars_fragment:ib,shadowmap_pars_fragment:sb,shadowmap_pars_vertex:rb,shadowmap_vertex:ob,shadowmask_pars_fragment:ab,skinbase_vertex:cb,skinning_pars_vertex:lb,skinning_vertex:ub,skinnormal_vertex:hb,specularmap_fragment:db,specularmap_pars_fragment:fb,tonemapping_fragment:pb,tonemapping_pars_fragment:mb,transmission_fragment:gb,transmission_pars_fragment:xb,uv_pars_fragment:_b,uv_pars_vertex:yb,uv_vertex:vb,worldpos_vertex:Mb,background_vert:bb,background_frag:Sb,backgroundCube_vert:wb,backgroundCube_frag:Ab,cube_vert:Eb,cube_frag:Tb,depth_vert:Cb,depth_frag:Rb,distanceRGBA_vert:Pb,distanceRGBA_frag:Ib,equirect_vert:Lb,equirect_frag:Db,linedashed_vert:Nb,linedashed_frag:Ub,meshbasic_vert:Ob,meshbasic_frag:Fb,meshlambert_vert:zb,meshlambert_frag:Bb,meshmatcap_vert:kb,meshmatcap_frag:Hb,meshnormal_vert:Vb,meshnormal_frag:Gb,meshphong_vert:Wb,meshphong_frag:Xb,meshphysical_vert:Yb,meshphysical_frag:qb,meshtoon_vert:$b,meshtoon_frag:Zb,points_vert:Kb,points_frag:Jb,shadow_vert:Qb,shadow_frag:jb,sprite_vert:tS,sprite_frag:eS},pt={common:{diffuse:{value:new q(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new q(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new q(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new q(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Zn={basic:{uniforms:en([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:en([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new q(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:en([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new q(0)},specular:{value:new q(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:en([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new q(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:en([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new q(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:en([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:en([pt.points,pt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:en([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:en([pt.common,pt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:en([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:en([pt.sprite,pt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:en([pt.common,pt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:en([pt.lights,pt.fog,{color:{value:new q(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Zn.physical={uniforms:en([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new q(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new q(0)},specularColor:{value:new q(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const $a={r:0,b:0,g:0},ms=new Sn,nS=new Nt;function iS(i,t,e,n,s,r,o){const a=new q(0);let c=r===!0?0:1,l,u,d=null,h=0,f=null;function p(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?e:t).get(_)),_}function x(y){let _=!1;const b=p(y);b===null?g(a,c):b&&b.isColor&&(g(b,1),_=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,_){const b=p(_);b&&(b.isCubeTexture||b.mapping===Zr)?(u===void 0&&(u=new Vt(new Qs(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Vr(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ms.copy(_.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(nS.makeRotationFromEuler(ms)),u.material.toneMapped=se.getTransfer(b.colorSpace)!==pe,(d!==b||h!==b.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=b,h=b.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Vt(new js(2,2),new Vn({name:"BackgroundMaterial",uniforms:Vr(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=se.getTransfer(b.colorSpace)!==pe,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||h!==b.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=b,h=b.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,_){y.getRGB($a,px(i)),n.buffers.color.setClear($a.r,$a.g,$a.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),c=_,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,g(a,c)},render:x,addToRenderList:m}}function sS(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(v,M,L,N,F){let B=!1;const z=d(N,L,M);r!==z&&(r=z,l(r.object)),B=f(v,N,L,F),B&&p(v,N,L,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,b(v,M,L,N),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function d(v,M,L){const N=L.wireframe===!0;let F=n[v.id];F===void 0&&(F={},n[v.id]=F);let B=F[M.id];B===void 0&&(B={},F[M.id]=B);let z=B[N];return z===void 0&&(z=h(c()),B[N]=z),z}function h(v){const M=[],L=[],N=[];for(let F=0;F<e;F++)M[F]=0,L[F]=0,N[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:L,attributeDivisors:N,object:v,attributes:{},index:null}}function f(v,M,L,N){const F=r.attributes,B=M.attributes;let z=0;const O=L.getAttributes();for(const U in O)if(O[U].location>=0){const K=F[U];let nt=B[U];if(nt===void 0&&(U==="instanceMatrix"&&v.instanceMatrix&&(nt=v.instanceMatrix),U==="instanceColor"&&v.instanceColor&&(nt=v.instanceColor)),K===void 0||K.attribute!==nt||nt&&K.data!==nt.data)return!0;z++}return r.attributesNum!==z||r.index!==N}function p(v,M,L,N){const F={},B=M.attributes;let z=0;const O=L.getAttributes();for(const U in O)if(O[U].location>=0){let K=B[U];K===void 0&&(U==="instanceMatrix"&&v.instanceMatrix&&(K=v.instanceMatrix),U==="instanceColor"&&v.instanceColor&&(K=v.instanceColor));const nt={};nt.attribute=K,K&&K.data&&(nt.data=K.data),F[U]=nt,z++}r.attributes=F,r.attributesNum=z,r.index=N}function x(){const v=r.newAttributes;for(let M=0,L=v.length;M<L;M++)v[M]=0}function m(v){g(v,0)}function g(v,M){const L=r.newAttributes,N=r.enabledAttributes,F=r.attributeDivisors;L[v]=1,N[v]===0&&(i.enableVertexAttribArray(v),N[v]=1),F[v]!==M&&(i.vertexAttribDivisor(v,M),F[v]=M)}function y(){const v=r.newAttributes,M=r.enabledAttributes;for(let L=0,N=M.length;L<N;L++)M[L]!==v[L]&&(i.disableVertexAttribArray(L),M[L]=0)}function _(v,M,L,N,F,B,z){z===!0?i.vertexAttribIPointer(v,M,L,F,B):i.vertexAttribPointer(v,M,L,N,F,B)}function b(v,M,L,N){x();const F=N.attributes,B=L.getAttributes(),z=M.defaultAttributeValues;for(const O in B){const U=B[O];if(U.location>=0){let G=F[O];if(G===void 0&&(O==="instanceMatrix"&&v.instanceMatrix&&(G=v.instanceMatrix),O==="instanceColor"&&v.instanceColor&&(G=v.instanceColor)),G!==void 0){const K=G.normalized,nt=G.itemSize,_t=t.get(G);if(_t===void 0)continue;const Rt=_t.buffer,$=_t.type,tt=_t.bytesPerElement,ut=$===i.INT||$===i.UNSIGNED_INT||G.gpuType===jl;if(G.isInterleavedBufferAttribute){const ot=G.data,At=ot.stride,Tt=G.offset;if(ot.isInstancedInterleavedBuffer){for(let Lt=0;Lt<U.locationSize;Lt++)g(U.location+Lt,ot.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Lt=0;Lt<U.locationSize;Lt++)m(U.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,Rt);for(let Lt=0;Lt<U.locationSize;Lt++)_(U.location+Lt,nt/U.locationSize,$,K,At*tt,(Tt+nt/U.locationSize*Lt)*tt,ut)}else{if(G.isInstancedBufferAttribute){for(let ot=0;ot<U.locationSize;ot++)g(U.location+ot,G.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ot=0;ot<U.locationSize;ot++)m(U.location+ot);i.bindBuffer(i.ARRAY_BUFFER,Rt);for(let ot=0;ot<U.locationSize;ot++)_(U.location+ot,nt/U.locationSize,$,K,nt*tt,nt/U.locationSize*ot*tt,ut)}}else if(z!==void 0){const K=z[O];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(U.location,K);break;case 3:i.vertexAttrib3fv(U.location,K);break;case 4:i.vertexAttrib4fv(U.location,K);break;default:i.vertexAttrib1fv(U.location,K)}}}}y()}function S(){E();for(const v in n){const M=n[v];for(const L in M){const N=M[L];for(const F in N)u(N[F].object),delete N[F];delete M[L]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const M=n[v.id];for(const L in M){const N=M[L];for(const F in N)u(N[F].object),delete N[F];delete M[L]}delete n[v.id]}function A(v){for(const M in n){const L=n[M];if(L[v.id]===void 0)continue;const N=L[v.id];for(const F in N)u(N[F].object),delete N[F];delete L[v.id]}}function E(){C(),o=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function rS(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),e.update(u,n,d))}function a(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let f=0;for(let p=0;p<d;p++)f+=u[p];e.update(f,n,1)}function c(l,u,d,h){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<l.length;p++)o(l[p],u[p],h[p]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,d);let p=0;for(let x=0;x<d;x++)p+=u[x];for(let x=0;x<h.length;x++)e.update(p,n,h[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function oS(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==rn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const E=A===Kr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==hi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Mn&&!E)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(h===!0){const A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:S,maxSamples:w}}function aS(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Ki,a=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!s||p===null||p.length===0||r&&!m)r?u(null):l();else{const y=r?0:n,_=y*4;let b=g.clippingState||null;c.value=b,b=u(p,h,_,f);for(let S=0;S!==_;++S)b[S]=e[S];g.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,p){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=c.value,p!==!0||m===null){const g=f+x*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let _=0,b=f;_!==x;++_,b+=4)o.copy(d[_]).applyMatrix4(y,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function cS(i){let t=new WeakMap;function e(o,a){return a===Ho?o.mapping=Li:a===Vo&&(o.mapping=ns),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ho||a===Vo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new xx(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class uu extends lu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ir=4,Lp=[.125,.215,.35,.446,.526,.582],Cs=20,hh=new uu,Dp=new q;let dh=null,fh=0,ph=0,mh=!1;const ws=(1+Math.sqrt(5))/2,yr=1/ws,Np=[new P(-ws,yr,0),new P(ws,yr,0),new P(-yr,0,ws),new P(yr,0,ws),new P(0,ws,-yr),new P(0,ws,yr),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class md{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){dh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Op(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(dh,fh,ph),this._renderer.xr.enabled=mh,t.scissorTest=!1,Za(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Li||t.mapping===ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Le,minFilter:Le,generateMipmaps:!1,type:Kr,format:rn,colorSpace:Fi,depthBuffer:!1},s=Up(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Up(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lS(r)),this._blurMaterial=uS(r,t,e)}return s}_compileMaterial(t){const e=new Vt(this._lodPlanes[0],t);this._renderer.compile(e,hh)}_sceneToCubeUV(t,e,n,s){const a=new Be(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Dp),u.toneMapping=Ri,u.autoClear=!1;const f=new fi({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1}),p=new Vt(new Qs,f);let x=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(Dp),x=!0);for(let g=0;g<6;g++){const y=g%3;y===0?(a.up.set(0,c[g],0),a.lookAt(l[g],0,0)):y===1?(a.up.set(0,0,c[g]),a.lookAt(0,l[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,l[g]));const _=this._cubeSize;Za(s,y*_,g>2?_:0,_,_),u.setRenderTarget(s),x&&u.render(p,a),u.render(t,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=h,u.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Li||t.mapping===ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Op());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Vt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Za(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,hh)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Np[(s-r-1)%Np.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Vt(this._lodPlanes[s],l),h=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Cs-1),x=r/p,m=isFinite(r)?1+Math.floor(u*x):Cs;m>Cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Cs}`);const g=[];let y=0;for(let A=0;A<Cs;++A){const E=A/x,C=Math.exp(-E*E/2);g.push(C),A===0?y+=C:A<m&&(y+=2*C)}for(let A=0;A<g.length;A++)g[A]=g[A]/y;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=g,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=p,h.mipInt.value=_-n;const b=this._sizeLods[s],S=3*b*(s>_-Ir?s-_+Ir:0),w=4*(this._cubeSize-b);Za(e,S,w,3*b,2*b),c.setRenderTarget(e),c.render(d,hh)}}function lS(i){const t=[],e=[],n=[];let s=i;const r=i-Ir+1+Lp.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ir?c=Lp[o-i+Ir-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,p=6,x=3,m=2,g=1,y=new Float32Array(x*p*f),_=new Float32Array(m*p*f),b=new Float32Array(g*p*f);for(let w=0;w<f;w++){const A=w%3*2/3-1,E=w>2?0:-1,C=[A,E,0,A+2/3,E,0,A+2/3,E+1,0,A,E,0,A+2/3,E+1,0,A,E+1,0];y.set(C,x*p*w),_.set(h,m*p*w);const v=[w,w,w,w,w,w];b.set(v,g*p*w)}const S=new Xt;S.setAttribute("position",new ue(y,x)),S.setAttribute("uv",new ue(_,m)),S.setAttribute("faceIndex",new ue(b,g)),t.push(S),s>Ir&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Up(i,t,e){const n=new Qn(i,t,e);return n.texture.mapping=Zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Za(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function uS(i,t,e){const n=new Float32Array(Cs),s=new P(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ff(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Op(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ff(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Fp(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function ff(){return`

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
	`}function hS(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ho||c===Vo,u=c===Li||c===ns;if(l||u){let d=t.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new md(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new md(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function dS(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&kc("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function fS(i,t,e,n){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const p in h.attributes)t.remove(h.attributes[p]);for(const p in h.morphAttributes){const x=h.morphAttributes[p];for(let m=0,g=x.length;m<g;m++)t.remove(x[m])}h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(d){const h=d.attributes;for(const p in h)t.update(h[p],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const p in f){const x=f[p];for(let m=0,g=x.length;m<g;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(d){const h=[],f=d.index,p=d.attributes.position;let x=0;if(f!==null){const y=f.array;x=f.version;for(let _=0,b=y.length;_<b;_+=3){const S=y[_+0],w=y[_+1],A=y[_+2];h.push(S,w,w,A,A,S)}}else if(p!==void 0){const y=p.array;x=p.version;for(let _=0,b=y.length/3-1;_<b;_+=3){const S=_+0,w=_+1,A=_+2;h.push(S,w,w,A,A,S)}}else return;const m=new(lx(h)?df:hf)(h,1);m.version=x;const g=r.get(d);g&&t.remove(g),r.set(d,m)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function pS(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,f){i.drawElements(n,f,r,h*o),e.update(f,n,1)}function l(h,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,h*o,p),e.update(f,n,p))}function u(h,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];e.update(m,n,1)}function d(h,f,p,x){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h.length;g++)l(h[g]/o,f[g],x[g]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,x,0,p);let g=0;for(let y=0;y<p;y++)g+=f[y];for(let y=0;y<x.length;y++)e.update(g,n,x[y])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function mS(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function gS(i,t,e){const n=new WeakMap,s=new Jt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let C=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",C)};h!==void 0&&h.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;f===!0&&(_=1),p===!0&&(_=2),x===!0&&(_=3);let b=a.attributes.position.count*_,S=1;b>t.maxTextureSize&&(S=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const w=new Float32Array(b*S*4*d),A=new au(w,b,S,d);A.type=Mn,A.needsUpdate=!0;const E=_*4;for(let v=0;v<d;v++){const M=m[v],L=g[v],N=y[v],F=b*S*4*v;for(let B=0;B<M.count;B++){const z=B*E;f===!0&&(s.fromBufferAttribute(M,B),w[F+z+0]=s.x,w[F+z+1]=s.y,w[F+z+2]=s.z,w[F+z+3]=0),p===!0&&(s.fromBufferAttribute(L,B),w[F+z+4]=s.x,w[F+z+5]=s.y,w[F+z+6]=s.z,w[F+z+7]=0),x===!0&&(s.fromBufferAttribute(N,B),w[F+z+8]=s.x,w[F+z+9]=s.y,w[F+z+10]=s.z,w[F+z+11]=N.itemSize===4?s.w:1)}}h={count:d,texture:A,size:new it(b,S)},n.set(a,h),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];const p=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function xS(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,d=t.get(c,u);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==l&&(h.update(),s.set(h,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class pf extends Ae{constructor(t,e,n,s,r,o,a,c,l,u=Bs){if(u!==Bs&&u!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Bs&&(n=Di),n===void 0&&u===Ys&&(n=Xs),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:He,this.minFilter=c!==void 0?c:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const yx=new Ae,zp=new pf(1,1),vx=new au,Mx=new uf,bx=new da,Bp=[],kp=[],Hp=new Float32Array(16),Vp=new Float32Array(9),Gp=new Float32Array(4);function Qr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Bp[s];if(r===void 0&&(r=new Float32Array(s),Bp[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function hu(i,t){let e=kp[t];e===void 0&&(e=new Int32Array(t),kp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function _S(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function yS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function vS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function MS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function bS(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,n))return;Gp.set(n),i.uniformMatrix2fv(this.addr,!1,Gp),Fe(e,n)}}function SS(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,n))return;Vp.set(n),i.uniformMatrix3fv(this.addr,!1,Vp),Fe(e,n)}}function wS(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,n))return;Hp.set(n),i.uniformMatrix4fv(this.addr,!1,Hp),Fe(e,n)}}function AS(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ES(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function TS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function CS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function RS(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function PS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function IS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function LS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function DS(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(zp.compareFunction=cf,r=zp):r=yx,e.setTexture2D(t||r,s)}function NS(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Mx,s)}function US(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||bx,s)}function OS(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||vx,s)}function FS(i){switch(i){case 5126:return _S;case 35664:return yS;case 35665:return vS;case 35666:return MS;case 35674:return bS;case 35675:return SS;case 35676:return wS;case 5124:case 35670:return AS;case 35667:case 35671:return ES;case 35668:case 35672:return TS;case 35669:case 35673:return CS;case 5125:return RS;case 36294:return PS;case 36295:return IS;case 36296:return LS;case 35678:case 36198:case 36298:case 36306:case 35682:return DS;case 35679:case 36299:case 36307:return NS;case 35680:case 36300:case 36308:case 36293:return US;case 36289:case 36303:case 36311:case 36292:return OS}}function zS(i,t){i.uniform1fv(this.addr,t)}function BS(i,t){const e=Qr(t,this.size,2);i.uniform2fv(this.addr,e)}function kS(i,t){const e=Qr(t,this.size,3);i.uniform3fv(this.addr,e)}function HS(i,t){const e=Qr(t,this.size,4);i.uniform4fv(this.addr,e)}function VS(i,t){const e=Qr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function GS(i,t){const e=Qr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function WS(i,t){const e=Qr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function XS(i,t){i.uniform1iv(this.addr,t)}function YS(i,t){i.uniform2iv(this.addr,t)}function qS(i,t){i.uniform3iv(this.addr,t)}function $S(i,t){i.uniform4iv(this.addr,t)}function ZS(i,t){i.uniform1uiv(this.addr,t)}function KS(i,t){i.uniform2uiv(this.addr,t)}function JS(i,t){i.uniform3uiv(this.addr,t)}function QS(i,t){i.uniform4uiv(this.addr,t)}function jS(i,t,e){const n=this.cache,s=t.length,r=hu(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||yx,r[o])}function tw(i,t,e){const n=this.cache,s=t.length,r=hu(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Mx,r[o])}function ew(i,t,e){const n=this.cache,s=t.length,r=hu(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||bx,r[o])}function nw(i,t,e){const n=this.cache,s=t.length,r=hu(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||vx,r[o])}function iw(i){switch(i){case 5126:return zS;case 35664:return BS;case 35665:return kS;case 35666:return HS;case 35674:return VS;case 35675:return GS;case 35676:return WS;case 5124:case 35670:return XS;case 35667:case 35671:return YS;case 35668:case 35672:return qS;case 35669:case 35673:return $S;case 5125:return ZS;case 36294:return KS;case 36295:return JS;case 36296:return QS;case 35678:case 36198:case 36298:case 36306:case 35682:return jS;case 35679:case 36299:case 36307:return tw;case 35680:case 36300:case 36308:case 36293:return ew;case 36289:case 36303:case 36311:case 36292:return nw}}class sw{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=FS(e.type)}}class rw{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=iw(e.type)}}class ow{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const gh=/(\w+)(\])?(\[|\.)?/g;function Wp(i,t){i.seq.push(t),i.map[t.id]=t}function aw(i,t,e){const n=i.name,s=n.length;for(gh.lastIndex=0;;){const r=gh.exec(n),o=gh.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Wp(e,l===void 0?new sw(a,i,t):new rw(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new ow(a),Wp(e,d)),e=d}}}class Hc{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);aw(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Xp(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const cw=37297;let lw=0;function uw(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function hw(i){const t=se.getPrimaries(se.workingColorSpace),e=se.getPrimaries(i);let n;switch(t===e?n="":t===$o&&e===qo?n="LinearDisplayP3ToLinearSRGB":t===qo&&e===$o&&(n="LinearSRGBToLinearDisplayP3"),i){case Fi:case ha:return[n,"LinearTransferOETF"];case mn:case ou:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Yp(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+uw(i.getShaderSource(t),o)}else return s}function dw(i,t){const e=hw(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function fw(i,t){let e;switch(t){case Gg:e="Linear";break;case Wg:e="Reinhard";break;case Xg:e="Cineon";break;case $d:e="ACESFilmic";break;case qg:e="AgX";break;case $g:e="Neutral";break;case Yg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ka=new P;function pw(){se.getLuminanceCoefficients(Ka);const i=Ka.x.toFixed(4),t=Ka.y.toFixed(4),e=Ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mo).join(`
`)}function gw(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xw(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Mo(i){return i!==""}function qp(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $p(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _w=/^[ \t]*#include +<([\w\d./]+)>/gm;function gd(i){return i.replace(_w,vw)}const yw=new Map;function vw(i,t){let e=Kt[t];if(e===void 0){const n=yw.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return gd(e)}const Mw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zp(i){return i.replace(Mw,bw)}function bw(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kp(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Sw(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Yd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===qd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ni&&(t="SHADOWMAP_TYPE_VSM"),t}function ww(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Li:case ns:t="ENVMAP_TYPE_CUBE";break;case Zr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Aw(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ns:t="ENVMAP_MODE_REFRACTION";break}return t}function Ew(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case la:t="ENVMAP_BLENDING_MULTIPLY";break;case Hg:t="ENVMAP_BLENDING_MIX";break;case Vg:t="ENVMAP_BLENDING_ADD";break}return t}function Tw(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Cw(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Sw(e),l=ww(e),u=Aw(e),d=Ew(e),h=Tw(e),f=mw(e),p=gw(r),x=s.createProgram();let m,g,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Mo).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Mo).join(`
`),g.length>0&&(g+=`
`)):(m=[Kp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mo).join(`
`),g=[Kp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ri?"#define TONE_MAPPING":"",e.toneMapping!==Ri?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Ri?fw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,dw("linearToOutputTexel",e.outputColorSpace),pw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mo).join(`
`)),o=gd(o),o=qp(o,e),o=$p(o,e),a=gd(a),a=qp(a,e),a=$p(a,e),o=Zp(o),a=Zp(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===pd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===pd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const _=y+m+o,b=y+g+a,S=Xp(s,s.VERTEX_SHADER,_),w=Xp(s,s.FRAGMENT_SHADER,b);s.attachShader(x,S),s.attachShader(x,w),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(M){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(x).trim(),N=s.getShaderInfoLog(S).trim(),F=s.getShaderInfoLog(w).trim();let B=!0,z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,S,w);else{const O=Yp(s,S,"vertex"),U=Yp(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+L+`
`+O+`
`+U)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(N===""||F==="")&&(z=!1);z&&(M.diagnostics={runnable:B,programLog:L,vertexShader:{log:N,prefix:m},fragmentShader:{log:F,prefix:g}})}s.deleteShader(S),s.deleteShader(w),E=new Hc(s,x),C=xw(s,x)}let E;this.getUniforms=function(){return E===void 0&&A(this),E};let C;this.getAttributes=function(){return C===void 0&&A(this),C};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,cw)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lw++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=w,this}let Rw=0;class Pw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Iw(t),e.set(t,n)),n}}class Iw{constructor(t){this.id=Rw++,this.code=t,this.usedTimes=0}}function Lw(i,t,e,n,s,r,o){const a=new cu,c=new Pw,l=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.reverseDepthBuffer,f=s.vertexTextures;let p=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,M,L,N,F){const B=N.fog,z=F.geometry,O=v.isMeshStandardMaterial?N.environment:null,U=(v.isMeshStandardMaterial?e:t).get(v.envMap||O),G=U&&U.mapping===Zr?U.image.height:null,K=x[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const nt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,_t=nt!==void 0?nt.length:0;let Rt=0;z.morphAttributes.position!==void 0&&(Rt=1),z.morphAttributes.normal!==void 0&&(Rt=2),z.morphAttributes.color!==void 0&&(Rt=3);let $,tt,ut,ot;if(K){const fn=Zn[K];$=fn.vertexShader,tt=fn.fragmentShader}else $=v.vertexShader,tt=v.fragmentShader,c.update(v),ut=c.getVertexShaderID(v),ot=c.getFragmentShaderID(v);const At=i.getRenderTarget(),Tt=F.isInstancedMesh===!0,Lt=F.isBatchedMesh===!0,Bt=!!v.map,j=!!v.matcap,D=!!U,ht=!!v.aoMap,dt=!!v.lightMap,at=!!v.bumpMap,ft=!!v.normalMap,Ut=!!v.displacementMap,vt=!!v.emissiveMap,I=!!v.metalnessMap,T=!!v.roughnessMap,W=v.anisotropy>0,J=v.clearcoat>0,st=v.dispersion>0,Q=v.iridescence>0,Pt=v.sheen>0,mt=v.transmission>0,St=W&&!!v.anisotropyMap,Qt=J&&!!v.clearcoatMap,ct=J&&!!v.clearcoatNormalMap,wt=J&&!!v.clearcoatRoughnessMap,Gt=Q&&!!v.iridescenceMap,Wt=Q&&!!v.iridescenceThicknessMap,Et=Pt&&!!v.sheenColorMap,jt=Pt&&!!v.sheenRoughnessMap,Yt=!!v.specularMap,fe=!!v.specularColorMap,k=!!v.specularIntensityMap,Mt=mt&&!!v.transmissionMap,Z=mt&&!!v.thicknessMap,rt=!!v.gradientMap,gt=!!v.alphaMap,bt=v.alphaTest>0,ee=!!v.alphaHash,Pe=!!v.extensions;let dn=Ri;v.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(dn=i.toneMapping);const re={shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:$,fragmentShader:tt,defines:v.defines,customVertexShaderID:ut,customFragmentShaderID:ot,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Lt,batchingColor:Lt&&F._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&F.instanceColor!==null,instancingMorph:Tt&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:At===null?i.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Fi,alphaToCoverage:!!v.alphaToCoverage,map:Bt,matcap:j,envMap:D,envMapMode:D&&U.mapping,envMapCubeUVHeight:G,aoMap:ht,lightMap:dt,bumpMap:at,normalMap:ft,displacementMap:f&&Ut,emissiveMap:vt,normalMapObjectSpace:ft&&v.normalMapType===tx,normalMapTangentSpace:ft&&v.normalMapType===os,metalnessMap:I,roughnessMap:T,anisotropy:W,anisotropyMap:St,clearcoat:J,clearcoatMap:Qt,clearcoatNormalMap:ct,clearcoatRoughnessMap:wt,dispersion:st,iridescence:Q,iridescenceMap:Gt,iridescenceThicknessMap:Wt,sheen:Pt,sheenColorMap:Et,sheenRoughnessMap:jt,specularMap:Yt,specularColorMap:fe,specularIntensityMap:k,transmission:mt,transmissionMap:Mt,thicknessMap:Z,gradientMap:rt,opaque:v.transparent===!1&&v.blending===zs&&v.alphaToCoverage===!1,alphaMap:gt,alphaTest:bt,alphaHash:ee,combine:v.combine,mapUv:Bt&&m(v.map.channel),aoMapUv:ht&&m(v.aoMap.channel),lightMapUv:dt&&m(v.lightMap.channel),bumpMapUv:at&&m(v.bumpMap.channel),normalMapUv:ft&&m(v.normalMap.channel),displacementMapUv:Ut&&m(v.displacementMap.channel),emissiveMapUv:vt&&m(v.emissiveMap.channel),metalnessMapUv:I&&m(v.metalnessMap.channel),roughnessMapUv:T&&m(v.roughnessMap.channel),anisotropyMapUv:St&&m(v.anisotropyMap.channel),clearcoatMapUv:Qt&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ct&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:jt&&m(v.sheenRoughnessMap.channel),specularMapUv:Yt&&m(v.specularMap.channel),specularColorMapUv:fe&&m(v.specularColorMap.channel),specularIntensityMapUv:k&&m(v.specularIntensityMap.channel),transmissionMapUv:Mt&&m(v.transmissionMap.channel),thicknessMapUv:Z&&m(v.thicknessMap.channel),alphaMapUv:gt&&m(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ft||W),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(Bt||gt),fog:!!B,useFog:v.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:h,skinning:F.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Rt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:dn,decodeVideoTexture:Bt&&v.map.isVideoTexture===!0&&se.getTransfer(v.map.colorSpace)===pe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ge,flipSided:v.side===Ke,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Pe&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&v.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return re.vertexUv1s=l.has(1),re.vertexUv2s=l.has(2),re.vertexUv3s=l.has(3),l.clear(),re}function y(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)M.push(L),M.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(_(M,v),b(M,v),M.push(i.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function _(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function b(v,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),v.push(a.mask)}function S(v){const M=x[v.type];let L;if(M){const N=Zn[M];L=mx.clone(N.uniforms)}else L=v.uniforms;return L}function w(v,M){let L;for(let N=0,F=u.length;N<F;N++){const B=u[N];if(B.cacheKey===M){L=B,++L.usedTimes;break}}return L===void 0&&(L=new Cw(i,M,v,r),u.push(L)),L}function A(v){if(--v.usedTimes===0){const M=u.indexOf(v);u[M]=u[u.length-1],u.pop(),v.destroy()}}function E(v){c.remove(v)}function C(){c.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:S,acquireProgram:w,releaseProgram:A,releaseShaderCache:E,programs:u,dispose:C}}function Dw(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Nw(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Jp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Qp(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,h,f,p,x,m){let g=i[t];return g===void 0?(g={id:d.id,object:d,geometry:h,material:f,groupOrder:p,renderOrder:d.renderOrder,z:x,group:m},i[t]=g):(g.id=d.id,g.object=d,g.geometry=h,g.material=f,g.groupOrder=p,g.renderOrder=d.renderOrder,g.z=x,g.group=m),t++,g}function a(d,h,f,p,x,m){const g=o(d,h,f,p,x,m);f.transmission>0?n.push(g):f.transparent===!0?s.push(g):e.push(g)}function c(d,h,f,p,x,m){const g=o(d,h,f,p,x,m);f.transmission>0?n.unshift(g):f.transparent===!0?s.unshift(g):e.unshift(g)}function l(d,h){e.length>1&&e.sort(d||Nw),n.length>1&&n.sort(h||Jp),s.length>1&&s.sort(h||Jp)}function u(){for(let d=t,h=i.length;d<h;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Uw(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Qp,i.set(n,[o])):s>=r.length?(o=new Qp,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ow(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new q};break;case"SpotLight":e={position:new P,direction:new P,color:new q,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new q,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new q,groundColor:new q};break;case"RectAreaLight":e={color:new q,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Fw(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let zw=0;function Bw(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function kw(i){const t=new Ow,e=Fw(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const s=new P,r=new Nt,o=new Nt;function a(l){let u=0,d=0,h=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,y=0,_=0,b=0,S=0,w=0,A=0;l.sort(Bw);for(let C=0,v=l.length;C<v;C++){const M=l[C],L=M.color,N=M.intensity,F=M.distance,B=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)u+=L.r*N,d+=L.g*N,h+=L.b*N;else if(M.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(M.sh.coefficients[z],N);A++}else if(M.isDirectionalLight){const z=t.get(M);if(z.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const O=M.shadow,U=e.get(M);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,n.directionalShadow[f]=U,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=M.shadow.matrix,y++}n.directional[f]=z,f++}else if(M.isSpotLight){const z=t.get(M);z.position.setFromMatrixPosition(M.matrixWorld),z.color.copy(L).multiplyScalar(N),z.distance=F,z.coneCos=Math.cos(M.angle),z.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),z.decay=M.decay,n.spot[x]=z;const O=M.shadow;if(M.map&&(n.spotLightMap[S]=M.map,S++,O.updateMatrices(M),M.castShadow&&w++),n.spotLightMatrix[x]=O.matrix,M.castShadow){const U=e.get(M);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,n.spotShadow[x]=U,n.spotShadowMap[x]=B,b++}x++}else if(M.isRectAreaLight){const z=t.get(M);z.color.copy(L).multiplyScalar(N),z.halfWidth.set(M.width*.5,0,0),z.halfHeight.set(0,M.height*.5,0),n.rectArea[m]=z,m++}else if(M.isPointLight){const z=t.get(M);if(z.color.copy(M.color).multiplyScalar(M.intensity),z.distance=M.distance,z.decay=M.decay,M.castShadow){const O=M.shadow,U=e.get(M);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,U.shadowCameraNear=O.camera.near,U.shadowCameraFar=O.camera.far,n.pointShadow[p]=U,n.pointShadowMap[p]=B,n.pointShadowMatrix[p]=M.shadow.matrix,_++}n.point[p]=z,p++}else if(M.isHemisphereLight){const z=t.get(M);z.skyColor.copy(M.color).multiplyScalar(N),z.groundColor.copy(M.groundColor).multiplyScalar(N),n.hemi[g]=z,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const E=n.hash;(E.directionalLength!==f||E.pointLength!==p||E.spotLength!==x||E.rectAreaLength!==m||E.hemiLength!==g||E.numDirectionalShadows!==y||E.numPointShadows!==_||E.numSpotShadows!==b||E.numSpotMaps!==S||E.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=b+S-w,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,E.directionalLength=f,E.pointLength=p,E.spotLength=x,E.rectAreaLength=m,E.hemiLength=g,E.numDirectionalShadows=y,E.numPointShadows=_,E.numSpotShadows=b,E.numSpotMaps=S,E.numLightProbes=A,n.version=zw++)}function c(l,u){let d=0,h=0,f=0,p=0,x=0;const m=u.matrixWorldInverse;for(let g=0,y=l.length;g<y;g++){const _=l[g];if(_.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),d++}else if(_.isSpotLight){const b=n.spot[f];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(_.isRectAreaLight){const b=n.rectArea[p];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),p++}else if(_.isPointLight){const b=n.point[h];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){const b=n.hemi[x];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function jp(i){const t=new kw(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Hw(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new jp(i),t.set(s,[a])):r>=o.length?(a=new jp(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class du extends Qe{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class mf extends Qe{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Vw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gw=`uniform sampler2D shadow_pass;
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
}`;function Ww(i,t,e){let n=new fa;const s=new it,r=new it,o=new Jt,a=new du({depthPacking:af}),c=new mf,l={},u=e.maxTextureSize,d={[Ii]:Ke,[Ke]:Ii,[ge]:ge},h=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:Vw,fragmentShader:Gw}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const p=new Xt;p.setAttribute("position",new ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Vt(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yd;let g=this.type;this.render=function(w,A,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const C=i.getRenderTarget(),v=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Ci),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const N=g!==ni&&this.type===ni,F=g===ni&&this.type!==ni;for(let B=0,z=w.length;B<z;B++){const O=w[B],U=O.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const G=U.getFrameExtents();if(s.multiply(G),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/G.x),s.x=r.x*G.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/G.y),s.y=r.y*G.y,U.mapSize.y=r.y)),U.map===null||N===!0||F===!0){const nt=this.type!==ni?{minFilter:He,magFilter:He}:{};U.map!==null&&U.map.dispose(),U.map=new Qn(s.x,s.y,nt),U.map.texture.name=O.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();const K=U.getViewportCount();for(let nt=0;nt<K;nt++){const _t=U.getViewport(nt);o.set(r.x*_t.x,r.y*_t.y,r.x*_t.z,r.y*_t.w),L.viewport(o),U.updateMatrices(O,nt),n=U.getFrustum(),b(A,E,U.camera,O,this.type)}U.isPointLightShadow!==!0&&this.type===ni&&y(U,E),U.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(C,v,M)};function y(w,A){const E=t.update(x);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Qn(s.x,s.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,E,h,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,E,f,x,null)}function _(w,A,E,C){let v=null;const M=E.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(M!==void 0)v=M;else if(v=E.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const L=v.uuid,N=A.uuid;let F=l[L];F===void 0&&(F={},l[L]=F);let B=F[N];B===void 0&&(B=v.clone(),F[N]=B,A.addEventListener("dispose",S)),v=B}if(v.visible=A.visible,v.wireframe=A.wireframe,C===ni?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:d[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,E.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const L=i.properties.get(v);L.light=E}return v}function b(w,A,E,C,v){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===ni)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,w.matrixWorld);const N=t.update(w),F=w.material;if(Array.isArray(F)){const B=N.groups;for(let z=0,O=B.length;z<O;z++){const U=B[z],G=F[U.materialIndex];if(G&&G.visible){const K=_(w,G,C,v);w.onBeforeShadow(i,w,A,E,N,K,U),i.renderBufferDirect(E,null,N,K,w,U),w.onAfterShadow(i,w,A,E,N,K,U)}}}else if(F.visible){const B=_(w,F,C,v);w.onBeforeShadow(i,w,A,E,N,B,null),i.renderBufferDirect(E,null,N,B,w,null),w.onAfterShadow(i,w,A,E,N,B,null)}}const L=w.children;for(let N=0,F=L.length;N<F;N++)b(L[N],A,E,C,v)}function S(w){w.target.removeEventListener("dispose",S);for(const E in l){const C=l[E],v=w.target.uuid;v in C&&(C[v].dispose(),delete C[v])}}}const Xw={[ol]:al,[cl]:hl,[ll]:dl,[Ws]:ul,[al]:ol,[hl]:cl,[dl]:ll,[ul]:Ws};function Yw(i){function t(){let k=!1;const Mt=new Jt;let Z=null;const rt=new Jt(0,0,0,0);return{setMask:function(gt){Z!==gt&&!k&&(i.colorMask(gt,gt,gt,gt),Z=gt)},setLocked:function(gt){k=gt},setClear:function(gt,bt,ee,Pe,dn){dn===!0&&(gt*=Pe,bt*=Pe,ee*=Pe),Mt.set(gt,bt,ee,Pe),rt.equals(Mt)===!1&&(i.clearColor(gt,bt,ee,Pe),rt.copy(Mt))},reset:function(){k=!1,Z=null,rt.set(-1,0,0,0)}}}function e(){let k=!1,Mt=!1,Z=null,rt=null,gt=null;return{setReversed:function(bt){Mt=bt},setTest:function(bt){bt?ut(i.DEPTH_TEST):ot(i.DEPTH_TEST)},setMask:function(bt){Z!==bt&&!k&&(i.depthMask(bt),Z=bt)},setFunc:function(bt){if(Mt&&(bt=Xw[bt]),rt!==bt){switch(bt){case ol:i.depthFunc(i.NEVER);break;case al:i.depthFunc(i.ALWAYS);break;case cl:i.depthFunc(i.LESS);break;case Ws:i.depthFunc(i.LEQUAL);break;case ll:i.depthFunc(i.EQUAL);break;case ul:i.depthFunc(i.GEQUAL);break;case hl:i.depthFunc(i.GREATER);break;case dl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}rt=bt}},setLocked:function(bt){k=bt},setClear:function(bt){gt!==bt&&(i.clearDepth(bt),gt=bt)},reset:function(){k=!1,Z=null,rt=null,gt=null}}}function n(){let k=!1,Mt=null,Z=null,rt=null,gt=null,bt=null,ee=null,Pe=null,dn=null;return{setTest:function(re){k||(re?ut(i.STENCIL_TEST):ot(i.STENCIL_TEST))},setMask:function(re){Mt!==re&&!k&&(i.stencilMask(re),Mt=re)},setFunc:function(re,fn,gi){(Z!==re||rt!==fn||gt!==gi)&&(i.stencilFunc(re,fn,gi),Z=re,rt=fn,gt=gi)},setOp:function(re,fn,gi){(bt!==re||ee!==fn||Pe!==gi)&&(i.stencilOp(re,fn,gi),bt=re,ee=fn,Pe=gi)},setLocked:function(re){k=re},setClear:function(re){dn!==re&&(i.clearStencil(re),dn=re)},reset:function(){k=!1,Mt=null,Z=null,rt=null,gt=null,bt=null,ee=null,Pe=null,dn=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,c=new WeakMap;let l={},u={},d=new WeakMap,h=[],f=null,p=!1,x=null,m=null,g=null,y=null,_=null,b=null,S=null,w=new q(0,0,0),A=0,E=!1,C=null,v=null,M=null,L=null,N=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,z=0;const O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(O)[1]),B=z>=1):O.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),B=z>=2);let U=null,G={};const K=i.getParameter(i.SCISSOR_BOX),nt=i.getParameter(i.VIEWPORT),_t=new Jt().fromArray(K),Rt=new Jt().fromArray(nt);function $(k,Mt,Z,rt){const gt=new Uint8Array(4),bt=i.createTexture();i.bindTexture(k,bt),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ee=0;ee<Z;ee++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,rt,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(Mt+ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return bt}const tt={};tt[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ut(i.DEPTH_TEST),r.setFunc(Ws),dt(!1),at(ld),ut(i.CULL_FACE),D(Ci);function ut(k){l[k]!==!0&&(i.enable(k),l[k]=!0)}function ot(k){l[k]!==!1&&(i.disable(k),l[k]=!1)}function At(k,Mt){return u[k]!==Mt?(i.bindFramebuffer(k,Mt),u[k]=Mt,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Mt),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Tt(k,Mt){let Z=h,rt=!1;if(k){Z=d.get(Mt),Z===void 0&&(Z=[],d.set(Mt,Z));const gt=k.textures;if(Z.length!==gt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,ee=gt.length;bt<ee;bt++)Z[bt]=i.COLOR_ATTACHMENT0+bt;Z.length=gt.length,rt=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,rt=!0);rt&&i.drawBuffers(Z)}function Lt(k){return f!==k?(i.useProgram(k),f=k,!0):!1}const Bt={[Qi]:i.FUNC_ADD,[wg]:i.FUNC_SUBTRACT,[Ag]:i.FUNC_REVERSE_SUBTRACT};Bt[Eg]=i.MIN,Bt[Tg]=i.MAX;const j={[Cg]:i.ZERO,[Rg]:i.ONE,[Pg]:i.SRC_COLOR,[sl]:i.SRC_ALPHA,[Og]:i.SRC_ALPHA_SATURATE,[Ng]:i.DST_COLOR,[Lg]:i.DST_ALPHA,[Ig]:i.ONE_MINUS_SRC_COLOR,[rl]:i.ONE_MINUS_SRC_ALPHA,[Ug]:i.ONE_MINUS_DST_COLOR,[Dg]:i.ONE_MINUS_DST_ALPHA,[Fg]:i.CONSTANT_COLOR,[zg]:i.ONE_MINUS_CONSTANT_COLOR,[Bg]:i.CONSTANT_ALPHA,[kg]:i.ONE_MINUS_CONSTANT_ALPHA};function D(k,Mt,Z,rt,gt,bt,ee,Pe,dn,re){if(k===Ci){p===!0&&(ot(i.BLEND),p=!1);return}if(p===!1&&(ut(i.BLEND),p=!0),k!==Sg){if(k!==x||re!==E){if((m!==Qi||_!==Qi)&&(i.blendEquation(i.FUNC_ADD),m=Qi,_=Qi),re)switch(k){case zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case il:i.blendFunc(i.ONE,i.ONE);break;case ud:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case il:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ud:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}g=null,y=null,b=null,S=null,w.set(0,0,0),A=0,x=k,E=re}return}gt=gt||Mt,bt=bt||Z,ee=ee||rt,(Mt!==m||gt!==_)&&(i.blendEquationSeparate(Bt[Mt],Bt[gt]),m=Mt,_=gt),(Z!==g||rt!==y||bt!==b||ee!==S)&&(i.blendFuncSeparate(j[Z],j[rt],j[bt],j[ee]),g=Z,y=rt,b=bt,S=ee),(Pe.equals(w)===!1||dn!==A)&&(i.blendColor(Pe.r,Pe.g,Pe.b,dn),w.copy(Pe),A=dn),x=k,E=!1}function ht(k,Mt){k.side===ge?ot(i.CULL_FACE):ut(i.CULL_FACE);let Z=k.side===Ke;Mt&&(Z=!Z),dt(Z),k.blending===zs&&k.transparent===!1?D(Ci):D(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),r.setFunc(k.depthFunc),r.setTest(k.depthTest),r.setMask(k.depthWrite),s.setMask(k.colorWrite);const rt=k.stencilWrite;o.setTest(rt),rt&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ut(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(k){C!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),C=k)}function at(k){k!==Mg?(ut(i.CULL_FACE),k!==v&&(k===ld?i.cullFace(i.BACK):k===bg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ot(i.CULL_FACE),v=k}function ft(k){k!==M&&(B&&i.lineWidth(k),M=k)}function Ut(k,Mt,Z){k?(ut(i.POLYGON_OFFSET_FILL),(L!==Mt||N!==Z)&&(i.polygonOffset(Mt,Z),L=Mt,N=Z)):ot(i.POLYGON_OFFSET_FILL)}function vt(k){k?ut(i.SCISSOR_TEST):ot(i.SCISSOR_TEST)}function I(k){k===void 0&&(k=i.TEXTURE0+F-1),U!==k&&(i.activeTexture(k),U=k)}function T(k,Mt,Z){Z===void 0&&(U===null?Z=i.TEXTURE0+F-1:Z=U);let rt=G[Z];rt===void 0&&(rt={type:void 0,texture:void 0},G[Z]=rt),(rt.type!==k||rt.texture!==Mt)&&(U!==Z&&(i.activeTexture(Z),U=Z),i.bindTexture(k,Mt||tt[k]),rt.type=k,rt.texture=Mt)}function W(){const k=G[U];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function st(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Qt(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ct(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Gt(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Wt(k){_t.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),_t.copy(k))}function Et(k){Rt.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Rt.copy(k))}function jt(k,Mt){let Z=c.get(Mt);Z===void 0&&(Z=new WeakMap,c.set(Mt,Z));let rt=Z.get(k);rt===void 0&&(rt=i.getUniformBlockIndex(Mt,k.name),Z.set(k,rt))}function Yt(k,Mt){const rt=c.get(Mt).get(k);a.get(Mt)!==rt&&(i.uniformBlockBinding(Mt,rt,k.__bindingPointIndex),a.set(Mt,rt))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},U=null,G={},u={},d=new WeakMap,h=[],f=null,p=!1,x=null,m=null,g=null,y=null,_=null,b=null,S=null,w=new q(0,0,0),A=0,E=!1,C=null,v=null,M=null,L=null,N=null,_t.set(0,0,i.canvas.width,i.canvas.height),Rt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ut,disable:ot,bindFramebuffer:At,drawBuffers:Tt,useProgram:Lt,setBlending:D,setMaterial:ht,setFlipSided:dt,setCullFace:at,setLineWidth:ft,setPolygonOffset:Ut,setScissorTest:vt,activeTexture:I,bindTexture:T,unbindTexture:W,compressedTexImage2D:J,compressedTexImage3D:st,texImage2D:wt,texImage3D:Gt,updateUBOMapping:jt,uniformBlockBinding:Yt,texStorage2D:Qt,texStorage3D:ct,texSubImage2D:Q,texSubImage3D:Pt,compressedTexSubImage2D:mt,compressedTexSubImage3D:St,scissor:Wt,viewport:Et,reset:fe}}function qw(i,t){const e=i.image&&i.image.width?i.image.width/i.image.height:1;return e>t?(i.repeat.x=1,i.repeat.y=e/t,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2):(i.repeat.x=t/e,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0),i}function $w(i,t){const e=i.image&&i.image.width?i.image.width/i.image.height:1;return e>t?(i.repeat.x=t/e,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0):(i.repeat.x=1,i.repeat.y=e/t,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2),i}function Zw(i){return i.repeat.x=1,i.repeat.y=1,i.offset.x=0,i.offset.y=0,i}function xd(i,t,e,n){const s=Kw(n);switch(e){case jd:return i*t;case ef:return i*t;case nf:return i*t*2;case nu:return i*t/s.components*s.byteLength;case ua:return i*t/s.components*s.byteLength;case sf:return i*t*2/s.components*s.byteLength;case iu:return i*t*2/s.components*s.byteLength;case tf:return i*t*3/s.components*s.byteLength;case rn:return i*t*4/s.components*s.byteLength;case su:return i*t*4/s.components*s.byteLength;case wo:case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Eo:case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pl:case gl:return Math.max(i,16)*Math.max(t,8)/4;case fl:case ml:return Math.max(i,8)*Math.max(t,8)/2;case xl:case _l:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case yl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case bl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case wl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Al:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case El:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Cl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Il:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ll:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Dl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Co:case Nl:case Ul:return Math.ceil(i/4)*Math.ceil(t/4)*16;case rf:case Ol:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Fl:case zl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Kw(i){switch(i){case hi:case Kd:return{byteLength:1,components:1};case kr:case Jd:case Kr:return{byteLength:2,components:1};case tu:case eu:return{byteLength:2,components:4};case Di:case jl:case Mn:return{byteLength:4,components:1};case Qd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}const Jw={contain:qw,cover:$w,fill:Zw,getByteLength:xd};function Qw(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new it,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,T){return f?new OffscreenCanvas(I,T):Jo("canvas")}function x(I,T,W){let J=1;const st=vt(I);if((st.width>W||st.height>W)&&(J=W/Math.max(st.width,st.height)),J<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Q=Math.floor(J*st.width),Pt=Math.floor(J*st.height);d===void 0&&(d=p(Q,Pt));const mt=T?p(Q,Pt):d;return mt.width=Q,mt.height=Pt,mt.getContext("2d").drawImage(I,0,0,Q,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+Q+"x"+Pt+")."),mt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),I;return I}function m(I){return I.generateMipmaps&&I.minFilter!==He&&I.minFilter!==Le}function g(I){i.generateMipmap(I)}function y(I,T,W,J,st=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Q=T;if(T===i.RED&&(W===i.FLOAT&&(Q=i.R32F),W===i.HALF_FLOAT&&(Q=i.R16F),W===i.UNSIGNED_BYTE&&(Q=i.R8)),T===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.R8UI),W===i.UNSIGNED_SHORT&&(Q=i.R16UI),W===i.UNSIGNED_INT&&(Q=i.R32UI),W===i.BYTE&&(Q=i.R8I),W===i.SHORT&&(Q=i.R16I),W===i.INT&&(Q=i.R32I)),T===i.RG&&(W===i.FLOAT&&(Q=i.RG32F),W===i.HALF_FLOAT&&(Q=i.RG16F),W===i.UNSIGNED_BYTE&&(Q=i.RG8)),T===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.RG8UI),W===i.UNSIGNED_SHORT&&(Q=i.RG16UI),W===i.UNSIGNED_INT&&(Q=i.RG32UI),W===i.BYTE&&(Q=i.RG8I),W===i.SHORT&&(Q=i.RG16I),W===i.INT&&(Q=i.RG32I)),T===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),W===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),W===i.UNSIGNED_INT&&(Q=i.RGB32UI),W===i.BYTE&&(Q=i.RGB8I),W===i.SHORT&&(Q=i.RGB16I),W===i.INT&&(Q=i.RGB32I)),T===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),W===i.UNSIGNED_INT&&(Q=i.RGBA32UI),W===i.BYTE&&(Q=i.RGBA8I),W===i.SHORT&&(Q=i.RGBA16I),W===i.INT&&(Q=i.RGBA32I)),T===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),T===i.RGBA){const Pt=st?Yo:se.getTransfer(J);W===i.FLOAT&&(Q=i.RGBA32F),W===i.HALF_FLOAT&&(Q=i.RGBA16F),W===i.UNSIGNED_BYTE&&(Q=Pt===pe?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function _(I,T){let W;return I?T===null||T===Di||T===Xs?W=i.DEPTH24_STENCIL8:T===Mn?W=i.DEPTH32F_STENCIL8:T===kr&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Di||T===Xs?W=i.DEPTH_COMPONENT24:T===Mn?W=i.DEPTH_COMPONENT32F:T===kr&&(W=i.DEPTH_COMPONENT16),W}function b(I,T){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==He&&I.minFilter!==Le?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function S(I){const T=I.target;T.removeEventListener("dispose",S),A(T),T.isVideoTexture&&u.delete(T)}function w(I){const T=I.target;T.removeEventListener("dispose",w),C(T)}function A(I){const T=n.get(I);if(T.__webglInit===void 0)return;const W=I.source,J=h.get(W);if(J){const st=J[T.__cacheKey];st.usedTimes--,st.usedTimes===0&&E(I),Object.keys(J).length===0&&h.delete(W)}n.remove(I)}function E(I){const T=n.get(I);i.deleteTexture(T.__webglTexture);const W=I.source,J=h.get(W);delete J[T.__cacheKey],o.memory.textures--}function C(I){const T=n.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(T.__webglFramebuffer[J]))for(let st=0;st<T.__webglFramebuffer[J].length;st++)i.deleteFramebuffer(T.__webglFramebuffer[J][st]);else i.deleteFramebuffer(T.__webglFramebuffer[J]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[J])}else{if(Array.isArray(T.__webglFramebuffer))for(let J=0;J<T.__webglFramebuffer.length;J++)i.deleteFramebuffer(T.__webglFramebuffer[J]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let J=0;J<T.__webglColorRenderbuffer.length;J++)T.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[J]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const W=I.textures;for(let J=0,st=W.length;J<st;J++){const Q=n.get(W[J]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(W[J])}n.remove(I)}let v=0;function M(){v=0}function L(){const I=v;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),v+=1,I}function N(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function F(I,T){const W=n.get(I);if(I.isVideoTexture&&ft(I),I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){const J=I.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(W,I,T);return}}e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+T)}function B(I,T){const W=n.get(I);if(I.version>0&&W.__version!==I.version){Rt(W,I,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+T)}function z(I,T){const W=n.get(I);if(I.version>0&&W.__version!==I.version){Rt(W,I,T);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+T)}function O(I,T){const W=n.get(I);if(I.version>0&&W.__version!==I.version){$(W,I,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+T)}const U={[Br]:i.REPEAT,[kn]:i.CLAMP_TO_EDGE,[Go]:i.MIRRORED_REPEAT},G={[He]:i.NEAREST,[Zd]:i.NEAREST_MIPMAP_NEAREST,[Rr]:i.NEAREST_MIPMAP_LINEAR,[Le]:i.LINEAR,[So]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},K={[ex]:i.NEVER,[ax]:i.ALWAYS,[nx]:i.LESS,[cf]:i.LEQUAL,[ix]:i.EQUAL,[ox]:i.GEQUAL,[sx]:i.GREATER,[rx]:i.NOTEQUAL};function nt(I,T){if(T.type===Mn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Le||T.magFilter===So||T.magFilter===Rr||T.magFilter===oi||T.minFilter===Le||T.minFilter===So||T.minFilter===Rr||T.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,U[T.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,U[T.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,U[T.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,G[T.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,G[T.minFilter]),T.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,K[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===He||T.minFilter!==Rr&&T.minFilter!==oi||T.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function _t(I,T){let W=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",S));const J=T.source;let st=h.get(J);st===void 0&&(st={},h.set(J,st));const Q=N(T);if(Q!==I.__cacheKey){st[Q]===void 0&&(st[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),st[Q].usedTimes++;const Pt=st[I.__cacheKey];Pt!==void 0&&(st[I.__cacheKey].usedTimes--,Pt.usedTimes===0&&E(T)),I.__cacheKey=Q,I.__webglTexture=st[Q].texture}return W}function Rt(I,T,W){let J=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(J=i.TEXTURE_3D);const st=_t(I,T),Q=T.source;e.bindTexture(J,I.__webglTexture,i.TEXTURE0+W);const Pt=n.get(Q);if(Q.version!==Pt.__version||st===!0){e.activeTexture(i.TEXTURE0+W);const mt=se.getPrimaries(se.workingColorSpace),St=T.colorSpace===wi?null:se.getPrimaries(T.colorSpace),Qt=T.colorSpace===wi||mt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let ct=x(T.image,!1,s.maxTextureSize);ct=Ut(T,ct);const wt=r.convert(T.format,T.colorSpace),Gt=r.convert(T.type);let Wt=y(T.internalFormat,wt,Gt,T.colorSpace,T.isVideoTexture);nt(J,T);let Et;const jt=T.mipmaps,Yt=T.isVideoTexture!==!0,fe=Pt.__version===void 0||st===!0,k=Q.dataReady,Mt=b(T,ct);if(T.isDepthTexture)Wt=_(T.format===Ys,T.type),fe&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Wt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Wt,ct.width,ct.height,0,wt,Gt,null));else if(T.isDataTexture)if(jt.length>0){Yt&&fe&&e.texStorage2D(i.TEXTURE_2D,Mt,Wt,jt[0].width,jt[0].height);for(let Z=0,rt=jt.length;Z<rt;Z++)Et=jt[Z],Yt?k&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Et.width,Et.height,wt,Gt,Et.data):e.texImage2D(i.TEXTURE_2D,Z,Wt,Et.width,Et.height,0,wt,Gt,Et.data);T.generateMipmaps=!1}else Yt?(fe&&e.texStorage2D(i.TEXTURE_2D,Mt,Wt,ct.width,ct.height),k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,wt,Gt,ct.data)):e.texImage2D(i.TEXTURE_2D,0,Wt,ct.width,ct.height,0,wt,Gt,ct.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Yt&&fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Wt,jt[0].width,jt[0].height,ct.depth);for(let Z=0,rt=jt.length;Z<rt;Z++)if(Et=jt[Z],T.format!==rn)if(wt!==null)if(Yt){if(k)if(T.layerUpdates.size>0){const gt=xd(Et.width,Et.height,T.format,T.type);for(const bt of T.layerUpdates){const ee=Et.data.subarray(bt*gt/Et.data.BYTES_PER_ELEMENT,(bt+1)*gt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,bt,Et.width,Et.height,1,wt,ee,0,0)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Et.width,Et.height,ct.depth,wt,Et.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Wt,Et.width,Et.height,ct.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Et.width,Et.height,ct.depth,wt,Gt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,Wt,Et.width,Et.height,ct.depth,0,wt,Gt,Et.data)}else{Yt&&fe&&e.texStorage2D(i.TEXTURE_2D,Mt,Wt,jt[0].width,jt[0].height);for(let Z=0,rt=jt.length;Z<rt;Z++)Et=jt[Z],T.format!==rn?wt!==null?Yt?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,Et.width,Et.height,wt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,Wt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?k&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Et.width,Et.height,wt,Gt,Et.data):e.texImage2D(i.TEXTURE_2D,Z,Wt,Et.width,Et.height,0,wt,Gt,Et.data)}else if(T.isDataArrayTexture)if(Yt){if(fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Wt,ct.width,ct.height,ct.depth),k)if(T.layerUpdates.size>0){const Z=xd(ct.width,ct.height,T.format,T.type);for(const rt of T.layerUpdates){const gt=ct.data.subarray(rt*Z/ct.data.BYTES_PER_ELEMENT,(rt+1)*Z/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,rt,ct.width,ct.height,1,wt,Gt,gt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,wt,Gt,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Wt,ct.width,ct.height,ct.depth,0,wt,Gt,ct.data);else if(T.isData3DTexture)Yt?(fe&&e.texStorage3D(i.TEXTURE_3D,Mt,Wt,ct.width,ct.height,ct.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,wt,Gt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Wt,ct.width,ct.height,ct.depth,0,wt,Gt,ct.data);else if(T.isFramebufferTexture){if(fe)if(Yt)e.texStorage2D(i.TEXTURE_2D,Mt,Wt,ct.width,ct.height);else{let Z=ct.width,rt=ct.height;for(let gt=0;gt<Mt;gt++)e.texImage2D(i.TEXTURE_2D,gt,Wt,Z,rt,0,wt,Gt,null),Z>>=1,rt>>=1}}else if(jt.length>0){if(Yt&&fe){const Z=vt(jt[0]);e.texStorage2D(i.TEXTURE_2D,Mt,Wt,Z.width,Z.height)}for(let Z=0,rt=jt.length;Z<rt;Z++)Et=jt[Z],Yt?k&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,wt,Gt,Et):e.texImage2D(i.TEXTURE_2D,Z,Wt,wt,Gt,Et);T.generateMipmaps=!1}else if(Yt){if(fe){const Z=vt(ct);e.texStorage2D(i.TEXTURE_2D,Mt,Wt,Z.width,Z.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Gt,ct)}else e.texImage2D(i.TEXTURE_2D,0,Wt,wt,Gt,ct);m(T)&&g(J),Pt.__version=Q.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function $(I,T,W){if(T.image.length!==6)return;const J=_t(I,T),st=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+W);const Q=n.get(st);if(st.version!==Q.__version||J===!0){e.activeTexture(i.TEXTURE0+W);const Pt=se.getPrimaries(se.workingColorSpace),mt=T.colorSpace===wi?null:se.getPrimaries(T.colorSpace),St=T.colorSpace===wi||Pt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Qt=T.isCompressedTexture||T.image[0].isCompressedTexture,ct=T.image[0]&&T.image[0].isDataTexture,wt=[];for(let rt=0;rt<6;rt++)!Qt&&!ct?wt[rt]=x(T.image[rt],!0,s.maxCubemapSize):wt[rt]=ct?T.image[rt].image:T.image[rt],wt[rt]=Ut(T,wt[rt]);const Gt=wt[0],Wt=r.convert(T.format,T.colorSpace),Et=r.convert(T.type),jt=y(T.internalFormat,Wt,Et,T.colorSpace),Yt=T.isVideoTexture!==!0,fe=Q.__version===void 0||J===!0,k=st.dataReady;let Mt=b(T,Gt);nt(i.TEXTURE_CUBE_MAP,T);let Z;if(Qt){Yt&&fe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,jt,Gt.width,Gt.height);for(let rt=0;rt<6;rt++){Z=wt[rt].mipmaps;for(let gt=0;gt<Z.length;gt++){const bt=Z[gt];T.format!==rn?Wt!==null?Yt?k&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,gt,0,0,bt.width,bt.height,Wt,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,gt,jt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,gt,0,0,bt.width,bt.height,Wt,Et,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,gt,jt,bt.width,bt.height,0,Wt,Et,bt.data)}}}else{if(Z=T.mipmaps,Yt&&fe){Z.length>0&&Mt++;const rt=vt(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,jt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(ct){Yt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,wt[rt].width,wt[rt].height,Wt,Et,wt[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,jt,wt[rt].width,wt[rt].height,0,Wt,Et,wt[rt].data);for(let gt=0;gt<Z.length;gt++){const ee=Z[gt].image[rt].image;Yt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,gt+1,0,0,ee.width,ee.height,Wt,Et,ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,gt+1,jt,ee.width,ee.height,0,Wt,Et,ee.data)}}else{Yt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Wt,Et,wt[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,jt,Wt,Et,wt[rt]);for(let gt=0;gt<Z.length;gt++){const bt=Z[gt];Yt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,gt+1,0,0,Wt,Et,bt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,gt+1,jt,Wt,Et,bt.image[rt])}}}m(T)&&g(i.TEXTURE_CUBE_MAP),Q.__version=st.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function tt(I,T,W,J,st,Q){const Pt=r.convert(W.format,W.colorSpace),mt=r.convert(W.type),St=y(W.internalFormat,Pt,mt,W.colorSpace);if(!n.get(T).__hasExternalTextures){const ct=Math.max(1,T.width>>Q),wt=Math.max(1,T.height>>Q);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,Q,St,ct,wt,T.depth,0,Pt,mt,null):e.texImage2D(st,Q,St,ct,wt,0,Pt,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),at(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,st,n.get(W).__webglTexture,0,dt(T)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,st,n.get(W).__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(I,T,W){if(i.bindRenderbuffer(i.RENDERBUFFER,I),T.depthBuffer){const J=T.depthTexture,st=J&&J.isDepthTexture?J.type:null,Q=_(T.stencilBuffer,st),Pt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=dt(T);at(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,Q,T.width,T.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,Q,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Q,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,I)}else{const J=T.textures;for(let st=0;st<J.length;st++){const Q=J[st],Pt=r.convert(Q.format,Q.colorSpace),mt=r.convert(Q.type),St=y(Q.internalFormat,Pt,mt,Q.colorSpace),Qt=dt(T);W&&at(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt,St,T.width,T.height):at(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt,St,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,St,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),F(T.depthTexture,0);const J=n.get(T.depthTexture).__webglTexture,st=dt(T);if(T.depthTexture.format===Bs)at(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(T.depthTexture.format===Ys)at(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function At(I){const T=n.get(I),W=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const J=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),J){const st=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,J.removeEventListener("dispose",st)};J.addEventListener("dispose",st),T.__depthDisposeCallback=st}T.__boundDepthTexture=J}if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");ot(T.__webglFramebuffer,I)}else if(W){T.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[J]),T.__webglDepthbuffer[J]===void 0)T.__webglDepthbuffer[J]=i.createRenderbuffer(),ut(T.__webglDepthbuffer[J],I,!1);else{const st=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=T.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),ut(T.__webglDepthbuffer,I,!1);else{const J=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,st)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(I,T,W){const J=n.get(I);T!==void 0&&tt(J.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&At(I)}function Lt(I){const T=I.texture,W=n.get(I),J=n.get(T);I.addEventListener("dispose",w);const st=I.textures,Q=I.isWebGLCubeRenderTarget===!0,Pt=st.length>1;if(Pt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=T.version,o.memory.textures++),Q){W.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[mt]=[];for(let St=0;St<T.mipmaps.length;St++)W.__webglFramebuffer[mt][St]=i.createFramebuffer()}else W.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let mt=0;mt<T.mipmaps.length;mt++)W.__webglFramebuffer[mt]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let mt=0,St=st.length;mt<St;mt++){const Qt=n.get(st[mt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&at(I)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let mt=0;mt<st.length;mt++){const St=st[mt];W.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[mt]);const Qt=r.convert(St.format,St.colorSpace),ct=r.convert(St.type),wt=y(St.internalFormat,Qt,ct,St.colorSpace,I.isXRRenderTarget===!0),Gt=dt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,wt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,W.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(W.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),nt(i.TEXTURE_CUBE_MAP,T);for(let mt=0;mt<6;mt++)if(T.mipmaps&&T.mipmaps.length>0)for(let St=0;St<T.mipmaps.length;St++)tt(W.__webglFramebuffer[mt][St],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,St);else tt(W.__webglFramebuffer[mt],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);m(T)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let mt=0,St=st.length;mt<St;mt++){const Qt=st[mt],ct=n.get(Qt);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),nt(i.TEXTURE_2D,Qt),tt(W.__webglFramebuffer,I,Qt,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,0),m(Qt)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(mt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,J.__webglTexture),nt(mt,T),T.mipmaps&&T.mipmaps.length>0)for(let St=0;St<T.mipmaps.length;St++)tt(W.__webglFramebuffer[St],I,T,i.COLOR_ATTACHMENT0,mt,St);else tt(W.__webglFramebuffer,I,T,i.COLOR_ATTACHMENT0,mt,0);m(T)&&g(mt),e.unbindTexture()}I.depthBuffer&&At(I)}function Bt(I){const T=I.textures;for(let W=0,J=T.length;W<J;W++){const st=T[W];if(m(st)){const Q=I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Pt=n.get(st).__webglTexture;e.bindTexture(Q,Pt),g(Q),e.unbindTexture()}}}const j=[],D=[];function ht(I){if(I.samples>0){if(at(I)===!1){const T=I.textures,W=I.width,J=I.height;let st=i.COLOR_BUFFER_BIT;const Q=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(I),mt=T.length>1;if(mt)for(let St=0;St<T.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let St=0;St<T.length;St++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[St]);const Qt=n.get(T[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qt,0)}i.blitFramebuffer(0,0,W,J,0,0,W,J,st,i.NEAREST),c===!0&&(j.length=0,D.length=0,j.push(i.COLOR_ATTACHMENT0+St),I.depthBuffer&&I.resolveDepthBuffer===!1&&(j.push(Q),D.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,j))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let St=0;St<T.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[St]);const Qt=n.get(T[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,Qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const T=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function dt(I){return Math.min(s.maxSamples,I.samples)}function at(I){const T=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ft(I){const T=o.render.frame;u.get(I)!==T&&(u.set(I,T),I.update())}function Ut(I,T){const W=I.colorSpace,J=I.format,st=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||W!==Fi&&W!==wi&&(se.getTransfer(W)===pe?(J!==rn||st!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),T}function vt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=M,this.setTexture2D=F,this.setTexture2DArray=B,this.setTexture3D=z,this.setTextureCube=O,this.rebindTextures=Tt,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=at}function Sx(i,t){function e(n,s=wi){let r;const o=se.getTransfer(s);if(n===hi)return i.UNSIGNED_BYTE;if(n===tu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===eu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Kd)return i.BYTE;if(n===Jd)return i.SHORT;if(n===kr)return i.UNSIGNED_SHORT;if(n===jl)return i.INT;if(n===Di)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===Kr)return i.HALF_FLOAT;if(n===jd)return i.ALPHA;if(n===tf)return i.RGB;if(n===rn)return i.RGBA;if(n===ef)return i.LUMINANCE;if(n===nf)return i.LUMINANCE_ALPHA;if(n===Bs)return i.DEPTH_COMPONENT;if(n===Ys)return i.DEPTH_STENCIL;if(n===nu)return i.RED;if(n===ua)return i.RED_INTEGER;if(n===sf)return i.RG;if(n===iu)return i.RG_INTEGER;if(n===su)return i.RGBA_INTEGER;if(n===wo||n===Ao||n===Eo||n===To)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fl||n===pl||n===ml||n===gl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xl||n===_l||n===yl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xl||n===_l)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vl||n===Ml||n===bl||n===Sl||n===wl||n===Al||n===El||n===Tl||n===Cl||n===Rl||n===Pl||n===Il||n===Ll||n===Dl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===vl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ml)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Al)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===El)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Il)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ll)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Dl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Co||n===Nl||n===Ul)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Co)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rf||n===Ol||n===Fl||n===zl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Co)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class wx extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Re extends ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jw={type:"move"};class xh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),g=this._getHandJoint(l,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;l.inputState.pinching&&h>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jw)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const tA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eA=`
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

}`;class nA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ae,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Vn({vertexShader:tA,fragmentShader:eA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Vt(new js(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iA extends di{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,p=null;const x=new nA,m=e.getContextAttributes();let g=null,y=null;const _=[],b=[],S=new it;let w=null;const A=new Be;A.layers.enable(1),A.viewport=new Jt;const E=new Be;E.layers.enable(2),E.viewport=new Jt;const C=[A,E],v=new wx;v.layers.enable(1),v.layers.enable(2);let M=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let tt=_[$];return tt===void 0&&(tt=new xh,_[$]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function($){let tt=_[$];return tt===void 0&&(tt=new xh,_[$]=tt),tt.getGripSpace()},this.getHand=function($){let tt=_[$];return tt===void 0&&(tt=new xh,_[$]=tt),tt.getHandSpace()};function N($){const tt=b.indexOf($.inputSource);if(tt===-1)return;const ut=_[tt];ut!==void 0&&(ut.update($.inputSource,$.frame,l||o),ut.dispatchEvent({type:$.type,data:$.inputSource}))}function F(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",B);for(let $=0;$<_.length;$++){const tt=b[$];tt!==null&&(b[$]=null,_[$].disconnect(tt))}M=null,L=null,x.reset(),t.setRenderTarget(g),f=null,h=null,d=null,s=null,y=null,Rt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",F),s.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(S),s.renderState.layers===void 0){const tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Qn(f.framebufferWidth,f.framebufferHeight,{format:rn,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,ut=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?Ys:Bs,ut=m.stencil?Xs:Di);const At={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};d=new XRWebGLBinding(s,e),h=d.createProjectionLayer(At),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new Qn(h.textureWidth,h.textureHeight,{format:rn,type:hi,depthTexture:new pf(h.textureWidth,h.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Rt.setContext(s),Rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function B($){for(let tt=0;tt<$.removed.length;tt++){const ut=$.removed[tt],ot=b.indexOf(ut);ot>=0&&(b[ot]=null,_[ot].disconnect(ut))}for(let tt=0;tt<$.added.length;tt++){const ut=$.added[tt];let ot=b.indexOf(ut);if(ot===-1){for(let Tt=0;Tt<_.length;Tt++)if(Tt>=b.length){b.push(ut),ot=Tt;break}else if(b[Tt]===null){b[Tt]=ut,ot=Tt;break}if(ot===-1)break}const At=_[ot];At&&At.connect(ut)}}const z=new P,O=new P;function U($,tt,ut){z.setFromMatrixPosition(tt.matrixWorld),O.setFromMatrixPosition(ut.matrixWorld);const ot=z.distanceTo(O),At=tt.projectionMatrix.elements,Tt=ut.projectionMatrix.elements,Lt=At[14]/(At[10]-1),Bt=At[14]/(At[10]+1),j=(At[9]+1)/At[5],D=(At[9]-1)/At[5],ht=(At[8]-1)/At[0],dt=(Tt[8]+1)/Tt[0],at=Lt*ht,ft=Lt*dt,Ut=ot/(-ht+dt),vt=Ut*-ht;if(tt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(vt),$.translateZ(Ut),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),At[10]===-1)$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const I=Lt+Ut,T=Bt+Ut,W=at-vt,J=ft+(ot-vt),st=j*Bt/T*I,Q=D*Bt/T*I;$.projectionMatrix.makePerspective(W,J,st,Q,I,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function G($,tt){tt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(tt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let tt=$.near,ut=$.far;x.texture!==null&&(x.depthNear>0&&(tt=x.depthNear),x.depthFar>0&&(ut=x.depthFar)),v.near=E.near=A.near=tt,v.far=E.far=A.far=ut,(M!==v.near||L!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),M=v.near,L=v.far);const ot=$.parent,At=v.cameras;G(v,ot);for(let Tt=0;Tt<At.length;Tt++)G(At[Tt],ot);At.length===2?U(v,A,E):v.projectionMatrix.copy(A.projectionMatrix),K($,v,ot)};function K($,tt,ut){ut===null?$.matrix.copy(tt.matrixWorld):($.matrix.copy(ut.matrixWorld),$.matrix.invert(),$.matrix.multiply(tt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Hr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function($){c=$,h!==null&&(h.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let nt=null;function _t($,tt){if(u=tt.getViewerPose(l||o),p=tt,u!==null){const ut=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let ot=!1;ut.length!==v.cameras.length&&(v.cameras.length=0,ot=!0);for(let Tt=0;Tt<ut.length;Tt++){const Lt=ut[Tt];let Bt=null;if(f!==null)Bt=f.getViewport(Lt);else{const D=d.getViewSubImage(h,Lt);Bt=D.viewport,Tt===0&&(t.setRenderTargetTextures(y,D.colorTexture,h.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(y))}let j=C[Tt];j===void 0&&(j=new Be,j.layers.enable(Tt),j.viewport=new Jt,C[Tt]=j),j.matrix.fromArray(Lt.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Lt.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),Tt===0&&(v.matrix.copy(j.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ot===!0&&v.cameras.push(j)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")){const Tt=d.getDepthInformation(ut[0]);Tt&&Tt.isValid&&Tt.texture&&x.init(t,Tt,s.renderState)}}for(let ut=0;ut<_.length;ut++){const ot=b[ut],At=_[ut];ot!==null&&At!==void 0&&At.update(ot,tt,l||o)}nt&&nt($,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),p=null}const Rt=new _x;Rt.setAnimationLoop(_t),this.setAnimationLoop=function($){nt=$},this.dispose=function(){}}}const gs=new Sn,sA=new Nt;function rA(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,px(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,_,b){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g)):g.isMeshStandardMaterial?(r(m,g),h(m,g),g.isMeshPhysicalMaterial&&f(m,g,b)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,y,_):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Ke&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Ke&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const y=t.get(g),_=y.envMap,b=y.envMapRotation;_&&(m.envMap.value=_,gs.copy(b),gs.x*=-1,gs.y*=-1,gs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),m.envMapRotation.value.setFromMatrix4(sA.makeRotationFromEuler(gs)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,y,_){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=_*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ke&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){const y=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function oA(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,_){const b=_.program;n.uniformBlockBinding(y,b)}function l(y,_){let b=s[y.id];b===void 0&&(p(y),b=u(y),s[y.id]=b,y.addEventListener("dispose",m));const S=_.program;n.updateUBOMapping(y,S);const w=t.render.frame;r[y.id]!==w&&(h(y),r[y.id]=w)}function u(y){const _=d();y.__bindingPointIndex=_;const b=i.createBuffer(),S=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,S,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,b),b}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const _=s[y.id],b=y.uniforms,S=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let w=0,A=b.length;w<A;w++){const E=Array.isArray(b[w])?b[w]:[b[w]];for(let C=0,v=E.length;C<v;C++){const M=E[C];if(f(M,w,C,S)===!0){const L=M.__offset,N=Array.isArray(M.value)?M.value:[M.value];let F=0;for(let B=0;B<N.length;B++){const z=N[B],O=x(z);typeof z=="number"||typeof z=="boolean"?(M.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,L+F,M.__data)):z.isMatrix3?(M.__data[0]=z.elements[0],M.__data[1]=z.elements[1],M.__data[2]=z.elements[2],M.__data[3]=0,M.__data[4]=z.elements[3],M.__data[5]=z.elements[4],M.__data[6]=z.elements[5],M.__data[7]=0,M.__data[8]=z.elements[6],M.__data[9]=z.elements[7],M.__data[10]=z.elements[8],M.__data[11]=0):(z.toArray(M.__data,F),F+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,M.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,_,b,S){const w=y.value,A=_+"_"+b;if(S[A]===void 0)return typeof w=="number"||typeof w=="boolean"?S[A]=w:S[A]=w.clone(),!0;{const E=S[A];if(typeof w=="number"||typeof w=="boolean"){if(E!==w)return S[A]=w,!0}else if(E.equals(w)===!1)return E.copy(w),!0}return!1}function p(y){const _=y.uniforms;let b=0;const S=16;for(let A=0,E=_.length;A<E;A++){const C=Array.isArray(_[A])?_[A]:[_[A]];for(let v=0,M=C.length;v<M;v++){const L=C[v],N=Array.isArray(L.value)?L.value:[L.value];for(let F=0,B=N.length;F<B;F++){const z=N[F],O=x(z),U=b%S,G=U%O.boundary,K=U+G;b+=G,K!==0&&S-K<O.storage&&(b+=S-K),L.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=O.storage}}}const w=b%S;return w>0&&(b+=S-w),y.__size=b,y.__cache={},this}function x(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){const _=y.target;_.removeEventListener("dispose",m);const b=o.indexOf(_.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function g(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:g}}class Ax{constructor(t={}){const{canvas:e=ux(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const f=new Uint32Array(4),p=new Int32Array(4);let x=null,m=null;const g=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mn,this.toneMapping=Ri,this.toneMappingExposure=1;const _=this;let b=!1,S=0,w=0,A=null,E=-1,C=null;const v=new Jt,M=new Jt;let L=null;const N=new q(0);let F=0,B=e.width,z=e.height,O=1,U=null,G=null;const K=new Jt(0,0,B,z),nt=new Jt(0,0,B,z);let _t=!1;const Rt=new fa;let $=!1,tt=!1;const ut=new Nt,ot=new Nt,At=new P,Tt=new Jt,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function j(){return A===null?O:1}let D=n;function ht(R,H){return e.getContext(R,H)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jl}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),D===null){const H="webgl2";if(D=ht(H,R),D===null)throw ht(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let dt,at,ft,Ut,vt,I,T,W,J,st,Q,Pt,mt,St,Qt,ct,wt,Gt,Wt,Et,jt,Yt,fe,k;function Mt(){dt=new dS(D),dt.init(),Yt=new Sx(D,dt),at=new oS(D,dt,t,Yt),ft=new Yw(D),at.reverseDepthBuffer&&ft.buffers.depth.setReversed(!0),Ut=new mS(D),vt=new Dw,I=new Qw(D,dt,ft,vt,at,Yt,Ut),T=new cS(_),W=new hS(_),J=new bM(D),fe=new sS(D,J),st=new fS(D,J,Ut,fe),Q=new xS(D,st,J,Ut),Wt=new gS(D,at,I),ct=new aS(vt),Pt=new Lw(_,T,W,dt,at,fe,ct),mt=new rA(_,vt),St=new Uw,Qt=new Hw(dt),Gt=new iS(_,T,W,ft,Q,h,c),wt=new Ww(_,Q,at),k=new oA(D,Ut,at,ft),Et=new rS(D,dt,Ut),jt=new pS(D,dt,Ut),Ut.programs=Pt.programs,_.capabilities=at,_.extensions=dt,_.properties=vt,_.renderLists=St,_.shadowMap=wt,_.state=ft,_.info=Ut}Mt();const Z=new iA(_,D);this.xr=Z,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const R=dt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=dt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(R){R!==void 0&&(O=R,this.setSize(B,z,!1))},this.getSize=function(R){return R.set(B,z)},this.setSize=function(R,H,X=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,z=H,e.width=Math.floor(R*O),e.height=Math.floor(H*O),X===!0&&(e.style.width=R+"px",e.style.height=H+"px"),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(B*O,z*O).floor()},this.setDrawingBufferSize=function(R,H,X){B=R,z=H,O=X,e.width=Math.floor(R*X),e.height=Math.floor(H*X),this.setViewport(0,0,R,H)},this.getCurrentViewport=function(R){return R.copy(v)},this.getViewport=function(R){return R.copy(K)},this.setViewport=function(R,H,X,Y){R.isVector4?K.set(R.x,R.y,R.z,R.w):K.set(R,H,X,Y),ft.viewport(v.copy(K).multiplyScalar(O).round())},this.getScissor=function(R){return R.copy(nt)},this.setScissor=function(R,H,X,Y){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,H,X,Y),ft.scissor(M.copy(nt).multiplyScalar(O).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(R){ft.setScissorTest(_t=R)},this.setOpaqueSort=function(R){U=R},this.setTransparentSort=function(R){G=R},this.getClearColor=function(R){return R.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(R=!0,H=!0,X=!0){let Y=0;if(R){let V=!1;if(A!==null){const lt=A.texture.format;V=lt===su||lt===iu||lt===ua}if(V){const lt=A.texture.type,xt=lt===hi||lt===Di||lt===kr||lt===Xs||lt===tu||lt===eu,Ct=Gt.getClearColor(),It=Gt.getClearAlpha(),zt=Ct.r,kt=Ct.g,Dt=Ct.b;xt?(f[0]=zt,f[1]=kt,f[2]=Dt,f[3]=It,D.clearBufferuiv(D.COLOR,0,f)):(p[0]=zt,p[1]=kt,p[2]=Dt,p[3]=It,D.clearBufferiv(D.COLOR,0,p))}else Y|=D.COLOR_BUFFER_BIT}H&&(Y|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),X&&(Y|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),St.dispose(),Qt.dispose(),vt.dispose(),T.dispose(),W.dispose(),Q.dispose(),fe.dispose(),k.dispose(),Pt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",op),Z.removeEventListener("sessionend",ap),us.stop()};function rt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const R=Ut.autoReset,H=wt.enabled,X=wt.autoUpdate,Y=wt.needsUpdate,V=wt.type;Mt(),Ut.autoReset=R,wt.enabled=H,wt.autoUpdate=X,wt.needsUpdate=Y,wt.type=V}function bt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ee(R){const H=R.target;H.removeEventListener("dispose",ee),Pe(H)}function Pe(R){dn(R),vt.remove(R)}function dn(R){const H=vt.get(R).programs;H!==void 0&&(H.forEach(function(X){Pt.releaseProgram(X)}),R.isShaderMaterial&&Pt.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,X,Y,V,lt){H===null&&(H=Lt);const xt=V.isMesh&&V.matrixWorld.determinant()<0,Ct=Hy(R,H,X,Y,V);ft.setMaterial(Y,xt);let It=X.index,zt=1;if(Y.wireframe===!0){if(It=st.getWireframeAttribute(X),It===void 0)return;zt=2}const kt=X.drawRange,Dt=X.attributes.position;let ce=kt.start*zt,xe=(kt.start+kt.count)*zt;lt!==null&&(ce=Math.max(ce,lt.start*zt),xe=Math.min(xe,(lt.start+lt.count)*zt)),It!==null?(ce=Math.max(ce,0),xe=Math.min(xe,It.count)):Dt!=null&&(ce=Math.max(ce,0),xe=Math.min(xe,Dt.count));const be=xe-ce;if(be<0||be===1/0)return;fe.setup(V,Y,Ct,X,It);let En,oe=Et;if(It!==null&&(En=J.get(It),oe=jt,oe.setIndex(En)),V.isMesh)Y.wireframe===!0?(ft.setLineWidth(Y.wireframeLinewidth*j()),oe.setMode(D.LINES)):oe.setMode(D.TRIANGLES);else if(V.isLine){let Ot=Y.linewidth;Ot===void 0&&(Ot=1),ft.setLineWidth(Ot*j()),V.isLineSegments?oe.setMode(D.LINES):V.isLineLoop?oe.setMode(D.LINE_LOOP):oe.setMode(D.LINE_STRIP)}else V.isPoints?oe.setMode(D.POINTS):V.isSprite&&oe.setMode(D.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)oe.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))oe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ot=V._multiDrawStarts,Ve=V._multiDrawCounts,ae=V._multiDrawCount,Wn=It?J.get(It).bytesPerElement:1,or=vt.get(Y).currentProgram.getUniforms();for(let Tn=0;Tn<ae;Tn++)or.setValue(D,"_gl_DrawID",Tn),oe.render(Ot[Tn]/Wn,Ve[Tn])}else if(V.isInstancedMesh)oe.renderInstances(ce,be,V.count);else if(X.isInstancedBufferGeometry){const Ot=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ve=Math.min(X.instanceCount,Ot);oe.renderInstances(ce,be,Ve)}else oe.render(ce,be)};function re(R,H,X){R.transparent===!0&&R.side===ge&&R.forceSinglePass===!1?(R.side=Ke,R.needsUpdate=!0,Pa(R,H,X),R.side=Ii,R.needsUpdate=!0,Pa(R,H,X),R.side=ge):Pa(R,H,X)}this.compile=function(R,H,X=null){X===null&&(X=R),m=Qt.get(X),m.init(H),y.push(m),X.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),R!==X&&R.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights();const Y=new Set;return R.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const lt=V.material;if(lt)if(Array.isArray(lt))for(let xt=0;xt<lt.length;xt++){const Ct=lt[xt];re(Ct,X,V),Y.add(Ct)}else re(lt,X,V),Y.add(lt)}),y.pop(),m=null,Y},this.compileAsync=function(R,H,X=null){const Y=this.compile(R,H,X);return new Promise(V=>{function lt(){if(Y.forEach(function(xt){vt.get(xt).currentProgram.isReady()&&Y.delete(xt)}),Y.size===0){V(R);return}setTimeout(lt,10)}dt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let fn=null;function gi(R){fn&&fn(R)}function op(){us.stop()}function ap(){us.start()}const us=new _x;us.setAnimationLoop(gi),typeof self<"u"&&us.setContext(self),this.setAnimationLoop=function(R){fn=R,Z.setAnimationLoop(R),R===null?us.stop():us.start()},Z.addEventListener("sessionstart",op),Z.addEventListener("sessionend",ap),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(H),H=Z.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,H,A),m=Qt.get(R,y.length),m.init(H),y.push(m),ot.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Rt.setFromProjectionMatrix(ot),tt=this.localClippingEnabled,$=ct.init(this.clippingPlanes,tt),x=St.get(R,g.length),x.init(),g.push(x),Z.enabled===!0&&Z.isPresenting===!0){const lt=_.xr.getDepthSensingMesh();lt!==null&&ku(lt,H,-1/0,_.sortObjects)}ku(R,H,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(U,G),Bt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Bt&&Gt.addToRenderList(x,R),this.info.render.frame++,$===!0&&ct.beginShadows();const X=m.state.shadowsArray;wt.render(X,R,H),$===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=x.opaque,V=x.transmissive;if(m.setupLights(),H.isArrayCamera){const lt=H.cameras;if(V.length>0)for(let xt=0,Ct=lt.length;xt<Ct;xt++){const It=lt[xt];lp(Y,V,R,It)}Bt&&Gt.render(R);for(let xt=0,Ct=lt.length;xt<Ct;xt++){const It=lt[xt];cp(x,R,It,It.viewport)}}else V.length>0&&lp(Y,V,R,H),Bt&&Gt.render(R),cp(x,R,H);A!==null&&(I.updateMultisampleRenderTarget(A),I.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(_,R,H),fe.resetDefaultState(),E=-1,C=null,y.pop(),y.length>0?(m=y[y.length-1],$===!0&&ct.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,g.pop(),g.length>0?x=g[g.length-1]:x=null};function ku(R,H,X,Y){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)X=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Rt.intersectsSprite(R)){Y&&Tt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ot);const xt=Q.update(R),Ct=R.material;Ct.visible&&x.push(R,xt,Ct,X,Tt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Rt.intersectsObject(R))){const xt=Q.update(R),Ct=R.material;if(Y&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Tt.copy(R.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Tt.copy(xt.boundingSphere.center)),Tt.applyMatrix4(R.matrixWorld).applyMatrix4(ot)),Array.isArray(Ct)){const It=xt.groups;for(let zt=0,kt=It.length;zt<kt;zt++){const Dt=It[zt],ce=Ct[Dt.materialIndex];ce&&ce.visible&&x.push(R,xt,ce,X,Tt.z,Dt)}}else Ct.visible&&x.push(R,xt,Ct,X,Tt.z,null)}}const lt=R.children;for(let xt=0,Ct=lt.length;xt<Ct;xt++)ku(lt[xt],H,X,Y)}function cp(R,H,X,Y){const V=R.opaque,lt=R.transmissive,xt=R.transparent;m.setupLightsView(X),$===!0&&ct.setGlobalState(_.clippingPlanes,X),Y&&ft.viewport(v.copy(Y)),V.length>0&&Ra(V,H,X),lt.length>0&&Ra(lt,H,X),xt.length>0&&Ra(xt,H,X),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function lp(R,H,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new Qn(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?Kr:hi,minFilter:oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));const lt=m.state.transmissionRenderTarget[Y.id],xt=Y.viewport||v;lt.setSize(xt.z,xt.w);const Ct=_.getRenderTarget();_.setRenderTarget(lt),_.getClearColor(N),F=_.getClearAlpha(),F<1&&_.setClearColor(16777215,.5),_.clear(),Bt&&Gt.render(X);const It=_.toneMapping;_.toneMapping=Ri;const zt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),$===!0&&ct.setGlobalState(_.clippingPlanes,Y),Ra(R,X,Y),I.updateMultisampleRenderTarget(lt),I.updateRenderTargetMipmap(lt),dt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Dt=0,ce=H.length;Dt<ce;Dt++){const xe=H[Dt],be=xe.object,En=xe.geometry,oe=xe.material,Ot=xe.group;if(oe.side===ge&&be.layers.test(Y.layers)){const Ve=oe.side;oe.side=Ke,oe.needsUpdate=!0,up(be,X,Y,En,oe,Ot),oe.side=Ve,oe.needsUpdate=!0,kt=!0}}kt===!0&&(I.updateMultisampleRenderTarget(lt),I.updateRenderTargetMipmap(lt))}_.setRenderTarget(Ct),_.setClearColor(N,F),zt!==void 0&&(Y.viewport=zt),_.toneMapping=It}function Ra(R,H,X){const Y=H.isScene===!0?H.overrideMaterial:null;for(let V=0,lt=R.length;V<lt;V++){const xt=R[V],Ct=xt.object,It=xt.geometry,zt=Y===null?xt.material:Y,kt=xt.group;Ct.layers.test(X.layers)&&up(Ct,H,X,It,zt,kt)}}function up(R,H,X,Y,V,lt){R.onBeforeRender(_,H,X,Y,V,lt),R.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),V.onBeforeRender(_,H,X,Y,R,lt),V.transparent===!0&&V.side===ge&&V.forceSinglePass===!1?(V.side=Ke,V.needsUpdate=!0,_.renderBufferDirect(X,H,Y,V,R,lt),V.side=Ii,V.needsUpdate=!0,_.renderBufferDirect(X,H,Y,V,R,lt),V.side=ge):_.renderBufferDirect(X,H,Y,V,R,lt),R.onAfterRender(_,H,X,Y,V,lt)}function Pa(R,H,X){H.isScene!==!0&&(H=Lt);const Y=vt.get(R),V=m.state.lights,lt=m.state.shadowsArray,xt=V.state.version,Ct=Pt.getParameters(R,V.state,lt,H,X),It=Pt.getProgramCacheKey(Ct);let zt=Y.programs;Y.environment=R.isMeshStandardMaterial?H.environment:null,Y.fog=H.fog,Y.envMap=(R.isMeshStandardMaterial?W:T).get(R.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,zt===void 0&&(R.addEventListener("dispose",ee),zt=new Map,Y.programs=zt);let kt=zt.get(It);if(kt!==void 0){if(Y.currentProgram===kt&&Y.lightsStateVersion===xt)return dp(R,Ct),kt}else Ct.uniforms=Pt.getUniforms(R),R.onBeforeCompile(Ct,_),kt=Pt.acquireProgram(Ct,It),zt.set(It,kt),Y.uniforms=Ct.uniforms;const Dt=Y.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Dt.clippingPlanes=ct.uniform),dp(R,Ct),Y.needsLights=Gy(R),Y.lightsStateVersion=xt,Y.needsLights&&(Dt.ambientLightColor.value=V.state.ambient,Dt.lightProbe.value=V.state.probe,Dt.directionalLights.value=V.state.directional,Dt.directionalLightShadows.value=V.state.directionalShadow,Dt.spotLights.value=V.state.spot,Dt.spotLightShadows.value=V.state.spotShadow,Dt.rectAreaLights.value=V.state.rectArea,Dt.ltc_1.value=V.state.rectAreaLTC1,Dt.ltc_2.value=V.state.rectAreaLTC2,Dt.pointLights.value=V.state.point,Dt.pointLightShadows.value=V.state.pointShadow,Dt.hemisphereLights.value=V.state.hemi,Dt.directionalShadowMap.value=V.state.directionalShadowMap,Dt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Dt.spotShadowMap.value=V.state.spotShadowMap,Dt.spotLightMatrix.value=V.state.spotLightMatrix,Dt.spotLightMap.value=V.state.spotLightMap,Dt.pointShadowMap.value=V.state.pointShadowMap,Dt.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=kt,Y.uniformsList=null,kt}function hp(R){if(R.uniformsList===null){const H=R.currentProgram.getUniforms();R.uniformsList=Hc.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function dp(R,H){const X=vt.get(R);X.outputColorSpace=H.outputColorSpace,X.batching=H.batching,X.batchingColor=H.batchingColor,X.instancing=H.instancing,X.instancingColor=H.instancingColor,X.instancingMorph=H.instancingMorph,X.skinning=H.skinning,X.morphTargets=H.morphTargets,X.morphNormals=H.morphNormals,X.morphColors=H.morphColors,X.morphTargetsCount=H.morphTargetsCount,X.numClippingPlanes=H.numClippingPlanes,X.numIntersection=H.numClipIntersection,X.vertexAlphas=H.vertexAlphas,X.vertexTangents=H.vertexTangents,X.toneMapping=H.toneMapping}function Hy(R,H,X,Y,V){H.isScene!==!0&&(H=Lt),I.resetTextureUnits();const lt=H.fog,xt=Y.isMeshStandardMaterial?H.environment:null,Ct=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Fi,It=(Y.isMeshStandardMaterial?W:T).get(Y.envMap||xt),zt=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,kt=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Dt=!!X.morphAttributes.position,ce=!!X.morphAttributes.normal,xe=!!X.morphAttributes.color;let be=Ri;Y.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(be=_.toneMapping);const En=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,oe=En!==void 0?En.length:0,Ot=vt.get(Y),Ve=m.state.lights;if($===!0&&(tt===!0||R!==C)){const Un=R===C&&Y.id===E;ct.setState(Y,R,Un)}let ae=!1;Y.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Ve.state.version||Ot.outputColorSpace!==Ct||V.isBatchedMesh&&Ot.batching===!1||!V.isBatchedMesh&&Ot.batching===!0||V.isBatchedMesh&&Ot.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ot.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ot.instancing===!1||!V.isInstancedMesh&&Ot.instancing===!0||V.isSkinnedMesh&&Ot.skinning===!1||!V.isSkinnedMesh&&Ot.skinning===!0||V.isInstancedMesh&&Ot.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ot.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ot.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ot.instancingMorph===!1&&V.morphTexture!==null||Ot.envMap!==It||Y.fog===!0&&Ot.fog!==lt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==ct.numPlanes||Ot.numIntersection!==ct.numIntersection)||Ot.vertexAlphas!==zt||Ot.vertexTangents!==kt||Ot.morphTargets!==Dt||Ot.morphNormals!==ce||Ot.morphColors!==xe||Ot.toneMapping!==be||Ot.morphTargetsCount!==oe)&&(ae=!0):(ae=!0,Ot.__version=Y.version);let Wn=Ot.currentProgram;ae===!0&&(Wn=Pa(Y,H,V));let or=!1,Tn=!1,Hu=!1;const Ee=Wn.getUniforms(),ki=Ot.uniforms;if(ft.useProgram(Wn.program)&&(or=!0,Tn=!0,Hu=!0),Y.id!==E&&(E=Y.id,Tn=!0),or||C!==R){at.reverseDepthBuffer?(ut.copy(R.projectionMatrix),Yv(ut),qv(ut),Ee.setValue(D,"projectionMatrix",ut)):Ee.setValue(D,"projectionMatrix",R.projectionMatrix),Ee.setValue(D,"viewMatrix",R.matrixWorldInverse);const Un=Ee.map.cameraPosition;Un!==void 0&&Un.setValue(D,At.setFromMatrixPosition(R.matrixWorld)),at.logarithmicDepthBuffer&&Ee.setValue(D,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ee.setValue(D,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,Tn=!0,Hu=!0)}if(V.isSkinnedMesh){Ee.setOptional(D,V,"bindMatrix"),Ee.setOptional(D,V,"bindMatrixInverse");const Un=V.skeleton;Un&&(Un.boneTexture===null&&Un.computeBoneTexture(),Ee.setValue(D,"boneTexture",Un.boneTexture,I))}V.isBatchedMesh&&(Ee.setOptional(D,V,"batchingTexture"),Ee.setValue(D,"batchingTexture",V._matricesTexture,I),Ee.setOptional(D,V,"batchingIdTexture"),Ee.setValue(D,"batchingIdTexture",V._indirectTexture,I),Ee.setOptional(D,V,"batchingColorTexture"),V._colorsTexture!==null&&Ee.setValue(D,"batchingColorTexture",V._colorsTexture,I));const Vu=X.morphAttributes;if((Vu.position!==void 0||Vu.normal!==void 0||Vu.color!==void 0)&&Wt.update(V,X,Wn),(Tn||Ot.receiveShadow!==V.receiveShadow)&&(Ot.receiveShadow=V.receiveShadow,Ee.setValue(D,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(ki.envMap.value=It,ki.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&H.environment!==null&&(ki.envMapIntensity.value=H.environmentIntensity),Tn&&(Ee.setValue(D,"toneMappingExposure",_.toneMappingExposure),Ot.needsLights&&Vy(ki,Hu),lt&&Y.fog===!0&&mt.refreshFogUniforms(ki,lt),mt.refreshMaterialUniforms(ki,Y,O,z,m.state.transmissionRenderTarget[R.id]),Hc.upload(D,hp(Ot),ki,I)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Hc.upload(D,hp(Ot),ki,I),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ee.setValue(D,"center",V.center),Ee.setValue(D,"modelViewMatrix",V.modelViewMatrix),Ee.setValue(D,"normalMatrix",V.normalMatrix),Ee.setValue(D,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Un=Y.uniformsGroups;for(let Gu=0,Wy=Un.length;Gu<Wy;Gu++){const fp=Un[Gu];k.update(fp,Wn),k.bind(fp,Wn)}}return Wn}function Vy(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function Gy(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,H,X){vt.get(R.texture).__webglTexture=H,vt.get(R.depthTexture).__webglTexture=X;const Y=vt.get(R);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,H){const X=vt.get(R);X.__webglFramebuffer=H,X.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,X=0){A=R,S=H,w=X;let Y=!0,V=null,lt=!1,xt=!1;if(R){const It=vt.get(R);if(It.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(D.FRAMEBUFFER,null),Y=!1;else if(It.__webglFramebuffer===void 0)I.setupRenderTarget(R);else if(It.__hasExternalTextures)I.rebindTextures(R,vt.get(R.texture).__webglTexture,vt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Dt=R.depthTexture;if(It.__boundDepthTexture!==Dt){if(Dt!==null&&vt.has(Dt)&&(R.width!==Dt.image.width||R.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(R)}}const zt=R.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(xt=!0);const kt=vt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(kt[H])?V=kt[H][X]:V=kt[H],lt=!0):R.samples>0&&I.useMultisampledRTT(R)===!1?V=vt.get(R).__webglMultisampledFramebuffer:Array.isArray(kt)?V=kt[X]:V=kt,v.copy(R.viewport),M.copy(R.scissor),L=R.scissorTest}else v.copy(K).multiplyScalar(O).floor(),M.copy(nt).multiplyScalar(O).floor(),L=_t;if(ft.bindFramebuffer(D.FRAMEBUFFER,V)&&Y&&ft.drawBuffers(R,V),ft.viewport(v),ft.scissor(M),ft.setScissorTest(L),lt){const It=vt.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+H,It.__webglTexture,X)}else if(xt){const It=vt.get(R.texture),zt=H||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,It.__webglTexture,X||0,zt)}E=-1},this.readRenderTargetPixels=function(R,H,X,Y,V,lt,xt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=vt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&xt!==void 0&&(Ct=Ct[xt]),Ct){ft.bindFramebuffer(D.FRAMEBUFFER,Ct);try{const It=R.texture,zt=It.format,kt=It.type;if(!at.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-Y&&X>=0&&X<=R.height-V&&D.readPixels(H,X,Y,V,Yt.convert(zt),Yt.convert(kt),lt)}finally{const It=A!==null?vt.get(A).__webglFramebuffer:null;ft.bindFramebuffer(D.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(R,H,X,Y,V,lt,xt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=vt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&xt!==void 0&&(Ct=Ct[xt]),Ct){const It=R.texture,zt=It.format,kt=It.type;if(!at.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=R.width-Y&&X>=0&&X<=R.height-V){ft.bindFramebuffer(D.FRAMEBUFFER,Ct);const Dt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Dt),D.bufferData(D.PIXEL_PACK_BUFFER,lt.byteLength,D.STREAM_READ),D.readPixels(H,X,Y,V,Yt.convert(zt),Yt.convert(kt),0);const ce=A!==null?vt.get(A).__webglFramebuffer:null;ft.bindFramebuffer(D.FRAMEBUFFER,ce);const xe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Xv(D,xe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Dt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,lt),D.deleteBuffer(Dt),D.deleteSync(xe),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,H=null,X=0){R.isTexture!==!0&&(kc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,R=arguments[1]);const Y=Math.pow(2,-X),V=Math.floor(R.image.width*Y),lt=Math.floor(R.image.height*Y),xt=H!==null?H.x:0,Ct=H!==null?H.y:0;I.setTexture2D(R,0),D.copyTexSubImage2D(D.TEXTURE_2D,X,0,0,xt,Ct,V,lt),ft.unbindTexture()},this.copyTextureToTexture=function(R,H,X=null,Y=null,V=0){R.isTexture!==!0&&(kc("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,R=arguments[1],H=arguments[2],V=arguments[3]||0,X=null);let lt,xt,Ct,It,zt,kt;X!==null?(lt=X.max.x-X.min.x,xt=X.max.y-X.min.y,Ct=X.min.x,It=X.min.y):(lt=R.image.width,xt=R.image.height,Ct=0,It=0),Y!==null?(zt=Y.x,kt=Y.y):(zt=0,kt=0);const Dt=Yt.convert(H.format),ce=Yt.convert(H.type);I.setTexture2D(H,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,H.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,H.unpackAlignment);const xe=D.getParameter(D.UNPACK_ROW_LENGTH),be=D.getParameter(D.UNPACK_IMAGE_HEIGHT),En=D.getParameter(D.UNPACK_SKIP_PIXELS),oe=D.getParameter(D.UNPACK_SKIP_ROWS),Ot=D.getParameter(D.UNPACK_SKIP_IMAGES),Ve=R.isCompressedTexture?R.mipmaps[V]:R.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Ve.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ve.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ct),D.pixelStorei(D.UNPACK_SKIP_ROWS,It),R.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,V,zt,kt,lt,xt,Dt,ce,Ve.data):R.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,V,zt,kt,Ve.width,Ve.height,Dt,Ve.data):D.texSubImage2D(D.TEXTURE_2D,V,zt,kt,lt,xt,Dt,ce,Ve),D.pixelStorei(D.UNPACK_ROW_LENGTH,xe),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,be),D.pixelStorei(D.UNPACK_SKIP_PIXELS,En),D.pixelStorei(D.UNPACK_SKIP_ROWS,oe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ot),V===0&&H.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),ft.unbindTexture()},this.copyTextureToTexture3D=function(R,H,X=null,Y=null,V=0){R.isTexture!==!0&&(kc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,R=arguments[2],H=arguments[3],V=arguments[4]||0);let lt,xt,Ct,It,zt,kt,Dt,ce,xe;const be=R.isCompressedTexture?R.mipmaps[V]:R.image;X!==null?(lt=X.max.x-X.min.x,xt=X.max.y-X.min.y,Ct=X.max.z-X.min.z,It=X.min.x,zt=X.min.y,kt=X.min.z):(lt=be.width,xt=be.height,Ct=be.depth,It=0,zt=0,kt=0),Y!==null?(Dt=Y.x,ce=Y.y,xe=Y.z):(Dt=0,ce=0,xe=0);const En=Yt.convert(H.format),oe=Yt.convert(H.type);let Ot;if(H.isData3DTexture)I.setTexture3D(H,0),Ot=D.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)I.setTexture2DArray(H,0),Ot=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,H.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,H.unpackAlignment);const Ve=D.getParameter(D.UNPACK_ROW_LENGTH),ae=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Wn=D.getParameter(D.UNPACK_SKIP_PIXELS),or=D.getParameter(D.UNPACK_SKIP_ROWS),Tn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,be.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,be.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,It),D.pixelStorei(D.UNPACK_SKIP_ROWS,zt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,kt),R.isDataTexture||R.isData3DTexture?D.texSubImage3D(Ot,V,Dt,ce,xe,lt,xt,Ct,En,oe,be.data):H.isCompressedArrayTexture?D.compressedTexSubImage3D(Ot,V,Dt,ce,xe,lt,xt,Ct,En,be.data):D.texSubImage3D(Ot,V,Dt,ce,xe,lt,xt,Ct,En,oe,be),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ve),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ae),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Wn),D.pixelStorei(D.UNPACK_SKIP_ROWS,or),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Tn),V===0&&H.generateMipmaps&&D.generateMipmap(Ot),ft.unbindTexture()},this.initRenderTarget=function(R){vt.get(R).__webglFramebuffer===void 0&&I.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?I.setTextureCube(R,0):R.isData3DTexture?I.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?I.setTexture2DArray(R,0):I.setTexture2D(R,0),ft.unbindTexture()},this.resetState=function(){S=0,w=0,A=null,ft.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ou?"display-p3":"srgb",e.unpackColorSpace=se.workingColorSpace===ha?"display-p3":"srgb"}}class fu{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new q(t),this.density=e}clone(){return new fu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class pa{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new q(t),this.near=e,this.far=n}clone(){return new pa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class gf extends ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class pu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Zo,this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const je=new P;class qs{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$t(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=sn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=sn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=sn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=sn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new qs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class xf extends Qe{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new q(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let vr;const oo=new P,Mr=new P,br=new P,Sr=new it,ao=new it,Ex=new Nt,Ja=new P,co=new P,Qa=new P,tm=new it,_h=new it,em=new it;class Tx extends ie{constructor(t=new xf){if(super(),this.isSprite=!0,this.type="Sprite",vr===void 0){vr=new Xt;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new pu(e,5);vr.setIndex([0,1,2,0,2,3]),vr.setAttribute("position",new qs(n,3,0,!1)),vr.setAttribute("uv",new qs(n,2,3,!1))}this.geometry=vr,this.material=t,this.center=new it(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Mr.setFromMatrixScale(this.matrixWorld),Ex.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),br.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Mr.multiplyScalar(-br.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;ja(Ja.set(-.5,-.5,0),br,o,Mr,s,r),ja(co.set(.5,-.5,0),br,o,Mr,s,r),ja(Qa.set(.5,.5,0),br,o,Mr,s,r),tm.set(0,0),_h.set(1,0),em.set(1,1);let a=t.ray.intersectTriangle(Ja,co,Qa,!1,oo);if(a===null&&(ja(co.set(-.5,.5,0),br,o,Mr,s,r),_h.set(0,1),a=t.ray.intersectTriangle(Ja,Qa,co,!1,oo),a===null))return;const c=t.ray.origin.distanceTo(oo);c<t.near||c>t.far||e.push({distance:c,point:oo.clone(),uv:vn.getInterpolation(oo,Ja,co,Qa,tm,_h,em,new it),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ja(i,t,e,n,s,r){Sr.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ao.x=r*Sr.x-s*Sr.y,ao.y=s*Sr.x+r*Sr.y):ao.copy(Sr),i.copy(t),i.x+=ao.x,i.y+=ao.y,i.applyMatrix4(Ex)}const tc=new P,nm=new P;class Cx extends ie{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let n=0,s=e.length;n<s;n++){const r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);const s=this.levels;let r;for(r=0;r<s.length&&!(e<s[r].distance);r++);return s.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){const e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){const s=e.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let n,s;for(n=1,s=e.length;n<s;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){tc.setFromMatrixPosition(this.matrixWorld);const s=t.ray.origin.distanceTo(tc);this.getObjectForDistance(s).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){tc.setFromMatrixPosition(t.matrixWorld),nm.setFromMatrixPosition(this.matrixWorld);const n=tc.distanceTo(nm)/t.zoom;e[0].object.visible=!0;let s,r;for(s=1,r=e.length;s<r;s++){let o=e[s].distance;if(e[s].object.visible&&(o-=o*e[s].hysteresis),n>=o)e[s-1].object.visible=!1,e[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)e[s].object.visible=!1}}toJSON(t){const e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let s=0,r=n.length;s<r;s++){const o=n[s];e.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return e}}const im=new P,sm=new Jt,rm=new Jt,aA=new P,om=new Nt,ec=new P,yh=new Ge,am=new Nt,vh=new Jr;class Rx extends Vt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=dd,this.bindMatrix=new Nt,this.bindMatrixInverse=new Nt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new cn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ec),this.boundingBox.expandByPoint(ec)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ge),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ec),this.boundingSphere.expandByPoint(ec)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yh.copy(this.boundingSphere),yh.applyMatrix4(s),t.ray.intersectsSphere(yh)!==!1&&(am.copy(s).invert(),vh.copy(t.ray).applyMatrix4(am),!(this.boundingBox!==null&&vh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,vh)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Jt,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===dd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Zg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;sm.fromBufferAttribute(s.attributes.skinIndex,t),rm.fromBufferAttribute(s.attributes.skinWeight,t),im.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=rm.getComponent(r);if(o!==0){const a=sm.getComponent(r);om.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(aA.copy(im).applyMatrix4(om),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class _f extends ie{constructor(){super(),this.isBone=!0,this.type="Bone"}}class li extends Ae{constructor(t=null,e=1,n=1,s,r,o,a,c,l=He,u=He,d,h){super(null,o,a,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cm=new Nt,cA=new Nt;class mu{constructor(t=[],e=[]){this.uuid=Dn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Nt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Nt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:cA;cm.multiplyMatrices(a,e[r]),cm.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new mu(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new li(e,t,t,rn,Mn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new _f),this.bones.push(o),this.boneInverses.push(new Nt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class gn extends ue{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const wr=new Nt,lm=new Nt,nc=[],um=new cn,lA=new Nt,lo=new Vt,uo=new Ge;class ma extends Vt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new gn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,lA)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new cn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,wr),um.copy(t.boundingBox).applyMatrix4(wr),this.boundingBox.union(um)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ge),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,wr),uo.copy(t.boundingSphere).applyMatrix4(wr),this.boundingSphere.union(uo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(lo.geometry=this.geometry,lo.material=this.material,lo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),uo.copy(this.boundingSphere),uo.applyMatrix4(n),t.ray.intersectsSphere(uo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,wr),lm.multiplyMatrices(n,wr),lo.matrixWorld=lm,lo.raycast(t,nc);for(let o=0,a=nc.length;o<a;o++){const c=nc[o];c.instanceId=r,c.object=this,e.push(c)}nc.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new gn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new li(new Float32Array(s*this.count),s,this.count,nu,Mn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function uA(i,t){return i.z-t.z}function hA(i,t){return t.z-i.z}class dA{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n){const s=this.pool,r=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});const o=s[this.index];r.push(o),this.index++,o.start=t.start,o.count=t.count,o.z=e,o.index=n}reset(){this.list.length=0,this.index=0}}const qi=new Nt,Mh=new Nt,fA=new Nt,pA=new q(1,1,1),hm=new Nt,bh=new fa,ic=new cn,xs=new Ge,ho=new P,dm=new P,mA=new P,Sh=new dA,$e=new Vt,sc=[];function gA(i,t,e=0){const n=t.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==t.array.constructor){const s=i.count;for(let r=0;r<s;r++)for(let o=0;o<n;o++)t.setComponent(r+e,o,i.getComponent(r,o))}else t.array.set(i.array,e*n);t.needsUpdate=!0}class Px extends Vt{get maxInstanceCount(){return this._maxInstanceCount}constructor(t,e,n=e*2,s){super(new Xt,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawInfo=[],this._availableInstanceIds=[],this._drawRanges=[],this._reservedRanges=[],this._bounds=[],this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),n=new li(e,t,t,rn,Mn);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),n=new li(e,t,t,ua,Di);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),n=new li(e,t,t,rn,Mn);n.colorSpace=se.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){const e=this.geometry,n=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in t.attributes){const o=t.getAttribute(r),{array:a,itemSize:c,normalized:l}=o,u=new a.constructor(n*c),d=new ue(u,c,l);e.setAttribute(r,d)}if(t.getIndex()!==null){const r=n>65535?new Uint32Array(s):new Uint16Array(s);e.setIndex(new ue(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in e.attributes){if(!t.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const s=t.getAttribute(n),r=e.getAttribute(n);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);const t=this.boundingBox,e=this._drawInfo;t.makeEmpty();for(let n=0,s=e.length;n<s;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,qi),this.getBoundingBoxAt(r,ic).applyMatrix4(qi),t.union(ic)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ge);const t=this.boundingSphere,e=this._drawInfo;t.makeEmpty();for(let n=0,s=e.length;n<s;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,qi),this.getBoundingSphereAt(r,xs).applyMatrix4(qi),t.union(xs)}}addInstance(t){if(this._drawInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:t};let s=null;this._availableInstanceIds.length>0?(s=this._availableInstanceIds.pop(),this._drawInfo[s]=n):(s=this._drawInfo.length,this._drawInfo.push(n));const r=this._matricesTexture,o=r.image.data;fA.toArray(o,s*16),r.needsUpdate=!0;const a=this._colorsTexture;return a&&(pA.toArray(a.image.data,s*4),a.needsUpdate=!0),s}addGeometry(t,e=-1,n=-1){if(this._initializeGeometry(t),this._validateGeometry(t),this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");const s={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let r=null;const o=this._reservedRanges,a=this._drawRanges,c=this._bounds;this._geometryCount!==0&&(r=o[o.length-1]),e===-1?s.vertexCount=t.getAttribute("position").count:s.vertexCount=e,r===null?s.vertexStart=0:s.vertexStart=r.vertexStart+r.vertexCount;const l=t.getIndex(),u=l!==null;if(u&&(n===-1?s.indexCount=l.count:s.indexCount=n,r===null?s.indexStart=0:s.indexStart=r.indexStart+r.indexCount),s.indexStart!==-1&&s.indexStart+s.indexCount>this._maxIndexCount||s.vertexStart+s.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const d=this._geometryCount;return this._geometryCount++,o.push(s),a.push({start:u?s.indexStart:s.vertexStart,count:-1}),c.push({boxInitialized:!1,box:new cn,sphereInitialized:!1,sphere:new Ge}),this.setGeometryAt(d,t),d}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const n=this.geometry,s=n.getIndex()!==null,r=n.getIndex(),o=e.getIndex(),a=this._reservedRanges[t];if(s&&o.count>a.indexCount||e.attributes.position.count>a.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const c=a.vertexStart,l=a.vertexCount;for(const f in n.attributes){const p=e.getAttribute(f),x=n.getAttribute(f);gA(p,x,c);const m=p.itemSize;for(let g=p.count,y=l;g<y;g++){const _=c+g;for(let b=0;b<m;b++)x.setComponent(_,b,0)}x.needsUpdate=!0,x.addUpdateRange(c*m,l*m)}if(s){const f=a.indexStart;for(let p=0;p<o.count;p++)r.setX(f+p,c+o.getX(p));for(let p=o.count,x=a.indexCount;p<x;p++)r.setX(f+p,c);r.needsUpdate=!0,r.addUpdateRange(f,a.indexCount)}const u=this._bounds[t];e.boundingBox!==null?(u.box.copy(e.boundingBox),u.boxInitialized=!0):u.boxInitialized=!1,e.boundingSphere!==null?(u.sphere.copy(e.boundingSphere),u.sphereInitialized=!0):u.sphereInitialized=!1;const d=this._drawRanges[t],h=e.getAttribute("position");return d.count=s?o.count:h.count,this._visibilityChanged=!0,t}deleteInstance(t){const e=this._drawInfo;return t>=e.length||e[t].active===!1?this:(e[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this)}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const n=this._bounds[t],s=n.box,r=this.geometry;if(n.boxInitialized===!1){s.makeEmpty();const o=r.index,a=r.attributes.position,c=this._drawRanges[t];for(let l=c.start,u=c.start+c.count;l<u;l++){let d=l;o&&(d=o.getX(d)),s.expandByPoint(ho.fromBufferAttribute(a,d))}n.boxInitialized=!0}return e.copy(s),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const n=this._bounds[t],s=n.sphere,r=this.geometry;if(n.sphereInitialized===!1){s.makeEmpty(),this.getBoundingBoxAt(t,ic),ic.getCenter(s.center);const o=r.index,a=r.attributes.position,c=this._drawRanges[t];let l=0;for(let u=c.start,d=c.start+c.count;u<d;u++){let h=u;o&&(h=o.getX(h)),ho.fromBufferAttribute(a,h),l=Math.max(l,s.center.distanceToSquared(ho))}s.radius=Math.sqrt(l),n.sphereInitialized=!0}return e.copy(s),e}setMatrixAt(t,e){const n=this._drawInfo,s=this._matricesTexture,r=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?this:(e.toArray(r,t*16),s.needsUpdate=!0,this)}getMatrixAt(t,e){const n=this._drawInfo,s=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?null:e.fromArray(s,t*16)}setColorAt(t,e){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,s=this._colorsTexture.image.data,r=this._drawInfo;return t>=r.length||r[t].active===!1?this:(e.toArray(s,t*4),n.needsUpdate=!0,this)}getColorAt(t,e){const n=this._colorsTexture.image.data,s=this._drawInfo;return t>=s.length||s[t].active===!1?null:e.fromArray(n,t*4)}setVisibleAt(t,e){const n=this._drawInfo;return t>=n.length||n[t].active===!1||n[t].visible===e?this:(n[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){const e=this._drawInfo;return t>=e.length||e[t].active===!1?!1:e[t].visible}setGeometryIdAt(t,e){const n=this._drawInfo;return t>=n.length||n[t].active===!1||e<0||e>=this._geometryCount?null:(n[t].geometryIndex=e,this)}getGeometryIdAt(t){const e=this._drawInfo;return t>=e.length||e[t].active===!1?-1:e[t].geometryIndex}getGeometryRangeAt(t,e={}){if(t<0||t>=this._geometryCount)return null;const n=this._drawRanges[t];return e.start=n.start,e.count=n.count,e}raycast(t,e){const n=this._drawInfo,s=this._drawRanges,r=this.matrixWorld,o=this.geometry;$e.material=this.material,$e.geometry.index=o.index,$e.geometry.attributes=o.attributes,$e.geometry.boundingBox===null&&($e.geometry.boundingBox=new cn),$e.geometry.boundingSphere===null&&($e.geometry.boundingSphere=new Ge);for(let a=0,c=n.length;a<c;a++){if(!n[a].visible||!n[a].active)continue;const l=n[a].geometryIndex,u=s[l];$e.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(a,$e.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,$e.geometry.boundingBox),this.getBoundingSphereAt(l,$e.geometry.boundingSphere),$e.raycast(t,sc);for(let d=0,h=sc.length;d<h;d++){const f=sc[d];f.object=this,f.batchId=a,e.push(f)}sc.length=0}$e.material=null,$e.geometry.index=null,$e.geometry.attributes={},$e.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._drawRanges=t._drawRanges.map(e=>({...e})),this._reservedRanges=t._reservedRanges.map(e=>({...e})),this._drawInfo=t._drawInfo.map(e=>({...e})),this._bounds=t._bounds.map(e=>({boxInitialized:e.boxInitialized,box:e.box.clone(),sphereInitialized:e.sphereInitialized,sphere:e.sphere.clone()})),this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._geometryCount=t._geometryCount,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(t,e,n,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=s.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,c=this._drawInfo,l=this._multiDrawStarts,u=this._multiDrawCounts,d=this._drawRanges,h=this.perObjectFrustumCulled,f=this._indirectTexture,p=f.image.data;h&&(hm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),bh.setFromProjectionMatrix(hm,t.coordinateSystem));let x=0;if(this.sortObjects){Mh.copy(this.matrixWorld).invert(),ho.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Mh),dm.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Mh);for(let y=0,_=c.length;y<_;y++)if(c[y].visible&&c[y].active){const b=c[y].geometryIndex;this.getMatrixAt(y,qi),this.getBoundingSphereAt(b,xs).applyMatrix4(qi);let S=!1;if(h&&(S=!bh.intersectsSphere(xs)),!S){const w=mA.subVectors(xs.center,ho).dot(dm);Sh.push(d[b],w,y)}}const m=Sh.list,g=this.customSort;g===null?m.sort(r.transparent?hA:uA):g.call(this,m,n);for(let y=0,_=m.length;y<_;y++){const b=m[y];l[x]=b.start*a,u[x]=b.count,p[x]=b.index,x++}Sh.reset()}else for(let m=0,g=c.length;m<g;m++)if(c[m].visible&&c[m].active){const y=c[m].geometryIndex;let _=!1;if(h&&(this.getMatrixAt(m,qi),this.getBoundingSphereAt(y,xs).applyMatrix4(qi),_=!bh.intersectsSphere(xs)),!_){const b=d[y];l[x]=b.start*a,u[x]=b.count,p[x]=m,x++}}f.needsUpdate=!0,this._multiDrawCount=x,this._visibilityChanged=!1}onBeforeShadow(t,e,n,s,r,o){this.onBeforeRender(t,null,s,r,o)}}class hn extends Qe{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new q(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const kl=new P,Hl=new P,fm=new Nt,fo=new Jr,rc=new Ge,wh=new P,pm=new P;class is extends ie{constructor(t=new Xt,e=new hn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)kl.fromBufferAttribute(e,s-1),Hl.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=kl.distanceTo(Hl);t.setAttribute("lineDistance",new yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rc.copy(n.boundingSphere),rc.applyMatrix4(s),rc.radius+=r,t.ray.intersectsSphere(rc)===!1)return;fm.copy(s).invert(),fo.copy(t.ray).applyMatrix4(fm);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=l){const g=u.getX(x),y=u.getX(x+1),_=oc(this,t,fo,c,g,y);_&&e.push(_)}if(this.isLineLoop){const x=u.getX(p-1),m=u.getX(f),g=oc(this,t,fo,c,x,m);g&&e.push(g)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=l){const g=oc(this,t,fo,c,x,x+1);g&&e.push(g)}if(this.isLineLoop){const x=oc(this,t,fo,c,p-1,f);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function oc(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(kl.fromBufferAttribute(o,s),Hl.fromBufferAttribute(o,r),e.distanceSqToSegment(kl,Hl,wh,pm)>n)return;wh.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(wh);if(!(c<t.near||c>t.far))return{distance:c,point:pm.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const mm=new P,gm=new P;class pi extends is{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)mm.fromBufferAttribute(e,s),gm.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+mm.distanceTo(gm);t.setAttribute("lineDistance",new yt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ix extends is{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class yf extends Qe{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new q(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const xm=new Nt,_d=new Jr,ac=new Ge,cc=new P;class Lx extends ie{constructor(t=new Xt,e=new yf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ac.copy(n.boundingSphere),ac.applyMatrix4(s),ac.radius+=r,t.ray.intersectsSphere(ac)===!1)return;xm.copy(s).invert(),_d.copy(t.ray).applyMatrix4(xm);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const h=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let p=h,x=f;p<x;p++){const m=l.getX(p);cc.fromBufferAttribute(d,m),_m(cc,m,c,s,t,e,this)}}else{const h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=h,x=f;p<x;p++)cc.fromBufferAttribute(d,p),_m(cc,p,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function _m(i,t,e,n,s,r,o){const a=_d.distanceSqToPoint(i);if(a<e){const c=new P;_d.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class xA extends Ae{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:Le,this.magFilter=r!==void 0?r:Le,this.generateMipmaps=!1;const u=this;function d(){u.needsUpdate=!0,t.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class _A extends Ae{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=He,this.minFilter=He,this.generateMipmaps=!1,this.needsUpdate=!0}}class gu extends Ae{constructor(t,e,n,s,r,o,a,c,l,u,d,h){super(null,o,a,c,l,u,s,r,d,h),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class yA extends gu{constructor(t,e,n,s,r,o){super(t,e,n,r,o),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=kn,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vA extends gu{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,Li),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}}class MA extends Ae{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],h=n[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new it:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,s=[],r=[],o=[],a=new P,c=new Nt;for(let f=0;f<=t;f++){const p=f/t;s[f]=this.getTangentAt(p,new P)}r[0]=new P,o[0]=new P;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(we(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(we(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class xu extends jn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new it){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Dx extends xu{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function vf(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const lc=new P,Ah=new vf,Eh=new vf,Th=new vf;class Nx extends jn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(lc.subVectors(s[0],s[1]).add(s[0]),l=lc);const d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(lc.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=lc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Ah.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,p,x,m),Eh.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,p,x,m),Th.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,p,x,m)}else this.curveType==="catmullrom"&&(Ah.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),Eh.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),Th.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return n.set(Ah.calc(c),Eh.calc(c),Th.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ym(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function bA(i,t){const e=1-i;return e*e*t}function SA(i,t){return 2*(1-i)*i*t}function wA(i,t){return i*i*t}function Po(i,t,e,n){return bA(i,t)+SA(i,e)+wA(i,n)}function AA(i,t){const e=1-i;return e*e*e*t}function EA(i,t){const e=1-i;return 3*e*e*i*t}function TA(i,t){return 3*(1-i)*i*i*t}function CA(i,t){return i*i*i*t}function Io(i,t,e,n,s){return AA(i,t)+EA(i,e)+TA(i,n)+CA(i,s)}class Mf extends jn{constructor(t=new it,e=new it,n=new it,s=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new it){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Io(t,s.x,r.x,o.x,a.x),Io(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ux extends jn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Io(t,s.x,r.x,o.x,a.x),Io(t,s.y,r.y,o.y,a.y),Io(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bf extends jn{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ox extends jn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sf extends jn{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Po(t,s.x,r.x,o.x),Po(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wf extends jn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Po(t,s.x,r.x,o.x),Po(t,s.y,r.y,o.y),Po(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Af extends jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(ym(a,c.x,l.x,u.x,d.x),ym(a,c.y,l.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new it().fromArray(s))}return this}}var Vl=Object.freeze({__proto__:null,ArcCurve:Dx,CatmullRomCurve3:Nx,CubicBezierCurve:Mf,CubicBezierCurve3:Ux,EllipseCurve:xu,LineCurve:bf,LineCurve3:Ox,QuadraticBezierCurve:Sf,QuadraticBezierCurve3:wf,SplineCurve:Af});class Fx extends jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Vl[s.type]().fromJSON(s))}return this}}class Qo extends Fx{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new bf(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Sf(this.currentPoint.clone(),new it(t,e),new it(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Mf(this.currentPoint.clone(),new it(t,e),new it(n,s),new it(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Af(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new xu(t,e,n,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ga extends Xt{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=we(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,d=new P,h=new it,f=new P,p=new P,x=new P;let m=0,g=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,f.x=g*1,f.y=-m,f.z=g*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(p)}for(let y=0;y<=e;y++){const _=n+y*u*s,b=Math.sin(_),S=Math.cos(_);for(let w=0;w<=t.length-1;w++){d.x=t[w].x*b,d.y=t[w].y,d.z=t[w].x*S,o.push(d.x,d.y,d.z),h.x=y/e,h.y=w/(t.length-1),a.push(h.x,h.y);const A=c[3*w+0]*b,E=c[3*w+1],C=c[3*w+0]*S;l.push(A,E,C)}}for(let y=0;y<e;y++)for(let _=0;_<t.length-1;_++){const b=_+y*t.length,S=b,w=b+t.length,A=b+t.length+1,E=b+1;r.push(S,w,E),r.push(A,E,w)}this.setIndex(r),this.setAttribute("position",new yt(o,3)),this.setAttribute("uv",new yt(a,2)),this.setAttribute("normal",new yt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ga(t.points,t.segments,t.phiStart,t.phiLength)}}class _u extends ga{constructor(t=1,e=1,n=4,s=8){const r=new Qo;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new _u(t.radius,t.length,t.capSegments,t.radialSegments)}}class yu extends Xt{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new P,u=new it;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){const f=n+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new yt(o,3)),this.setAttribute("normal",new yt(a,3)),this.setAttribute("uv",new yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yu(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class tr extends Xt{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let p=0;const x=[],m=n/2;let g=0;y(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new yt(d,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(f,2));function y(){const b=new P,S=new P;let w=0;const A=(e-t)/n;for(let E=0;E<=r;E++){const C=[],v=E/r,M=v*(e-t)+t;for(let L=0;L<=s;L++){const N=L/s,F=N*c+a,B=Math.sin(F),z=Math.cos(F);S.x=M*B,S.y=-v*n+m,S.z=M*z,d.push(S.x,S.y,S.z),b.set(B,A,z).normalize(),h.push(b.x,b.y,b.z),f.push(N,1-v),C.push(p++)}x.push(C)}for(let E=0;E<s;E++)for(let C=0;C<r;C++){const v=x[C][E],M=x[C+1][E],L=x[C+1][E+1],N=x[C][E+1];t>0&&(u.push(v,M,N),w+=3),e>0&&(u.push(M,L,N),w+=3)}l.addGroup(g,w,0),g+=w}function _(b){const S=p,w=new it,A=new P;let E=0;const C=b===!0?t:e,v=b===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,m*v,0),h.push(0,v,0),f.push(.5,.5),p++;const M=p;for(let L=0;L<=s;L++){const F=L/s*c+a,B=Math.cos(F),z=Math.sin(F);A.x=C*z,A.y=m*v,A.z=C*B,d.push(A.x,A.y,A.z),h.push(0,v,0),w.x=B*.5+.5,w.y=z*.5*v+.5,f.push(w.x,w.y),p++}for(let L=0;L<s;L++){const N=S+L,F=M+L;b===!0?u.push(F,F+1,N):u.push(F+1,F,N),E+=3}l.addGroup(g,E,b===!0?1:2),g+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vu extends tr{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new vu(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class as extends Xt{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new yt(r,3)),this.setAttribute("normal",new yt(r.slice(),3)),this.setAttribute("uv",new yt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const _=new P,b=new P,S=new P;for(let w=0;w<e.length;w+=3)f(e[w+0],_),f(e[w+1],b),f(e[w+2],S),c(_,b,S,y)}function c(y,_,b,S){const w=S+1,A=[];for(let E=0;E<=w;E++){A[E]=[];const C=y.clone().lerp(b,E/w),v=_.clone().lerp(b,E/w),M=w-E;for(let L=0;L<=M;L++)L===0&&E===w?A[E][L]=C:A[E][L]=C.clone().lerp(v,L/M)}for(let E=0;E<w;E++)for(let C=0;C<2*(w-E)-1;C++){const v=Math.floor(C/2);C%2===0?(h(A[E][v+1]),h(A[E+1][v]),h(A[E][v])):(h(A[E][v+1]),h(A[E+1][v+1]),h(A[E+1][v]))}}function l(y){const _=new P;for(let b=0;b<r.length;b+=3)_.x=r[b+0],_.y=r[b+1],_.z=r[b+2],_.normalize().multiplyScalar(y),r[b+0]=_.x,r[b+1]=_.y,r[b+2]=_.z}function u(){const y=new P;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];const b=m(y)/2/Math.PI+.5,S=g(y)/Math.PI+.5;o.push(b,1-S)}p(),d()}function d(){for(let y=0;y<o.length;y+=6){const _=o[y+0],b=o[y+2],S=o[y+4],w=Math.max(_,b,S),A=Math.min(_,b,S);w>.9&&A<.1&&(_<.2&&(o[y+0]+=1),b<.2&&(o[y+2]+=1),S<.2&&(o[y+4]+=1))}}function h(y){r.push(y.x,y.y,y.z)}function f(y,_){const b=y*3;_.x=t[b+0],_.y=t[b+1],_.z=t[b+2]}function p(){const y=new P,_=new P,b=new P,S=new P,w=new it,A=new it,E=new it;for(let C=0,v=0;C<r.length;C+=9,v+=6){y.set(r[C+0],r[C+1],r[C+2]),_.set(r[C+3],r[C+4],r[C+5]),b.set(r[C+6],r[C+7],r[C+8]),w.set(o[v+0],o[v+1]),A.set(o[v+2],o[v+3]),E.set(o[v+4],o[v+5]),S.copy(y).add(_).add(b).divideScalar(3);const M=m(S);x(w,v+0,y,M),x(A,v+2,_,M),x(E,v+4,b,M)}}function x(y,_,b,S){S<0&&y.x===1&&(o[_]=y.x-1),b.x===0&&b.z===0&&(o[_]=S/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new as(t.vertices,t.indices,t.radius,t.details)}}class Mu extends as{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Mu(t.radius,t.detail)}}const uc=new P,hc=new P,Ch=new P,dc=new vn;class zx extends Xt{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(ks*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let p=0;p<c;p+=3){o?(l[0]=o.getX(p),l[1]=o.getX(p+1),l[2]=o.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);const{a:x,b:m,c:g}=dc;if(x.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),g.fromBufferAttribute(a,l[2]),dc.getNormal(Ch),d[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let y=0;y<3;y++){const _=(y+1)%3,b=d[y],S=d[_],w=dc[u[y]],A=dc[u[_]],E=`${b}_${S}`,C=`${S}_${b}`;C in h&&h[C]?(Ch.dot(h[C].normal)<=r&&(f.push(w.x,w.y,w.z),f.push(A.x,A.y,A.z)),h[C]=null):E in h||(h[E]={index0:l[y],index1:l[_],normal:Ch.clone()})}}for(const p in h)if(h[p]){const{index0:x,index1:m}=h[p];uc.fromBufferAttribute(a,x),hc.fromBufferAttribute(a,m),f.push(uc.x,uc.y,uc.z),f.push(hc.x,hc.y,hc.z)}this.setAttribute("position",new yt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Hs extends Qo{constructor(t){super(t),this.uuid=Dn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Qo().fromJSON(s))}return this}}const RA={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Bx(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,d,h,f;if(n&&(r=NA(i,t,r,e)),i.length>80*e){a=l=i[0],c=u=i[1];for(let p=e;p<s;p+=e)d=i[p],h=i[p+1],d<a&&(a=d),h<c&&(c=h),d>l&&(l=d),h>u&&(u=h);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return jo(r,o,e,a,c,f,0),o}};function Bx(i,t,e,n,s){let r,o;if(s===XA(i,t,e,n)>0)for(r=t;r<e;r+=n)o=vm(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=vm(r,i[r],i[r+1],o);return o&&bu(o,o.next)&&(ea(o),o=o.next),o}function $s(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(bu(e,e.next)||Me(e.prev,e,e.next)===0)){if(ea(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function jo(i,t,e,n,s,r,o){if(!i)return;!o&&r&&BA(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?IA(i,n,s,r):PA(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),ea(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=LA($s(i),t,e),jo(i,t,e,n,s,r,2)):o===2&&DA(i,t,e,n,s,r):jo($s(i),t,e,n,s,r,1);break}}}function PA(i){const t=i.prev,e=i,n=i.next;if(Me(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,d=a<c?a<l?a:l:c<l?c:l,h=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let p=n.next;for(;p!==t;){if(p.x>=u&&p.x<=h&&p.y>=d&&p.y<=f&&Lr(s,a,r,c,o,l,p.x,p.y)&&Me(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function IA(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Me(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,d=r.y,h=o.y,f=a<c?a<l?a:l:c<l?c:l,p=u<d?u<h?u:h:d<h?d:h,x=a>c?a>l?a:l:c>l?c:l,m=u>d?u>h?u:h:d>h?d:h,g=yd(f,p,t,e,n),y=yd(x,m,t,e,n);let _=i.prevZ,b=i.nextZ;for(;_&&_.z>=g&&b&&b.z<=y;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=m&&_!==s&&_!==o&&Lr(a,u,c,d,l,h,_.x,_.y)&&Me(_.prev,_,_.next)>=0||(_=_.prevZ,b.x>=f&&b.x<=x&&b.y>=p&&b.y<=m&&b!==s&&b!==o&&Lr(a,u,c,d,l,h,b.x,b.y)&&Me(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;_&&_.z>=g;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=m&&_!==s&&_!==o&&Lr(a,u,c,d,l,h,_.x,_.y)&&Me(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;b&&b.z<=y;){if(b.x>=f&&b.x<=x&&b.y>=p&&b.y<=m&&b!==s&&b!==o&&Lr(a,u,c,d,l,h,b.x,b.y)&&Me(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function LA(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!bu(s,r)&&kx(s,n,n.next,r)&&ta(s,r)&&ta(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),ea(n),ea(n.next),n=i=r),n=n.next}while(n!==i);return $s(n)}function DA(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&VA(o,a)){let c=Hx(o,a);o=$s(o,o.next),c=$s(c,c.next),jo(o,t,e,n,s,r,0),jo(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function NA(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Bx(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(HA(l));for(s.sort(UA),r=0;r<s.length;r++)e=OA(s[r],e);return e}function UA(i,t){return i.x-t.x}function OA(i,t){const e=FA(i,t);if(!e)return t;const n=Hx(e,i);return $s(n,n.next),$s(e,e.next)}function FA(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const h=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=r&&h>n&&(n=h,s=e.x<e.next.x?e:e.next,h===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,d;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Lr(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),ta(e,i)&&(d<u||d===u&&(e.x>s.x||e.x===s.x&&zA(s,e)))&&(s=e,u=d)),e=e.next;while(e!==a);return s}function zA(i,t){return Me(i.prev,i,t.prev)<0&&Me(t.next,i,i.next)<0}function BA(i,t,e,n){let s=i;do s.z===0&&(s.z=yd(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,kA(s)}function kA(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function yd(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function HA(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Lr(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function VA(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!GA(i,t)&&(ta(i,t)&&ta(t,i)&&WA(i,t)&&(Me(i.prev,i,t.prev)||Me(i,t.prev,t))||bu(i,t)&&Me(i.prev,i,i.next)>0&&Me(t.prev,t,t.next)>0)}function Me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function bu(i,t){return i.x===t.x&&i.y===t.y}function kx(i,t,e,n){const s=pc(Me(i,t,e)),r=pc(Me(i,t,n)),o=pc(Me(e,n,i)),a=pc(Me(e,n,t));return!!(s!==r&&o!==a||s===0&&fc(i,e,t)||r===0&&fc(i,n,t)||o===0&&fc(e,i,n)||a===0&&fc(e,t,n))}function fc(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function pc(i){return i>0?1:i<0?-1:0}function GA(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&kx(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ta(i,t){return Me(i.prev,i,i.next)<0?Me(i,t,i.next)>=0&&Me(i,i.prev,t)>=0:Me(i,t,i.prev)<0||Me(i,i.next,t)<0}function WA(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Hx(i,t){const e=new vd(i.i,i.x,i.y),n=new vd(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function vm(i,t,e,n){const s=new vd(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ea(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function vd(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function XA(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class ui{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ui.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Mm(t),bm(n,t);let o=t.length;e.forEach(Mm);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,bm(n,e[c]);const a=RA.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Mm(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function bm(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Su extends Xt{constructor(t=new Hs([new it(.5,.5),new it(-.5,.5),new it(-.5,-.5),new it(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new yt(s,3)),this.setAttribute("uv",new yt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:YA;let _,b=!1,S,w,A,E;g&&(_=g.getSpacedPoints(u),b=!0,h=!1,S=g.computeFrenetFrames(u,!1),w=new P,A=new P,E=new P),h||(m=0,f=0,p=0,x=0);const C=a.extractPoints(l);let v=C.shape;const M=C.holes;if(!ui.isClockWise(v)){v=v.reverse();for(let j=0,D=M.length;j<D;j++){const ht=M[j];ui.isClockWise(ht)&&(M[j]=ht.reverse())}}const N=ui.triangulateShape(v,M),F=v;for(let j=0,D=M.length;j<D;j++){const ht=M[j];v=v.concat(ht)}function B(j,D,ht){return D||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(D,ht)}const z=v.length,O=N.length;function U(j,D,ht){let dt,at,ft;const Ut=j.x-D.x,vt=j.y-D.y,I=ht.x-j.x,T=ht.y-j.y,W=Ut*Ut+vt*vt,J=Ut*T-vt*I;if(Math.abs(J)>Number.EPSILON){const st=Math.sqrt(W),Q=Math.sqrt(I*I+T*T),Pt=D.x-vt/st,mt=D.y+Ut/st,St=ht.x-T/Q,Qt=ht.y+I/Q,ct=((St-Pt)*T-(Qt-mt)*I)/(Ut*T-vt*I);dt=Pt+Ut*ct-j.x,at=mt+vt*ct-j.y;const wt=dt*dt+at*at;if(wt<=2)return new it(dt,at);ft=Math.sqrt(wt/2)}else{let st=!1;Ut>Number.EPSILON?I>Number.EPSILON&&(st=!0):Ut<-Number.EPSILON?I<-Number.EPSILON&&(st=!0):Math.sign(vt)===Math.sign(T)&&(st=!0),st?(dt=-vt,at=Ut,ft=Math.sqrt(W)):(dt=Ut,at=vt,ft=Math.sqrt(W/2))}return new it(dt/ft,at/ft)}const G=[];for(let j=0,D=F.length,ht=D-1,dt=j+1;j<D;j++,ht++,dt++)ht===D&&(ht=0),dt===D&&(dt=0),G[j]=U(F[j],F[ht],F[dt]);const K=[];let nt,_t=G.concat();for(let j=0,D=M.length;j<D;j++){const ht=M[j];nt=[];for(let dt=0,at=ht.length,ft=at-1,Ut=dt+1;dt<at;dt++,ft++,Ut++)ft===at&&(ft=0),Ut===at&&(Ut=0),nt[dt]=U(ht[dt],ht[ft],ht[Ut]);K.push(nt),_t=_t.concat(nt)}for(let j=0;j<m;j++){const D=j/m,ht=f*Math.cos(D*Math.PI/2),dt=p*Math.sin(D*Math.PI/2)+x;for(let at=0,ft=F.length;at<ft;at++){const Ut=B(F[at],G[at],dt);ot(Ut.x,Ut.y,-ht)}for(let at=0,ft=M.length;at<ft;at++){const Ut=M[at];nt=K[at];for(let vt=0,I=Ut.length;vt<I;vt++){const T=B(Ut[vt],nt[vt],dt);ot(T.x,T.y,-ht)}}}const Rt=p+x;for(let j=0;j<z;j++){const D=h?B(v[j],_t[j],Rt):v[j];b?(A.copy(S.normals[0]).multiplyScalar(D.x),w.copy(S.binormals[0]).multiplyScalar(D.y),E.copy(_[0]).add(A).add(w),ot(E.x,E.y,E.z)):ot(D.x,D.y,0)}for(let j=1;j<=u;j++)for(let D=0;D<z;D++){const ht=h?B(v[D],_t[D],Rt):v[D];b?(A.copy(S.normals[j]).multiplyScalar(ht.x),w.copy(S.binormals[j]).multiplyScalar(ht.y),E.copy(_[j]).add(A).add(w),ot(E.x,E.y,E.z)):ot(ht.x,ht.y,d/u*j)}for(let j=m-1;j>=0;j--){const D=j/m,ht=f*Math.cos(D*Math.PI/2),dt=p*Math.sin(D*Math.PI/2)+x;for(let at=0,ft=F.length;at<ft;at++){const Ut=B(F[at],G[at],dt);ot(Ut.x,Ut.y,d+ht)}for(let at=0,ft=M.length;at<ft;at++){const Ut=M[at];nt=K[at];for(let vt=0,I=Ut.length;vt<I;vt++){const T=B(Ut[vt],nt[vt],dt);b?ot(T.x,T.y+_[u-1].y,_[u-1].x+ht):ot(T.x,T.y,d+ht)}}}$(),tt();function $(){const j=s.length/3;if(h){let D=0,ht=z*D;for(let dt=0;dt<O;dt++){const at=N[dt];At(at[2]+ht,at[1]+ht,at[0]+ht)}D=u+m*2,ht=z*D;for(let dt=0;dt<O;dt++){const at=N[dt];At(at[0]+ht,at[1]+ht,at[2]+ht)}}else{for(let D=0;D<O;D++){const ht=N[D];At(ht[2],ht[1],ht[0])}for(let D=0;D<O;D++){const ht=N[D];At(ht[0]+z*u,ht[1]+z*u,ht[2]+z*u)}}n.addGroup(j,s.length/3-j,0)}function tt(){const j=s.length/3;let D=0;ut(F,D),D+=F.length;for(let ht=0,dt=M.length;ht<dt;ht++){const at=M[ht];ut(at,D),D+=at.length}n.addGroup(j,s.length/3-j,1)}function ut(j,D){let ht=j.length;for(;--ht>=0;){const dt=ht;let at=ht-1;at<0&&(at=j.length-1);for(let ft=0,Ut=u+m*2;ft<Ut;ft++){const vt=z*ft,I=z*(ft+1),T=D+dt+vt,W=D+at+vt,J=D+at+I,st=D+dt+I;Tt(T,W,J,st)}}}function ot(j,D,ht){c.push(j),c.push(D),c.push(ht)}function At(j,D,ht){Lt(j),Lt(D),Lt(ht);const dt=s.length/3,at=y.generateTopUV(n,s,dt-3,dt-2,dt-1);Bt(at[0]),Bt(at[1]),Bt(at[2])}function Tt(j,D,ht,dt){Lt(j),Lt(D),Lt(dt),Lt(D),Lt(ht),Lt(dt);const at=s.length/3,ft=y.generateSideWallUV(n,s,at-6,at-3,at-2,at-1);Bt(ft[0]),Bt(ft[1]),Bt(ft[3]),Bt(ft[1]),Bt(ft[2]),Bt(ft[3])}function Lt(j){s.push(c[j*3+0]),s.push(c[j*3+1]),s.push(c[j*3+2])}function Bt(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return qA(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Vl[s.type]().fromJSON(s)),new Su(n,t.options)}}const YA={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new it(r,o),new it(a,c),new it(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],d=t[n*3+2],h=t[s*3],f=t[s*3+1],p=t[s*3+2],x=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new it(o,1-c),new it(l,1-d),new it(h,1-p),new it(x,1-g)]:[new it(a,1-c),new it(u,1-d),new it(f,1-p),new it(m,1-g)]}};function qA(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class wu extends as{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new wu(t.radius,t.detail)}}class xa extends as{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xa(t.radius,t.detail)}}class Au extends Xt{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let d=t;const h=(e-t)/s,f=new P,p=new it;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const g=r+m/n*o;f.x=d*Math.cos(g),f.y=d*Math.sin(g),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,u.push(p.x,p.y)}d+=h}for(let x=0;x<s;x++){const m=x*(n+1);for(let g=0;g<n;g++){const y=g+m,_=y,b=y+n+1,S=y+n+2,w=y+1;a.push(_,b,w),a.push(b,S,w)}}this.setIndex(a),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(l,3)),this.setAttribute("uv",new yt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Au(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Eu extends Xt{constructor(t=new Hs([new it(0,.5),new it(-.5,-.5),new it(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new yt(s,3)),this.setAttribute("normal",new yt(r,3)),this.setAttribute("uv",new yt(o,2));function l(u){const d=s.length/3,h=u.extractPoints(e);let f=h.shape;const p=h.holes;ui.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){const y=p[m];ui.isClockWise(y)===!0&&(p[m]=y.reverse())}const x=ui.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){const y=p[m];f=f.concat(y)}for(let m=0,g=f.length;m<g;m++){const y=f[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,g=x.length;m<g;m++){const y=x[m],_=y[0]+d,b=y[1]+d,S=y[2]+d;n.push(_,b,S),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return $A(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Eu(n,t.curveSegments)}}function $A(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class er extends Xt{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new P,h=new P,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){const y=[],_=g/n;let b=0;g===0&&o===0?b=.5/e:g===n&&c===Math.PI&&(b=-.5/e);for(let S=0;S<=e;S++){const w=S/e;d.x=-t*Math.cos(s+w*r)*Math.sin(o+_*a),d.y=t*Math.cos(o+_*a),d.z=t*Math.sin(s+w*r)*Math.sin(o+_*a),p.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(w+b,1-_),y.push(l++)}u.push(y)}for(let g=0;g<n;g++)for(let y=0;y<e;y++){const _=u[g][y+1],b=u[g][y],S=u[g+1][y],w=u[g+1][y+1];(g!==0||o>0)&&f.push(_,b,w),(g!==n-1||c<Math.PI)&&f.push(b,S,w)}this.setIndex(f),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(x,3)),this.setAttribute("uv",new yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new er(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Tu extends as{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Tu(t.radius,t.detail)}}class Cu extends Xt{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new P,d=new P,h=new P;for(let f=0;f<=n;f++)for(let p=0;p<=s;p++){const x=p/s*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(x),d.y=(t+e*Math.cos(m))*Math.sin(x),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),h.subVectors(d,u).normalize(),c.push(h.x,h.y,h.z),l.push(p/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=s;p++){const x=(s+1)*f+p-1,m=(s+1)*(f-1)+p-1,g=(s+1)*(f-1)+p,y=(s+1)*f+p;o.push(x,m,y),o.push(m,g,y)}this.setIndex(o),this.setAttribute("position",new yt(a,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cu(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ru extends Xt{constructor(t=1,e=.4,n=64,s=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:s,p:r,q:o},n=Math.floor(n),s=Math.floor(s);const a=[],c=[],l=[],u=[],d=new P,h=new P,f=new P,p=new P,x=new P,m=new P,g=new P;for(let _=0;_<=n;++_){const b=_/n*r*Math.PI*2;y(b,r,o,t,f),y(b+.01,r,o,t,p),m.subVectors(p,f),g.addVectors(p,f),x.crossVectors(m,g),g.crossVectors(x,m),x.normalize(),g.normalize();for(let S=0;S<=s;++S){const w=S/s*Math.PI*2,A=-e*Math.cos(w),E=e*Math.sin(w);d.x=f.x+(A*g.x+E*x.x),d.y=f.y+(A*g.y+E*x.y),d.z=f.z+(A*g.z+E*x.z),c.push(d.x,d.y,d.z),h.subVectors(d,f).normalize(),l.push(h.x,h.y,h.z),u.push(_/n),u.push(S/s)}}for(let _=1;_<=n;_++)for(let b=1;b<=s;b++){const S=(s+1)*(_-1)+(b-1),w=(s+1)*_+(b-1),A=(s+1)*_+b,E=(s+1)*(_-1)+b;a.push(S,w,E),a.push(w,A,E)}this.setIndex(a),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(l,3)),this.setAttribute("uv",new yt(u,2));function y(_,b,S,w,A){const E=Math.cos(_),C=Math.sin(_),v=S/b*_,M=Math.cos(v);A.x=w*(2+M)*.5*E,A.y=w*(2+M)*C*.5,A.z=w*Math.sin(v)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ru(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class Pu extends Xt{constructor(t=new wf(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new P,c=new P,l=new it;let u=new P;const d=[],h=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new yt(d,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(f,2));function x(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),y(),g()}function m(_){u=t.getPointAt(_/e,u);const b=o.normals[_],S=o.binormals[_];for(let w=0;w<=s;w++){const A=w/s*Math.PI*2,E=Math.sin(A),C=-Math.cos(A);c.x=C*b.x+E*S.x,c.y=C*b.y+E*S.y,c.z=C*b.z+E*S.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,d.push(a.x,a.y,a.z)}}function g(){for(let _=1;_<=e;_++)for(let b=1;b<=s;b++){const S=(s+1)*(_-1)+(b-1),w=(s+1)*_+(b-1),A=(s+1)*_+b,E=(s+1)*(_-1)+b;p.push(S,w,E),p.push(w,A,E)}}function y(){for(let _=0;_<=e;_++)for(let b=0;b<=s;b++)l.x=_/e,l.y=b/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Pu(new Vl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Vx extends Xt{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,s=new P,r=new P;if(t.index!==null){const o=t.attributes.position,a=t.index;let c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const d=c[l],h=d.start,f=d.count;for(let p=h,x=h+f;p<x;p+=3)for(let m=0;m<3;m++){const g=a.getX(p+m),y=a.getX(p+(m+1)%3);s.fromBufferAttribute(o,g),r.fromBufferAttribute(o,y),Sm(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const o=t.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const u=3*a+l,d=3*a+(l+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,d),Sm(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new yt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Sm(i,t,e){const n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}var wm=Object.freeze({__proto__:null,BoxGeometry:Qs,CapsuleGeometry:_u,CircleGeometry:yu,ConeGeometry:vu,CylinderGeometry:tr,DodecahedronGeometry:Mu,EdgesGeometry:zx,ExtrudeGeometry:Su,IcosahedronGeometry:wu,LatheGeometry:ga,OctahedronGeometry:xa,PlaneGeometry:js,PolyhedronGeometry:as,RingGeometry:Au,ShapeGeometry:Eu,SphereGeometry:er,TetrahedronGeometry:Tu,TorusGeometry:Cu,TorusKnotGeometry:Ru,TubeGeometry:Pu,WireframeGeometry:Vx});class Gx extends Qe{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new q(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class Wx extends Vn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class We extends Qe{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new q(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=os,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xx extends We{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return we(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new q(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new q(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new q(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Yx extends Qe{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new q(16777215),this.specular=new q(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=os,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=la,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class qx extends Qe{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new q(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=os,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class $x extends Qe{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=os,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Zx extends Qe{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=os,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=la,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Kx extends Qe{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new q(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=os,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Jx extends hn{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function Ns(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Qx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function jx(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function Md(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let c=0;c!==t;++c)s[o++]=i[a+c]}return s}function Ef(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}function ZA(i,t,e,n,s=30){const r=i.clone();r.name=t;const o=[];for(let c=0;c<r.tracks.length;++c){const l=r.tracks[c],u=l.getValueSize(),d=[],h=[];for(let f=0;f<l.times.length;++f){const p=l.times[f]*s;if(!(p<e||p>=n)){d.push(l.times[f]);for(let x=0;x<u;++x)h.push(l.values[f*u+x])}}d.length!==0&&(l.times=Ns(d,l.times.constructor),l.values=Ns(h,l.values.constructor),o.push(l))}r.tracks=o;let a=1/0;for(let c=0;c<r.tracks.length;++c)a>r.tracks[c].times[0]&&(a=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*a);return r.resetDuration(),r}function KA(i,t=0,e=i,n=30){n<=0&&(n=30);const s=e.tracks.length,r=t/n;for(let o=0;o<s;++o){const a=e.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=i.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===c});if(l===void 0)continue;let u=0;const d=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=d/3);let h=0;const f=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=f/3);const p=a.times.length-1;let x;if(r<=a.times[0]){const g=u,y=d-u;x=a.values.slice(g,y)}else if(r>=a.times[p]){const g=p*d+u,y=g+d-u;x=a.values.slice(g,y)}else{const g=a.createInterpolant(),y=u,_=d-u;g.evaluate(r),x=g.resultBuffer.slice(y,_)}c==="quaternion"&&new an().fromArray(x).normalize().conjugate().toArray(x);const m=l.times.length;for(let g=0;g<m;++g){const y=g*f+h;if(c==="quaternion")an.multiplyQuaternionsFlat(l.values,y,x,0,l.values,y);else{const _=f-h*2;for(let b=0;b<_;++b)l.values[y+b]-=x[b]}}}return i.blendMode=of,i}const JA={convertArray:Ns,isTypedArray:Qx,getKeyframeOrder:jx,sortedArray:Md,flattenJSON:Ef,subclip:ZA,makeClipAdditive:KA};class _a{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break e}o=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class t_ extends _a{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Is,endingEnd:Is}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ls:r=t,a=2*e-n;break;case Xo:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ls:o=t,c=2*n-e;break;case Xo:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}const l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),x=p*p,m=x*p,g=-h*m+2*h*x-h*p,y=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*p+1,_=(-1-f)*m+(1.5+f)*x+.5*p,b=f*m-f*x;for(let S=0;S!==a;++S)r[S]=g*o[u+S]+y*o[l+S]+_*o[c+S]+b*o[d+S];return r}}class Tf extends _a{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(s-e),d=1-u;for(let h=0;h!==a;++h)r[h]=o[l+h]*d+o[c+h]*u;return r}}class e_ extends _a{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class ti{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ns(e,this.TimeBufferType),this.values=Ns(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ns(t.times,Array),values:Ns(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new e_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Tf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new t_(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Wo:e=this.InterpolantFactoryMethodDiscrete;break;case Bl:e=this.InterpolantFactoryMethodLinear;break;case Bc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wo;case this.InterpolantFactoryMethodLinear:return Bl;case this.InterpolantFactoryMethodSmooth:return Bc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Qx(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Bc,r=t.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{const d=a*n,h=d-n,f=d+n;for(let p=0;p!==n;++p){const x=e[d+p];if(x!==e[h+p]||x!==e[f+p]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const d=a*n,h=o*n;for(let f=0;f!==n;++f)e[h+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=Bl;class nr extends ti{constructor(t,e,n){super(t,e,n)}}nr.prototype.ValueTypeName="bool";nr.prototype.ValueBufferType=Array;nr.prototype.DefaultInterpolation=Wo;nr.prototype.InterpolantFactoryMethodLinear=void 0;nr.prototype.InterpolantFactoryMethodSmooth=void 0;class Cf extends ti{}Cf.prototype.ValueTypeName="color";class na extends ti{}na.prototype.ValueTypeName="number";class n_ extends _a{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e);let l=t*a;for(let u=l+a;l!==u;l+=4)an.slerpFlat(r,0,o,l-a,o,l,c);return r}}class ya extends ti{InterpolantFactoryMethodLinear(t){return new n_(this.times,this.values,this.getValueSize(),t)}}ya.prototype.ValueTypeName="quaternion";ya.prototype.InterpolantFactoryMethodSmooth=void 0;class ir extends ti{constructor(t,e,n){super(t,e,n)}}ir.prototype.ValueTypeName="string";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=Wo;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;class ia extends ti{}ia.prototype.ValueTypeName="vector";class sa{constructor(t="",e=-1,n=[],s=ru){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=Dn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(jA(n[o]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(ti.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=jx(c);c=Md(c,1,u),l=Md(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new na(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],u=l.name.match(r);if(u&&u.length>1){const d=u[1];let h=s[d];h||(s[d]=h=[]),h.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,f,p,x){if(f.length!==0){const m=[],g=[];Ef(f,m,g,p),m.length!==0&&x.push(new d(h,m,g))}},s=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let d=0;d<l.length;d++){const h=l[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let p;for(p=0;p<h.length;p++)if(h[p].morphTargets)for(let x=0;x<h[p].morphTargets.length;x++)f[h[p].morphTargets[x]]=-1;for(const x in f){const m=[],g=[];for(let y=0;y!==h[p].morphTargets.length;++y){const _=h[p];m.push(_.time),g.push(_.morphTarget===x?1:0)}s.push(new na(".morphTargetInfluence["+x+"]",m,g))}c=f.length*o}else{const f=".bones["+e[d].name+"]";n(ia,f+".position",h,"pos",s),n(ya,f+".quaternion",h,"rot",s),n(ia,f+".scale",h,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function QA(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return na;case"vector":case"vector2":case"vector3":case"vector4":return ia;case"color":return Cf;case"quaternion":return ya;case"bool":case"boolean":return nr;case"string":return ir}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function jA(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=QA(i.type);if(i.times===void 0){const e=[],n=[];Ef(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const Ei={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Rf{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){const f=l[d],p=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null}}}const i_=new Rf;class An{constructor(t){this.manager=t!==void 0?t:i_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}An.DEFAULT_MATERIAL_NAME="__DEFAULT";const bi={};class tE extends Error{constructor(t,e){super(t),this.response=e}}class Ni extends An{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Ei.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(bi[t]!==void 0){bi[t].push({onLoad:e,onProgress:n,onError:s});return}bi[t]=[],bi[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=bi[t],d=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=h?parseInt(h):0,p=f!==0;let x=0;const m=new ReadableStream({start(g){y();function y(){d.read().then(({done:_,value:b})=>{if(_)g.close();else{x+=b.byteLength;const S=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let w=0,A=u.length;w<A;w++){const E=u[w];E.onProgress&&E.onProgress(S)}g.enqueue(b),y()}},_=>{g.error(_)})}}});return new Response(m)}else throw new tE(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{Ei.add(t,l);const u=bi[t];delete bi[t];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=bi[t];if(u===void 0)throw this.manager.itemError(t),l;delete bi[t];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class eE extends An{constructor(t){super(t)}load(t,e,n,s){const r=this,o=new Ni(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(c){s?s(c):console.error(c),r.manager.itemError(t)}},n,s)}parse(t){const e=[];for(let n=0;n<t.length;n++){const s=sa.parse(t[n]);e.push(s)}return e}}class nE extends An{constructor(t){super(t)}load(t,e,n,s){const r=this,o=[],a=new gu,c=new Ni(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(r.withCredentials);let l=0;function u(d){c.load(t[d],function(h){const f=r.parse(h,!0);o[d]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},l+=1,l===6&&(f.mipmapCount===1&&(a.minFilter=Le),a.image=o,a.format=f.format,a.needsUpdate=!0,e&&e(a))},n,s)}if(Array.isArray(t))for(let d=0,h=t.length;d<h;++d)u(d);else c.load(t,function(d){const h=r.parse(d,!0);if(h.isCubemap){const f=h.mipmaps.length/h.mipmapCount;for(let p=0;p<f;p++){o[p]={mipmaps:[]};for(let x=0;x<h.mipmapCount;x++)o[p].mipmaps.push(h.mipmaps[p*h.mipmapCount+x]),o[p].format=h.format,o[p].width=h.width,o[p].height=h.height}a.image=o}else a.image.width=h.width,a.image.height=h.height,a.mipmaps=h.mipmaps;h.mipmapCount===1&&(a.minFilter=Le),a.format=h.format,a.needsUpdate=!0,e&&e(a)},n,s);return a}}class ra extends An{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Ei.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Jo("img");function c(){u(),Ei.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(d){u(),s&&s(d),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class iE extends An{constructor(t){super(t)}load(t,e,n,s){const r=new da;r.colorSpace=mn;const o=new ra(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(t[l],function(u){r.images[l]=u,a++,a===6&&(r.needsUpdate=!0,e&&e(r))},void 0,s)}for(let l=0;l<t.length;++l)c(l);return r}}class sE extends An{constructor(t){super(t)}load(t,e,n,s){const r=this,o=new li,a=new Ni(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,function(c){let l;try{l=r.parse(c)}catch(u){if(s!==void 0)s(u);else{console.error(u);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:kn,o.wrapT=l.wrapT!==void 0?l.wrapT:kn,o.magFilter=l.magFilter!==void 0?l.magFilter:Le,o.minFilter=l.minFilter!==void 0?l.minFilter:Le,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=oi),l.mipmapCount===1&&(o.minFilter=Le),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,e&&e(o,l)},n,s),o}}class s_ extends An{constructor(t){super(t)}load(t,e,n,s){const r=new Ae,o=new ra(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class cs extends ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new q(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Pf extends cs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new q(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Rh=new Nt,Am=new P,Em=new P;class If{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fa,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Am.setFromMatrixPosition(t.matrixWorld),e.position.copy(Am),Em.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Em),e.updateMatrixWorld(),Rh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class rE extends If{constructor(){super(new Be(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Hr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class r_ extends cs{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ie.DEFAULT_UP),this.updateMatrix(),this.target=new ie,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new rE}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Tm=new Nt,po=new P,Ph=new P;class oE extends If{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new Jt(2,1,1,1),new Jt(0,1,1,1),new Jt(3,1,1,1),new Jt(1,1,1,1),new Jt(3,0,1,1),new Jt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),po.setFromMatrixPosition(t.matrixWorld),n.position.copy(po),Ph.copy(n.position),Ph.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ph),n.updateMatrixWorld(),s.makeTranslation(-po.x,-po.y,-po.z),Tm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tm)}}class o_ extends cs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new oE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class aE extends If{constructor(){super(new uu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lf extends cs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ie.DEFAULT_UP),this.updateMatrix(),this.target=new ie,this.shadow=new aE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class a_ extends cs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class c_ extends cs{constructor(t,e,n=10,s=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}class l_{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new P)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,s=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.282095),e.addScaledVector(o[1],.488603*s),e.addScaledVector(o[2],.488603*r),e.addScaledVector(o[3],.488603*n),e.addScaledVector(o[4],1.092548*(n*s)),e.addScaledVector(o[5],1.092548*(s*r)),e.addScaledVector(o[6],.315392*(3*r*r-1)),e.addScaledVector(o[7],1.092548*(n*r)),e.addScaledVector(o[8],.546274*(n*n-s*s)),e}getIrradianceAt(t,e){const n=t.x,s=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.886227),e.addScaledVector(o[1],2*.511664*s),e.addScaledVector(o[2],2*.511664*r),e.addScaledVector(o[3],2*.511664*n),e.addScaledVector(o[4],2*.429043*n*s),e.addScaledVector(o[5],2*.429043*s*r),e.addScaledVector(o[6],.743125*r*r-.247708),e.addScaledVector(o[7],2*.429043*n*r),e.addScaledVector(o[8],.429043*(n*n-s*s)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let s=0;s<9;s++)n[s].fromArray(t,e+s*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let s=0;s<9;s++)n[s].toArray(t,e+s*3);return t}static getBasisAt(t,e){const n=t.x,s=t.y,r=t.z;e[0]=.282095,e[1]=.488603*s,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*s,e[5]=1.092548*s*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-s*s)}}class u_ extends cs{constructor(t=new l_,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}class Iu extends An{constructor(t){super(t),this.textures={}}load(t,e,n,s){const r=this,o=new Ni(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(c){s?s(c):console.error(c),r.manager.itemError(t)}},n,s)}parse(t){const e=this.textures;function n(r){return e[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),e[r]}const s=this.createMaterialFromType(t.type);if(t.uuid!==void 0&&(s.uuid=t.uuid),t.name!==void 0&&(s.name=t.name),t.color!==void 0&&s.color!==void 0&&s.color.setHex(t.color),t.roughness!==void 0&&(s.roughness=t.roughness),t.metalness!==void 0&&(s.metalness=t.metalness),t.sheen!==void 0&&(s.sheen=t.sheen),t.sheenColor!==void 0&&(s.sheenColor=new q().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(s.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&s.emissive!==void 0&&s.emissive.setHex(t.emissive),t.specular!==void 0&&s.specular!==void 0&&s.specular.setHex(t.specular),t.specularIntensity!==void 0&&(s.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&s.specularColor!==void 0&&s.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(s.shininess=t.shininess),t.clearcoat!==void 0&&(s.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(s.dispersion=t.dispersion),t.iridescence!==void 0&&(s.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(s.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(s.transmission=t.transmission),t.thickness!==void 0&&(s.thickness=t.thickness),t.attenuationDistance!==void 0&&(s.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&s.attenuationColor!==void 0&&s.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(s.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(s.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(s.fog=t.fog),t.flatShading!==void 0&&(s.flatShading=t.flatShading),t.blending!==void 0&&(s.blending=t.blending),t.combine!==void 0&&(s.combine=t.combine),t.side!==void 0&&(s.side=t.side),t.shadowSide!==void 0&&(s.shadowSide=t.shadowSide),t.opacity!==void 0&&(s.opacity=t.opacity),t.transparent!==void 0&&(s.transparent=t.transparent),t.alphaTest!==void 0&&(s.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(s.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(s.depthFunc=t.depthFunc),t.depthTest!==void 0&&(s.depthTest=t.depthTest),t.depthWrite!==void 0&&(s.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(s.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(s.blendSrc=t.blendSrc),t.blendDst!==void 0&&(s.blendDst=t.blendDst),t.blendEquation!==void 0&&(s.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(s.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(s.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(s.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&s.blendColor!==void 0&&s.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(s.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(s.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(s.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(s.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(s.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(s.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(s.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(s.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(s.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(s.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(s.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(s.rotation=t.rotation),t.linewidth!==void 0&&(s.linewidth=t.linewidth),t.dashSize!==void 0&&(s.dashSize=t.dashSize),t.gapSize!==void 0&&(s.gapSize=t.gapSize),t.scale!==void 0&&(s.scale=t.scale),t.polygonOffset!==void 0&&(s.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(s.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(s.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(s.dithering=t.dithering),t.alphaToCoverage!==void 0&&(s.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(s.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(s.forceSinglePass=t.forceSinglePass),t.visible!==void 0&&(s.visible=t.visible),t.toneMapped!==void 0&&(s.toneMapped=t.toneMapped),t.userData!==void 0&&(s.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?s.vertexColors=t.vertexColors>0:s.vertexColors=t.vertexColors),t.uniforms!==void 0)for(const r in t.uniforms){const o=t.uniforms[r];switch(s.uniforms[r]={},o.type){case"t":s.uniforms[r].value=n(o.value);break;case"c":s.uniforms[r].value=new q().setHex(o.value);break;case"v2":s.uniforms[r].value=new it().fromArray(o.value);break;case"v3":s.uniforms[r].value=new P().fromArray(o.value);break;case"v4":s.uniforms[r].value=new Jt().fromArray(o.value);break;case"m3":s.uniforms[r].value=new qt().fromArray(o.value);break;case"m4":s.uniforms[r].value=new Nt().fromArray(o.value);break;default:s.uniforms[r].value=o.value}}if(t.defines!==void 0&&(s.defines=t.defines),t.vertexShader!==void 0&&(s.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(s.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(s.glslVersion=t.glslVersion),t.extensions!==void 0)for(const r in t.extensions)s.extensions[r]=t.extensions[r];if(t.lights!==void 0&&(s.lights=t.lights),t.clipping!==void 0&&(s.clipping=t.clipping),t.size!==void 0&&(s.size=t.size),t.sizeAttenuation!==void 0&&(s.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(s.map=n(t.map)),t.matcap!==void 0&&(s.matcap=n(t.matcap)),t.alphaMap!==void 0&&(s.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(s.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(s.bumpScale=t.bumpScale),t.normalMap!==void 0&&(s.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(s.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),s.normalScale=new it().fromArray(r)}return t.displacementMap!==void 0&&(s.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(s.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(s.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(s.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(s.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(s.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(s.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(s.specularMap=n(t.specularMap)),t.specularIntensityMap!==void 0&&(s.specularIntensityMap=n(t.specularIntensityMap)),t.specularColorMap!==void 0&&(s.specularColorMap=n(t.specularColorMap)),t.envMap!==void 0&&(s.envMap=n(t.envMap)),t.envMapRotation!==void 0&&s.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(s.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(s.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(s.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(s.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(s.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(s.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(s.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(s.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(s.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(s.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(s.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(s.clearcoatNormalScale=new it().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(s.iridescenceMap=n(t.iridescenceMap)),t.iridescenceThicknessMap!==void 0&&(s.iridescenceThicknessMap=n(t.iridescenceThicknessMap)),t.transmissionMap!==void 0&&(s.transmissionMap=n(t.transmissionMap)),t.thicknessMap!==void 0&&(s.thicknessMap=n(t.thicknessMap)),t.anisotropyMap!==void 0&&(s.anisotropyMap=n(t.anisotropyMap)),t.sheenColorMap!==void 0&&(s.sheenColorMap=n(t.sheenColorMap)),t.sheenRoughnessMap!==void 0&&(s.sheenRoughnessMap=n(t.sheenRoughnessMap)),s}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return Iu.createMaterialFromType(t)}static createMaterialFromType(t){const e={ShadowMaterial:Gx,SpriteMaterial:xf,RawShaderMaterial:Wx,ShaderMaterial:Vn,PointsMaterial:yf,MeshPhysicalMaterial:Xx,MeshStandardMaterial:We,MeshPhongMaterial:Yx,MeshToonMaterial:qx,MeshNormalMaterial:$x,MeshLambertMaterial:Zx,MeshDepthMaterial:du,MeshDistanceMaterial:mf,MeshBasicMaterial:fi,MeshMatcapMaterial:Kx,LineDashedMaterial:Jx,LineBasicMaterial:hn,Material:Qe};return new e[t]}}class bd{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class h_ extends Xt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class d_ extends An{constructor(t){super(t)}load(t,e,n,s){const r=this,o=new Ni(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(c){s?s(c):console.error(c),r.manager.itemError(t)}},n,s)}parse(t){const e={},n={};function s(f,p){if(e[p]!==void 0)return e[p];const m=f.interleavedBuffers[p],g=r(f,m.buffer),y=Pr(m.type,g),_=new pu(y,m.stride);return _.uuid=m.uuid,e[p]=_,_}function r(f,p){if(n[p]!==void 0)return n[p];const m=f.arrayBuffers[p],g=new Uint32Array(m).buffer;return n[p]=g,g}const o=t.isInstancedBufferGeometry?new h_:new Xt,a=t.data.index;if(a!==void 0){const f=Pr(a.type,a.array);o.setIndex(new ue(f,1))}const c=t.data.attributes;for(const f in c){const p=c[f];let x;if(p.isInterleavedBufferAttribute){const m=s(t.data,p.data);x=new qs(m,p.itemSize,p.offset,p.normalized)}else{const m=Pr(p.type,p.array),g=p.isInstancedBufferAttribute?gn:ue;x=new g(m,p.itemSize,p.normalized)}p.name!==void 0&&(x.name=p.name),p.usage!==void 0&&x.setUsage(p.usage),o.setAttribute(f,x)}const l=t.data.morphAttributes;if(l)for(const f in l){const p=l[f],x=[];for(let m=0,g=p.length;m<g;m++){const y=p[m];let _;if(y.isInterleavedBufferAttribute){const b=s(t.data,y.data);_=new qs(b,y.itemSize,y.offset,y.normalized)}else{const b=Pr(y.type,y.array);_=new ue(b,y.itemSize,y.normalized)}y.name!==void 0&&(_.name=y.name),x.push(_)}o.morphAttributes[f]=x}t.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const d=t.data.groups||t.data.drawcalls||t.data.offsets;if(d!==void 0)for(let f=0,p=d.length;f!==p;++f){const x=d[f];o.addGroup(x.start,x.count,x.materialIndex)}const h=t.data.boundingSphere;if(h!==void 0){const f=new P;h.center!==void 0&&f.fromArray(h.center),o.boundingSphere=new Ge(f,h.radius)}return t.name&&(o.name=t.name),t.userData&&(o.userData=t.userData),o}}class cE extends An{constructor(t){super(t)}load(t,e,n,s){const r=this,o=this.path===""?bd.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||o;const a=new Ni(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(c){let l=null;try{l=JSON.parse(c)}catch(d){s!==void 0&&s(d),console.error("THREE:ObjectLoader: Can't parse "+t+".",d.message);return}const u=l.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){s!==void 0&&s(new Error("THREE.ObjectLoader: Can't load "+t)),console.error("THREE.ObjectLoader: Can't load "+t);return}r.parse(l,e)},n,s)}async loadAsync(t,e){const n=this,s=this.path===""?bd.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||s;const r=new Ni(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const o=await r.loadAsync(t,e),a=JSON.parse(o),c=a.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(a)}parse(t,e){const n=this.parseAnimations(t.animations),s=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,s),o=this.parseImages(t.images,function(){e!==void 0&&e(l)}),a=this.parseTextures(t.textures,o),c=this.parseMaterials(t.materials,a),l=this.parseObject(t.object,r,c,a,n),u=this.parseSkeletons(t.skeletons,l);if(this.bindSkeletons(l,u),this.bindLightTargets(l),e!==void 0){let d=!1;for(const h in o)if(o[h].data instanceof HTMLImageElement){d=!0;break}d===!1&&e(l)}return l}async parseAsync(t){const e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),s=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),o=this.parseTextures(t.textures,r),a=this.parseMaterials(t.materials,o),c=this.parseObject(t.object,s,a,o,e),l=this.parseSkeletons(t.skeletons,c);return this.bindSkeletons(c,l),this.bindLightTargets(c),c}parseShapes(t){const e={};if(t!==void 0)for(let n=0,s=t.length;n<s;n++){const r=new Hs().fromJSON(t[n]);e[r.uuid]=r}return e}parseSkeletons(t,e){const n={},s={};if(e.traverse(function(r){r.isBone&&(s[r.uuid]=r)}),t!==void 0)for(let r=0,o=t.length;r<o;r++){const a=new mu().fromJSON(t[r],s);n[a.uuid]=a}return n}parseGeometries(t,e){const n={};if(t!==void 0){const s=new d_;for(let r=0,o=t.length;r<o;r++){let a;const c=t[r];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":a=s.parse(c);break;default:c.type in wm?a=wm[c.type].fromJSON(c,e):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`)}a.uuid=c.uuid,c.name!==void 0&&(a.name=c.name),c.userData!==void 0&&(a.userData=c.userData),n[c.uuid]=a}}return n}parseMaterials(t,e){const n={},s={};if(t!==void 0){const r=new Iu;r.setTextures(e);for(let o=0,a=t.length;o<a;o++){const c=t[o];n[c.uuid]===void 0&&(n[c.uuid]=r.parse(c)),s[c.uuid]=n[c.uuid]}}return s}parseAnimations(t){const e={};if(t!==void 0)for(let n=0;n<t.length;n++){const s=t[n],r=sa.parse(s);e[r.uuid]=r}return e}parseImages(t,e){const n=this,s={};let r;function o(c){return n.manager.itemStart(c),r.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function a(c){if(typeof c=="string"){const l=c,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return o(u)}else return c.data?{data:Pr(c.type,c.data),width:c.width,height:c.height}:null}if(t!==void 0&&t.length>0){const c=new Rf(e);r=new ra(c),r.setCrossOrigin(this.crossOrigin);for(let l=0,u=t.length;l<u;l++){const d=t[l],h=d.url;if(Array.isArray(h)){const f=[];for(let p=0,x=h.length;p<x;p++){const m=h[p],g=a(m);g!==null&&(g instanceof HTMLImageElement?f.push(g):f.push(new li(g.data,g.width,g.height)))}s[d.uuid]=new Ds(f)}else{const f=a(d.url);s[d.uuid]=new Ds(f)}}}return s}async parseImagesAsync(t){const e=this,n={};let s;async function r(o){if(typeof o=="string"){const a=o,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:e.resourcePath+a;return await s.loadAsync(c)}else return o.data?{data:Pr(o.type,o.data),width:o.width,height:o.height}:null}if(t!==void 0&&t.length>0){s=new ra(this.manager),s.setCrossOrigin(this.crossOrigin);for(let o=0,a=t.length;o<a;o++){const c=t[o],l=c.url;if(Array.isArray(l)){const u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d],p=await r(f);p!==null&&(p instanceof HTMLImageElement?u.push(p):u.push(new li(p.data,p.width,p.height)))}n[c.uuid]=new Ds(u)}else{const u=await r(c.url);n[c.uuid]=new Ds(u)}}}return n}parseTextures(t,e){function n(r,o){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}const s={};if(t!==void 0)for(let r=0,o=t.length;r<o;r++){const a=t[r];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),e[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);const c=e[a.image],l=c.data;let u;Array.isArray(l)?(u=new da,l.length===6&&(u.needsUpdate=!0)):(l&&l.data?u=new li:u=new Ae,l&&(u.needsUpdate=!0)),u.source=c,u.uuid=a.uuid,a.name!==void 0&&(u.name=a.name),a.mapping!==void 0&&(u.mapping=n(a.mapping,lE)),a.channel!==void 0&&(u.channel=a.channel),a.offset!==void 0&&u.offset.fromArray(a.offset),a.repeat!==void 0&&u.repeat.fromArray(a.repeat),a.center!==void 0&&u.center.fromArray(a.center),a.rotation!==void 0&&(u.rotation=a.rotation),a.wrap!==void 0&&(u.wrapS=n(a.wrap[0],Cm),u.wrapT=n(a.wrap[1],Cm)),a.format!==void 0&&(u.format=a.format),a.internalFormat!==void 0&&(u.internalFormat=a.internalFormat),a.type!==void 0&&(u.type=a.type),a.colorSpace!==void 0&&(u.colorSpace=a.colorSpace),a.minFilter!==void 0&&(u.minFilter=n(a.minFilter,Rm)),a.magFilter!==void 0&&(u.magFilter=n(a.magFilter,Rm)),a.anisotropy!==void 0&&(u.anisotropy=a.anisotropy),a.flipY!==void 0&&(u.flipY=a.flipY),a.generateMipmaps!==void 0&&(u.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(u.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(u.compareFunction=a.compareFunction),a.userData!==void 0&&(u.userData=a.userData),s[a.uuid]=u}return s}parseObject(t,e,n,s,r){let o;function a(h){return e[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",h),e[h]}function c(h){if(h!==void 0){if(Array.isArray(h)){const f=[];for(let p=0,x=h.length;p<x;p++){const m=h[p];n[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),f.push(n[m])}return f}return n[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",h),n[h]}}function l(h){return s[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",h),s[h]}let u,d;switch(t.type){case"Scene":o=new gf,t.background!==void 0&&(Number.isInteger(t.background)?o.background=new q(t.background):o.background=l(t.background)),t.environment!==void 0&&(o.environment=l(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?o.fog=new pa(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(o.fog=new fu(t.fog.color,t.fog.density)),t.fog.name!==""&&(o.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(o.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(o.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&o.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":o=new Be(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(o.focus=t.focus),t.zoom!==void 0&&(o.zoom=t.zoom),t.filmGauge!==void 0&&(o.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(o.filmOffset=t.filmOffset),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"OrthographicCamera":o=new uu(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(o.zoom=t.zoom),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"AmbientLight":o=new a_(t.color,t.intensity);break;case"DirectionalLight":o=new Lf(t.color,t.intensity),o.target=t.target||"";break;case"PointLight":o=new o_(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":o=new c_(t.color,t.intensity,t.width,t.height);break;case"SpotLight":o=new r_(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),o.target=t.target||"";break;case"HemisphereLight":o=new Pf(t.color,t.groundColor,t.intensity);break;case"LightProbe":o=new u_().fromJSON(t);break;case"SkinnedMesh":u=a(t.geometry),d=c(t.material),o=new Rx(u,d),t.bindMode!==void 0&&(o.bindMode=t.bindMode),t.bindMatrix!==void 0&&o.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(o.skeleton=t.skeleton);break;case"Mesh":u=a(t.geometry),d=c(t.material),o=new Vt(u,d);break;case"InstancedMesh":u=a(t.geometry),d=c(t.material);const h=t.count,f=t.instanceMatrix,p=t.instanceColor;o=new ma(u,d,h),o.instanceMatrix=new gn(new Float32Array(f.array),16),p!==void 0&&(o.instanceColor=new gn(new Float32Array(p.array),p.itemSize));break;case"BatchedMesh":u=a(t.geometry),d=c(t.material),o=new Px(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,d),o.geometry=u,o.perObjectFrustumCulled=t.perObjectFrustumCulled,o.sortObjects=t.sortObjects,o._drawRanges=t.drawRanges,o._reservedRanges=t.reservedRanges,o._visibility=t.visibility,o._active=t.active,o._bounds=t.bounds.map(x=>{const m=new cn;m.min.fromArray(x.boxMin),m.max.fromArray(x.boxMax);const g=new Ge;return g.radius=x.sphereRadius,g.center.fromArray(x.sphereCenter),{boxInitialized:x.boxInitialized,box:m,sphereInitialized:x.sphereInitialized,sphere:g}}),o._maxInstanceCount=t.maxInstanceCount,o._maxVertexCount=t.maxVertexCount,o._maxIndexCount=t.maxIndexCount,o._geometryInitialized=t.geometryInitialized,o._geometryCount=t.geometryCount,o._matricesTexture=l(t.matricesTexture.uuid),t.colorsTexture!==void 0&&(o._colorsTexture=l(t.colorsTexture.uuid));break;case"LOD":o=new Cx;break;case"Line":o=new is(a(t.geometry),c(t.material));break;case"LineLoop":o=new Ix(a(t.geometry),c(t.material));break;case"LineSegments":o=new pi(a(t.geometry),c(t.material));break;case"PointCloud":case"Points":o=new Lx(a(t.geometry),c(t.material));break;case"Sprite":o=new Tx(c(t.material));break;case"Group":o=new Re;break;case"Bone":o=new _f;break;default:o=new ie}if(o.uuid=t.uuid,t.name!==void 0&&(o.name=t.name),t.matrix!==void 0?(o.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=t.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(t.position!==void 0&&o.position.fromArray(t.position),t.rotation!==void 0&&o.rotation.fromArray(t.rotation),t.quaternion!==void 0&&o.quaternion.fromArray(t.quaternion),t.scale!==void 0&&o.scale.fromArray(t.scale)),t.up!==void 0&&o.up.fromArray(t.up),t.castShadow!==void 0&&(o.castShadow=t.castShadow),t.receiveShadow!==void 0&&(o.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(o.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(o.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(o.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(o.shadow.radius=t.shadow.radius),t.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(o.visible=t.visible),t.frustumCulled!==void 0&&(o.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(o.renderOrder=t.renderOrder),t.userData!==void 0&&(o.userData=t.userData),t.layers!==void 0&&(o.layers.mask=t.layers),t.children!==void 0){const h=t.children;for(let f=0;f<h.length;f++)o.add(this.parseObject(h[f],e,n,s,r))}if(t.animations!==void 0){const h=t.animations;for(let f=0;f<h.length;f++){const p=h[f];o.animations.push(r[p])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(o.autoUpdate=t.autoUpdate);const h=t.levels;for(let f=0;f<h.length;f++){const p=h[f],x=o.getObjectByProperty("uuid",p.object);x!==void 0&&o.addLevel(x,p.distance,p.hysteresis)}}return o}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const s=e[n.skeleton];s===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(s,n.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){const n=e.target,s=t.getObjectByProperty("uuid",n);s!==void 0?e.target=s:e.target=new ie}})}}const lE={UVMapping:Ql,CubeReflectionMapping:Li,CubeRefractionMapping:ns,EquirectangularReflectionMapping:Ho,EquirectangularRefractionMapping:Vo,CubeUVReflectionMapping:Zr},Cm={RepeatWrapping:Br,ClampToEdgeWrapping:kn,MirroredRepeatWrapping:Go},Rm={NearestFilter:He,NearestMipmapNearestFilter:Zd,NearestMipmapLinearFilter:Rr,LinearFilter:Le,LinearMipmapNearestFilter:So,LinearMipmapLinearFilter:oi};class uE extends An{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Ei.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ei.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){s&&s(l),Ei.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Ei.add(t,c),r.manager.itemStart(t)}}let mc;class Df{static getContext(){return mc===void 0&&(mc=new(window.AudioContext||window.webkitAudioContext)),mc}static setContext(t){mc=t}}class hE extends An{constructor(t){super(t)}load(t,e,n,s){const r=this,o=new Ni(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(c){try{const l=c.slice(0);Df.getContext().decodeAudioData(l,function(d){e(d)}).catch(a)}catch(l){a(l)}},n,s);function a(c){s?s(c):console.error(c),r.manager.itemError(t)}}}const Pm=new Nt,Im=new Nt,_s=new Nt;class dE{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Be,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Be,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,_s.copy(t.projectionMatrix);const s=e.eyeSep/2,r=s*e.near/e.focus,o=e.near*Math.tan(ks*e.fov*.5)/e.zoom;let a,c;Im.elements[12]=-s,Pm.elements[12]=s,a=-o*e.aspect+r,c=o*e.aspect+r,_s.elements[0]=2*e.near/(c-a),_s.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(_s),a=-o*e.aspect-r,c=o*e.aspect-r,_s.elements[0]=2*e.near/(c-a),_s.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(_s)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Im),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(Pm)}}class Nf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Lm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Lm();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Lm(){return performance.now()}const ys=new P,Dm=new an,fE=new P,vs=new P;class pE extends ie{constructor(){super(),this.type="AudioListener",this.context=Df.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Nf}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(ys,Dm,fE),vs.set(0,0,-1).applyQuaternion(Dm),e.positionX){const s=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(ys.x,s),e.positionY.linearRampToValueAtTime(ys.y,s),e.positionZ.linearRampToValueAtTime(ys.z,s),e.forwardX.linearRampToValueAtTime(vs.x,s),e.forwardY.linearRampToValueAtTime(vs.y,s),e.forwardZ.linearRampToValueAtTime(vs.z,s),e.upX.linearRampToValueAtTime(n.x,s),e.upY.linearRampToValueAtTime(n.y,s),e.upZ.linearRampToValueAtTime(n.z,s)}else e.setPosition(ys.x,ys.y,ys.z),e.setOrientation(vs.x,vs.y,vs.z,n.x,n.y,n.z)}}class f_ extends ie{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}const Ms=new P,Nm=new an,mE=new P,bs=new P;class gE extends f_{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Ms,Nm,mE),bs.set(0,0,1).applyQuaternion(Nm);const e=this.panner;if(e.positionX){const n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(Ms.x,n),e.positionY.linearRampToValueAtTime(Ms.y,n),e.positionZ.linearRampToValueAtTime(Ms.z,n),e.orientationX.linearRampToValueAtTime(bs.x,n),e.orientationY.linearRampToValueAtTime(bs.y,n),e.orientationZ.linearRampToValueAtTime(bs.z,n)}else e.setPosition(Ms.x,Ms.y,Ms.z),e.setOrientation(bs.x,bs.y,bs.z)}}class xE{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0;const e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}}class p_{constructor(t,e,n){this.binding=t,this.valueSize=n;let s,r,o;switch(e){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,s=this.valueSize,r=t*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,s,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,s=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=e*this._origIndex;this._mixBufferRegion(n,s,c,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){a.setValue(n,s);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,s=n*this._origIndex;t.getValue(e,s);for(let r=n,o=s;r!==o;++r)e[r]=e[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,s){an.slerpFlat(t,e,t,e,t,n,s)}_slerpAdditive(t,e,n,s,r){const o=this._workIndex*r;an.multiplyQuaternionsFlat(t,o,t,e,t,n),an.slerpFlat(t,e,t,e,t,o,s)}_lerp(t,e,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const c=e+a;t[c]=t[c]*o+t[n+a]*s}}_lerpAdditive(t,e,n,s,r){for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]+t[n+o]*s}}}const Uf="\\[\\]\\.:\\/",_E=new RegExp("["+Uf+"]","g"),Of="[^"+Uf+"]",yE="[^"+Uf.replace("\\.","")+"]",vE=/((?:WC+[\/:])*)/.source.replace("WC",Of),ME=/(WCOD+)?/.source.replace("WCOD",yE),bE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Of),SE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Of),wE=new RegExp("^"+vE+ME+bE+SE+"$"),AE=["material","materials","bones","map"];class EE{constructor(t,e,n){const s=n||ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ne{constructor(t,e,n){this.path=e,this.parsedPath=n||ne.parseTrackName(e),this.node=ne.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ne.Composite(t,e,n):new ne(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_E,"")}static parseTrackName(t){const e=wE.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);AE.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=ne.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[s];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ne.Composite=EE;ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ne.prototype.GetterByBindingType=[ne.prototype._getValue_direct,ne.prototype._getValue_array,ne.prototype._getValue_arrayElement,ne.prototype._getValue_toArray];ne.prototype.SetterByBindingTypeAndVersioning=[[ne.prototype._setValue_direct,ne.prototype._setValue_direct_setNeedsUpdate,ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_array,ne.prototype._setValue_array_setNeedsUpdate,ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_arrayElement,ne.prototype._setValue_arrayElement_setNeedsUpdate,ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_fromArray,ne.prototype._setValue_fromArray_setNeedsUpdate,ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class TE{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Dn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let n=0,s=arguments.length;n!==s;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){const t=this._objects,e=this._indicesByUUID,n=this._paths,s=this._parsedPaths,r=this._bindings,o=r.length;let a,c=t.length,l=this.nCachedObjects_;for(let u=0,d=arguments.length;u!==d;++u){const h=arguments[u],f=h.uuid;let p=e[f];if(p===void 0){p=c++,e[f]=p,t.push(h);for(let x=0,m=o;x!==m;++x)r[x].push(new ne(h,n[x],s[x]))}else if(p<l){a=t[p];const x=--l,m=t[x];e[m.uuid]=p,t[p]=m,e[f]=x,t[x]=h;for(let g=0,y=o;g!==y;++g){const _=r[g],b=_[x];let S=_[p];_[p]=b,S===void 0&&(S=new ne(h,n[g],s[g])),_[x]=S}}else t[p]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,s=n.length;let r=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const c=arguments[o],l=c.uuid,u=e[l];if(u!==void 0&&u>=r){const d=r++,h=t[d];e[h.uuid]=u,t[u]=h,e[l]=d,t[d]=c;for(let f=0,p=s;f!==p;++f){const x=n[f],m=x[d],g=x[u];x[u]=m,x[d]=g}}}this.nCachedObjects_=r}uncache(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,s=n.length;let r=this.nCachedObjects_,o=t.length;for(let a=0,c=arguments.length;a!==c;++a){const l=arguments[a],u=l.uuid,d=e[u];if(d!==void 0)if(delete e[u],d<r){const h=--r,f=t[h],p=--o,x=t[p];e[f.uuid]=d,t[d]=f,e[x.uuid]=h,t[h]=x,t.pop();for(let m=0,g=s;m!==g;++m){const y=n[m],_=y[h],b=y[p];y[d]=_,y[h]=b,y.pop()}}else{const h=--o,f=t[h];h>0&&(e[f.uuid]=d),t[d]=f,t.pop();for(let p=0,x=s;p!==x;++p){const m=n[p];m[d]=m[h],m.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){const n=this._bindingsIndicesByPath;let s=n[t];const r=this._bindings;if(s!==void 0)return r[s];const o=this._paths,a=this._parsedPaths,c=this._objects,l=c.length,u=this.nCachedObjects_,d=new Array(l);s=r.length,n[t]=s,o.push(t),a.push(e),r.push(d);for(let h=u,f=c.length;h!==f;++h){const p=c[h];d[h]=new ne(p,t,e)}return d}unsubscribe_(t){const e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){const s=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,c=o[a],l=t[a];e[l]=n,o[n]=c,o.pop(),r[n]=r[a],r.pop(),s[n]=s[a],s.pop()}}}class m_{constructor(t,e,n=null,s=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=s;const r=e.tracks,o=r.length,a=new Array(o),c={endingStart:Is,endingEnd:Is};for(let l=0;l!==o;++l){const u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Jg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const s=this._clip.duration,r=t._clip.duration,o=r/s,a=s/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=t/o,l[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,s){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const c=(t-r)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case of:for(let u=0,d=c.length;u!==d;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case ru:default:for(let u=0,d=c.length;u!==d;++u)c[u].evaluate(o),l[u].accumulate(s,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let s=this.time+t,r=this._loopCount;const o=n===Qg;if(t===0)return r===-1?s:o&&(r&1)===1?e-s:s;if(n===Kg){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(s>=e)s=e;else if(s<0)s=0;else{this.time=s;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=e||s<0){const a=Math.floor(s/e);s-=e*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=t>0?e:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return e-s}return s}_setEndings(t,e,n){const s=this._interpolantSettings;n?(s.endingStart=Ls,s.endingEnd=Ls):(t?s.endingStart=this.zeroSlopeAtStart?Ls:Is:s.endingStart=Xo,e?s.endingEnd=this.zeroSlopeAtEnd?Ls:Is:s.endingEnd=Xo)}_scheduleFading(t,e,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=e,a[1]=r+t,c[1]=n,this}}const CE=new Float32Array(1);class RE extends di{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,s=t._clip.tracks,r=s.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let d=0;d!==r;++d){const h=s[d],f=h.name;let p=u[f];if(p!==void 0)++p.referenceCount,o[d]=p;else{if(p=o[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,f));continue}const x=e&&e._propertyBindings[d].binding.parsedPath;p=new p_(ne.create(n,f,x),h.ValueTypeName,h.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,f),o[d]=p}a[d].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,s=t._clip.uuid,r=this._actionsByClip[s];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,s,n)}const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const s=this._actions,r=this._actionsByClip;let o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=s.length,s.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],s=t._cacheIndex;n._cacheIndex=s,e[s]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=t._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),t._byClipCacheIndex=null;const d=a.actionByRoot,h=(t._localRoot||this._root).uuid;delete d[h],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,s=this._nActiveActions++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,s=--this._nActiveActions,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[e];o===void 0&&(o={},s[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,s=this._nActiveBindings++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,s=--this._nActiveBindings,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Tf(new Float32Array(2),new Float32Array(2),1,CE),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,s=--this._nActiveControlInterpolants,r=e[s];t.__cacheIndex=s,e[s]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const s=e||this._root,r=s.uuid;let o=typeof t=="string"?sa.findByName(s,t):t;const a=o!==null?o.uuid:t,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=ru),c!==void 0){const d=c.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const u=new m_(this,o,e,n);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(t,e){const n=e||this._root,s=n.uuid,r=typeof t=="string"?sa.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,s=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(s,t,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const u=l._cacheIndex,d=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,d._cacheIndex=u,e[u]=d,e.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[e];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Ff{constructor(t){this.value=t}clone(){return new Ff(this.value.clone===void 0?this.value:this.value.clone())}}let PE=0;class IE extends di{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:PE++}),this.name="",this.usage=Zo,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){const e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(t){this.name=t.name,this.usage=t.usage;const e=t.uniforms;this.uniforms.length=0;for(let n=0,s=e.length;n<s;n++){const r=Array.isArray(e[n])?e[n]:[e[n]];for(let o=0;o<r.length;o++)this.uniforms.push(r[o].clone())}return this}clone(){return new this.constructor().copy(this)}}class LE extends pu{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}class DE{constructor(t,e,n,s,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=s,this.count=r,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}}const Um=new Nt;class NE{constructor(t,e,n=0,s=1/0){this.ray=new Jr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new cu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Um.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Um),this}intersectObject(t,e=!0,n=[]){return Sd(t,this,n,e),n.sort(Om),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Sd(t[s],this,n,e);return n.sort(Om),n}}function Om(i,t){return i.distance-t.distance}function Sd(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Sd(r[o],t,e,!0)}}class UE{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(we(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class OE{constructor(t=1,e=0,n=0){return this.radius=t,this.theta=e,this.y=n,this}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}}class zf{constructor(t,e,n,s){zf.prototype.isMatrix2=!0,this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}}const Fm=new it;class FE{constructor(t=new it(1/0,1/0),e=new it(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Fm.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fm).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const zm=new P,gc=new P;class zE{constructor(t=new P,e=new P){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){zm.subVectors(t,this.start),gc.subVectors(this.end,this.start);const n=gc.dot(gc);let r=gc.dot(zm)/n;return e&&(r=we(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Bm=new P;class BE extends ie{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const n=new Xt,s=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,c=32;o<c;o++,a++){const l=o/c*Math.PI*2,u=a/c*Math.PI*2;s.push(Math.cos(l),Math.sin(l),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new yt(s,3));const r=new hn({fog:!1,toneMapped:!1});this.cone=new pi(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),Bm.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Bm),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const $i=new P,xc=new Nt,Ih=new Nt;class kE extends pi{constructor(t){const e=g_(t),n=new Xt,s=[],r=[],o=new q(0,0,1),a=new q(0,1,0);for(let l=0;l<e.length;l++){const u=e[l];u.parent&&u.parent.isBone&&(s.push(0,0,0),s.push(0,0,0),r.push(o.r,o.g,o.b),r.push(a.r,a.g,a.b))}n.setAttribute("position",new yt(s,3)),n.setAttribute("color",new yt(r,3));const c=new hn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){const e=this.bones,n=this.geometry,s=n.getAttribute("position");Ih.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<e.length;r++){const a=e[r];a.parent&&a.parent.isBone&&(xc.multiplyMatrices(Ih,a.matrixWorld),$i.setFromMatrixPosition(xc),s.setXYZ(o,$i.x,$i.y,$i.z),xc.multiplyMatrices(Ih,a.parent.matrixWorld),$i.setFromMatrixPosition(xc),s.setXYZ(o+1,$i.x,$i.y,$i.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose()}}function g_(i){const t=[];i.isBone===!0&&t.push(i);for(let e=0;e<i.children.length;e++)t.push.apply(t,g_(i.children[e]));return t}class HE extends Vt{constructor(t,e,n){const s=new er(e,4,2),r=new fi({wireframe:!0,fog:!1,toneMapped:!1});super(s,r),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const VE=new P,km=new q,Hm=new q;class GE extends ie{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const s=new xa(e);s.rotateY(Math.PI*.5),this.material=new fi({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=s.getAttribute("position"),o=new Float32Array(r.count*3);s.setAttribute("color",new ue(o,3)),this.add(new Vt(s,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const e=t.geometry.getAttribute("color");km.copy(this.light.color),Hm.copy(this.light.groundColor);for(let n=0,s=e.count;n<s;n++){const r=n<s/2?km:Hm;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),t.lookAt(VE.setFromMatrixPosition(this.light.matrixWorld).negate())}}class WE extends pi{constructor(t=10,e=10,n=4473924,s=8947848){n=new q(n),s=new q(s);const r=e/2,o=t/e,a=t/2,c=[],l=[];for(let h=0,f=0,p=-a;h<=e;h++,p+=o){c.push(-a,0,p,a,0,p),c.push(p,0,-a,p,0,a);const x=h===r?n:s;x.toArray(l,f),f+=3,x.toArray(l,f),f+=3,x.toArray(l,f),f+=3,x.toArray(l,f),f+=3}const u=new Xt;u.setAttribute("position",new yt(c,3)),u.setAttribute("color",new yt(l,3));const d=new hn({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class XE extends pi{constructor(t=10,e=16,n=8,s=64,r=4473924,o=8947848){r=new q(r),o=new q(o);const a=[],c=[];if(e>1)for(let d=0;d<e;d++){const h=d/e*(Math.PI*2),f=Math.sin(h)*t,p=Math.cos(h)*t;a.push(0,0,0),a.push(f,0,p);const x=d&1?r:o;c.push(x.r,x.g,x.b),c.push(x.r,x.g,x.b)}for(let d=0;d<n;d++){const h=d&1?r:o,f=t-t/n*d;for(let p=0;p<s;p++){let x=p/s*(Math.PI*2),m=Math.sin(x)*f,g=Math.cos(x)*f;a.push(m,0,g),c.push(h.r,h.g,h.b),x=(p+1)/s*(Math.PI*2),m=Math.sin(x)*f,g=Math.cos(x)*f,a.push(m,0,g),c.push(h.r,h.g,h.b)}}const l=new Xt;l.setAttribute("position",new yt(a,3)),l.setAttribute("color",new yt(c,3));const u=new hn({vertexColors:!0,toneMapped:!1});super(l,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Vm=new P,_c=new P,Gm=new P;class YE extends ie{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let s=new Xt;s.setAttribute("position",new yt([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const r=new hn({fog:!1,toneMapped:!1});this.lightPlane=new is(s,r),this.add(this.lightPlane),s=new Xt,s.setAttribute("position",new yt([0,0,0,0,0,1],3)),this.targetLine=new is(s,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Vm.setFromMatrixPosition(this.light.matrixWorld),_c.setFromMatrixPosition(this.light.target.matrixWorld),Gm.subVectors(_c,Vm),this.lightPlane.lookAt(_c),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(_c),this.targetLine.scale.z=Gm.length()}}const yc=new P,Se=new lu;class qE extends pi{constructor(t){const e=new Xt,n=new hn({color:16777215,vertexColors:!0,toneMapped:!1}),s=[],r=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(p,x){c(p),c(x)}function c(p){s.push(0,0,0),r.push(0,0,0),o[p]===void 0&&(o[p]=[]),o[p].push(s.length/3-1)}e.setAttribute("position",new yt(s,3)),e.setAttribute("color",new yt(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const l=new q(16755200),u=new q(16711680),d=new q(43775),h=new q(16777215),f=new q(3355443);this.setColors(l,u,d,h,f)}setColors(t,e,n,s,r){const a=this.geometry.getAttribute("color");a.setXYZ(0,t.r,t.g,t.b),a.setXYZ(1,t.r,t.g,t.b),a.setXYZ(2,t.r,t.g,t.b),a.setXYZ(3,t.r,t.g,t.b),a.setXYZ(4,t.r,t.g,t.b),a.setXYZ(5,t.r,t.g,t.b),a.setXYZ(6,t.r,t.g,t.b),a.setXYZ(7,t.r,t.g,t.b),a.setXYZ(8,t.r,t.g,t.b),a.setXYZ(9,t.r,t.g,t.b),a.setXYZ(10,t.r,t.g,t.b),a.setXYZ(11,t.r,t.g,t.b),a.setXYZ(12,t.r,t.g,t.b),a.setXYZ(13,t.r,t.g,t.b),a.setXYZ(14,t.r,t.g,t.b),a.setXYZ(15,t.r,t.g,t.b),a.setXYZ(16,t.r,t.g,t.b),a.setXYZ(17,t.r,t.g,t.b),a.setXYZ(18,t.r,t.g,t.b),a.setXYZ(19,t.r,t.g,t.b),a.setXYZ(20,t.r,t.g,t.b),a.setXYZ(21,t.r,t.g,t.b),a.setXYZ(22,t.r,t.g,t.b),a.setXYZ(23,t.r,t.g,t.b),a.setXYZ(24,e.r,e.g,e.b),a.setXYZ(25,e.r,e.g,e.b),a.setXYZ(26,e.r,e.g,e.b),a.setXYZ(27,e.r,e.g,e.b),a.setXYZ(28,e.r,e.g,e.b),a.setXYZ(29,e.r,e.g,e.b),a.setXYZ(30,e.r,e.g,e.b),a.setXYZ(31,e.r,e.g,e.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,s.r,s.g,s.b),a.setXYZ(39,s.r,s.g,s.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0}update(){const t=this.geometry,e=this.pointMap,n=1,s=1;Se.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Te("c",e,t,Se,0,0,-1),Te("t",e,t,Se,0,0,1),Te("n1",e,t,Se,-n,-s,-1),Te("n2",e,t,Se,n,-s,-1),Te("n3",e,t,Se,-n,s,-1),Te("n4",e,t,Se,n,s,-1),Te("f1",e,t,Se,-n,-s,1),Te("f2",e,t,Se,n,-s,1),Te("f3",e,t,Se,-n,s,1),Te("f4",e,t,Se,n,s,1),Te("u1",e,t,Se,n*.7,s*1.1,-1),Te("u2",e,t,Se,-n*.7,s*1.1,-1),Te("u3",e,t,Se,0,s*2,-1),Te("cf1",e,t,Se,-n,0,1),Te("cf2",e,t,Se,n,0,1),Te("cf3",e,t,Se,0,-s,1),Te("cf4",e,t,Se,0,s,1),Te("cn1",e,t,Se,-n,0,-1),Te("cn2",e,t,Se,n,0,-1),Te("cn3",e,t,Se,0,-s,-1),Te("cn4",e,t,Se,0,s,-1),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Te(i,t,e,n,s,r,o){yc.set(s,r,o).unproject(n);const a=t[i];if(a!==void 0){const c=e.getAttribute("position");for(let l=0,u=a.length;l<u;l++)c.setXYZ(a[l],yc.x,yc.y,yc.z)}}const vc=new cn;class $E extends pi{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(8*3),r=new Xt;r.setIndex(new ue(n,1)),r.setAttribute("position",new ue(s,3)),super(r,new hn({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&vc.setFromObject(this.object),vc.isEmpty())return;const e=vc.min,n=vc.max,s=this.geometry.attributes.position,r=s.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=e.x,r[4]=n.y,r[5]=n.z,r[6]=e.x,r[7]=e.y,r[8]=n.z,r[9]=n.x,r[10]=e.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=e.z,r[15]=e.x,r[16]=n.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=n.x,r[22]=e.y,r[23]=e.z,s.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class ZE extends pi{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Xt;r.setIndex(new ue(n,1)),r.setAttribute("position",new yt(s,3)),super(r,new hn({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}}class KE extends is{constructor(t,e=1,n=16776960){const s=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new Xt;o.setAttribute("position",new yt(r,3)),o.computeBoundingSphere(),super(o,new hn({color:s,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new Xt;c.setAttribute("position",new yt(a,3)),c.computeBoundingSphere(),this.add(new Vt(c,new fi({color:s,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Wm=new P;let Mc,Lh;class JE extends ie{constructor(t=new P(0,0,1),e=new P(0,0,0),n=1,s=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",Mc===void 0&&(Mc=new Xt,Mc.setAttribute("position",new yt([0,0,0,0,1,0],3)),Lh=new tr(0,.5,1,5,1),Lh.translate(0,-.5,0)),this.position.copy(e),this.line=new is(Mc,new hn({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Vt(Lh,new fi({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Wm.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Wm,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class QE extends pi{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Xt;s.setAttribute("position",new yt(e,3)),s.setAttribute("color",new yt(n,3));const r=new hn({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(t,e,n){const s=new q,r=this.geometry.attributes.color.array;return s.set(t),s.toArray(r,0),s.toArray(r,3),s.set(e),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class jE{constructor(){this.type="ShapePath",this.color=new q,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Qo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,o){return this.currentPath.bezierCurveTo(t,e,n,s,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(g){const y=[];for(let _=0,b=g.length;_<b;_++){const S=g[_],w=new Hs;w.curves=S.curves,y.push(w)}return y}function n(g,y){const _=y.length;let b=!1;for(let S=_-1,w=0;w<_;S=w++){let A=y[S],E=y[w],C=E.x-A.x,v=E.y-A.y;if(Math.abs(v)>Number.EPSILON){if(v<0&&(A=y[w],C=-C,E=y[S],v=-v),g.y<A.y||g.y>E.y)continue;if(g.y===A.y){if(g.x===A.x)return!0}else{const M=v*(g.x-A.x)-C*(g.y-A.y);if(M===0)return!0;if(M<0)continue;b=!b}}else{if(g.y!==A.y)continue;if(E.x<=g.x&&g.x<=A.x||A.x<=g.x&&g.x<=E.x)return!0}}return b}const s=ui.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c;const l=[];if(r.length===1)return a=r[0],c=new Hs,c.curves=a.curves,l.push(c),l;let u=!s(r[0].getPoints());u=t?!u:u;const d=[],h=[];let f=[],p=0,x;h[p]=void 0,f[p]=[];for(let g=0,y=r.length;g<y;g++)a=r[g],x=a.getPoints(),o=s(x),o=t?!o:o,o?(!u&&h[p]&&p++,h[p]={s:new Hs,p:x},h[p].s.curves=a.curves,u&&p++,f[p]=[]):f[p].push({h:a,p:x[0]});if(!h[0])return e(r);if(h.length>1){let g=!1,y=0;for(let _=0,b=h.length;_<b;_++)d[_]=[];for(let _=0,b=h.length;_<b;_++){const S=f[_];for(let w=0;w<S.length;w++){const A=S[w];let E=!0;for(let C=0;C<h.length;C++)n(A.p,h[C].p)&&(_!==C&&y++,E?(E=!1,d[C].push(A)):g=!0);E&&d[_].push(A)}}y>0&&g===!1&&(f=d)}let m;for(let g=0,y=h.length;g<y;g++){c=h[g].s,l.push(c),m=f[g];for(let _=0,b=m.length;_<b;_++)c.holes.push(m[_].h)}return l}}class tT extends di{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}class eT extends Qn{constructor(t=1,e=1,n=1,s={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(t,e,{...s,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jl);const nT=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:$d,AddEquation:Qi,AddOperation:Vg,AdditiveAnimationBlendMode:of,AdditiveBlending:il,AgXToneMapping:qg,AlphaFormat:jd,AlwaysCompare:ax,AlwaysDepth:al,AlwaysStencilFunc:fd,AmbientLight:a_,AnimationAction:m_,AnimationClip:sa,AnimationLoader:eE,AnimationMixer:RE,AnimationObjectGroup:TE,AnimationUtils:JA,ArcCurve:Dx,ArrayCamera:wx,ArrowHelper:JE,AttachedBindMode:dd,Audio:f_,AudioAnalyser:xE,AudioContext:Df,AudioListener:pE,AudioLoader:hE,AxesHelper:QE,BackSide:Ke,BasicDepthPacking:jg,BasicShadowMap:$y,BatchedMesh:Px,Bone:_f,BooleanKeyframeTrack:nr,Box2:FE,Box3:cn,Box3Helper:ZE,BoxGeometry:Qs,BoxHelper:$E,BufferAttribute:ue,BufferGeometry:Xt,BufferGeometryLoader:d_,ByteType:Kd,Cache:Ei,Camera:lu,CameraHelper:qE,CanvasTexture:MA,CapsuleGeometry:_u,CatmullRomCurve3:Nx,CineonToneMapping:Xg,CircleGeometry:yu,ClampToEdgeWrapping:kn,Clock:Nf,Color:q,ColorKeyframeTrack:Cf,ColorManagement:se,CompressedArrayTexture:yA,CompressedCubeTexture:vA,CompressedTexture:gu,CompressedTextureLoader:nE,ConeGeometry:vu,ConstantAlphaFactor:Bg,ConstantColorFactor:Fg,Controls:tT,CubeCamera:gx,CubeReflectionMapping:Li,CubeRefractionMapping:ns,CubeTexture:da,CubeTextureLoader:iE,CubeUVReflectionMapping:Zr,CubicBezierCurve:Mf,CubicBezierCurve3:Ux,CubicInterpolant:t_,CullFaceBack:ld,CullFaceFront:bg,CullFaceFrontBack:qy,CullFaceNone:Mg,Curve:jn,CurvePath:Fx,CustomBlending:Sg,CustomToneMapping:Yg,CylinderGeometry:tr,Cylindrical:OE,Data3DTexture:uf,DataArrayTexture:au,DataTexture:li,DataTextureLoader:sE,DataUtils:cM,DecrementStencilOp:cv,DecrementWrapStencilOp:uv,DefaultLoadingManager:i_,DepthFormat:Bs,DepthStencilFormat:Ys,DepthTexture:pf,DetachedBindMode:Zg,DirectionalLight:Lf,DirectionalLightHelper:YE,DiscreteInterpolant:e_,DisplayP3ColorSpace:ou,DodecahedronGeometry:Mu,DoubleSide:ge,DstAlphaFactor:Lg,DstColorFactor:Ng,DynamicCopyUsage:wv,DynamicDrawUsage:cx,DynamicReadUsage:Mv,EdgesGeometry:zx,EllipseCurve:xu,EqualCompare:ix,EqualDepth:ll,EqualStencilFunc:pv,EquirectangularReflectionMapping:Ho,EquirectangularRefractionMapping:Vo,Euler:Sn,EventDispatcher:di,ExtrudeGeometry:Su,FileLoader:Ni,Float16BufferAttribute:pM,Float32BufferAttribute:yt,FloatType:Mn,Fog:pa,FogExp2:fu,FramebufferTexture:_A,FrontSide:Ii,Frustum:fa,GLBufferAttribute:DE,GLSL1:Ev,GLSL3:pd,GreaterCompare:sx,GreaterDepth:hl,GreaterEqualCompare:ox,GreaterEqualDepth:ul,GreaterEqualStencilFunc:_v,GreaterStencilFunc:gv,GridHelper:WE,Group:Re,HalfFloatType:Kr,HemisphereLight:Pf,HemisphereLightHelper:GE,IcosahedronGeometry:wu,ImageBitmapLoader:uE,ImageLoader:ra,ImageUtils:hx,IncrementStencilOp:av,IncrementWrapStencilOp:lv,InstancedBufferAttribute:gn,InstancedBufferGeometry:h_,InstancedInterleavedBuffer:LE,InstancedMesh:ma,Int16BufferAttribute:dM,Int32BufferAttribute:fM,Int8BufferAttribute:lM,IntType:jl,InterleavedBuffer:pu,InterleavedBufferAttribute:qs,Interpolant:_a,InterpolateDiscrete:Wo,InterpolateLinear:Bl,InterpolateSmooth:Bc,InvertStencilOp:hv,KeepStencilOp:Ss,KeyframeTrack:ti,LOD:Cx,LatheGeometry:ga,Layers:cu,LessCompare:nx,LessDepth:cl,LessEqualCompare:cf,LessEqualDepth:Ws,LessEqualStencilFunc:mv,LessStencilFunc:fv,Light:cs,LightProbe:u_,Line:is,Line3:zE,LineBasicMaterial:hn,LineCurve:bf,LineCurve3:Ox,LineDashedMaterial:Jx,LineLoop:Ix,LineSegments:pi,LinearDisplayP3ColorSpace:ha,LinearFilter:Le,LinearInterpolant:Tf,LinearMipMapLinearFilter:Qy,LinearMipMapNearestFilter:Jy,LinearMipmapLinearFilter:oi,LinearMipmapNearestFilter:So,LinearSRGBColorSpace:Fi,LinearToneMapping:Gg,LinearTransfer:Yo,Loader:An,LoaderUtils:bd,LoadingManager:Rf,LoopOnce:Kg,LoopPingPong:Qg,LoopRepeat:Jg,LuminanceAlphaFormat:nf,LuminanceFormat:ef,MOUSE:Xy,Material:Qe,MaterialLoader:Iu,MathUtils:Gv,Matrix2:zf,Matrix3:qt,Matrix4:Nt,MaxEquation:Tg,Mesh:Vt,MeshBasicMaterial:fi,MeshDepthMaterial:du,MeshDistanceMaterial:mf,MeshLambertMaterial:Zx,MeshMatcapMaterial:Kx,MeshNormalMaterial:$x,MeshPhongMaterial:Yx,MeshPhysicalMaterial:Xx,MeshStandardMaterial:We,MeshToonMaterial:qx,MinEquation:Eg,MirroredRepeatWrapping:Go,MixOperation:Hg,MultiplyBlending:hd,MultiplyOperation:la,NearestFilter:He,NearestMipMapLinearFilter:Ky,NearestMipMapNearestFilter:Zy,NearestMipmapLinearFilter:Rr,NearestMipmapNearestFilter:Zd,NeutralToneMapping:$g,NeverCompare:ex,NeverDepth:ol,NeverStencilFunc:dv,NoBlending:Ci,NoColorSpace:wi,NoToneMapping:Ri,NormalAnimationBlendMode:ru,NormalBlending:zs,NotEqualCompare:rx,NotEqualDepth:dl,NotEqualStencilFunc:xv,NumberKeyframeTrack:na,Object3D:ie,ObjectLoader:cE,ObjectSpaceNormalMap:tx,OctahedronGeometry:xa,OneFactor:Rg,OneMinusConstantAlphaFactor:kg,OneMinusConstantColorFactor:zg,OneMinusDstAlphaFactor:Dg,OneMinusDstColorFactor:Ug,OneMinusSrcAlphaFactor:rl,OneMinusSrcColorFactor:Ig,OrthographicCamera:uu,P3Primaries:$o,PCFShadowMap:Yd,PCFSoftShadowMap:qd,PMREMGenerator:md,Path:Qo,PerspectiveCamera:Be,Plane:Ki,PlaneGeometry:js,PlaneHelper:KE,PointLight:o_,PointLightHelper:HE,Points:Lx,PointsMaterial:yf,PolarGridHelper:XE,PolyhedronGeometry:as,PositionalAudio:gE,PropertyBinding:ne,PropertyMixer:p_,QuadraticBezierCurve:Sf,QuadraticBezierCurve3:wf,Quaternion:an,QuaternionKeyframeTrack:ya,QuaternionLinearInterpolant:n_,RED_GREEN_RGTC2_Format:Fl,RED_RGTC1_Format:rf,REVISION:Jl,RGBADepthPacking:af,RGBAFormat:rn,RGBAIntegerFormat:su,RGBA_ASTC_10x10_Format:Il,RGBA_ASTC_10x5_Format:Cl,RGBA_ASTC_10x6_Format:Rl,RGBA_ASTC_10x8_Format:Pl,RGBA_ASTC_12x10_Format:Ll,RGBA_ASTC_12x12_Format:Dl,RGBA_ASTC_4x4_Format:vl,RGBA_ASTC_5x4_Format:Ml,RGBA_ASTC_5x5_Format:bl,RGBA_ASTC_6x5_Format:Sl,RGBA_ASTC_6x6_Format:wl,RGBA_ASTC_8x5_Format:Al,RGBA_ASTC_8x6_Format:El,RGBA_ASTC_8x8_Format:Tl,RGBA_BPTC_Format:Co,RGBA_ETC2_EAC_Format:yl,RGBA_PVRTC_2BPPV1_Format:gl,RGBA_PVRTC_4BPPV1_Format:ml,RGBA_S3TC_DXT1_Format:Ao,RGBA_S3TC_DXT3_Format:Eo,RGBA_S3TC_DXT5_Format:To,RGBDepthPacking:iv,RGBFormat:tf,RGBIntegerFormat:jy,RGB_BPTC_SIGNED_Format:Nl,RGB_BPTC_UNSIGNED_Format:Ul,RGB_ETC1_Format:xl,RGB_ETC2_Format:_l,RGB_PVRTC_2BPPV1_Format:pl,RGB_PVRTC_4BPPV1_Format:fl,RGB_S3TC_DXT1_Format:wo,RGDepthPacking:sv,RGFormat:sf,RGIntegerFormat:iu,RawShaderMaterial:Wx,Ray:Jr,Raycaster:NE,Rec709Primaries:qo,RectAreaLight:c_,RedFormat:nu,RedIntegerFormat:ua,ReinhardToneMapping:Wg,RenderTarget:dx,RepeatWrapping:Br,ReplaceStencilOp:ov,ReverseSubtractEquation:Ag,RingGeometry:Au,SIGNED_RED_GREEN_RGTC2_Format:zl,SIGNED_RED_RGTC1_Format:Ol,SRGBColorSpace:mn,SRGBTransfer:pe,Scene:gf,ShaderChunk:Kt,ShaderLib:Zn,ShaderMaterial:Vn,ShadowMaterial:Gx,Shape:Hs,ShapeGeometry:Eu,ShapePath:jE,ShapeUtils:ui,ShortType:Jd,Skeleton:mu,SkeletonHelper:kE,SkinnedMesh:Rx,Source:Ds,Sphere:Ge,SphereGeometry:er,Spherical:UE,SphericalHarmonics3:l_,SplineCurve:Af,SpotLight:r_,SpotLightHelper:BE,Sprite:Tx,SpriteMaterial:xf,SrcAlphaFactor:sl,SrcAlphaSaturateFactor:Og,SrcColorFactor:Pg,StaticCopyUsage:Sv,StaticDrawUsage:Zo,StaticReadUsage:vv,StereoCamera:dE,StreamCopyUsage:Av,StreamDrawUsage:yv,StreamReadUsage:bv,StringKeyframeTrack:ir,SubtractEquation:wg,SubtractiveBlending:ud,TOUCH:Yy,TangentSpaceNormalMap:os,TetrahedronGeometry:Tu,Texture:Ae,TextureLoader:s_,TextureUtils:Jw,TorusGeometry:Cu,TorusKnotGeometry:Ru,Triangle:vn,TriangleFanDrawMode:nv,TriangleStripDrawMode:ev,TrianglesDrawMode:tv,TubeGeometry:Pu,UVMapping:Ql,Uint16BufferAttribute:hf,Uint32BufferAttribute:df,Uint8BufferAttribute:uM,Uint8ClampedBufferAttribute:hM,Uniform:Ff,UniformsGroup:IE,UniformsLib:pt,UniformsUtils:mx,UnsignedByteType:hi,UnsignedInt248Type:Xs,UnsignedInt5999Type:Qd,UnsignedIntType:Di,UnsignedShort4444Type:tu,UnsignedShort5551Type:eu,UnsignedShortType:kr,VSMShadowMap:ni,Vector2:it,Vector3:P,Vector4:Jt,VectorKeyframeTrack:ia,VideoTexture:xA,WebGL3DRenderTarget:Qv,WebGLArrayRenderTarget:Jv,WebGLCoordinateSystem:ai,WebGLCubeRenderTarget:xx,WebGLMultipleRenderTargets:eT,WebGLRenderTarget:Qn,WebGLRenderer:Ax,WebGLUtils:Sx,WebGPUCoordinateSystem:Ko,WireframeGeometry:Vx,WrapAroundEnding:Xo,ZeroCurvatureEnding:Is,ZeroFactor:Cg,ZeroSlopeEnding:Ls,ZeroStencilOp:rv,createCanvasElement:ux},Symbol.toStringTag,{value:"Module"})),iT=1.5;function sT(i){const t=new Ax({antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio,iT)),t.setSize(window.innerWidth,window.innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=qd,t.toneMapping=$d,t.toneMappingExposure=1.05,t.outputColorSpace=mn,i.appendChild(t.domElement);let e=null;return t.setResizeCallback=n=>{e=n},window.addEventListener("resize",()=>{t.setSize(window.innerWidth,window.innerHeight),e?.(window.innerWidth/window.innerHeight)}),t}function rT(){const i=new Be(50,window.innerWidth/window.innerHeight,.1,500);return i.position.set(0,20,36),i}function bc(i,t){const e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function le(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),c=bc(e,n),l=bc(e+1,n),u=bc(e,n+1),d=bc(e+1,n+1);return c*(1-o)*(1-a)+l*o*(1-a)+u*(1-o)*a+d*o*a}function va(i){let t=i>>>0;return function(){t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function et(i,t,e){return i<t?t:i>e?e:i}function Ft(i,t,e){return i+(t-i)*e}function ji(i,t,e,n){return Ft(i,t,1-Math.exp(-e*n))}function ve(i){const t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]}function Gn(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function Ht(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function me(i,t){return[i[0]+t[0],i[1]+t[1],i[2]+t[2]]}function Ui(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function Vs(i,t,e,n){return{x:i,y:t,z:e,p:n}}function x_(i,t){const[e,n,s]=t;return[i.x[0]*e+i.y[0]*n+i.z[0]*s+i.p[0],i.x[1]*e+i.y[1]*n+i.z[1]*s+i.p[1],i.x[2]*e+i.y[2]*n+i.z[2]*s+i.p[2]]}function _n(i,t,e){const n=Ui(t,i),s=Math.hypot(n[0],n[1],n[2])||1e-4,r=[n[0]/s,n[1]/s,n[2]/s],o=Math.abs(r[1])<.97?[0,1,0]:[1,0,0],a=ve(Gn(o,r)),c=Gn(a,r);return Vs(Ht(a,e),Ht(r,s),Ht(c,e),i)}class De{constructor(){this.positions=[],this.colors=[],this.indices=[]}addVertex(t,e,n,s){return this.positions.push(t,e,n),this.colors.push(s[0],s[1],s[2]),this.positions.length/3-1}addTri(t,e,n){this.indices.push(t,e,n)}addQuad(t,e,n,s){this.addTri(t,e,n),this.addTri(t,n,s)}bake(t,e,n){const s=this.positions.length/3;for(let r=0;r<t.p.length;r+=3){const o=x_(e,[t.p[r],t.p[r+1],t.p[r+2]]),a=n(o[0],o[1],o[2]);this.positions.push(o[0],o[1],o[2]),this.colors.push(a[0],a[1],a[2])}for(let r=0;r<t.i.length;r++)this.indices.push(s+t.i[r])}toBufferGeometry(){const t=new Xt;return t.setAttribute("position",new yt(this.positions,3)),t.setAttribute("color",new yt(this.colors,3)),t.setIndex(this.indices),t.computeVertexNormals(),t}}function Gr(i,t){const e=[],n=[],s=[];for(let r=0;r<=t;r++){const o=Math.PI*r/t,a=Math.sin(o),c=Math.cos(o);for(let l=0;l<=i;l++){const u=2*Math.PI*l/i,d=a*Math.cos(u),h=c,f=a*Math.sin(u);e.push(d,h,f),n.push(d,h,f)}}for(let r=0;r<t;r++)for(let o=0;o<i;o++){const a=r*(i+1)+o,c=a+i+1;s.push(a,a+1,c,a+1,c+1,c)}return{p:e,n,i:s}}function Lu(i){const t=[],e=[],n=[];for(let r=0;r<=i;r++){const o=2*Math.PI*r/i,a=Math.cos(o),c=Math.sin(o);t.push(a,0,c),e.push(a,0,c),t.push(a,1,c),e.push(a,0,c)}for(let r=0;r<i;r++){const o=r*2;n.push(o,o+1,o+2,o+1,o+3,o+2)}const s=t.length/3;t.push(0,0,0),e.push(0,-1,0),t.push(0,1,0),e.push(0,1,0);for(let r=0;r<i;r++){const o=2*Math.PI*r/i,a=2*Math.PI*(r+1)/i,c=t.length/3;t.push(Math.cos(o),0,Math.sin(o)),e.push(0,-1,0),t.push(Math.cos(a),0,Math.sin(a)),e.push(0,-1,0),n.push(s,c+1,c);const l=t.length/3;t.push(Math.cos(o),1,Math.sin(o)),e.push(0,1,0),t.push(Math.cos(a),1,Math.sin(a)),e.push(0,1,0),n.push(s+1,l,l+1)}return{p:t,n:e,i:n}}const oT=""+new URL("bark_albedo-DReMtPgm.png",import.meta.url).href,aT=""+new URL("tunnel-dirt_albedo-6XN1nHeR.png",import.meta.url).href,cT=""+new URL("lawn-soil_albedo-mTvxXfeR.png",import.meta.url).href,lT=""+new URL("stone_albedo-CltKTJgX.png",import.meta.url).href,uT=""+new URL("mushroom-cap_albedo-CRHQ2riL.png",import.meta.url).href,Vc=new Float32Array(256);for(let i=0;i<256;i++){const t=i/255;Vc[i]=t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function hT(i,t){const e=document.createElement("canvas");e.width=i.width,e.height=i.height;const n=e.getContext("2d",{willReadFrequently:!0});n.drawImage(i,0,0);const s=n.getImageData(0,0,e.width,e.height).data;let r=0,o=0,a=0;const c=e.width*e.height;for(let l=0;l<s.length;l+=4)r+=Vc[s[l]],o+=Vc[s[l+1]],a+=Vc[s[l+2]];t.set(Math.max(r/c,.001),Math.max(o/c,.001),Math.max(a/c,.001))}const dT=new s_;function Ma(i,t){const e=new P(.5,.5,.5),n=dT.load(i,s=>{try{hT(s.image,e)}catch(r){console.warn("albedo mean unavailable",r)}});return n.colorSpace=mn,n.wrapS=n.wrapT=Br,n.repeat.set(1/t,1/t),n.anisotropy=4,n.userData.meanLinear=e,n}const fT=5,pT=16,mT=45,gT=12,xT=2.5;let _T=null,yT=null,vT=null,MT=null,bT=null;function Bf(){return _T||(_T=Ma(aT,fT))}function ST(){return yT||(yT=Ma(oT,pT))}function wT(){return vT||(vT=Ma(cT,mT))}function AT(){return MT||(MT=Ma(lT,gT))}function __(){return bT||(bT=Ma(uT,xT))}const ET=`
uniform vec3 uTexMid;
uniform vec2 uTexRepeat;
uniform float uTexStrength;
varying vec3 vTexWorld;
varying vec3 vTexNormal;
vec3 gTriTex = vec3(1.0);   // filled by the <map_fragment> injection below,
                            // reused by the emissive one (which runs later)
`,TT=4,CT=`
{
  vec3 tn = normalize(vTexNormal);
  vec3 bw = pow(abs(tn), vec3(${TT.toFixed(1)}));
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
`;function y_(i,t){Object.assign(i.uniforms,t),i.vertexShader=i.vertexShader.replace("#include <common>",`varying vec3 vTexWorld;
varying vec3 vTexNormal;
#include <common>`).replace("#include <project_vertex>",`#include <project_vertex>
      vec4 texLocal = vec4(transformed, 1.0);
      vec3 texNrm = objectNormal;
      #ifdef USE_INSTANCING
        texLocal = instanceMatrix * texLocal;
        texNrm = mat3(instanceMatrix) * texNrm;
      #endif
      vTexWorld = (modelMatrix * texLocal).xyz;
      vTexNormal = mat3(modelMatrix) * texNrm;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",ET+`
#include <common>`).replace("#include <map_fragment>",CT)}function v_(i,t){return{uTexMid:{value:i.userData.meanLinear},uTexRepeat:{value:i.repeat},uTexStrength:{value:t}}}function jr({map:i,strength:t=1,...e}){const n=new We({vertexColors:!0,roughness:.95,metalness:0,map:i,...e}),s=v_(i,t);return n.userData.texUniforms=s,n.onBeforeCompile=r=>y_(r,s),n.userData.shaderTag="triplanar-albedo",n.customProgramCacheKey=()=>"triplanar-albedo",n}function M_({map:i,strength:t=1,emissive:e=1.6,...n}){const s=new We({vertexColors:!0,roughness:.6,metalness:0,map:i,...n}),r=v_(i,t);return s.userData.texUniforms=r,s.onBeforeCompile=o=>{y_(o,r),o.fragmentShader=o.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
       totalEmissiveRadiance += vColor * gTriTex * ${e.toFixed(2)};`)},s.userData.shaderTag="triplanar-emissive",s.customProgramCacheKey=()=>"triplanar-emissive",s}const Gc=2.2,Ce=-166,Xe=0,Or=7.2*Gc,kf=-132,Gl=32,wd=[-9,-140],de=[13,0,-124],Ad=15,RT=2.6;function ln(i){const t=(i-kf)/Gl;return t>-1&&t<1?Or+(Gl-Or)*Math.pow(Math.sqrt(1-t*t),.72):Or}function he(i,t){let e=.22*le(i*.11+11,t*.11+5);const n=Math.hypot(i-de[0],t-de[2]);if(n<Ad){const s=1-n/Ad;e+=RT*s*s*(3-2*s)}return e}const Ed=[],Dr=[],b_=[];function Hf(i,t){for(let e=0;e<Ed.length;e++){const n=Ed[e],r=Math.atan2(Math.sin(i-n.th),Math.cos(i-n.th))/n.rTh,o=(t-n.z)/n.rZ;if(r*r+o*o<1)return!0}return!1}function PT(i,t){return Hf(t,i)?1/0:ln(i)}function Vf(){const i={};for(const t of Dr)i[t.name]=t;return i}function Du(i,t){for(let r=0;r<Dr.length;r++){const o=Dr[r],a=i-o.origin[0],c=t-o.origin[2],l=a*o.dir[0]+c*o.dir[2];if(l<=-.5||l>=o.uMax+1)continue;const u=a*o.side[0]+c*o.side[2],d=Math.max(o.profR(et(l,0,o.uMax))*.82-1.2,2.2);if(Math.abs(u)>=d+3)continue;const h=et(l,-.5,o.uMax-1.2),f=et(u,-d,d);return[o.origin[0]+o.dir[0]*h+o.side[0]*f,o.origin[2]+o.dir[2]*h+o.side[2]*f]}const e=Math.max(ln(t)*.82-1.6,3);let n=e,s=e;for(let r=0;r<Dr.length;r++){const o=Dr[r],a=et(1-Math.abs(t-o.origin[2])/o.doorFalloff,0,1);if(a<=0)continue;const c=Ft(e,Math.abs(o.origin[0])+1.5,a);o.dir[0]>0?c>n&&(n=c):c>s&&(s=c)}return[et(i,-s,n),Math.max(t,Ce+5)]}const Gf=new q("#6d5130"),ba=new q("#5a4226"),Zs=new q("#332412"),IT=new q("#4c5f2f"),LT=new q(IT).lerp(Zs,.62).multiplyScalar(.58);function Oi(i,t,e){return new q(i).lerp(t,et(e,0,1))}function Wc(i,t,e,n){return le(Math.cos(i)*e+t*n+37,Math.sin(i)*e+t*n*.7+91)}function Wf(i){return .86*Math.pow(Or/i,.35)}function Lo(i){const t=ln(i);return 1.2+t*Wf(t)*.62}function Us(i,t,e){const n=ln(t),s=Wf(n),r=.84+.2*Wc(i,t,1.6,.1)+.1*Wc(i,t,4.1,.29)+.05*Wc(i,t,9.3,.62),o=n*r*(1-(e||0)),a=Math.cos(i)*o,c=Math.sin(i)*o*s+Lo(t),l=he(a,t);return[a,Math.max(c,l),t,r]}function DT(i,t){const e=Oi(Zs,ba,i*.8+.12);return Oi(e,Gf,t)}function NT(i){const t=Oi(Zs,ba,i*.8+.12);return Oi(t,Gf,.28+i*.18)}function UT(i){const t=Oi(Zs,ba,i*.75+.15);return Oi(t,Gf,.55)}function OT(i){const t=Oi(Zs,ba,i*.6+.08);return Oi(t,LT,.3+i*.3)}function Dh(i,t,e,n,s,r,o,a,c,l,u,d){const h=Us(t,e,0),f=[h[0],he(h[0],h[2]),h[2]],p=ve([Math.cos(t),0,1e-4]),x=ve(Gn([0,1,0],p)),m=s+o,g=s+o*2;function y(U){const G=(U-m)/o;return G>-1&&G<1?n+(r-n)*Math.pow(Math.sqrt(1-G*G),.72):n}function _(U){return .86*Math.pow(n/U,.35)}function b(U){const G=y(U);return 1.1+G*_(G)*.6}function S(U,G,K,nt){return le(Math.cos(U)*K+G*nt+c+37,Math.sin(U)*K+G*nt*.7+c+91)}function w(U,G,K){const nt=y(G),_t=_(nt),Rt=.84+.2*S(U,G,1.6,.1)+.1*S(U,G,4.1,.29)+.05*S(U,G,9.3,.62),$=nt*Rt*(1-(K||0)),tt=Math.cos(U)*$,ut=Math.sin(U)*$*_t+b(G),ot=f[0]+p[0]*G+x[0]*tt,At=f[2]+p[2]*G+x[2]*tt,Tt=f[1]+ut,Lt=he(ot,At);return[ot,Math.max(Tt,Lt),At,Rt]}{const U=ln(e),G=Wf(U),K=Math.asin(et((f[1]+b(0)-Lo(e))/(U*G),-.92,.92)),nt=t+(Math.cos(t)>=0?K:-K);Ed.push({th:nt,z:e,rTh:Math.max(.16,n*1.8/ln(e)),rZ:n*1.7})}if(d){const U=f[0]+p[0]*1.2,G=f[2]+p[2]*1.2;b_.push({p:[U,he(U,G)+2.1,G],c:d,name:i})}const A=new De,E=1.5,C=[];for(let U=0;U<=g+1e-4;U+=E){const G=[];for(let K=0;K<a;K++){const nt=2*Math.PI*K/a,_t=w(nt,U,0),Rt=et((_t[3]-.84)/.34+.45,0,1);G.push(A.addVertex(_t[0],_t[1],_t[2],u(Rt,_t[0],_t[1],_t[2]).multiplyScalar(l).toArray()))}C.push(G)}for(let U=0;U<C.length-1;U++)for(let G=0;G<a;G++){const K=(G+1)%a;A.addQuad(C[U][G],C[U][K],C[U+1][K],C[U+1][G])}const v=f[0]+p[0]*g,M=f[2]+p[2]*g,L=f[1]+b(g)*.6,N=A.addVertex(v,L,M,u(.2,v,L,M).multiplyScalar(l).toArray()),F=C[C.length-1];for(let U=0;U<a;U++)A.addTri(N,F[U],F[(U+1)%a]);const B={name:i,origin:f,dir:p,side:x,uMax:g,uEnd:m,profR:y,pointAt:w,doorFalloff:n*2.2};Dr.push(B);const z=f[0]+p[0]*m,O=f[2]+p[2]*m;return B.center=[z,he(z,O),O],{geometry:A.toBufferGeometry(),branch:B}}function FT(){const i=new Re;i.name="underground";const t=Dh("granary",Math.PI,-70,3.3*Gc,9,13*1.5,10,30,4001,1,u=>NT(u),[.55,.4,.2]),e=Dh("brood",0,-120,4.2*Gc,8,17*1.5,13,34,5117,1,u=>UT(u),[.68,.5,.25]),n=Dh("midden",0,-40,2.9*Gc,7,10*1.5,8,26,6229,.46,u=>OT(u),[.3,.44,.28]);i.add(new Vt(t.geometry,Sc())),i.add(new Vt(e.geometry,Sc())),i.add(new Vt(n.geometry,Sc()));const s=new De,r=44,o=1.7,a=[];for(let u=Ce;u<=3.0001;u+=o){const d=[];for(let h=0;h<r;h++){const f=2*Math.PI*h/r,p=Us(f,u,0),x=u>-14?1+Math.pow((u+14)/17,2)*.9:1;d.push([p[0]*x,Math.max(p[1]*(x*.5+.5),he(p[0]*x,u)),u,p[3]])}a.push(d)}for(let u=0;u<a.length;u++){const d=[];for(let h=0;h<r;h++){const f=a[u][h],p=et(1-Math.abs(f[2]-kf)/(Gl*1.6),0,1),x=et((f[3]-.84)/.34+.45,0,1),m=le(f[0]*.13+3,f[2]*.13+8),g=DT(x,p*.45+m*.2);d.push(s.addVertex(f[0],f[1],f[2],g.toArray()))}a[u].idx=d}for(let u=0;u<a.length-1;u++)for(let d=0;d<r;d++){const h=(d+1)%r;Hf(2*Math.PI*d/r,a[u][d][2])||s.addQuad(a[u].idx[d],a[u].idx[h],a[u+1].idx[h],a[u+1].idx[d])}{let u=a[0].idx;const d=4;for(let f=1;f<=d;f++){const p=Math.cos(f/d*Math.PI*.5),x=Ce-Math.sin(f/d*Math.PI*.5)*9,m=[];for(let g=0;g<r;g++){const y=2*Math.PI*g/r,_=a[0][g],b=.86+.28*Wc(y,x*1.7,2.3,.2),S=_[0]*p*b,w=Lo(Ce)+(_[1]-Lo(Ce))*p*b,A=Oi(Zs,ba,.15+b*.4).multiplyScalar(.35+.3*b);m.push(s.addVertex(S,Math.max(w,he(S,x)),x,A.toArray()))}for(let g=0;g<r;g++){const y=(g+1)%r;s.addQuad(u[g],u[y],m[y],m[g])}u=m}const h=s.addVertex(0,Lo(Ce)*.6,Ce-10,Zs.clone().multiplyScalar(.3).toArray());for(let f=0;f<r;f++)s.addTri(h,u[f],u[(f+1)%r])}const c=new Vt(s.toBufferGeometry(),Sc());c.name="tunnel",i.add(c);const l=b_.slice();return l.push({p:[0,5,3],c:[1.15,1.2,1.35],name:"mouth"}),{group:i,doorLights:l,rooms:{granary:t.branch,brood:e.branch,midden:n.branch}}}let Nh=null;function Sc(){return Nh||(Nh=jr({map:Bf(),strength:.62,side:ge})),Nh}const S_=3.3,zT=S_*2,BT=.46,Wl=13,Xm=4,ci=9.5,Os=13,w_=.85,Er=.22,Xc=1/(1-Er),A_=i=>i*Xc/BT,Ym=A_(Wl),kT=14;function HT(i){const t=et(i,0,1);if(t<Er)return Xc*t*t/(2*Er);if(t>1-Er){const e=1-t;return 1-Xc*e*e/(2*Er)}return Xc*(t-Er*.5)}const VT=.9,E_=.14;let wn=null;function GT(i){wn=i}function T_(){return wn}function WT(i,t,e,n){const r=Math.atan2(-1*e[0],1*e[1]),o=11,a=A_(Wl),c=a/w_,l={x:i.x-c*Math.cos(r),z:i.z-c*Math.sin(r)},u=a+o*.9,d=P_(l,c,r,1,u),h={id:"chamber",x:d.x,z:d.z,r:o,wall:ci,roof:Os};return{seed:n,mouth:{x:i.x,z:i.z},topY:t.y,gx:t.gx,gz:t.gz,floorY:t.y-Wl,arc:{ax:l.x,az:l.z,R:c,a0:r,s:1,len:u},hw:zT,descend:a,rooms:[h],links:[],faces:[],chamber:h}}function XT(i,t,e,n,s=ci,r=Os){const o={id:i,x:t,z:e,r:n,wall:s,roof:r};return wn.rooms.push(o),o}function YT(i,t,e,n,s=ci){const r=e.x-t.x,o=e.z-t.z,a=Math.hypot(r,o)||1,c={id:i,ax:t.x,az:t.z,hx:r/a,hz:o/a,len:a,hw:n,roof:s};return wn.links.push(c),c}function C_(i,t,e){const n=(t-i.ax)*i.hx+(e-i.az)*i.hz;if(n<-i.hw||n>i.len+i.hw)return null;const s=-(t-i.ax)*i.hz+(e-i.az)*i.hx;return Math.abs(s)<=i.hw?{s:n,lat:s}:null}function R_(i,t,e){for(const n of i.rooms)if(Math.hypot(t-n.x,e-n.z)<=n.r)return n;return null}function P_(i,t,e,n,s){const r=e+n*s/t;return{x:i.x+t*Math.cos(r),z:i.z+t*Math.sin(r)}}function Nr(i,t){return P_({x:i.arc.ax,z:i.arc.az},i.arc.R,i.arc.a0,i.arc.s,t)}const qT=i=>{let t=i%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t},qm=1e-6;function I_(i,t,e,n=0){const{ax:s,az:r,R:o,a0:a,s:c,len:l}=i.arc,u=t-s,d=e-r,h=o*qT(c*(Math.atan2(d,u)-a));return h<-n-qm||h>l+n+qm?null:{u:et(h,0,l),lat:Math.hypot(u,d)-o}}function Td(i,t,e){const n=I_(i,t,e);return n&&Math.abs(n.lat)<=i.hw?n:null}function $T(i,t,e){const n=Math.hypot(t-i.chamber.x,e-i.chamber.z)/i.chamber.r;return n>=1?null:i.floorY+ci+(Os-ci)*Math.pow(Math.sqrt(1-n*n),.7)}function Do(i,t,e,n,s){const r=Math.pow(et(1-n/kT,0,1),2),o=(i.gx*(t-i.mouth.x)+i.gz*(e-i.mouth.z))*r,a=Ft(i.topY,i.floorY,HT(n/i.descend))+o,c=s/i.hw;return a+VT*c*c+E_*(le(t*.1+i.seed,e*.1+i.seed)-.5)*2}function Nu(i,t,e){return i.floorY+E_*(le(t*.1+i.seed,e*.1+i.seed)-.5)*2}function ts(i,t){const e=wn;if(!e)return null;let n=null;const s=Td(e,i,t);if(s&&(n=Do(e,i,t,s.u,s.lat)),R_(e,i,t)||e.links.some(r=>C_(r,i,t))){const r=Nu(e,i,t);n=n===null?r:Math.min(n,r)}return n}function ZT(i,t){const e=wn;if(!e||ts(i,t)===null)return 0;const s=R_(e,i,t);if(s){const r=Math.hypot(i-s.x,t-s.z)/s.r;return s.wall+(s.roof-s.wall)*Math.pow(Math.sqrt(Math.max(0,1-r*r)),.7)}for(const r of e.links)if(C_(r,i,t))return r.roof;return 1/0}function KT(i,t,e,n,s,r,o){const a={id:i,x:t,z:e,y:wn.floorY,nx:n,nz:s,needed:r,worked:0,done:!1,opens:o};return wn.faces.push(a),a}function JT(){return wn?wn.faces.filter(i=>!i.done).map(i=>({id:i.id,x:i.x,y:i.y,z:i.z,nx:i.nx,nz:i.nz,needed:i.needed,worked:i.worked,opens:i.opens.kind})):[]}function QT(i,t){const e=wn&&wn.faces.find(n=>n.id===i);return e?e.done?{worked:e.worked,needed:e.needed,done:!0,opened:null}:(e.worked=Math.min(e.needed,e.worked+Math.max(0,t)),e.worked<e.needed?{worked:e.worked,needed:e.needed,done:!1,opened:null}:(e.done=!0,{worked:e.worked,needed:e.needed,done:!0,opened:e.opens})):null}function jT(i){return wn?{contains:(t,e)=>ts(t,e)!==null,floorY:(t,e)=>{const n=ts(t,e);return n===null?i(t,e):n},headroom:(t,e)=>ZT(t,e)}:null}function L_(i=4){const t=wn;if(!t)return null;const e=[],n=Math.max(2,Math.ceil(t.arc.len/i));for(let s=0;s<=n;s++){const r=s/n*t.arc.len,o=Nr(t,r),a=ts(o.x,o.z);e.push({x:o.x,y:a===null?Do(t,o.x,o.z,r,0):a,z:o.z})}return e}const Ue={x0:-208,x1:400,z0:0,z1:460},Ti={x0:-300,x1:470,z0:0,z1:540},es=-4.5,Hn=i=>{const t=et(i,0,1);return t*t*(3-2*t)},Fn={edgeX:-196,bankTop:2,bankRun:15,depth:5,bedRun:30,farBankAt:68,farBankRun:46,farBankTop:24,blendRun:36};function sr(i){return Fn.edgeX+2*Math.sin(i*.021)+1*Math.sin(i*.047+1.3)}const ye={x:332,z:112,r:31,y:-7.2,depth:3.6,bedRun:24,bankTop:-5,bankRun:14,blendRun:20};function Uu(i,t){return Math.hypot(i-ye.x,t-ye.z)-ye.r}function t2(i){return i<=0?ye.y+(ye.bankTop-ye.y)*Hn(-i/ye.bankRun):ye.y-ye.depth*Hn(i/ye.bedRun)}function mi(i,t){return Math.min(i-sr(t),Uu(i,t))}function e2(i,t){return t<Xe?null:i-sr(t)<0?Fn:Uu(i,t)<0?ye:null}function n2(i,t){const e=e2(i,t);return e?e===ye?ye.y:es:null}function i2(i,t){return Uu(i,t)<i-sr(t)?ye.y:es}function s2(i){if(i<=0)return es+(Fn.bankTop-es)*Hn(-i/Fn.bankRun);let t=es-Fn.depth*Hn(i/Fn.bedRun);return i>Fn.farBankAt&&(t+=Fn.farBankTop*Hn((i-Fn.farBankAt)/Fn.farBankRun)),t}const $m=[{x:0,z:20,r:64,amp:-3.5},{x:62,z:78,r:62,amp:16},{x:96,z:44,r:40,amp:9},{x:88,z:168,r:78,amp:-14},{x:88,z:168,r:30,amp:4},{x:-85,z:95,r:46,amp:6},{x:-85,z:95,r:26,amp:1.5},{x:-150,z:150,r:66,amp:13},{x:-132,z:44,r:50,amp:8},{x:24,z:128,r:44,amp:-8},{x:236,z:300,r:118,amp:26},{x:300,z:214,r:88,amp:18},{x:40,z:330,r:120,amp:-5},{x:96,z:386,r:70,amp:4},{x:340,z:118,r:76,amp:-16},{x:340,z:118,r:26,amp:5},{x:384,z:328,r:92,amp:21},{x:-40,z:520,r:190,amp:38},{x:190,z:512,r:175,amp:34},{x:468,z:190,r:165,amp:34},{x:440,z:420,r:130,amp:26}];function Zm(i,t){let e=(le(i*.012,t*.012)-.5)*4.2+(le(i*.052,t*.052)-.5)*1.3;for(let n=0;n<$m.length;n++){const s=$m[n],r=Math.hypot(i-s.x,t-s.z);r>=s.r||(e+=s.amp*Hn(1-r/s.r))}return e}function Zt(i,t){if(t<Xe)return he(i,t);const e=ts(i,t);return e!==null?e:nn(i,t)}function nn(i,t){if(t<Xe)return he(i,t);const e=i-sr(t),n=1-Hn(e/Fn.blendRun);let s=n>0?Ft(Zm(i,t),s2(-e),n):Zm(i,t);const r=Uu(i,t);if(r<ye.blendRun){const a=1-Hn(r/ye.blendRun);a>0&&(s=Ft(s,t2(-r),a))}const o=(1-Hn(t/26))*et(1-Math.abs(i)/40,0,1);return o>0?Ft(s,he(i,0),o):s}function Sa(i,t){return ve([Zt(i-1.4,t)-Zt(i+1.4,t),2*1.4,Zt(i,t-1.4)-Zt(i,t+1.4)])}function rr(i,t){const n=(Zt(i+1.5,t)-Zt(i-1.5,t))/3,s=(Zt(i,t+1.5)-Zt(i,t-1.5))/(2*1.5);return Math.hypot(n,s)}function zi(i,t){const e=n2(i,t);return e===null?0:Math.max(0,e-Zt(i,t))}const D_=.62;function Xf(i,t){const e=le(i*.006,t*.006),n=et(le(i*.018,t*.018)*2.3-.55+(e-.5)*.6,0,1)*(.55+.45*le(i*.07,t*.07)),s=zi(i,t),r=mi(i,t),o=rr(i,t);let a="soil";return s>0?a="water":r<14?a="sand":o>D_?a="rock":n>.5&&(a="moss"),{kind:a,moss:n,slope:o,depth:s,toWater:r}}function r2(i,t){const e=Xf(i,t);return{y:Zt(i,t),normal:Sa(i,t),slope:e.slope,soil:e.kind,moss:e.moss,waterDepth:e.depth,distToWater:e.toWater,diggable:e.depth===0&&e.slope<=D_&&e.toWater>10}}function Cd(i,t){const e=sr(t)+1;return[et(Math.max(i,e),Ue.x0,Ue.x1),et(t,Ue.z0,Ue.z1)]}const o2=new q("#86673B"),a2=new q("#5A4529"),c2=new q("#5F8034"),l2=new q("#9DBE58"),u2=new q("#A79463"),h2=new q("#4A5540"),d2=new q("#7C7566");function zn(i,t,e){return new q(i).lerp(t,et(e,0,1))}const wc=6;function f2(){const{x0:i,x1:t,z0:e,z1:n}=Ti,s=Math.floor((t-i)/wc)+1,r=Math.floor((n-e)/wc)+1,o=new De;for(let c=0;c<s;c++)for(let l=0;l<r;l++){const u=i+c*wc,d=e+l*wc,h=Zt(u,d),f=le(u*.006,d*.006),p=et(le(u*.018,d*.018)*2.3-.55+(f-.5)*.6,0,1)*(.55+.45*le(u*.07,d*.07));let x=zn(zn(o2,a2,le(u*.09,d*.09)),zn(c2,l2,le(u*.05,d*.05)),p);const m=mi(u,d);if(m<30){x=zn(x,u2,Hn((30-m)/26));const y=i2(u,d);h<y+.6&&(x=zn(x,h2,Hn((y+.6-h)/3.5)))}const g=rr(u,d);g>.45&&(x=zn(x,d2,Hn((g-.45)/.5)*.75)),o.addVertex(u,h,d,x.toArray())}for(let c=0;c<s-1;c++)for(let l=0;l<r-1;l++){const u=c*r+l,d=(c+1)*r+l,h=(c+1)*r+l+1,f=c*r+l+1;o.addQuad(u,d,h,f)}const a=new Vt(o.toBufferGeometry(),jr({map:wT(),strength:.8,side:ge}));return a.name="lawn",a.receiveShadow=!0,a}const p2=new q("#9CC6E4"),m2=`
uniform float uWaveTime;
vec2 waterWaveGrad(vec3 p, out float h) {
  float a = p.x * 0.085 + uWaveTime * 1.05;
  float b = p.z * 0.115 - uWaveTime * 0.77 + p.x * 0.04;
  float c = p.z * 0.031 + uWaveTime * 0.31;
  h = sin(a) * 0.24 + sin(b) * 0.17 + sin(c) * 0.30;
  return vec2(cos(a) * 0.24 * 0.085 + cos(b) * 0.17 * 0.04,
              cos(b) * 0.17 * 0.115 + cos(c) * 0.30 * 0.031);
}
`;function g2(){const{x0:i,z0:t,z1:e}=Ti,n=56,s=14,r=new De,o=new q("#3E6B7A"),a=new q("#22414F");for(let g=0;g<=n;g++){const y=t+(e-t)*(g/n),_=sr(y)+1.2;for(let b=0;b<=s;b++){const S=Ft(i,_,b/s),w=et((es-Zt(S,y))/6,0,1);r.addVertex(S,es,y,zn(o,a,w).toArray())}}for(let g=0;g<n;g++)for(let y=0;y<s;y++){const _=g*(s+1)+y;r.addQuad(_+s+1,_+s+2,_+1,_)}const c=new We({vertexColors:!0,roughness:.16,metalness:0,transparent:!0,opacity:.86,side:ge}),l={uWaveTime:{value:0},uSkyCol:{value:p2}};c.userData.waterUniforms=l,c.userData.shaderTag="water-ripple",c.onBeforeCompile=g=>{Object.assign(g.uniforms,l),g.vertexShader=g.vertexShader.replace("#include <common>",m2+`
#include <common>`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        float wh; vec2 wg = waterWaveGrad(position, wh);
        objectNormal = normalize(vec3(-wg.x, 1.0, -wg.y));`).replace("#include <begin_vertex>",`#include <begin_vertex>
        transformed.y += wh;`),g.fragmentShader=g.fragmentShader.replace("#include <common>",`uniform vec3 uSkyCol;
#include <common>`).replace("#include <tonemapping_fragment>",`
        {
          float fres = pow(1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0), 3.0);
          gl_FragColor.rgb = mix(gl_FragColor.rgb, uSkyCol, 0.13 + 0.72 * fres);
        }
        #include <tonemapping_fragment>`)},c.customProgramCacheKey=()=>"water-ripple";const u=new De,d=6,h=26,f=.9,p=u.addVertex(ye.x,ye.y,ye.z,a.toArray()),x=[];for(let g=1;g<=d;g++){const y=(ye.r+f)*(g/d),_=[];for(let b=0;b<h;b++){const S=2*Math.PI*b/h,w=ye.x+Math.cos(S)*y,A=ye.z+Math.sin(S)*y,E=et((ye.y-Zt(w,A))/4,0,1);_.push(u.addVertex(w,ye.y,A,zn(o,a,E).toArray()))}x.push(_)}for(let g=0;g<h;g++){const y=(g+1)%h;u.addTri(p,x[0][y],x[0][g]);for(let _=0;_<d-1;_++)u.addQuad(x[_][g],x[_][y],x[_+1][y],x[_+1][g])}const m=new Re;m.name="water";for(const g of[r.toBufferGeometry(),u.toBufferGeometry()]){const y=new Vt(g,c);y.receiveShadow=!1,m.add(y)}return{mesh:m,update(g){l.uWaveTime.value=g}}}const x2=[{r:442,segs:96,base:-120,peak:165,seed:3.1,rough:.55,haze:.72,tint:"#8FA6C4"},{r:384,segs:96,base:-120,peak:118,seed:11.7,rough:.75,haze:.5,tint:"#6E86A6"}];function Km(i,t,e){const n=le(Math.cos(i)*2.1+t,Math.sin(i)*2.1+t),s=le(Math.cos(i)*5.3+t*2,Math.sin(i)*5.3+t*2),r=le(Math.cos(i)*11+t*3,Math.sin(i)*11+t*3);return et(.3+(n-.5)*1.5+(s-.5)*e+(r-.5)*e*.45,.05,1)}function _2(i="#8B8399",t="#AFC8D8"){const e=new q(i),n=new q(t),s=new Re;s.name="horizon";const r=[];for(const a of x2){const c=new De,l=[],u=new q(a.tint),d=[],h=[],f=[];for(let x=0;x<=a.segs;x++){const m=x/a.segs*Math.PI*2,g=Km(m,a.seed,a.rough),y=a.base+(a.peak-a.base)*g,_=Math.cos(m)*a.r,b=Math.sin(m)*a.r,S=Km(m-.04,a.seed,a.rough),w=et(.5+(g-S)*6,0,1),A=zn(u.clone().multiplyScalar(.72),u.clone().multiplyScalar(1.16),w),E=M=>{const L=zn(A,M,a.haze*.75),N=zn(A.clone().multiplyScalar(.85),M,Math.min(1,a.haze+.22));return[L,zn(L,N,.6),N]},C=E(e),v=E(n);d.push(c.addVertex(_,y,b,C[0].toArray())),h.push(c.addVertex(_,Ft(a.base,y,.45),b,C[1].toArray())),f.push(c.addVertex(_,a.base,b,C[2].toArray()));for(const M of v)l.push(M.r,M.g,M.b)}for(let x=0;x<a.segs;x++)c.addQuad(d[x],d[x+1],h[x+1],h[x]),c.addQuad(h[x],h[x+1],f[x+1],f[x]);const p=new Vt(c.toBufferGeometry(),new fi({vertexColors:!0,fog:!1,side:ge,depthTest:!1,depthWrite:!1}));p.renderOrder=-1e3,p.frustumCulled=!1,s.add(p),r.push({mesh:p,base:p.geometry.attributes.color.array.slice(),alt:new Float32Array(l)})}let o=-1;return{group:s,update(a,c=0){if(s.position.set(a.position.x,0,a.position.z),!(Math.abs(c-o)<.002)){o=c;for(const l of r){const u=l.mesh.geometry.attributes.color;for(let d=0;d<u.array.length;d++)u.array[d]=l.base[d]+(l.alt[d]-l.base[d])*c;u.needsUpdate=!0}}}}}const No={position:new P(0,0,0),radius:.9};function N_(i){return i<42?Math.min(Math.max(i/40,.55),1.45):Math.min(Math.max(2.1+(i-42)*.038,2.1),4.4)}function y2(i){return N_(i)*.5}function ss(i,t){const e=Math.cos(i.ang),n=Math.sin(i.ang),s=t*t*i.h*.26;return[i.x+e*s,i.baseY+i.h*t*(1-t*.13),i.z+n*s]}function Xl(i,t){const e=ss(i,t),n=ss(i,Math.min(t+.01,1)),s=ve(Ui(n,e)),r=[-Math.sin(i.ang),0,Math.cos(i.ang)],o=ve(Gn(s,r));return{pos:e,tangent:s,width:r,normal:o}}const Uh=6;function v2(){const i=[],t=[],e=[],n=[];for(let r=0;r<=Uh;r++){const o=r/Uh;i.push(-.5,o,0,.5,o,0),t.push(o,o),e.push(-1,1)}for(let r=1;r<=Uh;r++){const o=(r-1)*2,a=o+1,c=r*2,l=c+1;n.push(o,a,l,o,l,c)}const s=new Xt;return s.setAttribute("position",new yt(i,3)),s.setAttribute("aT",new yt(t,1)),s.setAttribute("aSide",new yt(e,1)),s.setIndex(n),s}const M2=new q("#5A7331"),b2=new q("#8FB055"),S2=new q("#C6DC82"),Jm=`
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
`;function U_({count:i=1800,seed:t=7}={}){const e=va(t),n=v2(),s=new Float32Array(i*3),r=new Float32Array(i),o=new Float32Array(i),a=new Float32Array(i),c=new Float32Array(i*3),l=new Float32Array(i),u=new Float32Array(i),d=[];let h=0,f=0;for(;h<i&&f<i*8;){f++;const v=Ft(Ti.x0+8,Ue.x1-4,e()),M=6+e()*(Ue.z1-6);if(zi(v,M)>0||Math.abs(v)<16&&M<34&&e()<.82)continue;const N=.72+.28*le(v*.01,M*.01),F=e()<.22?48+e()*60*N:(14+e()*26)*N,B=e()*Math.PI*2,z=Zt(v,M),O=new q(b2).lerp(S2,e());s[h*3]=v,s[h*3+1]=z,s[h*3+2]=M,r[h]=F,o[h]=B,a[h]=e()*Math.PI*2,c[h*3]=O.r,c[h*3+1]=O.g,c[h*3+2]=O.b,l[h]=N_(F),u[h]=(e()*2-1)*.85,d.push({i:h,x:v,z:M,h:F,baseY:z,w:y2(F),ang:B}),h++}const p=h;n.setAttribute("aBase",new gn(s.subarray(0,p*3),3)),n.setAttribute("aH",new gn(r.subarray(0,p),1)),n.setAttribute("aAng",new gn(o.subarray(0,p),1)),n.setAttribute("aPhase",new gn(a.subarray(0,p),1)),n.setAttribute("aTip",new gn(c.subarray(0,p*3),3)),n.setAttribute("aWidth",new gn(l.subarray(0,p),1)),n.setAttribute("aTwist",new gn(u.subarray(0,p),1));const x=(Ti.x0+Ue.x1)/2,m=(Ue.z0+Ue.z1)/2,g=Math.hypot(Ue.x1-x,Ue.z1-m)+120;n.boundingSphere=new Ge(new P(x,40,m),g);const y={uTime:{value:0},uWind:{value:.55},uAntPos:{value:new P(0,0,-9999)},uAntRadius:{value:.9},uBaseColor:{value:new q(M2)},uOccNear:{value:5},uOccFar:{value:16},uTransl:{value:.16},uCastA:{value:new P(0,0,0)},uCastB:{value:new P(0,0,0)},uCastRadius:{value:46}},_=new We({roughness:.85,metalness:0,side:ge});_.extensions={derivatives:!0},_.onBeforeCompile=v=>{Object.assign(v.uniforms,y),v.vertexShader=v.vertexShader.replace("#include <common>",Jm+`
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
      `),v.fragmentShader=v.fragmentShader.replace("#include <common>",`
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
      `)};const b=new du({depthPacking:af,side:ge});b.onBeforeCompile=v=>{Object.assign(v.uniforms,y),v.vertexShader=v.vertexShader.replace("#include <common>",Jm+`
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
      `)},b.customProgramCacheKey=()=>"grass-depth";const S=new ma(n,_,p);S.name="grass",S.castShadow=!0,S.receiveShadow=!0,S.customDepthMaterial=b;const w=new Nt;for(let v=0;v<p;v++)S.setMatrixAt(v,w);S.instanceMatrix.needsUpdate=!0;function A(v,M,L){y.uTime.value=M,y.uAntPos.value.copy(No.position),y.uAntRadius.value=No.radius,y.uCastA.value.copy(No.position),L&&y.uCastB.value.copy(L.position)}function E(v){y.uCastRadius.value=v}function C(v){const M=n.getAttribute("aH");let L=0;for(const N of d)N.h<=0||!v(N.x,N.z)||(M.setX(N.i,0),N.h=0,L++);return L&&(M.needsUpdate=!0),L}return{mesh:S,footprints:d,update:A,setCastRadius:E,clearIn:C}}const te={x:-85,z:95,h:340,ang:Math.PI/2,w:22};te.baseY=Zt(te.x,te.z);const w2=new q("#5a4226"),A2=new q("#332412"),O_=new q("#4a3418"),Oh=new q(w2).lerp(O_,.3),Fh=new q(A2).lerp(O_,.55),Qm=new q("#6C8E3C"),jm=new q("#AECB6E");function Ac(i,t,e){return new q(i).lerp(t,et(e,0,1))}const ii=.8,E2=6.2;function Fs(i){return ss(te,i)}function Rd(i){const t=Fs(i),e=Fs(Math.min(i+.01,1)),n=ve(Ui(e,t)),s=Math.abs(n[1])<.97?[0,1,0]:[1,0,0],r=ve(Gn(s,n));return{p:t,x:r,z:Gn(r,n)}}function Ks(i){return Ft(te.w,E2,Math.pow(et(i,0,ii)/ii,.7))}const Yf=ii*.55,t0=Math.PI*1.511,T2=98,C2=36,R2=9.6,F_=5,Pd=Rd(Yf),z_=ve(me(Ht(Pd.x,Math.cos(t0)),Ht(Pd.z,Math.sin(t0)))),P2=me(Pd.p,Ht(z_,Ks(Yf)*.7));function Uo(i){const t=1-(1-i)*(1-i);return me(P2,me(Ht(z_,i*T2),[0,t*C2,0]))}function B_(i){return Ft(R2,F_,et(i,0,1))}function k_(i){const t=Uo(et(i-.005,0,1)),e=Uo(et(i+.005,0,1)),n=ve(Ui(e,t)),s=ve(Gn(n,[0,1,0])),r=ve(Gn(s,n));return{pos:Uo(i),fwd:n,side:s,up:r}}const si={splitT:Yf,point:Uo,radius:B_,basis:k_,tipPos:Uo(1),tipRadius:F_};te.walkBranch=si;function e0(i){const t=new De,e=new De,n=va(i?481001:481002),s=i?20:4,r=i?16:6,o=[];for(let p=0;p<=s;p++){const x=p/s*ii,m=Rd(x),g=Ks(x),y=[];for(let _=0;_<r;_++){const b=2*Math.PI*_/r,S=i?.86+.1*le(Math.cos(b)*2.2+x*13,Math.sin(b)*2.2+x*13+30)+.06*le(Math.cos(b)*6.4+x*29+8,Math.sin(b)*6.4+x*29+51):1,w=g*S,A=me(m.p,me(Ht(m.x,Math.cos(b)*w),Ht(m.z,Math.sin(b)*w))),E=et((S-.86)/.2+.4,0,1),C=Ac(Fh,Oh,E);y.push(t.addVertex(A[0],A[1],A[2],C.toArray()))}o.push(y)}for(let p=0;p<o.length-1;p++)for(let x=0;x<r;x++){const m=(x+1)%r;t.addQuad(o[p][x],o[p][m],o[p+1][m],o[p+1][x])}const a=Lu(i?7:5),c=Gr(i?8:6,i?5:4),l=Ac(Qm,jm,.42);function u(p,x,m){const g=x*(.9+n()*.3),y=x*(.75+n()*.25),_={x:[g,0,0],y:[0,y,0],z:[0,0,g],p};e.bake(c,_,()=>(i?Ac(Qm,jm,m):l).toArray())}const d=i?10:3,h=i?10:5,f=[];for(let p=0;p<=d;p++){const x=p/d,m=k_(x),g=B_(x),y=[];for(let _=0;_<h;_++){const b=2*Math.PI*_/h,S=i?.9+.1*le(Math.cos(b)*2.4+x*11+100,Math.sin(b)*2.4+x*11+44):1,w=g*S,A=me(m.pos,me(Ht(m.side,Math.cos(b)*w),Ht(m.up,Math.sin(b)*w))),E=Ac(Fh,Oh,et((S-.9)/.1,0,1));y.push(t.addVertex(A[0],A[1],A[2],E.toArray()))}f.push(y)}for(let p=0;p<f.length-1;p++)for(let x=0;x<h;x++){const m=(x+1)%h;t.addQuad(f[p][x],f[p][m],f[p+1][m],f[p+1][x])}if(i){const p=Fs(0),x=te.w;for(let g=0;g<4;g++){const y=g/4*Math.PI*2+n()*.5,_=x*1.6+n()*3,b=[p[0],p[1]+x*.7,p[2]],S=[p[0]+Math.cos(y)*_,p[1]-1.6,p[2]+Math.sin(y)*_],w=_n(b,S,x*.5);t.bake(a,w,()=>Fh.toArray())}const m=5;for(let g=0;g<m;g++){const y=ii*(.6+g/m*.35+n()*.03),_=Rd(y),b=g/m*Math.PI*2+n()*.7,S=ve(me(Ht(_.x,Math.cos(b)),Ht(_.z,Math.sin(b)))),w=ve(me(Ht(S,.7),[0,.7,0])),A=me(_.p,Ht(S,Ks(y)*.7)),E=34+n()*22,C=me(A,Ht(w,E)),v=3.4+n()*1.4,M=_n(A,C,v),L=new q(Oh).multiplyScalar(.9);t.bake(a,M,()=>L.toArray()),u(C,30+n()*13,n()),u(me(A,Ht(Ui(C,A),.55)),22+n()*9,n())}u(me(Fs(ii),[0,12,0]),34,.5)}else u(me(Fs(ii),[-14,14,6]),55,.5),u(me(Fs(ii),[18,22,-8]),48,.5);return{bark:t.toBufferGeometry(),leaf:e.toBufferGeometry()}}const I2=130,L2=170;function D2(){const i=jr({map:ST(),strength:1,roughness:.92,side:ge}),t=new We({vertexColors:!0,roughness:.92,metalness:0,side:ge}),e=e0(!0),n=e0(!1),s=new Re;s.add(new Vt(e.bark,i),new Vt(e.leaf,t));const r=new Re;r.add(new Vt(n.bark,i),new Vt(n.leaf,t));for(const l of s.children)l.castShadow=!0,l.receiveShadow=!0;for(const l of r.children)l.castShadow=!0;r.visible=!1;const o=new Re;o.name="tree",o.add(s,r);let a=!0;function c(l){const u=Math.hypot(l.position.x-te.x,l.position.z-te.z);a&&u>L2?a=!1:!a&&u<I2&&(a=!0),s.visible=a,r.visible=!a}return{group:o,update:c}}const Wr=8,N2=.55,Yc=[];function yn(i,t){const e={p:[i[0],i[1],i[2]],c:[t[0],t[1],t[2]],_d:0};return Yc.push(e),e}const As=new Float32Array(Wr*3),Es=new Float32Array(Wr*3),Rs=new Jt(0,0,0,1),Yl=new Jt(0,1,0,0),U2={uLightPos:{value:As},uLightCol:{value:Es},uPitA:{value:Rs},uPitB:{value:Yl}};function O2(i,t,e,n,s){Rs.set(i,t,e,Math.max(n,.001)),Yl.set(1,Math.max(s,.001),0,0)}function Id(i,t,e){if(Yl.x<.5)return 0;const n=a=>{const c=Math.min(1,Math.max(0,a));return c*c*(3-2*c)},s=Math.hypot(i-Rs.x,e-Rs.z),r=1-n((s-Rs.w*.9)/(Rs.w*.8)),o=Math.min(1,Math.max(0,(Rs.y-t)/Yl.y));return r*n((o-.04)/.46)}function F2(i){const t=i.x,e=i.y,n=i.z;for(let r=0;r<Yc.length;r++){const o=Yc[r],a=o.p[0]-t,c=o.p[1]-e,l=o.p[2]-n;o._d=a*a+c*c+l*l}const s=Yc.slice().sort((r,o)=>r._d-o._d);for(let r=0;r<Wr;r++){const o=s[r];o?(As[r*3]=o.p[0],As[r*3+1]=o.p[1],As[r*3+2]=o.p[2],Es[r*3]=o.c[0],Es[r*3+1]=o.c[1],Es[r*3+2]=o.c[2]):(As[r*3]=As[r*3+1]=As[r*3+2]=0,Es[r*3]=Es[r*3+1]=Es[r*3+2]=0)}}function z2(i,t,e){if(e>=Xe)return .9;const n=Math.max(0,Math.min(1,(e-Ce)/(Xe-Ce)));return .12+.88*Math.pow(n,1.6)}const B2=`
uniform vec3 uLightPos[${Wr}];
uniform vec3 uLightCol[${Wr}];
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
  if (w.z >= ${Xe.toFixed(1)}) return (0.82 + 0.18 * nestNoise(w.xz * 0.015)) * pit;
  float t = clamp((w.z - (${Ce.toFixed(1)})) / (${(Xe-Ce).toFixed(1)}), 0.0, 1.0);
  return (0.12 + 0.88 * pow(t, 1.6)) * pit;
}
`;function wa(i){if(!i||i.userData.nestShaded)return i;i.userData.nestShaded=!0;const t=i.onBeforeCompile;i.onBeforeCompile=function(n,s){t&&t.call(this,n,s),Object.assign(n.uniforms,U2),n.vertexShader=n.vertexShader.replace("#include <common>",`varying vec3 vNestWorld;
#include <common>`).replace("#include <project_vertex>",`#include <project_vertex>
  vec4 nestLocal = vec4(transformed, 1.0);
  #ifdef USE_INSTANCING
    nestLocal = instanceMatrix * nestLocal;
  #endif
  vNestWorld = (modelMatrix * nestLocal).xyz;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",B2+`
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
          reflectedLight.indirectDiffuse *= max(nestDay, ${N2.toFixed(2)});
          vec3 nestSum = vec3(0.0);
          for (int i = 0; i < ${Wr}; i++) {
            vec3 Ld = uLightPos[i] - vNestWorld;
            float d = length(Ld);
            float att = 1.0 / (1.0 + d * d * 0.017);
            nestSum += uLightCol[i] * max(dot(normal, Ld / max(d, 0.001)), 0.0) * att;
          }
          reflectedLight.directDiffuse += diffuseColor.rgb * nestSum;
        }
      `)};const e=i.userData.shaderTag||"";return i.customProgramCacheKey=()=>"nest-shading|"+e,i.needsUpdate=!0,i}const un=i=>new q(i).toArray(),Pn=(i,t)=>[i[0]*t,i[1]*t,i[2]*t],Zi=(i,t,e,n)=>[i[0]*t,i[1]*e,i[2]*n],Ji=(i,t,e)=>[Ft(i[0],t[0],e),Ft(i[1],t[1],e),Ft(i[2],t[2],e)],k2=un("#6d5130"),H2=un("#5a4226"),Oo=un("#332412"),qc=un("#4c5f2f"),zh=un("#6a6154"),V2="#5E4526",G2=un("#4a3418"),n0=un(V2),i0=un("#efdcb0"),s0=un("#7a6040"),W2=un("#ffc46a"),Bh=un("#c497d9"),X2=un("#e0a752"),r0=Ji(un("#e07356"),un("#e6b558"),.5),Y2=un("#9db0d8"),q2=Pn(Ji(qc,Oo,.62),.58),$2=Pn(Oo,.7),kh=[.72,.48,1.75],Z2=[1.95,1.2,.52],Kn=[],Pi=[];function H_(i){return i.r*.65}function K2(i){const t=new De,e=new De,n=new De,s=va(20260812),r=Gr(10,7),o=Gr(6,4),a=Lu(8),c=(S,w,A,E)=>Vs([S,0,0],[0,w,0],[0,0,A],E);{const A=[];for(let E=0;E<=9;E++){const C=[];for(let v=0;v<=30;v++){const M=2*Math.PI*v/30,L=Ad*1.02*E/9,N=de[0]+Math.cos(M)*L,F=de[2]+Math.sin(M)*L,B=he(N,F)+.08,z=Ji(k2,H2,et(.3+le(N*.2,F*.2)*.5,0,1));C.push(t.addVertex(N,B,F,Pn(z,.65+.35*(1-E/9))))}A.push(C)}for(let E=0;E<9;E++)for(let C=0;C<30;C++)t.addQuad(A[E][C],A[E][C+1],A[E+1][C+1],A[E+1][C])}const l=Pn(G2,.8);function u(S,w,A,E,C,v){let L=null;for(let N=0;N<=8;N++){const F=N/8,B=Math.sin(F*Math.PI),z=Ft(w,A,F),O=Us(z,S+v*B,C*B);L&&t.bake(a,_n(L,O,E*(.65+.5*B)),()=>l),L=O}}for(let S=0;S<30;S++){const w=Ce+8+s()*(Math.abs(Ce)-16),A=Math.PI*(.15+s()*.7);u(w,A,A+.5+s()*1.3,.5+s()*.9,.06+s()*.16,(s()-.5)*9)}const d=Pn(n0,.55);for(let S=0;S<150;S++){const w=Ce+5+s()*(Math.abs(Ce)-10),A=Math.PI*(.18+s()*.64),E=Us(A,w,.02),C=1.2+s()*(ln(w)>16?7:3),v=[E[0]+(s()-.5)*.8,E[1]-C,E[2]+(s()-.5)*.8];t.bake(a,_n(E,v,.09+s()*.1),()=>d)}for(let S=0;S<520;S++){const w=Ce+3+s()*(Math.abs(Ce)-5),A=s()*Math.PI*2,E=Us(A,w,.01),C=.22+s()*.55,v=Pn(s0,(.7+s()*.7)*(.5+s()*.5));t.bake(o,c(C,C*.8,C,E),()=>v)}for(let S=0;S<120;S++){const w=Ce+5+s()*(Math.abs(Ce)-8),A=ln(w)*.7,E=(s()-.5)*2*A,C=.3+s()*.9,v=Pn(zh,(.6+s()*.8)*.8);n.bake(o,c(C*1.3,C*.7,C*1.1,[E,he(E,w)+C*.3,w]),()=>v)}function h(S,w,A,E,C,v,M){if(Math.hypot(S-wd[0],w-wd[1])<15)return;const L=Zi(C,.3,.28,.4),N=M||Zi(C,.95,.62,1.15);for(let F=0;F<A;F++){const B=S+(s()-.5)*7,z=w+(s()-.5)*7,O=E*(.45+s()*.9),U=he(B,z),G=[B,U+1.7*O,z];t.bake(a,_n([B,U,z],G,.22*O),()=>L),e.bake(r,c(1.15*O,.8*O,1.15*O,G),()=>N),Kn.push({x:B,z,r:1.15*O+.5})}yn([S,he(S,w)+2.4,w],v)}for(let S=0;S<9;S++){const w=-14-S*10.5;h((S%2?1:-1)*(3.5+s()*1.8),w,4+Math.floor(s()*4),1.3,Bh,kh)}for(let S=0;S<8;S++){const w=s()*Math.PI*2,A=17+s()*9;let E=de[0]+Math.cos(w)*A;const C=de[2]+Math.sin(w)*A,v=ln(C)*.72;Math.abs(E)>v&&(E=Math.sign(E)*v),h(E,C,5+Math.floor(s()*5),1.9,Bh,kh)}const f=Pn(n0,.36),p=Zi(W2,1.25,1.15,1.4);for(let S=0;S<26;S++){const w=Math.PI*(.2+s()*.6),A=kf+(s()-.5)*Gl*1.5,E=Us(w,A,.03),C=[E[0],E[1]-(3+s()*11),E[2]];t.bake(a,_n(E,C,.07),()=>f);const v=.55+s()*.75;e.bake(r,c(v,v*1.25,v,C),()=>p),S%3===0&&yn(C,Z2)}const x=Zi(i0,.76,.7,.58);for(let S=0;S<5;S++){const w=Math.PI*(.15+S*.42),A=8+s()*5,E=de[0]+Math.cos(w)*A,C=de[2]+Math.sin(w)*A;for(let v=0;v<22;v++){const M=E+(s()-.5)*5.5,L=C+(s()-.5)*5.5,N=.5+s()*.35;t.bake(r,c(N*.72,N*.72,N*1.5,[M,he(M,L)+N*.6,L]),()=>x)}yn([E,he(E,C)+1.5,C],[.55,.42,.22])}if(yn([de[0],he(de[0],de[2])+9,de[2]],[1.5,1.05,.5]),i&&i.granary){const S=i.granary;for(let A=0;A<5;A++){const E=(s()-.5)*Math.PI*1.6,C=et(S.uEnd+(s()-.5)*S.uMax*.5,S.uMax*.42,S.uMax*.96),v=S.pointAt(E,C,.12);for(let M=0;M<26;M++){const L=v[0]+(s()-.5)*4.5,N=v[2]+(s()-.5)*4.5,F=.5+s()*1.3,B=et(1-Math.hypot(L-v[0],N-v[2])/4.5,0,1),z=Pn(Ji(Ji(X2,r0,s()*.4),Oo,B*.5),.55+.35*(1-B));t.bake(o,c(F,F*.85,F,[L,he(L,N)+F*.4,N]),()=>z)}}const w=Zi(r0,.94,.81,.51);for(let A=0;A<10;A++){const E=(s()-.5)*Math.PI*1.5,C=et(S.uEnd+(s()-.5)*S.uMax*.55,4,S.uMax-2),v=s()<.5,M=S.pointAt(E,C,v?.85:.06),L=.5+s()*.7,N=v?M[1]-L*(.6+s()*1.6):he(M[0],M[2])+L*.55;t.bake(r,c(L*.8,L*1.3,L*.8,[M[0],N,M[2]]),()=>w)}for(let A=0;A<2;A++){const E=S.pointAt(0,2+s()*4,.3);yn([E[0],he(E[0],E[2])+2.2,E[2]],[.42,.3,.14])}}if(i&&i.brood){const S=i.brood,w=[.34,.5,.68],A=[1,1.55,1.15],E=Zi(Y2,.42,.4,.46);for(let C=0;C<7;C++){const v=(s()-.5)*Math.PI*1.7,M=et(S.uEnd+(s()-.5)*S.uMax*.6,S.uMax*.32,S.uMax*.97),L=S.pointAt(v,M,.1),N=he(L[0],L[2]),F=14+Math.floor(s()*14);for(let B=0;B<F;B++){const z=Math.floor(s()*3),O=w[z]+s()*.22,U=L[0]+(s()-.5)*4.6,G=L[2]+(s()-.5)*4.6,K=(.85+s()*.25)*.85,nt=Zi(i0,K,K*.94,K*.8);t.bake(r,c(O*.75,O*.75,O*1.5*A[z],[U,he(U,G)+O*.6,G]),()=>nt)}if(C%2===0){const B=4+Math.floor(s()*3);for(let z=0;z<B;z++){const O=s()*Math.PI*2,U=O+1.4+s()*1.2,G=2.2+s()*1.2,K=[L[0]+Math.cos(O)*G,N+.5+s()*1,L[2]+Math.sin(O)*G],nt=[L[0]+Math.cos(U)*G,N+.5+s()*1,L[2]+Math.sin(U)*G];t.bake(a,_n(K,nt,.03),()=>E)}}yn([L[0],N+1.6,L[2]],[.62,.46,.24])}for(let C=0;C<2;C++){const v=(s()-.5)*Math.PI*1.4,M=et(S.uEnd+(s()-.5)*S.uMax*.4,4,S.uMax-2),L=S.pointAt(v,M,.1);h(L[0],L[2],2+Math.floor(s()*2),1.1,Bh,kh)}}if(i&&i.midden){const S=i.midden,w=Ji(qc,Oo,.5),A=Pn(Ji(qc,Oo,.3),3.5),E=[.3,.46,.3];for(let M=0;M<3;M++){const L=(s()-.5)*Math.PI*1.6,N=et(S.uEnd+(s()-.5)*S.uMax*.5,4,S.uMax-2),F=S.pointAt(L,N,.08);h(F[0],F[2],3+Math.floor(s()*3),1,w,E,A)}for(let M=0;M<4;M++){const L=(s()-.5)*Math.PI*1.7,N=et(S.uEnd+(s()-.5)*S.uMax*.55,3,S.uMax-1.5),F=S.pointAt(L,N,.1);for(let B=0;B<20;B++){const z=F[0]+(s()-.5)*5,O=F[2]+(s()-.5)*5,U=.4+s()*1.1,G=Pn(s()<.5?zh:s0,(.3+s()*.35)*.55);n.bake(o,c(U*1.2,U*.7,U,[z,he(z,O)+U*.3,O]),()=>G)}}const C=Pn($2,.5);for(let M=0;M<5;M++){const L=(s()-.5)*Math.PI*1.6,N=et(S.uEnd+(s()-.5)*S.uMax*.5,3,S.uMax-1.5),F=S.pointAt(L,N,.12),B=he(F[0],F[2]),z=2.2+s()*2.2,O=s()*Math.PI*2;t.bake(a,_n([F[0],B+.35,F[2]],[F[0]+Math.cos(O)*z,B+.3,F[2]+Math.sin(O)*z],.55+s()*.35),()=>C)}const v=Zi(q2,.3,.36,.3);for(let M=0;M<6;M++){const L=(s()-.5)*Math.PI*1.6,N=et(S.uEnd+(s()-.5)*S.uMax*.55,3,S.uMax-1.5),F=S.pointAt(L,N,.05),B=1+s()*1.6;t.bake(r,c(B,.12,B,[F[0],he(F[0],F[2])+.03,F[2]]),()=>v)}}for(let S=0;S<42;S++){const w=-200+s()*380,A=8+s()*250;if(zi(w,A)>0||mi(w,A)<4)continue;const E=2+s()*6,C=1.5+s()*4,v=2+s()*6,M=Zt(w,A)+C*.35,L=.75+s()*.5,N=s()*40,F=s()<.6?.5+s()*.5:0;n.bake(r,c(E,C,v,[w,M,A]),(B,z,O)=>{const U=Pn(zh,L);if(F<=0)return U;const G=et((z-M)/C+.15*le(B*.3+N,O*.3+N),0,1);return Ji(U,qc,G*G*F)}),Pi.push({x:w,z:A,r:(E+v)*.5+1})}const m=new Re;m.name="nest-decor";const g=new Vt(t.toBufferGeometry(),new We({vertexColors:!0,roughness:.92,metalness:0,side:ge}));g.name="nest-decor-matte",m.add(g);const y=new Vt(n.toBufferGeometry(),jr({map:AT(),strength:1,roughness:.92,side:ge}));y.name="nest-decor-stone",y.castShadow=!0,y.receiveShadow=!0,m.add(y);const _=M_({map:__(),strength:.7,emissive:.95,color:7829367,side:ge}),b=new Vt(e.toBufferGeometry(),_);return b.name="nest-decor-glow",m.add(b),{group:m,mushrooms:Kn,rocks:Pi}}const Hh=new q("#b07226").toArray(),mo=new q("#5e3d16").toArray(),o0=new q("#100c06").toArray(),tn=2.4,J2=2.7,Q2=2.9;function j2(i,t,e,n,s){const r=Ui(t,i),o=Math.hypot(r[0],r[1],r[2]),a=et(o,.05,e+n-.02),c=Ht(r,1/(o||1)),l=(e*e-n*n+a*a)/(2*a),u=Math.sqrt(Math.max(e*e-l*l,0)),d=s[0]*c[0]+s[1]*c[1]+s[2]*c[2],h=ve(Ui(s,Ht(c,d)));return me(me(i,Ht(c,l)),Ht(h,u))}function a0(i){const t=new Xt;return t.setAttribute("position",new yt(i.p,3)),t.setAttribute("normal",new yt(i.n,3)),t.setIndex(i.i),t}function c0(i,t){i.matrix.set(t.x[0],t.y[0],t.z[0],t.p[0],t.x[1],t.y[1],t.z[1],t.p[1],t.x[2],t.y[2],t.z[2],t.p[2],0,0,0,1),i.matrixWorldNeedsUpdate=!0}function tC(){const i=new Re;i.name="queen";const t=[de[0],he(de[0],de[2]),de[2]],e=Math.PI,n=[Math.sin(e),0,Math.cos(e)],s=[0,1,0],r=ve(Gn(s,n)),o=Vs(r,s,n,[t[0],t[1]+1.05*tn,t[2]]),a=E=>x_(o,Ht(E,tn)),c=Gr(12,9),l=Lu(8),u=new De,d=(E,C,v,M)=>Vs(Ht(r,C*tn),Ht(s,v*tn),Ht(n,M*tn),a(E)),h=(E,C,v,M,L)=>u.bake(c,d(E,C,v,M),()=>L),f=(E,C,v,M)=>u.bake(l,_n(E,C,v),()=>M);h([0,1.5,-1.2],.5,.5,.62,mo),h([0,1.62,.5],1.06,1.02,1.75,Hh),h([0,1.66,2.7],1.18,1.02,1.12,Hh),h([.76,2.12,3.1],.3,.26,.3,o0),h([-.76,2.12,3.1],.3,.26,.3,o0);for(let E=-1;E<=1;E+=2)f(a([E*.55,1.45,3.5]),a([E*.34,1.2,4.8]),.17*tn,Hh);const p=[[.92,1.5,1.7],[-.92,1.5,1.7],[1.02,1.4,.4],[-1.02,1.4,.4],[.92,1.4,-1.15],[-.92,1.4,-1.15]],x=[[4.1,0,3.9],[-4.1,0,3.9],[4.9,0,.3],[-4.9,0,.3],[4.5,0,-3.5],[-4.5,0,-3.5]];for(let E=0;E<6;E++){const C=a(p[E]),v=a(x[E]);v[1]=he(v[0],v[2]);const M=p[E][0]>0?r:Ht(r,-1),L=j2(C,v,J2*tn,Q2*tn,ve(me(s,Ht(M,.75))));f(C,L,.2*tn,mo),f(L,v,.14*tn,mo),u.bake(c,Vs([.3*tn,0,0],[0,.3*tn,0],[0,0,.3*tn],L),()=>mo)}const m=new We({vertexColors:!0,roughness:.45,metalness:.05}),g=new Vt(u.toBufferGeometry(),m);g.name="queen-body",g.castShadow=!0,i.add(g);const y=a0(c),_=a0(l),b=new We({color:new q().fromArray(mo),roughness:.45,metalness:.05}),S=[{local:[0,1.5,-5.4],rx:1.34,ry:1.3,rz:1.9},{local:[0,1.55,-3.2],rx:1.6,ry:1.54,rz:2.1}].map(E=>{const C=new Vt(y,b);return C.matrixAutoUpdate=!1,C.castShadow=!0,i.add(C),{mesh:C,...E}}),w=[];for(let E=-1;E<=1;E+=2)for(let C=0;C<2;C++){const v=new Vt(_,b);v.matrixAutoUpdate=!1,i.add(v),w.push({mesh:v,sA:E,seg:C})}function A(E){const C=1+Math.sin(E*.55)*.04;for(const v of S)c0(v.mesh,d(v.local,v.rx*C,v.ry*C,v.rz));for(const v of w){const M=Math.sin(E*1.1+(v.sA>0?0:1.3))*.35,L=a([v.sA*.58,2.1,3.2]),N=a([v.sA*(1.4+M*.3),3.3,4.2]),F=a([v.sA*(1.85+M),3.2+M*.4,6.1]);c0(v.mesh,v.seg===0?_n(L,N,.14*tn):_n(N,F,.11*tn))}}return A(0),{group:i,update:A}}const qf={sunDir:ve([-300,120,195]),sunColor:15251852,sunIntensity:6.1,hemiSky:7241640,hemiGround:4867376,hemiIntensity:1.15,fog:8221832,fogNear:95,fogFar:420,sky:10130344,exposure:1.3},$f={sunDir:ve([30,45,20]),sunColor:16767370,sunIntensity:2.5,hemiSky:12572917,hemiGround:7236152,hemiIntensity:.85,fog:11520216,fogNear:90,fogFar:420,sky:10274532,exposure:1.15};let Fo=0;function Aa(){return Fo}function V_(i){Fo=i<0?0:i>1?1:i}const ei=[0,1,0];function Ou(){const i=qf.sunDir,t=$f.sunDir;ei[0]=i[0]+(t[0]-i[0])*Fo,ei[1]=i[1]+(t[1]-i[1])*Fo,ei[2]=i[2]+(t[2]-i[2])*Fo;const e=Math.hypot(ei[0],ei[1],ei[2])||1;return ei[0]/=e,ei[1]/=e,ei[2]/=e,ei}const eC=56;function l0(i,t,e,n,s,r,o,a){const c=n-i,l=s-t,u=r-e,d=c*a[0]+l*a[1]+u*a[2];if(d<=0)return 0;const h=c*c+l*l+u*u-d*d,f=Math.sqrt(h>0?h:0),p=o*.35+d*.06,x=et((o+p-f)/p,0,1);return x*x*(3-2*x)}function nC(i,t,e,n){const s=Math.hypot(n[0],n[2]);if(s<1e-4)return 0;const r=n[0]/s,o=n[2]/s,a=te.x-i,c=te.z-e,l=a*r+c*o;if(l<=0)return 0;const u=Math.abs(a*o-c*r);if(t+n[1]/s*l>te.baseY+te.h*ii)return 0;const h=te.w*.4+l*.05,f=et((te.w+h-u)/h,0,1);return f*f*(3-2*f)}function iC(i,t,e,n){const s=Math.hypot(n[0],n[2]);if(s<1e-4)return 0;const r=n[0]/s,o=n[2]/s,a=n[1]/s,c=Math.min(170,34/a+14);let l=0;for(let u=2.5;u<c;u*=1.38){const h=Zt(i+r*u,e+o*u)-(t+a*u+.5);if(h<=0)continue;const f=1.2+u*.05,p=et(h/f,0,1);if(p>l&&(l=p),l>=1)break}return l}function G_(i,t){if(t<Xe)return 1;const e=Ou(),n=Zt(i,t),s=Sa(i,t),r=et((s[0]*e[0]+s[1]*e[1]+s[2]*e[2])/Math.max(e[1],.001),0,1);let o=iC(i,n,t,e);if(o<1){const a=n+1.2;o=Math.max(o,nC(i,a,t,e));const c=Fs(ii);o=Math.max(o,l0(i,a,t,c[0],c[1]+14,c[2],eC,e));for(let l=0;l<Pi.length&&o<1;l++){const u=Pi[l],d=u.r*.8;o=Math.max(o,l0(i,a,t,u.x,Zt(u.x,u.z)+d*.45,u.z,d,e))}}return et(1-r*(1-o),0,1)}const Jn=[],W_=new Map,sC=["graine","brindille","miellat"],rC={graine:4,brindille:3,miellat:5},oC={graine:5,brindille:6,miellat:5},aC=[.88,.66,.32],cC=[.55,.38,.18],lC=[.42,.32,.19],u0=[.24,.18,.1],uC=[.94,.74,.36],hC=[.78,.5,.2],dC=new q("#4A4438"),Zf=(i,t,e)=>[Ft(i[0],t[0],e),Ft(i[1],t[1],e),Ft(i[2],t[2],e)];function fC(i,t,e,n,s){const r=new De,o=[];for(let a=0;a<=n;a++){const c=a/n,l=[],u=t(c);for(let d=0;d<e;d++){const h=2*Math.PI*d/e;l.push(r.addVertex(Math.cos(h)*u,c*i,Math.sin(h)*u,s(c,h)))}o.push(l)}for(let a=0;a<n;a++)for(let c=0;c<e;c++){const l=(c+1)%e;r.addQuad(o[a][c],o[a][l],o[a+1][l],o[a+1][c])}return r}function pC(){return fC(7,t=>Math.pow(Math.sin(Math.PI*t),.62)*2*(1-.3*t),7,5,(t,e)=>Zf(cC,aC,et(.25+.75*Math.pow(Math.abs(Math.cos(e*.5)),1.5)*(.4+.6*t),0,1))).toBufferGeometry()}function mC(){const i=new De,t=Lu(5),e=[[0,0,0],[.6,5.5,.4],[2.4,10.6,.2]];for(let n=0;n<2;n++)i.bake(t,_n(e[n],e[n+1],.62-n*.16),(s,r)=>Zf(u0,lC,et(.55+.25*Math.sin(r*1.7),0,1)));return i.bake(t,_n([.6,5.5,.4],[-2.6,8.2,-1.1],.33),()=>u0),i.toBufferGeometry()}function gC(){const i=new De,t=Gr(6,3),e=[[0,.9,0,2.6,1.5,2.2],[2.4,.6,1.1,1.7,1,1.5],[-1.6,.7,1.6,1.9,1.2,1.7]];for(const n of e)i.bake(t,Vs([n[3],0,0],[0,n[4],0],[0,0,n[5]],[n[0],n[1],n[2]]),(s,r)=>Zf(hC,uC,et((r-n[1])/(n[4]*2)+.55,0,1)));return i.toBufferGeometry()}const zo=(i,t)=>i>=t?0:Math.pow(1-i/t,1.5);function xC(i,t){if(zi(i,t)>0||mi(i,t)<10)return 0;let e=.16;return e+=1.05*zo(Math.hypot(i-te.x,t-te.z),78),e+=.85*zo(Math.hypot(i-88,t-168),74),e+=.7*zo(Math.hypot(i-24,t-128),46),e*et(1-(rr(i,t)-.16)/.5,.12,1)}const _C=2;function yC(i,t,e){const n=Math.hypot(i-te.x,t-te.z)<85,s=e();return n?s<.55?"brindille":s<.85?"miellat":"graine":zo(Math.hypot(i-88,t-168),74)+zo(Math.hypot(i-24,t-128),46)>.25?s<.6?"graine":s<.85?"miellat":"brindille":s<.5?"graine":s<.8?"brindille":"miellat"}const h0=32;function vC(i=90210){const t=va(i),e=Ue;let n=0,s=0,r=1;for(;n<h0&&s++<h0*200;){const o=Ft(e.x0+14,e.x1-14,t()),a=Ft(e.z0+16,e.z1-14,t());if(t()*_C>xC(o,a))continue;const c=yC(o,a,t),l=3+Math.floor(t()*4);let u=0;for(let d=0;d<l*3&&u<l;d++){const h=t()*Math.PI*2,f=Math.sqrt(t())*12,p=o+Math.cos(h)*f,x=a+Math.sin(h)*f;if(zi(p,x)>0||mi(p,x)<10||rr(p,x)>.7)continue;const m=Math.max(1,rC[c]+Math.round((t()-.5)*2)),g={id:r++,x:p,z:x,kind:c,amount:m,r:oC[c],amount0:m,yaw:t()*Math.PI*2,tilt:(t()-.5)*.5,size:.75+t()*.5,_slot:-1};Jn.push(g),W_.set(g.id,g),u++}u&&n++}}const X_={},d0=new Nt,f0=new an,p0=new Sn,m0=new P,g0=new P,x0=new q;function Y_(i){const t=X_[i.kind];if(!t||i._slot<0)return;const e=i.amount0>0?i.amount/i.amount0:0,n=i.size*Ft(.45,1,Math.pow(e,.6)),s=Sa(i.x,i.z);p0.set(i.tilt-Math.atan2(s[2],s[1])*.6,i.yaw,i.tilt+Math.atan2(s[0],s[1])*.6),f0.setFromEuler(p0),m0.set(i.x,Zt(i.x,i.z)-.35*n,i.z),g0.set(n,n,n),d0.compose(m0,f0,g0),t.setMatrixAt(i._slot,d0),x0.set(1,1,1).lerp(dC,(1-e)*.8),t.setColorAt(i._slot,x0),t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0)}function Kf(i,t=1){const e=W_.get(i);if(!e||e.amount<=0||!(t>0))return 0;const n=Math.min(t,e.amount);return e.amount-=n,Y_(e),n}function MC(i,t,e=12,n=!1){const s=[];for(const r of Jn)!n&&r.amount<=0||Math.hypot(r.x-i,r.z-t)<=e&&s.push(r);return s}function bC(){const i=new Re;i.name="resources",Jn.length===0&&vC();const t={graine:pC(),brindille:mC(),miellat:gC()},e=new We({vertexColors:!0,roughness:.9,metalness:0}),n=new We({vertexColors:!0,roughness:.22,metalness:0});for(const s of sC){const r=Jn.filter(c=>c.kind===s),o=Math.max(r.length,1),a=new ma(t[s],s==="miellat"?n:e,o);a.name="resource-"+s,a.castShadow=!0,a.receiveShadow=!0,a.count=r.length,a.instanceColor=new gn(new Float32Array(o*3).fill(1),3),a.frustumCulled=!1,X_[s]=a,r.forEach((c,l)=>{c._slot=l,Y_(c)}),i.add(a)}return{group:i,nodes:Jn}}const Jf=14,_0=1.6,Ec=3.2,Qf=8,bo=Jf+Qf+4,q_=18,SC=.62,jf=new q("#6d5130"),wC=new q("#5a4226"),$_=new q("#332412"),go=new q("#e0a752"),AC=new q("#efdcb0"),EC=new q("#ffc46a"),$c=[.55,.62,.82],TC=[.46,.26,.1],Vh=[.85,.55,.22],CC=[1.2,.72,.3],RC=[1.55,.95,.42],PC=[1.35,.78,.3],Gh=[1.95,1.2,.52],Ld=6;let Dd=null,Ts=null,Zc=null,_e=null;const Ps=(i,t,e)=>new q(i).lerp(t,et(e,0,1));function IC(i,t={}){Dd=i,Ts=t.lawn||null,Zc=t.grass||null}function oa(){return _e?{x:_e.x,z:_e.z}:null}function Z_(){return _e}function tp(i,t){if(_e)return{ok:!1,reason:"already-founded"};if(t<Xe)return{ok:!1,reason:"underground"};const e=Ue;return i<e.x0+bo||i>e.x1-bo?{ok:!1,reason:"bounds"}:t<bo||t>e.z1-bo?{ok:!1,reason:"bounds"}:Math.abs(i)<34&&t<34?{ok:!1,reason:"occupied"}:zi(i,t)>0?{ok:!1,reason:"water"}:mi(i,t)<q_?{ok:!1,reason:"water"}:rr(i,t)>SC?{ok:!1,reason:"slope"}:Xf(i,t).kind==="rock"?{ok:!1,reason:"rock"}:{ok:!0}}function Fr(i,t,e){const n=(s,r)=>le(Math.cos(i)*s+t*r+e+37,Math.sin(i)*s+t*r*.7+e+91);return .84+.2*n(1.6,.1)+.1*n(4.1,.29)+.05*n(9.3,.62)}function In(i,t=.18){return Ps($_,wC,i*.8+.1).lerp(jf,t+i*.14).multiplyScalar(.88)}function LC(i,t){const e=Ue,n=Ym/w_,s=nn(i,t),r=[[],[]];for(let u=0;u<24;u++){const d=u/24*Math.PI*2,h=[Math.sin(d),Math.cos(d)],f=Math.atan2(-h[0],h[1]),p=i-n*Math.cos(f),x=t-n*Math.sin(f);let m=0,g=!1,y=!0;for(let _=1;_<=8;_++){const b=_/8*(Ym+Jf),S=f+b/n,w=p+n*Math.cos(S),A=x+n*Math.sin(S),E=_===8?bo:Qf;if(w<e.x0+E||w>e.x1-E||A<Xe+E||A>e.z1-E){g=!0;break}if(zi(w,A)>0||mi(w,A)<q_*.6){g=!0;break}const C=nn(w,A);_===8&&C<s-3&&(y=!1),m+=C*(_===8?3:1)}g||r[y?0:1].push({head:h,score:m})}const o=r[0].length?r[0]:r[1];if(o.length)return o.reduce((u,d)=>d.score>u.score?d:u).head;const a=(e.x0+e.x1)*.5-i,c=(e.z0+e.z1)*.5-t,l=Math.hypot(a,c)||1;return[a/l,c/l]}function DC(i,t,e){const n=nn(i,t),s=6,r=[et((nn(i+s,t)-nn(i-s,t))/(2*s),-.18,.18),et((nn(i,t+s)-nn(i,t-s))/(2*s),-.18,.18)],o=LC(i,t),a=WT({x:i,z:t},{y:n,gx:r[0],gz:r[1]},o,e);GT(a);const c=new De,l=a.floorY,u=a.chamber,d=[-1,-.62,-.24,.24,.62,1],h=[],f=u.r+9;let p=a.arc.len;for(let O=0;O<=a.arc.len;O+=1){const U=Nr(a,O);if(Math.hypot(U.x-u.x,U.z-u.z)<=f*.98){p=Math.min(a.arc.len,O+2);break}}for(let O=0;O<=p+1e-4;O+=2){const U=Nr(a,O),G=O/Math.max(a.arc.len,.001),K=(U.x-a.arc.ax)/a.arc.R,nt=(U.z-a.arc.az)/a.arc.R,_t=[],Rt=(ot,At,Tt)=>_t.push(c.addVertex(U.x+K*ot,At,U.z+nt*ot,Tt)),$=ot=>{const At=ot*(a.hw+Ec),Tt=ot*(a.hw+Ec+Qf),Lt=U.x+K*At,Bt=U.z+nt*At,j=U.x+K*Tt,D=U.z+nt*Tt,ht=.72+.56*le(j*.15+e,D*.15+e);return{rim:At,bank:Tt,rx:Lt,rz:Bt,bx:j,bz:D,lump:ht}},tt=$(-1);Rt(tt.bank,nn(tt.bx,tt.bz)+.15*tt.lump,Ps(In(tt.lump,.34),go,.12).toArray()),Rt(tt.rim,nn(tt.rx,tt.rz)+_0*tt.lump,Ps(In(tt.lump,.3),go,.1).toArray());for(const ot of d){const At=ot*a.hw,Tt=U.x+K*At,Lt=U.z+nt*At,Bt=Fr(ot*Math.PI,O,e);Rt(At,Do(a,Tt,Lt,O,At),In(et((Bt-.84)/.34+.45,0,1),.22+G*.06).toArray())}const ut=$(1);Rt(ut.rim,nn(ut.rx,ut.rz)+_0*ut.lump,Ps(In(ut.lump,.3),go,.1).toArray()),Rt(ut.bank,nn(ut.bx,ut.bz)+.15*ut.lump,Ps(In(ut.lump,.34),go,.12).toArray()),h.push(_t)}for(let O=0;O<h.length-1;O++)for(let U=0;U<h[O].length-1;U++)c.addQuad(h[O][U],h[O][U+1],h[O+1][U+1],h[O+1][U]);const x=30,m=5,g=3,y=5,_=O=>O<=g?u.r:u.r*Math.cos((O-g)/y*(Math.PI/2)),b=O=>O<=g?l+ci*O/g:l+ci+(Os-ci)*Math.sin((O-g)/y*(Math.PI/2)),S=[];for(let O=0;O<=m;O++){const U=O/m*u.r,G=[];for(let K=0;K<x;K++){const nt=2*Math.PI*K/x,_t=u.x+Math.cos(nt)*U,Rt=u.z+Math.sin(nt)*U;G.push(c.addVertex(_t,Nu(a,_t,Rt),Rt,In(et((Fr(nt,O,e)-.84)/.34+.45,0,1),.26).toArray()))}S.push(G)}for(let O=0;O<m;O++)for(let U=0;U<x;U++){const G=(U+1)%x;c.addQuad(S[O][U],S[O][G],S[O+1][G],S[O+1][U])}const w=[];for(let O=0;O<=g+y;O++){const U=_(O),G=b(O),K=[];for(let nt=0;nt<x;nt++){const _t=2*Math.PI*nt/x,Rt=Fr(_t,O,e),$=U*(O<=g?.94+(Rt-.84)*.4:1),tt=u.x+Math.cos(_t)*$,ut=u.z+Math.sin(_t)*$;K.push({i:c.addVertex(tt,G,ut,In(et((Rt-.84)/.34+.45,0,1),.2).toArray()),x:tt,z:ut,y:G})}w.push(K)}const A=(O,U)=>O.y-l<=ci+.1&&Td(a,(O.x+U.x)*.5,(O.z+U.z)*.5)!==null;for(let O=0;O<w.length-1;O++)for(let U=0;U<x;U++){const G=(U+1)%x,K=w[O][U],nt=w[O][G];A(K,nt)||A(w[O+1][U],w[O+1][G])||c.addQuad(K.i,nt.i,w[O+1][G].i,w[O+1][U].i)}const E=c.addVertex(u.x,l+Os,u.z,In(.5,.24).toArray()),C=w[w.length-1];for(let O=0;O<x;O++)c.addTri(E,C[(O+1)%x].i,C[O].i);const v=9,M=44,L=.9,N=l+Os+Xm,F=[];for(let O=0;O<=v;O++){const U=O/v,G=[];for(let K=0;K<=M;K++){const nt=2*Math.PI*(K%M)/M,_t=u.x+Math.cos(nt)*U*f,Rt=u.z+Math.sin(nt)*U*f,$=nn(_t,Rt),tt=le(_t*.13+e,Rt*.13+e)-.5,ut=Math.max($+1.6,N);let ot=$+(ut-$)*Math.pow(1-U*U,.85)+tt*2.2*(1-U);const At=$T(a,_t,Rt);At!==null&&(ot=Math.max(ot,At+Xm*.55));const Tt=Math.hypot(_t-u.x,Rt-u.z),Lt=Tt>u.r*L?I_(a,_t,Rt,4):null;if(Lt){const Bt=Math.abs(Lt.lat)-a.hw;if(Bt<=0)ot=Do(a,_t,Rt,Lt.u,Lt.lat);else if(Bt<Ec){const j=Bt/Ec;ot=Ft(Do(a,_t,Rt,Lt.u,a.hw*Math.sign(Lt.lat)),ot,j*j*(3-2*j))}}G.push({i:c.addVertex(_t,ot,Rt,Ps(In(.5+tt,.34),go,.14).toArray()),x:_t,z:Rt,dc:Tt})}F.push(G)}const B=O=>O.dc<u.r*1.02&&Td(a,O.x,O.z)!==null;for(let O=0;O<v;O++)for(let U=0;U<M;U++){const G=[F[O][U],F[O][U+1],F[O+1][U+1],F[O+1][U]];G.some(B)||c.addQuad(G[0].i,G[1].i,G[2].i,G[3].i)}const z=(()=>{const O=Nr(a,Math.max(0,a.arc.len-2)),U=Nr(a,a.arc.len),G=Math.hypot(U.x-O.x,U.z-O.z)||1;return[(U.x-O.x)/G,(U.z-O.z)/G]})();return{geometry:c.toBufferGeometry(),ex:a,mouthY:n,floorY:l,origin:[i,n,t],dir:[z[0],0,z[1]],uMax:a.arc.len,chamber:{x:u.x,y:l,z:u.z,ceilY:l+Os-1.5,r:u.r}}}function K_(){if(!Ts||!Ts.geometry)return 0;const i=Ts.geometry.getAttribute("position"),t=Ts.geometry.getAttribute("color"),e=2.5,n=7,s=$_.clone().lerp(jf,.4);let r=0;for(let o=0;o<i.count;o++){const a=i.getX(o),c=i.getZ(o),l=ts(a,c);if(l!==null&&nn(a,c)-l>1.5){i.setY(o,l-e),r++,t&&t.setXYZ(o,s.r,s.g,s.b);continue}if(t)for(let u=0;u<8;u++){const d=u/8*Math.PI*2;if(ts(a+Math.cos(d)*n,c+Math.sin(d)*n)!==null){t.setXYZ(o,s.r,s.g,s.b);break}}}return i.needsUpdate=!0,t&&(t.needsUpdate=!0),Ts.geometry.computeVertexNormals(),Ts.geometry.computeBoundingSphere(),Zc&&typeof Zc.clearIn=="function"&&Zc.clearIn((o,a)=>ts(o,a)!==null),r}function NC(i,t){const e=va(t^23505),n=Gr(8,5),s=(p,x,m,g)=>Vs([p,0,0],[0,x,0],[0,0,m],g),r=i.chamber,o=[],a=wa(new We({vertexColors:!0,roughness:.85,metalness:0,side:ge}));for(let p=0;p<Ld;p++){const x=p/Ld*Math.PI*2+e()*.5,m=r.r*(.28+e()*.34),g=r.x+Math.cos(x)*m,y=r.z+Math.sin(x)*m,_=new De,b=5+Math.floor(e()*5);for(let A=0;A<b;A++){const E=e()*Math.PI*2,C=Math.sqrt(e())*2.6,v=g+Math.cos(E)*C,M=y+Math.sin(E)*C,L=.75+e()*.45;_.bake(n,s(L*1.25,L*.85,L,[v,r.y+L*.7,M]),(N,F)=>Ps(AC,jf,et(.55-(F-r.y)*.25,0,1)).toArray())}const S=new Vt(_.toBufferGeometry(),a);S.name="nest-brood-"+p,S.visible=!1,S.castShadow=!1;const w=yn([g,r.y+2.2,y],[0,0,0]);o.push({mesh:S,lamp:w,on:!1})}const c=new De,l=r.x+(e()-.5)*6,u=r.z+(e()-.5)*6,d=r.ceilY-3.2;c.bake(n,s(1.5,1.8,1.5,[l,d,u]),()=>EC.toArray());const h=new Vt(c.toBufferGeometry(),M_({map:__(),strength:.7,emissive:.95,color:7829367,side:ge}));h.name="nest-glow-bead",h.visible=!1;const f=yn([l,d,u],[0,0,0]);return{piles:o,bead:{mesh:h,lamp:f,on:!1}}}function J_(i,t){const e=tp(i,t);if(!e.ok)return e;const n=Math.floor(Math.abs(i)*131+Math.abs(t)*977)%9973,s=DC(i,t,n),r=new Re;r.name="founded-nest";const o=new Vt(s.geometry,wa(jr({map:Bf(),strength:.62,side:ge})));o.name="founded-nest-shell",o.receiveShadow=!0,r.add(o);const a=NC(s,n);for(const d of a.piles)r.add(d.mesh);r.add(a.bead.mesh),Dd&&Dd.add(r),K_(),zC(s.ex);const c=Nr(s.ex,s.ex.descend),l=yn([c.x,s.floorY+6,c.z],$c),u=yn([i,s.mouthY-2.5,t],TC);return _e={x:i,z:t,group:r,mouth:{x:i,y:s.mouthY,z:t,r:s.ex.hw},chamber:s.chamber,floorY:s.floorY,axis:{origin:s.origin,dir:s.dir,length:s.uMax},brood:0,sealed:!1,_furnishing:a,_coldLight:l,_warmLight:u,_coldFade:1},O2(s.chamber.x,s.mouthY,s.chamber.z,Jf*1.25,Wl),{ok:!0}}function Q_(){return jT(nn)}function ql(){return L_()}const UC=S_*2,Wh=8.5,y0=14,OC=75,Tc=16;function FC(i){const t=L_(4);if(t&&t.length>=2){const o=t[t.length-2],a=t[t.length-1],c=a.x-o.x,l=a.z-o.z,u=Math.hypot(c,l);if(u>.001)return[c/u,l/u]}const e=i.chamber,n=e.x-i.mouth.x,s=e.z-i.mouth.z,r=Math.hypot(n,s)||1;return[n/r,s/r]}function zC(i){const[t,e]=FC(i),n=i.chamber;return KT("face-hall",n.x+t*n.r*.92,n.z+e*n.r*.92,-t,-e,OC,{kind:"room",id:"hall",x:n.x+t*(n.r+y0+Wh),z:n.z+e*(n.r+y0+Wh),r:Wh,from:{x:n.x,z:n.z}})}function BC(i,t,e){const n=new De,s=Math.max(4,Math.round(t.len/3)),r=-t.hz,o=t.hx,a=[];for(let c=0;c<=s;c++){const l=c/s*t.len,u=t.ax+t.hx*l,d=t.az+t.hz*l,h=[];for(let f=0;f<Tc;f++){const p=2*Math.PI*f/Tc,x=Fr(p,l*.2,e),m=t.hw*(.92+(x-.84)*.5),g=i.floorY+t.roof*.55+Math.sin(p)*t.roof*.55;h.push(n.addVertex(u+r*Math.cos(p)*m,Math.max(g,Nu(i,u,d)),d+o*Math.cos(p)*m,In(et((x-.84)/.34+.45,0,1),.24).toArray()))}a.push(h)}for(let c=0;c<s;c++)for(let l=0;l<Tc;l++){const u=(l+1)%Tc;n.addQuad(a[c][l],a[c][u],a[c+1][u],a[c+1][l])}return n.toBufferGeometry()}function kC(i,t,e,n){const s=new De,r=26,o=4,a=3,c=4,l=m=>m<=a?t.r:t.r*Math.cos((m-a)/c*(Math.PI/2)),u=m=>m<=a?i.floorY+t.wall*m/a:i.floorY+t.wall+(t.roof-t.wall)*Math.sin((m-a)/c*(Math.PI/2)),d=[];for(let m=0;m<=o;m++){const g=m/o*t.r,y=[];for(let _=0;_<r;_++){const b=2*Math.PI*_/r,S=t.x+Math.cos(b)*g,w=t.z+Math.sin(b)*g;y.push(s.addVertex(S,Nu(i,S,w),w,In(et((Fr(b,m,e)-.84)/.34+.45,0,1),.26).toArray()))}d.push(y)}for(let m=0;m<o;m++)for(let g=0;g<r;g++){const y=(g+1)%r;s.addQuad(d[m][g],d[m][y],d[m+1][y],d[m+1][g])}const h=[];for(let m=0;m<=a+c;m++){const g=l(m),y=u(m),_=[];for(let b=0;b<r;b++){const S=2*Math.PI*b/r,w=Fr(S,m,e),A=g*(m<=a?.94+(w-.84)*.4:1),E=t.x+Math.cos(S)*A,C=t.z+Math.sin(S)*A;_.push({i:s.addVertex(E,y,C,In(et((w-.84)/.34+.45,0,1),.2).toArray()),x:E,z:C,y})}h.push(_)}const f=(m,g)=>m.y-i.floorY<=t.wall+.1&&n((m.x+g.x)*.5,(m.z+g.z)*.5);for(let m=0;m<h.length-1;m++)for(let g=0;g<r;g++){const y=(g+1)%r,_=h[m][g],b=h[m][y];f(_,b)||f(h[m+1][g],h[m+1][y])||s.addQuad(_.i,b.i,h[m+1][y].i,h[m+1][g].i)}const p=s.addVertex(t.x,i.floorY+t.roof,t.z,In(.5,.24).toArray()),x=h[h.length-1];for(let m=0;m<r;m++)s.addTri(p,x[(m+1)%r].i,x[m].i);return s.toBufferGeometry()}function v0(){return wa(jr({map:Bf(),strength:.62,side:ge}))}function HC(i){const t=T_();if(!t||!_e)return null;const e=(t.seed+613)%9973,n=i.x-i.from.x,s=i.z-i.from.z,r=Math.hypot(n,s)||1,o=n/r,a=s/r,c=XT(i.id,i.x,i.z,i.r),l=YT(`link-${i.id}`,{x:i.from.x+o*(_e.chamber.r*.8),z:i.from.z+a*(_e.chamber.r*.8)},{x:i.x-o*(i.r*.8),z:i.z-a*(i.r*.8)},UC,ci),u=new Vt(BC(t,l,e),v0());u.name=`nest-${l.id}`,u.receiveShadow=!0,_e.group.add(u);const d=(f,p)=>{const x=(f-l.ax)*l.hx+(p-l.az)*l.hz;return x<-l.hw||x>l.len+l.hw?!1:Math.abs(-(f-l.ax)*l.hz+(p-l.az)*l.hx)<=l.hw},h=new Vt(kC(t,c,e,d),v0());return h.name=`nest-room-${c.id}`,h.receiveShadow=!0,_e.group.add(h),yn([l.ax+l.hx*l.len*.45,t.floorY+4.5,l.az+l.hz*l.len*.45],CC),yn([c.x,t.floorY+5.5,c.z],RC),yn([c.x+o*c.r*.55,t.floorY+4,c.z+a*c.r*.55],PC),K_(),c}function aa(){return JT()}function ep(){const i=T_();return i?i.rooms.map(t=>({id:t.id,x:t.x,z:t.z,r:t.r})):[]}function Fu(i,t){const e=QT(i,t);if(!e)return null;if(e.opened&&e.opened.kind==="room"){const n=HC(e.opened);return{...e,opened:n?{kind:"room",id:n.id,x:n.x,z:n.z,r:n.r}:null}}return{...e,opened:null}}function j_(i){if(!_e)return 0;const t=Math.round(et(i,0,Ld));_e.brood=t,_e._furnishing.piles.forEach((n,s)=>{const r=s<t;n.mesh.visible=r,n.on=r,n.lamp.c[0]=r?Vh[0]:0,n.lamp.c[1]=r?Vh[1]:0,n.lamp.c[2]=r?Vh[2]:0});const e=_e._furnishing.bead;return e.on=t>=4,e.mesh.visible=e.on,e.lamp.c[0]=e.on?Gh[0]:0,e.lamp.c[1]=e.on?Gh[1]:0,e.lamp.c[2]=e.on?Gh[2]:0,t}function ty(i=!0){_e&&(_e.sealed=i)}function VC(i){if(!_e)return;const t=_e.sealed?0:1,e=Math.min(1,i/3);_e._coldFade+=(t-_e._coldFade)*e*3;const n=et(_e._coldFade,0,1);_e._coldLight.c[0]=$c[0]*n,_e._coldLight.c[1]=$c[1]*n,_e._coldLight.c[2]=$c[2]*n}function ey(){const i=new Re;i.name="world";const t=FT();for(const h of t.doorLights)yn(h.p,h.c);const e=K2(t.rooms),n=tC(),s=f2();i.add(s);const r=g2();i.add(r.mesh);const o=_2();i.add(o.group);const a=U_({});i.add(a.mesh);const c=D2();i.add(c.group);const l=bC();i.add(l.group);const u=new Re;u.name="dug",i.add(u),IC(u,{lawn:s,grass:a});function d(h,f,p){a.update(h,f,p),VC(h),n.update(f),r.update(f),p&&(c.update(p),o.update(p,Aa()),F2(p.position))}return{group:i,update:d,grassFootprints:a.footprints,grass:a,resources:l.nodes,rooms:t.rooms,doorLights:t.doorLights,mushrooms:e.mushrooms,rocks:e.rocks}}const Ea=Object.freeze(Object.defineProperty({__proto__:null,LAWN_BOUNDS:Ue,MUSHROOMS:Kn,QUEEN:de,RESOURCE_NODES:Jn,RIG_FOUNDED:$f,RIG_PROLOGUE:qf,RIVER:Fn,ROCKS:Pi,START:wd,TERRAIN_BOUNDS:Ti,TREE:te,TUNNEL_BACK:Ce,TUNNEL_MOUTH:Xe,TUNNEL_R:Or,WATER_Y:es,applyNestShading:wa,canFoundAt:tp,containSurface:Cd,containUnderground:Du,createWorld:ey,daylightAt:z2,descentPath:ql,digFaces:aa,distanceToWater:mi,dugRooms:ep,foundNest:J_,foundedMix:Aa,getFoundedNest:Z_,getRoomBranches:Vf,getUndergroundRadius:PT,getWallHoleAt:Hf,groundNormal:Sa,groundSlope:rr,groundY:Zt,harvestNode:Kf,mushroomCollideR:H_,nestFootprint:Q_,nestOrigin:oa,nodesNear:MC,payDigFace:Fu,pitFactorAt:Id,populateNest:j_,profileR:ln,riverEdgeAt:sr,sampleTerrain:r2,sealNest:ty,setFoundedMix:V_,shadeAt:G_,soilAt:Xf,sunDir:Ou,treeTrunkRadius:Ks,treeWalkBranch:si,waterDepthAt:zi},Symbol.toStringTag,{value:"Module"})),GC=[{hip:[.85,1.5,1.5],rest:[3.6,0,3.4],phase:0},{hip:[-.85,1.5,1.5],rest:[-3.6,0,3.4],phase:.5},{hip:[.95,1.4,.3],rest:[4.3,0,.2],phase:.5},{hip:[-.95,1.4,.3],rest:[-4.3,0,.2],phase:0},{hip:[.85,1.4,-1],rest:[4,0,-3.2],phase:0},{hip:[-.85,1.4,-1],rest:[-4,0,-3.2],phase:.5}],WC=[{hip:[.92,1.5,1.7],rest:[4.1,0,3.9],phase:0},{hip:[-.92,1.5,1.7],rest:[-4.1,0,3.9],phase:.5},{hip:[1.02,1.4,.4],rest:[4.9,0,.3],phase:.5},{hip:[-1.02,1.4,.4],rest:[-4.9,0,.3],phase:0},{hip:[.92,1.4,-1.15],rest:[4.5,0,-3.5],phase:0},{hip:[-.92,1.4,-1.15],rest:[-4.5,0,-3.5],phase:.5}],ny={petiole:{at:[0,1.5,-1.25],r:[.42,.42,.42]},thorax:{at:[0,1.6,.35],r:[.95,.92,1.55]},head:{at:[0,1.62,2.55],r:[1.12,.98,1.05]},eye:{at:[.72,2.05,2.95],r:[.3,.26,.3]},gaster:[{at:[0,1.55,-3.1],r:[1.35,1.3,1.95]}],mandible:{root:[.52,1.42,3.35],tip:[.3,1.22,4.55],gape:.22,r:.15},antenna:{root:[.55,2.05,3.05],elbow:[1.35,3.15,4],tip:[1.75,3.05,5.9],r1:.13,r2:.1},legR:{thigh:.19,shin:.13,knee:.24,foot:.17}},XC={petiole:{at:[0,1.5,-1.2],r:[.5,.5,.62]},thorax:{at:[0,1.62,.5],r:[1.06,1.02,1.75]},head:{at:[0,1.66,2.7],r:[1.18,1.02,1.12]},eye:{at:[.76,2.12,3.1],r:[.3,.26,.3]},gaster:[{at:[0,1.55,-3.2],r:[1.6,1.54,2.1]},{at:[0,1.5,-5.4],r:[1.34,1.3,1.9]}],mandible:{root:[.55,1.45,3.5],tip:[.34,1.2,4.8],gape:.2,r:.17},antenna:{root:[.58,2.1,3.2],elbow:[1.4,3.3,4.2],tip:[1.85,3.2,6.1],r1:.14,r2:.11},legR:{thigh:.2,shin:.14,knee:.3,foot:.19}},Xr={id:"worker",label:"ouvrière",scale:1,legs:GC,body:ny,breathes:!1,colors:{chitinA:13208124,chitinB:8738856,limb:9067304,mandible:13209663,eye:1051654},maxSpeed:15,sprint:1.75,turnRate:9,legLen:[2.7,2.9],stride:7,climbSpeed:20,bodyR:1.5,cam:{dist:36,min:10,max:85}},iy={id:"queen",label:"reine fondatrice",scale:2.2,legs:WC,body:XC,breathes:!0,colors:{chitinA:14525012,chitinB:9394725,limb:9724202,mandible:15253624,eye:1051654},maxSpeed:12.5,sprint:1.5,turnRate:4.2,legLen:[2.7,2.9],stride:7,climbSpeed:12,bodyR:1.5,cam:{dist:58,min:16,max:140}},YC={...ny,mandible:{root:[.56,1.4,3.35],tip:[.3,1.14,5.05],gape:.3,r:.23}},sy={...Xr,id:"digger",label:"fouisseuse",body:YC,colors:{chitinA:11040314,chitinB:8410150,limb:8016423,mandible:14197326,eye:1051654},maxSpeed:12,turnRate:7},Nn=iy;function qC(i){return[i.legLen[0]*i.scale,i.legLen[1]*i.scale]}function ca(i){return i.stride*i.scale}function rs(i){return i.bodyR*i.scale}const $C={worker:Xr,queen:iy,digger:sy};function ZC(i){return $C[i]||Xr}const ry=new q("#393741"),KC=new q("#241D22"),zu=new fi({color:ry.clone(),side:Ke,depthWrite:!1});zu.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <begin_vertex>",`
    #include <begin_vertex>
    float oDist = -(modelViewMatrix * vec4(position, 1.0)).z;
    transformed += normal * clamp(0.0017 * oDist, 0.06, 0.16);
  `)};zu.customProgramCacheKey=()=>"inverted-hull";function JC(i){zu.color.copy(KC).lerp(ry,i)}function QC(i){const t=new Re;return t.name="outline-hull",i.traverse(e=>{if(!e.isMesh||!e.geometry)return;const n=new Vt(e.geometry,zu);n.castShadow=!1,n.receiveShadow=!1,n.frustumCulled=!1,t.add(n)}),t.renderOrder=-1,t}const ke={...Ea},jC=.82,tR=.55,eR=2.2;let Xh=null,Yh=null;function oy(i,t){const e=i.chamber;let n=i.mouth.x-e.x,s=i.mouth.z-e.z;const r=Math.hypot(n,s);return r<.01?(n=0,s=1):(n/=r,s/=r),{mouth:{x:i.mouth.x,y:i.mouth.y,z:i.mouth.z,r:i.mouth.r},chamber:{x:e.x,y:i.floorY,z:e.z,r:e.r,ceilY:e.ceilY},out:[n,s],gallery:t?{start:{x:t.start.x,z:t.start.z},end:{x:t.end.x,y:t.end.y,z:t.end.z}}:null}}function nR(i,t){const e=oy(i,t),n=e.chamber,s=n.r*jC,r=Math.max(2,i.mouth.y-n.y),o=s+r,a=Math.max(i.mouth.r,5),c=e.gallery&&(()=>{const p=e.gallery.end.x-e.gallery.start.x,x=e.gallery.end.z-e.gallery.start.z,m=Math.hypot(p,x)*tR;return m>1?{x:e.gallery.start.x,z:e.gallery.start.z,dx:p/Math.hypot(p,x),dz:x/Math.hypot(p,x),len:m}:null})();function l(p,x){const m=p-n.x,g=x-n.z,y=m*e.out[0]+g*e.out[1],_=Math.abs(-m*e.out[1]+g*e.out[0]);return{s:y,lat:_}}function u(p,x){if(!c)return null;const m=p-c.x,g=x-c.z,y=m*c.dx+g*c.dz;return y<0||y>c.len?null:Math.abs(-m*c.dz+g*c.dx)<=eR?y:null}function d(p,x){if(Math.hypot(p-n.x,x-n.z)<=s)return!0;const m=l(p,x);return m.s>0&&m.s<=o&&m.lat<=a?!0:u(p,x)!==null}function h(p,x){let m=null;Math.hypot(p-n.x,x-n.z)<=s&&(m=n.y),u(p,x)!==null&&(m=Math.min(m===null?1/0:m,n.y+.15));const g=l(p,x);if(g.s>s&&g.s<=o&&g.lat<=a){const y=et((g.s-s)/Math.max(.001,o-s),0,1),_=Ft(n.y,ke.groundY(p,x),y*y*(3-2*y));m=m===null?_:Math.min(m,_)}return m===null?ke.groundY(p,x):m}function f(p,x){return Math.hypot(p-n.x,x-n.z)<=s?Math.max(4,n.ceilY-n.y):8}return{contains:d,floorY:h,headroom:f,approx:!0,landmarks:e}}function iR(){const i=typeof ke.getFoundedNest=="function"?ke.getFoundedNest():null;if(!i||!i.chamber)return null;const t=typeof ke.getGallery=="function"?ke.getGallery():null,e=typeof ke.nestFootprint=="function"?ke.nestFootprint():null;return e&&typeof e.contains=="function"?{contains:(n,s)=>e.contains(n,s),floorY:(n,s)=>e.floorY(n,s),headroom:(n,s)=>typeof e.headroom=="function"?e.headroom(n,s):8,approx:!1,landmarks:oy(i,t)}:nR(i,t)}function Bi(){const i=typeof ke.getFoundedNest=="function"?ke.getFoundedNest():null;if(!i)return Xh=null,Yh=null,null;const t=typeof ke.getGallery=="function"?ke.getGallery():null,e=`${i.x},${i.z},${t?1:0},${typeof ke.nestFootprint=="function"?1:0}`;return e!==Xh&&(Xh=e,Yh=iR()),Yh}function np(i,t){const e=Bi();return!!e&&e.contains(i,t)}function sR(i,t,e,n=1.2){let s=0,r=0,o=0;for(let c=0;c<16;c++){const l=c/16*Math.PI*2,u=Math.cos(l),d=Math.sin(l);i.contains(t+u*n,e+d*n)||(s+=u,r+=d,o++)}if(!o)return null;const a=Math.hypot(s,r);return a<1e-4?null:[s/a,r/a]}function ay(i,t,e,n,s,r=10){let o=t,a=e,c=n,l=s;for(let u=0;u<r;u++){const d=(o+c)*.5,h=(a+l)*.5;i.contains(d,h)?(o=d,a=h):(c=d,l=h)}return[o,a]}function rR(){const i=Bi();if(!i)return null;const t=typeof ke.descentPath=="function"?ke.descentPath():null;if(t&&t.length)return{x:t[0].x,z:t[0].z,r:0,fromPath:!0};const e=i.landmarks.chamber;let n=null;for(let s=0;s<72;s++){const r=s/72*Math.PI*2;for(let o=4;o<=80;o+=1.5){const a=e.x+Math.cos(r)*o,c=e.z+Math.sin(r)*o;i.contains(a,c)&&(ke.groundY(a,c)-i.floorY(a,c)>1.5||(!n||o>n.r)&&(n={x:a,z:c,r:o}))}}return n||{x:i.landmarks.mouth.x,z:i.landmarks.mouth.z,r:0,guessed:!0}}function oR(i){const t=Bi();if(!t)return null;const e=t.landmarks,n=rR(),s=typeof ke.dugRooms=="function"?ke.dugRooms():[];return{approx:t.approx,mouth:e.mouth,chamber:e.chamber,entry:n,rooms:s,latestRoom:s.length>1?s[s.length-1]:null,inside:i?t.contains(i.x,i.z):!1,floorY:i?t.floorY(i.x,i.z):null,headroom:i?t.headroom(i.x,i.z):null,roofed:i?t.contains(i.x,i.z)&&Number.isFinite(t.headroom(i.x,i.z))&&t.headroom(i.x,i.z)>0:!1}}const on=U_({}).footprints,Bu=42,aR=4.5,cR=20,lR=.93;function uR(i){return aR*(i.scale||1)}function Cc(i){const t=i.profile||Nn;return(t.climbSpeed!==void 0?t.climbSpeed:cR)*(i.scale||1)}const hR=6,cy=.05,dR=(()=>{const i=si.point(0),t=si.tipPos;return Math.hypot(t[0]-i[0],t[1]-i[1],t[2]-i[2])})();function fR(i){if(np(i.x,i.z))return null;let t=null,e=uR(i);for(let s=0;s<on.length;s++){const r=on[s];if(r.h<Bu)continue;const o=Math.hypot(r.x-i.x,r.z-i.z);o<e&&(e=o,t={kind:"grass",i:s})}const n=Math.hypot(te.x-i.x,te.z-i.z)-te.w;return n<hR*(i.scale||1)&&n<e&&(t={kind:"tree"}),t}function pR(i,t){i.climb=t.kind==="tree"?{kind:"tree",seg:"trunk",t:.02}:{kind:"grass",i:t.i,t:.03},i.speed=0}function Nd(i){let t;if(i.climb.kind==="tree"){const e=Xl(te,i.climb.t);t=me(ss(te,i.climb.t),Ht(e.normal,Ks(i.climb.t)))}else t=ss(on[i.climb.i],i.climb.t);i.climb=null,i.x=t[0],i.z=t[2],i.y=Zt(t[0],t[2]),i.speed=0}function mR(i,t){if(i.climb){if(i.climb.kind==="grass"){Nd(i);return}i.climb.seg==="trunk"&&i.climb.t<=cy&&Nd(i);return}t&&pR(i,t)}function gR(i,t){return i.climb?i.climb.kind==="tree"?i.climb.seg==="trunk"&&i.climb.t<=cy?"redescendre du tronc":"reculer pour redescendre":"redescendre du brin":t?t.kind==="tree"?"grimper au tronc":"grimper au brin d'herbe":null}function xR(i,t,e){let n=!1,s=null;if(i.climb.kind==="tree")if(i.climb.seg==="trunk"){i.climb.t=et(i.climb.t+t*(Cc(i)/te.h)*e,0,si.splitT);const o=Xl(te,i.climb.t),a=me(ss(te,i.climb.t),Ht(o.normal,Ks(i.climb.t)));i.x=a[0],i.y=a[1],i.z=a[2],i.climb.t<=5e-4&&t<0?n=!0:i.climb.t>=si.splitT&&t>0&&(s="branch")}else{i.climb.u=et(i.climb.u+t*(Cc(i)/dR)*e,0,1);const o=si.basis(i.climb.u),a=me(o.pos,Ht(o.up,si.radius(i.climb.u)));i.x=a[0],i.y=a[1],i.z=a[2],i.climb.u<=5e-4&&t<0&&(s="trunk")}else{const o=on[i.climb.i];i.climb.t=et(i.climb.t+t*(Cc(i)/o.h)*e,0,lR);const a=ss(o,i.climb.t);i.x=a[0],i.y=a[1],i.z=a[2],i.climb.t<=5e-4&&t<0&&(n=!0)}const r=Cc(i);i.speed=ji(i.speed,Math.abs(t)*r,7,e),i.travel+=Math.abs(t)*r*e,n?Nd(i):s==="branch"?(i.climb.seg="branch",i.climb.u=0):s==="trunk"&&(i.climb.seg="trunk",i.climb.t=si.splitT)}function $l(i,t,e){return i.floorY===null||i.floorY===void 0?Zt(t,e):i.floorY}function ly(i,t,e,n=Nn){return{x:i,y:t,z:e,yaw:0,speed:0,travel:0,bob:0,floorY:null,climb:null,legsInit:!1,profile:n,scale:n.scale}}function uy(i=Nn){return i.legs.map(()=>({planted:[0,0,0],from:[0,0,0],to:[0,0,0],swinging:!1,prevP:0}))}function _R(i){if(i.climb){if(i.climb.kind==="tree"){if(i.climb.seg==="trunk"){const c=Xl(te,i.climb.t);return{side:c.width,up:c.normal,fwd:c.tangent}}const a=si.basis(i.climb.u);return{side:a.side,up:a.up,fwd:a.fwd}}const o=Xl(on[i.climb.i],i.climb.t);return{side:o.width,up:o.normal,fwd:o.tangent}}const t=i.floorY===null||i.floorY===void 0?Sa(i.x,i.z):[0,1,0],e=ve([t[0]*.7,1,t[2]*.7]),n=[Math.sin(i.yaw),0,Math.cos(i.yaw)],s=ve(Gn(e,n)),r=Gn(s,e);return{side:s,up:e,fwd:r}}function ip(i){const t=_R(i),e=i.scale||1,n=1.05*e+i.bob,s=i.climb?me([i.x,i.y,i.z],Ht(t.up,n)):[i.x,$l(i,i.x,i.z)+n,i.z];return{side:Ht(t.side,e),up:Ht(t.up,e),fwd:Ht(t.fwd,e),p:s,basis:t,scale:e}}function $n(i,t){const[e,n,s]=t;return[i.side[0]*e+i.up[0]*n+i.fwd[0]*s+i.p[0],i.side[1]*e+i.up[1]*n+i.fwd[1]*s+i.p[1],i.side[2]*e+i.up[2]*n+i.fwd[2]*s+i.p[2]]}function yR(i,t,e,n,s){const r=Ui(t,i),o=Math.hypot(r[0],r[1],r[2])||1,a=et(o,.05,e+n-.02),c=Ht(r,1/o),l=(e*e-n*n+a*a)/(2*a),u=Math.sqrt(Math.max(e*e-l*l,0)),d=s[0]*c[0]+s[1]*c[1]+s[2]*c[2],h=ve(Ui(s,Ht(c,d)));return me(me(i,Ht(c,l)),Ht(h,u))}function Kc(i,t,e){const n=ip(i),s=n.basis,r=i.profile||Nn,o=i.scale||1,a=ca(r),c=i.travel/a,l=!!i.climb;for(let u=0;u<r.legs.length;u++){const d=r.legs[u],h=t[u],f=$n(n,d.rest);l||(f[1]=$l(i,f[0],f[2])),i.legsInit||(h.planted=f.slice(),h.from=f.slice(),h.to=f.slice());let p=(c+d.phase)%1;if(p<0&&(p+=1),p>=.5&&h.prevP<.5){h.swinging=!0,h.from=h.planted.slice();const x=me(f,Ht(s.fwd,a*.38*et(i.speed/(16*o),0,1.4)));l||(x[1]=$l(i,x[0],x[2])),h.to=x}if(p<.5&&h.prevP>=.5&&(h.swinging=!1,h.planted=h.to.slice()),h.prevP=p,h.swinging){const x=(p-.5)*2,m=Math.sin(x*Math.PI)*1.5*o;h.planted=[Ft(h.from[0],h.to[0],x),Ft(h.from[1],h.to[1],x)+m,Ft(h.from[2],h.to[2],x)]}i.speed<.4*o&&!h.swinging&&(h.planted[0]=ji(h.planted[0],f[0],4,e),h.planted[1]=ji(h.planted[1],f[1],4,e),h.planted[2]=ji(h.planted[2],f[2],4,e))}i.legsInit=!0}const Bo=0,vR=1;function M0(i){const t=i.legs.length;return{sphere:i.body.gaster.length+4+t*2,cyl:6+t*2}}function Rc(i){return[-i[0],i[1],i[2]]}function hy(i,t,e,n,s){const r=i.body,o=i.colors,[a,c]=qC(i),l=ip(t),u=l.basis,d=l.scale,h=(b,S,w,A=1)=>s(Bo,$n(l,b),Ht(u.side,S[0]*d*A),Ht(u.up,S[1]*d*A),Ht(u.fwd,S[2]*d*A),w),f=(b,S,w,A)=>{const E=_n(b,S,w);s(vR,E.p,E.x,E.y,E.z,A)},p=i.breathes?1+Math.sin(n*.55)*.04:1;for(let b=0;b<r.gaster.length;b++)h(r.gaster[b].at,r.gaster[b].r,o.chitinB,p);h(r.petiole.at,r.petiole.r,o.chitinB),h(r.thorax.at,r.thorax.r,o.chitinA),h(r.head.at,r.head.r,o.chitinA),h(r.eye.at,r.eye.r,o.eye),h(Rc(r.eye.at),r.eye.r,o.eye);const x=r.mandible,m=x.gape+Math.sin(n*3.1)*.06+Math.max(0,Math.min(t.speed,14))*.012,g=[x.tip[0]+m,x.tip[1],x.tip[2]];f($n(l,x.root),$n(l,g),x.r*d,o.mandible),f($n(l,Rc(x.root)),$n(l,Rc(g)),x.r*d,o.mandible);const y=r.antenna;for(const b of[1,-1]){const S=Math.sin(n*2.4+(b>0?0:1.1))*.42,w=Math.cos(n*1.7+(b>0?.4:1.9))*.3,A=M=>b>0?M:Rc(M),E=$n(l,A(y.root)),C=$n(l,A([y.elbow[0]+S*.25,y.elbow[1]+w*.3,y.elbow[2]])),v=$n(l,A([y.tip[0]+S,y.tip[1]+w,y.tip[2]]));f(E,C,y.r1*d,o.limb),f(C,v,y.r2*d,o.limb)}const _=r.legR;for(let b=0;b<i.legs.length;b++){const S=i.legs[b],w=e[b],A=$n(l,S.hip),E=w.planted,C=S.hip[0]>0?u.side:Ht(u.side,-1),v=ve([u.up[0]+C[0]*.75,u.up[1]+C[1]*.75,u.up[2]+C[2]*.75]),M=yR(A,E,a,c,v);f(A,M,_.thigh*d,o.limb),f(M,E,_.shin*d,o.limb);const L=_.knee*d,N=_.foot*d;s(Bo,M,[L,0,0],[0,L,0],[0,0,L],o.limb),s(Bo,E,[N,0,0],[0,N,0],[0,0,N],o.limb)}}let qh=null,b0=null;function dy(){return qh||(qh=new er(1,12,8),b0=new tr(1,1,1,7).translate(0,.5,0)),{sphere:qh,cyl:b0}}const S0=new Map;function MR(i){let t=S0.get(i);return t||(t=new We({color:i,roughness:.55,metalness:.05}),S0.set(i,t)),t}const $h=new Nt,w0=new P,A0=new P,E0=new P,T0=new P;function fy(i,t,e,n){return w0.set(t[0],t[1],t[2]),A0.set(e[0],e[1],e[2]),E0.set(n[0],n[1],n[2]),$h.makeBasis(w0,A0,E0),T0.set(i[0],i[1],i[2]),$h.setPosition(T0),$h}function bR(i=Nn){const t=dy(),e=new Re;e.name="ant";const n=[];function s(r,o,a){let c=0;hy(i,r,o,a,(l,u,d,h,f,p)=>{let x=n[c];x||(x=new Vt(l===Bo?t.sphere:t.cyl,MR(p)),x.matrixAutoUpdate=!1,x.castShadow=!0,n[c]=x,e.add(x)),x.matrix.copy(fy(u,d,h,f)),c++})}return{group:e,updatePose:s}}function SR(i,t=Nn){const e={},n={camYaw:0,wantPitch:-.19,camDist:t.cam.dist,dragging:!1},s={active:!1,id:-1,ox:0,oy:0,dx:0,dy:0};let r=-1,o=0,a=0,c=!1,l=!1,u=null;function d(C){for(let v=0;v<C.length;v++)if(e[C[v]])return!0;return!1}function h(C){e[C.code]=!0,C.code==="KeyE"&&(c=!0),C.code==="KeyH"&&(l=!0),C.code==="Digit5"&&(u="worker"),C.code==="Digit6"&&(u="digger"),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].indexOf(C.code)>=0&&C.preventDefault()}function f(C){e[C.code]=!1}function p(){for(const C in e)e[C]=!1}function x(C){i.setPointerCapture(C.pointerId),C.pointerType==="touch"&&C.clientX<window.innerWidth*.5?(s.active=!0,s.id=C.pointerId,s.ox=C.clientX,s.oy=C.clientY):(n.dragging=!0,r=C.pointerId,o=C.clientX,a=C.clientY)}function m(C){if(s.active&&C.pointerId===s.id){const v=et(C.clientX-s.ox,-46,46),M=et(C.clientY-s.oy,-46,46);s.dx=v/46,s.dy=M/46;return}n.dragging&&C.pointerId===r&&(n.camYaw-=(C.clientX-o)*.006,n.wantPitch=et(n.wantPitch-(C.clientY-a)*.004,-.85,.55),o=C.clientX,a=C.clientY)}function g(C){s.active&&C.pointerId===s.id&&(s.active=!1,s.dx=0,s.dy=0),C.pointerId===r&&(n.dragging=!1,r=-1)}function y(C){n.camDist=et(n.camDist+C.deltaY*.03*t.scale,t.cam.min,t.cam.max),C.preventDefault()}window.addEventListener("keydown",h),window.addEventListener("keyup",f),window.addEventListener("blur",p),i.addEventListener("pointerdown",x),i.addEventListener("pointermove",m),i.addEventListener("pointerup",g),i.addEventListener("pointercancel",g),i.addEventListener("wheel",y,{passive:!1});function _(){let C=0,v=0;d(["KeyW","KeyZ","ArrowUp"])&&(v+=1),d(["KeyS","ArrowDown"])&&(v-=1),d(["KeyA","KeyQ","ArrowLeft"])&&(C-=1),d(["KeyD","ArrowRight"])&&(C+=1),s.active&&(C+=s.dx,v-=s.dy);const M=Math.min(Math.hypot(C,v),1),L=!!(e.ShiftLeft||e.ShiftRight);return{ix:C,iy:v,mag:M,sprint:L}}function b(){const C=c;return c=!1,C}function S(){const C=l;return l=!1,C}function w(){const C=u;return u=null,C}function A(){return!!e.KeyE}function E(){window.removeEventListener("keydown",h),window.removeEventListener("keyup",f),window.removeEventListener("blur",p),i.removeEventListener("pointerdown",x),i.removeEventListener("pointermove",m),i.removeEventListener("pointerup",g),i.removeEventListener("pointercancel",g),i.removeEventListener("wheel",y)}return{state:n,readMoveIntent:_,consumeInteract:b,consumeHelp:S,consumeCaste:w,isInteractHeld:A,dispose:E}}let Zh=null;function py(){return Zh||(Zh=Vf()),Zh}function my(i,t){const e=py();for(const n in e){const s=e[n],r=i-s.origin[0],o=t-s.origin[2],a=r*s.dir[0]+o*s.dir[2];if(a<=-.5||a>=s.uMax+1)continue;const c=r*s.side[0]+o*s.side[2],l=s.profR(et(a,0,s.uMax));if(!(Math.abs(c)>=l*.82+2))return s}return null}function gy(i,t,e){return(t-i.origin[0])*i.dir[0]+(e-i.origin[2])*i.dir[2]}function wR(i){return 2*i.uEnd-i.uMax}function AR(i,t){const e=my(i,t);return e?e.profR(et(gy(e,i,t),0,e.uMax)):ln(t)}function ER(i,t){let e=t,n=t;const s=py();for(const r in s){const o=s[r],a=et(1-Math.abs(i-o.origin[2])/o.doorFalloff,0,1);if(a<=0)continue;const c=Ft(t,Math.abs(o.origin[0])+1.5,a);o.dir[0]>0?c>e&&(e=c):c>n&&(n=c)}return{limPos:e,limNeg:n}}const xy=.14;function _y(i){const t=i(0),e=i(Math.PI),n=i(Math.PI*.5);return{aPos:Math.max(Math.abs(t[0]),1.5),aNeg:Math.max(Math.abs(e[0]),1.5),cy:t[1],b:Math.max(n[1]-t[1],.8)}}function TR(i){return _y(t=>{const e=Us(t,i,xy);return[e[0],e[1]]})}function CR(i,t){return _y(e=>{const n=i.pointAt(e,t,xy);return[(n[0]-i.origin[0])*i.side[0]+(n[2]-i.origin[2])*i.side[2],n[1]]})}function C0(i,t,e){const n=t>=0?i.aPos:i.aNeg,s=Math.min(Math.abs(t)/n,1),r=i.b*Math.max(Math.sqrt(Math.max(0,1-s*s)),.3),o=Math.max(i.cy-r,e+1.6);return{yMin:o,yMax:Math.max(i.cy+r,o+.6)}}function RR(i,t){if(t.br){const u=t.br,d=i[0]-u.origin[0],h=i[2]-u.origin[2],f=d*u.dir[0]+h*u.dir[2],p=d*u.side[0]+h*u.side[2],x=t.uAnt>t.corridorLen?t.corridorLen-1:-.3,m=et(f,x,u.uMax-.3),g=CR(u,et(m,0,u.uMax)),y=et(p,-g.aNeg,g.aPos);i[0]=u.origin[0]+u.dir[0]*m+u.side[0]*y,i[2]=u.origin[2]+u.dir[2]*m+u.side[2]*y;const _=C0(g,y,Zt(i[0],i[2]));return i[1]=et(i[1],_.yMin,_.yMax),Math.hypot(m-f,y-p)}const e=i[2],n=i[0],s=et(e,Ce+5,Xe+3);if(s>-14){const u=ln(s)*.82*(1+Math.pow((s+14)/17,2)*.9),d=et(n,-u,u);return i[0]=d,i[2]=s,i[1]=Math.max(i[1],Zt(d,s)+2.2),Math.hypot(d-n,s-e)}const r=TR(s),{limPos:o,limNeg:a}=ER(s,Math.max(ln(s)*.82-1.6,3)),c=et(n,-Math.max(a,r.aNeg),Math.max(o,r.aPos));i[0]=c,i[2]=s;const l=C0(r,c,Zt(c,s));return i[1]=et(i[1],l.yMin,l.yMax),Math.hypot(c-n,s-e)}const Pc=10.5;function PR(i){const t=Zt(de[0],de[2]);if(i[1]>t+8.5)return;const e=i[0]-de[0],n=i[2]-de[2],s=Math.hypot(e,n);if(!(s>=Pc)){if(s<.001){i[0]+=Pc;return}i[0]=de[0]+e/s*Pc,i[2]=de[2]+n/s*Pc}}function yy(i){const t=my(i.x,i.z);if(!t)return{br:null};const e=gy(t,i.x,i.z);return{br:t,uAnt:e,corridorLen:wR(t)}}const R0=1.8,IR=1;function LR(i,t,e){let n=0;if(!t.contains(i[0],i[2])){const[o,a]=ay(t,e.x,e.z,i[0],i[2]);n=Math.hypot(o-i[0],a-i[2]),i[0]=o,i[2]=a}const s=t.floorY(i[0],i[2]),r=t.headroom(i[0],i[2]);return i[1]=et(i[1],s+R0,s+Math.max(R0+.6,r-IR)),n}function sp(i,t,e){const n=Bi();return n&&n.contains(t.x,t.z)?LR(i,n,t):t.z<Xe-2?(PR(i),RR(i,e||yy(t))):(i[1]=Math.max(i[1],Zt(i[0],i[2])+2.2),0)}function vy(i,t,e,n,s=1){return[i[0]-Math.sin(t)*Math.cos(e)*n,i[1]-Math.sin(e)*n+3.4*s,i[2]-Math.cos(t)*Math.cos(e)*n]}const P0=8,DR=6,My=.9,NR=[0,.25,.5,.8],I0=-1.25;function UR(i,t,e,n,s,r){let o=n,a=1/0;const c=Math.min(DR*(s.scale||1),n);for(let l=0;l<=P0;l++){const u=Ft(n,c,l/P0),d=sp(vy(i,t,e,u,s.scale||1),s,r);if(d<=My)return{d:u,err:d};d<a&&(a=d,o=u)}return{d:o,err:a}}function OR(i,t,e,n,s,r){let o=null;for(const a of NR){const c=Math.max(e-a,I0),l=UR(i,t,c,n,s,r);if(l.err<=My)return{pitch:c,d:l.d};if((!o||l.err<o.err)&&(o={pitch:c,d:l.d,err:l.err}),c<=I0)break}return o}function FR(i,t,e,n){const s=i.scale||1,r=i.climb?[i.x,i.y+2*s,i.z]:[i.x,$l(i,i.x,i.z)+2.6*s,i.z],o=Bi(),a=!!o&&o.contains(i.x,i.z),c=a?o.headroom(i.x,i.z):0,l=!a&&i.z<Xe-2,u=a||l,d=l?yy(i):null,h=l?AR(i.x,i.z):a?c:Or,f=u?Math.min(n,Math.max(13.5*s,h*1.5)):n,p=u?OR(r,t,e,f,i,d):{pitch:e,d:f},x=vy(r,t,p.pitch,p.d,s);sp(x,i,d);const m=[r[0]+Math.sin(i.yaw)*3*s,r[1]+.4*s,r[2]+Math.cos(i.yaw)*3*s];return{eye:x,aim:m}}function zR(i){const t={eye:null,aim:null};function e(n,s,r,o,a,c){const l=c||FR(n,s,r,o);(!t.eye||c&&c.cut)&&(t.eye=l.eye.slice(),t.aim=l.aim.slice());const u=c?5:6.5;for(let d=0;d<3;d++)t.eye[d]=ji(t.eye[d],l.eye[d],u,a),t.aim[d]=ji(t.aim[d],l.aim[d],u*1.4,a);c||sp(t.eye,n),i.position.set(t.eye[0],t.eye[1],t.eye[2]),i.lookAt(new P(t.aim[0],t.aim[1],t.aim[2]))}return t.update=e,t}function ko(i,t,e,n){const s=(t-i+Math.PI*3)%(Math.PI*2)-Math.PI;return i+s*(1-Math.exp(-e*n))}const Kh={GRASS:"grass",ROCKS:"rocks",MUSHROOMS:"mushrooms"};let Yr=null,Ud="linear";function by(i,t="external"){const e={...i||{}};return typeof e.queryDisc!="function"?(Yr=null,Ud="linear",!1):(Yr=e,Ud=t,!0)}function Sy(){if(Yr)return;const i=typeof globalThis<"u"?globalThis:null;if(!i)return;const t=i.__spatialIndex||i.__spatial||null;t&&by(t,"global")}function Jh(i,t,e,n,s,r){if(Sy(),Yr)return Yr.queryDisc(i,t,e,n,r),!0;for(let o=0;o<s.length;o++)r(s[o],o);return!1}function BR(){return Sy(),{indexed:!!Yr,source:Ud}}function kR(i){return i.w*.75}const wy=.01,L0=ss(te,wy),HR=Ks(wy)*.88,Ay=rs(Nn)*2+.6,VR=Ay+.2,GR=14;function WR(i,t,e,n){for(let s=.3;s<=GR;s+=.3){const r=i+e*s,o=t+n*s,a=Du(r,o);if(Math.hypot(a[0]-r,a[1]-o)>.05)return s}return 1/0}const Ey=[];for(let i=0;i<8;i++)Ey.push([Math.cos(i*Math.PI/4),Math.sin(i*Math.PI/4)]);function XR(i,t,e){let n=0,s=1/0;const r=Ey.map(([c,l],u)=>{const d=WR(i,t,c,l);return d<s&&(s=d,n=u),d});if(s===1/0||s-e>=VR)return e;const o=Math.max(e,s+.3);return r[(n+4)%8]-o<Ay?0:o}const YR=1;let Qh=null;function qR(){return Qh||(Qh=Object.values(Vf())),Qh}function $R(i,t){for(const e of qR()){const n=i-e.origin[0],s=t-e.origin[2],r=n*e.dir[0]+s*e.dir[2];if(r<=-.5||r>=e.uMax+1)continue;const o=n*e.side[0]+s*e.side[2],a=Math.max(e.profR(et(r,0,e.uMax))*.82-1.2,2.2);if(!(Math.abs(o)>=a+3))return a}return Math.max(ln(t)*.82-1.6,3)}function ZR(i,t,e,n){return 2*$R(i,t)>=2*n+2*e+YR}let Ic=null,D0=null;function Ty(i=rs(Nn)){return(!Ic||Ic.length!==Kn.length||D0!==i)&&(D0=i,Ic=Kn.map(t=>{const e=XR(t.x,t.z,H_(t));return e>0&&ZR(t.x,t.z,e,i)?e:0})),Ic}let xo=null,N0=-1;function KR(){if(!xo||N0!==on.length){N0=on.length,xo=[];for(let i=0;i<on.length;i++){const t=on[i];t.h>=Bu&&xo.push({x:t.x,z:t.z,r:kR(t)})}xo.push({x:L0[0],z:L0[2],r:HR})}return xo}let Lc=null,U0=-1;function JR(){const i=Ty();if(!Lc||U0!==Kn.length){U0=Kn.length,Lc=[];for(let t=0;t<Kn.length;t++)i[t]>0&&Lc.push({x:Kn[t].x,z:Kn[t].z,r:i[t]})}return Lc}let jh=null,O0=-1;function QR(){return(!jh||O0!==Pi.length)&&(O0=Pi.length,jh=Pi.map(i=>({x:i.x,z:i.z,r:i.r}))),jh}function td(i){let t=0;for(let e=0;e<i.length;e++)i[e].r>t&&(t=i[e].r);return t}function Cy(i,t,e,n=0){const s=r=>e(r.x,r.z,r.r);if(!np(i,t)){if(t<Xe+6){const r=JR();Jh(Kh.MUSHROOMS,i,t,n+td(r),r,s)}if(t>Xe-6){const r=QR(),o=KR();Jh(Kh.ROCKS,i,t,n+td(r),r,s),Jh(Kh.GRASS,i,t,n+td(o),o,s)}}}function jR(i,t,e=0){let n=0;return Cy(i,t,(s,r,o)=>{const a=o+e-Math.hypot(i-s,t-r);a>n&&(n=a)},e),n}function F0(i){const t={x:0,z:0,n:0},e=rs(i.profile||Nn);return Cy(i.x,i.z,(n,s,r)=>{const o=r+e,a=i.x-n,c=i.z-s,l=Math.hypot(a,c);if(l>=o||l<.001)return;const u=o-l;t.x+=a/l*u,t.z+=c/l*u,t.n++},e),t}function Od(i,t){const e=F0(i);if(e.n===0)return;const n=e.x/e.n,s=e.z/e.n;i.x+=n,i.z+=s;const r=Math.hypot(n,s);if(r>5e-4){const a=n/r,l=-(s/r),u=a,d=Math.sin(i.yaw)*l+Math.cos(i.yaw)*u,h=t*.6*(d>=0?1:-1);i.x+=l*h,i.z+=u*h}const o=F0(i);o.n>0&&(i.x+=o.x/o.n,i.z+=o.z/o.n)}const tP=11,z0=2,B0=3.3;function eP(i,t,e){const n=Bi();if(!n)return!1;const s=n.contains(t,e),r=n.contains(i.x,i.z);if(!s)return r?Zt(t,e)-n.floorY(i.x,i.z)>z0?(i.x=t,i.z=e,!1):!0:!1;if(r)return!0;const[o,a]=ay(n,t,e,i.x,i.z),c=i.x,l=i.z;if(i.x=o,i.z=a,Number.isFinite(n.headroom(o,a)))return!0;let u=c-t,d=l-e;const h=Math.hypot(u,d);if(h<1e-6)return!0;u/=h,d/=h;const f=o+u*B0,p=a+d*B0;return n.contains(f,p)||Math.abs(Zt(f,p)-n.floorY(o,a))>z0?!0:(i.x=c,i.z=l,!1)}function nP(i,t,e,n,s,r){const o=sR(t,i.x,i.z);if(!o)return;const a=s-e,c=r-n,l=a*o[0]+c*o[1];if(l<=0)return;const u=a-o[0]*l,d=c-o[1]*l;if(Math.hypot(u,d)<1e-4)return;const h=i.x+u,f=i.z+d;t.contains(h,f)&&(i.x=h,i.z=f)}function iP(i,t,e){const n=ve([e[0]-t[0],0,e[2]-t[2]]),s=Gn(n,[0,1,0]);return{wishX:n[0]*i.iy+s[0]*i.ix,wishZ:n[2]*i.iy+s[2]*i.ix}}function sP(i,t,e,n){const s=i.profile||Nn,r=i.scale||1,o=rs(s),a=s.maxSpeed*(e.sprint?s.sprint:1);e.mag>.02?(i.yaw=ko(i.yaw,Math.atan2(t.wishX,t.wishZ),s.turnRate,n),i.speed=ji(i.speed,a*e.mag,7,n)):i.speed=ji(i.speed,0,9,n);const c=i.speed*n,l=i.x,u=i.z;if(i.x+=Math.sin(i.yaw)*c,i.z+=Math.cos(i.yaw)*c,i.travel+=c,Od(i,c),eP(i,l,u)){const d=Bi();(i.x!==l+Math.sin(i.yaw)*c||i.z!==u+Math.cos(i.yaw)*c)&&nP(i,d,l,u,l+Math.sin(i.yaw)*c,u+Math.cos(i.yaw)*c),i.floorY=d.approx?d.floorY(i.x,i.z):null,i.y=d.floorY(i.x,i.z),i.bob=Math.sin(i.travel*(Math.PI*2/ca(s))*2)*.13*r*et(i.speed/(8*r),0,1);return}if(i.floorY=null,i.z<Xe){const[d,h]=Du(i.x,i.z);i.x=d,i.z=h;const f=tP+o,p=i.x-de[0],x=i.z-de[2],m=Math.hypot(p,x);if(m<f&&m>.001){const g=p/m,y=x/m;i.x=de[0]+g*f,i.z=de[2]+y*f;const _=-y,b=g,S=Math.sin(i.yaw)*_+Math.cos(i.yaw)*b,w=c*.75*(S>=0?1:-1);i.x+=_*w,i.z+=b*w}}else{const d=et(i.z,Ue.z0,Ue.z1);i.x=Math.max(Cd(i.x,d)[0],Cd(i.x-o,d)[0]+o),i.x=Math.min(i.x,Ue.x1-o*2),i.z=Math.min(i.z,Ue.z1-o*2)}i.y=Zt(i.x,i.z),i.bob=Math.sin(i.travel*(Math.PI*2/ca(s))*2)*.13*r*et(i.speed/(8*r),0,1)}const bn={...Ea},k0={terre:{label:"terre meuble",diggable:!0,quality:.9},argile:{label:"argile",diggable:!0,quality:.72},litiere:{label:"litière de feuilles",diggable:!0,quality:.66},sable:{label:"sable",diggable:!0,quality:.38},roche:{label:"roche",diggable:!1,quality:0},boue:{label:"boue détrempée",diggable:!1,quality:0}},Fd=32,Dc=9,Jc=18,Nc=55,rP=190,Uc=55,zd=14,oP={soil:.28,slope:.16,water:.2,shade:.18,food:.18},aP={soil:"terre",moss:"litiere",sand:"sable",rock:"roche",water:"boue",terre:"terre",argile:"argile",litiere:"litiere",sable:"sable",roche:"roche",boue:"boue"};function cP(i,t){if(typeof bn.soilAt=="function"){const e=bn.soilAt(i,t),n=aP[typeof e=="string"?e:e&&e.kind],s=k0[n];if(s)return{...s,kind:n,assumed:!1}}return{...k0.terre,kind:"terre",assumed:!0}}function lP(i,t){if(typeof bn.slopeAt=="function")return{deg:bn.slopeAt(i,t),assumed:!1};const e=bn.groundNormal(i,t);return{deg:Math.acos(et(e[1],-1,1))*180/Math.PI,assumed:!1}}function uP(i,t){return typeof bn.waterDistance=="function"?{d:bn.waterDistance(i,t),assumed:!1}:typeof bn.distanceToWater=="function"?{d:bn.distanceToWater(i,t),assumed:!1}:{d:null,assumed:!0}}function hP(i,t){if(typeof bn.shadeAt=="function")return{v:et(bn.shadeAt(i,t),0,1),assumed:!1};const e=bn.TREE,n=e?et(1-Math.hypot(i-e.x,t-e.z)/90,0,1):0;let s=0;for(let r=0;r<on.length;r++){const o=on[r];o.h<Bu||Math.abs(o.x-i)>26||Math.abs(o.z-t)>26||Math.hypot(o.x-i,o.z-t)<26&&s++}return{v:et(n*.8+Math.min(s,8)/8*.5,0,1),assumed:!0}}function dP(i,t){const e=bn.RESOURCE_NODES;if(Array.isArray(e)){let s=0;for(const r of e)Math.hypot(r.x-i,r.z-t)<Uc&&s++;return{n:s,assumed:!1}}let n=0;for(let s=0;s<on.length;s++){const r=on[s];r.h<Bu||Math.abs(r.x-i)>Uc||Math.abs(r.z-t)>Uc||Math.hypot(r.x-i,r.z-t)<Uc&&n++}return{n,assumed:!0}}function fP(i){if(i>=Fd)return 0;const t=i<=Dc?.78+.22*(i/Dc):1-Math.pow((i-Dc)/(Fd-Dc),1.4);return et(t,0,1)}function pP(i){return i===null?.5:i<=Jc?0:i<=Nc?et((i-Jc)/(Nc-Jc),0,1):et(1-(i-Nc)/(rP-Nc),.15,1)}const mP=[{min:78,key:"excellent",label:"excellent"},{min:60,key:"bon",label:"bon"},{min:42,key:"moyen",label:"moyen"},{min:0,key:"ingrat",label:"ingrat"}];function gP(i){return mP.find(t=>i>=t.min)}function xP(i){return i>.66?"à l'ombre":i>.3?"mi-ombre":"plein soleil"}function _P(i){return i>=zd?"ressources abondantes":i>=zd*.4?"quelques ressources":"peu de ressources"}function Qc(i,t){const e=cP(i,t),n=lP(i,t),s=uP(i,t),r=hP(i,t),o=dP(i,t),a=[{key:"soil",label:e.label,value:e.quality,assumed:e.assumed},{key:"slope",label:`pente ${n.deg.toFixed(0)}°`,value:fP(n.deg),assumed:n.assumed},{key:"water",label:s.d===null?"eau inconnue":`eau à ${s.d.toFixed(0)}`,value:pP(s.d),assumed:s.assumed},{key:"shade",label:xP(r.v),value:et(r.v*1.25,0,1),assumed:r.assumed},{key:"food",label:_P(o.n),value:et(o.n/zd,0,1),assumed:o.assumed}];let c=null;t<bn.TUNNEL_MOUTH?c={key:"underground",text:"sous terre — rien à fonder ici"}:e.diggable?s.d!==null&&s.d<=Jc?c={key:"water",text:"trop près de l'eau — la galerie serait inondée"}:n.deg>=Fd&&(c={key:"slope",text:`pente ${n.deg.toFixed(0)}° — le sol s'effondrerait`}):c={key:"soil",text:`${e.label} — impossible de creuser`};let l=0;for(const d of a)l+=d.value*oP[d.key];const u=Math.round(et(l,0,1)*100);return{x:i,z:t,diggable:!c,blocker:c,score:u,grade:gP(u),factors:a,assumed:a.some(d=>d.assumed)}}function yP(i){return i.diggable?`Site : ${i.grade.label} (${i.score}/100)`:`Site : impossible — ${i.blocker.text}`}function H0(i){return i.factors.slice().sort((t,e)=>t.value-e.value).map(t=>t.assumed?`${t.label} ?`:t.label).join(" · ")}const Ry="myrmidia.testPace",vP=.12,MP=.2;let qr=!0;try{const i=localStorage.getItem(Ry);i!==null&&(qr=i==="1")}catch{}function V0(){return qr}function bP(i){qr=!!i;try{localStorage.setItem(Ry,qr?"1":"0")}catch{}}function G0(i){return qr?i*vP:i}function Py(i){return qr?Math.max(1,Math.round(i*MP)):i}const Zl={...Ea},Tr={graine:"graine",brindille:"brindille",miellat:"miellat"},SP={graine:["graine","graines"],brindille:["brindille","brindilles"],miellat:["dose de miellat","doses de miellat"]};function wP(i,t){const e=SP[i]||[i,i];return`${t} ${t>1?e[1]:e[0]}`}const AP=[{x:60,z:110,kind:"graine",amount:3},{x:95,z:105,kind:"brindille",amount:3},{x:55,z:120,kind:"miellat",amount:2},{x:100,z:125,kind:"graine",amount:2},{x:45,z:115,kind:"brindille",amount:2},{x:85,z:135,kind:"miellat",amount:2},{x:110,z:110,kind:"graine",amount:2},{x:65,z:135,kind:"brindille",amount:2},{x:40,z:128,kind:"graine",amount:2}].map((i,t)=>({id:9e3+t,r:10,...i}));let Iy=!1;function Ta(){return Array.isArray(Zl.RESOURCE_NODES)?Zl.RESOURCE_NODES:(Iy=!0,AP)}function Ly(){return Ta(),Iy}function EP(i,t){if(!i)return 0;if(typeof Zl.harvestNode=="function")return Zl.harvestNode(i.id,t)||0;const e=Math.max(0,Math.min(t,i.amount));return i.amount-=e,e}function TP(i,t,e=0){const n=Ta();let s=null,r=1/0;for(let o=0;o<n.length;o++){const a=n[o];if(a.amount<=0)continue;const c=Math.hypot(a.x-i,a.z-t);c<=a.r+e*.6&&c<r&&(r=c,s=a)}return s}const W0=1.8,Dy=16,Bd=5,CP=.5;function RP(){const i={carrying:null,cache:null,progress:0,activeId:null,justTook:null,justDropped:null};function t(){i.progress=0,i.activeId=null}function e(p,x){if(i.activeId!==null){const m=Ta();for(let g=0;g<m.length;g++){const y=m[g];if(y.id===i.activeId){if(y.amount>0&&Math.hypot(y.x-p.x,y.z-p.z)<=y.r+x*.6)return y;break}}}return TP(p.x,p.z,x)}function n(p,x){if(i.carrying)return"full";if(!p)return s(x),"idle";if(i.activeId!==p.id&&(i.activeId=p.id,i.progress=0),i.progress+=x/W0,i.progress<1)return"progress";const m=EP(p,1);return t(),m<=0?"empty":(i.carrying={kind:p.kind},i.justTook={kind:p.kind,qty:m,node:p},"taken")}function s(p){if(i.progress<=0){i.activeId=null;return}i.progress=Math.max(0,i.progress-p*CP/W0),i.progress===0&&(i.activeId=null)}function r(p){return i.cache?Math.hypot(i.cache.x-p.x,i.cache.z-p.z):1/0}function o(p){return i.carrying?!i.cache||r(p)<=Dy:!1}function a(p){if(!o(p))return!1;i.cache||(i.cache={x:p.x,y:Zt(p.x,p.z),z:p.z,items:{},total:0});const x=i.carrying.kind;return i.cache.items[x]=(i.cache.items[x]||0)+1,i.cache.total+=1,i.carrying=null,i.justDropped={kind:x,cache:i.cache},!0}function c(p){if(!i.cache)return 0;let x=p,m=0;for(;x>0;){const g=Object.entries(i.cache.items).filter(([,y])=>y>0).sort((y,_)=>_[1]-y[1])[0];if(!g)break;i.cache.items[g[0]]-=1,i.cache.total-=1,x-=1,m+=1}return m}function l(){i.justTook=null,i.justDropped=null}function u(){return i.cache?i.cache.total:0}function d(){return u()>=Py(Bd)}function h(){return!i.cache||i.cache.total===0?null:Object.entries(i.cache.items).filter(([,p])=>p>0).map(([p,x])=>wP(p,x)).join(" · ")}function f(){const p=i.carrying?`Porte : ${Tr[i.carrying.kind]}`:"Porte : rien",x=h();return`${p} · Réserve : ${u()}/${Bd}${x?` (${x})`:""}`}return{state:i,target:e,hold:n,release:s,canDrop:o,drop:a,cacheDistance:r,spend:c,stock:u,enough:d,stockDetail:h,inventoryLine:f,endFrame:l}}const Js={...Ea},X0=4,PP={rock:"la roche ne se creuse pas",soil:"ce sol ne se creuse pas",water:"trop près de l'eau — la galerie serait inondée",slope:"la pente s'effondrerait",underground:"on ne fonde pas dans une galerie déjà creusée",bounds:"le bord du monde — il faut revenir vers le pré",occupied:"une galerie passe déjà sous ce sol","already-founded":"la colonie est déjà fondée"};function kd(i){return i?PP[i]||`impossible de creuser ici (${i})`:"impossible de creuser ici"}let Hd=null,Ny=!1;function ed(){return typeof Js.foundNest!="function"||Ny}function zr(){if(typeof Js.nestOrigin=="function"){const i=Js.nestOrigin();if(i)return i}return Hd}function jc(){return!!zr()}function rp(i,t){if(jc())return{ok:!1,reason:"already-founded"};if(typeof Js.canFoundAt=="function"){const n=Js.canFoundAt(i,t)||{};return{ok:!!n.ok,reason:n.reason,assumed:!1}}const e=Qc(i,t);return e.diggable?{ok:!0,assumed:!0}:{ok:!1,reason:e.blocker.key,assumed:!0}}function Uy(i,t){const e=rp(i,t);if(!e.ok)return e;if(typeof Js.foundNest=="function"){const n=Js.foundNest(i,t)||{};return n.ok&&(Hd={x:i,z:t}),{ok:!!n.ok,reason:n.reason,assumed:!1}}return Ny=!0,Hd={x:i,z:t},{ok:!0,assumed:!0}}function Y0(i,t,e,n){const s=e-i,r=n-t;if(Math.hypot(s,r)<1)return"ici";const o=r>8?"nord":r<-8?"sud":"",a=s>8?"est":s<-8?"ouest":"";return o&&a?`au ${o}-${a}`:a?`à l'${a}`:`au ${o}`}const Ne={...Ea},q0=[{k:"descend",s:3.2},{k:"dark",s:2.6},{k:"lay",s:3.4},{k:"rest",s:2.6},{k:"ascend",s:3.2}],$0=6,Z0=6,K0=8,IP=5.2,LP=1.8,DP=5.5,J0=26,NP=15,Q0=(i,t,e)=>[Ft(i[0],t[0],e),Ft(i[1],t[1],e),Ft(i[2],t[2],e)],Oc=i=>i*i*(3-2*i);function UP(i){const t=i._furnishing&&i._furnishing.piles&&i._furnishing.piles[0],e=t&&t.lamp&&t.lamp.p;return e?[e[0],e[2]]:[i.chamber.x,i.chamber.z]}function OP(){const i={phase:null,i:0,t:0,brood:0,mixT:null,justEnded:!1,justLaid:!1};let t=null,e=null,n=null,s=null,r=null,o=null,a=!1,c=0,l=null,u=null,d=0,h=!1;function f(){return i.phase!==null}function p(M){if(f())return!1;const L=typeof Ne.getFoundedNest=="function"?Ne.getFoundedNest():null;if(!L||!L.chamber)return!1;t=L,n=[t.mouth.x,t.mouth.y,t.mouth.z],e={x:M.x,y:M.y,z:M.z,yaw:M.yaw};const N=t.chamber;o=UP(t);let F=N.x-o[0],B=N.z-o[1];const z=Math.hypot(F,B);z<.5?(F=0,B=1):(F/=z,B/=z);const O=Math.min(DP,z);s=[o[0]+F*O,t.floorY,o[1]+B*O],c=Math.atan2(F,B),d=Math.atan2(-F,-B);let U=n[0]-N.x,G=n[2]-N.z;const K=Math.hypot(U,G);return K<.01?(U=0,G=1):(U/=K,G/=K),r=[n[0]+U*21,0,n[2]+G*21],r[1]=Ne.groundY(r[0],r[2]),l=[n[0]-Math.sin(e.yaw)*J0,n[1]+NP,n[2]-Math.cos(e.yaw)*J0],u=[n[0],n[1]+1,n[2]],i.phase="descend",i.i=0,i.t=0,i.justEnded=!1,a=!1,h=!1,!0}function x(M,L,N){if(L<.34){const O=Oc(L/.34);M.x=Ft(e.x,n[0],O),M.z=Ft(e.z,n[2],O),M.y=Ft(e.y,n[1],O),M.speed=6,M.travel+=6*N,M.yaw=e.yaw,M.floorY=M.y;return}const B=Oc((L-.34)/(1-.34)),z=Q0([n[0],n[1],n[2]],s,B);M.x=z[0],M.y=z[1],M.z=z[2],M.floorY=M.y,M.speed=0,M.yaw=Ft(e.yaw,d,B)}function m(M){M.x=s[0],M.y=s[1],M.z=s[2],M.floorY=t.floorY,M.yaw=d,M.speed=0}function g(M,L,N){if(L<.66){const z=Oc(L/.66),O=Q0(s,[n[0],n[1],n[2]],z);M.x=O[0],M.y=O[1],M.z=O[2],M.floorY=M.y,M.yaw=Ft(d,Math.atan2(r[0]-n[0],r[2]-n[2]),z),M.speed=0;return}const B=Oc((L-.66)/(1-.66));M.x=Ft(n[0],r[0],B),M.z=Ft(n[2],r[2],B),M.y=Ft(n[1],r[1],B),M.floorY=M.y,M.speed=7,M.travel+=7*N}function y(M){if(!f())return null;const L=h;if(h=!1,!(i.phase==="dark"||i.phase==="lay"||i.phase==="rest"||i.phase==="ascend"&&i.t<.45))return{eye:l,aim:i.phase==="ascend"?[M.x,M.y+3,M.z]:u,cut:L};const F=t.chamber;return{eye:[F.x+Math.sin(c)*K0,t.floorY+IP,F.z+Math.cos(c)*K0],aim:[(M.x+o[0])*.5,t.floorY+LP,(M.z+o[1])*.5],cut:L}}function _(M,L){if(i.justEnded=!1,i.justLaid=!1,i.mixT!==null&&typeof Ne.setFoundedMix=="function"&&(i.mixT+=L,Ne.setFoundedMix(et(i.mixT/$0,0,1)),i.mixT>=$0&&(i.mixT=null)),!f())return null;const N=q0[i.i];switch(i.t=et(i.t+L/N.s,0,1),N.k){case"descend":x(M,i.t,L);break;case"ascend":g(M,i.t,L);break;default:m(M);break}if(i.t>=1){i.i++,i.t=0;const F=q0[i.i];i.phase=F?F.k:null,F?b(F.k):(M.floorY=null,M.y=Ne.groundY(M.x,M.z),M.speed=0,i.justEnded=!0,t=null)}return i.phase}function b(M){if(M==="dark"){typeof Ne.sealNest=="function"&&Ne.sealNest(!0),h=!0;return}if(M==="lay"){S();return}M==="ascend"&&(typeof Ne.sealNest=="function"&&Ne.sealNest(!1),h=!0)}function S(){i.brood=Math.min(i.brood+1,Z0),typeof Ne.populateNest=="function"&&Ne.populateNest(i.brood),i.justLaid=!0,a=!0,i.mixT===null&&typeof Ne.foundedMix=="function"&&Ne.foundedMix()<1&&(i.mixT=0)}function w(){if(f())return!1;const M=typeof Ne.getFoundedNest=="function"?Ne.getFoundedNest():null;return!M||!M.chamber?!1:(S(),!0)}function A(M){if(!f())return!1;a||S(),typeof Ne.sealNest=="function"&&Ne.sealNest(!1);const L=Bi();return L&&L.contains(M.x,M.z)?M.floorY=L.floorY(M.x,M.z):L&&s&&L.contains(s[0],s[2])?(M.x=s[0],M.z=s[2],M.floorY=L.floorY(M.x,M.z)):M.floorY=null,M.y=M.floorY===null?Ne.groundY(M.x,M.z):M.floorY,M.speed=0,i.phase=null,i.i=0,i.t=0,i.justEnded=!0,t=null,!0}const E={descend:"Elle descend dans la chambre.",dark:"Elle referme l'entrée derrière elle.",rest:"Le couvain éclaire la chambre.",ascend:"Elle remonte au jour."};function C(){if(!f())return null;const M=i.phase==="lay"?i.brood===1?"Première ponte.":"Elle pond.":E[i.phase];return M?`${M}   (E — passer)`:"E — passer"}function v(){return i.justLaid?i.brood===1?"Première ponte — la colonie existe.":`Ponte : ${i.brood}ᵉ couvée.`:null}return{state:i,begin:p,update:_,shot:y,promptText:C,eventText:v,skip:A,layInPlace:w,active:f,brood:()=>i.brood,canLayMore:()=>i.brood<Z0}}const FP={harvest:!0,found:!0,lay:!0},j0=2.2,zP=15;function BP({profile:i=Nn}={}){const t=RP(),e=rs(i),n=OP();let s=0,r=0,o=null,a=0;function c(S){const w=zr();return w?Math.hypot(w.x-S.x,w.z-S.z):1/0}function l(){return Py(Bd)}function u(S){return!jc()||ed()||!n.canLayMore()||t.stock()<l()?null:np(S.x,S.z)?"here":c(S)<=zP?"descend":null}function d(S,w=3.2){o=S,a=w}function h(S){if(n.active())return{kind:"sequence"};if(S.climb)return{kind:"climb",climbTarget:null};if(t.state.carrying){const v=t.state.carrying.kind;if(t.canDrop(S))return{kind:"drop",label:t.state.cache?"ajouter au dépôt":"poser ici — ce sera le dépôt"};const M=t.cacheDistance(S),L=t.state.cache;return{kind:"return",label:`rapporter ${Tr[v]} au dépôt (${M.toFixed(0)} u ${Y0(S.x,S.z,L.x,L.z)})`}}if(t.state.cache&&!jc()&&t.enough()&&t.cacheDistance(S)<=Dy){const v=rp(S.x,S.z);return{kind:"found",ok:v.ok,reason:v.reason,assumed:v.assumed}}const A=u(S);if(A)return{kind:"lay",inPlace:A==="here"};const E=t.target(S,e);if(E)return{kind:"harvest",node:E};const C=fR(S);return C?{kind:"climb",climbTarget:C}:{kind:"none"}}function f(S,w,A,E){n.update(S,E);const C=n.eventText();C&&d(C,6);const v=h(S);switch(a>0&&(a-=E,a<=0&&(o=null)),(v.kind!=="harvest"||!A)&&t.release(E),(v.kind!=="found"||!A||!v.ok)&&(s=Math.max(0,s-E/X0)),(v.kind!=="lay"||!A)&&(r=Math.max(0,r-E/j0)),v.kind){case"harvest":{if(A){const M=t.hold(v.node,E);M==="taken"?d(`elle emporte ${Tr[t.state.carrying.kind]}`):M==="empty"&&d("plus rien à prendre ici")}break}case"found":{if(A&&v.ok&&(s+=E/X0,s>=1)){s=0;const M=Uy(S.x,S.z);d(M.ok?ed()?"Colonie fondée ici. (le monde ne creuse pas encore la chambre)":"Colonie fondée ici.":`impossible : ${kd(M.reason)}`,6),M.ok&&(t.spend(l()),n.begin(S))}break}case"lay":{A&&(r+=E/j0,r>=1&&(r=0,(v.inPlace?n.layInPlace():n.begin(S))&&(t.spend(l()),v.inPlace&&d(n.eventText()||"Elle pond.",6))));break}case"sequence":w&&n.skip(S)&&d(n.eventText()||"Ponte.",6);break;case"drop":if(w){const M=t.state.carrying.kind;t.drop(S)&&d(t.stock()===1?`dépôt ouvert ici — ${Tr[M]} posée`:`${Tr[M]} ajoutée au dépôt (${t.stock()}/${l()})`)}break;case"climb":w&&mR(S,v.climbTarget);break}return v}function p(S){return`${Math.round(S*100)}%`}function x(S,w){if(w.kind==="sequence")return n.promptText();if(w.kind==="lay")return r>0?`Ponte… ${p(r)}`:`E (maintenir) — ${w.inPlace?"pondre ici":"descendre pondre"} (${l()} unité${l()>1?"s":""} du dépôt)`;if(w.kind==="climb")return gR(S,w.climbTarget);if(w.kind==="return")return w.label;if(w.kind==="drop")return`E — ${w.label}`;if(w.kind==="harvest"){const A=w.node;return t.state.progress>0?`Récolte… ${p(t.state.progress)}`:`E (maintenir) — récolter ${Tr[A.kind]}`}return w.kind==="found"?w.ok?s>0?`Creusement… ${p(s)}`:"E (maintenir) — fonder la colonie ici":`Fonder ici : ${kd(w.reason)}`:null}function m(S){if(n.active())return"La fondation : elle descend pondre.";if(jc()){const E=zr(),C=Math.hypot(E.x-S.x,E.z-S.z),v=C<12?"ici":`à ${C.toFixed(0)} u ${Y0(S.x,S.z,E.x,E.z)}`,M=ed()?" [chambre non creusée]":"",L=n.brood();if(L===0)return`Colonie fondée ${v}. Objectif : descendre pondre.${M}`;if(!n.canLayMore())return`${L} couvées — la chambre est pleine. Suite : les ouvrières.${M}`;const N=l()-t.stock();return N>0?`${L} couvée${L>1?"s":""}. Objectif : ${N} unité${N>1?"s":""} de plus pour la suivante.${M}`:`${L} couvée${L>1?"s":""}. Objectif : rentrer pondre — le nid est ${v}.${M}`}const w=l()-t.stock();if(t.state.carrying)return t.state.cache?`Objectif : rapporter au dépôt — encore ${w} pour fonder`:"Objectif : poser ce fardeau — le premier dépôt fixe le site de la colonie";if(t.enough())return"Objectif : fonder la colonie sur le dépôt";const A=Ly()?" [nœuds provisoires]":"";return`Objectif : récolter ${w} unité${w>1?"s":""} de plus${A}`}function g(){return t.inventoryLine()}function y(){return o}function _(S){return S.kind==="harvest"&&t.state.progress>0?t.state.progress:S.kind==="found"&&s>0?s:S.kind==="lay"&&r>0?r:null}function b(S,w){switch(w.kind){case"harvest":return{x:w.node.x,z:w.node.z,radius:Math.max(w.node.r,6),blocked:!1};case"found":{const A=t.state.cache;return A?{x:A.x,z:A.z,radius:11,blocked:!w.ok}:null}case"drop":{const A=t.state.cache;return{x:A?A.x:S.x,z:A?A.z:S.z,radius:A?11:7,blocked:!1}}case"return":{const A=t.state.cache;return A?{x:A.x,z:A.z,radius:11,blocked:!1}:null}case"lay":{if(w.inPlace)return{x:S.x,z:S.z,radius:9,blocked:!1};const A=zr();return A?{x:A.x,z:A.z,radius:9,blocked:!1}:null}case"climb":{const A=w.climbTarget;if(!A)return null;if(A.kind==="tree")return{x:te.x,z:te.z,radius:te.w+5,blocked:!1};const E=on[A.i];return E?{x:E.x,z:E.z,radius:5,blocked:!1}:null}default:return null}}return{harvest:t,laying:n,update:f,resolve:h,promptText:x,objectiveText:m,inventoryText:g,message:y,holdProgress:_,targetMark:b,busy:()=>n.active(),shot:S=>n.shot(S),isHold:S=>!!FP[S.kind],endFrame:()=>t.endFrame()}}const Kl={graine:{r:[.95,.78,1.3],color:14270852,emissive:0},brindille:{r:[2.9,.26,.26],color:8016424,emissive:0},miellat:{r:[.9,.88,.9],color:15247420,emissive:3810309}},kP=2,HP=12;let nd=null;function VP(){return nd||(nd=new er(1,10,7)),nd}const tg=new Map;function Oy(i){let t=tg.get(i);if(!t){const e=Kl[i];t=new We({color:e.color,emissive:e.emissive,roughness:.7,metalness:.02}),tg.set(i,t)}return t}const id=new Nt,eg=new P,ng=new P,ig=new P,sg=new P;function Fy(i,t,e,n,s){eg.set(e[0],e[1],e[2]),ng.set(n[0],n[1],n[2]),ig.set(s[0],s[1],s[2]),id.makeBasis(eg,ng,ig),sg.set(t[0],t[1],t[2]),id.setPosition(sg),i.matrix.copy(id)}function sd(i){const t=new Vt(VP(),Oy(i));return t.matrixAutoUpdate=!1,t.castShadow=!0,t.visible=!1,t}function rg(i,t,e,n,s,r=0){const o=Kl[t].r.map(l=>l*kP),a=Math.cos(s),c=Math.sin(s);Fy(i,[e,Zt(e,n)+o[1]*.9+r,n],[a*o[0],0,c*o[0]],[0,o[1],0],[-c*o[2],0,a*o[2]]),i.visible=!0}function GP({scene:i,profile:t=Nn}){const e=new Re;e.name="gameplay-props",i.add(e);const n={};for(const f of Object.keys(Kl))n[f]=sd(f),e.add(n[f]);const s=[];for(let f=0;f<HP;f++){const p=sd("graine");s.push(p),e.add(p)}let r=-1;const o=Ly(),a=[];if(o)for(const f of Ta()){const p=[];for(let x=0;x<3;x++){const m=sd(f.kind);e.add(m),p.push(m)}a.push({node:f,clutch:p,drawn:-1})}function c(){for(const f of a){const p=f.node,x=Math.max(0,Math.min(f.clutch.length,p.amount));if(x!==f.drawn){f.drawn=x;for(let m=0;m<f.clutch.length;m++)if(m<x){const g=m/f.clutch.length*Math.PI*2+p.id;rg(f.clutch[m],p.kind,p.x+Math.cos(g)*3.2,p.z+Math.sin(g)*3.2,g)}else f.clutch[m].visible=!1}}}function l(f){if(!f||f.total===r)return;r=f.total;let p=0;for(const[x,m]of Object.entries(f.items))for(let g=0;g<m&&p<s.length;g++,p++){const y=p*2.399,_=1.6+p*1.15,b=s[p];b.material=Oy(x),rg(b,x,f.x+Math.cos(y)*_,f.z+Math.sin(y)*_,y*1.7)}for(;p<s.length;p++)s[p].visible=!1}function u(f,p){for(const w of Object.keys(n))n[w].visible=!1;if(!p)return;const x=n[p.kind];if(!x)return;const m=ip(f),g=m.basis,y=m.scale,_=(f.profile||t).body.mandible,b=[0,_.tip[1]-.15,_.tip[2]+.55],S=Kl[p.kind].r;Fy(x,$n(m,b),Ht(g.side,S[0]*y),Ht(g.up,S[1]*y),Ht(g.fwd,S[2]*y)),x.visible=!0}function d(f,p){u(f,p.carrying),l(p.cache),o&&c()}function h(){i.remove(e)}return{group:e,update:d,dispose:h,provisional:o}}const WP="position:fixed;color:#e6d3ab;font:13px/1.5 monospace;pointer-events:none;text-shadow:0 1px 3px rgba(0,0,0,0.9);z-index:5;";function Si(i,t){const e=document.createElement("div");return e.id=i,e.style.cssText=WP+t,document.body.appendChild(e),e}function XP(){return{setSite(){},setPrompt(){},setObjective(){},setStock(){},setEvent(){},setHold(){},setDig(){},setEventNow(){},toggleControls(){},closeControls(){},dispose(){}}}const YP=[["ZQSD / WASD","se déplacer"],["Maj","courir"],["Souris (glisser)","tourner la caméra"],["Molette","reculer / rapprocher la vue"],["E","action — appui court, ou maintenu quand la barre apparaît"],["5 / 6","prochaine ponte : ouvrières / fouisseuses"],["P","graphismes — et la cadence de test (raccourcit les attentes)"],["H","afficher / masquer cette aide"]];function qP(){if(typeof document>"u")return XP();const i=Si("event","left:12px;bottom:142px;color:#cfe0a8;"),t=Si("prompt","left:12px;bottom:122px;font-size:14px;color:#ffe6b0;"),e=Si("objective","left:12px;bottom:88px;color:#f0dfb8;"),n=Si("stock","left:12px;bottom:70px;opacity:0.85;"),s=Si("siteinfo","left:12px;bottom:52px;"),r=Si("sitedetail","left:12px;bottom:34px;opacity:0.62;font-size:12px;"),o=Si("hold","left:12px;bottom:112px;width:190px;height:5px;background:rgba(0,0,0,0.45);border-radius:3px;overflow:hidden;"),a=document.createElement("div");a.style.cssText="height:100%;width:0%;background:#ffc46a;border-radius:3px;",o.appendChild(a),o.style.display="none";const c=Si("controls","right:12px;top:12px;padding:10px 14px;background:rgba(12,10,8,0.62);border-radius:5px;line-height:1.8;");c.innerHTML='<div style="opacity:0.75;margin-bottom:4px">Commandes</div>'+YP.map(([N,F])=>`<div><span style="color:#ffe6b0">${N}</span><span style="opacity:0.72"> — ${F}</span></div>`).join("");let l=!0;const u=108,d=42,h=2*Math.PI*d,f=Si("digdial","left:0;top:0;width:108px;height:108px;pointer-events:none;transform-origin:50% 50%;");f.innerHTML=`<svg viewBox="0 0 ${u} ${u}" width="100%" height="100%">
    <circle cx="54" cy="54" r="${d}" fill="rgba(10,7,4,0.45)" stroke="rgba(0,0,0,0.55)" stroke-width="7"/>
    <circle id="dialtrack" cx="54" cy="54" r="${d}" fill="none"
            stroke="rgba(255,214,150,0.16)" stroke-width="7"/>
    <circle id="dialfill" cx="54" cy="54" r="${d}" fill="none"
            stroke="#ffc46a" stroke-width="7" stroke-linecap="round"
            transform="rotate(-90 54 54)"
            stroke-dasharray="${h}" stroke-dashoffset="${h}"/>
    <circle id="dialpulse" cx="54" cy="54" r="${d}" fill="none"
            stroke="#ffe6b0" stroke-width="4" opacity="0"/>
    <text id="dialpct" x="54" y="52" text-anchor="middle" dominant-baseline="middle"
          font-family="monospace" font-size="21" fill="#ffe6b0">0%</text>
    <text id="dialcrew" x="54" y="70" text-anchor="middle" dominant-baseline="middle"
          font-family="monospace" font-size="11" fill="#e6d3ab" opacity="0.8"></text>
  </svg>`,f.style.display="none";const p=f.querySelector("#dialfill"),x=f.querySelector("#dialpulse"),m=f.querySelector("#dialpct"),g=f.querySelector("#dialcrew");let y=-1,_=null,b=0,S=!1,w=null,A=null,E=null,C=null,v=null,M=null;const L=(N,F,B)=>F===B?B:(N.textContent=F||"",F);return{setSite(N,F,B){N!==w&&(s.textContent=N,s.style.color=B?"#e6d3ab":"#d98b6a",w=N),F!==A&&(r.textContent=F,A=F)},setPrompt(N){E=L(t,N,E)},setDig(N,F=0){const B=!!N&&N.visible;if(B!==(f.style.display==="block")&&(f.style.display=B?"block":"none"),!B){S=!1;return}const z=Math.max(0,Math.min(1,N.progress));p.style.strokeDashoffset=`${h*(1-z)}`,p.style.stroke=N.diggers>0?"#ffc46a":"rgba(255,196,106,0.45)";const O=Math.round(z*100);O!==y&&(m.textContent=`${O}%`,y=O);const U=N.diggers>0?`${N.diggers} au front`:"personne ne creuse";if(U!==_&&(g.textContent=U,_=U),z>=1&&!S&&(S=!0,b=.85),z<1&&(S=!1),b>0){b=Math.max(0,b-F);const K=1-b/.85;x.setAttribute("r",`${d+K*26}`),x.style.opacity=`${(1-K)*.9}`}else x.style.opacity!=="0"&&(x.style.opacity="0");const G=Math.max(.55,Math.min(1.7,N.scale));f.style.transform=`translate(${N.sx-54}px, ${N.sy-54}px) scale(${G})`},setEventNow(N){M=L(i,N,null)},setObjective(N){C=L(e,N,C)},setStock(N){v=L(n,N,v)},setEvent(N){M=L(i,N,M)},setHold(N){const F=N!==null&&N>.001;F!==(o.style.display==="block")&&(o.style.display=F?"block":"none"),F&&(a.style.width=`${Math.min(100,N*100)}%`)},toggleControls(){l=!l,c.style.display=l?"block":"none"},closeControls(){l&&(l=!1,c.style.display="none")},dispose(){for(const N of[e,n,s,r,t,i,o,c,f])N.parentNode&&N.parentNode.removeChild(N)}}}const og=new q("#FFB03A").multiplyScalar(1.5),$P=new q("#E8663A").multiplyScalar(1.4),ag=.72,ZP=.2,KP=`
uniform vec3 uColor;
uniform float uTime;
uniform float uOpacity;
varying vec2 vMarkerUv;

void main() {
  vec2 p = vMarkerUv * 2.0 - 1.0;
  float r = length(p);
  if (r > 1.0) discard;

  // the soft band: fades to nothing on both sides, so there is no edge
  float band = 1.0 - smoothstep(0.0, ${ZP.toFixed(2)}, abs(r - ${ag.toFixed(2)}));
  band = pow(band, 1.6);

  // a bright arc sweeping around it, so the ring reads as alive without
  // changing size — three lobes, because one reads as a bug and many read
  // as a texture
  float a = atan(p.y, p.x);
  float sweep = 0.55 + 0.45 * sin(a * 3.0 - uTime * 1.9);

  // a faint wash inside the band, which is what stops the middle of a large
  // ring from looking empty on open ground
  float fill = (1.0 - smoothstep(0.0, ${ag.toFixed(2)}, r)) * 0.14;

  float alpha = (band * sweep + fill) * uOpacity;
  gl_FragColor = vec4(uColor * (0.75 + 0.55 * band), alpha);
}
`;function JP(i){const t={uColor:{value:og.clone()},uTime:{value:0},uOpacity:{value:1}},e=new Vn({uniforms:t,vertexShader:`
      varying vec2 vMarkerUv;
      void main() {
        vMarkerUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:KP,transparent:!0,blending:il,depthTest:!1,depthWrite:!1,side:ge}),n=new Vt(new js(2,2),e);return n.rotation.x=-Math.PI/2,n.name="target-marker",n.renderOrder=900,n.frustumCulled=!1,n.visible=!1,i.add(n),{show(s,r,o,a){if(!s){n.visible=!1;return}n.visible=!0,n.position.set(s.x,Zt(s.x,s.z)+.35,s.z),n.scale.setScalar(r),t.uTime.value=a,t.uColor.value.copy(o?$P:og),t.uOpacity.value=o?.95:.8+.2*Math.sin(a*3.4)},dispose(){i.remove(n),n.geometry.dispose(),e.dispose()}}}const QP=22,cg=1,lg=75,jP=7,ug=5,tI=6,eI=.6,hg=11;let dg=1;function nI(i,t){let e=null,n=1/0;for(let s=0;s<Jn.length;s++){const r=Jn[s];if(r.amount<=0)continue;const o=Math.hypot(r.x-i,r.z-t);o<n&&(n=o,e=r)}return e}function iI(){const i={eggs:[],workers:[],delivered:0,digging:0,faceWork:new Map,opened:[],lastOpened:null};function t(u,d,h="worker"){const f=ZC(h),p=ly(u,0,d,f);return p.y=Zt(u,d),p.yaw=Math.random()*Math.PI*2,{id:dg++,profileId:h,profile:f,ant:p,legState:uy(f),carrying:null,targetId:null,repath:0}}function e(u,d="worker"){for(let h=0;h<u;h++)i.eggs.push({id:dg++,age:0,profileId:d})}function n(u,d){const h=u.ant,f=aa();let p=null,x=1/0;for(const b of f){const S=Math.hypot(b.x-h.x,b.z-h.z);S<x&&(x=S,p=b)}if(u.faceId=p?p.id:null,!p){u.atFace=!1,h.speed=0;return}const m={x:p.x+p.nx*ug,z:p.z+p.nz*ug},g=m.x-h.x,y=m.z-h.z;if(Math.hypot(g,y)<=jP)h.speed=0,h.yaw=ko(h.yaw,Math.atan2(p.x-h.x,p.z-h.z),4,d),u.atFace=!0;else{u.atFace=!1,h.yaw=ko(h.yaw,Math.atan2(g,y),6,d),h.speed=hg*.9;const b=h.speed*d;h.x+=Math.sin(h.yaw)*b,h.z+=Math.cos(h.yaw)*b,h.travel+=b}h.y=Zt(h.x,h.z),h.bob=Math.sin(h.travel*(Math.PI*2/ca(sy))*2)*.13*Math.min(1,h.speed/8),Kc(h,u.legState,d)}function s(u,d){const h=u.ant,f=oa();u.repath-=d;let p=null;if(u.carrying)p=f;else{if(u.repath<=0||u.targetId===null){const _=nI(h.x,h.z);u.targetId=_?_.id:null,u.repath=eI}const y=u.targetId!==null?Jn.find(_=>_.id===u.targetId):null;p=y&&y.amount>0?y:null,p||(u.targetId=null)}if(!p){h.speed=0,Kc(h,u.legState,d);return}const x=p.x-h.x,m=p.z-h.z;if(Math.hypot(x,m)<=tI)h.speed=0,u.carrying?(i.delivered+=cg,u.carrying=null):(Kf(u.targetId,cg)>0&&(u.carrying=p.kind),u.targetId=null);else{h.yaw=ko(h.yaw,Math.atan2(x,m),6,d);const y=Math.cos(h.yaw-Math.atan2(x,m));h.speed=hg*Math.max(.25,y);const _=h.speed*d;h.x+=Math.sin(h.yaw)*_,h.z+=Math.cos(h.yaw)*_,h.travel+=_}h.y=Zt(h.x,h.z),h.bob=Math.sin(h.travel*(Math.PI*2/ca(Xr))*2)*.13*Math.min(1,h.speed/8),Kc(h,u.legState,d)}function r(u){const d=oa();if(d){for(let h=i.eggs.length-1;h>=0;h--){const f=i.eggs[h];if(f.age+=u,f.age>=G0(QP)){i.eggs.splice(h,1);const p=Math.random()*Math.PI*2;i.workers.push(t(d.x+Math.cos(p)*9,d.z+Math.sin(p)*9,f.profileId))}}i.digging=0;for(const h of i.workers)h.profileId==="digger"?(n(h,u),h.atFace&&i.digging++):s(h,u);i.faceWork.clear();for(const h of i.workers)h.profileId!=="digger"||!h.atFace||!h.faceId||i.faceWork.set(h.faceId,(i.faceWork.get(h.faceId)||0)+1);for(const[h,f]of i.faceWork){const p=Fu(h,f*u*o());p&&p.opened&&(i.opened.push(p.opened.id),i.lastOpened=p.opened)}}}const o=()=>lg/Math.max(1e-6,G0(lg));function a(){const u=aa();if(!u.length)return null;let d=null;for(const p of u){const x=i.faceWork.get(p.id)||0,m=x*1e3+p.worked;(!d||m>d.score)&&(d={f:p,crew:x,score:m})}if(!d)return null;const{f:h,crew:f}=d;return{id:h.id,x:h.x,y:h.y,z:h.z,progress:h.needed>0?h.worked/h.needed:0,diggers:f}}function c(){if(!i.workers.length&&!i.eggs.length)return null;const u=[],d=i.workers.filter(f=>f.profileId!=="digger").length,h=i.workers.length-d;return d&&u.push(`${d} ouvrière${d>1?"s":""}`),h&&u.push(`${h} fouisseuse${h>1?"s":""}`),i.eggs.length&&u.push(`${i.eggs.length} œuf${i.eggs.length>1?"s":""}`),i.delivered&&u.push(`${i.delivered} rapporté${i.delivered>1?"s":""}`),`Colonie : ${u.join(" · ")}`}function l(){return{delivered:i.delivered,eggs:i.eggs.map(u=>({id:u.id,age:u.age})),opened:i.opened.slice(),workers:i.workers.map(u=>({id:u.id,profileId:u.profileId,carrying:u.carrying,x:u.ant.x,z:u.ant.z,yaw:u.ant.yaw}))}}return{state:i,addEggs:e,update:r,statusText:c,digProgress:a,serialise:l,collideRadius:()=>rs(Xr)}}const rd=64,od=new q,Ar=new Nt().makeScale(0,0,0);function sI(i,t){const e=dy(),n=M0(t),s=new We({color:16777215,roughness:.55,metalness:.05,vertexColors:!1});function r(l,u){const d=new ma(l,s,u);return d.instanceMatrix.setUsage(cx),d.setColorAt(0,od.set(16777215)),d.castShadow=!0,d.receiveShadow=!0,d.frustumCulled=!1,d.count=0,d}const o=r(e.sphere,rd*n.sphere),a=r(e.cyl,rd*n.cyl);o.name="crowd-spheres",a.name="crowd-cyls",i.add(o,a);for(let l=0;l<o.instanceMatrix.count;l++)o.setMatrixAt(l,Ar);for(let l=0;l<a.instanceMatrix.count;l++)a.setMatrixAt(l,Ar);let c=0;return{render(l,u){const d=Math.min(l.length,rd);for(let h=0;h<d;h++){const f=l[h];M0(f.profile);let p=h*n.sphere,x=h*n.cyl;hy(f.profile,f.ant,f.legState,u,(m,g,y,_,b,S)=>{const w=fy(g,y,_,b);m===Bo?(o.setMatrixAt(p,w),o.setColorAt(p,od.set(S)),p++):(a.setMatrixAt(x,w),a.setColorAt(x,od.set(S)),x++)});for(let m=p;m<(h+1)*n.sphere;m++)o.setMatrixAt(m,Ar);for(let m=x;m<(h+1)*n.cyl;m++)a.setMatrixAt(m,Ar)}for(let h=d;h<c;h++){for(let f=h*n.sphere;f<(h+1)*n.sphere;f++)o.setMatrixAt(f,Ar);for(let f=h*n.cyl;f<(h+1)*n.cyl;f++)a.setMatrixAt(f,Ar)}c=d,o.count=Math.max(d,0)*n.sphere,a.count=Math.max(d,0)*n.cyl,o.instanceMatrix.needsUpdate=!0,a.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0),a.instanceColor&&(a.instanceColor.needsUpdate=!0)},dispose(){i.remove(o,a),o.dispose(),a.dispose(),s.dispose()}}}const fg=[140,170],pg=-Math.PI/2,rI=.25,oI=3;function aI({scene:i,camera:t,domElement:e,profile:n=Nn}){const s=ly(fg[0],0,fg[1],n);s.yaw=pg,s.y=Zt(s.x,s.z),Od(s,0),Od(s,0),s.y=Zt(s.x,s.z);const r=uy(n),{group:o,updatePose:a}=bR(n);i.add(o),i.add(QC(o));const c=SR(e,n);c.state.camYaw=pg;const l=zR(t),u=new P;function d(B){if(!B)return null;u.set(B.x,B.y+6.5,B.z);const z=u.distanceTo(t.position);u.project(t);const O=u.z>-1&&u.z<1&&u.x>-1.35&&u.x<1.35&&u.y>-1.35&&u.y<1.35,U=window.innerWidth,G=window.innerHeight;return{...B,sx:(u.x*.5+.5)*U,sy:(-u.y*.5+.5)*G,scale:46/Math.max(12,z),visible:O}}const h=qP(),f=JP(i),p=iI();let x="worker";const m={worker:0,digger:1};let g=null,y=0;function _(B){return S.laying.brood()>=m[B]}const b=sI(i,Xr),S=BP({profile:n}),w=GP({scene:i,profile:n});l.update(s,c.state.camYaw,c.state.wantPitch,c.state.camDist,0);let A=0,E=null,C=null,v=null;function M(B){A-=B;const z=E?Math.hypot(s.x-E[0],s.z-E[1]):1/0;if((C||v)&&A>0&&z<oI)return;A=rI,E=[s.x,s.z];const O=zr();if(O){v||(v=Qc(O.x,O.z)),h.setSite(`Nid fondé — site ${v.grade.label} (${v.score}/100)`,H0(v),!0);return}C=Qc(s.x,s.z),h.setSite(yP(C),H0(C),C.diggable)}function L(B,z){const O=c.readMoveIntent();c.consumeHelp()&&h.toggleControls();const U=c.consumeCaste();U&&(_(U)?(x=U,g=`Prochaine ponte : ${U==="digger"?"fouisseuses":"ouvrières"}`):g="Fouisseuses : à débloquer à la deuxième ponte",y=3.5),_(x)||(x="worker");const G=S.update(s,c.consumeInteract(),c.isInteractHeld(),B);if(!S.busy())if(s.climb)xR(s,et(O.iy,-1,1),B);else{const _t=iP(O,l.eye,l.aim);sP(s,_t,O,B)}Kc(s,r,B),a(s,r,z),o.position.set(0,0,0),No.position.set(s.x,s.y,s.z),No.radius=rs(n),w.update(s,S.harvest.state),S.laying.state.justLaid&&p.addEggs(3,x),p.update(B),b.render(p.state.workers,z),M(B),h.setPrompt(S.promptText(s,G)),h.setObjective(S.objectiveText(s));const K=p.statusText();h.setStock(K?`${S.inventoryText()}  |  ${K}`:S.inventoryText()),y>0&&(y-=B,y<=0&&(g=null)),h.setEvent(g||S.message()),h.setHold(S.holdProgress(G));const nt=S.targetMark(s,G);f.show(nt,nt?nt.radius:0,nt?nt.blocked:!1,z),S.harvest.state.carrying&&h.closeControls(),S.endFrame(),!c.state.dragging&&!s.climb&&!S.busy()&&O.mag>.02&&(c.state.camYaw=ko(c.state.camYaw,s.yaw,2.2,B)),S.laying.state.justEnded&&(c.state.camYaw=s.yaw),l.update(s,c.state.camYaw,c.state.wantPitch,c.state.camDist,B,S.shot(s))}typeof window<"u"&&(window.__decorPenetration=jR,window.__antRadius=rs(n),window.__site=(B,z)=>Qc(B,z),window.__avatar=n,window.__mushroomRadii=Ty,window.__grass=on,window.__nodes=Ta,window.__harvest=()=>S.harvest.state,window.__nestOrigin=zr,window.__colony=()=>p,window.__foundNest=(B,z)=>Uy(B,z),window.__rooms2=()=>ep(),window.__faces=()=>aa(),window.__nest=()=>oR(s),window.__nestAt=(B,z)=>{const O=Bi();return O?{inside:O.contains(B,z),floorY:O.floorY(B,z),ground:Zt(B,z),approx:O.approx}:null},window.__payDig=(B,z)=>Fu(B,z),window.__act=()=>{const B=S.resolve(s);return{kind:B.kind,inPlace:!!B.inPlace,hold:S.holdProgress(B)}},window.__descentPath=()=>typeof ql=="function"?ql():null,window.__beginLaying=()=>S.laying.begin(s),window.__caste=()=>({caste:x,msg:g,unlocked:_("digger")}),window.__canFound=(B,z)=>{const O=rp(B,z);return{...O,text:kd(O.reason)}},window.__toWater=mi,window.__laying=()=>{const B=S.laying.state;return{phase:B.phase,t:+B.t.toFixed(3),brood:B.brood,mix:Aa()}});function N(){c.dispose(),h.dispose(),f.dispose(),b.dispose(),w.dispose()}function F(B=0){h.setDig(d(p.digProgress()),B)}return{ant:s,group:o,update:L,syncDigDial:F,dispose:N}}const Gs={resolution:[{label:"50 %",value:.5},{label:"75 %",value:.75},{label:"100 %",value:1},{label:"150 % (net)",value:1.5}],shadows:[{label:"aucune",value:0},{label:"basses (1024)",value:1024},{label:"normales (2048)",value:2048}],grass:[{label:"clairsemée",value:.35},{label:"moyenne",value:.65},{label:"dense",value:1}]},zy="myrmidia.quality";function cI(){const i={resolution:2,shadows:2,grass:2,textures:!0};try{const t=localStorage.getItem(zy);return t?{...i,...JSON.parse(t)}:i}catch{return i}}function lI(){try{localStorage.setItem(zy,JSON.stringify(xn))}catch{}}const xn=cI(),uI=[];function hI(){for(const i of uI)i(tl())}function tl(){return{resolution:Gs.resolution[xn.resolution].value,shadowMap:Gs.shadows[xn.shadows].value,grassFraction:Gs.grass[xn.grass].value,textures:xn.textures}}function ad(i){xn[i]=(xn[i]+1)%Gs[i].length}function dI({renderer:i,sun:t,scene:e}){const n=Math.min(window.devicePixelRatio||1,2);function s(){i.setPixelRatio(n*tl().resolution),i.setSize(window.innerWidth,window.innerHeight)}function r(){const _=tl().shadowMap;i.shadowMap.enabled=_>0,_>0&&(t.shadow.mapSize.set(_,_),t.shadow.map?.dispose(),t.shadow.map=null),i.shadowMap.needsUpdate=!0}function o(){const _=xn.textures;e.traverse(b=>{const S=Array.isArray(b.material)?b.material:b.material?[b.material]:[];for(const w of S){if(_)w.userData.savedMap!==void 0&&(w.map=w.userData.savedMap,w.userData.savedMap=void 0);else if(w.map)w.userData.savedMap=w.map,w.map=null;else continue;w.needsUpdate=!0}})}let a=null,c=0;function l(){if(!a){if(e.traverse(_=>{_.name==="grass"&&(a=_)}),!a)return;c=a.count}a.count=Math.max(1,Math.round(c*tl().grassFraction))}if(s(),r(),typeof document>"u")return{update(){},toggle(){},dispose(){}};const u=document.createElement("div");u.id="quality",u.style.cssText="position:fixed;right:12px;bottom:12px;padding:9px 12px;background:rgba(12,10,8,0.68);border-radius:5px;color:#e6d3ab;font:12px/1.7 monospace;pointer-events:none;z-index:6;text-shadow:0 1px 3px rgba(0,0,0,0.9);display:none;",document.body.appendChild(u);const d=document.createElement("div");d.id="fps",d.style.cssText="position:fixed;right:12px;bottom:12px;padding:4px 8px;background:rgba(12,10,8,0.55);border-radius:4px;color:#cfe0a8;font:12px/1.4 monospace;pointer-events:none;z-index:6;text-shadow:0 1px 3px rgba(0,0,0,0.9);",document.body.appendChild(d);let h=!1;function f(){const _=[["1","Résolution",Gs.resolution[xn.resolution].label],["2","Ombres",Gs.shadows[xn.shadows].label],["3","Herbe",Gs.grass[xn.grass].label+" (au prochain chargement)"],["4","Textures",xn.textures?"oui":"non"],["5","Cadence de test",V0()?"ON — attentes /8, coûts /5":"off (cadence réelle)"]];u.innerHTML='<div style="opacity:0.75;margin-bottom:3px">Graphismes — P pour fermer</div>'+_.map(([b,S,w])=>`<div><span style="color:#ffe6b0">${b}</span><span style="opacity:0.7"> ${S} : </span><span style="color:#cfe0a8">${w}</span></div>`).join("")}f();let p=0,x=0,m=0;function g(_){y.key(_.code)&&_.preventDefault()}window.addEventListener("keydown",g),l(),o();const y={update(_){if(p++,x+=_,x>=.5){m=Math.round(p/x),p=0,x=0;const b=i.getContext();d.textContent=h?`${m} i/s · ${b.drawingBufferWidth}x${b.drawingBufferHeight} · ${i.info.render.calls} appels`:`${m} i/s · P : graphismes`}},key(_){if(_==="KeyP")return h=!h,u.style.display=h?"block":"none",d.style.bottom=h?"104px":"12px",!0;if(!h)return!1;if(_==="Digit1")ad("resolution"),s();else if(_==="Digit2")ad("shadows"),r();else if(_==="Digit3")ad("grass"),l();else if(_==="Digit4")xn.textures=!xn.textures,o();else if(_==="Digit5")bP(!V0());else return!1;return f(),lI(),hI(),!0},dispose(){window.removeEventListener("keydown",g),u.remove(),d.remove()}};return y}const fI=16,pI={x0:-400,x1:600,z0:-300,z1:700};let Vd=null,Gd=0,Wd=0;function mI(i,t){t<Gd&&(Gd=t,Vd=i)}function gI(){Wd++}class xI{constructor(t={}){this.reset(t)}reset({x0:t,x1:e,z0:n,z1:s,cell:r=fI,pad:o=64}={}){const a=t===void 0?pI:{x0:t,x1:e,z0:n,z1:s};this.cell=r,this.inv=1/r,this.x0=a.x0-o,this.z0=a.z0-o,this.cols=Math.max(1,Math.ceil((a.x1+o-this.x0)*this.inv)),this.rows=Math.max(1,Math.ceil((a.z1+o-this.z0)*this.inv)),this.cells=new Array(this.cols*this.rows).fill(null),this.cellR=new Float32Array(this.cols*this.rows),this.maxR=0,this.n=0}_cellOf(t,e){let n=Math.floor((t-this.x0)*this.inv),s=Math.floor((e-this.z0)*this.inv);return n<0?n=0:n>=this.cols&&(n=this.cols-1),s<0?s=0:s>=this.rows&&(s=this.rows-1),s*this.cols+n}_place(t){const e=this._cellOf(t.x,t.z);let n=this.cells[e];n||(n=[],this.cells[e]=n),t._c=e,t._i=n.length,n.push(t),t.r>this.cellR[e]&&(this.cellR[e]=t.r),t.r>this.maxR&&(this.maxR=t.r)}_unplace(t){const e=this.cells[t._c],n=e.pop();n!==t&&(e[t._i]=n,n._i=t._i),t._c=-1}add(t,e,n,s=0,r=null){const o={type:t,x:e,z:n,r:s,data:r,_c:-1,_i:-1};return this._place(o),this.n++,o}move(t,e,n){const s=this._cellOf(e,n);return t.x=e,t.z=n,s===t._c||(this._unplace(t),this._place(t)),t}setRadius(t,e){return t.r=e,e>this.cellR[t._c]&&(this.cellR[t._c]=e),e>this.maxR&&(this.maxR=e),t}remove(t){t._c<0||(this._unplace(t),this.n--)}get size(){return this.n}stats(){let t=0,e=0;for(const n of this.cells)n&&n.length&&(t++,n.length>e&&(e=n.length));return{cell:this.cell,cells:this.cells.length,entries:this.n,occupied:t,fill:t?this.n/t:0,most:e,maxR:this.maxR}}_scan(t,e,n,s,r){const o=s&&s.type,a=s&&s.where,c=!!(s&&s.reach),l=n+(c?this.maxR:0),u=this.cell;let d=Math.floor((t-l-this.x0)*this.inv),h=Math.floor((t+l-this.x0)*this.inv),f=Math.floor((e-l-this.z0)*this.inv),p=Math.floor((e+l-this.z0)*this.inv);d<0&&(d=0),h>=this.cols&&(h=this.cols-1),f<0&&(f=0),p>=this.rows&&(p=this.rows-1);for(let x=f;x<=p;x++){const m=this.z0+x*u,g=e<m?m-e:e>m+u?e-m-u:0,y=x*this.cols;for(let _=d;_<=h;_++){const b=y+_,S=this.cells[b];if(!(S===null||S.length===0)){if(c){const w=this.x0+_*u,A=t<w?w-t:t>w+u?t-w-u:0,E=n+this.cellR[b];if(A*A+g*g>E*E)continue}for(let w=0;w<S.length;w++){const A=S[w];if(o!==void 0&&A.type!==o)continue;const E=A.x-t,C=A.z-e,v=E*E+C*C,M=c?n+A.r:n;v>M*M||a!==void 0&&!a(A)||r(A,v)}}}}}forEachNear(t,e,n,s,r){this._scan(t,e,n,r,s)}nearest(t,e,n,s){return Vd=null,Gd=1/0,this._scan(t,e,n,s,mI),Vd}countNear(t,e,n,s){return Wd=0,this._scan(t,e,n,s,gI),Wd}}const Cr=new xI,_I={queryDisc(i,t,e,n,s){Cr.forEachNear(t,e,n,s,{type:i,reach:!0})}};function yI({grassFootprints:i,mushrooms:t,rocks:e,bounds:n}){if(Cr.reset(n),i)for(let s=0;s<i.length;s++){const r=i[s];Cr.add("grass",r.x,r.z,r.w,r)}if(t)for(const s of t)Cr.add("mushrooms",s.x,s.z,s.r||0,s);if(e)for(const s of e)Cr.add("rocks",s.x,s.z,s.r||0,s);return Cr.stats()}const vI=document.getElementById("app"),ls=sT(vI),Ln=rT(),Ze=new gf;Ze.background=new q(1709584);Ze.fog=new pa(1709584,40,220);const el=new Pf(12572917,7236152,.85);Ze.add(el);const cd={sky:new q(4873350),ground:new q(2367283),intensity:.55},Bn=qf,ri=$f,mg=new q,gg=new q,xg=new q,_g=new q,_o={sky:new q(Bn.hemiSky),ground:new q(Bn.hemiGround),fog:new q(Bn.fog),bg:new q(Bn.sky),sun:new q(Bn.sunColor)},yo={sky:new q(ri.hemiSky),ground:new q(ri.hemiGround),fog:new q(ri.fog),bg:new q(ri.sky),sun:new q(ri.sunColor)},Je=new Lf(Bn.sunColor,Bn.sunIntensity);Je.castShadow=!0;const Ca=110,Xd=2048,nl=220,Fc=2*Ca/Xd;Je.shadow.mapSize.set(Xd,Xd);Je.shadow.camera.left=-Ca;Je.shadow.camera.right=Ca;Je.shadow.camera.top=Ca;Je.shadow.camera.bottom=-Ca;Je.shadow.camera.near=1;Je.shadow.camera.far=nl*2.4;Je.shadow.bias=-.0015;Ze.add(Je);Ze.add(Je.target);function MI(i){const t=Math.round(i.position.x/Fc)*Fc,e=Math.round(i.position.z/Fc)*Fc,n=Ou();Je.target.position.set(t,0,e),Je.position.set(t+n[0]*nl,n[1]*nl,e+n[2]*nl)}const bI=new q(1645102),SI=new q(789270),to=ey();Ze.add(to.group);const $r=aI({scene:Ze,camera:Ln,domElement:ls.domElement});Ze.traverse(i=>{const t=Array.isArray(i.material)?i.material:i.material?[i.material]:[];for(const e of t)e.isMeshStandardMaterial&&wa(e)});window.__renderer=ls;window.__ant=$r.ant;window.__rooms=to.rooms;window.__camera=Ln;window.__scene=Ze;window.__nodes=Jn;window.__world=to;window.__contain=Du;window.__profileR=ln;window.__groundY=Zt;window.__tree=te;window.__world6={shadeAt:G_,canFoundAt:tp,foundNest:J_,nestOrigin:oa,getFoundedNest:Z_,populateNest:j_,sealNest:ty,harvestNode:Kf,get nodes(){return Jn},foundedMix:Aa,sunDir:Ou,waterDepthAt:zi,distanceToWater:mi,digFaces:aa,payDigFace:Fu,dugRooms:ep,nestFootprint:Q_,descentPath:ql,groundY:Zt,groundSlope:rr,THREE:nT};ls.setResizeCallback(i=>{Ln.aspect=i,Ln.updateProjectionMatrix()});const yg=new Nf;function By(){const i=Math.min(yg.getDelta(),.05),t=yg.elapsedTime;to.update(i,t,Ln),$r.update(i,t),$r.syncDigDial(i),ky(),ls.render(Ze,Ln),II.update(i)}const wI=52,AI=26;function vg(i,t,e){const n=1-et((e+24)/40,0,1),s=et(1-(Math.abs(i)-wI)/30,0,1),r=et(1-(t-AI)/30,0,1);return n*s*r}function EI(i,t){const e=Math.min(vg(i.x,i.y,i.z),vg(t.x,t.y,t.z)),n=Math.min(Id(i.x,i.y,i.z),Id(t.x,t.y,t.z));return Math.max(e,n)}const TI=6;let zc=null;function CI(){const i=performance.now()/1e3;zc===null&&oa()&&(zc=i),zc!==null&&V_(et((i-zc)/TI,0,1))}function ky(){CI();const i=Aa();mg.copy(_o.sky).lerp(yo.sky,i),gg.copy(_o.ground).lerp(yo.ground,i),xg.copy(_o.fog).lerp(yo.fog,i),_g.copy(_o.bg).lerp(yo.bg,i),Je.color.copy(_o.sun).lerp(yo.sun,i),Je.intensity=Ft(Bn.sunIntensity,ri.sunIntensity,i);const t=1-EI(Ln.position,$r.ant);Ze.fog.color.copy(bI).lerp(xg,t),Ze.fog.near=Ft(6,Ft(Bn.fogNear,ri.fogNear,i),t),Ze.fog.far=Ft(135,Ft(Bn.fogFar,ri.fogFar,i),t),Ze.background.copy(SI).lerp(_g,t),ls.toneMappingExposure=Ft(1.28,Ft(Bn.exposure,ri.exposure,i),t),el.color.copy(cd.sky).lerp(mg,t),el.groundColor.copy(cd.ground).lerp(gg,t),el.intensity=Ft(cd.intensity,Ft(Bn.hemiIntensity,ri.hemiIntensity,i),t),JC(t),MI(Ln)}const RI=yI({grassFootprints:to.grassFootprints,mushrooms:Kn,rocks:Pi,bounds:{x0:Ti.x0,x1:Ti.x1,z0:Ti.z0,z1:Ti.z1}}),PI=typeof location<"u"&&/[?&]nospatial=1/.test(location.search);PI||by(_I,"world");window.__spatial=()=>({...BR(),...RI});const II=dI({renderer:ls,sun:Je,scene:Ze});ls.setAnimationLoop(By);window.__frame=By;window.__renderView=(i,t,e=0)=>{Ln.position.set(i[0],i[1],i[2]),Ln.lookAt(t[0],t[1],t[2]),Ln.updateMatrixWorld(),to.update(1/60,e,Ln),$r.syncDigDial&&$r.syncDigDial(0),ky(),ls.render(Ze,Ln)};
