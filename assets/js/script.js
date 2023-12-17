var tl = gsap.timeline();
//sequenced one-after-the-other
tl.from(".box1", { duration: 2, y: 100 }).from(".box2", {
  duration: 2,
  y: 100,
});

tl.from(".fade-in", { duration: 2, x: 100, opacity: 0.5 });

tl.from(".fade-in2", { duration: 2, x: 100, opacity: 0.5 });
