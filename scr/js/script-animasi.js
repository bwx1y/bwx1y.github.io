// GSAP
gsap.registerPlugin(ScrollTrigger, TextPlugin);

gsap.from("#Nav", { duration: 2, y: -100, opacity: 0, ease: "bounce" });
gsap.from(".jumbotron img", { duration: 1, opacity: 0, delay: 0.8 });
gsap.from("#about h2", { duration: 1, opacity: 0 });
gsap.to(".jumbotron h1", { duration: 1.5, text: "Nedy Nugroho", delay: 1.1 });
gsap.to(".jumbotron p", { duration: 1.5, text: "I am a student", delay: 1.3 });

// animasi scroll
gsap.to(".AnimasiText-1", {
  scrollTrigger: {
    trigger: ".AnimasiText-1",
    start: "20px 80%",
    toggleAction: "restart pause none none",
  },
  duration: 2,
  text: "About Me",
});

gsap.to(".AnimasiText-2", {
  scrollTrigger: {
    trigger: ".AnimasiText-2",
    start: "20px 80%",
    toggleAction: "restart pause none none",
  },
  duration: 2,
  text: "My Project",
});

gsap.from(".AnimasiText-3", {
  scrollTrigger: {
    trigger: ".AnimasiText-3",
    start: "20px 80%",
    toggleAction: "restart pause none none",
  },
  duration: 2,
  x: -100,
  opacity: 0,
  delay: 0.5,
});

gsap.from(".AnimasiText-4", {
  scrollTrigger: {
    trigger: ".AnimasiText-4",
    start: "20px 80%",
    toggleAction: "restart pause none none",
  },
  duration: 2,
  x: 100,
  opacity: 0,
  delay: 0.6,
});

gsap.from("#project .card", {
  scrollTrigger: {
    trigger: "#project .card",
    start: "20px 80%",
    toggleAction: "restart pause none start",
  },
  duration: 2.5,
  x: 0,
  opacity: 0,
  delay: 0.2,
});
