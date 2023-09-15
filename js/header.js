window.addEventListener("load", function () {
    const mainheader = document.querySelector(".header")
    const header = document.querySelector(".header-2");
    let lastScrollY = window.scrollY || window.pageYOffset; // 이전 스크롤 위치 저장
  
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
    window.addEventListener("mouseover", function(){
      header.classList.remove("active"); // header에서 클래스 제거
    });
  });

$(document).ready(function(){

})