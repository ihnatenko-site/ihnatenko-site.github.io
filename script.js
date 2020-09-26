document.addEventListener("DOMContentLoaded", function () {
  /* BURGER MENU */
  const burger = document.querySelector(".burger"),
    nav = document.querySelector(".nav"),
    navLinks = document.querySelectorAll(".nav__link"),
    intro = document.querySelector(".intro").scrollHeight,
    header = document.querySelector(".header"),
    sliderItem = document.querySelectorAll(".servizi-slider__item"),
    sliderPrev = document.querySelector(".btn--prev.slider"),
    sliderNext = document.querySelector(".btn--next.slider"),
    servizi = document.querySelector(".servizi"),
    team = document.querySelector(".team"),
    storia = document.querySelector(".storia"),
    galeria = document.querySelector(".galeria"),
    reviews = document.querySelector(".reviews"),
    contact = document.querySelector(".contact");

  /* BURGER */

  burger.addEventListener("click", () => {
    if (burger.classList.contains("active")) {
      burger.classList.remove("active");
      nav.style.left = "-100%";
    } else {
      burger.classList.add("active");
      nav.style.left = "0px";
    }
  });

  navLinks.forEach((item) => {
    item.onclick = function () {
      window.removeEventListener("scroll", scrollHandler);

      setTimeout(() => window.addEventListener("scroll", scrollHandler), 1000);
    };
  });

  /* FIXED HEADER  &&& ACTIVE LINKS*/

  let lastScroll = 0;

  window.addEventListener("scroll", scrollHandler);

  function scrollHandler() {
    let height = pageYOffset;

    if (height > intro) {
      header.classList.add("fixed");
      /* if (height > lastScroll) {
            header.classList.remove('fixed');
        } else {
            header.classList.add('fixed');
        } */
    } else {
      header.classList.remove("fixed");
    }

    detectActiveLink();
    lastScroll = height;
  }

  function detectActiveLink() {
    let height = pageYOffset;

    if ((height > offset(servizi).top - 60) & (height < offset(team).top)) {
      navLinks.forEach((item) => {
        item.classList.remove("active");
      });
      navLinks[0].classList.add("active");
    }
    if ((height > offset(team).top - 64) & (height < offset(storia).top)) {
      navLinks.forEach((item) => {
        item.classList.remove("active");
      });
      navLinks[1].classList.add("active");
    }
    if ((height > offset(storia).top - 100) & (height < offset(galeria).top)) {
      navLinks.forEach((item) => {
        item.classList.remove("active");
      });
      navLinks[2].classList.add("active");
    }
    if ((height > offset(galeria).top - 125) & (height < offset(reviews).top)) {
      navLinks.forEach((item) => {
        item.classList.remove("active");
      });
      navLinks[3].classList.add("active");
    }
    if ((height > offset(reviews).top - 65) & (height < offset(contact).top)) {
      navLinks.forEach((item) => {
        item.classList.remove("active");
      });
      navLinks[4].classList.add("active");
    }
    if (height > offset(contact).top - 150) {
      navLinks.forEach((item) => {
        item.classList.remove("active");
      });
      navLinks[5].classList.add("active");
      navLinks[6].classList.add("active");
    }

    if (height < offset(servizi).top) {
      navLinks.forEach((item) => {
        item.classList.remove("active");
      });
    }

    function offset(el) {
      let rect = el.getBoundingClientRect(),
        scrollTop = document.documentElement.scrollTop;
      return { top: rect.top + scrollTop };
    }
  }

  /* SMOOTH SCROLL */

  const blocks = document.querySelectorAll('a[href*="#"');

  blocks.forEach(function (item) {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const blockId = item.getAttribute("href");
      document.querySelector("" + blockId).scrollIntoView({
        block: "start",
        behavior: "smooth",
      });

      nav.style.left = "-100%";
      burger.classList.remove("active");
      navLinks.forEach((item) => {
        item.classList.remove("active");
      });
      item.classList.add("active");
    });
  });

  /* SLIDER */

  let slideIndex = 1;

  function showSlide(n) {
    if (n > sliderItem.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = sliderItem.length;
    }

    sliderItem.forEach((item) => {
      item.classList.add("hidden");
    });

    sliderItem[slideIndex - 1].classList.remove("hidden");
    sliderItem[slideIndex - 1].classList.add("fade-in");
    /*  sliderItem[slideIndex - 1].querySelector('.servizi__img').classList.add('swing-in-top-fwd'); */
  }

  function plusSlide(n = 1) {
    showSlide((slideIndex += n));
  }

  showSlide(slideIndex);

  sliderPrev.addEventListener("click", () => {
    plusSlide(-1);
    clearInterval(sliderInterval);
  });
  sliderNext.addEventListener("click", () => {
    plusSlide(1);
    clearInterval(sliderInterval);
  });

  let sliderInterval = setInterval(plusSlide, 4000);



  /* MODAL */
  const modal = document.querySelector(".orario"),
    modalLink = document.querySelectorAll("[data-modal]"),
    modalCLose = document.querySelector(".orario__nav");

  modalLink.forEach((item) => {
    item.addEventListener("click", () => {
      modal.classList.toggle("show");
      /* document.body.style.overflow = "hidden"; */
      if (burger.classList.contains("active")) {
        nav.style.left = "-100%";
        burger.classList.remove("active");
      }
    });
  });

  modalCLose.addEventListener("click", () => {
    modal.classList.remove("show");
    /* document.body.style.overflow = ""; */
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.toggle("show");
    }
  });


  //carousel

  const main = document.querySelector(".reviews__inner");
  const carousel = document.querySelector(".reviews__carousel");
  const left = document.querySelector(".carousel_left");
  const right = document.querySelector(".carousel_right");
  const controlPanel = document.querySelectorAll(".reviews__btn");

  let position = 0;
  let counter = carousel.offsetWidth;

  right.onclick = () => {
    clearInterval(autoClick);

    if (counter < main.offsetWidth) {
      position = 0;
      counter = 2300;
    } else {
      position -= 288;
      counter -= 288;
    }

    carousel.style.left = position + "px";

    autoClick = setInterval(() => right.onclick(), 5000);
  };

  left.onclick = () => {
    clearInterval(autoClick);

    if (counter > 2250) {
      position = main.offsetWidth - counter;
      counter = main.offsetWidth - 10;
    } else {
      position += 288;
      counter += 288;
    }

    carousel.style.left = position + "px";

    autoClick = setInterval(() => right.onclick(), 5000);
  };

  let autoClick = setInterval(() => right.onclick(), 5000);
});
