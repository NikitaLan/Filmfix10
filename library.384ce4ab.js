var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},d=e.parcelRequired7c6;null==d&&((d=function(e){if(e in t)return t[e].exports;if(e in a){var d=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,d.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequired7c6=d);document.querySelector(".btn-queue"),document.querySelector(".gallery-library__list"),document.querySelector(".empty");var n=d("fb0WN"),o=d("3hqqe"),c=d("fYdb4"),r=d("ih2xg"),i=d("gs8qp"),l=d("9C8iL");const s={watchedBtn:document.querySelector(".btn-watched"),queueBtn:document.querySelector(".btn-queue"),watchedList:document.querySelector(".gallery-library__list"),textOoops:document.querySelector(".empty")};let u=1;function m(){let e=(0,l.loadFromLocalStorage)("watched");if(u=1,0===e.length)return s.textOoops.classList.remove("visually-hidden"),void(s.watchedList.innerHTML="");h(e)}function h(e){const t=e;if(0===t.length)return s.textOoops.classList.remove("visually-hidden"),void(s.watchedList.innerHTML="");const a=t.reduce(((e,t)=>e+(0,r.makeLibraryGalleryMarkUp)(t)),"");s.textOoops.classList.add("visually-hidden"),s.watchedList.innerHTML="",s.watchedList.classList.remove("visually-hidden"),s.watchedList.insertAdjacentHTML("beforeend",a),(0,i.default)()}s.watchedBtn.classList.add("active"),s.watchedBtn.addEventListener("click",(()=>{s.watchedBtn.classList.add("active"),s.queueBtn.classList.remove("active")})),s.queueBtn.addEventListener("click",(()=>{s.queueBtn.classList.add("active"),s.watchedBtn.classList.remove("active")})),window.addEventListener("load",m),s.watchedBtn.addEventListener("click",m),s.queueBtn.addEventListener("click",(function(){let e=(0,l.loadFromLocalStorage)("queue");if(u=2,0===e.length)return s.textOoops.classList.remove("visually-hidden"),void(s.watchedList.innerHTML="");h(e)})),window.addEventListener("load",(()=>{s.watchedBtn&&(s.watchedBtn.checked=!0,s.watchedBtn.parentNode.classList.add("checked"))}));l=d("9C8iL");const v={libraryListOfWatched:document.querySelector(".gallery-library__list"),btnAddToWatched:document.querySelector(".modal-movie__add-to-watched-btn"),btnQueue:document.querySelector(".modal-movie__add-to-queue-btn")};v.libraryListOfWatched.addEventListener("click",(async function(e){let t=e.target.dataset.id;if((0,l.createArrayLocalStorage)("watched"),(0,l.createArrayLocalStorage)("queue"),(0,l.renameBtn)(v.btnAddToWatched,"watched","Add to watched","Remove from watched",t),(0,l.renameBtn)(v.btnQueue,"queue","Add to queue","Remove from queue",t),L=(0,o.fetchPictures)(t),"IMG"!==e.target.nodeName&&"P"!==e.target.nodeName&&"H2"!==e.target.nodeName&&"H3"!==e.target.nodeName&&"B"!==e.target.nodeName)return;(0,n.handleModalOpenClose)(),(0,c.handleApiData)(t),document.body.style.overflow="hidden"})),(0,l.removeLocalStorage)("watched"),(0,l.removeLocalStorage)("queue");let L={};const f=document.querySelector(".modal-movie__add-to-watched-btn"),w=document.querySelector(".modal-movie__add-to-queue-btn");f.addEventListener("click",(function(){L.then((e=>{let t=(0,l.loadFromLocalStorage)("watched");if(t.find((t=>t.id===e.id))){const a=t.findIndex((t=>t.id===e.id));t.splice(a,1),localStorage.setItem("watched",JSON.stringify(t)),(0,l.renameBtnTextCont)(f,"Add to watched"),f.classList.remove("active-btn"),1===u&&h(t)}else t.push(e),(0,l.saveToLocalStorage)("watched",t),(0,l.renameBtnTextCont)(f,"Remove from watched"),f.classList.add("active-btn"),1===u&&h(t)}))})),w.addEventListener("click",(function(){L.then((e=>{let t=(0,l.loadFromLocalStorage)("queue");if(t.find((t=>t.id===e.id))){const a=t.findIndex((t=>t.id===e.id));t.splice(a,1),localStorage.setItem("queue",JSON.stringify(t)),(0,l.renameBtnTextCont)(w,"Add to queue"),w.classList.remove("active-btn"),2===u&&h(t)}else t.push(e),(0,l.saveToLocalStorage)("queue",t),(0,l.renameBtnTextCont)(w,"Remove from queue"),w.classList.add("active-btn"),2===u&&h(t)}))})),d("8Yq9A");
//# sourceMappingURL=library.384ce4ab.js.map
