(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ql="169",Hy={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Gy={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vg=0,fd=1,Mg=2,Vy=3,Wy=0,Kd=1,Jd=2,ti=3,Pi=0,Ke=1,_e=2,Ti=0,Os=1,il=2,pd=3,md=4,bg=5,Ji=100,Sg=101,wg=102,Ag=103,Eg=104,Tg=200,Cg=201,Rg=202,Pg=203,sl=204,rl=205,Ig=206,Lg=207,Dg=208,Ng=209,Ug=210,Og=211,Fg=212,zg=213,Bg=214,ol=0,al=1,cl=2,Gs=3,ll=4,ul=5,hl=6,dl=7,la=0,kg=1,Hg=2,Ci=0,Gg=1,Vg=2,Wg=3,Qd=4,Xg=5,Yg=6,qg=7,gd="attached",$g="detached",jl=300,Ii=301,ns=302,Go=303,Vo=304,$r=306,Br=1e3,zn=1001,Wo=1002,ke=1003,jd=1004,Xy=1004,Tr=1005,Yy=1005,Le=1006,So=1007,qy=1007,si=1008,$y=1008,ci=1009,tf=1010,ef=1011,kr=1012,tu=1013,Li=1014,vn=1015,Zr=1016,eu=1017,nu=1018,Vs=1020,nf=35902,sf=1021,rf=1022,rn=1023,of=1024,af=1025,Fs=1026,Ws=1027,iu=1028,ua=1029,cf=1030,su=1031,Zy=1032,ru=1033,wo=33776,Ao=33777,Eo=33778,To=33779,fl=35840,pl=35841,ml=35842,gl=35843,_l=36196,xl=37492,yl=37496,vl=37808,Ml=37809,bl=37810,Sl=37811,wl=37812,Al=37813,El=37814,Tl=37815,Cl=37816,Rl=37817,Pl=37818,Il=37819,Ll=37820,Dl=37821,Co=36492,Nl=36494,Ul=36495,lf=36283,Ol=36284,Fl=36285,zl=36286,Zg=2200,Kg=2201,Jg=2202,Xo=2300,Bl=2301,Bc=2302,Ps=2400,Is=2401,Yo=2402,ou=2500,uf=2501,Ky=0,Jy=1,Qy=2,Qg=3200,hf=3201,jy=3202,tv=3203,os=0,jg=1,bi="",mn="srgb",Oi="srgb-linear",au="display-p3",ha="display-p3-linear",qo="linear",me="srgb",$o="rec709",Zo="p3",ev=0,Ss=7680,nv=7681,iv=7682,sv=7683,rv=34055,ov=34056,av=5386,cv=512,lv=513,uv=514,hv=515,dv=516,fv=517,pv=518,_d=519,t_=512,e_=513,n_=514,df=515,i_=516,s_=517,r_=518,o_=519,Ko=35044,a_=35048,mv=35040,gv=35045,_v=35049,xv=35041,yv=35046,vv=35050,Mv=35042,bv="100",xd="300 es",ri=2e3,Jo=2001;class li{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _p=1234567;const zs=Math.PI/180,Hr=180/Math.PI;function Pn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function we(i,t,e){return Math.max(t,Math.min(e,i))}function ff(i,t){return(i%t+t)%t}function Sv(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function wv(i,t,e){return i!==t?(e-i)/(t-i):0}function Ro(i,t,e){return(1-e)*i+e*t}function Av(i,t,e,n){return Ro(i,t,1-Math.exp(-e*n))}function Ev(i,t=1){return t-Math.abs(ff(i,t*2)-t)}function Tv(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Cv(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Rv(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Pv(i,t){return i+Math.random()*(t-i)}function Iv(i){return i*(.5-Math.random())}function Lv(i){i!==void 0&&(_p=i);let t=_p+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Dv(i){return i*zs}function Nv(i){return i*Hr}function Uv(i){return(i&i-1)===0&&i!==0}function Ov(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Fv(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zv(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),p=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*p,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*p,a*l);break;case"ZYZ":i.set(c*p,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function sn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $t(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Bv={DEG2RAD:zs,RAD2DEG:Hr,generateUUID:Pn,clamp:we,euclideanModulo:ff,mapLinear:Sv,inverseLerp:wv,lerp:Ro,damp:Av,pingpong:Ev,smoothstep:Tv,smootherstep:Cv,randInt:Rv,randFloat:Pv,randFloatSpread:Iv,seededRandom:Lv,degToRad:Dv,radToDeg:Nv,isPowerOfTwo:Uv,ceilPowerOfTwo:Ov,floorPowerOfTwo:Fv,setQuaternionFromProperEuler:zv,normalize:$t,denormalize:sn};class et{constructor(t=0,e=0){et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,n,s,r,o,a,c,l){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],_=s[0],g=s[3],m=s[6],v=s[1],x=s[4],b=s[7],S=s[2],w=s[5],A=s[8];return r[0]=o*_+a*v+c*S,r[3]=o*g+a*x+c*w,r[6]=o*m+a*b+c*A,r[1]=l*_+u*v+h*S,r[4]=l*g+u*x+h*w,r[7]=l*m+u*b+h*A,r[2]=d*_+f*v+p*S,r[5]=d*g+f*x+p*w,r[8]=d*m+f*b+p*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,p=e*h+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=h*_,t[1]=(s*l-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Yu.makeScale(t,e)),this}rotate(t){return this.premultiply(Yu.makeRotation(-t)),this}translate(t,e){return this.premultiply(Yu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Yu=new qt;function c_(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}const kv={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Cr(i,t){return new kv[i](t)}function Qo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function l_(){const i=Qo("canvas");return i.style.display="block",i}const xp={};function kc(i){i in xp||(xp[i]=!0,console.warn(i))}function Hv(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Gv(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Vv(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const yp=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vp=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),eo={[Oi]:{transfer:qo,primaries:$o,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[mn]:{transfer:me,primaries:$o,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ha]:{transfer:qo,primaries:Zo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(vp),fromReference:i=>i.applyMatrix3(yp)},[au]:{transfer:me,primaries:Zo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(vp),fromReference:i=>i.applyMatrix3(yp).convertLinearToSRGB()}},Wv=new Set([Oi,ha]),se={enabled:!0,_workingColorSpace:Oi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Wv.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=eo[t].toReference,s=eo[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return eo[i].primaries},getTransfer:function(i){return i===bi?qo:eo[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(eo[t].luminanceCoefficients)}};function Nr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qu(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let rr;class u_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{rr===void 0&&(rr=Qo("canvas")),rr.width=t.width,rr.height=t.height;const n=rr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=rr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Nr(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Nr(e[n]/255)*255):e[n]=Nr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Xv=0;class Ls{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=Pn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($u(s[o].image)):r.push($u(s[o]))}else r=$u(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function $u(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?u_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yv=0;class Ae extends li{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=zn,s=zn,r=Le,o=si,a=rn,c=ci,l=Ae.DEFAULT_ANISOTROPY,u=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=Pn(),this.name="",this.source=new Ls(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Br:t.x=t.x-Math.floor(t.x);break;case zn:t.x=t.x<0?0:1;break;case Wo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Br:t.y=t.y-Math.floor(t.y);break;case zn:t.y=t.y<0?0:1;break;case Wo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=jl;Ae.DEFAULT_ANISOTROPY=1;class Jt{constructor(t=0,e=0,n=0,s=1){Jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],p=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,b=(f+1)/2,S=(m+1)/2,w=(u+d)/4,A=(h+_)/4,E=(p+g)/4;return x>b&&x>S?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=w/n,r=A/n):b>S?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=w/s,r=E/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=A/r,s=E/r),this.set(n,s,r,e),this}let v=Math.sqrt((g-p)*(g-p)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(h-_)/v,this.z=(d-u)/v,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class h_ extends li{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Jt(0,0,t,e),this.scissorTest=!1,this.viewport=new Jt(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Le,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ae(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ls(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends h_{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class cu extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qv extends Kn{constructor(t=1,e=1,n=1,s={}){super(t,e,s),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new cu(null,t,e,n),this.texture.isRenderTargetTexture=!0}}class pf extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $v extends Kn{constructor(t=1,e=1,n=1,s={}){super(t,e,s),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new pf(null,t,e,n),this.texture.isRenderTargetTexture=!0}}class an{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],f=r[o+1],p=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=_;return}if(h!==_||c!==d||l!==f||u!==p){let g=1-a;const m=c*d+l*f+u*p+h*_,v=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const S=Math.sqrt(x),w=Math.atan2(S,m*v);g=Math.sin(g*w)/S,a=Math.sin(a*w)/S}const b=a*v;if(c=c*g+d*b,l=l*g+f*b,u=u*g+p*b,h=h*g+_*b,g===1-a){const S=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=S,l*=S,u*=S,h*=S}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+u*h+c*f-l*d,t[e+1]=c*p+u*d+l*h-a*f,t[e+2]=l*p+u*f+a*d-c*h,t[e+3]=u*p-a*h-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),f=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"YZX":this._x=d*u*h+l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h-d*f*p;break;case"XZY":this._x=d*u*h-l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mp.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zu.copy(this).projectOnVector(t),this.sub(Zu)}reflect(t){return this.sub(Zu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zu=new I,Mp=new an;class cn{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Vn):Vn.fromBufferAttribute(r,o),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ia.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ia.copy(n.boundingBox)),Ia.applyMatrix4(t.matrixWorld),this.union(Ia)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(no),La.subVectors(this.max,no),or.subVectors(t.a,no),ar.subVectors(t.b,no),cr.subVectors(t.c,no),ki.subVectors(ar,or),Hi.subVectors(cr,ar),hs.subVectors(or,cr);let e=[0,-ki.z,ki.y,0,-Hi.z,Hi.y,0,-hs.z,hs.y,ki.z,0,-ki.x,Hi.z,0,-Hi.x,hs.z,0,-hs.x,-ki.y,ki.x,0,-Hi.y,Hi.x,0,-hs.y,hs.x,0];return!Ku(e,or,ar,cr,La)||(e=[1,0,0,0,1,0,0,0,1],!Ku(e,or,ar,cr,La))?!1:(Da.crossVectors(ki,Hi),e=[Da.x,Da.y,Da.z],Ku(e,or,ar,cr,La))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pi=[new I,new I,new I,new I,new I,new I,new I,new I],Vn=new I,Ia=new cn,or=new I,ar=new I,cr=new I,ki=new I,Hi=new I,hs=new I,no=new I,La=new I,Da=new I,ds=new I;function Ku(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ds.fromArray(i,r);const a=s.x*Math.abs(ds.x)+s.y*Math.abs(ds.y)+s.z*Math.abs(ds.z),c=t.dot(ds),l=e.dot(ds),u=n.dot(ds);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Zv=new cn,io=new I,Ju=new I;class Ge{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Zv.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;io.subVectors(t,this.center);const e=io.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(io,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ju.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(io.copy(t.center).add(Ju)),this.expandByPoint(io.copy(t.center).sub(Ju))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new I,Qu=new I,Na=new I,Gi=new I,ju=new I,Ua=new I,th=new I;class Kr{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mi.copy(this.origin).addScaledVector(this.direction,e),mi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Qu.copy(t).add(e).multiplyScalar(.5),Na.copy(e).sub(t).normalize(),Gi.copy(this.origin).sub(Qu);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Na),a=Gi.dot(this.direction),c=-Gi.dot(Na),l=Gi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,p;if(u>0)if(h=o*c-a,d=o*a-c,p=r*u,h>=0)if(d>=-p)if(d<=p){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-p?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=p?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Qu).addScaledVector(Na,d),f}intersectSphere(t,e){mi.subVectors(t.center,this.origin);const n=mi.dot(this.direction),s=mi.dot(mi)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,mi)!==null}intersectTriangle(t,e,n,s,r){ju.subVectors(e,t),Ua.subVectors(n,t),th.crossVectors(ju,Ua);let o=this.direction.dot(th),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gi.subVectors(this.origin,t);const c=a*this.direction.dot(Ua.crossVectors(Gi,Ua));if(c<0)return null;const l=a*this.direction.dot(ju.cross(Gi));if(l<0||c+l>o)return null;const u=-a*Gi.dot(th);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(t,e,n,s,r,o,a,c,l,u,h,d,f,p,_,g){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,h,d,f,p,_,g)}set(t,e,n,s,r,o,a,c,l,u,h,d,f,p,_,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/lr.setFromMatrixColumn(t,0).length(),r=1/lr.setFromMatrixColumn(t,1).length(),o=1/lr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,f=o*h,p=a*u,_=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=f+p*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=p+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,f=c*h,p=l*u,_=l*h;e[0]=d+_*a,e[4]=p*a-f,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-p,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,f=c*h,p=l*u,_=l*h;e[0]=d-_*a,e[4]=-o*h,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,f=o*h,p=a*u,_=a*h;e[0]=c*u,e[4]=p*l-f,e[8]=d*l+_,e[1]=c*h,e[5]=_*l+d,e[9]=f*l-p,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,p=a*c,_=a*l;e[0]=c*u,e[4]=_-d*h,e[8]=p*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*h+p,e[10]=d-_*h}else if(t.order==="XZY"){const d=o*c,f=o*l,p=a*c,_=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+_,e[5]=o*u,e[9]=f*h-p,e[2]=p*h-f,e[6]=a*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kv,t,Jv)}lookAt(t,e,n){const s=this.elements;return En.subVectors(t,e),En.lengthSq()===0&&(En.z=1),En.normalize(),Vi.crossVectors(n,En),Vi.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Vi.crossVectors(n,En)),Vi.normalize(),Oa.crossVectors(En,Vi),s[0]=Vi.x,s[4]=Oa.x,s[8]=En.x,s[1]=Vi.y,s[5]=Oa.y,s[9]=En.y,s[2]=Vi.z,s[6]=Oa.z,s[10]=En.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],v=n[3],x=n[7],b=n[11],S=n[15],w=s[0],A=s[4],E=s[8],C=s[12],y=s[1],M=s[5],P=s[9],U=s[13],O=s[2],G=s[6],z=s[10],F=s[14],N=s[3],W=s[7],Q=s[11],rt=s[15];return r[0]=o*w+a*y+c*O+l*N,r[4]=o*A+a*M+c*G+l*W,r[8]=o*E+a*P+c*z+l*Q,r[12]=o*C+a*U+c*F+l*rt,r[1]=u*w+h*y+d*O+f*N,r[5]=u*A+h*M+d*G+f*W,r[9]=u*E+h*P+d*z+f*Q,r[13]=u*C+h*U+d*F+f*rt,r[2]=p*w+_*y+g*O+m*N,r[6]=p*A+_*M+g*G+m*W,r[10]=p*E+_*P+g*z+m*Q,r[14]=p*C+_*U+g*F+m*rt,r[3]=v*w+x*y+b*O+S*N,r[7]=v*A+x*M+b*G+S*W,r[11]=v*E+x*P+b*z+S*Q,r[15]=v*C+x*U+b*F+S*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],f=t[14],p=t[3],_=t[7],g=t[11],m=t[15];return p*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*u-r*c*u)+g*(+e*l*h-e*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+m*(-s*a*u-e*c*h+e*a*d+s*o*h-n*o*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],f=t[11],p=t[12],_=t[13],g=t[14],m=t[15],v=h*g*l-_*d*l+_*c*f-a*g*f-h*c*m+a*d*m,x=p*d*l-u*g*l-p*c*f+o*g*f+u*c*m-o*d*m,b=u*_*l-p*h*l+p*a*f-o*_*f-u*a*m+o*h*m,S=p*h*c-u*_*c-p*a*d+o*_*d+u*a*g-o*h*g,w=e*v+n*x+s*b+r*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=v*A,t[1]=(_*d*r-h*g*r-_*s*f+n*g*f+h*s*m-n*d*m)*A,t[2]=(a*g*r-_*c*r+_*s*l-n*g*l-a*s*m+n*c*m)*A,t[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*f-n*c*f)*A,t[4]=x*A,t[5]=(u*g*r-p*d*r+p*s*f-e*g*f-u*s*m+e*d*m)*A,t[6]=(p*c*r-o*g*r-p*s*l+e*g*l+o*s*m-e*c*m)*A,t[7]=(o*d*r-u*c*r+u*s*l-e*d*l-o*s*f+e*c*f)*A,t[8]=b*A,t[9]=(p*h*r-u*_*r-p*n*f+e*_*f+u*n*m-e*h*m)*A,t[10]=(o*_*r-p*a*r+p*n*l-e*_*l-o*n*m+e*a*m)*A,t[11]=(u*a*r-o*h*r-u*n*l+e*h*l+o*n*f-e*a*f)*A,t[12]=S*A,t[13]=(u*_*s-p*h*s+p*n*d-e*_*d-u*n*g+e*h*g)*A,t[14]=(p*a*s-o*_*s-p*n*c+e*_*c+o*n*g-e*a*g)*A,t[15]=(o*h*s-u*a*s+u*n*c-e*h*c-o*n*d+e*a*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,p=r*h,_=o*u,g=o*h,m=a*h,v=c*l,x=c*u,b=c*h,S=n.x,w=n.y,A=n.z;return s[0]=(1-(_+m))*S,s[1]=(f+b)*S,s[2]=(p-x)*S,s[3]=0,s[4]=(f-b)*w,s[5]=(1-(d+m))*w,s[6]=(g+v)*w,s[7]=0,s[8]=(p+x)*A,s[9]=(g-v)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=lr.set(s[0],s[1],s[2]).length();const o=lr.set(s[4],s[5],s[6]).length(),a=lr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Wn.copy(this);const l=1/r,u=1/o,h=1/a;return Wn.elements[0]*=l,Wn.elements[1]*=l,Wn.elements[2]*=l,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=h,Wn.elements[9]*=h,Wn.elements[10]*=h,e.setFromRotationMatrix(Wn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ri){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let f,p;if(a===ri)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===Jo)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ri){const c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(o-r),d=(e+t)*l,f=(n+s)*u;let p,_;if(a===ri)p=(o+r)*h,_=-2*h;else if(a===Jo)p=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const lr=new I,Wn=new Nt,Kv=new I(0,0,0),Jv=new I(1,1,1),Vi=new I,Oa=new I,En=new I,bp=new Nt,Sp=new an;class bn{constructor(t=0,e=0,n=0,s=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-we(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(we(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sp.setFromEuler(this),this.setFromQuaternion(Sp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class lu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Qv=0;const wp=new I,ur=new an,gi=new Nt,Fa=new I,so=new I,jv=new I,tM=new an,Ap=new I(1,0,0),Ep=new I(0,1,0),Tp=new I(0,0,1),Cp={type:"added"},eM={type:"removed"},hr={type:"childadded",child:null},eh={type:"childremoved",child:null};class ie extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ie.DEFAULT_UP.clone();const t=new I,e=new bn,n=new an,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Nt},normalMatrix:{value:new qt}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ur.setFromAxisAngle(t,e),this.quaternion.multiply(ur),this}rotateOnWorldAxis(t,e){return ur.setFromAxisAngle(t,e),this.quaternion.premultiply(ur),this}rotateX(t){return this.rotateOnAxis(Ap,t)}rotateY(t){return this.rotateOnAxis(Ep,t)}rotateZ(t){return this.rotateOnAxis(Tp,t)}translateOnAxis(t,e){return wp.copy(t).applyQuaternion(this.quaternion),this.position.add(wp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ap,t)}translateY(t){return this.translateOnAxis(Ep,t)}translateZ(t){return this.translateOnAxis(Tp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fa.copy(t):Fa.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),so.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(so,Fa,this.up):gi.lookAt(Fa,so,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),ur.setFromRotationMatrix(gi),this.quaternion.premultiply(ur.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cp),hr.child=t,this.dispatchEvent(hr),hr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(eM),eh.child=t,this.dispatchEvent(eh),eh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cp),hr.child=t,this.dispatchEvent(hr),hr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,t,jv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,tM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ie.DEFAULT_UP=new I(0,1,0);ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new I,_i=new I,nh=new I,xi=new I,dr=new I,fr=new I,Rp=new I,ih=new I,sh=new I,rh=new I,oh=new Jt,ah=new Jt,ch=new Jt;class yn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Xn.subVectors(t,e),s.cross(Xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Xn.subVectors(s,e),_i.subVectors(n,e),nh.subVectors(t,e);const o=Xn.dot(Xn),a=Xn.dot(_i),c=Xn.dot(nh),l=_i.dot(_i),u=_i.dot(nh),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,p=(o*u-a*c)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,xi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,xi.x),c.addScaledVector(o,xi.y),c.addScaledVector(a,xi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return oh.setScalar(0),ah.setScalar(0),ch.setScalar(0),oh.fromBufferAttribute(t,e),ah.fromBufferAttribute(t,n),ch.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(oh,r.x),o.addScaledVector(ah,r.y),o.addScaledVector(ch,r.z),o}static isFrontFacing(t,e,n,s){return Xn.subVectors(n,e),_i.subVectors(t,e),Xn.cross(_i).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Xn.cross(_i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return yn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;dr.subVectors(s,n),fr.subVectors(r,n),ih.subVectors(t,n);const c=dr.dot(ih),l=fr.dot(ih);if(c<=0&&l<=0)return e.copy(n);sh.subVectors(t,s);const u=dr.dot(sh),h=fr.dot(sh);if(u>=0&&h<=u)return e.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(dr,o);rh.subVectors(t,r);const f=dr.dot(rh),p=fr.dot(rh);if(p>=0&&f<=p)return e.copy(r);const _=f*l-c*p;if(_<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(fr,a);const g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return Rp.subVectors(r,s),a=(h-u)/(h-u+(f-p)),e.copy(s).addScaledVector(Rp,a);const m=1/(g+_+d);return o=_*m,a=d*m,e.copy(n).addScaledVector(dr,o).addScaledVector(fr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const d_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},za={h:0,s:0,l:0};function lh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class q{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=ff(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=lh(o,r,t+1/3),this.g=lh(o,r,t),this.b=lh(o,r,t-1/3)}return se.toWorkingColorSpace(this,s),this}setStyle(t,e=mn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mn){const n=d_[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Nr(t.r),this.g=Nr(t.g),this.b=Nr(t.b),this}copyLinearToSRGB(t){return this.r=qu(t.r),this.g=qu(t.g),this.b=qu(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mn){return se.fromWorkingColorSpace(Ye.copy(this),t),Math.round(we(Ye.r*255,0,255))*65536+Math.round(we(Ye.g*255,0,255))*256+Math.round(we(Ye.b*255,0,255))}getHexString(t=mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(Ye.copy(this),e);const n=Ye.r,s=Ye.g,r=Ye.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=mn){se.fromWorkingColorSpace(Ye.copy(this),t);const e=Ye.r,n=Ye.g,s=Ye.b;return t!==mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Wi),this.setHSL(Wi.h+t,Wi.s+e,Wi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wi),t.getHSL(za);const n=Ro(Wi.h,za.h,e),s=Ro(Wi.s,za.s,e),r=Ro(Wi.l,za.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ye=new q;q.NAMES=d_;let nM=0;class Qe extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=Os,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sl,this.blendDst=rl,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new q(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_d,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(n.blending=this.blending),this.side!==Pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sl&&(n.blendSrc=this.blendSrc),this.blendDst!==rl&&(n.blendDst=this.blendDst),this.blendEquation!==Ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_d&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ui extends Qe{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=la,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Si=iM();function iM(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;!(l&8388608);)l<<=1,u-=8388608;l&=-8388609,u+=947912704,r[c]=l|u}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function pn(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=we(i,-65504,65504),Si.floatView[0]=i;const t=Si.uint32View[0],e=t>>23&511;return Si.baseTable[e]+((t&8388607)>>Si.shiftTable[e])}function vo(i){const t=i>>10;return Si.uint32View[0]=Si.mantissaTable[Si.offsetTable[t]+(i&1023)]+Si.exponentTable[t],Si.floatView[0]}const sM={toHalfFloat:pn,fromHalfFloat:vo},Ie=new I,Ba=new et;class he{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ko,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ba.fromBufferAttribute(this,e),Ba.applyMatrix3(t),this.setXY(e,Ba.x,Ba.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$t(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=sn(e,this.array)),e}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=sn(e,this.array)),e}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=sn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=sn(e,this.array)),e}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ko&&(t.usage=this.usage),t}}class rM extends he{constructor(t,e,n){super(new Int8Array(t),e,n)}}class oM extends he{constructor(t,e,n){super(new Uint8Array(t),e,n)}}class aM extends he{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}}class cM extends he{constructor(t,e,n){super(new Int16Array(t),e,n)}}class mf extends he{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class lM extends he{constructor(t,e,n){super(new Int32Array(t),e,n)}}class gf extends he{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class uM extends he{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=vo(this.array[t*this.itemSize]);return this.normalized&&(e=sn(e,this.array)),e}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize]=pn(e),this}getY(t){let e=vo(this.array[t*this.itemSize+1]);return this.normalized&&(e=sn(e,this.array)),e}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+1]=pn(e),this}getZ(t){let e=vo(this.array[t*this.itemSize+2]);return this.normalized&&(e=sn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+2]=pn(e),this}getW(t){let e=vo(this.array[t*this.itemSize+3]);return this.normalized&&(e=sn(e,this.array)),e}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+3]=pn(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.array[t+0]=pn(e),this.array[t+1]=pn(n),this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.array[t+0]=pn(e),this.array[t+1]=pn(n),this.array[t+2]=pn(s),this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.array[t+0]=pn(e),this.array[t+1]=pn(n),this.array[t+2]=pn(s),this.array[t+3]=pn(r),this}}class xt extends he{constructor(t,e,n){super(new Float32Array(t),e,n)}}let hM=0;const Dn=new Nt,uh=new ie,pr=new I,Tn=new cn,ro=new cn,ze=new I;class Xt extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(c_(t)?gf:mf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,n){return Dn.makeTranslation(t,e,n),this.applyMatrix4(Dn),this}scale(t,e,n){return Dn.makeScale(t,e,n),this.applyMatrix4(Dn),this}lookAt(t){return uh.lookAt(t),uh.updateMatrix(),this.applyMatrix4(uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new xt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ge);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ro.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(Tn.min,ro.min),Tn.expandByPoint(ze),ze.addVectors(Tn.max,ro.max),Tn.expandByPoint(ze)):(Tn.expandByPoint(ro.min),Tn.expandByPoint(ro.max))}Tn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ze.fromBufferAttribute(a,l),c&&(pr.fromBufferAttribute(t,l),ze.add(pr)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new he(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let E=0;E<n.count;E++)a[E]=new I,c[E]=new I;const l=new I,u=new I,h=new I,d=new et,f=new et,p=new et,_=new I,g=new I;function m(E,C,y){l.fromBufferAttribute(n,E),u.fromBufferAttribute(n,C),h.fromBufferAttribute(n,y),d.fromBufferAttribute(r,E),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,y),u.sub(l),h.sub(l),f.sub(d),p.sub(d);const M=1/(f.x*p.y-p.x*f.y);isFinite(M)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(M),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(M),a[E].add(_),a[C].add(_),a[y].add(_),c[E].add(g),c[C].add(g),c[y].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let E=0,C=v.length;E<C;++E){const y=v[E],M=y.start,P=y.count;for(let U=M,O=M+P;U<O;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const x=new I,b=new I,S=new I,w=new I;function A(E){S.fromBufferAttribute(s,E),w.copy(S);const C=a[E];x.copy(C),x.sub(S.multiplyScalar(S.dot(C))).normalize(),b.crossVectors(w,C);const M=b.dot(c[E])<0?-1:1;o.setXYZW(E,x.x,x.y,x.z,M)}for(let E=0,C=v.length;E<C;++E){const y=v[E],M=y.start,P=y.count;for(let U=M,O=M+P;U<O;U+=3)A(t.getX(U+0)),A(t.getX(U+1)),A(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new he(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,u=new I,h=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){const p=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,p=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let m=0;m<u;m++)d[p++]=l[f++]}return new he(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Xt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pp=new Nt,fs=new Kr,ka=new Ge,Ip=new I,Ha=new I,Ga=new I,Va=new I,hh=new I,Wa=new I,Lp=new I,Xa=new I;class Wt extends ie{constructor(t=new Xt,e=new ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Wa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(hh.fromBufferAttribute(h,t),o?Wa.addScaledVector(hh,u):Wa.addScaledVector(hh.sub(e),u))}e.add(Wa)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(r),fs.copy(t.ray).recast(t.near),!(ka.containsPoint(fs.origin)===!1&&(fs.intersectSphere(ka,Ip)===null||fs.origin.distanceToSquared(Ip)>(t.far-t.near)**2))&&(Pp.copy(r).invert(),fs.copy(t.ray).applyMatrix4(Pp),!(n.boundingBox!==null&&fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fs)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=o[g.materialIndex],v=Math.max(g.start,f.start),x=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let b=v,S=x;b<S;b+=3){const w=a.getX(b),A=a.getX(b+1),E=a.getX(b+2);s=Ya(this,m,t,n,l,u,h,w,A,E),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const v=a.getX(g),x=a.getX(g+1),b=a.getX(g+2);s=Ya(this,o,t,n,l,u,h,v,x,b),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=o[g.materialIndex],v=Math.max(g.start,f.start),x=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let b=v,S=x;b<S;b+=3){const w=b,A=b+1,E=b+2;s=Ya(this,m,t,n,l,u,h,w,A,E),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const v=g,x=g+1,b=g+2;s=Ya(this,o,t,n,l,u,h,v,x,b),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function dM(i,t,e,n,s,r,o,a){let c;if(t.side===Ke?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Pi,a),c===null)return null;Xa.copy(a),Xa.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Xa);return l<e.near||l>e.far?null:{distance:l,point:Xa.clone(),object:i}}function Ya(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Ha),i.getVertexPosition(c,Ga),i.getVertexPosition(l,Va);const u=dM(i,t,e,n,Ha,Ga,Va,Lp);if(u){const h=new I;yn.getBarycoord(Lp,Ha,Ga,Va,h),s&&(u.uv=yn.getInterpolatedAttribute(s,a,c,l,h,new et)),r&&(u.uv1=yn.getInterpolatedAttribute(r,a,c,l,h,new et)),o&&(u.normal=yn.getInterpolatedAttribute(o,a,c,l,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new I,materialIndex:0};yn.getNormal(Ha,Ga,Va,d.normal),u.face=d,u.barycoord=h}return u}class Ks extends Xt{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(h,2));function p(_,g,m,v,x,b,S,w,A,E,C){const y=b/A,M=S/E,P=b/2,U=S/2,O=w/2,G=A+1,z=E+1;let F=0,N=0;const W=new I;for(let Q=0;Q<z;Q++){const rt=Q*M-U;for(let bt=0;bt<G;bt++){const Rt=bt*y-P;W[_]=Rt*v,W[g]=rt*x,W[m]=O,l.push(W.x,W.y,W.z),W[_]=0,W[g]=0,W[m]=w>0?1:-1,u.push(W.x,W.y,W.z),h.push(bt/A),h.push(1-Q/E),F+=1}}for(let Q=0;Q<E;Q++)for(let rt=0;rt<A;rt++){const bt=d+rt+G*Q,Rt=d+rt+G*(Q+1),$=d+(rt+1)+G*(Q+1),tt=d+(rt+1)+G*Q;c.push(bt,Rt,tt),c.push(Rt,$,tt),N+=6}a.addGroup(f,N,C),f+=N,d+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ks(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function en(i){const t={};for(let e=0;e<i.length;e++){const n=Gr(i[e]);for(const s in n)t[s]=n[s]}return t}function fM(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function f_(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const p_={clone:Gr,merge:en};var pM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends Qe{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pM,this.fragmentShader=mM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gr(t.uniforms),this.uniformsGroups=fM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class uu extends ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xi=new I,Dp=new et,Np=new et;class Be extends uu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Hr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hr*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xi.x,Xi.y).multiplyScalar(-t/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xi.x,Xi.y).multiplyScalar(-t/Xi.z)}getViewSize(t,e){return this.getViewBounds(t,Dp,Np),e.subVectors(Np,Dp)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const mr=-90,gr=1;class m_ extends ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Be(mr,gr,t,e);s.layers=this.layers,this.add(s);const r=new Be(mr,gr,t,e);r.layers=this.layers,this.add(r);const o=new Be(mr,gr,t,e);o.layers=this.layers,this.add(o);const a=new Be(mr,gr,t,e);a.layers=this.layers,this.add(a);const c=new Be(mr,gr,t,e);c.layers=this.layers,this.add(c);const l=new Be(mr,gr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Jo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class da extends Ae{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Ii,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class g_ extends Kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new da(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Le}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ks(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:Gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:Ti});r.uniforms.tEquirect.value=e;const o=new Wt(s,r),a=e.minFilter;return e.minFilter===si&&(e.minFilter=Le),new m_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const dh=new I,gM=new I,_M=new qt;class Zi{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=dh.subVectors(n,e).cross(gM.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(dh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||_M.getNormalMatrix(t),s=this.coplanarPoint(dh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new Ge,qa=new I;class fa{constructor(t=new Zi,e=new Zi,n=new Zi,s=new Zi,r=new Zi,o=new Zi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ri){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],p=s[9],_=s[10],g=s[11],m=s[12],v=s[13],x=s[14],b=s[15];if(n[0].setComponents(c-r,d-l,g-f,b-m).normalize(),n[1].setComponents(c+r,d+l,g+f,b+m).normalize(),n[2].setComponents(c+o,d+u,g+p,b+v).normalize(),n[3].setComponents(c-o,d-u,g-p,b-v).normalize(),n[4].setComponents(c-a,d-h,g-_,b-x).normalize(),e===ri)n[5].setComponents(c+a,d+h,g+_,b+x).normalize();else if(e===Jo)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(t){return ps.center.set(0,0,0),ps.radius=.7071067811865476,ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(qa.x=s.normal.x>0?t.max.x:t.min.x,qa.y=s.normal.y>0?t.max.y:t.min.y,qa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function __(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function xM(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){const p=h[d],_=h[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){const _=h[f];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Js extends Xt{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=t/a,d=e/c,f=[],p=[],_=[],g=[];for(let m=0;m<u;m++){const v=m*d-o;for(let x=0;x<l;x++){const b=x*h-r;p.push(b,-v,0),_.push(0,0,1),g.push(x/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<a;v++){const x=v+l*m,b=v+l*(m+1),S=v+1+l*(m+1),w=v+1+l*m;f.push(x,b,w),f.push(b,S,w)}this.setIndex(f),this.setAttribute("position",new xt(p,3)),this.setAttribute("normal",new xt(_,3)),this.setAttribute("uv",new xt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Js(t.width,t.height,t.widthSegments,t.heightSegments)}}var yM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vM=`#ifdef USE_ALPHAHASH
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
#endif`,MM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AM=`#ifdef USE_AOMAP
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
#endif`,EM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TM=`#ifdef USE_BATCHING
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
#endif`,CM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,RM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,IM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,LM=`#ifdef USE_IRIDESCENCE
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
#endif`,DM=`#ifdef USE_BUMPMAP
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
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,BM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,GM=`#define PI 3.141592653589793
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
} // validated`,VM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,WM=`vec3 transformedNormal = objectNormal;
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
#endif`,XM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$M=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZM="gl_FragColor = linearToOutputTexel( gl_FragColor );",KM=`
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
}`,JM=`#ifdef USE_ENVMAP
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
#endif`,QM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jM=`#ifdef USE_ENVMAP
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
#endif`,t1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e1=`#ifdef USE_ENVMAP
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
#endif`,n1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,i1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,s1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o1=`#ifdef USE_GRADIENTMAP
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
}`,a1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,c1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u1=`uniform bool receiveShadow;
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
#endif`,h1=`#ifdef USE_ENVMAP
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
#endif`,d1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g1=`PhysicalMaterial material;
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
#endif`,_1=`struct PhysicalMaterial {
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
}`,x1=`
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
#endif`,y1=`#if defined( RE_IndirectDiffuse )
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
#endif`,v1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,b1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,C1=`#if defined( USE_POINTS_UV )
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
#endif`,R1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N1=`#ifdef USE_MORPHTARGETS
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
#endif`,U1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,F1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,H1=`#ifdef USE_NORMALMAP
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
#endif`,G1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Y1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Z1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,K1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Q1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ib=`float getShadowMask() {
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
}`,sb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rb=`#ifdef USE_SKINNING
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
#endif`,ob=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ab=`#ifdef USE_SKINNING
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
#endif`,cb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ub=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,db=`#ifdef USE_TRANSMISSION
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
#endif`,fb=`#ifdef USE_TRANSMISSION
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
#endif`,pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_b=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yb=`uniform sampler2D t2D;
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
}`,vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wb=`#include <common>
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
}`,Ab=`#if DEPTH_PACKING == 3200
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
}`,Eb=`#define DISTANCE
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
}`,Tb=`#define DISTANCE
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
}`,Cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pb=`uniform float scale;
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
}`,Ib=`uniform vec3 diffuse;
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
}`,Lb=`#include <common>
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
}`,Db=`uniform vec3 diffuse;
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
}`,Nb=`#define LAMBERT
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
}`,Ub=`#define LAMBERT
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
}`,Ob=`#define MATCAP
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
}`,Fb=`#define MATCAP
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
}`,zb=`#define NORMAL
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
}`,Bb=`#define NORMAL
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
}`,kb=`#define PHONG
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
}`,Hb=`#define PHONG
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
}`,Gb=`#define STANDARD
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
}`,Vb=`#define STANDARD
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
}`,Wb=`#define TOON
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
}`,Xb=`#define TOON
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
}`,Yb=`uniform float size;
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
}`,qb=`uniform vec3 diffuse;
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
}`,$b=`#include <common>
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
}`,Zb=`uniform vec3 color;
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
}`,Kb=`uniform float rotation;
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
}`,Jb=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:yM,alphahash_pars_fragment:vM,alphamap_fragment:MM,alphamap_pars_fragment:bM,alphatest_fragment:SM,alphatest_pars_fragment:wM,aomap_fragment:AM,aomap_pars_fragment:EM,batching_pars_vertex:TM,batching_vertex:CM,begin_vertex:RM,beginnormal_vertex:PM,bsdfs:IM,iridescence_fragment:LM,bumpmap_pars_fragment:DM,clipping_planes_fragment:NM,clipping_planes_pars_fragment:UM,clipping_planes_pars_vertex:OM,clipping_planes_vertex:FM,color_fragment:zM,color_pars_fragment:BM,color_pars_vertex:kM,color_vertex:HM,common:GM,cube_uv_reflection_fragment:VM,defaultnormal_vertex:WM,displacementmap_pars_vertex:XM,displacementmap_vertex:YM,emissivemap_fragment:qM,emissivemap_pars_fragment:$M,colorspace_fragment:ZM,colorspace_pars_fragment:KM,envmap_fragment:JM,envmap_common_pars_fragment:QM,envmap_pars_fragment:jM,envmap_pars_vertex:t1,envmap_physical_pars_fragment:h1,envmap_vertex:e1,fog_vertex:n1,fog_pars_vertex:i1,fog_fragment:s1,fog_pars_fragment:r1,gradientmap_pars_fragment:o1,lightmap_pars_fragment:a1,lights_lambert_fragment:c1,lights_lambert_pars_fragment:l1,lights_pars_begin:u1,lights_toon_fragment:d1,lights_toon_pars_fragment:f1,lights_phong_fragment:p1,lights_phong_pars_fragment:m1,lights_physical_fragment:g1,lights_physical_pars_fragment:_1,lights_fragment_begin:x1,lights_fragment_maps:y1,lights_fragment_end:v1,logdepthbuf_fragment:M1,logdepthbuf_pars_fragment:b1,logdepthbuf_pars_vertex:S1,logdepthbuf_vertex:w1,map_fragment:A1,map_pars_fragment:E1,map_particle_fragment:T1,map_particle_pars_fragment:C1,metalnessmap_fragment:R1,metalnessmap_pars_fragment:P1,morphinstance_vertex:I1,morphcolor_vertex:L1,morphnormal_vertex:D1,morphtarget_pars_vertex:N1,morphtarget_vertex:U1,normal_fragment_begin:O1,normal_fragment_maps:F1,normal_pars_fragment:z1,normal_pars_vertex:B1,normal_vertex:k1,normalmap_pars_fragment:H1,clearcoat_normal_fragment_begin:G1,clearcoat_normal_fragment_maps:V1,clearcoat_pars_fragment:W1,iridescence_pars_fragment:X1,opaque_fragment:Y1,packing:q1,premultiplied_alpha_fragment:$1,project_vertex:Z1,dithering_fragment:K1,dithering_pars_fragment:J1,roughnessmap_fragment:Q1,roughnessmap_pars_fragment:j1,shadowmap_pars_fragment:tb,shadowmap_pars_vertex:eb,shadowmap_vertex:nb,shadowmask_pars_fragment:ib,skinbase_vertex:sb,skinning_pars_vertex:rb,skinning_vertex:ob,skinnormal_vertex:ab,specularmap_fragment:cb,specularmap_pars_fragment:lb,tonemapping_fragment:ub,tonemapping_pars_fragment:hb,transmission_fragment:db,transmission_pars_fragment:fb,uv_pars_fragment:pb,uv_pars_vertex:mb,uv_vertex:gb,worldpos_vertex:_b,background_vert:xb,background_frag:yb,backgroundCube_vert:vb,backgroundCube_frag:Mb,cube_vert:bb,cube_frag:Sb,depth_vert:wb,depth_frag:Ab,distanceRGBA_vert:Eb,distanceRGBA_frag:Tb,equirect_vert:Cb,equirect_frag:Rb,linedashed_vert:Pb,linedashed_frag:Ib,meshbasic_vert:Lb,meshbasic_frag:Db,meshlambert_vert:Nb,meshlambert_frag:Ub,meshmatcap_vert:Ob,meshmatcap_frag:Fb,meshnormal_vert:zb,meshnormal_frag:Bb,meshphong_vert:kb,meshphong_frag:Hb,meshphysical_vert:Gb,meshphysical_frag:Vb,meshtoon_vert:Wb,meshtoon_frag:Xb,points_vert:Yb,points_frag:qb,shadow_vert:$b,shadow_frag:Zb,sprite_vert:Kb,sprite_frag:Jb},pt={common:{diffuse:{value:new q(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new q(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new q(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new q(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},qn={basic:{uniforms:en([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:en([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new q(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:en([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new q(0)},specular:{value:new q(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:en([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new q(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:en([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new q(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:en([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:en([pt.points,pt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:en([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:en([pt.common,pt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:en([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:en([pt.sprite,pt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:en([pt.common,pt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:en([pt.lights,pt.fog,{color:{value:new q(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};qn.physical={uniforms:en([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new q(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new q(0)},specularColor:{value:new q(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const $a={r:0,b:0,g:0},ms=new bn,Qb=new Nt;function jb(i,t,e,n,s,r,o){const a=new q(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function p(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?e:t).get(x)),x}function _(v){let x=!1;const b=p(v);b===null?m(a,c):b&&b.isColor&&(m(b,1),x=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(v,x){const b=p(x);b&&(b.isCubeTexture||b.mapping===$r)?(u===void 0&&(u=new Wt(new Ks(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Gr(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ms.copy(x.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Qb.makeRotationFromEuler(ms)),u.material.toneMapped=se.getTransfer(b.colorSpace)!==me,(h!==b||d!==b.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=b,d=b.version,f=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Wt(new Js(2,2),new kn({name:"BackgroundMaterial",uniforms:Gr(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=se.getTransfer(b.colorSpace)!==me,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,x){v.getRGB($a,f_(i)),n.buffers.color.setClear($a.r,$a.g,$a.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),c=x,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,m(a,c)},render:_,addToRenderList:g}}function tS(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(y,M,P,U,O){let G=!1;const z=h(U,P,M);r!==z&&(r=z,l(r.object)),G=f(y,U,P,O),G&&p(y,U,P,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,b(y,M,P,U),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,M,P){const U=P.wireframe===!0;let O=n[y.id];O===void 0&&(O={},n[y.id]=O);let G=O[M.id];G===void 0&&(G={},O[M.id]=G);let z=G[U];return z===void 0&&(z=d(c()),G[U]=z),z}function d(y){const M=[],P=[],U=[];for(let O=0;O<e;O++)M[O]=0,P[O]=0,U[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:P,attributeDivisors:U,object:y,attributes:{},index:null}}function f(y,M,P,U){const O=r.attributes,G=M.attributes;let z=0;const F=P.getAttributes();for(const N in F)if(F[N].location>=0){const Q=O[N];let rt=G[N];if(rt===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(rt=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(rt=y.instanceColor)),Q===void 0||Q.attribute!==rt||rt&&Q.data!==rt.data)return!0;z++}return r.attributesNum!==z||r.index!==U}function p(y,M,P,U){const O={},G=M.attributes;let z=0;const F=P.getAttributes();for(const N in F)if(F[N].location>=0){let Q=G[N];Q===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor));const rt={};rt.attribute=Q,Q&&Q.data&&(rt.data=Q.data),O[N]=rt,z++}r.attributes=O,r.attributesNum=z,r.index=U}function _(){const y=r.newAttributes;for(let M=0,P=y.length;M<P;M++)y[M]=0}function g(y){m(y,0)}function m(y,M){const P=r.newAttributes,U=r.enabledAttributes,O=r.attributeDivisors;P[y]=1,U[y]===0&&(i.enableVertexAttribArray(y),U[y]=1),O[y]!==M&&(i.vertexAttribDivisor(y,M),O[y]=M)}function v(){const y=r.newAttributes,M=r.enabledAttributes;for(let P=0,U=M.length;P<U;P++)M[P]!==y[P]&&(i.disableVertexAttribArray(P),M[P]=0)}function x(y,M,P,U,O,G,z){z===!0?i.vertexAttribIPointer(y,M,P,O,G):i.vertexAttribPointer(y,M,P,U,O,G)}function b(y,M,P,U){_();const O=U.attributes,G=P.getAttributes(),z=M.defaultAttributeValues;for(const F in G){const N=G[F];if(N.location>=0){let W=O[F];if(W===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(W=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(W=y.instanceColor)),W!==void 0){const Q=W.normalized,rt=W.itemSize,bt=t.get(W);if(bt===void 0)continue;const Rt=bt.buffer,$=bt.type,tt=bt.bytesPerElement,ut=$===i.INT||$===i.UNSIGNED_INT||W.gpuType===tu;if(W.isInterleavedBufferAttribute){const ot=W.data,At=ot.stride,Tt=W.offset;if(ot.isInstancedInterleavedBuffer){for(let Lt=0;Lt<N.locationSize;Lt++)m(N.location+Lt,ot.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Lt=0;Lt<N.locationSize;Lt++)g(N.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,Rt);for(let Lt=0;Lt<N.locationSize;Lt++)x(N.location+Lt,rt/N.locationSize,$,Q,At*tt,(Tt+rt/N.locationSize*Lt)*tt,ut)}else{if(W.isInstancedBufferAttribute){for(let ot=0;ot<N.locationSize;ot++)m(N.location+ot,W.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ot=0;ot<N.locationSize;ot++)g(N.location+ot);i.bindBuffer(i.ARRAY_BUFFER,Rt);for(let ot=0;ot<N.locationSize;ot++)x(N.location+ot,rt/N.locationSize,$,Q,rt*tt,rt/N.locationSize*ot*tt,ut)}}else if(z!==void 0){const Q=z[F];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(N.location,Q);break;case 3:i.vertexAttrib3fv(N.location,Q);break;case 4:i.vertexAttrib4fv(N.location,Q);break;default:i.vertexAttrib1fv(N.location,Q)}}}}v()}function S(){E();for(const y in n){const M=n[y];for(const P in M){const U=M[P];for(const O in U)u(U[O].object),delete U[O];delete M[P]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;const M=n[y.id];for(const P in M){const U=M[P];for(const O in U)u(U[O].object),delete U[O];delete M[P]}delete n[y.id]}function A(y){for(const M in n){const P=n[M];if(P[y.id]===void 0)continue;const U=P[y.id];for(const O in U)u(U[O].object),delete U[O];delete P[y.id]}}function E(){C(),o=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function eS(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let p=0;p<h;p++)f+=u[p];e.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<l.length;p++)o(l[p],u[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];for(let _=0;_<d.length;_++)e.update(p,n,d[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function nS(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==rn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const E=A===Zr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==ci&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==vn&&!E)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:b,vertexTextures:S,maxSamples:w}}function iS(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Zi,a=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const p=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!s||p===null||p.length===0||r&&!g)r?u(null):l();else{const v=r?0:n,x=v*4;let b=m.clippingState||null;c.value=b,b=u(p,d,x,f);for(let S=0;S!==x;++S)b[S]=e[S];m.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,p){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=c.value,p!==!0||g===null){const m=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,b=f;x!==_;++x,b+=4)o.copy(h[x]).applyMatrix4(v,a),o.normal.toArray(g,b),g[b+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function sS(i){let t=new WeakMap;function e(o,a){return a===Go?o.mapping=Ii:a===Vo&&(o.mapping=ns),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Go||a===Vo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new g_(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class hu extends uu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Rr=4,Up=[.125,.215,.35,.446,.526,.582],Cs=20,fh=new hu,Op=new q;let ph=null,mh=0,gh=0,_h=!1;const ws=(1+Math.sqrt(5))/2,_r=1/ws,Fp=[new I(-ws,_r,0),new I(ws,_r,0),new I(-_r,0,ws),new I(_r,0,ws),new I(0,ws,-_r),new I(0,ws,_r),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class yd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ph,mh,gh),this._renderer.xr.enabled=_h,t.scissorTest=!1,Za(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ii||t.mapping===ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Le,minFilter:Le,generateMipmaps:!1,type:Zr,format:rn,colorSpace:Oi,depthBuffer:!1},s=zp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zp(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rS(r)),this._blurMaterial=oS(r,t,e)}return s}_compileMaterial(t){const e=new Wt(this._lodPlanes[0],t);this._renderer.compile(e,fh)}_sceneToCubeUV(t,e,n,s){const a=new Be(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Op),u.toneMapping=Ci,u.autoClear=!1;const f=new ui({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1}),p=new Wt(new Ks,f);let _=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(Op),_=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):v===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const x=this._cubeSize;Za(s,v*x,m>2?x:0,x,x),u.setRenderTarget(s),_&&u.render(p,a),u.render(t,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ii||t.mapping===ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=kp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bp());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Wt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Za(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,fh)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Fp[(s-r-1)%Fp.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Wt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Cs-1),_=r/p,g=isFinite(r)?1+Math.floor(u*_):Cs;g>Cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Cs}`);const m=[];let v=0;for(let A=0;A<Cs;++A){const E=A/_,C=Math.exp(-E*E/2);m.push(C),A===0?v+=C:A<g&&(v+=2*C)}for(let A=0;A<m.length;A++)m[A]=m[A]/v;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=p,d.mipInt.value=x-n;const b=this._sizeLods[s],S=3*b*(s>x-Rr?s-x+Rr:0),w=4*(this._cubeSize-b);Za(e,S,w,3*b,2*b),c.setRenderTarget(e),c.render(h,fh)}}function rS(i){const t=[],e=[],n=[];let s=i;const r=i-Rr+1+Up.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Rr?c=Up[o-i+Rr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,_=3,g=2,m=1,v=new Float32Array(_*p*f),x=new Float32Array(g*p*f),b=new Float32Array(m*p*f);for(let w=0;w<f;w++){const A=w%3*2/3-1,E=w>2?0:-1,C=[A,E,0,A+2/3,E,0,A+2/3,E+1,0,A,E,0,A+2/3,E+1,0,A,E+1,0];v.set(C,_*p*w),x.set(d,g*p*w);const y=[w,w,w,w,w,w];b.set(y,m*p*w)}const S=new Xt;S.setAttribute("position",new he(v,_)),S.setAttribute("uv",new he(x,g)),S.setAttribute("faceIndex",new he(b,m)),t.push(S),s>Rr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function zp(i,t,e){const n=new Kn(i,t,e);return n.texture.mapping=$r,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Za(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function oS(i,t,e){const n=new Float32Array(Cs),s=new I(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_f(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Bp(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_f(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function kp(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function _f(){return`

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
	`}function aS(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Go||c===Vo,u=c===Ii||c===ns;if(l||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new yd(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new yd(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function cS(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&kc("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function lS(i,t,e,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const p in d.attributes)t.remove(d.attributes[p]);for(const p in d.morphAttributes){const _=d.morphAttributes[p];for(let g=0,m=_.length;g<m;g++)t.remove(_[g])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const p in f){const _=f[p];for(let g=0,m=_.length;g<m;g++)t.update(_[g],i.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,p=h.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let x=0,b=v.length;x<b;x+=3){const S=v[x+0],w=v[x+1],A=v[x+2];d.push(S,w,w,A,A,S)}}else if(p!==void 0){const v=p.array;_=p.version;for(let x=0,b=v.length/3-1;x<b;x+=3){const S=x+0,w=x+1,A=x+2;d.push(S,w,w,A,A,S)}}else return;const g=new(c_(d)?gf:mf)(d,1);g.version=_;const m=r.get(h);m&&t.remove(m),r.set(h,g)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function uS(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,d*o,p),e.update(f,n,p))}function u(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,n,1)}function h(d,f,p,_){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)l(d[m]/o,f[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,p);let m=0;for(let v=0;v<p;v++)m+=f[v];for(let v=0;v<_.length;v++)e.update(m,n,_[v])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function hS(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function dS(i,t,e){const n=new WeakMap,s=new Jt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let C=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",C)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;f===!0&&(x=1),p===!0&&(x=2),_===!0&&(x=3);let b=a.attributes.position.count*x,S=1;b>t.maxTextureSize&&(S=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const w=new Float32Array(b*S*4*h),A=new cu(w,b,S,h);A.type=vn,A.needsUpdate=!0;const E=x*4;for(let y=0;y<h;y++){const M=g[y],P=m[y],U=v[y],O=b*S*4*y;for(let G=0;G<M.count;G++){const z=G*E;f===!0&&(s.fromBufferAttribute(M,G),w[O+z+0]=s.x,w[O+z+1]=s.y,w[O+z+2]=s.z,w[O+z+3]=0),p===!0&&(s.fromBufferAttribute(P,G),w[O+z+4]=s.x,w[O+z+5]=s.y,w[O+z+6]=s.z,w[O+z+7]=0),_===!0&&(s.fromBufferAttribute(U,G),w[O+z+8]=s.x,w[O+z+9]=s.y,w[O+z+10]=s.z,w[O+z+11]=U.itemSize===4?s.w:1)}}d={count:h,texture:A,size:new et(b,S)},n.set(a,d),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const p=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function fS(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class xf extends Ae{constructor(t,e,n,s,r,o,a,c,l,u=Fs){if(u!==Fs&&u!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Fs&&(n=Li),n===void 0&&u===Ws&&(n=Vs),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ke,this.minFilter=c!==void 0?c:ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const x_=new Ae,Hp=new xf(1,1),y_=new cu,v_=new pf,M_=new da,Gp=[],Vp=[],Wp=new Float32Array(16),Xp=new Float32Array(9),Yp=new Float32Array(4);function Jr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Gp[s];if(r===void 0&&(r=new Float32Array(s),Gp[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function du(i,t){let e=Vp[t];e===void 0&&(e=new Int32Array(t),Vp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function pS(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function mS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function gS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function _S(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function xS(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,n))return;Yp.set(n),i.uniformMatrix2fv(this.addr,!1,Yp),Fe(e,n)}}function yS(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,n))return;Xp.set(n),i.uniformMatrix3fv(this.addr,!1,Xp),Fe(e,n)}}function vS(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,n))return;Wp.set(n),i.uniformMatrix4fv(this.addr,!1,Wp),Fe(e,n)}}function MS(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function bS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function SS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function wS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function AS(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ES(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function TS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function CS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function RS(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Hp.compareFunction=df,r=Hp):r=x_,e.setTexture2D(t||r,s)}function PS(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||v_,s)}function IS(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||M_,s)}function LS(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||y_,s)}function DS(i){switch(i){case 5126:return pS;case 35664:return mS;case 35665:return gS;case 35666:return _S;case 35674:return xS;case 35675:return yS;case 35676:return vS;case 5124:case 35670:return MS;case 35667:case 35671:return bS;case 35668:case 35672:return SS;case 35669:case 35673:return wS;case 5125:return AS;case 36294:return ES;case 36295:return TS;case 36296:return CS;case 35678:case 36198:case 36298:case 36306:case 35682:return RS;case 35679:case 36299:case 36307:return PS;case 35680:case 36300:case 36308:case 36293:return IS;case 36289:case 36303:case 36311:case 36292:return LS}}function NS(i,t){i.uniform1fv(this.addr,t)}function US(i,t){const e=Jr(t,this.size,2);i.uniform2fv(this.addr,e)}function OS(i,t){const e=Jr(t,this.size,3);i.uniform3fv(this.addr,e)}function FS(i,t){const e=Jr(t,this.size,4);i.uniform4fv(this.addr,e)}function zS(i,t){const e=Jr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function BS(i,t){const e=Jr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function kS(i,t){const e=Jr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function HS(i,t){i.uniform1iv(this.addr,t)}function GS(i,t){i.uniform2iv(this.addr,t)}function VS(i,t){i.uniform3iv(this.addr,t)}function WS(i,t){i.uniform4iv(this.addr,t)}function XS(i,t){i.uniform1uiv(this.addr,t)}function YS(i,t){i.uniform2uiv(this.addr,t)}function qS(i,t){i.uniform3uiv(this.addr,t)}function $S(i,t){i.uniform4uiv(this.addr,t)}function ZS(i,t,e){const n=this.cache,s=t.length,r=du(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||x_,r[o])}function KS(i,t,e){const n=this.cache,s=t.length,r=du(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||v_,r[o])}function JS(i,t,e){const n=this.cache,s=t.length,r=du(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||M_,r[o])}function QS(i,t,e){const n=this.cache,s=t.length,r=du(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||y_,r[o])}function jS(i){switch(i){case 5126:return NS;case 35664:return US;case 35665:return OS;case 35666:return FS;case 35674:return zS;case 35675:return BS;case 35676:return kS;case 5124:case 35670:return HS;case 35667:case 35671:return GS;case 35668:case 35672:return VS;case 35669:case 35673:return WS;case 5125:return XS;case 36294:return YS;case 36295:return qS;case 36296:return $S;case 35678:case 36198:case 36298:case 36306:case 35682:return ZS;case 35679:case 36299:case 36307:return KS;case 35680:case 36300:case 36308:case 36293:return JS;case 36289:case 36303:case 36311:case 36292:return QS}}class tw{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=DS(e.type)}}class ew{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jS(e.type)}}class nw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const xh=/(\w+)(\])?(\[|\.)?/g;function qp(i,t){i.seq.push(t),i.map[t.id]=t}function iw(i,t,e){const n=i.name,s=n.length;for(xh.lastIndex=0;;){const r=xh.exec(n),o=xh.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){qp(e,l===void 0?new tw(a,i,t):new ew(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new nw(a),qp(e,h)),e=h}}}class Hc{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);iw(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function $p(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const sw=37297;let rw=0;function ow(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function aw(i){const t=se.getPrimaries(se.workingColorSpace),e=se.getPrimaries(i);let n;switch(t===e?n="":t===Zo&&e===$o?n="LinearDisplayP3ToLinearSRGB":t===$o&&e===Zo&&(n="LinearSRGBToLinearDisplayP3"),i){case Oi:case ha:return[n,"LinearTransferOETF"];case mn:case au:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Zp(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+ow(i.getShaderSource(t),o)}else return s}function cw(i,t){const e=aw(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function lw(i,t){let e;switch(t){case Gg:e="Linear";break;case Vg:e="Reinhard";break;case Wg:e="Cineon";break;case Qd:e="ACESFilmic";break;case Yg:e="AgX";break;case qg:e="Neutral";break;case Xg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ka=new I;function uw(){se.getLuminanceCoefficients(Ka);const i=Ka.x.toFixed(4),t=Ka.y.toFixed(4),e=Ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mo).join(`
`)}function dw(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function fw(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Mo(i){return i!==""}function Kp(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const pw=/^[ \t]*#include +<([\w\d./]+)>/gm;function vd(i){return i.replace(pw,gw)}const mw=new Map;function gw(i,t){let e=Kt[t];if(e===void 0){const n=mw.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return vd(e)}const _w=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qp(i){return i.replace(_w,xw)}function xw(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jp(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function yw(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Kd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Jd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(t="SHADOWMAP_TYPE_VSM"),t}function vw(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ii:case ns:t="ENVMAP_TYPE_CUBE";break;case $r:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Mw(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ns:t="ENVMAP_MODE_REFRACTION";break}return t}function bw(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case la:t="ENVMAP_BLENDING_MULTIPLY";break;case kg:t="ENVMAP_BLENDING_MIX";break;case Hg:t="ENVMAP_BLENDING_ADD";break}return t}function Sw(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function ww(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=yw(e),l=vw(e),u=Mw(e),h=bw(e),d=Sw(e),f=hw(e),p=dw(r),_=s.createProgram();let g,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Mo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Mo).join(`
`),m.length>0&&(m+=`
`)):(g=[jp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mo).join(`
`),m=[jp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ci?"#define TONE_MAPPING":"",e.toneMapping!==Ci?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Ci?lw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,cw("linearToOutputTexel",e.outputColorSpace),uw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mo).join(`
`)),o=vd(o),o=Kp(o,e),o=Jp(o,e),a=vd(a),a=Kp(a,e),a=Jp(a,e),o=Qp(o),a=Qp(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===xd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=v+g+o,b=v+m+a,S=$p(s,s.VERTEX_SHADER,x),w=$p(s,s.FRAGMENT_SHADER,b);s.attachShader(_,S),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(M){if(i.debug.checkShaderErrors){const P=s.getProgramInfoLog(_).trim(),U=s.getShaderInfoLog(S).trim(),O=s.getShaderInfoLog(w).trim();let G=!0,z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,S,w);else{const F=Zp(s,S,"vertex"),N=Zp(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+P+`
`+F+`
`+N)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(U===""||O==="")&&(z=!1);z&&(M.diagnostics={runnable:G,programLog:P,vertexShader:{log:U,prefix:g},fragmentShader:{log:O,prefix:m}})}s.deleteShader(S),s.deleteShader(w),E=new Hc(s,_),C=fw(s,_)}let E;this.getUniforms=function(){return E===void 0&&A(this),E};let C;this.getAttributes=function(){return C===void 0&&A(this),C};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,sw)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rw++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=w,this}let Aw=0;class Ew{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Tw(t),e.set(t,n)),n}}class Tw{constructor(t){this.id=Aw++,this.code=t,this.usedTimes=0}}function Cw(i,t,e,n,s,r,o){const a=new lu,c=new Ew,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,M,P,U,O){const G=U.fog,z=O.geometry,F=y.isMeshStandardMaterial?U.environment:null,N=(y.isMeshStandardMaterial?e:t).get(y.envMap||F),W=N&&N.mapping===$r?N.image.height:null,Q=_[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const rt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,bt=rt!==void 0?rt.length:0;let Rt=0;z.morphAttributes.position!==void 0&&(Rt=1),z.morphAttributes.normal!==void 0&&(Rt=2),z.morphAttributes.color!==void 0&&(Rt=3);let $,tt,ut,ot;if(Q){const fn=qn[Q];$=fn.vertexShader,tt=fn.fragmentShader}else $=y.vertexShader,tt=y.fragmentShader,c.update(y),ut=c.getVertexShaderID(y),ot=c.getFragmentShaderID(y);const At=i.getRenderTarget(),Tt=O.isInstancedMesh===!0,Lt=O.isBatchedMesh===!0,Bt=!!y.map,j=!!y.matcap,D=!!N,ht=!!y.aoMap,dt=!!y.lightMap,at=!!y.bumpMap,ft=!!y.normalMap,Ut=!!y.displacementMap,yt=!!y.emissiveMap,L=!!y.metalnessMap,T=!!y.roughnessMap,V=y.anisotropy>0,K=y.clearcoat>0,it=y.dispersion>0,J=y.iridescence>0,Pt=y.sheen>0,mt=y.transmission>0,St=V&&!!y.anisotropyMap,Qt=K&&!!y.clearcoatMap,ct=K&&!!y.clearcoatNormalMap,wt=K&&!!y.clearcoatRoughnessMap,Gt=J&&!!y.iridescenceMap,Vt=J&&!!y.iridescenceThicknessMap,Et=Pt&&!!y.sheenColorMap,jt=Pt&&!!y.sheenRoughnessMap,Yt=!!y.specularMap,pe=!!y.specularColorMap,B=!!y.specularIntensityMap,vt=mt&&!!y.transmissionMap,Z=mt&&!!y.thicknessMap,st=!!y.gradientMap,gt=!!y.alphaMap,Mt=y.alphaTest>0,ee=!!y.alphaHash,Pe=!!y.extensions;let dn=Ci;y.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(dn=i.toneMapping);const re={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:$,fragmentShader:tt,defines:y.defines,customVertexShaderID:ut,customFragmentShaderID:ot,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Lt,batchingColor:Lt&&O._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&O.instanceColor!==null,instancingMorph:Tt&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:At===null?i.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Oi,alphaToCoverage:!!y.alphaToCoverage,map:Bt,matcap:j,envMap:D,envMapMode:D&&N.mapping,envMapCubeUVHeight:W,aoMap:ht,lightMap:dt,bumpMap:at,normalMap:ft,displacementMap:f&&Ut,emissiveMap:yt,normalMapObjectSpace:ft&&y.normalMapType===jg,normalMapTangentSpace:ft&&y.normalMapType===os,metalnessMap:L,roughnessMap:T,anisotropy:V,anisotropyMap:St,clearcoat:K,clearcoatMap:Qt,clearcoatNormalMap:ct,clearcoatRoughnessMap:wt,dispersion:it,iridescence:J,iridescenceMap:Gt,iridescenceThicknessMap:Vt,sheen:Pt,sheenColorMap:Et,sheenRoughnessMap:jt,specularMap:Yt,specularColorMap:pe,specularIntensityMap:B,transmission:mt,transmissionMap:vt,thicknessMap:Z,gradientMap:st,opaque:y.transparent===!1&&y.blending===Os&&y.alphaToCoverage===!1,alphaMap:gt,alphaTest:Mt,alphaHash:ee,combine:y.combine,mapUv:Bt&&g(y.map.channel),aoMapUv:ht&&g(y.aoMap.channel),lightMapUv:dt&&g(y.lightMap.channel),bumpMapUv:at&&g(y.bumpMap.channel),normalMapUv:ft&&g(y.normalMap.channel),displacementMapUv:Ut&&g(y.displacementMap.channel),emissiveMapUv:yt&&g(y.emissiveMap.channel),metalnessMapUv:L&&g(y.metalnessMap.channel),roughnessMapUv:T&&g(y.roughnessMap.channel),anisotropyMapUv:St&&g(y.anisotropyMap.channel),clearcoatMapUv:Qt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ct&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:jt&&g(y.sheenRoughnessMap.channel),specularMapUv:Yt&&g(y.specularMap.channel),specularColorMapUv:pe&&g(y.specularColorMap.channel),specularIntensityMapUv:B&&g(y.specularIntensityMap.channel),transmissionMapUv:vt&&g(y.transmissionMap.channel),thicknessMapUv:Z&&g(y.thicknessMap.channel),alphaMapUv:gt&&g(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ft||V),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!z.attributes.uv&&(Bt||gt),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:O.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Rt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:dn,decodeVideoTexture:Bt&&y.map.isVideoTexture===!0&&se.getTransfer(y.map.colorSpace)===me,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===_e,flipSided:y.side===Ke,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Pe&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&y.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return re.vertexUv1s=l.has(1),re.vertexUv2s=l.has(2),re.vertexUv3s=l.has(3),l.clear(),re}function v(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)M.push(P),M.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(x(M,y),b(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function x(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function b(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),y.push(a.mask)}function S(y){const M=_[y.type];let P;if(M){const U=qn[M];P=p_.clone(U.uniforms)}else P=y.uniforms;return P}function w(y,M){let P;for(let U=0,O=u.length;U<O;U++){const G=u[U];if(G.cacheKey===M){P=G,++P.usedTimes;break}}return P===void 0&&(P=new ww(i,M,y,r),u.push(P)),P}function A(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function E(y){c.remove(y)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:v,getUniforms:S,acquireProgram:w,releaseProgram:A,releaseShaderCache:E,programs:u,dispose:C}}function Rw(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Pw(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function tm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function em(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,d,f,p,_,g){let m=i[t];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:p,renderOrder:h.renderOrder,z:_,group:g},i[t]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=h.renderOrder,m.z=_,m.group=g),t++,m}function a(h,d,f,p,_,g){const m=o(h,d,f,p,_,g);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function c(h,d,f,p,_,g){const m=o(h,d,f,p,_,g);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function l(h,d){e.length>1&&e.sort(h||Pw),n.length>1&&n.sort(d||tm),s.length>1&&s.sort(d||tm)}function u(){for(let h=t,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Iw(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new em,i.set(n,[o])):s>=r.length?(o=new em,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Lw(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new q};break;case"SpotLight":e={position:new I,direction:new I,color:new q,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new q,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new q,groundColor:new q};break;case"RectAreaLight":e={color:new q,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Dw(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Nw=0;function Uw(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ow(i){const t=new Lw,e=Dw(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,r=new Nt,o=new Nt;function a(l){let u=0,h=0,d=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,v=0,x=0,b=0,S=0,w=0,A=0;l.sort(Uw);for(let C=0,y=l.length;C<y;C++){const M=l[C],P=M.color,U=M.intensity,O=M.distance,G=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)u+=P.r*U,h+=P.g*U,d+=P.b*U;else if(M.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(M.sh.coefficients[z],U);A++}else if(M.isDirectionalLight){const z=t.get(M);if(z.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const F=M.shadow,N=e.get(M);N.shadowIntensity=F.intensity,N.shadowBias=F.bias,N.shadowNormalBias=F.normalBias,N.shadowRadius=F.radius,N.shadowMapSize=F.mapSize,n.directionalShadow[f]=N,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=M.shadow.matrix,v++}n.directional[f]=z,f++}else if(M.isSpotLight){const z=t.get(M);z.position.setFromMatrixPosition(M.matrixWorld),z.color.copy(P).multiplyScalar(U),z.distance=O,z.coneCos=Math.cos(M.angle),z.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),z.decay=M.decay,n.spot[_]=z;const F=M.shadow;if(M.map&&(n.spotLightMap[S]=M.map,S++,F.updateMatrices(M),M.castShadow&&w++),n.spotLightMatrix[_]=F.matrix,M.castShadow){const N=e.get(M);N.shadowIntensity=F.intensity,N.shadowBias=F.bias,N.shadowNormalBias=F.normalBias,N.shadowRadius=F.radius,N.shadowMapSize=F.mapSize,n.spotShadow[_]=N,n.spotShadowMap[_]=G,b++}_++}else if(M.isRectAreaLight){const z=t.get(M);z.color.copy(P).multiplyScalar(U),z.halfWidth.set(M.width*.5,0,0),z.halfHeight.set(0,M.height*.5,0),n.rectArea[g]=z,g++}else if(M.isPointLight){const z=t.get(M);if(z.color.copy(M.color).multiplyScalar(M.intensity),z.distance=M.distance,z.decay=M.decay,M.castShadow){const F=M.shadow,N=e.get(M);N.shadowIntensity=F.intensity,N.shadowBias=F.bias,N.shadowNormalBias=F.normalBias,N.shadowRadius=F.radius,N.shadowMapSize=F.mapSize,N.shadowCameraNear=F.camera.near,N.shadowCameraFar=F.camera.far,n.pointShadow[p]=N,n.pointShadowMap[p]=G,n.pointShadowMatrix[p]=M.shadow.matrix,x++}n.point[p]=z,p++}else if(M.isHemisphereLight){const z=t.get(M);z.skyColor.copy(M.color).multiplyScalar(U),z.groundColor.copy(M.groundColor).multiplyScalar(U),n.hemi[m]=z,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const E=n.hash;(E.directionalLength!==f||E.pointLength!==p||E.spotLength!==_||E.rectAreaLength!==g||E.hemiLength!==m||E.numDirectionalShadows!==v||E.numPointShadows!==x||E.numSpotShadows!==b||E.numSpotMaps!==S||E.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=b+S-w,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,E.directionalLength=f,E.pointLength=p,E.spotLength=_,E.rectAreaLength=g,E.hemiLength=m,E.numDirectionalShadows=v,E.numPointShadows=x,E.numSpotShadows=b,E.numSpotMaps=S,E.numLightProbes=A,n.version=Nw++)}function c(l,u){let h=0,d=0,f=0,p=0,_=0;const g=u.matrixWorldInverse;for(let m=0,v=l.length;m<v;m++){const x=l[m];if(x.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),h++}else if(x.isSpotLight){const b=n.spot[f];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),f++}else if(x.isRectAreaLight){const b=n.rectArea[p];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(x.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),p++}else if(x.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function nm(i){const t=new Ow(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Fw(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new nm(i),t.set(s,[a])):r>=o.length?(a=new nm(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class fu extends Qe{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class yf extends Qe{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const zw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bw=`uniform sampler2D shadow_pass;
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
}`;function kw(i,t,e){let n=new fa;const s=new et,r=new et,o=new Jt,a=new fu({depthPacking:hf}),c=new yf,l={},u=e.maxTextureSize,h={[Pi]:Ke,[Ke]:Pi,[_e]:_e},d=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:zw,fragmentShader:Bw}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new Xt;p.setAttribute("position",new he(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Wt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kd;let m=this.type;this.render=function(w,A,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const C=i.getRenderTarget(),y=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Ti),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const U=m!==ti&&this.type===ti,O=m===ti&&this.type!==ti;for(let G=0,z=w.length;G<z;G++){const F=w[G],N=F.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const W=N.getFrameExtents();if(s.multiply(W),r.copy(N.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/W.x),s.x=r.x*W.x,N.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/W.y),s.y=r.y*W.y,N.mapSize.y=r.y)),N.map===null||U===!0||O===!0){const rt=this.type!==ti?{minFilter:ke,magFilter:ke}:{};N.map!==null&&N.map.dispose(),N.map=new Kn(s.x,s.y,rt),N.map.texture.name=F.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const Q=N.getViewportCount();for(let rt=0;rt<Q;rt++){const bt=N.getViewport(rt);o.set(r.x*bt.x,r.y*bt.y,r.x*bt.z,r.y*bt.w),P.viewport(o),N.updateMatrices(F,rt),n=N.getFrustum(),b(A,E,N.camera,F,this.type)}N.isPointLightShadow!==!0&&this.type===ti&&v(N,E),N.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(C,y,M)};function v(w,A){const E=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Kn(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,E,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,E,f,_,null)}function x(w,A,E,C){let y=null;const M=E.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(M!==void 0)y=M;else if(y=E.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const P=y.uuid,U=A.uuid;let O=l[P];O===void 0&&(O={},l[P]=O);let G=O[U];G===void 0&&(G=y.clone(),O[U]=G,A.addEventListener("dispose",S)),y=G}if(y.visible=A.visible,y.wireframe=A.wireframe,C===ti?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:h[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,E.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const P=i.properties.get(y);P.light=E}return y}function b(w,A,E,C,y){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===ti)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,w.matrixWorld);const U=t.update(w),O=w.material;if(Array.isArray(O)){const G=U.groups;for(let z=0,F=G.length;z<F;z++){const N=G[z],W=O[N.materialIndex];if(W&&W.visible){const Q=x(w,W,C,y);w.onBeforeShadow(i,w,A,E,U,Q,N),i.renderBufferDirect(E,null,U,Q,w,N),w.onAfterShadow(i,w,A,E,U,Q,N)}}}else if(O.visible){const G=x(w,O,C,y);w.onBeforeShadow(i,w,A,E,U,G,null),i.renderBufferDirect(E,null,U,G,w,null),w.onAfterShadow(i,w,A,E,U,G,null)}}const P=w.children;for(let U=0,O=P.length;U<O;U++)b(P[U],A,E,C,y)}function S(w){w.target.removeEventListener("dispose",S);for(const E in l){const C=l[E],y=w.target.uuid;y in C&&(C[y].dispose(),delete C[y])}}}const Hw={[ol]:al,[cl]:hl,[ll]:dl,[Gs]:ul,[al]:ol,[hl]:cl,[dl]:ll,[ul]:Gs};function Gw(i){function t(){let B=!1;const vt=new Jt;let Z=null;const st=new Jt(0,0,0,0);return{setMask:function(gt){Z!==gt&&!B&&(i.colorMask(gt,gt,gt,gt),Z=gt)},setLocked:function(gt){B=gt},setClear:function(gt,Mt,ee,Pe,dn){dn===!0&&(gt*=Pe,Mt*=Pe,ee*=Pe),vt.set(gt,Mt,ee,Pe),st.equals(vt)===!1&&(i.clearColor(gt,Mt,ee,Pe),st.copy(vt))},reset:function(){B=!1,Z=null,st.set(-1,0,0,0)}}}function e(){let B=!1,vt=!1,Z=null,st=null,gt=null;return{setReversed:function(Mt){vt=Mt},setTest:function(Mt){Mt?ut(i.DEPTH_TEST):ot(i.DEPTH_TEST)},setMask:function(Mt){Z!==Mt&&!B&&(i.depthMask(Mt),Z=Mt)},setFunc:function(Mt){if(vt&&(Mt=Hw[Mt]),st!==Mt){switch(Mt){case ol:i.depthFunc(i.NEVER);break;case al:i.depthFunc(i.ALWAYS);break;case cl:i.depthFunc(i.LESS);break;case Gs:i.depthFunc(i.LEQUAL);break;case ll:i.depthFunc(i.EQUAL);break;case ul:i.depthFunc(i.GEQUAL);break;case hl:i.depthFunc(i.GREATER);break;case dl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}st=Mt}},setLocked:function(Mt){B=Mt},setClear:function(Mt){gt!==Mt&&(i.clearDepth(Mt),gt=Mt)},reset:function(){B=!1,Z=null,st=null,gt=null}}}function n(){let B=!1,vt=null,Z=null,st=null,gt=null,Mt=null,ee=null,Pe=null,dn=null;return{setTest:function(re){B||(re?ut(i.STENCIL_TEST):ot(i.STENCIL_TEST))},setMask:function(re){vt!==re&&!B&&(i.stencilMask(re),vt=re)},setFunc:function(re,fn,fi){(Z!==re||st!==fn||gt!==fi)&&(i.stencilFunc(re,fn,fi),Z=re,st=fn,gt=fi)},setOp:function(re,fn,fi){(Mt!==re||ee!==fn||Pe!==fi)&&(i.stencilOp(re,fn,fi),Mt=re,ee=fn,Pe=fi)},setLocked:function(re){B=re},setClear:function(re){dn!==re&&(i.clearStencil(re),dn=re)},reset:function(){B=!1,vt=null,Z=null,st=null,gt=null,Mt=null,ee=null,Pe=null,dn=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],f=null,p=!1,_=null,g=null,m=null,v=null,x=null,b=null,S=null,w=new q(0,0,0),A=0,E=!1,C=null,y=null,M=null,P=null,U=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,z=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(F)[1]),G=z>=1):F.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),G=z>=2);let N=null,W={};const Q=i.getParameter(i.SCISSOR_BOX),rt=i.getParameter(i.VIEWPORT),bt=new Jt().fromArray(Q),Rt=new Jt().fromArray(rt);function $(B,vt,Z,st){const gt=new Uint8Array(4),Mt=i.createTexture();i.bindTexture(B,Mt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ee=0;ee<Z;ee++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,st,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(vt+ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return Mt}const tt={};tt[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ut(i.DEPTH_TEST),r.setFunc(Gs),dt(!1),at(fd),ut(i.CULL_FACE),D(Ti);function ut(B){l[B]!==!0&&(i.enable(B),l[B]=!0)}function ot(B){l[B]!==!1&&(i.disable(B),l[B]=!1)}function At(B,vt){return u[B]!==vt?(i.bindFramebuffer(B,vt),u[B]=vt,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=vt),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function Tt(B,vt){let Z=d,st=!1;if(B){Z=h.get(vt),Z===void 0&&(Z=[],h.set(vt,Z));const gt=B.textures;if(Z.length!==gt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let Mt=0,ee=gt.length;Mt<ee;Mt++)Z[Mt]=i.COLOR_ATTACHMENT0+Mt;Z.length=gt.length,st=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,st=!0);st&&i.drawBuffers(Z)}function Lt(B){return f!==B?(i.useProgram(B),f=B,!0):!1}const Bt={[Ji]:i.FUNC_ADD,[Sg]:i.FUNC_SUBTRACT,[wg]:i.FUNC_REVERSE_SUBTRACT};Bt[Ag]=i.MIN,Bt[Eg]=i.MAX;const j={[Tg]:i.ZERO,[Cg]:i.ONE,[Rg]:i.SRC_COLOR,[sl]:i.SRC_ALPHA,[Ug]:i.SRC_ALPHA_SATURATE,[Dg]:i.DST_COLOR,[Ig]:i.DST_ALPHA,[Pg]:i.ONE_MINUS_SRC_COLOR,[rl]:i.ONE_MINUS_SRC_ALPHA,[Ng]:i.ONE_MINUS_DST_COLOR,[Lg]:i.ONE_MINUS_DST_ALPHA,[Og]:i.CONSTANT_COLOR,[Fg]:i.ONE_MINUS_CONSTANT_COLOR,[zg]:i.CONSTANT_ALPHA,[Bg]:i.ONE_MINUS_CONSTANT_ALPHA};function D(B,vt,Z,st,gt,Mt,ee,Pe,dn,re){if(B===Ti){p===!0&&(ot(i.BLEND),p=!1);return}if(p===!1&&(ut(i.BLEND),p=!0),B!==bg){if(B!==_||re!==E){if((g!==Ji||x!==Ji)&&(i.blendEquation(i.FUNC_ADD),g=Ji,x=Ji),re)switch(B){case Os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case il:i.blendFunc(i.ONE,i.ONE);break;case pd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case md:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case il:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case pd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case md:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}m=null,v=null,b=null,S=null,w.set(0,0,0),A=0,_=B,E=re}return}gt=gt||vt,Mt=Mt||Z,ee=ee||st,(vt!==g||gt!==x)&&(i.blendEquationSeparate(Bt[vt],Bt[gt]),g=vt,x=gt),(Z!==m||st!==v||Mt!==b||ee!==S)&&(i.blendFuncSeparate(j[Z],j[st],j[Mt],j[ee]),m=Z,v=st,b=Mt,S=ee),(Pe.equals(w)===!1||dn!==A)&&(i.blendColor(Pe.r,Pe.g,Pe.b,dn),w.copy(Pe),A=dn),_=B,E=!1}function ht(B,vt){B.side===_e?ot(i.CULL_FACE):ut(i.CULL_FACE);let Z=B.side===Ke;vt&&(Z=!Z),dt(Z),B.blending===Os&&B.transparent===!1?D(Ti):D(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),s.setMask(B.colorWrite);const st=B.stencilWrite;o.setTest(st),st&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ut(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(B){C!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),C=B)}function at(B){B!==vg?(ut(i.CULL_FACE),B!==y&&(B===fd?i.cullFace(i.BACK):B===Mg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ot(i.CULL_FACE),y=B}function ft(B){B!==M&&(G&&i.lineWidth(B),M=B)}function Ut(B,vt,Z){B?(ut(i.POLYGON_OFFSET_FILL),(P!==vt||U!==Z)&&(i.polygonOffset(vt,Z),P=vt,U=Z)):ot(i.POLYGON_OFFSET_FILL)}function yt(B){B?ut(i.SCISSOR_TEST):ot(i.SCISSOR_TEST)}function L(B){B===void 0&&(B=i.TEXTURE0+O-1),N!==B&&(i.activeTexture(B),N=B)}function T(B,vt,Z){Z===void 0&&(N===null?Z=i.TEXTURE0+O-1:Z=N);let st=W[Z];st===void 0&&(st={type:void 0,texture:void 0},W[Z]=st),(st.type!==B||st.texture!==vt)&&(N!==Z&&(i.activeTexture(Z),N=Z),i.bindTexture(B,vt||tt[B]),st.type=B,st.texture=vt)}function V(){const B=W[N];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pt(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function St(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Qt(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ct(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function wt(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Gt(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Vt(B){bt.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),bt.copy(B))}function Et(B){Rt.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Rt.copy(B))}function jt(B,vt){let Z=c.get(vt);Z===void 0&&(Z=new WeakMap,c.set(vt,Z));let st=Z.get(B);st===void 0&&(st=i.getUniformBlockIndex(vt,B.name),Z.set(B,st))}function Yt(B,vt){const st=c.get(vt).get(B);a.get(vt)!==st&&(i.uniformBlockBinding(vt,st,B.__bindingPointIndex),a.set(vt,st))}function pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},N=null,W={},u={},h=new WeakMap,d=[],f=null,p=!1,_=null,g=null,m=null,v=null,x=null,b=null,S=null,w=new q(0,0,0),A=0,E=!1,C=null,y=null,M=null,P=null,U=null,bt.set(0,0,i.canvas.width,i.canvas.height),Rt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ut,disable:ot,bindFramebuffer:At,drawBuffers:Tt,useProgram:Lt,setBlending:D,setMaterial:ht,setFlipSided:dt,setCullFace:at,setLineWidth:ft,setPolygonOffset:Ut,setScissorTest:yt,activeTexture:L,bindTexture:T,unbindTexture:V,compressedTexImage2D:K,compressedTexImage3D:it,texImage2D:wt,texImage3D:Gt,updateUBOMapping:jt,uniformBlockBinding:Yt,texStorage2D:Qt,texStorage3D:ct,texSubImage2D:J,texSubImage3D:Pt,compressedTexSubImage2D:mt,compressedTexSubImage3D:St,scissor:Vt,viewport:Et,reset:pe}}function Vw(i,t){const e=i.image&&i.image.width?i.image.width/i.image.height:1;return e>t?(i.repeat.x=1,i.repeat.y=e/t,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2):(i.repeat.x=t/e,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0),i}function Ww(i,t){const e=i.image&&i.image.width?i.image.width/i.image.height:1;return e>t?(i.repeat.x=t/e,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0):(i.repeat.x=1,i.repeat.y=e/t,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2),i}function Xw(i){return i.repeat.x=1,i.repeat.y=1,i.offset.x=0,i.offset.y=0,i}function Md(i,t,e,n){const s=Yw(n);switch(e){case sf:return i*t;case of:return i*t;case af:return i*t*2;case iu:return i*t/s.components*s.byteLength;case ua:return i*t/s.components*s.byteLength;case cf:return i*t*2/s.components*s.byteLength;case su:return i*t*2/s.components*s.byteLength;case rf:return i*t*3/s.components*s.byteLength;case rn:return i*t*4/s.components*s.byteLength;case ru:return i*t*4/s.components*s.byteLength;case wo:case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Eo:case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pl:case gl:return Math.max(i,16)*Math.max(t,8)/4;case fl:case ml:return Math.max(i,8)*Math.max(t,8)/2;case _l:case xl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case yl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case bl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case wl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Al:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case El:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Cl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Il:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ll:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Dl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Co:case Nl:case Ul:return Math.ceil(i/4)*Math.ceil(t/4)*16;case lf:case Ol:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Fl:case zl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Yw(i){switch(i){case ci:case tf:return{byteLength:1,components:1};case kr:case ef:case Zr:return{byteLength:2,components:1};case eu:case nu:return{byteLength:2,components:4};case Li:case tu:case vn:return{byteLength:4,components:1};case nf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}const qw={contain:Vw,cover:Ww,fill:Xw,getByteLength:Md};function $w(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new et,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(L,T){return f?new OffscreenCanvas(L,T):Qo("canvas")}function _(L,T,V){let K=1;const it=yt(L);if((it.width>V||it.height>V)&&(K=V/Math.max(it.width,it.height)),K<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const J=Math.floor(K*it.width),Pt=Math.floor(K*it.height);h===void 0&&(h=p(J,Pt));const mt=T?p(J,Pt):h;return mt.width=J,mt.height=Pt,mt.getContext("2d").drawImage(L,0,0,J,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+J+"x"+Pt+")."),mt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),L;return L}function g(L){return L.generateMipmaps&&L.minFilter!==ke&&L.minFilter!==Le}function m(L){i.generateMipmap(L)}function v(L,T,V,K,it=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let J=T;if(T===i.RED&&(V===i.FLOAT&&(J=i.R32F),V===i.HALF_FLOAT&&(J=i.R16F),V===i.UNSIGNED_BYTE&&(J=i.R8)),T===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.R8UI),V===i.UNSIGNED_SHORT&&(J=i.R16UI),V===i.UNSIGNED_INT&&(J=i.R32UI),V===i.BYTE&&(J=i.R8I),V===i.SHORT&&(J=i.R16I),V===i.INT&&(J=i.R32I)),T===i.RG&&(V===i.FLOAT&&(J=i.RG32F),V===i.HALF_FLOAT&&(J=i.RG16F),V===i.UNSIGNED_BYTE&&(J=i.RG8)),T===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RG8UI),V===i.UNSIGNED_SHORT&&(J=i.RG16UI),V===i.UNSIGNED_INT&&(J=i.RG32UI),V===i.BYTE&&(J=i.RG8I),V===i.SHORT&&(J=i.RG16I),V===i.INT&&(J=i.RG32I)),T===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RGB8UI),V===i.UNSIGNED_SHORT&&(J=i.RGB16UI),V===i.UNSIGNED_INT&&(J=i.RGB32UI),V===i.BYTE&&(J=i.RGB8I),V===i.SHORT&&(J=i.RGB16I),V===i.INT&&(J=i.RGB32I)),T===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),V===i.UNSIGNED_INT&&(J=i.RGBA32UI),V===i.BYTE&&(J=i.RGBA8I),V===i.SHORT&&(J=i.RGBA16I),V===i.INT&&(J=i.RGBA32I)),T===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),T===i.RGBA){const Pt=it?qo:se.getTransfer(K);V===i.FLOAT&&(J=i.RGBA32F),V===i.HALF_FLOAT&&(J=i.RGBA16F),V===i.UNSIGNED_BYTE&&(J=Pt===me?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function x(L,T){let V;return L?T===null||T===Li||T===Vs?V=i.DEPTH24_STENCIL8:T===vn?V=i.DEPTH32F_STENCIL8:T===kr&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Li||T===Vs?V=i.DEPTH_COMPONENT24:T===vn?V=i.DEPTH_COMPONENT32F:T===kr&&(V=i.DEPTH_COMPONENT16),V}function b(L,T){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==ke&&L.minFilter!==Le?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function S(L){const T=L.target;T.removeEventListener("dispose",S),A(T),T.isVideoTexture&&u.delete(T)}function w(L){const T=L.target;T.removeEventListener("dispose",w),C(T)}function A(L){const T=n.get(L);if(T.__webglInit===void 0)return;const V=L.source,K=d.get(V);if(K){const it=K[T.__cacheKey];it.usedTimes--,it.usedTimes===0&&E(L),Object.keys(K).length===0&&d.delete(V)}n.remove(L)}function E(L){const T=n.get(L);i.deleteTexture(T.__webglTexture);const V=L.source,K=d.get(V);delete K[T.__cacheKey],o.memory.textures--}function C(L){const T=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(T.__webglFramebuffer[K]))for(let it=0;it<T.__webglFramebuffer[K].length;it++)i.deleteFramebuffer(T.__webglFramebuffer[K][it]);else i.deleteFramebuffer(T.__webglFramebuffer[K]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[K])}else{if(Array.isArray(T.__webglFramebuffer))for(let K=0;K<T.__webglFramebuffer.length;K++)i.deleteFramebuffer(T.__webglFramebuffer[K]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let K=0;K<T.__webglColorRenderbuffer.length;K++)T.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[K]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const V=L.textures;for(let K=0,it=V.length;K<it;K++){const J=n.get(V[K]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(V[K])}n.remove(L)}let y=0;function M(){y=0}function P(){const L=y;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),y+=1,L}function U(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function O(L,T){const V=n.get(L);if(L.isVideoTexture&&ft(L),L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){const K=L.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(V,L,T);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+T)}function G(L,T){const V=n.get(L);if(L.version>0&&V.__version!==L.version){Rt(V,L,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+T)}function z(L,T){const V=n.get(L);if(L.version>0&&V.__version!==L.version){Rt(V,L,T);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+T)}function F(L,T){const V=n.get(L);if(L.version>0&&V.__version!==L.version){$(V,L,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+T)}const N={[Br]:i.REPEAT,[zn]:i.CLAMP_TO_EDGE,[Wo]:i.MIRRORED_REPEAT},W={[ke]:i.NEAREST,[jd]:i.NEAREST_MIPMAP_NEAREST,[Tr]:i.NEAREST_MIPMAP_LINEAR,[Le]:i.LINEAR,[So]:i.LINEAR_MIPMAP_NEAREST,[si]:i.LINEAR_MIPMAP_LINEAR},Q={[t_]:i.NEVER,[o_]:i.ALWAYS,[e_]:i.LESS,[df]:i.LEQUAL,[n_]:i.EQUAL,[r_]:i.GEQUAL,[i_]:i.GREATER,[s_]:i.NOTEQUAL};function rt(L,T){if(T.type===vn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Le||T.magFilter===So||T.magFilter===Tr||T.magFilter===si||T.minFilter===Le||T.minFilter===So||T.minFilter===Tr||T.minFilter===si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,N[T.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,N[T.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,N[T.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,W[T.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,W[T.minFilter]),T.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Q[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ke||T.minFilter!==Tr&&T.minFilter!==si||T.type===vn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function bt(L,T){let V=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",S));const K=T.source;let it=d.get(K);it===void 0&&(it={},d.set(K,it));const J=U(T);if(J!==L.__cacheKey){it[J]===void 0&&(it[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),it[J].usedTimes++;const Pt=it[L.__cacheKey];Pt!==void 0&&(it[L.__cacheKey].usedTimes--,Pt.usedTimes===0&&E(T)),L.__cacheKey=J,L.__webglTexture=it[J].texture}return V}function Rt(L,T,V){let K=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(K=i.TEXTURE_3D);const it=bt(L,T),J=T.source;e.bindTexture(K,L.__webglTexture,i.TEXTURE0+V);const Pt=n.get(J);if(J.version!==Pt.__version||it===!0){e.activeTexture(i.TEXTURE0+V);const mt=se.getPrimaries(se.workingColorSpace),St=T.colorSpace===bi?null:se.getPrimaries(T.colorSpace),Qt=T.colorSpace===bi||mt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let ct=_(T.image,!1,s.maxTextureSize);ct=Ut(T,ct);const wt=r.convert(T.format,T.colorSpace),Gt=r.convert(T.type);let Vt=v(T.internalFormat,wt,Gt,T.colorSpace,T.isVideoTexture);rt(K,T);let Et;const jt=T.mipmaps,Yt=T.isVideoTexture!==!0,pe=Pt.__version===void 0||it===!0,B=J.dataReady,vt=b(T,ct);if(T.isDepthTexture)Vt=x(T.format===Ws,T.type),pe&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Vt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Vt,ct.width,ct.height,0,wt,Gt,null));else if(T.isDataTexture)if(jt.length>0){Yt&&pe&&e.texStorage2D(i.TEXTURE_2D,vt,Vt,jt[0].width,jt[0].height);for(let Z=0,st=jt.length;Z<st;Z++)Et=jt[Z],Yt?B&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Et.width,Et.height,wt,Gt,Et.data):e.texImage2D(i.TEXTURE_2D,Z,Vt,Et.width,Et.height,0,wt,Gt,Et.data);T.generateMipmaps=!1}else Yt?(pe&&e.texStorage2D(i.TEXTURE_2D,vt,Vt,ct.width,ct.height),B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,wt,Gt,ct.data)):e.texImage2D(i.TEXTURE_2D,0,Vt,ct.width,ct.height,0,wt,Gt,ct.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Yt&&pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Vt,jt[0].width,jt[0].height,ct.depth);for(let Z=0,st=jt.length;Z<st;Z++)if(Et=jt[Z],T.format!==rn)if(wt!==null)if(Yt){if(B)if(T.layerUpdates.size>0){const gt=Md(Et.width,Et.height,T.format,T.type);for(const Mt of T.layerUpdates){const ee=Et.data.subarray(Mt*gt/Et.data.BYTES_PER_ELEMENT,(Mt+1)*gt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,Mt,Et.width,Et.height,1,wt,ee,0,0)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Et.width,Et.height,ct.depth,wt,Et.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Vt,Et.width,Et.height,ct.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Et.width,Et.height,ct.depth,wt,Gt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,Vt,Et.width,Et.height,ct.depth,0,wt,Gt,Et.data)}else{Yt&&pe&&e.texStorage2D(i.TEXTURE_2D,vt,Vt,jt[0].width,jt[0].height);for(let Z=0,st=jt.length;Z<st;Z++)Et=jt[Z],T.format!==rn?wt!==null?Yt?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,Et.width,Et.height,wt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,Vt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?B&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Et.width,Et.height,wt,Gt,Et.data):e.texImage2D(i.TEXTURE_2D,Z,Vt,Et.width,Et.height,0,wt,Gt,Et.data)}else if(T.isDataArrayTexture)if(Yt){if(pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Vt,ct.width,ct.height,ct.depth),B)if(T.layerUpdates.size>0){const Z=Md(ct.width,ct.height,T.format,T.type);for(const st of T.layerUpdates){const gt=ct.data.subarray(st*Z/ct.data.BYTES_PER_ELEMENT,(st+1)*Z/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,ct.width,ct.height,1,wt,Gt,gt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,wt,Gt,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Vt,ct.width,ct.height,ct.depth,0,wt,Gt,ct.data);else if(T.isData3DTexture)Yt?(pe&&e.texStorage3D(i.TEXTURE_3D,vt,Vt,ct.width,ct.height,ct.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,wt,Gt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Vt,ct.width,ct.height,ct.depth,0,wt,Gt,ct.data);else if(T.isFramebufferTexture){if(pe)if(Yt)e.texStorage2D(i.TEXTURE_2D,vt,Vt,ct.width,ct.height);else{let Z=ct.width,st=ct.height;for(let gt=0;gt<vt;gt++)e.texImage2D(i.TEXTURE_2D,gt,Vt,Z,st,0,wt,Gt,null),Z>>=1,st>>=1}}else if(jt.length>0){if(Yt&&pe){const Z=yt(jt[0]);e.texStorage2D(i.TEXTURE_2D,vt,Vt,Z.width,Z.height)}for(let Z=0,st=jt.length;Z<st;Z++)Et=jt[Z],Yt?B&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,wt,Gt,Et):e.texImage2D(i.TEXTURE_2D,Z,Vt,wt,Gt,Et);T.generateMipmaps=!1}else if(Yt){if(pe){const Z=yt(ct);e.texStorage2D(i.TEXTURE_2D,vt,Vt,Z.width,Z.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Gt,ct)}else e.texImage2D(i.TEXTURE_2D,0,Vt,wt,Gt,ct);g(T)&&m(K),Pt.__version=J.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function $(L,T,V){if(T.image.length!==6)return;const K=bt(L,T),it=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+V);const J=n.get(it);if(it.version!==J.__version||K===!0){e.activeTexture(i.TEXTURE0+V);const Pt=se.getPrimaries(se.workingColorSpace),mt=T.colorSpace===bi?null:se.getPrimaries(T.colorSpace),St=T.colorSpace===bi||Pt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Qt=T.isCompressedTexture||T.image[0].isCompressedTexture,ct=T.image[0]&&T.image[0].isDataTexture,wt=[];for(let st=0;st<6;st++)!Qt&&!ct?wt[st]=_(T.image[st],!0,s.maxCubemapSize):wt[st]=ct?T.image[st].image:T.image[st],wt[st]=Ut(T,wt[st]);const Gt=wt[0],Vt=r.convert(T.format,T.colorSpace),Et=r.convert(T.type),jt=v(T.internalFormat,Vt,Et,T.colorSpace),Yt=T.isVideoTexture!==!0,pe=J.__version===void 0||K===!0,B=it.dataReady;let vt=b(T,Gt);rt(i.TEXTURE_CUBE_MAP,T);let Z;if(Qt){Yt&&pe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,jt,Gt.width,Gt.height);for(let st=0;st<6;st++){Z=wt[st].mipmaps;for(let gt=0;gt<Z.length;gt++){const Mt=Z[gt];T.format!==rn?Vt!==null?Yt?B&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,gt,0,0,Mt.width,Mt.height,Vt,Mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,gt,jt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,gt,0,0,Mt.width,Mt.height,Vt,Et,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,gt,jt,Mt.width,Mt.height,0,Vt,Et,Mt.data)}}}else{if(Z=T.mipmaps,Yt&&pe){Z.length>0&&vt++;const st=yt(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,jt,st.width,st.height)}for(let st=0;st<6;st++)if(ct){Yt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,wt[st].width,wt[st].height,Vt,Et,wt[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,jt,wt[st].width,wt[st].height,0,Vt,Et,wt[st].data);for(let gt=0;gt<Z.length;gt++){const ee=Z[gt].image[st].image;Yt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,gt+1,0,0,ee.width,ee.height,Vt,Et,ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,gt+1,jt,ee.width,ee.height,0,Vt,Et,ee.data)}}else{Yt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Vt,Et,wt[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,jt,Vt,Et,wt[st]);for(let gt=0;gt<Z.length;gt++){const Mt=Z[gt];Yt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,gt+1,0,0,Vt,Et,Mt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,gt+1,jt,Vt,Et,Mt.image[st])}}}g(T)&&m(i.TEXTURE_CUBE_MAP),J.__version=it.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function tt(L,T,V,K,it,J){const Pt=r.convert(V.format,V.colorSpace),mt=r.convert(V.type),St=v(V.internalFormat,Pt,mt,V.colorSpace);if(!n.get(T).__hasExternalTextures){const ct=Math.max(1,T.width>>J),wt=Math.max(1,T.height>>J);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,J,St,ct,wt,T.depth,0,Pt,mt,null):e.texImage2D(it,J,St,ct,wt,0,Pt,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),at(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,it,n.get(V).__webglTexture,0,dt(T)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,it,n.get(V).__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(L,T,V){if(i.bindRenderbuffer(i.RENDERBUFFER,L),T.depthBuffer){const K=T.depthTexture,it=K&&K.isDepthTexture?K.type:null,J=x(T.stencilBuffer,it),Pt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=dt(T);at(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,J,T.width,T.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,J,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,J,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,L)}else{const K=T.textures;for(let it=0;it<K.length;it++){const J=K[it],Pt=r.convert(J.format,J.colorSpace),mt=r.convert(J.type),St=v(J.internalFormat,Pt,mt,J.colorSpace),Qt=dt(T);V&&at(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt,St,T.width,T.height):at(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt,St,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,St,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),O(T.depthTexture,0);const K=n.get(T.depthTexture).__webglTexture,it=dt(T);if(T.depthTexture.format===Fs)at(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(T.depthTexture.format===Ws)at(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function At(L){const T=n.get(L),V=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const K=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),K){const it=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,K.removeEventListener("dispose",it)};K.addEventListener("dispose",it),T.__depthDisposeCallback=it}T.__boundDepthTexture=K}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ot(T.__webglFramebuffer,L)}else if(V){T.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[K]),T.__webglDepthbuffer[K]===void 0)T.__webglDepthbuffer[K]=i.createRenderbuffer(),ut(T.__webglDepthbuffer[K],L,!1);else{const it=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=T.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),ut(T.__webglDepthbuffer,L,!1);else{const K=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(L,T,V){const K=n.get(L);T!==void 0&&tt(K.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&At(L)}function Lt(L){const T=L.texture,V=n.get(L),K=n.get(T);L.addEventListener("dispose",w);const it=L.textures,J=L.isWebGLCubeRenderTarget===!0,Pt=it.length>1;if(Pt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=T.version,o.memory.textures++),J){V.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer[mt]=[];for(let St=0;St<T.mipmaps.length;St++)V.__webglFramebuffer[mt][St]=i.createFramebuffer()}else V.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer=[];for(let mt=0;mt<T.mipmaps.length;mt++)V.__webglFramebuffer[mt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let mt=0,St=it.length;mt<St;mt++){const Qt=n.get(it[mt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&at(L)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let mt=0;mt<it.length;mt++){const St=it[mt];V.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[mt]);const Qt=r.convert(St.format,St.colorSpace),ct=r.convert(St.type),wt=v(St.internalFormat,Qt,ct,St.colorSpace,L.isXRRenderTarget===!0),Gt=dt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,wt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,V.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(V.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),rt(i.TEXTURE_CUBE_MAP,T);for(let mt=0;mt<6;mt++)if(T.mipmaps&&T.mipmaps.length>0)for(let St=0;St<T.mipmaps.length;St++)tt(V.__webglFramebuffer[mt][St],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,St);else tt(V.__webglFramebuffer[mt],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);g(T)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let mt=0,St=it.length;mt<St;mt++){const Qt=it[mt],ct=n.get(Qt);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),rt(i.TEXTURE_2D,Qt),tt(V.__webglFramebuffer,L,Qt,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,0),g(Qt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(mt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,K.__webglTexture),rt(mt,T),T.mipmaps&&T.mipmaps.length>0)for(let St=0;St<T.mipmaps.length;St++)tt(V.__webglFramebuffer[St],L,T,i.COLOR_ATTACHMENT0,mt,St);else tt(V.__webglFramebuffer,L,T,i.COLOR_ATTACHMENT0,mt,0);g(T)&&m(mt),e.unbindTexture()}L.depthBuffer&&At(L)}function Bt(L){const T=L.textures;for(let V=0,K=T.length;V<K;V++){const it=T[V];if(g(it)){const J=L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Pt=n.get(it).__webglTexture;e.bindTexture(J,Pt),m(J),e.unbindTexture()}}}const j=[],D=[];function ht(L){if(L.samples>0){if(at(L)===!1){const T=L.textures,V=L.width,K=L.height;let it=i.COLOR_BUFFER_BIT;const J=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(L),mt=T.length>1;if(mt)for(let St=0;St<T.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let St=0;St<T.length;St++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[St]);const Qt=n.get(T[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qt,0)}i.blitFramebuffer(0,0,V,K,0,0,V,K,it,i.NEAREST),c===!0&&(j.length=0,D.length=0,j.push(i.COLOR_ATTACHMENT0+St),L.depthBuffer&&L.resolveDepthBuffer===!1&&(j.push(J),D.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,j))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let St=0;St<T.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[St]);const Qt=n.get(T[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,Qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const T=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function dt(L){return Math.min(s.maxSamples,L.samples)}function at(L){const T=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ft(L){const T=o.render.frame;u.get(L)!==T&&(u.set(L,T),L.update())}function Ut(L,T){const V=L.colorSpace,K=L.format,it=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||V!==Oi&&V!==bi&&(se.getTransfer(V)===me?(K!==rn||it!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),T}function yt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=P,this.resetTextureUnits=M,this.setTexture2D=O,this.setTexture2DArray=G,this.setTexture3D=z,this.setTextureCube=F,this.rebindTextures=Tt,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=at}function b_(i,t){function e(n,s=bi){let r;const o=se.getTransfer(s);if(n===ci)return i.UNSIGNED_BYTE;if(n===eu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===nu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tf)return i.BYTE;if(n===ef)return i.SHORT;if(n===kr)return i.UNSIGNED_SHORT;if(n===tu)return i.INT;if(n===Li)return i.UNSIGNED_INT;if(n===vn)return i.FLOAT;if(n===Zr)return i.HALF_FLOAT;if(n===sf)return i.ALPHA;if(n===rf)return i.RGB;if(n===rn)return i.RGBA;if(n===of)return i.LUMINANCE;if(n===af)return i.LUMINANCE_ALPHA;if(n===Fs)return i.DEPTH_COMPONENT;if(n===Ws)return i.DEPTH_STENCIL;if(n===iu)return i.RED;if(n===ua)return i.RED_INTEGER;if(n===cf)return i.RG;if(n===su)return i.RG_INTEGER;if(n===ru)return i.RGBA_INTEGER;if(n===wo||n===Ao||n===Eo||n===To)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fl||n===pl||n===ml||n===gl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_l||n===xl||n===yl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_l||n===xl)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vl||n===Ml||n===bl||n===Sl||n===wl||n===Al||n===El||n===Tl||n===Cl||n===Rl||n===Pl||n===Il||n===Ll||n===Dl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===vl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ml)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Al)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===El)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Il)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ll)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Dl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Co||n===Nl||n===Ul)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Co)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lf||n===Ol||n===Fl||n===zl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Co)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class S_ extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Re extends ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zw={type:"move"};class yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),m=this._getHandJoint(l,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Zw)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Kw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jw=`
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

}`;class Qw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ae,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new kn({vertexShader:Kw,fragmentShader:Jw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Wt(new Js(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jw extends li{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,p=null;const _=new Qw,g=e.getContextAttributes();let m=null,v=null;const x=[],b=[],S=new et;let w=null;const A=new Be;A.layers.enable(1),A.viewport=new Jt;const E=new Be;E.layers.enable(2),E.viewport=new Jt;const C=[A,E],y=new S_;y.layers.enable(1),y.layers.enable(2);let M=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let tt=x[$];return tt===void 0&&(tt=new yh,x[$]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function($){let tt=x[$];return tt===void 0&&(tt=new yh,x[$]=tt),tt.getGripSpace()},this.getHand=function($){let tt=x[$];return tt===void 0&&(tt=new yh,x[$]=tt),tt.getHandSpace()};function U($){const tt=b.indexOf($.inputSource);if(tt===-1)return;const ut=x[tt];ut!==void 0&&(ut.update($.inputSource,$.frame,l||o),ut.dispatchEvent({type:$.type,data:$.inputSource}))}function O(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",G);for(let $=0;$<x.length;$++){const tt=b[$];tt!==null&&(b[$]=null,x[$].disconnect(tt))}M=null,P=null,_.reset(),t.setRenderTarget(m),f=null,d=null,h=null,s=null,v=null,Rt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",O),s.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(S),s.renderState.layers===void 0){const tt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Kn(f.framebufferWidth,f.framebufferHeight,{format:rn,type:ci,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let tt=null,ut=null,ot=null;g.depth&&(ot=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=g.stencil?Ws:Fs,ut=g.stencil?Vs:Li);const At={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(At),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Kn(d.textureWidth,d.textureHeight,{format:rn,type:ci,depthTexture:new xf(d.textureWidth,d.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Rt.setContext(s),Rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G($){for(let tt=0;tt<$.removed.length;tt++){const ut=$.removed[tt],ot=b.indexOf(ut);ot>=0&&(b[ot]=null,x[ot].disconnect(ut))}for(let tt=0;tt<$.added.length;tt++){const ut=$.added[tt];let ot=b.indexOf(ut);if(ot===-1){for(let Tt=0;Tt<x.length;Tt++)if(Tt>=b.length){b.push(ut),ot=Tt;break}else if(b[Tt]===null){b[Tt]=ut,ot=Tt;break}if(ot===-1)break}const At=x[ot];At&&At.connect(ut)}}const z=new I,F=new I;function N($,tt,ut){z.setFromMatrixPosition(tt.matrixWorld),F.setFromMatrixPosition(ut.matrixWorld);const ot=z.distanceTo(F),At=tt.projectionMatrix.elements,Tt=ut.projectionMatrix.elements,Lt=At[14]/(At[10]-1),Bt=At[14]/(At[10]+1),j=(At[9]+1)/At[5],D=(At[9]-1)/At[5],ht=(At[8]-1)/At[0],dt=(Tt[8]+1)/Tt[0],at=Lt*ht,ft=Lt*dt,Ut=ot/(-ht+dt),yt=Ut*-ht;if(tt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(yt),$.translateZ(Ut),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),At[10]===-1)$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const L=Lt+Ut,T=Bt+Ut,V=at-yt,K=ft+(ot-yt),it=j*Bt/T*L,J=D*Bt/T*L;$.projectionMatrix.makePerspective(V,K,it,J,L,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function W($,tt){tt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(tt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let tt=$.near,ut=$.far;_.texture!==null&&(_.depthNear>0&&(tt=_.depthNear),_.depthFar>0&&(ut=_.depthFar)),y.near=E.near=A.near=tt,y.far=E.far=A.far=ut,(M!==y.near||P!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),M=y.near,P=y.far);const ot=$.parent,At=y.cameras;W(y,ot);for(let Tt=0;Tt<At.length;Tt++)W(At[Tt],ot);At.length===2?N(y,A,E):y.projectionMatrix.copy(A.projectionMatrix),Q($,y,ot)};function Q($,tt,ut){ut===null?$.matrix.copy(tt.matrixWorld):($.matrix.copy(ut.matrixWorld),$.matrix.invert(),$.matrix.multiply(tt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Hr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let rt=null;function bt($,tt){if(u=tt.getViewerPose(l||o),p=tt,u!==null){const ut=u.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let ot=!1;ut.length!==y.cameras.length&&(y.cameras.length=0,ot=!0);for(let Tt=0;Tt<ut.length;Tt++){const Lt=ut[Tt];let Bt=null;if(f!==null)Bt=f.getViewport(Lt);else{const D=h.getViewSubImage(d,Lt);Bt=D.viewport,Tt===0&&(t.setRenderTargetTextures(v,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(v))}let j=C[Tt];j===void 0&&(j=new Be,j.layers.enable(Tt),j.viewport=new Jt,C[Tt]=j),j.matrix.fromArray(Lt.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Lt.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),Tt===0&&(y.matrix.copy(j.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ot===!0&&y.cameras.push(j)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")){const Tt=h.getDepthInformation(ut[0]);Tt&&Tt.isValid&&Tt.texture&&_.init(t,Tt,s.renderState)}}for(let ut=0;ut<x.length;ut++){const ot=b[ut],At=x[ut];ot!==null&&At!==void 0&&At.update(ot,tt,l||o)}rt&&rt($,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),p=null}const Rt=new __;Rt.setAnimationLoop(bt),this.setAnimationLoop=function($){rt=$},this.dispose=function(){}}}const gs=new bn,tA=new Nt;function eA(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,f_(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,v,x,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,b)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,v,x):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ke&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ke&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const v=t.get(m),x=v.envMap,b=v.envMapRotation;x&&(g.envMap.value=x,gs.copy(b),gs.x*=-1,gs.y*=-1,gs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),g.envMapRotation.value.setFromMatrix4(tA.makeRotationFromEuler(gs)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,v,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=x*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ke&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const v=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function nA(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,x){const b=x.program;n.uniformBlockBinding(v,b)}function l(v,x){let b=s[v.id];b===void 0&&(p(v),b=u(v),s[v.id]=b,v.addEventListener("dispose",g));const S=x.program;n.updateUBOMapping(v,S);const w=t.render.frame;r[v.id]!==w&&(d(v),r[v.id]=w)}function u(v){const x=h();v.__bindingPointIndex=x;const b=i.createBuffer(),S=v.__size,w=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,S,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,b),b}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=s[v.id],b=v.uniforms,S=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let w=0,A=b.length;w<A;w++){const E=Array.isArray(b[w])?b[w]:[b[w]];for(let C=0,y=E.length;C<y;C++){const M=E[C];if(f(M,w,C,S)===!0){const P=M.__offset,U=Array.isArray(M.value)?M.value:[M.value];let O=0;for(let G=0;G<U.length;G++){const z=U[G],F=_(z);typeof z=="number"||typeof z=="boolean"?(M.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,P+O,M.__data)):z.isMatrix3?(M.__data[0]=z.elements[0],M.__data[1]=z.elements[1],M.__data[2]=z.elements[2],M.__data[3]=0,M.__data[4]=z.elements[3],M.__data[5]=z.elements[4],M.__data[6]=z.elements[5],M.__data[7]=0,M.__data[8]=z.elements[6],M.__data[9]=z.elements[7],M.__data[10]=z.elements[8],M.__data[11]=0):(z.toArray(M.__data,O),O+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,M.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,x,b,S){const w=v.value,A=x+"_"+b;if(S[A]===void 0)return typeof w=="number"||typeof w=="boolean"?S[A]=w:S[A]=w.clone(),!0;{const E=S[A];if(typeof w=="number"||typeof w=="boolean"){if(E!==w)return S[A]=w,!0}else if(E.equals(w)===!1)return E.copy(w),!0}return!1}function p(v){const x=v.uniforms;let b=0;const S=16;for(let A=0,E=x.length;A<E;A++){const C=Array.isArray(x[A])?x[A]:[x[A]];for(let y=0,M=C.length;y<M;y++){const P=C[y],U=Array.isArray(P.value)?P.value:[P.value];for(let O=0,G=U.length;O<G;O++){const z=U[O],F=_(z),N=b%S,W=N%F.boundary,Q=N+W;b+=W,Q!==0&&S-Q<F.storage&&(b+=S-Q),P.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=b,b+=F.storage}}}const w=b%S;return w>0&&(b+=S-w),v.__size=b,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function g(v){const x=v.target;x.removeEventListener("dispose",g);const b=o.indexOf(x.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function m(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}class w_{constructor(t={}){const{canvas:e=l_(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),p=new Int32Array(4);let _=null,g=null;const m=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mn,this.toneMapping=Ci,this.toneMappingExposure=1;const x=this;let b=!1,S=0,w=0,A=null,E=-1,C=null;const y=new Jt,M=new Jt;let P=null;const U=new q(0);let O=0,G=e.width,z=e.height,F=1,N=null,W=null;const Q=new Jt(0,0,G,z),rt=new Jt(0,0,G,z);let bt=!1;const Rt=new fa;let $=!1,tt=!1;const ut=new Nt,ot=new Nt,At=new I,Tt=new Jt,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function j(){return A===null?F:1}let D=n;function ht(R,k){return e.getContext(R,k)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ql}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),D===null){const k="webgl2";if(D=ht(k,R),D===null)throw ht(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let dt,at,ft,Ut,yt,L,T,V,K,it,J,Pt,mt,St,Qt,ct,wt,Gt,Vt,Et,jt,Yt,pe,B;function vt(){dt=new cS(D),dt.init(),Yt=new b_(D,dt),at=new nS(D,dt,t,Yt),ft=new Gw(D),at.reverseDepthBuffer&&ft.buffers.depth.setReversed(!0),Ut=new hS(D),yt=new Rw,L=new $w(D,dt,ft,yt,at,Yt,Ut),T=new sS(x),V=new aS(x),K=new xM(D),pe=new tS(D,K),it=new lS(D,K,Ut,pe),J=new fS(D,it,K,Ut),Vt=new dS(D,at,L),ct=new iS(yt),Pt=new Cw(x,T,V,dt,at,pe,ct),mt=new eA(x,yt),St=new Iw,Qt=new Fw(dt),Gt=new jb(x,T,V,ft,J,d,c),wt=new kw(x,J,at),B=new nA(D,Ut,at,ft),Et=new eS(D,dt,Ut),jt=new uS(D,dt,Ut),Ut.programs=Pt.programs,x.capabilities=at,x.extensions=dt,x.properties=yt,x.renderLists=St,x.shadowMap=wt,x.state=ft,x.info=Ut}vt();const Z=new jw(x,D);this.xr=Z,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const R=dt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=dt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(R){R!==void 0&&(F=R,this.setSize(G,z,!1))},this.getSize=function(R){return R.set(G,z)},this.setSize=function(R,k,X=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=R,z=k,e.width=Math.floor(R*F),e.height=Math.floor(k*F),X===!0&&(e.style.width=R+"px",e.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(G*F,z*F).floor()},this.setDrawingBufferSize=function(R,k,X){G=R,z=k,F=X,e.width=Math.floor(R*X),e.height=Math.floor(k*X),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(y)},this.getViewport=function(R){return R.copy(Q)},this.setViewport=function(R,k,X,Y){R.isVector4?Q.set(R.x,R.y,R.z,R.w):Q.set(R,k,X,Y),ft.viewport(y.copy(Q).multiplyScalar(F).round())},this.getScissor=function(R){return R.copy(rt)},this.setScissor=function(R,k,X,Y){R.isVector4?rt.set(R.x,R.y,R.z,R.w):rt.set(R,k,X,Y),ft.scissor(M.copy(rt).multiplyScalar(F).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(R){ft.setScissorTest(bt=R)},this.setOpaqueSort=function(R){N=R},this.setTransparentSort=function(R){W=R},this.getClearColor=function(R){return R.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(R=!0,k=!0,X=!0){let Y=0;if(R){let H=!1;if(A!==null){const lt=A.texture.format;H=lt===ru||lt===su||lt===ua}if(H){const lt=A.texture.type,_t=lt===ci||lt===Li||lt===kr||lt===Vs||lt===eu||lt===nu,Ct=Gt.getClearColor(),It=Gt.getClearAlpha(),zt=Ct.r,kt=Ct.g,Dt=Ct.b;_t?(f[0]=zt,f[1]=kt,f[2]=Dt,f[3]=It,D.clearBufferuiv(D.COLOR,0,f)):(p[0]=zt,p[1]=kt,p[2]=Dt,p[3]=It,D.clearBufferiv(D.COLOR,0,p))}else Y|=D.COLOR_BUFFER_BIT}k&&(Y|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),X&&(Y|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),St.dispose(),Qt.dispose(),yt.dispose(),T.dispose(),V.dispose(),J.dispose(),pe.dispose(),B.dispose(),Pt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",lp),Z.removeEventListener("sessionend",up),us.stop()};function st(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const R=Ut.autoReset,k=wt.enabled,X=wt.autoUpdate,Y=wt.needsUpdate,H=wt.type;vt(),Ut.autoReset=R,wt.enabled=k,wt.autoUpdate=X,wt.needsUpdate=Y,wt.type=H}function Mt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ee(R){const k=R.target;k.removeEventListener("dispose",ee),Pe(k)}function Pe(R){dn(R),yt.remove(R)}function dn(R){const k=yt.get(R).programs;k!==void 0&&(k.forEach(function(X){Pt.releaseProgram(X)}),R.isShaderMaterial&&Pt.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,X,Y,H,lt){k===null&&(k=Lt);const _t=H.isMesh&&H.matrixWorld.determinant()<0,Ct=Fy(R,k,X,Y,H);ft.setMaterial(Y,_t);let It=X.index,zt=1;if(Y.wireframe===!0){if(It=it.getWireframeAttribute(X),It===void 0)return;zt=2}const kt=X.drawRange,Dt=X.attributes.position;let le=kt.start*zt,xe=(kt.start+kt.count)*zt;lt!==null&&(le=Math.max(le,lt.start*zt),xe=Math.min(xe,(lt.start+lt.count)*zt)),It!==null?(le=Math.max(le,0),xe=Math.min(xe,It.count)):Dt!=null&&(le=Math.max(le,0),xe=Math.min(xe,Dt.count));const be=xe-le;if(be<0||be===1/0)return;pe.setup(H,Y,Ct,X,It);let wn,oe=Et;if(It!==null&&(wn=K.get(It),oe=jt,oe.setIndex(wn)),H.isMesh)Y.wireframe===!0?(ft.setLineWidth(Y.wireframeLinewidth*j()),oe.setMode(D.LINES)):oe.setMode(D.TRIANGLES);else if(H.isLine){let Ot=Y.linewidth;Ot===void 0&&(Ot=1),ft.setLineWidth(Ot*j()),H.isLineSegments?oe.setMode(D.LINES):H.isLineLoop?oe.setMode(D.LINE_LOOP):oe.setMode(D.LINE_STRIP)}else H.isPoints?oe.setMode(D.POINTS):H.isSprite&&oe.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)oe.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))oe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ot=H._multiDrawStarts,He=H._multiDrawCounts,ae=H._multiDrawCount,Gn=It?K.get(It).bytesPerElement:1,sr=yt.get(Y).currentProgram.getUniforms();for(let An=0;An<ae;An++)sr.setValue(D,"_gl_DrawID",An),oe.render(Ot[An]/Gn,He[An])}else if(H.isInstancedMesh)oe.renderInstances(le,be,H.count);else if(X.isInstancedBufferGeometry){const Ot=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,He=Math.min(X.instanceCount,Ot);oe.renderInstances(le,be,He)}else oe.render(le,be)};function re(R,k,X){R.transparent===!0&&R.side===_e&&R.forceSinglePass===!1?(R.side=Ke,R.needsUpdate=!0,Pa(R,k,X),R.side=Pi,R.needsUpdate=!0,Pa(R,k,X),R.side=_e):Pa(R,k,X)}this.compile=function(R,k,X=null){X===null&&(X=R),g=Qt.get(X),g.init(k),v.push(g),X.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),R!==X&&R.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),g.setupLights();const Y=new Set;return R.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const lt=H.material;if(lt)if(Array.isArray(lt))for(let _t=0;_t<lt.length;_t++){const Ct=lt[_t];re(Ct,X,H),Y.add(Ct)}else re(lt,X,H),Y.add(lt)}),v.pop(),g=null,Y},this.compileAsync=function(R,k,X=null){const Y=this.compile(R,k,X);return new Promise(H=>{function lt(){if(Y.forEach(function(_t){yt.get(_t).currentProgram.isReady()&&Y.delete(_t)}),Y.size===0){H(R);return}setTimeout(lt,10)}dt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let fn=null;function fi(R){fn&&fn(R)}function lp(){us.stop()}function up(){us.start()}const us=new __;us.setAnimationLoop(fi),typeof self<"u"&&us.setContext(self),this.setAnimationLoop=function(R){fn=R,Z.setAnimationLoop(R),R===null?us.stop():us.start()},Z.addEventListener("sessionstart",lp),Z.addEventListener("sessionend",up),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(k),k=Z.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,k,A),g=Qt.get(R,v.length),g.init(k),v.push(g),ot.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Rt.setFromProjectionMatrix(ot),tt=this.localClippingEnabled,$=ct.init(this.clippingPlanes,tt),_=St.get(R,m.length),_.init(),m.push(_),Z.enabled===!0&&Z.isPresenting===!0){const lt=x.xr.getDepthSensingMesh();lt!==null&&Gu(lt,k,-1/0,x.sortObjects)}Gu(R,k,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(N,W),Bt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Bt&&Gt.addToRenderList(_,R),this.info.render.frame++,$===!0&&ct.beginShadows();const X=g.state.shadowsArray;wt.render(X,R,k),$===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=_.opaque,H=_.transmissive;if(g.setupLights(),k.isArrayCamera){const lt=k.cameras;if(H.length>0)for(let _t=0,Ct=lt.length;_t<Ct;_t++){const It=lt[_t];dp(Y,H,R,It)}Bt&&Gt.render(R);for(let _t=0,Ct=lt.length;_t<Ct;_t++){const It=lt[_t];hp(_,R,It,It.viewport)}}else H.length>0&&dp(Y,H,R,k),Bt&&Gt.render(R),hp(_,R,k);A!==null&&(L.updateMultisampleRenderTarget(A),L.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(x,R,k),pe.resetDefaultState(),E=-1,C=null,v.pop(),v.length>0?(g=v[v.length-1],$===!0&&ct.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Gu(R,k,X,Y){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)X=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Rt.intersectsSprite(R)){Y&&Tt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ot);const _t=J.update(R),Ct=R.material;Ct.visible&&_.push(R,_t,Ct,X,Tt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Rt.intersectsObject(R))){const _t=J.update(R),Ct=R.material;if(Y&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Tt.copy(R.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Tt.copy(_t.boundingSphere.center)),Tt.applyMatrix4(R.matrixWorld).applyMatrix4(ot)),Array.isArray(Ct)){const It=_t.groups;for(let zt=0,kt=It.length;zt<kt;zt++){const Dt=It[zt],le=Ct[Dt.materialIndex];le&&le.visible&&_.push(R,_t,le,X,Tt.z,Dt)}}else Ct.visible&&_.push(R,_t,Ct,X,Tt.z,null)}}const lt=R.children;for(let _t=0,Ct=lt.length;_t<Ct;_t++)Gu(lt[_t],k,X,Y)}function hp(R,k,X,Y){const H=R.opaque,lt=R.transmissive,_t=R.transparent;g.setupLightsView(X),$===!0&&ct.setGlobalState(x.clippingPlanes,X),Y&&ft.viewport(y.copy(Y)),H.length>0&&Ra(H,k,X),lt.length>0&&Ra(lt,k,X),_t.length>0&&Ra(_t,k,X),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function dp(R,k,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Y.id]===void 0&&(g.state.transmissionRenderTarget[Y.id]=new Kn(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?Zr:ci,minFilter:si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));const lt=g.state.transmissionRenderTarget[Y.id],_t=Y.viewport||y;lt.setSize(_t.z,_t.w);const Ct=x.getRenderTarget();x.setRenderTarget(lt),x.getClearColor(U),O=x.getClearAlpha(),O<1&&x.setClearColor(16777215,.5),x.clear(),Bt&&Gt.render(X);const It=x.toneMapping;x.toneMapping=Ci;const zt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),g.setupLightsView(Y),$===!0&&ct.setGlobalState(x.clippingPlanes,Y),Ra(R,X,Y),L.updateMultisampleRenderTarget(lt),L.updateRenderTargetMipmap(lt),dt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Dt=0,le=k.length;Dt<le;Dt++){const xe=k[Dt],be=xe.object,wn=xe.geometry,oe=xe.material,Ot=xe.group;if(oe.side===_e&&be.layers.test(Y.layers)){const He=oe.side;oe.side=Ke,oe.needsUpdate=!0,fp(be,X,Y,wn,oe,Ot),oe.side=He,oe.needsUpdate=!0,kt=!0}}kt===!0&&(L.updateMultisampleRenderTarget(lt),L.updateRenderTargetMipmap(lt))}x.setRenderTarget(Ct),x.setClearColor(U,O),zt!==void 0&&(Y.viewport=zt),x.toneMapping=It}function Ra(R,k,X){const Y=k.isScene===!0?k.overrideMaterial:null;for(let H=0,lt=R.length;H<lt;H++){const _t=R[H],Ct=_t.object,It=_t.geometry,zt=Y===null?_t.material:Y,kt=_t.group;Ct.layers.test(X.layers)&&fp(Ct,k,X,It,zt,kt)}}function fp(R,k,X,Y,H,lt){R.onBeforeRender(x,k,X,Y,H,lt),R.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),H.onBeforeRender(x,k,X,Y,R,lt),H.transparent===!0&&H.side===_e&&H.forceSinglePass===!1?(H.side=Ke,H.needsUpdate=!0,x.renderBufferDirect(X,k,Y,H,R,lt),H.side=Pi,H.needsUpdate=!0,x.renderBufferDirect(X,k,Y,H,R,lt),H.side=_e):x.renderBufferDirect(X,k,Y,H,R,lt),R.onAfterRender(x,k,X,Y,H,lt)}function Pa(R,k,X){k.isScene!==!0&&(k=Lt);const Y=yt.get(R),H=g.state.lights,lt=g.state.shadowsArray,_t=H.state.version,Ct=Pt.getParameters(R,H.state,lt,k,X),It=Pt.getProgramCacheKey(Ct);let zt=Y.programs;Y.environment=R.isMeshStandardMaterial?k.environment:null,Y.fog=k.fog,Y.envMap=(R.isMeshStandardMaterial?V:T).get(R.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,zt===void 0&&(R.addEventListener("dispose",ee),zt=new Map,Y.programs=zt);let kt=zt.get(It);if(kt!==void 0){if(Y.currentProgram===kt&&Y.lightsStateVersion===_t)return mp(R,Ct),kt}else Ct.uniforms=Pt.getUniforms(R),R.onBeforeCompile(Ct,x),kt=Pt.acquireProgram(Ct,It),zt.set(It,kt),Y.uniforms=Ct.uniforms;const Dt=Y.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Dt.clippingPlanes=ct.uniform),mp(R,Ct),Y.needsLights=By(R),Y.lightsStateVersion=_t,Y.needsLights&&(Dt.ambientLightColor.value=H.state.ambient,Dt.lightProbe.value=H.state.probe,Dt.directionalLights.value=H.state.directional,Dt.directionalLightShadows.value=H.state.directionalShadow,Dt.spotLights.value=H.state.spot,Dt.spotLightShadows.value=H.state.spotShadow,Dt.rectAreaLights.value=H.state.rectArea,Dt.ltc_1.value=H.state.rectAreaLTC1,Dt.ltc_2.value=H.state.rectAreaLTC2,Dt.pointLights.value=H.state.point,Dt.pointLightShadows.value=H.state.pointShadow,Dt.hemisphereLights.value=H.state.hemi,Dt.directionalShadowMap.value=H.state.directionalShadowMap,Dt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Dt.spotShadowMap.value=H.state.spotShadowMap,Dt.spotLightMatrix.value=H.state.spotLightMatrix,Dt.spotLightMap.value=H.state.spotLightMap,Dt.pointShadowMap.value=H.state.pointShadowMap,Dt.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=kt,Y.uniformsList=null,kt}function pp(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=Hc.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function mp(R,k){const X=yt.get(R);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function Fy(R,k,X,Y,H){k.isScene!==!0&&(k=Lt),L.resetTextureUnits();const lt=k.fog,_t=Y.isMeshStandardMaterial?k.environment:null,Ct=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Oi,It=(Y.isMeshStandardMaterial?V:T).get(Y.envMap||_t),zt=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,kt=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Dt=!!X.morphAttributes.position,le=!!X.morphAttributes.normal,xe=!!X.morphAttributes.color;let be=Ci;Y.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(be=x.toneMapping);const wn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,oe=wn!==void 0?wn.length:0,Ot=yt.get(Y),He=g.state.lights;if($===!0&&(tt===!0||R!==C)){const Ln=R===C&&Y.id===E;ct.setState(Y,R,Ln)}let ae=!1;Y.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==He.state.version||Ot.outputColorSpace!==Ct||H.isBatchedMesh&&Ot.batching===!1||!H.isBatchedMesh&&Ot.batching===!0||H.isBatchedMesh&&Ot.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ot.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ot.instancing===!1||!H.isInstancedMesh&&Ot.instancing===!0||H.isSkinnedMesh&&Ot.skinning===!1||!H.isSkinnedMesh&&Ot.skinning===!0||H.isInstancedMesh&&Ot.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ot.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ot.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ot.instancingMorph===!1&&H.morphTexture!==null||Ot.envMap!==It||Y.fog===!0&&Ot.fog!==lt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==ct.numPlanes||Ot.numIntersection!==ct.numIntersection)||Ot.vertexAlphas!==zt||Ot.vertexTangents!==kt||Ot.morphTargets!==Dt||Ot.morphNormals!==le||Ot.morphColors!==xe||Ot.toneMapping!==be||Ot.morphTargetsCount!==oe)&&(ae=!0):(ae=!0,Ot.__version=Y.version);let Gn=Ot.currentProgram;ae===!0&&(Gn=Pa(Y,k,H));let sr=!1,An=!1,Vu=!1;const Ee=Gn.getUniforms(),Bi=Ot.uniforms;if(ft.useProgram(Gn.program)&&(sr=!0,An=!0,Vu=!0),Y.id!==E&&(E=Y.id,An=!0),sr||C!==R){at.reverseDepthBuffer?(ut.copy(R.projectionMatrix),Gv(ut),Vv(ut),Ee.setValue(D,"projectionMatrix",ut)):Ee.setValue(D,"projectionMatrix",R.projectionMatrix),Ee.setValue(D,"viewMatrix",R.matrixWorldInverse);const Ln=Ee.map.cameraPosition;Ln!==void 0&&Ln.setValue(D,At.setFromMatrixPosition(R.matrixWorld)),at.logarithmicDepthBuffer&&Ee.setValue(D,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ee.setValue(D,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,An=!0,Vu=!0)}if(H.isSkinnedMesh){Ee.setOptional(D,H,"bindMatrix"),Ee.setOptional(D,H,"bindMatrixInverse");const Ln=H.skeleton;Ln&&(Ln.boneTexture===null&&Ln.computeBoneTexture(),Ee.setValue(D,"boneTexture",Ln.boneTexture,L))}H.isBatchedMesh&&(Ee.setOptional(D,H,"batchingTexture"),Ee.setValue(D,"batchingTexture",H._matricesTexture,L),Ee.setOptional(D,H,"batchingIdTexture"),Ee.setValue(D,"batchingIdTexture",H._indirectTexture,L),Ee.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&Ee.setValue(D,"batchingColorTexture",H._colorsTexture,L));const Wu=X.morphAttributes;if((Wu.position!==void 0||Wu.normal!==void 0||Wu.color!==void 0)&&Vt.update(H,X,Gn),(An||Ot.receiveShadow!==H.receiveShadow)&&(Ot.receiveShadow=H.receiveShadow,Ee.setValue(D,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Bi.envMap.value=It,Bi.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&k.environment!==null&&(Bi.envMapIntensity.value=k.environmentIntensity),An&&(Ee.setValue(D,"toneMappingExposure",x.toneMappingExposure),Ot.needsLights&&zy(Bi,Vu),lt&&Y.fog===!0&&mt.refreshFogUniforms(Bi,lt),mt.refreshMaterialUniforms(Bi,Y,F,z,g.state.transmissionRenderTarget[R.id]),Hc.upload(D,pp(Ot),Bi,L)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Hc.upload(D,pp(Ot),Bi,L),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ee.setValue(D,"center",H.center),Ee.setValue(D,"modelViewMatrix",H.modelViewMatrix),Ee.setValue(D,"normalMatrix",H.normalMatrix),Ee.setValue(D,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ln=Y.uniformsGroups;for(let Xu=0,ky=Ln.length;Xu<ky;Xu++){const gp=Ln[Xu];B.update(gp,Gn),B.bind(gp,Gn)}}return Gn}function zy(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function By(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,k,X){yt.get(R.texture).__webglTexture=k,yt.get(R.depthTexture).__webglTexture=X;const Y=yt.get(R);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,k){const X=yt.get(R);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,X=0){A=R,S=k,w=X;let Y=!0,H=null,lt=!1,_t=!1;if(R){const It=yt.get(R);if(It.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(D.FRAMEBUFFER,null),Y=!1;else if(It.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(It.__hasExternalTextures)L.rebindTextures(R,yt.get(R.texture).__webglTexture,yt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Dt=R.depthTexture;if(It.__boundDepthTexture!==Dt){if(Dt!==null&&yt.has(Dt)&&(R.width!==Dt.image.width||R.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}const zt=R.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(_t=!0);const kt=yt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(kt[k])?H=kt[k][X]:H=kt[k],lt=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?H=yt.get(R).__webglMultisampledFramebuffer:Array.isArray(kt)?H=kt[X]:H=kt,y.copy(R.viewport),M.copy(R.scissor),P=R.scissorTest}else y.copy(Q).multiplyScalar(F).floor(),M.copy(rt).multiplyScalar(F).floor(),P=bt;if(ft.bindFramebuffer(D.FRAMEBUFFER,H)&&Y&&ft.drawBuffers(R,H),ft.viewport(y),ft.scissor(M),ft.setScissorTest(P),lt){const It=yt.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,It.__webglTexture,X)}else if(_t){const It=yt.get(R.texture),zt=k||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,It.__webglTexture,X||0,zt)}E=-1},this.readRenderTargetPixels=function(R,k,X,Y,H,lt,_t){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=yt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&_t!==void 0&&(Ct=Ct[_t]),Ct){ft.bindFramebuffer(D.FRAMEBUFFER,Ct);try{const It=R.texture,zt=It.format,kt=It.type;if(!at.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-Y&&X>=0&&X<=R.height-H&&D.readPixels(k,X,Y,H,Yt.convert(zt),Yt.convert(kt),lt)}finally{const It=A!==null?yt.get(A).__webglFramebuffer:null;ft.bindFramebuffer(D.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(R,k,X,Y,H,lt,_t){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=yt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&_t!==void 0&&(Ct=Ct[_t]),Ct){const It=R.texture,zt=It.format,kt=It.type;if(!at.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=R.width-Y&&X>=0&&X<=R.height-H){ft.bindFramebuffer(D.FRAMEBUFFER,Ct);const Dt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Dt),D.bufferData(D.PIXEL_PACK_BUFFER,lt.byteLength,D.STREAM_READ),D.readPixels(k,X,Y,H,Yt.convert(zt),Yt.convert(kt),0);const le=A!==null?yt.get(A).__webglFramebuffer:null;ft.bindFramebuffer(D.FRAMEBUFFER,le);const xe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Hv(D,xe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Dt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,lt),D.deleteBuffer(Dt),D.deleteSync(xe),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,k=null,X=0){R.isTexture!==!0&&(kc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,R=arguments[1]);const Y=Math.pow(2,-X),H=Math.floor(R.image.width*Y),lt=Math.floor(R.image.height*Y),_t=k!==null?k.x:0,Ct=k!==null?k.y:0;L.setTexture2D(R,0),D.copyTexSubImage2D(D.TEXTURE_2D,X,0,0,_t,Ct,H,lt),ft.unbindTexture()},this.copyTextureToTexture=function(R,k,X=null,Y=null,H=0){R.isTexture!==!0&&(kc("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,R=arguments[1],k=arguments[2],H=arguments[3]||0,X=null);let lt,_t,Ct,It,zt,kt;X!==null?(lt=X.max.x-X.min.x,_t=X.max.y-X.min.y,Ct=X.min.x,It=X.min.y):(lt=R.image.width,_t=R.image.height,Ct=0,It=0),Y!==null?(zt=Y.x,kt=Y.y):(zt=0,kt=0);const Dt=Yt.convert(k.format),le=Yt.convert(k.type);L.setTexture2D(k,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const xe=D.getParameter(D.UNPACK_ROW_LENGTH),be=D.getParameter(D.UNPACK_IMAGE_HEIGHT),wn=D.getParameter(D.UNPACK_SKIP_PIXELS),oe=D.getParameter(D.UNPACK_SKIP_ROWS),Ot=D.getParameter(D.UNPACK_SKIP_IMAGES),He=R.isCompressedTexture?R.mipmaps[H]:R.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,He.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,He.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ct),D.pixelStorei(D.UNPACK_SKIP_ROWS,It),R.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,H,zt,kt,lt,_t,Dt,le,He.data):R.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,H,zt,kt,He.width,He.height,Dt,He.data):D.texSubImage2D(D.TEXTURE_2D,H,zt,kt,lt,_t,Dt,le,He),D.pixelStorei(D.UNPACK_ROW_LENGTH,xe),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,be),D.pixelStorei(D.UNPACK_SKIP_PIXELS,wn),D.pixelStorei(D.UNPACK_SKIP_ROWS,oe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ot),H===0&&k.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),ft.unbindTexture()},this.copyTextureToTexture3D=function(R,k,X=null,Y=null,H=0){R.isTexture!==!0&&(kc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,R=arguments[2],k=arguments[3],H=arguments[4]||0);let lt,_t,Ct,It,zt,kt,Dt,le,xe;const be=R.isCompressedTexture?R.mipmaps[H]:R.image;X!==null?(lt=X.max.x-X.min.x,_t=X.max.y-X.min.y,Ct=X.max.z-X.min.z,It=X.min.x,zt=X.min.y,kt=X.min.z):(lt=be.width,_t=be.height,Ct=be.depth,It=0,zt=0,kt=0),Y!==null?(Dt=Y.x,le=Y.y,xe=Y.z):(Dt=0,le=0,xe=0);const wn=Yt.convert(k.format),oe=Yt.convert(k.type);let Ot;if(k.isData3DTexture)L.setTexture3D(k,0),Ot=D.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)L.setTexture2DArray(k,0),Ot=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const He=D.getParameter(D.UNPACK_ROW_LENGTH),ae=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Gn=D.getParameter(D.UNPACK_SKIP_PIXELS),sr=D.getParameter(D.UNPACK_SKIP_ROWS),An=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,be.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,be.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,It),D.pixelStorei(D.UNPACK_SKIP_ROWS,zt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,kt),R.isDataTexture||R.isData3DTexture?D.texSubImage3D(Ot,H,Dt,le,xe,lt,_t,Ct,wn,oe,be.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(Ot,H,Dt,le,xe,lt,_t,Ct,wn,be.data):D.texSubImage3D(Ot,H,Dt,le,xe,lt,_t,Ct,wn,oe,be),D.pixelStorei(D.UNPACK_ROW_LENGTH,He),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ae),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Gn),D.pixelStorei(D.UNPACK_SKIP_ROWS,sr),D.pixelStorei(D.UNPACK_SKIP_IMAGES,An),H===0&&k.generateMipmaps&&D.generateMipmap(Ot),ft.unbindTexture()},this.initRenderTarget=function(R){yt.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),ft.unbindTexture()},this.resetState=function(){S=0,w=0,A=null,ft.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===au?"display-p3":"srgb",e.unpackColorSpace=se.workingColorSpace===ha?"display-p3":"srgb"}}class pu{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new q(t),this.density=e}clone(){return new pu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class pa{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new q(t),this.near=e,this.far=n}clone(){return new pa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class vf extends ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class mu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ko,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const je=new I;class Xs{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$t(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=sn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=sn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=sn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=sn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new he(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Xs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Mf extends Qe{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new q(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let xr;const oo=new I,yr=new I,vr=new I,Mr=new et,ao=new et,A_=new Nt,Ja=new I,co=new I,Qa=new I,im=new et,vh=new et,sm=new et;class E_ extends ie{constructor(t=new Mf){if(super(),this.isSprite=!0,this.type="Sprite",xr===void 0){xr=new Xt;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new mu(e,5);xr.setIndex([0,1,2,0,2,3]),xr.setAttribute("position",new Xs(n,3,0,!1)),xr.setAttribute("uv",new Xs(n,2,3,!1))}this.geometry=xr,this.material=t,this.center=new et(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),yr.setFromMatrixScale(this.matrixWorld),A_.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),vr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&yr.multiplyScalar(-vr.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;ja(Ja.set(-.5,-.5,0),vr,o,yr,s,r),ja(co.set(.5,-.5,0),vr,o,yr,s,r),ja(Qa.set(.5,.5,0),vr,o,yr,s,r),im.set(0,0),vh.set(1,0),sm.set(1,1);let a=t.ray.intersectTriangle(Ja,co,Qa,!1,oo);if(a===null&&(ja(co.set(-.5,.5,0),vr,o,yr,s,r),vh.set(0,1),a=t.ray.intersectTriangle(Ja,Qa,co,!1,oo),a===null))return;const c=t.ray.origin.distanceTo(oo);c<t.near||c>t.far||e.push({distance:c,point:oo.clone(),uv:yn.getInterpolation(oo,Ja,co,Qa,im,vh,sm,new et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ja(i,t,e,n,s,r){Mr.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ao.x=r*Mr.x-s*Mr.y,ao.y=s*Mr.x+r*Mr.y):ao.copy(Mr),i.copy(t),i.x+=ao.x,i.y+=ao.y,i.applyMatrix4(A_)}const tc=new I,rm=new I;class T_ extends ie{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let n=0,s=e.length;n<s;n++){const r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);const s=this.levels;let r;for(r=0;r<s.length&&!(e<s[r].distance);r++);return s.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){const e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){const s=e.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let n,s;for(n=1,s=e.length;n<s;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){tc.setFromMatrixPosition(this.matrixWorld);const s=t.ray.origin.distanceTo(tc);this.getObjectForDistance(s).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){tc.setFromMatrixPosition(t.matrixWorld),rm.setFromMatrixPosition(this.matrixWorld);const n=tc.distanceTo(rm)/t.zoom;e[0].object.visible=!0;let s,r;for(s=1,r=e.length;s<r;s++){let o=e[s].distance;if(e[s].object.visible&&(o-=o*e[s].hysteresis),n>=o)e[s-1].object.visible=!1,e[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)e[s].object.visible=!1}}toJSON(t){const e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let s=0,r=n.length;s<r;s++){const o=n[s];e.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return e}}const om=new I,am=new Jt,cm=new Jt,iA=new I,lm=new Nt,ec=new I,Mh=new Ge,um=new Nt,bh=new Kr;class C_ extends Wt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=gd,this.bindMatrix=new Nt,this.bindMatrixInverse=new Nt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new cn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ec),this.boundingBox.expandByPoint(ec)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ge),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ec),this.boundingSphere.expandByPoint(ec)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mh.copy(this.boundingSphere),Mh.applyMatrix4(s),t.ray.intersectsSphere(Mh)!==!1&&(um.copy(s).invert(),bh.copy(t.ray).applyMatrix4(um),!(this.boundingBox!==null&&bh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,bh)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Jt,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===gd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$g?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;am.fromBufferAttribute(s.attributes.skinIndex,t),cm.fromBufferAttribute(s.attributes.skinWeight,t),om.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=cm.getComponent(r);if(o!==0){const a=am.getComponent(r);lm.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(iA.copy(om).applyMatrix4(lm),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class bf extends ie{constructor(){super(),this.isBone=!0,this.type="Bone"}}class oi extends Ae{constructor(t=null,e=1,n=1,s,r,o,a,c,l=ke,u=ke,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hm=new Nt,sA=new Nt;class gu{constructor(t=[],e=[]){this.uuid=Pn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Nt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Nt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:sA;hm.multiplyMatrices(a,e[r]),hm.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new gu(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new oi(e,t,t,rn,vn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new bf),this.bones.push(o),this.boneInverses.push(new Nt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class gn extends he{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const br=new Nt,dm=new Nt,nc=[],fm=new cn,rA=new Nt,lo=new Wt,uo=new Ge;class ma extends Wt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new gn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,rA)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new cn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,br),fm.copy(t.boundingBox).applyMatrix4(br),this.boundingBox.union(fm)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ge),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,br),uo.copy(t.boundingSphere).applyMatrix4(br),this.boundingSphere.union(uo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(lo.geometry=this.geometry,lo.material=this.material,lo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),uo.copy(this.boundingSphere),uo.applyMatrix4(n),t.ray.intersectsSphere(uo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,br),dm.multiplyMatrices(n,br),lo.matrixWorld=dm,lo.raycast(t,nc);for(let o=0,a=nc.length;o<a;o++){const c=nc[o];c.instanceId=r,c.object=this,e.push(c)}nc.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new gn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new oi(new Float32Array(s*this.count),s,this.count,iu,vn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function oA(i,t){return i.z-t.z}function aA(i,t){return t.z-i.z}class cA{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n){const s=this.pool,r=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});const o=s[this.index];r.push(o),this.index++,o.start=t.start,o.count=t.count,o.z=e,o.index=n}reset(){this.list.length=0,this.index=0}}const Yi=new Nt,Sh=new Nt,lA=new Nt,uA=new q(1,1,1),pm=new Nt,wh=new fa,ic=new cn,_s=new Ge,ho=new I,mm=new I,hA=new I,Ah=new cA,qe=new Wt,sc=[];function dA(i,t,e=0){const n=t.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==t.array.constructor){const s=i.count;for(let r=0;r<s;r++)for(let o=0;o<n;o++)t.setComponent(r+e,o,i.getComponent(r,o))}else t.array.set(i.array,e*n);t.needsUpdate=!0}class R_ extends Wt{get maxInstanceCount(){return this._maxInstanceCount}constructor(t,e,n=e*2,s){super(new Xt,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawInfo=[],this._availableInstanceIds=[],this._drawRanges=[],this._reservedRanges=[],this._bounds=[],this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),n=new oi(e,t,t,rn,vn);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),n=new oi(e,t,t,ua,Li);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),n=new oi(e,t,t,rn,vn);n.colorSpace=se.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){const e=this.geometry,n=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in t.attributes){const o=t.getAttribute(r),{array:a,itemSize:c,normalized:l}=o,u=new a.constructor(n*c),h=new he(u,c,l);e.setAttribute(r,h)}if(t.getIndex()!==null){const r=n>65535?new Uint32Array(s):new Uint16Array(s);e.setIndex(new he(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in e.attributes){if(!t.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const s=t.getAttribute(n),r=e.getAttribute(n);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);const t=this.boundingBox,e=this._drawInfo;t.makeEmpty();for(let n=0,s=e.length;n<s;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,Yi),this.getBoundingBoxAt(r,ic).applyMatrix4(Yi),t.union(ic)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ge);const t=this.boundingSphere,e=this._drawInfo;t.makeEmpty();for(let n=0,s=e.length;n<s;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,Yi),this.getBoundingSphereAt(r,_s).applyMatrix4(Yi),t.union(_s)}}addInstance(t){if(this._drawInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:t};let s=null;this._availableInstanceIds.length>0?(s=this._availableInstanceIds.pop(),this._drawInfo[s]=n):(s=this._drawInfo.length,this._drawInfo.push(n));const r=this._matricesTexture,o=r.image.data;lA.toArray(o,s*16),r.needsUpdate=!0;const a=this._colorsTexture;return a&&(uA.toArray(a.image.data,s*4),a.needsUpdate=!0),s}addGeometry(t,e=-1,n=-1){if(this._initializeGeometry(t),this._validateGeometry(t),this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");const s={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let r=null;const o=this._reservedRanges,a=this._drawRanges,c=this._bounds;this._geometryCount!==0&&(r=o[o.length-1]),e===-1?s.vertexCount=t.getAttribute("position").count:s.vertexCount=e,r===null?s.vertexStart=0:s.vertexStart=r.vertexStart+r.vertexCount;const l=t.getIndex(),u=l!==null;if(u&&(n===-1?s.indexCount=l.count:s.indexCount=n,r===null?s.indexStart=0:s.indexStart=r.indexStart+r.indexCount),s.indexStart!==-1&&s.indexStart+s.indexCount>this._maxIndexCount||s.vertexStart+s.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const h=this._geometryCount;return this._geometryCount++,o.push(s),a.push({start:u?s.indexStart:s.vertexStart,count:-1}),c.push({boxInitialized:!1,box:new cn,sphereInitialized:!1,sphere:new Ge}),this.setGeometryAt(h,t),h}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const n=this.geometry,s=n.getIndex()!==null,r=n.getIndex(),o=e.getIndex(),a=this._reservedRanges[t];if(s&&o.count>a.indexCount||e.attributes.position.count>a.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const c=a.vertexStart,l=a.vertexCount;for(const f in n.attributes){const p=e.getAttribute(f),_=n.getAttribute(f);dA(p,_,c);const g=p.itemSize;for(let m=p.count,v=l;m<v;m++){const x=c+m;for(let b=0;b<g;b++)_.setComponent(x,b,0)}_.needsUpdate=!0,_.addUpdateRange(c*g,l*g)}if(s){const f=a.indexStart;for(let p=0;p<o.count;p++)r.setX(f+p,c+o.getX(p));for(let p=o.count,_=a.indexCount;p<_;p++)r.setX(f+p,c);r.needsUpdate=!0,r.addUpdateRange(f,a.indexCount)}const u=this._bounds[t];e.boundingBox!==null?(u.box.copy(e.boundingBox),u.boxInitialized=!0):u.boxInitialized=!1,e.boundingSphere!==null?(u.sphere.copy(e.boundingSphere),u.sphereInitialized=!0):u.sphereInitialized=!1;const h=this._drawRanges[t],d=e.getAttribute("position");return h.count=s?o.count:d.count,this._visibilityChanged=!0,t}deleteInstance(t){const e=this._drawInfo;return t>=e.length||e[t].active===!1?this:(e[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this)}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const n=this._bounds[t],s=n.box,r=this.geometry;if(n.boxInitialized===!1){s.makeEmpty();const o=r.index,a=r.attributes.position,c=this._drawRanges[t];for(let l=c.start,u=c.start+c.count;l<u;l++){let h=l;o&&(h=o.getX(h)),s.expandByPoint(ho.fromBufferAttribute(a,h))}n.boxInitialized=!0}return e.copy(s),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const n=this._bounds[t],s=n.sphere,r=this.geometry;if(n.sphereInitialized===!1){s.makeEmpty(),this.getBoundingBoxAt(t,ic),ic.getCenter(s.center);const o=r.index,a=r.attributes.position,c=this._drawRanges[t];let l=0;for(let u=c.start,h=c.start+c.count;u<h;u++){let d=u;o&&(d=o.getX(d)),ho.fromBufferAttribute(a,d),l=Math.max(l,s.center.distanceToSquared(ho))}s.radius=Math.sqrt(l),n.sphereInitialized=!0}return e.copy(s),e}setMatrixAt(t,e){const n=this._drawInfo,s=this._matricesTexture,r=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?this:(e.toArray(r,t*16),s.needsUpdate=!0,this)}getMatrixAt(t,e){const n=this._drawInfo,s=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?null:e.fromArray(s,t*16)}setColorAt(t,e){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,s=this._colorsTexture.image.data,r=this._drawInfo;return t>=r.length||r[t].active===!1?this:(e.toArray(s,t*4),n.needsUpdate=!0,this)}getColorAt(t,e){const n=this._colorsTexture.image.data,s=this._drawInfo;return t>=s.length||s[t].active===!1?null:e.fromArray(n,t*4)}setVisibleAt(t,e){const n=this._drawInfo;return t>=n.length||n[t].active===!1||n[t].visible===e?this:(n[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){const e=this._drawInfo;return t>=e.length||e[t].active===!1?!1:e[t].visible}setGeometryIdAt(t,e){const n=this._drawInfo;return t>=n.length||n[t].active===!1||e<0||e>=this._geometryCount?null:(n[t].geometryIndex=e,this)}getGeometryIdAt(t){const e=this._drawInfo;return t>=e.length||e[t].active===!1?-1:e[t].geometryIndex}getGeometryRangeAt(t,e={}){if(t<0||t>=this._geometryCount)return null;const n=this._drawRanges[t];return e.start=n.start,e.count=n.count,e}raycast(t,e){const n=this._drawInfo,s=this._drawRanges,r=this.matrixWorld,o=this.geometry;qe.material=this.material,qe.geometry.index=o.index,qe.geometry.attributes=o.attributes,qe.geometry.boundingBox===null&&(qe.geometry.boundingBox=new cn),qe.geometry.boundingSphere===null&&(qe.geometry.boundingSphere=new Ge);for(let a=0,c=n.length;a<c;a++){if(!n[a].visible||!n[a].active)continue;const l=n[a].geometryIndex,u=s[l];qe.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(a,qe.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,qe.geometry.boundingBox),this.getBoundingSphereAt(l,qe.geometry.boundingSphere),qe.raycast(t,sc);for(let h=0,d=sc.length;h<d;h++){const f=sc[h];f.object=this,f.batchId=a,e.push(f)}sc.length=0}qe.material=null,qe.geometry.index=null,qe.geometry.attributes={},qe.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._drawRanges=t._drawRanges.map(e=>({...e})),this._reservedRanges=t._reservedRanges.map(e=>({...e})),this._drawInfo=t._drawInfo.map(e=>({...e})),this._bounds=t._bounds.map(e=>({boxInitialized:e.boxInitialized,box:e.box.clone(),sphereInitialized:e.sphereInitialized,sphere:e.sphere.clone()})),this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._geometryCount=t._geometryCount,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(t,e,n,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=s.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,c=this._drawInfo,l=this._multiDrawStarts,u=this._multiDrawCounts,h=this._drawRanges,d=this.perObjectFrustumCulled,f=this._indirectTexture,p=f.image.data;d&&(pm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),wh.setFromProjectionMatrix(pm,t.coordinateSystem));let _=0;if(this.sortObjects){Sh.copy(this.matrixWorld).invert(),ho.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Sh),mm.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Sh);for(let v=0,x=c.length;v<x;v++)if(c[v].visible&&c[v].active){const b=c[v].geometryIndex;this.getMatrixAt(v,Yi),this.getBoundingSphereAt(b,_s).applyMatrix4(Yi);let S=!1;if(d&&(S=!wh.intersectsSphere(_s)),!S){const w=hA.subVectors(_s.center,ho).dot(mm);Ah.push(h[b],w,v)}}const g=Ah.list,m=this.customSort;m===null?g.sort(r.transparent?aA:oA):m.call(this,g,n);for(let v=0,x=g.length;v<x;v++){const b=g[v];l[_]=b.start*a,u[_]=b.count,p[_]=b.index,_++}Ah.reset()}else for(let g=0,m=c.length;g<m;g++)if(c[g].visible&&c[g].active){const v=c[g].geometryIndex;let x=!1;if(d&&(this.getMatrixAt(g,Yi),this.getBoundingSphereAt(v,_s).applyMatrix4(Yi),x=!wh.intersectsSphere(_s)),!x){const b=h[v];l[_]=b.start*a,u[_]=b.count,p[_]=g,_++}}f.needsUpdate=!0,this._multiDrawCount=_,this._visibilityChanged=!1}onBeforeShadow(t,e,n,s,r,o){this.onBeforeRender(t,null,s,r,o)}}class hn extends Qe{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new q(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const kl=new I,Hl=new I,gm=new Nt,fo=new Kr,rc=new Ge,Eh=new I,_m=new I;class is extends ie{constructor(t=new Xt,e=new hn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)kl.fromBufferAttribute(e,s-1),Hl.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=kl.distanceTo(Hl);t.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rc.copy(n.boundingSphere),rc.applyMatrix4(s),rc.radius+=r,t.ray.intersectsSphere(rc)===!1)return;gm.copy(s).invert(),fo.copy(t.ray).applyMatrix4(gm);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=l){const m=u.getX(_),v=u.getX(_+1),x=oc(this,t,fo,c,m,v);x&&e.push(x)}if(this.isLineLoop){const _=u.getX(p-1),g=u.getX(f),m=oc(this,t,fo,c,_,g);m&&e.push(m)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=l){const m=oc(this,t,fo,c,_,_+1);m&&e.push(m)}if(this.isLineLoop){const _=oc(this,t,fo,c,p-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function oc(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(kl.fromBufferAttribute(o,s),Hl.fromBufferAttribute(o,r),e.distanceSqToSegment(kl,Hl,Eh,_m)>n)return;Eh.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Eh);if(!(c<t.near||c>t.far))return{distance:c,point:_m.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const xm=new I,ym=new I;class hi extends is{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)xm.fromBufferAttribute(e,s),ym.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+xm.distanceTo(ym);t.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class P_ extends is{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Sf extends Qe{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new q(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const vm=new Nt,bd=new Kr,ac=new Ge,cc=new I;class I_ extends ie{constructor(t=new Xt,e=new Sf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ac.copy(n.boundingSphere),ac.applyMatrix4(s),ac.radius+=r,t.ray.intersectsSphere(ac)===!1)return;vm.copy(s).invert(),bd.copy(t.ray).applyMatrix4(vm);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let p=d,_=f;p<_;p++){const g=l.getX(p);cc.fromBufferAttribute(h,g),Mm(cc,g,c,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let p=d,_=f;p<_;p++)cc.fromBufferAttribute(h,p),Mm(cc,p,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Mm(i,t,e,n,s,r,o){const a=bd.distanceSqToPoint(i);if(a<e){const c=new I;bd.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class fA extends Ae{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:Le,this.magFilter=r!==void 0?r:Le,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,t.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class pA extends Ae{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=ke,this.minFilter=ke,this.generateMipmaps=!1,this.needsUpdate=!0}}class _u extends Ae{constructor(t,e,n,s,r,o,a,c,l,u,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class mA extends _u{constructor(t,e,n,s,r,o){super(t,e,n,r,o),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=zn,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class gA extends _u{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,Ii),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}}class _A extends Ae{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new et:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,s=[],r=[],o=[],a=new I,c=new Nt;for(let f=0;f<=t;f++){const p=f/t;s[f]=this.getTangentAt(p,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(we(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(we(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class xu extends Jn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new et){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class L_ extends xu{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function wf(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const lc=new I,Th=new wf,Ch=new wf,Rh=new wf;class D_ extends Jn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(lc.subVectors(s[0],s[1]).add(s[0]),l=lc);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(lc.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=lc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),Th.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,p,_,g),Ch.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,p,_,g),Rh.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,p,_,g)}else this.curveType==="catmullrom"&&(Th.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Ch.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Rh.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(Th.calc(c),Ch.calc(c),Rh.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function bm(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function xA(i,t){const e=1-i;return e*e*t}function yA(i,t){return 2*(1-i)*i*t}function vA(i,t){return i*i*t}function Po(i,t,e,n){return xA(i,t)+yA(i,e)+vA(i,n)}function MA(i,t){const e=1-i;return e*e*e*t}function bA(i,t){const e=1-i;return 3*e*e*i*t}function SA(i,t){return 3*(1-i)*i*i*t}function wA(i,t){return i*i*i*t}function Io(i,t,e,n,s){return MA(i,t)+bA(i,e)+SA(i,n)+wA(i,s)}class Af extends Jn{constructor(t=new et,e=new et,n=new et,s=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new et){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Io(t,s.x,r.x,o.x,a.x),Io(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class N_ extends Jn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Io(t,s.x,r.x,o.x,a.x),Io(t,s.y,r.y,o.y,a.y),Io(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ef extends Jn{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class U_ extends Jn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tf extends Jn{constructor(t=new et,e=new et,n=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new et){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Po(t,s.x,r.x,o.x),Po(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cf extends Jn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Po(t,s.x,r.x,o.x),Po(t,s.y,r.y,o.y),Po(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rf extends Jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(bm(a,c.x,l.x,u.x,h.x),bm(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new et().fromArray(s))}return this}}var Gl=Object.freeze({__proto__:null,ArcCurve:L_,CatmullRomCurve3:D_,CubicBezierCurve:Af,CubicBezierCurve3:N_,EllipseCurve:xu,LineCurve:Ef,LineCurve3:U_,QuadraticBezierCurve:Tf,QuadraticBezierCurve3:Cf,SplineCurve:Rf});class O_ extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Gl[s.type]().fromJSON(s))}return this}}class jo extends O_{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ef(this.currentPoint.clone(),new et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Tf(this.currentPoint.clone(),new et(t,e),new et(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Af(this.currentPoint.clone(),new et(t,e),new et(n,s),new et(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Rf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new xu(t,e,n,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ga extends Xt{constructor(t=[new et(0,-.5),new et(.5,0),new et(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=we(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,h=new I,d=new et,f=new I,p=new I,_=new I;let g=0,m=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,f.x=m*1,f.y=-g,f.z=m*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(p)}for(let v=0;v<=e;v++){const x=n+v*u*s,b=Math.sin(x),S=Math.cos(x);for(let w=0;w<=t.length-1;w++){h.x=t[w].x*b,h.y=t[w].y,h.z=t[w].x*S,o.push(h.x,h.y,h.z),d.x=v/e,d.y=w/(t.length-1),a.push(d.x,d.y);const A=c[3*w+0]*b,E=c[3*w+1],C=c[3*w+0]*S;l.push(A,E,C)}}for(let v=0;v<e;v++)for(let x=0;x<t.length-1;x++){const b=x+v*t.length,S=b,w=b+t.length,A=b+t.length+1,E=b+1;r.push(S,w,E),r.push(A,E,w)}this.setIndex(r),this.setAttribute("position",new xt(o,3)),this.setAttribute("uv",new xt(a,2)),this.setAttribute("normal",new xt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ga(t.points,t.segments,t.phiStart,t.phiLength)}}class yu extends ga{constructor(t=1,e=1,n=4,s=8){const r=new jo;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new yu(t.radius,t.length,t.capSegments,t.radialSegments)}}class vu extends Xt{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new I,u=new et;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=n+h/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new xt(o,3)),this.setAttribute("normal",new xt(a,3)),this.setAttribute("uv",new xt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vu(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Qs extends Xt{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let p=0;const _=[],g=n/2;let m=0;v(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new xt(h,3)),this.setAttribute("normal",new xt(d,3)),this.setAttribute("uv",new xt(f,2));function v(){const b=new I,S=new I;let w=0;const A=(e-t)/n;for(let E=0;E<=r;E++){const C=[],y=E/r,M=y*(e-t)+t;for(let P=0;P<=s;P++){const U=P/s,O=U*c+a,G=Math.sin(O),z=Math.cos(O);S.x=M*G,S.y=-y*n+g,S.z=M*z,h.push(S.x,S.y,S.z),b.set(G,A,z).normalize(),d.push(b.x,b.y,b.z),f.push(U,1-y),C.push(p++)}_.push(C)}for(let E=0;E<s;E++)for(let C=0;C<r;C++){const y=_[C][E],M=_[C+1][E],P=_[C+1][E+1],U=_[C][E+1];t>0&&(u.push(y,M,U),w+=3),e>0&&(u.push(M,P,U),w+=3)}l.addGroup(m,w,0),m+=w}function x(b){const S=p,w=new et,A=new I;let E=0;const C=b===!0?t:e,y=b===!0?1:-1;for(let P=1;P<=s;P++)h.push(0,g*y,0),d.push(0,y,0),f.push(.5,.5),p++;const M=p;for(let P=0;P<=s;P++){const O=P/s*c+a,G=Math.cos(O),z=Math.sin(O);A.x=C*z,A.y=g*y,A.z=C*G,h.push(A.x,A.y,A.z),d.push(0,y,0),w.x=G*.5+.5,w.y=z*.5*y+.5,f.push(w.x,w.y),p++}for(let P=0;P<s;P++){const U=S+P,O=M+P;b===!0?u.push(O,O+1,U):u.push(O+1,O,U),E+=3}l.addGroup(m,E,b===!0?1:2),m+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qs(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Mu extends Qs{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Mu(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class as extends Xt{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new xt(r,3)),this.setAttribute("normal",new xt(r.slice(),3)),this.setAttribute("uv",new xt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const x=new I,b=new I,S=new I;for(let w=0;w<e.length;w+=3)f(e[w+0],x),f(e[w+1],b),f(e[w+2],S),c(x,b,S,v)}function c(v,x,b,S){const w=S+1,A=[];for(let E=0;E<=w;E++){A[E]=[];const C=v.clone().lerp(b,E/w),y=x.clone().lerp(b,E/w),M=w-E;for(let P=0;P<=M;P++)P===0&&E===w?A[E][P]=C:A[E][P]=C.clone().lerp(y,P/M)}for(let E=0;E<w;E++)for(let C=0;C<2*(w-E)-1;C++){const y=Math.floor(C/2);C%2===0?(d(A[E][y+1]),d(A[E+1][y]),d(A[E][y])):(d(A[E][y+1]),d(A[E+1][y+1]),d(A[E+1][y]))}}function l(v){const x=new I;for(let b=0;b<r.length;b+=3)x.x=r[b+0],x.y=r[b+1],x.z=r[b+2],x.normalize().multiplyScalar(v),r[b+0]=x.x,r[b+1]=x.y,r[b+2]=x.z}function u(){const v=new I;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];const b=g(v)/2/Math.PI+.5,S=m(v)/Math.PI+.5;o.push(b,1-S)}p(),h()}function h(){for(let v=0;v<o.length;v+=6){const x=o[v+0],b=o[v+2],S=o[v+4],w=Math.max(x,b,S),A=Math.min(x,b,S);w>.9&&A<.1&&(x<.2&&(o[v+0]+=1),b<.2&&(o[v+2]+=1),S<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,x){const b=v*3;x.x=t[b+0],x.y=t[b+1],x.z=t[b+2]}function p(){const v=new I,x=new I,b=new I,S=new I,w=new et,A=new et,E=new et;for(let C=0,y=0;C<r.length;C+=9,y+=6){v.set(r[C+0],r[C+1],r[C+2]),x.set(r[C+3],r[C+4],r[C+5]),b.set(r[C+6],r[C+7],r[C+8]),w.set(o[y+0],o[y+1]),A.set(o[y+2],o[y+3]),E.set(o[y+4],o[y+5]),S.copy(v).add(x).add(b).divideScalar(3);const M=g(S);_(w,y+0,v,M),_(A,y+2,x,M),_(E,y+4,b,M)}}function _(v,x,b,S){S<0&&v.x===1&&(o[x]=v.x-1),b.x===0&&b.z===0&&(o[x]=S/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new as(t.vertices,t.indices,t.radius,t.details)}}class bu extends as{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new bu(t.radius,t.detail)}}const uc=new I,hc=new I,Ph=new I,dc=new yn;class F_ extends Xt{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(zs*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let p=0;p<c;p+=3){o?(l[0]=o.getX(p),l[1]=o.getX(p+1),l[2]=o.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);const{a:_,b:g,c:m}=dc;if(_.fromBufferAttribute(a,l[0]),g.fromBufferAttribute(a,l[1]),m.fromBufferAttribute(a,l[2]),dc.getNormal(Ph),h[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,h[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,h[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let v=0;v<3;v++){const x=(v+1)%3,b=h[v],S=h[x],w=dc[u[v]],A=dc[u[x]],E=`${b}_${S}`,C=`${S}_${b}`;C in d&&d[C]?(Ph.dot(d[C].normal)<=r&&(f.push(w.x,w.y,w.z),f.push(A.x,A.y,A.z)),d[C]=null):E in d||(d[E]={index0:l[v],index1:l[x],normal:Ph.clone()})}}for(const p in d)if(d[p]){const{index0:_,index1:g}=d[p];uc.fromBufferAttribute(a,_),hc.fromBufferAttribute(a,g),f.push(uc.x,uc.y,uc.z),f.push(hc.x,hc.y,hc.z)}this.setAttribute("position",new xt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Bs extends jo{constructor(t){super(t),this.uuid=Pn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new jo().fromJSON(s))}return this}}const AA={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=z_(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,d,f;if(n&&(r=PA(i,t,r,e)),i.length>80*e){a=l=i[0],c=u=i[1];for(let p=e;p<s;p+=e)h=i[p],d=i[p+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return ta(r,o,e,a,c,f,0),o}};function z_(i,t,e,n,s){let r,o;if(s===HA(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Sm(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Sm(r,i[r],i[r+1],o);return o&&Su(o,o.next)&&(na(o),o=o.next),o}function Ys(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Su(e,e.next)||Me(e.prev,e,e.next)===0)){if(na(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ta(i,t,e,n,s,r,o){if(!i)return;!o&&r&&UA(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?TA(i,n,s,r):EA(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),na(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=CA(Ys(i),t,e),ta(i,t,e,n,s,r,2)):o===2&&RA(i,t,e,n,s,r):ta(Ys(i),t,e,n,s,r,1);break}}}function EA(i){const t=i.prev,e=i,n=i.next;if(Me(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let p=n.next;for(;p!==t;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&Pr(s,a,r,c,o,l,p.x,p.y)&&Me(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function TA(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Me(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,p=u<h?u<d?u:d:h<d?h:d,_=a>c?a>l?a:l:c>l?c:l,g=u>h?u>d?u:d:h>d?h:d,m=Sd(f,p,t,e,n),v=Sd(_,g,t,e,n);let x=i.prevZ,b=i.nextZ;for(;x&&x.z>=m&&b&&b.z<=v;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==s&&x!==o&&Pr(a,u,c,h,l,d,x.x,x.y)&&Me(x.prev,x,x.next)>=0||(x=x.prevZ,b.x>=f&&b.x<=_&&b.y>=p&&b.y<=g&&b!==s&&b!==o&&Pr(a,u,c,h,l,d,b.x,b.y)&&Me(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;x&&x.z>=m;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==s&&x!==o&&Pr(a,u,c,h,l,d,x.x,x.y)&&Me(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;b&&b.z<=v;){if(b.x>=f&&b.x<=_&&b.y>=p&&b.y<=g&&b!==s&&b!==o&&Pr(a,u,c,h,l,d,b.x,b.y)&&Me(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function CA(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Su(s,r)&&B_(s,n,n.next,r)&&ea(s,r)&&ea(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),na(n),na(n.next),n=i=r),n=n.next}while(n!==i);return Ys(n)}function RA(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&zA(o,a)){let c=k_(o,a);o=Ys(o,o.next),c=Ys(c,c.next),ta(o,t,e,n,s,r,0),ta(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function PA(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=z_(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(FA(l));for(s.sort(IA),r=0;r<s.length;r++)e=LA(s[r],e);return e}function IA(i,t){return i.x-t.x}function LA(i,t){const e=DA(i,t);if(!e)return t;const n=k_(e,i);return Ys(n,n.next),Ys(e,e.next)}function DA(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Pr(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),ea(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&NA(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function NA(i,t){return Me(i.prev,i,t.prev)<0&&Me(t.next,i,i.next)<0}function UA(i,t,e,n){let s=i;do s.z===0&&(s.z=Sd(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,OA(s)}function OA(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Sd(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function FA(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Pr(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function zA(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!BA(i,t)&&(ea(i,t)&&ea(t,i)&&kA(i,t)&&(Me(i.prev,i,t.prev)||Me(i,t.prev,t))||Su(i,t)&&Me(i.prev,i,i.next)>0&&Me(t.prev,t,t.next)>0)}function Me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Su(i,t){return i.x===t.x&&i.y===t.y}function B_(i,t,e,n){const s=pc(Me(i,t,e)),r=pc(Me(i,t,n)),o=pc(Me(e,n,i)),a=pc(Me(e,n,t));return!!(s!==r&&o!==a||s===0&&fc(i,e,t)||r===0&&fc(i,n,t)||o===0&&fc(e,i,n)||a===0&&fc(e,t,n))}function fc(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function pc(i){return i>0?1:i<0?-1:0}function BA(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&B_(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ea(i,t){return Me(i.prev,i,i.next)<0?Me(i,t,i.next)>=0&&Me(i,i.prev,t)>=0:Me(i,t,i.prev)<0||Me(i,i.next,t)<0}function kA(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function k_(i,t){const e=new wd(i.i,i.x,i.y),n=new wd(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Sm(i,t,e,n){const s=new wd(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function na(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function wd(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function HA(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class ai{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ai.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];wm(t),Am(n,t);let o=t.length;e.forEach(wm);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Am(n,e[c]);const a=AA.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function wm(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Am(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class wu extends Xt{constructor(t=new Bs([new et(.5,.5),new et(-.5,.5),new et(-.5,-.5),new et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new xt(s,3)),this.setAttribute("uv",new xt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:GA;let x,b=!1,S,w,A,E;m&&(x=m.getSpacedPoints(u),b=!0,d=!1,S=m.computeFrenetFrames(u,!1),w=new I,A=new I,E=new I),d||(g=0,f=0,p=0,_=0);const C=a.extractPoints(l);let y=C.shape;const M=C.holes;if(!ai.isClockWise(y)){y=y.reverse();for(let j=0,D=M.length;j<D;j++){const ht=M[j];ai.isClockWise(ht)&&(M[j]=ht.reverse())}}const U=ai.triangulateShape(y,M),O=y;for(let j=0,D=M.length;j<D;j++){const ht=M[j];y=y.concat(ht)}function G(j,D,ht){return D||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(D,ht)}const z=y.length,F=U.length;function N(j,D,ht){let dt,at,ft;const Ut=j.x-D.x,yt=j.y-D.y,L=ht.x-j.x,T=ht.y-j.y,V=Ut*Ut+yt*yt,K=Ut*T-yt*L;if(Math.abs(K)>Number.EPSILON){const it=Math.sqrt(V),J=Math.sqrt(L*L+T*T),Pt=D.x-yt/it,mt=D.y+Ut/it,St=ht.x-T/J,Qt=ht.y+L/J,ct=((St-Pt)*T-(Qt-mt)*L)/(Ut*T-yt*L);dt=Pt+Ut*ct-j.x,at=mt+yt*ct-j.y;const wt=dt*dt+at*at;if(wt<=2)return new et(dt,at);ft=Math.sqrt(wt/2)}else{let it=!1;Ut>Number.EPSILON?L>Number.EPSILON&&(it=!0):Ut<-Number.EPSILON?L<-Number.EPSILON&&(it=!0):Math.sign(yt)===Math.sign(T)&&(it=!0),it?(dt=-yt,at=Ut,ft=Math.sqrt(V)):(dt=Ut,at=yt,ft=Math.sqrt(V/2))}return new et(dt/ft,at/ft)}const W=[];for(let j=0,D=O.length,ht=D-1,dt=j+1;j<D;j++,ht++,dt++)ht===D&&(ht=0),dt===D&&(dt=0),W[j]=N(O[j],O[ht],O[dt]);const Q=[];let rt,bt=W.concat();for(let j=0,D=M.length;j<D;j++){const ht=M[j];rt=[];for(let dt=0,at=ht.length,ft=at-1,Ut=dt+1;dt<at;dt++,ft++,Ut++)ft===at&&(ft=0),Ut===at&&(Ut=0),rt[dt]=N(ht[dt],ht[ft],ht[Ut]);Q.push(rt),bt=bt.concat(rt)}for(let j=0;j<g;j++){const D=j/g,ht=f*Math.cos(D*Math.PI/2),dt=p*Math.sin(D*Math.PI/2)+_;for(let at=0,ft=O.length;at<ft;at++){const Ut=G(O[at],W[at],dt);ot(Ut.x,Ut.y,-ht)}for(let at=0,ft=M.length;at<ft;at++){const Ut=M[at];rt=Q[at];for(let yt=0,L=Ut.length;yt<L;yt++){const T=G(Ut[yt],rt[yt],dt);ot(T.x,T.y,-ht)}}}const Rt=p+_;for(let j=0;j<z;j++){const D=d?G(y[j],bt[j],Rt):y[j];b?(A.copy(S.normals[0]).multiplyScalar(D.x),w.copy(S.binormals[0]).multiplyScalar(D.y),E.copy(x[0]).add(A).add(w),ot(E.x,E.y,E.z)):ot(D.x,D.y,0)}for(let j=1;j<=u;j++)for(let D=0;D<z;D++){const ht=d?G(y[D],bt[D],Rt):y[D];b?(A.copy(S.normals[j]).multiplyScalar(ht.x),w.copy(S.binormals[j]).multiplyScalar(ht.y),E.copy(x[j]).add(A).add(w),ot(E.x,E.y,E.z)):ot(ht.x,ht.y,h/u*j)}for(let j=g-1;j>=0;j--){const D=j/g,ht=f*Math.cos(D*Math.PI/2),dt=p*Math.sin(D*Math.PI/2)+_;for(let at=0,ft=O.length;at<ft;at++){const Ut=G(O[at],W[at],dt);ot(Ut.x,Ut.y,h+ht)}for(let at=0,ft=M.length;at<ft;at++){const Ut=M[at];rt=Q[at];for(let yt=0,L=Ut.length;yt<L;yt++){const T=G(Ut[yt],rt[yt],dt);b?ot(T.x,T.y+x[u-1].y,x[u-1].x+ht):ot(T.x,T.y,h+ht)}}}$(),tt();function $(){const j=s.length/3;if(d){let D=0,ht=z*D;for(let dt=0;dt<F;dt++){const at=U[dt];At(at[2]+ht,at[1]+ht,at[0]+ht)}D=u+g*2,ht=z*D;for(let dt=0;dt<F;dt++){const at=U[dt];At(at[0]+ht,at[1]+ht,at[2]+ht)}}else{for(let D=0;D<F;D++){const ht=U[D];At(ht[2],ht[1],ht[0])}for(let D=0;D<F;D++){const ht=U[D];At(ht[0]+z*u,ht[1]+z*u,ht[2]+z*u)}}n.addGroup(j,s.length/3-j,0)}function tt(){const j=s.length/3;let D=0;ut(O,D),D+=O.length;for(let ht=0,dt=M.length;ht<dt;ht++){const at=M[ht];ut(at,D),D+=at.length}n.addGroup(j,s.length/3-j,1)}function ut(j,D){let ht=j.length;for(;--ht>=0;){const dt=ht;let at=ht-1;at<0&&(at=j.length-1);for(let ft=0,Ut=u+g*2;ft<Ut;ft++){const yt=z*ft,L=z*(ft+1),T=D+dt+yt,V=D+at+yt,K=D+at+L,it=D+dt+L;Tt(T,V,K,it)}}}function ot(j,D,ht){c.push(j),c.push(D),c.push(ht)}function At(j,D,ht){Lt(j),Lt(D),Lt(ht);const dt=s.length/3,at=v.generateTopUV(n,s,dt-3,dt-2,dt-1);Bt(at[0]),Bt(at[1]),Bt(at[2])}function Tt(j,D,ht,dt){Lt(j),Lt(D),Lt(dt),Lt(D),Lt(ht),Lt(dt);const at=s.length/3,ft=v.generateSideWallUV(n,s,at-6,at-3,at-2,at-1);Bt(ft[0]),Bt(ft[1]),Bt(ft[3]),Bt(ft[1]),Bt(ft[2]),Bt(ft[3])}function Lt(j){s.push(c[j*3+0]),s.push(c[j*3+1]),s.push(c[j*3+2])}function Bt(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return VA(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Gl[s.type]().fromJSON(s)),new wu(n,t.options)}}const GA={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new et(r,o),new et(a,c),new et(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[s*3],f=t[s*3+1],p=t[s*3+2],_=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new et(o,1-c),new et(l,1-h),new et(d,1-p),new et(_,1-m)]:[new et(a,1-c),new et(u,1-h),new et(f,1-p),new et(g,1-m)]}};function VA(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Au extends as{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Au(t.radius,t.detail)}}class _a extends as{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new _a(t.radius,t.detail)}}class Eu extends Xt{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=t;const d=(e-t)/s,f=new I,p=new et;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){const m=r+g/n*o;f.x=h*Math.cos(m),f.y=h*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,u.push(p.x,p.y)}h+=d}for(let _=0;_<s;_++){const g=_*(n+1);for(let m=0;m<n;m++){const v=m+g,x=v,b=v+n+1,S=v+n+2,w=v+1;a.push(x,b,w),a.push(b,S,w)}}this.setIndex(a),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(l,3)),this.setAttribute("uv",new xt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Eu(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Tu extends Xt{constructor(t=new Bs([new et(0,.5),new et(-.5,-.5),new et(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new xt(s,3)),this.setAttribute("normal",new xt(r,3)),this.setAttribute("uv",new xt(o,2));function l(u){const h=s.length/3,d=u.extractPoints(e);let f=d.shape;const p=d.holes;ai.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const v=p[g];ai.isClockWise(v)===!0&&(p[g]=v.reverse())}const _=ai.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const v=p[g];f=f.concat(v)}for(let g=0,m=f.length;g<m;g++){const v=f[g];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let g=0,m=_.length;g<m;g++){const v=_[g],x=v[0]+h,b=v[1]+h,S=v[2]+h;n.push(x,b,S),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return WA(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Tu(n,t.curveSegments)}}function WA(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class js extends Xt{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new I,d=new I,f=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){const v=[],x=m/n;let b=0;m===0&&o===0?b=.5/e:m===n&&c===Math.PI&&(b=-.5/e);for(let S=0;S<=e;S++){const w=S/e;h.x=-t*Math.cos(s+w*r)*Math.sin(o+x*a),h.y=t*Math.cos(o+x*a),h.z=t*Math.sin(s+w*r)*Math.sin(o+x*a),p.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),g.push(w+b,1-x),v.push(l++)}u.push(v)}for(let m=0;m<n;m++)for(let v=0;v<e;v++){const x=u[m][v+1],b=u[m][v],S=u[m+1][v],w=u[m+1][v+1];(m!==0||o>0)&&f.push(x,b,w),(m!==n-1||c<Math.PI)&&f.push(b,S,w)}this.setIndex(f),this.setAttribute("position",new xt(p,3)),this.setAttribute("normal",new xt(_,3)),this.setAttribute("uv",new xt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new js(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Cu extends as{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Cu(t.radius,t.detail)}}class Ru extends Xt{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new I,h=new I,d=new I;for(let f=0;f<=n;f++)for(let p=0;p<=s;p++){const _=p/s*r,g=f/n*Math.PI*2;h.x=(t+e*Math.cos(g))*Math.cos(_),h.y=(t+e*Math.cos(g))*Math.sin(_),h.z=e*Math.sin(g),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(p/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=s;p++){const _=(s+1)*f+p-1,g=(s+1)*(f-1)+p-1,m=(s+1)*(f-1)+p,v=(s+1)*f+p;o.push(_,g,v),o.push(g,m,v)}this.setIndex(o),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(c,3)),this.setAttribute("uv",new xt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ru(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Pu extends Xt{constructor(t=1,e=.4,n=64,s=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:s,p:r,q:o},n=Math.floor(n),s=Math.floor(s);const a=[],c=[],l=[],u=[],h=new I,d=new I,f=new I,p=new I,_=new I,g=new I,m=new I;for(let x=0;x<=n;++x){const b=x/n*r*Math.PI*2;v(b,r,o,t,f),v(b+.01,r,o,t,p),g.subVectors(p,f),m.addVectors(p,f),_.crossVectors(g,m),m.crossVectors(_,g),_.normalize(),m.normalize();for(let S=0;S<=s;++S){const w=S/s*Math.PI*2,A=-e*Math.cos(w),E=e*Math.sin(w);h.x=f.x+(A*m.x+E*_.x),h.y=f.y+(A*m.y+E*_.y),h.z=f.z+(A*m.z+E*_.z),c.push(h.x,h.y,h.z),d.subVectors(h,f).normalize(),l.push(d.x,d.y,d.z),u.push(x/n),u.push(S/s)}}for(let x=1;x<=n;x++)for(let b=1;b<=s;b++){const S=(s+1)*(x-1)+(b-1),w=(s+1)*x+(b-1),A=(s+1)*x+b,E=(s+1)*(x-1)+b;a.push(S,w,E),a.push(w,A,E)}this.setIndex(a),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(l,3)),this.setAttribute("uv",new xt(u,2));function v(x,b,S,w,A){const E=Math.cos(x),C=Math.sin(x),y=S/b*x,M=Math.cos(y);A.x=w*(2+M)*.5*E,A.y=w*(2+M)*C*.5,A.z=w*Math.sin(y)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pu(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class Iu extends Xt{constructor(t=new Cf(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,c=new I,l=new et;let u=new I;const h=[],d=[],f=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new xt(h,3)),this.setAttribute("normal",new xt(d,3)),this.setAttribute("uv",new xt(f,2));function _(){for(let x=0;x<e;x++)g(x);g(r===!1?e:0),v(),m()}function g(x){u=t.getPointAt(x/e,u);const b=o.normals[x],S=o.binormals[x];for(let w=0;w<=s;w++){const A=w/s*Math.PI*2,E=Math.sin(A),C=-Math.cos(A);c.x=C*b.x+E*S.x,c.y=C*b.y+E*S.y,c.z=C*b.z+E*S.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function m(){for(let x=1;x<=e;x++)for(let b=1;b<=s;b++){const S=(s+1)*(x-1)+(b-1),w=(s+1)*x+(b-1),A=(s+1)*x+b,E=(s+1)*(x-1)+b;p.push(S,w,E),p.push(w,A,E)}}function v(){for(let x=0;x<=e;x++)for(let b=0;b<=s;b++)l.x=x/e,l.y=b/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Iu(new Gl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class H_ extends Xt{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,s=new I,r=new I;if(t.index!==null){const o=t.attributes.position,a=t.index;let c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const h=c[l],d=h.start,f=h.count;for(let p=d,_=d+f;p<_;p+=3)for(let g=0;g<3;g++){const m=a.getX(p+g),v=a.getX(p+(g+1)%3);s.fromBufferAttribute(o,m),r.fromBufferAttribute(o,v),Em(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const o=t.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const u=3*a+l,h=3*a+(l+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),Em(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new xt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Em(i,t,e){const n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}var Tm=Object.freeze({__proto__:null,BoxGeometry:Ks,CapsuleGeometry:yu,CircleGeometry:vu,ConeGeometry:Mu,CylinderGeometry:Qs,DodecahedronGeometry:bu,EdgesGeometry:F_,ExtrudeGeometry:wu,IcosahedronGeometry:Au,LatheGeometry:ga,OctahedronGeometry:_a,PlaneGeometry:Js,PolyhedronGeometry:as,RingGeometry:Eu,ShapeGeometry:Tu,SphereGeometry:js,TetrahedronGeometry:Cu,TorusGeometry:Ru,TorusKnotGeometry:Pu,TubeGeometry:Iu,WireframeGeometry:H_});class G_ extends Qe{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new q(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class V_ extends kn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ve extends Qe{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new q(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=os,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class W_ extends Ve{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return we(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new q(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new q(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new q(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class X_ extends Qe{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new q(16777215),this.specular=new q(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=os,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=la,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Y_ extends Qe{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new q(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=os,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class q_ extends Qe{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=os,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class $_ extends Qe{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=os,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=la,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Z_ extends Qe{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new q(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=os,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}class K_ extends hn{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function Ds(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function J_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Q_(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function Ad(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let c=0;c!==t;++c)s[o++]=i[a+c]}return s}function Pf(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}function XA(i,t,e,n,s=30){const r=i.clone();r.name=t;const o=[];for(let c=0;c<r.tracks.length;++c){const l=r.tracks[c],u=l.getValueSize(),h=[],d=[];for(let f=0;f<l.times.length;++f){const p=l.times[f]*s;if(!(p<e||p>=n)){h.push(l.times[f]);for(let _=0;_<u;++_)d.push(l.values[f*u+_])}}h.length!==0&&(l.times=Ds(h,l.times.constructor),l.values=Ds(d,l.values.constructor),o.push(l))}r.tracks=o;let a=1/0;for(let c=0;c<r.tracks.length;++c)a>r.tracks[c].times[0]&&(a=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*a);return r.resetDuration(),r}function YA(i,t=0,e=i,n=30){n<=0&&(n=30);const s=e.tracks.length,r=t/n;for(let o=0;o<s;++o){const a=e.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=i.tracks.find(function(m){return m.name===a.name&&m.ValueTypeName===c});if(l===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0;const f=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const p=a.times.length-1;let _;if(r<=a.times[0]){const m=u,v=h-u;_=a.values.slice(m,v)}else if(r>=a.times[p]){const m=p*h+u,v=m+h-u;_=a.values.slice(m,v)}else{const m=a.createInterpolant(),v=u,x=h-u;m.evaluate(r),_=m.resultBuffer.slice(v,x)}c==="quaternion"&&new an().fromArray(_).normalize().conjugate().toArray(_);const g=l.times.length;for(let m=0;m<g;++m){const v=m*f+d;if(c==="quaternion")an.multiplyQuaternionsFlat(l.values,v,_,0,l.values,v);else{const x=f-d*2;for(let b=0;b<x;++b)l.values[v+b]-=_[b]}}}return i.blendMode=uf,i}const qA={convertArray:Ds,isTypedArray:J_,getKeyframeOrder:Q_,sortedArray:Ad,flattenJSON:Pf,subclip:XA,makeClipAdditive:YA};class xa{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break e}o=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class j_ extends xa{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ps,endingEnd:Ps}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Is:r=t,a=2*e-n;break;case Yo:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Is:o=t,c=2*n-e;break;case Yo:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}const l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),_=p*p,g=_*p,m=-d*g+2*d*_-d*p,v=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*p+1,x=(-1-f)*g+(1.5+f)*_+.5*p,b=f*g-f*_;for(let S=0;S!==a;++S)r[S]=m*o[u+S]+v*o[l+S]+x*o[c+S]+b*o[h+S];return r}}class If extends xa{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(s-e),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}}class tx extends xa{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class Qn{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ds(e,this.TimeBufferType),this.values=Ds(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ds(t.times,Array),values:Ds(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new tx(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new If(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new j_(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Xo:e=this.InterpolantFactoryMethodDiscrete;break;case Bl:e=this.InterpolantFactoryMethodLinear;break;case Bc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xo;case this.InterpolantFactoryMethodLinear:return Bl;case this.InterpolantFactoryMethodSmooth:return Bc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&J_(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Bc,r=t.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{const h=a*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){const _=e[h+p];if(_!==e[d+p]||_!==e[f+p]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[h+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=Bl;class tr extends Qn{constructor(t,e,n){super(t,e,n)}}tr.prototype.ValueTypeName="bool";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=Xo;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;class Lf extends Qn{}Lf.prototype.ValueTypeName="color";class ia extends Qn{}ia.prototype.ValueTypeName="number";class ex extends xa{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e);let l=t*a;for(let u=l+a;l!==u;l+=4)an.slerpFlat(r,0,o,l-a,o,l,c);return r}}class ya extends Qn{InterpolantFactoryMethodLinear(t){return new ex(this.times,this.values,this.getValueSize(),t)}}ya.prototype.ValueTypeName="quaternion";ya.prototype.InterpolantFactoryMethodSmooth=void 0;class er extends Qn{constructor(t,e,n){super(t,e,n)}}er.prototype.ValueTypeName="string";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=Xo;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;class sa extends Qn{}sa.prototype.ValueTypeName="vector";class ra{constructor(t="",e=-1,n=[],s=ou){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=Pn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(ZA(n[o]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(Qn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=Q_(c);c=Ad(c,1,u),l=Ad(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new ia(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,p,_){if(f.length!==0){const g=[],m=[];Pf(f,g,m,p),g.length!==0&&_.push(new h(d,g,m))}},s=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let _=0;_<d[p].morphTargets.length;_++)f[d[p].morphTargets[_]]=-1;for(const _ in f){const g=[],m=[];for(let v=0;v!==d[p].morphTargets.length;++v){const x=d[p];g.push(x.time),m.push(x.morphTarget===_?1:0)}s.push(new ia(".morphTargetInfluence["+_+"]",g,m))}c=f.length*o}else{const f=".bones["+e[h].name+"]";n(sa,f+".position",d,"pos",s),n(ya,f+".quaternion",d,"rot",s),n(sa,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function $A(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ia;case"vector":case"vector2":case"vector3":case"vector4":return sa;case"color":return Lf;case"quaternion":return ya;case"bool":case"boolean":return tr;case"string":return er}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function ZA(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=$A(i.type);if(i.times===void 0){const e=[],n=[];Pf(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const wi={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Df{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],p=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null}}}const nx=new Df;class Sn{constructor(t){this.manager=t!==void 0?t:nx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Sn.DEFAULT_MATERIAL_NAME="__DEFAULT";const yi={};class KA extends Error{constructor(t,e){super(t),this.response=e}}class Di extends Sn{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=wi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(yi[t]!==void 0){yi[t].push({onLoad:e,onProgress:n,onError:s});return}yi[t]=[],yi[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=yi[t],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let _=0;const g=new ReadableStream({start(m){v();function v(){h.read().then(({done:x,value:b})=>{if(x)m.close();else{_+=b.byteLength;const S=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let w=0,A=u.length;w<A;w++){const E=u[w];E.onProgress&&E.onProgress(S)}m.enqueue(b),v()}},x=>{m.error(x)})}}});return new Response(g)}else throw new KA(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{wi.add(t,l);const u=yi[t];delete yi[t];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=yi[t];if(u===void 0)throw this.manager.itemError(t),l;delete yi[t];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class JA extends Sn{constructor(t){super(t)}load(t,e,n,s){const r=this,o=new Di(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(c){s?s(c):console.error(c),r.manager.itemError(t)}},n,s)}parse(t){const e=[];for(let n=0;n<t.length;n++){const s=ra.parse(t[n]);e.push(s)}return e}}class QA extends Sn{constructor(t){super(t)}load(t,e,n,s){const r=this,o=[],a=new _u,c=new Di(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(r.withCredentials);let l=0;function u(h){c.load(t[h],function(d){const f=r.parse(d,!0);o[h]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},l+=1,l===6&&(f.mipmapCount===1&&(a.minFilter=Le),a.image=o,a.format=f.format,a.needsUpdate=!0,e&&e(a))},n,s)}if(Array.isArray(t))for(let h=0,d=t.length;h<d;++h)u(h);else c.load(t,function(h){const d=r.parse(h,!0);if(d.isCubemap){const f=d.mipmaps.length/d.mipmapCount;for(let p=0;p<f;p++){o[p]={mipmaps:[]};for(let _=0;_<d.mipmapCount;_++)o[p].mipmaps.push(d.mipmaps[p*d.mipmapCount+_]),o[p].format=d.format,o[p].width=d.width,o[p].height=d.height}a.image=o}else a.image.width=d.width,a.image.height=d.height,a.mipmaps=d.mipmaps;d.mipmapCount===1&&(a.minFilter=Le),a.format=d.format,a.needsUpdate=!0,e&&e(a)},n,s);return a}}class oa extends Sn{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=wi.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Qo("img");function c(){u(),wi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(h){u(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class jA extends Sn{constructor(t){super(t)}load(t,e,n,s){const r=new da;r.colorSpace=mn;const o=new oa(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(t[l],function(u){r.images[l]=u,a++,a===6&&(r.needsUpdate=!0,e&&e(r))},void 0,s)}for(let l=0;l<t.length;++l)c(l);return r}}class tE extends Sn{constructor(t){super(t)}load(t,e,n,s){const r=this,o=new oi,a=new Di(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,function(c){let l;try{l=r.parse(c)}catch(u){if(s!==void 0)s(u);else{console.error(u);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:zn,o.wrapT=l.wrapT!==void 0?l.wrapT:zn,o.magFilter=l.magFilter!==void 0?l.magFilter:Le,o.minFilter=l.minFilter!==void 0?l.minFilter:Le,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=si),l.mipmapCount===1&&(o.minFilter=Le),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,e&&e(o,l)},n,s),o}}class ix extends Sn{constructor(t){super(t)}load(t,e,n,s){const r=new Ae,o=new oa(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class cs extends ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new q(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Nf extends cs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new q(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ih=new Nt,Cm=new I,Rm=new I;class Uf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fa,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Cm.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cm),Rm.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rm),e.updateMatrixWorld(),Ih.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ih),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ih)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class eE extends Uf{constructor(){super(new Be(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Hr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class sx extends cs{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ie.DEFAULT_UP),this.updateMatrix(),this.target=new ie,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new eE}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Pm=new Nt,po=new I,Lh=new I;class nE extends Uf{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new Jt(2,1,1,1),new Jt(0,1,1,1),new Jt(3,1,1,1),new Jt(1,1,1,1),new Jt(3,0,1,1),new Jt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),po.setFromMatrixPosition(t.matrixWorld),n.position.copy(po),Lh.copy(n.position),Lh.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Lh),n.updateMatrixWorld(),s.makeTranslation(-po.x,-po.y,-po.z),Pm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pm)}}class rx extends cs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new nE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class iE extends Uf{constructor(){super(new hu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Of extends cs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ie.DEFAULT_UP),this.updateMatrix(),this.target=new ie,this.shadow=new iE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ox extends cs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class ax extends cs{constructor(t,e,n=10,s=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}class cx{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new I)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,s=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.282095),e.addScaledVector(o[1],.488603*s),e.addScaledVector(o[2],.488603*r),e.addScaledVector(o[3],.488603*n),e.addScaledVector(o[4],1.092548*(n*s)),e.addScaledVector(o[5],1.092548*(s*r)),e.addScaledVector(o[6],.315392*(3*r*r-1)),e.addScaledVector(o[7],1.092548*(n*r)),e.addScaledVector(o[8],.546274*(n*n-s*s)),e}getIrradianceAt(t,e){const n=t.x,s=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.886227),e.addScaledVector(o[1],2*.511664*s),e.addScaledVector(o[2],2*.511664*r),e.addScaledVector(o[3],2*.511664*n),e.addScaledVector(o[4],2*.429043*n*s),e.addScaledVector(o[5],2*.429043*s*r),e.addScaledVector(o[6],.743125*r*r-.247708),e.addScaledVector(o[7],2*.429043*n*r),e.addScaledVector(o[8],.429043*(n*n-s*s)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let s=0;s<9;s++)n[s].fromArray(t,e+s*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let s=0;s<9;s++)n[s].toArray(t,e+s*3);return t}static getBasisAt(t,e){const n=t.x,s=t.y,r=t.z;e[0]=.282095,e[1]=.488603*s,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*s,e[5]=1.092548*s*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-s*s)}}class lx extends cs{constructor(t=new cx,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}class Lu extends Sn{constructor(t){super(t),this.textures={}}load(t,e,n,s){const r=this,o=new Di(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(c){s?s(c):console.error(c),r.manager.itemError(t)}},n,s)}parse(t){const e=this.textures;function n(r){return e[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),e[r]}const s=this.createMaterialFromType(t.type);if(t.uuid!==void 0&&(s.uuid=t.uuid),t.name!==void 0&&(s.name=t.name),t.color!==void 0&&s.color!==void 0&&s.color.setHex(t.color),t.roughness!==void 0&&(s.roughness=t.roughness),t.metalness!==void 0&&(s.metalness=t.metalness),t.sheen!==void 0&&(s.sheen=t.sheen),t.sheenColor!==void 0&&(s.sheenColor=new q().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(s.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&s.emissive!==void 0&&s.emissive.setHex(t.emissive),t.specular!==void 0&&s.specular!==void 0&&s.specular.setHex(t.specular),t.specularIntensity!==void 0&&(s.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&s.specularColor!==void 0&&s.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(s.shininess=t.shininess),t.clearcoat!==void 0&&(s.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(s.dispersion=t.dispersion),t.iridescence!==void 0&&(s.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(s.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(s.transmission=t.transmission),t.thickness!==void 0&&(s.thickness=t.thickness),t.attenuationDistance!==void 0&&(s.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&s.attenuationColor!==void 0&&s.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(s.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(s.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(s.fog=t.fog),t.flatShading!==void 0&&(s.flatShading=t.flatShading),t.blending!==void 0&&(s.blending=t.blending),t.combine!==void 0&&(s.combine=t.combine),t.side!==void 0&&(s.side=t.side),t.shadowSide!==void 0&&(s.shadowSide=t.shadowSide),t.opacity!==void 0&&(s.opacity=t.opacity),t.transparent!==void 0&&(s.transparent=t.transparent),t.alphaTest!==void 0&&(s.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(s.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(s.depthFunc=t.depthFunc),t.depthTest!==void 0&&(s.depthTest=t.depthTest),t.depthWrite!==void 0&&(s.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(s.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(s.blendSrc=t.blendSrc),t.blendDst!==void 0&&(s.blendDst=t.blendDst),t.blendEquation!==void 0&&(s.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(s.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(s.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(s.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&s.blendColor!==void 0&&s.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(s.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(s.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(s.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(s.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(s.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(s.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(s.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(s.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(s.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(s.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(s.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(s.rotation=t.rotation),t.linewidth!==void 0&&(s.linewidth=t.linewidth),t.dashSize!==void 0&&(s.dashSize=t.dashSize),t.gapSize!==void 0&&(s.gapSize=t.gapSize),t.scale!==void 0&&(s.scale=t.scale),t.polygonOffset!==void 0&&(s.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(s.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(s.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(s.dithering=t.dithering),t.alphaToCoverage!==void 0&&(s.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(s.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(s.forceSinglePass=t.forceSinglePass),t.visible!==void 0&&(s.visible=t.visible),t.toneMapped!==void 0&&(s.toneMapped=t.toneMapped),t.userData!==void 0&&(s.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?s.vertexColors=t.vertexColors>0:s.vertexColors=t.vertexColors),t.uniforms!==void 0)for(const r in t.uniforms){const o=t.uniforms[r];switch(s.uniforms[r]={},o.type){case"t":s.uniforms[r].value=n(o.value);break;case"c":s.uniforms[r].value=new q().setHex(o.value);break;case"v2":s.uniforms[r].value=new et().fromArray(o.value);break;case"v3":s.uniforms[r].value=new I().fromArray(o.value);break;case"v4":s.uniforms[r].value=new Jt().fromArray(o.value);break;case"m3":s.uniforms[r].value=new qt().fromArray(o.value);break;case"m4":s.uniforms[r].value=new Nt().fromArray(o.value);break;default:s.uniforms[r].value=o.value}}if(t.defines!==void 0&&(s.defines=t.defines),t.vertexShader!==void 0&&(s.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(s.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(s.glslVersion=t.glslVersion),t.extensions!==void 0)for(const r in t.extensions)s.extensions[r]=t.extensions[r];if(t.lights!==void 0&&(s.lights=t.lights),t.clipping!==void 0&&(s.clipping=t.clipping),t.size!==void 0&&(s.size=t.size),t.sizeAttenuation!==void 0&&(s.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(s.map=n(t.map)),t.matcap!==void 0&&(s.matcap=n(t.matcap)),t.alphaMap!==void 0&&(s.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(s.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(s.bumpScale=t.bumpScale),t.normalMap!==void 0&&(s.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(s.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),s.normalScale=new et().fromArray(r)}return t.displacementMap!==void 0&&(s.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(s.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(s.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(s.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(s.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(s.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(s.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(s.specularMap=n(t.specularMap)),t.specularIntensityMap!==void 0&&(s.specularIntensityMap=n(t.specularIntensityMap)),t.specularColorMap!==void 0&&(s.specularColorMap=n(t.specularColorMap)),t.envMap!==void 0&&(s.envMap=n(t.envMap)),t.envMapRotation!==void 0&&s.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(s.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(s.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(s.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(s.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(s.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(s.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(s.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(s.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(s.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(s.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(s.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(s.clearcoatNormalScale=new et().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(s.iridescenceMap=n(t.iridescenceMap)),t.iridescenceThicknessMap!==void 0&&(s.iridescenceThicknessMap=n(t.iridescenceThicknessMap)),t.transmissionMap!==void 0&&(s.transmissionMap=n(t.transmissionMap)),t.thicknessMap!==void 0&&(s.thicknessMap=n(t.thicknessMap)),t.anisotropyMap!==void 0&&(s.anisotropyMap=n(t.anisotropyMap)),t.sheenColorMap!==void 0&&(s.sheenColorMap=n(t.sheenColorMap)),t.sheenRoughnessMap!==void 0&&(s.sheenRoughnessMap=n(t.sheenRoughnessMap)),s}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return Lu.createMaterialFromType(t)}static createMaterialFromType(t){const e={ShadowMaterial:G_,SpriteMaterial:Mf,RawShaderMaterial:V_,ShaderMaterial:kn,PointsMaterial:Sf,MeshPhysicalMaterial:W_,MeshStandardMaterial:Ve,MeshPhongMaterial:X_,MeshToonMaterial:Y_,MeshNormalMaterial:q_,MeshLambertMaterial:$_,MeshDepthMaterial:fu,MeshDistanceMaterial:yf,MeshBasicMaterial:ui,MeshMatcapMaterial:Z_,LineDashedMaterial:K_,LineBasicMaterial:hn,Material:Qe};return new e[t]}}class Ed{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class ux extends Xt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class hx extends Sn{constructor(t){super(t)}load(t,e,n,s){const r=this,o=new Di(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(c){s?s(c):console.error(c),r.manager.itemError(t)}},n,s)}parse(t){const e={},n={};function s(f,p){if(e[p]!==void 0)return e[p];const g=f.interleavedBuffers[p],m=r(f,g.buffer),v=Cr(g.type,m),x=new mu(v,g.stride);return x.uuid=g.uuid,e[p]=x,x}function r(f,p){if(n[p]!==void 0)return n[p];const g=f.arrayBuffers[p],m=new Uint32Array(g).buffer;return n[p]=m,m}const o=t.isInstancedBufferGeometry?new ux:new Xt,a=t.data.index;if(a!==void 0){const f=Cr(a.type,a.array);o.setIndex(new he(f,1))}const c=t.data.attributes;for(const f in c){const p=c[f];let _;if(p.isInterleavedBufferAttribute){const g=s(t.data,p.data);_=new Xs(g,p.itemSize,p.offset,p.normalized)}else{const g=Cr(p.type,p.array),m=p.isInstancedBufferAttribute?gn:he;_=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(_.name=p.name),p.usage!==void 0&&_.setUsage(p.usage),o.setAttribute(f,_)}const l=t.data.morphAttributes;if(l)for(const f in l){const p=l[f],_=[];for(let g=0,m=p.length;g<m;g++){const v=p[g];let x;if(v.isInterleavedBufferAttribute){const b=s(t.data,v.data);x=new Xs(b,v.itemSize,v.offset,v.normalized)}else{const b=Cr(v.type,v.array);x=new he(b,v.itemSize,v.normalized)}v.name!==void 0&&(x.name=v.name),_.push(x)}o.morphAttributes[f]=_}t.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const h=t.data.groups||t.data.drawcalls||t.data.offsets;if(h!==void 0)for(let f=0,p=h.length;f!==p;++f){const _=h[f];o.addGroup(_.start,_.count,_.materialIndex)}const d=t.data.boundingSphere;if(d!==void 0){const f=new I;d.center!==void 0&&f.fromArray(d.center),o.boundingSphere=new Ge(f,d.radius)}return t.name&&(o.name=t.name),t.userData&&(o.userData=t.userData),o}}class sE extends Sn{constructor(t){super(t)}load(t,e,n,s){const r=this,o=this.path===""?Ed.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||o;const a=new Di(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(c){let l=null;try{l=JSON.parse(c)}catch(h){s!==void 0&&s(h),console.error("THREE:ObjectLoader: Can't parse "+t+".",h.message);return}const u=l.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){s!==void 0&&s(new Error("THREE.ObjectLoader: Can't load "+t)),console.error("THREE.ObjectLoader: Can't load "+t);return}r.parse(l,e)},n,s)}async loadAsync(t,e){const n=this,s=this.path===""?Ed.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||s;const r=new Di(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const o=await r.loadAsync(t,e),a=JSON.parse(o),c=a.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(a)}parse(t,e){const n=this.parseAnimations(t.animations),s=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,s),o=this.parseImages(t.images,function(){e!==void 0&&e(l)}),a=this.parseTextures(t.textures,o),c=this.parseMaterials(t.materials,a),l=this.parseObject(t.object,r,c,a,n),u=this.parseSkeletons(t.skeletons,l);if(this.bindSkeletons(l,u),this.bindLightTargets(l),e!==void 0){let h=!1;for(const d in o)if(o[d].data instanceof HTMLImageElement){h=!0;break}h===!1&&e(l)}return l}async parseAsync(t){const e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),s=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),o=this.parseTextures(t.textures,r),a=this.parseMaterials(t.materials,o),c=this.parseObject(t.object,s,a,o,e),l=this.parseSkeletons(t.skeletons,c);return this.bindSkeletons(c,l),this.bindLightTargets(c),c}parseShapes(t){const e={};if(t!==void 0)for(let n=0,s=t.length;n<s;n++){const r=new Bs().fromJSON(t[n]);e[r.uuid]=r}return e}parseSkeletons(t,e){const n={},s={};if(e.traverse(function(r){r.isBone&&(s[r.uuid]=r)}),t!==void 0)for(let r=0,o=t.length;r<o;r++){const a=new gu().fromJSON(t[r],s);n[a.uuid]=a}return n}parseGeometries(t,e){const n={};if(t!==void 0){const s=new hx;for(let r=0,o=t.length;r<o;r++){let a;const c=t[r];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":a=s.parse(c);break;default:c.type in Tm?a=Tm[c.type].fromJSON(c,e):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`)}a.uuid=c.uuid,c.name!==void 0&&(a.name=c.name),c.userData!==void 0&&(a.userData=c.userData),n[c.uuid]=a}}return n}parseMaterials(t,e){const n={},s={};if(t!==void 0){const r=new Lu;r.setTextures(e);for(let o=0,a=t.length;o<a;o++){const c=t[o];n[c.uuid]===void 0&&(n[c.uuid]=r.parse(c)),s[c.uuid]=n[c.uuid]}}return s}parseAnimations(t){const e={};if(t!==void 0)for(let n=0;n<t.length;n++){const s=t[n],r=ra.parse(s);e[r.uuid]=r}return e}parseImages(t,e){const n=this,s={};let r;function o(c){return n.manager.itemStart(c),r.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function a(c){if(typeof c=="string"){const l=c,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return o(u)}else return c.data?{data:Cr(c.type,c.data),width:c.width,height:c.height}:null}if(t!==void 0&&t.length>0){const c=new Df(e);r=new oa(c),r.setCrossOrigin(this.crossOrigin);for(let l=0,u=t.length;l<u;l++){const h=t[l],d=h.url;if(Array.isArray(d)){const f=[];for(let p=0,_=d.length;p<_;p++){const g=d[p],m=a(g);m!==null&&(m instanceof HTMLImageElement?f.push(m):f.push(new oi(m.data,m.width,m.height)))}s[h.uuid]=new Ls(f)}else{const f=a(h.url);s[h.uuid]=new Ls(f)}}}return s}async parseImagesAsync(t){const e=this,n={};let s;async function r(o){if(typeof o=="string"){const a=o,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:e.resourcePath+a;return await s.loadAsync(c)}else return o.data?{data:Cr(o.type,o.data),width:o.width,height:o.height}:null}if(t!==void 0&&t.length>0){s=new oa(this.manager),s.setCrossOrigin(this.crossOrigin);for(let o=0,a=t.length;o<a;o++){const c=t[o],l=c.url;if(Array.isArray(l)){const u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h],p=await r(f);p!==null&&(p instanceof HTMLImageElement?u.push(p):u.push(new oi(p.data,p.width,p.height)))}n[c.uuid]=new Ls(u)}else{const u=await r(c.url);n[c.uuid]=new Ls(u)}}}return n}parseTextures(t,e){function n(r,o){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}const s={};if(t!==void 0)for(let r=0,o=t.length;r<o;r++){const a=t[r];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),e[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);const c=e[a.image],l=c.data;let u;Array.isArray(l)?(u=new da,l.length===6&&(u.needsUpdate=!0)):(l&&l.data?u=new oi:u=new Ae,l&&(u.needsUpdate=!0)),u.source=c,u.uuid=a.uuid,a.name!==void 0&&(u.name=a.name),a.mapping!==void 0&&(u.mapping=n(a.mapping,rE)),a.channel!==void 0&&(u.channel=a.channel),a.offset!==void 0&&u.offset.fromArray(a.offset),a.repeat!==void 0&&u.repeat.fromArray(a.repeat),a.center!==void 0&&u.center.fromArray(a.center),a.rotation!==void 0&&(u.rotation=a.rotation),a.wrap!==void 0&&(u.wrapS=n(a.wrap[0],Im),u.wrapT=n(a.wrap[1],Im)),a.format!==void 0&&(u.format=a.format),a.internalFormat!==void 0&&(u.internalFormat=a.internalFormat),a.type!==void 0&&(u.type=a.type),a.colorSpace!==void 0&&(u.colorSpace=a.colorSpace),a.minFilter!==void 0&&(u.minFilter=n(a.minFilter,Lm)),a.magFilter!==void 0&&(u.magFilter=n(a.magFilter,Lm)),a.anisotropy!==void 0&&(u.anisotropy=a.anisotropy),a.flipY!==void 0&&(u.flipY=a.flipY),a.generateMipmaps!==void 0&&(u.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(u.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(u.compareFunction=a.compareFunction),a.userData!==void 0&&(u.userData=a.userData),s[a.uuid]=u}return s}parseObject(t,e,n,s,r){let o;function a(d){return e[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),e[d]}function c(d){if(d!==void 0){if(Array.isArray(d)){const f=[];for(let p=0,_=d.length;p<_;p++){const g=d[p];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]}}function l(d){return s[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),s[d]}let u,h;switch(t.type){case"Scene":o=new vf,t.background!==void 0&&(Number.isInteger(t.background)?o.background=new q(t.background):o.background=l(t.background)),t.environment!==void 0&&(o.environment=l(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?o.fog=new pa(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(o.fog=new pu(t.fog.color,t.fog.density)),t.fog.name!==""&&(o.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(o.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(o.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&o.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":o=new Be(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(o.focus=t.focus),t.zoom!==void 0&&(o.zoom=t.zoom),t.filmGauge!==void 0&&(o.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(o.filmOffset=t.filmOffset),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"OrthographicCamera":o=new hu(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(o.zoom=t.zoom),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"AmbientLight":o=new ox(t.color,t.intensity);break;case"DirectionalLight":o=new Of(t.color,t.intensity),o.target=t.target||"";break;case"PointLight":o=new rx(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":o=new ax(t.color,t.intensity,t.width,t.height);break;case"SpotLight":o=new sx(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),o.target=t.target||"";break;case"HemisphereLight":o=new Nf(t.color,t.groundColor,t.intensity);break;case"LightProbe":o=new lx().fromJSON(t);break;case"SkinnedMesh":u=a(t.geometry),h=c(t.material),o=new C_(u,h),t.bindMode!==void 0&&(o.bindMode=t.bindMode),t.bindMatrix!==void 0&&o.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(o.skeleton=t.skeleton);break;case"Mesh":u=a(t.geometry),h=c(t.material),o=new Wt(u,h);break;case"InstancedMesh":u=a(t.geometry),h=c(t.material);const d=t.count,f=t.instanceMatrix,p=t.instanceColor;o=new ma(u,h,d),o.instanceMatrix=new gn(new Float32Array(f.array),16),p!==void 0&&(o.instanceColor=new gn(new Float32Array(p.array),p.itemSize));break;case"BatchedMesh":u=a(t.geometry),h=c(t.material),o=new R_(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,h),o.geometry=u,o.perObjectFrustumCulled=t.perObjectFrustumCulled,o.sortObjects=t.sortObjects,o._drawRanges=t.drawRanges,o._reservedRanges=t.reservedRanges,o._visibility=t.visibility,o._active=t.active,o._bounds=t.bounds.map(_=>{const g=new cn;g.min.fromArray(_.boxMin),g.max.fromArray(_.boxMax);const m=new Ge;return m.radius=_.sphereRadius,m.center.fromArray(_.sphereCenter),{boxInitialized:_.boxInitialized,box:g,sphereInitialized:_.sphereInitialized,sphere:m}}),o._maxInstanceCount=t.maxInstanceCount,o._maxVertexCount=t.maxVertexCount,o._maxIndexCount=t.maxIndexCount,o._geometryInitialized=t.geometryInitialized,o._geometryCount=t.geometryCount,o._matricesTexture=l(t.matricesTexture.uuid),t.colorsTexture!==void 0&&(o._colorsTexture=l(t.colorsTexture.uuid));break;case"LOD":o=new T_;break;case"Line":o=new is(a(t.geometry),c(t.material));break;case"LineLoop":o=new P_(a(t.geometry),c(t.material));break;case"LineSegments":o=new hi(a(t.geometry),c(t.material));break;case"PointCloud":case"Points":o=new I_(a(t.geometry),c(t.material));break;case"Sprite":o=new E_(c(t.material));break;case"Group":o=new Re;break;case"Bone":o=new bf;break;default:o=new ie}if(o.uuid=t.uuid,t.name!==void 0&&(o.name=t.name),t.matrix!==void 0?(o.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=t.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(t.position!==void 0&&o.position.fromArray(t.position),t.rotation!==void 0&&o.rotation.fromArray(t.rotation),t.quaternion!==void 0&&o.quaternion.fromArray(t.quaternion),t.scale!==void 0&&o.scale.fromArray(t.scale)),t.up!==void 0&&o.up.fromArray(t.up),t.castShadow!==void 0&&(o.castShadow=t.castShadow),t.receiveShadow!==void 0&&(o.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(o.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(o.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(o.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(o.shadow.radius=t.shadow.radius),t.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(o.visible=t.visible),t.frustumCulled!==void 0&&(o.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(o.renderOrder=t.renderOrder),t.userData!==void 0&&(o.userData=t.userData),t.layers!==void 0&&(o.layers.mask=t.layers),t.children!==void 0){const d=t.children;for(let f=0;f<d.length;f++)o.add(this.parseObject(d[f],e,n,s,r))}if(t.animations!==void 0){const d=t.animations;for(let f=0;f<d.length;f++){const p=d[f];o.animations.push(r[p])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(o.autoUpdate=t.autoUpdate);const d=t.levels;for(let f=0;f<d.length;f++){const p=d[f],_=o.getObjectByProperty("uuid",p.object);_!==void 0&&o.addLevel(_,p.distance,p.hysteresis)}}return o}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const s=e[n.skeleton];s===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(s,n.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){const n=e.target,s=t.getObjectByProperty("uuid",n);s!==void 0?e.target=s:e.target=new ie}})}}const rE={UVMapping:jl,CubeReflectionMapping:Ii,CubeRefractionMapping:ns,EquirectangularReflectionMapping:Go,EquirectangularRefractionMapping:Vo,CubeUVReflectionMapping:$r},Im={RepeatWrapping:Br,ClampToEdgeWrapping:zn,MirroredRepeatWrapping:Wo},Lm={NearestFilter:ke,NearestMipmapNearestFilter:jd,NearestMipmapLinearFilter:Tr,LinearFilter:Le,LinearMipmapNearestFilter:So,LinearMipmapLinearFilter:si};class oE extends Sn{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=wi.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return wi.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){s&&s(l),wi.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});wi.add(t,c),r.manager.itemStart(t)}}let mc;class Ff{static getContext(){return mc===void 0&&(mc=new(window.AudioContext||window.webkitAudioContext)),mc}static setContext(t){mc=t}}class aE extends Sn{constructor(t){super(t)}load(t,e,n,s){const r=this,o=new Di(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(c){try{const l=c.slice(0);Ff.getContext().decodeAudioData(l,function(h){e(h)}).catch(a)}catch(l){a(l)}},n,s);function a(c){s?s(c):console.error(c),r.manager.itemError(t)}}}const Dm=new Nt,Nm=new Nt,xs=new Nt;class cE{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Be,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Be,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,xs.copy(t.projectionMatrix);const s=e.eyeSep/2,r=s*e.near/e.focus,o=e.near*Math.tan(zs*e.fov*.5)/e.zoom;let a,c;Nm.elements[12]=-s,Dm.elements[12]=s,a=-o*e.aspect+r,c=o*e.aspect+r,xs.elements[0]=2*e.near/(c-a),xs.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(xs),a=-o*e.aspect-r,c=o*e.aspect-r,xs.elements[0]=2*e.near/(c-a),xs.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(xs)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Nm),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(Dm)}}class zf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Um(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Um();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Um(){return performance.now()}const ys=new I,Om=new an,lE=new I,vs=new I;class uE extends ie{constructor(){super(),this.type="AudioListener",this.context=Ff.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new zf}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(ys,Om,lE),vs.set(0,0,-1).applyQuaternion(Om),e.positionX){const s=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(ys.x,s),e.positionY.linearRampToValueAtTime(ys.y,s),e.positionZ.linearRampToValueAtTime(ys.z,s),e.forwardX.linearRampToValueAtTime(vs.x,s),e.forwardY.linearRampToValueAtTime(vs.y,s),e.forwardZ.linearRampToValueAtTime(vs.z,s),e.upX.linearRampToValueAtTime(n.x,s),e.upY.linearRampToValueAtTime(n.y,s),e.upZ.linearRampToValueAtTime(n.z,s)}else e.setPosition(ys.x,ys.y,ys.z),e.setOrientation(vs.x,vs.y,vs.z,n.x,n.y,n.z)}}class dx extends ie{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}const Ms=new I,Fm=new an,hE=new I,bs=new I;class dE extends dx{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Ms,Fm,hE),bs.set(0,0,1).applyQuaternion(Fm);const e=this.panner;if(e.positionX){const n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(Ms.x,n),e.positionY.linearRampToValueAtTime(Ms.y,n),e.positionZ.linearRampToValueAtTime(Ms.z,n),e.orientationX.linearRampToValueAtTime(bs.x,n),e.orientationY.linearRampToValueAtTime(bs.y,n),e.orientationZ.linearRampToValueAtTime(bs.z,n)}else e.setPosition(Ms.x,Ms.y,Ms.z),e.setOrientation(bs.x,bs.y,bs.z)}}class fE{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0;const e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}}class fx{constructor(t,e,n){this.binding=t,this.valueSize=n;let s,r,o;switch(e){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,s=this.valueSize,r=t*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,s,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,s=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=e*this._origIndex;this._mixBufferRegion(n,s,c,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){a.setValue(n,s);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,s=n*this._origIndex;t.getValue(e,s);for(let r=n,o=s;r!==o;++r)e[r]=e[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,s){an.slerpFlat(t,e,t,e,t,n,s)}_slerpAdditive(t,e,n,s,r){const o=this._workIndex*r;an.multiplyQuaternionsFlat(t,o,t,e,t,n),an.slerpFlat(t,e,t,e,t,o,s)}_lerp(t,e,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const c=e+a;t[c]=t[c]*o+t[n+a]*s}}_lerpAdditive(t,e,n,s,r){for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]+t[n+o]*s}}}const Bf="\\[\\]\\.:\\/",pE=new RegExp("["+Bf+"]","g"),kf="[^"+Bf+"]",mE="[^"+Bf.replace("\\.","")+"]",gE=/((?:WC+[\/:])*)/.source.replace("WC",kf),_E=/(WCOD+)?/.source.replace("WCOD",mE),xE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kf),yE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kf),vE=new RegExp("^"+gE+_E+xE+yE+"$"),ME=["material","materials","bones","map"];class bE{constructor(t,e,n){const s=n||ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ne{constructor(t,e,n){this.path=e,this.parsedPath=n||ne.parseTrackName(e),this.node=ne.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ne.Composite(t,e,n):new ne(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(pE,"")}static parseTrackName(t){const e=vE.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);ME.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=ne.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[s];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ne.Composite=bE;ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ne.prototype.GetterByBindingType=[ne.prototype._getValue_direct,ne.prototype._getValue_array,ne.prototype._getValue_arrayElement,ne.prototype._getValue_toArray];ne.prototype.SetterByBindingTypeAndVersioning=[[ne.prototype._setValue_direct,ne.prototype._setValue_direct_setNeedsUpdate,ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_array,ne.prototype._setValue_array_setNeedsUpdate,ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_arrayElement,ne.prototype._setValue_arrayElement_setNeedsUpdate,ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_fromArray,ne.prototype._setValue_fromArray_setNeedsUpdate,ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class SE{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Pn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let n=0,s=arguments.length;n!==s;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){const t=this._objects,e=this._indicesByUUID,n=this._paths,s=this._parsedPaths,r=this._bindings,o=r.length;let a,c=t.length,l=this.nCachedObjects_;for(let u=0,h=arguments.length;u!==h;++u){const d=arguments[u],f=d.uuid;let p=e[f];if(p===void 0){p=c++,e[f]=p,t.push(d);for(let _=0,g=o;_!==g;++_)r[_].push(new ne(d,n[_],s[_]))}else if(p<l){a=t[p];const _=--l,g=t[_];e[g.uuid]=p,t[p]=g,e[f]=_,t[_]=d;for(let m=0,v=o;m!==v;++m){const x=r[m],b=x[_];let S=x[p];x[p]=b,S===void 0&&(S=new ne(d,n[m],s[m])),x[_]=S}}else t[p]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,s=n.length;let r=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const c=arguments[o],l=c.uuid,u=e[l];if(u!==void 0&&u>=r){const h=r++,d=t[h];e[d.uuid]=u,t[u]=d,e[l]=h,t[h]=c;for(let f=0,p=s;f!==p;++f){const _=n[f],g=_[h],m=_[u];_[u]=g,_[h]=m}}}this.nCachedObjects_=r}uncache(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,s=n.length;let r=this.nCachedObjects_,o=t.length;for(let a=0,c=arguments.length;a!==c;++a){const l=arguments[a],u=l.uuid,h=e[u];if(h!==void 0)if(delete e[u],h<r){const d=--r,f=t[d],p=--o,_=t[p];e[f.uuid]=h,t[h]=f,e[_.uuid]=d,t[d]=_,t.pop();for(let g=0,m=s;g!==m;++g){const v=n[g],x=v[d],b=v[p];v[h]=x,v[d]=b,v.pop()}}else{const d=--o,f=t[d];d>0&&(e[f.uuid]=h),t[h]=f,t.pop();for(let p=0,_=s;p!==_;++p){const g=n[p];g[h]=g[d],g.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){const n=this._bindingsIndicesByPath;let s=n[t];const r=this._bindings;if(s!==void 0)return r[s];const o=this._paths,a=this._parsedPaths,c=this._objects,l=c.length,u=this.nCachedObjects_,h=new Array(l);s=r.length,n[t]=s,o.push(t),a.push(e),r.push(h);for(let d=u,f=c.length;d!==f;++d){const p=c[d];h[d]=new ne(p,t,e)}return h}unsubscribe_(t){const e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){const s=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,c=o[a],l=t[a];e[l]=n,o[n]=c,o.pop(),r[n]=r[a],r.pop(),s[n]=s[a],s.pop()}}}class px{constructor(t,e,n=null,s=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=s;const r=e.tracks,o=r.length,a=new Array(o),c={endingStart:Ps,endingEnd:Ps};for(let l=0;l!==o;++l){const u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Kg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const s=this._clip.duration,r=t._clip.duration,o=r/s,a=s/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=t/o,l[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,s){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const c=(t-r)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case uf:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case ou:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(s,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let s=this.time+t,r=this._loopCount;const o=n===Jg;if(t===0)return r===-1?s:o&&(r&1)===1?e-s:s;if(n===Zg){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(s>=e)s=e;else if(s<0)s=0;else{this.time=s;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=e||s<0){const a=Math.floor(s/e);s-=e*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=t>0?e:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return e-s}return s}_setEndings(t,e,n){const s=this._interpolantSettings;n?(s.endingStart=Is,s.endingEnd=Is):(t?s.endingStart=this.zeroSlopeAtStart?Is:Ps:s.endingStart=Yo,e?s.endingEnd=this.zeroSlopeAtEnd?Is:Ps:s.endingEnd=Yo)}_scheduleFading(t,e,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=e,a[1]=r+t,c[1]=n,this}}const wE=new Float32Array(1);class AE extends li{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,s=t._clip.tracks,r=s.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){const d=s[h],f=d.name;let p=u[f];if(p!==void 0)++p.referenceCount,o[h]=p;else{if(p=o[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,f));continue}const _=e&&e._propertyBindings[h].binding.parsedPath;p=new fx(ne.create(n,f,_),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,f),o[h]=p}a[h].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,s=t._clip.uuid,r=this._actionsByClip[s];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,s,n)}const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const s=this._actions,r=this._actionsByClip;let o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=s.length,s.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],s=t._cacheIndex;n._cacheIndex=s,e[s]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=t._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),t._byClipCacheIndex=null;const h=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete h[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,s=this._nActiveActions++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,s=--this._nActiveActions,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[e];o===void 0&&(o={},s[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,s=this._nActiveBindings++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,s=--this._nActiveBindings,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new If(new Float32Array(2),new Float32Array(2),1,wE),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,s=--this._nActiveControlInterpolants,r=e[s];t.__cacheIndex=s,e[s]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const s=e||this._root,r=s.uuid;let o=typeof t=="string"?ra.findByName(s,t):t;const a=o!==null?o.uuid:t,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=ou),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const u=new px(this,o,e,n);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(t,e){const n=e||this._root,s=n.uuid,r=typeof t=="string"?ra.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,s=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(s,t,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const u=l._cacheIndex,h=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,e[u]=h,e.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[e];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Hf{constructor(t){this.value=t}clone(){return new Hf(this.value.clone===void 0?this.value:this.value.clone())}}let EE=0;class TE extends li{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:EE++}),this.name="",this.usage=Ko,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){const e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(t){this.name=t.name,this.usage=t.usage;const e=t.uniforms;this.uniforms.length=0;for(let n=0,s=e.length;n<s;n++){const r=Array.isArray(e[n])?e[n]:[e[n]];for(let o=0;o<r.length;o++)this.uniforms.push(r[o].clone())}return this}clone(){return new this.constructor().copy(this)}}class CE extends mu{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}class RE{constructor(t,e,n,s,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=s,this.count=r,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}}const zm=new Nt;class PE{constructor(t,e,n=0,s=1/0){this.ray=new Kr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new lu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return zm.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zm),this}intersectObject(t,e=!0,n=[]){return Td(t,this,n,e),n.sort(Bm),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Td(t[s],this,n,e);return n.sort(Bm),n}}function Bm(i,t){return i.distance-t.distance}function Td(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Td(r[o],t,e,!0)}}class IE{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(we(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class LE{constructor(t=1,e=0,n=0){return this.radius=t,this.theta=e,this.y=n,this}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}}class Gf{constructor(t,e,n,s){Gf.prototype.isMatrix2=!0,this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}}const km=new et;class DE{constructor(t=new et(1/0,1/0),e=new et(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=km.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,km).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Hm=new I,gc=new I;class NE{constructor(t=new I,e=new I){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Hm.subVectors(t,this.start),gc.subVectors(this.end,this.start);const n=gc.dot(gc);let r=gc.dot(Hm)/n;return e&&(r=we(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Gm=new I;class UE extends ie{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const n=new Xt,s=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,c=32;o<c;o++,a++){const l=o/c*Math.PI*2,u=a/c*Math.PI*2;s.push(Math.cos(l),Math.sin(l),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new xt(s,3));const r=new hn({fog:!1,toneMapped:!1});this.cone=new hi(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),Gm.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Gm),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const qi=new I,_c=new Nt,Dh=new Nt;class OE extends hi{constructor(t){const e=mx(t),n=new Xt,s=[],r=[],o=new q(0,0,1),a=new q(0,1,0);for(let l=0;l<e.length;l++){const u=e[l];u.parent&&u.parent.isBone&&(s.push(0,0,0),s.push(0,0,0),r.push(o.r,o.g,o.b),r.push(a.r,a.g,a.b))}n.setAttribute("position",new xt(s,3)),n.setAttribute("color",new xt(r,3));const c=new hn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){const e=this.bones,n=this.geometry,s=n.getAttribute("position");Dh.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<e.length;r++){const a=e[r];a.parent&&a.parent.isBone&&(_c.multiplyMatrices(Dh,a.matrixWorld),qi.setFromMatrixPosition(_c),s.setXYZ(o,qi.x,qi.y,qi.z),_c.multiplyMatrices(Dh,a.parent.matrixWorld),qi.setFromMatrixPosition(_c),s.setXYZ(o+1,qi.x,qi.y,qi.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose()}}function mx(i){const t=[];i.isBone===!0&&t.push(i);for(let e=0;e<i.children.length;e++)t.push.apply(t,mx(i.children[e]));return t}class FE extends Wt{constructor(t,e,n){const s=new js(e,4,2),r=new ui({wireframe:!0,fog:!1,toneMapped:!1});super(s,r),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const zE=new I,Vm=new q,Wm=new q;class BE extends ie{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const s=new _a(e);s.rotateY(Math.PI*.5),this.material=new ui({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=s.getAttribute("position"),o=new Float32Array(r.count*3);s.setAttribute("color",new he(o,3)),this.add(new Wt(s,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const e=t.geometry.getAttribute("color");Vm.copy(this.light.color),Wm.copy(this.light.groundColor);for(let n=0,s=e.count;n<s;n++){const r=n<s/2?Vm:Wm;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),t.lookAt(zE.setFromMatrixPosition(this.light.matrixWorld).negate())}}class kE extends hi{constructor(t=10,e=10,n=4473924,s=8947848){n=new q(n),s=new q(s);const r=e/2,o=t/e,a=t/2,c=[],l=[];for(let d=0,f=0,p=-a;d<=e;d++,p+=o){c.push(-a,0,p,a,0,p),c.push(p,0,-a,p,0,a);const _=d===r?n:s;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}const u=new Xt;u.setAttribute("position",new xt(c,3)),u.setAttribute("color",new xt(l,3));const h=new hn({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class HE extends hi{constructor(t=10,e=16,n=8,s=64,r=4473924,o=8947848){r=new q(r),o=new q(o);const a=[],c=[];if(e>1)for(let h=0;h<e;h++){const d=h/e*(Math.PI*2),f=Math.sin(d)*t,p=Math.cos(d)*t;a.push(0,0,0),a.push(f,0,p);const _=h&1?r:o;c.push(_.r,_.g,_.b),c.push(_.r,_.g,_.b)}for(let h=0;h<n;h++){const d=h&1?r:o,f=t-t/n*h;for(let p=0;p<s;p++){let _=p/s*(Math.PI*2),g=Math.sin(_)*f,m=Math.cos(_)*f;a.push(g,0,m),c.push(d.r,d.g,d.b),_=(p+1)/s*(Math.PI*2),g=Math.sin(_)*f,m=Math.cos(_)*f,a.push(g,0,m),c.push(d.r,d.g,d.b)}}const l=new Xt;l.setAttribute("position",new xt(a,3)),l.setAttribute("color",new xt(c,3));const u=new hn({vertexColors:!0,toneMapped:!1});super(l,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Xm=new I,xc=new I,Ym=new I;class GE extends ie{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let s=new Xt;s.setAttribute("position",new xt([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const r=new hn({fog:!1,toneMapped:!1});this.lightPlane=new is(s,r),this.add(this.lightPlane),s=new Xt,s.setAttribute("position",new xt([0,0,0,0,0,1],3)),this.targetLine=new is(s,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Xm.setFromMatrixPosition(this.light.matrixWorld),xc.setFromMatrixPosition(this.light.target.matrixWorld),Ym.subVectors(xc,Xm),this.lightPlane.lookAt(xc),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(xc),this.targetLine.scale.z=Ym.length()}}const yc=new I,Se=new uu;class VE extends hi{constructor(t){const e=new Xt,n=new hn({color:16777215,vertexColors:!0,toneMapped:!1}),s=[],r=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(p,_){c(p),c(_)}function c(p){s.push(0,0,0),r.push(0,0,0),o[p]===void 0&&(o[p]=[]),o[p].push(s.length/3-1)}e.setAttribute("position",new xt(s,3)),e.setAttribute("color",new xt(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const l=new q(16755200),u=new q(16711680),h=new q(43775),d=new q(16777215),f=new q(3355443);this.setColors(l,u,h,d,f)}setColors(t,e,n,s,r){const a=this.geometry.getAttribute("color");a.setXYZ(0,t.r,t.g,t.b),a.setXYZ(1,t.r,t.g,t.b),a.setXYZ(2,t.r,t.g,t.b),a.setXYZ(3,t.r,t.g,t.b),a.setXYZ(4,t.r,t.g,t.b),a.setXYZ(5,t.r,t.g,t.b),a.setXYZ(6,t.r,t.g,t.b),a.setXYZ(7,t.r,t.g,t.b),a.setXYZ(8,t.r,t.g,t.b),a.setXYZ(9,t.r,t.g,t.b),a.setXYZ(10,t.r,t.g,t.b),a.setXYZ(11,t.r,t.g,t.b),a.setXYZ(12,t.r,t.g,t.b),a.setXYZ(13,t.r,t.g,t.b),a.setXYZ(14,t.r,t.g,t.b),a.setXYZ(15,t.r,t.g,t.b),a.setXYZ(16,t.r,t.g,t.b),a.setXYZ(17,t.r,t.g,t.b),a.setXYZ(18,t.r,t.g,t.b),a.setXYZ(19,t.r,t.g,t.b),a.setXYZ(20,t.r,t.g,t.b),a.setXYZ(21,t.r,t.g,t.b),a.setXYZ(22,t.r,t.g,t.b),a.setXYZ(23,t.r,t.g,t.b),a.setXYZ(24,e.r,e.g,e.b),a.setXYZ(25,e.r,e.g,e.b),a.setXYZ(26,e.r,e.g,e.b),a.setXYZ(27,e.r,e.g,e.b),a.setXYZ(28,e.r,e.g,e.b),a.setXYZ(29,e.r,e.g,e.b),a.setXYZ(30,e.r,e.g,e.b),a.setXYZ(31,e.r,e.g,e.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,s.r,s.g,s.b),a.setXYZ(39,s.r,s.g,s.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0}update(){const t=this.geometry,e=this.pointMap,n=1,s=1;Se.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Te("c",e,t,Se,0,0,-1),Te("t",e,t,Se,0,0,1),Te("n1",e,t,Se,-n,-s,-1),Te("n2",e,t,Se,n,-s,-1),Te("n3",e,t,Se,-n,s,-1),Te("n4",e,t,Se,n,s,-1),Te("f1",e,t,Se,-n,-s,1),Te("f2",e,t,Se,n,-s,1),Te("f3",e,t,Se,-n,s,1),Te("f4",e,t,Se,n,s,1),Te("u1",e,t,Se,n*.7,s*1.1,-1),Te("u2",e,t,Se,-n*.7,s*1.1,-1),Te("u3",e,t,Se,0,s*2,-1),Te("cf1",e,t,Se,-n,0,1),Te("cf2",e,t,Se,n,0,1),Te("cf3",e,t,Se,0,-s,1),Te("cf4",e,t,Se,0,s,1),Te("cn1",e,t,Se,-n,0,-1),Te("cn2",e,t,Se,n,0,-1),Te("cn3",e,t,Se,0,-s,-1),Te("cn4",e,t,Se,0,s,-1),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Te(i,t,e,n,s,r,o){yc.set(s,r,o).unproject(n);const a=t[i];if(a!==void 0){const c=e.getAttribute("position");for(let l=0,u=a.length;l<u;l++)c.setXYZ(a[l],yc.x,yc.y,yc.z)}}const vc=new cn;class WE extends hi{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(8*3),r=new Xt;r.setIndex(new he(n,1)),r.setAttribute("position",new he(s,3)),super(r,new hn({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&vc.setFromObject(this.object),vc.isEmpty())return;const e=vc.min,n=vc.max,s=this.geometry.attributes.position,r=s.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=e.x,r[4]=n.y,r[5]=n.z,r[6]=e.x,r[7]=e.y,r[8]=n.z,r[9]=n.x,r[10]=e.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=e.z,r[15]=e.x,r[16]=n.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=n.x,r[22]=e.y,r[23]=e.z,s.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class XE extends hi{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Xt;r.setIndex(new he(n,1)),r.setAttribute("position",new xt(s,3)),super(r,new hn({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}}class YE extends is{constructor(t,e=1,n=16776960){const s=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new Xt;o.setAttribute("position",new xt(r,3)),o.computeBoundingSphere(),super(o,new hn({color:s,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new Xt;c.setAttribute("position",new xt(a,3)),c.computeBoundingSphere(),this.add(new Wt(c,new ui({color:s,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const qm=new I;let Mc,Nh;class qE extends ie{constructor(t=new I(0,0,1),e=new I(0,0,0),n=1,s=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",Mc===void 0&&(Mc=new Xt,Mc.setAttribute("position",new xt([0,0,0,0,1,0],3)),Nh=new Qs(0,.5,1,5,1),Nh.translate(0,-.5,0)),this.position.copy(e),this.line=new is(Mc,new hn({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Wt(Nh,new ui({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{qm.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(qm,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class $E extends hi{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Xt;s.setAttribute("position",new xt(e,3)),s.setAttribute("color",new xt(n,3));const r=new hn({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(t,e,n){const s=new q,r=this.geometry.attributes.color.array;return s.set(t),s.toArray(r,0),s.toArray(r,3),s.set(e),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class ZE{constructor(){this.type="ShapePath",this.color=new q,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new jo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,o){return this.currentPath.bezierCurveTo(t,e,n,s,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(m){const v=[];for(let x=0,b=m.length;x<b;x++){const S=m[x],w=new Bs;w.curves=S.curves,v.push(w)}return v}function n(m,v){const x=v.length;let b=!1;for(let S=x-1,w=0;w<x;S=w++){let A=v[S],E=v[w],C=E.x-A.x,y=E.y-A.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(A=v[w],C=-C,E=v[S],y=-y),m.y<A.y||m.y>E.y)continue;if(m.y===A.y){if(m.x===A.x)return!0}else{const M=y*(m.x-A.x)-C*(m.y-A.y);if(M===0)return!0;if(M<0)continue;b=!b}}else{if(m.y!==A.y)continue;if(E.x<=m.x&&m.x<=A.x||A.x<=m.x&&m.x<=E.x)return!0}}return b}const s=ai.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c;const l=[];if(r.length===1)return a=r[0],c=new Bs,c.curves=a.curves,l.push(c),l;let u=!s(r[0].getPoints());u=t?!u:u;const h=[],d=[];let f=[],p=0,_;d[p]=void 0,f[p]=[];for(let m=0,v=r.length;m<v;m++)a=r[m],_=a.getPoints(),o=s(_),o=t?!o:o,o?(!u&&d[p]&&p++,d[p]={s:new Bs,p:_},d[p].s.curves=a.curves,u&&p++,f[p]=[]):f[p].push({h:a,p:_[0]});if(!d[0])return e(r);if(d.length>1){let m=!1,v=0;for(let x=0,b=d.length;x<b;x++)h[x]=[];for(let x=0,b=d.length;x<b;x++){const S=f[x];for(let w=0;w<S.length;w++){const A=S[w];let E=!0;for(let C=0;C<d.length;C++)n(A.p,d[C].p)&&(x!==C&&v++,E?(E=!1,h[C].push(A)):m=!0);E&&h[x].push(A)}}v>0&&m===!1&&(f=h)}let g;for(let m=0,v=d.length;m<v;m++){c=d[m].s,l.push(c),g=f[m];for(let x=0,b=g.length;x<b;x++)c.holes.push(g[x].h)}return l}}class KE extends li{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}class JE extends Kn{constructor(t=1,e=1,n=1,s={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(t,e,{...s,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ql}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ql);const QE=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Qd,AddEquation:Ji,AddOperation:Hg,AdditiveAnimationBlendMode:uf,AdditiveBlending:il,AgXToneMapping:Yg,AlphaFormat:sf,AlwaysCompare:o_,AlwaysDepth:al,AlwaysStencilFunc:_d,AmbientLight:ox,AnimationAction:px,AnimationClip:ra,AnimationLoader:JA,AnimationMixer:AE,AnimationObjectGroup:SE,AnimationUtils:qA,ArcCurve:L_,ArrayCamera:S_,ArrowHelper:qE,AttachedBindMode:gd,Audio:dx,AudioAnalyser:fE,AudioContext:Ff,AudioListener:uE,AudioLoader:aE,AxesHelper:$E,BackSide:Ke,BasicDepthPacking:Qg,BasicShadowMap:Wy,BatchedMesh:R_,Bone:bf,BooleanKeyframeTrack:tr,Box2:DE,Box3:cn,Box3Helper:XE,BoxGeometry:Ks,BoxHelper:WE,BufferAttribute:he,BufferGeometry:Xt,BufferGeometryLoader:hx,ByteType:tf,Cache:wi,Camera:uu,CameraHelper:VE,CanvasTexture:_A,CapsuleGeometry:yu,CatmullRomCurve3:D_,CineonToneMapping:Wg,CircleGeometry:vu,ClampToEdgeWrapping:zn,Clock:zf,Color:q,ColorKeyframeTrack:Lf,ColorManagement:se,CompressedArrayTexture:mA,CompressedCubeTexture:gA,CompressedTexture:_u,CompressedTextureLoader:QA,ConeGeometry:Mu,ConstantAlphaFactor:zg,ConstantColorFactor:Og,Controls:KE,CubeCamera:m_,CubeReflectionMapping:Ii,CubeRefractionMapping:ns,CubeTexture:da,CubeTextureLoader:jA,CubeUVReflectionMapping:$r,CubicBezierCurve:Af,CubicBezierCurve3:N_,CubicInterpolant:j_,CullFaceBack:fd,CullFaceFront:Mg,CullFaceFrontBack:Vy,CullFaceNone:vg,Curve:Jn,CurvePath:O_,CustomBlending:bg,CustomToneMapping:Xg,CylinderGeometry:Qs,Cylindrical:LE,Data3DTexture:pf,DataArrayTexture:cu,DataTexture:oi,DataTextureLoader:tE,DataUtils:sM,DecrementStencilOp:sv,DecrementWrapStencilOp:ov,DefaultLoadingManager:nx,DepthFormat:Fs,DepthStencilFormat:Ws,DepthTexture:xf,DetachedBindMode:$g,DirectionalLight:Of,DirectionalLightHelper:GE,DiscreteInterpolant:tx,DisplayP3ColorSpace:au,DodecahedronGeometry:bu,DoubleSide:_e,DstAlphaFactor:Ig,DstColorFactor:Dg,DynamicCopyUsage:vv,DynamicDrawUsage:a_,DynamicReadUsage:_v,EdgesGeometry:F_,EllipseCurve:xu,EqualCompare:n_,EqualDepth:ll,EqualStencilFunc:uv,EquirectangularReflectionMapping:Go,EquirectangularRefractionMapping:Vo,Euler:bn,EventDispatcher:li,ExtrudeGeometry:wu,FileLoader:Di,Float16BufferAttribute:uM,Float32BufferAttribute:xt,FloatType:vn,Fog:pa,FogExp2:pu,FramebufferTexture:pA,FrontSide:Pi,Frustum:fa,GLBufferAttribute:RE,GLSL1:bv,GLSL3:xd,GreaterCompare:i_,GreaterDepth:hl,GreaterEqualCompare:r_,GreaterEqualDepth:ul,GreaterEqualStencilFunc:pv,GreaterStencilFunc:dv,GridHelper:kE,Group:Re,HalfFloatType:Zr,HemisphereLight:Nf,HemisphereLightHelper:BE,IcosahedronGeometry:Au,ImageBitmapLoader:oE,ImageLoader:oa,ImageUtils:u_,IncrementStencilOp:iv,IncrementWrapStencilOp:rv,InstancedBufferAttribute:gn,InstancedBufferGeometry:ux,InstancedInterleavedBuffer:CE,InstancedMesh:ma,Int16BufferAttribute:cM,Int32BufferAttribute:lM,Int8BufferAttribute:rM,IntType:tu,InterleavedBuffer:mu,InterleavedBufferAttribute:Xs,Interpolant:xa,InterpolateDiscrete:Xo,InterpolateLinear:Bl,InterpolateSmooth:Bc,InvertStencilOp:av,KeepStencilOp:Ss,KeyframeTrack:Qn,LOD:T_,LatheGeometry:ga,Layers:lu,LessCompare:e_,LessDepth:cl,LessEqualCompare:df,LessEqualDepth:Gs,LessEqualStencilFunc:hv,LessStencilFunc:lv,Light:cs,LightProbe:lx,Line:is,Line3:NE,LineBasicMaterial:hn,LineCurve:Ef,LineCurve3:U_,LineDashedMaterial:K_,LineLoop:P_,LineSegments:hi,LinearDisplayP3ColorSpace:ha,LinearFilter:Le,LinearInterpolant:If,LinearMipMapLinearFilter:$y,LinearMipMapNearestFilter:qy,LinearMipmapLinearFilter:si,LinearMipmapNearestFilter:So,LinearSRGBColorSpace:Oi,LinearToneMapping:Gg,LinearTransfer:qo,Loader:Sn,LoaderUtils:Ed,LoadingManager:Df,LoopOnce:Zg,LoopPingPong:Jg,LoopRepeat:Kg,LuminanceAlphaFormat:af,LuminanceFormat:of,MOUSE:Hy,Material:Qe,MaterialLoader:Lu,MathUtils:Bv,Matrix2:Gf,Matrix3:qt,Matrix4:Nt,MaxEquation:Eg,Mesh:Wt,MeshBasicMaterial:ui,MeshDepthMaterial:fu,MeshDistanceMaterial:yf,MeshLambertMaterial:$_,MeshMatcapMaterial:Z_,MeshNormalMaterial:q_,MeshPhongMaterial:X_,MeshPhysicalMaterial:W_,MeshStandardMaterial:Ve,MeshToonMaterial:Y_,MinEquation:Ag,MirroredRepeatWrapping:Wo,MixOperation:kg,MultiplyBlending:md,MultiplyOperation:la,NearestFilter:ke,NearestMipMapLinearFilter:Yy,NearestMipMapNearestFilter:Xy,NearestMipmapLinearFilter:Tr,NearestMipmapNearestFilter:jd,NeutralToneMapping:qg,NeverCompare:t_,NeverDepth:ol,NeverStencilFunc:cv,NoBlending:Ti,NoColorSpace:bi,NoToneMapping:Ci,NormalAnimationBlendMode:ou,NormalBlending:Os,NotEqualCompare:s_,NotEqualDepth:dl,NotEqualStencilFunc:fv,NumberKeyframeTrack:ia,Object3D:ie,ObjectLoader:sE,ObjectSpaceNormalMap:jg,OctahedronGeometry:_a,OneFactor:Cg,OneMinusConstantAlphaFactor:Bg,OneMinusConstantColorFactor:Fg,OneMinusDstAlphaFactor:Lg,OneMinusDstColorFactor:Ng,OneMinusSrcAlphaFactor:rl,OneMinusSrcColorFactor:Pg,OrthographicCamera:hu,P3Primaries:Zo,PCFShadowMap:Kd,PCFSoftShadowMap:Jd,PMREMGenerator:yd,Path:jo,PerspectiveCamera:Be,Plane:Zi,PlaneGeometry:Js,PlaneHelper:YE,PointLight:rx,PointLightHelper:FE,Points:I_,PointsMaterial:Sf,PolarGridHelper:HE,PolyhedronGeometry:as,PositionalAudio:dE,PropertyBinding:ne,PropertyMixer:fx,QuadraticBezierCurve:Tf,QuadraticBezierCurve3:Cf,Quaternion:an,QuaternionKeyframeTrack:ya,QuaternionLinearInterpolant:ex,RED_GREEN_RGTC2_Format:Fl,RED_RGTC1_Format:lf,REVISION:Ql,RGBADepthPacking:hf,RGBAFormat:rn,RGBAIntegerFormat:ru,RGBA_ASTC_10x10_Format:Il,RGBA_ASTC_10x5_Format:Cl,RGBA_ASTC_10x6_Format:Rl,RGBA_ASTC_10x8_Format:Pl,RGBA_ASTC_12x10_Format:Ll,RGBA_ASTC_12x12_Format:Dl,RGBA_ASTC_4x4_Format:vl,RGBA_ASTC_5x4_Format:Ml,RGBA_ASTC_5x5_Format:bl,RGBA_ASTC_6x5_Format:Sl,RGBA_ASTC_6x6_Format:wl,RGBA_ASTC_8x5_Format:Al,RGBA_ASTC_8x6_Format:El,RGBA_ASTC_8x8_Format:Tl,RGBA_BPTC_Format:Co,RGBA_ETC2_EAC_Format:yl,RGBA_PVRTC_2BPPV1_Format:gl,RGBA_PVRTC_4BPPV1_Format:ml,RGBA_S3TC_DXT1_Format:Ao,RGBA_S3TC_DXT3_Format:Eo,RGBA_S3TC_DXT5_Format:To,RGBDepthPacking:jy,RGBFormat:rf,RGBIntegerFormat:Zy,RGB_BPTC_SIGNED_Format:Nl,RGB_BPTC_UNSIGNED_Format:Ul,RGB_ETC1_Format:_l,RGB_ETC2_Format:xl,RGB_PVRTC_2BPPV1_Format:pl,RGB_PVRTC_4BPPV1_Format:fl,RGB_S3TC_DXT1_Format:wo,RGDepthPacking:tv,RGFormat:cf,RGIntegerFormat:su,RawShaderMaterial:V_,Ray:Kr,Raycaster:PE,Rec709Primaries:$o,RectAreaLight:ax,RedFormat:iu,RedIntegerFormat:ua,ReinhardToneMapping:Vg,RenderTarget:h_,RepeatWrapping:Br,ReplaceStencilOp:nv,ReverseSubtractEquation:wg,RingGeometry:Eu,SIGNED_RED_GREEN_RGTC2_Format:zl,SIGNED_RED_RGTC1_Format:Ol,SRGBColorSpace:mn,SRGBTransfer:me,Scene:vf,ShaderChunk:Kt,ShaderLib:qn,ShaderMaterial:kn,ShadowMaterial:G_,Shape:Bs,ShapeGeometry:Tu,ShapePath:ZE,ShapeUtils:ai,ShortType:ef,Skeleton:gu,SkeletonHelper:OE,SkinnedMesh:C_,Source:Ls,Sphere:Ge,SphereGeometry:js,Spherical:IE,SphericalHarmonics3:cx,SplineCurve:Rf,SpotLight:sx,SpotLightHelper:UE,Sprite:E_,SpriteMaterial:Mf,SrcAlphaFactor:sl,SrcAlphaSaturateFactor:Ug,SrcColorFactor:Rg,StaticCopyUsage:yv,StaticDrawUsage:Ko,StaticReadUsage:gv,StereoCamera:cE,StreamCopyUsage:Mv,StreamDrawUsage:mv,StreamReadUsage:xv,StringKeyframeTrack:er,SubtractEquation:Sg,SubtractiveBlending:pd,TOUCH:Gy,TangentSpaceNormalMap:os,TetrahedronGeometry:Cu,Texture:Ae,TextureLoader:ix,TextureUtils:qw,TorusGeometry:Ru,TorusKnotGeometry:Pu,Triangle:yn,TriangleFanDrawMode:Qy,TriangleStripDrawMode:Jy,TrianglesDrawMode:Ky,TubeGeometry:Iu,UVMapping:jl,Uint16BufferAttribute:mf,Uint32BufferAttribute:gf,Uint8BufferAttribute:oM,Uint8ClampedBufferAttribute:aM,Uniform:Hf,UniformsGroup:TE,UniformsLib:pt,UniformsUtils:p_,UnsignedByteType:ci,UnsignedInt248Type:Vs,UnsignedInt5999Type:nf,UnsignedIntType:Li,UnsignedShort4444Type:eu,UnsignedShort5551Type:nu,UnsignedShortType:kr,VSMShadowMap:ti,Vector2:et,Vector3:I,Vector4:Jt,VectorKeyframeTrack:sa,VideoTexture:fA,WebGL3DRenderTarget:$v,WebGLArrayRenderTarget:qv,WebGLCoordinateSystem:ri,WebGLCubeRenderTarget:g_,WebGLMultipleRenderTargets:JE,WebGLRenderTarget:Kn,WebGLRenderer:w_,WebGLUtils:b_,WebGPUCoordinateSystem:Jo,WireframeGeometry:H_,WrapAroundEnding:Yo,ZeroCurvatureEnding:Ps,ZeroFactor:Tg,ZeroSlopeEnding:Is,ZeroStencilOp:ev,createCanvasElement:l_},Symbol.toStringTag,{value:"Module"})),jE=1.5;function tT(i){const t=new w_({antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio,jE)),t.setSize(window.innerWidth,window.innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=Jd,t.toneMapping=Qd,t.toneMappingExposure=1.05,t.outputColorSpace=mn,i.appendChild(t.domElement);let e=null;return t.setResizeCallback=n=>{e=n},window.addEventListener("resize",()=>{t.setSize(window.innerWidth,window.innerHeight),e?.(window.innerWidth/window.innerHeight)}),t}function eT(){const i=new Be(50,window.innerWidth/window.innerHeight,.1,500);return i.position.set(0,20,36),i}function bc(i,t){const e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function ue(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),c=bc(e,n),l=bc(e+1,n),u=bc(e,n+1),h=bc(e+1,n+1);return c*(1-o)*(1-a)+l*o*(1-a)+u*(1-o)*a+h*o*a}function va(i){let t=i>>>0;return function(){t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function nt(i,t,e){return i<t?t:i>e?e:i}function Ft(i,t,e){return i+(t-i)*e}function ji(i,t,e,n){return Ft(i,t,1-Math.exp(-e*n))}function ve(i){const t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]}function Hn(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function Ht(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function ge(i,t){return[i[0]+t[0],i[1]+t[1],i[2]+t[2]]}function Ni(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function ks(i,t,e,n){return{x:i,y:t,z:e,p:n}}function gx(i,t){const[e,n,s]=t;return[i.x[0]*e+i.y[0]*n+i.z[0]*s+i.p[0],i.x[1]*e+i.y[1]*n+i.z[1]*s+i.p[1],i.x[2]*e+i.y[2]*n+i.z[2]*s+i.p[2]]}function xn(i,t,e){const n=Ni(t,i),s=Math.hypot(n[0],n[1],n[2])||1e-4,r=[n[0]/s,n[1]/s,n[2]/s],o=Math.abs(r[1])<.97?[0,1,0]:[1,0,0],a=ve(Hn(o,r)),c=Hn(a,r);return ks(Ht(a,e),Ht(r,s),Ht(c,e),i)}class Ue{constructor(){this.positions=[],this.colors=[],this.indices=[]}addVertex(t,e,n,s){return this.positions.push(t,e,n),this.colors.push(s[0],s[1],s[2]),this.positions.length/3-1}addTri(t,e,n){this.indices.push(t,e,n)}addQuad(t,e,n,s){this.addTri(t,e,n),this.addTri(t,n,s)}bake(t,e,n){const s=this.positions.length/3;for(let r=0;r<t.p.length;r+=3){const o=gx(e,[t.p[r],t.p[r+1],t.p[r+2]]),a=n(o[0],o[1],o[2]);this.positions.push(o[0],o[1],o[2]),this.colors.push(a[0],a[1],a[2])}for(let r=0;r<t.i.length;r++)this.indices.push(s+t.i[r])}toBufferGeometry(){const t=new Xt;return t.setAttribute("position",new xt(this.positions,3)),t.setAttribute("color",new xt(this.colors,3)),t.setIndex(this.indices),t.computeVertexNormals(),t}}function Vr(i,t){const e=[],n=[],s=[];for(let r=0;r<=t;r++){const o=Math.PI*r/t,a=Math.sin(o),c=Math.cos(o);for(let l=0;l<=i;l++){const u=2*Math.PI*l/i,h=a*Math.cos(u),d=c,f=a*Math.sin(u);e.push(h,d,f),n.push(h,d,f)}}for(let r=0;r<t;r++)for(let o=0;o<i;o++){const a=r*(i+1)+o,c=a+i+1;s.push(a,a+1,c,a+1,c+1,c)}return{p:e,n,i:s}}function Du(i){const t=[],e=[],n=[];for(let r=0;r<=i;r++){const o=2*Math.PI*r/i,a=Math.cos(o),c=Math.sin(o);t.push(a,0,c),e.push(a,0,c),t.push(a,1,c),e.push(a,0,c)}for(let r=0;r<i;r++){const o=r*2;n.push(o,o+1,o+2,o+1,o+3,o+2)}const s=t.length/3;t.push(0,0,0),e.push(0,-1,0),t.push(0,1,0),e.push(0,1,0);for(let r=0;r<i;r++){const o=2*Math.PI*r/i,a=2*Math.PI*(r+1)/i,c=t.length/3;t.push(Math.cos(o),0,Math.sin(o)),e.push(0,-1,0),t.push(Math.cos(a),0,Math.sin(a)),e.push(0,-1,0),n.push(s,c+1,c);const l=t.length/3;t.push(Math.cos(o),1,Math.sin(o)),e.push(0,1,0),t.push(Math.cos(a),1,Math.sin(a)),e.push(0,1,0),n.push(s+1,l,l+1)}return{p:t,n:e,i:n}}const nT=""+new URL("bark_albedo-DReMtPgm.png",import.meta.url).href,iT=""+new URL("tunnel-dirt_albedo-6XN1nHeR.png",import.meta.url).href,sT=""+new URL("lawn-soil_albedo-mTvxXfeR.png",import.meta.url).href,rT=""+new URL("stone_albedo-CltKTJgX.png",import.meta.url).href,oT=""+new URL("mushroom-cap_albedo-CRHQ2riL.png",import.meta.url).href,Gc=new Float32Array(256);for(let i=0;i<256;i++){const t=i/255;Gc[i]=t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function aT(i,t){const e=document.createElement("canvas");e.width=i.width,e.height=i.height;const n=e.getContext("2d",{willReadFrequently:!0});n.drawImage(i,0,0);const s=n.getImageData(0,0,e.width,e.height).data;let r=0,o=0,a=0;const c=e.width*e.height;for(let l=0;l<s.length;l+=4)r+=Gc[s[l]],o+=Gc[s[l+1]],a+=Gc[s[l+2]];t.set(Math.max(r/c,.001),Math.max(o/c,.001),Math.max(a/c,.001))}const cT=new ix;function Ma(i,t){const e=new I(.5,.5,.5),n=cT.load(i,s=>{try{aT(s.image,e)}catch(r){console.warn("albedo mean unavailable",r)}});return n.colorSpace=mn,n.wrapS=n.wrapT=Br,n.repeat.set(1/t,1/t),n.anisotropy=4,n.userData.meanLinear=e,n}const lT=5,uT=16,hT=45,dT=12,fT=2.5;let pT=null,mT=null,gT=null,_T=null,xT=null;function Vf(){return pT||(pT=Ma(iT,lT))}function yT(){return mT||(mT=Ma(nT,uT))}function vT(){return gT||(gT=Ma(sT,hT))}function MT(){return _T||(_T=Ma(rT,dT))}function _x(){return xT||(xT=Ma(oT,fT))}const bT=`
uniform vec3 uTexMid;
uniform vec2 uTexRepeat;
uniform float uTexStrength;
varying vec3 vTexWorld;
varying vec3 vTexNormal;
vec3 gTriTex = vec3(1.0);   // filled by the <map_fragment> injection below,
                            // reused by the emissive one (which runs later)
`,ST=4,wT=`
{
  vec3 tn = normalize(vTexNormal);
  vec3 bw = pow(abs(tn), vec3(${ST.toFixed(1)}));
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
`;function xx(i,t){Object.assign(i.uniforms,t),i.vertexShader=i.vertexShader.replace("#include <common>",`varying vec3 vTexWorld;
varying vec3 vTexNormal;
#include <common>`).replace("#include <project_vertex>",`#include <project_vertex>
      vec4 texLocal = vec4(transformed, 1.0);
      vec3 texNrm = objectNormal;
      #ifdef USE_INSTANCING
        texLocal = instanceMatrix * texLocal;
        texNrm = mat3(instanceMatrix) * texNrm;
      #endif
      vTexWorld = (modelMatrix * texLocal).xyz;
      vTexNormal = mat3(modelMatrix) * texNrm;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",bT+`
#include <common>`).replace("#include <map_fragment>",wT)}function yx(i,t){return{uTexMid:{value:i.userData.meanLinear},uTexRepeat:{value:i.repeat},uTexStrength:{value:t}}}function Qr({map:i,strength:t=1,...e}){const n=new Ve({vertexColors:!0,roughness:.95,metalness:0,map:i,...e}),s=yx(i,t);return n.userData.texUniforms=s,n.onBeforeCompile=r=>xx(r,s),n.userData.shaderTag="triplanar-albedo",n.customProgramCacheKey=()=>"triplanar-albedo",n}function vx({map:i,strength:t=1,emissive:e=1.6,...n}){const s=new Ve({vertexColors:!0,roughness:.6,metalness:0,map:i,...n}),r=yx(i,t);return s.userData.texUniforms=r,s.onBeforeCompile=o=>{xx(o,r),o.fragmentShader=o.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
       totalEmissiveRadiance += vColor * gTriTex * ${e.toFixed(2)};`)},s.userData.shaderTag="triplanar-emissive",s.customProgramCacheKey=()=>"triplanar-emissive",s}const Vc=2.2,Ce=-166,We=0,Ur=7.2*Vc,Wf=-132,Vl=32,Cd=[-9,-140],fe=[13,0,-124],Rd=15,AT=2.6;function ln(i){const t=(i-Wf)/Vl;return t>-1&&t<1?Ur+(Vl-Ur)*Math.pow(Math.sqrt(1-t*t),.72):Ur}function de(i,t){let e=.22*ue(i*.11+11,t*.11+5);const n=Math.hypot(i-fe[0],t-fe[2]);if(n<Rd){const s=1-n/Rd;e+=AT*s*s*(3-2*s)}return e}const Pd=[],Ir=[],Mx=[];function Xf(i,t){for(let e=0;e<Pd.length;e++){const n=Pd[e],r=Math.atan2(Math.sin(i-n.th),Math.cos(i-n.th))/n.rTh,o=(t-n.z)/n.rZ;if(r*r+o*o<1)return!0}return!1}function ET(i,t){return Xf(t,i)?1/0:ln(i)}function Yf(){const i={};for(const t of Ir)i[t.name]=t;return i}function Nu(i,t){for(let r=0;r<Ir.length;r++){const o=Ir[r],a=i-o.origin[0],c=t-o.origin[2],l=a*o.dir[0]+c*o.dir[2];if(l<=-.5||l>=o.uMax+1)continue;const u=a*o.side[0]+c*o.side[2],h=Math.max(o.profR(nt(l,0,o.uMax))*.82-1.2,2.2);if(Math.abs(u)>=h+3)continue;const d=nt(l,-.5,o.uMax-1.2),f=nt(u,-h,h);return[o.origin[0]+o.dir[0]*d+o.side[0]*f,o.origin[2]+o.dir[2]*d+o.side[2]*f]}const e=Math.max(ln(t)*.82-1.6,3);let n=e,s=e;for(let r=0;r<Ir.length;r++){const o=Ir[r],a=nt(1-Math.abs(t-o.origin[2])/o.doorFalloff,0,1);if(a<=0)continue;const c=Ft(e,Math.abs(o.origin[0])+1.5,a);o.dir[0]>0?c>n&&(n=c):c>s&&(s=c)}return[nt(i,-s,n),Math.max(t,Ce+5)]}const qf=new q("#6d5130"),ba=new q("#5a4226"),qs=new q("#332412"),TT=new q("#4c5f2f"),CT=new q(TT).lerp(qs,.62).multiplyScalar(.58);function Ui(i,t,e){return new q(i).lerp(t,nt(e,0,1))}function Wc(i,t,e,n){return ue(Math.cos(i)*e+t*n+37,Math.sin(i)*e+t*n*.7+91)}function $f(i){return .86*Math.pow(Ur/i,.35)}function Lo(i){const t=ln(i);return 1.2+t*$f(t)*.62}function Ns(i,t,e){const n=ln(t),s=$f(n),r=.84+.2*Wc(i,t,1.6,.1)+.1*Wc(i,t,4.1,.29)+.05*Wc(i,t,9.3,.62),o=n*r*(1-(e||0)),a=Math.cos(i)*o,c=Math.sin(i)*o*s+Lo(t),l=de(a,t);return[a,Math.max(c,l),t,r]}function RT(i,t){const e=Ui(qs,ba,i*.8+.12);return Ui(e,qf,t)}function PT(i){const t=Ui(qs,ba,i*.8+.12);return Ui(t,qf,.28+i*.18)}function IT(i){const t=Ui(qs,ba,i*.75+.15);return Ui(t,qf,.55)}function LT(i){const t=Ui(qs,ba,i*.6+.08);return Ui(t,CT,.3+i*.3)}function Uh(i,t,e,n,s,r,o,a,c,l,u,h){const d=Ns(t,e,0),f=[d[0],de(d[0],d[2]),d[2]],p=ve([Math.cos(t),0,1e-4]),_=ve(Hn([0,1,0],p)),g=s+o,m=s+o*2;function v(N){const W=(N-g)/o;return W>-1&&W<1?n+(r-n)*Math.pow(Math.sqrt(1-W*W),.72):n}function x(N){return .86*Math.pow(n/N,.35)}function b(N){const W=v(N);return 1.1+W*x(W)*.6}function S(N,W,Q,rt){return ue(Math.cos(N)*Q+W*rt+c+37,Math.sin(N)*Q+W*rt*.7+c+91)}function w(N,W,Q){const rt=v(W),bt=x(rt),Rt=.84+.2*S(N,W,1.6,.1)+.1*S(N,W,4.1,.29)+.05*S(N,W,9.3,.62),$=rt*Rt*(1-(Q||0)),tt=Math.cos(N)*$,ut=Math.sin(N)*$*bt+b(W),ot=f[0]+p[0]*W+_[0]*tt,At=f[2]+p[2]*W+_[2]*tt,Tt=f[1]+ut,Lt=de(ot,At);return[ot,Math.max(Tt,Lt),At,Rt]}{const N=ln(e),W=$f(N),Q=Math.asin(nt((f[1]+b(0)-Lo(e))/(N*W),-.92,.92)),rt=t+(Math.cos(t)>=0?Q:-Q);Pd.push({th:rt,z:e,rTh:Math.max(.16,n*1.8/ln(e)),rZ:n*1.7})}if(h){const N=f[0]+p[0]*1.2,W=f[2]+p[2]*1.2;Mx.push({p:[N,de(N,W)+2.1,W],c:h,name:i})}const A=new Ue,E=1.5,C=[];for(let N=0;N<=m+1e-4;N+=E){const W=[];for(let Q=0;Q<a;Q++){const rt=2*Math.PI*Q/a,bt=w(rt,N,0),Rt=nt((bt[3]-.84)/.34+.45,0,1);W.push(A.addVertex(bt[0],bt[1],bt[2],u(Rt,bt[0],bt[1],bt[2]).multiplyScalar(l).toArray()))}C.push(W)}for(let N=0;N<C.length-1;N++)for(let W=0;W<a;W++){const Q=(W+1)%a;A.addQuad(C[N][W],C[N][Q],C[N+1][Q],C[N+1][W])}const y=f[0]+p[0]*m,M=f[2]+p[2]*m,P=f[1]+b(m)*.6,U=A.addVertex(y,P,M,u(.2,y,P,M).multiplyScalar(l).toArray()),O=C[C.length-1];for(let N=0;N<a;N++)A.addTri(U,O[N],O[(N+1)%a]);const G={name:i,origin:f,dir:p,side:_,uMax:m,uEnd:g,profR:v,pointAt:w,doorFalloff:n*2.2};Ir.push(G);const z=f[0]+p[0]*g,F=f[2]+p[2]*g;return G.center=[z,de(z,F),F],{geometry:A.toBufferGeometry(),branch:G}}function DT(){const i=new Re;i.name="underground";const t=Uh("granary",Math.PI,-70,3.3*Vc,9,13*1.5,10,30,4001,1,u=>PT(u),[.55,.4,.2]),e=Uh("brood",0,-120,4.2*Vc,8,17*1.5,13,34,5117,1,u=>IT(u),[.68,.5,.25]),n=Uh("midden",0,-40,2.9*Vc,7,10*1.5,8,26,6229,.46,u=>LT(u),[.3,.44,.28]);i.add(new Wt(t.geometry,Sc())),i.add(new Wt(e.geometry,Sc())),i.add(new Wt(n.geometry,Sc()));const s=new Ue,r=44,o=1.7,a=[];for(let u=Ce;u<=3.0001;u+=o){const h=[];for(let d=0;d<r;d++){const f=2*Math.PI*d/r,p=Ns(f,u,0),_=u>-14?1+Math.pow((u+14)/17,2)*.9:1;h.push([p[0]*_,Math.max(p[1]*(_*.5+.5),de(p[0]*_,u)),u,p[3]])}a.push(h)}for(let u=0;u<a.length;u++){const h=[];for(let d=0;d<r;d++){const f=a[u][d],p=nt(1-Math.abs(f[2]-Wf)/(Vl*1.6),0,1),_=nt((f[3]-.84)/.34+.45,0,1),g=ue(f[0]*.13+3,f[2]*.13+8),m=RT(_,p*.45+g*.2);h.push(s.addVertex(f[0],f[1],f[2],m.toArray()))}a[u].idx=h}for(let u=0;u<a.length-1;u++)for(let h=0;h<r;h++){const d=(h+1)%r;Xf(2*Math.PI*h/r,a[u][h][2])||s.addQuad(a[u].idx[h],a[u].idx[d],a[u+1].idx[d],a[u+1].idx[h])}{let u=a[0].idx;const h=4;for(let f=1;f<=h;f++){const p=Math.cos(f/h*Math.PI*.5),_=Ce-Math.sin(f/h*Math.PI*.5)*9,g=[];for(let m=0;m<r;m++){const v=2*Math.PI*m/r,x=a[0][m],b=.86+.28*Wc(v,_*1.7,2.3,.2),S=x[0]*p*b,w=Lo(Ce)+(x[1]-Lo(Ce))*p*b,A=Ui(qs,ba,.15+b*.4).multiplyScalar(.35+.3*b);g.push(s.addVertex(S,Math.max(w,de(S,_)),_,A.toArray()))}for(let m=0;m<r;m++){const v=(m+1)%r;s.addQuad(u[m],u[v],g[v],g[m])}u=g}const d=s.addVertex(0,Lo(Ce)*.6,Ce-10,qs.clone().multiplyScalar(.3).toArray());for(let f=0;f<r;f++)s.addTri(d,u[f],u[(f+1)%r])}const c=new Wt(s.toBufferGeometry(),Sc());c.name="tunnel",i.add(c);const l=Mx.slice();return l.push({p:[0,5,3],c:[1.15,1.2,1.35],name:"mouth"}),{group:i,doorLights:l,rooms:{granary:t.branch,brood:e.branch,midden:n.branch}}}let Oh=null;function Sc(){return Oh||(Oh=Qr({map:Vf(),strength:.62,side:_e})),Oh}const NT=3.3,UT=NT*2,OT=.38,Wl=18,$m=4,Ai=9.5,Lr=13,bx=1.9,wr=.22,Xc=1/(1-wr),Sx=i=>i*Xc/OT,Zm=Sx(Wl),FT=14;function zT(i){const t=nt(i,0,1);if(t<wr)return Xc*t*t/(2*wr);if(t>1-wr){const e=1-t;return 1-Xc*e*e/(2*wr)}return Xc*(t-wr*.5)}const BT=.9,wx=.14;let jr=null;function kT(i){jr=i}function HT(){return jr}function GT(i,t,e,n){const r=Math.atan2(-1*e[0],1*e[1]),o=14,a=Sx(Wl),c=a/bx,l={x:i.x-c*Math.cos(r),z:i.z-c*Math.sin(r)},u=a+o*.9,h=Ax(l,c,r,1,u);return{seed:n,mouth:{x:i.x,z:i.z},topY:t.y,gx:t.gx,gz:t.gz,floorY:t.y-Wl,arc:{ax:l.x,az:l.z,R:c,a0:r,s:1,len:u},hw:UT,descend:a,chamber:{x:h.x,z:h.z,r:o},gallery:null}}function Ax(i,t,e,n,s){const r=e+n*s/t;return{x:i.x+t*Math.cos(r),z:i.z+t*Math.sin(r)}}function Dr(i,t){return Ax({x:i.arc.ax,z:i.arc.az},i.arc.R,i.arc.a0,i.arc.s,t)}const VT=i=>{let t=i%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t},Km=1e-6;function Ex(i,t,e,n=0){const{ax:s,az:r,R:o,a0:a,s:c,len:l}=i.arc,u=t-s,h=e-r,d=o*VT(c*(Math.atan2(h,u)-a));return d<-n-Km||d>l+n+Km?null:{u:nt(d,0,l),lat:Math.hypot(u,h)-o}}function Xl(i,t,e){const n=Ex(i,t,e);return n&&Math.abs(n.lat)<=i.hw?n:null}function WT(i,t,e){const n=Math.hypot(t-i.chamber.x,e-i.chamber.z)/i.chamber.r;return n>=1?null:i.floorY+Ai+(Lr-Ai)*Math.pow(Math.sqrt(1-n*n),.7)}function Do(i,t,e,n,s){const r=Math.pow(nt(1-n/FT,0,1),2),o=(i.gx*(t-i.mouth.x)+i.gz*(e-i.mouth.z))*r,a=Ft(i.topY,i.floorY,zT(n/i.descend))+o,c=s/i.hw;return a+BT*c*c+wx*(ue(t*.1+i.seed,e*.1+i.seed)-.5)*2}function Id(i,t,e){return i.floorY+wx*(ue(t*.1+i.seed,e*.1+i.seed)-.5)*2}function Tx(i,t,e){return Math.hypot(t-i.chamber.x,e-i.chamber.z)<=i.chamber.r}function Cx(i,t,e){const n=i.gallery;if(!n)return null;const s=(t-n.x)*n.hx+(e-n.z)*n.hz;if(s<0||s>n.len)return null;const r=-(t-n.x)*n.hz+(e-n.z)*n.hx;return Math.abs(r)>n.hw?null:{s,lat:r}}function ts(i,t){const e=jr;if(!e)return null;let n=null;const s=Xl(e,i,t);if(s&&(n=Do(e,i,t,s.u,s.lat)),Tx(e,i,t)){const r=Id(e,i,t);n=n===null?r:Math.min(n,r)}if(Cx(e,i,t)){const r=Id(e,i,t);n=n===null?r:Math.min(n,r)}return n}function XT(i,t){const e=jr;if(!e||ts(i,t)===null)return 0;if(Tx(e,i,t)){const s=Math.hypot(i-e.chamber.x,t-e.chamber.z)/e.chamber.r;return Ai+(Lr-Ai)*Math.pow(Math.sqrt(Math.max(0,1-s*s)),.7)}return Cx(e,i,t)?e.galleryRoof||Ai:(Xl(e,i,t),1/0)}function YT(i){return jr?{contains:(t,e)=>ts(t,e)!==null,floorY:(t,e)=>{const n=ts(t,e);return n===null?i(t,e):n},headroom:(t,e)=>XT(t,e)}:null}function qT(i=4){const t=jr;if(!t)return null;const e=[],n=Math.max(2,Math.ceil(t.arc.len/i));for(let s=0;s<=n;s++){const r=s/n*t.arc.len,o=Dr(t,r),a=ts(o.x,o.z);e.push({x:o.x,y:a===null?Do(t,o.x,o.z,r,0):a,z:o.z})}return e}const Ne={x0:-208,x1:400,z0:0,z1:460},Ei={x0:-300,x1:470,z0:0,z1:540},es=-4.5,Bn=i=>{const t=nt(i,0,1);return t*t*(3-2*t)},Nn={edgeX:-196,bankTop:2,bankRun:15,depth:5,bedRun:30,farBankAt:68,farBankRun:46,farBankTop:24,blendRun:36};function nr(i){return Nn.edgeX+2*Math.sin(i*.021)+1*Math.sin(i*.047+1.3)}const ye={x:332,z:112,r:31,y:-7.2,depth:3.6,bedRun:24,bankTop:-5,bankRun:14,blendRun:20};function Uu(i,t){return Math.hypot(i-ye.x,t-ye.z)-ye.r}function $T(i){return i<=0?ye.y+(ye.bankTop-ye.y)*Bn(-i/ye.bankRun):ye.y-ye.depth*Bn(i/ye.bedRun)}function di(i,t){return Math.min(i-nr(t),Uu(i,t))}function ZT(i,t){return t<We?null:i-nr(t)<0?Nn:Uu(i,t)<0?ye:null}function KT(i,t){const e=ZT(i,t);return e?e===ye?ye.y:es:null}function JT(i,t){return Uu(i,t)<i-nr(t)?ye.y:es}function QT(i){if(i<=0)return es+(Nn.bankTop-es)*Bn(-i/Nn.bankRun);let t=es-Nn.depth*Bn(i/Nn.bedRun);return i>Nn.farBankAt&&(t+=Nn.farBankTop*Bn((i-Nn.farBankAt)/Nn.farBankRun)),t}const Jm=[{x:0,z:20,r:64,amp:-3.5},{x:62,z:78,r:62,amp:16},{x:96,z:44,r:40,amp:9},{x:88,z:168,r:78,amp:-14},{x:88,z:168,r:30,amp:4},{x:-85,z:95,r:46,amp:6},{x:-85,z:95,r:26,amp:1.5},{x:-150,z:150,r:66,amp:13},{x:-132,z:44,r:50,amp:8},{x:24,z:128,r:44,amp:-8},{x:236,z:300,r:118,amp:26},{x:300,z:214,r:88,amp:18},{x:40,z:330,r:120,amp:-5},{x:96,z:386,r:70,amp:4},{x:340,z:118,r:76,amp:-16},{x:340,z:118,r:26,amp:5},{x:384,z:328,r:92,amp:21},{x:-40,z:520,r:190,amp:38},{x:190,z:512,r:175,amp:34},{x:468,z:190,r:165,amp:34},{x:440,z:420,r:130,amp:26}];function Qm(i,t){let e=(ue(i*.012,t*.012)-.5)*4.2+(ue(i*.052,t*.052)-.5)*1.3;for(let n=0;n<Jm.length;n++){const s=Jm[n],r=Math.hypot(i-s.x,t-s.z);r>=s.r||(e+=s.amp*Bn(1-r/s.r))}return e}function Zt(i,t){if(t<We)return de(i,t);const e=ts(i,t);return e!==null?e:nn(i,t)}function nn(i,t){if(t<We)return de(i,t);const e=i-nr(t),n=1-Bn(e/Nn.blendRun);let s=n>0?Ft(Qm(i,t),QT(-e),n):Qm(i,t);const r=Uu(i,t);if(r<ye.blendRun){const a=1-Bn(r/ye.blendRun);a>0&&(s=Ft(s,$T(-r),a))}const o=(1-Bn(t/26))*nt(1-Math.abs(i)/40,0,1);return o>0?Ft(s,de(i,0),o):s}function Sa(i,t){return ve([Zt(i-1.4,t)-Zt(i+1.4,t),2*1.4,Zt(i,t-1.4)-Zt(i,t+1.4)])}function ir(i,t){const n=(Zt(i+1.5,t)-Zt(i-1.5,t))/3,s=(Zt(i,t+1.5)-Zt(i,t-1.5))/(2*1.5);return Math.hypot(n,s)}function Fi(i,t){const e=KT(i,t);return e===null?0:Math.max(0,e-Zt(i,t))}const Rx=.62;function Zf(i,t){const e=ue(i*.006,t*.006),n=nt(ue(i*.018,t*.018)*2.3-.55+(e-.5)*.6,0,1)*(.55+.45*ue(i*.07,t*.07)),s=Fi(i,t),r=di(i,t),o=ir(i,t);let a="soil";return s>0?a="water":r<14?a="sand":o>Rx?a="rock":n>.5&&(a="moss"),{kind:a,moss:n,slope:o,depth:s,toWater:r}}function jT(i,t){const e=Zf(i,t);return{y:Zt(i,t),normal:Sa(i,t),slope:e.slope,soil:e.kind,moss:e.moss,waterDepth:e.depth,distToWater:e.toWater,diggable:e.depth===0&&e.slope<=Rx&&e.toWater>10}}function Ld(i,t){const e=nr(t)+1;return[nt(Math.max(i,e),Ne.x0,Ne.x1),nt(t,Ne.z0,Ne.z1)]}const t2=new q("#86673B"),e2=new q("#5A4529"),n2=new q("#5F8034"),i2=new q("#9DBE58"),s2=new q("#A79463"),r2=new q("#4A5540"),o2=new q("#7C7566");function Un(i,t,e){return new q(i).lerp(t,nt(e,0,1))}const wc=6;function a2(){const{x0:i,x1:t,z0:e,z1:n}=Ei,s=Math.floor((t-i)/wc)+1,r=Math.floor((n-e)/wc)+1,o=new Ue;for(let c=0;c<s;c++)for(let l=0;l<r;l++){const u=i+c*wc,h=e+l*wc,d=Zt(u,h),f=ue(u*.006,h*.006),p=nt(ue(u*.018,h*.018)*2.3-.55+(f-.5)*.6,0,1)*(.55+.45*ue(u*.07,h*.07));let _=Un(Un(t2,e2,ue(u*.09,h*.09)),Un(n2,i2,ue(u*.05,h*.05)),p);const g=di(u,h);if(g<30){_=Un(_,s2,Bn((30-g)/26));const v=JT(u,h);d<v+.6&&(_=Un(_,r2,Bn((v+.6-d)/3.5)))}const m=ir(u,h);m>.45&&(_=Un(_,o2,Bn((m-.45)/.5)*.75)),o.addVertex(u,d,h,_.toArray())}for(let c=0;c<s-1;c++)for(let l=0;l<r-1;l++){const u=c*r+l,h=(c+1)*r+l,d=(c+1)*r+l+1,f=c*r+l+1;o.addQuad(u,h,d,f)}const a=new Wt(o.toBufferGeometry(),Qr({map:vT(),strength:.8,side:_e}));return a.name="lawn",a.receiveShadow=!0,a}const c2=new q("#9CC6E4"),l2=`
uniform float uWaveTime;
vec2 waterWaveGrad(vec3 p, out float h) {
  float a = p.x * 0.085 + uWaveTime * 1.05;
  float b = p.z * 0.115 - uWaveTime * 0.77 + p.x * 0.04;
  float c = p.z * 0.031 + uWaveTime * 0.31;
  h = sin(a) * 0.24 + sin(b) * 0.17 + sin(c) * 0.30;
  return vec2(cos(a) * 0.24 * 0.085 + cos(b) * 0.17 * 0.04,
              cos(b) * 0.17 * 0.115 + cos(c) * 0.30 * 0.031);
}
`;function u2(){const{x0:i,z0:t,z1:e}=Ei,n=56,s=14,r=new Ue,o=new q("#3E6B7A"),a=new q("#22414F");for(let m=0;m<=n;m++){const v=t+(e-t)*(m/n),x=nr(v)+1.2;for(let b=0;b<=s;b++){const S=Ft(i,x,b/s),w=nt((es-Zt(S,v))/6,0,1);r.addVertex(S,es,v,Un(o,a,w).toArray())}}for(let m=0;m<n;m++)for(let v=0;v<s;v++){const x=m*(s+1)+v;r.addQuad(x+s+1,x+s+2,x+1,x)}const c=new Ve({vertexColors:!0,roughness:.16,metalness:0,transparent:!0,opacity:.86,side:_e}),l={uWaveTime:{value:0},uSkyCol:{value:c2}};c.userData.waterUniforms=l,c.userData.shaderTag="water-ripple",c.onBeforeCompile=m=>{Object.assign(m.uniforms,l),m.vertexShader=m.vertexShader.replace("#include <common>",l2+`
#include <common>`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        float wh; vec2 wg = waterWaveGrad(position, wh);
        objectNormal = normalize(vec3(-wg.x, 1.0, -wg.y));`).replace("#include <begin_vertex>",`#include <begin_vertex>
        transformed.y += wh;`),m.fragmentShader=m.fragmentShader.replace("#include <common>",`uniform vec3 uSkyCol;
#include <common>`).replace("#include <tonemapping_fragment>",`
        {
          float fres = pow(1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0), 3.0);
          gl_FragColor.rgb = mix(gl_FragColor.rgb, uSkyCol, 0.13 + 0.72 * fres);
        }
        #include <tonemapping_fragment>`)},c.customProgramCacheKey=()=>"water-ripple";const u=new Ue,h=6,d=26,f=.9,p=u.addVertex(ye.x,ye.y,ye.z,a.toArray()),_=[];for(let m=1;m<=h;m++){const v=(ye.r+f)*(m/h),x=[];for(let b=0;b<d;b++){const S=2*Math.PI*b/d,w=ye.x+Math.cos(S)*v,A=ye.z+Math.sin(S)*v,E=nt((ye.y-Zt(w,A))/4,0,1);x.push(u.addVertex(w,ye.y,A,Un(o,a,E).toArray()))}_.push(x)}for(let m=0;m<d;m++){const v=(m+1)%d;u.addTri(p,_[0][v],_[0][m]);for(let x=0;x<h-1;x++)u.addQuad(_[x][m],_[x][v],_[x+1][v],_[x+1][m])}const g=new Re;g.name="water";for(const m of[r.toBufferGeometry(),u.toBufferGeometry()]){const v=new Wt(m,c);v.receiveShadow=!1,g.add(v)}return{mesh:g,update(m){l.uWaveTime.value=m}}}const h2=[{r:442,segs:96,base:-120,peak:165,seed:3.1,rough:.55,haze:.72,tint:"#8FA6C4"},{r:384,segs:96,base:-120,peak:118,seed:11.7,rough:.75,haze:.5,tint:"#6E86A6"}];function jm(i,t,e){const n=ue(Math.cos(i)*2.1+t,Math.sin(i)*2.1+t),s=ue(Math.cos(i)*5.3+t*2,Math.sin(i)*5.3+t*2),r=ue(Math.cos(i)*11+t*3,Math.sin(i)*11+t*3);return nt(.3+(n-.5)*1.5+(s-.5)*e+(r-.5)*e*.45,.05,1)}function d2(i="#8B8399",t="#AFC8D8"){const e=new q(i),n=new q(t),s=new Re;s.name="horizon";const r=[];for(const a of h2){const c=new Ue,l=[],u=new q(a.tint),h=[],d=[],f=[];for(let _=0;_<=a.segs;_++){const g=_/a.segs*Math.PI*2,m=jm(g,a.seed,a.rough),v=a.base+(a.peak-a.base)*m,x=Math.cos(g)*a.r,b=Math.sin(g)*a.r,S=jm(g-.04,a.seed,a.rough),w=nt(.5+(m-S)*6,0,1),A=Un(u.clone().multiplyScalar(.72),u.clone().multiplyScalar(1.16),w),E=M=>{const P=Un(A,M,a.haze*.75),U=Un(A.clone().multiplyScalar(.85),M,Math.min(1,a.haze+.22));return[P,Un(P,U,.6),U]},C=E(e),y=E(n);h.push(c.addVertex(x,v,b,C[0].toArray())),d.push(c.addVertex(x,Ft(a.base,v,.45),b,C[1].toArray())),f.push(c.addVertex(x,a.base,b,C[2].toArray()));for(const M of y)l.push(M.r,M.g,M.b)}for(let _=0;_<a.segs;_++)c.addQuad(h[_],h[_+1],d[_+1],d[_]),c.addQuad(d[_],d[_+1],f[_+1],f[_]);const p=new Wt(c.toBufferGeometry(),new ui({vertexColors:!0,fog:!1,side:_e,depthTest:!1,depthWrite:!1}));p.renderOrder=-1e3,p.frustumCulled=!1,s.add(p),r.push({mesh:p,base:p.geometry.attributes.color.array.slice(),alt:new Float32Array(l)})}let o=-1;return{group:s,update(a,c=0){if(s.position.set(a.position.x,0,a.position.z),!(Math.abs(c-o)<.002)){o=c;for(const l of r){const u=l.mesh.geometry.attributes.color;for(let h=0;h<u.array.length;h++)u.array[h]=l.base[h]+(l.alt[h]-l.base[h])*c;u.needsUpdate=!0}}}}}const No={position:new I(0,0,0),radius:.9};function Px(i){return i<42?Math.min(Math.max(i/40,.55),1.45):Math.min(Math.max(2.1+(i-42)*.038,2.1),4.4)}function f2(i){return Px(i)*.5}function ss(i,t){const e=Math.cos(i.ang),n=Math.sin(i.ang),s=t*t*i.h*.26;return[i.x+e*s,i.baseY+i.h*t*(1-t*.13),i.z+n*s]}function Yl(i,t){const e=ss(i,t),n=ss(i,Math.min(t+.01,1)),s=ve(Ni(n,e)),r=[-Math.sin(i.ang),0,Math.cos(i.ang)],o=ve(Hn(s,r));return{pos:e,tangent:s,width:r,normal:o}}const Fh=6;function p2(){const i=[],t=[],e=[],n=[];for(let r=0;r<=Fh;r++){const o=r/Fh;i.push(-.5,o,0,.5,o,0),t.push(o,o),e.push(-1,1)}for(let r=1;r<=Fh;r++){const o=(r-1)*2,a=o+1,c=r*2,l=c+1;n.push(o,a,l,o,l,c)}const s=new Xt;return s.setAttribute("position",new xt(i,3)),s.setAttribute("aT",new xt(t,1)),s.setAttribute("aSide",new xt(e,1)),s.setIndex(n),s}const m2=new q("#5A7331"),g2=new q("#8FB055"),_2=new q("#C6DC82"),t0=`
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
`;function Ix({count:i=1800,seed:t=7}={}){const e=va(t),n=p2(),s=new Float32Array(i*3),r=new Float32Array(i),o=new Float32Array(i),a=new Float32Array(i),c=new Float32Array(i*3),l=new Float32Array(i),u=new Float32Array(i),h=[];let d=0,f=0;for(;d<i&&f<i*8;){f++;const y=Ft(Ei.x0+8,Ne.x1-4,e()),M=6+e()*(Ne.z1-6);if(Fi(y,M)>0||Math.abs(y)<16&&M<34&&e()<.82)continue;const U=.72+.28*ue(y*.01,M*.01),O=e()<.22?48+e()*60*U:(14+e()*26)*U,G=e()*Math.PI*2,z=Zt(y,M),F=new q(g2).lerp(_2,e());s[d*3]=y,s[d*3+1]=z,s[d*3+2]=M,r[d]=O,o[d]=G,a[d]=e()*Math.PI*2,c[d*3]=F.r,c[d*3+1]=F.g,c[d*3+2]=F.b,l[d]=Px(O),u[d]=(e()*2-1)*.85,h.push({i:d,x:y,z:M,h:O,baseY:z,w:f2(O),ang:G}),d++}const p=d;n.setAttribute("aBase",new gn(s.subarray(0,p*3),3)),n.setAttribute("aH",new gn(r.subarray(0,p),1)),n.setAttribute("aAng",new gn(o.subarray(0,p),1)),n.setAttribute("aPhase",new gn(a.subarray(0,p),1)),n.setAttribute("aTip",new gn(c.subarray(0,p*3),3)),n.setAttribute("aWidth",new gn(l.subarray(0,p),1)),n.setAttribute("aTwist",new gn(u.subarray(0,p),1));const _=(Ei.x0+Ne.x1)/2,g=(Ne.z0+Ne.z1)/2,m=Math.hypot(Ne.x1-_,Ne.z1-g)+120;n.boundingSphere=new Ge(new I(_,40,g),m);const v={uTime:{value:0},uWind:{value:.55},uAntPos:{value:new I(0,0,-9999)},uAntRadius:{value:.9},uBaseColor:{value:new q(m2)},uOccNear:{value:5},uOccFar:{value:16},uTransl:{value:.16},uCastA:{value:new I(0,0,0)},uCastB:{value:new I(0,0,0)},uCastRadius:{value:46}},x=new Ve({roughness:.85,metalness:0,side:_e});x.extensions={derivatives:!0},x.onBeforeCompile=y=>{Object.assign(y.uniforms,v),y.vertexShader=y.vertexShader.replace("#include <common>",t0+`
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
      `),y.fragmentShader=y.fragmentShader.replace("#include <common>",`
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
      `)};const b=new fu({depthPacking:hf,side:_e});b.onBeforeCompile=y=>{Object.assign(y.uniforms,v),y.vertexShader=y.vertexShader.replace("#include <common>",t0+`
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
      `)},b.customProgramCacheKey=()=>"grass-depth";const S=new ma(n,x,p);S.name="grass",S.castShadow=!0,S.receiveShadow=!0,S.customDepthMaterial=b;const w=new Nt;for(let y=0;y<p;y++)S.setMatrixAt(y,w);S.instanceMatrix.needsUpdate=!0;function A(y,M,P){v.uTime.value=M,v.uAntPos.value.copy(No.position),v.uAntRadius.value=No.radius,v.uCastA.value.copy(No.position),P&&v.uCastB.value.copy(P.position)}function E(y){v.uCastRadius.value=y}function C(y){const M=n.getAttribute("aH");let P=0;for(const U of h)U.h<=0||!y(U.x,U.z)||(M.setX(U.i,0),U.h=0,P++);return P&&(M.needsUpdate=!0),P}return{mesh:S,footprints:h,update:A,setCastRadius:E,clearIn:C}}const te={x:-85,z:95,h:340,ang:Math.PI/2,w:22};te.baseY=Zt(te.x,te.z);const x2=new q("#5a4226"),y2=new q("#332412"),Lx=new q("#4a3418"),zh=new q(x2).lerp(Lx,.3),Bh=new q(y2).lerp(Lx,.55),e0=new q("#6C8E3C"),n0=new q("#AECB6E");function Ac(i,t,e){return new q(i).lerp(t,nt(e,0,1))}const ei=.8,v2=6.2;function Us(i){return ss(te,i)}function Dd(i){const t=Us(i),e=Us(Math.min(i+.01,1)),n=ve(Ni(e,t)),s=Math.abs(n[1])<.97?[0,1,0]:[1,0,0],r=ve(Hn(s,n));return{p:t,x:r,z:Hn(r,n)}}function $s(i){return Ft(te.w,v2,Math.pow(nt(i,0,ei)/ei,.7))}const Kf=ei*.55,i0=Math.PI*1.511,M2=98,b2=36,S2=9.6,Dx=5,Nd=Dd(Kf),Nx=ve(ge(Ht(Nd.x,Math.cos(i0)),Ht(Nd.z,Math.sin(i0)))),w2=ge(Nd.p,Ht(Nx,$s(Kf)*.7));function Uo(i){const t=1-(1-i)*(1-i);return ge(w2,ge(Ht(Nx,i*M2),[0,t*b2,0]))}function Ux(i){return Ft(S2,Dx,nt(i,0,1))}function Ox(i){const t=Uo(nt(i-.005,0,1)),e=Uo(nt(i+.005,0,1)),n=ve(Ni(e,t)),s=ve(Hn(n,[0,1,0])),r=ve(Hn(s,n));return{pos:Uo(i),fwd:n,side:s,up:r}}const ni={splitT:Kf,point:Uo,radius:Ux,basis:Ox,tipPos:Uo(1),tipRadius:Dx};te.walkBranch=ni;function s0(i){const t=new Ue,e=new Ue,n=va(i?481001:481002),s=i?20:4,r=i?16:6,o=[];for(let p=0;p<=s;p++){const _=p/s*ei,g=Dd(_),m=$s(_),v=[];for(let x=0;x<r;x++){const b=2*Math.PI*x/r,S=i?.86+.1*ue(Math.cos(b)*2.2+_*13,Math.sin(b)*2.2+_*13+30)+.06*ue(Math.cos(b)*6.4+_*29+8,Math.sin(b)*6.4+_*29+51):1,w=m*S,A=ge(g.p,ge(Ht(g.x,Math.cos(b)*w),Ht(g.z,Math.sin(b)*w))),E=nt((S-.86)/.2+.4,0,1),C=Ac(Bh,zh,E);v.push(t.addVertex(A[0],A[1],A[2],C.toArray()))}o.push(v)}for(let p=0;p<o.length-1;p++)for(let _=0;_<r;_++){const g=(_+1)%r;t.addQuad(o[p][_],o[p][g],o[p+1][g],o[p+1][_])}const a=Du(i?7:5),c=Vr(i?8:6,i?5:4),l=Ac(e0,n0,.42);function u(p,_,g){const m=_*(.9+n()*.3),v=_*(.75+n()*.25),x={x:[m,0,0],y:[0,v,0],z:[0,0,m],p};e.bake(c,x,()=>(i?Ac(e0,n0,g):l).toArray())}const h=i?10:3,d=i?10:5,f=[];for(let p=0;p<=h;p++){const _=p/h,g=Ox(_),m=Ux(_),v=[];for(let x=0;x<d;x++){const b=2*Math.PI*x/d,S=i?.9+.1*ue(Math.cos(b)*2.4+_*11+100,Math.sin(b)*2.4+_*11+44):1,w=m*S,A=ge(g.pos,ge(Ht(g.side,Math.cos(b)*w),Ht(g.up,Math.sin(b)*w))),E=Ac(Bh,zh,nt((S-.9)/.1,0,1));v.push(t.addVertex(A[0],A[1],A[2],E.toArray()))}f.push(v)}for(let p=0;p<f.length-1;p++)for(let _=0;_<d;_++){const g=(_+1)%d;t.addQuad(f[p][_],f[p][g],f[p+1][g],f[p+1][_])}if(i){const p=Us(0),_=te.w;for(let m=0;m<4;m++){const v=m/4*Math.PI*2+n()*.5,x=_*1.6+n()*3,b=[p[0],p[1]+_*.7,p[2]],S=[p[0]+Math.cos(v)*x,p[1]-1.6,p[2]+Math.sin(v)*x],w=xn(b,S,_*.5);t.bake(a,w,()=>Bh.toArray())}const g=5;for(let m=0;m<g;m++){const v=ei*(.6+m/g*.35+n()*.03),x=Dd(v),b=m/g*Math.PI*2+n()*.7,S=ve(ge(Ht(x.x,Math.cos(b)),Ht(x.z,Math.sin(b)))),w=ve(ge(Ht(S,.7),[0,.7,0])),A=ge(x.p,Ht(S,$s(v)*.7)),E=34+n()*22,C=ge(A,Ht(w,E)),y=3.4+n()*1.4,M=xn(A,C,y),P=new q(zh).multiplyScalar(.9);t.bake(a,M,()=>P.toArray()),u(C,30+n()*13,n()),u(ge(A,Ht(Ni(C,A),.55)),22+n()*9,n())}u(ge(Us(ei),[0,12,0]),34,.5)}else u(ge(Us(ei),[-14,14,6]),55,.5),u(ge(Us(ei),[18,22,-8]),48,.5);return{bark:t.toBufferGeometry(),leaf:e.toBufferGeometry()}}const A2=130,E2=170;function T2(){const i=Qr({map:yT(),strength:1,roughness:.92,side:_e}),t=new Ve({vertexColors:!0,roughness:.92,metalness:0,side:_e}),e=s0(!0),n=s0(!1),s=new Re;s.add(new Wt(e.bark,i),new Wt(e.leaf,t));const r=new Re;r.add(new Wt(n.bark,i),new Wt(n.leaf,t));for(const l of s.children)l.castShadow=!0,l.receiveShadow=!0;for(const l of r.children)l.castShadow=!0;r.visible=!1;const o=new Re;o.name="tree",o.add(s,r);let a=!0;function c(l){const u=Math.hypot(l.position.x-te.x,l.position.z-te.z);a&&u>E2?a=!1:!a&&u<A2&&(a=!0),s.visible=a,r.visible=!a}return{group:o,update:c}}const Wr=8,C2=.55,Yc=[];function On(i,t){const e={p:[i[0],i[1],i[2]],c:[t[0],t[1],t[2]],_d:0};return Yc.push(e),e}const As=new Float32Array(Wr*3),Es=new Float32Array(Wr*3),Rs=new Jt(0,0,0,1),ql=new Jt(0,1,0,0),R2={uLightPos:{value:As},uLightCol:{value:Es},uPitA:{value:Rs},uPitB:{value:ql}};function P2(i,t,e,n,s){Rs.set(i,t,e,Math.max(n,.001)),ql.set(1,Math.max(s,.001),0,0)}function Ud(i,t,e){if(ql.x<.5)return 0;const n=a=>{const c=Math.min(1,Math.max(0,a));return c*c*(3-2*c)},s=Math.hypot(i-Rs.x,e-Rs.z),r=1-n((s-Rs.w*.9)/(Rs.w*.8)),o=Math.min(1,Math.max(0,(Rs.y-t)/ql.y));return r*n((o-.04)/.46)}function I2(i){const t=i.x,e=i.y,n=i.z;for(let r=0;r<Yc.length;r++){const o=Yc[r],a=o.p[0]-t,c=o.p[1]-e,l=o.p[2]-n;o._d=a*a+c*c+l*l}const s=Yc.slice().sort((r,o)=>r._d-o._d);for(let r=0;r<Wr;r++){const o=s[r];o?(As[r*3]=o.p[0],As[r*3+1]=o.p[1],As[r*3+2]=o.p[2],Es[r*3]=o.c[0],Es[r*3+1]=o.c[1],Es[r*3+2]=o.c[2]):(As[r*3]=As[r*3+1]=As[r*3+2]=0,Es[r*3]=Es[r*3+1]=Es[r*3+2]=0)}}function L2(i,t,e){if(e>=We)return .9;const n=Math.max(0,Math.min(1,(e-Ce)/(We-Ce)));return .12+.88*Math.pow(n,1.6)}const D2=`
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
  if (w.z >= ${We.toFixed(1)}) return (0.82 + 0.18 * nestNoise(w.xz * 0.015)) * pit;
  float t = clamp((w.z - (${Ce.toFixed(1)})) / (${(We-Ce).toFixed(1)}), 0.0, 1.0);
  return (0.12 + 0.88 * pow(t, 1.6)) * pit;
}
`;function wa(i){if(!i||i.userData.nestShaded)return i;i.userData.nestShaded=!0;const t=i.onBeforeCompile;i.onBeforeCompile=function(n,s){t&&t.call(this,n,s),Object.assign(n.uniforms,R2),n.vertexShader=n.vertexShader.replace("#include <common>",`varying vec3 vNestWorld;
#include <common>`).replace("#include <project_vertex>",`#include <project_vertex>
  vec4 nestLocal = vec4(transformed, 1.0);
  #ifdef USE_INSTANCING
    nestLocal = instanceMatrix * nestLocal;
  #endif
  vNestWorld = (modelMatrix * nestLocal).xyz;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",D2+`
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
          reflectedLight.indirectDiffuse *= max(nestDay, ${C2.toFixed(2)});
          vec3 nestSum = vec3(0.0);
          for (int i = 0; i < ${Wr}; i++) {
            vec3 Ld = uLightPos[i] - vNestWorld;
            float d = length(Ld);
            float att = 1.0 / (1.0 + d * d * 0.017);
            nestSum += uLightCol[i] * max(dot(normal, Ld / max(d, 0.001)), 0.0) * att;
          }
          reflectedLight.directDiffuse += diffuseColor.rgb * nestSum;
        }
      `)};const e=i.userData.shaderTag||"";return i.customProgramCacheKey=()=>"nest-shading|"+e,i.needsUpdate=!0,i}const un=i=>new q(i).toArray(),Cn=(i,t)=>[i[0]*t,i[1]*t,i[2]*t],$i=(i,t,e,n)=>[i[0]*t,i[1]*e,i[2]*n],Ki=(i,t,e)=>[Ft(i[0],t[0],e),Ft(i[1],t[1],e),Ft(i[2],t[2],e)],N2=un("#6d5130"),U2=un("#5a4226"),Oo=un("#332412"),qc=un("#4c5f2f"),kh=un("#6a6154"),O2="#5E4526",F2=un("#4a3418"),r0=un(O2),o0=un("#efdcb0"),a0=un("#7a6040"),z2=un("#ffc46a"),Hh=un("#c497d9"),B2=un("#e0a752"),c0=Ki(un("#e07356"),un("#e6b558"),.5),k2=un("#9db0d8"),H2=Cn(Ki(qc,Oo,.62),.58),G2=Cn(Oo,.7),Gh=[.72,.48,1.75],V2=[1.95,1.2,.52],$n=[],Ri=[];function Fx(i){return i.r*.65}function W2(i){const t=new Ue,e=new Ue,n=new Ue,s=va(20260812),r=Vr(10,7),o=Vr(6,4),a=Du(8),c=(S,w,A,E)=>ks([S,0,0],[0,w,0],[0,0,A],E);{const A=[];for(let E=0;E<=9;E++){const C=[];for(let y=0;y<=30;y++){const M=2*Math.PI*y/30,P=Rd*1.02*E/9,U=fe[0]+Math.cos(M)*P,O=fe[2]+Math.sin(M)*P,G=de(U,O)+.08,z=Ki(N2,U2,nt(.3+ue(U*.2,O*.2)*.5,0,1));C.push(t.addVertex(U,G,O,Cn(z,.65+.35*(1-E/9))))}A.push(C)}for(let E=0;E<9;E++)for(let C=0;C<30;C++)t.addQuad(A[E][C],A[E][C+1],A[E+1][C+1],A[E+1][C])}const l=Cn(F2,.8);function u(S,w,A,E,C,y){let P=null;for(let U=0;U<=8;U++){const O=U/8,G=Math.sin(O*Math.PI),z=Ft(w,A,O),F=Ns(z,S+y*G,C*G);P&&t.bake(a,xn(P,F,E*(.65+.5*G)),()=>l),P=F}}for(let S=0;S<30;S++){const w=Ce+8+s()*(Math.abs(Ce)-16),A=Math.PI*(.15+s()*.7);u(w,A,A+.5+s()*1.3,.5+s()*.9,.06+s()*.16,(s()-.5)*9)}const h=Cn(r0,.55);for(let S=0;S<150;S++){const w=Ce+5+s()*(Math.abs(Ce)-10),A=Math.PI*(.18+s()*.64),E=Ns(A,w,.02),C=1.2+s()*(ln(w)>16?7:3),y=[E[0]+(s()-.5)*.8,E[1]-C,E[2]+(s()-.5)*.8];t.bake(a,xn(E,y,.09+s()*.1),()=>h)}for(let S=0;S<520;S++){const w=Ce+3+s()*(Math.abs(Ce)-5),A=s()*Math.PI*2,E=Ns(A,w,.01),C=.22+s()*.55,y=Cn(a0,(.7+s()*.7)*(.5+s()*.5));t.bake(o,c(C,C*.8,C,E),()=>y)}for(let S=0;S<120;S++){const w=Ce+5+s()*(Math.abs(Ce)-8),A=ln(w)*.7,E=(s()-.5)*2*A,C=.3+s()*.9,y=Cn(kh,(.6+s()*.8)*.8);n.bake(o,c(C*1.3,C*.7,C*1.1,[E,de(E,w)+C*.3,w]),()=>y)}function d(S,w,A,E,C,y,M){if(Math.hypot(S-Cd[0],w-Cd[1])<15)return;const P=$i(C,.3,.28,.4),U=M||$i(C,.95,.62,1.15);for(let O=0;O<A;O++){const G=S+(s()-.5)*7,z=w+(s()-.5)*7,F=E*(.45+s()*.9),N=de(G,z),W=[G,N+1.7*F,z];t.bake(a,xn([G,N,z],W,.22*F),()=>P),e.bake(r,c(1.15*F,.8*F,1.15*F,W),()=>U),$n.push({x:G,z,r:1.15*F+.5})}On([S,de(S,w)+2.4,w],y)}for(let S=0;S<9;S++){const w=-14-S*10.5;d((S%2?1:-1)*(3.5+s()*1.8),w,4+Math.floor(s()*4),1.3,Hh,Gh)}for(let S=0;S<8;S++){const w=s()*Math.PI*2,A=17+s()*9;let E=fe[0]+Math.cos(w)*A;const C=fe[2]+Math.sin(w)*A,y=ln(C)*.72;Math.abs(E)>y&&(E=Math.sign(E)*y),d(E,C,5+Math.floor(s()*5),1.9,Hh,Gh)}const f=Cn(r0,.36),p=$i(z2,1.25,1.15,1.4);for(let S=0;S<26;S++){const w=Math.PI*(.2+s()*.6),A=Wf+(s()-.5)*Vl*1.5,E=Ns(w,A,.03),C=[E[0],E[1]-(3+s()*11),E[2]];t.bake(a,xn(E,C,.07),()=>f);const y=.55+s()*.75;e.bake(r,c(y,y*1.25,y,C),()=>p),S%3===0&&On(C,V2)}const _=$i(o0,.76,.7,.58);for(let S=0;S<5;S++){const w=Math.PI*(.15+S*.42),A=8+s()*5,E=fe[0]+Math.cos(w)*A,C=fe[2]+Math.sin(w)*A;for(let y=0;y<22;y++){const M=E+(s()-.5)*5.5,P=C+(s()-.5)*5.5,U=.5+s()*.35;t.bake(r,c(U*.72,U*.72,U*1.5,[M,de(M,P)+U*.6,P]),()=>_)}On([E,de(E,C)+1.5,C],[.55,.42,.22])}if(On([fe[0],de(fe[0],fe[2])+9,fe[2]],[1.5,1.05,.5]),i&&i.granary){const S=i.granary;for(let A=0;A<5;A++){const E=(s()-.5)*Math.PI*1.6,C=nt(S.uEnd+(s()-.5)*S.uMax*.5,S.uMax*.42,S.uMax*.96),y=S.pointAt(E,C,.12);for(let M=0;M<26;M++){const P=y[0]+(s()-.5)*4.5,U=y[2]+(s()-.5)*4.5,O=.5+s()*1.3,G=nt(1-Math.hypot(P-y[0],U-y[2])/4.5,0,1),z=Cn(Ki(Ki(B2,c0,s()*.4),Oo,G*.5),.55+.35*(1-G));t.bake(o,c(O,O*.85,O,[P,de(P,U)+O*.4,U]),()=>z)}}const w=$i(c0,.94,.81,.51);for(let A=0;A<10;A++){const E=(s()-.5)*Math.PI*1.5,C=nt(S.uEnd+(s()-.5)*S.uMax*.55,4,S.uMax-2),y=s()<.5,M=S.pointAt(E,C,y?.85:.06),P=.5+s()*.7,U=y?M[1]-P*(.6+s()*1.6):de(M[0],M[2])+P*.55;t.bake(r,c(P*.8,P*1.3,P*.8,[M[0],U,M[2]]),()=>w)}for(let A=0;A<2;A++){const E=S.pointAt(0,2+s()*4,.3);On([E[0],de(E[0],E[2])+2.2,E[2]],[.42,.3,.14])}}if(i&&i.brood){const S=i.brood,w=[.34,.5,.68],A=[1,1.55,1.15],E=$i(k2,.42,.4,.46);for(let C=0;C<7;C++){const y=(s()-.5)*Math.PI*1.7,M=nt(S.uEnd+(s()-.5)*S.uMax*.6,S.uMax*.32,S.uMax*.97),P=S.pointAt(y,M,.1),U=de(P[0],P[2]),O=14+Math.floor(s()*14);for(let G=0;G<O;G++){const z=Math.floor(s()*3),F=w[z]+s()*.22,N=P[0]+(s()-.5)*4.6,W=P[2]+(s()-.5)*4.6,Q=(.85+s()*.25)*.85,rt=$i(o0,Q,Q*.94,Q*.8);t.bake(r,c(F*.75,F*.75,F*1.5*A[z],[N,de(N,W)+F*.6,W]),()=>rt)}if(C%2===0){const G=4+Math.floor(s()*3);for(let z=0;z<G;z++){const F=s()*Math.PI*2,N=F+1.4+s()*1.2,W=2.2+s()*1.2,Q=[P[0]+Math.cos(F)*W,U+.5+s()*1,P[2]+Math.sin(F)*W],rt=[P[0]+Math.cos(N)*W,U+.5+s()*1,P[2]+Math.sin(N)*W];t.bake(a,xn(Q,rt,.03),()=>E)}}On([P[0],U+1.6,P[2]],[.62,.46,.24])}for(let C=0;C<2;C++){const y=(s()-.5)*Math.PI*1.4,M=nt(S.uEnd+(s()-.5)*S.uMax*.4,4,S.uMax-2),P=S.pointAt(y,M,.1);d(P[0],P[2],2+Math.floor(s()*2),1.1,Hh,Gh)}}if(i&&i.midden){const S=i.midden,w=Ki(qc,Oo,.5),A=Cn(Ki(qc,Oo,.3),3.5),E=[.3,.46,.3];for(let M=0;M<3;M++){const P=(s()-.5)*Math.PI*1.6,U=nt(S.uEnd+(s()-.5)*S.uMax*.5,4,S.uMax-2),O=S.pointAt(P,U,.08);d(O[0],O[2],3+Math.floor(s()*3),1,w,E,A)}for(let M=0;M<4;M++){const P=(s()-.5)*Math.PI*1.7,U=nt(S.uEnd+(s()-.5)*S.uMax*.55,3,S.uMax-1.5),O=S.pointAt(P,U,.1);for(let G=0;G<20;G++){const z=O[0]+(s()-.5)*5,F=O[2]+(s()-.5)*5,N=.4+s()*1.1,W=Cn(s()<.5?kh:a0,(.3+s()*.35)*.55);n.bake(o,c(N*1.2,N*.7,N,[z,de(z,F)+N*.3,F]),()=>W)}}const C=Cn(G2,.5);for(let M=0;M<5;M++){const P=(s()-.5)*Math.PI*1.6,U=nt(S.uEnd+(s()-.5)*S.uMax*.5,3,S.uMax-1.5),O=S.pointAt(P,U,.12),G=de(O[0],O[2]),z=2.2+s()*2.2,F=s()*Math.PI*2;t.bake(a,xn([O[0],G+.35,O[2]],[O[0]+Math.cos(F)*z,G+.3,O[2]+Math.sin(F)*z],.55+s()*.35),()=>C)}const y=$i(H2,.3,.36,.3);for(let M=0;M<6;M++){const P=(s()-.5)*Math.PI*1.6,U=nt(S.uEnd+(s()-.5)*S.uMax*.55,3,S.uMax-1.5),O=S.pointAt(P,U,.05),G=1+s()*1.6;t.bake(r,c(G,.12,G,[O[0],de(O[0],O[2])+.03,O[2]]),()=>y)}}for(let S=0;S<42;S++){const w=-200+s()*380,A=8+s()*250;if(Fi(w,A)>0||di(w,A)<4)continue;const E=2+s()*6,C=1.5+s()*4,y=2+s()*6,M=Zt(w,A)+C*.35,P=.75+s()*.5,U=s()*40,O=s()<.6?.5+s()*.5:0;n.bake(r,c(E,C,y,[w,M,A]),(G,z,F)=>{const N=Cn(kh,P);if(O<=0)return N;const W=nt((z-M)/C+.15*ue(G*.3+U,F*.3+U),0,1);return Ki(N,qc,W*W*O)}),Ri.push({x:w,z:A,r:(E+y)*.5+1})}const g=new Re;g.name="nest-decor";const m=new Wt(t.toBufferGeometry(),new Ve({vertexColors:!0,roughness:.92,metalness:0,side:_e}));m.name="nest-decor-matte",g.add(m);const v=new Wt(n.toBufferGeometry(),Qr({map:MT(),strength:1,roughness:.92,side:_e}));v.name="nest-decor-stone",v.castShadow=!0,v.receiveShadow=!0,g.add(v);const x=vx({map:_x(),strength:.7,emissive:.95,color:7829367,side:_e}),b=new Wt(e.toBufferGeometry(),x);return b.name="nest-decor-glow",g.add(b),{group:g,mushrooms:$n,rocks:Ri}}const Vh=new q("#b07226").toArray(),mo=new q("#5e3d16").toArray(),l0=new q("#100c06").toArray(),tn=2.4,X2=2.7,Y2=2.9;function q2(i,t,e,n,s){const r=Ni(t,i),o=Math.hypot(r[0],r[1],r[2]),a=nt(o,.05,e+n-.02),c=Ht(r,1/(o||1)),l=(e*e-n*n+a*a)/(2*a),u=Math.sqrt(Math.max(e*e-l*l,0)),h=s[0]*c[0]+s[1]*c[1]+s[2]*c[2],d=ve(Ni(s,Ht(c,h)));return ge(ge(i,Ht(c,l)),Ht(d,u))}function u0(i){const t=new Xt;return t.setAttribute("position",new xt(i.p,3)),t.setAttribute("normal",new xt(i.n,3)),t.setIndex(i.i),t}function h0(i,t){i.matrix.set(t.x[0],t.y[0],t.z[0],t.p[0],t.x[1],t.y[1],t.z[1],t.p[1],t.x[2],t.y[2],t.z[2],t.p[2],0,0,0,1),i.matrixWorldNeedsUpdate=!0}function $2(){const i=new Re;i.name="queen";const t=[fe[0],de(fe[0],fe[2]),fe[2]],e=Math.PI,n=[Math.sin(e),0,Math.cos(e)],s=[0,1,0],r=ve(Hn(s,n)),o=ks(r,s,n,[t[0],t[1]+1.05*tn,t[2]]),a=E=>gx(o,Ht(E,tn)),c=Vr(12,9),l=Du(8),u=new Ue,h=(E,C,y,M)=>ks(Ht(r,C*tn),Ht(s,y*tn),Ht(n,M*tn),a(E)),d=(E,C,y,M,P)=>u.bake(c,h(E,C,y,M),()=>P),f=(E,C,y,M)=>u.bake(l,xn(E,C,y),()=>M);d([0,1.5,-1.2],.5,.5,.62,mo),d([0,1.62,.5],1.06,1.02,1.75,Vh),d([0,1.66,2.7],1.18,1.02,1.12,Vh),d([.76,2.12,3.1],.3,.26,.3,l0),d([-.76,2.12,3.1],.3,.26,.3,l0);for(let E=-1;E<=1;E+=2)f(a([E*.55,1.45,3.5]),a([E*.34,1.2,4.8]),.17*tn,Vh);const p=[[.92,1.5,1.7],[-.92,1.5,1.7],[1.02,1.4,.4],[-1.02,1.4,.4],[.92,1.4,-1.15],[-.92,1.4,-1.15]],_=[[4.1,0,3.9],[-4.1,0,3.9],[4.9,0,.3],[-4.9,0,.3],[4.5,0,-3.5],[-4.5,0,-3.5]];for(let E=0;E<6;E++){const C=a(p[E]),y=a(_[E]);y[1]=de(y[0],y[2]);const M=p[E][0]>0?r:Ht(r,-1),P=q2(C,y,X2*tn,Y2*tn,ve(ge(s,Ht(M,.75))));f(C,P,.2*tn,mo),f(P,y,.14*tn,mo),u.bake(c,ks([.3*tn,0,0],[0,.3*tn,0],[0,0,.3*tn],P),()=>mo)}const g=new Ve({vertexColors:!0,roughness:.45,metalness:.05}),m=new Wt(u.toBufferGeometry(),g);m.name="queen-body",m.castShadow=!0,i.add(m);const v=u0(c),x=u0(l),b=new Ve({color:new q().fromArray(mo),roughness:.45,metalness:.05}),S=[{local:[0,1.5,-5.4],rx:1.34,ry:1.3,rz:1.9},{local:[0,1.55,-3.2],rx:1.6,ry:1.54,rz:2.1}].map(E=>{const C=new Wt(v,b);return C.matrixAutoUpdate=!1,C.castShadow=!0,i.add(C),{mesh:C,...E}}),w=[];for(let E=-1;E<=1;E+=2)for(let C=0;C<2;C++){const y=new Wt(x,b);y.matrixAutoUpdate=!1,i.add(y),w.push({mesh:y,sA:E,seg:C})}function A(E){const C=1+Math.sin(E*.55)*.04;for(const y of S)h0(y.mesh,h(y.local,y.rx*C,y.ry*C,y.rz));for(const y of w){const M=Math.sin(E*1.1+(y.sA>0?0:1.3))*.35,P=a([y.sA*.58,2.1,3.2]),U=a([y.sA*(1.4+M*.3),3.3,4.2]),O=a([y.sA*(1.85+M),3.2+M*.4,6.1]);h0(y.mesh,y.seg===0?xn(P,U,.14*tn):xn(U,O,.11*tn))}}return A(0),{group:i,update:A}}const Jf={sunDir:ve([-300,120,195]),sunColor:15251852,sunIntensity:6.1,hemiSky:7241640,hemiGround:4867376,hemiIntensity:1.15,fog:8221832,fogNear:95,fogFar:420,sky:10130344,exposure:1.3},Qf={sunDir:ve([30,45,20]),sunColor:16767370,sunIntensity:2.5,hemiSky:12572917,hemiGround:7236152,hemiIntensity:.85,fog:11520216,fogNear:90,fogFar:420,sky:10274532,exposure:1.15};let Fo=0;function Aa(){return Fo}function zx(i){Fo=i<0?0:i>1?1:i}const jn=[0,1,0];function Ou(){const i=Jf.sunDir,t=Qf.sunDir;jn[0]=i[0]+(t[0]-i[0])*Fo,jn[1]=i[1]+(t[1]-i[1])*Fo,jn[2]=i[2]+(t[2]-i[2])*Fo;const e=Math.hypot(jn[0],jn[1],jn[2])||1;return jn[0]/=e,jn[1]/=e,jn[2]/=e,jn}const Z2=56;function d0(i,t,e,n,s,r,o,a){const c=n-i,l=s-t,u=r-e,h=c*a[0]+l*a[1]+u*a[2];if(h<=0)return 0;const d=c*c+l*l+u*u-h*h,f=Math.sqrt(d>0?d:0),p=o*.35+h*.06,_=nt((o+p-f)/p,0,1);return _*_*(3-2*_)}function K2(i,t,e,n){const s=Math.hypot(n[0],n[2]);if(s<1e-4)return 0;const r=n[0]/s,o=n[2]/s,a=te.x-i,c=te.z-e,l=a*r+c*o;if(l<=0)return 0;const u=Math.abs(a*o-c*r);if(t+n[1]/s*l>te.baseY+te.h*ei)return 0;const d=te.w*.4+l*.05,f=nt((te.w+d-u)/d,0,1);return f*f*(3-2*f)}function J2(i,t,e,n){const s=Math.hypot(n[0],n[2]);if(s<1e-4)return 0;const r=n[0]/s,o=n[2]/s,a=n[1]/s,c=Math.min(170,34/a+14);let l=0;for(let u=2.5;u<c;u*=1.38){const d=Zt(i+r*u,e+o*u)-(t+a*u+.5);if(d<=0)continue;const f=1.2+u*.05,p=nt(d/f,0,1);if(p>l&&(l=p),l>=1)break}return l}function Bx(i,t){if(t<We)return 1;const e=Ou(),n=Zt(i,t),s=Sa(i,t),r=nt((s[0]*e[0]+s[1]*e[1]+s[2]*e[2])/Math.max(e[1],.001),0,1);let o=J2(i,n,t,e);if(o<1){const a=n+1.2;o=Math.max(o,K2(i,a,t,e));const c=Us(ei);o=Math.max(o,d0(i,a,t,c[0],c[1]+14,c[2],Z2,e));for(let l=0;l<Ri.length&&o<1;l++){const u=Ri[l],h=u.r*.8;o=Math.max(o,d0(i,a,t,u.x,Zt(u.x,u.z)+h*.45,u.z,h,e))}}return nt(1-r*(1-o),0,1)}const Zn=[],kx=new Map,Q2=["graine","brindille","miellat"],j2={graine:4,brindille:3,miellat:5},tC={graine:5,brindille:6,miellat:5},eC=[.88,.66,.32],nC=[.55,.38,.18],iC=[.42,.32,.19],f0=[.24,.18,.1],sC=[.94,.74,.36],rC=[.78,.5,.2],oC=new q("#4A4438"),jf=(i,t,e)=>[Ft(i[0],t[0],e),Ft(i[1],t[1],e),Ft(i[2],t[2],e)];function aC(i,t,e,n,s){const r=new Ue,o=[];for(let a=0;a<=n;a++){const c=a/n,l=[],u=t(c);for(let h=0;h<e;h++){const d=2*Math.PI*h/e;l.push(r.addVertex(Math.cos(d)*u,c*i,Math.sin(d)*u,s(c,d)))}o.push(l)}for(let a=0;a<n;a++)for(let c=0;c<e;c++){const l=(c+1)%e;r.addQuad(o[a][c],o[a][l],o[a+1][l],o[a+1][c])}return r}function cC(){return aC(7,t=>Math.pow(Math.sin(Math.PI*t),.62)*2*(1-.3*t),7,5,(t,e)=>jf(nC,eC,nt(.25+.75*Math.pow(Math.abs(Math.cos(e*.5)),1.5)*(.4+.6*t),0,1))).toBufferGeometry()}function lC(){const i=new Ue,t=Du(5),e=[[0,0,0],[.6,5.5,.4],[2.4,10.6,.2]];for(let n=0;n<2;n++)i.bake(t,xn(e[n],e[n+1],.62-n*.16),(s,r)=>jf(f0,iC,nt(.55+.25*Math.sin(r*1.7),0,1)));return i.bake(t,xn([.6,5.5,.4],[-2.6,8.2,-1.1],.33),()=>f0),i.toBufferGeometry()}function uC(){const i=new Ue,t=Vr(6,3),e=[[0,.9,0,2.6,1.5,2.2],[2.4,.6,1.1,1.7,1,1.5],[-1.6,.7,1.6,1.9,1.2,1.7]];for(const n of e)i.bake(t,ks([n[3],0,0],[0,n[4],0],[0,0,n[5]],[n[0],n[1],n[2]]),(s,r)=>jf(rC,sC,nt((r-n[1])/(n[4]*2)+.55,0,1)));return i.toBufferGeometry()}const zo=(i,t)=>i>=t?0:Math.pow(1-i/t,1.5);function hC(i,t){if(Fi(i,t)>0||di(i,t)<10)return 0;let e=.16;return e+=1.05*zo(Math.hypot(i-te.x,t-te.z),78),e+=.85*zo(Math.hypot(i-88,t-168),74),e+=.7*zo(Math.hypot(i-24,t-128),46),e*nt(1-(ir(i,t)-.16)/.5,.12,1)}const dC=2;function fC(i,t,e){const n=Math.hypot(i-te.x,t-te.z)<85,s=e();return n?s<.55?"brindille":s<.85?"miellat":"graine":zo(Math.hypot(i-88,t-168),74)+zo(Math.hypot(i-24,t-128),46)>.25?s<.6?"graine":s<.85?"miellat":"brindille":s<.5?"graine":s<.8?"brindille":"miellat"}const p0=32;function pC(i=90210){const t=va(i),e=Ne;let n=0,s=0,r=1;for(;n<p0&&s++<p0*200;){const o=Ft(e.x0+14,e.x1-14,t()),a=Ft(e.z0+16,e.z1-14,t());if(t()*dC>hC(o,a))continue;const c=fC(o,a,t),l=3+Math.floor(t()*4);let u=0;for(let h=0;h<l*3&&u<l;h++){const d=t()*Math.PI*2,f=Math.sqrt(t())*12,p=o+Math.cos(d)*f,_=a+Math.sin(d)*f;if(Fi(p,_)>0||di(p,_)<10||ir(p,_)>.7)continue;const g=Math.max(1,j2[c]+Math.round((t()-.5)*2)),m={id:r++,x:p,z:_,kind:c,amount:g,r:tC[c],amount0:g,yaw:t()*Math.PI*2,tilt:(t()-.5)*.5,size:.75+t()*.5,_slot:-1};Zn.push(m),kx.set(m.id,m),u++}u&&n++}}const Hx={},m0=new Nt,g0=new an,_0=new bn,x0=new I,y0=new I,v0=new q;function Gx(i){const t=Hx[i.kind];if(!t||i._slot<0)return;const e=i.amount0>0?i.amount/i.amount0:0,n=i.size*Ft(.45,1,Math.pow(e,.6)),s=Sa(i.x,i.z);_0.set(i.tilt-Math.atan2(s[2],s[1])*.6,i.yaw,i.tilt+Math.atan2(s[0],s[1])*.6),g0.setFromEuler(_0),x0.set(i.x,Zt(i.x,i.z)-.35*n,i.z),y0.set(n,n,n),m0.compose(x0,g0,y0),t.setMatrixAt(i._slot,m0),v0.set(1,1,1).lerp(oC,(1-e)*.8),t.setColorAt(i._slot,v0),t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0)}function tp(i,t=1){const e=kx.get(i);if(!e||e.amount<=0||!(t>0))return 0;const n=Math.min(t,e.amount);return e.amount-=n,Gx(e),n}function mC(i,t,e=12,n=!1){const s=[];for(const r of Zn)!n&&r.amount<=0||Math.hypot(r.x-i,r.z-t)<=e&&s.push(r);return s}function gC(){const i=new Re;i.name="resources",Zn.length===0&&pC();const t={graine:cC(),brindille:lC(),miellat:uC()},e=new Ve({vertexColors:!0,roughness:.9,metalness:0}),n=new Ve({vertexColors:!0,roughness:.22,metalness:0});for(const s of Q2){const r=Zn.filter(c=>c.kind===s),o=Math.max(r.length,1),a=new ma(t[s],s==="miellat"?n:e,o);a.name="resource-"+s,a.castShadow=!0,a.receiveShadow=!0,a.count=r.length,a.instanceColor=new gn(new Float32Array(o*3).fill(1),3),a.frustumCulled=!1,Hx[s]=a,r.forEach((c,l)=>{c._slot=l,Gx(c)}),i.add(a)}return{group:i,nodes:Zn}}const aa=14,M0=1.6,Ec=3.2,ep=8,bo=aa+ep+4,Vx=18,_C=.62,Fu=new q("#6d5130"),Wx=new q("#5a4226"),np=new q("#332412"),go=new q("#e0a752"),xC=new q("#efdcb0"),yC=new q("#ffc46a"),$c=[.55,.62,.82],vC=[.85,.48,.17],Wh=[.85,.55,.22],MC=[1.15,.66,.24],bC=[{t:.18,c:[.95,.56,.22]},{t:.55,c:[.72,.42,.16]},{t:.92,c:MC}],Xh=[1.95,1.2,.52],Od=6;let Fd=null,Ts=null,Zc=null,ce=null;const Qi=(i,t,e)=>new q(i).lerp(t,nt(e,0,1));function SC(i,t={}){Fd=i,Ts=t.lawn||null,Zc=t.grass||null}function Or(){return ce?{x:ce.x,z:ce.z}:null}function Xx(){return ce}function ip(i,t){if(ce)return{ok:!1,reason:"already-founded"};if(t<We)return{ok:!1,reason:"underground"};const e=Ne;return i<e.x0+bo||i>e.x1-bo?{ok:!1,reason:"bounds"}:t<bo||t>e.z1-bo?{ok:!1,reason:"bounds"}:Math.abs(i)<34&&t<34?{ok:!1,reason:"occupied"}:Fi(i,t)>0?{ok:!1,reason:"water"}:di(i,t)<Vx?{ok:!1,reason:"water"}:ir(i,t)>_C?{ok:!1,reason:"slope"}:Zf(i,t).kind==="rock"?{ok:!1,reason:"rock"}:{ok:!0}}function Yh(i,t,e){const n=(s,r)=>ue(Math.cos(i)*s+t*r+e+37,Math.sin(i)*s+t*r*.7+e+91);return .84+.2*n(1.6,.1)+.1*n(4.1,.29)+.05*n(9.3,.62)}function vi(i,t=.18){return Qi(np,Wx,i*.8+.1).lerp(Fu,t+i*.14).multiplyScalar(.88)}function wC(i,t){const e=Ne,n=Zm/bx,s=nn(i,t),r=[[],[]];for(let u=0;u<24;u++){const h=u/24*Math.PI*2,d=[Math.sin(h),Math.cos(h)],f=Math.atan2(-d[0],d[1]),p=i-n*Math.cos(f),_=t-n*Math.sin(f);let g=0,m=!1,v=!0;for(let x=1;x<=8;x++){const b=x/8*(Zm+aa),S=f+b/n,w=p+n*Math.cos(S),A=_+n*Math.sin(S),E=x===8?bo:ep;if(w<e.x0+E||w>e.x1-E||A<We+E||A>e.z1-E){m=!0;break}if(Fi(w,A)>0||di(w,A)<Vx*.6){m=!0;break}const C=nn(w,A);x===8&&C<s-3&&(v=!1),g+=C*(x===8?3:1)}m||r[v?0:1].push({head:d,score:g})}const o=r[0].length?r[0]:r[1];if(o.length)return o.reduce((u,h)=>h.score>u.score?h:u).head;const a=(e.x0+e.x1)*.5-i,c=(e.z0+e.z1)*.5-t,l=Math.hypot(a,c)||1;return[a/l,c/l]}function AC(i,t,e){const n=nn(i,t),s=6,r=[nt((nn(i+s,t)-nn(i-s,t))/(2*s),-.35,.35),nt((nn(i,t+s)-nn(i,t-s))/(2*s),-.35,.35)],o=wC(i,t),a=GT({x:i,z:t},{y:n,gx:r[0],gz:r[1]},o,e);kT(a);const c=new Ue,l=a.floorY,u=a.chamber,h=[-1,-.62,-.24,.24,.62,1],d=[],f=u.r+9;let p=a.arc.len;for(let F=0;F<=a.arc.len;F+=1){const N=Dr(a,F);if(Math.hypot(N.x-u.x,N.z-u.z)<=f*.98){p=Math.min(a.arc.len,F+2);break}}for(let F=0;F<=p+1e-4;F+=2){const N=Dr(a,F),W=F/Math.max(a.arc.len,.001),Q=(N.x-a.arc.ax)/a.arc.R,rt=(N.z-a.arc.az)/a.arc.R,bt=[],Rt=(ot,At,Tt)=>bt.push(c.addVertex(N.x+Q*ot,At,N.z+rt*ot,Tt)),$=ot=>{const At=ot*(a.hw+Ec),Tt=ot*(a.hw+Ec+ep),Lt=N.x+Q*At,Bt=N.z+rt*At,j=N.x+Q*Tt,D=N.z+rt*Tt,ht=.72+.56*ue(j*.15+e,D*.15+e);return{rim:At,bank:Tt,rx:Lt,rz:Bt,bx:j,bz:D,lump:ht}},tt=$(-1);Rt(tt.bank,nn(tt.bx,tt.bz)+.15*tt.lump,Qi(vi(tt.lump,.34),go,.12).toArray()),Rt(tt.rim,nn(tt.rx,tt.rz)+M0*tt.lump,Qi(vi(tt.lump,.3),go,.1).toArray());for(const ot of h){const At=ot*a.hw,Tt=N.x+Q*At,Lt=N.z+rt*At,Bt=Yh(ot*Math.PI,F,e);Rt(At,Do(a,Tt,Lt,F,At),vi(nt((Bt-.84)/.34+.45,0,1),.22+W*.06).toArray())}const ut=$(1);Rt(ut.rim,nn(ut.rx,ut.rz)+M0*ut.lump,Qi(vi(ut.lump,.3),go,.1).toArray()),Rt(ut.bank,nn(ut.bx,ut.bz)+.15*ut.lump,Qi(vi(ut.lump,.34),go,.12).toArray()),d.push(bt)}for(let F=0;F<d.length-1;F++)for(let N=0;N<d[F].length-1;N++)c.addQuad(d[F][N],d[F][N+1],d[F+1][N+1],d[F+1][N]);const _=30,g=5,m=3,v=5,x=F=>F<=m?u.r:u.r*Math.cos((F-m)/v*(Math.PI/2)),b=F=>F<=m?l+Ai*F/m:l+Ai+(Lr-Ai)*Math.sin((F-m)/v*(Math.PI/2)),S=[];for(let F=0;F<=g;F++){const N=F/g*u.r,W=[];for(let Q=0;Q<_;Q++){const rt=2*Math.PI*Q/_,bt=u.x+Math.cos(rt)*N,Rt=u.z+Math.sin(rt)*N;W.push(c.addVertex(bt,Id(a,bt,Rt),Rt,vi(nt((Yh(rt,F,e)-.84)/.34+.45,0,1),.26).toArray()))}S.push(W)}for(let F=0;F<g;F++)for(let N=0;N<_;N++){const W=(N+1)%_;c.addQuad(S[F][N],S[F][W],S[F+1][W],S[F+1][N])}const w=[];for(let F=0;F<=m+v;F++){const N=x(F),W=b(F),Q=[];for(let rt=0;rt<_;rt++){const bt=2*Math.PI*rt/_,Rt=Yh(bt,F,e),$=N*(F<=m?.94+(Rt-.84)*.4:1),tt=u.x+Math.cos(bt)*$,ut=u.z+Math.sin(bt)*$;Q.push({i:c.addVertex(tt,W,ut,vi(nt((Rt-.84)/.34+.45,0,1),.2).toArray()),x:tt,z:ut,y:W})}w.push(Q)}const A=(F,N)=>F.y-l<=Ai+.1&&Xl(a,(F.x+N.x)*.5,(F.z+N.z)*.5)!==null;for(let F=0;F<w.length-1;F++)for(let N=0;N<_;N++){const W=(N+1)%_,Q=w[F][N],rt=w[F][W];A(Q,rt)||A(w[F+1][N],w[F+1][W])||c.addQuad(Q.i,rt.i,w[F+1][W].i,w[F+1][N].i)}const E=c.addVertex(u.x,l+Lr,u.z,vi(.5,.24).toArray()),C=w[w.length-1];for(let F=0;F<_;F++)c.addTri(E,C[(F+1)%_].i,C[F].i);const y=9,M=44,P=.9,U=l+Lr+$m,O=[];for(let F=0;F<=y;F++){const N=F/y,W=[];for(let Q=0;Q<=M;Q++){const rt=2*Math.PI*(Q%M)/M,bt=u.x+Math.cos(rt)*N*f,Rt=u.z+Math.sin(rt)*N*f,$=nn(bt,Rt),tt=ue(bt*.13+e,Rt*.13+e)-.5,ut=Math.max($+1.6,U);let ot=$+(ut-$)*Math.pow(1-N*N,.85)+tt*2.2*(1-N);const At=WT(a,bt,Rt);At!==null&&(ot=Math.max(ot,At+$m*.55));const Tt=Math.hypot(bt-u.x,Rt-u.z),Lt=Tt>u.r*P?Ex(a,bt,Rt,4):null;if(Lt){const Bt=Math.abs(Lt.lat)-a.hw;if(Bt<=0)ot=Do(a,bt,Rt,Lt.u,Lt.lat);else if(Bt<Ec){const j=Bt/Ec;ot=Ft(Do(a,bt,Rt,Lt.u,a.hw*Math.sign(Lt.lat)),ot,j*j*(3-2*j))}}W.push({i:c.addVertex(bt,ot,Rt,Qi(vi(.5+tt,.34),go,.14).toArray()),x:bt,z:Rt,dc:Tt})}O.push(W)}const G=F=>F.dc<u.r*1.02&&Xl(a,F.x,F.z)!==null;for(let F=0;F<y;F++)for(let N=0;N<M;N++){const W=[O[F][N],O[F][N+1],O[F+1][N+1],O[F+1][N]];W.some(G)||c.addQuad(W[0].i,W[1].i,W[2].i,W[3].i)}const z=(()=>{const F=Dr(a,Math.max(0,a.arc.len-2)),N=Dr(a,a.arc.len),W=Math.hypot(N.x-F.x,N.z-F.z)||1;return[(N.x-F.x)/W,(N.z-F.z)/W]})();return{geometry:c.toBufferGeometry(),ex:a,mouthY:n,floorY:l,origin:[i,n,t],dir:[z[0],0,z[1]],uMax:a.arc.len,chamber:{x:u.x,y:l,z:u.z,ceilY:l+Lr-1.5,r:u.r}}}function Yx(){if(!Ts||!Ts.geometry)return 0;const i=Ts.geometry.getAttribute("position"),t=Ts.geometry.getAttribute("color"),e=2.5,n=7,s=np.clone().lerp(Fu,.4);let r=0;for(let o=0;o<i.count;o++){const a=i.getX(o),c=i.getZ(o),l=ts(a,c);if(l!==null&&nn(a,c)-l>1.5){i.setY(o,l-e),r++,t&&t.setXYZ(o,s.r,s.g,s.b);continue}if(t)for(let u=0;u<8;u++){const h=u/8*Math.PI*2;if(ts(a+Math.cos(h)*n,c+Math.sin(h)*n)!==null){t.setXYZ(o,s.r,s.g,s.b);break}}}return i.needsUpdate=!0,t&&(t.needsUpdate=!0),Ts.geometry.computeVertexNormals(),Ts.geometry.computeBoundingSphere(),Zc&&typeof Zc.clearIn=="function"&&Zc.clearIn((o,a)=>ts(o,a)!==null),r}function EC(i,t){const e=va(t^23505),n=Vr(8,5),s=(p,_,g,m)=>ks([p,0,0],[0,_,0],[0,0,g],m),r=i.chamber,o=[],a=wa(new Ve({vertexColors:!0,roughness:.85,metalness:0,side:_e}));for(let p=0;p<Od;p++){const _=p/Od*Math.PI*2+e()*.5,g=r.r*(.28+e()*.34),m=r.x+Math.cos(_)*g,v=r.z+Math.sin(_)*g,x=new Ue,b=5+Math.floor(e()*5);for(let A=0;A<b;A++){const E=e()*Math.PI*2,C=Math.sqrt(e())*2.6,y=m+Math.cos(E)*C,M=v+Math.sin(E)*C,P=.75+e()*.45;x.bake(n,s(P*1.25,P*.85,P,[y,r.y+P*.7,M]),(U,O)=>Qi(xC,Fu,nt(.55-(O-r.y)*.25,0,1)).toArray())}const S=new Wt(x.toBufferGeometry(),a);S.name="nest-brood-"+p,S.visible=!1,S.castShadow=!1;const w=On([m,r.y+2.2,v],[0,0,0]);o.push({mesh:S,lamp:w,on:!1})}const c=new Ue,l=r.x+(e()-.5)*6,u=r.z+(e()-.5)*6,h=r.ceilY-3.2;c.bake(n,s(1.5,1.8,1.5,[l,h,u]),()=>yC.toArray());const d=new Wt(c.toBufferGeometry(),vx({map:_x(),strength:.7,emissive:.95,color:7829367,side:_e}));d.name="nest-glow-bead",d.visible=!1;const f=On([l,h,u],[0,0,0]);return{piles:o,bead:{mesh:d,lamp:f,on:!1}}}function qx(i,t){const e=ip(i,t);if(!e.ok)return e;const n=Math.floor(Math.abs(i)*131+Math.abs(t)*977)%9973,s=AC(i,t,n),r=new Re;r.name="founded-nest";const o=new Wt(s.geometry,wa(Qr({map:Vf(),strength:.62,side:_e})));o.name="founded-nest-shell",o.receiveShadow=!0,r.add(o);const a=EC(s,n);for(const h of a.piles)r.add(h.mesh);r.add(a.bead.mesh),Fd&&Fd.add(r),Yx();const c=Dr(s.ex,s.ex.descend),l=On([c.x,s.floorY+6,c.z],$c),u=On([i,s.mouthY-2.5,t],vC);return ce={x:i,z:t,group:r,mouth:{x:i,y:s.mouthY,z:t,r:s.ex.hw},chamber:s.chamber,floorY:s.floorY,axis:{origin:s.origin,dir:s.dir,length:s.uMax},brood:0,sealed:!1,_furnishing:a,_coldLight:l,_warmLight:u,_coldFade:1},P2(s.chamber.x,s.mouthY,s.chamber.z,aa*1.25,Wl),{ok:!0}}function $x(){return YT(nn)}function $l(){return qT()}const Bo=5,Fr=46,qh=26,Tc=20;function TC(i,t){const e=i.chamber,n=i.axis.dir[0],s=i.axis.dir[2],r=Math.hypot(n,s)||1,o=n/r,a=s/r,c=e.x+o*(aa*.55),l=e.z+a*(aa*.55),u=-a,h=o,d=new Ue,f=[];for(let p=0;p<=qh;p++){const _=p/qh,g=_*Fr,m=Math.sin(_*2.4+t*.017)*5*_,v=c+o*g+u*m,x=l+a*g+h*m,b=Bo*(1-.45*Math.pow(_,3)),S=[];for(let w=0;w<Tc;w++){const A=2*Math.PI*w/Tc,E=.88+.24*ue(A*1.7+g*.09,g*.13+t),C=b*E,y=e.y+Bo*.55+Math.sin(A)*C;S.push(d.addVertex(v+u*Math.cos(A)*C,Math.max(y,e.y+.15),x+h*Math.cos(A)*C,Qi(np,Wx,nt((E-.84)/.34+.45,0,1)*.8+.1).lerp(Fu,.22).multiplyScalar(.86).toArray()))}f.push(S)}for(let p=0;p<qh;p++)for(let _=0;_<Tc;_++){const g=(_+1)%Tc;d.addQuad(f[p][_],f[p][g],f[p+1][g],f[p+1][_])}return{geometry:d.toBufferGeometry(),end:{x:c+o*Fr,y:e.y,z:l+a*Fr},heading:[o,a],start:{x:c,z:l}}}function zu(){return ce&&ce.gallery?ce.gallery:null}function Bu(){if(!ce)return{ok:!1,reason:"no-nest"};if(ce.gallery)return{ok:!0,already:!0};const i=Math.floor(Math.abs(ce.x)*73+Math.abs(ce.z)*149)%9973,t=TC(ce,i),e=new Wt(t.geometry,wa(Qr({map:Vf(),strength:.62,side:_e})));e.name="first-gallery",e.receiveShadow=!0,ce.group.add(e);const[n,s]=t.heading;for(const o of bC)On([t.start.x+n*Fr*o.t,t.end.y+Bo*.55+1.5,t.start.z+s*Fr*o.t],o.c);ce.gallery={...t,mesh:e};const r=HT();return r&&(r.gallery={x:t.start.x,z:t.start.z,hx:t.heading[0],hz:t.heading[1],len:Fr*.72,hw:Bo*.62},r.galleryRoof=Bo*1.35,Yx()),{ok:!0}}function Zx(i){if(!ce)return 0;const t=Math.round(nt(i,0,Od));ce.brood=t,ce._furnishing.piles.forEach((n,s)=>{const r=s<t;n.mesh.visible=r,n.on=r,n.lamp.c[0]=r?Wh[0]:0,n.lamp.c[1]=r?Wh[1]:0,n.lamp.c[2]=r?Wh[2]:0});const e=ce._furnishing.bead;return e.on=t>=4,e.mesh.visible=e.on,e.lamp.c[0]=e.on?Xh[0]:0,e.lamp.c[1]=e.on?Xh[1]:0,e.lamp.c[2]=e.on?Xh[2]:0,t}function Kx(i=!0){ce&&(ce.sealed=i)}function CC(i){if(!ce)return;const t=ce.sealed?0:1,e=Math.min(1,i/3);ce._coldFade+=(t-ce._coldFade)*e*3;const n=nt(ce._coldFade,0,1);ce._coldLight.c[0]=$c[0]*n,ce._coldLight.c[1]=$c[1]*n,ce._coldLight.c[2]=$c[2]*n}function Jx(){const i=new Re;i.name="world";const t=DT();for(const d of t.doorLights)On(d.p,d.c);const e=W2(t.rooms),n=$2(),s=a2();i.add(s);const r=u2();i.add(r.mesh);const o=d2();i.add(o.group);const a=Ix({});i.add(a.mesh);const c=T2();i.add(c.group);const l=gC();i.add(l.group);const u=new Re;u.name="dug",i.add(u),SC(u,{lawn:s,grass:a});function h(d,f,p){a.update(d,f,p),CC(d),n.update(f),r.update(f),p&&(c.update(p),o.update(p,Aa()),I2(p.position))}return{group:i,update:h,grassFootprints:a.footprints,grass:a,resources:l.nodes,rooms:t.rooms,doorLights:t.doorLights,mushrooms:e.mushrooms,rocks:e.rocks}}const Ea=Object.freeze(Object.defineProperty({__proto__:null,LAWN_BOUNDS:Ne,MUSHROOMS:$n,QUEEN:fe,RESOURCE_NODES:Zn,RIG_FOUNDED:Qf,RIG_PROLOGUE:Jf,RIVER:Nn,ROCKS:Ri,START:Cd,TERRAIN_BOUNDS:Ei,TREE:te,TUNNEL_BACK:Ce,TUNNEL_MOUTH:We,TUNNEL_R:Ur,WATER_Y:es,applyNestShading:wa,canFoundAt:ip,containSurface:Ld,containUnderground:Nu,createWorld:Jx,daylightAt:L2,descentPath:$l,digGallery:Bu,distanceToWater:di,foundNest:qx,foundedMix:Aa,getFoundedNest:Xx,getGallery:zu,getRoomBranches:Yf,getUndergroundRadius:ET,getWallHoleAt:Xf,groundNormal:Sa,groundSlope:ir,groundY:Zt,harvestNode:tp,mushroomCollideR:Fx,nestFootprint:$x,nestOrigin:Or,nodesNear:mC,pitFactorAt:Ud,populateNest:Zx,profileR:ln,riverEdgeAt:nr,sampleTerrain:jT,sealNest:Kx,setFoundedMix:zx,shadeAt:Bx,soilAt:Zf,sunDir:Ou,treeTrunkRadius:$s,treeWalkBranch:ni,waterDepthAt:Fi},Symbol.toStringTag,{value:"Module"})),RC=[{hip:[.85,1.5,1.5],rest:[3.6,0,3.4],phase:0},{hip:[-.85,1.5,1.5],rest:[-3.6,0,3.4],phase:.5},{hip:[.95,1.4,.3],rest:[4.3,0,.2],phase:.5},{hip:[-.95,1.4,.3],rest:[-4.3,0,.2],phase:0},{hip:[.85,1.4,-1],rest:[4,0,-3.2],phase:0},{hip:[-.85,1.4,-1],rest:[-4,0,-3.2],phase:.5}],PC=[{hip:[.92,1.5,1.7],rest:[4.1,0,3.9],phase:0},{hip:[-.92,1.5,1.7],rest:[-4.1,0,3.9],phase:.5},{hip:[1.02,1.4,.4],rest:[4.9,0,.3],phase:.5},{hip:[-1.02,1.4,.4],rest:[-4.9,0,.3],phase:0},{hip:[.92,1.4,-1.15],rest:[4.5,0,-3.5],phase:0},{hip:[-.92,1.4,-1.15],rest:[-4.5,0,-3.5],phase:.5}],Qx={petiole:{at:[0,1.5,-1.25],r:[.42,.42,.42]},thorax:{at:[0,1.6,.35],r:[.95,.92,1.55]},head:{at:[0,1.62,2.55],r:[1.12,.98,1.05]},eye:{at:[.72,2.05,2.95],r:[.3,.26,.3]},gaster:[{at:[0,1.55,-3.1],r:[1.35,1.3,1.95]}],mandible:{root:[.52,1.42,3.35],tip:[.3,1.22,4.55],gape:.22,r:.15},antenna:{root:[.55,2.05,3.05],elbow:[1.35,3.15,4],tip:[1.75,3.05,5.9],r1:.13,r2:.1},legR:{thigh:.19,shin:.13,knee:.24,foot:.17}},IC={petiole:{at:[0,1.5,-1.2],r:[.5,.5,.62]},thorax:{at:[0,1.62,.5],r:[1.06,1.02,1.75]},head:{at:[0,1.66,2.7],r:[1.18,1.02,1.12]},eye:{at:[.76,2.12,3.1],r:[.3,.26,.3]},gaster:[{at:[0,1.55,-3.2],r:[1.6,1.54,2.1]},{at:[0,1.5,-5.4],r:[1.34,1.3,1.9]}],mandible:{root:[.55,1.45,3.5],tip:[.34,1.2,4.8],gape:.2,r:.17},antenna:{root:[.58,2.1,3.2],elbow:[1.4,3.3,4.2],tip:[1.85,3.2,6.1],r1:.14,r2:.11},legR:{thigh:.2,shin:.14,knee:.3,foot:.19}},Xr={id:"worker",label:"ouvrière",scale:1,legs:RC,body:Qx,breathes:!1,colors:{chitinA:13208124,chitinB:8738856,limb:9067304,mandible:13209663,eye:1051654},maxSpeed:15,sprint:1.75,turnRate:9,legLen:[2.7,2.9],stride:7,climbSpeed:20,bodyR:1.5,cam:{dist:36,min:10,max:85}},jx={id:"queen",label:"reine fondatrice",scale:2.2,legs:PC,body:IC,breathes:!0,colors:{chitinA:14525012,chitinB:9394725,limb:9724202,mandible:15253624,eye:1051654},maxSpeed:12.5,sprint:1.5,turnRate:4.2,legLen:[2.7,2.9],stride:7,climbSpeed:12,bodyR:1.5,cam:{dist:58,min:16,max:140}},LC={...Qx,mandible:{root:[.56,1.4,3.35],tip:[.3,1.14,5.05],gape:.3,r:.23}},ty={...Xr,id:"digger",label:"creuseuse",body:LC,colors:{chitinA:11040314,chitinB:8410150,limb:8016423,mandible:14197326,eye:1051654},maxSpeed:12,turnRate:7},In=jx;function DC(i){return[i.legLen[0]*i.scale,i.legLen[1]*i.scale]}function ca(i){return i.stride*i.scale}function rs(i){return i.bodyR*i.scale}const NC={worker:Xr,queen:jx,digger:ty};function UC(i){return NC[i]||Xr}const ey=new q("#393741"),OC=new q("#241D22"),ku=new ui({color:ey.clone(),side:Ke,depthWrite:!1});ku.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <begin_vertex>",`
    #include <begin_vertex>
    float oDist = -(modelViewMatrix * vec4(position, 1.0)).z;
    transformed += normal * clamp(0.0017 * oDist, 0.06, 0.16);
  `)};ku.customProgramCacheKey=()=>"inverted-hull";function FC(i){ku.color.copy(OC).lerp(ey,i)}function zC(i){const t=new Re;return t.name="outline-hull",i.traverse(e=>{if(!e.isMesh||!e.geometry)return;const n=new Wt(e.geometry,ku);n.castShadow=!1,n.receiveShadow=!1,n.frustumCulled=!1,t.add(n)}),t.renderOrder=-1,t}const $e={...Ea},BC=.82,kC=.55,HC=2.2;let $h=null,Zh=null;function ny(i,t){const e=i.chamber;let n=i.mouth.x-e.x,s=i.mouth.z-e.z;const r=Math.hypot(n,s);return r<.01?(n=0,s=1):(n/=r,s/=r),{mouth:{x:i.mouth.x,y:i.mouth.y,z:i.mouth.z,r:i.mouth.r},chamber:{x:e.x,y:i.floorY,z:e.z,r:e.r,ceilY:e.ceilY},out:[n,s],gallery:t?{start:{x:t.start.x,z:t.start.z},end:{x:t.end.x,y:t.end.y,z:t.end.z}}:null}}function GC(i,t){const e=ny(i,t),n=e.chamber,s=n.r*BC,r=Math.max(2,i.mouth.y-n.y),o=s+r,a=Math.max(i.mouth.r,5),c=e.gallery&&(()=>{const p=e.gallery.end.x-e.gallery.start.x,_=e.gallery.end.z-e.gallery.start.z,g=Math.hypot(p,_)*kC;return g>1?{x:e.gallery.start.x,z:e.gallery.start.z,dx:p/Math.hypot(p,_),dz:_/Math.hypot(p,_),len:g}:null})();function l(p,_){const g=p-n.x,m=_-n.z,v=g*e.out[0]+m*e.out[1],x=Math.abs(-g*e.out[1]+m*e.out[0]);return{s:v,lat:x}}function u(p,_){if(!c)return null;const g=p-c.x,m=_-c.z,v=g*c.dx+m*c.dz;return v<0||v>c.len?null:Math.abs(-g*c.dz+m*c.dx)<=HC?v:null}function h(p,_){if(Math.hypot(p-n.x,_-n.z)<=s)return!0;const g=l(p,_);return g.s>0&&g.s<=o&&g.lat<=a?!0:u(p,_)!==null}function d(p,_){let g=null;Math.hypot(p-n.x,_-n.z)<=s&&(g=n.y),u(p,_)!==null&&(g=Math.min(g===null?1/0:g,n.y+.15));const m=l(p,_);if(m.s>s&&m.s<=o&&m.lat<=a){const v=nt((m.s-s)/Math.max(.001,o-s),0,1),x=Ft(n.y,$e.groundY(p,_),v*v*(3-2*v));g=g===null?x:Math.min(g,x)}return g===null?$e.groundY(p,_):g}function f(p,_){return Math.hypot(p-n.x,_-n.z)<=s?Math.max(4,n.ceilY-n.y):8}return{contains:h,floorY:d,headroom:f,approx:!0,landmarks:e}}function VC(){const i=typeof $e.getFoundedNest=="function"?$e.getFoundedNest():null;if(!i||!i.chamber)return null;const t=typeof $e.getGallery=="function"?$e.getGallery():null,e=typeof $e.nestFootprint=="function"?$e.nestFootprint():null;return e&&typeof e.contains=="function"?{contains:(n,s)=>e.contains(n,s),floorY:(n,s)=>e.floorY(n,s),headroom:(n,s)=>typeof e.headroom=="function"?e.headroom(n,s):8,approx:!1,landmarks:ny(i,t)}:GC(i,t)}function zi(){const i=typeof $e.getFoundedNest=="function"?$e.getFoundedNest():null;if(!i)return $h=null,Zh=null,null;const t=typeof $e.getGallery=="function"?$e.getGallery():null,e=`${i.x},${i.z},${t?1:0},${typeof $e.nestFootprint=="function"?1:0}`;return e!==$h&&($h=e,Zh=VC()),Zh}function sp(i,t){const e=zi();return!!e&&e.contains(i,t)}function iy(i,t,e,n,s,r=10){let o=t,a=e,c=n,l=s;for(let u=0;u<r;u++){const h=(o+c)*.5,d=(a+l)*.5;i.contains(h,d)?(o=h,a=d):(c=h,l=d)}return[o,a]}function WC(){const i=zi();if(!i)return null;const t=typeof $e.descentPath=="function"?$e.descentPath():null;if(t&&t.length)return{x:t[0].x,z:t[0].z,r:0,fromPath:!0};const e=i.landmarks.chamber;let n=null;for(let s=0;s<72;s++){const r=s/72*Math.PI*2;for(let o=4;o<=80;o+=1.5){const a=e.x+Math.cos(r)*o,c=e.z+Math.sin(r)*o;i.contains(a,c)&&($e.groundY(a,c)-i.floorY(a,c)>1.5||(!n||o>n.r)&&(n={x:a,z:c,r:o}))}}return n||{x:i.landmarks.mouth.x,z:i.landmarks.mouth.z,r:0,guessed:!0}}function XC(i,t){let e={x:t.start.x,z:t.start.z};for(let n=1;n<=20;n++){const s=n/20,r=Ft(t.start.x,t.end.x,s),o=Ft(t.start.z,t.end.z,s);if(!i.contains(r,o))break;e={x:r,z:o}}return e}function YC(i){const t=zi();if(!t)return null;const e=t.landmarks,n=WC(),s=e.gallery;return{approx:t.approx,mouth:e.mouth,chamber:e.chamber,entry:n,gallery:s?{...s,walk:XC(t,s)}:null,inside:i?t.contains(i.x,i.z):!1,floorY:i?t.floorY(i.x,i.z):null,headroom:i?t.headroom(i.x,i.z):null,roofed:i?t.contains(i.x,i.z)&&Number.isFinite(t.headroom(i.x,i.z))&&t.headroom(i.x,i.z)>0:!1}}const on=Ix({}).footprints,Hu=42,qC=4.5,$C=20,ZC=.93;function KC(i){return qC*(i.scale||1)}function Cc(i){const t=i.profile||In;return(t.climbSpeed!==void 0?t.climbSpeed:$C)*(i.scale||1)}const JC=6,sy=.05,QC=(()=>{const i=ni.point(0),t=ni.tipPos;return Math.hypot(t[0]-i[0],t[1]-i[1],t[2]-i[2])})();function jC(i){if(sp(i.x,i.z))return null;let t=null,e=KC(i);for(let s=0;s<on.length;s++){const r=on[s];if(r.h<Hu)continue;const o=Math.hypot(r.x-i.x,r.z-i.z);o<e&&(e=o,t={kind:"grass",i:s})}const n=Math.hypot(te.x-i.x,te.z-i.z)-te.w;return n<JC*(i.scale||1)&&n<e&&(t={kind:"tree"}),t}function tR(i,t){i.climb=t.kind==="tree"?{kind:"tree",seg:"trunk",t:.02}:{kind:"grass",i:t.i,t:.03},i.speed=0}function zd(i){let t;if(i.climb.kind==="tree"){const e=Yl(te,i.climb.t);t=ge(ss(te,i.climb.t),Ht(e.normal,$s(i.climb.t)))}else t=ss(on[i.climb.i],i.climb.t);i.climb=null,i.x=t[0],i.z=t[2],i.y=Zt(t[0],t[2]),i.speed=0}function eR(i,t){if(i.climb){if(i.climb.kind==="grass"){zd(i);return}i.climb.seg==="trunk"&&i.climb.t<=sy&&zd(i);return}t&&tR(i,t)}function nR(i,t){return i.climb?i.climb.kind==="tree"?i.climb.seg==="trunk"&&i.climb.t<=sy?"redescendre du tronc":"reculer pour redescendre":"redescendre du brin":t?t.kind==="tree"?"grimper au tronc":"grimper au brin d'herbe":null}function iR(i,t,e){let n=!1,s=null;if(i.climb.kind==="tree")if(i.climb.seg==="trunk"){i.climb.t=nt(i.climb.t+t*(Cc(i)/te.h)*e,0,ni.splitT);const o=Yl(te,i.climb.t),a=ge(ss(te,i.climb.t),Ht(o.normal,$s(i.climb.t)));i.x=a[0],i.y=a[1],i.z=a[2],i.climb.t<=5e-4&&t<0?n=!0:i.climb.t>=ni.splitT&&t>0&&(s="branch")}else{i.climb.u=nt(i.climb.u+t*(Cc(i)/QC)*e,0,1);const o=ni.basis(i.climb.u),a=ge(o.pos,Ht(o.up,ni.radius(i.climb.u)));i.x=a[0],i.y=a[1],i.z=a[2],i.climb.u<=5e-4&&t<0&&(s="trunk")}else{const o=on[i.climb.i];i.climb.t=nt(i.climb.t+t*(Cc(i)/o.h)*e,0,ZC);const a=ss(o,i.climb.t);i.x=a[0],i.y=a[1],i.z=a[2],i.climb.t<=5e-4&&t<0&&(n=!0)}const r=Cc(i);i.speed=ji(i.speed,Math.abs(t)*r,7,e),i.travel+=Math.abs(t)*r*e,n?zd(i):s==="branch"?(i.climb.seg="branch",i.climb.u=0):s==="trunk"&&(i.climb.seg="trunk",i.climb.t=ni.splitT)}function Zl(i,t,e){return i.floorY===null||i.floorY===void 0?Zt(t,e):i.floorY}function ry(i,t,e,n=In){return{x:i,y:t,z:e,yaw:0,speed:0,travel:0,bob:0,floorY:null,climb:null,legsInit:!1,profile:n,scale:n.scale}}function oy(i=In){return i.legs.map(()=>({planted:[0,0,0],from:[0,0,0],to:[0,0,0],swinging:!1,prevP:0}))}function sR(i){if(i.climb){if(i.climb.kind==="tree"){if(i.climb.seg==="trunk"){const c=Yl(te,i.climb.t);return{side:c.width,up:c.normal,fwd:c.tangent}}const a=ni.basis(i.climb.u);return{side:a.side,up:a.up,fwd:a.fwd}}const o=Yl(on[i.climb.i],i.climb.t);return{side:o.width,up:o.normal,fwd:o.tangent}}const t=i.floorY===null||i.floorY===void 0?Sa(i.x,i.z):[0,1,0],e=ve([t[0]*.7,1,t[2]*.7]),n=[Math.sin(i.yaw),0,Math.cos(i.yaw)],s=ve(Hn(e,n)),r=Hn(s,e);return{side:s,up:e,fwd:r}}function rp(i){const t=sR(i),e=i.scale||1,n=1.05*e+i.bob,s=i.climb?ge([i.x,i.y,i.z],Ht(t.up,n)):[i.x,Zl(i,i.x,i.z)+n,i.z];return{side:Ht(t.side,e),up:Ht(t.up,e),fwd:Ht(t.fwd,e),p:s,basis:t,scale:e}}function Yn(i,t){const[e,n,s]=t;return[i.side[0]*e+i.up[0]*n+i.fwd[0]*s+i.p[0],i.side[1]*e+i.up[1]*n+i.fwd[1]*s+i.p[1],i.side[2]*e+i.up[2]*n+i.fwd[2]*s+i.p[2]]}function rR(i,t,e,n,s){const r=Ni(t,i),o=Math.hypot(r[0],r[1],r[2])||1,a=nt(o,.05,e+n-.02),c=Ht(r,1/o),l=(e*e-n*n+a*a)/(2*a),u=Math.sqrt(Math.max(e*e-l*l,0)),h=s[0]*c[0]+s[1]*c[1]+s[2]*c[2],d=ve(Ni(s,Ht(c,h)));return ge(ge(i,Ht(c,l)),Ht(d,u))}function Kc(i,t,e){const n=rp(i),s=n.basis,r=i.profile||In,o=i.scale||1,a=ca(r),c=i.travel/a,l=!!i.climb;for(let u=0;u<r.legs.length;u++){const h=r.legs[u],d=t[u],f=Yn(n,h.rest);l||(f[1]=Zl(i,f[0],f[2])),i.legsInit||(d.planted=f.slice(),d.from=f.slice(),d.to=f.slice());let p=(c+h.phase)%1;if(p<0&&(p+=1),p>=.5&&d.prevP<.5){d.swinging=!0,d.from=d.planted.slice();const _=ge(f,Ht(s.fwd,a*.38*nt(i.speed/(16*o),0,1.4)));l||(_[1]=Zl(i,_[0],_[2])),d.to=_}if(p<.5&&d.prevP>=.5&&(d.swinging=!1,d.planted=d.to.slice()),d.prevP=p,d.swinging){const _=(p-.5)*2,g=Math.sin(_*Math.PI)*1.5*o;d.planted=[Ft(d.from[0],d.to[0],_),Ft(d.from[1],d.to[1],_)+g,Ft(d.from[2],d.to[2],_)]}i.speed<.4*o&&!d.swinging&&(d.planted[0]=ji(d.planted[0],f[0],4,e),d.planted[1]=ji(d.planted[1],f[1],4,e),d.planted[2]=ji(d.planted[2],f[2],4,e))}i.legsInit=!0}const ko=0,oR=1;function b0(i){const t=i.legs.length;return{sphere:i.body.gaster.length+4+t*2,cyl:6+t*2}}function Rc(i){return[-i[0],i[1],i[2]]}function ay(i,t,e,n,s){const r=i.body,o=i.colors,[a,c]=DC(i),l=rp(t),u=l.basis,h=l.scale,d=(b,S,w,A=1)=>s(ko,Yn(l,b),Ht(u.side,S[0]*h*A),Ht(u.up,S[1]*h*A),Ht(u.fwd,S[2]*h*A),w),f=(b,S,w,A)=>{const E=xn(b,S,w);s(oR,E.p,E.x,E.y,E.z,A)},p=i.breathes?1+Math.sin(n*.55)*.04:1;for(let b=0;b<r.gaster.length;b++)d(r.gaster[b].at,r.gaster[b].r,o.chitinB,p);d(r.petiole.at,r.petiole.r,o.chitinB),d(r.thorax.at,r.thorax.r,o.chitinA),d(r.head.at,r.head.r,o.chitinA),d(r.eye.at,r.eye.r,o.eye),d(Rc(r.eye.at),r.eye.r,o.eye);const _=r.mandible,g=_.gape+Math.sin(n*3.1)*.06+Math.max(0,Math.min(t.speed,14))*.012,m=[_.tip[0]+g,_.tip[1],_.tip[2]];f(Yn(l,_.root),Yn(l,m),_.r*h,o.mandible),f(Yn(l,Rc(_.root)),Yn(l,Rc(m)),_.r*h,o.mandible);const v=r.antenna;for(const b of[1,-1]){const S=Math.sin(n*2.4+(b>0?0:1.1))*.42,w=Math.cos(n*1.7+(b>0?.4:1.9))*.3,A=M=>b>0?M:Rc(M),E=Yn(l,A(v.root)),C=Yn(l,A([v.elbow[0]+S*.25,v.elbow[1]+w*.3,v.elbow[2]])),y=Yn(l,A([v.tip[0]+S,v.tip[1]+w,v.tip[2]]));f(E,C,v.r1*h,o.limb),f(C,y,v.r2*h,o.limb)}const x=r.legR;for(let b=0;b<i.legs.length;b++){const S=i.legs[b],w=e[b],A=Yn(l,S.hip),E=w.planted,C=S.hip[0]>0?u.side:Ht(u.side,-1),y=ve([u.up[0]+C[0]*.75,u.up[1]+C[1]*.75,u.up[2]+C[2]*.75]),M=rR(A,E,a,c,y);f(A,M,x.thigh*h,o.limb),f(M,E,x.shin*h,o.limb);const P=x.knee*h,U=x.foot*h;s(ko,M,[P,0,0],[0,P,0],[0,0,P],o.limb),s(ko,E,[U,0,0],[0,U,0],[0,0,U],o.limb)}}let Kh=null,S0=null;function cy(){return Kh||(Kh=new js(1,12,8),S0=new Qs(1,1,1,7).translate(0,.5,0)),{sphere:Kh,cyl:S0}}const w0=new Map;function aR(i){let t=w0.get(i);return t||(t=new Ve({color:i,roughness:.55,metalness:.05}),w0.set(i,t)),t}const Jh=new Nt,A0=new I,E0=new I,T0=new I,C0=new I;function ly(i,t,e,n){return A0.set(t[0],t[1],t[2]),E0.set(e[0],e[1],e[2]),T0.set(n[0],n[1],n[2]),Jh.makeBasis(A0,E0,T0),C0.set(i[0],i[1],i[2]),Jh.setPosition(C0),Jh}function cR(i=In){const t=cy(),e=new Re;e.name="ant";const n=[];function s(r,o,a){let c=0;ay(i,r,o,a,(l,u,h,d,f,p)=>{let _=n[c];_||(_=new Wt(l===ko?t.sphere:t.cyl,aR(p)),_.matrixAutoUpdate=!1,_.castShadow=!0,n[c]=_,e.add(_)),_.matrix.copy(ly(u,h,d,f)),c++})}return{group:e,updatePose:s}}function lR(i,t=In){const e={},n={camYaw:0,wantPitch:-.19,camDist:t.cam.dist,dragging:!1},s={active:!1,id:-1,ox:0,oy:0,dx:0,dy:0};let r=-1,o=0,a=0,c=!1,l=!1,u=null;function h(C){for(let y=0;y<C.length;y++)if(e[C[y]])return!0;return!1}function d(C){e[C.code]=!0,C.code==="KeyE"&&(c=!0),C.code==="KeyH"&&(l=!0),C.code==="Digit5"&&(u="worker"),C.code==="Digit6"&&(u="digger"),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].indexOf(C.code)>=0&&C.preventDefault()}function f(C){e[C.code]=!1}function p(){for(const C in e)e[C]=!1}function _(C){i.setPointerCapture(C.pointerId),C.pointerType==="touch"&&C.clientX<window.innerWidth*.5?(s.active=!0,s.id=C.pointerId,s.ox=C.clientX,s.oy=C.clientY):(n.dragging=!0,r=C.pointerId,o=C.clientX,a=C.clientY)}function g(C){if(s.active&&C.pointerId===s.id){const y=nt(C.clientX-s.ox,-46,46),M=nt(C.clientY-s.oy,-46,46);s.dx=y/46,s.dy=M/46;return}n.dragging&&C.pointerId===r&&(n.camYaw-=(C.clientX-o)*.006,n.wantPitch=nt(n.wantPitch-(C.clientY-a)*.004,-.85,.55),o=C.clientX,a=C.clientY)}function m(C){s.active&&C.pointerId===s.id&&(s.active=!1,s.dx=0,s.dy=0),C.pointerId===r&&(n.dragging=!1,r=-1)}function v(C){n.camDist=nt(n.camDist+C.deltaY*.03*t.scale,t.cam.min,t.cam.max),C.preventDefault()}window.addEventListener("keydown",d),window.addEventListener("keyup",f),window.addEventListener("blur",p),i.addEventListener("pointerdown",_),i.addEventListener("pointermove",g),i.addEventListener("pointerup",m),i.addEventListener("pointercancel",m),i.addEventListener("wheel",v,{passive:!1});function x(){let C=0,y=0;h(["KeyW","KeyZ","ArrowUp"])&&(y+=1),h(["KeyS","ArrowDown"])&&(y-=1),h(["KeyA","KeyQ","ArrowLeft"])&&(C-=1),h(["KeyD","ArrowRight"])&&(C+=1),s.active&&(C+=s.dx,y-=s.dy);const M=Math.min(Math.hypot(C,y),1),P=!!(e.ShiftLeft||e.ShiftRight);return{ix:C,iy:y,mag:M,sprint:P}}function b(){const C=c;return c=!1,C}function S(){const C=l;return l=!1,C}function w(){const C=u;return u=null,C}function A(){return!!e.KeyE}function E(){window.removeEventListener("keydown",d),window.removeEventListener("keyup",f),window.removeEventListener("blur",p),i.removeEventListener("pointerdown",_),i.removeEventListener("pointermove",g),i.removeEventListener("pointerup",m),i.removeEventListener("pointercancel",m),i.removeEventListener("wheel",v)}return{state:n,readMoveIntent:x,consumeInteract:b,consumeHelp:S,consumeCaste:w,isInteractHeld:A,dispose:E}}let Qh=null;function uy(){return Qh||(Qh=Yf()),Qh}function hy(i,t){const e=uy();for(const n in e){const s=e[n],r=i-s.origin[0],o=t-s.origin[2],a=r*s.dir[0]+o*s.dir[2];if(a<=-.5||a>=s.uMax+1)continue;const c=r*s.side[0]+o*s.side[2],l=s.profR(nt(a,0,s.uMax));if(!(Math.abs(c)>=l*.82+2))return s}return null}function dy(i,t,e){return(t-i.origin[0])*i.dir[0]+(e-i.origin[2])*i.dir[2]}function uR(i){return 2*i.uEnd-i.uMax}function hR(i,t){const e=hy(i,t);return e?e.profR(nt(dy(e,i,t),0,e.uMax)):ln(t)}function dR(i,t){let e=t,n=t;const s=uy();for(const r in s){const o=s[r],a=nt(1-Math.abs(i-o.origin[2])/o.doorFalloff,0,1);if(a<=0)continue;const c=Ft(t,Math.abs(o.origin[0])+1.5,a);o.dir[0]>0?c>e&&(e=c):c>n&&(n=c)}return{limPos:e,limNeg:n}}const fy=.14;function py(i){const t=i(0),e=i(Math.PI),n=i(Math.PI*.5);return{aPos:Math.max(Math.abs(t[0]),1.5),aNeg:Math.max(Math.abs(e[0]),1.5),cy:t[1],b:Math.max(n[1]-t[1],.8)}}function fR(i){return py(t=>{const e=Ns(t,i,fy);return[e[0],e[1]]})}function pR(i,t){return py(e=>{const n=i.pointAt(e,t,fy);return[(n[0]-i.origin[0])*i.side[0]+(n[2]-i.origin[2])*i.side[2],n[1]]})}function R0(i,t,e){const n=t>=0?i.aPos:i.aNeg,s=Math.min(Math.abs(t)/n,1),r=i.b*Math.max(Math.sqrt(Math.max(0,1-s*s)),.3),o=Math.max(i.cy-r,e+1.6);return{yMin:o,yMax:Math.max(i.cy+r,o+.6)}}function mR(i,t){if(t.br){const u=t.br,h=i[0]-u.origin[0],d=i[2]-u.origin[2],f=h*u.dir[0]+d*u.dir[2],p=h*u.side[0]+d*u.side[2],_=t.uAnt>t.corridorLen?t.corridorLen-1:-.3,g=nt(f,_,u.uMax-.3),m=pR(u,nt(g,0,u.uMax)),v=nt(p,-m.aNeg,m.aPos);i[0]=u.origin[0]+u.dir[0]*g+u.side[0]*v,i[2]=u.origin[2]+u.dir[2]*g+u.side[2]*v;const x=R0(m,v,Zt(i[0],i[2]));return i[1]=nt(i[1],x.yMin,x.yMax),Math.hypot(g-f,v-p)}const e=i[2],n=i[0],s=nt(e,Ce+5,We+3);if(s>-14){const u=ln(s)*.82*(1+Math.pow((s+14)/17,2)*.9),h=nt(n,-u,u);return i[0]=h,i[2]=s,i[1]=Math.max(i[1],Zt(h,s)+2.2),Math.hypot(h-n,s-e)}const r=fR(s),{limPos:o,limNeg:a}=dR(s,Math.max(ln(s)*.82-1.6,3)),c=nt(n,-Math.max(a,r.aNeg),Math.max(o,r.aPos));i[0]=c,i[2]=s;const l=R0(r,c,Zt(c,s));return i[1]=nt(i[1],l.yMin,l.yMax),Math.hypot(c-n,s-e)}const Pc=10.5;function gR(i){const t=Zt(fe[0],fe[2]);if(i[1]>t+8.5)return;const e=i[0]-fe[0],n=i[2]-fe[2],s=Math.hypot(e,n);if(!(s>=Pc)){if(s<.001){i[0]+=Pc;return}i[0]=fe[0]+e/s*Pc,i[2]=fe[2]+n/s*Pc}}function my(i){const t=hy(i.x,i.z);if(!t)return{br:null};const e=dy(t,i.x,i.z);return{br:t,uAnt:e,corridorLen:uR(t)}}const P0=1.8,_R=1;function xR(i,t,e){let n=0;if(!t.contains(i[0],i[2])){const[o,a]=iy(t,e.x,e.z,i[0],i[2]);n=Math.hypot(o-i[0],a-i[2]),i[0]=o,i[2]=a}const s=t.floorY(i[0],i[2]),r=t.headroom(i[0],i[2]);return i[1]=nt(i[1],s+P0,s+Math.max(P0+.6,r-_R)),n}function op(i,t,e){const n=zi();return n&&n.contains(t.x,t.z)?xR(i,n,t):t.z<We-2?(gR(i),mR(i,e||my(t))):(i[1]=Math.max(i[1],Zt(i[0],i[2])+2.2),0)}function gy(i,t,e,n,s=1){return[i[0]-Math.sin(t)*Math.cos(e)*n,i[1]-Math.sin(e)*n+3.4*s,i[2]-Math.cos(t)*Math.cos(e)*n]}const I0=8,yR=6,_y=.9,vR=[0,.25,.5,.8],L0=-1.25;function MR(i,t,e,n,s,r){let o=n,a=1/0;const c=Math.min(yR*(s.scale||1),n);for(let l=0;l<=I0;l++){const u=Ft(n,c,l/I0),h=op(gy(i,t,e,u,s.scale||1),s,r);if(h<=_y)return{d:u,err:h};h<a&&(a=h,o=u)}return{d:o,err:a}}function bR(i,t,e,n,s,r){let o=null;for(const a of vR){const c=Math.max(e-a,L0),l=MR(i,t,c,n,s,r);if(l.err<=_y)return{pitch:c,d:l.d};if((!o||l.err<o.err)&&(o={pitch:c,d:l.d,err:l.err}),c<=L0)break}return o}function SR(i,t,e,n){const s=i.scale||1,r=i.climb?[i.x,i.y+2*s,i.z]:[i.x,Zl(i,i.x,i.z)+2.6*s,i.z],o=zi(),a=!!o&&o.contains(i.x,i.z),c=a?o.headroom(i.x,i.z):0,l=!a&&i.z<We-2,u=a||l,h=l?my(i):null,d=l?hR(i.x,i.z):a?c:Ur,f=u?Math.min(n,Math.max(13.5*s,d*1.5)):n,p=u?bR(r,t,e,f,i,h):{pitch:e,d:f},_=gy(r,t,p.pitch,p.d,s);op(_,i,h);const g=[r[0]+Math.sin(i.yaw)*3*s,r[1]+.4*s,r[2]+Math.cos(i.yaw)*3*s];return{eye:_,aim:g}}function wR(i){const t={eye:null,aim:null};function e(n,s,r,o,a,c){const l=c||SR(n,s,r,o);(!t.eye||c&&c.cut)&&(t.eye=l.eye.slice(),t.aim=l.aim.slice());const u=c?5:6.5;for(let h=0;h<3;h++)t.eye[h]=ji(t.eye[h],l.eye[h],u,a),t.aim[h]=ji(t.aim[h],l.aim[h],u*1.4,a);c||op(t.eye,n),i.position.set(t.eye[0],t.eye[1],t.eye[2]),i.lookAt(new I(t.aim[0],t.aim[1],t.aim[2]))}return t.update=e,t}function Ho(i,t,e,n){const s=(t-i+Math.PI*3)%(Math.PI*2)-Math.PI;return i+s*(1-Math.exp(-e*n))}const jh={GRASS:"grass",ROCKS:"rocks",MUSHROOMS:"mushrooms"};let Yr=null,Bd="linear";function xy(i,t="external"){const e={...i||{}};return typeof e.queryDisc!="function"?(Yr=null,Bd="linear",!1):(Yr=e,Bd=t,!0)}function yy(){if(Yr)return;const i=typeof globalThis<"u"?globalThis:null;if(!i)return;const t=i.__spatialIndex||i.__spatial||null;t&&xy(t,"global")}function td(i,t,e,n,s,r){if(yy(),Yr)return Yr.queryDisc(i,t,e,n,r),!0;for(let o=0;o<s.length;o++)r(s[o],o);return!1}function AR(){return yy(),{indexed:!!Yr,source:Bd}}function ER(i){return i.w*.75}const vy=.01,D0=ss(te,vy),TR=$s(vy)*.88,My=rs(In)*2+.6,CR=My+.2,RR=14;function PR(i,t,e,n){for(let s=.3;s<=RR;s+=.3){const r=i+e*s,o=t+n*s,a=Nu(r,o);if(Math.hypot(a[0]-r,a[1]-o)>.05)return s}return 1/0}const by=[];for(let i=0;i<8;i++)by.push([Math.cos(i*Math.PI/4),Math.sin(i*Math.PI/4)]);function IR(i,t,e){let n=0,s=1/0;const r=by.map(([c,l],u)=>{const h=PR(i,t,c,l);return h<s&&(s=h,n=u),h});if(s===1/0||s-e>=CR)return e;const o=Math.max(e,s+.3);return r[(n+4)%8]-o<My?0:o}const LR=1;let ed=null;function DR(){return ed||(ed=Object.values(Yf())),ed}function NR(i,t){for(const e of DR()){const n=i-e.origin[0],s=t-e.origin[2],r=n*e.dir[0]+s*e.dir[2];if(r<=-.5||r>=e.uMax+1)continue;const o=n*e.side[0]+s*e.side[2],a=Math.max(e.profR(nt(r,0,e.uMax))*.82-1.2,2.2);if(!(Math.abs(o)>=a+3))return a}return Math.max(ln(t)*.82-1.6,3)}function UR(i,t,e,n){return 2*NR(i,t)>=2*n+2*e+LR}let Ic=null,N0=null;function Sy(i=rs(In)){return(!Ic||Ic.length!==$n.length||N0!==i)&&(N0=i,Ic=$n.map(t=>{const e=IR(t.x,t.z,Fx(t));return e>0&&UR(t.x,t.z,e,i)?e:0})),Ic}let _o=null,U0=-1;function OR(){if(!_o||U0!==on.length){U0=on.length,_o=[];for(let i=0;i<on.length;i++){const t=on[i];t.h>=Hu&&_o.push({x:t.x,z:t.z,r:ER(t)})}_o.push({x:D0[0],z:D0[2],r:TR})}return _o}let Lc=null,O0=-1;function FR(){const i=Sy();if(!Lc||O0!==$n.length){O0=$n.length,Lc=[];for(let t=0;t<$n.length;t++)i[t]>0&&Lc.push({x:$n[t].x,z:$n[t].z,r:i[t]})}return Lc}let nd=null,F0=-1;function zR(){return(!nd||F0!==Ri.length)&&(F0=Ri.length,nd=Ri.map(i=>({x:i.x,z:i.z,r:i.r}))),nd}function id(i){let t=0;for(let e=0;e<i.length;e++)i[e].r>t&&(t=i[e].r);return t}function wy(i,t,e,n=0){const s=r=>e(r.x,r.z,r.r);if(!sp(i,t)){if(t<We+6){const r=FR();td(jh.MUSHROOMS,i,t,n+id(r),r,s)}if(t>We-6){const r=zR(),o=OR();td(jh.ROCKS,i,t,n+id(r),r,s),td(jh.GRASS,i,t,n+id(o),o,s)}}}function BR(i,t,e=0){let n=0;return wy(i,t,(s,r,o)=>{const a=o+e-Math.hypot(i-s,t-r);a>n&&(n=a)},e),n}function z0(i){const t={x:0,z:0,n:0},e=rs(i.profile||In);return wy(i.x,i.z,(n,s,r)=>{const o=r+e,a=i.x-n,c=i.z-s,l=Math.hypot(a,c);if(l>=o||l<.001)return;const u=o-l;t.x+=a/l*u,t.z+=c/l*u,t.n++},e),t}function kd(i,t){const e=z0(i);if(e.n===0)return;const n=e.x/e.n,s=e.z/e.n;i.x+=n,i.z+=s;const r=Math.hypot(n,s);if(r>5e-4){const a=n/r,l=-(s/r),u=a,h=Math.sin(i.yaw)*l+Math.cos(i.yaw)*u,d=t*.6*(h>=0?1:-1);i.x+=l*d,i.z+=u*d}const o=z0(i);o.n>0&&(i.x+=o.x/o.n,i.z+=o.z/o.n)}const kR=11,B0=2,k0=3.3;function HR(i,t,e){const n=zi();if(!n)return!1;const s=n.contains(t,e),r=n.contains(i.x,i.z);if(!s)return r?Zt(t,e)-n.floorY(i.x,i.z)>B0?(i.x=t,i.z=e,!1):!0:!1;if(r)return!0;const[o,a]=iy(n,t,e,i.x,i.z),c=i.x,l=i.z;if(i.x=o,i.z=a,Number.isFinite(n.headroom(o,a)))return!0;let u=c-t,h=l-e;const d=Math.hypot(u,h);if(d<1e-6)return!0;u/=d,h/=d;const f=o+u*k0,p=a+h*k0;return n.contains(f,p)||Math.abs(Zt(f,p)-n.floorY(o,a))>B0?!0:(i.x=c,i.z=l,!1)}function GR(i,t,e){const n=ve([e[0]-t[0],0,e[2]-t[2]]),s=Hn(n,[0,1,0]);return{wishX:n[0]*i.iy+s[0]*i.ix,wishZ:n[2]*i.iy+s[2]*i.ix}}function VR(i,t,e,n){const s=i.profile||In,r=i.scale||1,o=rs(s),a=s.maxSpeed*(e.sprint?s.sprint:1);e.mag>.02?(i.yaw=Ho(i.yaw,Math.atan2(t.wishX,t.wishZ),s.turnRate,n),i.speed=ji(i.speed,a*e.mag,7,n)):i.speed=ji(i.speed,0,9,n);const c=i.speed*n,l=i.x,u=i.z;if(i.x+=Math.sin(i.yaw)*c,i.z+=Math.cos(i.yaw)*c,i.travel+=c,kd(i,c),HR(i,l,u)){const h=zi();i.floorY=h.approx?h.floorY(i.x,i.z):null,i.y=h.floorY(i.x,i.z),i.bob=Math.sin(i.travel*(Math.PI*2/ca(s))*2)*.13*r*nt(i.speed/(8*r),0,1);return}if(i.floorY=null,i.z<We){const[h,d]=Nu(i.x,i.z);i.x=h,i.z=d;const f=kR+o,p=i.x-fe[0],_=i.z-fe[2],g=Math.hypot(p,_);if(g<f&&g>.001){const m=p/g,v=_/g;i.x=fe[0]+m*f,i.z=fe[2]+v*f;const x=-v,b=m,S=Math.sin(i.yaw)*x+Math.cos(i.yaw)*b,w=c*.75*(S>=0?1:-1);i.x+=x*w,i.z+=b*w}}else{const h=nt(i.z,Ne.z0,Ne.z1);i.x=Math.max(Ld(i.x,h)[0],Ld(i.x-o,h)[0]+o),i.x=Math.min(i.x,Ne.x1-o*2),i.z=Math.min(i.z,Ne.z1-o*2)}i.y=Zt(i.x,i.z),i.bob=Math.sin(i.travel*(Math.PI*2/ca(s))*2)*.13*r*nt(i.speed/(8*r),0,1)}const Mn={...Ea},H0={terre:{label:"terre meuble",diggable:!0,quality:.9},argile:{label:"argile",diggable:!0,quality:.72},litiere:{label:"litière de feuilles",diggable:!0,quality:.66},sable:{label:"sable",diggable:!0,quality:.38},roche:{label:"roche",diggable:!1,quality:0},boue:{label:"boue détrempée",diggable:!1,quality:0}},Hd=32,Dc=9,Jc=18,Nc=55,WR=190,Uc=55,Gd=14,XR={soil:.28,slope:.16,water:.2,shade:.18,food:.18},YR={soil:"terre",moss:"litiere",sand:"sable",rock:"roche",water:"boue",terre:"terre",argile:"argile",litiere:"litiere",sable:"sable",roche:"roche",boue:"boue"};function qR(i,t){if(typeof Mn.soilAt=="function"){const e=Mn.soilAt(i,t),n=YR[typeof e=="string"?e:e&&e.kind],s=H0[n];if(s)return{...s,kind:n,assumed:!1}}return{...H0.terre,kind:"terre",assumed:!0}}function $R(i,t){if(typeof Mn.slopeAt=="function")return{deg:Mn.slopeAt(i,t),assumed:!1};const e=Mn.groundNormal(i,t);return{deg:Math.acos(nt(e[1],-1,1))*180/Math.PI,assumed:!1}}function ZR(i,t){return typeof Mn.waterDistance=="function"?{d:Mn.waterDistance(i,t),assumed:!1}:typeof Mn.distanceToWater=="function"?{d:Mn.distanceToWater(i,t),assumed:!1}:{d:null,assumed:!0}}function KR(i,t){if(typeof Mn.shadeAt=="function")return{v:nt(Mn.shadeAt(i,t),0,1),assumed:!1};const e=Mn.TREE,n=e?nt(1-Math.hypot(i-e.x,t-e.z)/90,0,1):0;let s=0;for(let r=0;r<on.length;r++){const o=on[r];o.h<Hu||Math.abs(o.x-i)>26||Math.abs(o.z-t)>26||Math.hypot(o.x-i,o.z-t)<26&&s++}return{v:nt(n*.8+Math.min(s,8)/8*.5,0,1),assumed:!0}}function JR(i,t){const e=Mn.RESOURCE_NODES;if(Array.isArray(e)){let s=0;for(const r of e)Math.hypot(r.x-i,r.z-t)<Uc&&s++;return{n:s,assumed:!1}}let n=0;for(let s=0;s<on.length;s++){const r=on[s];r.h<Hu||Math.abs(r.x-i)>Uc||Math.abs(r.z-t)>Uc||Math.hypot(r.x-i,r.z-t)<Uc&&n++}return{n,assumed:!0}}function QR(i){if(i>=Hd)return 0;const t=i<=Dc?.78+.22*(i/Dc):1-Math.pow((i-Dc)/(Hd-Dc),1.4);return nt(t,0,1)}function jR(i){return i===null?.5:i<=Jc?0:i<=Nc?nt((i-Jc)/(Nc-Jc),0,1):nt(1-(i-Nc)/(WR-Nc),.15,1)}const tP=[{min:78,key:"excellent",label:"excellent"},{min:60,key:"bon",label:"bon"},{min:42,key:"moyen",label:"moyen"},{min:0,key:"ingrat",label:"ingrat"}];function eP(i){return tP.find(t=>i>=t.min)}function nP(i){return i>.66?"à l'ombre":i>.3?"mi-ombre":"plein soleil"}function iP(i){return i>=Gd?"ressources abondantes":i>=Gd*.4?"quelques ressources":"peu de ressources"}function Qc(i,t){const e=qR(i,t),n=$R(i,t),s=ZR(i,t),r=KR(i,t),o=JR(i,t),a=[{key:"soil",label:e.label,value:e.quality,assumed:e.assumed},{key:"slope",label:`pente ${n.deg.toFixed(0)}°`,value:QR(n.deg),assumed:n.assumed},{key:"water",label:s.d===null?"eau inconnue":`eau à ${s.d.toFixed(0)}`,value:jR(s.d),assumed:s.assumed},{key:"shade",label:nP(r.v),value:nt(r.v*1.25,0,1),assumed:r.assumed},{key:"food",label:iP(o.n),value:nt(o.n/Gd,0,1),assumed:o.assumed}];let c=null;t<Mn.TUNNEL_MOUTH?c={key:"underground",text:"sous terre — rien à fonder ici"}:e.diggable?s.d!==null&&s.d<=Jc?c={key:"water",text:"trop près de l'eau — la galerie serait inondée"}:n.deg>=Hd&&(c={key:"slope",text:`pente ${n.deg.toFixed(0)}° — le sol s'effondrerait`}):c={key:"soil",text:`${e.label} — impossible de creuser`};let l=0;for(const h of a)l+=h.value*XR[h.key];const u=Math.round(nt(l,0,1)*100);return{x:i,z:t,diggable:!c,blocker:c,score:u,grade:eP(u),factors:a,assumed:a.some(h=>h.assumed)}}function sP(i){return i.diggable?`Site : ${i.grade.label} (${i.score}/100)`:`Site : impossible — ${i.blocker.text}`}function G0(i){return i.factors.slice().sort((t,e)=>t.value-e.value).map(t=>t.assumed?`${t.label} ?`:t.label).join(" · ")}const Ay="myrmidia.testPace",rP=.12,oP=.2;let qr=!0;try{const i=localStorage.getItem(Ay);i!==null&&(qr=i==="1")}catch{}function V0(){return qr}function aP(i){qr=!!i;try{localStorage.setItem(Ay,qr?"1":"0")}catch{}}function sd(i){return qr?i*rP:i}function Ey(i){return qr?Math.max(1,Math.round(i*oP)):i}const Kl={...Ea},Ar={graine:"graine",brindille:"brindille",miellat:"miellat"},cP={graine:["graine","graines"],brindille:["brindille","brindilles"],miellat:["dose de miellat","doses de miellat"]};function lP(i,t){const e=cP[i]||[i,i];return`${t} ${t>1?e[1]:e[0]}`}const uP=[{x:60,z:110,kind:"graine",amount:3},{x:95,z:105,kind:"brindille",amount:3},{x:55,z:120,kind:"miellat",amount:2},{x:100,z:125,kind:"graine",amount:2},{x:45,z:115,kind:"brindille",amount:2},{x:85,z:135,kind:"miellat",amount:2},{x:110,z:110,kind:"graine",amount:2},{x:65,z:135,kind:"brindille",amount:2},{x:40,z:128,kind:"graine",amount:2}].map((i,t)=>({id:9e3+t,r:10,...i}));let Ty=!1;function Ta(){return Array.isArray(Kl.RESOURCE_NODES)?Kl.RESOURCE_NODES:(Ty=!0,uP)}function Cy(){return Ta(),Ty}function hP(i,t){if(!i)return 0;if(typeof Kl.harvestNode=="function")return Kl.harvestNode(i.id,t)||0;const e=Math.max(0,Math.min(t,i.amount));return i.amount-=e,e}function dP(i,t,e=0){const n=Ta();let s=null,r=1/0;for(let o=0;o<n.length;o++){const a=n[o];if(a.amount<=0)continue;const c=Math.hypot(a.x-i,a.z-t);c<=a.r+e*.6&&c<r&&(r=c,s=a)}return s}const W0=1.8,Ry=16,Vd=5,fP=.5;function pP(){const i={carrying:null,cache:null,progress:0,activeId:null,justTook:null,justDropped:null};function t(){i.progress=0,i.activeId=null}function e(p,_){if(i.activeId!==null){const g=Ta();for(let m=0;m<g.length;m++){const v=g[m];if(v.id===i.activeId){if(v.amount>0&&Math.hypot(v.x-p.x,v.z-p.z)<=v.r+_*.6)return v;break}}}return dP(p.x,p.z,_)}function n(p,_){if(i.carrying)return"full";if(!p)return s(_),"idle";if(i.activeId!==p.id&&(i.activeId=p.id,i.progress=0),i.progress+=_/W0,i.progress<1)return"progress";const g=hP(p,1);return t(),g<=0?"empty":(i.carrying={kind:p.kind},i.justTook={kind:p.kind,qty:g,node:p},"taken")}function s(p){if(i.progress<=0){i.activeId=null;return}i.progress=Math.max(0,i.progress-p*fP/W0),i.progress===0&&(i.activeId=null)}function r(p){return i.cache?Math.hypot(i.cache.x-p.x,i.cache.z-p.z):1/0}function o(p){return i.carrying?!i.cache||r(p)<=Ry:!1}function a(p){if(!o(p))return!1;i.cache||(i.cache={x:p.x,y:Zt(p.x,p.z),z:p.z,items:{},total:0});const _=i.carrying.kind;return i.cache.items[_]=(i.cache.items[_]||0)+1,i.cache.total+=1,i.carrying=null,i.justDropped={kind:_,cache:i.cache},!0}function c(p){if(!i.cache)return 0;let _=p,g=0;for(;_>0;){const m=Object.entries(i.cache.items).filter(([,v])=>v>0).sort((v,x)=>x[1]-v[1])[0];if(!m)break;i.cache.items[m[0]]-=1,i.cache.total-=1,_-=1,g+=1}return g}function l(){i.justTook=null,i.justDropped=null}function u(){return i.cache?i.cache.total:0}function h(){return u()>=Ey(Vd)}function d(){return!i.cache||i.cache.total===0?null:Object.entries(i.cache.items).filter(([,p])=>p>0).map(([p,_])=>lP(p,_)).join(" · ")}function f(){const p=i.carrying?`Porte : ${Ar[i.carrying.kind]}`:"Porte : rien",_=d();return`${p} · Réserve : ${u()}/${Vd}${_?` (${_})`:""}`}return{state:i,target:e,hold:n,release:s,canDrop:o,drop:a,cacheDistance:r,spend:c,stock:u,enough:h,stockDetail:d,inventoryLine:f,endFrame:l}}const Zs={...Ea},X0=4,mP={rock:"la roche ne se creuse pas",soil:"ce sol ne se creuse pas",water:"trop près de l'eau — la galerie serait inondée",slope:"la pente s'effondrerait",underground:"on ne fonde pas dans une galerie déjà creusée",bounds:"le bord du monde — il faut revenir vers le pré",occupied:"une galerie passe déjà sous ce sol","already-founded":"la colonie est déjà fondée"};function Wd(i){return i?mP[i]||`impossible de creuser ici (${i})`:"impossible de creuser ici"}let Xd=null,Py=!1;function rd(){return typeof Zs.foundNest!="function"||Py}function zr(){if(typeof Zs.nestOrigin=="function"){const i=Zs.nestOrigin();if(i)return i}return Xd}function jc(){return!!zr()}function ap(i,t){if(jc())return{ok:!1,reason:"already-founded"};if(typeof Zs.canFoundAt=="function"){const n=Zs.canFoundAt(i,t)||{};return{ok:!!n.ok,reason:n.reason,assumed:!1}}const e=Qc(i,t);return e.diggable?{ok:!0,assumed:!0}:{ok:!1,reason:e.blocker.key,assumed:!0}}function Iy(i,t){const e=ap(i,t);if(!e.ok)return e;if(typeof Zs.foundNest=="function"){const n=Zs.foundNest(i,t)||{};return n.ok&&(Xd={x:i,z:t}),{ok:!!n.ok,reason:n.reason,assumed:!1}}return Py=!0,Xd={x:i,z:t},{ok:!0,assumed:!0}}function Y0(i,t,e,n){const s=e-i,r=n-t;if(Math.hypot(s,r)<1)return"ici";const o=r>8?"nord":r<-8?"sud":"",a=s>8?"est":s<-8?"ouest":"";return o&&a?`au ${o}-${a}`:a?`à l'${a}`:`au ${o}`}const De={...Ea},q0=[{k:"descend",s:3.2},{k:"dark",s:2.6},{k:"lay",s:3.4},{k:"rest",s:2.6},{k:"ascend",s:3.2}],$0=6,Z0=6,K0=8,gP=5.2,_P=1.8,xP=5.5,J0=26,yP=15,Q0=(i,t,e)=>[Ft(i[0],t[0],e),Ft(i[1],t[1],e),Ft(i[2],t[2],e)],Oc=i=>i*i*(3-2*i);function vP(i){const t=i._furnishing&&i._furnishing.piles&&i._furnishing.piles[0],e=t&&t.lamp&&t.lamp.p;return e?[e[0],e[2]]:[i.chamber.x,i.chamber.z]}function MP(){const i={phase:null,i:0,t:0,brood:0,mixT:null,justEnded:!1,justLaid:!1};let t=null,e=null,n=null,s=null,r=null,o=null,a=!1,c=0,l=null,u=null,h=0,d=!1;function f(){return i.phase!==null}function p(M){if(f())return!1;const P=typeof De.getFoundedNest=="function"?De.getFoundedNest():null;if(!P||!P.chamber)return!1;t=P,n=[t.mouth.x,t.mouth.y,t.mouth.z],e={x:M.x,y:M.y,z:M.z,yaw:M.yaw};const U=t.chamber;o=vP(t);let O=U.x-o[0],G=U.z-o[1];const z=Math.hypot(O,G);z<.5?(O=0,G=1):(O/=z,G/=z);const F=Math.min(xP,z);s=[o[0]+O*F,t.floorY,o[1]+G*F],c=Math.atan2(O,G),h=Math.atan2(-O,-G);let N=n[0]-U.x,W=n[2]-U.z;const Q=Math.hypot(N,W);return Q<.01?(N=0,W=1):(N/=Q,W/=Q),r=[n[0]+N*21,0,n[2]+W*21],r[1]=De.groundY(r[0],r[2]),l=[n[0]-Math.sin(e.yaw)*J0,n[1]+yP,n[2]-Math.cos(e.yaw)*J0],u=[n[0],n[1]+1,n[2]],i.phase="descend",i.i=0,i.t=0,i.justEnded=!1,a=!1,d=!1,!0}function _(M,P,U){if(P<.34){const F=Oc(P/.34);M.x=Ft(e.x,n[0],F),M.z=Ft(e.z,n[2],F),M.y=Ft(e.y,n[1],F),M.speed=6,M.travel+=6*U,M.yaw=e.yaw,M.floorY=M.y;return}const G=Oc((P-.34)/(1-.34)),z=Q0([n[0],n[1],n[2]],s,G);M.x=z[0],M.y=z[1],M.z=z[2],M.floorY=M.y,M.speed=0,M.yaw=Ft(e.yaw,h,G)}function g(M){M.x=s[0],M.y=s[1],M.z=s[2],M.floorY=t.floorY,M.yaw=h,M.speed=0}function m(M,P,U){if(P<.66){const z=Oc(P/.66),F=Q0(s,[n[0],n[1],n[2]],z);M.x=F[0],M.y=F[1],M.z=F[2],M.floorY=M.y,M.yaw=Ft(h,Math.atan2(r[0]-n[0],r[2]-n[2]),z),M.speed=0;return}const G=Oc((P-.66)/(1-.66));M.x=Ft(n[0],r[0],G),M.z=Ft(n[2],r[2],G),M.y=Ft(n[1],r[1],G),M.floorY=M.y,M.speed=7,M.travel+=7*U}function v(M){if(!f())return null;const P=d;if(d=!1,!(i.phase==="dark"||i.phase==="lay"||i.phase==="rest"||i.phase==="ascend"&&i.t<.45))return{eye:l,aim:i.phase==="ascend"?[M.x,M.y+3,M.z]:u,cut:P};const O=t.chamber;return{eye:[O.x+Math.sin(c)*K0,t.floorY+gP,O.z+Math.cos(c)*K0],aim:[(M.x+o[0])*.5,t.floorY+_P,(M.z+o[1])*.5],cut:P}}function x(M,P){if(i.justEnded=!1,i.justLaid=!1,i.mixT!==null&&typeof De.setFoundedMix=="function"&&(i.mixT+=P,De.setFoundedMix(nt(i.mixT/$0,0,1)),i.mixT>=$0&&(i.mixT=null)),!f())return null;const U=q0[i.i];switch(i.t=nt(i.t+P/U.s,0,1),U.k){case"descend":_(M,i.t,P);break;case"ascend":m(M,i.t,P);break;default:g(M);break}if(i.t>=1){i.i++,i.t=0;const O=q0[i.i];i.phase=O?O.k:null,O?b(O.k):(M.floorY=null,M.y=De.groundY(M.x,M.z),M.speed=0,i.justEnded=!0,t=null)}return i.phase}function b(M){if(M==="dark"){typeof De.sealNest=="function"&&De.sealNest(!0),d=!0;return}if(M==="lay"){S();return}M==="ascend"&&(typeof De.sealNest=="function"&&De.sealNest(!1),d=!0)}function S(){i.brood=Math.min(i.brood+1,Z0),typeof De.populateNest=="function"&&De.populateNest(i.brood),i.justLaid=!0,a=!0,i.mixT===null&&typeof De.foundedMix=="function"&&De.foundedMix()<1&&(i.mixT=0)}function w(){if(f())return!1;const M=typeof De.getFoundedNest=="function"?De.getFoundedNest():null;return!M||!M.chamber?!1:(S(),!0)}function A(M){if(!f())return!1;a||S(),typeof De.sealNest=="function"&&De.sealNest(!1);const P=zi();return P&&P.contains(M.x,M.z)?M.floorY=P.floorY(M.x,M.z):P&&s&&P.contains(s[0],s[2])?(M.x=s[0],M.z=s[2],M.floorY=P.floorY(M.x,M.z)):M.floorY=null,M.y=M.floorY===null?De.groundY(M.x,M.z):M.floorY,M.speed=0,i.phase=null,i.i=0,i.t=0,i.justEnded=!0,t=null,!0}const E={descend:"Elle descend dans la chambre.",dark:"Elle referme l'entrée derrière elle.",rest:"Le couvain éclaire la chambre.",ascend:"Elle remonte au jour."};function C(){if(!f())return null;const M=i.phase==="lay"?i.brood===1?"Première ponte.":"Elle pond.":E[i.phase];return M?`${M}   (E — passer)`:"E — passer"}function y(){return i.justLaid?i.brood===1?"Première ponte — la colonie existe.":`Ponte : ${i.brood}ᵉ couvée.`:null}return{state:i,begin:p,update:x,shot:v,promptText:C,eventText:y,skip:A,layInPlace:w,active:f,brood:()=>i.brood,canLayMore:()=>i.brood<Z0}}const bP={harvest:!0,found:!0,lay:!0},j0=2.2,SP=15;function wP({profile:i=In}={}){const t=pP(),e=rs(i),n=MP();let s=0,r=0,o=null,a=0;function c(S){const w=zr();return w?Math.hypot(w.x-S.x,w.z-S.z):1/0}function l(){return Ey(Vd)}function u(S){return!jc()||rd()||!n.canLayMore()||t.stock()<l()?null:sp(S.x,S.z)?"here":c(S)<=SP?"descend":null}function h(S,w=3.2){o=S,a=w}function d(S){if(n.active())return{kind:"sequence"};if(S.climb)return{kind:"climb",climbTarget:null};if(t.state.carrying){const y=t.state.carrying.kind;if(t.canDrop(S))return{kind:"drop",label:t.state.cache?"ajouter au dépôt":"poser ici — ce sera le dépôt"};const M=t.cacheDistance(S),P=t.state.cache;return{kind:"return",label:`rapporter ${Ar[y]} au dépôt (${M.toFixed(0)} u ${Y0(S.x,S.z,P.x,P.z)})`}}if(t.state.cache&&!jc()&&t.enough()&&t.cacheDistance(S)<=Ry){const y=ap(S.x,S.z);return{kind:"found",ok:y.ok,reason:y.reason,assumed:y.assumed}}const A=u(S);if(A)return{kind:"lay",inPlace:A==="here"};const E=t.target(S,e);if(E)return{kind:"harvest",node:E};const C=jC(S);return C?{kind:"climb",climbTarget:C}:{kind:"none"}}function f(S,w,A,E){n.update(S,E);const C=n.eventText();C&&h(C,6);const y=d(S);switch(a>0&&(a-=E,a<=0&&(o=null)),(y.kind!=="harvest"||!A)&&t.release(E),(y.kind!=="found"||!A||!y.ok)&&(s=Math.max(0,s-E/X0)),(y.kind!=="lay"||!A)&&(r=Math.max(0,r-E/j0)),y.kind){case"harvest":{if(A){const M=t.hold(y.node,E);M==="taken"?h(`elle emporte ${Ar[t.state.carrying.kind]}`):M==="empty"&&h("plus rien à prendre ici")}break}case"found":{if(A&&y.ok&&(s+=E/X0,s>=1)){s=0;const M=Iy(S.x,S.z);h(M.ok?rd()?"Colonie fondée ici. (le monde ne creuse pas encore la chambre)":"Colonie fondée ici.":`impossible : ${Wd(M.reason)}`,6),M.ok&&(t.spend(l()),n.begin(S))}break}case"lay":{A&&(r+=E/j0,r>=1&&(r=0,(y.inPlace?n.layInPlace():n.begin(S))&&(t.spend(l()),y.inPlace&&h(n.eventText()||"Elle pond.",6))));break}case"sequence":w&&n.skip(S)&&h(n.eventText()||"Ponte.",6);break;case"drop":if(w){const M=t.state.carrying.kind;t.drop(S)&&h(t.stock()===1?`dépôt ouvert ici — ${Ar[M]} posée`:`${Ar[M]} ajoutée au dépôt (${t.stock()}/${l()})`)}break;case"climb":w&&eR(S,y.climbTarget);break}return y}function p(S){return`${Math.round(S*100)}%`}function _(S,w){if(w.kind==="sequence")return n.promptText();if(w.kind==="lay")return r>0?`Ponte… ${p(r)}`:`E (maintenir) — ${w.inPlace?"pondre ici":"descendre pondre"} (${l()} unité${l()>1?"s":""} du dépôt)`;if(w.kind==="climb")return nR(S,w.climbTarget);if(w.kind==="return")return w.label;if(w.kind==="drop")return`E — ${w.label}`;if(w.kind==="harvest"){const A=w.node;return t.state.progress>0?`Récolte… ${p(t.state.progress)}`:`E (maintenir) — récolter ${Ar[A.kind]}`}return w.kind==="found"?w.ok?s>0?`Creusement… ${p(s)}`:"E (maintenir) — fonder la colonie ici":`Fonder ici : ${Wd(w.reason)}`:null}function g(S){if(n.active())return"La fondation : elle descend pondre.";if(jc()){const E=zr(),C=Math.hypot(E.x-S.x,E.z-S.z),y=C<12?"ici":`à ${C.toFixed(0)} u ${Y0(S.x,S.z,E.x,E.z)}`,M=rd()?" [chambre non creusée]":"",P=n.brood();if(P===0)return`Colonie fondée ${y}. Objectif : descendre pondre.${M}`;if(!n.canLayMore())return`${P} couvées — la chambre est pleine. Suite : les ouvrières.${M}`;const U=l()-t.stock();return U>0?`${P} couvée${P>1?"s":""}. Objectif : ${U} unité${U>1?"s":""} de plus pour la suivante.${M}`:`${P} couvée${P>1?"s":""}. Objectif : rentrer pondre — le nid est ${y}.${M}`}const w=l()-t.stock();if(t.state.carrying)return t.state.cache?`Objectif : rapporter au dépôt — encore ${w} pour fonder`:"Objectif : poser ce fardeau — le premier dépôt fixe le site de la colonie";if(t.enough())return"Objectif : fonder la colonie sur le dépôt";const A=Cy()?" [nœuds provisoires]":"";return`Objectif : récolter ${w} unité${w>1?"s":""} de plus${A}`}function m(){return t.inventoryLine()}function v(){return o}function x(S){return S.kind==="harvest"&&t.state.progress>0?t.state.progress:S.kind==="found"&&s>0?s:S.kind==="lay"&&r>0?r:null}function b(S,w){switch(w.kind){case"harvest":return{x:w.node.x,z:w.node.z,radius:Math.max(w.node.r,6),blocked:!1};case"found":{const A=t.state.cache;return A?{x:A.x,z:A.z,radius:11,blocked:!w.ok}:null}case"drop":{const A=t.state.cache;return{x:A?A.x:S.x,z:A?A.z:S.z,radius:A?11:7,blocked:!1}}case"return":{const A=t.state.cache;return A?{x:A.x,z:A.z,radius:11,blocked:!1}:null}case"lay":{if(w.inPlace)return{x:S.x,z:S.z,radius:9,blocked:!1};const A=zr();return A?{x:A.x,z:A.z,radius:9,blocked:!1}:null}case"climb":{const A=w.climbTarget;if(!A)return null;if(A.kind==="tree")return{x:te.x,z:te.z,radius:te.w+5,blocked:!1};const E=on[A.i];return E?{x:E.x,z:E.z,radius:5,blocked:!1}:null}default:return null}}return{harvest:t,laying:n,update:f,resolve:d,promptText:_,objectiveText:g,inventoryText:m,message:v,holdProgress:x,targetMark:b,busy:()=>n.active(),shot:S=>n.shot(S),isHold:S=>!!bP[S.kind],endFrame:()=>t.endFrame()}}const Jl={graine:{r:[.95,.78,1.3],color:14270852,emissive:0},brindille:{r:[2.9,.26,.26],color:8016424,emissive:0},miellat:{r:[.9,.88,.9],color:15247420,emissive:3810309}},AP=2,EP=12;let od=null;function TP(){return od||(od=new js(1,10,7)),od}const tg=new Map;function Ly(i){let t=tg.get(i);if(!t){const e=Jl[i];t=new Ve({color:e.color,emissive:e.emissive,roughness:.7,metalness:.02}),tg.set(i,t)}return t}const ad=new Nt,eg=new I,ng=new I,ig=new I,sg=new I;function Dy(i,t,e,n,s){eg.set(e[0],e[1],e[2]),ng.set(n[0],n[1],n[2]),ig.set(s[0],s[1],s[2]),ad.makeBasis(eg,ng,ig),sg.set(t[0],t[1],t[2]),ad.setPosition(sg),i.matrix.copy(ad)}function cd(i){const t=new Wt(TP(),Ly(i));return t.matrixAutoUpdate=!1,t.castShadow=!0,t.visible=!1,t}function rg(i,t,e,n,s,r=0){const o=Jl[t].r.map(l=>l*AP),a=Math.cos(s),c=Math.sin(s);Dy(i,[e,Zt(e,n)+o[1]*.9+r,n],[a*o[0],0,c*o[0]],[0,o[1],0],[-c*o[2],0,a*o[2]]),i.visible=!0}function CP({scene:i,profile:t=In}){const e=new Re;e.name="gameplay-props",i.add(e);const n={};for(const f of Object.keys(Jl))n[f]=cd(f),e.add(n[f]);const s=[];for(let f=0;f<EP;f++){const p=cd("graine");s.push(p),e.add(p)}let r=-1;const o=Cy(),a=[];if(o)for(const f of Ta()){const p=[];for(let _=0;_<3;_++){const g=cd(f.kind);e.add(g),p.push(g)}a.push({node:f,clutch:p,drawn:-1})}function c(){for(const f of a){const p=f.node,_=Math.max(0,Math.min(f.clutch.length,p.amount));if(_!==f.drawn){f.drawn=_;for(let g=0;g<f.clutch.length;g++)if(g<_){const m=g/f.clutch.length*Math.PI*2+p.id;rg(f.clutch[g],p.kind,p.x+Math.cos(m)*3.2,p.z+Math.sin(m)*3.2,m)}else f.clutch[g].visible=!1}}}function l(f){if(!f||f.total===r)return;r=f.total;let p=0;for(const[_,g]of Object.entries(f.items))for(let m=0;m<g&&p<s.length;m++,p++){const v=p*2.399,x=1.6+p*1.15,b=s[p];b.material=Ly(_),rg(b,_,f.x+Math.cos(v)*x,f.z+Math.sin(v)*x,v*1.7)}for(;p<s.length;p++)s[p].visible=!1}function u(f,p){for(const w of Object.keys(n))n[w].visible=!1;if(!p)return;const _=n[p.kind];if(!_)return;const g=rp(f),m=g.basis,v=g.scale,x=(f.profile||t).body.mandible,b=[0,x.tip[1]-.15,x.tip[2]+.55],S=Jl[p.kind].r;Dy(_,Yn(g,b),Ht(m.side,S[0]*v),Ht(m.up,S[1]*v),Ht(m.fwd,S[2]*v)),_.visible=!0}function h(f,p){u(f,p.carrying),l(p.cache),o&&c()}function d(){i.remove(e)}return{group:e,update:h,dispose:d,provisional:o}}const RP="position:fixed;color:#e6d3ab;font:13px/1.5 monospace;pointer-events:none;text-shadow:0 1px 3px rgba(0,0,0,0.9);z-index:5;";function Mi(i,t){const e=document.createElement("div");return e.id=i,e.style.cssText=RP+t,document.body.appendChild(e),e}function PP(){return{setSite(){},setPrompt(){},setObjective(){},setStock(){},setEvent(){},setHold(){},setDig(){},setEventNow(){},toggleControls(){},closeControls(){},dispose(){}}}const IP=[["ZQSD / WASD","se déplacer"],["Maj","courir"],["Souris (glisser)","tourner la caméra"],["Molette","reculer / rapprocher la vue"],["E","action — appui court, ou maintenu quand la barre apparaît"],["5 / 6","prochaine ponte : ouvrières / creuseuses"],["P","graphismes — et la cadence de test (raccourcit les attentes)"],["H","afficher / masquer cette aide"]];function LP(){if(typeof document>"u")return PP();const i=Mi("event","left:12px;bottom:142px;color:#cfe0a8;"),t=Mi("prompt","left:12px;bottom:122px;font-size:14px;color:#ffe6b0;"),e=Mi("objective","left:12px;bottom:88px;color:#f0dfb8;"),n=Mi("stock","left:12px;bottom:70px;opacity:0.85;"),s=Mi("siteinfo","left:12px;bottom:52px;"),r=Mi("sitedetail","left:12px;bottom:34px;opacity:0.62;font-size:12px;"),o=Mi("hold","left:12px;bottom:112px;width:190px;height:5px;background:rgba(0,0,0,0.45);border-radius:3px;overflow:hidden;"),a=document.createElement("div");a.style.cssText="height:100%;width:0%;background:#ffc46a;border-radius:3px;",o.appendChild(a),o.style.display="none";const c=Mi("controls","right:12px;top:12px;padding:10px 14px;background:rgba(12,10,8,0.62);border-radius:5px;line-height:1.8;");c.innerHTML='<div style="opacity:0.75;margin-bottom:4px">Commandes</div>'+IP.map(([S,w])=>`<div><span style="color:#ffe6b0">${S}</span><span style="opacity:0.72"> — ${w}</span></div>`).join("");let l=!0;const u=Mi("digbar","left:50%;transform:translateX(-50%);bottom:18px;width:280px;text-align:center;"),h=document.createElement("div");h.style.cssText="font:12px/1.6 monospace;color:#e6d3ab;opacity:0.85;";const d=document.createElement("div");d.style.cssText="height:6px;background:rgba(0,0,0,0.5);border-radius:3px;overflow:hidden;";const f=document.createElement("div");f.style.cssText="height:100%;width:0%;background:#d8a24e;border-radius:3px;",d.appendChild(f),u.appendChild(h),u.appendChild(d),u.style.display="none";let p=null,_=null,g=null,m=null,v=null,x=null;const b=(S,w,A)=>w===A?A:(S.textContent=w||"",w);return{setSite(S,w,A){S!==p&&(s.textContent=S,s.style.color=A?"#e6d3ab":"#d98b6a",p=S),w!==_&&(r.textContent=w,_=w)},setPrompt(S){g=b(t,S,g)},setDig(S,w){const A=S!=null;if(A!==(u.style.display==="block")&&(u.style.display=A?"block":"none"),!A)return;f.style.width=`${Math.min(100,S*100)}%`;const E=Math.round(S*100);h.textContent=`Creusement de la première galerie — ${E} %`+(w==="digger"?"":"  (6 : pondre des creuseuses)")},setEventNow(S){x=b(i,S,null)},setObjective(S){m=b(e,S,m)},setStock(S){v=b(n,S,v)},setEvent(S){x=b(i,S,x)},setHold(S){const w=S!==null&&S>.001;w!==(o.style.display==="block")&&(o.style.display=w?"block":"none"),w&&(a.style.width=`${Math.min(100,S*100)}%`)},toggleControls(){l=!l,c.style.display=l?"block":"none"},closeControls(){l&&(l=!1,c.style.display="none")},dispose(){for(const S of[e,n,s,r,t,i,o,c,u])S.parentNode&&S.parentNode.removeChild(S)}}}const og=new q("#FFB03A").multiplyScalar(1.5),DP=new q("#E8663A").multiplyScalar(1.4),ag=.72,NP=.2,UP=`
uniform vec3 uColor;
uniform float uTime;
uniform float uOpacity;
varying vec2 vMarkerUv;

void main() {
  vec2 p = vMarkerUv * 2.0 - 1.0;
  float r = length(p);
  if (r > 1.0) discard;

  // the soft band: fades to nothing on both sides, so there is no edge
  float band = 1.0 - smoothstep(0.0, ${NP.toFixed(2)}, abs(r - ${ag.toFixed(2)}));
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
`;function OP(i){const t={uColor:{value:og.clone()},uTime:{value:0},uOpacity:{value:1}},e=new kn({uniforms:t,vertexShader:`
      varying vec2 vMarkerUv;
      void main() {
        vMarkerUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:UP,transparent:!0,blending:il,depthTest:!1,depthWrite:!1,side:_e}),n=new Wt(new Js(2,2),e);return n.rotation.x=-Math.PI/2,n.name="target-marker",n.renderOrder=900,n.frustumCulled=!1,n.visible=!1,i.add(n),{show(s,r,o,a){if(!s){n.visible=!1;return}n.visible=!0,n.position.set(s.x,Zt(s.x,s.z)+.35,s.z),n.scale.setScalar(r),t.uTime.value=a,t.uColor.value.copy(o?DP:og),t.uOpacity.value=o?.95:.8+.2*Math.sin(a*3.4)},dispose(){i.remove(n),n.geometry.dispose(),e.dispose()}}}const FP=22,cg=1,lg=75,zP=10,BP=6,kP=.6,ug=11;let hg=1;function HP(i,t){let e=null,n=1/0;for(let s=0;s<Zn.length;s++){const r=Zn[s];if(r.amount<=0)continue;const o=Math.hypot(r.x-i,r.z-t);o<n&&(n=o,e=r)}return e}function GP(){const i={eggs:[],workers:[],delivered:0,dig:0,digging:0,galleryOpen:!1};function t(l,u,h="worker"){const d=UC(h),f=ry(l,0,u,d);return f.y=Zt(l,u),f.yaw=Math.random()*Math.PI*2,{id:hg++,profileId:h,profile:d,ant:f,legState:oy(d),carrying:null,targetId:null,repath:0}}function e(l,u="worker"){for(let h=0;h<l;h++)i.eggs.push({id:hg++,age:0,profileId:u})}function n(l,u){const h=l.ant,d=Or(),f=d.x-h.x,p=d.z-h.z;if(Math.hypot(f,p)<=zP)h.speed=0,h.yaw=Ho(h.yaw,Math.atan2(f,p),4,u),l.atFace=!0;else{l.atFace=!1,h.yaw=Ho(h.yaw,Math.atan2(f,p),6,u),h.speed=ug*.9;const g=h.speed*u;h.x+=Math.sin(h.yaw)*g,h.z+=Math.cos(h.yaw)*g,h.travel+=g}h.y=Zt(h.x,h.z),h.bob=Math.sin(h.travel*(Math.PI*2/ca(ty))*2)*.13*Math.min(1,h.speed/8),Kc(h,l.legState,u)}function s(l,u){const h=l.ant,d=Or();l.repath-=u;let f=null;if(l.carrying)f=d;else{if(l.repath<=0||l.targetId===null){const v=HP(h.x,h.z);l.targetId=v?v.id:null,l.repath=kP}const m=l.targetId!==null?Zn.find(v=>v.id===l.targetId):null;f=m&&m.amount>0?m:null,f||(l.targetId=null)}if(!f){h.speed=0,Kc(h,l.legState,u);return}const p=f.x-h.x,_=f.z-h.z;if(Math.hypot(p,_)<=BP)h.speed=0,l.carrying?(i.delivered+=cg,l.carrying=null):(tp(l.targetId,cg)>0&&(l.carrying=f.kind),l.targetId=null);else{h.yaw=Ho(h.yaw,Math.atan2(p,_),6,u);const m=Math.cos(h.yaw-Math.atan2(p,_));h.speed=ug*Math.max(.25,m);const v=h.speed*u;h.x+=Math.sin(h.yaw)*v,h.z+=Math.cos(h.yaw)*v,h.travel+=v}h.y=Zt(h.x,h.z),h.bob=Math.sin(h.travel*(Math.PI*2/ca(Xr))*2)*.13*Math.min(1,h.speed/8),Kc(h,l.legState,u)}function r(l){const u=Or();if(u){for(let h=i.eggs.length-1;h>=0;h--){const d=i.eggs[h];if(d.age+=l,d.age>=sd(FP)){i.eggs.splice(h,1);const f=Math.random()*Math.PI*2;i.workers.push(t(u.x+Math.cos(f)*9,u.z+Math.sin(f)*9,d.profileId))}}i.digging=0;for(const h of i.workers)h.profileId==="digger"?(n(h,l),h.atFace&&i.digging++):s(h,l);if(!i.galleryOpen&&i.digging>0){const h=sd(lg);i.dig=Math.min(h,i.dig+i.digging*l),i.dig>=h&&Bu().ok&&(i.galleryOpen=!0)}!i.galleryOpen&&zu()&&(i.galleryOpen=!0)}}function o(){return i.galleryOpen||!i.dig&&!i.digging?null:i.dig/sd(lg)}function a(){if(!i.workers.length&&!i.eggs.length)return null;const l=[],u=i.workers.filter(d=>d.profileId!=="digger").length,h=i.workers.length-u;return u&&l.push(`${u} ouvrière${u>1?"s":""}`),h&&l.push(`${h} creuseuse${h>1?"s":""}`),i.eggs.length&&l.push(`${i.eggs.length} œuf${i.eggs.length>1?"s":""}`),i.delivered&&l.push(`${i.delivered} rapporté${i.delivered>1?"s":""}`),`Colonie : ${l.join(" · ")}`}function c(){return{delivered:i.delivered,eggs:i.eggs.map(l=>({id:l.id,age:l.age})),dig:i.dig,galleryOpen:i.galleryOpen,workers:i.workers.map(l=>({id:l.id,profileId:l.profileId,carrying:l.carrying,x:l.ant.x,z:l.ant.z,yaw:l.ant.yaw}))}}return{state:i,addEggs:e,update:r,statusText:a,digProgress:o,serialise:c,collideRadius:()=>rs(Xr)}}const ld=64,ud=new q,Sr=new Nt().makeScale(0,0,0);function VP(i,t){const e=cy(),n=b0(t),s=new Ve({color:16777215,roughness:.55,metalness:.05,vertexColors:!1});function r(l,u){const h=new ma(l,s,u);return h.instanceMatrix.setUsage(a_),h.setColorAt(0,ud.set(16777215)),h.castShadow=!0,h.receiveShadow=!0,h.frustumCulled=!1,h.count=0,h}const o=r(e.sphere,ld*n.sphere),a=r(e.cyl,ld*n.cyl);o.name="crowd-spheres",a.name="crowd-cyls",i.add(o,a);for(let l=0;l<o.instanceMatrix.count;l++)o.setMatrixAt(l,Sr);for(let l=0;l<a.instanceMatrix.count;l++)a.setMatrixAt(l,Sr);let c=0;return{render(l,u){const h=Math.min(l.length,ld);for(let d=0;d<h;d++){const f=l[d];b0(f.profile);let p=d*n.sphere,_=d*n.cyl;ay(f.profile,f.ant,f.legState,u,(g,m,v,x,b,S)=>{const w=ly(m,v,x,b);g===ko?(o.setMatrixAt(p,w),o.setColorAt(p,ud.set(S)),p++):(a.setMatrixAt(_,w),a.setColorAt(_,ud.set(S)),_++)});for(let g=p;g<(d+1)*n.sphere;g++)o.setMatrixAt(g,Sr);for(let g=_;g<(d+1)*n.cyl;g++)a.setMatrixAt(g,Sr)}for(let d=h;d<c;d++){for(let f=d*n.sphere;f<(d+1)*n.sphere;f++)o.setMatrixAt(f,Sr);for(let f=d*n.cyl;f<(d+1)*n.cyl;f++)a.setMatrixAt(f,Sr)}c=h,o.count=Math.max(h,0)*n.sphere,a.count=Math.max(h,0)*n.cyl,o.instanceMatrix.needsUpdate=!0,a.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0),a.instanceColor&&(a.instanceColor.needsUpdate=!0)},dispose(){i.remove(o,a),o.dispose(),a.dispose(),s.dispose()}}}const dg=[140,170],fg=-Math.PI/2,WP=.25,XP=3;function YP({scene:i,camera:t,domElement:e,profile:n=In}){const s=ry(dg[0],0,dg[1],n);s.yaw=fg,s.y=Zt(s.x,s.z),kd(s,0),kd(s,0),s.y=Zt(s.x,s.z);const r=oy(n),{group:o,updatePose:a}=cR(n);i.add(o),i.add(zC(o));const c=lR(e,n);c.state.camYaw=fg;const l=wR(t),u=LP(),h=OP(i),d=GP();let f="worker";const p={worker:0,digger:1};let _=null,g=0;function m(P){return x.laying.brood()>=p[P]}const v=VP(i,Xr),x=wP({profile:n}),b=CP({scene:i,profile:n});l.update(s,c.state.camYaw,c.state.wantPitch,c.state.camDist,0);let S=0,w=null,A=null,E=null;function C(P){S-=P;const U=w?Math.hypot(s.x-w[0],s.z-w[1]):1/0;if((A||E)&&S>0&&U<XP)return;S=WP,w=[s.x,s.z];const O=zr();if(O){E||(E=Qc(O.x,O.z)),u.setSite(`Nid fondé — site ${E.grade.label} (${E.score}/100)`,G0(E),!0);return}A=Qc(s.x,s.z),u.setSite(sP(A),G0(A),A.diggable)}function y(P,U){const O=c.readMoveIntent();c.consumeHelp()&&u.toggleControls();const G=c.consumeCaste();G&&(m(G)?(f=G,_=`Prochaine ponte : ${G==="digger"?"creuseuses":"ouvrières"}`):_="Creuseuses : à débloquer à la deuxième ponte",g=3.5),m(f)||(f="worker");const z=x.update(s,c.consumeInteract(),c.isInteractHeld(),P);if(!x.busy())if(s.climb)iR(s,nt(O.iy,-1,1),P);else{const W=GR(O,l.eye,l.aim);VR(s,W,O,P)}Kc(s,r,P),a(s,r,U),o.position.set(0,0,0),No.position.set(s.x,s.y,s.z),No.radius=rs(n),b.update(s,x.harvest.state),x.laying.state.justLaid&&d.addEggs(3,f),d.update(P),v.render(d.state.workers,U),C(P),u.setPrompt(x.promptText(s,z)),u.setObjective(x.objectiveText(s));const F=d.statusText();u.setStock(F?`${x.inventoryText()}  |  ${F}`:x.inventoryText()),g>0&&(g-=P,g<=0&&(_=null)),u.setEvent(_||x.message()),u.setHold(x.holdProgress(z)),u.setDig(d.digProgress(),f);const N=x.targetMark(s,z);h.show(N,N?N.radius:0,N?N.blocked:!1,U),x.harvest.state.carrying&&u.closeControls(),x.endFrame(),!c.state.dragging&&!s.climb&&!x.busy()&&O.mag>.02&&(c.state.camYaw=Ho(c.state.camYaw,s.yaw,2.2,P)),x.laying.state.justEnded&&(c.state.camYaw=s.yaw),l.update(s,c.state.camYaw,c.state.wantPitch,c.state.camDist,P,x.shot(s))}typeof window<"u"&&(window.__decorPenetration=BR,window.__antRadius=rs(n),window.__site=(P,U)=>Qc(P,U),window.__avatar=n,window.__mushroomRadii=Sy,window.__grass=on,window.__nodes=Ta,window.__harvest=()=>x.harvest.state,window.__nestOrigin=zr,window.__colony=()=>d,window.__foundNest=(P,U)=>Iy(P,U),window.__gallery=()=>zu(),window.__nest=()=>YC(s),window.__nestAt=(P,U)=>{const O=zi();return O?{inside:O.contains(P,U),floorY:O.floorY(P,U),ground:Zt(P,U),approx:O.approx}:null},window.__digGallery=()=>Bu(),window.__act=()=>{const P=x.resolve(s);return{kind:P.kind,inPlace:!!P.inPlace,hold:x.holdProgress(P)}},window.__descentPath=()=>typeof $l=="function"?$l():null,window.__beginLaying=()=>x.laying.begin(s),window.__caste=()=>({caste:f,msg:_,unlocked:m("digger")}),window.__canFound=(P,U)=>{const O=ap(P,U);return{...O,text:Wd(O.reason)}},window.__toWater=di,window.__laying=()=>{const P=x.laying.state;return{phase:P.phase,t:+P.t.toFixed(3),brood:P.brood,mix:Aa()}});function M(){c.dispose(),u.dispose(),h.dispose(),v.dispose(),b.dispose()}return{ant:s,group:o,update:y,dispose:M}}const Hs={resolution:[{label:"50 %",value:.5},{label:"75 %",value:.75},{label:"100 %",value:1},{label:"150 % (net)",value:1.5}],shadows:[{label:"aucune",value:0},{label:"basses (1024)",value:1024},{label:"normales (2048)",value:2048}],grass:[{label:"clairsemée",value:.35},{label:"moyenne",value:.65},{label:"dense",value:1}]},Ny="myrmidia.quality";function qP(){const i={resolution:2,shadows:2,grass:2,textures:!0};try{const t=localStorage.getItem(Ny);return t?{...i,...JSON.parse(t)}:i}catch{return i}}function $P(){try{localStorage.setItem(Ny,JSON.stringify(_n))}catch{}}const _n=qP(),ZP=[];function KP(){for(const i of ZP)i(tl())}function tl(){return{resolution:Hs.resolution[_n.resolution].value,shadowMap:Hs.shadows[_n.shadows].value,grassFraction:Hs.grass[_n.grass].value,textures:_n.textures}}function hd(i){_n[i]=(_n[i]+1)%Hs[i].length}function JP({renderer:i,sun:t,scene:e}){const n=Math.min(window.devicePixelRatio||1,2);function s(){i.setPixelRatio(n*tl().resolution),i.setSize(window.innerWidth,window.innerHeight)}function r(){const x=tl().shadowMap;i.shadowMap.enabled=x>0,x>0&&(t.shadow.mapSize.set(x,x),t.shadow.map?.dispose(),t.shadow.map=null),i.shadowMap.needsUpdate=!0}function o(){const x=_n.textures;e.traverse(b=>{const S=Array.isArray(b.material)?b.material:b.material?[b.material]:[];for(const w of S){if(x)w.userData.savedMap!==void 0&&(w.map=w.userData.savedMap,w.userData.savedMap=void 0);else if(w.map)w.userData.savedMap=w.map,w.map=null;else continue;w.needsUpdate=!0}})}let a=null,c=0;function l(){if(!a){if(e.traverse(x=>{x.name==="grass"&&(a=x)}),!a)return;c=a.count}a.count=Math.max(1,Math.round(c*tl().grassFraction))}if(s(),r(),typeof document>"u")return{update(){},toggle(){},dispose(){}};const u=document.createElement("div");u.id="quality",u.style.cssText="position:fixed;right:12px;bottom:12px;padding:9px 12px;background:rgba(12,10,8,0.68);border-radius:5px;color:#e6d3ab;font:12px/1.7 monospace;pointer-events:none;z-index:6;text-shadow:0 1px 3px rgba(0,0,0,0.9);display:none;",document.body.appendChild(u);const h=document.createElement("div");h.id="fps",h.style.cssText="position:fixed;right:12px;bottom:12px;padding:4px 8px;background:rgba(12,10,8,0.55);border-radius:4px;color:#cfe0a8;font:12px/1.4 monospace;pointer-events:none;z-index:6;text-shadow:0 1px 3px rgba(0,0,0,0.9);",document.body.appendChild(h);let d=!1;function f(){const x=[["1","Résolution",Hs.resolution[_n.resolution].label],["2","Ombres",Hs.shadows[_n.shadows].label],["3","Herbe",Hs.grass[_n.grass].label+" (au prochain chargement)"],["4","Textures",_n.textures?"oui":"non"],["5","Cadence de test",V0()?"ON — attentes /8, coûts /5":"off (cadence réelle)"]];u.innerHTML='<div style="opacity:0.75;margin-bottom:3px">Graphismes — P pour fermer</div>'+x.map(([b,S,w])=>`<div><span style="color:#ffe6b0">${b}</span><span style="opacity:0.7"> ${S} : </span><span style="color:#cfe0a8">${w}</span></div>`).join("")}f();let p=0,_=0,g=0;function m(x){v.key(x.code)&&x.preventDefault()}window.addEventListener("keydown",m),l(),o();const v={update(x){if(p++,_+=x,_>=.5){g=Math.round(p/_),p=0,_=0;const b=i.getContext();h.textContent=d?`${g} i/s · ${b.drawingBufferWidth}x${b.drawingBufferHeight} · ${i.info.render.calls} appels`:`${g} i/s · P : graphismes`}},key(x){if(x==="KeyP")return d=!d,u.style.display=d?"block":"none",h.style.bottom=d?"104px":"12px",!0;if(!d)return!1;if(x==="Digit1")hd("resolution"),s();else if(x==="Digit2")hd("shadows"),r();else if(x==="Digit3")hd("grass"),l();else if(x==="Digit4")_n.textures=!_n.textures,o();else if(x==="Digit5")aP(!V0());else return!1;return f(),$P(),KP(),!0},dispose(){window.removeEventListener("keydown",m),u.remove(),h.remove()}};return v}const QP=16,jP={x0:-400,x1:600,z0:-300,z1:700};let Yd=null,qd=0,$d=0;function tI(i,t){t<qd&&(qd=t,Yd=i)}function eI(){$d++}class nI{constructor(t={}){this.reset(t)}reset({x0:t,x1:e,z0:n,z1:s,cell:r=QP,pad:o=64}={}){const a=t===void 0?jP:{x0:t,x1:e,z0:n,z1:s};this.cell=r,this.inv=1/r,this.x0=a.x0-o,this.z0=a.z0-o,this.cols=Math.max(1,Math.ceil((a.x1+o-this.x0)*this.inv)),this.rows=Math.max(1,Math.ceil((a.z1+o-this.z0)*this.inv)),this.cells=new Array(this.cols*this.rows).fill(null),this.cellR=new Float32Array(this.cols*this.rows),this.maxR=0,this.n=0}_cellOf(t,e){let n=Math.floor((t-this.x0)*this.inv),s=Math.floor((e-this.z0)*this.inv);return n<0?n=0:n>=this.cols&&(n=this.cols-1),s<0?s=0:s>=this.rows&&(s=this.rows-1),s*this.cols+n}_place(t){const e=this._cellOf(t.x,t.z);let n=this.cells[e];n||(n=[],this.cells[e]=n),t._c=e,t._i=n.length,n.push(t),t.r>this.cellR[e]&&(this.cellR[e]=t.r),t.r>this.maxR&&(this.maxR=t.r)}_unplace(t){const e=this.cells[t._c],n=e.pop();n!==t&&(e[t._i]=n,n._i=t._i),t._c=-1}add(t,e,n,s=0,r=null){const o={type:t,x:e,z:n,r:s,data:r,_c:-1,_i:-1};return this._place(o),this.n++,o}move(t,e,n){const s=this._cellOf(e,n);return t.x=e,t.z=n,s===t._c||(this._unplace(t),this._place(t)),t}setRadius(t,e){return t.r=e,e>this.cellR[t._c]&&(this.cellR[t._c]=e),e>this.maxR&&(this.maxR=e),t}remove(t){t._c<0||(this._unplace(t),this.n--)}get size(){return this.n}stats(){let t=0,e=0;for(const n of this.cells)n&&n.length&&(t++,n.length>e&&(e=n.length));return{cell:this.cell,cells:this.cells.length,entries:this.n,occupied:t,fill:t?this.n/t:0,most:e,maxR:this.maxR}}_scan(t,e,n,s,r){const o=s&&s.type,a=s&&s.where,c=!!(s&&s.reach),l=n+(c?this.maxR:0),u=this.cell;let h=Math.floor((t-l-this.x0)*this.inv),d=Math.floor((t+l-this.x0)*this.inv),f=Math.floor((e-l-this.z0)*this.inv),p=Math.floor((e+l-this.z0)*this.inv);h<0&&(h=0),d>=this.cols&&(d=this.cols-1),f<0&&(f=0),p>=this.rows&&(p=this.rows-1);for(let _=f;_<=p;_++){const g=this.z0+_*u,m=e<g?g-e:e>g+u?e-g-u:0,v=_*this.cols;for(let x=h;x<=d;x++){const b=v+x,S=this.cells[b];if(!(S===null||S.length===0)){if(c){const w=this.x0+x*u,A=t<w?w-t:t>w+u?t-w-u:0,E=n+this.cellR[b];if(A*A+m*m>E*E)continue}for(let w=0;w<S.length;w++){const A=S[w];if(o!==void 0&&A.type!==o)continue;const E=A.x-t,C=A.z-e,y=E*E+C*C,M=c?n+A.r:n;y>M*M||a!==void 0&&!a(A)||r(A,y)}}}}}forEachNear(t,e,n,s,r){this._scan(t,e,n,r,s)}nearest(t,e,n,s){return Yd=null,qd=1/0,this._scan(t,e,n,s,tI),Yd}countNear(t,e,n,s){return $d=0,this._scan(t,e,n,s,eI),$d}}const Er=new nI,iI={queryDisc(i,t,e,n,s){Er.forEachNear(t,e,n,s,{type:i,reach:!0})}};function sI({grassFootprints:i,mushrooms:t,rocks:e,bounds:n}){if(Er.reset(n),i)for(let s=0;s<i.length;s++){const r=i[s];Er.add("grass",r.x,r.z,r.w,r)}if(t)for(const s of t)Er.add("mushrooms",s.x,s.z,s.r||0,s);if(e)for(const s of e)Er.add("rocks",s.x,s.z,s.r||0,s);return Er.stats()}const rI=document.getElementById("app"),ls=tT(rI),Rn=eT(),Ze=new vf;Ze.background=new q(1709584);Ze.fog=new pa(1709584,40,220);const el=new Nf(12572917,7236152,.85);Ze.add(el);const dd={sky:new q(4873350),ground:new q(2367283),intensity:.55},Fn=Jf,ii=Qf,pg=new q,mg=new q,gg=new q,_g=new q,xo={sky:new q(Fn.hemiSky),ground:new q(Fn.hemiGround),fog:new q(Fn.fog),bg:new q(Fn.sky),sun:new q(Fn.sunColor)},yo={sky:new q(ii.hemiSky),ground:new q(ii.hemiGround),fog:new q(ii.fog),bg:new q(ii.sky),sun:new q(ii.sunColor)},Je=new Of(Fn.sunColor,Fn.sunIntensity);Je.castShadow=!0;const Ca=110,Zd=2048,nl=220,Fc=2*Ca/Zd;Je.shadow.mapSize.set(Zd,Zd);Je.shadow.camera.left=-Ca;Je.shadow.camera.right=Ca;Je.shadow.camera.top=Ca;Je.shadow.camera.bottom=-Ca;Je.shadow.camera.near=1;Je.shadow.camera.far=nl*2.4;Je.shadow.bias=-.0015;Ze.add(Je);Ze.add(Je.target);function oI(i){const t=Math.round(i.position.x/Fc)*Fc,e=Math.round(i.position.z/Fc)*Fc,n=Ou();Je.target.position.set(t,0,e),Je.position.set(t+n[0]*nl,n[1]*nl,e+n[2]*nl)}const aI=new q(1645102),cI=new q(789270),to=Jx();Ze.add(to.group);const cp=YP({scene:Ze,camera:Rn,domElement:ls.domElement});Ze.traverse(i=>{const t=Array.isArray(i.material)?i.material:i.material?[i.material]:[];for(const e of t)e.isMeshStandardMaterial&&wa(e)});window.__renderer=ls;window.__ant=cp.ant;window.__rooms=to.rooms;window.__camera=Rn;window.__scene=Ze;window.__nodes=Zn;window.__world=to;window.__contain=Nu;window.__profileR=ln;window.__groundY=Zt;window.__tree=te;window.__world6={shadeAt:Bx,canFoundAt:ip,foundNest:qx,nestOrigin:Or,getFoundedNest:Xx,populateNest:Zx,sealNest:Kx,harvestNode:tp,get nodes(){return Zn},foundedMix:Aa,sunDir:Ou,waterDepthAt:Fi,distanceToWater:di,digGallery:Bu,getGallery:zu,nestFootprint:$x,descentPath:$l,groundY:Zt,groundSlope:ir,THREE:QE};ls.setResizeCallback(i=>{Rn.aspect=i,Rn.updateProjectionMatrix()});const xg=new zf;function Uy(){const i=Math.min(xg.getDelta(),.05),t=xg.elapsedTime;to.update(i,t,Rn),cp.update(i,t),Oy(),ls.render(Ze,Rn),gI.update(i)}const lI=52,uI=26;function yg(i,t,e){const n=1-nt((e+24)/40,0,1),s=nt(1-(Math.abs(i)-lI)/30,0,1),r=nt(1-(t-uI)/30,0,1);return n*s*r}function hI(i,t){const e=Math.min(yg(i.x,i.y,i.z),yg(t.x,t.y,t.z)),n=Math.min(Ud(i.x,i.y,i.z),Ud(t.x,t.y,t.z));return Math.max(e,n)}const dI=6;let zc=null;function fI(){const i=performance.now()/1e3;zc===null&&Or()&&(zc=i),zc!==null&&zx(nt((i-zc)/dI,0,1))}function Oy(){fI();const i=Aa();pg.copy(xo.sky).lerp(yo.sky,i),mg.copy(xo.ground).lerp(yo.ground,i),gg.copy(xo.fog).lerp(yo.fog,i),_g.copy(xo.bg).lerp(yo.bg,i),Je.color.copy(xo.sun).lerp(yo.sun,i),Je.intensity=Ft(Fn.sunIntensity,ii.sunIntensity,i);const t=1-hI(Rn.position,cp.ant);Ze.fog.color.copy(aI).lerp(gg,t),Ze.fog.near=Ft(6,Ft(Fn.fogNear,ii.fogNear,i),t),Ze.fog.far=Ft(135,Ft(Fn.fogFar,ii.fogFar,i),t),Ze.background.copy(cI).lerp(_g,t),ls.toneMappingExposure=Ft(1.28,Ft(Fn.exposure,ii.exposure,i),t),el.color.copy(dd.sky).lerp(pg,t),el.groundColor.copy(dd.ground).lerp(mg,t),el.intensity=Ft(dd.intensity,Ft(Fn.hemiIntensity,ii.hemiIntensity,i),t),FC(t),oI(Rn)}const pI=sI({grassFootprints:to.grassFootprints,mushrooms:$n,rocks:Ri,bounds:{x0:Ei.x0,x1:Ei.x1,z0:Ei.z0,z1:Ei.z1}}),mI=typeof location<"u"&&/[?&]nospatial=1/.test(location.search);mI||xy(iI,"world");window.__spatial=()=>({...AR(),...pI});const gI=JP({renderer:ls,sun:Je,scene:Ze});ls.setAnimationLoop(Uy);window.__frame=Uy;window.__renderView=(i,t,e=0)=>{Rn.position.set(i[0],i[1],i[2]),Rn.lookAt(t[0],t[1],t[2]),Rn.updateMatrixWorld(),to.update(1/60,e,Rn),Oy(),ls.render(Ze,Rn)};
