(()=>{"use strict";var e,t={578:(e,t,n)=>{var o=n(311);const r={init:function(){o(".scroll-down").click((function(){o("html, body").animate({scrollTop:o(o(this).attr("href")).offset().top},1e3)}))}};var i=n(311);const s={init:function(){i(".accordion-btn").on("click",(function(){if(i(this).hasClass("open"))i(this).next(".accordion-slide").slideUp(),i(this).removeClass("open"),i(this).closest(".toggle").find(".item").removeClass("open"),i(this).closest(".toggle").find(".item").removeClass("done");else{i(this).closest(".toggle").find(".item").removeClass("open"),i(this).closest(".toggle").find(".accordion-btn").removeClass("open"),i(this).closest(".toggle").find(".accordion-slide").slideUp(),i(this).next(".accordion-slide").slideDown(),i(this).addClass("open"),i(this).closest(".item").addClass("open"),i(this).closest(".item").prevAll(".item").addClass("done");var e=i(this);setTimeout((function(){i("html, body").animate({scrollTop:e.offset().top-100},1e3)}),500)}}))}};function l(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){l=!0,i=e},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw i}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}n(311)((function(){r.init(),s.init()})),document.addEventListener("DOMContentLoaded",(function(){window.addEventListener("scroll",(function(){window.scrollY>50?document.querySelector(".navigation").classList.add("fixed"):document.querySelector(".navigation").classList.remove("fixed")})),document.querySelector(".btn-menu").addEventListener("click",(function(){this.classList.toggle("btn-menu-open"),document.body.classList.toggle("menu-open"),document.body.classList.toggle("hidden-ov")})),document.querySelector(".menu-overlay").addEventListener("click",(function(){document.querySelector(".btn-menu").classList.toggle("btn-menu-open"),document.body.classList.toggle("menu-open"),document.body.classList.toggle("hidden-ov")}));var e,t=l(document.querySelectorAll(".has-plus"));try{for(t.s();!(e=t.n()).done;){e.value.addEventListener("click",(function(){this.classList.toggle("open")}))}}catch(e){t.e(e)}finally{t.f()}document.getElementById("play-btn").addEventListener("click",(function(){video.paused?video.play():video.pause()}))}))},447:()=>{},311:e=>{e.exports=jQuery}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,e=[],o.O=(t,n,r,i)=>{if(!n){var s=1/0;for(d=0;d<e.length;d++){for(var[n,r,i]=e[d],l=!0,c=0;c<n.length;c++)(!1&i||s>=i)&&Object.keys(o.O).every((e=>o.O[e](n[c])))?n.splice(c--,1):(l=!1,i<s&&(s=i));if(l){e.splice(d--,1);var a=r();void 0!==a&&(t=a)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,r,i]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={788:0,612:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,i,[s,l,c]=n,a=0;if(s.some((t=>0!==e[t]))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(c)var d=c(o)}for(t&&t(n);a<s.length;a++)i=s[a],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(d)},n=self.webpackChunkwebpack=self.webpackChunkwebpack||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),o.O(void 0,[612],(()=>o(578)));var r=o.O(void 0,[612],(()=>o(447)));r=o.O(r)})();