$(document).ready(function () {
  $(".return").click(function () {
    $(this).fadeOut("slow", function () {
      $(this).fadeIn("fast");
    });
  });
});
