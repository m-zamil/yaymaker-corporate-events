window.onload = function () {
  $(document).ready(function () {

    new Glide(".everySlider ", {
      type: "carousel",
      hoverpause: true,
      keyboard: true,
      perView: 4,
      peek: {
        before: 0,
        after: 0,
      },
      autoplay: false,
      gap: 20,
      loop: false,
      breakpoints: {
        960: {
          autoplay: 4000,
          perView: 1,
          peek: {
            before: 60,
            after: 60,
          },
          gap: 15,
          loop: false,
        },
      },
    }).mount();
  
    //initialize slider
    new Glide(".glideTopexp", {
      type: "carousel",
      gap: 0,
      autoplay: 4000,
      hoverpause: true,
      keyboard: true,
      perView: 3,
      peek: {
        before: 0,
        after: 0,
      },
      breakpoints: {
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

  //initialize slider
  new Glide(".teamSlider", {
    type: "carousel",
    gap: 10,
    autoplay: 4000,
    hoverpause: true,
    keyboard: true,
    perView: 3,
    peek: {
      before: 0,
      after: 0,
    },
    gap: 50,
    breakpoints: {
      960: {
        perView: 1,
        peek: {
          before: 0,
          after: 0,
        },
        gap: 0,
      },
    },
  }).mount();

  //faq's accordion script
  const items = document.querySelectorAll(".accordion button");
  function toggleAccordion() {
    const itemToggle = this.getAttribute("aria-expanded");
    for (i = 0; i < items.length; i++) {
      items[i].setAttribute("aria-expanded", "false");
    }
    if (itemToggle == "false") {
      this.setAttribute("aria-expanded", "true");
    }
  }
  items.forEach((item) => item.addEventListener("click", toggleAccordion));

  //GSAP animations
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray("#line.line-1").forEach((el) => {
    gsap.from(el, {
      scrollTrigger: el,
      scrollTrigger: {
        trigger: el,
        scrub: true,
        start: "top 80%",
        end: "top 45%",
      },
      scaleX: 0,
      transformOrigin: "left center",
      ease: "none",
    });
  });

  gsap.utils.toArray("#line.line-2").forEach((el) => {
    gsap.from(el, {
      scrollTrigger: el,
      scrollTrigger: {
        trigger: el,
        scrub: true,
        start: "top 80%",
        end: "top 50%",
      },
      scaleX: 0,
      transformOrigin: "left center",
      ease: "none",
    });
  });

  gsap.utils.toArray("#line.line-3").forEach((el) => {
    gsap.from(el, {
      scrollTrigger: el,
      scrollTrigger: {
        trigger: el,
        scrub: true,
        start: "top 80%",
        end: "top 55%",
      },
      scaleX: 0,
      transformOrigin: "left center",
      ease: "none",
    });
  });

  //GSAP speech bubbles animation

  gsap.utils.toArray(".speech__bubble").forEach((el) => {
    gsap.to(el, {
      scale: 1.3,
      opacity: 1,
      duration: 1,
      yoyo: true,
      repeat: 1,
      scrollTrigger: {
        trigger: el,
        scrub: true,
        start: "bottom 70%",
        end: "top 20%",
      },
    });
  });
  const heroNav = document.querySelector("ul.hero__nav__list");
  const heroNavList = document.querySelector("ul.hero__nav__list li.item__active");

  heroNav.addEventListener("mouseover", () => {
    if (heroNavList) {
      heroNavList.classList.remove("item__active");
    }
  });
});
};

function scrollIntoView(selectorId) {
  document.getElementById(selectorId).scrollIntoView();
}
