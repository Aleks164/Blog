!function(){"use strict";var e,t,n,o,r,a,c,i,l,s,d,u,p,A,f={21:function(e,t,n){n.d(t,{Z:function(){return p}});var o=n(537),r=n.n(o),a=n(645),c=n.n(a),i=n(667),l=n.n(i),s=new URL(n(789),n.b),d=c()(r()),u=l()(s);d.push([e.id,"html{width:1050px}body{background-color:#fefbd8}.titleleo{display:block;height:150px;width:1000px}#leo{background-image:url("+u+");background-size:100% 100%;border:none;float:left;height:160px;left:910px;position:absolute;top:0;width:160px}#leo,.title{display:block}.title{color:orange;font-family:Papyrus,sans-serif;font-size:100px;margin:1px;padding-left:15px;text-align:left}#hr1{background-color:orange;border-width:0;height:4px}#hr1,.hrd1{float:left;width:1050px}.hrd1{display:block;margin:4px}","",{version:3,sources:["webpack://./src/sassStyles/dino_image_style.sass"],names:[],mappings:"AAAA,KACE,YAAA,CAEF,KACE,wBAAA,CAEF,UACE,aAAA,CAEA,YAAA,CADA,YACA,CAEF,KAIE,wDAAA,CAIA,yBAAA,CAHA,WAAA,CAHA,UAAA,CAQA,YAAA,CAHA,UAAA,CADA,iBAAA,CAHA,KAAA,CAMA,WACA,CAEF,YAXE,aAkBA,CAPF,OAGE,YAAA,CADA,8BAAA,CAKA,eAAA,CAFA,UAAA,CACA,iBAAA,CALA,eAMA,CAEF,KAGE,uBAAA,CACA,cAAA,CAFA,UAGA,CAEF,WANE,UAAA,CAIA,YAMA,CAJF,MACE,aAAA,CAEA,UACA",sourcesContent:['html\n  width: 1050px\n\nbody\n  background-color: #fefbd8\n\n.titleleo\n  display: block\n  width: 1000px\n  height: 150px\n\n#leo\n  display: block\n  float: left\n  top: 0px\n  background-image: url("../images/leo.png")\n  border: none\n  position: absolute\n  left: 910px\n  background-size: 100% 100%\n  width: 160px\n  height: 160px\n\n.title\n  text-align: left\n  font-family: Papyrus, sans-serif\n  color: orange\n  display: block\n  margin: 1px\n  padding-left: 15px\n  font-size: 100px\n\n#hr1\n  float: left\n  height: 4px\n  background-color: orange\n  border-width: 0\n  width: 1050px\n\n.hrd1\n  display: block\n  float: left\n  margin: 4px\n  width: 1050px'],sourceRoot:""}]);const p=d},645:function(e){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(c[l]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);o&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},667:function(e){e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},537:function(e){e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */"),c=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[t].concat(c).concat([a]).join("\n")}return[t].join("\n")}},379:function(e){var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var l=e[i],s=o.base?l[0]+o.base:l[0],d=a[s]||0,u="".concat(s," ").concat(d);a[s]=d+1;var p=n(u),A={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(A);else{var f=r(A,o);o.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var l=o(e,r),s=0;s<a.length;s++){var d=n(a[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=l}}},569:function(e){var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:function(e){e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:function(e,t,n){e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:function(e){e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:function(e){e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},789:function(e,t,n){e.exports=n.p+"./images/023de789b9f8d7a5be5f.png"}},h={};function y(e){var t=h[e];if(void 0!==t)return t.exports;var n=h[e]={id:e,exports:{}};return f[e](n,n.exports,y),n.exports}y.m=f,y.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return y.d(t,{a:t}),t},y.d=function(e,t){for(var n in t)y.o(t,n)&&!y.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},y.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),y.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;y.g.importScripts&&(e=y.g.location+"");var t=y.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),y.p=e}(),y.b=document.baseURI||self.location.href,e=y(379),t=y.n(e),n=y(795),o=y.n(n),r=y(569),a=y.n(r),c=y(565),i=y.n(c),l=y(216),s=y.n(l),d=y(589),u=y.n(d),p=y(21),(A={}).styleTagTransform=u(),A.setAttributes=i(),A.insert=a().bind(null,"head"),A.domAPI=o(),A.insertStyleElement=s(),t()(p.Z,A),p.Z&&p.Z.locals&&p.Z.locals,window.addEventListener("load",(function(){var e=document.querySelector(".carusel");"number"==typeof Number(e.dataset.width)&&(e.style.width="".concat(e.dataset.width,"px"),console.log(e.style.width,"kk",e.dataset.width)),"number"==typeof Number(e.dataset.height)&&(e.style.height="".concat(e.dataset.height,"px"),console.log(e.style.height,"kk",e.dataset.height));var t,n=e.dataset.showSliderLine,o=e.dataset.buttonSliderShow,r=e.dataset.prevNext,a=e.querySelectorAll("img"),c=[],i=0;a.forEach((function(e){c.push(e.outerHTML)}));var l=c.map((function(e){return e.match(/src="(.*[(\.jpg)+(\.png)+])"/)[1]}));function s(){i+1>a.length-1?("on"===n&&(document.querySelectorAll(".item")[i].style.backgroundColor="#adc5db5c"),a[i].style.display="none",i=0,"on"===n&&(document.querySelectorAll(".item")[i].style.backgroundColor="#f3d59d99"),a[i].style.display="block",e.style.background='url("'.concat(l[i],'") 0% 0% / 100% 100% no-repeat, rgba(255, 255, 255, 0.5)')):("on"===n&&(document.querySelectorAll(".item")[i].style.backgroundColor="#adc5db5c"),a[i].style.display="none",i+=1,"on"===n&&(document.querySelectorAll(".item")[i].style.backgroundColor="#f3d59d99"),a[i].style.display="block",e.style.background='url("'.concat(l[i],'") 0% 0% / 100% 100% no-repeat, rgba(255, 255, 255, 0.5)'))}if("on"===r){var d=document.createElement("span"),u=document.createElement("span");d.classList.add("slide","prev"),u.classList.add("slide","next"),d.innerHTML="<",u.innerHTML=">",u.addEventListener("click",s),d.addEventListener("click",(function(){i-1<0?("on"===n&&(document.querySelectorAll(".item")[i].style.backgroundColor="#adc5db5c"),a[i].style.display="none",i=a.length-1,"on"===n&&(document.querySelectorAll(".item")[i].style.backgroundColor="#f3d59d99"),a[i].style.display="block",e.style.background='url("'.concat(l[i],'") 0% 0% / 100% 100% no-repeat, rgba(255, 255, 255, 0.5)')):("on"===n&&(document.querySelectorAll(".item")[i].style.backgroundColor="#adc5db5c"),a[i].style.display="none",i-=1,"on"===n&&(document.querySelectorAll(".item")[i].style.backgroundColor="#f3d59d99"),a[i].style.display="block",e.style.background='url("'.concat(l[i],'") 0% 0% / 100% 100% no-repeat, rgba(255, 255, 255, 0.5)'))})),e.appendChild(d),e.appendChild(u)}if("on"===n){var p=document.createElement("div");p.id="s-cont",a.forEach((function(t,n){var o=document.createElement("span");o.style.width="".concat(90/a.length,"%"),o.classList.add("item"),o.dataset.spannumber=n,o.addEventListener("click",(function(){document.querySelectorAll(".item").forEach((function(e){e.style.backgroundColor="#adc5db5c"})),o.style.backgroundColor="#f3d59d99",a[i].style.display="none",a[i=n].style.display="block",e.style.background='url("'.concat(l[i],'") 0% 0% / 100% 100% no-repeat, rgba(255, 255, 255, 0.5)')})),o.innerHTML="",p.appendChild(o)})),e.appendChild(p)}if("on"===o){var A=document.createElement("span");A.classList.add("slidebut"),A.innerHTML="SlideShow",A.addEventListener("click",(function(){A.classList.toggle("border"),t?(A.innerText="SlideShow",clearInterval(t),t=null):(A.innerHTML="SlideShow <span>ON</span>",t=setInterval(s,2e3))})),e.appendChild(A)}document.querySelectorAll(".item")[i].style.backgroundColor="#f3d59d99",a[i].style.display="block",e.style.background='url("'.concat(l[i],'") 0% 0% / 100% 100% no-repeat, rgba(255, 255, 255, 0.5)')}))}();