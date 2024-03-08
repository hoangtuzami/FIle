// script.js

var originalImage = "original-image.jpg";
var originalText = "Hover over an image below to display here.";

function upDate(imageSource, imageDescription) {
  console.log("Mouse over event triggered");

  var previewPic = document.querySelector("#image img");
  previewPic.src = imageSource;
  previewPic.alt = imageDescription;

  var imageText = document.getElementById("image-text");
  imageText.textContent = imageDescription;

  console.log("Text updated to: " + imageText.textContent);
  console.log("Image source updated to: " + previewPic.src);
}

function undo() {
  console.log("Undo button clicked");
  console.log("Original Image: " + originalImage);
  console.log("Original Text: " + originalText);

  var previewPic = document.querySelector("#image img");
  previewPic.src = originalImage;
  previewPic.alt = "Original Image";

  var imageText = document.getElementById("image-text");
  imageText.textContent = originalText;

  console.log("Undo completed");
}
