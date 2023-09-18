$(document).ready(function () {
  $(".package-review-wrapper-inner1").hover(
    function () {
      $(this).find(".package-review-wrap").css("transform", "rotateY(180deg)");
      // 이미지 변경 (원하는 이미지 경로로 바꿔주세요)
      $(this)
        .find(".package-review-wrap")
        .css("background-image", "url('../images/package_review_1.jpg')");
      $(this).find(".package-review-wrap-title").css("display", "none");
    },
    function () {
      $(this).find(".package-review-wrap").css("transform", "rotateY(0deg)");
      // 이미지 초기화 (원래 이미지로 바꿔주세요)
      $(this)
        .find(".package-review-wrap")
        .css("background-image", "url('../images/package_review1-1.png')");
      $(this).find(".package-review-wrap-title").css("display", "block");
    }
  );
  $(".package-review-wrapper-inner2").hover(
    function () {
      $(this).find(".review-wrap2").css("transform", "rotateY(180deg)");
      // 이미지 변경 (원하는 이미지 경로로 바꿔주세요)
      $(this)
        .find(".review-wrap2")
        .css("background-image", "url('../images/package_review_2.jpg')");
      $(this).find(".package-review-wrap-title").css("display", "none");
    },
    function () {
      $(this).find(".review-wrap2").css("transform", "rotateY(0deg)");
      // 이미지 초기화 (원래 이미지로 바꿔주세요)
      $(this)
        .find(".review-wrap2")
        .css("background-image", "url('../images/package_review2-1.png')");
      $(this).find(".package-review-wrap-title").css("display", "block");
    }
  );
  $(".package-review-wrapper-inner3").hover(
    function () {
      $(this).find(".review-wrap3").css("transform", "rotateY(180deg)");
      // 이미지 변경 (원하는 이미지 경로로 바꿔주세요)
      $(this)
        .find(".review-wrap3")
        .css("background-image", "url('../images/package_review_3.jpg')");
      $(this).find(".package-review-wrap-title").css("display", "none");
    },
    function () {
      $(this).find(".review-wrap3").css("transform", "rotateY(0deg)");
      // 이미지 초기화 (원래 이미지로 바꿔주세요)
      $(this)
        .find(".review-wrap3")
        .css("background-image", "url('../images/package_review3-1.png')");
      $(this).find(".package-review-wrap-title").css("display", "block");
    }
  );
  $(".package-review-wrapper-inner4").hover(
    function () {
      $(this).find(".review-wrap4").css("transform", "rotateY(180deg)");
      // 이미지 변경 (원하는 이미지 경로로 바꿔주세요)
      $(this)
        .find(".review-wrap4")
        .css("background-image", "url('../images/package_review_4.jpg')");
      $(this).find(".package-review-wrap-title").css("display", "none");
    },
    function () {
      $(this).find(".review-wrap4").css("transform", "rotateY(0deg)");
      // 이미지 초기화 (원래 이미지로 바꿔주세요)
      $(this)
        .find(".review-wrap4")
        .css("background-image", "url('../images/package_review4-1.png')");
      $(this).find(".package-review-wrap-title").css("display", "block");
    }
  );

  //   리뷰 클릭 시 모달창 띄우기
  $(".package-review-wrapper-inner1").click(function () {
    // 모달 이미지 열기
    $("#modalImage").attr("src", "../images/package_review1-1.png");
    $("#modalImage1").attr("src", "../images/pk_review_main4.jpg").css({ left: "-650px", top: "120px" });
    $("#PackagemyModal").css("display", "block").css("position", "fixed");
    //백그라운드 어둡게 하기
    $(".modal-overlay").css("display", "block");
  });

  $(".package-review-wrapper-inner2").click(function () {
    // 모달 이미지 열기
    $("#modalImage").attr("src", "../images/package_review2-1.png");
    $("#modalImage1")
      .attr("src", "../images/pk_review_main1.jpg")
      .css({ left: "-650px", top: "5px" });
    $("#PackagemyModal").css("display", "block").css("position", "fixed");
    //백그라운드 어둡게 하기
    $(".modal-overlay").css("display", "block");
  });

  $(".package-review-wrapper-inner3").click(function () {
    // 모달 이미지 열기
    $("#modalImage").attr("src", "../images/package_review3-1.png");
    $("#modalImage1")
      .attr("src", "../images/pk_review_main3.jpg")
      .css({ left: "-650px", top: "230px" });
    $("#PackagemyModal").css("display", "block").css("position", "fixed");
    //백그라운드 어둡게 하기
    $(".modal-overlay").css("display", "block");
  });

  $(".package-review-wrapper-inner4").click(function () {
    // 모달 이미지 열기
    $("#modalImage").attr("src", "../images/package_review4-1.png");
    $("#modalImage1")
      .attr("src", "../images/pk_review_main2.jpg")
      .css({ left: "-650px", top: "230px" });
    $("#PackagemyModal").css("display", "block").css("position", "fixed");
    //백그라운드 어둡게 하기
    $(".modal-overlay").css("display", "block");
  });

  // 모달 닫기 버튼
  $(".package-close").click(function () {
    $("#PackagemyModal").css("display", "none");
    $(".modal-overlay").css("display", "none");
  });
});
