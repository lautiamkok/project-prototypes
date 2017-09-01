/*
 * Bootstrap Image Gallery JS
 * https://github.com/blueimp/Bootstrap-Image-Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*global blueimp, $ */

$(function () {
    'use strict';
    // Bootstrap Image Gallery provides the additional useBootstrapModal option,
    // which enables the original borderless layout as seen in the demo. The
    // easiest way to enable this option is to adjust the lightbox container and
    // set the data-use-bootstrap-modal attribute to false:
    //
    // <div id="blueimp-gallery" class="blueimp-gallery" data-use-bootstrap-modal="false">
    // <!-- ... -->
    // </div>
    //
    // @ref: https://github.com/blueimp/Bootstrap-Image-Gallery/blob/master/README.md

    // Or:
    // $('#blueimp-gallery').data('useBootstrapModal', false);

    // Image lightbox.
    $('#blueimp-gallery').toggleClass('blueimp-gallery-controls', true);

    // Video lightbox.
    $('.video-gallery-button').on('click', function (event) {
        event.preventDefault();

        // Get the video data.
        var stringify = $(this).data("video");

        // Convert string to js object.
        var data =  eval("("+stringify+")");

        blueimp.Gallery([
            data
            // {
            //   title: 'Sintel',
            //   href: 'https://archive.org/download/Sintel/sintel-2048-surround_512kb.mp4',
            //   type: 'video/mp4',
            //   poster: 'https://i.imgur.com/MUSw4Zu.jpg'
            // },
            // {
            //   title: 'Big Buck Bunny',
            //   href: 'https://upload.wikimedia.org/wikipedia/commons/7/75/' +
            //     'Big_Buck_Bunny_Trailer_400p.ogg',
            //   type: 'video/ogg',
            //   poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/' +
            //     'Big.Buck.Bunny.-.Opening.Screen.png/' +
            //     '800px-Big.Buck.Bunny.-.Opening.Screen.png'
            // },
            // {
            //   title: 'Elephants Dream',
            //   href: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/8/83/' +
            //     'Elephants_Dream_%28high_quality%29.ogv/' +
            //     'Elephants_Dream_%28high_quality%29.ogv.360p.webm',
            //   type: 'video/webm',
            //   poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/' +
            //     'Elephants_Dream_s1_proog.jpg/800px-Elephants_Dream_s1_proog.jpg'
            // },
            // {
            //   title: 'LES TWINS - An Industry Ahead',
            //   type: 'text/html',
            //   youtube: 'zi4CIXpx7Bg'
            // },
            // {
            //   title: 'KN1GHT - Last Moon',
            //   type: 'text/html',
            //   vimeo: '73686146',
            //   poster: 'https://secure-a.vimeocdn.com/ts/448/835/448835699_960.jpg'
            // }
        ], $('#blueimp-gallery').data())
      })
})
