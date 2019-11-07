
//FANCY BOX - And our mobile Menu
$(function() {

    $('.trigger').on('click', function(e) {
      e.preventDefault();
      $('body').toggleClass('menu-is-open');
    });

    $('[data-fancybox="gallery"]').fancybox({
      loop:true,
      arrows:true,
      infobar:false,
      toolbar:true,
      transitionEffect: "fade",
      transitionDuration: 366,
      animationEffect: "zoom",
      animationDuration: 366,
    });
  
  });