// AOS aimation
AOS.init({
  duration: 1000
});

// GSAP
gsap.registerPlugin(ScrollTrigger, TextPlugin);

gsap.from("#Nav", { duration: 2, y: -100, opacity: 0, ease: "bounce" });
gsap.from(".jumbotron img", { duration: 1, opacity: 0, delay: 0.8 });
gsap.from("#about h2", { duration: 1, opacity: 0 });
gsap.to(".jumbotron h1", { duration: 1.5, text: "Nedy Nugroho", delay: 1.1 });
gsap.to(".jumbotron p", { duration: 1.5, text: "I am a student", delay: 1.3 });