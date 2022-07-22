import { galleryItems } from './gallery-items.js';
// Change code below this line

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
    // if (e.target.nodeName !== "IMG") { return console.log("it's not an IMG-tag")}
    if (!e.target.classList.contains("gallery__image")) { return console.log("it's not an IMG-element") }

    const pictureUrl = e.target.dataset.source

    const bigPicture = basicLightbox.create(`
		<img width="1400" height="900" src="${pictureUrl}">
	`, {
        onShow: (bigPicture) => { document.addEventListener("keydown", closeByEsc) },
        onClose: (bigPicture) => { document.removeEventListener("keydown", closeByEsc) },
    })
    
    bigPicture.show()


    function closeByEsc(e) {
        if (e.code === "Escape") {
            bigPicture.close()
        }
    }