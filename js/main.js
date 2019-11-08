function loadImage(id, targetId) {
  var element = document.getElementById(id);
  var targetElement = targetId ? document.getElementById(targetId) : element;
  var imageToLoad;

  if (element.dataset.image) {
    imageToLoad = element.dataset.image;
  } else if (typeof element.currentSrc === "undefined") {
    imageToLoad = element.src;
  } else {
    imageToLoad = element.currentSrc;
  }
  if (imageToLoad) {
    var img = new Image();
    img.src = imageToLoad;
    img.onload = function() {
      targetElement.classList.add("is-loaded");
    };
  }
}

document.addEventListener("DOMContentLoaded", function() {
  loadImage("wallpaper");
  loadImage("pictureImage", "picture");
});
