metal.ns('metal.ui.MyWindow');

/**
 *
 * @class window
 */
metal.ui.MyWindow = metal.extend(metal.ui.Window, {

    /**
     * The id of this window
     *
     * @private
     * @property {String} id
     */
    id: 'MyWindow',

    type: 'MyWindow',

    /**
     * Holds all this view's properties
     *
     * @property {Object} properties
     */
    properties : {
        title: 'my window',
        myWindow: true
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
        metal.debug.info('MyWindow::' + this.id, 'constructor');

        // Call parent constructor
        metal.ui.MyWindow.superclass.constructor.call(this);
    },
    
    /**
     * Titanium properties
     * 
     * @property {Object} titaniumProperties
     */
    titaniumProperties: {
        TEST: {
            type: 'string'
        }
    }
});

