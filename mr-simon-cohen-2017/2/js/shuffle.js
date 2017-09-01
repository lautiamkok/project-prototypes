// $( document ).ready(function() {});
$(function() {

    $(".shuffle").each(function() {
        var $this = $(this);

        var elems = $this.children();

        var origin;

        elems.sort(function() {
            return (Math.round(Math.random())-0.5);
        });

        $this.empty();

        for(var i=0; i < elems.length; i++) {
            // Append stops html5 video from autoplay.
            // $this.append(elems[i]);

            // Use clone instead.
            // $(elems[i]).clone(true).appendTo($this);

            // Use get html instead to fix Firefox.
            origin = $(elems[i]).prop('outerHTML');
            $this.append(origin);
        }
    });

});
