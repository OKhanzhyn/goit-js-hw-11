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
};

refs.form.addEventListener('submit', handleSearch);

function handleSearch(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const photoWrd = form.elements.photoWrd.value;
    console.log(photoWrd);
    
    // showLoader();
    searchPhotoByWrd(photoWrd).then((data) => {
      console.log(data);
      
      const listOfPhotos = data.hits;
      let markup = "";
      listOfPhotos.map((i) => {
       console.log(i);
       markup += createPhotoCardMarkup(i);
       }).join('');
      

      refs.resultContainer.innerHTML = markup;


      if (listOfPhotos.length === 0) {
        iziToast.show({
            // title: 'Error',
            class:'error-svg',
            message: "Sorry, there are no images matching your search query. Please try again!",
            theme: 'dark',
            messageSize: '16px',
            messageColor: 'white',
            backgroundColor: '#ef4040',
            position: 'topRight',
            timeout: 5000,
        });   return;
      }
    })
    .finally(() => {
        // hideLoader();
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
    <ul class="gallery">
    <li class="photo_card">
    <a class="photo_link" href="${webformatURL}">
    <img class="photoLarge" src="${largeImageURL}" alt="${tags}"/>
    <p class="like">likes: "${likes}"</p>
    <p class="views">views: "${views}"</p>
    <p class="comments">comments: "${comments}"</p>
    <p class="downloads">downloads: "${downloads}"</p>
    </a>
    </li>
    </ul>`;
}


const lightbox = new SimpleLightbox('.gallery a', {
caption: true,
captionDelay: 250,
fadeSpeed: 250,
captionSelector: "img",
captionData: "alt",
captionPosition: "bottom",}); 

// var gallery = $('.gallery a').simpleLightbox();

// <div class="gallery">
//     <a href="images/image1.jpg"><img src="images/thumbs/thumb1.jpg" alt="" title=""/></a>
//     <a href="images/image2.jpg"><img src="images/thumbs/thumb2.jpg" alt="" title="Beautiful Image"/></a>
// </div>

// gallery.next(); // Next Image