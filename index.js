import{a as w,S as v,i as a}from"./assets/vendor-73qhTu8_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&m(d)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function m(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();async function y(r,t){return(await w.get("https://pixabay.com/api/",{params:{key:"55647449-f4e56103f1aaaeb422f0623cd",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const h=document.querySelector(".gallery"),l=document.querySelector(".loader");document.querySelector(".load-more");const S=new v(".gallery a",{captionsData:"alt",captionDelay:250});function q(){h.innerHTML=""}function p(){l.classList.remove("hidden")}function g(){l.classList.add("hidden")}function b(){l.classList.remove("hidden")}function c(){l.classList.add("hidden")}function L(r){const t=r.map(s=>`
        <li class="gallery-item">
          <a href="${s.largeImageURL}">
            <img 
              src="${s.webformatURL}" 
              alt="${s.tags}" 
            />
          </a>
          <div class="info">
            <p><b>Likes</b> ${s.likes}</p>
            <p><b>Views</b> ${s.views}</p>
            <p><b>Comments</b> ${s.comments}</p>
            <p><b>Downloads</b> ${s.downloads}</p>
          </div>
        </li>
      `).join("");h.insertAdjacentHTML("beforeend",t),S.refresh()}const u=document.querySelector(".form"),P=document.querySelector(".load-more");let i="",n=1,f=0;u.addEventListener("submit",M);P.addEventListener("click",$);async function M(r){if(r.preventDefault(),i=u.elements["search-text"].value.trim(),n=1,i===""){a.error({message:"Please enter a search query!"});return}q(),c(),p();try{const t=await y(i,n);if(f=t.totalHits,t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}L(t.hits),n*15>=f?(c(),a.info({message:"We're sorry, but you've reached the end of search results."})):b()}catch{a.error({message:"Something went wrong. Please try again later!"})}finally{g(),u.reset()}}async function $(){n+=1,c(),p();try{const r=await y(i,n);L(r.hits),B(),n*15>=f?(c(),a.info({message:"We're sorry, but you've reached the end of search results."})):b()}catch{a.error({message:"Something went wrong. Please try again later!"})}finally{g()}}function B(){const r=document.querySelector(".gallery-item");if(!r)return;const t=r.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
