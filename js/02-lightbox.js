import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const readyString = galleryItems.reduce((pictureAcc, {preview, original, description}) => {
    return pictureAcc + `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`}, "")

console.log(readyString)

galleryEl.insertAdjacentHTML('afterbegin', readyString);

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    // captionPosition: "bottom",
});