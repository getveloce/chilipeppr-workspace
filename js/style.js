$(document).ready(function(){
    var x0 = 0;
    var x_offset = 35;
    var x_offset_3dviewer = 60;
    var x_offset_axes = 90;
    var y0 = 70;

    var stack_index = 100;

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
    var window_widget_spjs_draggable = [x0, y0, $( window ).width() - $( "#widget-spjs-container" ).width() - x0 - x_offset, $( window ).height() - y0];
    $( "#widget-spjs-container" ).draggable({
        handle: ".widget-drag-handle",
        containment: window_widget_spjs_draggable,
        start: function( event, ui ) {
            $( "#widget-spjs-container" ).css( "z-index", stack_index++ );
        }
      });

    var window_widget_console_draggable = [x0, y0, $( window ).width() - $( "#widget-console-container" ).width() - x0 - x_offset, $( window ).height() - y0];
    $( "#widget-console-container" ).draggable({
        handle: ".widget-drag-handle",
        containment: window_widget_console_draggable,
        start: function( event, ui ) {
            $( "#widget-console-container" ).css( "z-index", stack_index++ );
        }
      });

    var window_widget_axes_draggable = [x0 + x_offset_axes, y0, $( window ).width() - $( "#widget-axes-container" ).width() - x0 - x_offset, $( window ).height() - y0];
    $( "#widget-axes-container" ).draggable({
        handle: ".widget-drag-handle",
        containment: window_widget_axes_draggable,
        start: function( event, ui ) {
            $( "#widget-axes-container" ).css( "z-index", stack_index++ );
        }
      });

    var window_widget_autolevel_draggable = [x0, y0, $( window ).width() - $( "#widget-autolevel-container" ).width() - x0 - x_offset, $( window ).height() - y0];
    $( "#widget-autolevel-container" ).draggable({
        handle: ".widget-drag-handle",
        containment: window_widget_autolevel_draggable,
        start: function( event, ui ) {
            $( "#widget-autolevel-container" ).css( "z-index", stack_index++ );
        }
      });

    var window_widget_gcodelist_draggable = [x0, y0, $( window ).width() - $( "#widget-gcodelist-container" ).width() - x0 - x_offset, $( window ).height() - y0];
    $( "#widget-gcodelist-container" ).draggable({
        handle: ".widget-drag-handle",
        containment: window_widget_gcodelist_draggable,
        start: function( event, ui ) {
            $( "#widget-gcodelist-container" ).css( "z-index", stack_index++ );
        }
      });

      var window_widget_grbl_draggable = [x0, y0, $( window ).width() - $( "#widget-grbl-container" ).width() - x0 - x_offset, $( window ).height() - y0];
      $( "#widget-grbl-container" ).draggable({
          handle: ".widget-drag-handle",
          containment: window_widget_grbl_draggable,
          start: function( event, ui ) {
              $( "#widget-grbl-container" ).css( "z-index", stack_index++ );
          }
        });

    var window_widget_eagle_draggable = [x0, y0, $( window ).width() - $( "#widget-eagle-container" ).width() - x0 - x_offset, $( window ).height() - y0];
    $( "#widget-eagle-container" ).draggable({
        handle: ".widget-drag-handle",
        containment: window_widget_eagle_draggable,
        start: function( event, ui ) {
            $( "#widget-eagle-container" ).css( "z-index", stack_index++ );
        }
      });

    var window_widget_3dviewer_draggable = [x0, y0, $( window ).width() - $( "#widget-3dviewer-container" ).width() - x0 - x_offset_3dviewer, $( window ).height() - y0];
    $( "#widget-3dviewer-container" ).draggable({
        handle: ".widget-drag-handle",
        containment: window_widget_3dviewer_draggable,
        start: function( event, ui ) {
            $( "#widget-3dviewer-panel-heading" ).css( "z-index", stack_index++ );
        }
      });

    /*
     * Make widgets visible / invisible
     **/
    $( "#hide-show-widget-spjs" ).on( "click", function(event) {
        $( "#widget-spjs-container" ).css( "z-index", stack_index++ );
        $( "#widget-spjs-container" ).toggle( "show" );
    });

    $( "#hide-show-widget-console" ).on( "click", function(event) {
        $( "#widget-console-container" ).css( "z-index", stack_index++ );
        $( "#widget-console-container" ).toggle( "show" );
    });

    $( "#hide-show-widget-axes" ).on( "click", function(event) {
        $( "#widget-axes-container" ).css( "z-index", stack_index++ );
        $( "#widget-axes-container" ).toggle( "show" );
    });

    $( "#hide-show-widget-autolevel" ).on( "click", function(event) {
        $( "#widget-autolevel-container" ).css( "z-index", stack_index++ );
        $( "#widget-autolevel-container" ).toggle( "show" );
    });

    $( "#hide-show-widget-gcodelist" ).on( "click", function(event) {
        $( "#widget-gcodelist-container" ).css( "z-index", stack_index++ );
        $( "#widget-gcodelist-container" ).toggle( "show" );
    });

    $( "#hide-show-widget-grbl" ).on( "click", function(event) {
        $( "#widget-grbl-container" ).css( "z-index", stack_index++ );
        $( "#widget-grbl-container" ).toggle( "show" );
    });

    $( "#hide-show-widget-eagle" ).on( "click", function(event) {
        $( "#widget-eagle-container" ).css( "z-index", stack_index++ );
        $( "#widget-eagle-container" ).toggle( "show" );
    });

    $( "#hide-show-widget-3dviewer" ).on( "click", function(event) {
        $( "#widget-3dviewer-panel-heading" ).css( "z-index", stack_index++ );
        $( "#widget-3dviewer-container" ).toggle( "show" );
    });

});
