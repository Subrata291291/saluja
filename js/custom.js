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

//Brand Slider
document.addEventListener("DOMContentLoaded", function () {

  new Swiper(".brand-swiper", {
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
      320: { slidesPerView: 3, spaceBetween: 15 },
      768: { slidesPerView: 4 },
      1024: { slidesPerView: 5 },
      1440: { slidesPerView: 6 },
    },
  });
});
//Brand Slider

//Counter JS
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".about-box h2");
  let started = false;

  const animateCounters = () => {
    counters.forEach(counter => {
      const text = counter.childNodes[0].nodeValue.trim(); // "20" or "3k"
      let target = 0;
      let suffix = "";

      if (text.toLowerCase().includes("k")) {
        target = parseInt(text) * 1000;
        suffix = "k";
      } else {
        target = parseInt(text);
      }

      let count = 0;
      const speed = target / 100;

      const update = () => {
        if (count < target) {
          count += speed;
          if (suffix === "k") {
            counter.childNodes[0].nodeValue =
              Math.floor(count / 1000) + "k";
          } else {
            counter.childNodes[0].nodeValue = Math.floor(count);
          }
          requestAnimationFrame(update);
        } else {
          counter.childNodes[0].nodeValue = text;
        }
      };

      counter.childNodes[0].nodeValue = "0";
      update();
    });
  };

  // Trigger only when visible
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !started) {
      started = true;
      animateCounters();
    }
  }, { threshold: 0.4 });

  observer.observe(document.querySelector(".about-box"));
});
//Counter JS

// // /* Disable Right Click */
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
