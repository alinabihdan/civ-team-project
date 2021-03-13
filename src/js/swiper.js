var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    touchRatio: 5,
    grabCursor: true,
  });