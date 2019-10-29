//jQuery ON DOCUMENT READY 
//Every jQuery related code will be inside this function
// $(document).ready(function () {

// });

//Shorthand version
$(function() {


    // console.log("The DOM is ready !");
    $("#main-title").on('click', function() {
        console.log("I just used an event ! ");
    });
});