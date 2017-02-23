$(document).ready(function(){

    /*
     * Make Navbar collapseable
     **/
    $( "#navigation-bar-collapse" ).on( "click", function(event) {
        $( "#navigation-bar" ).toggle( "show" );
        $( "#navigation-bar-collapsed" ).toggle( "show" );
    });

    $( "#navigation-bar-decollapse" ).on( "click", function(event) {
        $( "#navigation-bar-collapsed" ).toggle( "show" );
        $( "#navigation-bar" ).toggle( "show" );
    });

    /*
     * Make widgets draggable
     **/
    $( function() {
        var x0 = 0;
        var x_offset = 35;
        var x_offset_3dviewer = 60;
        var x_offset_axes = 90;
        var y0 = 70;

        var window_widget_spjs_draggable = [x0, y0, $( window ).width() - $( "#widget-spjs-container" ).width() - x0 - x_offset, $( window ).height() - y0];
        $( "#widget-spjs-container" ).draggable({
            handle: ".widget-drag-handle",
            containment: window_widget_spjs_draggable,
            stack: ".draggable"
          });

        var window_widget_console_draggable = [x0, y0, $( window ).width() - $( "#widget-console-container" ).width() - x0 - x_offset, $( window ).height() - y0];
        $( "#widget-console-container" ).draggable({
            handle: ".widget-drag-handle",
            containment: window_widget_console_draggable,
            stack: ".draggable"
          });

        var window_widget_axes_draggable = [x0 + x_offset_axes, y0, $( window ).width() - $( "#widget-axes-container" ).width() - x0 - x_offset, $( window ).height() - y0];
        $( "#widget-axes-container" ).draggable({
            handle: ".widget-drag-handle",
            containment: window_widget_axes_draggable,
            stack: ".draggable"
          });

        var window_widget_3dviewer_draggable = [x0, y0, $( window ).width() - $( "#widget-3dviewer-container" ).width() - x0 - x_offset_3dviewer, $( window ).height() - y0];
        $( "#widget-3dviewer-container" ).draggable({
            handle: ".widget-drag-handle",
            containment: window_widget_3dviewer_draggable,
            start: function( event, ui ) {
                $( "#widget-3dviewer-panel-heading" ).css( "z-index", "100" );
            },
            stop: function( event, ui ) {
                $( "#widget-3dviewer-panel-heading" ).css( "z-index", "1" );
            }
          });
    } );

    /*
     * Make widgets visible / invisible
     **/
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
