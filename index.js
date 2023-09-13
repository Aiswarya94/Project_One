// Navbar
const menu = document.querySelector('.menu');
const menuList = document.querySelector('nav ul');
menu.addEventListener('click', () => {
  menuList.classList.toggle('showmenu');
});

//Five step process
const slides = document.querySelectorAll('.process-slide');
const prevArrow = document.getElementById('prev');
const nextArrow = document.getElementById('next');
let currentSlide = 0;
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}
prevArrow.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});
nextArrow.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});
showSlide(currentSlide);