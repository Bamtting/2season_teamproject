window.addEventListener("load", function () {
    const chk_member1 = document.querySelector("#check1");
    const chk_member2 = document.querySelector("#check2");
    const btn = document.querySelector('#submit');
    const submita = document.querySelector('.submita')

    const checkboxes = document.querySelectorAll('.checkbox');
    const selectAllCheckbox = document.querySelector('#checkAll');

    // 개별 체크 시 모두 동의 체크 선택/해제
    function checkSelectAll() {
        if (checkboxes.length === document.querySelectorAll('input[name="agreement"]:checked').length) {
            selectAllCheckbox.checked = true;
        } else {
            selectAllCheckbox.checked = false;
        }
    }

    // 필수값 모두 체크 시에 버튼 활성화
    function checkHandler() {
        if (chk_member1.checked && chk_member2.checked) {
            btn.disabled = false; // 버튼 활성화
            btn.classList.add("active");
        } else {
            btn.disabled = true; // 버튼 비활성화
            btn.classList.remove("active");
        }
    }

    // selectAllCheckbox에 대한 이벤트 리스너 추가
    selectAllCheckbox.addEventListener('change', function () {
        checkboxes.forEach((checkbox) => {
            checkbox.checked = selectAllCheckbox.checked;
        });
        checkHandler(); // selectAllCheckbox 변경 시 핸들러 호출
    });

    // 각 체크박스에 대한 이벤트 리스너 추가
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', function () {
            checkSelectAll(); // 개별 체크박스 변경 시 모두 동의 체크 업데이트
            checkHandler(); // 개별 체크박스 변경 시 버튼 상태 업데이트
        });
    });
    
    // 페이지 로드 시 초기 상태 설정
    checkSelectAll();
    checkHandler();

    document.getElementById('submit').addEventListener('click', function () {
        if (!this.disabled) {
            // 버튼이 활성화된 상태에서만 페이지 이동
            window.location.href = 'signup2.html';
        }
    });
});