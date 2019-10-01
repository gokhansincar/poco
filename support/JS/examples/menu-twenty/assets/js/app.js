/* WARNING !
    THIS PAGE USES jQuery AND FILE FUNCTIONS "functions.js"
    BE SURE TO INSERT "jQuery" and "functions.js" BEFORE USING THE SCRIPTS BELOW
*/


/**
 * jQuery
 * --------------------------------------------------------------
 * On document ready, do this...
 * Before using the code below you need to install jQuery!
 */
/*START jQuery Code*/
$(function() {
	
	
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
	
	
});