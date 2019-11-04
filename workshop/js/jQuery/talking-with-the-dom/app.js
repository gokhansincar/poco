// OPEN MENU - VANILLA js variante

// const body = document.querySelector("body");
// const openMenu = document.querySelector("#open-menu");
// const closeMenu = document.querySelector("#close-menu");

// openMenu.addEventListener('click', function() {
//   body.classList.add('menu-is-open');
// });
// closeMenu.addEventListener('click', function() {
//   body.classList.remove('menu-is-open');
// });

//OPEN MENU - jQuery version

$(function () {

    $('.trigger').on('click', function(e) {
        e.preventDefault();
        $('body').toogleClass('menu-is-open');
    });

    // Hide Element
    // $('footer').hide();

    // Remove Element
    // $('header').remove();

    // FadeIn / FadeOut Element
    // $('main').fadeIn(2000, function () {
    //     $('header').fadeOut(2000);
    // });
   
    $('#section-1').css({
        width: 0,
        opacity:0,
    });

    $('header h2').on('click', function(){
        // $('#section-1').slideToggle(500);
        $('#section-1').animate({
            width: '100%',
            opacity: 1,
        },5000);
    });

});
