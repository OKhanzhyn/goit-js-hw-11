import{i,S as c}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="https://pixabay.com/api",u="42048563-a2c01b7234988bf152885bd8d",l={form:document.getElementById("form"),resultContainer:document.getElementById("resultContainer"),loaderContainer:document.getElementsByClassName(".loader"),gallery:document.getElementsByClassName(".gallery")};l.form.addEventListener("submit",d);function d(s){s.preventDefault();const r=s.currentTarget,o=r.elements.photoWrd.value;console.log(o),f(o).then(a=>{console.log(a);const e=a.hits;let t="";if(e.map(n=>{console.log(n),t+=p(n)}).join(""),l.gallery.innerHTML=t,h.refresh(),e.length===0){i.error({class:"error-svg",message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",messageSize:"16px",messageColor:"white",backgroundColor:"#ef4040",position:"topRight",maxWidth:"390px",timeout:5e3});return}}).finally(()=>{r.reset()})}function f(s){const r=new URLSearchParams({key:u,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}/?${r}`).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json()}).catch(o=>console.log(o))}function p({webformatURL:s,largeImageURL:r,tags:o,likes:a,views:e,comments:t,downloads:n}){return`    
    <li class="photo_card">
    <a class="photo_link" href="${s}">
    <img class="photoLarge" src="${r}" alt="${o}"/>
    <p class="like">likes: "${a}"</p>
    <p class="views">views: "${e}"</p>
    <p class="comments">comments: "${t}"</p>
    <p class="downloads">downloads: "${n}"</p>
    </a>
    </li>`}const h=new c(".gallery a",{caption:!0,captionDelay:250,fadeSpeed:250,captionSelector:"img",captionsData:"alt",captionPosition:"bottom"});
//# sourceMappingURL=commonHelpers.js.map