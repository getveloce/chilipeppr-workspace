/* global cpdefine chilipeppr cprequire */
cprequire_test(["inline:com-chilipeppr-workspace-de"], function(ws) {

    console.log("initting workspace");

    /**
     * The Root workspace (when you see the ChiliPeppr Header) auto Loads the Flash
     * Widget so we can show the 3 second flash messages. However, in test mode we
     * like to see them as well, so just load it from the cprequire_test() method
     * so we have similar functionality when testing this workspace.
     */
    var loadFlashMsg = function() {
        chilipeppr.load("#com-chilipeppr-widget-flash-instance",
            "http://fiddle.jshell.net/chilipeppr/90698kax/show/light/",
            function() {
                console.log("mycallback got called after loading flash msg module");
                cprequire(["inline:com-chilipeppr-elem-flashmsg"], function(fm) {
                    //console.log("inside require of " + fm.id);
                    fm.init();
                });
            }
        );
    };
    loadFlashMsg();

    // Init workspace
    ws.init();
} /*end_test*/ );

// This is the main definition of your widget. Give it a unique name.
cpdefine("inline:com-chilipeppr-workspace-de", ["chilipeppr_ready"], function() {
    return {
        /**
         * The ID of the widget. You must define this and make it unique.
         */
        id: "com-chilipeppr-workspace-de", // Make the id the same as the cpdefine id
        name: "Workspace / DE", // The descriptive name of your widget.
        desc: `A ChiliPeppr Workspace DE.`,
        /**
         * Contains reference to the Console widget object. Hang onto the reference
         * so we can resize it when the window resizes because we want it to manually
         * resize to fill the height of the browser so it looks clean.
         */
        widgetConsole: null,
        /**
         * Contains reference to the Serial Port JSON Server object.
         */
        widgetSpjs: null,
        /**
         * The workspace's init method. It loads the all the widgets contained in the workspace
         * and inits them.
         */
        init: function() {

            // Most workspaces will instantiate the Serial Port JSON Server widget
            this.loadSpjsWidget();
            // Most workspaces will instantiate the Serial Port Console widget
            this.loadConsoleWidget(function() {
                setTimeout(function() { $(window).trigger('resize'); }, 100);
            });

            this.loadAxesWidget();

            this.loadAutolevelWidget();

            this.loadGcodelistWidget();

            this.loadGrblWidget();

            //this.loadEagleWidget();

            this.load3DViewerWidget();

            // Setup an event to react to window resize. This helps since
            // some of our widgets have a manual resize to cleanly fill
            // the height of the browser window. You could turn this off and
            // just set widget min-height in CSS instead
            //this.setupResize();
            setTimeout(function() { $(window).trigger('resize'); }, 100);

        },
        /**
         * Listen to window resize event.
         */
        setupResize: function() {
            $(window).on('resize', this.onResize.bind(this));
        },
        /**
         * When browser window resizes, forcibly resize the Console window
         */
        onResize: function() {
            if (this.widgetConsole) this.widgetConsole.resize();
        },
        /**
         * Load the Serial Port JSON Server widget via chilipeppr.load()
         */
        loadSpjsWidget: function(callback) {
            chilipeppr.load(
                "#widget-spjs-container",
                "https://raw.githubusercontent.com/getveloce/chilipeppr-workspace/master/widgets/widget-spjs.html",
                function() {
                    // Callback after widget loaded into #myDivWidgetSerialport
                    // Now use require.js to get reference to instantiated widget
                    cprequire(
                        ["inline:com-chilipeppr-widget-serialport"], // the id you gave your widget
                        function(myObjWidgetSerialport) {
                            // Callback that is passed reference to the newly loaded widget
                            console.log("Widget / Serial Port JSON Server just got loaded.", myObjWidgetSerialport);
                            myObjWidgetSerialport.init();
                    });
                }
            );
        },
        /**
         * Load the Console widget via chilipeppr.load()
         */
        loadConsoleWidget: function(callback) {
          chilipeppr.load(
            "#widget-console-container",
            "https://raw.githubusercontent.com/getveloce/chilipeppr-workspace/master/widgets/widget-console.html",
            function() {
              // Callback after widget loaded into #myDivWidgetSpconsole
              // Now use require.js to get reference to instantiated widget
              cprequire(
                ["inline:com-chilipeppr-widget-spconsole"], // the id you gave your widget
                function(myObjWidgetSpconsole) {
                  // Callback that is passed reference to the newly loaded widget
                  console.log("Widget / Serial Port Console v1.7 just got loaded.", myObjWidgetSpconsole);
                  myObjWidgetSpconsole.init();
                }
              );
            }
          );
        },
        /**
         * Load the Axes widget via chilipeppr.load()
         */
        loadAxesWidget: function(callback) {
          chilipeppr.load(
            "#widget-axes-container",
            "https://raw.githubusercontent.com/getveloce/chilipeppr-workspace/master/widgets/widget-axes.html",
            function() {
              // Callback after widget loaded into #myDivWidgetXyz
              // Now use require.js to get reference to instantiated widget
              cprequire(
                ["inline:com-chilipeppr-widget-xyz"], // the id you gave your widget
                function(myObjWidgetXyz) {
                  // Callback that is passed reference to the newly loaded widget
                  console.log("Widget / XYZ Axes v2 just got loaded.", myObjWidgetXyz);
                  myObjWidgetXyz.init();
                }
              );
            }
          );
        },
        /**
         * Load the Autolevel widget via chilipeppr.load()
         */
        loadAutolevelWidget: function(callback) {
          chilipeppr.load(
            "#widget-autolevel-container",
            "https://raw.githubusercontent.com/getveloce/chilipeppr-workspace/master/widgets/widget-autolevel.html",
            function() {
              // Callback after widget loaded into #myDivWidgetAutolevel
              // Now use require.js to get reference to instantiated widget
              cprequire(
                ["inline:com-chilipeppr-widget-autolevel"], // the id you gave your widget
                function(myObjWidgetAutolevel) {
                  // Callback that is passed reference to the newly loaded widget
                  console.log("Widget / Auto-Level just got loaded.", myObjWidgetAutolevel);
                  myObjWidgetAutolevel.init();
                }
              );
            }
          );
        },
        /**
         * Load the Gcodelist widget via chilipeppr.load()
         */
        loadGcodelistWidget: function(callback) {
          chilipeppr.load(
            "#widget-gcodelist-container",
            "https://raw.githubusercontent.com/getveloce/chilipeppr-workspace/master/widgets/widget-gcodelist.html",
            function() {
              // Callback after widget loaded into #myDivWidgetGcode
              // Now use require.js to get reference to instantiated widget
              cprequire(
                ["inline:com-chilipeppr-widget-gcode"], // the id you gave your widget
                function(myObjWidgetGcode) {
                  // Callback that is passed reference to the newly loaded widget
                  console.log("Widget / Gcode v8 just got loaded.", myObjWidgetGcode);
                  myObjWidgetGcode.init();
                }
              );
            }
          );
        },
        /**
         * Load the GRBL widget via chilipeppr.load()
         */
        loadGrblWidget: function(callback) {
          chilipeppr.load(
            "#widget-widget-grbl-container-container",
            "https://raw.githubusercontent.com/getveloce/chilipeppr-workspace/master/widgets/widget-grbl.html",
            function() {
              // Callback after widget loaded into #myDivWidgetGcode
              // Now use require.js to get reference to instantiated widget
              cprequire(
                ["inline:com-chilipeppr-widget-grbl"], // the id you gave your widget
                function(myObjWidgetGcode) {
                  // Callback that is passed reference to the newly loaded widget
                  console.log("Widget / GRBL v1.5b just got loaded.", myObjWidgetGcode);
                  myObjWidgetGcode.init();
                }
              );
            }
          );
        },
        /**
         * Load the Eagle widget via chilipeppr.load()
         */
        loadEagleWidget: function(callback) {
          chilipeppr.load(
            "#widget-eagle-container",
            "https://raw.githubusercontent.com/getveloce/chilipeppr-workspace/master/widgets/widget-eagle.html",
            function() {
              // Callback after widget loaded into #myDivWidgetEagle
              // Now use require.js to get reference to instantiated widget
              cprequire(
                ["inline:com-chilipeppr-widget-eagle"], // the id you gave your widget
                function(myObjWidgetEagle) {
                  // Callback that is passed reference to the newly loaded widget
                  console.log("Widget / Eagle BRD v5.4 just got loaded.", myObjWidgetEagle);
                  myObjWidgetEagle.init();
                }
              );
            }
          );
        },
        /**
         * Load the 3D Viewer widget via chilipeppr.load()
         */
        load3DViewerWidget: function(callback) {
          chilipeppr.load(
            "#widget-3dviewer-container",
            "https://raw.githubusercontent.com/getveloce/chilipeppr-workspace/master/widgets/widget-3dviewer.html",
            function() {
              // Callback after widget loaded into #myDivWidget3dviewer
              // Now use require.js to get reference to instantiated widget
              cprequire(
                ["inline:com-chilipeppr-widget-3dviewer"], // the id you gave your widget
                function(myObjWidget3dviewer) {
                  // Callback that is passed reference to the newly loaded widget
                  console.log("Widget / 3D GCode Viewer just got loaded.", myObjWidget3dviewer);
                  myObjWidget3dviewer.init();
                }
              );
            }
          );
        },
    }
});
