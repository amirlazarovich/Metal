metal.ns('metal.ui.window');

/**
 *
 * @class window
 */
metal.ui.Window = metal.extend(metal.ui.AbstractMetalView, (function() {

    return {
        /**
         * The id of this window
         *
         * @private
         * @property {String} id
         */
        id: 'MetalWindow',

        type: 'MetalWindow',

        /**
         * Holds all this view's properties
         *
         * @property {Object} properties
         */
        properties : {
            title: 'window',
            fullscreen: true
        },

        /**
         * The window this class wraps
         *
         * @property {Titanium.UI.Window} view
         */
        view: undefined,

        /**
         * @constructor
         */
        constructor: function(config) {
            metal.overrideClass(this, config);
            metal.debug.info('Window::' + this.id, 'constructor');

            // Set native component
            this.view = Ti.UI.createWindow(this.properties);

            // Call parent constructor
            metal.ui.Window.superclass.constructor.call(this);
        }
    };
})());

