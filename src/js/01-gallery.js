// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";


console.log(galleryItems);


const galleryElement = document.querySelector('.gallery');


function creatGallerry(gallery) {

    return gallery.map(({preview, original, description}) => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    </li>`).join('')
}

const galleryMarcup = creatGallerry(galleryItems);
galleryElement.insertAdjacentHTML('beforeend', galleryMarcup);

new SimpleLightbox('.gallery a', { 
    overlayOpacity: 0.3,
    captionSelector: "img",
    captionType: "attr",
    captionDelay: 250,
    captionsData: "alt",
});