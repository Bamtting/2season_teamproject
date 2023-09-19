$(document).ready(function () {
  var visualswiper = new Swiper(".visual-mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // autoplay: {
    //   delay: 2500,

    //   disableOnInteraction: true,
    // },
  });
  // 스크롤 시 상단으로 이동
  $(function () {
    // 보이기 | 숨기기
    $(window).scroll(function () {
      if ($(this).scrollTop() > 1000) {
        $(".modal-top").fadeIn();
        $(".modal").fadeIn();
      } else {
        $(".modal-top").fadeOut();
        $(".modal").fadeOut();
      }
    });
    // 버튼 클릭시
    $(".modal-top").click(function () {
      $("html, body").animate(
        {
          scrollTop: 0, // 0 까지 animation 이동합니다.
        },
        400
      ); // 속도 400 return false;
    });
  });

  // 스와이프 제어 버튼
  $(".fa-play").on("click", function () {
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
