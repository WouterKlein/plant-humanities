(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{396:function(e,t,n){var o,a;a=this,void 0===(o=function(){return a.returnExportsGlobal=function(){"use strict";function a(){var a,b;this.q=[],this.add=function(a){this.q.push(a)},this.call=function(){for(a=0,b=this.q.length;b>a;a++)this.q[a].call()}}function e(e,n){if(e.resizedAttached){if(e.resizedAttached)return void e.resizedAttached.add(n)}else e.resizedAttached=new a,e.resizedAttached.add(n);e.resizeSensor=document.createElement("div"),e.resizeSensor.className="resize-sensor";var o="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden; opacity: 0;",g="position: absolute; left: 0; top: 0; transition: 0s;";e.resizeSensor.style.cssText=o,e.resizeSensor.innerHTML='<div class="resize-sensor-expand" style="'+o+'"><div style="'+g+'"></div></div><div class="resize-sensor-shrink" style="'+o+'"><div style="'+g+' width: 200%; height: 200%"></div></div>',e.appendChild(e.resizeSensor),"static"==function(a,b){return a.currentStyle?a.currentStyle[b]:window.getComputedStyle?window.getComputedStyle(a,null).getPropertyValue(b):a.style[b]}(e,"position")&&(e.style.position="relative");var r=e.resizeSensor.childNodes[0],i=r.childNodes[0],c=e.resizeSensor.childNodes[1],l=function(){i.style.width=1e5+"px",i.style.height=1e5+"px",r.scrollLeft=1e5,r.scrollTop=1e5,c.scrollLeft=1e5,c.scrollTop=1e5};l();var d=!1,h=function(){e.resizedAttached&&(d&&(e.resizedAttached.call(),d=!1),t(h))};t(h);var f,v,p,q,m=function(){((p=e.offsetWidth)!=f||(q=e.offsetHeight)!=v)&&(d=!0,f=p,v=q),l()},s=function(a,b,e){a.attachEvent?a.attachEvent("on"+b,e):a.addEventListener(b,e)};s(r,"scroll",m),s(c,"scroll",m)}var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(a){return window.setTimeout(a,20)},n=function(a,b){var t=Object.prototype.toString.call(a),n=this._isCollectionTyped="[object Array]"===t||"[object NodeList]"===t||"[object HTMLCollection]"===t||"undefined"!=typeof jQuery&&a instanceof window.jQuery||"undefined"!=typeof Elements&&a instanceof window.Elements;if(this._element=a,n)for(var g=0,o=a.length;o>g;g++)e(a[g],b);else e(a,b)};return n.prototype.detach=function(){var b=this._isCollectionTyped,e=this._element;if(b)for(var t=0,o=e.length;o>t;t++)n.detach(e[t]);else n.detach(e)},n.detach=function(a){a.resizeSensor&&(a.removeChild(a.resizeSensor),delete a.resizeSensor,delete a.resizedAttached)},n}()}.apply(t,[]))||(e.exports=o)},397:function(e,t,n){"use strict";n.r(t),function(e){n(65),n(109),n(233),n(50),n(66),n(110);var o=n(74),r=n.n(o),c=n(396),l=n.n(c);function d(e){var t=e.match(/^(https?)\:\/\/(([^:\/?#]*)(?:\:([0-9]+))?)(\/[^?#]*)(\?[^#]*|)(#.*|)$/);return t&&{protocol:t[1],host:t[2],hostname:t[3],origin:"".concat(t[1],"://").concat(t[2]),port:t[4],pathname:t[5],search:t[6],hash:t[7]}}function h(e){e=e||window.location.search;var t={};try{0===e.indexOf("?")&&(e=e.substr(1));for(var n=e.split("&"),i=0;i<n.length;i++){var o=n[i].split("=");if(""!==o[0]){var r=o[0];if(2===o.length){var c=o[1];c=(c=decodeURIComponent(c)).replace(/\+/g," "),t[r]=c}else t[r]="true"}}}catch(e){console.log(e)}return t}t.default={name:"main-mixin",data:function(){return{essay:void 0}},computed:{html:function(){return this.$store.getters.html},baseUrl:function(){return this.$store.getters.baseUrl},navMenuItems:function(){return this.$store.getters.navigation||[]},settingsLoaded:function(){return this.$store.getters.settingsLoaded}},methods:{getPage:function(t){var n=this;(document.getElementById("scrollableContent")||window).scrollTo(0,0),window.data=void 0;var o=this.navMenuItems.find((function(e){return t.path===e.path}))||{};console.log("getPage",t,this.navMenuItems,o);var path="/"===t.path?"/index":t.path.replace(/\/essay\//,"/"),c=o.source||path,l=t.hash.length>1?t.hash.slice(1):void 0,d=0===c.indexOf("http")?c:"".concat(this.baseUrl,"/content").concat(c,".md");console.log("contentUrl=".concat(d));var h="".concat("https://us-central1-visual-essay.cloudfunctions.net","/essay?src=").concat(encodeURIComponent(d),"&nocss");e.env.context&&(h+="&context=".concat(e.env.context)),r.a.get(h).then((function(e){return n.$store.dispatch("setHtml",e.data)})).then((function(e){return n.onLoaded(path,l)}))},onLoaded:function(path,e){var t=this,n=document.getElementById("visual-essay");if(console.log("onLoaded"),n){this.updateLinks(),e&&this.scrollToElem(e);var o=this;new l.a(n,(function(){var e=document.getElementById("essay-spacer");o.$store.dispatch("setSpacerHeight",e?e.clientHeight:0)})),this.setPageMetadata(path)}else setTimeout((function(){t.onLoaded(path,e)}),250)},setPageMetadata:function(path){var e=this.navMenuItems.find((function(e){return path===e.path}))||{},t=window.data.find((function(e){return"essay"===e.type}))||{};this.$store.dispatch("setTitle",t.title||e.title||this.$store.getters.siteTitle),this.$store.dispatch("setBanner",t.banner||e.banner||this.$store.getters.siteBanner)},updateLinks:function(){var e=this;this.$refs[this.$options.name]&&(this.$refs[this.$options.name].querySelectorAll("a").forEach((function(link){if(link.href){var t=d(link.href);0===e.baseUrl.indexOf(t.origin)&&(link.removeAttribute("href"),link.addEventListener("click",(function(n){e.$router.push({path:t.pathname,query:h(t.search),hash:t.hash})})))}})),this.$refs[this.$options.name].querySelectorAll("img").forEach((function(img){var t=d(img.src);0===t.pathname.indexOf("/images/")&&e.baseUrl.indexOf(0===t.origin)&&(img.src="".concat(e.baseUrl).concat(t.pathname))})))},scrollToElem:function(e){var t=document.getElementById(e);if(t){document.querySelector("header");var n=t.offsetTop+140,o=document.getElementById("scrollableContent")||window;console.log("scrollTo",o,t,n),o.scrollTo(0,n)}}}}}.call(this,n(144))}}]);