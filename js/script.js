
// CHANGING HEADER BACKGROUND COLOR FUNCTION
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 140) {
	    $(".color").css("background-color" , "#e85151");
	  }
	  else{
		  $(".color").css("background-color" , "transparent");
	  }
  })
})
