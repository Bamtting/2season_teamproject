$(document).ready(function () {
  var visualswiper = new Swiper(".pk-visual-mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    navigation: {
      // 버튼 사용자 지정
      nextEl: ".pk-next-btn",
    },
    autoplay: {
      delay: 5000,

      disableOnInteraction: true,
    },
  });
  //스와이프 될 때 색상 변경
  // $(".swiper-slide")
  // 스와이프 제어 버튼
  //   .$(".fa-play")
  //   .on("click", function () {
  //     $(".fa-pause").removeClass("active");
  //     $(this).addClass("active");
  //     visualswiper.autoplay.start();
  //     return false;
  //   });
  // $(".fa-pause").on("click", function () {
  //   $(".fa-play").removeClass("active");
  //   $(this).addClass("active");
  //   visualswiper.autoplay.stop();
  //   return false;
  // });

  // 검색 필터링
  // 상위 홀 선택 버튼 클릭시 필터링
  $(".main-list button").click(function () {
    $(".main-list button").removeClass("active");
    $(this).addClass("active");
    var selector = $(this).attr("data-filter");
    $(".mix-wrapper").isotope({
      filter: selector,
    });
  });
  // 셀렉트 박스 내 선택시 필터링
  $("#priceMenu").change(function () {
    var priceMenu = $(this).val(); // 선택된 옵션의 값 가져오기
    var filterValue = priceMenu === "all" ? "*" : "." + priceMenu;

    $(".mix-wrapper").isotope({
      filter: filterValue,
    });
  });

  // "상품 종류" 셀렉트 박스 변경 이벤트 핸들러
  $("#pakageMenu").change(function () {
    var selectedPakageMenu = $(this).val();
    var pakageMenu = $("#pakageMenu");

    // "전체"를 선택한 경우, "상품 구성" 셀렉트 박스 초기화
    if (selectedPakageMenu === "all") {
      pakageMenu.empty();
      pakageMenu.append(
        '<option value="all">상품 구성을 선택해주세요.</option>'
      );
    } else {
      // 선택한 "상품 구성"에 따라 해당하는 구성 추가
      var pakageMenu = getpakageMenu(selectedPakageMenu);
      pakageMenu.html(pakageMenu);
    }
  });

  // "상품 구성"에 따라 해당하는 동 이름을 가져오는 함수 (예시)
  // function getpakageMenu(selectedPakageMenu) {
  //   var pakageMenu = "";

  //   // 선택한 "시/도"에 따라 동적으로 옵션 추가
  //   switch (selectedPakageMenu) {
  //     case "all":
  //       priceMenu =
  //         '<option value="sdm" data-filter=".sdm">스드메</option>' +
  //         '<option value="dm" data-filter=".dm">드메</option>' +
  //         '<option value="total-dm" data-filter=".total-dm">토탈 + 드메</option>' +
  //         '<option value="snap-video" data-filter=".snap-video">스냅 + 영상</option>' +
  //         '<option value="total-dm-snap-video" data-filter=".total-dm-snap-video">토탈 + 드메 + 스냅 + 영상</option>' +
  //         '<option value="sdm-snap-video" data-filter=".sdm-snap-video">스드메 + 스냅 + 영상</option>';
  //       break;
  //     case "sdm":
  //       pakageMenu = '<option value="sdm" data-filter=".sdm">스드메</option>';
  //       break;
  //     case "dm":
  //       pakageMenu = '<option value="dm" data-filter=".dm">드메</option>';
  //       break;
  //     case "total-dm":
  //       pakageMenu =
  //         '<option value="total-dm" data-filter=".total-dm">토탈 + 드메</option>';
  //       break;
  //     case "snap-video":
  //       pakageMenu =
  //         '<option value="snap-video" data-filter=".snap-video">스냅 + 영상</option>';
  //       break;
  //     case "total-dm-snap-video":
  //       pakageMenu =
  //         '<option value="total-dm-snap-video" data-filter=".total-dm-snap-video">토탈 + 드메 + 스냅 + 영상</option>';
  //       break;
  //     case "sdm-snap-video":
  //       pakageMenu =
  //         '<option value="sdm-snap-video" data-filter=".sdm-snap-video">스드메 + 스냅 + 영상</option>';
  //       break;
  //   }

  //   return pakageMenu;
  // }

  //전체
  // "상품 종류"에 따라 해당하는 상품 구성 목록을 가져오는 함수
  function updatePackageMenu(selectedPriceMenu) {
    var packageMenuSelect = document.getElementById("pakageMenu");
    var packageMenuOptions = packageMenuSelect.options;
    var selectedPackageMenu = packageMenuSelect.value;

    // 기존 옵션을 모두 제거
    for (var i = packageMenuOptions.length - 1; i >= 0; i--) {
      packageMenuOptions[i] = null;
    }

    // 선택한 "상품 종류"에 따라 동적으로 옵션 추가
    switch (selectedPriceMenu) {
      case "all":
        packageMenuSelect.appendChild(new Option("", "0"));
        // 여기에 다른 옵션들을 추가하세요
        break;
      case "sdm":
        packageMenuSelect.appendChild(new Option("스드메", "sdm"));
        // 다른 옵션들을 추가하세요
        break;
      case "dm":
        packageMenuSelect.appendChild(new Option("드메", "dm"));
        // 다른 옵션들을 추가하세요
        break;
      case "total-dm":
        packageMenuSelect.appendChild(new Option("토탈 + 드메", "total-dm"));
        // 다른 옵션들을 추가하세요
        break;
      case "snap-video":
        packageMenuSelect.appendChild(new Option("스냅 + 영상", "snap-video"));
        // 다른 옵션들을 추가하세요
        break;
      case "total-dm-snap-video":
        packageMenuSelect.appendChild(
          new Option("토탈 + 드메 + 스냅 + 영상", "total-dm-snap-video")
        );
        // 다른 옵션들을 추가하세요
        break;
      case "sdm-snap-video":
        packageMenuSelect.appendChild(
          new Option("스드메 + 스냅 + 영상", "sdm-snap-video")
        );
        // 다른 옵션들을 추가하세요
        break;
    }
  }
  // "상품 종류"에 따라 해당하는 상품 구성 목록을 가져오는 함수
  function updatePackageMenu(selectedPriceMenu) {
    var packageMenuSelect = document.getElementById("pakageMenu");
    var packageMenuOptions = packageMenuSelect.options;
    var selectedPackageMenu = packageMenuSelect.value;

    // 기존 옵션을 모두 제거
    for (var i = packageMenuOptions.length - 1; i >= 0; i--) {
      packageMenuOptions[i] = null;
    }

    // 선택한 "상품 종류"에 따라 동적으로 옵션 추가
    switch (selectedPriceMenu) {
      case "all":
        packageMenuSelect.appendChild(new Option("전체", "0"));
        packageMenuSelect.appendChild(new Option("스드메", "sdm"));
        packageMenuSelect.appendChild(new Option("드메", "dm"));
        packageMenuSelect.appendChild(new Option("토탈 + 드메", "total-dm"));
        packageMenuSelect.appendChild(new Option("스냅 + 영상", "snap-video"));
        packageMenuSelect.appendChild(
          new Option("토탈 + 드메 + 스냅 + 영상", "total-dm-snap-video")
        );
        packageMenuSelect.appendChild(
          new Option("스드메 + 스냅 + 영상", "sdm-snap-video")
        );
        break;
      case "sdm":
        packageMenuSelect.appendChild(new Option("스드메", "sdm"));
        // 다른 옵션들을 추가하세요
        break;
      case "dm":
        packageMenuSelect.appendChild(new Option("드메", "dm"));
        // 다른 옵션들을 추가하세요
        break;
      case "total-dm":
        packageMenuSelect.appendChild(new Option("토탈 + 드메", "total-dm"));
        // 다른 옵션들을 추가하세요
        break;
      case "snap-video":
        packageMenuSelect.appendChild(new Option("스냅 + 영상", "snap-video"));
        // 다른 옵션들을 추가하세요
        break;
      case "total-dm-snap-video":
        packageMenuSelect.appendChild(
          new Option("토탈 + 드메 + 스냅 + 영상", "total-dm-snap-video")
        );
        // 다른 옵션들을 추가하세요
        break;
      case "sdm-snap-video":
        packageMenuSelect.appendChild(
          new Option("스드메 + 스냅 + 영상", "sdm-snap-video")
        );
        // 다른 옵션들을 추가하세요
        break;
    }
  }

  // "상품 종류" 선택 변경 시 상품 구성 목록 업데이트
  document.getElementById("priceMenu").addEventListener("change", function () {
    var selectedPriceMenu = this.value;
    updatePackageMenu(selectedPriceMenu);
  });

  // 초기 로딩 시 "상품 종류"에 따른 상품 구성 목록 업데이트
  updatePackageMenu(document.getElementById("priceMenu").value);

  // "상품 종류" 선택 변경 시 상품 구성 목록 업데이트
  document.getElementById("priceMenu").addEventListener("change", function () {
    var selectedPriceMenu = this.value;
    updatePackageMenu(selectedPriceMenu);
  });

  // 초기 로딩 시 "상품 종류"에 따른 상품 구성 목록 업데이트
  updatePackageMenu(document.getElementById("priceMenu").value);

  // JSON 데이터 예시 (스드메 정보)
  const pkMainMenuAllData = [
    {
      imageSrc: "images/pk-search-all1.jpg",
      productName:
        "[본식스냅+영상앨범] 인재스튜디오_스냅(원판+스냅 80P 2인촬영,대표)+인재스튜디오_영상(FHD 1인1캠)",
      price: "2,750,000원",
      dcPrice: "2,650,000원",
      id: "mainall all snap-video",
    },
    {
      imageSrc: "images/pk-search-all2.jpg",
      productName:
        "[본식스냅+영상앨범] 스바무(원판+스냅 70p 1인촬영)+인재스튜디오_영상(FHD)",
      price: "2,750,000원",
      dcPrice: "2,650,000원",
      id: "mainall all snap-video",
    },
    {
      imageSrc: "images/pk-search-all3.jpg",
      productName:
        "[본식스냅+영상앨범] 비아쥬스냅(원판+스냅 40p 1인촬영)+인재스튜디오_영상(FHD)",
      price: "2,050,000원",
      dcPrice: "1,550,000원",
      id: "mainall all snap-video",
    },
    {
      imageSrc: "images/pk-search-all4.jpg",
      productName:
        "[본식스냅+영상앨범] 뮤즈프레임(원판+스냅 50p 1인촬영)+인재스튜디오_영상(FHD)",
      price: "1,950,000원",
      dcPrice: "1,600,000원",
      id: "mainall all snap-video",
    },
    {
      imageSrc: "images/pk-search-all5.jpg",
      productName:
        "[본식스냅+영상앨범] 모마스냅(원판+스냅 50p 1인촬영)+인재스튜디오_영상(FHD)",
      price: "2,050,000원",
      dcPrice: "1,600,000원",
      id: "mainall all snap-video",
    },
    {
      imageSrc: "images/pk-search-all6.jpg",
      productName:
        "[본식스냅+영상앨범] 퍼스트모션(원판+스냅 40p 1인촬영)+인재스튜디오_영상(FHD)",
      price: "1,650,000원",
      dcPrice: "1,550,000원",
      id: "mainall all snap-video",
    },
    {
      imageSrc: "images/pk-search-all7.jpg",
      productName:
        "[본식스냅+영상앨범] 인재스튜디오_스냅(원판+스냅 50P 1인촬영)+유니크스(FHD영상앨범 Y-3 )",
      price: "2,200,000원",
      dcPrice: "1,900,000원",
      id: "mainall all snap-video",
    },
    {
      imageSrc: "images/pk-search-all8.jpg",
      productName:
        "[본식스냅+영상앨범] 인재스튜디오_스냅(원판+스냅 50P 1인촬영)+홍필름(VDSLR H-1 일반형)",
      price: "1,870,000원",
      dcPrice: "1,550,000원",
      id: "mainall all snap-video",
    },
    {
      imageSrc: "images/pk-search-all9.jpg",
      productName:
        "[본식스냅+영상앨범] 인재스튜디오_스냅(원판+스냅 50P 1인촬영)+웨딩미(4K UHD)",
      price: "1,900,000원",
      dcPrice: "1,750,000원",
      id: "mainall all snap-video",
    },
    {
      imageSrc: "images/pk-search-all10.jpg",
      productName:
        "[본식스냅+영상앨범] 인재스튜디오_스냅(원판+스냅 50P 1인촬영)+오렌지TV(VDSLR 러블리)",
      price: "1,725,000원",
      dcPrice: "1,525,000원",
      id: "mainall all snap-video",
    },
    {
      imageSrc: "images/pk-search-all11.jpg",
      productName:
        "[본식스냅+영상앨범] 인재스튜디오_스냅(원판+스냅 50P 1인촬영)+인재스튜디오_영상(FHD 1인1캠)",
      price: "2,050,000원",
      dcPrice: "1,950,000원",
      id: "mainall all snap-video",
    },
    {
      imageSrc: "images/pk-search-all12.jpg",
      productName:
        "[본식스냅+영상앨범] 스바무(원판+스냅 70p)+사계절스튜디오_영상(FHD)",
      price: "1,700,000원",
      dcPrice: "1,500,000원",
      id: "mainall all snap-video",
    },
    {
      imageSrc: "images/pk-search-all13.jpg",
      productName:
        "[본식스냅+영상앨범] 비아쥬스냅(원판+스냅 40p)+사계절스튜디오_영상(FHD)",
      price: "1,600,000원",
      dcPrice: "1,050,000원",
      id: "mainall all snap-video",
    },
    {
      imageSrc: "images/pk-search-all14.jpg",
      productName:
        "[본식스냅+영상앨범] 비아쥬스냅(원판+스냅 40p)+사계절스튜디오_영상(FHD)",
      price: "1,600,000원",
      dcPrice: "1,050,000원",
      id: "mainall all snap-video",
    },
    {
      imageSrc: "images/pk-search-all15.jpg",
      productName:
        "[본식스냅+영상앨범] 뮤즈프레임(원판+스냅 50p)+사계절스튜디오_영상(FHD)",
      price: "1,500,000원",
      dcPrice: "1,150,000원",
      id: "mainall all snap-video",
    },
    {
      imageSrc: "images/pk-search-all16.jpg",
      productName:
        "[본식스냅+영상앨범] 퍼스트모션(원판+스냅 40p)+사계절스튜디오_영상(FHD)",
      price: "1,200,000원",
      dcPrice: "1,100,000원",
      id: "mainall all snap-video",
    },
    {
      imageSrc: "images/pk-search-all17.jpg",
      productName:
        "[본식스냅+영상앨범] 사계절스튜디오(원판+스냅 40p)+사계절스튜디오_영상(FHD)",
      price: "1,270,000원",
      dcPrice: "1,050,000원",
      id: "mainall all snap-video",
    },
    {
      imageSrc: "images/pk-search-all18.jpg",
      productName:
        "[본식스냅+영상앨범] 디어웨딩_스냅(원판+스냅 50P 1인촬영)+유니크스(FHD영상앨범 Y-3 )",
      price: "1,880,000원",
      dcPrice: "1,620,000원",
      id: "mainall all snap-video",
    },
    {
      imageSrc: "images/pk-search-all19.jpg",
      productName:
        "[본식스냅+영상앨범] 디어웨딩_스냅(원판+스냅 50P 1인촬영)+웨딩미(4K UHD)",
      price: "1,580,000원",
      dcPrice: "1,470,000원",
      id: "mainall all snap-video",
    },
    {
      imageSrc: "images/pk-search-all20.jpg",
      productName:
        "[본식스냅+영상앨범] 디어웨딩_스냅(원판+스냅 50P 1인촬영)+홍필름(VDSLR H-1 일반형)",
      price: "1,550,000원",
      dcPrice: "1,270,000원",
      id: "mainall all snap-video",
    },
    {
      imageSrc: "images/pk-search-all21.jpg",
      productName:
        "[본식스냅+영상앨범] 디어웨딩_스냅(원판+스냅 50P 1인촬영)+오렌지TV(VDSLR 로맨틱)",
      price: "1,405,000원",
      dcPrice: "1,255,000원",
      id: "mainall all snap-video",
    },
    {
      imageSrc: "images/pk-search-all22.jpg",
      productName:
        "[본식스냅+영상앨범] 비아쥬스냅(원판+스냅 40P 1인촬영)+디어웨딩_영상(FHD 1인1캠)",
      price: "1,980,000원",
      dcPrice: "1,450,000원",
      id: "mainall all snap-video",
    },
    {
      imageSrc: "images/pk-search-all23.jpg",
      productName:
        "[본식스냅+영상앨범] 뮤즈프레임(원판+스냅 50P 1인촬영)+디어웨딩_영상(FHD 1인1캠)",
      price: "1,880,000원",
      dcPrice: "1,500,000원",
      id: "mainall all snap-video",
    },
    {
      imageSrc: "images/pk-search-all24.jpg",
      productName:
        "[본식스냅+영상앨범] 모마스냅(원판+스냅 50P 1인촬영)+디어웨딩_영상(FHD 1인1캠)",
      price: "1,980,000원",
      dcPrice: "1,500,000원",
      id: "mainall all snap-video",
    },
    {
      imageSrc: "images/pk-search-all25.jpg",
      productName:
        "[본식스냅+영상앨범] 스바무(원판+스냅 70P 1인촬영)+디어웨딩_영상(FHD 1인1캠)",
      price: "2,080,000원",
      dcPrice: "1,850,000원",
      id: "mainall all snap-video",
    },
    {
      imageSrc: "images/pk-search-all26.jpg",
      productName:
        "[본식스냅+영상앨범] 퍼스트모션(원판+스냅 40P 1인촬영)+디어웨딩_영상(FHD 1인1캠)",
      price: "1,580,000원",
      dcPrice: "1,450,000원",
      id: "mainall all snap-video",
    },
    {
      imageSrc: "images/pk-search-all27.jpg",
      productName:
        "[본식스냅+영상앨범] 디어웨딩_스냅(원판+스냅 50P 1인촬영)+디어웨딩_영상(FHD 1인1캠)",
      price: "1,660,000원",
      dcPrice: "1,580,000원",
      id: "mainall all snap-video",
    },
    {
      imageSrc: "images/pk-search-all28.jpg",
      productName:
        "[본식스냅+영상앨범] 퍼스트모션(원판+스냅 40P)+오렌지TV(VDSLR 로맨틱)",
      price: "1,325,000원",
      dcPrice: "1,125,000원",
      id: "mainall all snap-video",
    },
    {
      imageSrc: "images/pk-search-all29.jpg",
      productName: "[촬영+본식] 섬스튜디오+레이첼웨딩+프리빗",
      price: "3,620,000원",
      dcPrice: "2,110,000원",
      id: "mainall all sdm",
    },
    {
      imageSrc: "images/pk-search-all30.jpg",
      productName: "[촬영+본식] 글랑디스튜디오+브라이덜수지+겐그레아",
      price: "3,740,000원",
      dcPrice: "1,955,000원",
      id: "mainall all sdm",
    },
    {
      imageSrc: "images/pk-search-all31.jpg",
      productName: "[촬영+본식] 글랑디스튜디오+메이제인+설영",
      price: "4,920,000원",
      dcPrice: "2,380,000원",
      id: "mainall all sdm",
    },
    {
      imageSrc: "images/pk-search-all32.jpg",
      productName: "⏱타임특가✨ 글랑디스튜디오+아르비체바이라리앨리스+히엘",
      price: "4,025,000원",
      dcPrice: "2,035,000원",
      id: "mainall all sdm ts",
    },
    {
      imageSrc: "images/pk-search-all33.jpg",
      productName: "⌛한정수량✨ 글랑디스튜디오+펠리스노비아+제이바이로이스타",
      price: "3,880,000원",
      dcPrice: "2,020,000원",
      id: "mainall all sdm ts sale",
    },
    {
      imageSrc: "images/pk-search-all34.jpg",
      productName: "[촬영+본식] 지엥마지+하우스오브에이미+요닝",
      price: "5,330,000원",
      dcPrice: "3,730,000원",
      id: "mainall all sdm ",
    },
    {
      imageSrc: "images/pk-search-all35.jpg",
      productName: "[촬영+본식] 지엥마지+클라라웨딩+애브뉴준오",
      price: "6,010,000원",
      dcPrice: "4,050,000원",
      id: "mainall all sdm ",
    },
    {
      imageSrc: "images/pk-search-all36.jpg",
      productName:
        "[촬영+본식] 아우어스튜디오(세미)+제이바이루시+제이바이로이스타",
      price: "2,410,000원",
      dcPrice: "1,430,000원",
      id: "mainall all sdm ",
    },
    {
      imageSrc: "images/pk-search-all37.jpg",
      productName: "[촬영+본식] 비포원스튜디오+레이나모라+김활란뮤제네프",
      price: "4,490,000원",
      dcPrice: "2,830,000원",
      id: "mainall all sdm ",
    },
    {
      imageSrc: "images/pk-search-all38.jpg",
      productName: "[촬영+본식] 아우어스튜디오(세미)+컬렉트비+고센&끌림뷰티",
      price: "3,230,000원",
      dcPrice: "1,625,000원",
      id: "mainall all sdm ",
    },
    {
      imageSrc: "images/pk-search-all39.jpg",
      productName: "[촬영+본식] 비포원스튜디오+에델린+겐그레아",
      price: "3,920,000원",
      dcPrice: "2,055,000원",
      id: "mainall all sdm ",
    },
    {
      imageSrc: "images/pk-search-all40.jpg",
      productName:
        "[촬영+본식] 원세컨드스튜디오(세미)+제이바이루시+김활란뮤제네프",
      price: "3,145,000원",
      dcPrice: "1,870,000원",
      id: "mainall all sdm ",
    },
    {
      imageSrc: "images/pk-search-all42.jpg",
      productName: "[촬영+본식] 피아스튜디오+시작by이명순+애브뉴준오",
      price: "5,270,000원",
      dcPrice: "3,920,000원",
      id: "mainall all sdm ",
    },
    {
      imageSrc: "images/pk-search-all43.jpg",
      productName: "[촬영+본식] 바로오늘이그날+브라이덜수지+에포트",
      price: "3,740,000원",
      dcPrice: "2,655,000원",
      id: "mainall all sdm ",
    },
    {
      imageSrc: "images/pk-search-all44.jpg",
      productName: "[촬영+본식] 스투디오사이+보네르+헤움",
      price: "6,110,000원",
      dcPrice: "2,820,000원",
      id: "mainall all sdm ",
    },
    {
      imageSrc: "images/pk-search-all45.jpg",
      productName: "[촬영+본식] 클로드 원스(세미)+시작by이명순+에포트(원장)",
      price: "5,170,000원",
      dcPrice: "4,045,000원",
      id: "mainall all sdm ",
    },
    {
      imageSrc: "images/pk-search-all46.jpg",
      productName: "[촬영+본식] 라앤디+시그니처엘리자베스+위위아뜰리에by서옥",
      price: "6,270,000원",
      dcPrice: "4,680,000원",
      id: "mainall all sdm ",
    },
    {
      imageSrc: "images/pk-search-all47.jpg",
      productName: "[촬영+본식] 어반스튜디오+클라라웨딩+KJ스타일",
      price: "4,670,000원",
      dcPrice: "2,550,000원",
      id: "mainall all sdm ",
    },

    // 다른 웨딩홀 데이터를 추가할 수 있습니다.
  ];

  // 웨딩홀 정보를 동적으로 생성하고 페이지에 추가하는 함수
  function createPkMenuElements(data) {
    const pkMenuList = $("#pkMenuList");

    data.forEach((pk) => {
      const pkContainer = $("<div>").addClass(`mix ${pk.id}`);

      // 이미지 추가
      const image = $("<img>")
        .attr("src", pk.imageSrc)
        .attr("alt", "패키지 이미지");
      pkContainer.append(image);

      const leftContainer = $("<div>").addClass("w-box-left");
      // 위치 정보 추가
      const productName = $("<h2>").text(pk.productName);
      leftContainer.append(productName);

      const price = $("<h4>").text(pk.price);
      leftContainer.append(price);

      const dcPrice = $("<h4>").text(pk.dcPrice);
      leftContainer.append(dcPrice);

      pkContainer.append(leftContainer);

      const rightContainer = $("<div>").addClass("w-box-right");

      // 페이지에 추가
      pkMenuList.append(pkContainer);
    });
  }

  // 페이지 로드 시 전체패키지 정보 생성
  createPkMenuElements(pkMainMenuAllData);

  //스튜디오
});
