function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
loco();
// Shery.mouseFollower();

// Shery.makeMagnet("span", {
//   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//   duration: 1,
// });
const tl = gsap.timeline();

tl.from(".main", {
  y: 500,
  duration: 1,
});

tl.from("span", {
  x: 900,
  opacity: 0,
  scale: 0,
  stagger: 0.2,
  ease: "back",
});
tl.to(".loader-container", {
  y: -1900,
  opacity: 10,
  // scale: 0,
  duration: 3,
  stagger: 0.3,
  ease: "back",
});

const mouselight = document.querySelector(".main-content-page1 ");

mouselight.addEventListener("mousemove", (event) => {
  gsap.to(".focus", {
    left: event.pageX,
    top: event.pageY,
    scale: 1,
    opacity: 1,
  });
});
mouselight.addEventListener("mouseleave", () => {
  gsap.to(".focus", {
    scale: 0,
    opacity: 0,
  });
});
// mouselight.addEventListener("mouseenter", () => {
//   gsap.from(".focus", {
//     scale: 1,
//     opacity: 1,
//     // display: "absolute",
//   });
// });

main - content - page1;
Shery.makeMagnet(".main-content-page1 span" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

const text = new SplitType("span", { types: "words, chars" });

tl.from(text.chars, {
  duration: 1,
  // scale: 4,
  // autoAlpha: 0,
  y: 250,
  rotation: 80,
  transformOrigin: "-100% 110%",
  // ease: "back",
  stagger: 0.03,
});
