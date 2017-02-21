// This is the main definition of your widget. Give it a unique name.
cpdefine("inline:com-chilipeppr-workspace-sample", ["chilipeppr_ready"], function() {
    return {
        /**
         * The ID of the widget. You must define this and make it unique.
         */
        id: "com-chilipeppr-workspace-sample", // Make the id the same as the cpdefine id
        name: "Workspace / Sample", // The descriptive name of your widget.
        desc: `A ChiliPeppr Workspace sample.`,
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
            // Setup an event to react to window resize. This helps since
            // some of our widgets have a manual resize to cleanly fill
            // the height of the browser window. You could turn this off and
            // just set widget min-height in CSS instead
            this.setupResize();
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
    }
});
