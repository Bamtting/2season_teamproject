$(document).ready(function () {
  var visualswiper = new Swiper(".pk-visual-mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    navigation: {
      // 버튼 사용자 지정
      nextEl: ".pk-next-btn",
    },
    // autoplay: {
    //   delay: 2500,

    //   disableOnInteraction: true,
    // },
  });
  //스와이프 될 때 색상 변경
  $(".swiper-slide")
    // 스와이프 제어 버튼
    .$(".fa-play")
    .on("click", function () {
      $(".fa-pause").removeClass("active");
      $(this).addClass("active");
      visualswiper.autoplay.start();
      return false;
    });
  $(".fa-pause").on("click", function () {
    $(".fa-play").removeClass("active");
    $(this).addClass("active");
    visualswiper.autoplay.stop();
    return false;
  });
});
