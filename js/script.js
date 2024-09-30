// slider mobile
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'flex';
    } else {
      slide.style.display = 'none';
    }
  });
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.style.opacity = '1';
    } else {
      dot.style.opacity= '0.5';
    }
  });
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentSlide = i;
    showSlide(currentSlide);
  });
});

showSlide(currentSlide);
// cards active
const cards = document.querySelectorAll('.offer_card');
const badge = document.querySelector('.desctop_card-badge');

cards.forEach((card) => {
  // let activeCard = card.classList.contains('active');

  card.addEventListener('click', function () {
    cards.forEach(card => card.classList.remove('active'));
    this.classList.add('active');

  });
});


// burger menu

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header_menu');
const close = document.querySelector('.menu__close');

burger.addEventListener('click', function () {
  menu.classList.add('open');
});

close.addEventListener('click', function () {
  menu.classList.remove('open');
});
