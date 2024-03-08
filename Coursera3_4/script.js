// Add your JavaScript code here
document.addEventListener("DOMContentLoaded", function () {
    var galleryImages = document.querySelectorAll(".gallery-container img");

    galleryImages.forEach(function (img) {
        img.addEventListener("mouseover", function () {
            // Code for mouseover event
            console.log("Mouseover event triggered for " + img.alt);
        });

        img.addEventListener("mouseleave", function () {
            // Code for mouseleave event
            console.log("Mouseleave event triggered for " + img.alt);
        });

        img.addEventListener("focus", function () {
            // Code for focus event
            console.log("Focus event triggered for " + img.alt);
        });

        img.addEventListener("blur", function () {
            // Code for blur event
            console.log("Blur event triggered for " + img.alt);
        });
    });

    window.addEventListener("load", function () {
        // Code for onload event
        console.log("Page loaded");
    });

    function addTabFocusAttribute() {
        // Code for adding tabfocus attribute
        console.log("Tabfocus attribute added");
    }

    // Loop through each image and add tabindex attribute
    for (var i = 0; i < galleryImages.length; i++) {
        galleryImages[i].setAttribute("tabindex", "0");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var galleryImages = document.querySelectorAll(".gallery-container img");
    var modalContainer = document.getElementById("modal-container");
    var modalImage = document.getElementById("modal-image");

    galleryImages.forEach(function (img) {
        img.addEventListener("click", function () {
            openModal(img.src, img.alt);
        });
    });

    function openModal(imageSource, imageAlt) {
        modalImage.src = imageSource;
        modalImage.alt = imageAlt;
        modalContainer.style.display = "flex";
    }

    function closeModal() {
        modalContainer.style.display = "none";
    }

    window.addEventListener("load", function () {
        console.log("Page loaded");
    });
});

