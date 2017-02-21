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
        $( "#widget-spjs-container" ).draggable({ handle: ".widget-drag-handle" });
    } );

    /* Make widgets visible / invisible */
    $( "#hide-show-widget-spjs" ).on( "click", function(event) {
         $( "#widget-spjs-container" ).toggle( "show" );
    });

    /*
    $( "#hide-show-widget-jsps-on-widget" ).click(function(event) {
         $( "#widget-jsps-container" ).toggle( "show" );
    });
    */

});
