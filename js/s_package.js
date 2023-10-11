$(document).ready(function () {
  var visualswiper = new Swiper(".pk-visual-mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    loop: true,
    navigation: {
      // 버튼 사용자 지정
      prevEl: ".spk-prev-btn",
      nextEl: ".spk-next-btn",
    },
    autoplay: {
      delay: 4000,

      disableOnInteraction: true,
    },
    speed: 1500,
    breakpoints: {
      //반응형
      // 화면의 넓이가 320px 이상일 때
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });

  //초기 필터값  설정
  // 상세목록1
  var pkbtnFilter = "*"; // 메인 종류에 대한 필터값
  var pkpriceMenuFilter = "*"; //상품종류에 대한 필터값
  var pkpriceFilter = "*"; //금액대에 대한 필터값
  var pkPakageMenuFilter = "*"; //상품구성에 대한 필터값
  var pkbenefitFilter = "*"; //혜택에 대한 필터값
  var pksdmstyleFilter = "*"; //스타일에 대한 필터값
  var pkbargainsaleFilter = "*"; //특가에 대한 필터값
  // 상세목록2
  var pkstpricemenuFilter = "*"; //상품 종류에 대한 필터값
  var pkstpriceFilter = "*"; //금액대에 대한 필터값
  var pkstudiomenuFilter = "*"; //상품구성에 대한 필터값
  var pksceneFilter = "*"; //씬종류에 대한 필터값
  var ststyle = "*"; //스타일에 대한 필터값
  var pkphotographerFilter = "*"; //촬영자 수에 대한 필터값
  // 상품목록3
  var pkdrpricemenuFilter = "*"; //행사에대한 필터값
  var pkdrpriceFilter = "*"; //금액대에 대한 필터값
  var pkdresspointFilter = "*"; //드레스 강점에 대한 필터값
  var pkdresssizeFilter = "*"; //드레스사이즈에 대한 필터값
  var pkdrmadeFilter = "*"; //제작 구분에 대한 필터값
  var pkdrbuyFilter = "*"; //구매형태에 대한 필터값
  // 상품목록4
  var pkmkpricemenuFilter = "*"; //상품 종류에대한 필터값
  var pkmkpriceFilter = "*"; //금액대에대한필터값
  var pkeventFilter = "*"; //행사에대한필터값
  var pktarget = "*"; //대상에 대한 필터값
  var pkmksdmstyle = "*"; //메이크업 직급에 대한 필터값
  var pkbargainsale = "*"; //메이크업 강점에 대한 필터값

  //메인 종류 클릭시 필터링
  $(".spk-list button, .spk-list2 button").click(function () {
    $(".spk-list button, .spk-list2 button").removeClass("active");
    $(this).addClass("active");
    var pkbtnSelector = $(this).attr("data-filter");

    // 선택한 메인 종류를 메인종류 필터에 반영
    pkbtnFilter = pkbtnSelector;

    // 최종 필터값 업데이트

    pkupdateFilter();
  });

  // 상품종류1 셀렉트 박스 변경 이벤트 핸들러
  $("#priceMenu").change(function () {
    var selectedpriceMenu = $(this).val();

    // 선택한 상품종류를 상품종류 필터에 반영
    pkpriceMenuFilter =
      selectedpriceMenu === "all" ? "*" : "." + selectedpriceMenu;

    // 최종 필터값 업데이트
    pkupdateFilter();
  });

  // 금액대 1 셀렉트 박스 변경 이벤트 핸들러
  $("#price").change(function () {
    var selectedprice = $(this).val();

    // 선택한 상품종류를 상품종류 필터에 반영
    pkpriceFilter = selectedprice === "all" ? "*" : "." + selectedprice;

    // 최종 필터값 업데이트
    pkupdateFilter();
  });

  // 상품 구성 셀렉트 박스
  $("#pakageMenu").change(function () {
    var selectedpakageMenu = $(this).val();

    // 선택한 상품종류를 상품종류 필터에 반영
    pkPakageMenuFilter = "." + selectedpakageMenu;

    // 최종 필터값 업데이트
    pkupdateFilter();
  });

  // 혜택 셀렉트 박스
  $("#benefit").change(function () {
    var selectedbenefit = $(this).val();

    // 선택한 상품종류를 상품종류 필터에 반영
    pkbenefitFilter = "." + selectedbenefit;

    // 최종 필터값 업데이트
    pkupdateFilter();
  });

  // 스타일 셀렉트 박스
  $("#sdmstyle").change(function () {
    var selectedsdmstyle = $(this).val();

    // 선택한 상품종류를 상품종류 필터에 반영
    pksdmstyleFilter = "." + selectedsdmstyle;

    // 최종 필터값 업데이트
    pkupdateFilter();
  });

  // 특가 셀렉트 박스
  $("#bargainsale").change(function () {
    var selectedbargainsale = $(this).val();

    // 선택한 상품종류를 상품종류 필터에 반영
    pkbargainsaleFilter = "." + selectedbargainsale;

    // 최종 필터값 업데이트
    pkupdateFilter();
  });

  // 상품 종류2 셀렉트 박스
  $("#stpricemenu").change(function () {
    var selectedstpricemenu = $(this).val();

    // 선택한 상품종류를 상품종류 필터에 반영
    pkstpricemenuFilter = "." + selectedstpricemenu;

    // 최종 필터값 업데이트
    pkupdateFilter();
  });

  // 금액대2 셀렉트 박스
  $("#stprice").change(function () {
    var selectedstprice = $(this).val();

    // 선택한 상품종류를 상품종류 필터에 반영
    pkstpriceFilter = "." + selectedstprice;

    // 최종 필터값 업데이트
    pkupdateFilter();
  });

  // 상품구성2 셀렉트 박스
  $("#studiomenu").change(function () {
    var selectedstudiomenu = $(this).val();

    // 선택한 상품종류를 상품종류 필터에 반영
    pkstudiomenuFilter = "." + selectedstudiomenu;

    // 최종 필터값 업데이트
    pkupdateFilter();
  });

  // 씬 종류 셀렉트 박스
  $("#scene").change(function () {
    var selectedscene = $(this).val();

    // 선택한 상품종류를 상품종류 필터에 반영
    pksceneFilter = "." + selectedscene;

    // 최종 필터값 업데이트
    pkupdateFilter();
  });

  // 스타일 셀렉트 박스
  $("#ststyle").change(function () {
    var selectedststyle = $(this).val();

    // 선택한 상품종류를 상품종류 필터에 반영
    pkststyleFilter = "." + selectedststyle;

    // 최종 필터값 업데이트
    pkupdateFilter();
  });

  // 촬영자 수 셀렉트 박스
  $("#photographer").change(function () {
    var selectedphotographer = $(this).val();

    // 선택한 상품종류를 상품종류 필터에 반영
    pkphotographerFilter = "." + selectedphotographer;

    // 최종 필터값 업데이트
    pkupdateFilter();
  });

  // 촬영자 수 셀렉트 박스
  $("#photographer").change(function () {
    var selectedphotographer = $(this).val();

    // 선택한 상품종류를 상품종류 필터에 반영
    pkphotographerFilter = "." + selectedphotographer;

    // 최종 필터값 업데이트
    pkupdateFilter();
  });

  // 행사 셀렉트 박스
  $("#drpricemenu").change(function () {
    var selecteddrpricemenu = $(this).val();

    // 선택한 상품종류를 상품종류 필터에 반영
    pkdrpricemenuFilter = "." + selecteddrpricemenu;

    // 최종 필터값 업데이트
    pkupdateFilter();
  });

  // 금액대 셀렉트 박스
  $("#drprice").change(function () {
    var selecteddrprice = $(this).val();

    // 선택한 상품종류를 상품종류 필터에 반영
    pkdrpriceFilter = "." + selecteddrprice;

    // 최종 필터값 업데이트
    pkupdateFilter();
  });

  // 드레스 강점 셀렉트 박스
  $("#dresspoint").change(function () {
    var selecteddresspoint = $(this).val();

    // 선택한 상품종류를 상품종류 필터에 반영
    pkdresspointFilter = "." + selecteddresspoint;

    // 최종 필터값 업데이트
    pkupdateFilter();
  });

  // 드레스 강점 셀렉트 박스
  $("#dresssize").change(function () {
    var selecteddresssize = $(this).val();

    // 선택한 상품종류를 상품종류 필터에 반영
    pkdresssizeFilter = "." + selecteddresssize;

    // 최종 필터값 업데이트
    pkupdateFilter();
  });

  // 제작 구분 셀렉트 박스
  $("#drmade").change(function () {
    var selecteddrmade = $(this).val();

    // 선택한 상품종류를 상품종류 필터에 반영
    pkdrmadeFilter = "." + selecteddrmade;

    // 최종 필터값 업데이트
    pkupdateFilter();
  });

  // 구매 형태 셀렉트 박스
  $("#drbuy").change(function () {
    var selecteddrbuy = $(this).val();

    // 선택한 상품종류를 상품종류 필터에 반영
    pkdrbuyFilter = "." + selecteddrbuy;

    // 최종 필터값 업데이트
    pkupdateFilter();
  });

  // 상품 종류 셀렉트 박스
  $("#mkpricemenu").change(function () {
    var selectedmkpricemenu = $(this).val();

    // 선택한 상품종류를 상품종류 필터에 반영
    pkmkpricemenuFilter = "." + selectedmkpricemenu;

    // 최종 필터값 업데이트
    pkupdateFilter();
  });

  // 금액대 셀렉트 박스
  $("#mkprice").change(function () {
    var selectedmkprice = $(this).val();

    // 선택한 상품종류를 상품종류 필터에 반영
    pkmkpriceFilter = "." + selectedmkprice;

    // 최종 필터값 업데이트
    pkupdateFilter();
  });

  // 행사 셀렉트 박스
  $("#event").change(function () {
    var selectedevent = $(this).val();

    // 선택한 상품종류를 상품종류 필터에 반영
    pkeventFilter = "." + selectedevent;

    // 최종 필터값 업데이트
    pkupdateFilter();
  });

  // 대상 셀렉트 박스
  $("#target").change(function () {
    var selectedtarget = $(this).val();

    // 선택한 상품종류를 상품종류 필터에 반영
    pktargetFilter = "." + selectedtarget;

    // 최종 필터값 업데이트
    pkupdateFilter();
  });

  // 메이크업 직급 셀렉트 박스
  $("#mksdmstyle").change(function () {
    var selectedtarget = $(this).val();

    // 선택한 상품종류를 상품종류 필터에 반영
    pkmksdmstyleFilter = "." + selectedmksdmstyle;

    // 최종 필터값 업데이트
    pkupdateFilter();
  });

  // 메이크업 강점 셀렉트 박스
  $("#bargainsale").change(function () {
    var selectedtarget = $(this).val();

    // 선택한 상품종류를 상품종류 필터에 반영
    pkbargainsaleFilter = "." + selectedbargainsale;

    // 최종 필터값 업데이트
    pkupdateFilter();
  });

  // 최종 필터값 업데이트하는 함수
  function pkupdateFilter() {
    // 모든 필터 값을 결합하여 최종 필터값 설정
    var filter =
      pkbtnFilter + // 메인 종류에 대한 필터값
      pkpriceMenuFilter + //상품종류에 대한 필터값
      pkpriceFilter + //금액대에 대한 필터값
      pkPakageMenuFilter + //상품구성에 대한 필터값
      pkbenefitFilter + //혜택에 대한 필터값
      pksdmstyleFilter + //스타일에 대한 필터값
      pkbargainsaleFilter + //특가에 대한 필터값
      // 상세목록2
      pkstpricemenuFilter + //상품 종류에 대한 필터값
      pkstpriceFilter + //금액대에 대한 필터값
      pkstudiomenuFilter + //상품구성에 대한 필터값
      pksceneFilter + //씬종류에 대한 필터값
      ststyle + //스타일에 대한 필터값
      pkphotographerFilter + //촬영자 수에 대한 필터값
      // 상품목록3
      pkdrpricemenuFilter + //행사에대한 필터값
      pkdrpriceFilter + //금액대에 대한 필터값
      pkdresspointFilter + //드레스 강점에 대한 필터값
      pkdresssizeFilter + //드레스사이즈에 대한 필터값
      pkdrmadeFilter + //제작 구분에 대한 필터값
      pkdrbuyFilter + //구매형태에 대한 필터값
      // 상품목록4
      pkmkpricemenuFilter + //상품 종류에대한 필터값
      pkmkpriceFilter + //금액대에대한필터값
      pkeventFilter + //행사에대한필터값
      pktarget + //대상에 대한 필터값
      pkmksdmstyle + //메이크업 직급에 대한 필터값
      pkbargainsale; //메이크업 강점에 대한 필터값

    // 필터링 적용
    filterPk(filter);
  }

  // 필터링 함수 정의
  function filterPk(filter) {
    $(".mix-wrapper").isotope({
      filter: filter,
    });
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

      id: "all sdm pk300 0 dressUp fancy",
    },
    {
      imageSrc: "images/pk-search-all2.jpg",
      productName:
        "[본식스냅+영상앨범] 스바무(원판+스냅 70p 1인촬영)+인재스튜디오_영상(FHD)",
      price: "2,750,000원",
      dcPrice: "2,650,000원",

      id: "mainall snap-video pk300 0 dressUp ",
    },
    {
      imageSrc: "images/pk-search-all3.jpg",
      productName:
        "[본식스냅+영상앨범] 비아쥬스냅(원판+스냅 40p 1인촬영)+인재스튜디오_영상(FHD)",
      price: "2,050,000원",
      dcPrice: "1,550,000원",
      id: "mainall studio all snap-video pk200 0",
    },
    {
      imageSrc: "images/pk-search-all4.jpg",
      productName:
        "[본식스냅+영상앨범] 뮤즈프레임(원판+스냅 50p 1인촬영)+인재스튜디오_영상(FHD)",
      price: "1,950,000원",
      dcPrice: "1,600,000원",
      id: "mainall studio all snap-video pk200 0 dressupfree ",
    },
    {
      imageSrc: "images/pk-search-all5.jpg",
      productName:
        "[본식스냅+영상앨범] 모마스냅(원판+스냅 50p 1인촬영)+인재스튜디오_영상(FHD)",
      price: "2,050,000원",
      dcPrice: "1,600,000원",
      id: "mainall studio all snap-video pk200 0 dressUp ",
    },
    {
      imageSrc: "images/pk-search-all6.jpg",
      productName:
        "[본식스냅+영상앨범] 퍼스트모션(원판+스냅 40p 1인촬영)+인재스튜디오_영상(FHD)",
      price: "1,650,000원",
      dcPrice: "1,550,000원",
      id: "mainall studio all snap-video pk200 0 dressupfree simple ",
    },
    {
      imageSrc: "images/pk-search-all7.jpg",
      productName:
        "[본식스냅+영상앨범] 인재스튜디오_스냅(원판+스냅 50P 1인촬영)+유니크스(FHD영상앨범 Y-3 )",
      price: "2,200,000원",
      dcPrice: "1,900,000원",
      id: "mainall studio all snap-video pk200 0 dressUp simple ",
    },
    {
      imageSrc: "images/pk-search-all8.jpg",
      productName:
        "[본식스냅+영상앨범] 인재스튜디오_스냅(원판+스냅 50P 1인촬영)+홍필름(VDSLR H-1 일반형)",
      price: "1,870,000원",
      dcPrice: "1,550,000원",
      id: "mainall studio all snap-video pk200 0 dressUp simple ",
    },
    {
      imageSrc: "images/pk-search-all9.jpg",
      productName:
        "[본식스냅+영상앨범] 인재스튜디오_스냅(원판+스냅 50P 1인촬영)+웨딩미(4K UHD)",
      price: "1,900,000원",
      dcPrice: "1,750,000원",
      id: "mainall studio all snap-video pk200 0 dressupfree lively",
    },
    {
      imageSrc: "images/pk-search-all10.jpg",
      productName:
        "[본식스냅+영상앨범] 인재스튜디오_스냅(원판+스냅 50P 1인촬영)+오렌지TV(VDSLR 러블리)",
      price: "1,725,000원",
      dcPrice: "1,525,000원",
      id: "mainall studio all snap-video pk200 0 dressUp lively",
    },
    {
      imageSrc: "images/pk-search-all11.jpg",
      productName:
        "[본식스냅+영상앨범] 인재스튜디오_스냅(원판+스냅 50P 1인촬영)+인재스튜디오_영상(FHD 1인1캠)",
      price: "2,050,000원",
      dcPrice: "1,950,000원",
      id: "mainall studio all snap-video pk200 0",
    },
    {
      imageSrc: "images/pk-search-all12.jpg",
      productName:
        "[본식스냅+영상앨범] 스바무(원판+스냅 70p)+사계절스튜디오_영상(FHD)",
      price: "1,700,000원",
      dcPrice: "1,500,000원",
      id: "mainall studio all snap-video dm pk200 0 dressUp simple",
    },
    {
      imageSrc: "images/pk-search-all13.jpg",
      productName:
        "[본식스냅+영상앨범] 비아쥬스냅(원판+스냅 40p)+사계절스튜디오_영상(FHD)",
      price: "1,600,000원",
      dcPrice: "1,050,000원",
      id: "mainall studio all weddinghall snap-video dm pk200 0",
    },
    {
      imageSrc: "images/pk-search-all14.jpg",
      productName:
        "[본식스냅+영상앨범] 비아쥬스냅(원판+스냅 40p)+사계절스튜디오_영상(FHD)",
      price: "1,600,000원",
      dcPrice: "1,050,000원",
      id: "mainall studio weddinghall all snap-video dm pk200 0 dressUp simple",
    },
    {
      imageSrc: "images/pk-search-all15.jpg",
      productName:
        "[본식스냅+영상앨범] 뮤즈프레임(원판+스냅 50p)+사계절스튜디오_영상(FHD)",
      price: "1,500,000원",
      dcPrice: "1,150,000원",
      id: "mainall studio weddinghall all snap-video pk200 0 lively",
    },
    {
      imageSrc: "images/pk-search-all16.jpg",
      productName:
        "[본식스냅+영상앨범] 퍼스트모션(원판+스냅 40p)+사계절스튜디오_영상(FHD)",
      price: "1,200,000원",
      dcPrice: "1,100,000원",
      id: "mainall studio weddinghall all snap-video pk200 0 dressUp simple",
    },
    {
      imageSrc: "images/pk-search-all17.jpg",
      productName:
        "[본식스냅+영상앨범] 사계절스튜디오(원판+스냅 40p)+사계절스튜디오_영상(FHD)",
      price: "1,270,000원",
      dcPrice: "1,050,000원",
      id: "mainall studio weddinghall all snap-video pk200 0 simple",
    },
    {
      imageSrc: "images/pk-search-all18.jpg",
      productName:
        "[본식스냅+영상앨범] 디어웨딩_스냅(원판+스냅 50P 1인촬영)+유니크스(FHD영상앨범 Y-3 )",
      price: "1,880,000원",
      dcPrice: "1,620,000원",
      id: "mainall studio weddinghall all snap-video pk200 0 fancy",
    },
    {
      imageSrc: "images/pk-search-all19.jpg",
      productName:
        "[본식스냅+영상앨범] 디어웨딩_스냅(원판+스냅 50P 1인촬영)+웨딩미(4K UHD)",
      price: "1,580,000원",
      dcPrice: "1,470,000원",
      id: "mainall studio weddinghall all snap-video pk200 0 simple",
    },
    {
      imageSrc: "images/pk-search-all20.jpg",
      productName:
        "[본식스냅+영상앨범] 디어웨딩_스냅(원판+스냅 50P 1인촬영)+홍필름(VDSLR H-1 일반형)",
      price: "1,550,000원",
      dcPrice: "1,270,000원",
      id: "mainall studio weddinghall all snap-video pk200 0 simple",
    },
    {
      imageSrc: "images/pk-search-all22.jpg",
      productName:
        "[본식스냅+영상앨범] 비아쥬스냅(원판+스냅 40P 1인촬영)+디어웨딩_영상(FHD 1인1캠)",
      price: "1,980,000원",
      dcPrice: "1,450,000원",
      id: "mainall studio weddinghall all snap-video pk200 0 lively",
    },
    {
      imageSrc: "images/pk-search-all23.jpg",
      productName:
        "[본식스냅+영상앨범] 뮤즈프레임(원판+스냅 50P 1인촬영)+디어웨딩_영상(FHD 1인1캠)",
      price: "1,880,000원",
      dcPrice: "1,500,000원",
      id: "mainall all studio makeup snap-video pk200 0 dressUp ",
    },
    {
      imageSrc: "images/pk-search-all24.jpg",
      productName:
        "[본식스냅+영상앨범] 모마스냅(원판+스냅 50P 1인촬영)+디어웨딩_영상(FHD 1인1캠)",
      price: "1,980,000원",
      dcPrice: "1,500,000원",
      id: "mainall all studio makeup snap-video pk200 0 positionUp fancy",
    },
    {
      imageSrc: "images/pk-search-all25.jpg",
      productName:
        "[본식스냅+영상앨범] 스바무(원판+스냅 70P 1인촬영)+디어웨딩_영상(FHD 1인1캠)",
      price: "2,080,000원",
      dcPrice: "1,850,000원",
      id: "mainall all studio makeup snap-video pk200 0 positionUp",
    },
    {
      imageSrc: "images/pk-search-all26.jpg",
      productName:
        "[본식스냅+영상앨범] 퍼스트모션(원판+스냅 40P 1인촬영)+디어웨딩_영상(FHD 1인1캠)",
      price: "1,580,000원",
      dcPrice: "1,450,000원",
      id: "mainall all studio makeup snap-video pk200 0 positionUp",
    },
    {
      imageSrc: "images/pk-search-all27.jpg",
      productName:
        "[본식스냅+영상앨범] 디어웨딩_스냅(원판+스냅 50P 1인촬영)+디어웨딩_영상(FHD 1인1캠)",
      price: "1,660,000원",
      dcPrice: "1,580,000원",
      id: "mainall all studio makeup snap-video pk200 0 positionUp",
    },
    {
      imageSrc: "images/pk-search-all28.jpg",
      productName:
        "[본식스냅+영상앨범] 퍼스트모션(원판+스냅 40P)+오렌지TV(VDSLR 로맨틱)",
      price: "1,325,000원",
      dcPrice: "1,125,000원",
      id: "mainall all studio makeup snap-video pk200 0 positionUp",
    },
    {
      imageSrc: "images/pk-search-all29.jpg",
      productName: "[촬영+본식] 섬스튜디오+레이첼웨딩+프리빗",
      price: "3,620,000원",
      dcPrice: "2,110,000원",
      id: "mainall all studio makeup sdm pk300 0 sceneFree simple",
    },
    {
      imageSrc: "images/pk-search-all30.jpg",
      productName: "[촬영+본식] 글랑디스튜디오+브라이덜수지+겐그레아",
      price: "3,740,000원",
      dcPrice: "1,955,000원",
      id: "mainall all studio dress sdm pk200 0 sceneFree",
    },
    {
      imageSrc: "images/pk-search-all31.jpg",
      productName: "[촬영+본식] 글랑디스튜디오+메이제인+설영",
      price: "4,920,000원",
      dcPrice: "2,380,000원",
      id: "mainall all studio dress sdm pk300 0 sceneFree ",
    },
    {
      imageSrc: "images/pk-search-all32.jpg",
      productName: "⏱타임특가✨ 글랑디스튜디오+아르비체바이라리앨리스+히엘",
      price: "4,025,000원",
      dcPrice: "2,035,000원",
      id: "mainall all studio sdm timesale pk300 0",
    },
    {
      imageSrc: "images/pk-search-all33.jpg",
      productName: "⌛한정수량✨ 글랑디스튜디오+펠리스노비아+제이바이로이스타",
      price: "3,880,000원",
      dcPrice: "2,020,000원",
      id: "mainall all studio sdm ts sale pk300 0",
    },
    {
      imageSrc: "images/pk-search-all34.jpg",
      productName: "[촬영+본식] 지엥마지+하우스오브에이미+요닝",
      price: "5,330,000원",
      dcPrice: "3,730,000원",
      id: "mainall all studio sdm pk400 0 sceneFree",
    },
    {
      imageSrc: "images/pk-search-all35.jpg",
      productName: "[촬영+본식] 지엥마지+클라라웨딩+애브뉴준오",
      price: "6,010,000원",
      dcPrice: "4,050,000원",
      id: "mainall all studio sdm pk400 0 sceneFree",
    },
    {
      imageSrc: "images/pk-search-all36.jpg",
      productName:
        "[촬영+본식] 아우어스튜디오(세미)+제이바이루시+제이바이로이스타",
      price: "2,410,000원",
      dcPrice: "1,430,000원",
      id: "mainall all studio sdm pk200 0",
    },
    {
      imageSrc: "images/pk-search-all37.jpg",
      productName: "[촬영+본식] 비포원스튜디오+레이나모라+김활란뮤제네프",
      price: "4,490,000원",
      dcPrice: "2,830,000원",
      id: "mainall all studio dress sdm pk300 0 sceneFree",
    },
    {
      imageSrc: "images/pk-search-all38.jpg",
      productName: "[촬영+본식] 아우어스튜디오(세미)+컬렉트비+고센&끌림뷰티",
      price: "3,230,000원",
      dcPrice: "1,625,000원",
      id: "mainall all studio sdm pk200 0 sceneFree",
    },
    {
      imageSrc: "images/pk-search-all39.jpg",
      productName: "[촬영+본식] 비포원스튜디오+에델린+겐그레아",
      price: "3,920,000원",
      dcPrice: "2,055,000원",
      id: "mainall all studio sdm pk300 0",
    },
    {
      imageSrc: "images/pk-search-all40.jpg",
      productName:
        "[촬영+본식] 원세컨드스튜디오(세미)+제이바이루시+김활란뮤제네프",
      price: "3,145,000원",
      dcPrice: "1,870,000원",
      id: "mainall all studio sdm pk200 0",
    },
    {
      imageSrc: "images/pk-search-all42.jpg",
      productName: "[촬영+본식] 피아스튜디오+시작by이명순+애브뉴준오",
      price: "5,270,000원",
      dcPrice: "3,920,000원",
      id: "mainall all studio dress sdm pk400 0",
    },
    {
      imageSrc: "images/pk-search-all43.jpg",
      productName: "[촬영+본식] 바로오늘이그날+브라이덜수지+에포트",
      price: "3,740,000원",
      dcPrice: "2,655,000원",
      id: "mainall all studio dress sdm pk300 0",
    },
    {
      imageSrc: "images/pk-search-all44.jpg",
      productName: "[촬영+본식] 스투디오사이+보네르+헤움",
      price: "6,110,000원",
      dcPrice: "2,820,000원",
      id: "mainall all studio dresss dm pk300 0",
    },
    {
      imageSrc: "images/pk-search-all45.jpg",
      productName: "[촬영+본식] 클로드 원스(세미)+시작by이명순+에포트(원장)",
      price: "5,170,000원",
      dcPrice: "4,045,000원",
      id: "mainall all studio dress sdm pk500 0 sceneFree",
    },
    {
      imageSrc: "images/pk-search-all46.jpg",
      productName: "[촬영+본식] 라앤디+시그니처엘리자베스+위위아뜰리에by서옥",
      price: "6,270,000원",
      dcPrice: "4,680,000원",
      id: "mainall all studio dress sdm pk500 0 dressupfree",
    },
    {
      imageSrc: "images/pk-search-all47.jpg",
      productName: "[촬영+본식] 어반스튜디오+클라라웨딩+KJ스타일",
      price: "4,670,000원",
      dcPrice: "2,550,000원",
      id: "mainall all studio dress sdm pk300 0 dressupfree",
    },

    // 다른 웨딩홀 데이터를 추가할 수 있습니다.
  ];

  // 웨딩홀 정보를 동적으로 생성하고 페이지에 추가하는 함수
  function createPkMenuElements(data) {
    const pkMenuList = $("#pkMenuList");

    data.forEach((pk) => {
      const pkContainer = $("<div>").addClass(`mix2 ${pk.id}`);

      // 이미지 추가
      const image = $("<img>")
        .attr("src", pk.imageSrc)
        .attr("alt", "패키지 이미지");
      pkContainer.append(image);

      const leftContainer = $("<div>").addClass("pk-box-left");
      // 위치 정보 추가
      const productName = $("<h3>").text(pk.productName);
      leftContainer.append(productName);

      pkContainer.append(leftContainer);

      const rightContainer = $("<div>").addClass("pk-box-right");

      // 원래 가격 추가
      const price = $("<p>").html(`<span>원래 가격: </span>${pk.price}`);
      rightContainer.append(price);

      // 할인된 가격 추가
      const dcPrice = $(`<p class = "sale">`).html(
        `<span>할인가: </span>${pk.dcPrice}`
      );
      rightContainer.append(dcPrice);

      pkContainer.append(rightContainer);

      // 상품 문의 버튼을 포함할 <a> 태그를 생성합니다.
      const inquiryButton = $("<a>")
        .addClass("inquiry-button2")
        .attr("href", "index.html") // 이동할 페이지의 URL을 지정합니다.
        .text("상품 문의");

      // <a> 태그를 hallContainer에 추가합니다.
      pkContainer.append(inquiryButton);

      // 페이지에 추가
      pkMenuList.append(pkContainer);
    });
  }

  // 페이지 로드 시 전체패키지 정보 생성
  createPkMenuElements(pkMainMenuAllData);

  //스튜디오
});
