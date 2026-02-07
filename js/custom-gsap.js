var tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger); //Registered ScrollTrigger Plugin

gsap.from(".topbar-area ul li", {
  y: -30,
  opacity: 0,
  duration: 1,
  stagger: 0.3
});

gsap.from(".header-left", {
  opacity: 0,
  duration: 1,
  x: -30
});

gsap.from(".header-right ul li", {
  y: -30,
  opacity: 0,
  duration: 1,
  stagger: 0.3
});

gsap.from(".header-right button", {
  opacity: 0,
  duration: 1,
  y: -30,
  clearProps: "all"
});


let bannerTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".banner-area",
    start: "top 70%",   // when banner top hits 70% of viewport
    toggleActions: "play reverse play reverse"
  }
});

bannerTl
  .from(".banner-area .banner-content h3", {
    opacity: 0,
    x: -50,
    duration: 0.5
  })
  .from(".banner-area .banner-content h1", {
    opacity: 0,
    x: -50,
    duration: 0.5
  })
  .from(".banner-area .banner-content p", {
    opacity: 0,
    x: -50,
    duration: 0.5
  })
  .from(".banner-area .banner-content button", {
    opacity: 0,
    x: -50,
    duration: 0.5,
    clearProps: "all"
  });


  let aboutTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about-area",
    start: "top 80%",
    toggleActions: "play none none none"
    // toggleActions: "play reverse play reverse"
  }
});

aboutTl
  .from(".about-area .about-left", {
    x: -80,
    opacity: 0,
    duration: 1,
    clearProps: "transform"
  })
  .from(".about-area .about-right", {
    x: 80,
    opacity: 0,
    duration: 1,
    clearProps: "transform"
  });


  let offerTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".offer-area",
    start: "top 70%",   // when banner top hits 70% of viewport
    toggleActions: "play none play none"
  }
});

offerTl
  .from(".offer-area .title-box h4", {
    opacity: 0,
    x: -50,
    duration: 0.5
  })
  .from(".offer-area .title-box h3", {
    opacity: 0,
    x: -50,
    duration: 0.5
  })
  .from(".offer-area .common-btn", {
    opacity: 0,
    x: 50,
    duration: 0.5,
    clearProps: "all"
  })
  .from(".offer-area .nav-tabs li", {
    opacity: 0,
    x: -50,
    duration: 0.5,
    stagger: 0.3
  })
  .from(".offer-area .tab-pane h4", {
    opacity: 0,
    x: -50,
    duration: 0.5
  })
  .from(".offer-area .tab-pane p", {
    opacity: 0,
    x: -50,
    duration: 0.5
  })
  .from(".offer-area .table-responsive .table-bordered", {
    opacity: 0,
    y: -50,
    duration: 0.5,
  })
  .from(".offer-area .table-responsive tr", {
    opacity: 0,
    x: -50,
    duration: 0.5,
    stagger: 0.3
  })


  let processTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".process-area",
    start: "top 80%",
    toggleActions: "play none none none"
    // toggleActions: "play reverse play reverse"
  }
});

processTl
  .from(".process-area .process-left", {
    x: -80,
    opacity: 0,
    duration: 1,
    clearProps: "transform"
  })
  .from(".process-area .process-right", {
    x: 80,
    opacity: 0,
    duration: 1,
    clearProps: "transform"
  });
