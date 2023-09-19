$(document).ready(function () {
  // JSON 파일 1의 경로
  const jsonFile1 = "json/weddingHalls.json";

  // JSON 파일 1 데이터를 저장할 변수
  let weddingHallsData = null;

  // JSON 파일 2의 경로 (서울 지역)
  const jsonFile2 = "json/seoul.json";

  // 웨딩홀 정보를 출력하는 함수
  function displayWeddingHalls(selectedLocation, data) {
    const weddingHallsList = $("#weddingHallsList");
    const weddingHalls = data.weddingHalls;

    weddingHallsList.empty(); // 결과를 비우고 다시 표시

    weddingHalls.forEach((hall) => {
      // 선택한 지역과 일치하는 웨딩홀만 표시
      if (
        selectedLocation === "전체" ||
        hall.location.includes(selectedLocation)
      ) {
        const hallContainer = $("<div>").addClass(`w-image-box ${hall.catename} `);

        // 이미지 추가
        const image = $("<img>").attr("src", hall.image).attr("alt", hall.name);
        hallContainer.append(image);

        const leftContainer = $("<div>").addClass("w-box-left");
        // 정보 추가
        const location = $("<p>").text(hall.location);
        leftContainer.append(location);

        const name = $("<h3>").text(hall.name);
        leftContainer.append(name);

        hallContainer.append(leftContainer);

        const rightContainer = $("<div>").addClass("w-box-right");

        const type = $("<p>").html(`<span>홀 종류: </span>${hall.type}`);
        rightContainer.append(type);

        const menu = $("<p>").html(`<span>메뉴 종류: </span>${hall.menu}`);
        rightContainer.append(menu);

        const price = $("<p>").html(`<span>식사 비용: </span>${hall.price}`);
        rightContainer.append(price);

        const capacity = $("<p>").html(
          `<span>보증 인원: </span>${hall.capacity}`
        );
        rightContainer.append(capacity);

        hallContainer.append(rightContainer);

        weddingHallsList.append(hallContainer);
      }
    });
  }

  // JSON 파일 1 불러오기
  $.getJSON(jsonFile1, function (data1) {
    // data1은 JSON 파일 1의 데이터입니다.
    console.log("JSON 파일 1 데이터:", data1);
    weddingHallsData = data1; // JSON 파일 1 데이터를 변수에 저장

    // 페이지 로드 시 JSON 파일 1 데이터로 웨딩홀 정보 출력
    displayWeddingHalls("전체", weddingHallsData);

    // "검색" 버튼 클릭 시 JSON 파일 2 (서울) 데이터를 불러와서 처리
    $("#searchButton").click(function () {
      $.getJSON(jsonFile2, function (data2) {
        // data2는 JSON 파일 2 (서울)의 데이터입니다.
        console.log("JSON 파일 2 데이터 (서울):", data2);

        // 여기에서 data2를 이용해 웨딩홀 정보를 업데이트 또는 필터링할 수 있습니다.
        // 예를 들어, 선택한 지역이 서울일 때만 해당 정보를 표시하도록 할 수 있습니다.
        displayWeddingHalls("서울", { weddingHalls: data2.seoulHalls });
      });
    });

    // "전체" 버튼 클릭 시 JSON 파일 1 데이터로 돌아감
    $("#showAllButton").click(function () {
      displayWeddingHalls("전체", weddingHallsData);
    });
  });
});
