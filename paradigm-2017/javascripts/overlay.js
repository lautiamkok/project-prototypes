'use strict'

import $ from 'jquery'
import 'jquery-ui-bundle'

// Fade in the overlay when hover on the navbar.
// https://stackoverflow.com/questions/45284520/css-change-the-style-of-another-element-when-a-link-is-hovered
export default function overlay () {
  $('.navbar-items[data-opacity-target]').hover(function () {
    var selector = $(this).data('opacity-target')
    $(selector).fadeIn('fast')
  }, function () {
    var selector = $(this).data('opacity-target')
    $(selector).fadeOut(500, function () {
    })
  })
}
