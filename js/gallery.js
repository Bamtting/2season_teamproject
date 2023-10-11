$(document).ready(function () {
    var swiper = new Swiper(".gallswiper", {
      slidesPerView: 3,
      spaceBetween: 70,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  });
  