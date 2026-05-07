import{a as v,S,i as n}from"./assets/vendor-73qhTu8_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))f(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&f(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function f(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();async function m(r,t){return(await v.get("https://pixabay.com/api/",{params:{key:"55647449-f4e56103f1aaaeb422f0623cd",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const y=document.querySelector(".gallery"),h=document.querySelector(".loader"),p=document.querySelector(".load-more"),q=new S(".gallery a",{captionsData:"alt",captionDelay:250});function P(){y.innerHTML=""}function g(){h.classList.remove("hidden")}function b(){h.classList.add("hidden")}function L(){p.classList.remove("hidden")}function c(){p.classList.add("hidden")}function w(r){const t=r.map(s=>`
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
      `).join("");y.insertAdjacentHTML("beforeend",t),q.refresh()}const d=document.querySelector(".form"),M=document.querySelector(".load-more");let i="",a=1,u=0;d.addEventListener("submit",$);M.addEventListener("click",B);async function $(r){if(r.preventDefault(),i=d.elements["search-text"].value.trim(),a=1,i===""){n.error({message:"Please enter a search query!"});return}P(),c(),g();try{const t=await m(i,a);if(u=t.totalHits,t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}w(t.hits),a*15>=u?(c(),n.info({message:"We're sorry, but you've reached the end of search results."})):L()}catch{n.error({message:"Something went wrong. Please try again later!"})}finally{b(),d.reset()}}async function B(){a+=1,c(),g();try{const r=await m(i,a);w(r.hits),O(),a*15>=u?(c(),n.info({message:"We're sorry, but you've reached the end of search results."})):L()}catch{n.error({message:"Something went wrong. Please try again later!"})}finally{b()}}function O(){const r=document.querySelector(".gallery-item");if(!r)return;const t=r.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
