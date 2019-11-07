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


  /* VARIABLES D'INITIALISATION
  -----------------------------------------------------*/
  //VIEWPORT
  var viewport_arr, viewportW, viewportH;

  //WHAT PAGE WE ARE ?
  var is_page_header_anim				= $('body').hasClass('page-header-anim'); //true or false si le body contient cette classe !
  var is_page_scroll_top				= $('body').hasClass('page-scroll-top');
  var is_page_viewport_checker	= $('body').hasClass('page-viewport-checker');
  var is_page_animated_numbers	= $('body').hasClass('page-animated-numbers');


  /* ON LOAD et ON RESIZE, DO STUFF (SMART !)
   * Adds a "mobile" class if the width is <= 800 and removes the "desktop" class if present
   * Add a "desktop" class if the width is> 800 and remove the "mobile" class if present
   * Super useful for responsive sites
   * Used for the demo pages "fixed-flexible-header-on-scroll.html" and "scroll-to-top.html"
  -----------------------------------------------------*/
  var do_stuff = function() {

    //Get Viewport Dimensions - Check if function exists first !
		viewport_arr = is_function(getViewport) ? getViewport() : []; //console.log(viewport_arr);

    //Get viewport Width
    viewportW = viewport_arr[0]; //console.log("Viewport width: " + viewportW);

    //Get viewport Height
    viewportH = viewport_arr[1]; //console.log("Viewport height: " + viewportH);

    //If the width of the viewport <= 800
    if(viewportW <= 800) {
      $('body').removeClass('desktop').addClass('mobile');
      //autres trucs ici pour mobile ?
    }
    //If the width of the viewport > 800
    else {
      $('body').removeClass('mobile').addClass('desktop');
      //autres trucs ici pour desktop ?
    }

  };

  //Execute the code of the "do_stuff" function when the page is loaded
  $(window).on("load", do_stuff);

  //Execute the code of the "do_stuff" function when the page is resized
  if(is_loaded("smartresize")) {
    $(window).smartresize(do_stuff);
  }


  /* ON SCROLL (SMART !)
   * Adds an "is-scrolled" class when the scroll is> = 100px
   * Used for the demo page "fixed-flexible-header-on-scroll.html"
  -----------------------------------------------------*/
  //START ON SCROLL END
  if(is_loaded("scrollEnd")) {

    $(window).scrollEnd(function() {

      if(is_function(scroll_sniffer)) {

        //For the demo page "fixed-flexible-header-on-scroll.html"
        if(is_page_header_anim) {
    		  scroll_sniffer(100); //Appelez la fonction scroll_sniffer avec le parametre "top_distance" = 100px
        }

        //For the demo page "scroll-to-top.html"
        if(is_page_scroll_top) {
    		  scroll_sniffer(viewportH / 2); //Appelez la fonction scroll_sniffer avec le parametre "top_distance" = hauteur viewport / 2
        }

      }


  	});

  } //END ON SCROLL END


  /* SCROLL TO TOP
   * Back to the top of the page with an animation
   * Used for the demo page "scroll-to-top.html"
  -----------------------------------------------------*/
  $('.to-top').on("click", function(e) {
    $('body,html').animate({ scrollTop: 0 }, 400);
    return false;
  });


  /* ADD classes when the section is visible
   * Used for "viewport-checker-animation.html" and
   * animated-numbers.html" demos
	-----------------------------------------------------*/
  //CHECK IF THE PLUGIN "viewportChecker" IS CHARGED!
  if(is_loaded("viewportChecker")) {

    //IF THE PAGE IS "viewport-checker-animation.html"
    if(is_page_viewport_checker) {

      //FOR ALL SECTIONS
      $('section').addClass("hidden").viewportChecker({
    		classToAdd: 'animated fadeIn', //Les classes ajoutées quand l'élément est visible
    		classToRemove: 'hidden', //Les classes enlevées quand l'élément est en dehors du viewport
    		repeat: false, //repeter les animations à chaque fois quand l'élément arrive dans le viewport ?
    		offset: 100 //active les classes seulement quand l'élément est rentré dans le viewport d'au moins 100px
    	});

      //FOR ALL SECTION TITLES
    	$('section h2').viewportChecker({
    		classToAdd: 'animated slideInDown',
        repeat: false,
    		offset: 80
    	});

      //FOR PARAGRAPHS OF SECTION 1
      $('.section-1 p').addClass("hidden").viewportChecker({
    		classToAdd: 'animated fadeInLeft',
        classToRemove: 'hidden',
    	});

      //PFOR PARAGRAPHS OF SECTION 2
      $('.section-2 p').addClass("hidden").viewportChecker({
    		classToAdd: 'animated fadeInRight',
        classToRemove: 'hidden',
    	});

      //FOR PARAGRAPHS OF SECTION 3
      $('.section-3 p').addClass("hidden").viewportChecker({
    		classToAdd: 'animated fadeInUp',
        classToRemove: 'hidden',
    	});

    } //END CODE PAGE "viewport-checker-animation.html"


    //IF THE PAGE IS "animated-numbers.html"
    if(is_page_animated_numbers) {

      //GET THE TEXT FROM ATTRIBUTE "data-numbers"
      var numbers = $('.count-up').data('numbers'); //Ex. [722, 160, 536, 94]

      //CHECK IF THE VAR "numbers" IS ARRAY - If it contains this structure: [xx, yy, zz]
      var has_data_numbers = $.isArray(numbers)//Vanilla JavaScript: (numbers instanceof Array);

      //INITIALIZE THE COUNTER
      var n = 0;

      //ACTIVATE THIS LINE if you want to see another text before starting the animation!
      //THIS WORKS ONLY IF THE ATTRIBUTE "data-numbers" IS PRESENT!
      //Replace "0" with "---" or any text ...
      $('.count-up h3').text("0");

      //TARGET ViewportChecker CLASS ".count-up"
  		$('.count-up').viewportChecker({

  			offset: 300,
  			repeat: false,
        removeClassAfterAnimation: true,

        //START callbackFunction
  			callbackFunction: function(elem, action) {

          //START LOOP - A loop on all elements "h3" in "count-up"
  				$('.count-up h3').each(function () {

            //IF "data-numbers" CONTAINS AN ARRAY
            if(has_data_numbers) {
              var num_value = numbers[n];
            }

            //IF NO, $(this).text () fetches the text of the h3 element
            else {
              var num_value = $(this).text();
            }

  					//CREEZ A NEW INSTANCE OF THE CountUp Plugin (the code is in functions.js)
            //Between the parentheses enter the PARAMETERS of the CountUp (in this order!):
            //this => target (the h3 element), 0 => value at the beginning, num_value => value at the end, 0 => decimals, 4 => duration in seconds
  					var number_anim = new CountUp(this, 0, num_value, 0, 4);

            //START ANIMATION (if no error)
  					if(!number_anim.error) {
  						number_anim.start();
  					}

            //COUNTER INCREMENT
            //At each passing of the loop n++ adds 1 to the existing value (at the beginning it is 0, in continuation 1, etc)
            n++;

  				}); //END LOOP

  			} //END callbackFunction

  		}); //END ViewportChecker

    } //END CODE PAGE "animated-numbers.html"

  } //END IS LOADED "viewportChecker"


}); //END jQuery Code
