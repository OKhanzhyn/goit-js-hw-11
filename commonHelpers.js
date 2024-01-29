import{i as l,S as c}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const u="https://pixabay.com/api",m="42048563-a2c01b7234988bf152885bd8d",i={form:document.getElementById("form"),resultContainer:document.getElementById("resultContainer")};i.form.addEventListener("submit",f);function f(s){s.preventDefault();const r=s.currentTarget,t=r.elements.photoWrd.value;console.log(t),p(t).then(a=>{console.log(a);const e=a.hits;let o="";if(e.map(n=>{console.log(n),o+=d(n)}).join(""),i.resultContainer.innerHTML=o,e.length===0){l.show({class:"error-svg",message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",messageSize:"16px",messageColor:"white",backgroundColor:"#ef4040",position:"topRight",timeout:5e3});return}}).finally(()=>{r.reset()})}function p(s){const r=new URLSearchParams({key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${u}/?${r}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).catch(t=>console.log(t))}function d({webformatURL:s,largeImageURL:r,tags:t,likes:a,views:e,comments:o,downloads:n}){return`
    <ul class="gallery">
    <li class="photo_card">
    <a class="photo_link" href="${s}">
    <img class="photoLarge" src="${r}" alt="${t}"/>
    <p class="like">likes: "${a}"</p>
    <p class="views">views: "${e}"</p>
    <p class="comments">comments: "${o}"</p>
    <p class="downloads">downloads: "${n}"</p>
    </a>
    </li>
    </ul>`}new c(".gallery a",{caption:!0,captionDelay:250,fadeSpeed:250,captionSelector:"img",captionData:"alt",captionPosition:"bottom"});
//# sourceMappingURL=commonHelpers.js.map
