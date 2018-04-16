// CHANGING HEADER BACKGROUND-COLOR & SIZE  FUNCTION
$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 10) {
      $("header").css("background-color", "#f2b632") && $("header").css("height", "12vh");
    } else {
      $("header").css("background-color", "transparent") && $("header").css("height", "20vh");
    }
  })
})
