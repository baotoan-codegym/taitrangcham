document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = document.querySelectorAll("img.lazy");    
  var lazyThrottleTimeout;
  
  function lazy () {
    if(lazyThrottleTimeout) {
      clearTimeout(lazyThrottleTimeout);
    }    
    
    lazyThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyImages.length == 0) { 
          document.removeEventListener("scroll", lazy);
          window.removeEventListener("resize", lazy);
          window.removeEventListener("orientationChange", lazy);
        }
    }, 20);
  }
  
  document.addEventListener("scroll", lazy);
  window.addEventListener("resize", lazy);
  window.addEventListener("orientationChange", lazy);
});
