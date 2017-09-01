'use strict'

// Import node modules.
import DocReady from 'es6-docready'
import $ from 'jquery'
import 'jquery-ui-bundle'
import 'foundation-sites'
import Swiper from 'swiper'

// Must wait until DOM is ready before initiating the modules.
DocReady(() => {
  console.log("DOM is ready. Let's party")
  $(document).foundation()

  // Initialize Swiper: slide
  var swiperSlide = new Swiper('.slide-swiper-block .swiper-container', {
    pagination: '.slide-swiper-block .swiper-pagination',
    slidesPerView: 'auto',
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    freeMode: true,
    keyboardControl: true,
  })

  // Affix
  var affix = $('.affix')
  affix.find('.affix-nav').animate({
    height: 'toggle'
  },
   600,
  'easeOutExpo',
  function () {
      // do something or nothing.
  })

  // Show/ hide menu main.
  var buttonShowMenu = $('.button-show-menu')
  var buttonHideMenu = $('.button-hide-menu')
  buttonShowMenu.on('click', function () {

    // Toggle between two classes.
    // $(this).find('i').toggleClass('fi-list fi-x')

    // Toggle text.
    // if ($(this).find('i').text() == "menu") {
    //   $(this).find('i').text("close")
    // } else {
    //   $(this).find('i').text("menu")
    // }

    // Toggle hide.
    buttonShowMenu.toggleClass('hide')
    buttonHideMenu.toggleClass('hide')

    affix.find('.affix-nav').animate({
      height: 'toggle'
    },
     600,
    'easeOutExpo',
    function () {
        // do something or nothing.
    })
    return false
  })

  buttonHideMenu.on('click', function () {

    // Toggle hide.
    buttonShowMenu.toggleClass('hide')
    buttonHideMenu.toggleClass('hide')

    affix.find('.affix-nav').animate({
      height: 'toggle'
    },
     600,
    'easeOutExpo',
    function () {
        // do something or nothing.
    })
    return false
  })

  // Get Z Foundation media query screen size.
  // http://foundation.zurb.com/sites/docs/javascript-utilities.html#mediaquery
  function getZFcurrentMediaQuery () {
    return Foundation.MediaQuery.current
  };

  window.addEventListener('resize', () => {
    var current = getZFcurrentMediaQuery()
    console.log('Screen size: ' + current)
  })

  // https://stackoverflow.com/questions/10328665/how-to-detect-browser-minimize-and-maximize-state-in-javascript
  document.addEventListener('visibilitychange', () => {
    console.log(document.hidden, document.visibilityState)
  }, false)
})
