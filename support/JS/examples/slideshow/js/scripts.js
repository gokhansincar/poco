//SWIPER SLIDESHOW
var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  effect: 'slide', //essayez aussi 'fade' ou 'flip'
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
