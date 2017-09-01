// $( document ).ready(function() {});
$(function() {

    $(".shuffle").each(function() {
        var $this = $(this);

        var elems = $this.children();

        elems.sort(function() {
            return (Math.round(Math.random())-0.5);
        });

        $this.empty();

        for(var i=0; i < elems.length; i++) {
            // Append stops html5 video from autoplay.
            // $this.append(elems[i]);

            // Use clone instead.
            $(elems[i]).clone(true).appendTo($this);
        }
    });

});
