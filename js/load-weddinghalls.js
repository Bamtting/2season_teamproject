$(document).ready(function () {
 

  $(".hall-list button").click(function(){
        
    $(".hall-list button").removeClass("active");
    $(this).addClass("active");
    var selector = $(this).attr("data-filter");
    $(".mix-wrapper").isotope({
        filter : selector
    })
  })
    

  // 버튼 클릭 이벤트 처리
  // $(
  //   ".hall-btn, .hall-btn-1, .hall-btn-2, .hall-btn-3, .hall-btn-4, .hall-btn-5, .hall2-btn, .hall2-btn-1, .hall2-btn-2, .hall2-btn-3, .hall2-btn-4, .hall2-btn-5"
  // ).click(function () {
  //   // 해당 버튼의 data-filter 값을 가져와서 필터링 적용
  //   let filterValue = $(this).data("filter");

  //   // MixItUp을 사용하여 필터링 적용
  //   mixer.filter(filterValue);
  // });

  // JSON 데이터 예시 (웨딩홀 정보)
  const weddingHallData = [
    {
      imageSrc: "images/test.jpg",
      location: "서울 강남구",
      name: "발라드지디 수서",
      hallType: "호텔",
      menuType: "뷔페",
      mealCost: "85,000원",
      capacity: "최대 500명",
      id: "all nomal",
    },
    {
      imageSrc: "images/test.jpg",
      location: "서울 강남구",
      name: "발라드지디 수서",
      hallType: "채플",
      menuType: "뷔페",
      mealCost: "85,000원",
      capacity: "최대 400명",
      id: "chapel",
    },
    {
      imageSrc: "images/test.jpg",
      location: "서울 강남구",
      name: "발라드지디 수서",
      hallType: "채플",
      menuType: "뷔페",
      mealCost: "85,000원",
      capacity: "최대 400명",
      id: "chapel",
    },
    {
      imageSrc: "images/test.jpg",
      location: "서울 강남구",
      name: "발라드지디 수서",
      hallType: "채플",
      menuType: "뷔페",
      mealCost: "85,000원",
      capacity: "최대 400명",
      id: "chapel out",
    },
    {
      imageSrc: "images/test.jpg",
      location: "서울 강남구",
      name: "발라드지디 수서",
      hallType: "채플",
      menuType: "뷔페",
      mealCost: "85,000원",
      capacity: "최대 400명",
      id: "chapel out",
    },
    {
      imageSrc: "images/test.jpg",
      location: "서울 강남구",
      name: "발라드지디 수서",
      hallType: "채플",
      menuType: "뷔페",
      mealCost: "85,000원",
      capacity: "최대 400명",
      id: "chapel out",
    },
    {
      imageSrc: "images/test.jpg",
      location: "서울 강남구",
      name: "발라드지디 수서",
      hallType: "채플",
      menuType: "뷔페",
      mealCost: "85,000원",
      capacity: "최대 400명",
      id: "chapel",
    },
    {
      imageSrc: "images/test.jpg",
      location: "서울 강남구",
      name: "발라드지디 수서",
      hallType: "채플",
      menuType: "뷔페",
      mealCost: "85,000원",
      capacity: "최대 400명",
      id: "chapel",
    },
    {
      imageSrc: "images/test.jpg",
      location: "서울 강남구",
      name: "발라드지디 수서",
      hallType: "채플",
      menuType: "뷔페",
      mealCost: "85,000원",
      capacity: "최대 400명",
      id: "chapel",
    },
    {
      imageSrc: "images/test.jpg",
      location: "서울 강남구",
      name: "발라드지디 수서",
      hallType: "채플",
      menuType: "뷔페",
      mealCost: "85,000원",
      capacity: "최대 400명",
      id: "chapel",
    },

    // 다른 웨딩홀 데이터를 추가할 수 있습니다.
  ];

  // 웨딩홀 정보를 동적으로 생성하고 페이지에 추가하는 함수
  function createWeddingHallElements(data) {
    const weddingHallsList = $("#weddingHallsList");

    data.forEach((hall) => {
      const hallContainer = $("<div>").addClass(`mix ${hall.id}`);

      // 이미지 추가
      const image = $("<img>")
        .attr("src", hall.imageSrc)
        .attr("alt", "웨딩홀 이미지");
      hallContainer.append(image);

      const leftContainer = $("<div>").addClass("w-box-left");
      // 위치 정보 추가
      const location = $("<p>").text(hall.location);
      leftContainer.append(location);

      const name = $("<h3>").text(hall.name);
      leftContainer.append(name);

      hallContainer.append(leftContainer);

      const rightContainer = $("<div>").addClass("w-box-right");

      // 홀 종류 추가
      const hallType = $("<p>").html(`<span>홀 종류: </span>${hall.hallType}`);
      rightContainer.append(hallType);

      // 메뉴 종류 추가
      const menuType = $("<p>").html(
        `<span>메뉴 종류: </span>${hall.menuType}`
      );
      rightContainer.append(menuType);

      // 식사 비용 추가
      const mealCost = $("<p>").html(
        `<span>식사 비용: </span>${hall.mealCost}`
      );
      rightContainer.append(mealCost);

      // 보증 인원 추가
      const capacity = $("<p>").html(
        `<span>보증 인원: </span>${hall.capacity}`
      );
      rightContainer.append(capacity);

      hallContainer.append(rightContainer);

      // 페이지에 추가
      weddingHallsList.append(hallContainer);
    });
  }

  // 페이지 로드 시 웨딩홀 정보 생성
  createWeddingHallElements(weddingHallData);
});
