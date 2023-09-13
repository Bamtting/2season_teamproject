$(document).ready(function(){
    $(function(){
      $.fn.extend({
        faq: function(){
          var ts = $(this);
          $.each(ts, function(i, o){
            $("button", o).on("click", faqHanddler);
            function faqHanddler(){
              if($(this).parent().next().is(":hidden")){
                $("li>div:visible", o).hide();
                $(this).parent().next().show();
              }else{$("li>div:visible", o).hide()}
            };
          });
        }
      });
      $(".faq").faq();
    });
});