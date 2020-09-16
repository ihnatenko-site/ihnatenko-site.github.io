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

  /* FIXED HEADER  &&& ACTIVE LINKS*/

  let lastScroll = 0;

  window.addEventListener("scroll", function () {
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

    lastScroll = height;
  });

  window.addEventListener("scroll", function () {
    setTimeout(() => detectActiveLink(), 1000);
  });

  function detectActiveLink() {
    let height = pageYOffset;

    if ((height > offset(servizi).top - 60) & (height < offset(team).top)) {
      navLinks.forEach((item) => {
        item.classList.remove("active");
      });
      navLinks[0].classList.add("active");
    }
    if ((height > offset(team).top - 50) & (height < offset(storia).top)) {
      navLinks.forEach((item) => {
        item.classList.remove("active");
      });
      navLinks[1].classList.add("active");
    }
    if ((height > offset(storia).top - 125) & (height < offset(galeria).top)) {
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
    if ((height > offset(reviews).top - 50) & (height < offset(contact).top)) {
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
});
