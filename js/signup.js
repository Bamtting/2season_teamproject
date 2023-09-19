window.addEventListener("load", function () {
    const btn_member = document.querySelector("#submit")
    const chk_all = document.querySelector("#checkAll")
    const chk_member1 = document.querySelector("#check1")
    const chk_member2 = document.querySelector("#check2")
    const chk_member3 = document.querySelector("#check3")
    const chk_member4 = document.querySelector("#check4")

    btn_member.addEventListener("click", () => {
        if(chk_member1.checked !== true){
            alert('이용약관에 동의해 주셔야 가입이 가능합니다.')
            return false
        }
        if(chk_member2.checked !== true){
            alert('개인정보 수집 및 이용에 동의해 주셔야 가입이 가능합니다.')
            return false
        }
    })
})