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


    realSubmit.addEventListener('click', function (e) {
      e.preventDefault()
      const verificationBox = document.getElementById('verificationCodeBox');
      const phoneNumBox = document.querySelector('.phoneNum-box');
    
      verificationBox.style.display = 'flex ';
    
      phoneNumBox.style.borderRadius = '0';
    });


    const completion = document.getElementById('completion');

    function checkVeriInput() {
      if (veriInput.value.trim() !== "") {
        completion.disabled = false;
      } else {
        completion.disabled = true;
      }
    }

    // veriInput의 입력 이벤트에 대한 이벤트 리스너 추가
    veriInput.addEventListener("input", checkVeriInput);
    const signupInfo = document.querySelector('.signup-info');
      const lastSubmit = document.getElementById('lastSubmit');

    completion.addEventListener('click', function(e){
      e.preventDefault()
      signupInfo.textContent = '인증이 완료되었습니다.'
      signupInfo.style.color = '#f00 ';
      signupInfo.style.padding = '5px';
      realSubmit.style.display = 'none';
      lastSubmit.style.display = 'block';
    })

    function checkGender() {
      const genderRadios = document.getElementsByName("gender");
      let checked = false;
    
      for (let i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked) {
          checked = true; // 하나 이상의 라디오 버튼이 선택되어 있으면 true로 설정
          break; // 하나만 선택되어도 충분하므로 반복문을 종료합니다.
        }
      }
    
      return checked;
    }

    const signupForm = document.getElementById("signup2-form");
        signupForm.addEventListener("submit",function(e){
            // 이벤트 객체(e)의 preventDefault() 메서드를 호출해서 기본 제출 동작을 막습니다.
            // 페이지가 새로고침되는 것을 방지한다.
            e.preventDefault()
            const username = document.getElementById("id").value;
            const password = document.getElementById("password").value;
            // 로컬스토리지를 사용하여 저장합니다.
            // 사용자명(username)과 비밀번호(password)를 이용하여 새로운 사용자 객체 생성
            const newUser = {
                username:username,
                password:password,
            }

            // 로컬스토리지에 사용자 정보를 저장합니다.
            // 로컬스토리지에 저장된 사용자 정보를 가져오기 위해 localStorage.getItem("users")
            // 만약에 사용자 정보가 없다면 빈 배열([])을 기본값으로 사용
            const users = JSON.parse(localStorage.getItem("users")) || [];
            // 새로운 사용자 객체 (newUser)를 이전 사용자 정보 배열(users)에 추가
            users.push(newUser);
            // 사용자 정보 배열을 JSON형식으로 문자열화하고, 이를 로컬스토리지에 "users"라는 키로 저장
            localStorage.setItem("users", JSON.stringify(users));
            alert("가입이 완료 되었습니다. 로그인 페이지로 이동합니다.")
            window.location.href = "login.html"
        })


    
    lastSubmit.addEventListener('click', function(e){
      const isGenderChecked = checkGender();

      e.preventDefault()

      
      if(idInput.value.trim() === "") alert('아이디를 입력해주세요');
      else if(passwordInput.value.trim() === "") alert('비밀번호를 입력해주세요');
      else if(nameInput.value.trim() === "") alert('이름을 입력해주세요');
      else if(birthInput.value.trim() === "") alert('생년월일을 입력해주세요');
      else if(!isGenderChecked) alert("성별을 체크해주세요");
      else if(phoneNumInput.value.trim() === "") alert('휴대전화번호를 입력해주세요');
      else if(veriInput.value.trim() === "") alert('인증번호를 입력해주세요');
      else alert('가입이 완료되었습니다'), window.location.href = 'login.html';
    })

    
    
  });