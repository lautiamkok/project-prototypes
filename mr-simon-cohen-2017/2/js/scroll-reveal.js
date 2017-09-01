// $( document ).ready(function() {});
$(function() {

    // Affix.
    var widthStart = $("div.anchor-parent").innerWidth();
    $('.anchor-navbar').width(widthStart);

    $(window).resize(function(){
        var widthResize = $("div.anchor-parent").innerWidth();
        $('.anchor-navbar').width((widthResize));
    });

    var element = document.getElementById("anchor-navbar");
    if (element !== null) {

        var anchorNavbar = $( ".anchor-navbar" );
        var position = anchorNavbar.position();
        var outerHeight = anchorNavbar.outerHeight();
        var main = $("#main");
        var buttonHome = $(".button-home-anchor");
        window.addEventListener('scroll', function() {
            var height = $(window).scrollTop();
            if((height + outerHeight) > position.top) {
                anchorNavbar.css('position', 'fixed');
                main.css('padding-top', outerHeight);
                buttonHome.css('visibility', 'visible');
            } else {
                anchorNavbar.css('position', 'relative');
                main.css('padding-top', '0');
                buttonHome.css('visibility', 'hidden');
            }
        });
    }

    // $('#section1-heading1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //   $('#section1-video1').addClass('animated fadeIn');
    // });

    // change behaviour of controller to animate scroll instead of jump
    scrollMagicController.scrollTo(function (newpos) {
      TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
    });

    //  bind scroll to anchor links
    $(document).on("click", "a[href^='#']", function (e) {
      var id = $(this).attr("href");
      if ($(id).length > 0) {
        e.preventDefault();

        // trigger scroll
        scrollMagicController.scrollTo(id);

          // if supported by the browser we can even update the URL.
        if (window.history && window.history.pushState) {
          history.pushState("", document.title, id);
        }
      }
    });

    // Stop carousel from auto slide.
    $('.carousel').carousel({
        interval: false
    });

    // Add swipe to carousel.
    // $("#myCarousel").swiperight(function() {
    //   $(this).carousel('prev');
    // });
    // $("#myCarousel").swipeleft(function() {
    //   $(this).carousel('next');
    // });

});
