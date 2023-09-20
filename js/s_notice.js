$(document).ready(function(){
  $(function(){
      $.fn.extend({
        faq: function(){
          var ts = $(this);
          $.each(ts, function(i, o){
            $("button", o).on("click", faqHanddler);
            function faqHanddler(){
              var faqContent = $(this).parent().next();

              if (faqContent.is(":hidden")) {
                $("li>div:visible", o).slideUp(300); // 사라지는 트랜지션 효과
                faqContent.slideDown(300, function() {
                  // 슬라이드 다운 완료 후 높이 트랜지션 적용
                  faqContent.animate({ height: "auto" }, 300);
                });
              } else {
                $("li>div:visible", o).slideUp(300); // 사라지는 트랜지션 효과
              }
            };
          });
        }
      });
      $(".faq").faq();
    });
})