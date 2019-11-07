/* ATTENTION !
   THIS PAGE USES jQuery AND THE FUNCTIONS FROM THE FILE "functions.js"
   BE SURE TO INSERT jQuery and "functions.js" BEFORE USING THE SCRIPTS BELOW
*/


/**
 * jQuery
 * --------------------------------------------------------------
 * On document ready, do this...
 */
/*START jQuery Code*/
$(function() {
	
	
	/* CONDITIONAL VARS
	-----------------------------------------------------*/
	var is_index = $("#index")[0];
	
	
	/* OPEN/CLOSE MENU ON CLICK
	-----------------------------------------------------*/
	// OPEN MENU
	$("#open-menu").on("click", function(e) {

		$("#header").addClass("menu-is-open");
		$(window).disableScroll();
		
	});
	
	
	// CLOSE MENU
	$("#close-menu").on("click", function(e) {
		
		$("#header").removeClass("menu-is-open");
		$(window).enableScroll();
		
	});
	


  /* ON SCROLL (SMART !)
  -----------------------------------------------------*/
  if(is_loaded("scrollEnd") && is_index) {

		//When the scroll stops
    $(window).scrollEnd(function() {

			scroll_sniffer();

  	}, 36);

  } //END ON SCROLL END
	
	
});