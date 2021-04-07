// ********************************************* Menu Sandwich Click
(function($){
    $(function() {
      $('.menu__icon').on('click', function() {
        $(this).closest('.menu').toggleClass('menu_state_open');
      });
    });
  })(jQuery);
// ********************************************* Smooth Scroll
$(function(){
  $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();

      let sc = $(this).attr("href"),
          dn = $(sc).offset().top;
      $('html, body').animate({scrollTop: dn}, 1000);
  });
});

