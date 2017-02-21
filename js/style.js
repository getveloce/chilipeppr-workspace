$(document).ready(function(){

    /* Make Navbar collapseable */
    $( "#navigation-bar-collapse" ).on( "click", function(event) {
        $( "#navigation-bar" ).toggle( "show" );
        $( "#navigation-bar-collapsed" ).toggle( "show" );
    });

    $( "#navigation-bar-decollapse" ).on( "click", function(event) {
        $( "#navigation-bar-collapsed" ).toggle( "show" );
        $( "#navigation-bar" ).toggle( "show" );
    });

    /* Make widgets draggable */
    $( function() {
        $( "#widget-jsps-container" ).draggable({ handle: ".widget-drag-handle" });
    } );

    /* Make widgets visible / invisible */
    $( "#hide-show-widget-jsps" ).on( "click", function(event) {
         $( "#widget-jsps-container" ).toggle( "show" );
    });

    $( "#hide-show-widget-jsps-on-widget" ).click(function(event) {
         $( "#widget-jsps-container" ).toggle( "show" );
    });

});
