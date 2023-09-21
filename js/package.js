$(document).ready(function () {
  $("#packageMoreBtn").click(function () {
    location.href = "s_package.html";
  });

  //   리뷰 클릭 시 모달창 띄우기
  $(".packimgli1").click(function () {
    // 모달 이미지 열기
    $("#pkModalImage").attr("src", "../images/pk_weddinghall_2.webp").css({
      "background-position": "center",
      "background-repeat": "no-repeat",
      "background-size": "cover",
    });
    $(".pk-modal-list01").css("display", "block");
    $(".pk-modal-list02").css("display", "none");
    $(".pk-modal-list03").css("display", "none");
    $("#PkmyModal").css("display", "block").css("position", "fixed");
    $(".header").css("display", "none");
    //백그라운드 어둡게 하기
    $(".modal-overlay").css("display", "block");
  });
  $(".packimgli2").click(function () {
    // 모달 이미지 열기
    $("#pkModalImage").attr("src", "../images/makeup7.jpg");
    $("#PkmyModal").css("display", "block").css("position", "fixed");
    $(".pk-modal-list01").css("display", "none");
    $(".pk-modal-list03").css("display", "none");
    $(".pk-modal-list02").css("display", "block");
    $(".header").css("display", "none");
    //백그라운드 어둡게 하기
    $(".modal-overlay").css("display", "block");
  });
  $(".packimgli3").click(function () {
    // 모달 이미지 열기
    $("#pkModalImage").attr("src", "../images/studio5.jpg");
    $("#PkmyModal").css("display", "block").css("position", "fixed");
    $(".pk-modal-list01").css("display", "none");
    $(".pk-modal-list02").css("display", "none");
    $(".pk-modal-list03").css("display", "block");
    $(".header").css("display", "none");
    //백그라운드 어둡게 하기
    $(".modal-overlay").css("display", "block");
  });

  // 모달 닫기 버튼
  $(".pk-close").click(function () {
    $("#PkmyModal").css("display", "none");
    $(".modal-overlay").css("display", "none");
    $(".header").css("display", "block");
  });
});
