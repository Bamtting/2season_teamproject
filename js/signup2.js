window.addEventListener("load", function () {
    const idInput = document.getElementById("idInput");
    const passwordInput = document.getElementById("passwordInput");
    const nameInput = document.getElementById("nameInput");
    const birthInput = document.getElementById("birthInput");
    const phoneNumInput = document.getElementById("phoneNumInput");
    const veriInput = document.getElementById("veriInput");
  
    function validateInput(
      inputElement,
      containerElement,
      successClass,
      errorClass
    ) {
      if (inputElement.value.trim() === "") {
        containerElement.classList.remove(successClass);
        containerElement.classList.add(errorClass);
      } else {
        containerElement.classList.remove(errorClass);
        containerElement.classList.add(successClass);
      }
    }
  
    function handleFocus(event) {
      event.target.parentNode.classList.add("focus");
    }
  
    function handleBlur(event) {
      validateInput(event.target, event.target.parentNode, "success", "error");
    }
  
    idInput.addEventListener("focus", handleFocus);
    idInput.addEventListener("blur", handleBlur);
    passwordInput.addEventListener("focus", handleFocus);
    passwordInput.addEventListener("blur", handleBlur);
    nameInput.addEventListener("focus", handleFocus);
    nameInput.addEventListener("blur", handleBlur);
    birthInput.addEventListener("focus", handleFocus);
    birthInput.addEventListener("blur", handleBlur);
    phoneNumInput.addEventListener("focus", handleFocus);
    phoneNumInput.addEventListener("blur", handleBlur);
    veriInput.addEventListener("focus", handleFocus);
    veriInput.addEventListener("blur", handleBlur);

    // genderbox check하면 border로 표시
    const genderRadioButtons = document.querySelectorAll('input[name="gender"]');
    const genderCheckBoxes = document.querySelectorAll('.gender-check-box');

    genderRadioButtons.forEach((radio, index) => {
      radio.addEventListener('change', function () {
        genderCheckBoxes.forEach((checkBox) => {
          checkBox.style.borderColor = '#dfdfdf';
        });

        genderCheckBoxes[index].style.borderColor = '#887160';
      });
    });
    
    // 휴대전화번호 입력시, 인증요청버튼 활성화
    const submit = document.getElementById('submit');
    const realSubmit = document.getElementById('realSubmit');

    phoneNumInput.addEventListener('input', function (e) {
      const inputValue = e.target.value.replace(/[^0-9]/g, '');

      e.target.value = inputValue;

      const trimmedLength = inputValue.trim().length;

      submit.style.display = trimmedLength === 0 ? 'block' : 'none';
      realSubmit.style.display = trimmedLength > 0 ? 'block' : 'none';
    });


    realSubmit.addEventListener('click', function () {
      const verificationBox = document.getElementById('verificationCodeBox');
      const phoneNumBox = document.querySelector('.phoneNum-box');
    
      // .verification-code-box의 스타일 변경
      verificationBox.style.display = 'flex ';
      verificationBox.style.borderBottomLeftRadius = '6px';
      verificationBox.style.borderBottomRightRadius = '6px';
    
      // .phoneNum-box의 스타일 변경
      phoneNumBox.style.borderRadius = '0';
    });

  });