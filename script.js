document.addEventListener('DOMContentLoaded', function() {


const burger = document.querySelector('.burger'),
      nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
    if (burger.classList.contains('active')) {
        burger.classList.remove('active');
        nav.classList.remove('active');
    } else {
        burger.classList.add('active');
        nav.classList.add('active');
    }
});









});