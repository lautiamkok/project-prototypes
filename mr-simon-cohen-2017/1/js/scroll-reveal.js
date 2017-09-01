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

    // SCENES //

    // Init controller
    var scrollMagicController = new ScrollMagic.Controller({
      globalSceneOptions: {
        // duration: 100
      }
    });

    // section-2 //

    // section2-heading1
    var elemSection2Heading1 = document.getElementById("section2-heading1");
    TweenMax.set(elemSection2Heading1, {bottom:'-30px', opacity: 0, position: 'relative'});

    var tweenSection2Heading1 = TweenMax.to(elemSection2Heading1, 0.5, {
        bottom: 0,
        opacity:1,
        ease: Linear.easeIn
    });

    var scene2 = new ScrollMagic.Scene({
         triggerElement: '#section1-arrow1-trigger',
    })
    .setTween(tweenSection2Heading1)
    .addTo(scrollMagicController);

    // section2-arrow1
    var elemSection2Arrow1 = document.getElementById("section2-arrow1");
    TweenMax.set(elemSection2Arrow1, {opacity: 0});

    var tweenSection2Arrow1 = TweenMax.to(elemSection2Arrow1, 0.5, {
        opacity:1,
        ease: Linear.easeNone
    });

    var scene2c = new ScrollMagic.Scene({
         triggerElement: '#section2-heading1-trigger',
    })
    .setTween(tweenSection2Arrow1)
    .addTo(scrollMagicController);

    // section-3 //

    // section3-heading1
    var elemSection3Heading1 = document.getElementById("section3-heading1");
    TweenMax.set(elemSection3Heading1, {bottom:'-30px', opacity: 0, position: 'relative'});

    var tweenSection3Heading1 = TweenMax.to(elemSection3Heading1, 1, {
        bottom: 0,
        opacity:1,
        ease: Linear.easeIn
    });

    var scene3 = new ScrollMagic.Scene({
        triggerElement: '#section2-arrow1-trigger',
    })
    .setTween(tweenSection3Heading1)
    .addTo(scrollMagicController);

    // section3-video1
    var elemSection3Video1 = document.getElementById("section3-video1");
    TweenMax.set(elemSection3Video1, {opacity: 0});

    var tweenSection3Video1 = TweenMax.to(elemSection3Video1, 0.5, {
        opacity:1,
        ease: Linear.easeNone
    });

    var scene3b = new ScrollMagic.Scene({
        triggerElement: '#section3-video1-trigger',
    })
    .setTween(tweenSection3Video1)
    .addTo(scrollMagicController);

    // section3-arrow1
    var elemSection3Arrow1 = document.getElementById("section3-arrow1");
    TweenMax.set(elemSection3Arrow1, {opacity: 0});

    var tweenSection3Arrow1 = TweenMax.to(elemSection3Arrow1, 0.5, {
        opacity:1,
        ease: Linear.easeNone
    });

    var scene2c = new ScrollMagic.Scene({
         triggerElement: '#section3-heading1-trigger',
    })
    .setTween(tweenSection3Arrow1)
    .addTo(scrollMagicController);

    // section-4 //

    // section4-heading1
    var elemSection4Heading1 = document.getElementById("section4-heading1");
    TweenMax.set(elemSection4Heading1, {bottom:'-30px', opacity: 0, position: 'relative'});

    var tweenSection4Heading1 = TweenMax.to(elemSection4Heading1, 1, {
        bottom: 0,
        opacity:1,
        ease: Linear.easeIn
    });

    var scene4 = new ScrollMagic.Scene({
        triggerElement: '#section3-arrow1-trigger',
    })
    .setTween(tweenSection4Heading1)
    .addTo(scrollMagicController);

    // section4-carousel1
    var elemSection4Carousel1 = document.getElementById("section4-carousel1");
    TweenMax.set(elemSection4Carousel1, {opacity: 0});

    var tweenSection4Carousel1 = TweenMax.to(elemSection4Carousel1, 0.5, {
        opacity:1,
        ease: Linear.easeNone
    });

    var scene4b = new ScrollMagic.Scene({
        triggerElement: '#section4-carousel1-trigger',
    })
    .setTween(tweenSection4Carousel1)
    .addTo(scrollMagicController);

    // section4-paragraph1
    var elemSection4Paragraph1 = document.getElementById("section4-paragraph1");
    TweenMax.set(elemSection4Paragraph1, {bottom:'-30px', opacity: 0, position: 'relative'});

    var tweenSection4Paragraph1 = TweenMax.to(elemSection4Paragraph1, 0.5, {
        bottom: 0,
        opacity:1,
        ease: Linear.easeNone
    });

    var scene4c = new ScrollMagic.Scene({
        triggerElement: '#section4-paragraph1-trigger',
    })
    .setTween(tweenSection4Paragraph1)
    .addTo(scrollMagicController);

    // section4-arrow1
    var elemSection4Arrow1 = document.getElementById("section4-arrow1");
    TweenMax.set(elemSection4Arrow1, {opacity: 0});

    var tweenSection4Arrow1 = TweenMax.to(elemSection4Arrow1, 0.5, {
        opacity:1,
        ease: Linear.easeNone
    });

    var scene2c = new ScrollMagic.Scene({
         triggerElement: '#section4-heading1-trigger',
    })
    .setTween(tweenSection4Arrow1)
    .addTo(scrollMagicController);

    // section-5 //

    // section5-heading1
    var elemSection5Heading1 = document.getElementById("section5-heading1");
    TweenMax.set(elemSection5Heading1, {bottom:'-30px', opacity: 0, position: 'relative'});

    var tweenSection5Heading1 = TweenMax.to(elemSection5Heading1, 1, {
        bottom: 0,
        opacity:1,
        ease: Linear.easeIn
    });

    var scene5 = new ScrollMagic.Scene({
        triggerElement: '#section4-arrow1-trigger',
    })
    .setTween(tweenSection5Heading1)
    .addTo(scrollMagicController);

    // section5-carousel1
    var elemSection5Video1 = document.getElementById("section5-video1");
    TweenMax.set(elemSection5Video1, {opacity: 0});

    var tweenSection5Video1 = TweenMax.to(elemSection5Video1, 0.5, {
        opacity:1,
        ease: Linear.easeNone
    });

    var scene5b = new ScrollMagic.Scene({
        triggerElement: '#section5-video1-trigger',
    })
    .setTween(tweenSection5Video1)
    .addTo(scrollMagicController);

    // section5-paragraph1
    var elemSection5Paragraph1 = document.getElementById("section5-paragraph1");
    TweenMax.set(elemSection5Paragraph1, {bottom:'-30px', opacity: 0, position: 'relative'});

    var tweenSection5Paragraph1 = TweenMax.to(elemSection5Paragraph1, 0.5, {
        bottom: 0,
        opacity:1,
        ease: Linear.easeNone
    });

    var scene5c = new ScrollMagic.Scene({
        triggerElement: '#section5-paragraph1-trigger',
    })
    .setTween(tweenSection5Paragraph1)
    .addTo(scrollMagicController);

    // section5-arrow1
    var elemSection5Arrow1 = document.getElementById("section5-arrow1");
    TweenMax.set(elemSection5Arrow1, {opacity: 0});

    var tweenSection5Arrow1 = TweenMax.to(elemSection5Arrow1, 0.5, {
        opacity:1,
        ease: Linear.easeNone
    });

    var scene2c = new ScrollMagic.Scene({
         triggerElement: '#section5-heading1-trigger',
    })
    .setTween(tweenSection5Arrow1)
    .addTo(scrollMagicController);

    // section-6 //

    // section6-heading1
    var elemSection6Heading1 = document.getElementById("section6-heading1");
    TweenMax.set(elemSection6Heading1, {bottom:'-30px', opacity: 0, position: 'relative'});

    var tweenSection6Heading1 = TweenMax.to(elemSection6Heading1, 1, {
        bottom: 0,
        opacity:1,
        ease: Linear.easeIn
    });

    var scene6 = new ScrollMagic.Scene({
        triggerElement: '#section5-arrow1-trigger',
    })
    .setTween(tweenSection6Heading1)
    .addTo(scrollMagicController);

    // section6-video1
    var elemSection6Image1 = document.getElementById("section6-image1");
    TweenMax.set(elemSection6Image1, {opacity: 0});

    var tweenSection6Image1 = TweenMax.to(elemSection6Image1, 0.5, {
        opacity:1,
        ease: Linear.easeNone
    });

    var scene6b = new ScrollMagic.Scene({
        triggerElement: '#section6-image1-trigger',
    })
    .setTween(tweenSection6Image1)
    .addTo(scrollMagicController);

    // section6-arrow1
    var elemSection6Arrow1 = document.getElementById("section6-arrow1");
    TweenMax.set(elemSection6Arrow1, {opacity: 0});

    var tweenSection6Arrow1 = TweenMax.to(elemSection6Arrow1, 0.5, {
        opacity:1,
        ease: Linear.easeNone
    });

    var scene2c = new ScrollMagic.Scene({
         triggerElement: '#section6-heading1-trigger',
    })
    .setTween(tweenSection6Arrow1)
    .addTo(scrollMagicController);

    // section-7 //

    // section7-heading1
    var elemSection7Heading1 = document.getElementById("section7-heading1");
    TweenMax.set(elemSection7Heading1, {bottom:'-30px', opacity: 0, position: 'relative'});

    var tweenSection7Heading1 = TweenMax.to(elemSection7Heading1, 1, {
        bottom: 0,
        opacity:1,
        ease: Linear.easeIn
    });

    var scene7 = new ScrollMagic.Scene({
        triggerElement: '#section6-arrow1-trigger',
    })
    .setTween(tweenSection7Heading1)
    .addTo(scrollMagicController);

    // section7-image1
    var elemSection7Image1 = document.getElementById("section7-image1");
    TweenMax.set(elemSection7Image1, {opacity: 0});

    var tweenSection7Image1 = TweenMax.to(elemSection7Image1, 0.5, {
        opacity:1,
        ease: Linear.easeNone
    });

    var scene7b = new ScrollMagic.Scene({
        triggerElement: '#section7-image1-trigger',
    })
    .setTween(tweenSection7Image1)
    .addTo(scrollMagicController);

    // section7-paragraph1
    var elemSection7Paragraph1 = document.getElementById("section7-paragraph1");
    TweenMax.set(elemSection7Paragraph1, {bottom:'-30px', opacity: 0, position: 'relative'});

    var tweenSection7Paragraph1 = TweenMax.to(elemSection7Paragraph1, 0.5, {
        bottom: 0,
        opacity:1,
        ease: Linear.easeNone
    });

    var scene7c = new ScrollMagic.Scene({
        triggerElement: '#section7-paragraph1-trigger',
    })
    .setTween(tweenSection7Paragraph1)
    .addTo(scrollMagicController);

    // section7-arrow1
    var elemSection7Arrow1 = document.getElementById("section7-arrow1");
    TweenMax.set(elemSection7Arrow1, {opacity: 0});

    var tweenSection7Arrow1 = TweenMax.to(elemSection7Arrow1, 0.5, {
        opacity:1,
        ease: Linear.easeNone
    });

    var scene2c = new ScrollMagic.Scene({
         triggerElement: '#section7-heading1-trigger',
    })
    .setTween(tweenSection7Arrow1)
    .addTo(scrollMagicController);

    // section-8 //

    // section8-heading1
    var elemSection8Heading1 = document.getElementById("section8-heading1");
    TweenMax.set(elemSection8Heading1, {bottom:'-30px', opacity: 0, position: 'relative'});

    var tweenSection8Heading1 = TweenMax.to(elemSection8Heading1, 1, {
        bottom: 0,
        opacity:1,
        ease: Linear.easeIn
    });

    var scene8 = new ScrollMagic.Scene({
        triggerElement: '#section7-arrow1-trigger',
    })
    .setTween(tweenSection8Heading1)
    .addTo(scrollMagicController);

    // section8-image1
    var elemSection8Image1 = document.getElementById("section8-image1");
    TweenMax.set(elemSection8Image1, {opacity: 0});

    var tweenSection8Image1 = TweenMax.to(elemSection8Image1, 0.5, {
        opacity:1,
        ease: Linear.easeNone
    });

    var scene8b = new ScrollMagic.Scene({
        triggerElement: '#section8-image1-trigger',
    })
    .setTween(tweenSection8Image1)
    .addTo(scrollMagicController);

    // section8-paragraph1
    var elemSection8Paragraph1 = document.getElementById("section8-paragraph1");
    TweenMax.set(elemSection8Paragraph1, {bottom:'-30px', opacity: 0, position: 'relative'});

    var tweenSection8Paragraph1 = TweenMax.to(elemSection8Paragraph1, 0.5, {
        bottom: 0,
        opacity:1,
        ease: Linear.easeNone
    });

    var scene8c = new ScrollMagic.Scene({
        triggerElement: '#section8-paragraph1-trigger',
    })
    .setTween(tweenSection8Paragraph1)
    .addTo(scrollMagicController);

    // ANCHORS //

    // anchor-1 //

    var anchor1 = new ScrollMagic.Scene({
         triggerElement: '#anchor-1',
         duration : $('.section-1').outerHeight(true)
    })
    .setClassToggle("#high1", "active") // add class toggle
    .addTo(scrollMagicController);

    // anchor-2 //

    var anchor2 = new ScrollMagic.Scene({
         triggerElement: '#section2-heading1-trigger',
         duration : $('.section-2').outerHeight(true)
    })
    .setClassToggle("#high2", "active") // add class toggle
    .addTo(scrollMagicController);

    // anchor-3 //

    var anchor3 = new ScrollMagic.Scene({
         triggerElement: '#section3-heading1-trigger',
         duration : $('.section-3').outerHeight(true)
    })
    .setClassToggle("#high3", "active") // add class toggle
    .addTo(scrollMagicController);

    // anchor-4 //

    var anchor4 = new ScrollMagic.Scene({
         triggerElement: '#section4-heading1-trigger',
         duration : $('.section-4').outerHeight(true)
    })
    .setClassToggle("#high4", "active") // add class toggle
    .addTo(scrollMagicController);

    // anchor-5 //

    var anchor5 = new ScrollMagic.Scene({
         triggerElement: '#section5-heading1-trigger',
         duration : $('.section-5').outerHeight(true)
    })
    .setClassToggle("#high5", "active") // add class toggle
    .addTo(scrollMagicController);

    // anchor-6 //

    var anchor6 = new ScrollMagic.Scene({
         triggerElement: '#section6-heading1-trigger',
         duration : $('.section-6').outerHeight(true)
    })
    .setClassToggle("#high6", "active") // add class toggle
    .addTo(scrollMagicController);

    // anchor-7 //

    var anchor7 = new ScrollMagic.Scene({
         triggerElement: '#section7-heading1-trigger',
         duration : $('.section-7').outerHeight(true)
    })
    .setClassToggle("#high7", "active") // add class toggle
    .addTo(scrollMagicController);

    // anchor-8 //

    var anchor8 = new ScrollMagic.Scene({
         triggerElement: '#section8-heading1-trigger',
         // duration : $('.section-8').outerHeight(true) // you don't need that last anchor to end.
    })
    .setClassToggle("#high8", "active") // add class toggle
    .addTo(scrollMagicController);

    // Add debug indicators fixed on right side
    // scene2.addIndicators();
    // scene3.addIndicators();
    // scene3b.addIndicators();
    // scene4.addIndicators();
    // scene4b.addIndicators();
    // scene4c.addIndicators();
    // scene5.addIndicators();
    // scene5b.addIndicators();
    // scene5c.addIndicators();
    // scene6.addIndicators();
    // scene6b.addIndicators();
    // scene7.addIndicators();
    // scene7b.addIndicators();
    // scene7c.addIndicators();
    // scene8.addIndicators();
    // scene8b.addIndicators();
    // scene8c.addIndicators();
    // anchor1.addIndicators();
    // anchor2.addIndicators();
    // anchor3.addIndicators();
    // anchor4.addIndicators();
    // anchor5.addIndicators();
    // anchor6.addIndicators();
    // anchor7.addIndicators();
    // anchor8.addIndicators();

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
