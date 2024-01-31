import{i,S as c}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="https://pixabay.com/api",u="42048563-a2c01b7234988bf152885bd8d",a={form:document.getElementById("form"),resultContainer:document.getElementById("resultContainer"),loaderContainer:document.querySelector(".loader"),gallery:document.querySelector(".gallery")};a.form.addEventListener("submit",m);function m(l){l.preventDefault();const r=l.currentTarget,o=r.elements.photoWrd.value;console.log(o),f(o).then(s=>{if(console.log(s),s.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",messageSize:"16px",messageColor:"white",backgroundColor:"#ef4040",position:"topRight",maxWidth:"390px",timeout:5e3});return}let e="";s.hits.forEach(t=>{console.log(t),e+=d(t)}),a.gallery.innerHTML=e,h.refresh()}).finally(()=>{r.reset()})}function f(l){const r=new URLSearchParams({key:u,q:l,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}/?${r}`).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json()}).catch(o=>console.log(o))}function d({webformatURL:l,largeImageURL:r,tags:o,likes:s,views:e,comments:t,downloads:n}){return`    
    <li class="photo_card">
    <a class="photo_link" href="${r}">
    <img class="photoLarge" src="${l}" alt="${o}"/>
    
    <ul class="photo_rate">
    <li class="property-item">
      <p class="property-title">Likes</p>
      <p class="property-value">${s}</p>
    </li>
    <li class="property-item">
      <p class="property-title">Views</p>
      <p class="property-value">${e}</p>
    </li>
    <li class="property-item">
      <p class="property-title">Comments</p>
      <p class="property-value">${t}</p>
    </li>
    <li class="property-item">
      <p class="property-title">Downloads</p>
      <p class="property-value">${n}</p>
    </li>
  </ul>  
    
    </a>
    </li>`}const h=new c(".gallery a",{caption:!0,captionDelay:250,fadeSpeed:250,captionSelector:"img",captionsData:"alt",captionPosition:"bottom"});
//# sourceMappingURL=commonHelpers.js.map
