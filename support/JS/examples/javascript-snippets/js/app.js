/* ATTENTION !
   CETTE PAGE UTILISE jQuery ET LES FONCTIONS DU FICHIER "functions.js"
   VEILLEZ A INSERER jQuery et "functions.js" AVANT D'UTILISER LES SCRIPTS CI-DESSOUS
*/


/**
 * jQuery
 * --------------------------------------------------------------
 * On document ready, do this...
 * Avant d'utiliser le code ci-dessous il faut installer jQuery !
 */
/*START jQuery Code*/
$(function() {


  /* VARIABLES D'INITIALISATION
  -----------------------------------------------------*/
  //VIEWPORT
  var viewport_arr, viewportW, viewportH;

  //DANS QUELLE PAGE ON EST ?
  var is_page_header_anim				= $('body').hasClass('page-header-anim'); //true or false si le body contient cette classe !
  var is_page_scroll_top				= $('body').hasClass('page-scroll-top');
  var is_page_viewport_checker	= $('body').hasClass('page-viewport-checker');
  var is_page_animated_numbers	= $('body').hasClass('page-animated-numbers');


  /* ON LOAD et ON RESIZE, DO STUFF (SMART !)
   * Ajoute une classe "mobile" si la largeur est <= à 800 et enleve la class "desktop" si presente
   * Ajoute une classe "desktop" si la largeur est > que 800 et enleve la class "mobile" si presente
   * Super utile pour des sites responsive
   * Utilisé pour les démos "header-fixe-flexible-on-scroll.html" et "scroll-to-top.html"
  -----------------------------------------------------*/
  var do_stuff = function() {

    //Get Viewport Dimensions - Check if function exists first !
		viewport_arr = is_function(getViewport) ? getViewport() : []; //console.log(viewport_arr);

    //Get viewport Width
    viewportW = viewport_arr[0]; //console.log("Viewport width: " + viewportW);

    //Get viewport Height
    viewportH = viewport_arr[1]; //console.log("Viewport height: " + viewportH);

    //Si la largeur du viewport <= 800
    if(viewportW <= 800) {
      $('body').removeClass('desktop').addClass('mobile');
      //autres trucs ici pour mobile ?
    }
    //Si la largeur du viewport > 800
    else {
      $('body').removeClass('mobile').addClass('desktop');
      //autres trucs ici pour desktop ?
    }

  };

  //Executer le code de la fonction "do_stuff" quand la page est chargée
  $(window).on("load", do_stuff);

  //Executer le code de la fonction "do_stuff" quand la page est redimensionée
  if(is_loaded("smartresize")) {
    $(window).smartresize(do_stuff);
  }


  /* ON SCROLL (SMART !)
   * Ajoute une classe "is-scrolled" quand le scroll est >= 100px
   * Utilisé pour la démo "header-fixe-flexible-on-scroll.html"
  -----------------------------------------------------*/
  //START ON SCROLL END
  if(is_loaded("scrollEnd")) {

    $(window).scrollEnd(function() {

      if(is_function(scroll_sniffer)) {

        //Pour la page "header-fixe-flexible-on-scroll.html"
        if(is_page_header_anim) {
    		  scroll_sniffer(100); //Appelez la fonction scroll_sniffer avec le parametre "top_distance" = 100px
        }

        //Pour la page "scroll-to-top.html"
        if(is_page_scroll_top) {
    		  scroll_sniffer(viewportH / 2); //Appelez la fonction scroll_sniffer avec le parametre "top_distance" = hauteur viewport / 2
        }

      }


  	});

  } //END ON SCROLL END


  /* SCROLL TO TOP
   * Returne en haut de la page avec une animation
   * Utilisé pour la démo "scroll-to-top.html"
  -----------------------------------------------------*/
  $('.to-top').on("click", function(e) {
    $('body,html').animate({ scrollTop: 0 }, 400);
    return false;
  });


  /* AJOUTER des classes quand la section est visible
   * Utilisé pour les démos "viewport-checker-animation.html"
   * et "animated-numbers.html"
	-----------------------------------------------------*/
  //VERIFIEZ SI LE PLUGIN "viewportChecker" EST CHARGÉ !
  if(is_loaded("viewportChecker")) {

    //SI LA PAGE EST "viewport-checker-animation.html"
    if(is_page_viewport_checker) {

      //POUR TOUTES LES SECTIONS
      $('section').addClass("hidden").viewportChecker({
    		classToAdd: 'animated fadeIn', //Les classes ajoutées quand l'élément est visible
    		classToRemove: 'hidden', //Les classes enlevées quand l'élément est en dehors du viewport
    		repeat: false, //repeter les animations à chaque fois quand l'élément arrive dans le viewport ?
    		offset: 100 //active les classes seulement quand l'élément est rentré dans le viewport d'au moins 100px
    	});

      //POUR TOUS LES TITRES DE SECTIONS
    	$('section h2').viewportChecker({
    		classToAdd: 'animated slideInDown',
        repeat: false,
    		offset: 80
    	});

      //POUR LES PARAGRAPHES DE LA SECTION 1
      $('.section-1 p').addClass("hidden").viewportChecker({
    		classToAdd: 'animated fadeInLeft',
        classToRemove: 'hidden',
    	});

      //POUR LES PARAGRAPHES DE LA SECTION 2
      $('.section-2 p').addClass("hidden").viewportChecker({
    		classToAdd: 'animated fadeInRight',
        classToRemove: 'hidden',
    	});

      //POUR LES PARAGRAPHES DE LA SECTION 3
      $('.section-3 p').addClass("hidden").viewportChecker({
    		classToAdd: 'animated fadeInUp',
        classToRemove: 'hidden',
    	});

    } //END CODE PAGE "viewport-checker-animation.html"


    //SI LA PAGE EST "animated-numbers.html"
    if(is_page_animated_numbers) {

      //RECUPERER LE TEXTE DE l'ATTRIBUT "data-numbers"
      var numbers = $('.count-up').data('numbers'); //Ex. [722, 160, 536, 94]

      //VERIFIER SI LA VAR "numbers" EST ARRAY - Si elle contient bien cette structure: [xx, yy, zz]
      var has_data_numbers = $.isArray(numbers)//Variante pure JavaScript: (numbers instanceof Array);

      //INITIALIZEZ LE COUNTER
      var n = 0;

      //ACTIVEZ CETTE LIGNE si vous voulez voir un autre texte avant de commencer l'animation !
      //CECI MARCHE SEULEMENT SI L'ATTRIBUT "data-numbers" EST PRESENT !
      //Remplacez "0" avec "---" ou n'importe quel texte...
      $('.count-up h3').text("0");

      //CIBLE ViewportChecker LA CLASSE ".count-up"
  		$('.count-up').viewportChecker({

  			offset: 300,
  			repeat: false,
        removeClassAfterAnimation: true,

        //START callbackFunction
  			callbackFunction: function(elem, action) {

          //START LOOP - Une boucle sur tous les éléments "h3" dans "count-up"
  				$('.count-up h3').each(function () {

            //SI "data-numbers" CONTIENT UN ARRAY
            if(has_data_numbers) {
              var num_value = numbers[n];
            }

            //SI NON, $(this).text() recupère le texte de l'élément h3
            else {
              var num_value = $(this).text();
            }

  					//CREEZ UNE NOUVELLE INSTANCE DU CountUp Plugin (le code est dans functions.js)
            //Entre les parenthèses rentrez les PARAMETRES du CountUp (dans cet ordre !) :
            //this => cible (l'élément h3), 0 => valeur au début, num_value => valeur à la fin, 0 => décimales, 4 = durée en secondes
  					var number_anim = new CountUp(this, 0, num_value, 0, 4);

            //DEMAREZ L'ANIMATION (si pas d'erreur)
  					if(!number_anim.error) {
  						number_anim.start();
  					}

            //INCREMENTATION DU COUNTER
            //A chaque passage de la boucle n++ ajoute 1 à la valeur existante (au début c'est 0, en suite 1, etc)
            n++;

  				}); //END LOOP

  			} //END callbackFunction

  		}); //END ViewportChecker

    } //END CODE PAGE "animated-numbers.html"

  } //END IS LOADED "viewportChecker"


}); //END jQuery Code
