var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in a){var o=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){a[e]=t},e.parcelRequired7c6=o);var n=o("ih2xg"),d=o("gs8qp");const r={watchedBtn:document.querySelector(".btn-watched"),queueBtn:document.querySelector(".btn-queue"),watchedList:document.querySelector(".gallery-library__list"),textOoops:document.querySelector(".empty")};console.log(r.queueBtn);const c=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}};async function l(e){const t=await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=3dd9518c386fd347d5f1ac2580a699a4&language=en-US`);return await t.json()}r.watchedBtn.addEventListener("click",(function(){c("watched").map((e=>{l(e).then((e=>{const t=r.watchedList.insertAdjacentHTML("beforeend",(0,n.makeLibraryGalleryMarkUp)(e));return(0,d.default)(),t}))})),r.textOoops.classList.add("visually-hidden"),r.watchedList.classList.remove("visually-hidden")})),r.queueBtn.addEventListener("click",(function(){c("queue").map((e=>{l(e).then((e=>{const t=r.watchedList.insertAdjacentHTML("beforeend",(0,n.makeLibraryGalleryMarkUp)(e));return(0,d.default)(),t}))})),r.textOoops.classList.add("visually-hidden"),r.watchedList.classList.remove("visually-hidden")})),console.dir(r.watchedList);document.querySelector(".btn-queue"),document.querySelector(".gallery-library__list"),document.querySelector(".empty");var i=o("fb0WN"),u=o("3hqqe"),s=o("fYdb4"),m=o("9C8iL");const h={libraryListOfWatched:document.querySelector(".gallery-library__list"),btnAddToWatched:document.querySelector(".modal-movie__add-to-watched-btn"),btnQueue:document.querySelector(".modal-movie__add-to-queue-btn")};h.libraryListOfWatched.addEventListener("click",(async function(e){let t=e.target.dataset.id;if((0,m.createArrayLocalStorage)("watched"),(0,m.createArrayLocalStorage)("queue"),(0,m.renameBtn)(h.btnAddToWatched,"watched","Add to watched","Remove from watched",t),(0,m.renameBtn)(h.btnQueue,"queue","Add to queue","Remove from queue",t),f=(0,u.fetchPictures)(t),"IMG"!==e.target.nodeName&&"P"!==e.target.nodeName&&"H2"!==e.target.nodeName&&"H3"!==e.target.nodeName&&"B"!==e.target.nodeName)return;(0,i.handleModalOpenClose)(),(0,s.handleApiData)(t),document.body.style.overflow="hidden"})),(0,m.removeLocalStorage)("watched"),(0,m.removeLocalStorage)("queue");let f={};const y=document.querySelector(".modal-movie__add-to-watched-btn"),v=document.querySelector(".modal-movie__add-to-queue-btn");y.addEventListener("click",(function(){f.then((e=>{let t=(0,m.loadFromLocalStorage)("watched");if(t.includes(e.id)){const a=t.findIndex((t=>t===e.id));t.splice(a,1),localStorage.setItem("watched",JSON.stringify(t)),(0,m.renameBtnTextCont)(y,"Add to watched"),y.classList.remove("active-btn")}else t.push(e.id),(0,m.saveToLocalStorage)("watched",t),(0,m.renameBtnTextCont)(y,"Remove from watched"),y.classList.add("active-btn")}))})),v.addEventListener("click",(function(){f.then((e=>{let t=(0,m.loadFromLocalStorage)("queue");if(t.includes(e.id)){const a=t.findIndex((t=>t===e.id));t.splice(a,1),localStorage.setItem("queue",JSON.stringify(t)),(0,m.renameBtnTextCont)(v,"Add to queue"),v.classList.remove("active-btn")}else t.push(e.id),(0,m.saveToLocalStorage)("queue",t),(0,m.renameBtnTextCont)(v,"Remove from queue"),v.classList.add("active-btn")}))}));
//# sourceMappingURL=library.8645ddfd.js.map
