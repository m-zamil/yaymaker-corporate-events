//initialize slider
new Glide(".glide", {
  type: "carousel",
  gap: 10,
  autoplay: 4000,
  hoverpause: true,
  keyboard: true,
  loop: false,
  perView: 1.3,
  peek: {
    before: 0,
    after: 50,
  },
  breakpoints: {
    19200: {
      perView: 4,
      peek: {
        before: 0,
        after: 0,
      },
      autoplay: false,
      gap: 20,
      loop: false,
    },
    960: {
      perView: 1,
      peek: {
        before: 60,
        after: 60,
      },
      gap: 15,
    },
  },
}).mount();

//initialize slider
new Glide(".glideTopexp", {
  type: "carousel",
  gap: 10,
  autoplay: 4000,
  hoverpause: true,
  keyboard: true,
  perView: 1,
  peek: {
    before: 0,
    after: 50,
  },
  breakpoints: {
    19200: {
      perView: 3,
      peek: {
        before: 0,
        after: 0,
      },
      gap: 0,
    },

    960: {
      perView: 1.3,
      peek: {
        before: 0,
        after: 0,
      },
      gap: 0,
    },
  },
}).mount();

if (screen.width > 960) {
  const everyLi = document.querySelectorAll(".every__slider li:not(.glide__slide--clone)");
  if (everyLi.length > 4) {
    console.log(everyLi.length);
    document.querySelector(".controls").style.display = "block";
  }
}

//initialize slider
new Glide(".enhanceSlider", {
  type: "carousel",
  gap: 0,
  autoplay: 4000,
  hoverpause: true,
  keyboard: true,
  perView: 1,
  peek: {
    before: 0,
    after: 0,
  },
}).mount();
