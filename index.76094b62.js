!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},i=n.parcelRequirec3bb;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},n.parcelRequirec3bb=i),i.register("iE7OH",(function(t,n){var r,a;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},a=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("gVa74",(function(e,n){var r=i("bpxeT"),a=i("2TvXO"),o=i("cFGTe"),s=i("k7KPL"),c=i("4hf9a"),l={hero:document.getElementById("hero")},u=new(0,o.RequestServer);function d(){return(d=t(r)(t(a).mark((function e(){var n,r,i,o,d,p,f,h;return t(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.trendingDay();case 3:n=e.sent,r=n.data.results,i=r,o=(0,s.markupHero)(i),l.hero.innerHTML=o,(0,c.applyWatchTraileListener)(),d=document.querySelector(".hero__discription"),p=document.querySelector(".hero__title"),f=document.querySelector(".hero__text"),h=document.querySelector(".switcher"),"true"===localStorage.getItem("isLight")&&(d.classList.add("hero__discription-light"),p.classList.add("hero__title-light"),f.classList.add("hero__text-light")),h.addEventListener("click",(function(){d.classList.toggle("hero__discription-light"),p.classList.toggle("hero__title-light"),f.classList.toggle("hero__text-light")})),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})))).apply(this,arguments)}!function(){d.apply(this,arguments)}()})),i.register("k7KPL",(function(n,r){e(n.exports,"markupHero",(function(){return o}));var a=i("9dSW6");function o(e){var n=e[Math.round(Math.random()*(e.length-1))],r="";n||(n={original_title:"Let’s Make Your Own Cinema",overview:"Is a guide to creating a personalized movie theater experience. \n        You'll need a projector, screen, and speakers. Decorate your space, choose your \n        films, and stock up on snacks for the full experience.",vote_average:"",id:""},r=t(a));var i=n.backdrop_path,o=n.original_title,s=void 0===o?"":o,c=n.overview,l=void 0===c?"":c,u=n.vote_average,d=void 0===u?"":u,p=n.id;r="https://image.tmdb.org/t/p/original".concat(i);for(var f="",h=1;h<=5;h++){var g="fa-star-o";2*h<=d?g="fa-star":2*h-1<=d&&(g="fa-star-half-o"),f+='<span class="fa star '.concat(g,'"> </span>')}return'<div class="hero__discription">\n\n            <h2 class="hero__title">'.concat(s,'</h2>\n            <p class="hero__rating">').concat(f,'</p>\n            <p class="hero__text">').concat(l,'</p>\n            <button id="watch-trailter__btn" class="hero__btn watch-trailer " data-id="').concat(p,'" type="button">Watch trailer</button>\n            </div>\n            <div class="hero__backgr" id="').concat(p,"\">\n            <img src='").concat(r,'\' loading="lazy" alt="').concat(l,'" class="hero__img" />\n            </div>')}})),i.register("9dSW6",(function(e,t){e.exports=i("aNJCr").getBundleURL("hfX1u")+i("iE7OH").resolve("6dCFz")})),i.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var a={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=a[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),a[e]=t),t}})),i.register("4hf9a",(function(n,r){e(n.exports,"applyWatchTraileListener",(function(){return h}));var a=i("bpxeT"),o=i("2TvXO"),s=i("cFGTe"),c=i("PIsXK"),l=i("gvgly"),u=(document.querySelector('[data-modal="modal-2"]'),new(0,s.RequestServer));function d(e){return p.apply(this,arguments)}function p(){return(p=t(a)(t(o).mark((function e(n){var r,a,i,s,d,p,h,g,m,v,_;return t(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,c.modalListener)("modal-2",f),r=document.getElementsByClassName("loader-wrapper")[0],a=document.getElementsByClassName("modal-no-trailer")[0],i=document.getElementsByClassName("modal-trailer")[0],s=new(0,l.default)(r),a.classList.add("hidden"),s.show(),e.prev=7,d=n.currentTarget.getAttribute("data-id"),e.next=11,u.movieTrailer(d);case 11:p=e.sent,h=p.data.results,(g=h[0])?(m='<iframe id="trailer-video-player" width="100%" height="100%" src="https://www.youtube.com/embed/'.concat(g.key,'" title="').concat(g.name,'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'),i.innerHTML=m,setTimeout((function(){s.hide(),i.classList.remove("hidden")}),1e3)):(s.hide(),a.classList.remove("hidden"),i.classList.add("hidden")),v=document.querySelector(".modal-trailer"),_=document.querySelector(".switcher"),"true"===localStorage.getItem("isLight")&&v.classList.add("modal-trailer-light"),_.addEventListener("click",(function(){v.classList.toggle("modal-trailer-light")})),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(7),console.log(e.t0);case 25:case"end":return e.stop()}}),e,null,[[7,22]])})))).apply(this,arguments)}function f(){var e=document.getElementsByClassName("modal-trailer")[0],t=document.getElementsByClassName("modal-no-trailer")[0];e.innerHTML="",null==t||t.classList.remove("hidden"),null==e||e.classList.add("hidden")}function h(){document.getElementById("watch-trailter__btn").addEventListener("click",d)}})),i.register("gvgly",(function(n,r){e(n.exports,"default",(function(){return s}));var a=i("8MBJY"),o=i("hKHmD"),s=function e(n){"use strict";var r=this;t(a)(this,e),t(o)(this,"init",(function(){r.hide(),r.element.innerHTML=r.getLoader()})),t(o)(this,"getLoader",(function(){return'<div class="load-align"><div class="film"><span></span><span></span><span></span><span></span></div><div class="film"><span></span><span></span><span></span><span></span></div></div>\t'})),t(o)(this,"show",(function(){r.element.classList.remove("hidden")})),t(o)(this,"hide",(function(){r.element.classList.add("hidden")})),this.element=n,this.init()}})),i.register("1KhuP",(function(t,n){e(t.exports,"markup",(function(){return a}));var r=i("3qwTJ");function a(e){return e.map((function(e){var t,n=e.poster_path,a=e.original_title,i=void 0===a?"":a,o=e.genre_ids,s=e.overview,c=void 0===s?"":s,l=e.release_date,u=void 0===l?"":l,d=e.vote_average,p=void 0===d?"":d,f=e.id;t=u?u.substring(0,4):"no date";var h="https://image.tmdb.org/t/p/w500".concat(n);n||(h="https://picsum.photos/500/750");for(var g="",m=1;m<=5;m++){var v="fa-star-o";2*m<=p?v="fa-star":2*m-1<=p&&(v="fa-star-half-o"),g+='<span class="fa star '.concat(v,'"> </span>')}return'<li class="card__item list" id="'.concat(f,"\">\n            <img src='").concat(h,'\' loading="lazy" alt="').concat(c,'" class="card__img" />\n            <div class="container-info" data-modal-open="modal-1">\n            <h2 class="card__title">').concat(i,'</h2>\n            <p class="card__desc">').concat((0,r.nameGenres)(o).join(", ")," | ").concat(t,'</p>\n            <p class="card__rating">').concat(g,"</p>\n            </div>\n            </li>")})).join("")}})),i.register("3qwTJ",(function(n,r){e(n.exports,"requestGenre",(function(){return l})),e(n.exports,"nameGenres",(function(){return d}));var a,o=i("bpxeT"),s=i("2TvXO"),c=new(0,i("cFGTe").RequestServer);function l(){return u.apply(this,arguments)}function u(){return(u=t(o)(t(s).mark((function e(){var n,r;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.movieGenre();case 3:n=e.sent,r=n.data.genres,a=r.reduce((function(e,t){var n=t.id,r=t.name;return e[n]=r,e}),{}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function d(e){var t=e.map((function(e){return a[e]}));return t.length>2?t.splice(2):0===t.length&&t.push("no genres"),t}})),i.register("7F1pg",(function(e,t){})),i("iE7OH").register(JSON.parse('{"hfX1u":"index.76094b62.js","6dCFz":"desktop.a15d7519.jpg"}'))}();
//# sourceMappingURL=index.76094b62.js.map
