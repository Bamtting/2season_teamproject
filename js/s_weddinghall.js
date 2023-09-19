$(document).ready(function () {
  // 상위 홀 선택 버튼 클릭시 필터링
  $(".hall-list button").click(function () {
    $(".hall-list button").removeClass("active");
    $(this).addClass("active");
    var selector = $(this).attr("data-filter");
    $(".mix-wrapper").isotope({
      filter: selector,
    });
  });
  // 셀렉트 박스 내 선택시 필터링
  $("#selcity").change(function () {
    var selcity = $(this).val(); // 선택된 옵션의 값 가져오기
    var filterValue = selcity === "all" ? "*" : "." + selcity;

    $(".mix-wrapper").isotope({
      filter: filterValue,
    });
  });

  // "지역(시/도)" 셀렉트 박스 변경 이벤트 핸들러
  $("#selcity").change(function () {
    var selectedCity = $(this).val();
    var citySelect = $("#city");

    // "전체"를 선택한 경우, "지역(시/군/구)" 셀렉트 박스 초기화
    if (selectedCity === "all") {
      citySelect.empty();
      citySelect.append('<option value="all">지역을 선택해주세요.</option>');
    } else {
      // 선택한 "시/도"에 따라 해당하는 동 이름 추가
      var cityOptions = getCityOptions(selectedCity);
      citySelect.html(cityOptions);
    }
  });

  // "시/도"에 따라 해당하는 동 이름을 가져오는 함수 (예시)
  function getCityOptions(selectedCity) {
    var cityOptions = "";

    // 선택한 "시/도"에 따라 동적으로 옵션 추가
    switch (selectedCity) {
      case "seoul":
        cityOptions =
          '<option value="all" data-filter=".sall" >전체</option>' +
          '<option value="gangnam" data-filter=".gangnam" >강남구</option>' +
          '<option value="Seocho" data-filter=".seocho">서초</option>' +
          '<option value="gangseo" data-filter=".gangseo">강서/양천</option>' +
          '<option value="songpa" data-filter=".songpa">송파/잠실</option>' +
          '<option value="sindorim" data-filter=".sindorim">신도림/구로/영등포</option>' +
          '<option value="mapo" data-filter=".mapo">마포/서대문/은평</option>' +
          '<option value="gangdong" data-filter=".gangdong">강동</option>' +
          '<option value="seongdong" data-filter=".seongdong">성동/광진</option>' +
          '<option value="junggu" data-filter=".junggu">중구/용산/종로</option>' +
          '<option value="gwanak" data-filter=".gwanak">관악/동작/금천</option>' +
          '<option value="seongbuk" data-filter=".seongbuk">성북/동대문/중랑</option>' +
          '<option value="gangbuk" data-filter=".gangbuk">강북/노원/도봉</option>';
        break;
      case "gyeonggi":
        cityOptions =
          '<option value="all-gyeonggi" data-filter=".gall">전체</option>' +
          '<option value="seongnam" data-filter=".seongnam">성남/분당</option>' +
          '<option value="suwon" data-filter=".suwon">수원</option>' +
          '<option value="yongin" data-filter=".yongin">용인</option>' +
          '<option value="anyang" data-filter=".anyang">안양/광명</option>' +
          '<option value="ansan" data-filter=".ansan">안산</option>' +
          '<option value="bucheon" data-filter=".bucheon">부천</option>' +
          '<option value="ilsan" data-filter=".ilsan">일산</option>' +
          '<option value="pyeongtaek" data-filter=".pyeongtaek">평택</option>' +
          '<option value="uijeongbu" data-filter=".uijeongbu">의정부</option>';
        break;
      case "gangwon":
        cityOptions =
          '<option value="all-gangwon" data-filter=".gwall">전체</option>';
        break;
      case "gyeongnam":
        cityOptions =
          '<option value="all-gyeongnam" data-filter=".gnall">전체</option>';
        break;
      case "gwangju":
        cityOptions =
          '<option value="all-gwangju" data-filter=".gjall">전체</option>';
        break;
      case "daejeon":
        cityOptions =
          '<option value="all-daejeon" data-filter=".djall">전체</option>';
        break;
      case "daegu":
        cityOptions =
          '<option value="all-daegu" data-filter=".dgall">전체</option>';
        break;
      case "busan":
        cityOptions =
          '<option value="all-busan" data-filter=".bsall">전체</option>';
        break;
      case "ulsan":
        cityOptions =
          '<option value="all-ulsan" data-filter=".usall">전체</option>';
        break;
      case "incheon":
        cityOptions =
          '<option value="all-incheon" data-filter=".icall">전체</option>';
        break;
      case "jeonbuk":
        cityOptions =
          '<option value="all-jeonbuk" data-filter=".jball">전체</option>';
        break;
      case "chungnam":
        cityOptions =
          '<option value="all-chungnam" data-filter=".cnall">전체</option>';
        break;
      case "chungbuk":
        cityOptions =
          '<option value="all-gyeonggi" data-filter=".cball">전체</option>';
        break;
      case "Jeju":
        cityOptions =
          '<option value="all-Jeju" data-filter=".jjall">전체</option>';
        break;
      // 다른 시/도에 대한 경우 추가
    }

    return cityOptions;
  }

  // JSON 데이터 예시 (웨딩홀 정보)
  const weddingHallData = [
    {
      imageSrc: "images/wd1.jpg",
      location: "서울 강남구",
      name: "발라드지디 수서",
      hallType: "호텔",
      menuType: "뷔페",
      mealCost: "85,000원",
      capacity: "최대 500명",
      id: "all seoul sall gangnam hotel bf 300 79won sc",
    },
    {
      imageSrc: "images/wd2.jpg",
      location: "서울 강남구",
      name: "상록 아트홀",
      hallType: "",
      menuType: "뷔페",
      mealCost: "85,000원",
      capacity: "최대 400명",
      id: "all seoul sall gangnam convention 300 79won sc bf",
    },
    {
      imageSrc: "images/test.jpg",
      location: "서울 강남구",
      name: "발라드지디 수서",
      hallType: "채플",
      menuType: "뷔페",
      mealCost: "85,000원",
      capacity: "최대 400명",
      id: "all chapel",
    },
    {
      imageSrc: "images/test.jpg",
      location: "서울 강남구",
      name: "발라드지디 수서",
      hallType: "채플",
      menuType: "뷔페",
      mealCost: "85,000원",
      capacity: "최대 400명",
      id: "all chapel out seoul",
    },
    {
      imageSrc: "images/test.jpg",
      location: "서울 강남구",
      name: "발라드지디 수서",
      hallType: "채플",
      menuType: "뷔페",
      mealCost: "85,000원",
      capacity: "최대 400명",
      id: "all chapel out",
    },
    {
      imageSrc: "images/test.jpg",
      location: "서울 강남구",
      name: "발라드지디 수서",
      hallType: "채플",
      menuType: "뷔페",
      mealCost: "85,000원",
      capacity: "최대 400명",
      id: "all chapel out",
    },
    {
      imageSrc: "images/test.jpg",
      location: "서울 강남구",
      name: "발라드지디 수서",
      hallType: "채플",
      menuType: "뷔페",
      mealCost: "85,000원",
      capacity: "최대 400명",
      id: "all chapel",
    },
    {
      imageSrc: "images/test.jpg",
      location: "서울 강남구",
      name: "발라드지디 수서",
      hallType: "채플",
      menuType: "뷔페",
      mealCost: "85,000원",
      capacity: "최대 400명",
      id: "all chapel",
    },
    {
      imageSrc: "images/test.jpg",
      location: "서울 강남구",
      name: "발라드지디 수서",
      hallType: "채플",
      menuType: "뷔페",
      mealCost: "85,000원",
      capacity: "최대 400명",
      id: "all chapel",
    },
    {
      imageSrc: "images/test.jpg",
      location: "서울 강남구",
      name: "발라드지디 수서",
      hallType: "채플",
      menuType: "뷔페",
      mealCost: "85,000원",
      capacity: "최대 400명",
      id: "all chapel",
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
