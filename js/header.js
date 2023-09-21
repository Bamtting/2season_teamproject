window.addEventListener("load", function () {
    const mainheader = document.querySelector(".header")
    const header = document.querySelector(".header-2");
    let lastScrollY = window.scrollY || window.pageYOffset; // 이전 스크롤 위치 저장


    // 상단 스크롤 기능
    const hamburger = document.querySelector(".hamburger");
    // 모바일 메뉴 클릭 처리
    const htmlRoot = document.querySelector("html");
    const hamMenu = document.querySelector(".hamburger-menu");
    let scy = 0;
    scy = window.document.documentElement.scrollTop;
    hamburger.addEventListener("click", function () {
      // 현재 ani클래스가 있는지 없는지 파악
      const state = this.classList.contains("ani");
      if (state) {
        this.classList.remove("ani");
        // 윈도우에 스크롤바가 나타납니다.
        htmlRoot.classList.remove("active");
        // 모바일 메뉴 숨기기
        hamMenu.classList.remove("active");
        if (scy > 0) {
          hamburger.classList.add("active");
        } else {
          hamburger.classList.remove("active");
        }
      } else {
        this.classList.add("ani");
        htmlRoot.classList.add("active");
        hamMenu.classList.add("active");
        hamburger.classList.add("active");
      }
    });
    // 반응형 처리
    let winW = window.innerWidth;
    window.addEventListener("resize", function () {
      // 웹브라우저 안쪽 너비
      winW = window.innerWidth;
      // mobile ===> pc 전환
      if (winW > 550) {
        hamburger.classList.remove("ani");
        htmlRoot.classList.remove("active");
        hamMenu.classList.remove("active");
      }
    });




    function updateHeader() {
      const scy = window.scrollY || window.pageYOffset; // 현재 스크롤 위치 가져오기
  
      if (scy > lastScrollY) {
        // 스크롤을 내릴 때
        header.classList.add("active");
      } else {
        // 스크롤을 올릴 때
        header.classList.remove("active");
      }
  
      lastScrollY = scy; // 현재 스크롤 위치를 이전 스크롤 위치로 저장
    }
  
    // 초기 상태 업데이트
    updateHeader();
  
    window.addEventListener("scroll", function () {
      // 스크롤 이벤트가 발생할 때마다 헤더 업데이트
      updateHeader();
    });
    mainheader.addEventListener("mouseover", function(){
      header.classList.remove("active"); // header에서 클래스 제거
    });
  });

$(document).ready(function(){

})