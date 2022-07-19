import { galleryItems } from './gallery-items.js';
// Change code below this line

// 1. создание разметки

const galleryEl = document.querySelector(".gallery");
const readyGallery = galleryItems.reduce((stringAcc, imgItem) => {
    return stringAcc + `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
        <img
        class="gallery__image"
        src="${imgItem.preview}"
        data-source="${imgItem.original}"
        alt="${imgItem.description}"
        />
    </a>
    </div>`;
}, "")

galleryEl.insertAdjacentHTML('afterbegin', readyGallery);


galleryEl.addEventListener('click', onPicture);
function onPicture(e) {
    e.preventDefault()
    if (e.target.classList.contains("gallery__link")) { return }

    const pictureUrl = e.target.dataset.source;

	basicLightbox.create(`
		<img width="1400" height="900" src="${pictureUrl}">
	`).show()
}