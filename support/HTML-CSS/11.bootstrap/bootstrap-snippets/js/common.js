/**
 * jQuery
 * --------------------------------------------------------------
 * On document ready, do this...
 */
$(function() {

  var viewport_arr, viewportW, viewportH;

  /* HAMBURGER CLICK
  -------------------------------------*/
  $('.hamburger').click(function() {
    $(this).toggleClass('active');
    $('.overlay, .nav-content').toggleClass('open');
  });


  /* ON RESIZE
  -------------------------------------*/
  $(window).smartresize(function(){

    //Get Viewport
		viewport_arr = getViewport();
		viewportW = viewport_arr[0]; //console.log("Viewport width: " + viewportW);
		viewportH = viewport_arr[1]; //console.log("Viewport height: " + viewportH);

    //Remove Navigation open class
    if(viewportW >= 768) {
      $('.hamburger').removeClass('active');
      $('.overlay, .nav-content').removeClass('open');
    }

  });


})


/*============================== FUNCTIONS ==============================*/


/**
 * GET VIEWPORT Width & Height
 * --------------------------------------------------------------
 * Cross Browser viewport size
 * @return array
 * https://stackoverflow.com/a/2035211
 */
function getViewport() {

	var viewPortWidth;
	var viewPortHeight;

	//the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
	if(typeof window.innerWidth != 'undefined') {
		viewPortWidth = window.innerWidth,
		viewPortHeight = window.innerHeight
	}

	//IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
	else if(typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
		viewPortWidth = document.documentElement.clientWidth,
		viewPortHeight = document.documentElement.clientHeight
	}

	//older versions of IE
	else {
		viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
		viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
	}

 	VW = viewPortWidth;
	VH = viewPortHeight;

	return [viewPortWidth, viewPortHeight]; //arr

}


/**
 * SMART RESIZE
 * --------------------------------------------------------------
 * Call a function only once, at resize end
 * http://www.paulirish.com/2009/throttled-smartresize-jquery-event-handler/
 */
(function($, sr){

  //debouncing function from John Hann
  //http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function(func, threshold, execAsap) {

		var timeout;

		return function debounced() {

			var obj = this, args = arguments;

			function delayed () {
				if(!execAsap)
					func.apply(obj, args);
				timeout = null;
			};

			if(timeout)
				clearTimeout(timeout);
			else if(execAsap)
				func.apply(obj, args);

			timeout = setTimeout(delayed, threshold || 100);

		}; //end debounced

  } //end debounce

  //smartresize
  jQuery.fn[sr] = function(fn) { return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');


/**
 * ON END SCROLLING
 * --------------------------------------------------------------
 * Detect when scrolling stops
 */
$.fn.scrollEnd = function(callback, timeout) {

  $(this).scroll(function() {

    var $this = $(this);

    if($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }

    $this.data('scrollTimeout', setTimeout(callback,timeout));

  });

};
