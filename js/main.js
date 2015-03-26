jQuery(document).ready(function() {
  // Hero Parallax
  var s = skrollr.init({
    // Don't ensure the viewport has enough room. Keep it tight.
    forceHeight:false,
    // No catch-up please
    smoothScrolling:true,
    mobile: true,
  });
});

(function($) {
  $(document).ready(function() {

    if ($('#party-teaser').length) {
      $('#party-teaser').find('.person a').on('click', function(e) {
        e.preventDefault();
        var person = $(this).attr('href');
        console.log($(person).offset().top);
        $("html, body, .sidy__content").animate({scrollTop: $(person).offset().top}, 500);
      });
    }


  });
})(jQuery);