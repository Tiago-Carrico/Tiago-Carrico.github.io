gsap.registerPlugin(ScrollTrigger);


const showDemo = () => {

  gsap.utils.toArray('section').forEach((section, index) => {
    const w = section.querySelector('.scroll_wrapper');
    const [x, xEnd] = index % 2 ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
    gsap.fromTo(w, { x }, {
      x: xEnd,
      scrollTrigger: {
        trigger: section,
        scrub: 0.5
      }
    });


  });
};

imagesLoaded(images).on('progress', updateProgress).on('always', showDemo);