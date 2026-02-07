var tl = gsap.timeline();

tl.from(".header-left", {
    opacity: 0,
    duration: 1,
    delay: 0.3,
    x: -30
})

tl.from(".header-right ul li", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.3
})

tl.from(".header-right button", {
   opacity: 0,
   duration: 1,
   delay: 0.3,
   y: -30,
  clearProps: "all"
})

tl.from(".banner-area .banner-content h3", {
    opacity: 0,
    duration: 0.5,
    delay: 0.3,
    x: -50
})

tl.from(".banner-area .banner-content h1", {
    opacity: 0,
    duration: 0.5,
    delay: 0.3,
    x: -50
})

tl.from(".banner-area .banner-content p", {
    opacity: 0,
    duration: 0.5,
    delay: 0.3,
    x: -50
})

tl.from(".banner-area .banner-content button", {
  opacity: 0,
  x: -50,
  duration: 0.5,
  clearProps: "all"
})