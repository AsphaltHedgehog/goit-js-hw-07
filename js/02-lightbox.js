import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  renderedGalleryList: document.querySelector(".gallery"),
  modalWindow: document.querySelector("div.basicLightbox")
};

// =========================================================


function imgTemplate (el) {
  return `<li class="gallery__item">
    <a class="gallery__link" href="${el.original}">
      <img
      class="gallery__image"
      src="${el.preview}" 
      alt="${el.description}"
      />
    </a>
</li>`
}


function renderGalleryElFromTemplate() {
  const markup = galleryItems.map(imgTemplate).join("");
  refs.renderedGalleryList.innerHTML = markup;
}

renderGalleryElFromTemplate();

// ========================================================


// refs.renderedGalleryList.addEventListener("click", onElClick);

const lightbox = new SimpleLightbox('.gallery a', {captions: true, captionSelector: "img", captionsData: "alt", captionDelay: 250,});

// function onElClick(event) {
//   if (event.target.nodeName !== "IMG") {
//     return
//   };

//   event.preventDefault();


// };





















// ==========================================================

// refs.renderedGalleryList.addEventListener("click", onElClick);


// function onElClick(event) {
//   if (event.target.nodeName !== "IMG") {
//     return
//   };

//   event.preventDefault();
//   // console.log(event.target.dataset.source);

//   // refs.modalWindow.addEventListener("keydown", onEscapePush)

//   const instance = basicLightbox.create(`
//   <div class="modal">
//     <img src="${event.target.dataset.source}" width="800" height="600">
//   </div>
//   `, {
// 	closable: true
//   })

//   instance.show()



// };