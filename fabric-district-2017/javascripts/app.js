// Must wait until DOM is ready before initiating the modules.
// http://stackoverflow.com/questions/9899372/pure-javascript-equivalent-to-jquerys-ready-how-to-call-a-function-when-the
// http://stackoverflow.com/questions/10886190/check-if-a-div-does-not-exist-with-javascript
docReady(function() {
    $(document).foundation();

    // Add custom regex for UK mobile and landline number only.
    // http://regexlib.com/(X(1)A(tZROB7k-twVB-offup60VUWj31cghbidKadtEHS6h5jx2WCMy5t4xWf7AdWCkoYaTjk8CmaJpONO1MO8LGjGyuCGb6eNSzuhtGR9pokhLoZhx6auxKYu08uVScDJbh1hePuPjnnZbytT8_LA_lmYH-qWwc-Bsn-fp3KyBLKgUcMqsgcrtwgnOYNpjVfw066f0))/UserPatterns.aspx?authorid=d95177b0-6014-4e73-a959-73f1663ae814&AspxAutoDetectCookieSupport=1
    // https://stackoverflow.com/questions/11518035/regular-expression-for-uk-based-and-only-numeric-phone-number-in-cakephp
    Foundation.Abide.defaults.patterns['UK_number_only'] = /^(((\(?0\d{4}\)?\s?\d{3}\s?\d{3})|(\(?0\d{3}\)?\s?\d{3}\s?\d{4})|(\(?0\d{2}\)?\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?|(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3})$/;

    // Autofocus when the page is loaded.
    // https://stackoverflow.com/questions/1591910/how-to-focus-on-a-form-input-text-field-on-page-load-using-jquery
    setTimeout(function() {
        $(".form-input-email").focus();
    }, 2000);

    // Validate email subscription.
    $("#subscription-email-input").on("invalid.zf.abide", function(ev,el) {
      var group = el.parents('form');
      $(".form-error", group).addClass("is-visible");
    });

    $("#subscription-email-input").on("valid.zf.abide", function(ev,el) {
      var group = el.parents('form');
      $(".form-error", group).removeClass("is-visible");
    });

    // Submit message form.
    // http://foundation.zurb.com/forum/posts/37267-foundation-6-abide-trigger-without-submit-button
    // var form = $("form#formComment");
    var form = $("form.form-submit");
    form.bind("submit",function(e) {
      e.preventDefault();
      console.log("submit intercepted");
      return false;
    });
    form.bind("forminvalid.zf.abide", function(e,target) {
      console.log("form is invalid");
    });

    form.bind("formvalid.zf.abide", function(e,target) {
      console.log("form is valid");

      var param = target.serialize();
      $.ajax({
        type: "POST",
        url: target.attr('action'),
        data: param,
        contentType: "application/x-www-form-urlencoded",
        // success: function(data) {
        //     $("#result_div").html(data).foundaton();
        // },
        success: function(responseData, textStatus, jqXHR) {
            // Clear the form.
            target.find("input[type=text], input[type=email], textarea").val("");

            console.log(responseData);
            // alert("data saved");

            // Foundation Reveal - trigger reveal.
            // http://zurb.com/university/lessons/ajaxing-dynamic-content-with-foundation
            $('#reveal1').foundation('open');
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
      });
    });

    // Foundation reveal - on reveal
    // http://zurb.com/university/lessons/dynamically-update-your-web-pages
    $('#reveal1').on('open.zf.reveal', function() {
      //artificially slow down load to let you see the loading state
      setTimeout(function() {
        $.ajax('https://codepen.io/kball/pen/rLKrkO.html').
          done(function(content) {
            $('#reveal1').html(content);
            $('#reveal1').trigger('resizeme.zf.reveal');
          });
      }, 500);
    });

    // Textarea autosize.
    // http://www.jacklmoore.com/autosize/
    // https://github.com/jackmoore/autosize
    // https://www.npmjs.com/package/autosize
    // from a jQuery collection
    autosize($('textarea'));

    // AOS scroll reveal.
    // http://michalsnik.github.io/aos/
    // https://css-tricks.com/aos-css-driven-scroll-animation-library/
    AOS.init({
        duration: 1200,
    });
});
