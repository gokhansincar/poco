$(document).ready(function() {

  // Initializing collapse plugin
  // with custom open/close methods,
  // persistence plugin and accordion behaviour
  $(".collapse").collapse({
    
    open: function() {
      // The context of 'this' is applied to
      // the collapsed details in a jQuery wrapper
      this.slideDown(500);
    },
    
    close: function() {
      this.slideUp(300);
    },
    
    accordion: true,
    persist: true
    
  });

});