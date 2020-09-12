document.addEventListener('DOMContentLoaded', function() {

/* BURGER MENU */
const burger = document.querySelector('.burger'),
      nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
    if (burger.classList.contains('active')) {
        burger.classList.remove('active');
        nav.style.left = "-100%";
  
    } else {
        burger.classList.add('active');
        nav.style.left = "0px";
    }
});


/* SMOOTH SCROLL */

const blocks = document.querySelectorAll('a[href*="#"');

blocks.forEach(function(item) {
    item.addEventListener('click', (event)=>{
        event.preventDefault();
        const blockId = item.getAttribute('href');
        document.querySelector("" + blockId).scrollIntoView({
            block: "start",
            behavior: "smooth"    
        });
    });
});





});