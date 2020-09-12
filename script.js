document.addEventListener('DOMContentLoaded', function() {

/* BURGER MENU */
const burger = document.querySelector('.burger'),
      nav = document.querySelector('.nav'),
      intro = document.querySelector('.intro').scrollHeight,
      header = document.querySelector('.header');

burger.addEventListener('click', () => {
    if (burger.classList.contains('active')) {
        burger.classList.remove('active');
        nav.style.left = "-100%";
  
    } else {
        burger.classList.add('active');
        nav.style.left = "0px";
    }
});


 /* FIXED HEADER */

let lastScroll = 0;

window.addEventListener('scroll', function () {
    
    let height = pageYOffset;

    if (height > intro) {
        if (height > lastScroll) {
            header.classList.remove('fixed');
        } else {
            header.classList.add('fixed');
        }
    } else {
        header.classList.remove('fixed');
    }

    lastScroll = height;
});

/* SMOOTH SCROLL */

const blocks = document.querySelectorAll('a[href*="#"');

function scrollMain(scrollDelay) {
    blocks.forEach(function(item) {
        item.addEventListener('click', (event)=>{
            event.preventDefault();
            const blockId = item.getAttribute('href');
            document.querySelector("" + blockId).scrollIntoView({
                block: "start",
                behavior: "smooth"    
            });
            nav.style.left = "-100%";
            burger.classList.remove('active');

            /* header.classList.remove('fixed');
            header.style.display = 'none'; */
            /* lastScroll = 0; */
            scrollDelay();
        });
        
    });
   
}



scrollMain(function() {
    header.classList.remove('fixed');
});


});