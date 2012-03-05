/*
*
* Simple Parallax, 01/03/2012
*
* Contributors
* @felquis, @cironunesdev
* DEMO: http://jsfiddle.net/6qhVN/
*/

!(function( $, window, document ) {
    var $doc = $(document),
            body = document.body,
            val = 0.2,
            limit = 1;

    $(function(){

      $doc.on('mousemove', function( e ){

            var //first proprities to calculate the parallax
            xMouse = e.pageX,
            yMouse = e.pageY,
            xCenter = body.clientWidth / 2,
            yCenter = body.clientHeight / 2,
            offsetLeft = xMouse - xCenter,
            offsetTop = yMouse - yCenter,
            i,

            //then caching dom elem and your lenght
            $elem = $('.parallax-item');

            $elem.each(function( i ) {
                $(this).css({
                    left: offsetLeft * val,
                    top: offsetTop * val
                });

                console.log(val);

                val += 0.2;

                if( val === limit ) {
                    val = 0.2;
                }
            });

        });

    });
}( jQuery, window, document ))