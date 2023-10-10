$(document).ready(function () {
  $(".package-review-wrapper-inner1").hover(
    function () {
      $(this).find(".package-review-wrap").css("transform", "rotateY(180deg)");
      // 이미지 변경 (원하는 이미지 경로로 바꿔주세요)
      $(this)
        .find(".package-review-wrap")
        .css("background-image", "url('../images/main-pk-review1-1.png')");
      $(this).find(".package-review-wrap-title").css("display", "none");
    },
    function () {
      $(this).find(".package-review-wrap").css("transform", "rotateY(0deg)");
      // 이미지 초기화 (원래 이미지로 바꿔주세요)
      $(this)
        .find(".package-review-wrap")
        .css("background-image", "url('../images/pk-review-modalimg1.png')");
      $(this).find(".package-review-wrap-title").css("display", "block");
    }
  );
  $(".package-review-wrapper-inner2").hover(
    function () {
      $(this).find(".review-wrap2").css("transform", "rotateY(180deg)");
      // 이미지 변경 (원하는 이미지 경로로 바꿔주세요)
      $(this)
        .find(".review-wrap2")
        .css("background-image", "url('../images/main-pk-review2-1.png')");
      $(this).find(".package-review-wrap-title").css("display", "none");
    },
    function () {
      $(this).find(".review-wrap2").css("transform", "rotateY(0deg)");
      // 이미지 초기화 (원래 이미지로 바꿔주세요)
      $(this)
        .find(".review-wrap2")
        .css("background-image", "url('../images/pk-review-modalimg2.png')");
      $(this).find(".package-review-wrap-title").css("display", "block");
    }
  );
  $(".package-review-wrapper-inner3").hover(
    function () {
      $(this).find(".review-wrap3").css("transform", "rotateY(180deg)");
      // 이미지 변경 (원하는 이미지 경로로 바꿔주세요)
      $(this)
        .find(".review-wrap3")
        .css("background-image", "url('../images/main-pk-review3-1.png')");
      $(this).find(".package-review-wrap-title").css("display", "none");
    },
    function () {
      $(this).find(".review-wrap3").css("transform", "rotateY(0deg)");
      // 이미지 초기화 (원래 이미지로 바꿔주세요)
      $(this)
        .find(".review-wrap3")
        .css("background-image", "url('../images/studio20-1.jpg')");
      $(this).find(".package-review-wrap-title").css("display", "block");
    }
  );
  $(".package-review-wrapper-inner4").hover(
    function () {
      $(this).find(".review-wrap4").css("transform", "rotateY(180deg)");
      // 이미지 변경 (원하는 이미지 경로로 바꿔주세요)
      $(this)
        .find(".review-wrap4")
        .css("background-image", "url('../images/main-pk-review4-1.png')");
      $(this).find(".package-review-wrap-title").css("display", "none");
    },
    function () {
      $(this).find(".review-wrap4").css("transform", "rotateY(0deg)");
      // 이미지 초기화 (원래 이미지로 바꿔주세요)
      $(this)
        .find(".review-wrap4")
        .css("background-image", "url('../images/pk-review-modalimg4.png')");
      $(this).find(".package-review-wrap-title").css("display", "block");
    }
  );

  //   리뷰 클릭 시 모달창 띄우기
  $(".package-review-wrapper-inner1").click(function () {
    // 모달 이미지 열기
    $("#modalImage").attr("src", "../images/main-pk-review1.png");
    $("#modalImage1").attr("src", "../images/pk-review-modalimg1.png");

    $("#PackagemyModal").css("display", "block").css("position", "fixed");
    $(".header").css("display", "none");
    $(".top-button").css("display", "none");
    //백그라운드 어둡게 하기
    $(".modal-overlay").css("display", "block");
  });

  $(".package-review-wrapper-inner2").click(function () {
    // 모달 이미지 열기
    $("#modalImage").attr("src", "../images/main-pk-review2.png");
    $("#modalImage1").attr("src", "../images/pk-review-modalimg2.png");
    $("#PackagemyModal").css("display", "block").css("position", "fixed");
    $(".header").css("display", "none");
    $(".top-button").css("display", "none");
    //백그라운드 어둡게 하기
    $(".modal-overlay").css("display", "block");
  });

  $(".package-review-wrapper-inner3").click(function () {
    // 모달 이미지 열기
    $("#modalImage").attr("src", "../images/main-pk-review3.png");
    $("#modalImage1").attr(
      "src",
      "../images/../images/pk-review-modalimg3.png"
    );
    $("#PackagemyModal").css("display", "block").css("position", "fixed");
    $(".header").css("display", "none");
    $(".top-button").css("display", "none");
    //백그라운드 어둡게 하기
    $(".modal-overlay").css("display", "block");
  });

  $(".package-review-wrapper-inner4").click(function () {
    // 모달 이미지 열기
    $("#modalImage").attr("src", "../images/main-pk-review4.png");
    $("#modalImage1").attr("src", "../images/pk-review-modalimg4.png");
    $("#PackagemyModal").css("display", "block").css("position", "fixed");
    $(".header").css("display", "none");
    $(".top-button").css("display", "none");
    //백그라운드 어둡게 하기
    $(".modal-overlay").css("display", "block");
  });

  // 모달 닫기 버튼
  $(".package-close").click(function () {
    $("#PackagemyModal").css("display", "none");
    $(".modal-overlay").css("display", "none");
    $(".header").css("display", "block");
    $(".top-button").css("display", "block");
  });

  //페이지 이동
  $("#PackageMoreBtn").click(function () {
    location.href = "s_review.html";
  });

  //스와이퍼 슬라이드
  var slide = new Swiper(".pk-review-swiper", {
    slidesPerView: "1", // 한 슬라이드에 보여줄 갯수
    spaceBetween: 10, // 슬라이드 사이 여백
    loop: true, // 슬라이드 반복 여부
    pagination: false, // pager 여부
    autoplay: {
      // 자동 슬라이드 설정
      delay: 4000, // 시간 설정
      disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    navigation: {
      // 버튼 사용자 지정
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      //반응형
      // 화면의 넓이가 320px 이상일 때
      320: {
        slidesPerView: 1,
        spaceBetween: 100,
      },
      400: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // 화면의 넓이가 640px 이상일 때
      640: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      736: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1880: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
});
