// Must wait until DOM is ready before initiating the modules.
// http://stackoverflow.com/questions/9899372/pure-javascript-equivalent-to-jquerys-ready-how-to-call-a-function-when-the
// http://stackoverflow.com/questions/10886190/check-if-a-div-does-not-exist-with-javascript
docReady(function() {
    console.log("DOM is ready. Let's party");
    $(document).foundation();

  // Initialize Swiper: banner
    var swiper = new Swiper('#banner .swiper-container', {
        pagination: '#banner .swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        keyboardControl: true,
        nextButton: '#banner .swiper-button-next',
        prevButton: '#banner .swiper-button-prev',
    });

    // Initialize Swiper: container
    var swiper2 = new Swiper('#swiper2 .swiper-container', {
        pagination: '#swiper2 .swiper-pagination',
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 30,
        freeMode: true,
        keyboardControl: false,
        grabCursor: true,
        loop: true,
        nextButton: '#swiper2 .swiper-button-next',
        prevButton: '#swiper2 .swiper-button-prev',
    });

    // Fade in the swiper arrow buttons.
    $("#banner").hover(function() {
      var selector = $(".swiper-arrow");
      $(selector).fadeTo(500, 1);
      $(selector).css("display", "block");
    }, function() {
      var selector = $(".swiper-arrow");
      $(selector).fadeTo(500, 0, function(){
        $(selector).css("display", "none");
      });
    });

    // Fade in the overlay when hover on the navbar.
    // https://stackoverflow.com/questions/45284520/css-change-the-style-of-another-element-when-a-link-is-hovered
    $(".navbar-items[data-opacity-target]").hover(function() {
      var selector = $(this).data("opacity-target");
      $(selector).fadeTo(500, 1);
      // $(selector).css("display", "block");
    }, function() {
      var selector = $(this).data("opacity-target");
      $(selector).fadeTo(500, 0, function(){
        $(selector).css("display", "none");
      });
    });

    // Adjust the margin of each dropdown menu so it is centred.
    var fixed = 200;
    $(".navbar-items > li > a").not(".language").each(function(){
        var thisWidth = $(this).outerWidth(true);
        var calc = (fixed - thisWidth) / 2;
        $(this).siblings( "ul" ).css('margin-left', -calc);
    });
});
