// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '42048563-a2c01b7234988bf152885bd8d';

// https://pixabay.com/api/?key=42048563-a2c01b7234988bf152885bd8d&q=yellow+flowers&image_type=photo&orientation=horizontal&safesearch=true&pretty=true

const refs = {
    form: document.getElementById('form'),
    resultContainer: document.getElementById('resultContainer'),
    loaderContainer: document.getElementsByClassName('.loader'),
    gallery: document.querySelector('.gallery'),
};

refs.form.addEventListener('submit', handleSearch);

function handleSearch(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const photoWrd = form.elements.photoWrd.value;
    console.log(photoWrd);
     
    
    searchPhotoByWrd(photoWrd).then((data) => {
      console.log(data);
       
     
        if (data.hits.length === 0) {
        iziToast.error({
            // title: 'Error',
            class:'error-svg',
            message: "Sorry, there are no images matching your search query. Please try again!",
            theme: 'dark',
            messageSize: '16px',
            messageColor: 'white',
            backgroundColor: '#ef4040',
            position: 'topRight',
            maxWidth: '390px',
            timeout: 5000,
        });   return;
      }
      //   const listOfPhotos = data.hits;
       //   const gallery = $('.gallery a').SimpleLightbox();
       
    let markup = "";
      data.hits.forEach((i) => {        
       console.log(i);
       markup += createPhotoCardMarkup(i);
       });    
         
    refs.gallery.innerHTML = markup;
    lightbox .refresh();      
    }).finally(() => {               
      form.reset()});
}
      
function searchPhotoByWrd(photoWrd) {
    
    const urlParams = new URLSearchParams({
        key: API_KEY,
        q: photoWrd,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    }); 
    return fetch(`${BASE_URL}/?${urlParams}`).then((res) => {
        if (!res.ok) {
        throw new Error(res.statusText);      
        }       
        return res.json();
    }).catch(error => console.log(error))  
}  

function createPhotoCardMarkup({webformatURL, largeImageURL, tags, likes, views, comments, downloads,
}) {
    return `    
    <li class="photo_card">
    <a class="photo_link" href="${webformatURL}">
    <img class="photoLarge" src="${largeImageURL}" alt="${tags}"/>
    <div class="photo_rate">
    <p class="like box">likes: ${likes}</p>
    <p class="views box">views: ${views}</p>
    <p class="comments box">comments: ${comments}</p>
    <p class="downloads box">downloads: ${downloads}</p>
    </div>
    </a>
    </li>`;
}
// webformatURL largeImageURL photoLarge


const lightbox = new SimpleLightbox('.gallery a', {
caption: true,
captionDelay: 250,
fadeSpeed: 250,
captionSelector: "img",
captionsData: "alt",
captionPosition: "bottom",}); 

// showloader();
 // hideLoader(); 
// var gallery = $('.gallery a').simpleLightbox();

// <div class="gallery">
//     <a href="images/image1.jpg"><img src="images/thumbs/thumb1.jpg" alt="" title=""/></a>
//     <a href="images/image2.jpg"><img src="images/thumbs/thumb2.jpg" alt="" title="Beautiful Image"/></a>
// </div>

// gallery.next(); // Next Image