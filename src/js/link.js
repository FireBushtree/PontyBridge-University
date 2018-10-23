var mySwiper = new Swiper ('.swiper-container', {
  loop: true,

  autoplay: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})