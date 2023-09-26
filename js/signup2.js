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
  });