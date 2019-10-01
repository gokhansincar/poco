/**
 * jQuery-viewport-checker - v1.8.7 - 2015-12-17
 * https://github.com/dirkgroenen/jQuery-viewport-checker
 *
 * Copyright (c) 2015 Dirk Groenen
 * Licensed MIT <https://github.com/dirkgroenen/jQuery-viewport-checker/blob/master/LICENSE>
 */

!function(a){a.fn.viewportChecker=function(b){var c={classToAdd:"visible",classToRemove:"invisible",classToAddForFullView:"full-visible",removeClassAfterAnimation:!1,offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(a,b){},scrollHorizontal:!1,scrollBox:window};a.extend(c,b);var d=this,e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()},f=-1!=navigator.userAgent.toLowerCase().indexOf("webkit")||-1!=navigator.userAgent.toLowerCase().indexOf("windows phone")?"body":"html";return this.checkElements=function(){var b,g;c.scrollHorizontal?(b=a(f).scrollLeft(),g=b+e.width):(b=a(f).scrollTop(),g=b+e.height),d.each(function(){var d=a(this),f={},h={};if(d.data("vp-add-class")&&(h.classToAdd=d.data("vp-add-class")),d.data("vp-remove-class")&&(h.classToRemove=d.data("vp-remove-class")),d.data("vp-add-class-full-view")&&(h.classToAddForFullView=d.data("vp-add-class-full-view")),d.data("vp-keep-add-class")&&(h.removeClassAfterAnimation=d.data("vp-remove-after-animation")),d.data("vp-offset")&&(h.offset=d.data("vp-offset")),d.data("vp-repeat")&&(h.repeat=d.data("vp-repeat")),d.data("vp-scrollHorizontal")&&(h.scrollHorizontal=d.data("vp-scrollHorizontal")),d.data("vp-invertBottomOffset")&&(h.scrollHorizontal=d.data("vp-invertBottomOffset")),a.extend(f,c),a.extend(f,h),!d.data("vp-animated")||f.repeat){String(f.offset).indexOf("%")>0&&(f.offset=parseInt(f.offset)/100*e.height);var i=f.scrollHorizontal?d.offset().left:d.offset().top,j=f.scrollHorizontal?i+d.width():i+d.height(),k=Math.round(i)+f.offset,l=f.scrollHorizontal?k+d.width():k+d.height();f.invertBottomOffset&&(l-=2*f.offset),g>k&&l>b?(d.removeClass(f.classToRemove),d.addClass(f.classToAdd),f.callbackFunction(d,"add"),g>=j&&i>=b?d.addClass(f.classToAddForFullView):d.removeClass(f.classToAddForFullView),d.data("vp-animated",!0),f.removeClassAfterAnimation&&d.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){d.removeClass(f.classToAdd)})):d.hasClass(f.classToAdd)&&f.repeat&&(d.removeClass(f.classToAdd+" "+f.classToAddForFullView),f.callbackFunction(d,"remove"),d.data("vp-animated",!1))}})},("ontouchstart"in window||"onmsgesturechange"in window)&&a(document).bind("touchmove MSPointerMove pointermove",this.checkElements),a(c.scrollBox).bind("load scroll",this.checkElements),a(window).resize(function(b){e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()},d.checkElements()}),this.checkElements(),this}}(jQuery);


/**
 * GET VIEWPORT W / H
 * --------------------------------------------------
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

	return [viewPortWidth, viewPortHeight]; //arr

}


/**
 * Scroll Position Sniffer
 * --------------------------------------------------
 */
function scroll_sniffer(distance_cible) {
  var scroll = $(window).scrollTop();

  if(scroll >= distance_cible) {
    $("body").addClass("is-scrolled");
  } else {
    $("body").removeClass("is-scrolled");
  }
}

/**
 * Sniffer and info Viewport
 * --------------------------------------------------
 */
 function viewport_info() {
   var  W = $(this).width(),
        H = $(this).height(),
        R = W/H,
        output = $('#viewport-info').length ? $('#viewport-info').empty() : $('<div />', { id: 'viewport-info', style: 'background:rgba(0,0,0,.8); color:#f5f5f5; padding:10px 20px; position:fixed; right:0; bottom:0; z-index:999;' }).appendTo('body'),
        pW = $('<p />', { text: 'W: ' + W }).appendTo(output),
        pH = $('<p />', { text: 'H: ' + H }).appendTo(output),
        pR = $('<p />', { text: 'R: ' + R.toFixed(2) }).appendTo(output);

		return [W, H]; //arr
 }
