$(document).ready(function () {
  // HTML 요소 선택
  const hallButtons = document.querySelectorAll(
    ".hall-btn ,.hall-btn-1, .hall-btn-2,.hall-btn-3,.hall-btn-4,.hall-btn-5"
  );
  // 초기 상태에서 첫 번째 버튼에 스타일 적용
  hallButtons[0].style.backgroundColor = "#b99664";
  hallButtons[0].style.border = "1px solid #b99664";
  hallButtons[0].style.color = "#fff";
  hallButtons[0].style.fontWeight = "bold";
  // 각 버튼에 클릭 이벤트 리스너 추가
  hallButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      // 모든 버튼의 스타일 초기화
      hallButtons.forEach((btn) => {
        btn.style.backgroundColor = "";
        btn.style.border = "";
        btn.style.color = "";
        btn.style.fontWeight = "";
      });

      // 클릭된 버튼에 스타일 적용
      const clickedButton = event.target;
      clickedButton.style.backgroundColor = "#b99664";
      clickedButton.style.border = "1px solid #b99664";
      clickedButton.style.color = "#fff";
      clickedButton.style.fontWeight = "bold";

      // 클릭된 링크의 기본 동작 취소
      event.preventDefault();
    });
  });
  // HTML 요소 선택
  const hall2Buttons = document.querySelectorAll(
    ".hall2-btn ,.hall2-btn-1, .hall2-btn-2,.hall2-btn-3,.hall2-btn-4,.hall2-btn-5"
  );
  // 초기 상태에서 첫 번째 버튼에 스타일 적용
  hall2Buttons[0].style.backgroundColor = "#b99664";
  hall2Buttons[0].style.border = "1px solid #b99664";
  hall2Buttons[0].style.color = "#fff";
  hall2Buttons[0].style.fontWeight = "bold";
  // 각 버튼에 클릭 이벤트 리스너 추가
  hall2Buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      // 모든 버튼의 스타일 초기화
      hall2Buttons.forEach((btn) => {
        btn.style.backgroundColor = "";
        btn.style.border = "";
        btn.style.color = "";
        btn.style.fontWeight = "";
      });

      // 클릭된 버튼에 스타일 적용
      const clickedButton2 = event.target;
      clickedButton2.style.backgroundColor = "#b99664";
      clickedButton2.style.border = "1px solid #b99664";
      clickedButton2.style.color = "#fff";
      clickedButton2.style.fontWeight = "bold";

      // 클릭된 링크의 기본 동작 취소
      event.preventDefault();
    });
  });
  // 가상의 지역 데이터
  const regions = [
    { id: "all", name: "전체" },
    { id: "seoul", name: "서울" },
    { id: "gyeonggi", name: "경기" },
    { id: "gangwon", name: "강원" },
    { id: "gyeongnam", name: "경남" },
    { id: "gwangju", name: "광주" },
    { id: "daejeon", name: "대전" },
    { id: "daegu", name: "대구" },
    { id: "busan", name: "부산" },
    { id: "ulsan", name: "울산" },
    { id: "incheon", name: "인천" },
    { id: "jeonbuk", name: "전북" },
    { id: "chungnam", name: "충남" },
    { id: "chungbuk", name: "충북" },
    { id: "Jeju", name: "제주" },
  ];

  // 가상의 지역(시/군/구) 데이터
  const loungeData = {
    all: [
      "전체",
      "강남구",
      "영등포구",
      "중구",
      "서초구",
      "강서구",
      "송파구",
      "구로구",
      "용산구",
      "종로구",
      "마포구",
      "성동구",
      "양천구",
      "광진구",
      "성북구",
      "강동구",
      "강북구",
      "동대문구",
      "동작구",
      "은평구",
      "관악구",
      "도봉구",
      "노원구",
      "금천구",
      "서대문구",
    ],
    seoul: [
      "전체",
      "강남구",
      "영등포구",
      "중구",
      "서초구",
      "강서구",
      "송파구",
      "구로구",
      "용산구",
      "종로구",
      "마포구",
      "성동구",
      "양천구",
      "광진구",
      "성북구",
      "강동구",
      "강북구",
      "동대문구",
      "동작구",
      "은평구",
      "관악구",
      "도봉구",
      "노원구",
      "금천구",
      "서대문구",
      "고양시",
      "광명시",
      "구리시",
      "군포시",
      "김포시",
      "남양주시",
      "동두천시",
      "부천시",
      "성남시",
      "수원시",
      "시흥시",
      "안산시",
      "안양시",
      "오산시",
      "용인시",
      "의정부시",
      "이천시",
      "파주시",
      "평택시",
      "포천시",
      "하남시",
      "화성시",
    ],
    gyeonggi: [
      "전체",
      "고양시",
      "광명시",
      "구리시",
      "군포시",
      "김포시",
      "남양주시",
      "동두천시",
      "부천시",
      "성남시",
      "수원시",
      "시흥시",
      "안산시",
      "안양시",
      "오산시",
      "용인시",
      "의정부시",
      "이천시",
      "파주시",
      "평택시",
      "포천시",
      "하남시",
      "화성시",
    ],
  };

  const selcity = document.getElementById("selcity");
  const city = document.getElementById("city");

  // 지역 옵션 추가
  regions.forEach((region) => {
    const option = document.createElement("option");
    option.value = region.id;
    option.textContent = region.name;
    selcity.appendChild(option);
  });
  // 지역 옵션 선택 시 지역 업데이트
  selcity.addEventListener("change", () => {
    const selectedRegion = selcity.value;
    city.innerHTML = ""; // 선택지 초기화

    if (selectedRegion in loungeData) {
      loungeData[selectedRegion].forEach((lounge) => {
        const option = document.createElement("option");
        option.value = lounge;
        option.textContent = lounge;
        city.appendChild(option);
      });
    } else {
      const option = document.createElement("option");
      option.textContent = "지역을 선택해주세요";
      city.appendChild(option);
    }
  });
  // 식대
  const meals = [
    { value: "all", label: "가격을 선택해주세요." },
    { value: "30000", label: "39,000원 미만" },
    { value: "40000", label: "40,000원 - 49,000원" },
    { value: "50000", label: "50,000원 - 59,000원" },
    { value: "60000", label: "60,000원 - 79,000원" },
    { value: "80000", label: "80,000원 - 99,000원" },
    { value: "100000", label: "10만원 이상" },
  ];

  const mealsSelect = document.getElementById("meals");

  meals.forEach((meal) => {
    const option = document.createElement("option");
    option.value = meal.value;
    option.textContent = meal.label;
    mealsSelect.appendChild(option);
  });
  // 보증인원
  const guarantors = [
    { value: "all", label: "보증인원을 선택해주세요." },
    { value: "50", label: "50명 미만" },
    { value: "100", label: "50명 - 100명" },
    { value: "150", label: "100명 - 150명" },
    { value: "200", label: "150명 - 200명" },
    { value: "250", label: "200명 - 250명" },
  ];

  const guarantorsSelect = document.getElementById("guarantors");

  guarantors.forEach((guarantor) => {
    const option = document.createElement("option");
    option.value = guarantor.value;
    option.textContent = guarantor.label;
    guarantorsSelect.appendChild(option);
  });
  // 식사메뉴
  const mealmenus = [
    { value: "all", label: "식사메뉴를 선택해주세요." },
    { value: "buffet", label: "뷔페" },
    { value: "Korean", label: "한식" },
    { value: "Western", label: "양식" },
    { value: "Chinese", label: "중식" },
    { value: "Fusion ", label: "퓨전" },
  ];

  const mealmenusSelect = document.getElementById("mealmenu");

  mealmenus.forEach((mealmenus) => {
    const option = document.createElement("option");
    option.value = mealmenus.value;
    option.textContent = mealmenus.label;
    mealmenusSelect.appendChild(option);
  });
  // 예식형태
  const ceremonys = [
    { value: "all", label: "예식형태를 선택해주세요." },
    { value: "buffet", label: "분리예식" },
    { value: "Korean", label: "동시예식" },
  ];

  const ceremonysSelect = document.getElementById("ceremony");

  ceremonys.forEach((ceremonys) => {
    const option = document.createElement("option");
    option.value = ceremonys.value;
    option.textContent = ceremonys.label;
    ceremonysSelect.appendChild(option);
  });
  // 검색 버튼 클릭 시 웨딩홀 검색 함수 호출
  $("#searchButton").click(function () {
    searchWeddingHalls();
  });

  // 웨딩홀 검색 함수 (기존 코드에서 분리)
  function searchWeddingHalls() {
    const selectedLocation = $("#city").val();
    // 여기에서 선택한 지역 및 다른 필터 기준에 따라 웨딩홀을 검색 및 표시하는 코드 작성
    // 필요한 데이터를 JSON 파일에서 가져와서 화면에 표시하는 로직을 구현하면 됩니다.
  }
});
