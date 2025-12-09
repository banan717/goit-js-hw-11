import{a as d,S as u,i as n}from"./assets/vendor-CNqCr-V-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="53639164-946eeba40ce7ee6acba66c1a5",m="https://pixabay.com/api/";async function p(i){return(await d.get(m,{params:{key:f,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),y=new u(".gallery a");function h(i){const o=i.map(t=>`
    <li class="gallery-item">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" />
      </a>
      <div class="info-table">
        <div class="info-row">
            <div>Likes</div>
            <div>Views</div>
            <div>Comments</div>
            <div>Downloads</div>
        </div>
        <div class="info-row">
            <div>${t.likes}</div>
            <div>${t.views}</div>
            <div>${t.comments}</div>
            <div>${t.downloads}</div>
        </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()}function g(){c.innerHTML=""}function v(){document.querySelector(".loader").classList.remove("is-hidden")}function L(){document.querySelector(".loader").classList.add("is-hidden")}const l=document.querySelector(".form");l.addEventListener("submit",w);async function w(i){i.preventDefault();const o=l.elements["search-text"].value.trim();if(!o){n.warning({message:"Please enter a search query",position:"topRight"});return}g(),v();try{const s=(await p(o)).hits||[];if(!s.length){n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(s),n.success({message:`Found ${s.length} images for "${o}"`,position:"topRight"})}catch(t){console.error(t),n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{L()}}
//# sourceMappingURL=index.js.map
