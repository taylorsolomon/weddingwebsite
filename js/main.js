(function($) {


  $(document).ready(function($) {
    // Hero Parallax
    var s = skrollr.init({
      // Don't ensure the viewport has enough room. Keep it tight.
      forceHeight:false,
      // No catch-up please
      smoothScrolling:true,
      mobile: true,
    });
  });
})(jQuery);

