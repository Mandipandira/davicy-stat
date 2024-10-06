document.addEventListener("DOMContentLoaded", function() {
    // Fade out the logo or video after 6 seconds
    setTimeout(function() {
      var fullscreen = document.querySelector(".fullscreen");
      fullscreen.style.opacity = 0;
      setTimeout(function() {
        fullscreen.style.display = "none";
      }, 1000);
    }, 6000);
  
    // Fade out the loading message after 2 seconds
    setTimeout(function() {
      var loadingOverlay = document.querySelector("#loading");
      loadingOverlay.style.opacity = 0;
      setTimeout(function() {
        loadingOverlay.style.display = "none";
      }, 1000);
    }, 2000);
  });
  