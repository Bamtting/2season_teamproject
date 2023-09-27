window.addEventListener("load", function () {
    const loginForm = document.getElementById("login-form");
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault()
            const username = document.getElementById("loginId").value;
            const password = document.getElementById("loginPassword").value;
            const users = JSON.parse(localStorage.getItem("users")) || [];
            const authenticatedUser = users.find(
                (user) => user.username === username && user.password === password
            );
            if (authenticatedUser) {
                alert("로그인이 성공하였습니다.");
                // encodeURIComponent(username)사용자이름에 공백이나 특수 문자와 같은 문자가 포함될 수 있으니
                window.location.href = "index.html?username=" + encodeURIComponent(username);
            } else {
                alert("로그인 정보가 올바르지 않습니다. 다시 시도해주세요.");
                loginForm.reset();
            }
        });

})