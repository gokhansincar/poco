// ON DOC READY
$(function() {

	//Détection scroll
	$(window).on("scroll", function(e) {
	  if($(window).scrollTop() >= 100) {
	    $("body").addClass("is-scrolled");
	  } else {
	    $("body").removeClass("is-scrolled");
	  }
	});

});
