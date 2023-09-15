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
});
