// CHANGING HEADER BACKGROUND COLOR FUNCTION
$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 140) {
      $("header").css("background-color", "#e85151");
    } else {
      $("header").css("background-color", "transparent");
    }
  })
})
