import{i,S as c}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="https://pixabay.com/api",d="42048563-a2c01b7234988bf152885bd8d",s={form:document.getElementById("form"),resultContainer:document.getElementById("resultContainer"),loaderContainer:document.querySelector(".loader"),gallery:document.querySelector(".gallery")};s.form.addEventListener("submit",u);function u(n){n.preventDefault();const r=n.currentTarget,o=r.elements.photoWrd.value;console.log(o),m(o).then(a=>{if(console.log(a),a.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}let e="";a.hits.forEach(t=>{console.log(t),e+=y(t)}),s.gallery.innerHTML=e,f.refresh()}).finally(()=>{r.reset()})}function m(n){const r=new URLSearchParams({key:d,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}/?${r}`).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json()}).catch(o=>console.log(o))}function y({webformatURL:n,largeImageURL:r,tags:o,likes:a,views:e,comments:t,downloads:l}){return`    
    <li class="photo_card">
    <a class="photo_link" href="${r}">
    <img class="photoLarge" src="${n}" alt="${o}"/>
    
    <ul class="photo_rate">
    <li class="property-item">
      <p class="property-title">Likes</p>
      <p class="property-value">${a}</p>
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
      <p class="property-value">${l}</p>
    </li>
  </ul>  
    
    </a>
    </li>`}const f=new c(".gallery a",{caption:!0,captionDelay:250,fadeSpeed:250,captionSelector:"img",captionsData:"alt",captionPosition:"bottom"});document.addEventListener("DOMContentLoaded",()=>{if(!loaderContainer){console.error("Form or loading message element not found.");return}loaderContainer.style.display="none",form.addEventListener("submit",async n=>{if(n.preventDefault(),!photoWrd){createMessage("Search must be filled!");return}formEl.reset();try{loaderContainer.style.display="block",await g(photoWrd)}catch(r){console.error("Error downloading images:",r.message),createMessage("Error downloading images. Please try again later.")}finally{loaderContainer.style.display="none"}})});function g(n){loaderContainer.style.display="block",gallery.innerHTML="",fetchImages(n).then(r=>renderImages(r)).catch(r=>{console.error(r),createMessage("Error fetching images. Please try again later.")}).finally(()=>{loaderContainer.style.display="none"})}
//# sourceMappingURL=commonHelpers.js.map
