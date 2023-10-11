$(document).ready(function () {
  // 초기 필터값 설정
  var hallFilter = "*"; // 홀 버튼에 대한 필터값
  var locationFilter = "*"; // 지역(시/도) 셀렉트 박스에 대한 필터값
  var guarantorFilter = "*"; // 보증인원 필터값
  var mealRangeFilter = "*"; // 식대 필터값
  var mealMenuFilter = "*"; // 식사메뉴 필터값
  var ceremonyFilter = "*"; // 예식형태 필터값

  // 홀 버튼 클릭 시 필터링
  $(".hall-list button, .hall-list2 button").click(function () {
    $(".hall-list button, .hall-list2 button").removeClass("active");
    $(this).addClass("active");
    var hallSelector = $(this).attr("data-filter");

    // 선택한 홀 종류를 홀 필터에 반영
    hallFilter = hallSelector;

    // 최종 필터값 업데이트
    updateFilter();
  });

  // "지역(시/도)" 셀렉트 박스 변경 이벤트 핸들러
  $("#selcity").change(function () {
    var selectedCity = $(this).val();

    // 선택한 지역(시/도)를 지역(시/도) 필터에 반영
    locationFilter = selectedCity === "all" ? "*" : "." + selectedCity;

    // 최종 필터값 업데이트
    updateFilter();
  });

  // "지역(시군구)" 셀렉트 박스 변경 이벤트 핸들러
  $("#city").change(function () {
    var selectedDistrict = $(this).val();

    // 선택한 지역(시군구)를 지역(시군구) 필터에 반영
    locationFilter = selectedDistrict === "all" ? "*" : "." + selectedDistrict;

    // 최종 필터값 업데이트
    updateFilter();
  });

  // 보증인원 필터링
  $("#guarantors").change(function () {
    var selectedGuarantor = $(this).val(); // 선택된 보증인원 가져오기

    // 선택된 보증인원 값에 따라 필터 적용
    guarantorFilter = "." + selectedGuarantor;

    // 최종 필터값 업데이트
    updateFilter();
  });

  // 식대 필터링
  $("#meals").change(function () {
    var selectedMealRange = $(this).val(); // 선택된 식대 범위 가져오기

    // 선택된 식대 값에 따라 필터 적용
    mealRangeFilter = "." + selectedMealRange;

    // 최종 필터값 업데이트
    updateFilter();
  });

  // "식사메뉴" 필터링
  $("#mealmenu").change(function () {
    var selectedMenu = $(this).val(); // 선택된 식사메뉴 범위 가져오기

    // 선택된 식사메뉴 값에 따라 필터 적용

    mealMenuFilter = "." + selectedMenu;

    // 최종 필터값 업데이트
    updateFilter();
  });

  // 예식형태 필터링
  $("#ceremony").change(function () {
    var selectedCeremony = $(this).val();

    // 선택한 예식 형태를 예식형태 필터에 반영
    ceremonyFilter = "." + selectedCeremony;

    // 최종 필터값 업데이트
    updateFilter();
  });

  // 최종 필터값 업데이트하는 함수
  function updateFilter() {
    // 모든 필터 값을 결합하여 최종 필터값 설정
    var filter =
      hallFilter +
      locationFilter +
      guarantorFilter +
      mealRangeFilter +
      mealMenuFilter +
      ceremonyFilter;

    // 필터링 적용
    filterWeddingHalls(filter);
  }

  // 필터링 함수 정의
  function filterWeddingHalls(filter) {
    $(".mix-wrapper").isotope({
      filter: filter,
    });
  }

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
          '<option value="seoul" data-filter=".sall" >전체</option>' +
          '<option value="gangnam" data-filter=".gangnam" >강남구</option>' +
          '<option value="seocho" data-filter=".seocho">서초</option>' +
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
          '<option value="gyeonggi" data-filter=".gall">전체</option>' +
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
          '<option value="gangwon" data-filter=".gwall">전체</option>';
        break;
      case "gyeongnam":
        cityOptions =
          '<option value="gyeongnam" data-filter=".gnall">전체</option>';
        break;
      case "gwangju":
        cityOptions =
          '<option value="gwangju" data-filter=".gjall">전체</option>';
        break;
      case "daejeon":
        cityOptions =
          '<option value="daejeon" data-filter=".djall">전체</option>';
        break;
      case "daegu":
        cityOptions =
          '<option value="daegu" data-filter=".dgall">전체</option>';
        break;
      case "busan":
        cityOptions =
          '<option value="busan" data-filter=".bsall">전체</option>';
        break;
      case "ulsan":
        cityOptions =
          '<option value="ulsan" data-filter=".usall">전체</option>';
        break;
      case "incheon":
        cityOptions =
          '<option value="incheon" data-filter=".icall">전체</option>';
        break;
      case "jeonbuk":
        cityOptions =
          '<option value="jeonbuk" data-filter=".jball">전체</option>';
        break;
      case "chungnam":
        cityOptions =
          '<option value="chungnam" data-filter=".cnall">전체</option>';
        break;
      case "chungbuk":
        cityOptions =
          '<option value="chungbuk" data-filter=".cball">전체</option>';
        break;
      case "jeju":
        cityOptions = '<option value="jeju" data-filter=".jjall">전체</option>';
        break;
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
      hallType: "컨벤션",
      menuType: "뷔페",
      mealCost: "78,000원",
      capacity: "최대 400명",
      id: "all seoul sall gangnam convention 300 79won sc bf",
    },
    {
      imageSrc: "images/wd3.jpg",
      location: "서울 강남구",
      name: "소노펠리체컨벤션",
      hallType: "컨벤션",
      menuType: "뷔페",
      mealCost: "95,000원",
      capacity: "최대 700명",
      id: "all seoul sall gangnam convention 300 99won wt sc",
    },
    {
      imageSrc: "images/wd4.jpg",
      location: "서울 강남구",
      name: "그랜드힐컨벤션",
      hallType: "컨벤션",
      menuType: "양식,퓨전",
      mealCost: "120,000원",
      capacity: "최대 660명",
      id: "all seoul sall gangnam convention 300 100won mc wt fs",
    },
    {
      imageSrc: "images/wd5.jpg",
      location: "서울 강남구",
      name: "토브헤세드",
      hallType: "야외/하우스",
      menuType: "뷔페",
      mealCost: "78,000원",
      capacity: "최대 300명",
      id: "all seoul sall gangnam out 200 79won sc bf",
    },
    {
      imageSrc: "images/wd6.jpg",
      location: "서울 강남구",
      name: "엘리에나호텔",
      hallType: "호텔",
      menuType: "양식",
      mealCost: "137,000원",
      capacity: "최대 650명",
      id: "all seoul sall gangnam hotel 100won 300 mc wt",
    },
    {
      imageSrc: "images/wd7.jpg",
      location: "서울 강남구",
      name: "발라드지디 청담",
      hallType: "일반",
      menuType: "양식",
      mealCost: "198,000원",
      capacity: "최대 380명",
      id: "all seoul sall gangnam nomal 100won 300 mc wt ",
    },
    {
      imageSrc: "images/wd8.jpg",
      location: "서울 강남구",
      name: "더베일리하우스 삼성점",
      hallType: "일반,채플",
      menuType: "뷔페",
      mealCost: "77,000원",
      capacity: "최대 500명",
      id: "all seoul sall gangnam nomal chapel 300 79won sc bf",
    },
    {
      imageSrc: "images/wd9.jpg",
      location: "서울 강남구",
      name: "라비돌웨딩강남",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "60,000원",
      capacity: "최대 1500명",
      id: "all seoul sall gangnam nomal bf 300 79won sc",
    },
    {
      imageSrc: "images/wd10.jpg",
      location: "서울 강남구",
      name: "노블발렌티_대치점",
      hallType: "일반,채플",
      menuType: "뷔페",
      mealCost: "80,000원",
      capacity: "최대 600명",
      id: "all seoul sall gangnam nomal chapel bf 300 99won sc",
    },
    {
      imageSrc: "images/wd11.jpg",
      location: "서울 영등포구",
      name: "더파티움 여의도",
      hallType: "일반,컨벤션",
      menuType: "한식,뷔페",
      mealCost: "79,000원",
      capacity: "최대 700명",
      id: "all seoul sall sindorim nomal convention bf ko sc 300 79won",
    },
    {
      imageSrc: "images/wd12.jpg",
      location: "서울 영등포구",
      name: "JK아트컨벤션",
      hallType: "일반,채플",
      menuType: "뷔페",
      mealCost: "80,000원",
      capacity: "최대 600명",
      id: "all seoul sall sindorim nomal chapel bf 300 79won sc",
    },
    {
      imageSrc: "images/wd13.jpg",
      location: "서울 영등포구",
      name: "루나미엘레",
      hallType: "일반,채플",
      menuType: "뷔페",
      mealCost: "80,000원",
      capacity: "최대 400명",
      id: "all seoul sall sindorim nomal chapel bf 300 99won mc",
    },
    {
      imageSrc: "images/wd14.jpg",
      location: "서울 영등포구",
      name: "그랜드컨벤션센터",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "66,000원",
      capacity: "최대 1200명",
      id: "all seoul sall sindorim nomal bf 300 79won sc",
    },
    {
      imageSrc: "images/wd15.jpg",
      location: "서울 영등포구",
      name: "63컨벤션센터",
      hallType: "컨벤션",
      menuType: "한식,양식",
      mealCost: "175,000원",
      capacity: "최대 800명",
      id: "all seoul sall sindorim convention ko wt 300 100won mc",
    },
    {
      imageSrc: "images/wd16.jpg",
      location: "서울 서초구",
      name: "더리버사이드호텔",
      hallType: "호텔,컨벤션",
      menuType: "뷔페",
      mealCost: "85,000원",
      capacity: "최대 650명",
      id: "all seoul sall seocho hotel convention bf 300 79won sc",
    },
    {
      imageSrc: "images/wd17.jpg",
      location: "서울 서초구",
      name: "더화이트베일",
      hallType: "일반,컨벤션",
      menuType: "한식",
      mealCost: "75,000원",
      capacity: "최대 950명",
      id: "all seoul sall seocho nomal convention ko 300 79won sc",
    },
    {
      imageSrc: "images/wd18.jpg",
      location: "서울 서초구",
      name: "ELTOWER(엘타워)",
      hallType: "컨벤션",
      menuType: "한식,양식",
      mealCost: "110,000원",
      capacity: "최대 780명",
      id: "all seoul sall seocho convention ko wt 300 100won mc",
    },
    {
      imageSrc: "images/wd19.jpg",
      location: "서울 서초구",
      name: "플로팅아일랜드",
      hallType: "일반,야외/하우스",
      menuType: "양식",
      mealCost: "85,000원",
      capacity: "최소 150명",
      id: "all seoul sall seocho nomal out wt 100 99won mc",
    },
    {
      imageSrc: "images/wd20.jpg",
      location: "서울 서초구",
      name: "아펠가모_반포점",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "75,000원",
      capacity: "최소 250명",
      id: "all seoul sall seocho nomal bf 100 79won sc",
    },
    {
      imageSrc: "images/wd21.jpg",
      location: "서울 강서구",
      name: "보타닉파크웨딩",
      hallType: "일반,야외/하우스,채플,컨벤션",
      menuType: "뷔페",
      mealCost: "70,000원",
      capacity: "최소 250명",
      id: "all seoul sall gangseo nomal out chapel convention bf 200 79won sc",
    },
    {
      imageSrc: "images/wd22.jpg",
      location: "서울 강서구",
      name: "더뉴컨벤션웨딩",
      hallType: "일반,컨벤션",
      menuType: "뷔페",
      mealCost: "67,000원",
      capacity: "최소 250명",
      id: "all seoul sall gangseo nomal bf 200 79won sc",
    },
    {
      imageSrc: "images/wd23.jpg",
      location: "서울 강서구",
      name: "더베뉴지서울",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "65,000원",
      capacity: "최소 200명",
      id: "all seoul sall gangseo nomal bf 200 79won sc",
    },
    {
      imageSrc: "images/wd24.jpg",
      location: "서울 강서구",
      name: "메이필드호텔",
      hallType: "호텔",
      menuType: "한식,양식",
      mealCost: "110,000원",
      capacity: "최소 250명",
      id: "all seoul sall gangseo hotel ko wt 200 100won mc",
    },
    {
      imageSrc: "images/wd25.jpg",
      location: "서울 강서구",
      name: "코트야드메리어트서울보타닉파크",
      hallType: "야외/하우스,채플,호텔",
      menuType: "뷔페",
      mealCost: "100,000원",
      capacity: "최소 80명",
      id: "all seoul sall gangseo out chapel hotel bf 50 100won sc",
    },
    {
      imageSrc: "images/wd26.jpg",
      location: "서울 송파구",
      name: "더컨벤션_잠실점(교통회관)",
      hallType: "일반,컨벤션",
      menuType: "뷔페",
      mealCost: "73,000원",
      capacity: "최소 300명",
      id: "all seoul sall songpa nomal convention bf 300 79won sc",
    },
    {
      imageSrc: "images/wd27.jpg",
      location: "서울 송파구",
      name: "롯데호텔월드(잠실)",
      hallType: "호텔",
      menuType: "양식",
      mealCost: "105,000원",
      capacity: "최소 150명",
      id: "all seoul sall songpa hotel bf 100 100won mc",
    },
    {
      imageSrc: "images/wd28.jpg",
      location: "서울 송파구",
      name: "서울웨딩타워",
      hallType: "일반",
      menuType: "퓨전",
      mealCost: "80,000원",
      capacity: "최소 350명",
      id: "all seoul sall songpa nomal fs 300 79won sc",
    },
    {
      imageSrc: "images/wd29.jpg",
      location: "서울 송파구",
      name: "더컨벤션_송파문정점",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "80,000원",
      capacity: "최소 350명",
      id: "all seoul sall songpa nomal bf 300 79won sc",
    },
    {
      imageSrc: "images/wd30.jpg",
      location: "서울 송파구",
      name: "아펠가모_잠실점",
      hallType: "일반,컨벤션",
      menuType: "뷔페",
      mealCost: "75,000원",
      capacity: "최소 300명",
      id: "all seoul sall songpa nomal convention bf 300 79won sc",
    },
    {
      imageSrc: "images/wd31.jpg",
      location: "서울 마포구",
      name: "웨딩시그니처",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "67,000원",
      capacity: "최소 250명",
      id: "all seoul sall mapo nomal bf 200 79won sc",
    },
    {
      imageSrc: "images/wd32.jpg",
      location: "서울 마포구",
      name: "아펠가모_공덕점",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "75,000원",
      capacity: "최소 300명",
      id: "all seoul sall mapo nomal bf 300 79won sc",
    },
    {
      imageSrc: "images/wd33.jpg",
      location: "서울 마포구",
      name: "DMC타워웨딩",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "65,000원",
      capacity: "최소 300명",
      id: "all seoul sall mapo nomal bf 300 79won sc",
    },
    {
      imageSrc: "images/wd34.jpg",
      location: "서울 마포구",
      name: "아만티호텔",
      hallType: "일반,채플,호텔,컨벤션",
      menuType: "뷔페",
      mealCost: "77,000원",
      capacity: "최소 300명",
      id: "all seoul sall mapo nomal chapel hotel convention bf 300 79won sc",
    },
    {
      imageSrc: "images/wd35.jpg",
      location: "서울 마포구",
      name: "서울가든호텔",
      hallType: "일반,호텔",
      menuType: "양식,중식",
      mealCost: "77,000원",
      capacity: "최소 200명",
      id: "all seoul sall mapo nomal hotel wt ch 200 79won mc",
    },
    {
      imageSrc: "images/wd36.jpg",
      location: "서울 강동구",
      name: "루벨 강동점",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "71,000원",
      capacity: "최소 250명",
      id: "all seoul sall gangdong nomal bf 200 79won sc",
    },
    {
      imageSrc: "images/wd37.jpg",
      location: "서울 강동구",
      name: "스테이지28",
      hallType: "야외/하우스",
      menuType: "뷔페",
      mealCost: "77,000원",
      capacity: "최소 150명",
      id: "all seoul sall gangdong out bf 100 79won sc mc",
    },
    {
      imageSrc: "images/wd38.jpg",
      location: "서울 강동구",
      name: "강동웨딩KDW",
      hallType: "일반",
      menuType: "양식,중식",
      mealCost: "66,000원",
      capacity: "최소 250명",
      id: "all seoul sall gangdong nomal bf 200 79won sc",
    },
    {
      imageSrc: "images/wd39.jpg",
      location: "서울 성동구",
      name: "보테가마지오",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "85,000원",
      capacity: "최소 300명",
      id: "all seoul sall seongdong nomal bf 300 79won sc",
    },
    {
      imageSrc: "images/wd40.jpg",
      location: "서울 성동구",
      name: "디노체컨벤션",
      hallType: "일반",
      menuType: "한식",
      mealCost: "60,000원",
      capacity: "최소 300명",
      id: "all seoul sall seongdong nomal ko 300 79won sc",
    },
    {
      imageSrc: "images/wd41.jpg",
      location: "서울 성동구",
      name: "레노스블랑쉬",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "48,000원",
      capacity: "최소 200명",
      id: "all seoul sall seongdong nomal bf 200 49won sc",
    },
    {
      imageSrc: "images/wd42.jpg",
      location: "서울 성동구",
      name: "H스퀘어",
      hallType: "일반",
      menuType: "한식",
      mealCost: "61,000원",
      capacity: "최소 200명",
      id: "all seoul sall seongdong nomal ko 200 79won sc",
    },
    {
      imageSrc: "images/wd43.jpg",
      location: "서울 중구",
      name: "PJ호텔",
      hallType: "야외/하우스,호텔",
      menuType: "뷔페",
      mealCost: "72,000원",
      capacity: "최소 200명",
      id: "all seoul sall junggu out hotel bf 200 79won sc",
    },
    {
      imageSrc: "images/wd44.jpg",
      location: "서울 중구",
      name: "명동라루체",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "77,000원",
      capacity: "최소 250명",
      id: "all seoul sall junggu nomal ko 200 79won sc",
    },
    {
      imageSrc: "images/wd45.jpg",
      location: "서울 중구",
      name: "라비두스",
      hallType: "야외/하우스,컨벤션",
      menuType: "한식,양식",
      mealCost: "88,000원",
      capacity: "최소 100명",
      id: "all seoul sall junggu out convention ko 100 79won mc",
    },
    {
      imageSrc: "images/wd46.jpg",
      location: "서울 중구",
      name: "아벤티움",
      hallType: "일반,채플,컨벤션",
      menuType: "뷔페",
      mealCost: "65,000원",
      capacity: "최소 250명",
      id: "all seoul sall junggu nomal chapel convention bf 200 79won sc",
    },
    {
      imageSrc: "images/wd47.jpg",
      location: "서울 중구",
      name: "웨스턴조선호텔",
      hallType: "호텔",
      menuType: "양식,중식,퓨전",
      mealCost: "150,000원",
      capacity: "최소 300명",
      id: "all seoul sall junggu hotel wt ch fs 300 100won mc",
    },
    {
      imageSrc: "images/wd48.jpg",
      location: "서울 관악구",
      name: "이라운지 서울대점",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "51,000원",
      capacity: "최소 300명",
      id: "all seoul sall gwanak nomal bf 300 59won sc mc",
    },
    {
      imageSrc: "images/wd49.jpg",
      location: "서울 관악구",
      name: "서울대교수회관",
      hallType: "일반",
      menuType: "한식",
      mealCost: "55,000원",
      capacity: "최소 250명",
      id: "all seoul sall gwanak nomal ko 200 59won sc",
    },
    {
      imageSrc: "images/wd50.jpg",
      location: "서울 관악구",
      name: "낙성대공원전통혼례식장",
      hallType: "야외/하우스",
      menuType: "양식,중식,퓨전",
      mealCost: "45,000원",
      capacity: "최소 100명",
      id: "all seoul sall gwanak out bf 100 49won mc",
    },
    {
      imageSrc: "images/wd51.jpg",
      location: "서울 성북구",
      name: "르한스",
      hallType: "야외/하우스",
      menuType: "뷔페",
      mealCost: "77,000원",
      capacity: "최소 150명",
      id: "all seoul sall seongbuk out bf 100 79won sc mc",
    },
    {
      imageSrc: "images/wd52.jpg",
      location: "서울 성북구",
      name: "에디스웨딩하우스",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "50,000원",
      capacity: "최소 150명",
      id: "all seoul sall seongbuk nomal bf 100 59won sc",
    },
    {
      imageSrc: "images/wd53.jpg",
      location: "서울 성북구",
      name: "웨딩스퀘어",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "55,000원",
      capacity: "최소 150명",
      id: "all seoul sall seongbuk nomal bf 200 59won sc",
    },
    {
      imageSrc: "images/wd54.jpg",
      location: "서울 성북구",
      name: "고려스퀘어",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "47,000원",
      capacity: "최소 200명",
      id: "all seoul sall seongbuk nomal bf 200 49won sc",
    },
    {
      imageSrc: "images/wd55.jpg",
      location: "서울 성북구",
      name: "아리랑힐호텔동대문",
      hallType: "야외/하우스,호텔",
      menuType: "뷔페,한식,양식",
      mealCost: "49,000원",
      capacity: "최소 20명",
      id: "all seoul sall seongbuk out hotel bf 0 49won sc mc",
    },
    {
      imageSrc: "images/wd56.jpg",
      location: "서울 성북구",
      name: "파라스파라호텔",
      hallType: "호텔",
      menuType: "한식,양식",
      mealCost: "90,000원",
      capacity: "최소 200명",
      id: "all seoul sall seongbuk hotel bf 200 99won mc",
    },
    {
      imageSrc: "images/wd57.jpg",
      location: "서울 성북구",
      name: "더빅토리아웨딩파티",
      hallType: "일반,호텔",
      menuType: "뷔페",
      mealCost: "58,000원",
      capacity: "최소 200명",
      id: "all seoul sall seongbuk nomal hotel bf 0 59won sc",
    },
    {
      imageSrc: "images/wd58.jpg",
      location: "서울 성북구",
      name: "선운각",
      hallType: "야외/하우스",
      menuType: "뷔페,한식,양식",
      mealCost: "77,000원",
      capacity: "최소 100명",
      id: "all seoul sall seongbuk out bf 100 79won sc mc",
    },
    {
      imageSrc: "images/wd59.jpg",
      location: "경기 성남시",
      name: "분당앤스퀘어",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "55,000원",
      capacity: "최소 150명",
      id: "all gyeonggi gall seongnam nomal bf 100 59won sc",
    },
    {
      imageSrc: "images/wd60.jpg",
      location: "경기 성남시",
      name: "라온제나분당",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "62,000원",
      capacity: "최소 250명",
      id: "all gyeonggi gall seongnam nomal bf 200 79won sc",
    },
    {
      imageSrc: "images/wd61.jpg",
      location: "경기 성남시",
      name: "W스퀘어컨벤션",
      hallType: "일반,야외/하우스",
      menuType: "뷔페",
      mealCost: "65,000원",
      capacity: "최소 150명",
      id: "all gyeonggi gall seongnam nomal out bf 100 79won sc",
    },
    {
      imageSrc: "images/wd62.jpg",
      location: "경기 성남시",
      name: "밀리토피아호텔",
      hallType: "일반,호텔",
      menuType: "양식,퓨전",
      mealCost: "66,000원",
      capacity: "최소 250명",
      id: "all gyeonggi gall seongnam nomal hotel bf 200 79won sc mc",
    },
    {
      imageSrc: "images/wd63.jpg",
      location: "경기 성남시",
      name: "가천컨벤션센터",
      hallType: "일반",
      menuType: "퓨전",
      mealCost: "69,000원",
      capacity: "최소 300명",
      id: "all gyeonggi gall seongnam nomal fs 300 79won sc mc",
    },
    {
      imageSrc: "images/wd64.jpg",
      location: "경기 수원시",
      name: "수원노블레스웨딩컨벤션",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "62,000원",
      capacity: "최소 300명",
      id: "all gyeonggi gall suwon nomal bf 300 79won sc",
    },
    {
      imageSrc: "images/wd65.jpg",
      location: "경기 수원시",
      name: "수원호텔리츠컨벤션",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "64,000원",
      capacity: "최소 150명",
      id: "all gyeonggi gall suwon nomal bf 100 79won sc",
    },
    {
      imageSrc: "images/wd66.jpg",
      location: "경기 수원시",
      name: "호텔앙코르이비스앰배서더",
      hallType: "호텔",
      menuType: "뷔페",
      mealCost: "79,000원",
      capacity: "최소 300명",
      id: "all gyeonggi gall suwon hotel bf 300 79won sc",
    },
    {
      imageSrc: "images/wd67.jpg",
      location: "경기 수원시",
      name: "수원더아리엘",
      hallType: "일반,야외/하우스",
      menuType: "뷔페",
      mealCost: "60,000원",
      capacity: "최소 250명",
      id: "all gyeonggi gall suwon nomal out bf 200 79won sc",
    },
    {
      imageSrc: "images/wd68.jpg",
      location: "경기 수원시",
      name: "라마다프라자수원호텔",
      hallType: "호텔",
      menuType: "한식,양식",
      mealCost: "68,000원",
      capacity: "최소 250명",
      id: "all gyeonggi gall suwon hotel ko wt 200 79won mc",
    },
    {
      imageSrc: "images/wd69.jpg",
      location: "경기 용인시",
      name: "벨라마리에",
      hallType: "일반,야외/하우스",
      menuType: "뷔페,양식",
      mealCost: "68,000원",
      capacity: "최소 50명",
      id: "all gyeonggi gall yongin nomal out wt bf 50 79won sc mc",
    },
    {
      imageSrc: "images/wd70.jpg",
      location: "경기 용인시",
      name: "용인아이티컨벤션",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "56,000원",
      capacity: "최소 250명",
      id: "all gyeonggi gall yongin nomal bf 200 59won sc",
    },
    {
      imageSrc: "images/wd71.jpg",
      location: "경기 용인시",
      name: "라비다하우스",
      hallType: "일반,야외/하우스",
      menuType: "뷔페",
      mealCost: "60,000원",
      capacity: "최소 50명",
      id: "all gyeonggi gall yongin nomal out bf 50 79won sc mc",
    },
    {
      imageSrc: "images/wd72.jpg",
      location: "경기 용인시",
      name: "페이지웨딩&파티",
      hallType: "야외/하우스",
      menuType: "뷔페",
      mealCost: "60,000원",
      capacity: "최소 100명",
      id: "all gyeonggi gall yongin out bf 100 79won sc",
    },
    {
      imageSrc: "images/wd73.jpg",
      location: "경기 용인시",
      name: "ICT밸리컨벤션",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "58,000원",
      capacity: "최소 300명",
      id: "all gyeonggi gall yongin nomal bf 300 59won sc",
    },
    {
      imageSrc: "images/wd74.jpg",
      location: "경기 안양시",
      name: "안양더그레이스켈리",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "55,000원",
      capacity: "최소 300명",
      id: "all gyeonggi gall anyang nomal bf 300 59won mc sc",
    },
    {
      imageSrc: "images/wd75.jpg",
      location: "경기 안양시",
      name: "안양트리니티컨벤션",
      hallType: "야외/하우스",
      menuType: "뷔페",
      mealCost: "67,000원",
      capacity: "최소 150명",
      id: "all gyeonggi gall anyang out bf 100 79won sc",
    },
    {
      imageSrc: "images/wd76.jpg",
      location: "경기 안양시",
      name: "아르떼채플&컨벤션",
      hallType: "일반",
      menuType: "한식",
      mealCost: "53,000원",
      capacity: "최소 200명",
      id: "all gyeonggi gall anyang nomal ko 200 59won sc",
    },
    {
      imageSrc: "images/wd77.jpg",
      location: "경기 안양시",
      name: "웨딩그룹위더스",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "68,000원",
      capacity: "최소 300명",
      id: "all gyeonggi gall anyang nomal bf 300 79won sc",
    },
    {
      imageSrc: "images/wd78.jpg",
      location: "경기 안양시",
      name: "파티오벨라",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "66,000원",
      capacity: "최소 250명",
      id: "all gyeonggi gall anyang nomal bf 200 79won sc",
    },
    {
      imageSrc: "images/wd79.jpg",
      location: "경기 안산시",
      name: "안산AW컨벤션",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "62,000원",
      capacity: "최소 250명",
      id: "all gyeonggi gall ansan nomal bf 200 79won sc",
    },
    {
      imageSrc: "images/wd80.jpg",
      location: "경기 안산시",
      name: "발라드지디 안산",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "62,000원",
      capacity: "최소 250명",
      id: "all gyeonggi gall ansan nomal bf 200 79won sc",
    },
    {
      imageSrc: "images/wd81.jpg",
      location: "경기 안산시",
      name: "더파티움 안산",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "60,000원",
      capacity: "최소 200명",
      id: "all gyeonggi gall ansan nomal bf 200 79won sc",
    },
    {
      imageSrc: "images/wd82.jpg",
      location: "경기 안산시",
      name: "안산더루체웨딩홀",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "57,000원",
      capacity: "최소 200명",
      id: "all gyeonggi gall ansan nomal bf 200 59won sc",
    },
    {
      imageSrc: "images/wd83.jpg",
      location: "경기 안산시",
      name: "호텔스퀘어안산",
      hallType: "호텔,컨벤션",
      menuType: "뷔페",
      mealCost: "62,000원",
      capacity: "최소 150명",
      id: "all gyeonggi gall ansan nomal bf 100 79won mc sc",
    },
    {
      imageSrc: "images/wd84.jpg",
      location: "경기 부천시",
      name: "부천MJ컨벤션",
      hallType: "호텔,컨벤션",
      menuType: "뷔페",
      mealCost: "58,000원",
      capacity: "최소 300명",
      id: "all gyeonggi gall bucheon nomal bf 300 59won sc",
    },
    {
      imageSrc: "images/wd85.jpg",
      location: "경기 부천시",
      name: "부천라비에벨",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "68,000원",
      capacity: "최소 200명",
      id: "all gyeonggi gall bucheon nomal bf 200 79won sc",
    },
    {
      imageSrc: "images/wd86.jpg",
      location: "경기 부천시",
      name: "부천소풍컨벤션웨딩뷔페",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "59,000원",
      capacity: "최소 300명",
      id: "all gyeonggi gall bucheon nomal bf 300 59won sc",
    },
    {
      imageSrc: "images/wd87.jpg",
      location: "경기 부천시",
      name: "부천채림웨딩홀",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "52,000원",
      capacity: "최소 200명",
      id: "all gyeonggi gall bucheon nomal bf 200 59won sc",
    },
    {
      imageSrc: "images/wd88.jpg",
      location: "경기 부천시",
      name: "부천고려호텔",
      hallType: "호텔",
      menuType: "뷔페",
      mealCost: "55,000원",
      capacity: "최소 100명",
      id: "all gyeonggi gall bucheon hotel bf 100 59won mc sc",
    },
    {
      imageSrc: "images/wd89.jpg",
      location: "경기 일산시",
      name: "소노캄",
      hallType: "일반,호텔",
      menuType: "양식,퓨전",
      mealCost: "80,000원",
      capacity: "최소 200명",
      id: "all gyeonggi gall ilsan nomal hotel wt fs 200 99won mc",
    },
    {
      imageSrc: "images/wd90.jpg",
      location: "경기 일산시",
      name: "일산더테라스웨딩앤파티",
      hallType: "호텔",
      menuType: "뷔페",
      mealCost: "52,000원",
      capacity: "최소 100명",
      id: "all gyeonggi gall ilsan nomal bf 100 59won mc sc",
    },
    {
      imageSrc: "images/wd91.jpg",
      location: "경기 일산시",
      name: "킨텍스신세계그래머시",
      hallType: "일반,컨벤션",
      menuType: "양식",
      mealCost: "69,000원",
      capacity: "최소 200명",
      id: "all gyeonggi gall ilsan nomal convention wt 200 79won mc",
    },
    {
      imageSrc: "images/wd92.jpg",
      location: "경기 일산시",
      name: "일산웨스턴빌리프",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "55,000원",
      capacity: "최소 250명",
      id: "all gyeonggi gall ilsan nomal bf 200 59won sc",
    },
    {
      imageSrc: "images/wd93.jpg",
      location: "경기 일산시",
      name: "엠시티웨딩컨벤션",
      hallType: "일반",
      menuType: "한식",
      mealCost: "50,000원",
      capacity: "최소 200명",
      id: "all gyeonggi gall ilsan nomal ko 200 59won sc",
    },
    {
      imageSrc: "images/wd94.jpg",
      location: "경기 평택시",
      name: "평택SG웨딩컨벤션",
      hallType: "일반,야외/하우스",
      menuType: "뷔페",
      mealCost: "45,000원",
      capacity: "최소 250명",
      id: "all gyeonggi gall pyeongtaek nomal out bf 200 49won sc",
    },
    {
      imageSrc: "images/wd95.jpg",
      location: "경기 평택시",
      name: "평택T웨딩홀",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "50,000원",
      capacity: "최소 200명",
      id: "all gyeonggi gall pyeongtaek nomal bf 200 59won sc",
    },
    {
      imageSrc: "images/wd96.jpg",
      location: "경기 평택시",
      name: "평택웨딩아티움",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "48,000원",
      capacity: "최소 200명",
      id: "all gyeonggi gall pyeongtaek nomal bf 200 49won sc",
    },
    {
      imageSrc: "images/wd97.jpg",
      location: "경기 평택시",
      name: "평택드마레컨벤션",
      hallType: "야외/하우스,컨벤션",
      menuType: "뷔페",
      mealCost: "45,000원",
      capacity: "최소 200명",
      id: "all gyeonggi gall pyeongtaek out convention bf 200 49won sc",
    },
    {
      imageSrc: "images/wd98.jpg",
      location: "경기 평택시",
      name: "평택국제대학교웨딩컨벤션",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "45,000원",
      capacity: "최소 150명",
      id: "all gyeonggi gall pyeongtaek nomal bf 100 49won sc",
    },
    {
      imageSrc: "images/wd99.jpg",
      location: "경기 의정부시",
      name: "웨딩더낙원",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "60,000원",
      capacity: "최소 300명",
      id: "all gyeonggi gall uijeongbu nomal bf 300 79won sc",
    },
    {
      imageSrc: "images/wd100.jpg",
      location: "경기 의정부시",
      name: "경민컨벤션웨딩홀",
      hallType: "일반,컨벤션",
      menuType: "뷔페",
      mealCost: "66,000원",
      capacity: "최소 300명",
      id: "all gyeonggi gall uijeongbu nomal convention bf 300 79won sc",
    },
    {
      imageSrc: "images/wd101.jpg",
      location: "경기 의정부시",
      name: "의정부웨딩펠리스",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "60,000원",
      capacity: "최소 500명",
      id: "all gyeonggi gall uijeongbu nomal bf 500 79won sc",
    },
    {
      imageSrc: "images/wd102.jpg",
      location: "경기 의정부시",
      name: "의정부신한컨벤션웨딩홀",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "50,000원",
      capacity: "최소 200명",
      id: "all gyeonggi gall uijeongbu nomal bf 200 59won sc",
    },
    {
      imageSrc: "images/wd103.jpg",
      location: "경기 의정부시",
      name: "플로렌스의정부점",
      hallType: "야외/하우스",
      menuType: "뷔페",
      mealCost: "35,000원",
      capacity: "최소 30명",
      id: "all gyeonggi gall uijeongbu out bf 0 39won mc",
    },
    {
      imageSrc: "images/wd104.jpg",
      location: "강원 원주시",
      name: "빌라드아모르 원주",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "45,000원",
      capacity: "최소 200명",
      id: "all gyeonggi gwall  nomal bf 200 49won sc",
    },
    {
      imageSrc: "images/wd105.jpg",
      location: "강원 원주시",
      name: "오크밸리",
      hallType: "야외/하우스",
      menuType: "뷔페",
      mealCost: "55,000원",
      capacity: "최소 300명",
      id: "all gangwon gwall out bf 300 59won mc",
    },
    {
      imageSrc: "images/wd106.jpg",
      location: "강원 강릉시",
      name: "플로렌스의정부점",
      hallType: "컨벤션",
      menuType: "뷔페",
      mealCost: "45,000원",
      capacity: "최소 200명",
      id: "all gangwon gwall convention bf 200 49won sc",
    },
    {
      imageSrc: "images/wd107.jpg",
      location: "강원 춘천시",
      name: "춘천미래컨벤션웨딩홀",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "45,000원",
      capacity: "최소 200명",
      id: "all gangwon gwall nomal bf 200 49won sc",
    },
    {
      imageSrc: "images/wd108.jpg",
      location: "강원 평창군",
      name: "평창알펜시아리조트",
      hallType: "야외/하우스,컨벤션",
      menuType: "뷔페,한식,양식",
      mealCost: "45,000원",
      capacity: "최소 50명",
      id: "all gangwon gwall out convention bf ko wt 50 49won sc mc",
    },
    {
      imageSrc: "images/wd109.jpg",
      location: "경남 김해시",
      name: "김해아이스퀘어호텔",
      hallType: "일반,호텔",
      menuType: "뷔페",
      mealCost: "43,000원",
      capacity: "최소 200명",
      id: "all gyeongnam gnall nomal hotel bf 200 49won sc",
    },
    {
      imageSrc: "images/wd110.jpg",
      location: "경남 창원시",
      name: "창원리베라컨벤션",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "42,000원",
      capacity: "최소 250명",
      id: "all gyeongnam gnall nomal bf 200 49won sc",
    },
    {
      imageSrc: "images/wd111.jpg",
      location: "경남 창원시",
      name: "마산유로웨딩홀",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "38,000원",
      capacity: "최소 80명",
      id: "all gyeongnam gnall nomal bf 50 39won sc",
    },
    {
      imageSrc: "images/wd112.jpg",
      location: "경남 양산시",
      name: "W웨딩양산점",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "38,000원",
      capacity: "최소 150명",
      id: "all gyeongnam gnall nomal bf 100 39won sc",
    },
    {
      imageSrc: "images/wd113.jpg",
      location: "경남 거제시",
      name: "거제리베라호텔웨딩홀",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "45,000원",
      capacity: "최소 200명",
      id: "all gyeongnam gnall nomal bf 200 49won mc",
    },
    {
      imageSrc: "images/wd114.jpg",
      location: "광주 광산구",
      name: "광주드메르웨딩홀",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "55,000원",
      capacity: "최소 200명",
      id: "all gwangju gjall nomal bf 200 59won sc",
    },
    {
      imageSrc: "images/wd115.jpg",
      location: "광주 서구",
      name: "웨딩그룹위더스광주",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "55,000원",
      capacity: "최소 300명",
      id: "all gwangju gjall nomal bf 300 59won sc",
    },
    {
      imageSrc: "images/wd116.jpg",
      location: "광주 북구",
      name: "광주까사디루체",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "51,000원",
      capacity: "최소 300명",
      id: "all gwangju gjall nomal bf 300 59won sc",
    },
    {
      imageSrc: "images/wd117.jpg",
      location: "광주 서구",
      name: "광주웨딩시대",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "55,000원",
      capacity: "최소 250명",
      id: "all gwangju gjall nomal bf 200 59won sc",
    },
    {
      imageSrc: "images/wd118.jpg",
      location: "광주 광산구",
      name: "광주무역센터웨딩홀",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "30,000원",
      capacity: "최소 200명",
      id: "all gwangju gjall nomal bf 300 39won sc",
    },
    {
      imageSrc: "images/wd119.jpg",
      location: "대전 유성구",
      name: "대전호텔ICC",
      hallType: "일반,호텔",
      menuType: "뷔페",
      mealCost: "50,000원",
      capacity: "최소 400명",
      id: "all daejeon djall nomal bf hotel 400 59won sc",
    },
    {
      imageSrc: "images/wd120.jpg",
      location: "대전 중구",
      name: "대전BMK컨벤션",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "53,000원",
      capacity: "최소 300명",
      id: "all daejeon djall nomal bf 300 59won sc",
    },
    {
      imageSrc: "images/wd121.jpg",
      location: "대전 유성구",
      name: "루이비스컨벤션",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "56,000원",
      capacity: "최소 300명",
      id: "all daejeon djall nomal bf 300 59won sc",
    },
    {
      imageSrc: "images/wd122.jpg",
      location: "대전 서구",
      name: "대전S가든웨딩홀",
      hallType: "야외/하우스",
      menuType: "뷔페",
      mealCost: "52,000원",
      capacity: "최소 200명",
      id: "all daejeon djall out bf 200 59won sc",
    },
    {
      imageSrc: "images/wd123.jpg",
      location: "대전 동구",
      name: "대전쌍청웨딩홀",
      hallType: "야외/하우스",
      menuType: "뷔페",
      mealCost: "40,000원",
      capacity: "최소 100명",
      id: "all daejeon djall out bf 100 49won sc",
    },
    {
      imageSrc: "images/wd124.jpg",
      location: "대구 동구",
      name: "대구MH웨딩홀",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "48,000원",
      capacity: "최소 200명",
      id: "all daegu dgall nomal bf 200 49won sc",
    },
    {
      imageSrc: "images/wd125.jpg",
      location: "대구 수성구",
      name: "대구라온제나호텔",
      hallType: "호텔",
      menuType: "뷔페",
      mealCost: "45,000원",
      capacity: "최소 200명",
      id: "all daegu dgall hotel bf 200 49won sc",
    },
    {
      imageSrc: "images/wd126.jpg",
      location: "대구 달서구",
      name: "대구웨딩비엔나",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "42,000원",
      capacity: "최소 200명",
      id: "all daegu dgall nomal bf 200 49won sc",
    },
    {
      imageSrc: "images/wd127.jpg",
      location: "대구 북구",
      name: "대구엘파소하우스웨딩",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "45,000원",
      capacity: "최소 200명",
      id: "all daegu dgall nomal bf 200 49won sc",
    },
    {
      imageSrc: "images/wd128.jpg",
      location: "대구 중구",
      name: "노보텔앰배서더대구",
      hallType: "일반",
      menuType: "뷔페,양식",
      mealCost: "42,000원",
      capacity: "최소 200명",
      id: "all daegu dgall nomal bf wt 200 49won mc",
    },
    {
      imageSrc: "images/wd129.jpg",
      location: "부산 해운대구",
      name: "부산파라다이스호텔",
      hallType: "일반,호텔",
      menuType: "양식",
      mealCost: "110,000원",
      capacity: "최소 200명",
      id: "all busan bsall nomal hotel wt 200 100won mc",
    },
    {
      imageSrc: "images/wd130.jpg",
      location: "부산 부산진구",
      name: "부산W웨딩시티",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "38,000원",
      capacity: "최소 100명",
      id: "all busan bsall nomal bf 100 39won sc",
    },
    {
      imageSrc: "images/wd131.jpg",
      location: "부산 부산진구",
      name: "부산헤리움웨딩홀",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "35,000원",
      capacity: "최소 250명",
      id: "all busan bsall nomal bf 200 39won sc",
    },
    {
      imageSrc: "images/wd132.jpg",
      location: "부산 부산진구",
      name: "부산더펄웨딩홀",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "37,000원",
      capacity: "최소 150명",
      id: "all busan bsall nomal bf 100 39won sc",
    },
    {
      imageSrc: "images/wd133.jpg",
      location: "부산 해운대구",
      name: "부산마리나컨벤션",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "42,000원",
      capacity: "최소 150명",
      id: "all busan bsall nomal bf 100 49won sc",
    },
    {
      imageSrc: "images/wd134.jpg",
      location: "울산 남구",
      name: "울산문수컨벤션웨딩홀",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "44,000원",
      capacity: "최소 200명",
      id: "all ulsan usall nomal bf 200 49won sc",
    },
    {
      imageSrc: "images/wd135.jpg",
      location: "울산 남구",
      name: "울산롯데호텔",
      hallType: "일반",
      menuType: "양식",
      mealCost: "85,000원",
      capacity: "최소 300명",
      id: "all ulsan usall nomal wt 300 99won mc",
    },
    {
      imageSrc: "images/wd136.jpg",
      location: "울산 동구",
      name: "호텔현대바이라한울산",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "45,000원",
      capacity: "최소 150명",
      id: "all ulsan usall nomal bf 100 49won sc",
    },
    {
      imageSrc: "images/wd137.jpg",
      location: "울산 북구",
      name: "울산오토밸리컨벤션",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "45,000원",
      capacity: "최소 150명",
      id: "all ulsan usall nomal bf 100 49won sc",
    },
    {
      imageSrc: "images/wd138.jpg",
      location: "울산 북구",
      name: "울산W시티컨벤션",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "42,000원",
      capacity: "최소 150명",
      id: "all ulsan usall nomal bf 100 49won sc",
    },
    {
      imageSrc: "images/wd139.jpg",
      location: "인천 연수구",
      name: "인천메리빌리아",
      hallType: "일반,컨벤션",
      menuType: "뷔페",
      mealCost: "75,000원",
      capacity: "최소 250명",
      id: "all incheon icall nomal convention bf 200 79won sc",
    },
    {
      imageSrc: "images/wd140.jpg",
      location: "인천 중구",
      name: "인천파라다이스시티호텔",
      hallType: "야외/하우스,호텔",
      menuType: "양식,퓨전",
      mealCost: "88,000원",
      capacity: "최소 60명",
      id: "all incheon icall out hotel fs wt 50 99won sc",
    },
    {
      imageSrc: "images/wd141.jpg",
      location: "인천 중구",
      name: "인천네스트호텔",
      hallType: "야외/하우스,호텔",
      menuType: "뷔페,양식",
      mealCost: "66,000원",
      capacity: "최소 100명",
      id: "all incheon icall out hotel bf wt 100 79won sc",
    },
    {
      imageSrc: "images/wd142.jpg",
      location: "인천 부평구",
      name: "부평에스칼라디움",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "53,000원",
      capacity: "최소 250명",
      id: "all incheon icall nomal bf 200 59won sc",
    },
    {
      imageSrc: "images/wd143.jpg",
      location: "인천 연수구",
      name: "오라카이송도파크호텔",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "52,000원",
      capacity: "최소 200명",
      id: "all incheon icall nomal bf 200 59won sc",
    },
    {
      imageSrc: "images/wd144.jpg",
      location: "전북 전주시",
      name: "전주더메이호텔",
      hallType: "호텔",
      menuType: "뷔페",
      mealCost: "62,000원",
      capacity: "최소 300명",
      id: "all jeonbuk jball hotel bf 300 79won sc",
    },
    {
      imageSrc: "images/wd145.jpg",
      location: "전북 전주시",
      name: "전북라한호텔",
      hallType: "호텔",
      menuType: "양식",
      mealCost: "55,000원",
      capacity: "최소 200명",
      id: "all jeonbuk jball hotel wt 200 59won mc sc",
    },
    {
      imageSrc: "images/wd146.jpg",
      location: "전북 전주시",
      name: "전주아름다운컨벤션웨딩",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "45,000원",
      capacity: "최소 250명",
      id: "all jeonbuk jball nomal bf 200 49won sc",
    },
    {
      imageSrc: "images/wd147.jpg",
      location: "전북 전주시",
      name: "전주웨딩의전당",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "40,000원",
      capacity: "최소 150명",
      id: "all jeonbuk jball nomal bf 100 49won sc",
    },
    {
      imageSrc: "images/wd148.jpg",
      location: "전북 전주시",
      name: "전주알펜시아웨딩컨벤션",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "42,000원",
      capacity: "최소 200명",
      id: "all jeonbuk jball nomal bf 200 49won sc",
    },
    {
      imageSrc: "images/wd149.jpg",
      location: "제주 서귀포시",
      name: "제주해비치호텔앤리조트",
      hallType: "호텔",
      menuType: "뷔페,한식,양식",
      mealCost: "120,000원",
      capacity: "최소 200명",
      id: "all jeju jjall hotel bf 200 100won mc",
    },
    {
      imageSrc: "images/wd150.jpg",
      location: "제주 서귀포시",
      name: "휘닉스제주섭지코지",
      hallType: "일반,야외/하우스,호텔",
      menuType: "양식",
      mealCost: "77,000원",
      capacity: "최소 15명",
      id: "all jeju jjall nomal out hotel bf 0 79won mc",
    },
    {
      imageSrc: "images/wd151.jpg",
      location: "제주 제주시",
      name: "엘리시안제주웨딩&파티",
      hallType: "야외/하우스",
      menuType: "뷔페,양식",
      mealCost: "80,000원",
      capacity: "최소 10명",
      id: "all jeju jjall out bf wt 0 99won mc sc",
    },
    {
      imageSrc: "images/wd152.jpg",
      location: "제주 서귀포시",
      name: "제주씨에스호텔",
      hallType: "호텔",
      menuType: "뷔페,양식",
      mealCost: "100,000원",
      capacity: "최소 15명",
      id: "all jeju jjall hotel bf wt 0 100won mc sc",
    },

    // 다른 웨딩홀 데이터를 추가할 수 있습니다.
  ];

  // 선택한 메뉴를 동적으로 생성하고 페이지에 추가하는 함수
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

      // 상품 문의 버튼을 포함할 <a> 태그를 생성합니다.
      const inquiryLink = $("<a>")
        .addClass("inquiry-link")
        .attr("href", "index.html") // 이동할 페이지의 URL을 지정합니다.
        .text("상품 문의");

      // <a> 태그를 hallContainer에 추가합니다.
      hallContainer.append(inquiryLink);

      // 페이지에 추가
      weddingHallsList.append(hallContainer);
    });
  }

  // 페이지 로드 시 메뉴얼 정보 생성
  createWeddingHallElements(weddingHallData);
  // 검색 버튼 클릭 이벤트 핸들러
});
