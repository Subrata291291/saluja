//About Slider
document.addEventListener("DOMContentLoaded", function () {

  new Swiper(".about-swiper", {
    loop: true,
    speed: 800,                  
    spaceBetween: 25,

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    grabCursor: false,

    slidesPerView: "auto",         
    freeMode: true,                
    freeModeMomentum: false,

    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 15 },
      768: { slidesPerView: 1 },
      1024: { slidesPerView: 1 },
      1440: { slidesPerView: 1 },
    },
  });
});
//About Slider



// /* Disable Right Click */
// document.addEventListener('contextmenu', function (e) {
//     e.preventDefault();
// });

// /* Disable common DevTools keys */
// document.addEventListener('keydown', function (e) {

//     // F12
//     if (e.keyCode === 123) {
//         e.preventDefault();
//         return false;
//     }

//     // Ctrl+Shift+I / J / C
//     if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) {
//         e.preventDefault();
//         return false;
//     }

//     // Ctrl+U (View Source)
//     if (e.ctrlKey && e.key.toUpperCase() === 'U') {
//         e.preventDefault();
//         return false;
//     }

//     // Ctrl+S (Save Page)
//     if (e.ctrlKey && e.key.toUpperCase() === 'S') {
//         e.preventDefault();
//         return false;
//     }
// });
