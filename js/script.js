const myCarouselElement = document.querySelector('#myCarousel');
const prevArrow = document.querySelector('.carousel-control-prev');

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false,
  prevArrow: '<button type="button" class="slick-prev"><img src="../../img/icons/arrow_left.svg"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arr_2.svg"></button>'
});