// CHANGING HEADER BACKGROUND-COLOR & SIZE  FUNCTION
$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 10) {
      $("header").css("background-color", "#272727") && $("header").css("height", "16vh");
    } else {
      $("header").css("background-color", "#272727") && $("header").css("height", "20vh");
    }
  })
})

// NOW I'M THINKING THAT THAT SCRITP IS CRAP :) I'M GONNA CHANGE THAT TO, ADD CLASS SCRIPT... HMM
