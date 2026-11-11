console.log("Jambato Portfolio loaded.");

const lightbox = document.getElementById("image-lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeButton = document.querySelector(".lightbox-close");

const images = document.querySelectorAll(".clickable-image");

images.forEach(image => {

    image.addEventListener("click", () => {

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.classList.add("active");

    });

});


closeButton.addEventListener("click", () => {

    lightbox.classList.remove("active");

});


lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        lightbox.classList.remove("active");

    }

});


document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        lightbox.classList.remove("active");

    }

});