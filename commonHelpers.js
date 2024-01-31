import{i as l,S as c}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const u="https://pixabay.com/api",m="42048563-a2c01b7234988bf152885bd8d",i={form:document.getElementById("form"),resultContainer:document.getElementById("resultContainer"),loaderContainer:document.getElementsByClassName(".loader"),gallery:document.querySelector(".gallery")};i.form.addEventListener("submit",d);function d(s){s.preventDefault();const r=s.currentTarget,t=r.elements.photoWrd.value;console.log(t),f(t).then(n=>{if(console.log(n),n.hits.length===0){l.error({class:"error-svg",message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",messageSize:"16px",messageColor:"white",backgroundColor:"#ef4040",position:"topRight",maxWidth:"390px",timeout:5e3});return}let e="";n.hits.forEach(o=>{console.log(o),e+=p(o)}),i.gallery.innerHTML=e,h.refresh()}).finally(()=>{r.reset()})}function f(s){const r=new URLSearchParams({key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${u}/?${r}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).catch(t=>console.log(t))}function p({webformatURL:s,largeImageURL:r,tags:t,likes:n,views:e,comments:o,downloads:a}){return`    
    <li class="photo_card">
    <a class="photo_link" href="${s}">
    <img class="photoLarge" src="${r}" alt="${t}"/>
    <div class="photo_rate">
    <p class="like box">likes: ${n}</p>
    <p class="views box">views: ${e}</p>
    <p class="comments box">comments: ${o}</p>
    <p class="downloads box">downloads: ${a}</p>
    </div>
    </a>
    </li>`}const h=new c(".gallery a",{caption:!0,captionDelay:250,fadeSpeed:250,captionSelector:"img",captionsData:"alt",captionPosition:"bottom"});
//# sourceMappingURL=commonHelpers.js.map
