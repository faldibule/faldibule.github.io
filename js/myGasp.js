gsap.registerPlugin(TextPlugin);
gsap.to(".lead", { duration: 2, delay: 1.5, text: "Colleger | Gadget & Code enthusiast" });
gsap.from(".jumbotron img", { duration: 1, rotateY: 180, opacity: 0, ease: "bounce" });
gsap.from(".navbar", { duration: 1.5, y: "-100%", opacity: 0, ease: "bounce" });
gsap.from(".display-4", { duration: 1.5, x: -70, opacity: 0, ease: "back" });
