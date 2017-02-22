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

    /* Make widgets draggable and set max height of console widget*/
    $( function() {
        var x0 = 0;
        var y0 = 70;
        var window_widget_draggable = [x0, y0, $( window ).width() - x0, $( window ).height() - y0];

        $( "#widget-spjs-container" ).draggable({ handle: ".widget-drag-handle", containment: window_widget_draggable ,stack: ".draggable" });
        $( "#widget-console-container" ).draggable({ handle: ".widget-drag-handle", containment: window_widget_draggable, stack: ".draggable" });
        $( "#widget-axes-container" ).draggable({ handle: ".widget-drag-handle", containment: "window" , stack: ".draggable" });
        $( "#widget-3dviewer-container" ).draggable({ handle: ".widget-drag-handle", containment: window_widget_draggable });
    } );

    /* Make widgets visible / invisible */
    $( "#hide-show-widget-spjs" ).on( "click", function(event) {
         $( "#widget-spjs-container" ).toggle( "show" );
    });

    $( "#hide-show-widget-console" ).on( "click", function(event) {
         $( "#widget-console-container" ).toggle( "show" );
    });

    $( "#hide-show-widget-axes" ).on( "click", function(event) {
         $( "#widget-axes-container" ).toggle( "show" );
    });

    $( "#hide-show-widget-3dviewer" ).on( "click", function(event) {
         $( "#widget-3dviewer-container" ).toggle( "show" );
    });

});
