(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dh="174",W0=0,Df=1,q0=2,fg=1,pg=2,Ri=3,_r=0,In=1,ci=2,ur=0,Ns=1,Lf=2,Nf=3,Uf=4,X0=5,kr=100,j0=101,$0=102,Y0=103,K0=104,J0=200,Q0=201,Z0=202,ey=203,gu=204,_u=205,ty=206,ny=207,iy=208,ry=209,sy=210,oy=211,ay=212,cy=213,ly=214,vu=0,yu=1,Eu=2,Gs=3,Tu=4,Su=5,xu=6,wu=7,Lh=0,uy=1,hy=2,hr=0,dy=1,fy=2,py=3,mg=4,my=5,gy=6,_y=7,gg=300,Hs=301,Ws=302,Mu=303,Au=304,Jc=306,bu=1e3,Br=1001,Ru=1002,ei=1003,vy=1004,La=1005,li=1006,Ml=1007,zr=1008,Bi=1009,_g=1010,vg=1011,jo=1012,Nh=1013,$r=1014,Pi=1015,aa=1016,Uh=1017,Oh=1018,qs=1020,yg=35902,Eg=1021,Tg=1022,Jn=1023,Sg=1024,xg=1025,Us=1026,Xs=1027,wg=1028,Fh=1029,Mg=1030,kh=1031,Vh=1033,cc=33776,lc=33777,uc=33778,hc=33779,Iu=35840,Cu=35841,Pu=35842,Du=35843,Lu=36196,Nu=37492,Uu=37496,Ou=37808,Fu=37809,ku=37810,Vu=37811,Bu=37812,zu=37813,Gu=37814,Hu=37815,Wu=37816,qu=37817,Xu=37818,ju=37819,$u=37820,Yu=37821,dc=36492,Ku=36494,Ju=36495,Ag=36283,Qu=36284,Zu=36285,eh=36286,yy=3200,Ey=3201,Bh=0,Ty=1,sr="",kn="srgb",js="srgb-linear",bc="linear",It="srgb",fs=7680,Of=519,Sy=512,xy=513,wy=514,bg=515,My=516,Ay=517,by=518,Ry=519,Ff=35044,kf="300 es",Di=2e3,Rc=2001;class no{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vf=1234567;const Uo=Math.PI/180,$o=180/Math.PI;function io(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function ft(i,e,t){return Math.max(e,Math.min(t,i))}function zh(i,e){return(i%e+e)%e}function Iy(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Cy(i,e,t){return i!==e?(t-i)/(e-i):0}function Oo(i,e,t){return(1-t)*i+t*e}function Py(i,e,t,n){return Oo(i,e,1-Math.exp(-t*n))}function Dy(i,e=1){return e-Math.abs(zh(i,e*2)-e)}function Ly(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ny(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Uy(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Oy(i,e){return i+Math.random()*(e-i)}function Fy(i){return i*(.5-Math.random())}function ky(i){i!==void 0&&(Vf=i);let e=Vf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vy(i){return i*Uo}function By(i){return i*$o}function zy(i){return(i&i-1)===0&&i!==0}function Gy(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hy(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Wy(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),u=s((e+n)/2),h=o((e+n)/2),d=s((e-n)/2),f=o((e-n)/2),_=s((n-e)/2),S=o((n-e)/2);switch(r){case"XYX":i.set(a*h,l*d,l*f,a*u);break;case"YZY":i.set(l*f,a*h,l*d,a*u);break;case"ZXZ":i.set(l*d,l*f,a*h,a*u);break;case"XZX":i.set(a*h,l*S,l*_,a*u);break;case"YXY":i.set(l*_,a*h,l*S,a*u);break;case"ZYZ":i.set(l*S,l*_,a*h,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Rs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Sn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ui={DEG2RAD:Uo,RAD2DEG:$o,generateUUID:io,clamp:ft,euclideanModulo:zh,mapLinear:Iy,inverseLerp:Cy,lerp:Oo,damp:Py,pingpong:Dy,smoothstep:Ly,smootherstep:Ny,randInt:Uy,randFloat:Oy,randFloatSpread:Fy,seededRandom:ky,degToRad:Vy,radToDeg:By,isPowerOfTwo:zy,ceilPowerOfTwo:Gy,floorPowerOfTwo:Hy,setQuaternionFromProperEuler:Wy,normalize:Sn,denormalize:Rs};class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,t,n,r,s,o,a,l,u){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,u)}set(e,t,n,r,s,o,a,l,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],h=n[4],d=n[7],f=n[2],_=n[5],S=n[8],M=r[0],m=r[3],g=r[6],P=r[1],D=r[4],R=r[7],V=r[2],F=r[5],x=r[8];return s[0]=o*M+a*P+l*V,s[3]=o*m+a*D+l*F,s[6]=o*g+a*R+l*x,s[1]=u*M+h*P+d*V,s[4]=u*m+h*D+d*F,s[7]=u*g+h*R+d*x,s[2]=f*M+_*P+S*V,s[5]=f*m+_*D+S*F,s[8]=f*g+_*R+S*x,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8];return t*o*h-t*a*u-n*s*h+n*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],d=h*o-a*u,f=a*l-h*s,_=u*s-o*l,S=t*d+n*f+r*_;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/S;return e[0]=d*M,e[1]=(r*u-h*n)*M,e[2]=(a*n-r*o)*M,e[3]=f*M,e[4]=(h*t-r*l)*M,e[5]=(r*s-a*t)*M,e[6]=_*M,e[7]=(n*l-u*t)*M,e[8]=(o*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Al.makeScale(e,t)),this}rotate(e){return this.premultiply(Al.makeRotation(-e)),this}translate(e,t){return this.premultiply(Al.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Al=new rt;function Rg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ic(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qy(){const i=Ic("canvas");return i.style.display="block",i}const Bf={};function Nr(i){i in Bf||(Bf[i]=!0,console.warn(i))}function Xy(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function jy(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function $y(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const zf=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gf=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yy(){const i={enabled:!0,workingColorSpace:js,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===It&&(r.r=Oi(r.r),r.g=Oi(r.g),r.b=Oi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===It&&(r.r=Os(r.r),r.g=Os(r.g),r.b=Os(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===sr?bc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[js]:{primaries:e,whitePoint:n,transfer:bc,toXYZ:zf,fromXYZ:Gf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:e,whitePoint:n,transfer:It,toXYZ:zf,fromXYZ:Gf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),i}const xt=Yy();function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ps;class Ky{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ps===void 0&&(ps=Ic("canvas")),ps.width=e.width,ps.height=e.height;const n=ps.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ps}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ic("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Oi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Oi(t[n]/255)*255):t[n]=Oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jy=0;class Gh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=io(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(bl(r[o].image)):s.push(bl(r[o]))}else s=bl(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function bl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ky.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qy=0;class Cn extends no{constructor(e=Cn.DEFAULT_IMAGE,t=Cn.DEFAULT_MAPPING,n=Br,r=Br,s=li,o=zr,a=Jn,l=Bi,u=Cn.DEFAULT_ANISOTROPY,h=sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=io(),this.name="",this.source=new Gh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bu:e.x=e.x-Math.floor(e.x);break;case Br:e.x=e.x<0?0:1;break;case Ru:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bu:e.y=e.y-Math.floor(e.y);break;case Br:e.y=e.y<0?0:1;break;case Ru:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=gg;Cn.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,n=0,r=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,u=l[0],h=l[4],d=l[8],f=l[1],_=l[5],S=l[9],M=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-M)<.01&&Math.abs(S-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+M)<.1&&Math.abs(S+m)<.1&&Math.abs(u+_+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(u+1)/2,R=(_+1)/2,V=(g+1)/2,F=(h+f)/4,x=(d+M)/4,T=(S+m)/4;return D>R&&D>V?D<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(D),r=F/n,s=x/n):R>V?R<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(R),n=F/r,s=T/r):V<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(V),n=x/s,r=T/s),this.set(n,r,s,t),this}let P=Math.sqrt((m-S)*(m-S)+(d-M)*(d-M)+(f-h)*(f-h));return Math.abs(P)<.001&&(P=1),this.x=(m-S)/P,this.y=(d-M)/P,this.z=(f-h)/P,this.w=Math.acos((u+_+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zy extends no{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Cn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Gh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yr extends Zy{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ig extends Cn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ei,this.minFilter=ei,this.wrapR=Br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class eE extends Cn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ei,this.minFilter=ei,this.wrapR=Br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ca{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],u=n[r+1],h=n[r+2],d=n[r+3];const f=s[o+0],_=s[o+1],S=s[o+2],M=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=_,e[t+2]=S,e[t+3]=M;return}if(d!==M||l!==f||u!==_||h!==S){let m=1-a;const g=l*f+u*_+h*S+d*M,P=g>=0?1:-1,D=1-g*g;if(D>Number.EPSILON){const V=Math.sqrt(D),F=Math.atan2(V,g*P);m=Math.sin(m*F)/V,a=Math.sin(a*F)/V}const R=a*P;if(l=l*m+f*R,u=u*m+_*R,h=h*m+S*R,d=d*m+M*R,m===1-a){const V=1/Math.sqrt(l*l+u*u+h*h+d*d);l*=V,u*=V,h*=V,d*=V}}e[t]=l,e[t+1]=u,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],u=n[r+2],h=n[r+3],d=s[o],f=s[o+1],_=s[o+2],S=s[o+3];return e[t]=a*S+h*d+l*_-u*f,e[t+1]=l*S+h*f+u*d-a*_,e[t+2]=u*S+h*_+a*f-l*d,e[t+3]=h*S-a*d-l*f-u*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(n/2),h=a(r/2),d=a(s/2),f=l(n/2),_=l(r/2),S=l(s/2);switch(o){case"XYZ":this._x=f*h*d+u*_*S,this._y=u*_*d-f*h*S,this._z=u*h*S+f*_*d,this._w=u*h*d-f*_*S;break;case"YXZ":this._x=f*h*d+u*_*S,this._y=u*_*d-f*h*S,this._z=u*h*S-f*_*d,this._w=u*h*d+f*_*S;break;case"ZXY":this._x=f*h*d-u*_*S,this._y=u*_*d+f*h*S,this._z=u*h*S+f*_*d,this._w=u*h*d-f*_*S;break;case"ZYX":this._x=f*h*d-u*_*S,this._y=u*_*d+f*h*S,this._z=u*h*S-f*_*d,this._w=u*h*d+f*_*S;break;case"YZX":this._x=f*h*d+u*_*S,this._y=u*_*d+f*h*S,this._z=u*h*S-f*_*d,this._w=u*h*d-f*_*S;break;case"XZY":this._x=f*h*d-u*_*S,this._y=u*_*d-f*h*S,this._z=u*h*S+f*_*d,this._w=u*h*d+f*_*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){const _=.5/Math.sqrt(f+1);this._w=.25/_,this._x=(h-l)*_,this._y=(s-u)*_,this._z=(o-r)*_}else if(n>a&&n>d){const _=2*Math.sqrt(1+n-a-d);this._w=(h-l)/_,this._x=.25*_,this._y=(r+o)/_,this._z=(s+u)/_}else if(a>d){const _=2*Math.sqrt(1+a-n-d);this._w=(s-u)/_,this._x=(r+o)/_,this._y=.25*_,this._z=(l+h)/_}else{const _=2*Math.sqrt(1+d-n-a);this._w=(o-r)/_,this._x=(s+u)/_,this._y=(l+h)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,h=t._w;return this._x=n*h+o*a+r*u-s*l,this._y=r*h+o*l+s*a-n*u,this._z=s*h+o*u+n*l-r*a,this._w=o*h-n*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const _=1-t;return this._w=_*o+t*this._w,this._x=_*n+t*this._x,this._y=_*r+t*this._y,this._z=_*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,a),d=Math.sin((1-t)*h)/u,f=Math.sin(t*h)/u;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*n),h=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+l*u+o*d-a*h,this.y=n+l*h+a*u-s*d,this.z=r+l*d+s*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rl.copy(this).projectOnVector(e),this.sub(Rl)}reflect(e){return this.sub(Rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rl=new W,Hf=new ca;class la{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(s,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Na.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Na.copy(n.boundingBox)),Na.applyMatrix4(e.matrixWorld),this.union(Na)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mo),Ua.subVectors(this.max,Mo),ms.subVectors(e.a,Mo),gs.subVectors(e.b,Mo),_s.subVectors(e.c,Mo),Qi.subVectors(gs,ms),Zi.subVectors(_s,gs),Rr.subVectors(ms,_s);let t=[0,-Qi.z,Qi.y,0,-Zi.z,Zi.y,0,-Rr.z,Rr.y,Qi.z,0,-Qi.x,Zi.z,0,-Zi.x,Rr.z,0,-Rr.x,-Qi.y,Qi.x,0,-Zi.y,Zi.x,0,-Rr.y,Rr.x,0];return!Il(t,ms,gs,_s,Ua)||(t=[1,0,0,0,1,0,0,0,1],!Il(t,ms,gs,_s,Ua))?!1:(Oa.crossVectors(Qi,Zi),t=[Oa.x,Oa.y,Oa.z],Il(t,ms,gs,_s,Ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xi=[new W,new W,new W,new W,new W,new W,new W,new W],qn=new W,Na=new la,ms=new W,gs=new W,_s=new W,Qi=new W,Zi=new W,Rr=new W,Mo=new W,Ua=new W,Oa=new W,Ir=new W;function Il(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ir.fromArray(i,s);const a=r.x*Math.abs(Ir.x)+r.y*Math.abs(Ir.y)+r.z*Math.abs(Ir.z),l=e.dot(Ir),u=t.dot(Ir),h=n.dot(Ir);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>a)return!1}return!0}const tE=new la,Ao=new W,Cl=new W;class Hh{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):tE.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ao.subVectors(e,this.center);const t=Ao.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ao,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ao.copy(e.center).add(Cl)),this.expandByPoint(Ao.copy(e.center).sub(Cl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new W,Pl=new W,Fa=new W,er=new W,Dl=new W,ka=new W,Ll=new W;class nE{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Pl.copy(e).add(t).multiplyScalar(.5),Fa.copy(t).sub(e).normalize(),er.copy(this.origin).sub(Pl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Fa),a=er.dot(this.direction),l=-er.dot(Fa),u=er.lengthSq(),h=Math.abs(1-o*o);let d,f,_,S;if(h>0)if(d=o*l-a,f=o*a-l,S=s*h,d>=0)if(f>=-S)if(f<=S){const M=1/h;d*=M,f*=M,_=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),_=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),_=-d*d+f*(f+2*l)+u;else f<=-S?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),_=-d*d+f*(f+2*l)+u):f<=S?(d=0,f=Math.min(Math.max(-s,-l),s),_=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),_=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),_=-d*d+f*(f+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Pl).addScaledVector(Fa,f),_}intersectSphere(e,t){wi.subVectors(e.center,this.origin);const n=wi.dot(this.direction),r=wi.dot(wi)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,n,r,s){Dl.subVectors(t,e),ka.subVectors(n,e),Ll.crossVectors(Dl,ka);let o=this.direction.dot(Ll),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;er.subVectors(this.origin,e);const l=a*this.direction.dot(ka.crossVectors(er,ka));if(l<0)return null;const u=a*this.direction.dot(Dl.cross(er));if(u<0||l+u>o)return null;const h=-a*er.dot(Ll);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,t,n,r,s,o,a,l,u,h,d,f,_,S,M,m){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,u,h,d,f,_,S,M,m)}set(e,t,n,r,s,o,a,l,u,h,d,f,_,S,M,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=u,g[6]=h,g[10]=d,g[14]=f,g[3]=_,g[7]=S,g[11]=M,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/vs.setFromMatrixColumn(e,0).length(),s=1/vs.setFromMatrixColumn(e,1).length(),o=1/vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*h,_=o*d,S=a*h,M=a*d;t[0]=l*h,t[4]=-l*d,t[8]=u,t[1]=_+S*u,t[5]=f-M*u,t[9]=-a*l,t[2]=M-f*u,t[6]=S+_*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,_=l*d,S=u*h,M=u*d;t[0]=f+M*a,t[4]=S*a-_,t[8]=o*u,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=_*a-S,t[6]=M+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,_=l*d,S=u*h,M=u*d;t[0]=f-M*a,t[4]=-o*d,t[8]=S+_*a,t[1]=_+S*a,t[5]=o*h,t[9]=M-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,_=o*d,S=a*h,M=a*d;t[0]=l*h,t[4]=S*u-_,t[8]=f*u+M,t[1]=l*d,t[5]=M*u+f,t[9]=_*u-S,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,_=o*u,S=a*l,M=a*u;t[0]=l*h,t[4]=M-f*d,t[8]=S*d+_,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-u*h,t[6]=_*d+S,t[10]=f-M*d}else if(e.order==="XZY"){const f=o*l,_=o*u,S=a*l,M=a*u;t[0]=l*h,t[4]=-d,t[8]=u*h,t[1]=f*d+M,t[5]=o*h,t[9]=_*d-S,t[2]=S*d-_,t[6]=a*h,t[10]=M*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iE,e,rE)}lookAt(e,t,n){const r=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),tr.crossVectors(n,Un),tr.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),tr.crossVectors(n,Un)),tr.normalize(),Va.crossVectors(Un,tr),r[0]=tr.x,r[4]=Va.x,r[8]=Un.x,r[1]=tr.y,r[5]=Va.y,r[9]=Un.y,r[2]=tr.z,r[6]=Va.z,r[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],h=n[1],d=n[5],f=n[9],_=n[13],S=n[2],M=n[6],m=n[10],g=n[14],P=n[3],D=n[7],R=n[11],V=n[15],F=r[0],x=r[4],T=r[8],v=r[12],y=r[1],w=r[5],L=r[9],A=r[13],Z=r[2],ie=r[6],ne=r[10],ce=r[14],Y=r[3],_e=r[7],k=r[11],O=r[15];return s[0]=o*F+a*y+l*Z+u*Y,s[4]=o*x+a*w+l*ie+u*_e,s[8]=o*T+a*L+l*ne+u*k,s[12]=o*v+a*A+l*ce+u*O,s[1]=h*F+d*y+f*Z+_*Y,s[5]=h*x+d*w+f*ie+_*_e,s[9]=h*T+d*L+f*ne+_*k,s[13]=h*v+d*A+f*ce+_*O,s[2]=S*F+M*y+m*Z+g*Y,s[6]=S*x+M*w+m*ie+g*_e,s[10]=S*T+M*L+m*ne+g*k,s[14]=S*v+M*A+m*ce+g*O,s[3]=P*F+D*y+R*Z+V*Y,s[7]=P*x+D*w+R*ie+V*_e,s[11]=P*T+D*L+R*ne+V*k,s[15]=P*v+D*A+R*ce+V*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],h=e[2],d=e[6],f=e[10],_=e[14],S=e[3],M=e[7],m=e[11],g=e[15];return S*(+s*l*d-r*u*d-s*a*f+n*u*f+r*a*_-n*l*_)+M*(+t*l*_-t*u*f+s*o*f-r*o*_+r*u*h-s*l*h)+m*(+t*u*d-t*a*_-s*o*d+n*o*_+s*a*h-n*u*h)+g*(-r*a*h-t*l*d+t*a*f+r*o*d-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],d=e[9],f=e[10],_=e[11],S=e[12],M=e[13],m=e[14],g=e[15],P=d*m*u-M*f*u+M*l*_-a*m*_-d*l*g+a*f*g,D=S*f*u-h*m*u-S*l*_+o*m*_+h*l*g-o*f*g,R=h*M*u-S*d*u+S*a*_-o*M*_-h*a*g+o*d*g,V=S*d*l-h*M*l-S*a*f+o*M*f+h*a*m-o*d*m,F=t*P+n*D+r*R+s*V;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const x=1/F;return e[0]=P*x,e[1]=(M*f*s-d*m*s-M*r*_+n*m*_+d*r*g-n*f*g)*x,e[2]=(a*m*s-M*l*s+M*r*u-n*m*u-a*r*g+n*l*g)*x,e[3]=(d*l*s-a*f*s-d*r*u+n*f*u+a*r*_-n*l*_)*x,e[4]=D*x,e[5]=(h*m*s-S*f*s+S*r*_-t*m*_-h*r*g+t*f*g)*x,e[6]=(S*l*s-o*m*s-S*r*u+t*m*u+o*r*g-t*l*g)*x,e[7]=(o*f*s-h*l*s+h*r*u-t*f*u-o*r*_+t*l*_)*x,e[8]=R*x,e[9]=(S*d*s-h*M*s-S*n*_+t*M*_+h*n*g-t*d*g)*x,e[10]=(o*M*s-S*a*s+S*n*u-t*M*u-o*n*g+t*a*g)*x,e[11]=(h*a*s-o*d*s-h*n*u+t*d*u+o*n*_-t*a*_)*x,e[12]=V*x,e[13]=(h*M*r-S*d*r+S*n*f-t*M*f-h*n*m+t*d*m)*x,e[14]=(S*a*r-o*M*r-S*n*l+t*M*l+o*n*m-t*a*m)*x,e[15]=(o*d*r-h*a*r+h*n*l-t*d*l-o*n*f+t*a*f)*x,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,u=s*o,h=s*a;return this.set(u*o+n,u*a-r*l,u*l+r*a,0,u*a+r*l,h*a+n,h*l-r*o,0,u*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,h=o+o,d=a+a,f=s*u,_=s*h,S=s*d,M=o*h,m=o*d,g=a*d,P=l*u,D=l*h,R=l*d,V=n.x,F=n.y,x=n.z;return r[0]=(1-(M+g))*V,r[1]=(_+R)*V,r[2]=(S-D)*V,r[3]=0,r[4]=(_-R)*F,r[5]=(1-(f+g))*F,r[6]=(m+P)*F,r[7]=0,r[8]=(S+D)*x,r[9]=(m-P)*x,r[10]=(1-(f+M))*x,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=vs.set(r[0],r[1],r[2]).length();const o=vs.set(r[4],r[5],r[6]).length(),a=vs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Xn.copy(this);const u=1/s,h=1/o,d=1/a;return Xn.elements[0]*=u,Xn.elements[1]*=u,Xn.elements[2]*=u,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=d,Xn.elements[9]*=d,Xn.elements[10]*=d,t.setFromRotationMatrix(Xn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Di){const l=this.elements,u=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let _,S;if(a===Di)_=-(o+s)/(o-s),S=-2*o*s/(o-s);else if(a===Rc)_=-o/(o-s),S=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Di){const l=this.elements,u=1/(t-e),h=1/(n-r),d=1/(o-s),f=(t+e)*u,_=(n+r)*h;let S,M;if(a===Di)S=(o+s)*d,M=-2*d;else if(a===Rc)S=s*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=M,l[14]=-S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vs=new W,Xn=new zt,iE=new W(0,0,0),rE=new W(1,1,1),tr=new W,Va=new W,Un=new W,Wf=new zt,qf=new ca;class ni{constructor(e=0,t=0,n=0,r=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],h=r[9],d=r[2],f=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,_),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ft(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qf.setFromEuler(this),this.setFromQuaternion(qf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class Cg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sE=0;const Xf=new W,ys=new ca,Mi=new zt,Ba=new W,bo=new W,oE=new W,aE=new ca,jf=new W(1,0,0),$f=new W(0,1,0),Yf=new W(0,0,1),Kf={type:"added"},cE={type:"removed"},Es={type:"childadded",child:null},Nl={type:"childremoved",child:null};class vn extends no{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sE++}),this.uuid=io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new W,t=new ni,n=new ca,r=new W(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new zt},normalMatrix:{value:new rt}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(jf,e)}rotateY(e){return this.rotateOnAxis($f,e)}rotateZ(e){return this.rotateOnAxis(Yf,e)}translateOnAxis(e,t){return Xf.copy(e).applyQuaternion(this.quaternion),this.position.add(Xf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jf,e)}translateY(e){return this.translateOnAxis($f,e)}translateZ(e){return this.translateOnAxis(Yf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ba.copy(e):Ba.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(bo,Ba,this.up):Mi.lookAt(Ba,bo,this.up),this.quaternion.setFromRotationMatrix(Mi),r&&(Mi.extractRotation(r.matrixWorld),ys.setFromRotationMatrix(Mi),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kf),Es.child=e,this.dispatchEvent(Es),Es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cE),Nl.child=e,this.dispatchEvent(Nl),Nl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kf),Es.child=e,this.dispatchEvent(Es),Es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e,oE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,aE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),_=o(e.animations),S=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),_.length>0&&(n.animations=_),S.length>0&&(n.nodes=S)}return n.object=r,n;function o(a){const l=[];for(const u in a){const h=a[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}vn.DEFAULT_UP=new W(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new W,Ai=new W,Ul=new W,bi=new W,Ts=new W,Ss=new W,Jf=new W,Ol=new W,Fl=new W,kl=new W,Vl=new Bt,Bl=new Bt,zl=new Bt;class Yn{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),jn.subVectors(e,t),r.cross(jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){jn.subVectors(r,t),Ai.subVectors(n,t),Ul.subVectors(e,t);const o=jn.dot(jn),a=jn.dot(Ai),l=jn.dot(Ul),u=Ai.dot(Ai),h=Ai.dot(Ul),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,_=(u*l-a*h)*f,S=(o*h-a*l)*f;return s.set(1-_-S,S,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Vl.setScalar(0),Bl.setScalar(0),zl.setScalar(0),Vl.fromBufferAttribute(e,t),Bl.fromBufferAttribute(e,n),zl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Vl,s.x),o.addScaledVector(Bl,s.y),o.addScaledVector(zl,s.z),o}static isFrontFacing(e,t,n,r){return jn.subVectors(n,t),Ai.subVectors(e,t),jn.cross(Ai).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),jn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Yn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Ts.subVectors(r,n),Ss.subVectors(s,n),Ol.subVectors(e,n);const l=Ts.dot(Ol),u=Ss.dot(Ol);if(l<=0&&u<=0)return t.copy(n);Fl.subVectors(e,r);const h=Ts.dot(Fl),d=Ss.dot(Fl);if(h>=0&&d<=h)return t.copy(r);const f=l*d-h*u;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ts,o);kl.subVectors(e,s);const _=Ts.dot(kl),S=Ss.dot(kl);if(S>=0&&_<=S)return t.copy(s);const M=_*u-l*S;if(M<=0&&u>=0&&S<=0)return a=u/(u-S),t.copy(n).addScaledVector(Ss,a);const m=h*S-_*d;if(m<=0&&d-h>=0&&_-S>=0)return Jf.subVectors(s,r),a=(d-h)/(d-h+(_-S)),t.copy(r).addScaledVector(Jf,a);const g=1/(m+M+f);return o=M*g,a=f*g,t.copy(n).addScaledVector(Ts,o).addScaledVector(Ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},za={h:0,s:0,l:0};function Gl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class yt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=xt.workingColorSpace){if(e=zh(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Gl(o,s,e+1/3),this.g=Gl(o,s,e),this.b=Gl(o,s,e-1/3)}return xt.toWorkingColorSpace(this,r),this}setStyle(e,t=kn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kn){const n=Pg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return xt.fromWorkingColorSpace(pn.copy(this),e),Math.round(ft(pn.r*255,0,255))*65536+Math.round(ft(pn.g*255,0,255))*256+Math.round(ft(pn.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(pn.copy(this),t);const n=pn.r,r=pn.g,s=pn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,u;const h=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=kn){xt.fromWorkingColorSpace(pn.copy(this),e);const t=pn.r,n=pn.g,r=pn.b;return e!==kn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(nr),this.setHSL(nr.h+e,nr.s+t,nr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(nr),e.getHSL(za);const n=Oo(nr.h,za.h,t),r=Oo(nr.s,za.s,t),s=Oo(nr.l,za.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new yt;yt.NAMES=Pg;let lE=0;class ro extends no{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=io(),this.name="",this.type="Material",this.blending=Ns,this.side=_r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gu,this.blendDst=_u,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Of,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(n.blending=this.blending),this.side!==_r&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==gu&&(n.blendSrc=this.blendSrc),this.blendDst!==_u&&(n.blendDst=this.blendDst),this.blendEquation!==kr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Of&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Wr extends ro{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new W,Ga=new ct;let uE=0;class hi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ff,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ga.fromBufferAttribute(this,t),Ga.applyMatrix3(e),this.setXY(t,Ga.x,Ga.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Rs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array),r=Sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array),r=Sn(r,this.array),s=Sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ff&&(e.usage=this.usage),e}}class Dg extends hi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Lg extends hi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Gt extends hi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let hE=0;const Fn=new zt,Hl=new vn,xs=new W,On=new la,Ro=new la,nn=new W;class Hn extends no{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rg(e)?Lg:Dg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new rt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,n){return Fn.makeTranslation(e,t,n),this.applyMatrix4(Fn),this}scale(e,t,n){return Fn.makeScale(e,t,n),this.applyMatrix4(Fn),this}lookAt(e){return Hl.lookAt(e),Hl.updateMatrix(),this.applyMatrix4(Hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Gt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new la);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];On.setFromBufferAttribute(s),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ro.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(On.min,Ro.min),On.expandByPoint(nn),nn.addVectors(On.max,Ro.max),On.expandByPoint(nn)):(On.expandByPoint(Ro.min),On.expandByPoint(Ro.max))}On.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)nn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(nn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)nn.fromBufferAttribute(a,u),l&&(xs.fromBufferAttribute(e,u),nn.add(xs)),r=Math.max(r,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<n.count;T++)a[T]=new W,l[T]=new W;const u=new W,h=new W,d=new W,f=new ct,_=new ct,S=new ct,M=new W,m=new W;function g(T,v,y){u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,v),d.fromBufferAttribute(n,y),f.fromBufferAttribute(s,T),_.fromBufferAttribute(s,v),S.fromBufferAttribute(s,y),h.sub(u),d.sub(u),_.sub(f),S.sub(f);const w=1/(_.x*S.y-S.x*_.y);isFinite(w)&&(M.copy(h).multiplyScalar(S.y).addScaledVector(d,-_.y).multiplyScalar(w),m.copy(d).multiplyScalar(_.x).addScaledVector(h,-S.x).multiplyScalar(w),a[T].add(M),a[v].add(M),a[y].add(M),l[T].add(m),l[v].add(m),l[y].add(m))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let T=0,v=P.length;T<v;++T){const y=P[T],w=y.start,L=y.count;for(let A=w,Z=w+L;A<Z;A+=3)g(e.getX(A+0),e.getX(A+1),e.getX(A+2))}const D=new W,R=new W,V=new W,F=new W;function x(T){V.fromBufferAttribute(r,T),F.copy(V);const v=a[T];D.copy(v),D.sub(V.multiplyScalar(V.dot(v))).normalize(),R.crossVectors(F,v);const w=R.dot(l[T])<0?-1:1;o.setXYZW(T,D.x,D.y,D.z,w)}for(let T=0,v=P.length;T<v;++T){const y=P[T],w=y.start,L=y.count;for(let A=w,Z=w+L;A<Z;A+=3)x(e.getX(A+0)),x(e.getX(A+1)),x(e.getX(A+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,_=n.count;f<_;f++)n.setXYZ(f,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,u=new W,h=new W,d=new W;if(e)for(let f=0,_=e.count;f<_;f+=3){const S=e.getX(f+0),M=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,S),s.fromBufferAttribute(t,M),o.fromBufferAttribute(t,m),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(n,S),l.fromBufferAttribute(n,M),u.fromBufferAttribute(n,m),a.add(h),l.add(h),u.add(h),n.setXYZ(S,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,_=t.count;f<_;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,l){const u=a.array,h=a.itemSize,d=a.normalized,f=new u.constructor(l.length*h);let _=0,S=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?_=l[M]*a.data.stride+a.offset:_=l[M]*h;for(let g=0;g<h;g++)f[S++]=u[_++]}return new hi(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Hn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,n);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let h=0,d=u.length;h<d;h++){const f=u[h],_=e(f,n);l.push(_)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let d=0,f=u.length;d<f;d++){const _=u[d];h.push(_.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(t))}const s=e.morphAttributes;for(const u in s){const h=[],d=s[u];for(let f=0,_=d.length;f<_;f++)h.push(d[f].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,h=o.length;u<h;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qf=new zt,Cr=new nE,Ha=new Hh,Zf=new W,Wa=new W,qa=new W,Xa=new W,Wl=new W,ja=new W,ep=new W,$a=new W;class Oe extends vn{constructor(e=new Hn,t=new Wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ja.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=a[l],d=s[l];h!==0&&(Wl.fromBufferAttribute(d,e),o?ja.addScaledVector(Wl,h):ja.addScaledVector(Wl.sub(t),h))}t.add(ja)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(s),Cr.copy(e.ray).recast(e.near),!(Ha.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(Ha,Zf)===null||Cr.origin.distanceToSquared(Zf)>(e.far-e.near)**2))&&(Qf.copy(s).invert(),Cr.copy(e.ray).applyMatrix4(Qf),!(n.boundingBox!==null&&Cr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Cr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,_=s.drawRange;if(a!==null)if(Array.isArray(o))for(let S=0,M=f.length;S<M;S++){const m=f[S],g=o[m.materialIndex],P=Math.max(m.start,_.start),D=Math.min(a.count,Math.min(m.start+m.count,_.start+_.count));for(let R=P,V=D;R<V;R+=3){const F=a.getX(R),x=a.getX(R+1),T=a.getX(R+2);r=Ya(this,g,e,n,u,h,d,F,x,T),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const S=Math.max(0,_.start),M=Math.min(a.count,_.start+_.count);for(let m=S,g=M;m<g;m+=3){const P=a.getX(m),D=a.getX(m+1),R=a.getX(m+2);r=Ya(this,o,e,n,u,h,d,P,D,R),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let S=0,M=f.length;S<M;S++){const m=f[S],g=o[m.materialIndex],P=Math.max(m.start,_.start),D=Math.min(l.count,Math.min(m.start+m.count,_.start+_.count));for(let R=P,V=D;R<V;R+=3){const F=R,x=R+1,T=R+2;r=Ya(this,g,e,n,u,h,d,F,x,T),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const S=Math.max(0,_.start),M=Math.min(l.count,_.start+_.count);for(let m=S,g=M;m<g;m+=3){const P=m,D=m+1,R=m+2;r=Ya(this,o,e,n,u,h,d,P,D,R),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function dE(i,e,t,n,r,s,o,a){let l;if(e.side===In?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===_r,a),l===null)return null;$a.copy(a),$a.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo($a);return u<t.near||u>t.far?null:{distance:u,point:$a.clone(),object:i}}function Ya(i,e,t,n,r,s,o,a,l,u){i.getVertexPosition(a,Wa),i.getVertexPosition(l,qa),i.getVertexPosition(u,Xa);const h=dE(i,e,t,n,Wa,qa,Xa,ep);if(h){const d=new W;Yn.getBarycoord(ep,Wa,qa,Xa,d),r&&(h.uv=Yn.getInterpolatedAttribute(r,a,l,u,d,new ct)),s&&(h.uv1=Yn.getInterpolatedAttribute(s,a,l,u,d,new ct)),o&&(h.normal=Yn.getInterpolatedAttribute(o,a,l,u,d,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new W,materialIndex:0};Yn.getNormal(Wa,qa,Xa,f.normal),h.face=f,h.barycoord=d}return h}class Tt extends Hn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],h=[],d=[];let f=0,_=0;S("z","y","x",-1,-1,n,t,e,o,s,0),S("z","y","x",1,-1,n,t,-e,o,s,1),S("x","z","y",1,1,e,n,t,r,o,2),S("x","z","y",1,-1,e,n,-t,r,o,3),S("x","y","z",1,-1,e,t,n,r,s,4),S("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Gt(u,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(d,2));function S(M,m,g,P,D,R,V,F,x,T,v){const y=R/x,w=V/T,L=R/2,A=V/2,Z=F/2,ie=x+1,ne=T+1;let ce=0,Y=0;const _e=new W;for(let k=0;k<ne;k++){const O=k*w-A;for(let le=0;le<ie;le++){const fe=le*y-L;_e[M]=fe*P,_e[m]=O*D,_e[g]=Z,u.push(_e.x,_e.y,_e.z),_e[M]=0,_e[m]=0,_e[g]=F>0?1:-1,h.push(_e.x,_e.y,_e.z),d.push(le/x),d.push(1-k/T),ce+=1}}for(let k=0;k<T;k++)for(let O=0;O<x;O++){const le=f+O+ie*k,fe=f+O+ie*(k+1),X=f+(O+1)+ie*(k+1),ee=f+(O+1)+ie*k;l.push(le,fe,ee),l.push(fe,X,ee),Y+=6}a.addGroup(_,Y,v),_+=Y,f+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function xn(i){const e={};for(let t=0;t<i.length;t++){const n=$s(i[t]);for(const r in n)e[r]=n[r]}return e}function fE(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ng(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const pE={clone:$s,merge:xn};var mE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vr extends ro{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mE,this.fragmentShader=gE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=fE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ug extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ir=new W,tp=new ct,np=new ct;class Vn extends Ug{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$o*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Uo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $o*2*Math.atan(Math.tan(Uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ir.x,ir.y).multiplyScalar(-e/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ir.x,ir.y).multiplyScalar(-e/ir.z)}getViewSize(e,t){return this.getViewBounds(e,tp,np),t.subVectors(np,tp)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Uo*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/u,r*=o.width/l,n*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ws=-90,Ms=1;class _E extends vn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vn(ws,Ms,e,t);r.layers=this.layers,this.add(r);const s=new Vn(ws,Ms,e,t);s.layers=this.layers,this.add(s);const o=new Vn(ws,Ms,e,t);o.layers=this.layers,this.add(o);const a=new Vn(ws,Ms,e,t);a.layers=this.layers,this.add(a);const l=new Vn(ws,Ms,e,t);l.layers=this.layers,this.add(l);const u=new Vn(ws,Ms,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Di)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rc)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,u),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(d,f,_),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class Og extends Cn{constructor(e,t,n,r,s,o,a,l,u,h){e=e!==void 0?e:[],t=t!==void 0?t:Hs,super(e,t,n,r,s,o,a,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vE extends Yr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Og(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:li}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Tt(5,5,5),s=new vr({name:"CubemapFromEquirect",uniforms:$s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:In,blending:ur});s.uniforms.tEquirect.value=t;const o=new Oe(r,s),a=t.minFilter;return t.minFilter===zr&&(t.minFilter=li),new _E(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class an extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yE={type:"move"};class ql{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,n),g=this._getHandJoint(u,M);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=h.position.distanceTo(d.position),_=.02,S=.005;u.inputState.pinching&&f>_+S?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=_-S&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new an;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Wh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new yt(e),this.near=t,this.far=n}clone(){return new Wh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class EE extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Xl=new W,TE=new W,SE=new rt;class Ur{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Xl.subVectors(n,t).cross(TE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Xl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||SE.getNormalMatrix(e),r=this.coplanarPoint(Xl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new Hh,Ka=new W;class qh{constructor(e=new Ur,t=new Ur,n=new Ur,r=new Ur,s=new Ur,o=new Ur){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Di){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],_=r[8],S=r[9],M=r[10],m=r[11],g=r[12],P=r[13],D=r[14],R=r[15];if(n[0].setComponents(l-s,f-u,m-_,R-g).normalize(),n[1].setComponents(l+s,f+u,m+_,R+g).normalize(),n[2].setComponents(l+o,f+h,m+S,R+P).normalize(),n[3].setComponents(l-o,f-h,m-S,R-P).normalize(),n[4].setComponents(l-a,f-d,m-M,R-D).normalize(),t===Di)n[5].setComponents(l+a,f+d,m+M,R+D).normalize();else if(t===Rc)n[5].setComponents(a,d,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(e){return Pr.center.set(0,0,0),Pr.radius=.7071067811865476,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ka.x=r.normal.x>0?e.max.x:e.min.x,Ka.y=r.normal.y>0?e.max.y:e.min.y,Ka.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fg extends Cn{constructor(e,t,n,r,s,o,a,l,u,h=Us){if(h!==Us&&h!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Us&&(n=$r),n===void 0&&h===Xs&&(n=qs),super(null,r,s,o,a,l,h,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ei,this.minFilter=l!==void 0?l:ei,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Xh extends Hn{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],u=new W,h=new ct;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const _=n+d/t*r;u.x=e*Math.cos(_),u.y=e*Math.sin(_),o.push(u.x,u.y,u.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Gt(o,3)),this.setAttribute("normal",new Gt(a,3)),this.setAttribute("uv",new Gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class qr extends Hn{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],f=[],_=[];let S=0;const M=[],m=n/2;let g=0;P(),o===!1&&(e>0&&D(!0),t>0&&D(!1)),this.setIndex(h),this.setAttribute("position",new Gt(d,3)),this.setAttribute("normal",new Gt(f,3)),this.setAttribute("uv",new Gt(_,2));function P(){const R=new W,V=new W;let F=0;const x=(t-e)/n;for(let T=0;T<=s;T++){const v=[],y=T/s,w=y*(t-e)+e;for(let L=0;L<=r;L++){const A=L/r,Z=A*l+a,ie=Math.sin(Z),ne=Math.cos(Z);V.x=w*ie,V.y=-y*n+m,V.z=w*ne,d.push(V.x,V.y,V.z),R.set(ie,x,ne).normalize(),f.push(R.x,R.y,R.z),_.push(A,1-y),v.push(S++)}M.push(v)}for(let T=0;T<r;T++)for(let v=0;v<s;v++){const y=M[v][T],w=M[v+1][T],L=M[v+1][T+1],A=M[v][T+1];(e>0||v!==0)&&(h.push(y,w,A),F+=3),(t>0||v!==s-1)&&(h.push(w,L,A),F+=3)}u.addGroup(g,F,0),g+=F}function D(R){const V=S,F=new ct,x=new W;let T=0;const v=R===!0?e:t,y=R===!0?1:-1;for(let L=1;L<=r;L++)d.push(0,m*y,0),f.push(0,y,0),_.push(.5,.5),S++;const w=S;for(let L=0;L<=r;L++){const Z=L/r*l+a,ie=Math.cos(Z),ne=Math.sin(Z);x.x=v*ne,x.y=m*y,x.z=v*ie,d.push(x.x,x.y,x.z),f.push(0,y,0),F.x=ie*.5+.5,F.y=ne*.5*y+.5,_.push(F.x,F.y),S++}for(let L=0;L<r;L++){const A=V+L,Z=w+L;R===!0?h.push(Z,Z+1,A):h.push(Z+1,Z,A),T+=3}u.addGroup(g,T,R===!0?1:2),g+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jh extends qr{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new jh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $h extends Hn{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),u(n),h(),this.setAttribute("position",new Gt(s,3)),this.setAttribute("normal",new Gt(s.slice(),3)),this.setAttribute("uv",new Gt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(P){const D=new W,R=new W,V=new W;for(let F=0;F<t.length;F+=3)_(t[F+0],D),_(t[F+1],R),_(t[F+2],V),l(D,R,V,P)}function l(P,D,R,V){const F=V+1,x=[];for(let T=0;T<=F;T++){x[T]=[];const v=P.clone().lerp(R,T/F),y=D.clone().lerp(R,T/F),w=F-T;for(let L=0;L<=w;L++)L===0&&T===F?x[T][L]=v:x[T][L]=v.clone().lerp(y,L/w)}for(let T=0;T<F;T++)for(let v=0;v<2*(F-T)-1;v++){const y=Math.floor(v/2);v%2===0?(f(x[T][y+1]),f(x[T+1][y]),f(x[T][y])):(f(x[T][y+1]),f(x[T+1][y+1]),f(x[T+1][y]))}}function u(P){const D=new W;for(let R=0;R<s.length;R+=3)D.x=s[R+0],D.y=s[R+1],D.z=s[R+2],D.normalize().multiplyScalar(P),s[R+0]=D.x,s[R+1]=D.y,s[R+2]=D.z}function h(){const P=new W;for(let D=0;D<s.length;D+=3){P.x=s[D+0],P.y=s[D+1],P.z=s[D+2];const R=m(P)/2/Math.PI+.5,V=g(P)/Math.PI+.5;o.push(R,1-V)}S(),d()}function d(){for(let P=0;P<o.length;P+=6){const D=o[P+0],R=o[P+2],V=o[P+4],F=Math.max(D,R,V),x=Math.min(D,R,V);F>.9&&x<.1&&(D<.2&&(o[P+0]+=1),R<.2&&(o[P+2]+=1),V<.2&&(o[P+4]+=1))}}function f(P){s.push(P.x,P.y,P.z)}function _(P,D){const R=P*3;D.x=e[R+0],D.y=e[R+1],D.z=e[R+2]}function S(){const P=new W,D=new W,R=new W,V=new W,F=new ct,x=new ct,T=new ct;for(let v=0,y=0;v<s.length;v+=9,y+=6){P.set(s[v+0],s[v+1],s[v+2]),D.set(s[v+3],s[v+4],s[v+5]),R.set(s[v+6],s[v+7],s[v+8]),F.set(o[y+0],o[y+1]),x.set(o[y+2],o[y+3]),T.set(o[y+4],o[y+5]),V.copy(P).add(D).add(R).divideScalar(3);const w=m(V);M(F,y+0,P,w),M(x,y+2,D,w),M(T,y+4,R,w)}}function M(P,D,R,V){V<0&&P.x===1&&(o[D]=P.x-1),R.x===0&&R.z===0&&(o[D]=V/2/Math.PI+.5)}function m(P){return Math.atan2(P.z,-P.x)}function g(P){return Math.atan2(-P.y,Math.sqrt(P.x*P.x+P.z*P.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $h(e.vertices,e.indices,e.radius,e.details)}}class Yh extends $h{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Yh(e.radius,e.detail)}}class ua extends Hn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),u=a+1,h=l+1,d=e/a,f=t/l,_=[],S=[],M=[],m=[];for(let g=0;g<h;g++){const P=g*f-o;for(let D=0;D<u;D++){const R=D*d-s;S.push(R,-P,0),M.push(0,0,1),m.push(D/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let P=0;P<a;P++){const D=P+u*g,R=P+u*(g+1),V=P+1+u*(g+1),F=P+1+u*g;_.push(D,R,F),_.push(R,V,F)}this.setIndex(_),this.setAttribute("position",new Gt(S,3)),this.setAttribute("normal",new Gt(M,3)),this.setAttribute("uv",new Gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.width,e.height,e.widthSegments,e.heightSegments)}}class Kh extends Hn{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],l=[],u=[],h=[];let d=e;const f=(t-e)/r,_=new W,S=new ct;for(let M=0;M<=r;M++){for(let m=0;m<=n;m++){const g=s+m/n*o;_.x=d*Math.cos(g),_.y=d*Math.sin(g),l.push(_.x,_.y,_.z),u.push(0,0,1),S.x=(_.x/t+1)/2,S.y=(_.y/t+1)/2,h.push(S.x,S.y)}d+=f}for(let M=0;M<r;M++){const m=M*(n+1);for(let g=0;g<n;g++){const P=g+m,D=P,R=P+n+1,V=P+n+2,F=P+1;a.push(D,R,F),a.push(R,V,F)}}this.setIndex(a),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Jh extends Hn{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],l=[],u=[],h=new W,d=new W,f=new W;for(let _=0;_<=n;_++)for(let S=0;S<=r;S++){const M=S/r*s,m=_/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(M),d.y=(e+t*Math.cos(m))*Math.sin(M),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),u.push(S/r),u.push(_/n)}for(let _=1;_<=n;_++)for(let S=1;S<=r;S++){const M=(r+1)*_+S-1,m=(r+1)*(_-1)+S-1,g=(r+1)*(_-1)+S,P=(r+1)*_+S;o.push(M,m,P),o.push(m,g,P)}this.setIndex(o),this.setAttribute("position",new Gt(a,3)),this.setAttribute("normal",new Gt(l,3)),this.setAttribute("uv",new Gt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class wn extends ro{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bh,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bn extends ro{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bh,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xE extends ro{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wE extends ro{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class kg extends vn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const jl=new zt,ip=new W,rp=new W;class ME{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qh,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ip.setFromMatrixPosition(e.matrixWorld),t.position.copy(ip),rp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rp),t.updateMatrixWorld(),jl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Vg extends Ug{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class AE extends ME{constructor(){super(new Vg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bE extends kg{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new AE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class RE extends kg{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class IE extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class CE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=sp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function sp(){return performance.now()}function op(i,e,t,n){const r=PE(n);switch(t){case Eg:return i*e;case Sg:return i*e;case xg:return i*e*2;case wg:return i*e/r.components*r.byteLength;case Fh:return i*e/r.components*r.byteLength;case Mg:return i*e*2/r.components*r.byteLength;case kh:return i*e*2/r.components*r.byteLength;case Tg:return i*e*3/r.components*r.byteLength;case Jn:return i*e*4/r.components*r.byteLength;case Vh:return i*e*4/r.components*r.byteLength;case cc:case lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case uc:case hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cu:case Du:return Math.max(i,16)*Math.max(e,8)/4;case Iu:case Pu:return Math.max(i,8)*Math.max(e,8)/2;case Lu:case Nu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Uu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ou:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ku:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Vu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Bu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case zu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Gu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Hu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Wu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case qu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Xu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ju:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case $u:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Yu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case dc:case Ku:case Ju:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ag:case Qu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Zu:case eh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function PE(i){switch(i){case Bi:case _g:return{byteLength:1,components:1};case jo:case vg:case aa:return{byteLength:2,components:1};case Uh:case Oh:return{byteLength:2,components:4};case $r:case Nh:case Pi:return{byteLength:4,components:1};case yg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bg(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function DE(i){const e=new WeakMap;function t(a,l){const u=a.array,h=a.usage,d=u.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,u,h),a.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,u){const h=l.array,d=l.updateRanges;if(i.bindBuffer(u,a),d.length===0)i.bufferSubData(u,0,h);else{d.sort((_,S)=>_.start-S.start);let f=0;for(let _=1;_<d.length;_++){const S=d[f],M=d[_];M.start<=S.start+S.count+1?S.count=Math.max(S.count,M.start+M.count-S.start):(++f,d[f]=M)}d.length=f+1;for(let _=0,S=d.length;_<S;_++){const M=d[_];i.bufferSubData(u,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var LE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NE=`#ifdef USE_ALPHAHASH
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
#endif`,UE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,OE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VE=`#ifdef USE_AOMAP
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
#endif`,BE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zE=`#ifdef USE_BATCHING
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
#endif`,GE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,HE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,WE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,XE=`#ifdef USE_IRIDESCENCE
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
#endif`,jE=`#ifdef USE_BUMPMAP
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
#endif`,$E=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,YE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,JE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,QE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ZE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nT=`#define PI 3.141592653589793
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
} // validated`,iT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rT=`vec3 transformedNormal = objectNormal;
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
#endif`,sT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lT="gl_FragColor = linearToOutputTexel( gl_FragColor );",uT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hT=`#ifdef USE_ENVMAP
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
#endif`,dT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fT=`#ifdef USE_ENVMAP
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
#endif`,pT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mT=`#ifdef USE_ENVMAP
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
#endif`,gT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_T=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ET=`#ifdef USE_GRADIENTMAP
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
}`,TT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ST=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wT=`uniform bool receiveShadow;
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
#endif`,MT=`#ifdef USE_ENVMAP
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
#endif`,AT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,RT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,IT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CT=`PhysicalMaterial material;
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
#endif`,PT=`struct PhysicalMaterial {
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
}`,DT=`
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
#endif`,LT=`#if defined( RE_IndirectDiffuse )
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
#endif`,NT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,UT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,VT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,GT=`#if defined( USE_POINTS_UV )
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
#endif`,HT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$T=`#ifdef USE_MORPHTARGETS
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
#endif`,YT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,JT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,QT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tS=`#ifdef USE_NORMALMAP
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
#endif`,nS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_S=`float getShadowMask() {
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
}`,vS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yS=`#ifdef USE_SKINNING
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
#endif`,ES=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TS=`#ifdef USE_SKINNING
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
#endif`,SS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,AS=`#ifdef USE_TRANSMISSION
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
#endif`,bS=`#ifdef USE_TRANSMISSION
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
#endif`,RS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LS=`uniform sampler2D t2D;
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
}`,NS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,US=`#ifdef ENVMAP_TYPE_CUBE
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
}`,OS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kS=`#include <common>
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
}`,VS=`#if DEPTH_PACKING == 3200
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
}`,BS=`#define DISTANCE
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
}`,zS=`#define DISTANCE
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
}`,GS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WS=`uniform float scale;
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
}`,qS=`uniform vec3 diffuse;
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
}`,XS=`#include <common>
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
}`,jS=`uniform vec3 diffuse;
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
}`,$S=`#define LAMBERT
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
}`,YS=`#define LAMBERT
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
}`,KS=`#define MATCAP
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
}`,JS=`#define MATCAP
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
}`,QS=`#define NORMAL
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
}`,ZS=`#define NORMAL
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
}`,ex=`#define PHONG
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
}`,tx=`#define PHONG
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
}`,nx=`#define STANDARD
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
}`,ix=`#define STANDARD
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
}`,rx=`#define TOON
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
}`,sx=`#define TOON
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
}`,ox=`uniform float size;
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
}`,ax=`uniform vec3 diffuse;
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
}`,cx=`#include <common>
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
}`,lx=`uniform vec3 color;
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
}`,ux=`uniform float rotation;
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
}`,hx=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:LE,alphahash_pars_fragment:NE,alphamap_fragment:UE,alphamap_pars_fragment:OE,alphatest_fragment:FE,alphatest_pars_fragment:kE,aomap_fragment:VE,aomap_pars_fragment:BE,batching_pars_vertex:zE,batching_vertex:GE,begin_vertex:HE,beginnormal_vertex:WE,bsdfs:qE,iridescence_fragment:XE,bumpmap_pars_fragment:jE,clipping_planes_fragment:$E,clipping_planes_pars_fragment:YE,clipping_planes_pars_vertex:KE,clipping_planes_vertex:JE,color_fragment:QE,color_pars_fragment:ZE,color_pars_vertex:eT,color_vertex:tT,common:nT,cube_uv_reflection_fragment:iT,defaultnormal_vertex:rT,displacementmap_pars_vertex:sT,displacementmap_vertex:oT,emissivemap_fragment:aT,emissivemap_pars_fragment:cT,colorspace_fragment:lT,colorspace_pars_fragment:uT,envmap_fragment:hT,envmap_common_pars_fragment:dT,envmap_pars_fragment:fT,envmap_pars_vertex:pT,envmap_physical_pars_fragment:MT,envmap_vertex:mT,fog_vertex:gT,fog_pars_vertex:_T,fog_fragment:vT,fog_pars_fragment:yT,gradientmap_pars_fragment:ET,lightmap_pars_fragment:TT,lights_lambert_fragment:ST,lights_lambert_pars_fragment:xT,lights_pars_begin:wT,lights_toon_fragment:AT,lights_toon_pars_fragment:bT,lights_phong_fragment:RT,lights_phong_pars_fragment:IT,lights_physical_fragment:CT,lights_physical_pars_fragment:PT,lights_fragment_begin:DT,lights_fragment_maps:LT,lights_fragment_end:NT,logdepthbuf_fragment:UT,logdepthbuf_pars_fragment:OT,logdepthbuf_pars_vertex:FT,logdepthbuf_vertex:kT,map_fragment:VT,map_pars_fragment:BT,map_particle_fragment:zT,map_particle_pars_fragment:GT,metalnessmap_fragment:HT,metalnessmap_pars_fragment:WT,morphinstance_vertex:qT,morphcolor_vertex:XT,morphnormal_vertex:jT,morphtarget_pars_vertex:$T,morphtarget_vertex:YT,normal_fragment_begin:KT,normal_fragment_maps:JT,normal_pars_fragment:QT,normal_pars_vertex:ZT,normal_vertex:eS,normalmap_pars_fragment:tS,clearcoat_normal_fragment_begin:nS,clearcoat_normal_fragment_maps:iS,clearcoat_pars_fragment:rS,iridescence_pars_fragment:sS,opaque_fragment:oS,packing:aS,premultiplied_alpha_fragment:cS,project_vertex:lS,dithering_fragment:uS,dithering_pars_fragment:hS,roughnessmap_fragment:dS,roughnessmap_pars_fragment:fS,shadowmap_pars_fragment:pS,shadowmap_pars_vertex:mS,shadowmap_vertex:gS,shadowmask_pars_fragment:_S,skinbase_vertex:vS,skinning_pars_vertex:yS,skinning_vertex:ES,skinnormal_vertex:TS,specularmap_fragment:SS,specularmap_pars_fragment:xS,tonemapping_fragment:wS,tonemapping_pars_fragment:MS,transmission_fragment:AS,transmission_pars_fragment:bS,uv_pars_fragment:RS,uv_pars_vertex:IS,uv_vertex:CS,worldpos_vertex:PS,background_vert:DS,background_frag:LS,backgroundCube_vert:NS,backgroundCube_frag:US,cube_vert:OS,cube_frag:FS,depth_vert:kS,depth_frag:VS,distanceRGBA_vert:BS,distanceRGBA_frag:zS,equirect_vert:GS,equirect_frag:HS,linedashed_vert:WS,linedashed_frag:qS,meshbasic_vert:XS,meshbasic_frag:jS,meshlambert_vert:$S,meshlambert_frag:YS,meshmatcap_vert:KS,meshmatcap_frag:JS,meshnormal_vert:QS,meshnormal_frag:ZS,meshphong_vert:ex,meshphong_frag:tx,meshphysical_vert:nx,meshphysical_frag:ix,meshtoon_vert:rx,meshtoon_frag:sx,points_vert:ox,points_frag:ax,shadow_vert:cx,shadow_frag:lx,sprite_vert:ux,sprite_frag:hx},Se={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},ai={basic:{uniforms:xn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:xn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new yt(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:xn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:xn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:xn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new yt(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:xn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:xn([Se.points,Se.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:xn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:xn([Se.common,Se.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:xn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:xn([Se.sprite,Se.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:xn([Se.common,Se.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:xn([Se.lights,Se.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};ai.physical={uniforms:xn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Ja={r:0,b:0,g:0},Dr=new ni,dx=new zt;function fx(i,e,t,n,r,s,o){const a=new yt(0);let l=s===!0?0:1,u,h,d=null,f=0,_=null;function S(D){let R=D.isScene===!0?D.background:null;return R&&R.isTexture&&(R=(D.backgroundBlurriness>0?t:e).get(R)),R}function M(D){let R=!1;const V=S(D);V===null?g(a,l):V&&V.isColor&&(g(V,1),R=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||R)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(D,R){const V=S(R);V&&(V.isCubeTexture||V.mapping===Jc)?(h===void 0&&(h=new Oe(new Tt(1,1,1),new vr({name:"BackgroundCubeMaterial",uniforms:$s(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,x,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Dr.copy(R.backgroundRotation),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),h.material.uniforms.envMap.value=V,h.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(dx.makeRotationFromEuler(Dr)),h.material.toneMapped=xt.getTransfer(V.colorSpace)!==It,(d!==V||f!==V.version||_!==i.toneMapping)&&(h.material.needsUpdate=!0,d=V,f=V.version,_=i.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null)):V&&V.isTexture&&(u===void 0&&(u=new Oe(new ua(2,2),new vr({name:"BackgroundMaterial",uniforms:$s(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:_r,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=V,u.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,u.material.toneMapped=xt.getTransfer(V.colorSpace)!==It,V.matrixAutoUpdate===!0&&V.updateMatrix(),u.material.uniforms.uvTransform.value.copy(V.matrix),(d!==V||f!==V.version||_!==i.toneMapping)&&(u.material.needsUpdate=!0,d=V,f=V.version,_=i.toneMapping),u.layers.enableAll(),D.unshift(u,u.geometry,u.material,0,0,null))}function g(D,R){D.getRGB(Ja,Ng(i)),n.buffers.color.setClear(Ja.r,Ja.g,Ja.b,R,o)}function P(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(D,R=1){a.set(D),l=R,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(D){l=D,g(a,l)},render:M,addToRenderList:m,dispose:P}}function px(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(y,w,L,A,Z){let ie=!1;const ne=d(A,L,w);s!==ne&&(s=ne,u(s.object)),ie=_(y,A,L,Z),ie&&S(y,A,L,Z),Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,R(y,w,L,A),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return i.createVertexArray()}function u(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function d(y,w,L){const A=L.wireframe===!0;let Z=n[y.id];Z===void 0&&(Z={},n[y.id]=Z);let ie=Z[w.id];ie===void 0&&(ie={},Z[w.id]=ie);let ne=ie[A];return ne===void 0&&(ne=f(l()),ie[A]=ne),ne}function f(y){const w=[],L=[],A=[];for(let Z=0;Z<t;Z++)w[Z]=0,L[Z]=0,A[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:L,attributeDivisors:A,object:y,attributes:{},index:null}}function _(y,w,L,A){const Z=s.attributes,ie=w.attributes;let ne=0;const ce=L.getAttributes();for(const Y in ce)if(ce[Y].location>=0){const k=Z[Y];let O=ie[Y];if(O===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(O=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(O=y.instanceColor)),k===void 0||k.attribute!==O||O&&k.data!==O.data)return!0;ne++}return s.attributesNum!==ne||s.index!==A}function S(y,w,L,A){const Z={},ie=w.attributes;let ne=0;const ce=L.getAttributes();for(const Y in ce)if(ce[Y].location>=0){let k=ie[Y];k===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(k=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(k=y.instanceColor));const O={};O.attribute=k,k&&k.data&&(O.data=k.data),Z[Y]=O,ne++}s.attributes=Z,s.attributesNum=ne,s.index=A}function M(){const y=s.newAttributes;for(let w=0,L=y.length;w<L;w++)y[w]=0}function m(y){g(y,0)}function g(y,w){const L=s.newAttributes,A=s.enabledAttributes,Z=s.attributeDivisors;L[y]=1,A[y]===0&&(i.enableVertexAttribArray(y),A[y]=1),Z[y]!==w&&(i.vertexAttribDivisor(y,w),Z[y]=w)}function P(){const y=s.newAttributes,w=s.enabledAttributes;for(let L=0,A=w.length;L<A;L++)w[L]!==y[L]&&(i.disableVertexAttribArray(L),w[L]=0)}function D(y,w,L,A,Z,ie,ne){ne===!0?i.vertexAttribIPointer(y,w,L,Z,ie):i.vertexAttribPointer(y,w,L,A,Z,ie)}function R(y,w,L,A){M();const Z=A.attributes,ie=L.getAttributes(),ne=w.defaultAttributeValues;for(const ce in ie){const Y=ie[ce];if(Y.location>=0){let _e=Z[ce];if(_e===void 0&&(ce==="instanceMatrix"&&y.instanceMatrix&&(_e=y.instanceMatrix),ce==="instanceColor"&&y.instanceColor&&(_e=y.instanceColor)),_e!==void 0){const k=_e.normalized,O=_e.itemSize,le=e.get(_e);if(le===void 0)continue;const fe=le.buffer,X=le.type,ee=le.bytesPerElement,he=X===i.INT||X===i.UNSIGNED_INT||_e.gpuType===Nh;if(_e.isInterleavedBufferAttribute){const te=_e.data,me=te.stride,Ue=_e.offset;if(te.isInstancedInterleavedBuffer){for(let xe=0;xe<Y.locationSize;xe++)g(Y.location+xe,te.meshPerAttribute);y.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let xe=0;xe<Y.locationSize;xe++)m(Y.location+xe);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let xe=0;xe<Y.locationSize;xe++)D(Y.location+xe,O/Y.locationSize,X,k,me*ee,(Ue+O/Y.locationSize*xe)*ee,he)}else{if(_e.isInstancedBufferAttribute){for(let te=0;te<Y.locationSize;te++)g(Y.location+te,_e.meshPerAttribute);y.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let te=0;te<Y.locationSize;te++)m(Y.location+te);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let te=0;te<Y.locationSize;te++)D(Y.location+te,O/Y.locationSize,X,k,O*ee,O/Y.locationSize*te*ee,he)}}else if(ne!==void 0){const k=ne[ce];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(Y.location,k);break;case 3:i.vertexAttrib3fv(Y.location,k);break;case 4:i.vertexAttrib4fv(Y.location,k);break;default:i.vertexAttrib1fv(Y.location,k)}}}}P()}function V(){T();for(const y in n){const w=n[y];for(const L in w){const A=w[L];for(const Z in A)h(A[Z].object),delete A[Z];delete w[L]}delete n[y]}}function F(y){if(n[y.id]===void 0)return;const w=n[y.id];for(const L in w){const A=w[L];for(const Z in A)h(A[Z].object),delete A[Z];delete w[L]}delete n[y.id]}function x(y){for(const w in n){const L=n[w];if(L[y.id]===void 0)continue;const A=L[y.id];for(const Z in A)h(A[Z].object),delete A[Z];delete L[y.id]}}function T(){v(),o=!0,s!==r&&(s=r,u(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:v,dispose:V,releaseStatesOfGeometry:F,releaseStatesOfProgram:x,initAttributes:M,enableAttribute:m,disableUnusedAttributes:P}}function mx(i,e,t){let n;function r(u){n=u}function s(u,h){i.drawArrays(n,u,h),t.update(h,n,1)}function o(u,h,d){d!==0&&(i.drawArraysInstanced(n,u,h,d),t.update(h,n,d))}function a(u,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,d);let _=0;for(let S=0;S<d;S++)_+=h[S];t.update(_,n,1)}function l(u,h,d,f){if(d===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let S=0;S<u.length;S++)o(u[S],h[S],f[S]);else{_.multiDrawArraysInstancedWEBGL(n,u,0,h,0,f,0,d);let S=0;for(let M=0;M<d;M++)S+=h[M]*f[M];t.update(S,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gx(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(x){return!(x!==Jn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){const T=x===aa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Bi&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&x!==Pi&&!T)}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const h=l(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),P=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),V=S>0,F=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:_,maxVertexTextures:S,maxTextureSize:M,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:P,maxVaryings:D,maxFragmentUniforms:R,vertexTextures:V,maxSamples:F}}function _x(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Ur,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const _=d.length!==0||f||n!==0||r;return r=f,n=d.length,_},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,_){const S=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!r||S===null||S.length===0||s&&!m)s?h(null):u();else{const P=s?0:n,D=P*4;let R=g.clippingState||null;l.value=R,R=h(S,f,D,_);for(let V=0;V!==D;++V)R[V]=t[V];g.clippingState=R,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=P}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,_,S){const M=d!==null?d.length:0;let m=null;if(M!==0){if(m=l.value,S!==!0||m===null){const g=_+M*4,P=f.matrixWorldInverse;a.getNormalMatrix(P),(m===null||m.length<g)&&(m=new Float32Array(g));for(let D=0,R=_;D!==M;++D,R+=4)o.copy(d[D]).applyMatrix4(P,a),o.normal.toArray(m,R),m[R+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}function vx(i){let e=new WeakMap;function t(o,a){return a===Mu?o.mapping=Hs:a===Au&&(o.mapping=Ws),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Mu||a===Au)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new vE(l.height);return u.fromEquirectangularTexture(i,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ls=4,ap=[.125,.215,.35,.446,.526,.582],Vr=20,$l=new Vg,cp=new yt;let Yl=null,Kl=0,Jl=0,Ql=!1;const Or=(1+Math.sqrt(5))/2,As=1/Or,lp=[new W(-Or,As,0),new W(Or,As,0),new W(-As,0,Or),new W(As,0,Or),new W(0,Or,-As),new W(0,Or,As),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],yx=new W;class up{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=yx}=s;Yl=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yl,Kl,Jl),this._renderer.xr.enabled=Ql,e.scissorTest=!1,Qa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yl=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:li,minFilter:li,generateMipmaps:!1,type:aa,format:Jn,colorSpace:js,depthBuffer:!1},r=hp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hp(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ex(s)),this._blurMaterial=Tx(s,e,t)}return r}_compileMaterial(e){const t=new Oe(this._lodPlanes[0],e);this._renderer.compile(t,$l)}_sceneToCubeUV(e,t,n,r,s){const l=new Vn(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,_=d.toneMapping;d.getClearColor(cp),d.toneMapping=hr,d.autoClear=!1;const S=new Wr({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),M=new Oe(new Tt,S);let m=!1;const g=e.background;g?g.isColor&&(S.color.copy(g),e.background=null,m=!0):(S.color.copy(cp),m=!0);for(let P=0;P<6;P++){const D=P%3;D===0?(l.up.set(0,u[P],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[P],s.y,s.z)):D===1?(l.up.set(0,0,u[P]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[P],s.z)):(l.up.set(0,u[P],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[P]));const R=this._cubeSize;Qa(r,D*R,P>2?R:0,R,R),d.setRenderTarget(r),m&&d.render(M,l),d.render(e,l)}M.geometry.dispose(),M.material.dispose(),d.toneMapping=_,d.autoClear=f,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Hs||e.mapping===Ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Oe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Qa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,$l)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=lp[(r-s-1)%lp.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Oe(this._lodPlanes[r],u),f=u.uniforms,_=this._sizeLods[n]-1,S=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Vr-1),M=s/S,m=isFinite(s)?1+Math.floor(h*M):Vr;m>Vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vr}`);const g=[];let P=0;for(let x=0;x<Vr;++x){const T=x/M,v=Math.exp(-T*T/2);g.push(v),x===0?P+=v:x<m&&(P+=2*v)}for(let x=0;x<g.length;x++)g[x]=g[x]/P;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:D}=this;f.dTheta.value=S,f.mipInt.value=D-n;const R=this._sizeLods[r],V=3*R*(r>D-Ls?r-D+Ls:0),F=4*(this._cubeSize-R);Qa(t,V,F,3*R,2*R),l.setRenderTarget(t),l.render(d,$l)}}function Ex(i){const e=[],t=[],n=[];let r=i;const s=i-Ls+1+ap.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Ls?l=ap[o-i+Ls-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),h=-u,d=1+u,f=[h,h,d,h,d,d,h,h,d,d,h,d],_=6,S=6,M=3,m=2,g=1,P=new Float32Array(M*S*_),D=new Float32Array(m*S*_),R=new Float32Array(g*S*_);for(let F=0;F<_;F++){const x=F%3*2/3-1,T=F>2?0:-1,v=[x,T,0,x+2/3,T,0,x+2/3,T+1,0,x,T,0,x+2/3,T+1,0,x,T+1,0];P.set(v,M*S*F),D.set(f,m*S*F);const y=[F,F,F,F,F,F];R.set(y,g*S*F)}const V=new Hn;V.setAttribute("position",new hi(P,M)),V.setAttribute("uv",new hi(D,m)),V.setAttribute("faceIndex",new hi(R,g)),e.push(V),r>Ls&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function hp(i,e,t){const n=new Yr(i,e,t);return n.texture.mapping=Jc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qa(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Tx(i,e,t){const n=new Float32Array(Vr),r=new W(0,1,0);return new vr({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qh(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function dp(){return new vr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qh(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function fp(){return new vr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Qh(){return`

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
	`}function Sx(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===Mu||l===Au,h=l===Hs||l===Ws;if(u||h){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new up(i)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const _=a.image;return u&&_&&_.height>0||h&&_&&r(_)?(t===null&&(t=new up(i)),d=u?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function xx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Nr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function wx(i,e,t,n){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const S in f.attributes)e.remove(f.attributes[S]);f.removeEventListener("dispose",o),delete r[f.id];const _=s.get(f);_&&(e.remove(_),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],i.ARRAY_BUFFER)}function u(d){const f=[],_=d.index,S=d.attributes.position;let M=0;if(_!==null){const P=_.array;M=_.version;for(let D=0,R=P.length;D<R;D+=3){const V=P[D+0],F=P[D+1],x=P[D+2];f.push(V,F,F,x,x,V)}}else if(S!==void 0){const P=S.array;M=S.version;for(let D=0,R=P.length/3-1;D<R;D+=3){const V=D+0,F=D+1,x=D+2;f.push(V,F,F,x,x,V)}}else return;const m=new(Rg(f)?Lg:Dg)(f,1);m.version=M;const g=s.get(d);g&&e.remove(g),s.set(d,m)}function h(d){const f=s.get(d);if(f){const _=d.index;_!==null&&f.version<_.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Mx(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,_){i.drawElements(n,_,s,f*o),t.update(_,n,1)}function u(f,_,S){S!==0&&(i.drawElementsInstanced(n,_,s,f*o,S),t.update(_,n,S))}function h(f,_,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,s,f,0,S);let m=0;for(let g=0;g<S;g++)m+=_[g];t.update(m,n,1)}function d(f,_,S,M){if(S===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f.length;g++)u(f[g]/o,_[g],M[g]);else{m.multiDrawElementsInstancedWEBGL(n,_,0,s,f,0,M,0,S);let g=0;for(let P=0;P<S;P++)g+=_[P]*M[P];t.update(g,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Ax(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function bx(i,e,t){const n=new WeakMap,r=new Bt;function s(o,a,l){const u=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let y=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var _=y;f!==void 0&&f.texture.dispose();const S=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],P=a.morphAttributes.normal||[],D=a.morphAttributes.color||[];let R=0;S===!0&&(R=1),M===!0&&(R=2),m===!0&&(R=3);let V=a.attributes.position.count*R,F=1;V>e.maxTextureSize&&(F=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const x=new Float32Array(V*F*4*d),T=new Ig(x,V,F,d);T.type=Pi,T.needsUpdate=!0;const v=R*4;for(let w=0;w<d;w++){const L=g[w],A=P[w],Z=D[w],ie=V*F*4*w;for(let ne=0;ne<L.count;ne++){const ce=ne*v;S===!0&&(r.fromBufferAttribute(L,ne),x[ie+ce+0]=r.x,x[ie+ce+1]=r.y,x[ie+ce+2]=r.z,x[ie+ce+3]=0),M===!0&&(r.fromBufferAttribute(A,ne),x[ie+ce+4]=r.x,x[ie+ce+5]=r.y,x[ie+ce+6]=r.z,x[ie+ce+7]=0),m===!0&&(r.fromBufferAttribute(Z,ne),x[ie+ce+8]=r.x,x[ie+ce+9]=r.y,x[ie+ce+10]=r.z,x[ie+ce+11]=Z.itemSize===4?r.w:1)}}f={count:d,texture:T,size:new ct(V,F)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let S=0;for(let m=0;m<u.length;m++)S+=u[m];const M=a.morphTargetsRelative?1:1-S;l.getUniforms().setValue(i,"morphTargetBaseInfluence",M),l.getUniforms().setValue(i,"morphTargetInfluences",u)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Rx(i,e,t,n){let r=new WeakMap;function s(l){const u=n.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const zg=new Cn,pp=new Fg(1,1),Gg=new Ig,Hg=new eE,Wg=new Og,mp=[],gp=[],_p=new Float32Array(16),vp=new Float32Array(9),yp=new Float32Array(4);function so(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=mp[r];if(s===void 0&&(s=new Float32Array(r),mp[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function en(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function tn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Qc(i,e){let t=gp[e];t===void 0&&(t=new Int32Array(e),gp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ix(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Cx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2fv(this.addr,e),tn(t,e)}}function Px(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;i.uniform3fv(this.addr,e),tn(t,e)}}function Dx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4fv(this.addr,e),tn(t,e)}}function Lx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;yp.set(n),i.uniformMatrix2fv(this.addr,!1,yp),tn(t,n)}}function Nx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;vp.set(n),i.uniformMatrix3fv(this.addr,!1,vp),tn(t,n)}}function Ux(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;_p.set(n),i.uniformMatrix4fv(this.addr,!1,_p),tn(t,n)}}function Ox(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Fx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2iv(this.addr,e),tn(t,e)}}function kx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3iv(this.addr,e),tn(t,e)}}function Vx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4iv(this.addr,e),tn(t,e)}}function Bx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function zx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2uiv(this.addr,e),tn(t,e)}}function Gx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3uiv(this.addr,e),tn(t,e)}}function Hx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4uiv(this.addr,e),tn(t,e)}}function Wx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(pp.compareFunction=bg,s=pp):s=zg,t.setTexture2D(e||s,r)}function qx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Hg,r)}function Xx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Wg,r)}function jx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Gg,r)}function $x(i){switch(i){case 5126:return Ix;case 35664:return Cx;case 35665:return Px;case 35666:return Dx;case 35674:return Lx;case 35675:return Nx;case 35676:return Ux;case 5124:case 35670:return Ox;case 35667:case 35671:return Fx;case 35668:case 35672:return kx;case 35669:case 35673:return Vx;case 5125:return Bx;case 36294:return zx;case 36295:return Gx;case 36296:return Hx;case 35678:case 36198:case 36298:case 36306:case 35682:return Wx;case 35679:case 36299:case 36307:return qx;case 35680:case 36300:case 36308:case 36293:return Xx;case 36289:case 36303:case 36311:case 36292:return jx}}function Yx(i,e){i.uniform1fv(this.addr,e)}function Kx(i,e){const t=so(e,this.size,2);i.uniform2fv(this.addr,t)}function Jx(i,e){const t=so(e,this.size,3);i.uniform3fv(this.addr,t)}function Qx(i,e){const t=so(e,this.size,4);i.uniform4fv(this.addr,t)}function Zx(i,e){const t=so(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ew(i,e){const t=so(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function tw(i,e){const t=so(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function nw(i,e){i.uniform1iv(this.addr,e)}function iw(i,e){i.uniform2iv(this.addr,e)}function rw(i,e){i.uniform3iv(this.addr,e)}function sw(i,e){i.uniform4iv(this.addr,e)}function ow(i,e){i.uniform1uiv(this.addr,e)}function aw(i,e){i.uniform2uiv(this.addr,e)}function cw(i,e){i.uniform3uiv(this.addr,e)}function lw(i,e){i.uniform4uiv(this.addr,e)}function uw(i,e,t){const n=this.cache,r=e.length,s=Qc(t,r);en(n,s)||(i.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||zg,s[o])}function hw(i,e,t){const n=this.cache,r=e.length,s=Qc(t,r);en(n,s)||(i.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Hg,s[o])}function dw(i,e,t){const n=this.cache,r=e.length,s=Qc(t,r);en(n,s)||(i.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Wg,s[o])}function fw(i,e,t){const n=this.cache,r=e.length,s=Qc(t,r);en(n,s)||(i.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Gg,s[o])}function pw(i){switch(i){case 5126:return Yx;case 35664:return Kx;case 35665:return Jx;case 35666:return Qx;case 35674:return Zx;case 35675:return ew;case 35676:return tw;case 5124:case 35670:return nw;case 35667:case 35671:return iw;case 35668:case 35672:return rw;case 35669:case 35673:return sw;case 5125:return ow;case 36294:return aw;case 36295:return cw;case 36296:return lw;case 35678:case 36198:case 36298:case 36306:case 35682:return uw;case 35679:case 36299:case 36307:return hw;case 35680:case 36300:case 36308:case 36293:return dw;case 36289:case 36303:case 36311:case 36292:return fw}}class mw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$x(t.type)}}class gw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pw(t.type)}}class _w{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Zl=/(\w+)(\])?(\[|\.)?/g;function Ep(i,e){i.seq.push(e),i.map[e.id]=e}function vw(i,e,t){const n=i.name,r=n.length;for(Zl.lastIndex=0;;){const s=Zl.exec(n),o=Zl.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Ep(t,u===void 0?new mw(a,i,e):new gw(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new _w(a),Ep(t,d)),t=d}}}class fc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);vw(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Tp(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const yw=37297;let Ew=0;function Tw(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Sp=new rt;function Sw(i){xt._getMatrix(Sp,xt.workingColorSpace,i);const e=`mat3( ${Sp.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(i)){case bc:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function xp(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Tw(i.getShaderSource(e),o)}else return r}function xw(i,e){const t=Sw(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ww(i,e){let t;switch(e){case dy:t="Linear";break;case fy:t="Reinhard";break;case py:t="Cineon";break;case mg:t="ACESFilmic";break;case gy:t="AgX";break;case _y:t="Neutral";break;case my:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Za=new W;function Mw(){xt.getLuminanceCoefficients(Za);const i=Za.x.toFixed(4),e=Za.y.toFixed(4),t=Za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Aw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function bw(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rw(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Co(i){return i!==""}function wp(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Iw=/^[ \t]*#include +<([\w\d./]+)>/gm;function th(i){return i.replace(Iw,Pw)}const Cw=new Map;function Pw(i,e){let t=st[e];if(t===void 0){const n=Cw.get(e);if(n!==void 0)t=st[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return th(t)}const Dw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ap(i){return i.replace(Dw,Lw)}function Lw(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bp(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Nw(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===fg?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===pg?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function Uw(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Hs:case Ws:e="ENVMAP_TYPE_CUBE";break;case Jc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ow(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function Fw(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Lh:e="ENVMAP_BLENDING_MULTIPLY";break;case uy:e="ENVMAP_BLENDING_MIX";break;case hy:e="ENVMAP_BLENDING_ADD";break}return e}function kw(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Vw(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Nw(t),u=Uw(t),h=Ow(t),d=Fw(t),f=kw(t),_=Aw(t),S=bw(s),M=r.createProgram();let m,g,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Co).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Co).join(`
`),g.length>0&&(g+=`
`)):(m=[bp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),g=[bp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hr?"#define TONE_MAPPING":"",t.toneMapping!==hr?st.tonemapping_pars_fragment:"",t.toneMapping!==hr?ww("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,xw("linearToOutputTexel",t.outputColorSpace),Mw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Co).join(`
`)),o=th(o),o=wp(o,t),o=Mp(o,t),a=th(a),a=wp(a,t),a=Mp(a,t),o=Ap(o),a=Ap(a),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,m=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===kf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const D=P+m+o,R=P+g+a,V=Tp(r,r.VERTEX_SHADER,D),F=Tp(r,r.FRAGMENT_SHADER,R);r.attachShader(M,V),r.attachShader(M,F),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function x(w){if(i.debug.checkShaderErrors){const L=r.getProgramInfoLog(M).trim(),A=r.getShaderInfoLog(V).trim(),Z=r.getShaderInfoLog(F).trim();let ie=!0,ne=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,V,F);else{const ce=xp(r,V,"vertex"),Y=xp(r,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+L+`
`+ce+`
`+Y)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(A===""||Z==="")&&(ne=!1);ne&&(w.diagnostics={runnable:ie,programLog:L,vertexShader:{log:A,prefix:m},fragmentShader:{log:Z,prefix:g}})}r.deleteShader(V),r.deleteShader(F),T=new fc(r,M),v=Rw(r,M)}let T;this.getUniforms=function(){return T===void 0&&x(this),T};let v;this.getAttributes=function(){return v===void 0&&x(this),v};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(M,yw)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ew++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=V,this.fragmentShader=F,this}let Bw=0;class zw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Gw(e),t.set(e,n)),n}}class Gw{constructor(e){this.id=Bw++,this.code=e,this.usedTimes=0}}function Hw(i,e,t,n,r,s,o){const a=new Cg,l=new zw,u=new Set,h=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let _=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(v){return u.add(v),v===0?"uv":`uv${v}`}function m(v,y,w,L,A){const Z=L.fog,ie=A.geometry,ne=v.isMeshStandardMaterial?L.environment:null,ce=(v.isMeshStandardMaterial?t:e).get(v.envMap||ne),Y=ce&&ce.mapping===Jc?ce.image.height:null,_e=S[v.type];v.precision!==null&&(_=r.getMaxPrecision(v.precision),_!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));const k=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,O=k!==void 0?k.length:0;let le=0;ie.morphAttributes.position!==void 0&&(le=1),ie.morphAttributes.normal!==void 0&&(le=2),ie.morphAttributes.color!==void 0&&(le=3);let fe,X,ee,he;if(_e){const mt=ai[_e];fe=mt.vertexShader,X=mt.fragmentShader}else fe=v.vertexShader,X=v.fragmentShader,l.update(v),ee=l.getVertexShaderID(v),he=l.getFragmentShaderID(v);const te=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Ue=A.isInstancedMesh===!0,xe=A.isBatchedMesh===!0,Ge=!!v.map,We=!!v.matcap,Fe=!!ce,U=!!v.aoMap,wt=!!v.lightMap,qe=!!v.bumpMap,$e=!!v.normalMap,Ne=!!v.displacementMap,lt=!!v.emissiveMap,Ce=!!v.metalnessMap,N=!!v.roughnessMap,b=v.anisotropy>0,q=v.clearcoat>0,se=v.dispersion>0,ue=v.iridescence>0,J=v.sheen>0,we=v.transmission>0,ve=b&&!!v.anisotropyMap,Ie=q&&!!v.clearcoatMap,ot=q&&!!v.clearcoatNormalMap,pe=q&&!!v.clearcoatRoughnessMap,Re=ue&&!!v.iridescenceMap,He=ue&&!!v.iridescenceThicknessMap,Ye=J&&!!v.sheenColorMap,De=J&&!!v.sheenRoughnessMap,ut=!!v.specularMap,nt=!!v.specularColorMap,Mt=!!v.specularIntensityMap,B=we&&!!v.transmissionMap,Te=we&&!!v.thicknessMap,Q=!!v.gradientMap,ae=!!v.alphaMap,Me=v.alphaTest>0,ye=!!v.alphaHash,et=!!v.extensions;let Ct=hr;v.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ct=i.toneMapping);const Kt={shaderID:_e,shaderType:v.type,shaderName:v.name,vertexShader:fe,fragmentShader:X,defines:v.defines,customVertexShaderID:ee,customFragmentShaderID:he,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,batching:xe,batchingColor:xe&&A._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&A.instanceColor!==null,instancingMorph:Ue&&A.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:js,alphaToCoverage:!!v.alphaToCoverage,map:Ge,matcap:We,envMap:Fe,envMapMode:Fe&&ce.mapping,envMapCubeUVHeight:Y,aoMap:U,lightMap:wt,bumpMap:qe,normalMap:$e,displacementMap:f&&Ne,emissiveMap:lt,normalMapObjectSpace:$e&&v.normalMapType===Ty,normalMapTangentSpace:$e&&v.normalMapType===Bh,metalnessMap:Ce,roughnessMap:N,anisotropy:b,anisotropyMap:ve,clearcoat:q,clearcoatMap:Ie,clearcoatNormalMap:ot,clearcoatRoughnessMap:pe,dispersion:se,iridescence:ue,iridescenceMap:Re,iridescenceThicknessMap:He,sheen:J,sheenColorMap:Ye,sheenRoughnessMap:De,specularMap:ut,specularColorMap:nt,specularIntensityMap:Mt,transmission:we,transmissionMap:B,thicknessMap:Te,gradientMap:Q,opaque:v.transparent===!1&&v.blending===Ns&&v.alphaToCoverage===!1,alphaMap:ae,alphaTest:Me,alphaHash:ye,combine:v.combine,mapUv:Ge&&M(v.map.channel),aoMapUv:U&&M(v.aoMap.channel),lightMapUv:wt&&M(v.lightMap.channel),bumpMapUv:qe&&M(v.bumpMap.channel),normalMapUv:$e&&M(v.normalMap.channel),displacementMapUv:Ne&&M(v.displacementMap.channel),emissiveMapUv:lt&&M(v.emissiveMap.channel),metalnessMapUv:Ce&&M(v.metalnessMap.channel),roughnessMapUv:N&&M(v.roughnessMap.channel),anisotropyMapUv:ve&&M(v.anisotropyMap.channel),clearcoatMapUv:Ie&&M(v.clearcoatMap.channel),clearcoatNormalMapUv:ot&&M(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&M(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&M(v.iridescenceMap.channel),iridescenceThicknessMapUv:He&&M(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&M(v.sheenColorMap.channel),sheenRoughnessMapUv:De&&M(v.sheenRoughnessMap.channel),specularMapUv:ut&&M(v.specularMap.channel),specularColorMapUv:nt&&M(v.specularColorMap.channel),specularIntensityMapUv:Mt&&M(v.specularIntensityMap.channel),transmissionMapUv:B&&M(v.transmissionMap.channel),thicknessMapUv:Te&&M(v.thicknessMap.channel),alphaMapUv:ae&&M(v.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&($e||b),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!ie.attributes.uv&&(Ge||ae),fog:!!Z,useFog:v.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:me,skinning:A.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:le,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ct,decodeVideoTexture:Ge&&v.map.isVideoTexture===!0&&xt.getTransfer(v.map.colorSpace)===It,decodeVideoTextureEmissive:lt&&v.emissiveMap.isVideoTexture===!0&&xt.getTransfer(v.emissiveMap.colorSpace)===It,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ci,flipSided:v.side===In,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:et&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&v.extensions.multiDraw===!0||xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Kt.vertexUv1s=u.has(1),Kt.vertexUv2s=u.has(2),Kt.vertexUv3s=u.has(3),u.clear(),Kt}function g(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const w in v.defines)y.push(w),y.push(v.defines[w]);return v.isRawShaderMaterial===!1&&(P(y,v),D(y,v),y.push(i.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function P(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function D(v,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),v.push(a.mask)}function R(v){const y=S[v.type];let w;if(y){const L=ai[y];w=pE.clone(L.uniforms)}else w=v.uniforms;return w}function V(v,y){let w;for(let L=0,A=h.length;L<A;L++){const Z=h[L];if(Z.cacheKey===y){w=Z,++w.usedTimes;break}}return w===void 0&&(w=new Vw(i,y,v,s),h.push(w)),w}function F(v){if(--v.usedTimes===0){const y=h.indexOf(v);h[y]=h[h.length-1],h.pop(),v.destroy()}}function x(v){l.remove(v)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:R,acquireProgram:V,releaseProgram:F,releaseShaderCache:x,programs:h,dispose:T}}function Ww(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function qw(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Rp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ip(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,f,_,S,M,m){let g=i[e];return g===void 0?(g={id:d.id,object:d,geometry:f,material:_,groupOrder:S,renderOrder:d.renderOrder,z:M,group:m},i[e]=g):(g.id=d.id,g.object=d,g.geometry=f,g.material=_,g.groupOrder=S,g.renderOrder=d.renderOrder,g.z=M,g.group=m),e++,g}function a(d,f,_,S,M,m){const g=o(d,f,_,S,M,m);_.transmission>0?n.push(g):_.transparent===!0?r.push(g):t.push(g)}function l(d,f,_,S,M,m){const g=o(d,f,_,S,M,m);_.transmission>0?n.unshift(g):_.transparent===!0?r.unshift(g):t.unshift(g)}function u(d,f){t.length>1&&t.sort(d||qw),n.length>1&&n.sort(f||Rp),r.length>1&&r.sort(f||Rp)}function h(){for(let d=e,f=i.length;d<f;d++){const _=i[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:u}}function Xw(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Ip,i.set(n,[o])):r>=s.length?(o=new Ip,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function jw(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new yt};break;case"SpotLight":t={position:new W,direction:new W,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new yt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":t={color:new yt,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function $w(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Yw=0;function Kw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Jw(i){const e=new jw,t=$w(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new W);const r=new W,s=new zt,o=new zt;function a(u){let h=0,d=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let _=0,S=0,M=0,m=0,g=0,P=0,D=0,R=0,V=0,F=0,x=0;u.sort(Kw);for(let v=0,y=u.length;v<y;v++){const w=u[v],L=w.color,A=w.intensity,Z=w.distance,ie=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=L.r*A,d+=L.g*A,f+=L.b*A;else if(w.isLightProbe){for(let ne=0;ne<9;ne++)n.probe[ne].addScaledVector(w.sh.coefficients[ne],A);x++}else if(w.isDirectionalLight){const ne=e.get(w);if(ne.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const ce=w.shadow,Y=t.get(w);Y.shadowIntensity=ce.intensity,Y.shadowBias=ce.bias,Y.shadowNormalBias=ce.normalBias,Y.shadowRadius=ce.radius,Y.shadowMapSize=ce.mapSize,n.directionalShadow[_]=Y,n.directionalShadowMap[_]=ie,n.directionalShadowMatrix[_]=w.shadow.matrix,P++}n.directional[_]=ne,_++}else if(w.isSpotLight){const ne=e.get(w);ne.position.setFromMatrixPosition(w.matrixWorld),ne.color.copy(L).multiplyScalar(A),ne.distance=Z,ne.coneCos=Math.cos(w.angle),ne.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),ne.decay=w.decay,n.spot[M]=ne;const ce=w.shadow;if(w.map&&(n.spotLightMap[V]=w.map,V++,ce.updateMatrices(w),w.castShadow&&F++),n.spotLightMatrix[M]=ce.matrix,w.castShadow){const Y=t.get(w);Y.shadowIntensity=ce.intensity,Y.shadowBias=ce.bias,Y.shadowNormalBias=ce.normalBias,Y.shadowRadius=ce.radius,Y.shadowMapSize=ce.mapSize,n.spotShadow[M]=Y,n.spotShadowMap[M]=ie,R++}M++}else if(w.isRectAreaLight){const ne=e.get(w);ne.color.copy(L).multiplyScalar(A),ne.halfWidth.set(w.width*.5,0,0),ne.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=ne,m++}else if(w.isPointLight){const ne=e.get(w);if(ne.color.copy(w.color).multiplyScalar(w.intensity),ne.distance=w.distance,ne.decay=w.decay,w.castShadow){const ce=w.shadow,Y=t.get(w);Y.shadowIntensity=ce.intensity,Y.shadowBias=ce.bias,Y.shadowNormalBias=ce.normalBias,Y.shadowRadius=ce.radius,Y.shadowMapSize=ce.mapSize,Y.shadowCameraNear=ce.camera.near,Y.shadowCameraFar=ce.camera.far,n.pointShadow[S]=Y,n.pointShadowMap[S]=ie,n.pointShadowMatrix[S]=w.shadow.matrix,D++}n.point[S]=ne,S++}else if(w.isHemisphereLight){const ne=e.get(w);ne.skyColor.copy(w.color).multiplyScalar(A),ne.groundColor.copy(w.groundColor).multiplyScalar(A),n.hemi[g]=ne,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const T=n.hash;(T.directionalLength!==_||T.pointLength!==S||T.spotLength!==M||T.rectAreaLength!==m||T.hemiLength!==g||T.numDirectionalShadows!==P||T.numPointShadows!==D||T.numSpotShadows!==R||T.numSpotMaps!==V||T.numLightProbes!==x)&&(n.directional.length=_,n.spot.length=M,n.rectArea.length=m,n.point.length=S,n.hemi.length=g,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.pointShadow.length=D,n.pointShadowMap.length=D,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=P,n.pointShadowMatrix.length=D,n.spotLightMatrix.length=R+V-F,n.spotLightMap.length=V,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=x,T.directionalLength=_,T.pointLength=S,T.spotLength=M,T.rectAreaLength=m,T.hemiLength=g,T.numDirectionalShadows=P,T.numPointShadows=D,T.numSpotShadows=R,T.numSpotMaps=V,T.numLightProbes=x,n.version=Yw++)}function l(u,h){let d=0,f=0,_=0,S=0,M=0;const m=h.matrixWorldInverse;for(let g=0,P=u.length;g<P;g++){const D=u[g];if(D.isDirectionalLight){const R=n.directional[d];R.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(m),d++}else if(D.isSpotLight){const R=n.spot[_];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(m),_++}else if(D.isRectAreaLight){const R=n.rectArea[S];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(m),o.identity(),s.copy(D.matrixWorld),s.premultiply(m),o.extractRotation(s),R.halfWidth.set(D.width*.5,0,0),R.halfHeight.set(0,D.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),S++}else if(D.isPointLight){const R=n.point[f];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(m),f++}else if(D.isHemisphereLight){const R=n.hemi[M];R.direction.setFromMatrixPosition(D.matrixWorld),R.direction.transformDirection(m),M++}}}return{setup:a,setupView:l,state:n}}function Cp(i){const e=new Jw(i),t=[],n=[];function r(h){u.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Qw(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Cp(i),e.set(r,[a])):s>=o.length?(a=new Cp(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Zw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eM=`uniform sampler2D shadow_pass;
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
}`;function tM(i,e,t){let n=new qh;const r=new ct,s=new ct,o=new Bt,a=new xE({depthPacking:Ey}),l=new wE,u={},h=t.maxTextureSize,d={[_r]:In,[In]:_r,[ci]:ci},f=new vr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Zw,fragmentShader:eM}),_=f.clone();_.defines.HORIZONTAL_PASS=1;const S=new Hn;S.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Oe(S,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fg;let g=this.type;this.render=function(F,x,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||F.length===0)return;const v=i.getRenderTarget(),y=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),L=i.state;L.setBlending(ur),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const A=g!==Ri&&this.type===Ri,Z=g===Ri&&this.type!==Ri;for(let ie=0,ne=F.length;ie<ne;ie++){const ce=F[ie],Y=ce.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const _e=Y.getFrameExtents();if(r.multiply(_e),s.copy(Y.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/_e.x),r.x=s.x*_e.x,Y.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/_e.y),r.y=s.y*_e.y,Y.mapSize.y=s.y)),Y.map===null||A===!0||Z===!0){const O=this.type!==Ri?{minFilter:ei,magFilter:ei}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Yr(r.x,r.y,O),Y.map.texture.name=ce.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const k=Y.getViewportCount();for(let O=0;O<k;O++){const le=Y.getViewport(O);o.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),L.viewport(o),Y.updateMatrices(ce,O),n=Y.getFrustum(),R(x,T,Y.camera,ce,this.type)}Y.isPointLightShadow!==!0&&this.type===Ri&&P(Y,T),Y.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(v,y,w)};function P(F,x){const T=e.update(M);f.defines.VSM_SAMPLES!==F.blurSamples&&(f.defines.VSM_SAMPLES=F.blurSamples,_.defines.VSM_SAMPLES=F.blurSamples,f.needsUpdate=!0,_.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Yr(r.x,r.y)),f.uniforms.shadow_pass.value=F.map.texture,f.uniforms.resolution.value=F.mapSize,f.uniforms.radius.value=F.radius,i.setRenderTarget(F.mapPass),i.clear(),i.renderBufferDirect(x,null,T,f,M,null),_.uniforms.shadow_pass.value=F.mapPass.texture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,i.setRenderTarget(F.map),i.clear(),i.renderBufferDirect(x,null,T,_,M,null)}function D(F,x,T,v){let y=null;const w=T.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(w!==void 0)y=w;else if(y=T.isPointLight===!0?l:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){const L=y.uuid,A=x.uuid;let Z=u[L];Z===void 0&&(Z={},u[L]=Z);let ie=Z[A];ie===void 0&&(ie=y.clone(),Z[A]=ie,x.addEventListener("dispose",V)),y=ie}if(y.visible=x.visible,y.wireframe=x.wireframe,v===Ri?y.side=x.shadowSide!==null?x.shadowSide:x.side:y.side=x.shadowSide!==null?x.shadowSide:d[x.side],y.alphaMap=x.alphaMap,y.alphaTest=x.alphaTest,y.map=x.map,y.clipShadows=x.clipShadows,y.clippingPlanes=x.clippingPlanes,y.clipIntersection=x.clipIntersection,y.displacementMap=x.displacementMap,y.displacementScale=x.displacementScale,y.displacementBias=x.displacementBias,y.wireframeLinewidth=x.wireframeLinewidth,y.linewidth=x.linewidth,T.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const L=i.properties.get(y);L.light=T}return y}function R(F,x,T,v,y){if(F.visible===!1)return;if(F.layers.test(x.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&y===Ri)&&(!F.frustumCulled||n.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,F.matrixWorld);const A=e.update(F),Z=F.material;if(Array.isArray(Z)){const ie=A.groups;for(let ne=0,ce=ie.length;ne<ce;ne++){const Y=ie[ne],_e=Z[Y.materialIndex];if(_e&&_e.visible){const k=D(F,_e,v,y);F.onBeforeShadow(i,F,x,T,A,k,Y),i.renderBufferDirect(T,null,A,k,F,Y),F.onAfterShadow(i,F,x,T,A,k,Y)}}}else if(Z.visible){const ie=D(F,Z,v,y);F.onBeforeShadow(i,F,x,T,A,ie,null),i.renderBufferDirect(T,null,A,ie,F,null),F.onAfterShadow(i,F,x,T,A,ie,null)}}const L=F.children;for(let A=0,Z=L.length;A<Z;A++)R(L[A],x,T,v,y)}function V(F){F.target.removeEventListener("dispose",V);for(const T in u){const v=u[T],y=F.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}const nM={[vu]:yu,[Eu]:xu,[Tu]:wu,[Gs]:Su,[yu]:vu,[xu]:Eu,[wu]:Tu,[Su]:Gs};function iM(i,e){function t(){let B=!1;const Te=new Bt;let Q=null;const ae=new Bt(0,0,0,0);return{setMask:function(Me){Q!==Me&&!B&&(i.colorMask(Me,Me,Me,Me),Q=Me)},setLocked:function(Me){B=Me},setClear:function(Me,ye,et,Ct,Kt){Kt===!0&&(Me*=Ct,ye*=Ct,et*=Ct),Te.set(Me,ye,et,Ct),ae.equals(Te)===!1&&(i.clearColor(Me,ye,et,Ct),ae.copy(Te))},reset:function(){B=!1,Q=null,ae.set(-1,0,0,0)}}}function n(){let B=!1,Te=!1,Q=null,ae=null,Me=null;return{setReversed:function(ye){if(Te!==ye){const et=e.get("EXT_clip_control");Te?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT);const Ct=Me;Me=null,this.setClear(Ct)}Te=ye},getReversed:function(){return Te},setTest:function(ye){ye?te(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(ye){Q!==ye&&!B&&(i.depthMask(ye),Q=ye)},setFunc:function(ye){if(Te&&(ye=nM[ye]),ae!==ye){switch(ye){case vu:i.depthFunc(i.NEVER);break;case yu:i.depthFunc(i.ALWAYS);break;case Eu:i.depthFunc(i.LESS);break;case Gs:i.depthFunc(i.LEQUAL);break;case Tu:i.depthFunc(i.EQUAL);break;case Su:i.depthFunc(i.GEQUAL);break;case xu:i.depthFunc(i.GREATER);break;case wu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=ye}},setLocked:function(ye){B=ye},setClear:function(ye){Me!==ye&&(Te&&(ye=1-ye),i.clearDepth(ye),Me=ye)},reset:function(){B=!1,Q=null,ae=null,Me=null,Te=!1}}}function r(){let B=!1,Te=null,Q=null,ae=null,Me=null,ye=null,et=null,Ct=null,Kt=null;return{setTest:function(mt){B||(mt?te(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(mt){Te!==mt&&!B&&(i.stencilMask(mt),Te=mt)},setFunc:function(mt,Mn,Lt){(Q!==mt||ae!==Mn||Me!==Lt)&&(i.stencilFunc(mt,Mn,Lt),Q=mt,ae=Mn,Me=Lt)},setOp:function(mt,Mn,Lt){(ye!==mt||et!==Mn||Ct!==Lt)&&(i.stencilOp(mt,Mn,Lt),ye=mt,et=Mn,Ct=Lt)},setLocked:function(mt){B=mt},setClear:function(mt){Kt!==mt&&(i.clearStencil(mt),Kt=mt)},reset:function(){B=!1,Te=null,Q=null,ae=null,Me=null,ye=null,et=null,Ct=null,Kt=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,u=new WeakMap;let h={},d={},f=new WeakMap,_=[],S=null,M=!1,m=null,g=null,P=null,D=null,R=null,V=null,F=null,x=new yt(0,0,0),T=0,v=!1,y=null,w=null,L=null,A=null,Z=null;const ie=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,ce=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(Y)[1]),ne=ce>=1):Y.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),ne=ce>=2);let _e=null,k={};const O=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),fe=new Bt().fromArray(O),X=new Bt().fromArray(le);function ee(B,Te,Q,ae){const Me=new Uint8Array(4),ye=i.createTexture();i.bindTexture(B,ye),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let et=0;et<Q;et++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(Te,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(Te+et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return ye}const he={};he[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(i.DEPTH_TEST),o.setFunc(Gs),qe(!1),$e(Df),te(i.CULL_FACE),U(ur);function te(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function me(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function Ue(B,Te){return d[B]!==Te?(i.bindFramebuffer(B,Te),d[B]=Te,B===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Te),B===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Te),!0):!1}function xe(B,Te){let Q=_,ae=!1;if(B){Q=f.get(Te),Q===void 0&&(Q=[],f.set(Te,Q));const Me=B.textures;if(Q.length!==Me.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let ye=0,et=Me.length;ye<et;ye++)Q[ye]=i.COLOR_ATTACHMENT0+ye;Q.length=Me.length,ae=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ae=!0);ae&&i.drawBuffers(Q)}function Ge(B){return S!==B?(i.useProgram(B),S=B,!0):!1}const We={[kr]:i.FUNC_ADD,[j0]:i.FUNC_SUBTRACT,[$0]:i.FUNC_REVERSE_SUBTRACT};We[Y0]=i.MIN,We[K0]=i.MAX;const Fe={[J0]:i.ZERO,[Q0]:i.ONE,[Z0]:i.SRC_COLOR,[gu]:i.SRC_ALPHA,[sy]:i.SRC_ALPHA_SATURATE,[iy]:i.DST_COLOR,[ty]:i.DST_ALPHA,[ey]:i.ONE_MINUS_SRC_COLOR,[_u]:i.ONE_MINUS_SRC_ALPHA,[ry]:i.ONE_MINUS_DST_COLOR,[ny]:i.ONE_MINUS_DST_ALPHA,[oy]:i.CONSTANT_COLOR,[ay]:i.ONE_MINUS_CONSTANT_COLOR,[cy]:i.CONSTANT_ALPHA,[ly]:i.ONE_MINUS_CONSTANT_ALPHA};function U(B,Te,Q,ae,Me,ye,et,Ct,Kt,mt){if(B===ur){M===!0&&(me(i.BLEND),M=!1);return}if(M===!1&&(te(i.BLEND),M=!0),B!==X0){if(B!==m||mt!==v){if((g!==kr||R!==kr)&&(i.blendEquation(i.FUNC_ADD),g=kr,R=kr),mt)switch(B){case Ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lf:i.blendFunc(i.ONE,i.ONE);break;case Nf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lf:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Nf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}P=null,D=null,V=null,F=null,x.set(0,0,0),T=0,m=B,v=mt}return}Me=Me||Te,ye=ye||Q,et=et||ae,(Te!==g||Me!==R)&&(i.blendEquationSeparate(We[Te],We[Me]),g=Te,R=Me),(Q!==P||ae!==D||ye!==V||et!==F)&&(i.blendFuncSeparate(Fe[Q],Fe[ae],Fe[ye],Fe[et]),P=Q,D=ae,V=ye,F=et),(Ct.equals(x)===!1||Kt!==T)&&(i.blendColor(Ct.r,Ct.g,Ct.b,Kt),x.copy(Ct),T=Kt),m=B,v=!1}function wt(B,Te){B.side===ci?me(i.CULL_FACE):te(i.CULL_FACE);let Q=B.side===In;Te&&(Q=!Q),qe(Q),B.blending===Ns&&B.transparent===!1?U(ur):U(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const ae=B.stencilWrite;a.setTest(ae),ae&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),lt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function qe(B){y!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),y=B)}function $e(B){B!==W0?(te(i.CULL_FACE),B!==w&&(B===Df?i.cullFace(i.BACK):B===q0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),w=B}function Ne(B){B!==L&&(ne&&i.lineWidth(B),L=B)}function lt(B,Te,Q){B?(te(i.POLYGON_OFFSET_FILL),(A!==Te||Z!==Q)&&(i.polygonOffset(Te,Q),A=Te,Z=Q)):me(i.POLYGON_OFFSET_FILL)}function Ce(B){B?te(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function N(B){B===void 0&&(B=i.TEXTURE0+ie-1),_e!==B&&(i.activeTexture(B),_e=B)}function b(B,Te,Q){Q===void 0&&(_e===null?Q=i.TEXTURE0+ie-1:Q=_e);let ae=k[Q];ae===void 0&&(ae={type:void 0,texture:void 0},k[Q]=ae),(ae.type!==B||ae.texture!==Te)&&(_e!==Q&&(i.activeTexture(Q),_e=Q),i.bindTexture(B,Te||he[B]),ae.type=B,ae.texture=Te)}function q(){const B=k[_e];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function se(){try{i.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ue(){try{i.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function J(){try{i.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(){try{i.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(){try{i.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(){try{i.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ot(){try{i.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(){try{i.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Re(){try{i.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function He(){try{i.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ye(B){fe.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),fe.copy(B))}function De(B){X.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),X.copy(B))}function ut(B,Te){let Q=u.get(Te);Q===void 0&&(Q=new WeakMap,u.set(Te,Q));let ae=Q.get(B);ae===void 0&&(ae=i.getUniformBlockIndex(Te,B.name),Q.set(B,ae))}function nt(B,Te){const ae=u.get(Te).get(B);l.get(Te)!==ae&&(i.uniformBlockBinding(Te,ae,B.__bindingPointIndex),l.set(Te,ae))}function Mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},_e=null,k={},d={},f=new WeakMap,_=[],S=null,M=!1,m=null,g=null,P=null,D=null,R=null,V=null,F=null,x=new yt(0,0,0),T=0,v=!1,y=null,w=null,L=null,A=null,Z=null,fe.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:te,disable:me,bindFramebuffer:Ue,drawBuffers:xe,useProgram:Ge,setBlending:U,setMaterial:wt,setFlipSided:qe,setCullFace:$e,setLineWidth:Ne,setPolygonOffset:lt,setScissorTest:Ce,activeTexture:N,bindTexture:b,unbindTexture:q,compressedTexImage2D:se,compressedTexImage3D:ue,texImage2D:Re,texImage3D:He,updateUBOMapping:ut,uniformBlockBinding:nt,texStorage2D:ot,texStorage3D:pe,texSubImage2D:J,texSubImage3D:we,compressedTexSubImage2D:ve,compressedTexSubImage3D:Ie,scissor:Ye,viewport:De,reset:Mt}}function rM(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ct,h=new WeakMap;let d;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(N,b){return _?new OffscreenCanvas(N,b):Ic("canvas")}function M(N,b,q){let se=1;const ue=Ce(N);if((ue.width>q||ue.height>q)&&(se=q/Math.max(ue.width,ue.height)),se<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const J=Math.floor(se*ue.width),we=Math.floor(se*ue.height);d===void 0&&(d=S(J,we));const ve=b?S(J,we):d;return ve.width=J,ve.height=we,ve.getContext("2d").drawImage(N,0,0,J,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+J+"x"+we+")."),ve}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),N;return N}function m(N){return N.generateMipmaps}function g(N){i.generateMipmap(N)}function P(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function D(N,b,q,se,ue=!1){if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let J=b;if(b===i.RED&&(q===i.FLOAT&&(J=i.R32F),q===i.HALF_FLOAT&&(J=i.R16F),q===i.UNSIGNED_BYTE&&(J=i.R8)),b===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(J=i.R8UI),q===i.UNSIGNED_SHORT&&(J=i.R16UI),q===i.UNSIGNED_INT&&(J=i.R32UI),q===i.BYTE&&(J=i.R8I),q===i.SHORT&&(J=i.R16I),q===i.INT&&(J=i.R32I)),b===i.RG&&(q===i.FLOAT&&(J=i.RG32F),q===i.HALF_FLOAT&&(J=i.RG16F),q===i.UNSIGNED_BYTE&&(J=i.RG8)),b===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(J=i.RG8UI),q===i.UNSIGNED_SHORT&&(J=i.RG16UI),q===i.UNSIGNED_INT&&(J=i.RG32UI),q===i.BYTE&&(J=i.RG8I),q===i.SHORT&&(J=i.RG16I),q===i.INT&&(J=i.RG32I)),b===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(J=i.RGB8UI),q===i.UNSIGNED_SHORT&&(J=i.RGB16UI),q===i.UNSIGNED_INT&&(J=i.RGB32UI),q===i.BYTE&&(J=i.RGB8I),q===i.SHORT&&(J=i.RGB16I),q===i.INT&&(J=i.RGB32I)),b===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),q===i.UNSIGNED_INT&&(J=i.RGBA32UI),q===i.BYTE&&(J=i.RGBA8I),q===i.SHORT&&(J=i.RGBA16I),q===i.INT&&(J=i.RGBA32I)),b===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),b===i.RGBA){const we=ue?bc:xt.getTransfer(se);q===i.FLOAT&&(J=i.RGBA32F),q===i.HALF_FLOAT&&(J=i.RGBA16F),q===i.UNSIGNED_BYTE&&(J=we===It?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function R(N,b){let q;return N?b===null||b===$r||b===qs?q=i.DEPTH24_STENCIL8:b===Pi?q=i.DEPTH32F_STENCIL8:b===jo&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===$r||b===qs?q=i.DEPTH_COMPONENT24:b===Pi?q=i.DEPTH_COMPONENT32F:b===jo&&(q=i.DEPTH_COMPONENT16),q}function V(N,b){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==ei&&N.minFilter!==li?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function F(N){const b=N.target;b.removeEventListener("dispose",F),T(b),b.isVideoTexture&&h.delete(b)}function x(N){const b=N.target;b.removeEventListener("dispose",x),y(b)}function T(N){const b=n.get(N);if(b.__webglInit===void 0)return;const q=N.source,se=f.get(q);if(se){const ue=se[b.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&v(N),Object.keys(se).length===0&&f.delete(q)}n.remove(N)}function v(N){const b=n.get(N);i.deleteTexture(b.__webglTexture);const q=N.source,se=f.get(q);delete se[b.__cacheKey],o.memory.textures--}function y(N){const b=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(b.__webglFramebuffer[se]))for(let ue=0;ue<b.__webglFramebuffer[se].length;ue++)i.deleteFramebuffer(b.__webglFramebuffer[se][ue]);else i.deleteFramebuffer(b.__webglFramebuffer[se]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[se])}else{if(Array.isArray(b.__webglFramebuffer))for(let se=0;se<b.__webglFramebuffer.length;se++)i.deleteFramebuffer(b.__webglFramebuffer[se]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let se=0;se<b.__webglColorRenderbuffer.length;se++)b.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[se]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const q=N.textures;for(let se=0,ue=q.length;se<ue;se++){const J=n.get(q[se]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(q[se])}n.remove(N)}let w=0;function L(){w=0}function A(){const N=w;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),w+=1,N}function Z(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function ie(N,b){const q=n.get(N);if(N.isVideoTexture&&Ne(N),N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){const se=N.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(q,N,b);return}}t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+b)}function ne(N,b){const q=n.get(N);if(N.version>0&&q.__version!==N.version){X(q,N,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+b)}function ce(N,b){const q=n.get(N);if(N.version>0&&q.__version!==N.version){X(q,N,b);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+b)}function Y(N,b){const q=n.get(N);if(N.version>0&&q.__version!==N.version){ee(q,N,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+b)}const _e={[bu]:i.REPEAT,[Br]:i.CLAMP_TO_EDGE,[Ru]:i.MIRRORED_REPEAT},k={[ei]:i.NEAREST,[vy]:i.NEAREST_MIPMAP_NEAREST,[La]:i.NEAREST_MIPMAP_LINEAR,[li]:i.LINEAR,[Ml]:i.LINEAR_MIPMAP_NEAREST,[zr]:i.LINEAR_MIPMAP_LINEAR},O={[Sy]:i.NEVER,[Ry]:i.ALWAYS,[xy]:i.LESS,[bg]:i.LEQUAL,[wy]:i.EQUAL,[by]:i.GEQUAL,[My]:i.GREATER,[Ay]:i.NOTEQUAL};function le(N,b){if(b.type===Pi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===li||b.magFilter===Ml||b.magFilter===La||b.magFilter===zr||b.minFilter===li||b.minFilter===Ml||b.minFilter===La||b.minFilter===zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,_e[b.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,_e[b.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,_e[b.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,k[b.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,k[b.minFilter]),b.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,O[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ei||b.minFilter!==La&&b.minFilter!==zr||b.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function fe(N,b){let q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",F));const se=b.source;let ue=f.get(se);ue===void 0&&(ue={},f.set(se,ue));const J=Z(b);if(J!==N.__cacheKey){ue[J]===void 0&&(ue[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ue[J].usedTimes++;const we=ue[N.__cacheKey];we!==void 0&&(ue[N.__cacheKey].usedTimes--,we.usedTimes===0&&v(b)),N.__cacheKey=J,N.__webglTexture=ue[J].texture}return q}function X(N,b,q){let se=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(se=i.TEXTURE_3D);const ue=fe(N,b),J=b.source;t.bindTexture(se,N.__webglTexture,i.TEXTURE0+q);const we=n.get(J);if(J.version!==we.__version||ue===!0){t.activeTexture(i.TEXTURE0+q);const ve=xt.getPrimaries(xt.workingColorSpace),Ie=b.colorSpace===sr?null:xt.getPrimaries(b.colorSpace),ot=b.colorSpace===sr||ve===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let pe=M(b.image,!1,r.maxTextureSize);pe=lt(b,pe);const Re=s.convert(b.format,b.colorSpace),He=s.convert(b.type);let Ye=D(b.internalFormat,Re,He,b.colorSpace,b.isVideoTexture);le(se,b);let De;const ut=b.mipmaps,nt=b.isVideoTexture!==!0,Mt=we.__version===void 0||ue===!0,B=J.dataReady,Te=V(b,pe);if(b.isDepthTexture)Ye=R(b.format===Xs,b.type),Mt&&(nt?t.texStorage2D(i.TEXTURE_2D,1,Ye,pe.width,pe.height):t.texImage2D(i.TEXTURE_2D,0,Ye,pe.width,pe.height,0,Re,He,null));else if(b.isDataTexture)if(ut.length>0){nt&&Mt&&t.texStorage2D(i.TEXTURE_2D,Te,Ye,ut[0].width,ut[0].height);for(let Q=0,ae=ut.length;Q<ae;Q++)De=ut[Q],nt?B&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,De.width,De.height,Re,He,De.data):t.texImage2D(i.TEXTURE_2D,Q,Ye,De.width,De.height,0,Re,He,De.data);b.generateMipmaps=!1}else nt?(Mt&&t.texStorage2D(i.TEXTURE_2D,Te,Ye,pe.width,pe.height),B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe.width,pe.height,Re,He,pe.data)):t.texImage2D(i.TEXTURE_2D,0,Ye,pe.width,pe.height,0,Re,He,pe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){nt&&Mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Ye,ut[0].width,ut[0].height,pe.depth);for(let Q=0,ae=ut.length;Q<ae;Q++)if(De=ut[Q],b.format!==Jn)if(Re!==null)if(nt){if(B)if(b.layerUpdates.size>0){const Me=op(De.width,De.height,b.format,b.type);for(const ye of b.layerUpdates){const et=De.data.subarray(ye*Me/De.data.BYTES_PER_ELEMENT,(ye+1)*Me/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,ye,De.width,De.height,1,Re,et)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,De.width,De.height,pe.depth,Re,De.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Ye,De.width,De.height,pe.depth,0,De.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,De.width,De.height,pe.depth,Re,He,De.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Ye,De.width,De.height,pe.depth,0,Re,He,De.data)}else{nt&&Mt&&t.texStorage2D(i.TEXTURE_2D,Te,Ye,ut[0].width,ut[0].height);for(let Q=0,ae=ut.length;Q<ae;Q++)De=ut[Q],b.format!==Jn?Re!==null?nt?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,De.width,De.height,Re,De.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Ye,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?B&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,De.width,De.height,Re,He,De.data):t.texImage2D(i.TEXTURE_2D,Q,Ye,De.width,De.height,0,Re,He,De.data)}else if(b.isDataArrayTexture)if(nt){if(Mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Ye,pe.width,pe.height,pe.depth),B)if(b.layerUpdates.size>0){const Q=op(pe.width,pe.height,b.format,b.type);for(const ae of b.layerUpdates){const Me=pe.data.subarray(ae*Q/pe.data.BYTES_PER_ELEMENT,(ae+1)*Q/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ae,pe.width,pe.height,1,Re,He,Me)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Re,He,pe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ye,pe.width,pe.height,pe.depth,0,Re,He,pe.data);else if(b.isData3DTexture)nt?(Mt&&t.texStorage3D(i.TEXTURE_3D,Te,Ye,pe.width,pe.height,pe.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Re,He,pe.data)):t.texImage3D(i.TEXTURE_3D,0,Ye,pe.width,pe.height,pe.depth,0,Re,He,pe.data);else if(b.isFramebufferTexture){if(Mt)if(nt)t.texStorage2D(i.TEXTURE_2D,Te,Ye,pe.width,pe.height);else{let Q=pe.width,ae=pe.height;for(let Me=0;Me<Te;Me++)t.texImage2D(i.TEXTURE_2D,Me,Ye,Q,ae,0,Re,He,null),Q>>=1,ae>>=1}}else if(ut.length>0){if(nt&&Mt){const Q=Ce(ut[0]);t.texStorage2D(i.TEXTURE_2D,Te,Ye,Q.width,Q.height)}for(let Q=0,ae=ut.length;Q<ae;Q++)De=ut[Q],nt?B&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Re,He,De):t.texImage2D(i.TEXTURE_2D,Q,Ye,Re,He,De);b.generateMipmaps=!1}else if(nt){if(Mt){const Q=Ce(pe);t.texStorage2D(i.TEXTURE_2D,Te,Ye,Q.width,Q.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re,He,pe)}else t.texImage2D(i.TEXTURE_2D,0,Ye,Re,He,pe);m(b)&&g(se),we.__version=J.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function ee(N,b,q){if(b.image.length!==6)return;const se=fe(N,b),ue=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+q);const J=n.get(ue);if(ue.version!==J.__version||se===!0){t.activeTexture(i.TEXTURE0+q);const we=xt.getPrimaries(xt.workingColorSpace),ve=b.colorSpace===sr?null:xt.getPrimaries(b.colorSpace),Ie=b.colorSpace===sr||we===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const ot=b.isCompressedTexture||b.image[0].isCompressedTexture,pe=b.image[0]&&b.image[0].isDataTexture,Re=[];for(let ae=0;ae<6;ae++)!ot&&!pe?Re[ae]=M(b.image[ae],!0,r.maxCubemapSize):Re[ae]=pe?b.image[ae].image:b.image[ae],Re[ae]=lt(b,Re[ae]);const He=Re[0],Ye=s.convert(b.format,b.colorSpace),De=s.convert(b.type),ut=D(b.internalFormat,Ye,De,b.colorSpace),nt=b.isVideoTexture!==!0,Mt=J.__version===void 0||se===!0,B=ue.dataReady;let Te=V(b,He);le(i.TEXTURE_CUBE_MAP,b);let Q;if(ot){nt&&Mt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,ut,He.width,He.height);for(let ae=0;ae<6;ae++){Q=Re[ae].mipmaps;for(let Me=0;Me<Q.length;Me++){const ye=Q[Me];b.format!==Jn?Ye!==null?nt?B&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me,0,0,ye.width,ye.height,Ye,ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me,ut,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me,0,0,ye.width,ye.height,Ye,De,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me,ut,ye.width,ye.height,0,Ye,De,ye.data)}}}else{if(Q=b.mipmaps,nt&&Mt){Q.length>0&&Te++;const ae=Ce(Re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,ut,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(pe){nt?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Re[ae].width,Re[ae].height,Ye,De,Re[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ut,Re[ae].width,Re[ae].height,0,Ye,De,Re[ae].data);for(let Me=0;Me<Q.length;Me++){const et=Q[Me].image[ae].image;nt?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me+1,0,0,et.width,et.height,Ye,De,et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me+1,ut,et.width,et.height,0,Ye,De,et.data)}}else{nt?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ye,De,Re[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ut,Ye,De,Re[ae]);for(let Me=0;Me<Q.length;Me++){const ye=Q[Me];nt?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me+1,0,0,Ye,De,ye.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me+1,ut,Ye,De,ye.image[ae])}}}m(b)&&g(i.TEXTURE_CUBE_MAP),J.__version=ue.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function he(N,b,q,se,ue,J){const we=s.convert(q.format,q.colorSpace),ve=s.convert(q.type),Ie=D(q.internalFormat,we,ve,q.colorSpace),ot=n.get(b),pe=n.get(q);if(pe.__renderTarget=b,!ot.__hasExternalTextures){const Re=Math.max(1,b.width>>J),He=Math.max(1,b.height>>J);ue===i.TEXTURE_3D||ue===i.TEXTURE_2D_ARRAY?t.texImage3D(ue,J,Ie,Re,He,b.depth,0,we,ve,null):t.texImage2D(ue,J,Ie,Re,He,0,we,ve,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),$e(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,ue,pe.__webglTexture,0,qe(b)):(ue===i.TEXTURE_2D||ue>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,ue,pe.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function te(N,b,q){if(i.bindRenderbuffer(i.RENDERBUFFER,N),b.depthBuffer){const se=b.depthTexture,ue=se&&se.isDepthTexture?se.type:null,J=R(b.stencilBuffer,ue),we=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=qe(b);$e(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,J,b.width,b.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,J,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,J,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,N)}else{const se=b.textures;for(let ue=0;ue<se.length;ue++){const J=se[ue],we=s.convert(J.format,J.colorSpace),ve=s.convert(J.type),Ie=D(J.internalFormat,we,ve,J.colorSpace),ot=qe(b);q&&$e(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,Ie,b.width,b.height):$e(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,Ie,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=n.get(b.depthTexture);se.__renderTarget=b,(!se.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ie(b.depthTexture,0);const ue=se.__webglTexture,J=qe(b);if(b.depthTexture.format===Us)$e(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0);else if(b.depthTexture.format===Xs)$e(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function Ue(N){const b=n.get(N),q=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const se=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),se){const ue=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,se.removeEventListener("dispose",ue)};se.addEventListener("dispose",ue),b.__depthDisposeCallback=ue}b.__boundDepthTexture=se}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");me(b.__webglFramebuffer,N)}else if(q){b.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[se]),b.__webglDepthbuffer[se]===void 0)b.__webglDepthbuffer[se]=i.createRenderbuffer(),te(b.__webglDepthbuffer[se],N,!1);else{const ue=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=b.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,J)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),te(b.__webglDepthbuffer,N,!1);else{const se=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,ue)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(N,b,q){const se=n.get(N);b!==void 0&&he(se.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Ue(N)}function Ge(N){const b=N.texture,q=n.get(N),se=n.get(b);N.addEventListener("dispose",x);const ue=N.textures,J=N.isWebGLCubeRenderTarget===!0,we=ue.length>1;if(we||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=b.version,o.memory.textures++),J){q.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[ve]=[];for(let Ie=0;Ie<b.mipmaps.length;Ie++)q.__webglFramebuffer[ve][Ie]=i.createFramebuffer()}else q.__webglFramebuffer[ve]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let ve=0;ve<b.mipmaps.length;ve++)q.__webglFramebuffer[ve]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(we)for(let ve=0,Ie=ue.length;ve<Ie;ve++){const ot=n.get(ue[ve]);ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&$e(N)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ve=0;ve<ue.length;ve++){const Ie=ue[ve];q.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[ve]);const ot=s.convert(Ie.format,Ie.colorSpace),pe=s.convert(Ie.type),Re=D(Ie.internalFormat,ot,pe,Ie.colorSpace,N.isXRRenderTarget===!0),He=qe(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,Re,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,q.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),te(q.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),le(i.TEXTURE_CUBE_MAP,b);for(let ve=0;ve<6;ve++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ie=0;Ie<b.mipmaps.length;Ie++)he(q.__webglFramebuffer[ve][Ie],N,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie);else he(q.__webglFramebuffer[ve],N,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(b)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let ve=0,Ie=ue.length;ve<Ie;ve++){const ot=ue[ve],pe=n.get(ot);t.bindTexture(i.TEXTURE_2D,pe.__webglTexture),le(i.TEXTURE_2D,ot),he(q.__webglFramebuffer,N,ot,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,0),m(ot)&&g(i.TEXTURE_2D)}t.unbindTexture()}else{let ve=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ve=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,se.__webglTexture),le(ve,b),b.mipmaps&&b.mipmaps.length>0)for(let Ie=0;Ie<b.mipmaps.length;Ie++)he(q.__webglFramebuffer[Ie],N,b,i.COLOR_ATTACHMENT0,ve,Ie);else he(q.__webglFramebuffer,N,b,i.COLOR_ATTACHMENT0,ve,0);m(b)&&g(ve),t.unbindTexture()}N.depthBuffer&&Ue(N)}function We(N){const b=N.textures;for(let q=0,se=b.length;q<se;q++){const ue=b[q];if(m(ue)){const J=P(N),we=n.get(ue).__webglTexture;t.bindTexture(J,we),g(J),t.unbindTexture()}}}const Fe=[],U=[];function wt(N){if(N.samples>0){if($e(N)===!1){const b=N.textures,q=N.width,se=N.height;let ue=i.COLOR_BUFFER_BIT;const J=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(N),ve=b.length>1;if(ve)for(let Ie=0;Ie<b.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ie=0;Ie<b.length;Ie++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ue|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ue|=i.STENCIL_BUFFER_BIT)),ve){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[Ie]);const ot=n.get(b[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,q,se,0,0,q,se,ue,i.NEAREST),l===!0&&(Fe.length=0,U.length=0,Fe.push(i.COLOR_ATTACHMENT0+Ie),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Fe.push(J),U.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let Ie=0;Ie<b.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,we.__webglColorRenderbuffer[Ie]);const ot=n.get(b[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,ot,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const b=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function qe(N){return Math.min(r.maxSamples,N.samples)}function $e(N){const b=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ne(N){const b=o.render.frame;h.get(N)!==b&&(h.set(N,b),N.update())}function lt(N,b){const q=N.colorSpace,se=N.format,ue=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||q!==js&&q!==sr&&(xt.getTransfer(q)===It?(se!==Jn||ue!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),b}function Ce(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(u.width=N.naturalWidth||N.width,u.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(u.width=N.displayWidth,u.height=N.displayHeight):(u.width=N.width,u.height=N.height),u}this.allocateTextureUnit=A,this.resetTextureUnits=L,this.setTexture2D=ie,this.setTexture2DArray=ne,this.setTexture3D=ce,this.setTextureCube=Y,this.rebindTextures=xe,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=he,this.useMultisampledRTT=$e}function sM(i,e){function t(n,r=sr){let s;const o=xt.getTransfer(r);if(n===Bi)return i.UNSIGNED_BYTE;if(n===Uh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yg)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_g)return i.BYTE;if(n===vg)return i.SHORT;if(n===jo)return i.UNSIGNED_SHORT;if(n===Nh)return i.INT;if(n===$r)return i.UNSIGNED_INT;if(n===Pi)return i.FLOAT;if(n===aa)return i.HALF_FLOAT;if(n===Eg)return i.ALPHA;if(n===Tg)return i.RGB;if(n===Jn)return i.RGBA;if(n===Sg)return i.LUMINANCE;if(n===xg)return i.LUMINANCE_ALPHA;if(n===Us)return i.DEPTH_COMPONENT;if(n===Xs)return i.DEPTH_STENCIL;if(n===wg)return i.RED;if(n===Fh)return i.RED_INTEGER;if(n===Mg)return i.RG;if(n===kh)return i.RG_INTEGER;if(n===Vh)return i.RGBA_INTEGER;if(n===cc||n===lc||n===uc||n===hc)if(o===It)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===cc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===uc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===cc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===uc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Iu||n===Cu||n===Pu||n===Du)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Iu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Du)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lu||n===Nu||n===Uu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Lu||n===Nu)return o===It?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Uu)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ou||n===Fu||n===ku||n===Vu||n===Bu||n===zu||n===Gu||n===Hu||n===Wu||n===qu||n===Xu||n===ju||n===$u||n===Yu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ou)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fu)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ku)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vu)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bu)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zu)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gu)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hu)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wu)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qu)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xu)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ju)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$u)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yu)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dc||n===Ku||n===Ju)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===dc)return o===It?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ku)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ju)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ag||n===Qu||n===Zu||n===eh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===dc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Qu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===eh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const oM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aM=`
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

}`;class cM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Cn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new vr({vertexShader:oM,fragmentShader:aM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oe(new ua(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lM extends no{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,h=null,d=null,f=null,_=null,S=null;const M=new cM,m=t.getContextAttributes();let g=null,P=null;const D=[],R=[],V=new ct;let F=null;const x=new Vn;x.viewport=new Bt;const T=new Vn;T.viewport=new Bt;const v=[x,T],y=new IE;let w=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ee=D[X];return ee===void 0&&(ee=new ql,D[X]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(X){let ee=D[X];return ee===void 0&&(ee=new ql,D[X]=ee),ee.getGripSpace()},this.getHand=function(X){let ee=D[X];return ee===void 0&&(ee=new ql,D[X]=ee),ee.getHandSpace()};function A(X){const ee=R.indexOf(X.inputSource);if(ee===-1)return;const he=D[ee];he!==void 0&&(he.update(X.inputSource,X.frame,u||o),he.dispatchEvent({type:X.type,data:X.inputSource}))}function Z(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",ie);for(let X=0;X<D.length;X++){const ee=R[X];ee!==null&&(R[X]=null,D[X].disconnect(ee))}w=null,L=null,M.reset(),e.setRenderTarget(g),_=null,f=null,d=null,r=null,P=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(V.width,V.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(X){u=X},this.getBaseLayer=function(){return f!==null?f:_},this.getBinding=function(){return d},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",ie),m.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(V),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,te=null,me=null;m.depth&&(me=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=m.stencil?Xs:Us,te=m.stencil?qs:$r);const Ue={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Ue),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),P=new Yr(f.textureWidth,f.textureHeight,{format:Jn,type:Bi,depthTexture:new Fg(f.textureWidth,f.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const he={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),P=new Yr(_.framebufferWidth,_.framebufferHeight,{format:Jn,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),fe.setContext(r),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ie(X){for(let ee=0;ee<X.removed.length;ee++){const he=X.removed[ee],te=R.indexOf(he);te>=0&&(R[te]=null,D[te].disconnect(he))}for(let ee=0;ee<X.added.length;ee++){const he=X.added[ee];let te=R.indexOf(he);if(te===-1){for(let Ue=0;Ue<D.length;Ue++)if(Ue>=R.length){R.push(he),te=Ue;break}else if(R[Ue]===null){R[Ue]=he,te=Ue;break}if(te===-1)break}const me=D[te];me&&me.connect(he)}}const ne=new W,ce=new W;function Y(X,ee,he){ne.setFromMatrixPosition(ee.matrixWorld),ce.setFromMatrixPosition(he.matrixWorld);const te=ne.distanceTo(ce),me=ee.projectionMatrix.elements,Ue=he.projectionMatrix.elements,xe=me[14]/(me[10]-1),Ge=me[14]/(me[10]+1),We=(me[9]+1)/me[5],Fe=(me[9]-1)/me[5],U=(me[8]-1)/me[0],wt=(Ue[8]+1)/Ue[0],qe=xe*U,$e=xe*wt,Ne=te/(-U+wt),lt=Ne*-U;if(ee.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(lt),X.translateZ(Ne),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),me[10]===-1)X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Ce=xe+Ne,N=Ge+Ne,b=qe-lt,q=$e+(te-lt),se=We*Ge/N*Ce,ue=Fe*Ge/N*Ce;X.projectionMatrix.makePerspective(b,q,se,ue,Ce,N),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function _e(X,ee){ee===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ee.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let ee=X.near,he=X.far;M.texture!==null&&(M.depthNear>0&&(ee=M.depthNear),M.depthFar>0&&(he=M.depthFar)),y.near=T.near=x.near=ee,y.far=T.far=x.far=he,(w!==y.near||L!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,L=y.far),x.layers.mask=X.layers.mask|2,T.layers.mask=X.layers.mask|4,y.layers.mask=x.layers.mask|T.layers.mask;const te=X.parent,me=y.cameras;_e(y,te);for(let Ue=0;Ue<me.length;Ue++)_e(me[Ue],te);me.length===2?Y(y,x,T):y.projectionMatrix.copy(x.projectionMatrix),k(X,y,te)};function k(X,ee,he){he===null?X.matrix.copy(ee.matrixWorld):(X.matrix.copy(he.matrixWorld),X.matrix.invert(),X.matrix.multiply(ee.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=$o*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&_===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=X)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(y)};let O=null;function le(X,ee){if(h=ee.getViewerPose(u||o),S=ee,h!==null){const he=h.views;_!==null&&(e.setRenderTargetFramebuffer(P,_.framebuffer),e.setRenderTarget(P));let te=!1;he.length!==y.cameras.length&&(y.cameras.length=0,te=!0);for(let xe=0;xe<he.length;xe++){const Ge=he[xe];let We=null;if(_!==null)We=_.getViewport(Ge);else{const U=d.getViewSubImage(f,Ge);We=U.viewport,xe===0&&(e.setRenderTargetTextures(P,U.colorTexture,f.ignoreDepthValues?void 0:U.depthStencilTexture),e.setRenderTarget(P))}let Fe=v[xe];Fe===void 0&&(Fe=new Vn,Fe.layers.enable(xe),Fe.viewport=new Bt,v[xe]=Fe),Fe.matrix.fromArray(Ge.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ge.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(We.x,We.y,We.width,We.height),xe===0&&(y.matrix.copy(Fe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),te===!0&&y.cameras.push(Fe)}const me=r.enabledFeatures;if(me&&me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const xe=d.getDepthInformation(he[0]);xe&&xe.isValid&&xe.texture&&M.init(e,xe,r.renderState)}}for(let he=0;he<D.length;he++){const te=R[he],me=D[he];te!==null&&me!==void 0&&me.update(te,ee,u||o)}O&&O(X,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),S=null}const fe=new Bg;fe.setAnimationLoop(le),this.setAnimationLoop=function(X){O=X},this.dispose=function(){}}}const Lr=new ni,uM=new zt;function hM(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Ng(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function r(m,g,P,D,R){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(m,g):g.isMeshToonMaterial?(s(m,g),d(m,g)):g.isMeshPhongMaterial?(s(m,g),h(m,g)):g.isMeshStandardMaterial?(s(m,g),f(m,g),g.isMeshPhysicalMaterial&&_(m,g,R)):g.isMeshMatcapMaterial?(s(m,g),S(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),M(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,P,D):g.isSpriteMaterial?u(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===In&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===In&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const P=e.get(g),D=P.envMap,R=P.envMapRotation;D&&(m.envMap.value=D,Lr.copy(R),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),m.envMapRotation.value.setFromMatrix4(uM.makeRotationFromEuler(Lr)),m.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,P,D){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*P,m.scale.value=D*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function _(m,g,P){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===In&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=P.texture,m.transmissionSamplerSize.value.set(P.width,P.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function S(m,g){g.matcap&&(m.matcap.value=g.matcap)}function M(m,g){const P=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(P.matrixWorld),m.nearDistance.value=P.shadow.camera.near,m.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function dM(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(P,D){const R=D.program;n.uniformBlockBinding(P,R)}function u(P,D){let R=r[P.id];R===void 0&&(S(P),R=h(P),r[P.id]=R,P.addEventListener("dispose",m));const V=D.program;n.updateUBOMapping(P,V);const F=e.render.frame;s[P.id]!==F&&(f(P),s[P.id]=F)}function h(P){const D=d();P.__bindingPointIndex=D;const R=i.createBuffer(),V=P.__size,F=P.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,V,F),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,D,R),R}function d(){for(let P=0;P<a;P++)if(o.indexOf(P)===-1)return o.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(P){const D=r[P.id],R=P.uniforms,V=P.__cache;i.bindBuffer(i.UNIFORM_BUFFER,D);for(let F=0,x=R.length;F<x;F++){const T=Array.isArray(R[F])?R[F]:[R[F]];for(let v=0,y=T.length;v<y;v++){const w=T[v];if(_(w,F,v,V)===!0){const L=w.__offset,A=Array.isArray(w.value)?w.value:[w.value];let Z=0;for(let ie=0;ie<A.length;ie++){const ne=A[ie],ce=M(ne);typeof ne=="number"||typeof ne=="boolean"?(w.__data[0]=ne,i.bufferSubData(i.UNIFORM_BUFFER,L+Z,w.__data)):ne.isMatrix3?(w.__data[0]=ne.elements[0],w.__data[1]=ne.elements[1],w.__data[2]=ne.elements[2],w.__data[3]=0,w.__data[4]=ne.elements[3],w.__data[5]=ne.elements[4],w.__data[6]=ne.elements[5],w.__data[7]=0,w.__data[8]=ne.elements[6],w.__data[9]=ne.elements[7],w.__data[10]=ne.elements[8],w.__data[11]=0):(ne.toArray(w.__data,Z),Z+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(P,D,R,V){const F=P.value,x=D+"_"+R;if(V[x]===void 0)return typeof F=="number"||typeof F=="boolean"?V[x]=F:V[x]=F.clone(),!0;{const T=V[x];if(typeof F=="number"||typeof F=="boolean"){if(T!==F)return V[x]=F,!0}else if(T.equals(F)===!1)return T.copy(F),!0}return!1}function S(P){const D=P.uniforms;let R=0;const V=16;for(let x=0,T=D.length;x<T;x++){const v=Array.isArray(D[x])?D[x]:[D[x]];for(let y=0,w=v.length;y<w;y++){const L=v[y],A=Array.isArray(L.value)?L.value:[L.value];for(let Z=0,ie=A.length;Z<ie;Z++){const ne=A[Z],ce=M(ne),Y=R%V,_e=Y%ce.boundary,k=Y+_e;R+=_e,k!==0&&V-k<ce.storage&&(R+=V-k),L.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=R,R+=ce.storage}}}const F=R%V;return F>0&&(R+=V-F),P.__size=R,P.__cache={},this}function M(P){const D={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(D.boundary=4,D.storage=4):P.isVector2?(D.boundary=8,D.storage=8):P.isVector3||P.isColor?(D.boundary=16,D.storage=12):P.isVector4?(D.boundary=16,D.storage=16):P.isMatrix3?(D.boundary=48,D.storage=48):P.isMatrix4?(D.boundary=64,D.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),D}function m(P){const D=P.target;D.removeEventListener("dispose",m);const R=o.indexOf(D.__bindingPointIndex);o.splice(R,1),i.deleteBuffer(r[D.id]),delete r[D.id],delete s[D.id]}function g(){for(const P in r)i.deleteBuffer(r[P]);o=[],r={},s={}}return{bind:l,update:u,dispose:g}}class fM{constructor(e={}){const{canvas:t=qy(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;const S=new Uint32Array(4),M=new Int32Array(4);let m=null,g=null;const P=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kn,this.toneMapping=hr,this.toneMappingExposure=1;const R=this;let V=!1,F=0,x=0,T=null,v=-1,y=null;const w=new Bt,L=new Bt;let A=null;const Z=new yt(0);let ie=0,ne=t.width,ce=t.height,Y=1,_e=null,k=null;const O=new Bt(0,0,ne,ce),le=new Bt(0,0,ne,ce);let fe=!1;const X=new qh;let ee=!1,he=!1;this.transmissionResolutionScale=1;const te=new zt,me=new zt,Ue=new W,xe=new Bt,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function Fe(){return T===null?Y:1}let U=n;function wt(I,z){return t.getContext(I,z)}try{const I={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dh}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",ye,!1),U===null){const z="webgl2";if(U=wt(z,I),U===null)throw wt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let qe,$e,Ne,lt,Ce,N,b,q,se,ue,J,we,ve,Ie,ot,pe,Re,He,Ye,De,ut,nt,Mt,B;function Te(){qe=new xx(U),qe.init(),nt=new sM(U,qe),$e=new gx(U,qe,e,nt),Ne=new iM(U,qe),$e.reverseDepthBuffer&&f&&Ne.buffers.depth.setReversed(!0),lt=new Ax(U),Ce=new Ww,N=new rM(U,qe,Ne,Ce,$e,nt,lt),b=new vx(R),q=new Sx(R),se=new DE(U),Mt=new px(U,se),ue=new wx(U,se,lt,Mt),J=new Rx(U,ue,se,lt),Ye=new bx(U,$e,N),pe=new _x(Ce),we=new Hw(R,b,q,qe,$e,Mt,pe),ve=new hM(R,Ce),Ie=new Xw,ot=new Qw(qe),He=new fx(R,b,q,Ne,J,_,l),Re=new tM(R,J,$e),B=new dM(U,lt,$e,Ne),De=new mx(U,qe,lt),ut=new Mx(U,qe,lt),lt.programs=we.programs,R.capabilities=$e,R.extensions=qe,R.properties=Ce,R.renderLists=Ie,R.shadowMap=Re,R.state=Ne,R.info=lt}Te();const Q=new lM(R,U);this.xr=Q,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const I=qe.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=qe.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(I){I!==void 0&&(Y=I,this.setSize(ne,ce,!1))},this.getSize=function(I){return I.set(ne,ce)},this.setSize=function(I,z,j=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=I,ce=z,t.width=Math.floor(I*Y),t.height=Math.floor(z*Y),j===!0&&(t.style.width=I+"px",t.style.height=z+"px"),this.setViewport(0,0,I,z)},this.getDrawingBufferSize=function(I){return I.set(ne*Y,ce*Y).floor()},this.setDrawingBufferSize=function(I,z,j){ne=I,ce=z,Y=j,t.width=Math.floor(I*j),t.height=Math.floor(z*j),this.setViewport(0,0,I,z)},this.getCurrentViewport=function(I){return I.copy(w)},this.getViewport=function(I){return I.copy(O)},this.setViewport=function(I,z,j,$){I.isVector4?O.set(I.x,I.y,I.z,I.w):O.set(I,z,j,$),Ne.viewport(w.copy(O).multiplyScalar(Y).round())},this.getScissor=function(I){return I.copy(le)},this.setScissor=function(I,z,j,$){I.isVector4?le.set(I.x,I.y,I.z,I.w):le.set(I,z,j,$),Ne.scissor(L.copy(le).multiplyScalar(Y).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(I){Ne.setScissorTest(fe=I)},this.setOpaqueSort=function(I){_e=I},this.setTransparentSort=function(I){k=I},this.getClearColor=function(I){return I.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(I=!0,z=!0,j=!0){let $=0;if(I){let G=!1;if(T!==null){const de=T.texture.format;G=de===Vh||de===kh||de===Fh}if(G){const de=T.texture.type,Ee=de===Bi||de===$r||de===jo||de===qs||de===Uh||de===Oh,Ae=He.getClearColor(),Le=He.getClearAlpha(),Ke=Ae.r,Je=Ae.g,ke=Ae.b;Ee?(S[0]=Ke,S[1]=Je,S[2]=ke,S[3]=Le,U.clearBufferuiv(U.COLOR,0,S)):(M[0]=Ke,M[1]=Je,M[2]=ke,M[3]=Le,U.clearBufferiv(U.COLOR,0,M))}else $|=U.COLOR_BUFFER_BIT}z&&($|=U.DEPTH_BUFFER_BIT),j&&($|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),He.dispose(),Ie.dispose(),ot.dispose(),Ce.dispose(),b.dispose(),q.dispose(),J.dispose(),Mt.dispose(),B.dispose(),we.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",mo),Q.removeEventListener("sessionend",$i),Dn.stop()};function ae(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const I=lt.autoReset,z=Re.enabled,j=Re.autoUpdate,$=Re.needsUpdate,G=Re.type;Te(),lt.autoReset=I,Re.enabled=z,Re.autoUpdate=j,Re.needsUpdate=$,Re.type=G}function ye(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function et(I){const z=I.target;z.removeEventListener("dispose",et),Ct(z)}function Ct(I){Kt(I),Ce.remove(I)}function Kt(I){const z=Ce.get(I).programs;z!==void 0&&(z.forEach(function(j){we.releaseProgram(j)}),I.isShaderMaterial&&we.releaseShaderCache(I))}this.renderBufferDirect=function(I,z,j,$,G,de){z===null&&(z=Ge);const Ee=G.isMesh&&G.matrixWorld.determinant()<0,Ae=ls(I,z,j,$,G);Ne.setMaterial($,Ee);let Le=j.index,Ke=1;if($.wireframe===!0){if(Le=ue.getWireframeAttribute(j),Le===void 0)return;Ke=2}const Je=j.drawRange,ke=j.attributes.position;let ht=Je.start*Ke,_t=(Je.start+Je.count)*Ke;de!==null&&(ht=Math.max(ht,de.start*Ke),_t=Math.min(_t,(de.start+de.count)*Ke)),Le!==null?(ht=Math.max(ht,0),_t=Math.min(_t,Le.count)):ke!=null&&(ht=Math.max(ht,0),_t=Math.min(_t,ke.count));const Ot=_t-ht;if(Ot<0||Ot===1/0)return;Mt.setup(G,$,Ae,j,Le);let Nt,gt=De;if(Le!==null&&(Nt=se.get(Le),gt=ut,gt.setIndex(Nt)),G.isMesh)$.wireframe===!0?(Ne.setLineWidth($.wireframeLinewidth*Fe()),gt.setMode(U.LINES)):gt.setMode(U.TRIANGLES);else if(G.isLine){let ze=$.linewidth;ze===void 0&&(ze=1),Ne.setLineWidth(ze*Fe()),G.isLineSegments?gt.setMode(U.LINES):G.isLineLoop?gt.setMode(U.LINE_LOOP):gt.setMode(U.LINE_STRIP)}else G.isPoints?gt.setMode(U.POINTS):G.isSprite&&gt.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Nr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))gt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const ze=G._multiDrawStarts,Jt=G._multiDrawCounts,Et=G._multiDrawCount,An=Le?se.get(Le).bytesPerElement:1,Yi=Ce.get($).currentProgram.getUniforms();for(let Ht=0;Ht<Et;Ht++)Yi.setValue(U,"_gl_DrawID",Ht),gt.render(ze[Ht]/An,Jt[Ht])}else if(G.isInstancedMesh)gt.renderInstances(ht,Ot,G.count);else if(j.isInstancedBufferGeometry){const ze=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Jt=Math.min(j.instanceCount,ze);gt.renderInstances(ht,Ot,Jt)}else gt.render(ht,Ot)};function mt(I,z,j){I.transparent===!0&&I.side===ci&&I.forceSinglePass===!1?(I.side=In,I.needsUpdate=!0,Ei(I,z,j),I.side=_r,I.needsUpdate=!0,Ei(I,z,j),I.side=ci):Ei(I,z,j)}this.compile=function(I,z,j=null){j===null&&(j=I),g=ot.get(j),g.init(z),D.push(g),j.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),I!==j&&I.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),g.setupLights();const $=new Set;return I.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const de=G.material;if(de)if(Array.isArray(de))for(let Ee=0;Ee<de.length;Ee++){const Ae=de[Ee];mt(Ae,j,G),$.add(Ae)}else mt(de,j,G),$.add(de)}),g=D.pop(),$},this.compileAsync=function(I,z,j=null){const $=this.compile(I,z,j);return new Promise(G=>{function de(){if($.forEach(function(Ee){Ce.get(Ee).currentProgram.isReady()&&$.delete(Ee)}),$.size===0){G(I);return}setTimeout(de,10)}qe.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Mn=null;function Lt(I){Mn&&Mn(I)}function mo(){Dn.stop()}function $i(){Dn.start()}const Dn=new Bg;Dn.setAnimationLoop(Lt),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(I){Mn=I,Q.setAnimationLoop(I),I===null?Dn.stop():Dn.start()},Q.addEventListener("sessionstart",mo),Q.addEventListener("sessionend",$i),this.render=function(I,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(z),z=Q.getCamera()),I.isScene===!0&&I.onBeforeRender(R,I,z,T),g=ot.get(I,D.length),g.init(z),D.push(g),me.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),X.setFromProjectionMatrix(me),he=this.localClippingEnabled,ee=pe.init(this.clippingPlanes,he),m=Ie.get(I,P.length),m.init(),P.push(m),Q.enabled===!0&&Q.isPresenting===!0){const de=R.xr.getDepthSensingMesh();de!==null&&go(de,z,-1/0,R.sortObjects)}go(I,z,0,R.sortObjects),m.finish(),R.sortObjects===!0&&m.sort(_e,k),We=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,We&&He.addToRenderList(m,I),this.info.render.frame++,ee===!0&&pe.beginShadows();const j=g.state.shadowsArray;Re.render(j,I,z),ee===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,G=m.transmissive;if(g.setupLights(),z.isArrayCamera){const de=z.cameras;if(G.length>0)for(let Ee=0,Ae=de.length;Ee<Ae;Ee++){const Le=de[Ee];yi($,G,I,Le)}We&&He.render(I);for(let Ee=0,Ae=de.length;Ee<Ae;Ee++){const Le=de[Ee];Ta(m,I,Le,Le.viewport)}}else G.length>0&&yi($,G,I,z),We&&He.render(I),Ta(m,I,z);T!==null&&x===0&&(N.updateMultisampleRenderTarget(T),N.updateRenderTargetMipmap(T)),I.isScene===!0&&I.onAfterRender(R,I,z),Mt.resetDefaultState(),v=-1,y=null,D.pop(),D.length>0?(g=D[D.length-1],ee===!0&&pe.setGlobalState(R.clippingPlanes,g.state.camera)):g=null,P.pop(),P.length>0?m=P[P.length-1]:m=null};function go(I,z,j,$){if(I.visible===!1)return;if(I.layers.test(z.layers)){if(I.isGroup)j=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(z);else if(I.isLight)g.pushLight(I),I.castShadow&&g.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||X.intersectsSprite(I)){$&&xe.setFromMatrixPosition(I.matrixWorld).applyMatrix4(me);const Ee=J.update(I),Ae=I.material;Ae.visible&&m.push(I,Ee,Ae,j,xe.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||X.intersectsObject(I))){const Ee=J.update(I),Ae=I.material;if($&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),xe.copy(I.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),xe.copy(Ee.boundingSphere.center)),xe.applyMatrix4(I.matrixWorld).applyMatrix4(me)),Array.isArray(Ae)){const Le=Ee.groups;for(let Ke=0,Je=Le.length;Ke<Je;Ke++){const ke=Le[Ke],ht=Ae[ke.materialIndex];ht&&ht.visible&&m.push(I,Ee,ht,j,xe.z,ke)}}else Ae.visible&&m.push(I,Ee,Ae,j,xe.z,null)}}const de=I.children;for(let Ee=0,Ae=de.length;Ee<Ae;Ee++)go(de[Ee],z,j,$)}function Ta(I,z,j,$){const G=I.opaque,de=I.transmissive,Ee=I.transparent;g.setupLightsView(j),ee===!0&&pe.setGlobalState(R.clippingPlanes,j),$&&Ne.viewport(w.copy($)),G.length>0&&as(G,z,j),de.length>0&&as(de,z,j),Ee.length>0&&as(Ee,z,j),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function yi(I,z,j,$){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[$.id]===void 0&&(g.state.transmissionRenderTarget[$.id]=new Yr(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?aa:Bi,minFilter:zr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));const de=g.state.transmissionRenderTarget[$.id],Ee=$.viewport||w;de.setSize(Ee.z*R.transmissionResolutionScale,Ee.w*R.transmissionResolutionScale);const Ae=R.getRenderTarget();R.setRenderTarget(de),R.getClearColor(Z),ie=R.getClearAlpha(),ie<1&&R.setClearColor(16777215,.5),R.clear(),We&&He.render(j);const Le=R.toneMapping;R.toneMapping=hr;const Ke=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),g.setupLightsView($),ee===!0&&pe.setGlobalState(R.clippingPlanes,$),as(I,j,$),N.updateMultisampleRenderTarget(de),N.updateRenderTargetMipmap(de),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let ke=0,ht=z.length;ke<ht;ke++){const _t=z[ke],Ot=_t.object,Nt=_t.geometry,gt=_t.material,ze=_t.group;if(gt.side===ci&&Ot.layers.test($.layers)){const Jt=gt.side;gt.side=In,gt.needsUpdate=!0,Sa(Ot,j,$,Nt,gt,ze),gt.side=Jt,gt.needsUpdate=!0,Je=!0}}Je===!0&&(N.updateMultisampleRenderTarget(de),N.updateRenderTargetMipmap(de))}R.setRenderTarget(Ae),R.setClearColor(Z,ie),Ke!==void 0&&($.viewport=Ke),R.toneMapping=Le}function as(I,z,j){const $=z.isScene===!0?z.overrideMaterial:null;for(let G=0,de=I.length;G<de;G++){const Ee=I[G],Ae=Ee.object,Le=Ee.geometry,Ke=$===null?Ee.material:$,Je=Ee.group;Ae.layers.test(j.layers)&&Sa(Ae,z,j,Le,Ke,Je)}}function Sa(I,z,j,$,G,de){I.onBeforeRender(R,z,j,$,G,de),I.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),G.onBeforeRender(R,z,j,$,I,de),G.transparent===!0&&G.side===ci&&G.forceSinglePass===!1?(G.side=In,G.needsUpdate=!0,R.renderBufferDirect(j,z,$,G,I,de),G.side=_r,G.needsUpdate=!0,R.renderBufferDirect(j,z,$,G,I,de),G.side=ci):R.renderBufferDirect(j,z,$,G,I,de),I.onAfterRender(R,z,j,$,G,de)}function Ei(I,z,j){z.isScene!==!0&&(z=Ge);const $=Ce.get(I),G=g.state.lights,de=g.state.shadowsArray,Ee=G.state.version,Ae=we.getParameters(I,G.state,de,z,j),Le=we.getProgramCacheKey(Ae);let Ke=$.programs;$.environment=I.isMeshStandardMaterial?z.environment:null,$.fog=z.fog,$.envMap=(I.isMeshStandardMaterial?q:b).get(I.envMap||$.environment),$.envMapRotation=$.environment!==null&&I.envMap===null?z.environmentRotation:I.envMapRotation,Ke===void 0&&(I.addEventListener("dispose",et),Ke=new Map,$.programs=Ke);let Je=Ke.get(Le);if(Je!==void 0){if($.currentProgram===Je&&$.lightsStateVersion===Ee)return cs(I,Ae),Je}else Ae.uniforms=we.getUniforms(I),I.onBeforeCompile(Ae,R),Je=we.acquireProgram(Ae,Le),Ke.set(Le,Je),$.uniforms=Ae.uniforms;const ke=$.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(ke.clippingPlanes=pe.uniform),cs(I,Ae),$.needsLights=xa(I),$.lightsStateVersion=Ee,$.needsLights&&(ke.ambientLightColor.value=G.state.ambient,ke.lightProbe.value=G.state.probe,ke.directionalLights.value=G.state.directional,ke.directionalLightShadows.value=G.state.directionalShadow,ke.spotLights.value=G.state.spot,ke.spotLightShadows.value=G.state.spotShadow,ke.rectAreaLights.value=G.state.rectArea,ke.ltc_1.value=G.state.rectAreaLTC1,ke.ltc_2.value=G.state.rectAreaLTC2,ke.pointLights.value=G.state.point,ke.pointLightShadows.value=G.state.pointShadow,ke.hemisphereLights.value=G.state.hemi,ke.directionalShadowMap.value=G.state.directionalShadowMap,ke.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ke.spotShadowMap.value=G.state.spotShadowMap,ke.spotLightMatrix.value=G.state.spotLightMatrix,ke.spotLightMap.value=G.state.spotLightMap,ke.pointShadowMap.value=G.state.pointShadowMap,ke.pointShadowMatrix.value=G.state.pointShadowMatrix),$.currentProgram=Je,$.uniformsList=null,Je}function _o(I){if(I.uniformsList===null){const z=I.currentProgram.getUniforms();I.uniformsList=fc.seqWithValue(z.seq,I.uniforms)}return I.uniformsList}function cs(I,z){const j=Ce.get(I);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.batchingColor=z.batchingColor,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.instancingMorph=z.instancingMorph,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function ls(I,z,j,$,G){z.isScene!==!0&&(z=Ge),N.resetTextureUnits();const de=z.fog,Ee=$.isMeshStandardMaterial?z.environment:null,Ae=T===null?R.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:js,Le=($.isMeshStandardMaterial?q:b).get($.envMap||Ee),Ke=$.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Je=!!j.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),ke=!!j.morphAttributes.position,ht=!!j.morphAttributes.normal,_t=!!j.morphAttributes.color;let Ot=hr;$.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ot=R.toneMapping);const Nt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,gt=Nt!==void 0?Nt.length:0,ze=Ce.get($),Jt=g.state.lights;if(ee===!0&&(he===!0||I!==y)){const it=I===y&&$.id===v;pe.setState($,I,it)}let Et=!1;$.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Jt.state.version||ze.outputColorSpace!==Ae||G.isBatchedMesh&&ze.batching===!1||!G.isBatchedMesh&&ze.batching===!0||G.isBatchedMesh&&ze.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&ze.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&ze.instancing===!1||!G.isInstancedMesh&&ze.instancing===!0||G.isSkinnedMesh&&ze.skinning===!1||!G.isSkinnedMesh&&ze.skinning===!0||G.isInstancedMesh&&ze.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ze.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ze.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ze.instancingMorph===!1&&G.morphTexture!==null||ze.envMap!==Le||$.fog===!0&&ze.fog!==de||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==pe.numPlanes||ze.numIntersection!==pe.numIntersection)||ze.vertexAlphas!==Ke||ze.vertexTangents!==Je||ze.morphTargets!==ke||ze.morphNormals!==ht||ze.morphColors!==_t||ze.toneMapping!==Ot||ze.morphTargetsCount!==gt)&&(Et=!0):(Et=!0,ze.__version=$.version);let An=ze.currentProgram;Et===!0&&(An=Ei($,z,G));let Yi=!1,Ht=!1,En=!1;const bt=An.getUniforms(),sn=ze.uniforms;if(Ne.useProgram(An.program)&&(Yi=!0,Ht=!0,En=!0),$.id!==v&&(v=$.id,Ht=!0),Yi||y!==I){Ne.buffers.depth.getReversed()?(te.copy(I.projectionMatrix),jy(te),$y(te),bt.setValue(U,"projectionMatrix",te)):bt.setValue(U,"projectionMatrix",I.projectionMatrix),bt.setValue(U,"viewMatrix",I.matrixWorldInverse);const Qt=bt.map.cameraPosition;Qt!==void 0&&Qt.setValue(U,Ue.setFromMatrixPosition(I.matrixWorld)),$e.logarithmicDepthBuffer&&bt.setValue(U,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&bt.setValue(U,"isOrthographic",I.isOrthographicCamera===!0),y!==I&&(y=I,Ht=!0,En=!0)}if(G.isSkinnedMesh){bt.setOptional(U,G,"bindMatrix"),bt.setOptional(U,G,"bindMatrixInverse");const it=G.skeleton;it&&(it.boneTexture===null&&it.computeBoneTexture(),bt.setValue(U,"boneTexture",it.boneTexture,N))}G.isBatchedMesh&&(bt.setOptional(U,G,"batchingTexture"),bt.setValue(U,"batchingTexture",G._matricesTexture,N),bt.setOptional(U,G,"batchingIdTexture"),bt.setValue(U,"batchingIdTexture",G._indirectTexture,N),bt.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&bt.setValue(U,"batchingColorTexture",G._colorsTexture,N));const Tn=j.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&Ye.update(G,j,An),(Ht||ze.receiveShadow!==G.receiveShadow)&&(ze.receiveShadow=G.receiveShadow,bt.setValue(U,"receiveShadow",G.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(sn.envMap.value=Le,sn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&z.environment!==null&&(sn.envMapIntensity.value=z.environmentIntensity),Ht&&(bt.setValue(U,"toneMappingExposure",R.toneMappingExposure),ze.needsLights&&ri(sn,En),de&&$.fog===!0&&ve.refreshFogUniforms(sn,de),ve.refreshMaterialUniforms(sn,$,Y,ce,g.state.transmissionRenderTarget[I.id]),fc.upload(U,_o(ze),sn,N)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(fc.upload(U,_o(ze),sn,N),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&bt.setValue(U,"center",G.center),bt.setValue(U,"modelViewMatrix",G.modelViewMatrix),bt.setValue(U,"normalMatrix",G.normalMatrix),bt.setValue(U,"modelMatrix",G.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const it=$.uniformsGroups;for(let Qt=0,Ti=it.length;Qt<Ti;Qt++){const Ln=it[Qt];B.update(Ln,An),B.bind(Ln,An)}}return An}function ri(I,z){I.ambientLightColor.needsUpdate=z,I.lightProbe.needsUpdate=z,I.directionalLights.needsUpdate=z,I.directionalLightShadows.needsUpdate=z,I.pointLights.needsUpdate=z,I.pointLightShadows.needsUpdate=z,I.spotLights.needsUpdate=z,I.spotLightShadows.needsUpdate=z,I.rectAreaLights.needsUpdate=z,I.hemisphereLights.needsUpdate=z}function xa(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(I,z,j){Ce.get(I.texture).__webglTexture=z,Ce.get(I.depthTexture).__webglTexture=j;const $=Ce.get(I);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=j===void 0,$.__autoAllocateDepthBuffer||qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,z){const j=Ce.get(I);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0};const wa=U.createFramebuffer();this.setRenderTarget=function(I,z=0,j=0){T=I,F=z,x=j;let $=!0,G=null,de=!1,Ee=!1;if(I){const Le=Ce.get(I);if(Le.__useDefaultFramebuffer!==void 0)Ne.bindFramebuffer(U.FRAMEBUFFER,null),$=!1;else if(Le.__webglFramebuffer===void 0)N.setupRenderTarget(I);else if(Le.__hasExternalTextures)N.rebindTextures(I,Ce.get(I.texture).__webglTexture,Ce.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const ke=I.depthTexture;if(Le.__boundDepthTexture!==ke){if(ke!==null&&Ce.has(ke)&&(I.width!==ke.image.width||I.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(I)}}const Ke=I.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ee=!0);const Je=Ce.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Je[z])?G=Je[z][j]:G=Je[z],de=!0):I.samples>0&&N.useMultisampledRTT(I)===!1?G=Ce.get(I).__webglMultisampledFramebuffer:Array.isArray(Je)?G=Je[j]:G=Je,w.copy(I.viewport),L.copy(I.scissor),A=I.scissorTest}else w.copy(O).multiplyScalar(Y).floor(),L.copy(le).multiplyScalar(Y).floor(),A=fe;if(j!==0&&(G=wa),Ne.bindFramebuffer(U.FRAMEBUFFER,G)&&$&&Ne.drawBuffers(I,G),Ne.viewport(w),Ne.scissor(L),Ne.setScissorTest(A),de){const Le=Ce.get(I.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+z,Le.__webglTexture,j)}else if(Ee){const Le=Ce.get(I.texture),Ke=z;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Le.__webglTexture,j,Ke)}else if(I!==null&&j!==0){const Le=Ce.get(I.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Le.__webglTexture,j)}v=-1},this.readRenderTargetPixels=function(I,z,j,$,G,de,Ee){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ce.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ae=Ae[Ee]),Ae){Ne.bindFramebuffer(U.FRAMEBUFFER,Ae);try{const Le=I.texture,Ke=Le.format,Je=Le.type;if(!$e.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=I.width-$&&j>=0&&j<=I.height-G&&U.readPixels(z,j,$,G,nt.convert(Ke),nt.convert(Je),de)}finally{const Le=T!==null?Ce.get(T).__webglFramebuffer:null;Ne.bindFramebuffer(U.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(I,z,j,$,G,de,Ee){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Ce.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ae=Ae[Ee]),Ae){const Le=I.texture,Ke=Le.format,Je=Le.type;if(!$e.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=I.width-$&&j>=0&&j<=I.height-G){Ne.bindFramebuffer(U.FRAMEBUFFER,Ae);const ke=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ke),U.bufferData(U.PIXEL_PACK_BUFFER,de.byteLength,U.STREAM_READ),U.readPixels(z,j,$,G,nt.convert(Ke),nt.convert(Je),0);const ht=T!==null?Ce.get(T).__webglFramebuffer:null;Ne.bindFramebuffer(U.FRAMEBUFFER,ht);const _t=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Xy(U,_t,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ke),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,de),U.deleteBuffer(ke),U.deleteSync(_t),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,z=null,j=0){I.isTexture!==!0&&(Nr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,I=arguments[1]);const $=Math.pow(2,-j),G=Math.floor(I.image.width*$),de=Math.floor(I.image.height*$),Ee=z!==null?z.x:0,Ae=z!==null?z.y:0;N.setTexture2D(I,0),U.copyTexSubImage2D(U.TEXTURE_2D,j,0,0,Ee,Ae,G,de),Ne.unbindTexture()};const vo=U.createFramebuffer(),yo=U.createFramebuffer();this.copyTextureToTexture=function(I,z,j=null,$=null,G=0,de=null){I.isTexture!==!0&&(Nr("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,I=arguments[1],z=arguments[2],de=arguments[3]||0,j=null),de===null&&(G!==0?(Nr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=G,G=0):de=0);let Ee,Ae,Le,Ke,Je,ke,ht,_t,Ot;const Nt=I.isCompressedTexture?I.mipmaps[de]:I.image;if(j!==null)Ee=j.max.x-j.min.x,Ae=j.max.y-j.min.y,Le=j.isBox3?j.max.z-j.min.z:1,Ke=j.min.x,Je=j.min.y,ke=j.isBox3?j.min.z:0;else{const Tn=Math.pow(2,-G);Ee=Math.floor(Nt.width*Tn),Ae=Math.floor(Nt.height*Tn),I.isDataArrayTexture?Le=Nt.depth:I.isData3DTexture?Le=Math.floor(Nt.depth*Tn):Le=1,Ke=0,Je=0,ke=0}$!==null?(ht=$.x,_t=$.y,Ot=$.z):(ht=0,_t=0,Ot=0);const gt=nt.convert(z.format),ze=nt.convert(z.type);let Jt;z.isData3DTexture?(N.setTexture3D(z,0),Jt=U.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(N.setTexture2DArray(z,0),Jt=U.TEXTURE_2D_ARRAY):(N.setTexture2D(z,0),Jt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);const Et=U.getParameter(U.UNPACK_ROW_LENGTH),An=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Yi=U.getParameter(U.UNPACK_SKIP_PIXELS),Ht=U.getParameter(U.UNPACK_SKIP_ROWS),En=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Nt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Nt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ke),U.pixelStorei(U.UNPACK_SKIP_ROWS,Je),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ke);const bt=I.isDataArrayTexture||I.isData3DTexture,sn=z.isDataArrayTexture||z.isData3DTexture;if(I.isDepthTexture){const Tn=Ce.get(I),it=Ce.get(z),Qt=Ce.get(Tn.__renderTarget),Ti=Ce.get(it.__renderTarget);Ne.bindFramebuffer(U.READ_FRAMEBUFFER,Qt.__webglFramebuffer),Ne.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Ln=0;Ln<Le;Ln++)bt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ce.get(I).__webglTexture,G,ke+Ln),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ce.get(z).__webglTexture,de,Ot+Ln)),U.blitFramebuffer(Ke,Je,Ee,Ae,ht,_t,Ee,Ae,U.DEPTH_BUFFER_BIT,U.NEAREST);Ne.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||I.isRenderTargetTexture||Ce.has(I)){const Tn=Ce.get(I),it=Ce.get(z);Ne.bindFramebuffer(U.READ_FRAMEBUFFER,vo),Ne.bindFramebuffer(U.DRAW_FRAMEBUFFER,yo);for(let Qt=0;Qt<Le;Qt++)bt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Tn.__webglTexture,G,ke+Qt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Tn.__webglTexture,G),sn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,it.__webglTexture,de,Ot+Qt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,it.__webglTexture,de),G!==0?U.blitFramebuffer(Ke,Je,Ee,Ae,ht,_t,Ee,Ae,U.COLOR_BUFFER_BIT,U.NEAREST):sn?U.copyTexSubImage3D(Jt,de,ht,_t,Ot+Qt,Ke,Je,Ee,Ae):U.copyTexSubImage2D(Jt,de,ht,_t,Ke,Je,Ee,Ae);Ne.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else sn?I.isDataTexture||I.isData3DTexture?U.texSubImage3D(Jt,de,ht,_t,Ot,Ee,Ae,Le,gt,ze,Nt.data):z.isCompressedArrayTexture?U.compressedTexSubImage3D(Jt,de,ht,_t,Ot,Ee,Ae,Le,gt,Nt.data):U.texSubImage3D(Jt,de,ht,_t,Ot,Ee,Ae,Le,gt,ze,Nt):I.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,de,ht,_t,Ee,Ae,gt,ze,Nt.data):I.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,de,ht,_t,Nt.width,Nt.height,gt,Nt.data):U.texSubImage2D(U.TEXTURE_2D,de,ht,_t,Ee,Ae,gt,ze,Nt);U.pixelStorei(U.UNPACK_ROW_LENGTH,Et),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,An),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Yi),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ht),U.pixelStorei(U.UNPACK_SKIP_IMAGES,En),de===0&&z.generateMipmaps&&U.generateMipmap(Jt),Ne.unbindTexture()},this.copyTextureToTexture3D=function(I,z,j=null,$=null,G=0){return I.isTexture!==!0&&(Nr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,$=arguments[1]||null,I=arguments[2],z=arguments[3],G=arguments[4]||0),Nr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,z,j,$,G)},this.initRenderTarget=function(I){Ce.get(I).__webglFramebuffer===void 0&&N.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?N.setTextureCube(I,0):I.isData3DTexture?N.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?N.setTexture2DArray(I,0):N.setTexture2D(I,0),Ne.unbindTexture()},this.resetState=function(){F=0,x=0,T=null,Ne.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}var Zh={};(function i(e,t,n,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=(function(){if(!e.OffscreenCanvas)return!1;try{var k=new OffscreenCanvas(1,1),O=k.getContext("2d");O.fillRect(0,0,1,1);var le=k.transferToImageBitmap();O.createPattern(le,"no-repeat")}catch{return!1}return!0})();function l(){}function u(k){var O=t.exports.Promise,le=O!==void 0?O:e.Promise;return typeof le=="function"?new le(k):(k(l,l),null)}var h=(function(k,O){return{transform:function(le){if(k)return le;if(O.has(le))return O.get(le);var fe=new OffscreenCanvas(le.width,le.height),X=fe.getContext("2d");return X.drawImage(le,0,0),O.set(le,fe),fe},clear:function(){O.clear()}}})(a,new Map),d=(function(){var k=Math.floor(16.666666666666668),O,le,fe={},X=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(O=function(ee){var he=Math.random();return fe[he]=requestAnimationFrame(function te(me){X===me||X+k-1<me?(X=me,delete fe[he],ee()):fe[he]=requestAnimationFrame(te)}),he},le=function(ee){fe[ee]&&cancelAnimationFrame(fe[ee])}):(O=function(ee){return setTimeout(ee,k)},le=function(ee){return clearTimeout(ee)}),{frame:O,cancel:le}})(),f=(function(){var k,O,le={};function fe(X){function ee(he,te){X.postMessage({options:he||{},callback:te})}X.init=function(te){var me=te.transferControlToOffscreen();X.postMessage({canvas:me},[me])},X.fire=function(te,me,Ue){if(O)return ee(te,null),O;var xe=Math.random().toString(36).slice(2);return O=u(function(Ge){function We(Fe){Fe.data.callback===xe&&(delete le[xe],X.removeEventListener("message",We),O=null,h.clear(),Ue(),Ge())}X.addEventListener("message",We),ee(te,xe),le[xe]=We.bind(null,{data:{callback:xe}})}),O},X.reset=function(){X.postMessage({reset:!0});for(var te in le)le[te](),delete le[te]}}return function(){if(k)return k;if(!n&&s){var X=["var CONFETTI, SIZE = {}, module = {};","("+i.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{k=new Worker(URL.createObjectURL(new Blob([X])))}catch(ee){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",ee),null}fe(k)}return k}})(),_={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function S(k,O){return O?O(k):k}function M(k){return k!=null}function m(k,O,le){return S(k&&M(k[O])?k[O]:_[O],le)}function g(k){return k<0?0:Math.floor(k)}function P(k,O){return Math.floor(Math.random()*(O-k))+k}function D(k){return parseInt(k,16)}function R(k){return k.map(V)}function V(k){var O=String(k).replace(/[^0-9a-f]/gi,"");return O.length<6&&(O=O[0]+O[0]+O[1]+O[1]+O[2]+O[2]),{r:D(O.substring(0,2)),g:D(O.substring(2,4)),b:D(O.substring(4,6))}}function F(k){var O=m(k,"origin",Object);return O.x=m(O,"x",Number),O.y=m(O,"y",Number),O}function x(k){k.width=document.documentElement.clientWidth,k.height=document.documentElement.clientHeight}function T(k){var O=k.getBoundingClientRect();k.width=O.width,k.height=O.height}function v(k){var O=document.createElement("canvas");return O.style.position="fixed",O.style.top="0px",O.style.left="0px",O.style.pointerEvents="none",O.style.zIndex=k,O}function y(k,O,le,fe,X,ee,he,te,me){k.save(),k.translate(O,le),k.rotate(ee),k.scale(fe,X),k.arc(0,0,1,he,te,me),k.restore()}function w(k){var O=k.angle*(Math.PI/180),le=k.spread*(Math.PI/180);return{x:k.x,y:k.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:k.startVelocity*.5+Math.random()*k.startVelocity,angle2D:-O+(.5*le-Math.random()*le),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:k.color,shape:k.shape,tick:0,totalTicks:k.ticks,decay:k.decay,drift:k.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:k.gravity*3,ovalScalar:.6,scalar:k.scalar,flat:k.flat}}function L(k,O){O.x+=Math.cos(O.angle2D)*O.velocity+O.drift,O.y+=Math.sin(O.angle2D)*O.velocity+O.gravity,O.velocity*=O.decay,O.flat?(O.wobble=0,O.wobbleX=O.x+10*O.scalar,O.wobbleY=O.y+10*O.scalar,O.tiltSin=0,O.tiltCos=0,O.random=1):(O.wobble+=O.wobbleSpeed,O.wobbleX=O.x+10*O.scalar*Math.cos(O.wobble),O.wobbleY=O.y+10*O.scalar*Math.sin(O.wobble),O.tiltAngle+=.1,O.tiltSin=Math.sin(O.tiltAngle),O.tiltCos=Math.cos(O.tiltAngle),O.random=Math.random()+2);var le=O.tick++/O.totalTicks,fe=O.x+O.random*O.tiltCos,X=O.y+O.random*O.tiltSin,ee=O.wobbleX+O.random*O.tiltCos,he=O.wobbleY+O.random*O.tiltSin;if(k.fillStyle="rgba("+O.color.r+", "+O.color.g+", "+O.color.b+", "+(1-le)+")",k.beginPath(),o&&O.shape.type==="path"&&typeof O.shape.path=="string"&&Array.isArray(O.shape.matrix))k.fill(ce(O.shape.path,O.shape.matrix,O.x,O.y,Math.abs(ee-fe)*.1,Math.abs(he-X)*.1,Math.PI/10*O.wobble));else if(O.shape.type==="bitmap"){var te=Math.PI/10*O.wobble,me=Math.abs(ee-fe)*.1,Ue=Math.abs(he-X)*.1,xe=O.shape.bitmap.width*O.scalar,Ge=O.shape.bitmap.height*O.scalar,We=new DOMMatrix([Math.cos(te)*me,Math.sin(te)*me,-Math.sin(te)*Ue,Math.cos(te)*Ue,O.x,O.y]);We.multiplySelf(new DOMMatrix(O.shape.matrix));var Fe=k.createPattern(h.transform(O.shape.bitmap),"no-repeat");Fe.setTransform(We),k.globalAlpha=1-le,k.fillStyle=Fe,k.fillRect(O.x-xe/2,O.y-Ge/2,xe,Ge),k.globalAlpha=1}else if(O.shape==="circle")k.ellipse?k.ellipse(O.x,O.y,Math.abs(ee-fe)*O.ovalScalar,Math.abs(he-X)*O.ovalScalar,Math.PI/10*O.wobble,0,2*Math.PI):y(k,O.x,O.y,Math.abs(ee-fe)*O.ovalScalar,Math.abs(he-X)*O.ovalScalar,Math.PI/10*O.wobble,0,2*Math.PI);else if(O.shape==="star")for(var U=Math.PI/2*3,wt=4*O.scalar,qe=8*O.scalar,$e=O.x,Ne=O.y,lt=5,Ce=Math.PI/lt;lt--;)$e=O.x+Math.cos(U)*qe,Ne=O.y+Math.sin(U)*qe,k.lineTo($e,Ne),U+=Ce,$e=O.x+Math.cos(U)*wt,Ne=O.y+Math.sin(U)*wt,k.lineTo($e,Ne),U+=Ce;else k.moveTo(Math.floor(O.x),Math.floor(O.y)),k.lineTo(Math.floor(O.wobbleX),Math.floor(X)),k.lineTo(Math.floor(ee),Math.floor(he)),k.lineTo(Math.floor(fe),Math.floor(O.wobbleY));return k.closePath(),k.fill(),O.tick<O.totalTicks}function A(k,O,le,fe,X){var ee=O.slice(),he=k.getContext("2d"),te,me,Ue=u(function(xe){function Ge(){te=me=null,he.clearRect(0,0,fe.width,fe.height),h.clear(),X(),xe()}function We(){n&&!(fe.width===r.width&&fe.height===r.height)&&(fe.width=k.width=r.width,fe.height=k.height=r.height),!fe.width&&!fe.height&&(le(k),fe.width=k.width,fe.height=k.height),he.clearRect(0,0,fe.width,fe.height),ee=ee.filter(function(Fe){return L(he,Fe)}),ee.length?te=d.frame(We):Ge()}te=d.frame(We),me=Ge});return{addFettis:function(xe){return ee=ee.concat(xe),Ue},canvas:k,promise:Ue,reset:function(){te&&d.cancel(te),me&&me()}}}function Z(k,O){var le=!k,fe=!!m(O||{},"resize"),X=!1,ee=m(O,"disableForReducedMotion",Boolean),he=s&&!!m(O||{},"useWorker"),te=he?f():null,me=le?x:T,Ue=k&&te?!!k.__confetti_initialized:!1,xe=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Ge;function We(U,wt,qe){for(var $e=m(U,"particleCount",g),Ne=m(U,"angle",Number),lt=m(U,"spread",Number),Ce=m(U,"startVelocity",Number),N=m(U,"decay",Number),b=m(U,"gravity",Number),q=m(U,"drift",Number),se=m(U,"colors",R),ue=m(U,"ticks",Number),J=m(U,"shapes"),we=m(U,"scalar"),ve=!!m(U,"flat"),Ie=F(U),ot=$e,pe=[],Re=k.width*Ie.x,He=k.height*Ie.y;ot--;)pe.push(w({x:Re,y:He,angle:Ne,spread:lt,startVelocity:Ce,color:se[ot%se.length],shape:J[P(0,J.length)],ticks:ue,decay:N,gravity:b,drift:q,scalar:we,flat:ve}));return Ge?Ge.addFettis(pe):(Ge=A(k,pe,me,wt,qe),Ge.promise)}function Fe(U){var wt=ee||m(U,"disableForReducedMotion",Boolean),qe=m(U,"zIndex",Number);if(wt&&xe)return u(function(Ce){Ce()});le&&Ge?k=Ge.canvas:le&&!k&&(k=v(qe),document.body.appendChild(k)),fe&&!Ue&&me(k);var $e={width:k.width,height:k.height};te&&!Ue&&te.init(k),Ue=!0,te&&(k.__confetti_initialized=!0);function Ne(){if(te){var Ce={getBoundingClientRect:function(){if(!le)return k.getBoundingClientRect()}};me(Ce),te.postMessage({resize:{width:Ce.width,height:Ce.height}});return}$e.width=$e.height=null}function lt(){Ge=null,fe&&(X=!1,e.removeEventListener("resize",Ne)),le&&k&&(document.body.contains(k)&&document.body.removeChild(k),k=null,Ue=!1)}return fe&&!X&&(X=!0,e.addEventListener("resize",Ne,!1)),te?te.fire(U,$e,lt):We(U,$e,lt)}return Fe.reset=function(){te&&te.reset(),Ge&&Ge.reset()},Fe}var ie;function ne(){return ie||(ie=Z(null,{useWorker:!0,resize:!0})),ie}function ce(k,O,le,fe,X,ee,he){var te=new Path2D(k),me=new Path2D;me.addPath(te,new DOMMatrix(O));var Ue=new Path2D;return Ue.addPath(me,new DOMMatrix([Math.cos(he)*X,Math.sin(he)*X,-Math.sin(he)*ee,Math.cos(he)*ee,le,fe])),Ue}function Y(k){if(!o)throw new Error("path confetti are not supported in this browser");var O,le;typeof k=="string"?O=k:(O=k.path,le=k.matrix);var fe=new Path2D(O),X=document.createElement("canvas"),ee=X.getContext("2d");if(!le){for(var he=1e3,te=he,me=he,Ue=0,xe=0,Ge,We,Fe=0;Fe<he;Fe+=2)for(var U=0;U<he;U+=2)ee.isPointInPath(fe,Fe,U,"nonzero")&&(te=Math.min(te,Fe),me=Math.min(me,U),Ue=Math.max(Ue,Fe),xe=Math.max(xe,U));Ge=Ue-te,We=xe-me;var wt=10,qe=Math.min(wt/Ge,wt/We);le=[qe,0,0,qe,-Math.round(Ge/2+te)*qe,-Math.round(We/2+me)*qe]}return{type:"path",path:O,matrix:le}}function _e(k){var O,le=1,fe="#000000",X='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof k=="string"?O=k:(O=k.text,le="scalar"in k?k.scalar:le,X="fontFamily"in k?k.fontFamily:X,fe="color"in k?k.color:fe);var ee=10*le,he=""+ee+"px "+X,te=new OffscreenCanvas(ee,ee),me=te.getContext("2d");me.font=he;var Ue=me.measureText(O),xe=Math.ceil(Ue.actualBoundingBoxRight+Ue.actualBoundingBoxLeft),Ge=Math.ceil(Ue.actualBoundingBoxAscent+Ue.actualBoundingBoxDescent),We=2,Fe=Ue.actualBoundingBoxLeft+We,U=Ue.actualBoundingBoxAscent+We;xe+=We+We,Ge+=We+We,te=new OffscreenCanvas(xe,Ge),me=te.getContext("2d"),me.font=he,me.fillStyle=fe,me.fillText(O,Fe,U);var wt=1/le;return{type:"bitmap",bitmap:te.transferToImageBitmap(),matrix:[wt,0,0,wt,-xe*wt/2,-Ge*wt/2]}}t.exports=function(){return ne().apply(this,arguments)},t.exports.reset=function(){ne().reset()},t.exports.create=Z,t.exports.shapeFromPath=Y,t.exports.shapeFromText=_e})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Zh,!1);const pM=Zh.exports;Zh.exports.create;class mM{constructor(){this.mesh=new an;const e=new bn({color:16768964}),t=new bn({color:16722498}),n=new bn({color:1976635}),r=new bn({color:3900150}),s=new bn({color:16317180}),o=new bn({color:1981066});new bn({color:16777215});const a=new bn({color:15680580}),l=new wn({color:58879,emissive:21879,metalness:.8,roughness:.2}),u=new wn({color:16750848,emissive:4465152,metalness:.6,roughness:.3});this.bodyGroup=new an,this.mesh.add(this.bodyGroup);const h=new Tt(.7,.85,.45);this.torso=new Oe(h,r),this.torso.position.y=1.35,this.torso.castShadow=!0,this.bodyGroup.add(this.torso);const d=new Tt(.35,.75,.47),f=new Oe(d,s);f.position.y=1.35,this.bodyGroup.add(f);const _=new Tt(.5,.52,.5);this.head=new Oe(_,e),this.head.position.y=1.95,this.head.castShadow=!0,this.bodyGroup.add(this.head);const S=new Tt(.54,.22,.54);this.cap=new Oe(S,t),this.cap.position.y=2.12,this.bodyGroup.add(this.cap);const M=new Tt(.48,.05,.28),m=new Oe(M,n);m.position.set(0,2.05,-.32),this.bodyGroup.add(m);const g=new Tt(.2,.7,.2);this.leftArm=new an,this.leftArm.position.set(-.48,1.65,0);const P=new Oe(g,r);P.position.y=-.3,P.castShadow=!0,this.leftArm.add(P),this.bodyGroup.add(this.leftArm),this.rightArm=new an,this.rightArm.position.set(.48,1.65,0);const D=new Oe(g,r);D.position.y=-.3,D.castShadow=!0,this.rightArm.add(D),this.bodyGroup.add(this.rightArm);const R=new Tt(.24,.75,.26);this.leftLeg=new an,this.leftLeg.position.set(-.22,.85,0);const V=new Oe(R,o);V.position.y=-.35,V.castShadow=!0,this.leftLeg.add(V);const F=new Tt(.26,.18,.42),x=new Oe(F,a);x.position.set(0,-.72,.06),this.leftLeg.add(x),this.bodyGroup.add(this.leftLeg),this.rightLeg=new an,this.rightLeg.position.set(.22,.85,0);const T=new Oe(R,o);T.position.y=-.35,T.castShadow=!0,this.rightLeg.add(T);const v=new Oe(F,a);v.position.set(0,-.72,.06),this.rightLeg.add(v),this.bodyGroup.add(this.rightLeg);const y=new Xh(.55,16),w=new Wr({color:0,transparent:!0,opacity:.4});this.shadowMesh=new Oe(y,w),this.shadowMesh.rotation.x=-Math.PI/2,this.shadowMesh.position.y=.02,this.mesh.add(this.shadowMesh),this.hoverboard=new an;const L=new Tt(.8,.08,1.4),A=new Oe(L,l);this.hoverboard.add(A);const Z=new Tt(.84,.04,1.44),ie=new Wr({color:65535}),ne=new Oe(Z,ie);this.hoverboard.add(ne),this.hoverboard.position.y=.12,this.hoverboard.visible=!1,this.mesh.add(this.hoverboard),this.jetpack=new an;const ce=new qr(.12,.12,.65,8),Y=new Oe(ce,u);Y.position.set(-.2,1.4,-.3);const _e=new Oe(ce,u);_e.position.set(.2,1.4,-.3),this.jetpack.add(Y),this.jetpack.add(_e);const k=new jh(.14,.2,8),O=new Wr({color:16724736}),le=new Oe(k,O);le.position.set(-.2,1,-.3),le.rotation.x=Math.PI;const fe=new Oe(k,O);fe.position.set(.2,1,-.3),fe.rotation.x=Math.PI,this.jetpack.add(le),this.jetpack.add(fe),this.jetpack.visible=!1,this.bodyGroup.add(this.jetpack),this.animTime=0,this.isJumping=!1,this.isRolling=!1,this.isHoverboarding=!1,this.isJetpacking=!1,this.isDead=!1,this.tiltAngle=0}setHoverboard(e){this.isHoverboarding=e,this.hoverboard.visible=e}setJetpack(e){this.isJetpacking=e,this.jetpack.visible=e}updateAnimation(e,t,n){if(this.isDead){this.bodyGroup.rotation.x=ui.lerp(this.bodyGroup.rotation.x,-Math.PI/3,.1),this.bodyGroup.position.y=ui.lerp(this.bodyGroup.position.y,.2,.1);return}if(this.animTime+=e*t*.45,this.bodyGroup.rotation.z=ui.lerp(this.bodyGroup.rotation.z,this.tiltAngle,.2),n.isRolling)this.bodyGroup.scale.set(1.1,.5,1.1),this.bodyGroup.position.y=-.3,this.bodyGroup.rotation.x=-this.animTime*3,this.leftArm.rotation.x=0,this.rightArm.rotation.x=0,this.leftLeg.rotation.x=0,this.rightLeg.rotation.x=0,this.isHoverboarding&&(this.hoverboard.position.y=.05);else if(n.isJumping||this.isJetpacking){this.bodyGroup.scale.set(1,1,1),this.bodyGroup.position.y=0,this.bodyGroup.rotation.x=0;const r=.6;this.leftLeg.rotation.x=-r,this.rightLeg.rotation.x=-r*.8,this.leftArm.rotation.x=r*1.2,this.rightArm.rotation.x=r*1.2,this.leftArm.rotation.z=-.3,this.rightArm.rotation.z=.3}else if(this.isHoverboarding)this.bodyGroup.scale.set(1,1,1),this.bodyGroup.position.y=.15,this.bodyGroup.rotation.x=0,this.bodyGroup.rotation.y=.35,this.leftLeg.rotation.x=.1,this.rightLeg.rotation.x=-.1,this.leftArm.rotation.z=-.6,this.rightArm.rotation.z=.6,this.hoverboard.position.y=.15+Math.sin(this.animTime*4)*.05;else{this.bodyGroup.scale.set(1,1,1),this.bodyGroup.position.y=Math.abs(Math.sin(this.animTime*2))*.12,this.bodyGroup.rotation.x=.1,this.bodyGroup.rotation.y=0;const r=Math.sin(this.animTime*2);this.leftLeg.rotation.x=r*.75,this.rightLeg.rotation.x=-r*.75,this.leftArm.rotation.x=-r*.8,this.rightArm.rotation.x=r*.8,this.leftArm.rotation.z=0,this.rightArm.rotation.z=0}}reset(){this.isDead=!1,this.bodyGroup.rotation.set(0,0,0),this.bodyGroup.position.set(0,0,0),this.bodyGroup.scale.set(1,1,1),this.tiltAngle=0,this.setHoverboard(!1),this.setJetpack(!1)}}const Pp=3.2,Ii=[-Pp,0,Pp];class gM{constructor(e){this.scene=e,this.trackChunks=[],this.obstacles=[],this.trains=[],this.coins=[],this.powerups=[],this.sceneryProps=[],this.chunkLength=60,this.totalChunks=7,this.nextChunkZ=-this.chunkLength,this.materials={ground:new wn({color:1712432,roughness:.9,metalness:.1}),rail:new wn({color:9741240,roughness:.3,metalness:.8}),sleeper:new wn({color:4007709,roughness:.9}),wall:new wn({color:2370877,roughness:.8}),concrete:new wn({color:4674921,roughness:.8}),trainBodyRed:new wn({color:14427686,metalness:.4,roughness:.4}),trainBodySilver:new wn({color:14870768,metalness:.7,roughness:.3}),trainWindow:new wn({color:988970,roughness:.1,metalness:.9}),headlight:new Wr({color:16775149}),barrierStripe:new bn({color:16096779}),barrierLeg:new bn({color:16777215}),coin:new wn({color:16766720,metalness:.85,roughness:.2,emissive:10052864}),magnet:new wn({color:15680580,metalness:.6,roughness:.3}),jetpack:new wn({color:1096065,metalness:.7,roughness:.2,emissive:292951}),sneakers:new wn({color:9133302,metalness:.5,roughness:.4,emissive:7153881}),multiplier:new wn({color:15485081,metalness:.6,roughness:.3,emissive:12458077})},this.coinGeo=new qr(.35,.35,.1,16),this.coinGeo.rotateX(Math.PI/2),this.initEnvironment()}initEnvironment(){const e=new RE(16777215,.85);this.scene.add(e);const t=new bE(16774635,1.6);t.position.set(20,40,20),t.castShadow=!0,t.shadow.mapSize.width=1024,t.shadow.mapSize.height=1024,t.shadow.camera.near=.5,t.shadow.camera.far=120,t.shadow.camera.left=-25,t.shadow.camera.right=25,t.shadow.camera.top=25,t.shadow.camera.bottom=-25,this.scene.add(t),this.scene.fog=new Wh(593174,50,150),this.createInspector();for(let n=0;n<this.totalChunks;n++){const r=-(n*this.chunkLength)+30;this.spawnTrackChunk(r,n===0)}}createInspector(){this.inspectorGroup=new an;const e=new bn({color:1981066}),t=new bn({color:988970}),n=new bn({color:16768964}),r=new Oe(new Tt(.8,.9,.5),e);r.position.y=1.4,this.inspectorGroup.add(r);const s=new Oe(new Tt(.5,.5,.5),n);s.position.y=2.05,this.inspectorGroup.add(s);const o=new Oe(new Tt(.56,.2,.56),t);o.position.y=2.22,this.inspectorGroup.add(o);const a=new bn({color:7877903}),l=new Oe(new Tt(.4,.4,.7),a);l.position.set(.7,.3,.2),this.inspectorGroup.add(l),this.inspectorGroup.position.set(0,0,7),this.scene.add(this.inspectorGroup)}spawnTrackChunk(e,t=!1){const n=new an;n.position.z=e;const r=new ua(24,this.chunkLength),s=new Oe(r,this.materials.ground);s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s);const o=new Tt(1.2,4.5,this.chunkLength),a=new Oe(o,this.materials.wall);a.position.set(-8.5,2.25,0),n.add(a);const l=new Oe(o,this.materials.wall);l.position.set(8.5,2.25,0),n.add(l),Ii.forEach(S=>{const M=new Tt(.1,.12,this.chunkLength),m=new Oe(M,this.materials.rail);m.position.set(S-.75,.08,0),n.add(m);const g=new Oe(M,this.materials.rail);g.position.set(S+.75,.08,0),n.add(g);const P=new Tt(2,.08,.4);for(let D=-this.chunkLength/2;D<this.chunkLength/2;D+=2.2){const R=new Oe(P,this.materials.sleeper);R.position.set(S,.04,D),n.add(R)}});const u=new Tt(18,.6,.6),h=new Tt(.6,7,.6),d=new Oe(u,this.materials.concrete);d.position.set(0,6.8,0),n.add(d);const f=new Oe(h,this.materials.concrete);f.position.set(-8,3.5,0),n.add(f);const _=new Oe(h,this.materials.concrete);_.position.set(8,3.5,0),n.add(_),this.scene.add(n),this.trackChunks.push(n),t||this.populateChunkContent(e)}populateChunkContent(e){const t=[!1,!1,!1];Ii.forEach((n,r)=>{if(Math.random()<.45&&!t[r]&&t.filter(Boolean).length<2){t[r]=!0;const o=Math.random()<.35,a=Math.random()<.55;this.spawnTrain(n,e+(Math.random()*15-7.5),o,a)}}),Ii.forEach((n,r)=>{if(!t[r]&&Math.random()<.5&&t.filter(Boolean).length<2){const o=Math.random()<.5?"low":"high";this.spawnBarrier(n,e+(Math.random()*20-10),o),t[r]=!0}}),this.spawnCoinsAndPowerups(e,t)}spawnTrain(e,t,n=!1,r=!1){const s=new an;s.position.set(e,0,t);const o=22,a=2.4,l=3.6,u=new Tt(a,l,o),h=Math.random()<.5?this.materials.trainBodyRed:this.materials.trainBodySilver,d=new Oe(u,h);d.position.y=l/2,d.castShadow=!0,d.receiveShadow=!0,s.add(d);const f=new Tt(a*.85,1.2,.2),_=new Oe(f,this.materials.trainWindow);_.position.set(0,l*.7,o/2+.05),s.add(_);const S=new qr(.2,.2,.1,12);S.rotateX(Math.PI/2);const M=new Oe(S,this.materials.headlight);M.position.set(-.75,1.2,o/2+.1),s.add(M);const m=new Oe(S,this.materials.headlight);if(m.position.set(.75,1.2,o/2+.1),s.add(m),r){const g=new Tt(a,.2,5),P=new Oe(g,this.materials.barrierStripe);P.position.set(0,1.8,o/2+2.4),P.rotation.x=.58,P.castShadow=!0,s.add(P),s.hasRamp=!0}for(let g=-o/2+2;g<o/2-2;g+=2.2)this.spawnSingleCoin(e,l+.5,t+g);s.isMoving=n,s.speed=n?14:0,s.bounds={laneX:e,width:a,height:l,length:o,hasRamp:r},this.scene.add(s),this.trains.push(s)}spawnBarrier(e,t,n){const r=new an;if(r.position.set(e,0,t),r.barrierType=n,n==="low"){const s=new Tt(2.6,.35,.2),o=new Oe(s,this.materials.barrierStripe);o.position.y=.95,o.castShadow=!0,r.add(o);const a=new Tt(.18,1,.18),l=new Oe(a,this.materials.barrierLeg);l.position.set(-1.1,.5,0),l.castShadow=!0,r.add(l);const u=new Oe(a,this.materials.barrierLeg);u.position.set(1.1,.5,0),u.castShadow=!0,r.add(u),r.bounds={laneX:e,yMin:0,yMax:1.2,z:t,radius:.8}}else{const s=new Tt(2.6,.5,.3),o=new Oe(s,this.materials.barrierStripe);o.position.y=2.4,o.castShadow=!0,r.add(o);const a=new Tt(.2,2.7,.2),l=new Oe(a,this.materials.barrierLeg);l.position.set(-1.15,1.35,0),r.add(l);const u=new Oe(a,this.materials.barrierLeg);u.position.set(1.15,1.35,0),r.add(u);const h=new Tt(1.6,.4,.1),d=new Oe(h,this.materials.trainBodyRed);d.position.set(0,1.9,0),r.add(d),r.bounds={laneX:e,yMin:1.5,yMax:2.7,z:t,radius:.8}}this.scene.add(r),this.obstacles.push(r)}spawnSingleCoin(e,t,n){const r=new Oe(this.coinGeo,this.materials.coin);r.position.set(e,t,n),r.castShadow=!0,this.scene.add(r),this.coins.push(r)}spawnCoinsAndPowerups(e,t){const n=Ii.filter((r,s)=>!t[s]);if(n.length>0){const r=n[Math.floor(Math.random()*n.length)],s=6,o=Math.random()<.35;for(let a=0;a<s;a++){const l=e+(a-s/2)*2.2;let u=.6;o&&(u+=Math.sin(a/(s-1)*Math.PI)*2.2),this.spawnSingleCoin(r,u,l)}if(Math.random()<.2){const a=["magnet","jetpack","sneakers","multiplier"],l=a[Math.floor(Math.random()*a.length)];this.spawnPowerup(r,e+12,l)}}}spawnPowerup(e,t,n){const r=new an;r.position.set(e,1.2,t),r.powerupType=n;let s;n==="magnet"?(s=new Oe(new Jh(.35,.12,8,16,Math.PI),this.materials.magnet),s.rotation.z=Math.PI):n==="jetpack"?s=new Oe(new qr(.2,.2,.7,8),this.materials.jetpack):n==="sneakers"?s=new Oe(new Tt(.5,.35,.7),this.materials.sneakers):s=new Oe(new Yh(.4),this.materials.multiplier),s.castShadow=!0,r.add(s);const o=new Kh(.55,.65,16),a=new Wr({color:16777215,side:ci,transparent:!0,opacity:.6}),l=new Oe(o,a);r.add(l),this.scene.add(r),this.powerups.push(r)}update(e,t,n,r){if(this.trains.forEach(s=>{s.isMoving&&(s.position.z+=s.speed*e)}),this.coins.forEach(s=>{s.rotation.z+=e*4,r&&!n&&s.position.distanceTo(t)<18&&s.position.lerp(t,e*9)}),this.powerups.forEach(s=>{s.rotation.y+=e*3,s.position.y=1.2+Math.sin(Date.now()*.005)*.2}),this.inspectorGroup){const s=t.z+7.5;this.inspectorGroup.position.z=ui.lerp(this.inspectorGroup.position.z,s,.05),this.inspectorGroup.position.x=ui.lerp(this.inspectorGroup.position.x,t.x,.08);const o=Math.abs(Math.sin(Date.now()*.01))*.2;this.inspectorGroup.position.y=o}if(this.trackChunks.length>0){const s=this.trackChunks[0];if(s.position.z>t.z+40){this.scene.remove(s),this.trackChunks.shift();const o=this.trackChunks[this.trackChunks.length-1].position.z;this.spawnTrackChunk(o-this.chunkLength,!1)}}this.cleanupBehind(t.z+30)}cleanupBehind(e){this.obstacles=this.obstacles.filter(t=>t.position.z>e?(this.scene.remove(t),!1):!0),this.trains=this.trains.filter(t=>t.position.z>e+20?(this.scene.remove(t),!1):!0),this.coins=this.coins.filter(t=>t.position.z>e?(this.scene.remove(t),!1):!0),this.powerups=this.powerups.filter(t=>t.position.z>e?(this.scene.remove(t),!1):!0)}reset(){[...this.obstacles,...this.trains,...this.coins,...this.powerups].forEach(e=>{this.scene.remove(e)}),this.obstacles=[],this.trains=[],this.coins=[],this.powerups=[],this.trackChunks.forEach(e=>this.scene.remove(e)),this.trackChunks=[];for(let e=0;e<this.totalChunks;e++){const t=-(e*this.chunkLength)+30;this.spawnTrackChunk(t,e===0)}this.inspectorGroup&&this.inspectorGroup.position.set(0,0,7)}}let Be=null,Fo=null,zi=!0,ko=!0;function Zc(){if(!Be){const i=window.AudioContext||window.webkitAudioContext;i&&(Be=new i)}Be&&Be.state==="suspended"&&Be.resume()}function qg(i){return zi=i,zi}function _M(i){return ko=i,ko?nh():Cc(),ko}function vM(){if(!(!zi||!Be))try{const i=Be.currentTime,e=Be.createOscillator(),t=Be.createGain();e.type="sine",e.frequency.setValueAtTime(987.77,i),e.frequency.exponentialRampToValueAtTime(1318.51,i+.08),t.gain.setValueAtTime(.2,i),t.gain.exponentialRampToValueAtTime(.001,i+.12),e.connect(t),t.connect(Be.destination),e.start(i),e.stop(i+.12)}catch{}}function yM(){if(!(!zi||!Be))try{const i=Be.currentTime,e=Be.createOscillator(),t=Be.createGain();e.type="triangle",e.frequency.setValueAtTime(220,i),e.frequency.exponentialRampToValueAtTime(580,i+.18),t.gain.setValueAtTime(.25,i),t.gain.exponentialRampToValueAtTime(.01,i+.2),e.connect(t),t.connect(Be.destination),e.start(i),e.stop(i+.2)}catch{}}function EM(){if(!(!zi||!Be))try{const i=Be.currentTime,e=Be.createOscillator(),t=Be.createGain();e.type="sawtooth",e.frequency.setValueAtTime(320,i),e.frequency.exponentialRampToValueAtTime(120,i+.16),t.gain.setValueAtTime(.18,i),t.gain.exponentialRampToValueAtTime(.01,i+.18),e.connect(t),t.connect(Be.destination),e.start(i),e.stop(i+.18)}catch{}}function Dp(){if(!(!zi||!Be))try{const i=Be.currentTime,e=Be.createOscillator(),t=Be.createGain();e.type="sine",e.frequency.setValueAtTime(450,i),e.frequency.exponentialRampToValueAtTime(300,i+.08),t.gain.setValueAtTime(.12,i),t.gain.exponentialRampToValueAtTime(.01,i+.09),e.connect(t),t.connect(Be.destination),e.start(i),e.stop(i+.09)}catch{}}function TM(){if(!(!zi||!Be))try{[440,554.37,659.25,880].forEach((e,t)=>{const n=Be.currentTime+t*.07,r=Be.createOscillator(),s=Be.createGain();r.type="triangle",r.frequency.setValueAtTime(e,n),s.gain.setValueAtTime(.25,n),s.gain.exponentialRampToValueAtTime(.005,n+.2),r.connect(s),s.connect(Be.destination),r.start(n),r.stop(n+.2)})}catch{}}function Lp(){if(!(!zi||!Be))try{const i=Be.currentTime,e=Be.createOscillator(),t=Be.createGain();e.type="sawtooth",e.frequency.setValueAtTime(150,i),e.frequency.exponentialRampToValueAtTime(40,i+.4),t.gain.setValueAtTime(.4,i),t.gain.exponentialRampToValueAtTime(.01,i+.45),e.connect(t),t.connect(Be.destination),e.start(i),e.stop(i+.45),[240,210,180,140].forEach((n,r)=>{const s=i+.15+r*.12,o=Be.createOscillator(),a=Be.createGain();o.type="sine",o.frequency.setValueAtTime(n,s),a.gain.setValueAtTime(.15,s),a.gain.exponentialRampToValueAtTime(.001,s+.14),o.connect(a),a.connect(Be.destination),o.start(s),o.stop(s+.15)})}catch{}}function SM(){if(!(!zi||!Be))try{const i=Be.currentTime,e=Be.createOscillator(),t=Be.createGain();e.type="sine",e.frequency.setValueAtTime(200,i),e.frequency.exponentialRampToValueAtTime(800,i+.25),t.gain.setValueAtTime(.2,i),t.gain.exponentialRampToValueAtTime(.01,i+.3),e.connect(t),t.connect(Be.destination),e.start(i),e.stop(i+.3)}catch{}}let bs=0;const Np=[110,110,130.81,110,146.83,110,130.81,98],eu=[440,0,523.25,587.33,440,0,659.25,587.33];function nh(){if(Fo||!ko)return;bs=0,Fo=setInterval(()=>{if(!(!Be||!ko))try{const e=Be.currentTime,t=bs%Np.length,n=bs%eu.length,r=Np[t],s=Be.createOscillator(),o=Be.createGain();if(s.type="triangle",s.frequency.setValueAtTime(r,e),o.gain.setValueAtTime(.08,e),o.gain.exponentialRampToValueAtTime(.005,e+.1),s.connect(o),o.connect(Be.destination),s.start(e),s.stop(e+.11),bs%2===1){const a=Be.createOscillator(),l=Be.createGain();a.type="square",a.frequency.setValueAtTime(6e3,e),l.gain.setValueAtTime(.015,e),l.gain.exponentialRampToValueAtTime(.001,e+.03),a.connect(l),l.connect(Be.destination),a.start(e),a.stop(e+.035)}if(eu[n]>0&&bs%4===0){const a=Be.createOscillator(),l=Be.createGain();a.type="sine",a.frequency.setValueAtTime(eu[n],e),l.gain.setValueAtTime(.04,e),l.gain.exponentialRampToValueAtTime(.001,e+.18),a.connect(l),l.connect(Be.destination),a.start(e),a.stop(e+.19)}bs++}catch{}},120)}function Cc(){Fo&&(clearInterval(Fo),Fo=null)}const Ft={MENU:"MENU",PLAYING:"PLAYING",PAUSED:"PAUSED",GAMEOVER:"GAMEOVER"};class xM{constructor(e,t,n){this.player=e,this.world=t,this.ui=n,this.state=Ft.MENU,this.currentLane=1,this.targetX=Ii[1],this.baseSpeed=22,this.speed=this.baseSpeed,this.maxSpeed=48,this.yVel=0,this.gravity=-44,this.jumpForce=15.5,this.sneakerJumpForce=24.5,this.isJumping=!1,this.isRolling=!1,this.rollTimer=0,this.rollDuration=.7,this.groundY=0,this.currentSurfaceY=0,this.score=0,this.coinsCollected=0,this.distance=0,this.baseMultiplier=1,this.activePowerups={jetpack:0,magnet:0,sneakers:0,multiplier:0},this.hoverboardActive=!1,this.lastSpacePressTime=0,this.shakeIntensity=0}startRun(){this.state=Ft.PLAYING,this.score=0,this.coinsCollected=0,this.distance=0,this.speed=this.baseSpeed,this.currentLane=1,this.targetX=Ii[1],this.player.mesh.position.set(0,0,0),this.player.reset(),this.isJumping=!1,this.isRolling=!1,this.yVel=0,this.groundY=0,this.currentSurfaceY=0,this.activePowerups={jetpack:0,magnet:0,sneakers:0,multiplier:0},this.hoverboardActive=!1,this.world.reset(),nh(),this.ui.onGameStart()}moveLeft(){this.state===Ft.PLAYING&&this.currentLane>0&&(this.currentLane--,this.targetX=Ii[this.currentLane],this.player.tiltAngle=.35,Dp())}moveRight(){this.state===Ft.PLAYING&&this.currentLane<Ii.length-1&&(this.currentLane++,this.targetX=Ii[this.currentLane],this.player.tiltAngle=-.35,Dp())}jump(){if(this.state!==Ft.PLAYING||this.activePowerups.jetpack>0)return;if(Math.abs(this.player.mesh.position.y-this.currentSurfaceY)<.15||!this.isJumping){const t=this.activePowerups.sneakers>0?this.sneakerJumpForce:this.jumpForce;this.yVel=t,this.isJumping=!0,this.isRolling=!1,yM()}}roll(){this.state===Ft.PLAYING&&(this.activePowerups.jetpack>0||(this.isRolling=!0,this.rollTimer=this.rollDuration,this.isJumping&&(this.yVel=-28),EM()))}toggleHoverboard(){this.state===Ft.PLAYING&&(this.hoverboardActive||(this.hoverboardActive=!0,this.player.setHoverboard(!0),SM(),this.ui.onHoverboardToggle(!0)))}handleSpacePress(){const e=Date.now();e-this.lastSpacePressTime<350?this.toggleHoverboard():this.jump(),this.lastSpacePressTime=e}update(e){if(this.state!==Ft.PLAYING)return;const t=Math.min(e,.1);this.player.mesh.position.z-=this.speed*t,this.distance=Math.floor(Math.abs(this.player.mesh.position.z)),this.speed=Math.min(this.maxSpeed,this.baseSpeed+this.distance/120*.8);const n=(this.activePowerups.multiplier>0?2:1)*this.baseMultiplier;this.score+=Math.floor(this.speed*t*n*1.5),this.player.mesh.position.x=ui.lerp(this.player.mesh.position.x,this.targetX,t*14),this.player.tiltAngle=ui.lerp(this.player.tiltAngle,0,t*8),this.updatePowerupTimers(t),this.updateVerticalPhysics(t),this.checkCollisions(),this.world.update(t,this.player.mesh.position,this.activePowerups.jetpack>0,this.activePowerups.magnet>0),this.player.updateAnimation(t,this.speed,{isJumping:this.isJumping,isRolling:this.isRolling}),this.ui.onHUDUpdate({score:this.score,coins:this.coinsCollected,distance:this.distance,multiplier:n,activePowerups:this.activePowerups})}updateVerticalPhysics(e){const t=this.player.mesh.position.z,n=this.player.mesh.position.x,r=this.player.mesh.position.y;let s=0;for(const o of this.world.trains){const a=o.bounds,l=o.position.z-a.length/2,u=o.position.z+a.length/2,h=a.hasRamp?4.5:0,d=u+h;if(t>=l&&t<=d&&Math.abs(n-a.laneX)<1.2){if(a.hasRamp&&t>u-.5){s=Math.max(0,Math.min(1,(d-t)/h))*a.height;break}else if(r>=a.height-.3){s=a.height;break}}}if(this.currentSurfaceY=s,this.activePowerups.jetpack>0){this.player.mesh.position.y=ui.lerp(this.player.mesh.position.y,8.5,e*6),this.isJumping=!1,this.isRolling=!1;return}this.yVel+=this.gravity*e,this.player.mesh.position.y+=this.yVel*e,this.player.mesh.position.y<=this.currentSurfaceY?(this.player.mesh.position.y=this.currentSurfaceY,this.yVel=0,this.isJumping=!1):this.isJumping=!0,this.isRolling&&(this.rollTimer-=e,this.rollTimer<=0&&(this.isRolling=!1))}updatePowerupTimers(e){for(const t in this.activePowerups)this.activePowerups[t]>0&&(this.activePowerups[t]-=e,this.activePowerups[t]<=0&&(this.activePowerups[t]=0,t==="jetpack"&&this.player.setJetpack(!1)))}checkCollisions(){const e=this.player.mesh.position,t=this.activePowerups.jetpack>0;for(let n=this.world.coins.length-1;n>=0;n--){const r=this.world.coins[n];e.distanceTo(r.position)<1.35&&(this.coinsCollected++,this.score+=60,vM(),this.world.scene.remove(r),this.world.coins.splice(n,1))}for(let n=this.world.powerups.length-1;n>=0;n--){const r=this.world.powerups[n];if(e.distanceTo(r.position)<1.6){const o=r.powerupType;o==="jetpack"?(this.activePowerups.jetpack=10,this.player.setJetpack(!0)):o==="magnet"?this.activePowerups.magnet=12:o==="sneakers"?this.activePowerups.sneakers=12:o==="multiplier"&&(this.activePowerups.multiplier=15),TM(),this.world.scene.remove(r),this.world.powerups.splice(n,1)}}if(!t){for(const n of this.world.obstacles){const r=n.bounds,s=Math.abs(e.z-n.position.z),o=Math.abs(e.x-r.laneX);if(s<.9&&o<1){if(n.barrierType==="low"){if(e.y<1.1){this.handleCrash();return}}else if(n.barrierType==="high"&&!this.isRolling){this.handleCrash();return}}}for(const n of this.world.trains){const r=n.bounds,s=n.position.z+r.length/2,o=n.position.z-r.length/2;r.hasRamp;const a=Math.abs(e.x-r.laneX);if(e.z<=s+(r.hasRamp?.2:0)&&e.z>=o&&e.y<r.height-.35&&a<1.35){this.handleCrash();return}}}}handleCrash(){if(this.hoverboardActive){this.hoverboardActive=!1,this.player.setHoverboard(!1),this.ui.onHoverboardToggle(!1),Lp(),this.yVel=8;return}this.state=Ft.GAMEOVER,this.player.isDead=!0,Cc(),Lp(),this.ui.onGameOver({score:this.score,coins:this.coinsCollected,distance:this.distance})}pause(){this.state===Ft.PLAYING&&(this.state=Ft.PAUSED,Cc(),this.ui.onPause())}resume(){this.state===Ft.PAUSED&&(this.state=Ft.PLAYING,nh(),this.ui.onResume())}}const wM=()=>{};var Up={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=function(i){const e=[];let t=0;for(let n=0;n<i.length;n++){let r=i.charCodeAt(n);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&n+1<i.length&&(i.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(i.charCodeAt(++n)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},MM=function(i){const e=[];let t=0,n=0;for(;t<i.length;){const r=i[t++];if(r<128)e[n++]=String.fromCharCode(r);else if(r>191&&r<224){const s=i[t++];e[n++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=i[t++],o=i[t++],a=i[t++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const s=i[t++],o=i[t++];e[n++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},jg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<i.length;r+=3){const s=i[r],o=r+1<i.length,a=o?i[r+1]:0,l=r+2<i.length,u=l?i[r+2]:0,h=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,_=u&63;l||(_=64,o||(f=64)),n.push(t[h],t[d],t[f],t[_])}return n.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Xg(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):MM(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<i.length;){const s=t[i.charAt(r++)],a=r<i.length?t[i.charAt(r)]:0;++r;const u=r<i.length?t[i.charAt(r)]:64;++r;const d=r<i.length?t[i.charAt(r)]:64;if(++r,s==null||a==null||u==null||d==null)throw new AM;const f=s<<2|a>>4;if(n.push(f),u!==64){const _=a<<4&240|u>>2;if(n.push(_),d!==64){const S=u<<6&192|d;n.push(S)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class AM extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bM=function(i){const e=Xg(i);return jg.encodeByteArray(e,!0)},Pc=function(i){return bM(i).replace(/\./g,"")},$g=function(i){try{return jg.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RM(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IM=()=>RM().__FIREBASE_DEFAULTS__,CM=()=>{if(typeof process>"u"||typeof Up>"u")return;const i=Up.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},PM=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&$g(i[1]);return e&&JSON.parse(e)},el=()=>{try{return wM()||IM()||CM()||PM()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Yg=i=>{var e,t;return(t=(e=el())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},DM=i=>{const e=Yg(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Kg=()=>{var i;return(i=el())===null||i===void 0?void 0:i.config},Jg=i=>{var e;return(e=el())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LM{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Qg(i){return(await fetch(i,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NM(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",r=i.iat||0,s=i.sub||i.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Pc(JSON.stringify(t)),Pc(JSON.stringify(o)),""].join(".")}const Vo={};function UM(){const i={prod:[],emulator:[]};for(const e of Object.keys(Vo))Vo[e]?i.emulator.push(e):i.prod.push(e);return i}function OM(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let Op=!1;function Zg(i,e){if(typeof window>"u"||typeof document>"u"||!oo(window.location.host)||Vo[i]===e||Vo[i]||Op)return;Vo[i]=e;function t(f){return`__firebase__banner__${f}`}const n="__firebase__banner",s=UM().prod.length>0;function o(){const f=document.getElementById(n);f&&f.remove()}function a(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function l(f,_){f.setAttribute("width","24"),f.setAttribute("id",_),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function u(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{Op=!0,o()},f}function h(f,_){f.setAttribute("id",_),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function d(){const f=OM(n),_=t("text"),S=document.getElementById(_)||document.createElement("span"),M=t("learnmore"),m=document.getElementById(M)||document.createElement("a"),g=t("preprendIcon"),P=document.getElementById(g)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const D=f.element;a(D),h(m,M);const R=u();l(P,g),D.append(P,S,m,R),document.body.appendChild(D)}s?(S.innerText="Preview backend disconnected.",P.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(P.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function FM(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yn())}function kM(){var i;const e=(i=el())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function VM(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function BM(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function zM(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function GM(){const i=yn();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function HM(){return!kM()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function WM(){try{return typeof indexedDB=="object"}catch{return!1}}function qM(){return new Promise((i,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(n),i(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XM="FirebaseError";class Xi extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=XM,Object.setPrototypeOf(this,Xi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ha.prototype.create)}}class ha{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?jM(s,n):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Xi(r,a,n)}}function jM(i,e){return i.replace($M,(t,n)=>{const r=e[n];return r!=null?String(r):`<${n}?>`})}const $M=/\{\$([^}]+)}/g;function YM(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Kr(i,e){if(i===e)return!0;const t=Object.keys(i),n=Object.keys(e);for(const r of t){if(!n.includes(r))return!1;const s=i[r],o=e[r];if(Fp(s)&&Fp(o)){if(!Kr(s,o))return!1}else if(s!==o)return!1}for(const r of n)if(!t.includes(r))return!1;return!0}function Fp(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(i){const e=[];for(const[t,n]of Object.entries(i))Array.isArray(n)?n.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function KM(i,e){const t=new JM(i,e);return t.subscribe.bind(t)}class JM{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");QM(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:n},r.next===void 0&&(r.next=tu),r.error===void 0&&(r.error=tu),r.complete===void 0&&(r.complete=tu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function QM(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function tu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(i){return i&&i._delegate?i._delegate:i}class Jr{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZM{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new LM;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tA(e))try{this.getOrInitializeService({instanceIdentifier:Fr})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});n.resolve(s)}catch{}}}}clearInstance(e=Fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fr){return this.instances.has(e)}getOptions(e=Fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);n===a&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),s=(n=this.onInitCallbacks.get(r))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:eA(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Fr){return this.component?this.component.multipleInstances?e:Fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eA(i){return i===Fr?void 0:i}function tA(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ZM(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(dt||(dt={}));const iA={debug:dt.DEBUG,verbose:dt.VERBOSE,info:dt.INFO,warn:dt.WARN,error:dt.ERROR,silent:dt.SILENT},rA=dt.INFO,sA={[dt.DEBUG]:"log",[dt.VERBOSE]:"log",[dt.INFO]:"info",[dt.WARN]:"warn",[dt.ERROR]:"error"},oA=(i,e,...t)=>{if(e<i.logLevel)return;const n=new Date().toISOString(),r=sA[e];if(r)console[r](`[${n}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ed{constructor(e){this.name=e,this._logLevel=rA,this._logHandler=oA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in dt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,dt.DEBUG,...e),this._logHandler(this,dt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,dt.VERBOSE,...e),this._logHandler(this,dt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,dt.INFO,...e),this._logHandler(this,dt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,dt.WARN,...e),this._logHandler(this,dt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,dt.ERROR,...e),this._logHandler(this,dt.ERROR,...e)}}const aA=(i,e)=>e.some(t=>i instanceof t);let kp,Vp;function cA(){return kp||(kp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lA(){return Vp||(Vp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const e_=new WeakMap,ih=new WeakMap,t_=new WeakMap,nu=new WeakMap,td=new WeakMap;function uA(i){const e=new Promise((t,n)=>{const r=()=>{i.removeEventListener("success",s),i.removeEventListener("error",o)},s=()=>{t(dr(i.result)),r()},o=()=>{n(i.error),r()};i.addEventListener("success",s),i.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&e_.set(t,i)}).catch(()=>{}),td.set(e,i),e}function hA(i){if(ih.has(i))return;const e=new Promise((t,n)=>{const r=()=>{i.removeEventListener("complete",s),i.removeEventListener("error",o),i.removeEventListener("abort",o)},s=()=>{t(),r()},o=()=>{n(i.error||new DOMException("AbortError","AbortError")),r()};i.addEventListener("complete",s),i.addEventListener("error",o),i.addEventListener("abort",o)});ih.set(i,e)}let rh={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return ih.get(i);if(e==="objectStoreNames")return i.objectStoreNames||t_.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return dr(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function dA(i){rh=i(rh)}function fA(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=i.call(iu(this),e,...t);return t_.set(n,e.sort?e.sort():[e]),dr(n)}:lA().includes(i)?function(...e){return i.apply(iu(this),e),dr(e_.get(this))}:function(...e){return dr(i.apply(iu(this),e))}}function pA(i){return typeof i=="function"?fA(i):(i instanceof IDBTransaction&&hA(i),aA(i,cA())?new Proxy(i,rh):i)}function dr(i){if(i instanceof IDBRequest)return uA(i);if(nu.has(i))return nu.get(i);const e=pA(i);return e!==i&&(nu.set(i,e),td.set(e,i)),e}const iu=i=>td.get(i);function mA(i,e,{blocked:t,upgrade:n,blocking:r,terminated:s}={}){const o=indexedDB.open(i,e),a=dr(o);return n&&o.addEventListener("upgradeneeded",l=>{n(dr(o.result),l.oldVersion,l.newVersion,dr(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const gA=["get","getKey","getAll","getAllKeys","count"],_A=["put","add","delete","clear"],ru=new Map;function Bp(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(ru.get(e))return ru.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,r=_A.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(r||gA.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let u=l.store;return n&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),r&&l.done]))[0]};return ru.set(e,s),s}dA(i=>({...i,get:(e,t,n)=>Bp(e,t)||i.get(e,t,n),has:(e,t)=>!!Bp(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(yA(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function yA(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sh="@firebase/app",zp="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=new ed("@firebase/app"),EA="@firebase/app-compat",TA="@firebase/analytics-compat",SA="@firebase/analytics",xA="@firebase/app-check-compat",wA="@firebase/app-check",MA="@firebase/auth",AA="@firebase/auth-compat",bA="@firebase/database",RA="@firebase/data-connect",IA="@firebase/database-compat",CA="@firebase/functions",PA="@firebase/functions-compat",DA="@firebase/installations",LA="@firebase/installations-compat",NA="@firebase/messaging",UA="@firebase/messaging-compat",OA="@firebase/performance",FA="@firebase/performance-compat",kA="@firebase/remote-config",VA="@firebase/remote-config-compat",BA="@firebase/storage",zA="@firebase/storage-compat",GA="@firebase/firestore",HA="@firebase/ai",WA="@firebase/firestore-compat",qA="firebase",XA="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh="[DEFAULT]",jA={[sh]:"fire-core",[EA]:"fire-core-compat",[SA]:"fire-analytics",[TA]:"fire-analytics-compat",[wA]:"fire-app-check",[xA]:"fire-app-check-compat",[MA]:"fire-auth",[AA]:"fire-auth-compat",[bA]:"fire-rtdb",[RA]:"fire-data-connect",[IA]:"fire-rtdb-compat",[CA]:"fire-fn",[PA]:"fire-fn-compat",[DA]:"fire-iid",[LA]:"fire-iid-compat",[NA]:"fire-fcm",[UA]:"fire-fcm-compat",[OA]:"fire-perf",[FA]:"fire-perf-compat",[kA]:"fire-rc",[VA]:"fire-rc-compat",[BA]:"fire-gcs",[zA]:"fire-gcs-compat",[GA]:"fire-fst",[WA]:"fire-fst-compat",[HA]:"fire-vertex","fire-js":"fire-js",[qA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=new Map,$A=new Map,ah=new Map;function Gp(i,e){try{i.container.addComponent(e)}catch(t){Gi.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function Ys(i){const e=i.name;if(ah.has(e))return Gi.debug(`There were multiple attempts to register component ${e}.`),!1;ah.set(e,i);for(const t of Yo.values())Gp(t,i);for(const t of $A.values())Gp(t,i);return!0}function nd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Kn(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fr=new ha("app","Firebase",YA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=XA;function n_(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const n=Object.assign({name:oh,automaticDataCollectionEnabled:!0},e),r=n.name;if(typeof r!="string"||!r)throw fr.create("bad-app-name",{appName:String(r)});if(t||(t=Kg()),!t)throw fr.create("no-options");const s=Yo.get(r);if(s){if(Kr(t,s.options)&&Kr(n,s.config))return s;throw fr.create("duplicate-app",{appName:r})}const o=new nA(r);for(const l of ah.values())o.addComponent(l);const a=new KA(t,n,o);return Yo.set(r,a),a}function id(i=oh){const e=Yo.get(i);if(!e&&i===oh&&Kg())return n_();if(!e)throw fr.create("no-app",{appName:i});return e}function JA(){return Array.from(Yo.values())}function pr(i,e,t){var n;let r=(n=jA[i])!==null&&n!==void 0?n:i;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gi.warn(a.join(" "));return}Ys(new Jr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA="firebase-heartbeat-database",ZA=1,Ko="firebase-heartbeat-store";let su=null;function i_(){return su||(su=mA(QA,ZA,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Ko)}catch(t){console.warn(t)}}}}).catch(i=>{throw fr.create("idb-open",{originalErrorMessage:i.message})})),su}async function eb(i){try{const t=(await i_()).transaction(Ko),n=await t.objectStore(Ko).get(r_(i));return await t.done,n}catch(e){if(e instanceof Xi)Gi.warn(e.message);else{const t=fr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gi.warn(t.message)}}}async function Hp(i,e){try{const n=(await i_()).transaction(Ko,"readwrite");await n.objectStore(Ko).put(e,r_(i)),await n.done}catch(t){if(t instanceof Xi)Gi.warn(t.message);else{const n=fr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Gi.warn(n.message)}}}function r_(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=1024,nb=30;class ib{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new sb(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Wp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats.length>nb){const o=ob(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Gi.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Wp(),{heartbeatsToSend:n,unsentEntries:r}=rb(this._heartbeatsCache.heartbeats),s=Pc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Gi.warn(t),""}}}function Wp(){return new Date().toISOString().substring(0,10)}function rb(i,e=tb){const t=[];let n=i.slice();for(const r of i){const s=t.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),qp(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),qp(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class sb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return WM()?qM().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await eb(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Hp(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Hp(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function qp(i){return Pc(JSON.stringify({version:2,heartbeats:i})).length}function ob(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let n=1;n<i.length;n++)i[n].date<t&&(t=i[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ab(i){Ys(new Jr("platform-logger",e=>new vA(e),"PRIVATE")),Ys(new Jr("heartbeat",e=>new ib(e),"PRIVATE")),pr(sh,zp,i),pr(sh,zp,"esm2017"),pr("fire-js","")}ab("");var cb="firebase",lb="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pr(cb,lb,"app");function rd(i,e){var t={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&e.indexOf(n)<0&&(t[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(i);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(i,n[r])&&(t[n[r]]=i[n[r]]);return t}function s_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ub=s_,o_=new ha("auth","Firebase",s_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc=new ed("@firebase/auth");function hb(i,...e){Dc.logLevel<=dt.WARN&&Dc.warn(`Auth (${ao}): ${i}`,...e)}function pc(i,...e){Dc.logLevel<=dt.ERROR&&Dc.error(`Auth (${ao}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(i,...e){throw od(i,...e)}function ti(i,...e){return od(i,...e)}function sd(i,e,t){const n=Object.assign(Object.assign({},ub()),{[e]:t});return new ha("auth","Firebase",n).create(e,{appName:i.name})}function Xr(i){return sd(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function db(i,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&_i(i,"argument-error"),sd(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function od(i,...e){if(typeof i!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=i.name),i._errorFactory.create(t,...n)}return o_.create(i,...e)}function Qe(i,e,...t){if(!i)throw od(e,...t)}function Li(i){const e="INTERNAL ASSERTION FAILED: "+i;throw pc(e),new Error(e)}function Hi(i,e){i||Li(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function fb(){return Xp()==="http:"||Xp()==="https:"}function Xp(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fb()||BM()||"connection"in navigator)?navigator.onLine:!0}function mb(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,t){this.shortDelay=e,this.longDelay=t,Hi(t>e,"Short delay should be less than long delay!"),this.isMobile=FM()||zM()}get(){return pb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(i,e){Hi(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Li("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Li("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Li("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],vb=new fa(3e4,6e4);function cd(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function co(i,e,t,n,r={}){return c_(i,r,async()=>{let s={},o={};n&&(e==="GET"?o=n:s={body:JSON.stringify(n)});const a=da(Object.assign({key:i.config.apiKey},o)).slice(1),l=await i._getAdditionalHeaders();l["Content-Type"]="application/json",i.languageCode&&(l["X-Firebase-Locale"]=i.languageCode);const u=Object.assign({method:e,headers:l},s);return VM()||(u.referrerPolicy="no-referrer"),i.emulatorConfig&&oo(i.emulatorConfig.host)&&(u.credentials="include"),a_.fetch()(await l_(i,i.config.apiHost,t,a),u)})}async function c_(i,e,t){i._canInitEmulator=!1;const n=Object.assign(Object.assign({},gb),e);try{const r=new Eb(i),s=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ec(i,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ec(i,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ec(i,"email-already-in-use",o);if(l==="USER_DISABLED")throw ec(i,"user-disabled",o);const h=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw sd(i,h,u);_i(i,h)}}catch(r){if(r instanceof Xi)throw r;_i(i,"network-request-failed",{message:String(r)})}}async function yb(i,e,t,n,r={}){const s=await co(i,e,t,n,r);return"mfaPendingCredential"in s&&_i(i,"multi-factor-auth-required",{_serverResponse:s}),s}async function l_(i,e,t,n){const r=`${e}${t}?${n}`,s=i,o=s.config.emulator?ad(i.config,r):`${i.config.apiScheme}://${r}`;return _b.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class Eb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(ti(this.auth,"network-request-failed")),vb.get())})}}function ec(i,e,t){const n={appName:i.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const r=ti(i,e,n);return r.customData._tokenResponse=t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tb(i,e){return co(i,"POST","/v1/accounts:delete",e)}async function Lc(i,e){return co(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Sb(i,e=!1){const t=Pn(i),n=await t.getIdToken(e),r=ld(n);Qe(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:n,authTime:Bo(ou(r.auth_time)),issuedAtTime:Bo(ou(r.iat)),expirationTime:Bo(ou(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ou(i){return Number(i)*1e3}function ld(i){const[e,t,n]=i.split(".");if(e===void 0||t===void 0||n===void 0)return pc("JWT malformed, contained fewer than 3 sections"),null;try{const r=$g(t);return r?JSON.parse(r):(pc("Failed to decode base64 JWT payload"),null)}catch(r){return pc("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function jp(i){const e=ld(i);return Qe(e,"internal-error"),Qe(typeof e.exp<"u","internal-error"),Qe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jo(i,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof Xi&&xb(n)&&i.auth.currentUser===i&&await i.auth.signOut(),n}}function xb({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bo(this.lastLoginAt),this.creationTime=Bo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nc(i){var e;const t=i.auth,n=await i.getIdToken(),r=await Jo(i,Lc(t,{idToken:n}));Qe(r==null?void 0:r.users.length,t,"internal-error");const s=r.users[0];i._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?u_(s.providerUserInfo):[],a=Ab(i.providerData,o),l=i.isAnonymous,u=!(i.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new lh(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(i,d)}async function Mb(i){const e=Pn(i);await Nc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ab(i,e){return[...i.filter(n=>!e.some(r=>r.providerId===n.providerId)),...e]}function u_(i){return i.map(e=>{var{providerId:t}=e,n=rd(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bb(i,e){const t=await c_(i,{},async()=>{const n=da({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=i.config,o=await l_(i,r,"/v1/token",`key=${s}`),a=await i._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:n};return i.emulatorConfig&&oo(i.emulatorConfig.host)&&(l.credentials="include"),a_.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Rb(i,e){return co(i,"POST","/v2/accounts:revokeToken",cd(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Qe(e.idToken,"internal-error"),Qe(typeof e.idToken<"u","internal-error"),Qe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Qe(e.length!==0,"internal-error");const t=jp(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Qe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:s}=await bb(e,t);this.updateTokensAndExpiration(n,r,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:s}=t,o=new Fs;return n&&(Qe(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),r&&(Qe(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(Qe(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fs,this.toJSON())}_performRefresh(){return Li("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(i,e){Qe(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Qn{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,s=rd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new lh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Jo(this,this.stsTokenManager.getToken(this.auth,e));return Qe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Sb(this,e)}reload(){return Mb(this)}_assign(e){this!==e&&(Qe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Qe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Nc(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Kn(this.auth.app))return Promise.reject(Xr(this.auth));const e=await this.getIdToken();return await Jo(this,Tb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,s,o,a,l,u,h;const d=(n=t.displayName)!==null&&n!==void 0?n:void 0,f=(r=t.email)!==null&&r!==void 0?r:void 0,_=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,S=(o=t.photoURL)!==null&&o!==void 0?o:void 0,M=(a=t.tenantId)!==null&&a!==void 0?a:void 0,m=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=t.createdAt)!==null&&u!==void 0?u:void 0,P=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:D,emailVerified:R,isAnonymous:V,providerData:F,stsTokenManager:x}=t;Qe(D&&x,e,"internal-error");const T=Fs.fromJSON(this.name,x);Qe(typeof D=="string",e,"internal-error"),rr(d,e.name),rr(f,e.name),Qe(typeof R=="boolean",e,"internal-error"),Qe(typeof V=="boolean",e,"internal-error"),rr(_,e.name),rr(S,e.name),rr(M,e.name),rr(m,e.name),rr(g,e.name),rr(P,e.name);const v=new Qn({uid:D,auth:e,email:f,emailVerified:R,displayName:d,isAnonymous:V,photoURL:S,phoneNumber:_,tenantId:M,stsTokenManager:T,createdAt:g,lastLoginAt:P});return F&&Array.isArray(F)&&(v.providerData=F.map(y=>Object.assign({},y))),m&&(v._redirectEventId=m),v}static async _fromIdTokenResponse(e,t,n=!1){const r=new Fs;r.updateFromServerResponse(t);const s=new Qn({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Nc(s),s}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];Qe(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?u_(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),a=new Fs;a.updateFromIdToken(n);const l=new Qn({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new lh(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=new Map;function Ni(i){Hi(i instanceof Function,"Expected a class definition");let e=$p.get(i);return e?(Hi(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,$p.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}h_.type="NONE";const Yp=h_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(i,e,t){return`firebase:${i}:${e}:${t}`}class ks{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:s}=this.auth;this.fullUserKey=mc(this.userKey,r.apiKey,s),this.fullPersistenceKey=mc("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Lc(this.auth,{idToken:e}).catch(()=>{});return t?Qn._fromGetAccountInfoResponse(this.auth,t,e):null}return Qn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ks(Ni(Yp),e,n);const r=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=r[0]||Ni(Yp);const o=mc(n,e.config.apiKey,e.name);let a=null;for(const u of t)try{const h=await u._get(o);if(h){let d;if(typeof h=="string"){const f=await Lc(e,{idToken:h}).catch(()=>{});if(!f)break;d=await Qn._fromGetAccountInfoResponse(e,f,h)}else d=Qn._fromJSON(e,h);u!==s&&(a=d),s=u;break}}catch{}const l=r.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ks(s,e,n):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ks(s,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(m_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(d_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(__(e))return"Blackberry";if(v_(e))return"Webos";if(f_(e))return"Safari";if((e.includes("chrome/")||p_(e))&&!e.includes("edge/"))return"Chrome";if(g_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=i.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function d_(i=yn()){return/firefox\//i.test(i)}function f_(i=yn()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function p_(i=yn()){return/crios\//i.test(i)}function m_(i=yn()){return/iemobile/i.test(i)}function g_(i=yn()){return/android/i.test(i)}function __(i=yn()){return/blackberry/i.test(i)}function v_(i=yn()){return/webos/i.test(i)}function ud(i=yn()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function Ib(i=yn()){var e;return ud(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Cb(){return GM()&&document.documentMode===10}function y_(i=yn()){return ud(i)||g_(i)||v_(i)||__(i)||/windows phone/i.test(i)||m_(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(i,e=[]){let t;switch(i){case"Browser":t=Kp(yn());break;case"Worker":t=`${Kp(yn())}-${i}`;break;default:t=i}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ao}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Db(i,e={}){return co(i,"GET","/v2/passwordPolicy",cd(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb=6;class Nb{constructor(e){var t,n,r,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Lb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(n=l.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jp(this),this.idTokenSubscription=new Jp(this),this.beforeStateQueue=new Pb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=o_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ni(t)),this._initializationPromise=this.queue(async()=>{var n,r,s;if(!this._deleted&&(this.persistenceManager=await ks.create(this,e),(n=this._resolvePersistenceManagerAvailable)===null||n===void 0||n.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Lc(this,{idToken:e}),n=await Qn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Kn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Qe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Nc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Kn(this.app))return Promise.reject(Xr(this));const t=e?Pn(e):null;return t&&Qe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Qe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Kn(this.app)?Promise.reject(Xr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Kn(this.app)?Promise.reject(Xr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ni(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Db(this),t=new Nb(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ha("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await Rb(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ni(e)||this._popupRedirectResolver;Qe(t,this,"argument-error"),this.redirectPersistenceManager=await ks.create(this,[Ni(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Qe(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,n,r);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Qe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=E_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(Kn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&hb(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function tl(i){return Pn(i)}class Jp{constructor(e){this.auth=e,this.observer=null,this.addObserver=KM(t=>this.observer=t)}get next(){return Qe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ob(i){hd=i}function Fb(i){return hd.loadJS(i)}function kb(){return hd.gapiScript}function Vb(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb(i,e){const t=nd(i,"auth");if(t.isInitialized()){const r=t.getImmediate(),s=t.getOptions();if(Kr(s,e??{}))return r;_i(r,"already-initialized")}return t.initialize({options:e})}function zb(i,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(Ni);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function Gb(i,e,t){const n=tl(i);Qe(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const r=!1,s=T_(e),{host:o,port:a}=Hb(e),l=a===null?"":`:${a}`,u={url:`${s}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!n._canInitEmulator){Qe(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),Qe(Kr(u,n.config.emulator)&&Kr(h,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=u,n.emulatorConfig=h,n.settings.appVerificationDisabledForTesting=!0,oo(o)?(Qg(`${s}//${o}${l}`),Zg("Auth",!0)):Wb()}function T_(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function Hb(i){const e=T_(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);if(r){const s=r[1];return{host:s,port:Qp(n.substr(s.length+1))}}else{const[s,o]=n.split(":");return{host:s,port:Qp(o)}}}function Qp(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function Wb(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Li("not implemented")}_getIdTokenResponse(e){return Li("not implemented")}_linkToIdToken(e,t){return Li("not implemented")}_getReauthenticationResolver(e){return Li("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vs(i,e){return yb(i,"POST","/v1/accounts:signInWithIdp",cd(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb="http://localhost";class Qr extends S_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):_i("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,s=rd(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Qr(n,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Vs(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Vs(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Vs(e,t)}buildRequest(){const e={requestUri:qb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=da(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa extends dd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends pa{constructor(){super("facebook.com")}static credential(e){return Qr._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.FACEBOOK_SIGN_IN_METHOD="facebook.com";or.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends pa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Qr._fromParams({providerId:Ci.PROVIDER_ID,signInMethod:Ci.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ci.credentialFromTaggedObject(e)}static credentialFromError(e){return Ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ci.credential(t,n)}catch{return null}}}Ci.GOOGLE_SIGN_IN_METHOD="google.com";Ci.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends pa{constructor(){super("github.com")}static credential(e){return Qr._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.GITHUB_SIGN_IN_METHOD="github.com";ar.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends pa{constructor(){super("twitter.com")}static credential(e,t){return Qr._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return cr.credential(t,n)}catch{return null}}}cr.TWITTER_SIGN_IN_METHOD="twitter.com";cr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const s=await Qn._fromIdTokenResponse(e,n,r),o=Zp(n);return new Ks({user:s,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Zp(n);return new Ks({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Zp(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc extends Xi{constructor(e,t,n,r){var s;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Uc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Uc(e,t,n,r)}}function x_(i,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Uc._fromErrorAndOperation(i,s,e,n):s})}async function Xb(i,e,t=!1){const n=await Jo(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Ks._forOperation(i,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jb(i,e,t=!1){const{auth:n}=i;if(Kn(n.app))return Promise.reject(Xr(n));const r="reauthenticate";try{const s=await Jo(i,x_(n,r,e,i),t);Qe(s.idToken,n,"internal-error");const o=ld(s.idToken);Qe(o,n,"internal-error");const{sub:a}=o;return Qe(i.uid===a,n,"user-mismatch"),Ks._forOperation(i,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&_i(n,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $b(i,e,t=!1){if(Kn(i.app))return Promise.reject(Xr(i));const n="signIn",r=await x_(i,n,e),s=await Ks._fromIdTokenResponse(i,n,r);return t||await i._updateCurrentUser(s.user),s}function Yb(i,e,t,n){return Pn(i).onIdTokenChanged(e,t,n)}function Kb(i,e,t){return Pn(i).beforeAuthStateChanged(e,t)}function Jb(i,e,t,n){return Pn(i).onAuthStateChanged(e,t,n)}function Qb(i){return Pn(i).signOut()}const Oc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Oc,"1"),this.storage.removeItem(Oc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb=1e3,eR=10;class M_ extends w_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=y_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},s=this.storage.getItem(n);Cb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,eR):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Zb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}M_.type="LOCAL";const tR=M_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_ extends w_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}A_.type="SESSION";const b_=A_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nR(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const n=new nl(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:s}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(o).map(async u=>u(t.origin,s)),l=await nR(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(i="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=fd("",20);r.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(){return window}function rR(i){di().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(){return typeof di().WorkerGlobalScope<"u"&&typeof di().importScripts=="function"}async function sR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oR(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function aR(){return R_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_="firebaseLocalStorageDb",cR=1,Fc="firebaseLocalStorage",C_="fbase_key";class ma{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function il(i,e){return i.transaction([Fc],e?"readwrite":"readonly").objectStore(Fc)}function lR(){const i=indexedDB.deleteDatabase(I_);return new ma(i).toPromise()}function uh(){const i=indexedDB.open(I_,cR);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const n=i.result;try{n.createObjectStore(Fc,{keyPath:C_})}catch(r){t(r)}}),i.addEventListener("success",async()=>{const n=i.result;n.objectStoreNames.contains(Fc)?e(n):(n.close(),await lR(),e(await uh()))})})}async function em(i,e,t){const n=il(i,!0).put({[C_]:e,value:t});return new ma(n).toPromise()}async function uR(i,e){const t=il(i,!1).get(e),n=await new ma(t).toPromise();return n===void 0?null:n.value}function tm(i,e){const t=il(i,!0).delete(e);return new ma(t).toPromise()}const hR=800,dR=3;class P_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await uh(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>dR)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return R_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nl._getInstance(aR()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await sR(),!this.activeServiceWorker)return;this.sender=new iR(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await uh();return await em(e,Oc,"1"),await tm(e,Oc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>em(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>uR(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>tm(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=il(r,!1).getAll();return new ma(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}P_.type="LOCAL";const fR=P_;new fa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(i,e){return e?Ni(e):(Qe(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd extends S_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Vs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function pR(i){return $b(i.auth,new pd(i),i.bypassAuthState)}function mR(i){const{auth:e,user:t}=i;return Qe(t,e,"internal-error"),jb(t,new pd(i),i.bypassAuthState)}async function gR(i){const{auth:e,user:t}=i;return Qe(t,e,"internal-error"),Xb(t,new pd(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,t,n,r,s=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pR;case"linkViaPopup":case"linkViaRedirect":return gR;case"reauthViaPopup":case"reauthViaRedirect":return mR;default:_i(this.auth,"internal-error")}}resolve(e){Hi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=new fa(2e3,1e4);async function vR(i,e,t){if(Kn(i.app))return Promise.reject(ti(i,"operation-not-supported-in-this-environment"));const n=tl(i);db(i,e,dd);const r=D_(n,t);return new Gr(n,"signInViaPopup",e,r).executeNotNull()}class Gr extends L_{constructor(e,t,n,r,s){super(e,t,r,s),this.provider=n,this.authWindow=null,this.pollId=null,Gr.currentPopupAction&&Gr.currentPopupAction.cancel(),Gr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Qe(e,this.auth,"internal-error"),e}async onExecution(){Hi(this.filter.length===1,"Popup operations only handle one event");const e=fd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ti(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ti(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ti(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_R.get())};e()}}Gr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR="pendingRedirect",gc=new Map;class ER extends L_{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=gc.get(this.auth._key());if(!e){try{const n=await TR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}gc.set(this.auth._key(),e)}return this.bypassAuthState||gc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TR(i,e){const t=wR(e),n=xR(i);if(!await n._isAvailable())return!1;const r=await n._get(t)==="true";return await n._remove(t),r}function SR(i,e){gc.set(i._key(),e)}function xR(i){return Ni(i._redirectPersistence)}function wR(i){return mc(yR,i.config.apiKey,i.name)}async function MR(i,e,t=!1){if(Kn(i.app))return Promise.reject(Xr(i));const n=tl(i),r=D_(n,e),o=await new ER(n,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR=600*1e3;class bR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!RR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!N_(e)){const r=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(ti(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AR&&this.cachedEventUids.clear(),this.cachedEventUids.has(nm(e))}saveEventToCache(e){this.cachedEventUids.add(nm(e)),this.lastProcessedEventTime=Date.now()}}function nm(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function N_({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function RR(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return N_(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IR(i,e={}){return co(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,PR=/^https?/;async function DR(i){if(i.config.emulator)return;const{authorizedDomains:e}=await IR(i);for(const t of e)try{if(LR(t))return}catch{}_i(i,"unauthorized-domain")}function LR(i){const e=ch(),{protocol:t,hostname:n}=new URL(e);if(i.startsWith("chrome-extension://")){const o=new URL(i);return o.hostname===""&&n===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!PR.test(t))return!1;if(CR.test(i))return n===i;const r=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR=new fa(3e4,6e4);function im(){const i=di().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function UR(i){return new Promise((e,t)=>{var n,r,s;function o(){im(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{im(),t(ti(i,"network-request-failed"))},timeout:NR.get()})}if(!((r=(n=di().gapi)===null||n===void 0?void 0:n.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=di().gapi)===null||s===void 0)&&s.load)o();else{const a=Vb("iframefcb");return di()[a]=()=>{gapi.load?o():t(ti(i,"network-request-failed"))},Fb(`${kb()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw _c=null,e})}let _c=null;function OR(i){return _c=_c||UR(i),_c}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=new fa(5e3,15e3),kR="__/auth/iframe",VR="emulator/auth/iframe",BR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GR(i){const e=i.config;Qe(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?ad(e,VR):`https://${i.config.authDomain}/${kR}`,n={apiKey:e.apiKey,appName:i.name,v:ao},r=zR.get(i.config.apiHost);r&&(n.eid=r);const s=i._getFrameworks();return s.length&&(n.fw=s.join(",")),`${t}?${da(n).slice(1)}`}async function HR(i){const e=await OR(i),t=di().gapi;return Qe(t,i,"internal-error"),e.open({where:document.body,url:GR(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BR,dontclear:!0},n=>new Promise(async(r,s)=>{await n.restyle({setHideOnLeave:!1});const o=ti(i,"network-request-failed"),a=di().setTimeout(()=>{s(o)},FR.get());function l(){di().clearTimeout(a),r(n)}n.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qR=500,XR=600,jR="_blank",$R="http://localhost";class rm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YR(i,e,t,n=qR,r=XR){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let a="";const l=Object.assign(Object.assign({},WR),{width:n.toString(),height:r.toString(),top:s,left:o}),u=yn().toLowerCase();t&&(a=p_(u)?jR:t),d_(u)&&(e=e||$R,l.scrollbars="yes");const h=Object.entries(l).reduce((f,[_,S])=>`${f}${_}=${S},`,"");if(Ib(u)&&a!=="_self")return KR(e||"",a),new rm(null);const d=window.open(e||"",a,h);Qe(d,i,"popup-blocked");try{d.focus()}catch{}return new rm(d)}function KR(i,e){const t=document.createElement("a");t.href=i,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR="__/auth/handler",QR="emulator/auth/handler",ZR=encodeURIComponent("fac");async function sm(i,e,t,n,r,s){Qe(i.config.authDomain,i,"auth-domain-config-required"),Qe(i.config.apiKey,i,"invalid-api-key");const o={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:n,v:ao,eventId:r};if(e instanceof dd){e.setDefaultLanguage(i.languageCode),o.providerId=e.providerId||"",YM(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof pa){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}i.tenantId&&(o.tid=i.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await i._getAppCheckToken(),u=l?`#${ZR}=${encodeURIComponent(l)}`:"";return`${eI(i)}?${da(a).slice(1)}${u}`}function eI({config:i}){return i.emulator?ad(i,QR):`https://${i.authDomain}/${JR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au="webStorageSupport";class tI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=b_,this._completeRedirectFn=MR,this._overrideRedirectResult=SR}async _openPopup(e,t,n,r){var s;Hi((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await sm(e,t,n,ch(),r);return YR(e,o,fd())}async _openRedirect(e,t,n,r){await this._originValidation(e);const s=await sm(e,t,n,ch(),r);return rR(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:s}=this.eventManagers[t];return r?Promise.resolve(r):(Hi(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await HR(e),n=new bR(e);return t.register("authEvent",r=>(Qe(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:n.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(au,{type:au},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[au];o!==void 0&&t(!!o),_i(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=DR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return y_()||f_()||ud()}}const nI=tI;var om="@firebase/auth",am="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Qe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sI(i){Ys(new Jr("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=n.options;Qe(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:o,authDomain:a,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:E_(i)},u=new Ub(n,r,s,l);return zb(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Ys(new Jr("auth-internal",e=>{const t=tl(e.getProvider("auth").getImmediate());return(n=>new iI(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),pr(om,am,rI(i)),pr(om,am,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=300,aI=Jg("authIdTokenMaxAge")||oI;let cm=null;const cI=i=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>aI)return;const r=t==null?void 0:t.token;cm!==r&&(cm=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function lI(i=id()){const e=nd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=Bb(i,{popupRedirectResolver:nI,persistence:[fR,tR,b_]}),n=Jg("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(n,location.origin);if(location.origin===s.origin){const o=cI(s.toString());Kb(t,o,()=>o(t.currentUser)),Yb(t,a=>o(a))}}const r=Yg("auth");return r&&Gb(t,`http://${r}`),t}function uI(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}Ob({loadJS(i){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",i),n.onload=e,n.onerror=r=>{const s=ti("internal-error");s.customData=r,t(s)},n.type="text/javascript",n.charset="UTF-8",uI().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sI("Browser");var lm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mr,U_;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,T){function v(){}v.prototype=T.prototype,x.D=T.prototype,x.prototype=new v,x.prototype.constructor=x,x.C=function(y,w,L){for(var A=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)A[Z-2]=arguments[Z];return T.prototype[w].apply(y,A)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(x,T,v){v||(v=0);var y=Array(16);if(typeof T=="string")for(var w=0;16>w;++w)y[w]=T.charCodeAt(v++)|T.charCodeAt(v++)<<8|T.charCodeAt(v++)<<16|T.charCodeAt(v++)<<24;else for(w=0;16>w;++w)y[w]=T[v++]|T[v++]<<8|T[v++]<<16|T[v++]<<24;T=x.g[0],v=x.g[1],w=x.g[2];var L=x.g[3],A=T+(L^v&(w^L))+y[0]+3614090360&4294967295;T=v+(A<<7&4294967295|A>>>25),A=L+(w^T&(v^w))+y[1]+3905402710&4294967295,L=T+(A<<12&4294967295|A>>>20),A=w+(v^L&(T^v))+y[2]+606105819&4294967295,w=L+(A<<17&4294967295|A>>>15),A=v+(T^w&(L^T))+y[3]+3250441966&4294967295,v=w+(A<<22&4294967295|A>>>10),A=T+(L^v&(w^L))+y[4]+4118548399&4294967295,T=v+(A<<7&4294967295|A>>>25),A=L+(w^T&(v^w))+y[5]+1200080426&4294967295,L=T+(A<<12&4294967295|A>>>20),A=w+(v^L&(T^v))+y[6]+2821735955&4294967295,w=L+(A<<17&4294967295|A>>>15),A=v+(T^w&(L^T))+y[7]+4249261313&4294967295,v=w+(A<<22&4294967295|A>>>10),A=T+(L^v&(w^L))+y[8]+1770035416&4294967295,T=v+(A<<7&4294967295|A>>>25),A=L+(w^T&(v^w))+y[9]+2336552879&4294967295,L=T+(A<<12&4294967295|A>>>20),A=w+(v^L&(T^v))+y[10]+4294925233&4294967295,w=L+(A<<17&4294967295|A>>>15),A=v+(T^w&(L^T))+y[11]+2304563134&4294967295,v=w+(A<<22&4294967295|A>>>10),A=T+(L^v&(w^L))+y[12]+1804603682&4294967295,T=v+(A<<7&4294967295|A>>>25),A=L+(w^T&(v^w))+y[13]+4254626195&4294967295,L=T+(A<<12&4294967295|A>>>20),A=w+(v^L&(T^v))+y[14]+2792965006&4294967295,w=L+(A<<17&4294967295|A>>>15),A=v+(T^w&(L^T))+y[15]+1236535329&4294967295,v=w+(A<<22&4294967295|A>>>10),A=T+(w^L&(v^w))+y[1]+4129170786&4294967295,T=v+(A<<5&4294967295|A>>>27),A=L+(v^w&(T^v))+y[6]+3225465664&4294967295,L=T+(A<<9&4294967295|A>>>23),A=w+(T^v&(L^T))+y[11]+643717713&4294967295,w=L+(A<<14&4294967295|A>>>18),A=v+(L^T&(w^L))+y[0]+3921069994&4294967295,v=w+(A<<20&4294967295|A>>>12),A=T+(w^L&(v^w))+y[5]+3593408605&4294967295,T=v+(A<<5&4294967295|A>>>27),A=L+(v^w&(T^v))+y[10]+38016083&4294967295,L=T+(A<<9&4294967295|A>>>23),A=w+(T^v&(L^T))+y[15]+3634488961&4294967295,w=L+(A<<14&4294967295|A>>>18),A=v+(L^T&(w^L))+y[4]+3889429448&4294967295,v=w+(A<<20&4294967295|A>>>12),A=T+(w^L&(v^w))+y[9]+568446438&4294967295,T=v+(A<<5&4294967295|A>>>27),A=L+(v^w&(T^v))+y[14]+3275163606&4294967295,L=T+(A<<9&4294967295|A>>>23),A=w+(T^v&(L^T))+y[3]+4107603335&4294967295,w=L+(A<<14&4294967295|A>>>18),A=v+(L^T&(w^L))+y[8]+1163531501&4294967295,v=w+(A<<20&4294967295|A>>>12),A=T+(w^L&(v^w))+y[13]+2850285829&4294967295,T=v+(A<<5&4294967295|A>>>27),A=L+(v^w&(T^v))+y[2]+4243563512&4294967295,L=T+(A<<9&4294967295|A>>>23),A=w+(T^v&(L^T))+y[7]+1735328473&4294967295,w=L+(A<<14&4294967295|A>>>18),A=v+(L^T&(w^L))+y[12]+2368359562&4294967295,v=w+(A<<20&4294967295|A>>>12),A=T+(v^w^L)+y[5]+4294588738&4294967295,T=v+(A<<4&4294967295|A>>>28),A=L+(T^v^w)+y[8]+2272392833&4294967295,L=T+(A<<11&4294967295|A>>>21),A=w+(L^T^v)+y[11]+1839030562&4294967295,w=L+(A<<16&4294967295|A>>>16),A=v+(w^L^T)+y[14]+4259657740&4294967295,v=w+(A<<23&4294967295|A>>>9),A=T+(v^w^L)+y[1]+2763975236&4294967295,T=v+(A<<4&4294967295|A>>>28),A=L+(T^v^w)+y[4]+1272893353&4294967295,L=T+(A<<11&4294967295|A>>>21),A=w+(L^T^v)+y[7]+4139469664&4294967295,w=L+(A<<16&4294967295|A>>>16),A=v+(w^L^T)+y[10]+3200236656&4294967295,v=w+(A<<23&4294967295|A>>>9),A=T+(v^w^L)+y[13]+681279174&4294967295,T=v+(A<<4&4294967295|A>>>28),A=L+(T^v^w)+y[0]+3936430074&4294967295,L=T+(A<<11&4294967295|A>>>21),A=w+(L^T^v)+y[3]+3572445317&4294967295,w=L+(A<<16&4294967295|A>>>16),A=v+(w^L^T)+y[6]+76029189&4294967295,v=w+(A<<23&4294967295|A>>>9),A=T+(v^w^L)+y[9]+3654602809&4294967295,T=v+(A<<4&4294967295|A>>>28),A=L+(T^v^w)+y[12]+3873151461&4294967295,L=T+(A<<11&4294967295|A>>>21),A=w+(L^T^v)+y[15]+530742520&4294967295,w=L+(A<<16&4294967295|A>>>16),A=v+(w^L^T)+y[2]+3299628645&4294967295,v=w+(A<<23&4294967295|A>>>9),A=T+(w^(v|~L))+y[0]+4096336452&4294967295,T=v+(A<<6&4294967295|A>>>26),A=L+(v^(T|~w))+y[7]+1126891415&4294967295,L=T+(A<<10&4294967295|A>>>22),A=w+(T^(L|~v))+y[14]+2878612391&4294967295,w=L+(A<<15&4294967295|A>>>17),A=v+(L^(w|~T))+y[5]+4237533241&4294967295,v=w+(A<<21&4294967295|A>>>11),A=T+(w^(v|~L))+y[12]+1700485571&4294967295,T=v+(A<<6&4294967295|A>>>26),A=L+(v^(T|~w))+y[3]+2399980690&4294967295,L=T+(A<<10&4294967295|A>>>22),A=w+(T^(L|~v))+y[10]+4293915773&4294967295,w=L+(A<<15&4294967295|A>>>17),A=v+(L^(w|~T))+y[1]+2240044497&4294967295,v=w+(A<<21&4294967295|A>>>11),A=T+(w^(v|~L))+y[8]+1873313359&4294967295,T=v+(A<<6&4294967295|A>>>26),A=L+(v^(T|~w))+y[15]+4264355552&4294967295,L=T+(A<<10&4294967295|A>>>22),A=w+(T^(L|~v))+y[6]+2734768916&4294967295,w=L+(A<<15&4294967295|A>>>17),A=v+(L^(w|~T))+y[13]+1309151649&4294967295,v=w+(A<<21&4294967295|A>>>11),A=T+(w^(v|~L))+y[4]+4149444226&4294967295,T=v+(A<<6&4294967295|A>>>26),A=L+(v^(T|~w))+y[11]+3174756917&4294967295,L=T+(A<<10&4294967295|A>>>22),A=w+(T^(L|~v))+y[2]+718787259&4294967295,w=L+(A<<15&4294967295|A>>>17),A=v+(L^(w|~T))+y[9]+3951481745&4294967295,x.g[0]=x.g[0]+T&4294967295,x.g[1]=x.g[1]+(w+(A<<21&4294967295|A>>>11))&4294967295,x.g[2]=x.g[2]+w&4294967295,x.g[3]=x.g[3]+L&4294967295}n.prototype.u=function(x,T){T===void 0&&(T=x.length);for(var v=T-this.blockSize,y=this.B,w=this.h,L=0;L<T;){if(w==0)for(;L<=v;)r(this,x,L),L+=this.blockSize;if(typeof x=="string"){for(;L<T;)if(y[w++]=x.charCodeAt(L++),w==this.blockSize){r(this,y),w=0;break}}else for(;L<T;)if(y[w++]=x[L++],w==this.blockSize){r(this,y),w=0;break}}this.h=w,this.o+=T},n.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var T=1;T<x.length-8;++T)x[T]=0;var v=8*this.o;for(T=x.length-8;T<x.length;++T)x[T]=v&255,v/=256;for(this.u(x),x=Array(16),T=v=0;4>T;++T)for(var y=0;32>y;y+=8)x[v++]=this.g[T]>>>y&255;return x};function s(x,T){var v=a;return Object.prototype.hasOwnProperty.call(v,x)?v[x]:v[x]=T(x)}function o(x,T){this.h=T;for(var v=[],y=!0,w=x.length-1;0<=w;w--){var L=x[w]|0;y&&L==T||(v[w]=L,y=!1)}this.g=v}var a={};function l(x){return-128<=x&&128>x?s(x,function(T){return new o([T|0],0>T?-1:0)}):new o([x|0],0>x?-1:0)}function u(x){if(isNaN(x)||!isFinite(x))return d;if(0>x)return m(u(-x));for(var T=[],v=1,y=0;x>=v;y++)T[y]=x/v|0,v*=4294967296;return new o(T,0)}function h(x,T){if(x.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(x.charAt(0)=="-")return m(h(x.substring(1),T));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(T,8)),y=d,w=0;w<x.length;w+=8){var L=Math.min(8,x.length-w),A=parseInt(x.substring(w,w+L),T);8>L?(L=u(Math.pow(T,L)),y=y.j(L).add(u(A))):(y=y.j(v),y=y.add(u(A)))}return y}var d=l(0),f=l(1),_=l(16777216);i=o.prototype,i.m=function(){if(M(this))return-m(this).m();for(var x=0,T=1,v=0;v<this.g.length;v++){var y=this.i(v);x+=(0<=y?y:4294967296+y)*T,T*=4294967296}return x},i.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(S(this))return"0";if(M(this))return"-"+m(this).toString(x);for(var T=u(Math.pow(x,6)),v=this,y="";;){var w=R(v,T).g;v=g(v,w.j(T));var L=((0<v.g.length?v.g[0]:v.h)>>>0).toString(x);if(v=w,S(v))return L+y;for(;6>L.length;)L="0"+L;y=L+y}},i.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function S(x){if(x.h!=0)return!1;for(var T=0;T<x.g.length;T++)if(x.g[T]!=0)return!1;return!0}function M(x){return x.h==-1}i.l=function(x){return x=g(this,x),M(x)?-1:S(x)?0:1};function m(x){for(var T=x.g.length,v=[],y=0;y<T;y++)v[y]=~x.g[y];return new o(v,~x.h).add(f)}i.abs=function(){return M(this)?m(this):this},i.add=function(x){for(var T=Math.max(this.g.length,x.g.length),v=[],y=0,w=0;w<=T;w++){var L=y+(this.i(w)&65535)+(x.i(w)&65535),A=(L>>>16)+(this.i(w)>>>16)+(x.i(w)>>>16);y=A>>>16,L&=65535,A&=65535,v[w]=A<<16|L}return new o(v,v[v.length-1]&-2147483648?-1:0)};function g(x,T){return x.add(m(T))}i.j=function(x){if(S(this)||S(x))return d;if(M(this))return M(x)?m(this).j(m(x)):m(m(this).j(x));if(M(x))return m(this.j(m(x)));if(0>this.l(_)&&0>x.l(_))return u(this.m()*x.m());for(var T=this.g.length+x.g.length,v=[],y=0;y<2*T;y++)v[y]=0;for(y=0;y<this.g.length;y++)for(var w=0;w<x.g.length;w++){var L=this.i(y)>>>16,A=this.i(y)&65535,Z=x.i(w)>>>16,ie=x.i(w)&65535;v[2*y+2*w]+=A*ie,P(v,2*y+2*w),v[2*y+2*w+1]+=L*ie,P(v,2*y+2*w+1),v[2*y+2*w+1]+=A*Z,P(v,2*y+2*w+1),v[2*y+2*w+2]+=L*Z,P(v,2*y+2*w+2)}for(y=0;y<T;y++)v[y]=v[2*y+1]<<16|v[2*y];for(y=T;y<2*T;y++)v[y]=0;return new o(v,0)};function P(x,T){for(;(x[T]&65535)!=x[T];)x[T+1]+=x[T]>>>16,x[T]&=65535,T++}function D(x,T){this.g=x,this.h=T}function R(x,T){if(S(T))throw Error("division by zero");if(S(x))return new D(d,d);if(M(x))return T=R(m(x),T),new D(m(T.g),m(T.h));if(M(T))return T=R(x,m(T)),new D(m(T.g),T.h);if(30<x.g.length){if(M(x)||M(T))throw Error("slowDivide_ only works with positive integers.");for(var v=f,y=T;0>=y.l(x);)v=V(v),y=V(y);var w=F(v,1),L=F(y,1);for(y=F(y,2),v=F(v,2);!S(y);){var A=L.add(y);0>=A.l(x)&&(w=w.add(v),L=A),y=F(y,1),v=F(v,1)}return T=g(x,w.j(T)),new D(w,T)}for(w=d;0<=x.l(T);){for(v=Math.max(1,Math.floor(x.m()/T.m())),y=Math.ceil(Math.log(v)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),L=u(v),A=L.j(T);M(A)||0<A.l(x);)v-=y,L=u(v),A=L.j(T);S(L)&&(L=f),w=w.add(L),x=g(x,A)}return new D(w,x)}i.A=function(x){return R(this,x).h},i.and=function(x){for(var T=Math.max(this.g.length,x.g.length),v=[],y=0;y<T;y++)v[y]=this.i(y)&x.i(y);return new o(v,this.h&x.h)},i.or=function(x){for(var T=Math.max(this.g.length,x.g.length),v=[],y=0;y<T;y++)v[y]=this.i(y)|x.i(y);return new o(v,this.h|x.h)},i.xor=function(x){for(var T=Math.max(this.g.length,x.g.length),v=[],y=0;y<T;y++)v[y]=this.i(y)^x.i(y);return new o(v,this.h^x.h)};function V(x){for(var T=x.g.length+1,v=[],y=0;y<T;y++)v[y]=x.i(y)<<1|x.i(y-1)>>>31;return new o(v,x.h)}function F(x,T){var v=T>>5;T%=32;for(var y=x.g.length-v,w=[],L=0;L<y;L++)w[L]=0<T?x.i(L+v)>>>T|x.i(L+v+1)<<32-T:x.i(L+v);return new o(w,x.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,U_=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,mr=o}).apply(typeof lm<"u"?lm:typeof self<"u"?self:typeof window<"u"?window:{});var tc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var O_,Po,F_,vc,hh,k_,V_,B_;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,p,E){return c==Array.prototype||c==Object.prototype||(c[p]=E.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof tc=="object"&&tc];for(var p=0;p<c.length;++p){var E=c[p];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var n=t(this);function r(c,p){if(p)e:{var E=n;c=c.split(".");for(var C=0;C<c.length-1;C++){var H=c[C];if(!(H in E))break e;E=E[H]}c=c[c.length-1],C=E[c],p=p(C),p!=C&&p!=null&&e(E,c,{configurable:!0,writable:!0,value:p})}}function s(c,p){c instanceof String&&(c+="");var E=0,C=!1,H={next:function(){if(!C&&E<c.length){var K=E++;return{value:p(K,c[K]),done:!1}}return C=!0,{done:!0,value:void 0}}};return H[Symbol.iterator]=function(){return H},H}r("Array.prototype.values",function(c){return c||function(){return s(this,function(p,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var p=typeof c;return p=p!="object"?p:c?Array.isArray(c)?"array":p:"null",p=="array"||p=="object"&&typeof c.length=="number"}function u(c){var p=typeof c;return p=="object"&&c!=null||p=="function"}function h(c,p,E){return c.call.apply(c.bind,arguments)}function d(c,p,E){if(!c)throw Error();if(2<arguments.length){var C=Array.prototype.slice.call(arguments,2);return function(){var H=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(H,C),c.apply(p,H)}}return function(){return c.apply(p,arguments)}}function f(c,p,E){return f=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,f.apply(null,arguments)}function _(c,p){var E=Array.prototype.slice.call(arguments,1);return function(){var C=E.slice();return C.push.apply(C,arguments),c.apply(this,C)}}function S(c,p){function E(){}E.prototype=p.prototype,c.aa=p.prototype,c.prototype=new E,c.prototype.constructor=c,c.Qb=function(C,H,K){for(var ge=Array(arguments.length-2),Pt=2;Pt<arguments.length;Pt++)ge[Pt-2]=arguments[Pt];return p.prototype[H].apply(C,ge)}}function M(c){const p=c.length;if(0<p){const E=Array(p);for(let C=0;C<p;C++)E[C]=c[C];return E}return[]}function m(c,p){for(let E=1;E<arguments.length;E++){const C=arguments[E];if(l(C)){const H=c.length||0,K=C.length||0;c.length=H+K;for(let ge=0;ge<K;ge++)c[H+ge]=C[ge]}else c.push(C)}}class g{constructor(p,E){this.i=p,this.j=E,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function P(c){return/^[\s\xa0]*$/.test(c)}function D(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function R(c){return R[" "](c),c}R[" "]=function(){};var V=D().indexOf("Gecko")!=-1&&!(D().toLowerCase().indexOf("webkit")!=-1&&D().indexOf("Edge")==-1)&&!(D().indexOf("Trident")!=-1||D().indexOf("MSIE")!=-1)&&D().indexOf("Edge")==-1;function F(c,p,E){for(const C in c)p.call(E,c[C],C,c)}function x(c,p){for(const E in c)p.call(void 0,c[E],E,c)}function T(c){const p={};for(const E in c)p[E]=c[E];return p}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(c,p){let E,C;for(let H=1;H<arguments.length;H++){C=arguments[H];for(E in C)c[E]=C[E];for(let K=0;K<v.length;K++)E=v[K],Object.prototype.hasOwnProperty.call(C,E)&&(c[E]=C[E])}}function w(c){var p=1;c=c.split(":");const E=[];for(;0<p&&c.length;)E.push(c.shift()),p--;return c.length&&E.push(c.join(":")),E}function L(c){a.setTimeout(()=>{throw c},0)}function A(){var c=_e;let p=null;return c.g&&(p=c.g,c.g=c.g.next,c.g||(c.h=null),p.next=null),p}class Z{constructor(){this.h=this.g=null}add(p,E){const C=ie.get();C.set(p,E),this.h?this.h.next=C:this.g=C,this.h=C}}var ie=new g(()=>new ne,c=>c.reset());class ne{constructor(){this.next=this.g=this.h=null}set(p,E){this.h=p,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,Y=!1,_e=new Z,k=()=>{const c=a.Promise.resolve(void 0);ce=()=>{c.then(O)}};var O=()=>{for(var c;c=A();){try{c.h.call(c.g)}catch(E){L(E)}var p=ie;p.j(c),100>p.h&&(p.h++,c.next=p.g,p.g=c)}Y=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(c,p){this.type=c,this.g=this.target=p,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var X=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,p=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const E=()=>{};a.addEventListener("test",E,p),a.removeEventListener("test",E,p)}catch{}return c})();function ee(c,p){if(fe.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var E=this.type=c.type,C=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=p,p=c.relatedTarget){if(V){e:{try{R(p.nodeName);var H=!0;break e}catch{}H=!1}H||(p=null)}}else E=="mouseover"?p=c.fromElement:E=="mouseout"&&(p=c.toElement);this.relatedTarget=p,C?(this.clientX=C.clientX!==void 0?C.clientX:C.pageX,this.clientY=C.clientY!==void 0?C.clientY:C.pageY,this.screenX=C.screenX||0,this.screenY=C.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:he[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&ee.aa.h.call(this)}}S(ee,fe);var he={2:"touch",3:"pen",4:"mouse"};ee.prototype.h=function(){ee.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),me=0;function Ue(c,p,E,C,H){this.listener=c,this.proxy=null,this.src=p,this.type=E,this.capture=!!C,this.ha=H,this.key=++me,this.da=this.fa=!1}function xe(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ge(c){this.src=c,this.g={},this.h=0}Ge.prototype.add=function(c,p,E,C,H){var K=c.toString();c=this.g[K],c||(c=this.g[K]=[],this.h++);var ge=Fe(c,p,C,H);return-1<ge?(p=c[ge],E||(p.fa=!1)):(p=new Ue(p,this.src,K,!!C,H),p.fa=E,c.push(p)),p};function We(c,p){var E=p.type;if(E in c.g){var C=c.g[E],H=Array.prototype.indexOf.call(C,p,void 0),K;(K=0<=H)&&Array.prototype.splice.call(C,H,1),K&&(xe(p),c.g[E].length==0&&(delete c.g[E],c.h--))}}function Fe(c,p,E,C){for(var H=0;H<c.length;++H){var K=c[H];if(!K.da&&K.listener==p&&K.capture==!!E&&K.ha==C)return H}return-1}var U="closure_lm_"+(1e6*Math.random()|0),wt={};function qe(c,p,E,C,H){if(Array.isArray(p)){for(var K=0;K<p.length;K++)qe(c,p[K],E,C,H);return null}return E=ue(E),c&&c[te]?c.K(p,E,u(C)?!!C.capture:!1,H):$e(c,p,E,!1,C,H)}function $e(c,p,E,C,H,K){if(!p)throw Error("Invalid event type");var ge=u(H)?!!H.capture:!!H,Pt=q(c);if(Pt||(c[U]=Pt=new Ge(c)),E=Pt.add(p,E,C,ge,K),E.proxy)return E;if(C=Ne(),E.proxy=C,C.src=c,C.listener=E,c.addEventListener)X||(H=ge),H===void 0&&(H=!1),c.addEventListener(p.toString(),C,H);else if(c.attachEvent)c.attachEvent(N(p.toString()),C);else if(c.addListener&&c.removeListener)c.addListener(C);else throw Error("addEventListener and attachEvent are unavailable.");return E}function Ne(){function c(E){return p.call(c.src,c.listener,E)}const p=b;return c}function lt(c,p,E,C,H){if(Array.isArray(p))for(var K=0;K<p.length;K++)lt(c,p[K],E,C,H);else C=u(C)?!!C.capture:!!C,E=ue(E),c&&c[te]?(c=c.i,p=String(p).toString(),p in c.g&&(K=c.g[p],E=Fe(K,E,C,H),-1<E&&(xe(K[E]),Array.prototype.splice.call(K,E,1),K.length==0&&(delete c.g[p],c.h--)))):c&&(c=q(c))&&(p=c.g[p.toString()],c=-1,p&&(c=Fe(p,E,C,H)),(E=-1<c?p[c]:null)&&Ce(E))}function Ce(c){if(typeof c!="number"&&c&&!c.da){var p=c.src;if(p&&p[te])We(p.i,c);else{var E=c.type,C=c.proxy;p.removeEventListener?p.removeEventListener(E,C,c.capture):p.detachEvent?p.detachEvent(N(E),C):p.addListener&&p.removeListener&&p.removeListener(C),(E=q(p))?(We(E,c),E.h==0&&(E.src=null,p[U]=null)):xe(c)}}}function N(c){return c in wt?wt[c]:wt[c]="on"+c}function b(c,p){if(c.da)c=!0;else{p=new ee(p,this);var E=c.listener,C=c.ha||c.src;c.fa&&Ce(c),c=E.call(C,p)}return c}function q(c){return c=c[U],c instanceof Ge?c:null}var se="__closure_events_fn_"+(1e9*Math.random()>>>0);function ue(c){return typeof c=="function"?c:(c[se]||(c[se]=function(p){return c.handleEvent(p)}),c[se])}function J(){le.call(this),this.i=new Ge(this),this.M=this,this.F=null}S(J,le),J.prototype[te]=!0,J.prototype.removeEventListener=function(c,p,E,C){lt(this,c,p,E,C)};function we(c,p){var E,C=c.F;if(C)for(E=[];C;C=C.F)E.push(C);if(c=c.M,C=p.type||p,typeof p=="string")p=new fe(p,c);else if(p instanceof fe)p.target=p.target||c;else{var H=p;p=new fe(C,c),y(p,H)}if(H=!0,E)for(var K=E.length-1;0<=K;K--){var ge=p.g=E[K];H=ve(ge,C,!0,p)&&H}if(ge=p.g=c,H=ve(ge,C,!0,p)&&H,H=ve(ge,C,!1,p)&&H,E)for(K=0;K<E.length;K++)ge=p.g=E[K],H=ve(ge,C,!1,p)&&H}J.prototype.N=function(){if(J.aa.N.call(this),this.i){var c=this.i,p;for(p in c.g){for(var E=c.g[p],C=0;C<E.length;C++)xe(E[C]);delete c.g[p],c.h--}}this.F=null},J.prototype.K=function(c,p,E,C){return this.i.add(String(c),p,!1,E,C)},J.prototype.L=function(c,p,E,C){return this.i.add(String(c),p,!0,E,C)};function ve(c,p,E,C){if(p=c.i.g[String(p)],!p)return!0;p=p.concat();for(var H=!0,K=0;K<p.length;++K){var ge=p[K];if(ge&&!ge.da&&ge.capture==E){var Pt=ge.listener,on=ge.ha||ge.src;ge.fa&&We(c.i,ge),H=Pt.call(on,C)!==!1&&H}}return H&&!C.defaultPrevented}function Ie(c,p,E){if(typeof c=="function")E&&(c=f(c,E));else if(c&&typeof c.handleEvent=="function")c=f(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:a.setTimeout(c,p||0)}function ot(c){c.g=Ie(()=>{c.g=null,c.i&&(c.i=!1,ot(c))},c.l);const p=c.h;c.h=null,c.m.apply(null,p)}class pe extends le{constructor(p,E){super(),this.m=p,this.l=E,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:ot(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Re(c){le.call(this),this.h=c,this.g={}}S(Re,le);var He=[];function Ye(c){F(c.g,function(p,E){this.g.hasOwnProperty(E)&&Ce(p)},c),c.g={}}Re.prototype.N=function(){Re.aa.N.call(this),Ye(this)},Re.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var De=a.JSON.stringify,ut=a.JSON.parse,nt=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function Mt(){}Mt.prototype.h=null;function B(c){return c.h||(c.h=c.i())}function Te(){}var Q={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ae(){fe.call(this,"d")}S(ae,fe);function Me(){fe.call(this,"c")}S(Me,fe);var ye={},et=null;function Ct(){return et=et||new J}ye.La="serverreachability";function Kt(c){fe.call(this,ye.La,c)}S(Kt,fe);function mt(c){const p=Ct();we(p,new Kt(p))}ye.STAT_EVENT="statevent";function Mn(c,p){fe.call(this,ye.STAT_EVENT,c),this.stat=p}S(Mn,fe);function Lt(c){const p=Ct();we(p,new Mn(p,c))}ye.Ma="timingevent";function mo(c,p){fe.call(this,ye.Ma,c),this.size=p}S(mo,fe);function $i(c,p){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},p)}function Dn(){this.g=!0}Dn.prototype.xa=function(){this.g=!1};function go(c,p,E,C,H,K){c.info(function(){if(c.g)if(K)for(var ge="",Pt=K.split("&"),on=0;on<Pt.length;on++){var St=Pt[on].split("=");if(1<St.length){var hn=St[0];St=St[1];var dn=hn.split("_");ge=2<=dn.length&&dn[1]=="type"?ge+(hn+"="+St+"&"):ge+(hn+"=redacted&")}}else ge=null;else ge=K;return"XMLHTTP REQ ("+C+") [attempt "+H+"]: "+p+`
`+E+`
`+ge})}function Ta(c,p,E,C,H,K,ge){c.info(function(){return"XMLHTTP RESP ("+C+") [ attempt "+H+"]: "+p+`
`+E+`
`+K+" "+ge})}function yi(c,p,E,C){c.info(function(){return"XMLHTTP TEXT ("+p+"): "+Sa(c,E)+(C?" "+C:"")})}function as(c,p){c.info(function(){return"TIMEOUT: "+p})}Dn.prototype.info=function(){};function Sa(c,p){if(!c.g)return p;if(!p)return null;try{var E=JSON.parse(p);if(E){for(c=0;c<E.length;c++)if(Array.isArray(E[c])){var C=E[c];if(!(2>C.length)){var H=C[1];if(Array.isArray(H)&&!(1>H.length)){var K=H[0];if(K!="noop"&&K!="stop"&&K!="close")for(var ge=1;ge<H.length;ge++)H[ge]=""}}}}return De(E)}catch{return p}}var Ei={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},_o={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},cs;function ls(){}S(ls,Mt),ls.prototype.g=function(){return new XMLHttpRequest},ls.prototype.i=function(){return{}},cs=new ls;function ri(c,p,E,C){this.j=c,this.i=p,this.l=E,this.R=C||1,this.U=new Re(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new xa}function xa(){this.i=null,this.g="",this.h=!1}var wa={},vo={};function yo(c,p,E){c.L=1,c.v=Qt(En(p)),c.m=E,c.P=!0,I(c,null)}function I(c,p){c.F=Date.now(),$(c),c.A=En(c.v);var E=c.A,C=c.R;Array.isArray(C)||(C=[String(C)]),uf(E.i,"t",C),c.C=0,E=c.j.J,c.h=new xa,c.g=Rf(c.j,E?p:null,!c.m),0<c.O&&(c.M=new pe(f(c.Y,c,c.g),c.O)),p=c.U,E=c.g,C=c.ca;var H="readystatechange";Array.isArray(H)||(H&&(He[0]=H.toString()),H=He);for(var K=0;K<H.length;K++){var ge=qe(E,H[K],C||p.handleEvent,!1,p.h||p);if(!ge)break;p.g[ge.key]=ge}p=c.H?T(c.H):{},c.m?(c.u||(c.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,p)):(c.u="GET",c.g.ea(c.A,c.u,null,p)),mt(),go(c.i,c.u,c.A,c.l,c.R,c.m)}ri.prototype.ca=function(c){c=c.target;const p=this.M;p&&Si(c)==3?p.j():this.Y(c)},ri.prototype.Y=function(c){try{if(c==this.g)e:{const dn=Si(this.g);var p=this.g.Ba();const ds=this.g.Z();if(!(3>dn)&&(dn!=3||this.g&&(this.h.h||this.g.oa()||_f(this.g)))){this.J||dn!=4||p==7||(p==8||0>=ds?mt(3):mt(2)),de(this);var E=this.g.Z();this.X=E;t:if(z(this)){var C=_f(this.g);c="";var H=C.length,K=Si(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ae(this),Ee(this);var ge="";break t}this.h.i=new a.TextDecoder}for(p=0;p<H;p++)this.h.h=!0,c+=this.h.i.decode(C[p],{stream:!(K&&p==H-1)});C.length=0,this.h.g+=c,this.C=0,ge=this.h.g}else ge=this.g.oa();if(this.o=E==200,Ta(this.i,this.u,this.A,this.l,this.R,dn,E),this.o){if(this.T&&!this.K){t:{if(this.g){var Pt,on=this.g;if((Pt=on.g?on.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(Pt)){var St=Pt;break t}}St=null}if(E=St)yi(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Le(this,E);else{this.o=!1,this.s=3,Lt(12),Ae(this),Ee(this);break e}}if(this.P){E=!0;let Wn;for(;!this.J&&this.C<ge.length;)if(Wn=j(this,ge),Wn==vo){dn==4&&(this.s=4,Lt(14),E=!1),yi(this.i,this.l,null,"[Incomplete Response]");break}else if(Wn==wa){this.s=4,Lt(15),yi(this.i,this.l,ge,"[Invalid Chunk]"),E=!1;break}else yi(this.i,this.l,Wn,null),Le(this,Wn);if(z(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dn!=4||ge.length!=0||this.h.h||(this.s=1,Lt(16),E=!1),this.o=this.o&&E,!E)yi(this.i,this.l,ge,"[Invalid Chunked Response]"),Ae(this),Ee(this);else if(0<ge.length&&!this.W){this.W=!0;var hn=this.j;hn.g==this&&hn.ba&&!hn.M&&(hn.j.info("Great, no buffering proxy detected. Bytes received: "+ge.length),xl(hn),hn.M=!0,Lt(11))}}else yi(this.i,this.l,ge,null),Le(this,ge);dn==4&&Ae(this),this.o&&!this.J&&(dn==4?wf(this.j,this):(this.o=!1,$(this)))}else G0(this.g),E==400&&0<ge.indexOf("Unknown SID")?(this.s=3,Lt(12)):(this.s=0,Lt(13)),Ae(this),Ee(this)}}}catch{}finally{}};function z(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function j(c,p){var E=c.C,C=p.indexOf(`
`,E);return C==-1?vo:(E=Number(p.substring(E,C)),isNaN(E)?wa:(C+=1,C+E>p.length?vo:(p=p.slice(C,C+E),c.C=C+E,p)))}ri.prototype.cancel=function(){this.J=!0,Ae(this)};function $(c){c.S=Date.now()+c.I,G(c,c.I)}function G(c,p){if(c.B!=null)throw Error("WatchDog timer not null");c.B=$i(f(c.ba,c),p)}function de(c){c.B&&(a.clearTimeout(c.B),c.B=null)}ri.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(as(this.i,this.A),this.L!=2&&(mt(),Lt(17)),Ae(this),this.s=2,Ee(this)):G(this,this.S-c)};function Ee(c){c.j.G==0||c.J||wf(c.j,c)}function Ae(c){de(c);var p=c.M;p&&typeof p.ma=="function"&&p.ma(),c.M=null,Ye(c.U),c.g&&(p=c.g,c.g=null,p.abort(),p.ma())}function Le(c,p){try{var E=c.j;if(E.G!=0&&(E.g==c||_t(E.h,c))){if(!c.K&&_t(E.h,c)&&E.G==3){try{var C=E.Da.g.parse(p)}catch{C=null}if(Array.isArray(C)&&C.length==3){var H=C;if(H[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<c.F)Ca(E),Ra(E);else break e;Sl(E),Lt(18)}}else E.za=H[1],0<E.za-E.T&&37500>H[2]&&E.F&&E.v==0&&!E.C&&(E.C=$i(f(E.Za,E),6e3));if(1>=ht(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else br(E,11)}else if((c.K||E.g==c)&&Ca(E),!P(p))for(H=E.Da.g.parse(p),p=0;p<H.length;p++){let St=H[p];if(E.T=St[0],St=St[1],E.G==2)if(St[0]=="c"){E.K=St[1],E.ia=St[2];const hn=St[3];hn!=null&&(E.la=hn,E.j.info("VER="+E.la));const dn=St[4];dn!=null&&(E.Aa=dn,E.j.info("SVER="+E.Aa));const ds=St[5];ds!=null&&typeof ds=="number"&&0<ds&&(C=1.5*ds,E.L=C,E.j.info("backChannelRequestTimeoutMs_="+C)),C=E;const Wn=c.g;if(Wn){const Da=Wn.g?Wn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Da){var K=C.h;K.g||Da.indexOf("spdy")==-1&&Da.indexOf("quic")==-1&&Da.indexOf("h2")==-1||(K.j=K.l,K.g=new Set,K.h&&(Ot(K,K.h),K.h=null))}if(C.D){const wl=Wn.g?Wn.g.getResponseHeader("X-HTTP-Session-Id"):null;wl&&(C.ya=wl,it(C.I,C.D,wl))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-c.F,E.j.info("Handshake RTT: "+E.R+"ms")),C=E;var ge=c;if(C.qa=bf(C,C.J?C.ia:null,C.W),ge.K){Nt(C.h,ge);var Pt=ge,on=C.L;on&&(Pt.I=on),Pt.B&&(de(Pt),$(Pt)),C.g=ge}else Sf(C);0<E.i.length&&Ia(E)}else St[0]!="stop"&&St[0]!="close"||br(E,7);else E.G==3&&(St[0]=="stop"||St[0]=="close"?St[0]=="stop"?br(E,7):Tl(E):St[0]!="noop"&&E.l&&E.l.ta(St),E.v=0)}}mt(4)}catch{}}var Ke=class{constructor(c,p){this.g=c,this.map=p}};function Je(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ke(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function ht(c){return c.h?1:c.g?c.g.size:0}function _t(c,p){return c.h?c.h==p:c.g?c.g.has(p):!1}function Ot(c,p){c.g?c.g.add(p):c.h=p}function Nt(c,p){c.h&&c.h==p?c.h=null:c.g&&c.g.has(p)&&c.g.delete(p)}Je.prototype.cancel=function(){if(this.i=gt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function gt(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let p=c.i;for(const E of c.g.values())p=p.concat(E.D);return p}return M(c.i)}function ze(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var p=[],E=c.length,C=0;C<E;C++)p.push(c[C]);return p}p=[],E=0;for(C in c)p[E++]=c[C];return p}function Jt(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var p=[];c=c.length;for(var E=0;E<c;E++)p.push(E);return p}p=[],E=0;for(const C in c)p[E++]=C;return p}}}function Et(c,p){if(c.forEach&&typeof c.forEach=="function")c.forEach(p,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,p,void 0);else for(var E=Jt(c),C=ze(c),H=C.length,K=0;K<H;K++)p.call(void 0,C[K],E&&E[K],c)}var An=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yi(c,p){if(c){c=c.split("&");for(var E=0;E<c.length;E++){var C=c[E].indexOf("="),H=null;if(0<=C){var K=c[E].substring(0,C);H=c[E].substring(C+1)}else K=c[E];p(K,H?decodeURIComponent(H.replace(/\+/g," ")):"")}}}function Ht(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Ht){this.h=c.h,bt(this,c.j),this.o=c.o,this.g=c.g,sn(this,c.s),this.l=c.l;var p=c.i,E=new Eo;E.i=p.i,p.g&&(E.g=new Map(p.g),E.h=p.h),Tn(this,E),this.m=c.m}else c&&(p=String(c).match(An))?(this.h=!1,bt(this,p[1]||"",!0),this.o=Ti(p[2]||""),this.g=Ti(p[3]||"",!0),sn(this,p[4]),this.l=Ti(p[5]||"",!0),Tn(this,p[6]||"",!0),this.m=Ti(p[7]||"")):(this.h=!1,this.i=new Eo(null,this.h))}Ht.prototype.toString=function(){var c=[],p=this.j;p&&c.push(Ln(p,af,!0),":");var E=this.g;return(E||p=="file")&&(c.push("//"),(p=this.o)&&c.push(Ln(p,af,!0),"@"),c.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&c.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&c.push("/"),c.push(Ln(E,E.charAt(0)=="/"?D0:P0,!0))),(E=this.i.toString())&&c.push("?",E),(E=this.m)&&c.push("#",Ln(E,N0)),c.join("")};function En(c){return new Ht(c)}function bt(c,p,E){c.j=E?Ti(p,!0):p,c.j&&(c.j=c.j.replace(/:$/,""))}function sn(c,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);c.s=p}else c.s=null}function Tn(c,p,E){p instanceof Eo?(c.i=p,U0(c.i,c.h)):(E||(p=Ln(p,L0)),c.i=new Eo(p,c.h))}function it(c,p,E){c.i.set(p,E)}function Qt(c){return it(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Ti(c,p){return c?p?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Ln(c,p,E){return typeof c=="string"?(c=encodeURI(c).replace(p,C0),E&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function C0(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var af=/[#\/\?@]/g,P0=/[#\?:]/g,D0=/[#\?]/g,L0=/[#\?@]/g,N0=/#/g;function Eo(c,p){this.h=this.g=null,this.i=c||null,this.j=!!p}function Ki(c){c.g||(c.g=new Map,c.h=0,c.i&&Yi(c.i,function(p,E){c.add(decodeURIComponent(p.replace(/\+/g," ")),E)}))}i=Eo.prototype,i.add=function(c,p){Ki(this),this.i=null,c=us(this,c);var E=this.g.get(c);return E||this.g.set(c,E=[]),E.push(p),this.h+=1,this};function cf(c,p){Ki(c),p=us(c,p),c.g.has(p)&&(c.i=null,c.h-=c.g.get(p).length,c.g.delete(p))}function lf(c,p){return Ki(c),p=us(c,p),c.g.has(p)}i.forEach=function(c,p){Ki(this),this.g.forEach(function(E,C){E.forEach(function(H){c.call(p,H,C,this)},this)},this)},i.na=function(){Ki(this);const c=Array.from(this.g.values()),p=Array.from(this.g.keys()),E=[];for(let C=0;C<p.length;C++){const H=c[C];for(let K=0;K<H.length;K++)E.push(p[C])}return E},i.V=function(c){Ki(this);let p=[];if(typeof c=="string")lf(this,c)&&(p=p.concat(this.g.get(us(this,c))));else{c=Array.from(this.g.values());for(let E=0;E<c.length;E++)p=p.concat(c[E])}return p},i.set=function(c,p){return Ki(this),this.i=null,c=us(this,c),lf(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[p]),this.h+=1,this},i.get=function(c,p){return c?(c=this.V(c),0<c.length?String(c[0]):p):p};function uf(c,p,E){cf(c,p),0<E.length&&(c.i=null,c.g.set(us(c,p),M(E)),c.h+=E.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],p=Array.from(this.g.keys());for(var E=0;E<p.length;E++){var C=p[E];const K=encodeURIComponent(String(C)),ge=this.V(C);for(C=0;C<ge.length;C++){var H=K;ge[C]!==""&&(H+="="+encodeURIComponent(String(ge[C]))),c.push(H)}}return this.i=c.join("&")};function us(c,p){return p=String(p),c.j&&(p=p.toLowerCase()),p}function U0(c,p){p&&!c.j&&(Ki(c),c.i=null,c.g.forEach(function(E,C){var H=C.toLowerCase();C!=H&&(cf(this,C),uf(this,H,E))},c)),c.j=p}function O0(c,p){const E=new Dn;if(a.Image){const C=new Image;C.onload=_(Ji,E,"TestLoadImage: loaded",!0,p,C),C.onerror=_(Ji,E,"TestLoadImage: error",!1,p,C),C.onabort=_(Ji,E,"TestLoadImage: abort",!1,p,C),C.ontimeout=_(Ji,E,"TestLoadImage: timeout",!1,p,C),a.setTimeout(function(){C.ontimeout&&C.ontimeout()},1e4),C.src=c}else p(!1)}function F0(c,p){const E=new Dn,C=new AbortController,H=setTimeout(()=>{C.abort(),Ji(E,"TestPingServer: timeout",!1,p)},1e4);fetch(c,{signal:C.signal}).then(K=>{clearTimeout(H),K.ok?Ji(E,"TestPingServer: ok",!0,p):Ji(E,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(H),Ji(E,"TestPingServer: error",!1,p)})}function Ji(c,p,E,C,H){try{H&&(H.onload=null,H.onerror=null,H.onabort=null,H.ontimeout=null),C(E)}catch{}}function k0(){this.g=new nt}function V0(c,p,E){const C=E||"";try{Et(c,function(H,K){let ge=H;u(H)&&(ge=De(H)),p.push(C+K+"="+encodeURIComponent(ge))})}catch(H){throw p.push(C+"type="+encodeURIComponent("_badmap")),H}}function Ma(c){this.l=c.Ub||null,this.j=c.eb||!1}S(Ma,Mt),Ma.prototype.g=function(){return new Aa(this.l,this.j)},Ma.prototype.i=(function(c){return function(){return c}})({});function Aa(c,p){J.call(this),this.D=c,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Aa,J),i=Aa.prototype,i.open=function(c,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=p,this.readyState=1,So(this)},i.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(p.body=c),(this.D||a).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,To(this)),this.readyState=0},i.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,So(this)),this.g&&(this.readyState=3,So(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;hf(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function hf(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}i.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var p=c.value?c.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!c.done}))&&(this.response=this.responseText+=p)}c.done?To(this):So(this),this.readyState==3&&hf(this)}},i.Ra=function(c){this.g&&(this.response=this.responseText=c,To(this))},i.Qa=function(c){this.g&&(this.response=c,To(this))},i.ga=function(){this.g&&To(this)};function To(c){c.readyState=4,c.l=null,c.j=null,c.v=null,So(c)}i.setRequestHeader=function(c,p){this.u.append(c,p)},i.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],p=this.h.entries();for(var E=p.next();!E.done;)E=E.value,c.push(E[0]+": "+E[1]),E=p.next();return c.join(`\r
`)};function So(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Aa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function df(c){let p="";return F(c,function(E,C){p+=C,p+=":",p+=E,p+=`\r
`}),p}function El(c,p,E){e:{for(C in E){var C=!1;break e}C=!0}C||(E=df(E),typeof c=="string"?E!=null&&encodeURIComponent(String(E)):it(c,p,E))}function Vt(c){J.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Vt,J);var B0=/^https?$/i,z0=["POST","PUT"];i=Vt.prototype,i.Ha=function(c){this.J=c},i.ea=function(c,p,E,C){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);p=p?p.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():cs.g(),this.v=this.o?B(this.o):B(cs),this.g.onreadystatechange=f(this.Ea,this);try{this.B=!0,this.g.open(p,String(c),!0),this.B=!1}catch(K){ff(this,K);return}if(c=E||"",E=new Map(this.headers),C)if(Object.getPrototypeOf(C)===Object.prototype)for(var H in C)E.set(H,C[H]);else if(typeof C.keys=="function"&&typeof C.get=="function")for(const K of C.keys())E.set(K,C.get(K));else throw Error("Unknown input type for opt_headers: "+String(C));C=Array.from(E.keys()).find(K=>K.toLowerCase()=="content-type"),H=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(z0,p,void 0))||C||H||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[K,ge]of E)this.g.setRequestHeader(K,ge);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{gf(this),this.u=!0,this.g.send(c),this.u=!1}catch(K){ff(this,K)}};function ff(c,p){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=p,c.m=5,pf(c),ba(c)}function pf(c){c.A||(c.A=!0,we(c,"complete"),we(c,"error"))}i.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,we(this,"complete"),we(this,"abort"),ba(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ba(this,!0)),Vt.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?mf(this):this.bb())},i.bb=function(){mf(this)};function mf(c){if(c.h&&typeof o<"u"&&(!c.v[1]||Si(c)!=4||c.Z()!=2)){if(c.u&&Si(c)==4)Ie(c.Ea,0,c);else if(we(c,"readystatechange"),Si(c)==4){c.h=!1;try{const ge=c.Z();e:switch(ge){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var E;if(!(E=p)){var C;if(C=ge===0){var H=String(c.D).match(An)[1]||null;!H&&a.self&&a.self.location&&(H=a.self.location.protocol.slice(0,-1)),C=!B0.test(H?H.toLowerCase():"")}E=C}if(E)we(c,"complete"),we(c,"success");else{c.m=6;try{var K=2<Si(c)?c.g.statusText:""}catch{K=""}c.l=K+" ["+c.Z()+"]",pf(c)}}finally{ba(c)}}}}function ba(c,p){if(c.g){gf(c);const E=c.g,C=c.v[0]?()=>{}:null;c.g=null,c.v=null,p||we(c,"ready");try{E.onreadystatechange=C}catch{}}}function gf(c){c.I&&(a.clearTimeout(c.I),c.I=null)}i.isActive=function(){return!!this.g};function Si(c){return c.g?c.g.readyState:0}i.Z=function(){try{return 2<Si(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(c){if(this.g){var p=this.g.responseText;return c&&p.indexOf(c)==0&&(p=p.substring(c.length)),ut(p)}};function _f(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function G0(c){const p={};c=(c.g&&2<=Si(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let C=0;C<c.length;C++){if(P(c[C]))continue;var E=w(c[C]);const H=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const K=p[H]||[];p[H]=K,K.push(E)}x(p,function(C){return C.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function xo(c,p,E){return E&&E.internalChannelParams&&E.internalChannelParams[c]||p}function vf(c){this.Aa=0,this.i=[],this.j=new Dn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=xo("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=xo("baseRetryDelayMs",5e3,c),this.cb=xo("retryDelaySeedMs",1e4,c),this.Wa=xo("forwardChannelMaxRetries",2,c),this.wa=xo("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Je(c&&c.concurrentRequestLimit),this.Da=new k0,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=vf.prototype,i.la=8,i.G=1,i.connect=function(c,p,E,C){Lt(0),this.W=c,this.H=p||{},E&&C!==void 0&&(this.H.OSID=E,this.H.OAID=C),this.F=this.X,this.I=bf(this,null,this.W),Ia(this)};function Tl(c){if(yf(c),c.G==3){var p=c.U++,E=En(c.I);if(it(E,"SID",c.K),it(E,"RID",p),it(E,"TYPE","terminate"),wo(c,E),p=new ri(c,c.j,p),p.L=2,p.v=Qt(En(E)),E=!1,a.navigator&&a.navigator.sendBeacon)try{E=a.navigator.sendBeacon(p.v.toString(),"")}catch{}!E&&a.Image&&(new Image().src=p.v,E=!0),E||(p.g=Rf(p.j,null),p.g.ea(p.v)),p.F=Date.now(),$(p)}Af(c)}function Ra(c){c.g&&(xl(c),c.g.cancel(),c.g=null)}function yf(c){Ra(c),c.u&&(a.clearTimeout(c.u),c.u=null),Ca(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function Ia(c){if(!ke(c.h)&&!c.s){c.s=!0;var p=c.Ga;ce||k(),Y||(ce(),Y=!0),_e.add(p,c),c.B=0}}function H0(c,p){return ht(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=p.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=$i(f(c.Ga,c,p),Mf(c,c.B)),c.B++,!0)}i.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const H=new ri(this,this.j,c);let K=this.o;if(this.S&&(K?(K=T(K),y(K,this.S)):K=this.S),this.m!==null||this.O||(H.H=K,K=null),this.P)e:{for(var p=0,E=0;E<this.i.length;E++){t:{var C=this.i[E];if("__data__"in C.map&&(C=C.map.__data__,typeof C=="string")){C=C.length;break t}C=void 0}if(C===void 0)break;if(p+=C,4096<p){p=E;break e}if(p===4096||E===this.i.length-1){p=E+1;break e}}p=1e3}else p=1e3;p=Tf(this,H,p),E=En(this.I),it(E,"RID",c),it(E,"CVER",22),this.D&&it(E,"X-HTTP-Session-Id",this.D),wo(this,E),K&&(this.O?p="headers="+encodeURIComponent(String(df(K)))+"&"+p:this.m&&El(E,this.m,K)),Ot(this.h,H),this.Ua&&it(E,"TYPE","init"),this.P?(it(E,"$req",p),it(E,"SID","null"),H.T=!0,yo(H,E,null)):yo(H,E,p),this.G=2}}else this.G==3&&(c?Ef(this,c):this.i.length==0||ke(this.h)||Ef(this))};function Ef(c,p){var E;p?E=p.l:E=c.U++;const C=En(c.I);it(C,"SID",c.K),it(C,"RID",E),it(C,"AID",c.T),wo(c,C),c.m&&c.o&&El(C,c.m,c.o),E=new ri(c,c.j,E,c.B+1),c.m===null&&(E.H=c.o),p&&(c.i=p.D.concat(c.i)),p=Tf(c,E,1e3),E.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Ot(c.h,E),yo(E,C,p)}function wo(c,p){c.H&&F(c.H,function(E,C){it(p,C,E)}),c.l&&Et({},function(E,C){it(p,C,E)})}function Tf(c,p,E){E=Math.min(c.i.length,E);var C=c.l?f(c.l.Na,c.l,c):null;e:{var H=c.i;let K=-1;for(;;){const ge=["count="+E];K==-1?0<E?(K=H[0].g,ge.push("ofs="+K)):K=0:ge.push("ofs="+K);let Pt=!0;for(let on=0;on<E;on++){let St=H[on].g;const hn=H[on].map;if(St-=K,0>St)K=Math.max(0,H[on].g-100),Pt=!1;else try{V0(hn,ge,"req"+St+"_")}catch{C&&C(hn)}}if(Pt){C=ge.join("&");break e}}}return c=c.i.splice(0,E),p.D=c,C}function Sf(c){if(!c.g&&!c.u){c.Y=1;var p=c.Fa;ce||k(),Y||(ce(),Y=!0),_e.add(p,c),c.v=0}}function Sl(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=$i(f(c.Fa,c),Mf(c,c.v)),c.v++,!0)}i.Fa=function(){if(this.u=null,xf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=$i(f(this.ab,this),c)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Lt(10),Ra(this),xf(this))};function xl(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function xf(c){c.g=new ri(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var p=En(c.qa);it(p,"RID","rpc"),it(p,"SID",c.K),it(p,"AID",c.T),it(p,"CI",c.F?"0":"1"),!c.F&&c.ja&&it(p,"TO",c.ja),it(p,"TYPE","xmlhttp"),wo(c,p),c.m&&c.o&&El(p,c.m,c.o),c.L&&(c.g.I=c.L);var E=c.g;c=c.ia,E.L=1,E.v=Qt(En(p)),E.m=null,E.P=!0,I(E,c)}i.Za=function(){this.C!=null&&(this.C=null,Ra(this),Sl(this),Lt(19))};function Ca(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function wf(c,p){var E=null;if(c.g==p){Ca(c),xl(c),c.g=null;var C=2}else if(_t(c.h,p))E=p.D,Nt(c.h,p),C=1;else return;if(c.G!=0){if(p.o)if(C==1){E=p.m?p.m.length:0,p=Date.now()-p.F;var H=c.B;C=Ct(),we(C,new mo(C,E)),Ia(c)}else Sf(c);else if(H=p.s,H==3||H==0&&0<p.X||!(C==1&&H0(c,p)||C==2&&Sl(c)))switch(E&&0<E.length&&(p=c.h,p.i=p.i.concat(E)),H){case 1:br(c,5);break;case 4:br(c,10);break;case 3:br(c,6);break;default:br(c,2)}}}function Mf(c,p){let E=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(E*=2),E*p}function br(c,p){if(c.j.info("Error code "+p),p==2){var E=f(c.fb,c),C=c.Xa;const H=!C;C=new Ht(C||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||bt(C,"https"),Qt(C),H?O0(C.toString(),E):F0(C.toString(),E)}else Lt(2);c.G=0,c.l&&c.l.sa(p),Af(c),yf(c)}i.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Lt(2)):(this.j.info("Failed to ping google.com"),Lt(1))};function Af(c){if(c.G=0,c.ka=[],c.l){const p=gt(c.h);(p.length!=0||c.i.length!=0)&&(m(c.ka,p),m(c.ka,c.i),c.h.i.length=0,M(c.i),c.i.length=0),c.l.ra()}}function bf(c,p,E){var C=E instanceof Ht?En(E):new Ht(E);if(C.g!="")p&&(C.g=p+"."+C.g),sn(C,C.s);else{var H=a.location;C=H.protocol,p=p?p+"."+H.hostname:H.hostname,H=+H.port;var K=new Ht(null);C&&bt(K,C),p&&(K.g=p),H&&sn(K,H),E&&(K.l=E),C=K}return E=c.D,p=c.ya,E&&p&&it(C,E,p),it(C,"VER",c.la),wo(c,C),C}function Rf(c,p,E){if(p&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=c.Ca&&!c.pa?new Vt(new Ma({eb:E})):new Vt(c.pa),p.Ha(c.J),p}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function If(){}i=If.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Pa(){}Pa.prototype.g=function(c,p){return new Nn(c,p)};function Nn(c,p){J.call(this),this.g=new vf(p),this.l=c,this.h=p&&p.messageUrlParams||null,c=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(c?c["X-WebChannel-Content-Type"]=p.messageContentType:c={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(c?c["X-WebChannel-Client-Profile"]=p.va:c={"X-WebChannel-Client-Profile":p.va}),this.g.S=c,(c=p&&p.Sb)&&!P(c)&&(this.g.m=c),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!P(p)&&(this.g.D=p,c=this.h,c!==null&&p in c&&(c=this.h,p in c&&delete c[p])),this.j=new hs(this)}S(Nn,J),Nn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Nn.prototype.close=function(){Tl(this.g)},Nn.prototype.o=function(c){var p=this.g;if(typeof c=="string"){var E={};E.__data__=c,c=E}else this.u&&(E={},E.__data__=De(c),c=E);p.i.push(new Ke(p.Ya++,c)),p.G==3&&Ia(p)},Nn.prototype.N=function(){this.g.l=null,delete this.j,Tl(this.g),delete this.g,Nn.aa.N.call(this)};function Cf(c){ae.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var p=c.__sm__;if(p){e:{for(const E in p){c=E;break e}c=void 0}(this.i=c)&&(c=this.i,p=p!==null&&c in p?p[c]:void 0),this.data=p}else this.data=c}S(Cf,ae);function Pf(){Me.call(this),this.status=1}S(Pf,Me);function hs(c){this.g=c}S(hs,If),hs.prototype.ua=function(){we(this.g,"a")},hs.prototype.ta=function(c){we(this.g,new Cf(c))},hs.prototype.sa=function(c){we(this.g,new Pf)},hs.prototype.ra=function(){we(this.g,"b")},Pa.prototype.createWebChannel=Pa.prototype.g,Nn.prototype.send=Nn.prototype.o,Nn.prototype.open=Nn.prototype.m,Nn.prototype.close=Nn.prototype.close,B_=function(){return new Pa},V_=function(){return Ct()},k_=ye,hh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ei.NO_ERROR=0,Ei.TIMEOUT=8,Ei.HTTP_ERROR=6,vc=Ei,_o.COMPLETE="complete",F_=_o,Te.EventType=Q,Q.OPEN="a",Q.CLOSE="b",Q.ERROR="c",Q.MESSAGE="d",J.prototype.listen=J.prototype.K,Po=Te,Vt.prototype.listenOnce=Vt.prototype.L,Vt.prototype.getLastError=Vt.prototype.Ka,Vt.prototype.getLastErrorCode=Vt.prototype.Ba,Vt.prototype.getStatus=Vt.prototype.Z,Vt.prototype.getResponseJson=Vt.prototype.Oa,Vt.prototype.getResponseText=Vt.prototype.oa,Vt.prototype.send=Vt.prototype.ea,Vt.prototype.setWithCredentials=Vt.prototype.Ha,O_=Vt}).apply(typeof tc<"u"?tc:typeof self<"u"?self:typeof window<"u"?window:{});const um="@firebase/firestore",hm="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gn.UNAUTHENTICATED=new gn(null),gn.GOOGLE_CREDENTIALS=new gn("google-credentials-uid"),gn.FIRST_PARTY=new gn("first-party-uid"),gn.MOCK_USER=new gn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lo="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=new ed("@firebase/firestore");function Is(){return Zr.logLevel}function Pe(i,...e){if(Zr.logLevel<=dt.DEBUG){const t=e.map(md);Zr.debug(`Firestore (${lo}): ${i}`,...t)}}function Wi(i,...e){if(Zr.logLevel<=dt.ERROR){const t=e.map(md);Zr.error(`Firestore (${lo}): ${i}`,...t)}}function yr(i,...e){if(Zr.logLevel<=dt.WARN){const t=e.map(md);Zr.warn(`Firestore (${lo}): ${i}`,...t)}}function md(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(i,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,z_(i,n,t)}function z_(i,e,t){let n=`FIRESTORE (${lo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw Wi(n),new Error(n)}function At(i,e,t,n){let r="Unexpected state";typeof t=="string"?r=t:n=t,i||z_(e,r,n)}function tt(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class be extends Xi{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(gn.UNAUTHENTICATED)))}shutdown(){}}class dI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class fI{constructor(e){this.t=e,this.currentUser=gn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){At(this.o===void 0,42304);let n=this.i;const r=l=>this.i!==n?(n=this.i,t(l)):Promise.resolve();let s=new Fi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Fi,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const l=s;e.enqueueRetryable((async()=>{await l.promise,await r(this.currentUser)}))},a=l=>{Pe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>a(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Pe("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Fi)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.i!==e?(Pe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(At(typeof n.accessToken=="string",31837,{l:n}),new G_(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return At(e===null||typeof e=="string",2055,{h:e}),new gn(e)}}class pI{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=gn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class mI{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new pI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(gn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class dm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gI{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Kn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){At(this.o===void 0,3512);const n=s=>{s.error!=null&&Pe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,Pe("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable((()=>n(s)))};const r=s=>{Pe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((s=>r(s))),setTimeout((()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?r(s):Pe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new dm(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(At(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new dm(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<i;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const r=_I(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<t&&(n+=e.charAt(r[s]%62))}return n}}function at(i,e){return i<e?-1:i>e?1:0}function dh(i,e){let t=0;for(;t<i.length&&t<e.length;){const n=i.codePointAt(t),r=e.codePointAt(t);if(n!==r){if(n<128&&r<128)return at(n,r);{const s=H_(),o=vI(s.encode(fm(i,t)),s.encode(fm(e,t)));return o!==0?o:at(n,r)}}t+=n>65535?2:1}return at(i.length,e.length)}function fm(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function vI(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return at(i[t],e[t]);return at(i.length,e.length)}function Js(i,e,t){return i.length===e.length&&i.every(((n,r)=>t(n,e[r])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm="__name__";class oi{constructor(e,t,n){t===void 0?t=0:t>e.length&&je(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&je(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return oi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof oi?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const s=oi.compareSegments(e.get(r),t.get(r));if(s!==0)return s}return at(e.length,t.length)}static compareSegments(e,t){const n=oi.isNumericId(e),r=oi.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?oi.extractNumericId(e).compare(oi.extractNumericId(t)):dh(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return mr.fromString(e.substring(4,e.length-2))}}class Dt extends oi{construct(e,t,n){return new Dt(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new be(re.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((r=>r.length>0)))}return new Dt(t)}static emptyPath(){return new Dt([])}}const yI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ln extends oi{construct(e,t,n){return new ln(e,t,n)}static isValidIdentifier(e){return yI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ln.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===pm}static keyField(){return new ln([pm])}static fromServerFormat(e){const t=[];let n="",r=0;const s=()=>{if(n.length===0)throw new be(re.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new be(re.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new be(re.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(n+=a,r++):(s(),r++)}if(s(),o)throw new be(re.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ln(t)}static emptyPath(){return new ln([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.path=e}static fromPath(e){return new Ve(Dt.fromString(e))}static fromName(e){return new Ve(Dt.fromString(e).popFirst(5))}static empty(){return new Ve(Dt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Dt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Dt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ve(new Dt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(i,e,t){if(!t)throw new be(re.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function EI(i,e,t,n){if(e===!0&&n===!0)throw new be(re.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function mm(i){if(!Ve.isDocumentKey(i))throw new be(re.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function gm(i){if(Ve.isDocumentKey(i))throw new be(re.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function q_(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function rl(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":je(12329,{type:typeof i})}function es(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new be(re.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=rl(i);throw new be(re.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(i,e){const t={typeString:i};return e&&(t.value=e),t}function ga(i,e){if(!q_(i))throw new be(re.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const r=e[n].typeString,s="value"in e[n]?{value:e[n].value}:void 0;if(!(n in i)){t=`JSON missing required field: '${n}'`;break}const o=i[n];if(r&&typeof o!==r){t=`JSON field '${n}' must be a ${r}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${n}' field to equal '${s.value}'`;break}}if(t)throw new be(re.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m=-62135596800,vm=1e6;class Ut{static now(){return Ut.fromMillis(Date.now())}static fromDate(e){return Ut.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*vm);return new Ut(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new be(re.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new be(re.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<_m)throw new be(re.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new be(re.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/vm}_compareTo(e){return this.seconds===e.seconds?at(this.nanoseconds,e.nanoseconds):at(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ut._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ga(e,Ut._jsonSchema))return new Ut(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-_m;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ut._jsonSchemaVersion="firestore/timestamp/1.0",Ut._jsonSchema={type:$t("string",Ut._jsonSchemaVersion),seconds:$t("number"),nanoseconds:$t("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{static fromTimestamp(e){return new Ze(e)}static min(){return new Ze(new Ut(0,0))}static max(){return new Ze(new Ut(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=-1;function TI(i,e){const t=i.toTimestamp().seconds,n=i.toTimestamp().nanoseconds+1,r=Ze.fromTimestamp(n===1e9?new Ut(t+1,0):new Ut(t,n));return new Er(r,Ve.empty(),e)}function SI(i){return new Er(i.readTime,i.key,Qo)}class Er{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Er(Ze.min(),Ve.empty(),Qo)}static max(){return new Er(Ze.max(),Ve.empty(),Qo)}}function xI(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=Ve.comparator(i.documentKey,e.documentKey),t!==0?t:at(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class MI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uo(i){if(i.code!==re.FAILED_PRECONDITION||i.message!==wI)throw i;Pe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&je(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new oe(((n,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(n,r)},this.catchCallback=s=>{this.wrapFailure(t,s).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof oe?t:oe.resolve(t)}catch(t){return oe.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):oe.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):oe.reject(t)}static resolve(e){return new oe(((t,n)=>{t(e)}))}static reject(e){return new oe(((t,n)=>{n(e)}))}static waitFor(e){return new oe(((t,n)=>{let r=0,s=0,o=!1;e.forEach((a=>{++r,a.next((()=>{++s,o&&s===r&&t()}),(l=>n(l)))})),o=!0,s===r&&t()}))}static or(e){let t=oe.resolve(!1);for(const n of e)t=t.next((r=>r?oe.resolve(r):n()));return t}static forEach(e,t){const n=[];return e.forEach(((r,s)=>{n.push(t.call(this,r,s))})),this.waitFor(n)}static mapArray(e,t){return new oe(((n,r)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;t(e[u]).next((h=>{o[u]=h,++a,a===s&&n(o)}),(h=>r(h)))}}))}static doWhile(e,t){return new oe(((n,r)=>{const s=()=>{e()===!0?t().next((()=>{s()}),r):n()};s()}))}}function AI(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ho(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this._e(n),this.ae=n=>t.writeSequenceNumber(n))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}sl.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d=-1;function ol(i){return i==null}function kc(i){return i===0&&1/i==-1/0}function bI(i){return typeof i=="number"&&Number.isInteger(i)&&!kc(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_="";function RI(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=ym(e)),e=II(i.get(t),e);return ym(e)}function II(i,e){let t=e;const n=i.length;for(let r=0;r<n;r++){const s=i.charAt(r);switch(s){case"\0":t+="";break;case X_:t+="";break;default:t+=s}}return t}function ym(i){return i+X_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function is(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function j_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,t){this.comparator=e,this.root=t||cn.EMPTY}insert(e,t){return new kt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,cn.BLACK,null,null))}remove(e){return new kt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,cn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nc(this.root,e,this.comparator,!1)}getReverseIterator(){return new nc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nc(this.root,e,this.comparator,!0)}}class nc{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class cn{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=n??cn.RED,this.left=r??cn.EMPTY,this.right=s??cn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,s){return new cn(e??this.key,t??this.value,n??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):s===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return cn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return cn.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,cn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,cn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw je(43730,{key:this.key,value:this.value});if(this.right.isRed())throw je(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw je(27949);return e+(this.isRed()?0:1)}}cn.EMPTY=null,cn.RED=!0,cn.BLACK=!1;cn.EMPTY=new class{constructor(){this.size=0}get key(){throw je(57766)}get value(){throw je(16141)}get color(){throw je(16727)}get left(){throw je(29726)}get right(){throw je(36894)}copy(e,t,n,r,s){return this}insert(e,t,n){return new cn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.comparator=e,this.data=new kt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Tm(this.data.getIterator())}getIteratorFrom(e){return new Tm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof Zt)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,s=n.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Zt(this.comparator);return t.data=e,t}}class Tm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.fields=e,e.sort(ln.comparator)}static empty(){return new Zn([])}unionWith(e){let t=new Zt(ln.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Zn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Js(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new $_("Invalid base64 string: "+s):s}})(e);return new un(t)}static fromUint8Array(e){const t=(function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s})(e);return new un(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return at(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}un.EMPTY_BYTE_STRING=new un("");const CI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tr(i){if(At(!!i,39018),typeof i=="string"){let e=0;const t=CI.exec(i);if(At(!!t,46558,{timestamp:i}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const n=new Date(i);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:Wt(i.seconds),nanos:Wt(i.nanos)}}function Wt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Sr(i){return typeof i=="string"?un.fromBase64String(i):un.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_="server_timestamp",K_="__type__",J_="__previous_value__",Q_="__local_write_time__";function vd(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[K_])===null||t===void 0?void 0:t.stringValue)===Y_}function al(i){const e=i.mapValue.fields[J_];return vd(e)?al(e):e}function Zo(i){const e=Tr(i.mapValue.fields[Q_].timestampValue);return new Ut(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e,t,n,r,s,o,a,l,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=h}}const Vc="(default)";class ea{constructor(e,t){this.projectId=e,this.database=t||Vc}static empty(){return new ea("","")}get isDefaultDatabase(){return this.database===Vc}isEqual(e){return e instanceof ea&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_="__type__",DI="__max__",ic={mapValue:{}},ev="__vector__",Bc="value";function xr(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?vd(i)?4:NI(i)?9007199254740991:LI(i)?10:11:je(28295,{value:i})}function vi(i,e){if(i===e)return!0;const t=xr(i);if(t!==xr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Zo(i).isEqual(Zo(e));case 3:return(function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const o=Tr(r.timestampValue),a=Tr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(r,s){return Sr(r.bytesValue).isEqual(Sr(s.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(r,s){return Wt(r.geoPointValue.latitude)===Wt(s.geoPointValue.latitude)&&Wt(r.geoPointValue.longitude)===Wt(s.geoPointValue.longitude)})(i,e);case 2:return(function(r,s){if("integerValue"in r&&"integerValue"in s)return Wt(r.integerValue)===Wt(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const o=Wt(r.doubleValue),a=Wt(s.doubleValue);return o===a?kc(o)===kc(a):isNaN(o)&&isNaN(a)}return!1})(i,e);case 9:return Js(i.arrayValue.values||[],e.arrayValue.values||[],vi);case 10:case 11:return(function(r,s){const o=r.mapValue.fields||{},a=s.mapValue.fields||{};if(Em(o)!==Em(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!vi(o[l],a[l])))return!1;return!0})(i,e);default:return je(52216,{left:i})}}function ta(i,e){return(i.values||[]).find((t=>vi(t,e)))!==void 0}function Qs(i,e){if(i===e)return 0;const t=xr(i),n=xr(e);if(t!==n)return at(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return at(i.booleanValue,e.booleanValue);case 2:return(function(s,o){const a=Wt(s.integerValue||s.doubleValue),l=Wt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1})(i,e);case 3:return Sm(i.timestampValue,e.timestampValue);case 4:return Sm(Zo(i),Zo(e));case 5:return dh(i.stringValue,e.stringValue);case 6:return(function(s,o){const a=Sr(s),l=Sr(o);return a.compareTo(l)})(i.bytesValue,e.bytesValue);case 7:return(function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=at(a[u],l[u]);if(h!==0)return h}return at(a.length,l.length)})(i.referenceValue,e.referenceValue);case 8:return(function(s,o){const a=at(Wt(s.latitude),Wt(o.latitude));return a!==0?a:at(Wt(s.longitude),Wt(o.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return xm(i.arrayValue,e.arrayValue);case 10:return(function(s,o){var a,l,u,h;const d=s.fields||{},f=o.fields||{},_=(a=d[Bc])===null||a===void 0?void 0:a.arrayValue,S=(l=f[Bc])===null||l===void 0?void 0:l.arrayValue,M=at(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0);return M!==0?M:xm(_,S)})(i.mapValue,e.mapValue);case 11:return(function(s,o){if(s===ic.mapValue&&o===ic.mapValue)return 0;if(s===ic.mapValue)return 1;if(o===ic.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const f=dh(l[d],h[d]);if(f!==0)return f;const _=Qs(a[l[d]],u[h[d]]);if(_!==0)return _}return at(l.length,h.length)})(i.mapValue,e.mapValue);default:throw je(23264,{le:t})}}function Sm(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return at(i,e);const t=Tr(i),n=Tr(e),r=at(t.seconds,n.seconds);return r!==0?r:at(t.nanos,n.nanos)}function xm(i,e){const t=i.values||[],n=e.values||[];for(let r=0;r<t.length&&r<n.length;++r){const s=Qs(t[r],n[r]);if(s)return s}return at(t.length,n.length)}function Zs(i){return fh(i)}function fh(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const n=Tr(t);return`time(${n.seconds},${n.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return Sr(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return Ve.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let n="[",r=!0;for(const s of t.values||[])r?r=!1:n+=",",n+=fh(s);return n+"]"})(i.arrayValue):"mapValue"in i?(function(t){const n=Object.keys(t.fields||{}).sort();let r="{",s=!0;for(const o of n)s?s=!1:r+=",",r+=`${o}:${fh(t.fields[o])}`;return r+"}"})(i.mapValue):je(61005,{value:i})}function yc(i){switch(xr(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=al(i);return e?16+yc(e):16;case 5:return 2*i.stringValue.length;case 6:return Sr(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((r,s)=>r+yc(s)),0)})(i.arrayValue);case 10:case 11:return(function(n){let r=0;return is(n.fields,((s,o)=>{r+=s.length+yc(o)})),r})(i.mapValue);default:throw je(13486,{value:i})}}function wm(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function ph(i){return!!i&&"integerValue"in i}function yd(i){return!!i&&"arrayValue"in i}function Mm(i){return!!i&&"nullValue"in i}function Am(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Ec(i){return!!i&&"mapValue"in i}function LI(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[Z_])===null||t===void 0?void 0:t.stringValue)===ev}function zo(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return is(i.mapValue.fields,((t,n)=>e.mapValue.fields[t]=zo(n))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=zo(i.arrayValue.values[t]);return e}return Object.assign({},i)}function NI(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===DI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this.value=e}static empty(){return new zn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ec(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=zo(t)}setAll(e){let t=ln.emptyPath(),n={},r=[];e.forEach(((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,n,r),n={},r=[],t=a.popLast()}o?n[a.lastSegment()]=zo(o):r.push(a.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,r)}delete(e){const t=this.field(e.popLast());Ec(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return vi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Ec(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){is(t,((r,s)=>e[r]=s));for(const r of n)delete e[r]}clone(){return new zn(zo(this.value))}}function tv(i){const e=[];return is(i.fields,((t,n)=>{const r=new ln([t]);if(Ec(n)){const s=tv(n.mapValue).fields;if(s.length===0)e.push(r);else for(const o of s)e.push(r.child(o))}else e.push(r)})),new Zn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,t,n,r,s,o,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new _n(e,0,Ze.min(),Ze.min(),Ze.min(),zn.empty(),0)}static newFoundDocument(e,t,n,r){return new _n(e,1,t,Ze.min(),n,r,0)}static newNoDocument(e,t){return new _n(e,2,t,Ze.min(),Ze.min(),zn.empty(),0)}static newUnknownDocument(e,t){return new _n(e,3,t,Ze.min(),Ze.min(),zn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ze.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=zn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=zn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ze.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,t){this.position=e,this.inclusive=t}}function bm(i,e,t){let n=0;for(let r=0;r<i.position.length;r++){const s=e[r],o=i.position[r];if(s.field.isKeyField()?n=Ve.comparator(Ve.fromName(o.referenceValue),t.key):n=Qs(o,t.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function Rm(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!vi(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,t="asc"){this.field=e,this.dir=t}}function UI(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{}class jt extends nv{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new FI(e,t,n):t==="array-contains"?new BI(e,n):t==="in"?new zI(e,n):t==="not-in"?new GI(e,n):t==="array-contains-any"?new HI(e,n):new jt(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new kI(e,n):new VI(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Qs(t,this.value)):t!==null&&xr(this.value)===xr(t)&&this.matchesComparison(Qs(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return je(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ii extends nv{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new ii(e,t)}matches(e){return iv(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function iv(i){return i.op==="and"}function rv(i){return OI(i)&&iv(i)}function OI(i){for(const e of i.filters)if(e instanceof ii)return!1;return!0}function mh(i){if(i instanceof jt)return i.field.canonicalString()+i.op.toString()+Zs(i.value);if(rv(i))return i.filters.map((e=>mh(e))).join(",");{const e=i.filters.map((t=>mh(t))).join(",");return`${i.op}(${e})`}}function sv(i,e){return i instanceof jt?(function(n,r){return r instanceof jt&&n.op===r.op&&n.field.isEqual(r.field)&&vi(n.value,r.value)})(i,e):i instanceof ii?(function(n,r){return r instanceof ii&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce(((s,o,a)=>s&&sv(o,r.filters[a])),!0):!1})(i,e):void je(19439)}function ov(i){return i instanceof jt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Zs(t.value)}`})(i):i instanceof ii?(function(t){return t.op.toString()+" {"+t.getFilters().map(ov).join(" ,")+"}"})(i):"Filter"}class FI extends jt{constructor(e,t,n){super(e,t,n),this.key=Ve.fromName(n.referenceValue)}matches(e){const t=Ve.comparator(e.key,this.key);return this.matchesComparison(t)}}class kI extends jt{constructor(e,t){super(e,"in",t),this.keys=av("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class VI extends jt{constructor(e,t){super(e,"not-in",t),this.keys=av("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function av(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((n=>Ve.fromName(n.referenceValue)))}class BI extends jt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return yd(t)&&ta(t.arrayValue,this.value)}}class zI extends jt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ta(this.value.arrayValue,t)}}class GI extends jt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ta(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ta(this.value.arrayValue,t)}}class HI extends jt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!yd(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>ta(this.value.arrayValue,n)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,t=null,n=[],r=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.Pe=null}}function Im(i,e=null,t=[],n=[],r=null,s=null,o=null){return new WI(i,e,t,n,r,s,o)}function Ed(i){const e=tt(i);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>mh(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(s){return s.field.canonicalString()+s.dir})(n))).join(","),ol(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>Zs(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>Zs(n))).join(",")),e.Pe=t}return e.Pe}function Td(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!UI(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!sv(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Rm(i.startAt,e.startAt)&&Rm(i.endAt,e.endAt)}function gh(i){return Ve.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,t=null,n=[],r=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function qI(i,e,t,n,r,s,o,a){return new fo(i,e,t,n,r,s,o,a)}function Sd(i){return new fo(i)}function Cm(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function cv(i){return i.collectionGroup!==null}function Go(i){const e=tt(i);if(e.Te===null){e.Te=[];const t=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Zt(ln.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(a=a.add(u.field))}))})),a})(e).forEach((s=>{t.has(s.canonicalString())||s.isKeyField()||e.Te.push(new na(s,n))})),t.has(ln.keyField().canonicalString())||e.Te.push(new na(ln.keyField(),n))}return e.Te}function fi(i){const e=tt(i);return e.Ie||(e.Ie=XI(e,Go(i))),e.Ie}function XI(i,e){if(i.limitType==="F")return Im(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((r=>{const s=r.dir==="desc"?"asc":"desc";return new na(r.field,s)}));const t=i.endAt?new zc(i.endAt.position,i.endAt.inclusive):null,n=i.startAt?new zc(i.startAt.position,i.startAt.inclusive):null;return Im(i.path,i.collectionGroup,e,i.filters,i.limit,t,n)}}function _h(i,e){const t=i.filters.concat([e]);return new fo(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function Gc(i,e,t){return new fo(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function cl(i,e){return Td(fi(i),fi(e))&&i.limitType===e.limitType}function lv(i){return`${Ed(fi(i))}|lt:${i.limitType}`}function Cs(i){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((r=>ov(r))).join(", ")}]`),ol(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((r=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(r))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((r=>Zs(r))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((r=>Zs(r))).join(",")),`Target(${n})`})(fi(i))}; limitType=${i.limitType})`}function ll(i,e){return e.isFoundDocument()&&(function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):Ve.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)})(i,e)&&(function(n,r){for(const s of Go(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0})(i,e)&&(function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0})(i,e)&&(function(n,r){return!(n.startAt&&!(function(o,a,l){const u=bm(o,a,l);return o.inclusive?u<=0:u<0})(n.startAt,Go(n),r)||n.endAt&&!(function(o,a,l){const u=bm(o,a,l);return o.inclusive?u>=0:u>0})(n.endAt,Go(n),r))})(i,e)}function jI(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function uv(i){return(e,t)=>{let n=!1;for(const r of Go(i)){const s=$I(r,e,t);if(s!==0)return s;n=n||r.field.isKeyField()}return 0}}function $I(i,e,t){const n=i.field.isKeyField()?Ve.comparator(e.key,t.key):(function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Qs(l,u):je(42886)})(i.field,e,t);switch(i.dir){case"asc":return n;case"desc":return-1*n;default:return je(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[r,s]of n)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return n.length===1?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){is(this.inner,((t,n)=>{for(const[r,s]of n)e(r,s)}))}isEmpty(){return j_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=new kt(Ve.comparator);function qi(){return YI}const hv=new kt(Ve.comparator);function Do(...i){let e=hv;for(const t of i)e=e.insert(t.key,t);return e}function dv(i){let e=hv;return i.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Hr(){return Ho()}function fv(){return Ho()}function Ho(){return new rs((i=>i.toString()),((i,e)=>i.isEqual(e)))}const KI=new kt(Ve.comparator),JI=new Zt(Ve.comparator);function pt(...i){let e=JI;for(const t of i)e=e.add(t);return e}const QI=new Zt(at);function ZI(){return QI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:kc(e)?"-0":e}}function pv(i){return{integerValue:""+i}}function eC(i,e){return bI(e)?pv(e):xd(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(){this._=void 0}}function tC(i,e,t){return i instanceof ia?(function(r,s){const o={fields:{[K_]:{stringValue:Y_},[Q_]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&vd(s)&&(s=al(s)),s&&(o.fields[J_]=s),{mapValue:o}})(t,e):i instanceof ra?gv(i,e):i instanceof sa?_v(i,e):(function(r,s){const o=mv(r,s),a=Pm(o)+Pm(r.Ee);return ph(o)&&ph(r.Ee)?pv(a):xd(r.serializer,a)})(i,e)}function nC(i,e,t){return i instanceof ra?gv(i,e):i instanceof sa?_v(i,e):t}function mv(i,e){return i instanceof Hc?(function(n){return ph(n)||(function(s){return!!s&&"doubleValue"in s})(n)})(e)?e:{integerValue:0}:null}class ia extends ul{}class ra extends ul{constructor(e){super(),this.elements=e}}function gv(i,e){const t=vv(e);for(const n of i.elements)t.some((r=>vi(r,n)))||t.push(n);return{arrayValue:{values:t}}}class sa extends ul{constructor(e){super(),this.elements=e}}function _v(i,e){let t=vv(e);for(const n of i.elements)t=t.filter((r=>!vi(r,n)));return{arrayValue:{values:t}}}class Hc extends ul{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Pm(i){return Wt(i.integerValue||i.doubleValue)}function vv(i){return yd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,t){this.field=e,this.transform=t}}function rC(i,e){return i.field.isEqual(e.field)&&(function(n,r){return n instanceof ra&&r instanceof ra||n instanceof sa&&r instanceof sa?Js(n.elements,r.elements,vi):n instanceof Hc&&r instanceof Hc?vi(n.Ee,r.Ee):n instanceof ia&&r instanceof ia})(i.transform,e.transform)}class sC{constructor(e,t){this.version=e,this.transformResults=t}}class ki{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ki}static exists(e){return new ki(void 0,e)}static updateTime(e){return new ki(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Tc(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class hl{}function yv(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new Tv(i.key,ki.none()):new _a(i.key,i.data,ki.none());{const t=i.data,n=zn.empty();let r=new Zt(ln.comparator);for(let s of e.fields)if(!r.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?n.delete(s):n.set(s,o),r=r.add(s)}return new ss(i.key,n,new Zn(r.toArray()),ki.none())}}function oC(i,e,t){i instanceof _a?(function(r,s,o){const a=r.value.clone(),l=Lm(r.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(i,e,t):i instanceof ss?(function(r,s,o){if(!Tc(r.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Lm(r.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Ev(r)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(i,e,t):(function(r,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function Wo(i,e,t,n){return i instanceof _a?(function(s,o,a,l){if(!Tc(s.precondition,o))return a;const u=s.value.clone(),h=Nm(s.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(i,e,t,n):i instanceof ss?(function(s,o,a,l){if(!Tc(s.precondition,o))return a;const u=Nm(s.fieldTransforms,l,o),h=o.data;return h.setAll(Ev(s)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map((d=>d.field)))})(i,e,t,n):(function(s,o,a){return Tc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(i,e,t)}function aC(i,e){let t=null;for(const n of i.fieldTransforms){const r=e.data.field(n.field),s=mv(n.transform,r||null);s!=null&&(t===null&&(t=zn.empty()),t.set(n.field,s))}return t||null}function Dm(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Js(n,r,((s,o)=>rC(s,o)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class _a extends hl{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ss extends hl{constructor(e,t,n,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ev(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=i.data.field(t);e.set(t,n)}})),e}function Lm(i,e,t){const n=new Map;At(i.length===t.length,32656,{Ae:t.length,Re:i.length});for(let r=0;r<t.length;r++){const s=i[r],o=s.transform,a=e.data.field(s.field);n.set(s.field,nC(o,a,t[r]))}return n}function Nm(i,e,t){const n=new Map;for(const r of i){const s=r.transform,o=t.data.field(r.field);n.set(r.field,tC(s,o,e))}return n}class Tv extends hl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cC extends hl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&oC(s,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Wo(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Wo(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=fv();return this.mutations.forEach((r=>{const s=e.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(r.key)?null:a;const l=yv(o,a);l!==null&&n.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(Ze.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),pt())}isEqual(e){return this.batchId===e.batchId&&Js(this.mutations,e.mutations,((t,n)=>Dm(t,n)))&&Js(this.baseMutations,e.baseMutations,((t,n)=>Dm(t,n)))}}class wd{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){At(e.mutations.length===n.length,58842,{Ve:e.mutations.length,me:n.length});let r=(function(){return KI})();const s=e.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,n[o].version);return new wd(e,t,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xt,vt;function dC(i){switch(i){case re.OK:return je(64938);case re.CANCELLED:case re.UNKNOWN:case re.DEADLINE_EXCEEDED:case re.RESOURCE_EXHAUSTED:case re.INTERNAL:case re.UNAVAILABLE:case re.UNAUTHENTICATED:return!1;case re.INVALID_ARGUMENT:case re.NOT_FOUND:case re.ALREADY_EXISTS:case re.PERMISSION_DENIED:case re.FAILED_PRECONDITION:case re.ABORTED:case re.OUT_OF_RANGE:case re.UNIMPLEMENTED:case re.DATA_LOSS:return!0;default:return je(15467,{code:i})}}function Sv(i){if(i===void 0)return Wi("GRPC error has no .code"),re.UNKNOWN;switch(i){case Xt.OK:return re.OK;case Xt.CANCELLED:return re.CANCELLED;case Xt.UNKNOWN:return re.UNKNOWN;case Xt.DEADLINE_EXCEEDED:return re.DEADLINE_EXCEEDED;case Xt.RESOURCE_EXHAUSTED:return re.RESOURCE_EXHAUSTED;case Xt.INTERNAL:return re.INTERNAL;case Xt.UNAVAILABLE:return re.UNAVAILABLE;case Xt.UNAUTHENTICATED:return re.UNAUTHENTICATED;case Xt.INVALID_ARGUMENT:return re.INVALID_ARGUMENT;case Xt.NOT_FOUND:return re.NOT_FOUND;case Xt.ALREADY_EXISTS:return re.ALREADY_EXISTS;case Xt.PERMISSION_DENIED:return re.PERMISSION_DENIED;case Xt.FAILED_PRECONDITION:return re.FAILED_PRECONDITION;case Xt.ABORTED:return re.ABORTED;case Xt.OUT_OF_RANGE:return re.OUT_OF_RANGE;case Xt.UNIMPLEMENTED:return re.UNIMPLEMENTED;case Xt.DATA_LOSS:return re.DATA_LOSS;default:return je(39323,{code:i})}}(vt=Xt||(Xt={}))[vt.OK=0]="OK",vt[vt.CANCELLED=1]="CANCELLED",vt[vt.UNKNOWN=2]="UNKNOWN",vt[vt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",vt[vt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",vt[vt.NOT_FOUND=5]="NOT_FOUND",vt[vt.ALREADY_EXISTS=6]="ALREADY_EXISTS",vt[vt.PERMISSION_DENIED=7]="PERMISSION_DENIED",vt[vt.UNAUTHENTICATED=16]="UNAUTHENTICATED",vt[vt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",vt[vt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",vt[vt.ABORTED=10]="ABORTED",vt[vt.OUT_OF_RANGE=11]="OUT_OF_RANGE",vt[vt.UNIMPLEMENTED=12]="UNIMPLEMENTED",vt[vt.INTERNAL=13]="INTERNAL",vt[vt.UNAVAILABLE=14]="UNAVAILABLE",vt[vt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC=new mr([4294967295,4294967295],0);function Um(i){const e=H_().encode(i),t=new U_;return t.update(e),new Uint8Array(t.digest())}function Om(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),r=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new mr([t,n],0),new mr([r,s],0)]}class Md{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Lo(`Invalid padding: ${t}`);if(n<0)throw new Lo(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Lo(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Lo(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=mr.fromNumber(this.fe)}pe(e,t,n){let r=e.add(t.multiply(mr.fromNumber(n)));return r.compare(fC)===1&&(r=new mr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Um(e),[n,r]=Om(t);for(let s=0;s<this.hashCount;s++){const o=this.pe(n,r,s);if(!this.ye(o))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Md(s,r,t);return n.forEach((a=>o.insert(a))),o}insert(e){if(this.fe===0)return;const t=Um(e),[n,r]=Om(t);for(let s=0;s<this.hashCount;s++){const o=this.pe(n,r,s);this.we(o)}}we(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Lo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,t,n,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,va.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new dl(Ze.min(),r,new kt(at),qi(),pt())}}class va{constructor(e,t,n,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new va(n,t,pt(),pt(),pt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,t,n,r){this.Se=e,this.removedTargetIds=t,this.key=n,this.be=r}}class xv{constructor(e,t){this.targetId=e,this.De=t}}class wv{constructor(e,t,n=un.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Fm{constructor(){this.ve=0,this.Ce=km(),this.Fe=un.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=pt(),t=pt(),n=pt();return this.Ce.forEach(((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:je(38017,{changeType:s})}})),new va(this.Fe,this.Me,e,t,n)}ke(){this.xe=!1,this.Ce=km()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,At(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class pC{constructor(e){this.We=e,this.Ge=new Map,this.ze=qi(),this.je=rc(),this.Je=rc(),this.He=new kt(at)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const n=this.tt(t);switch(e.state){case 0:this.nt(t)&&n.Be(e.resumeToken);break;case 1:n.Ue(),n.Oe||n.ke(),n.Be(e.resumeToken);break;case 2:n.Ue(),n.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(n.Ke(),n.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),n.Be(e.resumeToken));break;default:je(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((n,r)=>{this.nt(r)&&t(r)}))}it(e){const t=e.targetId,n=e.De.count,r=this.st(t);if(r){const s=r.target;if(gh(s))if(n===0){const o=new Ve(s.path);this.Xe(t,o,_n.newNoDocument(o,Ze.min()))}else At(n===1,20013,{expectedCount:n});else{const o=this.ot(t);if(o!==n){const a=this._t(e),l=a?this.ut(a,e,o):1;if(l!==0){this.rt(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,u)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:s=0}=t;let o,a;try{o=Sr(n).toUint8Array()}catch(l){if(l instanceof $_)return yr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Md(o,r,s)}catch(l){return yr(l instanceof Lo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.fe===0?null:a}ut(e,t,n){return t.De.count===n-this.ht(e,t.targetId)?0:2}ht(e,t){const n=this.We.getRemoteKeysForTarget(t);let r=0;return n.forEach((s=>{const o=this.We.lt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Xe(t,s,null),r++)})),r}Pt(e){const t=new Map;this.Ge.forEach(((s,o)=>{const a=this.st(o);if(a){if(s.current&&gh(a.target)){const l=new Ve(a.target.path);this.Tt(l).has(o)||this.It(o,l)||this.Xe(o,l,_n.newNoDocument(l,e))}s.Ne&&(t.set(o,s.Le()),s.ke())}}));let n=pt();this.Je.forEach(((s,o)=>{let a=!0;o.forEachWhile((l=>{const u=this.st(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(n=n.add(s))})),this.ze.forEach(((s,o)=>o.setReadTime(e)));const r=new dl(e,t,this.He,this.ze,n);return this.ze=qi(),this.je=rc(),this.Je=rc(),this.He=new kt(at),r}Ze(e,t){if(!this.nt(e))return;const n=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,n),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,n){if(!this.nt(e))return;const r=this.tt(e);this.It(e,t)?r.qe(t,1):r.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),n&&(this.ze=this.ze.insert(t,n))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Fm,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Zt(at),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Zt(at),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||Pe("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Fm),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function rc(){return new kt(Ve.comparator)}function km(){return new kt(Ve.comparator)}const mC={asc:"ASCENDING",desc:"DESCENDING"},gC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_C={and:"AND",or:"OR"};class vC{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function vh(i,e){return i.useProto3Json||ol(e)?e:{value:e}}function Wc(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mv(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function yC(i,e){return Wc(i,e.toTimestamp())}function pi(i){return At(!!i,49232),Ze.fromTimestamp((function(t){const n=Tr(t);return new Ut(n.seconds,n.nanos)})(i))}function Ad(i,e){return yh(i,e).canonicalString()}function yh(i,e){const t=(function(r){return new Dt(["projects",r.projectId,"databases",r.database])})(i).child("documents");return e===void 0?t:t.child(e)}function Av(i){const e=Dt.fromString(i);return At(Pv(e),10190,{key:e.toString()}),e}function Eh(i,e){return Ad(i.databaseId,e.path)}function cu(i,e){const t=Av(e);if(t.get(1)!==i.databaseId.projectId)throw new be(re.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new be(re.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new Ve(Rv(t))}function bv(i,e){return Ad(i.databaseId,e)}function EC(i){const e=Av(i);return e.length===4?Dt.emptyPath():Rv(e)}function Th(i){return new Dt(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Rv(i){return At(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function Vm(i,e,t){return{name:Eh(i,e),fields:t.value.mapValue.fields}}function TC(i,e){let t;if("targetChange"in e){e.targetChange;const n=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:je(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=(function(u,h){return u.useProto3Json?(At(h===void 0||typeof h=="string",58123),un.fromBase64String(h||"")):(At(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),un.fromUint8Array(h||new Uint8Array))})(i,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&(function(u){const h=u.code===void 0?re.UNKNOWN:Sv(u.code);return new be(h,u.message||"")})(o);t=new wv(n,r,s,a||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const r=cu(i,n.document.name),s=pi(n.document.updateTime),o=n.document.createTime?pi(n.document.createTime):Ze.min(),a=new zn({mapValue:{fields:n.document.fields}}),l=_n.newFoundDocument(r,s,o,a),u=n.targetIds||[],h=n.removedTargetIds||[];t=new Sc(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const r=cu(i,n.document),s=n.readTime?pi(n.readTime):Ze.min(),o=_n.newNoDocument(r,s),a=n.removedTargetIds||[];t=new Sc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const r=cu(i,n.document),s=n.removedTargetIds||[];t=new Sc([],s,r,null)}else{if(!("filter"in e))return je(11601,{At:e});{e.filter;const n=e.filter;n.targetId;const{count:r=0,unchangedNames:s}=n,o=new hC(r,s),a=n.targetId;t=new xv(a,o)}}return t}function SC(i,e){let t;if(e instanceof _a)t={update:Vm(i,e.key,e.value)};else if(e instanceof Tv)t={delete:Eh(i,e.key)};else if(e instanceof ss)t={update:Vm(i,e.key,e.data),updateMask:PC(e.fieldMask)};else{if(!(e instanceof cC))return je(16599,{Rt:e.type});t={verify:Eh(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(s,o){const a=o.transform;if(a instanceof ia)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ra)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof sa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Hc)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw je(20930,{transform:o.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(r,s){return s.updateTime!==void 0?{updateTime:yC(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:je(27497)})(i,e.precondition)),t}function xC(i,e){return i&&i.length>0?(At(e!==void 0,14353),i.map((t=>(function(r,s){let o=r.updateTime?pi(r.updateTime):pi(s);return o.isEqual(Ze.min())&&(o=pi(s)),new sC(o,r.transformResults||[])})(t,e)))):[]}function wC(i,e){return{documents:[bv(i,e.path)]}}function MC(i,e){const t={structuredQuery:{}},n=e.path;let r;e.collectionGroup!==null?(r=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=bv(i,r);const s=(function(u){if(u.length!==0)return Cv(ii.create(u,"and"))})(e.filters);s&&(t.structuredQuery.where=s);const o=(function(u){if(u.length!==0)return u.map((h=>(function(f){return{field:Ps(f.field),direction:RC(f.dir)}})(h)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=vh(i,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{Vt:t,parent:r}}function AC(i){let e=EC(i.parent);const t=i.structuredQuery,n=t.from?t.from.length:0;let r=null;if(n>0){At(n===1,65062);const h=t.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let s=[];t.where&&(s=(function(d){const f=Iv(d);return f instanceof ii&&rv(f)?f.getFilters():[f]})(t.where));let o=[];t.orderBy&&(o=(function(d){return d.map((f=>(function(S){return new na(Ds(S.field),(function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(S.direction))})(f)))})(t.orderBy));let a=null;t.limit&&(a=(function(d){let f;return f=typeof d=="object"?d.value:d,ol(f)?null:f})(t.limit));let l=null;t.startAt&&(l=(function(d){const f=!!d.before,_=d.values||[];return new zc(_,f)})(t.startAt));let u=null;return t.endAt&&(u=(function(d){const f=!d.before,_=d.values||[];return new zc(_,f)})(t.endAt)),qI(e,r,o,s,a,"F",l,u)}function bC(i,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return je(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Iv(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Ds(t.unaryFilter.field);return jt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Ds(t.unaryFilter.field);return jt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ds(t.unaryFilter.field);return jt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ds(t.unaryFilter.field);return jt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return je(61313);default:return je(60726)}})(i):i.fieldFilter!==void 0?(function(t){return jt.create(Ds(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return je(58110);default:return je(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return ii.create(t.compositeFilter.filters.map((n=>Iv(n))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return je(1026)}})(t.compositeFilter.op))})(i):je(30097,{filter:i})}function RC(i){return mC[i]}function IC(i){return gC[i]}function CC(i){return _C[i]}function Ps(i){return{fieldPath:i.canonicalString()}}function Ds(i){return ln.fromServerFormat(i.fieldPath)}function Cv(i){return i instanceof jt?(function(t){if(t.op==="=="){if(Am(t.value))return{unaryFilter:{field:Ps(t.field),op:"IS_NAN"}};if(Mm(t.value))return{unaryFilter:{field:Ps(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Am(t.value))return{unaryFilter:{field:Ps(t.field),op:"IS_NOT_NAN"}};if(Mm(t.value))return{unaryFilter:{field:Ps(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ps(t.field),op:IC(t.op),value:t.value}}})(i):i instanceof ii?(function(t){const n=t.getFilters().map((r=>Cv(r)));return n.length===1?n[0]:{compositeFilter:{op:CC(t.op),filters:n}}})(i):je(54877,{filter:i})}function PC(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Pv(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t,n,r,s=Ze.min(),o=Ze.min(),a=un.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e){this.gt=e}}function LC(i){const e=AC({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Gc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(){this.Dn=new UC}addToCollectionParentIndex(e,t){return this.Dn.add(t),oe.resolve()}getCollectionParents(e,t){return oe.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return oe.resolve()}deleteFieldIndex(e,t){return oe.resolve()}deleteAllFieldIndexes(e){return oe.resolve()}createTargetIndexes(e,t){return oe.resolve()}getDocumentsMatchingTarget(e,t){return oe.resolve(null)}getIndexType(e,t){return oe.resolve(0)}getFieldIndexes(e,t){return oe.resolve([])}getNextCollectionGroupToUpdate(e){return oe.resolve(null)}getMinOffset(e,t){return oe.resolve(Er.min())}getMinOffsetFromCollectionGroup(e,t){return oe.resolve(Er.min())}updateCollectionGroup(e,t,n){return oe.resolve()}updateIndexEntries(e,t){return oe.resolve()}}class UC{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Zt(Dt.comparator),s=!r.has(n);return this.index[t]=r.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Zt(Dt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Dv=41943040;class Rn{static withCacheSize(e){return new Rn(e,Rn.DEFAULT_COLLECTION_PERCENTILE,Rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rn.DEFAULT_COLLECTION_PERCENTILE=10,Rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Rn.DEFAULT=new Rn(Dv,Rn.DEFAULT_COLLECTION_PERCENTILE,Rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Rn.DISABLED=new Rn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new eo(0)}static ur(){return new eo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm="LruGarbageCollector",OC=1048576;function Gm([i,e],[t,n]){const r=at(i,t);return r===0?at(e,n):r}class FC{constructor(e){this.Tr=e,this.buffer=new Zt(Gm),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Gm(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class kC{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){Pe(zm,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ho(t)?Pe(zm,"Ignoring IndexedDB error during garbage collection: ",t):await uo(t)}await this.Rr(3e5)}))}}class VC{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return oe.resolve(sl.ue);const n=new FC(t);return this.Vr.forEachTarget(e,(r=>n.Er(r.sequenceNumber))).next((()=>this.Vr.gr(e,(r=>n.Er(r))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(Pe("LruGarbageCollector","Garbage collection skipped; disabled"),oe.resolve(Bm)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(Pe("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Bm):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let n,r,s,o,a,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((d=>(d>this.params.maximumSequenceNumbersToCollect?(Pe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),r=this.params.maximumSequenceNumbersToCollect):r=d,o=Date.now(),this.nthSequenceNumber(e,r)))).next((d=>(n=d,a=Date.now(),this.removeTargets(e,n,t)))).next((d=>(s=d,l=Date.now(),this.removeOrphanedDocuments(e,n)))).next((d=>(u=Date.now(),Is()<=dt.DEBUG&&Pe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),oe.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:d}))))}}function BC(i,e){return new VC(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(){this.changes=new rs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,_n.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?oe.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(n!==null&&Wo(n.mutation,r,Zn.empty(),Ut.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,pt()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=pt()){const r=Hr();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((s=>{let o=Do();return s.forEach(((a,l)=>{o=o.insert(a,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const n=Hr();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,pt())))}populateOverlays(e,t,n){const r=[];return n.forEach((s=>{t.has(s)||r.push(s)})),this.documentOverlayCache.getOverlays(e,r).next((s=>{s.forEach(((o,a)=>{t.set(o,a)}))}))}computeViews(e,t,n,r){let s=qi();const o=Ho(),a=(function(){return Ho()})();return t.forEach(((l,u)=>{const h=n.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof ss)?s=s.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Wo(h.mutation,u,h.mutation.getFieldMask(),Ut.now())):o.set(u.key,Zn.empty())})),this.recalculateAndSaveOverlays(e,s).next((l=>(l.forEach(((u,h)=>o.set(u,h))),t.forEach(((u,h)=>{var d;return a.set(u,new GC(h,(d=o.get(u))!==null&&d!==void 0?d:null))})),a)))}recalculateAndSaveOverlays(e,t){const n=Ho();let r=new kt(((o,a)=>o-a)),s=pt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const a of o)a.keys().forEach((l=>{const u=t.get(l);if(u===null)return;let h=n.get(l)||Zn.empty();h=a.applyToLocalView(u,h),n.set(l,h);const d=(r.get(a.batchId)||pt()).add(l);r=r.insert(a.batchId,d)}))})).next((()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=fv();h.forEach((f=>{if(!s.has(f)){const _=yv(t.get(f),n.get(f));_!==null&&d.set(f,_),s=s.add(f)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return oe.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,r){return(function(o){return Ve.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):cv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-s.size):oe.resolve(Hr());let a=Qo,l=s;return o.next((u=>oe.forEach(u,((h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(h)?oe.resolve():this.remoteDocumentCache.getEntry(e,h).next((f=>{l=l.insert(h,f)}))))).next((()=>this.populateOverlays(e,u,s))).next((()=>this.computeViews(e,l,u,pt()))).next((h=>({batchId:a,changes:dv(h)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ve(t)).next((n=>{let r=Do();return n.isFoundDocument()&&(r=r.insert(n.key,n)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const s=t.collectionGroup;let o=Do();return this.indexManager.getCollectionParents(e,s).next((a=>oe.forEach(a,(l=>{const u=(function(d,f){return new fo(f,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)})(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,n,r).next((h=>{h.forEach(((d,f)=>{o=o.insert(d,f)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,r)))).next((o=>{s.forEach(((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,_n.newInvalidDocument(h)))}));let a=Do();return o.forEach(((l,u)=>{const h=s.get(l);h!==void 0&&Wo(h.mutation,u,Zn.empty(),Ut.now()),ll(t,u)&&(a=a.insert(l,u))})),a}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return oe.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:pi(r.createTime)}})(t)),oe.resolve()}getNamedQuery(e,t){return oe.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(r){return{name:r.name,query:LC(r.bundledQuery),readTime:pi(r.readTime)}})(t)),oe.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(){this.overlays=new kt(Ve.comparator),this.kr=new Map}getOverlay(e,t){return oe.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Hr();return oe.forEach(t,(r=>this.getOverlay(e,r).next((s=>{s!==null&&n.set(r,s)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((r,s)=>{this.wt(e,t,s)})),oe.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.kr.get(n);return r!==void 0&&(r.forEach((s=>this.overlays=this.overlays.remove(s))),this.kr.delete(n)),oe.resolve()}getOverlaysForCollection(e,t,n){const r=Hr(),s=t.length+1,o=new Ve(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>n&&r.set(l.getKey(),l)}return oe.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let s=new kt(((u,h)=>u-h));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>n){let h=s.get(u.largestBatchId);h===null&&(h=Hr(),s=s.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Hr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,h)=>a.set(u,h))),!(a.size()>=r)););return oe.resolve(a)}wt(e,t,n){const r=this.overlays.get(n.key);if(r!==null){const o=this.kr.get(r.largestBatchId).delete(n.key);this.kr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new uC(t,n));let s=this.kr.get(t);s===void 0&&(s=pt(),this.kr.set(t,s)),this.kr.set(t,s.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(){this.sessionToken=un.EMPTY_BYTE_STRING}getSessionToken(e){return oe.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,oe.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(){this.qr=new Zt(rn.Qr),this.$r=new Zt(rn.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const n=new rn(e,t);this.qr=this.qr.add(n),this.$r=this.$r.add(n)}Kr(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Wr(new rn(e,t))}Gr(e,t){e.forEach((n=>this.removeReference(n,t)))}zr(e){const t=new Ve(new Dt([])),n=new rn(t,e),r=new rn(t,e+1),s=[];return this.$r.forEachInRange([n,r],(o=>{this.Wr(o),s.push(o.key)})),s}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new Ve(new Dt([])),n=new rn(t,e),r=new rn(t,e+1);let s=pt();return this.$r.forEachInRange([n,r],(o=>{s=s.add(o.key)})),s}containsKey(e){const t=new rn(e,0),n=this.qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class rn{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return Ve.comparator(e.key,t.key)||at(e.Hr,t.Hr)}static Ur(e,t){return at(e.Hr,t.Hr)||Ve.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Zt(rn.Qr)}checkEmpty(e){return oe.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,r){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new lC(s,t,n,r);this.mutationQueue.push(o);for(const a of r)this.Yr=this.Yr.add(new rn(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return oe.resolve(o)}lookupMutationBatch(e,t){return oe.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Xr(n),s=r<0?0:r;return oe.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return oe.resolve(this.mutationQueue.length===0?_d:this.er-1)}getAllMutationBatches(e){return oe.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new rn(t,0),r=new rn(t,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([n,r],(o=>{const a=this.Zr(o.Hr);s.push(a)})),oe.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Zt(at);return t.forEach((r=>{const s=new rn(r,0),o=new rn(r,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,o],(a=>{n=n.add(a.Hr)}))})),oe.resolve(this.ei(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let s=n;Ve.isDocumentKey(s)||(s=s.child(""));const o=new rn(new Ve(s),0);let a=new Zt(at);return this.Yr.forEachWhile((l=>{const u=l.key.path;return!!n.isPrefixOf(u)&&(u.length===r&&(a=a.add(l.Hr)),!0)}),o),oe.resolve(this.ei(a))}ei(e){const t=[];return e.forEach((n=>{const r=this.Zr(n);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){At(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Yr;return oe.forEach(t.mutations,(r=>{const s=new rn(r.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Yr=n}))}rr(e){}containsKey(e,t){const n=new rn(t,0),r=this.Yr.firstAfterOrEqual(n);return oe.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,oe.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e){this.ni=e,this.docs=(function(){return new kt(Ve.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),s=r?r.size:0,o=this.ni(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return oe.resolve(n?n.document.mutableCopy():_n.newInvalidDocument(t))}getEntries(e,t){let n=qi();return t.forEach((r=>{const s=this.docs.get(r);n=n.insert(r,s?s.document.mutableCopy():_n.newInvalidDocument(r))})),oe.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let s=qi();const o=t.path,a=new Ve(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||xI(SI(h),n)<=0||(r.has(h.key)||ll(t,h))&&(s=s.insert(h.key,h.mutableCopy()))}return oe.resolve(s)}getAllFromCollectionGroup(e,t,n,r){je(9500)}ri(e,t){return oe.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new YC(this)}getSize(e){return oe.resolve(this.size)}}class YC extends zC{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Or.addEntry(e,r)):this.Or.removeEntry(n)})),oe.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e){this.persistence=e,this.ii=new rs((t=>Ed(t)),Td),this.lastRemoteSnapshotVersion=Ze.min(),this.highestTargetId=0,this.si=0,this.oi=new bd,this.targetCount=0,this._i=eo.ar()}forEachTarget(e,t){return this.ii.forEach(((n,r)=>t(r))),oe.resolve()}getLastRemoteSnapshotVersion(e){return oe.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return oe.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),oe.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.si&&(this.si=t),oe.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new eo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,oe.resolve()}updateTargetData(e,t){return this.hr(t),oe.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,oe.resolve()}removeTargets(e,t,n){let r=0;const s=[];return this.ii.forEach(((o,a)=>{a.sequenceNumber<=t&&n.get(a.targetId)===null&&(this.ii.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)})),oe.waitFor(s).next((()=>r))}getTargetCount(e){return oe.resolve(this.targetCount)}getTargetData(e,t){const n=this.ii.get(t)||null;return oe.resolve(n)}addMatchingKeys(e,t,n){return this.oi.Kr(t,n),oe.resolve()}removeMatchingKeys(e,t,n){this.oi.Gr(t,n);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach((o=>{s.push(r.markPotentiallyOrphaned(e,o))})),oe.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),oe.resolve()}getMatchingKeysForTargetId(e,t){const n=this.oi.Jr(t);return oe.resolve(n)}containsKey(e,t){return oe.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e,t){this.ai={},this.overlays={},this.ui=new sl(0),this.ci=!1,this.ci=!0,this.li=new XC,this.referenceDelegate=e(this),this.hi=new KC(this),this.indexManager=new NC,this.remoteDocumentCache=(function(r){return new $C(r)})((n=>this.referenceDelegate.Pi(n))),this.serializer=new DC(t),this.Ti=new WC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new qC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ai[e.toKey()];return n||(n=new jC(t,this.referenceDelegate),this.ai[e.toKey()]=n),n}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,n){Pe("MemoryPersistence","Starting transaction:",e);const r=new JC(this.ui.next());return this.referenceDelegate.Ii(),n(r).next((s=>this.referenceDelegate.di(r).next((()=>s)))).toPromise().then((s=>(r.raiseOnCommittedEvent(),s)))}Ei(e,t){return oe.or(Object.values(this.ai).map((n=>()=>n.containsKey(e,t))))}}class JC extends MI{constructor(e){super(),this.currentSequenceNumber=e}}class Rd{constructor(e){this.persistence=e,this.Ai=new bd,this.Ri=null}static Vi(e){return new Rd(e)}get mi(){if(this.Ri)return this.Ri;throw je(60996)}addReference(e,t,n){return this.Ai.addReference(n,t),this.mi.delete(n.toString()),oe.resolve()}removeReference(e,t,n){return this.Ai.removeReference(n,t),this.mi.add(n.toString()),oe.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),oe.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((r=>this.mi.add(r.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((s=>this.mi.add(s.toString())))})).next((()=>n.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return oe.forEach(this.mi,(n=>{const r=Ve.fromPath(n);return this.fi(e,r).next((s=>{s||t.removeEntry(r,Ze.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((n=>{n?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return oe.or([()=>oe.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class qc{constructor(e,t){this.persistence=e,this.gi=new rs((n=>RI(n.path)),((n,r)=>n.isEqual(r))),this.garbageCollector=BC(this,t)}static Vi(e,t){return new qc(e,t)}Ii(){}di(e){return oe.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((r=>n+r))))}yr(e){let t=0;return this.gr(e,(n=>{t++})).next((()=>t))}gr(e,t){return oe.forEach(this.gi,((n,r)=>this.Sr(e,n,r).next((s=>s?oe.resolve():t(r)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),s=r.newChangeBuffer();return r.ri(e,(o=>this.Sr(e,o,t).next((a=>{a||(n++,s.removeEntry(o,Ze.min()))})))).next((()=>s.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),oe.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),oe.resolve()}removeReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),oe.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),oe.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=yc(e.data.value)),t}Sr(e,t,n){return oe.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.gi.get(t);return oe.resolve(r!==void 0&&r>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Is=n,this.ds=r}static Es(e,t){let n=pt(),r=pt();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Id(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return HM()?8:AI(yn())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,n,r){const s={result:null};return this.ps(e,t).next((o=>{s.result=o})).next((()=>{if(!s.result)return this.ys(e,t,r,n).next((o=>{s.result=o}))})).next((()=>{if(s.result)return;const o=new QC;return this.ws(e,t,o).next((a=>{if(s.result=a,this.Rs)return this.Ss(e,t,o,a.size)}))})).next((()=>s.result))}Ss(e,t,n,r){return n.documentReadCount<this.Vs?(Is()<=dt.DEBUG&&Pe("QueryEngine","SDK will not create cache indexes for query:",Cs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),oe.resolve()):(Is()<=dt.DEBUG&&Pe("QueryEngine","Query:",Cs(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.fs*r?(Is()<=dt.DEBUG&&Pe("QueryEngine","The SDK decides to create cache indexes for query:",Cs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fi(t))):oe.resolve())}ps(e,t){if(Cm(t))return oe.resolve(null);let n=fi(t);return this.indexManager.getIndexType(e,n).next((r=>r===0?null:(t.limit!==null&&r===1&&(t=Gc(t,null,"F"),n=fi(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((s=>{const o=pt(...s);return this.gs.getDocuments(e,o).next((a=>this.indexManager.getMinOffset(e,n).next((l=>{const u=this.bs(t,a);return this.Ds(t,u,o,l.readTime)?this.ps(e,Gc(t,null,"F")):this.vs(e,u,t,l)}))))})))))}ys(e,t,n,r){return Cm(t)||r.isEqual(Ze.min())?oe.resolve(null):this.gs.getDocuments(e,n).next((s=>{const o=this.bs(t,s);return this.Ds(t,o,n,r)?oe.resolve(null):(Is()<=dt.DEBUG&&Pe("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Cs(t)),this.vs(e,o,t,TI(r,Qo)).next((a=>a)))}))}bs(e,t){let n=new Zt(uv(e));return t.forEach(((r,s)=>{ll(e,s)&&(n=n.add(s))})),n}Ds(e,t,n,r){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}ws(e,t,n){return Is()<=dt.DEBUG&&Pe("QueryEngine","Using full collection scan to execute query:",Cs(t)),this.gs.getDocumentsMatchingQuery(e,t,Er.min(),n)}vs(e,t,n,r){return this.gs.getDocumentsMatchingQuery(e,n,r).next((s=>(t.forEach((o=>{s=s.insert(o.key,o)})),s)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd="LocalStore",e1=3e8;class t1{constructor(e,t,n,r){this.persistence=e,this.Cs=t,this.serializer=r,this.Fs=new kt(at),this.Ms=new rs((s=>Ed(s)),Td),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(n)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new HC(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function n1(i,e,t,n){return new t1(i,e,t,n)}async function Nv(i,e){const t=tt(i);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let r;return t.mutationQueue.getAllMutationBatches(n).next((s=>(r=s,t.Ns(e),t.mutationQueue.getAllMutationBatches(n)))).next((s=>{const o=[],a=[];let l=pt();for(const u of r){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of s){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return t.localDocuments.getDocuments(n,l).next((u=>({Bs:u,removedBatchIds:o,addedBatchIds:a})))}))}))}function i1(i,e){const t=tt(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const r=e.batch.keys(),s=t.Os.newChangeBuffer({trackRemovals:!0});return(function(a,l,u,h){const d=u.batch,f=d.keys();let _=oe.resolve();return f.forEach((S=>{_=_.next((()=>h.getEntry(l,S))).next((M=>{const m=u.docVersions.get(S);At(m!==null,48541),M.version.compareTo(m)<0&&(d.applyToRemoteDocument(M,u),M.isValidDocument()&&(M.setReadTime(u.commitVersion),h.addEntry(M)))}))})),_.next((()=>a.mutationQueue.removeMutationBatch(l,d)))})(t,n,e,s).next((()=>s.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(a){let l=pt();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(n,r)))}))}function Uv(i){const e=tt(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function r1(i,e){const t=tt(i),n=e.snapshotVersion;let r=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(s=>{const o=t.Os.newChangeBuffer({trackRemovals:!0});r=t.Fs;const a=[];e.targetChanges.forEach(((h,d)=>{const f=r.get(d);if(!f)return;a.push(t.hi.removeMatchingKeys(s,h.removedDocuments,d).next((()=>t.hi.addMatchingKeys(s,h.addedDocuments,d))));let _=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?_=_.withResumeToken(un.EMPTY_BYTE_STRING,Ze.min()).withLastLimboFreeSnapshotVersion(Ze.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,n)),r=r.insert(d,_),(function(M,m,g){return M.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=e1?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0})(f,_,h)&&a.push(t.hi.updateTargetData(s,_))}));let l=qi(),u=pt();if(e.documentUpdates.forEach((h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,h))})),a.push(s1(s,o,e.documentUpdates).next((h=>{l=h.Ls,u=h.ks}))),!n.isEqual(Ze.min())){const h=t.hi.getLastRemoteSnapshotVersion(s).next((d=>t.hi.setTargetsMetadata(s,s.currentSequenceNumber,n)));a.push(h)}return oe.waitFor(a).next((()=>o.apply(s))).next((()=>t.localDocuments.getLocalViewOfDocuments(s,l,u))).next((()=>l))})).then((s=>(t.Fs=r,s)))}function s1(i,e,t){let n=pt(),r=pt();return t.forEach((s=>n=n.add(s))),e.getEntries(i,n).next((s=>{let o=qi();return t.forEach(((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(Ze.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):Pe(Cd,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)})),{Ls:o,ks:r}}))}function o1(i,e){const t=tt(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=_d),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function a1(i,e){const t=tt(i);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let r;return t.hi.getTargetData(n,e).next((s=>s?(r=s,oe.resolve(r)):t.hi.allocateTargetId(n).next((o=>(r=new lr(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.hi.addTargetData(n,r).next((()=>r)))))))})).then((n=>{const r=t.Fs.get(n.targetId);return(r===null||n.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(n.targetId,n),t.Ms.set(e,n.targetId)),n}))}async function Sh(i,e,t){const n=tt(i),r=n.Fs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",s,(o=>n.persistence.referenceDelegate.removeTarget(o,r)))}catch(o){if(!ho(o))throw o;Pe(Cd,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Fs=n.Fs.remove(e),n.Ms.delete(r.target)}function Hm(i,e,t){const n=tt(i);let r=Ze.min(),s=pt();return n.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,h){const d=tt(l),f=d.Ms.get(h);return f!==void 0?oe.resolve(d.Fs.get(f)):d.hi.getTargetData(u,h)})(n,o,fi(e)).next((a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,n.hi.getMatchingKeysForTargetId(o,a.targetId).next((l=>{s=l}))})).next((()=>n.Cs.getDocumentsMatchingQuery(o,e,t?r:Ze.min(),t?s:pt()))).next((a=>(c1(n,jI(e),a),{documents:a,qs:s})))))}function c1(i,e,t){let n=i.xs.get(e)||Ze.min();t.forEach(((r,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)})),i.xs.set(e,n)}class Wm{constructor(){this.activeTargetIds=ZI()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class l1{constructor(){this.Fo=new Wm,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,n){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Wm,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm="ConnectivityMonitor";class Xm{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){Pe(qm,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){Pe(qm,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sc=null;function xh(){return sc===null?sc=(function(){return 268435456+Math.round(2147483648*Math.random())})():sc++,"0x"+sc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu="RestConnection",h1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class d1{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${n}/databases/${r}`,this.Ko=this.databaseId.database===Vc?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Wo(e,t,n,r,s){const o=xh(),a=this.Go(e,t.toUriEncodedString());Pe(lu,`Sending RPC '${e}' ${o}:`,a,n);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,r,s);const{host:u}=new URL(a),h=oo(u);return this.jo(e,a,l,n,h).then((d=>(Pe(lu,`Received RPC '${e}' ${o}: `,d),d)),(d=>{throw yr(lu,`RPC '${e}' ${o} failed with error: `,d,"url: ",a,"request:",n),d}))}Jo(e,t,n,r,s,o){return this.Wo(e,t,n,r,s)}zo(e,t,n){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+lo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,s)=>e[s]=r)),n&&n.headers.forEach(((r,s)=>e[s]=r))}Go(e,t){const n=h1[e];return`${this.$o}/v1/${t}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="WebChannelConnection";class p1 extends d1{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,n,r,s){const o=xh();return new Promise(((a,l)=>{const u=new O_;u.setWithCredentials(!0),u.listenOnce(F_.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case vc.NO_ERROR:const d=u.getResponseJson();Pe(mn,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),a(d);break;case vc.TIMEOUT:Pe(mn,`RPC '${e}' ${o} timed out`),l(new be(re.DEADLINE_EXCEEDED,"Request time out"));break;case vc.HTTP_ERROR:const f=u.getStatus();if(Pe(mn,`RPC '${e}' ${o} failed with status:`,f,"response text:",u.getResponseText()),f>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const S=_==null?void 0:_.error;if(S&&S.status&&S.message){const M=(function(g){const P=g.toLowerCase().replace(/_/g,"-");return Object.values(re).indexOf(P)>=0?P:re.UNKNOWN})(S.status);l(new be(M,S.message))}else l(new be(re.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new be(re.UNAVAILABLE,"Connection failed."));break;default:je(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{Pe(mn,`RPC '${e}' ${o} completed.`)}}));const h=JSON.stringify(r);Pe(mn,`RPC '${e}' ${o} sending request:`,r),u.send(t,"POST",h,n,15)}))}P_(e,t,n){const r=xh(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=B_(),a=V_(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;const h=s.join("");Pe(mn,`Creating RPC '${e}' stream ${r}: ${h}`,l);const d=o.createWebChannel(h,l);this.T_(d);let f=!1,_=!1;const S=new f1({Ho:m=>{_?Pe(mn,`Not sending because RPC '${e}' stream ${r} is closed:`,m):(f||(Pe(mn,`Opening RPC '${e}' stream ${r} transport.`),d.open(),f=!0),Pe(mn,`RPC '${e}' stream ${r} sending:`,m),d.send(m))},Yo:()=>d.close()}),M=(m,g,P)=>{m.listen(g,(D=>{try{P(D)}catch(R){setTimeout((()=>{throw R}),0)}}))};return M(d,Po.EventType.OPEN,(()=>{_||(Pe(mn,`RPC '${e}' stream ${r} transport opened.`),S.s_())})),M(d,Po.EventType.CLOSE,(()=>{_||(_=!0,Pe(mn,`RPC '${e}' stream ${r} transport closed`),S.__(),this.I_(d))})),M(d,Po.EventType.ERROR,(m=>{_||(_=!0,yr(mn,`RPC '${e}' stream ${r} transport errored. Name:`,m.name,"Message:",m.message),S.__(new be(re.UNAVAILABLE,"The operation could not be completed")))})),M(d,Po.EventType.MESSAGE,(m=>{var g;if(!_){const P=m.data[0];At(!!P,16349);const D=P,R=(D==null?void 0:D.error)||((g=D[0])===null||g===void 0?void 0:g.error);if(R){Pe(mn,`RPC '${e}' stream ${r} received error:`,R);const V=R.status;let F=(function(v){const y=Xt[v];if(y!==void 0)return Sv(y)})(V),x=R.message;F===void 0&&(F=re.INTERNAL,x="Unknown error status: "+V+" with message "+R.message),_=!0,S.__(new be(F,x)),d.close()}else Pe(mn,`RPC '${e}' stream ${r} received:`,P),S.a_(P)}})),M(a,k_.STAT_EVENT,(m=>{m.stat===hh.PROXY?Pe(mn,`RPC '${e}' stream ${r} detected buffering proxy`):m.stat===hh.NOPROXY&&Pe(mn,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{S.o_()}),0),S}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function uu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(i){return new vC(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e,t,n=1e3,r=1.5,s=6e4){this.Fi=e,this.timerId=t,this.d_=n,this.E_=r,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),n=Math.max(0,Date.now()-this.m_),r=Math.max(0,t-n);r>0&&Pe("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,r,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm="PersistentStream";class Fv{constructor(e,t,n,r,s,o,a,l){this.Fi=e,this.w_=n,this.S_=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Ov(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===re.RESOURCE_EXHAUSTED?(Wi(t.toString()),Wi("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===re.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,r])=>{this.b_===t&&this.W_(n,r)}),(n=>{e((()=>{const r=new be(re.UNKNOWN,"Fetching auth token failed: "+n.message);return this.G_(r)}))}))}W_(e,t){const n=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{n((()=>this.listener.Zo()))})),this.stream.e_((()=>{n((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((r=>{n((()=>this.G_(r)))})),this.stream.onMessage((r=>{n((()=>++this.C_==1?this.j_(r):this.onNext(r)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return Pe(jm,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(Pe(jm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class m1 extends Fv{constructor(e,t,n,r,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,o),this.serializer=s}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=TC(this.serializer,e),n=(function(s){if(!("targetChange"in s))return Ze.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Ze.min():o.readTime?pi(o.readTime):Ze.min()})(e);return this.listener.J_(t,n)}H_(e){const t={};t.database=Th(this.serializer),t.addTarget=(function(s,o){let a;const l=o.target;if(a=gh(l)?{documents:wC(s,l)}:{query:MC(s,l).Vt},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Mv(s,o.resumeToken);const u=vh(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(Ze.min())>0){a.readTime=Wc(s,o.snapshotVersion.toTimestamp());const u=vh(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a})(this.serializer,e);const n=bC(this.serializer,e);n&&(t.labels=n),this.k_(t)}Y_(e){const t={};t.database=Th(this.serializer),t.removeTarget=e,this.k_(t)}}class g1 extends Fv{constructor(e,t,n,r,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,o),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return At(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,At(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){At(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=xC(e.writeResults,e.commitTime),n=pi(e.commitTime);return this.listener.ta(n,t)}na(){const e={};e.database=Th(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>SC(this.serializer,n)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{}class v1 extends _1{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.ra=!1}ia(){if(this.ra)throw new be(re.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,r){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.Wo(e,yh(t,n),r,s,o))).catch((s=>{throw s.name==="FirebaseError"?(s.code===re.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new be(re.UNKNOWN,s.toString())}))}Jo(e,t,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Jo(e,yh(t,n),r,o,a,s))).catch((o=>{throw o.name==="FirebaseError"?(o.code===re.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new be(re.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class y1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Wi(t),this._a=!1):Pe("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts="RemoteStore";class E1{constructor(e,t,n,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo((o=>{n.enqueueAndForget((async()=>{os(this)&&(Pe(ts,"Restarting streams for network reachability change."),await(async function(l){const u=tt(l);u.Ia.add(4),await ya(u),u.Aa.set("Unknown"),u.Ia.delete(4),await pl(u)})(this))}))})),this.Aa=new y1(n,r)}}async function pl(i){if(os(i))for(const e of i.da)await e(!0)}async function ya(i){for(const e of i.da)await e(!1)}function kv(i,e){const t=tt(i);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Nd(t)?Ld(t):po(t).x_()&&Dd(t,e))}function Pd(i,e){const t=tt(i),n=po(t);t.Ta.delete(e),n.x_()&&Vv(t,e),t.Ta.size===0&&(n.x_()?n.B_():os(t)&&t.Aa.set("Unknown"))}function Dd(i,e){if(i.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ze.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}po(i).H_(e)}function Vv(i,e){i.Ra.$e(e),po(i).Y_(e)}function Ld(i){i.Ra=new pC({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>i.Ta.get(e)||null,lt:()=>i.datastore.serializer.databaseId}),po(i).start(),i.Aa.aa()}function Nd(i){return os(i)&&!po(i).M_()&&i.Ta.size>0}function os(i){return tt(i).Ia.size===0}function Bv(i){i.Ra=void 0}async function T1(i){i.Aa.set("Online")}async function S1(i){i.Ta.forEach(((e,t)=>{Dd(i,e)}))}async function x1(i,e){Bv(i),Nd(i)?(i.Aa.la(e),Ld(i)):i.Aa.set("Unknown")}async function w1(i,e,t){if(i.Aa.set("Online"),e instanceof wv&&e.state===2&&e.cause)try{await(async function(r,s){const o=s.cause;for(const a of s.targetIds)r.Ta.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.Ta.delete(a),r.Ra.removeTarget(a))})(i,e)}catch(n){Pe(ts,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Xc(i,n)}else if(e instanceof Sc?i.Ra.Ye(e):e instanceof xv?i.Ra.it(e):i.Ra.et(e),!t.isEqual(Ze.min()))try{const n=await Uv(i.localStore);t.compareTo(n)>=0&&await(function(s,o){const a=s.Ra.Pt(o);return a.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.Ta.get(u);h&&s.Ta.set(u,h.withResumeToken(l.resumeToken,o))}})),a.targetMismatches.forEach(((l,u)=>{const h=s.Ta.get(l);if(!h)return;s.Ta.set(l,h.withResumeToken(un.EMPTY_BYTE_STRING,h.snapshotVersion)),Vv(s,l);const d=new lr(h.target,l,u,h.sequenceNumber);Dd(s,d)})),s.remoteSyncer.applyRemoteEvent(a)})(i,t)}catch(n){Pe(ts,"Failed to raise snapshot:",n),await Xc(i,n)}}async function Xc(i,e,t){if(!ho(e))throw e;i.Ia.add(1),await ya(i),i.Aa.set("Offline"),t||(t=()=>Uv(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{Pe(ts,"Retrying IndexedDB access"),await t(),i.Ia.delete(1),await pl(i)}))}function zv(i,e){return e().catch((t=>Xc(i,t,e)))}async function ml(i){const e=tt(i),t=wr(e);let n=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:_d;for(;M1(e);)try{const r=await o1(e.localStore,n);if(r===null){e.Pa.length===0&&t.B_();break}n=r.batchId,A1(e,r)}catch(r){await Xc(e,r)}Gv(e)&&Hv(e)}function M1(i){return os(i)&&i.Pa.length<10}function A1(i,e){i.Pa.push(e);const t=wr(i);t.x_()&&t.Z_&&t.X_(e.mutations)}function Gv(i){return os(i)&&!wr(i).M_()&&i.Pa.length>0}function Hv(i){wr(i).start()}async function b1(i){wr(i).na()}async function R1(i){const e=wr(i);for(const t of i.Pa)e.X_(t.mutations)}async function I1(i,e,t){const n=i.Pa.shift(),r=wd.from(n,e,t);await zv(i,(()=>i.remoteSyncer.applySuccessfulWrite(r))),await ml(i)}async function C1(i,e){e&&wr(i).Z_&&await(async function(n,r){if((function(o){return dC(o)&&o!==re.ABORTED})(r.code)){const s=n.Pa.shift();wr(n).N_(),await zv(n,(()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r))),await ml(n)}})(i,e),Gv(i)&&Hv(i)}async function $m(i,e){const t=tt(i);t.asyncQueue.verifyOperationInProgress(),Pe(ts,"RemoteStore received new credentials");const n=os(t);t.Ia.add(3),await ya(t),n&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await pl(t)}async function P1(i,e){const t=tt(i);e?(t.Ia.delete(2),await pl(t)):e||(t.Ia.add(2),await ya(t),t.Aa.set("Unknown"))}function po(i){return i.Va||(i.Va=(function(t,n,r){const s=tt(t);return s.ia(),new m1(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)})(i.datastore,i.asyncQueue,{Zo:T1.bind(null,i),e_:S1.bind(null,i),n_:x1.bind(null,i),J_:w1.bind(null,i)}),i.da.push((async e=>{e?(i.Va.N_(),Nd(i)?Ld(i):i.Aa.set("Unknown")):(await i.Va.stop(),Bv(i))}))),i.Va}function wr(i){return i.ma||(i.ma=(function(t,n,r){const s=tt(t);return s.ia(),new g1(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)})(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),e_:b1.bind(null,i),n_:C1.bind(null,i),ea:R1.bind(null,i),ta:I1.bind(null,i)}),i.da.push((async e=>{e?(i.ma.N_(),await ml(i)):(await i.ma.stop(),i.Pa.length>0&&(Pe(ts,`Stopping write stream with ${i.Pa.length} pending writes`),i.Pa=[]))}))),i.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,t,n,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new Fi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,s){const o=Date.now()+n,a=new Ud(e,t,o,r,s);return a.start(n),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new be(re.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Od(i,e){if(Wi("AsyncQueue",`${e}: ${i}`),ho(i))return new be(re.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{static emptySet(e){return new Bs(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||Ve.comparator(t.key,n.key):(t,n)=>Ve.comparator(t.key,n.key),this.keyedMap=Do(),this.sortedSet=new kt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Bs)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,s=n.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Bs;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(){this.fa=new kt(Ve.comparator)}track(e){const t=e.doc.key,n=this.fa.get(t);n?e.type!==0&&n.type===3?this.fa=this.fa.insert(t,e):e.type===3&&n.type!==1?this.fa=this.fa.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.fa=this.fa.remove(t):e.type===1&&n.type===2?this.fa=this.fa.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):je(63341,{At:e,ga:n}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,n)=>{e.push(n)})),e}}class to{constructor(e,t,n,r,s,o,a,l,u){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,n,r,s){const o=[];return t.forEach((a=>{o.push({type:0,doc:a})})),new to(e,t,Bs.emptySet(t),o,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class L1{constructor(){this.queries=Km(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,n){const r=tt(t),s=r.queries;r.queries=Km(),s.forEach(((o,a)=>{for(const l of a.wa)l.onError(n)}))})(this,new be(re.ABORTED,"Firestore shutting down"))}}function Km(){return new rs((i=>lv(i)),cl)}async function Wv(i,e){const t=tt(i);let n=3;const r=e.query;let s=t.queries.get(r);s?!s.Sa()&&e.ba()&&(n=2):(s=new D1,n=e.ba()?0:1);try{switch(n){case 0:s.ya=await t.onListen(r,!0);break;case 1:s.ya=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(o){const a=Od(o,`Initialization of query '${Cs(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.wa.push(e),e.va(t.onlineState),s.ya&&e.Ca(s.ya)&&Fd(t)}async function qv(i,e){const t=tt(i),n=e.query;let r=3;const s=t.queries.get(n);if(s){const o=s.wa.indexOf(e);o>=0&&(s.wa.splice(o,1),s.wa.length===0?r=e.ba()?0:1:!s.Sa()&&e.ba()&&(r=2))}switch(r){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function N1(i,e){const t=tt(i);let n=!1;for(const r of e){const s=r.query,o=t.queries.get(s);if(o){for(const a of o.wa)a.Ca(r)&&(n=!0);o.ya=r}}n&&Fd(t)}function U1(i,e,t){const n=tt(i),r=n.queries.get(e);if(r)for(const s of r.wa)s.onError(t);n.queries.delete(e)}function Fd(i){i.Da.forEach((e=>{e.next()}))}var wh,Jm;(Jm=wh||(wh={})).Fa="default",Jm.Cache="cache";class Xv{constructor(e,t,n){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=n||{}}Ca(e){if(!this.options.includeMetadataChanges){const n=[];for(const r of e.docChanges)r.type!==3&&n.push(r);e=new to(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const n=t!=="Offline";return(!this.options.ka||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=to.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==wh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e){this.key=e}}class $v{constructor(e){this.key=e}}class O1{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=pt(),this.mutatedKeys=pt(),this.Xa=uv(e),this.eu=new Bs(this.Xa)}get tu(){return this.Ha}nu(e,t){const n=t?t.ru:new Ym,r=t?t.eu:this.eu;let s=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((h,d)=>{const f=r.get(h),_=ll(this.query,d)?d:null,S=!!f&&this.mutatedKeys.has(f.key),M=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let m=!1;f&&_?f.data.isEqual(_.data)?S!==M&&(n.track({type:3,doc:_}),m=!0):this.iu(f,_)||(n.track({type:2,doc:_}),m=!0,(l&&this.Xa(_,l)>0||u&&this.Xa(_,u)<0)&&(a=!0)):!f&&_?(n.track({type:0,doc:_}),m=!0):f&&!_&&(n.track({type:1,doc:f}),m=!0,(l||u)&&(a=!0)),m&&(_?(o=o.add(_),s=M?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),n.track({type:1,doc:h})}return{eu:o,ru:n,Ds:a,mutatedKeys:s}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort(((h,d)=>(function(_,S){const M=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return je(20277,{At:m})}};return M(_)-M(S)})(h.type,d.type)||this.Xa(h.doc,d.doc))),this.su(n),r=r!=null&&r;const a=t&&!r?this.ou():[],l=this.Za.size===0&&this.current&&!r?1:0,u=l!==this.Ya;return this.Ya=l,o.length!==0||u?{snapshot:new to(this.query,e.eu,s,o,e.mutatedKeys,l===0,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),_u:a}:{_u:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Ym,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=pt(),this.eu.forEach((n=>{this.au(n.key)&&(this.Za=this.Za.add(n.key))}));const t=[];return e.forEach((n=>{this.Za.has(n)||t.push(new $v(n))})),this.Za.forEach((n=>{e.has(n)||t.push(new jv(n))})),t}uu(e){this.Ha=e.qs,this.Za=pt();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return to.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const kd="SyncEngine";class F1{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class k1{constructor(e){this.key=e,this.lu=!1}}class V1{constructor(e,t,n,r,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new rs((a=>lv(a)),cl),this.Tu=new Map,this.Iu=new Set,this.du=new kt(Ve.comparator),this.Eu=new Map,this.Au=new bd,this.Ru={},this.Vu=new Map,this.mu=eo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function B1(i,e,t=!0){const n=e0(i);let r;const s=n.Pu.get(e);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.cu()):r=await Yv(n,e,t,!0),r}async function z1(i,e){const t=e0(i);await Yv(t,e,!0,!1)}async function Yv(i,e,t,n){const r=await a1(i.localStore,fi(e)),s=r.targetId,o=i.sharedClientState.addLocalQueryTarget(s,t);let a;return n&&(a=await G1(i,e,s,o==="current",r.resumeToken)),i.isPrimaryClient&&t&&kv(i.remoteStore,r),a}async function G1(i,e,t,n,r){i.gu=(d,f,_)=>(async function(M,m,g,P){let D=m.view.nu(g);D.Ds&&(D=await Hm(M.localStore,m.query,!1).then((({documents:x})=>m.view.nu(x,D))));const R=P&&P.targetChanges.get(m.targetId),V=P&&P.targetMismatches.get(m.targetId)!=null,F=m.view.applyChanges(D,M.isPrimaryClient,R,V);return Zm(M,m.targetId,F._u),F.snapshot})(i,d,f,_);const s=await Hm(i.localStore,e,!0),o=new O1(e,s.qs),a=o.nu(s.documents),l=va.createSynthesizedTargetChangeForCurrentChange(t,n&&i.onlineState!=="Offline",r),u=o.applyChanges(a,i.isPrimaryClient,l);Zm(i,t,u._u);const h=new F1(e,t,o);return i.Pu.set(e,h),i.Tu.has(t)?i.Tu.get(t).push(e):i.Tu.set(t,[e]),u.snapshot}async function H1(i,e,t){const n=tt(i),r=n.Pu.get(e),s=n.Tu.get(r.targetId);if(s.length>1)return n.Tu.set(r.targetId,s.filter((o=>!cl(o,e)))),void n.Pu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Sh(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),t&&Pd(n.remoteStore,r.targetId),Mh(n,r.targetId)})).catch(uo)):(Mh(n,r.targetId),await Sh(n.localStore,r.targetId,!0))}async function W1(i,e){const t=tt(i),n=t.Pu.get(e),r=t.Tu.get(n.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Pd(t.remoteStore,n.targetId))}async function q1(i,e,t){const n=Q1(i);try{const r=await(function(o,a){const l=tt(o),u=Ut.now(),h=a.reduce(((_,S)=>_.add(S.key)),pt());let d,f;return l.persistence.runTransaction("Locally write mutations","readwrite",(_=>{let S=qi(),M=pt();return l.Os.getEntries(_,h).next((m=>{S=m,S.forEach(((g,P)=>{P.isValidDocument()||(M=M.add(g))}))})).next((()=>l.localDocuments.getOverlayedDocuments(_,S))).next((m=>{d=m;const g=[];for(const P of a){const D=aC(P,d.get(P.key).overlayedDocument);D!=null&&g.push(new ss(P.key,D,tv(D.value.mapValue),ki.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,g,a)})).next((m=>{f=m;const g=m.applyToLocalDocumentSet(d,M);return l.documentOverlayCache.saveOverlays(_,m.batchId,g)}))})).then((()=>({batchId:f.batchId,changes:dv(d)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(r.batchId),(function(o,a,l){let u=o.Ru[o.currentUser.toKey()];u||(u=new kt(at)),u=u.insert(a,l),o.Ru[o.currentUser.toKey()]=u})(n,r.batchId,t),await Ea(n,r.changes),await ml(n.remoteStore)}catch(r){const s=Od(r,"Failed to persist write");t.reject(s)}}async function Kv(i,e){const t=tt(i);try{const n=await r1(t.localStore,e);e.targetChanges.forEach(((r,s)=>{const o=t.Eu.get(s);o&&(At(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.lu=!0:r.modifiedDocuments.size>0?At(o.lu,14607):r.removedDocuments.size>0&&(At(o.lu,42227),o.lu=!1))})),await Ea(t,n,e)}catch(n){await uo(n)}}function Qm(i,e,t){const n=tt(i);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const r=[];n.Pu.forEach(((s,o)=>{const a=o.view.va(e);a.snapshot&&r.push(a.snapshot)})),(function(o,a){const l=tt(o);l.onlineState=a;let u=!1;l.queries.forEach(((h,d)=>{for(const f of d.wa)f.va(a)&&(u=!0)})),u&&Fd(l)})(n.eventManager,e),r.length&&n.hu.J_(r),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function X1(i,e,t){const n=tt(i);n.sharedClientState.updateQueryState(e,"rejected",t);const r=n.Eu.get(e),s=r&&r.key;if(s){let o=new kt(Ve.comparator);o=o.insert(s,_n.newNoDocument(s,Ze.min()));const a=pt().add(s),l=new dl(Ze.min(),new Map,new kt(at),o,a);await Kv(n,l),n.du=n.du.remove(s),n.Eu.delete(e),Vd(n)}else await Sh(n.localStore,e,!1).then((()=>Mh(n,e,t))).catch(uo)}async function j1(i,e){const t=tt(i),n=e.batch.batchId;try{const r=await i1(t.localStore,e);Qv(t,n,null),Jv(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Ea(t,r)}catch(r){await uo(r)}}async function $1(i,e,t){const n=tt(i);try{const r=await(function(o,a){const l=tt(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next((d=>(At(d!==null,37113),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h))).next((()=>l.localDocuments.getDocuments(u,h)))}))})(n.localStore,e);Qv(n,e,t),Jv(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Ea(n,r)}catch(r){await uo(r)}}function Jv(i,e){(i.Vu.get(e)||[]).forEach((t=>{t.resolve()})),i.Vu.delete(e)}function Qv(i,e,t){const n=tt(i);let r=n.Ru[n.currentUser.toKey()];if(r){const s=r.get(e);s&&(t?s.reject(t):s.resolve(),r=r.remove(e)),n.Ru[n.currentUser.toKey()]=r}}function Mh(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const n of i.Tu.get(e))i.Pu.delete(n),t&&i.hu.pu(n,t);i.Tu.delete(e),i.isPrimaryClient&&i.Au.zr(e).forEach((n=>{i.Au.containsKey(n)||Zv(i,n)}))}function Zv(i,e){i.Iu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(Pd(i.remoteStore,t),i.du=i.du.remove(e),i.Eu.delete(t),Vd(i))}function Zm(i,e,t){for(const n of t)n instanceof jv?(i.Au.addReference(n.key,e),Y1(i,n)):n instanceof $v?(Pe(kd,"Document no longer in limbo: "+n.key),i.Au.removeReference(n.key,e),i.Au.containsKey(n.key)||Zv(i,n.key)):je(19791,{yu:n})}function Y1(i,e){const t=e.key,n=t.path.canonicalString();i.du.get(t)||i.Iu.has(n)||(Pe(kd,"New document in limbo: "+t),i.Iu.add(n),Vd(i))}function Vd(i){for(;i.Iu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Iu.values().next().value;i.Iu.delete(e);const t=new Ve(Dt.fromString(e)),n=i.mu.next();i.Eu.set(n,new k1(t)),i.du=i.du.insert(t,n),kv(i.remoteStore,new lr(fi(Sd(t.path)),n,"TargetPurposeLimboResolution",sl.ue))}}async function Ea(i,e,t){const n=tt(i),r=[],s=[],o=[];n.Pu.isEmpty()||(n.Pu.forEach(((a,l)=>{o.push(n.gu(l,e,t).then((u=>{var h;if((u||t)&&n.isPrimaryClient){const d=u?!u.fromCache:(h=t==null?void 0:t.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;n.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){r.push(u);const d=Id.Es(l.targetId,u);s.push(d)}})))})),await Promise.all(o),n.hu.J_(r),await(async function(l,u){const h=tt(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",(d=>oe.forEach(u,(f=>oe.forEach(f.Is,(_=>h.persistence.referenceDelegate.addReference(d,f.targetId,_))).next((()=>oe.forEach(f.ds,(_=>h.persistence.referenceDelegate.removeReference(d,f.targetId,_)))))))))}catch(d){if(!ho(d))throw d;Pe(Cd,"Failed to update sequence numbers: "+d)}for(const d of u){const f=d.targetId;if(!d.fromCache){const _=h.Fs.get(f),S=_.snapshotVersion,M=_.withLastLimboFreeSnapshotVersion(S);h.Fs=h.Fs.insert(f,M)}}})(n.localStore,s))}async function K1(i,e){const t=tt(i);if(!t.currentUser.isEqual(e)){Pe(kd,"User change. New user:",e.toKey());const n=await Nv(t.localStore,e);t.currentUser=e,(function(s,o){s.Vu.forEach((a=>{a.forEach((l=>{l.reject(new be(re.CANCELLED,o))}))})),s.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Ea(t,n.Bs)}}function J1(i,e){const t=tt(i),n=t.Eu.get(e);if(n&&n.lu)return pt().add(n.key);{let r=pt();const s=t.Tu.get(e);if(!s)return r;for(const o of s){const a=t.Pu.get(o);r=r.unionWith(a.view.tu)}return r}}function e0(i){const e=tt(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=Kv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=J1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=X1.bind(null,e),e.hu.J_=N1.bind(null,e.eventManager),e.hu.pu=U1.bind(null,e.eventManager),e}function Q1(i){const e=tt(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=j1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$1.bind(null,e),e}class jc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=fl(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return n1(this.persistence,new ZC,e.initialUser,this.serializer)}Du(e){return new Lv(Rd.Vi,this.serializer)}bu(e){return new l1}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}jc.provider={build:()=>new jc};class Z1 extends jc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){At(this.persistence.referenceDelegate instanceof qc,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new kC(n,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Rn.withCacheSize(this.cacheSizeBytes):Rn.DEFAULT;return new Lv((n=>qc.Vi(n,t)),this.serializer)}}class Ah{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Qm(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=K1.bind(null,this.syncEngine),await P1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new L1})()}createDatastore(e){const t=fl(e.databaseInfo.databaseId),n=(function(s){return new p1(s)})(e.databaseInfo);return(function(s,o,a,l){return new v1(s,o,a,l)})(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,r,s,o,a){return new E1(n,r,s,o,a)})(this.localStore,this.datastore,e.asyncQueue,(t=>Qm(this.syncEngine,t,0)),(function(){return Xm.C()?new Xm:new u1})())}createSyncEngine(e,t){return(function(r,s,o,a,l,u,h){const d=new V1(r,s,o,a,l,u);return h&&(d.fu=!0),d})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(r){const s=tt(r);Pe(ts,"RemoteStore shutting down."),s.Ia.add(5),await ya(s),s.Ea.shutdown(),s.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ah.provider={build:()=>new Ah};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Wi("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="FirestoreClient";class eP{constructor(e,t,n,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=gn.UNAUTHENTICATED,this.clientId=gd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,(async o=>{Pe(Mr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(n,(o=>(Pe(Mr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Od(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function hu(i,e){i.asyncQueue.verifyOperationInProgress(),Pe(Mr,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let n=t.initialUser;i.setCredentialChangeListener((async r=>{n.isEqual(r)||(await Nv(e.localStore,r),n=r)})),e.persistence.setDatabaseDeletedListener((()=>{yr("Terminating Firestore due to IndexedDb database deletion"),i.terminate().then((()=>{Pe("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((r=>{yr("Terminating Firestore due to IndexedDb database deletion failed",r)}))})),i._offlineComponents=e}async function eg(i,e){i.asyncQueue.verifyOperationInProgress();const t=await tP(i);Pe(Mr,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((n=>$m(e.remoteStore,n))),i.setAppCheckTokenChangeListener(((n,r)=>$m(e.remoteStore,r))),i._onlineComponents=e}async function tP(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){Pe(Mr,"Using user provided OfflineComponentProvider");try{await hu(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===re.FAILED_PRECONDITION||r.code===re.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;yr("Error using user provided cache. Falling back to memory cache: "+t),await hu(i,new jc)}}else Pe(Mr,"Using default OfflineComponentProvider"),await hu(i,new Z1(void 0));return i._offlineComponents}async function n0(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(Pe(Mr,"Using user provided OnlineComponentProvider"),await eg(i,i._uninitializedComponentsProvider._online)):(Pe(Mr,"Using default OnlineComponentProvider"),await eg(i,new Ah))),i._onlineComponents}function nP(i){return n0(i).then((e=>e.syncEngine))}async function i0(i){const e=await n0(i),t=e.eventManager;return t.onListen=B1.bind(null,e.syncEngine),t.onUnlisten=H1.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=z1.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=W1.bind(null,e.syncEngine),t}function iP(i,e,t={}){const n=new Fi;return i.asyncQueue.enqueueAndForget((async()=>(function(s,o,a,l,u){const h=new t0({next:f=>{h.Ou(),o.enqueueAndForget((()=>qv(s,d)));const _=f.docs.has(a);!_&&f.fromCache?u.reject(new be(re.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&f.fromCache&&l&&l.source==="server"?u.reject(new be(re.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(f)},error:f=>u.reject(f)}),d=new Xv(Sd(a.path),h,{includeMetadataChanges:!0,ka:!0});return Wv(s,d)})(await i0(i),i.asyncQueue,e,t,n))),n.promise}function rP(i,e,t={}){const n=new Fi;return i.asyncQueue.enqueueAndForget((async()=>(function(s,o,a,l,u){const h=new t0({next:f=>{h.Ou(),o.enqueueAndForget((()=>qv(s,d))),f.fromCache&&l.source==="server"?u.reject(new be(re.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(f)},error:f=>u.reject(f)}),d=new Xv(a,h,{includeMetadataChanges:!0,ka:!0});return Wv(s,d)})(await i0(i),i.asyncQueue,e,t,n))),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0="firestore.googleapis.com",ng=!0;class ig{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new be(re.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=s0,this.ssl=ng}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:ng;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Dv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<OC)throw new be(re.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}EI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=r0((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new be(re.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new be(re.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new be(re.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,r){return n.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gl{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ig({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new be(re.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new be(re.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ig(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new hI;switch(n.type){case"firstParty":return new mI(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new be(re.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=tg.get(t);n&&(Pe("ComponentProvider","Removing Datastore"),tg.delete(t),n.terminate())})(this),Promise.resolve()}}function sP(i,e,t,n={}){var r;i=es(i,gl);const s=oo(e),o=i._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:i._getEmulatorOptions()}),l=`${e}:${t}`;s&&(Qg(`https://${l}`),Zg("Firestore",!0)),o.host!==s0&&o.host!==l&&yr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:l,ssl:s,emulatorOptions:n});if(!Kr(u,a)&&(i._setSettings(u),n.mockUserToken)){let h,d;if(typeof n.mockUserToken=="string")h=n.mockUserToken,d=gn.MOCK_USER;else{h=NM(n.mockUserToken,(r=i._app)===null||r===void 0?void 0:r.options.projectId);const f=n.mockUserToken.sub||n.mockUserToken.user_id;if(!f)throw new be(re.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new gn(f)}i._authCredentials=new dI(new G_(h,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ar(this.firestore,e,this._query)}}class Yt{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Yt(this.firestore,e,this._key)}toJSON(){return{type:Yt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(ga(t,Yt._jsonSchema))return new Yt(e,n||null,new Ve(Dt.fromString(t.referencePath)))}}Yt._jsonSchemaVersion="firestore/documentReference/1.0",Yt._jsonSchema={type:$t("string",Yt._jsonSchemaVersion),referencePath:$t("string")};class gr extends Ar{constructor(e,t,n){super(e,t,Sd(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Yt(this.firestore,null,new Ve(e))}withConverter(e){return new gr(this.firestore,e,this._path)}}function o0(i,e,...t){if(i=Pn(i),W_("collection","path",e),i instanceof gl){const n=Dt.fromString(e,...t);return gm(n),new gr(i,null,n)}{if(!(i instanceof Yt||i instanceof gr))throw new be(re.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(Dt.fromString(e,...t));return gm(n),new gr(i.firestore,null,n)}}function xc(i,e,...t){if(i=Pn(i),arguments.length===1&&(e=gd.newId()),W_("doc","path",e),i instanceof gl){const n=Dt.fromString(e,...t);return mm(n),new Yt(i,null,new Ve(n))}{if(!(i instanceof Yt||i instanceof gr))throw new be(re.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(Dt.fromString(e,...t));return mm(n),new Yt(i.firestore,i instanceof gr?i.converter:null,new Ve(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg="AsyncQueue";class sg{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Ov(this,"async_queue_retry"),this.oc=()=>{const n=uu();n&&Pe(rg,"Visibility state changed to "+n.visibilityState),this.F_.y_()},this._c=e;const t=uu();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=uu();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Fi;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ho(e))throw e;Pe(rg,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((n=>{throw this.tc=n,this.nc=!1,Wi("INTERNAL UNHANDLED ERROR: ",og(n)),n})).then((n=>(this.nc=!1,n))))));return this._c=t,t}enqueueAfterDelay(e,t,n){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const r=Ud.createAndSchedule(this,e,t,n,(s=>this.lc(s)));return this.ec.push(r),r}ac(){this.tc&&je(47125,{hc:og(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function og(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class _l extends gl{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new sg,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new sg(e),this._firestoreClient=void 0,await e}}}function oP(i,e){const t=typeof i=="object"?i:id(),n=typeof i=="string"?i:Vc,r=nd(t,"firestore").getImmediate({identifier:n});if(!r._initialized){const s=DM("firestore");s&&sP(r,...s)}return r}function Bd(i){if(i._terminated)throw new be(re.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||aP(i),i._firestoreClient}function aP(i){var e,t,n;const r=i._freezeSettings(),s=(function(a,l,u,h){return new PI(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,r0(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)})(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,r);i._componentsProvider||!((t=r.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=r.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(i._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),i._firestoreClient=new eP(i._authCredentials,i._appCheckCredentials,i._queue,s,i._componentsProvider&&(function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}})(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gn(un.fromBase64String(e))}catch(t){throw new be(re.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Gn(un.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Gn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ga(e,Gn._jsonSchema))return Gn.fromBase64String(e.bytes)}}Gn._jsonSchemaVersion="firestore/bytes/1.0",Gn._jsonSchema={type:$t("string",Gn._jsonSchemaVersion),bytes:$t("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new be(re.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ln(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new be(re.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new be(re.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return at(this._lat,e._lat)||at(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:mi._jsonSchemaVersion}}static fromJSON(e){if(ga(e,mi._jsonSchema))return new mi(e.latitude,e.longitude)}}mi._jsonSchemaVersion="firestore/geoPoint/1.0",mi._jsonSchema={type:$t("string",mi._jsonSchemaVersion),latitude:$t("number"),longitude:$t("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,r){if(n.length!==r.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==r[s])return!1;return!0})(this._values,e._values)}toJSON(){return{type:gi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ga(e,gi._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new gi(e.vectorValues);throw new be(re.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}gi._jsonSchemaVersion="firestore/vectorValue/1.0",gi._jsonSchema={type:$t("string",gi._jsonSchemaVersion),vectorValues:$t("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP=/^__.*__$/;class lP{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new ss(e,this.data,this.fieldMask,t,this.fieldTransforms):new _a(e,this.data,t,this.fieldTransforms)}}function a0(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw je(40011,{Ec:i})}}class Hd{constructor(e,t,n,r,s,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Hd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.Rc({path:n,mc:!1});return r.fc(e),r}gc(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.Rc({path:n,mc:!1});return r.Ac(),r}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return $c(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(a0(this.Ec)&&cP.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class uP{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||fl(e)}Dc(e,t,n,r=!1){return new Hd({Ec:e,methodName:t,bc:n,path:ln.emptyPath(),mc:!1,Sc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function c0(i){const e=i._freezeSettings(),t=fl(i._databaseId);return new uP(i._databaseId,!!e.ignoreUndefinedProperties,t)}function hP(i,e,t,n,r,s={}){const o=i.Dc(s.merge||s.mergeFields?2:0,e,t,r);h0("Data must be an object, but it was:",o,n);const a=l0(n,o);let l,u;if(s.merge)l=new Zn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const d of s.mergeFields){const f=fP(e,d,t);if(!o.contains(f))throw new be(re.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);mP(h,f)||h.push(f)}l=new Zn(h),u=o.fieldTransforms.filter((d=>l.covers(d.field)))}else l=null,u=o.fieldTransforms;return new lP(new zn(a),l,u)}class Wd extends Gd{_toFieldTransform(e){return new iC(e.path,new ia)}isEqual(e){return e instanceof Wd}}function dP(i,e,t,n=!1){return qd(t,i.Dc(n?4:3,e))}function qd(i,e){if(u0(i=Pn(i)))return h0("Unsupported field value:",e,i),l0(i,e);if(i instanceof Gd)return(function(n,r){if(!a0(r.Ec))throw r.wc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.wc(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(n,r){const s=[];let o=0;for(const a of n){let l=qd(a,r.yc(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}})(i,e)}return(function(n,r){if((n=Pn(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return eC(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Ut.fromDate(n);return{timestampValue:Wc(r.serializer,s)}}if(n instanceof Ut){const s=new Ut(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Wc(r.serializer,s)}}if(n instanceof mi)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Gn)return{bytesValue:Mv(r.serializer,n._byteString)};if(n instanceof Yt){const s=r.databaseId,o=n.firestore._databaseId;if(!o.isEqual(s))throw r.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ad(n.firestore._databaseId||r.databaseId,n._key.path)}}if(n instanceof gi)return(function(o,a){return{mapValue:{fields:{[Z_]:{stringValue:ev},[Bc]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw a.wc("VectorValues must only contain numeric values.");return xd(a.serializer,u)}))}}}}}})(n,r);throw r.wc(`Unsupported field value: ${rl(n)}`)})(i,e)}function l0(i,e){const t={};return j_(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):is(i,((n,r)=>{const s=qd(r,e.Vc(n));s!=null&&(t[n]=s)})),{mapValue:{fields:t}}}function u0(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Ut||i instanceof mi||i instanceof Gn||i instanceof Yt||i instanceof Gd||i instanceof gi)}function h0(i,e,t){if(!u0(t)||!q_(t)){const n=rl(t);throw n==="an object"?e.wc(i+" a custom object"):e.wc(i+" "+n)}}function fP(i,e,t){if((e=Pn(e))instanceof zd)return e._internalPath;if(typeof e=="string")return d0(i,e);throw $c("Field path arguments must be of type string or ",i,!1,void 0,t)}const pP=new RegExp("[~\\*/\\[\\]]");function d0(i,e,t){if(e.search(pP)>=0)throw $c(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new zd(...e.split("."))._internalPath}catch{throw $c(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function $c(i,e,t,n,r){const s=n&&!n.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${n}`),o&&(l+=` in document ${r}`),l+=")"),new be(re.INVALID_ARGUMENT,a+i+l)}function mP(i,e){return i.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e,t,n,r,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Xd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class gP extends f0{data(){return super.data()}}function Xd(i,e){return typeof e=="string"?d0(i,e):e instanceof zd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _P(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new be(re.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jd{}class $d extends jd{}function vP(i,e,...t){let n=[];e instanceof jd&&n.push(e),n=n.concat(t),(function(s){const o=s.filter((l=>l instanceof Kd)).length,a=s.filter((l=>l instanceof Yd)).length;if(o>1||o>0&&a>0)throw new be(re.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const r of n)i=r._apply(i);return i}class Yd extends $d{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Yd(e,t,n)}_apply(e){const t=this._parse(e);return p0(e._query,t),new Ar(e.firestore,e.converter,_h(e._query,t))}_parse(e){const t=c0(e.firestore);return(function(s,o,a,l,u,h,d){let f;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new be(re.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){cg(d,h);const S=[];for(const M of d)S.push(ag(l,s,M));f={arrayValue:{values:S}}}else f=ag(l,s,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||cg(d,h),f=dP(a,o,d,h==="in"||h==="not-in");return jt.create(u,h,f)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Kd extends jd{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Kd(e,t)}_parse(e){const t=this._queryConstraints.map((n=>n._parse(e))).filter((n=>n.getFilters().length>0));return t.length===1?t[0]:ii.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(r,s){let o=r;const a=s.getFlattenedFilters();for(const l of a)p0(o,l),o=_h(o,l)})(e._query,t),new Ar(e.firestore,e.converter,_h(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Jd extends $d{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Jd(e,t)}_apply(e){const t=(function(r,s,o){if(r.startAt!==null)throw new be(re.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new be(re.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new na(s,o)})(e._query,this._field,this._direction);return new Ar(e.firestore,e.converter,(function(r,s){const o=r.explicitOrderBy.concat([s]);return new fo(r.path,r.collectionGroup,o,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)})(e._query,t))}}function yP(i,e="asc"){const t=e,n=Xd("orderBy",i);return Jd._create(n,t)}class Qd extends $d{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Qd(e,t,n)}_apply(e){return new Ar(e.firestore,e.converter,Gc(e._query,this._limit,this._limitType))}}function EP(i){return Qd._create("limit",i,"F")}function ag(i,e,t){if(typeof(t=Pn(t))=="string"){if(t==="")throw new be(re.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!cv(e)&&t.indexOf("/")!==-1)throw new be(re.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(Dt.fromString(t));if(!Ve.isDocumentKey(n))throw new be(re.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return wm(i,new Ve(n))}if(t instanceof Yt)return wm(i,t._key);throw new be(re.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${rl(t)}.`)}function cg(i,e){if(!Array.isArray(i)||i.length===0)throw new be(re.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function p0(i,e){const t=(function(r,s){for(const o of r)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null})(i.filters,(function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new be(re.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new be(re.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class TP{convertValue(e,t="none"){switch(xr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Wt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw je(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return is(e,((r,s)=>{n[r]=this.convertValue(s,t)})),n}convertVectorValue(e){var t,n,r;const s=(r=(n=(t=e.fields)===null||t===void 0?void 0:t[Bc].arrayValue)===null||n===void 0?void 0:n.values)===null||r===void 0?void 0:r.map((o=>Wt(o.doubleValue)));return new gi(s)}convertGeoPoint(e){return new mi(Wt(e.latitude),Wt(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=al(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Zo(e));default:return null}}convertTimestamp(e){const t=Tr(e);return new Ut(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Dt.fromString(e);At(Pv(n),9688,{name:e});const r=new ea(n.get(1),n.get(3)),s=new Ve(n.popFirst(5));return r.isEqual(t)||Wi(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(i,e,t){let n;return n=i?t&&(t.merge||t.mergeFields)?i.toFirestore(e,t):i.toFirestore(e):e,n}class No{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class jr extends f0{constructor(e,t,n,r,s,o){super(e,t,n,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new wc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Xd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new be(re.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=jr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}jr._jsonSchemaVersion="firestore/documentSnapshot/1.0",jr._jsonSchema={type:$t("string",jr._jsonSchemaVersion),bundleSource:$t("string","DocumentSnapshot"),bundleName:$t("string"),bundle:$t("string")};class wc extends jr{data(e={}){return super.data(e)}}class zs{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new No(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new wc(this._firestore,this._userDataWriter,n.key,n,new No(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new be(re.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,s){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map((a=>{const l=new wc(r._firestore,r._userDataWriter,a.doc.key,a.doc,new No(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((a=>s||a.type!==3)).map((a=>{const l=new wc(r._firestore,r._userDataWriter,a.doc.key,a.doc,new No(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:xP(a.type),doc:l,oldIndex:u,newIndex:h}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new be(re.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=zs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=gd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],r=[];return this.docs.forEach((s=>{s._document!==null&&(t.push(s._document),n.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),r.push(s.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function xP(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return je(61501,{type:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(i){i=es(i,Yt);const e=es(i.firestore,_l);return iP(Bd(e),i._key).then((t=>bP(e,i,t)))}zs._jsonSchemaVersion="firestore/querySnapshot/1.0",zs._jsonSchema={type:$t("string",zs._jsonSchemaVersion),bundleSource:$t("string","QuerySnapshot"),bundleName:$t("string"),bundle:$t("string")};class m0 extends TP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Yt(this.firestore,null,t)}}function MP(i){i=es(i,Ar);const e=es(i.firestore,_l),t=Bd(e),n=new m0(e);return _P(i._query),rP(t,i._query).then((r=>new zs(e,n,i,r)))}function Mc(i,e,t){i=es(i,Yt);const n=es(i.firestore,_l),r=SP(i.converter,e,t);return AP(n,[hP(c0(n),"setDoc",i._key,r,i.converter!==null,t).toMutation(i._key,ki.none())])}function AP(i,e){return(function(n,r){const s=new Fi;return n.asyncQueue.enqueueAndForget((async()=>q1(await nP(n),r,s))),s.promise})(Bd(i),e)}function bP(i,e,t){const n=t.docs.get(e._key),r=new m0(i);return new jr(i,r,e._key,n,new No(t.hasPendingWrites,t.fromCache),e.converter)}function Ac(){return new Wd("serverTimestamp")}(function(e,t=!0){(function(r){lo=r})(ao),Ys(new Jr("firestore",((n,{instanceIdentifier:r,options:s})=>{const o=n.getProvider("app").getImmediate(),a=new _l(new fI(n.getProvider("auth-internal")),new gI(o,n.getProvider("app-check-internal")),(function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new be(re.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ea(u.options.projectId,h)})(o,r),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a}),"PUBLIC").setMultipleInstances(!0)),pr(um,hm,e),pr(um,hm,"esm2017")})();const Zd="subway_surfer_firebase_config",g0="subway_surfer_local_leaderboard",vl="subway_surfer_local_user",_0="subway_surfer_local_history";let du=null,ns=null,Ui=null,Vi=!1;function RP(){return[{rank:1,name:"Jake The Surfer",score:142580,coins:1240,photoURL:"https://api.dicebear.com/7.x/bottts/svg?seed=jake",date:"2026-10-09"},{rank:2,name:"Tricky Beat",score:98400,coins:890,photoURL:"https://api.dicebear.com/7.x/bottts/svg?seed=tricky",date:"2026-10-08"},{rank:3,name:"Fresh Kicks",score:87120,coins:760,photoURL:"https://api.dicebear.com/7.x/bottts/svg?seed=fresh",date:"2026-10-08"},{rank:4,name:"Yutani Alien",score:65400,coins:520,photoURL:"https://api.dicebear.com/7.x/bottts/svg?seed=yutani",date:"2026-10-07"},{rank:5,name:"Lucy Punk",score:49200,coins:410,photoURL:"https://api.dicebear.com/7.x/bottts/svg?seed=lucy",date:"2026-10-06"}]}function v0(){const i=localStorage.getItem(Zd);if(i)try{return JSON.parse(i)}catch(e){console.warn("Invalid saved firebase config:",e)}return null}function IP(i){localStorage.setItem(Zd,JSON.stringify(i))}function CP(){localStorage.removeItem(Zd)}async function ef(i=null){const e=i||v0();if(e&&e.apiKey&&e.projectId)try{return du=JA().length===0?n_(e):id(),ns=lI(du),Ui=oP(du),Vi=!0,console.log("🔥 Firebase initialized with project:",e.projectId),{success:!0,message:`Connected to Firebase project: ${e.projectId}`}}catch(t){return console.warn("⚠️ Firebase init failed, falling back to local storage:",t.message),Vi=!1,{success:!1,message:t.message}}else return Vi=!1,{success:!1,message:"No custom Firebase credentials provided. Running in high-performance local mode."}}let Xe=null;const y0=[];function PP(i){y0.push(i),i(Xe)}function oa(i){Xe=i,y0.forEach(e=>e(Xe))}function tf(){Vi&&ns?Jb(ns,async i=>{if(i){const e={uid:i.uid,displayName:i.displayName||"Google Surfer",email:i.email,photoURL:i.photoURL||`https://api.dicebear.com/7.x/bottts/svg?seed=${i.uid}`,isGoogle:!0};await E0(e),oa(e)}else bh()}):bh()}function bh(){const i=localStorage.getItem(vl);if(i)try{Xe=JSON.parse(i)}catch{Xe=lg()}else Xe=lg();oa(Xe)}function lg(){const i="guest_"+Math.floor(1e5+Math.random()*9e5),e={uid:i,displayName:"Surfer #"+i.slice(-4),photoURL:`https://api.dicebear.com/7.x/bottts/svg?seed=${i}`,isGoogle:!1,highScore:0,totalCoins:0,totalRuns:0,longestDist:0};return localStorage.setItem(vl,JSON.stringify(e)),e}async function DP(){var i;if(Vi&&ns)try{const e=new Ci;e.addScope("profile"),e.addScope("email");const n=(await vR(ns,e)).user,r={uid:n.uid,displayName:n.displayName||"Google Surfer",email:n.email,photoURL:n.photoURL||`https://api.dicebear.com/7.x/bottts/svg?seed=${n.uid}`,isGoogle:!0};return await E0(r),oa(r),{success:!0,user:r}}catch(e){return console.error("Google Sign-In Error:",e),{success:!1,error:e.message}}else{const e=prompt("Enter your Google Account Display Name or connect Firebase in Settings (⚙️):",(i=Xe==null?void 0:Xe.displayName)!=null&&i.startsWith("Surfer")?"Alex Rivera":Xe==null?void 0:Xe.displayName);return e?(Xe={...Xe,displayName:e,photoURL:`https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(e)}`,isGoogle:!0},localStorage.setItem(vl,JSON.stringify(Xe)),oa(Xe),{success:!0,user:Xe}):{success:!1,error:"Sign in canceled"}}}async function LP(){if(Vi&&ns)try{await Qb(ns)}catch(i){console.warn("Sign out error:",i)}bh()}async function E0(i){if(Vi&&Ui)try{const e=xc(Ui,"users",i.uid),t=await wP(e);if(t.exists()){const n=t.data();i.highScore=n.highScore||0,i.totalCoins=n.totalCoins||0,i.totalRuns=n.totalRuns||0,i.longestDist=n.longestDist||0}else i.highScore=0,i.totalCoins=0,i.totalRuns=0,i.longestDist=0,await Mc(e,{displayName:i.displayName,email:i.email||"",photoURL:i.photoURL,highScore:0,totalCoins:0,totalRuns:0,longestDist:0,createdAt:Ac()})}catch(e){console.warn("Error syncing user record with Firestore:",e)}}async function NP({score:i,coins:e,distance:t}){if(!Xe)return;const n=new Date,r=n.toLocaleDateString()+" "+n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),s={id:"run_"+Date.now(),score:i,coins:e,distance:t,date:r,timestamp:Date.now()},o=i>(Xe.highScore||0);o&&(Xe.highScore=i),Xe.totalCoins=(Xe.totalCoins||0)+e,Xe.totalRuns=(Xe.totalRuns||0)+1,Xe.longestDist=Math.max(Xe.longestDist||0,t),localStorage.setItem(vl,JSON.stringify(Xe));let a=S0();if(a.unshift(s),a.length>50&&a.pop(),localStorage.setItem(_0,JSON.stringify(a)),OP({uid:Xe.uid,name:Xe.displayName,score:Xe.highScore,coins:Xe.totalCoins,photoURL:Xe.photoURL,date:r}),Vi&&Ui)try{const l=xc(Ui,"users",Xe.uid);await Mc(l,{displayName:Xe.displayName,photoURL:Xe.photoURL,highScore:Xe.highScore,totalCoins:Xe.totalCoins,totalRuns:Xe.totalRuns,longestDist:Xe.longestDist,lastUpdated:Ac()},{merge:!0});const u=xc(Ui,"leaderboard",Xe.uid);await Mc(u,{uid:Xe.uid,name:Xe.displayName,score:Xe.highScore,coins:Xe.totalCoins,photoURL:Xe.photoURL,date:r,updatedAt:Ac()});const h=xc(o0(Ui,"users",Xe.uid,"runs"));return await Mc(h,{score:i,coins:e,distance:t,createdAt:Ac()}),{success:!0,isNewHigh:o,cloudSynced:!0}}catch(l){return console.warn("Firestore record save error:",l),{success:!0,isNewHigh:o,cloudSynced:!1,error:l.message}}return oa(Xe),{success:!0,isNewHigh:o,cloudSynced:!1}}async function UP(){if(Vi&&Ui)try{const i=vP(o0(Ui,"leaderboard"),yP("score","desc"),EP(20)),e=await MP(i),t=[];let n=1;if(e.forEach(r=>{t.push({rank:n++,id:r.id,...r.data()})}),t.length>0)return t}catch(i){console.warn("Failed to fetch Firestore leaderboard, falling back to local:",i)}return T0()}function T0(){const i=localStorage.getItem(g0);let e=i?JSON.parse(i):RP();return e.sort((t,n)=>n.score-t.score),e.map((t,n)=>({...t,rank:n+1}))}function OP(i){let e=T0();const t=e.findIndex(n=>n.uid===i.uid||n.name===i.name);t!==-1?i.score>e[t].score&&(e[t]={...e[t],...i}):e.push(i),e.sort((n,r)=>r.score-n.score),localStorage.setItem(g0,JSON.stringify(e.slice(0,30)))}function S0(){const i=localStorage.getItem(_0);return i?JSON.parse(i):[]}function yl(){return Xe}const FP=document.getElementById("game-container"),Rh=document.getElementById("hud"),nf=document.getElementById("start-screen"),Ih=document.getElementById("game-over-screen"),qo=document.getElementById("pause-screen"),x0=document.getElementById("leaderboard-modal"),w0=document.getElementById("records-modal"),M0=document.getElementById("settings-modal"),kP=document.getElementById("hud-score"),VP=document.getElementById("hud-coins"),BP=document.getElementById("hud-distance"),zP=document.getElementById("hud-multiplier"),ug=document.getElementById("powerup-timers"),fu=document.getElementById("hoverboard-indicator"),GP=document.getElementById("btn-play"),HP=document.getElementById("btn-pause"),WP=document.getElementById("btn-resume"),qP=document.getElementById("btn-restart"),XP=document.getElementById("btn-pause-restart"),jP=document.getElementById("btn-pause-home"),$P=document.getElementById("btn-over-home"),Ch=document.getElementById("btn-google-auth"),Yc=document.getElementById("auth-btn-text"),YP=document.getElementById("btn-open-leaderboard"),KP=document.getElementById("btn-over-leaderboard"),JP=document.getElementById("btn-close-leaderboard"),QP=document.getElementById("btn-refresh-leaderboard"),ZP=document.getElementById("btn-open-records"),eD=document.getElementById("btn-close-records"),tD=document.getElementById("btn-open-settings"),nD=document.getElementById("btn-close-settings"),Ph=document.getElementById("btn-toggle-sound"),Xo=document.getElementById("btn-sound-setting"),pu=document.getElementById("btn-music-setting"),iD=document.getElementById("btn-save-firebase"),rD=document.getElementById("btn-reset-firebase"),sD=document.getElementById("user-avatar"),oD=document.getElementById("user-name"),aD=document.getElementById("user-top-score"),cD=document.getElementById("final-score"),lD=document.getElementById("final-coins"),uD=document.getElementById("final-distance"),hD=document.getElementById("all-time-best"),hg=document.getElementById("new-high-score-banner"),oc=document.getElementById("sync-status"),ac=document.getElementById("leaderboard-body"),dg=document.getElementById("my-rank-banner"),dD=document.getElementById("record-total-runs"),fD=document.getElementById("record-high-score"),pD=document.getElementById("record-total-coins"),mD=document.getElementById("record-longest-dist"),mu=document.getElementById("history-runs-list"),rf=document.getElementById("firebase-config-json"),si=document.getElementById("firebase-connect-msg"),sf=new EE,$n=new Vn(65,window.innerWidth/window.innerHeight,.1,300),ji=new fM({antialias:!0,alpha:!1,powerPreference:"high-performance"});ji.setSize(window.innerWidth,window.innerHeight);ji.setPixelRatio(Math.min(window.devicePixelRatio,2));ji.shadowMap.enabled=!0;ji.shadowMap.type=pg;ji.toneMapping=mg;ji.toneMappingExposure=1.15;FP.appendChild(ji.domElement);const gD=new gM(sf),Kc=new mM;sf.add(Kc.mesh);const Rt=new xM(Kc,gD,{onGameStart:()=>{nf.classList.add("hidden"),Ih.classList.add("hidden"),qo.classList.add("hidden"),Rh.classList.remove("hidden")},onHUDUpdate:({score:i,coins:e,distance:t,multiplier:n,activePowerups:r})=>{kP.textContent=i.toLocaleString(),VP.textContent=e.toLocaleString(),BP.textContent=t.toLocaleString(),zP.textContent=`x${n}`,_D(r)},onHoverboardToggle:i=>{i?fu.classList.remove("hidden"):fu.classList.add("hidden")},onPause:()=>{qo.classList.remove("hidden")},onResume:()=>{qo.classList.add("hidden")},onGameOver:async({score:i,coins:e,distance:t})=>{Rh.classList.add("hidden"),Ih.classList.remove("hidden"),fu.classList.add("hidden"),cD.textContent=i.toLocaleString(),lD.textContent=`🪙 ${e.toLocaleString()}`,uD.textContent=`${t.toLocaleString()} m`;const n=yl(),r=(n==null?void 0:n.highScore)||0;hD.textContent=Math.max(r,i).toLocaleString(),i>r?(hg.classList.remove("hidden"),pM({particleCount:100,spread:70,origin:{y:.6}})):hg.classList.add("hidden"),oc.textContent="☁️ Syncing record with Cloud Leaderboard...";try{(await NP({score:i,coins:e,distance:t})).cloudSynced?oc.textContent="✅ Record successfully synced to Global Cloud Leaderboard!":oc.textContent="💾 Record stored securely in your career history & local leaderboard."}catch{oc.textContent="💾 Record saved locally."}}});function _D(i){ug.innerHTML="",[{key:"jetpack",name:"Jetpack",max:10,icon:"🚀",color:"#10b981"},{key:"magnet",name:"Coin Magnet",max:12,icon:"🧲",color:"#ef4444"},{key:"sneakers",name:"Super Sneakers",max:12,icon:"👟",color:"#8b5cf6"},{key:"multiplier",name:"2X Score",max:15,icon:"✖️2",color:"#ec4899"}].forEach(t=>{const n=i[t.key];if(n>0){const r=Math.min(100,n/t.max*100),s=document.createElement("div");s.className="powerup-meter",s.innerHTML=`
        <span class="icon">${t.icon}</span>
        <div class="bar-wrap">
          <span class="p-name">${t.name}</span>
          <div class="p-progress">
            <div class="p-fill" style="width: ${r}%; background: ${t.color}"></div>
          </div>
        </div>
      `,ug.appendChild(s)}})}const vD=new CE;function A0(){requestAnimationFrame(A0);const i=vD.getDelta();if(Rt.state===Ft.PLAYING){Rt.update(i);const e=Kc.mesh.position;$n.position.x=ui.lerp($n.position.x,e.x*.45,i*8),$n.position.y=ui.lerp($n.position.y,e.y*.35+4.6,i*6),$n.position.z=e.z+8.2,$n.lookAt(e.x*.15,e.y*.25+2.2,e.z-7)}else if(Rt.state===Ft.MENU){const e=Date.now()*.001;$n.position.set(Math.sin(e*.5)*1.5,3.8,8.5),$n.lookAt(0,1.8,-4),Kc.updateAnimation(i,10,{isJumping:!1,isRolling:!1})}ji.render(sf,$n)}A0();window.addEventListener("resize",()=>{$n.aspect=window.innerWidth/window.innerHeight,$n.updateProjectionMatrix(),ji.setSize(window.innerWidth,window.innerHeight)});window.addEventListener("keydown",i=>{if(Zc(),i.code==="Space"&&(Rt.state===Ft.MENU||Rt.state===Ft.GAMEOVER)){i.preventDefault(),Rt.startRun();return}if(i.code==="KeyP"||i.code==="Escape"){i.preventDefault(),Rt.state===Ft.PLAYING?Rt.pause():Rt.state===Ft.PAUSED&&Rt.resume();return}if(Rt.state===Ft.PLAYING)switch(i.code){case"ArrowLeft":case"KeyA":i.preventDefault(),Rt.moveLeft();break;case"ArrowRight":case"KeyD":i.preventDefault(),Rt.moveRight();break;case"ArrowUp":case"KeyW":i.preventDefault(),Rt.jump();break;case"ArrowDown":case"KeyS":i.preventDefault(),Rt.roll();break;case"Space":i.preventDefault(),Rt.handleSpacePress();break}});let b0=0,R0=0,I0=0;window.addEventListener("touchstart",i=>{Zc();const e=i.changedTouches[0];b0=e.clientX,R0=e.clientY,I0=Date.now()},{passive:!0});window.addEventListener("touchend",i=>{const e=i.changedTouches[0],t=e.clientX-b0,n=e.clientY-R0,r=Date.now()-I0;Rt.state===Ft.PLAYING&&(Math.abs(t)>Math.abs(n)?Math.abs(t)>25&&(t<0?Rt.moveLeft():Rt.moveRight()):Math.abs(n)>25&&(n<0?Rt.jump():Rt.roll()),r<250&&Math.abs(t)<15&&Math.abs(n)<15&&Rt.handleSpacePress())},{passive:!0});GP.addEventListener("click",()=>{Zc(),Rt.startRun()});HP.addEventListener("click",()=>Rt.pause());WP.addEventListener("click",()=>Rt.resume());qP.addEventListener("click",()=>{Zc(),Rt.startRun()});XP.addEventListener("click",()=>{qo.classList.add("hidden"),Rt.startRun()});jP.addEventListener("click",()=>{qo.classList.add("hidden"),nf.classList.remove("hidden"),Rh.classList.add("hidden"),Rt.state=Ft.MENU,Cc()});$P.addEventListener("click",()=>{Ih.classList.add("hidden"),nf.classList.remove("hidden"),Rt.state=Ft.MENU});Ch.addEventListener("click",async()=>{const i=yl();if(i!=null&&i.isGoogle)confirm(`Currently signed in as ${i.displayName}. Would you like to sign out?`)&&await LP();else{Yc.textContent="Signing in...";const e=await DP();!e.success&&e.error&&(Yc.textContent="Google Sign In")}});PP(i=>{i&&(oD.textContent=i.displayName,sD.src=i.photoURL||`https://api.dicebear.com/7.x/bottts/svg?seed=${i.uid}`,aD.textContent=(i.highScore||0).toLocaleString(),i.isGoogle?(Yc.textContent="Signed in (Google)",Ch.style.background="#e0f2fe"):(Yc.textContent="Google Sign In",Ch.style.background="#ffffff"))});async function of(){x0.classList.remove("hidden"),ac.innerHTML='<tr><td colspan="5" class="loading-cell">Loading live world rankings...</td></tr>';const i=await UP();if(ac.innerHTML="",!i||i.length===0){ac.innerHTML='<tr><td colspan="5" class="loading-cell">No rankings recorded yet. Be the first!</td></tr>';return}const e=yl();let t=!1;i.forEach(n=>{const r=document.createElement("tr");let s="";n.rank===1?s="rank-1":n.rank===2?s="rank-2":n.rank===3&&(s="rank-3"),e&&(n.uid===e.uid||n.name===e.displayName)&&(r.style.background="rgba(255, 208, 0, 0.12)",t=!0,dg.textContent=`Your Rank: #${n.rank} with ${n.score.toLocaleString()} points!`),r.innerHTML=`
      <td><span class="rank-badge ${s}">${n.rank}</span></td>
      <td>
        <div class="surfer-cell">
          <img src="${n.photoURL||"https://api.dicebear.com/7.x/bottts/svg?seed=surfer"}" alt="" class="surfer-mini-avatar" />
          <span class="surfer-name">${n.name||"Surfer"}</span>
        </div>
      </td>
      <td class="score-cell">${(n.score||0).toLocaleString()}</td>
      <td class="coin-cell">🪙 ${(n.coins||0).toLocaleString()}</td>
      <td class="date-cell">${n.date||"Recent"}</td>
    `,ac.appendChild(r)}),!t&&e&&(dg.textContent=e.isGoogle?"Play a run to set your global ranking!":"Sign in with Google to submit your score to the world!")}YP.addEventListener("click",of);KP.addEventListener("click",of);QP.addEventListener("click",of);JP.addEventListener("click",()=>x0.classList.add("hidden"));function yD(){w0.classList.remove("hidden");const i=yl()||{};dD.textContent=(i.totalRuns||0).toLocaleString(),fD.textContent=(i.highScore||0).toLocaleString(),pD.textContent=(i.totalCoins||0).toLocaleString(),mD.textContent=`${(i.longestDist||0).toLocaleString()} m`;const e=S0();mu.innerHTML="",e.length===0?mu.innerHTML='<div class="empty-history">No runs recorded yet. Start surfing!</div>':e.forEach(t=>{const n=document.createElement("div");n.className="history-item",n.innerHTML=`
        <div class="history-score">${t.score.toLocaleString()} pts</div>
        <div class="history-meta">
          <span>🪙 ${t.coins}</span>
          <span>🏃 ${t.distance} m</span>
          <span>📅 ${t.date}</span>
        </div>
      `,mu.appendChild(n)})}ZP.addEventListener("click",yD);eD.addEventListener("click",()=>w0.classList.add("hidden"));tD.addEventListener("click",()=>{M0.classList.remove("hidden");const i=v0();i&&(rf.value=JSON.stringify(i,null,2))});nD.addEventListener("click",()=>M0.classList.add("hidden"));let Bn=!0,Io=!0;Ph.addEventListener("click",()=>{Bn=!Bn,qg(Bn),Ph.textContent=`🔊 Sound: ${Bn?"ON":"MUTED"}`,Xo.textContent=`Sound: ${Bn?"ENABLED":"DISABLED"}`,Xo.className=`toggle-btn ${Bn?"active":""}`});Xo.addEventListener("click",()=>{Bn=!Bn,qg(Bn),Xo.textContent=`Sound: ${Bn?"ENABLED":"DISABLED"}`,Xo.className=`toggle-btn ${Bn?"active":""}`,Ph.textContent=`🔊 Sound: ${Bn?"ON":"MUTED"}`});pu.addEventListener("click",()=>{Io=!Io,_M(Io),pu.textContent=`Music: ${Io?"ENABLED":"DISABLED"}`,pu.className=`toggle-btn ${Io?"active":""}`});iD.addEventListener("click",async()=>{const i=rf.value.trim();if(!i){si.textContent="❌ Please paste a valid Firebase JSON config object.",si.style.color="#ff3366";return}try{const e=JSON.parse(i);IP(e);const t=await ef(e);t.success?(si.textContent="✅ Connected successfully! Initializing Google Auth...",si.style.color="#00e676",tf()):(si.textContent=`⚠️ Saved, but connect returned: ${t.message}`,si.style.color="#f59e0b")}catch(e){si.textContent=`❌ Invalid JSON format: ${e.message}`,si.style.color="#ff3366"}});rD.addEventListener("click",()=>{CP(),rf.value="",si.textContent="Reset to default high-speed persistent mode.",si.style.color="#94a3b8",ef(),tf()});(async function(){await ef(),tf()})();
