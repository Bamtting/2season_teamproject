$(document).ready(function () {
  $(".js-click-modal").click(function () {
    $(".studio_container").addClass("modal-open");
  });

  $(".js-close-modal").click(function () {
    $(".studio_container").removeClass("modal-open");
  });
  $(".js-click-modal01").click(function () {
    $(".studio_container01").addClass("modal-open");
  });

  $(".js-close-modal01").click(function () {
    $(".studio_container01").removeClass("modal-open");
  });
});
