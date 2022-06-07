window.onload = function () {
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

  const ele = document.getElementById("rewards__images");
  ele.style.cursor = "grab";

  let pos = { top: 0, left: 0, x: 0, y: 0 };

  const mouseDownHandler = function (e) {
    ele.style.cursor = "grabbing";
    ele.style.userSelect = "none";

    pos = {
      left: ele.scrollLeft,
      top: ele.scrollTop,
      // Get the current mouse position
      x: e.clientX,
      y: e.clientY,
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    // Scroll the element
    ele.scrollTop = pos.top - dy;
    ele.scrollLeft = pos.left - dx;
  };

  const mouseUpHandler = function () {
    ele.style.cursor = "grab";
    ele.style.removeProperty("user-select");

    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  };

  // Attach the handler
  ele.addEventListener("mousedown", mouseDownHandler);
};
