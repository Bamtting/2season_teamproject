$(document).ready(function () {
  var swiper = new Swiper(".wSwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(".w-tbox img").on("click", function () {
    // 클릭된 .w-tbox img의 src 속성 가져오기
    const newImageSrc = $(this).attr("src");

    // Swiper 슬라이드 내의 이미지 변경
    const swiperSlide = $(this).closest(".swiper-slide");
    const swiperImage = swiperSlide.find("img");
    swiperImage.attr("src", newImageSrc);
  });
});
