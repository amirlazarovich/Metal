metal.ns('metal.ui.window');

/**
 *
 * @class window
 */
metal.ui.Window = metal.extend(metal.ui.AbstractView, {

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
     * The Titanium window this class wraps
     *
     * @property {Titanium.UI.Window} titaniumComponent
     */
    titaniumComponent: undefined,
    
    /**
     * @constructor
     */
    constructor: function(config) {
        metal.overrideClass(this, config);
        metal.debug.info('Window::' + this.id, 'constructor');

        // Set Titanium component
        this.titaniumComponent = Ti.UI.createWindow(this.properties);

        // Call parent constructor
        metal.ui.Window.superclass.constructor.call(this);
    }
});

