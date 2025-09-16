/*Navbar Animation*/

gsap.from("nav", {
  y: -100,
  opacity: 0,
  duration: 1
});

/* Hero Section Animation */

gsap.from("#hero .content h2", {
  x: -100,
  opacity: 0,
  duration: 1,
  delay: 0.5
});
gsap.from("#hero .content p", {
  x: -100,
  opacity: 0,
  duration: 1,
  delay: 0.8
});
gsap.from("#hero img", {
  scale: 0,
  opacity: 0,
  duration: 1.2,
  delay: 1
});

/*Scroll-trigger Animations (applied to all sections)*/

gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%"
    }
  });
});
